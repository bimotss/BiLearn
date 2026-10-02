#!/usr/bin/env python3
"""
BiLearn — Test Script untuk Verifikasi Fix UX:
1. Sticky Header tetap menempel di top: 0 saat scroll 710 px (tidak ikut hilang dari layar).
2. Penanda menu aktif di /paths/ menandai 'Learning Path', bukan 'Belajar Code'.
"""

import os
import sys
import threading
from http.server import SimpleHTTPRequestHandler, HTTPServer
from playwright.sync_api import sync_playwright

PORT = 4174
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
    print(f"Server pengujian aktif di http://127.0.0.1:{PORT}")

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

            print("\n── 1. Uji Sticky Header Saat Scroll (710 px) ──")
            context = browser.new_context(viewport={"width": 1280, "height": 800})
            page = context.new_page()
            page.goto(f"http://127.0.0.1:{PORT}/")
            page.wait_for_load_state("networkidle")

            # Posisi awal header
            initial_top = page.evaluate("() => document.querySelector('header').getBoundingClientRect().top")
            if initial_top == 0:
                pass_test("Posisi awal header berada di top: 0.")
            else:
                fail_test(f"Posisi awal header bukan 0: {initial_top}")

            # Scroll ke 710 px
            page.evaluate("() => window.scrollTo(0, 710)")
            page.wait_for_timeout(200)

            # Cek posisi scroll window
            scroll_y = page.evaluate("() => window.scrollY")
            header_top_after_scroll = page.evaluate("() => document.querySelector('header').getBoundingClientRect().top")
            header_is_visible = page.locator("header").is_visible()

            print(f"     window.scrollY: {scroll_y} px")
            print(f"     header getBoundingClientRect().top: {header_top_after_scroll} px")

            if scroll_y >= 700 and header_top_after_scroll == 0 and header_is_visible:
                pass_test("Sticky header tetap menempel di viewport (top: 0) saat scroll 710 px!")
            else:
                fail_test(f"Sticky header tidak menempel! scrollY={scroll_y}, header.top={header_top_after_scroll}, visible={header_is_visible}")

            context.close()

            print("\n── 2. Uji Penanda Menu Aktif di /paths/ (Trailing Slash) ──")
            context2 = browser.new_context(viewport={"width": 1280, "height": 800})
            page2 = context2.new_page()
            page2.goto(f"http://127.0.0.1:{PORT}/paths/")
            page2.wait_for_load_state("networkidle")

            # Ambil class dari masing-masing link navigasi desktop
            code_link_class = page2.locator("nav a:has-text('Belajar Code')").first.get_attribute("class") or ""
            bahasa_link_class = page2.locator("nav a:has-text('Bahasa')").first.get_attribute("class") or ""
            paths_link_class = page2.locator("nav a:has-text('Learning Path')").first.get_attribute("class") or ""

            is_paths_highlighted = "font-semibold" in paths_link_class and "bg-white/[0.08]" in paths_link_class
            is_code_highlighted = "font-semibold" in code_link_class and "bg-white/[0.08]" in code_link_class

            if is_paths_highlighted and not is_code_highlighted:
                pass_test("Di /paths/, menu 'Learning Path' aktif (ter-highlight), 'Belajar Code' tidak aktif.")
            else:
                fail_test(f"Highlight salah di /paths/: paths_active={is_paths_highlighted}, code_active={is_code_highlighted}")

            # Uji juga menu mobile di /paths/
            context_m = browser.new_context(viewport={"width": 360, "height": 740})
            page_m = context_m.new_page()
            page_m.goto(f"http://127.0.0.1:{PORT}/paths/")
            page_m.wait_for_load_state("networkidle")

            # Dismiss modal awal jika muncul
            if page_m.locator("#judul-pemilih-mode").is_visible():
                page_m.click("button:has-text('Nanti saja')")
                page_m.wait_for_timeout(200)

            # Buka hamburger menu
            page_m.click("button[aria-label*='menu navigasi']")
            page_m.wait_for_timeout(200)

            # Cek item aktif di mobile menu
            mobile_paths_class = page_m.locator("nav a:has-text('Learning Path')").last.get_attribute("class") or ""
            mobile_code_class = page_m.locator("nav a:has-text('Belajar Code')").last.get_attribute("class") or ""

            is_m_paths_active = "bg-amber-500/15" in mobile_paths_class
            is_m_code_active = "bg-amber-500/15" in mobile_code_class

            if is_m_paths_active and not is_m_code_active:
                pass_test("Di mobile menu /paths/, 'Learning Path' aktif dan 'Belajar Code' tidak aktif.")
            else:
                fail_test(f"Highlight mobile menu salah di /paths/: paths_active={is_m_paths_active}, code_active={is_m_code_active}")

            context_m.close()
            context2.close()

            print("\n── 3. Uji Penanda Menu Aktif di Rute Lain (/ dan /?kategori=bahasa) ──")
            # 3.1 Di / -> Belajar Code aktif
            context3 = browser.new_context()
            page3 = context3.new_page()
            page3.goto(f"http://127.0.0.1:{PORT}/")
            page3.wait_for_load_state("networkidle")

            c_code = page3.locator("nav a:has-text('Belajar Code')").first.get_attribute("class") or ""
            c_paths = page3.locator("nav a:has-text('Learning Path')").first.get_attribute("class") or ""
            if "bg-white/[0.08]" in c_code and "bg-white/[0.08]" not in c_paths:
                pass_test("Di rute '/', menu 'Belajar Code' aktif dan 'Learning Path' tidak aktif.")
            else:
                fail_test("Highlight rute '/' tidak sesuai.")

            # 3.2 Di /?kategori=bahasa -> Bahasa aktif
            page3.goto(f"http://127.0.0.1:{PORT}/?kategori=bahasa")
            page3.wait_for_load_state("networkidle")

            c_bahasa = page3.locator("nav a:has-text('Bahasa')").first.get_attribute("class") or ""
            c_code2 = page3.locator("nav a:has-text('Belajar Code')").first.get_attribute("class") or ""
            if "bg-white/[0.08]" in c_bahasa and "bg-white/[0.08]" not in c_code2:
                pass_test("Di rute '/?kategori=bahasa', menu 'Bahasa' aktif dan 'Belajar Code' tidak aktif.")
            else:
                fail_test("Highlight rute '/?kategori=bahasa' tidak sesuai.")

            context3.close()
            browser.close()

    finally:
        server.shutdown()
        server.server_close()
        print("\nServer pengujian dihentikan.")

    print("\n──────────────────────────────────────────────────")
    if failures == 0:
        print("🎉 SELURUH PENGUJIAN FIX UX BERHASIL (0 kesalahan)")
        sys.exit(0)
    else:
        print(f"💥 Ditemukan {failures} kegagalan pada pengujian UX.")
        sys.exit(1)

if __name__ == "__main__":
    run()
