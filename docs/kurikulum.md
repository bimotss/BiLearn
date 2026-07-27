# Kurikulum BiLearn — Desain v1

Prinsip: **setiap teknologi = track terpisah, lengkap dari nol sampai mahir**, gaya freeCodeCamp — praktek di setiap langkah, teori seminimal mungkin. Semua keputusan konten berbasis `riset-pasar-kerja.md`.

## Model Akses: Semua Terbuka

Tidak ada gembok/lock. Semua track dan semua materi bisa diakses siapa pun kapan pun. "Prasyarat" di tiap track hanya **rekomendasi** yang ditampilkan sebagai saran ("Sebaiknya selesaikan JavaScript dulu"), bukan penghalang. Progress tetap dicatat per track.

## Format Standar Setiap Track (Ronde 2: Pendalaman)

- **Modul 1: Persiapan & Instalasi** → Modul wajib di setiap awal track yang menjelaskan aplikasi yang dibutuhkan, panduan instalasi per OS, cara verifikasi, dan alternatif online.
- **Materi (Halaman Baca Pembuka)** → Setiap modul latihan diawali 1–2 halaman materi tanpa editor kode yang membahas pengertian dari nol, use case wajib ("dipakai ketika/agar..."), dan analogi dunia nyata.
- **Step Interaktif** → Challenge interaktif kecil (langsung ngoding / mencoba sintaks) yang selalu dilengkapi dengan contoh kerja konkret (`example`) dan penjelasan detail (minimal 4 kalimat / 350 karakter).
- **Kuis (5–7 soal pilihan ganda)** → Berada di akhir modul dengan pertanyaan berbasis skenario/use case. Setelah menjawab, kunci jawaban dan penjelasan KENAPA langsung ditampilkan.
- **Lab & Proyek sertifikasi** → Proyek besar di akhir track untuk mendapatkan badge sertifikasi.
- Istilah teknis tetap bahasa Inggris, penjelasan bahasa Indonesia ramah pemula.

### Format Soal Kuis (standar Ronde 2)

```yaml
tipe: pilihan-ganda     # WAJIB pilihan-ganda (5–7 soal per kuis)
pertanyaan: "Skenario kerja / use case..."
kode: |                 # opsional
  console.log([1,2,3].map(x => x * 2))
pilihan: [...]          # array string pilihan jawaban
jawaban: index          # index pilihan jawaban benar (0-indexed)
penjelasan: "Penjelasan detail KENAPA benar dan kenapa pilihan lain menggoda"
```

## Learning Paths (lapisan di atas track)

Track tetap terpisah dan berdiri sendiri. **Learning path hanya menyusun urutan track sesuai tujuan karier user.** Saat user memilih tujuan (misal "Frontend Developer"), platform menampilkan urutan track yang direkomendasikan + progress gabungan. Tanpa pilihan path, halaman utama menampilkan **semua track dalam urutan default** (nomor 1–15).

| Path | Urutan track |
|---|---|
| **Frontend Developer** | HTML → CSS → JavaScript → Git → TypeScript → React → Next.js → AI Dev |
| **Backend Developer (Laravel)** | HTML → CSS dasar → JS dasar → Git → SQL → PHP & Laravel → Deploy → AI Dev |
| **Backend Developer (Node)** | HTML → JS → Git → TypeScript → SQL → Node/Express → NoSQL → Deploy → AI Dev |
| **Full-Stack JS** | HTML → CSS → JS → Git → TS → React → Next.js → SQL → Node → Deploy → AI Dev |
| **Data Analyst** | Spreadsheet → SQL → Python → Analisis Data & Visualisasi → AI Dev |

Path bisa ditinggalkan/diganti kapan saja — progress track tidak hilang karena melekat di track, bukan di path.

```
 FONDASI            FRONTEND              BACKEND (pilih/keduanya)   DATA & OPS
 ┌──────────┐       ┌────────────┐        ┌─────────────────┐        ┌──────────────┐
 │ 1. HTML  │──►    │ 5. TypeScript│──►   │ 8a. Laravel     │        │ 9. SQL       │
 │ 2. CSS   │──►    │ 6. React     │──►   │ 8b. Node/Express│──►     │ 10. NoSQL+   │
 │ 3. JS    │──►    │ 7. Next.js   │      └─────────────────┘        │ 11. Deploy   │
 │ 4. Git   │       └────────────┘                                   │ 12. AI Dev   │
 └──────────┘       DATA ANALYST: 13. Spreadsheet │ 14. Python │ 15. Analisis Data
```

---

## Track 1 — HTML (≈40 jam, ~180 step)

Prasyarat: tidak ada. Track pertama untuk pemula total.

| Modul | Isi | Step |
|---|---|---|
| 1. Dasar dokumen | Struktur HTML, elemen, atribut, teks, list, link, gambar | 30 |
| 2. Struktur halaman | Semantic HTML (header/nav/main/article/footer), kenapa penting untuk SEO & kerja nyata | 25 |
| 3. Tabel & media | Table, audio, video, iframe, figure | 20 |
| 4. Formulir | Input types, label, validasi bawaan, select, textarea — fondasi semua aplikasi | 35 |
| 5. Aksesibilitas (a11y) | ARIA dasar, alt text, kontras, keyboard nav — sering ditanya interview | 25 |
| 6. HTML untuk dunia kerja | Meta tags, Open Graph, favicon, struktur proyek nyata | 15 |

Lab per modul + **Proyek sertifikasi:** halaman profil, formulir pendaftaran multi-bagian, halaman dokumentasi produk, landing page semantik lengkap.

## Track 2 — CSS (≈70 jam, ~280 step)

Prasyarat: HTML.

| Modul | Isi | Step |
|---|---|---|
| 1. Dasar styling | Selector, specificity, warna, unit, box model | 35 |
| 2. Layout klasik | Display, position, float (cukup untuk baca kode lama) | 25 |
| 3. Flexbox | Tuntas, karena muncul eksplisit di lowongan | 30 |
| 4. Grid | Tuntas, idem | 30 |
| 5. Responsive design | Media queries, mobile-first, container queries | 30 |
| 6. Tipografi & visual | Font, shadow, gradient, transition, animation | 30 |
| 7. CSS modern | Custom properties, nesting, :has(), layers | 25 |
| 8. Tailwind CSS | Utility-first workflow — requirement lowongan | 40 |
| 9. Figma → CSS | Baca file desain, terjemahkan ke UI pixel-perfect | 20 |

**Proyek sertifikasi:** replika landing page dari file Figma, dashboard responsif, galeri animasi, clone UI aplikasi populer (Tailwind).

## Track 3 — JavaScript (≈120 jam, ~450 step)

Prasyarat: HTML, CSS dasar. Track terpanjang — inti segalanya.

| Modul | Isi | Step |
|---|---|---|
| 1. Dasar | Variabel, tipe data, operator, kondisi, loop | 50 |
| 2. Fungsi | Deklarasi, arrow, scope, closure | 40 |
| 3. Struktur data | Array + method (map/filter/reduce), object, destructuring | 55 |
| 4. DOM | Seleksi, manipulasi, event, form handling | 50 |
| 5. ES6+ modern | Modules, spread, template literals, optional chaining | 35 |
| 6. Asynchronous | Callback, Promise, async/await, fetch + REST API nyata | 50 |
| 7. Error & debugging | try/catch, DevTools, baca stack trace — skill kerja yang jarang diajarkan | 30 |
| 8. OOP & FP dasar | Class, prototype, immutability | 35 |
| 9. Browser API | localStorage, URL, timer, intersection observer | 25 |
| 10. Testing dasar | Unit test dengan Vitest — pembeda di interview junior | 30 |

**Proyek sertifikasi:** kalkulator, aplikasi todo dengan localStorage, konsumsi API publik (cuaca/film), quiz game, clone fitur nyata (infinite scroll / autocomplete).

## Track 4 — Git & GitHub (≈25 jam, ~90 step)

Prasyarat: tidak ada. Bisa diambil paralel sejak awal. **Diferensiasi BiLearn: simulasi PR-based workflow seperti requirement lowongan.**

Modul: dasar (init/add/commit/log) → branching & merge → remote & GitHub → **alur kerja tim: fork, PR, code review, resolve conflict (disimulasikan di platform)** → git untuk keadaan darurat (revert, reset, reflog, stash).

**Proyek sertifikasi:** kontribusi ke repo simulasi — ambil "tiket", bikin branch, buka PR, respons review, merge.

## Track 5 — TypeScript (≈40 jam, ~150 step)

Prasyarat: JavaScript. Wajib sebelum React/Next — TS sudah jadi standar lowongan.

Modul: tipe dasar & inference → function & object types → union, narrowing, literal types → generics → utility types → TS di proyek nyata (config, migrasi file JS, baca error TS yang menyeramkan).

**Proyek sertifikasi:** migrasi proyek JS ke TS, library kecil fully-typed, konsumsi API dengan tipe respons.

## Track 6 — React (≈80 jam, ~300 step)

Prasyarat: JS, TS.

Modul: komponen & JSX → props & komposisi → state & event → list, form (controlled) → useEffect & lifecycle → custom hooks → context → data fetching + loading/error states → React Router → state management ringan (Zustand) → testing komponen → pola dunia kerja (struktur folder, komposisi vs prop-drilling).

**Proyek sertifikasi:** aplikasi CRUD lengkap, clone UI dari Figma, dashboard dengan API nyata, aplikasi multi-halaman dengan auth flow (mock).

## Track 7 — Next.js (≈60 jam, ~200 step)

Prasyarat: React.

Modul: App Router, halaman & layout → server vs client components → data fetching & caching → route handlers (API) → form & server actions → auth → optimasi (image, font, metadata/SEO) → deploy ke Vercel.

**Proyek sertifikasi:** blog dengan CMS, e-commerce mini (katalog + cart + checkout mock), aplikasi full-stack dengan database.

## Track 8a — PHP & Laravel (≈100 jam, ~350 step)

Prasyarat: HTML, CSS, JS dasar, Git, SQL dasar (Track 9 modul 1–3). **Jalur tercepat ke pekerjaan lokal** — Laravel mendominasi lowongan Indonesia.

| Modul | Isi |
|---|---|
| 1. PHP dasar | Sintaks, tipe, array, fungsi — dari nol |
| 2. PHP OOP | Class, interface, trait, namespace, Composer |
| 3. Laravel fundamental | Routing, controller, Blade, request/response |
| 4. Eloquent & database | Model, migration, relasi, seeder |
| 5. Form & validasi | Validation, error handling, file upload |
| 6. Auth & otorisasi | Breeze, gate, policy, middleware |
| 7. API dengan Laravel | Resource, sanctum, REST API untuk frontend |
| 8. Fitur produksi | Queue, cache, mail, task scheduling |
| 9. Testing | PHPUnit/Pest — feature & unit test |

**Proyek sertifikasi:** sistem manajemen konten, REST API untuk aplikasi React/Next, aplikasi kasir/inventori (kasus UMKM Indonesia — relevan portofolio lokal).

## Track 8b — Node.js & Express (≈70 jam, ~250 step)

Prasyarat: JS, TS, Git. Jalur startup & remote.

Modul: Node runtime & npm → Express dasar (routing, middleware) → REST API design → koneksi database (Prisma) → auth (JWT, session) → validasi & error handling → file upload & email → testing API → keamanan dasar (CORS, rate limit, sanitasi).

**Proyek sertifikasi:** REST API lengkap dengan auth + dokumentasi, backend untuk proyek Next.js, API real-time sederhana (WebSocket).

## Track 9 — Database & SQL (≈90 jam, ~320 step)

Prasyarat: tidak ada (bisa mulai kapan saja). **SQL murni dulu, ORM belakangan** — sesuai temuan riset.

**Keputusan struktur:** MySQL dan PostgreSQL berada di dalam track ini, bukan track terpisah. Alasannya: 5 modul pertama (SELECT, JOIN, agregasi, DML, desain skema) berlaku untuk keduanya — memecahnya berarti mengajarkan JOIN dua kali dan memaksa user memilih vendor sebelum ia paham bedanya. Setelah fondasi, masing-masing dapat modul fundamental + modul performa/operasional sendiri.

| Modul | Isi | Bab |
|---|---|---|
| 1. Konsep & SELECT | Tabel, query dasar, filter, sort | 7 |
| 2. Relasi & JOIN | PK/FK, semua jenis join — materi interview paling sering | 7 |
| 3. Agregasi | GROUP BY, HAVING, subquery, CTE | 7 |
| 4. Data manipulation | INSERT/UPDATE/DELETE, transaksi | 7 |
| 5. Desain skema | Normalisasi, ERD, index & performa | 7 |
| 6. **PostgreSQL: Fundamental** | psql, JSONB + index GIN, IDENTITY vs SERIAL, full-text search, RLS, schema | 9 |
| 7. **MySQL: Fundamental** | MySQL vs MariaDB, InnoDB, utf8mb4, DATETIME vs TIMESTAMP, tipe JSON + generated column | 9 |
| 8. **PostgreSQL: Performa & Operasional** | EXPLAIN ANALYZE, jenis index (GIN/GiST/BRIN/partial), window & recursive CTE, VACUUM & bloat, isolation level, pg_dump + latihan restore, PgBouncer | 11 |
| 9. **MySQL: Performa & Operasional** | EXPLAIN, clustered index InnoDB, covering & prefix index, sql_mode strict, slow query log, locking, mysqldump + restore, replikasi dasar, MySQL 8.4 LTS vs versi hosting lama | 11 |
| 10. **Memilih & Migrasi antar Database** | Peta perbedaan sintaks, kapan pilih MySQL vs PostgreSQL, strategi & jebakan migrasi, menulis SQL portabel | 9 |
| 11. SQL di aplikasi | Koneksi dari Node/Laravel, ORM vs raw, N+1 problem | 6 |

**Proyek sertifikasi:** desain skema e-commerce dari nol, analisis dataset nyata dengan SQL, optimasi query lambat (wajib menyertakan output EXPLAIN sebelum dan sesudah), dan migrasi satu skema kecil dari MySQL ke PostgreSQL.

**Catatan data:** PostgreSQL memimpin secara global (58,2% pemakaian, Stack Overflow Survey 2025) dan versi stabilnya kini seri 18; MySQL tetap dominan di lowongan Laravel dan hosting Indonesia dengan 8.4 sebagai rilis LTS. Karena itu keduanya diajarkan setara, bukan salah satu saja.

## Track 10 — NoSQL & Data Lanjutan (≈30 jam, ~100 step)

Prasyarat: Track 9. MongoDB (dokumen, CRUD, agregasi, kapan pakai vs SQL) + Redis (caching, session, use case nyata). Sesuai permintaan lowongan full-stack Indonesia + tren Redis global.

## Track 11 — Deployment & Docker (≈35 jam, ~120 step)

Prasyarat: salah satu track backend. Docker hampir universal (+17 poin dalam setahun).

Modul: Linux & terminal dasar → Docker (image, container, compose) → environment & secrets → deploy VPS (nginx, SSL) → deploy platform (Vercel/Railway) → CI/CD dasar dengan GitHub Actions → monitoring & log dasar.

**Proyek sertifikasi:** containerize + deploy aplikasi full-stack milik sendiri, pipeline CI/CD yang menjalankan test otomatis.

## Track 12 — AI-Assisted Development (≈20 jam, ~60 step)

Prasyarat: JS + satu track framework. **Diferensiasi BiLearn** — lowongan yang mensyaratkan AI tools naik 340%.

Modul: cara kerja & batas LLM → prompting untuk kode → workflow dengan Copilot/Claude/Cursor → **review kode hasil AI (menemukan bug yang dihasilkan AI — latihan inti)** → AI untuk debugging & refactoring → etika & kapan tidak pakai AI.

**Proyek sertifikasi:** selesaikan fitur dengan AI lalu pertahankan setiap baris di "code review", perbaiki codebase ber-bug hasil AI.

## Track 13 — Spreadsheet & Excel untuk Analisis (≈25 jam, ~100 step)

Prasyarat: tidak ada. Pintu masuk paling ramah untuk path Data Analyst — Excel tetap andalan ad-hoc analysis & reporting di lowongan Indonesia.

Modul: dasar spreadsheet (formula, referensi sel) → fungsi analisis (IF, VLOOKUP/XLOOKUP, SUMIFS) → pembersihan data → pivot table → chart & dashboard sederhana → studi kasus bisnis nyata (penjualan, keuangan UMKM).

**Proyek sertifikasi:** dashboard penjualan dari data mentah berantakan, laporan bulanan otomatis.

## Track 14 — Python (≈80 jam, ~300 step)

Prasyarat: tidak ada (bisa jadi bahasa pertama untuk jalur data). Hampir semua lowongan data mensyaratkan Python.

Modul: dasar (variabel, kondisi, loop) → struktur data (list, dict, set) → fungsi & module → file & error handling → OOP dasar → virtual env & pip → Python untuk otomasi (baca file Excel/CSV, scraping dasar) → pengantar pandas.

**Proyek sertifikasi:** otomasi laporan dari banyak file CSV, scraper data publik sederhana, CLI tool.

## Track 15 — Analisis Data & Visualisasi (≈70 jam, ~250 step)

Prasyarat: Python, SQL (Track 9 modul 1–4).

| Modul | Isi |
|---|---|
| 1. pandas tuntas | DataFrame, filter, groupby, merge, cleaning |
| 2. Statistik praktis | Deskriptif, distribusi, korelasi, A/B test dasar — tanpa matematika berat |
| 3. Visualisasi | matplotlib/seaborn, prinsip chart yang jujur |
| 4. BI tools | Looker Studio (gratis) + pengenalan Tableau/Power BI |
| 5. Data storytelling | Menyusun insight untuk stakeholder non-teknis — skill yang makin diminta lowongan |
| 6. Studi kasus end-to-end | Data mentah → cleaning → analisis → dashboard → presentasi |

**Proyek sertifikasi:** analisis dataset publik Indonesia (BPS/Kaggle) end-to-end, dashboard interaktif, laporan insight bisnis dengan rekomendasi.

---

## Estimasi Total

| Jalur | Track | Total jam |
|---|---|---|
| Frontend Developer | 1,2,3,4,5,6,7,12 | ~455 jam |
| Backend Laravel | 1,2,3,4,8a,9,11,12 | ~510 jam |
| Full-Stack JS | 1–7, 8b, 9, 11, 12 | ~670 jam |
| Data Analyst | 13, 9, 14, 15, 12 | ~285 jam |

(fCC full-stack ≈1.800 jam; estimasi ini realistis untuk pemula dengan 2–3 jam/hari selama 6–12 bulan per jalur.)

## Prioritas Pembangunan Konten (MVP)

1. **Track 1 HTML** — penuh (validasi konsep platform dengan track terpendek)
2. **Track 2 CSS** — penuh
3. **Track 4 Git** — modul 1–3 dulu
4. Track 3 JS → dan seterusnya mengikuti urutan peta

## Backlog Riset

- Scraping lowongan Glints/Jobstreet berkala → data "skill X muncul di Y% lowongan" untuk ditampilkan di tiap track
- Validasi Laravel vs Node dengan hitungan lowongan aktual, bukan klaim blog
- Interview 5–10 hiring manager lokal untuk validasi proyek sertifikasi
