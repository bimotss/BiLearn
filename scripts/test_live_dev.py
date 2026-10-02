#!/usr/bin/env python3
"""
Uji live http://localhost:3000 yang sedang dibuka pengguna:
1. Periksa halaman beranda, track, materi, step, kuis, dan flashcards
2. Periksa kontras teks di Light Mode dan Dark Mode
3. Simpan screenshot ke folder scratch/screenshots/
"""

import os
import sys
from playwright.sync_api import sync_playwright

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

os.makedirs("scratch/screenshots", exist_ok=True)

urls = [
    ("/", "home"),
    ("/?kategori=bahasa", "bahasa_hub"),
    ("/paths/", "paths"),
    ("/tracks/html/", "track_html"),
    ("/tracks/html/html-0-m1/", "materi_html"),
    ("/tracks/html/html-0-1/", "step_html"),
    ("/tracks/html/html-0-quiz/", "quiz_html"),
    ("/flashcards/jepang/", "flashcards_overview"),
    ("/flashcards/jepang/n5/vol-1/bagian-1/", "flashcards_session"),
]

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="msedge", headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 850})
        page = context.new_page()

        print("=== 1. PENGUJIAN TEMA GELAP (DARK MODE) DI DEV SERVER ===")
        page.goto("http://localhost:3000/")
        page.wait_for_load_state("networkidle")

        # Pastikan dark mode aktif
        page.evaluate("() => { document.documentElement.classList.add('dark'); localStorage.setItem('bilearn_theme', 'dark'); }")
        page.reload()
        page.wait_for_load_state("networkidle")

        # Dismiss modal jika ada
        if page.locator("#judul-pemilih-mode").is_visible():
            page.click("button:has-text('Nanti Saja')")
            page.wait_for_timeout(200)

        for path, name in urls:
            try:
                page.goto(f"http://localhost:3000{path}")
                page.wait_for_load_state("networkidle")
                page.wait_for_timeout(300)
                page.screenshot(path=f"scratch/screenshots/{name}_dark.png", full_page=False)
                print(f"  📸 Captured Dark: {name}")
            except Exception as e:
                print(f"  ❌ Error on {path}: {e}")

        print("\n=== 2. PENGUJIAN TEMA TERANG (LIGHT MODE) DI DEV SERVER ===")
        # Beralih ke light mode
        page.goto("http://localhost:3000/")
        page.wait_for_load_state("networkidle")
        page.evaluate("() => { document.documentElement.classList.remove('dark'); localStorage.setItem('bilearn_theme', 'light'); }")
        page.reload()
        page.wait_for_load_state("networkidle")

        issues = []
        for path, name in urls:
            try:
                page.goto(f"http://localhost:3000{path}")
                page.wait_for_load_state("networkidle")
                page.wait_for_timeout(300)
                page.screenshot(path=f"scratch/screenshots/{name}_light.png", full_page=False)
                print(f"  📸 Captured Light: {name}")

                # Audit kontras dan teks putih di latar putih
                low_contrast_elements = page.evaluate("""() => {
                    const bad = [];
                    const all = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, strong, a, button');
                    for (const el of all) {
                        if (el.children.length > 0 && el.tagName === 'DIV') continue;
                        const style = window.getComputedStyle(el);
                        const color = style.color;
                        const text = el.innerText ? el.innerText.trim() : '';
                        if (!text) continue;

                        // Periksa apakah teks berwarna putih murni di dalam kontainer yang bukan tombol berwarna
                        if (color === 'rgb(255, 255, 255)' || color === 'rgb(248, 250, 252)') {
                            let parent = el;
                            let hasDarkBg = false;
                            while (parent && parent !== document.body) {
                                const pStyle = window.getComputedStyle(parent);
                                const bg = pStyle.backgroundColor;
                                if (bg.includes('rgb(') && !bg.includes('rgb(255, 255, 255)') && !bg.includes('rgba(255, 255, 255') && !bg.includes('rgba(0, 0, 0, 0)')) {
                                    // Hitung kecerahan
                                    const m = bg.match(/\\d+/g);
                                    if (m && m.length >= 3) {
                                        const r = parseInt(m[0]), g = parseInt(m[1]), b = parseInt(m[2]);
                                        const lum = (0.299 * r + 0.587 * g + 0.114 * b);
                                        if (lum < 150) {
                                            hasDarkBg = true;
                                            break;
                                        }
                                    }
                                }
                                parent = parent.parentElement;
                            }
                            if (!hasDarkBg) {
                                bad.push({
                                    tag: el.tagName,
                                    text: text.slice(0, 40),
                                    color: color,
                                    class: el.className
                                });
                            }
                        }
                    }
                    return bad.slice(0, 5);
                }""")

                if low_contrast_elements:
                    print(f"  ⚠️ Warning: Teks putih tanpa latar gelap ditemukan di {name}:")
                    for b in low_contrast_elements:
                        print(f"     <{b['tag']} class='{b['class']}'>: '{b['text']}' (color={b['color']})")
                        issues.append((name, b))
                else:
                    print(f"  ✅ Kontras aman & tidak ada teks putih di {name}")

            except Exception as e:
                print(f"  ❌ Error on {path}: {e}")

        context.close()
        browser.close()

        print("\n=== RINGKASAN TEMUAN ===")
        if not issues:
            print("🎉 SEMUA HALAMAN DI LIGHT MODE BERSIH (0 isu kontras / teks putih)")
        else:
            print(f"Ditemukan {len(issues)} potensi teks yang sulit dibaca di Light Mode.")

if __name__ == "__main__":
    run()
