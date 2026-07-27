<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# BiLearn — aturan wajib

Dokumen terkait: `panduan_isi.md` (standar penulisan konten), `perintah_kuli.md` (perintah & antrean perbaikan per track).

## Sebelum menyentuh `src/data/tracks/**`

**BACA `panduan_isi.md` LEBIH DULU.** Itu standar penulisan konten, bukan saran. Riwayat proyek ini: 13 track pernah diisi tanpa mengikutinya → 935 pelanggaran, konten harus ditulis ulang.

Rujukan kualitas: `src/data/tracks/html.ts`, `css.ts`, `javascript.ts`, dan **modul 4 di `git.ts`** (contoh untuk track non-JavaScript).

### Aturan keras Ronde 2 (ditolak otomatis oleh skrip verifikasi)

1. **Setiap modul latihan wajib diawali minimal 1 item `materi`** (halaman BACA-DULU) sebelum step pertama, dan modul 1 setiap track wajib modul "Persiapan & Instalasi".
2. **Setiap step wajib punya `example`** berisi `code` + `output`. Kasusnya harus BERBEDA dari `solution`, dan `output` harus hasil nyata — bukan klaim manfaat seperti "menghemat waktu".
3. **Explanation step minimal 4 kalimat ATAU 350 karakter** yang menjelaskan APA, KENAPA, KAPAN dipakai, dan jebakan umum.
4. **Kuis WAJIB 5–7 soal per modul**, dan SEMUA soal wajib ber-tipe `"pilihan-ganda"` dengan `explanation` kunci jawaban.
5. **Kode non-JavaScript wajib `language: "text"`.** Perintah git/shell, SQL, PHP, Python, formula spreadsheet, Markdown — semuanya. Memakai `"js"` membuat preview mengeksekusinya dan melempar SyntaxError.
6. **Instruksi tidak boleh memuat jawaban utuh.** Beri skenario, biar user yang menyusun perintahnya.
7. **Tugas tidak boleh cuma "tulis komentar"** berisi kalimat yang sudah diberikan.

Tambahan: tes regex harus menerima variasi penulisan yang sama-sama benar (mis. `git switch -c` dan `git checkout -b`).

### Wajib dijalankan sebelum menyatakan selesai

```bash
npm run verify:konten          # kualitas konten — harus bersih
npx tsc --noEmit && npx eslint src
npm run build
```

Jangan pernah melaporkan pekerjaan selesai kalau `verify:konten` masih menemukan pelanggaran pada bagian yang kamu kerjakan.

## Bahasa konten

Penjelasan bahasa Indonesia, istilah teknis tetap Inggris (`state`, `closure`, `query`). Sapa pembaca dengan "kamu". Jangan meremehkan kesulitan ("gampang banget!", "tinggal ketik").
