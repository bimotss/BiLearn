# Review Track Analisis Data & Visualisasi — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Seluruh temuan di bawah sudah ditangani. Track sekarang: **7 modul, 7 materi, 47 step, 7 kuis (35 soal)**, dan `verify:konten` bersih 100% untuk track ini.

Berkas: `src/data/tracks/data-analysis.ts` (saat direview: 7 modul, 47 step, 7 kuis, **0 materi**, 25 explanation pendek, berada di `instalasiAllowlist`).

Cara baca: aku membaca track ini sebagai pemula total yang baru saja menyelesaikan track HTML, CSS, JavaScript, TypeScript, Python, dan SQL dasar. Pembaca di sini sudah paham dasar logika pemrograman dan kueri database, namun **belum pernah mengolah DataFrame dengan pandas, memahami statistik praktis, merancang dashboard BI di Looker Studio, atau menyusun data storytelling & portofolio end-to-end**.

---

## A. Yang bikin macet sejak menit pertama

### A1. Nol halaman `materi` di seluruh tujuh modul
Aturan keras `AGENTS.md` #1 & #8: setiap modul latihan wajib diawali minimal satu halaman BACA-DULU (materi) ber-kedalaman minimal 1200 karakter, diagram teks/tabel, jebakan umum, dan kaitan ke dunia kerja. Tujuh modul sebelumnya **nol materi**. Efeknya:
- Pemula langsung disuruh mengonversi tipe data `df['price'].astype(int)` di step pertama tanpa tahu apa itu DataFrame dan Series, bedanya dengan tabel Excel/SQL, dan bagaimana menyiapkan environment Python Data Science (VS Code / Jupyter / Google Colab).
- Konsep krusial seperti **`loc` vs `iloc`**, **Imputasi Missing Value (Mean vs Median)**, **Korelasi vs Kausalitas**, **Simpson's Paradox**, **Zero Baseline pada Grafik Batang**, **Dimensi vs Metrik di BI Tools**, dan **Data Storytelling 3 Tahap** hanya dijelaskan singkat atau belum tersedia landasan konseptualnya.
- Tidak ada panduan pemasangan environment lokal (Python Data Science stack) maupun alternatif cloud (Google Colab).

### A2. Modul 1 belum mencakup judul & slug Persiapan/Instalasi
Track ini berada di `instalasiAllowlist` pada skrip verifikasi karena modul pertamanya berslug `pandas-tuntas` tanpa kata `persiapan` atau `instalasi`. Padahal pemula butuh panduan awal setup Python Data Science stack (VS Code Jupyter Extension, pip install pandas numpy matplotlib seaborn) serta alternatif cloud (Google Colab) sebelum mengetik kode pandas pertama.

### A3. Penjelasan pendek (25 step) yang hanya menyebut sintaks
Sebanyak 25 dari 47 step memiliki penjelasan di bawah 4 kalimat / 350 karakter. Penjelasan lama hanya menyebut cara mengetik sintaks tanpa menjawab **APA**, **KENAPA**, **KAPAN dipakai**, dan **JEBAKAN umum**. Contoh pada `da-1-1` dan `da-2-1` yang belum menekankan bahaya konversi string berkarakter non-angka dan pentingnya audit awal data.

### A4. Preview BiLearn tidak mengeksekusi Python (Language "text")
Mesin browser BiLearn tidak menjalankan interpreter Python nyata, sehingga seluruh step menggunakan `language: "text"`. Contoh keluaran (`example.output`) wajib menyajikan hasil eksekusi teks Python/pandas yang realistis agar pemula mendapat gambaran visual hasil eksekusi script.

---

## B. Tujuh halaman materi yang ditambahkan

Satu per modul, ditulis memenuhi aturan keras Ronde 3 (minimal 1200 karakter, diagram teks/tabel, bagian jebakan umum, dan kaitan ke dunia kerja):

| Materi | ID | Judul | Yang ditutupnya |
|---|---|---|---|
| Modul 1 | `da-1-m1` | Persiapan, Instalasi Environment Data Science & Dasar pandas | Pengertian DataFrame & Series dari nol vs Excel, panduan setup local (VS Code/Jupyter) & Google Colab, diagram anatomi DataFrame, tabel rujukan operasi utama pandas, analogi lemari arsip digital superkomputer, 3 jebakan pemula (`loc` vs `iloc`, `SettingWithCopyWarning`, overuse `.apply()`), kaitan ke lowongan Data Analyst & Engineer. |
| Modul 2 | `da-2-m1` | Strategi Data Cleaning & Pra-pemrosesan Data | Pengertian data kotor di industri ("Garbage In, Garbage Out"), diagram alur pipeline cleaning reusable, tabel rujukan operasi cleaning (`.isna()`, `.str`, `to_datetime`, `.replace()`, IQR outlier), analogi menyiangi bahan makanan di dapur restoran, 3 jebakan pemula (imputasi mean pada data skewed, lupa `.str` accessor, dropna acak), kaitan ke validasi data bisnis. |
| Modul 3 | `da-3-m1` | Statistik Deskriptif & Inferensial Praktis untuk Analis | Mean vs Median (kapan rata-rata menipu), sebaran data (std dev & P95/P99 latency), diagram korelasi vs kausalitas (es krim vs tenggelam & cuaca), sampling bias & survivorship bias, A/B Testing & P-value (< 0.05), Simpson's Paradox & reporting margin of error (`43% ± 2%`), 3 jebakan pemula (p-hacking, klaim pasti tanpa margin error), kaitan ke pengambilan keputusan ber-risiko. |
| Modul 4 | `da-4-m1` | Prinsip & Teknik Visualisasi Data Efektif | Matplotlib Figure vs Axes architecture (`fig, ax = plt.subplots()`), pohon keputusan jenis chart (line, bar, hist, scatter, boxplot), tabel matriks Matplotlib vs Seaborn (`sns.heatmap`), prinsip kejujuran visual (Zero Baseline `set_ylim(bottom=0)` pada bar chart), anotasi & decluttering, ekspor 300 DPI (`plt.savefig`), 3 jebakan pemula (chart junk 3D, pie chart > 5 kategori), kaitan ke slide presentasi direksi. |
| Modul 5 | `da-5-m1` | Business Intelligence & Pembuatan Dashboard Interaktif | Konsep BI (Dimensi kualitatif vs Metrik kuantitatif), komparasi Looker Studio vs Tableau vs Power BI, diagram Z-pattern layout dashboard (Scorecards -> Line Chart -> Bar Chart -> Table), format angka Indonesia (`Rp 12.500.000`), Date Range Control (Date Slicer), Calculated Field rasio, 3 jebakan pemula (salah hitung rasio margin, 20 chart di 1 halaman), kaitan ke self-service reporting stakeholder. |
| Modul 6 | `da-6-m1` | Seni Data Storytelling & Komunikasi Hasil Analisis | Mengenali audiens (C-Level Executives vs Tim Teknis), diagram alur narasi 3 tahap (Konteks -> Actionable Insight -> Rekomendasi Aksi), aturan "One Slide One Message" dengan Action Headlines, tabel matriks Data Observation vs Actionable Insight, cara menghadapi sanggahan data secara profesional (Akui, Sumber, Cross-check), 3 jebakan pemula (presentasi metodologi ke direksi, defensif), kaitan ke jenjang karir Senior Analyst. |
| Modul 7 | `da-7-m1` | Panduan Proyek Portofolio Data Analysis End-to-End | Pentingnya proyek End-to-End (E2E) untuk rekrutmen, dataset publik Indonesia (BPS `bps.go.id`, Satu Data `data.go.id`, Kaggle), diagram alur siklus proyek E2E (SQL -> pandas -> EDA -> Looker Studio -> GitHub), format Executive Summary 1 halaman (Termasuk Catatan Keterbatasan Data), struktur repositori GitHub (`README.md`, `notebooks/`, `data/`), 3 jebakan pemula (koding tanpa pertanyaan bisnis, leak data pribadi PII), kaitan ke seleksi portofolio kandidat. |

---

## C. Perbaikan Penjelasan, Contoh Kode, & Slug

1. **Perpanjangan Explanation 47 Step:**
   Seluruh 47 step di 7 modul diperluas menjadi **440–600+ karakter (4+ kalimat)** yang menjawab secara terstruktur: **APA** sintaksnya, **KENAPA** begitu, **KAPAN** dipakai di dunia kerja, dan **JEBAKAN** umum yang sering membuat bug.
2. **Penyesuaian Slug & Judul Modul 1:**
   Slug Modul 1 diperbarui menjadi `persiapan-pandas-tuntas` dan judul menjadi `Persiapan & pandas Tuntas`. Track Analisis Data & Visualisasi dikeluarkan dari `instalasiAllowlist` di `scripts/verify-konten.ts`.
3. **Catatan Jujur Preview:**
   Karena skrip Python di platform BiLearn menggunakan `language: "text"` (tidak dieksekusi di browser), seluruh instruksi latihan memberikan catatan jujur bahwa koding diperiksa via regex validator, serta didukung contoh keluaran (`example.output`) berupa cetakan teks Python/pandas yang realistis.

---

## D. Verifikasi Hasil Akhir

Semua pengujian wajib telah dijalankan dengan hasil bersih 100%:

1. **`npm run verify:konten`:**
   ```text
   ✅ Analisis Data & Visualisasi  7 materi,  47 step, 7 kuis  (7 modul)
   ```
2. **Type Check & Linter:**
   ```bash
   npx tsc -p tsconfig.json --noEmit && npx eslint src/data/tracks/data-analysis.ts scripts/verify-konten.ts
   ```
   **Hasil:** Lolos 100% tanpa ada error TypeScript maupun linting.
3. **Pengujian Kueri & Tes Regex (Skrip Uji `/tmp/test_da_regexes.ts`):**
   - Total Step Diuji: **47 / 47**
   - Solutions passing: **47 / 47** (100% `solution` lolos tesnya sendiri).
   - StarterCode failing: **47 / 47** (100% `starterCode` belum lolos tes, siap dikerjakan user).
   - Toleransi variasi penulisan: Regex mendukung variasi spasi (`\s*`), petik tunggal/ganda (`['"]`), dan ekspresi pengelompokan yang valid.

---

## E. Kesimpulan

Track Analisis Data & Visualisasi sekarang terstruktur rapi, ramah bagi pemula total, dan memenuhi seluruh standar kualitas BiLearn Ronde 2 & Ronde 3. Dengan 7 materi komprehensif, diagram arsitektur teks, dan penjelasan mendalam tentang jebakan produksi (seperti `.loc` vs `.iloc`, zero baseline visualisasi, Simpson's Paradox, dan format Action Headlines), siswa tidak hanya mengetik sintaks pandas melainkan memahami **mental model pengolahan data analitik** dan **praktik terbaik di industri**.
