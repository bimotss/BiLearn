# Review Track Database & SQL — Sudut Pandang Pemula Total

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
