# Review Track NoSQL & Data Lanjutan — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Track sekarang: **4 modul, 4 materi, 25 step, 4 kuis (20 soal)**, dan `verify:konten` bersih 100% untuk track ini.

Berkas: `src/data/tracks/nosql.ts` (saat direview awal: 4 modul, 25 step, 4 kuis, **0 materi**, 12 penjelasan terlalu pendek).

Cara baca: aku membaca track ini sebagai pemula total yang baru saja menyelesaikan track Database & SQL — paham query relasional (`SELECT`, `INSERT`, `UPDATE`, `DELETE`, `JOIN`, `GROUP BY`), namun **belum pernah mengenal database non-relasional (NoSQL), belum paham model dokumen BSON MongoDB, belum paham kompromi Teorema CAP terdistribusi, belum pernah memakai Redis in-memory data store, dan belum paham arsitektur Polyglot Persistence**.

---

## A. Yang bikin macet sejak menit pertama

### A1. Nol halaman `materi` di seluruh empat modul

Sebelum perbaikan, track NoSQL & Data Lanjutan langsung menyuruh pengguna mengetik query MongoDB shell dan perintah Redis CLI tanpa memberikan fondasi konseptual mengapa database non-relasional ini ada dan kapan harus dipakai. Pembaca yang baru datang dari dunia SQL relasional akan kebingungan mengapa tabel dan *Foreign Key* mendadak tidak ada, mengapa dokumen JSON/BSON bisa memiliki struktur bersarang, dan mengapa Redis bisa jauh lebih cepat daripada PostgreSQL.

Empat halaman materi baru kini mengisi fondasi mental yang hilang sebelum step pertama di setiap modul dimulai:

| Materi | ID | Peta mental & fondasi yang diberikan |
|---|---|---|
| Modul 1 | `nosql-1-m1` | Pengenalan NoSQL & Latar Belakang (*Not Only SQL*), taksonomi 4 keluarga NoSQL (Document, Key-Value, Column-Family, Graph), diagram segitiga Teorema CAP (Consistency, Availability, Partition Tolerance), analogi lemari arsip vs loker penitipan stasiun, anti-pattern *NoSQL Hype Syndrome*, serta kaitan arsitektur *Polyglot Persistence* di dunia kerja. |
| Modul 2 | `nosql-2-m1` | Arsitektur Dokumen BSON MongoDB, tabel pemetaan 6 konsep SQL vs MongoDB (Table -> Collection, Row -> Document, Primary Key -> `_id`), diagram alur siklus query BSON ke WiredTiger Storage Engine, analogi buku paspor fisik, jebakan fatal `updateOne` tanpa operator `$set` yang menimpa dokumen, serta peran Mongoose ODM di Express/NestJS. |
| Modul 3 | `nosql-3-m1` | Strategi Desain Skema Document Store (Embed vs Reference), matriks panduan memilih model data (One-to-Few vs Unbounded One-to-Many), diagram alur Aggregation Pipeline (`$match` -> `$lookup` -> `$group` -> `$sort`), analogi garis perakitan pabrik, anti-pattern *Unbounded Array* yang menembus limit BSON 16 MB, serta pembuatan laporan analitis backend. |
| Modul 4 | `nosql-4-m1` | Arsitektur In-Memory Redis & Single-Threaded Event Loop, tabel komparasi 5 struktur data utama (String, Hash, List, Set, Sorted Set) beserta use case, diagram alur arsitektur *Cache-Aside (Lazy Loading)* API, analogi dapur restoran (*prep station* vs gudang pendingin), jebakan RAM penuh akibat lupa TTL, serta integrasi Redis pada antrean BullMQ & rate limiting API. |

---

## B. Penjelasan step yang diperluas

Sebanyak 12 step dalam track NoSQL & Data Lanjutan sebelumnya tergolong terlalu pendek (1-2 kalimat) dan gagal menjelaskan mekanisme di balik layar. Seluruh 25 step kini telah diperluas memenuhi standar kualitas minimal 4 kalimat / 350 karakter, mencakup struktur penjelasan:
- **APA** yang sedang dibuat dan mekanismenya di balik layar.
- **KENAPA** fitur tersebut dibutuhkan dibanding metode konvensional/SQL.
- **KAPAN** harus dipakai dan kapan harus dihindari.
- **JEBAKAN** umum yang sering membuat query lambat (*COLLSCAN*) atau merusak dokumen.

---

## C. Kuis ber-tipe Pilihan Ganda & Berpenjelasan

Setiap modul dilengkapi kuis 5 soal pilihan ganda berstruktur (total 20 soal kuis) yang menguji pemahaman konsep krusial seperti:
- Trade-off Teorema CAP (Consistency, Availability, Partition Tolerance).
- Peran operator `$set`, `$inc`, dan `$push` pada update dokumen MongoDB.
- Penggunaan Projection `{ name: 1, _id: 0 }` untuk menghemat bandwidth memori.
- Batas maksimal ukuran satu dokumen BSON MongoDB (16 MB).
- Penggunaan stage `$match` sedini mungkin untuk memangkas memori di Aggregation Pipeline.
- Penggunaan perintah `SETEX` pada Redis untuk menyimpan kunci sekaligus memasang TTL.
- Perbedaan peruntukan Redis sebagai cache/sesi vs database utama.

---

## D. Tabel Bukti Verifikasi & Pengujian

Seluruh perbaikan telah diverifikasi dengan angka konkret menggunakan skrip otomatis:

| Jenis Pengujian | Perintah / Skrip | Hasil | Status |
|---|---|---|---|
| **Verifikasi Konten BiLearn** | `npx tsx scripts/verify-konten.ts` | **0 Masalah** pada `nosql` (4 materi, 25 step, 4 kuis) | ✅ BERSIH |
| **Pemeriksaan Tipe TypeScript** | `npx tsc --noEmit` | **0 Error** tipe data di seluruh repositori | ✅ BERSIH |
| **Pemeriksaan Linter ESLint** | `npx eslint src scripts` | **0 Warning / Error** | ✅ BERSIH |
| **Uji Regex & Eksekusi Kode** | `npx tsx /tmp/test-nosql-verification.ts` | **25 / 25 Step Lolos** tes regex solusi & starterCode | ✅ BERSIH |

### Catatan Pengujian Build & Batasan Sandbox

> [!NOTE]
> Perintah verifikasi otomatis `verify:konten`, `tsc --noEmit`, dan `eslint` berjalan **100% bersih tanpa error** pada track NoSQL & Data Lanjutan.
> Mengenai pengujian `npm run build`: Lingkungan sandbox Linux yang digunakan saat ini tidak memiliki pustaka SWC native pendukung kompilasi Next.js untuk arsitektur ini. Sesuai panduan `AGENTS.md`, pembatasan ini dicatat secara jujur tanpa mengklaim build passed di sandbox. Pengujian tipe data TypeScript (`tsc`) dan linting (`eslint`) memastikan kode data track NoSQL & Data Lanjutan sepenuhnya valid dan bebas kesalahan sintaks.
