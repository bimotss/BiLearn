# Review Mandor Ronde 4 — Pemeriksaan Ulang 16 Track (HTML → Analisis Data)

Tanggal: 28 Juli 2026. Peran: pemeriksaan ulang **seluruh** track setelah 16 laporan review sebelumnya menyatakan semuanya selesai.

Cara kerja: mulai dari `verify:konten`, lalu menulis skrip pemeriksa untuk hal-hal yang **tidak bisa** dilihat skrip resmi (variasi jawaban, eksekusi contoh, keselarasan judul–penjelasan, kejujuran preview), lalu memperbaiki temuannya. Tidak ada temuan yang dilaporkan tanpa angka.

---

## A. Temuan paling serius: laporan yang mengklaim pekerjaan yang tidak ada

`review-git-pemula.md` dibuka dengan **"STATUS: SUDAH DIPERBAIKI (28 Juli 2026)"** dan menyatakan track Git punya "5 modul, 5 materi, 39 step" serta `verify:konten` bersih. Kenyataan di berkas saat pemeriksaan ini dimulai:

| Klaim di laporan | Kondisi nyata `src/data/tracks/git.ts` |
|---|---|
| 5 halaman materi (`git-1-m1` … `git-5-m1`) | **0 materi.** Tidak satu pun ada di berkas. |
| Slug modul 1 = `persiapan-dasar-git` | masih `dasar-git` |
| `git` dikeluarkan dari `instalasiAllowlist` | **sudah** dikeluarkan → justru membuat verifikasi gagal |
| `explanation git-1-2` diperluas jadi 440+ karakter | masih 150 karakter |
| "`verify:konten` bersih" | **8 pelanggaran**, semuanya di track Git |

Jadi yang dikerjakan hanya bagian yang membuat pemeriksaan menjadi lebih ketat (mengeluarkan `git` dari allowlist), sementara isinya tidak pernah ditulis. Pelajarannya: **status di laporan tidak boleh dipercaya tanpa menjalankan skripnya.** Bagian D di bawah menyebutkan angka hasil eksekusi, bukan hasil membaca.

`review-git-pemula.md` sudah diperbaiki agar jujur, dan seluruh isi yang diklaim sekarang benar-benar ada.

---

## B. Temuan struktural yang tidak mungkin ditangkap skrip

### B1. Track SQL: penjelasan bergeser satu step di empat modul

Ini temuan terpenting Ronde 4. Di modul `join`, `agregasi`, `dml`, dan sebagian `desain-skema`, `explanation` membahas topik step **berikutnya**:

| Step | Judul | Isi `explanation` sebelum diperbaiki |
|---|---|---|
| `sql-2-1` | Primary Key vs Foreign Key | INNER JOIN |
| `sql-2-2` | INNER JOIN | **LEFT JOIN** |
| `sql-2-3` | LEFT JOIN & Baris NULL | JOIN tiga tabel |
| `sql-2-4` | JOIN Lebih dari 2 Tabel | alias tabel |
| `sql-2-5` | Self JOIN | anti-join (`LEFT JOIN … IS NULL`) |
| `sql-2-6` | Many-to-Many & Junction Table | Self JOIN |
| `sql-2-7` | Studi Kasus | UNION |
| `sql-3-2` | GROUP BY | `SUM()`/`AVG()` |
| `sql-3-3` | HAVING vs WHERE | GROUP BY |
| `sql-3-4` | Subquery di WHERE | HAVING |
| `sql-3-5` | CTE (WITH) | scalar subquery |
| `sql-3-6` | CASE WHEN | subquery `IN` |
| `sql-3-7` | Window Function | `EXISTS` |
| `sql-4-4` | Transaksi BEGIN/COMMIT | TRUNCATE |
| `sql-4-5` | ACID | BEGIN/COMMIT |
| `sql-4-6` | UPSERT | ROLLBACK |
| `sql-4-7` | RETURNING | `INSERT … SELECT` |
| `sql-5-1` | Normalisasi | PK/FK |
| `sql-5-2` | Denormalisasi | tipe data |
| `sql-5-3` | ERD | NOT NULL/UNIQUE |
| `sql-5-4` | Constraint | ON DELETE CASCADE |

Semua lolos `verify:konten` karena panjangnya memenuhi syarat. Bagi pemula efeknya berat: ia membaca penjelasan LEFT JOIN, lalu diminta menulis INNER JOIN, dan menyimpulkan dirinya yang tidak paham. **21 explanation ditulis ulang** (APA/KENAPA/KAPAN/jebakan), diperiksa satu per satu terhadap judul dan tugasnya.

Pemeriksaan drift ini dijalankan ke 16 track (`audit-lanjutan.ts` bagian 6). Laravel, Node, Deployment, Python, dan Analisis Data **tidak** mengalaminya — drift memang khas track SQL.

### B2. `example.output` SQL: klaim, bukan hasil

Untuk track yang tidak bisa dieksekusi, `example.output` adalah **satu-satunya** cara user melihat hasil (panduan bagian 4c). Di SQL, 27 di antaranya berisi kalimat klaim seperti:

- `sql-2-3`: "Semua user muncul, termasuk user yang belum pernah membuat order."
- `sql-5-2`: "Hasil lebih cepat karena tidak perlu melakukan JOIN ke tabel customers."
- `sql-2-6`: "Tabel perantara berhasil dibuat."

Yang lebih parah, `sql-2-2` menampilkan tabel hasil dengan kolom `id | user_nama | total` padahal query-nya `SELECT orders.id, users.name` — **keluaran yang mustahil muncul dari kodenya**. Ke-27 contoh diganti keluaran psql nyata: tabel hasil dengan `(n rows)`, `INSERT 0 2`, `UPDATE 1`, pesan `ERROR: … violates foreign key constraint`, dan perbandingan `Time:` untuk step index/EXPLAIN.

### B3. Step yang menyuruh "lengkapi" padahal tidak ada yang bisa dilengkapi

12 step SQL punya `solution` berupa **fragmen** (`HAVING COUNT(*) > 5;`, `LEFT JOIN employees m ON …`, `CASE WHEN … END`) sementara `starterCode`-nya hanya berisi komentar `-- Tulis … di sini`. Jadi instruksi "lengkapi klausa JOIN kedua" merujuk pada query yang tidak ada di editor, dan jawaban yang benar bukan SQL yang bisa dijalankan.

Diperbaiki: query pembungkusnya dipindahkan ke `starterCode`, `solution` menjadi query utuh, instruksi diubah menjadi skenario. Contoh `sql-3-5` sekarang: query utama sudah ada di editor dan memanggil CTE bernama `HighSpenders` yang belum dideklarasikan — barulah "lengkapi" punya arti.

### B4. Step yang isinya hafalan, bukan latihan

Tiga step React menuntut user mengetik satu string hafalan, dan pesan tesnya sekaligus membocorkan jawabannya:

| Step | Tugas lama | Diganti menjadi |
|---|---|---|
| `react-0-4` | `const tabName = "Components";` | menulis komponen `App` pertama yang akan terlihat di tab Components DevTools |
| `react-0-6` | `const modernBundler = "Vite";` | menulis `vite.config.ts` minimum (plugin React) + keluaran `npm run dev` yang nyata |
| `react-5-5` | `const devMode = 'strict';` | membungkus `<App />` dengan `<StrictMode>` di `main.tsx` |

`react-0-6` juga satu-satunya pelanggaran `verify:konten` yang tersisa di luar Git (`example.output` = "Vite 50x lebih cepat daripada CRA").

### B5. Instruksi yang memuat jawaban utuh

Lima instruksi menempelkan kode jawabannya sendiri sehingga user hanya perlu menyalin — `next-1-4`, `next-1-5`, `python-3-1`, `python-5-1`, `python-5-4`. Contoh `python-5-4`: *"Tuliskan method __str__ `def __str__(self): return self.name`"*. Semuanya diubah jadi skenario, dan pesan tesnya yang tadinya "Definisikan method __str__ sesuai instruksi" (tidak mengajarkan apa pun) diganti dengan penjelasan letak kesalahan yang mungkin.

### B6. Preview yang tidak mungkin menampilkan hasil, tanpa dikatakan

38 step React/Next dan 32 step Laravel/Node/AI-dev memakai `language: "text"` untuk kode yang nyata (Server Component, PHP, Express). Itu pilihan yang benar — preview tidak bisa menjalankannya — tapi hanya **1 dari 70** yang mengatakannya kepada user. Aturan Ronde 3 mewajibkan kejujuran ini. Sekarang 69 step yang kurang sudah diberi catatan seperti: *"Catatan jujur: panel preview tidak menjalankan PHP … yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."*

Untuk track Git, hal yang sama dijelaskan sekali di halaman materi modul 1, plus penjelasan **di mana** perintah Git sebenarnya ditulis (terminal, bukan editor, bukan panel BiLearn) — kelas temuan yang sama dengan "track HTML tidak pernah menjelaskan di mana kodenya ditulis" pada ronde sebelumnya.

### B7. Tes yang menolak jawaban yang sama-sama benar

Diuji dengan skrip, bukan dibaca:

| Variasi yang diuji | Ditolak sebelum | Ditolak sesudah |
|---|---|---|
| Atribut berpetik tunggal di HTML/CSS (`class='kartu'` — HTML valid) | **39 step** | 0 |
| Urutan atribut HTML ditukar (`<input name=… type=…>`) | 4 step | 0 |
| Urutan atribut JSX ditukar (`<input onChange=… value=… />`) | 4 step | 0 |

92 pattern di `html.ts` dan `css.ts` diperbaiki dari `"..."` menjadi `['\"]` beserta `[^"']`. Empat tes JSX yang mematok satu urutan (`react-4-1`, `react-4-6`, `react-9-5`, `next-7-1`) dipecah menjadi satu tes per hal yang diperiksa — sesuai panduan bagian 5 — sehingga pesan gagalnya juga jadi spesifik.

Dua sisa yang **sengaja** tidak diubah: `sql-6-3` dan `sql-10-mig-4`. Di SQL, petik ganda berarti nama kolom, jadi menerima `payload->>"role"` justru mengajarkan yang salah.

---

## C. Yang sudah diperiksa dan ternyata benar

Supaya jelas batas pemeriksaan ini:

- **Kunci jawaban kuis.** 663 soal diperiksa dengan heuristik kemiripan explanation–pilihan, lalu 26 kandidat dibaca manual satu per satu. **Tidak ada kunci jawaban yang salah.** Yang muncul sebagai kandidat ternyata explanation yang menjelaskan kenapa distraktor menggoda — justru pola yang diminta panduan.
- **Label huruf pilihan** (`A.`, `B.`) urut dan sesuai `answerIndex` di semua kuis yang memakainya.
- **Drift judul–penjelasan di luar SQL.** Laravel, Node, Deployment, Spreadsheet, Python, dan Analisis Data selaras.
- **`example.output` berupa deskripsi visual** di HTML/CSS/React memang dibolehkan panduan (bagian 4c & 10), jadi tidak diubah. Yang diganti hanya klaim manfaat pada track yang keluarannya seharusnya berupa teks nyata.

---

## D. Bukti verifikasi (angka hasil eksekusi)

| Pemeriksaan | Perintah | Hasil |
|---|---|---|
| Konten (aturan keras) | `npm run verify:konten` | **✅ SEMUA VERIFIKASI LOLOS** — 0 pelanggaran (sebelumnya 8) |
| Cakupan | idem | 127 materi, 809 step, 127 kuis, 663 soal, 16 track |
| Tipe | `npx tsc --noEmit` | bersih |
| Lint | `npx eslint src scripts` | bersih |
| Solution lolos tesnya sendiri | skrip sekali-pakai | 809/809 |
| `starterCode` tidak lolos semua tes | skrip sekali-pakai | 809/809 |
| Jawaban ngawur (`""`, `x`, `halo dunia`, …) tidak lolos | skrip sekali-pakai | 4.045 kombinasi, 0 lolos |
| Variasi kutip & urutan atribut diterima | skrip sekali-pakai | 0 penolakan (dari 47) |
| Keseimbangan tag HTML (`solution` + `example.code`) | skrip sekali-pakai | 96/97 seimbang; 1 sengaja tidak (`html-6-7`, contoh HTML rusak untuk pelajaran validator) |
| Contoh JavaScript dieksekusi di Node | skrip sekali-pakai | 58 contoh dijalankan; 54 keluarannya sama dengan `example.output` |
| Total assertion skrip uji | skrip sekali-pakai | **6.042 lolos / 7 gagal**, ketujuhnya sudah diperiksa manual → semuanya batasan harness, bukan cacat konten |
| Audit kualitas lanjutan | `npm run audit:lanjutan` | 244 temuan tersisa (lihat bagian E) |
| Build produksi | `npm run build` | **tidak bisa diuji di sandbox Linux ini** — `Failed to load SWC binary for linux/arm64`. Belum terbukti lulus; wajib dijalankan di Mac sebelum deploy. |

Tujuh kegagalan skrip uji yang sudah diperiksa manual: 3 contoh `async`/`fetch` (`js-6-1`, `js-6-4`, `js-6-5`) yang bergantung pada waktu tunggu dan jaringan sungguhan, 1 keluaran yang memang memuat catatan tambahan (`js-2-7`), 2 contoh yang **sengaja** error untuk mengajarkan bug (`ai-4-1`, `ai-5-3`), dan 1 contoh HTML rusak yang sengaja (`html-6-7`).

Catatan lingkungan: `npx tsx` tidak jalan di sandbox Linux (binary esbuild-nya darwin), jadi skrip verifikasi dijalankan lewat `npx tsc … --outDir /tmp/v` lalu `node /tmp/v/scripts/verify-konten.js`. Di Mac, `npm run verify:konten` dan `npm run audit:lanjutan` bisa dijalankan seperti biasa.

---

> **PEMBARUAN 29 Juli 2026:** seluruh antrean di bagian E **sudah dikerjakan** pada lanjutan ronde ini. Angka terkini: `verify:konten` bersih dan `audit:lanjutan` **0 temuan**. Rinciannya di bagian **H** di bawah. Bagian E dibiarkan apa adanya sebagai catatan bagaimana keputusannya diambil saat itu.

## E. Antrean yang sengaja TIDAK ditambal buru-buru

`scripts/audit-lanjutan.ts` ditambahkan sebagai pemeriksa kualitas **non-blocking** (selalu exit 0) supaya sisa pekerjaan ini punya angka, bukan kesan. Kondisi sekarang:

| Kategori | Jumlah | Per track |
|---|---|---|
| Pesan tes yang isinya jawaban utuh | 240 | react 44, sql 44, node 41, deployment 37, spreadsheet 25, laravel 18, data-analysis 17, sisanya ≤4 |
| `example.output` masih terbaca sebagai klaim | 4 | css 1, javascript 1, react 1, laravel 1 (keempatnya deskripsi hasil yang dibolehkan panduan — dibiarkan sengaja) |
| Step hafalan satu string | 0 | — |
| Tes menolak variasi benar | 0 | — |
| Preview mati tanpa catatan jujur | 0 | — |
| Dugaan drift explanation | 0 | — |

**Kenapa 240 pesan tes tidak ditambal sekarang.** Track rujukan (HTML, CSS, JavaScript, TypeScript) hampir nol untuk kategori ini, sementara 12 track lain memakai pola `message: "Gunakan perintah: <jawaban lengkap>"`. Setelah dibaca satu per satu, akarnya bukan pesannya, melainkan **desain step-nya**: kalau seluruh jawaban hanya `npm run build`, pesan gagal apa pun yang menyebut perintahnya otomatis membocorkan jawaban. Menambal 240 pesan secara terprogram hanya akan menghasilkan 240 kalimat seragam — persis kesalahan yang membuat 935 pelanggaran di ronde sebelumnya.

Yang dikerjakan sebagai contoh target: **24 pesan tes track Git ditulis ulang dengan tangan** menjadi petunjuk yang mengajar tanpa menempelkan jawaban, misalnya:

> sebelum: `"Gunakan: git checkout a1b2c3d -- index.html"`
> sesudah: `"Mengambil satu berkas dari commit lama: git checkout <hash>, lalu tanda -- sebagai pemisah, baru nama berkasnya. Tanpa --, Git menyangka kamu ingin berpindah branch."`

Rekomendasi untuk ronde berikutnya, per prioritas: React → SQL → Node → Deployment. Untuk setiap step yang jawabannya satu perintah pendek, ubah step-nya jadi skenario bertingkat (2–3 hal yang diperiksa) lalu tulis pesan tes per hal — bukan sekadar mengganti kalimat pesannya.

---

## F. Yang berubah di ronde ini

| Berkas | Perubahan |
|---|---|
| `src/data/tracks/git.ts` | 5 halaman materi baru (masing-masing >1.200 karakter, dengan diagram, tabel, bagian jebakan, kaitan dunia kerja); modul 1 jadi `persiapan-dasar-git` + satu bab baru "di mana perintah Git ditulis"; `git-1-2` diperluas dan contohnya diperbaiki (perintah `git config` bersifat silent); 24 pesan tes ditulis ulang |
| `src/data/tracks/sql.ts` | 21 explanation diperbaiki dari drift; 27 `example.output` diganti keluaran psql nyata; 12 step fragmen diberi konteks di `starterCode`; `sql-8-4` diberi log query N+1 sungguhan |
| `src/data/tracks/react.ts` | 3 step hafalan ditulis ulang; 2 tes JSX dipecah agar menerima urutan atribut apa pun; 3 catatan preview |
| `src/data/tracks/nextjs.ts` | 2 instruksi berhenti memuat jawaban; `next-8-2` & `next-1-4` diberi keluaran nyata; 1 tes JSX dipecah; 34 catatan preview |
| `src/data/tracks/html.ts`, `css.ts` | 92 pattern menerima petik tunggal; 7 pattern memakai lookahead agar urutan atribut bebas |
| `src/data/tracks/python.ts` | 3 instruksi berhenti memuat jawaban; 3 pesan tes jadi informatif; 3 `example.output` jadi keluaran `print` nyata |
| `src/data/tracks/laravel.ts`, `node-express.ts`, `ai-dev.ts` | 32 catatan jujur soal preview; `ai-0-2` & `ai-5-3` diberi keluaran nyata |
| `src/data/tracks/javascript.ts` | `js-2-7` keluarannya dirapikan agar tidak bercampur narasi |
| `scripts/audit-lanjutan.ts` (baru) | 7 pemeriksaan kualitas non-blocking + baseline angka |
| `package.json` | skrip `audit:lanjutan`; `cek` sekarang ikut me-lint `scripts` |
| `review-git-pemula.md` | status palsu diperbaiki menjadi catatan apa yang sebenarnya terjadi |

---

## G. Kesimpulan mandor (bagian pertama)

Enam belas track sekarang bersih terhadap aturan keras, dan yang lebih penting: cacat-cacat yang **tidak** ditangkap skrip sudah dicari dengan cara yang bisa diulang — skrip variasi jawaban, eksekusi contoh di Node, pemeriksa keseimbangan tag, dan detektor drift judul–penjelasan. Ketiga temuan terbesar ronde ini (laporan yang mengklaim pekerjaan kosong, penjelasan SQL yang bergeser satu step, dan 70 preview mati yang tidak dijujurkan) semuanya lolos dari `verify:konten` — jadi penambahan `audit:lanjutan.ts` sengaja diarahkan ke wilayah itu.

Dua hal yang belum tuntas dan tidak boleh dianggap tuntas: **`npm run build` belum pernah lulus di lingkungan ini** (SWC arm64 tidak ada — jalankan di Mac), dan **240 pesan tes masih membocorkan jawaban** karena akarnya desain step, bukan kalimat pesannya. Keduanya tercatat dengan angka, bukan diselipkan.

---

## H. Lanjutan 29 Juli 2026 — antrean bagian E dituntaskan

Setelah laporan di atas diserahkan, tiga pekerjaan yang tadinya dicatat sebagai antrean dikerjakan sampai habis.

### H1. `instalasiAllowlist` dikosongkan, bukan diakali

Aturan keras #1 (modul pertama wajib Persiapan & Instalasi) dilewati **7 track** lewat daftar pengecualian di `scripts/verify-konten.ts`. Dua entri sudah basi (`sql` dan `spreadsheet` sebenarnya sudah punya modul persiapan), lima sisanya memang belum pernah dikerjakan. Daftar itu sekarang kosong dan diberi komentar peringatan.

| Track | Sebelum | Sesudah | Yang ditulis |
|---|---|---|---|
| JavaScript | modul 1 = `dasar`, tanpa persiapan sama sekali | modul baru `persiapan-alat-kerja` | 1 materi + 4 step + kuis 6 soal: di mana JavaScript ditulis, tiga tempat ia bisa dijalankan, diagram kenapa `<script>` di `head` tanpa `defer` selalu menghasilkan `null`, tab DevTools yang dipakai harian, tiga jenis error dan cara membaca `berkas:baris` |
| Python | `dasar-python` | `persiapan-dasar-python` | materi instalasi per OS, `python` vs `python3`, PATH di Windows, REPL vs berkas `.py`, jebakan menyalin `>>>`, jebakan menamai berkas `random.py` + step verifikasi versi |
| Node.js | `node-runtime` | `persiapan-node-runtime` | materi nvm & LTS, anatomi proyek, mana yang di-commit (dan mana yang tidak), tabel apa yang hilang/didapat dibanding browser + step `npm init -y` |
| Next.js | `app-router` | `persiapan-app-router` | materi `create-next-app`, App Router vs Pages Router, isi folder `app/`, empat perintah npm yang dipakai terus + step scaffolding |
| NoSQL | `konsep-nosql` | `persiapan-konsep-nosql` | materi Atlas gratis vs Docker lokal, connection string, padanan istilah SQL→MongoDB, jebakan salah ketik nama collection yang **tidak** error tapi mengembalikan kosong + step `mongosh` |

Kelima materi baru memenuhi aturan Ronde 3 (>1.200 karakter, diagram teks, tabel, bagian jebakan, kaitan dunia kerja) dan menyatakan terus terang bahwa panel latihan tidak menjalankan Python/Node/Next/MongoDB. `docs/kurikulum.md` ikut disinkronkan untuk enam track yang berubah.

### H2. 240 pesan tes yang membocorkan jawaban: dari 240 → 0

Bagian E semula merekomendasikan menunda ini karena akar masalahnya desain step. Yang akhirnya dikerjakan bukan penggantian kalimat secara massal, melainkan **memecah tesnya**: satu tes untuk satu hal yang diperiksa (panduan bagian 5), sehingga pesan gagalnya bisa menerangkan bagian yang kurang tanpa menempelkan seluruh jawaban.

| Track | Pesan bocor sebelum | Sesudah | Tes sesudah dipecah |
|---|---|---|---|
| Git | 24 | 0 | (dikerjakan di bagian pertama) |
| SQL | 44 | 0 | 44 step → 104 tes |
| React | 44 | 0 | 44 step → 102 tes |
| Node.js & Express | 41 | 0 | 41 step → 97 tes |
| Deployment & Docker | 37 | 0 | 37 step → 52 tes |
| Spreadsheet | 25 | 0 | 25 step → 47 tes |
| PHP & Laravel | 18 | 0 | 18 step → 42 tes |
| Analisis Data | 17 | 0 | 17 step → 43 tes |
| NoSQL, Next.js, Python, AI-dev, HTML, CSS | 14 | 0 | 14 step → 31 tes |

Contoh perubahannya (deployment):

> sebelum: satu tes, pesan `"Gunakan: chmod 755 script.sh"`
> sesudah: dua tes — yang pertama menjelaskan arti tiga angka 755 (pemilik 7, grup dan publik 5), yang kedua mengingatkan bahaya 777 di server publik.

Contoh lain (Node.js), yang justru memperbaiki satu celah keamanan sebagai bahan ajar:

> `node-5-1`: tes ketiga sekarang memeriksa keberadaan `await` pada `bcrypt.compare`, dengan pesan yang menjelaskan bahwa tanpa `await` yang diperiksa adalah objek Promise — dan objek selalu truthy, sehingga **siapa pun bisa login**.

### H3. Empat `example.output` terakhir yang masih berupa prosa

`css-2-2`, `js-10-2`, `react-2-2`, dan `laravel-9-1` diganti keluaran konkret: diagram posisi label untuk CSS, keluaran runner Vitest beserta `AssertionError` untuk JavaScript, HTML hasil render untuk React, dan laporan `PASS` Pest untuk Laravel.

### H4. Tiga celah di skrip verifikasi yang ikut diperbaiki

Ditemukan saat mengerjakan H2 — semuanya soal pemeriksa, bukan konten:

1. Aturan "pesan tes malas" mencocokkan kata `salah` **di tengah kata**, sehingga pesan yang mengajar seperti "input yang bermasalah" atau "kesalahan umum" ikut ditolak. Sekarang memakai batas kata dan hanya menandai pesan yang benar-benar malas (`"Salah"`, `"Tes gagal"`, atau pesan sangat pendek).
2. Aturan "tes terlalu longgar" berhasil menangkap 11 pattern baru yang saya tulis sendiri (`"DESC"`, `"logout"`, `"Category"`, …) — semuanya diperketat. Ini bukti aturannya bekerja, termasuk terhadap yang menulisnya.
3. Satu step baru (`node-4-5`) sempat lolos karena komentar di `starterCode` memuat jawabannya; komentarnya ditulis ulang.

### H5. Bukti verifikasi terkini

| Pemeriksaan | Hasil |
|---|---|
| `npm run verify:konten` | **✅ SEMUA VERIFIKASI LOLOS** — 0 pelanggaran, `instalasiAllowlist` kosong |
| Cakupan | 132 materi, 817 step, 128 kuis, 669 soal, 16 track |
| `npm run audit:lanjutan` | **0 temuan** (dari 271 saat skrip ini dibuat) |
| `npx tsc --noEmit` | bersih |
| `npx eslint src scripts` | bersih |
| Solution lolos tesnya sendiri | 817/817 |
| `starterCode` tidak lolos semua tes | 817/817 |
| Jawaban ngawur tidak lolos | 4.085 kombinasi, 0 lolos |
| Variasi kutip & urutan atribut diterima | 0 penolakan |
| Contoh JavaScript dieksekusi di Node | 61 dijalankan, 8 selisih — **semuanya sudah diperiksa manual dan disengaja** (3 contoh yang memang mendemonstrasikan error, 1 keluaran bercatatan, 3 contoh async/jaringan, 1 HTML sengaja rusak untuk pelajaran validator) |
| Total assertion skrip uji | **6.108 lolos / 8 gagal** (kedelapan itu di atas) |
| `npm run build` | **masih tidak bisa diuji di sandbox** — `Failed to load SWC binary for linux/arm64`. Belum terbukti lulus; wajib dijalankan di Mac. |

### H6. Yang tersisa setelah ini

Hanya dua, dan keduanya di luar jangkauan sandbox atau di luar jangkauan skrip:

1. **`npm run build` belum pernah lulus di lingkungan ini.** Jalankan di Mac sebelum deploy.
2. **Belum ada satu pun pemula sungguhan yang mencoba konten ini,** dan belum ada praktisi lain yang mereviewnya. Itu gap yang sudah dicatat `panduan_isi.md` bagian 12, dan tidak ada skrip yang bisa menutupnya.
