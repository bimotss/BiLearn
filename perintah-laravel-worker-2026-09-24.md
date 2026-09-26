# Perintah worker: audit dan perbaikan menyeluruh track PHP & Laravel

Tanggal audit: 24 September 2026  
Cakupan: halaman publik `https://bilearn.bproject.online/tracks/laravel/`,
`src/data/tracks/laravel.ts`, validator produksi, dan riwayat audit Laravel di repo.

Dokumen ini adalah **kontrak implementasi untuk worker**, bukan laporan bahwa track
sudah diperbaiki. Audit teknis terperinci dan fixture regresi yang sudah ada tetap
menjadi sumber wajib: `perintah-laravel-review-2026-09-15.md` dan
`scripts/audit-laravel-learning.ts`.

## 1. Kesimpulan audit

### Suara pemula total

Track terlihat lengkap karena memiliki 10 modul dan 79 item, tetapi alur belajarnya
belum selalu membimbing dari keadaan benar-benar nol.

- Modul Persiapan menjelaskan banyak alat sekaligus, lalu langsung berakhir pada
  kuis. Tidak ada latihan untuk membuktikan `php -v`, `composer --version`, posisi
  root proyek, atau berkas PHP pertama benar-benar berjalan. Pemula bisa hafal
  jawaban kuis tanpa mempunyai lingkungan yang bekerja.
- Modul PHP Dasar belum benar-benar mengajarkan fungsi, parameter, `return`, arrow
  function, named argument, serta array multidimensi. Modul berikutnya sudah memakai
  constructor, method, callback, dan object. Ini lompatan prasyarat yang besar.
- Beberapa materi memperkenalkan banyak istilah dalam satu napas—MVC, request
  lifecycle, middleware, controller, model, Blade, `.env`—tanpa satu alur kecil yang
  dapat diikuti dari URL sampai respons.
- Sejumlah latihan berjudul konsep besar, tetapi tugasnya hanya menjalankan generator.
  Contoh paling jelas: step Policy menjelaskan kepemilikan data dan serangan langsung,
  tetapi tugas hanya meminta `make:policy`. Pemula belum pernah membuktikan bahwa user
  A boleh mengubah datanya dan user B mendapat 403.
- Panel dengan `language: "text"` jujur tidak menjalankan PHP/Laravel, tetapi pemula
  belum selalu diberi prosedur lokal yang lengkap: berkas mana, folder kerja mana,
  command apa, input apa, dan keluaran apa yang harus diamati.
- Banyak output terlihat seperti hasil nyata, padahal membutuhkan database, route,
  factory, mail, queue worker, waktu, atau data awal yang tidak disediakan. Pemula
  tidak dapat membedakan keluaran reproduktif dari ilustrasi.
- Sanctum dijelaskan terutama sebagai bearer token. Pemula berpotensi menyimpulkan
  bahwa semua SPA harus membawa token, padahal first-party SPA lazim memakai
  autentikasi berbasis cookie/session dan proteksi CSRF.

### Penilaian instruktur senior

Urutan modul tingkat tinggi sudah masuk akal—PHP sebelum Laravel, web sebelum API,
dan fitur produksi setelah CRUD—tetapi **urutan di dalam modul, kedalaman praktik,
dan penilaian jawaban belum layak dinyatakan tuntas**.

Baseline yang direproduksi pada 24 September 2026:

| Pemeriksaan | Hasil aktual |
|---|---|
| Halaman publik | 10 modul, 79 item |
| Struktur lokal | 10 materi, 59 step, 10 kuis / 50 soal |
| `npm run verify:konten` | exit 0; pemeriksaan mekanis lolos |
| `npx tsx scripts/audit-laravel-learning.ts --check` | exit 1; 255 kasus, **16 tidak sesuai kontrak** |
| Graphify | `graphify-out/graph.json` dan `GRAPH_REPORT.md` tidak tersedia saat audit |

Enam belas kegagalan kontrak mencakup jawaban benar yang ditolak dan jawaban salah
yang diterima: interpolasi petik tunggal, nama variabel PHP yang case-sensitive,
`echo` di luar loop, variasi `require_once`, route yang salah, variasi query Eloquent,
CSRF di komentar/form lain, aturan validasi yang tidak lengkap, `$fillable` yang
membuka kolom tambahan, regenerasi session di lokasi salah, route di luar grup
`auth`, dan fake HTTP berstatus 500. Verifier hijau bukan bukti bahwa latihan menilai
makna dengan benar.

## 2. Bagian membingungkan dan contoh revisi guru

Teks berikut adalah arah penulisan, bukan string yang harus disalin mentah. Worker
harus menyesuaikannya dengan format `materi`, `step`, `example`, dan `quiz` BiLearn.

### A. Persiapan: dari daftar instalasi menjadi checkpoint

**Masalah pemula:** satu halaman panjang menyebut PHP CLI, Composer, Laravel
Installer, Herd, XAMPP, Apache/Nginx, MySQL, PATH, dan extension. Belum jelas mana
jalur utama, mana alternatif, dan kapan instalasi dianggap berhasil.

**Urutan revisi:** pilih satu baseline versi yang eksplisit dan satu jalur utama per
OS. Setelah setiap alat, beri checkpoint yang bisa diamati. Baru setelah PHP dan
Composer terbukti bekerja, buat proyek Laravel.

**Contoh penulisan ulang:** 

> Anggap proyek Laravel seperti sebuah bengkel. PHP adalah mesin yang menjalankan
> kode, Composer adalah bagian pengadaan suku cadang, dan Laravel adalah rancangan
> bengkel yang sudah mempunyai jalur kerja. Kita memeriksa mesinnya lebih dulu;
> kalau `php -v` belum menampilkan versi, perintah Laravel berikutnya pasti gagal.
>
> 1. Buka terminal baru dan jalankan `php -v`. Catat versi yang tampil.
> 2. Jalankan `composer --version`. Jika command tidak ditemukan, periksa PATH;
>    jangan lanjut membuat proyek.
> 3. Buat proyek pada folder latihan yang kamu kenali, masuk ke root yang berisi
>    berkas `artisan`, lalu jalankan `php artisan --version`.
> 4. Jalankan server lokal, buka URL yang dicetak terminal, kemudian hentikan server
>    dengan `Ctrl+C`.
>
> **Jebakan:** `php artisan` dari folder induk akan gagal meskipun PHP terpasang.
> Command itu mencari berkas `artisan` pada folder kerja saat ini.

Tambahkan minimal dua step: diagnosis versi/PATH/root proyek dan menjalankan berkas
PHP pertama. Kuis bukan pengganti kedua praktik tersebut.

### B. PHP Dasar: fungsi harus datang sebelum OOP

**Masalah pemula:** fungsi tercantum di `topics`, tetapi tidak menjadi kompetensi
latihan. Setelah itu pembaca langsung menemui constructor dan method.

**Contoh penulisan ulang:** 

> Fungsi adalah mesin kecil yang menerima bahan lewat parameter dan mengembalikan
> hasil lewat `return`. `echo` langsung mengirim teks ke keluaran, sedangkan `return`
> menyerahkan nilai kepada kode pemanggil agar dapat diuji atau dipakai lagi. Method
> yang akan kamu temui pada OOP adalah fungsi yang dimiliki sebuah object; karena itu
> fungsi biasa perlu dikuasai lebih dahulu.
>
> ```php
> function hitungTotal(int $harga, int $jumlah = 1): int
> {
>     return $harga * $jumlah;
> }
>
> $total = hitungTotal(harga: 15000, jumlah: 2);
> echo $total; // 30000
> ```
>
> **Jebakan:** nilai yang di-`echo` tidak otomatis menjadi nilai kembalian. Tanpa
> `return`, pemanggil tidak memperoleh hasil yang bisa disimpan atau diuji.

Buat progresi: fungsi biasa → parameter/default → `return` → type declaration →
named argument → arrow function → pemakaian array multidimensi. Jangan memakai
callback/constructor sebelum progresi ini selesai.

### C. MVC dan request lifecycle: ikuti satu request nyata

**Masalah pemula:** definisi komponen berdiri sendiri. Pembaca belum melihat data
berpindah dari browser ke route, melewati middleware, masuk controller, mengambil
model, lalu kembali sebagai response.

**Contoh penulisan ulang:** 

> Bayangkan request sebagai paket yang masuk ke gedung. `public/index.php` adalah
> pintu masuk tunggal, middleware adalah petugas pemeriksaan, route adalah meja
> informasi, controller adalah koordinator pekerjaan, model berbicara dengan data,
> dan Blade membungkus hasil menjadi HTML. Tidak setiap request harus memakai semua
> bagian; route kecil boleh langsung mengembalikan teks, tetapi aplikasi kerja
> biasanya memisahkan tanggung jawabnya.
>
> ```text
> GET /products/12
>   → public/index.php
>   → middleware web/auth
>   → route model binding
>   → ProductController@show(Product $product)
>   → view('products.show', ['product' => $product])
>   → HTTP 200 berisi HTML
> ```
>
> Dependency injection berarti Laravel menyiapkan object yang dibutuhkan oleh
> controller berdasarkan type hint. Seperti resepsionis yang mengantar petugas yang
> tepat, service container membuat controller tidak perlu membangun semua dependency
> dengan `new` sendiri. Jebakannya adalah menjadikan controller tempat semua logika;
> koordinasi boleh di controller, tetapi aturan bisnis yang besar perlu dipisahkan.

Setelah materi, buat satu latihan end-to-end route → controller → response sebelum
memecahnya menjadi latihan fitur terpisah.

### D. Request, validasi, otorisasi, dan escaping harus dipisahkan

**Masalah pemula:** mengambil input kadang terdengar seolah sudah membuat input aman.
Empat lapisan berikut punya tujuan berbeda.

| Lapisan | Pertanyaan | Contoh |
|---|---|---|
| Retrieval | Data apa yang dikirim? | `$request->input('title')` |
| Validation | Bentuk/nilainya boleh? | Form Request `rules()` |
| Authorization | User ini berhak? | Policy / `Gate::authorize()` |
| Output escaping | Aman ditampilkan sebagai HTML? | Blade `{{ $title }}` |

**Contoh penulisan ulang:** 

> `$request->input()` hanya mengambil paket dari depan pintu; ia belum memeriksa isi
> maupun pemilik paket. Validasi menolak bentuk data yang salah, Policy menolak user
> yang tidak berhak, dan escaping mencegah teks pengguna ditafsirkan sebagai HTML.
> Keempatnya saling melengkapi, bukan saling menggantikan.

Form Request harus diajarkan sebagai kelas nyata berisi `authorize()`, `rules()`,
opsional `messages()`, lalu dipakai lewat type hint pada controller. Uji request valid,
request invalid, user tanpa hak, old input, dan database yang tidak berubah saat gagal.

### E. Policy: latihan harus menguji kebijakan, bukan generator

**Masalah pemula:** judul dan penjelasan mengajarkan ownership, tetapi tugas hanya
membuat file Policy.

**Revisi tugas:** sediakan `PostPolicy`, dua user, dan satu post. Minta pembaca
melengkapi aturan update berdasarkan `user_id`, menerapkannya pada endpoint, lalu
membaca tiga hasil: pemilik berhasil, user lain 403, dan data tetap sama setelah 403.
Perintah `make:policy` boleh menjadi langkah persiapan, bukan tujuan akhir.

### F. Sanctum: bedakan first-party SPA dan personal access token

**Masalah pemula:** kalimat “API tidak bisa mengandalkan session browser” terlalu
mutlak dan menyesatkan untuk first-party SPA.

**Contoh penulisan ulang:** 

> Sanctum melayani dua skenario yang berbeda. Aplikasi mobile atau script dapat
> memakai personal access token pada header `Authorization`. First-party SPA yang
> berbagi domain tingkat atas dengan backend biasanya memakai cookie/session;
> identitas berada di cookie `HttpOnly` dan request perubahan data tetap membutuhkan
> proteksi CSRF. Jangan menyimpan bearer token sensitif di URL atau log.

Latihan harus menyebut prasyarat `HasApiTokens`, instalasi/migration yang sesuai versi,
route `auth:sanctum`, penerbitan dan pencabutan token. Tambahkan skenario yang meminta
pembaca memilih cookie atau bearer berdasarkan jenis klien.

## 3. Gap analysis dan penambahan wajib

Worker wajib membuat matriks `topics → item → kompetensi → bukti`. Keyword yang hanya
muncul di materi, output error, atau distraktor kuis tidak dihitung sebagai pengajaran.

| Modul | Gap utama | Penambahan wajib dan alasan pedagogis |
|---|---|---|
| Persiapan | 0 step; versi dan root proyek tidak dibuktikan | Diagnosis PATH/version/root, PHP hello world, create-project yang version-pinned, start/stop server. Pemula perlu lingkungan stabil sebelum sintaks. |
| PHP Dasar | Fungsi, return, arrow, named argument, multidimensional array dangkal/hilang | Latihan progresif fungsi dan data bertingkat sebelum OOP/Laravel memakai method/callback. |
| OOP & Composer | Abstract class tidak diajarkan; PSR-4 belum end-to-end; dependency injection belum punya jembatan | Bandingkan interface vs abstract class; mapping `composer.json` → namespace → entry point; constructor injection sederhana. Ini prasyarat service container Laravel. |
| Laravel Fundamental | Lifecycle, middleware pipeline, Request/Response, redirect/flash, Blade layout/component, service container dangkal | Satu vertical slice lengkap dan satu latihan DI. Pemula perlu model mental sebelum CRUD tersebar di banyak berkas. |
| Eloquent | Migration hanya generator; update/delete dan `belongsToMany` belum dipraktikkan; transaksi/indexing/casting/scopes tidak cukup | Migration `up/down`, CRUD nyata, pivot, eager loading terukur, pagination/filter, transaction untuk perubahan majemuk, basic index/cast/scope. Data layer harus benar sebelum form/auth. |
| Form & Validasi | Form Request hanya generator; custom message, MIME/size upload, method spoofing, XSS tidak lengkap | Form Request dipakai controller; valid/invalid/old input; upload privat/publik eksplisit; Blade escaping vs `{!! !!}`; CSRF harus berada pada form target. |
| Auth & Otorisasi | Session fixation, remember/logout, password reset, email verification, ownership test dangkal | Regenerate session pada login sukses, logout/invalidate token/session, verified middleware, policy pemilik vs user lain, hash password. Security tidak boleh berhenti pada scaffolding. |
| REST API | SPA cookie vs token, 401 vs 403 vs 422, filter/sort allowlist, CORS, token revoke dangkal | Buat kontrak response/error konsisten, Resource, pagination/filter/sort aman, auth mode sesuai klien, CORS konkret. API perlu contract yang dapat diuji. |
| Fitur Produksi | Banyak tugas hanya generator/install; cache data dan invalidasi tidak dipakai | Siklus definisi → dispatch/use → observe → failure untuk job, schedule, cache, notification, event, log. Jelaskan retry/idempotency, failed job, config/route cache, health/log basics. |
| Testing | Setup Pest/TestCase/DB tidak lengkap; coverage menggantikan strategi; authorization ownership belum nyata | Test happy path, invalid input, guest, authenticated non-owner, database unchanged, fake matched/unmatched. Test harus membunuh bug, bukan hanya menaikkan persentase. |

Best practice lintas modul yang wajib muncul sebelum track dinyatakan
production-ready: secrets di `.env` tetapi dibaca melalui `config()` pada kode
aplikasi, mass-assignment bukan pengganti validation/authorization, password selalu
di-hash, output Blade di-escape, query N+1 dicegah dan dibuktikan, operasi majemuk
memakai transaction saat perlu, serta error/log produksi tidak membocorkan rahasia.

## 4. Learning path yang direkomendasikan

Pertahankan slug, ID lama, progres tersimpan, dan urutan 10 modul yang sudah ada.
Perbaikannya terutama pada urutan kompetensi di dalam modul dan benang merah proyek.

1. **Persiapan & Instalasi:** runtime → Composer → proyek → struktur folder → server.
2. **PHP Dasar:** variabel/tipe → kondisi/loop → array → fungsi/return → request PHP.
3. **PHP OOP & Composer:** object → visibility → composition/inheritance → kontrak →
   namespace/PSR-4 → dependency injection sederhana.
4. **Laravel Fundamental:** request lifecycle → route → middleware → controller → DI
   service container → response/redirect/flash → Blade layout/component.
5. **Eloquent & Database:** schema → model/cast → CRUD → relation/pivot → eager loading
   → pagination/query → transaction.
6. **Form & Validasi:** form/CSRF/method spoofing → Form Request → old input/error →
   persistence aman → upload → XSS/error handling.
7. **Auth & Otorisasi:** hashing/session → login/logout → middleware → Policy/Gate →
   ownership → reset/verification.
8. **REST API:** HTTP contract/status → validation 422 → Resource → pagination/filter/
   sort → Sanctum sesuai tipe klien → CORS/rate limit → dokumentasi.
9. **Fitur Produksi:** queue/retry/idempotency → scheduler → cache/invalidation → event/
   notification → logging/observability → deployment checklist.
10. **Testing dengan Pest:** sebenarnya testing kecil diperkenalkan sejak modul 4,
    lalu modul ini menyatukan strategi feature/database/auth/external-service test.

Gunakan satu proyek benang merah—misalnya katalog atau artikel—dengan checkpoint kecil.
Setiap item tetap harus bisa dibuka langsung: tulis data awal, dependensi, lokasi berkas,
dan rujukan checkpoint yang dibutuhkan. Jangan memakai variabel/model/route “hantu”.

## 5. Aturan implementasi worker

1. Baca penuh `AGENTS.md`, `panduan_isi.md` terutama 2b/2c, `perintah_kuli.md`,
   `perintah-laravel-review-2026-09-15.md`, dan source Laravel saat ini.
2. Cek `git status --short`; jangan menimpa perubahan pengguna. Cek Graphify terlebih
   dahulu. Jika graph masih hilang, laporkan kondisi itu dan bangun/perbarui graph
   sesuai tooling repo sebelum penelusuran arsitektur lanjutan.
3. Gunakan Laravel 12.x sebagai baseline konsisten kecuali ada keputusan versi yang
   dibuktikan. Pin PHP, Composer, Laravel, Breeze, Sanctum, dan Pest pada fixture;
   jangan menyebut “terbaru”. Gunakan dokumentasi primer Laravel/PHP.
4. Jangan menghapus modul, `topics`, step, kuis, slug, atau ID lama. Item boleh
   ditambah dan isi boleh diperbaiki. Jika ID harus diganti, sediakan migrasi/alias
   dan uji progres lama.
5. Semua PHP, Blade, Artisan, shell, dan Pest tetap `language: "text"`. Setiap step
   harus jujur bahwa panel tidak menjalankan runtime tersebut dan memberi cara
   praktik lokal yang jelas.
6. Setiap fitur besar harus menyelesaikan siklus penggunaan, bukan hanya
   `make:*`/install. Definition/generator adalah setup; kompetensinya adalah memakai,
   mengamati hasil, dan mendiagnosis kegagalan.
7. Sebelum mengubah validator, tulis kontrak kemampuan dan bentuk yang bebas. Uji
   melalui `jalankanTes`: solution, minimal dua variasi benar, salah hampir benar,
   komentar/string pengecoh, lokasi salah, kosong, dan sintaks rusak.
8. Jangan menambal hanya 16 fixture. Audit seluruh step lama dan baru. Jangan mengubah
   expected atau mempersempit instruksi agar bug penilai terlihat hijau.
9. `example.code` harus berbeda dari solution dan `example.output` harus berasal dari
   eksekusi/fixture deterministik. Pisahkan output aktual dari ilustrasi konseptual.
10. Setiap modul tetap memiliki total 5–7 soal pilihan-ganda. Ubah kuis hafalan menjadi
    diagnosis bug, prediksi perilaku, dan keputusan kerja dengan distraktor realistis.

## 6. Acceptance criteria

### Audit kontrak

- Seluruh 16 baseline mismatch sudah diperbaiki tanpa menghapus fixture.
- Ada kasus tambahan di luar baseline untuk setiap validator yang berubah.
- CSRF dibuktikan berada pada form target; auth pada route target; validasi pada field
  target; Policy pada actor/resource target; statement tidak boleh “lulus” dari
  komentar, string, scope lain, atau kode setelah `return`.
- Variasi sintaks yang setara tetap diterima, termasuk urutan rules, bentuk array,
  operator query eksplisit, array eager-load, dan bentuk callback sah.

### Bukti runtime dan UI

- Sediakan fixture PHP/Laravel terisolasi, version-pinned, lockfile, README reproduksi,
  dan raw output. Jangan memakai kredensial/database nyata.
- Buktikan PHP dasar, request/validation, migration/Eloquent, CSRF, auth/Policy,
  Sanctum, storage, queue/schedule/cache, serta Pest pada runtime sebenarnya.
- Sisipkan kembali bug sasaran dan pastikan test gagal; test yang tetap hijau tidak
  membuktikan perbaikannya.
- Uji halaman lokal pada mode mengetik dan susun kode untuk persiapan, PHP dasar,
  CSRF, auth, API, dan testing. Catat URL serta hasil aktual.

### Command wajib sebelum selesai

```bash
npx tsx scripts/audit-laravel-learning.ts --check
npm run verify:konten
npx tsc --noEmit && npx eslint src
npx eslint scripts/audit-laravel-learning.ts
npm run build
uv run --with graphifyy graphify update
```

Jika evaluator bersama berubah, jalankan audit/regresi track lain yang relevan,
termasuk React/Next.js dan Business English. Bedakan kegagalan baseline dari regresi
baru; jangan mengubah fixture track lain untuk memalsukan hasil.

### Laporan serah-terima

Buat `review-laravel-perbaikan-2026-09-24.md` berisi:

1. file yang diubah dan perubahan pengguna yang dipertahankan;
2. status 16 mismatch, temuan teknis T1–T9 dari audit 15 September, dan seluruh gap
   pada dokumen ini;
3. matriks semua `topics → item → kompetensi → bukti`;
4. jumlah materi, step, dan soal sebelum/sesudah per modul;
5. versi fixture, command reproduksi, raw output runtime, hasil kedua mode UI;
6. command verifikasi, exit code, serta keterbatasan yang masih ada.

Jangan menulis “tanpa kesalahan”, “siap kerja”, atau “production-ready” hanya karena
verifier, TypeScript, lint, atau build hijau.

## 7. Referensi primer minimum

- Laravel 12 Installation: https://laravel.com/docs/12.x/installation
- Request Lifecycle: https://laravel.com/docs/12.x/lifecycle
- Service Container / DI: https://laravel.com/docs/12.x/container
- Validation dan Form Request: https://laravel.com/docs/12.x/validation
- CSRF: https://laravel.com/docs/12.x/csrf
- Authorization: https://laravel.com/docs/12.x/authorization
- Eloquent Relationships: https://laravel.com/docs/12.x/eloquent-relationships
- Mass Assignment: https://laravel.com/docs/12.x/eloquent#mass-assignment
- Sanctum: https://laravel.com/docs/12.x/sanctum
- Testing: https://laravel.com/docs/12.x/testing
- PHP Language Reference: https://www.php.net/manual/en/langref.php

## 8. Prompt siap tempel untuk worker

```text
Perbaiki track PHP & Laravel BiLearn sampai memenuhi kontrak pembelajaran dan
pengujian di perintah-laravel-worker-2026-09-24.md. Ini tugas implementasi end-to-end,
bukan sekadar membuat rencana, menambah paragraf, atau menulis laporan audit baru.

Sebelum mengedit, baca penuh AGENTS.md, panduan_isi.md terutama bagian 2b/2c,
perintah_kuli.md, perintah-laravel-review-2026-09-15.md, dokumen perintah terbaru ini,
dan src/data/tracks/laravel.ts. Cek git status dan Graphify; pertahankan perubahan
pengguna. Gunakan dokumentasi primer serta baseline Laravel 12.x yang version-pinned.

Reproduksi baseline:
  npm run verify:konten
  npx tsx scripts/audit-laravel-learning.ts --check

Verifier saat audit hijau, tetapi audit Laravel menemukan 16 penilaian yang tidak
sesuai kontrak dari 255 kasus. Jangan menghapus fixture, mengubah expected,
mempersempit instruksi, atau sekadar menambah sinonim regex. Tulis kontrak setiap
latihan yang diubah, perbaiki pemeriksaan makna/scope melalui jalankanTes produksi,
dan tambah matriks solution, minimal dua variasi benar, hampir benar, komentar/string
pengecoh, lokasi salah, kosong, serta sintaks rusak. Audit seluruh step lama dan baru,
bukan hanya 16 contoh merah.

Perbaiki scaffolding dari sudut pandang pemula: tambah latihan nyata pada modul
instalasi; ajarkan fungsi PHP sebelum OOP; bangun satu vertical slice request
lifecycle/MVC; ajarkan dependency injection/service container; lengkapi migration,
CRUD, relationship dan N+1; pisahkan retrieval, validation, authorization, CSRF/XSS;
uji Policy dengan owner vs non-owner; bedakan Sanctum cookie SPA dan bearer token;
ubah generator-only task menjadi siklus penggunaan; dan bangun test yang membunuh
bug. Pertahankan slug, ID, topics, dan progres lama. Semua PHP/Blade/Artisan/Pest tetap
language text dan harus punya prosedur praktik lokal yang jujur.

Buktikan example.output dan konsep pada fixture PHP/Laravel terisolasi dengan versi
terkunci, lockfile, README, dan raw output. Build Next.js atau regex hijau bukan bukti
runtime PHP/Laravel. Uji mode mengetik serta susun kode pada halaman lokal, dan uji
regresi track lain bila evaluator shared berubah.

Jalankan semua command acceptance dalam dokumen, termasuk build dan graphify update.
Buat review-laravel-perbaikan-2026-09-24.md dengan status setiap temuan, matriks topics,
jumlah item sebelum/sesudah, command + exit code, bukti runtime/UI, dan keterbatasan.
Jangan menyatakan selesai bila audit kontrak masih merah, verifier pada bagian yang
dikerjakan gagal, output belum dibuktikan, atau bukti UI/runtime penting belum ada.
```
