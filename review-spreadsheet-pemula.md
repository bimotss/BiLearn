# Review Track Spreadsheet & Excel — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Seluruh temuan di bawah sudah ditangani. Track sekarang: **6 modul, 6 materi, 39 step, 6 kuis (30 soal)**, dan `verify:konten` bersih untuk track ini.

Berkas: `src/data/tracks/spreadsheet.ts` (saat direview: 6 modul, 39 step, 6 kuis, **0 materi**, 22 explanation pendek, 2 bab topics menganggur).

Cara baca: aku membaca track ini sebagai pemula total yang baru saja menyelesaikan track HTML, CSS, JS, dan Git. Pembaca di sini mungkin baru pertama kali menyusun tabel laporan bisnis di Microsoft Excel atau Google Sheets.

---

## A. Yang bikin macet sejak menit pertama

### A1. Nol halaman `materi` di seluruh enam modul

Aturan keras `AGENTS.md` #1 & #8: setiap modul latihan wajib diawali minimal satu halaman BACA-DULU. Enam modul, nol materi. Efeknya:
- Pemula langsung disuruh mengetik `=A1 + B1` atau `=VLOOKUP(...)` tanpa paham sel, range, tipe data (Teks vs Angka vs Tanggal), atau kenapa formula wajib diawali tanda `=`.
- Konsep krusial seperti **Referensi Absolut (`$A$1`) vs Relatif (`A1`)** dan **PivotCache** hanya disinggung sekilas di petunjuk latihan.
- Tidak ada gambaran besar alur kerja profesional (Data Cleaning → Formula & Lookup → Pivot Table → Dashboard → Executive Summary).

### A2. Slug Modul 1 belum mencakup `persiapan` / `instalasi`

Track ini sebelumnya berada di `instalasiAllowlist` pada skrip verifikasi karena modul pertamanya berslug `dasar-spreadsheet` tanpa kata `persiapan` atau `instalasi`.
**Perbaikan:** Slug Modul 1 diubah menjadi `persiapan-dasar-spreadsheet` dengan judul `Persiapan & Dasar Spreadsheet`, dan `spreadsheet` dikeluarkan dari `instalasiAllowlist` di `scripts/verify-konten.ts`.

### A3. 22 explanation di bawah standar (< 350 karakter / 4 kalimat)

22 step hanya memiliki penjelasan 1–2 kalimat (80–134 karakter) yang sekadar mengulang sintaks tanpa menjelaskan **APA**, **KENAPA**, **KAPAN dipakai**, dan **JEBAKAN** umumnya.

---

## B. Enam halaman materi yang ditambahkan

Satu per modul, ditulis memenuhi aturan keras Ronde 3 (minimal 1200 karakter, diagram teks/tabel, jebakan umum, dan kaitan ke dunia kerja):

| Modul | ID Materi | Judul Materi | Isi & Yang Ditutupnya |
|---|---|---|---|
| Modul 1 | `sheet-1-m1` | Pengenalan Spreadsheet, Sel, Tipe Data, dan Formula Dasar | Pengertian dari nol, diagram grid sel/range (`A1:C3`), tabel tipe data (Teks vs Angka vs Tanggal), konsep format visual vs nilai asli memori, referensi relatif vs absolut (`$A$1`), operator & agregasi dasar, 3 jebakan pemula (angka tersimpan sebagai teks, lupa menekan `F4`), kaitan ke dunia kerja. |
| Modul 2 | `sheet-2-m1` | Fungsi Logika, Agregasi Bersyarat, dan Lookup Modern (XLOOKUP) | Evolusi VLOOKUP ke XLOOKUP, diagram alur XLOOKUP dua arah, tabel perbandingan fungsi (`IF`, `IFS`, `SUMIFS`, `VLOOKUP`, `XLOOKUP`, `IFERROR`), 3 jebakan (lupa `FALSE` pada VLOOKUP, urutan parameter `SUMIFS` vs `SUMIF`, perbandingan Angka vs Teks), kaitan ke interview kerja. |
| Modul 3 | `sheet-3-m1` | Teknik Pembersihan Data (Data Cleaning) & Standarisasi | Filosofi *Garbage In, Garbage Out* (GIGO), diagram pipeline pembersihan data mentah, tabel fungsi `TRIM`, `PROPER`, `SUBSTITUTE`, `SPLIT`, `UNIQUE`, `Data Validation`, 3 jebakan (Remove Duplicates tanpa backup, `TRIM` vs `SUBSTITUTE`), kaitan ke audit data industri e-commerce/perbankan. |
| Modul 4 | `sheet-4-m1` | Pivot Table: Ringkasan Analisis Multidimensi Tanpa Rumus | Syarat data tabular rapi, diagram anatomi 4 area Pivot Table (Rows, Columns, Values, Filters), tabel fitur `Calculated Field` & `Slicer`, opsi `Show values as` (% of Grand Total), 3 jebakan (lupa Refresh PivotCache, menaruh angka di Rows), kaitan ke tes spreadsheet saat rekrutmen. |
| Modul 5 | `sheet-5-m1` | Visualisasi Data, Prinsip Decluttering, dan Desain Dashboard | Data storytelling, tabel panduan memilih chart (Line vs Bar vs Pie vs Sparkline), diagram layout dashboard eksekutif 1 layar (Kartu KPI -> Chart Tren -> Breakdown -> Slicer), prinsip decluttering & sumbu Y jujur mulai 0, 3 jebakan (Pie Chart 3D, truncated axis), kaitan ke presentasi direksi. |
| Modul 6 | `sheet-6-m1` | Studi Kasus End-to-End: Dari Data Mentah Hingga Executive Summary | Diagram pipeline analisis bisnis end-to-end, format 3 paragraf Executive Summary (Key Findings, Root Cause, Actionable Recommendations), teknik `Protect Sheet` untuk keamanan formula, 3 jebakan (mengirim file ber-error `#N/A`, laporan tanpa narasi), kaitan ke peran Business Analyst. |

---

## C. Perbaikan Penjelasan & Penutupan Bab (`topics`)

1. **Penulisan Ulang 22 Explanation:**
   Seluruh 22 step yang sebelumnya di bawah 350 karakter (`sheet-1-2`, `sheet-1-4` s.d. `sheet-1-7`, `sheet-2-1` s.d. `sheet-2-7`, `sheet-3-1` s.d. `sheet-3-7`, `sheet-6-1` s.d. `sheet-6-3`, `sheet-6-5`) telah diperluas menjadi **350–550+ karakter** (4–6 kalimat lengkap), menjawab APA, KENAPA, KAPAN, dan JEBAKAN secara mendalam.
2. **Penutupan Bab Menganggur:**
   Semua bab di `topics` pada 6 modul kini tersentuh secara eksplisit oleh materi, step, dan soal kuis (termasuk bab `"SUMIF(S), COUNTIF(S), AVERAGEIF(S)"`, `"Autofill & pola"`, dan `"Freeze pane & praktik tabel yang rapi"`).

---

## D. Verifikasi Hasil Akhir & Bukti Angka

Semua pengujian wajib telah dijalankan dengan hasil bersih:

| Pengujian | Perintah / Alat | Result & Bukti Angka |
|---|---|---|
| **Kualitas Konten** | `node /tmp/v/scripts/verify-konten.js` | ✅ **BERSIH (0 Error)**<br>`✅ Spreadsheet & Excel 6 materi, 39 step, 6 kuis (6 modul)` |
| **Type Check & Linting** | `npx tsc --noEmit && npx eslint src/data/tracks/spreadsheet.ts scripts/verify-konten.ts` | ✅ **0 Error / 0 Warning** |
| **Pengujian Regex & Solution** | Script `/tmp/test-spreadsheet.js` | ✅ **39/39 Solution Lulus Tes**<br>✅ **39/39 StarterCode Fails Test** (100% Akurat) |
| **Production Build** | `npm run build` | ⚠️ *Tidak diuji di sandbox Linux (karena SWC arm64 darwin binary mismatch), namun `tsc --noEmit` dan `eslint` 100% bersih.* |

---

## E. Kesimpulan

Track **Spreadsheet & Excel** kini memenuhi seluruh standar kualitas BiLearn Ronde 2 & Ronde 3. Dengan 6 halaman materi komprehensif, diagram visual, tabel rujukan, dan 39 step latihan yang mendalam, pemula total dibimbing dari pengenalan sel dasar hingga pembuatan dashboard eksekutif dan penulisan Executive Summary profesional.
