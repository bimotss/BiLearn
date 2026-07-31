# Pemeriksaan penuh track PHP & Laravel — 29 Juli 2026

Cakupan: seluruh `src/data/tracks/laravel.ts` (10 modul, 10 materi, 59 step, 10 kuis /
50 soal), termasuk `materi`, `explanation`, `example.code`/`output`, `instruction`,
`solution`, `tests`, `susunKode`, dan kunci jawaban kuis.

## Keluaran skrip

```
npx tsc --noEmit                 bersih
npm run verify:konten            0 pelanggaran pada track PHP & Laravel
                                 (sisa 46 pelanggaran seluruhnya di react/css/ai-dev — di luar cakupan)
npm run audit:lanjutan           Total temuan kualitas: 0
npx eslint src scripts           0 error (1 warning lama di scripts/test_susunkode_builder.ts)
npm run build                    TIDAK BISA DIUJI di sandbox Linux:
                                 "Failed to load SWC binary for linux/arm64"
```

Sebelum perbaikan: **16 pelanggaran** `verify:konten` pada track ini. Sekarang 0,
diuji tiga kali berturut-turut dengan hasil konsisten.

`php` CLI tidak tersedia di sandbox, jadi contoh PHP tidak bisa dieksekusi untuk
membandingkan keluaran. Semua `example.output` diperiksa manual baris per baris
(termasuk nomor baris pada pesan error), dan seluruh regex `tests` diuji empiris
dengan `new RegExp(...)` di Node.

---

## A. Pelanggaran aturan keras yang diperbaiki (16)

### 1. `susunKode` merosot jadi pilihan ganda (14 step)

`laravel-1-4`, `1-5`, `1-7`, `2-1`, `2-3`, `3-7`, `4-4`, `4-6`, `4-7`, `5-4`,
`5-6`, `6-6`, `7-3`, `7-4`.

Semuanya berpola sama: seluruh jawaban ditaruh dalam **satu keping** (52–91% dari
kode), dan kedua pengecoh adalah variasi keping itu. User tidak merangkai apa pun —
ia memilih satu chip.

Perbaikan: keping dipecah pada batas yang mengajarkan satu keputusan, lalu pengecoh
ditulis ulang agar menyasar keping yang berbeda-beda. Contoh `laravel-7-4`:

| | sebelum | sesudah |
|---|---|---|
| potongan | `<?php` + `return response()->json(['message' => 'Created'], 201);` | `<?php` / `return response()->json(` / `['message' => 'Created'],` / `201);` |
| pengecoh | dua variasi baris utuh | `return response()->created(` (menyasar keping helper) dan `200);` (menyasar keping status) |

Setiap susunan benar diverifikasi tetap lolos seluruh `tests` step-nya sendiri.

### 2. Pengecoh yang tidak merusak apa pun (`laravel-5-1`, 2 pengecoh)

`@csrf` ikut menempel di keping `<form ...>`, sehingga pengecoh `{{ csrf_token }}`
dan `@token` menggantikan keping lain dan tesnya tetap lulus — jawaban salah dinilai
benar. `@csrf` sekarang jadi keping sendiri, dan pengecohnya `@crsf` (salah ketik
yang benar-benar sering terjadi) serta `@token`.

---

## B. Kesalahan teknis yang diperbaiki (skrip tidak bisa mendeteksi ini)

1. **`laravel-6-4`, `6-5`, kuis modul 6 — `$this->authorize()` sudah tidak jalan.**
   Sejak Laravel 11 kelas `Controller` bawaan tidak lagi menyertakan trait
   `AuthorizesRequests`, jadi kode contohnya melempar `Call to undefined method`.
   Diganti `Gate::authorize('update', $post)` (beserta baris `use`-nya), dan
   ditambahkan catatan versi supaya pembaca tidak bingung saat menemui tutorial lama.
   Rujukan: dokumentasi Laravel 12 bagian *Authorization* sudah tidak memuat
   `$this->authorize()` sama sekali.

2. **`laravel-4-2` + kuis modul 4 — klaim tabel `categories_s` salah.** Model
   bernama `Categories` tidak pernah menghasilkan nama tabel seperti itu: `snake_case`
   hanya menyisipkan `_` sebelum huruf kapital. Diganti pernyataan yang benar
   (konvensinya rusak dan nama tabel tebakannya tidak bisa lagi diduga dari nama
   kelas) — muncul di 3 tempat: `explanation`, pesan tes, dan penjelasan kunci kuis.

3. **`laravel-9-1` — tes menolak jawaban yang benar.** Pengecohnya
   `it('halaman about ok', ...)` padahal `it()` adalah **alias resmi** `test()` di
   Pest, jadi kontennya mengajarkan hal yang salah sekaligus menolak jawaban sah.
   Pengecoh diganti `$this->visit(...)`, `tests` kini menerima `test()`/`it()` dan
   `function () {}`/`fn () =>`, dan `explanation` step ditulis ulang (versi lamanya
   paling tipis di track ini: tidak menyebut kapan dipakai maupun jebakannya).

4. **`laravel-6-1` — nama berkas migration ketinggalan versi.** Keluaran contoh
   memakai `2014_10_12_*_create_users_table` dan
   `create_password_reset_tokens_table` (gaya Laravel ≤10). Proyek Laravel 11/12
   menghasilkan `0001_01_01_000000_create_users_table`, `..._create_cache_table`,
   `..._create_jobs_table`. Ini penting karena seluruh track lainnya konsisten
   memakai Laravel 11+ (`ValidateCsrfToken`, `routes/console.php`, `install:api`,
   Gate di `AppServiceProvider`).

5. **`laravel-2-4` — `example.output` yang urutannya mustahil.** Kelas
   `class Xendit implements PaymentInterface {}` berada di berkas yang sama, dan PHP
   melakukan *early binding* untuk kelas yang antarmukanya sudah dikenal di berkas
   itu — berkasnya gagal saat kompilasi sehingga `bool(true)` tidak akan pernah
   tercetak. Kelas rusaknya dipindahkan ke berkas terpisah (`xendit.php`) di bagian
   keluaran, jadi urutan `bool(true)` → `Fatal error` sekarang benar.

6. **`laravel-1-5` — nomor baris pesan warning salah** (`on line 9`; berkas
   `index.php` pada contoh hanya 7 baris, dan `include`-nya di baris 6).

7. **Kuis modul 7 — salah ketik** "pembuataan" → "pembuatan".

---

## C. Temuan yang TIDAK saya ubah (perlu keputusanmu)

**Modul 3 bab [4] `Request & Response: input, redirect, session flash` nyaris tidak
tersentuh.** Tujuh step modul itu membahas routing, controller, Blade, dan `env()`;
tidak ada satu pun step, kuis, atau bagian materi yang mengajarkan `$request->input()`,
`redirect()`, atau `with('status', ...)`. `verify:konten` meloloskannya (pencocokannya
berbasis kata kunci), tetapi ini persis pola pelanggaran aturan #9 — silabus
menjanjikan bab yang isinya tidak ada. Menambalnya berarti menulis step baru, bukan
memperbaiki yang salah, jadi saya tahan dulu.

Dua catatan kecil lain yang saya biarkan karena konsisten dengan gaya seluruh track:
contoh multi-berkas menaruh komentar `// ---- nama-berkas.php ----` di luar tag
`<?php` (akan tercetak sebagai teks kalau benar-benar dijalankan), dan pemecahan
keping pada perbaikan (A) membuat beberapa susunan benar berbaris agak tidak lazim
(mis. `$_GET` dan `['category'];` di baris terpisah) — konsekuensi yang tidak bisa
dihindari dari aturan "satu keping = satu keputusan".

---

## D. Yang diperiksa dan ternyata sudah benar

- Seluruh perintah `php artisan make:*`, flag (`-m`, `--resource`, `--model=`,
  `--pest`, `--dev`), dan nama paket Composer (`guzzlehttp/guzzle`,
  `laravel/breeze`, `laravel/telescope`, `dedoc/scramble`).
- SQL yang ditampilkan Eloquent, termasuk urutan kolom `insert` (`updated_at`
  sebelum `created_at`), query `hasMany` beserta `is not null`, dan `where id in (...)`
  pada eager loading.
- Struktur JSON paginasi API Resource (`data`/`links`/`meta`), header rate limit
  (`X-RateLimit-*`, `Retry-After`), dan status code di seluruh modul 7.
- `routes/console.php` + facade `Schedule` (Laravel 11+), `install:api`, catatan
  bahwa `routes/api.php` tidak ada di proyek baru.
- Nomor baris pada semua pesan `Fatal error`/`Warning` contoh PHP lain (modul 1–2)
  — semuanya cocok, kecuali satu yang sudah diperbaiki di atas.
- 50 kunci jawaban kuis: semuanya benar, tanpa opsi ganda yang sama-sama sah.
