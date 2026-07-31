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
          "body": "# Pengertian Mental Model React\n\nReact adalah library JavaScript populer ciptaan Meta untuk membangun User Interface (UI) berbasis komponen. Berbeda dari JavaScript DOM murni di mana kamu secara imperatif memberi instruksi langkah-demi-langkah ke browser (`document.querySelector('#btn').addEventListener(...)`), React menganut paradigma **deklaratif**.\n\nSatu rumus inti yang wajib kamu ingat sepanjang karier React kamu:\n\n```text\nUI = f(state)\n```\n\nTampilan UI di layar hanyalah hasil keluaran dari sebuah fungsi yang menerima data (state). Ketika state berubah, React secara otomatis memperbarui tampilan tanpa kamu perlu menyentuh DOM secara manual.\n\n## Visualisasi Alur Kerja React (Virtual DOM)\n\n```text\n+-------------------+      +-----------------------+      +--------------------+\n| State/Data Berubah| ---> | React Buat Virtual DOM| ---> | Diffing Algorithm  |\n+-------------------+      +-----------------------+      +--------------------+\n                                                                    |\n                                                                    v\n                                                          +--------------------+\n                                                          | Minimal Update DOM |\n                                                          +--------------------+\n```\n\n## Tabel Perbandingan Tool Setup Proyek React\n\n| Tool | Kecepatan Startup | Status Industri | Catatan Penggunaan |\n|---|---|---|---|\n| **Vite** | Sangat Cepat (< 1 detik) | Standard Utama | Memakai Native ESM & Esbuild. Sangat direkomendasikan. |\n| **Create React App (CRA)** | Lambat (10-30 detik) | Deprecated (Usang) | Memakai Webpack lama. Jangan gunakan untuk proyek baru. |\n| **Next.js** | Cepat | Standard Fullstack/SSR | Framework di atas React untuk Routing & Server Rendering. |\n\n## Analogi Dunia Nyata\n\nBayangkan kamu memesan makanan di restoran cepat saji. Di JavaScript murni (imperatif), kamu harus masuk ke dapur, menyalakan kompor, memasak daging, memotong roti, dan menyusun burger sendiri. Di React (deklaratif), kamu cukup memesan 'Paket Burger Nomor 3' di kasir. Kasir (React) yang akan berkoordinasi dengan dapur (DOM) untuk menyiapkan hidangan persis sesuai pesananmu.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan 1: Membuka file `index.html` langsung di browser**\n> File React/Vite tidak bisa dibuka langsung via `file://...` karena membutuhkan kompilasi JSX & modul ESM. Kamu wajib menjalankannya melalui dev server (`npm run dev`).\n\n> **Jebakan 2: Versi Node.js yang usang**\n> Vite membutuhkan Node.js minimal versi 18+. Pastikan memeriksa versi Node.js kamu sebelum memulai (`node -v`).\n\n## Yang Bisa & Tidak Bisa Ditampilkan Panel Preview di Sini\n\nBaca ini sekali, supaya kamu tidak menyimpulkan jawabanmu salah padahal benar. Panel preview di latihan React mengompilasi kodemu dengan Babel, lalu **merender komponen terakhir yang terdefinisi** di editor. Konsekuensinya:\n\n| Bentuk kode yang kamu tulis | Yang muncul di panel |\n|---|---|\n| Komponen utuh (`function Kartu() { return <p>Hai</p>; }`) | Hasil visualnya benar-benar tampil |\n| Potongan sebaris (`setCount(prev => prev + 1);`) | Tidak ada visual — panel hanya menyatakan sintaksmu sudah benar |\n| Kode yang memakai library (React Router, Zustand, TanStack Query, Testing Library) | Tidak dijalankan; library-nya tidak terpasang di preview |\n| Kode yang menyebut berkas lain (`import Header from './components/Header'`) | Impor diabaikan; hasil lintas berkas tidak terlihat |\n\nSebagian besar latihan di track ini berbentuk potongan, karena yang dilatih adalah **menulis pola yang benar**. Kalau panel tidak menampilkan apa pun, itu bukan tanda kegagalan: **tesnya tetap bisa lulus**, dan setiap latihan seperti itu diberi catatan di bagian contoh.\n\n## Kaitan ke Dunia Kerja\n\nSaat wawancara kerja atau onboarding di perusahaan tech, kamu akan diminta melakukan *clone* repository dan menjalankan environment lokal. Kemahiran mempersiapkan env React dengan Vite, mengkonfigurasi TypeScript, serta menggunakan React DevTools untuk menginspeksi hierarki komponen adalah skill mendasar yang langsung diuji pada hari pertama kamu bekerja."
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
              "message": "Perintah pemeriksa versi di dunia CLI hampir selalu berupa nama programnya diikuti opsi versi (`-v` atau `--version`). Kalau terminal menjawab `command not found`, Node.js memang belum terpasang — bukan perintahmu yang salah."
            }
          ],
          "solution": "node -v",
          susunKode: {
            question:
              "Ketik perintah terminal untuk memeriksa versi Node.js.",
            potongan: [
          "no",
          "de",
          " -v"
],
            pengecoh: [
          "np",
          "m",
          " -check"
],
            pemisah: "",
            explanation:
              "Perintah `node -v` memeriksa versi Node.js yang terpasang di terminal. Pengecoh `npm` menggoda pemula yang keliru membedakan runtime Node.js dengan manajer paket npm, padahal keduanya memiliki CLI berbeda. Pengecoh `--check` juga merupakan jebakan opsi yang tidak valid untuk memeriksa versi di Node.js.",
          },
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
              "pattern": "npm\\s+create\\s+vite(@latest)?",
              "message": "Scaffolding Vite dipanggil dengan `npm create vite`. Tambahkan penanda `@latest` agar kamu tidak mendapat versi lama dari cache npm."
            },
            {
              "pattern": "vite(@latest)?\\s+bipack-app",
              "message": "Nama proyek ditulis tepat setelah nama paketnya, dan akan menjadi nama folder. Pakai huruf kecil dan tanda hubung — npm menolak nama berhuruf besar."
            },
            {
              "pattern": "--\\s+--template\\s+react-ts",
              "message": "Opsi untuk create-vite (bukan untuk npm) harus dipisahkan dengan `--` kosong lebih dulu, baru `--template` diikuti nama template React+TypeScript. Tanpa pemisah itu, npm menganggap opsinya miliknya sendiri dan template diabaikan."
            }
          ],
          "solution": "npm create vite@latest bipack-app -- --template react-ts",
          susunKode: {
            question:
              "Inisialisasi proyek Vite bernama bipack-app dengan template react-ts.",
            potongan: [
              "npm create vite@latest",
              "bipack-app",
              "-- --template react-ts",
            ],
            pengecoh: [
              "npx create-react-app",
              "--template typescript",
            ],
            pemisah: " ",
            explanation:
              "Perintah `npm create vite@latest` menginisialisasi proyek baru dengan template Vite secara cepat. Pengecoh `npx create-react-app` menggoda pengembang yang terbiasa dengan perkakas lama CRA yang sudah tidak direkomendasikan. Pengecoh `--template typescript` juga keliru karena nama template resmi Vite untuk React TS adalah `react-ts`.",
          },
        },
        {
          "kind": "step",
          "id": "react-0-3",
          "title": "Memahami Anatomi & Struktur Folder Vite",
          "explanation": "Titik masuk utama aplikasi React Vite adalah `src/main.tsx`. File ini menggunakan `ReactDOM.createRoot` untuk merender komponen utama `App.tsx` ke dalam elemen HTML ber-id `root` yang ada di `index.html`. Dengan metode ini, seluruh pohon komponen React disuntikkan ke dalam satu tempat di DOM browser. Jebakan umum adalah menghapus div id='root' di index.html yang mengakibatkan aplikasi React tidak muncul di layar.",
          "example": {
            "code": "import React from \"react\";\nimport ReactDOM from \"react-dom/client\";\nimport App from \"./App\";\n\nReactDOM.createRoot(document.getElementById(\"root\")!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);",
            "output": "index.html sebelum React jalan:\n<div id=\"root\"></div>\n\nSetelah main.tsx dijalankan:\n<div id=\"root\">\n  <h1>BiLearn</h1>\n</div>",
            "note": "React.StrictMode membantu mendeteksi potensi bug dan efek samping tak terduga selama masa pengembangan. Catatan jujur soal panel preview: Testing Library dan test runner-nya tidak ada di sana, jadi kode tes tidak dijalankan — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Berkas `src/main.tsx` adalah titik masuk aplikasi: ia mencari satu elemen kosong di `index.html` yang ber-id `root`, lalu menempelkan komponen `App` ke dalamnya. Lengkapi baris di editor sehingga React membuat root di elemen itu dan merender `<App />` ke dalamnya.",
          "starterCode": "// src/main.tsx\n// Buat root React di elemen #root, lalu render <App /> ke dalamnya.\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "ReactDOM\\.createRoot\\(|createRoot\\(",
              "message": "Sejak React 18, root dibuat dengan `createRoot(...)` — bukan `ReactDOM.render()` yang sudah tidak dipakai lagi."
            },
            {
              "pattern": "document\\.getElementById\\(['\"]root['\"]\\)",
              "message": "Beri tahu React elemen mana yang jadi wadahnya, dengan mencari elemen ber-id `root` dari `index.html`. Kalau id-nya salah tulis, hasilnya `null` dan React melempar error \"Target container is not a DOM element\"."
            },
            {
              "pattern": "\\.render\\(\\s*<App\\s*/?>",
              "message": "Setelah root dibuat, panggil `.render()` dengan elemen `<App />` di dalamnya. Perhatikan huruf A besar: nama berhuruf kecil dianggap tag HTML biasa oleh JSX."
            }
          ],
          "solution": "ReactDOM.createRoot(document.getElementById('root')!).render(<App />);",
          susunKode: {
            question:
              "Buat root dengan createRoot dan render <App />.",
            potongan: [
              "ReactDOM.createRoot(",
              "document.getElementById('root')!",
              ").render(<App />);",
            ],
            pengecoh: [
              "ReactDOM.render(",
              "document.querySelector('body')",
            ],
            pemisah: "",
            explanation:
              "Sejak React 18, pembuatan root dilakukan via `ReactDOM.createRoot` untuk mendukung fitur concurrent rendering. Pengecoh `ReactDOM.render` menggoda karena merupakan sintaks lama React 17 yang sudah deprecated. Pengecoh `querySelector('body')` juga jebakan karena kontainer utama React harus ditargetkan ke elemen `#root`.",
          },
        },
        {
          "kind": "step",
          "id": "react-0-4",
          "title": "Komponen Pertama yang Terlihat di React DevTools",
          "explanation": "React Developer Tools adalah ekstensi browser (Chrome/Firefox) yang menambahkan tab **Components** dan **Profiler** ke DevTools, sehingga kamu bisa melihat hierarki komponen beserta props dan state-nya tanpa menabur `console.log`. Supaya ada yang bisa diinspeksi, proyek barumu butuh komponen sendiri: berkas `src/App.tsx` hasil scaffolding Vite masih berisi contoh bawaan (logo, counter) dan biasanya langsung diganti. Aturannya di React: nama komponen wajib diawali huruf besar — `app` (huruf kecil) akan dianggap tag HTML biasa dan tidak muncul sebagai komponen di DevTools. Jebakan yang paling sering: pemula membuka tab **Elements** bawaan browser (yang hanya menampilkan hasil akhir berupa HTML) lalu menyimpulkan DevTools React tidak bekerja — padahal tab Components memang tab terpisah, dan ia hanya muncul di halaman yang benar-benar memakai React.",
          "example": {
            "code": "// src/Footer.tsx\nexport default function Footer() {\n  return <p>© 2026 BiLearn</p>;\n}",
            "output": "Halaman menampilkan: © 2026 BiLearn\n\nTab Components di React DevTools:\n<Footer>\n  <p>",
            "note": "Yang terlihat di tab Elements hanya <p>© 2026 BiLearn</p> — nama komponennya hilang, karena browser tidak tahu apa itu komponen. Nama <Footer> hanya terbaca di tab Components."
          },
          "instruction": "Isi `src/App.tsx` masih berupa contoh bawaan Vite. Tulis ulang berkas itu: satu komponen bernama `App` yang diekspor sebagai default export dan menampilkan tulisan `BiLearn` di dalam elemen `h1`. Setelah ini, `<App>` adalah simpul teratas yang akan kamu lihat di tab Components.",
          "starterCode": "// src/App.tsx — tulis ulang isinya di bawah\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "export\\s+default\\s+function\\s+App\\s*\\(|function\\s+App\\s*\\([\\s\\S]*export\\s+default\\s+App",
              "message": "Belum ada komponen `App` yang diekspor sebagai default. Tulis `export default function App() { ... }` — huruf A harus besar, kalau tidak React menganggapnya tag HTML."
            },
            {
              "pattern": "<h1[^>]*>\\s*BiLearn\\s*</h1>",
              "message": "Kembalikan `<h1>BiLearn</h1>` dari komponen App. Pastikan tag penutup `</h1>` ada — JSX menolak tag yang tidak ditutup."
            }
          ],
          "solution": "export default function App() {\n  return <h1>BiLearn</h1>;\n}",
          susunKode: {
            potongan: [
              "export default function App() {",
              "  return <h1>BiLearn</h1>;",
              "}",
            ],
            pengecoh: [
              "export function app() {",
              "  return <div>BiLearn</div>;",
            ],
            pemisah: "\n",
            explanation:
              "Komponen utama React diawali huruf besar `App` dan diekspor via `export default`. Pengecoh `app()` dengan huruf kecil menggoda tetapi keliru karena JSX menganggap huruf kecil sebagai tag HTML biasa. Pengecoh `<div>BiLearn</div>` adalah jebakan elemen yang menyimpang dari tag `<h1>` yang diminta.",
          },
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
              "message": "Perintah npm menjalankan skrip yang terdaftar di `package.json` dengan pola `npm run <nama-skrip>`. Nama skrip untuk membangun versi produksi adalah yang sama dengan istilahnya dalam bahasa Inggris — hasilnya masuk ke folder `dist/`, bukan langsung ditayangkan."
            }
          ],
          "solution": "npm run build",
          susunKode: {
            question:
              "Tulis perintah skrip npm untuk build produksi.",
            potongan: [
              "npm run",
              "build",
            ],
            pengecoh: [
              "npm start",
              "compile",
            ],
            pemisah: " ",
            explanation:
              "Perintah `npm run build` mengompilasi bundel aplikasi React untuk lingkungan produksi di folder dist. Pengecoh `npm start` menggoda pengguna CRA tetapi keliru di Vite yang menggunakan skrip dev dan build. Pengecoh `compile` adalah jebakan nama skrip yang tidak didaftarkan secara standar di package.json.",
          },
        },
        {
          "kind": "step",
          "id": "react-0-6",
          "title": "CRA vs Vite: Konfigurasi yang Terlihat",
          "explanation": "Create React App (CRA) sudah tidak dipelihara lagi oleh tim React, dan penggantinya untuk aplikasi satu halaman adalah **Vite**. Perbedaan yang paling terasa sehari-hari bukan cuma kecepatan: CRA menyembunyikan konfigurasi di dalam `react-scripts` (mengubahnya berarti `eject` yang sulit dibatalkan), sedangkan Vite meletakkannya di satu berkas kecil `vite.config.ts` yang boleh kamu baca dan ubah. Di berkas itulah plugin React dipasang, dan **plugin itulah yang membuat sintaks JSX bisa dipahami** — tanpanya, `npm run dev` gagal dengan pesan seperti `Failed to parse source ... expected \">\" but found \"className\"`. Kamu memerlukannya sekali per proyek, biasanya sudah dibuatkan oleh scaffolding, dan perlu kamu sentuh lagi saat menambahkan alias path atau proxy API. Jebakan terbesarnya adalah mengikuti tutorial lama yang menyuruh `npx create-react-app`: proyeknya masih jalan, tapi kamu mulai dari perkakas yang sudah pensiun.",
          "example": {
            "code": "// vite.config.ts — versi yang sedikit lebih panjang\nimport { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n  server: { port: 3000 },   // ganti port default 5173\n});",
            "output": "$ npm run dev\n\n  VITE v6.0.5  ready in 312 ms\n\n  ➜  Local:   http://localhost:3000/\n  ➜  Network: use --host to expose\n  ➜  press h + enter to show help",
            "note": "Angka \"ready in 312 ms\" itu keluaran nyata Vite, dan sengaja ditampilkan supaya kamu tahu bentuk aslinya. Kalau port 5173 atau 3000 sudah dipakai program lain, Vite otomatis naik ke port berikutnya dan menyebutkannya di baris Local."
          },
          "instruction": "Proyek `bipack-app` kehilangan berkas konfigurasinya, sehingga `npm run dev` menolak sintaks JSX. Tulis isi minimum `vite.config.ts`: impor helper konfigurasi dari `vite` dan plugin React dari `@vitejs/plugin-react`, lalu ekspor konfigurasi yang mendaftarkan plugin itu. Cukup plugin-nya saja, tanpa opsi lain.",
          "starterCode": "// vite.config.ts\n// Tulis konfigurasi minimum di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s*\\{\\s*defineConfig\\s*\\}\\s*from\\s*['\"]vite['\"]",
              "message": "Impor `defineConfig` dari paket `vite` — fungsi ini yang memberi autocomplete dan pemeriksaan tipe pada konfigurasimu."
            },
            {
              "pattern": "import\\s+\\w+\\s+from\\s*['\"]@vitejs/plugin-react['\"]",
              "message": "Impor plugin React sebagai default import dari `@vitejs/plugin-react`. Tanpa plugin ini Vite tidak mengerti JSX."
            },
            {
              "pattern": "export\\s+default\\s+defineConfig\\s*\\(\\s*\\{[\\s\\S]*plugins\\s*:\\s*\\[\\s*\\w+\\s*\\(\\s*\\)",
              "message": "Ekspor default hasil `defineConfig({ plugins: [react()] })`. Perhatikan `react()` dipanggil (pakai tanda kurung), bukan hanya disebut namanya."
            }
          ],
          "solution": "import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n});",
          susunKode: {
            question:
              "Tulis isi vite.config.ts dengan plugin react().",
            potongan: [
              "import { defineConfig } from 'vite';",
              "import react from '@vitejs/plugin-react';\n",
              "export default defineConfig({",
              "  plugins: [react()],",
              "});",
            ],
            pengecoh: [
              "import react from 'react';",
              "  plugins: [react],",
            ],
            pemisah: "\n",
            explanation:
              "Konfigurasi Vite membutuhkan plugin `@vitejs/plugin-react` yang dipanggil sebagai fungsi `react()`. Pengecoh `import react from 'react'` menggoda karena nama paketnya mirip, tetapi keliru karena itu library React utama. Pengecoh `plugins: [react]` tanpa kurung `()` adalah jebakan sering lupa memanggil fungsi plugin.",
          },
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
              "message": "Buat sebuah fungsi bernama `Judul` yang MENGEMBALIKAN elemen `<h1>` berisi teks yang diminta. Inti latihannya: kamu tidak memerintahkan browser mengubah apa pun — kamu hanya mendeskripsikan hasil akhirnya, dan React yang mengurus sisanya."
            },
            {
              "pattern": "document\\.",
              "mustNotMatch": true,
              "message": "Di React kamu tidak perlu memakai document — cukup kembalikan JSX-nya."
            }
          ],
          "solution": "function Judul() {\n  return <h1>Dashboard</h1>;\n}",
          susunKode: {
            potongan: [
              "function Judul() {",
              "  return <h1>Dashboard</h1>;",
              "}",
            ],
            pengecoh: [
              "function RenderJudul() {",
              "  return <h2>Dashboard</h2>;",
            ],
            pemisah: "\n",
            explanation:
              "Komponen React mengembalikan JSX secara deklaratif tanpa manipulasi `document` langsung. Pengecoh `RenderJudul()` menggoda tetapi keliru karena menyimpang dari nama komponen Judul. Pengecoh `<h2>` adalah jebakan elemen HTML yang tidak sesuai dengan instruksi tag <h1>.",
          },
        },
        {
          "kind": "step",
          "id": "react-1-2",
          "title": "Komponen = Fungsi Mengembalikan JSX",
          "explanation": "Komponen React adalah fungsi JavaScript murni yang mengembalikan deskripsi antarmuka berbentuk JSX. Nama fungsi komponen wajib diawali dengan huruf kapital (PascalCase) agar React dapat membedakannya dari tag HTML bawaan browser seperti `<div>` atau `<button>`. Fitur ini mempermudah kita memecah tampilan antarmuka menjadi bagian-bagian kecil yang terisolasi dan dapat digunakan kembali. Jebakan umum bagi pemula adalah lupa menyertakan kata kunci `return` saat membuat fungsi komponen multi-baris.",
          "example": {
            "code": "function Header() {\n  return <header className=\"navbar\">Selamat Datang</header>;\n}",
            "output": "HTML yang dihasilkan di halaman:\n<header class=\"navbar\">Selamat Datang</header>",
            "note": "Perhatikan `className` (bukan `class`) dan huruf H besar pada `Header`. Menulis `function header()` membuat JSX mencarinya sebagai tag HTML bernama <header> — komponenmu tidak pernah dipanggil."
          },
          "instruction": "Halaman butuh satu tombol yang bisa dipakai ulang. Buat komponen bernama `Button` yang mengembalikan sebuah elemen tombol bertuliskan `Klik Saya`, dan beri elemen itu kelas CSS `btn` (ingat: di JSX atribut kelas ditulis berbeda dari HTML).",
          "starterCode": "// Tulis komponen Button di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "(function\\s+Button\\s*\\(|const\\s+Button\\s*=)",
              "message": "Belum ada komponen bernama `Button`. Dua bentuk diterima: `function Button() {...}` atau `const Button = () => ...`. Yang wajib: huruf B besar, karena JSX menganggap nama berhuruf kecil sebagai tag HTML bawaan."
            },
            {
              "pattern": "<button\\s+className\\s*=\\s*[\"']btn[\"']\\s*>\\s*Klik Saya\\s*</button>",
              "message": "Kelas CSS di JSX ditulis `className` — kata `class` sudah dipakai JavaScript untuk mendeklarasikan kelas, jadi React memakai nama properti DOM-nya. Isi tombolnya ditulis di antara tag pembuka dan penutup."
            },
            {
              "pattern": "return\\s*[\\(<]",
              "message": "Komponen harus MENGEMBALIKAN JSX-nya dengan `return` (boleh dibungkus tanda kurung untuk penulisan multi-baris). Fungsi yang tidak mengembalikan apa pun merender kosong — tanpa pesan error apa pun."
            }
          ],
          "solution": "function Button() {\n  return <button className=\"btn\">Klik Saya</button>;\n}",
          susunKode: {
            potongan: [
          "function Button() {\n  ",
          "return <button ",
          "className=\"btn\">Klik Saya</button>;\n}"
],
            pengecoh: [
          "const Btn = () => {\n  ",
          "class=\"btn\">Klik Saya</button>;\n}"
],
            pemisah: "",
            explanation:
              "Di JSX, atribut kelas CSS ditulis `className` karena `class` adalah kata kunci reserved JavaScript. Pengecoh `class=\"btn\"` sangat menggoda pengembang dari HTML murni tetapi keliru di React. Pengecoh `console.log` juga jebakan fungsi yang tidak menggunakan perintah return JSX.",
          },
        },
        {
          "kind": "step",
          "id": "react-1-3",
          "title": "Aturan JSX: Satu Root & Ekspresi {}",
          "explanation": "JSX mewajibkan seluruh elemen yang dikembalikan dibungkus dalam tepat satu elemen root utama atau Fragment (`<>...</>`). Karakteristik ini disebabkan karena fungsi JavaScript biasa tidak dapat mengembalikan dua nilai objek terpisah secara bersamaan tanpa pembungkus. Selain itu, atribut `class` di HTML ditulis sebagai `className` di JSX untuk menghindari bentrokan dengan kata kunci kelas JavaScript, dan variabel JS disematkan menggunakan kurung kurawal `{}`. Jebakan yang sering ditemui adalah lupa menutup tag tunggal seperti `<img />` atau `<input />` yang memicu error kompilasi.",
          "example": {
            "code": "function Card() {\n  const produk = \"Laptop\";\n  return (\n    <div className=\"card\">\n      <h2>{produk}</h2>\n    </div>\n  );\n}",
            "output": "HTML yang dihasilkan:\n<div class=\"card\">\n  <h2>Laptop</h2>\n</div>",
            "note": "Gunakan <>...</> (Fragment) jika tidak ingin menambah elemen div ekstra di HTML."
          },
          "instruction": "Buat komponen `Title`. Di dalamnya, simpan teks `BiLearn` pada sebuah variabel bernama `judul`, lalu tampilkan ISI variabel itu di dalam elemen `<h1>` — bukan menulis teksnya langsung di JSX.",
          "starterCode": "// Tulis komponen Title di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+judul\\s*=\\s*['\"]BiLearn['\"]",
              "message": "Simpan dulu teksnya ke sebuah variabel bernama `judul`. Tujuan latihan ini bukan menampilkan teks, tapi membuktikan bahwa JSX bisa membaca nilai dari JavaScript."
            },
            {
              "pattern": "<h1>\\s*\\{\\s*judul\\s*\\}\\s*</h1>",
              "message": "Sisipkan variabelnya ke dalam JSX memakai kurung kurawal. Menulis `<h1>judul</h1>` tanpa kurawal menampilkan kata \"judul\" apa adanya — kesalahan yang sangat sering terjadi di hari-hari pertama memakai JSX."
            }
          ],
          "solution": "function Title() {\n  const judul = \"BiLearn\";\n  return <h1>{judul}</h1>;\n}",
          susunKode: {
            potongan: [
              "function Title() {",
              "  const judul = \"BiLearn\";",
              "  return <h1>{judul}</h1>;",
              "}",
            ],
            pengecoh: [
              "  return <h1>judul</h1>;",
              "  return <h1>\"${judul}\"</h1>;",
            ],
            pemisah: "\n",
            explanation:
              "Ekspresi variabel JS disisipkan ke JSX menggunakan kurung kurawal `{judul}`. Pengecoh `<h1>judul</h1>` menggoda pemula tetapi hanya akan menampilkan kata 'judul' secara harfiah di layar. Pengecoh `\"${judul}\"` juga jebakan pencampuran sintaks template literal JS yang tidak berlaku di JSX.",
          },
        },
        {
          "kind": "step",
          "id": "react-1-4",
          "title": "Render Kondisional: &&, Ternary, Early Return",
          "explanation": "Render kondisional memungkinkan kita menampilkan atau menyembunyikan komponen antarmuka berdasarkan kondisi logika data tertentu. Kamu dapat menggunakan operator ternary (`kondisi ? <KomponenA /> : <KomponenB />`) untuk dua cabang kondisi, atau operator boolean `&&` untuk kondisi tunggal. Teknik ini sangat vital untuk menampilkan indikator loading, status login pengguna, atau pesan kesalahan. Jebakan klasik pada operator `&&` adalah jika variabel di sebelah kiri bernilai angka `0`, React akan merender angka `0` tersebut ke layar alih-alih menyembunyikannya.",
          "example": {
            "code": "const isOnline = true;\n\nfunction Status() {\n  // dua cabang: pakai ternary\n  return <div>{isOnline ? \"Online\" : \"Offline\"}</div>;\n}",
            "output": "isOnline = true  →  <div>Online</div>\nisOnline = false →  <div>Offline</div>",
            "note": "Ternary dipakai kalau ada dua kemungkinan tampilan. Untuk \"tampil atau tidak tampil sama sekali\", `kondisi && <Elemen />` lebih ringkas — dan itu yang kamu latih di tugas ini."
          },
          "instruction": "Komponen `Navbar` di editor sudah punya variabel `isLoggedIn`. Ganti komentar di dalam `<nav>` sehingga tombol bertuliskan `Logout` muncul HANYA ketika `isLoggedIn` bernilai true — pakai bentuk paling ringkas untuk kondisi tanpa cabang else.",
          "starterCode": "function Navbar() {\n  const isLoggedIn = true;\n\n  return (\n    <nav>\n      <span>BiLearn</span>\n      {/* tampilkan tombol Logout di sini, hanya kalau isLoggedIn true */}\n    </nav>\n  );\n}\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "\\{\\s*isLoggedIn\\s*&&",
              "message": "Bentuk paling ringkas untuk \"tampilkan kalau benar\" adalah operator DAN logika di dalam kurung kurawal JSX. Jebakan yang wajib kamu tahu: kalau kondisinya berupa angka, `0 && ...` justru mencetak angka 0 ke layar — untuk itu pakai `count > 0 &&`."
            },
            {
              "pattern": "<button>\\s*Logout\\s*</button>",
              "message": "Elemen yang muncul secara kondisional ditulis setelah operatornya. Pastikan tombolnya ditutup dengan `</button>`."
            }
          ],
          "solution": "function Navbar() {\n  const isLoggedIn = true;\n\n  return (\n    <nav>\n      <span>BiLearn</span>\n      {isLoggedIn && <button>Logout</button>}\n    </nav>\n  );\n}",
          susunKode: {
            question:
              "Tampilkan button Logout jika isLoggedIn bernilai true.",
            potongan: [
              "function Navbar() {",
              "  const isLoggedIn = true;",
              "  return (",
              "    <nav>",
              "      <span>BiLearn</span>",
              "      {isLoggedIn && <button>Logout</button>}",
              "    </nav>",
              "  );",
              "}",
            ],
            pengecoh: [
              "      {isLoggedIn ? <button>Logout</button>}",
              "      if (isLoggedIn) <button>Logout</button>",
            ],
            pemisah: "\n",
            explanation:
              "Render kondisional tanpa cabang else paling ringkas menggunakan operator DAN logika `{isLoggedIn && <button>Logout</button>}`. Pengecoh ternary tanpa pasangan `: null` menggoda tetapi keliru secara sintaks JSX. Pengecoh `if` di dalam JSX juga jebakan karena statement `if` tidak bisa dimasukkan di ekspresi JSX.",
          },
        },
        {
          "kind": "step",
          "id": "react-1-5",
          "title": "Render List dengan map & Key",
          "explanation": "Daftar data array dirender ke dalam struktur JSX dengan memanfaatkan fungsi bawaan JavaScript `array.map()`. Setiap elemen list yang dihasilkan oleh fungsi map wajib diberi prop `key` dengan nilai identitas unik (seperti ID dari database). Prop `key` ini membantu Virtual DOM React melacak item mana yang ditambah, diubah, atau dihapus secara presisi tanpa merender ulang seluruh isi daftar. Jebakan paling berisiko adalah menggunakan `index` array sebagai key pada daftar yang dapat dihapus atau diurutkan ulang.",
          "example": {
            "code": "const buah = [\n  { id: 7, nama: \"Apel\" },\n  { id: 9, nama: \"Jeruk\" },\n];\n\nfunction DaftarBuah() {\n  return (\n    <ul>\n      {/* ✅ key dari id yang stabil, bukan dari urutan */}\n      {buah.map((b) => (\n        <li key={b.id}>{b.nama}</li>\n      ))}\n    </ul>\n  );\n}",
            "output": "HTML yang dihasilkan:\n<ul>\n  <li>Apel</li>\n  <li>Jeruk</li>\n</ul>\n\n(atribut key tidak ikut muncul di HTML — key hanya dipakai React di memori)",
            "note": "`key` tidak pernah muncul di HTML hasil. Kalau daftarnya bisa dihapus atau diurutkan ulang, `key={index}` membuat React salah mencocokkan baris: yang terhapus item ke-2, yang hilang dari layar bisa item ke-3, dan isi input di dalam baris ikut tertukar."
          },
          "instruction": "Buat komponen `Menu` yang menampilkan daftar hobi sebagai `<ul>`. Simpan datanya di sebuah array bernama `hobi` berisi `Koding` dan `Membaca`, lalu ubah setiap isinya menjadi elemen `<li>`. Jangan lupa properti yang diminta React untuk setiap item daftar.",
          "starterCode": "// Tulis komponen Menu di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "hobi\\.map",
              "message": "Daftar di JSX dibuat dengan mengubah array menjadi array elemen — `.map()` adalah metode yang melakukannya. `.forEach()` tidak bisa dipakai di sini karena ia tidak mengembalikan apa pun."
            },
            {
              "pattern": "key=",
              "message": "Setiap elemen hasil `.map()` butuh properti `key`. Tanpa itu React memberi peringatan di konsol dan kehilangan cara melacak baris mana yang berubah. Untuk daftar teks tetap seperti ini `key={index}` masih boleh; begitu daftarnya bisa dihapus atau diurutkan, wajib memakai id yang stabil."
            }
          ],
          "solution": "function Menu() {\n  const hobi = [\"Koding\", \"Membaca\"];\n  return (\n    <ul>\n      {hobi.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}",
          susunKode: {
            question:
              "Render daftar hobi menggunakan .map() dan key.",
            potongan: [
              "function Menu() {",
              "  const hobi = [\"Koding\", \"Membaca\"];",
              "  return (",
              "    <ul>",
              "      {hobi.map((item, index) => (",
              "        <li key={index}>{item}</li>",
              "      ))}",
              "    </ul>",
              "  );",
              "}",
            ],
            pengecoh: [
              "      {hobi.forEach((item) => (",
              "        <li>{item}</li>",
            ],
            pemisah: "\n",
            explanation:
              "Metode `.map()` mengembalikan array elemen JSX dan setiap item wajib memiliki prop `key`. Pengecoh `.forEach()` menggoda tetapi keliru karena `.forEach()` mengembalikan `undefined` sehingga daftar tidak tampil. Pengecoh `<li>` tanpa `key` juga jebakan melupakan prop penjejak perubahan React.",
          },
        },
        {
          "kind": "step",
          "id": "react-1-6",
          "title": "Menambahkan Berkas Komponen ke Proyek Vite",
          "explanation": "Proyek Vite hasil scaffolding hanya berisi `App.tsx`; komponen berikutnya kamu buat sebagai berkas sendiri lalu diimpor. Jalur impor bersifat **relatif** terhadap berkas yang mengimpor: `./components/Header` berarti folder `components` yang sejajar dengan `App.tsx`. Vite melengkapi ekstensi `.tsx` sendiri, jadi ekstensi boleh tidak ditulis — tapi nama berkasnya harus persis, termasuk huruf besar-kecilnya. Ini jebakan yang paling sering menghantui pemula justru saat deploy: macOS dan Windows memperlakukan `header.tsx` dan `Header.tsx` sebagai berkas yang sama, sedangkan server Linux tempat aplikasimu di-deploy tidak — jadi proyek yang jalan mulus di laptop bisa gagal build di Vercel dengan pesan `Could not resolve`. Jebakan kedua: lupa `export default` di berkas komponennya, sehingga yang terimpor `undefined` dan React melempar error tentang tipe elemen yang tidak valid.",
          "example": {
            "code": "// src/components/Footer.tsx\nexport default function Footer() {\n  return <footer>© 2026 BiLearn</footer>;\n}\n\n// src/App.tsx\nimport Footer from './components/Footer';\n\nexport default function App() {\n  return (\n    <div>\n      <h1>Beranda</h1>\n      <Footer />\n    </div>\n  );\n}",
            "output": "Halaman menampilkan:\nBeranda\n© 2026 BiLearn\n\nStruktur berkasnya:\nsrc/\n├── App.tsx\n└── components/\n    └── Footer.tsx",
            "note": "Nama pada `import Footer from ...` bebas kamu tentukan karena berkasnya memakai `export default` — tapi menyamakannya dengan nama komponen adalah konvensi yang dipatuhi semua tim. Catatan jujur: panel preview tidak mengompilasi banyak berkas, jadi hasil impor lintas berkas tidak akan terlihat di sini; tesnya tetap bisa lulus."
          },
          "instruction": "Komponen `Header` sudah ditulis di berkas `src/components/Header.tsx` dengan `export default`. Di `src/App.tsx`, impor komponen itu lalu tampilkan sekali di dalam elemen `<main>`. Jangan mengubah nama komponennya.",
          "starterCode": "// src/App.tsx\n// impor komponen Header di bawah ini\n\nexport default function App() {\n  return (\n    <main>\n    </main>\n  );\n}\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "import\\s+Header\\s+from\\s*['\"]\\.\\/components\\/Header(\\.tsx)?['\"]",
              "message": "Impor default ditulis `import Header from '<jalur>'`. Jalurnya relatif dari `App.tsx`, jadi diawali `./` lalu `components/Header` — ekstensi `.tsx` boleh ditulis atau tidak."
            },
            {
              "pattern": "<main>[\\s\\S]*<Header\\s*/>[\\s\\S]*</main>",
              "message": "Tampilkan `<Header />` DI DALAM `<main>`. Komponen tanpa anak ditulis sebagai tag menutup-sendiri (`<Header />`) — lupa garis miringnya membuat JSX menganggap sisa berkasmu sebagai isi Header."
            }
          ],
          "solution": "// src/App.tsx\nimport Header from './components/Header';\n\nexport default function App() {\n  return (\n    <main>\n      <Header />\n    </main>\n  );\n}",
          susunKode: {
            question:
              "Impor Header dari ./components/Header dan render di <main>.",
            potongan: [
              "import Header from './components/Header';",
              "export default function App() {",
              "  return (",
              "    <main>",
              "      <Header />",
              "    </main>",
              "  );",
              "}",
            ],
            pengecoh: [
              "import { Header } from './components/Header';",
              "      <Header></Header>",
            ],
            pemisah: "\n",
            explanation:
              "Impor komponen default ditulis `import Header from './components/Header'` dan dipanggil sebagai tag menutup-sendiri `<Header />`. Pengecoh `{ Header }` menggoda jika keliru tertukar dengan named import. Pengecoh `<Header>` tanpa penutup garis miring juga jebakan sintaks JSX.",
          },
        },
        {
          "kind": "step",
          "id": "react-1-7",
          "title": "Struktur File Komponen yang Rapi",
          "explanation": "Mengisolasi setiap komponen ke dalam berkasnya sendiri di folder `src/components/` adalah praktik arsitektur terbaik dalam pengembangan React. Komponen diekspor menggunakan `export default` atau named export agar dapat di-import dengan rapi di bagian aplikasi lain. Pola ini menjaga agar kode proyek tetap bersih, terorganisir, serta mempermudah pencarian file saat aplikasi tumbuh menjadi sangat besar. Jebakan umum adalah mencampur belasan komponen berbeda ke dalam satu file `App.tsx` raksasa.",
          "example": {
            "code": "// src/components/Button.tsx\nexport default function Button() { return <button>OK</button>; }",
            "output": "Isi berkas src/components/Button.tsx:\nexport default function Button() { return <button>OK</button>; }\n\nCara memakainya dari berkas lain:\nimport Button from './components/Button';\n// lalu <Button /> di dalam JSX",
            "note": "Gunakan export default atau named export secara konsisten di tim."
          },
          "instruction": "Kamu membuat berkas baru `src/components/Card.tsx`. Tulis satu komponen bernama `Card` yang mengembalikan sebuah `<div>` bertuliskan `Card`, dan ekspor komponen itu sebagai ekspor utama berkasnya supaya bisa diimpor dari berkas lain.",
          "starterCode": "// Tulis export default di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "export\\s+default\\s+function\\s+Card|function\\s+Card[\\s\\S]*export\\s+default\\s+Card",
              "message": "Satu berkas komponen mengekspor satu komponen utama sebagai default export. Dua bentuk diterima: `export default function Card()`, atau deklarasi biasa lalu `export default Card;` di bawahnya."
            },
            {
              "pattern": "<div>\\s*Card\\s*</div>",
              "message": "Komponen wajib mengembalikan JSX. Kembalikan sebuah `<div>` berisi teks yang diminta — komponen yang tidak mengembalikan apa pun akan merender kosong tanpa pesan error."
            },
            {
              "pattern": "Card\\s*\\(",
              "message": "Nama komponen diawali huruf BESAR. JSX memperlakukan nama berhuruf kecil sebagai tag HTML bawaan, jadi `card` tidak akan pernah merender komponenmu."
            }
          ],
          "solution": "export default function Card() { return <div>Card</div>; }",
          susunKode: {
            question:
              "Buat komponen Card dan ekspor secara default.",
            potongan: [
              "export default function Card() {",
              "  return <div>Card</div>;",
              "}",
            ],
            pengecoh: [
              "export function CardComponent() {",
              "  return <section>Card</section>;",
            ],
            pemisah: "\n",
            explanation:
              "Nama komponen React wajib diawali huruf kapital `Card` dan diekspor via `export default`. Pengecoh `export function` tanpa `default` menggoda tetapi keliru karena instruksi meminta export default. Pengecoh `<section>` juga jebakan elemen root.",
          },
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
            "note": "Props bersifat Read-Only: menulis `name = \"Budi\"` di dalam `UserCard` tidak mengubah apa pun di induknya, dan di mode strict TypeScript malah ditolak. Catatan jujur soal panel preview: komponen ini butuh props dari luar, sedangkan preview merender komponenmu tanpa props — jadi yang muncul `<h3>` kosong atau pesan bahwa potongan ini butuh sesuatu dari luar. Tesnya tetap bisa lulus."
          },
          "instruction": "Komponen `Badge` dipakai untuk menampilkan label kecil, misalnya `Baru` atau `Diskon`. Tulis tipe props-nya dengan nama `BadgeProps` — satu properti bertipe teks bernama `text` — lalu buat komponen `Badge` yang membongkar properti itu langsung di parameternya dan menampilkannya di dalam `<span>`.",
          "starterCode": "// Tulis BadgeProps dan komponen Badge di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "interface\\s+BadgeProps\\s*\\{\\s*text\\s*:\\s*string\\s*;?\\s*\\}",
              "message": "Bentuk props dideklarasikan lebih dulu sebagai `interface BadgeProps` (atau `type`) dengan satu properti `text: string`. Ini yang membuat editor menolak `<Badge tex=\"x\" />` — salah tulis nama props tertangkap sebelum aplikasi dijalankan."
            },
            {
              "pattern": "(function\\s+Badge\\s*\\(|const\\s+Badge\\s*=\\s*\\(?)\\s*\\{\\s*text\\s*\\}\\s*:\\s*BadgeProps\\s*\\)?",
              "message": "Bongkar props langsung di parameternya (`{ text }`) lalu beri anotasi tipe di belakangnya. Menulis `function Badge(props: BadgeProps)` juga benar di dunia nyata, tapi latihan ini melatih pola destructuring yang paling umum dipakai di codebase React."
            }
          ],
          "solution": "interface BadgeProps {\n  text: string;\n}\n\nfunction Badge({ text }: BadgeProps) {\n  return <span>{text}</span>;\n}",
          susunKode: {
            question:
              "Buat interface BadgeProps dan komponen Badge({ text }).",
            potongan: [
              "interface BadgeProps {\n  text: string;\n}\n",
              "function Badge({ text }: BadgeProps) {",
              "  return <span>{text}</span>;",
              "}",
            ],
            pengecoh: [
              "type BadgeProps = { text: string };\n",
              "function Badge(props: BadgeProps) {",
            ],
            pemisah: "\n",
            explanation:
              "Props dideklarasikan lewat `interface BadgeProps` dan dibongkar dengan pola destructuring `{ text }: BadgeProps`. Pengecoh `type` menggoda tetapi keliru di latihan ini yang mensyaratkan kata kunci `interface`. Pengecoh `props: BadgeProps` tanpa destructuring juga jebakan melanggar instruksi destructuring parameter.",
          },
        },
        {
          "kind": "step",
          "id": "react-2-2",
          "title": "children — Komponen Pembungkus",
          "explanation": "Prop spesial `children` adalah fitur bawaan React yang secara otomatis menangkap elemen JSX apapun yang disematkan di antara tag pembuka dan tag penutup komponen (`<Card><p>Konten</p></Card>`). Fitur ini memungkinkan pembuatan komponen kontainer pembungkus yang fleksibel tanpa perlu tahu elemen apa yang akan dimasukkan ke dalamnya. Dalam TypeScript, tipe data untuk prop `children` umumnya diketik sebagai `React.ReactNode`. Jebakan bagi pemula adalah lupa mengekspor atau lupa mengetikkan `children` pada interface props.",
          "example": {
            "code": "interface ModalProps { children: React.ReactNode; }\nfunction Modal({ children }: ModalProps) {\n  return <div className=\"modal\">{children}</div>;\n}",
            "output": "Pemakaian:\n<Modal><p>Isi Modal</p></Modal>\n\nHTML yang dihasilkan:\n<div class=\"modal\">\n  <p>Isi Modal</p>\n</div>",
            "note": "`React.ReactNode` adalah tipe paling longgar untuk isi JSX: teks, angka, elemen, array elemen, bahkan `null`. Catatan jujur: preview merender komponenmu tanpa children, jadi panelnya tampak kosong — tesnya tetap bisa lulus."
          },
          "instruction": "Buat komponen pembungkus `Card` yang bisa diisi apa saja: `<Card><p>Halo</p></Card>`. Tulis tipe props-nya bernama `CardProps` dengan properti khusus yang menampung isi di antara tag pembuka dan penutup, beri tipe paling longgar untuk isi JSX, lalu tampilkan isi itu di dalam sebuah `<div>`.",
          "starterCode": "// Tulis CardProps dan komponen Card di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "interface\\s+CardProps\\s*\\{\\s*children\\s*:\\s*React\\.ReactNode\\s*;?\\s*\\}",
              "message": "Isi antar-tag masuk ke props bernama `children`, dan tipenya `React.ReactNode`. Memberi tipe `string` membuat `<Card><p>Halo</p></Card>` ditolak TypeScript, padahal itu pemakaian yang paling umum."
            }
          ],
          "solution": "interface CardProps {\n  children: React.ReactNode;\n}\n\nfunction Card({ children }: CardProps) {\n  return <div>{children}</div>;\n}",
          susunKode: {
            question:
              "Buat interface CardProps dengan children: React.ReactNode.",
            potongan: [
              "interface CardProps {\n  children: React.ReactNode;\n}\n",
              "function Card({ children }: CardProps) {",
              "  return <div>{children}</div>;",
              "}",
            ],
            pengecoh: [
              "interface CardProps {\n  children: string;\n}\n",
              "interface CardProps {\n  children: JSX.Element;\n}\n",
            ],
            pemisah: "\n",
            explanation:
              "Tipe bawaan untuk isi pembungkus komponen adalah `children: React.ReactNode`. Pengecoh `children: string` menggoda tetapi keliru karena membatasi isi hanya pada teks. Pengecoh `JSX.Element` juga jebakan yang menolak teks polos atau multiple children di React.",
          },
        },
        {
          "kind": "step",
          "id": "react-2-3",
          "title": "Komposisi vs Konfigurasi",
          "explanation": "Komposisi komponen adalah teknik merakit UI dari bagian-bagian komponen kecil fleksibel seperti menyusun blok LEGO, daripada membuat satu komponen raksasa dengan puluhan props konfigurasi. Pola komposisi membuat komponen lebih mudah diuji, fleksibel untuk perubahan desain di masa depan, dan mencegah kerumitan passing props yang tidak perlu. Teknik ini merupakan fondasi utama saat membangun sistem desain (Design System) aplikasi. Jebakan umum adalah memaksakan satu komponen menangani terlalu banyak variasi tampilan sekaligus via atribut boolean.",
          "example": {
            "code": "// ❌ konfigurasi: setiap variasi baru menambah props\n<Card title=\"Kopi\" subtitle=\"Gayo\" showFooter={true} footerText=\"Beli\" />\n\n// ✅ komposisi: isi ditentukan pemakainya\n<Card>\n  <CardHeader>Kopi Gayo</CardHeader>\n  <CardBody>Stok 12</CardBody>\n</Card>",
            "output": "HTML dari versi komposisi:\n<div class=\"card\">\n  <h3>Kopi Gayo</h3>\n  <p>Stok 12</p>\n</div>",
            "note": "Keduanya menghasilkan tampilan serupa. Bedanya muncul saat desainer minta tambahan gambar di tengah kartu: versi komposisi tidak perlu diubah sama sekali, versi konfigurasi butuh props baru lagi. Catatan jujur: potongan ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — tesnya tetap bisa lulus."
          },
          "instruction": "Buatlah elemen JSX di mana komponen `<Card>` membungkus komponen `<Header />` di dalamnya.",
          "starterCode": "// Tulis elemen JSX di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<Card>[\\s\\S]*</Card>",
              "message": "Komponen yang membungkus komponen lain ditulis dengan tag pembuka dan penutup, bukan tag menutup-sendiri. Isinya diterima `Card` lewat props `children`."
            },
            {
              "pattern": "<Card>\\s*<Header\\s*/>\\s*</Card>",
              "message": "Letakkan `<Header />` di ANTARA tag pembuka dan penutup `Card`. Kalau ditulis sebagai props (`<Card header={...} />`), itu pola konfigurasi — bukan komposisi, dan tidak fleksibel saat isinya bertambah."
            }
          ],
          "solution": "<Card><Header /></Card>",
          susunKode: {
            question:
              "Bungkus <Header /> di dalam <Card>.",
            potongan: [
              "<Card>",
              "  <Header />",
              "</Card>",
            ],
            pengecoh: [
              "<Card header={<Header />} />",
              "<Header><Card /></Header>",
            ],
            pemisah: "\n",
            explanation:
              "Pola komposisi membungkus komponen anak di dalam tag pembuka dan penutup `<Card><Header /></Card>`. Pengecoh prop `header={...}` menggoda tetapi merupakan pola konfigurasi yang kaku. Pengecoh urutan terbalik `<Header><Card />` juga jebakan kesalahan struktur hierarki komponen.",
          },
        },
        {
          "kind": "step",
          "id": "react-2-4",
          "title": "Lifting State Up",
          "explanation": "Lifting state up adalah pola memindahkan state ke komponen induk terdekat ketika dua atau lebih komponen anak membutuhkan akses ke data yang sama. Komponen induk menjadi sumber kebenaran tunggal (*single source of truth*) dan membagikan data tersebut ke anak-anaknya melalui props. Teknik ini menjaga agar data di seluruh bagian aplikasi tetap sinkron dan konsisten. Jebakan yang sering terjadi adalah menaikkan state terlalu tinggi ke root aplikasi padahal data tersebut hanya dibutuhkan oleh dua komponen bersebelahan.",
          "example": {
            "code": "function Induk() {\n  const [suhu, setSuhu] = useState(28);   // state DINAIKKAN ke induk\n  return (\n    <div>\n      <Slider nilai={suhu} onUbah={setSuhu} />\n      <Termometer nilai={suhu} />\n    </div>\n  );\n}",
            "output": "Slider digeser ke 31 → kedua anak ikut berubah:\n<input type=\"range\" value=\"31\">\n<p>31°C</p>",
            "note": "Kalau `suhu` disimpan di dalam Slider, Termometer tidak punya cara membacanya — itulah alasan state dinaikkan ke induk terdekat yang dimiliki keduanya. Catatan jujur: potongan ini memanggil komponen yang tidak ada di editor, jadi panel preview tidak menampilkan hasil; tesnya tetap bisa lulus."
          },
          "instruction": "Buat komponen `ParentComponent` yang mengembalikan elemen `<div>` berisi `<ChildA />` dan `<ChildB />`.",
          "starterCode": "// Tulis komponen ParentComponent di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "(function\\s+ParentComponent\\s*\\(|const\\s+ParentComponent\\s*=)",
              "message": "Belum ada komponen `ParentComponent`. Induk inilah yang nanti memegang state bersama kedua anaknya."
            },
            {
              "pattern": "<ChildA\\s*/>[\\s\\S]*<ChildB\\s*/>",
              "message": "Kedua anak harus dirender oleh induk yang sama — itu syarat sebelum state bisa dinaikkan. Urutannya: `<ChildA />` lebih dulu, lalu `<ChildB />`."
            },
            {
              "pattern": "<div>[\\s\\S]*</div>",
              "message": "Bungkus keduanya dalam satu elemen `<div>`. JSX hanya boleh mengembalikan satu elemen root — kalau tidak ingin menambah div, pakai Fragment `<>...</>`."
            }
          ],
          "solution": "function ParentComponent() {\n  return <div><ChildA /><ChildB /></div>;\n}",
          susunKode: {
            question:
              "Buat ParentComponent yang merender <ChildA /> dan <ChildB />.",
            potongan: [
              "function ParentComponent() {",
              "  return <div><ChildA /><ChildB /></div>;",
              "}",
            ],
            pengecoh: [
              "function MainParent() {",
              "  return <section><ChildA /><ChildB /></section>;",
            ],
            pemisah: "\n",
            explanation:
              "Menaikkan state (lifting state up) memerlukan komponen induk `ParentComponent` yang merender kedua anak `<ChildA />` dan `<ChildB />` di dalam satu elemen root `<div>`. Pengecoh `MainParent` menggoda tetapi keliru nama komponennya. Pengecoh `<section>` juga jebakan elemen root yang berbeda.",
          },
        },
        {
          "kind": "step",
          "id": "react-2-5",
          "title": "Default Props & Destructuring Pattern",
          "explanation": "Default props dapat diberikan secara elegan menggunakan fitur nilai bawaan pada destructuring parameter fungsi JavaScript (`function Avatar({ size = 40 })`). Pola modern ini menggantikan penggunaan atribut `defaultProps` lama yang sudah tidak direkomendasikan pada komponen fungsi React. Memberikan nilai default mencegah terjadinya kesalahan render saat komponen dipanggil tanpa menyertakan prop opsional tersebut. Jebakan umum adalah lupa menentukan tipe opsional (`size?: number`) di interface TypeScript saat menggunakan default value.",
          "example": {
            "code": "function Button({ color = \"blue\", text }: ButtonProps) {\n  return <button className={color}>{text}</button>;\n}",
            "output": "<Button text=\"Simpan\" />              → <button class=\"blue\">Simpan</button>\n<Button text=\"Hapus\" color=\"red\" />  → <button class=\"red\">Hapus</button>",
            "note": "Nilai default hanya dipakai kalau props-nya `undefined`. Mengirim `color={null}` TIDAK memicu default — jebakan yang sering muncul saat nilai datang dari API."
          },
          "instruction": "Tipe `AvatarProps` di editor sudah menyatakan `size` opsional. Buat komponen `Avatar` yang membongkar `size` di parameternya dan memberinya nilai bawaan `40` supaya `<Avatar />` tanpa props tetap punya ukuran. Komponennya cukup mengembalikan `<div>Avatar</div>`.",
          "starterCode": "interface AvatarProps {\n  size?: number;   // tanda tanya = opsional\n}\n\n// Tulis komponen Avatar di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+Avatar\\s*\\(\\s*\\{\\s*size\\s*=\\s*40\\s*\\}\\s*:\\s*AvatarProps\\s*\\)",
              "message": "Nilai bawaan diberikan di dalam destructuring parameter: `{ size = 40 }`. Cara lama `Avatar.defaultProps = ...` sudah tidak disarankan untuk komponen fungsi dan React memperingatkannya di versi baru."
            }
          ],
          "solution": "interface AvatarProps {\n  size?: number;\n}\n\nfunction Avatar({ size = 40 }: AvatarProps) {\n  return <div>Avatar</div>;\n}",
          susunKode: {
            question:
              "Gunakan default prop size = 40 pada parameter Avatar.",
            potongan: [
              "interface AvatarProps {\n  size?: number;\n}\n",
              "function Avatar({ size = 40 }: AvatarProps) {",
              "  return <div>Avatar</div>;",
              "}",
            ],
            pengecoh: [
              "function Avatar({ size = 10 }: AvatarProps) {",
              "function Avatar({ size }: AvatarProps) {",
            ],
            pemisah: "\n",
            explanation:
              "Nilai bawaan prop dalam React modern ditulis langsung di dalam destructuring parameter `{ size = 40 }`. Pengecoh `size = 10` menggoda tetapi keliru angkanya. Pengecoh `{ size }` tanpa nilai bawaan juga jebakan melupakan default value yang disyaratkan dalam instruksi.",
          },
        },
        {
          "kind": "step",
          "id": "react-2-6",
          "title": "Memecah UI Jadi Pohon Komponen",
          "explanation": "Memecah maket desain UI (*mockup*) menjadi pohon hierarki komponen yang rapi adalah langkah awal paling penting dalam membangun aplikasi React. Setiap komponen idealnya memegang satu tanggung jawab tunggal (*Single Responsibility Principle*), seperti komponen Navbar, Sidebar, atau Footer. Pendekatan modular ini membuat kode lebih mudah dirawat dan dikembangkan oleh tim secara paralel. Jebakan bagi pemula adalah membuat komponen yang terlalu besar sehingga sulit dibaca dan diuji.",
          "example": {
            "code": "function App() {\n  return (\n    <main>\n      <Navbar />\n      <Content />\n    </main>\n  );\n}",
            "output": "Pohon komponennya:\nApp\n├─ Navbar\n└─ Content\n\nHTML yang dihasilkan:\n<main>\n  <nav>...</nav>\n  <section>...</section>\n</main>",
            "note": "Satu komponen = satu tanggung jawab. Patokan praktis di lapangan: kalau kamu sulit memberi nama sebuah komponen, biasanya ia mengerjakan dua hal sekaligus. Catatan jujur: `Navbar` dan `Content` tidak ada di editor, jadi panel preview tidak menampilkan hasilnya."
          },
          "instruction": "Mulailah pohon komponen aplikasimu: buat komponen `App` yang mengembalikan satu elemen `<main>` sebagai wadah, dan di dalamnya tempatkan komponen `Navbar` (anggap komponennya sudah ada di berkas lain).",
          "starterCode": "// Tulis komponen App di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+App\\s*\\(",
              "message": "Buat komponen bernama `App` — huruf awal besar, karena JSX membedakan komponen dari tag HTML lewat itu."
            },
            {
              "pattern": "return\\s*[\\s\\S]*<main>",
              "message": "Komponen harus MENGEMBALIKAN JSX-nya dengan `return`. Menuliskan JSX tanpa `return` membuat komponen merender kosong tanpa error apa pun."
            },
            {
              "pattern": "<main>\\s*<Navbar\\s*/>\\s*</main>",
              "message": "Susun pohonnya: `<Navbar />` berada di dalam `<main>`. Ini bentuk paling dasar \"memecah UI jadi pohon komponen\" — induk menentukan tata letak, anak mengurus isinya."
            }
          ],
          "solution": "function App() {\n  return <main><Navbar /></main>;\n}",
          susunKode: {
            question:
              "Buat komponen App yang merender <Navbar /> di <main>.",
            potongan: [
              "function App() {",
              "  return <main><Navbar /></main>;",
              "}",
            ],
            pengecoh: [
              "function MainApp() {",
              "  return <section><Navbar /></section>;",
            ],
            pemisah: "\n",
            explanation:
              "Memecah UI menjadi pohon komponen dilakukan dengan memanggil `<Navbar />` di dalam `<main>`. Pengecoh `MainApp` menggoda tetapi keliru nama komponen App. Pengecoh `<section>` juga jebakan elemen root. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
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
            "code": "import { useState } from \"react\";\n\nfunction Penghitung() {\n  const [jumlah, setJumlah] = useState(0);\n  console.log(\"render dengan jumlah =\", jumlah);\n  return <button onClick={() => setJumlah(jumlah + 1)}>{jumlah}</button>;\n}",
            "output": "Konsol saat halaman dibuka:\nrender dengan jumlah = 0\n\nSetelah tombol diklik sekali:\nrender dengan jumlah = 1\n\nTombol di layar berubah dari 0 menjadi 1.",
            "note": "Perhatikan konsolnya: fungsi komponen dijalankan ULANG setiap kali state berubah. Itulah arti \"re-render\" — bukan hanya satu bagian layar yang ditambal, tapi fungsinya benar-benar dipanggil lagi dengan nilai baru. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Deklarasikan variabel state bernama `count` dengan fungsi setternya `setCount`, dan beri nilai awal `0`.",
          "starterCode": "// Tulis useState di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "useState\\(\\s*0\\s*\\)",
              "message": "State dibuat dengan memanggil `useState(<nilai awal>)`. Nilai awal wajib diberikan — tanpa argumen, isinya `undefined` dan tampilan pertamamu kosong."
            },
            {
              "pattern": "const\\s*\\[\\s*count\\s*,\\s*setCount\\s*\\]",
              "message": "Hasil `useState` adalah array berisi dua hal, jadi ambil keduanya dengan destructuring array (kurung siku): nilainya, lalu fungsi pengubahnya. Konvensi penamaan setter: `set` + nama state."
            }
          ],
          "solution": "const [count, setCount] = useState(0);",
          susunKode: {
            question:
              "Deklarasikan state count dengan useState(0).",
            potongan: [
              "const [count, setCount] =",
              "useState(0);",
            ],
            pengecoh: [
              "let [count, setCount] =",
              "useStore(0);",
            ],
            pemisah: " ",
            explanation:
              "State React dideklarasikan menggunakan `const [count, setCount] = useState(0)`. Pengecoh `let` menggoda tetapi keliru karena variabel state tidak boleh di-assign ulang secara langsung tanpa fungsi setter. Pengecoh `useStore` juga jebakan nama hook yang tidak ada di React dasar.",
          },
        },
        {
          "kind": "step",
          "id": "react-3-2",
          "title": "Event Handler: onClick, onChange, onSubmit",
          "explanation": "Event handler di React digunakan untuk menangani interaksi pengguna seperti klik tombol (`onClick`), perubahan input (`onChange`), atau pengiriman formulir (`onSubmit`). Penulisan nama event menggunakan format camelCase dan menerima fungsi callback yang akan dieksekusi saat event terjadi. Pada penanganan form submit, sangat penting memanggil `e.preventDefault()` untuk mencegah perilaku default browser yang memuat ulang (*reload*) seluruh halaman. Jebakan paling sering adalah langsung memanggil fungsi event `onClick={handleClick()}` alih-alih mengoper referensinya `onClick={handleClick}`.",
          "example": {
            "code": "function Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(\"data dikirim dari JavaScript\");\n  };\n  return (\n    <form onSubmit={handleSubmit}>\n      <button>Kirim</button>\n    </form>\n  );\n}",
            "output": "Dengan e.preventDefault():\ndata dikirim dari JavaScript      ← tercetak, halaman tetap\n\nTanpa e.preventDefault():\n(konsol kosong sekejap, lalu halaman dimuat ulang dan seluruh state hilang)",
            "note": "`preventDefault` tidak mengirim apa pun ke server — ia hanya membatalkan perilaku bawaan form. Pengiriman datanya tetap kamu tulis sendiri, biasanya dengan `fetch`. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Di dalam fungsi handler form, panggil metode pada objek event `e` untuk mencegah halaman termuat ulang secara default.",
          "starterCode": "// Tulis kode pemanggilan fungsi di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "e\\.preventDefault\\(\\s*\\)",
              "message": "Perilaku bawaan form adalah mengirim data lalu MEMUAT ULANG halaman, dan itu menghapus seluruh state React-mu. Metode pada objek event yang mencegahnya dipanggil di baris pertama handler — jangan lupa tanda kurung, karena tanpa memanggilnya tidak terjadi apa-apa."
            }
          ],
          "solution": "e.preventDefault();",
          susunKode: {
            potongan: [
              "e.",
              "prevent",
              "Default()",
              ";"
],
            pengecoh: [
              "event.",
              "stopPropagate();"
],
            pemisah: "",
            explanation:
              "Mencegah perilaku bawaan form submit di React dilakukan dengan memanggil `e.preventDefault()`. Pengecoh `return false` menggoda pengembang jQuery tetapi tidak bekerja di event handler React. Pengecoh `stopPropagate` adalah jebakan metode penghentian gelembung event.",
          },
        },
        {
          "kind": "step",
          "id": "react-3-3",
          "title": "State = Snapshot",
          "explanation": "State di React bertindak seperti potret (*snapshot*) nilai pada saat siklus render tersebut dieksekusi. Memanggil fungsi setter state seperti `setCount(count + 1)` beberapa kali secara berturut-turut di dalam satu handler event tidak akan menambah nilai bertahap, karena seluruh pemanggilan membaca nilai snapshot `count` yang sama. Memahami konsep snapshot ini sangat penting agar kamu tidak bingung saat nilai state belum berubah seketika di baris kode berikutnya. Jebakan klasik adalah mencoba membaca nilai state terbaru langsung di baris bawah setelah panggilan `setCount`.",
          "example": {
            "code": "// Dua pemanggilan ini membaca nilai 'count' snapshot yang SAMA\nsetCount(count + 1);\nsetCount(count + 1);",
            "output": "count sebelum diklik: 0\ncount setelah diklik : 1      ← bukan 2!\n\nAlasannya: di render ini `count` bernilai 0, jadi kedua baris sama-sama berarti setCount(0 + 1).",
            "note": "Ganti dua baris itu dengan `setCount(prev => prev + 1)` dua kali, dan hasilnya benar-benar 2. Bentuk itu yang kamu latih di step berikutnya."
          },
          "instruction": "Buktikan sendiri jebakan snapshot-nya. Buat fungsi bernama `IncrementTwice` yang berisi DUA baris penambahan state memakai bentuk \"nilai jadi\" (`setCount` dengan `count + 1`), bukan bentuk updater. Hasilnya nanti hanya naik satu — itu memang yang ingin ditunjukkan.",
          "starterCode": "// Tulis fungsi di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "(function\\s+IncrementTwice\\s*\\(|const\\s+IncrementTwice\\s*=)",
              "message": "Belum ada fungsi bernama `IncrementTwice`. Fungsi inilah yang nanti dipasang ke `onClick` tombol."
            },
            {
              "pattern": "setCount\\s*\\(\\s*count\\s*\\+\\s*1\\s*\\)[\\s\\S]*setCount\\s*\\(\\s*count\\s*\\+\\s*1\\s*\\)",
              "message": "Tulis penambahannya DUA kali dengan bentuk `setCount(count + 1)`. Latihan ini sengaja memakai bentuk yang keliru supaya kamu melihat akibatnya: keduanya membaca `count` dari snapshot render yang sama."
            },
            {
              "pattern": "prev\\s*=>",
              "mustNotMatch": true,
              "message": "Untuk step ini JANGAN memakai bentuk updater (`prev => ...`) — bentuk itu justru bekerja benar, jadi jebakannya tidak akan terlihat. Bentuk updater dilatih di step setelah ini."
            }
          ],
          "solution": "function IncrementTwice() {\n  setCount(count + 1);\n  setCount(count + 1);\n}",
          susunKode: {
            potongan: [
              "function IncrementTwice() {",
              "  setCount(count + 1);",
              "  setCount(count + 1);",
              "}",
            ],
            pengecoh: [
              "  setCount(prev => prev + 1);",
              "  setCount(count + 2);",
            ],
            pemisah: "\n",
            explanation:
              "Membuktikan bahwa state bersifat snapshot dilakukan dengan memanggil `setCount(count + 1)` dua kali dalam satu handler. Pengecoh updater function `prev => prev + 1` menggoda tetapi justru menyelesaikan masalah snapshot yang sengaja diperlihatkan pada step ini.",
          },
        },
        {
          "kind": "step",
          "id": "react-3-4",
          "title": "Updater Function (prev => ...)",
          "explanation": "Updater function (`setCount(prev => prev + 1)`) adalah cara meng-update state di mana kita mengoper fungsi callback yang menerima nilai state paling akhir sebagai argumennya. Pola ini sangat krusial digunakan jika nilai state baru bergantung pada kalkulasi nilai state sebelumnya atau saat terjadi pembaruan state berturut-turut di dalam satu event handler. Menggunakan updater function menjamin kamu selalu bekerja dengan data Paling segar dari antrean pembaruan React. Jebakan pemula adalah mengabaikan pola ini pada operasi perhitungan nilai bertahap.",
          "example": {
            "code": "// dipanggil tiga kali berturut-turut dalam satu handler\nsetCount(prev => prev + 1);\nsetCount(prev => prev + 1);\nsetCount(prev => prev + 1);",
            "output": "count sebelum: 0\ncount sesudah: 3\n\nBandingkan dengan setCount(count + 1) tiga kali → hasilnya tetap 1.",
            "note": "React menyimpan ketiga fungsi itu di antrean, lalu menjalankannya berurutan: 0→1, 1→2, 2→3. Karena tiap fungsi menerima hasil sebelumnya, snapshot render tidak lagi jadi masalah. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Tombol bonus menambah skor 10 poin, tapi menekannya dua kali cepat hanya menambah 10 karena `score` yang dibaca masih nilai lama (state adalah snapshot). Panggil `setScore` dengan bentuk yang menerima nilai sebelumnya sebagai argumen, lalu tambahkan 10 padanya. Beri nama parameternya `prev`.",
          "starterCode": "// Tulis setScore di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "setScore\\(\\s*\\(?\\s*prev",
              "message": "Bentuk aman memberi FUNGSI ke setter, bukan nilai jadi. Parameter pertamanya adalah nilai state terbaru yang dijamin React — beri nama `prev`."
            },
            {
              "pattern": "prev\\s*\\+\\s*10",
              "message": "Kembalikan nilai sebelumnya ditambah 10. Menulis `score + 10` di dalamnya mengalahkan tujuan updater function, karena `score` masih snapshot render ini."
            }
          ],
          "solution": "setScore(prev => prev + 10);",
          susunKode: {
            potongan: [
              "setScore(",
              "prev =>",
              "prev + 10);",
            ],
            pengecoh: [
              "prev => prev + 1);",
              "prev => prev + 5);",
            ],
            pemisah: "",
            explanation:
              "Updater function `setScore(prev => prev + 10)` menggunakan nilai state terbaru dari antrean pembaruan. Pengecoh `prev + 1` menggoda tetapi keliru jumlah pertambahannya. Pengecoh `prev + 5` juga jebakan angka yang tidak sesuai dengan instruksi nilai 10.",
          },
        },
        {
          "kind": "step",
          "id": "react-3-5",
          "title": "Update State Object & Array Secara Immutable",
          "explanation": "Objek dan array di dalam state React wajib diperbarui secara immutable (tanpa mutasi langsung) menggunakan teknik penyalinan seperti spread operator (`[...items, newItem]`). Perubahan referensi objek/array baru inilah yang memberi tahu React bahwa data telah berubah sehingga proses re-render UI dapat terpicu. Memutasi array secara langsung dengan `.push()` atau `.splice()` akan membuat referensi memori tetap sama sehingga layar tidak akan diperbarui. Jebakan yang sering ditemui adalah mengira `.push()` sudah cukup untuk mengubah tampilan state di layar.",
          "example": {
            "code": "const [items, setItems] = useState(['A', 'B']);\nsetItems([...items, 'C']);",
            "output": "items sebelum: [\"A\", \"B\"]\nitems sesudah: [\"A\", \"B\", \"C\"]\n\nDaftar di layar:\n<li>A</li>\n<li>B</li>\n<li>C</li>",
            "note": "Bandingkan dengan `items.push(\"C\")`: isi arraynya juga berubah, tapi React membandingkan ALAMAT array — alamatnya sama, jadi layar tidak diperbarui dan kamu akan mengira datanya tidak masuk. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Perbarui array `items` dengan menambahkan elemen string 'Baru' ke akhir array tanpa memutasi array asli.",
          "starterCode": "// Tulis setItems di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "setItems\\(",
              "message": "Perubahan state selalu lewat setter-nya, bukan dengan menyentuh variabelnya langsung."
            },
            {
              "pattern": "\\[\\s*\\.\\.\\.items\\s*,",
              "message": "Buat array BARU dengan menyebar isi array lama memakai tiga titik (spread), lalu tambahkan elemen baru di belakangnya. `items.push(...)` mengubah array yang sama, dan React tidak melihat perubahan itu sebagai state baru sehingga tampilan tidak diperbarui."
            },
            {
              "pattern": "['\"]Baru['\"]\\s*\\]",
              "message": "Elemen barunya ditulis setelah spread, sebelum kurung siku penutup — posisinya menentukan ia masuk ke akhir array."
            }
          ],
          "solution": "setItems([...items, 'Baru']);",
          susunKode: {
            question:
              "Update state array secara immutable dengan spread operator.",
            potongan: [
              "setItems(",
              "[...items,",
              "'Baru']);",
            ],
            pengecoh: [
              "items.push('Baru');",
              "items.concat('Baru');",
            ],
            pemisah: "",
            explanation:
              "Pembaruan state array wajib bersifat imutabel menggunakan `[...items, 'Baru']`. Pengecoh `items.push('Baru')` menggoda tetapi memutasi referensi array lama secara langsung sehingga React keliru menganggap state tidak berubah sama sekali.",
          },
        },
        {
          "kind": "step",
          "id": "react-3-6",
          "title": "Kesalahan Umum: Mutasi Langsung & State Redundan",
          "explanation": "Kesalahan umum yang sering dilakukan pemula adalah membuat state baru untuk data yang sebenarnya bisa kalkulasi langsung dari state/props yang sudah ada (state redundan). Membuat state redundan berisiko tinggi menyebabkan data tidak sinkron jika salah satu state lupa diperbarui. Selalu hitung variabel data turunan secara langsung di dalam body fungsi komponen saat proses render berlangsung. Jebakan umum adalah membuat state `fullName` terpisah padahal nilainya cukup digabungkan dari `firstName + ' ' + lastName`.",
          "example": {
            "code": "const [harga, setHarga] = useState(10000);\nconst [jumlah, setJumlah] = useState(2);\n\n// ❌ state ketiga yang harus kamu ingat perbarui sendiri\n// const [total, setTotal] = useState(20000);\n\n// ✅ dihitung ulang otomatis setiap render\nconst total = harga * jumlah;\nconsole.log(total);",
            "output": "20000\n\nSetelah setJumlah(3):\n30000\n\nVersi state ketiga: layar masih menampilkan 20000 sampai kamu ingat memanggil setTotal juga.",
            "note": "Inilah bug \"out of sync\" yang khas: dua sumber kebenaran untuk satu angka. Nilai yang bisa DIHITUNG dari state lain tidak boleh disimpan sebagai state sendiri. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Hitung string `fullName` dari `firstName` dan `lastName` secara langsung saat komponen di-render.",
          "starterCode": "// Tulis variabel fullName di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+fullName\\s*=",
              "message": "Nilai yang bisa DIHITUNG dari state lain tidak perlu jadi state sendiri — cukup variabel biasa yang dihitung saat render. Menyimpannya di `useState` berarti kamu harus mengingat memperbaruinya setiap kali `firstName` berubah, dan itu sumber data yang tidak sinkron."
            },
            {
              "pattern": "firstName\\s*\\+\\s*['\"]\\s*['\"]\\s*\\+\\s*lastName",
              "message": "Gabungkan kedua nama dengan sebuah spasi di antaranya. Tanpa spasi itu, hasilnya menempel jadi satu kata."
            }
          ],
          "solution": "const fullName = firstName + ' ' + lastName;",
          susunKode: {
            question:
              "Hitung fullName dari firstName + ' ' + lastName.",
            potongan: [
              "const fullName =",
              "firstName + ' ' + lastName;",
            ],
            pengecoh: [
              "const [fullName, setFullName] =",
              "useState('');",
            ],
            pemisah: " ",
            explanation:
              "Nilai yang bisa dihitung dari state lain tidak boleh dijadikan state redundan, melainkan dihitung langsung `const fullName = firstName + ' ' + lastName`. Pengecoh `useState` menggoda tetapi membuat state redundan yang sering memicu bug tidak sinkron.",
          },
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
            "output": "Pengguna mengetik \"Bim\":\nname = \"B\"  → render\nname = \"Bi\" → render\nname = \"Bim\"→ render\n\nIsi kotak input selalu sama dengan nilai state, karena kotaknya menampilkan state — bukan menyimpan sendiri.",
            "note": "Kalau `value={name}` dipasang tapi `onChange` lupa ditulis, kotaknya jadi tidak bisa diketik sama sekali: setiap ketikan langsung ditimpa nilai state yang tidak pernah berubah. Ini keluhan nomor satu pemula React. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Buatlah sebuah elemen `<input>` teks yang dikendalikan (controlled). Kaitkan nilainya dengan state `text` dan perbarui nilainya pada event `onChange`.",
          "starterCode": "// Tulis input di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<input\\b[\\s\\S]*value=\\{\\s*text\\s*\\}",
              "message": "Elemen `<input>` belum diikat ke state: tambahkan `value={text}`. Tanpa itu input tidak terkontrol, dan mengubah state tidak akan mengubah isi kotaknya."
            },
            {
              "pattern": "onChange=\\{\\s*\\(?\\s*e\\s*\\)?\\s*=>\\s*setText\\(\\s*e\\.target\\.value\\s*\\)\\s*\\}",
              "message": "Belum ada `onChange` yang memanggil `setText` dengan `e.target.value`. Tanpa handler ini, input jadi read-only — jebakan paling sering pada controlled input. Urutan atribut bebas."
            }
          ],
          "solution": "<input value={text} onChange={(e) => setText(e.target.value)} />",
          susunKode: {
            potongan: [
              "<input value={text}",
              "onChange={(e) =>",
              "setText(e.target.value)} />",
            ],
            pengecoh: [
              "onChange={(e) => setText(e.value)} />",
              "onChange={(e) => text = e.target.value} />",
            ],
            pemisah: " ",
            explanation:
              "Controlled input di React menghubungkan `value={text}` dengan `onChange={(e) => setText(e.target.value)}`. Pengecoh `e.value` menggoda tetapi keliru karena nilai input berada di `e.target.value`. Pengecoh mutasi langsung `text = e.target.value` juga jebakan.",
          },
        },
        {
          "kind": "step",
          "id": "react-4-2",
          "title": "Form Multi-field dengan 1 State Object",
          "explanation": "Mengelola formulir dengan banyak bidang input (*multi-field form*) paling efisien dilakukan dengan menggunakan satu state berbentuk objek alih-alih membuat `useState` terpisah untuk setiap bidang. Dengan memanfaatkan atribut `name` pada elemen input dan computed property name (`[e.target.name]: e.target.value`), satu event handler `onChange` dapat menangani seluruh perubahan input form secara dinamis. Pola ini membuat kode formulir jauh lebih bersih dan mudah dikembangkan. Jebakan umum adalah lupa menyertakan spread operator `...prev` sehingga properti form lainnya terhapus saat satu bidang diisi.",
          "example": {
            "code": "const handleChange = (e) => {\n  setForm({ ...form, [e.target.name]: e.target.value });\n};",
            "output": "Konsol mencatat state objek form diperbarui, misal: { username: 'budi', age: 20 }",
            "note": "Pastikan setiap elemen input memiliki atribut 'name' yang cocok dengan key di state form. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Di dalam fungsi handler input, perbarui state `form` dengan mempertahankan nilai-nilai yang ada sebelumnya, lalu perbarui hanya field yang memicu event secara dinamis menggunakan sintaks array (computed property).",
          "starterCode": "// Tulis setForm di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "setForm\\(\\s*\\{\\s*\\.\\.\\.form",
              "message": "Untuk state berbentuk object, sebar dulu isi lama dengan spread. Tanpa itu, seluruh field lain HILANG begitu satu field diubah — gejalanya khas: mengisi email menghapus nama yang sudah diketik."
            },
            {
              "pattern": "\\[\\s*e\\.target\\.name\\s*\\]\\s*:",
              "message": "Nama field diambil dari atribut `name` input, dan karena namanya baru diketahui saat runtime, kuncinya ditulis di dalam kurung siku (*computed property*). Menulisnya tanpa kurung siku membuat kunci literalnya benar-benar bernama \"e.target.name\"."
            },
            {
              "pattern": "e\\.target\\.value",
              "message": "Nilai barunya diambil dari `e.target.value`. Untuk checkbox, yang dipakai `e.target.checked` — bukan value."
            }
          ],
          "solution": "setForm({ ...form, [e.target.name]: e.target.value });",
          susunKode: {
            question:
              "Update form state dengan computed property name.",
            potongan: [
              "setForm({ ...form,",
              "[e.target.name]: e.target.value });",
            ],
            pengecoh: [
              "setForm({ form,",
              "e.target.name: e.target.value });",
            ],
            pemisah: " ",
            explanation:
              "Update multi-field form menggunakan spread `{ ...form, [e.target.name]: e.target.value }`. Pengecoh tanpa tanda siku `e.target.name:` menggoda tetapi keliru sintaks objek JS. Pengecoh tanpa spread `...form` juga jebakan karena menghapus nilai bidang lainnya.",
          },
        },
        {
          "kind": "step",
          "id": "react-4-3",
          "title": "Validasi Sederhana & Pesan Error",
          "explanation": "Validasi formulir sederhana dilakukan dengan memeriksa nilai state input saat handler `onSubmit` dieksekusi atau secara real-time di event `onChange`. Jika nilai input tidak memenuhi kriteria (misalnya string kosong), kita menyimpan pesan kesalahan ke dalam state error dan membatalkan proses submit. Tanda kesalahan tersebut kemudian dirender secara kondisional di bawah elemen input untuk memberi umpan balik langsung kepada pengguna. Jebakan pemula adalah langsung mengirim data ke server tanpa melakukan validasi di tingkat client terlebih dahulu.",
          "example": {
            "code": "const [error, setError] = useState(\"\");\n\nfunction handleSubmit(e) {\n  e.preventDefault();\n  if (!email) {\n    setError(\"Email wajib diisi!\");\n    return;                 // hentikan, jangan kirim ke server\n  }\n  setError(\"\");\n}\n// di JSX: {error && <p className=\"merah\">{error}</p>}",
            "output": "Submit dengan email kosong:\n<p class=\"merah\">Email wajib diisi!</p>\n\nSubmit dengan email terisi:\n(pesan hilang, proses lanjut)",
            "note": "Perhatikan `return` setelah `setError`: tanpa itu, kode di bawahnya tetap jalan dan data kosong tetap terkirim. Validasi di client hanya untuk kenyamanan pengguna — server WAJIB memeriksa ulang. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Form catatan tidak boleh dikirim dalam keadaan kosong. Di dalam handler submit, periksa isi state `text`: kalau belum ada isinya, simpan pesan `Wajib diisi!` ke state error lewat setter-nya. Cukup satu baris pemeriksaan — pakai bentuk negasi, bukan membandingkan dengan string kosong.",
          "starterCode": "// Tulis validasi di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "if\\s*\\(\\s*!\\s*text\\s*\\)",
              "message": "Periksa kondisi kosong dengan tanda seru (negasi) pada nilainya. Bentuk ini sekaligus menangkap string kosong, `undefined`, dan `null` — tiga keadaan yang sama-sama berarti \"belum diisi\"."
            },
            {
              "pattern": "setError\\(\\s*['\"]Wajib diisi!['\"]\\s*\\)",
              "message": "Simpan pesannya ke state error lewat setter-nya, sebagai teks di dalam tanda kutip. Pesan validasi disimpan di state (bukan `alert`) supaya bisa ditampilkan di dekat input yang bermasalah."
            }
          ],
          "solution": "if (!text) setError('Wajib diisi!');",
          susunKode: {
            potongan: [
              "if (!text)",
              "setError('Wajib diisi!');",
            ],
            pengecoh: [
              "if (text == null)",
              "throw Error('Wajib diisi!');",
            ],
            pemisah: "\n",
            explanation:
              "Pemeriksaan teks kosong dilakukan via `if (!text)` diikuti `setError('Wajib diisi!')`. Pengecoh `throw Error` menggoda tetapi akan melempar unhandled exception yang menghentikan aplikasi alih-alih menampilkan pesan keliru di UI.",
          },
        },
        {
          "kind": "step",
          "id": "react-4-4",
          "title": "Menambah & Menghapus Item List (CRUD Client)",
          "explanation": "Menambah, mengedit, dan menghapus item dari daftar array di memori client (CRUD Client) adalah operasi mendasar dalam membangun antarmuka interaktif. Penambahan dilakukan dengan spread operator `[...list, newItem]`, penghapusan dengan `.filter()`, dan pengubahan dengan `.map()`. Seluruh metode tersebut mengembalikan array baru tanpa memutasi array asli sehingga sesuai dengan prinsip immutability React. Jebakan yang harus dihindari adalah menggunakan metode mutasi `splice()` yang merusak state asli.",
          "example": {
            "code": "const deleteItem = (id) => {\n  setItems(items.filter(item => item.id !== id));\n};",
            "output": "items sebelum: [{id:1,\"Kopi\"}, {id:2,\"Teh\"}, {id:3,\"Susu\"}]\ndeleteItem(2)\nitems sesudah: [{id:1,\"Kopi\"}, {id:3,\"Susu\"}]",
            "note": "`filter` menyisakan item yang syaratnya BENAR — jadi syaratnya ditulis \"yang id-nya bukan yang dihapus\", bukan sebaliknya. Menukar `!==` menjadi `===` menghapus semua item kecuali satu. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Perbarui array `items` dengan menghapus elemen yang memiliki `item.id` yang sama dengan argumen `id` menggunakan metode `.filter()`.",
          "starterCode": "// Tulis setItems filter di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "setItems\\(",
              "message": "Perubahan daftar tetap lewat setter state."
            },
            {
              "pattern": "items\\.filter\\(",
              "message": "Penghapusan immutable dilakukan dengan `.filter()`, yang MENGEMBALIKAN array baru tanpa menyentuh yang lama. `.splice()` memotong array aslinya dan React tidak akan melihatnya sebagai state baru."
            },
            {
              "pattern": "item\\.id\\s*!==\\s*id",
              "message": "Syarat filter menyisakan item yang id-nya BERBEDA dari yang dihapus. Pakai pembanding tiga karakter (`!==`) supaya `\"3\"` dan `3` tidak dianggap sama — id dari URL selalu berupa string."
            }
          ],
          "solution": "setItems(items.filter(item => item.id !== id));",
          susunKode: {
            potongan: [
              "setItems(",
              "items.filter(item => item.id !== id));",
            ],
            pengecoh: [
              "items.splice(id, 1);",
              "items.pop();",
            ],
            pemisah: "",
            explanation:
              "Menghapus item dari array state dilakukan dengan `items.filter(...)` yang mengembalikan array baru imutabel. Pengecoh `items.splice()` menggoda tetapi memutasi array asli secara langsung yang sering keliru dihindari di React.",
          },
        },
        {
          "kind": "step",
          "id": "react-4-5",
          "title": "Filter & Search di Client",
          "explanation": "Pencarian dan penyaringan data (*filter & search*) di tingkat client dilakukan dengan menghitung data terfilter secara langsung di dalam body komponen saat render, memanfaatkan nilai state pencarian (`searchTerm`). Kita menggunakan metode `.filter()` dan `.includes()` pada daftar array utama tanpa perlu membuat state array baru untuk menyimpan hasil filter. Pendekatan ini memastikan data yang tampil selalu sinkron dengan query yang diketikkan pengguna. Jebakan umum adalah membuat state array ganda yang membingungkan alur data.",
          "example": {
            "code": "const items = [{ name: \"Kopi Gayo\" }, { name: \"Teh Hijau\" }, { name: \"Kopi Toraja\" }];\nconst query = \"kopi\";\n\nconst filtered = items.filter((i) =>\n  i.name.toLowerCase().includes(query.toLowerCase())\n);\nconsole.log(filtered);",
            "output": "[{ name: \"Kopi Gayo\" }, { name: \"Kopi Toraja\" }]\n\nTanpa toLowerCase() di kedua sisi:\n[]      ← karena \"Kopi\" ≠ \"kopi\"",
            "note": "Hasil pencarian tidak perlu disimpan ke state: ia dihitung ulang setiap render dari `items` dan `query`, jadi mustahil ketinggalan sinkron. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Deklarasikan variabel `filtered` yang menyaring array `items`, sehingga hanya menyisakan item yang nama (`name`)-nya mengandung teks dalam `query`.",
          "starterCode": "// Tulis pencarian filtered di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+filtered\\s*=",
              "message": "Hasil pencarian dihitung saat render sebagai variabel biasa. Menyimpannya sebagai state kedua membuat kamu harus menyinkronkannya manual setiap kali `query` atau `items` berubah."
            },
            {
              "pattern": "items\\.filter\\(",
              "message": "Penyaringan daftar memakai `.filter()` pada array sumbernya."
            },
            {
              "pattern": "\\.name\\.includes\\(\\s*query\\s*\\)",
              "message": "Pemeriksaan \"mengandung teks\" memakai `.includes()` pada properti namanya. Untuk pencarian sungguhan, biasanya kedua sisi di-`toLowerCase()` dulu — kalau tidak, mencari \"kopi\" tidak menemukan \"Kopi\"."
            }
          ],
          "solution": "const filtered = items.filter(i => i.name.includes(query));",
          susunKode: {
            potongan: [
              "const filtered = ",
              "items.filter(",
              "i => i.name.includes(query));"
],
            pengecoh: [
              "const result = ",
              "items.find("
],
            pemisah: " ",
            explanation:
              "Pencarian kata kunci menggunakan `items.filter(i => i.name.includes(query))`. Pengecoh `.find()` menggoda tetapi hanya mengembalikan satu elemen pertama saja, bukan seluruh array daftar yang cocok dengan kata pencarian.",
          },
        },
        {
          "kind": "step",
          "id": "react-4-6",
          "title": "Checkbox, Radio, dan Select dalam React",
          "explanation": "Input berupa elemen checkbox, radio button, dan dropdown select di React dikelola sedikit berbeda dari input teks biasa. Checkbox menggunakan properti `e.target.checked` untuk mengambil nilai boolean true/false, sedangkan radio button dan select menggunakan `e.target.value`. Menyesuaikan penanganan sesuai tipe input HTML memastikan semua bentuk masukan pengguna dapat ditangkap ke dalam state dengan benar. Jebakan umum adalah mencoba membaca `e.target.value` pada elemen checkbox yang selalu mengembalikan string `'on'`.",
          "example": {
            "code": "<input type=\"checkbox\" checked={isAgree} onChange={(e) => setIsAgree(e.target.checked)} />",
            "output": "Sebelum dicentang: isAgree = false\nSetelah dicentang : isAgree = true\n\nKalau handler-nya salah memakai e.target.value:\nisAgree = \"on\"     ← string, bukan boolean; kotaknya lalu macet tercentang",
            "note": "Checkbox memakai `checked` + `e.target.checked`; input teks memakai `value` + `e.target.value`. Nilai `\"on\"` itu keluaran HTML asli untuk checkbox tanpa atribut value — dan karena string kosong pun \"truthy\" begitu ada isinya, bug ini tampak seperti checkbox yang tidak bisa dimatikan. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Buatlah sebuah input bertipe checkbox yang dikendalikan oleh state. Gunakan properti `agree` untuk mengikat nilainya, dan perbarui melalui fungsi `setAgree` saat event perubahannya (change) terjadi.",
          "starterCode": "// Tulis input checkbox di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<input\\b[\\s\\S]*type=[\"']checkbox[\"']",
              "message": "Tentukan dulu jenis input-nya: `type=\"checkbox\"`."
            },
            {
              "pattern": "checked=\\{\\s*agree\\s*\\}",
              "message": "Checkbox diikat lewat `checked={agree}`, bukan `value={agree}` — itu perbedaan pertama yang harus kamu ingat."
            },
            {
              "pattern": "onChange=\\{[\\s\\S]*setAgree\\(\\s*e\\.target\\.checked\\s*\\)",
              "message": "Handler-nya harus membaca `e.target.checked` (boolean), bukan `e.target.value` (string \"on\"). Urutan atribut bebas."
            }
          ],
          "solution": "<input type=\"checkbox\" checked={agree} onChange={(e) => setAgree(e.target.checked)} />",
          susunKode: {
            potongan: [
              "<input type=\"checkbox\" checked={agree}",
              "onChange={(e) => setAgree(e.target.checked)} />",
            ],
            pengecoh: [
              "<input type=\"checkbox\" value={agree}",
              "onChange={(e) => setAgree(e.target.value)} />",
            ],
            pemisah: " ",
            explanation:
              "State checkbox dihubungkan ke atribut `checked={agree}` dan `e.target.checked`. Pengecoh `value` dan `e.target.value` menggoda pengembang yang biasa dengan input text tetapi keliru karena checkbox menggunakan boolean `checked`.",
          },
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
            "output": "Sebelum effect jalan, judul tab: \"Vite + React + TS\"\nSetelah komponen mount, judul tab: \"Halaman Utama\"\n\n(judul berubah SETELAH tampilan tergambar — karena itu kadang terlihat berkedip sekejap)",
            "note": "`document.title` milik browser, bukan React — dan itulah definisi side effect: menyentuh sesuatu di luar komponen. Menyetel judul langsung di badan komponen (tanpa effect) bekerja di layar, tapi ikut berjalan setiap render dan melanggar aturan \"render harus murni\". Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Halaman ini harus mengubah judul yang tampil di tab browser menjadi `BiLearn` setelah komponen tampil. Tulis satu baris di dalam effect yang menyetel properti judul dokumen ke teks itu.",
          "starterCode": "// Tulis baris document.title di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "document\\.title\\s*=",
              "message": "Mengubah judul tab adalah contoh *sinkronisasi dengan sistem di luar React* — di situlah effect memang dibutuhkan. Properti yang diubah adalah judul dokumen milik browser."
            },
            {
              "pattern": "['\"]BiLearn['\"]",
              "message": "Isi judulnya dengan teks `BiLearn` di antara tanda kutip. Untuk judul yang berubah-ubah (misal nama produk), teksnya diambil dari state/props dan nama itu WAJIB masuk dependency array — kalau tidak, judulnya tertinggal di nilai lama."
            }
          ],
          "solution": "document.title = 'BiLearn';",
          susunKode: {
            potongan: [
          "document.title",
          " = 'BiLearn';"
],
            pengecoh: [
          "document.name",
          " = 'Main';"
],
            pemisah: "",
            explanation:
              "Mengubah judul halaman di browser dilakukan via `document.title = 'BiLearn'`. Pengecoh `heading` menggoda tetapi merupakan nama properti fiktif yang tidak ada di objek DOM `document` browser. Hal ini sering keliru dilakukan oleh pengembang yang baru belajar manipulasi DOM di React.",
          },
        },
        {
          "kind": "step",
          "id": "react-5-2",
          "title": "Dependency Array: [], [dep], Tanpa Array",
          "explanation": "Argumen kedua `useEffect` adalah daftar nilai yang diawasi, dan bentuknya menentukan KAPAN effect dijalankan: `[]` berarti sekali saja setelah komponen pertama muncul, `[id]` berarti sekali saat muncul plus setiap kali `id` berubah, dan tanpa array sama sekali berarti setiap selesai render. Dipakai kapan? `[]` untuk inisialisasi yang cuma perlu sekali, `[dep]` untuk mengambil ulang data ketika parameternya berganti — bentuk yang paling sering kamu tulis di kerja nyata. Jebakan pertama: tanpa array, sementara di dalam effect ada `setState`, kamu mendapat perulangan render tak berhenti dan tab browser membeku. Jebakan kedua yang lebih halus: menghapus sebuah variabel dari array supaya effect \"tidak jalan terus\" — effect lalu memakai nilai lama yang basi, dan gejalanya berupa data yang tidak pernah berubah meski URL sudah berganti. Aturan praktisnya: masukkan semua nilai dari luar effect yang dipakai di dalamnya, lalu kurangi jumlah pemicunya dengan cara lain.",
          "example": {
            "code": "useEffect(() => {\n  console.log(count);\n}, [count]);",
            "output": "Konsol saat halaman dibuka:\n0\n\nSetelah tombol tambah diklik dua kali:\n1\n2\n\nSaat state LAIN (misal nama) berubah:\n(tidak ada baris baru — count tidak berubah)",
            "note": "Bandingkan dengan `useEffect(() => console.log(count))` tanpa array: baris baru muncul pada SETIAP render, termasuk saat state yang tidak berhubungan berubah. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Komponen detail produk perlu menjalankan ulang effect-nya setiap kali produk yang dibuka berganti, tapi tidak pada render lain. Tulis satu `useEffect` yang isinya mencetak `id` ke konsol, dan atur argumen keduanya supaya effect itu jalan saat komponen muncul dan setiap kali nilai `id` berubah.",
          "starterCode": "// Tulis useEffect dengan dependency [id] di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "useEffect\\(\\s*\\(\\s*\\)\\s*=>\\s*\\{[\\s\\S]*\\}\\s*,\\s*\\[\\s*id\\s*\\]\\s*\\)",
              "message": "Effect butuh dua argumen: fungsinya, lalu daftar nilai yang diawasi. Isi daftarnya dengan `id` saja — array kosong membuat effect tidak pernah mengambil produk baru, dan tanpa array ia jalan di setiap render."
            }
          ],
          "solution": "useEffect(() => {\n  console.log(id);\n}, [id]);",
          susunKode: {
            question:
              "Jalankan useEffect dengan dependency array [id].",
            potongan: [
              "useEffect(() => {",
              "  console.log(id);",
              "}, [id]);",
            ],
            pengecoh: [
              "}, []);",
              "}, [id, name]);",
            ],
            pemisah: "\n",
            explanation:
              "Efek yang bergantung pada variabel `id` wajib mencantumkan `[id]` di array dependensi. Pengecoh array kosong `[]` menggoda tetapi menyebabkan efek hanya berjalan sekali saat mount dan mengabaikan perubahan id secara keliru.",
          },
        },
        {
          "kind": "step",
          "id": "react-5-3",
          "title": "Cleanup Function dalam useEffect",
          "explanation": "Fungsi pembersih (*cleanup function*) adalah fungsi yang dikembalikan (`return () => { ... }`) di dalam callback `useEffect`. Fungsi ini secara otomatis dieksekusi oleh React saat komponen dilepas dari layar (*unmount*) atau sebelum effect dijalankan kembali pada render berikutnya. Menulis fungsi cleanup sangat vital untuk membatalkan koneksi, menghentikan timer (`clearInterval`), atau menghapus event listener browser agar tidak terjadi kebocoran memori (*memory leak*). Jebakan umum adalah lupa melepaskan `addEventListener` yang telah dipasang.",
          "example": {
            "code": "useEffect(() => {\n  const timer = setInterval(() => {}, 1000);\n  return () => clearInterval(timer); // Cleanup\n}, []);",
            "output": "Konsol dengan cleanup (StrictMode, dev):\ntimer 1 dibuat\ntimer 1 dibersihkan\ntimer 2 dibuat\n→ satu timer berjalan\n\nKonsol tanpa cleanup:\ntimer 1 dibuat\ntimer 2 dibuat\n→ dua timer berjalan; angka di layar naik dua kali lebih cepat",
            "note": "Gejala lupa cleanup jarang berupa error — yang muncul justru \"aneh\": angka melompat dua-dua, atau pesan yang sama diterima dua kali. Itu sebabnya jebakan ini bisa lolos berhari-hari."
          },
          "instruction": "Komponen `Jam` di editor memasang `setInterval` tapi tidak pernah menghentikannya, jadi timer menumpuk setiap kali komponen dipasang ulang. Lengkapi effect-nya: kembalikan sebuah fungsi yang menghentikan `timer` itu memakai fungsi bawaan pasangan `setInterval`.",
          "starterCode": "function Jam() {\n  useEffect(() => {\n    const timer = setInterval(() => console.log(\"tik\"), 1000);\n\n    // tulis fungsi pembersihnya di bawah ini\n  }, []);\n\n  return <p>Jam berjalan</p>;\n}\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "return\\s*\\(\\s*\\)\\s*=>",
              "message": "Cleanup diberikan dengan MENGEMBALIKAN sebuah fungsi dari dalam effect. React memanggilnya sebelum effect berikutnya dan saat komponen dilepas."
            },
            {
              "pattern": "clearInterval\\(\\s*timer\\s*\\)",
              "message": "Hentikan timer-nya dengan `clearInterval()` beserta penanda yang dikembalikan `setInterval`. Tanpa ini, setiap kali komponen dipasang ulang timer baru menumpuk — dan angka di layar melompat dua kali lebih cepat tanpa penyebab yang kelihatan."
            }
          ],
          "solution": "function Jam() {\n  useEffect(() => {\n    const timer = setInterval(() => console.log(\"tik\"), 1000);\n\n    return () => clearInterval(timer);\n  }, []);\n\n  return <p>Jam berjalan</p>;\n}",
          susunKode: {
            potongan: [
              "return () =>",
              "clearInterval(timer);",
            ],
            pengecoh: [
              "return timer.stop();",
              "clearTimeout(timer);",
            ],
            pemisah: " ",
            explanation:
              "Cleanup function di `useEffect` mengembalikan fungsi `return () => clearInterval(timer)`. Pengecoh `clearTimeout` menggoda tetapi keliru karena timer interval harus dibersihkan dengan `clearInterval`. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-5-4",
          "title": "Fetch & AbortController",
          "explanation": "Pengambilan data asinkron (*data fetching*) dengan `fetch()` di dalam `useEffect` rawan mengalami masalah *race condition* jika pengguna berpindah halaman atau mengganti kata kunci pencarian dengan cepat sebelum respon API sebelumnya selesai. Untuk mengatasinya, kita menggunakan `AbortController` di dalam fungsi cleanup untuk membatalkan permintaan jaringan yang tidak lagi relevan. Pola ini memastikan bahwa data yang tampil di layar selalu berasal dari permintaan jaringan paling akhir. Jebakan umum adalah mengabaikan error pembatalan `AbortError` di blok catch.",
          "example": {
            "code": "useEffect(() => {\n  const controller = new AbortController();\n  fetch(url, { signal: controller.signal });\n  return () => controller.abort();\n}, [url]);",
            "output": "Pengguna mengetik \"ko\" lalu cepat menjadi \"kopi\":\n\nTanpa abort:\nrespons \"kopi\" tiba → layar benar\nrespons \"ko\"   tiba belakangan → layar KEMBALI ke hasil lama\n\nDengan abort:\nrequest \"ko\" dibatalkan (AbortError)\nlayar tetap menampilkan hasil \"kopi\"",
            "note": "Inilah race condition: yang menentukan isi layar bukan permintaan terakhir, tapi respons yang tiba paling akhir. Karena `abort()` melempar `AbortError`, blok catch-mu harus mengabaikan error jenis itu — kalau tidak, pengguna melihat pesan gagal yang tidak pernah benar-benar terjadi. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Untuk mencegah request diteruskan saat komponen sudah di-unmount, panggil metode `abort()` pada objek `controller` di dalam fungsi cleanup.",
          "starterCode": "// Tulis kode di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "controller\\.abort\\(\\s*\\)",
              "message": "Permintaan yang belum selesai dibatalkan lewat metode `abort()` pada controller-nya. Ini yang mencegah *race condition*: tanpa pembatalan, respons dari pencarian lama bisa tiba setelah yang baru dan menimpa hasil yang benar."
            }
          ],
          "solution": "controller.abort();",
          susunKode: {
            potongan: [
          "controller",
          ".abort();"
],
            pengecoh: [
          "myCtrl",
          ".stop();"
],
            pemisah: "",
            explanation:
              "Membatalkan `AbortController` dilakukan dengan memanggil `controller.abort()`. Pengecoh `.cancel()` dan `.stop()` menggoda pemula yang menebak nama fungsi, tetapi bukan nama metode resmi dari API AbortController Web standard di browser.",
          },
        },
        {
          "kind": "step",
          "id": "react-5-5",
          "title": "StrictMode Double-Render",
          "explanation": "Dalam mode pengembangan (*development mode*), pembungkus `React.StrictMode` secara sengaja menjalankan fungsi `useEffect` sebanyak dua kali (mount -> unmount -> mount) untuk setiap komponen yang baru muncul. Fitur ini dirancang khusus oleh tim React untuk membantu pengembang menemukan bug tersembunyi akibat fungsi cleanup yang tidak ditulis dengan benar. Memahami perilaku double-render ini penting agar kamu tidak panik saat melihat `console.log` di dalam effect tercetak dua kali selama masa dev. Jebakan pemula adalah mencoba mematikan StrictMode alih-alih memperbaiki cleanup function yang bermasalah.",
          "example": {
            "code": "// src/main.tsx — StrictMode dipasang di titik paling luar\nimport { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\n\ncreateRoot(document.getElementById('root')!).render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);",
            "output": "Konsol saat halaman dibuka (dev):\nmount Jam\nunmount Jam\nmount Jam\n\nKonsol pada build production:\nmount Jam",
            "note": "Urutan mount → unmount → mount itulah cara StrictMode menguji cleanup-mu. Kalau setelah dipasang StrictMode muncul dua timer berjalan atau dua koneksi terbuka, yang salah bukan StrictMode — cleanup effect-mu memang belum ada. Catatan jujur: panel preview di bawah tidak mengompilasi berkas ini, jadi kamu tidak akan melihat hasil visualnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
          },
          "instruction": "Berkas `src/main.tsx` sekarang merender `<App />` langsung tanpa pembungkus apa pun, jadi bug cleanup tidak pernah terdeteksi selama dev. Bungkus `<App />` dengan komponen React yang menyalakan pemeriksaan ekstra di mode development, lalu impor komponen itu dari `react`.",
          "starterCode": "import { createRoot } from 'react-dom/client';\nimport App from './App';\n\n// Bungkus <App /> dengan pemeriksa mode development\ncreateRoot(document.getElementById('root')).render(\n  <App />\n);\n",
          "language": "text",
          "tests": [
            {
              "pattern": "import\\s*\\{[^}]*\\bStrictMode\\b[^}]*\\}\\s*from\\s*['\"]react['\"]|React\\.StrictMode",
              "message": "Impor `StrictMode` dari `react` (atau pakai `React.StrictMode`). Tanpa impor, JSX `<StrictMode>` dianggap tag HTML tak dikenal."
            },
            {
              "pattern": "<(React\\.)?StrictMode>[\\s\\S]*<App\\s*/>[\\s\\S]*</(React\\.)?StrictMode>",
              "message": "`<App />` harus berada DI DALAM `<StrictMode>…</StrictMode>`. Menaruh StrictMode sebagai saudara (bukan pembungkus) tidak memeriksa apa pun."
            }
          ],
          "solution": "import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\n\ncreateRoot(document.getElementById('root')).render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);",
          susunKode: {
            potongan: [
              "import { StrictMode } from 'react';\nimport { createRoot } from ",
              "'react-dom/client';\nimport App from './App';\n\ncreateRoot(document.getElementById(",
              "'root')).render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);",
            ],
            pengecoh: [
              "import StrictMode from 'react';",
              "  <StrictModeApp />",
            ],
            pemisah: "",
            explanation:
              "StrictMode diimpor sebagai named import `{ StrictMode }` dari react dan membungkus `<App />`. Pengecoh default import `import StrictMode` menggoda tetapi keliru di modul React resmi yang mengekspornya sebagai named import.",
          },
        },
        {
          "kind": "step",
          "id": "react-5-6",
          "title": "'You Might Not Need an Effect'",
          "explanation": "Dokumentasi resmi React menekankan panduan 'You Might Not Need an Effect' untuk mengedukasi pengembang agar tidak menyalahgunakan `useEffect`. Banyak kasus yang biasanya diselesaikan dengan effect—seperti mentransformasi data untuk render, menangani event klik pengguna, atau mereset state saat props berubah—sebenarnya lebih bersih jika ditangani di event handler atau dihitung langsung saat render. Menghindari effect yang tidak perlu membuat performa aplikasi lebih cepat dan lebih mudah didebug. Jebakan umum adalah menggunakan `useEffect` untuk menyinkronkan dua state yang saling berhubungan.",
          "example": {
            "code": "// ❌ BUKAN EFFECT:\n// useEffect(() => setFullName(first + last), [first, last]);\n\n// ✅ CUKUP:\nconst fullName = first + ' ' + last;",
            "output": "Versi effect (❌):\nrender 1: fullName = \"\"          ← layar sempat kosong\neffect jalan → setFullName\nrender 2: fullName = \"Bimo Ares\"\n\nVersi hitung langsung (✅):\nrender 1: fullName = \"Bimo Ares\"",
            "note": "Dua render versus satu, dan versi effect punya satu momen di mana layar menampilkan nilai kosong. Pada daftar panjang, kedipan seperti ini yang membuat aplikasi terasa lambat padahal datanya sudah ada. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Hitung variabel boolean bernama `isAdult` langsung dari properti/state `age` (yang dianggap bernilai angka). Variabel ini bernilai true jika age 18 ke atas.",
          "starterCode": "// Tulis variabel isAdult di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s+isAdult\\s*=",
              "message": "Nilai turunan seperti ini dihitung langsung saat render sebagai variabel biasa — bukan disimpan di state lalu diperbarui lewat effect. Effect untuk hal seperti ini menambah satu render ekstra dan satu sumber bug baru."
            },
            {
              "pattern": "age\\s*>=\\s*18",
              "message": "Bandingkan umur dengan 18 memakai operator lebih-besar-atau-sama-dengan, supaya yang tepat 18 tahun ikut terhitung."
            }
          ],
          "solution": "const isAdult = age >= 18;",
          susunKode: {
            potongan: [
              "const isAdult =",
              "age >= 18;",
            ],
            pengecoh: [
              "age > 18;",
              "age == 18;",
            ],
            pemisah: " ",
            explanation:
              "Kalkulasi sederhana `const isAdult = age >= 18` dihitung langsung saat render tanpa `useEffect`. Pengecoh `age > 18` menggoda tetapi keliru karena mengabaikan usia persis 18 tahun yang seharusnya dianggap dewasa.",
          },
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
          "explanation": "Rules of Hooks ada dua: hook hanya boleh dipanggil di tingkat teratas fungsi (tidak di dalam `if`, loop, atau fungsi bersarang), dan hanya dari komponen React atau custom hook — bukan dari fungsi biasa atau event handler. Alasannya teknis dan penting: React tidak mengenali hook dari namanya, ia hanya menghitung URUTAN pemanggilan pada setiap render, lalu memasangkan hook ke-1 dengan state ke-1, hook ke-2 dengan state ke-2, dan seterusnya. Kalau sebuah hook dilewati karena berada di dalam `if` yang kali ini bernilai false, seluruh urutannya bergeser dan nilai state bisa tertukar antar hook. Kapan aturan ini terasa mengikat? Saat kamu ingin \"memakai state hanya kalau ada props tertentu\" — jalan keluarnya bukan menaruh hook di dalam `if`, tapi memanggil hook tanpa syarat lalu membuat kondisinya di dalam nilainya. Jebakannya: React memang melempar error `Rendered fewer hooks than expected`, tapi pesan itu muncul di render BERIKUTNYA, sering di komponen yang sama sekali tidak kamu sentuh, jadi sulit dilacak kalau kamu tidak tahu aturan ini.",
          "example": {
            "code": "function Profil({ login }) {\n  // ❌ hook di dalam if — jumlah hook berubah antar render\n  if (login) {\n    const [nama, setNama] = useState(\"\");\n  }\n\n  // ✅ hook selalu dipanggil, kondisinya yang diatur\n  const [nama2, setNama2] = useState(\"\");\n  const tampil = login ? nama2 : \"tamu\";\n  return <p>{tampil}</p>;\n}",
            "output": "Versi ❌ saat login berubah dari true ke false:\nError: Rendered fewer hooks than expected. This may be caused by an accidental early return statement.\n\nVersi ✅:\n<p>tamu</p>",
            "note": "Pesan errornya menyebut \"early return\", padahal penyebab paling sering justru hook di dalam `if` — keduanya sama-sama membuat jumlah hook berbeda antar render."
          },
          "instruction": "Buat komponen `Header` yang menyimpan tema tampilannya di state dengan nilai awal `dark`. Panggil hook-nya di tempat yang diizinkan Rules of Hooks, dan karena nilainya belum akan diubah di latihan ini, ambil saja nilainya (setter-nya tidak perlu). Komponennya cukup mengembalikan `<div>Header</div>`.",
          "starterCode": "// Tulis komponen Header di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "(function\\s+Header\\s*\\(|const\\s+Header\\s*=)",
              "message": "Belum ada komponen bernama `Header`. Hook hanya boleh dipanggil dari dalam komponen atau custom hook — memanggilnya di luar keduanya membuat React melempar \"Invalid hook call\"."
            },
            {
              "pattern": "const\\s*\\[\\s*theme\\s*[,\\]]",
              "message": "Ambil nilainya saja dengan destructuring array: `const [theme]`. Menulis `const theme = useState(\"dark\")` membuat `theme` berisi ARRAY dua elemen, sehingga `{theme}` di JSX mencetak sesuatu yang tidak kamu harapkan."
            },
            {
              "pattern": "useState\\(\\s*['\"]dark['\"]\\s*\\)",
              "message": "Beri nilai awal `\"dark\"` pada hook-nya. Nilai awal ini hanya dipakai pada render pertama — mengubahnya nanti tidak akan mengatur ulang state yang sudah ada."
            },
            {
              "pattern": "(if\\s*\\([^)]*\\)\\s*\\{?\\s*const\\s*\\[|for\\s*\\([^)]*\\)\\s*\\{?\\s*const\\s*\\[)",
              "mustNotMatch": true,
              "message": "Hook-nya tidak boleh berada di dalam `if` atau loop, meskipun kodenya terlihat jalan. Letakkan di baris pertama badan komponen, sebelum percabangan apa pun."
            }
          ],
          "solution": "function Header() {\n  const [theme] = useState('dark');\n  return <div>Header</div>;\n}",
          susunKode: {
            question:
              "Buat komponen Header yang menyimpan tema tampilannya di state dengan nilai awal gelap, dan panggil hook-nya di tempat yang diizinkan Rules of Hooks.",
            potongan: [
              "function Header() {",
              "  const [theme] = useState('dark');",
              "  return <div>Header</div>;",
              "}",
            ],
            pengecoh: [
              "  const theme = useState('dark');",
              "  const [theme] = useState('light');",
            ],
            pemisah: "\n",
            explanation:
              "Hook wajib dipanggil di tingkat teratas komponen tanpa terbungkus percabangan `if`. Pengecoh `if (true)` menggoda tetapi melanggar Rules of Hooks yang dapat mengacaukan urutan panggilan hook React di setiap render. Jebakan ini sangat berbahaya bagi stabilitas komponen.",
          },
        },
        {
          "kind": "step",
          "id": "react-6-2",
          "title": "Membuat Custom Hook useFetch",
          "explanation": "Custom hook adalah fungsi biasa yang namanya diawali `use` dan boleh memanggil hook lain di dalamnya — dengan itu, logika berulang seperti \"ambil data dari URL, simpan hasilnya, catat statusnya\" bisa dipindahkan keluar dari komponen. `useFetch` adalah contoh paling sering ditulis orang: di dalamnya ada `useState` untuk menampung data dan `useEffect` untuk mengambilnya, lalu nilai itu dikembalikan supaya komponen mana pun cukup menulis satu baris. Kapan kamu membuatnya? Begitu pola yang sama muncul di komponen kedua — sebelum itu, menulisnya langsung di komponen lebih jelas dibaca. Yang perlu kamu tahu: custom hook membagikan LOGIKA, bukan STATE. Dua komponen yang memanggil `useFetch` yang sama punya salinan state masing-masing, jadi jangan berharap keduanya otomatis sinkron — salah paham ini sering muncul saat orang mengira custom hook bisa dipakai sebagai state global. Jebakan kedua: tanpa penanda status, komponen membaca `data` yang masih `null` pada render pertama dan langsung gagal di `data.nama`.",
          "example": {
            "code": "// custom hook lain yang sama seringnya dipakai: useLocalStorage\nfunction useLocalStorage(kunci, awal) {\n  const [nilai, setNilai] = useState(() => {\n    const tersimpan = localStorage.getItem(kunci);\n    return tersimpan ? JSON.parse(tersimpan) : awal;   // objek WAJIB di-parse\n  });\n\n  useEffect(() => {\n    localStorage.setItem(kunci, JSON.stringify(nilai)); // dan di-stringify\n  }, [kunci, nilai]);\n\n  return [nilai, setNilai];   // bentuknya sengaja meniru useState\n}\n\n// pemakaiannya di komponen:\n// const [tema, setTema] = useLocalStorage(\"tema\", \"gelap\");",
            "output": "Kunjungan pertama:\ntema = \"gelap\"          (dari nilai awal)\n\nSetelah setTema(\"terang\") lalu halaman di-refresh:\ntema = \"terang\"        (dibaca kembali dari localStorage)\n\nKalau JSON.stringify dilupakan untuk objek:\ntema = \"[object Object]\"",
            "note": "Perhatikan bentuk kembaliannya: array `[nilai, setter]` supaya pemakaiannya terasa seperti `useState`. Meniru bentuk hook bawaan adalah kebiasaan yang membuat custom hook mudah dipakai orang lain. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Pola \"ambil data dari sebuah URL\" sudah ditulis ulang di tiga komponen. Pindahkan ke satu custom hook: buat fungsi bernama `useFetch` yang menerima `url`, menyimpan hasilnya di state bernama `data` (nilai awal `null`), mengambil datanya di dalam sebuah effect yang dijalankan ulang ketika `url` berubah, lalu mengembalikan `data` itu.",
          "starterCode": "// Tulis custom hook useFetch di bawah ini.\n// Kerangkanya: state untuk data → effect untuk mengambil → kembalikan datanya.\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "(function\\s+useFetch\\s*\\(\\s*url|const\\s+useFetch\\s*=\\s*\\(?\\s*url)",
              "message": "Namanya wajib diawali `use` — itulah yang membuat plugin ESLint React memberlakukan Rules of Hooks padanya. Fungsi bernama `fetchData` yang memanggil `useState` di dalamnya tidak diperiksa siapa pun, dan itu sumber bug yang sulit dilacak."
            },
            {
              "pattern": "useState\\(\\s*null\\s*\\)",
              "message": "Data hasil jaringan belum ada saat render pertama, jadi state-nya dimulai dari `null`. Nilai awal inilah yang harus diperiksa komponen sebelum membaca isinya."
            },
            {
              "pattern": "useEffect\\(",
              "message": "Pengambilan datanya adalah side effect, jadi letakkan di dalam `useEffect` — bukan langsung di badan hook. Memanggil `fetch` di badan hook membuatnya berjalan lagi di setiap render."
            },
            {
              "pattern": "\\[\\s*url\\s*\\]",
              "message": "Masukkan `url` ke dependency array supaya data diambil ulang saat URL-nya berganti. Dengan `[]`, hook ini akan terus menampilkan data alamat pertama meski komponen dipakai untuk alamat lain."
            },
            {
              "pattern": "return\\s+data",
              "message": "Kembalikan `data` dari hook-nya — tanpa itu, komponen pemanggil tidak mendapat apa pun. Di proyek nyata biasanya dikembalikan sebagai object `{ data, loading, error }`."
            }
          ],
          "solution": "function useFetch(url) {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then((r) => r.json())\n      .then(setData);\n  }, [url]);\n\n  return data;\n}",
          susunKode: {
            potongan: [
              "function useFetch(url) {\n  const [data, setData] = useState(",
              "null);\n\n  useEffect(() => {\n    fetch(url)\n      .then((r) => ",
              "r.json())\n      .then(setData);\n  }, [url]);\n\n  return data;\n}",
            ],
            pengecoh: [
              "function getFetch(url) {",
              "  return null;",
            ],
            pemisah: "",
            explanation:
              "Custom hook diawali awalan `use` seperti `useFetch` dan mengembalikan state data. Pengecoh `getFetch` menggoda tetapi tidak dikenali React sebagai hook sehingga tidak bisa memanggil hook lain di dalamnya secara aman.",
          },
        },
        {
          "kind": "step",
          "id": "react-6-3",
          "title": "useRef: Nilai Persist Tanpa Render & Akses DOM",
          "explanation": "Hook `useRef` mengembalikan sebuah objek ref mutabel dengan properti `.current` yang nilainya bertahan di antara siklus render tanpa memicu re-render UI saat nilainya diubah. Use case utama `useRef` adalah untuk mengakses dan memanipulasi elemen DOM secara langsung (seperti memberi fokus pada input via `inputRef.current.focus()`) atau menyimpan nilai kredensial seperti ID timer. Memahami perbedaan `useRef` dan `useState` penting agar kamu tahu kapan butuh update UI dan kapan hanya butuh menyimpan nilai internal. Jebakan umum adalah mencoba merender atribut `ref.current` di dalam JSX untuk elemen yang berubah-ubah.",
          "example": {
            "code": "const inputRef = useRef(null);\nconst focusInput = () => inputRef.current.focus();\nreturn <input ref={inputRef} />;",
            "output": "Sebelum tombol diklik:\ninputRef.current → <input>\ndocument.activeElement → <body>\n\nSetelah tombol diklik:\ndocument.activeElement → <input>   (kursor berkedip di dalam kotak)",
            "note": "Pada render PERTAMA `inputRef.current` masih `null` — React baru mengisinya setelah elemennya benar-benar ada di layar. Karena itu memanggil `.focus()` langsung di badan komponen menghasilkan \"Cannot read properties of null\"; tempatnya di dalam effect atau event handler. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Deklarasikan variabel `inputRef` dan gunakan hook yang tepat untuk menyimpannya dengan nilai awal `null`.",
          "starterCode": "// Tulis useRef di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "useRef\\(\\s*null\\s*\\)",
              "message": "Ref dibuat dengan `useRef(<nilai awal>)`, dan untuk ref DOM nilai awalnya `null` karena elemennya belum ada saat render pertama."
            },
            {
              "pattern": "const\\s+inputRef\\s*=",
              "message": "Simpan hasilnya ke variabel — konvensinya berakhiran `Ref`. Ingat: mengubah `ref.current` TIDAK memicu render, dan justru itulah gunanya."
            }
          ],
          "solution": "const inputRef = useRef(null);",
          susunKode: {
            potongan: [
              "const ",
              "inputRef = ",
              "useRef(null);"
],
            pengecoh: [
              "const myRef = ",
              "useState(null);"
],
            pemisah: "",
            explanation:
              "Membuat referensi DOM di komponen fungsi menggunakan `useRef(null)`. Pengecoh `createRef` menggoda tetapi akan membuat objek ref baru di setiap re-render alih-alih mempertahankan referensi yang sama secara konsisten.",
          },
        },
        {
          "kind": "step",
          "id": "react-6-4",
          "title": "useMemo & useCallback",
          "explanation": "`useMemo` dan `useCallback` adalah Hook yang disediakan React untuk melakukan optimasi performa melalui teknik memoization. `useMemo` meng-cache hasil perhitungan komputasi yang berat, sedangkan `useCallback` meng-cache referensi fungsi agar tidak dibuat ulang pada setiap render. Namun, kedua hook ini tidak boleh digunakan secara sembarangan pada semua fungsi karena overhead alokasi memorinya justru bisa membuat aplikasi lebih lambat jika kodenya sederhana. Jebakan umum adalah membungkus seluruh fungsi event handler dengan `useCallback` tanpa alasan optimasi yang terukur.",
          "example": {
            "code": "const total = useMemo(() => hitungMahal(items), [items]);",
            "output": "Konsol (hitungMahal mencetak \"menghitung...\" setiap kali dipanggil):\n\nrender 1 (items baru)   → menghitung...\nrender 2 (ketik di input, items sama) → (tidak ada baris baru)\nrender 3 (items berubah) → menghitung...",
            "note": "Tanpa `useMemo`, baris \"menghitung...\" muncul di SETIAP render — termasuk saat kamu hanya mengetik di input yang tidak berhubungan. Itu gejala yang membenarkan pemakaian useMemo; tanpa gejala itu, useMemo hanya menambah kerja. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Fungsi `hitung(data)` berat dan hasilnya hanya berubah kalau `data` berubah, tapi sekarang ia dijalankan ulang setiap kali komponen render. Bungkus pemanggilannya dengan hook memoization yang tepat, dan tentukan pemicu perhitungan ulangnya hanya pada `data`.",
          "starterCode": "// Tulis useMemo di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "useMemo\\(\\s*\\(\\s*\\)\\s*=>",
              "message": "`useMemo` menerima FUNGSI sebagai argumen pertama, bukan hasil perhitungannya. Menulis `useMemo(hitung(data), ...)` menjalankan perhitungannya di setiap render — persis yang ingin dihindari."
            },
            {
              "pattern": "hitung\\(\\s*data\\s*\\)",
              "message": "Perhitungannya ditulis DI DALAM fungsi yang kamu berikan ke `useMemo`, lalu hasilnya dikembalikan. Bentuk `() => hitung(data)` berarti \"jalankan ini nanti kalau perlu\" — bedanya besar dengan `hitung(data)` yang berjalan sekarang."
            },
            {
              "pattern": "\\[\\s*data\\s*\\]",
              "message": "Argumen kedua adalah dependency array. Isi dengan nilai yang mempengaruhi hasilnya; array kosong berarti hasilnya dibekukan selamanya, dan tanpa array sama sekali `useMemo` tidak ada gunanya."
            }
          ],
          "solution": "useMemo(() => hitung(data), [data]);",
          susunKode: {
            question:
              "Memoize hasil perhitungan berat dengan useMemo.",
            potongan: [
          "useMemo(",
          "() => hitung(data), ",
          "[data]);"
],
            pengecoh: [
          "useCallback(",
          "[; "
],
            pemisah: "",
            explanation:
              "Menyimpan hasil kalkulasi berat menggunakan `useMemo(() => hitung(data), [data])`. Pengecoh `useCallback` menggoda tetapi digunakan untuk menyimpan instansi fungsi, bukan nilai hasil kalkulasi eksekusinya. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-6-5",
          "title": "Membaca Hooks Library Pihak Ketiga",
          "explanation": "Sebagian besar hook yang kamu pakai di kerja nyata ditulis orang lain (`useSWR`, `useDebounce`, `useMediaQuery`, `useOnClickOutside`), jadi keterampilan yang sebenarnya dinilai adalah membaca dokumentasinya lalu tahu bentuk kembaliannya. Ada dua bentuk yang dominan: TUPLE seperti hook bawaan (`const [nilai, setNilai] = useLocalStorage(...)`) dan OBJECT seperti hook data (`const { data, isLoading } = useSWR(...)`). Kapan bedanya penting? Saat kamu salah menebak: membongkar object dengan kurung siku menghasilkan `undefined` tanpa pesan error apa pun, dan halamanmu diam-diam kosong. Jebakan berikutnya adalah nama propertinya yang tidak seragam antar library — `isLoading`, `loading`, dan `isPending` berarti hal yang sama tetapi hanya satu yang benar untuk library yang kamu pakai. Karena itu kebiasaan membuka dokumentasi jauh lebih berguna daripada menghafal, dan itulah yang dilatih di step ini.",
          "example": {
            "code": "// dokumentasi usehooks-ts menyatakan useLocalStorage MENGEMBALIKAN TUPLE\nconst [tema, setTema] = useLocalStorage(\"tema\", \"gelap\");\n\n// ❌ bentuk yang salah tebak untuk hook yang sama:\n// const { tema } = useLocalStorage(\"tema\", \"gelap\");",
            "output": "Bentuk tuple (benar):\ntema = \"gelap\"\n\nBentuk object (salah tebak):\ntema = undefined\n→ lalu di layar: \"Cannot read properties of undefined\" saat nilainya dipakai",
            "note": "Tidak ada pesan error yang menyebut \"kamu salah membongkar\" — yang muncul cuma `undefined`. Itu sebabnya baris pertama yang dibaca dari dokumentasi sebuah hook adalah bentuk nilai kembaliannya. Catatan jujur: library pihak ketiga tidak terpasang di panel preview, jadi potongan ini tidak dijalankan; tesnya tetap bisa lulus."
          },
          "instruction": "Dokumentasi SWR menyebut: `useSWR(kunci, fetcher)` mengembalikan sebuah OBJECT berisi antara lain `data` dan `isLoading`. Panggil hook itu dengan kunci `'/api/users'` dan fungsi `fetcher`, lalu ambil kedua properti itu dengan bentuk destructuring yang sesuai bentuk kembaliannya.",
          "starterCode": "// Anggap fungsi fetcher sudah tersedia:\n// const fetcher = (url) => fetch(url).then((r) => r.json());\n\n// Panggil useSWR dan ambil data + isLoading di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s*\\{[^}]*\\bdata\\b[^}]*\\}\\s*=",
              "message": "Dokumentasinya menyebut nilai kembaliannya OBJECT, jadi bongkar dengan kurung kurawal. Memakai kurung siku (`const [data] = ...`) tidak menghasilkan error apa pun — isinya cuma `undefined`, dan itu jauh lebih sulit dilacak daripada error."
            },
            {
              "pattern": "isLoading\\s*[,}]",
              "message": "Ambil juga penanda status memuatnya. Nama persisnya berbeda antar library (`isLoading` di SWR, `isPending` di TanStack Query versi baru, `loading` di beberapa hook lama), jadi yang dipakai selalu yang tertulis di dokumentasi versi itu."
            },
            {
              "pattern": "useSWR\\s*\\(\\s*['\"]/api/users['\"]\\s*,",
              "message": "Panggil `useSWR` dengan dua argumen: kuncinya (biasanya URL-nya sendiri) lalu fungsi pengambil datanya. Kunci itu juga dipakai SWR sebagai identitas cache — dua komponen dengan kunci sama berbagi satu hasil."
            },
            {
              "pattern": ",\\s*fetcher\\s*\\)",
              "message": "Argumen kedua adalah fungsi `fetcher` yang sudah tersedia di editor. Sebut namanya saja tanpa tanda kurung: kamu memberikan fungsinya kepada SWR, bukan hasil pemanggilannya."
            }
          ],
          "solution": "const { data, isLoading } = useSWR('/api/users', fetcher);",
          susunKode: {
            potongan: [
              "const { data, isLoading } =",
              "useSWR('/api/users',",
              "fetcher);",
            ],
            pengecoh: [
              "useSWR('/api/users');",
              "useSWR(fetcher);",
            ],
            pemisah: " ",
            explanation:
              "Penggunaan pustaka SWR dipanggil via `useSWR('/api/users', fetcher)`. Pengecoh tanpa fetcher menggoda tetapi akan menyebabkan error saat SWR mencoba mengambil data tanpa fungsi pengambil data. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
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
              "question": "Kotak pencarian memanggil API setiap kali satu huruf diketik, sehingga satu kata \"kopi gayo\" menghasilkan 9 request. Hook seperti apa yang tepat dipakai, dan apa yang ia lakukan?",
              "choices": [
                "useMemo — menyimpan hasil pencarian di memori supaya request kedua tidak perlu",
                "useDebounce — menunda pemakaian nilai input sampai pengguna berhenti mengetik beberapa ratus milidetik",
                "useRef — menyimpan kata kunci tanpa memicu render sehingga API tidak dipanggil",
                "useEffect tanpa dependency array — supaya effect-nya berjalan satu kali saja"
              ],
              "answerIndex": 1,
              "explanation": "`useDebounce` mengembalikan versi \"tertunda\" dari nilai yang kamu berikan; effect pencarianmu bergantung pada nilai tertunda itu, jadi API baru dipanggil setelah pengguna berhenti mengetik. `useMemo` menggoda karena terdengar seperti menghemat pekerjaan, tapi ia hanya menyimpan hasil perhitungan di render yang sama — request-nya tetap terkirim. `useRef` memang tidak memicu render, tapi nilainya juga tidak memicu pencarian ulang sama sekali. Dan `useEffect` tanpa dependency array justru berjalan di SETIAP render, bukan sekali."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Dua komponen berbeda sama-sama memanggil custom hook `useCounter()` yang di dalamnya ada `useState(0)`. Salah satu komponen menaikkan angkanya. Apa yang terjadi pada komponen yang lain?",
              "choices": [
                "Angkanya ikut naik, karena custom hook membagikan state yang sama",
                "Angkanya tetap, karena setiap pemanggilan hook membuat state-nya sendiri",
                "React melempar error karena satu hook dipakai dua komponen",
                "Angkanya ikut naik hanya kalau kedua komponen bersaudara"
              ],
              "answerIndex": 1,
              "explanation": "Custom hook membagikan LOGIKA, bukan state. Setiap komponen yang memanggilnya mendapat salinan state sendiri — sama seperti dua komponen yang masing-masing menulis `useState(0)`. Pilihan pertama menggoda karena inilah salah paham paling umum tentang custom hook, dan orang yang mempercayainya biasanya memakai custom hook sebagai pengganti state global lalu bingung kenapa datanya tidak pernah sinkron. Untuk state yang benar-benar dibagi, yang dipakai Context atau library seperti Zustand — materi modul berikutnya."
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
            "code": "// user hanya dipakai di UserProfile, tapi harus lewat dua perantara\nfunction App() {\n  const user = { name: \"Bimo\" };\n  return <Layout user={user} />;\n}\n\nfunction Layout({ user }) {      // tidak memakai user\n  return <Sidebar user={user} />;\n}\n\nfunction Sidebar({ user }) {     // juga tidak memakai user\n  return <UserProfile user={user} />;\n}\n\nfunction UserProfile({ user }) {\n  return <div>{user.name}</div>;  // yang benar-benar butuh\n}",
            "output": "Yang tampil di layar:\n<div>Bimo</div>\n\nBiaya yang tidak terlihat: menambah satu data baru (misal `theme`) berarti menyunting 4 berkas, dan menghapus props di satu perantara membuat `user` menjadi undefined di ujung rantai.",
            "note": "Perhatikan `Layout` dan `Sidebar`: keduanya menerima dan meneruskan `user` tanpa pernah memakainya. Itulah prop drilling — dan itu juga sebabnya jarak 1–2 level BUKAN masalah: yang bikin sakit adalah perantara yang tidak berkepentingan."
          },
          "instruction": "Buatlah sebuah komponen kosong bernama `UserProfile` yang mendestrukturisasi properti `user` dari objek props yang diterimanya.",
          "starterCode": "// Tulis komponen UserProfile di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "function\\s+UserProfile\\s*\\(\\s*\\{\\s*user\\s*\\}\\s*\\)\\s*\\{",
              "message": "Buat komponen `UserProfile` yang membongkar props `user` di parameternya (`{ user }`). Komponen inilah ujung rantai yang benar-benar memakai datanya — sisanya cuma jalur lewat."
            }
          ],
          "solution": "function UserProfile({ user }) {\n  return <div>{user.name}</div>;\n}",
          susunKode: {
            potongan: [
              "function UserProfile({ user }) {",
              "  return <div>{user.name}</div>;",
              "}",
            ],
            pengecoh: [
              "function UserProfile(props) {",
              "function UserProfile({ data }) {",
            ],
            pemisah: "\n",
            explanation:
              "Prop dibongkar dengan destructuring `{ user }`. Pengecoh `props` tanpa destructuring menggoda tetapi membuat `user.name` menjadi undefined karena `props.user.name` yang harus dipanggil di dalam komponen ini. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-7-2",
          "title": "createContext, Provider, useContext",
          "explanation": "Membuat React Context membutuhkan tiga langkah utama: mendeklarasikan objek context dengan `createContext()`, membungkus pohon komponen dengan `<MyContext.Provider value={...}>`, dan membaca nilainya di komponen anak menggunakan Hook `useContext()`. Pola ini menciptakan area distribusi data global yang bersih di mana komponen anak dapat mengakses nilai atau fungsi pembaru tanpa perlu props perantara. Jebakan yang sering terjadi adalah lupa memberikan atribut `value` pada komponen Provider yang menyebabkan komponen anak menerima nilai `undefined`.",
          "example": {
            "code": "const ThemeContext = createContext(\"light\");\nfunction App() {\n  return <ThemeContext.Provider value=\"dark\"><Card /></ThemeContext.Provider>;\n}",
            "output": "Card dan seluruh keturunannya bisa mengakses nilai 'dark'.",
            "note": "Provider menentukan nilai data global yang tersedia di cabang komponen tersebut. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Objek `ThemeContext` sudah dibuat dengan `createContext`. Sekarang bagikan nilai `dark` ke seluruh cabang di bawahnya: bungkus `<Card />` dengan komponen pembagi nilai milik context itu, dan isi nilainya lewat props yang namanya sudah ditentukan React.",
          "starterCode": "// Tulis Provider di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<ThemeContext\\.Provider",
              "message": "Nilai context dibagikan lewat komponen `Provider` milik context itu (`<NamaContext.Provider>`). Tanpa Provider, `useContext` mengembalikan nilai default yang diberikan saat `createContext`."
            },
            {
              "pattern": "value=[\"']dark[\"']",
              "message": "Isi yang dibagikan diberikan lewat props `value`. Ini nama props yang tetap — bukan `theme` atau nama lain."
            },
            {
              "pattern": "<Card\\s*/>[\\s\\S]*</ThemeContext\\.Provider>",
              "message": "Komponen yang ingin membaca context harus berada DI DALAM Provider. Komponen di luarnya tidak akan melihat nilai itu — penyebab paling sering `undefined` saat memakai context."
            }
          ],
          "solution": "<ThemeContext.Provider value=\"dark\"><Card /></ThemeContext.Provider>",
          susunKode: {
            potongan: [
          "<ThemeContext.Provider ",
          "value=\"dark\"><Card /></ThemeContext.Provider>"
],
            pengecoh: [
          "<ThemeContext.Consumer ",
          "value=\"light\"><Card /></ThemeContext.Provider>"
],
            pemisah: "",
            explanation:
              "Penyedia Context menggunakan komponen `<ThemeContext.Provider value=\"dark\">`. Pengecoh `<ThemeContext>` tanpa `.Provider` menggoda tetapi keliru di API resmi React Context yang berlaku di komponen. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-7-3",
          "title": "Pola Context + useReducer",
          "explanation": "Menggabungkan React Context dengan Hook `useReducer` adalah pola tangguh untuk mengelola state global yang memiliki aturan perubahan logika bisnis yang kompleks (seperti keranjang belanja atau alur checkout). `useReducer` mengisolasi seluruh perubahan state ke dalam satu fungsi reducer berbasis aksi (`dispatch({ type: 'ADD_ITEM' })`), sementara Context menyebarkan state dan fungsi dispatch tersebut ke seluruh aplikasi. Pola ini merupakan bentuk miniatur dari Redux tanpa perlu memasang library tambahan. Jebakan umum adalah memutasi state secara langsung di dalam fungsi reducer alih-alih mengembalikan objek state baru.",
          "example": {
            "code": "const [state, dispatch] = useReducer(todoReducer, []);",
            "output": "dispatch({ type: 'ADD_TODO', payload: 'Belajar' }) memperbarui state global secara terprediksi.",
            "note": "Pola ini menyerupai cara kerja Redux tanpa perlu memasang library luar. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Panggil hook `useReducer` dengan memberikan argumen `reducer` dan status awal `initial`. Lakukan destructuring untuk mengambil `state` dan fungsi `dispatch`.",
          "starterCode": "// Tulis useReducer di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "useReducer\\(\\s*reducer\\s*,",
              "message": "`useReducer` menerima fungsi reducer sebagai argumen pertama dan state awal sebagai argumen kedua."
            },
            {
              "pattern": "const\\s*\\[\\s*state\\s*,\\s*dispatch\\s*\\]",
              "message": "Hasilnya array dua elemen, diambil dengan destructuring array: state saat ini, lalu fungsi pengirim aksi. Konvensi namanya `dispatch` — dan ia dikirimi OBJECT aksi (`{ type: 'tambah' }`), bukan nilai baru."
            },
            {
              "pattern": "useReducer\\([^)]*initial",
              "message": "Berikan state awalnya sebagai argumen kedua."
            }
          ],
          "solution": "const [state, dispatch] = useReducer(reducer, initial);",
          susunKode: {
            question:
              "Deklarasikan state dan dispatch dengan useReducer.",
            potongan: [
              "const [state, ",
              "dispatch] = useReducer(",
              "reducer, initial);",
            ],
            pengecoh: [
              "const [state, dispatch] = useState(reducer, initial);",
              "const [state, dispatch] = useStore(reducer, initial);",
            ],
            pemisah: "",
            explanation:
              "Hook reducer dideklarasikan via `useReducer(reducer, initial)`. Pengecoh `useState` menggoda tetapi tidak menerima fungsi reducer sebagai argumen pertamanya secara standar. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-7-4",
          "title": "Context untuk Theme, Auth, dan Bahasa",
          "explanation": "Penggunaan Context yang paling umum di dunia kerja adalah untuk mengelola state tema aplikasi (Light/Dark Mode) dan state autentikasi pengguna (status login, data profil, token JWT). Dengan menyembunyikan logika penyimpanan token dan pengubahan tema di dalam Provider khusus, komponen UI seperti Navbar atau Avatar dapat membaca status login secara instan di mana saja. Pola ini menjaga agar logika autentikasi terisolasi dengan rapi. Jebakan umum adalah menyatukan Context Theme dan Context Auth ke dalam satu Provider tunggal yang menyebabkan re-render yang tidak perlu.",
          "example": {
            "code": "const { theme, toggleTheme } = useTheme();",
            "output": "Di dalam Navbar:\ntheme = \"gelap\"\n→ <nav class=\"gelap\">\n\nSetelah toggleTheme() dipanggil:\ntheme = \"terang\"\n→ <nav class=\"terang\">   (seluruh komponen pembaca context ikut berubah)",
            "note": "`useTheme()` adalah custom hook satu baris yang isinya `useContext(ThemeContext)`. Gunanya bukan menghemat huruf: kalau nanti sumber tema berpindah ke Zustand, yang diubah hanya isi hook itu — komponen pemakainya tidak perlu disentuh sama sekali. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Panggil custom hook `useAuth()` dan lakukan destructuring pada hasil objeknya untuk mendapatkan properti `user` serta fungsi `logout`.",
          "starterCode": "// Tulis useAuth di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "const\\s*\\{[^}]*user[^}]*\\}\\s*=\\s*useAuth\\(",
              "message": "Custom hook yang membungkus context biasanya mengembalikan object, jadi ambil isinya dengan destructuring object. Pola `useAuth()` inilah yang dipakai di proyek nyata supaya komponen tidak perlu tahu context mana yang dibaca."
            },
            {
              "pattern": "logout\\s*[,}]",
              "message": "Ambil juga fungsi keluarnya. Menaruh fungsi di dalam nilai context adalah cara membagikan aksi, bukan cuma data."
            }
          ],
          "solution": "const { user, logout } = useAuth();",
          susunKode: {
            question:
              "Gunakan custom hook useAuth() untuk mengambil user & logout.",
            potongan: [
              "const { user,",
              " logout } ",
              "= useAuth();",
            ],
            pengecoh: [
              "const [user, logout] = useAuth();",
              "const { user, logout } = useAuthContext();",
            ],
            pemisah: "",
            explanation:
              "Hook `useAuth()` mengembalikan objek `{ user, logout }`. Pengecoh pembongkaran array `[user, logout]` menggoda jika keliru tertukar dengan penulisan useState di React. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-7-5",
          "title": "Perangkap Performa Context",
          "explanation": "Salah satu perangkap utama React Context adalah bahwa semua komponen yang memanggil `useContext(MyContext)` akan selalu di-re-render setiap kali nilai di atribut `value` Provider berubah, sekecil apapun perubahannya. Untuk mengoptimalkannya, kita harus memisahkan Context menjadi beberapa Provider yang lebih spesifik (misalnya memisahkan `UserContext` dan `ThemeContext`) atau memisahkan state dan fungsi dispatch ke dalam Context terpisah. Pola ini mencegah terjadinya re-render massal yang dapat memperlambat aplikasi. Jebakan umum adalah membuat objek baru langsung di inline prop `value={{ user, setUser }}` tanpa di-memoize.",
          "example": {
            "code": "// ❌ satu context untuk segalanya — objek value BARU di setiap render\n<AppContext.Provider value={{ user, theme, notif }}>\n\n// ✅ dipisah per kecepatan perubahan, dan nilainya dimemoize\nconst nilaiUser = useMemo(() => ({ user, setUser }), [user]);\n<UserContext.Provider value={nilaiUser}>\n  <NotifContext.Provider value={notif}>",
            "output": "Versi ❌ — satu notifikasi masuk:\nrender: Navbar, Sidebar, TabelProduk, Footer   (semuanya, padahal cuma notif berubah)\n\nVersi ✅ — satu notifikasi masuk:\nrender: BelNotifikasi",
            "note": "Dua sebab re-render massal yang berbeda: (1) satu context menampung data yang kecepatan perubahannya beda-beda, dan (2) `value={{ ... }}` membuat OBJEK BARU setiap render, sehingga pembacanya dianggap perlu render ulang meski isinya sama. Keduanya harus diperbaiki, bukan salah satu. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Buat sebuah struktur JSX di mana `AuthProvider` membungkus `ThemeProvider` untuk memisahkan konteks state (auth state dan theme state) agar pembaruan bisa dikelola secara terpisah.",
          "starterCode": "// Tulis Provider di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<AuthProvider>[\\s\\S]*<ThemeProvider>",
              "message": "Susun dua Provider terpisah, bukan satu Provider berisi semua data: `AuthProvider` di luar, `ThemeProvider` di dalamnya. Urutannya penting kalau yang di dalam membaca nilai dari yang di luar."
            },
            {
              "pattern": "</ThemeProvider>[\\s\\S]*</AuthProvider>",
              "message": "Tutup keduanya dengan urutan terbalik dari pembukanya — yang di dalam ditutup lebih dulu. Menyilangkan tag penutup membuat JSX menolak kodenya dengan pesan tentang tag yang tidak cocok."
            },
            {
              "pattern": "<App\\s*/>",
              "message": "Letakkan `<App />` di bagian paling dalam, supaya seluruh aplikasi bisa membaca kedua context itu. Komponen di LUAR Provider tidak akan melihat nilainya — penyebab `undefined` yang paling sering saat memakai context."
            }
          ],
          "solution": "<AuthProvider>\n  <ThemeProvider>\n    <App />\n  </ThemeProvider>\n</AuthProvider>",
          susunKode: {
            question:
              "Susun Provider bertingkat AuthProvider dan ThemeProvider.",
            potongan: [
              "<AuthProvider>\n  <ThemeProvider>",
              "\n    <App />\n  ",
              "</ThemeProvider>\n</AuthProvider>",
            ],
            pengecoh: [
              "<AuthProvider ThemeProvider><App /></AuthProvider ThemeProvider>;",
              "<ThemeProvider><AuthProvider><App /></AuthProvider></ThemeProvider>;",
            ],
            pemisah: "",
            explanation:
              "Provider bertingkat disusun secara bersarang `<AuthProvider>` membungkus `<ThemeProvider>`. Pengecoh menyatukan dua nama tag menggoda tetapi melanggar sintaks dasar JSX di React. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-7-6",
          "title": "Zustand: State Global Ringan Industri",
          "explanation": "Zustand adalah pustaka manajemen state global modern yang sangat populer di ekosistem React sebagai alternatif dari Context dan Redux. Zustand tidak membutuhkan bungkus `<Provider>` di sekitar pohon komponen dan memiliki performa yang sangat tinggi karena menggunakan selektor presisi untuk membaca state (`useStore(state => state.bears)`). Memahami kapan menggunakan Context dan kapan beralih ke Zustand merupakan keputusan arsitektur penting dalam proyek React industri. Jebakan pemula adalah memicu re-render berlebih di Zustand karena membaca seluruh objek store tanpa fungsi selektor.",
          "example": {
            "code": "import { create } from \"zustand\";\nconst useStore = create((set) => ({\n  bears: 0,\n  increase: () => set((state) => ({ bears: state.bears + 1 })),\n}));",
            "output": "Pemakaian di komponen:\nconst bears = useStore((s) => s.bears);   → 0\nklik tombol → increase()\nconst bears = useStore((s) => s.bears);   → 1\n\nKomponen yang hanya membaca s.honey: TIDAK ikut render.",
            "note": "Perhatikan fungsi selektor `(s) => s.bears`: itulah alasan Zustand hemat render. Menulis `const state = useStore()` tanpa selektor membuat komponenmu render ulang setiap kali BAGIAN MANA PUN dari store berubah — kembali seperti context raksasa yang ingin dihindari. Catatan jujur: paket `zustand` tidak tersedia di panel preview, jadi potongan ini tidak dijalankan di sini."
          },
          "instruction": "Gunakan fungsi `create` dari library Zustand untuk membuat sebuah store bernama `useStore`. State awalnya berisi nilai `count` sebesar 0.",
          "starterCode": "// Tulis create Zustand di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "create\\(",
              "message": "Store Zustand dibuat dengan memanggil `create(...)`."
            },
            {
              "pattern": "\\(?set\\)?\\s*=>",
              "message": "Argumennya sebuah fungsi yang menerima `set` — fungsi itulah yang nanti kamu pakai untuk mengubah state di dalam action."
            },
            {
              "pattern": "\\{\\s*count\\s*:\\s*0\\s*\\}",
              "message": "Fungsi itu mengembalikan OBJECT berisi state awal. Perhatikan tanda kurung pembungkus di sekitar kurawal: tanpa itu, JavaScript menganggap kurawal sebagai badan fungsi dan store-mu kosong."
            },
            {
              "pattern": "const\\s+useStore\\s*=",
              "message": "Simpan hasilnya sebagai hook — konvensinya berawalan `use` supaya aturan lint hook tetap berlaku."
            }
          ],
          "solution": "const useStore = create((set) => ({ count: 0 }));",
          susunKode: {
            potongan: [
              "const useStore = ",
              "create(",
              "(set) => ({ count: 0 }));"
],
            pengecoh: [
              "const myStore = ",
              "createStore("
],
            pemisah: "",
            explanation:
              "Store Zustand dibuat dengan `create((set) => ({ count: 0 }))`. Pengecoh `createStore` menggoda pengembang Redux tetapi keliru di API utama Zustand yang menggunakan fungsi create. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
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
            "output": "Tiga kemungkinan tampilan dari komponen yang sama:\n\nsedang memuat  → <p>Memuat data...</p>\ngagal jaringan → <p>Gagal memuat!</p>\nberhasil       → <div>Kopi Gayo</div>",
            "note": "Urutannya tidak boleh ditukar: kalau baris `data.name` dijalankan sebelum pemeriksaan loading, `data` masih `null` dan komponenmu melempar \"Cannot read properties of null\". Keadaan keempat yang sering terlupa: berhasil tapi datanya KOSONG — daftar kosong perlu pesannya sendiri, bukan layar hampa."
          },
          "instruction": "Komponen `Profil` di editor sudah menangani keadaan gagal dan berhasil, tapi pada render pertama `data` masih `null` sehingga barisnya melempar error. Tambahkan penanganan keadaan memuat di baris paling awal komponen: kalau `isLoading` masih true, hentikan render lebih awal dan tampilkan paragraf bertuliskan `Loading...`.",
          "starterCode": "function Profil({ isLoading, error, data }) {\n  // tulis penanganan keadaan memuat di sini\n\n  if (error) return <p>Gagal memuat!</p>;\n  return <div>{data.name}</div>;\n}\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "if\\s*\\(\\s*isLoading\\s*\\)",
              "message": "Tangani keadaan memuat dengan *early return* di awal komponen, sebelum kode yang memakai datanya. Melewati ini membuat komponen mencoba membaca data yang masih `undefined` — penyebab paling sering \"Cannot read properties of undefined\" pada halaman yang mengambil data."
            },
            {
              "pattern": "return\\s*\\(?\\s*<p>\\s*Loading\\.\\.\\.\\s*</p>",
              "message": "Kembalikan penanda sementara berupa elemen `<p>` bertuliskan teks yang diminta. Di produksi bagian ini biasanya diganti skeleton, tapi polanya sama."
            }
          ],
          "solution": "function Profil({ isLoading, error, data }) {\n  if (isLoading) return <p>Loading...</p>;\n\n  if (error) return <p>Gagal memuat!</p>;\n  return <div>{data.name}</div>;\n}",
          susunKode: {
            question:
              "Tangani state loading sebelum merender data.",
            potongan: [
              "function Profil({ isLoading, error, data }) {",
              "  if (isLoading) return <p>Loading...</p>;",
              "  if (error) return <p>Gagal memuat!</p>;",
              "  return <div>{data.name}</div>;",
              "}",
            ],
            pengecoh: [
              "  if (!isLoading) return <p>Loading...</p>;",
              "  if (isLoading) return <p>Wait...</p>;",
            ],
            pemisah: "\n",
            explanation:
              "Penanganan state async yang aman menggunakan guard early return `if (isLoading) return <p>Loading...</p>`. Pengecoh `!isLoading` menggoda tetapi kebalikannya sehingga merusak alur aplikasi. Pengecoh `Wait...` menyimpang dari teks yang disyaratkan.",
          },
        },
        {
          "kind": "step",
          "id": "react-8-2",
          "title": "Pola Fetch-on-Render & Masalahnya",
          "explanation": "Pola Fetch-on-Render terjadi ketika komponen anak baru memicu panggilan API setelah komponen induknya selesai merender data, menciptakan efek pengunduhan berantai (*waterfall network request*). Efek rantai ini membuat waktu muat aplikasi menjadi sangat lambat karena permintaan jaringan harus mengantri satu per satu. Untuk mengatasinya, data fetching sebaiknya dilakukan secara paralel di tingkat teratas atau menggunakan teknik prefetching data. Jebakan umum adalah menempatkan panggilan API terpisah di dalam 5 komponen berjenjang yang saling membungkus.",
          "example": {
            "code": "// ❌ berurutan: yang kedua baru mulai setelah yang pertama selesai\nconst user = await fetch(\"/api/user\").then((r) => r.json());\nconst pesan = await fetch(\"/api/pesan\").then((r) => r.json());\n\n// ✅ bersamaan: keduanya berangkat lalu ditunggu sekali\nconst [user2, pesan2] = await Promise.all([\n  fetch(\"/api/user\").then((r) => r.json()),\n  fetch(\"/api/pesan\").then((r) => r.json()),\n]);",
            "output": "Masing-masing request butuh 400 ms:\n\nversi berurutan : total 800 ms\nversi Promise.all: total 410 ms\n\nDi waterfall komponen (induk fetch → anak fetch), penundaan ini berlipat sebanyak tingkat komponennya.",
            "note": "Promise.all hanya mempercepat request yang TIDAK saling bergantung. Kalau alamat request kedua berasal dari hasil pertama, urutannya memang tidak bisa dihindari — yang bisa diperbaiki adalah membuat backend mengembalikan keduanya sekaligus. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Dua permintaan yang tidak saling bergantung, `usersPromise` dan `postsPromise`, sekarang ditunggu satu per satu sehingga halaman lambat tampil. Tulis satu pemanggilan yang menjalankan keduanya bersamaan dan menunggu keduanya selesai sekali — masukkan kedua promise itu sebagai satu daftar argumennya (urutan: users lebih dulu).",
          "starterCode": "// Tulis Promise.all di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "Promise\\.all\\(",
              "message": "Dua permintaan yang tidak saling bergantung sebaiknya berjalan BERSAMAAN. `Promise.all()` menunggu semuanya selesai sekaligus, jadi total waktunya sepanjang yang paling lambat — bukan jumlah keduanya seperti kalau di-`await` berurutan."
            },
            {
              "pattern": "\\[\\s*usersPromise\\s*,\\s*postsPromise\\s*\\]",
              "message": "Masukkan kedua promise ke dalam satu array sebagai argumennya. Catatan penting: kalau SATU gagal, seluruh `Promise.all` gagal — untuk menoleransi kegagalan sebagian, pakai `Promise.allSettled`."
            }
          ],
          "solution": "Promise.all([usersPromise, postsPromise])",
          susunKode: {
            question:
              "Jalankan request paralel dengan Promise.all.",
            potongan: [
          "Promise.all([",
          "usersPromise, ",
          "postsPromise])"
],
            pengecoh: [
          "Promise.race([",
          "usersPromise.then()"
],
            pemisah: "",
            explanation:
              "Menunggu banyak request selesai bersamaan menggunakan `Promise.all([usersPromise, postsPromise])`. Pengecoh `Promise.race` menggoda tetapi hanya mengembalikan hasil satu promise yang paling cepat selesai. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-8-3",
          "title": "TanStack Query (React Query)",
          "explanation": "TanStack Query (React Query) adalah pustaka data fetching dan manajemen server-state terkemuka yang menangani pengunduhan, penyimpan memori sementara (*caching*), dan pembaruan data secara otomatis. Dengan Hook `useQuery`, kamu tidak perlu lagi mengelola state loading, error, dan data secara manual menggunakan `useEffect`. TanStack Query juga otomatis menyegarkan data (*refetch*) saat jendela browser kembali difokuskan oleh pengguna. Jebakan pemula adalah mencoba menyimpan data hasil `useQuery` ke dalam `useState` lokal yang redundan.",
          "example": {
            "code": "const { data, isLoading } = useQuery({\n  queryKey: ['todos'],\n  queryFn: fetchTodos,\n});",
            "output": "Kunjungan pertama ke halaman:\nisLoading = true  → <p>Memuat...</p>\nisLoading = false → daftar todo tampil   (request ke server: 1)\n\nPindah halaman lalu kembali:\ndaftar langsung tampil dari cache (isLoading = false)\nlalu data disegarkan di belakang layar   (request ke server: 2)",
            "note": "Standard industri data fetching di aplikasi React modern. Catatan jujur soal panel preview: paket `@tanstack/react-query` tidak terpasang di sana, jadi potongan ini tidak dijalankan — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Panggil hook `useQuery` dengan melewatkan sebuah objek argumen. Objek tersebut harus memiliki properti `queryKey` bernilai `['users']` dan properti `queryFn` bernilai fungsi `fetchUsers`.",
          "starterCode": "// Tulis useQuery di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "useQuery\\s*\\(\\s*\\{",
              "message": "Sejak TanStack Query v5, `useQuery` menerima SATU objek opsi. Bentuk lama `useQuery(['users'], fetchUsers)` yang banyak beredar di tutorial sudah dihapus dan akan melempar error."
            },
            {
              "pattern": "queryKey\\s*:\\s*\\[\\s*['\"]users['\"]\\s*\\]",
              "message": "`queryKey` adalah identitas cache-nya dan bentuknya ARRAY, bukan string. Menulis `queryKey: \"users\"` ditolak TypeScript, dan array inilah yang nanti kamu tambahi parameter (`[\"users\", page]`) supaya tiap halaman punya cache sendiri."
            },
            {
              "pattern": "queryFn\\s*:\\s*fetchUsers\\b",
              "message": "`queryFn` diisi FUNGSI pengambil datanya — sebut namanya tanpa tanda kurung. Menulis `queryFn: fetchUsers()` menjalankan fungsinya sekarang lalu menyerahkan hasilnya, sehingga TanStack tidak bisa mengulang permintaan saat perlu."
            }
          ],
          "solution": "useQuery({ queryKey: ['users'], queryFn: fetchUsers });",
          susunKode: {
            question:
              "Panggil useQuery dengan queryKey dan queryFn.",
            potongan: [
              "useQuery({ queryKey: ",
              "['users'], queryFn: ",
              "fetchUsers });",
            ],
            pengecoh: [
              "useQuery({ key: ['users'], fn: fetchUsers });",
              "useQuery(['users'], fetchUsers);",
            ],
            pemisah: "",
            explanation:
              "Hook TanStack Query memerlukan opsi `queryKey` dan `queryFn`. Pengecoh `key` dan `fn` menggoda karena lebih pendek tetapi bukan nama opsi resmi React Query v5 yang digunakan secara umum. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-8-4",
          "title": "Mutasi Data & Optimistic Update",
          "explanation": "Mutasi data (operasi POST, PUT, DELETE ke server API) dikelola dengan sangat mudah menggunakan Hook `useMutation` dari TanStack Query. Setelah proses mutasi data berhasil di backend server, kita memanggil `queryClient.invalidateQueries({ queryKey: ['todos'] })` untuk memberi tahu TanStack Query agar otomatis mengunduh ulang data terbaru. Pola ini memastikan data yang ada di layar selalu sinkron dengan server backend tanpa perlu memuat ulang seluruh halaman. Jebakan umum adalah lupa meng-invalidasi cache setelah melakukan mutasi.",
          "example": {
            "code": "async function tambah(baru) {\n  const sebelumnya = todos;              // simpan untuk rollback\n  setTodos([...todos, baru]);            // 1. tampilkan lebih dulu\n  try {\n    await fetch(\"/api/todos\", { method: \"POST\", body: JSON.stringify(baru) });\n  } catch {\n    setTodos(sebelumnya);                 // 2. gagal → kembalikan\n    alert(\"Gagal menyimpan, dibatalkan.\");\n  }\n}",
            "output": "Server normal:\n0 ms  : item muncul di daftar\n250 ms: server mengonfirmasi — tidak ada perubahan tampilan\n\nServer menolak:\n0 ms  : item muncul di daftar\n250 ms: item HILANG lagi + pesan \"Gagal menyimpan, dibatalkan.\"",
            "note": "Bagian yang paling sering dilupakan bukan bagian optimisnya, tapi rollback-nya. Tanpa menyimpan `sebelumnya`, item yang gagal disimpan tetap terlihat ada sampai halaman dimuat ulang — pengguna mengira datanya tersimpan padahal tidak. Catatan jujur soal panel preview: paket `@tanstack/react-query` tidak terpasang di sana, jadi potongan ini tidak dijalankan — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Lakukan perbaruan state `todos` secara optimis dengan memasukkan item baru `newTodo` ke dalam salinan array `todos` yang ada.",
          "starterCode": "// Tulis optimisitik update di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "setTodos\\(",
              "message": "Perubahan daftar lewat setter state-nya."
            },
            {
              "pattern": "\\[\\s*\\.\\.\\.todos\\s*,\\s*newTodo\\s*\\]",
              "message": "Optimistic update berarti kamu menampilkan hasilnya lebih dulu, sebelum server menjawab: buat array baru dengan spread isi lama lalu tambahkan item barunya. Yang wajib menyusul: kembalikan state ini kalau request-nya ternyata gagal."
            }
          ],
          "solution": "setTodos([...todos, newTodo])",
          susunKode: {
            question:
              "Tambahkan item baru secara optimistic ke state todos.",
            potongan: [
          "setTodos([",
          "...todos, ",
          "newTodo])"
],
            pengecoh: [
          "updateTodos([",
          "todos.push()"
],
            pemisah: "",
            explanation:
              "Pembaruan state array imutabel menggunakan spread operator `[...todos, newTodo]`. Pengecoh `todos.push` menggoda tetapi memutasi array lama secara langsung yang dilarang keras di React. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-8-5",
          "title": "Pagination & Infinite Scroll",
          "explanation": "Pola navigasi halaman (*pagination*) dan daftar gulir tanpa batas (*infinite scroll*) adalah fitur standar dalam menampilkan ribuan data pada aplikasi modern. TanStack Query menyediakan fitur bawaan `placeholderData: keepPreviousData` agar tampilan halaman sebelumnya tidak hilang atau berkedip saat data halaman baru sedang diunduh di belakang layar. Fitur ini memberikan pengalaman pengguna yang sangat halus dan responsif. Jebakan umum adalah menghapus data lama seketika sebelum data halaman berikutnya selesai diunduh.",
          "example": {
            "code": "// bentuk v5: satu objek opsi\nconst { data, isPlaceholderData } = useQuery({\n  queryKey: [\"users\", page],                 // page ikut jadi bagian kunci\n  queryFn: () => fetchUsers(page),\n  placeholderData: keepPreviousData,         // tahan data halaman lama\n});",
            "output": "page = 1 → 20 nama tampil\nklik \"berikutnya\" (page = 2):\n  tanpa placeholderData → daftar KOSONG sekejap, tinggi halaman melompat\n  dengan placeholderData → daftar halaman 1 tetap terlihat sampai data 2 tiba",
            "note": "Bentuk lama `useQuery([\"users\", page], fn)` yang masih banyak di tutorial adalah API v3/v4 dan sudah dihapus di v5 — kalau kamu menyalinnya, yang muncul error tentang argumen yang tidak dikenali. Selalu cocokkan contoh dengan versi di `package.json`. Catatan jujur soal panel preview: paket `@tanstack/react-query` tidak terpasang di sana, jadi potongan ini tidak dijalankan — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Tentukan properti `queryKey` di dalam objek argumen berupa array yang berisi string 'items' diikuti dengan variabel `page` agar cache data terpisah untuk setiap halaman.",
          "starterCode": "// Tulis queryKey di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "queryKey\\s*:",
              "message": "Setiap query di React Query diidentifikasi oleh `queryKey`. Kunci inilah yang dipakai sebagai penanda cache."
            },
            {
              "pattern": "\\[\\s*['\"]items['\"]\\s*,\\s*page\\s*\\]",
              "message": "Sertakan `page` sebagai bagian dari kunci. Kalau nomor halaman tidak ikut, semua halaman berbagi satu cache — pindah halaman menampilkan data lama, dan itu bug yang sangat membingungkan saat ditemui."
            }
          ],
          "solution": "queryKey: ['items', page]",
          susunKode: {
            question:
              "Sertakan page di queryKey untuk pagination.",
            potongan: [
              "queryKey: ",
              "['items', ",
              "page]"
],
            pengecoh: [
              "queryName: ",
              "['items']"
],
            pemisah: "",
            explanation:
              "QueryKey pagination ditulis sebagai elemen array terpisah `['items', page]` agar React Query me-refetch otomatis saat nilai page berubah. Pengecoh string gabungan keliru secara struktur queryKey di TanStack Query.",
          },
        },
        {
          "kind": "step",
          "id": "react-8-6",
          "title": "Menangani Auth Token di Request Header",
          "explanation": "Mengirimkan token autentikasi (seperti Bearer JWT Token) di dalam header HTTP `Authorization` adalah standar keamanan utama saat berkomunikasi dengan API backend terlindungi. Panggilan API yang menggunakan `fetch` atau library `axios` mengonfigurasi header ini agar server dapat memverifikasi identitas pengguna sebelum memberikan akses data. Memahami pengelolaan token header ini penting agar kamu dapat membuat fitur aplikasi yang aman. Jebakan umum adalah menyimpan token akses rahasia secara tidak aman di variabel global yang rentan dibaca script berbahaya.",
          "example": {
            "code": "fetch('/api/user', {\n  headers: { Authorization: `Bearer ${token}` }\n});",
            "output": "Dengan header Authorization:\nHTTP 200\n{ \"id\": 7, \"name\": \"Bimo\" }\n\nTanpa header itu (atau spasi setelah \"Bearer\" hilang):\nHTTP 401\n{ \"message\": \"Unauthenticated.\" }",
            "note": "401 berarti server tidak mengenali kamu; 403 berarti dikenali tapi tidak berhak. Membedakan keduanya menghemat waktu debugging. Soal penyimpanan: token di `localStorage` bisa dibaca skrip pihak ketiga mana pun yang masuk ke halamanmu — cookie HttpOnly tidak. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Definisikan objek `headers` yang mendefinisikan kunci `Authorization`. Isinya adalah sebuah template literal (menggunakan backtick) yang menggabungkan kata 'Bearer ' dengan variabel `${token}`.",
          "starterCode": "// Tulis objek headers di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "headers\\s*:",
              "message": "Token dikirim lewat HTTP header, jadi tambahkan opsi `headers` pada permintaanmu."
            },
            {
              "pattern": "Authorization\\s*:",
              "message": "Nama header standarnya `Authorization` — ejaan Inggris tanpa huruf s, dan salah tulis di sini menghasilkan 401 tanpa penjelasan lebih lanjut."
            },
            {
              "pattern": "Bearer\\s+\\$\\{token\\}|Bearer\\s+['\"]?\\s*\\+\\s*token",
              "message": "Nilainya berpola `Bearer <token>` — kata Bearer, satu spasi, lalu tokennya disisipkan (template literal atau penggabungan string). Lupa spasi setelah Bearer adalah penyebab 401 yang paling sering luput terlihat."
            }
          ],
          "solution": "headers: { Authorization: `Bearer ${token}` }",
          susunKode: {
            question:
              "Kirim Authorization Bearer token di request headers.",
            potongan: [
              "headers: { ",
              "Authorization: ",
              "`Bearer ${token}` }"
],
            pengecoh: [
              "headerList: { ",
              "Auth: "
],
            pemisah: "",
            explanation:
              "Header otentikasi HTTP menggunakan nama standar `Authorization: `Bearer ${token}``. Pengecoh `Auth` menggoda tetapi bukan nama header HTTP standar yang diterima oleh API server pada umumnya. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
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
              "question": "Halaman daftar produk memakai `queryKey: ['produk']` saja, padahal datanya diambil per halaman (`fetchProduk(page)`). Apa gejala yang muncul saat pengguna menekan \"halaman berikutnya\"?",
              "choices": [
                "Aplikasi melempar error karena queryKey tidak boleh berupa array satu elemen",
                "Halaman 2 menampilkan data halaman 1 dari cache, dan kadang tidak pernah diperbarui",
                "Semua halaman diunduh sekaligus sehingga browser kehabisan memori",
                "TanStack Query otomatis menambahkan nomor halaman ke queryKey"
              ],
              "answerIndex": 1,
              "explanation": "`queryKey` adalah identitas cache. Kalau nomor halaman tidak ikut di dalamnya, TanStack menganggap semua halaman adalah data yang sama, jadi ia menyajikan isi cache halaman 1 untuk halaman 2. Pilihan ketiga menggoda karena terdengar seperti masalah performa yang wajar, tapi justru kebalikannya yang terjadi: request-nya malah tidak dilakukan. Aturannya sederhana — semua nilai yang mempengaruhi hasil request harus masuk ke queryKey, mirip dependency array pada useEffect."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Optimistic update sudah diterapkan: item langsung tampil sebelum server menjawab. Bagian apa yang paling sering dilupakan, dan apa akibatnya bagi pengguna?",
              "choices": [
                "Menampilkan spinner — tanpa itu pengguna tidak tahu ada proses berjalan",
                "Menyimpan state sebelumnya untuk dikembalikan saat request gagal — tanpa itu pengguna mengira datanya tersimpan padahal tidak",
                "Memanggil invalidateQueries dua kali — tanpa itu cache tidak pernah tersegarkan",
                "Menambahkan await pada setState — tanpa itu UI tidak terbarui"
              ],
              "answerIndex": 1,
              "explanation": "Inti optimistic update ada dua bagian: menampilkan hasil lebih dulu, DAN mengembalikannya kalau server menolak (rollback). Bagian kedua yang biasanya hilang, dan akibatnya paling buruk: item tetap terlihat ada di layar sampai halaman dimuat ulang, sehingga pengguna yakin datanya sudah tersimpan. Pilihan pertama menggoda tapi bertentangan dengan tujuannya — optimistic update justru dipakai supaya tidak ada spinner. Pilihan terakhir keliru secara teknis: `setState` bukan fungsi async dan tidak bisa di-`await`."
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
            "output": "URL /about:\n<a href=\"/about\" class=\"active\">About</a>\n\nURL /kontak:\n<a href=\"/about\" class=\"\">About</a>",
            "note": "Gunakan NavLink untuk pembuatan komponen Navbar utama. Catatan jujur soal panel preview: `react-router-dom` tidak terpasang di sana dan tidak ada URL yang bisa diubah, jadi potongan ini tidak dijalankan — tesnya tetap bisa lulus."
          },
          "instruction": "Navbar butuh tautan menuju halaman profil di `/profil`, dan halaman TIDAK boleh dimuat ulang saat diklik. Tulis satu elemen tautan versi React Router dengan tulisan `Profil` yang bisa diklik pengguna — perhatikan bahwa nama props tujuannya bukan `href`.",
          "starterCode": "// Tulis elemen Link di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<Link",
              "message": "Navigasi di dalam SPA memakai komponen `<Link>`, bukan `<a href>`. Tag `<a>` memuat ulang seluruh halaman sehingga state React-mu hilang dan keunggulan SPA-nya hilang juga."
            },
            {
              "pattern": "to=[\"']/profil[\"']",
              "message": "Tujuan ditulis lewat props `to` (bukan `href`), diawali garis miring karena jalurnya absolut dari root."
            },
            {
              "pattern": ">\\s*Profil\\s*</Link>",
              "message": "Teks yang diklik pengguna ditulis di antara tag pembuka dan penutup."
            }
          ],
          "solution": "<Link to=\"/profil\">Profil</Link>",
          susunKode: {
            potongan: [
              "<Link ",
              "to=\"/profil\">",
              "Profil</Link>"
],
            pengecoh: [
              "<a ",
              "href=\"/profil\">"
],
            pemisah: "",
            explanation:
              "Navigasi SPA tanpa reload halaman menggunakan `<Link to=\"/profil\">Profil</Link>`. Pengecoh `<a href=\"...\">` menggoda pengembang HTML murni tetapi menyebabkan reload halaman penuh di browser yang merusak performa SPA.",
          },
        },
        {
          "kind": "step",
          "id": "react-9-2",
          "title": "Route Parameter (useParams)",
          "explanation": "Parameter rute dinamis dikonfigurasi pada rute menggunakan tanda titik dua (`path='/produk/:id'`) dan nilainya dapat dibaca di dalam komponen menggunakan Hook `useParams()`. Selain itu, query string URL (seperti `?search=kopi&page=2`) dapat dibaca dan diperbarui menggunakan Hook `useSearchParams()`. Kedua fitur ini memungkinkan kamu membuat halaman detail produk atau halaman pencarian dinamis yang nilai URL-nya dapat dibagikan (*shareable link*). Jebakan umum adalah lupa bahwa nilai yang dikembalikan oleh `useParams()` selalu bertipe `string`.",
          "example": {
            "code": "import { useParams } from \"react-router-dom\";\nfunction UserDetail() {\n  const { id } = useParams();\n  return <h2>User ID: {id}</h2>;\n}",
            "output": "<h2>User ID: 42</h2> saat mengakses /user/42.",
            "note": "String key pada useParams() harus cocok dengan nama variabel di deklarasi Route. Catatan jujur soal panel preview: `react-router-dom` tidak terpasang di sana dan tidak ada URL yang bisa diubah, jadi potongan ini tidak dijalankan — tesnya tetap bisa lulus."
          },
          "instruction": "Panggil hook `useParams` dan lakukan destructuring pada objek yang dikembalikan untuk mengekstrak nilai parameter `id`.",
          "starterCode": "// Tulis useParams di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "useParams\\(\\s*\\)",
              "message": "Nilai segmen dinamis URL dibaca dengan hook `useParams()`."
            },
            {
              "pattern": "const\\s*\\{\\s*id\\s*\\}\\s*=",
              "message": "Hasilnya object, jadi ambil dengan destructuring object. Nama propertinya harus SAMA dengan nama parameter di definisi route (`/produk/:id`) — salah satu huruf saja membuat isinya `undefined`. Ingat juga nilainya selalu berupa string, jadi bandingkan dengan hati-hati terhadap id angka."
            }
          ],
          "solution": "const { id } = useParams();",
          susunKode: {
            question:
              "Ambil param id dengan useParams().",
            potongan: [
              "const { id } =",
              "useParams();",
            ],
            pengecoh: [
              "const [id] =",
              "useParams(id);",
            ],
            pemisah: " ",
            explanation:
              "Hook `useParams()` mengembalikan objek parameter route yang dibongkar `{ id }`. Pengecoh `useParams(id)` menggoda jika keliru mengira `useParams` menerima argumen. Jebakan ini sering terjadi pada pemula di React Router.",
          },
        },
        {
          "kind": "step",
          "id": "react-9-3",
          "title": "Nested Route & Layout Route (<Outlet />)",
          "explanation": "Nested Routes (Rute Bersarang) memungkinkan kita merender komponen anak di dalam tata letak (*layout*) komponen induk yang tetap (seperti halaman Dashboard yang memiliki Sidebar dan Header konstan). Komponen induk menggunakan komponen `<Outlet />` dari React Router sebagai tempat penampung dinamis tempat komponen rute anak akan muncul. Pola ini mengeliminasi duplikasi kode layout di setiap file halaman. Jebakan umum adalah lupa meletakkan `<Outlet />` di dalam komponen layout induk sehingga rute anak tidak muncul di layar.",
          "example": {
            "code": "function DashboardLayout() {\n  return (\n    <div>\n      <Sidebar />\n      <Outlet /> {/* Isi Halaman Anak */}\n    </div>\n  );\n}",
            "output": "Sidebar tidak di-render ulang saat berpindah antar tab dashboard.",
            "note": "Outlet adalah tempat komponen anak dirender di dalam layout parent. Catatan jujur soal panel preview: `react-router-dom` tidak terpasang di sana dan tidak ada URL yang bisa diubah, jadi potongan ini tidak dijalankan — tesnya tetap bisa lulus."
          },
          "instruction": "Render elemen placeholder khusus dari React Router DOM di dalam komponen layout agar konten rute anak (child route) dapat ditampilkan.",
          "starterCode": "// Tulis elemen Outlet di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<Outlet\\s*/?>",
              "message": "Di layout route, tempat anak-anak route dirender ditandai dengan komponen `<Outlet />`. Tanpa itu, layout-nya tampil tapi halaman anaknya tidak pernah muncul — dan tidak ada pesan error yang menjelaskannya."
            }
          ],
          "solution": "<Outlet />",
          susunKode: {
            question:
              "Render outlet anak di layout dengan <Outlet />.",
            potongan: [
          "<Out",
          "let",
          " />"
],
            pengecoh: [
          "<Child",
          "ren",
          "></Children>"
],
            pemisah: "",
            explanation:
              "Komponen penampung nested route React Router bernama `<Outlet />`. Pengecoh `<Children />` menggoda tetapi bukan nama komponen resmi dari pustaka React Router yang digunakan untuk layout. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-9-4",
          "title": "Programmatic Navigation (useNavigate)",
          "explanation": "Programmatic Navigation adalah teknik memicu perpindahan halaman rute melalui kode logika JavaScript (bukan karena klik tombol link oleh pengguna) dengan menggunakan Hook `useNavigate()`. Fitur ini sangat krusial digunakan untuk mengalihkan (*redirect*) pengguna secara otomatis ke halaman dashboard setelah sukses melakukan login, atau mengembalikan pengguna ke halaman sebelumnya setelah membatalkan formulir. Jebakan pemula adalah memanggil `navigate()` langsung di dalam body fungsi komponen tanpa dikontrol oleh handler event atau effect.",
          "example": {
            "code": "const navigate = useNavigate();\nconst handleLogin = () => {\n  navigate(\"/dashboard\");\n};",
            "output": "Address bar sebelum: /login\nhandleLogin() dijalankan\nAddress bar sesudah: /dashboard\n\nHalaman TIDAK dimuat ulang — state React lain tetap utuh (bandingkan dengan window.location.href yang memuat ulang semuanya).",
            "note": "Gunakan navigate(-1) untuk membuat tombol 'Kembali'. Catatan jujur soal panel preview: `react-router-dom` tidak terpasang di sana dan tidak ada URL yang bisa diubah, jadi potongan ini tidak dijalankan — tesnya tetap bisa lulus."
          },
          "instruction": "Panggil fungsi `navigate` (yang sebelumnya sudah diinisiasi dari `useNavigate()`) dengan argumen string `'/login'` untuk melakukan navigasi ke halaman login.",
          "starterCode": "// Tulis navigate di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "navigate\\(",
              "message": "Perpindahan halaman dari dalam kode (setelah login berhasil, misalnya) memakai fungsi hasil `useNavigate()`. Hook-nya dipanggil di tingkat atas komponen, fungsinya dipakai di dalam handler."
            },
            {
              "pattern": "['\"]/login['\"]",
              "message": "Berikan tujuannya sebagai teks jalur, diawali garis miring. Tambahkan opsi `{ replace: true }` bila kamu tidak ingin halaman ini tersimpan di riwayat back browser."
            }
          ],
          "solution": "navigate(\"/login\");",
          susunKode: {
            potongan: [
          "navigate(",
          "\"/login\");"
],
            pengecoh: [
          "router.push(",
          "\"/sign-in\");"
],
            pemisah: "",
            explanation:
              "Navigasi programatis di React Router v6 menggunakan fungsi `navigate('/login')`. Pengecoh `router.push` menggoda pengembang Next.js tetapi keliru di React Router yang menggunakan hook useNavigate. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-9-5",
          "title": "Halaman 404 & Route Guard Sederhana",
          "explanation": "Halaman error 404 dibuat dengan mengonfigurasi rute catch-all (`path='*'`) yang akan menangkap semua jalur URL yang tidak cocok dengan daftar rute yang ada. Selain rute 404, pola Protected Route (Route Guard) digunakan untuk membentengi rute rahasia dengan mengecek status autentikasi pengguna terlebih dahulu sebelum merender komponen halaman. Jika pengguna belum login, Protected Route akan mengalihkan pengguna ke halaman login via `<Navigate to='/login' replace />`. Jebakan umum adalah lupa menyertakan atribut `replace` yang membuat tombol back browser terjebak di alur redirect.",
          "example": {
            "code": "<Route path=\"/login\" element={<Login />} />",
            "output": "Route standar yang memetakan path /login ke komponen Login.",
            "note": "Selalu tempatkan path='*' di bagian paling akhir daftar Route. Catatan jujur soal panel preview: `react-router-dom` tidak terpasang di sana dan tidak ada URL yang bisa diubah, jadi potongan ini tidak dijalankan — tesnya tetap bisa lulus."
          },
          "instruction": "Buat elemen `<Route>` penangkap (catch-all) dengan `path=\"*\"` yang akan menampilkan elemen `<NotFound />` jika tidak ada rute lain yang cocok.",
          "starterCode": "// Tulis Route 404 di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<Route\\b[\\s\\S]*path=[\"']\\*[\"']",
              "message": "Rute penangkap memakai `path=\"*\"`. Tanpa tanda bintang, rute ini hanya cocok untuk satu URL tertentu."
            },
            {
              "pattern": "element=\\{\\s*<NotFound\\s*/>\\s*\\}",
              "message": "Isi `element` dengan elemen `<NotFound />` di dalam kurung kurawal — bukan nama komponennya saja. Urutan atribut bebas."
            }
          ],
          "solution": "<Route path=\"*\" element={<NotFound />} />",
          susunKode: {
            question:
              "Buat route fallback wildcard path=\"*\".",
            potongan: [
              "<Route ",
              "path=\"*\" ",
              "element={<NotFound />} />"
],
            pengecoh: [
              "<Path ",
              "path=\"404\" "
],
            pemisah: "",
            explanation:
              "Route 404 catch-all menggunakan `path=\"*\"`. Pengecoh `path=\"404\"` menggoda tetapi hanya mencocokkan URL `/404` secara spesifik, bukan seluruh jalur yang tidak cocok di aplikasi. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-9-6",
          "title": "Lazy Loading Route (React.lazy)",
          "explanation": "Lazy Loading rute menggunakan `React.lazy()` dan komponen `<Suspense fallback={<Loading />}>` adalah teknik optimasi performa *code-splitting* untuk memecah ukuran bundel JavaScript utama aplikasi. Dengan lazy loading, browser hanya akan mengunduh berkas kode untuk halaman yang sedang dibuka oleh pengguna saja, bukan mengunduh seluruh halaman aplikasi di awal. Pola ini sangat ampuh mempercepat waktu muat awal (*initial load time*) aplikasi React skala besar. Jebakan umum adalah tidak membungkus komponen lazy dengan `<Suspense>` yang memicu error saat rute diakses.",
          "example": {
            "code": "const Dashboard = React.lazy(() => import('./Dashboard'));\n<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>",
            "output": "npm run build tanpa lazy:\ndist/assets/index.js   612 kB\n\nDengan lazy untuk Dashboard:\ndist/assets/index.js   240 kB\ndist/assets/Dashboard-9f1c.js  372 kB   ← baru diunduh saat /dashboard dibuka",
            "note": "Nama berkas berakhiran hash seperti `Dashboard-9f1c.js` itulah bukti code-splitting berhasil; kamu bisa melihatnya di tab Network saat rutenya pertama kali dibuka. Catatan jujur: `Suspense` dan `import()` dinamis tidak tersedia di panel preview, jadi potongan ini tidak dijalankan di sini — tesnya tetap bisa lulus."
          },
          "instruction": "Komponen `Home` sekarang dimuat malas dengan `React.lazy`, sehingga berkasnya baru diunduh saat rutenya dibuka — dan React butuh sesuatu untuk ditampilkan selama unduhan itu. Bungkus `<Home />` dengan komponen batas penangguhan milik React, lalu isi props tampilan sementaranya dengan paragraf bertuliskan `Memuat...`.",
          "starterCode": "// Tulis Suspense di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<Suspense",
              "message": "Komponen yang dimuat malas (`React.lazy`) wajib dibungkus `<Suspense>`, karena selama berkasnya diunduh React butuh sesuatu untuk ditampilkan."
            },
            {
              "pattern": "fallback=\\{",
              "message": "Isi props `fallback` dengan elemen sementara. Nilainya berupa JSX di dalam kurung kurawal — bukan teks biasa."
            },
            {
              "pattern": "<Home\\s*/>[\\s\\S]*</Suspense>",
              "message": "Komponen malasnya diletakkan DI DALAM Suspense. Kalau di luar, React melempar error bahwa komponen ditangguhkan tanpa batas Suspense."
            }
          ],
          "solution": "<Suspense fallback={<p>Memuat...</p>}><Home /></Suspense>",
          susunKode: {
            question:
              "Bungkus komponen lazy dengan Suspense fallback.",
            potongan: [
          "<Suspense ",
          "fallback={<p>Memuat...</p>}>",
          "<Home /></Suspense>"
],
            pengecoh: [
          "<div ",
          "fallback=\"<p>Memuat...</p>\">"
],
            pemisah: "",
            explanation:
              "Komponen yang di-load secara lazy wajib dibungkus `<Suspense fallback={...}>`. Pengecoh `<React.Lazy>` menggoda tetapi bukan nama komponen pembungkus di React yang digunakan untuk penanganan async rendering. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
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
            "output": "Untuk markup <button>Kirim Pesan</button>:\nditemukan → <button>Kirim Pesan</button>\n\nUntuk markup <div onClick={...}>Kirim Pesan</div>:\nTestingLibraryElementError: Unable to find an accessible element with the role \"button\"",
            "note": "Memastikan komponen ramah aksesibilitas untuk screen reader. Catatan jujur soal panel preview: Testing Library dan test runner-nya tidak ada di sana, jadi kode tes tidak dijalankan — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Tuliskan perintah RTL `screen` untuk mengambil elemen tombol di layar berdasarkan peran (role) aksesibilitasnya, lalu simpan di konstanta `btn`.",
          "starterCode": "// Tulis getByRole di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "screen\\.getByRole\\(",
              "message": "Testing Library menganjurkan mencari elemen seperti cara pengguna melihatnya: berdasarkan PERAN, memakai `screen.getByRole(...)`. Query berbasis class atau id membuat test rusak setiap kali struktur HTML dirapikan, padahal perilakunya tidak berubah."
            },
            {
              "pattern": "['\"]button['\"]",
              "message": "Sebutkan perannya sebagai teks. Untuk tombol, perannya sama dengan nama elemennya — dan `getByRole` juga menemukan `<a>` dengan `role=\"button\"`, itulah gunanya mencari berdasarkan peran."
            },
            {
              "pattern": "const\\s+btn\\s*=",
              "message": "Simpan hasilnya ke variabel supaya bisa dipakai di assertion berikutnya."
            }
          ],
          "solution": "const btn = screen.getByRole('button');",
          susunKode: {
            potongan: [
              "const btn = ",
              "screen.getByRole(",
              "'button');",
            ],
            pengecoh: [
              "const btn = screen.getByText('button');",
              "const btn = screen.getByTag('button');",
            ],
            pemisah: "",
            explanation:
              "Filosofi RTL merekomendasikan pencarian elemen via `screen.getByRole('button')`. Pengecoh `getByText` menggoda tetapi mencari teks isi tombol, bukan peran aksesibilitas elemen di dalam DOM. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-10-2",
          "title": "render, screen, dan Matcher jest-dom",
          "explanation": "Fungsi `render()` dari RTL digunakan untuk merender komponen React ke dalam lingkungan DOM virtual untuk keperluan pengujian. Objek `screen` menyediakan berbagai metode pencarian elemen (seperti `getByText`, `findByRole`, `queryByTestId`), sedangkan pustaka `@testing-library/jest-dom` menyediakan fungsi penegasan (*matchers*) yang sangat deskriptif seperti `toBeInTheDocument()` atau `toBeDisabled()`. Menguasai kombinasi fungsi ini penting agar kamu dapat membuat assertion tes yang bersih. Jebakan umum adalah membedakan `getBy` (melempar error jika tak ada) dan `queryBy` (mengembalikan null).",
          "example": {
            "code": "render(<Header />);\nexpect(screen.getByText('Halo')).toBeInTheDocument();",
            "output": "$ npx vitest run\n\n ✓ Header.test.tsx (1 test) 24ms\n   ✓ menampilkan sapaan\n\nKalau teksnya tidak ada:\n × menampilkan sapaan\n   TestingLibraryElementError: Unable to find an element with the text: Halo",
            "note": "screen.getByText mencari elemen berbasis konten teks. Catatan jujur soal panel preview: Testing Library dan test runner-nya tidak ada di sana, jadi kode tes tidak dijalankan — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Tuliskan pengujian ekspektasi Jest/Testing Library untuk memastikan variabel `element` benar-benar berada di dalam DOM virtual (`toBeInTheDocument`).",
          "starterCode": "// Tulis expect di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "expect\\(\\s*element\\s*\\)",
              "message": "Assertion dimulai dengan `expect(<yang diuji>)`."
            },
            {
              "pattern": "toBeInTheDocument\\(\\s*\\)",
              "message": "Matcher dari jest-dom untuk memastikan elemen benar-benar ada di halaman. Jangan lupa memanggilnya dengan tanda kurung: `expect(x).toBeInTheDocument` tanpa kurung SELALU lolos, dan test seperti itu tidak menguji apa pun."
            }
          ],
          "solution": "expect(element).toBeInTheDocument();",
          susunKode: {
            potongan: [
          "expect(element)",
          ".toBeInTheDocument();"
],
            pengecoh: [
          "expect(target)",
          ".toBeVisible();"
],
            pemisah: "",
            explanation:
              "Matcher `jest-dom` untuk memeriksa keberadaan elemen di DOM adalah `toBeInTheDocument()`. Pengecoh `toBeTruthy()` menggoda tetapi kurang spesifik untuk pengujian elemen DOM pada React Testing Library. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-10-3",
          "title": "Simulasi Interaksi dengan userEvent",
          "explanation": "Pustaka `@testing-library/user-event` adalah standar utama untuk mensimulasikan interaksi pengguna nyata secara asinkron di dalam kode tes, seperti mengetik karakter pada input (`userEvent.type`), menekan tombol klik (`userEvent.click`), atau memilih opsi dropdown. Berbeda dari `fireEvent` yang kaku, `userEvent` Mensimulasikan seluruh rangkaian event browser secara alami (termasuk event focus, hover, dan keydown). Jebakan paling sering adalah lupa menggunakan kata kunci `await` saat memanggil fungsi-fungsi `userEvent` yang bersifat asinkron.",
          "example": {
            "code": "const button = screen.getByRole('button');\nawait userEvent.click(button);",
            "output": "Urutan event yang benar-benar dikirim userEvent.click:\npointerover → pointerdown → mousedown → focus → pointerup → mouseup → click\n\nfireEvent.click hanya mengirim: click",
            "note": "userEvent lebih disukai daripada fireEvent karena lebih realistis. Catatan jujur soal panel preview: Testing Library dan test runner-nya tidak ada di sana, jadi kode tes tidak dijalankan — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Jalankan fungsi asinkron dari pustaka `userEvent` untuk memicu aksi klik pada variabel `button`.",
          "starterCode": "// Tulis userEvent.click di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "userEvent\\.click\\(\\s*button\\s*\\)",
              "message": "Simulasi interaksi memakai `userEvent`, bukan `fireEvent` — `userEvent` meniru urutan kejadian nyata (hover, pointer down, focus, click) sehingga bug yang bergantung pada fokus ikut tertangkap."
            },
            {
              "pattern": "await\\s+userEvent",
              "message": "Sejak versi 14, semua metode `userEvent` mengembalikan Promise dan wajib di-`await`. Melupakannya membuat assertion berjalan sebelum React selesai merender — test lolos padahal seharusnya gagal, atau sebaliknya."
            }
          ],
          "solution": "await userEvent.click(button);",
          susunKode: {
            potongan: [
          "await ",
          "userEvent.click(button);"
],
            pengecoh: [
          "yield ",
          "fireEvent.click(button);"
],
            pemisah: "",
            explanation:
              "Simulasi interaksi pengguna modern menggunakan `await userEvent.click(button)`. Pengecoh `fireEvent` menggoda cara lama tetapi tidak menembakkan seluruh rangkaian event browser secara lengkap. Jebakan ini sering membuat test tidak realistis.",
          },
        },
        {
          "kind": "step",
          "id": "react-10-4",
          "title": "Menguji Form: Isi, Submit, Assert Error",
          "explanation": "Menguji komponen formulir interaktif melibatkan simulasi lengkap dari pengisian data oleh pengguna hingga verifikasi keluaran pesan kesalahan di layar. Kita mensimulasikan pengetikan pada input yang salah, memicu klik tombol submit, lalu menegaskan bahwa elemen pesan error (`screen.getByText(/email tidak valid/i)`) benar-benar muncul di dokumen DOM. Pengujian ini memastikan alur kerja formulir bebas dari bug sebelum dirilis ke pengguna. Jebakan umum adalah tidak menunggu proses render kondisi error selesai sebelum membuat assertion.",
          "example": {
            "code": "await userEvent.type(screen.getByRole('textbox'), 'bimo@test.com');\nawait userEvent.click(screen.getByRole('button'));",
            "output": "Setelah kedua baris dijalankan:\ninput.value  = \"bimo@test.com\"\nonSubmit terpanggil: 1 kali\n\nKalau `await` dilupakan:\ninput.value  = \"\"\nassertion gagal padahal kodenya sudah benar",
            "note": "Uji pesan error yang muncul saat input diisi secara salah. Catatan jujur soal panel preview: Testing Library dan test runner-nya tidak ada di sana, jadi kode tes tidak dijalankan — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Simulasikan pengguna mengetikkan teks `'Halo'` secara asinkron ke dalam elemen `input` menggunakan `userEvent.type`.",
          "starterCode": "// Tulis userEvent.type di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "userEvent\\.type\\(",
              "message": "Mengisi input disimulasikan dengan `userEvent.type()`, yang mengetik karakter satu per satu — jadi handler `onChange`-mu benar-benar terpanggil seperti saat dipakai manusia."
            },
            {
              "pattern": "\\(\\s*input\\s*,\\s*['\"]Halo['\"]\\s*\\)",
              "message": "Argumennya dua: elemen tujuannya, lalu teks yang diketik dalam tanda kutip."
            },
            {
              "pattern": "await\\s+userEvent",
              "message": "Tambahkan `await` — tanpa itu, pengetikan belum selesai saat assertion dijalankan."
            }
          ],
          "solution": "await userEvent.type(input, 'Halo');",
          susunKode: {
            potongan: [
              "await ",
              "userEvent.type(",
              "input, 'Halo');",
            ],
            pengecoh: [
              "fireEvent.change(input, { target: { value: 'Halo' } });",
              "userEvent.clear(input);",
            ],
            pemisah: "",
            explanation:
              "Mengisi input teks secara realistis menggunakan `await userEvent.type(input, 'Halo')`. Pengecoh `fireEvent.change` menggoda cara lama tetapi tidak menembakkan event keydown/keyup per karakter secara realistis di RTL.",
          },
        },
        {
          "kind": "step",
          "id": "react-10-5",
          "title": "Mock Fetch / API di Test (MSW)",
          "explanation": "Saat menguji komponen yang melakukan panggilan REST API backend, kita tidak boleh melakukan panggilan jaringan sungguhan ke server produksi. Sebagai gantinya, kita menggunakan pustaka Mock Service Worker (MSW) untuk mencegat panggilan HTTP di tingkat jaringan dan mengembalikan data tiruan (*mock data*) yang konsisten. Teknik mocking ini membuat tes otomatis kamu berjalan super cepat, independen dari koneksi internet, dan terisolasi dari gangguan server backend. Jebakan pemula adalah mencoba melakukan fetch sungguhan saat running tes CI.",
          "example": {
            "code": "import { http, HttpResponse } from \"msw\";\n\n// handler untuk kasus GAGAL — sama pentingnya dengan kasus berhasil\nexport const handlers = [\n  http.get(\"/api/profil\", () => {\n    return HttpResponse.json({ message: \"Server sibuk\" }, { status: 500 });\n  }),\n];",
            "output": "Komponen yang diuji menerima:\nHTTP 500 { \"message\": \"Server sibuk\" }\n\nsehingga test bisa memastikan tampilan errornya muncul:\n✓ menampilkan pesan gagal saat server error",
            "note": "Nilai terbesar MSW justru di sini: memaksa kondisi yang sulit direproduksi di server sungguhan (500, timeout, data kosong). Catatan jujur: paket `msw` tidak tersedia di panel preview, jadi potongan ini tidak dijalankan — tesnya tetap bisa lulus."
          },
          "instruction": "Tulis satu handler MSW untuk permintaan GET ke `/api/users` yang membalas dengan JSON berisi array satu pengguna: `[{ id: 1, name: 'Bimo' }]`. Pakai `http` dan `HttpResponse` dari `msw` (anggap keduanya sudah diimpor).",
          "starterCode": "// import { http, HttpResponse } from \"msw\";  ← anggap sudah ada\n\n// Tulis satu handler GET /api/users di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "http\\.get\\s*\\(\\s*['\"]/api/users['\"]",
              "message": "Handler dibuat per metode HTTP: `http.get(\"<jalur>\", ...)`. Jalurnya harus cocok dengan yang benar-benar dipanggil komponen — kalau berbeda satu huruf, MSW membiarkan request lolos ke jaringan sungguhan dan test-mu jadi bergantung internet."
            },
            {
              "pattern": "HttpResponse\\.json\\s*\\(",
              "message": "Balasannya dibuat dengan `HttpResponse.json(...)`, yang sekaligus menyetel header `Content-Type`. Mengembalikan objek biasa tidak cukup: yang ditiru MSW adalah respons HTTP, bukan nilai kembalian fungsi."
            },
            {
              "pattern": "id\\s*:\\s*1[\\s\\S]*name\\s*:\\s*['\"]Bimo['\"]",
              "message": "Isi datanya berupa ARRAY berisi satu objek `{ id: 1, name: \"Bimo\" }` — bentuknya harus sama dengan yang dikirim API sungguhan, termasuk soal array atau bukan. Mock yang bentuknya beda dari kenyataan membuat test lulus sementara aplikasinya rusak."
            }
          ],
          "solution": "http.get('/api/users', () => {\n  return HttpResponse.json([{ id: 1, name: 'Bimo' }]);\n});",
          susunKode: {
            question:
              "Mock endpoint HTTP GET dengan MSW http.get.",
            potongan: [
              "http.get('/api/users', () => {\n  return HttpResponse.json(",
              "[{ id: 1, name: 'Bimo' }]);\n});"
],
            pengecoh: [
              "rest.get('/api/users', () => {\n  return Response.json(",
              "[{ id: 2, name: 'Bimo' }]);\n});"
],
            pemisah: "",
            explanation:
              "Mock API versi MSW v2 menggunakan `http.get` dan `HttpResponse.json`. Pengecoh `rest.get` menggoda pengembang MSW v1 tetapi API lama tersebut sudah deprecated di versi terbaru. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-10-6",
          "title": "Test Apa yang Layak Ditulis (dan yang Tidak)",
          "explanation": "Menentukan apa yang layak diuji (*testing strategy*) adalah keputusan penting agar waktu pengembangan tetap efisien. Fokuskan pengujian pada alur kerja utama pengguna (*user journey*), komponen UI yang kaya akan logika interaksi, serta penanganan kondisi error kritis. Jangan menghabiskan waktu menguji gaya tampilan CSS sederhana atau librari pihak ketiga yang sudah teruji oleh pembuatnya. Memahami prioritas pengujian ini membantu kamu mencapai cakupan tes (*test coverage*) yang bermakna. Jebakan umum adalah mengejar 100% test coverage dengan menulis tes sepele yang tidak memberi nilai tambah.",
          "example": {
            "code": "function shouldTestItem(type) {\n  return type === 'user_behavior' ? true : false;\n}\nconsole.log(shouldTestItem('user_behavior'));",
            "output": "true",
            "note": "Fokus pada apa yang dilihat dan dirasakan oleh pengguna. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Buat fungsi `shouldTestItem(targetType)` yang mengembalikan `true` jika `targetType === 'user_behavior'` dan `false` jika sebaliknya.",
          "starterCode": "// Tulis fungsi shouldTestItem di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "targetType\\s*===\\s*['\"]user_behavior['\"]",
              "message": "Bandingkan `targetType` dengan teks `'user_behavior'` memakai pembanding tiga karakter (`===`). Pemakaian `==` di sini bekerja untuk string, tapi kebiasaan memakai `===` mencegah perbandingan lintas tipe yang menipu (`0 == \"\"` bernilai true)."
            }
          ],
          "solution": "function shouldTestItem(targetType) {\n  return targetType === 'user_behavior';\n}",
          susunKode: {
            question:
              "Buat fungsi yang mengembalikan benar hanya ketika jenis sasaran yang diuji adalah perilaku pengguna.",
            potongan: [
              "function shouldTestItem(targetType) {",
              "  return targetType === 'user_behavior';",
              "}",
            ],
            pengecoh: [
              "  return targetType === 'implementation_details';",
              "  return targetType === 'internal_state';",
            ],
            pemisah: "\n",
            explanation:
              "Prinsip RTL menekankan pengujian perilaku pengguna `user_behavior`. Pengecoh `implementation_details` menggoda tetapi merusak ketahanan test saat refaktor internal dilakukan pada komponen. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
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
            "code": "// struktur by-type (bawaan tutorial)      struktur by-feature (dipakai tim besar)\n// src/components/LoginForm.tsx            src/features/auth/components/LoginForm.tsx\n// src/components/CartItem.tsx             src/features/cart/components/CartItem.tsx\n// src/hooks/useAuth.ts                    src/features/auth/hooks/useAuth.ts\n// src/api/authApi.ts                      src/features/auth/api/authApi.ts\n\n// impor dari dalam fitur cart ke komponen bersama:\nimport Button from '../../../components/ui/Button';",
            "output": "Menghapus fitur cart pada struktur by-type:\n  menyentuh 4 folder berbeda, mudah meninggalkan berkas yatim\n\nPada struktur by-feature:\n  hapus satu folder src/features/cart — selesai",
            "note": "Ciri struktur by-type yang mulai menyakitkan: `import` berisi `../../../`. Itu tanda berkas yang saling berkaitan tersebar jauh. Banyak tim lalu memasang alias path di `vite.config.ts` supaya bisa menulis `@/components/ui/Button`. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Kamu sedang menulis `src/features/cart/components/CartItem.tsx` pada struktur by-feature, dan butuh dua hal: custom hook `useAuth` milik fitur auth (di `src/features/auth/hooks/useAuth.ts`) serta komponen bersama `Button` (di `src/components/ui/Button.tsx`). Tulis kedua baris impornya memakai jalur relatif yang benar dari posisi berkas itu — hitung tingkat foldernya dengan teliti.",
          "starterCode": "// Berkas ini: src/features/cart/components/CartItem.tsx\n//\n// src/\n// ├─ components/ui/Button.tsx\n// └─ features/\n//    ├─ auth/hooks/useAuth.ts\n//    └─ cart/components/CartItem.tsx   ← kamu di sini\n\n// Tulis dua baris impor di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "import\\s*\\{?\\s*useAuth\\s*\\}?\\s*from\\s*['\"]\\.\\./\\.\\./auth/hooks/useAuth(\\.ts)?['\"]",
              "message": "Dari `features/cart/components/`, naik dua tingkat (`../../`) sampai ke `features/`, lalu masuk ke `auth/hooks/useAuth`. Salah hitung satu tingkat membuat build gagal dengan pesan `Failed to resolve import` — dan inilah alasan banyak tim memasang alias path."
            },
            {
              "pattern": "import\\s+Button\\s+from\\s*['\"]\\.\\./\\.\\./\\.\\./components/ui/Button(\\.tsx)?['\"]",
              "message": "Komponen bersama ada di luar folder fitur, jadi jalurnya naik TIGA tingkat sampai `src/`, lalu masuk `components/ui/Button`. Perhatikan huruf besar-kecilnya harus persis: macOS memaafkan, server Linux tempat aplikasimu di-deploy tidak."
            }
          ],
          "solution": "import { useAuth } from '../../auth/hooks/useAuth';\nimport Button from '../../../components/ui/Button';",
          susunKode: {
            question:
              "Impor useAuth dan Button dari jalur folder yang tepat.",
            potongan: [
              "import { useAuth } from '../../auth/hooks/useAuth';",
              "import Button from '../../../components/ui/Button';",
            ],
            pengecoh: [
              "import { useAuth } from 'auth/hooks/useAuth';",
              "import Button from 'components/ui/Button';",
            ],
            pemisah: "\n",
            explanation:
              "Pengimporan antar folder fitur menggunakan jalur relatif `'../../auth/hooks/useAuth'`. Pengecoh jalur mutlak tanpa alias menggoda tetapi akan ditolak TypeScript jika belum ada konfigurasi alias di tsconfig. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-11-2",
          "title": "Container vs Presentational Pattern",
          "explanation": "Pola pemisahan komponen Container (Smart) dan Presentational (Dumb) membantu memisahkan tanggung jawab antara pengelolaan logika data dan tampilan UI. Komponen Container menangani pengambilan data, pengelolaan state, dan logika bisnis, lalu meneruskan datanya ke komponen Presentational yang hanya fokus merender elemen JSX dan gaya tampilan. Pola ini membuat komponen tampilan menjadi sangat bersih dan mudah dites. Jebakan umum adalah memasukkan panggilan API kompleks di dalam komponen tombol tampilan kecil.",
          "example": {
            "code": "// CONTAINER — tahu dari mana data datang\nfunction DaftarUserContainer() {\n  const { data, isLoading } = useSWR('/api/users', fetcher);\n  if (isLoading) return <p>Memuat...</p>;\n  return <DaftarUser users={data} />;\n}\n\n// PRESENTATIONAL — tidak tahu apa pun soal jaringan\nfunction DaftarUser({ users }) {\n  return (\n    <ul>\n      {users.map((u) => (\n        <li key={u.id}>{u.name}</li>\n      ))}\n    </ul>\n  );\n}",
            "output": "Di aplikasi: <DaftarUserContainer />\n  → <p>Memuat...</p> lalu daftar nama\n\nDi test/Storybook: <DaftarUser users={[{ id: 1, name: \"Bimo\" }]} />\n  → <ul><li>Bimo</li></ul>   (tanpa server, tanpa mock)",
            "note": "Keuntungan yang paling terasa ada di baris kedua output: komponen presentational bisa diuji dan ditampilkan tanpa API sama sekali. Sejak ada custom hook, pemisahannya jarang lagi memakai nama \"Container\" — logikanya dipindah ke hook, tapi prinsipnya sama. Catatan jujur soal panel preview: paket `@tanstack/react-query` tidak terpasang di sana, jadi potongan ini tidak dijalankan — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Komponen `KartuProduk` sekarang memanggil API sendiri, sehingga tidak bisa diuji tanpa server. Tulis versi presentational-nya: komponen `KartuProduk` yang menerima props `produk` dan hanya menampilkan `produk.nama` di dalam `<h3>` serta `produk.harga` di dalam `<p>`. Jangan ada pemanggilan data di dalamnya.",
          "starterCode": "// Versi lama (container + tampilan tercampur):\n// function KartuProduk({ id }) {\n//   const { data } = useSWR(`/api/produk/${id}`, fetcher);\n//   return <h3>{data.nama}</h3>;\n// }\n\n// Tulis versi presentational-nya di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "(function\\s+KartuProduk\\s*\\(\\s*\\{\\s*produk|const\\s+KartuProduk\\s*=\\s*\\(?\\s*\\{\\s*produk)",
              "message": "Komponen presentational menerima datanya lewat props — bongkar `produk` di parameternya. Selama ia masih menerima `id` lalu mencari datanya sendiri, ia tetap container."
            },
            {
              "pattern": "<h3>\\s*\\{\\s*produk\\.nama\\s*\\}\\s*</h3>",
              "message": "Tampilkan nama produk di dalam `<h3>` memakai kurung kurawal. Menulis `{produk}` langsung akan gagal: React tidak bisa merender object mentah dan melempar \"Objects are not valid as a React child\"."
            },
            {
              "pattern": "<p>\\s*\\{\\s*produk\\.harga\\s*\\}\\s*</p>",
              "message": "Harganya ditampilkan di dalam `<p>`. Angka boleh langsung dirender React; yang tidak boleh adalah object dan array of object."
            },
            {
              "pattern": "(useSWR|fetch\\(|useQuery|useEffect)",
              "mustNotMatch": true,
              "message": "Komponen presentational tidak boleh mengambil data sendiri — hapus `useSWR`/`fetch`/`useEffect`. Justru ketiadaan itulah yang membuatnya bisa dites tanpa server dan dipakai ulang untuk data dari sumber mana pun."
            }
          ],
          "solution": "function KartuProduk({ produk }) {\n  return (\n    <div>\n      <h3>{produk.nama}</h3>\n      <p>{produk.harga}</p>\n    </div>\n  );\n}",
          susunKode: {
            potongan: [
              "function KartuProduk({ produk }) {",
              "  return (",
              "    <div>",
              "      <h3>{produk.nama}</h3>",
              "      <p>{produk.harga}</p>",
              "    </div>",
              "  );",
              "}",
            ],
            pengecoh: [
              "  const { data } = useSWR('/api/produk'); return <div>{data}</div>;",
              "function KartuProduk(props) { return <div>{props}</div>;",
            ],
            pemisah: "\n",
            explanation:
              "Presentational component murni menerima data via props tanpa melakukan data fetching sendiri seperti `useSWR`. Pengecoh `useSWR` menggoda tetapi melanggar pemisahan tanggung jawab container/presentational. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-11-3",
          "title": "Handling Crash dengan Error Boundary",
          "explanation": "Error Boundary adalah komponen kelas React khusus yang menangkap kesalahan JavaScript tak tertangani (*unhandled error*) di mana saja di dalam pohon komponen anaknya, mencatat kesalahan tersebut, dan menampilkan UI cadangan (*fallback UI*) yang ramah pengguna. Tanpa Error Boundary, satu kesalahan kecil pada komponen anak akan membuat seluruh tampilan aplikasi React menghapus dirinya dan menjadi layar putih kosong (*White Screen of Death*). Mengimplementasikan Error Boundary adalah standar wajib pada aplikasi tingkat produksi. Jebakan pemula adalah mengira `try/catch` biasa di event handler dapat menangkap error render komponen.",
          "example": {
            "code": "<ErrorBoundary fallback={<p>Terjadi kesalahan</p>}><Dashboard /></ErrorBoundary>",
            "output": "Dashboard melempar error saat render:\n\nTanpa ErrorBoundary:\n(seluruh halaman kosong — putih; hanya konsol yang berisi pesan error)\n\nDengan ErrorBoundary:\n<p>Terjadi kesalahan</p>       ← hanya bagian dashboard yang diganti\nNavbar dan Sidebar tetap tampil dan tetap bisa dipakai",
            "note": "Error Boundary hanya menangkap error yang terjadi SAAT RENDER (dan di lifecycle). Error di dalam event handler dan promise yang gagal TIDAK tertangkap — itu tetap urusan `try/catch`. Salah paham ini sering membuat orang mengira boundary-nya tidak bekerja. Catatan jujur soal panel preview: `ErrorBoundary` di sini komponen milik proyek/library yang tidak ada di editor, jadi panel tidak menampilkan hasilnya — tesnya tetap bisa lulus."
          },
          "instruction": "Lindungi komponen `<Profile />` dari kecelakaan render dengan membungkusnya di dalam komponen pelindung error (`ErrorBoundary`) yang menampilkan teks `<p>Error</p>` saat terjadi masalah.",
          "starterCode": "// Tulis ErrorBoundary di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<ErrorBoundary\\b",
              "message": "Bagian yang ingin dilindungi dibungkus komponen `ErrorBoundary`. Letakkan sedekat mungkin dengan bagian yang berisiko — satu boundary di root memang mencegah layar putih, tapi seluruh aplikasi tetap terganti pesan error."
            },
            {
              "pattern": "fallback\\s*=\\s*\\{\\s*<p>\\s*Error\\s*</p>\\s*\\}",
              "message": "Isi props `fallback` dengan elemen `<p>Error</p>` di dalam kurung kurawal. Nilainya JSX, bukan teks biasa — `fallback=\"Error\"` diterima TypeScript pada beberapa implementasi tapi tidak menampilkan elemen apa pun."
            },
            {
              "pattern": "<Profile\\s*/>[\\s\\S]*</ErrorBoundary>",
              "message": "`<Profile />` harus berada DI DALAM boundary-nya. Komponen di luar boundary tidak terlindungi — dan error di dalam boundary itu sendiri (bukan anaknya) juga tidak tertangkap."
            }
          ],
          "solution": "<ErrorBoundary fallback={<p>Error</p>}><Profile /></ErrorBoundary>",
          susunKode: {
            question:
              "Bungkus komponen <Profile /> dengan ErrorBoundary.",
            potongan: [
              "<ErrorBoundary ",
              "fallback=",
              "{<p>Error</p>}>",
              "<Profile />",
              "</ErrorBoundary>"
],
            pengecoh: [
              "<TryCatch ",
              "error="
],
            pemisah: "",
            explanation:
              "Menangani crash komponen menggunakan pembungkus `<ErrorBoundary fallback={<p>Error</p>}>`. Pengecoh `<TryCatch>` menggoda tetapi try/catch biasa tidak bekerja untuk menangani crash pada JSX di dalam render. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
        },
        {
          "kind": "step",
          "id": "react-11-4",
          "title": "Environment Variable (import.meta.env)",
          "explanation": "Variabel lingkungan (*environment variables*) di Vite diakses melalui objek `import.meta.env` dan hanya variabel yang diawali dengan awalan `VITE_` yang akan diikutsertakan ke dalam bundel client. Sangat krusial untuk diingat bahwa seluruh variabel bermprefix `VITE_` dapat dibaca oleh siapapun yang menginspeksi sumber kode di browser. Oleh karena itu, jangan pernah menyimpan kunci rahasia backend (*Secret Keys*, database password, private tokens) di dalam berkas `.env` client React. Jebakan paling berbahaya adalah membocorkan secret API key ke repository publik via file `.env`.",
          "example": {
            "code": "const apiUrl = import.meta.env.VITE_API_URL;",
            "output": "Mengakses URL backend tanpa hardcode di berkas kode.",
            "note": "Jangan simpan API Key rahasia backend di environment frontend! Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Deklarasikan konstanta `url` yang membaca nilai environment variable `import.meta.env.VITE_API_URL`.",
          "starterCode": "// Tulis variabel url di sini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "import\\.meta\\.env",
              "message": "Di proyek Vite, variabel lingkungan dibaca lewat `import.meta.env` — bukan `process.env` yang hanya ada di Node."
            },
            {
              "pattern": "VITE_API_URL",
              "message": "Sebut nama variabelnya. Awalan `VITE_` itu wajib: Vite HANYA mengekspos variabel berawalan itu ke kode browser, justru supaya kredensial tanpa awalan tidak ikut terkirim ke pengguna."
            },
            {
              "pattern": "const\\s+url\\s*=",
              "message": "Simpan hasilnya ke variabel agar bisa dipakai. Ingat: apa pun yang masuk sini bisa dibaca siapa saja di DevTools, jadi jangan menaruh kunci rahasia."
            }
          ],
          "solution": "const url = import.meta.env.VITE_API_URL;",
          susunKode: {
            question:
              "Baca environment variable import.meta.env.VITE_API_URL.",
            potongan: [
              "const url = ",
              "import.meta.env.",
              "VITE_API_URL;"
],
            pengecoh: [
              "const api = ",
              "process.env."
],
            pemisah: "",
            explanation:
              "Akses variabel lingkungan di Vite menggunakan `import.meta.env.VITE_API_URL`. Pengecoh `process.env` menggoda pengembang Webpack/CRA tetapi tidak tersedia di browser pada proyek Vite yang menggunakan import.meta.",
          },
        },
        {
          "kind": "step",
          "id": "react-11-5",
          "title": "Strategi Orientasi Codebase Baru",
          "explanation": "Pekerjaan pertamamu sebagai developer React hampir pasti bukan menulis proyek dari nol, melainkan masuk ke codebase yang sudah berjalan bertahun-tahun dan ditulis orang lain. Urutan orientasi yang terbukti hemat waktu: baca `package.json` dulu (library apa yang dipakai, skrip apa yang tersedia, versi React dan router-nya berapa), lalu buka titik masuk aplikasinya (`main.tsx` → `App.tsx`) untuk melihat provider dan pembungkus apa saja yang aktif, lalu baca berkas router-nya — daftar route adalah peta fitur yang paling jujur, karena setiap halaman yang benar-benar ada pasti terdaftar di situ. Kapan urutan ini dipakai? Hari pertama onboarding, dan setiap kali kamu ditugasi memperbaiki bug di bagian yang belum pernah kamu buka. Jebakan yang paling banyak memakan waktu pemula adalah membaca berkas satu per satu dari atas ke bawah folder `src/`, atau langsung menyalakan debugger sebelum tahu bentuk aplikasinya. Jebakan kedua: mengubah gaya penulisan kode mengikuti selera sendiri — di codebase tim, konsistensi dengan yang sudah ada lebih dihargai daripada versi \"yang lebih rapi menurutmu\".",
          "example": {
            "code": "# 1. apa yang dipakai proyek ini?\ncat package.json\n\n# 2. seberapa besar dan bagaimana isinya ditata?\nls src\n\n# 3. siapa yang paling sering menyentuhnya belakangan ini?\ngit log --oneline -10",
            "output": "$ cat package.json\n{\n  \"scripts\": { \"dev\": \"vite\", \"test\": \"vitest\" },\n  \"dependencies\": {\n    \"react\": \"^19.0.0\",\n    \"react-router-dom\": \"^7.1.0\",\n    \"zustand\": \"^5.0.2\"\n  }\n}\n\n$ ls src\nApp.tsx  main.tsx  components  features  hooks  routes.tsx\n\n$ git log --oneline -10\n9c1f2ab fix(cart): harga diskon salah dibulatkan\n3ab77e1 feat(auth): halaman lupa password",
            "note": "Tiga perintah itu sudah menjawab banyak hal: state global memakai Zustand (bukan Redux), routing memakai react-router v7, test memakai Vitest, dan pekerjaan terbaru ada di fitur cart dan auth. Membaca 20 berkas acak tidak akan memberi gambaran sebesar ini. Catatan jujur soal panel preview: paket `zustand` tidak terpasang di sana, jadi store ini tidak dijalankan — tesnya tetap bisa lulus."
          },
          "instruction": "Hari pertamamu di proyek React yang belum pernah kamu buka. Tulis tiga perintah terminal orientasi, satu per baris, dengan urutan ini: (1) tampilkan isi berkas manifest proyek untuk tahu library dan skripnya, (2) daftar isi folder `src`, (3) tampilkan 10 commit terakhir dalam bentuk satu baris per commit.",
          "starterCode": "# Tulis tiga perintah orientasi di bawah ini, satu per baris\n",
          "language": "text",
          "tests": [
            {
              "pattern": "(cat|less|bat|head)\\s+package\\.json",
              "message": "Berkas pertama yang dibaca adalah manifest proyeknya (`package.json`) — di situ ada daftar library, versinya, dan skrip yang bisa dijalankan. Perintah apa pun yang menampilkan isi berkas diterima (`cat`, `less`, `head`)."
            },
            {
              "pattern": "ls\\s+(-\\w+\\s+)*src",
              "message": "Langkah kedua: lihat isi folder `src` untuk mengenali penataannya — by-type atau by-feature. Ini menentukan cara kamu mencari berkas selama berbulan-bulan berikutnya."
            },
            {
              "pattern": "git\\s+log[^\\n]*--oneline",
              "message": "Langkah ketiga memakai `git log --oneline` (boleh dengan `-10`) supaya satu commit tampil satu baris. Riwayat terbaru memberi tahu bagian mana yang sedang aktif dikerjakan tim — dan biasanya di situlah bug yang kamu tangani berada."
            }
          ],
          "solution": "cat package.json\nls src\ngit log --oneline -10",
          susunKode: {
            question:
              "Jalankan perintah orientasi codebase baru.",
            potongan: [
              "cat package.json\nls src",
              "git log --oneline -10",
            ],
            pengecoh: [
              "npm audit\nls dist",
              "git push origin main",
            ],
            pemisah: "\n",
            explanation:
              "Perintah dasar membaca proyek baru meliputi `cat package.json`, `ls src`, dan `git log --oneline -10`. Pengecoh `git push` sangat berbahaya dan bukan merupakan langkah eksplorasi codebase awal yang bijak. Hal ini sering keliru bagi pemula.",
          },
        },
        {
          "kind": "step",
          "id": "react-11-6",
          "title": "Checklist Code Review untuk PR React",
          "explanation": "Code review adalah tempat sebagian besar pengetahuan React berpindah di dalam tim, dan reviewer yang baik memeriksa hal yang sama setiap kali — bukan mengandalkan ingatan. Empat hal yang paling sering menjadi temuan pada PR React: `key` pada daftar (memakai index untuk daftar yang bisa dihapus atau diurutkan), effect tanpa fungsi cleanup (timer, listener, dan request yang menumpuk), state turunan yang seharusnya cukup dihitung saat render, dan aksesibilitas (tombol tanpa label, `div` ber-`onClick` tanpa peran dan tabIndex). Kapan checklist ini kamu pakai? Dua kali: sebelum membuka PR sendiri — itu yang paling menghemat waktu tim — dan saat mereview PR orang lain. Jebakan yang membuat review terasa menyakitkan bagi penerimanya adalah komentar yang hanya menyatakan sesuatu salah tanpa menyebutkan GEJALANYA; \"pakai id untuk key\" jauh kurang meyakinkan daripada \"kalau baris dihapus, isi input bisa berpindah ke baris lain karena React mencocokkan berdasarkan posisi\". Jebakan kedua: menghabiskan seluruh review pada gaya penulisan (kutip, koma, urutan impor) — hal-hal itu tugas linter dan formatter, bukan manusia.",
          "example": {
            "code": "// Potongan dari sebuah PR:\n// <input value={q} onChange={(e) => setQ(e.target.value)} />\n// <button onClick={cari}><IconSearch /></button>\n\n// ❌ komentar yang tidak menolong\n// \"Tombolnya kurang aksesibel.\"\n\n// ✅ komentar yang menyebut gejala + perbaikannya\n// \"Tombol ini isinya cuma ikon, jadi pembaca layar membacanya sebagai\n//  \"button\" tanpa keterangan apa pun. Tambahkan aria-label=\"Cari\".\"",
            "output": "Hasil review yang bisa langsung dikerjakan:\n\n- baris 2: tombol hanya berisi ikon → tambahkan aria-label=\"Cari\"\n- baris 1: input tanpa label → tambahkan <label htmlFor> atau aria-label",
            "note": "Pola komentar review yang dipakai reviewer senior: sebut LOKASI, sebut GEJALA yang akan dialami pengguna, lalu sebut perbaikan konkretnya. Komentar tanpa gejala mudah dibalas \"di laptop saya jalan\", dan diskusinya berhenti di selera. Catatan jujur: yang kamu tulis di sini adalah komentar review berbentuk teks, jadi panel preview tidak menjalankan apa pun — tesnya memeriksa isi temuanmu, dan tetap bisa lulus."
          },
          "instruction": "Baca potongan PR di editor. Ada DUA masalah nyata di sana — satu soal `key` pada daftar yang bisa dihapus, satu soal effect yang memasang sesuatu tanpa membersihkannya. Tulis komentar review dalam bentuk daftar (satu baris per temuan): sebut kata kunci masalahnya dan perbaikannya. Kamu harus menemukannya sendiri, bukan menyalin.",
          "starterCode": "# PR #128 - feat: daftar tugas bisa dihapus\n#\n# function DaftarTugas({ tugas, onHapus }) {\n#   useEffect(() => {\n#     const id = setInterval(() => refresh(), 5000);\n#   }, []);\n#\n#   return (\n#     <ul>\n#       {tugas.map((t, index) => (\n#         <li key={index}>\n#           {t.judul}\n#           <button onClick={() => onHapus(t.id)}>hapus</button>\n#         </li>\n#       ))}\n#     </ul>\n#   );\n# }\n\n# Tulis komentar review-mu di bawah ini (satu baris per temuan)\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bkey\\b[\\s\\S]{0,240}\\bt\\.id\\b",
              "message": "Temuan pertama ada pada daftarnya: `key={index}` dipakai padahal setiap baris punya tombol hapus. Sebut `key` dalam komentarmu DAN perbaikannya (`t.id`) — review yang cuma menyebut masalah tanpa jalan keluar biasanya berbalas pertanyaan, dan satu putaran review terbuang."
            },
            {
              "pattern": "\\b(cleanup|clearInterval|dibersihkan)\\b",
              "message": "Temuan kedua ada di dalam effect: `setInterval` dipasang tanpa pernah dihentikan, jadi setiap kali komponen dipasang ulang timer baru menumpuk dan `refresh()` berjalan berkali-kali. Sebut cleanup-nya (`return () => clearInterval(id)`)."
            },
            {
              "pattern": "\\bindex\\b",
              "message": "Sebutkan gejalanya, bukan cuma aturannya: karena key memakai `index`, React mencocokkan baris berdasarkan POSISI — menghapus baris ke-2 bisa membuat isi baris ke-3 terlihat pindah. Komentar yang menyebut gejala jauh lebih mudah disetujui penulis PR-nya."
            }
          ],
          "solution": "- key={index} pada daftar yang punya tombol hapus: ganti ke key={t.id}. Dengan index, React mencocokkan baris berdasarkan posisi, jadi setelah satu baris dihapus isi baris lain bisa terlihat berpindah.\n- useEffect memasang setInterval tanpa cleanup: tambahkan return () => clearInterval(id) supaya timer lama dihentikan; tanpa itu timer menumpuk setiap komponen dipasang ulang dan refresh() jalan berkali-kali.",
          susunKode: {
            question:
              "Tulis dua poin checklist code review.",
            potongan: [
              "- key={index} pada daftar yang punya tombol hapus: ganti ke key={t.id}. Dengan index, React mencocokkan baris berdasarkan posisi, jadi setelah satu baris dihapus isi baris lain bisa terlihat berpindah.",
              "- useEffect memasang setInterval tanpa cleanup: tambahkan return () => clearInterval(id) supaya timer lama dihentikan; tanpa itu timer menumpuk setiap komponen dipasang ulang dan refresh() jalan berkali-kali.",
            ],
            pengecoh: [
              "- key={index} sudah paling bagus karena index selalu unik untuk semua item di array.",
              "- useEffect memasang setInterval tanpa return fungsi: tidak perlu menghentikan timer karena browser akan mengurus memori secara otomatis.",
            ],
            pemisah: "\n",
            explanation:
              "Checklist code review mengingatkan bahaya `key={index}` pada list dinamis dan pentingnya fungsi cleanup pada `useEffect` interval. Pengecoh mengklaim sebaliknya yang merupakan mitos keliru di React yang sering dipercayai pemula.",
          },
        },
        {
          "kind": "step",
          "id": "react-11-7",
          "title": "Aksesibilitas (a11y) di React",
          "explanation": "Aksesibilitas web (*a11y*) di React memastikan bahwa aplikasi yang kamu bangun dapat digunakan dengan nyaman oleh semua orang, termasuk pengguna penyandang disabilitas yang menggunakan pembaca layar (*screen reader*) atau navigasi papan ketik (*keyboard navigation*). Praktik utamanya meliputi penggunaan elemen HTML semantik (`<button>`, `<main>`, `<nav>`), menyertakan atribut `aria-label` pada tombol berbasis ikon tanpa teks, serta mengelola urutan fokus keyboard saat modal dialog terbuka. Memperhatikan aksesibilitas adalah standar kualitas pengembang profesional. Jebakan umum adalah menggunakan tag `<div>` dengan event `onClick` tanpa atribut `role='button'` dan `tabIndex`.",
          "example": {
            "code": "<label htmlFor=\"email\">Email</label>\n<input id=\"email\" type=\"email\" />",
            "output": "Yang dibacakan pembaca layar saat kursor masuk ke input:\n\"Email, edit teks\"\n\nKalau htmlFor dihapus (tampilannya sama persis):\n\"edit teks\"        ← pengguna tidak tahu kotak ini untuk apa\n\nBonus: dengan label terhubung, mengklik tulisan \"Email\" ikut memfokuskan input.",
            "note": "Ini jebakan aksesibilitas yang paling sulit dilihat: tampilannya identik, tidak ada error, dan satu-satunya cara mengetahuinya adalah mencoba klik pada tulisan labelnya atau membuka tab Accessibility di DevTools. Catatan jujur: potongan sebaris seperti ini bukan komponen utuh, jadi panel preview tidak menampilkan hasil visual — yang diperiksa kodenya, dan tesnya tetap bisa lulus."
          },
          "instruction": "Sebuah input dengan `id=\"username\"` sekarang hanya punya tulisan biasa di sebelahnya, jadi pembaca layar tidak tahu kotak itu untuk apa. Tulis elemen label yang benar-benar TERHUBUNG ke input itu, dengan tulisan `Username` — ingat atribut penghubungnya ditulis berbeda di JSX dibanding HTML.",
          "starterCode": "// Tulis elemen label di bawah ini\n",
          "language": "jsx",
          "tests": [
            {
              "pattern": "<label",
              "message": "Setiap input butuh label yang terhubung — inilah yang dibacakan screen reader dan yang membuat area klik ikut membesar."
            },
            {
              "pattern": "htmlFor=[\"']username[\"']",
              "message": "Di JSX, atribut penghubung label ditulis `htmlFor`, bukan `for` (kata itu milik JavaScript). Nilainya harus SAMA dengan `id` input yang dituju — kalau tidak sama, hubungannya tidak terbentuk meskipun tampilannya terlihat normal."
            },
            {
              "pattern": ">\\s*Username\\s*</label>",
              "message": "Teks labelnya ditulis di antara tag pembuka dan penutup."
            }
          ],
          "solution": "<label htmlFor=\"username\">Username</label>",
          susunKode: {
            potongan: [
              "<label ",
              "htmlFor=\"username\">",
              "Username</label>"
],
            pengecoh: [
              "<input ",
              "for=\"username\">"
],
            pemisah: "",
            explanation:
              "Atribut penunjuk input pada label JSX ditulis `htmlFor=\"username\"` karena `for` adalah kata kunci reserved JavaScript. Pengecoh `for` menggoda pengembang HTML murni tetapi merupakan kesalahan sintaks di JSX. Pengecoh yang diberikan sengaja dirancang dari kesalahan nyata agar latihan ini melatih pemahaman mendalam tentang React.",
          },
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
