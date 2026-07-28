import type { Track } from "@/lib/types";

export const reactTrack: Track = {
  "slug": "react",
  "title": "React",
  "description": "Komponen, hooks, state management, dan pola yang dipakai di dunia kerja.",
  "hours": 80,
  "recommendedPrereqs": [
    "javascript",
    "typescript"
  ],
  "color": "bg-cyan-500",
  "icon": "⚛️",
  "order": 6,
  "modules": [
    {
      "slug": "persiapan-instalasi",
      "title": "Persiapan & Instalasi React",
      "description": "Memahami mental model React, mempersiapkan Node.js, Vite, dan React DevTools.",
      "topics": [
        "Node.js & npm requirement untuk React development",
        "Inisialisasi proyek React + TypeScript dengan Vite",
        "Anatomi & struktur folder proyek Vite (src, App.tsx, main.tsx)",
        "Debugging komponen dengan React DevTools browser extension",
        "Menjalankan dev server & build produksi",
        "CRA vs Vite: kenapa industri beralih ke Vite"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-0-m1",
          "title": "Mental Model React & Persiapan Lingkungan Development",
          "body": "# Pengertian Mental Model React\n\nReact adalah library JavaScript populer ciptaan Meta untuk membangun User Interface (UI) berbasis komponen. Berbeda dari JavaScript DOM murni di mana kamu secara imperatif memberi instruksi langkah-demi-langkah ke browser (`document.querySelector('#btn').addEventListener(...)`), React menganut paradigma **deklaratif**.\n\nSatu rumus inti yang wajib kamu ingat sepanjang karier React kamu:\n$$\\\\text{UI} = f(\\\\text{state})$$\n\nTampilan UI di layar hanyalah hasil keluaran dari sebuah fungsi yang menerima data (state). Ketika state berubah, React secara otomatis memperbarui tampilan tanpa kamu perlu menyentuh DOM secara manual.\n\n## Visualisasi Alur Kerja React (Virtual DOM)\n\n```text\n+-------------------+      +-----------------------+      +--------------------+\n| State/Data Berubah| ---> | React Buat Virtual DOM| ---> | Diffing Algorithm  |\n+-------------------+      +-----------------------+      +--------------------+\n                                                                    |\n                                                                    v\n                                                          +--------------------+\n                                                          | Minimal Update DOM |\n                                                          +--------------------+\n```\n\n## Tabel Perbandingan Tool Setup Proyek React\n\n| Tool | Kecepatan Startup | Status Industri | Catatan Penggunaan |\n|---|---|---|---|\n| **Vite** | Sangat Cepat (< 1 detik) | Standard Utama | Memakai Native ESM & Esbuild. Sangat direkomendasikan. |\n| **Create React App (CRA)** | Lambat (10-30 detik) | Deprecated (Usang) | Memakai Webpack lama. Jangan gunakan untuk proyek baru. |\n| **Next.js** | Cepat | Standard Fullstack/SSR | Framework di atas React untuk Routing & Server Rendering. |\n\n## Analogi Dunia Nyata\n\nBayangkan kamu memesan makanan di restoran cepat saji. Di JavaScript murni (imperatif), kamu harus masuk ke dapur, menyalakan kompor, memasak daging, memotong roti, dan menyusun burger sendiri. Di React (deklaratif), kamu cukup memesan 'Paket Burger Nomor 3' di kasir. Kasir (React) yang akan berkoordinasi dengan dapur (DOM) untuk menyiapkan hidangan persis sesuai pesananmu.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Membuka file `index.html` langsung di browser**\n> File React/Vite tidak bisa dibuka langsung via `file://...` karena membutuhkan kompilasi JSX & modul ESM. Kamu wajib menjalankannya melalui dev server (`npm run dev`).\n\n> **Jebakan 2: Versi Node.js yang usang**\n> Vite membutuhkan Node.js minimal versi 18+. Pastikan memeriksa versi Node.js kamu sebelum memulai (`node -v`).\n\n## Kaitan ke Dunia Kerja\n\nSaat wawancara kerja atau onboarding di perusahaan tech, kamu akan diminta melakukan *clone* repository dan menjalankan environment lokal. Kemahiran mempersiapkan env React dengan Vite, mengkonfigurasi TypeScript, serta menggunakan React DevTools untuk menginspeksi hierarki komponen adalah skill mendasar yang langsung diuji pada hari pertama kamu bekerja."
        },
        {
          "kind": "step",
          "id": "react-0-1",
          "title": "Memeriksa Lingkungan Node.js & npm",
          "explanation": "Sebelum membuat aplikasi React, komputer kamu harus terpasang Node.js dan package manager npm. Node.js bertindak sebagai runtime environment untuk menjalankan tooling React seperti Vite, Babel, dan TypeScript compiler. Tanpa Node.js, kamu tidak bisa menjalankan perintah npm atau mengompilasi sintaks JSX. Jebakan umum pemula adalah mencoba menjalankan perintah npm di terminal tanpa menginstal Node.js terlebih dahulu.",
          "example": {
            "code": "node -v\nnpm -v",
            "output": "v20.11.0\n10.2.4",
            "note": "Pastikan Node.js versi 18 ke atas terpasang di komputermu."
          },
          "instruction": "Ketik perintah terminal untuk memeriksa versi Node.js yang terpasang di sistem.",
          "starterCode": "# Ketik perintah pemeriksaan versi Node.js di bawah\n",
          "language": "text",
          "tests": [
            {
              "pattern": "node\\s+-v|node\\s+--version",
              "message": "Gunakan perintah: node -v"
            }
          ],
          "solution": "node -v"
        },
        {
          "kind": "step",
          "id": "react-0-2",
          "title": "Inisialisasi Proyek React + TS dengan Vite",
          "explanation": "Vite (`npm create vite@latest`) adalah standar industri modern untuk menginisialisasi proyek React. Opsi `--template react-ts` langsung menyiapkan dukungan TypeScript secara otomatis tanpa konfigurasi manual yang rumit. Proses scaffold ini membuat struktur folder lengkap beserta file pendukungnya. Jebakan yang sering terjadi adalah lupa berpindah ke folder proyek (`cd nama-proyek`) sebelum menjalankan `npm install`.",
          "example": {
            "code": "npm create vite@latest my-react-app -- --template react-ts",
            "output": "Scaffolding project in /path/to/my-react-app...\n\nDone. Now run:\n  cd my-react-app\n  npm install\n  npm run dev",
            "note": "Perintah ini membuat folder baru berisi template React berbasis TypeScript."
          },
          "instruction": "Tuliskan perintah CLI untuk menginisialisasi proyek Vite bernama `bipack-app` menggunakan template `react-ts`.",
          "starterCode": "# Tulis perintah npm create vite di bawah\n",
          "language": "text",
          "tests": [
            {
              "pattern": "npm\\s+create\\s+vite(@latest)?\\s+bipack-app\\s+--\\s+--template\\s+react-ts",
              "message": "Tuliskan: npm create vite@latest bipack-app -- --template react-ts"
            }
          ],
          "solution": "npm create vite@latest bipack-app -- --template react-ts"
        },
        {
          "kind": "step",
          "id": "react-0-3",
          "title": "Memahami Anatomi & Struktur Folder Vite",
          "explanation": "Titik masuk utama aplikasi React Vite adalah `src/main.tsx`. File ini menggunakan `ReactDOM.createRoot` untuk merender komponen utama `App.tsx` ke dalam elemen HTML ber-id `root` yang ada di `index.html`. Dengan metode ini, seluruh pohon komponen React disuntikkan ke dalam satu tempat di DOM browser. Jebakan umum adalah menghapus div id='root' di index.html yang mengakibatkan aplikasi React tidak muncul di layar.",
          "example": {
            "code": "import React from \"react\";\nimport ReactDOM from \"react-dom/client\";\nimport App from \"./App\";\n\nReactDOM.createRoot(document.getElementById(\"root\")!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);",
            "output": "Elemen App dirender ke div#root di index.html.",
            "note": "React.StrictMode membantu mendeteksi potensi bug dan efek samping tak terduga selama masa pengembangan."
          },
          "instruction": "Lengkapi pemanggilan `createRoot` dengan mencari elemen `document.getElementById('root')` lalu panggil `.render(<App />)`.",
          "starterCode": "// Lengkapi pemanggilan ReactDOM.createRoot di bawah\nReactDOM.createRoot(",
          "language": "jsx",
          "tests": [
            {
              "pattern": "ReactDOM\\.createRoot\\(\\s*document\\.getElementById\\(['\"]root['\"]\\)!?\\s*\\)\\.render\\(\\s*<App\\s*\\/?>\\s*\\)",
              "message": "Gunakan: ReactDOM.createRoot(document.getElementById('root')!).render(<App />);"
            }
          ],
          "solution": "ReactDOM.createRoot(document.getElementById('root')!).render(<App />);"
        },
        {
          "kind": "step",
          "id": "react-0-4",
          "title": "Debugging Komponen dengan React DevTools",
          "explanation": "React Developer Tools adalah ekstensi browser (Chrome/Firefox) wajib bagi pengembang React. Ekstensi ini menambahkan tab Components dan Profiler pada DevTools browser untuk menginspeksi state, props, dan hierarki komponen secara real-time. Dengan tool ini, kamu tidak perlu menabur console.log di mana-mana saat menginvestigasi bug. Jebakan umum pemula adalah membingungkan inspect element bawaan HTML biasa dengan tab Components khusus React.",
          "example": {
            "code": "// Di dalam React DevTools tab Components:\n// <App>\n//   <Header title=\"BiLearn\">\n//     state: { user: \"Bimo\" }",
            "output": "Hierarki komponen dan nilai props/state terlihat langsung tanpa console.log.",
            "note": "React DevTools mempermudah melacak komponen mana yang mengalami re-render berlebihan."
          },
          "instruction": "Tuliskan nama tab DevTools browser bawaan React yang digunakan khusus untuk menginspeksi struktur tree dan state komponen.",
          "starterCode": "// Tulis nama tab React DevTools di sini dalam bentuk string\nconst tabName = ",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+tabName\\s*=\\s*['\"]Components['\"]",
              "message": "Tuliskan: const tabName = \"Components\";"
            }
          ],
          "solution": "const tabName = \"Components\";"
        },
        {
          "kind": "step",
          "id": "react-0-5",
          "title": "Menjalankan Dev Server & Build Produksi",
          "explanation": "Untuk memulai server lokal pengembangan gunakan perintah `npm run dev`. Perintah ini menyalakan server Vite dengan fitur Hot Module Replacement (HMR) yang memperbarui layar secara instan saat kode diubah. Saat aplikasi siap dirilis ke server produksi, jalankan `npm run build` yang akan mengompilasi dan mengoptimasi kode ke dalam folder `dist/`. Jebakan umum adalah mengupload folder `src/` langsung ke hosting alih-alih folder hasil build `dist/`.",
          "example": {
            "code": "npm run dev\n# atau untuk produksi:\nnpm run build",
            "output": "  VITE v6.0.0  ready in 280 ms\n  ➜  Local:   http://localhost:5173/\n\ndist/index.html    0.45 kB\ndist/assets/index.js 142.10 kB",
            "note": "Folder dist/ berisi file statis terkompresi yang siap di-deploy ke hosting."
          },
          "instruction": "Tuliskan perintah skrip npm untuk membangun bundel produksi (production build) aplikasi React.",
          "starterCode": "# Tulis perintah npm build di bawah\n",
          "language": "text",
          "tests": [
            {
              "pattern": "npm\\s+run\\s+build",
              "message": "Gunakan perintah: npm run build"
            }
          ],
          "solution": "npm run build"
        },
        {
          "kind": "step",
          "id": "react-0-6",
          "title": "CRA vs Vite: Kenapa Industri Beralih",
          "explanation": "Create React App (CRA) dahulunya adalah bundler standar namun telah resmi dihentikan pemeliharaannya (deprecated) oleh tim React. Vite menggantikannya karena memanfaatkan keunggulan Native ES Modules browser sehingga server lokal menyala dalam hitungan milidetik. Memahami alasan pergeseran teknologi ini penting agar kamu tidak menggunakan perkakas usang dalam proyek baru. Jebakan bagi pemula adalah mengikuti tutorial lama di internet yang masih menyuruh menggunakan `npx create-react-app`.",
          "example": {
            "code": "// Perbandingan Startup Time:\n// CRA (Webpack): Bundling seluruh aplikasi sebelum server nyala (15s)\n// Vite (ESM): Langsung menyalakan server, mengompilasi file hanya saat diminta (0.2s)",
            "output": "Vite 50x lebih cepat daripada CRA pada proyek skala besar.",
            "note": "Tim React sekarang merekomendasikan Vite untuk SPA dan Next.js untuk SSR."
          },
          "instruction": "Tuliskan string nama bundler modern pengganti CRA yang direkomendasikan oleh dokumentasi resmi React saat ini.",
          "starterCode": "const modernBundler = ",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+modernBundler\\s*=\\s*['\"]Vite['\"]",
              "message": "Tuliskan: const modernBundler = \"Vite\";"
            }
          ],
          "solution": "const modernBundler = \"Vite\";"
        },
        {
          "kind": "quiz",
          "id": "react-0-kuis",
          "title": "Kuis: Persiapan & Instalasi React",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Apa rumus mental model utama dalam pemrograman deklaratif React?",
              "choices": [
                "UI = document.querySelector(selector)",
                "UI = f(state)",
                "State = f(DOM)",
                "UI = HTML + CSS + JS"
              ],
              "answerIndex": 1,
              "explanation": "Di React, UI merupakan hasil dari fungsi yang menerima state (UI = f(state)). Perubahan tampilan selalu dipicu oleh perubahan state."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Mengapa proyek berbasis Vite jauh lebih cepat dibanding Create React App (CRA) dalam mode development?",
              "choices": [
                "Karena Vite tidak menggunakan JavaScript",
                "Karena Vite memanfaatkan Native ES Modules (ESM) di browser sehingga tidak perlu melakukan bundel ulang seluruh aplikasi saat startup",
                "Karena Vite menghapus fungsi TypeScript",
                "Karena Vite berjalan di dalam server backend Python"
              ],
              "answerIndex": 1,
              "explanation": "Vite memanfaatkan fitur Native ESM bawaan browser modern, sehingga server langsung aktif tanpa perlu mem-bundel semua file di awal."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "File manakah di dalam proyek React Vite yang bertanggung jawab memanggil ReactDOM.createRoot untuk merender komponen utama App?",
              "choices": [
                "src/App.tsx",
                "src/main.tsx",
                "vite.config.ts",
                "package.json"
              ],
              "answerIndex": 1,
              "explanation": "src/main.tsx adalah entry point aplikasi di mana React menautkan virtual DOM ke elemen #root di file HTML."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Apa kegunaan utama dari pembungkus <React.StrictMode> di sekitar komponen utama aplikasi?",
              "choices": [
                "Mempercepat kecepatan download aplikasi di browser",
                "Membantu mendeteksi bug, efek samping tidak aman, dan penggunaan API terdepresiasi selama masa pengembangan (development mode)",
                "Mengubah warna tampilan aplikasi menjadi mode gelap",
                "Mencegah pengguna mematikan koneksi internet"
              ],
              "answerIndex": 1,
              "explanation": "StrictMode menjalankan beberapa fungsi seperti effect callback 2x di dev mode untuk mengecek kebersihan efek samping dan mendeteksi bug tersembunyi."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Perintah npm apakah yang digunakan untuk memproduksi bundel statis teroptimasi yang siap di-deploy ke server hosting?",
              "choices": [
                "npm run dev",
                "npm run start",
                "npm run build",
                "npm test"
              ],
              "answerIndex": 2,
              "explanation": "npm run build memicu kompilasi TypeScript dan minifikasi bundel oleh Vite ke dalam folder output dist/."
            }
          ]
        }
      ]
    },
    {
      "slug": "komponen-jsx",
      "title": "Komponen & JSX",
      "description": "Mental model React: UI = fungsi dari data. Semua dimulai dari sini.",
      "topics": [
        "Kenapa React ada: masalah DOM manual di aplikasi besar",
        "Komponen = fungsi yang mengembalikan JSX",
        "Aturan JSX: satu root, className, ekspresi {}",
        "Render kondisional: &&, ternary, early return",
        "Render list dengan map & kenapa key penting",
        "Setup proyek dengan Vite",
        "Struktur file komponen yang rapi"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-1-m1",
          "title": "Peta Mental React: UI Sebagai Fungsi dari Data",
          "body": "# Pengertian Komponen & JSX\n\nDalam pengembangan web modern dengan React, **Komponen** adalah blok pembangun UI independen yang dapat digunakan kembali. Setiap komponen berbentuk fungsi JavaScript yang mengembalikan sintaks khusus bernama **JSX (JavaScript XML)**. \n\nJSX memungkinkan kamu menulis sintaks mirip HTML langsung di dalam file JavaScript. Di belakang layar, pembangun seperti Vite dan Babel mengubah sintaks JSX tersebut menjadi panggilan fungsi JavaScript murni `React.createElement(...)`.\n\nSatu aturan dasar yang membedakan React dari HTML biasa: **UI adalah fungsi dari state**. Kamu tidak menyunting elemen HTML secara langsung, melainkan mengubah data yang melandasinya.\n\n## Visualisasi Kompilasi JSX ke JavaScript\n\n```text\nJSX:\n<button className=\"btn\">Klik Saya</button>\n\n   │  (Dikompilasi oleh Babel/Vite)\n   ▼\n\nJavaScript Murni:\nReact.createElement('button', { className: 'btn' }, 'Klik Saya');\n```\n\n## Tabel Perbandingan HTML Biasa vs JSX React\n\n| Fitur | HTML Biasa | JSX React |\n|---|---|---|\n| Penamaan Atribut Kelas | `class=\"card\"` | `className=\"card\"` |\n| Penutup Tag Tunggal | `<img>` atau `<input>` | Wajib ditutup: `<img />` atau `<input />` |\n| Sisipan Variabel | Terpisah di file JS | Menggunakan kurung kurawal `{variabel}` |\n| Root Element | Boleh banyak elemen sejajar | Wajib 1 root element atau Fragment `<>...</>` |\n\n## Analogi Dunia Nyata\n\nBayangkan komponen React seperti cetakan kue (stempel). Cetakan itu sendiri adalah fungsi komponennya, sedangkan adonan kue dengan berbagai warna adalah data (props/state). Kamu bisa mencetak 100 kue dengan bentuk sama persis tanpa perlu mengukir setiap kue dari nol.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Nama fungsi komponen diawali huruf kecil**\n> Jika kamu menulis `function button()`, React akan menganggapnya sebagai tag HTML kustom yang tidak valid. Nama komponen **WAJIB** diawali huruf kapital (PascalCase), contoh: `function Button()`.\n\n> **Jebakan 2: Mengembalikan lebih dari satu elemen root tanpa Fragment**\n> Menulis `return <h1>A</h1><h2>B</h2>` akan menyebabkan error kompilasi. Kamu harus membungkusnya dalam satu pembungkus: `return <><h1>A</h1><h2>B</h2></>`.\n\n## Kaitan ke Dunia Kerja\n\nDi tim frontend profesional, setiap bagian dari tampilan—mulai dari tombol kecil, kartu produk, hingga header navigasi—dipecah menjadi komponen terisolasi. Penataan komponen yang rapi memudahkan tim melakukan code review, pengujian otomatis, dan kolaborasi antar pengembang."
        },
        {
          "kind": "step",
          "id": "react-1-1",
          "title": "Kenapa React Ada?",
          "explanation": "Dengan JavaScript biasa kamu memberi perintah langkah demi langkah: cari elemennya di halaman, lalu ganti isinya sendiri (`document.querySelector(...).textContent = ...`). Cara ini disebut **imperatif**, dan jadi melelahkan begitu halaman punya puluhan bagian yang bisa berubah. React memakai cara **deklaratif**: kamu cukup menulis 'seperti apa tampilannya untuk data ini', lalu React yang mengurus perubahan di halaman. Satu kalimat yang perlu kamu ingat sepanjang track ini: tampilan adalah hasil dari data.",
          "example": {
            "code": "// cara lama (imperatif) — kamu yang mengatur DOM sendiri\ndocument.querySelector(\"#judul\").textContent = \"Beranda\";\n\n// cara React (deklaratif) — kamu cukup mendeskripsikan hasilnya\nfunction Beranda() {\n  return <h1>Beranda</h1>;\n}",
            "output": "Keduanya menampilkan judul yang sama, tapi versi React tidak menyentuh document sama sekali.",
            "note": "Perhatikan: di versi React tidak ada perintah 'cari elemen lalu ubah'. Yang ada hanya deskripsi hasil akhirnya."
          },
          "instruction": "Sebuah halaman dashboard perlu judul bertuliskan `Dashboard`. Tulis versi React-nya: sebuah fungsi bernama `Judul` yang mengembalikan elemen `<h1>` berisi teks itu — tanpa menyentuh `document`.",
          "starterCode": "// Tulis fungsi Judul di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+Judul\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*return\\s*\\(?\\s*<h1>\\s*Dashboard\\s*</h1>",
              "message": "Buat function Judul() yang me-return elemen <h1> berisi teks Dashboard."
            },
            {
              "pattern": "document\\.",
              "mustNotMatch": true,
              "message": "Di React kamu tidak perlu memakai document — cukup kembalikan JSX-nya."
            }
          ],
          "solution": "function Judul() {\n  return <h1>Dashboard</h1>;\n}"
        },
        {
          "kind": "step",
          "id": "react-1-2",
          "title": "Komponen = Fungsi Mengembalikan JSX",
          "explanation": "Komponen React adalah fungsi JavaScript murni yang mengembalikan deskripsi antarmuka berbentuk JSX. Nama fungsi komponen wajib diawali dengan huruf kapital (PascalCase) agar React dapat membedakannya dari tag HTML bawaan browser seperti `<div>` atau `<button>`. Fitur ini mempermudah kita memecah tampilan antarmuka menjadi bagian-bagian kecil yang terisolasi dan dapat digunakan kembali. Jebakan umum bagi pemula adalah lupa menyertakan kata kunci `return` saat membuat fungsi komponen multi-baris.",
          "example": {
            "code": "function Header() {\n  return <header className=\"navbar\">Selamat Datang</header>;\n}",
            "output": "Elemen header dirender ke layar.",
            "note": "Nama fungsi komponen harus diawali huruf kapital agar React mengenalinya sebagai komponen."
          },
          "instruction": "Buat komponen `function Button()` yang mengembalikan `<button className=\"btn\">Klik Saya</button>`.",
          "starterCode": "// Tulis komponen Button di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+Button\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<button\\s+className=[\"']btn[\"']>\\s*Klik Saya\\s*</button>\\s*;?\\s*\\}",
              "message": "Definisikan function Button() yang mengembalikan <button className=\"btn\">Klik Saya</button>"
            }
          ],
          "solution": "function Button() {\n  return <button className=\"btn\">Klik Saya</button>;\n}"
        },
        {
          "kind": "step",
          "id": "react-1-3",
          "title": "Aturan JSX: Satu Root & Ekspresi {}",
          "explanation": "JSX mewajibkan seluruh elemen yang dikembalikan dibungkus dalam tepat satu elemen root utama atau Fragment (`<>...</>`). Karakteristik ini disebabkan karena fungsi JavaScript biasa tidak dapat mengembalikan dua nilai objek terpisah secara bersamaan tanpa pembungkus. Selain itu, atribut `class` di HTML ditulis sebagai `className` di JSX untuk menghindari bentrokan dengan kata kunci kelas JavaScript, dan variabel JS disematkan menggunakan kurung kurawal `{}`. Jebakan yang sering ditemui adalah lupa menutup tag tunggal seperti `<img />` atau `<input />` yang memicu error kompilasi.",
          "example": {
            "code": "function Card() {\n  const produk = \"Laptop\";\n  return (\n    <div className=\"card\">\n      <h2>{produk}</h2>\n    </div>\n  );\n}",
            "output": "<h2>Laptop</h2> di dalam div.card",
            "note": "Gunakan <>...</> (Fragment) jika tidak ingin menambah elemen div ekstra di HTML."
          },
          "instruction": "Buat komponen `function Title()` dengan `const judul = \"BiLearn\"`, lalu kembalikan `<h1>{judul}</h1>`.",
          "starterCode": "// Tulis komponen Title di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+judul\\s*=\\s*['\"]BiLearn['\"]",
              "message": "Deklarasikan const judul = \"BiLearn\""
            },
            {
              "pattern": "<h1>\\s*\\{\\s*judul\\s*\\}\\s*</h1>",
              "message": "Kembalikan <h1>{judul}</h1>"
            }
          ],
          "solution": "function Title() {\n  const judul = \"BiLearn\";\n  return <h1>{judul}</h1>;\n}"
        },
        {
          "kind": "step",
          "id": "react-1-4",
          "title": "Render Kondisional: &&, Ternary, Early Return",
          "explanation": "Render kondisional memungkinkan kita menampilkan atau menyembunyikan komponen antarmuka berdasarkan kondisi logika data tertentu. Kamu dapat menggunakan operator ternary (`kondisi ? <KomponenA /> : <KomponenB />`) untuk dua cabang kondisi, atau operator boolean `&&` untuk kondisi tunggal. Teknik ini sangat vital untuk menampilkan indikator loading, status login pengguna, atau pesan kesalahan. Jebakan klasik pada operator `&&` adalah jika variabel di sebelah kiri bernilai angka `0`, React akan merender angka `0` tersebut ke layar alih-alih menyembunyikannya.",
          "example": {
            "code": "function Status({ isOnline }) {\n  return <div>{isOnline ? \"Online\" : \"Offline\"}</div>;\n}",
            "output": "Menampilkan 'Online' jika isOnline true, sebaliknya 'Offline'.",
            "note": "Untuk kondisi tunggal gunakan: isLogin && <UserMenu />."
          },
          "instruction": "Terapkan render kondisional menggunakan operator `&&`. Jika `isLoggedIn` bernilai true, kembalikan elemen `<button>Logout</button>`.",
          "starterCode": "// Tulis return kondisional di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "\\{\\s*isLoggedIn\\s*&&\\s*<button>\\s*Logout\\s*</button>\\s*\\}",
              "message": "Gunakan: {isLoggedIn && <button>Logout</button>}"
            }
          ],
          "solution": "{isLoggedIn && <button>Logout</button>}"
        },
        {
          "kind": "step",
          "id": "react-1-5",
          "title": "Render List dengan map & Key",
          "explanation": "Daftar data array dirender ke dalam struktur JSX dengan memanfaatkan fungsi bawaan JavaScript `array.map()`. Setiap elemen list yang dihasilkan oleh fungsi map wajib diberi prop `key` dengan nilai identitas unik (seperti ID dari database). Prop `key` ini membantu Virtual DOM React melacak item mana yang ditambah, diubah, atau dihapus secara presisi tanpa merender ulang seluruh isi daftar. Jebakan paling berisiko adalah menggunakan `index` array sebagai key pada daftar yang dapat dihapus atau diurutkan ulang.",
          "example": {
            "code": "const item = [\"Apel\", \"Jeruk\"];\nreturn (\n  <ul>\n    {item.map((b, i) => (\n      <li key={i}>{b}</li>\n    ))}\n  </ul>\n);",
            "output": "Daftar ul berisi li Apel dan Jeruk",
            "note": "Prop key membantu React menentukan elemen mana yang berubah saat re-render."
          },
          "instruction": "Buat komponen `function Menu()` dengan `const hobi = ['Koding', 'Membaca']` lalu render list `<ul>` menggunakan `map()` dengan prop `key`.",
          "starterCode": "// Tulis komponen Menu di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "hobi\\.map",
              "message": "Gunakan hobi.map(...) untuk merender list"
            },
            {
              "pattern": "key=",
              "message": "Tambahkan prop key pada elemen <li>"
            }
          ],
          "solution": "function Menu() {\n  const hobi = [\"Koding\", \"Membaca\"];\n  return (\n    <ul>\n      {hobi.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}"
        },
        {
          "kind": "step",
          "id": "react-1-6",
          "title": "Setup Proyek dengan Vite",
          "explanation": "Vite adalah alat pembangun proyek modern yang menjadi standar de-facto industri untuk membuat aplikasi React baru secara kilat (`npm create vite@latest`). Vite menggantikan Create React App (CRA) yang telah usang karena Vite memanfaatkan fitur Native ES Modules bawaan browser untuk memberikan performa server lokal yang sangat cepat. Menguasai pembuatan proyek dengan Vite sangat penting agar lingkungan pengembanganmu sesuai dengan standar pekerjaan industri saat ini. Jebakan pemula adalah lupa berpindah folder setelah scaffolding sebelum menjalankan perintah instalasi.",
          "example": {
            "code": "npm create vite@latest my-app -- --template react-ts",
            "output": "added 312 packages in 18s\n\n  VITE v6.0.5  ready in 421 ms\n  ➜  Local:   http://localhost:5173/",
            "note": "Vite menggantikan Create React App (CRA) yang sudah usang."
          },
          "instruction": "Tulis perintah npx/npm untuk menginisialisasi proyek Vite baru dengan nama `my-app`.",
          "starterCode": "# Tulis perintah di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "npm\\s+create\\s+vite(@latest)?\\s+my-app",
              "message": "Gunakan: npm create vite@latest my-app"
            }
          ],
          "solution": "npm create vite@latest my-app"
        },
        {
          "kind": "step",
          "id": "react-1-7",
          "title": "Struktur File Komponen yang Rapi",
          "explanation": "Mengisolasi setiap komponen ke dalam berkasnya sendiri di folder `src/components/` adalah praktik arsitektur terbaik dalam pengembangan React. Komponen diekspor menggunakan `export default` atau named export agar dapat di-import dengan rapi di bagian aplikasi lain. Pola ini menjaga agar kode proyek tetap bersih, terorganisir, serta mempermudah pencarian file saat aplikasi tumbuh menjadi sangat besar. Jebakan umum adalah mencampur belasan komponen berbeda ke dalam satu file `App.tsx` raksasa.",
          "example": {
            "code": "// src/components/Button.tsx\nexport default function Button() { return <button>OK</button>; }",
            "output": "Struktur file terisolasi dan mudah di-import di tempat lain.",
            "note": "Gunakan export default atau named export secara konsisten di tim."
          },
          "instruction": "Lakukan export default pada sebuah fungsi komponen bernama `Card` yang mengembalikan elemen `<div>Card</div>`.",
          "starterCode": "// Tulis export default di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "export\\s+default\\s+function\\s+Card\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<div>\\s*Card\\s*</div>\\s*;?\\s*\\}",
              "message": "Tuliskan: export default function Card() { return <div>Card</div>; }"
            }
          ],
          "solution": "export default function Card() { return <div>Card</div>; }"
        },
        {
          "kind": "quiz",
          "id": "react-1-kuis",
          "title": "Kuis: Komponen & JSX",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Mengapa prop `key` wajib dicantumkan saat melakukan render list di React?",
              "choices": [
                "Agar CSS bisa mengaplikasikan gaya dengan benar",
                "Membantu React mengidentifikasi item mana yang diubah atau dihapus saat re-render demi performa Virtual DOM",
                "Agar item bisa diklik",
                "Diwajibkan oleh browser"
              ],
              "answerIndex": 1,
              "explanation": "Prop `key` memberikan identitas unik pada elemen list agar Virtual DOM React tidak merender ulang seluruh list secara tidak efisien."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Sintaks apakah yang digunakan di dalam JSX untuk menyisipkan variabel atau ekspresi JavaScript?",
              "choices": [
                "{{ }}",
                "[ ]",
                "{ }",
                "$( )"
              ],
              "answerIndex": 2,
              "explanation": "Kurung kurawal tunggal { } digunakan dalam JSX untuk mengevaluasi ekspresi JavaScript di dalamnya."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Apa syarat penamaan sebuah fungsi agar dikenali oleh React sebagai komponen?",
              "choices": [
                "Harus diawali huruf kecil",
                "Harus menggunakan PascalCase (diawali huruf kapital)",
                "Harus berakhiran kata Component",
                "Tidak ada syarat penamaan"
              ],
              "answerIndex": 1,
              "explanation": "React membedakan elemen HTML biasa (seperti <div>) dan komponen kustom dengan memeriksa apakah nama tag diawali dengan huruf kapital."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Tim kamu sering menjumpai error saat merender list. Ketika sebuah array kosong dipetakan (map) di JSX, apa yang akan dirender oleh React?",
              "choices": [
                "Error eksekusi",
                "Menampilkan tulisan 'undefined'",
                "Tidak merender apapun (kosong)",
                "Elemen <div> kosong"
              ],
              "answerIndex": 2,
              "explanation": "Jika array kosong, array.map() mengembalikan array kosong, dan JSX akan secara aman mengabaikannya tanpa merender apapun."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Apakah kamu bisa menggunakan nama fungsi 'headerComponent()' (berawalan huruf kecil) untuk membuat sebuah komponen React kustom yang valid?",
              "choices": [
                "Bisa, asalkan mereturn JSX yang valid",
                "Tidak, React akan menganggapnya sebagai elemen HTML standar (seperti div) dan bukan komponen",
                "Bisa, namun performanya akan lebih lambat",
                "Tidak, JavaScript akan langsung melemparkan SyntaxError"
              ],
              "answerIndex": 1,
              "explanation": "React membedakan elemen HTML bawaan (huruf kecil) dan komponen kustom (huruf besar/PascalCase)."
            }
          ]
        }
      ]
    },
    {
      "slug": "props-komposisi",
      "title": "Props & Komposisi",
      "description": "Data mengalir ke bawah — dan cara menyusun komponen seperti LEGO.",
      "topics": [
        "Props: mengoper data & mengetik props dengan TS",
        "children — komponen pembungkus",
        "Komposisi vs konfigurasi: banyak props kecil vs satu props objek",
        "Lifting state up (pengantar)",
        "Default props & destructuring pattern",
        "Memecah UI jadi pohon komponen (latihan dari mockup)"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-2-m1",
          "title": "Prinsip Props & Seni Komposisi Komponen",
          "body": "# Pengertian Props & Komposisi\n\n**Props (singkatan dari Properties)** adalah mekanisme untuk mengoper data dari komponen induk (*parent*) ke komponen anak (*child*). Jika komponen dianalogikan sebagai fungsi JavaScript biasa, maka props adalah argumen atau parameter masukan yang diterima oleh fungsi tersebut.\n\nSalah satu prinsip paling krusial di React adalah **Unidirectional Data Flow** (aliran data satu arah). Data selalu mengalir ke bawah dari induk ke anak via props. Komponen anak **TIDAK BOLEH** memutasi atau mengubah nilai props yang diterimanya secara langsung karena props bersifat *Read-Only* (immutable).\n\n## Diagram Aliran Data Unidirectional\n\n```text\n       +------------------+\n       | Parent Component | (state: user=\"Bimo\")\n       +------------------+\n                 │\n                 │ passed via props\n                 ▼\n       +------------------+\n       | Child Component  | (props: { user: \"Bimo\" })\n       +------------------+\n```\n\n## Tabel Perbandingan Komposisi vs Konfigurasi Props\n\n| Pendekatan | Contoh Kode | Kelebihan / Kekurangan |\n|---|---|---|\n| **Konfigurasi (Monolit)** | `<Card title=\"A\" subtitle=\"B\" icon=\"C\" showButton={true} />` | Rawan prop-drilling dan sulit dikustomisasi saat ada variasi baru. |\n| **Komposisi (Fleksibel)** | `<Card><CardHeader /><CardBody /><CardFooter /></Card>` | Fleksibel seperti LEGO, mudah dirawat, dan mendukung prop `children`. |\n\n## Analogi Dunia Nyata\n\nBayangkan sebuah bingkai foto fisik (komponen `Card`). Bingkai itu sendiri menyediakan struktur dasar dan kaca pembungkus (prop `children`). Kamu bebas memasukkan foto keluarga, sertifikat, atau lukisan di dalam bingkai tersebut tanpa perlu membuat bingkai baru yang khusus untuk setiap jenis gambar.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Memutasi props di dalam komponen anak**\n> Menulis `props.score = 100` di dalam komponen anak akan menyebabkan error atau tingkah laku UI yang tidak konsisten. Jika nilai perlu diubah, ubahlah di tingkat induk tempat state itu dikelola.\n\n> **Jebakan 2: Terlalu banyak membuat props konfigurasi**\n> Hindari membuat komponen raksasa dengan 20+ props opsional. Gunakan pola komposisi memanfaatkan prop `children` agar komponen lebih fleksibel.\n\n## Kaitan ke Dunia Kerja\n\nDesainer UI/UX di perusahaan modern menggunakan sistem desain (Design System) berbasis Figma. Pengembang frontend mentranslasikan komponen Figma tersebut ke dalam kumpulan komponen React yang reusable menggunakan props yang ter-type rapi dengan TypeScript. Skill menyusun props dan komposisi adalah kunci membangun perpustakaan UI internal tim."
        },
        {
          "kind": "step",
          "id": "react-2-1",
          "title": "Props: Mengoper Data & Typing dengan TS",
          "explanation": "Props adalah mekanisme utama untuk mengoper data masukan dari komponen induk (*parent*) ke komponen anak (*child*). Dengan TypeScript, bentuk struktur props diketik dengan tepat menggunakan `interface` atau `type` untuk mencegah kesalahan tipe data saat pengembangan. Di dalam fungsi komponen, props biasanya langsung dibongkar menggunakan teknik destructuring parameter agar kode lebih ringkas dan mudah dibaca. Jebakan utama yang harus diingat adalah bahwa props bersifat Read-Only sehingga tidak boleh diubah nilainya di dalam komponen anak.",
          "example": {
            "code": "interface UserProps { name: string; }\nfunction UserCard({ name }: UserProps) {\n  return <h3>{name}</h3>;\n}",
            "output": "<h3>Budi</h3>",
            "note": "Props bersifat Read-Only! Jangan pernah mengubah nilai props secara langsung."
          },
          "instruction": "Buat interface `BadgeProps { text: string }` dan komponen `function Badge({ text }: BadgeProps)` yang mengembalikan `<span>{text}</span>`.",
          "starterCode": "// Tulis BadgeProps dan komponen Badge di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "interface\\s+BadgeProps\\s*\\{\\s*text\\s*:\\s*string\\s*;?\\s*\\}",
              "message": "Definisikan interface BadgeProps { text: string; }"
            },
            {
              "pattern": "function\\s+Badge\\s*\\(\\s*\\{\\s*text\\s*\\}\\s*:\\s*BadgeProps\\s*\\)",
              "message": "Gunakan destructuring: function Badge({ text }: BadgeProps)"
            }
          ],
          "solution": "interface BadgeProps {\n  text: string;\n}\n\nfunction Badge({ text }: BadgeProps) {\n  return <span>{text}</span>;\n}"
        },
        {
          "kind": "step",
          "id": "react-2-2",
          "title": "children — Komponen Pembungkus",
          "explanation": "Prop spesial `children` adalah fitur bawaan React yang secara otomatis menangkap elemen JSX apapun yang disematkan di antara tag pembuka dan tag penutup komponen (`<Card><p>Konten</p></Card>`). Fitur ini memungkinkan pembuatan komponen kontainer pembungkus yang fleksibel tanpa perlu tahu elemen apa yang akan dimasukkan ke dalamnya. Dalam TypeScript, tipe data untuk prop `children` umumnya diketik sebagai `React.ReactNode`. Jebakan bagi pemula adalah lupa mengekspor atau lupa mengetikkan `children` pada interface props.",
          "example": {
            "code": "interface ModalProps { children: React.ReactNode; }\nfunction Modal({ children }: ModalProps) {\n  return <div className=\"modal\">{children}</div>;\n}",
            "output": "Elemen di dalam <Modal><p>Isi Modal</p></Modal> akan dirender pada prop children.",
            "note": "Tipe React.ReactNode digunakan untuk mengetik prop children di TypeScript."
          },
          "instruction": "Buat `interface CardProps { children: React.ReactNode }` dan komponen `function Card({ children }: CardProps)` yang mengembalikan `<div>{children}</div>`.",
          "starterCode": "// Tulis CardProps dan komponen Card di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "interface\\s+CardProps\\s*\\{\\s*children\\s*:\\s*React\\.ReactNode\\s*;?\\s*\\}",
              "message": "Definisikan CardProps { children: React.ReactNode; }"
            }
          ],
          "solution": "interface CardProps {\n  children: React.ReactNode;\n}\n\nfunction Card({ children }: CardProps) {\n  return <div>{children}</div>;\n}"
        },
        {
          "kind": "step",
          "id": "react-2-3",
          "title": "Komposisi vs Konfigurasi",
          "explanation": "Komposisi komponen adalah teknik merakit UI dari bagian-bagian komponen kecil fleksibel seperti menyusun blok LEGO, daripada membuat satu komponen raksasa dengan puluhan props konfigurasi. Pola komposisi membuat komponen lebih mudah diuji, fleksibel untuk perubahan desain di masa depan, dan mencegah kerumitan passing props yang tidak perlu. Teknik ini merupakan fondasi utama saat membangun sistem desain (Design System) aplikasi. Jebakan umum adalah memaksakan satu komponen menangani terlalu banyak variasi tampilan sekaligus via atribut boolean.",
          "example": {
            "code": "<Card><CardHeader /><CardBody /></Card>",
            "output": "Struktur fleksibel dan mudah dipelihara.",
            "note": "Pola komposisi meminimalkan prop drilling."
          },
          "instruction": "Buatlah elemen JSX di mana komponen `<Card>` membungkus komponen `<Header />` di dalamnya.",
          "starterCode": "// Tulis elemen JSX di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<Card>\\s*<Header\\s*/>\\s*</Card>",
              "message": "Tuliskan: <Card><Header /></Card>"
            }
          ],
          "solution": "<Card><Header /></Card>"
        },
        {
          "kind": "step",
          "id": "react-2-4",
          "title": "Lifting State Up",
          "explanation": "Lifting state up adalah pola memindahkan state ke komponen induk terdekat ketika dua atau lebih komponen anak membutuhkan akses ke data yang sama. Komponen induk menjadi sumber kebenaran tunggal (*single source of truth*) dan membagikan data tersebut ke anak-anaknya melalui props. Teknik ini menjaga agar data di seluruh bagian aplikasi tetap sinkron dan konsisten. Jebakan yang sering terjadi adalah menaikkan state terlalu tinggi ke root aplikasi padahal data tersebut hanya dibutuhkan oleh dua komponen bersebelahan.",
          "example": {
            "code": "// State dikelola di ParentComponent, dioper ke ChildA dan ChildB via props",
            "output": "Data tersinkronisasi antar komponen anak.",
            "note": "Single source of truth berada pada komponen induk."
          },
          "instruction": "Buat komponen `ParentComponent` yang mengembalikan elemen `<div>` berisi `<ChildA />` dan `<ChildB />`.",
          "starterCode": "// Tulis komponen ParentComponent di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+ParentComponent\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<div>\\s*<ChildA\\s*/>\\s*<ChildB\\s*/>\\s*</div>\\s*;?\\s*\\}",
              "message": "Definisikan ParentComponent yang merender <div><ChildA /><ChildB /></div>"
            }
          ],
          "solution": "function ParentComponent() {\n  return <div><ChildA /><ChildB /></div>;\n}"
        },
        {
          "kind": "step",
          "id": "react-2-5",
          "title": "Default Props & Destructuring Pattern",
          "explanation": "Default props dapat diberikan secara elegan menggunakan fitur nilai bawaan pada destructuring parameter fungsi JavaScript (`function Avatar({ size = 40 })`). Pola modern ini menggantikan penggunaan atribut `defaultProps` lama yang sudah tidak direkomendasikan pada komponen fungsi React. Memberikan nilai default mencegah terjadinya kesalahan render saat komponen dipanggil tanpa menyertakan prop opsional tersebut. Jebakan umum adalah lupa menentukan tipe opsional (`size?: number`) di interface TypeScript saat menggunakan default value.",
          "example": {
            "code": "function Button({ color = \"blue\", text }: ButtonProps) {\n  return <button className={color}>{text}</button>;\n}",
            "output": "Menggunakan warna 'blue' jika prop color tidak diberikan.",
            "note": "Pola default parameter JS ini menggantikan defaultProps lama."
          },
          "instruction": "Tulis parameter fungsi komponen `function Avatar({ size = 40 }: AvatarProps)`.",
          "starterCode": "// Tulis parameter komponen Avatar di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+Avatar\\s*\\(\\s*\\{\\s*size\\s*=\\s*40\\s*\\}\\s*:\\s*AvatarProps\\s*\\)",
              "message": "Gunakan: function Avatar({ size = 40 }: AvatarProps)"
            }
          ],
          "solution": "function Avatar({ size = 40 }: AvatarProps) {\n  return <div>Avatar</div>;\n}"
        },
        {
          "kind": "step",
          "id": "react-2-6",
          "title": "Memecah UI Jadi Pohon Komponen",
          "explanation": "Memecah maket desain UI (*mockup*) menjadi pohon hierarki komponen yang rapi adalah langkah awal paling penting dalam membangun aplikasi React. Setiap komponen idealnya memegang satu tanggung jawab tunggal (*Single Responsibility Principle*), seperti komponen Navbar, Sidebar, atau Footer. Pendekatan modular ini membuat kode lebih mudah dirawat dan dikembangkan oleh tim secara paralel. Jebakan bagi pemula adalah membuat komponen yang terlalu besar sehingga sulit dibaca dan diuji.",
          "example": {
            "code": "function App() { return <main><Navbar /><Content /></main>; }",
            "output": "Hierarki komponen bersih dan modular.",
            "note": "Setiap komponen idealnya memiliki 1 tanggung jawab tunggal (Single Responsibility)."
          },
          "instruction": "Buat komponen `function App()` yang mengembalikan `<main><Navbar /></main>`.",
          "starterCode": "// Tulis komponen App di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+App\\s*\\(\\s*\\)\\s*\\{\\s*return\\s*<main>\\s*<Navbar\\s*/>\\s*</main>\\s*;?\\s*\\}",
              "message": "Definisikan: function App() { return <main><Navbar /></main>; }"
            }
          ],
          "solution": "function App() {\n  return <main><Navbar /></main>;\n}"
        },
        {
          "kind": "quiz",
          "id": "react-2-kuis",
          "title": "Kuis: Props & Komposisi",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Apakah komponen anak (child) diperbolehkan mengubah nilai `props` yang diterimanya?",
              "choices": [
                "Boleh kapan saja",
                "TIDAK BOLEH. Props bersifat Read-Only (Immutable). Data yang dapat berubah harus dikelola via State",
                "Boleh jika menggunakan TypeScript",
                "Boleh jika di dalam useEffect"
              ],
              "answerIndex": 1,
              "explanation": "Props bersifat murni dan read-only. Data yang berubah-ubah harus dikelola lewat State."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Prop spesial apakah yang digunakan di React untuk merender elemen yang disisipkan di antara tag pembuka dan penutup komponen?",
              "choices": [
                "innerHtml",
                "content",
                "children",
                "elements"
              ],
              "answerIndex": 2,
              "explanation": "Prop `children` secara otomatis menangkap segala sesuatu yang dilewatkan di antara tag pembuka dan penutup komponen."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Manakah konsep yang lebih disarankan saat membangun komponen UI yang kompleks di React?",
              "choices": [
                "Membuat satu komponen besar dengan puluhan prop konfigurasi",
                "Menggunakan komposisi dengan merakit komponen-komponen kecil",
                "Menghindari pembuatan komponen dan menulis HTML secara manual",
                "Menyimpan semua data di variabel global"
              ],
              "answerIndex": 1,
              "explanation": "Komposisi (seperti menyusun blok LEGO) membuat komponen lebih fleksibel, mudah diuji, dan mengurangi prop drilling dibandingkan komponen raksasa."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Komponen A memanggil Komponen B. B butuh data dari A. Apa mekanisme yang disediakan React untuk mengalirkan data ini?",
              "choices": [
                "Menggunakan inheritance (pewarisan kelas)",
                "Melalui props yang dioper (passed down) dari A ke B",
                "Menggunakan localStorage untuk bertukar data",
                "A membaca state B secara langsung"
              ],
              "answerIndex": 1,
              "explanation": "Di React, data selalu mengalir satu arah ke bawah (one-way data flow) melalui mekanisme props."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Jika kamu menggunakan properti 'children' untuk membungkus konten dalam komponen Card, kamu sedang menerapkan pola desain apa?",
              "choices": [
                "Prop Drilling",
                "Render Props",
                "Komposisi (Composition)",
                "Higher Order Components (HOC)"
              ],
              "answerIndex": 2,
              "explanation": "Penggunaan 'children' merupakan contoh klasik dari Komposisi, di mana sebuah komponen menjadi kontainer pembungkus tanpa perlu tahu komponen anak apa yang ada di dalamnya."
            }
          ]
        }
      ]
    },
    {
      "slug": "state-event",
      "title": "State & Event",
      "description": "useState: satu-satunya cara React tahu harus menggambar ulang.",
      "topics": [
        "useState: nilai, setter, dan re-render",
        "Event handler: onClick, onChange, onSubmit",
        "State = snapshot — kenapa setCount(count+1) dua kali tidak +2",
        "Updater function (prev => ...)",
        "State object & array: update secara immutable",
        "Kesalahan umum: mutasi langsung, state turunan yang tidak perlu"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-3-m1",
          "title": "Mekanisme State & Siklus Re-render React",
          "body": "# Pengertian State & Event Handler\n\n**State** adalah memori internal komponen yang menyimpan data dinamis yang dapat berubah seiring interaksi pengguna. Berbeda dari variabel biasa yang hilang nilainya setelah fungsi selesai dieksekusi, state dipertahankan oleh React di antara proses penggambaran ulang (re-render).\n\nUntuk membuat state di komponen fungsi, kamu menggunakan Hook bawaan `useState`. Hook ini mengembalikan pasangan berupa nilai state saat ini dan fungsi pembaru (*setter function*). Memanggil fungsi setter memberitahu React bahwa data telah berubah dan tampilan UI harus digambar ulang.\n\n## Diagram Siklus Re-render React\n\n```text\n+-------------------+      +---------------------+      +---------------------+\n| User Klik Tombol  | ---> | Event Handler Jalan | ---> | Call setterState()  |\n+-------------------+      +---------------------+      +---------------------+\n                                                                   │\n                                                                   ▼\n+-------------------+      +---------------------+      +---------------------+\n| Layer DOM Update  | <--- | Virtual DOM Diffing | <--- | Re-render Component |\n+-------------------+      +---------------------+      +---------------------+\n```\n\n## Tabel Perbandingan Variabel Biasa vs State (`useState`)\n\n| Karakteristik | Variabel Biasa (`let x = 0`) | State (`const [x, setX] = useState(0)`) |\n|---|---|---|\n| Persistensi Nilai | Hilang setiap kali fungsi re-render | Dipertahankan oleh React antar re-render |\n| Memicu Update UI | TIDAK memicu perbaikan layar | YA, memicu re-render UI otomatis |\n| Cara Mengubah | `x = x + 1` (mutasi langsung) | `setX(x + 1)` atau `setX(prev => prev + 1)` |\n\n## Analogi Dunia Nyata\n\nBayangkan papan skor digital di stadion olahraga. Variabel biasa seperti catatan kertas yang kamu corat-coret sendiri di kantongmu—penonton di tribun tidak bisa melihat perubahannya. Menggunakan state dengan fungsi setter seperti menekan tombol pengendali utama papan skor digital: seketika tombol ditekan, papan skor (UI) menyala memperbarui angka untuk dilihat semua penonton.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Memutasi state objek/array secara langsung**\n> Menulis `items.push(\"baru\")` lalu `setItems(items)` tidak akan memicu re-render karena referensi memori objek tidak berubah. Selalu buat salinan baru dengan spread operator: `setItems([...items, \"baru\"])`.\n\n> **Jebakan 2: State Snapshot Trap**\n> Nilai state bersifat konstan di dalam satu siklus render. Memanggil `setCount(count + 1)` dua kali berturut-turut di fungsi yang sama tidak akan menambah 2. Gunakan updater function `setCount(prev => prev + 1)`.\n\n## Kaitan ke Dunia Kerja\n\nHampir 90% bug interaktif pada aplikasi web frontend berakar dari kesalahan pengelolaan state (seperti state out-of-sync atau mutasi variabel langsung). Pemahaman mendalam tentang state snapshot dan immutability adalah indikator utama senioritas pengembang React saat technical interview."
        },
        {
          "kind": "step",
          "id": "react-3-1",
          "title": "useState: Nilai, Setter, dan Re-render",
          "explanation": "Di React, mengubah variabel biasa (`let counter = 0`) tidak akan memperbarui tampilan di layar — React tidak tahu variabel itu berubah. Kamu wajib memakai `useState`. Hook ini memberikan dua hal: wadah untuk menyimpan nilai (state), dan remot kontrolnya (fungsi setter). Kalau kamu memakai remot itu untuk mengganti nilai, React akan otomatis menggambar ulang (re-render) tampilanmu agar sesuai data terbaru.",
          "example": {
            "code": "import { useState } from \"react\";\nconst [count, setCount] = useState(0);\nsetCount(count + 1);",
            "output": "Count bertambah dan React merender ulang komponen secara otomatis.",
            "note": "Selalu panggil useState di tingkat teratas komponen."
          },
          "instruction": "Deklarasikan variabel state bernama `count` dengan fungsi setternya `setCount`, dan beri nilai awal `0`.",
          "starterCode": "// Tulis useState di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s*\\[\\s*count\\s*,\\s*setCount\\s*\\]\\s*=\\s*useState\\(\\s*0\\s*\\)",
              "message": "Gunakan: const [count, setCount] = useState(0);"
            }
          ],
          "solution": "const [count, setCount] = useState(0);"
        },
        {
          "kind": "step",
          "id": "react-3-2",
          "title": "Event Handler: onClick, onChange, onSubmit",
          "explanation": "Event handler di React digunakan untuk menangani interaksi pengguna seperti klik tombol (`onClick`), perubahan input (`onChange`), atau pengiriman formulir (`onSubmit`). Penulisan nama event menggunakan format camelCase dan menerima fungsi callback yang akan dieksekusi saat event terjadi. Pada penanganan form submit, sangat penting memanggil `e.preventDefault()` untuk mencegah perilaku default browser yang memuat ulang (*reload*) seluruh halaman. Jebakan paling sering adalah langsung memanggil fungsi event `onClick={handleClick()}` alih-alih mengoper referensinya `onClick={handleClick}`.",
          "example": {
            "code": "function Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault();\n  };\n  return <form onSubmit={handleSubmit}>...</form>;\n}",
            "output": "Form disubmit secara AJAX tanpa memuat ulang browser.",
            "note": "e.preventDefault() wajib dipanggil saat submit form di React."
          },
          "instruction": "Di dalam fungsi handler form, panggil metode pada objek event `e` untuk mencegah halaman termuat ulang secara default.",
          "starterCode": "// Tulis kode pemanggilan fungsi di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "e\\.preventDefault\\(\\)",
              "message": "Tuliskan: e.preventDefault();"
            }
          ],
          "solution": "e.preventDefault();"
        },
        {
          "kind": "step",
          "id": "react-3-3",
          "title": "State = Snapshot",
          "explanation": "State di React bertindak seperti potret (*snapshot*) nilai pada saat siklus render tersebut dieksekusi. Memanggil fungsi setter state seperti `setCount(count + 1)` beberapa kali secara berturut-turut di dalam satu handler event tidak akan menambah nilai bertahap, karena seluruh pemanggilan membaca nilai snapshot `count` yang sama. Memahami konsep snapshot ini sangat penting agar kamu tidak bingung saat nilai state belum berubah seketika di baris kode berikutnya. Jebakan klasik adalah mencoba membaca nilai state terbaru langsung di baris bawah setelah panggilan `setCount`.",
          "example": {
            "code": "// Dua pemanggilan ini membaca nilai 'count' snapshot yang SAMA\nsetCount(count + 1);\nsetCount(count + 1);",
            "output": "Count hanya bertambah 1, bukan 2.",
            "note": "Gunakan updater function jika ingin menambah berturut-turut."
          },
          "instruction": "Buat fungsi `IncrementTwice` yang memanggil `setCount(count + 1)` sebanyak dua kali berturut-turut untuk melihat efek snapshot.",
          "starterCode": "// Tulis fungsi di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+IncrementTwice\\s*\\(\\s*\\)\\s*\\{\\s*setCount\\(\\s*count\\s*\\+\\s*1\\s*\\)\\s*;?\\s*setCount\\(\\s*count\\s*\\+\\s*1\\s*\\)\\s*;?\\s*\\}",
              "message": "Buat fungsi IncrementTwice yang berisi setCount(count + 1) dua kali"
            }
          ],
          "solution": "function IncrementTwice() {\n  setCount(count + 1);\n  setCount(count + 1);\n}"
        },
        {
          "kind": "step",
          "id": "react-3-4",
          "title": "Updater Function (prev => ...)",
          "explanation": "Updater function (`setCount(prev => prev + 1)`) adalah cara meng-update state di mana kita mengoper fungsi callback yang menerima nilai state paling akhir sebagai argumennya. Pola ini sangat krusial digunakan jika nilai state baru bergantung pada kalkulasi nilai state sebelumnya atau saat terjadi pembaruan state berturut-turut di dalam satu event handler. Menggunakan updater function menjamin kamu selalu bekerja dengan data Paling segar dari antrean pembaruan React. Jebakan pemula adalah mengabaikan pola ini pada operasi perhitungan nilai bertahap.",
          "example": {
            "code": "setCount(prev => prev + 1);",
            "output": "State diupdate secara reliabel berdasarkan nilai paling akhir.",
            "note": "Gunakan pola ini jika state baru dihitung dari state lama."
          },
          "instruction": "Panggil `setScore` dengan menggunakan updater function untuk menambah state sebelumnya (`prev`) dengan `10`.",
          "starterCode": "// Tulis setScore di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "setScore\\(\\s*\\(?\\s*prev\\)?\\s*=>\\s*prev\\s*\\+\\s*10\\s*\\)?\\s*\\)",
              "message": "Gunakan updater function: setScore(prev => prev + 10);"
            }
          ],
          "solution": "setScore(prev => prev + 10);"
        },
        {
          "kind": "step",
          "id": "react-3-5",
          "title": "Update State Object & Array Secara Immutable",
          "explanation": "Objek dan array di dalam state React wajib diperbarui secara immutable (tanpa mutasi langsung) menggunakan teknik penyalinan seperti spread operator (`[...items, newItem]`). Perubahan referensi objek/array baru inilah yang memberi tahu React bahwa data telah berubah sehingga proses re-render UI dapat terpicu. Memutasi array secara langsung dengan `.push()` atau `.splice()` akan membuat referensi memori tetap sama sehingga layar tidak akan diperbarui. Jebakan yang sering ditemui adalah mengira `.push()` sudah cukup untuk mengubah tampilan state di layar.",
          "example": {
            "code": "const [items, setItems] = useState(['A', 'B']);\nsetItems([...items, 'C']);",
            "output": "['A', 'B', 'C'] dirender sebagai array baru.",
            "note": "Spread operator [...] membuat array baru sehingga React mendeteksi perubahan state."
          },
          "instruction": "Perbarui array `items` dengan menambahkan elemen string 'Baru' ke akhir array tanpa memutasi array asli.",
          "starterCode": "// Tulis setItems di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "setItems\\(\\s*\\[\\s*\\.\\.\\.items\\s*,\\s*['\"]Baru['\"]\\s*\\]\\s*\\)",
              "message": "Gunakan: setItems([...items, 'Baru']);"
            }
          ],
          "solution": "setItems([...items, 'Baru']);"
        },
        {
          "kind": "step",
          "id": "react-3-6",
          "title": "Kesalahan Umum: Mutasi Langsung & State Redundan",
          "explanation": "Kesalahan umum yang sering dilakukan pemula adalah membuat state baru untuk data yang sebenarnya bisa kalkulasi langsung dari state/props yang sudah ada (state redundan). Membuat state redundan berisiko tinggi menyebabkan data tidak sinkron jika salah satu state lupa diperbarui. Selalu hitung variabel data turunan secara langsung di dalam body fungsi komponen saat proses render berlangsung. Jebakan umum adalah membuat state `fullName` terpisah padahal nilainya cukup digabungkan dari `firstName + ' ' + lastName`.",
          "example": {
            "code": "// ❌ Jangan buat state fullName tambahan!\nconst fullName = firstName + ' ' + lastName; // ✅ Cukup hitung di render",
            "output": "Kode lebih bersih dan tidak berisiko out-of-sync.",
            "note": "Hindari duplikasi data state yang bisa dikalkulasi saat render."
          },
          "instruction": "Hitung string `fullName` dari `firstName` dan `lastName` secara langsung saat komponen di-render.",
          "starterCode": "// Tulis variabel fullName di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+fullName\\s*=\\s*firstName\\s*\\+\\s*['\"]\\s*['\"]\\s*\\+\\s*lastName",
              "message": "Gunakan: const fullName = firstName + ' ' + lastName;"
            }
          ],
          "solution": "const fullName = firstName + ' ' + lastName;"
        },
        {
          "kind": "quiz",
          "id": "react-3-kuis",
          "title": "Kuis: State & Event",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Mengapa kita tidak boleh memutasi array state secara langsung dengan `items.push('X')`?",
              "choices": [
                "Karena push tidak menambahkan data",
                "Karena referensi array tidak berubah, sehingga React menganggap data tidak berubah dan TIDAK melakukan re-render UI",
                "Karena push dilarang di JavaScript",
                "Karena array akan otomatis terhapus"
              ],
              "answerIndex": 1,
              "explanation": "React menggunakan perbandingan referensi objek/array. Mutasi langsung tidak mengubah referensi sehingga re-render tidak terpicu."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Apa tujuan utama menggunakan updater function di dalam setState, misal setCount(prev => prev + 1)?",
              "choices": [
                "Agar kode terlihat lebih profesional",
                "Memastikan kita selalu menggunakan nilai state paling terbaru, terutama jika terjadi update state berturut-turut",
                "Agar React tidak error saat re-render",
                "Updater function mempercepat proses perenderan React hingga 10x lipat"
              ],
              "answerIndex": 1,
              "explanation": "Updater function sangat berguna untuk menjamin kita tidak menggunakan nilai snapshot lama dari state saat state di-update berulang kali dalam satu siklus."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Bagaimana cara terbaik menggabungkan firstName dan lastName di dalam komponen React?",
              "choices": [
                "Menyimpannya di state `fullName` secara terpisah",
                "Menghitungnya langsung di body komponen, contoh `const fullName = firstName + ' ' + lastName;`",
                "Menggunakan `document.getElementById`",
                "Menyimpannya di backend server"
              ],
              "answerIndex": 1,
              "explanation": "Data turunan yang bisa dihitung dari props atau state yang sudah ada sebaiknya tidak dimasukkan ke dalam state baru untuk menghindari redundant data (sumber kebenaran ganda)."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Pada kasus seperti apa kamu wajib memberikan 'updater function' (contoh: setCount(prev => prev + 1)) alih-alih langsung memberikan nilai (contoh: setCount(count + 1))?",
              "choices": [
                "Ketika state terbaru dihitung berdasarkan nilai state sebelumnya dan bisa dipanggil beberapa kali dalam satu handler event",
                "Ketika mengubah nilai string pada state",
                "Setiap kali fungsi setState dipanggil agar performa lebih cepat",
                "Saat merender elemen kondisional"
              ],
              "answerIndex": 0,
              "explanation": "Updater function memastikan React menggunakan snapshot state terbaru secara real-time pada saat antrean update dieksekusi."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Sebuah aplikasi mengubah state objek menggunakan cara ini: 'user.name = \"Budi\"; setUser(user);'. Kenapa layar TIDAK memperbarui namanya?",
              "choices": [
                "Karena React tidak mendukung state berupa objek",
                "Karena referensi memori variabel 'user' tidak berubah, sehingga React menganggap tidak ada update",
                "Karena nama Budi sudah ada di database",
                "Karena kurang memanggil user.save()"
              ],
              "answerIndex": 1,
              "explanation": "React menggunakan perbandingan identitas objek (Object.is). Jika objek yang sama dimutasi, referensinya tetap, dan re-render tidak akan dipicu. Gunakan spread operator: setUser({ ...user, name: 'Budi' })."
            }
          ]
        }
      ]
    },
    {
      "slug": "form-list",
      "title": "Form & List Interaktif",
      "description": "Pola CRUD di memori: dasar dari 80% UI aplikasi bisnis.",
      "topics": [
        "Controlled input: value + onChange",
        "Form multi-field dengan satu state object",
        "Validasi sederhana & pesan error",
        "Menambah, mengedit, menghapus item list",
        "Filter & search di client",
        "Checkbox, radio, select dalam React"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-4-m1",
          "title": "Manajemen Form & Manipulasi List Interaktif",
          "body": "# Pengertian Controlled Components & CRUD Client\n\nDalam aplikasi web nyata, manipulasi formulir (*form*) dan daftar data (*list*) adalah tugas sehari-hari. React menggunakan pola **Controlled Component** di mana nilai input HTML (`<input>`, `<select>`, `<textarea>`) disinkronkan sepenuhnya dengan state React via atribut `value` dan handler `onChange`.\n\nSelain formulir, mengelola operasi CRUD (Create, Read, Update, Delete) pada daftar array di memori client merupakan fondasi utama sebelum kamu menghubungkan aplikasi dengan database server backend.\n\n## Diagram Alur Controlled Input\n\n```text\n+-----------------------+                    +-----------------------+\n|  Input Field (<input>)| ── onChange(e) ──> |  React State (name)   |\n|   value={name}        | <── re-render ──── |  setName(e.target.val)|\n+-----------------------+                    +-----------------------+\n```\n\n## Tabel Operasi Immutable pada List State\n\n| Operasi | Cara SALAH (Mutasi Langsung) | Cara BENAR (Immutable React) |\n|---|---|---|\n| **Create (Tambah)** | `list.push(newItem)` | `setList([...list, newItem])` |\n| **Delete (Hapus)** | `list.splice(index, 1)` | `setList(list.filter(item => item.id !== targetId))` |\n| **Update (Ubah)** | `list[i].name = \"Baru\"` | `setList(list.map(item => item.id === targetId ? {...item, name: \"Baru\"} : item))` |\n\n## Analogi Dunia Nyata\n\nControlled input seperti papan ketik organ elektronik. Tombol fisik yang kamu tekan tidak menghasilkan suara mekanis langsung, melainkan mengirim sinyal listrik ke modul suara digital (state). Modul suara itulah yang menentukan nada apa yang dibunyikan lewat pengeras suara (UI).\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Peringatan Uncontrolled to Controlled**\n> Menginisialisasi state input dengan `undefined` atau `null` lalu mengubahnya menjadi string akan membuat React memberi peringatan di konsol. Selalu inisialisasi state input dengan string kosong `\"\"`.\n\n> **Jebakan 2: Menggunakan index array sebagai prop `key` pada list dinamis**\n> Menggunakan `key={index}` pada daftar item yang bisa dihapus atau diurutkan ulang dapat menimbulkan bug visual serius. Selalu gunakan ID unik seperti `item.id`.\n\n## Kaitan ke Dunia Kerja\n\nFitur dashboard admin, keranjang belanja e-commerce, formulir pendaftaran, dan sistem manajemen tugas semuanya dibangun di atas pola controlled form dan manipulasi array immutable ini. Penguasaan pola ini memastikan aplikasi yang kamu bangun bebas dari bug render."
        },
        {
          "kind": "step",
          "id": "react-4-1",
          "title": "Controlled Input: value + onChange",
          "explanation": "Di HTML biasa, elemen input menyimpan datanya sendiri secara diam-diam. Di React, kita 'mengikat' input tersebut ke dalam state agar React memegang kendali penuh — inilah yang disebut Controlled Input. Kenapa harus begitu? Agar data form selalu tersinkronisasi di satu tempat (Single Source of Truth) dan mudah divalidasi setiap kali kamu mengetik. Dengan begitu, kamu bisa langsung menampilkan pesan error 'password terlalu pendek' secara real-time.",
          "example": {
            "code": "<input value={name} onChange={(e) => setName(e.target.value)} />",
            "output": "Input terikat sempurna dengan state nama secara real-time.",
            "note": "e.target.value mengambil nilai string terbaru dari elemen input."
          },
          "instruction": "Buatlah sebuah elemen `<input>` teks yang dikendalikan (controlled). Kaitkan nilainya dengan state `text` dan perbarui nilainya pada event `onChange`.",
          "starterCode": "// Tulis input di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<input\\s+value=\\{\\s*text\\s*\\}\\s+onChange=\\{\\s*\\(?e\\)?\\s*=>\\s*setText\\(\\s*e\\.target\\.value\\s*\\)\\s*\\}\\s*/?>",
              "message": "Gunakan: <input value={text} onChange={(e) => setText(e.target.value)} />"
            }
          ],
          "solution": "<input value={text} onChange={(e) => setText(e.target.value)} />"
        },
        {
          "kind": "step",
          "id": "react-4-2",
          "title": "Form Multi-field dengan 1 State Object",
          "explanation": "Mengelola formulir dengan banyak bidang input (*multi-field form*) paling efisien dilakukan dengan menggunakan satu state berbentuk objek alih-alih membuat `useState` terpisah untuk setiap bidang. Dengan memanfaatkan atribut `name` pada elemen input dan computed property name (`[e.target.name]: e.target.value`), satu event handler `onChange` dapat menangani seluruh perubahan input form secara dinamis. Pola ini membuat kode formulir jauh lebih bersih dan mudah dikembangkan. Jebakan umum adalah lupa menyertakan spread operator `...prev` sehingga properti form lainnya terhapus saat satu bidang diisi.",
          "example": {
            "code": "const handleChange = (e) => {\n  setForm({ ...form, [e.target.name]: e.target.value });\n};",
            "output": "Konsol mencatat state objek form diperbarui, misal: { username: 'budi', age: 20 }",
            "note": "Pastikan setiap elemen input memiliki atribut 'name' yang cocok dengan key di state form."
          },
          "instruction": "Di dalam fungsi handler input, perbarui state `form` dengan mempertahankan nilai-nilai yang ada sebelumnya, lalu perbarui hanya field yang memicu event secara dinamis menggunakan sintaks array (computed property).",
          "starterCode": "// Tulis setForm di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "setForm\\(\\s*\\{\\s*\\.\\.\\.form\\s*,\\s*\\[\\s*e\\.target\\.name\\s*\\]\\s*:\\s*e\\.target\\.value\\s*\\}\\s*\\)",
              "message": "Gunakan: setForm({ ...form, [e.target.name]: e.target.value });"
            }
          ],
          "solution": "setForm({ ...form, [e.target.name]: e.target.value });"
        },
        {
          "kind": "step",
          "id": "react-4-3",
          "title": "Validasi Sederhana & Pesan Error",
          "explanation": "Validasi formulir sederhana dilakukan dengan memeriksa nilai state input saat handler `onSubmit` dieksekusi atau secara real-time di event `onChange`. Jika nilai input tidak memenuhi kriteria (misalnya string kosong), kita menyimpan pesan kesalahan ke dalam state error dan membatalkan proses submit. Tanda kesalahan tersebut kemudian dirender secara kondisional di bawah elemen input untuk memberi umpan balik langsung kepada pengguna. Jebakan pemula adalah langsung mengirim data ke server tanpa melakukan validasi di tingkat client terlebih dahulu.",
          "example": {
            "code": "if (!email) setError('Email wajib diisi!');",
            "output": "Pesan error muncul jika input kosong.",
            "note": "Beri indikasi visual seperti border merah pada input yang bermasalah."
          },
          "instruction": "Terapkan logika validasi yang memeriksa apakah nilai variabel `text` bernilai truthy. Jika tidak (falsy), atur error state dengan memanggil `setError` dan berikan argumen 'Wajib diisi!'.",
          "starterCode": "// Tulis validasi di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "if\\s*\\(\\s*!text\\s*\\)\\s*setError\\(\\s*['\"]Wajib diisi!['\"]\\s*\\)",
              "message": "Gunakan: if (!text) setError('Wajib diisi!');"
            }
          ],
          "solution": "if (!text) setError('Wajib diisi!');"
        },
        {
          "kind": "step",
          "id": "react-4-4",
          "title": "Menambah & Menghapus Item List (CRUD Client)",
          "explanation": "Menambah, mengedit, dan menghapus item dari daftar array di memori client (CRUD Client) adalah operasi mendasar dalam membangun antarmuka interaktif. Penambahan dilakukan dengan spread operator `[...list, newItem]`, penghapusan dengan `.filter()`, dan pengubahan dengan `.map()`. Seluruh metode tersebut mengembalikan array baru tanpa memutasi array asli sehingga sesuai dengan prinsip immutability React. Jebakan yang harus dihindari adalah menggunakan metode mutasi `splice()` yang merusak state asli.",
          "example": {
            "code": "const deleteItem = (id) => {\n  setItems(items.filter(item => item.id !== id));\n};",
            "output": "Item yang dipilih hilang dari daftar secara instan.",
            "note": "filter() mengembalikan array baru tanpa mengubah array asli (immutable)."
          },
          "instruction": "Perbarui array `items` dengan menghapus elemen yang memiliki `item.id` yang sama dengan argumen `id` menggunakan metode `.filter()`.",
          "starterCode": "// Tulis setItems filter di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "setItems\\(\\s*items\\.filter\\(\\s*item\\s*=>\\s*item\\.id\\s*!==\\s*id\\s*\\)\\s*\\)",
              "message": "Gunakan: setItems(items.filter(item => item.id !== id));"
            }
          ],
          "solution": "setItems(items.filter(item => item.id !== id));"
        },
        {
          "kind": "step",
          "id": "react-4-5",
          "title": "Filter & Search di Client",
          "explanation": "Pencarian dan penyaringan data (*filter & search*) di tingkat client dilakukan dengan menghitung data terfilter secara langsung di dalam body komponen saat render, memanfaatkan nilai state pencarian (`searchTerm`). Kita menggunakan metode `.filter()` dan `.includes()` pada daftar array utama tanpa perlu membuat state array baru untuk menyimpan hasil filter. Pendekatan ini memastikan data yang tampil selalu sinkron dengan query yang diketikkan pengguna. Jebakan umum adalah membuat state array ganda yang membingungkan alur data.",
          "example": {
            "code": "const filtered = items.filter(item => item.name.includes(query));",
            "output": "Daftar otomatis menyusut sesuai kata kunci pencarian.",
            "note": "Gunakan toLowerCase() agar pencarian tidak sensitif huruf besar/kecil."
          },
          "instruction": "Deklarasikan variabel `filtered` yang menyaring array `items`, sehingga hanya menyisakan item yang nama (`name`)-nya mengandung teks dalam `query`.",
          "starterCode": "// Tulis pencarian filtered di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+filtered\\s*=\\s*items\\.filter\\(\\s*i\\s*=>\\s*i\\.name\\.includes\\(\\s*query\\s*\\)\\s*\\)",
              "message": "Gunakan: const filtered = items.filter(i => i.name.includes(query));"
            }
          ],
          "solution": "const filtered = items.filter(i => i.name.includes(query));"
        },
        {
          "kind": "step",
          "id": "react-4-6",
          "title": "Checkbox, Radio, dan Select dalam React",
          "explanation": "Input berupa elemen checkbox, radio button, dan dropdown select di React dikelola sedikit berbeda dari input teks biasa. Checkbox menggunakan properti `e.target.checked` untuk mengambil nilai boolean true/false, sedangkan radio button dan select menggunakan `e.target.value`. Menyesuaikan penanganan sesuai tipe input HTML memastikan semua bentuk masukan pengguna dapat ditangkap ke dalam state dengan benar. Jebakan umum adalah mencoba membaca `e.target.value` pada elemen checkbox yang selalu mengembalikan string `'on'`.",
          "example": {
            "code": "<input type=\"checkbox\" checked={isAgree} onChange={(e) => setIsAgree(e.target.checked)} />",
            "output": "Status centang checkbox terikat dengan boolean state.",
            "note": "Perhatikan penggunaan e.target.checked (bukan e.target.value) untuk checkbox."
          },
          "instruction": "Buatlah sebuah input bertipe checkbox yang dikendalikan oleh state. Gunakan properti `agree` untuk mengikat nilainya, dan perbarui melalui fungsi `setAgree` saat event perubahannya (change) terjadi.",
          "starterCode": "// Tulis input checkbox di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<input\\s+type=[\"']checkbox[\"']\\s+checked=\\{\\s*agree\\s*\\}\\s+onChange=\\{\\s*\\(?e\\)?\\s*=>\\s*setAgree\\(\\s*e\\.target\\.checked\\s*\\)\\s*\\}\\s*/?>",
              "message": "Gunakan: <input type=\"checkbox\" checked={agree} onChange={(e) => setAgree(e.target.checked)} />"
            }
          ],
          "solution": "<input type=\"checkbox\" checked={agree} onChange={(e) => setAgree(e.target.checked)} />"
        },
        {
          "kind": "quiz",
          "id": "react-4-kuis",
          "title": "Kuis: Form & List",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Properti event apa yang digunakan untuk membaca status centang pada input checkbox?",
              "choices": [
                "e.target.value",
                "e.target.checked",
                "e.target.status",
                "e.target.selected"
              ],
              "answerIndex": 1,
              "explanation": "e.target.checked mengembalikan nilai boolean (true/false) dari status centang elemen checkbox."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Pada input HTML yang bertipe teks, bagaimana cara yang benar untuk membaca nilai terbarunya di dalam React onChange handler?",
              "choices": [
                "e.target.text",
                "e.target.value",
                "e.target.current",
                "e.value"
              ],
              "answerIndex": 1,
              "explanation": "Properti e.target.value menampung string masukan (input string) terbaru dari field teks, textarea, maupun elemen select."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Saat menghapus sebuah item list yang disimpan dalam state array di React, metode JS native apa yang paling disarankan agar tidak memutasi array lama?",
              "choices": [
                ".pop()",
                ".splice()",
                ".shift()",
                ".filter()"
              ],
              "answerIndex": 3,
              "explanation": "Metode .filter() mengembalikan array baru yang tidak berisi elemen yang dihapus, sehingga menjaga array state tetap immutable."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Apa tujuan utama menggunakan pola 'Controlled Components' (Komponen Terkendali) pada elemen input form di React?",
              "choices": [
                "Untuk memblokir input dari hacker",
                "Agar state React menjadi 'Single Source of Truth', dan nilai input selalu sejalan dengan state tersebut",
                "Untuk mencegah form disubmit ke server",
                "Agar browser bisa otomatis mengisi (autocomplete) data formulir"
              ],
              "answerIndex": 1,
              "explanation": "Dengan mengaitkan nilai input (value={state}) dan mendengarkan event perubahannya (onChange), form selalu disinkronisasi dengan state secara langsung."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Dalam implementasi fitur 'Hapus Data' pada tabel interaktif, metode array JavaScript apa yang paling tepat (immutable) untuk menghilangkan data berdasarkan ID?",
              "choices": [
                ".splice()",
                ".pop()",
                ".filter()",
                ".delete()"
              ],
              "answerIndex": 2,
              "explanation": ".filter() mengembalikan array salinan baru dengan menghilangkan item yang tidak lulus kriteria pengecekan, mempertahankan imutabilitas state."
            }
          ]
        }
      ]
    },
    {
      "slug": "useeffect",
      "title": "useEffect & Lifecycle",
      "description": "Sinkronisasi dengan dunia luar — dan modul yang paling banyak salah paham.",
      "topics": [
        "Kapan effect dibutuhkan (lebih jarang dari dugaanmu)",
        "Dependency array: [], [dep], tanpa array",
        "Cleanup function: subscription, timer, abort",
        "Fetch dalam effect + race condition & AbortController",
        "StrictMode double-render: kenapa dan untuk apa",
        "'You might not need an effect' — pola yang harusnya bukan effect"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-5-m1",
          "title": "useEffect, Synchronization, & Lifecycle React",
          "body": "# Pengertian Side Effects & Hook useEffect\n\n**Side Effect (Efek Samping)** adalah operasi apapun yang berinteraksi dengan dunia di luar komponen React—seperti mengambil data dari REST API (`fetch`), berlangganan event browser, mengutip timer (`setInterval`), atau menyunting judul dokumen (`document.title`).\n\nHook `useEffect` memungkinkan kamu menyinkronkan komponen dengan sistem eksternal tersebut. Efek ini dijalankan setelah proses render selesai digambar ke layar browser.\n\n## Visualisasi Perilaku Dependency Array\n\n```text\nuseEffect(callback, [depA, depB])\n\n   ┌──────────────────────────────────────────────────────────┐\n   │ Apakah depA atau depB berubah dibanding render sebelumnya?│\n   └──────────────────────────────────────────────────────────┘\n                      │                      │\n                   YA │                      │ TIDAK\n                      ▼                      ▼\n           [Jalankan Cleanup]         [Abaikan Callback]\n           [Jalankan Callback]\n```\n\n## Tabel Ringkasan Variasi Dependency Array\n\n| Sintaks Dependency Array | Waktu Eksekusi Effect | Use Case Utama |\n|---|---|---|\n| **Tanpa Array** `useEffect(fn)` | Setiap kali komponen selesai re-render | Logging debugging (Jarang dipakai di produksi). |\n| **Array Kosong** `useEffect(fn, [])` | Hanya 1 kali setelah komponen pertama kali muncul (*mount*) | Fetch data awal, inisialisasi plugin pihak ketiga. |\n| **Dengan Dep** `useEffect(fn, [id])` | Saat mount + setiap kali nilai `id` berubah | Re-fetch data saat ID produk / halaman berubah. |\n\n## Analogi Dunia Nyata\n\nBayangkan `useEffect` seperti stasiun pemancar radio otomatis di mobilmu. Ketika kamu memutar kunci kontak (komponen mount), radio mulai menyetel frekuensi stasiun. Saat kamu mematikan mesin mobil (komponen unmount), fungsi cleanup otomatis mematikan pemancar agar baterai aki mobil tidak habis.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Infinite Render Loop**\n> Mengubah state di dalam `useEffect` tanpa menyertakan dependency array akan memicu rantai re-render tanpa henti (render -> effect -> setState -> render -> effect...).\n\n> **Jebakan 2: Lupa menulis fungsi Cleanup**\n> Membuat `setInterval` atau `addEventListener` tanpa mengembalikan fungsi pembersih (`return () => clearInterval(...)`) menyebabkan kebocoran memori (*memory leak*).\n\n## Kaitan ke Dunia Kerja\n\n`useEffect` adalah salah satu hook yang paling sering disalahgunakan oleh pengembang pemula. Dokumentasi resmi React menyarankan 'You Might Not Need an Effect' untuk komputasi yang sebenarnya bisa dihitung langsung saat render. Memahami kapan **tidak** perlu memakai effect adalah tanda kematangan seorang perekayasa React."
        },
        {
          "kind": "step",
          "id": "react-5-1",
          "title": "Kapan Effect Dibutuhkan?",
          "explanation": "Hook `useEffect` digunakan untuk menyinkronkan komponen dengan sistem di luar React (*side effects*) seperti berlangganan event browser, mengutip timer, atau menyunting elemen dokumen. Efek ini dijalankan secara asinkron setelah proses render selesai digambar ke layar browser agar tidak menghambat responsivitas tampilan UI. Namun, efek sebaiknya tidak digunakan untuk menghitung data turunan sederhana yang bisa dikalkulasi langsung saat render. Jebakan paling berisiko adalah memicu re-render tanpa henti karena mengubah state di dalam effect tanpa kontrol dependency.",
          "example": {
            "code": "useEffect(() => {\n  document.title = 'Halaman Utama';\n}, []);",
            "output": "Judul tab browser diperbarui saat komponen selesai mount.",
            "note": "Jangan gunakan effect jika data bisa dihitung langsung saat render."
          },
          "instruction": "Di dalam useEffect, ubah judul tab browser dengan memodifikasi `document.title` menjadi 'BiLearn'.",
          "starterCode": "// Tulis baris document.title di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "document\\.title\\s*=\\s*['\"]BiLearn['\"]",
              "message": "Tuliskan: document.title = 'BiLearn';"
            }
          ],
          "solution": "document.title = 'BiLearn';"
        },
        {
          "kind": "step",
          "id": "react-5-2",
          "title": "Dependency Array: [], [dep], Tanpa Array",
          "explanation": "`[]` = jalan 1x saat mount. `[count]` = jalan saat count berubah. Tanpa array = jalan setiap kali re-render (bahaya!).",
          "example": {
            "code": "useEffect(() => {\n  console.log(count);\n}, [count]);",
            "output": "Pesan konsol muncul setiap kali variabel count berubah.",
            "note": "Selalu masukkan semua variabel yang dipakai di dalam effect ke dependency array."
          },
          "instruction": "Tulis `useEffect` yang mengamati variabel `id` di dependency array `[id]`.",
          "starterCode": "// Tulis useEffect dengan dependency [id] di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "useEffect\\(\\s*\\(\\s*\\)\\s*=>\\s*\\{[\\s\\S]*\\}\\s*,\\s*\\[\\s*id\\s*\\]\\s*\\)",
              "message": "Gunakan dependency array [id]"
            }
          ],
          "solution": "useEffect(() => {\n  console.log(id);\n}, [id]);"
        },
        {
          "kind": "step",
          "id": "react-5-3",
          "title": "Cleanup Function dalam useEffect",
          "explanation": "Fungsi pembersih (*cleanup function*) adalah fungsi yang dikembalikan (`return () => { ... }`) di dalam callback `useEffect`. Fungsi ini secara otomatis dieksekusi oleh React saat komponen dilepas dari layar (*unmount*) atau sebelum effect dijalankan kembali pada render berikutnya. Menulis fungsi cleanup sangat vital untuk membatalkan koneksi, menghentikan timer (`clearInterval`), atau menghapus event listener browser agar tidak terjadi kebocoran memori (*memory leak*). Jebakan umum adalah lupa melepaskan `addEventListener` yang telah dipasang.",
          "example": {
            "code": "useEffect(() => {\n  const timer = setInterval(() => {}, 1000);\n  return () => clearInterval(timer); // Cleanup\n}, []);",
            "output": "Timer dihentikan sehingga tidak terjadi memory leak saat komponen ditutup.",
            "note": "Selalu bersihkan listener/timer di return function."
          },
          "instruction": "Tuliskan fungsi kembalian (return) dari useEffect yang akan membersihkan `timer` dengan menggunakan fungsi bawaan `clearInterval`.",
          "starterCode": "// Tulis cleanup function di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "return\\s*\\(\\s*\\)\\s*=>\\s*clearInterval\\(\\s*timer\\s*\\)",
              "message": "Gunakan: return () => clearInterval(timer);"
            }
          ],
          "solution": "return () => clearInterval(timer);"
        },
        {
          "kind": "step",
          "id": "react-5-4",
          "title": "Fetch & AbortController",
          "explanation": "Pengambilan data asinkron (*data fetching*) dengan `fetch()` di dalam `useEffect` rawan mengalami masalah *race condition* jika pengguna berpindah halaman atau mengganti kata kunci pencarian dengan cepat sebelum respon API sebelumnya selesai. Untuk mengatasinya, kita menggunakan `AbortController` di dalam fungsi cleanup untuk membatalkan permintaan jaringan yang tidak lagi relevan. Pola ini memastikan bahwa data yang tampil di layar selalu berasal dari permintaan jaringan paling akhir. Jebakan umum adalah mengabaikan error pembatalan `AbortError` di blok catch.",
          "example": {
            "code": "useEffect(() => {\n  const controller = new AbortController();\n  fetch(url, { signal: controller.signal });\n  return () => controller.abort();\n}, [url]);",
            "output": "Mencegah race condition dan pencemaran state dari request usang.",
            "note": "AbortController adalah standar pencegahan race condition di React."
          },
          "instruction": "Untuk mencegah request diteruskan saat komponen sudah di-unmount, panggil metode `abort()` pada objek `controller` di dalam fungsi cleanup.",
          "starterCode": "// Tulis kode di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "controller\\.abort\\(\\)",
              "message": "Tuliskan: controller.abort();"
            }
          ],
          "solution": "controller.abort();"
        },
        {
          "kind": "step",
          "id": "react-5-5",
          "title": "StrictMode Double-Render",
          "explanation": "Dalam mode pengembangan (*development mode*), pembungkus `React.StrictMode` secara sengaja menjalankan fungsi `useEffect` sebanyak dua kali (mount -> unmount -> mount) untuk setiap komponen yang baru muncul. Fitur ini dirancang khusus oleh tim React untuk membantu pengembang menemukan bug tersembunyi akibat fungsi cleanup yang tidak ditulis dengan benar. Memahami perilaku double-render ini penting agar kamu tidak panik saat melihat `console.log` di dalam effect tercetak dua kali selama masa dev. Jebakan pemula adalah mencoba mematikan StrictMode alih-alih memperbaiki cleanup function yang bermasalah.",
          "example": {
            "code": "// Console log di useEffect muncul 2x di dev mode — ini normal!",
            "output": "Konsol menampilkan log yang sama 2 kali saat komponen dimuat (hanya pada StrictMode dev mode).",
            "note": "Double render ini tidak akan terjadi pada build production."
          },
          "instruction": "Buat sebuah variabel bernama `devMode` dan isi dengan string 'strict', ini mensimulasikan mode development di React.",
          "starterCode": "// Tulis variabel devMode di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+devMode\\s*=\\s*['\"]strict['\"]",
              "message": "Buat variabel const devMode = 'strict';"
            }
          ],
          "solution": "const devMode = 'strict';"
        },
        {
          "kind": "step",
          "id": "react-5-6",
          "title": "'You Might Not Need an Effect'",
          "explanation": "Dokumentasi resmi React menekankan panduan 'You Might Not Need an Effect' untuk mengedukasi pengembang agar tidak menyalahgunakan `useEffect`. Banyak kasus yang biasanya diselesaikan dengan effect—seperti mentransformasi data untuk render, menangani event klik pengguna, atau mereset state saat props berubah—sebenarnya lebih bersih jika ditangani di event handler atau dihitung langsung saat render. Menghindari effect yang tidak perlu membuat performa aplikasi lebih cepat dan lebih mudah didebug. Jebakan umum adalah menggunakan `useEffect` untuk menyinkronkan dua state yang saling berhubungan.",
          "example": {
            "code": "// ❌ BUKAN EFFECT:\n// useEffect(() => setFullName(first + last), [first, last]);\n\n// ✅ CUKUP:\nconst fullName = first + ' ' + last;",
            "output": "Menghindari re-render ekstra yang memperlambat aplikasi.",
            "note": "Transformasi data untuk render sebaiknya langsung dihitung di body komponen."
          },
          "instruction": "Hitung variabel boolean bernama `isAdult` langsung dari properti/state `age` (yang dianggap bernilai angka). Variabel ini bernilai true jika age 18 ke atas.",
          "starterCode": "// Tulis variabel isAdult di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+isAdult\\s*=\\s*age\\s*>=\\s*18",
              "message": "Gunakan: const isAdult = age >= 18;"
            }
          ],
          "solution": "const isAdult = age >= 18;"
        },
        {
          "kind": "quiz",
          "id": "react-5-kuis",
          "title": "Kuis: useEffect",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Kapan Cleanup Function pada `useEffect` akan dipanggil oleh React?",
              "choices": [
                "Sebelum komponen pertama kali mount",
                "Sebelum komponen unmount (ditutup) atau sebelum effect dijalankan kembali pada re-render berikutnya",
                "Saat halaman di-refresh",
                "Saat user mengklik tombol"
              ],
              "answerIndex": 1,
              "explanation": "Cleanup function berjalan untuk membersihkan efek samping sebelum komponen dilepas atau saat dependency berubah."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Jika Anda hanya ingin menjalankan `useEffect` HANYA SATU KALI saat komponen pertama kali di-mount, apakah yang harus dilewatkan sebagai dependency array?",
              "choices": [
                "Tanpa array (dihilangkan)",
                "Array kosong []",
                "[mount]",
                "[all]"
              ],
              "answerIndex": 1,
              "explanation": "Array kosong [] memberitahu React bahwa effect ini tidak bergantung pada state atau props apapun, sehingga tidak perlu dipanggil ulang."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Mengapa React StrictMode dengan sengaja menjalankan useEffect dua kali pada environment development?",
              "choices": [
                "Karena ada bug di source code React",
                "Agar proses render dua kali lipat lebih cepat",
                "Untuk mendeteksi jika pengembang melupakan cleanup function yang menimbulkan memory leak",
                "Untuk memaksa browser membersihkan cache"
              ],
              "answerIndex": 2,
              "explanation": "Dengan me-mount, lalu unmount, lalu mount lagi, React StrictMode segera mengungkap jika ada efek samping (seperti timer atau listener) yang tidak dibersihkan dengan benar."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Sebuah komponen dipasang (mount) ke DOM, namun effect fetch API kamu dipanggil berulang-ulang tanpa henti (infinite loop). Apa penyebab paling masuk akal?",
              "choices": [
                "URL API yang dimasukkan salah",
                "Kamu lupa menyertakan array dependensi (dependency array) sebagai argumen kedua pada useEffect yang melakukan update state",
                "Server API mengalami down",
                "Fungsi fetch tidak direturn"
              ],
              "answerIndex": 1,
              "explanation": "Tanpa dependency array, useEffect dijalankan setiap selesai render. Jika effect mengubah state, komponen akan render ulang, lalu effect jalan lagi (loop tak terbatas)."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Untuk apa 'cleanup function' (fungsi yang di-return dari dalam useEffect) biasanya digunakan?",
              "choices": [
                "Untuk memformat data hasil fetch menjadi JSON",
                "Untuk membersihkan efek samping (seperti menghapus interval timer, event listener, atau abort request) sebelum komponen di-unmount atau sebelum efek dijalankan ulang",
                "Untuk menghapus cookie dari browser",
                "Untuk memicu re-render ulang"
              ],
              "answerIndex": 1,
              "explanation": "Cleanup function melindungi aplikasi dari memory leak (kebocoran memori) yang disebabkan langganan atau listener yang tertinggal."
            }
          ]
        }
      ]
    },
    {
      "slug": "custom-hooks",
      "title": "Custom Hooks",
      "description": "Mengekstrak logika agar bisa dipakai ulang — tanda developer React yang matang.",
      "topics": [
        "Aturan hooks & kenapa ada",
        "Membuat useLocalStorage, useDebounce, useFetch",
        "useRef: nilai persist tanpa render & akses DOM",
        "useMemo & useCallback — dan kapan itu optimasi prematur",
        "Membaca hooks library orang lain"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-6-m1",
          "title": "Abstraksi Logika UI Menggunakan Custom Hooks & Refs",
          "body": "# Pengertian Custom Hooks & useRef\n\nSeiring bertambah besarnya aplikasi, kamu akan sering mendapati logika state dan side effect yang sama digunakan di beberapa komponen berbeda. **Custom Hook** adalah fungsi JavaScript kustom yang namanya diawali dengan kata `use` dan dapat memanggil hook React lain di dalamnya.\n\nSelain Custom Hook, modul ini juga membahas `useRef`—hook untuk menyimpan nilai yang bertahan di antara render **tanpa** memicu re-render UI saat nilainya berubah, serta untuk mengakses elemen DOM secara langsung.\n\n## Visualisasi Abstraksi Custom Hook\n\n```text\n+-----------------------+      +-----------------------+\n|  Komponen Formulir A  |      |  Komponen Formulir B  |\n+-----------------------+      +-----------------------+\n            │                              │\n            └──────────────┬───────────────┘\n                           ▼\n            +------------------------------+\n            | Custom Hook: useFormInput()  |\n            | (State, Validasi, Handler)   |\n            +------------------------------+\n```\n\n## Tabel Perbandingan useState vs useRef vs useMemo\n\n| Feature | `useState` | `useRef` | `useMemo` |\n|---|---|---|---|\n| Persistensi Nilai | Ya | Ya | Ya (selama dep tidak berubah) |\n| Memicu Re-render UI | **YA** | **TIDAK** | TIDAK |\n| Use Case Utama | Data dinamis yang tampil di layar | Akses elemen DOM, timer ID, prev state | Optimasi kalkulasi berat |\n\n## Analogi Dunia Nyata\n\nCustom Hook seperti resep bumbu rahasia dapur restoran. Daripada setiap koki mengukur porsi garam, gula, dan merica dari nol untuk setiap mangkuk sup, kepala koki meracik 'Bumbu Instan Super' (Custom Hook). Koki mana pun tinggal tuang satu sendok bumbu instan tersebut ke mangkuknya.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Melanggar Rules of Hooks**\n> Memanggil Hooks (termasuk Custom Hook) di dalam blok `if`, `for` loop, atau fungsi JavaScript biasa. Hooks **WAJIB** dipanggil di tingkat teratas (*top-level*) fungsi komponen.\n\n> **Jebakan 2: Premature Optimization dengan useMemo/useCallback**\n> Membungkus fungsi sederhana dengan `useCallback` tanpa mengukur dampaknya justru menambah overhead alokasi memori. Gunakan hanya untuk operasi komputasi terbukti berat.\n\n## Kaitan ke Dunia Kerja\n\nDi tim skala besar, pengembang memisahkan kode menjadi dua lapisan: komponen murni (*view layer*) yang hanya fokus pada tampilan JSX, dan Custom Hooks (*logic layer*) tempat seluruh aturan bisnis dan panggilan API berada. Arsitektur ini membuat kode sangat mudah diuji (*unit testing*)."
        },
        {
          "kind": "step",
          "id": "react-6-1",
          "title": "Aturan Hooks (Rules of Hooks)",
          "explanation": "Aturan Hooks: 1. Panggil Hooks HANYA di tingkat teratas komponen React (jangan di dalam loop/if). 2. Panggil Hooks HANYA dari Komponen atau Custom Hook.",
          "example": {
            "code": "// ❌ Salah: if (condition) useState();\n// ✅ Benar: useState di top-level",
            "output": "Menjamin urutan pemanggilan hooks konsisten di setiap render.",
            "note": "React mengandalkan urutan pemanggilan hooks untuk mengasosiasikan state."
          },
          "instruction": "Buatlah sebuah komponen `Header` yang mendeklarasikan `const [theme] = useState('dark');` di tingkat teratas komponen, mematuhi Aturan Hooks.",
          "starterCode": "// Tulis komponen Header di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+Header\\s*\\(\\s*\\)\\s*\\{\\s*const\\s*\\[\\s*theme\\s*\\]\\s*=\\s*useState\\(\\s*['\"]dark['\"]\\s*\\)\\s*;?[\\s\\S]*\\}",
              "message": "Deklarasikan useState di tingkat teratas komponen Header"
            }
          ],
          "solution": "function Header() {\n  const [theme] = useState('dark');\n  return <div>Header</div>;\n}"
        },
        {
          "kind": "step",
          "id": "react-6-2",
          "title": "Membuat Custom Hook useFetch",
          "explanation": "Custom Hook `useLocalStorage` memposting logika penyimpanan dan pemanggilan data dari `window.localStorage` ke dalam satu Hook yang reusable. Dengan membuat Custom Hook ini, komponen antarmuka dapat membaca dan menyimpan data ke penyimpanan lokal browser dengan sintaks yang persis seperti `useState` biasa tanpa perlu menulis panggilan `localStorage.getItem` dan `setItem` berulang kali. Pola ini memisahkan logika penyimpanan teknis dari komponen tampilan UI. Jebakan umum adalah lupa melakukan `JSON.stringify` saat menyimpan objek dan `JSON.parse` saat membaca kembali datanya.",
          "example": {
            "code": "function useFetch(url) {\n  const [data, setData] = useState(null);\n  useEffect(() => { fetch(url).then(r => r.json()).then(setData); }, [url]);\n  return data;\n}",
            "output": "Mengembalikan data ber-tipe yang siap dikonsumsi komponen mana saja.",
            "note": "Custom Hook harus selalu diawali kata 'use'."
          },
          "instruction": "Definisikan deklarasi fungsi Custom Hook `function useFetch(url)`.",
          "starterCode": "// Tulis fungsi useFetch di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+useFetch\\s*\\(\\s*url\\s*\\)",
              "message": "Definisikan: function useFetch(url)"
            }
          ],
          "solution": "function useFetch(url) {\n  // Logika fetch\n}"
        },
        {
          "kind": "step",
          "id": "react-6-3",
          "title": "useRef: Nilai Persist Tanpa Render & Akses DOM",
          "explanation": "Hook `useRef` mengembalikan sebuah objek ref mutabel dengan properti `.current` yang nilainya bertahan di antara siklus render tanpa memicu re-render UI saat nilainya diubah. Use case utama `useRef` adalah untuk mengakses dan memanipulasi elemen DOM secara langsung (seperti memberi fokus pada input via `inputRef.current.focus()`) atau menyimpan nilai kredensial seperti ID timer. Memahami perbedaan `useRef` dan `useState` penting agar kamu tahu kapan butuh update UI dan kapan hanya butuh menyimpan nilai internal. Jebakan umum adalah mencoba merender atribut `ref.current` di dalam JSX untuk elemen yang berubah-ubah.",
          "example": {
            "code": "const inputRef = useRef(null);\nconst focusInput = () => inputRef.current.focus();\nreturn <input ref={inputRef} />;",
            "output": "Elemen input mendapatkan fokus saat tombol diklik.",
            "note": "Ubah inputRef.current tidak akan memicu re-render komponen."
          },
          "instruction": "Deklarasikan variabel `inputRef` dan gunakan hook yang tepat untuk menyimpannya dengan nilai awal `null`.",
          "starterCode": "// Tulis useRef di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+inputRef\\s*=\\s*useRef\\(\\s*null\\s*\\)",
              "message": "Gunakan: const inputRef = useRef(null);"
            }
          ],
          "solution": "const inputRef = useRef(null);"
        },
        {
          "kind": "step",
          "id": "react-6-4",
          "title": "useMemo & useCallback",
          "explanation": "`useMemo` dan `useCallback` adalah Hook yang disediakan React untuk melakukan optimasi performa melalui teknik memoization. `useMemo` meng-cache hasil perhitungan komputasi yang berat, sedangkan `useCallback` meng-cache referensi fungsi agar tidak dibuat ulang pada setiap render. Namun, kedua hook ini tidak boleh digunakan secara sembarangan pada semua fungsi karena overhead alokasi memorinya justru bisa membuat aplikasi lebih lambat jika kodenya sederhana. Jebakan umum adalah membungkus seluruh fungsi event handler dengan `useCallback` tanpa alasan optimasi yang terukur.",
          "example": {
            "code": "const total = useMemo(() => hitungMahal(items), [items]);",
            "output": "hitungMahal hanya dijalankan ulang saat data items berubah.",
            "note": "Jangan gunakan ini secara berlebihan (optimasi prematur) sebelum ada masalah performa nyata."
          },
          "instruction": "Gunakan `useMemo` untuk memanggil fungsi `hitung(data)` dan me-return hasilnya. Jadikan array berisi `data` sebagai dependensinya.",
          "starterCode": "// Tulis useMemo di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "useMemo\\(\\s*\\(\\s*\\)\\s*=>\\s*hitung\\(\\s*data\\s*\\)\\s*,\\s*\\[\\s*data\\s*\\]\\s*\\)",
              "message": "Gunakan: useMemo(() => hitung(data), [data]);"
            }
          ],
          "solution": "useMemo(() => hitung(data), [data]);"
        },
        {
          "kind": "step",
          "id": "react-6-5",
          "title": "Membaca Hooks Library Pihak Ketiga",
          "explanation": "Membaca dan memahami Custom Hooks dari library populer pihak ketiga (seperti `useDebounce`, `useMediaQuery`, atau `useOnClickOutside`) adalah keterampilan penting dalam pengembangan aplikasi skala industri. Library tersebut membungkus logika browser yang kompleks ke dalam API Hook yang bersih dan siap pakai sehingga kamu tidak perlu merancang solusi dari nol. Mengintegrasikan Custom Hooks eksternal menghemat waktu pengembangan dan meningkatkan keandalan kode. Jebakan umum adalah membuat Custom Hook rumit sendiri padahal sudah ada solusi library teruji yang tersedia di komunitas npm.",
          "example": {
            "code": "const { data, isLoading } = useQuery(['users'], fetchUsers);",
            "output": "Mengonsumsi state async server dari library pihak ketiga.",
            "note": "Memahami prinsip Custom Hook membuat pembelajaran library baru menjadi mudah."
          },
          "instruction": "Panggil hook `useQuery()` dan lakukan destructuring pada objek yang dikembalikan untuk mengambil nilai `data` dan `isLoading`.",
          "starterCode": "// Tulis destructuring useQuery di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+\\{\\s*data\\s*,\\s*isLoading\\s*\\}\\s*=\\s*useQuery\\(\\)",
              "message": "Gunakan: const { data, isLoading } = useQuery();"
            }
          ],
          "solution": "const { data, isLoading } = useQuery();"
        },
        {
          "kind": "quiz",
          "id": "react-6-kuis",
          "title": "Kuis: Custom Hooks",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Apa perbedaan utama `useRef` dibanding `useState`?",
              "choices": [
                "useRef hanya bisa digunakan di luar komponen",
                "Mengubah nilai `.current` pada useRef TIDAK memicu re-render UI komponen",
                "useState tidak bisa menyimpan objek",
                "useRef otomatis terhapus saat render"
              ],
              "answerIndex": 1,
              "explanation": "useRef menyimpan data mutable tanpa menyebabkan komponen melakukan re-render saat datanya diubah."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Apakah nama yang valid untuk sebuah Custom Hook sesuai konvensi React?",
              "choices": [
                "fetchData",
                "HookFetch",
                "useFetchData",
                "customFetch"
              ],
              "answerIndex": 2,
              "explanation": "Konvensi React mengharuskan nama Custom Hook diawali dengan kata 'use' (misalnya useFetchData) agar linter React dapat menerapkan Rules of Hooks padanya."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Manakah pernyataan yang BENAR mengenai penggunaan hooks?",
              "choices": [
                "Hooks boleh dipanggil di dalam pernyataan if-else",
                "Hooks boleh dipanggil di dalam perulangan (looping)",
                "Hooks HANYA boleh dipanggil di tingkat paling atas dari komponen fungsi atau custom hook",
                "Hooks boleh dipanggil dari dalam fungsi kelas (class component)"
              ],
              "answerIndex": 2,
              "explanation": "Rules of Hooks secara tegas melarang memanggil hook di dalam kondisi bersyarat, perulangan, atau fungsi bersarang, untuk memastikan urutan eksekusi selalu sama."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu sedang mendesain sistem routing berbasis React Router v6. Untuk mendeklarasikan navigasi bersarang dengan UI bersama (layouting), fitur apa yang biasa digunakan?",
              "choices": [
                "Komponen <Outlet />",
                "Metode window.location.href",
                "Fungsi useNavigate",
                "Tag <a> standar browser"
              ],
              "answerIndex": 0,
              "explanation": "<Outlet /> digunakan di dalam komponen rute induk untuk menandai di mana komponen rute anak akan dirender."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Manakah cara terbaik untuk berpindah halaman (navigasi) secara programatis (misal setelah pengguna berhasil login) di React Router?",
              "choices": [
                "Memanggil fungsi yang dikembalikan oleh hook useNavigate()",
                "Mengganti nilai window.location.href secara langsung",
                "Menggunakan elemen <Link> yang di-klik otomatis lewat ref",
                "Menggunakan useHref()"
              ],
              "answerIndex": 0,
              "explanation": "Hook useNavigate() direkomendasikan untuk navigasi secara dinamis atau berdasarkan logika bisnis."
            }
          ]
        }
      ]
    },
    {
      "slug": "context",
      "title": "Context & State Global",
      "description": "Berbagi data tanpa prop drilling — dengan takaran yang tepat.",
      "topics": [
        "Prop drilling: masalah yang sebenarnya",
        "createContext, Provider, useContext",
        "Pola context + reducer (useReducer)",
        "Context untuk theme, auth, bahasa",
        "Perangkap performa context & cara membaginya",
        "Zustand: state global ringan yang dipakai industri"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-7-m1",
          "title": "Manajemen State Global dengan React Context & Zustand",
          "body": "# Pengertian React Context & State Global\n\nKetika aplikasi berkembang, mengoper props melewati 5 hingga 10 tingkat komponen anak (dikenal sebagai **Prop Drilling**) menjadi sangat menyiksa dan mengotori kode. **React Context** menyediakan cara untuk membagikan data ke seluruh pohon komponen tanpa perlu mengoper props secara manual di setiap level.\n\nUntuk kebutuhan state global aplikasi yang lebih kompleks dan berkinerja tinggi, industri juga sering mengombinasikan atau menggantikan Context dengan pustaka ringan seperti **Zustand**.\n\n## Diagram Perbandingan Prop Drilling vs React Context\n\n```text\nProp Drilling:\n[App] ── (props) ──> [Layout] ── (props) ──> [Sidebar] ── (props) ──> [UserProfile]\n\nReact Context / Zustand:\n[App (Provider)]\n   │\n   └────────────────────── global access ───────────────────────> [UserProfile]\n```\n\n## Tabel Perbandingan React Context vs Zustand\n\n| Fitur | React Context | Zustand |\n|---|---|---|\n| Setup Requirements | `createContext` + `<Provider>` wrapper | Cukup buat store `create()` tanpa Provider wrapper |\n| Re-render Performance | Seluruh pembaca re-render jika Context bernilai baru | Selektor presisi (`store.useSelector`), sangat hemat render |\n| Kompleksitas Kode | Sedang (Membutuhkan kustom Hook & Provider) | Sangat Ringan dan Minimalis |\n\n## Analogi Dunia Nyata\n\nProp Drilling seperti mengirim surat lewat kurir berantai: kamu titipkan surat ke tetangga A, tetangga A titip B, B titip C, sampai akhirnya tiba di Z. React Context seperti menara pemancar radio WiFi di tengah desa: siapapun yang butuh data tinggal menyambungkan perangkatnya langsung ke sinyal WiFi tanpa lewat tetangga.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Provider Raksasa Tunggal (Monolithic Context)**\n> Menyimpan seluruh data aplikasi (user, cart, theme, notification) di dalam 1 Context tunggal. Perubahan sekecil apa pun pada theme akan merender ulang seluruh komponen cart dan user! Pisahkan Context sesuai domainnya.\n\n> **Jebakan 2: Lupa membungkus komponen dengan Provider**\n> Memanggil `useContext(MyContext)` di komponen yang berada di luar jangkauan `<MyContext.Provider>` akan mengembalikan nilai default yang seringkali `undefined`.\n\n## Kaitan ke Dunia Kerja\n\nFitur tema gelap (Dark Mode), sistem autentikasi status login pengguna, preferensi bahasa (i18n), dan keranjang e-commerce adalah use-case klasik pengaplikasian React Context dan Zustand di industri modern."
        },
        {
          "kind": "step",
          "id": "react-7-1",
          "title": "Prop Drilling: Masalah yang Sebenarnya",
          "explanation": "Prop Drilling adalah kendala di mana data harus dioper melewati belasan komponen perantara yang sebenarnya tidak membutuhkan data tersebut, hanya demi menyampaikan data ke komponen anak di tingkat terdalam. Kendala ini membuat kode komponen perantara menjadi kotor, sulit di-refactor, dan rentan patah saat struktur komponen diubah. React Context hadir untuk mengatasi masalah ini dengan menyediakan saluran distribusi data langsung dari komponen induk teratas ke komponen anak manapun yang membutuhkan. Jebakan pemula adalah langsung menggunakan Context untuk semua data padahal komponennnya hanya berjarak 1-2 level.",
          "example": {
            "code": "// App -> Layout -> Sidebar -> UserProfile (Prop Drilling 4 level)",
            "output": "Komposisi komponen menjadi tidak fleksibel dan rawan bug.",
            "note": "React Context atau State Management hadir untuk memecahkan masalah ini."
          },
          "instruction": "Buatlah sebuah komponen kosong bernama `UserProfile` yang mendestrukturisasi properti `user` dari objek props yang diterimanya.",
          "starterCode": "// Tulis komponen UserProfile di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+UserProfile\\s*\\(\\s*\\{\\s*user\\s*\\}\\s*\\)\\s*\\{",
              "message": "Definisikan komponen UserProfile yang menerima prop 'user'"
            }
          ],
          "solution": "function UserProfile({ user }) {\n  return <div>{user.name}</div>;\n}"
        },
        {
          "kind": "step",
          "id": "react-7-2",
          "title": "createContext, Provider, useContext",
          "explanation": "Membuat React Context membutuhkan tiga langkah utama: mendeklarasikan objek context dengan `createContext()`, membungkus pohon komponen dengan `<MyContext.Provider value={...}>`, dan membaca nilainya di komponen anak menggunakan Hook `useContext()`. Pola ini menciptakan area distribusi data global yang bersih di mana komponen anak dapat mengakses nilai atau fungsi pembaru tanpa perlu props perantara. Jebakan yang sering terjadi adalah lupa memberikan atribut `value` pada komponen Provider yang menyebabkan komponen anak menerima nilai `undefined`.",
          "example": {
            "code": "const ThemeContext = createContext(\"light\");\nfunction App() {\n  return <ThemeContext.Provider value=\"dark\"><Card /></ThemeContext.Provider>;\n}",
            "output": "Card dan seluruh keturunannya bisa mengakses nilai 'dark'.",
            "note": "Provider menentukan nilai data global yang tersedia di cabang komponen tersebut."
          },
          "instruction": "Bungkus komponen `<Card />` dengan menggunakan `ThemeContext.Provider`. Berikan nilai properti `value` dengan string 'dark'.",
          "starterCode": "// Tulis Provider di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<ThemeContext\\.Provider\\s+value=[\"']dark[\"']>\\s*<Card\\s*/>\\s*</ThemeContext\\.Provider>",
              "message": "Gunakan: <ThemeContext.Provider value=\"dark\"><Card /></ThemeContext.Provider>"
            }
          ],
          "solution": "<ThemeContext.Provider value=\"dark\"><Card /></ThemeContext.Provider>"
        },
        {
          "kind": "step",
          "id": "react-7-3",
          "title": "Pola Context + useReducer",
          "explanation": "Menggabungkan React Context dengan Hook `useReducer` adalah pola tangguh untuk mengelola state global yang memiliki aturan perubahan logika bisnis yang kompleks (seperti keranjang belanja atau alur checkout). `useReducer` mengisolasi seluruh perubahan state ke dalam satu fungsi reducer berbasis aksi (`dispatch({ type: 'ADD_ITEM' })`), sementara Context menyebarkan state dan fungsi dispatch tersebut ke seluruh aplikasi. Pola ini merupakan bentuk miniatur dari Redux tanpa perlu memasang library tambahan. Jebakan umum adalah memutasi state secara langsung di dalam fungsi reducer alih-alih mengembalikan objek state baru.",
          "example": {
            "code": "const [state, dispatch] = useReducer(todoReducer, []);",
            "output": "dispatch({ type: 'ADD_TODO', payload: 'Belajar' }) memperbarui state global secara terprediksi.",
            "note": "Pola ini menyerupai cara kerja Redux tanpa perlu memasang library luar."
          },
          "instruction": "Panggil hook `useReducer` dengan memberikan argumen `reducer` dan status awal `initial`. Lakukan destructuring untuk mengambil `state` dan fungsi `dispatch`.",
          "starterCode": "// Tulis useReducer di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s*\\[\\s*state\\s*,\\s*dispatch\\s*\\]\\s*=\\s*useReducer\\(\\s*reducer\\s*,\\s*initial\\s*\\)",
              "message": "Gunakan: const [state, dispatch] = useReducer(reducer, initial);"
            }
          ],
          "solution": "const [state, dispatch] = useReducer(reducer, initial);"
        },
        {
          "kind": "step",
          "id": "react-7-4",
          "title": "Context untuk Theme, Auth, dan Bahasa",
          "explanation": "Penggunaan Context yang paling umum di dunia kerja adalah untuk mengelola state tema aplikasi (Light/Dark Mode) dan state autentikasi pengguna (status login, data profil, token JWT). Dengan menyembunyikan logika penyimpanan token dan pengubahan tema di dalam Provider khusus, komponen UI seperti Navbar atau Avatar dapat membaca status login secara instan di mana saja. Pola ini menjaga agar logika autentikasi terisolasi dengan rapi. Jebakan umum adalah menyatukan Context Theme dan Context Auth ke dalam satu Provider tunggal yang menyebabkan re-render yang tidak perlu.",
          "example": {
            "code": "const { theme, toggleTheme } = useTheme();",
            "output": "Akses dan manipulasi mode tema UI dari mana saja.",
            "note": "Buat custom hook seperti useTheme() untuk mempermudah konsumsi ThemeContext."
          },
          "instruction": "Panggil custom hook `useAuth()` dan lakukan destructuring pada hasil objeknya untuk mendapatkan properti `user` serta fungsi `logout`.",
          "starterCode": "// Tulis useAuth di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+\\{\\s*user\\s*,\\s*logout\\s*\\}\\s*=\\s*useAuth\\(\\)",
              "message": "Gunakan: const { user, logout } = useAuth();"
            }
          ],
          "solution": "const { user, logout } = useAuth();"
        },
        {
          "kind": "step",
          "id": "react-7-5",
          "title": "Perangkap Performa Context",
          "explanation": "Salah satu perangkap utama React Context adalah bahwa semua komponen yang memanggil `useContext(MyContext)` akan selalu di-re-render setiap kali nilai di atribut `value` Provider berubah, sekecil apapun perubahannya. Untuk mengoptimalkannya, kita harus memisahkan Context menjadi beberapa Provider yang lebih spesifik (misalnya memisahkan `UserContext` dan `ThemeContext`) atau memisahkan state dan fungsi dispatch ke dalam Context terpisah. Pola ini mencegah terjadinya re-render massal yang dapat memperlambat aplikasi. Jebakan umum adalah membuat objek baru langsung di inline prop `value={{ user, setUser }}` tanpa di-memoize.",
          "example": {
            "code": "// Pisahkan UserContext (jarang berubah) dan NotificationContext (sering berubah)",
            "output": "Mencegah re-render yang tidak perlu pada seluruh pohon komponen.",
            "note": "Memisah Provider adalah teknik optimasi utama pada React Context."
          },
          "instruction": "Buat sebuah struktur JSX di mana `AuthProvider` membungkus `ThemeProvider` untuk memisahkan konteks state (auth state dan theme state) agar pembaruan bisa dikelola secara terpisah.",
          "starterCode": "// Tulis Provider di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<AuthProvider>\\s*<ThemeProvider>",
              "message": "Bungkus <ThemeProvider> di dalam <AuthProvider>"
            }
          ],
          "solution": "<AuthProvider>\n  <ThemeProvider>\n    <App />\n  </ThemeProvider>\n</AuthProvider>"
        },
        {
          "kind": "step",
          "id": "react-7-6",
          "title": "Zustand: State Global Ringan Industri",
          "explanation": "Zustand adalah pustaka manajemen state global modern yang sangat populer di ekosistem React sebagai alternatif dari Context dan Redux. Zustand tidak membutuhkan bungkus `<Provider>` di sekitar pohon komponen dan memiliki performa yang sangat tinggi karena menggunakan selektor presisi untuk membaca state (`useStore(state => state.bears)`). Memahami kapan menggunakan Context dan kapan beralih ke Zustand merupakan keputusan arsitektur penting dalam proyek React industri. Jebakan pemula adalah memicu re-render berlebih di Zustand karena membaca seluruh objek store tanpa fungsi selektor.",
          "example": {
            "code": "import { create } from \"zustand\";\nconst useStore = create((set) => ({\n  bears: 0,\n  increase: () => set((state) => ({ bears: state.bears + 1 })),\n}));",
            "output": "Akses dan ubah state global langsung dari hook useStore().",
            "note": "Zustand banyak menggantikan Redux pada aplikasi React modern."
          },
          "instruction": "Gunakan fungsi `create` dari library Zustand untuk membuat sebuah store bernama `useStore`. State awalnya berisi nilai `count` sebesar 0.",
          "starterCode": "// Tulis create Zustand di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+useStore\\s*=\\s*create\\(\\s*\\(?set\\)?\\s*=>\\s*\\(\\s*\\{\\s*count\\s*:\\s*0\\s*\\}\\s*\\)\\s*\\)",
              "message": "Gunakan: const useStore = create((set) => ({ count: 0 }));"
            }
          ],
          "solution": "const useStore = create((set) => ({ count: 0 }));"
        },
        {
          "kind": "quiz",
          "id": "react-7-kuis",
          "title": "Kuis: Context & State Global",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Mengapa Zustand sering dipilih menggantikan React Context untuk state global kompleks?",
              "choices": [
                "Zustand otomatis mengubah React menjadi Angular",
                "Zustand tidak membutuhkan Provider wrapper dan mencegah re-render yang tidak perlu dengan selector state",
                "Zustand hanya bisa dipakai di server",
                "Zustand menghapus file CSS"
              ],
              "answerIndex": 1,
              "explanation": "Zustand menggunakan selector granular sehingga komponen hanya re-render saat bagian state yang dipilih saja yang berubah."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Bagaimana cara membaca (mengonsumsi) nilai dari sebuah Context di dalam fungsi komponen fungsional modern React?",
              "choices": [
                "Dengan menulis kelas ekstensi",
                "Menggunakan Context.Consumer dengan callback function",
                "Memanggil hook useContext(MyContext)",
                "Menjadikannya properti window.context"
              ],
              "answerIndex": 2,
              "explanation": "Hook useContext() adalah cara paling ringkas dan standar di komponen fungsional untuk membaca nilai dari suatu Provider."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Apa kelemahan performa terbesar jika Anda meletakkan semua state global aplikasi ke dalam satu Provider Context tunggal?",
              "choices": [
                "Browser akan memblokir rendering",
                "Membutuhkan RAM yang sangat besar",
                "Tiap kali ada salah satu bagian state yang berubah (misal form input mengetik), maka SEMUA komponen di bawah Provider itu akan di-render ulang meskipun tidak perlu",
                "Kode menjadi tidak bisa dibaca"
              ],
              "answerIndex": 2,
              "explanation": "React Context Provider tidak memiliki kapabilitas selector secara bawaan; setiap kali prop 'value' berubah referensinya, semua konsumennya dipaksa me-render ulang. Itulah sebabnya context harus dipecah (split) berdasarkan kategori perubahannya."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Masalah 'Prop Drilling' terjadi ketika data harus diteruskan melewati komponen-komponen perantara yang sebenarnya tidak memerlukan data tersebut. Solusi bawaan React untuk masalah ini adalah:",
              "choices": [
                "React Router",
                "React Context",
                "useState",
                "useEffect"
              ],
              "answerIndex": 1,
              "explanation": "Context API memungkinkan komponen manapun di bawah sebuah Provider untuk mengakses data tanpa harus meneruskannya manual sebagai props pada setiap level."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Ketika menggunakan hook useReducer, aksi (action) untuk memodifikasi state didefinisikan sebagai objek konvensional yang setidaknya memiliki properti apa?",
              "choices": [
                "name dan payload",
                "type dan payload",
                "method dan body",
                "id dan value"
              ],
              "answerIndex": 1,
              "explanation": "Berdasarkan konvensi Redux/useReducer, objek aksi memuat 'type' untuk mengidentifikasi aksi, dan 'payload' (opsional) untuk membawa data."
            }
          ]
        }
      ]
    },
    {
      "slug": "data-fetching",
      "title": "Data Fetching & Async UI",
      "description": "Pola loading/error/empty yang benar — pembeda UI amatir dan profesional.",
      "topics": [
        "Tiga state wajib: loading, error, data (plus empty)",
        "Pola fetch-on-render & masalahnya",
        "TanStack Query: cache, refetch, invalidation",
        "Mutasi data & optimistic update",
        "Pagination & infinite scroll",
        "Menangani auth token di request"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-8-m1",
          "title": "Strategi Data Fetching & TanStack Query",
          "body": "# Pengertian Data Fetching & Caching di Client\n\nData fetching adalah proses mengambil data dari REST API atau GraphQL backend. Dalam aplikasi profesional, penanganan data asinkron tidak sekadar memanggil `fetch()` di dalam `useEffect`, melainkan harus mengelola tiga keadaan (*states*) wajib UI: **Loading**, **Error**, dan **Data**.\n\nUntuk mengatasi kerumitan caching, deduping request, dan sinkronisasi otomatis, standar industri saat ini telah beralih menggunakan pustaka **TanStack Query (React Query)**.\n\n## Diagram Siklus Status Data Fetching\n\n```text\n                      ┌──────────────────────┐\n                      │  Fetch Data Dipicu   │\n                      └──────────────────────┘\n                                  │\n                                  ▼\n                      ┌──────────────────────┐\n                      │  isLoading = true    │ (Tampilkan Skeleton/Spinner)\n                      └──────────────────────┘\n                                  │\n                  ┌───────────────┴───────────────┐\n                  ▼                               ▼\n      ┌──────────────────────┐        ┌──────────────────────┐\n      │ isSuccess (Data Ada) │        │  isError (Error API) │\n      └──────────────────────┘        └──────────────────────┘\n```\n\n## Tabel Perbandingan Manual Fetch vs TanStack Query\n\n| Fitur | Manual `useEffect` + `fetch` | TanStack Query (`useQuery`) |\n|---|---|---|\n| Pengelolaan State | Harus buat 3 `useState` manual | Otomatis (`data`, `isLoading`, `error`) |\n| Automatic Caching | Tidak ada (Setiap mount re-fetch) | **Ada** (Data disimpan di memori cache) |\n| Window Refocus | Tidak ada | **Ada** (Otomatis re-fetch saat tab fokus) |\n| Mutation & Invalidasi | Manual & Rawan Bug | Sangat Mudah via `useMutation` & `invalidateQueries` |\n\n## Analogi Dunia Nyata\n\nManual fetch seperti pergi ke pasar setiap kali butuh sebutir telur untuk memasak. TanStack Query seperti memiliki kulkas pintar di rumah: saat butuh telur, kulkas langsung memberikannya dari stok cache. Jika telur di kulkas sudah kadaluarsa, kulkas otomatis memesan telur baru di belakang layar tanpa menghentikan kegiatan memasakmu.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Masalah Waterfall Fetching**\n> Komponen anak baru mulai melakukan fetch setelah komponen induk selesai fetch data. Ini membuat aplikasi terasa sangat lambat. Lakukan data fetching secara paralel atau di tingkat teratas.\n\n> **Jebakan 2: Mengabaikan Penanganan Error Network**\n> Hanya menampilkan indikator loading tanpa pernah menampilkan pesan kesalahan saat server backend down (500 Error) atau koneksi internet terputus.\n\n## Kaitan ke Dunia Kerja\n\nKemampuan mengintegrasikan API dengan lancar, mengelola token Bearer autentikasi, serta menerapkan teknik caching dengan TanStack Query adalah kualifikasi wajib bagi setiap pengembang frontend yang melamar di perusahaan teknologi."
        },
        {
          "kind": "step",
          "id": "react-8-1",
          "title": "Tiga State Wajib: Loading, Error, dan Data",
          "explanation": "Dalam aplikasi web profesional, pengambilan data dari REST API atau GraphQL harus mengelola tiga keadaan (*states*) antarmuka secara eksplisit: indikator pemuatan (`isLoading`), data hasil yang berhasil diterima (`data`), dan penanganan kesalahan jaringan (`error`). Menangani ketiga kondisi ini menjamin aplikasi tidak mengalami kelesuan (*freeze*) dan pengguna selalu mendapatkan informasi yang jelas mengenai status jaringan. Jebakan umum pemula adalah menganggap pemanggilan API pasti selalu berhasil tanpa membuat tampilan untuk kondisi error.",
          "example": {
            "code": "if (isLoading) return <p>Memuat data...</p>;\nif (error) return <p>Gagal memuat!</p>;\nreturn <div>{data.name}</div>;",
            "output": "User mendapat kepastian respon dalam situasi apa pun.",
            "note": "Selalu sediakan Fallback UI untuk state loading dan error."
          },
          "instruction": "Terapkan early return untuk menangani status loading. Jika `isLoading` bernilai true, kembalikan elemen `<p>Loading...</p>`.",
          "starterCode": "// Tulis if isLoading di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "if\\s*\\(\\s*isLoading\\s*\\)\\s*return\\s*<p>\\s*Loading\\.\\.\\.\\s*</p>\\s*;?",
              "message": "Gunakan: if (isLoading) return <p>Loading...</p>;"
            }
          ],
          "solution": "if (isLoading) return <p>Loading...</p>;"
        },
        {
          "kind": "step",
          "id": "react-8-2",
          "title": "Pola Fetch-on-Render & Masalahnya",
          "explanation": "Pola Fetch-on-Render terjadi ketika komponen anak baru memicu panggilan API setelah komponen induknya selesai merender data, menciptakan efek pengunduhan berantai (*waterfall network request*). Efek rantai ini membuat waktu muat aplikasi menjadi sangat lambat karena permintaan jaringan harus mengantri satu per satu. Untuk mengatasinya, data fetching sebaiknya dilakukan secara paralel di tingkat teratas atau menggunakan teknik prefetching data. Jebakan umum adalah menempatkan panggilan API terpisah di dalam 5 komponen berjenjang yang saling membungkus.",
          "example": {
            "code": "// Parent fetch -> render -> Child fetch -> render (Waterfall Delay)",
            "output": "Aplikasi terasa lambat karena komponen menunggu urutan request.",
            "note": "Solusinya adalah mengunduh data secara paralel atau memanfaatkan Server Components."
          },
          "instruction": "Tuliskan sebuah array literal `[usersPromise, postsPromise]` lalu bungkus ke dalam pemanggilan `Promise.all()` agar kedua permintaan tersebut bisa berjalan secara paralel tanpa waterfall.",
          "starterCode": "// Tulis Promise.all di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "Promise\\.all\\(\\s*\\[\\s*usersPromise\\s*,\\s*postsPromise\\s*\\]\\s*\\)",
              "message": "Tuliskan: Promise.all([usersPromise, postsPromise])"
            }
          ],
          "solution": "Promise.all([usersPromise, postsPromise])"
        },
        {
          "kind": "step",
          "id": "react-8-3",
          "title": "TanStack Query (React Query)",
          "explanation": "TanStack Query (React Query) adalah pustaka data fetching dan manajemen server-state terkemuka yang menangani pengunduhan, penyimpan memori sementara (*caching*), dan pembaruan data secara otomatis. Dengan Hook `useQuery`, kamu tidak perlu lagi mengelola state loading, error, dan data secara manual menggunakan `useEffect`. TanStack Query juga otomatis menyegarkan data (*refetch*) saat jendela browser kembali difokuskan oleh pengguna. Jebakan pemula adalah mencoba menyimpan data hasil `useQuery` ke dalam `useState` lokal yang redundan.",
          "example": {
            "code": "const { data, isLoading } = useQuery({\n  queryKey: ['todos'],\n  queryFn: fetchTodos,\n});",
            "output": "Data di-cache dan otomatis di-refetch di background saat tab browser aktif.",
            "note": "Standard industri data fetching di aplikasi React modern."
          },
          "instruction": "Panggil hook `useQuery` dengan melewatkan sebuah objek argumen. Objek tersebut harus memiliki properti `queryKey` bernilai `['users']` dan properti `queryFn` bernilai fungsi `fetchUsers`.",
          "starterCode": "// Tulis useQuery di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "useQuery\\(\\s*\\{\\s*queryKey\\s*:\\s*\\[\\s*['\"]users['\"]\\s*\\]\\s*,\\s*queryFn\\s*:\\s*fetchUsers\\s*\\}\\s*\\)",
              "message": "Gunakan: useQuery({ queryKey: ['users'], queryFn: fetchUsers })"
            }
          ],
          "solution": "useQuery({ queryKey: ['users'], queryFn: fetchUsers });"
        },
        {
          "kind": "step",
          "id": "react-8-4",
          "title": "Mutasi Data & Optimistic Update",
          "explanation": "Mutasi data (operasi POST, PUT, DELETE ke server API) dikelola dengan sangat mudah menggunakan Hook `useMutation` dari TanStack Query. Setelah proses mutasi data berhasil di backend server, kita memanggil `queryClient.invalidateQueries({ queryKey: ['todos'] })` untuk memberi tahu TanStack Query agar otomatis mengunduh ulang data terbaru. Pola ini memastikan data yang ada di layar selalu sinkron dengan server backend tanpa perlu memuat ulang seluruh halaman. Jebakan umum adalah lupa meng-invalidasi cache setelah melakukan mutasi.",
          "example": {
            "code": "// Langsung centang todo di UI ➔ Kirim request POST ke server ➔ Rollback jika error",
            "output": "UI terasa sangat responsif dan tidak ada jeda tunggu bagi user.",
            "note": "Memberikan User Experience (UX) kelas atas."
          },
          "instruction": "Lakukan perbaruan state `todos` secara optimis dengan memasukkan item baru `newTodo` ke dalam salinan array `todos` yang ada.",
          "starterCode": "// Tulis optimisitik update di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "setTodos\\(\\s*\\[\\s*\\.\\.\\.todos\\s*,\\s*newTodo\\s*\\]\\s*\\)",
              "message": "Gunakan: setTodos([...todos, newTodo])"
            }
          ],
          "solution": "setTodos([...todos, newTodo])"
        },
        {
          "kind": "step",
          "id": "react-8-5",
          "title": "Pagination & Infinite Scroll",
          "explanation": "Pola navigasi halaman (*pagination*) dan daftar gulir tanpa batas (*infinite scroll*) adalah fitur standar dalam menampilkan ribuan data pada aplikasi modern. TanStack Query menyediakan fitur bawaan `placeholderData: keepPreviousData` agar tampilan halaman sebelumnya tidak hilang atau berkedip saat data halaman baru sedang diunduh di belakang layar. Fitur ini memberikan pengalaman pengguna yang sangat halus dan responsif. Jebakan umum adalah menghapus data lama seketika sebelum data halaman berikutnya selesai diunduh.",
          "example": {
            "code": "const { data } = useQuery([\"users\", page], () => fetchUsers(page));",
            "output": "Data di-fetch sesuai halaman aktif tanpa memuat data ribuan sekaligus.",
            "note": "Menjaga memori browser tetap ringan."
          },
          "instruction": "Tentukan properti `queryKey` di dalam objek argumen berupa array yang berisi string 'items' diikuti dengan variabel `page` agar cache data terpisah untuk setiap halaman.",
          "starterCode": "// Tulis queryKey di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "queryKey\\s*:\\s*\\[\\s*['\"]items['\"]\\s*,\\s*page\\s*\\]",
              "message": "Gunakan: queryKey: ['items', page]"
            }
          ],
          "solution": "queryKey: ['items', page]"
        },
        {
          "kind": "step",
          "id": "react-8-6",
          "title": "Menangani Auth Token di Request Header",
          "explanation": "Mengirimkan token autentikasi (seperti Bearer JWT Token) di dalam header HTTP `Authorization` adalah standar keamanan utama saat berkomunikasi dengan API backend terlindungi. Panggilan API yang menggunakan `fetch` atau library `axios` mengonfigurasi header ini agar server dapat memverifikasi identitas pengguna sebelum memberikan akses data. Memahami pengelolaan token header ini penting agar kamu dapat membuat fitur aplikasi yang aman. Jebakan umum adalah menyimpan token akses rahasia secara tidak aman di variabel global yang rentan dibaca script berbahaya.",
          "example": {
            "code": "fetch('/api/user', {\n  headers: { Authorization: `Bearer ${token}` }\n});",
            "output": "Server mengenali identitas pengguna yang sah.",
            "note": "Simpan token di Memory/HttpOnly Cookie demi keamanan."
          },
          "instruction": "Definisikan objek `headers` yang mendefinisikan kunci `Authorization`. Isinya adalah sebuah template literal (menggunakan backtick) yang menggabungkan kata 'Bearer ' dengan variabel `${token}`.",
          "starterCode": "// Tulis objek headers di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "headers\\s*:\\s*\\{\\s*Authorization\\s*:\\s*`Bearer\\s+\\$\\{token\\}`\\s*\\}",
              "message": "Gunakan: headers: { Authorization: `Bearer ${token}` }"
            }
          ],
          "solution": "headers: { Authorization: `Bearer ${token}` }"
        },
        {
          "kind": "quiz",
          "id": "react-8-kuis",
          "title": "Kuis: Data Fetching",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Apa tujuan utama teknik Optimistic Update?",
              "choices": [
                "Membuat database menjadi lebih kecil",
                "Memperbarui tampilan UI secara instan sebelum respon server selesai untuk UX yang sangat cepat",
                "Menghapus kebutuhan koneksi internet",
                "Mengamankan password user"
              ],
              "answerIndex": 1,
              "explanation": "Optimistic update mengasumsikan request akan sukses dan langsung mengupdate UI tanpa menunggu latency jaringan."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Apa tujuan utama menggunakan TanStack Query (React Query) alih-alih useEffect saat mengambil (fetching) data di komponen?",
              "choices": [
                "Karena TanStack Query adalah API gratis dari React",
                "Agar kode aplikasi tidak memerlukan server backend",
                "TanStack Query otomatis menangani caching, deduplikasi permintaan, revalidation otomatis, serta retry jika jaringan terputus",
                "TanStack Query menggantikan kebutuhan styling CSS"
              ],
              "answerIndex": 2,
              "explanation": "TanStack Query adalah pustaka manajemen state sisi-server canggih yang jauh lebih kokoh dibandingkan melakukan fetch-on-render mandiri secara manual dengan useEffect."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Bagaimana cara paling standar dan aman untuk melampirkan JWT token pada permintaan HTTP menuju API server terproteksi?",
              "choices": [
                "Dikirimkan di dalam query parameter URL (misalnya ?token=xxx)",
                "Dimasukkan secara paksa ke dalam body JSON",
                "Mengirimnya pada header permintaan sebagai 'Authorization: Bearer <token>'",
                "Menyimpannya pada state React dan membiarkan server mengambilnya"
              ],
              "answerIndex": 2,
              "explanation": "Header Authorization dengan skema Bearer token adalah standar autentikasi industri untuk mengamankan komunikasi API REST."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Bolehkah kita membuat Custom Hook (contoh: useFetch) yang di dalamnya tidak memanggil hook React bawaan sama sekali?",
              "choices": [
                "Boleh, namun secara fungsional ia sama saja dengan fungsi JS biasa (utility) dan konvensi kata 'use' menjadi tidak bermakna di React",
                "Tidak, React akan memblokirnya di console",
                "Boleh dan sangat dianjurkan untuk perhitungan matematis biasa",
                "Tidak boleh, nama use wajib diikuti hook lain"
              ],
              "answerIndex": 0,
              "explanation": "Tujuan custom hook adalah membagikan logika stateful (logika yang memakai hook lain). Jika murni fungsi stateless tanpa hooks, sebaiknya buat fungsi helper biasa."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Apa syarat utama penamaan sebuah Custom Hook di React yang akan dicek otomatis oleh ESLint plugin-react-hooks?",
              "choices": [
                "Namanya harus mengandung kata 'Hook'",
                "Namanya harus berakhiran 'Component'",
                "Namanya harus dimulai dengan awalan 'use' dan huruf kapital, contohnya 'useWindowSize'",
                "Tidak ada aturan penamaan"
              ],
              "answerIndex": 2,
              "explanation": "Awalan 'use' (contoh: useFetchData) memberi tahu React dan linter bahwa fungsi ini adalah hook dan harus mematuhi Aturan Hooks."
            }
          ]
        }
      ]
    },
    {
      "slug": "routing",
      "title": "React Router",
      "description": "Aplikasi multi-halaman di satu page: navigasi, parameter, dan nested route.",
      "topics": [
        "Route, Link, dan NavLink",
        "Route parameter (useParams) & query string",
        "Nested route & layout route",
        "Programmatic navigation (useNavigate)",
        "Halaman 404 & route guard sederhana",
        "Lazy loading route"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-9-m1",
          "title": "Navigasi Client-Side dengan React Router",
          "body": "# Pengertian Client-Side Routing\n\nDalam arsitektur Single Page Application (SPA), navigasi antar halaman dilakukan seluruhnya di tingkat client tanpa meminta dokumen HTML baru dari server backend. Pustaka standar de-facto untuk menangani alur perpindahan halaman di React adalah **React Router**.\n\nReact Router mencocokkan URL di address bar browser dengan pohon komponen yang sesuai, memberikan sensasi aplikasi desktop yang serba cepat dan instan.\n\n## Diagram SPA Client Routing vs Traditional MPA\n\n```text\nTraditional MPA (Server Routing):\nBrowser Klik Link ──> Minta HTML baru ke Server ──> Halaman Reload Putih ──> Tampil HTML Baru\n\nSPA React Router (Client Routing):\nBrowser Klik Link ──> Intercept Event ──> Ganti Komponen UI di Memori ──> Tanpa Reload!\n```\n\n## Tabel Perbandingan Hook Utama React Router\n\n| Hook / Komponen | Fungsi Utama | Use Case Contoh |\n|---|---|---|\n| `<Link to=\"...\">` | Mengganti tag `<a>` agar navigasi tanpa reload | Menulis link navigasi di navbar |\n| `useParams()` | Membaca parameter dinamis dari URL path | Membaca ID produk dari `/produk/:id` |\n| `useNavigate()` | Melakukan navigasi secara programatis via kode | Redirect ke halaman dashboard setelah sukses login |\n| `<Outlet />` | Tempat merender anak komponen dari Nested Route | Membuat Layout yang punya Sidebar & Header tetap |\n\n## Analogi Dunia Nyata\n\nNavigasi tradisional MPA seperti harus keluar dari gedung mall dan masuk lewat pintu utama setiap kali ingin pindah toko. Routing SPA React Router seperti naik eskalator di dalam mall: kamu tetap berada di dalam satu bangunan utuh yang sama, cukup berpindah lantai dengan nyaman tanpa pernah keluar ke jalan raya.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Memakai tag `<a href=\"...\">` biasa**\n> Menggunakan tag `<a>` HTML bawaan akan memicu full page reload yang menghapus seluruh state React di memori. Selalu gunakan komponen `<Link to=\"...\">` dari React Router.\n\n> **Jebakan 2: Lupa menambahkan Catch-All Route (404)**\n> Jika pengguna memasukkan URL yang tidak terdaftar, halaman akan menjadi kosong. Selalu sediakan `<Route path=\"*\" element={<NotFound />} />` di akhir daftar rute.\n\n## Kaitan ke Dunia Kerja\n\nPenguasaan React Router meliputi Nested Routing untuk layout dashboard kompleks, Route Guard (Protected Route) untuk membatasi akses halaman rahasia, serta Lazy Loading untuk memecah ukuran bundel kode (*code splitting*)."
        },
        {
          "kind": "step",
          "id": "react-9-1",
          "title": "Route, Link, dan NavLink",
          "explanation": "React Router mengelola navigasi client-side (SPA) dengan menggunakan komponen utama `<BrowserRouter>`, `<Routes>`, `<Route>`, dan `<Link>`. Komponen `<Route path='/about' element={<About />} />` memetakan jalur URL di address bar browser dengan komponen tampilan yang sesuai. Untuk berpindah halaman tanpa memicu proses reload browser, kita wajib menggunakan `<Link to='/about'>` alih-alih tag `<a>` biasa. Jebakan paling sering terjadi adalah lupa membungkus seluruh aplikasi di dalam `<BrowserRouter>` yang mengakibatkan error komponen router.",
          "example": {
            "code": "<NavLink to=\"/about\" className={({ isActive }) => isActive ? \"active\" : \"\"}>About</NavLink>",
            "output": "Menu About otomatis bercahaya/aktif saat URL berada di /about.",
            "note": "Gunakan NavLink untuk pembuatan komponen Navbar utama."
          },
          "instruction": "Gunakan komponen `<Link>` dari React Router untuk membuat tautan ke rute `/profil` dengan teks tampilan 'Profil'.",
          "starterCode": "// Tulis elemen Link di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<Link\\s+to=[\"']/profil[\"']>\\s*Profil\\s*</Link>",
              "message": "Tuliskan: <Link to=\"/profil\">Profil</Link>"
            }
          ],
          "solution": "<Link to=\"/profil\">Profil</Link>"
        },
        {
          "kind": "step",
          "id": "react-9-2",
          "title": "Route Parameter (useParams)",
          "explanation": "Parameter rute dinamis dikonfigurasi pada rute menggunakan tanda titik dua (`path='/produk/:id'`) dan nilainya dapat dibaca di dalam komponen menggunakan Hook `useParams()`. Selain itu, query string URL (seperti `?search=kopi&page=2`) dapat dibaca dan diperbarui menggunakan Hook `useSearchParams()`. Kedua fitur ini memungkinkan kamu membuat halaman detail produk atau halaman pencarian dinamis yang nilai URL-nya dapat dibagikan (*shareable link*). Jebakan umum adalah lupa bahwa nilai yang dikembalikan oleh `useParams()` selalu bertipe `string`.",
          "example": {
            "code": "import { useParams } from \"react-router-dom\";\nfunction UserDetail() {\n  const { id } = useParams();\n  return <h2>User ID: {id}</h2>;\n}",
            "output": "<h2>User ID: 42</h2> saat mengakses /user/42.",
            "note": "String key pada useParams() harus cocok dengan nama variabel di deklarasi Route."
          },
          "instruction": "Panggil hook `useParams` dan lakukan destructuring pada objek yang dikembalikan untuk mengekstrak nilai parameter `id`.",
          "starterCode": "// Tulis useParams di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+\\{\\s*id\\s*\\}\\s*=\\s*useParams\\(\\)",
              "message": "Gunakan: const { id } = useParams();"
            }
          ],
          "solution": "const { id } = useParams();"
        },
        {
          "kind": "step",
          "id": "react-9-3",
          "title": "Nested Route & Layout Route (<Outlet />)",
          "explanation": "Nested Routes (Rute Bersarang) memungkinkan kita merender komponen anak di dalam tata letak (*layout*) komponen induk yang tetap (seperti halaman Dashboard yang memiliki Sidebar dan Header konstan). Komponen induk menggunakan komponen `<Outlet />` dari React Router sebagai tempat penampung dinamis tempat komponen rute anak akan muncul. Pola ini mengeliminasi duplikasi kode layout di setiap file halaman. Jebakan umum adalah lupa meletakkan `<Outlet />` di dalam komponen layout induk sehingga rute anak tidak muncul di layar.",
          "example": {
            "code": "function DashboardLayout() {\n  return (\n    <div>\n      <Sidebar />\n      <Outlet /> {/* Isi Halaman Anak */}\n    </div>\n  );\n}",
            "output": "Sidebar tidak di-render ulang saat berpindah antar tab dashboard.",
            "note": "Outlet adalah tempat komponen anak dirender di dalam layout parent."
          },
          "instruction": "Render elemen placeholder khusus dari React Router DOM di dalam komponen layout agar konten rute anak (child route) dapat ditampilkan.",
          "starterCode": "// Tulis elemen Outlet di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<Outlet\\s*/?>",
              "message": "Tuliskan: <Outlet />"
            }
          ],
          "solution": "<Outlet />"
        },
        {
          "kind": "step",
          "id": "react-9-4",
          "title": "Programmatic Navigation (useNavigate)",
          "explanation": "Programmatic Navigation adalah teknik memicu perpindahan halaman rute melalui kode logika JavaScript (bukan karena klik tombol link oleh pengguna) dengan menggunakan Hook `useNavigate()`. Fitur ini sangat krusial digunakan untuk mengalihkan (*redirect*) pengguna secara otomatis ke halaman dashboard setelah sukses melakukan login, atau mengembalikan pengguna ke halaman sebelumnya setelah membatalkan formulir. Jebakan pemula adalah memanggil `navigate()` langsung di dalam body fungsi komponen tanpa dikontrol oleh handler event atau effect.",
          "example": {
            "code": "const navigate = useNavigate();\nconst handleLogin = () => {\n  navigate(\"/dashboard\");\n};",
            "output": "Browser otomatis berpindah ke /dashboard saat login berhasil.",
            "note": "Gunakan navigate(-1) untuk membuat tombol 'Kembali'."
          },
          "instruction": "Panggil fungsi `navigate` (yang sebelumnya sudah diinisiasi dari `useNavigate()`) dengan argumen string `'/login'` untuk melakukan navigasi ke halaman login.",
          "starterCode": "// Tulis navigate di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "navigate\\(\\s*['\"]/login['\"]\\s*\\)",
              "message": "Gunakan: navigate(\"/login\");"
            }
          ],
          "solution": "navigate(\"/login\");"
        },
        {
          "kind": "step",
          "id": "react-9-5",
          "title": "Halaman 404 & Route Guard Sederhana",
          "explanation": "Halaman error 404 dibuat dengan mengonfigurasi rute catch-all (`path='*'`) yang akan menangkap semua jalur URL yang tidak cocok dengan daftar rute yang ada. Selain rute 404, pola Protected Route (Route Guard) digunakan untuk membentengi rute rahasia dengan mengecek status autentikasi pengguna terlebih dahulu sebelum merender komponen halaman. Jika pengguna belum login, Protected Route akan mengalihkan pengguna ke halaman login via `<Navigate to='/login' replace />`. Jebakan umum adalah lupa menyertakan atribut `replace` yang membuat tombol back browser terjebak di alur redirect.",
          "example": {
            "code": "<Route path=\"/login\" element={<Login />} />",
            "output": "Route standar yang memetakan path /login ke komponen Login.",
            "note": "Selalu tempatkan path='*' di bagian paling akhir daftar Route."
          },
          "instruction": "Buat elemen `<Route>` penangkap (catch-all) dengan `path=\"*\"` yang akan menampilkan elemen `<NotFound />` jika tidak ada rute lain yang cocok.",
          "starterCode": "// Tulis Route 404 di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<Route\\s+path=[\"']\\*[\"']\\s+element=\\{<NotFound\\s*/>\\}\\s*/?>",
              "message": "Gunakan: <Route path=\"*\" element={<NotFound />} />"
            }
          ],
          "solution": "<Route path=\"*\" element={<NotFound />} />"
        },
        {
          "kind": "step",
          "id": "react-9-6",
          "title": "Lazy Loading Route (React.lazy)",
          "explanation": "Lazy Loading rute menggunakan `React.lazy()` dan komponen `<Suspense fallback={<Loading />}>` adalah teknik optimasi performa *code-splitting* untuk memecah ukuran bundel JavaScript utama aplikasi. Dengan lazy loading, browser hanya akan mengunduh berkas kode untuk halaman yang sedang dibuka oleh pengguna saja, bukan mengunduh seluruh halaman aplikasi di awal. Pola ini sangat ampuh mempercepat waktu muat awal (*initial load time*) aplikasi React skala besar. Jebakan umum adalah tidak membungkus komponen lazy dengan `<Suspense>` yang memicu error saat rute diakses.",
          "example": {
            "code": "const Dashboard = React.lazy(() => import('./Dashboard'));\n<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>",
            "output": "Ukuran bundle awal aplikasi menjadi jauh lebih kecil.",
            "note": "Sangat direkomendasikan untuk halaman admin yang ukurannya besar."
          },
          "instruction": "Bungkus komponen `<Home />` menggunakan `<Suspense>`. Berikan elemen `<p>Memuat...</p>` pada properti `fallback` agar tampil selama Home masih diunduh.",
          "starterCode": "// Tulis Suspense di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<Suspense\\s+fallback=\\{<p>Memuat\\.\\.\\.</p>\\}>\\s*<Home\\s*/>\\s*</Suspense>",
              "message": "Gunakan: <Suspense fallback={<p>Memuat...</p>}><Home /></Suspense>"
            }
          ],
          "solution": "<Suspense fallback={<p>Memuat...</p>}><Home /></Suspense>"
        },
        {
          "kind": "quiz",
          "id": "react-9-kuis",
          "title": "Kuis: React Router",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Komponen apa di React Router yang digunakan untuk merender anak dari Nested Route?",
              "choices": [
                "<Layout />",
                "<Outlet />",
                "<Children />",
                "<Inject />"
              ],
              "answerIndex": 1,
              "explanation": "<Outlet /> merender komponen anak yang cocok di dalam layout bertingkat."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Mengapa menggunakan tag <a> HTML biasa tidak disarankan untuk berpindah halaman dalam aplikasi Single Page Application (SPA)?",
              "choices": [
                "Karena tag <a> akan mengirim request ke server untuk HTML baru dan mereload halaman sepenuhnya (full page reload)",
                "Tag <a> tidak bisa di-styling menggunakan CSS",
                "Tag <a> akan selalu membuka tab browser baru",
                "Browser modern telah menghapus dukungan untuk tag <a>"
              ],
              "answerIndex": 0,
              "explanation": "Komponen <Link> atau <NavLink> dari React Router mencegat klik dari pengguna dan memperbarui URL menggunakan History API sehingga perpindahan halaman berjalan tanpa memuat ulang aset halaman dari server."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Jika rute adalah '/artikel/:slug', bagaimana Anda mengekstrak nilai 'slug' di komponen artikel?",
              "choices": [
                "const slug = window.location.slug;",
                "const [slug, setSlug] = useState();",
                "const { slug } = useParams();",
                "Menggunakan props.slug"
              ],
              "answerIndex": 2,
              "explanation": "Hook useParams() mereturn objek dari URL dinamis yang cocok dengan pola route yang didefinisikan (:slug)."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Dalam React Router, bagaimana cara mendeklarasikan rute fallback (catch-all) untuk menangani halaman yang tidak ditemukan (404 Error)?",
              "choices": [
                "Menggunakan path='*'",
                "Menggunakan path='/404'",
                "Menggunakan komponen <NotFound /> tanpa atribut path",
                "Mengatur fallback={true} pada <Routes />"
              ],
              "answerIndex": 0,
              "explanation": "React Router menggunakan wildcard asterisk (*) sebagai rute penangkap-semua (catch-all) yang cocok dengan URL apapun yang belum didefinisikan sebelumnya."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Apa fungsi utama dari hook useNavigate() dalam React Router?",
              "choices": [
                "Untuk mengambil parameter dinamis dari URL (misal ID artikel)",
                "Untuk melakukan navigasi halaman secara terprogram, misalnya setelah form berhasil di-submit",
                "Untuk menyimpan history penjelajahan pengguna ke database",
                "Untuk membuat navbar yang menunjukkan link mana yang sedang aktif"
              ],
              "answerIndex": 1,
              "explanation": "Hook useNavigate() mengembalikan sebuah fungsi yang bisa dipanggil untuk berpindah halaman melalui kode JavaScript, sangat berguna untuk redirect usai suatu aksi (seperti submit form)."
            }
          ]
        }
      ]
    },
    {
      "slug": "testing-react",
      "title": "Testing Komponen",
      "description": "React Testing Library: menguji seperti user memakai, bukan implementasi.",
      "topics": [
        "Filosofi RTL: query by role, bukan by class",
        "render, screen, dan matcher jest-dom",
        "Simulasi interaksi dengan userEvent",
        "Menguji form: isi, submit, assert error",
        "Mock fetch/API di test",
        "Test apa yang layak ditulis (dan yang tidak)"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-10-m1",
          "title": "Filosfi & Praktik Testing Komponen React dengan RTL",
          "body": "# Pengertian Testing Komponen React\n\nPengujian otomatis (*automated testing*) menjamin bahwa komponen yang kamu buat berjalan sesuai harapan dan tidak rusak saat kode di-refactor di masa depan. Pustaka standar untuk menguji komponen React adalah **React Testing Library (RTL)** yang biasanya dijalankan bersama test runner **Vitest** atau **Jest**.\n\nFilosofi utama React Testing Library yang wajib diingat:\n> *\"Semakin mirip caramu menguji dengan cara penggunamu menggunakan aplikasi, semakin besar kepercayaan diri yang kamu dapatkan.\"*\n\n## Prioritas Query Elemen di React Testing Library\n\n```text\nHierarki Utama Query RTL (Gunakan dari Atas ke Bawah):\n\n1. Accessible to Everyone  ──> screen.getByRole('button', { name: /kirim/i })\n2. Semantic Queries        ──> screen.getByLabelText('Email')\n3. Test IDs (Jalan Terakhir)──> screen.getByTestId('custom-widget')\n```\n\n## Tabel Perbandingan Unit Test vs Integration Test pada React\n\n| Jenis Pengujian | Yang Diuji | Contoh Kasus |\n|---|---|---|\n| **Unit Testing** | Komponen murni terisolasi | Memastikan komponen `<Badge />` merender warna yang sesuai dengan prop |\n| **Integration Testing** | Interaksi antar beberapa komponen + State | Mengisi formulir login, klik submit, dan memastikan pesan sukses muncul |\n\n## Analogi Dunia Nyata\n\nMenguji komponen React seperti pengujian kualitas mobil sebelum keluar dari pabrik. Kamu tidak hanya menguji apakah mesinnya menyala saat di meja lab (Unit Test), tetapi kamu mendudukkan penguji di kursi kemudi untuk menekan pedal gas, memutar kemudi, dan menginjak rem (Integration Test via RTL).\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Menguji Detail Implementasi Internal**\n> Menguji nama state internal komponen (`expect(component.state.count).toBe(1)`). Jika nama variabel state diubah saat refactoring, tes akan gagal padahal tampilan UI tidak ada masalah! Ujilah teks yang muncul di layar.\n\n> **Jebakan 2: Menggunakan `fireEvent` alih-alih `userEvent`**\n> `fireEvent` memicu event sintetis secara kaku. Gunakan `@testing-library/user-event` karena mensimulasikan interaksi pengguna sungguhan secara akurat (seperti menekan tombol hover, fokus, dan ketik per karakter).\n\n## Kaitan ke Dunia Kerja\n\nDi perusahaan skala menengah-besar, pengintegrasian tes otomatis ke dalam pipa CI/CD (GitHub Actions) adalah standar wajib. Pull Request (PR) tidak akan di-merge jika tes unit atau integrasi gagal."
        },
        {
          "kind": "step",
          "id": "react-10-1",
          "title": "Filosofi RTL: Query by Role",
          "explanation": "Filosofi utama React Testing Library (RTL) adalah menguji komponen antarmuka berdasarkan bagaimana pengguna akhir berinteraksi dengannya, bukan berdasarkan detail implementasi teknis di dalam kode. RTL mendorong kita mencari elemen menggunakan nama role aksesibilitas (`screen.getByRole('button', { name: /kirim/i })`) atau teks label yang terlihat di layar. Pendekatan ini membuat tes otomatis kamu sangat tahan terhadap refactoring kode internal. Jebakan utama yang harus dihindari adalah mencari elemen berdasarkan nama class CSS atau id internal yang mudah berubah.",
          "example": {
            "code": "const button = screen.getByRole('button', { name: /kirim/i });",
            "output": "Mancari tombol dengan label 'kirim' di screen.",
            "note": "Memastikan komponen ramah aksesibilitas untuk screen reader."
          },
          "instruction": "Tuliskan perintah RTL `screen` untuk mengambil elemen tombol di layar berdasarkan peran (role) aksesibilitasnya, lalu simpan di konstanta `btn`.",
          "starterCode": "// Tulis getByRole di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+btn\\s*=\\s*screen\\.getByRole\\(\\s*['\"]button['\"]\\s*\\)",
              "message": "Gunakan: const btn = screen.getByRole('button');"
            }
          ],
          "solution": "const btn = screen.getByRole('button');"
        },
        {
          "kind": "step",
          "id": "react-10-2",
          "title": "render, screen, dan Matcher jest-dom",
          "explanation": "Fungsi `render()` dari RTL digunakan untuk merender komponen React ke dalam lingkungan DOM virtual untuk keperluan pengujian. Objek `screen` menyediakan berbagai metode pencarian elemen (seperti `getByText`, `findByRole`, `queryByTestId`), sedangkan pustaka `@testing-library/jest-dom` menyediakan fungsi penegasan (*matchers*) yang sangat deskriptif seperti `toBeInTheDocument()` atau `toBeDisabled()`. Menguasai kombinasi fungsi ini penting agar kamu dapat membuat assertion tes yang bersih. Jebakan umum adalah membedakan `getBy` (melempar error jika tak ada) dan `queryBy` (mengembalikan null).",
          "example": {
            "code": "render(<Header />);\nexpect(screen.getByText('Halo')).toBeInTheDocument();",
            "output": "Test pas jika teks 'Halo' ada di dalam dokumen.",
            "note": "screen.getByText mencari elemen berbasis konten teks."
          },
          "instruction": "Tuliskan pengujian ekspektasi Jest/Testing Library untuk memastikan variabel `element` benar-benar berada di dalam DOM virtual (`toBeInTheDocument`).",
          "starterCode": "// Tulis expect di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "expect\\(\\s*element\\s*\\)\\.toBeInTheDocument\\(\\)",
              "message": "Gunakan: expect(element).toBeInTheDocument();"
            }
          ],
          "solution": "expect(element).toBeInTheDocument();"
        },
        {
          "kind": "step",
          "id": "react-10-3",
          "title": "Simulasi Interaksi dengan userEvent",
          "explanation": "Pustaka `@testing-library/user-event` adalah standar utama untuk mensimulasikan interaksi pengguna nyata secara asinkron di dalam kode tes, seperti mengetik karakter pada input (`userEvent.type`), menekan tombol klik (`userEvent.click`), atau memilih opsi dropdown. Berbeda dari `fireEvent` yang kaku, `userEvent` Mensimulasikan seluruh rangkaian event browser secara alami (termasuk event focus, hover, dan keydown). Jebakan paling sering adalah lupa menggunakan kata kunci `await` saat memanggil fungsi-fungsi `userEvent` yang bersifat asinkron.",
          "example": {
            "code": "const button = screen.getByRole('button');\nawait userEvent.click(button);",
            "output": "Simulasi klik pengguna dijalankan secara async.",
            "note": "userEvent lebih disukai daripada fireEvent karena lebih realistis."
          },
          "instruction": "Jalankan fungsi asinkron dari pustaka `userEvent` untuk memicu aksi klik pada variabel `button`.",
          "starterCode": "// Tulis userEvent.click di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "await\\s+userEvent\\.click\\(\\s*button\\s*\\)",
              "message": "Gunakan: await userEvent.click(button);"
            }
          ],
          "solution": "await userEvent.click(button);"
        },
        {
          "kind": "step",
          "id": "react-10-4",
          "title": "Menguji Form: Isi, Submit, Assert Error",
          "explanation": "Menguji komponen formulir interaktif melibatkan simulasi lengkap dari pengisian data oleh pengguna hingga verifikasi keluaran pesan kesalahan di layar. Kita mensimulasikan pengetikan pada input yang salah, memicu klik tombol submit, lalu menegaskan bahwa elemen pesan error (`screen.getByText(/email tidak valid/i)`) benar-benar muncul di dokumen DOM. Pengujian ini memastikan alur kerja formulir bebas dari bug sebelum dirilis ke pengguna. Jebakan umum adalah tidak menunggu proses render kondisi error selesai sebelum membuat assertion.",
          "example": {
            "code": "await userEvent.type(screen.getByRole('textbox'), 'bimo@test.com');\nawait userEvent.click(screen.getByRole('button'));",
            "output": "Form terisi dan disubmit pada test.",
            "note": "Uji pesan error yang muncul saat input diisi secara salah."
          },
          "instruction": "Simulasikan pengguna mengetikkan teks `'Halo'` secara asinkron ke dalam elemen `input` menggunakan `userEvent.type`.",
          "starterCode": "// Tulis userEvent.type di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "await\\s+userEvent\\.type\\(\\s*input\\s*,\\s*['\"]Halo['\"]\\s*\\)",
              "message": "Gunakan: await userEvent.type(input, 'Halo');"
            }
          ],
          "solution": "await userEvent.type(input, 'Halo');"
        },
        {
          "kind": "step",
          "id": "react-10-5",
          "title": "Mock Fetch / API di Test (MSW)",
          "explanation": "Saat menguji komponen yang melakukan panggilan REST API backend, kita tidak boleh melakukan panggilan jaringan sungguhan ke server produksi. Sebagai gantinya, kita menggunakan pustaka Mock Service Worker (MSW) untuk mencegat panggilan HTTP di tingkat jaringan dan mengembalikan data tiruan (*mock data*) yang konsisten. Teknik mocking ini membuat tes otomatis kamu berjalan super cepat, independen dari koneksi internet, dan terisolasi dari gangguan server backend. Jebakan pemula adalah mencoba melakukan fetch sungguhan saat running tes CI.",
          "example": {
            "code": "function mockApiHandler(path, data) {\n  return { path: path, response: data };\n}\nconsole.log(mockApiHandler('/api/users', []));",
            "output": "{ path: \"/api/users\", response: [] }",
            "note": "Pengujian unit harus bisa berjalan tanpa koneksi internet."
          },
          "instruction": "Buat fungsi `mockApiHandler(path, data)` yang mengembalikan objek handler palsu `{ path: path, response: data }`.",
          "starterCode": "// Tulis fungsi mockApiHandler di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "path\\s*:\\s*path\\s*,\\s*response\\s*:\\s*data|\\{\\s*path\\s*,\\s*response\\s*:\\s*data\\s*\\}",
              "message": "Kembalikan objek: { path: path, response: data }"
            }
          ],
          "solution": "function mockApiHandler(path, data) {\n  return { path: path, response: data };\n}"
        },
        {
          "kind": "step",
          "id": "react-10-6",
          "title": "Test Apa yang Layak Ditulis (dan yang Tidak)",
          "explanation": "Menentukan apa yang layak diuji (*testing strategy*) adalah keputusan penting agar waktu pengembangan tetap efisien. Fokuskan pengujian pada alur kerja utama pengguna (*user journey*), komponen UI yang kaya akan logika interaksi, serta penanganan kondisi error kritis. Jangan menghabiskan waktu menguji gaya tampilan CSS sederhana atau librari pihak ketiga yang sudah teruji oleh pembuatnya. Memahami prioritas pengujian ini membantu kamu mencapai cakupan tes (*test coverage*) yang bermakna. Jebakan umum adalah mengejar 100% test coverage dengan menulis tes sepele yang tidak memberi nilai tambah.",
          "example": {
            "code": "function shouldTestItem(type) {\n  return type === 'user_behavior' ? true : false;\n}\nconsole.log(shouldTestItem('user_behavior'));",
            "output": "true",
            "note": "Fokus pada apa yang dilihat dan dirasakan oleh pengguna."
          },
          "instruction": "Buat fungsi `shouldTestItem(targetType)` yang mengembalikan `true` jika `targetType === 'user_behavior'` dan `false` jika sebaliknya.",
          "starterCode": "// Tulis fungsi shouldTestItem di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "targetType\\s*===\\s*['\"]user_behavior['\"]",
              "message": "Periksa: targetType === 'user_behavior'"
            }
          ],
          "solution": "function shouldTestItem(targetType) {\n  return targetType === 'user_behavior';\n}"
        },
        {
          "kind": "quiz",
          "id": "react-10-kuis",
          "title": "Kuis: Testing Komponen",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Metode pencarian elemen apa yang paling direkomendasikan di React Testing Library?",
              "choices": [
                "getByTestId",
                "getByRole",
                "querySelector",
                "getByClassName"
              ],
              "answerIndex": 1,
              "explanation": "getByRole mencerminkan cara pengguna dan screen reader mengidentifikasi elemen di layar."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Mengapa React Testing Library melarang melakukan assertion terhadap variabel state internal komponen?",
              "choices": [
                "Karena state internal dapat di-refactor tanpa mengubah cara kerja UI di mata pengguna (Black-box testing)",
                "Karena React tidak memperbolehkan pembacaan state",
                "Karena state tidak bisa di-mock",
                "Agar waktu pengujian lebih cepat 100 kali lipat"
              ],
              "answerIndex": 0,
              "explanation": "Uji coba komponen harus menguji hasil yang dilihat oleh pengguna, bukan detail implementasi internal yang sewaktu-waktu bisa berubah."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Pustaka apa yang disarankan untuk melakukan simulasi interaksi pengetikan keyboard atau klik mouse secara asinkron di React Testing Library?",
              "choices": [
                "userEvent",
                "windowEvent",
                "domHelper",
                "reactAction"
              ],
              "answerIndex": 0,
              "explanation": "`userEvent` mensimulasikan kejadian pengguna secara realistis lengkap dengan urutan event browser asli."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Dalam pengujian komponen yang melakukan fetch data ke API eksternal, mengapa praktik terbaik menyarankan penggunaan alat seperti MSW (Mock Service Worker)?",
              "choices": [
                "Untuk mempercepat loading CSS komponen yang sedang diuji",
                "Agar pengujian tidak bergantung pada server asli dan tidak membuat perubahan data permanen di database",
                "Karena React Testing Library tidak mengizinkan pemakaian fungsi fetch sama sekali",
                "Untuk menjalankan browser tanpa UI (headless browser) dalam mode background"
              ],
              "answerIndex": 1,
              "explanation": "Memalsukan (mock) API request di level network menjamin unit test berjalan independen secara lokal, terisolasi dari potensi downtime server asli, dan bisa dijalankan tanpa koneksi internet."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Bagaimana cara mensimulasikan interaksi pengguna yang kompleks seperti mengetik teks ke dalam elemen input teks menggunakan alat pengujian modern di ekosistem RTL?",
              "choices": [
                "Menggunakan metode fireEvent.change() saja",
                "Memanipulasi value input menggunakan document.getElementById().value",
                "Menggunakan userEvent.type()",
                "Men-dispatch event keyboard murni dari browser"
              ],
              "answerIndex": 2,
              "explanation": "Pustaka userEvent didesain lebih mendekati interaksi pengguna di dunia nyata, dengan userEvent.type() yang mensimulasikan event keydown, keypress, dan keyup persis seperti yang dilakukan browser."
            }
          ]
        }
      ]
    },
    {
      "slug": "pola-dunia-kerja",
      "title": "Pola Dunia Kerja",
      "description": "Yang tidak diajarkan tutorial: struktur proyek, konvensi tim, dan membaca codebase orang.",
      "topics": [
        "Struktur folder: by-feature vs by-type",
        "Komponen presentational vs container (dan evolusinya)",
        "Error boundary & fallback UI",
        "Environment variable & konfigurasi",
        "Membaca codebase React yang sudah ada — strategi orientasi",
        "Code review checklist untuk PR React",
        "Aksesibilitas di React: focus, label, aria"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "react-11-m1",
          "title": "Arsitektur & Pola Pengembangan React di Industri",
          "body": "# Pengertian Arsitektur React di Industri\n\nMenulis kode React yang dapat berjalan di komputer lokal berbeda jauh dengan membangun aplikasi React skala besar yang dirawat oleh puluhan pengembang selama bertahun-tahun. Di industri, arsitektur kode, struktur folder, pengelolaan variabel lingkungan, dan aksesibilitas (a11y) diatur ketat.\n\nModul ini merangkum pola-pola terbaik (*best practices*) yang dipakai tim perekayasa perangkat lunak di dunia kerja nyata.\n\n## Struktur Folder Berbasis Fitur (Feature-Based Architecture)\n\n```text\nsrc/\n├── assets/\n├── components/          # Komponen umum shared (Button, Input, Modal)\n├── features/            # Fitur domain terisolasi\n│   ├── auth/            # Modul Autentikasi\n│   │   ├── components/  # LoginForm.tsx, RegisterCard.tsx\n│   │   ├── hooks/       # useAuth.ts\n│   │   └── api/         # authApi.ts\n│   └── cart/            # Modul Keranjang\n├── hooks/               # Custom hooks global\n└── utils/               # Helper functions\n```\n\n## Tabel Checklist Code Review PR React Industri\n\n| Area Review | Yang Diperiksa | Risiko Jika Dilanggar |\n|---|---|---|\n| **Aksesibilitas (a11y)** | Semua tombol & input punya label/aria-label | Pengguna difabel netra tidak bisa menggunakan app |\n| **Keamanan (.env)** | Tidak ada Secret Key rahasia bermprefix `VITE_` | Kredensial database/API terkespos ke publik |\n| **Error Handling** | Komponen dibungkus dengan Error Boundary | Satu error komponen membuat seluruh layar putih (*white screen*) |\n\n## Analogi Dunia Nyata\n\nMembangun aplikasi industri seperti merancang tata kota modern. Kamu membagi kota menjadi zona industri, pemukiman, dan taman publik yang terorganisir dengan jalan utama. Jika terjadi masalah di zona pemukiman (error di satu fitur), pemadam kebakaran bisa mengisolasinya tanpa membuat seluruh kota padam listrik.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Menyimpan Secret Key API di variabel `VITE_`**\n> Variabel dengan awalan `VITE_` akan di-embed langsung ke dalam bundel JavaScript publik yang bisa di-inspect oleh siapa saja di browser! Hanya simpan public key di client.\n\n> **Jebakan 2: Mengabaikan Error Boundary**\n> Jika satu komponen melempar error tak tertangani saat render, React secara default akan menghapus seluruh pohon komponen dari layar (*White Screen of Death*). Selalu pasang Error Boundary.\n\n## Kaitan ke Dunia Kerja\n\nMemahami struktur folder scalable, aturan keamanan client, Error Boundary, serta standar aksesibilitas WAI-ARIA akan membuat kodedokumu terlihat sangat profesional di mata Senior Developer saat tahap Code Review dan Technical Interview."
        },
        {
          "kind": "step",
          "id": "react-11-1",
          "title": "Struktur Folder: Feature-based vs Type-based",
          "explanation": "Struktur folder berbasis fitur (*Feature-Based Architecture*) mengelompokkan kode berdasarkan domain fitur bisnis (seperti `features/auth`, `features/cart`, `features/checkout`) alih-alih mengelompokkan berdasarkan tipe berkas (`components`, `hooks`, `services`). Dalam arsitektur ini, seluruh komponen, custom hooks, tipe TypeScript, dan panggilan API yang berhubungan dengan fitur autentikasi disimpan di dalam satu folder fitur terisolasi. Arsitektur ini sangat terukur untuk aplikasi skala besar dengan puluhan pengembang. Jebakan pemula adalah mencampur 100 komponen fitur berbeda ke dalam folder `src/components/` utama.",
          "example": {
            "code": "function getFeaturePath(featureName) {\n  return `src/features/${featureName}`;\n}\nconsole.log(getFeaturePath('auth'));",
            "output": "src/features/auth",
            "note": "Memudahkan pembagian tugas dan isolasi kode antar tim."
          },
          "instruction": "Buat fungsi `getFeaturePath(featureName)` yang mengembalikan string path `\"src/features/${featureName}\"`.",
          "starterCode": "// Tulis fungsi getFeaturePath di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "`src/features/\\$\\{featureName\\}`|['\"]src/features/['\"]\\s*\\+\\s*featureName",
              "message": "Format path: `src/features/${featureName}`"
            }
          ],
          "solution": "function getFeaturePath(featureName) {\n  return `src/features/${featureName}`;\n}"
        },
        {
          "kind": "step",
          "id": "react-11-2",
          "title": "Container vs Presentational Pattern",
          "explanation": "Pola pemisahan komponen Container (Smart) dan Presentational (Dumb) membantu memisahkan tanggung jawab antara pengelolaan logika data dan tampilan UI. Komponen Container menangani pengambilan data, pengelolaan state, dan logika bisnis, lalu meneruskan datanya ke komponen Presentational yang hanya fokus merender elemen JSX dan gaya tampilan. Pola ini membuat komponen tampilan menjadi sangat bersih dan mudah dites. Jebakan umum adalah memasukkan panggilan API kompleks di dalam komponen tombol tampilan kecil.",
          "example": {
            "code": "function classifyComponent(hasState) {\n  return hasState ? 'container' : 'presentational';\n}\nconsole.log(classifyComponent(false));",
            "output": "presentational",
            "note": "Pola ini berevolusi dengan hadirnya Custom Hooks untuk ekstraksi logika."
          },
          "instruction": "Buat fungsi `classifyComponent(hasState)` yang mengembalikan `'container'` jika `hasState` bernilai `true` dan `'presentational'` jika `false`.",
          "starterCode": "// Tulis fungsi classifyComponent di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "hasState\\s*\\?\\s*['\"]container['\"]\\s*:\\s*['\"]presentational['\"]",
              "message": "Gunakan: hasState ? 'container' : 'presentational'"
            }
          ],
          "solution": "function classifyComponent(hasState) {\n  return hasState ? 'container' : 'presentational';\n}"
        },
        {
          "kind": "step",
          "id": "react-11-3",
          "title": "Handling Crash dengan Error Boundary",
          "explanation": "Error Boundary adalah komponen kelas React khusus yang menangkap kesalahan JavaScript tak tertangani (*unhandled error*) di mana saja di dalam pohon komponen anaknya, mencatat kesalahan tersebut, dan menampilkan UI cadangan (*fallback UI*) yang ramah pengguna. Tanpa Error Boundary, satu kesalahan kecil pada komponen anak akan membuat seluruh tampilan aplikasi React menghapus dirinya dan menjadi layar putih kosong (*White Screen of Death*). Mengimplementasikan Error Boundary adalah standar wajib pada aplikasi tingkat produksi. Jebakan pemula adalah mengira `try/catch` biasa di event handler dapat menangkap error render komponen.",
          "example": {
            "code": "<ErrorBoundary fallback={<p>Terjadi kesalahan</p>}><Dashboard /></ErrorBoundary>",
            "output": "Menyelamatkan bagian aplikasi lain jika salah satu widget error.",
            "note": "Wajib dipasang di sekitar modul-modul penting."
          },
          "instruction": "Lindungi komponen `<Profile />` dari kecelakaan render dengan membungkusnya di dalam komponen pelindung error (`ErrorBoundary`) yang menampilkan teks `<p>Error</p>` saat terjadi masalah.",
          "starterCode": "// Tulis ErrorBoundary di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<ErrorBoundary\\s+fallback=\\{<p>Error</p>\\}>\\s*<Profile\\s*/>\\s*</ErrorBoundary>",
              "message": "Bungkus <Profile /> dengan ErrorBoundary"
            }
          ],
          "solution": "<ErrorBoundary fallback={<p>Error</p>}><Profile /></ErrorBoundary>"
        },
        {
          "kind": "step",
          "id": "react-11-4",
          "title": "Environment Variable (import.meta.env)",
          "explanation": "Variabel lingkungan (*environment variables*) di Vite diakses melalui objek `import.meta.env` dan hanya variabel yang diawali dengan awalan `VITE_` yang akan diikutsertakan ke dalam bundel client. Sangat krusial untuk diingat bahwa seluruh variabel bermprefix `VITE_` dapat dibaca oleh siapapun yang menginspeksi sumber kode di browser. Oleh karena itu, jangan pernah menyimpan kunci rahasia backend (*Secret Keys*, database password, private tokens) di dalam berkas `.env` client React. Jebakan paling berbahaya adalah membocorkan secret API key ke repository publik via file `.env`.",
          "example": {
            "code": "const apiUrl = import.meta.env.VITE_API_URL;",
            "output": "Mengakses URL backend tanpa hardcode di berkas kode.",
            "note": "Jangan simpan API Key rahasia backend di environment frontend!"
          },
          "instruction": "Deklarasikan konstanta `url` yang membaca nilai environment variable `import.meta.env.VITE_API_URL`.",
          "starterCode": "// Tulis variabel url di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+url\\s*=\\s*import\\.meta\\.env\\.VITE_API_URL",
              "message": "Gunakan: const url = import.meta.env.VITE_API_URL;"
            }
          ],
          "solution": "const url = import.meta.env.VITE_API_URL;"
        },
        {
          "kind": "step",
          "id": "react-11-5",
          "title": "Strategi Orientasi Codebase Baru",
          "explanation": "Saat masuk ke proyek React baru: 1. Baca `package.json`, 2. Buka entry point (`main.tsx` / `App.tsx`), 3. Periksa router aplikasi untuk memahami alur halaman.",
          "example": {
            "code": "function getOnboardingSteps() {\n  return ['package.json', 'entrypoint', 'router'];\n}\nconsole.log(getOnboardingSteps());",
            "output": "[\"package.json\", \"entrypoint\", \"router\"]",
            "note": "Membaca file router adalah cara tercepat memahami keseluruhan fitur aplikasi."
          },
          "instruction": "Buat fungsi `getOnboardingSteps()` yang mengembalikan array string `['package.json', 'entrypoint', 'router']`.",
          "starterCode": "// Tulis fungsi getOnboardingSteps di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "\\[\\s*['\"]package\\.json['\"]\\s*,\\s*['\"]entrypoint['\"]\\s*,\\s*['\"]router['\"]\\s*\\]",
              "message": "Kembalikan ['package.json', 'entrypoint', 'router']"
            }
          ],
          "solution": "function getOnboardingSteps() {\n  return ['package.json', 'entrypoint', 'router'];\n}"
        },
        {
          "kind": "step",
          "id": "react-11-6",
          "title": "Checklist Code Review untuk PR React",
          "explanation": "Checklist PR React: Apakah key di-map dengan benar? Apakah ada useEffect tanpa cleanup? Apakah ada state redundan? Apakah accessibility terjaga?",
          "example": {
            "code": "function validatePRChecklist(hasKeys, hasCleanups) {\n  return Boolean(hasKeys && hasCleanups);\n}\nconsole.log(validatePRChecklist(true, true));",
            "output": "true",
            "note": "Terapkan checklist ini pada diri sendiri sebelum membuka PR."
          },
          "instruction": "Buat fungsi `validatePRChecklist(hasKeys, hasCleanups)` yang mengembalikan `true` hanya jika `hasKeys` DAN `hasCleanups` keduanya bernilai `true`.",
          "starterCode": "// Tulis fungsi validatePRChecklist di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "Boolean\\s*\\(\\s*hasKeys\\s*&&\\s*hasCleanups\\s*\\)|hasKeys\\s*&&\\s*hasCleanups",
              "message": "Periksa: hasKeys && hasCleanups"
            }
          ],
          "solution": "function validatePRChecklist(hasKeys, hasCleanups) {\n  return Boolean(hasKeys && hasCleanups);\n}"
        },
        {
          "kind": "step",
          "id": "react-11-7",
          "title": "Aksesibilitas (a11y) di React",
          "explanation": "Aksesibilitas web (*a11y*) di React memastikan bahwa aplikasi yang kamu bangun dapat digunakan dengan nyaman oleh semua orang, termasuk pengguna penyandang disabilitas yang menggunakan pembaca layar (*screen reader*) atau navigasi papan ketik (*keyboard navigation*). Praktik utamanya meliputi penggunaan elemen HTML semantik (`<button>`, `<main>`, `<nav>`), menyertakan atribut `aria-label` pada tombol berbasis ikon tanpa teks, serta mengelola urutan fokus keyboard saat modal dialog terbuka. Memperhatikan aksesibilitas adalah standar kualitas pengembang profesional. Jebakan umum adalah menggunakan tag `<div>` dengan event `onClick` tanpa atribut `role='button'` dan `tabIndex`.",
          "example": {
            "code": "<label htmlFor=\"email\">Email</label>\n<input id=\"email\" type=\"email\" />",
            "output": "Elemen label terhubung dengan input untuk screen reader.",
            "note": "htmlFor adalah versi JSX untuk atribut 'for' pada elemen label HTML."
          },
          "instruction": "Tuliskan elemen JSX `<label>` yang terhubung ke input berpembeda ID `'username'` menggunakan atribut `htmlFor` berisi teks `'Username'`.",
          "starterCode": "// Tulis elemen label di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<label\\s+htmlFor=[\"']username[\"']>\\s*Username\\s*</label>",
              "message": "Gunakan: <label htmlFor=\"username\">Username</label>"
            }
          ],
          "solution": "<label htmlFor=\"username\">Username</label>"
        },
        {
          "kind": "quiz",
          "id": "react-11-kuis",
          "title": "Kuis: Pola Dunia Kerja",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Atribut JSX apa yang digunakan untuk menghubungkan `<label>` dengan ID `<input>`?",
              "choices": [
                "for",
                "htmlFor",
                "labelFor",
                "inputId"
              ],
              "answerIndex": 1,
              "explanation": "Di JSX, atribut 'for' ditulis sebagai 'htmlFor' untuk menghindari bentrokan kata kunci 'for' di JavaScript."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Apa keuntungan utama struktur folder berbasis fitur (feature-based folder structure) pada codebase React berskala besar?",
              "choices": [
                "Setiap fitur mengisolasi komponen, hooks, dan tipe data terkait sehingga mudah dipelihara dan dibagi antar tim",
                "Fitur berbasis folder membuat memori RAM browser 50% lebih hemat",
                "Semua file JavaScript otomatis dikompilasi ke Python",
                "Mencegah kebutuhan penggunaan git"
              ],
              "answerIndex": 0,
              "explanation": "Struktur berbasis fitur mengelompokkan semua file yang bekerja bersama di satu lokasi daripada memecahnya ke folder generik terpisah."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Apa peran dari Error Boundary pada aplikasi React?",
              "choices": [
                "Menangkap JavaScript error di komponen anak dan merender Fallback UI tanpa membuat seluruh aplikasi crash (layar putih)",
                "Mencegah serangan hacker SQL Injection",
                "Menggantikan fungsi try-catch di dalam fungsi biasa",
                "Mengompresi ukuran bundle gambar"
              ],
              "answerIndex": 0,
              "explanation": "Error Boundary menjaga agar bug pada satu komponen kecil tidak memadamkan seluruh aplikasi web secara menyeluruh."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Di Vite, variabel lingkungan (environment variable) untuk menyimpan URL API (contoh: VITE_API_URL) hanya bisa diakses di klien melalui sintaks yang mana?",
              "choices": [
                "process.env.VITE_API_URL",
                "window.VITE_API_URL",
                "import.meta.env.VITE_API_URL",
                "require('dotenv').VITE_API_URL"
              ],
              "answerIndex": 2,
              "explanation": "Vite mengekspos environment variables di sisi klien melalui objek khusus import.meta.env, bukan menggunakan process.env seperti pada Node.js murni atau Create React App."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Mana dari pernyataan berikut yang menggambarkan perbedaan utama antara Komponen Container dan Komponen Presentational?",
              "choices": [
                "Container menggunakan class, sementara Presentational menggunakan function",
                "Presentational bertanggung jawab pada tampilan UI dan menerima data dari props, sementara Container mengurus fetching data dan logika aplikasi",
                "Container harus selalu berada di file index.js, sedangkan Presentational ada di folder /styles",
                "Presentational tidak boleh menggunakan hook sama sekali, sedangkan Container bebas"
              ],
              "answerIndex": 1,
              "explanation": "Pemisahan ini membuat komponen tampilan lebih reusabel (dapat digunakan kembali) karena tidak terikat langsung pada sumber datanya, sedangkan komponen container yang menyuplai data."
            }
          ]
        }
      ]
    }
  ]
};
