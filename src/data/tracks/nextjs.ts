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
          "body": "# Pengertian\n\n**Next.js** adalah framework yang dibangun di atas React. Kalau di track React kamu membuat proyek dengan Vite dan mengurus routing sendiri lewat library, di Next.js keduanya sudah menjadi bagian framework — beserta rendering di server, optimasi gambar, dan API route.\n\nSebelum menyentuh konsep App Router, satu hal harus jalan lebih dulu: **proyeknya ada di komputermu dan dev server-nya menyala.**\n\n## Prasyarat dan Cara Membuat Proyek\n\n| Kebutuhan | Perintah pemeriksa | Catatan |\n|---|---|---|\n| Node.js versi LTS | `node -v` | Next.js modern menolak Node yang terlalu tua; pakai LTS |\n| npm | `npm -v` | ikut terpasang bersama Node |\n| Proyek baru | `npx create-next-app@latest nama-proyek` | scaffolding resmi, bukan salin folder orang |\n\n```text\n$ npx create-next-app@latest toko-online\n\n? Would you like to use the recommended Next.js defaults?\n> Yes, use recommended defaults - TypeScript, ESLint, Tailwind CSS, App Router, AGENTS.md\n  No, reuse previous settings\n  No, customize settings - Choose your own preferences\n\n$ cd toko-online\n$ npm run dev\n  ▲ Next.js 16.2.12\n  - Local:   http://localhost:3000\n  ✓ Ready in 1.4s\n```\n\nPilih **Yes, use recommended defaults** — itu yang dipakai di seluruh track ini: TypeScript, ESLint, Tailwind, dan **App Router**. Kalau kamu memilih *customize settings* lalu menjawab *No* pada pertanyaan App Router, kamu mendapat *Pages Router* dan sebagian besar materi track ini tidak akan cocok — itu sistem routing generasi sebelumnya yang masih didukung tapi tidak lagi dianjurkan untuk proyek baru.\n\nCatatan: kalau kamu ingin melewati semua pertanyaan sekaligus, tambahkan `--yes` (`npx create-next-app@latest toko-online --yes`).\n\n## Isi Folder yang Baru Dibuat\n\n```text\ntoko-online/\n├── src/app/\n│   ├── layout.tsx      <-- kerangka yang membungkus SEMUA halaman\n│   ├── page.tsx        <-- halaman untuk URL \"/\"\n│   └── globals.css\n├── public/             <-- berkas statis; /logo.png berarti public/logo.png\n├── next.config.ts\n├── package.json        <-- di sini ada scripts: dev, build, start, lint\n└── tsconfig.json\n```\n\nAturan yang membedakan Next.js dari React biasa: **nama berkas menentukan perilaku**. `page.tsx` membuat sebuah URL bisa diakses, `layout.tsx` membungkusnya, `loading.tsx` tampil saat menunggu. Folder tanpa `page.tsx` di dalamnya tidak menghasilkan URL apa pun.\n\n## Empat Perintah yang Akan Kamu Pakai Terus\n\n| Perintah | Fungsinya | Kapan dipakai |\n|---|---|---|\n| `npm run dev` | menyalakan dev server + hot reload | sehari-hari saat mengembangkan |\n| `npm run build` | membangun versi produksi | sebelum deploy, dan untuk menemukan error yang tidak muncul di dev |\n| `npm start` | menjalankan hasil build | menguji perilaku produksi di lokal |\n| `npm run lint` | memeriksa gaya & kesalahan umum | sebelum membuat Pull Request |\n\n`npm run build` layak dijalankan sesekali meskipun dev server-mu lancar: sebagian error tipe dan kesalahan pemakaian Server Component **hanya** muncul saat build.\n\n## Analogi Dunia Nyata\n\nReact itu seperti **mesin dan roda**: kuat, tapi kamu masih harus merakit rangka, lampu, dan sistem kemudinya sendiri (routing, rendering, optimasi). Next.js adalah **mobil jadi** dari bengkel yang sama: komponennya sama, tapi susunannya sudah ditentukan.\n\nKonsekuensinya dua arah. Kamu tidak perlu memutuskan struktur folder — tapi kamu **wajib** mengikuti konvensinya. `page.tsx` yang salah nama tidak akan pernah muncul sebagai halaman, dan tidak ada pesan error yang menjelaskan kenapa.\n\n## Jebakan yang Menjatuhkan Hampir Semua Pemula\n\n1. **Memilih Pages Router lalu mengikuti materi App Router.** Semua contoh gagal. Kalau ragu, periksa: ada folder `app/` berarti App Router, ada folder `pages/` berarti Pages Router.\n2. **Menamai berkas `Page.tsx` atau `index.tsx`.** Konvensinya huruf kecil semua: `page.tsx`. Berkas dengan nama lain di dalam folder route tidak menghasilkan URL.\n3. **Menjalankan `npm run dev` di folder induk.** Terminal harus berada di dalam folder proyek — periksa `package.json` ada di situ.\n4. **Menyalin folder proyek orang lain lengkap dengan `node_modules`.** Jauh lebih rapuh daripada `npm install` sendiri, dan sering menghasilkan error versi yang sulit dilacak.\n5. **Port 3000 sudah dipakai.** Next.js akan pindah ke 3001 dan menyebutkannya di baris `Local:` — bacalah alamat itu, jangan berasumsi selalu 3000.\n6. **Mengira dev server perlu dimatikan-nyalakan setiap kali menyimpan.** Hot reload sudah menanganinya; yang perlu restart hanya perubahan pada `next.config.ts` atau `.env`.\n\n## Kaitan ke Dunia Kerja\n\n- `create-next-app` adalah cara resmi memulai, dan di **interview** kamu bisa ditanya mengapa memilih Next.js dibanding React murni — jawabannya menyebut SEO, rendering di server, dan routing bawaan, bukan \"lebih modern\".\n- Di tim, **CI menjalankan `npm run build` dan `npm run lint`** pada setiap Pull Request. Kalau keduanya belum pernah kamu jalankan di lokal, PR-mu akan merah lebih dulu sebelum satu orang pun membacanya.\n- Struktur `app/` yang konsisten adalah alasan orang baru bisa langsung membaca proyek Next.js orang lain — itu nilai jual framework ini di perusahaan dengan pergantian anggota tim.\n\n> **Kapan dipakai:** sekali di awal setiap proyek. Setelah `npm run dev` menampilkan `✓ Ready`, buka `http://localhost:3000` dan pastikan halaman bawaan muncul **sebelum** kamu menghapus isinya — supaya kalau nanti ada yang rusak, kamu tahu penyebabnya kodemu, bukan pemasangannya.\n\n> **Catatan tentang latihan di BiLearn:** panel latihan track ini **tidak menjalankan Next.js** (butuh server sendiri, dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Keluaran nyata ditampilkan di bagian **Contoh** setiap latihan."
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
          "solution": "npx create-next-app@latest toko-online",
          susunKode: {
            question:
              "Rangkai perintah terminal untuk membuat proyek Next.js baru bernama toko-online dengan generator resmi versi terbaru.",
            potongan: [
              "npx",
              "create-next-app@latest",
              "toko-online",
            ],
            pengecoh: [
              "npm run",
              "init-next-app",
              "toko_online",
            ],
            pemisah: " ",
            explanation:
              "Perintah create-next-app dijalankan melalui npx agar menggunakan versi generator paling baru. Keping npm run adalah jebakan karena npm run hanya dipakai untuk menjalankan script lokal package.json. Keping init-next-app sering keliru digunakan karena terdengar seperti npm init, padahal nama paket resminya adalah create-next-app@latest. Keping toko_online menggoda bagi pengguna yang terbiasa dengan snake_case, padahal instruksi mewajibkan penamaan folder kebab-case toko-online.",
          },
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
          "title": "Kenapa Next.js: SEO yang Ikut Sejak Berkas Pertama",
          "explanation": "Nilai jual utama Next.js dibanding React murni adalah HTML-nya sudah lengkap **sebelum** dikirim ke browser — termasuk isi `<head>`. Di React murni, judul tab biasanya diubah lewat `useEffect` atau library tambahan, sehingga perayap mesin pencari dan pratinjau tautan WhatsApp sering hanya melihat judul bawaan `Create Next App`. Di Next.js kamu cukup mengekspor objek bernama `metadata` dari `page.tsx` atau `layout.tsx`, lalu server yang menuliskan tag `<title>` dan `<meta>`-nya. Dipakai di setiap halaman publik: beranda, halaman produk, artikel. Jebakan yang mahal: objek `metadata` **diabaikan** di berkas berdirektif `'use client'` — jadi kalau judul tabmu tidak berubah, periksa dulu baris pertama berkasnya. Modul 7 melanjutkan topik ini sampai Open Graph dan judul dinamis dari database.",
          "example": {
            "code": "// app/blog/layout.tsx\nexport const metadata = {\n  title: 'Blog BiLearn',\n  description: 'Catatan belajar web development',\n};",
            "output": "Buka http://localhost:3000/blog lalu klik kanan → View Page Source:\n\n<head>\n  <title>Blog BiLearn</title>\n  <meta name=\"description\" content=\"Catatan belajar web development\"/>\n</head>",
            "note": "Perhatikan letaknya: tag itu ada di HTML yang dikirim server, bukan disisipkan JavaScript setelah halaman terbuka — itulah yang dilihat perayap Google. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Beranda proyekmu masih memakai judul tab bawaan hasil `create-next-app`. Di `app/page.tsx`, buat judul tab itu menjadi `Beranda` dengan cara yang dibaca server Next.js — bukan lewat hook, bukan lewat library tambahan.",
          "starterCode": "// app/page.tsx\n// Tab browser masih berjudul \"Create Next App\". Perbaiki dari sini.\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+const\\s+metadata\\s*=",
              "message": "Next.js hanya membaca sebuah named export yang namanya tepat `metadata`. Variabel tanpa `export`, atau yang dinamai `meta`, tidak pernah dilihat Next.js — judul tab akan tetap seperti semula tanpa pesan error apa pun."
            },
            {
              "pattern": "title\\s*:\\s*['\"]Beranda['\"]",
              "message": "Judul tab diambil dari properti `title` di dalam objek itu. Tulis nilainya persis seperti yang diminta, karena nilai inilah yang tampil di tab browser dan di hasil pencarian."
            }
          ],
          "solution": "export const metadata = {\n  title: 'Beranda',\n};",
          susunKode: {
            question:
              "Susun ekspor objek metadata sederhana untuk menetapkan judul halaman sebagai Beranda.",
            potongan: [
              "export const metadata = {",
              "  title: 'Beranda',",
              "};",
            ],
            pengecoh: [
              "export const meta = {",
              "  headline: 'Beranda',",
            ],
            pemisah: "\n",
            explanation:
              "Next.js secara khusus mencari named export bernama metadata untuk membaca informasi title halaman. Keping export const meta = { sangat menggoda karena singkat, tetapi Next.js mengabaikan nama ekspor selain metadata. Keping headline: 'Beranda', adalah jebakan properti keliru dari kerangka kerja lain, karena Next.js hanya mengenali kunci title untuk judul dokumen.",
          },
        },
        {
          "kind": "step",
          "id": "next-1-2",
          "title": "Struktur Folder app/: page.tsx & layout.tsx",
          "explanation": "Pada arsitektur App Router Next.js, hirarki folder di dalam direktori `app/` secara otomatis mencerminkan struktur path URL aplikasi web kamu. Berkas khusus bernama `page.tsx` berfungsi sebagai tampilan antarmuka utama untuk rute tersebut, sedangkan berkas `layout.tsx` berfungsi sebagai pembungkus (wrapper) yang membagikan komponen navigasi atau header antar sub-halaman. Dengan memisahkan layout dan page, Next.js tidak perlu merender ulang komponen navigasi saat pengguna berpindah halaman, sehingga meningkatkan efisiensi performa. Gunakan `layout.tsx` di folder root untuk menempatkan header, footer, dan provider global. Jebakan umum pemula adalah menamai berkas halaman dengan nama `index.tsx` seperti pada arsitektur lama; pastikan kamu selalu menggunakan nama `page.tsx` agar rute terdeteksi oleh Next.js.",
          "example": {
            "code": "// app/about/page.tsx  ->  URL /about\nexport default function AboutPage() {\n  return <h1>Tentang Kami</h1>;\n}",
            "output": "Hasil render saat membuka /about:\n\n<h1>Tentang Kami</h1>\n\nURL /about ada karena ada berkas app/about/page.tsx — bukan karena ada konfigurasi router yang ditulis manual.",
            "note": "Nama folder menentukan URL-nya, nama berkas `page.tsx` menentukan bahwa URL itu ada. Ganti nama berkasnya menjadi `index.tsx` dan URL itu langsung hilang tanpa pesan error. Catatan jujur: panel preview di sini merender komponennya sebagai React biasa, jadi kamu melihat hasil JSX-nya — tapi routing berbasis berkas TIDAK berjalan di panel ini."
          },
          "instruction": "Berkas `app/page.tsx` di proyek barumu masih kosong, jadi membuka `/` menghasilkan 404. Isi berkas itu: satu komponen yang dikenali Next.js sebagai halaman (ikuti konvensi penamaan dokumentasi resmi) dan menampilkan judul level satu bertuliskan `Home`.",
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
          "solution": "export default function Page() {\n  return <h1>Home</h1>;\n}",
          susunKode: {
            question:
              "Rangkai halaman utama page.tsx yang mengekspor komponen default Page.",
            potongan: [
              "export default function Page() {",
              "  return <h1>Home</h1>;",
              "}",
            ],
            pengecoh: [
              "export function Page() {",
              "  return <h2>Home</h2>;",
            ],
            pemisah: "\n",
            explanation:
              "Next.js mewajibkan komponen halaman diekspor sebagai default export agar router dapat merendernya. Keping export function Page() { sering keliru karena lupa kata kunci default, yang berakibat rute mengembalikan tampilan 404. Keping return <h2>Home</h2>; menggoda tetapi menyalahi spesifikasi instruksi yang meminta elemen heading h1.",
          },
        },
        {
          "kind": "step",
          "id": "next-1-3",
          "title": "Dynamic Route [slug]",
          "explanation": "Folder yang dibungkus dengan tanda kurung siku seperti `[slug]` membuat rute dinamis yang dapat menerima parameter variabel dari URL, seperti `/blog/react-tutorial` atau `/user/42`. Nilai parameter ini dapat ditangkap di dalam komponen halaman melalui properti `params`. Pada versi Next.js terbaru, `params` disediakan dalam bentuk `Promise` sehingga kamu wajib menggunakan kata kunci `await` sebelum mengakses properti di dalamnya. Gunakan rute dinamis ini saat kamu membangun halaman detail produk, artikel blog, atau profil pengguna yang struktur tampilannya sama namun datanya berbeda-beda sesuai ID URL. Jebakan paling sering terjadi ketika developer lupa meng-await `params` pada Server Component async, yang akan menyebabkan error runtime atau warning saat proses kompilasi.",
          "example": {
            "code": "export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;\n  return <h1>Post: {slug}</h1>;\n}",
            "output": "Membuka /blog/react-tutorial:\n\n<h1>Post: react-tutorial</h1>\n\nMembuka /blog/nextjs-16 dengan berkas yang sama:\n\n<h1>Post: nextjs-16</h1>",
            "note": "Kalau `await`-nya lupa ditulis, yang tampil di halaman adalah `<h1>Post: [object Promise]</h1>` — gejala khas yang layak kamu hafal. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Berkas `app/user/[id]/page.tsx` harus menampilkan ID yang ada di URL. Di Next.js versi ini `params` datang sebagai Promise, jadi nilainya perlu ditunggu lebih dulu. Lengkapi komponen async di bawah agar variabel `id` yang sudah dipakai di JSX benar-benar berisi nilai dari URL.",
          "starterCode": "export default async function UserPage({ params }) {\n  // Ekstrak 'id' dari params di bawah ini\n  \n  return <h1>User: {id}</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "await\\s+params",
              "stripComments": true,
              "message": "`params` di Next.js versi ini berbentuk Promise, jadi harus ditunggu. Tanpa `await`, yang kamu pegang objek Promise: TypeScript menolaknya, dan kalau lolos, halaman menampilkan `[object Promise]`."
            },
            {
              "pattern": "(?:\\{[^}]*\\bid\\b[^}]*\\}|\\b(?:const|let|var)\\s+id)\\s*=\\s*(?:\\(?\\s*await\\s+params\\s*\\)?(?:\\??\\.id)?|[A-Za-z_$][\\w$]*\\.id)",
              "stripComments": true,
              "message": "Setelah ditunggu, ambil properti `id` dari hasilnya — boleh dengan destructuring (`const { id } = await params`), boleh lewat tanda kurung `(await params).id`, atau lewat variabel perantara lalu titik `id`. Namanya harus `id` karena itu nama folder `[id]`."
            },
            {
              "pattern": "return[\\s\\S]*await\\s+params",
              "mustNotMatch": true,
              "stripComments": true,
              "message": "Ekstrak `id` dari `params` sebelum `return`. Jangan meletakkan `return` lebih dulu karena kode setelahnya tidak akan dieksekusi."
            }
          ],
          "solution": "export default async function UserPage({ params }) {\n  const { id } = await params;\n  return <h1>User: {id}</h1>;\n}",
          susunKode: {
            question:
              "Susun komponen halaman dinamis yang menunggu Promise params lalu menampilkan parameter id.",
            potongan: [
              "export default async function UserPage({ params }) {",
              "  const { id } = await params;",
              "  return <h1>User: {id}</h1>;",
              "}",
            ],
            pengecoh: [
              "  const { id } = params;",
              "  const { userId } = await params;",
            ],
            pemisah: "\n",
            explanation:
              "Pada App Router versi terbaru, properti params berupa Promise yang wajib di-await sebelum propertinya diakses. Keping const { id } = params; sering keliru dipakai pengembang yang terbiasa dengan Next.js lama, yang berakibat nilai [object Promise] muncul di antarmuka. Keping const { userId } = await params; menggoda karena tampak lebih deskriptif, tetapi nama variabel harus sesuai persis dengan nama segmen folder [id].",
          },
        },
        {
          "kind": "step",
          "id": "next-1-4",
          "title": "Nested Layout & Template",
          "explanation": "Next.js mendukung penataan layout bersarang (Nested Layout) di mana sebuah sub-folder dapat memiliki `layout.tsx` sendiri yang membungkus sub-halaman di dalamnya tanpa menggantikan layout root. Ketika pengguna berpindah antar rute di dalam layout yang sama, komponen `layout.tsx` tidak akan di-remount sehingga state lokal (seperti input form atau posisi scroll sidebar) akan tetap terjaga. Sebaliknya, jika kamu menginginkan komponen wrapper yang selalu membuat ulang instansinya setiap kali terjadi navigasi rute (misalnya untuk memicu ulang animasi transisi), kamu dapat menggunakan berkas konvensi `template.tsx`. Gunakan `layout.tsx` untuk elemen navigasi persisten dan gunakan `template.tsx` khusus saat membutuhkan reset state atau animasi per rute.",
          "example": {
            "code": "export default function DashboardLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <section>\n      <nav>Statistik | Pesanan</nav>\n      {children}\n    </section>\n  );\n}",
            "output": "Pindah dari /dashboard/statistik ke /dashboard/pesanan:\n\n<section>\n  <nav>Statistik | Pesanan</nav>   <-- TIDAK dirender ulang, posisi scroll-nya tetap\n  <StatistikPage />  ->  <PesananPage />   <-- hanya bagian ini berganti\n</section>",
            "note": "Layout yang lupa merender `{children}` membuat SEMUA sub-halaman tampak kosong padahal berkasnya benar — ini penyebab \"halamanku hilang\" yang paling sering. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Di panel ini `children` kosong, jadi yang terlihat hanya pembungkusnya."
          },
          "instruction": "Folder `app/dashboard/` butuh kerangka yang bertahan saat pengguna berpindah antar sub-halaman. Buat komponen layout di `app/dashboard/layout.tsx`: satu default export bernama `Layout`, menerima prop `children` (tipe `React.ReactNode`), dan membungkusnya di dalam satu elemen pembungkus.",
          "starterCode": "// Tulis komponen Layout di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "export\\s+default\\s+function\\s+Layout",
              "message": "Next.js membaca DEFAULT export dari `layout.tsx`. Named export tidak dipakai, dan akibatnya sub-halamanmu dirender tanpa kerangka apa pun. Nama fungsinya sendiri bebas, tapi di sini pakai `Layout` supaya tesnya bisa memeriksa."
            },
            {
              "pattern": "\\{\\s*children\\s*\\}\\s*(:|\\))",
              "message": "Terima `children` sebagai prop. Anotasi tipenya bebas — `{ children: React.ReactNode }`, `Readonly<{ children: React.ReactNode }>`, atau alias `Props` sama-sama benar."
            },
            {
              "pattern": "<(div|section|main|aside)[^>]*>[\\s\\S]*\\{\\s*children\\s*\\}[\\s\\S]*</(div|section|main|aside)>",
              "message": "Pembungkusnya harus benar-benar merender `{children}` di dalamnya. Kalau `children` tidak ikut dirender, halaman anak tidak akan pernah muncul — dan tidak ada error yang memberitahumu."
            }
          ],
          "solution": "export default function Layout({ children }: { children: React.ReactNode }) {\n  return <div>{children}</div>;\n}",
          susunKode: {
            question:
              "Susun komponen layout root sederhana yang merender prop children di dalam pembungkus div.",
            potongan: [
              "export default function Layout({ children }: { children: React.ReactNode }) {",
              "  return <div>{children}</div>;",
              "}",
            ],
            pengecoh: [
              "export function Layout({ children }: { children: React.ReactNode }) {",
              "  return <div>children</div>;",
            ],
            pemisah: "\n",
            explanation:
              "Layout Next.js harus diekspor secara default dan merender ekspresi {children} di dalam antarmukanya. Keping export function Layout sering keliru karena tidak menyertakan default export. Keping return <div>children</div>; menggoda tetapi merupakan jebakan sintaks JSX, karena tanpa kurung kurawal teks literal 'children' yang tampil di layar dan bukannya komponen anak.",
          },
        },
        {
          "kind": "step",
          "id": "next-1-5",
          "title": "loading.tsx (dan Dua Saudaranya: error.tsx, not-found.tsx)",
          "explanation": "Next.js menyediakan berkas konvensi khusus untuk menangani status loading, error handling, dan tampilan 404 secara deklaratif di setiap segmen rute. Berkas `loading.tsx` otomatis dibungkus menggunakan `React Suspense` untuk menampilkan indikator pemuatan sementara komponen async mengunduh data di server. Berkas `error.tsx` bertindak sebagai Error Boundary client-side untuk menangkap kegagalan tak terduga tanpa merusak seluruh antarmuka aplikasi. Sementara berkas `not-found.tsx` menampilkan halaman khusus saat pemicu `notFound()` dipanggil atau URL tidak cocok. Gunakan berkas konvensi ini untuk meningkatkan kenyamanan pengalaman pengguna (UX) saat aplikasi berinteraksi dengan koneksi jaringan yang lambat atau terjadi kendala sistem.",
          "example": {
            "code": "// app/dashboard/loading.tsx\nexport default function DashboardLoading() {\n  return <div className=\"skeleton\">Menyiapkan data...</div>;\n}",
            "output": "Urutan yang dilihat pengguna saat membuka /dashboard:\n\ndetik 0.0  <div class=\"skeleton\">Menyiapkan data...</div>\ndetik 1.4  <h1>Ringkasan Penjualan</h1>   <-- data selesai, fallback diganti otomatis",
            "note": "Kamu tidak pernah memanggil berkas ini. Next.js yang memasangnya sebagai fallback Suspense, semata karena namanya `loading.tsx`. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Halaman daftar produk mengambil data di server dan pengguna melihat layar kosong selama menunggu. Buat berkas dengan nama khusus yang otomatis dipakai Next.js sebagai penampil sementara, isinya satu default export bernama `Loading` yang menampilkan teks `Loading...` di dalam elemen `p`.",
          "starterCode": "// Tulis komponen Loading di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "export\\s+default\\s+(function\\s+Loading|Loading\\b)|const\\s+Loading\\s*=[\\s\\S]*export\\s+default\\s+Loading",
              "message": "Yang membuat berkas ini bekerja adalah namanya (`loading.tsx`) plus DEFAULT export-nya. Bentuk penulisannya bebas: `function Loading()` atau `const Loading = () => ...` lalu `export default Loading`."
            },
            {
              "pattern": "<p[^>]*>\\s*Loading\\.\\.\\.\\s*</p>",
              "message": "Isi fallback-nya harus elemen `p` bertuliskan `Loading...`. Boleh dibungkus tanda kurung setelah `return`, boleh juga langsung — keduanya diterima."
            }
          ],
          "solution": "export default function Loading() {\n  return <p>Loading...</p>;\n}",
          susunKode: {
            question:
              "Rangkai komponen status muat loading.tsx yang menampilkan paragraf Loading...",
            potongan: [
              "export default function Loading() {",
              "  return <p>Loading...</p>;",
              "}",
            ],
            pengecoh: [
              "export function Loading() {",
              "  return <span>Loading...</span>;",
            ],
            pemisah: "\n",
            explanation:
              "Berkas loading.tsx menggunakan batas Suspense otomatis yang membutuhkan default export. Keping export function Loading() { sering keliru karena lupa penanda default export. Keping return <span>Loading...</span>; menggoda tetapi menyalahi tipe elemen HTML paragraf <p> yang dipersyaratkan oleh pengujian.",
          },
        },
        {
          "kind": "step",
          "id": "next-1-6",
          "title": "Link & Navigasi Client-Side di Next.js",
          "explanation": "Untuk melakukan perpindahan halaman tanpa memicu muat ulang browser secara penuh (Full Page Reload), Next.js menyediakan komponen `<Link>` dari modul `next/link`. Komponen ini memperluas tag HTML `<a>` standar dengan menambahkan fitur prefetching otomatis: ketika tautan masuk ke dalam area pandang (viewport) pengguna, Next.js akan mengunduh kode halaman tujuan di latar belakang secara tenang. Hasilnya, ketika pengguna mengklik tautan tersebut, halaman akan berpindah secara instan layaknya aplikasi Single Page Application (SPA) yang sangat responsif. Gunakan selalu komponen `<Link>` untuk seluruh navigasi internal aplikasi kamu. Hindari penggunaan tag `<a>` biasa untuk navigasi internal karena akan membuang state aplikasi dan merusak performa prefetching.",
          "example": {
            "code": "import Link from \"next/link\";\n\n// prefetch dimatikan untuk tautan yang jarang diklik\n<Link href=\"/kebijakan-privasi\" prefetch={false}>Kebijakan Privasi</Link>",
            "output": "Klik tautan biasa <a href=\"/about\">:\n  tab browser berkedip, seluruh dokumen diunduh ulang, state aplikasi hilang\n\nKlik <Link href=\"/about\">:\n  URL berubah tanpa kedip; tab Network hanya menambah satu permintaan kecil\n  about?_rsc=1a2b3   200   4.2 kB",
            "note": "`<Link>` tetap menghasilkan tag `<a>` di HTML akhir, jadi klik kanan → buka di tab baru tetap bekerja. Yang ditambahkan adalah prefetch dan navigasi tanpa muat ulang. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Di dalam `<nav>` di bawah, tambahkan satu tautan menuju rute `/about` dengan teks `Tentang Kami`. Pakai cara navigasi internal Next.js — bukan tag HTML biasa, supaya halaman tidak dimuat ulang dari nol.",
          "starterCode": "import Link from \"next/link\";\n\nexport default function Navigation() {\n  return (\n    <nav>\n      {/* Tambahkan link ke /about di sini */}\n      \n    </nav>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "<Link[^>]*href=['\"]/about['\"]",
              "message": "Tujuan tautan ditulis di prop `href`, sama seperti `<a>`. Urutan prop bebas: `<Link className=\"...\" href=\"/about\">` sama benarnya."
            },
            {
              "pattern": ">\\s*Tentang Kami\\s*</Link>",
              "message": "Teks yang dilihat pengguna diletakkan di antara tag buka dan tag tutup `</Link>`, bukan di dalam prop."
            },
            {
              "pattern": "<a\\s[^>]*href=['\"]/",
              "mustNotMatch": true,
              "message": "Untuk navigasi INTERNAL, `<a href=\"/...\">` memicu muat ulang penuh: seluruh JavaScript diunduh lagi dan state aplikasi (isi keranjang, form yang setengah terisi) hilang. Simpan `<a>` untuk tautan ke situs luar."
            }
          ],
          "solution": "import Link from \"next/link\";\n\nexport default function Navigation() {\n  return (\n    <nav>\n      <Link href=\"/about\">Tentang Kami</Link>\n    </nav>\n  );\n}",
          susunKode: {
            question:
              "Rangkai komponen navigasi yang mengimpor Link dari next/link untuk menuju rute /about.",
            potongan: [
              "import Link from \"next/link\";",
              "export default function Navigation() {",
              "  return (",
              "    <nav>",
              "      <Link href=\"/about\">Tentang Kami</Link>",
              "    </nav>",
              "  );",
              "}",
            ],
            pengecoh: [
              "      <a href=\"/about\">Tentang Kami</a>",
              "      <Link to=\"/about\">Tentang Kami</Link>",
            ],
            pemisah: "\n",
            explanation:
              "Modul next/link diekspor sebagai default export untuk mendukung navigasi client-side yang efisien. Keping <a href=\"/about\"> sangat menggoda bagi pengguna HTML biasa, tetapi dilarang untuk rute internal Next.js karena memicu muat ulang halaman penuh dan menghilangkan state aplikasi. Keping <Link to=\"/about\"> sering keliru dipakai oleh developer React Router yang terbiasa dengan prop to.",
          },
        },
        {
          "kind": "step",
          "id": "next-1-7",
          "title": "Route Group (folder) & Private Folder _folder",
          "explanation": "Route Group dibentuk dengan menamai folder menggunakan tanda kurung biasa seperti `(auth)` atau `(marketing)`. Fitur ini memungkinkan kamu mengelompokkan berkas-berkas rute yang saling berhubungan untuk kerapian arsitektur tanpa menambahkan kata tersebut ke dalam segmen URL akhir pengguna. Selain itu, Route Group memungkinkan kamu menerapkan `layout.tsx` yang berbeda untuk kelompok rute tertentu (misalnya layout khusus autentikasi tanpa navbar). Jika kamu ingin membuat folder internal yang benar-benar diabaikan oleh routing engine (misalnya tempat menyimpan komponen UI atau helper), gunakan awalan garis bawah seperti `_components`. Gunakan Route Group saat aplikasi kamu memiliki struktur organisasi tim yang besar atau membutuhkan tampilan layout yang berbeda-beda.",
          "example": {
            "code": "app/(shop)/shoes/page.tsx\napp/(shop)/shirts/page.tsx\napp/(shop)/layout.tsx      <-- layout khusus kelompok (shop)\napp/_komponen/Harga.tsx    <-- diabaikan router, bukan URL",
            "output": "URL yang benar-benar terbentuk:\n\n/shoes     -> app/(shop)/shoes/page.tsx\n/shirts    -> app/(shop)/shirts/page.tsx\n/_komponen -> 404 (folder berawalan _ tidak menghasilkan route)\n/shop      -> 404 (nama dalam tanda kurung tidak masuk URL)",
            "note": "Dua tanda yang mirip, akibatnya berbeda jauh: `(nama)` mengelompokkan tanpa mengubah URL, `[nama]` justru membuat segmen URL dinamis. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Di dalam folder grup `(auth)`, kamu ingin semua halaman autentikasi tidak menampilkan navbar utama. Buatlah komponen fungsi `AuthLayout` yang membungkus properti `children` dengan tag `<main>`. Pastikan fungsi diekspor secara default.",
          "starterCode": "// Buat komponen AuthLayout di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+default\\s+function\\s+AuthLayout",
              "message": "Berkas `layout.tsx` dibaca lewat DEFAULT export-nya. Di sini namai fungsinya `AuthLayout` supaya jelas layout ini hanya untuk kelompok `(auth)`."
            },
            {
              "pattern": "<main[^>]*>\\s*\\{\\s*children\\s*\\}\\s*</main>",
              "message": "Bungkus `{children}` dengan `<main>`. Tanpa `{children}` di dalamnya, halaman login dan register di kelompok ini akan tampil kosong."
            }
          ],
          "solution": "export default function AuthLayout({ children }) {\n  return <main>{children}</main>;\n}",
          susunKode: {
            question:
              "Rangkai komponen AuthLayout untuk route group yang merender elemen main.",
            potongan: [
              "export default function AuthLayout({ children }) {",
              "  return <main>{children}</main>;",
              "}",
            ],
            pengecoh: [
              "export function AuthLayout({ children }) {",
              "  return <div>{children}</div>;",
            ],
            pemisah: "\n",
            explanation:
              "Layout pada kelompok rute tetap harus berupa default export yang merender elemen semantik yang diminta. Keping export function AuthLayout sering keliru karena lupa kata kunci default. Keping return <div>{children}</div>; menggoda tetapi salah elemen semantik, karena pengujian mewajibkan penggunaan tag <main>.",
          },
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
              "explanation": "Next.js sendiri yang memasang `loading.tsx` sebagai fallback `<Suspense>` untuk segmen rute itu — kamu tidak pernah memanggilnya. Pilihan \"menguji kecepatan jaringan\" menggoda karena namanya terdengar seperti alat ukur, dan \"menghapus cache\" terdengar teknis, padahal keduanya bukan urusan berkas ini."
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
              "explanation": "Kurung siku `[slug]` pada nama FOLDER yang membuat segmennya dinamis. `:slug` menggoda karena itu gaya Express dan React Router, sedangkan `{slug}` gaya template engine lain — keduanya tidak dikenali router Next.js dan hanya akan menghasilkan URL literal bertanda titik dua atau kurawal."
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
              "explanation": "Tanda kurung biasa `(marketing)` hanya mengelompokkan berkas dan memungkinkan layout terpisah, tanpa menambah segmen URL. Pilihan \"dilindungi autentikasi\" menggoda karena kelompok sering dipakai untuk area login, tapi proteksinya datang dari kodemu, bukan dari tanda kurungnya."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Sebuah sidebar di `/dashboard` punya kotak pencarian. Saat pengguna berpindah dari `/dashboard/statistik` ke `/dashboard/pesanan`, teks yang sudah diketik di kotak itu ikut terhapus. Berkas apa yang paling mungkin dipakai untuk membungkus sub-halaman tersebut?",
              "choices": [
                "A. `layout.tsx`, karena layout selalu di-remount setiap navigasi",
                "B. `template.tsx`, karena template membuat ulang instansinya setiap navigasi",
                "C. `page.tsx`, karena page menyimpan state global",
                "D. `loading.tsx`, karena fallback loading mengosongkan input"
              ],
              "answerIndex": 1,
              "explanation": "`template.tsx` sengaja me-remount isinya setiap navigasi, sehingga state di dalamnya (teks pencarian, posisi scroll) direset — itu gejala yang dijelaskan di soal. `layout.tsx` justru sebaliknya: ia dipertahankan, jadi state-nya bertahan. Pilihan `layout.tsx` menggoda karena keduanya sama-sama membungkus `children`; bedanya hanya pada remount."
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
              "explanation": "Folder `app` dengan App Router adalah standar yang direkomendasikan untuk proyek baru. Folder `pages` menggoda karena masih didukung dan masih banyak tutorialnya, tetapi itu generasi sebelumnya dan tidak mendukung layout bersarang maupun Server Components."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Di dalam aplikasi Next.js, apa akibat paling nyata dari memakai `<a href=\"/about\">` alih-alih `<Link href=\"/about\">` untuk navigasi internal?",
              "choices": [
                "A. Tautannya tidak bisa diklik sama sekali",
                "B. Browser memuat ulang seluruh dokumen, sehingga state aplikasi hilang dan perpindahan terasa lambat",
                "C. URL-nya berubah menjadi /about.html",
                "D. Halaman tujuan otomatis menjadi Client Component"
              ],
              "answerIndex": 1,
              "explanation": "`<a>` menyerahkan navigasi ke browser: seluruh dokumen dan bundle JavaScript diunduh ulang, sehingga isi keranjang atau form yang setengah terisi hilang. Pilihan \"tidak bisa diklik\" menggoda bagi yang mengira `<a>` dilarang — sebenarnya ia tetap bekerja, hanya kehilangan prefetch dan navigasi client-side. Untuk tautan ke domain lain, `<a>` justru pilihan yang benar."
            },
            {
              "id": "q7",
              "type": "pilihan-ganda",
              "question": "Kamu membuat `app/produk/index.tsx` berisi komponen halaman daftar produk, tetapi membuka `/produk` tetap menghasilkan 404. Apa penyebabnya?",
              "choices": [
                "A. Nama berkas halaman di App Router harus `page.tsx`; `index.tsx` tidak dianggap route",
                "B. Folder `produk` perlu diawali tanda kurung siku",
                "C. Berkas halaman harus memakai ekstensi `.jsx`, bukan `.tsx`",
                "D. Halaman daftar harus diletakkan di folder `public`"
              ],
              "answerIndex": 0,
              "explanation": "Di App Router, satu-satunya nama berkas yang menghasilkan URL publik adalah `page.tsx` (atau `page.js`). `index.tsx` menggoda karena itu konvensi Pages Router dan konvensi umum web, tapi di folder `app` berkas itu hanya dianggap berkas biasa — dan tidak ada pesan error yang menjelaskannya, hanya 404. Berkas berawalan garis bawah seperti `_komponen` juga sengaja diabaikan router."
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
          "body": "# Model Mental Server vs Client Components\n\nDi aplikasi React tradisional, seluruh komponen dijalankan di browser (Client). Ini berarti setiap pustaka atau komponen yang kamu gunakan akan dikemas ke dalam JavaScript bundle dan dikirimkan melalui jaringan ke pengguna.\n\nNext.js App Router memperkenalkan paradigma baru bernama **React Server Components (RSC)**. Di Next.js, seluruh komponen di dalam direktori `app/` secara default adalah **Server Component**!\n\n## Perbandingan Server vs Client Components\n\n| Fitur / Kemampuan | Server Component (Default) | Client Component (`'use client'`) |\n|---|---|---|\n| **Lokasi Eksekusi** | Hanya di Server saat build/request | Di Server (pre-render) & di Browser (hydration) |\n| **Ukuran Bundle JS** | **0 KB** (Hasil render berupa HTML/RSC Payload) | Terhitung masuk ke dalam JS bundle client |\n| **Akses Resource** | Database, File System (`fs`), Secret Keys | LocalStorage, Geolocation, Browser DOM API |\n| **React State & Hooks** | ❌ Tidak Bisa (`useState`, `useEffect`) | ✅ Bisa (`useState`, `useEffect`, `useContext`) |\n| **Event Listener** | ❌ Tidak Bisa (`onClick`, `onChange`) | ✅ Bisa (`onClick`, `onChange`, `onSubmit`) |\n| **Kecepatan Data Fetching** | Sangat Cepat (Dekat dengan Database/API) | Bergantung pada Latensi Jaringan Client |\n\n## Direktif 'use client' & Boundary Architecture\n\nKetika kamu membutuhkan interaktivitas (seperti tombol pencarian, modal pop-up, atau form input), kamu harus menambahkan direktif `'use client';` di **baris paling atas berkas, sebelum import apa pun**.\n\n```text\n┌────────────────────────────────────────────────────────┐\n│ Server Component (RootLayout / Page)                   │\n│  ├── Mengambil data dari Database                      │\n│  ├── Mengamankan API Key rahasia                       │\n│  └── Client Component Boundary ('use client')           │\n│       └── TombolSuka (State, onClick, Event Listener)   │\n└────────────────────────────────────────────────────────┘\n```\n\n### Aturan Keras Boundary (Batas Komponen):\n1. **Server Component dapat meng-import Client Component**.\n2. **Client Component TIDAK BISA meng-import Server Component secara langsung**! Jika Client Component meng-import berkas Server Component, berkas server tersebut akan ikut terkonversi menjadi Client Component.\n3. **Solusi (Pola Children)**: Jika kamu ingin menempatkan Server Component di dalam Client Component, oper Server Component tersebut sebagai prop `children`!\n\n```tsx\n// ✅ POLA YANG BENAR\n// ClientModal.tsx ('use client')\nexport default function ClientModal({ children }: { children: React.ReactNode }) {\n  const [open, setOpen] = useState(false);\n  return <div>{open && children}</div>;\n}\n\n// Page.tsx (Server Component)\nimport ClientModal from './ClientModal';\nimport ServerDataList from './ServerDataList'; // Tetap Server Component!\n\nexport default function Page() {\n  return (\n    <ClientModal>\n      <ServerDataList />\n    </ClientModal>\n  );\n}\n```\n\n## Mengoper Props Menembus Boundary\n\nProps yang dikirim dari Server Component ke Client Component wajib bersifat **serializable** (dapat diubah menjadi string JSON). String, number, boolean, array, plain object, `Date`, `Map`, dan `Set` diperbolehkan — format RSC React mampu memindahkan semuanya. Yang **tidak dapat dikirimkan** langsung via props hanya: fungsi, instance kelas kustom, dan `Symbol`. Jangan menghafalnya sebagai *harus JSON murni*: `Date` sering dikira terlarang padahal aman, sedangkan fungsi sering dikira aman padahal itu justru yang ditolak.\n\n## Mengamankan Server Code dengan `server-only`\n\nAgar kode backend sensitif (seperti query database atau API token) tidak pernah tidak sengaja terimport ke Client Component, pasang package official `server-only`:\n\n```typescript\nimport 'server-only';\n// Kode di bawah ini dijamin tidak akan pernah bocor ke bundle browser\n```\n\n## Analogi Dunia Nyata\n\nBayangkan restoran bintang lima. Server Component adalah **Dapur Utama**. Di sana terdapat kompor gas besar, pisau tajam, dan resep rahasia koki (`database/secrets`). Pelanggan tidak boleh masuk ke dapur. Client Component adalah **Meja Makan Pelanggan**. Di sana ada tombol pemanggil pelayan dan garam/merica (`interaktivitas/state`). Makanan dimasak di dapur (Server), lalu disajikan dalam bentuk piring matang (HTML) ke meja pelanggan.\n\n## Jebakan & Kesalahan Umum\n\n1. **Menaruh `'use client'` di Root Layout**: Menaruh `'use client'` di `app/layout.tsx` mematikan seluruh manfaat React Server Components di aplikasi kamu!\n2. **Error Hydration Mismatch**: Menampilkan data yang berbeda di Server dan Client (misalnya `new Date()` atau `Math.random()`) menyebabkan React merah di konsol browser.\n3. **Mengoper Fungsi via Props**: Mencoba mengoper fungsi handler server ke Client Component tanpa menggunakan Server Actions.\n\n## Kaitan ke Dunia Kerja\n\nPemahaman mendalam tentang boundary Server vs Client adalah pertanyaan paling krusial dalam wawancara kerja Next.js senior saat ini. Perusahaan mengadopsi Next.js untuk menekan biaya bandwidth CDN dan mempercepat nilai LCP (Largest Contentful Paint) aplikasi mereka."
        },
        {
          "kind": "step",
          "id": "next-2-1",
          "title": "Server Component secara Default",
          "explanation": "Di Next.js App Router, setiap komponen di dalam folder `app/` secara default dikompilasi sebagai **Server Component**. Komponen ini dieksekusi sepenuhnya di server dan mengembalikan hasil berupa HTML serta payload struktur komponen ke browser tanpa mengirimkan berkas kode JavaScript pendukungnya. Hal ini membuat ukuran JavaScript bundle yang diunduh oleh browser menjadi sangat ringan (0 KB JavaScript tambahan untuk komponen tersebut). Karena berjalan di server, komponen ini dapat membaca database atau berkas sistem lokal secara langsung dengan aman. Gunakan Server Component sebagai pilihan utama kamu untuk mengambil data, membaca kredensial rahasia, atau menampilkan konten statis. Jebakan umum pemula adalah mencoba memasang hook interaktif seperti `useState` atau event handler `onClick` di Server Component, yang akan menyebabkan error kompilasi.",
          "example": {
            "code": "// app/produk/page.tsx — Server Component (tanpa 'use client')\nimport { readFile } from 'node:fs/promises';\n\nexport default async function ProdukPage() {\n  const isi = await readFile('data/produk.json', 'utf8');\n  console.log('jumlah produk:', JSON.parse(isi).length);\n  return <h1>Katalog</h1>;\n}",
            "output": "Di TERMINAL tempat `npm run dev` berjalan:\n\njumlah produk: 12\n GET / 200 in 38ms\n\nDi Console DevTools browser:\n(kosong)",
            "note": "Ini kejutan pertama bagi hampir semua pemula: `console.log` di Server Component muncul di terminal, bukan di Console browser. Kalau log-mu \"hilang\", lihat terminalnya. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Kamu ingin membuktikan bahwa berkas ini benar-benar dijalankan di server, bukan di browser. Caranya: pakai satu modul bawaan Node.js yang mustahil tersedia di browser — modul pembaca berkas — dan impor secara default di baris paling atas.",
          "starterCode": "// Tulis import di bawah ini\n\nexport default function Page() {\n  return <h1>Server Component</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+fs\\s+from\\s*['\"](node:)?fs['\"]",
              "message": "Impor modul file system Node secara DEFAULT (tanpa kurawal), boleh dengan awalan `node:`. Kalau berkas ini diberi `'use client'`, impor yang sama langsung gagal di build — itulah buktinya komponen ini hidup di server."
            }
          ],
          "solution": "import fs from 'fs';\n\nexport default function Page() {\n  return <h1>Server Component</h1>;\n}",
          susunKode: {
            question:
              "Rangkai impor modul file system Node secara default pada komponen Server Page.",
            potongan: [
              "import fs from 'fs';",
              "export default function Page() {",
              "  return <h1>Server Component</h1>;",
              "}",
            ],
            pengecoh: [
              "import { fs } from 'fs';",
              "import fs from 'file-system';",
            ],
            pemisah: "\n",
            explanation:
              "Impor modul bawaan fs dilakukan secara default dari paket node fs. Keping import { fs } keliru karena modul fs tidak menggunakan named export untuk instans dasarnya. Keping import fs from 'file-system' menggoda bagi pemula, padahal nama modul standar Node.js adalah 'fs' atau 'node:fs'.",
          },
        },
        {
          "kind": "step",
          "id": "next-2-2",
          "title": "'use client' Directive",
          "explanation": "Secara default, Next.js memproses seluruh komponen di server untuk menghemat ukuran berkas JavaScript yang dikirim ke browser. Namun, server tidak dapat merespons interaksi langsung dari pengguna di browser seperti klik tombol, gerakan kursor, atau perubahan state lokal. Jika kamu ingin membangun komponen yang interaktif menggunakan hook React seperti `useState`, `useEffect`, atau event handler `onClick`, kamu wajib menambahkan direktif `'use client';` pada baris pertama berkas. Direktif ini memberitahu kompilator Next.js bahwa berkas tersebut beserta seluruh sub-komponen yang di-import di dalamnya harus disertakan ke dalam bundle JavaScript client. Gunakan direktif ini secara spesifik hanya pada komponen daun (leaf component) yang benar-benar membutuhkan interaksi UI agar manfaat performa server tetap maksimal.",
          "example": {
            "code": "// ❌ app/tombol-tema.tsx tanpa direktif\nimport { useState } from 'react';\n\nexport default function TombolTema() {\n  const [gelap, setGelap] = useState(false);\n  return <button onClick={() => setGelap(!gelap)}>Ganti Tema</button>;\n}",
            "output": "$ npm run dev\n\n ⨯ ./app/tombol-tema.tsx\nError:   x You're importing a component that needs `useState`. This React\n        | hook only works in a Client Component. To fix, mark the file (or\n        | its parent) with the \"use client\" directive.\n\nHalaman menampilkan overlay error merah, bukan tombol.",
            "note": "Hafalkan bentuk pesannya: kalimat \"only works in a Client Component\" adalah petunjuk paling langsung bahwa yang kurang cuma satu baris direktif. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Komponen di bawah memakai `useState` dan `onClick`, dua hal yang hanya hidup di browser. Saat ini `npm run dev` menolaknya. Tambahkan satu baris di posisi yang tepat agar Next.js memasukkan berkas ini ke bundel browser.",
          "starterCode": "import { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "^(\\s*(//[^\\n]*|/\\*[\\s\\S]*?\\*/)\\s*)*['\"]use client['\"]",
              "flags": "i",
              "message": "Direktifnya harus berada di ATAS berkas — sebelum semua `import` (komentar pembuka masih boleh mendahuluinya). Ditaruh di dalam fungsi atau setelah import, direktif itu diabaikan tanpa pesan apa pun, dan error `useState` tadi tetap muncul."
            }
          ],
          "solution": "'use client';\nimport { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
          susunKode: {
            question:
              "Susun Client Component dengan arahan 'use client' yang menggunakan hook useState.",
            potongan: [
              "'use client';",
              "import { useState } from 'react';",
              "export default function Counter() {",
              "  const [count, setCount] = useState(0);",
              "  return <button onClick={() => setCount(count + 1)}>{count}</button>;",
              "}",
            ],
            pengecoh: [
              "'use server';",
              "'use strict';",
            ],
            pemisah: "\n",
            explanation:
              "Arahan 'use client' di baris paling awal memberi tahu pembangun Next.js bahwa komponen ini menggunakan fitur interaktif browser seperti useState. Keping 'use server' sangat sering keliru dipakai oleh pemula yang tertukar antara Client Directive dan Server Action. Keping 'use strict' keliru karena itu adalah arahan standar JavaScript untuk mode ketat, bukan arahan komponen Next.js.",
          },
        },
        {
          "kind": "step",
          "id": "next-2-3",
          "title": "Server & Client Boundaries",
          "explanation": "Next.js menerapkan batasan (boundary) ketat antara kode server dan kode client. Server Components dapat dengan bebas meng-import dan merender Client Components di dalam pohon tampilan aplikasi. Namun, aturan sebaliknya tidak berlaku: kamu tidak dapat meng-import Server Component secara langsung di dalam berkas Client Component. Jika kamu meng-import Server Component di dalam berkas berdirektif `'use client'`, kompilator akan secara otomatis mengubah Server Component tersebut menjadi Client Component dan membuang kemampuan server-nya. Jika kamu harus menampilkan Server Component di dalam layout Client Component, gunakan pola komposisi dengan mengoper Server Component tersebut melalui prop `children`.",
          "example": {
            "code": "// ❌ berkas berdirektif 'use client' mengimpor modul server\n'use client';\nimport { ambilProduk } from '@/lib/db';   // query Prisma\n\nexport default function Daftar() {\n  return <button onClick={() => ambilProduk()}>Muat</button>;\n}",
            "output": "$ npm run dev\n\n ⨯ ./lib/db.ts\nError: PrismaClient is unable to run in this browser environment.\n\nSetelah pola children dipakai, error hilang dan terminal kembali:\n GET / 200 in 41ms",
            "note": "Arah impornya yang menentukan: server boleh mengimpor client, client tidak boleh mengimpor server. Kalau terpaksa, oper komponen server itu lewat prop `children`. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Halaman ini adalah Server Component dan butuh menampilkan komponen carousel yang interaktif (berdirektif `'use client'`, tersimpan di berkas `./carousel`). Impor komponen itu, lalu render di dalam `<main>` yang sudah ada.",
          "starterCode": "export default function HomePage() {\n  return (\n    <main>\n      {/* Render Carousel di sini */}\n    </main>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+Carousel\\s+from\\s*['\"]\\./carousel['\"]",
              "message": "Impor default dari berkas `./carousel`. Arah ini aman: Server Component memang boleh mengimpor Client Component — yang dilarang justru kebalikannya."
            },
            {
              "pattern": "<main[^>]*>[\\s\\S]*<Carousel\\s*(/>|>\\s*</Carousel>)[\\s\\S]*</main>",
              "message": "Render komponennya DI DALAM `<main>`. Bentuk `<Carousel />` maupun `<Carousel></Carousel>` sama-sama diterima; yang diperiksa posisinya."
            }
          ],
          "solution": "import Carousel from './carousel';\n\nexport default function HomePage() {\n  return (\n    <main>\n      <Carousel />\n    </main>\n  );\n}",
          susunKode: {
            question:
              "Susun komponen HomePage yang mengimpor Carousel dan merendernya di dalam elemen main.",
            potongan: [
              "import Carousel from './carousel';",
              "export default function HomePage() {",
              "  return (",
              "    <main>",
              "      <Carousel />",
              "    </main>",
              "  );",
              "}",
            ],
            pengecoh: [
              "import { Carousel } from './carousel';",
              "    <section>",
            ],
            pemisah: "\n",
            explanation:
              "Komponen Carousel diimpor secara default dari modul lokal dan dibungkus di dalam tag semantik main. Keping import { Carousel } keliru karena modul komponen tersebut diekspor secara default. Keping tag section menggoda tetapi menyalahi struktur elemen main yang diminta.",
          },
        },
        {
          "kind": "step",
          "id": "next-2-4",
          "title": "Mengoper Data & Children Menembus Boundary",
          "explanation": "Saat Server Component mengirimkan data ke Client Component melalui atribut props, data tersebut harus dapat di-serialize (dikonversi menjadi format string JSON). Tipe data dasar seperti string, number, boolean, array, dan plain JavaScript object aman untuk dikirimkan menembus boundary server-client. Namun, tipe data non-serializable seperti fungsi JavaScript, instance kelas kustom, atau simbol tidak dapat dikirimkan langsung melalui props biasa. Gunakan prinsip ini saat merancang struktur data DTO (Data Transfer Object) dari server ke komponen antarmuka client. Jika kamu tak sengaja mengirimkan fungsi via props biasa dari server, Next.js akan melempar error serialisasi saat proses rendering.",
          "example": {
            "code": "// Server Component mengoper props ke Client Component\nconst produk = {\n  nama: 'Kopi Gayo',\n  harga: 85000,\n  dibuatPada: new Date('2026-07-01'),   // Date: masih boleh\n  hitungDiskon: (n) => n * 0.9,          // fungsi: TIDAK boleh\n};\n\n<KartuProduk data={produk} />",
            "output": "$ npm run dev\n\nError: Functions cannot be passed directly to Client Components unless you\nexplicitly expose it by marking it with \"use server\". Or maybe you meant\nto call this function rather than return it.\n  <... data={{nama: ..., harga: ..., hitungDiskon: function}}>\n                                                   ^^^^^^^^",
            "note": "Baca bagian bawah pesannya: Next.js menunjuk properti yang bermasalah dengan tanda `^^^^`. Kalau logikanya memang harus jalan di server, jawabannya Server Action (modul 5), bukan mengoper fungsinya. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Objek `userData` di bawah dikirim sebagai props ke sebuah Client Component, dan `npm run dev` menolaknya. Buang satu properti yang menjadi penyebabnya, pertahankan sisanya apa adanya.",
          "starterCode": "const userData = {\n  name: 'Budi',\n  age: 25,\n  sayHello: () => console.log('Halo'),\n};\n\nexport default function ServerPage() {\n  return <Profile data={userData} />;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "sayHello",
              "mustNotMatch": true,
              "message": "Satu properti di objek itu bukan data, melainkan perilaku — dan perilaku tidak bisa diubah menjadi teks JSON untuk dikirim ke browser. Hapus properti itu beserta isinya."
            },
            {
              "pattern": "name\\s*:\\s*['\"]Budi['\"]",
              "message": "Jangan ikut menghapus datanya. String, number, boolean, array, dan plain object aman menembus boundary — hanya fungsi (dan class instance) yang tidak."
            }
          ],
          "solution": "const userData = {\n  name: 'Budi',\n  age: 25,\n};\n\nexport default function ServerPage() {\n  return <Profile data={userData} />;\n}",
          susunKode: {
            question:
              "Perbaiki objek userData agar aman dikirimkan melalui props ke Client Component tanpa memicu error serialisasi.",
            potongan: [
              "const userData = {",
              "  name: 'Budi',",
              "  age: 25,",
              "};",
              "export default function ServerPage() {",
              "  return <Profile data={userData} />;",
              "}",
            ],
            pengecoh: [
              "  sayHello: () => 'Halo',",
              "  nama: 'Budi',",
            ],
            pemisah: "\n",
            explanation:
              "Properti berupa fungsi seperti sayHello tidak dapat diserialisasi ke JSON oleh React ketika dikirim dari Server Component ke Client Component. Keping sayHello menggoda karena tampak seperti fungsi helper biasa, namun kehadirannya akan memicu error serialisasi pada Server Component boundary. Keping nama: 'Budi' keliru karena instruksi meminta nama properti name tetap dipertahankan.",
          },
        },
        {
          "kind": "step",
          "id": "next-2-5",
          "title": "Pola Komposisi: Interaktif di Daun",
          "explanation": "Untuk menjaga agar ukuran berkas JavaScript aplikasi kamu tetap sekecil mungkin, terapkan pola arsitektur 'Moving Client Components to the Leaves' (Menggeser Client Component ke Daun Pohon Komponen). Hindari menaruh direktif `'use client'` pada berkas layout root atau halaman utama jika hanya ada satu elemen kecil yang membutuhkan interaktivitas. Sebaiknya, pisahkan elemen interaktif tersebut (misalnya tombol toggle tema atau form pencarian) ke dalam berkas komponen kecilnya sendiri dan beri direktif `'use client'` hanya pada berkas tersebut. Dengan demikian, komponen induk yang membungkusnya tetap bertahan sebagai Server Component yang hemat memori dan cepat dimuat.",
          "example": {
            "code": "// ❌ satu baris ini membuat SELURUH aplikasi jadi client\n// app/layout.tsx\n'use client';\nexport default function RootLayout({ children }) { return <body>{children}</body>; }\n\n// ✅ direktifnya dipindahkan ke daun\n// app/_komponen/TombolTema.tsx\n'use client';\nexport default function TombolTema() { /* useState di sini */ }",
            "output": "$ npm run build\n\n▲ Next.js 16.2.12 (Turbopack)\n\nUkuran First Load JS:\n'use client' di app/layout.tsx      First Load JS  187 kB\n'use client' hanya di TombolTema     First Load JS   94 kB\n\nRoute (app)                              Size\n┌ ○ /                                    1.2 kB\n└ ○ /produk                              0.9 kB",
            "note": "Direktif itu menular ke bawah: semua yang diimpor sebuah berkas client ikut menjadi client. Karena itu posisinya di pohon komponen menentukan berapa KB yang diunduh pengguna. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "`RootLayout` harus tetap menjadi Server Component. Tampilkan tombol ganti tema yang interaktif (tersimpan di `./ThemeToggle`) di dalam `<body>`, tanpa mengubah status berkas layout ini sendiri.",
          "starterCode": "export default function RootLayout({ children }) {\n  return (\n    <body>\n      {/* Panggil ThemeToggle di bawah ini */}\n      \n      {children}\n    </body>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+ThemeToggle\\s+from\\s*['\"]\\./ThemeToggle['\"]",
              "message": "Impor komponennya dari `./ThemeToggle`. Komponen itu yang menyimpan direktif `'use client'`, bukan berkas layout ini."
            },
            {
              "pattern": "<body[^>]*>[\\s\\S]*<ThemeToggle\\s*(/>|>\\s*</ThemeToggle>)",
              "message": "Render komponennya di dalam `<body>`, di atas `{children}` sesuai posisi komentar."
            },
            {
              "pattern": "['\"]use client['\"]",
              "mustNotMatch": true,
              "message": "Jangan menambahkan direktif client di berkas layout. Kalau layout root menjadi client, seluruh halaman di bawahnya ikut menjadi client — dan manfaat Server Components hilang di satu aplikasi penuh."
            }
          ],
          "solution": "import ThemeToggle from './ThemeToggle';\n\nexport default function RootLayout({ children }) {\n  return (\n    <body>\n      <ThemeToggle />\n      {children}\n    </body>\n  );\n}",
          susunKode: {
            question:
              "Rangkai pola komposisi yang menyisipkan Client Component ThemeToggle ke dalam RootLayout.",
            potongan: [
              "import ThemeToggle from './ThemeToggle';",
              "export default function RootLayout({ children }) {",
              "  return (\n    <body>\n      <ThemeToggle />\n      {children}\n    </body>\n  );",
              "}",
            ],
            pengecoh: [
              "'use client';",
              "import { ThemeToggle } from './ThemeToggle';",
            ],
            pemisah: "\n",
            explanation:
              "RootLayout tetap menjadi Server Component; komponen interaktif ThemeToggle diimpor dan disisipkan di dalamnya tanpa mengubah seluruh layout menjadi client-side. Keping 'use client' menggoda bagi yang ingin cepat menyelesaikan masalah interaktivitas, tetapi berdampak buruk karena mengubah seluruh hirarki layout menjadi Client Component. Keping import { ThemeToggle } keliru karena modul komponen tersebut mengekspor secara default.",
          },
        },
        {
          "kind": "step",
          "id": "next-2-6",
          "title": "Mencegah Import Server Code ke Client (server-only)",
          "explanation": "Ketika membangun aplikasi web skala besar, terdapat risiko tak sengaja meng-import berkas logika backend (seperti modul query database atau kredensial API rahasia) ke dalam Client Component. Untuk mencegah kebocoran kode sensitif ke bundle JavaScript publik di browser, Next.js menyediakan paket resmi bernama `server-only`. Dengan menambahkan `import 'server-only';` pada baris paling atas berkas backend kamu, kompilator Next.js akan melempar error otomatis pada saat pembentukan build jika berkas tersebut tak sengaja ter-import oleh Client Component. Gunakan guard ini pada seluruh modul pembantu database, layanan pembayaran, atau enkripsi kunci rahasia.",
          "example": {
            "code": "// lib/tarif.ts\nimport 'server-only';\n\nexport function hitungTarif(berat: number) {\n  return berat * Number(process.env.TARIF_PER_KG);   // rahasia server\n}",
            "output": "Saat berkas itu diimpor dari komponen berdirektif 'use client':\n\n$ npm run build\n ⨯ ./lib/tarif.ts\nError: This module cannot be imported from a Client Component module.\nIt should only be used from a Server Component.\n\nTanpa penjaga ini, build SUKSES dan isi TARIF_PER_KG ikut terkirim ke browser.",
            "note": "Nilai penjaga ini justru pada kegagalannya: build yang berhenti jauh lebih murah daripada kredensial yang terbaca siapa pun di tab Sources DevTools. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Berkas di bawah membaca tabel `passwords` langsung dari database. Pasang penjaga resmi Next.js di baris pertama supaya build GAGAL kalau suatu hari berkas ini tidak sengaja diimpor dari komponen client.",
          "starterCode": "// Tambahkan import penjaga di sini\n\nexport async function getSecretData() {\n  return db.query('SELECT * FROM passwords');\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+['\"]server-only['\"]",
              "message": "Penjaganya diimpor sebagai efek samping — tanpa `{ }` dan tanpa nama variabel, cukup nama paketnya. Paket ini tidak mengekspor apa pun; tugasnya hanya membuat bundler client menolak berkas ini."
            }
          ],
          "solution": "import 'server-only';\n\nexport async function getSecretData() {\n  return db.query('SELECT * FROM passwords');\n}",
          susunKode: {
            question:
              "Gunakan modul 'server-only' untuk memastikan fungsi kueri rahasia tidak pernah terikut ke bundle client.",
            potongan: [
              "import 'server-only';",
              "export async function getSecretData() {",
              "  return db.query('SELECT * FROM passwords');",
              "}",
            ],
            pengecoh: [
              "import 'client-only';",
              "import 'server-side';",
            ],
            pemisah: "\n",
            explanation:
              "Mengimpor 'server-only' di baris awal akan menyebabkan build gagal jika berkas ini tak sengaja diimpor oleh Client Component. Keping import 'client-only' adalah jebakan nama modul yang berlawanan fungsi. Keping import 'server-side' menggoda bagi yang mengira nama modulnya adalah server-side.",
          },
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
              "explanation": "Direktif itu dibutuhkan tepat ketika komponen perlu runtime browser: state, effect, atau event handler. Pilihan \"komponen layout root\" menggoda karena layout terasa paling penting, padahal justru di situ direktif ini paling merugikan. Mengambil data dari PostgreSQL adalah pekerjaan Server Component — memberinya `'use client'` malah membuat query database mustahil."
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
              "explanation": "Impor langsung Server Component ke berkas client akan mengubahnya menjadi client (dan modul server seperti Prisma langsung gagal). Pola yang benar: Server Component merender Client Component, lalu menyelipkan komponen server lain lewat prop `children`. Pilihan \"tidak boleh sama sekali\" menggoda karena setengah benar — yang dilarang impornya, bukan penempatannya."
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
              "explanation": "Paket `server-only` membuat build gagal kalau berkas itu ikut masuk ke bundel browser, jadi kredensial tidak pernah bocor. Pilihan \"mempercepat respon server\" menggoda karena namanya terdengar seperti optimasi, padahal ini murni pagar keamanan yang tidak mengubah performa."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Tim kamu sedang mengembangkan aplikasi e-commerce. Manakah bagian yang paling tepat dibiarkan sebagai Server Component?",
              "choices": [
                "A. Tombol 'Suka' yang berubah warna saat diklik",
                "B. Halaman katalog produk yang datanya diambil dari database dan hanya ditampilkan",
                "C. Keranjang belanja yang jumlahnya berubah tanpa memuat ulang halaman",
                "D. Modal pop-up berisi form alamat pengiriman"
              ],
              "answerIndex": 1,
              "explanation": "Katalog hanya membaca lalu menampilkan data, jadi seluruh pekerjaannya bisa selesai di server dan browser cuma menerima HTML — nol KB JavaScript tambahan. Tiga pilihan lain semuanya butuh state atau event handler, yang berarti wajib Client Component. Pilihan modal menggoda karena tampak \"hanya tampilan\", padahal membuka-menutup modal itu sendiri sudah state."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Server Component mengoper props ke Client Component seperti ini: `<Kartu data={{ nama: 'Budi', format: (t) => t.toUpperCase() }} />`. Apa yang terjadi?",
              "choices": [
                "A. Berjalan normal, fungsi ikut terkirim ke browser",
                "B. Fungsinya otomatis dijalankan di server lalu hasilnya dikirim",
                "C. Next.js melempar error karena fungsi tidak bisa di-serialize menembus boundary",
                "D. Fungsinya diubah otomatis menjadi Server Action"
              ],
              "answerIndex": 2,
              "explanation": "Props yang menembus boundary server→client harus bisa diubah menjadi JSON; fungsi tidak bisa, jadi Next.js menolaknya dengan pesan \"Functions cannot be passed directly to Client Components\". Pilihan \"otomatis jadi Server Action\" menggoda karena Server Action memang jalan keluarnya — tapi itu harus kamu tandai sendiri dengan `'use server'`, tidak terjadi otomatis."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Seorang developer menaruh `'use client'` di `app/layout.tsx` supaya satu tombol tema bisa memakai `useState`. Apa konsekuensi arsitekturnya?",
              "choices": [
                "A. Hanya tombol tema itu yang menjadi Client Component",
                "B. Seluruh halaman di bawah layout itu ikut masuk bundel browser, sehingga manfaat Server Components hilang",
                "C. Aplikasi gagal di-build",
                "D. Semua halaman otomatis menjadi statis"
              ],
              "answerIndex": 1,
              "explanation": "Direktif client menular ke bawah: layout root membungkus semua halaman, jadi semuanya ikut menjadi client dan First Load JS membengkak. Build-nya tidak gagal — itu yang membuat kesalahan ini bertahan lama di proyek nyata. Perbaikannya memindahkan direktif ke komponen daun yang benar-benar butuh state."
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
          "body": "# Data Fetching, Caching, & Streaming\n\nDi React tradisional, data fetching dilakukan di browser menggunakan `useEffect` + `fetch` setelah komponen selesai dimuat (Waterfall Request). Ini menyebabkan loading spinner yang mengganggu UX.\n\nDi Next.js App Router, **Server Components dapat berbentuk fungsi `async`**. Kamu dapat memanggil `await fetch()` atau query database secara langsung di dalam komponen!\n\n## 4 Lapisan Caching di Next.js\n\nNext.js memiliki arsitektur caching bertingkat untuk memaksimalkan kecepatan respon server:\n\n```text\n┌────────────────────────────────────────────────────────┐\n│ 1. Request Memoization (React cache / fetch dedup)     │ -> Menggabungkan request identik dalam 1 render tree\n├────────────────────────────────────────────────────────┤\n│ 2. Data Cache (fetch cache di Server — opt-in)         │ -> Menyimpan hasil fetch lintas request user, TAPI harus diminta (lihat di bawah)\n├────────────────────────────────────────────────────────┤\n│ 3. Full Route Cache (HTML & RSC Payload di Server)     │ -> Menyimpan hasil kompilasi halaman statis\n├────────────────────────────────────────────────────────┤\n│ 4. Router Cache (In-memory Client Session Cache)       │ -> Menyimpan segmen halaman di browser user\n└────────────────────────────────────────────────────────┘\n```\n\n## Static Rendering vs Dynamic Rendering\n\n- **Static Rendering (Default)**: Halaman di-render satu kali pada saat build time (atau di background via ISR). Sangat cepat dan hemat resource server.\n- **Dynamic Rendering**: Halaman di-render ulang pada **setiap HTTP request** yang masuk. Terjadi otomatis jika komponen membaca fungsi dinamis seperti `cookies()`, `headers()`, atau menggunakan `searchParams`.\n\n```typescript\n// Memaksa halaman menjadi Dynamic Rendering\nexport const dynamic = 'force-dynamic';\n```\n\n## Default Cache `fetch`: Berubah Sejak Next.js 15\n\nIni bagian yang paling banyak salah di tutorial lama, jadi hafalkan aturan versinya:\n\n| Versi Next.js | Perilaku `fetch()` tanpa opsi | Cara mengubahnya |\n|---|---|---|\n| 13–14 | **di-cache** selamanya (`force-cache`) | `cache: 'no-store'` untuk data segar |\n| 15–16 (yang kamu pakai) | **TIDAK di-cache**, setiap request menembak API lagi | `cache: 'force-cache'` atau `next: { revalidate: N }` untuk menyimpan |\n\nJadi di Next.js 16 kamu tidak perlu menulis `cache: 'no-store'` untuk mendapat data terbaru — itu sudah perilaku bawaan. Yang perlu diminta secara eksplisit justru sebaliknya: **caching**.\n\n## Incremental Static Regeneration (ISR) & On-Demand Revalidation\n\nISR memungkinkan kamu meng-cache halaman statis, tetapi memperbaruinya secara berkala tanpa perlu melakukan build ulang seluruh situs web!\n\n1. **Time-based Revalidation**: Memperbarui data setiap N detik.\n   `fetch('https://api.com/data', { next: { revalidate: 60 } });`\n2. **On-Demand Revalidation**: Memperbarui cache saat ada event mutasi data (misalnya artikel baru disimpan).\n   `revalidatePath('/blog');` atau `revalidateTag('posts', 'max');` — sejak Next.js 16 `revalidateTag` **wajib** menerima argumen kedua berupa profil `cacheLife` (mis. `'max'`); bentuk satu argumen sudah deprecated dan ditandai error oleh TypeScript.\n\n## Request Deduplication dengan React `cache()`\n\nPemanggilan `fetch()` dengan URL & opsi yang sama di dalam satu pohon render akan otomatis di-deduplikasi oleh Next.js. Namun, jika kamu memanggil fungsi database kustom (seperti Prisma/ORM), bungkus fungsi tersebut dengan `cache()` dari React:\n\n```typescript\nimport { cache } from 'react';\nexport const getUser = cache(async (id: string) => {\n  return await db.user.findUnique({ where: { id } });\n});\n```\n\n## Streaming UI dengan React Suspense\n\nDaripada menunggu seluruh data halaman selesai di-fetch (termasuk query yang lambat), gunakan **Streaming**. Komponen statis/cepat langsung dikirimkan ke browser, sedangkan komponen lambat dibungkus `<Suspense>` dengan fallback UI (skeleton loading).\n\n## Pra-render Rute Dinamis dengan `generateStaticParams`\n\nUntuk rute dinamis seperti `app/blog/[slug]/page.tsx`, ekspor fungsi `generateStaticParams()` untuk memberitahu Next.js daftar slug mana saja yang harus dibuatkan halaman statisnya pada saat build time.\n\n## Analogi Dunia Nyata\n\nBayangkan percetakan koran. **Static Rendering (SSG)** seperti mencetak koran pagi; cetak sekali di subuh, dibaca jutaan orang seharian. **ISR** seperti papan pengumuman digital toko yang diperbarui tiap 10 menit. **Dynamic Rendering (SSR)** seperti kasir minimarket yang mencetak struk belanja khusus saat kamu berdiri di depan mesin kasir.\n\n## Jebakan & Kesalahan Umum\n\n1. **Menyalin aturan cache dari tutorial Next.js 13–14**: menganggap `fetch()` meng-cache hasilnya secara default, lalu menaburkan `cache: 'no-store'` di mana-mana. Di Next.js 15–16 kebalikannya yang benar: `fetch()` **tidak** di-cache kecuali kamu meminta, jadi yang perlu ditulis adalah `cache: 'force-cache'` atau `next: { revalidate: N }`. Gejalanya halus — halaman tetap benar, hanya jauh lebih lambat dan API-nya ditembak terus.\n2. **Waterfall Requests**: Melakukan `await fetch1()` lalu `await fetch2()` secara berurutan padahal keduanya independen. Gunakan `Promise.all([fetch1(), fetch2()])`!\n3. **Lupa Deduplikasi Query Database**: Memanggil query database yang sama di `layout.tsx` dan `page.tsx` tanpa membungkusnya dengan React `cache()`.\n\n## Kaitan ke Dunia Kerja\n\nTeknik Caching dan ISR adalah senjata utama arsitek sistem di media berita besar dan toko online untuk menangani lonjakan jutaan pengunjung (traffic spike) saat promo tanggal kembar tanpa membuat server database tumbang."
        },
        {
          "kind": "step",
          "id": "next-3-1",
          "title": "Async Server Component Data Fetching",
          "explanation": "Di App Router, sebuah komponen halaman boleh dideklarasikan `async` dan memanggil `await fetch()` langsung di dalam bodinya — tanpa `useState`, tanpa `useEffect`, tanpa state loading buatan sendiri. Alasannya komponen ini dijalankan di server: datanya sudah lengkap sebelum HTML dikirim, jadi perayap mesin pencari dan pengguna dengan koneksi lambat langsung menerima isi halaman. Dipakai untuk semua pengambilan data awal halaman: daftar artikel, detail produk, profil pengguna. Ada DUA `await` yang mudah dilupakan: satu untuk `fetch` (menunggu respons datang) dan satu untuk `.json()` (menunggu isinya selesai dibaca) — melewatkan yang kedua membuatmu memegang Promise, dan halaman menampilkan `[object Promise]`. Jebakan lain: hanya Server Component yang boleh `async`; menambahkan `'use client'` di berkas ini langsung membuatnya error.",
          "example": {
            "code": "// app/artikel/page.tsx\nexport default async function ArtikelPage() {\n  const res = await fetch('https://api.example.com/artikel');\n  const daftar = await res.json();\n  return <h1>{daftar.length} artikel</h1>;\n}",
            "output": "Terminal npm run dev:\nGET /artikel 200 in 142ms\n\nHTML yang diterima browser (View Source):\n<h1>3 artikel</h1>\n\nData \"3 artikel\" langsung ada di dokumen HTML awal dari server.",
            "note": "Jika `await` pada `.json()` dihilangkan, variabel `daftar` berupa objek Promise sehingga `daftar.length` bernilai `undefined` (tampilan menjadi `<h1> artikel</h1>` tanpa angka). Catatan jujur: Server Component seperti ini tidak dijalankan di panel preview — Next.js butuh server sendiri untuk menjalankan fetch di server. Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Halaman `app/produk/page.tsx` harus menampilkan nama satu produk yang diambil dari alamat pada konstanta `URL_API` yang sudah disediakan. Tulis komponen halamannya sebagai default export yang bisa menunggu data, ambil datanya, ubah respons menjadi objek, lalu tampilkan properti `nama` di dalam `<h1>`. Jangan pakai `useState` atau `useEffect`.",
          "starterCode": "// app/produk/page.tsx\nconst URL_API = 'https://api.example.com/produk/1';\n\n// Tulis komponen halamannya di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+default\\s+async\\s+function(?:\\s+[A-Za-z_$][\\w$]*)?\\s*\\(",
              "stripComments": true,
              "message": "Halaman yang menunggu data harus dideklarasikan `async` dan diekspor sebagai default (`export default async function ...`). Tanpa `async` kamu tidak boleh memakai `await`; dan hanya Server Component yang boleh async — Client Component akan error."
            },
            {
              "pattern": "await\\s+fetch\\(\\s*(URL_API|['\"]https://api\\.example\\.com/produk/1['\"])",
              "stripComments": true,
              "message": "Tunggu `fetch`-nya dengan `await`, dan pakai alamat dari konstanta yang sudah disediakan. Tanpa `await`, `res` berisi Promise dan langkah berikutnya gagal."
            },
            {
              "pattern": "await\\s+[A-Za-z_$][\\w$]*\\.json\\(\\)",
              "stripComments": true,
              "message": "Respons HTTP belum berisi data siap pakai: badan responsnya harus dibaca dulu dengan `.json()`, dan itu juga menghasilkan Promise — jadi butuh `await` yang KEDUA."
            },
            {
              "pattern": "<h1>[\\s\\S]*\\{[^}]*\\bnama\\b[^}]*\\}[\\s\\S]*</h1>",
              "stripComments": true,
              "message": "Tampilkan properti `nama` dari data yang sudah diambil di dalam elemen `<h1>` (misalnya `<h1>{produk.nama}</h1>`)."
            }
          ],
          "solution": "const URL_API = 'https://api.example.com/produk/1';\n\nexport default async function Page() {\n  const res = await fetch(URL_API);\n  const produk = await res.json();\n  return <h1>{produk.nama}</h1>;\n}",
          susunKode: {
            question:
              "Susun Server Component async yang mengambil data produk secara asinkron menggunakan fetch.",
            potongan: [
              "const URL_API = 'https://api.example.com/produk/1';",
              "export default async function Page() {",
              "  const res = await fetch(URL_API);",
              "  const produk = await res.json();",
              "  return <h1>{produk.nama}</h1>;",
              "}",
            ],
            pengecoh: [
              "export default function Page() {",
              "  const res = fetch(URL_API);",
            ],
            pemisah: "\n",
            explanation:
              "Pengambilan data di Server Component dilakukan langsung dengan await fetch tanpa butuh useEffect. Keping export default function Page() { sering keliru karena lupa kata kunci async pada komponen pengambil data. Keping const res = fetch(URL_API); menggoda tetapi merupakan kesalahan penanganan Promise yang berakibat metode .json() gagal dijalankan.",
          },
        },
        {
          "kind": "step",
          "id": "next-3-2",
          "title": "Static vs Dynamic Rendering",
          "explanation": "Next.js secara otomatis mengategorikan proses rendering halaman menjadi dua mode: **Static Rendering** (default) dan **Dynamic Rendering**. Pada Static Rendering, halaman di-pre-render satu kali pada saat pembentukan build produksi sehingga dapat di-cache secara agresif untuk kecepatan maksimal. Namun, jika halaman membaca fungsi yang bersifat dinamis saat runtime (seperti `cookies()`, `headers()`, atau `searchParams`), Next.js akan secara otomatis beralih ke mode Dynamic Rendering di mana halaman di-render ulang pada setiap request HTTP yang masuk. Kamu juga dapat memaksa halaman menjadi dynamic dengan mengekspor konstanta `export const dynamic = 'force-dynamic';`. Gunakan mode dynamic ini pada halaman dashboard pribadi atau keranjang belanja real-time.",
          "example": {
            "code": "// app/harga/page.tsx — statis (default)\nexport default function Harga() {\n  return <h1>Rp85.000</h1>;\n}\n\n// app/keranjang/page.tsx — dinamis karena membaca cookie\nimport { cookies } from 'next/headers';\nexport default async function Keranjang() {\n  const sesi = (await cookies()).get('sesi');\n  return <h1>Keranjang {sesi?.value}</h1>;\n}",
            "output": "$ npm run build\n\n▲ Next.js 16.2.12 (Turbopack)\n\nRoute (app)                    Size     First Load JS\n┌ ○ /harga                     1.1 kB          94 kB\n└ ƒ /keranjang                 1.3 kB          96 kB\n\n○  (Static)   prerendered as static content\nƒ  (Dynamic)  server-rendered on demand",
            "note": "Tabel inilah cara memastikan mode rendering halamanmu: lambang bulat berarti statis, lambang f berarti dirender ulang setiap request. Cek di sini dulu sebelum menuduh cache bermasalah. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Dashboard ini menampilkan angka penjualan yang berubah setiap menit, tapi `npm run build` melaporkannya sebagai halaman statis sehingga isinya membeku sejak build. Paksa Next.js merendernya ulang pada setiap request lewat konstanta konfigurasi yang dibaca dari berkas halaman.",
          "starterCode": "// Ekspor konfigurasi dynamic di sini\n\nexport default function Dashboard() {\n  return <h1>Live Dashboard</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+const\\s+dynamic\\s*=\\s*['\"]force-dynamic['\"]",
              "message": "Konfigurasi per-halaman dibaca dari named export bernama `dynamic`, dan nilainya salah satu string yang dikenali Next.js — yang berarti \"selalu render di server saat diminta\". Tanpa `export`, konstanta itu diabaikan."
            }
          ],
          "solution": "export const dynamic = 'force-dynamic';\n\nexport default function Dashboard() {\n  return <h1>Live Dashboard</h1>;\n}",
          susunKode: {
            question:
              "Susun konfigurasi halaman untuk memaksa rendering dinamis pada setiap permintaan.",
            potongan: [
              "export const dynamic = 'force-dynamic';",
              "export default function Dashboard() {",
              "  return <h1>Live Dashboard</h1>;",
              "}",
            ],
            pengecoh: [
              "export const dynamic = 'force-static';",
              "export const revalidate = 'force-dynamic';",
            ],
            pemisah: "\n",
            explanation:
              "Properti ekspor dynamic = 'force-dynamic' memberitahu Next.js untuk selalu merender halaman ini pada runtime tanpa menyimpan cache statis. Keping export const dynamic = 'force-static'; menggoda bagi yang ingin membuat halaman statis, tetapi berlawanan dengan kebutuhan data langsung. Keping export const revalidate = 'force-dynamic'; adalah keliru karena opsi revalidate menerima nilai angka detik, bukan string.",
          },
        },
        {
          "kind": "step",
          "id": "next-3-3",
          "title": "Revalidasi Cache (ISR & On-Demand)",
          "explanation": "Incremental Static Regeneration (ISR) memungkinkan halaman tetap berkecepatan statis sekaligus diperbarui di latar belakang menggunakan pola *stale-while-revalidate*. Dengan opsi `{ next: { revalidate: 30 } }` pada `fetch()`, Next.js menyajikan data dari cache. Ketika interval 30 detik terlewati, request berikutnya tetap menerima data cache lama (stale) secara instan tanpa menunggu, sementara Next.js memicu regenerasi data baru di latar belakang server. Begitu regenerasi selesai, pengunjung setelahnya akan menerima data terbaru. Di mode development (`next dev`), cache di-bypass saat refresh agar mempermudah coding, sedangkan perilaku caching dan background revalidation ISR aktif penuh pada server produksi (`next build && next start`).",
          "example": {
            "code": "// data kurs boleh basi maksimal 5 menit (300 detik)\nconst res = await fetch('https://api.example.com/kurs', {\n  next: { revalidate: 300 },\n});",
            "output": "Permintaan ke-1 (detik 0)    : ambil dari API, simpan ke Data Cache\nPermintaan ke-2 (detik 12)   : dilayani dari cache, 0 panggilan API\nPermintaan ke-301            : dilayani dari cache LAMA (stale), lalu API dipanggil\n                               di latar belakang untuk pengunjung berikutnya\n\n$ npm run build\n└ ISR /kurs    revalidate: 5m",
            "note": "Pengunjung yang datang tepat setelah interval habis tetap menerima data lama secara instan — pembaruannya terjadi di latar belakang server (stale-while-revalidate). Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Atur pembaruan cache daftar artikel blog di bawah dengan revalidasi berkala 30 detik (setengah menit). Tambahkan opsi pada pemanggilan `fetch` agar Next.js menyajikan cache dan meregenerasi data baru di latar belakang saat request masuk setelah interval tersebut.",
          "starterCode": "export default async function Blog() {\n  const res = await fetch('https://api.example.com/posts');\n  return <div>Blog</div>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "revalidate\\s*:\\s*30\\b",
              "stripComments": true,
              "message": "Rentang waktunya ditulis dalam DETIK, jadi setengah menit berarti 30 — bukan 0.5, bukan 30000."
            },
            {
              "pattern": "next\\s*:\\s*\\{[\\s\\S]*revalidate",
              "stripComments": true,
              "message": "Opsi cache Next.js dibungkus di dalam properti `next`. Menaruh `revalidate` langsung di objek opsi `fetch` (tanpa `next`) diabaikan tanpa pesan error — halamanmu tetap membeku dan itu sulit dilacak."
            },
            {
              "pattern": "fetch\\(\\s*['\"][^'\"]+['\"]\\s*,\\s*\\{",
              "stripComments": true,
              "message": "Opsinya menjadi ARGUMEN KEDUA `fetch`, tepat setelah URL-nya, bukan pernyataan terpisah di bawahnya."
            }
          ],
          "solution": "export default async function Blog() {\n  const res = await fetch('https://api.example.com/posts', { next: { revalidate: 30 } });\n  return <div>Blog</div>;\n}",
          susunKode: {
            question:
              "Rangkai pemanggilan fetch daftar artikel yang hasilnya boleh tertinggal paling lama setengah menit.",
            potongan: [
              "export default async function Blog() {",
              "  const res = await fetch('https://api.example.com/posts',",
              "    { next: { revalidate: 30 } });",
              "  return <div>Blog</div>;",
              "}",
            ],
            pengecoh: [
              "  const res = await fetch('https://api.example.com/posts');",
              "    { cache: { revalidate: 30 } });",
            ],
            pemisah: "\n",
            explanation:
              "Opsi cache Next.js menjadi argumen KEDUA fetch, dan angka revalidate ditulis dalam satuan detik sehingga setengah menit berarti 30. Keping tanpa argumen kedua sangat sering keliru dipakai karena kodenya terlihat wajar dan tetap berjalan — halamannya hanya membeku tanpa satu pun peringatan. Keping { cache: { revalidate: 30 } } adalah jebakan klasik: pembungkusnya tertukar dengan opsi cache bawaan Fetch API, padahal Next.js membaca revalidate dari properti next.",
          },
        },
        {
          "kind": "step",
          "id": "next-3-4",
          "title": "Request Deduplication dengan React cache()",
          "explanation": "Next.js secara otomatis meng-cache dan mendeduplikasi pemanggilan `fetch()` yang memiliki URL serta opsi yang identik di dalam satu pohon render komponen. Namun, jika kamu mengambil data menggunakan query ORM/database langsung (seperti Prisma atau Kysely) yang tidak menggunakan API `fetch`, fitur deduplikasi otomatis tersebut tidak berjalan. Untuk mengatasi masalah ini, React menyediakan fungsi `cache()`. Dengan membungkus fungsi query database kamu menggunakan `cache()`, React akan memastikan bahwa fungsi tersebut hanya dieksekusi satu kali per render request meskipun dipanggil di beberapa tempat (seperti di `layout.tsx` dan `page.tsx` sekaligus). Gunakan `cache()` pada seluruh helper query database kamu.",
          "example": {
            "code": "// lib/data.ts\nimport { cache } from 'react';\nimport { db } from './db';\n\nexport const getTagihan = cache(async (id: string) => {\n  return db.tagihan.findUnique({ where: { id } });\n});\n\n// dipanggil di layout.tsx DAN page.tsx pada request yang sama",
            "output": "Tanpa cache() — log Prisma untuk satu kali buka halaman:\n  prisma:query SELECT * FROM \"Tagihan\" WHERE id = $1\n  prisma:query SELECT * FROM \"Tagihan\" WHERE id = $1\n\nDengan cache():\n  prisma:query SELECT * FROM \"Tagihan\" WHERE id = $1",
            "note": "Cakupannya satu request render, bukan lintas pengguna: permintaan berikutnya tetap menembak database. Jadi ini pencegah query ganda, bukan cache jangka panjang. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Fungsi `getUser` di bawah dipanggil dua kali dalam satu render (sekali di `layout.tsx`, sekali di `page.tsx`), dan karena bukan `fetch`, Next.js tidak mendeduplikasinya sendiri. Bungkus fungsi itu dengan pembantu dari React yang sudah diimpor supaya ia hanya benar-benar dijalankan sekali per request.",
          "starterCode": "import { cache } from 'react';\n\n// Bungkus fungsi ini dengan cache()\nconst getUser = async (id) => {\n  return { id, name: 'Budi' };\n};",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+getUser\\s*=\\s*cache\\(",
              "message": "Yang dibungkus adalah fungsinya, jadi `cache(` berada di sebelah kanan tanda sama dengan dan fungsi async-nya menjadi argumennya. Membungkus hasil PEMANGGILAN (`cache(getUser(1))`) tidak mendeduplikasi apa pun."
            },
            {
              "pattern": "cache\\(\\s*async",
              "message": "Fungsi yang dibungkus tetap `async` — jangan hilangkan kata itu, karena isinya menunggu database."
            }
          ],
          "solution": "import { cache } from 'react';\n\nconst getUser = cache(async (id) => {\n  return { id, name: 'Budi' };\n});",
          susunKode: {
            question:
              "Susun fungsi penarik data yang diduplikasi permintaannya menggunakan fungsi cache dari React.",
            potongan: [
              "import { cache } from 'react';",
              "const getUser = cache(async (id) => {",
              "  return { id, name: 'Budi' };",
              "});",
            ],
            pengecoh: [
              "const getUser = memo(async (id) => {",
              "const getUser = async (id) => {",
            ],
            pemisah: "\n",
            explanation:
              "Fungsi cache untuk deduplikasi request per siklus render diimpor dari paket 'react' dan membungkus fungsi asinkronus. Keping const getUser = memo(...) menggoda bagi pengembang React yang terbiasa dengan React.memo untuk komponen UI. Keping const getUser = async (id) => { keliru karena mengabaikan pembungkus cache(), sehingga fungsi akan dipanggil berulang kali.",
          },
        },
        {
          "kind": "step",
          "id": "next-3-5",
          "title": "Streaming UI dengan React Suspense",
          "explanation": "Streaming adalah teknik rendering progresif yang memecah HTML halaman menjadi potongan-potongan kecil dan mengirimkannya ke browser secara bertahap. Bagian antarmuka yang statis atau cepat diunduh akan ditampilkan seketika kepada pengguna, sementara komponen async yang membutuhkan waktu lama (seperti query statistik berat) dibungkus menggunakan `<Suspense>` dengan tampilan cadangan (fallback UI / Skeleton). Setelah proses unduh data di server selesai, Next.js akan menyuntikkan komponen tersebut ke dalam halaman secara langsung tanpa merusak tata letak antarmuka. Gunakan Streaming untuk meningkatkan skor First Contentful Paint (FCP) dan mencegah layar kosong saat halaman memuat banyak data.",
          "example": {
            "code": "// app/laporan/page.tsx\nimport { Suspense } from 'react';\nimport TabelRingkasan from './TabelRingkasan';   // cepat\nimport GrafikTahunan from './GrafikTahunan';     // query 3 detik\n\nexport default function Laporan() {\n  return (\n    <>\n      <TabelRingkasan />\n      <Suspense fallback={<p>Menghitung grafik...</p>}>\n        <GrafikTahunan />\n      </Suspense>\n    </>\n  );\n}",
            "output": "Yang dilihat pengguna:\n\ndetik 0.2  <table>...</table>\n           <p>Menghitung grafik...</p>\n\ndetik 3.1  <table>...</table>\n           <svg class=\"grafik\">...</svg>     <-- fallback diganti, tabel tidak berkedip",
            "note": "Tanpa `<Suspense>`, seluruh halaman menunggu bagian paling lambat: pengguna melihat layar kosong 3 detik meski tabelnya sudah siap sejak detik 0,2. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Komponen `<HeavyChart />` butuh beberapa detik untuk mengambil datanya dan saat ini menahan seluruh halaman. Bungkus komponen itu agar bagian lain halaman tampil lebih dulu, dan selama menunggu tampilkan elemen `p` bertuliskan `Memuat grafik...`.",
          "starterCode": "import { Suspense } from 'react';\nimport HeavyChart from './HeavyChart';\n\nexport default function Dashboard() {\n  return (\n    <section>\n      {/* Bungkus dengan Suspense di bawah ini */}\n      <HeavyChart />\n    </section>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "<Suspense[^>]*fallback=\\{\\s*<p[^>]*>\\s*Memuat grafik\\.\\.\\.\\s*</p>\\s*\\}",
              "message": "Tampilan sementara dioper lewat prop `fallback`, dan isinya JSX — jadi dibungkus kurawal. Spasi di dalam kurawal tidak masalah; yang penting elemen `p` dengan teks yang diminta."
            },
            {
              "pattern": "<Suspense[\\s\\S]*<HeavyChart[\\s\\S]*</Suspense>",
              "message": "Komponen lambatnya harus berada DI DALAM `<Suspense>`. Kalau ia di luar, fallback-nya tidak pernah dipakai dan halaman tetap menunggu."
            }
          ],
          "solution": "import { Suspense } from 'react';\nimport HeavyChart from './HeavyChart';\n\nexport default function Dashboard() {\n  return (\n    <section>\n      <Suspense fallback={<p>Memuat grafik...</p>}>\n        <HeavyChart />\n      </Suspense>\n    </section>\n  );\n}",
          susunKode: {
            question:
              "Susun komponen Dashboard yang membungkus komponen berat HeavyChart dengan batas Suspense.",
            potongan: [
              "import { Suspense } from 'react';\nimport HeavyChart from './HeavyChart';",
              "export default function Dashboard() {",
              "  return (",
              "    <section>",
              "      <Suspense fallback={<p>Memuat grafik...</p>}>",
              "        <HeavyChart />",
              "      </Suspense>",
              "    </section>",
              "  );",
              "}",
            ],
            pengecoh: [
              "      <Suspense loading={<p>Memuat grafik...</p>}>",
              "      <Suspense fallback={<p>Loading...</p>}>",
            ],
            pemisah: "\n",
            explanation:
              "Komponen Suspense diimpor dari paket React dan menggunakan prop bernama fallback untuk menerima komponen placeholder saat proses muat data. Keping prop loading= menggoda bagi pemula yang keliru mengingat nama prop Suspense. Keping fallback={<p>Loading...</p>} keliru teks fallback karena pengujian memeriksa kalimat 'Memuat grafik...'.",
          },
        },
        {
          "kind": "step",
          "id": "next-3-6",
          "title": "generateStaticParams untuk Dynamic Route",
          "explanation": "Secara default, rute dinamis dengan parameter kurung siku `[slug]` akan di-render secara dinamis pada saat pengguna meminta halaman tersebut. Namun, jika kamu sudah mengetahui daftar parameter yang tersedia (misalnya 100 ID artikel blog teratas), kamu dapat mengekspor fungsi khusus bernama `generateStaticParams()` di dalam berkas `page.tsx`. Fungsi ini mengembalikan daftar array objek parameter yang akan di-pre-render secara statis menjadi HTML pada saat proses build produksi. Hasilnya, ketika pengunjung mengklik artikel tersebut, halaman akan terbuka dalam hitungan milidetik karena sudah berbentuk HTML statis di CDN server. Gunakan fitur ini untuk rute artikel blog, dokumentasi, atau produk terpopuler.",
          "example": {
            "code": "// app/dokumen/[kode]/page.tsx\nexport async function generateStaticParams() {\n  const daftar = await fetch('https://api.example.com/dokumen').then((r) => r.json());\n  return daftar.map((d) => ({ kode: d.kode }));\n}",
            "output": "$ npm run build\n\n▲ Next.js 16.2.12 (Turbopack)\n\nRoute (app)                       Size\n┌ ● /dokumen/[kode]               1.4 kB\n│ ├ /dokumen/panduan-mutu\n│ ├ /dokumen/sop-gudang\n│ └ /dokumen/formulir-cuti\n\n●  (SSG)  prerendered as static HTML (uses generateStaticParams)",
            "note": "Nama properti pada objek yang dikembalikan WAJIB sama dengan nama folder dinamisnya: folder `[kode]` berarti `{ kode: ... }`. Salah nama tidak menghasilkan error, hanya membuat halamannya tidak ikut di-prerender. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Tiga slug pada konstanta `SLUG_POPULER` seharusnya sudah menjadi HTML statis sejak proses build, bukan dirender saat pengunjung pertama datang. Ekspor fungsi konvensi Next.js yang menyebutkan daftar parameter mana yang perlu di-prerender, dan kembalikan satu objek per slug dengan nama properti yang cocok dengan folder `[slug]`.",
          "starterCode": "// app/blog/[slug]/page.tsx\nconst SLUG_POPULER = ['belajar-nextjs', 'server-component', 'caching'];\n\n// Ekspor fungsinya di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+(async\\s+)?function\\s+generateStaticParams",
              "message": "Namanya harus tepat `generateStaticParams` dan diekspor — Next.js mencarinya berdasarkan nama. Boleh `async`, boleh tidak, karena di sini datanya sudah ada di memori."
            },
            {
              "pattern": "(SLUG_POPULER\\.map|slug\\s*:\\s*['\"])",
              "message": "Kembalikan satu objek untuk setiap slug, misalnya dengan `.map()` atas konstanta yang sudah disediakan. Kuncinya harus bernama `slug`, sama seperti nama folder dinamisnya."
            },
            {
              "pattern": "return\\s*\\[\\s*\\]",
              "mustNotMatch": true,
              "message": "Array kosong berarti \"tidak ada halaman yang perlu dibuat\" — build-nya sukses, tapi tidak satu pun artikel jadi statis. Isi array-nya dengan parameter yang sebenarnya."
            }
          ],
          "solution": "const SLUG_POPULER = ['belajar-nextjs', 'server-component', 'caching'];\n\nexport async function generateStaticParams() {\n  return SLUG_POPULER.map((slug) => ({ slug }));\n}",
          susunKode: {
            question:
              "Rangkai fungsi generateStaticParams untuk membuat rute statis dari daftar slug populer.",
            potongan: [
              "const SLUG_POPULER = ['belajar-nextjs', 'server-component', 'caching'];",
              "export async function generateStaticParams() {",
              "  return SLUG_POPULER.map((slug) => ({ slug }));",
              "}",
            ],
            pengecoh: [
              "export async function generateDynamicParams() {",
              "  return SLUG_POPULER.forEach((slug) => ({ slug }));",
            ],
            pemisah: "\n",
            explanation:
              "Fungsi generateStaticParams mengekspor array objek dengan kunci yang sesuai nama parameter rute. Keping export async function generateDynamicParams() keliru nama fungsi konvensi Next.js. Keping .forEach((slug) => ({ slug })) menggoda tetapi salah metode array karena forEach tidak mengembalikan array baru.",
          },
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
              "explanation": "Opsi itu membuat halaman tetap statis tapi diperbarui di latar belakang setiap 60 detik — inilah ISR. Pilihan \"membatalkan fetch setelah 60 detik\" menggoda karena angka detik biasanya dipakai untuk timeout; timeout di fetch diatur lewat `AbortSignal`, bukan `revalidate`."
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
              "explanation": "`generateStaticParams` memberi tahu Next.js daftar parameter yang perlu di-prerender saat build. `getServerSideProps` menggoda karena itu jawaban benar di Pages Router — di App Router fungsi itu tidak dikenali sama sekali. Perhatikan juga: mengembalikan array kosong berarti tidak ada halaman yang dibuat."
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
              "explanation": "`cache()` mendeduplikasi pemanggilan fungsi dalam SATU request render, sehingga query yang sama di `layout.tsx` dan `page.tsx` hanya dieksekusi sekali. Pilihan \"mempercepat build\" menggoda karena kata cache identik dengan cepat, padahal cakupan `cache()` adalah satu request, bukan lintas build atau lintas pengguna."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Di Next.js 16, `fetch()` tanpa opsi apa pun TIDAK di-cache — setiap request menembak API lagi. Kalau kamu justru ingin hasil sebuah `fetch()` disimpan dan dipakai ulang lintas request, opsi apa yang perlu ditambahkan?",
              "choices": [
                "{ cache: 'no-store' }",
                "{ cache: 'force-cache' }",
                "{ method: 'GET' }",
                "Tidak perlu apa-apa — Next.js selalu meng-cache fetch secara default"
              ],
              "answerIndex": 1,
              "explanation": "Sejak Next.js 15 arah defaultnya berbalik: `fetch()` tidak di-cache, dan caching harus diminta dengan `cache: 'force-cache'` (atau `next: { revalidate: N }` kalau kamu mau ISR). Pilihan `{ cache: 'no-store' }` menggoda karena itulah jawaban benar di seluruh tutorial Next.js 13–14 — di versi ini ia hanya menuliskan ulang perilaku bawaan, jadi tidak mengubah apa pun. Pilihan terakhir adalah keyakinan lama yang paling sering dibawa orang dari materi usang."
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
              "explanation": "ISR memberi kecepatan halaman statis dengan pembaruan berkala, tepat untuk portal berita yang cukup segar per jam. SSR `no-store` menggoda karena selalu segar, tapi setiap pengunjung memaksa render baru dan server menanggung seluruh lonjakan trafik."
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
            "code": "// app/api/waktu/route.ts\nimport { NextResponse } from 'next/server';\n\nexport async function GET() {\n  return NextResponse.json({ waktu: '2026-07-29T09:00:00Z' });\n}",
            "output": "$ curl -i http://localhost:3000/api/waktu\n\nHTTP/1.1 200 OK\ncontent-type: application/json\n\n{\"waktu\":\"2026-07-29T09:00:00Z\"}\n\n$ curl -i -X POST http://localhost:3000/api/waktu\n\nHTTP/1.1 405 Method Not Allowed\nallow: GET",
            "note": "Perhatikan respons kedua: metode yang tidak kamu ekspor otomatis dijawab 405, bukan 404. Itu petunjuk cepat bahwa berkasnya ketemu tapi fungsinya belum ada. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Endpoint `app/api/status/route.ts` dipakai monitoring untuk memastikan aplikasi hidup. Buat penanganan permintaan GET di berkas itu, dan balas dengan JSON berisi satu properti `status` bernilai `ok`. Impor pembantu respons Next.js sudah tersedia di editor.",
          "starterCode": "import { NextResponse } from 'next/server';\n\n// Tulis handler-nya di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+async\\s+function\\s+GET",
              "message": "Di `route.ts`, tiap metode HTTP diekspor sebagai fungsi bernama metodenya dalam HURUF BESAR — `GET`, `POST`, `DELETE`. Nama itulah yang menentukan permintaan mana yang ditangani; menamainya `handler` seperti Pages Router lama tidak akan pernah terpanggil."
            },
            {
              "pattern": "NextResponse\\.json\\(",
              "message": "Balas dengan `NextResponse.json(...)`, yang sekaligus menyetel header `Content-Type: application/json`. Mengembalikan objek JavaScript biasa dari handler akan error."
            },
            {
              "pattern": "status\\s*:\\s*['\"]ok['\"]",
              "message": "Isi badan responsnya sesuai yang diminta monitoring. Jangan tertukar dengan status HTTP: itu diatur lewat argumen kedua, `NextResponse.json(data, { status: 201 })`."
            }
          ],
          "solution": "import { NextResponse } from 'next/server';\n\nexport async function GET() {\n  return NextResponse.json({ status: 'ok' });\n}",
          susunKode: {
            potongan: [
              "import { NextResponse } from 'next/server';",
              "export async function GET() {",
              "  return NextResponse.json({ status: 'ok' });",
              "}",
            ],
            pengecoh: [
              "export default async function GET() {",
              "  return Response.json({ status: 'ok' });",
            ],
            pemisah: "\n",
            explanation:
              "Route Handler Next.js menggunakan named export bernama kata kunci metode HTTP seperti GET. Keping export default async function GET() keliru karena Route Handler tidak membaca default export. Keping Response.json menggoda tetapi NextResponse.json menyediakan fitur tambahan khas Next.js yang disarankan untuk digunakan.",
          },
        },
        {
          "kind": "step",
          "id": "next-4-2",
          "title": "Membaca Body Request JSON",
          "explanation": "Untuk menangani pengiriman data dari klien pada HTTP `POST` atau `PUT`, kamu dapat membaca payload body JSON dengan memanggil metode `await request.json()` pada objek argumen `request: NextRequest`. Metode ini memparsing string JSON dari stream jaringan menjadi objek JavaScript yang siap diolah. Setelah data berhasil dibaca, kamu dapat melakukan mutasi database dan mengembalikan respon sukses beserta status code HTTP `201 Created`. Gunakan metode ini untuk menangani endpoint pendaftaran akun, pembuatan pesanan, atau unggah data API. Pastikan kamu selalu membungkus panggilan `request.json()` dengan blok `try/catch` untuk menangani kasus di mana klien mengirimkan string JSON yang tidak valid.",
          "example": {
            "code": "// app/api/pesan/route.ts\nexport async function POST(request: NextRequest) {\n  const isi = await request.json();\n  return NextResponse.json({ diterima: isi.teks }, { status: 201 });\n}",
            "output": "$ curl -i -X POST http://localhost:3000/api/pesan \\\n    -H 'Content-Type: application/json' \\\n    -d '{\"teks\":\"halo\"}'\n\nHTTP/1.1 201 Created\n{\"diterima\":\"halo\"}\n\nKalau body-nya bukan JSON yang sah:\nHTTP/1.1 500 Internal Server Error\nSyntaxError: Unexpected token h in JSON at position 0",
            "note": "Respons 500 di atas datang dari `request.json()` yang gagal mem-parsing, bukan dari kodemu — itulah alasan panggilan ini layak dibungkus `try/catch`. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Handler `POST` di bawah harus membaca data yang dikirim klien sebagai JSON, lalu memantulkannya kembali lewat `NextResponse.json(data)` yang sudah ada. Isi bagian yang kosong sehingga konstanta `data` benar-benar berisi objek hasil parsing badan permintaan.",
          "starterCode": "import { NextResponse } from 'next/server';\n\nexport async function POST(request) {\n  // Ekstrak body JSON di bawah ini\n  \n  return NextResponse.json(data);\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+data\\s*=\\s*await\\s+request\\.json\\(\\)",
              "message": "Badan permintaan dibaca dari objek `request`, dan hasilnya harus ditunggu — `request.json()` mengembalikan Promise. Namai hasilnya `data` supaya cocok dengan baris `return` yang sudah ada."
            },
            {
              "pattern": "await\\s+request\\.json",
              "message": "Tanpa `await`, `data` berisi Promise dan respons yang terkirim menjadi `{}` — tidak error, tapi datanya hilang. Ini bug yang mahal karena tampak berhasil."
            }
          ],
          "solution": "import { NextResponse } from 'next/server';\n\nexport async function POST(request) {\n  const data = await request.json();\n  return NextResponse.json(data);\n}",
          susunKode: {
            question:
              "Rangkai Route Handler POST yang membaca body permintaan JSON lalu mengembalikannya.",
            potongan: [
              "import { NextResponse } from 'next/server';",
              "export async function POST(request) {",
              "  const data = await request.json();",
              "  return NextResponse.json(data);",
              "}",
            ],
            pengecoh: [
              "  const data = request.json();",
              "  const data = await request.body();",
            ],
            pemisah: "\n",
            explanation:
              "Metode request.json() mengembalikan Promise yang wajib di-await saat menguraikan body permintaan. Keping const data = request.json(); sangat sering keliru ditulis tanpa await, berakibat variabel data berisi objek Promise yang belum selesai. Keping request.body() menggoda bagi pemula, padahal penguraian JSON pada Request API menggunakan metode .json().",
          },
        },
        {
          "kind": "step",
          "id": "next-4-3",
          "title": "Query Parameters & Dynamic Segment",
          "explanation": "Route Handlers dapat membaca parameter URL seperti Query Parameters (`?search=kopi`) dan Dynamic Path Parameters (`/api/users/[id]`). Query Parameters dibaca melalui properti `request.nextUrl.searchParams.get('search')`. Sedangkan Dynamic Path Parameters diambil melalui argumen kedua handler yaitu `params`. Sama seperti pada komponen halaman, `params` pada Route Handler modern berbentuk `Promise` sehingga kamu wajib menggunakan `await params` sebelum mengakses propertinya. Gunakan kombinasi ini saat membangun endpoint pencarian, filter data katalog, atau endpoint spesifik berdasarkan ID entitas.",
          "example": {
            "code": "// app/api/produk/[id]/route.ts\nexport async function GET(\n  request: NextRequest,\n  { params }: { params: Promise<{ id: string }> }\n) {\n  const { id } = await params;\n  const urut = request.nextUrl.searchParams.get('urut');\n  return NextResponse.json({ id, urut });\n}",
            "output": "$ curl 'http://localhost:3000/api/produk/42?urut=harga'\n{\"id\":\"42\",\"urut\":\"harga\"}\n\n$ curl 'http://localhost:3000/api/produk/42'\n{\"id\":\"42\",\"urut\":null}",
            "note": "Respons kedua adalah jebakan pentingnya: query yang tidak dikirim menghasilkan `null`, bukan string kosong dan bukan error. Selalu siapkan nilai bawaan. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Endpoint pencarian ini dipanggil sebagai `/api/cari?search=kopi`. Ambil nilai query bernama `search` dari objek `request`, simpan ke konstanta `searchQuery` yang sudah dipakai di baris `return`.",
          "starterCode": "import { NextResponse } from 'next/server';\n\nexport async function GET(request) {\n  // Ambil query parameter 'search' di bawah ini\n  \n  return NextResponse.json({ searchQuery });\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+searchQuery\\s*=",
              "message": "Simpan hasilnya ke konstanta bernama `searchQuery` supaya cocok dengan baris `return` yang sudah ada di editor."
            },
            {
              "pattern": "(request\\.nextUrl\\.searchParams|new\\s+URL\\(\\s*request\\.url\\s*\\)\\.searchParams)\\.get\\(\\s*['\"]search['\"]",
              "message": "Query dibaca lewat `searchParams.get('nama')`. Dua jalan sama-sama benar: `request.nextUrl.searchParams` (khas Next.js) atau `new URL(request.url).searchParams` (Web API standar). Yang tidak ada: `request.query` — itu gaya Express."
            }
          ],
          "solution": "import { NextResponse } from 'next/server';\n\nexport async function GET(request) {\n  const searchQuery = request.nextUrl.searchParams.get('search');\n  return NextResponse.json({ searchQuery });\n}",
          susunKode: {
            question:
              "Susun Route Handler GET yang mengambil parameter query 'search' dari URL permintaan.",
            potongan: [
              "import { NextResponse } from 'next/server';",
              "export async function GET(request) {",
              "  const searchQuery = request.nextUrl.searchParams.get('search');",
              "  return NextResponse.json({ searchQuery });",
              "}",
            ],
            pengecoh: [
              "  const searchQuery = request.query.get('search');",
              "  const searchQuery = request.params.search;",
            ],
            pemisah: "\n",
            explanation:
              "NextRequest pada Route Handler menyediakan properti khusus request.nextUrl.searchParams untuk membaca query string. Keping request.query.get('search') menggoda bagi developer yang terbiasa dengan Express JS, namun properti .query tidak tersedia di Next.js. Keping request.params.search keliru karena params digunakan untuk dynamic route segment, bukan query parameter.",
          },
        },
        {
          "kind": "step",
          "id": "next-4-4",
          "title": "Validasi Input dengan Zod",
          "explanation": "Data dari klien tidak boleh dipercaya: siapa pun bisa memanggil endpoint-mu dengan `curl` dan mengirim bentuk apa pun, termasuk `email: 12345` atau properti yang tidak ada. Zod memungkinkan kamu mendeklarasikan bentuk data yang diharapkan sebagai skema, lalu memeriksanya dengan `safeParse(body)` yang mengembalikan `{ success, data, error }` tanpa melempar exception. Dipakai di setiap endpoint yang menerima masukan: registrasi, checkout, webhook pembayaran. Kalau `success` bernilai `false`, balas 400 beserta rincian error dan **berhenti di situ** — jangan melanjutkan ke database. Jebakan yang sering: memakai `parse()` alih-alih `safeParse()` sehingga exception melempar 500 (server error) padahal yang salah adalah masukan pengguna (400), dan lupa bahwa validasi di client saja tidak melindungi apa pun karena bisa dilewati.",
          "example": {
            "code": "const SkemaKomentar = z.object({\n  isi: z.string().min(3),\n  bintang: z.number().min(1).max(5),\n});\n\nconst hasil = SkemaKomentar.safeParse({ isi: 'ok', bintang: 9 });\nconsole.log(hasil.success, hasil.error?.issues[0]?.message);",
            "output": "false Too big: expected number to be <=5\n\nRespons yang diterima klien:\nHTTP/1.1 400 Bad Request\n{\"error\":\"Validasi gagal\",\"detail\":{\"bintang\":[\"Too big: expected number to be <=5\"]}}",
            "note": "Kalimat persis dari Zod berbeda antar versi mayor; yang tetap sama adalah bentuknya — `success: false` plus daftar `issues` per properti. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Handler `POST` di bawah sudah memvalidasi badan permintaan dengan Zod, tetapi hasilnya belum dipakai: data tidak sah tetap lolos ke baris penyimpanan. Tambahkan penjagaan setelah `safeParse` agar permintaan yang gagal validasi langsung dibalas JSON berisi properti `error` bernilai `Invalid` dengan status HTTP yang tepat untuk kesalahan masukan.",
          "starterCode": "import { NextResponse } from 'next/server';\nimport { z } from 'zod';\n\nconst SkemaUser = z.object({ email: z.string().email() });\n\nexport async function POST(request) {\n  const body = await request.json();\n  const result = SkemaUser.safeParse(body);\n\n  // Tambahkan penjagaan di bawah ini\n\n  return NextResponse.json({ tersimpan: result.data }, { status: 201 });\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "if\\s*\\(\\s*!\\s*result\\.success\\s*\\)",
              "message": "Periksa properti `success` dari hasil `safeParse`. Tanda seru di depannya penting: yang perlu dihentikan adalah kasus GAGAL. Menuliskan `if (result.success)` justru memblokir data yang benar."
            },
            {
              "pattern": "status\\s*:\\s*400\\b",
              "message": "Masukan yang salah bentuk adalah kesalahan KLIEN, jadi status HTTP-nya 400 — bukan 500 (itu berarti servermu yang rusak) dan bukan 200 dengan pesan error di badan respons."
            },
            {
              "pattern": "error\\s*:\\s*['\"]Invalid['\"]",
              "message": "Balas dengan bentuk JSON yang konsisten, properti `error`, sesuai kontrak yang dipakai seluruh endpoint di modul ini."
            },
            {
              "pattern": "return\\s+NextResponse\\.json",
              "message": "Pakai `return` agar fungsi benar-benar berhenti. Tanpa `return`, eksekusi berlanjut ke baris penyimpanan dan data tidak sah tetap masuk database — bug keamanan yang tidak terlihat dari luar."
            }
          ],
          "solution": "import { NextResponse } from 'next/server';\nimport { z } from 'zod';\n\nconst SkemaUser = z.object({ email: z.string().email() });\n\nexport async function POST(request) {\n  const body = await request.json();\n  const result = SkemaUser.safeParse(body);\n\n  if (!result.success) {\n    return NextResponse.json({ error: 'Invalid' }, { status: 400 });\n  }\n\n  return NextResponse.json({ tersimpan: result.data }, { status: 201 });\n}",
          susunKode: {
            question:
              "Susun validasi input Zod pada Route Handler POST untuk memeriksa format email.",
            potongan: [
              "import { NextResponse } from 'next/server';\nimport { z } from 'zod';",
              "const SkemaUser = z.object({ email: z.string().email() });",
              "export async function POST(request) {",
              "  const body = await request.json();",
              "  const result = SkemaUser.safeParse(body);",
              "  if (!result.success) {",
              "    return NextResponse.json({ error: 'Invalid' }, { status: 400 });",
              "  }",
              "  return NextResponse.json({ tersimpan: result.data }, { status: 201 });",
              "}",
            ],
            pengecoh: [
              "  if (result.failed) {",
              "    return NextResponse.json({ error: 'Invalid' }, { status: 500 });",
            ],
            pemisah: "\n",
            explanation:
              "Metode safeParse dari Zod mengembalikan objek hasil yang memiliki flag boolean success. Keping if (result.failed) keliru karena Zod tidak menyediakan properti failed pada hasil safeParse. Keping status: 500 menggoda tetapi salah status code, karena kesalahan masukan klien harus menggunakan status 400 Bad Request.",
          },
        },
        {
          "kind": "step",
          "id": "next-4-5",
          "title": "Error Response yang Konsisten",
          "explanation": "Konsistensi format respon error sangat krusial agar pengembang klien (front-end / mobile developer) dapat menangani kegagalan dengan mudah. Selalu kembalikan objek JSON dengan struktur kunci yang terstandarisasi, misalnya `{ error: string, details?: any }`, disertai HTTP Status Code yang tepat (seperti `401 Unauthorized`, `404 Not Found`, atau `500 Internal Server Error`). Hindari mengembalikan pesan error dalam bentuk string teks polos atau HTML default Node.js. Terapkan standar respon error ini di seluruh Route Handler pada proyek kamu.",
          "example": {
            "code": "// app/api/faktur/[id]/route.ts\nconst faktur = await cariFaktur(id);\nif (!faktur) {\n  return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 });\n}\nreturn NextResponse.json(faktur);",
            "output": "$ curl -i http://localhost:3000/api/faktur/999\n\nHTTP/1.1 404 Not Found\ncontent-type: application/json\n\n{\"error\":\"Data tidak ditemukan\"}",
            "note": "Bentuk yang konsisten membuat kode klien cukup memeriksa satu properti (`error`) untuk semua kegagalan. Balasan berupa teks polos memaksa setiap pemanggil menebak-nebak. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Handler `GET` di bawah adalah endpoint privat, tetapi belum menolak permintaan tanpa kredensial. Balas permintaan itu dengan JSON berpesan `Unauthorized` beserta status HTTP yang berarti \"kamu belum terautentikasi\".",
          "starterCode": "export async function GET() {\n  // Kembalikan error 401 Unauthorized di bawah ini\n  \n}",
          "language": "text",
          "tests": [
            {
              "pattern": "status\\s*:\\s*401\\b",
              "message": "Belum login berarti 401. Bedakan dari 403 (sudah login, tapi tidak berhak) dan 400 (bentuk masukan salah) — tiga kode ini paling sering tertukar di code review."
            },
            {
              "pattern": "error\\s*:\\s*['\"]Unauthorized['\"]",
              "message": "Pakai properti `error` seperti endpoint lain di modul ini, supaya klien tidak perlu menangani dua bentuk balasan berbeda."
            },
            {
              "pattern": "return\\s+NextResponse\\.json",
              "message": "Balasan dikirim dengan `return NextResponse.json(...)`. Tanpa `return`, fungsi lanjut berjalan dan data rahasianya tetap terkirim."
            }
          ],
          "solution": "export async function GET() {\n  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });\n}",
          susunKode: {
            question:
              "Rangkai balasan Route Handler untuk permintaan yang belum terautentikasi, memakai bentuk JSON yang sama dengan endpoint lain di modul ini.",
            potongan: [
              "export async function GET() {",
              "  return NextResponse.json(",
              "    { error: 'Unauthorized' },",
              "    { status: 401 });",
              "}",
            ],
            pengecoh: [
              "    { err: 'Unauthorized' },",
              "    { status: 400 });",
            ],
            pemisah: "\n",
            explanation:
              "Badan respons dan opsi status adalah dua argumen berbeda: yang pertama isi JSON-nya, yang kedua status HTTP-nya. Keping err: 'Unauthorized' sering keliru ditulis karena singkatannya terasa wajar, padahal kontrak seluruh endpoint di modul ini memakai kunci error — klien yang membaca satu properti akan gagal menangkap pesannya. Keping status: 400 adalah jebakan paling umum di code review: 400 berarti bentuk masukannya salah, sedangkan belum terautentikasi adalah 401.",
          },
        },
        {
          "kind": "step",
          "id": "next-4-6",
          "title": "Custom Header & Status Code",
          "explanation": "Selain payload JSON, objek `NextResponse` mengizinkan kamu untuk menyesuaikan HTTP Response Headers dan Status Code secara terperinci. Parameter kedua dari `NextResponse.json(data, init)` menerima objek opsi di mana kamu dapat menetapkan properti `status` serta opsi `headers` (misalnya untuk menetapkan `Cache-Control` atau custom tracking header). Gunakan kustomisasi header ini saat kamu membutuhkan kontrol caching API tingkat lanjut, pengelolaan token keamanan, atau integrasi CORS dengan domain luar.",
          "example": {
            "code": "return NextResponse.json(\n  { hasil: 'ok' },\n  { headers: { 'Cache-Control': 's-maxage=60' }, status: 200 },\n);",
            "output": "$ curl -i http://localhost:3000/api/hasil\n\nHTTP/1.1 200 OK\ncache-control: s-maxage=60\ncontent-type: application/json\n\n{\"hasil\":\"ok\"}",
            "note": "Urutan properti di dalam objek opsi tidak berpengaruh — `status` boleh sebelum atau sesudah `headers`. Yang berpengaruh: keduanya harus berada di ARGUMEN KEDUA, bukan di dalam objek data. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Endpoint ini mengembalikan saldo yang berubah setiap detik, jadi tidak boleh disimpan cache oleh siapa pun di jalur perjalanan respons. Balas `{ success: true }` dengan status sukses biasa, dan tambahkan header cache yang melarang penyimpanan.",
          "starterCode": "export async function GET() {\n  // Return NextResponse dengan custom header di sini\n  \n}",
          "language": "text",
          "tests": [
            {
              "pattern": "success\\s*:\\s*true",
              "message": "Badan responsnya berisi `success: true` — nilai boolean, tanpa tanda kutip."
            },
            {
              "pattern": "status\\s*:\\s*200\\b",
              "message": "Sertakan status suksesnya secara eksplisit (200) di argumen kedua, supaya niat kodenya terbaca jelas oleh pembaca berikutnya."
            },
            {
              "pattern": "['\"]Cache-Control['\"]\\s*:\\s*['\"]no-store['\"]",
              "message": "Header ditulis sebagai properti di dalam objek `headers`. Nama headernya butuh tanda kutip karena mengandung tanda hubung, dan nilainya yang berarti \"jangan simpan sama sekali\"."
            }
          ],
          "solution": "export async function GET() {\n  return NextResponse.json({ success: true }, { status: 200, headers: { 'Cache-Control': 'no-store' } });\n}",
          susunKode: {
            question:
              "Susun balasan endpoint saldo real-time: badan JSON penanda sukses, status sukses yang eksplisit, dan header yang melarang siapa pun menyimpan responsnya.",
            potongan: [
              "export async function GET() {",
              "  return NextResponse.json({ success: true },",
              "    { status: 200,",
              "      headers: { 'Cache-Control': 'no-store' } });",
              "}",
            ],
            pengecoh: [
              "  return NextResponse.json({ success: false },",
              "      headers: { 'Cache-Control': 'no-cache' } });",
            ],
            pemisah: "\n",
            explanation:
              "Badan JSON adalah argumen pertama, sedangkan status dan headers dikumpulkan di argumen kedua. Keping success: false keliru nilai booleannya — endpoint yang membalas status 200 sambil menyatakan gagal adalah kontrak yang membingungkan klien. Keping 'no-cache' sangat menggoda karena namanya terdengar paling melarang, padahal 'no-cache' masih mengizinkan respons DISIMPAN (hanya wajib divalidasi ulang); yang benar-benar melarang penyimpanan adalah 'no-store'.",
          },
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
              "explanation": "Nama berkasnya `route.ts` — hanya berkas itu yang diperlakukan sebagai endpoint API di App Router. `api.ts` menggoda karena foldernya biasanya bernama `api`, tapi nama folder tidak menentukan apa pun di sini; yang menentukan nama berkasnya."
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
              "explanation": "`await request.json()` membaca dan mem-parsing badan permintaan. `request.body.json` menggoda karena mirip Express, dan `JSON.parse(request)` menggoda karena request terasa seperti teks — padahal badan permintaan berupa stream yang harus dibaca lewat method-nya, dan hasilnya Promise sehingga wajib di-`await`."
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
              "explanation": "Satu segmen URL tidak bisa sekaligus menjadi halaman dan endpoint, jadi `page.tsx` dan `route.ts` di folder yang sama membuat build gagal. Pilihan \"harus di folder yang sama agar terhubung\" menggoda bagi yang mengira keduanya saling melengkapi."
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
              "explanation": "Route Handler adalah pilihan saat konsumennya di luar aplikasi Next.js: aplikasi mobile, webhook, atau partner. Untuk form internal, Server Action lebih ringkas dan sudah punya proteksi CSRF — itu sebabnya pilihan form pendaftaran menggoda tapi bukan yang paling tepat."
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
              "explanation": "`NextResponse` dari `next/server` adalah pembungkus resmi yang menyetel header dan status sekaligus. Nama-nama lain di pilihan terdengar masuk akal karena mirip konvensi framework lain (Express, Nest), tapi tidak ada di Next.js."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Sebuah endpoint memakai `SkemaUser.safeParse(body)` lalu langsung menyimpan `body` ke database tanpa memeriksa hasilnya. Apa akibatnya?",
              "choices": [
                "A. Build gagal karena hasil safeParse tidak dipakai",
                "B. Zod otomatis melempar error 400 sebelum baris penyimpanan dijalankan",
                "C. Data yang tidak sah tetap masuk database, karena safeParse hanya melaporkan hasil dan tidak menghentikan apa pun",
                "D. Data otomatis dibersihkan oleh Zod sebelum disimpan"
              ],
              "answerIndex": 2,
              "explanation": "`safeParse` sengaja tidak melempar exception — ia hanya mengembalikan `{ success, data, error }`. Kalau hasilnya tidak diperiksa dan dijaga dengan `return`, validasi tidak berpengaruh sama sekali. Pilihan B menggoda karena itu perilaku `parse()` (yang melempar), bukan `safeParse()`; dan build tetap sukses, jadi bug ini lolos ke produksi tanpa peringatan."
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
          "body": "# Server Actions & Mutasi Data\n\nDi aplikasi web tradisional, untuk menyimpan data dari Form, kamu harus: membuat Form -> menulis event listener `onSubmit` -> panggil `fetch('/api/submit')` -> buat Route Handler API -> mutasi DB -> kembalikan JSON -> update state React. Alur ini sangat panjang dan melelahkan.\n\n**Server Actions** menyederhanakan alur ini secara drastis! Server Actions adalah **fungsi async yang dieksekusi di server**, tetapi dapat dipanggil secara langsung dari komponen client atau atribut `action` pada elemen `<form>`.\n\n## Model Keamanan & Direktif 'use server'\n\nKamu menandai sebuah fungsi sebagai Server Action dengan menambahkan direktif `'use server';` di baris pertama fungsi atau di baris pertama berkas khusus (misal `app/actions.ts`).\n\n```typescript\n// app/actions.ts\n'use server';\n\nimport { revalidatePath } from 'next/cache';\nimport { db } from '@/lib/db';\n\n// Signature saat dipakai bersama useActionState: (prevState, formData)\nexport async function createPost(prevState: unknown, formData: FormData) {\n  const title = formData.get('title') as string;\n  await db.post.create({ data: { title } });\n  \n  // Otomatis memperbarui cache halaman /blog di server\n  revalidatePath('/blog');\n  return { success: true };\n}\n```\n\n> **Keamanan Krusial:** Di balik layar, Next.js membuatkan endpoint POST rahasia bermuatan hash khusus. Selalu lakukan **validasi input** dan **pengecekan autentikasi session** di dalam setiap Server Action!\n\n## Integrasi React 19: `useActionState` & `useFormStatus`\n\nDi Next.js modern (React 19), penanganan status loading dan error dari Server Action dipandu oleh dua hook bawaan:\n\n1. **`useActionState`**: Membungkus Server Action untuk mengelola respon `state` (seperti pesan sukses/error) dan status `isPending` (apakah action sedang berjalan).\n> **Penting soal Signature:** Server Action yang dibungkus `useActionState` **wajib** menerima parameter `(prevState, formData)`. React 19 selalu menyuntikkan nilai state sebelumnya sebagai argumen pertama. Jika fungsimu hanya menerima `(formData: FormData)`, maka saat form dikirim parameter `formData` justru berisi `prevState` (misal `null`) dan memicu `TypeError: Cannot read properties of null` saat memanggil `.get()`!\n2. **`useFormStatus`**: Hook yang dipanggil di dalam komponen anak `<form>` untuk mengetahui apakah form tersebut sedang dalam proses pengiriman (`pending === true`). Sangat berguna untuk mendisable tombol submit!\n\n```tsx\n// ClientForm.tsx ('use client')\nimport { useActionState } from 'react';\nimport { createPost } from '@/app/actions';\n\nexport default function AddPostForm() {\n  const [state, formAction, isPending] = useActionState(createPost, null);\n\n  return (\n    <form action={formAction}>\n      <input name=\"title\" required />\n      <button disabled={isPending}>\n        {isPending ? 'Saving...' : 'Submit'}\n      </button>\n      {state?.error && <p>{state.error}</p>}\n    </form>\n  );\n}\n```\n\n## Mutasi & Revalidasi Cache: `revalidatePath` vs `revalidateTag`\n\nSetelah Server Action selesai mengubah data di database, tampilan UI di browser tidak akan berubah sampai cache server diperbarui. Panggil:\n- **`revalidatePath('/blog')`**: Membuang cache seluruh halaman pada path tersebut.\n- **`revalidateTag('posts', 'max')`**: Membuang cache data spesifik yang ditandai tag `fetch(..., { next: { tags: ['posts'] } })`. Sejak Next.js 16 argumen kedua (profil `cacheLife`, mis. `'max'`) wajib ada — bentuk satu argumen sudah deprecated dan ditandai error oleh TypeScript. Kalau kamu butuh pengguna langsung melihat hasil perubahannya sendiri (read-your-writes), pakai `updateTag()` di dalam Server Action, bukan `revalidateTag()`.\n\n## Optimistic UI dengan `useOptimistic`\n\nUntuk memberikan respon UI instan tanpa menunggu Server Action selesai di server (seperti tombol Like yang langsung merah), gunakan hook `useOptimistic`. UI diupdate secara hipotetis seketika, dan jika server gagal, React akan mengembalikan UI ke state semula secara otomatis.\n\n## Analogi Dunia Nyata\n\nServer Action seperti **Tombol Bel Pintu Cerdas**. Ketika kamu menekan tombol bel di pagar rumah (Client Form), sinyal listrik langsung membunyikan lonceng di dalam dapur rumah (Server). Kamu tidak perlu mengirim surat pos melalui kantor pos (REST API fetch) hanya untuk memberitahu tuan rumah bahwa ada tamu di depan pagar.\n\n## Jebakan & Kesalahan Umum\n\n1. **Mengabaikan Pengecekan Autentikasi**: Menganggap Server Action aman karena dipanggil dari UI internal. Ingat, endpoint di balik Server Action tetap bisa ditembak oleh penyerang jika tidak ada pengecekan `auth()`!\n2. **Mengoper Objek Non-Serializable**: Mengirimkan objek kompleks ke Server Action yang tidak bisa di-serialize.\n3. **Lupa Revalidasi**: Data di database sudah berubah, tetapi UI pengguna tidak berganti karena developer lupa memanggil `revalidatePath()`.\n\n## Kaitan ke Dunia Kerja\n\nServer Actions adalah standar utama dalam pembangunan aplikasi Next.js modern. Penguasaan Server Actions bersama React 19 hooks mempercepat kecepatan pengembangan fitur (development velocity) hingga 2x lipat dibanding pola REST API lama."
        },
        {
          "kind": "step",
          "id": "next-5-1",
          "title": "'use server' & Security Model",
          "explanation": "Server Actions didefinisikan dengan menambahkan direktif `'use server';` di baris pertama fungsi atau di bagian paling atas berkas khusus. Saat Next.js mendeteksi direktif ini, kompilator secara otomatis mengekspos fungsi tersebut sebagai endpoint HTTP POST rahasia di balik layar. Artinya, fungsi tersebut dieksekusi 100% di server dan memiliki akses langsung ke database atau API key rahasia. Namun, karena endpoint tersebut dapat dipanggil oleh siapapun yang mengetahui hash-nya, kamu wajib memperlakukan Server Action dengan standar keamanan yang sama seperti API endpoint: selalu lakukan validasi input dan otorisasi hak akses pengguna di dalam bodi fungsi.",
          "example": {
            "code": "// app/actions.ts\n'use server';\n\nimport { auth } from '@/auth';\n\nexport async function hapusPostingan(id: string) {\n  const sesi = await auth();\n  if (sesi?.user?.role !== 'admin') throw new Error('Forbidden');\n  // hapus dari database...\n}",
            "output": "Tab Network saat tombol diklik:\n\nPOST /dashboard/postingan     200   231 B\n  Next-Action: 7f2b9c1e4a...        <-- id action, bukan nama fungsimu\n  Payload: [\"clx91\"]\n\nDijalankan tanpa pengecekan role, request buatan tangan pun berhasil:\n$ curl -X POST http://localhost:3000/dashboard/postingan \\\n    -H 'Next-Action: 7f2b9c1e4a...' -d '[\"clx91\"]'\n200 OK",
            "note": "Baris `curl` itu inti pelajarannya: endpoint-nya nyata dan bisa ditembak langsung. Server Action bukan \"fungsi privat\", jadi otorisasi wajib ada di dalam fungsinya. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Fungsi `addComment` di bawah masih fungsi biasa, jadi memanggilnya dari komponen client akan gagal. Tandai berkas ini agar seluruh fungsi yang diekspor darinya dikompilasi menjadi Server Action.",
          "starterCode": "export async function addComment(formData) {\n  const text = formData.get('text');\n  return { success: true };\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "^(\\s*(//[^\\n]*|/\\*[\\s\\S]*?\\*/)\\s*)*['\"]use server['\"]",
              "flags": "i",
              "message": "Direktifnya harus berada di ATAS berkas, sebelum semua import (komentar pembuka masih boleh). Ditulis di posisi lain, direktif itu diabaikan dan pemanggilan dari client gagal dengan pesan tentang fungsi yang tidak bisa di-serialize."
            }
          ],
          "solution": "'use server';\nexport async function addComment(formData) {\n  const text = formData.get('text');\n  return { success: true };\n}",
          susunKode: {
            question:
              "Susun Server Action sederhana dengan arahan 'use server' untuk membaca masukan form.",
            potongan: [
              "'use server';",
              "export async function addComment(formData) {",
              "  const text = formData.get('text');",
              "  return { success: true };",
              "}",
            ],
            pengecoh: [
              "'use client';",
              "'use action';",
            ],
            pemisah: "\n",
            explanation:
              "Arahan 'use server' menandai fungsi agar dieksekusi di server ketika dipanggil oleh elemen form. Keping 'use client' adalah jebakan directive yang berlawanan fungsi. Keping 'use action' menggoda bagi pemula yang mengira nama arahan sesuai dengan nama fitur Server Action.",
          },
        },
        {
          "kind": "step",
          "id": "next-5-2",
          "title": "Form Handling dengan useActionState",
          "explanation": "Di Next.js (React 19), hook `useActionState` digunakan di dalam Client Component untuk menghubungkan form antarmuka dengan Server Action. Hook ini menerima dua argumen utama: fungsi Server Action dan nilai awal state (`initialState`). Hook mengembalikan array bernilai: state respon terbaru dari server, fungsi penangan form (`formAction`), dan status indikator pemrosesan (`isPending`). Server Action yang dibungkus hook ini wajib dideklarasikan menerima dua parameter `(prevState, formData)` karena React 19 otomatis menyisipkan state sebelumnya sebagai argumen pertama. Dengan mengoper `formAction` ke atribut `action` pada elemen `<form>`, form dapat terkirim dan merespons hasil kembalian dari server secara progresif tanpa melakukan muat ulang halaman. Gunakan `useActionState` untuk seluruh form interaktif yang membutuhkan penanganan pesan sukses atau pesan kesalahan dari server.",
          "example": {
            "code": "// app/komentar/Form.tsx\n'use client';\nimport { useActionState } from 'react';\nimport { kirimKomentar } from './actions';\n\nexport default function FormKomentar() {\n  const [state, formAction, isPending] = useActionState(kirimKomentar, null);\n  return (\n    <form action={formAction}>\n      <input name=\"isi\" />\n      <button disabled={isPending}>{isPending ? 'Mengirim...' : 'Kirim'}</button>\n      {state?.error && <p>{state.error}</p>}\n    </form>\n  );\n}",
            "output": "Urutan yang terlihat saat tombol Kirim diklik:\n\n1. <button disabled>Mengirim...</button>\n2. server menjalankan kirimKomentar()\n3. <button>Kirim</button>  +  <p>Komentar minimal 3 karakter</p>\n\nHalaman tidak pernah dimuat ulang; tidak ada fetch() yang kamu tulis sendiri.",
            "note": "Nilai kembalian Server Action-lah yang muncul di `state`. Pastikan fungsi Server Action di sisi server dideklarasikan menerima `(prevState, formData)` agar masukan form tidak tertukar dengan state sebelumnya. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Form di bawah sudah punya elemen dan tombolnya, tapi belum tersambung ke Server Action `createItem`. Panggil hook React 19 yang membungkus action itu dengan nilai awal state `null`, dan simpan hasilnya ke tiga variabel yang sudah dipakai di JSX (`state`, `formAction`, `isPending`).",
          "starterCode": "'use client';\nimport { useActionState } from 'react';\nimport { createItem } from './actions';\n\nexport default function Form() {\n  // Panggil hook-nya di bawah ini\n\n  return (\n    <form action={formAction}>\n      <input name=\"nama\" />\n      <button disabled={isPending}>Simpan</button>\n      {state?.error && <p>{state.error}</p>}\n    </form>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "\\[\\s*state\\s*,\\s*formAction\\s*,\\s*isPending\\s*\\]\\s*=\\s*useActionState",
              "message": "Hook ini mengembalikan array berisi TIGA hal berurutan: state balasan server, fungsi untuk atribut `action`, dan penanda sedang berjalan. Urutannya tidak bisa ditukar karena ini destructuring array, bukan object."
            },
            {
              "pattern": "useActionState\\(\\s*createItem\\s*,",
              "message": "Argumen pertamanya Server Action-nya sendiri (`createItem`) — dioper sebagai referensi, TANPA tanda kurung pemanggil. Menulis `createItem()` berarti kamu menjalankannya saat render."
            },
            {
              "pattern": "useActionState\\([^)]*,\\s*null\\s*\\)",
              "message": "Argumen kedua adalah nilai awal `state` sebelum form pernah dikirim. Di sini `null`, sehingga `state?.error` aman dipakai di JSX."
            }
          ],
          "solution": "'use client';\nimport { useActionState } from 'react';\nimport { createItem } from './actions';\n\nexport default function Form() {\n  const [state, formAction, isPending] = useActionState(createItem, null);\n\n  return (\n    <form action={formAction}>\n      <input name=\"nama\" />\n      <button disabled={isPending}>Simpan</button>\n      {state?.error && <p>{state.error}</p>}\n    </form>\n  );\n}",
          susunKode: {
            question:
              "Rangkai penggunaan hook useActionState untuk mengelola status form interaktif.",
            potongan: [
              "'use client';\nimport { useActionState } from 'react';\nimport { createItem } from './actions';",
              "export default function Form() {",
              "  const [state, formAction, isPending] = useActionState(createItem, null);",
              "  return (\n    <form action={formAction}>\n      <input name=\"nama\" />\n      <button disabled={isPending}>Simpan</button>\n      {state?.error && <p>{state.error}</p>}\n    </form>\n  );",
              "}",
            ],
            pengecoh: [
              "  const [state, formAction, isPending] = useFormState(createItem, null);",
              "  const [state, formAction] = useActionState(createItem, null);",
            ],
            pemisah: "\n",
            explanation:
              "Hook useActionState dari React mengembalikan tuple [state, formAction, isPending] untuk mengontrol eksekusi Server Action. Keping useFormState adalah nama hook lama yang sudah digantikan oleh useActionState pada React 19. Keping tanpa isPending menggoda tetapi mengabaikan penanganan status penundaan (pending status).",
          },
        },
        {
          "kind": "step",
          "id": "next-5-3",
          "title": "Pending State dengan useFormStatus",
          "explanation": "Hook `useFormStatus` dari `react-dom` memungkinkan tombol atau input di DALAM sebuah `<form>` membaca status pengiriman form induknya tanpa dioper props apa pun. Ia mengembalikan objek dengan properti boolean `pending`, yang bernilai `true` selama Server Action masih berjalan. Dipakai untuk menonaktifkan tombol submit dan mengubah labelnya menjadi indikator menunggu, sehingga pengguna tidak mengklik dua kali dan membuat data ganda. Jebakan utamanya soal posisi: hook ini hanya bekerja pada komponen ANAK dari `<form>` — dipanggil di komponen yang memuat `<form>` itu sendiri, `pending` selamanya `false` tanpa pesan error. Karena itu tombol submit biasanya dipisah menjadi komponennya sendiri.",
          "example": {
            "code": "// app/_komponen/TombolKirim.tsx\n'use client';\nimport { useFormStatus } from 'react-dom';\n\nexport function TombolKirim() {\n  const { pending } = useFormStatus();\n  return (\n    <button type=\"submit\" disabled={pending}>\n      {pending ? 'Mengirim...' : 'Kirim'}\n    </button>\n  );\n}",
            "output": "DOM sebelum diklik:\n<button type=\"submit\">Kirim</button>\n\nDOM selama action berjalan:\n<button type=\"submit\" disabled>Mengirim...</button>\n\nDOM setelah selesai:\n<button type=\"submit\">Kirim</button>",
            "note": "Atribut `disabled` benar-benar muncul di DOM — itu cara memastikan hook-nya terpasang di tempat yang benar lewat tab Elements. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Komponen `SubmitButton` di bawah dipakai di dalam sebuah `<form>` dan sudah memakai variabel `pending` di JSX-nya — perhatikan berkasnya sudah berdirektif `'use client'`, karena hook mana pun hanya hidup di Client Component. Panggil hook dari `react-dom` yang membaca status pengiriman form induk, lalu ambil properti boolean-nya sehingga tombol benar-benar nonaktif saat pengiriman berjalan.",
          "starterCode": "'use client';\nimport { useFormStatus } from 'react-dom';\n\nexport function SubmitButton() {\n  // Panggil useFormStatus di sini\n  \n  return <button disabled={pending}>{pending ? 'Loading...' : 'Simpan'}</button>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "\\{\\s*pending\\s*\\}\\s*=\\s*useFormStatus\\(\\)",
              "message": "Hook ini mengembalikan OBJEK, jadi ambil propertinya dengan destructuring object (kurawal), bukan array. Selain `pending`, objek itu juga memuat `data`, `method`, dan `action`."
            },
            {
              "pattern": "useFormStatus\\(\\s*\\)",
              "message": "`useFormStatus()` dipanggil tanpa argumen — ia menemukan form induknya sendiri lewat context. Kalau komponen ini bukan anak `<form>`, nilainya selalu `false`."
            }
          ],
          "solution": "'use client';\nimport { useFormStatus } from 'react-dom';\n\nexport function SubmitButton() {\n  const { pending } = useFormStatus();\n  return <button disabled={pending}>{pending ? 'Loading...' : 'Simpan'}</button>;\n}",
          susunKode: {
            question:
              "Rangkai komponen tombol kirim yang membaca status pengiriman form induknya, lengkap dengan penanda berkas yang dibutuhkan hook React.",
            potongan: [
              "'use client';",
              "import { useFormStatus } from 'react-dom';",
              "export function SubmitButton() {",
              "  const { pending } = useFormStatus();",
              "  return <button disabled={pending}>{pending ? 'Loading...' : 'Simpan'}</button>;",
              "}",
            ],
            pengecoh: [
              "  const { loading } = useFormStatus();",
              "  const { pending } = useFormStatus(formAction);",
            ],
            pemisah: "\n",
            explanation:
              "Hook useFormStatus diimpor dari 'react-dom' dan dipanggil tanpa argumen di dalam komponen anak elemen form. Keping const { loading } menggoda bagi yang mengira nama propertinya loading, padahal nama properti resminya adalah pending. Keping useFormStatus(formAction) keliru karena hook ini membaca status form induk secara otomatis.",
          },
        },
        {
          "kind": "step",
          "id": "next-5-4",
          "title": "Revalidasi Cache dengan revalidatePath",
          "explanation": "Setelah sebuah Server Action selesai melakukan mutasi data di database (seperti menambah produk baru atau memperbarui komentar), tampilan antarmuka halaman di browser pengguna tidak akan otomatis berubah jika halaman tersebut tersimpan di cache server. Untuk membuang cache lama dan memaksa Next.js mengambil data terbaru dari database, panggil fungsi `revalidatePath('/path-tujuan')` dari modul `next/cache` di akhir Server Action kamu. Panggilan ini akan memperbarui data halaman secara tenang di latar belakang tanpa membuat pengguna merasakan muat ulang penuh pada browser.",
          "example": {
            "code": "// app/actions.ts\n'use server';\nimport { revalidatePath } from 'next/cache';\n\nexport async function tambahProduk(formData: FormData) {\n  await db.produk.create({ data: { nama: formData.get('nama') } });\n  revalidatePath('/produk');\n}",
            "output": "Tanpa revalidatePath:\n  produk tersimpan di database, halaman /produk tetap menampilkan 12 item\n  (baru berubah setelah hard refresh atau restart server)\n\nDengan revalidatePath('/produk'):\n  GET /produk 200 in 63ms   <-- Next.js merender ulang halaman itu\n  daftar langsung menampilkan 13 item",
            "note": "Ini penyebab keluhan \"datanya masuk tapi tampilan tidak berubah\" yang paling sering. Datanya benar; yang tertinggal adalah cache halaman. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Server Action di bawah sudah mengubah data di database, tetapi halaman `/dashboard` masih menampilkan angka lama karena tersimpan di cache server. Buang cache halaman itu di akhir fungsi memakai fungsi dari `next/cache` yang sudah diimpor.",
          "starterCode": "import { revalidatePath } from 'next/cache';\n\nexport async function updateData() {\n  // Lakukan mutasi DB...\n  // Panggil revalidatePath untuk '/dashboard' di bawah ini\n  \n}",
          "language": "text",
          "tests": [
            {
              "pattern": "revalidatePath\\(\\s*['\"]/dashboard['\"]\\s*\\)",
              "message": "Sebutkan PATH halaman yang perlu disegarkan, ditulis seperti URL dan diawali garis miring. Memanggilnya tanpa argumen tidak menyegarkan apa pun."
            },
            {
              "pattern": "revalidatePath[\\s\\S]*\\}",
              "message": "Panggilan ini diletakkan setelah mutasi datanya selesai, di dalam fungsi action — bukan di komponen dan bukan sebelum data berubah, karena yang disegarkan harus versi terbaru."
            }
          ],
          "solution": "import { revalidatePath } from 'next/cache';\n\nexport async function updateData() {\n  revalidatePath('/dashboard');\n}",
          susunKode: {
            question:
              "Susun Server Action yang memanggil revalidatePath untuk memperbarui cache rute /dashboard.",
            potongan: [
              "import { revalidatePath } from 'next/cache';",
              "export async function updateData() {",
              "  revalidatePath('/dashboard');",
              "}",
            ],
            pengecoh: [
              "  revalidatePath('/home');",
              "  revalidateTag('/dashboard');",
            ],
            pemisah: "\n",
            explanation:
              "Fungsi revalidatePath diimpor dari paket 'next/cache' untuk membersihkan cache data halaman setelah mutasi pada path rute yang ditentukan. Keping '/home' keliru path target yang diminta. Keping revalidateTag('/dashboard') menggoda tetapi revalidateTag digunakan untuk tag cache data fetch, bukan path rute.",
          },
        },
        {
          "kind": "step",
          "id": "next-5-5",
          "title": "Optimistic UI dengan useOptimistic",
          "explanation": "Optimistic UI memperbarui tampilan seketika dengan asumsi mutasi di server akan berhasil, tanpa menunggu perjalanan jaringan selesai. Hook `useOptimistic` menerima nilai asli dan sebuah fungsi penggabung `(stateSekarang, nilaiBaru) => stateBerikutnya`, lalu mengembalikan nilai tampilan beserta fungsi pemicunya. Dipakai pada interaksi kecil yang hampir selalu berhasil: tombol suka, centang todo, tambah komentar. Kalau Server Action-nya gagal atau melempar error, React otomatis membuang nilai optimistik itu dan tampilan balik ke data server — jadi jangan memakainya untuk hal yang sering gagal seperti pembayaran. Jebakan yang paling sering: fungsi penggabung mengabaikan argumen keduanya (misalnya selalu `state + 1`), sehingga memicu dengan nilai 5 tetap menambah 1 dan tampilan optimistik berbeda dari hasil akhir server.",
          "example": {
            "code": "'use client';\nimport { useOptimistic } from 'react';\n\nfunction Todo({ selesai, tandaiSelesai }) {\n  const [tampil, tandaiOptimistik] = useOptimistic(\n    selesai,\n    (state, nilaiBaru) => nilaiBaru,\n  );\n  return (\n    <input\n      type=\"checkbox\"\n      checked={tampil}\n      onChange={async (e) => {\n        tandaiOptimistik(e.target.checked);\n        await tandaiSelesai(e.target.checked);\n      }}\n    />\n  );\n}",
            "output": "Klik checkbox saat jaringan lambat (throttle 3G):\n\ndetik 0.00  checkbox tercentang (nilai optimistik)\ndetik 1.80  server membalas gagal\ndetik 1.81  checkbox kembali TIDAK tercentang (React membatalkan sendiri)",
            "note": "Pembatalan otomatis itu yang membuat pola ini aman — kamu tidak perlu menulis kode rollback sendiri. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Tombol suka di bawah menerima jumlah `likes` dari server. Deklarasikan state optimistik untuk angka itu memakai hook React yang sesuai, dengan fungsi penggabung yang MENAMBAHKAN nilai yang dikirim saat pemicu dijalankan (bukan selalu menambah satu), lalu simpan hasilnya ke `optimisticLikes` dan `addOptimisticLike` yang sudah dipakai di JSX.",
          "starterCode": "'use client';\nimport { useOptimistic } from 'react';\n\nexport function LikeButton({ likes, sukai }) {\n  // Deklarasikan state optimistiknya di bawah ini\n\n  return (\n    <button onClick={() => { addOptimisticLike(1); sukai(); }}>\n      {optimisticLikes} suka\n    </button>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "\\[\\s*optimisticLikes\\s*,\\s*addOptimisticLike\\s*\\]\\s*=\\s*useOptimistic\\(",
              "message": "Hook ini mengembalikan array dua elemen: nilai yang ditampilkan, lalu fungsi pemicunya. Namai keduanya seperti yang sudah dipakai di JSX supaya tombolnya benar-benar hidup."
            },
            {
              "pattern": "useOptimistic\\(\\s*likes\\s*,",
              "message": "Argumen pertama adalah nilai ASLI dari server (`likes`). Nilai itulah yang dipakai React untuk kembali kalau mutasinya gagal."
            },
            {
              "pattern": "\\(\\s*[A-Za-z_$][\\w$]*\\s*,\\s*[A-Za-z_$][\\w$]*\\s*\\)\\s*=>\\s*[A-Za-z_$][\\w$]*\\s*\\+\\s*[A-Za-z_$][\\w$]*",
              "message": "Fungsi penggabungnya menerima DUA parameter (nilai sekarang, nilai yang dikirim pemicu) dan menjumlahkan keduanya. Nama parameter bebas, tapi jangan mengabaikan parameter kedua dengan menulis `state + 1` — kalau nanti pemicunya dipanggil dengan 5, tampilan optimistikmu akan salah."
            }
          ],
          "solution": "'use client';\nimport { useOptimistic } from 'react';\n\nexport function LikeButton({ likes, sukai }) {\n  const [optimisticLikes, addOptimisticLike] = useOptimistic(\n    likes,\n    (state, tambahan) => state + tambahan,\n  );\n\n  return (\n    <button onClick={() => { addOptimisticLike(1); sukai(); }}>\n      {optimisticLikes} suka\n    </button>\n  );\n}",
          susunKode: {
            question:
              "Susun komponen LikeButton yang menerapkan Optimistic UI menggunakan useOptimistic.",
            potongan: [
              "'use client';\nimport { useOptimistic } from 'react';",
              "export function LikeButton({ likes, sukai }) {",
              "  const [optimisticLikes, addOptimisticLike] = useOptimistic(",
              "    likes,",
              "    (state, tambahan) => state + tambahan,",
              "  );",
              "  return (\n    <button onClick={() => { addOptimisticLike(1); sukai(); }}>\n      {optimisticLikes} suka\n    </button>\n  );",
              "}",
            ],
            pengecoh: [
              "  const [optimisticLikes, addOptimisticLike] = useFormState(",
              "    (state, tambahan) => state * tambahan,",
            ],
            pemisah: "\n",
            explanation:
              "Hook useOptimistic diimpor dari paket 'react' untuk memperbarui tampilan UI secara langsung sebelum Server Action selesai. Keping useFormState adalah nama hook lain yang tidak cocok untuk pembaharuan optimistik. Keping state * tambahan keliru operasi matematika penambahan.",
          },
        },
        {
          "kind": "step",
          "id": "next-5-6",
          "title": "Penanganan Validation Error Pada Form",
          "explanation": "Saat terjadi kesalahan validasi input di Server Action (seperti format email tidak sesuai atau password terlalu pendek), hindari melempar uncaught exception (`throw error`) yang dapat merusak tampilan antarmuka pengguna. Sebaliknya, kembalikan objek balasan terstruktur yang memuat status sukses dan rincian pesan kesalahan, misalnya `return { error: 'Password minimal 8 karakter' }`. Objek balasan ini akan ditangkap oleh hook `useActionState` di Client Component sehingga pesan kesalahan dapat ditampilkan tepat di bawah bidang input yang bersangkutan. Pola ini memastikan penanganan form berjalan secara elegan dan bersahabat bagi pengguna.",
          "example": {
            "code": "// app/actions.ts\n'use server';\n\nexport async function daftar(prevState, formData: FormData) {\n  const sandi = String(formData.get('sandi') ?? '');\n  if (sandi.length < 8) {\n    return { error: 'Password minimal 8 karakter' };\n  }\n  await db.user.create({ data: { sandi: await hash(sandi) } });\n  return { sukses: true };\n}",
            "output": "Mengirim form dengan sandi \"12345\":\n  state = { error: 'Password minimal 8 karakter' }\n  form tetap terbuka, isi field lain tidak hilang\n\nMengirim form dengan sandi \"rahasia123\":\n  state = { sukses: true }",
            "note": "Bandingkan dengan `throw new Error(...)`: itu memicu `error.tsx` dan mengganti seluruh halaman, sehingga isi form yang sudah diketik pengguna hilang. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Server Action di bawah menerima `formData` dari form komentar. Kalau field `email` yang dikirim tidak memuat karakter `@`, hentikan proses dan kembalikan objek berisi properti `error` bernilai `Email tidak valid` — jangan melempar exception, karena pesannya perlu ditampilkan di bawah input tanpa merusak halaman.",
          "starterCode": "'use server';\n\nexport async function submitForm(prevState, formData) {\n  const email = String(formData.get('email') ?? '');\n  const isValid = email.includes('@');\n\n  // Hentikan dan balas pesan error di bawah ini\n\n  return { sukses: true };\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "if\\s*\\(\\s*!\\s*isValid\\s*\\)",
              "message": "Jaga kasus GAGAL-nya: `if (!isValid)`. Menulis `if (isValid)` membalik logikanya sehingga justru email yang benar yang ditolak."
            },
            {
              "pattern": "return\\s*\\{[^}]*error\\s*:\\s*['\"]Email tidak valid['\"]",
              "message": "Kembalikan objek berisi properti `error` — inilah yang dibaca `useActionState` di client lalu ditampilkan di dekat input. Boleh ditulis satu baris atau di dalam blok kurawal; keduanya diterima."
            },
            {
              "pattern": "throw\\s+new\\s+Error",
              "mustNotMatch": true,
              "message": "Jangan `throw` untuk kesalahan masukan pengguna: exception memicu `error.tsx` dan mengganti seluruh halaman, sehingga isi form yang sudah diketik hilang. Simpan `throw` untuk kondisi yang benar-benar tidak terduga."
            }
          ],
          "solution": "'use server';\n\nexport async function submitForm(prevState, formData) {\n  const email = String(formData.get('email') ?? '');\n  const isValid = email.includes('@');\n\n  if (!isValid) {\n    return { error: 'Email tidak valid' };\n  }\n\n  return { sukses: true };\n}",
          susunKode: {
            question:
              "Rangkai penanganan validasi email sederhana pada Server Action submitForm.",
            potongan: [
              "'use server';",
              "export async function submitForm(prevState, formData) {",
              "  const email = String(formData.get('email') ?? '');",
              "  const isValid = email.includes('@');",
              "  if (!isValid) {",
              "    return { error: 'Email tidak valid' };",
              "  }",
              "  return { sukses: true };",
              "}",
            ],
            pengecoh: [
              "  if (isValid) {",
              "    return { error: 'Email valid' };",
            ],
            pemisah: "\n",
            explanation:
              "Pemeriksaan validasi memeriksa kebalikan kondisi !isValid untuk mengembalikan pesan error dalam bentuk objek data. Keping if (isValid) keliru karena akan menolak email yang justru valid. Keping { error: 'Email valid' } menggoda tetapi salah teks status pesan error.",
          },
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
              "explanation": "`'use server'` menandai fungsi (atau seluruh berkas) sebagai Server Action. `'use client'` menggoda karena bentuknya kembar dan sering muncul berdampingan, padahal artinya berlawanan: satu memindahkan kode ke bundel browser, satu memastikan kode tetap di server."
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
              "explanation": "`revalidatePath('/route')` membuang cache halaman itu sehingga render berikutnya memakai data terbaru. Nama-nama lain di pilihan sengaja dibuat terdengar masuk akal — ini kelas kesalahan yang biasanya baru ketahuan saat tampilan tidak berubah meski data sudah tersimpan."
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
              "explanation": "`useOptimistic` memperbarui tampilan sebelum server membalas, dan otomatis membatalkannya kalau gagal. `useTransition` menggoda karena juga soal pending state, tapi ia hanya menandai transisi tanpa menampilkan nilai sementara; `useFormStatus` hanya melaporkan status form induk."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Sebuah Server Action memvalidasi masukan lalu memanggil `throw new Error('Email tidak valid')` ketika email salah format. Apa yang dialami pengguna?",
              "choices": [
                "A. Pesan itu muncul rapi di bawah input, form tetap terisi",
                "B. Error boundary (`error.tsx`) mengambil alih halaman, sehingga isi form yang sudah diketik hilang",
                "C. Form otomatis dikirim ulang tiga kali",
                "D. Tidak terjadi apa-apa; exception di server selalu diabaikan"
              ],
              "answerIndex": 1,
              "explanation": "Exception yang tidak tertangkap di Server Action naik ke error boundary terdekat dan mengganti seluruh tampilan segmen itu — kerja pengguna mengisi form hilang. Pilihan A menggoda karena itulah hasil yang kita INGINKAN, tapi untuk mendapatkannya action harus me-`return` objek error, bukan melempar. `throw` disimpan untuk kegagalan tak terduga seperti database mati."
            }
          ]
        }
      ]
    },
    {
      "slug": "auth",
      "title": "Autentikasi",
      "description": "Login yang benar: session, proteksi route, dan proxy (dulu middleware).",
      "topics": [
        "Konsep session vs token",
        "Auth.js (NextAuth): setup & provider",
        "Proteksi halaman di server component",
        "proxy.ts (dulu middleware) untuk guard route",
        "Role & otorisasi sederhana",
        "Menyimpan user di database"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "next-6-m1",
          "title": "Autentikasi & Route Protection di Next.js",
          "body": "# Autentikasi & Otorisasi di Next.js\n\nAutentikasi adalah proses memverifikasi **siapa pengguna tersebut** (Login), sedangkan Otorisasi adalah proses mengecek **apa saja hak akses pengguna** (Role/Permission).\n\nDi aplikasi Next.js modern, keamanan autentikasi bertumpu pada **Cookie Session berbasis HttpOnly** atau **JWT (JSON Web Token)**.\n\n## Cookie Session vs JWT Token\n\n| Fitur | Session Cookie (HttpOnly) | JWT Token |\n|---|---|---|\n| **Penyimpanan Data** | Terenkripsi di Cookie, data lengkap di DB/Redis | Memuat seluruh data user di dalam token terenkripsi |\n| **Akses JavaScript Client** | ❌ **TIDAK BISA** (Disembunyikan oleh browser dari XSS) | ⚠️ Bisa jika disimpan di LocalStorage |\n| **Keamanan dari XSS** | **Sangat Tinggi** | Rentan dicuri jika skrip jahat berjalan di client |\n| **Pencabutan Akses (Revoke)**| Sangat mudah (Hapus session dari DB) | Sulit sampai token kadaluarsa (atau butuh blacklist) |\n\n## Integrasi Auth.js (NextAuth v5)\n\n**Auth.js** (sebelumnya NextAuth) adalah solusi autentikasi standar industri untuk Next.js App Router. Auth.js mendukung login via OAuth (Google, GitHub), Magic Link, maupun Credentials (Email/Password).\n\n```typescript\n// app/api/auth/[...nextauth]/route.ts\nimport { handlers } from '@/auth';\nexport const { GET, POST } = handlers;\n```\n\n## 3 Lapisan Proteksi Route di Next.js\n\nUntuk mengamankan halaman terproteksi (seperti `/dashboard` atau `/admin`), gunakan strategi pertahanan berlapis (Defense in Depth):\n\n```text\n┌────────────────────────────────────────────────────────┐\n│ Layer 1: Proxy Guard (proxy.ts, eks middleware.ts)     │ -> Memeriksa cookie session sebelum rute diproses\n├────────────────────────────────────────────────────────┤\n│ Layer 2: Server Component Check (await auth())         │ -> Memeriksa session di level halaman sebelum render HTML\n├────────────────────────────────────────────────────────┤\n│ Layer 3: Database & Action Otorisasi (RBAC Check)      │ -> Memeriksa role === 'admin' saat mutasi dilakukan\n└────────────────────────────────────────────────────────┘\n```\n\n### 1. Proteksi Halaman di Server Component\n\n```typescript\nimport { auth } from '@/auth';\nimport { redirect } from 'next/navigation';\n\nexport default async function DashboardPage() {\n  const session = await auth();\n  if (!session) {\n    redirect('/login');\n  }\n  return <h1>Selamat datang, {session.user.name}</h1>;\n}\n```\n\n### 2. Proxy Route Guard Global (dulu bernama Middleware)\n\nGunakan berkas `proxy.ts` di root proyek untuk memblokir akses ke rute terproteksi secara terpusat tanpa perlu mengulang kode pengecekan di setiap halaman.\n\n> **Penting soal nama (Next.js 16):** berkas ini dulu bernama `middleware.ts` dengan fungsi bernama `middleware`. Sejak Next.js 16 namanya menjadi `proxy.ts` dengan fungsi `proxy`; nama lama masih jalan tapi sudah **deprecated**. Perbedaan lain: `proxy` berjalan di runtime **Node.js**, bukan Edge, dan opsi `runtime` tidak bisa diatur di berkas ini. Hampir semua tutorial yang kamu temukan di internet masih memakai nama lama.\n\n```typescript\n// proxy.ts\nimport { auth } from '@/auth';\nimport { NextResponse } from 'next/server';\n\nexport default auth((req) => {\n  const isLoggedIn = !!req.auth;\n  const isAuthRoute = req.nextUrl.pathname.startsWith('/dashboard');\n  \n  if (isAuthRoute && !isLoggedIn) {\n    return NextResponse.redirect(new URL('/login', req.url));\n  }\n});\n\nexport const config = {\n  matcher: ['/dashboard/:path*'],\n};\n```\n\n## Role-Based Access Control (RBAC)\n\nSelalu simpan informasi peran (`'admin'` vs `'user'`) di dalam objek session. Sebelum merender antarmuka rahasia atau menjalankan tindakan admin, pastikan kamu mengecek kondisi `session?.user?.role === 'admin'`.\n\n## Analogi Dunia Nyata\n\nSistem autentikasi Next.js seperti **Kartu Kunci Kamar Hotel (Keycard)**. **HttpOnly Cookie** adalah chip RFID terenkripsi di dalam kartu kunci plastik yang discan di pintu masuk gedung (Proxy) dan pintu kamar (Server Component). Kamu tidak perlu menghafal sandi rumit setiap kali membuka pintu kamar.\n\n## Jebakan & Kesalahan Umum\n\n1. **Menyimpan Token di LocalStorage**: Menyimpan token JWT di LocalStorage membuka celah keamanan besar terhadap serangan pencurian token via skrip XSS!\n2. **Hanya Melindungi UI Client**: Menyembunyikan link admin di navbar client tetapi lupa mengunci Server Action / Route Handler di server.\n3. **Lupa `config.matcher` di Proxy**: tanpa matcher, `proxy.ts` berjalan pada SETIAP request — termasuk `_next/static`, `_next/image`, dan berkas di `public/`. Selain memperlambat semuanya, logika auth di dalamnya bisa ikut memblokir CSS, JS, dan gambar sehingga halaman tampil rusak.\n4. **Mengikuti tutorial yang masih memakai `middleware.ts`**: nama itu deprecated sejak Next.js 16. Berkasnya masih jalan, jadi tidak ada error yang memberitahumu — kamu hanya menulis konvensi yang sedang dihapus.\n\n## Kaitan ke Dunia Kerja\n\nKeamanan autentikasi dan kepatuhan standar cookie (HttpOnly, SameSite, Secure) adalah syarat wajib dalam Audit Penetration Testing (PenTest) di aplikasi perbankan, finansial, dan e-commerce."
        },
        {
          "kind": "step",
          "id": "next-6-1",
          "title": "Konsep Session vs Token di Next.js",
          "explanation": "Dalam arsitektur autentikasi Next.js, menjaga keamanan data sesi pengguna adalah prioritas utama. Menyimpan token autentikasi di tempat yang dapat diakses oleh JavaScript client (seperti LocalStorage atau SessionStorage) sangat berbahaya karena rentan terhadap serangan Cross-Site Scripting (XSS). Tempat paling aman untuk menyimpan token atau ID sesi adalah di dalam **HttpOnly Cookie**. Cookie yang ditandai dengan opsi `httpOnly: true` dikirimkan secara otomatis oleh browser pada setiap HTTP request ke server, namun sama sekali tidak dapat dibaca atau dimanipulasi oleh skrip JavaScript di sisi client. Selalu gunakan opsi `httpOnly: true` dan `secure: true` pada konfigurasi cookie autentikasi aplikasi kamu.",
          "example": {
            "code": "// membaca cookie dari Console DevTools\ndocument.cookie\n\n// cookie yang dipasang server:\n//   analitik  -> httpOnly: false\n//   sesi      -> httpOnly: true",
            "output": "> document.cookie\n'analitik=a91f2c'\n\nCookie `sesi` TIDAK ikut muncul walau terkirim di setiap request —\ndi tab Application > Cookies ia terlihat dengan kolom HttpOnly bertanda centang.",
            "note": "Inilah bedanya secara praktis: skrip pihak ketiga (atau skrip jahat hasil XSS) hanya bisa membaca baris pertama. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Konfigurasi cookie sesi di bawah masih bisa dibaca JavaScript di browser, sehingga satu celah XSS cukup untuk mencuri sesi pengguna. Perbaiki flag yang menyebabkannya.",
          "starterCode": "// Konfigurasi cookie sesi — ada satu flag yang salah nilai\nconst cookieOptions = {\n  httpOnly: false,\n  secure: true,\n  sameSite: 'lax',\n};",
          "language": "text",
          "tests": [
            {
              "pattern": "cookieOptions\\s*=\\s*\\{[^}]*\\bhttpOnly\\s*:\\s*true\\b",
              "stripComments": true,
              "message": "Flag `httpOnly: true` harus berada di dalam objek `cookieOptions` supaya cookie tidak bisa dibaca `document.cookie`. Nilainya boolean, bukan string `'true'`."
            },
            {
              "pattern": "httpOnly\\s*:\\s*(?:false|!true)",
              "mustNotMatch": true,
              "stripComments": true,
              "message": "Masih ada `httpOnly: false` atau `!true` di kode. Selama nilainya tidak `true`, cookie sesi tetap terbaca skrip apa pun yang berhasil berjalan di halamanmu."
            },
            {
              "pattern": "cookieOptions\\s*=\\s*\\{[^}]*\\bsecure\\s*:\\s*true\\b",
              "stripComments": true,
              "message": "Pertahankan `secure: true` di dalam `cookieOptions` — tanpa itu cookie ikut terkirim lewat HTTP biasa dan bisa dibaca di jaringan publik."
            }
          ],
          "solution": "// Konfigurasi cookie sesi — ada satu flag yang salah nilai\nconst cookieOptions = {\n  httpOnly: true,\n  secure: true,\n  sameSite: 'lax',\n};",
          susunKode: {
            question:
              "Perbaiki konfigurasi cookieOptions agar flag httpOnly bernilai true demi keamanan sesi.",
            potongan: [
              "// Konfigurasi cookie sesi — ada satu flag yang salah nilai",
              "const cookieOptions = {",
              "  httpOnly: true,",
              "  secure: true,",
              "  sameSite: 'lax',",
              "};",
            ],
            pengecoh: [
              "  httpOnly: false,",
              "  secure: false,",
            ],
            pemisah: "\n",
            explanation:
              "Flag httpOnly: true mencegah skrip JavaScript di client membaca cookie sesi sehingga terlindung dari serangan XSS. Keping httpOnly: false sangat berbahaya karena membiarkan cookie dapat diakses oleh skrip berbahaya. Keping secure: false juga merupakan jebakan keamanan yang membiarkan cookie dikirim melalui koneksi HTTP tidak terenkripsi.",
          },
        },
        {
          "kind": "step",
          "id": "next-6-2",
          "title": "Auth.js (NextAuth v5) Setup",
          "explanation": "Auth.js (dulu NextAuth) menangani bagian autentikasi yang paling mudah salah kalau ditulis sendiri: pertukaran token OAuth, pembuatan cookie sesi terenkripsi, dan pembatalan sesi. Pemanggilan `NextAuth({ ... })` mengembalikan satu objek berisi `handlers` (dipasang di `app/api/auth/[...nextauth]/route.ts`), fungsi `auth()` untuk membaca sesi di Server Component, serta `signIn`/`signOut`. Dipakai sejak awal proyek yang punya login, karena memindahkan alur auth ke library ini jauh lebih murah daripada menambalnya setelah rilis. Daftar `providers` adalah bagian yang wajib: konfigurasi tanpa provider berhasil dikompilasi tapi halaman login tidak menampilkan satu pun cara masuk. Jebakan berikutnya: variabel `AUTH_SECRET` yang belum diisi — aplikasi jalan di dev, lalu gagal di produksi dengan pesan `MissingSecret`.",
          "example": {
            "code": "// auth.ts\nimport NextAuth from 'next-auth';\nimport Google from 'next-auth/providers/google';\n\nexport const { handlers, auth, signIn, signOut } = NextAuth({\n  providers: [Google],\n});",
            "output": "$ npm run dev\n GET /api/auth/signin 200 in 88ms   <-- halaman login bawaan Auth.js\n\nTanpa AUTH_SECRET di .env.local, produksi menolak:\n[auth][error] MissingSecret: Please define a `secret`.\n\nTanpa entri di providers: halaman login terbuka, tapi tidak ada tombol masuk.",
            "note": "Perhatikan `[...nextauth]` pada nama folder route-nya: itu catch-all, karena Auth.js memakai beberapa sub-path (`/signin`, `/callback`, `/signout`) sekaligus. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Berkas `auth.ts` di bawah harus menyiapkan Auth.js dengan satu cara masuk lewat GitHub (modulnya sudah diimpor). Panggil `NextAuth` dengan daftar provider yang berisi GitHub, lalu ekspor hasilnya lewat destrukturisasi sehingga `handlers` dan `auth` bisa dipakai berkas lain.",
          "starterCode": "import NextAuth from 'next-auth';\nimport GitHub from 'next-auth/providers/github';\n\n// Ekspor hasil pemanggilan NextAuth di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+const\\s+\\{[^}]*\\bhandlers\\b[^}]*\\}\\s*=\\s*NextAuth\\(",
              "message": "`handlers` wajib ikut diekspor — objek itulah yang dipasang di `app/api/auth/[...nextauth]/route.ts`. Tanpa itu, seluruh alur callback OAuth tidak punya endpoint."
            },
            {
              "pattern": "export\\s+const\\s+\\{[^}]*\\bauth\\b[^}]*\\}",
              "message": "Ekspor juga `auth`, fungsi yang dipakai Server Component untuk membaca sesi. Boleh sekaligus mengekspor `signIn` dan `signOut` di kurawal yang sama."
            },
            {
              "pattern": "providers\\s*:\\s*\\[\\s*GitHub",
              "message": "Isi `providers` dengan modul provider yang sudah diimpor. Konfigurasi tanpa provider tetap lolos build, tapi halaman login tidak menampilkan cara masuk apa pun."
            }
          ],
          "solution": "import NextAuth from 'next-auth';\nimport GitHub from 'next-auth/providers/github';\n\nexport const { handlers, auth, signIn, signOut } = NextAuth({\n  providers: [GitHub],\n});",
          susunKode: {
            question:
              "Rangkai inisialisasi Auth.js v5 dengan provider GitHub.",
            potongan: [
              "import NextAuth from 'next-auth';",
              "import GitHub from 'next-auth/providers/github';",
              "export const { handlers, auth, signIn, signOut } = NextAuth({",
              "  providers: [GitHub],",
              "});",
            ],
            pengecoh: [
              "export const { authHandler, auth } = NextAuth({",
              "  providers: { GitHub },",
            ],
            pemisah: "\n",
            explanation:
              "Auth.js v5 mengembalikan objek yang didestrukturisasi menjadi helper handlers, auth, signIn, dan signOut. Keping authHandler keliru nama properti ekspor resmi handlers. Keping providers: { GitHub } keliru sintaks karena daftar provider harus dibungkus dalam array.",
          },
        },
        {
          "kind": "step",
          "id": "next-6-3",
          "title": "Proteksi Halaman di Server Component",
          "explanation": "Untuk melindungi halaman khusus pengguna terdaftar (seperti `/dashboard` atau `/settings`) di Server Component, kamu cukup memanggil fungsi `await auth()` di bagian atas komponen. Fungsi ini membaca cookie session yang dikirimkan browser dan mengembalikan objek `session` pengguna. Jika pengguna belum login (`session === null`), panggil fungsi `redirect('/login')` dari modul `next/navigation`. Fungsi `redirect()` akan memicu HTTP redirect seketika dari server sebelum komponen sempat merender markup HTML rahasia ke browser. Terapkan pola ini pada seluruh halaman terproteksi di aplikasi kamu.",
          "example": {
            "code": "// app/pengaturan/page.tsx\nimport { auth } from '@/auth';\nimport { redirect } from 'next/navigation';\n\nexport default async function Pengaturan() {\n  const sesi = await auth();\n  if (!sesi) {\n    redirect('/login?next=/pengaturan');\n  }\n  return <h1>Halo, {sesi.user?.name}</h1>;\n}",
            "output": "Pengunjung tanpa cookie sesi:\n$ curl -i http://localhost:3000/pengaturan\nHTTP/1.1 307 Temporary Redirect\nlocation: /login?next=/pengaturan\n\nBadan responsnya kosong — nama pengguna dan isi halaman tidak pernah dikirim.",
            "note": "`redirect()` bekerja dengan melempar sinyal khusus ke dalam, jadi jangan membungkusnya dengan `try/catch` — kalau tertangkap, halaman rahasianya justru lanjut dirender. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Halaman `Dashboard` di bawah sudah membaca sesi, tapi belum menolak pengunjung yang belum login: HTML rahasianya tetap terkirim. Tambahkan penjagaan agar pengunjung tanpa sesi dialihkan ke `/login` sebelum apa pun dirender.",
          "starterCode": "import { auth } from '@/auth';\nimport { redirect } from 'next/navigation';\n\nexport default async function Dashboard() {\n  const session = await auth();\n  // Tambahkan proteksi di bawah ini\n  \n  return <h1>Rahasia</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "if\\s*\\(\\s*!\\s*session\\s*\\)[\\s\\S]*redirect\\(\\s*['\"]/login['\"]\\s*\\)[\\s\\S]*return",
              "stripComments": true,
              "message": "Jaga kasus \"tidak ada sesi\" sebelum merender konten — panggil `if (!session) redirect('/login')` sebelum `return`, agar konten rahasia tidak sempat dikirim ke pengunjung anonim."
            },
            {
              "pattern": "return[\\s\\S]*if\\s*\\(\\s*!\\s*session\\s*\\)",
              "mustNotMatch": true,
              "stripComments": true,
              "message": "Jangan meletakkan `return` sebelum pengecekan sesi. Kode setelah `return` tidak akan pernah dieksekusi sehingga halaman rahasia tetap lolos ke pengunjung tanpa login."
            }
          ],
          "solution": "import { auth } from '@/auth';\nimport { redirect } from 'next/navigation';\n\nexport default async function Dashboard() {\n  const session = await auth();\n  if (!session) redirect('/login');\n  return <h1>Rahasia</h1>;\n}",
          susunKode: {
            question:
              "Susun proteksi halaman rute rahasia yang mengalihkan pengguna ke /login jika belum ada sesi.",
            potongan: [
              "import { auth } from '@/auth';",
              "import { redirect } from 'next/navigation';",
              "export default async function Dashboard() {",
              "  const session = await auth();",
              "  if (!session) redirect('/login');",
              "  return <h1>Rahasia</h1>;",
              "}",
            ],
            pengecoh: [
              "  if (session) redirect('/login');",
              "  if (!session) redirect('/dashboard');",
            ],
            pemisah: "\n",
            explanation:
              "Fungsi redirect dipanggil saat pengondisian !session bernilai true untuk mengamankan halaman dari akses anonim sebelum merender return markup rahasia. Keping if (session) redirect menggoda tetapi salah logika karena justru mengalihkan pengguna yang sudah berhasil login. Keping redirect('/dashboard') keliru target rute pengalihan.",
          },
        },
        {
          "kind": "step",
          "id": "next-6-4",
          "title": "proxy.ts (dulu middleware.ts) untuk Route Guard Global",
          "explanation": "Selain mengecek sesi di setiap komponen halaman, Next.js punya satu berkas khusus di root proyek yang berjalan SEBELUM rute mana pun diproses — cocok untuk penjagaan terpusat. **Namanya berubah di Next.js 16:** dulu `middleware.ts` dengan fungsi `middleware`, sekarang `proxy.ts` dengan fungsi `proxy`; nama lama masih bekerja tapi sudah deprecated, jadi hampir semua tutorial yang kamu temukan memakai istilah yang sedang dihapus. Perbedaan penting lainnya: `proxy` berjalan di runtime **Node.js** (bukan Edge seperti middleware dulu), dan opsi `runtime` tidak bisa diatur di berkas ini. Jangkauannya diatur lewat named export `config` berisi `matcher` — tanpa itu berkas ini jalan untuk SETIAP permintaan, termasuk `_next/static`, `_next/image`, dan isi folder `public/`, sehingga logika auth-mu bisa ikut memblokir CSS dan gambar sendiri. Jebakan terakhir: ini lapisan pertama, bukan satu-satunya — ia hanya melihat ada-tidaknya cookie, jadi verifikasi isi sesi tetap wajib di Server Component atau Server Action.",
          "example": {
            "code": "// proxy.ts (di root proyek, sejajar package.json)\nimport { NextResponse } from 'next/server';\nimport type { NextRequest } from 'next/server';\n\nexport function proxy(request: NextRequest) {\n  const punyaSesi = request.cookies.has('authjs.session-token');\n  if (!punyaSesi) {\n    return NextResponse.redirect(new URL('/login', request.url));\n  }\n  return NextResponse.next();\n}\n\nexport const config = { matcher: ['/admin/:path*'] };",
            "output": "$ curl -i http://localhost:3000/admin/pengguna\nHTTP/1.1 307 Temporary Redirect\nlocation: http://localhost:3000/login\n\n$ curl -i http://localhost:3000/            <-- di luar matcher\nHTTP/1.1 200 OK\n\nTanpa config.matcher, proxy juga jalan untuk /favicon.ico dan /_next/static/*.",
            "note": "Kalau kamu masih memakai `middleware.ts`, berkasnya tetap berjalan — tidak ada error yang memberitahu bahwa namanya sudah deprecated. Ganti nama berkas dan nama fungsinya menjadi `proxy` sekarang, sebelum nama lama benar-benar dihapus. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Berkas penjaga rute global di bawah masih memakai nama fungsi generasi lama, dan saat ini berjalan untuk SETIAP permintaan — termasuk gambar dan berkas statis. Perbaiki dua hal: pakai nama fungsi yang berlaku di Next.js 16, lalu batasi jangkauannya hanya ke `/dashboard` beserta seluruh sub-path-nya lewat konstanta konfigurasi yang dibaca Next.js.",
          "starterCode": "// proxy.ts\nimport { NextResponse } from 'next/server';\n\n// nama fungsi ini konvensi lama — perbaiki\nexport function middleware(request) {\n  return NextResponse.next();\n}\n\n// Batasi jangkauannya di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+(default\\s+)?(async\\s+)?function\\s+proxy\\s*\\(",
              "stripComments": true,
              "message": "Sejak Next.js 16 fungsinya bernama `proxy`, bukan `middleware`. Berkas `proxy.ts` yang mengekspor fungsi bernama `middleware` tidak dikenali — dan nama lama sendiri sudah deprecated."
            },
            {
              "pattern": "export\\s+const\\s+config\\s*=",
              "stripComments": true,
              "message": "Next.js membaca jangkauannya dari named export bernama tepat `config`. Tanpa `export`, objeknya diabaikan dan berkas ini tetap jalan untuk semua path."
            },
            {
              "pattern": "matcher\\s*:\\s*(?:\\[[^\\]]*['\"]/dashboard/:path\\*['\"]|['\"]/dashboard/:path\\*['\"])",
              "stripComments": true,
              "message": "Isi `matcher` dengan string atau array pola path `'/dashboard/:path*'`. Pola ini mencakup `/dashboard` beserta `/dashboard/laporan` dan seterusnya; menuliskannya hanya sebagai `'/dashboard'` membuat sub-halamannya lolos tanpa penjagaan."
            },
            {
              "pattern": "export\\s+(default\\s+)?(async\\s+)?function\\s+middleware",
              "mustNotMatch": true,
              "stripComments": true,
              "message": "Masih ada `export function middleware` di kode. Konvensi itu deprecated sejak Next.js 16 — ganti namanya menjadi `proxy`, jangan menambahkan fungsi baru di sebelahnya."
            }
          ],
          "solution": "// proxy.ts\nimport { NextResponse } from 'next/server';\n\nexport function proxy(request) {\n  return NextResponse.next();\n}\n\nexport const config = { matcher: ['/dashboard/:path*'] };",
          susunKode: {
            question:
              "Rangkai berkas penjaga rute global Next.js 16 yang hanya berjalan pada /dashboard beserta seluruh sub-rutenya.",
            potongan: [
              "// proxy.ts",
              "import { NextResponse } from 'next/server';",
              "export function proxy(request) {",
              "  return NextResponse.next();",
              "}",
              "export const config = { matcher: ['/dashboard/:path*'] };",
            ],
            pengecoh: [
              "export function middleware(request) {",
              "export const config = { pattern: ['/dashboard/:path*'] };",
            ],
            pemisah: "\n",
            explanation:
              "Berkas penjaga rute di Next.js 16 bernama proxy.ts dan fungsinya bernama proxy, dilengkapi named export config berisi properti matcher. Keping export function middleware(request) sangat menggoda karena hampir semua tutorial dan jawaban Stack Overflow masih memakai nama itu, padahal konvensi tersebut sudah deprecated sejak Next.js 16. Keping pattern: [...] sering keliru dipakai karena terdengar seperti istilah pencocokan pola, padahal nama kunci konfigurasi yang dibaca Next.js adalah matcher.",
          },
        },
        {
          "kind": "step",
          "id": "next-6-5",
          "title": "Role & Otorisasi Sederhana",
          "explanation": "Autentikasi menjawab \"siapa kamu\", otorisasi menjawab \"apa yang boleh kamu lakukan\". Peran pengguna biasanya disimpan di objek sesi (`session.user.role`), lalu diperiksa sebelum halaman atau tindakan sensitif dijalankan. Dipakai di semua area admin: manajemen pengguna, laporan keuangan, penghapusan data. Optional chaining (`?.`) dipakai karena `session` bisa `null` dan `user` bisa tanpa `role` — tanpa itu, pengunjung anonim justru memicu TypeError, bukan penolakan yang rapi. Jebakan besarnya: penjagaan di komponen halaman hanya menyembunyikan TAMPILAN. Kalau Server Action atau Route Handler yang mengubah data tidak diperiksa juga, pengguna biasa tetap bisa memanggilnya langsung — persis alasan `next-5-1` menekankan otorisasi di dalam action.",
          "example": {
            "code": "// app/admin/laporan/page.tsx\nconst sesi = await auth();\nif (sesi?.user?.role !== 'admin') {\n  return <p>Forbidden</p>;\n}\nreturn <TabelKeuangan />;",
            "output": "Pengguna dengan role 'user':\n  <p>Forbidden</p>\n\nPengguna dengan role 'admin':\n  <table class=\"keuangan\">...</table>\n\nPengguna 'user' menembak endpointnya langsung tanpa penjagaan di action:\n$ curl -X POST .../dashboard -H 'Next-Action: ...' -> 200 OK   (data terhapus!)",
            "note": "Baris terakhir sengaja ditampilkan: penjagaan di halaman tidak melindungi mutasi data. Setiap Server Action perlu pengecekan sendiri. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Halaman admin di bawah sudah membaca sesi. Tolak siapa pun yang perannya bukan `admin` dengan menampilkan elemen `p` bertuliskan `Forbidden`, dan pastikan penolakan itu terjadi sebelum data rahasianya dirender. Ingat bahwa `session` bisa bernilai `null`.",
          "starterCode": "export default async function AdminPanel() {\n  const session = await auth();\n  // Tulis proteksi role di bawah ini\n  \n  return <h1>Data Rahasia Admin</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "session\\?\\.user\\?\\.role|session\\?\\.user\\.role",
              "message": "Bacalah `role` lewat optional chaining, karena `session` bernilai `null` untuk pengunjung anonim. Menulis `session.user.role` langsung membuat halaman ini melempar TypeError alih-alih menolak dengan rapi."
            },
            {
              "pattern": "!==\\s*['\"]admin['\"]|===\\s*['\"]admin['\"]",
              "message": "Bandingkan perannya dengan string `'admin'`. Membandingkan dengan `!= 'admin'` (dua tanda sama dengan) juga bekerja, tapi di TypeScript gunakan pembanding ketat."
            },
            {
              "pattern": "return\\s*\\(?\\s*<p[^>]*>\\s*Forbidden\\s*</p>",
              "message": "Kembalikan elemen `p` bertuliskan `Forbidden` dan hentikan fungsi di situ dengan `return`. Boleh dibungkus tanda kurung atau blok kurawal — yang penting baris di bawahnya tidak ikut dijalankan."
            }
          ],
          "solution": "export default async function AdminPanel() {\n  const session = await auth();\n  if (session?.user?.role !== 'admin') return <p>Forbidden</p>;\n  return <h1>Data Rahasia Admin</h1>;\n}",
          susunKode: {
            question:
              "Rangkai otorisasi berbasis peran (RBAC) yang menolak akses jika peran pengguna bukan admin.",
            potongan: [
              "export default async function AdminPanel() {",
              "  const session = await auth();",
              "  if (session?.user?.role !== 'admin') return <p>Forbidden</p>;",
              "  return <h1>Data Rahasia Admin</h1>;",
              "}",
            ],
            pengecoh: [
              "  if (session?.user?.role === 'guest') return <p>Forbidden</p>;",
              "  if (session?.user?.role !== 'admin') return <span>Forbidden</span>;",
            ],
            pemisah: "\n",
            explanation:
              "Pengondisian memasang pemeriksaan !== 'admin' dengan optional chaining agar aman dari TypeError ketika objek user tidak ada. Keping === 'guest' menggoda tetapi salah logika karena hanya memblokir tamu padahal role lain juga bukan admin. Keping return <span>Forbidden</span> keliru tag HTML yang dipersyaratkan.",
          },
        },
        {
          "kind": "step",
          "id": "next-6-6",
          "title": "Menyimpan User di Database (Adapter)",
          "explanation": "Secara default, Auth.js menyimpan data sesi di dalam token JWT terenkripsi tanpa membutuhkan database. Namun, jika kamu ingin menyimpan data pengguna, riwayat login, atau menghubungkan akun OAuth ke tabel database kamu sendiri (seperti PostgreSQL via Prisma ORM), kamu memerlukan Database Adapter. Dengan menggunakan paket `@auth/prisma-adapter` dan menambahkan opsi `adapter: PrismaAdapter(prisma)` di konfigurasi Auth.js, pengguna yang login via OAuth (seperti Google atau GitHub) akan otomatis didaftarkan ke dalam tabel database kamu. Gunakan adapter ini jika aplikasi kamu membutuhkan penyimpanan profil pengguna tingkat lanjut.",
          "example": {
            "code": "// auth.ts\nimport NextAuth from 'next-auth';\nimport Google from 'next-auth/providers/google';\nimport { PrismaAdapter } from '@auth/prisma-adapter';\nimport { prisma } from '@/lib/prisma';\n\nexport const { handlers, auth } = NextAuth({\n  adapter: PrismaAdapter(prisma),\n  providers: [Google],\n  session: { strategy: 'database' },\n});",
            "output": "$ npx prisma migrate dev --name auth\n\nThe following migration(s) have been applied:\n  20260729_auth/migration.sql\n\n$ npx prisma studio\nUser                 1 row\nAccount              1 row   (provider: google)\nSession              1 row\nVerificationToken    0 rows",
            "note": "Adapter menuntut skema tabel tertentu (User, Account, Session, VerificationToken). Menambahkannya tanpa menjalankan migrasi menghasilkan error \"table does not exist\" pada percobaan login pertama. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Konfigurasi Auth.js di bawah masih menyimpan sesi hanya di dalam token, sehingga kamu tidak punya tabel pengguna sendiri untuk menambahkan kolom seperti `role` atau `saldo`. Sambungkan konfigurasi itu ke database lewat adapter Prisma yang sudah diimpor, memakai instansi `prisma` yang tersedia.",
          "starterCode": "import NextAuth from 'next-auth';\nimport { PrismaAdapter } from '@auth/prisma-adapter';\nimport prisma from './db';\n\nexport const { handlers, auth } = NextAuth({\n  providers: [],\n  // Tambahkan properti adapter di bawah ini\n  \n});",
          "language": "text",
          "tests": [
            {
              "pattern": "adapter\\s*:\\s*PrismaAdapter\\(\\s*prisma\\s*\\)",
              "message": "Properti `adapter` menerima HASIL pemanggilan `PrismaAdapter(prisma)` — jadi ada tanda kurung dan instansi client-nya dioper masuk. Menulis `adapter: PrismaAdapter` (tanpa memanggil) membuat Auth.js gagal saat login pertama."
            }
          ],
          "solution": "import NextAuth from 'next-auth';\nimport { PrismaAdapter } from '@auth/prisma-adapter';\nimport prisma from './db';\n\nexport const { handlers, auth } = NextAuth({\n  providers: [],\n  adapter: PrismaAdapter(prisma),\n});",
          susunKode: {
            question:
              "Susun konfigurasi adapter Prisma pada Auth.js.",
            potongan: [
              "import NextAuth from 'next-auth';",
              "import { PrismaAdapter } from '@auth/prisma-adapter';",
              "import prisma from './db';",
              "export const { handlers, auth } = NextAuth({",
              "  providers: [],",
              "  adapter: PrismaAdapter(prisma),",
              "});",
            ],
            pengecoh: [
              "  adapter: PrismaAdapter,",
              "  adapter: new PrismaAdapter(prisma),",
            ],
            pemisah: "\n",
            explanation:
              "Properti adapter diisi dengan hasil pemanggilan fungsi PrismaAdapter(prisma). Keping adapter: PrismaAdapter keliru karena mengoper referensi fungsi tanpa memanggil instansinya dengan argumen prisma. Keping new PrismaAdapter(prisma) menggoda tetapi PrismaAdapter adalah fungsi pabrik (factory function), bukan kelas konstruktor.",
          },
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
              "explanation": "`redirect()` dari `next/navigation` mengirim HTTP redirect dari server, jadi HTML rahasianya tidak pernah terkirim. `useNavigate` dan `push` menggoda karena keduanya nyata di React Router dan di `useRouter` Next.js — tapi keduanya hook client, dan hook tidak bisa dipakai di Server Component."
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
              "explanation": "HttpOnly Cookie tetap terkirim otomatis ke server tapi tidak bisa dibaca `document.cookie`, sehingga skrip XSS tidak bisa mencurinya. Local Storage dan Session Storage menggoda karena mudah dipakai dan sering dipakai di tutorial lama — keduanya justru terbuka penuh untuk skrip apa pun di halaman itu."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Apa fungsi berkas `proxy.ts` (yang sebelum Next.js 16 bernama `middleware.ts`) pada aplikasi Next.js, khususnya terkait autentikasi?",
              "choices": [
                "Menampilkan loading spinner animasi saat perpindahan halaman",
                "Menggantikan fungsi database untuk menyimpan data user",
                "Sebagai penjaga pintu global yang bisa mengecek sesi user sebelum request dari browser sampai ke halaman spesifik",
                "Menerjemahkan bahasa (i18n) teks di dalam HTML"
              ],
              "answerIndex": 2,
              "explanation": "`proxy.ts` berjalan sebelum rute diproses, jadi ia cocok memblokir akses ke sekelompok rute tanpa mengulang kode di setiap halaman. Dua hal yang perlu diingat: sejak Next.js 16 ia berjalan di runtime Node.js (bukan Edge seperti `middleware.ts` dulu), dan tanpa `config.matcher` ia juga berjalan untuk berkas statis — memperlambat semuanya dan berpotensi memblokir CSS serta gambar sendiri. Ia juga hanya lapisan pertama; verifikasi sesi tetap wajib di Server Component."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Seorang pengguna dilaporkan menyalahgunakan akun dan aksesnya harus dicabut SEKARANG. Strategi sesi mana yang membuat pencabutan itu langsung berlaku?",
              "choices": [
                "A. JWT tanpa database, karena token bisa langsung dihapus dari browser pengguna",
                "B. Session berbasis database (lewat adapter), karena barisnya cukup dihapus dan cookie lama menjadi tidak berarti",
                "C. Keduanya sama saja, karena cookie selalu diperiksa ke database",
                "D. JWT, karena token otomatis kedaluwarsa setiap kali halaman dimuat"
              ],
              "answerIndex": 1,
              "explanation": "Sesi database bisa dicabut seketika: hapus barisnya, dan cookie yang masih dipegang pengguna tidak lagi cocok dengan apa pun. JWT menggoda karena terasa lebih modern dan tanpa query, tapi token yang sudah diterbitkan tetap sah sampai kedaluwarsa — mencabutnya butuh daftar blokir tersendiri. Pilihan A salah paham arah: server tidak bisa menghapus apa pun dari browser orang lain."
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
              "explanation": "Auth.js (NextAuth) adalah pustaka autentikasi yang paling umum dipakai di ekosistem Next.js. Passport.js menggoda karena standar lama di Node/Express, sedangkan Firebase Auth dan Clerk adalah layanan pihak ketiga berbayar/berbasis akun — bukan pustaka bawaan ekosistem ini."
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
            "code": "import Image from 'next/image';\n\n// gambar utama halaman: matikan lazy-load dengan priority\n<Image src=\"/hero.jpg\" alt=\"Panen kopi Gayo\" width={1200} height={600} priority />",
            "output": "HTML yang benar-benar dikirim ke browser:\n\n<img alt=\"Panen kopi Gayo\" loading=\"eager\" width=\"1200\" height=\"600\"\n  src=\"/_next/image?url=%2Fhero.jpg&w=1920&q=75\"\n  srcset=\"/_next/image?url=%2Fhero.jpg&w=640&q=75 640w,\n          /_next/image?url=%2Fhero.jpg&w=1080&q=75 1080w,\n          /_next/image?url=%2Fhero.jpg&w=1920&q=75 1920w\"\n  style=\"color:transparent\">",
            "note": "`srcset` dan konversi WebP itu yang kamu dapat gratis: browser memilih ukuran yang pas, bukan mengunduh gambar 3 MB untuk layar ponsel. Tanpa `priority`, atribut `loading` bernilai `lazy`. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Header di bawah harus menampilkan banner dari `public/banner.png` berukuran 800x400 dengan teks alternatif `Banner`. Pakai komponen gambar Next.js (sudah diimpor) supaya gambarnya dikompresi otomatis dan ruangnya sudah dipesan sebelum gambar selesai diunduh.",
          "starterCode": "import Image from 'next/image';\n\nexport default function Header() {\n  return (\n    <header>\n      {/* Tulis elemen Image di bawah ini */}\n      \n    </header>\n  );\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s+Image\\s+from\\s*[\"']next/image[\"']",
              "stripComments": true,
              "message": "Impor dulu `Image` dari `next/image`. Tanpa impor, `<Image>` dianggap tag HTML tak dikenal."
            },
            {
              "pattern": "<Image\\b[^>]*\\bsrc=[\"']/banner\\.png[\"']",
              "stripComments": true,
              "message": "Pakai komponen `<Image>` dengan `src=\"/banner.png\"` (garis miring di depan berarti folder public)."
            },
            {
              "pattern": "<Image\\b[^>]*\\balt=[\"']Banner[\"']",
              "stripComments": true,
              "message": "Atribut `alt=\"Banner\"` wajib dipasang langsung pada komponen `<Image>` — `next/image` menolak render tanpa `alt`, dan itu juga syarat aksesibilitas."
            },
            {
              "pattern": "<Image\\b(?=[^>]*\\bwidth=\\{\\s*800\\s*\\})(?=[^>]*\\bheight=\\{\\s*400\\s*\\})[^>]*\\/?>",
              "stripComments": true,
              "message": "Sertakan `width={800}` dan `height={400}` (angka di dalam kurawal) langsung pada komponen `<Image>`. Tanpa keduanya Next.js melempar error karena rasio aspek tidak diketahui. Urutan atribut bebas."
            }
          ],
          "solution": "import Image from 'next/image';\n\nexport default function Header() {\n  return (\n    <header>\n      <Image src=\"/banner.png\" alt=\"Banner\" width={800} height={400} />\n    </header>\n  );\n}",
          susunKode: {
            question:
              "Rangkai pemakaian komponen Image dari next/image dengan properti dimensi lengkap.",
            potongan: [
              "import Image from 'next/image';",
              "export default function Header() {",
              "  return (",
              "    <header>",
              "      <Image src=\"/banner.png\" alt=\"Banner\" width={800} height={400} />",
              "    </header>",
              "  );",
              "}",
            ],
            pengecoh: [
              "      <img src=\"/banner.png\" alt=\"Banner\" width={800} height={400} />",
              "      <Image src=\"/banner.png\" alt=\"Banner\" width=\"800\" height=\"400\" />",
            ],
            pemisah: "\n",
            explanation:
              "Komponen Image diimpor secara default dari 'next/image' untuk melakukan optimasi otomatis seperti pemformatan WebP dan pencegahan CLS. Keping tag HTML biasa <img> menggoda tetapi tidak mendapat keunggulan optimasi otomatis Next.js. Keping width=\"800\" keliru tipe data karena width dan height pada komponen Image menerima angka (number).",
          },
        },
        {
          "kind": "step",
          "id": "next-7-2",
          "title": "next/font Mencegah Layout Shift",
          "explanation": "Modul `next/font` mengunduh berkas font (seperti Google Fonts) pada saat pembentukan build produksi dan menginjeksinya secara lokal di server aplikasi kamu. Pendekatan ini menghilangkan panggilan jaringan eksternal ke server Google saat runtime, sehingga tidak ada kedipan pergantian font (Flash of Unstyled Text / FOUT) saat pengguna membuka halaman. Selain itu, Next.js secara otomatis menghitung ukuran fallback font untuk memastikan nol pergeseran tata letak (Zero Layout Shift). Gunakan `next/font` untuk mengonfigurasi seluruh tipografi font di proyek kamu demi skor Core Web Vitals yang sempurna.",
          "example": {
            "code": "// app/layout.tsx\nimport { Poppins } from 'next/font/google';\n\nconst poppins = Poppins({\n  subsets: ['latin'],\n  weight: ['400', '700'],\n  display: 'swap',\n});\n\nexport default function RootLayout({ children }) {\n  return <html><body className={poppins.className}>{children}</body></html>;\n}",
            "output": "HTML hasil render:\n<body class=\"__className_36bd41\">\n\n<head> berisi berkas font yang di-host sendiri:\n<link rel=\"preload\" href=\"/_next/static/media/a1b2c3.p.woff2\" as=\"font\"\n      type=\"font/woff2\" crossorigin>\n\nTab Network: TIDAK ada permintaan ke fonts.googleapis.com",
            "note": "Baris terakhir itu intinya: fontnya diunduh saat build lalu disajikan dari domainmu sendiri, jadi tidak ada perjalanan jaringan ke Google saat pengguna membuka halaman. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Layout di bawah sudah memakai `inter.className`, tetapi konstanta `inter` belum pernah dibuat. Konfigurasikan font Inter yang sudah diimpor dengan subset huruf latin, dan simpan hasilnya ke konstanta bernama `inter`.",
          "starterCode": "import { Inter } from 'next/font/google';\n\n// Konfigurasikan font inter di bawah ini\n\n\nexport default function RootLayout({ children }) {\n  return <html lang=\"en\"><body className={inter.className}>{children}</body></html>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+inter\\s*=\\s*Inter\\(",
              "message": "Font dikonfigurasi dengan MEMANGGIL fungsinya lalu menyimpan hasilnya ke konstanta. Hasil pemanggilan itulah yang memuat `className` dan `style` untuk dipasang ke elemen."
            },
            {
              "pattern": "subsets\\s*:\\s*\\[[^\\]]*['\"]latin['\"]",
              "message": "Sertakan `subsets: ['latin']` di objek opsinya. Tanpa `subsets`, `next/font` menolak dengan pesan bahwa subset wajib diisi — ini penjagaan supaya kamu tidak diam-diam mengunduh seluruh alfabet dunia. Opsi tambahan seperti `weight` atau `display` boleh ada."
            }
          ],
          "solution": "import { Inter } from 'next/font/google';\n\nconst inter = Inter({ subsets: ['latin'] });\n\nexport default function RootLayout({ children }) {\n  return <html lang=\"en\"><body className={inter.className}>{children}</body></html>;\n}",
          susunKode: {
            question:
              "Susun pengimporan font Google Inter dari next/font/google untuk mencegah layout shift.",
            potongan: [
              "import { Inter } from 'next/font/google';",
              "const inter = Inter({ subsets: ['latin'] });",
              "export default function RootLayout({ children }) {",
              "  return <html lang=\"en\"><body className={inter.className}>{children}</body></html>;",
              "}",
            ],
            pengecoh: [
              "const inter = GoogleFont({ subsets: ['latin'] });",
              "const inter = Inter({ subsets: 'latin' });",
            ],
            pemisah: "\n",
            explanation:
              "Font dari next/font/google diimpor sebagai named export dan diinisialisasi dengan objek opsi subsets berisi array string. Keping GoogleFont(...) keliru nama fungsi pemanggil font. Keping subsets: 'latin' menggoda tetapi salah tipe data karena opsi subsets mewajibkan format array ['latin'].",
          },
        },
        {
          "kind": "step",
          "id": "next-7-3",
          "title": "Metadata API (title, description, Open Graph)",
          "explanation": "Next.js menyediakan Metadata API deklaratif untuk mengelola tag HTML `<head>` seperti judul halaman (`title`), deskripsi SEO (`description`), dan gambar pratinjau media sosial (`openGraph`). Kamu dapat mengekspor objek konstanta bertipe `Metadata` di dalam berkas `page.tsx` atau `layout.tsx`. Next.js akan menyuntikkan tag meta yang sesuai secara otomatis ke dalam respon HTML server. Jika judul halaman bergantung pada data dinamis dari database, kamu dapat mengekspor fungsi `generateMetadata()` untuk membuat objek meta secara asinkron. Terapkan Metadata API ini pada setiap halaman publik aplikasi kamu.",
          "example": {
            "code": "// app/produk/[id]/page.tsx — judul dinamis dari database\nimport type { Metadata } from 'next';\n\nexport async function generateMetadata({ params }): Promise<Metadata> {\n  const { id } = await params;\n  const produk = await ambilProduk(id);\n  return {\n    title: `${produk.nama} | Toko BiLearn`,\n    openGraph: { images: [produk.gambar] },\n  };\n}",
            "output": "View Source pada /produk/42:\n\n<title>Kopi Gayo 250g | Toko BiLearn</title>\n<meta property=\"og:title\" content=\"Kopi Gayo 250g | Toko BiLearn\"/>\n<meta property=\"og:image\" content=\"https://cdn.bilearn.id/kopi.jpg\"/>",
            "note": "Pilih satu saja per berkas: `metadata` untuk judul tetap, `generateMetadata` untuk judul yang bergantung data. Mengekspor keduanya sekaligus membuat build gagal. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Halaman beranda di bawah masih memakai judul tab bawaan. Ekspor objek metadata untuk halaman ini dengan judul `BiLearn`, memanfaatkan tipe `Metadata` yang sudah diimpor agar salah nama properti tertangkap TypeScript.",
          "starterCode": "import { Metadata } from 'next';\n\n// Ekspor metadata di bawah ini\n\n\nexport default function HomePage() {\n  return <h1>Selamat Datang di BiLearn</h1>;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+const\\s+metadata",
              "message": "Next.js hanya membaca named export bernama tepat `metadata` dari berkas halaman atau layout. Anotasi tipe `: Metadata` sifatnya membantu (salah tulis properti langsung ditandai editor), tapi bukan yang membuatnya bekerja."
            },
            {
              "pattern": "title\\s*:\\s*['\"]BiLearn['\"]",
              "message": "Isi properti `title` dengan nilai yang diminta — inilah teks yang muncul di tab browser, di hasil pencarian, dan sebagai judul bawaan pratinjau tautan."
            }
          ],
          "solution": "import { Metadata } from 'next';\n\nexport const metadata: Metadata = { title: 'BiLearn' };\n\nexport default function HomePage() {\n  return <h1>Selamat Datang di BiLearn</h1>;\n}",
          susunKode: {
            question:
              "Rangkai penulisan ekspor metadata berketikan tipe Metadata dari paket next.",
            potongan: [
              "import { Metadata } from 'next';",
              "export const metadata: Metadata = { title: 'BiLearn' };",
              "export default function HomePage() {",
              "  return <h1>Selamat Datang di BiLearn</h1>;",
              "}",
            ],
            pengecoh: [
              "export const metadata = { headline: 'BiLearn' };",
              "export default const metadata = { title: 'BiLearn' };",
            ],
            pemisah: "\n",
            explanation:
              "Properti metadata diekspor sebagai named const yang menyertakan penanda tipe Metadata. Keping headline: 'BiLearn' menggoda tetapi salah nama properti untuk judul halaman. Keping export default const metadata keliru karena metadata bukan default export.",
          },
        },
        {
          "kind": "step",
          "id": "next-7-4",
          "title": "sitemap.ts & robots.ts",
          "explanation": "Sitemap XML adalah daftar URL yang kamu serahkan ke mesin pencari supaya halaman baru ditemukan tanpa menunggu perayap menelusuri tautan satu per satu. Di App Router kamu cukup membuat `app/sitemap.ts` yang mengekspor fungsi default bernama `sitemap`, mengembalikan array objek berisi `url` dan biasanya `lastModified`; Next.js yang mengubahnya menjadi XML di `/sitemap.xml`. Dipakai pada setiap situs publik, dan jadi salah satu hal pertama yang diminta tim SEO. Nilai `url` harus ABSOLUT (`https://domain.com/tentang`) — path relatif diterima tanpa error tapi diabaikan Google, jebakan yang sulit disadari karena berkasnya tetap terbentuk. Jebakan kedua: mengembalikan array kosong. Build sukses, `/sitemap.xml` ada, isinya nol URL, dan tidak ada yang memberitahumu bahwa sitemap itu tidak berguna.",
          "example": {
            "code": "// app/sitemap.ts — URL artikel diambil dari database\nimport type { MetadataRoute } from 'next';\n\nexport default async function sitemap(): Promise<MetadataRoute.Sitemap> {\n  const artikel = await db.artikel.findMany();\n  return artikel.map((a) => ({\n    url: `https://bilearn.id/blog/${a.slug}`,\n    lastModified: a.diubahPada,\n  }));\n}",
            "output": "$ curl http://localhost:3000/sitemap.xml\n\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url>\n    <loc>https://bilearn.id/blog/belajar-nextjs</loc>\n    <lastmod>2026-07-20T08:11:00.000Z</lastmod>\n  </url>\n</urlset>",
            "note": "Kamu tidak pernah menulis XML-nya sendiri — Next.js yang menyusunnya dari array yang kamu kembalikan. Perhatikan `<loc>` berisi URL absolut. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Konstanta `HALAMAN` memuat tiga path publik situs `https://bilearn.id`. Ekspor fungsi konvensi sitemap yang mengembalikan satu entri untuk setiap path itu, masing-masing berisi properti `url` absolut dan `lastModified`.",
          "starterCode": "// app/sitemap.ts\nimport type { MetadataRoute } from 'next';\n\nconst HALAMAN = ['', 'tentang', 'kontak'];\n\n// Ekspor fungsi sitemap-nya di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "export\\s+default\\s+(async\\s+)?function\\s+sitemap",
              "message": "Next.js mencari DEFAULT export dari `app/sitemap.ts`. Named export bernama `sitemap` tidak dipakai, dan `/sitemap.xml` akan 404 tanpa penjelasan."
            },
            {
              "pattern": "HALAMAN\\s*\\.\\s*map|HALAMAN\\.forEach|of\\s+HALAMAN",
              "message": "Bangun entrinya dari konstanta `HALAMAN` yang sudah disediakan (misalnya dengan `.map()`), bukan dengan menulis ulang tiga URL satu per satu — supaya menambah halaman baru nanti cukup menambah satu string."
            },
            {
              "pattern": "https://bilearn\\.id",
              "message": "`url` harus absolut, lengkap dengan skema dan domain. Path relatif seperti `/tentang` tetap menghasilkan XML yang sah bentuknya, tapi diabaikan mesin pencari."
            },
            {
              "pattern": "return\\s*\\[\\s*\\]",
              "mustNotMatch": true,
              "message": "Array kosong berarti sitemap tanpa satu pun URL: build sukses, berkasnya ada, dan tidak berguna sama sekali. Isi dengan entri dari `HALAMAN`."
            }
          ],
          "solution": "// app/sitemap.ts\nimport type { MetadataRoute } from 'next';\n\nconst HALAMAN = ['', 'tentang', 'kontak'];\n\nexport default function sitemap(): MetadataRoute.Sitemap {\n  return HALAMAN.map((path) => ({\n    url: `https://bilearn.id/${path}`,\n    lastModified: new Date(),\n  }));\n}",
          susunKode: {
            question:
              "Susun fungsi sitemap konvensi yang memetakan array HALAMAN ke entri sitemap.",
            potongan: [
              "// app/sitemap.ts\nimport type { MetadataRoute } from 'next';",
              "const HALAMAN = ['', 'tentang', 'kontak'];",
              "export default function sitemap(): MetadataRoute.Sitemap {",
              "  return HALAMAN.map((path) => ({",
              "    url: `https://bilearn.id/${path}`,",
              "    lastModified: new Date(),\n  }));",
              "}",
            ],
            pengecoh: [
              "export function sitemap(): MetadataRoute.Sitemap {",
              "    url: `http://bilearn.id/${path}`,",
            ],
            pemisah: "\n",
            explanation:
              "Fungsi sitemap diekspor secara default dan mengembalikan array objek entri sitemap yang memiliki URL absolut HTTPS. Keping export function sitemap keliru karena Next.js membutuhkan default export untuk sitemap.ts. Keping protokol http:// menggoda tetapi salah spesifikasi karena URL sitemap wajib menggunakan protokol aman https://.",
          },
        },
        {
          "kind": "step",
          "id": "next-7-5",
          "title": "Mengukur Core Web Vitals dari Pengguna Nyata",
          "explanation": "Core Web Vitals adalah tiga metrik Google yang mengukur pengalaman nyata: LCP (kapan elemen terbesar tampil), INP (seberapa cepat antarmuka merespons klik), dan CLS (seberapa banyak tata letak melompat). Lighthouse mengukurnya di komputermu dengan kondisi ideal, sedangkan yang menentukan peringkat adalah data dari pengguna sungguhan di jaringan sungguhan — karena itu angkanya perlu dikumpulkan dari browser mereka. Di App Router caranya memakai hook `useReportWebVitals` dari `next/web-vitals` di dalam sebuah Client Component kecil yang dipasang di `layout.tsx`. Perhatikan ini karena banyak tutorial lama masih salah: mengekspor fungsi `reportWebVitals` adalah cara **Pages Router** (`pages/_app.js`) dan di folder `app/` fungsi itu tidak pernah dipanggil — kodenya terlihat benar, tapi tidak satu pun metrik terkirim. Jebakan kedua: hook ini butuh direktif `'use client'`, sebab metriknya hanya ada di browser.",
          "example": {
            "code": "// app/_komponen/WebVitals.tsx\n'use client';\nimport { useReportWebVitals } from 'next/web-vitals';\n\nexport function WebVitals() {\n  useReportWebVitals((metric) => {\n    fetch('/api/vitals', { method: 'POST', body: JSON.stringify(metric) });\n  });\n  return null;\n}\n\n// dipasang sekali di app/layout.tsx: <WebVitals />",
            "output": "Isi satu objek metric yang diterima callback:\n\n{\n  id: 'v4-1753772400000-8421',\n  name: 'LCP',\n  value: 2380.5,\n  rating: 'needs-improvement',\n  delta: 2380.5,\n  navigationType: 'navigate'\n}\n\nBatas rating: LCP baik < 2500 ms, perlu perbaikan 2500-4000 ms, buruk > 4000 ms.",
            "note": "Komponennya me-return `null` — ia tidak menampilkan apa pun, hanya menumpang siklus hidup React untuk memasang pengukur. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Buat komponen pengukur bernama `WebVitals` di `app/_komponen/WebVitals.tsx`. Komponen ini tidak menampilkan apa pun (kembalikan `null`), tetapi memasang hook pengukur dari `next/web-vitals` yang mencetak setiap metrik ke console. Jangan lupa metrik hanya ada di browser, jadi berkas ini butuh penanda yang sesuai di baris pertama.",
          "starterCode": "// app/_komponen/WebVitals.tsx\nimport { useReportWebVitals } from 'next/web-vitals';\n\n// Tulis komponen WebVitals di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^(\\s*(//[^\\n]*|/\\*[\\s\\S]*?\\*/)\\s*)*['\"]use client['\"]",
              "flags": "i",
              "message": "Hook apa pun — termasuk pengukur ini — hanya berjalan di Client Component, jadi berkas ini butuh direktif di bagian paling atas (komentar pembuka boleh mendahuluinya). Tanpa itu build gagal dengan pesan bahwa hook tidak bisa dipakai di Server Component."
            },
            {
              "pattern": "useReportWebVitals\\(",
              "message": "Pakai hook `useReportWebVitals(callback)` dari `next/web-vitals`. Callback-nya dipanggil sekali untuk SETIAP metrik (LCP, INP, CLS, ...), bukan sekali untuk semuanya."
            },
            {
              "pattern": "console\\.log\\(",
              "message": "Cetak metriknya ke console supaya kamu bisa melihat bentuk objeknya dulu. Di proyek nyata, di sinilah kamu mengirimnya ke layanan analitik."
            },
            {
              "pattern": "export\\s+(default\\s+)?function\\s+WebVitals",
              "message": "Bungkus hook-nya di dalam komponen bernama `WebVitals` dan ekspor, supaya bisa dipasang di `layout.tsx`. Hook tidak boleh dipanggil di luar komponen."
            },
            {
              "pattern": "export\\s+function\\s+reportWebVitals",
              "mustNotMatch": true,
              "message": "`export function reportWebVitals` adalah cara Pages Router (`pages/_app.js`). Di App Router fungsi itu tidak pernah dipanggil: tidak ada error, tidak ada peringatan, dan tidak ada satu pun metrik yang terkirim."
            }
          ],
          "solution": "// app/_komponen/WebVitals.tsx\n'use client';\nimport { useReportWebVitals } from 'next/web-vitals';\n\nexport function WebVitals() {\n  useReportWebVitals((metric) => {\n    console.log(metric);\n  });\n  return null;\n}",
          susunKode: {
            question:
              "Susun komponen WebVitals yang memanggil useReportWebVitals untuk mencetak metrik ke konsol.",
            potongan: [
              "'use client';",
              "import { useReportWebVitals } from 'next/web-vitals';",
              "export function WebVitals() {",
              "  useReportWebVitals((metric) => {",
              "    console.log(metric);",
              "  });",
              "  return null;",
              "}",
            ],
            pengecoh: [
              "export function reportWebVitals() {",
              "    alert(metric);",
            ],
            pemisah: "\n",
            explanation:
              "Hook useReportWebVitals digunakan di Client Component untuk mencatat data performa Web Vitals pengguna. Keping export function reportWebVitals keliru karena itu adalah nama konvensi lama di Pages Router. Keping alert(metric) menggoda tetapi salah instruksi karena pengujian memeriksa pencetakan console.log(metric).",
          },
        },
        {
          "kind": "step",
          "id": "next-7-6",
          "title": "Bundle Analysis & dynamic() Import",
          "explanation": "Semua yang diimpor secara statis masuk ke bundel utama, ikut diunduh pengguna meski komponennya baru terlihat setelah tombol tertentu diklik. `dynamic()` dari `next/dynamic` memecah komponen berat menjadi berkas JavaScript terpisah yang baru diunduh saat komponennya benar-benar dipasang. Dipakai untuk editor rich text, library grafik, pemutar video, dan peta — kandidatnya biasanya terlihat jelas di laporan `@next/bundle-analyzer`. Opsi `{ ssr: false }` berguna kalau komponennya menyentuh `window` atau `document`, karena di server dua objek itu tidak ada — tetapi opsi itu **hanya boleh dipakai di dalam berkas berdirektif `'use client'`**; menuliskannya di Server Component langsung ditolak dengan pesan `ssr: false is not allowed with next/dynamic in Server Components`. Jebakan yang sering: memberi `dynamic()` sebuah komponen yang tampil di layar pertama — pengguna justru menunggu dua kali (bundel utama, lalu chunk tambahan), sehingga LCP memburuk. Jebakan lain: memanggil `dynamic()` di dalam badan komponen, sehingga chunk-nya dibuat ulang setiap render.",
          "example": {
            "code": "// app/kontak/PanelPeta.tsx — WAJIB Client Component karena memakai ssr: false\n'use client';\nimport dynamic from 'next/dynamic';\n\nconst PetaLokasi = dynamic(() => import('./PetaLokasi'), {\n  ssr: false,                              // komponennya memakai window\n  loading: () => <p>Memuat peta...</p>,\n});\n\nexport default function PanelPeta() {\n  return <PetaLokasi />;\n}",
            "output": "$ npm run build\n\n▲ Next.js 16.2.12 (Turbopack)\n\nRoute (app)                     Size     First Load JS\n┌ ○ /kontak                     1.8 kB          96 kB\n+ chunk chunks/peta-4f1c.js    182 kB          (diunduh saat dibutuhkan)\n\nSebelum dynamic(): First Load JS /kontak = 278 kB",
            "note": "Perhatikan `'use client'` di baris pertama: contoh ini memakai `ssr: false`, dan opsi itu hanya sah di Client Component. Angka `First Load JS` di tabel build itulah cara membuktikan pemisahannya berhasil — bukan perasaan bahwa halaman \"terasa\" lebih cepat. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Komponen berat di `./Heavy` hanya muncul setelah pengguna menggulir ke bawah, tapi sekarang ikut diunduh sejak halaman dibuka. Muat komponen itu secara terpisah memakai pembantu dari `next/dynamic` yang sudah diimpor, dan simpan hasilnya ke konstanta `HeavyComponent` yang sudah dipakai di JSX.",
          "starterCode": "import dynamic from 'next/dynamic';\n\n// Lakukan dynamic import komponen Heavy di bawah ini\n\n\nexport default function Page() {\n  return <HeavyComponent />;\n}",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+HeavyComponent\\s*=\\s*dynamic\\(",
              "message": "Hasil `dynamic()` disimpan ke konstanta di LUAR komponen, lalu dipakai seperti komponen biasa. Memanggilnya di dalam badan komponen membuat chunk-nya dibuat ulang setiap render."
            },
            {
              "pattern": "dynamic\\(\\s*\\(\\s*\\)\\s*=>\\s*import\\(\\s*['\"]\\./Heavy['\"]",
              "message": "Argumennya bukan komponen langsung, melainkan FUNGSI yang mengembalikan `import()`. Bentuk fungsi inilah yang menunda pengunduhan sampai komponennya dibutuhkan; menulis `dynamic(import('./Heavy'))` menjalankan impornya seketika."
            }
          ],
          "solution": "import dynamic from 'next/dynamic';\n\nconst HeavyComponent = dynamic(() => import('./Heavy'));\n\nexport default function Page() {\n  return <HeavyComponent />;\n}",
          susunKode: {
            question:
              "Susun pengimporan dinamis komponen berat dengan fungsi dynamic dari next/dynamic.",
            potongan: [
              "import dynamic from 'next/dynamic';",
              "const HeavyComponent = dynamic(() => import('./Heavy'));",
              "export default function Page() {",
              "  return <HeavyComponent />;",
              "}",
            ],
            pengecoh: [
              "const HeavyComponent = lazy(() => import('./Heavy'));",
              "const HeavyComponent = dynamic(() => require('./Heavy'));",
            ],
            pemisah: "\n",
            explanation:
              "Fungsi pembantu dynamic dari 'next/dynamic' dipanggil dengan mengoper fungsi arrow pengimpor modul. Keping lazy(...) menggoda bagi pengembang React biasa, tetapi Next.js merekomendasikan helper dynamic() untuk penanganan SSR yang lebih baik. Keping require('./Heavy') keliru karena impor dinamis menggunakan sintaks import().",
          },
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
              "explanation": "`next/image` mengompres, membuat `srcset` responsif, dan memesan ruang lewat `width`/`height` sehingga tidak ada layout shift. Pilihan \"img tidak bisa tampil di ponsel\" menggoda bagi pemula karena terdengar seperti masalah responsif — padahal `<img>` tampil normal, ia hanya tidak melakukan optimasi apa pun."
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
              "explanation": "Di App Router, tag `<head>` diatur lewat Metadata API: ekspor objek `metadata` atau fungsi `generateMetadata`. Komponen `<Head>` dari `next/head` menggoda karena itu jawaban benar di Pages Router dan masih banyak di tutorial lama; di folder `app` ia tidak berlaku. Memanipulasi `document.title` di `useEffect` menggoda juga, tapi perayap sering hanya melihat HTML awal."
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
              "explanation": "Font yang berganti saat halaman berjalan mendorong posisi elemen lain, dan itu tercatat sebagai CLS. LCP menggoda karena teks juga bagian dari konten yang tampil, tapi LCP mengukur KAPAN elemen terbesar muncul, bukan pergeserannya. TTFB bahkan bukan bagian Core Web Vitals."
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
              "explanation": "`dynamic()` memisahkan komponen berat ke chunk sendiri dan memuatnya saat dibutuhkan. Perlu diingat trade-off-nya: kalau dipakai pada komponen di layar pertama, pengguna menunggu dua kali dan LCP justru memburuk."
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
              "explanation": "LCP mengukur kapan elemen konten terbesar di viewport selesai dirender — biasanya banner atau gambar utama. FCP menggoda karena namanya mirip dan juga soal \"paint\", tapi FCP hanya menandai piksel pertama apa pun, bukan elemen terbesar; INP soal respons interaksi, CLS soal pergeseran."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Seorang developer menyalin kode dari tutorial dan mengekspor `reportWebVitals(metric)` dari `app/layout.tsx`, tetapi tidak ada satu pun metrik yang masuk ke dashboard analitiknya. Kenapa?",
              "choices": [
                "A. Metriknya baru terkirim setelah aplikasi dideploy ke produksi",
                "B. `export function reportWebVitals` adalah API Pages Router; di App Router harus memakai hook `useReportWebVitals` di Client Component",
                "C. Nama fungsinya harus huruf besar semua",
                "D. Core Web Vitals hanya bisa diukur oleh Lighthouse, tidak bisa dari kode"
              ],
              "answerIndex": 1,
              "explanation": "`reportWebVitals` hanya dikenali di `pages/_app.js`. Di folder `app` fungsi itu tidak pernah dipanggil — tanpa error, tanpa peringatan — sehingga kodenya terlihat benar padahal mati. Pilihan A menggoda karena banyak hal memang hanya muncul di produksi, tapi di sini masalahnya API yang salah generasi. Pilihan D salah: data pengguna nyata justru hanya bisa dikumpulkan dari kode di browser mereka."
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
          "explanation": "Saat `npm run dev`, Next.js memuat ulang modul setiap kali kamu menyimpan berkas. Kalau `new PrismaClient()` ditulis begitu saja, setiap reload membuka kumpulan koneksi baru ke PostgreSQL, dan dalam beberapa menit database menolak dengan `Too many connections`. Polanya ada dua bagian dan keduanya wajib: **membaca** instansi yang mungkin sudah tersimpan di objek global, lalu **menyimpannya kembali** ke objek itu saat bukan produksi. Bagian kedua yang paling sering dilupakan — tanpa penyimpanan balik, objek global selalu kosong dan pola ini tidak menghemat apa pun. Dipakai satu kali per proyek di `lib/prisma.ts`, lalu berkas lain cukup mengimpornya. Di produksi penyimpanan balik sengaja dilewati karena tidak ada hot reload dan proses serverless sebaiknya bersih.",
          "example": {
            "code": "// lib/redis.ts — pola yang sama untuk klien lain\nimport { Redis } from 'ioredis';\n\nconst g = globalThis as unknown as { redis?: Redis };\n\nexport const redis = g.redis ?? new Redis(process.env.REDIS_URL!);\n\nif (process.env.NODE_ENV !== 'production') g.redis = redis;",
            "output": "Tanpa penyimpanan balik ke objek global, setelah ~10 kali menyimpan berkas:\n\nError: Too many connections\n  at PrismaClient._executeRequest\nprisma:warn Current connection pool: 40/40\n\nDengan pola lengkap:\nprisma:info Starting a postgresql pool with 9 connections   <-- muncul SEKALI",
            "note": "Baris `muncul SEKALI` itu cara memastikannya: nyalakan log Prisma, simpan berkas beberapa kali, lalu hitung berapa kali pesan pool muncul. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Berkas `lib/prisma.ts` di bawah masih membuat koneksi baru setiap kali modul dimuat ulang. Ubah agar instansi yang sudah tersimpan di `globalForPrisma` dipakai ulang bila ada, dan tambahkan satu baris yang menyimpan instansinya ke objek itu — kecuali saat berjalan di produksi.",
          "starterCode": "// lib/prisma.ts\nimport { PrismaClient } from '@prisma/client';\n\nconst globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };\n\n// Perbaiki dua hal di bawah ini: pemakaian ulang, dan penyimpanan baliknya\nexport const prisma = new PrismaClient();\n",
          "language": "text",
          "tests": [
            {
              "pattern": "globalForPrisma\\.prisma\\s*(\\|\\||\\?\\?)\\s*new\\s+PrismaClient\\(",
              "message": "Baca dulu instansi yang mungkin sudah ada, baru buat yang baru sebagai cadangan. `||` dan `??` sama-sama benar di sini karena nilainya hanya bisa berupa objek atau `undefined`."
            },
            {
              "pattern": "globalForPrisma\\.prisma\\s*=\\s*prisma",
              "message": "Ini bagian yang paling sering hilang: instansinya harus DISIMPAN kembali ke objek global. Tanpa baris ini, pembacaan di atas selalu menemukan `undefined` dan setiap hot reload tetap membuka koneksi baru."
            },
            {
              "pattern": "NODE_ENV\\s*!==\\s*['\"]production['\"]",
              "message": "Bungkus penyimpanan baliknya dengan syarat bukan produksi. Menyimpan ke objek global di produksi tidak dibutuhkan (tidak ada hot reload) dan menahan koneksi lebih lama daripada seharusnya."
            }
          ],
          "solution": "// lib/prisma.ts\nimport { PrismaClient } from '@prisma/client';\n\nconst globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };\n\nexport const prisma = globalForPrisma.prisma ?? new PrismaClient();\n\nif (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;\n",
          susunKode: {
            question:
              "Rangkai pola Singleton Prisma Client pada lib/prisma.ts untuk mencegah tumpukan koneksi di lingkungan pengembangan.",
            potongan: [
              "// lib/prisma.ts",
              "import { PrismaClient } from '@prisma/client';",
              "const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };",
              "export const prisma = globalForPrisma.prisma ?? new PrismaClient();",
              "if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;",
            ],
            pengecoh: [
              "export const prisma = globalForPrisma.prisma || null;",
              "if (process.env.NODE_ENV === 'production') globalForPrisma.prisma = prisma;",
            ],
            pemisah: "\n",
            explanation:
              "Pola singleton memeriksa keberadaan objek prisma di globalThis dan hanya menyimpannya kembali jika berada di luar produksi (development). Keping || null keliru karena jika belum ada instansi maka harus membuat instansiasi new PrismaClient(). Keping === 'production' menggoda tetapi salah logika karena penyimpan ke global justru dibutuhkan di fase pengembangan.",
          },
        },
        {
          "kind": "step",
          "id": "next-8-2",
          "title": "Environment Variables: lokal (.env.local) vs production",
          "explanation": "Variabel lingkungan di Next.js dikelola melalui berkas `.env.local`. Secara default, seluruh variabel lingkungan hanya dapat diakses oleh kode server (Server Components & Route Handlers) untuk menjaga kerahasiaan kredensial dan kunci rahasia database. Namun, jika kamu memiliki variabel yang wajib dibaca oleh Client Component di browser (seperti URL API publik atau Analytics ID), kamu harus memberikan awalan khusus `NEXT_PUBLIC_` pada nama variabel tersebut. Ingatlah untuk tidak pernah menambahkan awalan `NEXT_PUBLIC_` pada kunci rahasia backend.",
          "example": {
            "code": "DATABASE_URL=\"postgresql://...\"\nNEXT_PUBLIC_SITE_URL=\"http://localhost:3000\"",
            "output": "// di Server Component\nconsole.log(process.env.DATABASE_URL);\n→ postgresql://...\n\n// di Client Component ('use client')\nconsole.log(process.env.DATABASE_URL);\n→ undefined\nconsole.log(process.env.NEXT_PUBLIC_SITE_URL);\n→ http://localhost:3000",
            "note": "Jangan sertakan awalan `NEXT_PUBLIC_` pada password atau API key rahasia — apa pun yang berawalan itu bisa dibaca siapa saja di tab Sources DevTools. Catatan jujur: panel preview tidak menjalankan Next.js, jadi `.env.local` di sini hanya diperiksa isinya sebagai teks; tesnya tetap bisa lulus."
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
          "solution": "NEXT_PUBLIC_API_URL=\"https://api.com\"",
          susunKode: {
            question:
              "Rangkai satu baris .env.local yang mendeklarasikan variabel API_URL bernilai https://api.com dan boleh dibaca dari Client Component.",
            potongan: [
              "NEXT_PUBLIC_",
              "API_URL=",
              "\"https://api.com\"",
            ],
            pengecoh: [
              "NEXT_PRIVATE_",
              "API_URL:",
            ],
            pemisah: "",
            explanation:
              "Next.js hanya menyisipkan variabel berawalan NEXT_PUBLIC_ ke bundel browser, jadi awalan itulah yang menentukan variabel bisa dibaca Client Component atau tidak. Keping NEXT_PRIVATE_ menggoda karena terdengar sebagai pasangan resmi dari NEXT_PUBLIC_, padahal awalan itu tidak pernah ada di Next.js — variabel tanpa awalan memang sudah privat secara bawaan. Keping API_URL: keliru pemisahnya dan sering ditulis oleh orang yang terbiasa dengan YAML atau JSON, sedangkan berkas .env memakai tanda sama dengan.",
          },
        },
        {
          "kind": "step",
          "id": "next-8-3",
          "title": "Deploy ke Vercel: Preview & Production",
          "explanation": "Vercel menyediakan alur pengujian CI/CD terintegrasi untuk aplikasi Next.js. Setiap kali kamu membuat Pull Request (PR) di GitHub, Vercel secara otomatis membangun **Preview Deployment** yang menghasilkan URL pratinjau sementara untuk diuji oleh tim sebelum di-merge. Setelah PR disetujui dan di-merge ke branch utama (`main`), Vercel akan otomatis memperbarui **Production Deployment**. Untuk membedakan lingkungan aplikasi saat runtime, kamu dapat membaca variabel bawaan Vercel yaitu `process.env.VERCEL_ENV === 'preview'`.",
          "example": {
            "code": "// app/_komponen/PitaLingkungan.tsx\nexport function PitaLingkungan() {\n  const env = process.env.VERCEL_ENV;          // 'production' | 'preview' | 'development'\n  if (env === 'production') return null;\n  return <p>Lingkungan: {env}</p>;\n}",
            "output": "Push ke branch feature/keranjang:\n\nVercel  Building...\n  Preview: https://toko-git-feature-keranjang-bimo.vercel.app  Ready (58s)\n  GitHub PR #42: 1 check passed\n\nMerge ke main:\n  Production: https://toko.bimo.dev  Ready (61s)",
            "note": "URL pratinjau berbeda untuk setiap branch dan tetap hidup selama PR-nya terbuka, jadi QA bisa menguji tanpa menyentuh versi produksi. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Aplikasi ini perlu menyembunyikan tombol \"Reset Data Demo\" di lingkungan produksi. Deklarasikan konstanta boolean `isPreview` yang bernilai benar hanya ketika variabel lingkungan bawaan Vercel menunjukkan bahwa build ini adalah pratinjau.",
          "starterCode": "// Vercel CI environment detection\n// Tulis deklarasi isPreview di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+isPreview\\s*=",
              "message": "Simpan hasil perbandingannya ke konstanta bernama `isPreview` supaya bisa dipakai di JSX sebagai penjaga tampilan."
            },
            {
              "pattern": "process\\.env\\.VERCEL_ENV\\s*===\\s*['\"]preview['\"]",
              "message": "Variabel yang membedakan lingkungan di Vercel adalah `VERCEL_ENV`, nilainya salah satu dari `production`, `preview`, atau `development`. Jangan tertukar dengan `NODE_ENV` — di build pratinjau, `NODE_ENV` juga bernilai `production`."
            }
          ],
          "solution": "const isPreview = process.env.VERCEL_ENV === 'preview';",
          susunKode: {
            question:
              "Susun deteksi lingkungan build Vercel: satu konstanta boolean bernama isPreview yang bernilai benar hanya pada build pratinjau.",
            potongan: [
              "const isPreview",
              "=",
              "process.env.VERCEL_ENV",
              "=== 'preview';",
            ],
            pengecoh: [
              "process.env.NODE_ENV",
              "=== 'production';",
            ],
            pemisah: " ",
            explanation:
              "Vercel menyuntikkan variabel VERCEL_ENV yang bernilai 'preview' khusus pada build pratinjau, dan perbandingannya memakai pembanding ketat. Keping process.env.NODE_ENV sangat sering keliru dipakai karena namanya paling familier, padahal NODE_ENV hanya pernah bernilai 'development', 'production', atau 'test' — di build pratinjau ia bernilai 'production', sehingga penjagaannya justru tidak pernah aktif. Keping === 'production'; menggoda karena produksi memang yang sedang dibicarakan di soal, tetapi yang perlu dideteksi adalah kebalikannya.",
          },
        },
        {
          "kind": "step",
          "id": "next-8-4",
          "title": "Custom Domain & HTTPS",
          "explanation": "Menghubungkan domain sendiri ke aplikasi yang sudah di-deploy dilakukan di panel DNS penyedia domainmu, bukan lewat kode: kamu menambahkan record yang menunjuk ke server hosting. Untuk Vercel, apex domain (`domainku.com`) memakai **A record** ke alamat IP mereka, sedangkan sub-domain seperti `www` memakai **CNAME** ke `cname.vercel-dns.com`. Sertifikat HTTPS-nya diterbitkan dan diperbarui otomatis oleh Let's Encrypt setelah record terbaca. Dipakai sekali per domain, biasanya menjelang rilis. Jebakan pertama: apex domain tidak bisa memakai CNAME karena aturan DNS — banyak orang mencoba dan bingung karena panelnya menolak. Jebakan kedua: perubahan DNS butuh waktu menyebar (TTL), jadi domain yang belum aktif dalam lima menit belum tentu salah konfigurasi.",
          "example": {
            "code": "# Panel DNS untuk blog.bimo.dev (sub-domain, cukup CNAME)\n# Tipe    Nama    Nilai                     TTL\nCNAME     blog    cname.vercel-dns.com      3600",
            "output": "$ dig +short blog.bimo.dev\ncname.vercel-dns.com.\n76.76.21.21\n\n$ curl -I https://blog.bimo.dev\nHTTP/2 200\nserver: Vercel\nstrict-transport-security: max-age=63072000",
            "note": "Baris `HTTP/2 200` beserta header HSTS itu bukti sertifikat HTTPS-nya sudah terbit — kamu tidak pernah menyentuh berkas sertifikat. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Kamu memegang panel DNS domain `proyekku.com` dan ingin mengarahkannya ke aplikasi Vercel-mu. Tulis dua baris record: satu untuk apex domain (nama `@`) yang menunjuk ke alamat IP Vercel `76.76.21.21`, dan satu untuk sub-domain `www` yang menunjuk ke host `cname.vercel-dns.com`. Pakai tipe record yang benar untuk masing-masing.",
          "starterCode": "# Panel DNS proyekku.com\n# Tipe    Nama    Nilai\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bA\\s+@\\s+76\\.76\\.21\\.21",
              "message": "Apex domain (ditulis `@`) wajib memakai A record yang menunjuk ke alamat IP — aturan DNS tidak mengizinkan CNAME di apex. Susunannya: tipe, nama, lalu nilainya."
            },
            {
              "pattern": "\\bCNAME\\s+www\\s+cname\\.vercel-dns\\.com",
              "message": "Sub-domain seperti `www` justru memakai CNAME yang menunjuk ke nama host (bukan IP), supaya kalau Vercel mengganti IP-nya kamu tidak perlu mengubah apa pun."
            }
          ],
          "solution": "# Panel DNS proyekku.com\n# Tipe    Nama    Nilai\nA         @       76.76.21.21\nCNAME     www     cname.vercel-dns.com\n",
          susunKode: {
            question:
              "Rangkai baris catatan DNS untuk mengarahkan apex domain A dan sub-domain CNAME ke Vercel.",
            potongan: [
              "# Panel DNS proyekku.com",
              "# Tipe    Nama    Nilai",
              "A         @       76.76.21.21",
              "CNAME     www     cname.vercel-dns.com",
            ],
            pengecoh: [
              "CNAME     @       76.76.21.21",
              "A         www     cname.vercel-dns.com",
            ],
            pemisah: "\n",
            explanation:
              "Apex domain (@) menggunakan record A yang menunjuk ke alamat IP, sedangkan subdomain (www) menggunakan record CNAME yang menunjuk ke nama host DNS Vercel. Keping CNAME @ 76.76.21.21 keliru karena CNAME hanya menerima nama domain alias, bukan alamat IP. Keping A www ... keliru karena subdomain dialihkan lewat CNAME.",
          },
        },
        {
          "kind": "step",
          "id": "next-8-5",
          "title": "Logging & Error Monitoring (Sentry)",
          "explanation": "Sentry menangkap error yang terjadi di komputer pengguna — bagian yang tidak pernah kamu lihat di terminal sendiri — beserta stack trace dan konteks request-nya. Integrasinya membungkus konfigurasi Next.js dengan `withSentryConfig`, sehingga source map ikut diunggah saat build dan stack trace di dashboard terbaca sebagai kode aslimu, bukan hasil minifikasi. Dipakai sejak sebelum rilis publik, karena bug produksi yang tidak dilaporkan pengguna tetap kehilangan pemasukan. Perhatikan gaya modulnya: `next.config.ts` memakai ESM, jadi ekspornya `export default`. Mencampur `import` dengan `module.exports` di berkas yang sama adalah kesalahan klasik yang membuat Node menolak sebelum aplikasi menyala — kalau kamu menemukan contoh CommonJS di internet, ia memakai `require()` sepenuhnya, bukan campuran.",
          "example": {
            "code": "// next.config.mjs — versi CommonJS lawas, semuanya require()\nconst { withSentryConfig } = require('@sentry/nextjs');\n\nconst nextConfig = { reactStrictMode: true };\n\nmodule.exports = withSentryConfig(nextConfig);",
            "output": "Kalau `import` dan `module.exports` dicampur di satu berkas:\n\n$ npm run dev\nSyntaxError: Cannot use import statement outside a module\n    at next.config.js:1\n\nSetelah gaya modulnya konsisten:\n$ npm run build\n Sentry  Uploading source maps for release 1a2b3c4\n done in 3.1s",
            "note": "Satu berkas hanya boleh memilih satu gaya: seluruhnya `import`/`export default`, atau seluruhnya `require`/`module.exports`. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Berkas `next.config.ts` di bawah memakai gaya modul ESM. Bungkus konfigurasinya dengan pembantu Sentry: impor fungsi pembungkusnya dari `@sentry/nextjs`, lalu ganti ekspornya agar yang diekspor adalah konfigurasi yang sudah dibungkus. Jaga gaya modulnya tetap konsisten.",
          "starterCode": "// next.config.ts\nimport type { NextConfig } from 'next';\n\nconst nextConfig: NextConfig = { reactStrictMode: true };\n\n// Impor pembungkus Sentry lalu perbaiki baris ekspor di bawah\nexport default nextConfig;\n",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s*\\{\\s*withSentryConfig\\s*\\}\\s*from\\s*['\"]@sentry/nextjs['\"]",
              "message": "Fungsinya diekspor sebagai named export, jadi impornya memakai kurawal. Pastikan nama paketnya `@sentry/nextjs` — paket `@sentry/react` tidak punya integrasi build Next.js."
            },
            {
              "pattern": "export\\s+default\\s+withSentryConfig\\(\\s*nextConfig",
              "message": "Yang diekspor harus HASIL pembungkusan, bukan konfigurasi aslinya. Mengekspor `nextConfig` apa adanya membuat build sukses tanpa satu pun error terkirim ke Sentry — kegagalan yang sunyi."
            },
            {
              "pattern": "module\\.exports",
              "mustNotMatch": true,
              "message": "Jangan campur dengan `module.exports`: berkas ini sudah memakai `import`, dan mencampur dua gaya modul membuat Node menolak berkasnya (`Cannot use import statement outside a module`)."
            }
          ],
          "solution": "// next.config.ts\nimport type { NextConfig } from 'next';\nimport { withSentryConfig } from '@sentry/nextjs';\n\nconst nextConfig: NextConfig = { reactStrictMode: true };\n\nexport default withSentryConfig(nextConfig);\n",
          susunKode: {
            question:
              "Rangkai pembungkusan konfigurasi Next.js dengan helper withSentryConfig pada next.config.ts.",
            potongan: [
              "// next.config.ts",
              "import type { NextConfig } from 'next';",
              "import { withSentryConfig } from '@sentry/nextjs';",
              "const nextConfig: NextConfig = { reactStrictMode: true };",
              "export default withSentryConfig(nextConfig);",
            ],
            pengecoh: [
              "module.exports = withSentryConfig(nextConfig);",
              "import withSentryConfig from '@sentry/nextjs';",
            ],
            pemisah: "\n",
            explanation:
              "Pembungkus Sentry diimpor sebagai named import { withSentryConfig } dari paket '@sentry/nextjs' dan diekspor menggunakan sintaks ES module. Keping module.exports keliru karena berkas next.config.ts menggunakan standar ekspor ES module (export default). Keping import default without brackets juga keliru nama impornya.",
          },
        },
        {
          "kind": "step",
          "id": "next-8-6",
          "title": "Checklist Pre-launch",
          "explanation": "Sebagian kesalahan hanya muncul saat build produksi: error tipe TypeScript, pemakaian Server Component yang salah, dan variabel lingkungan yang belum diisi. Karena itu `npm run build` layak dijalankan di lokal sebelum kode dikirim, bukan pertama kali di CI. npm punya hook otomatis: sebuah script bernama `pre<nama>` dijalankan sebelum script `<nama>` — jadi `predeploy` hanya berguna kalau ada script `deploy` yang benar-benar kamu jalankan. Dipakai sebagai pengaman tim: siapa pun yang menjalankan `npm run deploy` otomatis membangun dulu, dan proses berhenti kalau build gagal. Dua jebakan sekaligus: menulis `predeploy` tanpa `deploy` membuatnya tidak pernah berjalan (tanpa peringatan apa pun), dan `package.json` adalah JSON murni — satu komentar `//` di dalamnya membuat npm menolak seluruh berkasnya.",
          "example": {
            "code": "{\n  \"scripts\": {\n    \"test\": \"vitest run\",\n    \"pretest\": \"npm run lint\"\n  }\n}",
            "output": "$ npm run test\n\n> pretest\n> npm run lint\n\n./app/page.tsx\n12:7  Error: 'judul' is assigned a value but never used.\n\nnpm error Lifecycle script `pretest` failed.\n\nPerhatikan: perintah vitest TIDAK ikut berjalan karena hook-nya gagal lebih dulu.",
            "note": "Itulah gunanya hook `pre`: rantainya berhenti di kegagalan pertama, jadi kamu tidak pernah men-deploy kode yang lint atau build-nya merah. Catatan jujur: berkas ini tidak dijalankan di panel preview — Next.js butuh server sendiri (dan sebagian berkas hanya hidup di server). Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Lengkapi `scripts` di `package.json` berikut agar tim punya satu perintah rilis: tambahkan script `deploy` yang menjalankan `vercel --prod`, dan satu script lagi yang otomatis membangun aplikasi (`npm run build`) tepat sebelum `deploy` dijalankan. Ikuti aturan penamaan hook npm.",
          "starterCode": "{\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\"\n  }\n}\n",
          "language": "text",
          "tests": [
            {
              "pattern": "['\"]deploy['\"]\\s*:\\s*['\"]vercel\\s+--prod['\"]",
              "message": "Tambahkan script `deploy` berisi perintah rilisnya. Hook `pre` hanya berjalan kalau script utamanya ada — inilah script utamanya."
            },
            {
              "pattern": "['\"]predeploy['\"]\\s*:\\s*['\"]npm\\s+run\\s+build['\"]",
              "message": "Namanya harus tepat `pre` + nama script utama, jadi `predeploy`. Nama lain (`beforeDeploy`, `deploy:pre`) tidak dikenali npm dan diam-diam tidak pernah dijalankan."
            },
            {
              "pattern": "//",
              "mustNotMatch": true,
              "message": "`package.json` adalah JSON murni: satu komentar `//` di dalamnya membuat npm menolak seluruh berkas dengan `Unexpected token / in JSON`. Hapus komentarnya sebelum menyimpan."
            }
          ],
          "solution": "{\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\",\n    \"predeploy\": \"npm run build\",\n    \"deploy\": \"vercel --prod\"\n  }\n}\n",
          susunKode: {
            question:
              "Rangkai skrip package.json yang menambahkan skrip predeploy untuk otomatis menjalankan build sebelum deploy.",
            potongan: [
              "{\n  \"scripts\": {",
              "    \"dev\": \"next dev\",",
              "    \"build\": \"next build\",",
              "    \"predeploy\": \"npm run build\",",
              "    \"deploy\": \"vercel --prod\"",
              "  }\n}",
            ],
            pengecoh: [
              "    \"postdeploy\": \"npm run build\",",
              "    \"deploy\": \"vercel dev\"",
            ],
            pemisah: "\n",
            explanation:
              "npm secara otomatis menjalankan skrip dengan awalan pre- sebelum skrip utamanya dieksekusi, sehingga predeploy akan berjalan tepat sebelum deploy. Keping postdeploy keliru karena skrip tersebut baru berjalan setelah proses deploy selesai yang sudah terlambat. Keping vercel dev keliru karena vercel dev digunakan untuk server lokal, bukan rilis produksi (--prod).",
          },
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
              "explanation": "Hanya variabel berawalan `NEXT_PUBLIC_` yang disisipkan ke bundel browser. `REACT_APP_` menggoda karena itu aturan Create React App, dan `PUBLIC_` karena terdengar logis — keduanya tidak dikenali Next.js, sehingga nilainya `undefined` di client tanpa pesan error."
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
              "explanation": "Hot reload memuat ulang modul, dan tanpa pola singleton setiap reload membuka koneksi baru sampai database menolak. Perlu diingat pola ini punya dua bagian: membaca dari objek global DAN menyimpannya kembali — kalau bagian kedua lupa, polanya tidak berpengaruh sama sekali."
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
              "explanation": "Preview Deployment membangun versi sementara untuk setiap Pull Request dengan URL sendiri, sehingga QA dan Product Manager bisa mencoba fitur tanpa mengganggu produksi. Pilihan backup database menggoda karena sama-sama terdengar seperti pengaman rilis, tapi Vercel tidak menyentuh isi databasemu."
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
              "explanation": "`npm run build` menjalankan `next build`, dan di situlah error tipe serta kesalahan Server Component muncul. `npm run dev` menggoda karena itu perintah harian, tapi dev server sengaja lebih permisif — banyak kesalahan baru terlihat saat build."
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
              "explanation": "`withSentryConfig` membungkus `nextConfig` supaya Sentry bisa mengunggah source map dan menangkap error di server maupun client. Nama-nama lain sengaja dibuat masuk akal; yang perlu diingat: pembungkusnya harus benar-benar diekspor, karena mengekspor konfigurasi asli membuat integrasinya mati tanpa error."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Sebuah `package.json` memuat `\"predeploy\": \"npm run build\"` tetapi tidak punya script `deploy`. Kapan `predeploy` berjalan?",
              "choices": [
                "A. Setiap kali `npm install` dijalankan",
                "B. Setiap kali kode dipush ke GitHub",
                "C. Tidak pernah — hook `pre` hanya berjalan sebelum script dengan nama yang dipasangkannya",
                "D. Setiap kali `npm run dev` dijalankan"
              ],
              "answerIndex": 2,
              "explanation": "Hook `pre<nama>` terikat pada script `<nama>`; tanpa script `deploy`, tidak ada yang memicunya. Pilihan B menggoda karena terdengar seperti CI, tapi npm tidak tahu apa pun tentang git. Yang membuat kesalahan ini berbahaya: tidak ada peringatan sama sekali, jadi tim merasa punya pengaman build padahal tidak."
            }
          ]
        }
      ]
    }
  ]
};
