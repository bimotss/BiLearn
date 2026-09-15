# Perintah worker: perbaikan pembelajaran PHP & Laravel

Tanggal audit: 15 September 2026. Sumber utama: `src/data/tracks/laravel.ts` pada working tree lokal, HEAD `8c98b41`. Ini **hasil audit dan kontrak perbaikan**, bukan laporan bahwa track sudah diperbaiki.

## 1. Kesimpulan untuk pemilik produk

**Sebagai pemula:** saya mendapat contoh dan penjelasan jebakan yang cukup membantu, tetapi belum memperoleh jalur praktik yang utuh. Persiapan berakhir pada kuis tanpa latihan. Saya kemudian bertemu constructor, callback, dan `return` sebelum fungsi PHP diajarkan dengan memadai. Beberapa jawaban sah saya ditolak; sebaliknya kode yang tidak melindungi route bisa dinilai lulus. Ini bisa membuat saya menyalahkan pemahaman sendiri atau percaya bahwa kode rusak sudah benar.

**Sebagai reviewer profesional:** struktur konten cukup rapi, tetapi akurasi contoh, cakupan silabus, dan kontrak validator belum cukup andal. Fitur keamanan harus diuji pada request dan pengguna yang tepat. Membuat berkas Policy/Job/Resource bukan bukti bisa menerapkan otorisasi, antrean, atau transformasi JSON. Perbaikan prioritas adalah makna latihan dan hasil yang dapat dibuktikan, bukan menambah paragraf generik.

Yang sudah baik dan perlu dipertahankan: setiap modul mempunyai materi pembuka, contoh membahas banyak jebakan, seluruh 59 step memakai `language: "text"`, seluruh step mempunyai mode susun kode, dan setiap modul mempunyai 5 soal pilihan-ganda. Banyak catatan sudah jujur bahwa PHP tidak berjalan di preview.

### Baseline terukur

| Modul (slug) | Materi | Step | Soal kuis |
|---|---:|---:|---:|
| persiapan-instalasi | 1 | 0 | 5 |
| php-dasar | 1 | 7 | 5 |
| php-oop | 1 | 7 | 5 |
| laravel-fundamental | 1 | 7 | 5 |
| eloquent | 1 | 7 | 5 |
| form-validasi | 1 | 6 | 5 |
| auth-otorisasi | 1 | 6 | 5 |
| api | 1 | 7 | 5 |
| fitur-produksi | 1 | 6 | 5 |
| testing-laravel | 1 | 6 | 5 |
| **Total** | **10** | **59** | **50** |

Audit baru `scripts/audit-laravel-learning.ts` menjalankan evaluator produksi `jalankanTes`, termasuk penggabung keping `gabungPotongan`. Baseline: **255 kasus, 16 tidak sesuai kontrak**. Rinciannya: 236 pemeriksaan solution/starter/kosong/susunan benar untuk 59 step semuanya sesuai; 19 kasus tambahan menghasilkan **5 variasi sah ditolak, 11 jawaban salah diterima, 3 kontrol sesuai**. Angka ini bukan jumlah seluruh bug dalam track.

## 2. Orientasi wajib sebelum worker mengedit

1. Baca `AGENTS.md`, seluruh `panduan_isi.md` terutama **2b, 2c, 4c, 5, 6, 9**, serta `perintah_kuli.md`. Pelajari contoh kualitas `javascript.ts` dan modul 4 `git.ts`.
2. Periksa `git status --short` dan diff. Saat audit sudah ada perubahan pengguna pada React, Next.js, evaluator, types, dan dokumen lain. **Jangan reset, checkout, menimpa, atau mengklaim perubahan tersebut sebagai hasilmu.**
3. Baca `graphify-out/graph.json` dan `graphify-out/GRAPH_REPORT.md`, lalu query sebelum menelusuri alur. Graph audit menghubungkan track → index/types → `StepView.tsx` / `StepSusunKodeView.tsx` → `jalankanTes`, serta verifier dan laporan lama.

   ```bash
   uv run --with graphifyy graphify query "Bagaimana track PHP Laravel dinilai pada mode mengetik dan susun kode?"
   ```

4. Baca track saat ini dari awal sampai akhir, termasuk kuis, pengecoh, starter, dan output; jalankan audit baseline sebelum mengubah apa pun.
5. Perlakukan `review-laravel-pemula.md` dan `review-laravel-perbaikan.md` sebagai riwayat. Laporan Juli menyebut keterbatasan runtime dan menunda bab request/response. Itu bukan alasan untuk membiarkan bab tersebut kosong sekarang.
6. Fokus perubahan: konten Laravel, audit/fixture pendukung, dan evaluator hanya bila diperlukan untuk memenuhi kontrak. Baca panduan Next.js terpasang di `node_modules/next/dist/docs/` sebelum mengubah kode aplikasi Next.js. Jangan sekalian merombak track lain.

### Keputusan versi sebelum menulis contoh

Repo ini aplikasi pembelajaran Next.js, **bukan proyek Laravel yang menyediakan `composer.lock`**. Konten mencampur acuan Laravel 11/12, Breeze, serta perintah `composer create-project` tanpa batas versi.

Gunakan **Laravel 12.x sebagai baseline perbaikan yang konsisten dengan riwayat track**, pin versi proyek fixture dan paket yang benar-benar berhasil diuji, lalu tulis versi PHP, Composer, Laravel, Breeze, Sanctum, dan Pest yang dipakai. Jangan menyebutnya versi terbaru. Jika memilih major lain, jelaskan alasannya dan audit ulang kompatibilitas seluruh track. Jangan menganggap instalasi tanpa constraint mereproduksi contoh lama.

Sediakan satu jalur utama instalasi yang dapat diikuti; alternatif OS tetap dijelaskan. Tulis lokasi terminal, root proyek, berkas yang diedit, cara menjalankan PHP murni, cara menghentikan server, dan hasil pemeriksaan versi. Jelaskan dependensi Node/Vite saat mulai memakai frontend Breeze; jangan membiarkan pembaca baru mengetahui kebutuhannya ketika instalasi gagal. Rujukan: [instalasi Laravel 12](https://laravel.com/docs/12.x/installation).

## 3. P1 — validator memberi penilaian yang keliru

**P1 berarti wajib diperbaiki sebelum track dinyatakan layak.** Kode lengkap, expected, dan reproduksi berada di skrip audit, bukan hanya tabel ini.

```bash
npx tsx scripts/audit-laravel-learning.ts --check
```

Baseline command tersebut **exit 1**, sengaja mengungkap bug konten saat ini. Jangan membuatnya exit 0 tanpa memperbaiki perilakunya.

| Item | Bukti yang direproduksi | Kriteria perbaikan |
|---|---|---|
| laravel-1-1 | `echo 'Halo $name';` lulus padahal mencetak nama variabel literal | Bedakan interpolasi petik ganda dan teks literal; hasil sapaan harus memakai nilai variabel |
| laravel-1-1 | `$NAME = 'Bimo'; echo 'Halo ' . $name;` lulus | Binding variabel PHP harus peka kapital; jangan menerapkan flag `i` membabi buta |
| laravel-1-3 | Loop kosong, lalu `echo $item` di luar loop lulus | Cetak harus berada di badan loop dan memakai binding elemen loop |
| laravel-1-5 | `require_once __DIR__ . '/helper.php';` ditolak | Terima jalur sah yang memuat helper yang sama sesuai konteks berkas |
| laravel-1-7 | Fallback dengan `isset(...) ? ... : 1` ditolak | Kontrak meminta fallback tanpa warning, tidak mengharuskan `??`; jangan mempersempit soal sesudah menemukan variasi ini |
| laravel-3-1 | `/contact` menjawab salah, `/other` menjawab `Kontak Kami`; tetap lulus | Periksa respons callback milik route `/contact` |
| laravel-4-4 | `where('status', '=', 'active')->paginate(15)` ditolak | Terima operator eksplisit yang setara |
| laravel-4-6 | `with(['category'])->get()` ditolak | Terima array relasi yang sah |
| laravel-4-7 | `factory()->count(100)->create()` ditolak | Nilai jumlah dan penyimpanan yang benar harus diterima |
| laravel-5-1 | `{{-- @csrf --}}` lulus | Komentar Blade tidak membuat input token |
| laravel-5-1 | Form login tanpa token, token berada pada form kedua; lulus | Token harus berada dalam form login yang ditargetkan |
| laravel-5-2 | `'age' => ['numeric']` lulus tanpa `required` | Kedua aturan harus berlaku pada age dalam pemanggilan validasi yang benar |
| laravel-5-6 | `$fillable = ['title', 'content', 'is_admin']` lulus | Kontrak berbunyi **hanya** title/content; kolom ekstra harus ditolak |
| laravel-6-2 | `regenerate()` berada setelah blok kondisi sukses yang kosong; lulus | Sesuai instruksi, regenerasi harus terjadi di cabang autentikasi sukses |
| laravel-6-3 | Grup auth kosong, `/profile` ada di luar grup; lulus | Route target harus benar-benar berada dalam perlindungan auth |
| laravel-9-5 | `Http::response([], 500)` lulus | Respons fake untuk URL target harus menghasilkan 200 sesuai kontrak |

Tiga kontrol positif tambahan: `echo ('Halo ' . $name)`, array aturan validasi lengkap dengan urutan terbalik, serta `Http::response([])` dengan default 200 sudah diterima. Jangan merusaknya saat memperketat pemeriksaan.

API setara dapat dirujuk pada [query builder](https://laravel.com/docs/12.x/queries), [eager loading](https://laravel.com/docs/12.x/eloquent-relationships), dan [factory](https://laravel.com/docs/12.x/eloquent-factories).

### Cara memperbaiki tanpa mengulang kesalahan worker

- Tuliskan kontrak setiap step dahulu: input, kemampuan, konteks, hasil yang wajib, serta bentuk penulisan yang bebas. Contoh jawaban bukan satu-satunya bentuk benar.
- Regex global yang terpisah tidak membuktikan hubungan route–callback, form–token, field–rules, atau kondisi–statement. Gunakan parser/struktur yang sesuai atau pemeriksaan semantik terbatas yang terbukti memadai. Jangan mengganti satu regex raksasa dengan regex raksasa lain lalu berhenti di fixture.
- Perlakukan PHP, Blade, dan shell sebagai bahasa berbeda. Penghapus komentar JavaScript saat ini tidak otomatis memahami `#`, komentar Blade, heredoc/nowdoc, dan seluruh aturan PHP. Jangan mengaktifkan `stripComments` untuk semuanya tanpa pengujian.
- Jangan mengeksekusi input pengguna sembarang pada mesin/server produksi. Parser lokal atau fixture runtime terisolasi untuk pengujian worker tidak sama dengan runner aman untuk editor publik.
- Uji sedikitnya: solution, dua variasi sah berbeda, hampir benar, komentar/string pengecoh, lokasi salah, kosong, sintaks rusak. Tambahkan kasus variabel dipakai sebelum terisi, statement setelah `return`, dan aturan di objek yang berbeda jika relevan.
- Seluruh validator yang diubah harus dinilai lewat `jalankanTes`; jangan menyalin evaluator ke skrip tes. Jika evaluator bersama berubah, periksa kedua mode, verifier, dan regresi track lain yang terdampak.
- Jangan menyamakan sintaks error dengan potongan yang sengaja tidak berupa berkas utuh: wrapper, namespace, import, dan konteks method harus dinyatakan agar penilaian adil.
- Pertahankan expected dan seluruh fixture baseline. Perubahan kontrak harus mempunyai alasan pedagogis/sumber resmi, bukan demi menghapus kegagalan.

## 4. P1 — contoh dan penjelasan teknis yang perlu dibetulkan

Temuan berikut berasal dari pembacaan sumber dan pencocokan dokumentasi. **Belum diuji pada runtime PHP/Laravel dalam audit ini**, sehingga worker wajib menghasilkan bukti runtime yang diminta.

### T1. Dua request berbeda disamarkan menjadi satu program

**Item:** `laravel-1-4`, `laravel-1-7`.

Komentar mengubah URL dari ada parameter menjadi tanpa parameter/kosong, tetapi tidak mengubah `$_GET`. Satu eksekusi tidak mempunyai dua query string hanya karena ada komentar baru. Output `Mencari: kopi` lalu warning pada pembacaan key yang sama tidak dibuktikan oleh kode itu. Begitu juga `Guest`, `[]`, `Guest` pada satu request tanpa perubahan data.

**Perbaikan:** pisahkan menjadi dua eksekusi berlabel URL dengan output masing-masing, atau buat fixture PHP CLI yang secara eksplisit mengisi ulang `$_GET`. Jangan menyebut manipulasi fixture sebagai perilaku browser otomatis. Rekam stdout/stderr dan konfigurasi error; jangan mengarang path, nomor baris, dan baris baru. Rujukan: [variabel eksternal PHP](https://www.php.net/manual/en/language.variables.external.php).

### T2. Policy mencontohkan Request yang tidak menyediakan validated()

**Item:** `laravel-6-4`, contoh `update(Request $request, Post $post)`.

Kode memanggil `$request->validated()` pada `Request` biasa, padahal method tersebut disediakan Form Request/validator. Contoh juga mengklaim redirect 302 tanpa statement return redirect. Pembuatan Policy lewat Artisan saja tidak membuktikan pemanggilan atau proteksinya.

**Perbaikan:** sediakan Form Request konkret beserta rules/authorize, atau gunakan hasil `$request->validate(...)`; lengkapi namespace/import, policy registration/discovery, route binding, database, dan respons eksplisit. Uji pemilik boleh mengubah, pengguna lain 403 dan data tetap, serta input tidak sah tidak tersimpan. Rujukan: [validated input](https://laravel.com/docs/12.x/validation#working-with-validated-input).

### T3. Penjelasan keamanan terlalu mutlak

**Item:** `laravel-1-m1`, `laravel-1-4`, `laravel-5-4`, `laravel-7-m1`, `laravel-7-3`.

- Analogi POST sebagai amplop yang menjaga kerahasiaan berpotensi mengajarkan bahwa metode HTTP adalah enkripsi. Ajarkan bahwa body tidak tampil di URL; perlindungan saat transit memerlukan HTTPS. Semua input tetap tidak tepercaya.
- `Request::input()` mengambil input; pemanggilannya sendiri tidak menerapkan seluruh validasi bisnis atau menjamin sanitasi/XSS. Bedakan retrieval, validasi, output escaping, dan authorization. Rujukan: [HTTP Request](https://laravel.com/docs/12.x/requests) dan [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST).
- Upload memakai disk eksplisit `'public'`, tetapi penjelasan menyatakan pemindahan ke S3 cukup mengubah `.env`. Disk hardcoded tidak otomatis mengikuti default disk baru. Latihan harus menyatakan apakah dokumen memang publik, serta mengajarkan pemeriksaan file/ukuran sebelum menyimpan. Jangan membuat pemula menganggap semua dokumen pengajuan aman dibuka umum.
- Materi API mengesankan Sanctum hanya bearer token, padahal silabus juga menyebut SPA. Ajarkan session cookie + CSRF untuk first-party SPA serta bearer token untuk mobile/klien yang sesuai. Lengkapi prasyarat `HasApiTokens`, instalasi API/migration, route `auth:sanctum`, dan pencabutan token. Rujukan: [Sanctum](https://laravel.com/docs/12.x/sanctum).

**Bukti penerimaan:** latihan dapat membedakan input dibaca vs valid, pengguna login vs berhak, file tersimpan vs boleh dipublikasikan, dan token mobile vs session SPA.

### T4. Mass assignment dijelaskan terlalu sederhana dan bertentangan

**Item:** `laravel-4-3`, `laravel-5-6`.

Contoh `4-3` mengatakan price tidak fillable langsung menimbulkan exception; `5-6` mengatakan field ekstra diam-diam diabaikan. Perilaku bergantung pada konfigurasi model dan mode pencegahan pembuangan atribut. Jangan menyatakan salah satunya berlaku untuk semua model.

**Perbaikan:** buat fixture eksplisit: model totally guarded; model whitelist yang membuang atribut ekstra pada mode biasa; dan mode `preventSilentlyDiscardingAttributes`. Catat atribut tersimpan dan exception yang benar. Ajarkan bahwa whitelist bukan pengganti validasi/authorization. Rujukan: [mass assignment](https://laravel.com/docs/12.x/eloquent#mass-assignment).

### T5. Scheduler hourly diklaim berjalan di menit yang salah

**Item:** `laravel-8-2`.

`reports:build->hourly()` ditampilkan sebagai cron `0 * * * *`, tetapi output `schedule:run` pukul **09:15** mengklaim job tersebut berjalan. Ini bertentangan dengan jadwal di contoh.

**Perbaikan:** uji dengan waktu/timezone terkontrol: 09:00 jatuh tempo; 09:15 tidak. Pisahkan kode PHP di `routes/console.php` dari baris crontab OS. Pastikan command kustom memang disediakan. Rujukan: [scheduler](https://laravel.com/docs/12.x/scheduling).

### T6. Default queue dan efek cache belum akurat

**Item:** `laravel-8-m1`, `laravel-3-7`, `laravel-8-3`.

Materi menyebut default `QUEUE_CONNECTION=sync`; skeleton Laravel 12 yang dijadikan acuan memakai `database`. Tetap ajarkan risiko `sync`, tetapi jangan keliru menyebut default versi. `env()` setelah config cache juga tidak **selalu** null: environment tingkat sistem masih bisa dibaca, dan argumen fallback berpengaruh. Aturan praktik `env` di config dan `config()` di aplikasi sudah baik; perbaiki penjelasan sebab-akibatnya.

**Bukti penerimaan:** konfigurasi queue dicantumkan dan job benar-benar dijalankan worker; uji config cache dengan nilai hanya dari `.env`, lalu environment sistem, serta fallback. Rujukan: [skeleton .env Laravel 12](https://github.com/laravel/laravel/blob/12.x/.env.example) dan [configuration caching](https://laravel.com/docs/12.x/configuration#configuration-caching).

### T7. Command route:list tidak sesuai keluaran yang diajarkan

**Item:** `laravel-6-3`.

Contoh `php artisan route:list --path=dashboard` menampilkan middleware dan catatan menyuruh memeriksa kolom tersebut. Middleware perlu opsi verbose. Gunakan command yang benar-benar menghasilkan bukti itu (`-v`/`-vv`) dan rekam hasilnya. Rujukan: [route listing](https://laravel.com/docs/12.x/routing#listing-your-routes).

### T8. Http::fake(pattern) bukan jaminan seluruh jaringan terblokir

**Item:** `laravel-9-5`.

Penjelasan menyatakan setiap panggilan dicegat dan jaringan tidak pernah tersentuh. Mapping wildcard hanya mencakup URL yang cocok, dan bukan seluruh library HTTP di PHP. Ajarkan cakupan Laravel HTTP client serta `preventStrayRequests()` untuk mendeteksi request tidak terpetakan. Uji status 200/500, URL cocok/tidak cocok, dan bahwa kode aplikasi memang memanggil fake. Rujukan: [HTTP client testing](https://laravel.com/docs/12.x/http-client#testing).

### T9. Output mencampur rekaman, ilustrasi, dan angka tanpa fixture

**Contoh sasaran:** `laravel-4-3`, `4-4`, `5-4`, `6-2`, `7-3`, `7-5`, `7-6`, `8-1`, `8-3`, `8-4`, `8-5`, `8-6`, `9-1`, `9-5`, `9-6`.

Ada ID data, waktu, token, SQL log, benchmark, dan persentase coverage yang tidak dapat direproduksi dari kode contoh saja. Misalnya `8-1` menyatakan 3.4 s vs 0.12 s tanpa fixture pengukuran; `8-5` menampilkan log event yang tidak dicetak oleh kode; `7-5` menampilkan dua data di halaman kedua dengan total 43/per-page 10 tanpa label potongan, sementara metadata/payload juga dipangkas.

**Perbaikan:**

1. Audit seluruh 59 contoh. Buat tabel `item → lingkungan/file/input → cara menjalankan → output → bukti`.
2. Isi `example.output` dengan hasil yang benar-benar dihasilkan kode/command. Konfigurasi dan fixture yang diperlukan harus tersedia.
3. Pisahkan ilustrasi konseptual ke penjelasan/note. Untuk output dipotong, tandai **cuplikan** dan simpan raw log penuh; jangan membuat JSON terpotong seolah payload lengkap.
4. Jangan menambah command hanya di output tanpa menjelaskan bahwa itu langkah observasi terpisah. Jangan menyertakan angka benchmark sebagai hasil universal.
5. Jangan mengganti angka karangan dengan output karangan lain. Untuk hasil acak, sediakan fixture deterministik atau tandai bagian dinamis beserta hasil eksekusi yang menjadi sumbernya.

## 5. P1/P2 — tutup gap belajar, bukan sekadar gap jumlah karakter

Tabel berikut adalah temuan prioritas hasil pembacaan, **bukan sertifikasi bahwa topik lain sudah mendalam**. Worker wajib membuat matriks setiap entri `topics` ke materi/step/kuis pada modul yang sama. Menyebut kata pada error, distraktor, atau satu kalimat motivasi tidak dihitung mengajarkan konsep.

| Modul | Hambatan pemula / bukti lokal | Perbaikan yang harus terlihat |
|---|---|---|
| Persiapan | 0 step; belum ada latihan membuktikan file PHP berjalan atau mendiagnosis root proyek | Tambahkan latihan skenario versi/PATH/root proyek dan menjalankan PHP pertama; panduan lokal benar-benar bisa diikuti |
| PHP Dasar | Topik fungsi parameter/return/arrow, named arguments, multidimensional array belum diajarkan; OOP langsung memakai function | Ajarkan fungsi biasa sebelum constructor/callback, lalu return, arrow, pemanggilan argumen, array bertingkat dengan contoh dan latihan bertahap |
| OOP & Composer | Kata abstract ditemukan pada output error interface, bukan pengajaran abstract class | Jelaskan abstract class vs interface lewat kasus konkret; pastikan autoload PSR-4 punya mapping composer.json dan entry point yang nyata |
| Laravel Fundamental | Request input/redirect/session flash tidak ada di isi modul; Blade section/komponen juga belum ditunjukkan; generator controller mendominasi praktik controller | Tambahkan alur form → Request → validasi → redirect flash → Blade, serta layout/section/komponen dan resource controller sesuai silabus |
| Eloquent | `delete()` dan `belongsToMany` tidak diajarkan di modul; CRUD latihan hanya mengambil id 5; migration latihan hanya membuat file | Tulis migration up/down nyata, CRUD create/update/delete dengan perubahan data, relasi many-to-many/pivot, dan output database terukur |
| Form & Validasi | Form Request hanya `make:request`; pesan custom belum diajarkan; upload mengasumsikan file siap disimpan | Ajarkan rules/messages/authorize dan pemakaian controller; uji invalid input, old input, serta file invalid |
| Auth & Otorisasi | Remember me/logout semua device belum disentuh; password reset lebih banyak disebut sebagai fasilitas paket; Policy hanya generator | Latihan pemilik vs pengguna lain, logout/session, remember me, alur reset password dan verifikasi dengan prasyarat mail/route jelas |
| REST API | CORS dan sort belum disentuh; filter hanya muncul sebagai penyebutan pada kuis; HasApiTokens tidak dijelaskan | Latihan filter/sort dengan allowlist kolom, SPA cookie vs bearer, CORS konkret, validasi 422 dan akses 401/403 |
| Fitur Produksi | Tidak ada penggunaan Cache facade untuk cache data; 4 dari 6 step meminta generator Job/Mail/Event atau install Telescope | Tugas memakai/dispatch job, menjalankan listener, membaca log dan memperbaiki N+1, cache data + invalidasi; generator boleh menjadi langkah pendukung |
| Testing | Setup `tests/Pest.php` belum dijelaskan; `9-6` berjudul strategi prioritas tetapi tugasnya cuma `--coverage` | Setup Pest/TestCase/DB test eksplisit; tugas memilih/memperbaiki test bisnis, termasuk user B terhadap data user A dan database tidak berubah |

Jangan menyamakan tes anonim diarahkan login (`9-6`) dengan bukti otorisasi kepemilikan. Itu memeriksa autentikasi; pengguna lain yang **sudah login** perlu diuji juga.

### Bentuk latihan yang diharapkan

- Pertahankan struktur modul dan topics; isi gap dalam `items`. Gunakan materi pendahuluan tambahan jika 4–8 step tidak cukup untuk mengajarkan prasyarat; jangan memecah modul atau menghapus topik diam-diam.
- Setiap tugas menyebut lokasi berkas, data awal, dependensi yang sudah tersedia, tindakan yang harus diputuskan, dan hasil teramati. Jangan mengandaikan `Product`, factory, route login, controller, layout, atau kolom database sudah ada hanya karena disebut namanya.
- Bangun benang merah proyek katalog/artikel, dengan checkpoint yang bisa direproduksi. Pembaca yang masuk dari URL langsung tetap mendapat konteks atau rujukan ke setup, bukan variabel hantu.
- Untuk fitur lanjut, ajarkan satu siklus pemakaian: definisi → pemanggilan → pengamatan → kegagalan. Install/generate sendiri belum menyelesaikan siklus.
- Perbaiki instruksi yang membocorkan jawaban: `9-6` sudah menuliskan flag jawaban `--coverage`. Contoh harus berbeda kasus dan tidak menjadi solution tersamar.
- Kuis sekarang banyak berupa definisi/nama command. Revisi menjadi kombinasi prediksi output, diagnosis bug, dan keputusan kerja, tetap **5–7 soal total per modul, seluruhnya pilihan-ganda**. Distraktor seperti komputer restart/GPU/C++ pada kuis persiapan terlalu jauh dari kesalahan nyata.
- Jangan menambah kuis kedua yang membuat total melewati batas. Jelaskan alasan kunci dan alasan distraktor yang masuk akal.
- Kedalaman materi tetap minimal 1200 karakter dengan diagram/tabel, jebakan umum, dan kaitan kerja; panjang ini batas bawah, bukan tujuan. Explanation step tetap 4 kalimat bermakna atau 350 karakter tentang apa/kenapa/kapan/jebakan.
- Seluruh PHP, Blade, command, dan Pest tetap `language: "text"`. Pesan lulus hanya boleh menjelaskan cakupan pemeriksaan yang benar-benar ada, bukan mengaku aplikasi berhasil berjalan.

## 6. Larangan perbaikan semu

1. Jangan hanya menambah sinonim regex sampai 16 fixture hijau. Audit kasus di luar fixture dan seluruh 59 step.
2. Jangan menghapus validator, mengubahnya menjadi pencocokan apa pun, menghapus pengecoh, atau menjadikan starter sudah lulus.
3. Jangan mempersempit instruksi untuk menghindari variasi sah yang ditemukan audit.
4. Jangan menganggap `flags: "i"` benar untuk nama variabel PHP, key array, path, dan nilai literal; bedakan aturan tiap unsur.
5. Jangan menggunakan blacklist kata untuk menggantikan struktur. Kata di komentar/string/form lain bukan tindakan program.
6. Jangan memperbaiki keamanan dengan membuka akses semua pengguna, menghapus middleware, mematikan CSRF, `authorize()` selalu true tanpa konteks, atau `$guarded = []` untuk menyembunyikan error.
7. Jangan menambahkan dependency baru tanpa alasan, versi kompatibel, dan pembuktian pada target runtime. Jangan mengubah API shared secara luas tanpa menguji pemanggilnya.
8. Jangan menghapus/mengganti ID dan slug lama tanpa migrasi URL/progres. Menambah item harus memakai ID unik dan menjaga urutan belajar.
9. Jangan mengklaim pengujian browser/server hanya karena membaca source, membangun Next.js, atau menjalankan regex.
10. Jangan menyebut pekerjaan selesai bila bagian yang dikerjakan masih melanggar verifier, audit kontrak masih gagal, atau bukti runtime penting belum tersedia. Tulis status per temuan dengan jujur.

## 7. Tahapan kerja dan bukti penerimaan

### A. Baseline dan kontrak

- Simpan status/diff awal dan versi tool.
- Jalankan verifier serta audit baru. Catat exit code dan hasil aktual.
- Susun matriks `topics → item → kompetensi → praktik/bukti`; tandai gap.
- Susun kontrak setiap step yang diperbaiki sebelum menyentuh validator.

### B. Perbaikan bertahap

Prioritas: validator keamanan/sapaan → kesalahan runtime/output → fungsi dasar dan setup → gap silabus → praktik fitur dan kuis. Sesudah tiap kelompok, jalankan regresi yang relevan. Jangan menghapus fixture merah untuk berpindah kelompok.

### C. Bukti runtime di proyek fixture terisolasi

Sediakan proyek PHP/Laravel kecil yang version-pinned di lokasi aman, dengan README reproduksi dan lockfile; jangan memakai database atau kredensial proyek nyata. Jika PHP/Composer belum tersedia, siapkan runtime terisolasi yang tersedia atau laporkan hambatan konkret. Jangan mengaku audit runtime selesai dengan simulasi string.

Minimal buktikan:

- PHP: sintaks, interpolasi, loop, fungsi, include/require, match, dan dua skenario request. Pisahkan stdout/stderr serta output sengaja error.
- Laravel: install/API routes, request/form validation, migration/model/factory, Blade token pada form yang benar, auth + policy pemilik vs nonpemilik, Sanctum, file storage.
- Produksi: jadwal jatuh tempo/tidak, dispatch/worker, config cache, cache data, mail/listener dengan fake/log lokal.
- Pest: setup nyata, happy path, invalid input, akses user lain, perubahan database, fake matched/unmatched. Tes harus gagal ketika bug yang ditargetkan disisipkan kembali.

Tidak perlu mengukur benchmark untuk membuktikan konsep queue/cache. Hapus angka yang tidak diperlukan; bila menampilkan pengukuran, simpan prosedur dan data mentahnya.

### D. Verifikasi aplikasi dan kedua mode

```bash
npx tsx scripts/audit-laravel-learning.ts --check
npm run verify:konten
npx tsc --noEmit && npx eslint src
npx eslint scripts/audit-laravel-learning.ts
npm run build
uv run --with graphifyy graphify update
```

Jika evaluator bersama berubah, jalankan juga suite regresi yang sudah ada dan relevan, termasuk audit React/Next dan Business English. Catat kegagalan yang sudah ada sebelum perubahan dan kegagalan baru secara terpisah; jangan menyentuh fixture track lain untuk memalsukan keberhasilan.

Buka halaman lokal modul persiapan, PHP dasar, CSRF, auth, API, dan testing. Uji mengetik serta susun kode: jawaban sah diterima, salah ditolak, feedback membantu, output dan note terbaca, tautan/progres lama tetap dapat dipakai. Pastikan pengecoh bukan jawaban alternatif sah dan mengubah hasil sesuai kontrak. Simpan bukti URL dan hasil aktual; build tidak menggantikan langkah ini.

### E. Format serah-terima wajib

Buat `review-laravel-perbaikan-2026-09-15.md` berisi:

1. Daftar file yang kamu ubah, terpisah dari perubahan yang sudah ada.
2. Status setiap temuan V (tabel validator), T1–T9, dan setiap baris gap modul; sertakan ID/item dan bukti.
3. Matriks cakupan setiap `topics`, bukan hitungan keyword.
4. Jumlah materi/step/soal aktual per modul dan perubahan ID/alias jika ada.
5. Hasil audit kontrak sebelum/sesudah, matriks variasi sah/salah, serta command dan exit code.
6. Versi runtime/dependency, lokasi fixture, raw output, command reproduksi, dan hasil browser kedua mode.
7. Keterbatasan yang masih ada. Jangan menulis “tanpa kesalahan”, “siap kerja”, atau “semua benar” hanya dari verifier/build hijau.

## 8. Batas dan hasil audit pembuat dokumen ini

Audit ini melakukan inventaris seluruh modul, membaca materi dan latihan, memeriksa pola kuis/cakupan serta contoh prioritas, membaca evaluator/UI sumber, menguji kontrak via evaluator produksi, dan mencocokkan klaim teknis dengan dokumentasi primer. Ini simulasi sudut pandang pemula, **bukan penelitian pengguna terhadap pemula sungguhan**.

Hasil command yang benar-benar dijalankan:

| Pemeriksaan | Hasil |
|---|---|
| Query Graphify | exit 0; graph mengarahkan penelusuran file terkait |
| `npm run verify:konten` | exit 0; semua verifikasi lolos, track Laravel 59 step |
| `npx tsx scripts/audit-laravel-learning.ts --check` | exit 1; 255 kasus, 16 tidak sesuai kontrak |
| `npx tsc --noEmit && npx eslint src` | exit 0 |
| `npx eslint scripts/audit-laravel-learning.ts` | exit 0 |
| `npm run build` | exit 0 |

PHP dan Composer tidak ditemukan pada PATH lingkungan audit, sehingga contoh belum dieksekusi pada interpreter/server Laravel. Audit ini juga belum mengoperasikan UI di browser. Dokumen sengaja meminta kedua bukti tersebut dari worker, dan **tidak menyatakan konten sudah diperbaiki**. Perubahan audit hanya dokumen ini serta skrip regresi baru; graph diperbarui setelahnya.

## 9. Prompt siap diberikan kepada worker

```text
Perbaiki track PHP & Laravel di repo BiLearn berdasarkan perintah-laravel-review-2026-09-15.md. Kerjakan implementasinya sampai kriteria penerimaan terpenuhi, bukan sekadar membuat rencana atau laporan.

Baca AGENTS.md, panduan_isi.md terutama 2b/2c, perintah_kuli.md, dan seluruh dokumen audit itu terlebih dahulu. Cek working tree dan Graphify sebelum menelusuri atau mengedit. Pertahankan perubahan pengguna yang sudah ada.

Reproduksi baseline dengan npx tsx scripts/audit-laravel-learning.ts --check: audit awal menemukan 16 hasil penilaian tidak sesuai kontrak dari 255 kasus walaupun verifier/build hijau. Jangan hapus fixture, ubah expected, atau mempersempit instruksi demi membuatnya hijau. Perbaiki makna validator dan perluas matriks variasi benar/salah, termasuk komentar/string, scope salah, binding variabel, kosong, dan sintaks rusak melalui jalankanTes produksi.

Selesaikan temuan teknis T1–T9 dan gap seluruh modul. Ajarkan prasyarat sebelum pemakaian, lengkapi praktik fitur sampai hasilnya terlihat, pertahankan ID/progres, perbaiki kuis, dan buktikan output pada fixture PHP/Laravel dengan versi terkunci. Build Next.js bukan bukti runtime PHP. Uji kedua mode belajar dan efek pada track lain jika evaluator shared berubah.

Jalankan seluruh pemeriksaan wajib dalam dokumen, perbarui Graphify, lalu buat review-laravel-perbaikan-2026-09-15.md dengan status setiap temuan, matriks topics, hasil command/exit code, bukti runtime/browser, dan keterbatasan. Jangan berhenti pada 16 fixture; audit seluruh 59 step yang ada dan item baru. Jangan menyatakan track selesai bila masih ada kegagalan atau bukti penting belum tersedia.
```
