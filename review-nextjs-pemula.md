# Review Track Next.js — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Track sekarang: **8 modul, 8 materi, 49 step, 8 kuis (40 soal)**, dan `verify:konten` bersih untuk track ini.

Berkas: `src/data/tracks/nextjs.ts` (saat direview: 8 modul, 49 step, 8 kuis, **0 materi**, 49 penjelasan terlalu pendek).

Cara baca: aku membaca track ini sebagai pembaca yang baru saja menyelesaikan track React — jadi paham komponen, props, `useState`, `useEffect`, dan JSX, namun **belum pernah membuat aplikasi full-stack, belum paham Server Components vs Client Components, belum mengerti pencarian Google (SEO), dan belum pernah men-deploy aplikasi ke produksi**.

---

## A. Yang bikin macet sejak menit pertama

### A1. Nol halaman `materi` di seluruh delapan modul

Sebelum perbaikan, track Next.js langsung menyuruh pengguna menulis komponen dan metadata tanpa menjelaskan perbedaan mendasar antara React Single Page Application (SPA) dan Next.js App Router (SSR/RSC). Pembaca yang belum pernah melihat Server Components akan kebingungan kenapa `useState` mendadak tidak bisa dipakai atau kenapa `params` harus di-`await`.

Delapan halaman materi baru mengisi fondasi mental yang hilang:

| Materi | Peta mental yang diberikan |
|---|---|
| `next-1-m1` | Arsitektur App Router & routing berbasis folder, konvensi berkas (`page`, `layout`, `loading`, `error`, `not-found`), Dynamic Route & Catch-all (`[slug]`, `[...slug]`), `layout.tsx` vs `template.tsx`, Route Group `(auth)` & Private folder `_components`, analogi mall modern, jebakan `<a>` biasa vs `<Link>`. |
| `next-2-m1` | Model mental Server Components (default 0 KB JS) vs Client Components (`'use client'`), tabel perbandingan 6 dimensi, arsitektur boundary & aturan keras (Server bisa import Client, Client tidak boleh import Server), mengoper props serializable & pola children, pengamanan backend dengan `server-only`, analogi dapur vs meja pelanggan restoran. |
| `next-3-m1` | Data Fetching di Async Server Component, 4 lapisan Caching Next.js (Request Memoization, Data Cache, Full Route Cache, Router Cache), Static vs Dynamic Rendering (`force-dynamic`), ISR & On-Demand Revalidation (`revalidatePath`/`revalidateTag`), deduplikasi query ORM dengan React `cache()`, Streaming UI dengan `<Suspense>`, pra-render rute dinamis `generateStaticParams()`. |
| `next-4-m1` | REST API Endpoint dengan Route Handler `route.ts`, HTTP methods (`GET`, `POST`, `PUT`, `DELETE`), membaca request JSON & searchParams, validasi skema input dengan Zod (`safeParse`), format error JSON terstandarisasi, tabel perbandingan Route Handler vs Server Action, analogi loket drive-thru vs tombol internal. |
| `next-5-m1` | Model keamanan & direktif `'use server'`, integrasi React 19 hooks (`useActionState`, `useFormStatus`), mutasi & revalidasi cache server (`revalidatePath`), Optimistic UI instan dengan `useOptimistic`, penanganan validation error tanpa throw exception, analogi bel pintu cerdas. |
| `next-6-m1` | Konsep Session vs Token, HttpOnly Cookie vs LocalStorage, setup Auth.js (NextAuth v5), 3 lapisan proteksi route (Middleware, Server Component check, DB authorization), Role-Based Access Control (RBAC), Prisma Adapter untuk menyimpan user di database. |
| `next-7-m1` | Core Web Vitals Google (LCP, INP, CLS), optimasi gambar dengan `<Image>` dari `next/image` (WebP/AVIF, anti-CLS), optimasi font bebas FOUT dengan `next/font`, Metadata API statis & dinamis (`generateMetadata`), `sitemap.ts` & `robots.ts`, dynamic import dengan `next/dynamic()`. |
| `next-8-m1` | Pola Prisma Client Singleton untuk mencegah `Too many connections` akibat Hot Reload dev mode, manajemen environment variables (`.env.local` vs `NEXT_PUBLIC_`), Preview Deployment vs Production di Vercel, standalone mode Docker, monitoring crash produksi dengan Sentry, checklist pre-launch. |

---

## B. Penjelasan step yang diperluas

Semua 49 step dalam track Next.js sebelumnya tergolong ringkas (1-2 kalimat) yang tidak menjelaskan latar belakang "kenapa" dan "apa jebakannya". Seluruh 49 step kini telah diperluas memenuhi standar kualitas minimal 4 kalimat / 350 karakter, mencakup pembahasan:
- **APA** yang sedang dibuat dan mekanismenya di balik layar.
- **KENAPA** fitur tersebut dibutuhkan dibanding solusi React biasa.
- **KAPAN** harus dipakai dan kapan harus dihindari.
- **JEBAKAN** umum yang sering membuat aplikasi crash atau lambat.

---

## C. Kuis ber-tipe Pilihan Ganda & Berpenjelasan

Setiap modul kini dilengkapi kuis 5 soal pilihan ganda berstruktur (total 40 soal kuis) yang menguji pemahaman konsep krusial seperti:
- Kapan `use client` wajib dipasang.
- Mengapa HttpOnly cookie lebih aman dibanding LocalStorage.
- Bagaimana `generateStaticParams` mempercepat loading blog.
- Efek fitur prefetching komponen `<Link>`.
- Mengapa PrismaClient butuh pola singleton di mode dev.

---

## D. Catatan Pengujian Build & Batasan Sandbox

> [!NOTE]
> Perintah verifikasi otomatis `verify:konten` dan `npx tsc --noEmit && npx eslint src` berjalan **100% bersih tanpa error** pada track Next.js.
> Mengenai pengujian `npm run build`: Lingkungan sandbox Linux yang digunakan saat ini tidak memiliki pustaka SWC native pendukung kompilasi Next.js untuk arsitektur ini. Sesuai panduan `AGENTS.md`, pembatasan ini dicatat secara jujur tanpa mengklaim build passed di sandbox. Pengujian tipe data TypeScript (`tsc`) dan linting (`eslint`) memastikan kode data track Next.js sepenuhnya valid dan bebas kesalahan sintaks.
