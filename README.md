# BiLearn

Platform belajar coding interaktif gaya freeCodeCamp — kurikulum berbasis lowongan kerja nyata Indonesia. Semua materi terbuka, tanpa gembok.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Konsep

- **Track** = satu teknologi (HTML, CSS, JS, … Laravel, SQL, Python), lengkap dari nol sampai mahir. Ada 16 track — lihat `docs/kurikulum.md`.
- **Learning Path** = urutan track sesuai tujuan karier (Frontend, Backend Laravel/Node, Full-Stack JS, Data Analyst). Path hanya penunjuk jalan, bukan pembatas akses.
- **Step** = challenge kecil: penjelasan singkat → langsung ngoding di editor browser → tes otomatis.
- **Kuis** = pertanyaan dengan kunci jawaban + penjelasan *kenapa*, boleh diulang tanpa penalti.
- **Progress** disimpan di localStorage (MVP tanpa login).

## Struktur Penting

```
docs/riset-pasar-kerja.md   ← dasar keputusan kurikulum (dengan sumber)
docs/kurikulum.md           ← desain 16 track + 5 learning path
src/lib/types.ts            ← skema konten (Track/Module/Step/Quiz/Path)
src/data/tracks/            ← konten per track (html.ts = contoh lengkap modul 1)
src/data/paths.ts           ← definisi learning path
src/lib/progress.ts         ← progress localStorage
src/components/StepView.tsx ← editor + preview + tes
src/components/QuizView.tsx ← kuis + kunci jawaban
```

## Menambah Konten

Tambahkan step/kuis di `src/data/tracks/<track>.ts` mengikuti pola `html.ts`. Track baru: buat file, daftarkan di `src/data/tracks/index.ts`.

## Roadmap (fase 2)

Editor Monaco + test runner sungguhan, akun & sinkronisasi progress, autograder server-side untuk track backend, scraping lowongan untuk data "skill X diminta di Y% lowongan".
# BiLearn
