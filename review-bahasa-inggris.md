# Review Konten Berbahasa Inggris — Seluruh 16 Track

Tanggal: 3 Agustus 2026. Cakupan: `src/data/tracks/*.ts` (16 track, 132 materi, 817 step, 128 kuis), `src/app/`, `src/components/`, `src/lib/`.

Cara baca: aku menyisir dulu sebagai pemula total yang tidak bisa bahasa Inggris dan tidak paham coding — setiap potongan Inggris yang muncul kuanggap tembok. Baru setelah itu aku menilai ulang sebagai orang yang sudah 40 tahun menjalankan perkakas ini: mana tembok yang memang harus ada (karena begitulah bunyi terminal aslinya), dan mana yang **salah** sehingga pemula akan membandingkannya dengan layarnya sendiri lalu bingung.

Prinsip yang kupakai untuk memutuskan: **`example.output` adalah janji.** Kalau di situ tertulis sesuatu, pemula berhak melihat teks yang sama persis di terminalnya. Output yang dikarang jauh lebih berbahaya daripada output yang tidak ada, karena pemula akan menyalahkan dirinya sendiri, bukan materinya.

---

## A. Ringkasan hasil pindaian

| Yang dipindai | Potongan Inggris | Bermasalah |
|---|---:|---:|
| Prosa pelajaran (`explanation`, `instruction`, `question`, `body`) | 96 | 0 |
| `example.output` (keluaran terminal) | 18 | **5** |
| `starterCode` / `solution` / `code` | 24 | **1** |
| Teks antarmuka (`src/app`, `src/components`, `src/lib`) | 0 | 0 |
| Kapitalisasi istilah teknis | 197 kandidat | **2** |

**Kesimpulan besar: materinya sehat.** Prosanya 100% Bahasa Indonesia, antarmukanya tidak punya satu pun string Inggris yang tertinggal, dan 96 kemunculan Inggris di badan penjelasan semuanya sah — itu nama fungsi (`for...of`, `enumerate`, `useEffect`), kata kunci bahasa, atau nama paket yang memang tidak boleh diterjemahkan.

Yang rusak justru terpusat di satu tempat sempit: **keluaran terminal palsu**. Delapan temuan, semuanya sudah diperbaiki.

---

## B. Temuan yang diperbaiki

### B1. `node-express.ts` — `tsx --watch` mencetak pesan yang tidak pernah ada

Step `node-1-7` menjanjikan:

```
[tsx] Watching for changes in src/index.ts...
```

**tsx tidak pernah mencetak kalimat itu.** Aku memeriksa langsung isi paket `node_modules/tsx` versi 4.23.1 yang terpasang di proyek ini: string `Watching` tidak ada sama sekali di seluruh `dist/`. Satu-satunya pesan bertanda `[tsx]` yang benar-benar ada adalah `Rerunning...`.

Yang sesungguhnya terjadi: saat start, tsx langsung menjalankan berkasnya — jadi yang muncul pertama adalah keluaran program pemula sendiri. Baris `[tsx] Rerunning...` baru tampil ketika berkas disimpan.

Ini temuan paling merusak dari seluruh review. Pemula menjalankan perintahnya, tidak melihat kalimat yang dijanjikan, lalu menyimpulkan `--watch`-nya gagal — padahal berjalan sempurna.

Sudah diganti dengan urutan yang sebenarnya, plus `note` yang menjelaskan bahwa diamnya terminal saat start itu normal.

### B2. `node-express.ts` — output Prisma kehilangan satu kata penting

Step `node-4-1` menulis `Your database is now in sync with your schema.` Prisma yang asli mencetak **`your Prisma schema`**, dan diakhiri `Done in 51ms`. Ini bukan kesalahan kosmetik: pemula yang mencari kalimat itu di dokumentasi atau Google tidak akan menemukan padanan persisnya. Sudah dilengkapi, termasuk baris `Applying migration` yang mendahuluinya.

### B3. `git.ts` — `git status` dirangkum jadi satu baris yang tidak pernah dicetak Git

Step `git-1-3` menulis `Changes to be committed: index.html`. Aku menjalankan urutan perintahnya sungguhan di repositori kosong; Git mencetak:

```
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   index.html
```

Nama berkas berada di **baris tersendiri**, menjorok, dengan label `new file:`. Merangkumnya jadi satu baris menghapus justru pelajaran terpenting dari step ini: cara membaca tata letak `git status`. Sudah diganti dengan keluaran asli.

### B4. `git.ts` — `git bisect` kehilangan angka yang menjadi inti pelajarannya

Step `git-5-6` menulis `Bisecting: 5 revisions left to test after this...`. Keluaran asli (kuverifikasi dengan menjalankan bisect di repo 12 commit):

```
Bisecting: 5 revisions left to test after this (roughly 3 steps)
[a6a83062c1170cffe017a9a66ce2f5bfb4667d6e] Menambah validasi form checkout
```

Bagian `(roughly 3 steps)` yang dipotong justru **bukti dari seluruh materi ini** — bahwa pencarian biner menyelesaikan 12 commit dalam 3 tebakan. Titik-titik itu membuang argumen terkuat penulisnya sendiri. Sudah dikembalikan, dan `note`-nya kutulis ulang untuk menunjuk angka itu.

### B5. `ai-dev.ts` — output `git stash` terpotong sebelum bagian yang menenangkan

Step `ai-5-6` menulis `Saved working directory and index state WIP on main`. Aslinya berlanjut dengan hash dan pesan commit: `WIP on main: 3f9a1c2 Perbaiki validasi checkout`.

Konteks step ini adalah pemula yang panik setelah lima putaran gagal dan disuruh membuang pekerjaannya. Justru di situ ia paling butuh melihat bahwa Git menyebutkan **dari commit mana** simpanan itu dibuat — itulah bukti pekerjaannya tidak hilang. Sudah dilengkapi, sekalian dengan blok `git status` yang utuh.

### B6. `typescript.ts` — pesan error `tsc` dipatahkan di tengah kalimat

Muncul dua kali (`ts-0-5` pada `example.output` dan pada `starterCode`):

```
error TS2345: Argument of type 'number' is not
assignable to parameter of type 'string'.
```

`tsc` mencetaknya dalam **satu baris**. Ini penting karena `ts-0-5` adalah step yang mengajarkan cara *membaca* pesan error — memotongnya di tengah frasa `is not assignable` merusak pola yang justru sedang diajarkan.

Sekalian kutambahkan bingkai kode dan baris `Found 1 error`, karena itulah yang dilihat pemula di terminal.

**Catatan penghargaan:** aku memverifikasi angka baris dan kolom pada kedua contoh TypeScript dengan menjalankan `tsc` sungguhan. `laporan.ts:2:7`, `index.ts:4:20`, dan `index.ts:8:25` — **ketiganya tepat sampai ke nomor kolom**, termasuk posisi tanda `~~~~~` di bawah token yang salah. Penulisnya jelas tidak mengarang. Itu membuat lima temuan di atas terasa seperti kelalaian kecil, bukan kebiasaan.

### B7. `laravel.ts` & `nextjs.ts` — `NPM` ditulis kapital

npm secara resmi selalu huruf kecil, bahkan di awal kalimat. Dua kemunculan sudah diperbaiki. Sepele, tapi di materi yang mengajar orang membaca nama perkakas, konsistensi itu bagian dari pelajaran.

---

## C. Yang sengaja TIDAK diubah

Supaya tidak ada yang "memperbaiki" ini di ronde berikutnya:

- **Pesan error asli** — `ReferenceError: tidakAda is not defined`, `TypeError: Cannot read properties of null (reading 'nama')`, `error TS2322`. Ini yang akan dilihat pemula di layarnya. Menerjemahkannya akan membuat materi ini justru gagal mengajarkan hal yang paling dibutuhkan: membaca error berbahasa Inggris.
- **Keluaran perkakas** — `Branch 'main' set up to track remote branch 'main' from 'origin'.` (kuverifikasi dengan push sungguhan ke remote lokal — **sama persis**), `Prisma Studio is up on http://localhost:5555`, `./composer.json has been updated`, `added 1 package, and audited 128 packages in 3s`.
- **Kata kunci bahasa** — `for`, `if`, `else if`, `range()`, `enumerate()`, `for...of`.
- **Nama paket, perintah, dan berkas berhuruf kecil** — `git restore`, `package.json`, `routes/api.php`, `docker-compose.yml`, `laravel/breeze`, `@sentry/nextjs`, `/var/lib/mysql`. Pemindai kapitalisasiku menandai 195 di antaranya sebagai kandidat; semuanya **benar apa adanya** dan tidak boleh disentuh.

---

## D. Verifikasi

| Pemeriksaan | Hasil |
|---|---|
| `scripts/verify-konten.ts` | ✅ **SEMUA VERIFIKASI LOLOS** — 132 materi, 817 step, 128 kuis, 676 soal |
| Jumlah step per track | Tidak berubah di 16 track |
| Line ending berkas tersunting | CRLF konsisten, tidak ada campuran |
| Keluaran `git` | Diverifikasi dengan menjalankan `git init/add/status`, `push -u`, `stash`, `bisect` sungguhan |
| Keluaran `tsc` | Diverifikasi dengan `tsc --pretty` pada TypeScript 5.9.3 |
| Keluaran `tsx` | Diverifikasi dengan membaca `node_modules/tsx@4.23.1/dist/` |

Berkas yang disunting: `src/data/tracks/` — `node-express.ts`, `git.ts`, `ai-dev.ts`, `typescript.ts`, `laravel.ts`, `nextjs.ts`.

---

## E. Satu saran untuk ronde berikutnya

Lima dari delapan temuan berbentuk sama: **keluaran terminal yang ditulis dari ingatan, lalu dipendekkan dengan `...`**. Titik-titik itu adalah penanda bahaya — ia muncul persis di tempat penulis tidak yakin.

Aturan yang layak ditambahkan ke `panduan_isi.md`: *setiap `example.output` yang mewakili keluaran perkakas nyata harus disalin dari terminal yang benar-benar dijalankan, dan tidak boleh mengandung `...` sebagai pengganti bagian yang tidak diingat.* Skrip `verify-konten.ts` bisa menegakkan separuhnya secara otomatis — cukup tolak `example.output` yang berisi `...` pada step dengan `language: "text"`.
