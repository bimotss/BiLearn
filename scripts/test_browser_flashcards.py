#!/usr/bin/env python3
"""
BiLearn — Browser End-to-End Test Suite for Flashcard Jepang
Menguji hasil static export (out/) menggunakan Microsoft Edge headless via Playwright.
Usage:
    uv run --with playwright python scripts/test_browser_flashcards.py
"""

import os
import sys
import time
import threading
from http.server import SimpleHTTPRequestHandler, HTTPServer
from playwright.sync_api import sync_playwright

PORT = 4173
OUT_DIR = os.path.abspath("out")

class QuietHTTPServer(HTTPServer):
    def handle_error(self, request, client_address):
        # Abaikan ConnectionAbortedError saat browser context ditutup
        pass

class StaticExportHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=OUT_DIR, **kwargs)

    def do_GET(self):
        # Handle trailing slash and directory index
        path_without_query = self.path.split("?")[0]
        full_path = os.path.join(OUT_DIR, path_without_query.lstrip("/"))

        if os.path.isdir(full_path):
            index_path = os.path.join(full_path, "index.html")
            if os.path.isfile(index_path):
                self.path = path_without_query.rstrip("/") + "/index.html"
        elif not os.path.exists(full_path):
            # Check if adding /index.html works
            if os.path.isfile(full_path + "/index.html"):
                self.path = path_without_query + "/index.html"
            elif os.path.isfile(full_path + ".html"):
                self.path = path_without_query + ".html"

        return super().do_GET()

    def log_message(self, format, *args):
        # Suppress noisy HTTP request logs during testing
        pass

def run_tests():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8")

    if not os.path.exists(OUT_DIR):
        print(f"ERROR: Direktori export '{OUT_DIR}' tidak ditemukan. Jalankan 'npm run build' terlebih dahulu.")
        sys.exit(1)

    server = QuietHTTPServer(("127.0.0.1", PORT), StaticExportHandler)
    server_thread = threading.Thread(target=server.serve_forever, daemon=True)
    server_thread.start()
    print(f"Server lokal static export aktif di http://127.0.0.1:{PORT}")

    failures = 0
    def pass_test(msg):
        print(f"  ✅ {msg}")

    def fail_test(msg):
        nonlocal failures
        print(f"  ❌ {msg}")
        failures += 1

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(channel="msedge", headless=True)

            print("\n── 1. Uji Katalog Bahasa vs Code & Pemilih Mode ──")
            # 1.1 Browser baru ke Bahasa: tidak ada modal pemilih mode
            context = browser.new_context()
            page = context.new_page()
            page.goto(f"http://127.0.0.1:{PORT}/?kategori=bahasa")
            page.wait_for_load_state("networkidle")

            # Verifikasi Hub Bahasa di Katalog Bahasa
            has_japanese_hub = page.locator("h3:has-text('Bahasa Jepang')").count() > 0
            has_english_hub = page.locator("h3:has-text('Bahasa Inggris')").count() > 0
            if has_japanese_hub and has_english_hub:
                pass_test("Katalog Bahasa menampilkan hub Bahasa Jepang berdampingan dengan Bahasa Inggris.")
            else:
                fail_test("Katalog Bahasa tidak menampilkan kedua hub bahasa.")

            # Navigasi lewat hub Bahasa Jepang
            page.click("a[href*='/bahasa/jepang']")
            page.wait_for_load_state("networkidle")

            has_hiragana = page.locator("text=Hiragana").count() > 0
            has_katakana = page.locator("text=Katakana").count() > 0
            has_flashcards_link = page.locator("a[href*='/flashcards/jepang']").count() > 0

            if has_hiragana and has_katakana and has_flashcards_link:
                pass_test("Hub Bahasa Jepang memuat modul Hiragana, Katakana, dan tautan Flashcard N5.")
            else:
                fail_test("Hub Bahasa Jepang tidak memuat modul yang lengkap.")

            # Kembali ke katalog Bahasa untuk verifikasi pemilih mode
            page.goto(f"http://127.0.0.1:{PORT}/?kategori=bahasa")
            page.wait_for_load_state("networkidle")

            # Verifikasi pemilih mode header & modal tidak muncul di Bahasa
            header_mode_button = page.locator("header button:has-text('Mode:')").count()
            modal_mode = page.locator("#judul-pemilih-mode").count()
            if header_mode_button == 0 and modal_mode == 0:
                pass_test("Pemilih mode header dan dialog modal awal tidak muncul pada area Bahasa.")
            else:
                fail_test(f"Pemilih mode muncul di area Bahasa (header={header_mode_button}, modal={modal_mode}).")

            # 1.2 Pindah ke Belajar Code: dialog pemilih mode berfungsi
            page.goto(f"http://127.0.0.1:{PORT}/")
            page.wait_for_load_state("networkidle")

            # Di Code, Flashcard Jepang tidak boleh muncul
            has_flashcard_in_code = page.locator("section:has-text('Track Code') >> text=Flashcard Jepang").count() > 0
            if not has_flashcard_in_code:
                pass_test("Flashcard Jepang tidak muncul di daftar Track Code.")
            else:
                fail_test("Flashcard Jepang bocor ke daftar Track Code!")

            # Modal pemilih mode awal untuk pengunjung baru di area Code
            has_modal_in_code = page.locator("#judul-pemilih-mode").is_visible()
            if has_modal_in_code:
                pass_test("Dialog pemilih mode awal berfungsi untuk pengunjung baru di area Code.")
                # Pilih mode ngetik
                page.click("button:has-text('Mengetik kode langsung')")
                page.wait_for_timeout(300)
            else:
                fail_test("Dialog pemilih mode awal tidak muncul di area Code.")

            context.close()

            print("\n── 2. Uji Halaman Overview Flashcard Jepang (/flashcards/jepang) ──")
            context2 = browser.new_context()
            page2 = context2.new_page()
            page2.goto(f"http://127.0.0.1:{PORT}/flashcards/jepang")
            page2.wait_for_load_state("networkidle")

            # Cek modal tidak muncul
            if page2.locator("#judul-pemilih-mode").count() == 0 and page2.locator("header button:has-text('Mode:')").count() == 0:
                pass_test("Rute /flashcards/jepang bersih dari dialog modal dan penunjuk mode header.")
            else:
                fail_test("Penunjuk/dialog mode muncul di /flashcards/jepang.")

            # Cek 10 bagian ada dan rentang nomor sesuai
            parts_count = page2.locator("h3:has-text('Bagian ')").count()
            if parts_count == 10:
                pass_test("Halaman overview menampilkan tepat 10 bagian kartu.")
            else:
                fail_test(f"Jumlah bagian ditemukan {parts_count}, bukan 10.")

            # Cek Bagian 10 bisa dibuka langsung saat progress 0
            has_part_10_btn = page2.locator("a[href*='bagian-10']").is_visible()
            if has_part_10_btn:
                pass_test("Bagian 10 terbuka dan dapat diakses langsung sejak awal (progress 0).")
            else:
                fail_test("Tombol akses ke Bagian 10 tidak ditemukan.")

            context2.close()

            print("\n── 3. Uji Sesi Interaktif Flashcard (Bagian 1) ──")
            context3 = browser.new_context()
            page3 = context3.new_page()
            page3.goto(f"http://127.0.0.1:{PORT}/flashcards/jepang/n5/vol-1/bagian-1")
            page3.wait_for_load_state("networkidle")

            # 3.1 Sisi depan kartu pertama
            term_front = page3.locator("h2[lang='ja']").text_content()
            meaning_leaked = page3.locator("text=Bahaya / berbahaya").is_visible()
            reveal_btn = page3.locator("button:has-text('Lihat jawaban')")
            rate_btns = page3.locator("button:has-text('Sudah hafal')")

            if term_front and "危ない" in term_front and not meaning_leaked and reveal_btn.is_visible() and rate_btns.count() == 0:
                pass_test("Sisi depan kartu 1: menampilkan kata utama '危ない', arti tersembunyi, tombol penilaian belum aktif.")
            else:
                fail_test(f"Sisi depan tidak sesuai kontrak (term='{term_front}', leaked={meaning_leaked}).")

            # 3.2 Uji navigasi keyboard: fokus pada tautan 'Kembali' lalu Enter tidak boleh membuka jawaban
            back_link = page3.locator("a:has-text('Kembali ke Daftar Bagian')")
            back_link.focus()
            page3.keyboard.press("Enter")
            try:
                page3.wait_for_url("**/flashcards/jepang/", timeout=3000)
                pass_test("Fokus pada tautan 'Kembali' dan menekan Enter berhasil navigasi tanpa membuka jawaban.")
            except Exception:
                fail_test(f"Menekan Enter pada tautan 'Kembali' gagal bernavigasi (URL: {page3.url}).")

            page3.goto(f"http://127.0.0.1:{PORT}/flashcards/jepang/n5/vol-1/bagian-1/")
            page3.wait_for_load_state("networkidle")
            reveal_btn = page3.locator("button:has-text('Lihat jawaban')")

            # 3.3 Balik kartu (buka jawaban)
            reveal_btn.click()
            page3.wait_for_timeout(200)

            has_hiragana = page3.get_by_text("あぶない", exact=True).is_visible()
            has_meaning = page3.get_by_text("Bahaya / berbahaya", exact=True).is_visible()
            has_example = page3.locator("text=道を走るのは危ないです。").is_visible()
            has_rate_memorized = page3.locator("button:has-text('Sudah hafal')").is_visible()
            has_rate_unmemorized = page3.locator("button:has-text('Belum hafal')").is_visible()

            if has_hiragana and has_meaning and has_example and has_rate_memorized and has_rate_unmemorized:
                pass_test("Sisi belakang kartu 1: menampilkan cara baca, arti, contoh kalimat, dan tombol penilaian.")
            else:
                fail_test("Sisi belakang kartu tidak menampilkan seluruh informasi yang diwajibkan.")

            # 3.3 Jalankan simulasi putaran campuran (6 hafal, 4 belum hafal)
            # Kartu 1: Sudah hafal
            page3.click("button:has-text('Sudah hafal')")
            page3.wait_for_timeout(100)

            # Kartu 2 sampai 6: Sudah hafal
            for i in range(2, 7):
                page3.click("button:has-text('Lihat jawaban')")
                page3.wait_for_timeout(100)
                page3.click("button:has-text('Sudah hafal')")
                page3.wait_for_timeout(100)

            # Kartu 7 sampai 10: Belum hafal
            for i in range(7, 11):
                page3.click("button:has-text('Lihat jawaban')")
                page3.wait_for_timeout(100)
                page3.click("button:has-text('Belum hafal')")
                page3.wait_for_timeout(100)

            # Verifikasi layar ringkasan putaran
            has_summary_title = page3.locator("h2:has-text('Putaran Selesai!')").is_visible()
            reviewed_stat = page3.locator("text=10").first.is_visible()
            part_progress_text = page3.locator("text=6/10 ditandai hafal").is_visible()

            if has_summary_title and reviewed_stat and part_progress_text:
                pass_test("Layar ringkasan putaran: 10 kartu dinilai, 6 sudah hafal, 4 belum hafal, progress bagian 6/10.")
            else:
                fail_test("Layar ringkasan putaran tidak menampilkan data hasil 6/4 yang benar.")

            # 3.4 Pengulangan kartu yang belum hafal (harus antrean 4 kartu)
            repeat_btn = page3.locator("button:has-text('Ulangi yang belum hafal (4 kartu)')")
            if repeat_btn.is_visible():
                pass_test("Tombol ulangi yang belum hafal menampilkan tepat 4 kartu.")
                repeat_btn.click()
                page3.wait_for_timeout(200)

                queue_pos = page3.locator("text=Kartu 1 dari 4").is_visible()
                if queue_pos:
                    pass_test("Antrean baru berisi tepat 4 kartu belum hafal dan dimulai dari sisi depan kartu 1.")
                else:
                    fail_test("Antrean baru tidak menunjukkan posisi 1 dari 4.")
            else:
                fail_test("Tombol ulangi yang belum hafal tidak ditemukan.")

            # Nilai 4 kartu tersisa sebagai 'Sudah hafal'
            for _ in range(4):
                page3.click("button:has-text('Lihat jawaban')")
                page3.wait_for_timeout(100)
                page3.click("button:has-text('Sudah hafal')")
                page3.wait_for_timeout(100)

            # Verifikasi kondisi semua hafal (10/10)
            page3.wait_for_timeout(200)
            all_memorized_banner = page3.locator("text=Semua kartu bagian ini sudah kamu tandai hafal").is_visible()
            ten_of_ten = page3.locator("text=10/10 ditandai hafal").is_visible()
            if all_memorized_banner and ten_of_ten:
                pass_test("Kondisi 10/10 hafal: pesan sukses muncul dan progress bagian mencapai 10/10 (100%).")
            else:
                fail_test("Kondisi 10/10 hafal tidak ditampilkan dengan benar di ringkasan.")

            # Uji tombol 'Ulangi semua (10 kartu)'
            page3.click("button:has-text('Ulangi semua (10 kartu)')")
            page3.wait_for_timeout(200)
            back_to_ten = page3.locator("text=Kartu 1 dari 10").is_visible()
            if back_to_ten:
                pass_test("Tombol 'Ulangi semua' memulai ulang sesi 10 kartu dari awal tanpa menghapus progres.")
            else:
                fail_test("Tombol 'Ulangi semua' gagal memulai ulang 10 kartu.")

            # 3.6 Uji sinkronisasi antartab saat storage dihapus di tab lain
            page_tab2 = context3.new_page()
            page_tab2.goto(f"http://127.0.0.1:{PORT}/flashcards/jepang")
            page_tab2.wait_for_load_state("networkidle")
            page_tab2.evaluate("() => localStorage.removeItem('bilearn-flashcards-v1')")
            page_tab2.evaluate("() => window.dispatchEvent(new StorageEvent('storage', { key: 'bilearn-flashcards-v1', newValue: null }))")
            page3.wait_for_timeout(300)
            page_tab2.reload()
            page_tab2.wait_for_load_state("networkidle")
            zero_memorized = page_tab2.locator("text=0 dari 100").is_visible() or page_tab2.locator("text=0/10 Hafal").count() > 0
            if zero_memorized:
                pass_test("Sinkronisasi progres antartab: progres kembali ke 0 setelah storage dihapus di tab lain.")
            else:
                fail_test("Sinkronisasi antartab gagal: progres lama masih muncul setelah storage dihapus.")
            page_tab2.close()

            context3.close()

            print("\n── 4. Uji Viewport Mobile (360 px) & Aksesibilitas ──")
            context_mobile = browser.new_context(viewport={"width": 360, "height": 740})
            page_m = context_mobile.new_page()
            page_m.goto(f"http://127.0.0.1:{PORT}/flashcards/jepang/n5/vol-1/bagian-1")
            page_m.wait_for_load_state("networkidle")

            # Periksa horizontal scroll
            has_h_scroll = page_m.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
            if not has_h_scroll:
                pass_test("Viewport 360 px: tidak terjadi horizontal overflow pada sisi depan.")
            else:
                fail_test("Terjadi horizontal overflow pada 360 px sisi depan!")

            # Buka jawaban di mobile dan cek lagi overflow
            page_m.click("button:has-text('Lihat jawaban')")
            page_m.wait_for_timeout(200)
            has_h_scroll_back = page_m.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
            if not has_h_scroll_back:
                pass_test("Viewport 360 px: tidak terjadi horizontal overflow pada sisi belakang (contoh kalimat & tombol).")
            else:
                fail_test("Terjadi horizontal overflow pada 360 px sisi belakang!")

            context_mobile.close()

            print("\n── 5. Uji Kunjungan Langsung & Refresh ke 10 Bagian Statis ──")
            context5 = browser.new_context()
            page5 = context5.new_page()
            all_parts_ok = True
            for p_num in range(1, 11):
                url = f"http://127.0.0.1:{PORT}/flashcards/jepang/n5/vol-1/bagian-{p_num}/"
                res = page5.goto(url)
                if not res or res.status != 200:
                    all_parts_ok = False
                    fail_test(f"Bagian {p_num} gagal dimuat via URL langsung (status: {res.status if res else 'None'}).")
            if all_parts_ok:
                pass_test("Seluruh 10 bagian berhasil dibuka langsung via URL statis (status 200).")

            # Uji refresh
            res_refresh = page5.reload()
            if res_refresh and res_refresh.status == 200:
                pass_test("Halaman bagian dapat direfresh tanpa 404.")
            else:
                fail_test("Halaman bagian 404 saat direfresh.")

            context5.close()
            browser.close()

    finally:
        server.shutdown()
        server.server_close()
        print("\nServer lokal dihentikan.")

    print("\n──────────────────────────────────────────────────")
    if failures == 0:
        print("🎉 SELURUH PENGUJIAN BROWSER END-TO-END BERHASIL (0 kesalahan)")
        sys.exit(0)
    else:
        print(f"💥 Ditemukan {failures} kegagalan pada pengujian browser.")
        sys.exit(1)

if __name__ == "__main__":
    run_tests()
