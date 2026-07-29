# Review Track Database & SQL — Sudut Pandang Pemula Total

> **RONDE 5 (29 Juli 2026).** Pembacaan ulang seluruh track setelah laporan Ronde 3 (tersimpan di bagian bawah dokumen ini) menyatakannya selesai. Saat ronde ini dibuka, `verify:konten` hanya menemukan **1** pelanggaran di track ini dan `audit:lanjutan` **0** — jadi hampir semua temuan di bawah lolos dari kedua skrip. Semuanya dibuktikan dengan menjalankan sesuatu: server PostgreSQL 16 lokal, atau skrip sekali pakai — bukan dengan membaca ulang.

Berkas: `src/data/tracks/sql.ts` (11 modul, 11 materi, 72 step, 11 kuis / 55 soal).

Cara baca: aku membaca track ini seolah baru selesai prasyaratnya dan belum pernah menulis satu baris SQL. Setiap poin di bawah adalah tempat aku **berhenti dan tidak paham**, atau tempat konten menjanjikan sesuatu yang tidak ditepati.

---

## A. Temuan terbesar: tes menolak 23 dari 25 jawaban yang sama-sama benar

Ini tidak terlihat oleh skrip mana pun, karena `solution` bawaan konten memang lolos tesnya sendiri. Yang tidak pernah diuji: apakah **jawaban benar yang ditulis dengan cara lain** juga diterima. Aku menulis skrip yang mencoba varian-varian yang sah menurut PostgreSQL/MySQL:

| Step | Varian yang ditolak padahal benar |
|---|---|
| `sql-2-1`, `sql-2-6`, `sql-5-3` | foreign key bentuk inline (`user_id INT REFERENCES users(id)`) — bentuk yang justru paling lazim di PostgreSQL |
| `sql-2-3` | sisi `ON` ditukar, alias tabel (`u.name`), `LEFT OUTER JOIN`, urutan kolom ditukar — **empat** varian, semuanya benar |
| `sql-2-2`, `sql-2-4`, `sql-2-5` | sisi `ON` ditukar, alias tabel |
| `sql-4-5` | `START TRANSACTION;` — sintaks SQL standar, dan satu-satunya bentuk di MySQL |
| `sql-5-1` | `VARCHAR (50)` dengan spasi, atau kolom ditambah `NOT NULL` |
| `sql-5-2` | jawaban tanpa titik koma (regex-nya mewajibkan `;`, sementara 60 step lain tidak) |
| `sql-5-4` | `CREATE TABLE accounts (id SERIAL PRIMARY KEY, balance INT CHECK (...))` — skema yang lebih wajar justru ditolak |
| `sql-6-2`, `sql-6-5` | urutan `PRIMARY KEY` dan `DEFAULT` ditukar; `INTEGER` (ejaan kanonik) alih-alih `INT` |
| `sql-6-4` | `to_tsvector('english', body)` — menyertakan konfigurasi bahasa |
| `sql-9-my-3` | urutan dua syarat rentang tanggal ditukar |
| `sql-10-mig-2` | `CURRENT_TIMESTAMP` alih-alih `NOW()` |
| `sql-11-2` | query ditulis dengan template literal JavaScript |

**Akarnya satu:** 32 step hanya punya **satu** tes berupa regex raksasa yang mematok seluruh bentuk jawaban dari awal sampai titik koma — yang terpanjang 250 karakter. Bentuk seperti itu tidak menguji pemahaman, ia menguji kemampuan menebak formatting.

**Perbaikan:** 30 step ditulis ulang tesnya, dari **131 menjadi 191 tes** — satu tes untuk satu hal yang diperiksa, sesuai panduan bagian 5. Regex dilonggarkan pada hal yang memang bebas (urutan sisi `ON`, alias, `INNER`/`OUTER` opsional, urutan klausa) dan tetap ketat pada hal yang diajarkan. Setelah perbaikan: **39 varian benar diuji, 0 ditolak.**

## B. 22 `example.output` yang tidak mungkin keluar dari kodenya

Panduan bagian 4c menyatakan bahwa untuk track yang tidak bisa dieksekusi di preview, `example.output` adalah **satu-satunya** cara pembaca melihat hasil. Di modul 1 — halaman pertama yang dibaca pemula total — tidak satu pun dari tujuh step menampilkan hasil:

| Step | Sebelumnya | Masalahnya |
|---|---|---|
| `sql-1-1` | `Seluruh baris dan kolom dari tabel users ditampilkan.` | kalimat, bukan hasil |
| `sql-1-3` | `Halaman hanya menampilkan produk yang harganya di atas 50.000.` | kalimat — dan menyebut "halaman", padahal ini keluaran terminal |
| `sql-1-5` | `Mengembalikan 5 produk termahal.` | kalimat |
| `sql-1-6` | tabel berjudul kolom **`kategori`** | query-nya `SELECT DISTINCT category` — judul kolom itu mustahil muncul |
| `sql-8-pg-1` | `Index Scan using ... (actual time=0.015..0.018 ms)` | psql **tidak pernah** mencetak bentuk itu: tidak ada header `QUERY PLAN`, tidak ada `rows=N loops=N`, tidak ada `Planning Time`, tidak ada `(N rows)` |
| `sql-9-my-1` | tabel EXPLAIN tanpa bingkai | MySQL selalu membingkai hasil dengan `+---+` |
| `sql-7-3` | tabel bergaya psql | ini step MySQL; formatnya berbeda |

**Perbaikan:** 30 blok `example` diganti. Untuk PostgreSQL, keluarannya **benar-benar dijalankan** di server PostgreSQL 16 lokal dan disalin apa adanya — termasuk lebar kolom dan barisnya. Beberapa di antaranya sekaligus menjadi bahan ajar utama step-nya:

- `sql-1-6` sekarang menampilkan hasil `DISTINCT` yang urutannya **acak** (Makanan, Elektronik, Minuman, Fashion) — persis seperti yang dikembalikan PostgreSQL, dan itu jadi pintu masuk menjelaskan bahwa `DISTINCT` tidak menjanjikan urutan apa pun.
- `sql-8-pg-1` menampilkan rencana eksekusi berdampingan pada tabel 50.000 baris: `Index Scan` 0,048 ms lawan `Seq Scan` 3,7 ms dengan `Rows Removed by Filter: 42858`.
- `sql-10-mig-3` menampilkan pesan aslinya, `ERROR: date/time field value out of range: "0000-00-00"` — jebakan migrasi MySQL→PostgreSQL yang sebelumnya hanya diklaim dalam satu kalimat.
- `sql-8-pg-6` menampilkan isi `pg_restore -l` dari berkas dump sungguhan, dengan catatan bahwa `pg_dump` **diam** saat berhasil sehingga satu-satunya cara memastikan adalah memeriksa daftar isinya.

Keluaran MySQL (modul 7 & 9) tidak bisa dieksekusi — tidak ada server MySQL di lingkungan ini. Keluarannya ditulis mengikuti format CLI MySQL yang terdokumentasi (`Query OK, N rows affected`, bingkai `+---+`), dan **itu disebutkan apa adanya di sini**, bukan diklaim sebagai hasil eksekusi.

## C. Latihan yang bertentangan dengan penjelasannya sendiri

`sql-5-6` berjudul "Kapan Index Membantu & Memperlambat". Penjelasannya menutup dengan: *"Jebakan pemula adalah mengindeks kolom dengan kardinalitas rendah (seperti kolom `gender` yang hanya berisi dua variasi nilai), yang membuat mesin memilih Full Table Scan dibanding indeks."*

Lalu instruksinya: *"Buat index dengan nama `idx_order_status` pada kolom `status` di tabel `orders`."*

Kolom `status` pada `orders` berisi segelintir nilai berulang — persis kasus yang baru saja dilarang. Pemula yang membaca dengan saksama akan berhenti di sini dan tidak tahu mana yang benar.

**Perbaikan:** latihannya diganti menjadi index pada `created_at` (kolom yang dipakai laporan rentang tanggal dan nyaris selalu berbeda tiap baris), instruksinya menyebut secara eksplisit **kenapa bukan `status`**, dan penjelasannya diperluas dengan konsep selektivitas serta kapan *partial index* menjadi jawaban untuk kolom berkardinalitas rendah. Pengecoh `ON orders(status);` kini menjadi jebakan utama di mode susun kode step itu.

## D. `sql-3-5`: nama CTE yang berbohong, dan tes yang tidak menguji apa pun

Ini satu-satunya pelanggaran yang ditangkap skrip di track ini, tapi masalah sebenarnya lebih dalam:

```sql
WITH HighSpenders AS (SELECT user_id FROM orders)      -- tidak ada penyaring "high" sama sekali
SELECT * FROM users WHERE id IN (SELECT user_id FROM HighSpenders);
```

CTE-nya bernama "HighSpenders" tapi isinya seluruh pemesan tanpa pandang jumlah belanja. Tes satu-satunya hanya memeriksa baris `WITH ...`, jadi query utama boleh ditulis apa saja. Pesan tesnya: *"Gunakan sintaks WITH CTE"*.

**Perbaikan:** step ditulis ulang — CTE-nya kini benar-benar menghitung (`GROUP BY user_id HAVING SUM(amount) > 1000000`), tesnya menjadi empat (termasuk satu yang memastikan nama CTE dipakai ulang di query utama, sehingga jawaban yang membaca ulang tabel `orders` ditolak), dan contohnya dijalankan sungguhan.

## E. Instruksi yang menempelkan jawabannya sendiri

Tiga belas instruksi bisa diselesaikan tanpa membaca penjelasan maupun contoh, karena jawabannya sudah tercetak di soal — anti-pattern #1 di `panduan_isi.md`:

> `sql-8-pg-3`: *"...dan fungsi `ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)` dengan alias `order_seq`..."*
> `sql-8-pg-4`: *"Tulis CTE bernama 'active_users' yang mengambil `SELECT * FROM users WHERE status = 'active'` kemudian lakukan `SELECT * FROM active_users;`"*
> `sql-6-5`: *"Definisikan kolom 'id' bertipe INT yang menggunakan GENERATED ALWAYS AS IDENTITY dan berfungsi sebagai PRIMARY KEY."*

Satu di antaranya bahkan rusak penulisannya: instruksi `sql-6-3` berbunyi *"mengambil kolom 'payload->>'name'' dari tabel 'logs'"* — tanda kutip bersarang yang tidak terbaca.

Ditambah **16 pesan tes** yang mengulang jawabannya lagi (`"Gunakan: ON CONFLICT (email) DO NOTHING;"`), sehingga menebak-nebak pun tetap lulus. Semua instruksi itu diubah menjadi skenario, dan seluruh pesan tes ditulis ulang menjadi petunjuk yang mengajar tanpa menempelkan jawaban. Audit ulang: **0 pesan tes yang memuat potongan jawaban.**

## F. Hal kecil yang tetap diperbaiki

- `sql-1-3` — `note`-nya menjelaskan `LIKE 'B%'`, padahal contohnya tidak memuat `LIKE` sama sekali. Contohnya diganti memakai `BETWEEN` + `LIKE` sekaligus, sehingga bab silabus "BETWEEN, IN, LIKE" yang selama ini hanya disebut sambil lalu benar-benar tersentuh.
- `sql-7-3` — kalimat rusak: *"kamu dipanggil fungsi `LAST_INSERT_ID()`"*.
- `sql-10-mig-2` — instruksinya menulis **"MySQH"**.
- `sql-11-2` — `note`-nya berakhir dengan *"(+ configuration)"* yang tidak bermakna.
- **ID modul 11** masih memakai penomoran lama `sql-8-1` … `sql-8-6` dan `sql-8-kuis`, bertabrakan secara konsep dengan modul 8 (`sql-8-pg-*`). Diseragamkan menjadi `sql-11-1` … `sql-11-6` dan `sql-11-kuis` sesuai pola di `panduan_isi.md` bagian 7. **Konsekuensi:** progres lokal (localStorage) untuk ketujuh item itu ter-reset — dapat diterima karena konten ini belum dirilis.

## G. Yang diperiksa dan ternyata TIDAK bermasalah

Dicatat supaya tidak diperiksa ulang di ronde berikutnya:

- `sql-6-4` memakai `to_tsvector('indonesian', title)`. Aku menduga ini error karena PostgreSQL tidak mengapalkan konfigurasi bahasa Indonesia. **Dugaan itu salah** — `SELECT cfgname FROM pg_ts_config` di PostgreSQL 16 memang memuat `indonesian`. Contohnya dijalankan dan bekerja.
- Sebelas halaman `materi` (3.100–5.300 karakter) sudah memenuhi aturan Ronde 3: ada diagram teks, tabel rujukan, bagian jebakan, dan kaitan ke dunia kerja.
- Modul 2, 3, dan 4 sudah berkualitas rujukan sejak sebelum ronde ini: penjelasan 870–1.100 karakter, contoh dengan tabel hasil nyata, dan `note` yang mengajarkan jebakan (`sql-2-2` menjelaskan kenapa jumlah baris berkurang setelah JOIN; `sql-4-4` menunjukkan `UPDATE 0` sebagai tanda bahaya transfer uang).

---

## H. Tabel bukti verifikasi

Semua angka di bawah adalah keluaran skrip/perintah, bukan hasil membaca.

| Pemeriksaan | Perintah | Sebelum | Sesudah |
|---|---|---|---|
| Aturan keras konten | `verify:konten` | 1 pelanggaran (`sql-3-5`) | **0 untuk track ini** |
| Audit kualitas lanjutan | `audit:lanjutan` | 0 | **0** |
| Varian jawaban benar yang ditolak tes | skrip sekali pakai, 39 varian | **23 dari 25 ditolak** | **0 dari 39 ditolak** |
| Pesan tes yang memuat potongan jawaban | skrip sekali pakai | 16 | **0** |
| Jumlah tes | — | 131 | **191** |
| Step dengan hanya 1 regex raksasa | — | 32 | 6 (semuanya perintah satu kata seperti `VACUUM FULL logs`) |
| Solusi dieksekusi di PostgreSQL 16 | `psql` per solusi | belum pernah diuji | **51 dari 51 jalan** |
| Tipe & lint | `tsc --noEmit`, `eslint` | bersih | **bersih** |

Kolom "sebelum" untuk `verify:konten` dan `audit:lanjutan` diambil sebelum satu baris pun diubah di ronde ini.

**`npm run build` tidak dijalankan** — lingkungan ini tidak bisa menyelesaikannya (SWC untuk arsitektur ini tidak tersedia), jadi statusnya disebut apa adanya dan tidak diklaim lulus.

**Catatan lingkungan:** berkas `src/data/tracks/sql.ts` di working tree juga memuat 72 blok `susunKode` (mode susun kode) yang ditambahkan sesi kerja paralel dan belum ter-commit saat ronde ini berjalan. Seluruh tes baru di atas diverifikasi terhadap blok-blok itu: susunan benar setiap step tetap lolos seluruh tesnya, dan setiap pengecoh tetap merusak minimal satu tes. Enam blok (`sql-3-5`, `sql-3-6`, `sql-4-5`, `sql-5-4`, `sql-5-6`, `sql-6-3`) ikut disesuaikan karena tes atau soalnya berubah.

---
---

# Arsip: Laporan Ronde 3 (28 Juli 2026)

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Seluruh temuan di bawah sudah ditangani. Track sekarang: **11 modul, 11 materi, 72 step, 11 kuis (55 soal)**, dan `verify:konten` bersih 100% untuk track ini.

Berkas: `src/data/tracks/sql.ts` (saat direview: 11 modul, 72 step, 11 kuis, **0 materi**, 68 explanation pendek, 1 bab menganggur, berada di `instalasiAllowlist`).

Cara baca: aku membaca track ini sebagai pemula total yang baru saja menyelesaikan track HTML, CSS, JavaScript, TypeScript, React, Next.js, Git, dan backend dasar. Pembaca di sini sudah paham logika pemrograman web, namun **belum pernah mengelola database relasional, menulis kueri SQL, atau memahami transaksi & optimasi kueri**.

---

## A. Yang bikin macet sejak menit pertama

### A1. Nol halaman `materi` di seluruh sebelas modul
Aturan keras `AGENTS.md` #1 & #8: setiap modul latihan wajib diawali minimal satu halaman BACA-DULU (materi) ber-kedalaman minimal 1200 karakter, diagram teks/tabel, jebakan umum, dan kaitan ke dunia kerja. Sebelas modul sebelumnya **nol materi**. Efeknya:
- Pemula langsung disuruh mengetik `SELECT * FROM products` di step pertama tanpa tahu database relasional itu apa, bedanya dengan file Excel/Sheets, dan bagaimana cara kerja tabel/baris/kolom.
- Konsep krusial seperti **Primary Key vs Foreign Key**, **INNER vs LEFT JOIN**, **Prinsip ACID Transaksi**, **B-Tree Indexing**, **MVCC / VACUUM**, dan **SQL Injection** hanya dijelaskan 1–2 kalimat singkat.
- Tidak ada panduan alat kerja (Database Server PostgreSQL/MySQL & GUI Client DBeaver/TablePlus/pgAdmin).

### A2. Modul 1 belum mencakup judul & slug Persiapan/Instalasi
Track ini berada di `instalasiAllowlist` pada skrip verifikasi karena modul pertamanya berslug `konsep-select` tanpa kata `persiapan` atau `instalasi`. Padahal pemula butuh panduan awal pemasangan PostgreSQL & MySQL (macOS, Windows, Linux, dan alternatif online), cara koneksi CLI `psql`/`mysql`, serta pengenalan GUI client sebelum menulis kueri pertama.

### A3. Penjelasan pendek (68 step) yang hanya menyebut sintaks
Sebanyak 68 dari 72 step memiliki penjelasan di bawah 4 kalimat / 350 karakter. Penjelasan lama hanya menyebut cara mengetik sintaks tanpa menjawab **APA**, **KENAPA**, **KAPAN dipakai**, dan **JEBAKAN umum**. Contoh pada `sql-1-7` dan `sql-4-2` yang belum menekankan bahaya `= NULL` dan `UPDATE` tanpa `WHERE`.

### A4. Preview BiLearn tidak mengeksekusi SQL (Language "text")
Mesin browser BiLearn tidak menjalankan server SQL nyata, sehingga seluruh step menggunakan `language: "text"`. Contoh keluaran (`example.output`) wajib menyajikan hasil tabel teks yang realistis agar pemula mendapat gambaran visual hasil eksekusi kueri.

### A5. Bab menganggur di `sql/pg-lanjutan`
Bab `"Transaction isolation level & deadlock"` pada silabus modul 8 (`pg-lanjutan`) sebelumnya tidak tersentuh oleh step, kuis, maupun materi mana pun.

---

## B. Sebelas halaman materi yang ditambahkan

Satu per modul, ditulis memenuhi aturan keras Ronde 3 (minimal 1200 karakter, diagram teks/tabel, bagian jebakan umum, dan kaitan ke dunia kerja):

| Materi | ID | Judul | Yang ditutupnya |
|---|---|---|---|
| Modul 1 | `sql-1-m1` | Persiapan, Instalasi Database Relasional & Konsep SELECT | Pengertian RDBMS dari nol vs Excel, panduan instalasi per OS (PostgreSQL, MySQL, DBeaver, TablePlus), diagram anatomi tabel database, tabel rujukan klausul SELECT, analogi lemari arsip digital, 3 jebakan pemula (`= NULL`, `SELECT *` di produksi), kaitan ke interview backend. |
| Modul 2 | `sql-2-m1` | Relasi Antar Tabel & Operasi JOIN | Diagram ERD PK/FK, diagram Venn & tabel rujukan INNER vs LEFT vs RIGHT vs FULL OUTER vs CROSS JOIN, analogi buku tamu & struk parkir, jebakan lupa `ON` (Cartesian product) & ambiguity column error, kaitan ke API backend. |
| Modul 3 | `sql-3-m1` | Fungsi Agregasi, Grouping & Subquery | Pengertian agregasi (COUNT, SUM, AVG, MIN, MAX), diagram urutan evaluasi SQL (FROM -> WHERE -> GROUP BY -> HAVING -> SELECT), tabel beda `WHERE` vs `HAVING`, subquery skalar vs `IN` vs `EXISTS`, jebakan agregasi di WHERE, kaitan ke dashboard analitik. |
| Modul 4 | `sql-4-m1` | Manipulasi Data (DML) & Transaksi Database (ACID) | Pengertian DML (INSERT, UPDATE, DELETE, TRUNCATE), diagram alur transaksi transfer bank (`BEGIN`, `COMMIT`, `ROLLBACK`), 4 pilar prinsip ACID, analogi mesin ATM, jebakan UPDATE/DELETE tanpa `WHERE` & transaction leak, kaitan ke checkout e-commerce. |
| Modul 5 | `sql-5-m1` | Desain Skema Database, Normalisasi & Performa Indexing | Tahapan Normalisasi 1NF, 2NF, 3NF, diagram B-Tree Index vs Full Table Scan (O(log N) vs O(N)), tabel rujukan pro-kontra index, analogi indeks halaman belakang buku, jebakan over-indexing & salah tipe data, kaitan ke ERD review. |
| Modul 6 | `sql-6-m1` | Pengenalan & Fitur Khusus PostgreSQL | Panduan CLI `psql` (`\l`, `\dt`, `\d`), tabel tipe data modern (JSONB, UUID, IDENTITY, ENUM), operator JSONB (`->` vs `->>`), Full-Text Search (`to_tsvector`, `to_tsquery`), jebakan sequence out-of-sync, kaitan ke Supabase & SaaS backend. |
| Modul 7 | `sql-7-m1` | Pengenalan & Fitur Khusus MySQL | Storage engine InnoDB (ACID) vs MyISAM (legacy), CLI `mysql`, magnet bug charset `utf8` (3-byte) vs `utf8mb4` (4-byte emoji), diagram DATETIME vs TIMESTAMP, `AUTO_INCREMENT` & `LAST_INSERT_ID()`, jebakan Year 2038 Problem, kaitan ke Laravel & WordPress. |
| Modul 8 | `sql-8-pg-m1` | PostgreSQL: Optimasi Performa, Window Function & Operasional | Diagram alur `EXPLAIN ANALYZE` (Seq Scan vs Index Scan vs Bitmap Scan), Window Functions (`ROW_NUMBER`, `OVER PARTITION BY`), CTE (`WITH`), MVCC & `VACUUM` (table bloat), Transaction isolation level & deadlock, PgBouncer, `pg_stat_statements`, kaitan ke DBA. |
| Modul 9 | `sql-9-my-m1` | MySQL: Optimasi Performa, Storage Engine & Operasional | Output `EXPLAIN` (kolom `type`: const, eq_ref, ref, range, ALL), diagram Clustered Index InnoDB vs Secondary Index, Covering Index (Index-Only Scan), Index Invalidation, Slow Query Log, `FOR UPDATE` (row lock), Replikasi Master-Replica, kaitan ke traffic scale. |
| Modul 10 | `sql-10-mig-m1` | Strategi Memilih & Migrasi antar Mesin Database | Matriks perbandingan PostgreSQL vs MySQL vs SQLite, sintaks string concat (`||` vs `CONCAT`), Upsert (`ON CONFLICT` vs `ON DUPLICATE KEY UPDATE`), diagram alur migrasi tanpa downtime (`pgloader`, ETL), verifikasi `COUNT(*)` & SHA256, jebakan `0000-00-00`, kaitan ke System Architect. |
| Modul 11 | `sql-11-m1` | Integrasi SQL di Aplikasi Backend, Connection Pool & ORM | Integrasi Node.js (`pg.Pool`), diagram bahaya SQL Injection vs Parameterized Query (`$1`, `?`), tabel komparasi ORM (Prisma/Eloquent) vs Query Builder (Knex) vs Raw SQL, Masalah N+1 query & Eager Loading, Skema Migration, kaitan ke Production API Developer. |

---

## C. Perbaikan Penjelasan, Contoh Kode, & Slug

1. **Perpanjangan Explanation 72 Step:**
   Seluruh 72 step di 11 modul diperluas menjadi **440–600+ karakter (4+ kalimat)** yang menjawab secara terstruktur: **APA** sintaksnya, **KENAPA** begitu, **KAPAN** dipakai di dunia kerja, dan **JEBAKAN** umum yang sering membuat bug.
2. **Penyelesaian Bab Menganggur (`pg-lanjutan`):**
   Materi `sql-8-pg-m1` menambahkan pembahasan eksplisit mengenai **Transaction Isolation Level** (Read Committed, Repeatable Read, Serializable) dan penanganan **Deadlock** otomatis di PostgreSQL.
3. **Penyesuaian Slug & Judul Modul 1:**
   Slug Modul 1 diperbarui menjadi `persiapan-konsep-select` dan judul menjadi `Persiapan & Konsep SELECT`. Track Database & SQL dikeluarkan dari `instalasiAllowlist` di `scripts/verify-konten.ts`.
4. **Catatan Jujur Preview:**
   Karena kueri SQL di platform BiLearn menggunakan `language: "text"` (tidak dieksekusi di browser), seluruh instruksi latihan memberikan catatan jujur bahwa kueri diperiksa via regex validator, serta didukung contoh keluaran (`example.output`) berupa tabel teks yang realistis.

---

## D. Verifikasi Hasil Akhir

Semua pengujian wajib telah dijalankan dengan hasil bersih 100%:

1. **`npm run verify:konten`:**
   ```text
   ✅ Database & SQL               11 materi,  72 step, 11 kuis  (11 modul)
   ```
2. **Type Check & Linter:**
   ```bash
   npx tsc --noEmit && npx eslint src/data/tracks/sql.ts scripts/verify-konten.ts
   ```
   **Hasil:** Lolos 100% tanpa ada error TypeScript maupun linting.
3. **Pengujian Kueri & Tes Regex (Skrip Uji `/tmp/test_sql_regexes.js`):**
   - Solutions passing: **72 / 72** (100% `solution` lolos tesnya sendiri).
   - StarterCode failing: **72 / 72** (100% `starterCode` belum lolos tes, siap dikerjakan user).
   - Toleransi variasi penulisan: Regex mendukung variasi spasi (`\s*`), petik tunggal/ganda (`['"]`), dan tidak peka huruf (`i` flag).
4. **Kuis:**
   Seluruh 11 kuis (total 55 soal) ber-tipe `"pilihan-ganda"` lengkap dengan `explanation` kunci jawaban informatif.

---

## E. Kesimpulan

Track Database & SQL sekarang terstruktur rapi, ramah bagi pemula total, dan memenuhi seluruh standar kualitas BiLearn Ronde 2 & Ronde 3. Dengan 11 materi komprehensif, diagram arsitektur teks, dan penjelasan mendalam tentang jebakan produksi (seperti `= NULL`, `UPDATE` tanpa `WHERE`, SQL Injection, dan Index Invalidation), siswa tidak hanya menghafal kueri melainkan memahami **mental model pengelolaan data relasional** dan **praktik terbaik di industri**.
