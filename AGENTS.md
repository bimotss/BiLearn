<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# BiLearn — aturan wajib

Dokumen terkait: `panduan_isi.md` (standar penulisan konten), `perintah_kuli.md` (perintah & antrean perbaikan per track).

## Wajib Menggunakan Graphify untuk Arsitektur & Eksplorasi

Sebelum menelusuri, menganalisis arsitektur, atau memodifikasi alur kode, agen **WAJIB** mengecek knowledge graph:
1. Periksa `graphify-out/graph.json` dan laporan `graphify-out/GRAPH_REPORT.md` (skema interaktif ada di `graphify-out/graph.html`).
2. Gunakan query graph untuk mencari relasi file/komponen sebelum membaca manual satu per satu:
   ```bash
   uv run --with graphifyy graphify query "<pertanyaan alur kode>"
   ```
3. Jika menambahkan modul/fitur baru atau refactor kode, perbarui graph di akhir:
   ```bash
   uv run --with graphifyy graphify update
   ```

## Sebelum menyentuh `src/data/tracks/**`

**BACA `panduan_isi.md` LEBIH DULU.** Itu standar penulisan konten, bukan saran. Riwayat proyek ini: 13 track pernah diisi tanpa mengikutinya → 935 pelanggaran, konten harus ditulis ulang.

Rujukan kualitas: `src/data/tracks/html.ts`, `css.ts`, `javascript.ts`, dan **modul 4 di `git.ts`** (contoh untuk track non-JavaScript).

### Aturan keras Ronde 2 (ditolak otomatis oleh skrip verifikasi)

1. **Setiap modul latihan wajib diawali minimal 1 item `materi`** (halaman BACA-DULU) sebelum step pertama, dan modul 1 setiap track wajib modul "Persiapan & Instalasi".
2. **Setiap step wajib punya `example`** berisi `code` + `output`. Kasusnya harus BERBEDA dari `solution`, dan `output` harus hasil nyata — bukan klaim manfaat seperti "menghemat waktu".
3. **Explanation step minimal 4 kalimat ATAU 350 karakter** yang menjelaskan APA, KENAPA, KAPAN dipakai, dan jebakan umum.
4. **Kuis WAJIB 5–7 soal per modul**, dan SEMUA soal wajib ber-tipe `"pilihan-ganda"` dengan `explanation` kunci jawaban.
5. **Pilih `language` sesuai isi kode:**
   - `"js"` — JavaScript murni yang bisa dijalankan browser apa adanya.
   - `"jsx"` — React, JSX, dan TypeScript. Preview mengompilasinya dulu dengan Babel lalu merender komponen terakhir yang terdefinisi. JSX/TS dengan `"js"` = SyntaxError merah.
   - `"text"` — semua sisanya: perintah git/shell, SQL, PHP, Python, kode Node.js, formula spreadsheet, jalur menu, Markdown. Ditampilkan tanpa dieksekusi.
6. **Instruksi tidak boleh memuat jawaban utuh.** Beri skenario, biar user yang menyusun perintahnya.
7. **Tugas tidak boleh cuma "tulis komentar"** berisi kalimat yang sudah diberikan.

Tambahan: tes regex harus menerima variasi penulisan yang sama-sama benar (mis. `git switch -c` dan `git checkout -b`).

### Aturan keras Ronde 3 (ditambahkan 28 Juli 2026, juga ditolak skrip)

8. **Halaman `materi` punya batas kedalaman**, karena materi 3 paragraf hanya menyiasati aturan #1. Wajib: minimal **1200 karakter**, minimal satu **diagram teks atau tabel**, satu bagian **jebakan/kesalahan umum**, dan satu bagian **kaitan ke dunia kerja**. Rujukan: materi track HTML, CSS, JavaScript, TypeScript.
9. **Setiap bab di `topics` wajib benar-benar tersentuh** step, kuis, atau materi di modul yang sama. Silabus yang mencantumkan bab tanpa isi adalah janji yang tidak ditepati — dan ini pernah terjadi pada 20 bab di JavaScript, 14 di CSS, serta 10 di HTML.
10. **Penghitung kalimat pada aturan #3 sekarang mengabaikan `kode`, URL, dan nama berkas.** Sebelumnya `index.html` dan `arr.at(-1)` terhitung sebagai beberapa kalimat, sehingga penjelasan 1–2 kalimat tetap lolos. Jangan mengakali panjang penjelasan dengan menaburkan kode.

### Yang skrip TIDAK bisa periksa — tetap tanggung jawabmu

- **Tes yang menolak jawaban benar.** Uji sendiri dengan `new RegExp(...)`: variasi kutip (`'` vs `"`), urutan properti/atribut, nama variabel yang bebas, `background` vs `background-color`, `rgba()` vs `rgb( / )`.
- **`example.output` yang mustahil muncul dari kodenya.** Untuk track yang bisa dieksekusi, jalankan contohnya (Node untuk JavaScript, `tsc` untuk pesan error TypeScript, postcss untuk CSS) lalu bandingkan keluarannya.
- **Konsep yang dipakai sebelum diajarkan.** Periksa apakah step modul 3 memakai sintaks yang baru dijelaskan di modul 5.
- **Preview yang tidak mungkin menampilkan hasil** (isi `<head>`, berkas yang tidak ada, library yang tidak tersedia, dark mode, test runner). Katakan terus terang di `note` bahwa tesnya tetap lulus.

### Wajib dijalankan sebelum menyatakan selesai

```bash
npm run verify:konten          # kualitas konten — harus bersih
npx tsc --noEmit && npx eslint src
npm run build
uv run --with graphifyy graphify update  # sinkronkan skema graph jika ada file yang berubah
```

Jangan pernah melaporkan pekerjaan selesai kalau `verify:konten` masih menemukan pelanggaran pada bagian yang kamu kerjakan.

## Bahasa konten

Penjelasan bahasa Indonesia, istilah teknis tetap Inggris (`state`, `closure`, `query`). Sapa pembaca dengan "kamu". Jangan meremehkan kesulitan ("gampang banget!", "tinggal ketik").

## Pencegahan kesalahan worker berulang

Sebelum mereview atau memperbaiki konten/validator, wajib baca `panduan_isi.md` bagian **2c. Pelajaran Audit Worker**. Untuk React dan Next.js baca juga `perintah-react-review-2026-09-15.md` / `perintah-nextjs-review-2026-09-15.md`. Jalankan audit kontrak `npx tsx scripts/audit-react-next-learning.ts --check` ketika mengerjakan kedua track tersebut; kegagalan awal adalah temuan yang harus diperbaiki, bukan alasan menghapus fixture. Verifier/build hijau tidak menggantikan bukti variasi jawaban sah, jawaban salah yang hampir benar, dan perilaku runtime.
