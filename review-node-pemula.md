# Review Track Node.js & Express — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Track sekarang: **9 modul, 9 materi, 56 step, 9 kuis (45 soal)**, dan `verify:konten` bersih 100% untuk track ini.

Berkas: `src/data/tracks/node-express.ts` (saat direview awal: 9 modul, 56 step, 9 kuis, **0 materi**, 55 penjelasan terlalu pendek).

Cara baca: aku membaca track ini sebagai pembaca yang baru saja menyelesaikan track JavaScript dan TypeScript — paham fungsi, Promise, `async/await`, dan pengetikan tipe data, namun **belum pernah membuat server HTTP backend, belum paham alur Request-Response, belum mengerti konsep middleware, belum pernah menghubungkan database dengan ORM Prisma, dan belum mengerti keamanan backend (OWASP)**.

---

## A. Yang bikin macet sejak menit pertama

### A1. Nol halaman `materi` di seluruh sembilan modul

Sebelum perbaikan, track Node.js & Express langsung menyuruh pengguna menulis perintah tanpa memberikan gambaran mental bagaimana JavaScript bisa berjalan di luar peramban web (browser). Pembaca yang belum pernah membuat server backend akan kebingungan mengapa `document` atau `window` mendadak tidak ada, atau mengapa request server bisa menggantung (*hanging*) selamanya jika lupa memanggil `next()`.

Sembilan halaman materi baru kini mengisi fondasi mental yang hilang sebelum step pertama dimulai:

| Materi | ID | Peta mental & fondasi yang diberikan |
|---|---|---|
| Modul 1 | `node-1-m1` | Pengenalan Node.js Runtime (V8 + libuv), perbandingan 5 dimensi Browser vs Node.js, model mental Non-Blocking Asynchronous I/O & Event Loop, analogi pelayan restoran, pengenalan Stream & EventEmitter, jebakan `window`/`document` di server, serta kaitan ke dunia kerja. |
| Modul 2 | `node-2-m1` | Arsitektur Server Express.js, diagram alur siklus Request-Response (Req-Res Lifecycle), 3 parameter handler (`req`, `res`, `next`), tabel HTTP Methods & `req` properti, analogi pos pemeriksaan bandara, pemisahan rute modular dengan `express.Router()`, serta 4 jebakan umum middleware. |
| Modul 3 | `node-3-m1` | Prinsip Arsitektur Desain REST API, aturan emas penamaan resource Kata Benda Jamak (`/api/v1/users`), tabel rujukan 8 Status Code HTTP semantik, konsep Idempotency pada HTTP Method (`PUT` vs `POST`), standar struktur JSON Response (`success`, `data`, `meta`), serta pentingnya API versioning. |
| Modul 4 | `node-4-m1` | Integrasi Database PostgreSQL & ORM Prisma, diagram alur `schema.prisma` -> `migrate` -> `Prisma Client`, tabel perbandingan Prisma Query vs SQL Mentah, Pola Arsitektur Repository (Data Access Isolation), visualisasi Prisma Studio & Seeding, serta penanganan masalah N+1 query. |
| Modul 5 | `node-5-m1` | Strategi Autentikasi & Otorisasi, prinsip Hashing Password 1 arah (`bcrypt`), diagram alur JWT (Stateless Token), tabel perbandingan 5 dimensi JWT vs Stateful Session Cookie, pengamanan `httpOnly` & `sameSite` cookie, Role-Based Access Control (RBAC), serta alur pembatalan token saat logout. |
| Modul 6 | `node-6-m1` | Validasi Schema Input (Zod) & Handling Error Terpusat, diagram alur middleware error 4-parameter `(err, req, res, next)`, perbandingan Operational Error vs Programming Error, pengenalan `AppError` kustom & Pino JSON Logger terstruktur, serta sanitasi stacktrace di lingkungan produksi. |
| Modul 7 | `node-7-m1` | Penanganan File Upload & Background Worker, tabel komparasi Local Disk Ephemeral vs Cloud Object Storage (AWS S3 / R2), diagram arsitektur antrean pekerjaan latar belakang BullMQ + Redis, pengolahan multipart dengan Multer, serta pengiriman email terprogram via Nodemailer. |
| Modul 8 | `node-8-m1` | Strategi Testing Integration API, tabel perbandingan Unit Test vs Integration Test, diagram alur pengujian Supertest + Vitest, isolasi database penguji (`mydb_test`) & pembersihan `beforeEach`, pengujian alur Bearer Token auth, serta filosofi code coverage yang bermakna. |
| Modul 9 | `node-9-m1` | Keamanan Backend & Hardening OWASP Top 10, tabel kerentanan utama (SQL Injection, XSS, Brute Force, CORS, Secret Leakage) beserta solusinya, diagram urutan middleware keamanan Express (Helmet -> Rate Limit -> CORS -> Zod), serta checklist keamanan pre-deploy produksi. |

---

## B. Penjelasan step yang diperluas

Sebanyak 55 step dalam track Node.js & Express sebelumnya tergolong pendek (1-2 kalimat) dan gagal menjelaskan latar belakang "kenapa" dan "apa jebakannya". Seluruh 55 step kini telah diperluas memenuhi standar kualitas minimal 4 kalimat / 350 karakter, mencakup pembahasan:
- **APA** yang sedang dibuat dan mekanismenya di balik layar.
- **KENAPA** fitur tersebut dibutuhkan dibanding metode konvensional.
- **KAPAN** harus dipakai dan kapan harus dihindari.
- **JEBAKAN** umum yang sering membuat aplikasi crash atau bocor secara keamanan.

---

## C. Kuis ber-tipe Pilihan Ganda & Berpenjelasan

Setiap modul kini dilengkapi kuis 5 soal pilihan ganda berstruktur (total 45 soal kuis) yang menguji pemahaman konsep krusial seperti:
- Objek `process.env` untuk membaca variabel lingkungan.
- Peran fungsi `next()` di dalam middleware Express.
- Perbedaan semantik HTTP Method `PUT` dan `PATCH`.
- Penggunaan `prisma.$transaction()` untuk menjamin konsistensi transaksi ACID.
- Keunggulan opsi cookie `httpOnly: true` dari ancaman skrip XSS.
- Penggunaan middleware error 4 parameter `(err, req, res, next)`.
- Penggunaan antrean background BullMQ + Redis untuk tugas berat.

---

## D. Tabel Bukti Verifikasi & Pengujian

Seluruh perbaikan telah diverifikasi dengan angka konkret menggunakan skrip otomatis:

| Jenis Pengujian | Perintah / Skrip | Hasil | Status |
|---|---|---|---|
| **Verifikasi Konten BiLearn** | `npx tsx scripts/verify-konten.ts` | **0 Masalah** pada `node-express` (9 materi, 56 step, 9 kuis) | ✅ BERSIH |
| **Pemeriksaan Tipe TypeScript** | `npx tsc --noEmit` | **0 Error** tipe data di seluruh repositori | ✅ BERSIH |
| **Pemeriksaan Linter ESLint** | `npx eslint src scripts` | **0 Warning / Error** | ✅ BERSIH |
| **Uji Regex & Eksekusi Kode** | `node /tmp/test-node-track-verification.ts` | **56 / 56 Step Lolos** tes regex solusi & starterCode | ✅ BERSIH |

### Catatan Pengujian Build & Batasan Sandbox

> [!NOTE]
> Perintah verifikasi otomatis `verify:konten`, `tsc --noEmit`, dan `eslint` berjalan **100% bersih tanpa error** pada track Node.js & Express.
> Mengenai pengujian `npm run build`: Lingkungan sandbox Linux yang digunakan saat ini tidak memiliki pustaka SWC native pendukung kompilasi Next.js untuk arsitektur ini. Sesuai panduan `AGENTS.md`, pembatasan ini dicatat secara jujur tanpa mengklaim build passed di sandbox. Pengujian tipe data TypeScript (`tsc`) dan linting (`eslint`) memastikan kode data track Node.js & Express sepenuhnya valid dan bebas kesalahan sintaks.
