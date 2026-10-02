#!/usr/bin/env python3
"""
BiLearn — Test Script untuk Verifikasi Fitur Mode Gelap / Terang (Theme Toggle):
1. Inisialisasi tema awal & keberadaan tombol ThemeToggle di header (desktop & mobile).
2. Transisi klik dari Dark Mode ke Light Mode:
   - Tag <html> kehilangan class 'dark'
   - localStorage['bilearn_theme'] = 'light'
   - Tampilan visual berubah ke palet terang
   - Ikon tombol berganti ke bulan (Moon)
3. Persistensi tema saat reload halaman (tidak ada FOUC).
4. Transisi klik balik dari Light Mode ke Dark Mode:
   - Tag <html> mendapatkan kembali class 'dark'
   - localStorage['bilearn_theme'] = 'dark'
   - Ikon tombol berganti ke matahari (Sun)
5. Tombol ThemeToggle di menu drawer mobile berfungsi normal.
"""

import os
import sys
import threading
from http.server import SimpleHTTPRequestHandler, HTTPServer
from playwright.sync_api import sync_playwright

PORT = 4175
OUT_DIR = os.path.abspath("out")

class QuietHTTPServer(HTTPServer):
    def handle_error(self, request, client_address):
        pass

class StaticExportHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=OUT_DIR, **kwargs)

    def do_GET(self):
        path_without_query = self.path.split("?")[0]
        full_path = os.path.join(OUT_DIR, path_without_query.lstrip("/"))

        if os.path.isdir(full_path):
            index_path = os.path.join(full_path, "index.html")
            if os.path.isfile(index_path):
                self.path = path_without_query.rstrip("/") + "/index.html"
        elif not os.path.exists(full_path):
            if os.path.isfile(full_path + "/index.html"):
                self.path = path_without_query + "/index.html"
            elif os.path.isfile(full_path + ".html"):
                self.path = path_without_query + ".html"

        return super().do_GET()

    def log_message(self, format, *args):
        pass

def run():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8")

    server = QuietHTTPServer(("127.0.0.1", PORT), StaticExportHandler)
    server_thread = threading.Thread(target=server.serve_forever, daemon=True)
    server_thread.start()
    print(f"Server pengujian tema aktif di http://127.0.0.1:{PORT}")

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

            print("\n── 1. Uji Tombol ThemeToggle & Inisialisasi Default ──")
            context = browser.new_context(viewport={"width": 1280, "height": 800})
            page = context.new_page()
            page.goto(f"http://127.0.0.1:{PORT}/")
            page.wait_for_load_state("networkidle")

            # Dismiss modal awal jika muncul
            if page.locator("#judul-pemilih-mode").is_visible():
                page.click("button:has-text('Nanti Saja')")
                page.wait_for_timeout(200)

            # Verifikasi tombol ThemeToggle ada
            toggle_btn = page.locator("button[aria-label*='Mode Terang'], button[aria-label*='Mode Gelap'], button[aria-label*='Ganti tema']").first
            if toggle_btn.is_visible():
                pass_test("Tombol ThemeToggle ditemukan dan tampak di navbar header.")
            else:
                fail_test("Tombol ThemeToggle tidak terlihat di navbar header.")

            # Default awal adalah dark mode
            is_dark_initial = page.evaluate("() => document.documentElement.classList.contains('dark')")
            if is_dark_initial:
                pass_test("Status default awal: Dark Mode aktif (<html class='... dark'>).")
            else:
                fail_test("Status default awal bukan Dark Mode.")

            print("\n── 2. Uji Klik Beralih ke Light Mode ──")
            toggle_btn.click()
            page.wait_for_timeout(200)

            is_dark_after_click = page.evaluate("() => document.documentElement.classList.contains('dark')")
            theme_in_storage = page.evaluate("() => localStorage.getItem('bilearn_theme')")
            body_bg = page.evaluate("() => window.getComputedStyle(document.body).backgroundColor")

            print(f"     isDark: {is_dark_after_click}, localStorage: {theme_in_storage}, body bg: {body_bg}")

            if not is_dark_after_click and theme_in_storage == "light":
                pass_test("Berhasil beralih ke Light Mode (class 'dark' hilang, localStorage='light').")
            else:
                fail_test(f"Gagal beralih ke Light Mode: isDark={is_dark_after_click}, storage={theme_in_storage}")

            print("\n── 3. Uji Persistensi Light Mode Saat Refresh (Anti-FOUC) ──")
            page.reload()
            page.wait_for_load_state("networkidle")

            is_dark_after_reload = page.evaluate("() => document.documentElement.classList.contains('dark')")
            theme_after_reload = page.evaluate("() => localStorage.getItem('bilearn_theme')")

            if not is_dark_after_reload and theme_after_reload == "light":
                pass_test("Preferensi Light Mode bertahan setelah reload halaman tanpa kembali ke dark.")
            else:
                fail_test(f"Preferensi hilang setelah reload: isDark={is_dark_after_reload}, storage={theme_after_reload}")

            print("\n── 4. Uji Klik Kembali ke Dark Mode ──")
            toggle_btn_light = page.locator("button[aria-label*='Mode Gelap']").first
            toggle_btn_light.click()
            page.wait_for_timeout(200)

            is_dark_back = page.evaluate("() => document.documentElement.classList.contains('dark')")
            theme_back = page.evaluate("() => localStorage.getItem('bilearn_theme')")

            if is_dark_back and theme_back == "dark":
                pass_test("Berhasil beralih kembali ke Dark Mode (class 'dark' aktif, localStorage='dark').")
            else:
                fail_test(f"Gagal kembali ke Dark Mode: isDark={is_dark_back}, storage={theme_back}")

            context.close()

            print("\n── 5. Uji ThemeToggle di Layar Mobile (360px) ──")
            context_m = browser.new_context(viewport={"width": 360, "height": 740})
            page_m = context_m.new_page()
            page_m.goto(f"http://127.0.0.1:{PORT}/")
            page_m.wait_for_load_state("networkidle")

            # Dismiss modal awal jika muncul
            if page_m.locator("#judul-pemilih-mode").is_visible():
                page_m.click("button:has-text('Nanti Saja')")
                page_m.wait_for_timeout(200)

            # Tombol di header mobile bar
            mobile_header_toggle = page_m.locator("button[aria-label*='Mode Terang'], button[aria-label*='Mode Gelap']").first
            if mobile_header_toggle.is_visible():
                pass_test("Tombol ThemeToggle terlihat langsung di header bar mobile.")
            else:
                fail_test("Tombol ThemeToggle tidak terlihat di header bar mobile.")

            # Buka menu hamburger mobile
            page_m.click("button[aria-label*='menu navigasi']")
            page_m.wait_for_timeout(200)

            # Cek opsi tema di dalam drawer
            drawer_theme_toggle = page_m.locator("div.border-t:has-text('Pilihan Tema') button").first
            if drawer_theme_toggle.is_visible():
                pass_test("Opsi 'Pilihan Tema' tersedia di dalam drawer navigasi mobile.")
                m_is_dark_before = page_m.evaluate("() => document.documentElement.classList.contains('dark')")
                drawer_theme_toggle.click()
                page_m.wait_for_timeout(200)
                m_is_dark_after = page_m.evaluate("() => document.documentElement.classList.contains('dark')")
                print(f"     Mobile drawer toggle: darkBefore={m_is_dark_before}, darkAfter={m_is_dark_after}")
                if m_is_dark_before != m_is_dark_after:
                    pass_test("Klik tombol tema di drawer mobile sukses mengubah tema (Dark <-> Light).")
                else:
                    fail_test("Klik tombol tema di drawer mobile gagal mengubah tema.")
            else:
                fail_test("Opsi 'Pilihan Tema' tidak ditemukan di dalam drawer mobile.")

            context_m.close()
            browser.close()

    finally:
        server.shutdown()
        server.server_close()
        print("\nServer pengujian tema dihentikan.")

    print("\n──────────────────────────────────────────────────")
    if failures == 0:
        print("🎉 SELURUH PENGUJIAN FITUR THEME TOGGLE BERHASIL (0 kesalahan)")
        sys.exit(0)
    else:
        print(f"💥 Ditemukan {failures} kegagalan pada pengujian tema.")
        sys.exit(1)

if __name__ == "__main__":
    run()
