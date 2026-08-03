# Review Bahasa Inggris — Sudut Pandang Pemula yang Tidak Bisa Bahasa Inggris

Tanggal: 3 Agustus 2026. Cakupan: 60 blok `example.output` berbahasa Inggris di 8 track.

Cara baca: laporan sebelumnya (`review-bahasa-inggris.md`) memeriksa apakah teks Inggrisnya **benar**. Laporan ini memeriksa hal yang sama sekali berbeda — apakah teks Inggrisnya **bisa dibaca** oleh orang yang tidak bisa bahasa Inggris. Sebuah kalimat bisa 100% akurat dan tetap 100% tidak berguna.

---

## A. Kesalahan cara pandang yang kutemukan pada diriku sendiri

Di ronde sebelumnya aku memperbaiki `example.output` di `ai-dev.ts` step `ai-5-6` supaya sesuai keluaran Git asli. Hasilnya benar — dan **membuat keadaan lebih buruk**. Aku menaikkan jumlah kalimat Inggris di layar dari 4 baris menjadi 6 baris, tanpa menambah satu pun bantuan membacanya. Blok itu bahkan tidak punya `note`.

Itulah jebakan khas orang teknis: mengejar akurasi, lupa keterbacaan. Untuk pemula yang tidak bisa bahasa Inggris, output yang lebih akurat tetapi lebih panjang adalah **tembok yang lebih tinggi**, bukan pelajaran yang lebih baik.

---

## B. Prinsip revisi: jangan terjemahkan, ajarkan

Godaan terbesar adalah menerjemahkan semua pesan error ke Bahasa Indonesia. **Itu keputusan yang salah**, dan aku menolaknya.

Alasannya: terminal di komputer pemula akan tetap berbahasa Inggris seumur hidup kariernya. Kalau materi ini menerjemahkan semuanya, pemula lulus dengan tetap buta huruf di depan layarnya sendiri. Yang kita hilangkan bukan kesulitannya, melainkan kesempatannya belajar.

Jadi teks Inggrisnya **kubiarkan utuh**, dan yang kutambahkan adalah cara membacanya — di `note`, tepat di bawah tempat pemula menemuinya. Tiga aturan yang kupakai:

1. **Bongkar kata per kata, bukan kalimat per kalimat.** Terjemahan bebas hanya membantu satu kali. Arti tiap kata membantu selamanya.
2. **Selalu tunjuk polanya.** `Cannot read` di JavaScript dan `Cannot access` di PHP adalah pola yang sama. Sekali dijelaskan, dua puluh error berikutnya terbaca sendiri.
3. **Jangan pernah mengajar kosakata yang tidak sedang dibutuhkan.** Tidak ada daftar 100 kata untuk dihafal. Kata diajarkan hanya di detik ia muncul.

---

## C. Pola tata bahasa yang sebenarnya dipakai terminal

Ini temuan paling berguna dari seluruh review. Keluaran perkakas terlihat acak, padahal hanya memakai **enam pola** yang berulang terus. Pemula yang menguasai enam ini bisa membaca hampir semua pesan yang akan ia temui:

| Pola | Arti | Ciri | Contoh di materi |
|---|---|---|---|
| Kata kerja + `-ed` di awal baris | Laporan: **sudah terjadi** | Bentuk lampau | `Switched to a new branch`, `Saved working directory`, `Initialized` |
| Kata kerja + `-ing` di awal baris | Laporan: **sedang berjalan** | Bentuk berlangsung | `Requesting a certificate`, `Deploying`, `Applying migration`, `Auto-merging` |
| Kata kerja telanjang tanpa subjek | **Perintah untukmu** | Imperatif | `fix conflicts and then commit the result`, `use "git add"` |
| `Cannot` + kata kerja | Penolakan | Modal negatif | `Cannot read`, `Cannot access`, `Cannot redeclare` |
| `is not` / `un-` + kata | Ketiadaan | Negasi | `is not defined`, `undefined method`, `No such file or directory` |
| `expected A to be B` | Harapan vs kenyataan | Pasangan tetap | `expected { a: 1 } to be { a: 1 }` |

Perbedaan `-ing` dan `-ed` adalah pelajaran dengan hasil terbesar per menit di seluruh daftar ini. Satu aturan, dan pemula langsung bisa memilah mana yang masih berjalan dan mana yang sudah tuntas — di perkakas apa pun, seumur hidup.

Pola ketiga yang paling sering menimbulkan celaka: pemula tidak menyadari bahwa terminal sedang **menyuruhnya bertindak**, karena kalimat perintah bahasa Inggris tidak punya subjek. `fix conflicts and then commit the result` dibacanya sebagai laporan, lalu ia menunggu sesuatu terjadi.

---

## D. Sebelas revisi yang dikerjakan

| Berkas | Step | Tembok yang dibongkar |
|---|---|---|
| `ai-dev.ts` | `ai-4-1` | `Cannot read properties of undefined (reading 'nama')` — sebelumnya **tanpa `note` sama sekali** |
| `ai-dev.ts` | `ai-5-6` | Blok `git status` + `git stash` — tanpa `note`; sekaligus memperbaiki kerusakan yang kubuat sendiri di ronde lalu |
| `git.ts` | `git-2-2` | `Switched to a new branch` → pengenalan pola bentuk lampau |
| `git.ts` | `git-2-5` | `Saved` / `Restored` / `Dropped` → tiga kata berpasangan yang membedakan `pop` dan `apply` |
| `git.ts` | `git-3-1` | `set up to track` → kata kerja majemuk, arti *remote* yang bukan "remot TV" |
| `git.ts` | `git-4-7` | `fix conflicts and then commit the result` → pengenalan kalimat perintah |
| `html.ts` | validasi form | `Please fill out this field`, `greater than or equal to` → **pesan yang dibaca pengunjung situsnya**, bukan cuma dirinya |
| `javascript.ts` | `js-0-1` | `Uncaught` / `Cannot read` / `null` → tiga kata pembuka error JavaScript |
| `javascript.ts` | pengujian | `expected A to be B` → pasangan *expected*/*received* |
| `laravel.ts` | `laravel-1-5` | `Warning` vs `Fatal error`, `No such file or directory` |
| `laravel.ts` | `laravel-2-1` | `Uncaught`, `Cannot access` → disambungkan ke `Cannot read` yang sudah dipelajari di JavaScript |
| `laravel.ts` | `laravel-2-3` | `undefined` → akar kata *define* + awalan *un-* |
| `deployment.ts` | Certbot | `Requesting → received → Deploying → enabled` → aturan `-ing` vs `-ed` |

Sambungan antar-track sengaja dibuat eksplisit. Pemula yang sudah membaca `Cannot read` di JavaScript akan menemukan kalimat "sudah kamu temui sebagai `Cannot read` di JavaScript" saat bertemu `Cannot access` di PHP. Kosakata yang diulang di konteks baru itulah yang benar-benar menempel — sekadar mengulang di konteks yang sama tidak berpengaruh banyak.

---

## E. Yang sengaja dibiarkan berbahasa Inggris

Tidak satu pun teks Inggris yang kuhapus atau kuterjemahkan menggantikan aslinya. Pesan error, keluaran perkakas, dan kata kunci bahasa tetap apa adanya — karena itulah yang akan dilihat pemula di layarnya.

Empat puluh sembilan blok lain tidak kusentuh karena `note`-nya sudah cukup, atau karena teks Inggrisnya sudah dibedah di `explanation`. Contoh yang sudah bagus tanpa perlu kubantu: `typescript.ts` `ts-0-5` sudah menjelaskan pola `"Type X is not assignable to type Y"` beserta cara membacanya, dan `javascript.ts` sudah punya `note` "ReferenceError → variabel/typo, TypeError → nilainya bukan yang kamu duga".

---

## F. Verifikasi

| Pemeriksaan | Hasil |
|---|---|
| `scripts/verify-konten.ts` | ✅ **SEMUA VERIFIKASI LOLOS** — 132 materi, 817 step, 128 kuis, 676 soal |
| Jumlah step per track | Tidak berubah |
| Teks Inggris asli | Utuh, tidak ada yang dihapus atau diterjemahkan menggantikan aslinya |
| Line ending | CRLF konsisten di 6 berkas tersunting |

Berkas yang disunting: `ai-dev.ts`, `git.ts`, `html.ts`, `javascript.ts`, `laravel.ts`, `deployment.ts`.

---

## G. Saran untuk ronde berikutnya

**Satu halaman materi khusus di track HTML modul 1**, berjudul kira-kira "Membaca Bahasa Inggris Komputer". Isinya tabel enam pola di bagian C, ditempatkan sebelum pemula bertemu error pertamanya. Sekarang pengetahuan itu tersebar di sebelas `note` di enam berkas — bekerja saat dibutuhkan, tetapi tidak pernah bisa dibaca sebagai satu kesatuan.

**Aturan baru untuk `panduan_isi.md`**: setiap `example.output` yang memuat kalimat Inggris utuh wajib punya `note` yang menyinggung arti kalimat itu. Dua blok yang kutemukan hari ini sama sekali tidak punya `note` — dan keduanya berisi pesan error, tempat pemula paling panik dan paling butuh pegangan. Skrip `verify-konten.ts` bisa menegakkan ini: tolak `example.output` berisi kalimat Inggris jika `note`-nya kosong.
