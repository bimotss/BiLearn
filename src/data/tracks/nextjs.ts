import type { Track } from "@/lib/types";

export const nextjsTrack: Track = {
  slug: "nextjs",
  title: "Next.js",
  description: "App Router, server components, sampai deploy production.",
  hours: 60,
  recommendedPrereqs: ["react"],
  color: "bg-neutral-800",
  icon: "▲",
  order: 7,
  modules: [
    {
      slug: "app-router",
      title: "App Router: Halaman & Layout",
      description:
        "Routing berbasis file — fondasi semua aplikasi Next.js modern.",
      topics: [
        "Kenapa Next.js: masalah yang diselesaikan di atas React",
        "Struktur app/: page, layout, folder = route",
        "Dynamic route [slug] & catch-all",
        "Nested layout & template",
        "loading.tsx, error.tsx, not-found.tsx",
        "Link & navigasi client-side",
        "Route group & private folder",
      ],
      items: [
        {
          kind: "step",
          id: "next-1-1",
          title: "Kenapa Next.js?",
          explanation:
            "Next.js adalah framework pelengkap React yang dirancang untuk mengatasi berbagai keterbatasan React murni. Bayangkan React sebagai mesin mobil, dan Next.js sebagai mobil utuh yang siap dikendarai. Pada React biasa, antarmuka pengguna dibangun langsung di browser — yang seringkali membuat loading halaman awal terasa lambat dan sulit ditemukan Google (SEO yang buruk). Next.js memecahkan masalah ini dengan memproses kode di server (Server-Side Rendering) sebelum HTML utuh dikirim ke browser. Hasilnya: situs web kamu sangat cepat dimuat, langsung terbaca oleh mesin pencari, dan kamu tidak perlu pusing mengatur konfigurasi bundler.",
          example: {
            code: "// Next.js menggabungkan React UI dengan backend & render server otomatis",
            output: "Halaman web termuat cepat dan langsung terindeks mesin pencari (SEO).",
            note: "Framework Next.js disukai perusahaan besar untuk aplikasi skala produksi.",
          },
          instruction:
            "Next.js memberikan SEO otomatis. Tambahkan objek konstanta `metadata` yang diekspor untuk halaman ini, berisi properti `title` bernilai string 'Beranda'. Fitur ini hanya ada di Next.js, bukan React biasa.",
          starterCode: "// Ekspor objek metadata di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "export\\s+const\\s+metadata\\s*=",
              message: "Pastikan kamu mengekspor objek konstanta metadata",
            },
            {
              pattern: "title\\s*:\\s*['\"]Beranda['\"]",
              message: "Metadata harus memiliki title 'Beranda'",
            },
          ],
          solution: "export const metadata = {\n  title: 'Beranda',\n};",
        },
        {
          kind: "step",
          id: "next-1-2",
          title: "Struktur Folder app/: page.tsx & layout.tsx",
          explanation:
            "Di App Router, folder mewakili URL path. `page.tsx` adalah UI utama route tersebut, dan `layout.tsx` adalah wrapper yang membagikan UI antar halaman.",
          example: {
            code: "// app/about/page.tsx -> URL /about\nexport default function AboutPage() { return <h1>About</h1>; }",
            output: "Mengakses /about di browser merender komponen AboutPage.",
            note: "Hanya file bernama page.tsx yang dijadikan halaman publik.",
          },
          instruction:
            "Tuliskan komponen halaman `export default function Page() { return <h1>Home</h1>; }`.",
          starterCode: "// Tulis komponen Page di sini\n",
          language: "js",
          tests: [
            {
              pattern: "export\\s+default\\s+function\\s+Page\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<h1>\\s*Home\\s*</h1>\\s*;?\\s*\\}",
              message: "Tuliskan: export default function Page() { return <h1>Home</h1>; }",
            },
          ],
          solution: "export default function Page() {\n  return <h1>Home</h1>;\n}",
        },
        {
          kind: "step",
          id: "next-1-3",
          title: "Dynamic Route [slug]",
          explanation:
            "Folder dengan kurung siku `[slug]` membuat route dinamis (seperti `/blog/post-1`). Parameter slug diakses via `params.slug`.",
          example: {
            code:
              "export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {\n" +
              "  const { slug } = await params;\n" +
              "  return <h1>Post: {slug}</h1>;\n" +
              "}",
            output: "<h1>Post: react-tutorial</h1> saat mengakses /blog/react-tutorial",
            note: "Di Next.js terbaru, params bertipe Promise yang di-await.",
          },
          instruction:
            "Lengkapi komponen di bawah dengan mengekstrak nilai `id` dari argumen `params` menggunakan sintaks `await`. Ingat, di Next.js terbaru `params` adalah sebuah Promise.",
          starterCode: "export default async function UserPage({ params }) {\n  // Ekstrak 'id' dari params di bawah ini\n  \n  return <h1>User: {id}</h1>;\n}",
          language: "text",
          tests: [
            {
              pattern: "const\\s+\\{\\s*id\\s*\\}\\s*=\\s*await\\s+params",
              message: "Gunakan: const { id } = await params;",
            },
          ],
          solution: "export default async function UserPage({ params }) {\n  const { id } = await params;\n  return <h1>User: {id}</h1>;\n}",
        },
        {
          kind: "step",
          id: "next-1-4",
          title: "Nested Layout & Template",
          explanation:
            "`layout.tsx` bersarang (nested) mempertahankan state dan tidak di-remount saat berpindah sub-route, sedangkan `template.tsx` selalu di-remount.",
          example: {
            code:
              "export default function DashboardLayout({ children }: { children: React.ReactNode }) {\n" +
              "  return <section><nav></nav>{children}</section>;\n" +
              "}",
            output: "Sidebar nav bertahan tanpa re-render saat navigasi antar tab dashboard.",
            note: "layout.tsx sangat hemat performa untuk tempat navigasi.",
          },
          instruction:
            "Tuliskan pembungkus layout `export default function Layout({ children }: { children: React.ReactNode }) { return <div>{children}</div>; }`.",
          starterCode: "// Tulis komponen Layout di sini\n",
          language: "js",
          tests: [
            {
              pattern: "export\\s+default\\s+function\\s+Layout\\s*\\(\\s*\\{\\s*children\\s*\\}\\s*:\\s*\\{\\s*children\\s*:\\s*React\\.ReactNode\\s*\\}\\s*\\)",
              message: "Definisikan komponen Layout sesuai instruksi",
            },
          ],
          solution:
            "export default function Layout({ children }: { children: React.ReactNode }) {\n  return <div>{children}</div>;\n}",
        },
        {
          kind: "step",
          id: "next-1-5",
          title: "loading.tsx, error.tsx, dan not-found.tsx",
          explanation:
            "File konvensi khusus: `loading.tsx` untuk React Suspense loading state, `error.tsx` untuk Error Boundary, dan `not-found.tsx` untuk halaman 404.",
          example: {
            code: "// app/loading.tsx\nexport default function Loading() { return <p>Loading...</p>; }",
            output: "Otomatis tampil saat halaman async sedang mengunduh data di server.",
            note: "not-found.tsx dapat dipanggil manual dengan fungsi notFound().",
          },
          instruction:
            "Tulis komponen loading `export default function Loading() { return <p>Loading...</p>; }`.",
          starterCode: "// Tulis komponen Loading di sini\n",
          language: "js",
          tests: [
            {
              pattern: "export\\s+default\\s+function\\s+Loading\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<p>\\s*Loading\\.\\.\\.\\s*</p>\\s*;?\\s*\\}",
              message: "Tuliskan komponen Loading",
            },
          ],
          solution: "export default function Loading() {\n  return <p>Loading...</p>;\n}",
        },
        {
          kind: "step",
          id: "next-1-6",
          title: "Link & Navigasi Client-Side di Next.js",
          explanation:
            "Gunakan `<Link href=\"/path\">` dari `next/link` untuk berpindah halaman SPA secara efisien dengan modul prefetching otomatis.",
          example: {
            code:
              'import Link from "next/link";\n' +
              '<Link href="/dashboard">Dashboard</Link>',
            output: "Navigasi instan dengan prefetching otomatis di viewport.",
            note: "Import Link selalu dari 'next/link' (bukan react-router).",
          },
          instruction:
            "Gunakan komponen yang tepat dari Next.js untuk membuat navigasi client-side menuju rute `/about` dengan teks 'Tentang Kami'. Jangan gunakan tag `<a>` HTML biasa.",
          starterCode: 'import Link from "next/link";\n\nexport default function Navigation() {\n  return (\n    <nav>\n      {/* Tambahkan link ke /about di sini */}\n      \n    </nav>\n  );\n}',
          language: "text",
          tests: [
            {
              pattern: "<Link\\s+href=[\"']/about[\"']>\\s*Tentang Kami\\s*</Link>",
              message: 'Gunakan: <Link href="/about">Tentang Kami</Link>',
            },
          ],
          solution: 'import Link from "next/link";\n\nexport default function Navigation() {\n  return (\n    <nav>\n      <Link href="/about">Tentang Kami</Link>\n    </nav>\n  );\n}',
        },
        {
          kind: "step",
          id: "next-1-7",
          title: "Route Group (folder) & Private Folder _folder",
          explanation:
            "Folder dengan kurung biasa `(auth)` adalah Route Group untuk mengelompokkan file tanpa menambah segmen pada URL path.",
          example: {
            code: "app/(shop)/shoes/page.tsx\napp/(shop)/shirts/page.tsx",
            output: "Halaman diakses lewat URL /shoes dan /shirts, bukan /shop/shoes.",
            note: "Route Group juga berguna untuk menerapkan layout berbeda antar kelompok halaman.",
          },
          instruction:
            "Di dalam folder grup `(auth)`, kamu ingin semua halaman autentikasi tidak menampilkan navbar utama. Buatlah komponen fungsi `AuthLayout` yang membungkus properti `children` dengan tag `<main>`. Pastikan fungsi diekspor secara default.",
          starterCode: "// Buat komponen AuthLayout di sini\n",
          language: "text",
          tests: [
            {
              pattern: "export\\s+default\\s+function\\s+AuthLayout",
              message: "Pastikan fungsi bernama AuthLayout dan diekspor default",
            },
            {
              pattern: "<main>\\s*\\{\\s*children\\s*\\}\\s*</main>",
              message: "Layout harus mengembalikan tag <main> berisi children",
            },
          ],
          solution: "export default function AuthLayout({ children }) {\n  return <main>{children}</main>;\n}",
        },
        {
          kind: "quiz",
          id: "next-1-kuis",
          title: "Kuis: App Router",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa fungsi utama dari berkas konvensi `loading.tsx` di Next.js App Router?",
              choices: [
                "Menguji kecepatan internet",
                "Otomatis membungkus halaman dengan React Suspense fallback UI saat data di-fetch",
                "Menghapus cache halaman",
                "Menghentikan proses render",
              ],
              answerIndex: 1,
              explanation: "loading.tsx secara otomatis dijadikan fallback Suspense oleh Next.js selama server melakukan data fetching.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Manakah cara yang benar untuk membuat rute dinamis (dynamic route) di dalam folder app Next.js?",
              choices: [
                "Folder bernama :slug",
                "Folder bernama {slug}",
                "Folder bernama [slug]",
                "File bernama route.dynamic.tsx",
              ],
              answerIndex: 2,
              explanation: "Di Next.js App Router, tanda kurung siku seperti [slug] digunakan untuk menandakan segmen URL dinamis yang nilainya bisa berubah-ubah.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa efek utama dari menaruh halaman di dalam folder Route Group, misalnya (marketing)?",
              choices: [
                "Folder tersebut akan dilindungi oleh autentikasi",
                "Folder tersebut tidak akan diproses oleh Next.js pada saat build",
                "Kata 'marketing' tidak akan masuk ke dalam struktur URL halaman di dalamnya",
                "Semua file di dalamnya secara otomatis akan dirender di sisi client",
              ],
              answerIndex: 2,
              explanation: "Tanda kurung biasa () digunakan untuk membuat Route Group. Ini berguna untuk merapikan file dan menerapkan layout, tanpa menambah segmen ke dalam URL akhir.",
            },
          ],
        },
      ],
    },
    {
      slug: "server-client",
      title: "Server vs Client Components",
      description:
        "Konsep pembeda Next.js modern — salah paham di sini, salah arsitektur semuanya.",
      topics: [
        "Server component: default, kenapa, dan batasannya",
        "'use client': kapan benar-benar dibutuhkan",
        "Boundary: server membungkus client, bukan sebaliknya",
        "Mengoper data & children menembus boundary",
        "Pola komposisi: interaktif di daun, data di akar",
        "Kesalahan umum: 'use client' di root, import server code ke client",
      ],
      items: [
        {
          kind: "step",
          id: "next-2-1",
          title: "Server Component secara Default",
          explanation:
            "Semua komponen di folder `app/` secara default adalah **Server Component**. Komponen ini dirender di server dan mengirim 0kb JavaScript tambahan ke browser.",
          example: {
            code: "// Server Component default: Bisa akses DB/filesystem langsung, tanpa bundle JS client!",
            output: "Performa render super cepat di browser.",
            note: "Server component tidak bisa menggunakan useState, useEffect, atau event listener onClick.",
          },
          instruction:
            "Bukti bahwa ini berjalan di server adalah kamu bisa menggunakan modul bawaan Node.js. Import modul `fs` (file system) dari `'fs'` di bagian paling atas file.",
          starterCode: "// Tulis import di bawah ini\n\nexport default function Page() {\n  return <h1>Server Component</h1>;\n}",
          language: "text",
          tests: [
            {
              pattern: "import\\s+fs\\s+from\\s+['\"]fs['\"]",
              message: "Gunakan: import fs from 'fs'",
            },
          ],
          solution: "import fs from 'fs';\n\nexport default function Page() {\n  return <h1>Server Component</h1>;\n}",
        },
        {
          kind: "step",
          id: "next-2-2",
          title: "'use client' Directive",
          explanation:
            "Secara default, Next.js memproses semua komponen di server untuk menghemat ukuran file yang dikirim ke browser. Namun, server tidak bisa bereaksi terhadap interaksi pengguna (klik mouse, ketikan keyboard). Jika kamu ingin membuat komponen yang hidup dan interaktif (menggunakan `onClick`, `useState`, atau `useEffect`), kamu wajib menambahkan `'use client';` di baris paling atas file. Ini memberitahu Next.js: 'Komponen ini harus dijalankan di browser, bukan di server.' Gunakan penanda ini setiap kali kamu membangun tombol interaktif, modal, atau form pengisian.",
          example: {
            code:
              '\'use client\';\n\n' +
              'import { useState } from "react";\n' +
              'export default function Counter() { const [c, setC] = useState(0); return <button onClick={() => setC(c+1)}>{c}</button>; }',
            output: "Komponen dijadikan Client Component yang interaktif.",
            note: "'use client' menandai titik awal boundary antara server dan client.",
          },
          instruction:
            "Komponen di bawah menggunakan `useState`, yang artinya butuh interaktivitas dari browser. Tambahkan direktif yang diperlukan pada baris PERTAMA file ini agar Next.js tahu ini adalah Client Component.",
          starterCode: "import { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
          language: "text",
          tests: [
            {
              pattern: "['\"]use\\s+client['\"]\\s*;?",
              message: "Gunakan 'use client'; di baris paling atas",
            },
          ],
          solution: "'use client';\nimport { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
        },
        {
          kind: "step",
          id: "next-2-3",
          title: "Server & Client Boundaries",
          explanation:
            "Server Components dapat membungkus Client Components, tetapi kamu tidak bisa meng-import Server Component langsung di dalam file Client Component.",
          example: {
            code: "// ✅ ServerComponent -> mengimport -> ClientComponent",
            output: "Batas arsitektur server-client terawat dengan baik.",
            note: "Jika butuh Server Component di dalam Client, oper via prop children.",
          },
          instruction:
            "Server Components dapat mengimpor dan merender Client Components. Kamu memiliki `<Carousel />` yang merupakan Client Component. Impor komponen tersebut dari `'./carousel'` dan render di dalam elemen `<main>`.",
          starterCode: "export default function HomePage() {\n  return (\n    <main>\n      {/* Render Carousel di sini */}\n    </main>\n  );\n}",
          language: "text",
          tests: [
            {
              pattern: "import\\s+Carousel\\s+from\\s+['\"]\\./carousel['\"]",
              message: "Pastikan kamu mengimpor Carousel dari './carousel'",
            },
            {
              pattern: "<Carousel\\s*/>",
              message: "Pastikan kamu merender <Carousel /> di dalam main",
            },
          ],
          solution: "import Carousel from './carousel';\n\nexport default function HomePage() {\n  return (\n    <main>\n      <Carousel />\n    </main>\n  );\n}",
        },
        {
          kind: "step",
          id: "next-2-4",
          title: "Mengoper Data & Children Menembus Boundary",
          explanation:
            "Data yang dioper dari Server Component ke Client Component via props harus bersifat **serializable** (JSON-friendly: string, number, plain object).",
          example: {
            code: "// ✅ Oper plain object: <ClientWidget data={{ id: 1 }} />\n// ❌ Jangan oper fungsi: <ClientWidget onClick={() => {}} /> dari server",
            output: "Data ter-serialize aman dari server ke client bundle.",
            note: "Fungsi JS tidak bisa di-serialize dari server ke client via props biasa.",
          },
          instruction:
            "Kamu ingin melempar data pengguna dari Server Component ke Client Component `<Profile />`. Dari objek data berikut, hapus properti `sayHello` karena fungsi JS tidak bisa di-serialize (dikirim sebagai teks) ke browser.",
          starterCode: "const userData = {\n  name: 'Budi',\n  age: 25,\n  sayHello: () => console.log('Halo'),\n};\n\nexport default function ServerPage() {\n  return <Profile data={userData} />;\n}",
          language: "text",
          tests: [
            {
              pattern: "sayHello",
              message: "Fungsi sayHello harus dihapus karena tidak bisa di-serialize",
              mustNotMatch: true,
            },
            {
              pattern: "name\\s*:\\s*['\"]Budi['\"]",
              message: "Pertahankan data name",
            },
          ],
          solution: "const userData = {\n  name: 'Budi',\n  age: 25,\n};\n\nexport default function ServerPage() {\n  return <Profile data={userData} />;\n}",
        },
        {
          kind: "step",
          id: "next-2-5",
          title: "Pola Komposisi: Interaktif di Daun",
          explanation:
            "Geser direktif `'use client'` sejauh mungkin ke daun (leaf components) dari pohon komponen agar porsi Server Component tetap maksimal.",
          example: {
            code: "// Halaman utama (Server) -> Layout (Server) -> TombolSuka ('use client')",
            output: "Ukuran bundle JavaScript di browser tetap minimal.",
            note: "Jangan letakkan 'use client' di root layout atau page utama jika tidak terpaksa.",
          },
          instruction:
            "Pada komponen Layout ini, jika kamu menambahkan `'use client'` di atas, seluruh halaman akan menjadi Client Component. Sebaiknya, biarkan Layout tetap sebagai Server Component. Impor komponen `<ThemeToggle />` dari `'./ThemeToggle'` dan render di dalam elemen `<body>` tanpa menjadikan file ini Client Component.",
          starterCode: "export default function RootLayout({ children }) {\n  return (\n    <body>\n      {/* Panggil ThemeToggle di bawah ini */}\n      \n      {children}\n    </body>\n  );\n}",
          language: "text",
          tests: [
            {
              pattern: "import\\s+ThemeToggle\\s+from\\s+['\"]\\./ThemeToggle['\"]",
              message: "Impor ThemeToggle",
            },
            {
              pattern: "<ThemeToggle\\s*/>",
              message: "Pastikan merender <ThemeToggle />",
            },
            {
              pattern: "['\"]use\\s+client['\"]",
              message: "Jangan tambahkan 'use client' di file ini",
              mustNotMatch: true,
            },
          ],
          solution: "import ThemeToggle from './ThemeToggle';\n\nexport default function RootLayout({ children }) {\n  return (\n    <body>\n      <ThemeToggle />\n      {children}\n    </body>\n  );\n}",
        },
        {
          kind: "step",
          id: "next-2-6",
          title: "Mencegah Import Server Code ke Client (server-only)",
          explanation:
            "Gunakan paket `server-only` (`import 'server-only'`) pada file logika backend agar kompilator memberi error jika file tersebut tak sengaja di-import ke Client Component.",
          example: {
            code: "import 'server-only'; // Memastikan file ini tidak bocor ke client bundle",
            output: "Error otomatis saat build jika file di-import oleh client component.",
            note: "Sangat krusial untuk file pengakses database atau API key rahasia.",
          },
          instruction:
            "File ini berisi logika yang langsung mengakses database dengan kata sandi rahasia. Cegah file ini agar tidak bocor jika tidak sengaja diimpor di Client Component dengan mengimpor modul `server-only` di baris pertama.",
          starterCode: "// Tambahkan import penjaga di sini\n\nexport async function getSecretData() {\n  return db.query('SELECT * FROM passwords');\n}",
          language: "text",
          tests: [
            {
              pattern: "import\\s+['\"]server-only['\"]",
              message: "Gunakan: import 'server-only'",
            },
          ],
          solution: "import 'server-only';\n\nexport async function getSecretData() {\n  return db.query('SELECT * FROM passwords');\n}",
        },
        {
          kind: "quiz",
          id: "next-2-kuis",
          title: "Kuis: Server vs Client Components",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Kapan sebuah komponen di Next.js App Router HARUS menggunakan direktif `'use client'`?",
              choices: [
                "Saat membuat komponen layout",
                "Saat komponen membutuhkan state (`useState`), effect (`useEffect`), atau event handler (`onClick`)",
                "Saat komponen mengambil data dari database",
                "Saat menggunakan HTML tag <h1>",
              ],
              answerIndex: 1,
              explanation: "'use client' menandai bahwa komponen membutuhkan runtime JavaScript browser untuk interaktivitas.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Bolehkah kita mengimpor Server Component secara langsung di dalam file Client Component?",
              choices: [
                "Boleh, tidak ada batasan",
                "Boleh, selama kita menggunakan 'use server'",
                "Tidak boleh, namun Server Component bisa dioper sebagai prop `children` ke Client Component",
                "Tidak boleh sama sekali",
              ],
              answerIndex: 2,
              explanation: "Kita tidak bisa langsung mengimpor Server Component ke Client Component. Pola yang benar adalah Server Component membungkus Client Component dan mengoper dirinya sendiri atau komponen server lain via prop children.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi dari mengimpor `server-only` pada sebuah file?",
              choices: [
                "Mempercepat waktu respon server",
                "Menjadikan file tersebut sebuah API endpoint",
                "Memastikan build akan error (gagal) jika file tersebut tak sengaja terimpor oleh komponen client",
                "Mengubah Client Component menjadi Server Component",
              ],
              answerIndex: 2,
              explanation: "Modul 'server-only' memberikan jaminan keamanan agar kode sensitif (seperti kredensial database) tidak pernah terkemas dan bocor ke bundle JavaScript publik di browser.",
            },
          ],
        },
      ],
    },
    {
      slug: "data-caching",
      title: "Data Fetching & Caching",
      description:
        "Fetch di server, cache yang bisa diprediksi, dan revalidasi.",
      topics: [
        "async server component: fetch langsung di komponen",
        "Static vs dynamic rendering",
        "revalidate: ISR & on-demand revalidation",
        "cache() dan deduplication",
        "Streaming & Suspense untuk UI bertahap",
        "generateStaticParams untuk halaman dinamis",
      ],
      items: [
        {
          kind: "step",
          id: "next-3-1",
          title: "Async Server Component Data Fetching",
          explanation:
            "Di Server Component, kamu dapat menulis fungsi komponen sebagai `async` dan memanggil `fetch()` langsung tanpa butuh `useEffect`.",
          example: {
            code:
              "export default async function Page() {\n" +
              "  const res = await fetch('https://api.com/data');\n" +
              "  const data = await res.json();\n" +
              "  return <div>{data.title}</div>;\n" +
              "}",
            output: "Data diunduh langsung di server sebelum HTML dikirim ke browser.",
            note: "Menghilangkan loading spinner client-side untuk SEO.",
          },
          instruction:
            "Tulis deklarasi komponen async `export default async function Page() { const res = await fetch(url); }`.",
          starterCode: "// Tulis komponen async Page di sini\n",
          language: "js",
          tests: [
            {
              pattern: "export\\s+default\\s+async\\s+function\\s+Page\\s*\\(\\s*\\)",
              message: "Definisikan: export default async function Page()",
            },
          ],
          solution:
            "export default async function Page() {\n  const res = await fetch(url);\n  return <div>Data</div>;\n}",
        },
        {
          kind: "step",
          id: "next-3-2",
          title: "Static vs Dynamic Rendering",
          explanation:
            "Secara otomatis Next.js akan menjadikan halaman **Static** jika tidak menggunakan data dinamis (cookies/headers). Jika ada data request dinamis, halaman menjadi **Dynamic**.",
          example: {
            code: "export const dynamic = 'force-dynamic'; // Memaksa render dinamis di setiap request",
            output: "Halaman di-render ulang pada setiap akses HTTP request.",
            note: "Gunakan force-dynamic untuk halaman dashboard real-time.",
          },
          instruction:
            "Kamu sedang membangun halaman dashboard yang datanya selalu berubah setiap detik. Pastikan Next.js selalu merender ulang halaman ini di setiap request dengan mengekspor konstanta `dynamic` bernilai string `'force-dynamic'`.",
          starterCode: "// Ekspor konfigurasi dynamic di sini\n\nexport default function Dashboard() {\n  return <h1>Live Dashboard</h1>;\n}",
          language: "text",
          tests: [
            {
              pattern: "export\\s+const\\s+dynamic\\s*=\\s*['\"]force-dynamic['\"]",
              message: "Gunakan: export const dynamic = 'force-dynamic';",
            },
          ],
          solution: "export const dynamic = 'force-dynamic';\n\nexport default function Dashboard() {\n  return <h1>Live Dashboard</h1>;\n}",
        },
        {
          kind: "step",
          id: "next-3-3",
          title: "Revalidasi Cache (ISR)",
          explanation:
            "Opsi `next: { revalidate: 60 }` melakukan Incremental Static Regeneration (ISR): meng-cache halaman static dan memperbaruinya di background setiap 60 detik.",
          example: {
            code: "fetch('https://api.com/posts', { next: { revalidate: 60 } });",
            output: "Data di-refresh di background setiap 60 detik.",
            note: "Kombinasi terbaik antara performa static dan kebaruan data.",
          },
          instruction:
            "Ubah fungsi fetch di bawah agar Next.js melakukan caching halaman secara statis, tetapi otomatis memperbaruinya di background setiap 30 detik (ISR).",
          starterCode: "export default async function Blog() {\n  const res = await fetch('https://api.example.com/posts');\n  return <div>Blog</div>;\n}",
          language: "text",
          tests: [
            {
              pattern: "next\\s*:\\s*\\{\\s*revalidate\\s*:\\s*30\\s*\\}",
              message: "Pastikan menambahkan opsi next: { revalidate: 30 } di dalam parameter kedua fetch",
            },
          ],
          solution: "export default async function Blog() {\n  const res = await fetch('https://api.example.com/posts', { next: { revalidate: 30 } });\n  return <div>Blog</div>;\n}",
        },
        {
          kind: "step",
          id: "next-3-4",
          title: "Request Deduplication dengan React cache()",
          explanation:
            "Next.js otomatis melakukan deduplikasi pada panggilan `fetch()` yang identik di dalam 1 pohon render. Untuk fungsi non-fetch, gunakan `cache()` dari React.",
          example: {
            code:
              'import { cache } from "react";\n' +
              "const getUser = cache(async (id) => db.user.findUnique({ id }));",
            output: "Panggilan getUser(id) berulang hanya dieksekusi 1x per render.",
            note: "Mencegah query database ganda dalam satu request halaman.",
          },
          instruction:
            "Kamu memiliki fungsi pembacaan database `getUser`. Bungkus fungsi async tersebut dengan fungsi `cache` dari React yang sudah diimpor, sehingga panggilannya di-deduplikasi dalam satu request.",
          starterCode: "import { cache } from 'react';\n\n// Bungkus fungsi ini dengan cache()\nconst getUser = async (id) => {\n  return { id, name: 'Budi' };\n};",
          language: "text",
          tests: [
            {
              pattern: "const\\s+getUser\\s*=\\s*cache\\(\\s*async",
              message: "Bungkus fungsi async dengan cache()",
            },
          ],
          solution: "import { cache } from 'react';\n\nconst getUser = cache(async (id) => {\n  return { id, name: 'Budi' };\n});",
        },
        {
          kind: "step",
          id: "next-3-5",
          title: "Streaming UI dengan React Suspense",
          explanation:
            "Streaming memecah halaman menjadi potongan-potongan kecil. Komponen cepat langsung tampil, sementara komponen lambat dibungkus `<Suspense>`.",
          example: {
            code: "<Suspense fallback={<Skeleton />}><KomponenLambat /></Suspense>",
            output: "User langsung melihat UI awal tanpa menunggu komponen lambat selesai.",
            note: "Meningkatkan skor First Contentful Paint (FCP) secara signifikan.",
          },
          instruction:
            "Komponen `<HeavyChart />` sangat lambat dimuat. Bungkus komponen tersebut dengan `<Suspense>` yang memiliki `fallback` berupa tag `<p>Memuat grafik...</p>` agar pengguna tidak melihat layar kosong.",
          starterCode: "import { Suspense } from 'react';\nimport HeavyChart from './HeavyChart';\n\nexport default function Dashboard() {\n  return (\n    <section>\n      {/* Bungkus dengan Suspense di bawah ini */}\n      <HeavyChart />\n    </section>\n  );\n}",
          language: "text",
          tests: [
            {
              pattern: "<Suspense\\s+fallback=\\{<p>Memuat grafik\\.\\.\\.</p>\\}>",
              message: "Gunakan Suspense dengan fallback teks 'Memuat grafik...'",
            },
            {
              pattern: "<HeavyChart\\s*/>\\s*</Suspense>",
              message: "Pastikan <HeavyChart /> berada di dalam Suspense",
            },
          ],
          solution: "import { Suspense } from 'react';\nimport HeavyChart from './HeavyChart';\n\nexport default function Dashboard() {\n  return (\n    <section>\n      <Suspense fallback={<p>Memuat grafik...</p>}>\n        <HeavyChart />\n      </Suspense>\n    </section>\n  );\n}",
        },
        {
          kind: "step",
          id: "next-3-6",
          title: "generateStaticParams untuk Dynamic Route",
          explanation:
            "Fungsi `generateStaticParams()` menentukan daftar slug yang akan di-pre-render secara static pada saat build time.",
          example: {
            code:
              "export async function generateStaticParams() {\n" +
              "  return [{ slug: 'post-1' }, { slug: 'post-2' }];\n" +
              "}",
            output: "Halaman /blog/post-1 dan /blog/post-2 di-build sebagai HTML statis.",
            note: "Sangat penting untuk performa kilat halaman blog/katalog produk.",
          },
          instruction:
            "Tulis deklarasi fungsi `export async function generateStaticParams() { return []; }`.",
          starterCode: "// Tulis generateStaticParams di sini\n",
          language: "js",
          tests: [
            {
              pattern: "export\\s+async\\s+function\\s+generateStaticParams\\s*\\(\\s*\\)",
              message: "Definisikan: export async function generateStaticParams()",
            },
          ],
          solution: "export async function generateStaticParams() {\n  return [];\n}",
        },
        {
          kind: "quiz",
          id: "next-3-kuis",
          title: "Kuis: Data Caching & ISR",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa fungsi opsi `next: { revalidate: 60 }` di dalam fungsi fetch() Next.js?",
              choices: [
                "Membatalkan fetch jika lewat dari 60 detik",
                "Meng-cache data secara static dan memperbaruinya di background setiap 60 detik (ISR)",
                "Mengabaikan respon server selama 60 detik",
                "Menghapus database setelah 60 detik",
              ],
              answerIndex: 1,
              explanation: "ISR (Incremental Static Regeneration) mengizinkan pembuatan halaman static yang otomatis diperbarui secara berkala.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Jika kita memiliki halaman detail dengan rute dinamis `[id]`, bagaimana cara pre-render halaman statis untuk rute tersebut saat build time?",
              choices: [
                "Menggunakan fungsi getServerSideProps",
                "Menggunakan fungsi generateStaticParams()",
                "Mengubah rute menjadi [id].static",
                "Mengekspor { dynamic: 'force-static' }",
              ],
              answerIndex: 1,
              explanation: "Fungsi generateStaticParams digunakan untuk mengembalikan array parameter dinamis yang akan dibuatkan halaman statisnya saat build.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Di Next.js, apa keuntungan utama menggunakan fungsi `cache()` dari pustaka React?",
              choices: [
                "Menyimpan gambar langsung di memori browser",
                "Mempercepat waktu build aplikasi",
                "Melakukan deduplikasi pemanggilan fungsi agar tidak dieksekusi berulang kali pada satu render",
                "Mengubah komponen server menjadi komponen statis",
              ],
              answerIndex: 2,
              explanation: "Fungsi cache membungkus logika async kita sehingga jika dipanggil berkali-kali pada satu kali request render, prosesnya hanya dieksekusi sekali.",
            },
          ],
        },
      ],
    },
    {
      slug: "route-handlers",
      title: "Route Handlers (API)",
      description:
        "Backend ringan di dalam Next.js: REST endpoint untuk kebutuhan nyata.",
      topics: [
        "route.ts: GET, POST, PUT, DELETE",
        "Request & Response: body, header, status",
        "Query param & dynamic segment di handler",
        "Validasi input dengan Zod",
        "Error response yang konsisten",
        "Kapan route handler vs server action",
      ],
      items: [
        {
          kind: "step",
          id: "next-4-1",
          title: "Route Handler route.ts: GET & POST",
          explanation:
            "File `app/api/route.ts` digunakan untuk membuat REST API endpoint. Ekspor fungsi bernama `GET`, `POST`, `PUT`, `DELETE` untuk menangani HTTP method.",
          example: {
            code:
              "import { NextResponse } from 'next/server';\n" +
              "export async function GET() {\n" +
              "  return NextResponse.json({ message: 'Halo' });\n" +
              "}",
            output: "Mengakses /api mengembalikan JSON { message: 'Halo' }.",
            note: "Jangan tempatkan route.ts di folder yang sama dengan page.tsx!",
          },
          instruction:
            "Tulis handler GET `export async function GET() { return NextResponse.json({ status: 'ok' }); }`.",
          starterCode: "// Tulis handler GET di sini\n",
          language: "js",
          tests: [
            {
              pattern: "export\\s+async\\s+function\\s+GET\\s*\\(\\s*\\)\\s*\\{\\s*return\\s+NextResponse\\.json\\(",
              message: "Definisikan: export async function GET() { return NextResponse.json(...); }",
            },
          ],
          solution:
            "export async function GET() {\n  return NextResponse.json({ status: 'ok' });\n}",
        },
        {
          kind: "step",
          id: "next-4-2",
          title: "Membaca Request Body & Header",
          explanation:
            "Gunakan `await request.json()` untuk mengambil JSON body dari request POST.",
          example: {
            code:
              "export async function POST(request: Request) {\n" +
              "  const body = await request.json();\n" +
              "  return NextResponse.json(body, { status: 201 });\n" +
              "}",
            output: "Membaca data terikirim dan mengembalikan HTTP status 201 Created.",
            note: "Selalu sertakan status code HTTP yang sesuai.",
          },
          instruction:
            "Lengkapi Route Handler POST di bawah ini dengan mengambil data JSON dari request body yang dikirim oleh client, lalu simpan ke dalam konstanta bernama `body`.",
          starterCode: "import { NextResponse } from 'next/server';\n\nexport async function POST(request: Request) {\n  // Ambil body JSON dari request di bawah ini\n  \n  return NextResponse.json({ data: body }, { status: 201 });\n}",
          language: "text",
          tests: [
            {
              pattern: "const\\s+body\\s*=\\s*await\\s+request\\.json\\(\\)",
              message: "Gunakan: const body = await request.json();",
            },
          ],
          solution: "import { NextResponse } from 'next/server';\n\nexport async function POST(request: Request) {\n  const body = await request.json();\n  return NextResponse.json({ data: body }, { status: 201 });\n}",
        },
        {
          kind: "step",
          id: "next-4-3",
          title: "Query Param & Dynamic Segment di Handler",
          explanation:
            "URL Query params dibaca melalui `request.nextUrl.searchParams`.",
          example: {
            code:
              "export async function GET(request: NextRequest) {\n" +
              "  const search = request.nextUrl.searchParams.get('q');\n" +
              "}",
            output: "Mengambil nilai 'q' dari URL /api/search?q=kopi.",
            note: "NextRequest dari next/server menyediakan utilitas nextUrl.",
          },
          instruction:
            "URL saat ini adalah `/api/search?q=kopi`. Lengkapi kode di bawah untuk mengekstrak nilai parameter `q` ('kopi') dari objek `request.nextUrl.searchParams` dan simpan ke variabel `query`.",
          starterCode: "import { NextRequest, NextResponse } from 'next/server';\n\nexport async function GET(request: NextRequest) {\n  // Ekstrak nilai 'q' dari URL di bawah ini\n  \n  return NextResponse.json({ results: `Mencari: ${query}` });\n}",
          language: "text",
          tests: [
            {
              pattern: "const\\s+query\\s*=\\s*request\\.nextUrl\\.searchParams\\.get\\(\\s*['\"]q['\"]\\s*\\)",
              message: "Gunakan metode .get('q') pada searchParams",
            },
          ],
          solution: "import { NextRequest, NextResponse } from 'next/server';\n\nexport async function GET(request: NextRequest) {\n  const query = request.nextUrl.searchParams.get('q');\n  return NextResponse.json({ results: `Mencari: ${query}` });\n}",
        },
        {
          kind: "step",
          id: "next-4-4",
          title: "Validasi Input Route Handler dengan Zod",
          explanation:
            "Validasi data yang dikirim client di Route Handler menggunakan Zod sebelum diproses lebih lanjut.",
          example: {
            code:
              "const body = await request.json();\n" +
              "const result = UserSchema.safeParse(body);\n" +
              "if (!result.success) return NextResponse.json({ error: result.error }, { status: 400 });",
            output: "Mengembalikan HTTP 400 jika data tidak valid.",
            note: "safeParse tidak melempar error crash saat validasi gagal.",
          },
          instruction:
            "Dalam skenario validasi, `result` adalah objek kembalian Zod. Tambahkan sebuah pengondisian (if statement) yang mengecek apabila validasi gagal (!result.success). Jika gagal, kembalikan objek JSON dengan error beserta status HTTP 400 (Bad Request).",
          starterCode: "import { NextResponse } from 'next/server';\n\nexport async function POST(request: Request) {\n  const body = await request.json();\n  const result = UserSchema.safeParse(body);\n\n  // Tangani kegagalan validasi di bawah ini\n  \n  return NextResponse.json({ message: 'Sukses' });\n}",
          language: "text",
          tests: [
            {
              pattern: "if\\s*\\(\\s*!result\\.success\\s*\\)",
              message: "Gunakan if (!result.success) untuk mengecek kegagalan",
            },
            {
              pattern: "status\\s*:\\s*400",
              message: "Pastikan mengembalikan status HTTP 400 saat validasi gagal",
            },
          ],
          solution: "import { NextResponse } from 'next/server';\n\nexport async function POST(request: Request) {\n  const body = await request.json();\n  const result = UserSchema.safeParse(body);\n\n  if (!result.success) return NextResponse.json({ error: 'Invalid' }, { status: 400 });\n  \n  return NextResponse.json({ message: 'Sukses' });\n}",
        },
        {
          kind: "step",
          id: "next-4-5",
          title: "Struktur Error Response yang Konsisten",
          explanation:
            "Pastikan seluruh endpoint REST API kamu mengembalikan format error JSON yang seragam (misal `{ success: false, error: 'pesan' }`).",
          example: {
            code: "return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });",
            output: "Respon error konsisten dan mudah diproses oleh frontend.",
            note: "Status 401 untuk Unauthorized, 404 untuk Not Found, 500 untuk Internal Server Error.",
          },
          instruction:
            "Kita akan mematuhi format respons error API yang seragam. Kembalikan sebuah NextResponse berformat JSON yang berisi `{ error: 'Not Found' }` dan atur HTTP status code menjadi `404`.",
          starterCode: "import { NextResponse } from 'next/server';\n\nexport async function GET(request: Request) {\n  const user = await db.user.find(1);\n\n  if (!user) {\n    // Tulis kode pengembalian error 404 di sini\n    \n  }\n\n  return NextResponse.json({ user });\n}",
          language: "text",
          tests: [
            {
              pattern: "return\\s+NextResponse\\.json\\(\\s*\\{\\s*error\\s*:\\s*['\"]Not Found['\"]\\s*\\}",
              message: "Pastikan format JSON berisi properti error: 'Not Found'",
            },
            {
              pattern: "\\{\\s*status\\s*:\\s*404\\s*\\}",
              message: "Atur object opsi kedua dengan properti status: 404",
            },
          ],
          solution: "import { NextResponse } from 'next/server';\n\nexport async function GET(request: Request) {\n  const user = await db.user.find(1);\n\n  if (!user) {\n    return NextResponse.json({ error: 'Not Found' }, { status: 404 });\n  }\n\n  return NextResponse.json({ user });\n}",
        },
        {
          kind: "step",
          id: "next-4-6",
          title: "Kapan Route Handler vs Server Action",
          explanation:
            "Gunakan **Server Actions** untuk mutasi form internal aplikasi. Gunakan **Route Handler** untuk REST API publik yang dikonsumsi web/mobile pihak luar.",
          example: {
            code: "// Server Action -> Form internal Next.js\n// Route Handler -> API publik / Webhook eksternal",
            output: "Pemilihan arsitektur backend yang tepat.",
            note: "Route Handler ideal untuk tempat integrasi Webhook (seperti Midtrans/Stripe).",
          },
          instruction:
            "Sebagai simulasi desain arsitektur, kamu diminta membuat sebuah endpoint Webhook untuk menerima pembayaran dari sistem eksternal Midtrans. Karena ini dikonsumsi oleh layanan pihak luar, buatlah dan ekspor fungsi HTTP method `POST` di dalam Route Handler, bukan membuat Server Action.",
          starterCode: "import { NextResponse } from 'next/server';\n\n// Definisikan handler webhook POST di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "export\\s+async\\s+function\\s+POST",
              message: "Pastikan membuat fungsi route handler seperti export async function POST",
            },
          ],
          solution: "import { NextResponse } from 'next/server';\n\nexport async function POST(req: Request) {\n  return NextResponse.json({ received: true });\n}",
        },
        {
          kind: "quiz",
          id: "next-4-kuis",
          title: "Kuis: Route Handlers",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Bagaimana cara membaca request body JSON di dalam Route Handler `route.ts`?",
              choices: [
                "req.body.json()",
                "await request.json()",
                "JSON.parse(request.url)",
                "request.getBody()",
              ],
              answerIndex: 1,
              explanation: "Metode async `await request.json()` menguraikan body request HTTP menjadi objek JavaScript.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Jika kita ingin membaca query string dari URL seperti `/api/search?q=sepatu`, objek apa yang paling tepat digunakan di Route Handler Next.js?",
              choices: [
                "request.nextUrl.searchParams",
                "request.query",
                "req.params",
                "URLSearchParams(request.url)",
              ],
              answerIndex: 0,
              explanation: "NextRequest (argumen pertama handler) menyediakan properti bawaan `nextUrl` yang berisi URL dan mempermudah kita memanggil `searchParams.get('q')` tanpa perlu mem-parsing manual string url.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Kapan sebaiknya kita menggunakan Route Handler (`route.ts`) dibandingkan Server Actions?",
              choices: [
                "Saat ingin memproses kiriman (submit) form biasa dari komponen React kita sendiri",
                "Saat membuat endpoint API publik atau Webhook yang akan dipanggil oleh aplikasi luar (seperti Stripe atau Midtrans)",
                "Saat kita membutuhkan koneksi database yang cepat",
                "Tidak ada bedanya, Server Actions dan Route Handlers 100% sama kegunaannya",
              ],
              answerIndex: 1,
              explanation: "Server Actions sangat optimal dan ringkas untuk mutasi internal aplikasi React kita, sementara Route Handlers adalah REST API standar yang cocok ketika berhadapan dengan client eksternal (layanan pihak ketiga, mobile app, dll).",
            },
          ],
        },
      ],
    },
    {
      slug: "server-actions",
      title: "Form & Server Actions",
      description:
        "Mutasi data tanpa boilerplate API — pola form modern Next.js.",
      topics: [
        "'use server' & action di form",
        "useActionState untuk pending & error",
        "Validasi server-side + pesan error ke UI",
        "revalidatePath & revalidateTag setelah mutasi",
        "Optimistic UI dengan useOptimistic",
        "Keamanan: server action tetap endpoint publik",
      ],
      items: [
        {
          kind: "step",
          id: "next-5-1",
          title: "'use server' & Action di Form",
          explanation:
            "Server Actions memungkinkan pengiriman form HTML langsung menjalankan fungsi di server dengan menempatkan direktif `'use server';` di dalam fungsi action.",
          example: {
            code:
              "async function createPost(formData: FormData) {\n" +
              "  'use server';\n" +
              "  const title = formData.get('title');\n" +
              "}",
            output: "Fungsi dieksekusi di server tanpa perlu membuat API endpoint terpisah.",
            note: "Server action dapat dipasang langsung pada atribut action di <form action={createPost}>.",
          },
          instruction:
            "Ubah fungsi `createPost` di bawah menjadi sebuah Server Action dengan menambahkan direktif yang tepat di baris pertama fungsi tersebut.",
          starterCode: "export async function createPost(formData) {\n  // Jadikan ini Server Action\n  \n  console.log(formData.get('title'));\n}",
          language: "text",
          tests: [
            {
              pattern: "['\"]use\\s+server['\"]",
              message: "Gunakan: 'use server';",
            },
          ],
          solution: "export async function createPost(formData) {\n  'use server';\n  console.log(formData.get('title'));\n}",
        },
        {
          kind: "step",
          id: "next-5-2",
          title: "useActionState untuk Pending & Error",
          explanation:
            "Hook `useActionState` mengelola status pending, respon error, dan data kembalian dari Server Action ke UI Client Component.",
          example: {
            code: "const [state, formAction, isPending] = useActionState(updateUser, null);",
            output: "isPending bernilai true saat form dalam proses pemrosesan server.",
            note: "useActionState menggantikan useFormState di Next.js / React 19.",
          },
          instruction:
            "Fungsi `updateUser` adalah sebuah Server Action. Gunakan hook dari React yang khusus menangani state form action untuk mengelola fungsi tersebut. Ekstrak tiga nilai ke dalam array `[state, formAction, isPending]` dan berikan `null` sebagai argumen nilai awal state.",
          starterCode: "import { useActionState } from 'react';\nimport { updateUser } from './actions';\n\nexport default function Form() {\n  // Inisialisasi hook di sini\n  \n  return <form action={formAction}></form>;\n}",
          language: "text",
          tests: [
            {
              pattern: "const\\s*\\[\\s*state\\s*,\\s*formAction\\s*,\\s*isPending\\s*\\]\\s*=\\s*useActionState\\(\\s*updateUser\\s*,\\s*null\\s*\\)",
              message: "Gunakan: const [state, formAction, isPending] = useActionState(updateUser, null);",
            },
          ],
          solution: "import { useActionState } from 'react';\nimport { updateUser } from './actions';\n\nexport default function Form() {\n  const [state, formAction, isPending] = useActionState(updateUser, null);\n  return <form action={formAction}></form>;\n}",
        },
        {
          kind: "step",
          id: "next-5-3",
          title: "Validasi Server-side + Error UI",
          explanation:
            "Lakukan validasi data di dalam Server Action. Jika tidak valid, kembalikan objek error yang akan ditangkap oleh `state` di Client.",
          example: {
            code: "if (!title) return { error: 'Judul wajib diisi!' };",
            output: "Respon error ditampilkan langsung di bawah input form.",
            note: "Selalu validasi data di server meskipun sudah ada validasi di HTML.",
          },
          instruction:
            "Jika nilai konstanta `title` kosong (falsy), hentikan proses Server Action ini dan kembalikan sebuah objek berisi properti `error` dengan nilai string 'Judul wajib diisi'. Pesan ini nantinya bisa ditangkap oleh `useActionState` di client.",
          starterCode: "export async function createPost(prevState, formData) {\n  'use server';\n  const title = formData.get('title');\n\n  // Tulis kode validasi di sini\n  \n  return { success: true };\n}",
          language: "text",
          tests: [
            {
              pattern: "if\\s*\\(\\s*!title\\s*\\)\\s*return\\s*\\{\\s*error\\s*:\\s*['\"]Judul wajib diisi['\"]\\s*\\}",
              message: "Gunakan pengondisian if (!title) lalu return objek error",
            },
          ],
          solution: "export async function createPost(prevState, formData) {\n  'use server';\n  const title = formData.get('title');\n\n  if (!title) return { error: 'Judul wajib diisi' };\n  return { success: true };\n}",
        },
        {
          kind: "step",
          id: "next-5-4",
          title: "revalidatePath & revalidateTag",
          explanation:
            "Setelah mutasi data di Server Action, panggil `revalidatePath('/posts')` agar Next.js membersihkan cache dan merender ulang tampilan data terbaru.",
          example: {
            code:
              'import { revalidatePath } from "next/cache";\n' +
              "revalidatePath('/dashboard');",
            output: "Cache halaman /dashboard di-refresh instan setelah data bertambah.",
            note: "revalidatePath memberi tahu Next.js untuk memperbarui halaman ter-cache.",
          },
          instruction:
            "Setelah menyimpan postingan baru ke database, rute `/posts` masih menampilkan data lama yang ter-cache. Panggil fungsi Next.js yang sudah diimpor untuk menghapus cache pada rute `/posts`.",
          starterCode: "import { revalidatePath } from 'next/cache';\n\nexport async function addPost(data) {\n  'use server';\n  await db.post.create(data);\n  // Refresh cache halaman /posts di bawah ini\n  \n}",
          language: "text",
          tests: [
            {
              pattern: "revalidatePath\\(\\s*['\"]/posts['\"]\\s*\\)",
              message: "Panggil fungsi revalidatePath('/posts')",
            },
          ],
          solution: "import { revalidatePath } from 'next/cache';\n\nexport async function addPost(data) {\n  'use server';\n  await db.post.create(data);\n  revalidatePath('/posts');\n}",
        },
        {
          kind: "step",
          id: "next-5-5",
          title: "Optimistic UI dengan useOptimistic",
          explanation:
            "Hook `useOptimistic` memperbarui daftar UI secara instan saat form dikirim sebelum Server Action selesai memprosesnya.",
          example: {
            code: "const [optimisticItems, addOptimisticItem] = useOptimistic(items, (state, newOne) => [...state, newOne]);",
            output: "User melihat item bertambah di daftar tanpa jeda loading.",
            note: "Jika server action gagal, tampilan otomatis di-rollback ke state semula.",
          },
          instruction:
            "Agar antarmuka terasa instan, deklarasikan hook yang memberikan umpan balik 'optimistis' sebelum server merespon. Gunakan array destrukturisasi untuk mengambil `[optimisticData, setOptimistic]` dengan memanggil `useOptimistic()` dan berikan variabel `data` sebagai argumennya.",
          starterCode: "import { useOptimistic } from 'react';\n\nexport default function List({ data }) {\n  // Deklarasi hook useOptimistic di sini\n  \n  return <ul>{optimisticData.map(d => <li key={d}>{d}</li>)}</ul>;\n}",
          language: "text",
          tests: [
            {
              pattern: "const\\s*\\[\\s*optimisticData\\s*,\\s*setOptimistic\\s*\\]\\s*=\\s*useOptimistic\\(\\s*data\\s*\\)",
              message: "Deklarasikan: const [optimisticData, setOptimistic] = useOptimistic(data);",
            },
          ],
          solution: "import { useOptimistic } from 'react';\n\nexport default function List({ data }) {\n  const [optimisticData, setOptimistic] = useOptimistic(data);\n  return <ul>{optimisticData.map(d => <li key={d}>{d}</li>)}</ul>;\n}",
        },
        {
          kind: "step",
          id: "next-5-6",
          title: "Keamanan Server Action",
          explanation:
            "Ingat: Server Action pada dasarnya mengekspos HTTP POST endpoint publik di balik layar. Selalu lakukan otorisasi user (`auth()`) di dalam action!",
          example: {
            code:
              "const session = await auth();\n" +
              "if (!session) throw new Error('Unauthorized');",
            output: "Mencegah akses mutasi data oleh pengguna yang belum login.",
            note: "Jangan pernah mengasumsikan Server Action hanya bisa dipanggil dari UI-mu.",
          },
          instruction:
            "Server Action bersifat publik meskipun berada di dalam file internal. Tambahkan pengecekan keamanan: jika nilai `session` kosong (falsy), lempar (throw) sebuah `Error` baru dengan pesan 'Unauthorized' agar eksekusi action langsung terhenti.",
          starterCode: "export async function deleteUser(id) {\n  'use server';\n  const session = await auth();\n  // Tulis proteksi keamanan di sini\n  \n  await db.user.delete(id);\n}",
          language: "text",
          tests: [
            {
              pattern: "if\\s*\\(\\s*!session\\s*\\)\\s*throw\\s+new\\s+Error\\(\\s*['\"]Unauthorized['\"]\\s*\\)",
              message: "Gunakan if (!session) lalu throw new Error('Unauthorized')",
            },
          ],
          solution: "export async function deleteUser(id) {\n  'use server';\n  const session = await auth();\n  if (!session) throw new Error('Unauthorized');\n  await db.user.delete(id);\n}",
        },
        {
          kind: "quiz",
          id: "next-5-kuis",
          title: "Kuis: Form & Server Actions",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Fungsi apa yang dipanggil di dalam Server Action setelah menambahkan data baru agar halaman otomatis menampilkan data paling update?",
              choices: ["reloadPage()", "revalidatePath('/path')", "refreshCache()", "clearCookies()"],
              answerIndex: 1,
              explanation: "revalidatePath() menghapus cache halaman terkait sehingga data terbaru langsung dipublikasikan ke UI.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa penting untuk selalu melakukan validasi otorisasi (auth session) di dalam setiap fungsi Server Action yang mengubah data?",
              choices: [
                "Karena tanpa session, Next.js akan memunculkan syntax error",
                "Karena Server Action sebenarnya menciptakan endpoint HTTP publik (seperti POST), sehingga dapat dipanggil siapa saja jika URL dan parameternya diketahui",
                "Agar ukuran bundle JavaScript menjadi lebih kecil",
                "Karena Server Actions adalah fungsi yang berjalan langsung di browser client",
              ],
              answerIndex: 1,
              explanation: "Server Actions mengekspos endpoint di balik layar, sehingga siapa pun bisa mengirim request buatan langsung ke endpoint tersebut tanpa melalui UI aplikasimu.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara kita menampilkan pesan kesalahan dari server (misal: 'Email sudah terdaftar') ke dalam form yang menggunakan Server Action?",
              choices: [
                "Mengembalikan (return) sebuah array string dan membacanya dengan hook useOptimistic",
                "Mengembalikan (return) sebuah objek JSON berisi error dari dalam Action, lalu menampilkannya menggunakan hasil state dari hook useActionState di client",
                "Menggunakan window.alert() dari dalam Server Action",
                "Menyimpannya ke database dan membacanya ulang di komponen berikutnya",
              ],
              answerIndex: 1,
              explanation: "Pola paling efisien adalah Server Action mengembalikan objek berisi pesan error, lalu client component membaca objek tersebut dari hook useActionState tanpa perlu reload halaman penuh.",
            },
          ],
        },
      ],
    },
    {
      slug: "auth",
      title: "Autentikasi",
      description:
        "Login yang benar: session, proteksi route, dan middleware.",
      topics: [
        "Konsep session vs token",
        "Auth.js (NextAuth): setup & provider",
        "Proteksi halaman di server component",
        "Middleware untuk guard route",
        "Role & otorisasi sederhana",
        "Menyimpan user di database",
      ],
      items: [
        {
          kind: "step",
          id: "next-6-1",
          title: "Konsep Session vs Token di Next.js",
          explanation:
            "Session disimpan di server/database dengan cookie ID, sedangkan JWT Token memuat data terenkripsi di dalam token itu sendiri.",
          example: {
            code: "// HttpOnly Cookie adalah tempat paling aman menyimpan session ID di Next.js",
            output: "Cookie HttpOnly tidak bisa diakses/dicuri oleh skrip XSS client.",
            note: "Selalu gunakan flag HttpOnly & SameSite pada cookie autentikasi.",
          },
          instruction:
            "Keamanan cookie sangat penting untuk session. Tuliskan properti opsi konfigurasi cookie yang mencegah JavaScript dari sisi client (seperti serangan XSS) agar tidak bisa membaca isi cookie tersebut. Cukup tuliskan properti boolean-nya.",
          starterCode: "const cookieOptions = {\n  // Tulis opsi HttpOnly di bawah ini\n  \n  secure: true,\n};",
          language: "text",
          tests: [
            {
              pattern: "httpOnly\\s*:\\s*true",
              message: "Gunakan properti httpOnly dengan nilai true",
            },
          ],
          solution: "const cookieOptions = {\n  httpOnly: true,\n  secure: true,\n};",
        },
        {
          kind: "step",
          id: "next-6-2",
          title: "Auth.js (NextAuth) Setup",
          explanation:
            "Auth.js (NextAuth v5) mengelola autentikasi (OAuth Google, GitHub, Credentials) di Next.js secara instan.",
          example: {
            code:
              'import NextAuth from "next-auth";\n' +
              'import GitHub from "next-auth/providers/github";\n' +
              "export const { handlers, auth, signIn, signOut } = NextAuth({ providers: [GitHub] });",
            output: "Export fungsi auth() dan handler OAuth siap pakai.",
            note: "Auth.js adalah solusi autentikasi standar untuk Next.js App Router.",
          },
          instruction:
            "Panggil fungsi `NextAuth({})` dari pustaka NextAuth dan destrukturisasi hasil kembaliannya untuk mengambil objek `handlers` serta fungsi `auth` agar bisa diekspor.",
          starterCode: "import NextAuth from 'next-auth';\n\n// Lakukan ekspor destrukturisasi dari NextAuth di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "export\\s+const\\s+\\{\\s*handlers\\s*,\\s*auth\\s*\\}\\s*=\\s*NextAuth\\(",
              message: "Ekspor handlers dan auth dari pemanggilan NextAuth()",
            },
          ],
          solution: "import NextAuth from 'next-auth';\n\nexport const { handlers, auth } = NextAuth({});\n",
        },
        {
          kind: "step",
          id: "next-6-3",
          title: "Proteksi Halaman di Server Component",
          explanation:
            "Di Server Component, panggil `await auth()` untuk mengecek sesi user. Jika null, redirect ke halaman login dengan `redirect('/login')`.",
          example: {
            code:
              "const session = await auth();\n" +
              "if (!session) redirect('/login');",
            output: "Pengguna yang belum login otomatis ditolak sebelum halaman sempat dirender.",
            note: "redirect() diimpor dari 'next/navigation'.",
          },
          instruction:
            "Kita akan melindungi halaman Dashboard dari akses tamu. Jika `session` bernilai null (pengguna belum login), panggil fungsi bawaan Next.js untuk melempar (redirect) pengguna ke rute `/login`.",
          starterCode: "import { redirect } from 'next/navigation';\n\nexport default async function Dashboard() {\n  const session = await auth();\n  // Tambahkan proteksi di bawah ini\n  \n  return <h1>Rahasia</h1>;\n}",
          language: "text",
          tests: [
            {
              pattern: "if\\s*\\(\\s*!session\\s*\\)\\s*redirect\\(\\s*['\"]/login['\"]\\s*\\)",
              message: "Gunakan pengondisian if (!session) lalu redirect('/login')",
            },
          ],
          solution: "import { redirect } from 'next/navigation';\n\nexport default async function Dashboard() {\n  const session = await auth();\n  if (!session) redirect('/login');\n  return <h1>Rahasia</h1>;\n}",
        },
        {
          kind: "step",
          id: "next-6-4",
          title: "Middleware untuk Route Guard Global",
          explanation:
            "File `middleware.ts` di root folder mengeksekusi pemeriksaan sesi sebelum request mencapai halaman mana pun.",
          example: {
            code:
              "export function middleware(request: NextRequest) {\n" +
              "  // Proteksi route secara terpusat\n" +
              "}\n" +
              "export const config = { matcher: ['/dashboard/:path*'] };",
            output: "Seluruh sub-route /dashboard otomatis terproteksi secara terpusat.",
            note: "Matcher mengatur URL mana saja yang dilewati oleh middleware.",
          },
          instruction:
            "Kamu ingin middleware ini hanya berjalan pada URL yang diawali dengan `/dashboard`. Ekspor konstanta `config` berupa objek yang memiliki properti `matcher` bernilai array berisi string pola `/dashboard/:path*`.",
          starterCode: "export function middleware(request) {\n  return NextResponse.next();\n}\n\n// Ekspor objek config di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "export\\s+const\\s+config\\s*=\\s*\\{\\s*matcher\\s*:\\s*\\[\\s*['\"]/dashboard/:path\\*['\"]\\s*\\]\\s*\\}",
              message: "Ekspor const config dengan matcher array berisi '/dashboard/:path*'",
            },
          ],
          solution: "export function middleware(request) {\n  return NextResponse.next();\n}\n\nexport const config = { matcher: ['/dashboard/:path*'] };",
        },
        {
          kind: "step",
          id: "next-6-5",
          title: "Role & Otorisasi Sederhana",
          explanation:
            "Pemeriksaan peran (Role-based Authorization) dilakukan dengan mendeteksi `session.user.role === 'admin'`.",
          example: {
            code: "if (session?.user?.role !== 'admin') return <p>Akses Ditolak!</p>;",
            output: "Menolak pengguna biasa mengakses area administrasi.",
            note: "Pastikan properti role disimpan di dalam session JWT/Database.",
          },
          instruction:
            "Di dalam dashboard admin, kamu perlu memastikan penggunanya memiliki peran (role) yang tepat. Jika properti `role` dari opsional berantai `session?.user` BUKAN bernilai string `'admin'`, kembalikan tag `<p>Forbidden</p>` langsung dari dalam komponen ini.",
          starterCode: "export default async function AdminPanel() {\n  const session = await auth();\n  // Tulis proteksi role di bawah ini\n  \n  return <h1>Data Rahasia Admin</h1>;\n}",
          language: "text",
          tests: [
            {
              pattern: "if\\s*\\(\\s*session\\?\\.user\\?\\.role\\s*!==\\s*['\"]admin['\"]\\s*\\)\\s*return\\s*<p>\\s*Forbidden\\s*</p>",
              message: "Gunakan if (session?.user?.role !== 'admin') lalu kembalikan tag <p>Forbidden</p>",
            },
          ],
          solution: "export default async function AdminPanel() {\n  const session = await auth();\n  if (session?.user?.role !== 'admin') return <p>Forbidden</p>;\n  return <h1>Data Rahasia Admin</h1>;\n}",
        },
        {
          kind: "step",
          id: "next-6-6",
          title: "Menyimpan User di Database (Adapter)",
          explanation:
            "Auth.js dapat dihubungkan ke Prisma via `@auth/prisma-adapter` agar data user, akun OAuth, dan session tersimpan di PostgreSQL.",
          example: {
            code: "import { PrismaAdapter } from '@auth/prisma-adapter';\n// { adapter: PrismaAdapter(prisma) }",
            output: "User OAuth otomatis terdaftar ke tabel User di database.",
            note: "Menyimpan user di DB memungkinkan kita menambah properti kustom seperti role/saldo.",
          },
          instruction:
            "Agar Auth.js otomatis menyambungkan dan menyimpan data akun Google ke database PostgreSQL buatanmu, inisialisasi properti konfigurasi bernama `adapter` dengan nilai hasil eksekusi fungsi `PrismaAdapter` yang menerima konstanta `prisma`.",
          starterCode: "import { PrismaAdapter } from '@auth/prisma-adapter';\nimport prisma from './db';\n\nexport const authOptions = {\n  providers: [],\n  // Tambahkan properti adapter di bawah ini\n  \n};",
          language: "text",
          tests: [
            {
              pattern: "adapter\\s*:\\s*PrismaAdapter\\(\\s*prisma\\s*\\)",
              message: "Gunakan opsi adapter: PrismaAdapter(prisma)",
            },
          ],
          solution: "import { PrismaAdapter } from '@auth/prisma-adapter';\nimport prisma from './db';\n\nexport const authOptions = {\n  providers: [],\n  adapter: PrismaAdapter(prisma),\n};",
        },
        {
          kind: "quiz",
          id: "next-6-kuis",
          title: "Kuis: Autentikasi Next.js",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Fungsi apa dari `next/navigation` yang digunakan untuk melempar user yang belum login ke halaman /login di Server Component?",
              choices: ["useNavigate()", "redirect('/login')", "push('/login')", "reload()"],
              answerIndex: 1,
              explanation: "redirect() dari next/navigation melempar HTTP redirect langsung dari server sebelum komponen sempat dirender.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Di mana letak paling aman untuk menyimpan ID sesi (session ID) pengguna agar tidak bisa dicuri oleh skrip berbahaya di browser?",
              choices: [
                "Local Storage",
                "Session Storage",
                "HttpOnly Cookies",
                "Variabel Redux State",
              ],
              answerIndex: 2,
              explanation: "HttpOnly Cookies dikirim otomatis oleh browser ke server namun sama sekali tidak bisa dibaca oleh JavaScript client, sehingga kebal terhadap serangan XSS.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi fitur Middleware pada aplikasi Next.js, khususnya terkait autentikasi?",
              choices: [
                "Menampilkan loading spinner animasi saat perpindahan halaman",
                "Menggantikan fungsi database untuk menyimpan data user",
                "Sebagai penjaga pintu global yang bisa mengecek sesi user sebelum request dari browser sampai ke halaman spesifik",
                "Menerjemahkan bahasa (i18n) teks di dalam HTML",
              ],
              answerIndex: 2,
              explanation: "Middleware berjalan di Edge sebelum rute diproses, sangat ideal untuk memblokir akses ke rute terproteksi (seperti /dashboard/*) tanpa perlu menulis kode pengecekan berulang di setiap file halaman.",
            },
          ],
        },
      ],
    },
    {
      slug: "optimasi-seo",
      title: "Optimasi & SEO",
      description:
        "Fitur yang membuat Next.js dipilih perusahaan: cepat dan terindeks.",
      topics: [
        "next/image: kenapa dan cara pakainya",
        "next/font & layout shift",
        "Metadata API: title, description, Open Graph",
        "sitemap.ts & robots.ts",
        "Lighthouse & Core Web Vitals",
        "Bundle analysis & dynamic import",
      ],
      items: [
        {
          kind: "step",
          id: "next-7-1",
          title: "Komponen next/image",
          explanation:
            "Komponen `<Image>` dari `next/image` otomatis melakukan konversi ke WebP/AVIF, resizing sesuai viewport, dan pemuatan lazy loading.",
          example: {
            code:
              'import Image from "next/image";\n' +
              '<Image src="/logo.png" alt="Logo" width={100} height={50} />',
            output: "Gambar dimuat sangat cepat dan mencegah Cumulative Layout Shift (CLS).",
            note: "Atribut width dan height wajib diisi untuk mendefinisikan rasio aspek.",
          },
          instruction:
            "Kita ingin menampilkan logo di header tanpa menyebabkan Layout Shift. Gunakan komponen `<Image>` yang telah diimpor dengan properti `src=\"/banner.png\"`, `alt=\"Banner\"`, `width={800}`, dan `height={400}`.",
          starterCode: "import Image from 'next/image';\n\nexport default function Header() {\n  return (\n    <header>\n      {/* Tulis elemen Image di bawah ini */}\n      \n    </header>\n  );\n}",
          language: "text",
          tests: [
            {
              pattern: "<Image\\s+src=[\"']/banner\\.png[\"']\\s+alt=[\"']Banner[\"']\\s+width=\\{800\\}\\s+height=\\{400\\}\\s*/?>",
              message: "Pastikan properti src, alt, width, dan height tertulis dengan benar",
            },
          ],
          solution: "import Image from 'next/image';\n\nexport default function Header() {\n  return (\n    <header>\n      <Image src=\"/banner.png\" alt=\"Banner\" width={800} height={400} />\n    </header>\n  );\n}",
        },
        {
          kind: "step",
          id: "next-7-2",
          title: "next/font Mencegah Layout Shift",
          explanation:
            "Module `next/font` mengunduh font Google di build time dan menginjeksinya secara lokal tanpa bergantung pada server luar saat runtime.",
          example: {
            code:
              'import { Inter } from "next/font/google";\n' +
              "const inter = Inter({ subsets: ['latin'] });\n" +
              '<body className={inter.className}>',
            output: "Font terpasang tanpa ada kedipan FOUT (Flash of Unstyled Text).",
            note: "Meningkatkan skor performa Core Web Vitals.",
          },
          instruction:
            "Konfigurasikan font `Inter` dari Google Fonts agar dimuat secara optimal. Deklarasikan konstanta bernama `inter` dan panggil fungsi `Inter()` dengan memberikan objek argumen `{ subsets: ['latin'] }`.",
          starterCode: "import { Inter } from 'next/font/google';\n\n// Konfigurasikan font inter di bawah ini\n\n\nexport default function RootLayout({ children }) {\n  return <html lang=\"en\"><body className={inter.className}>{children}</body></html>;\n}",
          language: "text",
          tests: [
            {
              pattern: "const\\s+inter\\s*=\\s*Inter\\(\\s*\\{\\s*subsets\\s*:\\s*\\[\\s*['\"]latin['\"]\\s*\\]\\s*\\}\\s*\\)",
              message: "Gunakan: const inter = Inter({ subsets: ['latin'] });",
            },
          ],
          solution: "import { Inter } from 'next/font/google';\n\nconst inter = Inter({ subsets: ['latin'] });\n\nexport default function RootLayout({ children }) {\n  return <html lang=\"en\"><body className={inter.className}>{children}</body></html>;\n}",
        },
        {
          kind: "step",
          id: "next-7-3",
          title: "Metadata API (title, description, Open Graph)",
          explanation:
            "Ekspor objek `metadata` di `page.tsx` atau `layout.tsx` untuk mengatur tag HTML `<head>` SEO secara otomatis.",
          example: {
            code:
              "export const metadata: Metadata = {\n" +
              "  title: 'Belajar Next.js',\n" +
              "  description: 'Platform kursus gratis',\n" +
              "};",
            output: "Tag title dan meta description terinjeksi di HTML server response.",
            note: "Gunakan generateMetadata() untuk halaman dengan title dinamis berbasis database.",
          },
          instruction:
            "Tingkatkan SEO halaman ini dengan mengekspor konstanta bernama `metadata` (bertipe `Metadata`). Berikan nilai objek dengan properti `title: 'BiLearn'`. Ini otomatis menginjeksi tag `<title>` ke dalam head HTML.",
          starterCode: "import { Metadata } from 'next';\n\n// Ekspor metadata di bawah ini\n\n\nexport default function HomePage() {\n  return <h1>Selamat Datang di BiLearn</h1>;\n}",
          language: "text",
          tests: [
            {
              pattern: "export\\s+const\\s+metadata\\s*:\\s*Metadata\\s*=\\s*\\{\\s*title\\s*:\\s*['\"]BiLearn['\"]\\s*\\}",
              message: "Gunakan: export const metadata: Metadata = { title: 'BiLearn' };",
            },
          ],
          solution: "import { Metadata } from 'next';\n\nexport const metadata: Metadata = { title: 'BiLearn' };\n\nexport default function HomePage() {\n  return <h1>Selamat Datang di BiLearn</h1>;\n}",
        },
        {
          kind: "step",
          id: "next-7-4",
          title: "sitemap.ts & robots.ts",
          explanation:
            "Buat file `app/sitemap.ts` untuk menghasilkan peta situs XML otomatis bagi bot crawler Google.",
          example: {
            code:
              "export default function sitemap() {\n" +
              "  return [{ url: 'https://site.com', lastModified: new Date() }];\n" +
              "}",
            output: "Generasi sitemap.xml otomatis pada endpoint /sitemap.xml.",
            note: "Memastikan seluruh daftar halaman web terindeks cepat oleh Google.",
          },
          instruction:
            "Buat generator peta situs untuk SEO. Deklarasikan fungsi yang diekspor secara bawaan (export default function) bernama `sitemap`. Fungsi ini harus mengembalikan array kosong `[]` (sebagai langkah awal).",
          starterCode: "import { MetadataRoute } from 'next';\n\n// Definisikan export default function sitemap di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "export\\s+default\\s+function\\s+sitemap\\s*\\(\\s*\\)",
              message: "Deklarasikan fungsi default sitemap()",
            },
            {
              pattern: "return\\s*\\[\\s*\\]\\s*;",
              message: "Kembalikan array kosong []",
            },
          ],
          solution: "import { MetadataRoute } from 'next';\n\nexport default function sitemap(): MetadataRoute.Sitemap {\n  return [];\n}",
        },
        {
          kind: "step",
          id: "next-7-5",
          title: "Lighthouse & Core Web Vitals",
          explanation:
            "Core Web Vitals mengukur 3 metrik utama: LCP (Loading), INP (Interaktivitas), dan CLS (Stabilitas Visual UI).",
          example: {
            code: "// Targetkan skor Lighthouse Web Vitals > 90 untuk SEO teratas",
            output: "Rangking pencarian Google mengutamakan web dengan Vitals baik.",
            note: "Optimasi gambar & hilangkan unused JS untuk menaikkan skor.",
          },
          instruction:
            "Kita akan menggunakan modul `next/web-vitals` yang sering digunakan untuk mengirim data performa ke analytics. Ekspor fungsi `reportWebVitals(metric)` dan lakukan `console.log(metric)` di dalamnya untuk memantau nilai LCP, CLS, dan INP.",
          starterCode: "// Ekspor fungsi reportWebVitals di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "export\\s+function\\s+reportWebVitals\\s*\\(\\s*metric\\s*\\)",
              message: "Pastikan mendeklarasikan export function reportWebVitals(metric)",
            },
            {
              pattern: "console\\.log\\s*\\(\\s*metric\\s*\\)",
              message: "Pastikan mencetak nilai metric ke dalam console",
            },
          ],
          solution: "export function reportWebVitals(metric) {\n  console.log(metric);\n}",
        },
        {
          kind: "step",
          id: "next-7-6",
          title: "Bundle Analysis & dynamic() Import",
          explanation:
            "Gunakan `dynamic()` dari `next/dynamic` untuk mengunduh komponen berat (seperti library Chart/Editor) hanya saat dibutuhkan.",
          example: {
            code:
              'import dynamic from "next/dynamic";\n' +
              "const HeavyChart = dynamic(() => import('./HeavyChart'), { ssr: false });",
            output: "Komponen HeavyChart dipisah dari bundle JavaScript utama.",
            note: "ssr: false berguna jika komponen tersebut mengakses window/DOM khusus client.",
          },
          instruction:
            "Gunakan fungsi `dynamic` yang telah diimpor untuk memuat komponen berat secara asinkron (malas). Deklarasikan konstanta `HeavyComponent` yang memanggil `dynamic()` dan memberikannya callback impor dinamis asinkron `() => import('./Heavy')`.",
          starterCode: "import dynamic from 'next/dynamic';\n\n// Lakukan dynamic import komponen Heavy di bawah ini\n\n\nexport default function Page() {\n  return <HeavyComponent />;\n}",
          language: "text",
          tests: [
            {
              pattern: "const\\s+HeavyComponent\\s*=\\s*dynamic\\(\\s*\\(\\s*\\)\\s*=>\\s*import\\(\\s*['\"]\\./Heavy['\"]\\s*\\)\\s*\\)",
              message: "Gunakan dynamic import untuk komponen Heavy",
            },
          ],
          solution: "import dynamic from 'next/dynamic';\n\nconst HeavyComponent = dynamic(() => import('./Heavy'));\n\nexport default function Page() {\n  return <HeavyComponent />;\n}",
        },
        {
          kind: "quiz",
          id: "next-7-kuis",
          title: "Kuis: Optimasi & SEO",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa sebaiknya menggunakan `<Image>` dari `next/image` dibanding tag `<img>` HTML biasa?",
              choices: [
                "Karena img tag tidak bisa menampilkan gambar WebP",
                "Komponen next/image otomatis melakukan optimasi ukuran, konversi format modern, dan mencegah Cumulative Layout Shift (CLS)",
                "Karena next/image gratis",
                "Karena next/image mengubah warna gambar",
              ],
              answerIndex: 1,
              explanation: "next/image mengotomatiskan kompresi, responsive resizing, dan perlindungan layout shift demi performa Web Vitals.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Untuk mengubah elemen `<head>` HTML (seperti title dan description) di App Router Next.js, pendekatan apa yang paling disarankan?",
              choices: [
                "Mengimpor komponen <Head> dari next/head di setiap halaman",
                "Memanipulasi document.title di dalam hook useEffect",
                "Mengekspor konstanta bernama metadata dari file page.tsx atau layout.tsx",
                "Menulis manual file index.html di root proyek",
              ],
              answerIndex: 2,
              explanation: "App Router (direktori app) menggunakan Metadata API berbasis server. Mengekspor objek (atau fungsi) `metadata` akan memberitahu Next.js untuk menyuntikkan tag meta yang sesuai.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Dalam konteks Core Web Vitals, metrik mana yang akan paling terdampak secara negatif jika halaman memuat font kustom lambat dan menyebabkan teks melompat (Flash of Unstyled Text)?",
              choices: [
                "LCP (Largest Contentful Paint)",
                "INP (Interaction to Next Paint)",
                "CLS (Cumulative Layout Shift)",
                "TTFB (Time to First Byte)",
              ],
              answerIndex: 2,
              explanation: "Perubahan ukuran font atau penggantian font yang tiba-tiba membuat elemen terdorong/berubah posisi (Layout Shift). Modul `next/font` mengatasi ini dengan memuat font secara optimal di build time.",
            },
          ],
        },
      ],
    },
    {
      slug: "deploy",
      title: "Database & Deploy",
      description:
        "Dari localhost ke URL publik: Prisma, Postgres, dan Vercel.",
      topics: [
        "Prisma + PostgreSQL di Next.js",
        "Environment variable: lokal vs production",
        "Deploy ke Vercel: preview & production",
        "Custom domain & HTTPS",
        "Logging & error monitoring dasar",
        "Checklist pre-launch",
      ],
      items: [
        {
          kind: "step",
          id: "next-8-1",
          title: "Prisma Client Instansiasi Singleton",
          explanation:
            "Di Next.js dev mode, instansiasikan Prisma Client dengan pola singleton untuk mencegah error `Too many connections` akibat Hot Reloading.",
          example: {
            code:
              'import { PrismaClient } from "@prisma/client";\n' +
              "const globalForPrisma = global as unknown as { prisma: PrismaClient };\n" +
              "export const prisma = globalForPrisma.prisma || new PrismaClient();",
            output: "Satu koneksi database dipakai ulang secara aman di dev mode.",
            note: "Simpan instansi ini di lib/prisma.ts.",
          },
          instruction:
            "Buat singleton Prisma agar koneksi database stabil saat Hot Reload (Dev Mode). Lengkapi ekspor konstanta `prisma` dengan sebuah operator pengondisian (OR). Jika `globalForPrisma.prisma` sudah ada maka pakai itu, sebaliknya (||) instansiasi yang baru dengan `new PrismaClient()`.",
          starterCode: "import { PrismaClient } from '@prisma/client';\nconst globalForPrisma = global;\n\n// Lengkapi inisialisasi singleton prisma di bawah ini\nexport const prisma = globalForPrisma.prisma \n",
          language: "text",
          tests: [
            {
              pattern: "export\\s+const\\s+prisma\\s*=\\s*globalForPrisma\\.prisma\\s*\\|\\|\\s*new\\s+PrismaClient\\(\\)",
              message: "Gunakan: export const prisma = globalForPrisma.prisma || new PrismaClient()",
            },
          ],
          solution: "import { PrismaClient } from '@prisma/client';\nconst globalForPrisma = global;\n\nexport const prisma = globalForPrisma.prisma || new PrismaClient();",
        },
        {
          kind: "step",
          id: "next-8-2",
          title: "Environment Variables: lokal (.env.local) vs production",
          explanation:
            "Simpan kredensial rahasia lokal di file `.env.local`. Variabel yang ingin diakses client wajib berawalan `NEXT_PUBLIC_`.",
          example: {
            code: "DATABASE_URL=\"postgresql://...\"\nNEXT_PUBLIC_SITE_URL=\"http://localhost:3000\"",
            output: "DATABASE_URL aman di server; NEXT_PUBLIC_SITE_URL dapat dibaca di client.",
            note: "Jangan sertakan atribut NEXT_PUBLIC_ pada password atau API key rahasia!",
          },
          instruction:
            "Kita ingin mempublikasikan URL API ke aplikasi Client Component agar dapat diakses dari browser. Tambahkan variabel `API_URL` dengan nilai `\"https://api.com\"` yang diberi awalan khusus agar diekspos ke client.",
          starterCode: "# File .env.local\nDATABASE_URL=\"postgres://...\"\n# Tulis URL publik di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "NEXT_PUBLIC_API_URL\\s*=\\s*[\"']https://api\\.com[\"']",
              message: 'Tuliskan: NEXT_PUBLIC_API_URL="https://api.com"',
            },
          ],
          solution: "NEXT_PUBLIC_API_URL=\"https://api.com\"",
        },
        {
          kind: "step",
          id: "next-8-3",
          title: "Deploy ke Vercel: Preview & Production",
          explanation:
            "Vercel adalah pencipta Next.js. Setiap kali kamu melakukan Push ke GitHub, Vercel otomatis membuat **Preview Deployment** untuk diuji sebelum di-merge ke branch main (Production).",
          example: {
            code: "// Push ke branch feature -> Preview URL otomatis dibuat Vercel\n// Push/Merge ke branch main -> Production URL terupdate",
            output: "Siklus pengujian otomatis yang sangat nyaman bagi tim.",
            note: "Jangan lupa memasukkan Environment Variables di Vercel Dashboard.",
          },
          instruction:
            "Dalam skenario Continuous Integration (CI), setiap kita mengirimkan PR, Vercel membuat pratinjau. Untuk menghindari build pratinjau mengacaukan database production, konfigurasikan variabel environment `DATABASE_URL` ke database staging (misal: `postgres://staging...`) hanya ketika branch bukan main. Pada kode di bawah, tulis validasi boolean sederhana mengecek apabila `process.env.VERCEL_ENV === 'preview'`.",
          starterCode: "// Vercel CI environment detection (pseudo-code)\nconst dbUrl = process.env.VERCEL_GIT_COMMIT_REF === 'main'\n  ? process.env.DATABASE_URL\n  : process.env.STAGING_DATABASE_URL;\n\n// Tugas: Tulis konfigurasi boolean yang mengecek apakah kita berada di environment preview Vercel (hint: VERCEL_ENV)\nconst isPreview = \n",
          language: "text",
          tests: [
            {
              pattern: "process\\.env\\.VERCEL_ENV\\s*===\\s*['\"]preview['\"]",
              message: "Cek apakah process.env.VERCEL_ENV bernilai 'preview'",
            },
          ],
          solution: "const isPreview = process.env.VERCEL_ENV === 'preview';",
        },
        {
          kind: "step",
          id: "next-8-4",
          title: "Custom Domain & HTTPS",
          explanation:
            "Di Vercel Dashboard, tambahkan domain milikmu (seperti `proyekku.com`) lalu arahkan A Record / CNAME DNS server milikmu.",
          example: {
            code: "A Record -> 76.76.21.21\nCNAME -> cname.vercel-dns.com",
            output: "Domain milikmu terhubung dengan SSL/HTTPS gratis dari Let's Encrypt.",
            note: "Sertifikat SSL dikelola dan diperbarui otomatis oleh Vercel.",
          },
          instruction:
            "Sebelum website online, salah satu tahapannya adalah menambahkan DNS Record untuk menyambungkan custom domain. Pada script otomatisasi di bawah ini, definisikan konstanta `cname` yang bernilai string `'cname.vercel-dns.com'`.",
          starterCode: "async function configureDomain() {\n  const domain = 'proyekku.com';\n  // Deklarasi target CNAME Vercel di bawah ini\n  \n  await dns.setRecord(domain, 'CNAME', cname);\n}",
          language: "text",
          tests: [
            {
              pattern: "const\\s+cname\\s*=\\s*['\"]cname\\.vercel-dns\\.com['\"]",
              message: "Deklarasikan konstanta cname berisi 'cname.vercel-dns.com'",
            },
          ],
          solution: "async function configureDomain() {\n  const domain = 'proyekku.com';\n  const cname = 'cname.vercel-dns.com';\n  await dns.setRecord(domain, 'CNAME', cname);\n}",
        },
        {
          kind: "step",
          id: "next-8-5",
          title: "Logging & Error Monitoring (Sentry)",
          explanation:
            "Pasang platform pemantau error seperti Sentry agar kamu menerima notifikasi instan saat user mengalami crash di production.",
          example: {
            code: "import * as Sentry from '@sentry/nextjs';\n// Otomatis menangkap uncaught error di server & client",
            output: "Mencatat stacktrace lengkap error produksi ke dashboard Sentry.",
            note: "Error monitoring memberi tahu bug produksi sebelum dikomplain oleh client.",
          },
          instruction:
            "Untuk menangkap error production dengan Sentry secara otomatis di Next.js, kamu perlu membungkus konfigurasi build. Impor library `withSentryConfig` dari `@sentry/nextjs` dan jadikan sebagai fungsi pembungkus objek konfigurasi aslimu.",
          starterCode: "const nextConfig = { reactStrictMode: true };\n// Lakukan impor withSentryConfig di bawah ini\n\n\n// Ubah modul ekspor untuk membungkus nextConfig dengan Sentry\nmodule.exports = nextConfig;",
          language: "text",
          tests: [
            {
              pattern: "import\\s+\\{\\s*withSentryConfig\\s*\\}\\s+from\\s+['\"]@sentry/nextjs['\"]",
              message: "Impor fungsi withSentryConfig dari @sentry/nextjs",
            },
            {
              pattern: "module\\.exports\\s*=\\s*withSentryConfig\\s*\\(\\s*nextConfig",
              message: "Bungkus nextConfig dengan withSentryConfig sebelum diekspor",
            },
          ],
          solution: "import { withSentryConfig } from '@sentry/nextjs';\nconst nextConfig = { reactStrictMode: true };\nmodule.exports = withSentryConfig(nextConfig);",
        },
        {
          kind: "step",
          id: "next-8-6",
          title: "Checklist Pre-launch",
          explanation:
            "Checklist sebelum rilis: 1. Jalankan `npm run build` lokal, 2. Pastikan tidak ada `.env` ter-commit, 3. Cek Open Graph & Favicon, 4. Uji di perangkat mobile.",
          example: {
            code: "npm run build && npm run start",
            output: "Memastikan build production lokal bersih tanpa error kompilasi.",
            note: "Uji build produksi di lokal sebelum mengirimkan kode ke rilis publik.",
          },
          instruction:
            "Pastikan tidak ada error kompilasi sebelum kamu mem-push kode yang akan di-deploy ke produksi. Tambahkan script npm pada `package.json` yang akan menjalankan validasi build, namakan kunci script tersebut `\"predeploy\"` dan beri nilainya `\"npm run build\"`.",
          starterCode: "{\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\",\n    // Tambahkan script predeploy di bawah ini\n    \n  }\n}",
          language: "text",
          tests: [
            {
              pattern: "[\"']predeploy[\"']\\s*:\\s*[\"']npm\\s+run\\s+build[\"']",
              message: "Tambahkan script \"predeploy\": \"npm run build\"",
            },
          ],
          solution: "{\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\",\n    \"predeploy\": \"npm run build\"\n  }\n}",
        },
        {
          kind: "quiz",
          id: "next-8-kuis",
          title: "Kuis: Database & Deploy",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Awalan (prefix) apa yang wajib diberikan pada variabel `.env` agar nilainya dapat dibaca oleh Client Component di Next.js?",
              choices: ["PUBLIC_", "NEXT_PUBLIC_", "CLIENT_", "REACT_APP_"],
              answerIndex: 1,
              explanation: "Hanya variabel berawalan NEXT_PUBLIC_ yang disuntikkan Next.js ke dalam bundle JavaScript client.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa kita disarankan menginisialisasi PrismaClient dengan pola 'singleton' (seperti menyimpan instansinya di objek global) saat bekerja pada mode Development di Next.js?",
              choices: [
                "Karena PrismaClient berbayar di development",
                "Agar proses query berjalan 100x lebih cepat",
                "Untuk mencegah munculnya error 'Too many connections' yang diakibatkan oleh fitur Hot-Reloading Next.js yang terus-menerus mereset modul dan membuat koneksi database baru setiap kali file disimpan",
                "Agar kita bisa melakukan migrasi skema database secara otomatis tanpa CLI",
              ],
              answerIndex: 2,
              explanation: "Setiap kamu menyimpan file saat pengembangan, Next.js merekonstruksi environment. Jika koneksi lama tidak disimpan (cache), file db-mu akan kebanjiran koneksi baru dari PrismaClient yang terus-terusan dibuat ulang.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Di platform Vercel, apa kegunaan dari fitur Preview Deployment?",
              choices: [
                "Memeriksa tata bahasa sintaks Inggris secara otomatis",
                "Melakukan backup keseluruhan database",
                "Secara otomatis membangun versi sementara dari aplikasi setiap kali kita membuka Pull Request, sehingga tim bisa menguji tampilan dan fitur web secara live tanpa mengganggu versi asli (production)",
                "Mengubah kode React menjadi kode Vue",
              ],
              answerIndex: 2,
              explanation: "Preview deployments sangat vital untuk tim kolaborasi; memungkinkan penguji coba mengakses URL rahasia hasil dari kode yang masih berada di branch feature.",
            },
          ],
        },
      ],
    },
  ],
};
