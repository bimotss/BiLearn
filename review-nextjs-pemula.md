# Review Track Next.js — Sudut Pandang Pemula Total

> **STATUS: DIPERIKSA ULANG & DIPERBAIKI (29 Juli 2026, Ronde 5).** Track sekarang: **8 modul, 9 materi, 50 step, 8 kuis (47 soal)**, `verify:konten` bersih, `audit:lanjutan` 0 temuan. **58 dari 67 item diubah.**

Berkas: `src/data/tracks/nextjs.ts`. Cara baca: aku membaca seluruh track ini sebagai orang yang baru menyelesaikan track React — jadi paham komponen, props, state, dan `useEffect`, tapi **belum pernah menjalankan kode React di server**, belum pernah melihat terminal Next.js, dan belum tahu bahwa satu berkas bisa berjalan di dua tempat berbeda.

Ronde sebelumnya sudah menyentuh track ini (lihat lampiran di bagian J): materi ditambahkan, semua explanation diperpanjang, kuis dijadikan 5 soal, lalu Ronde 4 memperbaiki 2 instruksi dan menambah 34 catatan preview. Ronde 5 membaca **setiap item satu per satu** dan menemukan bahwa perbaikan itu berhenti di permukaan: bentuknya sudah memenuhi aturan, isinya masih menyesatkan di banyak tempat.

---

## A. Temuan paling serius: cara memverifikasi yang selama ini menipu

Ini bukan temuan konten, tapi harus ditulis pertama karena membuat semua angka "bersih" sebelumnya patut dicurigai.

Instruksi serah terima menyuruh menjalankan verifikasi begini:

```bash
npx tsc scripts/verify-konten.ts --outDir /tmp/v ...
node /tmp/v/scripts/verify-konten.js
```

Masalahnya: `tsc` ikut mengompilasi **seluruh `src/data/tracks/*.ts`** ke `/tmp/v`, jadi `/tmp/v` menyimpan **salinan beku** isi konten. Di sandbox ini `/tmp/v` sudah ada dan dimiliki user lain (`nobody`), sehingga:

- `rm -rf /tmp/v` → `Permission denied`
- `tsc` gagal menimpa berkasnya — **tanpa gejala**, karena pesannya hanya ke stderr yang biasa dibuang
- `node /tmp/v/scripts/verify-konten.js` tetap berjalan dan tetap melaporkan **✅ bersih**, dari snapshot pukul 09.20

Aku baru sadar karena kebetulan menulis satu step yang `solution`-nya gagal tesnya sendiri, dan verifier tetap menyatakan Next.js bersih. Dibuktikan langsung:

```
tests di berkas terkompilasi: [ 'export\s+function\s+reportWebVitals\s*\(\s*metric\s*\)', ... ]   <-- pola LAMA
grep -c "useReportWebVitals" /tmp/v/src/data/tracks/nextjs.js   ->   0
```

Sejak itu skrip verifikasi kujalankan lewat `mktemp -d`, dengan dua penjagaan: berhenti kalau `tsc` tidak menghasilkan berkas, dan memperingatkan kalau snapshot terkompilasi tidak memuat penanda dari konten terbaru. Di Mac masalah ini tidak ada karena `npm run verify:konten` memakai `tsx` yang membaca berkas langsung.

**Akibatnya nyata:** setelah dijalankan dengan direktori bersih, muncul satu pelanggaran yang selama ini tak terlihat — di track lain (bagian G).

---

## B. Kesalahan faktual: lima step mengajarkan kode yang tidak bekerja

Kelas temuan paling mahal, karena kodenya **terlihat benar dan tidak menghasilkan error apa pun** — sekelas dengan temuan "pesan error di starterCode mustahil muncul dari kodenya" di ronde sebelumnya.

### B1. `next-7-5` mengajarkan `reportWebVitals`, API Pages Router

Step "Lighthouse & Core Web Vitals" meminta user menulis `export function reportWebVitals(metric)`. Itu API **Pages Router** (`pages/_app.js`). Di App Router fungsi itu tidak pernah dipanggil: tidak ada error, tidak ada peringatan, tidak satu pun metrik terkirim. Penjelasannya bahkan menyuruh menaruhnya "di berkas root layout atau halaman utama" — tempat yang dijamin tidak berpengaruh.

Sekarang step ini mengajarkan cara App Router: hook `useReportWebVitals` dari `next/web-vitals` di Client Component kecil yang me-`return null`, dipasang sekali di `layout.tsx`. Ditambah tes `mustNotMatch` yang khusus menolak bentuk lama beserta alasannya, `example.output` berisi isi objek `metric` sungguhan beserta batas rating LCP, dan satu soal kuis baru tentang gejalanya ("kodenya benar tapi dashboard analitik kosong").

### B2. `next-8-5` mencampur ESM dan CommonJS dalam satu berkas

`solution` lamanya:

```js
import { withSentryConfig } from '@sentry/nextjs';
const nextConfig = { reactStrictMode: true };
module.exports = withSentryConfig(nextConfig);
```

Berkas ini tidak bisa dijalankan Node mana pun — `SyntaxError: Cannot use import statement outside a module`. Sekarang step-nya konsisten ESM (`export default withSentryConfig(nextConfig)`) memakai `next.config.ts` seperti proyek ini sendiri, `example.code` menampilkan varian CommonJS penuh sebagai pembanding, dan ada tes `mustNotMatch` untuk `module.exports`.

### B3. `next-8-4` memanggil API yang tidak pernah ada

`solution` lamanya `await dns.setRecord(domain, 'CNAME', cname);` — `dns.setRecord` bukan API Node, bukan API Vercel, bukan apa pun. Menghubungkan domain dilakukan dengan menambah **record di panel DNS**, bukan menulis kode. Step-nya kini menulis dua baris record sungguhan (A record di apex `@`, CNAME di `www`), dengan output berupa keluaran `dig +short` dan `curl -I` beserta header HSTS.

### B4. `next-8-6` mengajarkan hook npm yang tidak pernah berjalan

Tugasnya menambahkan `"predeploy": "npm run build"`, padahal hook `pre<nama>` hanya berjalan sebelum script `<nama>` — dan tidak ada script `deploy` di berkasnya. Yang dilatih adalah baris yang **dijamin tidak pernah dieksekusi**, tanpa peringatan npm. Sekarang user menambahkan `deploy` **dan** `predeploy`, dengan `example.output` memperlihatkan rantai `pretest` yang gagal lalu menghentikan `test`, plus soal kuis khusus jebakan ini.

Bonus di step yang sama: `starterCode` lama menyelipkan komentar `//` **ke dalam JSON**, padahal `package.json` menolak komentar. Sekarang komentarnya hilang dan ada tes `mustNotMatch` untuk `//` dengan pesan `Unexpected token / in JSON`.

### B5. `next-8-1` mengajarkan pola singleton yang tidak bekerja

`solution` lamanya `export const prisma = globalForPrisma.prisma || new PrismaClient();` — tanpa satu baris pun yang **menyimpan** instansinya ke `globalForPrisma`. Artinya sisi kanan selalu `undefined`, setiap hot reload tetap membuka koneksi baru, dan `Too many connections` yang dijanjikan penjelasannya tetap terjadi. Materi modulnya menunjukkan pola lengkap; step-nya justru memotong bagian yang membuatnya bekerja.

Sekarang tesnya tiga — pemakaian ulang (`||` dan `??` sama-sama diterima), penyimpanan balik `globalForPrisma.prisma = prisma`, dan syarat `NODE_ENV !== 'production'` — dengan output berupa log Prisma sungguhan (`Current connection pool: 40/40` vs pesan pool yang muncul sekali).

---

## C. `example.output`: 42 dari 50 step berisi klaim, bukan hasil

Untuk track yang tidak bisa dieksekusi di preview, `example.output` adalah **satu-satunya** cara user melihat hasil (panduan bagian 4c). Di sini 42 di antaranya kalimat manfaat:

| Step | `example.output` sebelumnya |
|---|---|
| `next-2-1` | "Performa render super cepat di browser." |
| `next-2-3` | "Batas arsitektur server-client terawat dengan baik." |
| `next-2-5` | "Ukuran bundle JavaScript di browser tetap minimal." |
| `next-5-1` | "Fungsi dikompilasi sebagai Server Action yang aman di server." |
| `next-7-5` | "Rangking pencarian Google mengutamakan web dengan Vitals baik." |
| `next-8-3` | "Siklus pengujian otomatis yang sangat nyaman bagi tim." |

`verify:konten` tidak menangkapnya karena pendeteksinya mencari kata kunci tertentu (`akan`, `dapat`, `menghemat`, `meningkatkan`, `lebih cepat`, …) pada output pendek. "Performa render super cepat di browser." tidak memuat satu pun kata itu, jadi lolos. Ini celah aturannya, bukan konten yang kebetulan lolos.

Keempat puluh dua diganti keluaran yang benar-benar bisa dilihat orang:

- **pesan error Next.js sungguhan** — `You're importing a component that needs useState. This React hook only works in a Client Component…`, `Functions cannot be passed directly to Client Components…`, `This module cannot be imported from a Client Component module.`
- **tabel `next build`** dengan lambang `○ (Static)` / `ƒ (Dynamic)` dan angka `First Load JS` sebelum–sesudah
- **keluaran `curl -i`** lengkap dengan status & header, termasuk `405 Method Not Allowed` untuk metode yang tidak diekspor
- **HTML hasil render**, termasuk `srcset` yang benar-benar dihasilkan `next/image`
- **log Prisma**, keluaran `dig`, dan isi objek metric Web Vitals

Yang paling berguna bagi pemula ada di `next-2-1`: `console.log` di Server Component muncul di **terminal**, bukan Console DevTools. Tidak ada satu pun step yang mengatakan itu sebelumnya — padahal itu pertanyaan pertama begitu log seseorang "hilang".

---

## D. Tes: 37 dari 50 step hanya punya satu regex, dan regexnya mengunci satu gaya

### D1. Jawaban benar yang ditolak

Diuji dengan skrip pembangkit varian, bukan dibaca:

| Step | Jawaban benar yang ditolak sebelumnya |
|---|---|
| `next-1-4` | `Readonly<{ children: React.ReactNode }>` — **bentuk yang dihasilkan `create-next-app` sendiri** |
| `next-1-5` | `return (<p>Loading...</p>);` dan `const Loading = () => …` — satu regex raksasa menuntut seluruh badan fungsi |
| `next-3-5` | `fallback={ <p>…</p> }` dengan spasi di dalam kurawal |
| `next-4-3` | `new URL(request.url).searchParams.get('search')` — Web API standar, sama benarnya |
| `next-4-6` | `{ headers: …, status: 200 }` — urutan properti ditukar |
| `next-6-3`, `next-6-5` | `if (!session) { redirect('/login'); }` — versi berkurung blok |

Setelah diperbaiki: **159 varian sah** (kutip ganda, tanpa titik-koma, spasi dalam kurawal, indentasi 4 spasi, `if` berkurung, `return` berkurung) diuji terhadap 50 step, **0 ditolak**.

### D2. Dua tes yang memaksa jawaban yang lebih buruk

Lebih parah daripada menolak jawaban benar, karena melatih kebiasaan salah:

- **`next-5-5`** menuntut `useOptimistic(likes, (state, newLike) => state + 1)`. Fungsi penggabung itu **mengabaikan argumennya sendiri**: memicu dengan nilai 5 tetap menambah 1, sehingga tampilan optimistik berbeda dari hasil server. Jawaban yang benar (`state + tambahan`) justru ditolak. Sekarang nama parameter bebas tapi keduanya wajib dipakai, dan jebakannya disebut di penjelasan.
- **`next-6-2`** menuntut `NextAuth({})` — konfigurasi kosong. Build sukses, halaman login terbuka, dan **tidak ada satu pun cara masuk**; konfigurasi realistis ber-`providers` justru ditolak. Sekarang provider wajib, dan outputnya memakai pesan Auth.js sungguhan (`MissingSecret: Please define a secret`).

### D3. Angka tanpa batas kata: `revalidate: 30` juga menerima `300`

Diuji dengan menambah satu digit ke setiap angka di semua `solution`. Enam kasus tetap lolos padahal nilainya salah: `revalidate: 30` menerima `309`, `status: 400` menerima `4009`, begitu juga 401 dan 200. Empat pattern diberi batas `\b`. Dua sisanya dibiarkan karena nilainya memang bebas (`age: 25` yang tidak diperiksa tes apa pun, dan `status: 201` yang sudah ada di starter).

### D4. Pesan tes yang menempelkan jawaban

Ronde 4 melaporkan Next.js **0** untuk kategori ini. Kenyataannya masih 46 tes, misalnya `"Gunakan: import fs from 'fs';"` dan `"Gunakan: const { id } = await params;"` — jawaban utuh satu barisnya. Aturan `audit:lanjutan` melewatkannya karena mensyaratkan pesan memuat **seluruh** `solution`; kalau jawabannya satu baris di dalam solution yang lebih panjang, pesan boleh mengutipnya habis tanpa terdeteksi.

Semua pesan ditulis ulang menjadi petunjuk yang mengajar. Menurut ukuranku sendiri (potongan berurutan ≥12 karakter) angkanya kini 32 — dan **ke-32 itu sudah kubaca satu per satu**: semuanya nama API yang memang harus disebut untuk bisa mengajar (`useFormStatus()`, `request.json()`, `NEXT_PUBLIC_`, `subsets: ['latin']`) atau kutipan yang sengaja menyebut varian yang diterima. Yang benar-benar menempelkan jawaban tinggal satu (`next-2-1`), sudah diperbaiki.

---

## E. Titik-titik aku akan berhenti sebagai pemula

### E1. `next-3-1` menyuruh memakai konstanta yang tidak ada

Instruksinya: "mengunduh data dari konstanta `url`". `starterCode`-nya berisi satu komentar kosong — `url` tidak ada di mana pun. `solution`-nya `const res = await fetch(url);` lalu **membuang `res`** dan me-return `<div>Data</div>`; `res.json()` yang dipakai di contoh tidak pernah muncul. Jadi jawaban resminya merujuk variabel tak terdefinisi dan tidak memakai data yang diambilnya.

Diperbaiki: `URL_API` disediakan di `starterCode`, tugasnya menampilkan `produk.nama`, dan **dua `await`** (fetch dan `.json()`) masing-masing punya tes dengan pesan yang menyebut gejala kalau yang kedua lupa: `<h1>[object Promise]</h1>`.

### E2. Dua step menyuruh mengembalikan array kosong

`next-3-6` (`generateStaticParams`) dan `next-7-4` (`sitemap`) sama-sama menyuruh `return []`. Keduanya build sukses dan **tidak menghasilkan apa pun**: nol halaman di-prerender, nol URL di sitemap. Yang dilatih justru bentuk kosong dari fitur yang intinya ada di isinya. Sekarang keduanya memetakan daftar yang disediakan (`SLUG_POPULER`, `HALAMAN`), dengan tes `mustNotMatch` untuk `return []`.

### E3. `next-4-4` menyuruh "lengkapi" potongan tanpa konteks

`starterCode`-nya hanya `if (!result.success) { }` — `result`, `schema`, `body`, `z`, dan `NextResponse` tidak pernah ada. Ini kelas cacat yang sama dengan 12 step SQL yang diperbaiki Ronde 4, hanya belum diperiksa di track ini. Instruksinya bahkan memuat jawaban utuh.

Sekarang `starterCode` berisi handler `POST` utuh dengan skema Zod dan `safeParse`, sehingga "menambahkan penjagaan" punya arti. Ditambah tes keempat untuk `return` — sebab tanpa `return`, eksekusi lanjut ke baris penyimpanan dan **data tidak sah tetap masuk database** meski respons 400 sudah dibuat. Sekarang ada soal kuisnya juga.

### E4. `next-4-1` mengajarkan kode yang error kalau ditempel ke berkas sungguhan

`solution`-nya memakai `NextResponse.json(...)` **tanpa mengimpornya**, padahal penjelasannya menegaskan pembungkus itu wajib — dan step berikutnya justru sudah menyediakan impornya. Sekarang konsisten.

### E5. Dua `starterCode` berakhir dengan tanda sama dengan

`next-5-2` dan `next-5-5` berisi baris `const [state, formAction, isPending] = ` — potongan yang bukan kode. Lebih jauh, `solution` keduanya adalah komponen yang **tidak me-return apa pun**, jadi "form" dan "tombol like" yang dibicarakan tidak pernah ada. Keduanya kini komponen utuh berisi `<form>` dan `<button>` sungguhan.

### E6. Judul step tidak nyambung dengan tugasnya

`next-1-1` berjudul "Kenapa Next.js?" tapi tugasnya menulis `export const metadata` — bab resminya ada di modul 7. Lebih buruk: `example.code`-nya **identik dengan jawabannya** kecuali satu baris baru, jadi tugasnya menyalin. Sekarang judulnya menyebut yang benar-benar dilatih, contohnya memakai kasus lain (`layout.tsx` blog dengan `description`), outputnya View Source sungguhan, dan penjelasannya menyebut jebakan bahwa `metadata` **diabaikan** di berkas ber-`'use client'`.

### E7. Kuis modul 1 dan modul 2 saling bertukar soal

Kuis modul 1 (App Router) memuat soal **Server Components** — materi modul 2. Kuis modul 2 memuat soal **`layout.tsx`** dan **dynamic route `[id]`** — materi modul 1. Jadi dua kuis pertama menguji hal yang belum diajarkan, lalu mengulang hal yang sudah lewat.

Soalnya dipindahkan ke modul yang benar, dan celahnya diisi soal baru untuk bab yang belum pernah diuji: `template.tsx` vs `layout.tsx` (lewat gejala "teks pencarian di sidebar hilang"), akibat `<a>` untuk navigasi internal, `index.tsx` yang tidak menghasilkan route, props non-serializable, dan `'use client'` di root layout. Kuis modul 6 punya dua soal yang praktis sama (di mana menyimpan sesi / atribut apa yang mencegah `document.cookie`) — satu diganti soal pencabutan akses session-vs-JWT, sekaligus menutup bab "menyimpan user di database". Total soal: 40 → 47.

---

## F. Kejujuran soal preview, dan `language` yang tidak konsisten

14 step belum mengatakan bahwa panel preview tidak menjalankan Next.js (aturan Ronde 3), termasuk seluruh step `language: "jsx"`. Semuanya sekarang punya catatan.

Lebih dari itu, `language`-nya tidak konsisten: kode yang setara diberi `"text"` di satu step dan `"jsx"` di step lain. Aku memutuskan aturannya begini, lalu mengujinya dengan meniru `StepView.tsx` (buang import/export → kompilasi TS/JSX → cari komponen berhuruf kapital terakhir):

| Isi step | `language` | Alasan |
|---|---|---|
| Komponen **sinkron** utuh (`next-1-2`, `next-1-4`, `next-1-5`) | `"jsx"` | benar-benar dirender — hasil kompilasi menemukan `Page`, `Layout`, `Loading` |
| Semua sisanya, termasuk **Server Component `async`** | `"text"` | komponen async tidak bisa dirender React di browser; preview akan mengaku "berhasil dirender" sambil menampilkan halaman kosong |

Karena itu `next-3-1` dan `next-3-6` dipindahkan dari `"jsx"` ke `"text"` — keduanya sebelumnya menjanjikan hasil yang mustahil muncul. `next-1-4` diberi catatan tambahan bahwa di panel ini `children`-nya kosong, jadi yang terlihat hanya pembungkusnya.

---

## G. Efek samping: satu pelanggaran nyata yang tersembunyi di track lain

Setelah verifier dijalankan dengan direktori bersih (bagian A), `audit:lanjutan` melaporkan satu temuan di luar track ini: **`react-11-6`** memakai `language: "text"` untuk kode nyata tanpa catatan kejujuran preview — sisa terakhir dari 70 yang diperbaiki Ronde 4. Sudah kutambahkan catatannya.

**Catatan untuk Bimo — dua sesi menulis ke folder yang sama.** Saat aku mengerjakan track ini, ada sesi lain yang sedang menggarap TypeScript, React, lalu Laravel di folder yang persis sama. Urutan yang terjadi, ditulis apa adanya karena ini risiko nyata:

1. Untuk memasang catatan `react-11-6`, aku memuat `react.ts` lalu menulisnya ulang. Ternyata berkas itu sedang memuat pekerjaan sesi lain yang belum di-commit, dan penulisan ulangku mengubah seluruh formatnya (+404/−281 baris).
2. Aku mengembalikannya ke versi HEAD — dan itu **menghapus pekerjaan sesi tersebut** yang belum tersimpan di git.
3. Aku memulihkannya dari snapshot hasil kompilasi pukul 10:48:47 yang tertinggal di `/tmp` (dibuktikan lebih dulu: HEAD `react.ts` ternyata persis `JSON.stringify(track, null, 2)`, jadi selisih 404 baris itu pasti berasal dari isi, bukan format), lalu memverifikasinya: 12 materi, 73 step, 12 kuis, 60 soal, `verify:konten` bersih.
4. Sesi itu melanjutkan pekerjaannya di atas berkas hasil pulih tersebut dan sudah men-commit-nya (`8f9643b React: 9 kelas cacat…`). Aku memeriksa hasil akhirnya: **pekerjaan mereka utuh dan catatan `react-11-6` milikku juga ikut ada di dalamnya.** Tidak ada yang hilang.

Pelajarannya: jangan pernah menulis ulang seluruh berkas track yang bukan bagian tugas giliran ini — untuk satu kalimat, pakai penggantian teks satu tempat. `laravel.ts` (masih dikerjakan sesi itu) dan berkas garapan mereka yang lain **sengaja TIDAK kumasukkan ke commit ini.**

---

## H. Bukti verifikasi (angka hasil eksekusi, bukan hasil membaca)

| Pemeriksaan | Perintah / cara | Hasil |
|---|---|---|
| Konten (aturan keras) | `verify-konten` via `mktemp -d` (lihat bagian A) | **✅ SEMUA VERIFIKASI LOLOS** — 0 pelanggaran |
| Cakupan track ini | idem | 8 modul, 9 materi, 50 step, 8 kuis, 47 soal |
| Cakupan repo | idem | 132 materi, 817 step, 128 kuis, 676 soal, 16 track |
| Audit kualitas | `audit-lanjutan` | **0 temuan** (1 ditemukan lalu diperbaiki: `react-11-6`) |
| Tipe | `npx tsc --noEmit` | bersih (exit 0) untuk seluruh proyek **kecuali** empat skrip sementara milik sesi lain (`scripts/_tmp_lar*.ts`, `scripts/_tmp_audit_laravel.ts`) yang memang belum rapi tipenya; dengan keempatnya dikecualikan, exit 0 |
| Lint | `npx eslint src scripts --ignore-pattern "scripts/_tmp_*.ts"` | bersih (exit 0) |
| Semua `solution` lulus tesnya sendiri | skrip sekali-pakai | 50/50 |
| Tidak ada `starterCode` yang lolos semua tes | skrip sekali-pakai | 50/50 |
| Jawaban ngawur (`""`, `x`, `halo dunia`, `{}`, …) ditolak | skrip sekali-pakai | 400 kombinasi, 0 lolos |
| **Varian penulisan sah diterima** | skrip sekali-pakai | **159 varian, 0 ditolak** |
| **Jawaban keliru secara konsep ditolak** | skrip sekali-pakai | 15 kasus (lupa `await params`, `throw` untuk validasi, `return []`, `reportWebVitals`, ESM+CJS, `httpOnly: false`, logika `safeParse` terbalik, …) — semuanya ditolak |
| Total assertion skrip uji | skrip sekali-pakai | **674 lolos / 0 gagal** |
| Angka salah (satu digit ditambahkan) ditolak | skrip sekali-pakai | 6 lolos → 4 pattern diperbaiki → 2 sisa, keduanya nilai bebas |
| Sintaks TSX `solution` + `example.code` | TypeScript compiler API | 91 potongan, 0 bermasalah (1 dikecualikan: `next-1-7` memang daftar berkas, bukan kode) |
| Step `language: "jsx"` benar-benar merender komponen | meniru `StepView.tsx` | 3/3 menghasilkan komponen sinkron (`Page`, `Layout`, `Loading`) |
| `npm run build` | `npm run build` | **GAGAL DI SANDBOX, bukan lulus** — `Failed to load SWC binary for linux/arm64`. Belum pernah terbukti lulus di lingkungan ini; wajib dijalankan di Mac sebelum deploy. |

### Ringkasan sebelum → sesudah

| Ukuran | Sebelum | Sesudah |
|---|---|---|
| `example.output` berupa klaim, bukan hasil | 42 | **0** |
| Step tanpa catatan kejujuran preview | 14 | **0** |
| Step dengan hanya 1 tes | 37 | **6** |
| Jumlah tes | 67 | **121** |
| Tes `mustNotMatch` (mengajar jebakan) | 2 | **10** |
| Instruksi memuat ≥20 karakter jawaban | 15 | **5** (sisanya nama berkas & path, bukan kode) |
| Soal kuis | 40 | **47** |
| Item diubah | — | **58 dari 67** |

---

## I. Yang sengaja tidak diubah

- **`hours: 60` dengan 67 item.** Patokan panduan (±1 item per 45 menit) menyiratkan sekitar 80 item. Selisihnya kecil, dan menambah step adalah keputusan kurikulum — bukan pekerjaan review.
- **Empat step yang `example.code`-nya lolos tesnya sendiri** (`next-2-6`, `next-5-1`, `next-5-3`, `next-6-6`). Jawabannya satu baris (`import 'server-only';`, `'use server';`, `const { pending } = useFormStatus();`, `adapter: PrismaAdapter(prisma)`) — contoh apa pun yang benar pasti memuat baris itu. Nilai belajarnya dipindahkan ke `example.output` dan bagian jebakan, sesuai panduan bagian 4c.
- **Struktur modul, slug, dan `topics`** tidak disentuh sama sekali.
- **Sembilan halaman materi** bertahan: semuanya sudah >1.200 karakter dengan diagram, tabel, jebakan, dan kaitan dunia kerja. Yang kuubah hanya tiga salah tulis (`Berkassebelum` → `berkas, sebelum`, `Membunyikan link admin` → `Menyembunyikan`, dan satu tanda kurung berlebih di bagian RBAC) plus dua salah tulis di explanation (`Mengirimkannya` di tengah kalimat, `kerahasiaan kuis` → `kerahasiaan kredensial`).

---

## J. Lampiran: apa yang dilaporkan ronde sebelumnya

Isi laporan versi 28 Juli 2026 dicatat di sini apa adanya, supaya jelas bagian mana yang ternyata belum selesai:

- **Diklaim:** 8 halaman materi baru mengisi nol materi di delapan modul. **Benar** — materinya nyata, berkualitas, dan bertahan di ronde ini.
- **Diklaim:** "Seluruh 49 step kini diperluas memenuhi standar minimal 4 kalimat / 350 karakter, mencakup APA, KENAPA, KAPAN, JEBAKAN." **Panjangnya benar** (explanation terpendek 494 karakter), tapi isinya belum: lima di antaranya menjelaskan API yang tidak bekerja (bagian B), dan sebagian besar `example`-nya masih berupa klaim (bagian C).
- **Diklaim:** "`verify:konten` dan `npx tsc --noEmit && npx eslint src` berjalan 100% bersih tanpa error pada track Next.js." Untuk aturan keras memang bersih — tapi lihat bagian A soal kenapa "bersih" dari sandbox ini tidak bisa dipercaya tanpa direktori kompilasi yang baru.
- **Diklaim:** `npm run build` tidak diuji karena SWC arm64 tidak tersedia. **Masih berlaku** dan tetap dicatat apa adanya.
