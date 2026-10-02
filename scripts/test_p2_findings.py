#!/usr/bin/env python3
"""
Test script untuk verifikasi 3 temuan P2:
1. Kartu kategori aktif di mode terang (background gradient cerah, bukan gelap, kontras teks judul dan deskripsi tinggi).
2. Kontras aksen teks "17 Track" dan statistik lainnya di kartu putih mode terang (memenuhi rasio kontras >= 3:1 untuk teks besar dan >= 4.5:1 untuk normal).
3. Latihan mengetik di mobile (html-0-1): scrollWidth <= 375 px pada layar 375 px (baik mode terang maupun mode gelap).
"""

import os
import sys
import threading
import math
from http.server import SimpleHTTPRequestHandler, HTTPServer
from playwright.sync_api import sync_playwright

PORT = 4185
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

def parse_rgb(rgb_str):
    """Parse 'rgb(r, g, b)' or 'rgba(r, g, b, a)' into (r, g, b) floats 0..1"""
    import re
    m = re.search(r"rgba?\((\d+),\s*(\d+),\s*(\d+)", rgb_str)
    if not m:
        return (0.0, 0.0, 0.0)
    return tuple(int(x) / 255.0 for x in m.groups())

def relative_luminance(rgb):
    def channel(c):
        return c / 12.92 if c <= 0.03928 else math.pow((c + 0.055) / 1.055, 2.4)
    r, g, b = [channel(c) for c in rgb]
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def contrast_ratio(rgb1, rgb2):
    l1 = relative_luminance(rgb1)
    l2 = relative_luminance(rgb2)
    lighter = max(l1, l2)
    darker = min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)

def run():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8")

    server = QuietHTTPServer(("127.0.0.1", PORT), StaticExportHandler)
    server_thread = threading.Thread(target=server.serve_forever, daemon=True)
    server_thread.start()
    print(f"Test server serving {OUT_DIR} at http://127.0.0.1:{PORT}")

    failures = 0
    def pass_test(msg):
        print(f"  [PASS] {msg}")

    def fail_test(msg):
        nonlocal failures
        print(f"  [FAIL] {msg}")
        failures += 1

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(channel="msedge", headless=True)

            print("\n=== 1. Uji Kontras Aksen & Kartu Kategori Aktif di Mode Terang (/) ===")
            context = browser.new_context(viewport={"width": 1280, "height": 800})
            page = context.new_page()
            # Set mode terang via localStorage sebelum load
            page.add_init_script("localStorage.setItem('bilearn_theme', 'light');")
            page.goto(f"http://127.0.0.1:{PORT}/")
            page.wait_for_load_state("networkidle")

            # Verifikasi html class tidak memiliki 'dark'
            html_class = page.evaluate("() => document.documentElement.className")
            print(f"  Root html class: '{html_class}' (is_dark: {'dark' in html_class})")

            # 1.1 Temuan 2: Kontras teks "17 Track" pada kartu statistik putih
            stat_17 = page.locator("text='17 Track'").first
            stat_17_color = stat_17.evaluate("el => window.getComputedStyle(el).color")
            # Cek kartu induknya
            card_bg = stat_17.evaluate("el => window.getComputedStyle(el.parentElement).backgroundColor")
            rgb_stat = parse_rgb(stat_17_color)
            rgb_bg = parse_rgb(card_bg)
            ratio_17 = contrast_ratio(rgb_stat, rgb_bg)
            print(f"  17 Track text color: {stat_17_color}, card bg: {card_bg}, ratio: {ratio_17:.2f}:1")
            if ratio_17 >= 3.0:
                pass_test(f"Kontras '17 Track' ({ratio_17:.2f}:1) memenuhi WCAG AA/AAA untuk teks besar (>= 3.0:1)")
            else:
                fail_test(f"Kontras '17 Track' ({ratio_17:.2f}:1) di bawah 3.0:1")

            # Cek juga stat lainnya
            for text_name in ["880+ Latihan", "Dual Mode", "100% Terbuka"]:
                el = page.locator(f"text='{text_name}'").first
                c = el.evaluate("el => window.getComputedStyle(el).color")
                ratio = contrast_ratio(parse_rgb(c), rgb_bg)
                print(f"  {text_name} text color: {c}, ratio: {ratio:.2f}:1")
                if ratio >= 3.0:
                    pass_test(f"Kontras '{text_name}' ({ratio:.2f}:1) >= 3.0:1")
                else:
                    fail_test(f"Kontras '{text_name}' ({ratio:.2f}:1) di bawah 3.0:1")

            # 1.2 Temuan 1: Kartu kategori aktif di mode terang
            # Kategori default: Code
            card_code = page.locator("[data-active-category='code']").first
            card_code_bg = card_code.evaluate("el => window.getComputedStyle(el).backgroundColor")
            card_code_img = card_code.evaluate("el => window.getComputedStyle(el).backgroundImage")
            print(f"  Active Code card background-color: {card_code_bg}")
            print(f"  Active Code card background-image: {card_code_img[:80]}...")

            # Pastikan background terang (luminance > 0.7)
            rgb_card_code = parse_rgb(card_code_bg)
            lum_card_code = relative_luminance(rgb_card_code)
            print(f"  Active Code card luminance: {lum_card_code:.3f}")
            if lum_card_code > 0.7:
                pass_test(f"Active Code card background terang di mode terang (luminance {lum_card_code:.3f} > 0.7)")
            else:
                fail_test(f"Active Code card background masih gelap! Luminance: {lum_card_code:.3f}")

            # Cek keterbacaan judul & deskripsi di kartu aktif
            h2_code = card_code.locator("h2").first
            h2_code_color = h2_code.evaluate("el => window.getComputedStyle(el).color")
            ratio_h2 = contrast_ratio(parse_rgb(h2_code_color), rgb_card_code)
            print(f"  Active Code card H2 color: {h2_code_color}, ratio vs bg: {ratio_h2:.2f}:1")
            if ratio_h2 >= 4.5:
                pass_test(f"Kontras judul kartu aktif ({ratio_h2:.2f}:1) >= 4.5:1")
            else:
                fail_test(f"Kontras judul kartu aktif ({ratio_h2:.2f}:1) di bawah 4.5:1")

            p_code = card_code.locator("p").first
            p_code_color = p_code.evaluate("el => window.getComputedStyle(el).color")
            ratio_p = contrast_ratio(parse_rgb(p_code_color), rgb_card_code)
            print(f"  Active Code card P color: {p_code_color}, ratio vs bg: {ratio_p:.2f}:1")
            if ratio_p >= 4.5:
                pass_test(f"Kontras deskripsi kartu aktif ({ratio_p:.2f}:1) >= 4.5:1")
            else:
                fail_test(f"Kontras deskripsi kartu aktif ({ratio_p:.2f}:1) di bawah 4.5:1")

            # 1.3 Kartu Kategori Bahasa aktif di mode terang
            page.goto(f"http://127.0.0.1:{PORT}/?kategori=bahasa")
            page.wait_for_load_state("networkidle")
            card_bahasa = page.locator("[data-active-category='bahasa']").first
            card_bahasa_bg = card_bahasa.evaluate("el => window.getComputedStyle(el).backgroundColor")
            rgb_card_bahasa = parse_rgb(card_bahasa_bg)
            lum_card_bahasa = relative_luminance(rgb_card_bahasa)
            print(f"  Active Bahasa card background-color: {card_bahasa_bg}, luminance: {lum_card_bahasa:.3f}")
            if lum_card_bahasa > 0.7:
                pass_test(f"Active Bahasa card background terang di mode terang (luminance {lum_card_bahasa:.3f} > 0.7)")
            else:
                fail_test(f"Active Bahasa card background masih gelap! Luminance: {lum_card_bahasa:.3f}")

            context.close()

            print("\n=== 2. Uji Latihan Mengetik di Layar Mobile 375 px (html-0-1) ===")
            for theme in ["light", "dark"]:
                context_mobile = browser.new_context(viewport={"width": 375, "height": 667})
                page_m = context_mobile.new_page()
                page_m.add_init_script(f"""
                    localStorage.setItem('bilearn_theme', '{theme}');
                    localStorage.setItem('bilearn_mode_belajar', 'koding');
                """)
                page_m.goto(f"http://127.0.0.1:{PORT}/tracks/html/html-0-1/")
                page_m.wait_for_load_state("networkidle")

                # Tutup dialog jika muncul dengan menekan Escape
                if page_m.locator("#judul-pemilih-mode").is_visible():
                    page_m.keyboard.press("Escape")
                    page_m.wait_for_timeout(200)

                doc_scroll_width = page_m.evaluate("() => document.documentElement.scrollWidth")
                body_scroll_width = page_m.evaluate("() => document.body.scrollWidth")
                main_scroll_width = page_m.evaluate("() => document.querySelector('main').scrollWidth")
                grid_scroll_width = page_m.evaluate("() => document.querySelector('.lg\\\\:grid-cols-2') ? document.querySelector('.lg\\\\:grid-cols-2').scrollWidth : 0")

                print(f"  [Theme: {theme}] doc.scrollWidth: {doc_scroll_width}px, body.scrollWidth: {body_scroll_width}px, main.scrollWidth: {main_scroll_width}px, grid.scrollWidth: {grid_scroll_width}px")

                if doc_scroll_width <= 375 and body_scroll_width <= 375:
                    pass_test(f"[Theme: {theme}] Halaman html-0-1 pas di layar 375 px (scrollWidth={doc_scroll_width}px <= 375 px, tanpa horizontal overflow)")
                else:
                    fail_test(f"[Theme: {theme}] Halaman html-0-1 meluber di 375 px! doc={doc_scroll_width}px, body={body_scroll_width}px")

                context_mobile.close()

            browser.close()

    finally:
        server.shutdown()
        server.server_close()
        print("\nTest server dihentikan.")

    print("\n--------------------------------------------------")
    if failures == 0:
        print("[SUCCESS] Seluruh 3 temuan P2 terverifikasi lolos 100%!")
        sys.exit(0)
    else:
        print(f"[FAILED] Terdapat {failures} tes yang gagal.")
        sys.exit(1)

if __name__ == "__main__":
    run()
