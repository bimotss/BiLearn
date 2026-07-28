import type { Track } from "@/lib/types";

export const nextjsTrack: Track = {
  "slug": "nextjs",
  "title": "Next.js",
  "description": "App Router, server components, sampai deploy production.",
  "hours": 60,
  "recommendedPrereqs": [
    "react"
  ],
  "color": "bg-neutral-800",
  "icon": "▲",
  "order": 7,
  "modules": [
    {
      "slug": "persiapan-app-router",
      "title": "Persiapan & App Router",
      "description": "Buat proyek Next.js pertamamu, lalu kuasai routing berbasis file — fondasi semua aplikasi Next.js modern.",
      "topics": [
        "Membuat proyek dengan create-next-app & menjalankan dev server",
        "Kenapa Next.js: masalah yang diselesaikan di atas React",
        "Struktur app/: page, layout, folder = route",
        "Dynamic route [slug] & catch-all",
        "Nested layout & template",
        "loading.tsx, error.tsx, not-found.tsx",
        "Link & navigasi client-side",
        "Route group & private folder"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "next-1-m0",
          "title": "Persiapan: Membuat Proyek Next.js dan Menjalankan Dev Server",
          "body": "# Pengertian\n\n**Next.js** adalah framework yang dibangun di atas React. Kalau di track React kamu membuat proyek dengan Vite dan mengurus routing sendiri lewat library, di Next.js keduanya sudah menjadi bagian framework — beserta rendering di server, optimasi gambar, dan API route.\n\nSebelum menyentuh konsep App Router, satu hal harus jalan lebih dulu: **proyeknya ada di komputermu dan dev server-nya menyala.**\n\n## Prasyarat dan Cara Membuat Proyek\n\n| Kebutuhan | Perintah pemeriksa | Catatan |\n|---|---|---|\n| Node.js versi LTS | `node -v` | Next.js modern menolak Node yang terlalu tua; pakai LTS |\n| npm | `npm -v` | ikut terpasang bersama Node |\n| Proyek baru | `npx create-next-app@latest nama-proyek` | scaffolding resmi, bukan salin folder orang |\n\n```text\n$ npx create-next-app@latest toko-online\n\n√ Would you like to use TypeScript?          » Yes\n√ Would you like to use ESLint?              » Yes\n√ Would you like to use Tailwind CSS?        » Yes\n√ Would you like your code inside a `src/` directory?  » Yes\n√ Would you like to use App Router? (recommended)     » Yes\n\n$ cd toko-online\n$ npm run dev\n  ▲ Next.js 16.2.12\n  - Local:   http://localhost:3000\n  ✓ Ready in 1.4s\n```\n\nJawaban yang dipakai di seluruh track ini: **TypeScript ya, App Router ya**. Kalau kamu memilih *Pages Router*, sebagian besar materi track ini tidak akan cocok — itu sistem routing generasi sebelumnya yang masih didukung tapi tidak lagi dianjurkan untuk proyek baru.\n\n## Isi Folder yang Baru Dibuat\n\n```text\ntoko-online/\n├── src/app/\n│   ├── layout.tsx      <-- kerangka yang membungkus SEMUA halaman\n│   ├── page.tsx        <-- halaman untuk URL \"/\"\n│   └── globals.css\n├── public/             <-- berkas statis; /logo.png berarti public/logo.png\n├── next.config.ts\n├── package.json        <-- di sini ada scripts: dev, build, start, lint\n└── tsconfig.json\n```\n\nAturan yang membedakan Next.js dari React biasa: **nama berkas menentukan perilaku**. `page.tsx` membuat sebuah URL bisa diakses, `layout.tsx` membungkusnya, `loading.tsx` tampil saat menunggu. Folder tanpa `page.tsx` di dalamnya tidak menghasilkan URL apa pun.\n\n## Empat Perintah yang Akan Kamu Pakai Terus\n\n| Perintah | Fungsinya | Kapan dipakai |\n|---|---|---|\n| `npm run dev` | menyalakan dev server + hot reload | sehari-hari saat mengembangkan |\n| `npm run build` | membangun versi produksi | sebelum deploy, dan untuk menemukan error yang tidak muncul di dev |\n| `npm start` | menjalankan hasil build | menguji perilaku produksi di lokal |\n| `npm run lint` | memeriksa gaya & kesalahan umum | sebelum membuat Pull Request |\n\n`npm run build` layak dijalankan sesekali meskipun dev server-mu lancar: sebagian error tipe dan kesalahan pemakaian Server Component **hanya** muncul saat build.\n\n## Analogi Dunia Nyata\n\nReact itu seperti **mesin dan roda**: kuat, tapi kamu masih harus merakit rangka, lampu, dan sistem kemudinya sendiri (routing, rendering, optimasi). Next.js adalah **mobil jadi** dari bengkel yang sama: komponennya sama, tapi susunannya sudah ditentukan.\n\nKonsekuensinya dua arah. Kamu tidak perlu memutuskan struktur folder — tapi kamu **wajib** mengikuti konvensinya. `page.tsx` yang salah nama tidak akan pernah muncul sebagai halaman, dan tidak ada pesan error yang menjelaskan kenapa.\n\n## Jebakan yang Menjatuhkan Hampir Semua Pemula\n\n1. **Memilih Pages Router lalu mengikuti materi App Router.** Semua contoh gagal. Kalau ragu, periksa: ada folder `app/` berarti App Router, ada folder `pages/` berarti Pages Router.\n2. **Menamai berkas `Page.tsx` atau `index.tsx`.** Konvensinya huruf kecil semua: `page.tsx`. Berkas dengan nama lain di dalam folder route tidak menghasilkan URL.\n3. **Menjalankan `npm run dev` di folder induk.** Terminal harus berada di dalam folder proyek — periksa `package.json` ada di situ.\n4. **Menyalin folder proyek orang lain lengkap dengan `node_modules`.** Jauh lebih rapuh daripada `npm install` sendiri, dan sering menghasilkan error versi yang sulit dilacak.\n5. **Port 3000 sudah dipakai.** Next.js akan pindah ke 3001 dan menyebutkannya di baris `Local:` — bacalah alamat itu, jangan berasumsi selalu 3000.\n6. **Mengira dev server perlu dimatikan-nyalakan setiap kali menyimpan.** Hot reload sudah menanganinya; yang perlu restart hanya perubahan pada `next.config.ts` atau `.env`.\n\n## Kaitan ke Dunia Kerja\n\n- `create-next-app` adalah cara resmi memulai, dan di **interview** kamu bisa ditanya mengapa memilih Next.js dibanding React murni — jawabannya menyebut SEO, rendering di server, dan routing bawaan, bukan \"lebih modern\".\n- Di tim, **CI menjalankan `npm run build` dan `npm run lint`** pada setiap Pull Request. Kalau keduanya belum pernah kamu jalankan di lokal, PR-mu akan merah lebih dulu sebelum satu orang pun membacanya.\n- Struktur `app/` yang konsisten adalah alasan orang baru bisa langsung membaca proyek Next.js orang lain — itu nilai jual framework ini di perusahaan dengan pergantian anggota tim.\n\n> **Kapan dipakai:** sekali di awal setiap proyek. Setelah `npm run dev` menampilkan `✓ Ready`, buka `http://localhost:3000` dan pastikan halaman bawaan muncul **sebelum** kamu menghapus isinya — supaya kalau nanti ada yang rusak, kamu tahu penyebabnya kodemu, bukan pemasangannya.\n\n> **Catatan tentang latihan di BiLearn:** panel latihan track ini **tidak menjalankan Next.js** (butuh server sendiri, dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Keluaran nyata ditampilkan di bagian **Contoh** setiap latihan."
        },
        {
          "kind": "step",
          "id": "next-1-0",
          "title": "Membuat Proyek Next.js Pertama",
          "explanation": "Proyek Next.js dibuat dengan `create-next-app`, dijalankan lewat `npx` supaya kamu memakai versi terbaru tanpa memasang apa pun secara global. Penanda `@latest` itu penting: tanpa ia, npx bisa memakai versi lama yang tersimpan di cache komputermu, dan kamu memulai proyek baru dengan perkakas usang. Nama proyek ditulis sebagai argumen terakhir dan akan menjadi nama foldernya — pakai huruf kecil dan tanda hubung, karena npm menolak nama berhuruf besar. Setelah perintah ini selesai, dua langkah berikutnya selalu sama: masuk ke foldernya lalu `npm run dev`. Jebakan yang sering: menjalankannya di dalam folder proyek yang sudah ada, sehingga proyek baru bersarang di dalam proyek lama dan dua `package.json` saling membingungkan.",
          "example": {
            "code": "npx create-next-app@latest blog-saya\ncd blog-saya\nnpm run dev",
            "output": "Creating a new Next.js app in /home/bimo/blog-saya.\n\nInstalling dependencies:\n- react\n- react-dom\n- next\n\nSuccess! Created blog-saya\n\n  ▲ Next.js 16.2.12\n  - Local:   http://localhost:3000\n  ✓ Ready in 1.4s",
            "note": "Kalau baris `Local:` menyebut port selain 3000, berarti 3000 sedang dipakai program lain — buka alamat yang disebutkan, jangan yang kamu hafal. Catatan jujur: perintah ini tidak dijalankan di panel preview; yang diperiksa adalah perintah yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Kamu berada di folder kosong dan ingin membuat proyek Next.js baru bernama `toko-online` memakai versi perkakas paling baru — tanpa memasang generator itu secara global lebih dulu. Tulis satu perintah yang melakukannya.",
          "starterCode": "# tulis perintahnya di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "npx\\s+create-next-app@latest",
              "message": "Jalankan generator resminya lewat `npx` (tanpa memasang global), dan tambahkan penanda versi terbaru setelah nama paketnya dengan tanda @ — tanpa itu npx bisa memakai versi lama dari cache."
            },
            {
              "pattern": "create-next-app@latest\\s+toko-online",
              "message": "Sebutkan nama proyeknya sebagai argumen terakhir, tepat setelah nama paket. Nama itu akan jadi nama folder, jadi tulis persis seperti yang diminta (huruf kecil dan tanda hubung)."
            }
          ],
          "solution": "npx create-next-app@latest toko-online"
        },
        {
          "kind": "materi",
          "id": "next-1-m1",
          "title": "Pengenalan App Router & Arsitektur Routing Next.js",
          "body": "# Pengenalan App Router & Routing Berbasis File\n\nDi React biasa (SPA), kamu biasanya menggunakan library eksternal seperti React Router untuk menangani perpindahan halaman. Kode aplikasi kamu dikompilasi menjadi satu file JavaScript besar, diunduh seluruhnya oleh browser, lalu browser merender halaman dari nol. Pendekatan ini membuat loading awal lambat dan halaman sulit diindeks oleh mesin pencari seperti Google (SEO buruk).\n\nNext.js App Router mengubah total arsitektur ini. Next.js memperkenalkan **routing berbasis struktur folder** di dalam direktori `app/`. Setiap folder mewakili segmen URL, dan berkas khusus di dalamnya (`page.tsx`, `layout.tsx`) menentukan tampilan serta perilakunya.\n\n## Struktur Konvensi Berkas di Direktori app/\n\nBerikut adalah hirarki konvensi berkas utama di Next.js App Router:\n\n```text\napp/\n├── layout.tsx         (Layout utama/root yang membungkus seluruh aplikasi)\n├── page.tsx           (Halaman utama / beranda)\n├── loading.tsx        (Fallback UI otomatis menggunakan React Suspense)\n├── error.tsx          (Error boundary client-side untuk menangkap crash)\n├── not-found.tsx      (Halaman khusus 404 saat route tidak ditemukan)\n├── blog/\n│   ├── page.tsx       (Halaman /blog)\n│   └── [slug]/\n│       └── page.tsx   (Dynamic Route: /blog/tutorial-react, /blog/nextjs-15)\n└── (auth)/            (Route Group: mengelompokkan folder tanpa menambah segmen URL)\n    ├── login/page.tsx (URL tetap /login, bukan /(auth)/login)\n    └── layout.tsx     (Layout khusus halaman autentikasi)\n```\n\n## Segmen Rute Dinamis & Catch-All\n\nUntuk menangani rute dinamis seperti ID produk atau slug artikel, gunakan kurung siku pada nama folder (`[slug]`). Jika kamu membutuhkan segmen dinamis tingkat lanjut yang bisa menangkap banyak sub-path sekaligus (seperti sistem dokumentasi), gunakan catch-all route (`[...slug]`).\n\n| Jenis Route | Contoh Folder | URL yang Cocok | Parameter yang Diterima (`params`) |\n|---|---|---|---|\n| **Static** | `app/about/page.tsx` | `/about` | Tidak ada |\n| **Dynamic** | `app/blog/[slug]/page.tsx` | `/blog/belajar-next` | `{ slug: 'belajar-next' }` |\n| **Catch-all** | `app/docs/[...slug]/page.tsx` | `/docs/v1/install` | `{ slug: ['v1', 'install'] }` |\n| **Optional Catch-all** | `app/shop/[[...slug]]/page.tsx` | `/shop` atau `/shop/shoes` | `{ slug: undefined }` atau `{ slug: ['shoes'] }` |\n\n> **Penting (Next.js Terbaru):** Di versi Next.js modern, properti `params` pada komponen `page.tsx` berbentuk `Promise`. Kamu wajib melakukan `await params` sebelum membaca properti di dalamnya!\n\n## Layout vs Template\n\n1. **`layout.tsx`**: Membungkus komponen anak (`children`). UI layout **tidak akan di-remount** saat pengguna berpindah antar sub-route. State input atau scroll position di dalam layout akan tetap bertahan (efisien).\n2. **`template.tsx`**: Mirip layout, namun instansinya **selalu dibuat ulang (remount)** setiap kali pengguna berpindah rute. Gunakan template jika kamu membutuhkan efek animasi transisi halaman atau reset state Form secara otomatis.\n\n## Route Group & Private Folder\n\n- **Route Group `(nama)`**: Folder dengan tanda kurung biasa berguna untuk mengelompokkan kode (misalnya `(marketing)` vs `(dashboard)`) tanpa memengaruhi URL akhir.\n- **Private Folder `_folder`**: Folder berawalan garis bawah menandakan berkas internal yang diabaikan oleh routing engine Next.js.\n\n## Analogi Dunia Nyata\n\nBayangkan aplikasi Next.js sebagai sebuah gedung mall modern. `layout.tsx` adalah struktur bangunan mall (eskalator, pendingin ruangan, pondasi) yang selalu berdiri kokoh dan tidak pernah dibongkar. `page.tsx` adalah toko-toko di dalamnya yang berganti isi sesuai ruangan/lantai (`URL path`) yang kamu kunjungi. Ketika kamu berpindah toko di lantai 2, kamu tidak perlu membangun ulang eskalator mall.\n\n## Jebakan & Kesalahan Umum\n\n1. **Salah Menamai File Halaman**: Membuat file `index.tsx` atau `home.tsx` di dalam folder `app/`. Next.js hanya mengenali `page.tsx` sebagai titik masuk rute publik!\n2. **Lupa Meng-await Params**: Menulis `const { slug } = params;` tanpa `await` pada Next.js versi baru akan menghasilkan warning/error runtime.\n3. **Menggunakan Tag `<a>` Biasa**: Menggunakan `<a href=\"/about\">` akan melakukan full browser reload dan membuang state aplikasi. Gunakan selalu `<Link href=\"/about\">` dari `next/link`.\n\n## Kaitan ke Dunia Kerja\n\nDi industri software house dan e-commerce besar, arsitektur App Router digunakan untuk membangun aplikasi skala enterprise. Struktur folder yang rapi memudahkan pembagian tugas tim front-end, sementara fitur prefetching otomatis dari `next/link` meningkatkan rasio konversi penjualan karena halaman terbuka secara instan."
        },
        {
          "kind": "step",
          "id": "next-1-1",
          "title": "Kenapa Next.js?",
          "explanation": "Next.js adalah framework pelengkap React yang dirancang untuk mengatasi berbagai keterbatasan React murni saat membangun aplikasi web siap produksi. Pada React murni (SPA), seluruh rendering antarmuka pengguna dikerjakan di browser pengguna. Hal ini sering membuat waktu muat awal (Initial Load) menjadi lambat dan konten sulit terbaca oleh mesin pencari seperti Google, sehingga skor SEO menjadi buruk. Next.js memecahkan masalah ini dengan memproses rendering di server (Server-Side Rendering) sebelum HTML dikirim ke browser. Hasilnya, situs web terbuka sangat cepat, langsung terindeksi oleh mesin pencari, dan developer tidak perlu dipusingkan oleh konfigurasi bundler yang rumit. Gunakan Next.js saat kamu ingin membangun aplikasi web skala menengah hingga besar yang membutuhkan kecepatan tinggi dan keterindeksan SEO yang baik.",
          "example": {
            "code": "// Next.js menggabungkan React UI dengan render server otomatis\nexport const metadata = { title: 'Beranda' };",
            "output": "Halaman web termuat cepat dan langsung terindeks mesin pencari (SEO).",
            "note": "Framework Next.js disukai perusahaan besar untuk aplikasi skala produksi."
          },
          "instruction": "Next.js memberikan fitur SEO otomatis melalui Metadata API. Tambahkan objek konstanta `metadata` yang diekspor untuk halaman ini, berisi properti `title` bernilai string 'Beranda'.",
          "starterCode": "// Ekspor objek metadata di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+const\\s+metadata\\s*=\\s*\\{\\s*title\\s*:\\s*['\"]Beranda['\"]\\s*\\}?;?",
              "message": "Pastikan kamu mengekspor objek metadata dengan title 'Beranda'"
            }
          ],
          "solution": "export const metadata = {\n  title: 'Beranda',\n};"
        },
        {
          "kind": "step",
          "id": "next-1-2",
          "title": "Struktur Folder app/: page.tsx & layout.tsx",
          "explanation": "Pada arsitektur App Router Next.js, hirarki folder di dalam direktori `app/` secara otomatis mencerminkan struktur path URL aplikasi web kamu. Berkas khusus bernama `page.tsx` berfungsi sebagai tampilan antarmuka utama untuk rute tersebut, sedangkan berkas `layout.tsx` berfungsi sebagai pembungkus (wrapper) yang membagikan komponen navigasi atau header antar sub-halaman. Dengan memisahkan layout dan page, Next.js tidak perlu merender ulang komponen navigasi saat pengguna berpindah halaman, sehingga meningkatkan efisiensi performa. Gunakan `layout.tsx` di folder root untuk menempatkan header, footer, dan provider global. Jebakan umum pemula adalah menamai berkas halaman dengan nama `index.tsx` seperti pada arsitektur lama; pastikan kamu selalu menggunakan nama `page.tsx` agar rute terdeteksi oleh Next.js.",
          "example": {
            "code": "// app/about/page.tsx -> URL /about\nexport default function AboutPage() { return <h1>About</h1>; }",
            "output": "Mengakses /about di browser merender komponen AboutPage.",
            "note": "Hanya file bernama page.tsx yang dijadikan halaman publik."
          },
          "instruction": "Tuliskan komponen halaman utama bernama `Page` yang mengekspor fungsi default dan mengembalikan tag `<h1>Home</h1>`.",
          "starterCode": "// Tulis komponen Page di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "export\\s+default\\s+function\\s+Page",
              "message": "Berkas `page.tsx` wajib mengekspor komponennya sebagai DEFAULT export — itu satu-satunya cara Next.js mengenalinya sebagai halaman. Named export tidak akan terpakai, dan yang muncul halaman 404."
            },
            {
              "pattern": "<h1>\\s*Home\\s*</h1>",
              "message": "Kembalikan JSX yang diminta. Nama fungsinya sendiri bebas karena yang dibaca Next.js adalah default export-nya, tapi menamainya `Page` adalah konvensi dokumentasi resmi."
            }
          ],
          "solution": "export default function Page() {\n  return <h1>Home</h1>;\n}"
        },
        {
          "kind": "step",
          "id": "next-1-3",
          "title": "Dynamic Route [slug]",
          "explanation": "Folder yang dibungkus dengan tanda kurung siku seperti `[slug]` membuat rute dinamis yang dapat menerima parameter variabel dari URL, seperti `/blog/react-tutorial` atau `/user/42`. Nilai parameter ini dapat ditangkap di dalam komponen halaman melalui properti `params`. Pada versi Next.js terbaru, `params` disediakan dalam bentuk `Promise` sehingga kamu wajib menggunakan kata kunci `await` sebelum mengakses properti di dalamnya. Gunakan rute dinamis ini saat kamu membangun halaman detail produk, artikel blog, atau profil pengguna yang struktur tampilannya sama namun datanya berbeda-beda sesuai ID URL. Jebakan paling sering terjadi ketika developer lupa meng-await `params` pada Server Component async, yang akan menyebabkan error runtime atau warning saat proses kompilasi.",
          "example": {
            "code": "export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;\n  return <h1>Post: {slug}</h1>;\n}",
            "output": "<h1>Post: react-tutorial</h1> saat mengakses /blog/react-tutorial",
            "note": "Di Next.js terbaru, params bertipe Promise yang harus di-await. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Lengkapi komponen async `UserPage` di bawah dengan mengekstrak nilai `id` dari argumen `params` menggunakan sintaks `await`.",
          "starterCode": "export default async function UserPage({ params }) {\n  // Ekstrak 'id' dari params di bawah ini\n  \n  return <h1>User: {id}</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+\\{\\s*id\\s*\\}\\s*=\\s*await\\s+params\\s*;?",
              "message": "Gunakan: const { id } = await params;"
            }
          ],
          "solution": "export default async function UserPage({ params }) {\n  const { id } = await params;\n  return <h1>User: {id}</h1>;\n}"
        },
        {
          "kind": "step",
          "id": "next-1-4",
          "title": "Nested Layout & Template",
          "explanation": "Next.js mendukung penataan layout bersarang (Nested Layout) di mana sebuah sub-folder dapat memiliki `layout.tsx` sendiri yang membungkus sub-halaman di dalamnya tanpa menggantikan layout root. Ketika pengguna berpindah antar rute di dalam layout yang sama, komponen `layout.tsx` tidak akan di-remount sehingga state lokal (seperti input form atau posisi scroll sidebar) akan tetap terjaga. Sebaliknya, jika kamu menginginkan komponen wrapper yang selalu membuat ulang instansinya setiap kali terjadi navigasi rute (misalnya untuk memicu ulang animasi transisi), kamu dapat menggunakan berkas konvensi `template.tsx`. Gunakan `layout.tsx` untuk elemen navigasi persisten dan gunakan `template.tsx` khusus saat membutuhkan reset state atau animasi per rute.",
          "example": {
            "code": "export default function DashboardLayout({ children }: { children: React.ReactNode }) {\n  return <section><nav></nav>{children}</section>;\n}",
            "output": "Pindah dari /dashboard/statistik ke /dashboard/pesanan:\n\n<section>\n  <nav>...</nav>        ← TIDAK dirender ulang, scroll-nya tetap\n  <StatistikPage />  →  <PesananPage />   ← hanya bagian ini berganti\n</section>",
            "note": "layout.tsx sangat hemat performa untuk tempat navigasi."
          },
          "instruction": "Folder `app/dashboard/` butuh kerangka yang bertahan saat pengguna berpindah antar sub-halaman. Buat komponen layout di berkas `app/dashboard/layout.tsx`: satu default export bernama `Layout`, menerima `children` bertipe `React.ReactNode`, dan membungkusnya di dalam satu `<div>`.",
          "starterCode": "// Tulis komponen Layout di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "export\\s+default\\s+function\\s+Layout\\s*\\(\\s*\\{\\s*children\\s*\\}\\s*:\\s*\\{\\s*children\\s*:\\s*React\\.ReactNode\\s*\\}\\s*\\)",
              "message": "Definisikan komponen Layout sesuai instruksi"
            }
          ],
          "solution": "export default function Layout({ children }: { children: React.ReactNode }) {\n  return <div>{children}</div>;\n}"
        },
        {
          "kind": "step",
          "id": "next-1-5",
          "title": "loading.tsx, error.tsx, dan not-found.tsx",
          "explanation": "Next.js menyediakan berkas konvensi khusus untuk menangani status loading, error handling, dan tampilan 404 secara deklaratif di setiap segmen rute. Berkas `loading.tsx` otomatis dibungkus menggunakan `React Suspense` untuk menampilkan indikator pemuatan sementara komponen async mengunduh data di server. Berkas `error.tsx` bertindak sebagai Error Boundary client-side untuk menangkap kegagalan tak terduga tanpa merusak seluruh antarmuka aplikasi. Sementara berkas `not-found.tsx` menampilkan halaman khusus saat pemicu `notFound()` dipanggil atau URL tidak cocok. Gunakan berkas konvensi ini untuk meningkatkan kenyamanan pengalaman pengguna (UX) saat aplikasi berinteraksi dengan koneksi jaringan yang lambat atau terjadi kendala sistem.",
          "example": {
            "code": "// app/loading.tsx\nexport default function Loading() { return <p>Loading...</p>; }",
            "output": "Otomatis tampil saat halaman async sedang mengunduh data di server.",
            "note": "not-found.tsx dapat dipanggil manual dengan fungsi notFound()."
          },
          "instruction": "Halaman daftar produk mengambil data di server dan pengguna melihat layar kosong selama menunggu. Buat berkas dengan nama khusus yang otomatis dipakai Next.js sebagai penampil sementara, isinya satu default export bernama `Loading` yang menampilkan teks `Loading...` di dalam elemen `p`.",
          "starterCode": "// Tulis komponen Loading di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "export\\s+default\\s+function\\s+Loading\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<p>\\s*Loading\\.\\.\\.\\s*</p>\\s*;?\\s*\\}",
              "message": "Tuliskan komponen Loading"
            }
          ],
          "solution": "export default function Loading() {\n  return <p>Loading...</p>;\n}"
        },
        {
          "kind": "step",
          "id": "next-1-6",
          "title": "Link & Navigasi Client-Side di Next.js",
          "explanation": "Untuk melakukan perpindahan halaman tanpa memicu muat ulang browser secara penuh (Full Page Reload), Next.js menyediakan komponen `<Link>` dari modul `next/link`. Komponen ini memperluas tag HTML `<a>` standar dengan menambahkan fitur prefetching otomatis: ketika tautan masuk ke dalam area pandang (viewport) pengguna, Next.js akan mengunduh kode halaman tujuan di latar belakang secara tenang. Hasilnya, ketika pengguna mengklik tautan tersebut, halaman akan berpindah secara instan layaknya aplikasi Single Page Application (SPA) yang sangat responsif. Gunakan selalu komponen `<Link>` untuk seluruh navigasi internal aplikasi kamu. Hindari penggunaan tag `<a>` biasa untuk navigasi internal karena akan membuang state aplikasi dan merusak performa prefetching.",
          "example": {
            "code": "import Link from \"next/link\";\n<Link href=\"/dashboard\">Dashboard</Link>",
            "output": "Navigasi instan dengan prefetching otomatis di viewport.",
            "note": "Import Link selalu dari 'next/link' (bukan react-router). Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Gunakan komponen `<Link>` dari Next.js untuk membuat navigasi client-side menuju rute `/about` dengan teks 'Tentang Kami'.",
          "starterCode": "import Link from \"next/link\";\n\nexport default function Navigation() {\n  return (\n    <nav>\n      {/* Tambahkan link ke /about di sini */}\n      \n    </nav>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "<Link\\s+href=[\"']/about[\"']>\\s*Tentang Kami\\s*</Link>",
              "message": "Gunakan: <Link href=\"/about\">Tentang Kami</Link>"
            }
          ],
          "solution": "import Link from \"next/link\";\n\nexport default function Navigation() {\n  return (\n    <nav>\n      <Link href=\"/about\">Tentang Kami</Link>\n    </nav>\n  );\n}"
        },
        {
          "kind": "step",
          "id": "next-1-7",
          "title": "Route Group (folder) & Private Folder _folder",
          "explanation": "Route Group dibentuk dengan menamai folder menggunakan tanda kurung biasa seperti `(auth)` atau `(marketing)`. Fitur ini memungkinkan kamu mengelompokkan berkas-berkas rute yang saling berhubungan untuk kerapian arsitektur tanpa menambahkan kata tersebut ke dalam segmen URL akhir pengguna. Selain itu, Route Group memungkinkan kamu menerapkan `layout.tsx` yang berbeda untuk kelompok rute tertentu (misalnya layout khusus autentikasi tanpa navbar). Jika kamu ingin membuat folder internal yang benar-benar diabaikan oleh routing engine (misalnya tempat menyimpan komponen UI atau helper), gunakan awalan garis bawah seperti `_components`. Gunakan Route Group saat aplikasi kamu memiliki struktur organisasi tim yang besar atau membutuhkan tampilan layout yang berbeda-beda.",
          "example": {
            "code": "app/(shop)/shoes/page.tsx\napp/(shop)/shirts/page.tsx",
            "output": "Halaman diakses lewat URL /shoes dan /shirts, bukan /shop/shoes.",
            "note": "Route Group juga berguna untuk menerapkan layout berbeda antar kelompok halaman. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Di dalam folder grup `(auth)`, kamu ingin semua halaman autentikasi tidak menampilkan navbar utama. Buatlah komponen fungsi `AuthLayout` yang membungkus properti `children` dengan tag `<main>`. Pastikan fungsi diekspor secara default.",
          "starterCode": "// Buat komponen AuthLayout di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+default\\s+function\\s+AuthLayout",
              "message": "Pastikan fungsi bernama AuthLayout dan diekspor default"
            },
            {
              "pattern": "<main>\\s*\\{\\s*children\\s*\\}\\s*</main>",
              "message": "Layout harus mengembalikan tag <main> berisi children"
            }
          ],
          "solution": "export default function AuthLayout({ children }) {\n  return <main>{children}</main>;\n}"
        },
        {
          "kind": "quiz",
          "id": "next-1-kuis",
          "title": "Kuis: App Router",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Apa fungsi utama dari berkas konvensi `loading.tsx` di Next.js App Router?",
              "choices": [
                "Menguji kecepatan jaringan internet pengguna",
                "Otomatis membungkus halaman dengan React Suspense fallback UI saat data sedang di-fetch di server",
                "Menghapus cache browser secara paksa",
                "Menghentikan proses render komponen secara permanen"
              ],
              "answerIndex": 1,
              "explanation": "loading.tsx secara otomatis dijadikan fallback Suspense oleh Next.js selama server melakukan data fetching asinkron."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Manakah cara yang benar untuk membuat rute dinamis (dynamic route) di dalam folder app Next.js?",
              "choices": [
                "Folder bernama :slug",
                "Folder bernama {slug}",
                "Folder bernama [slug]",
                "File bernama route.dynamic.tsx"
              ],
              "answerIndex": 2,
              "explanation": "Di Next.js App Router, tanda kurung siku seperti [slug] digunakan untuk menandakan segmen URL dinamis yang nilainya bisa berubah-ubah."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Apa efek utama dari menaruh halaman di dalam folder Route Group, misalnya (marketing)?",
              "choices": [
                "Folder tersebut akan dilindungi oleh autentikasi",
                "Folder tersebut tidak akan diproses oleh Next.js pada saat build",
                "Kata 'marketing' tidak akan masuk ke dalam struktur URL halaman di dalamnya",
                "Semua file di dalamnya secara otomatis akan dirender di sisi client"
              ],
              "answerIndex": 2,
              "explanation": "Tanda kurung biasa () digunakan untuk membuat Route Group. Ini berguna untuk merapikan file dan menerapkan layout, tanpa menambah segmen ke dalam URL akhir."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Tim kamu sedang mengembangkan aplikasi e-commerce. Manakah kasus yang paling tepat untuk menggunakan Server Components secara default di Next.js?",
              "choices": [
                "Halaman yang memiliki banyak interaksi pengguna seperti tombol 'Like' dan animasi form",
                "Halaman katalog produk yang datanya diambil dari database dan tidak membutuhkan interaksi client-side yang rumit",
                "Komponen keranjang belanja yang harus merespons perubahan state secara real-time",
                "Komponen modal pop-up yang menangani input dari pengguna"
              ],
              "answerIndex": 1,
              "explanation": "Server Components sangat ideal untuk halaman yang bersifat read-only dan berat di pemrosesan data (seperti mengambil dari database), sehingga mengurangi ukuran bundle JavaScript yang dikirim ke client."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Saat pertama kali menginisialisasi proyek dengan 'npx create-next-app@latest', struktur folder mana yang saat ini menjadi standar baru yang direkomendasikan untuk routing di Next.js?",
              "choices": [
                "Folder 'pages' dengan pendekatan Pages Router",
                "Folder 'src/routes' untuk menangani rute secara manual",
                "Folder 'app' yang menggunakan App Router berbasis Server Components",
                "Folder 'components/views' yang mirip dengan React tradisional"
              ],
              "answerIndex": 2,
              "explanation": "App Router (folder 'app') adalah paradigma baru di Next.js yang direkomendasikan karena mendukung fitur mutakhir seperti React Server Components, layout bersarang, dan streaming."
            }
          ]
        }
      ]
    },
    {
      "slug": "server-client",
      "title": "Server vs Client Components",
      "description": "Konsep pembeda Next.js modern — salah paham di sini, salah arsitektur semuanya.",
      "topics": [
        "Server component: default, kenapa, dan batasannya",
        "'use client': kapan benar-benar dibutuhkan",
        "Boundary: server membungkus client, bukan sebaliknya",
        "Mengoper data & children menembus boundary",
        "Pola komposisi: interaktif di daun, data di akar",
        "Kesalahan umum: 'use client' di root, import server code ke client"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "next-2-m1",
          "title": "Model Mental Server vs Client Components di Next.js",
          "body": "# Model Mental Server vs Client Components\n\nDi aplikasi React tradisional, seluruh komponen dijalankan di browser (Client). Ini berarti setiap pustaka atau komponen yang kamu gunakan akan dikemas ke dalam JavaScript bundle dan dikirimkan melalui jaringan ke pengguna.\n\nNext.js App Router memperkenalkan paradigma baru bernama **React Server Components (RSC)**. Di Next.js, seluruh komponen di dalam direktori `app/` secara default adalah **Server Component**!\n\n## Perbandingan Server vs Client Components\n\n| Fitur / Kemampuan | Server Component (Default) | Client Component (`'use client'`) |\n|---|---|---|\n| **Lokasi Eksekusi** | Hanya di Server saat build/request | Di Server (pre-render) & di Browser (hydration) |\n| **Ukuran Bundle JS** | **0 KB** (Hasil render berupa HTML/RSC Payload) | Terhitung masuk ke dalam JS bundle client |\n| **Akses Resource** | Database, File System (`fs`), Secret Keys | LocalStorage, Geolocation, Browser DOM API |\n| **React State & Hooks** | ❌ Tidak Bisa (`useState`, `useEffect`) | ✅ Bisa (`useState`, `useEffect`, `useContext`) |\n| **Event Listener** | ❌ Tidak Bisa (`onClick`, `onChange`) | ✅ Bisa (`onClick`, `onChange`, `onSubmit`) |\n| **Kecepatan Data Fetching** | Sangat Cepat (Dekat dengan Database/API) | Bergantung pada Latensi Jaringan Client |\n\n## Direktif 'use client' & Boundary Architecture\n\nKetika kamu membutuhkan interaktivitas (seperti tombol pencarian, modal pop-up, atau form input), kamu harus menambahkan direktif `'use client';` di **baris paling atas Berkassebelum import apa pun**.\n\n```text\n┌────────────────────────────────────────────────────────┐\n│ Server Component (RootLayout / Page)                   │\n│  ├── Mengambil data dari Database                      │\n│  ├── Mengamankan API Key rahasia                       │\n│  └── Client Component Boundary ('use client')           │\n│       └── TombolSuka (State, onClick, Event Listener)   │\n└────────────────────────────────────────────────────────┘\n```\n\n### Aturan Keras Boundary (Batas Komponen):\n1. **Server Component dapat meng-import Client Component**.\n2. **Client Component TIDAK BISA meng-import Server Component secara langsung**! Jika Client Component meng-import berkas Server Component, berkas server tersebut akan ikut terkonversi menjadi Client Component.\n3. **Solusi (Pola Children)**: Jika kamu ingin menempatkan Server Component di dalam Client Component, oper Server Component tersebut sebagai prop `children`!\n\n```tsx\n// ✅ POLA YANG BENAR\n// ClientModal.tsx ('use client')\nexport default function ClientModal({ children }: { children: React.ReactNode }) {\n  const [open, setOpen] = useState(false);\n  return <div>{open && children}</div>;\n}\n\n// Page.tsx (Server Component)\nimport ClientModal from './ClientModal';\nimport ServerDataList from './ServerDataList'; // Tetap Server Component!\n\nexport default function Page() {\n  return (\n    <ClientModal>\n      <ServerDataList />\n    </ClientModal>\n  );\n}\n```\n\n## Mengoper Props Menembus Boundary\n\nProps yang dikirim dari Server Component ke Client Component wajib bersifat **serializable** (dapat diubah menjadi string JSON). String, number, boolean, array, dan plain object diperbolehkan. Fungsi, Date object, atau kelas kustom **tidak dapat dikirimkan** langsung via props.\n\n## Mengamankan Server Code dengan `server-only`\n\nAgar kode backend sensitif (seperti query database atau API token) tidak pernah tidak sengaja terimport ke Client Component, pasang package official `server-only`:\n\n```typescript\nimport 'server-only';\n// Kode di bawah ini dijamin tidak akan pernah bocor ke bundle browser\n```\n\n## Analogi Dunia Nyata\n\nBayangkan restoran bintang lima. Server Component adalah **Dapur Utama**. Di sana terdapat kompor gas besar, pisau tajam, dan resep rahasia koki (`database/secrets`). Pelanggan tidak boleh masuk ke dapur. Client Component adalah **Meja Makan Pelanggan**. Di sana ada tombol pemanggil pelayan dan garam/merica (`interaktivitas/state`). Makanan dimasak di dapur (Server), lalu disajikan dalam bentuk piring matang (HTML) ke meja pelanggan.\n\n## Jebakan & Kesalahan Umum\n\n1. **Menaruh `'use client'` di Root Layout**: Menaruh `'use client'` di `app/layout.tsx` mematikan seluruh manfaat React Server Components di aplikasi kamu!\n2. **Error Hydration Mismatch**: Menampilkan data yang berbeda di Server dan Client (misalnya `new Date()` atau `Math.random()`) menyebabkan React merah di konsol browser.\n3. **Mengoper Fungsi via Props**: Mencoba mengoper fungsi handler server ke Client Component tanpa menggunakan Server Actions.\n\n## Kaitan ke Dunia Kerja\n\nPemahaman mendalam tentang boundary Server vs Client adalah pertanyaan paling krusial dalam wawancara kerja Next.js senior saat ini. Perusahaan mengadopsi Next.js untuk menekan biaya bandwidth CDN dan mempercepat nilai LCP (Largest Contentful Paint) aplikasi mereka."
        },
        {
          "kind": "step",
          "id": "next-2-1",
          "title": "Server Component secara Default",
          "explanation": "Di Next.js App Router, setiap komponen di dalam folder `app/` secara default dikompilasi sebagai **Server Component**. Komponen ini dieksekusi sepenuhnya di server dan mengembalikan hasil berupa HTML serta payload struktur komponen ke browser tanpa mengirimkan berkas kode JavaScript pendukungnya. Hal ini membuat ukuran JavaScript bundle yang diunduh oleh browser menjadi sangat ringan (0 KB JavaScript tambahan untuk komponen tersebut). Karena berjalan di server, komponen ini dapat membaca database atau berkas sistem lokal secara langsung dengan aman. Gunakan Server Component sebagai pilihan utama kamu untuk mengambil data, membaca kredensial rahasia, atau menampilkan konten statis. Jebakan umum pemula adalah mencoba memasang hook interaktif seperti `useState` atau event handler `onClick` di Server Component, yang akan menyebabkan error kompilasi.",
          "example": {
            "code": "// Server Component default: Bisa akses DB/filesystem langsung, tanpa bundle JS client!\nimport fs from 'fs';",
            "output": "Performa render super cepat di browser.",
            "note": "Server component tidak bisa menggunakan useState, useEffect, atau event listener onClick. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Bukti bahwa komponen ini berjalan di server adalah kamu bisa menggunakan modul bawaan Node.js. Import modul `fs` (file system) dari `'fs'` di bagian paling atas berkas.",
          "starterCode": "// Tulis import di bawah ini\n\nexport default function Page() {\n  return <h1>Server Component</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+fs\\s+from\\s+['\"]fs['\"]\\s*;?",
              "message": "Gunakan: import fs from 'fs';"
            }
          ],
          "solution": "import fs from 'fs';\n\nexport default function Page() {\n  return <h1>Server Component</h1>;\n}"
        },
        {
          "kind": "step",
          "id": "next-2-2",
          "title": "'use client' Directive",
          "explanation": "Secara default, Next.js memproses seluruh komponen di server untuk menghemat ukuran berkas JavaScript yang dikirim ke browser. Namun, server tidak dapat merespons interaksi langsung dari pengguna di browser seperti klik tombol, gerakan kursor, atau perubahan state lokal. Jika kamu ingin membangun komponen yang interaktif menggunakan hook React seperti `useState`, `useEffect`, atau event handler `onClick`, kamu wajib menambahkan direktif `'use client';` pada baris pertama berkas. Direktif ini memberitahu kompilator Next.js bahwa berkas tersebut beserta seluruh sub-komponen yang di-import di dalamnya harus disertakan ke dalam bundle JavaScript client. Gunakan direktif ini secara spesifik hanya pada komponen daun (leaf component) yang benar-benar membutuhkan interaksi UI agar manfaat performa server tetap maksimal.",
          "example": {
            "code": "'use client';\n\nimport { useState } from 'react';\nexport default function Counter() { const [c, setC] = useState(0); return <button onClick={() => setC(c+1)}>{c}</button>; }",
            "output": "Komponen dijadikan Client Component yang interaktif.",
            "note": "'use client' menandai titik awal boundary antara server dan client. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Komponen di bawah menggunakan `useState`, yang artinya butuh interaktivitas dari browser. Tambahkan direktif `'use client';` pada baris PERTAMA berkas ini.",
          "starterCode": "import { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "['\"]use\\s+client['\"]\\s*;?",
              "message": "Gunakan 'use client'; di baris paling atas"
            }
          ],
          "solution": "'use client';\nimport { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}"
        },
        {
          "kind": "step",
          "id": "next-2-3",
          "title": "Server & Client Boundaries",
          "explanation": "Next.js menerapkan batasan (boundary) ketat antara kode server dan kode client. Server Components dapat dengan bebas meng-import dan merender Client Components di dalam pohon tampilan aplikasi. Namun, aturan sebaliknya tidak berlaku: kamu tidak dapat meng-import Server Component secara langsung di dalam berkas Client Component. Jika kamu meng-import Server Component di dalam berkas berdirektif `'use client'`, kompilator akan secara otomatis mengubah Server Component tersebut menjadi Client Component dan membuang kemampuan server-nya. Jika kamu harus menampilkan Server Component di dalam layout Client Component, gunakan pola komposisi dengan mengoper Server Component tersebut melalui prop `children`.",
          "example": {
            "code": "// ✅ ServerComponent -> mengimport -> ClientComponent\nimport Carousel from './carousel';",
            "output": "Batas arsitektur server-client terawat dengan baik.",
            "note": "Jika butuh Server Component di dalam Client, oper via prop children. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Server Components dapat mengimpor dan merender Client Components. Impor komponen `Carousel` dari `'./carousel'` dan render di dalam elemen `<main>`.",
          "starterCode": "export default function HomePage() {\n  return (\n    <main>\n      {/* Render Carousel di sini */}\n    </main>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+Carousel\\s+from\\s+['\"]\\./carousel['\"]\\s*;?",
              "message": "Pastikan kamu mengimpor Carousel dari './carousel'"
            },
            {
              "pattern": "<Carousel\\s*/>",
              "message": "Pastikan kamu merender <Carousel /> di dalam main"
            }
          ],
          "solution": "import Carousel from './carousel';\n\nexport default function HomePage() {\n  return (\n    <main>\n      <Carousel />\n    </main>\n  );\n}"
        },
        {
          "kind": "step",
          "id": "next-2-4",
          "title": "Mengoper Data & Children Menembus Boundary",
          "explanation": "Saat Server Component mengirimkan data ke Client Component melalui atribut props, data tersebut harus dapat di-serialize (dikonversi menjadi format string JSON). Tipe data dasar seperti string, number, boolean, array, dan plain JavaScript object aman untuk dikirimkan menembus boundary server-client. Namun, tipe data non-serializable seperti fungsi JavaScript, instance kelas kustom, atau simbol tidak dapat dikirimkan langsung melalui props biasa. Gunakan prinsip ini saat merancang struktur data DTO (Data Transfer Object) dari server ke komponen antarmuka client. Jika kamu tak sengaja mengirimkan fungsi via props biasa dari server, Next.js akan melempar error serialisasi saat proses rendering.",
          "example": {
            "code": "// ✅ Oper plain object: <ClientWidget data={{ id: 1 }} />\n// ❌ Jangan oper fungsi: <ClientWidget onClick={() => {}} /> dari server",
            "output": "Data ter-serialize aman dari server ke client bundle.",
            "note": "Fungsi JS tidak bisa di-serialize dari server ke client via props biasa. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Hapus properti `sayHello` dari objek `userData` karena fungsi JavaScript tidak bisa di-serialize (dikirim sebagai teks JSON) dari Server Component ke Client Component.",
          "starterCode": "const userData = {\n  name: 'Budi',\n  age: 25,\n  sayHello: () => console.log('Halo'),\n};\n\nexport default function ServerPage() {\n  return <Profile data={userData} />;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "sayHello",
              "message": "Fungsi sayHello harus dihapus karena tidak bisa di-serialize",
              "mustNotMatch": true
            },
            {
              "pattern": "name\\s*:\\s*['\"]Budi['\"]",
              "message": "Pertahankan data name"
            }
          ],
          "solution": "const userData = {\n  name: 'Budi',\n  age: 25,\n};\n\nexport default function ServerPage() {\n  return <Profile data={userData} />;\n}"
        },
        {
          "kind": "step",
          "id": "next-2-5",
          "title": "Pola Komposisi: Interaktif di Daun",
          "explanation": "Untuk menjaga agar ukuran berkas JavaScript aplikasi kamu tetap sekecil mungkin, terapkan pola arsitektur 'Moving Client Components to the Leaves' (Menggeser Client Component ke Daun Pohon Komponen). Hindari menaruh direktif `'use client'` pada berkas layout root atau halaman utama jika hanya ada satu elemen kecil yang membutuhkan interaktivitas. Sebaiknya, pisahkan elemen interaktif tersebut (misalnya tombol toggle tema atau form pencarian) ke dalam berkas komponen kecilnya sendiri dan beri direktif `'use client'` hanya pada berkas tersebut. Dengan demikian, komponen induk yang membungkusnya tetap bertahan sebagai Server Component yang hemat memori dan cepat dimuat.",
          "example": {
            "code": "// Halaman utama (Server) -> Layout (Server) -> TombolSuka ('use client')",
            "output": "Ukuran bundle JavaScript di browser tetap minimal.",
            "note": "Jangan letakkan 'use client' di root layout atau page utama jika tidak terpaksa. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Biarkan `RootLayout` tetap menjadi Server Component. Impor komponen `<ThemeToggle />` dari `'./ThemeToggle'` dan render di dalam elemen `<body>` tanpa menambahkan direktif `'use client'` di berkas ini.",
          "starterCode": "export default function RootLayout({ children }) {\n  return (\n    <body>\n      {/* Panggil ThemeToggle di bawah ini */}\n      \n      {children}\n    </body>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+ThemeToggle\\s+from\\s+['\"]\\./ThemeToggle['\"]\\s*;?",
              "message": "Impor ThemeToggle dari './ThemeToggle'"
            },
            {
              "pattern": "<ThemeToggle\\s*/>",
              "message": "Pastikan merender <ThemeToggle />"
            },
            {
              "pattern": "['\"]use\\s+client['\"]",
              "message": "Jangan tambahkan 'use client' di file ini",
              "mustNotMatch": true
            }
          ],
          "solution": "import ThemeToggle from './ThemeToggle';\n\nexport default function RootLayout({ children }) {\n  return (\n    <body>\n      <ThemeToggle />\n      {children}\n    </body>\n  );\n}"
        },
        {
          "kind": "step",
          "id": "next-2-6",
          "title": "Mencegah Import Server Code ke Client (server-only)",
          "explanation": "Ketika membangun aplikasi web skala besar, terdapat risiko tak sengaja meng-import berkas logika backend (seperti modul query database atau kredensial API rahasia) ke dalam Client Component. Untuk mencegah kebocoran kode sensitif ke bundle JavaScript publik di browser, Next.js menyediakan paket resmi bernama `server-only`. Dengan menambahkan `import 'server-only';` pada baris paling atas berkas backend kamu, kompilator Next.js akan melempar error otomatis pada saat pembentukan build jika berkas tersebut tak sengaja ter-import oleh Client Component. Gunakan guard ini pada seluruh modul pembantu database, layanan pembayaran, atau enkripsi kunci rahasia.",
          "example": {
            "code": "import 'server-only'; // Memastikan file ini tidak bocor ke client bundle",
            "output": "Error otomatis saat build jika file di-import oleh client component.",
            "note": "Sangat krusial untuk file pengakses database atau API key rahasia. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Cegah berkas ini agar tidak bocor ke client bundle dengan mengimpor modul `server-only` di baris pertama.",
          "starterCode": "// Tambahkan import penjaga di sini\n\nexport async function getSecretData() {\n  return db.query('SELECT * FROM passwords');\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+['\"]server-only['\"]\\s*;?",
              "message": "Gunakan: import 'server-only';"
            }
          ],
          "solution": "import 'server-only';\n\nexport async function getSecretData() {\n  return db.query('SELECT * FROM passwords');\n}"
        },
        {
          "kind": "quiz",
          "id": "next-2-kuis",
          "title": "Kuis: Server vs Client Components",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Kapan sebuah komponen di Next.js App Router HARUS menggunakan direktif `'use client'`?",
              "choices": [
                "Saat membuat komponen layout root",
                "Saat komponen membutuhkan state (`useState`), effect (`useEffect`), atau event handler (`onClick`)",
                "Saat komponen mengambil data langsung dari database PostgreSQL",
                "Saat menggunakan tag HTML standar seperti <h1> atau <p>"
              ],
              "answerIndex": 1,
              "explanation": "'use client' menandai bahwa komponen membutuhkan runtime JavaScript browser untuk interaktivitas pengguna."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Bolehkah kita mengimpor Server Component secara langsung di dalam file Client Component?",
              "choices": [
                "Boleh, tidak ada batasan sama sekali",
                "Boleh, selama menggunakan kata kunci 'use server'",
                "Tidak boleh langsung mengimpornya, namun Server Component bisa dioper sebagai prop `children` ke Client Component",
                "Tidak boleh sama sekali dalam kondisi apa pun"
              ],
              "answerIndex": 2,
              "explanation": "Kita tidak bisa langsung mengimpor Server Component ke Client Component. Pola yang benar adalah Server Component membungkus Client Component dan mengoper dirinya sendiri atau komponen server lain via prop children."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Apa fungsi dari mengimpor `server-only` pada sebuah file?",
              "choices": [
                "Mempercepat waktu respon server saat terjadi request",
                "Menjadikan file tersebut sebuah API endpoint publik",
                "Memastikan build akan error (gagal) jika file tersebut tak sengaja terimpor oleh komponen client",
                "Mengubah Client Component menjadi Server Component secara otomatis"
              ],
              "answerIndex": 2,
              "explanation": "Modul 'server-only' memberikan jaminan keamanan agar kode sensitif (seperti kredensial database) tidak pernah terkemas dan bocor ke bundle JavaScript publik di browser."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Sebuah halaman 'Dashboard' dan 'Profile' harus memiliki sidebar navigasi yang sama tanpa merender ulang sidebar tersebut saat berpindah halaman. File apa yang harus kamu buat di dalam folder 'app'?",
              "choices": [
                "page.tsx",
                "layout.tsx",
                "template.tsx",
                "sidebar.tsx"
              ],
              "answerIndex": 1,
              "explanation": "File layout.tsx digunakan untuk membagikan UI antar rute dan tidak akan di-render ulang saat pengguna melakukan navigasi ke halaman turunan."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu ingin membuat rute dinamis untuk blog post seperti '/blog/123'. Bagaimana cara penamaan folder yang benar di dalam App Router?",
              "choices": [
                "app/blog/[id]",
                "app/blog/:id",
                "app/blog/_id",
                "app/blog/(id)"
              ],
              "answerIndex": 0,
              "explanation": "Next.js menggunakan kurung siku (square brackets) seperti '[id]' untuk menandai segmen rute dinamis."
            }
          ]
        }
      ]
    },
    {
      "slug": "data-caching",
      "title": "Data Fetching & Caching",
      "description": "Fetch di server, cache yang bisa diprediksi, dan revalidasi.",
      "topics": [
        "async server component: fetch langsung di komponen",
        "Static vs dynamic rendering",
        "revalidate: ISR & on-demand revalidation",
        "cache() dan deduplication",
        "Streaming & Suspense untuk UI bertahap",
        "generateStaticParams untuk halaman dinamis"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "next-3-m1",
          "title": "Data Fetching, Caching, & Streaming di Next.js",
          "body": "# Data Fetching, Caching, & Streaming\n\nDi React tradisional, data fetching dilakukan di browser menggunakan `useEffect` + `fetch` setelah komponen selesai dimuat (Waterfall Request). Ini menyebabkan loading spinner yang mengganggu UX.\n\nDi Next.js App Router, **Server Components dapat berbentuk fungsi `async`**. Kamu dapat memanggil `await fetch()` atau query database secara langsung di dalam komponen!\n\n## 4 Lapisan Caching di Next.js\n\nNext.js memiliki arsitektur caching bertingkat untuk memaksimalkan kecepatan respon server:\n\n```text\n┌────────────────────────────────────────────────────────┐\n│ 1. Request Memoization (React cache / fetch dedup)     │ -> Menggabungkan request identik dalam 1 render tree\n├────────────────────────────────────────────────────────┤\n│ 2. Data Cache (Persisted fetch cache di Server)        │ -> Menyimpan hasil fetch lintas request user\n├────────────────────────────────────────────────────────┤\n│ 3. Full Route Cache (HTML & RSC Payload di Server)     │ -> Menyimpan hasil kompilasi halaman statis\n├────────────────────────────────────────────────────────┤\n│ 4. Router Cache (In-memory Client Session Cache)       │ -> Menyimpan segmen halaman di browser user\n└────────────────────────────────────────────────────────┘\n```\n\n## Static Rendering vs Dynamic Rendering\n\n- **Static Rendering (Default)**: Halaman di-render satu kali pada saat build time (atau di background via ISR). Sangat cepat dan hemat resource server.\n- **Dynamic Rendering**: Halaman di-render ulang pada **setiap HTTP request** yang masuk. Terjadi otomatis jika komponen membaca fungsi dinamis seperti `cookies()`, `headers()`, atau menggunakan `searchParams`.\n\n```typescript\n// Memaksa halaman menjadi Dynamic Rendering\nexport const dynamic = 'force-dynamic';\n```\n\n## Incremental Static Regeneration (ISR) & On-Demand Revalidation\n\nISR memungkinkan kamu meng-cache halaman statis, tetapi memperbaruinya secara berkala tanpa perlu melakukan build ulang seluruh situs web!\n\n1. **Time-based Revalidation**: Memperbarui data setiap N detik.\n   `fetch('https://api.com/data', { next: { revalidate: 60 } });`\n2. **On-Demand Revalidation**: Memperbarui cache saat ada event mutasi data (misalnya artikel baru disimpan).\n   `revalidatePath('/blog');` atau `revalidateTag('posts');`\n\n## Request Deduplication dengan React `cache()`\n\nPemanggilan `fetch()` dengan URL & opsi yang sama di dalam satu pohon render akan otomatis di-deduplikasi oleh Next.js. Namun, jika kamu memanggil fungsi database kustom (seperti Prisma/ORM), bungkus fungsi tersebut dengan `cache()` dari React:\n\n```typescript\nimport { cache } from 'react';\nexport const getUser = cache(async (id: string) => {\n  return await db.user.findUnique({ where: { id } });\n});\n```\n\n## Streaming UI dengan React Suspense\n\nDaripada menunggu seluruh data halaman selesai di-fetch (termasuk query yang lambat), gunakan **Streaming**. Komponen statis/cepat langsung dikirimkan ke browser, sedangkan komponen lambat dibungkus `<Suspense>` dengan fallback UI (skeleton loading).\n\n## Pra-render Rute Dinamis dengan `generateStaticParams`\n\nUntuk rute dinamis seperti `app/blog/[slug]/page.tsx`, ekspor fungsi `generateStaticParams()` untuk memberitahu Next.js daftar slug mana saja yang harus dibuatkan halaman statisnya pada saat build time.\n\n## Analogi Dunia Nyata\n\nBayangkan percetakan koran. **Static Rendering (SSG)** seperti mencetak koran pagi; cetak sekali di subuh, dibaca jutaan orang seharian. **ISR** seperti papan pengumuman digital toko yang diperbarui tiap 10 menit. **Dynamic Rendering (SSR)** seperti kasir minimarket yang mencetak struk belanja khusus saat kamu berdiri di depan mesin kasir.\n\n## Jebakan & Kesalahan Umum\n\n1. **Terjebak Caching Berlebihan**: Menganggap `fetch()` selalu mengambil data terbaru dari server padahal Next.js meng-cache hasilnya. Gunakan `cache: 'no-store'` untuk data real-time.\n2. **Waterfall Requests**: Melakukan `await fetch1()` lalu `await fetch2()` secara berurutan padahal keduanya independen. Gunakan `Promise.all([fetch1(), fetch2()])`!\n3. **Lupa Deduplikasi Query Database**: Memanggil query database yang sama di `layout.tsx` dan `page.tsx` tanpa membungkusnya dengan React `cache()`.\n\n## Kaitan ke Dunia Kerja\n\nTeknik Caching dan ISR adalah senjata utama arsitek sistem di media berita besar dan toko online untuk menangani lonjakan jutaan pengunjung (traffic spike) saat promo tanggal kembar tanpa membuat server database tumbang."
        },
        {
          "kind": "step",
          "id": "next-3-1",
          "title": "Async Server Component Data Fetching",
          "explanation": "Pada arsitektur App Router Next.js, kamu dapat mendeklarasikan komponen antarmuka sebagai fungsi `async` dan melakukan panggilan data fetching menggunakan `await fetch()` secara langsung di dalam bodi komponen. Pendekatan ini menghilangkan kebutuhan akan penulisan state manual (`useState`) atau penanganan efek samping (`useEffect`) yang rumit seperti pada React tradisional. Karena fungsi ini dieksekusi di lingkungan server, hasil data fetching diolah menjadi HTML bersih sebelum dikirimkan ke browser pengguna. Gunakan pola ini untuk mengambil data awal halaman (seperti daftar artikel atau profil pengguna) demi performa SEO terbaik. Jebakan yang sering dialami pemula adalah mencoba menjadikan Client Component (berdirektif `'use client'`) sebagai fungsi `async`, yang tidak didukung oleh React.",
          "example": {
            "code": "export default async function Page() {\n  const res = await fetch('https://api.com/data');\n  const data = await res.json();\n  return <div>{data.title}</div>;\n}",
            "output": "Data diunduh langsung di server sebelum HTML dikirim ke browser.",
            "note": "Menghilangkan loading spinner client-side untuk SEO."
          },
          "instruction": "Tuliskan komponen async `Page` yang mengunduh data dari konstanta `url` dan mengembalikan tag `<div>Data</div>`.",
          "starterCode": "// Tulis komponen async Page di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "export\\s+default\\s+async\\s+function\\s+Page\\s*\\(\\s*\\)",
              "message": "Definisikan: export default async function Page()"
            }
          ],
          "solution": "export default async function Page() {\n  const res = await fetch(url);\n  return <div>Data</div>;\n}"
        },
        {
          "kind": "step",
          "id": "next-3-2",
          "title": "Static vs Dynamic Rendering",
          "explanation": "Next.js secara otomatis mengategorikan proses rendering halaman menjadi dua mode: **Static Rendering** (default) dan **Dynamic Rendering**. Pada Static Rendering, halaman di-pre-render satu kali pada saat pembentukan build produksi sehingga dapat di-cache secara agresif untuk kecepatan maksimal. Namun, jika halaman membaca fungsi yang bersifat dinamis saat runtime (seperti `cookies()`, `headers()`, atau `searchParams`), Next.js akan secara otomatis beralih ke mode Dynamic Rendering di mana halaman di-render ulang pada setiap request HTTP yang masuk. Kamu juga dapat memaksa halaman menjadi dynamic dengan mengekspor konstanta `export const dynamic = 'force-dynamic';`. Gunakan mode dynamic ini pada halaman dashboard pribadi atau keranjang belanja real-time.",
          "example": {
            "code": "export const dynamic = 'force-dynamic'; // Memaksa render dinamis di setiap request",
            "output": "Halaman di-render ulang pada setiap akses HTTP request.",
            "note": "Gunakan force-dynamic untuk halaman dashboard real-time. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Pastikan Next.js selalu merender ulang halaman dashboard ini di setiap request dengan mengekspor konstanta `dynamic` bernilai string `'force-dynamic'`.",
          "starterCode": "// Ekspor konfigurasi dynamic di sini\n\nexport default function Dashboard() {\n  return <h1>Live Dashboard</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+const\\s+dynamic\\s*=\\s*['\"]force-dynamic['\"]\\s*;?",
              "message": "Gunakan: export const dynamic = 'force-dynamic';"
            }
          ],
          "solution": "export const dynamic = 'force-dynamic';\n\nexport default function Dashboard() {\n  return <h1>Live Dashboard</h1>;\n}"
        },
        {
          "kind": "step",
          "id": "next-3-3",
          "title": "Revalidasi Cache (ISR & On-Demand)",
          "explanation": "Incremental Static Regeneration (ISR) mengizinkan kamu mempertahankan kecepatan halaman statis sekaligus memperbaruinya secara berkala tanpa melakukan build ulang aplikasi secara keseluruhan. Dengan memberikan opsi `{ next: { revalidate: 60 } }` pada pemanggilan `fetch()`, Next.js akan meng-cache halaman statis tersebut dan memperbaruinya secara otomatis di latar belakang setiap 60 detik saat ada request baru. Selain revalidasi berbasis waktu, kamu juga dapat memicu revalidasi secara langsung saat terjadi perubahan data di backend menggunakan fungsi `revalidatePath()` atau `revalidateTag()`. Gunakan strategi ISR ini untuk halaman portal berita, katalog produk, atau blog yang datanya berkala diperbarui.",
          "example": {
            "code": "fetch('https://api.com/posts', { next: { revalidate: 60 } });",
            "output": "Data di-refresh di background setiap 60 detik.",
            "note": "Kombinasi terbaik antara performa static dan kebaruan data. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Ubah pemanggilan fetch agar Next.js melakukan revalidasi otomatis di background setiap 30 detik menggunakan opsi `next: { revalidate: 30 }`.",
          "starterCode": "export default async function Blog() {\n  const res = await fetch('https://api.example.com/posts');\n  return <div>Blog</div>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "next\\s*:\\s*\\{\\s*revalidate\\s*:\\s*30\\s*\\}",
              "message": "Pastikan menambahkan opsi next: { revalidate: 30 } di dalam parameter kedua fetch"
            }
          ],
          "solution": "export default async function Blog() {\n  const res = await fetch('https://api.example.com/posts', { next: { revalidate: 30 } });\n  return <div>Blog</div>;\n}"
        },
        {
          "kind": "step",
          "id": "next-3-4",
          "title": "Request Deduplication dengan React cache()",
          "explanation": "Next.js secara otomatis meng-cache dan mendeduplikasi pemanggilan `fetch()` yang memiliki URL serta opsi yang identik di dalam satu pohon render komponen. Namun, jika kamu mengambil data menggunakan query ORM/database langsung (seperti Prisma atau Kysely) yang tidak menggunakan API `fetch`, fitur deduplikasi otomatis tersebut tidak berjalan. Untuk mengatasi masalah ini, React menyediakan fungsi `cache()`. Dengan membungkus fungsi query database kamu menggunakan `cache()`, React akan memastikan bahwa fungsi tersebut hanya dieksekusi satu kali per render request meskipun dipanggil di beberapa tempat (seperti di `layout.tsx` dan `page.tsx` sekaligus). Gunakan `cache()` pada seluruh helper query database kamu.",
          "example": {
            "code": "import { cache } from \"react\";\nconst getUser = cache(async (id) => db.user.findUnique({ id }));",
            "output": "Panggilan getUser(id) berulang hanya dieksekusi 1x per render.",
            "note": "Mencegah query database ganda dalam satu request halaman. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Bungkus fungsi async `getUser` di bawah ini menggunakan fungsi `cache()` dari React agar panggilannya di-deduplikasi dalam satu render.",
          "starterCode": "import { cache } from 'react';\n\n// Bungkus fungsi ini dengan cache()\nconst getUser = async (id) => {\n  return { id, name: 'Budi' };\n};",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+getUser\\s*=\\s*cache\\(\\s*async",
              "message": "Bungkus fungsi async dengan cache()"
            }
          ],
          "solution": "import { cache } from 'react';\n\nconst getUser = cache(async (id) => {\n  return { id, name: 'Budi' };\n});"
        },
        {
          "kind": "step",
          "id": "next-3-5",
          "title": "Streaming UI dengan React Suspense",
          "explanation": "Streaming adalah teknik rendering progresif yang memecah HTML halaman menjadi potongan-potongan kecil dan Mengirimkannya ke browser secara bertahap. Bagian antarmuka yang statis atau cepat diunduh akan ditampilkan seketika kepada pengguna, sementara komponen async yang membutuhkan waktu lama (seperti query statistik berat) dibungkus menggunakan `<Suspense>` dengan tampilan cadangan (fallback UI / Skeleton). Setelah proses unduh data di server selesai, Next.js akan menyuntikkan komponen tersebut ke dalam halaman secara langsung tanpa merusak tata letak antarmuka. Gunakan Streaming untuk meningkatkan skor First Contentful Paint (FCP) dan mencegah layar kosong saat halaman memuat banyak data.",
          "example": {
            "code": "<Suspense fallback={<Skeleton />}><KomponenLambat /></Suspense>",
            "output": "User langsung melihat UI awal tanpa menunggu komponen lambat selesai.",
            "note": "Meningkatkan skor First Contentful Paint (FCP) secara signifikan. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Bungkus komponen `<HeavyChart />` dengan `<Suspense>` yang memiliki properti `fallback` berupa tag `<p>Memuat grafik...</p>`.",
          "starterCode": "import { Suspense } from 'react';\nimport HeavyChart from './HeavyChart';\n\nexport default function Dashboard() {\n  return (\n    <section>\n      {/* Bungkus dengan Suspense di bawah ini */}\n      <HeavyChart />\n    </section>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "<Suspense\\s+fallback=\\{<p>Memuat grafik\\.\\.\\.</p>\\}>",
              "message": "Gunakan Suspense dengan fallback teks 'Memuat grafik...'"
            },
            {
              "pattern": "<HeavyChart\\s*/>\\s*</Suspense>",
              "message": "Pastikan <HeavyChart /> berada di dalam Suspense"
            }
          ],
          "solution": "import { Suspense } from 'react';\nimport HeavyChart from './HeavyChart';\n\nexport default function Dashboard() {\n  return (\n    <section>\n      <Suspense fallback={<p>Memuat grafik...</p>}>\n        <HeavyChart />\n      </Suspense>\n    </section>\n  );\n}"
        },
        {
          "kind": "step",
          "id": "next-3-6",
          "title": "generateStaticParams untuk Dynamic Route",
          "explanation": "Secara default, rute dinamis dengan parameter kurung siku `[slug]` akan di-render secara dinamis pada saat pengguna meminta halaman tersebut. Namun, jika kamu sudah mengetahui daftar parameter yang tersedia (misalnya 100 ID artikel blog teratas), kamu dapat mengekspor fungsi khusus bernama `generateStaticParams()` di dalam berkas `page.tsx`. Fungsi ini mengembalikan daftar array objek parameter yang akan di-pre-render secara statis menjadi HTML pada saat proses build produksi. Hasilnya, ketika pengunjung mengklik artikel tersebut, halaman akan terbuka dalam hitungan milidetik karena sudah berbentuk HTML statis di CDN server. Gunakan fitur ini untuk rute artikel blog, dokumentasi, atau produk terpopuler.",
          "example": {
            "code": "export async function generateStaticParams() {\n  return [{ slug: 'post-1' }, { slug: 'post-2' }];\n}",
            "output": "Halaman /blog/post-1 dan /blog/post-2 di-build sebagai HTML statis.",
            "note": "Sangat penting untuk performa kilat halaman blog/katalog produk."
          },
          "instruction": "Tuliskan ekspor fungsi async `generateStaticParams` yang mengembalikan array kosong `[]`.",
          "starterCode": "// Tulis generateStaticParams di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "export\\s+async\\s+function\\s+generateStaticParams\\s*\\(\\s*\\)",
              "message": "Definisikan: export async function generateStaticParams()"
            }
          ],
          "solution": "export async function generateStaticParams() {\n  return [];\n}"
        },
        {
          "kind": "quiz",
          "id": "next-3-kuis",
          "title": "Kuis: Data Caching & ISR",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Apa fungsi opsi `next: { revalidate: 60 }` di dalam fungsi fetch() Next.js?",
              "choices": [
                "Membatalkan fetch jika proses berlangsung lewat dari 60 detik",
                "Meng-cache data secara static dan memperbaruinya di background setiap 60 detik (ISR)",
                "Mengabaikan respons server selama 60 detik",
                "Menghapus database setelah 60 detik"
              ],
              "answerIndex": 1,
              "explanation": "ISR (Incremental Static Regeneration) mengizinkan pembuatan halaman static yang otomatis diperbarui secara berkala."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Jika kita memiliki halaman detail dengan rute dinamis `[id]`, bagaimana cara pre-render halaman statis untuk rute tersebut saat build time?",
              "choices": [
                "Menggunakan fungsi getServerSideProps",
                "Menggunakan fungsi generateStaticParams()",
                "Mengubah rute menjadi [id].static",
                "Mengekspor { dynamic: 'force-static' }"
              ],
              "answerIndex": 1,
              "explanation": "Fungsi generateStaticParams digunakan untuk mengembalikan array parameter dinamis yang akan dibuatkan halaman statisnya saat build."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Di Next.js, apa keuntungan utama menggunakan fungsi `cache()` dari pustaka React?",
              "choices": [
                "Menyimpan gambar langsung di memori browser",
                "Mempercepat waktu build aplikasi",
                "Melakukan deduplikasi pemanggilan fungsi agar tidak dieksekusi berulang kali pada satu render request",
                "Mengubah komponen server menjadi komponen statis"
              ],
              "answerIndex": 2,
              "explanation": "Fungsi cache membungkus logika async kita sehingga jika dipanggil berkali-kali pada satu kali request render, prosesnya hanya dieksekusi sekali."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu memanggil API eksternal di Server Component menggunakan fungsi 'fetch'. Jika kamu ingin data tersebut selalu diambil baru setiap permintaan (tanpa cache), konfigurasi apa yang harus ditambahkan?",
              "choices": [
                "{ cache: 'force-cache' }",
                "{ revalidate: 60 }",
                "{ cache: 'no-store' }",
                "{ method: 'POST' }"
              ],
              "answerIndex": 2,
              "explanation": "Opsi { cache: 'no-store' } akan memberitahu Next.js untuk tidak pernah melakukan caching pada respons tersebut (SSR dinamis setiap kali request)."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Sebuah halaman berita tidak perlu di-update setiap detik, melainkan cukup setiap 1 jam sekali agar server tidak terbebani. Teknik fetching apa yang paling sesuai?",
              "choices": [
                "Server-Side Rendering (SSR) dengan no-store",
                "Client-side fetching menggunakan useEffect",
                "Static Site Generation (SSG) murni tanpa update",
                "Incremental Static Regeneration (ISR) dengan revalidate"
              ],
              "answerIndex": 3,
              "explanation": "Opsi 'revalidate' (ISR) memungkinkan regenerasi halaman statis di latar belakang setelah waktu tertentu (misal 3600 detik/1 jam)."
            }
          ]
        }
      ]
    },
    {
      "slug": "route-handlers",
      "title": "Route Handlers (API)",
      "description": "Backend ringan di dalam Next.js: REST endpoint untuk kebutuhan nyata.",
      "topics": [
        "route.ts: GET, POST, PUT, DELETE",
        "Request & Response: body, header, status",
        "Query param & dynamic segment di handler",
        "Validasi input dengan Zod",
        "Error response yang konsisten",
        "Kapan route handler vs server action"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "next-4-m1",
          "title": "REST Endpoint dengan Route Handlers di Next.js",
          "body": "# REST Endpoint dengan Route Handlers\n\nSelain membangun antarmuka web, Next.js memungkinkan kamu membuat REST API endpoint penuh menggunakan **Route Handlers**. Berkas konvensi yang digunakan adalah `route.ts` di dalam direktori `app/`.\n\n## Struktur Berkas `route.ts` & HTTP Method Handlers\n\nUntuk menangani HTTP Request (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`), kamu cukup mengekspor fungsi async dengan nama HTTP method tersebut dari dalam berkas `route.ts`:\n\n```typescript\n// app/api/products/route.ts -> URL /api/products\nimport { NextRequest, NextResponse } from 'next/server';\n\nexport async function GET(request: NextRequest) {\n  return NextResponse.json({ message: 'Daftar produk' });\n}\n\nexport async function POST(request: NextRequest) {\n  const body = await request.json();\n  return NextResponse.json({ success: true, data: body }, { status: 201 });\n}\n```\n\n> **Aturan Krusial:** Berkas `route.ts` dan `page.tsx` **TIDAK BOLEH berada di folder yang sama** pada segmen URL yang sama! Jika ada `app/api/page.tsx` dan `app/api/route.ts` bersamaan, build Next.js akan error.\n\n## Request & Dynamic Segment Handling\n\nRoute Handlers juga dapat menerima rute dinamis (seperti `app/api/users/[id]/route.ts`):\n\n```typescript\nexport async function GET(\n  request: NextRequest,\n  { params }: { params: Promise<{ id: string }> }\n) {\n  const { id } = await params;\n  const searchParams = request.nextUrl.searchParams;\n  const query = searchParams.get('q');\n  return NextResponse.json({ id, query });\n}\n```\n\n## Validasi Schema & Formatting Error dengan Zod\n\nJangan pernah mempercayai data input dari client! Selalu validasi payload `request.json()` menggunakan schema validator seperti Zod:\n\n```typescript\nimport { z } from 'zod';\n\nconst CreateUserSchema = z.object({\n  email: z.string().email(),\n  name: z.string().min(2),\n});\n\nexport async function POST(request: NextRequest) {\n  const body = await request.json();\n  const result = CreateUserSchema.safeParse(body);\n  \n  if (!result.success) {\n    return NextResponse.json(\n      { error: 'Validasi gagal', details: result.error.flatten() },\n      { status: 400 }\n    );\n  }\n  // Simpan ke DB...\n}\n```\n\n## Kapan Menggunakan Route Handlers vs Server Actions?\n\n| Karakteristik | Route Handlers (`route.ts`) | Server Actions (`'use server'`) |\n|---|---|---|\n| **Tujuan Utama** | Public REST API untuk Mobile App / Webhook eksternal | Mutasi data Form & UI internal aplikasi Next.js |\n| **Format Respon** | Standard JSON (`NextResponse.json`) | Return Object / Revalidate UI otomatis |\n| **Integrasi Client** | Butuh `fetch('/api/...')` + `useState` | Terintegrasi langsung dengan React Form & Hooks |\n| **Security** | Butuh CORS & Manual Auth Header Check | Otomatis memiliki proteksi CSRF bawaan Next.js |\n\n## Analogi Dunia Nyata\n\nRoute Handler seperti **Loket Layanan Drive-Thru Bank**. Siapa pun (aplikasi mobile Android, aplikasi iOS, atau sistem partner luar) dapat memasukkan berkas form melalui jendela drive-thru dan mendapatkan tanda terima berupa resi cetak (JSON). Sebaliknya, Server Action seperti tombol serbaguna di dalam ruang kerja internal pegawai bank.\n\n## Jebakan & Kesalahan Umum\n\n1. **Bentrokan Nama Berkas**: Menempatkan `page.tsx` dan `route.ts` di folder yang sama.\n2. **Menyajikan JSON Rahasia tanpa Guard**: Lupa melakukan pengecekan autentikasi session/token di awal handler `GET`/`POST` sehingga data rahasia bocor ke publik.\n3. **Bentuk Exception Tidak Konsisten**: Mengembalikan string polos pada saat error alih-alih objek JSON berstruktur standar `{ error: string }`.\n\n## Kaitan ke Dunia Kerja\n\nRoute Handlers adalah solusi praktis bagi perusahaan yang membangun satu backend terpusat di Next.js yang sekaligus melayani Web Dashboard dan Mobile App (React Native / Flutter)."
        },
        {
          "kind": "step",
          "id": "next-4-1",
          "title": "Route Handler route.ts: GET & POST",
          "explanation": "Berkas konvensi `app/api/route.ts` digunakan untuk membangun endpoint REST API di dalam aplikasi Next.js kamu. Kamu menangani metode HTTP dengan mengekspor fungsi async bernamakan metode terkait seperti `GET`, `POST`, `PUT`, atau `DELETE`. Hasil kembalian dari fungsi ini wajib menggunakan objek `NextResponse.json()`, yang secara otomatis menetapkan header `Content-Type: application/json` dan mengembalikan status respon HTTP yang sesuai. Gunakan Route Handlers saat kamu ingin menyediakan API publik yang dipanggil oleh aplikasi mobile (Android/iOS) atau webhook eksternal dari pihak ketiga (seperti Midtrans atau Stripe). Ingatlah bahwa berkas `route.ts` dan `page.tsx` tidak boleh ditempatkan di folder yang sama agar tidak menyebabkan bentrokan rute.",
          "example": {
            "code": "import { NextResponse } from 'next/server';\nexport async function GET() {\n  return NextResponse.json({ message: 'Halo' });\n}",
            "output": "Mengakses /api mengembalikan JSON { message: 'Halo' }.",
            "note": "Jangan tempatkan route.ts di folder yang sama dengan page.tsx! Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Tuliskan handler `GET` pada `route.ts` yang mengekspor fungsi async `GET` dan mengembalikan `NextResponse.json({ status: 'ok' })`.",
          "starterCode": "// Tulis handler GET di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+async\\s+function\\s+GET",
              "message": "Di `route.ts`, tiap metode HTTP diekspor sebagai fungsi bernama metodenya dalam HURUF BESAR — `GET`, `POST`, `DELETE`. Nama itulah yang menentukan permintaan mana yang ditangani; menamainya `handler` seperti Pages Router lama tidak akan berjalan."
            },
            {
              "pattern": "NextResponse\\.json\\(",
              "message": "Balas dengan `NextResponse.json(...)`, yang sekaligus menyetel header `Content-Type`. Mengembalikan objek biasa tanpa pembungkus ini akan error."
            },
            {
              "pattern": "status\\s*:\\s*['\"]ok['\"]",
              "message": "Isi body-nya sesuai yang diminta. Untuk mengubah status code, tambahkan argumen kedua: `NextResponse.json(data, { status: 201 })`."
            }
          ],
          "solution": "export async function GET() {\n  return NextResponse.json({ status: 'ok' });\n}"
        },
        {
          "kind": "step",
          "id": "next-4-2",
          "title": "Membaca Body Request JSON",
          "explanation": "Untuk menangani pengiriman data dari klien pada HTTP `POST` atau `PUT`, kamu dapat membaca payload body JSON dengan memanggil metode `await request.json()` pada objek argumen `request: NextRequest`. Metode ini memparsing string JSON dari stream jaringan menjadi objek JavaScript yang siap diolah. Setelah data berhasil dibaca, kamu dapat melakukan mutasi database dan mengembalikan respon sukses beserta status code HTTP `201 Created`. Gunakan metode ini untuk menangani endpoint pendaftaran akun, pembuatan pesanan, atau unggah data API. Pastikan kamu selalu membungkus panggilan `request.json()` dengan blok `try/catch` untuk menangani kasus di mana klien mengirimkan string JSON yang tidak valid.",
          "example": {
            "code": "export async function POST(request: NextRequest) {\n  const body = await request.json();\n  return NextResponse.json(body, { status: 201 });\n}",
            "output": "Membaca data JSON dari body request dan mengembalikan status 201.",
            "note": "Selalu gunakan await saat membaca request.json(). Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Lengkapi handler `POST` di bawah untuk mengekstrak objek JSON dari argumen `request` menggunakan `await request.json()`, lalu simpan hasilnya ke dalam konstanta `data`.",
          "starterCode": "import { NextResponse } from 'next/server';\n\nexport async function POST(request) {\n  // Ekstrak body JSON di bawah ini\n  \n  return NextResponse.json(data);\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+data\\s*=\\s*await\\s+request\\.json\\(\\)\\s*;?",
              "message": "Gunakan: const data = await request.json();"
            }
          ],
          "solution": "import { NextResponse } from 'next/server';\n\nexport async function POST(request) {\n  const data = await request.json();\n  return NextResponse.json(data);\n}"
        },
        {
          "kind": "step",
          "id": "next-4-3",
          "title": "Query Parameters & Dynamic Segment",
          "explanation": "Route Handlers dapat membaca parameter URL seperti Query Parameters (`?search=kopi`) dan Dynamic Path Parameters (`/api/users/[id]`). Query Parameters dibaca melalui properti `request.nextUrl.searchParams.get('search')`. Sedangkan Dynamic Path Parameters diambil melalui argumen kedua handler yaitu `params`. Sama seperti pada komponen halaman, `params` pada Route Handler modern berbentuk `Promise` sehingga kamu wajib menggunakan `await params` sebelum mengakses propertinya. Gunakan kombinasi ini saat membangun endpoint pencarian, filter data katalog, atau endpoint spesifik berdasarkan ID entitas.",
          "example": {
            "code": "export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {\n  const { id } = await params;\n  const query = request.nextUrl.searchParams.get('q');\n  return NextResponse.json({ id, query });\n}",
            "output": "Membaca parameter id dari path URL dan query q dari searchParams.",
            "note": "searchParams berguna untuk filter, sort, dan paginasi data API. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Lengkapi handler `GET` untuk mengambil nilai query parameter bernama `'search'` dari `request.nextUrl.searchParams` dan simpan ke konstanta `searchQuery`.",
          "starterCode": "import { NextResponse } from 'next/server';\n\nexport async function GET(request) {\n  // Ambil query parameter 'search' di bawah ini\n  \n  return NextResponse.json({ searchQuery });\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+searchQuery\\s*=\\s*request\\.nextUrl\\.searchParams\\.get\\(\\s*['\"]search['\"]\\s*\\)\\s*;?",
              "message": "Gunakan: const searchQuery = request.nextUrl.searchParams.get('search');"
            }
          ],
          "solution": "import { NextResponse } from 'next/server';\n\nexport async function GET(request) {\n  const searchQuery = request.nextUrl.searchParams.get('search');\n  return NextResponse.json({ searchQuery });\n}"
        },
        {
          "kind": "step",
          "id": "next-4-4",
          "title": "Validasi Input dengan Zod",
          "explanation": "Keamanan backend bergantung pada validasi input yang ketat. Mengasumsikan data dari klien selalu benar adalah penyebab utama bug dan celah keamanan. Pustaka validator seperti `Zod` memungkinkan kamu mendefinisikan skema bentuk data yang diharapkan dan mengujinya menggunakan metode `schema.safeParse(body)`. Jika validasi gagal (`result.success === false`), kamu dapat langsung mengembalikan respon error berformat JSON beserta HTTP status code `400 Bad Request`. Gunakan validasi Zod pada seluruh Route Handler yang menerima masukan data dari pengguna (seperti form registrasi atau transaksi pembayaran).",
          "example": {
            "code": "const schema = z.object({ email: z.string().email() });\nconst result = schema.safeParse(body);\nif (!result.success) return NextResponse.json({ error: 'Invalid' }, { status: 400 });",
            "output": "Mengembalikan status 400 jika format email yang dikirim tidak sesuai.",
            "note": "safeParse tidak melempar throw error sehingga lebih aman diolah."
          },
          "instruction": "Lengkapi pengondisian di bawah ini. Jika `result.success` bernilai `false` (gagal validasi), kembalikan `NextResponse.json({ error: 'Invalid' }, { status: 400 })`.",
          "starterCode": "if (!result.success) {\n  // Kembalikan NextResponse json status 400 di sini\n  \n}",
          "language": "text",
          "tests": [
            {
              "pattern": "return\\s+NextResponse\\.json\\(\\s*\\{\\s*error\\s*:\\s*['\"]Invalid['\"]\\s*\\}\\s*,\\s*\\{\\s*status\\s*:\\s*400\\s*\\}\\s*\\)\\s*;?",
              "message": "Gunakan: return NextResponse.json({ error: 'Invalid' }, { status: 400 });"
            }
          ],
          "solution": "if (!result.success) {\n  return NextResponse.json({ error: 'Invalid' }, { status: 400 });\n}"
        },
        {
          "kind": "step",
          "id": "next-4-5",
          "title": "Error Response yang Konsisten",
          "explanation": "Konsistensi format respon error sangat krusial agar pengembang klien (front-end / mobile developer) dapat menangani kegagalan dengan mudah. Selalu kembalikan objek JSON dengan struktur kunci yang terstandarisasi, misalnya `{ error: string, details?: any }`, disertai HTTP Status Code yang tepat (seperti `401 Unauthorized`, `404 Not Found`, atau `500 Internal Server Error`). Hindari mengembalikan pesan error dalam bentuk string teks polos atau HTML default Node.js. Terapkan standar respon error ini di seluruh Route Handler pada proyek kamu.",
          "example": {
            "code": "return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 });",
            "output": "Pengembang client mendapat struktur JSON error yang konsisten.",
            "note": "Gunakan HTTP status code yang relevan sesuai standar REST API. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Tuliskan kode untuk mengembalikan respon error JSON berpesan `'Unauthorized'` dengan status HTTP code `401`.",
          "starterCode": "export async function GET() {\n  // Kembalikan error 401 Unauthorized di bawah ini\n  \n}",
          "language": "text",
          "tests": [
            {
              "pattern": "return\\s+NextResponse\\.json\\(\\s*\\{\\s*error\\s*:\\s*['\"]Unauthorized['\"]\\s*\\}\\s*,\\s*\\{\\s*status\\s*:\\s*401\\s*\\}\\s*\\)\\s*;?",
              "message": "Gunakan: return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });"
            }
          ],
          "solution": "export async function GET() {\n  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });\n}"
        },
        {
          "kind": "step",
          "id": "next-4-6",
          "title": "Custom Header & Status Code",
          "explanation": "Selain payload JSON, objek `NextResponse` mengizinkan kamu untuk menyesuaikan HTTP Response Headers dan Status Code secara terperinci. Parameter kedua dari `NextResponse.json(data, init)` menerima objek opsi di mana kamu dapat menetapkan properti `status` serta opsi `headers` (misalnya untuk menetapkan `Cache-Control` atau custom tracking header). Gunakan kustomisasi header ini saat kamu membutuhkan kontrol caching API tingkat lanjut, pengelolaan token keamanan, atau integrasi CORS dengan domain luar.",
          "example": {
            "code": "return NextResponse.json(data, {\n  status: 200,\n  headers: { 'Cache-Control': 'no-store' },\n});",
            "output": "Respon dikirim dengan header Cache-Control no-store.",
            "note": "Headers berguna untuk mengatur keamanan dan instruksi cache browser. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Kembalikan respon `NextResponse.json({ success: true })` dengan opsi parameter kedua menetapkan `status: 200` dan `headers: { 'Cache-Control': 'no-store' }`.",
          "starterCode": "export async function GET() {\n  // Return NextResponse dengan custom header di sini\n  \n}",
          "language": "text",
          "tests": [
            {
              "pattern": "return\\s+NextResponse\\.json\\(\\s*\\{\\s*success\\s*:\\s*true\\s*\\}\\s*,\\s*\\{\\s*status\\s*:\\s*200\\s*,\\s*headers\\s*:\\s*\\{\\s*['\"]Cache-Control['\"]\\s*:\\s*['\"]no-store['\"]\\s*\\}\\s*\\}\\s*\\)\\s*;?",
              "message": "Kembalikan NextResponse.json dengan status 200 dan header Cache-Control: 'no-store'"
            }
          ],
          "solution": "export async function GET() {\n  return NextResponse.json({ success: true }, { status: 200, headers: { 'Cache-Control': 'no-store' } });\n}"
        },
        {
          "kind": "quiz",
          "id": "next-4-kuis",
          "title": "Kuis: Route Handlers",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Berkas konvensi apa yang digunakan untuk membuat rute API di dalam direktori app Next.js?",
              "choices": [
                "api.ts",
                "route.ts",
                "endpoint.js",
                "server.ts"
              ],
              "answerIndex": 1,
              "explanation": "Di App Router, file konvensi khusus untuk menangani endpoint API adalah route.ts."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Bagaimana cara mengekstrak payload body berbentuk JSON dari parameter `request` pada Route Handler POST?",
              "choices": [
                "request.body.json",
                "await request.json()",
                "JSON.parse(request)",
                "request.getPayload()"
              ],
              "answerIndex": 1,
              "explanation": "request.json() mengembalikan Promise yang menguraikan body HTTP request menjadi objek JavaScript."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Manakah pernyataan yang benar mengenai aturan penempatan file `route.ts` dan `page.tsx` di Next.js App Router?",
              "choices": [
                "Keduanya harus ditaruh di folder yang sama agar saling terhubung",
                "Keduanya tidak boleh berada di folder segmen URL yang sama",
                "route.ts hanya bisa ditaruh di root direktori",
                "page.tsx akan otomatis menghapus file route.ts jika digabungkan"
              ],
              "answerIndex": 1,
              "explanation": "File route.ts dan page.tsx tidak boleh berada di folder yang sama karena akan memicu bentrokan penanganan rute pada URL tersebut."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kapan kamu sebaiknya memilih menggunakan Route Handler (`route.ts`) daripada Server Action?",
              "choices": [
                "Saat membuat form pendaftaran sederhana di halaman internal Next.js",
                "Saat perlu menyediakan REST API publik yang diakses oleh aplikasi mobile Android/iOS atau sistem webhook eksternal",
                "Saat ingin mengubah warna background komponen",
                "Saat menggunakan hook useState di Client Component"
              ],
              "answerIndex": 1,
              "explanation": "Route Handler sangat cocok untuk endpoint REST API publik atau integrasi pihak ketiga, sedangkan Server Action difokuskan untuk mutasi data UI internal Next.js."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Objek khusus apa dari 'next/server' yang direkomendasikan untuk mengirimkan respon JSON beserta HTTP status code di Route Handler?",
              "choices": [
                "ExpressResponse",
                "NextResponse",
                "JsonResponse",
                "HttpResponse"
              ],
              "answerIndex": 1,
              "explanation": "NextResponse.json() adalah API standar Next.js untuk membentuk respon JSON dengan header dan status code yang tepat."
            }
          ]
        }
      ]
    },
    {
      "slug": "server-actions",
      "title": "Server Actions & Mutation",
      "description": "Fitur paling powerful: eksekusi fungsi server dari form tanpa API endpoint.",
      "topics": [
        "'use server': definisi dan security model",
        "Form handling: useActionState (React 19) & useFormStatus",
        "revalidatePath & revalidateTag",
        "Optimistic UI dengan useOptimistic",
        "Handling validation error & toast",
        "Pending state & disable button"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "next-5-m1",
          "title": "Server Actions & Mutasi Data di Next.js",
          "body": "# Server Actions & Mutasi Data\n\nDi aplikasi web tradisional, untuk menyimpan data dari Form, kamu harus: membuat Form -> menulis event listener `onSubmit` -> panggil `fetch('/api/submit')` -> buat Route Handler API -> mutasi DB -> kembalikan JSON -> update state React. Alur ini sangat panjang dan melelahkan.\n\n**Server Actions** menyederhanakan alur ini secara drastis! Server Actions adalah **fungsi async yang dieksekusi di server**, tetapi dapat dipanggil secara langsung dari komponen client atau atribut `action` pada elemen `<form>`.\n\n## Model Keamanan & Direktif 'use server'\n\nKamu menandai sebuah fungsi sebagai Server Action dengan menambahkan direktif `'use server';` di baris pertama fungsi atau di baris pertama berkas khusus (misal `app/actions.ts`).\n\n```typescript\n// app/actions.ts\n'use server';\n\nimport { revalidatePath } from 'next/cache';\nimport { db } from '@/lib/db';\n\nexport async function createPost(formData: FormData) {\n  const title = formData.get('title') as string;\n  await db.post.create({ data: { title } });\n  \n  // Otomatis memperbarui cache halaman /blog di server\n  revalidatePath('/blog');\n}\n```\n\n> **Keamanan Krusial:** Di balik layar, Next.js membuatkan endpoint POST rahasia bermuatan hash khusus. Selalu lakukan **validasi input** dan **pengecekan autentikasi session** di dalam setiap Server Action!\n\n## Integrasi React 19: `useActionState` & `useFormStatus`\n\nDi Next.js modern (React 19), penanganan status loading dan error dari Server Action dipandu oleh dua hook bawaan:\n\n1. **`useActionState`**: Membungkus Server Action untuk mengelola respon `state` (seperti pesan sukses/error) dan status `isPending` (apakah action sedang berjalan).\n2. **`useFormStatus`**: Hook yang dipanggil di dalam komponen anak `<form>` untuk mengetahui apakah form tersebut sedang dalam proses pengiriman (`pending === true`). Sangat berguna untuk mendisable tombol submit!\n\n```tsx\n// ClientForm.tsx ('use client')\nimport { useActionState } from 'react';\nimport { createPost } from '@/app/actions';\n\nexport default function AddPostForm() {\n  const [state, formAction, isPending] = useActionState(createPost, null);\n\n  return (\n    <form action={formAction}>\n      <input name=\"title\" required />\n      <button disabled={isPending}>\n        {isPending ? 'Saving...' : 'Submit'}\n      </button>\n      {state?.error && <p>{state.error}</p>}\n    </form>\n  );\n}\n```\n\n## Mutasi & Revalidasi Cache: `revalidatePath` vs `revalidateTag`\n\nSetelah Server Action selesai mengubah data di database, tampilan UI di browser tidak akan berubah sampai cache server diperbarui. Panggil:\n- **`revalidatePath('/blog')`**: Membuang cache seluruh halaman pada path tersebut.\n- **`revalidateTag('posts')`**: Membuang cache data spesifik yang ditandai tag `fetch(..., { next: { tags: ['posts'] } })`.\n\n## Optimistic UI dengan `useOptimistic`\n\nUntuk memberikan respon UI instan tanpa menunggu Server Action selesai di server (seperti tombol Like yang langsung merah), gunakan hook `useOptimistic`. UI diupdate secara hipotetis seketika, dan jika server gagal, React akan mengembalikan UI ke state semula secara otomatis.\n\n## Analogi Dunia Nyata\n\nServer Action seperti **Tombol Bel Pintu Cerdas**. Ketika kamu menekan tombol bel di pagar rumah (Client Form), sinyal listrik langsung membunyikan lonceng di dalam dapur rumah (Server). Kamu tidak perlu mengirim surat pos melalui kantor pos (REST API fetch) hanya untuk memberitahu tuan rumah bahwa ada tamu di depan pagar.\n\n## Jebakan & Kesalahan Umum\n\n1. **Mengabaikan Pengecekan Autentikasi**: Menganggap Server Action aman karena dipanggil dari UI internal. Ingat, endpoint di balik Server Action tetap bisa ditembak oleh penyerang jika tidak ada pengecekan `auth()`!\n2. **Mengoper Objek Non-Serializable**: Mengirimkan objek kompleks ke Server Action yang tidak bisa di-serialize.\n3. **Lupa Revalidasi**: Data di database sudah berubah, tetapi UI pengguna tidak berganti karena developer lupa memanggil `revalidatePath()`.\n\n## Kaitan ke Dunia Kerja\n\nServer Actions adalah standar utama dalam pembangunan aplikasi Next.js modern. Penguasaan Server Actions bersama React 19 hooks mempercepat kecepatan pengembangan fitur (development velocity) hingga 2x lipat dibanding pola REST API lama."
        },
        {
          "kind": "step",
          "id": "next-5-1",
          "title": "'use server' & Security Model",
          "explanation": "Server Actions didefinisikan dengan menambahkan direktif `'use server';` di baris pertama fungsi atau di bagian paling atas berkas khusus. Saat Next.js mendeteksi direktif ini, kompilator secara otomatis mengekspos fungsi tersebut sebagai endpoint HTTP POST rahasia di balik layar. Artinya, fungsi tersebut dieksekusi 100% di server dan memiliki akses langsung ke database atau API key rahasia. Namun, karena endpoint tersebut dapat dipanggil oleh siapapun yang mengetahui hash-nya, kamu wajib memperlakukan Server Action dengan standar keamanan yang sama seperti API endpoint: selalu lakukan validasi input dan otorisasi hak akses pengguna di dalam bodi fungsi.",
          "example": {
            "code": "'use server';\n\nexport async function updateProfile(formData: FormData) {\n  const name = formData.get('name');\n  // Mutasi ke database...\n}",
            "output": "Fungsi dikompilasi sebagai Server Action yang aman di server.",
            "note": "'use server' menandai bahwa fungsi hanya dieksekusi di server. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Tambahkan direktif `'use server';` di baris pertama berkas ini agar fungsi `addComment` dikompilasi sebagai Server Action.",
          "starterCode": "export async function addComment(formData) {\n  const text = formData.get('text');\n  return { success: true };\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "['\"]use\\s+server['\"]\\s*;?",
              "message": "Tambahkan 'use server'; di baris pertama"
            }
          ],
          "solution": "'use server';\nexport async function addComment(formData) {\n  const text = formData.get('text');\n  return { success: true };\n}"
        },
        {
          "kind": "step",
          "id": "next-5-2",
          "title": "Form Handling dengan useActionState",
          "explanation": "Di Next.js (React 19), hook `useActionState` digunakan di dalam Client Component untuk menghubungkan form antarmuka dengan Server Action. Hook ini menerima dua argumen utama: fungsi Server Action dan nilai awal state (`initialState`). Hook mengembalikan array bernilai: state respon terbaru dari server, fungsi penangan form (`formAction`), dan status indikator pemrosesan (`isPending`). Dengan mengoper `formAction` ke atribut `action` pada elemen `<form>`, form dapat terkirim dan merespons hasil kembalian dari server secara progresif tanpa melakukan muat ulang halaman. Gunakan `useActionState` untuk seluruh form interaktif yang membutuhkan penanganan pesan sukses atau pesan kesalahan dari server.",
          "example": {
            "code": "const [state, formAction, isPending] = useActionState(updateName, null);\n<form action={formAction}><button disabled={isPending}>Simpan</button></form>",
            "output": "Form terhubung ke Server Action dengan indikator status isPending.",
            "note": "useActionState adalah pengganti useFormState di React 19. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Lengkapi deklarasi hook `useActionState` di bawah untuk membungkus Server Action `createItem` dengan nilai awal state `null`.",
          "starterCode": "import { useActionState } from 'react';\nimport { createItem } from './actions';\n\nexport default function Form() {\n  // Panggil useActionState di bawah ini\n  const [state, formAction, isPending] = \n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+\\[\\s*state\\s*,\\s*formAction\\s*,\\s*isPending\\s*\\]\\s*=\\s*useActionState\\(\\s*createItem\\s*,\\s*null\\s*\\)\\s*;?",
              "message": "Gunakan: const [state, formAction, isPending] = useActionState(createItem, null);"
            }
          ],
          "solution": "import { useActionState } from 'react';\nimport { createItem } from './actions';\n\nexport default function Form() {\n  const [state, formAction, isPending] = useActionState(createItem, null);\n}"
        },
        {
          "kind": "step",
          "id": "next-5-3",
          "title": "Pending State dengan useFormStatus",
          "explanation": "Hook `useFormStatus` dari pustaka `react-dom` memungkinkankan komponen tombol atau input anak di dalam elemen `<form>` membaca status pemrosesan form induknya tanpa perlu meneruskan props secara manual. Hook ini mengembalikan objek yang memiliki properti boolean `pending`. Ketika `pending === true`, form sedang dalam proses pengiriman data ke Server Action di server. Gunakan properti `pending` ini untuk menonaktifkan tombol submit (`disabled={pending}`) dan mengubah teks tombol menjadi indikator pemuatan (misalnya 'Menyimpan...'), sehingga pengguna tidak dapat mengklik tombol tersebut berulang kali secara tidak sengaja.",
          "example": {
            "code": "import { useFormStatus } from \"react-dom\";\nfunction SubmitButton() { const { pending } = useFormStatus(); return <button disabled={pending}>Submit</button>; }",
            "output": "Tombol otomatis disabled saat form sedang diproses di server.",
            "note": "useFormStatus harus dipanggil di dalam komponen anak elemen <form>. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Lengkapi komponen `SubmitButton` dengan memanggil hook `useFormStatus()` dan mengestrak properti boolean `pending` untuk menonaktifkan tombol.",
          "starterCode": "import { useFormStatus } from 'react-dom';\n\nexport function SubmitButton() {\n  // Panggil useFormStatus di sini\n  \n  return <button disabled={pending}>{pending ? 'Loading...' : 'Simpan'}</button>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+\\{\\s*pending\\s*\\}\\s*=\\s*useFormStatus\\(\\)\\s*;?",
              "message": "Gunakan: const { pending } = useFormStatus();"
            }
          ],
          "solution": "import { useFormStatus } from 'react-dom';\n\nexport function SubmitButton() {\n  const { pending } = useFormStatus();\n  return <button disabled={pending}>{pending ? 'Loading...' : 'Simpan'}</button>;\n}"
        },
        {
          "kind": "step",
          "id": "next-5-4",
          "title": "Revalidasi Cache dengan revalidatePath",
          "explanation": "Setelah sebuah Server Action selesai melakukan mutasi data di database (seperti menambah produk baru atau memperbarui komentar), tampilan antarmuka halaman di browser pengguna tidak akan otomatis berubah jika halaman tersebut tersimpan di cache server. Untuk membuang cache lama dan memaksa Next.js mengambil data terbaru dari database, panggil fungsi `revalidatePath('/path-tujuan')` dari modul `next/cache` di akhir Server Action kamu. Panggilan ini akan memperbarui data halaman secara tenang di latar belakang tanpa membuat pengguna merasakan muat ulang penuh pada browser.",
          "example": {
            "code": "import { revalidatePath } from 'next/cache';\nexport async function addPost() { await db.insert(); revalidatePath('/posts'); }",
            "output": "Cache halaman /posts dibuang dan data baru otomatis tampil di UI.",
            "note": "revalidatePath juga menerima argumen tipe 'page' atau 'layout'. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Panggil fungsi `revalidatePath('/dashboard')` di akhir fungsi Server Action `updateData` agar cache halaman dashboard dibuang.",
          "starterCode": "import { revalidatePath } from 'next/cache';\n\nexport async function updateData() {\n  // Lakukan mutasi DB...\n  // Panggil revalidatePath untuk '/dashboard' di bawah ini\n  \n}",
          "language": "text",
          "tests": [
            {
              "pattern": "revalidatePath\\(\\s*['\"]\\/dashboard['\"]\\s*\\)\\s*;?",
              "message": "Gunakan: revalidatePath('/dashboard');"
            }
          ],
          "solution": "import { revalidatePath } from 'next/cache';\n\nexport async function updateData() {\n  revalidatePath('/dashboard');\n}"
        },
        {
          "kind": "step",
          "id": "next-5-5",
          "title": "Optimistic UI dengan useOptimistic",
          "explanation": "Optimistic UI adalah teknik meningkatkan kenyamanan antarmuka di mana antarmuka pengguna diperbarui secara instan berasumsi bahwa mutasi di server akan berhasil, sebelum Server Action sebenarnya selesai dieksekusi melalui jaringan. Hook `useOptimistic` dari React menerima state asli dan fungsi perubah hipotetis. Ketika pengguna memicu aksi (seperti menyukai postingan), state diperbarui seketika di layar. Jika proses di server ternyata gagal, React akan secara otomatis mengembalikan state antarmuka ke nilai asli di database. Terapkan `useOptimistic` pada fitur interaktif cepat seperti tombol Suka (Like), Tambah Komentar, atau Centang Checkbox.",
          "example": {
            "code": "const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (state, newLike) => state + 1);\naddOptimisticLike(1);",
            "output": "Jumlah likes bertambah seketika di UI sebelum respon server selesai.",
            "note": "Memberikan pengalaman aplikasi yang terasa super instan. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Lengkapi deklarasi hook `useOptimistic` di bawah ini untuk mengelola state `likes` dengan callback perubah yang menambahkan nilai state dengan `1`.",
          "starterCode": "import { useOptimistic } from 'react';\n\nexport function LikeButton({ likes }) {\n  // Deklarasikan useOptimistic di bawah ini\n  const [optimisticLikes, addOptimisticLike] = \n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+\\[\\s*optimisticLikes\\s*,\\s*addOptimisticLike\\s*\\]\\s*=\\s*useOptimistic\\(\\s*likes\\s*,\\s*\\(\\s*state\\s*,\\s*newLike\\s*\\)\\s*=>\\s*state\\s*\\+\\s*1\\s*\\)\\s*;?",
              "message": "Gunakan: const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (state, newLike) => state + 1);"
            }
          ],
          "solution": "import { useOptimistic } from 'react';\n\nexport function LikeButton({ likes }) {\n  const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (state, newLike) => state + 1);\n}"
        },
        {
          "kind": "step",
          "id": "next-5-6",
          "title": "Penanganan Validation Error Pada Form",
          "explanation": "Saat terjadi kesalahan validasi input di Server Action (seperti format email tidak sesuai atau password terlalu pendek), hindari melempar uncaught exception (`throw error`) yang dapat merusak tampilan antarmuka pengguna. Sebaliknya, kembalikan objek balasan terstruktur yang memuat kualifikasi status sukses dan rincian pesan kesalahan, misalnya `return { error: 'Password minimal 8 karakter' }`. Objek balasan ini akan ditangkap oleh hook `useActionState` di Client Component sehingga pesan kesalahan dapat ditampilkan tepat di bawah bidang input yang bersangkutan. Pola ini memastikan penanganan form berjalan secara elegan dan bersahabat bagi pengguna.",
          "example": {
            "code": "export async function submitForm(prevState, formData) {\n  if (!isValid) return { error: 'Email tidak valid' };\n  return { success: true };\n}",
            "output": "Pesan error dikembalikan dalam bentuk objek ke Client Component.",
            "note": "Mencegah terjadinya crash Error Boundary pada aplikasi. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Jika variabel `isValid` bernilai `false`, kembalikan objek `{ error: 'Email tidak valid' }` dari fungsi Server Action.",
          "starterCode": "export async function submitForm(prevState, formData) {\n  const isValid = false;\n  // Kembalikan objek error di bawah ini jika !isValid\n  if (!isValid) \n}",
          "language": "text",
          "tests": [
            {
              "pattern": "if\\s*\\(\\s*!isValid\\s*\\)\\s*return\\s*\\{\\s*error\\s*:\\s*['\"]Email tidak valid['\"]\\s*\\}\\s*;?",
              "message": "Gunakan: if (!isValid) return { error: 'Email tidak valid' };"
            }
          ],
          "solution": "export async function submitForm(prevState, formData) {\n  const isValid = false;\n  if (!isValid) return { error: 'Email tidak valid' };\n}"
        },
        {
          "kind": "quiz",
          "id": "next-5-kuis",
          "title": "Kuis: Server Actions & Mutasi",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Direktif apa yang wajib dituliskan di baris paling atas sebuah fungsi atau file untuk menandainya sebagai Server Action?",
              "choices": [
                "'use client'",
                "'use server'",
                "'use action'",
                "'server side'"
              ],
              "answerIndex": 1,
              "explanation": "Direktif 'use server' menandai bahwa fungsi tersebut harus dieksekusi secara aman di server."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Mengapa penting untuk tetap melakukan pengecekan autentikasi session dan validasi input di dalam fungsi Server Action?",
              "choices": [
                "Karena Server Action otomatis menghapus database setiap kali dijalankan",
                "Karena Next.js mengekspos endpoint HTTP di balik layar, sehingga pengguna nakal dapat mengirim request buatan secara langsung ke fungsi tersebut tanpa melalui UI",
                "Karena browser tidak bisa mengirim string",
                "Agar CSS form bekerja dengan baik"
              ],
              "answerIndex": 1,
              "explanation": "Server Actions mengekspos endpoint di balik layar, sehingga siapa pun bisa mengirim request buatan langsung ke endpoint tersebut tanpa melalui UI aplikasimu."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Bagaimana cara kita menampilkan pesan kesalahan dari server (misal: 'Email sudah terdaftar') ke dalam form yang menggunakan Server Action?",
              "choices": [
                "Mengembalikan (return) sebuah array string dan membacanya dengan hook useOptimistic",
                "Mengembalikan (return) sebuah objek JSON berisi error dari dalam Action, lalu menampilkannya menggunakan hasil state dari hook useActionState di client",
                "Menggunakan window.alert() dari dalam Server Action",
                "Menyimpannya ke database dan membacanya ulang di komponen berikutnya"
              ],
              "answerIndex": 1,
              "explanation": "Pola paling efisien adalah Server Action mengembalikan objek berisi pesan error, lalu client component membaca objek tersebut dari hook useActionState tanpa perlu reload halaman penuh."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Fungsi apa dari modul 'next/cache' yang dipanggil di dalam Server Action untuk membuang cache halaman tertentu agar UI menampilkan data terbaru?",
              "choices": [
                "clearCache()",
                "revalidatePath()",
                "resetRoute()",
                "purgeMemory()"
              ],
              "answerIndex": 1,
              "explanation": "revalidatePath('/route') digunakan untuk membuang cache halaman tertentu setelah terjadi mutasi data di server."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Hook React apa yang digunakan untuk memperbarui antarmuka secara hipotetis seketika (optimistik) sebelum Server Action selesai diproses?",
              "choices": [
                "useActionState",
                "useFormStatus",
                "useOptimistic",
                "useTransition"
              ],
              "answerIndex": 2,
              "explanation": "useOptimistic memungkinkan pembaruan UI seketika sebelum respon server diterima, dan otomatis revert jika server gagal."
            }
          ]
        }
      ]
    },
    {
      "slug": "auth",
      "title": "Autentikasi",
      "description": "Login yang benar: session, proteksi route, dan middleware.",
      "topics": [
        "Konsep session vs token",
        "Auth.js (NextAuth): setup & provider",
        "Proteksi halaman di server component",
        "Middleware untuk guard route",
        "Role & otorisasi sederhana",
        "Menyimpan user di database"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "next-6-m1",
          "title": "Autentikasi & Route Protection di Next.js",
          "body": "# Autentikasi & Otorisasi di Next.js\n\nAutentikasi adalah proses memverifikasi **siapa pengguna tersebut** (Login), sedangkan Otorisasi adalah proses mengecek **apa saja hak akses pengguna** (Role/Permission).\n\nDi aplikasi Next.js modern, keamanan autentikasi bertumpu pada **Cookie Session berbasis HttpOnly** atau **JWT (JSON Web Token)**.\n\n## Cookie Session vs JWT Token\n\n| Fitur | Session Cookie (HttpOnly) | JWT Token |\n|---|---|---|\n| **Penyimpanan Data** | Terenkripsi di Cookie, data lengkap di DB/Redis | Memuat seluruh data user di dalam token terenkripsi |\n| **Akses JavaScript Client** | ❌ **TIDAK BISA** (Disembunyikan oleh browser dari XSS) | ⚠️ Bisa jika disimpan di LocalStorage |\n| **Keamanan dari XSS** | **Sangat Tinggi** | Rentan dicuri jika skrip jahat berjalan di client |\n| **Pencabutan Akses (Revoke)**| Sangat mudah (Hapus session dari DB) | Sulit sampai token kadaluarsa (atau butuh blacklist) |\n\n## Integrasi Auth.js (NextAuth v5)\n\n**Auth.js** (sebelumnya NextAuth) adalah solusi autentikasi standar industri untuk Next.js App Router. Auth.js mendukung login via OAuth (Google, GitHub), Magic Link, maupun Credentials (Email/Password).\n\n```typescript\n// app/api/auth/[...nextauth]/route.ts\nimport { handlers } from '@/auth';\nexport const { GET, POST } = handlers;\n```\n\n## 3 Lapisan Proteksi Route di Next.js\n\nUntuk mengamankan halaman terproteksi (seperti `/dashboard` atau `/admin`), gunakan strategi pertahanan berlapis (Defense in Depth):\n\n```text\n┌────────────────────────────────────────────────────────┐\n│ Layer 1: Middleware Guard (middleware.ts)             │ -> Memeriksa cookie session di Edge sebelum rute diproses\n├────────────────────────────────────────────────────────┤\n│ Layer 2: Server Component Check (await auth())         │ -> Memeriksa session di level halaman sebelum render HTML\n├────────────────────────────────────────────────────────┤\n│ Layer 3: Database & Action Otorisasi (RBAC Check)      │ -> Memeriksa role === 'admin' saat mutasi dilakukan\n└────────────────────────────────────────────────────────┘\n```\n\n### 1. Proteksi Halaman di Server Component\n\n```typescript\nimport { auth } from '@/auth';\nimport { redirect } from 'next/navigation';\n\nexport default async function DashboardPage() {\n  const session = await auth();\n  if (!session) {\n    redirect('/login');\n  }\n  return <h1>Selamat datang, {session.user.name}</h1>;\n}\n```\n\n### 2. Middleware Route Guard Global\n\nGunakan berkas `middleware.ts` di root proyek untuk memblokir akses ke rute terproteksi secara terpusat tanpa perlu mengulang kode pengecekan di setiap halaman:\n\n```typescript\nimport { auth } from '@/auth';\nimport { NextResponse } from 'next/server';\n\nexport default auth((req) => {\n  const isLoggedIn = !!req.auth;\n  const isAuthRoute = req.nextUrl.pathname.startsWith('/dashboard');\n  \n  if (isAuthRoute && !isLoggedIn) {\n    return NextResponse.redirect(new URL('/login', req.url));\n  }\n});\n\nexport const config = {\n  matcher: ['/dashboard/:path*'],\n};\n```\n\n## Role-Based Access Control (RBAC)\n\nSelalu simpan informasi peran (peran: `'admin'` vs `'user'`) di dalam objek session. Sebelum merender antarmuka rahasia atau menjalankan tindakan admin, pastikan kamu mengecek kondisi `session?.user?.role === 'admin'`.\n\n## Analogi Dunia Nyata\n\nSistem autentikasi Next.js seperti **Kartu Kunci Kamar Hotel (Keycard)**. **HttpOnly Cookie** adalah chip RFID terenkripsi di dalam kartu kunci plastik yang discan di pintu masuk gedung (Middleware) dan pintu kamar (Server Component). Kamu tidak perlu menghafal sandi rumit setiap kali membuka pintu kamar.\n\n## Jebakan & Kesalahan Umum\n\n1. **Menyimpan Token di LocalStorage**: Menyimpan token JWT di LocalStorage membuka celah keamanan besar terhadap serangan pencurian token via skrip XSS!\n2. **Hanya Melindungi UI Client**: Membunyikan link admin di navbar client tetapi lupa mengunci Server Action / Route Handler di server.\n3. **Lupa Config Matcher Middleware**: Mengizinkan Middleware berjalan pada berkas statis (seperti gambar `.png` atau `favicon.ico`), membuat aplikasi terasa sangat lambat.\n\n## Kaitan ke Dunia Kerja\n\nKeamanan autentikasi dan kepatuhan standar cookie (HttpOnly, SameSite, Secure) adalah syarat wajib dalam Audit Penetration Testing (PenTest) di aplikasi perbankan, finansial, dan e-commerce."
        },
        {
          "kind": "step",
          "id": "next-6-1",
          "title": "Konsep Session vs Token di Next.js",
          "explanation": "Dalam arsitektur autentikasi Next.js, menjaga keamanan data sesi pengguna adalah prioritas utama. Menyimpan token autentikasi di tempat yang dapat diakses oleh JavaScript client (seperti LocalStorage atau SessionStorage) sangat berbahaya karena rentan terhadap serangan Cross-Site Scripting (XSS). Tempat paling aman untuk menyimpan token atau ID sesi adalah di dalam **HttpOnly Cookie**. Cookie yang ditandai dengan opsi `httpOnly: true` dikirimkan secara otomatis oleh browser pada setiap HTTP request ke server, namun sama sekali tidak dapat dibaca atau dimanipulasi oleh skrip JavaScript di sisi client. Selalu gunakan opsi `httpOnly: true` dan `secure: true` pada konfigurasi cookie autentikasi aplikasi kamu.",
          "example": {
            "code": "// HttpOnly Cookie adalah tempat paling aman menyimpan session ID di Next.js\nconst cookieOptions = { httpOnly: true, secure: true };",
            "output": "Cookie HttpOnly tidak bisa diakses/dicuri oleh skrip XSS client.",
            "note": "Selalu gunakan flag HttpOnly & SameSite pada cookie autentikasi."
          },
          "instruction": "Tuliskan properti opsi konfigurasi cookie yang mencegah JavaScript dari sisi client membaca isi cookie dengan menetapkan `httpOnly: true`.",
          "starterCode": "const cookieOptions = {\n  // Tulis opsi HttpOnly di bawah ini\n  \n  secure: true,\n};",
          "language": "text",
          "tests": [
            {
              "pattern": "httpOnly\\s*:\\s*true",
              "message": "Gunakan properti httpOnly dengan nilai true"
            }
          ],
          "solution": "const cookieOptions = {\n  httpOnly: true,\n  secure: true,\n};"
        },
        {
          "kind": "step",
          "id": "next-6-2",
          "title": "Auth.js (NextAuth v5) Setup",
          "explanation": "Auth.js (sebelumnya dikenal sebagai NextAuth.js) adalah solusi pustaka autentikasi standar yang dirancang khusus untuk arsitektur Next.js App Router. Pustaka ini secara otomatis menangani alur autentikasi kompleks seperti OAuth 2.0 (Google, GitHub), Magic Link email, hingga kredensial email/password kustom. Dengan memanggil fungsi `NextAuth({ ... })`, Auth.js mengembalikan objek pembantu yang mencakup `handlers` untuk API Route, fungsi `auth` untuk mengecek sesi di Server Component, serta fungsi `signIn` dan `signOut`. Gunakan Auth.js untuk menghemat ratusan jam waktu pengembangan fitur autentikasi yang aman.",
          "example": {
            "code": "import NextAuth from \"next-auth\";\nimport GitHub from \"next-auth/providers/github\";\nexport const { handlers, auth, signIn, signOut } = NextAuth({ providers: [GitHub] });",
            "output": "Export fungsi auth() dan handler OAuth siap pakai.",
            "note": "Auth.js adalah solusi autentikasi standar untuk Next.js App Router."
          },
          "instruction": "Panggil fungsi `NextAuth({})` dari pustaka NextAuth dan destrukturisasi hasil kembaliannya untuk mengekspor objek `handlers` serta fungsi `auth`.",
          "starterCode": "import NextAuth from 'next-auth';\n\n// Lakukan ekspor destrukturisasi dari NextAuth di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+const\\s+\\{\\s*handlers\\s*,\\s*auth\\s*\\}\\s*=\\s*NextAuth\\(\\s*\\{\\s*\\}\\s*\\)\\s*;?",
              "message": "Ekspor handlers dan auth dari pemanggilan NextAuth({})"
            }
          ],
          "solution": "import NextAuth from 'next-auth';\n\nexport const { handlers, auth } = NextAuth({});\n"
        },
        {
          "kind": "step",
          "id": "next-6-3",
          "title": "Proteksi Halaman di Server Component",
          "explanation": "Untuk melindungi halaman khusus pengguna terdaftar (seperti `/dashboard` atau `/settings`) di Server Component, kamu cukup memanggil fungsi `await auth()` di bagian atas komponen. Fungsi ini membaca cookie session yang dikirimkan browser dan mengembalikan objek `session` pengguna. Jika pengguna belum login (`session === null`), panggil fungsi `redirect('/login')` dari modul `next/navigation`. Fungsi `redirect()` akan memicu HTTP redirect seketika dari server sebelum komponen sempat merender markup HTML rahasia ke browser. Terapkan pola ini pada seluruh halaman terproteksi di aplikasi kamu.",
          "example": {
            "code": "const session = await auth();\nif (!session) redirect('/login');",
            "output": "Pengguna yang belum login otomatis ditolak sebelum halaman sempat dirender.",
            "note": "redirect() diimpor dari 'next/navigation'. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Tambahkan pengondisian jika `session` bernilai falsy (pengguna belum login), panggil `redirect('/login')`.",
          "starterCode": "import { redirect } from 'next/navigation';\n\nexport default async function Dashboard() {\n  const session = await auth();\n  // Tambahkan proteksi di bawah ini\n  \n  return <h1>Rahasia</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "if\\s*\\(\\s*!session\\s*\\)\\s*redirect\\(\\s*['\"]\\/login['\"]\\s*\\)\\s*;?",
              "message": "Gunakan pengondisian if (!session) lalu redirect('/login');"
            }
          ],
          "solution": "import { redirect } from 'next/navigation';\n\nexport default async function Dashboard() {\n  const session = await auth();\n  if (!session) redirect('/login');\n  return <h1>Rahasia</h1>;\n}"
        },
        {
          "kind": "step",
          "id": "next-6-4",
          "title": "Middleware untuk Route Guard Global",
          "explanation": "Selain melakukan pengecekan sesi di setiap komponen halaman, Next.js menyediakan berkas khusus bernama `middleware.ts` di direktori root proyek untuk melakukan penjagaan rute secara terpusat (Global Guard). Middleware dieksekusi di lapisan Edge sebelum HTTP request mencapai komponen halaman mana pun. Dengan mendefinisikan objek `config` bernilai `matcher: ['/dashboard/:path*']`, kamu memberitahu Next.js untuk menjalankan middleware hanya pada rute yang diawali dengan `/dashboard`. Teknik ini mencegah kode halaman diunduh sama sekali jika pengguna tidak memiliki kredensial yang valid.",
          "example": {
            "code": "export function middleware(request: NextRequest) {\n  // Proteksi route secara terpusat\n}\nexport const config = { matcher: ['/dashboard/:path*'] };",
            "output": "Seluruh sub-route /dashboard otomatis terproteksi secara terpusat.",
            "note": "Matcher mengatur URL mana saja yang dilewati oleh middleware. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Ekspor konstanta `config` berupa objek yang memiliki properti `matcher` bernilai array berisi string pola `'/dashboard/:path*'`.",
          "starterCode": "export function middleware(request) {\n  return NextResponse.next();\n}\n\n// Ekspor objek config di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+const\\s+config\\s*=\\s*\\{\\s*matcher\\s*:\\s*\\[\\s*['\"]\\/dashboard\\/:path\\*['\"]\\s*\\]\\s*\\}\\s*;?",
              "message": "Ekspor const config dengan matcher array berisi '/dashboard/:path*'"
            }
          ],
          "solution": "export function middleware(request) {\n  return NextResponse.next();\n}\n\nexport const config = { matcher: ['/dashboard/:path*'] };"
        },
        {
          "kind": "step",
          "id": "next-6-5",
          "title": "Role & Otorisasi Sederhana",
          "explanation": "Otorisasi bertugas mengecek apakah pengguna yang sudah terautentikasi memiliki peran (role) yang sesuai untuk mengakses suatu fitur (misalnya membedakan akses `admin` vs `user`). Informasi peran ini biasanya disimpan di dalam objek `session.user.role`. Di dalam Server Component halaman admin, kamu dapat menambahkan pengondisian `if (session?.user?.role !== 'admin')` dan mengembalikan komponen penolakan seperti `<p>Forbidden</p>`. Terapkan otorisasi berbasis peran (Role-Based Access Control / RBAC) ini pada seluruh tindakan atau rute sensitif seperti manajemen pengguna atau laporan keuangan.",
          "example": {
            "code": "if (session?.user?.role !== 'admin') return <p>Forbidden</p>;",
            "output": "Menolak pengguna biasa mengakses area administrasi.",
            "note": "Pastikan properti role disimpan di dalam session JWT/Database. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Jika properti `role` dari opsional berantai `session?.user` bukan bernilai string `'admin'`, kembalikan tag `<p>Forbidden</p>`.",
          "starterCode": "export default async function AdminPanel() {\n  const session = await auth();\n  // Tulis proteksi role di bawah ini\n  \n  return <h1>Data Rahasia Admin</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "if\\s*\\(\\s*session\\?\\.user\\?\\.role\\s*!==\\s*['\"]admin['\"]\\s*\\)\\s*return\\s*<p>\\s*Forbidden\\s*</p>\\s*;?",
              "message": "Gunakan if (session?.user?.role !== 'admin') return <p>Forbidden</p>;"
            }
          ],
          "solution": "export default async function AdminPanel() {\n  const session = await auth();\n  if (session?.user?.role !== 'admin') return <p>Forbidden</p>;\n  return <h1>Data Rahasia Admin</h1>;\n}"
        },
        {
          "kind": "step",
          "id": "next-6-6",
          "title": "Menyimpan User di Database (Adapter)",
          "explanation": "Secara default, Auth.js menyimpan data sesi di dalam token JWT terenkripsi tanpa membutuhkan database. Namun, jika kamu ingin menyimpan data pengguna, riwayat login, atau menghubungkan akun OAuth ke tabel database kamu sendiri (seperti PostgreSQL via Prisma ORM), kamu memerlukan Database Adapter. Dengan menggunakan paket `@auth/prisma-adapter` dan menambahkan opsi `adapter: PrismaAdapter(prisma)` di konfigurasi Auth.js, pengguna yang login via OAuth (seperti Google atau GitHub) akan otomatis didaftarkan ke dalam tabel database kamu. Gunakan adapter ini jika aplikasi kamu membutuhkan penyimpanan profil pengguna tingkat lanjut.",
          "example": {
            "code": "import { PrismaAdapter } from '@auth/prisma-adapter';\n// { adapter: PrismaAdapter(prisma) }",
            "output": "User OAuth otomatis terdaftar ke tabel User di database.",
            "note": "Menyimpan user di DB memungkinkan kita menambah properti kustom seperti role/saldo."
          },
          "instruction": "Inisialisasi properti konfigurasi bernama `adapter` dengan nilai hasil eksekusi fungsi `PrismaAdapter` yang menerima instansi `prisma`.",
          "starterCode": "import { PrismaAdapter } from '@auth/prisma-adapter';\nimport prisma from './db';\n\nexport const authOptions = {\n  providers: [],\n  // Tambahkan properti adapter di bawah ini\n  \n};",
          "language": "text",
          "tests": [
            {
              "pattern": "adapter\\s*:\\s*PrismaAdapter\\(\\s*prisma\\s*\\)",
              "message": "Gunakan opsi adapter: PrismaAdapter(prisma)"
            }
          ],
          "solution": "import { PrismaAdapter } from '@auth/prisma-adapter';\nimport prisma from './db';\n\nexport const authOptions = {\n  providers: [],\n  adapter: PrismaAdapter(prisma),\n};"
        },
        {
          "kind": "quiz",
          "id": "next-6-kuis",
          "title": "Kuis: Autentikasi Next.js",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Fungsi apa dari `next/navigation` yang digunakan untuk melempar user yang belum login ke halaman /login di Server Component?",
              "choices": [
                "useNavigate()",
                "redirect('/login')",
                "push('/login')",
                "reload()"
              ],
              "answerIndex": 1,
              "explanation": "redirect() dari next/navigation melempar HTTP redirect langsung dari server sebelum komponen sempat dirender."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Di mana letak paling aman untuk menyimpan ID sesi (session ID) pengguna agar tidak bisa dicuri oleh skrip berbahaya di browser?",
              "choices": [
                "Local Storage",
                "Session Storage",
                "HttpOnly Cookies",
                "Variabel Redux State"
              ],
              "answerIndex": 2,
              "explanation": "HttpOnly Cookies dikirim otomatis oleh browser ke server namun sama sekali tidak bisa dibaca oleh JavaScript client, sehingga kebal terhadap serangan XSS."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Apa fungsi fitur Middleware pada aplikasi Next.js, khususnya terkait autentikasi?",
              "choices": [
                "Menampilkan loading spinner animasi saat perpindahan halaman",
                "Menggantikan fungsi database untuk menyimpan data user",
                "Sebagai penjaga pintu global yang bisa mengecek sesi user sebelum request dari browser sampai ke halaman spesifik",
                "Menerjemahkan bahasa (i18n) teks di dalam HTML"
              ],
              "answerIndex": 2,
              "explanation": "Middleware berjalan di Edge sebelum rute diproses, sangat ideal untuk memblokir akses ke rute terproteksi (seperti /dashboard/*) tanpa perlu menulis kode pengecekan berulang di setiap file halaman."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Atribut apa pada cookie yang wajib ditetapkan menjadi `true` agar cookie tersebut tidak dapat diakses oleh skrip client via document.cookie?",
              "choices": [
                "secure",
                "httpOnly",
                "sameSite",
                "domain"
              ],
              "answerIndex": 1,
              "explanation": "Flag httpOnly: true mencegah JavaScript client membaca atau mencuri cookie sesi melalui document.cookie."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Pustaka resmi apa dari ekosistem Next.js yang mempermudah integrasi OAuth (Google, GitHub) dan manajemen session?",
              "choices": [
                "Passport.js",
                "Auth.js (NextAuth)",
                "Firebase Auth",
                "Clerk"
              ],
              "answerIndex": 1,
              "explanation": "Auth.js (NextAuth) adalah pustaka standar industri untuk penanganan autentikasi di Next.js App Router."
            }
          ]
        }
      ]
    },
    {
      "slug": "optimasi-seo",
      "title": "Optimasi & SEO",
      "description": "Fitur yang membuat Next.js dipilih perusahaan: cepat dan terindeks.",
      "topics": [
        "next/image: kenapa dan cara pakainya",
        "next/font & layout shift",
        "Metadata API: title, description, Open Graph",
        "sitemap.ts & robots.ts",
        "Lighthouse & Core Web Vitals",
        "Bundle analysis & dynamic import"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "next-7-m1",
          "title": "Optimasi Performa, SEO, & Core Web Vitals di Next.js",
          "body": "# Optimasi Performa, SEO, & Core Web Vitals\n\nAlasan terbesar perusahaan besar (seperti TikTok, Twitch, Notion) migrasi ke Next.js adalah **Performa Tinggi dan Keterindeksan Mesin Pencari (SEO)**.\n\n## 3 Metrik Core Web Vitals Google\n\nGoogle menggunakan skor Core Web Vitals sebagai faktor penentu peringkat halaman di hasil pencarian (SERP):\n\n| Metrik | Nama Lengkap | Elemen yang Diukur | Target Skor Bagus | Solusi Next.js |\n|---|---|---|---|---|\n| **LCP** | Largest Contentful Paint | Kecepatan elemen visual terbesar (banner/gambar) tampil | **< 2.5 Detik** | `next/image` dengan atribut `priority` |\n| **INP** | Interaction to Next Paint | Kelancaran respons antarmuka saat diklik pengguna | **< 200 milidetik** | Server Components (mengurangi JS bundle) |\n| **CLS** | Cumulative Layout Shift | Stabilitas posisi tata letak UI (mencegah elemen melompat) | **< 0.1** | `next/image` & `next/font` otomatis reservasi ruang |\n\n## Optimasi Gambar dengan `<Image>` dari `next/image`\n\nTag `<img>` biasa memiliki 3 kelemahan: tidak terkompresi, tidak responsive, dan menyebabkan CLS saat gambar dimuat. Komponen `<Image>` Next.js menyelesaikannya:\n1. **Auto WebP/AVIF Conversion**: Otomatis mengompres gambar menjadi format modern yang sangat kecil.\n2. **Prevent Layout Shift**: Wajib mencantumkan `width` & `height` (atau `fill`) agar browser mereservasi ruang gambar sebelum diunduh.\n3. **Lazy Loading Bawaan**: Gambar di luar layar baru diunduh ketika mendekati viewport.\n\n## Optimasi Font dengan `next/font`\n\nMemuat font kustom dari CDN luar sering menyebabkan kedipan teks yang merusak tampilan (Flash of Unstyled Text / FOUT). Modul `next/font` mengunduh berkas font Google pada saat **build time** dan meng-hosting-nya secara lokal di server kamu (Zero Network Round-trip).\n\n```typescript\nimport { Inter } from 'next/font/google';\nconst inter = Inter({ subsets: ['latin'] });\n// Pasang inter.className di elemen <body>\n```\n\n## Metadata API & SEO Sosial (OpenGraph)\n\nNext.js menyediakan Metadata API terpadu untuk mengekspor meta tags SEO secara statis maupun dinamis:\n\n```typescript\n// Statis di page.tsx / layout.tsx\nexport const metadata: Metadata = {\n  title: 'Katalog Produk | BiLearn',\n  description: 'Temukan produk teknologi terbaik',\n  openGraph: { images: ['/og-banner.png'] },\n};\n\n// Dinamis berdasarkan data database\nexport async function generateMetadata({ params }): Promise<Metadata> {\n  const { id } = await params;\n  const product = await getProduct(id);\n  return { title: product.title };\n}\n```\n\n## Berkas XML Sitemap (`sitemap.ts`) & `robots.ts`\n\nCukup buat berkas `app/sitemap.ts` dan `app/robots.ts` untuk menghasilkan peta situs XML dan instruksi web crawler secara otomatis bagi Googlebot.\n\n## Dynamic Import dengan `next/dynamic`\n\nJika kamu menggunakan library berat yang hanya dibutuhkan di situasi tertentu (seperti library grafik Recharts atau Rich Text Editor), pisahkan berkas tersebut dari bundle utama dengan `dynamic()`.\n\n## Analogi Dunia Nyata\n\nOptimasi Next.js seperti **Desain Pesawat Jet**. `next/image` seperti meruncingkan moncong pesawat agar hemat bahan bakar (LCP). `next/font` seperti mengunci posisi kursi penumpang agar tidak bergeser saat lepas landas (CLS). `sitemap.ts` seperti menyerahkan dokumen peta penerbangan ke menara pengawas udara (Googlebot).\n\n## Jebakan & Kesalahan Umum\n\n1. **Menghapus Width/Height pada Image**: Menggunakan `<Image src=\"...\" />` tanpa `width` & `height` (atau tanpa prop `fill`) akan memicu error kompilasi.\n2. **Lupa Domain Whitelist**: Memuat gambar dari URL luar (misal `cloudinary.com`) tanpa mendaftarkannya di `next.config.js` (`images.remotePatterns`).\n3. **Meng-import Library Heavy di Root**: Meng-import library chart besar di komponen layout utama sehingga memperlambat skor Lighthouse seluruh halaman.\n\n## Kaitan ke Dunia Kerja\n\nSkor Core Web Vitals yang buruk (> 2.5 detik LCP) berdampak langsung pada hilangnya jutaan rupiah pendapatan transaksi karena calon pembeli membatalkan pesanan. Spesialis SEO dan Front-End Engineer diukur dari kemampuan mereka mempertahankan skor Lighthouse di atas 90."
        },
        {
          "kind": "step",
          "id": "next-7-1",
          "title": "Komponen next/image",
          "explanation": "Komponen `<Image>` dari modul `next/image` memperluas tag HTML `<img>` standar dengan kemampuan optimasi gambar otomatis. Komponen ini secara otomatis mengompresi format gambar menjadi WebP atau AVIF yang berukuran jauh lebih kecil, merespons ukuran layar pengguna (Responsive Images), serta memuat gambar secara malas (Lazy Loading). Atribut `width` dan `height` wajib ditentukan untuk mendefinisikan rasio aspek gambar, yang berfungsi mereservasi ruang pada layar sebelum gambar selesai diunduh demi mencegah pergeseran tata letak (Cumulative Layout Shift / CLS). Gunakan komponen `<Image>` untuk seluruh tampilan gambar di aplikasi kamu.",
          "example": {
            "code": "import Image from \"next/image\";\n<Image src=\"/logo.png\" alt=\"Logo\" width={100} height={50} />",
            "output": "Gambar dimuat sangat cepat dan mencegah Cumulative Layout Shift (CLS).",
            "note": "Atribut width dan height wajib diisi untuk mendefinisikan rasio aspek. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Gunakan komponen `<Image>` dengan atribut `src=\"/banner.png\"`, `alt=\"Banner\"`, `width={800}`, dan `height={400}`.",
          "starterCode": "import Image from 'next/image';\n\nexport default function Header() {\n  return (\n    <header>\n      {/* Tulis elemen Image di bawah ini */}\n      \n    </header>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+Image\\s+from\\s*[\"']next/image[\"']",
              "message": "Impor dulu `Image` dari `next/image`. Tanpa impor, `<Image>` dianggap tag HTML tak dikenal."
            },
            {
              "pattern": "<Image\\b[\\s\\S]*src=[\"']/banner\\.png[\"']",
              "message": "Pakai komponen `<Image>` dengan `src=\"/banner.png\"` (garis miring di depan berarti folder public)."
            },
            {
              "pattern": "alt=[\"']Banner[\"']",
              "message": "`alt` wajib diisi — `next/image` menolak render tanpa `alt`, dan itu juga syarat aksesibilitas."
            },
            {
              "pattern": "width=\\{\\s*800\\s*\\}[\\s\\S]*height=\\{\\s*400\\s*\\}|height=\\{\\s*400\\s*\\}[\\s\\S]*width=\\{\\s*800\\s*\\}",
              "message": "Sertakan `width={800}` dan `height={400}` (angka di dalam kurawal, bukan string). Tanpa keduanya Next.js melempar error karena rasio aspek tidak diketahui. Urutan atribut bebas."
            }
          ],
          "solution": "import Image from 'next/image';\n\nexport default function Header() {\n  return (\n    <header>\n      <Image src=\"/banner.png\" alt=\"Banner\" width={800} height={400} />\n    </header>\n  );\n}"
        },
        {
          "kind": "step",
          "id": "next-7-2",
          "title": "next/font Mencegah Layout Shift",
          "explanation": "Modul `next/font` mengunduh berkas font (seperti Google Fonts) pada saat pembentukan build produksi dan menginjeksinya secara lokal di server aplikasi kamu. Pendekatan ini menghilangkan panggilan jaringan eksternal ke server Google saat runtime, sehingga tidak ada kedipan pergantian font (Flash of Unstyled Text / FOUT) saat pengguna membuka halaman. Selain itu, Next.js secara otomatis menghitung ukuran fallback font untuk memastikan nol pergeseran tata letak (Zero Layout Shift). Gunakan `next/font` untuk mengonfigurasi seluruh tipografi font di proyek kamu demi skor Core Web Vitals yang sempurna.",
          "example": {
            "code": "import { Inter } from \"next/font/google\";\nconst inter = Inter({ subsets: ['latin'] });\n<body className={inter.className}>",
            "output": "Font terpasang tanpa ada kedipan FOUT (Flash of Unstyled Text).",
            "note": "Meningkatkan skor performa Core Web Vitals. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Deklarasikan konstanta bernama `inter` dan panggil fungsi `Inter()` dengan memberikan objek argumen `{ subsets: ['latin'] }`.",
          "starterCode": "import { Inter } from 'next/font/google';\n\n// Konfigurasikan font inter di bawah ini\n\n\nexport default function RootLayout({ children }) {\n  return <html lang=\"en\"><body className={inter.className}>{children}</body></html>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+inter\\s*=\\s*Inter\\(\\s*\\{\\s*subsets\\s*:\\s*\\[\\s*['\"]latin['\"]\\s*\\]\\s*\\}\\s*\\)\\s*;?",
              "message": "Gunakan: const inter = Inter({ subsets: ['latin'] });"
            }
          ],
          "solution": "import { Inter } from 'next/font/google';\n\nconst inter = Inter({ subsets: ['latin'] });\n\nexport default function RootLayout({ children }) {\n  return <html lang=\"en\"><body className={inter.className}>{children}</body></html>;\n}"
        },
        {
          "kind": "step",
          "id": "next-7-3",
          "title": "Metadata API (title, description, Open Graph)",
          "explanation": "Next.js menyediakan Metadata API deklaratif untuk mengelola tag HTML `<head>` seperti judul halaman (`title`), deskripsi SEO (`description`), dan gambar pratinjau media sosial (`openGraph`). Kamu dapat mengekspor objek konstanta bertipe `Metadata` di dalam berkas `page.tsx` atau `layout.tsx`. Next.js akan menyuntikkan tag meta yang sesuai secara otomatis ke dalam respon HTML server. Jika judul halaman bergantung pada data dinamis dari database, kamu dapat mengekspor fungsi `generateMetadata()` untuk membuat objek meta secara asinkron. Terapkan Metadata API ini pada setiap halaman publik aplikasi kamu.",
          "example": {
            "code": "export const metadata: Metadata = {\n  title: 'Belajar Next.js',\n  description: 'Platform kursus gratis',\n};",
            "output": "Tag title dan meta description terinjeksi di HTML server response.",
            "note": "Gunakan generateMetadata() untuk halaman dengan title dinamis berbasis database. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Ekspor konstanta bernama `metadata` (bertipe `Metadata`) bernilai objek dengan properti `title: 'BiLearn'`.",
          "starterCode": "import { Metadata } from 'next';\n\n// Ekspor metadata di bawah ini\n\n\nexport default function HomePage() {\n  return <h1>Selamat Datang di BiLearn</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+const\\s+metadata\\s*:\\s*Metadata\\s*=\\s*\\{\\s*title\\s*:\\s*['\"]BiLearn['\"]\\s*\\}\\s*;?",
              "message": "Gunakan: export const metadata: Metadata = { title: 'BiLearn' };"
            }
          ],
          "solution": "import { Metadata } from 'next';\n\nexport const metadata: Metadata = { title: 'BiLearn' };\n\nexport default function HomePage() {\n  return <h1>Selamat Datang di BiLearn</h1>;\n}"
        },
        {
          "kind": "step",
          "id": "next-7-4",
          "title": "sitemap.ts & robots.ts",
          "explanation": "Sitemap XML adalah peta panduan yang memberitahu bot mesin pencari (seperti Googlebot) mengenai seluruh halaman aktif yang ada di situs web kamu. Di Next.js App Router, kamu cukup membuat berkas konvensi `app/sitemap.ts` yang mengekspor fungsi default `sitemap()`. Fungsi ini mengembalikan array daftar objek URL beserta tanggal terakhir diperbarui (`lastModified`). Next.js akan secara otomatis mengompilasi berkas ini menjadi peta situs XML standar di endpoint `/sitemap.xml`. Selalu buat berkas `sitemap.ts` untuk memastikan seluruh halaman aplikasi kamu terindeks dengan cepat oleh mesin pencari.",
          "example": {
            "code": "export default function sitemap() {\n  return [{ url: 'https://site.com', lastModified: new Date() }];\n}",
            "output": "Generasi sitemap.xml otomatis pada endpoint /sitemap.xml.",
            "note": "Memastikan seluruh daftar halaman web terindeks cepat oleh Google. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Deklarasikan fungsi yang diekspor secara bawaan bernama `sitemap` yang mengembalikan array kosong `[]`.",
          "starterCode": "import { MetadataRoute } from 'next';\n\n// Definisikan export default function sitemap di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+default\\s+function\\s+sitemap\\s*\\(\\s*\\)",
              "message": "Deklarasikan fungsi default sitemap()"
            },
            {
              "pattern": "return\\s*\\[\\s*\\]\\s*;?",
              "message": "Kembalikan array kosong []"
            }
          ],
          "solution": "import { MetadataRoute } from 'next';\n\nexport default function sitemap(): MetadataRoute.Sitemap {\n  return [];\n}"
        },
        {
          "kind": "step",
          "id": "next-7-5",
          "title": "Lighthouse & Core Web Vitals",
          "explanation": "Core Web Vitals adalah seperangkat metrik performa standar Google yang mengukur kualitas pengalaman pengguna nyata, mencakup kecepatan muat elemen utama (LCP), kelancaran interaksi (INP), dan stabilitas tata letak antarmuka (CLS). Untuk memantau metrik performa ini secara langsung dari pengguna nyata, Next.js menyediakan modul khusus `next/web-vitals`. Dengan mengekspor fungsi `reportWebVitals(metric)` di dalam berkas root layout atau halaman utama, kamu dapat mengumpulkan data metrik performa tersebut dan mengirimkannya ke layanan analitik. Gunakan pemantauan ini untuk mendeteksi penurunan performa sebelum berdampak negatif pada peringkat SEO situs kamu.",
          "example": {
            "code": "// Targetkan skor Lighthouse Web Vitals > 90 untuk SEO teratas\nexport function reportWebVitals(metric) { console.log(metric); }",
            "output": "Rangking pencarian Google mengutamakan web dengan Vitals baik.",
            "note": "Optimasi gambar & hilangkan unused JS untuk menaikkan skor. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Ekspor fungsi `reportWebVitals(metric)` dan lakukan `console.log(metric)` di dalamnya untuk mencetak nilai metrik performa.",
          "starterCode": "// Ekspor fungsi reportWebVitals di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+function\\s+reportWebVitals\\s*\\(\\s*metric\\s*\\)",
              "message": "Pastikan mendeklarasikan export function reportWebVitals(metric)"
            },
            {
              "pattern": "console\\.log\\s*\\(\\s*metric\\s*\\)\\s*;?",
              "message": "Pastikan mencetak nilai metric ke dalam console"
            }
          ],
          "solution": "export function reportWebVitals(metric) {\n  console.log(metric);\n}"
        },
        {
          "kind": "step",
          "id": "next-7-6",
          "title": "Bundle Analysis & dynamic() Import",
          "explanation": "Secara default, seluruh pustaka yang di-import secara statis di dalam komponen akan dikemas ke dalam bundle JavaScript utama. Namun, jika kamu menggunakan pustaka besar (seperti library grafik Recharts atau Rich Text Editor) yang hanya ditampilkan saat pengguna mengklik tombol tertentu, mengunduhnya di awal akan memperlambat waktu muat awal halaman. Next.js menyediakan fungsi `dynamic()` dari modul `next/dynamic` untuk melakukan pemuatan secara malas (Lazy Loading). Fungsi ini memisahkan pustaka tersebut dari bundle utama dan baru mengunduhnya saat komponen benar-being dipasang di layar. Gunakan `dynamic()` pada seluruh komponen berat non-esensial.",
          "example": {
            "code": "import dynamic from \"next/dynamic\";\nconst HeavyChart = dynamic(() => import('./HeavyChart'), { ssr: false });",
            "output": "Komponen HeavyChart dipisah dari bundle JavaScript utama.",
            "note": "ssr: false berguna jika komponen tersebut mengakses window/DOM khusus client. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Deklarasikan konstanta `HeavyComponent` yang memanggil `dynamic()` dan memberikannya callback impor dinamis `() => import('./Heavy')`.",
          "starterCode": "import dynamic from 'next/dynamic';\n\n// Lakukan dynamic import komponen Heavy di bawah ini\n\n\nexport default function Page() {\n  return <HeavyComponent />;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+HeavyComponent\\s*=\\s*dynamic\\(\\s*\\(\\s*\\)\\s*=>\\s*import\\(\\s*['\"]\\./Heavy['\"]\\s*\\)\\s*\\)\\s*;?",
              "message": "Gunakan dynamic import untuk komponen Heavy"
            }
          ],
          "solution": "import dynamic from 'next/dynamic';\n\nconst HeavyComponent = dynamic(() => import('./Heavy'));\n\nexport default function Page() {\n  return <HeavyComponent />;\n}"
        },
        {
          "kind": "quiz",
          "id": "next-7-kuis",
          "title": "Kuis: Optimasi & SEO",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Mengapa sebaiknya menggunakan `<Image>` dari `next/image` dibanding tag `<img>` HTML biasa?",
              "choices": [
                "Karena tag img biasa tidak bisa menampilkan gambar di layar smartphone",
                "Komponen next/image otomatis melakukan optimasi ukuran, konversi format modern (WebP/AVIF), dan mencegah Cumulative Layout Shift (CLS)",
                "Karena next/image gratis tanpa biaya lisensi",
                "Karena next/image mengubah warna gambar secara otomatis"
              ],
              "answerIndex": 1,
              "explanation": "next/image mengotomatiskan kompresi, responsive resizing, dan perlindungan layout shift demi performa Web Vitals."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Untuk mengubah elemen `<head>` HTML (seperti title dan description) di App Router Next.js, pendekatan apa yang paling disarankan?",
              "choices": [
                "Mengimpor komponen <Head> dari next/head di setiap halaman",
                "Memanipulasi document.title di dalam hook useEffect",
                "Mengekspor konstanta bernama metadata dari file page.tsx atau layout.tsx",
                "Menulis manual file index.html di root proyek"
              ],
              "answerIndex": 2,
              "explanation": "App Router (direktori app) menggunakan Metadata API berbasis server. Mengekspor objek (atau fungsi) `metadata` akan memberitahu Next.js untuk menyuntikkan tag meta yang sesuai."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Dalam konteks Core Web Vitals, metrik mana yang akan paling terdampak secara negatif jika halaman memuat font kustom lambat dan menyebabkan teks melompat (Flash of Unstyled Text)?",
              "choices": [
                "LCP (Largest Contentful Paint)",
                "INP (Interaction to Next Paint)",
                "CLS (Cumulative Layout Shift)",
                "TTFB (Time to First Byte)"
              ],
              "answerIndex": 2,
              "explanation": "Perubahan ukuran font atau penggantian font yang tiba-tiba membuat elemen terdorong/berubah posisi (Layout Shift). Modul `next/font` mengatasi ini dengan memuat font secara optimal di build time."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Apa kegunaan utama dari fungsi `dynamic()` dari modul 'next/dynamic'?",
              "choices": [
                "Mengubah warna teks secara dinamis",
                "Memisahkan komponen berat ke dalam berkas JavaScript terpisah dan memuatnya secara malas (Lazy Loading)",
                "Menggantikan fungsi database",
                "Menghapus cache halaman secara otomatis"
              ],
              "answerIndex": 1,
              "explanation": "dynamic() melakukan code splitting dan lazy loading sehingga mengurangi ukuran bundle JavaScript utama aplikasi."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Metrik Core Web Vitals manakah yang mengukur kecepatan waktu muat elemen visual terbesar (seperti gambar banner utama) di halaman?",
              "choices": [
                "INP",
                "CLS",
                "LCP",
                "FCP"
              ],
              "answerIndex": 2,
              "explanation": "LCP (Largest Contentful Paint) mengukur kapan elemen konten terbesar pada viewport selesai dirender di layar."
            }
          ]
        }
      ]
    },
    {
      "slug": "deploy",
      "title": "Database & Deploy",
      "description": "Dari localhost ke URL publik: Prisma, Postgres, dan Vercel.",
      "topics": [
        "Prisma + PostgreSQL di Next.js",
        "Environment variable: lokal vs production",
        "Deploy ke Vercel: preview & production",
        "Custom domain & HTTPS",
        "Logging & error monitoring dasar",
        "Checklist pre-launch"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "next-8-m1",
          "title": "Integrasi Database & Production Deployment di Next.js",
          "body": "# Integrasi Database & Production Deployment\n\nMenghubungkan aplikasi Next.js ke database PostgreSQL dan men-deploy-nya ke lingkungan produksi membutuhkan pemahaman mengenai arsitektur serverless dan manajemen variabel lingkungan.\n\n## Prisma Client Singleton Pattern di Development\n\nNext.js di mode pengembangan (`npm run dev`) menggunakan fitur **Hot Module Replacement (HMR)** untuk memperbarui kode secara cepat. Setiap kali kamu menyimpan berkas, modul di-reload.\n\nJika kamu menulis `const prisma = new PrismaClient()` secara biasa, setiap event hot reload akan membuat instansi koneksi database baru ke PostgreSQL. Dalam beberapa menit, server database kamu akan melempar error **\"Too many connections\"**!\n\n```typescript\n// lib/prisma.ts (Pola Singleton Safe)\nimport { PrismaClient } from '@prisma/client';\n\nconst globalForPrisma = global as unknown as { prisma: PrismaClient };\n\nexport const prisma =\n  globalForPrisma.prisma ||\n  new PrismaClient({\n    log: ['query'],\n  });\n\nif (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;\n```\n\n## Manajemen Environment Variables\n\nSimpan variabel lingkungan di berkas `.env.local` di komputer lokal. Aturan emas keamanan:\n- **Private (Default)**: Rahasia server (seperti `DATABASE_URL` atau `STRIPE_SECRET_KEY`). Hanya dapat dibaca oleh Server Components / Route Handlers.\n- **Public (`NEXT_PUBLIC_`)**: Variabel yang diizinkan dibaca di browser client (seperti `NEXT_PUBLIC_SITE_URL` atau `NEXT_PUBLIC_GA_ID`).\n\n```text\n# .env.local\nDATABASE_URL=\"postgresql://user:pass@localhost:5432/mydb\" (Hanya di Server)\nNEXT_PUBLIC_API_URL=\"https://api.myapp.com\"              (Disuntikkan ke Client Bundle)\n```\n\n## Deployment ke Vercel (Preview vs Production)\n\nVercel adalah platform pencipta Next.js dengan alur kerja Git otomatis:\n1. **Preview Deployment**: Setiap kali kamu membuka Pull Request (PR) atau push ke branch non-main, Vercel otomatis membuatkan URL pratinjau unik untuk diuji tim.\n2. **Production Deployment**: Push/Merge ke branch `main` secara otomatis memicu proses build produksi (`next build`) dan memperbarui URL domain utama.\n\n## Self-Hosting dengan Docker\n\nJika kamu men-deploy Next.js di server sendiri (AWS / DigitalOcean VPS), aktifkan mode standalone di `next.config.js`:\n\n```javascript\n// next.config.js\nmodule.exports = {\n  output: 'standalone', // Menghasilkan folder ringan siap pakai untuk Docker\n};\n```\n\n## Monitoring Error dengan Sentry & Checklist Pre-Launch\n\nSebelum mempublikasikan aplikasi ke publik, pasang integrasi Sentry (`withSentryConfig`) untuk menangkap crash runtime pengguna di produksi.\n\n### Checklist Pre-Launch Wajib:\n- [ ] Uji build lokal dengan `npm run build && npm run start`\n- [ ] Pastikan tidak ada berkas `.env.local` yang ter-commit ke Git Repository\n- [ ] Konfigurasi variabel environment di Vercel Dashboard\n- [ ] Periksa skor Lighthouse dan pengujian tampilan di perangkat mobile\n\n## Analogi Dunia Nyata\n\nPola Singleton Prisma seperti **Keran Air Utama Rumah**. Daripada membuat pipa baru setiap kali ingin minum air (Hot Reload), kamu menggunakan satu kran utama yang sama (Global Object) agar tagihan listrik dan pasokan air tetap stabil.\n\n## Jebakan & Kesalahan Umum\n\n1. **Membocorkan Secret Key**: Menambahkan awalan `NEXT_PUBLIC_` pada password database atau JWT secret key.\n2. **Bentrokan Koneksi Database**: Lupa menggunakan Singleton Pattern pada ORM saat mode pengembangan.\n3. **Mengabaikan Gagal Build**: Menganggap aplikasi berfungsi karena jalan di `npm run dev`, padahal ada error TypeScript saat `npm run build` di Vercel.\n\n## Kaitan ke Dunia Kerja\n\nAlur kerja Preview Deployment Vercel adalah standar kolaborasi tim teknologi modern. Tim QA dan Product Manager dapat menguji fitur baru pada URL pratinjau sebelum rilis ke publik tanpa mengganggu pengguna live."
        },
        {
          "kind": "step",
          "id": "next-8-1",
          "title": "Prisma Client Instansiasi Singleton",
          "explanation": "Saat menjalankan Next.js di mode pengembangan (`npm run dev`), fitur Hot Reloading akan memuat ulang modul aplikasi setiap kali kamu menyimpan berkas. Jika instansi `PrismaClient` diinisialisasi secara biasa tanpa pola Singleton, setiap event reload akan membuat koneksi database baru ke PostgreSQL. Hal ini dengan cepat menghabiskan kuota koneksi database dan menyebabkan error `Too many connections`. Untuk mengatasi masalah ini, simpan instansi `PrismaClient` di dalam objek `globalThis` Node.js sehingga koneksi yang sama dapat dipakai ulang secara aman selama sesi pengembangan.",
          "example": {
            "code": "import { PrismaClient } from \"@prisma/client\";\nconst globalForPrisma = global as unknown as { prisma: PrismaClient };\nexport const prisma = globalForPrisma.prisma || new PrismaClient();",
            "output": "Satu koneksi database dipakai ulang secara aman di dev mode.",
            "note": "Simpan instansi ini di lib/prisma.ts."
          },
          "instruction": "Lengkapi ekspor konstanta `prisma` dengan operator pengondisian OR (`||`) agar menggunakan instansi global yang sudah ada atau membuat `new PrismaClient()`.",
          "starterCode": "import { PrismaClient } from '@prisma/client';\nconst globalForPrisma = global;\n\n// Lengkapi inisialisasi singleton prisma di bawah ini\nexport const prisma = globalForPrisma.prisma \n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+const\\s+prisma\\s*=\\s*globalForPrisma\\.prisma\\s*\\|\\|\\s*new\\s+PrismaClient\\(\\)\\s*;?",
              "message": "Gunakan: export const prisma = globalForPrisma.prisma || new PrismaClient()"
            }
          ],
          "solution": "import { PrismaClient } from '@prisma/client';\nconst globalForPrisma = global;\n\nexport const prisma = globalForPrisma.prisma || new PrismaClient();"
        },
        {
          "kind": "step",
          "id": "next-8-2",
          "title": "Environment Variables: lokal (.env.local) vs production",
          "explanation": "Variabel lingkungan di Next.js dikelola melalui berkas `.env.local`. Secara default, seluruh variabel lingkungan hanya dapat diakses oleh kode server (Server Components & Route Handlers) untuk menjaga kerahasiaan kuis atau kunci rahasia database. Namun, jika kamu memiliki variabel yang wajib dibaca oleh Client Component di browser (seperti URL API publik atau Analytics ID), kamu harus memberikan awalan khusus `NEXT_PUBLIC_` pada nama variabel tersebut. Ingatlah untuk tidak pernah menambahkan awalan `NEXT_PUBLIC_` pada kunci rahasia backend.",
          "example": {
            "code": "DATABASE_URL=\"postgresql://...\"\nNEXT_PUBLIC_SITE_URL=\"http://localhost:3000\"",
            "output": "// di Server Component\nconsole.log(process.env.DATABASE_URL);\n→ postgresql://...\n\n// di Client Component ('use client')\nconsole.log(process.env.DATABASE_URL);\n→ undefined\nconsole.log(process.env.NEXT_PUBLIC_SITE_URL);\n→ http://localhost:3000",
            "note": "Jangan sertakan atribut NEXT_PUBLIC_ pada password atau API key rahasia!"
          },
          "instruction": "Tambahkan variabel `API_URL` dengan nilai `\"https://api.com\"` yang diberi awalan khusus agar diekspos ke Client Component.",
          "starterCode": "# File .env.local\nDATABASE_URL=\"postgres://...\"\n# Tulis URL publik di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "NEXT_PUBLIC_",
              "message": "Agar variabel bisa dibaca Client Component, namanya WAJIB berawalan `NEXT_PUBLIC_`. Awalan itu bukan kosmetik: Next.js hanya menyisipkan variabel berawalan itu ke bundel browser, justru supaya kredensial tanpa awalan tidak ikut terkirim ke pengguna."
            },
            {
              "pattern": "API_URL\\s*=\\s*[\"']https://api\\.com[\"']",
              "message": "Setelah awalannya, lanjutkan dengan nama variabel yang diminta, tanda sama dengan, lalu nilainya. Ingat: apa pun yang berawalan `NEXT_PUBLIC_` bisa dibaca siapa saja di DevTools — jangan menaruh kunci rahasia di sana."
            }
          ],
          "solution": "NEXT_PUBLIC_API_URL=\"https://api.com\""
        },
        {
          "kind": "step",
          "id": "next-8-3",
          "title": "Deploy ke Vercel: Preview & Production",
          "explanation": "Vercel menyediakan alur pengujian CI/CD terintegrasi untuk aplikasi Next.js. Setiap kali kamu membuat Pull Request (PR) di GitHub, Vercel secara otomatis membangun **Preview Deployment** yang menghasilkan URL pratinjau sementara untuk diuji oleh tim sebelum di-merge. Setelah PR disetujui dan di-merge ke branch utama (`main`), Vercel akan otomatis memperbarui **Production Deployment**. Untuk membedakan lingkungan aplikasi saat runtime, kamu dapat membaca variabel bawaan Vercel yaitu `process.env.VERCEL_ENV === 'preview'`.",
          "example": {
            "code": "// Push ke branch feature -> Preview URL otomatis dibuat Vercel\n// Push/Merge ke branch main -> Production URL terupdate",
            "output": "Siklus pengujian otomatis yang sangat nyaman bagi tim.",
            "note": "Jangan lupa memasukkan Environment Variables di Vercel Dashboard."
          },
          "instruction": "Tuliskan deklarasi konstanta boolean `isPreview` yang mengecek apakah `process.env.VERCEL_ENV === 'preview'`.",
          "starterCode": "// Vercel CI environment detection\n// Tulis deklarasi isPreview di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+isPreview\\s*=\\s*process\\.env\\.VERCEL_ENV\\s*===\\s*['\"]preview['\"]\\s*;?",
              "message": "Cek apakah process.env.VERCEL_ENV bernilai 'preview'"
            }
          ],
          "solution": "const isPreview = process.env.VERCEL_ENV === 'preview';"
        },
        {
          "kind": "step",
          "id": "next-8-4",
          "title": "Custom Domain & HTTPS",
          "explanation": "Setelah aplikasi berhasil di-deploy ke Vercel, kamu dapat mengarahkan nama domain kustom milikmu (seperti `domainku.com`) melalui Vercel Dashboard. Vercel secara otomatis mengelola penerbitan dan pembaruan sertifikat keamanan SSL/HTTPS gratis dari Let's Encrypt. Untuk menghubungkan domain kustom via DNS record, kamu biasanya menambahkan CNAME Record yang mengarah ke `cname.vercel-dns.com`. Gunakan CNAME Record ini untuk menyambungkan sub-domain atau domain utama ke server hosting aplikasi.",
          "example": {
            "code": "A Record -> 76.76.21.21\nCNAME -> cname.vercel-dns.com",
            "output": "Domain milikmu terhubung dengan SSL/HTTPS gratis dari Let's Encrypt.",
            "note": "Sertifikat SSL dikelola dan diperbarui otomatis oleh Vercel. Catatan jujur: kode ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas ini hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Deklarasikan konstanta `cname` yang bernilai string `'cname.vercel-dns.com'`.",
          "starterCode": "async function configureDomain() {\n  const domain = 'proyekku.com';\n  // Deklarasi target CNAME Vercel di bawah ini\n  \n  await dns.setRecord(domain, 'CNAME', cname);\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+cname\\s*=\\s*['\"]cname\\.vercel-dns\\.com['\"]\\s*;?",
              "message": "Deklarasikan konstanta cname berisi 'cname.vercel-dns.com'"
            }
          ],
          "solution": "async function configureDomain() {\n  const domain = 'proyekku.com';\n  const cname = 'cname.vercel-dns.com';\n  await dns.setRecord(domain, 'CNAME', cname);\n}"
        },
        {
          "kind": "step",
          "id": "next-8-5",
          "title": "Logging & Error Monitoring (Sentry)",
          "explanation": "Memantau kesalahan yang terjadi di lingkungan produksi sangat penting agar kamu dapat mendeteksi bug sebelum dilaporkan oleh pengguna. Platform seperti Sentry menyediakan integrasi resmi untuk Next.js melalui fungsi pembungkus `withSentryConfig`. Dengan meng-import `withSentryConfig` dari `@sentry/nextjs` dan membungkus konfigurasi `nextConfig` pada `next.config.js`, Sentry akan secara otomatis menangkap stack trace uncaught error di sisi server maupun client dan mengirimkan laporan real-time ke dashboard kamu.",
          "example": {
            "code": "import { withSentryConfig } from '@sentry/nextjs';\nmodule.exports = withSentryConfig(nextConfig);",
            "output": "Mencatat stacktrace lengkap error produksi ke dashboard Sentry.",
            "note": "Error monitoring memberi tahu bug produksi sebelum dikomplain oleh client."
          },
          "instruction": "Impor fungsi `withSentryConfig` dari `'@sentry/nextjs'` dan bungkus modul ekspor `nextConfig` dengannya.",
          "starterCode": "const nextConfig = { reactStrictMode: true };\n// Lakukan impor withSentryConfig di bawah ini\n\n\n// Ubah modul ekspor untuk membungkus nextConfig dengan Sentry\nmodule.exports = nextConfig;",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+\\{\\s*withSentryConfig\\s*\\}\\s+from\\s+['\"]@sentry/nextjs['\"]\\s*;?",
              "message": "Impor fungsi withSentryConfig dari @sentry/nextjs"
            },
            {
              "pattern": "module\\.exports\\s*=\\s*withSentryConfig\\s*\\(\\s*nextConfig\\s*\\)\\s*;?",
              "message": "Bungkus nextConfig dengan withSentryConfig sebelum diekspor"
            }
          ],
          "solution": "import { withSentryConfig } from '@sentry/nextjs';\nconst nextConfig = { reactStrictMode: true };\nmodule.exports = withSentryConfig(nextConfig);"
        },
        {
          "kind": "step",
          "id": "next-8-6",
          "title": "Checklist Pre-launch",
          "explanation": "Sebelum meluncurkan aplikasi ke produksi, jalankan pemeriksaan akhir untuk memastikan tidak ada bug kompilasi yang menghentikan sistem. Langkah paling krusial adalah menjalankan perintah build produksi secara lokal menggunakan `npm run build`. Jika terdapat kesalahan tipe TypeScript atau sintaks yang salah, perintah ini akan melempar error dan menghentikan proses build. Tambahkan script `\"predeploy\": \"npm run build\"` pada berkas `package.json` kamu untuk memastikan validasi build berjalan otomatis sebelum proses rilis.",
          "example": {
            "code": "npm run build && npm run start",
            "output": "Memastikan build production lokal bersih tanpa error kompilasi.",
            "note": "Uji build produksi di lokal sebelum mengirimkan kode ke rilis publik."
          },
          "instruction": "Tambahkan script npm pada `package.json` yang akan menjalankan validasi build, namakan kunci script tersebut `\"predeploy\"` dan beri nilainya `\"npm run build\"`.",
          "starterCode": "{\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\",\n    // Tambahkan script predeploy di bawah ini\n    \n  }\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "[\"']predeploy[\"']\\s*:\\s*[\"']npm\\s+run\\s+build['\"]",
              "message": "Tambahkan script \"predeploy\": \"npm run build\""
            }
          ],
          "solution": "{\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\",\n    \"predeploy\": \"npm run build\"\n  }\n}"
        },
        {
          "kind": "quiz",
          "id": "next-8-kuis",
          "title": "Kuis: Database & Deploy",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Awalan (prefix) apa yang wajib diberikan pada variabel `.env` agar nilainya dapat dibaca oleh Client Component di Next.js?",
              "choices": [
                "PUBLIC_",
                "NEXT_PUBLIC_",
                "CLIENT_",
                "REACT_APP_"
              ],
              "answerIndex": 1,
              "explanation": "Hanya variabel berawalan NEXT_PUBLIC_ yang disuntikkan Next.js ke dalam bundle JavaScript client."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Mengapa kita disarankan menginisialisasi PrismaClient dengan pola 'singleton' (seperti menyimpan instansinya di objek global) saat bekerja pada mode Development di Next.js?",
              "choices": [
                "Karena PrismaClient berbayar di development",
                "Agar proses query berjalan 100x lebih cepat",
                "Untuk mencegah munculnya error 'Too many connections' yang diakibatkan oleh fitur Hot-Reloading Next.js yang terus-menerus mereset modul dan membuat koneksi database baru setiap kali file disimpan",
                "Agar kita bisa melakukan migrasi skema database secara otomatis tanpa CLI"
              ],
              "answerIndex": 2,
              "explanation": "Setiap kamu menyimpan file saat pengembangan, Next.js merekonstruksi environment. Jika koneksi lama tidak disimpan (cache), file db-mu akan kebanjiran koneksi baru dari PrismaClient yang terus-terusan dibuat ulang."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Di platform Vercel, apa kegunaan dari fitur Preview Deployment?",
              "choices": [
                "Memeriksa tata bahasa sintaks Inggris secara otomatis",
                "Melakukan backup keseluruhan database",
                "Secara otomatis membangun versi sementara dari aplikasi setiap kali kita membuka Pull Request, sehingga tim bisa menguji tampilan dan fitur web secara live tanpa mengganggu versi asli (production)",
                "Mengubah kode React menjadi kode Vue"
              ],
              "answerIndex": 2,
              "explanation": "Preview deployments sangat vital untuk tim kolaborasi; memungkinkan penguji coba mengakses URL rahasia hasil dari kode yang masih berada di branch feature."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu telah menyelesaikan pengembangan dan ingin men-deploy aplikasi ke produksi. Perintah standar mana yang membangun versi teroptimasi dari aplikasi Next.js-mu?",
              "choices": [
                "npm run dev",
                "npm run start",
                "npm run build",
                "npm run export"
              ],
              "answerIndex": 2,
              "explanation": "'npm run build' menjalankan 'next build', yang bertugas mengkompilasi aplikasi, membuat halaman statis yang memungkinkan, dan mempersiapkan server produksi."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Fungsi pembungkus apa dari '@sentry/nextjs' yang digunakan di file next.config.js untuk mengirimkan laporan crash produksi secara otomatis ke dashboard Sentry?",
              "choices": [
                "withSentryConfig",
                "initSentry",
                "wrapNextConfig",
                "enableSentry"
              ],
              "answerIndex": 0,
              "explanation": "withSentryConfig membungkus objek nextConfig agar Sentry dapat menangkap source maps dan uncaught errors di server/client."
            }
          ]
        }
      ]
    }
  ]
};
