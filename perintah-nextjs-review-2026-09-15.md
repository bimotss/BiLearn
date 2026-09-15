# Perintah worker: perbaikan Next.js berdasarkan audit 15 September 2026

## Status dan konteks

Audit terarah pada source lokal: 8 modul, 9 materi, 50 step, 8 kuis, 47 soal. Proyek menggunakan Next.js 16.2.12 dan React 19.2.4. Source track belum diperbaiki dalam pekerjaan audit ini. Laporan lama `review-nextjs-pemula.md` bukan bukti kelulusan terbaru.

Wajib baca `AGENTS.md`, `panduan_isi.md` bagian 2c, graph dan query Graphify. Sebelum menulis kode baca dokumentasi relevan dalam `node_modules/next/dist/docs/`; verifikasi lagi versi terpasang saat mulai. Pertahankan ID/progres serta perubahan pengguna/Business English. Jangan deploy tanpa instruksi.

## Bukti kegagalan validator

`npx tsx scripts/audit-react-next-learning.ts --check` menghasilkan 13 ketidaksesuaian lintas kedua track (exit 1), tujuh kasus berikut untuk Next.js. Kode lengkap dan expected berada dalam skrip.

| ID | Jawaban/kondisi | Seharusnya | Aktual saat audit |
|---|---|---|---|
| next-1-3 | `const id = (await params).id` | Lulus | Gagal |
| next-3-1 | Default component bernama `Produk`, bukan `Page` | Lulus; instruksi tidak mewajibkan nama | Gagal |
| next-3-1 | Fetch/json ada tetapi JSX tidak menampilkan data | Gagal | Lulus |
| next-6-1 | `httpOnly: !true` dengan komentar `httpOnly: true` | Gagal | Lulus |
| next-6-3 | Guard autentikasi setelah `return`, tak pernah dijalankan | Gagal | Lulus |
| next-6-4 | `matcher: '/dashboard/:path*'` berbentuk string | Lulus; API mendukung string | Gagal |
| next-7-1 | Atribut benar ada pada div lain, Image sendiri salah | Gagal | Lulus |

Prioritaskan autentikasi/cookie: kelulusan palsu mengajarkan proteksi yang tidak berfungsi. Periksa struktur nilai, elemen, binding dan alur kontrol yang relevan; pencarian kata global tidak cukup. Tambahkan variasi benar serta pengecoh komentar/string, elemen lain, nilai salah dan guard tak terjangkau. Jangan menolak alias lokal yang sah untuk property route bernama `id`.

## Koreksi pengajaran dan output

- **next-3-3:** `revalidate: 30` bukan jaminan data “tertinggal paling lama setengah menit”. Setelah interval berlalu, request berikut dapat menerima data stale sambil memicu regenerasi. Jelaskan alur request dan beda development/production; uji dengan production server dan fixture, bukan sekadar menunggu 30 detik tanpa request.
- **next-3-1:** contoh tanpa await pada `.json()` mengakses `daftar.length`; property itu undefined pada Promise, bukan otomatis menghasilkan teks `[object Promise] artikel`. Perbaiki output berdasarkan eksekusi aktual. Jangan mengarang jumlah 12 atau durasi 214 ms dari API contoh. Gunakan fixture deterministik.
- **next-6-3:** pastikan konteks/import `auth()` tersedia pada starter/solution atau dijelaskan sebagai berkas pendukung. Validasi request tanpa sesi benar-benar dialihkan sebelum konten rahasia dikirim; request dengan sesi tetap dapat mengakses.
- Periksa kembali konsistensi signature server action dengan `useActionState` (argumen previous state dan form data). Ini daftar pemeriksaan lanjutan, belum temuan yang dibuktikan audit ini.
- Jangan menyalin format build log versi lama sebagai hasil Next.js 16 yang benar-benar dijalankan. Labeli ilustrasi dengan jelas, atau gunakan log aktual.
- Jangan mengulang temuan laporan lama yang sudah diperbaiki: track sudah memakai Proxy untuk Next.js 16; materi `revalidateTag` sudah memiliki argumen kedua. Audit source sekarang.

## Dokumen primer lokal yang sudah diperiksa

Path relatif terhadap `node_modules/next/dist/docs/`:

- `01-app/01-getting-started/16-proxy.md`: perubahan nama Middleware → Proxy pada versi 16, lokasi berkas, dan matcher string.
- `01-app/03-api-reference/04-functions/cookies.md`: API async; kompatibilitas sync versi lama bukan pola baru.
- `01-app/03-api-reference/04-functions/fetch.md`: bedakan perilaku fetch/cache dan prerender route; hindari generalisasi bahwa default selalu mengambil ulang setiap request production.
- `01-app/02-guides/incremental-static-regeneration.md`: request setelah interval dapat menerima hasil lama saat regenerasi berjalan.

Periksa juga signature terpasang `node_modules/next/dist/server/web/spec-extension/revalidate.d.ts`. Kutip versi yang dipakai di laporan, jangan menganggap pengetahuan versi lama tetap berlaku.

## Kriteria selesai

1. Tujuh kasus Next.js dan perluasan regresinya sesuai kontrak. Kasus React yang masih gagal tetap dilaporkan, jangan dihapus agar suite hijau.
2. Jalankan server Next.js nyata untuk dynamic params, data rendering, cookie, auth redirect, matcher dan cache yang diubah; preview JSX BiLearn tidak menyediakan server/routing/auth Next.js. Gunakan fixture lokal; jangan bergantung pada API contoh atau akun produksi.
3. Petakan topics ke materi/step/kuis. Periksa konsep sebelum dipakai, contoh berbeda dari solution, output nyata, dan 5–7 soal pilihan-ganda total per modul.
4. Jalankan `npm run verify:konten`, `npx tsc --noEmit && npx eslint src`, `npm run build`, audit kontrak, dan `uv run --with graphifyy graphify update`. Verifier/build lulus tidak membuktikan proteksi akses atau semantik jawaban. Catat exit code aktual, diff, keterbatasan dan pengujian yang belum dilakukan.
