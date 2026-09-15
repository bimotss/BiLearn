# Hasil perbaikan Business English — 15 September 2026

Status: sudah di-push ke main dan dipublikasikan pada 15 September 2026, commit `8c98b4146a0c227b71561daba387b2bd82e64d75`. Laporan ini menggantikan laporan worker sebelumnya yang memuat klaim terlalu luas.

## Masalah yang diperbaiki pada pemeriksaan lanjutan

Pemeriksa e-mail sebelumnya mencari angka dan tanggal di seluruh teks. Akibatnya anggaran lama $15,000 bisa meluluskan permintaan baru $25,000, sedangkan rincian biaya dan tanggal kegiatan pendukung ditolak.

Sekarang StepTest memiliki scope opsional `email-opening`. Evaluator bersama mengambil paragraf pertama setelah salam pada baris tersendiri; paragraf berakhir pada baris kosong. CRLF dan baris yang terbungkus tetap didukung. Scope kosong selalu gagal, termasuk pada tes larangan. Tes tanpa scope tetap bekerja pada teks lengkap seperti sebelumnya.

Pada `beng-8-9`, pemeriksaan permintaan, nominal, dan tenggat memakai scope itu. Pemeriksaan subject, salam, penutup, dan register tetap berlaku pada teks lengkap. Instruksi secara eksplisit meminta satu paragraf pembuka berisi permintaan, satu total anggaran, dan tenggat. Riwayat anggaran, rincian biaya, dan jadwal pendukung diletakkan pada paragraf selanjutnya.

`verify-konten` memakai evaluator yang sama dengan kedua mode aplikasi untuk penilaian jawaban. Validasi sintaks regex tetap dijalankan. Tidak ada aturan konten atau ambang kelulusan yang dihapus atau dilemahkan.

Pesan sukses kini menyatakan pemeriksaan otomatis lolos dan meminta peserta meninjau isi. Dua label coding tersisa pada mode susun kalimat juga disesuaikan dengan konteks bahasa.

## Bukti pengujian otomatis

- `npx tsx scripts/test-business-english.ts`: 604 asersi fixture pada 65 step lulus, disertai pemeriksaan tambahan yang dilaporkan skrip.
- `npx tsx scripts/test-email-opening.ts`: 24 kasus e-mail lengkap + 4 pemeriksaan scope/regresi lulus.
- `npm run verify:konten`: lulus; Business English berisi 17 materi, 65 step, 9 kuis, 53 soal dalam 9 modul. Total proyek: 149 materi, 882 step, 137 kuis, 729 soal.
- `npx tsc --noEmit`: lulus.
- ESLint pada `src`, verifier, dan kedua skrip Business English: lulus tanpa warning. Pemeriksaan seluruh scripts sebelumnya menemukan satu warning lama pada `scripts/test_susunkode_builder.ts`; berkas tersebut tidak diubah.
- `npm run build`: lulus, 1.198 halaman statis.

Kasus regresi meliputi:

| Kasus | Hasil |
| --- | --- |
| Permintaan $25,000 dengan anggaran lama $15,000 pada paragraf berikutnya | Ditolak |
| Nominal permintaan kosong tetapi $15,000 disebut dalam riwayat | Ditolak |
| Tenggat permintaan kosong tetapi ada di subject | Ditolak |
| Permintaan bertenggat December, sedangkan riwayat menyebut November 20 | Ditolak |
| November 21, rather than November 20 pada permintaan | Ditolak |
| $15,000.99 atau $150,000 sebagai total | Ditolak |
| Rincian $10,000 + $5,000 pada paragraf pendukung | Diterima |
| Pelaksanaan by December 10 atau audit before October 31 pada paragraf pendukung | Diterima |
| Modal May, nama Bimo/Anne-Marie, dan Would you mind approving | Diterima |
| $15,000.00, 15000 USD, atau fifteen thousand dollars | Diterima |
| CRLF, tanggal British, dan pembuka yang terbungkus ke baris berikutnya | Diterima |

## Pemeriksaan browser lokal

Dilakukan pada build statis melalui server loopback:

- Instruksi format pembuka dan batas pemeriksaan terlihat pada tugas akhir.
- Permintaan $25,000 dengan riwayat $15,000 ditolak melalui tombol Periksa Jawaban.
- E-mail berisi permintaan $15,000, rincian $10,000 + $5,000, jadwal December 10, audit October 31, modal May, dan nama Bimo diterima.
- Lima potongan e-mail dirangkai melalui mode susun kalimat, lalu pemeriksaan lulus dengan pesan sukses yang tidak mengklaim seluruh makna telah dinilai.

## Batas yang disengaja

Ini pemeriksaan pola untuk latihan dengan format pembuka tertentu, bukan penilaian semantik seluruh e-mail. Kualitas grammar, nada, fakta pada paragraf pendukung, dan pertentangan antarparagraf tetap ditinjau dengan rubrik peserta. Teks yang tidak mengikuti format harus diperbaiki ke format latihan; lolos pola tidak membuktikan tingkat CEFR atau kesiapan kerja.

Tidak ada layanan AI atau pengiriman draf ke pihak ketiga. Perubahan worker pada rute kuis/progres dipertahankan; perbaikan ini tidak mengklaim audit ulang menyeluruh seluruh kurikulum atau semua kemungkinan kalimat bahasa Inggris.

## Verifikasi deploy 15 September 2026

Build statis lokal dipublikasikan melalui rilis terpisah di server dan pergantian direktori secara atomik. Versi sebelumnya disimpan untuk rollback; aset statis lama dipertahankan agar tab yang masih terbuka dapat memuat chunk lama. Tidak ada konfigurasi Nginx atau layanan lain yang diubah.

Tes Business English (604 asersi dan pemeriksaan tambahan), 24 kasus e-mail + 4 scope/regresi, verifier konten, TypeScript, ESLint terkait, serta build kembali lulus. Graph diperbarui. Commit remote main cocok dengan commit rilis.

Pemeriksaan HTTP publik: beranda, halaman track, tugas akhir `beng-8-9`, URL kuis lama `beng-1-k2`, dan 11 aset CSS/JavaScript semuanya HTTP 200. Hash isi seluruh 15 respons cocok dengan build lokal. Pemeriksaan ini membuktikan artefak terbaru tersaji; interaksi browser yang dicatat sebelumnya diuji lokal, bukan diulang sebagai uji browser live.
