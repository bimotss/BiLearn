import type { Track } from "@/lib/types";

export const nodeExpressTrack: Track = {
  slug: "node-express",
  title: "Node.js & Express",
  description: "REST API, auth, dan keamanan — jalur startup & kerja remote.",
  hours: 70,
  recommendedPrereqs: ["javascript", "typescript", "git"],
  color: "bg-green-600",
  icon: "🟢",
  order: 9,
  modules: [
    {
      slug: "persiapan-node-runtime",
      title: "Persiapan & Node.js Runtime",
      description:
        "Pasang Node.js versi LTS, siapkan proyek pertama, lalu pahami runtime-nya: file system, module, dan ekosistem npm.",
      topics: [
        "Memasang Node.js LTS (nvm) & memverifikasi node -v / npm -v",
        "Apa itu Node.js & bedanya dengan browser",
        "Module system: ESM di Node",
        "npm: package.json, scripts, dependencies vs devDependencies",
        "File system (fs/promises) & path",
        "Environment variable & dotenv",
        "Event emitter & stream (pengenalan)",
        "nodemon/tsx untuk development",
      ],
      items: [
        {
          kind: "materi",
          id: "node-1-m0",
          title: "Persiapan: Memasang Node.js dan Menyiapkan Proyek Pertama",
          body:
            "# Pengertian\n\n" +
            "**Node.js** adalah program yang menjalankan JavaScript **di luar browser**. Sampai track ini, semua kode JavaScript-mu dieksekusi oleh browser; sekarang eksekutornya adalah Node, yang berjalan di terminal dan punya kemampuan yang tidak boleh dimiliki browser: membaca berkas di harddisk, membuka port jaringan, dan berbicara langsung dengan database.\n\n" +
            "Sebelum itu semua, dua hal harus beres: **Node terpasang dengan versi yang benar**, dan **folder proyekmu punya `package.json`**.\n\n" +
            "## Memasang Node.js\n\n" +
            "| Cara | Perintah | Kapan dipilih |\n" +
            "|---|---|---|\n" +
            "| **nvm** (dianjurkan) | `nvm install --lts` lalu `nvm use --lts` | kamu akan mengerjakan lebih dari satu proyek — tiap proyek bisa butuh versi Node berbeda |\n" +
            "| Installer resmi | unduh dari nodejs.org, pilih **LTS** | komputer baru, satu proyek, ingin cepat |\n" +
            "| Homebrew (macOS) | `brew install node` | sudah biasa memakai brew |\n\n" +
            "Selalu pilih **LTS** (*Long Term Support*), bukan versi \"Current\". LTS yang dipakai perusahaan, dan library populer diuji terhadapnya. Versi Current lebih baru tapi lebih sering membuat paket gagal terpasang.\n\n" +
            "```text\n" +
            "$ node -v\n" +
            "v22.14.0\n" +
            "\n" +
            "$ npm -v\n" +
            "10.9.2\n" +
            "```\n\n" +
            "`npm` ikut terpasang bersama Node — kamu tidak memasangnya terpisah. Kalau `node -v` jalan tapi `npm -v` tidak, pemasangannya tidak lengkap dan sebaiknya diulang.\n\n" +
            "## Anatomi Proyek Node Pertamamu\n\n" +
            "```text\n" +
            "$ mkdir toko-api && cd toko-api\n" +
            "$ npm init -y            <-- membuat package.json otomatis\n" +
            "$ npm install express    <-- menambah dependency\n" +
            "\n" +
            "toko-api/\n" +
            "├── package.json        <-- daftar dependency + scripts (WAJIB di-commit)\n" +
            "├── package-lock.json   <-- versi persis tiap paket (WAJIB di-commit)\n" +
            "├── node_modules/       <-- isi paketnya (JANGAN di-commit, masuk .gitignore)\n" +
            "├── .env                <-- kredensial (JANGAN di-commit)\n" +
            "└── src/\n" +
            "    └── index.js        <-- kodemu\n" +
            "```\n\n" +
            "Aturan yang tidak bisa dinegosiasi: `node_modules` dan `.env` masuk `.gitignore`, sementara `package.json` dan `package-lock.json` **harus** ikut ke repo. Alasannya sederhana — dari dua berkas itu, orang lain bisa membangun ulang `node_modules` yang identik dengan `npm ci`.\n\n" +
            "## Browser vs Node: Apa yang Hilang dan Apa yang Didapat\n\n" +
            "| | Browser | Node.js |\n" +
            "|---|---|---|\n" +
            "| `window`, `document`, DOM | ada | **tidak ada** |\n" +
            "| Membaca/menulis berkas | tidak boleh | `node:fs` |\n" +
            "| Membuka server di sebuah port | tidak bisa | `node:http`, Express |\n" +
            "| Variabel lingkungan | tidak ada | `process.env` |\n" +
            "| Siapa yang menjalankan | pengunjung situs | kamu / server |\n\n" +
            "Karena `document` tidak ada di Node, menyalin kode DOM ke berkas Node menghasilkan `ReferenceError: document is not defined` — dan itu error paling sering di hari pertama seorang frontend berpindah ke backend.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Browser itu seperti **ruang tamu**: tamu (pengunjung) boleh masuk, tapi ada banyak hal yang tidak boleh ia sentuh. Node.js adalah **dapur dan gudang**: di sini ada api, pisau, dan seluruh stok bahan. Kamu bisa melakukan apa saja — termasuk hal berbahaya seperti menghapus berkas atau membocorkan kredensial.\n\n" +
            "Dari sini konsekuensi keamanannya jadi masuk akal: kode yang berjalan di Node dipercaya penuh oleh sistem, jadi setiap masukan dari pengguna harus dianggap tidak bisa dipercaya sampai divalidasi.\n\n" +
            "## Jebakan yang Menjatuhkan Hampir Semua Pemula\n\n" +
            "1. **Menjalankan `npm install` di folder yang salah.** Kalau `package.json` tidak ada di folder itu, npm membuat proyek baru atau memasang ke folder induk — dan kamu berakhir dengan `node_modules` berantakan di mana-mana. Periksa dengan `ls` bahwa `package.json` ada.\n" +
            "2. **Meng-commit `node_modules`.** Ukurannya bisa ratusan megabyte dan isinya bisa dibangun ulang. Ini temuan yang hampir selalu diminta diperbaiki di code review pertama.\n" +
            "3. **Mengira `npm install -g` menyelesaikan masalah versi.** Paket global tidak tercatat di `package.json`, jadi proyekmu jalan di komputermu dan gagal di komputer orang lain.\n" +
            "4. **Memakai `require()` di berkas ESM atau `import` di berkas CommonJS.** Ini penyebab error `Cannot use import statement outside a module`; penentunya `\"type\": \"module\"` di `package.json`.\n" +
            "5. **Menyalin kode browser (`document.querySelector`) ke Node.** Tidak akan pernah jalan — Node tidak punya DOM.\n" +
            "6. **Lupa `.env` masuk `.gitignore`.** Sekali ter-commit, kredensialnya harus dianggap bocor dan wajib diganti, bukan cukup dihapus.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "- Hari pertama di proyek Node hampir selalu: `git clone`, `npm ci`, salin `.env.example` menjadi `.env`, `npm run dev`. Kalau salah satu langkah itu gagal, yang pertama dicurigai adalah versi Node — karena itu banyak repo memasang berkas `.nvmrc`.\n" +
            "- Beda `npm install` dan **`npm ci`** adalah pertanyaan **interview** yang sering muncul: `ci` memasang tepat sesuai `package-lock.json` dan itulah yang dipakai di server build.\n" +
            "- Di **code review**, `dependencies` vs `devDependencies` yang tertukar akan disorot: memasukkan library testing ke `dependencies` membuat image produksi membengkak.\n\n" +
            "> **Kapan dipakai:** setiap kali memulai backend baru — `node -v` untuk memastikan versinya, `npm init -y` untuk membuat `package.json`, lalu `.gitignore` berisi `node_modules` dan `.env` **sebelum** commit pertama.\n\n" +
            "> **Catatan tentang latihan di BiLearn:** panel latihan track ini **tidak menjalankan Node.js** (preview berjalan di dalam browser), jadi tidak ada keluaran terminal yang muncul di sana. Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Keluaran nyata ditampilkan di bagian **Contoh** setiap latihan.",
        },
        {
          kind: "step",
          id: "node-1-0",
          title: "Menyiapkan Proyek Node Pertama",
          explanation:
            "Setiap proyek Node dimulai dari `package.json` — berkas yang mencatat nama proyek, daftar dependency, dan perintah `scripts`. Perintah `npm init` membuatnya secara interaktif dengan sederet pertanyaan, dan flag `-y` (atau `--yes`) menjawab semuanya dengan nilai default sehingga berkasnya langsung jadi. Kamu memakai bentuk cepat ini saat proyek latihan atau saat kamu memang akan menyunting berkasnya sendiri setelahnya. Jebakan pertama: menjalankannya di folder yang salah, sehingga `package.json` lahir di tempat tak terduga — pastikan kamu sudah `cd` ke folder proyek. Jebakan kedua: menjalankan `npm install <paket>` sebelum `package.json` ada; npm akan mencari ke folder induk dan bisa menambahkan dependency ke proyek lain tanpa kamu sadari.",
          example: {
            code: "mkdir toko-api\ncd toko-api\nnpm init -y",
            output:
              "Wrote to /home/bimo/toko-api/package.json:\n\n" +
              "{\n" +
              '  "name": "toko-api",\n' +
              '  "version": "1.0.0",\n' +
              '  "main": "index.js",\n' +
              '  "scripts": {\n' +
              '    "test": "echo \\"Error: no test specified\\" && exit 1"\n' +
              "  },\n" +
              '  "license": "ISC"\n' +
              "}",
            note: "Perhatikan `\"main\": \"index.js\"` dan belum adanya `\"type\": \"module\"` — selama itu belum ditambahkan, berkasmu diperlakukan sebagai CommonJS dan sintaks `import` akan ditolak.",
          },
          instruction:
            "Kamu sudah berada di dalam folder proyek yang masih kosong dan ingin `package.json` dibuat langsung tanpa menjawab satu pun pertanyaan interaktif. Tulis satu perintah npm yang melakukannya.",
          starterCode: "# tulis perintahnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "npm\\s+init\\s+(-y|--yes)",
              message:
                "Perintahnya `npm init`, ditambah flag yang menyetujui semua pertanyaan default. Ada dua bentuk yang diterima: yang pendek satu huruf, atau yang panjang berawalan dua tanda minus.",
            },
          ],
          solution: "npm init -y",
          susunKode: {
            question:
              "Rangkai perintah terminal npm untuk menginisialisasi proyek Node.js secara otomatis tanpa prompt interaktif.",
            potongan: [
              "npm",
              "init",
              "-y",
            ],
            pengecoh: [
              "npm create",
              "--force",
            ],
            pemisah: " ",
            explanation:
              "Perintah npm init dengan flag -y (yes) menghasilkan file package.json dengan nilai default. Keping npm create keliru karena create digunakan untuk generator boilerplate seperti create-react-app. Keping --force menggoda tetapi bukan flag penyiapan cepat package.json.",
          },
        },
        {
          kind: "materi",
          id: "node-1-m1",
          title: "Pengenalan Node.js Runtime & Ecosystem",
          body:
            "# Pengenalan Node.js Runtime & Ecosystem\n\n" +
            "Selama bertahun-tahun, JavaScript hanya dikenal sebagai bahasa yang berjalan di dalam peramban web (browser) untuk memanipulasi tampilan DOM. Node.js lahir saat Ryan Dahl mengekstrak V8 JavaScript Engine milik Google Chrome dan menggabungkannya dengan pustaka C++ berkinerja tinggi bernama `libuv`. Hasilnya adalah sebuah runtime lingkungan eksekusi mandiri yang memungkinkan JavaScript berjalan langsung di server atau komputer lokal tanpa memerlukan peramban web.\n\n" +
            "## Perbedaan Utama Node.js vs Browser\n\n" +
            "Di dalam browser, JavaScript dibatasi oleh sandbox keamanan peramban: kamu bisa mengakses `window`, `document`, dan elemen visual UI, namun tidak bisa membaca file di harddisk komputer pengguna secara bebas. Di Node.js, keadaan berbalik total: objek visual seperti `window` dan `document` **tidak ada**, namun kamu mendapatkan akses penuh ke Sistem Operasi (OS) untuk membaca file, berkomunikasi dengan database, mengelola jaringan, dan membaca variabel lingkungan.\n\n" +
            "| Fitur / API | Browser (Client-Side) | Node.js (Server-Side) |\n" +
            "|---|---|---|\n" +
            "| **Global Object** | `window` / `globalThis` | `global` / `process` |\n" +
            "| **Akses File System** | ❌ Dibatasi (Sandbox) | ✅ Membaca & Menulis file (`node:fs`) |\n" +
            "| **Elemen DOM & Visual** | ✅ (`document.getElementById`) | ❌ Tidak ada (Headless Runtime) |\n" +
            "| **Network Communication** | `fetch` / `XMLHttpRequest` | `http`, `https`, `net`, `fetch` |\n" +
            "| **Module System** | ES Modules (`<script type=\"module\">`) | CommonJS (`require`) & ES Modules (`import`) |\n\n" +
            "## Fitur Bawaan Node.js Modern (LTS 20 & 22)\n\n" +
            "Di masa lalu, pengembang Node.js harus memasang banyak paket npm pihak ketiga hanya untuk hal-hal mendasar. Pada Node.js LTS modern saat ini, banyak fitur penting yang sudah menjadi standar bawaan:\n\n" +
            "- **Native Watch Mode (`node --watch index.js`):** Memantau perubahan berkas dan me-restart server secara otomatis tanpa perlu memasang paket eksternal seperti `nodemon`.\n" +
            "- **Native Env Loader (`node --env-file=.env index.js`):** Membaca berkas `.env` langsung ke `process.env` tanpa perlu pustaka `dotenv`.\n" +
            "- **Global Web API (`fetch`, `FormData`, `crypto`):** Fungsi jaringan `fetch()` kini tersedia secara global tanpa perlu menginstal `node-fetch` atau `axios` untuk request sederhana.\n\n" +
            "## Model Mental Non-Blocking Asynchronous I/O & Event Loop\n\n" +
            "Node.js menggunakan arsitektur *single-threaded event loop*. Alih-alih membuat thread baru yang berat untuk setiap request pengguna, Node.js menyerahkan tugas lambat (seperti membaca file atau query database) ke latar belakang, lalu melanjutkan mengeksekusi kode lain tanpa menunggu (non-blocking). Setelah tugas latar belakang selesai, event loop akan memicu callback yang sesuai.\n\n" +
            "```text\n" +
            "+--------------------------------------------------------------+\n" +
            "|                      Node.js Application                     |\n" +
            "+--------------------------------------------------------------+\n" +
            "                               |\n" +
            "                    [ Single Thread Call Stack ]\n" +
            "                               |\n" +
            "            +------------------+------------------+\n" +
            "            | (Operasi I/O Lambat)                 | (Kode Sinkron)\n" +
            "            v                                     v\n" +
            "   [ Libuv Thread Pool / OS Kernel ]    [ Eksekusi Langsung Instan ]\n" +
            "            |\n" +
            "            v (Selesai Process)\n" +
            "     [ Event Queue ]  ===>  [ Event Loop ]  ===>  [ Callback Executed ]\n" +
            "```\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan seorang pelayan restoran tunggal yang sangat cepat. Alih-alih berdiri di depan dapur menunggu koki selesai memasak pesanan meja 1, pelayan tersebut langsung mencatat pesanan meja 2, 3, dan 4. Ketika koki selesai memasak pesanan meja 1 (event callback), bel dapur berbunyi dan pelayan tersebut langsung mengantarkan makanan ke meja 1. Inilah alasan mengapa Node.js sangat tangguh menangani ribuan koneksi bersamaan (*concurrent connections*).\n\n" +
            "## Streaming Data & Event Emitter\n\n" +
            "Selain eksekusi file biasa, Node.js memiliki modul bawaan `node:events` (`EventEmitter`) dan Stream. Stream memungkinkan kita membaca data berukuran raksasa (misal file video 2GB) secara bertahap potongan demi potongan (*chunk by chunk*) tanpa membuat memori RAM server meledak.\n\n" +
            "## Kesalahan Umum & Jebakan (Pitfalls)\n\n" +
            "- **Mencoba Menggunakan DOM API:** Memanggil `document.querySelector()` atau `alert()` di Node.js akan melempar `ReferenceError` karena objek visual browser tersebut tidak ada di runtime server.\n" +
            "- **Lupa Ekstensi Berkas pada ESM:** Saat menggunakan ES Module (`import`), kamu wajib menuliskan ekstensi berkas secara lengkap untuk impor lokal, contoh: `import { add } from './math.js';` (bukan `./math`).\n" +
            "- **Mencampur CommonJS & ESM:** Menggunakan `require()` di berkas berformat ES Module (`\"type\": \"module\"`) akan menyebabkan error `require is not defined`.\n" +
            "- **Menyimpan Kredensial di Berkas Kode:** Menuliskan kata sandi database langsung di berkas JavaScript alih-alih memanfaatkan `process.env` dari berkas `.env`.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Node.js adalah standar industri backend modern yang dipakai oleh Netflix, Uber, dan PayPal untuk membangun microservices dan REST API berkecepatan tinggi. Pemahaman seputar manajemen paket npm, penanganan modul ESM, serta konfigurasi environment variables merupakan keterampilan dasar wajib di setiap lowongan kerja Backend Developer.",
        },
        {
          kind: "step",
          id: "node-1-1",
          title: "Apa itu Node.js?",
          explanation:
            "Node.js adalah lingkungan eksekusi (runtime) yang memungkinkan JavaScript dijalankan di sisi server atau komputer lokal di luar browser. Berbeda dari browser yang memiliki antarmuka visual DOM seperti `window` atau `document`, Node.js menyediakan objek global `process` untuk berinteraksi langsung dengan sistem operasi. Fitur ini memungkinkan backend membaca file, memproses lingkungan runtime, dan berkomunikasi dengan database. Memahami perbedaan antara browser dan Node.js sangat penting agar kamu tidak keliru memanggil API visual di server backend. Jebakan umum pemula adalah mencoba memanggil `alert()` atau `document` di Node.js yang pasti menghasilkan error.",
          example: {
            code: "const platform = process.platform;\nconsole.log(platform);",
            output: "linux",
            note: "Objek 'process' menyediakan informasi seputar lingkungan runtime Node.js. Hasilnya mengikuti sistem operasimu: 'linux' di server, 'darwin' di macOS, 'win32' di Windows.",
          },
          instruction:
            "Tuliskan perintah JavaScript Node.js untuk mencetak string versi runtime Node.js yang sedang berjalan menggunakan objek global `process`.",
          starterCode: "// Tulis kode console.log di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "console\\.log\\(\\s*process\\.version\\s*\\)",
                        "message": "Node menyediakan objek global `process` berisi informasi runtime; versinya ada di properti `version` (tanpa tanda kurung — ia properti, bukan fungsi). Cetak nilainya dengan `console.log`."
                      }
                    ],
          solution: "console.log(process.version);",
          susunKode: {
            question:
              "Rangkai perintah Node.js untuk mencetak informasi versi Node yang sedang berjalan di runtime.",
            potongan: [
              "console.log(",
              "process.version",
              ");",
            ],
            pengecoh: [
              "process.nodeVersion",
              "console.print(",
            ],
            pemisah: "",
            explanation:
              "Properti global process.version menyimpan string versi runtime Node.js saat ini. Keping process.nodeVersion keliru karena nama properti global resminya adalah process.version. Keping console.print keliru karena metode pencetakan konsol di JavaScript/Node adalah console.log.",
          },
        },
        {
          kind: "step",
          id: "node-1-2",
          title: "ES Module System (import/export)",
          explanation:
            "ES Modules (`import` dan `export`) adalah standar resmi JavaScript modern untuk memecah kode menjadi modul-modul terpisah yang bersih dan mudah dirawat. Kamu bisa mengaktifkan mode ESM di Node.js dengan menambahkan properti `\"type\": \"module\"` di berkas `package.json`. Pendekatan ini menggantikan sintaks lama CommonJS (`require`) dan membuat kodenya konsisten dengan JavaScript peramban modern. Pemisahan modul sangat vital untuk menjaga proyek backend berskala besar tetap modular dan terstruktur. Jebakan umum saat menggunakan ES Module di Node.js adalah lupa menyertakan ekstensi berkas `.js` pada jalur import lokal.",
          example: {
            code: "export const add = (a, b) => a + b;\nconsole.log(add(2, 3));",
            output: "5",
            note: "Impor file lokal wajib mencantumkan ekstensi .js. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat dan ekspor fungsi bernama `multiply` yang menerima dua parameter `(a, b)` dan mengembalikan hasil perkalian keduanya (`a * b`).",
          starterCode: "// Tulis ekspor fungsi di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "export\\s+const\\s+multiply",
                        "message": "Agar fungsi bisa dipakai berkas lain, tambahkan `export` di depan deklarasinya (named export). Tanpa itu, `import` di berkas lain menghasilkan `undefined`."
                      },
                      {
                        "pattern": "\\(\\s*a\\s*,\\s*b\\s*\\)\\s*=>",
                        "message": "Buat arrow function dengan dua parameter `(a, b)`."
                      },
                      {
                        "pattern": "a\\s*\\*\\s*b",
                        "message": "Kembalikan hasil perkalian keduanya. Arrow function satu ekspresi mengembalikan nilainya otomatis, jadi `return` tidak wajib ditulis."
                      }
                    ],
          solution: "export const multiply = (a, b) => a * b;",
          susunKode: {
            question:
              "Rangkai ekspor variabel multiply berupa arrow function yang mengalikan variabel a dan b.",
            potongan: [
              "export const multiply =",
              "(a, b) =>",
              "a * b;",
            ],
            pengecoh: [
              "(a, b) ->",
              "a x b;",
            ],
            pemisah: " ",
            explanation:
              "Penggunaan ES Module menggunakan kata kunci export const dan sintaks arrow function =>. Keping panah tunggal -> menggoda bagi pengembang PHP/C++, tetapi sintaksisnya tidak sah di JS. Keping a x b keliru karena operator perkalian menggunakan karakter bintang *.",
          },
        },
        {
          kind: "step",
          id: "node-1-3",
          title: "npm: package.json & Dependencies",
          explanation:
            "npm (Node Package Manager) adalah registry pustaka open-source terbesar di dunia tempat para pengembang berbagi pustaka siap pakai. Berkas `package.json` bertindak sebagai manifest proyek yang mencatat seluruh pustaka pihak ketiga beserta versinya. Pustaka untuk kebutuhan aplikasi di lingkungan server produksi dicatat dalam `dependencies`, sedangkan pustaka bantu pengujian dan pengompilasi dicatat dalam `devDependencies`. Memahami pemisahan flag `-D` (`--save-dev`) saat instalasi membantu menjaga ukuran aplikasi server tetap kecil dan aman di server produksi. Jebakan umum adalah memasang library besar yang hanya dipakai saat testing ke dalam daftar dependencies utama.",
          example: {
            code: "npm install express\nnpm install -D typescript",
            output: "added 25 packages in 2s",
            note: "Flag -D atau --save-dev mencatat library ke devDependencies.",
          },
          instruction:
            "Tuliskan perintah CLI npm terminal untuk mengunduh dan memasang paket `zod` ke dalam daftar dependensi produksi proyek.",
          starterCode: "# Tulis perintah npm di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "npm\\s+i(nstall)?\\s+zod",
                        "message": "Pemasangan paket memakai `npm install <nama-paket>` (bentuk singkat `npm i` juga diterima). Nama paket validasi skema yang dipakai di track ini ditulis huruf kecil semua. Tanpa flag tambahan, paket masuk ke `dependencies` — itu yang benar untuk library yang dipakai saat aplikasi berjalan."
                      }
                    ],
          solution: "npm install zod",
          susunKode: {
            question:
              "Rangkai perintah npm untuk memasang pustaka validasi skema zod ke dalam dependensi.",
            potongan: [
              "npm",
              "install",
              "zod",
            ],
            pengecoh: [
              "npm add-pkg",
              "yup",
            ],
            pemisah: " ",
            explanation:
              "Penginstalan paket di Node.js menggunakan npm install nama-paket. Keping npm add-pkg keliru nama sub-perintah npm CLI. Keping yup menggoda pengembang yang terbiasa dengan Yup, tetapi pustaka yang dipersyaratkan pada instruksi adalah zod.",
          },
        },
        {
          kind: "step",
          id: "node-1-4",
          title: "File System Promises API (fs/promises)",
          explanation:
            "Modul bawaan `node:fs/promises` memungkinkan aplikasi Node.js membaca dan menulis berkas di sistem operasi menggunakan API `async/await` berbasis Promise. Sebelum adanya API ini, operasi berkas di Node.js menggunakan fungsi callback berlapis (*callback hell*) yang membingungkan. Dengan `fs.writeFile` atau `fs.readFile`, kamu dapat mengelola penyimpanan data lokal server dengan sintaks yang rapi dan mudah dibaca. Fitur ini sangat berguna untuk membuat log berkas lokal, membaca konfig teks, atau mengolah gambar terunggah. Jebakan utama adalah lupa menentukan encoding `'utf-8'` saat membaca berkas teks yang dapat mengakibatkan keluaran berupa objek `Buffer` mentah.",
          example: {
            code: "import fs from 'node:fs/promises';\nawait fs.writeFile('out.txt', 'OK');\nconsole.log('Done');",
            output: "Done",
            note: "Selalu sertakan encoding 'utf-8' saat membaca file teks.",
          },
          instruction:
            "Tuliskan panggilan asinkron `fs.writeFile` untuk membuat file `'file.txt'` yang berisi konten teks `'Halo'`. Gunakan kata kunci `await` di awal.",
          starterCode: "// Tulis fs.writeFile di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "fs\\.writeFile\\(",
                        "message": "Penulisan berkas versi Promise memakai `fs.writeFile(...)` dari modul `node:fs/promises`. Versi callback punya nama sama tapi butuh argumen ketiga berupa fungsi — pastikan kamu mengimpor yang versi promises."
                      },
                      {
                        "pattern": "['\"]file\\.txt['\"]\\s*,\\s*['\"]Halo['\"]",
                        "message": "Argumennya dua: nama berkas tujuan, lalu isinya. Perlu diingat, `writeFile` MENIMPA isi berkas; untuk menambahkan di akhir pakai `appendFile`."
                      },
                      {
                        "pattern": "await\\s+fs\\.writeFile",
                        "message": "Operasi berkas asinkron, jadi tunggu dengan `await`. Tanpa itu program bisa lanjut sebelum berkasnya selesai ditulis."
                      }
                    ],
          solution: 'await fs.writeFile("file.txt", "Halo");',
          susunKode: {
            question:
              "Rangkai penggunaan fs.writeFile asinkron berbasis Promise untuk menulis string 'Halo' ke file.txt.",
            potongan: [
              "await",
              "fs.writeFile(",
              "\"file.txt\", \"Halo\"",
              ");",
            ],
            pengecoh: [
              "fs.writeTextFile(",
              "\"file.txt\", \"Hi\"",
            ],
            pemisah: " ",
            explanation:
              "Modul fs/promises menyediakan metode writeFile yang mengembalikan Promise sehingga wajib dipanggil dengan await. Keping fs.writeTextFile keliru karena nama metodenya adalah writeFile. Keping \"file.txt\", \"Hi\" keliru string teks yang ditulis.",
          },
        },
        {
          kind: "step",
          id: "node-1-5",
          title: "Environment Variables (process.env & dotenv)",
          explanation:
            "Environment variables adalah variabel lingkungan sistem yang digunakan untuk menyimpan nilai konfigurasi rahasia seperti kunci API, kredensial database, dan nomor PORT server. Di Node.js, variabel-variabel ini diakses secara global melalui objek `process.env`. Mengisolasi konfigurasi dari kode JavaScript mencegah kebocoran data sensitif saat kode sumber di-push ke repositori publik seperti GitHub. Pustaka seperti `dotenv` atau opsi bawaan Node 20+ `--env-file` secara otomatis menyuntikkan isi berkas rahasia `.env` ke dalam `process.env`. Jebakan fatal yang paling sering terjadi di dunia nyata adalah tidak sengaja melakukan commit berkas `.env` ke repositori git.",
          example: {
            code: "process.env.APP_ENV = 'dev';\nconsole.log(process.env.APP_ENV);\n// Objek process.env menyimpan variabel lingkungan",
            output: "dev",
            note: "Jangan simpan rahasia di berkas kode JS biasa.",
          },
          instruction:
            "Deklarasikan konstanta `dbUrl` yang nilainya diambil dari variabel lingkungan `DATABASE_URL` pada objek `process.env`.",
          starterCode: "// Tulis pembacaan process.env di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "process\\.env\\.DATABASE_URL",
                        "message": "Variabel lingkungan dibaca dari objek `process.env` diikuti nama variabelnya. Konvensinya HURUF BESAR dengan garis bawah, dan namanya harus sama persis dengan yang ada di `.env`."
                      },
                      {
                        "pattern": "const\\s+dbUrl\\s*=",
                        "message": "Simpan hasilnya ke variabel. Ingat: nilai dari `process.env` selalu berupa string atau `undefined` — angka dari sana perlu dikonversi dulu."
                      }
                    ],
          solution: "const dbUrl = process.env.DATABASE_URL;",
          susunKode: {
            question:
              "Rangkai pembacaan nilai variabel lingkungan DATABASE_URL dari properti global process.env.",
            potongan: [
              "const dbUrl = ",
              "process.env",
              ".DATABASE_URL;",
            ],
            pengecoh: [
              "let dbUrl = ",
              "process.environment",
              ".DB_URL;",
            ],
            pemisah: "",
            explanation:
              "Variabel lingkungan pada Node.js dibaca dari objek bawaan process.env, lalu disimpan ke konstanta agar nilainya tidak berubah di tengah jalan. Keping let menggoda karena keduanya sama-sama sah secara sintaksis, tetapi konfigurasi tidak seharusnya bisa ditimpa. Keping process.environment keliru nama objek global — Node hanya mengenal process.env. Keping .DB_URL keliru karena nama kuncinya harus sama persis dengan yang tertulis di berkas .env, dan salah satu huruf saja membuat nilainya undefined tanpa pesan error.",
          },
        },
        {
          kind: "step",
          id: "node-1-6",
          title: "EventEmitter & Stream (Event-Driven)",
          explanation:
            "Node.js dibangun dengan arsitektur berbasis kejadian (*Event-Driven Architecture*) menggunakan kelas `EventEmitter` dari modul `node:events`. Dengan `EventEmitter`, sebuah bagian aplikasi dapat memicu kejadian (`emit`) dan bagian lain dapat mendengarkan kejadian tersebut (`on`) secara independen. Pola ini juga mendasari sistem Stream di Node.js yang memungkinkan pengolahan data berukuran besar secara bertahap (*chunk by chunk*) tanpa membebankan alokasi RAM server. Fitur ini ideal untuk membangun fitur pengiriman notifikasi, analisis log real-time, atau pengolahan aliran data audio/video. Jebakan umum adalah lupa melepaskan pendengar kejadian (*listener*) yang dapat menyebabkan kebocoran memori (*memory leak*).",
          example: {
            code: "import { EventEmitter } from 'node:events';\nconst em = new EventEmitter();\nem.on('test', console.log);\nem.emit('test', 'ok');",
            output: "ok",
            note: "Banyak modul internal Node.js dibangun di atas EventEmitter.",
          },
          instruction:
            "Picu peristiwa bernama `'login'` pada objek `emitter` dengan membawa argumen variabel `data` menggunakan metode `.emit()`.",
          starterCode: "// Tulis emitter.emit di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "emitter\\.emit\\(",
                        "message": "Pengiriman event memakai metode `emit` pada objek emitter-nya."
                      },
                      {
                        "pattern": "['\"]login['\"]\\s*,\\s*data",
                        "message": "Argumen pertama nama event (teks, harus SAMA dengan yang dipakai di `emitter.on`), argumen kedua data yang dibawa. Salah huruf pada nama event tidak error — listener-nya cuma tidak pernah terpanggil."
                      }
                    ],
          solution: 'emitter.emit("login", data);',
          susunKode: {
            question:
              "Rangkai pemancaran kejadian (event emission) bernama 'login' dengan membawa objek data.",
            potongan: [
              "emitter.emit(",
              "\"login\", data",
              ");",
            ],
            pengecoh: [
              "emitter.dispatch(",
              "\"login\" => data",
            ],
            pemisah: "",
            explanation:
              "Instansiasi EventEmitter memancarkan kejadian menggunakan metode .emit('namaEvent', payload). Keping .dispatch keliru nama metode (biasa di Redux/DOM). Keping sintaks panah => di dalam argumen keliru secara sintaksis.",
          },
        },
        {
          kind: "step",
          id: "node-1-7",
          title: "Development Runner: tsx & watch mode",
          explanation:
            "Selama proses pengembangan backend, mengeksekusi ulang server secara manual setiap kali mengubah baris kode sangat tidak efisien. Pustaka seperti `tsx` adalah *runner* TypeScript super cepat yang dilengkapi opsi `--watch` untuk memantau perubahan berkas dan me-restart server secara instan. Dibandingkan perkakas lama seperti `nodemon` atau `ts-node`, `tsx` memanfaatkan kompilator esbuild berbasis Go sehingga proses eksekusi kode terasa sangat cepat. Menggunakan runner otomatis ini meningkatkan produktivitas alur kerja harian pengembang backend secara signifikan. Jebakan utama adalah menjalankan runner pengembangan seperti `tsx --watch` di server produksi asli — di sana yang dipakai adalah hasil build yang sudah dikompilasi, bukan pemantau berkas.",
          example: {
            code: "npx tsx --watch src/index.ts",
            output:
              "Server berjalan di http://localhost:3000\n\n" +
              "[tsx] Rerunning...\n" +
              "Server berjalan di http://localhost:3000",
            note: "tsx tidak mencetak pengumuman 'sedang memantau' saat start — yang muncul pertama adalah keluaran programmu sendiri. Baris `[tsx] Rerunning...` baru tampil setiap kali kamu menyimpan berkas.",
          },
          instruction:
            "Tuliskan perintah CLI npx untuk menjalankan berkas `src/server.ts` menggunakan runner `tsx` dengan opsi pemantau berkas otomatis (`--watch`).",
          starterCode: "# Tulis perintah npx tsx di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "npx\\s+tsx",
                        "message": "Jalankan runner TypeScript lewat `npx` supaya versinya mengikuti yang ada di proyek."
                      },
                      {
                        "pattern": "--watch\\s+src/server\\.ts",
                        "message": "Tambahkan flag pemantau perubahan berkas, lalu jalur berkas masuknya. Dengan flag ini kamu tidak perlu menghentikan dan menyalakan server setiap kali menyimpan."
                      }
                    ],
          solution: "npx tsx --watch src/server.ts",
          susunKode: {
            question:
              "Rangkai perintah npx untuk menjalankan berkas TypeScript src/server.ts dengan mode pengawasan tsx --watch.",
            potongan: [
              "npx",
              "tsx",
              "--watch src/server.ts",
            ],
            pengecoh: [
              "npx ts-node-dev",
              "--nodemon src/server.ts",
            ],
            pemisah: " ",
            explanation:
              "Eksekutor tsx dijalankan dengan npx tsx --watch untuk memantau perubahan berkas TypeScript secara otomatis. Keping ts-node-dev menggoda tetapi instruksi meminta npx tsx. Keping --nodemon keliru nama flag.",
          },
        },
        {
          kind: "quiz",
          id: "node-1-kuis",
          title: "Kuis: Node.js Runtime",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Objek bawaan Node.js apa yang digunakan untuk membaca environment variables sistem (seperti PORT atau DATABASE_URL)?",
              choices: ["window.env","process.env","document.env","global.env"],
              answerIndex: 1,
              explanation: "process.env adalah objek bawaan runtime Node.js yang menampung seluruh variabel lingkungan (environment variables) yang dioper oleh sistem operasi atau berkas .env. Di sisi browser, objek window atau document tidak memiliki properti .env karena lingkungan peramban terisolasi dari sistem operasi server. Menggunakan process.env adalah standar baku untuk membaca konfigurasi dinamis seperti PORT dan DATABASE_URL."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Properti sintaks apa di package.json yang harus dikonfigurasi agar Node.js memperlakukan berkas .js sebagai ES Modules (bukan CommonJS)?",
              choices: ["\"type\": \"module\"","\"module\": true","\"format\": \"esm\"","\"target\": \"esnext\""],
              answerIndex: 0,
              explanation: "Menambahkan \"type\": \"module\" pada berkas package.json menginstruksikan Node.js agar memperlakukan seluruh berkas berekstensi .js di proyek tersebut sebagai ES Modules (mengizinkan sintaks import/export). Tanpa konfigurasi ini, Node.js secara default memperlakukannya sebagai CommonJS (require/module.exports), yang memicu error \"Cannot use import statement outside a module\" jika kamu menulis sintaks import."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Manakah perbedaan utama antara browser JavaScript runtime dan Node.js runtime?",
              choices: ["Node.js tidak memiliki objek DOM (window, document), tetapi memiliki akses ke File System lokal dan variabel process","Browser menggunakan bahasa Python sedangkan Node.js menggunakan C++","Node.js hanya bisa berjalan di HP Android","Browser tidak mendukung fungsi matematika"],
              answerIndex: 0,
              explanation: "Perbedaan paling mendasar adalah lingkungan eksekusinya: browser berjalan di dalam sandbox pengguna dengan antarmuka visual (DOM: window, document) tanpa izin akses langsung ke harddisk lokal. Sebaliknya, Node.js adalah headless runtime di tingkat server yang memiliki akses penuh ke sistem operasi melalui node:fs dan process, namun sama sekali tidak memiliki objek tampilan DOM seperti window atau document."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Perintah npm mana yang secara khusus digunakan untuk menginstal paket dependensi yang hanya dibutuhkan selama tahap pengembangan (development), seperti library testing atau TypeScript?",
              choices: ["npm install --prod","npm install -D (atau --save-dev)","npm add","npm init"],
              answerIndex: 1,
              explanation: "Flag -D atau --save-dev mencatat pustaka ke bagian devDependencies di package.json. Paket-paket ini (seperti Vitest, TypeScript, nodemon, eslint) hanya dibutuhkan oleh pengembang lokal saat menulis kode. Di server produksi (CI/CD), perintah \"npm ci --omit=dev\" akan mengabaikan paket devDependencies sehingga ukuran container Docker server tetap ramping dan hemat memori."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Di lingkungan Node.js modern, modul built-in mana yang sebaiknya di-import untuk melakukan pembacaan/penulisan file dengan dukungan API Promise bawaan (asynchronous tanpa callback)?",
              choices: ["node:fs","node:http","node:fs/promises","node:path"],
              answerIndex: 2,
              explanation: "Submodul node:fs/promises menyediakan seluruh fungsi manipulasi berkas (seperti readFile, writeFile) yang mengembalikan objek Promise secara native, sehingga sangat bersih dan elegan dipadukan dengan kata kunci async/await tanpa callback hell. Modul node:fs klasik berbasis callback atau synchronous (readFileSync), node:path hanya memanipulasi string jalur direktori, dan node:http untuk protokol jaringan."
            }
          ],
        },
      ],
    },
    {
      slug: "express-dasar",
      title: "Express Dasar",
      description:
        "Server HTTP pertamamu: route, middleware, dan siklus request-response.",
      topics: [
        "Setup Express + TypeScript",
        "Route: method, path, handler",
        "Request: params, query, body (express.json)",
        "Response: status, json, header",
        "Middleware: konsep next() & urutan eksekusi",
        "Router untuk memecah endpoint",
        "Static file & 404 handler",
      ],
      items: [
        {
          kind: "materi",
          id: "node-2-m1",
          title: "Konsep Dasar Server Express & HTTP Loop",
          body:
            "# Konsep Dasar Server Express & HTTP Loop\n\n" +
            "Express.js adalah kerangka kerja (*web framework*) yang paling populer untuk Node.js. Walaupun Node.js memiliki modul bawaan `node:http`, menulis server backend murni dengan modul bawaan memerlukan puluhan baris kode hanya untuk menangani routing dasar. Express menyederhanakan tugas tersebut dengan menyediakan abstraksi yang bersih di atas modul HTTP Node.js.\n\n" +
            "## Siklus Request-Response (Req-Res Lifecycle)\n\n" +
            "Inti dari Express adalah rantai pemrosesan sinyal HTTP yang mengalir dari permintaan klien (*Request*) menuju balasan server (*Response*). Di antara pintu masuk dan pintu keluar tersebut, Express melewatkan data melalui serangkaian fungsi pembantu yang disebut **Middleware**.\n\n" +
            "```text\n" +
            "Client HTTP Request\n" +
            "       |\n" +
            "       v\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| Express Application Pipeline                                            |\n" +
            "|                                                                         |\n" +
            "|  [ express.json() ]  ==next()==>  [ Auth Middleware ]                   |\n" +
            "|  (Parse JSON Body)                (Cek Token JWT)                       |\n" +
            "|                                          |                              |\n" +
            "|                                       next()                            |\n" +
            "|                                          v                              |\n" +
            "|                                 [ Route Handler ]                       |\n" +
            "|                                 (app.get / app.post)                    |\n" +
            "|                                          |                              |\n" +
            "|                                     res.json()                          |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "       |\n" +
            "       v\n" +
            "Client HTTP Response (JSON / Status Code)\n" +
            "```\n\n" +
            "## Tiga Komponen Utama Handler Express\n\n" +
            "Setiap handler rute di Express menerima tiga parameter penting secara berurutan:\n" +
            "1. **`req` (Request):** Objek yang memuat seluruh informasi dari klien (URL path, HTTP method, query string `req.query`, URL parameter `req.params`, dan isi body `req.body`).\n" +
            "2. **`res` (Response):** Objek yang digunakan untuk menyusun balasan server ke klien (`res.status()`, `res.json()`, `res.send()`).\n" +
            "3. **`next` (Next Function):** Fungsi pemicu yang memberitahu Express untuk meneruskan eksekusi ke middleware berikutnya di dalam rantai.\n\n" +
            "| Properti `req` | Fungsi Utama | Contoh Penggunaan |\n" +
            "|---|---|---|\n" +
            "| `req.params` | Mengambil parameter variabel dari segmen URL path | `/users/:id` -> `req.params.id` |\n" +
            "| `req.query` | Mengambil variabel penyaring dari query string URL | `/search?q=kopi` -> `req.query.q` |\n" +
            "| `req.body` | Mengambil payload data JSON yang dikirimkan klien | Form POST/PUT data pengguna |\n" +
            "| `req.headers` | Mengambil atribut header HTTP (seperti token auth) | `req.headers.authorization` |\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan Express sebagai alur pos pemeriksaan di bandara. Klien adalah calon penumpang. Middleware pertama (misal `express.json()`) menguraikan bagasi bawaan (`req.body`). Middleware kedua (satpam pemeriksaan) mengecek paspor (`next()`). Jika paspor valid, penumpang diizinkan lanjut ke gerbang penerbangan tujuan (*Route Handler*). Jika ada masalah di paspor, satpam menghentikan perjalanan dan memberikan penolakan langsung (`res.status(401)`).\n\n" +
            "## Pemisahan Rute Modular dengan `express.Router()`\n\n" +
            "Pada aplikasi skala produksi, menumpuk ratusan rute di dalam berkas `server.ts` tunggal akan menciptakan kode yang berantakan (*spaghetti code*). Pustaka Express menyediakan kelas `express.Router()` untuk memecah kelompok rute menjadi berkas-berkas terpisah (misal `routes/userRoutes.ts` dan `routes/productRoutes.ts`).\n\n" +
            "## Kesalahan Umum & Jebakan (Pitfalls)\n\n" +
            "- **`res.json()` BUKANLAH `return` (Crash `ERR_HTTP_HEADERS_SENT`):** Jebakan nomor satu pemula adalah mengira `res.json()` otomatis keluar dari fungsi. Menulis `if (!user) res.status(404).json(...)` tanpa kata kunci `return` akan membuat baris di bawahnya tetap dieksekusi, sehingga Express mencoba mengirim respon ganda dan server melempar error fatal *Cannot set headers after they are sent to the client*. Selalu gunakan pola `return res.status(...).json(...)`!\n" +
            "- **Request Gantung (*Hanging*) karena Lupa `next()`:** Jika fungsi middleware tidak mengirim respon (`res.json`) dan juga tidak memanggil `next()`, rantai eksekusi terputus. Browser klien akan loading tanpa henti (*hanging*) sampai mencapai batas *Gateway Timeout*.\n" +
            "- **Lupa `app.use(express.json())` Sebelum Route:** Mengakses `req.body` tanpa mengaktifkan middleware pengurai JSON bawaan ini — atau meletakkannya *setelah* route didaftarkan — akan menghasilkan nilai `undefined`.\n" +
            "- **Urutan Middleware 404 & Error Handler:** Tempatkan handler 404 dan Centralized Error Handler (4 argumen) di urutan **paling bawah**, setelah seluruh rute aplikasi terdaftar.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Kemampuan merancang arsitektur server Express yang modular menggunakan middleware dan pemisahan `Router` adalah keterampilan teknis backend yang diuji pada sesi *coding live interview*. Pemahaman tentang siklus Request-Response memastikan aplikasi backend yang kamu bangun tangguh dan bebas dari bug header ganda di lingkungan produksi.",
        },
        {
          kind: "step",
          id: "node-2-1",
          title: "Inisialisasi Server Express + TypeScript",
          explanation:
            "Inisialisasi aplikasi Express dilakukan dengan mengimpor pustaka `express` dan memanggil fungsi utamanya `const app = express()`. Objek `app` yang dihasilkan bertindak sebagai instansi utama aplikasi backend yang mengelola registrasi rute, pemasangan middleware, dan penerimaan koneksi port jaringan via `app.listen()`. Pendekatan ini memberikan struktur yang fleksibel untuk mengonfigurasi aplikasi backend TypeScript skala kecil maupun besar. Memahami cara menginisialisasi instansi `app` merupakan langkah pertama wajib sebelum mendaftarkan endpoint HTTP. Jebakan umum pemula adalah lupa menginstal jenis tipe `@types/express` saat bekerja di lingkungan TypeScript.",
          example: {
            code: "import express from 'express';\nconst app = express();\nconsole.log(typeof app);",
            output: "function",
            note: "Gunakan express.json() agar server bisa membaca JSON request body.",
          },
          instruction:
            "Deklarasikan instansi aplikasi Express baru dan simpan ke dalam konstanta `app`.",
          starterCode: "// Tulis inisialisasi Express di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "express\\(\\s*\\)",
                        "message": "Aplikasi Express dibuat dengan MEMANGGIL `express()` — bukan `new express()`. Ia sebuah factory function, bukan class."
                      },
                      {
                        "pattern": "const\\s+app\\s*=",
                        "message": "Simpan hasilnya ke variabel `app`; itu nama yang dipakai konvensi Express dan seluruh dokumentasinya."
                      }
                    ],
          solution: "const app = express();",
          susunKode: {
            question:
              "Susun inisialisasi aplikasi Express baru dan menyimpannya ke variabel konstanta app.",
            potongan: [
              "const app =",
              "express();",
            ],
            pengecoh: [
              "expressApp();",
              "createExpressApp();",
            ],
            pemisah: " ",
            explanation:
              "Modul Express mengekspor fungsi pabrik (top-level function) yang dipanggil secara langsung express() tanpa kata kunci new. Keping expressApp() keliru karena fungsi resminya bernama express(). Keping createExpressApp() menggoda tetapi tidak ada metode tersebut bawaan modul Express.",
          },
        },
        {
          kind: "step",
          id: "node-2-2",
          title: "Express Route: GET, POST, PUT, DELETE",
          explanation:
            "Rute Express mencocokkan kata kerja HTTP (GET, POST, PUT, DELETE) dan jalur URL path dengan fungsi penangan (*route handler*). Penangan rute ini menerima dua parameter utama `(req, res)` tempat kamu membaca data masuk dan mengembalikan respons HTTP. Menggunakan method yang sesuai secara semantik membantu klien (seperti aplikasi Frontend React) memahami tujuan dari setiap endpoint API. Metode `res.send()` atau `res.json()` otomatis menetapkan header respon dan menutup siklus komunikasi HTTP. Jebakan utama pemula adalah lupa menyertakan karakter garing awal `/` pada definisi jalur path URL.",
          example: {
            code: "app.get('/health', (req, res) => {\n  res.send('OK');\n});",
            output: "GET /health -> HTTP 200 OK: \"OK\"",
            note: "Pada Express sungguhan, nilai itu dikirim sebagai body respons HTTP ke klien. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat rute GET pada path `\"/ping\"` yang merespon dengan mengirimkan string `'pong'` menggunakan `res.send`.",
          starterCode: "// Tulis route ping di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "app\\.get\\(\\s*['\"]/ping['\"]\\s*,",
              message:
                "Rute GET didaftarkan dengan `app.get(<path>, <handler>)`. Jalurnya diawali garis miring — `\"ping\"` tanpa `/` tidak akan pernah cocok dengan permintaan apa pun.",
            },
            {
              pattern: "\\(\\s*_?req\\s*,\\s*res\\s*\\)\\s*=>",
              message:
                "Argumen keduanya fungsi handler dengan dua parameter `(req, res)`. Boleh ditulis ringkas satu ekspresi maupun memakai blok `{ ... }`.",
            },
            {
              pattern: "res\\.send\\(\\s*['\"]pong['\"]\\s*\\)",
              message:
                "Balas dengan `res.send(...)` berisi teksnya. `res.send` sekaligus menutup siklus respons — memanggilnya dua kali menghasilkan error `ERR_HTTP_HEADERS_SENT`.",
            },
          ],
          solution: 'app.get("/ping", (req, res) => res.send("pong"));',
          susunKode: {
            question:
              "Rangkai pendaftaran rute HTTP GET /ping pada aplikasi Express yang merespons string 'pong'.",
            potongan: [
              "app.get(\"/ping\",",
              "(req, res) => res.send(\"pong\"));",
            ],
            pengecoh: [
              "app.route(\"/ping\",",
              "(req, res) => res.write(\"pong\"));",
            ],
            pemisah: " ",
            explanation:
              "Rute Express menggunakan metode app.get(path, handler) di mana handler memanggil res.send() untuk mengirim respons. Keping app.route keliru metode pemanggilan rute tunggal. Keping res.write keliru karena tidak mengakhiri siklus respons HTTP secara otomatis.",
          },
        },
        {
          kind: "step",
          id: "node-2-3",
          title: "Membaca req.params, req.query, dan req.body",
          explanation:
            "Express memisahkan masukan data dari klien ke dalam tiga properti objek `req`: `req.params` untuk membaca parameter URL dinamis (`:id`), `req.query` untuk membaca variabel filter query string (`?page=1`), dan `req.body` untuk payload JSON. Menggunakan teknik destructuring JavaScript `const { id } = req.params` membuat kode pembacaan parameter menjadi lebih ringkas dan bersih. Memahami perbedaan ketiga sumber data ini sangat krusial agar kamu tahu di mana mengambil input pengguna saat membangun endpoint backend. Jebakan klasik adalah mengakses `req.body` sebelum memasang middleware `app.use(express.json())` yang menyebabkan nilainya `undefined`.",
          example: {
            code: "app.get('/users/:username', (req, res) => {\n  const { username } = req.params;\n  res.send(`Profil milik @${username}`);\n});",
            output: "GET /users/bimo -> HTTP 200 OK: \"Profil milik @bimo\"",
            note: "Parameter URL dinamis selalu bertipe string. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Lakukan destructuring variabel `id` dari properti parameter jalur URL `req.params`.",
          starterCode: "// Tulis ekstraksi req.params di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "req\\.params",
                        "message": "Segmen dinamis URL (`/users/:id`) dibaca dari `req.params`. Jangan tertukar: `req.query` untuk `?limit=10`, `req.body` untuk isi POST."
                      },
                      {
                        "pattern": "const\\s*\\{\\s*id\\s*\\}\\s*=",
                        "message": "Ambil isinya dengan destructuring object. Nama propertinya harus sama dengan nama parameter di definisi route, dan nilainya SELALU string — bandingkan dengan hati-hati terhadap id angka."
                      }
                    ],
          solution: "const { id } = req.params;",
          susunKode: {
            question:
              "Rangkai pembacaan destrukturisasi properti id dari objek req.params.",
            potongan: [
              "const { id } =",
              "req.params;",
            ],
            pengecoh: [
              "req.parameter;",
              "const { userId } =",
            ],
            pemisah: " ",
            explanation:
              "Parameter dinamis URL disimpan oleh Express di dalam objek req.params. Keping req.parameter sangat keliru karena nama properti objek Request yang resmi adalah req.params. Keping userId keliru nama kunci properti destrukturisasi yang dipersyaratkan.",
          },
        },
        {
          kind: "step",
          id: "node-2-4",
          title: "Response Status Code & Headers",
          explanation:
            "Setiap respons API backend harus disertai dengan Kode Status HTTP yang relevan untuk memberitahu klien hasil eksekusi permintaan. Metode `res.status(code)` memungkinkan kamu menetapkan kode seperti 200 (Sukses), 201 (Dibuat), 400 (Input Salah), atau 404 (Tidak Ditemukan) sebelum mengembalikan data via `.json()`. Penggunaan kode status HTTP yang tepat merupakan standar profesional dalam pembangunan REST API berskala industri. Metode `res.status()` bersifat chaining sehingga dapat digabungkan langsung dengan `.json({ ... })`. Jebakan umum adalah mengembalikan status 200 OK untuk respon yang sebenarnya berisi pesan kesalahan.",
          example: {
            code: "return res.status(400).json({ error: 'Permintaan tidak valid: email wajib diisi' });",
            output: "HTTP/1.1 400 Bad Request: { \"error\": \"Permintaan tidak valid: email wajib diisi\" }",
            note: "res.status(400) untuk Bad Request, res.status(404) untuk Not Found. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Kirimkan balasan HTTP status 404 yang dikombinasikan dengan payload JSON `{ error: \"Not Found\" }`.",
          starterCode: "// Tulis res.status(404) di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "res\\.status\\(\\s*404\\s*\\)",
                        "message": "Status code diatur dengan `res.status(<kode>)`. Untuk resource yang tidak ditemukan, kodenya 404 — mengembalikan 200 dengan pesan error di body membuat klien menganggap request-nya berhasil."
                      },
                      {
                        "pattern": "\\.json\\(\\s*\\{",
                        "message": "Rantaikan `.json({...})` setelahnya untuk mengirim body JSON sekaligus mengatur header Content-Type."
                      },
                      {
                        "pattern": "error\\s*:\\s*['\"]Not Found['\"]",
                        "message": "Isi body-nya dengan properti `error` berisi pesannya."
                      }
                    ],
          solution: 'res.status(404).json({ error: "Not Found" });',
          susunKode: {
            question:
              "Rangkai pengiriman respons kesalahan HTTP 404 Not Found berformat JSON dari Express handler.",
            potongan: [
              "res.status(404)",
              ".json({",
              "error: \"Not Found\"",
              "});",
            ],
            pengecoh: [
              "res.statusCode(404)",
              "message: \"Not Found\"",
            ],
            pemisah: "",
            explanation:
              "Pengaturan status HTTP pada Express dilakukan dengan metode berantai res.status(404).json(...). Keping res.statusCode() keliru karena statusCode adalah properti angka bawaan Node native, bukan fungsi fluent Express. Keping message: menggoda tetapi menyalahi spesifikasi kunci error.",
          },
        },
        {
          kind: "step",
          id: "node-2-5",
          title: "Konsep Middleware & fungsi next()",
          explanation:
            "Middleware adalah fungsi perantara di Express yang menerima tiga argumen `(req, res, next)` untuk memproses request sebelum sampai ke route handler akhir. Middleware digunakan untuk penanganan tugas-tugas lintas sektoral seperti logging, pemeriksaan token autentikasi, dan validasi input. Fungsi `next()` bertindak sebagai saklar pemicu yang memberitahu Express untuk melanjutkan eksekusi ke middleware atau handler berikutnya. Tanpa panggilan `next()` atau pengiriman respons (`res.json`), rantai eksekusi Express akan terhenti. Jebakan paling sering terjadi adalah lupa memanggil `next()` yang membuat request dari browser menggantung tanpa kepastian.",
          example: {
            code: "function myMw(req, res, next) { console.log('Passed'); next(); }\nmyMw({}, {}, () => {});",
            output: "Passed",
            note: "Jika next() tidak dipanggil, request akan gantung (hanging) selamanya.",
          },
          instruction:
            "Panggil fungsi kelanjutan middleware `next()` tanpa argumen untuk melanjutkan alur eksekusi request Express.",
          starterCode: "// Tulis panggilan fungsi berikutnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "next\\(\\)\\s*;?",
              message: "Tuliskan: next();",
            },
          ],
          solution: "next();",
          susunKode: {
            question:
              "Rangkai pemanggilan fungsi next() untuk meneruskan eksekusi ke middleware berikutnya.",
            potongan: [
              "next(",
              ");",
            ],
            pengecoh: [
              "nextMiddleware(",
              ";",
            ],
            pemisah: "",
            explanation:
              "Middleware Express menerima argumen ketiga berupa callback bernama next yang wajib DIPANGGIL — menyebut namanya saja tidak melakukan apa pun. Keping nextMiddleware( menggoda karena terdengar lebih deskriptif, padahal Express memanggil parameter ketiga itu apa adanya dan namanya sudah ditentukan oleh posisi, bukan oleh ejaan. Keping ; sendirian adalah jebakan yang sering terjadi sungguhan: pemanggilan ditutup tanpa kurung penutup, sehingga berkasnya bahkan tidak bisa di-parse. Kalau next() tidak pernah dipanggil dan respons juga tidak dikirim, permintaan klien menggantung sampai timeout.",
          },
        },
        {
          kind: "step",
          id: "node-2-6",
          title: "Pemisahan Route dengan express.Router()",
          explanation:
            "`express.Router()` adalah fasilitas Express untuk memecah daftar rute yang panjang menjadi sub-modul terpisah yang modular dan bersih. Dengan Router, kamu dapat mengelompokkan rute berdasarkan fitur (seperti `userRouter`, `productRouter`) di berkas terpisah lalu mendaftarkannya ke aplikasi utama via `app.use('/users', userRouter)`. Pola ini menjaga agar berkas `server.ts` tetap ringkas dan mempermudah kerja tim dalam mengelola repositori backend. Pemisahan kelompok rute juga memudahkan penerapan middleware khusus yang hanya berlaku pada rute tertentu. Jebakan umum adalah lupa meng-export atau meng-import instansi router dari berkas modulnya.",
          example: {
            code: "import { Router } from 'express';\nconst router = Router();\nconsole.log(typeof router);",
            output: "function",
            note: "Membuat struktur aplikasi Express tetap bersih dan terpelihara.",
          },
          instruction:
            "Inisialisasikan sebuah instansi objek `Router` dari Express dan simpan dalam konstanta bernama `router`.",
          starterCode: "// Tulis Router() di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "Router\\(\\s*\\)",
                        "message": "Router dibuat dengan memanggil `Router()` dari Express — sama seperti `express()`, tanpa `new`."
                      },
                      {
                        "pattern": "const\\s+router\\s*=",
                        "message": "Simpan ke variabel `router`, lalu di akhir berkas ia diekspor dan dipasang di app utama dengan `app.use('/prefix', router)`."
                      }
                    ],
          solution: "const router = Router();",
          susunKode: {
            question:
              "Rangkai pembentukan instans pemisah rute menggunakan fungsi Router() dari Express.",
            potongan: [
              "const router =",
              "Router();",
            ],
            pengecoh: [
              "createRouterInstance();",
              "newRouterInstance();",
            ],
            pemisah: " ",
            explanation:
              "Pemisahan rute menggunakan helper Router() yang diimpor dari modul express. Keping createRouterInstance() keliru nama fungsi impor. Keping newRouterInstance() menggoda tetapi nama fungsi pembentuk rute resmi adalah Router().",
          },
        },
        {
          kind: "step",
          id: "node-2-7",
          title: "Handler 404 & Static Files",
          explanation:
            "Menangani rute yang tidak ditemukan (404 Not Found) dilakukan dengan menempatkan middleware penangkap umum di bagian akhir rantai `app.use()`. Karena Express mengeksekusi middleware secara berurutan dari atas ke bawah, permintaan HTTP yang tidak cocok dengan rute mana pun di atas akan secara otomatis jatuh ke handler paling bawah ini. Handler 404 ini bertugas mengembalikan pesan kesalahan JSON yang rapi daripada membiarkan Express melempar halaman HTML default. Selain itu, fitur `express.static('public')` memungkinkan server menyajikan berkas statis seperti gambar dan CSS dengan aman. Jebakan fatal adalah meletakkan handler 404 di bagian atas rute yang menyebabkan semua request tertangkap sebagai 404.",
          example: {
            code: "app.use((req, res) => {\n  res.status(404).json({ error: 'Rute tidak ditemukan' });\n});",
            output: "HTTP/1.1 404 Not Found: { \"error\": \"Rute tidak ditemukan\" }",
            note: "Middleware 404 ini harus berada di urutan paling bawah setelah seluruh rute aplikasi terdaftar. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Pasang middleware penangkap rute tak dikenal di akhir rantai `app.use` yang mengembalikan status code 404 beserta JSON `{ error: \"404\" }`.",
          starterCode: "// Tulis handler 404 di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "app\\.use\\(\\s*\\(\\s*_?req\\s*,\\s*res\\s*\\)\\s*=>",
              message:
                "Penangkap rute tak dikenal dipasang lewat `app.use(<handler>)` TANPA jalur, supaya ia mencocokkan apa pun yang belum tertangani rute di atasnya.",
            },
            {
              pattern: "res\\.status\\(\\s*404\\s*\\)",
              message:
                "Setel status 404 sebelum mengirim body. Tanpa itu Express mengirim 200, dan klien akan mengira permintaannya berhasil.",
            },
            {
              pattern: "error\\s*:\\s*['\"]404['\"]",
              message:
                "Kirim body JSON berisi properti `error`. Mengembalikan JSON yang seragam membuat frontend tidak perlu menebak apakah respons berupa HTML bawaan Express atau bukan.",
            },
          ],
          solution: 'app.use((req, res) => { res.status(404).json({ error: "404" }); });',
          susunKode: {
            question:
              "Susun middleware penangan 404 fallback yang merespons status code 404 dan JSON { error: '404' }.",
            potongan: [
              "app.use((req, res) => {",
              "  res.status(404).json({ error: \"404\" });",
              "});",
            ],
            pengecoh: [
              "app.all((req, res) => {",
              "  res.status(200).json({ error: \"404\" });",
            ],
            pemisah: "\n",
            explanation:
              "Middleware fallback dipasang dengan app.use((req, res) => ...) di baris paling akhir rute untuk menangkap semua HTTP request yang tak cocok. Keping app.all keliru sintaks tanpa path pattern. Keping status(200) keliru status code HTTP penanganan Not Found.",
          },
        },
        {
          kind: "quiz",
          id: "node-2-kuis",
          title: "Kuis: Express Dasar",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Fungsi apa yang WAJIB dipanggil di dalam fungsi Middleware Express agar proses request dapat berlanjut ke handler berikutnya?",
              choices: ["next()","continue()","res.send()","express.next()"],
              answerIndex: 0,
              explanation: "Express mengalirkan siklus request-response melalui rantai middleware secara berurutan. Memanggil next() adalah instruksi wajib bagi Express untuk mengoper kendali ke middleware atau route handler berikutnya dalam antrean. Jika kamu lupa memanggil next() dan tidak mengirim balasan (res.send/res.json), permintaan klien akan tertahan selamanya (hanging) hingga mengalami connection timeout."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Middleware bawaan Express apa yang harus dipasang agar server dapat mengurai (parse) body request berformat JSON?",
              choices: ["express.json()","express.urlencoded()","express.bodyParser()","express.parse()"],
              answerIndex: 0,
              explanation: "Secara bawaan, payload HTTP Request berupa aliran teks mentah (stream). Middleware express.json() bertugas membaca aliran tersebut, mem-parse payload berformat JSON, dan menyematkan objek JavaScript hasilnya ke properti req.body. Tanpa memasang app.use(express.json()) sebelum definisi rute, memanggil req.body pada request POST/PUT akan bernilai undefined."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Properti req mana yang digunakan untuk mengekstrak parameter dinamis dari URL path (seperti `:id` pada `/users/:id`)?",
              choices: ["req.params","req.query","req.body","req.headers"],
              answerIndex: 0,
              explanation: "req.params adalah objek yang menyimpan segmen parameter dinamis dari URL path yang diawali titik dua (contoh: rute /users/:id akan menghasilkan { id: '42' } pada req.params). Pilihan req.query digunakan untuk membaca query string setelah tanda tanya (?page=1), req.body untuk payload data POST/PUT, dan req.headers untuk membaca metadata header HTTP."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Dalam pengembangan server Express, apa peran metode 'res.status()'?",
              choices: ["Untuk mengubah status koneksi internet","Untuk mengatur HTTP Status Code yang akan dikirim kembali (contoh: res.status(404))","Untuk mengecek apakah server berjalan atau error","Untuk mengirim status ke database"],
              answerIndex: 1,
              explanation: "Metode res.status(code) menyetel HTTP Status Code yang dikembalikan ke klien secara semantik sesuai standar REST (misal 200 untuk sukses, 201 untuk data terbuat, 400 untuk bad request, 404 untuk not found, atau 500 untuk error internal). Metode ini biasanya dirangkai berantai (method chaining) bersama pengiriman body: res.status(201).json({ success: true })."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Bagaimana cara terbaik untuk memecah daftar ratusan rute Express menjadi berkas terpisah yang modular dan bersih?",
              choices: ["Mendeklarasikan banyak objek app.js","Menggunakan kelas Router bawaan dengan express.Router()","Membuat fungsi callback kustom berlapis","Menggunakan middleware eksternal"],
              answerIndex: 1,
              explanation: "express.Router() menciptakan sebuah mini-aplikasi routing yang terisolasi. Kamu dapat mengelompokkan rute berdasarkan fitur (misalnya usersRouter.js dan productsRouter.js), lalu memasangnya di aplikasi utama menggunakan app.use('/api/v1/users', usersRouter). Pola ini adalah standar arsitektur industri untuk menjaga basis kode Express tetap rapi, modular, dan mudah dikelola seiring bertambahnya ratusan endpoint."
            }
          ],
        },
      ],
    },
    {
      slug: "rest-design",
      title: "Desain REST API",
      description:
        "Konvensi yang membuat API-mu mudah dipakai tim lain — skill diskusi arsitektur.",
      topics: [
        "Resource & penamaan endpoint yang benar",
        "HTTP method semantik: GET/POST/PUT/PATCH/DELETE",
        "Status code yang tepat (bukan 200 untuk semuanya)",
        "Struktur response konsisten: data, error, meta",
        "Versioning API",
        "Pagination, filtering, sorting",
        "Idempotency & kenapa penting",
      ],
      items: [
        {
          kind: "materi",
          id: "node-3-m1",
          title: "Prinsip Arsitektur Desain REST API",
          body:
            "# Prinsip Arsitektur Desain REST API\n\n" +
            "REST (*Representational State Transfer*) adalah standar arsitektur antarmuka komunikasi yang mendominasi pengembangan web API modern. Merancang REST API bukan sekadar membuat endpoint yang bisa mengembalikan data, melainkan membangun konvensi yang konsisten sehingga pengembang lain (seperti tim Frontend React atau Mobile Flutter) dapat memprediksi perilaku API tanpa harus membaca dokumentasi berlembar-lembar.\n\n" +
            "## Aturan Emas Penamaan Resource URL Path\n\n" +
            "Dalam arsitektur REST, URL digunakan untuk mengidentifikasi **Resource (Kata Benda Jamak)**, BUKAN aksi (Kata Kerja). Aksi apa yang dilakukan terhadap data tersebut ditentukan sepenuhnya oleh **HTTP Method**.\n\n" +
            "```text\n" +
            "❌ BUKAN RESTful (Menggunakan Kata Kerja di URL):\n" +
            "   GET  /api/getUsers\n" +
            "   POST /api/createUser\n" +
            "   POST /api/deleteUserById/42\n\n" +
            "✅ RESTful Standar (Kata Benda Jamak + HTTP Method Semantik):\n" +
            "   GET    /api/v1/users        -> Mengambil seluruh daftar pengguna\n" +
            "   POST   /api/v1/users        -> Membuat satu pengguna baru\n" +
            "   GET    /api/v1/users/42     -> Mengambil rincian pengguna ID 42\n" +
            "   PATCH  /api/v1/users/42     -> Memperbarui sebagian data pengguna 42\n" +
            "   DELETE /api/v1/users/42     -> Menghapus pengguna ID 42\n" +
            "```\n\n" +
            "## Pemetaan Status Code HTTP Rujukan Utama\n\n" +
            "Jangan pernah mengembalikan status code `200 OK` untuk semua respon. Manfaatkan kode HTTP semantik agar klien dapat merespon secara tepat di UI:\n\n" +
            "| Kode Status | Kategori | Kapan Wajib Digunakan |\n" +
            "|---|---|---|\n" +
            "| **200 OK** | Success | Request `GET`, `PUT`, `PATCH` sukses mengolah data |\n" +
            "| **201 Created** | Success | Request `POST` sukses membuat data resource baru |\n" +
            "| **204 No Content** | Success | Request `DELETE` sukses hapus data (tanpa body respon) |\n" +
            "| **400 Bad Request** | Client Error | Input payload tidak sesuai format (gagal validasi Zod) |\n" +
            "| **401 Unauthorized** | Client Error | Klien belum terotentikasi (belum login / token invalid) |\n" +
            "| **403 Forbidden** | Client Error | Klien terotentikasi tapi tidak punya role/izin akses |\n" +
            "| **404 Not Found** | Client Error | Endpoint URL atau data ID yang dicari tidak ditemukan |\n" +
            "| **500 Internal Error** | Server Error | Terjadi crash / unhandled exception di server backend |\n\n" +
            "## Konsep Idempotency dalam HTTP Method\n\n" +
            "Sebuah metode HTTP dikatakan **Idempotent** jika mengeksekusi permintaan yang sama berkali-kali memberikan hasil state akhir yang **identik** pada database server.\n\n" +
            "- `GET`, `PUT`, `DELETE` bersifat **Idempotent**. Menghapus data ID 42 sebanyak 1 kali atau 10 kali akan tetap menghasilkan keadaan akhir di database: data ID 42 tidak ada.\n" +
            "- `POST` **TIDAK Idempotent**. Mengirimkan `POST /api/v1/orders` sebanyak 10 kali akan membuat 10 pesanan baru yang duplikat di database.\n\n" +
            "## Standar Struktur JSON Response Format\n\n" +
            "Selalu bungkus respon API dalam objek konsisten dengan bidang `success`, `data`, `meta`, dan `error`:\n\n" +
            "```json\n" +
            "{\n" +
            "  \"success\": true,\n" +
            "  \"data\": [\n" +
            "    { \"id\": 1, \"name\": \"Kopi Gayo\" }\n" +
            "  ],\n" +
            "  \"meta\": {\n" +
            "    \"page\": 1,\n" +
            "    \"limit\": 10,\n" +
            "    \"totalData\": 100\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "## Standar Industri: Arsitektur Berlapis (Layered Architecture)\n\n" +
            "Di industri perangkat lunak nyata, kode rute tidak ditumpuk dalam satu fungsi raksasa. Tim profesional membaginya ke dalam 4 lapisan terpisah (*Separation of Concerns*):\n\n" +
            "1. **Routes (`routes/*.routes.ts`):** Mendaftarkan endpoint URL, method HTTP, dan middleware validasi/auth.\n" +
            "2. **Controllers (`controllers/*.controller.ts`):** Menerima `req`, mengekstrak parameter masukan, memanggil service, dan memformat respon `res`.\n" +
            "3. **Services (`services/*.service.ts`):** Menampung logika bisnis murni (kalkulasi harga, validasi aturan bisnis, integrasi pihak ketiga).\n" +
            "4. **Repositories (`repositories/*.repo.ts` atau Prisma):** Berbicara langsung ke basis data.\n\n" +
            "## Kesalahan Umum & Jebakan (Pitfalls)\n\n" +
            "- **Mitos CORS (Bisa di Postman, Ditolak di Browser):** Banyak pemula bingung mengapa API mereka sukses saat diuji di Postman/Thunder Client tetapi gagal dengan error CORS di React. Ingat: CORS adalah proteksi yang dipaksakan oleh **Browser**, bukan oleh server atau Postman!\n" +
            "- **Mengaburkan PUT dan PATCH:** `PUT` mengganti **seluruh** bidang objek data (data yang tidak dikirim akan hilang/null), sedangkan `PATCH` hanya memperbarui bidang yang dikirimkan saja (*partial update*).\n" +
            "- **Mengabaikan Pagination:** Membiarkan endpoint `GET /api/v1/products` mengembalikan seluruh jutaan baris data sekaligus tanpa `page` dan `limit` akan membuat server dan aplikasi mobile mengalami crash memori.\n" +
            "- **Tanpa Versioning API:** Tidak memasangkan awalan versi seperti `/api/v1/` akan menyulitkan perombakan API di masa depan karena perubahan rute langsung merusak (*break*) aplikasi klien lama pengguna.\n" +
            "- **Mengembalikan HTTP 200 untuk Error:** Mengirim status 200 OK dengan body `{ status: 400, error: \"Bad Data\" }` merusak standar pengolahan error pada pustaka HTTP client seperti Axios.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Kemampuan mendesain RESTful API yang mematuhi standar HTTP semantik, idempotency, dan arsitektur berlapis adalah topik diskusi arsitektur wajib dalam tim backend engineer. Konvensi ini memastikan API yang dibangun mudah diintegrasikan dengan aplikasi Frontend (React, Vue) dan aplikasi Mobile (iOS, Android).",
        },
        {
          kind: "step",
          id: "node-3-1",
          title: "Konvensi Penamaan Resource Noun Jamak",
          explanation:
            "Saat merancang REST API, aturan emas penamaan endpoint adalah menggunakan Kata Benda Jamak (Plural Noun), contoh `/api/v1/users` alih-alih kata kerja seperti `/getUsers`. Untuk relasi data hierarkis atau sub-resource, kita menyusun URL bersarang seperti `/:userId/posts` untuk mengambil seluruh postingan milik pengguna tertentu. Aksi manipulasi data ditentukan sepenuhnya oleh HTTP Method (GET untuk membaca, POST untuk membuat), bukan dengan menuliskan kata kerja pada path. Pola penamaan ini membuat antarmuka API kamu terstruktur, intuitif, dan mudah dipahami oleh tim frontend. Jebakan umum pemula adalah menyisipkan kata kerja di URL seperti `/:userId/getPosts`.",
          example: {
            code: "router.get('/:articleId/comments', getArticleComments);",
            output: "Endpoint sub-resource GET /:articleId/comments terdaftar",
            note: "Sub-resource menggunakan kata benda jamak untuk relasi bersarang. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Definisikan rute GET pada `router` untuk mengambil sub-resource daftar postingan milik pengguna tertentu pada path `'/:userId/posts'` dengan fungsi handler `getUserPosts`.",
          starterCode: "// Tulis router.get sub-resource di sini\n",
          language: "text",
          tests: [
            {
              pattern: "router\\.get\\(",
              message: "Gunakan metode HTTP semantik `router.get(...)` untuk membaca data resource.",
            },
            {
              pattern: "['\"]/:userId/posts['\"]",
              message: "Tentukan path sub-resource bersarang yang rapi: `/:userId/posts`.",
            },
            {
              pattern: ",\\s*getUserPosts\\b",
              message: "Sematkan fungsi handler `getUserPosts` sebagai pengendali rute.",
            },
          ],
          solution: "router.get('/:userId/posts', getUserPosts);",
          susunKode: {
            question:
              "Rangkai pendefinisian rute Express GET untuk sub-resource postingan milik pengguna tertentu.",
            potongan: [
              "router.get(",
              "'/:userId/posts', ",
              "getUserPosts);",
            ],
            pengecoh: [
              "'/:userId/getPosts', ",
              "'/:userId/post', ",
              "router.post(",
            ],
            pemisah: "",
            explanation:
              "Dalam arsitektur REST, URL path hanya memuat kata benda jamak (posts) untuk sub-resource, bukan kata kerja. Keping '/:userId/getPosts', sangat menggoda bagi pemula, namun menyalahi aturan REST karena aksi pengambilan data sudah diwakili oleh metode HTTP GET. Keping '/:userId/post', keliru karena resource jamak wajib berakhiran plural (posts). Keping router.post( keliru metode karena kita sedang membaca data, bukan membuat resource baru.",
          },
        },
        {
          kind: "step",
          id: "node-3-2",
          title: "HTTP Method Semantik: PUT vs PATCH",
          explanation:
            "Perbedaan mendasar antara metode HTTP `PUT` dan `PATCH` terletak pada cakupan data yang diperbarui di server. `PUT` digunakan untuk mengganti **seluruh** dokumen data secara utuh, sehingga bidang yang tidak dikirimkan dalam payload akan terhapus atau bernilai null. Sebaliknya, `PATCH` digunakan untuk memperbarui sebagian (*partial update*) bidang data yang dikirim saja tanpa mengganggu bidang lainnya. Menggunakan `router.patch` sangat cocok untuk fitur pembaruan akun, seperti mengganti nama pengguna atau status profil. Jebakan klasik pengembang adalah menggunakan `PUT` padahal klien hanya bermaksud mengubah satu kolom data.",
          example: {
            code: "router.patch('/:id', updateProfile);",
            output: "Rute PATCH /:id terdaftar untuk pembaruan profil parsial",
            note: "Gunakan PATCH untuk update sebagian bidang data. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Daftarkan rute Express pada `router` untuk memperbarui sebagian data pengguna berdasarkan ID pada path `'/:id'` menggunakan metode semantik `patch` dengan fungsi handler `updateUser`.",
          starterCode: "// Tulis rute PATCH di sini\n",
          language: "text",
          tests: [
            {
              pattern: "router\\.patch\\(",
              message: "Gunakan `router.patch(...)` khusus untuk operasi pembaruan data secara parsial.",
            },
            {
              pattern: "['\"]/:id['\"]",
              message: "Tentukan parameter URL unik untuk resource: `/:id`.",
            },
            {
              pattern: ",\\s*updateUser\\b",
              message: "Sematkan fungsi handler `updateUser` sebagai pengendali rute.",
            },
          ],
          solution: "router.patch('/:id', updateUser);",
          susunKode: {
            question:
              "Rangkai pendaftaran rute Express untuk pembaruan sebagian data pengguna menggunakan metode PATCH.",
            potongan: [
              "router.patch(",
              "'/:id', ",
              "updateUser);",
            ],
            pengecoh: [
              "router.put(",
              "router.post(",
              "'/:userId', ",
            ],
            pemisah: "",
            explanation:
              "Dalam spesifikasi REST HTTP, PATCH digunakan khusus untuk perubahan parsial sedangkan PUT untuk penggantian dokumen utuh. Keping router.put( keliru metode karena PUT mengganti seluruh bidang data dan menghapus bidang yang tidak disertakan. Keping router.post( keliru metode karena POST dipakai untuk membuat data baru. Keping '/:userId', menggoda tetapi menyimpang dari parameter standar /:id yang ditentukan pada rute ini.",
          },
        },
        {
          kind: "step",
          id: "node-3-3",
          title: "Status Code HTTP Semantik",
          explanation:
            "Mengembalikan Status Code HTTP yang tepat membantu klien menginterpretasikan hasil pengolahan data tanpa harus mengurai isi teks body. Contohnya, saat penghapusan data berhasil dan server tidak mengembalikan body JSON, status `204 No Content` adalah standar resmi yang paling tepat. Menggunakan kode 200 untuk pembuatan data baru (harusnya 201) atau saat terjadi kesalahan input (harusnya 400) membuat aplikasi frontend sulit menangani kesalahan secara otomatis. Menyusun rantai `res.status(204).send()` menutup siklus komunikasi HTTP dengan efisien. Jebakan umum adalah mengembalikan status 200 OK padahal server mengalami crash internal.",
          example: {
            code: "router.delete('/:id', async (req, res) => {\n  await prisma.post.delete({ where: { id: Number(req.params.id) } });\n  return res.status(204).send();\n});",
            output: "HTTP/1.1 204 No Content (response body kosong)",
            note: "Operasi DELETE yang sukses tidak mengembalikan payload body, melainkan status 204 No Content. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Operasi DELETE-mu berhasil dan tidak punya apa pun untuk dikembalikan. Tuliskan balasan Express yang menyetel status HTTP No Content lalu menutup respons tanpa membawa body sama sekali.",
          starterCode: "// Tulis res.status(204) di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "res\\.status\\(\\s*204\\s*\\)",
                        "message": "Untuk operasi yang berhasil tapi tidak punya isi untuk dikembalikan (misalnya DELETE), status semantiknya 204 No Content."
                      },
                      {
                        "pattern": "\\.send\\(\\s*\\)",
                        "message": "Akhiri dengan `.send()` tanpa argumen. Mengirim body bersama 204 melanggar spesifikasi HTTP, dan sebagian klien akan error saat mencoba membacanya."
                      }
                    ],
          solution: "res.status(204).send();",
          susunKode: {
            question:
              "Rangkai pengembalian respons status 204 No Content untuk operasi penghapusan REST API.",
            potongan: [
              "res.status(204)",
              ".send();",
            ],
            pengecoh: [
              "res.status(200)",
              ".json(null);",
            ],
            pemisah: "",
            explanation:
              "Status HTTP 204 No Content menandakan operasi sukses tanpa mengembalikan body konten. Keping status 200 keliru status code untuk No Content. Keping .json(null) keliru karena 204 tidak boleh mengirim body respons.",
          },
        },
        {
          kind: "step",
          id: "node-3-4",
          title: "Struktur Respon JSON Konsisten",
          explanation:
            "Membungkus respon API ke dalam format standar seperti `{ success: true, data: users }` menciptakan konsistensi antarmuka bagi pengembang frontend. Dengan pembungkus yang seragam, pustaka di sisi klien dapat mengimplementasikan penangan error global untuk seluruh panggilan API. Struktur ini juga mempermudah penambahan metadata tambahan seperti informasi paginasi atau timestamp tanpa merusak bidang data utama. Selalu gunakan format struktur yang konsisten di seluruh endpoint backend proyekmu. Jebakan umum adalah mengembalikan array mentah di satu endpoint dan mengembalikan objek terbungkus di endpoint lainnya.",
          example: {
            code: "return res.status(200).json({\n  success: true,\n  data: [{ id: 1, name: 'Buku Panduan Express' }],\n});",
            output: "HTTP 200 OK: { \"success\": true, \"data\": [{ \"id\": 1, \"name\": \"Buku Panduan Express\" }] }",
            note: "Struktur standar memudahkan tim frontend memproses respon dengan tipe data terprediksi. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Kirimkan data variabel `users` di dalam pembungkus respon JSON terstandar `{ success: true, data: users }`.",
          starterCode: "// Tulis res.json di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "res\\.json\\(\\s*\\{",
                        "message": "Kirim JSON dengan `res.json({...})`."
                      },
                      {
                        "pattern": "success\\s*:\\s*true",
                        "message": "Bungkus respons dalam bentuk yang konsisten: satu penanda keberhasilan bertipe boolean."
                      },
                      {
                        "pattern": "data\\s*:\\s*users",
                        "message": "Lalu satu properti `data` berisi muatannya. Bentuk seragam seperti ini membuat kode frontend tidak perlu menebak-nebak struktur respons tiap endpoint."
                      }
                    ],
          solution: "res.json({ success: true, data: users });",
          susunKode: {
            question:
              "Kirim variabel users di dalam pembungkus respons JSON standar: satu penanda keberhasilan, satu muatan datanya.",
            potongan: [
              "res.json({",
              "success: true,",
              "data: users",
              "});",
            ],
            pengecoh: [
              "status: 'success',",
              "payload: users",
            ],
            pemisah: "\n",
            explanation:
              "Struktur respons API konsisten menggunakan flag boolean success: true dan wadah data: users. Keping status: 'success' keliru tipe data boolean. Keping payload: menggoda tetapi menyalahi spesifikasi nama kunci data.",
          },
        },
        {
          kind: "step",
          id: "node-3-5",
          title: "Versioning API (/api/v1)",
          explanation:
            "Memasangkan awalan versi pada jalur URL seperti `/api/v1/posts` adalah praktik terbaik untuk menjamin *backward compatibility* API di masa depan. Ketika terjadi perubahan besar (*breaking changes*) pada struktur database atau API, kamu dapat membuat rute versi baru `/api/v2/` tanpa merusak aplikasi klien lama yang masih berjalan. Menggunakan `app.use('/api/v1/posts', postRouter)` mengisolasi kelompok rute ke dalam namespace versi tertentu secara bersih. Praktik ini sangat vital terutama jika backend melayani aplikasi mobile Android/iOS yang tidak langsung diperbarui pengguna. Jebakan utama adalah langsung mengubah struktur JSON respon pada rute tunggal tanpa versioning.",
          example: {
            code: "app.use('/api/v1/products', productRouter);",
            output: "Rute prefix terdaftar di /api/v1/products (GET, POST, PATCH, DELETE)",
            note: "Versioning melindungi aplikasi mobile dari breaking changes ketika API ditingkatkan ke v2. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Daftarkan modul `postRouter` ke aplikasi Express pada jalur prefix versi 1 (`\"/api/v1/posts\"`) menggunakan `app.use`.",
          starterCode: "// Tulis app.use v1 di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "app\\.use\\(",
                        "message": "Pemasangan router ke aplikasi memakai `app.use(<prefix>, <router>)`."
                      },
                      {
                        "pattern": "['\"]/api/v1/posts['\"]",
                        "message": "Sertakan versi di dalam prefix-nya. Versioning memungkinkan kamu mengubah bentuk respons di v2 tanpa merusak aplikasi mobile lama yang masih memanggil v1."
                      },
                      {
                        "pattern": ",\\s*postRouter",
                        "message": "Argumen keduanya router yang menangani jalur itu."
                      }
                    ],
          solution: "app.use('/api/v1/posts', postRouter);",
          susunKode: {
            question:
              "Rangkai pendaftaran router rute postRouter ke prefix path /api/v1/posts.",
            potongan: [
              "app.use(",
              "'/api/v1/posts',",
              "postRouter",
              ");",
            ],
            pengecoh: [
              "'/posts/v1',",
              "postController",
            ],
            pemisah: " ",
            explanation:
              "Prefiks rute REST dipasang lewat app.use('/api/v1/posts', router). Keping '/posts/v1' keliru format versioning. Keping postController keliru karena middleware pengelompokan rute menerima instansiasi Router.",
          },
        },
        {
          kind: "step",
          id: "node-3-6",
          title: "Pagination & Filtering via Query String",
          explanation:
            "Mengambil data dalam jumlah besar wajib dibatasi dengan teknik paginasi menggunakan variabel query string `req.query.page` dan `req.query.limit`. Mengonversi input `req.query.limit` menggunakan `Number()` serta memberikan nilai default fallback (misal `10`) mencegah kueri database mengambil ratusan ribu baris data sekaligus. Fitur penyaringan (*filtering*) dan pengurutan (*sorting*) juga ideal diletakkan pada query string karena metode HTTP GET tidak disarankan membawa body payload. Praktik ini menjaga performa memori server tetap stabil dan mempercepat waktu respons jaringan. Jebakan fatal adalah tidak memberikan batasan limit default sehingga server berisiko crash kehabisan memori.",
          example: {
            code: "const page = Number(req.query.page) || 1;\nconst limit = Number(req.query.limit) || 10;\nconst skip = (page - 1) * limit;",
            output: "Ekstraksi paginasi sukses: page = 1, limit = 10, skip = 0",
            note: "Selalu berikan nilai default untuk limit agar database tidak crash akibat kueri tak terbatas. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Konversikan nilai query `req.query.limit` ke tipe angka menggunakan `Number()` dan berikan fallback default `10` jika nilainya falsy.",
          starterCode: "// Tulis pembacaan limit di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "req\\.query\\.limit",
                        "message": "Parameter dari query string (`?limit=20`) dibaca lewat `req.query`."
                      },
                      {
                        "pattern": "Number\\(",
                        "message": "Nilai dari query string SELALU string, jadi konversi dulu ke angka. Tanpa konversi, `limit` dipakai sebagai teks dan Prisma/SQL akan menolaknya."
                      },
                      {
                        "pattern": "\\|\\|\\s*10",
                        "message": "Beri nilai cadangan dengan `||` untuk kasus parameternya tidak dikirim (atau tidak valid, karena `Number('abc')` menghasilkan NaN yang bersifat falsy)."
                      }
                    ],
          solution: "const limit = Number(req.query.limit) || 10;",
          susunKode: {
            question:
              "Rangkai pembacaan parameter query string limit dengan penanganan nilai default angka 10.",
            potongan: [
              "const limit =",
              "Number(req.query.limit)",
              "|| 10;",
            ],
            pengecoh: [
              "parseInt(req.params.limit)",
              "?? '10'",
            ],
            pemisah: " ",
            explanation:
              "Query string dibaca dari req.query.limit dan dikonversi ke tipe data angka dengan Number() serta diberi batas fallback || 10. Keping req.params keliru lokasi parameter URL. Keping string '10' keliru tipe data angka.",
          },
        },
        {
          kind: "step",
          id: "node-3-7",
          title: "Idempotency di REST API",
          explanation:
            "Operasi Idempotent dalam HTTP berarti mengeksekusi permintaan yang sama secara berulang-ulang akan menghasilkan status akhir yang identik pada basis data server. Metode `GET`, `PUT`, dan `DELETE` dikategorikan sebagai operasi Idempotent. Sebaliknya, `POST` bukan Idempotent karena mengirim `POST /orders` 10 kali akan membuat 10 pesanan duplikat. Pada aplikasi produksi (seperti pembayaran perbankan atau e-commerce), pengembang melindungi rute POST dengan memeriksa header `Idempotency-Key` unik dari request untuk mencegah tagihan ganda. Jebakan umum pemula adalah tidak menangani risiko retry jaringan pada endpoint pembayaran yang rawan transaksi dobel.",
          example: {
            code: "const key = req.headers['idempotency-key'];\nif (key) { console.log('Checking cache for key:', key); }",
            output: "Checking cache for key: a8b9-44fc",
            note: "Header Idempotency-Key mencegah transaksi ganda akibat jaringan putus-nyambung. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Ekstrak header kunci idempotensi dari objek `req.headers` menggunakan nama header standar `'idempotency-key'` dan simpan ke dalam konstanta `idempotencyKey`.",
          starterCode: "// Tulis ekstraksi idempotencyKey di sini\n",
          language: "text",
          tests: [
            {
              pattern: "const\\s+idempotencyKey\\s*=",
              message: "Deklarasikan konstanta penampung `const idempotencyKey = ...`.",
            },
            {
              pattern: "req\\.headers\\[['\"]idempotency-key['\"]\\]",
              message: "Akses properti header Express dengan notasi kurung siku: `req.headers['idempotency-key']`.",
            },
          ],
          solution: "const idempotencyKey = req.headers['idempotency-key'];",
          susunKode: {
            question:
              "Rangkai kode Express untuk mengekstrak header idempotency-key dari request pengguna.",
            potongan: [
              "const idempotencyKey = ",
              "req.headers",
              "['idempotency-key'];",
            ],
            pengecoh: [
              "req.body",
              "['idempotent-key'];",
              "['x-idempotency'];",
            ],
            pemisah: "",
            explanation:
              "Pada standar REST API modern, pencegahan eksekusi ganda pada operasi non-idempotent (seperti pembayaran) dilakukan dengan memeriksa header 'idempotency-key'. Keping req.body keliru karena kunci idempotensi dikirimkan via HTTP request headers, bukan melalui payload body JSON. Keping ['idempotent-key'] menggoda karena kata dasarnya mirip, tetapi konvensi nama header standar industri menggunakan bentuk kata benda idempotency-key. Kesalahan nama header membuat server gagal mengenali kunci unik yang dikirim klien.",
          },
        },
        {
          kind: "quiz",
          id: "node-3-kuis",
          title: "Kuis: Desain REST API",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa perbedaan utama antara HTTP Method PUT dan PATCH?",
              choices: ["PUT hanya bisa dipakai di browser Chrome","PUT memperbarui seluruh bidang objek, sedangkan PATCH memperbarui sebagian bidang objek","PATCH menghapus seluruh database","Tidak ada perbedaan"],
              answerIndex: 1,
              explanation: "Menurut spesifikasi HTTP RFC, PUT adalah operasi penggantian penuh (full replacement): klien wajib mengirimkan seluruh representasi resource, dan bidang yang tidak disertakan akan dianggap dihapus atau disetel ke null/default. Sebaliknya, PATCH adalah operasi modifikasi parsial (partial update): klien hanya mengirimkan bidang-bidang tertentu yang ingin diubah (misalnya hanya mengganti field nama tanpa mengganggu field alamat)."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "HTTP Status Code manakah yang paling sesuai dikembalikan saat server berhasil memproses pembuatan data baru (misal pendaftaran pengguna sukses)?",
              choices: ["200 OK","201 Created","204 No Content","302 Found"],
              answerIndex: 1,
              explanation: "HTTP 201 Created adalah status code semantik resmi yang menandakan bahwa request berhasil dan sebuah resource baru telah sukses dibuat di basis data server. Status 200 OK biasanya digunakan untuk pembacaan (GET) atau pembaruan (PATCH), status 204 No Content digunakan saat operasi berhasil tapi tidak mengembalikan body payload (seperti DELETE), dan 302 Found adalah pengalihan (redirection)."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa HTTP Method POST tidak dikategorikan sebagai operasi yang Idempotent?",
              choices: ["Karena mengeksekusi request POST sebanyak 10 kali secara berulang akan menghasilkan 10 data resource baru di database","Karena POST tidak membutuhkan kata sandi","Karena POST tidak bisa menerima payload JSON","Karena POST selalu mengembalikan error 500"],
              answerIndex: 0,
              explanation: "Idempotent berarti memanggil request yang sama berkali-kali akan menghasilkan state akhir sistem yang identik dengan memanggilnya sekali. Method GET, PUT, dan DELETE bersifat idempotent (misal menghapus baris ID 5 sepuluh kali tetap menghasilkan kondisi akhir baris ID 5 terhapus). Namun, POST tidak idempotent karena mengirim POST /orders sepuluh kali akan menciptakan 10 pesanan baru dengan 10 tagihan terpisah di database."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Menurut konvensi desain RESTful standar, manakah bentuk penamaan endpoint URL di bawah ini yang paling direkomendasikan?",
              choices: ["/api/v1/getUsers","/api/v1/users","/api/v1/user/getAll","/api/v1/fetch_users"],
              answerIndex: 1,
              explanation: "Prinsip fundamental desain RESTful adalah URL path merepresentasikan \"kata benda sumber daya dalam bentuk jamak\" (plural nouns: /users, /products, /orders), sedangkan aksi yang dilakukan ditentukan sepenuhnya oleh HTTP Method (GET /users untuk membaca, POST /users untuk menambah, DELETE /users/:id untuk menghapus). Menyematkan kata kerja seperti /getUsers atau /fetch_users melanggar konvensi REST dan merupakan gaya RPC (Remote Procedure Call)."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Bagaimana sebuah endpoint API GET standar menangani opsi operasi seperti Pagination, Filtering, dan Sorting?",
              choices: ["Melalui input form HTML form-data","Dengan membacanya dari body JSON request","Menggunakan parameter Query String URL (contoh: ?page=1&limit=10)","Melalui custom HTTP Headers"],
              answerIndex: 2,
              explanation: "Dalam spesifikasi HTTP, request GET tidak memiliki payload body. Parameter query string yang disematkan di URL (seperti ?page=2&limit=10&sort=createdAt:desc) adalah mekanisme resmi yang di-parse oleh Express ke objek req.query. Pola ini memungkinkan hasil pencarian dan halaman URL dapat di-bookmark, dibagikan, dan di-cache secara transparan oleh proxy jaringan."
            }
          ],
        },
      ],
    },
    {
      slug: "database-prisma",
      title: "Database dengan Prisma",
      description:
        "Menghubungkan API ke PostgreSQL dengan type-safety penuh.",
      topics: [
        "Prisma schema & migrate",
        "CRUD dengan Prisma Client",
        "Relasi & nested query",
        "Transaction",
        "Seeding & Prisma Studio",
        "Pola repository: memisahkan akses data dari route",
      ],
      items: [
        {
          kind: "materi",
          id: "node-4-m1",
          title: "Integrasi Database & ORM Prisma",
          body:
            "# Integrasi Database & ORM Prisma\n\nAplikasi backend skala produksi memerlukan penyimpanan data persisten seperti PostgreSQL atau MySQL. Menulis kueri SQL mentah (*raw SQL*) secara manual berisiko tinggi menimbulkan kesalahan pengetikan nama kolom dan kerentanan fatal SQL Injection. Prisma hadir sebagai ORM (*Object-Relational Mapping*) generasi baru untuk Node.js & TypeScript yang memberikan jaminan tipe data penuh (*type-safety*) sejak tahap pengodean di editor kode.\n\n## Arsitektur & Alur Kerja Prisma\n\nPengembangan database berpusat pada satu berkas cetak biru deklaratif bernama `prisma/schema.prisma`. Di berkas ini kamu mendefinisikan model tabel, tipe data kolom, indeks performa, dan relasi antar entitas.\n\n```text\n+-------------------------------+       npx prisma migrate dev\n|     prisma/schema.prisma      | ----------------------------------> [ PostgreSQL Database ]\n| (Definisi Model & Tabel Data) |                                      (Tabel & Relasi Fisik)\n+-------------------------------+ \n                |\n                | npx prisma generate\n                v\n+-----------------------------------------------------------------------------------------+\n| @prisma/client (Auto-generated TypeScript Client)                                       |\n| -> Autocomplete instan untuk prisma.user.findMany(), prisma.post.create(), dll          |\n+-----------------------------------------------------------------------------------------+\n```\n\n## Perbandingan Operasi Prisma Client vs SQL Mentah\n\n| Operasi Data | SQL Mentah (Raw Query) | Prisma Client (Type-Safe API) |\n|---|---|---|\n| **Cari by ID** | `SELECT * FROM \"User\" WHERE id = $1;` | `prisma.user.findUnique({ where: { id } })` |\n| **Tambah Data** | `INSERT INTO \"User\" (email) VALUES ($1);` | `prisma.user.create({ data: { email } })` |\n| **Join Relasi** | `SELECT * FROM \"User\" JOIN \"Post\" ON ...;` | `prisma.user.findMany({ include: { posts: true } })` |\n| **Paginasi** | `SELECT * FROM ... LIMIT 10 OFFSET 20;` | `prisma.user.findMany({ skip: 20, take: 10 })` |\n| **Transaksi** | `BEGIN; ... COMMIT;` | `prisma.$transaction([ ... ])` |\n\n## Pola Arsitektur Repository (Data Access Isolation)\n\nSesuai prinsip *Separation of Concerns* (SoC), hindari mencampur pemanggilan ORM langsung di dalam Controller Express. Pisahkan seluruh akses database ke dalam fungsi atau modul khusus bernama **Repository** (misalnya `UserRepository` atau `ProductRepository`):\n\n```text\nExpress Controller  ===>  UserRepository  ===>  Prisma Client  ===>  PostgreSQL Database\n(Handle HTTP Req/Res)     (Logika Database)     (Type-Safe ORM)       (Penyimpanan Fisik)\n```\n\nDengan pola ini, jika tim memutuskan mengganti skema query atau melakukan unit test dengan *mock repository*, controller HTTP tidak perlu dirombak sama sekali.\n\n## Dua Model Transaksi Database: Batch vs Interaktif\n\nDalam sistem perbankan atau e-commerce, operasi perubahan database harus memenuhi prinsip ACID (Atomicity, Consistency, Isolation, Durability). Prisma menyediakan dua mekanisme transaksi:\n1. **Batch Array (`prisma.$transaction([ op1, op2 ])`):** Menerima daftar kueri independen yang harus berhasil bersama-sama (misal menghapus item di keranjang belanja sekaligus membuat catatan pesanan baru). Jika salah satu kueri gagal, seluruh kueri dalam array otomatis dibatalkan (*rollback*).\n2. **Interactive Transaction (`prisma.$transaction(async (tx) => { ... })`):** Menerima callback asinkron saat operasi kedua bergantung pada pembacaan hasil operasi pertama (misalnya: membaca sisa saldo rekening, memeriksa apakah saldo cukup, lalu memotong saldo dan menambah saldo penerima via `tx.account.update()`).\n\n## Migrasi Database di Produksi: `migrate dev` vs `migrate deploy`\n\nBanyak pemula salah kaprah menjalankan `prisma migrate dev` di server produksi. Pahami perbedaannya:\n- **`npx prisma migrate dev` (Hanya di Komputer Lokal):** Membandingkan skema dengan database dev, membuat berkas migrasi SQL baru di folder `prisma/migrations/`, menerapkan migrasi, dan meregenerasi Prisma Client. Perintah ini interaktif dan dapat me-reset database jika terjadi konflik skema!\n- **`npx prisma migrate deploy` (Wajib di CI/CD & Server Produksi):** Menerapkan berkas migrasi yang belum dijalankan secara non-interaktif tanpa pernah membuat migrasi baru atau me-reset database produksi.\n\n## Penanganan Relasi & Cascade Delete\n\nSaat membuat relasi 1-ke-banyak (seperti User memiliki banyak Post), selalu tentukan aturan penghapusan (`onDelete`):\n```prisma\nmodel User {\n  id    Int    @id @default(autoincrement())\n  email String @unique\n  posts Post[]\n}\n\nmodel Post {\n  id       Int    @id @default(autoincrement())\n  title    String\n  authorId Int\n  author   User   @relation(fields: [authorId], references: [id], onDelete: Cascade)\n}\n```\nOpsi `onDelete: Cascade` memastikan bahwa jika akun User dihapus, seluruh Post milik user tersebut otomatis ikut terhapus di database, mencegah *orphan records*.\n\n## Ekstensi Prisma (`prisma.$extends`) untuk Fitur Enterprise\n\nPada Prisma modern, fitur *Client Extensions* memungkinkan kita menambahkan logika otomatis seperti **Soft Delete**:\n```typescript\nconst prisma = new PrismaClient().$extends({\n  query: {\n    user: {\n      async findMany({ args, query }) {\n        args.where = { ...args.where, deletedAt: null }; // Otomatis filter user yang belum dihapus\n        return query(args);\n      },\n    },\n  },\n});\n```\n\n## Visualisasi & Seeding Data: Prisma Studio\n\n- **Prisma Studio (`npx prisma studio`):** Meluncurkan antarmuka GUI peramban instan di port 5555 untuk melihat, menambah, dan mengedit data tabel tanpa butuh software database client eksternal (seperti DBeaver atau pgAdmin).\n- **Database Seeding (`prisma/seed.ts`):** Skrip otomatis untuk mengisi database pengujian dengan data dummy agar pengembang baru tidak mulai dari tabel kosong.\n\n## Kesalahan Umum & Jebakan (Pitfalls)\n\n- **Multiple Instance Prisma Client (Connection Pool Exhaustion):** Menuliskan `new PrismaClient()` di banyak berkas router akan membuka koneksi database baru di setiap impor berkas. Saat ribuan request masuk, batas koneksi PostgreSQL akan habis (\"Too many clients already open\"). Selalu ekspor satu instansi tunggal (*Singleton*) yang digunakan bersama di seluruh proyek.\n- **Lupa Menjalankan Migrasi:** Mengubah model di `schema.prisma` tanpa menjalankan `npx prisma migrate dev` menyebabkan database fisik dan Prisma Client tidak sinkron, memicu error kolom tidak ditemukan.\n- **Problem N+1 Query:** Melakukan kueri relasi di dalam perulangan `users.map(async u => ...)` alih-alih memanfaatkan opsi `include: { posts: true }` bawaan Prisma yang menjalankan JOIN efisien.\n- **Lupa Klausa `where` pada Update/Delete:** Memanggil `prisma.user.deleteMany()` tanpa menyertakan opsi `where` akan **menghapus seluruh isi tabel database produksi** secara instan.\n\n## Kaitan ke Dunia Kerja\n\nPenguasaan Prisma ORM, penulisan skema migrasi database, dan arsitektur transaksi atomik adalah standar wajib pada lowongan backend TypeScript modern. Memahami pola Repository dan pencegahan kebocoran koneksi memastikan sistem database perusahaan tetap stabil dan bebas dari korupsi data.",
        },
        {
          kind: "step",
          id: "node-4-1",
          title: "Prisma Schema & Migration",
          explanation:
            "Prisma adalah ORM generasi baru yang memungkinkan kamu mendefinisikan struktur tabel database menggunakan sintaks deklaratif di berkas `schema.prisma`. Setelah mendefinisikan model, perintah CLI `npx prisma migrate dev` akan membaca skema tersebut dan otomatis membuat skrip migrasi SQL untuk memperbarui database fisik. Proses migrasi ini bertindak seperti pengontrol versi (*version control*) untuk struktur database aplikasi backend-mu. Melakukan migrasi secara teratur memastikan seluruh tim pengembang memiliki struktur database yang identik. Jebakan utama pemula adalah mengubah file `schema.prisma` namun lupa menjalankan perintah migrasi.",
          example: {
            code: "npx prisma migrate dev --name init",
            output:
              "Applying migration `20240101120000_init`\n\n" +
              "Your database is now in sync with your Prisma schema. Done in 51ms",
            note: "Atribut @unique menjamin email tidak bisa duplikat di database.",
          },
          instruction:
            "Tuliskan perintah CLI npx prisma untuk membuat dan menerapkan migrasi database pada mode pengembangan.",
          starterCode: "# Tulis perintah prisma migrate di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "prisma\\s+migrate\\s+dev",
                        "message": "Di lingkungan pengembangan, subperintahnya `migrate dev`: ia membuat berkas migrasi baru dari perubahan schema, menerapkannya, lalu meregenerasi Prisma Client. Untuk server produksi yang dipakai `migrate deploy` — `dev` bisa me-reset database."
                      },
                      {
                        "pattern": "npx\\s+prisma",
                        "message": "Jalankan CLI-nya lewat `npx` agar memakai versi yang tercatat di proyek."
                      }
                    ],
          solution: "npx prisma migrate dev",
          susunKode: {
            question:
              "Rangkai perintah npx untuk menjalankan eksekusi migrasi Prisma di lingkungan pengembangan.",
            potongan: [
              "npx",
              "prisma",
              "migrate dev",
            ],
            pengecoh: [
              "npx prisma-cli",
              "db push --dev",
            ],
            pemisah: " ",
            explanation:
              "Perintah npx prisma migrate dev membuat dan menerapkan skema migrasi baru ke database development. Keping prisma-cli keliru nama perintah CLI. Keping db push keliru karena db push tidak mencatat riwayat berkas migrasi.",
          },
        },
        {
          kind: "step",
          id: "node-4-2",
          title: "CRUD dengan Prisma Client",
          explanation:
            "Prisma Client secara otomatis menghasilkan metode pencarian dan manipulasi data yang *type-safe* berdasarkan skema yang telah didefinisikan. Metode `findUnique()` digunakan untuk mencari satu baris data spesifik berdasarkan kunci unik seperti `id` atau `email`. Keunggulan utama Prisma adalah memberikan autocomplete instan di editor kodenya, sehingga mencegah kesalahan ejaan nama kolom. Hasil pencarian dari Prisma Client langsung berupa objek JavaScript yang siap digunakan di handler Express. Jebakan umum adalah tidak menangani kondisi ketika `findUnique()` mengembalikan nilai `null` saat data tidak ditemukan.",
          example: {
            code: "const product = await prisma.product.findUnique({\n  where: { id: 42 },\n});",
            output: "{ id: 42, title: \"Mechanical Keyboard\", price: 850000, stock: 12 }",
            note: "Prisma otomatis mengembalikan tipe data TypeScript yang sesuai atau null bila data tidak ditemukan. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh koneksi database dan runtime Node), jadi tidak ada database fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Tuliskan kueri Prisma Client untuk mencari satu data spesifik pada tabel `user` berdasarkan kunci unik `id`.",
          starterCode: "// Tulis findUnique di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "prisma\\.user\\.findUnique\\(",
                        "message": "Pengambilan satu baris berdasarkan kolom unik memakai `findUnique`. Bedanya dengan `findFirst`: `findUnique` hanya menerima kolom unik/primary key, dan itu memberi jaminan hasilnya maksimal satu."
                      },
                      {
                        "pattern": "where\\s*:\\s*\\{\\s*id\\s*\\}",
                        "message": "Syaratnya ditulis di opsi `where`. Bentuk `{ id }` adalah singkatan dari `{ id: id }` — sah dan umum dipakai."
                      },
                      {
                        "pattern": "await\\s",
                        "message": "Semua query Prisma asinkron, jadi `await`. Jangan lupa hasilnya bisa `null` kalau tidak ditemukan — periksa sebelum dipakai, atau kamu dapat error properti dari null."
                      }
                    ],
          solution: "await prisma.user.findUnique({ where: { id } });",
          susunKode: {
            question:
              "Rangkai pencarian data user secara spesifik berdasarkan kriteria pencarian unik id menggunakan Prisma Client.",
            potongan: [
              "await",
              "prisma.user.findUnique({",
              "where: { id }",
              "});",
            ],
            pengecoh: [
              "prisma.user.findOne({",
              "filter: { id }",
            ],
            pemisah: " ",
            explanation:
              "Metode findUnique pada Prisma Client mengambil satu baris data berdasarkan kriteria klausa where. Keping findOne keliru nama metode (findOne adalah sintaks Mongoose). Keping filter keliru nama klausa Prisma.",
          },
        },
        {
          kind: "step",
          id: "node-4-3",
          title: "Relasi & Nested Query di Prisma",
          explanation:
            "Mengambil data dari beberapa tabel yang saling berhubungan (seperti User dan Profile) di Prisma dapat dilakukan secara efisien menggunakan opsi `include`. Dengan menetapkan `{ include: { profile: true } }`, Prisma akan secara otomatis menyusun perintah SQL JOIN di belakang layar dan mengembalikan objek gabungan. Pendekatan ini menghindarkan aplikasi dari masalah performa klasik N+1 query yang sering membakar sumber daya server. Menangani relasi data secara eksplisit menjaga kebersihan alur pencarian data di layer backend. Jebakan umum adalah lupa mengaktifkan `include` sehingga properti relasi bernilai `undefined`.",
          example: {
            code: "const categories = await prisma.category.findMany({\n  include: { products: true },\n});",
            output: "[ { id: 1, name: \"Elektronik\", products: [ { id: 10, name: \"Laptop\" } ] } ]",
            note: "Nested query Prisma menyusun SQL JOIN otomatis dan mencegah problem N+1 di Node.js. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh koneksi database dan runtime Node), jadi tidak ada database fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Jalankan pencarian `findMany` pada tabel `user` dengan menyertakan relasi tabel `profile` menggunakan opsi `include`.",
          starterCode: "// Tulis query include di sini\n",
          language: "text",
          tests: [
            {
              pattern: "await\\s+prisma\\.user\\.findMany\\(\\s*\\{\\s*include\\s*:\\s*\\{\\s*profile\\s*:\\s*true\\s*\\}\\s*\\}\\s*\\)",
              message: "Gunakan include: { profile: true }",
            },
          ],
          solution: "await prisma.user.findMany({ include: { profile: true } });",
          susunKode: {
            question:
              "Rangkai kueri Prisma findMany dengan sertaan Eager Loading relasi profile (include).",
            potongan: [
              "await prisma.user.findMany({",
              "include: { profile: true }",
              "});",
            ],
            pengecoh: [
              "with: { profile: true }",
              "join: { profile: true }",
            ],
            pemisah: "\n",
            explanation:
              "Pengambilan data beserta relasinya pada Prisma menggunakan opsi include: { namaRelasi: true }. Keping with keliru opsi (with adalah sintaks ORM Laravel). Keping join keliru nama klausa Prisma untuk eager loading relasi.",
          },
        },
        {
          kind: "step",
          id: "node-4-4",
          title: "Prisma Transactions ($transaction)",
          explanation:
            "Fitur `prisma.$transaction()` digunakan untuk memastikan serangkaian operasi database dieksekusi secara *atomic* (memenuhi prinsip ACID). Jika ada satu kueri yang mengalami kesalahan di tengah proses transaksi, seluruh perubahan kueri sebelumnya akan secara otomatis dibatalkan (*rollback*). Fitur ini sangat krusial untuk alur checkout pesanan di mana data keranjang harus dihapus dan data order dibuat bersamaan: jika pembuatan order gagal, item keranjang belanja tidak boleh hilang. Membungkus array kueri ke dalam `$transaction([ ... ])` memberikan jaminan integritas data tingkat tinggi. Jebakan utama adalah menjalankan beberapa kueri terpisah tanpa transaksi pada alur bisnis yang saling bergantung.",
          example: {
            code: "await prisma.$transaction([\n  prisma.user.update({ where: { id: 1 }, data: { balance: { decrement: 50 } } }),\n  prisma.user.update({ where: { id: 2 }, data: { balance: { increment: 50 } } })\n]);",
            output: "Kedua update dieksekusi secara atomic dalam satu transaksi",
            note: "Menjamin prinsip ACID pada mutasi data yang saling terkait. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Jalankan transaksi atomik `prisma.$transaction` yang menerima array berisi dua operasi: pembersihan item `prisma.cart.deleteMany({ where: { userId } })` dan pembuatan pesanan `prisma.order.create({ data })`. Gunakan kata kunci `await`.",
          starterCode: "// Tulis prisma.$transaction di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "await\\s+prisma\\.\\$transaction\\(",
              message: "Panggil transaksi atomik dengan `await prisma.$transaction(...)`.",
            },
            {
              pattern: "prisma\\.cart\\.deleteMany\\(\\s*\\{\\s*where:\\s*\\{\\s*userId\\s*\\}\\s*\\}\\s*\\)",
              message: "Sertakan operasi pertama: `prisma.cart.deleteMany({ where: { userId } })`.",
            },
            {
              pattern: "prisma\\.order\\.create\\(\\s*\\{\\s*data\\s*\\}\\s*\\)",
              message: "Sertakan operasi kedua: `prisma.order.create({ data })`.",
            },
          ],
          solution:
            "await prisma.$transaction([\n  prisma.cart.deleteMany({ where: { userId } }),\n  prisma.order.create({ data }),\n]);",
          susunKode: {
            question:
              "Rangkai pemanggilan transaksi berurutan Prisma Client untuk membersihkan keranjang dan membuat order.",
            potongan: [
              "await prisma.$transaction([\n",
              "  prisma.cart.deleteMany({ where: { userId } }),\n",
              "  prisma.order.create({ data }),\n",
              "]);",
            ],
            pengecoh: [
              "await prisma.transaction([\n",
              "  prisma.cart.delete({ where: { userId } }),\n",
              "  prisma.order.upsert({ data }),\n",
            ],
            pemisah: "",
            explanation:
              "Metode $transaction pada Prisma memastikan kedua operasi database berhasil bersama atau dibatalkan seluruhnya jika salah satu gagal. Keping await prisma.transaction([ menggoda karena tanda dollar $ sering terlewat saat mengetik cepat, padahal tanda dollar wajib disertakan untuk membedakan API klien internal Prisma. Keping prisma.cart.delete keliru karena delete menuntut kunci unik tunggal, sedangkan menghapus seluruh item keranjang milik user memerlukan deleteMany. Keping order.upsert keliru metode karena membuat pesanan baru menggunakan create.",
          },
        },
        {
          kind: "step",
          id: "node-4-5",
          title: "Prisma Studio & Seeding",
          explanation:
            "Prisma menyediakan dua alat pembantu pengembangan yang sangat ampuh: Prisma Studio dan Database Seeding. Prisma Studio (`npx prisma studio`) meluncurkan antarmuka visual GUI di peramban web tempat kamu bisa melihat, menyaring, dan mengedit isi tabel database secara langsung tanpa aplikasi tambahan. Sementara itu, skrip *seeding* digunakan untuk menyuntikkan data awal (*dummy data*) ke database agar lingkungan penguji dapat langsung digunakan. Kedua alat ini mempercepat alur kerja pengembang backend secara signifikan selama tahap pembuatan fitur. Jebakan utama adalah mengaktifkan Prisma Studio di server produksi publik.",
          example: {
            code: "npx prisma studio --port 5555",
            output: "Prisma Studio is up on http://localhost:5555",
            note: "Visual GUI bawaan untuk berinteraksi dengan database.",
          },
          instruction:
            "Tuliskan perintah CLI npx prisma untuk meluncurkan antarmuka visual GUI Prisma Studio di lingkungan lokal.",
          starterCode: "# Tulis perintah untuk membuka penjelajah data bawaan Prisma\n",
          language: "text",
          tests: [
                      {
                        "pattern": "npx\\s+prisma\\s+studio",
                        "message": "Prisma menyediakan penjelajah data berbasis browser lewat subperintah `studio`. Ia dijalankan dengan `npx prisma <subperintah>` dan membuka http://localhost:5555 — praktis untuk memeriksa data, tapi jangan pernah dijalankan menghadap internet di server produksi."
                      }
                    ],
          solution: "npx prisma studio",
          susunKode: {
            question:
              "Rangkai perintah npx untuk membuka antarmuka visual pengelolaan basis data Prisma Studio.",
            potongan: [
              "npx",
              "prisma",
              "studio",
            ],
            pengecoh: [
              "npx prisma-gui",
              "open-studio",
            ],
            pemisah: " ",
            explanation:
              "Prisma Studio dibuka melalui CLI dengan perintah npx prisma studio. Keping prisma-gui keliru nama paket CLI Prisma. Keping open-studio keliru nama sub-perintah resmi penjelajah database visual Prisma.",
          },
        },
        {
          kind: "step",
          id: "node-4-6",
          title: "Pola Repository (Data Access Isolation)",
          explanation:
            "Pola Repository adalah praktik arsitektur backend yang memisahkan seluruh panggilan kueri database ke dalam kelas atau objek terisolasi (misal `UserRepository`). Dengan mengisolasi akses data dari rute controller Express, kamu dapat mengubah pustaka ORM atau melakukan pengujian (*mock testing*) tanpa harus menyentuh kode handler HTTP. Pola ini menerapkan prinsip dasar *Separation of Concerns* (SoC) yang membuat basis kode backend berskala besar tetap rapi dan terorganisir. Pendekatan ini merupakan standar industri pada aplikasi backend profesional. Jebakan umum adalah mencampur logika penguraian HTTP `req.body` di dalam fungsi repository data.",
          example: {
            code: "export const ProductRepository = {\n  findById: (id: number) => prisma.product.findUnique({ where: { id } }),\n};",
            output: "Fungsi ProductRepository.findById siap dipanggil oleh controller",
            note: "Repository mengisolasi akses database dari controller Express, memudahkan pengujian dan penerapan prinsip SoC. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh koneksi database dan runtime Node), jadi tidak ada database fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Lengkapi properti `findById` pada objek `UserRepository` agar mengembalikan kueri `prisma.user.findUnique({ where: { id } })`.",
          starterCode: "// Tulis findById repo di sini\n",
          language: "text",
          tests: [
            {
              pattern: "findById\\s*:\\s*\\(?id\\)?\\s*=>\\s*prisma\\.user\\.findUnique\\(",
              message: "Definisikan findById pada UserRepository",
            },
          ],
          solution: "findById: (id) => prisma.user.findUnique({ where: { id } });",
          susunKode: {
            question:
              "Susun metode Repository findById yang memanggil prisma.user.findUnique berdasarkan ID.",
            potongan: [
              "findById: (id) => ",
              "prisma.user.findUnique({",
              "where: { id }",
              "});",
            ],
            pengecoh: [
              "findUserById: (id) => ",
              "prisma.user.findFirst({",
            ],
            pemisah: "\n",
            explanation:
              "Pola Repository mengisolasi akses data dengan membungkus kueri ORM prisma.user.findUnique({ where: { id } }). Keping findUserById keliru nama metode repository. Keping findFirst keliru metode kueri kriteria unik.",
          },
        },
        {
          kind: "quiz",
          id: "node-4-kuis",
          title: "Kuis: Database dengan Prisma",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Opsi query Prisma apa yang digunakan untuk mengikutsertakan data dari tabel relasi (seperti mengambil User beserta daftar Post)?",
              choices: ["join","include","with","attach"],
              answerIndex: 1,
              explanation: "Di Prisma Client, properti include: { posts: true } digunakan untuk eager loading data dari tabel berelasi dalam satu pemanggilan terpadu. Prisma secara otomatis menyusun kueri SQL JOIN yang efisien di balik layar dan menghasilkan objek data TypeScript dengan tipe relasi yang akurat, mencegah pengembang menulis kueri berulang yang memicu masalah performa N+1 query."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Perintah Prisma CLI manakah yang digunakan untuk menyelaraskan skema schema.prisma ke database development dan menghasilkan berkas migrasi baru?",
              choices: ["npx prisma migrate dev","npx prisma push","npx prisma db sync","npx prisma generate"],
              answerIndex: 0,
              explanation: "npx prisma migrate dev adalah perintah resmi untuk lingkungan pengembangan (development). Perintah ini membandingkan schema.prisma dengan database lokal, menghasilkan berkas migrasi SQL baru di direktori prisma/migrations, menerapkan perubahan ke database, dan secara otomatis menjalankan prisma generate untuk memperbarui Prisma Client TypeScript. Perintah migrate deploy dipakai di produksi, sedangkan generate hanya memperbarui tipe klien."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Fitur Prisma Client manakah yang memastikan bahwa serangkaian query database dieksekusi secara atomic (jika 1 query gagal, seluruh perubahan dibatalkan)?",
              choices: ["prisma.$transaction()","prisma.$batch()","prisma.$queryRaw()","prisma.$rollback()"],
              answerIndex: 0,
              explanation: "prisma.$transaction() membungkus serangkaian operasi database ke dalam satu transaksi atomik yang mematuhi prinsip ACID (Atomicity, Consistency, Isolation, Durability). Jika terjadi error pada salah satu kueri di tengah transaksi, Prisma akan otomatis membatalkan (rollback) seluruh perubahan sebelumnya sehingga database tidak mengalami kerusakan atau inkonsistensi saldo/data."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Saat mendefinisikan arsitektur aplikasi backend berskala besar, mengapa disarankan memisahkan semua kueri Prisma (database logic) dari Express Route Controller dan meletakkannya di kelas/fungsi tersendiri?",
              choices: ["Agar aplikasi mengonsumsi lebih sedikit RAM","Karena ini adalah pola Repository yang memisahkan urusan akses data dari urusan HTTP Request","Agar bisa menggunakan MySQL dan PostgreSQL bersamaan","Kewajiban dari dokumentasi Express"],
              answerIndex: 1,
              explanation: "Ini adalah penerapan pola desain Repository (bagian dari Separation of Concerns). Dengan mengisolasi kueri database dari Controller Express, kode controller hanya fokus menangani validasi HTTP dan respon klien. Jika skema database dirombak atau saat menulis Unit Test di mana database perlu di-mock, kamu tidak perlu menyentuh atau merusak alur logika HTTP di Controller."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Perintah Prisma apa yang membuka antarmuka GUI browser instan untuk melihat dan memodifikasi isi tabel database kamu dengan mudah?",
              choices: ["npx prisma dashboard","npx prisma db admin","npx prisma studio","npx prisma view"],
              answerIndex: 2,
              explanation: "npx prisma studio meluncurkan server lokal dan antarmuka web GUI interaktif (biasanya di port 5555). Dari antarmuka ini, pengembang dapat menjelajahi seluruh tabel, melihat relasi data antar entitas, menambah data baru, dan mengedit record secara visual tanpa memerlukan instalasi aplikasi database client eksternal seperti DBeaver atau pgAdmin."
            }
          ],
        },
      ],
    },
    {
      slug: "auth-node",
      title: "Autentikasi & Otorisasi",
      description:
        "JWT vs session dengan jujur: trade-off, bukan dogma.",
      topics: [
        "Hash password dengan bcrypt/argon2 (jangan pernah plain text)",
        "JWT: sign, verify, expiry, refresh token",
        "Session + cookie sebagai alternatif",
        "Middleware auth & role-based access",
        "httpOnly cookie vs localStorage untuk token",
        "Logout & token revocation",
      ],
      items: [
        {
          kind: "materi",
          id: "node-5-m1",
          title: "Strategi Autentikasi: JWT vs Session",
          body:
            "# Strategi Autentikasi: JWT vs Session\n\nKeamanan data pengguna merupakan fondasi paling kritis dalam aplikasi backend. Dua tugas utama dalam domain keamanan ini adalah **Autentikasi** (memverifikasi identitas pengguna yang masuk) dan **Otorisasi** (memastikan hak akses apa saja yang dimiliki pengguna terhadap data tertentu). Memahami trade-off mendalam antara pendekatan *Stateless Token* (JWT) dan *Stateful Session* sangat penting saat merancang sistem backend modern.\n\n## Prinsip Utama Hashing Kata Sandi\n\n**JANGAN PERNAH menyimpan kata sandi dalam bentuk teks mentah (plain-text) di basis data!** Jika basis data bocor, seluruh akun pengguna akan terkompromi. Gunakan algoritma enkripsi satu arah berbasis *salt* seperti `bcrypt` atau `argon2id`.\n\n```text\nPassword Mentah: \"rahasia123\"\n       |\n       v bcrypt.hash(password, 10)\nHash Tersimpan: \"$2b$10$e8.Z...K3Q.u6Xn7Y...\" (Satu Arah - Tidak Bisa Di-reverse)\n```\n\n### Memilih Salt Rounds Bcrypt yang Tepat\nAngka *cost factor* (salt rounds) menentukan berapa kali proses hashing diulang:\n- **Round 10:** Membutuhkan waktu komputasi ~80-100 milidetik di CPU server modern (**Standar Industri Ideal**).\n- **Round 12:** Membutuhkan waktu ~300-400 milidetik (Cocok untuk sistem perbankan berkeamanan tinggi).\n- **Round 14+:** Membutuhkan waktu > 1 detik per login. Jika 1.000 pengguna login bersamaan, CPU server akan macet total (terkena *Denial of Service* internal).\n\n## Arsitektur Autentikasi JWT (Stateless Token)\n\nJSON Web Token (JWT) terdiri dari 3 segmen yang dipisahkan oleh karakter titik: `Header.Payload.Signature`. Server menandatangani token menggunakan kunci rahasia (*secret key*). Klien menyimpan token ini dan mengirimkannya kembali di header `Authorization: Bearer <token>` pada setiap request berikutnya.\n\n```text\nClient (Browser / Mobile)                 Server Backend (Express)\n        |\n        |-- 1. POST /login { email, pass } ------>|\n        |                                         |---> Verify bcrypt.compare()\n        |<-- 2. Return JWT Token (Stateless) -----|\n        |\n        |-- 3. GET /orders (Bearer Token) ------->|\n        |                                         |---> Verifikasi Signature Token\n        |<-- 4. Return Data Respon 200 -----------|\n```\n\n## Tabel Perbandingan JWT vs Stateful Session Cookie\n\n| Dimensi Keamanan / Performa | JWT (JSON Web Token) | Stateful Session + Cookie |\n|---|---|---|\n| **Penyimpanan State Server** | ❌ None (Stateless) | ✅ Di RAM Server / Redis Database |\n| **Skalabilitas Microservices**| ✅ Sangat Fleksibel (Verifikasi mandiri) | ❌ Butuh Shared Session Store Terpusat |\n| **Penyimpanan di Klien** | `httpOnly Cookie` (Aman) / LocalStorage | `httpOnly Cookie` |\n| **Pembatalan Sesi (Revocation)**| ❌ Sulit (Harus tunggu expired / Denylist) | ✅ Sangat Mudah (Cukup hapus sesi di Redis) |\n| **Ukuran Payload Jaringan** | 500 - 1.000 Bytes per request | ~32 Bytes (Hanya ID Sesi acak) |\n| **Risiko Keamanan Utama** | Rawan pencurian token jika di LocalStorage | Rawan serangan CSRF jika tanpa SameSite strict |\n\n## Pengamanan Cookie HttpOnly & Role-Based Access Control (RBAC)\n\n- **`httpOnly: true`:** Mencegah skrip jahat JavaScript peramban (XSS) membaca isi cookie autentikasi.\n- **`sameSite: 'strict'`:** Mencegah peramban menyertakan cookie pada permintaan lintas situs, menggagalkan serangan pemalsuan permintaan antar situs (*CSRF*).\n- **Cookie Prefixes (`__Host-` / `__Secure-`):** Menjamin cookie hanya dikirim melalui koneksi HTTPS aman dan terikat ke domain utama.\n- **Middleware RBAC:** Memeriksa peran pengguna (seperti `req.user.role === 'admin'`) sebelum mengizinkan eksekusi rute terproteksi.\n\n## TypeScript Tip: Declaration Merging untuk `req.user`\n\nSaat memasang middleware auth yang menyematkan objek pengguna ke `req.user`, kompilator TypeScript akan melempar error: `Property 'user' does not exist on type 'Request'`. Solusi standar industri adalah menambahkan deklarasi tipe di berkas `src/types/express.d.ts`:\n\n```typescript\ndeclare global {\n  namespace Express {\n    interface Request {\n      user?: { id: number; email: string; role: string };\n    }\n  }\n}\nexport {};\n```\n\n## Strategi Produksi: Access Token + Refresh Token Rotation\n\nAlih-alih membuat satu token JWT berumur panjang (misal 30 hari), standar industri membagi token menjadi sepasang:\n1. **Access Token:** Berumur sangat pendek (10-15 menit), digunakan untuk mengakses endpoint API sehari-hari.\n2. **Refresh Token:** Berumur panjang (7-30 hari), disimpan di database/Redis atau cookie HttpOnly. Ketika access token kadaluwarsa, klien memanggil `/api/v1/auth/refresh` untuk menukar refresh token lama dengan sepasang token baru (*Token Rotation*).\n3. **Deteksi Pencurian Token (*Family Invalidation*):** Jika sebuah refresh token lama yang sudah pernah ditukar dikirimkan kembali oleh klien, server mendeteksi bahwa token tersebut telah dicuri penyerang, lalu secara otomatis membatalkan seluruh sesi login milik pengguna tersebut demi keamanan.\n\n## Kesalahan Umum & Jebakan (Pitfalls)\n\n- **Mitos JWT Terenkripsi:** Payload JWT hanya di-encode Base64Url (BUKAN dienkripsi). Siapa pun dapat membaca data payload di situs `jwt.io` tanpa perlu password. Jangan pernah menyimpan password, PIN, atau nomor kartu kredit di dalam payload JWT!\n- **Menyimpan JWT di LocalStorage:** Menyimpan token autentikasi di `localStorage` peramban membuat token sangat mudah dicuri melalui skrip injeksi XSS.\n- **JWT Tanpa Batas Kedaluwarsa:** Menerbitkan JWT tanpa opsi `expiresIn` membuat token yang tercuri dapat digunakan selamanya oleh penyerang.\n- **Lupa Pembatalan Cookie saat Logout:** Hanya menghapus token di sisi klien tanpa memanggil `res.clearCookie()` atau memasukkannya ke denylist di backend.\n- **Lupa `await` pada `bcrypt.compare`:** Karena `bcrypt.compare` adalah fungsi asinkron, lupa menuliskan `await` akan menghasilkan objek Promise. Di JavaScript, semua objek bernilai *truthy*, sehingga validasi password selalu lolos dan siapa pun bisa login dengan password salah!\n\n## Kaitan ke Dunia Kerja\n\nMerancang arsitektur autentikasi yang aman dengan penanganan token JWT, Refresh Token Rotation, dan Cookie HttpOnly adalah persyaratan utama di industri SaaS, Fintech, dan e-Commerce. Pemahaman ini memastikan backend yang kamu bangun memenuhi standar audit keamanan informasi regulasi perbankan dan privasi global.",
        },
        {
          kind: "step",
          id: "node-5-1",
          title: "Hashing Password dengan bcrypt",
          explanation:
            "Menyimpan kata sandi dalam bentuk teks mentah (plain-text) di database adalah pelanggaran keamanan paling fatal dalam pengembangan perangkat lunak. Pustaka `bcrypt` menggunakan algoritma enkripsi satu arah dengan tambahan salt teracak untuk mengubah kata sandi menjadi string hash yang tidak dapat dikembalikan ke bentuk aslinya. Metode `bcrypt.compare(input, hash)` digunakan saat login untuk memverifikasi apakah input pengguna cocok dengan hash di database tanpa perlu mengetahui kata sandi aslinya. Angka 10 pada salt rounds adalah standar industri yang menyeimbangkan keamanan dan kecepatan pemrosesan server. Jebakan utama pemula adalah mencoba mendekripsi string hash bcrypt yang sebenarnya mustahil dilakukan.",
          example: {
            code: "import bcrypt from 'bcrypt';\nconst hash = await bcrypt.hash('pass123', 10);\nconsole.log(hash.startsWith('$2b$'));",
            output: "true",
            note: "Angka 10 adalah salt rounds standar industri.",
          },
          instruction:
            "Lakukan verifikasi kecocokan password mentah `input` dengan string enkripsi `hash` menggunakan `bcrypt.compare` secara async.",
          starterCode: "// Tulis bcrypt.compare di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "bcrypt\\.compare\\(",
                        "message": "Verifikasi password TIDAK dilakukan dengan membandingkan hash secara langsung — pakai `bcrypt.compare()`, yang menghitung ulang hash memakai salt yang tertanam di dalamnya."
                      },
                      {
                        "pattern": "\\(\\s*input\\s*,\\s*hash\\s*\\)",
                        "message": "Argumennya dua dan urutannya penting: password mentah dari pengguna lebih dulu, lalu hash dari database."
                      },
                      {
                        "pattern": "await\\s+bcrypt\\.compare",
                        "message": "Fungsinya asinkron. Tanpa `await`, yang kamu periksa adalah objek Promise — dan objek selalu truthy, sehingga SIAPA PUN bisa login. Ini celah keamanan nyata, bukan sekadar bug."
                      }
                    ],
          solution: "const isValid = await bcrypt.compare(input, hash);",
          susunKode: {
            question:
              "Rangkai verifikasi pencocokan kata sandi mentah masukan pengguna terhadap nilai hash menggunakan bcrypt.compare.",
            potongan: [
              "const isValid =",
              "await",
              "bcrypt.compare(",
              "input, hash",
              ");",
            ],
            pengecoh: [
              "bcrypt.compareSync(",
              "input, secret",
            ],
            pemisah: " ",
            explanation:
              "Fungsi asinkron bcrypt.compare(plainText, hash) mengembalikan Promise boolean hasil pencocokan. Keping bcrypt.compareSync keliru metode sinkronus yang memblokir Event Loop. Keping secret keliru nama variabel hash target.",
          },
        },
        {
          kind: "step",
          id: "node-5-2",
          title: "Penandatanganan & Verifikasi JWT (jsonwebtoken)",
          explanation:
            "JSON Web Token (JWT) adalah standar ringkas untuk mentransfer informasi identitas secara aman antara klien dan server sebagai objek JSON yang ditandatangani digital. Fungsi `jwt.sign(payload, secret, { expiresIn: '1h' })` membuat token terenkripsi yang memuat data pengguna beserta batas waktu kadaluarsanya. Karena token ini bersifat stateless, server tidak perlu menyimpan sesi di RAM dan dapat memverifikasi keabsahan token cukup dengan mengecek tanda tangannya. Selalu tetapkan durasi kadaluarsa (`expiresIn`) untuk membatasi risiko jika token tercuri. Jebakan fatal adalah memasukkan data sensitif seperti kata sandi ke dalam payload JWT yang sebenarnya bisa di-decode oleh publik.",
          example: {
            code: "import jwt from 'jsonwebtoken';\nconst token = jwt.sign({ id: 1 }, 'secret', { expiresIn: '1h' });\nconsole.log(typeof token);",
            output: "string",
            note: "Jangan simpan data sensitif seperti password di dalam payload JWT!",
          },
          instruction:
            "Terbitkan token JWT berisi payload `{ id: user.id }` menggunakan kunci rahasia `secret` dengan masa kadaluarsa 1 jam (`expiresIn: '1h'`).",
          starterCode: "// Tulis jwt.sign di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "jwt\\.sign\\(",
                        "message": "Pembuatan token memakai `jwt.sign(payload, secret, options)`."
                      },
                      {
                        "pattern": "\\{\\s*id\\s*:\\s*user\\.id\\s*\\}",
                        "message": "Payload berisi data seperlunya saja — id sudah cukup. Ingat: isi JWT hanya di-encode base64, BUKAN dienkripsi, jadi siapa pun bisa membacanya. Jangan menaruh password atau data pribadi."
                      },
                      {
                        "pattern": "expiresIn\\s*:\\s*['\"]1h['\"]",
                        "message": "Beri masa berlaku lewat opsi `expiresIn`. Token tanpa kedaluwarsa berlaku selamanya meskipun pengguna sudah logout — itu temuan yang selalu disorot saat audit keamanan."
                      }
                    ],
          solution: "const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });",
          susunKode: {
            question:
              "Rangkai pembuatan JSON Web Token (JWT) yang memuat klaim id pengguna dan masa berlaku 1 jam.",
            potongan: [
              "const token =",
              "jwt.sign({ id: user.id },",
              "secret,",
              "{ expiresIn: '1h' });",
            ],
            pengecoh: [
              "jwt.create({ id: user.id },",
              "{ maxAge: '1h' }",
            ],
            pemisah: " ",
            explanation:
              "Penandatanganan JWT dilakukan dengan jwt.sign(payload, secret, { expiresIn: '1h' }). Keping jwt.create keliru nama metode pustaka jsonwebtoken. Keping maxAge keliru nama opsi properti pembuat token jsonwebtoken.",
          },
        },
        {
          kind: "step",
          id: "node-5-3",
          title: "Session + Cookie Alternative",
          explanation:
            "Selain JWT, pendekatan autentikasi berbasis Session dan Cookie menggunakan paket `express-session` merupakan alternatif stateful yang sangat populer. Pada pendekatan ini, data sesi pengguna disimpan di memori server atau Redis, sementara klien hanya menyimpan ID sesi acak di dalam cookie peramban. Keunggulan utama sistem sesi adalah kemudahan pembatalan (*revocation*) akses pengguna secara instan dari sisi server. Penggunaan opsi cookie `httpOnly` menjaga ID sesi agar aman dari ancaman pencurian skrip XSS. Jebakan umum adalah menyimpan data sesi di memori RAM bawaan server yang akan hilang saat server me-restart.",
          example: {
            code: "req.session.userId = user.id;\nreq.session.role = user.role;",
            output: "Sesi pengguna tersimpan di session store server dan cookie connect.sid terkirim",
            note: "Cookie HttpOnly aman dari pencurian script XSS. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Simpan ID pengguna `user.id` ke dalam properti `req.session.userId` pada objek sesi request.",
          starterCode: "// Tulis req.session di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "req\\.session\\.userId\\s*=",
                        "message": "Dengan express-session, data sesi ditulis sebagai properti pada `req.session`. Yang disimpan cukup penanda pengguna."
                      },
                      {
                        "pattern": "user\\.id",
                        "message": "Isi dengan id pengguna yang baru terverifikasi — bukan seluruh objek user, karena isi sesi ikut tersimpan di store dan dikirim setiap request."
                      }
                    ],
          solution: "req.session.userId = user.id;",
          susunKode: {
            question:
              "Rangkai penugasan identifier pengguna ke objek sesi Express req.session.userId.",
            potongan: [
              "req.session.userId =",
              "user.id;",
            ],
            pengecoh: [
              "req.session.setUser(",
              "user.userId;",
            ],
            pemisah: " ",
            explanation:
              "Objek sesi express-session dapat ditambahi properti secara langsung seperti req.session.userId = user.id. Keping setUser() keliru karena session bukan objek kelas dengan setter. Keping user.userId keliru nama properti ID model User.",
          },
        },
        {
          kind: "step",
          id: "node-5-4",
          title: "Middleware Auth & Role Checking",
          explanation:
            "Middleware autentikasi mengekstrak token dari header `Authorization: Bearer <token>` dan memverifikasi keabsahannya sebelum memberi izin akses ke rute terproteksi. Jika header otorisasi tidak ditemukan atau token tidak valid, middleware ini langsung menghentikan proses dengan mengembalikan status HTTP `401 Unauthorized`. Setelah verifikasi berhasil, payload data pengguna ditempelkan ke objek `req.user` agar dapat dibaca oleh handler rute selanjutnya. Pola penanganan ini menjamin seluruh rute privat terlindungi dari akses tanpa izin secara konsisten. Jebakan umum adalah membiarkan request berlanjut tanpa memeriksa keberadaan token terlebih dahulu.",
          example: {
            code: "const authHeader = req.headers.authorization;\nconst token = authHeader && authHeader.split(' ')[1];\nif (!token) return res.sendStatus(401);",
            output: "HTTP/1.1 401 Unauthorized (request ditolak seketika)",
            note: "Early return res.sendStatus(401) mencegah request tanpa kredensial diproses lebih jauh. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Periksa keberadaan token di awal middleware. Jika variabel `token` bernilai falsy, hentikan alur saat itu juga (`return`) dengan mengirim status \"belum terautentikasi\" memakai metode Express yang mengirim kode sekaligus teks standarnya.",
          starterCode: "// Tulis pengecekan token di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "if\\s*\\(\\s*!\\s*token\\s*\\)",
                        "message": "Middleware harus menolak lebih dulu kalau tokennya tidak ada — dengan pemeriksaan negasi di awal (early return)."
                      },
                      {
                        "pattern": "res\\.sendStatus\\(\\s*401\\s*\\)",
                        "message": "Kode untuk \"belum terautentikasi\" adalah 401 (bukan 403, yang berarti sudah dikenali tapi tidak berhak). `sendStatus` mengirim kode beserta teks standarnya."
                      },
                      {
                        "pattern": "return\\s+res\\.",
                        "message": "Wajib pakai `return` sebelum mengirim respons. Tanpa itu, eksekusi lanjut ke `next()` dan permintaan yang seharusnya ditolak tetap diteruskan ke handler."
                      }
                    ],
          solution: "if (!token) return res.sendStatus(401);",
          susunKode: {
            question:
              "Susun pengondisian penolakan middleware autentikasi yang mengembalikan status HTTP 401 jika token tidak ada.",
            potongan: [
              "if (!token)",
              "return res.sendStatus(401);",
            ],
            pengecoh: [
              "if (token == null)",
              "return res.send(401);",
            ],
            pemisah: "\n",
            explanation:
              "Pemeriksaan !token mendeteksi ketiadaan header/cookie token dan menghentikan alur dengan return res.sendStatus(401). Keping res.send(401) keliru karena send(401) mengirim angka 401 sebagai body teks, bukan HTTP status code.",
          },
        },
        {
          kind: "step",
          id: "node-5-5",
          title: "Keamanan Cookie: httpOnly & sameSite",
          explanation:
            "Mengirimkan token autentikasi di dalam Cookie peramban memerlukan opsi keamanan ketat `{ httpOnly: true, secure: true, sameSite: 'strict' }`. Opsi `httpOnly: true` melarang skrip JavaScript peramban membaca isi cookie, sehingga kebal dari pencurian token akibat serangan Cross-Site Scripting (XSS). Sementara itu, opsi `sameSite: 'strict'` mencegah peramban mengirimkan cookie pada permintaan lintas situs untuk menggagalkan serangan Cross-Site Request Forgery (CSRF). Menerapkan opsi keamanan cookie ini adalah standar wajib keamanan aplikasi web modern. Jebakan fatal adalah membiarkan `httpOnly: false` sehingga token dapat diakses via `document.cookie`.",
          example: {
            code: "res.cookie('refreshToken', refreshToken, {\n  httpOnly: true,\n  secure: process.env.NODE_ENV === 'production',\n  sameSite: 'strict',\n});",
            output: "Set-Cookie: refreshToken=eyJhbGci...; HttpOnly; SameSite=Strict",
            note: "Opsi httpOnly melarang JavaScript peramban membaca cookie, menangkal pencurian via XSS. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Kirimkan cookie bernama `'token'` yang membawa nilai `token` dengan menyertakan opsi perlindungan `httpOnly: true`.",
          starterCode: "// Tulis res.cookie di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "res\\.cookie\\(",
                        "message": "Cookie dikirim dengan `res.cookie(nama, nilai, opsi)`."
                      },
                      {
                        "pattern": "httpOnly\\s*:\\s*true",
                        "message": "Aktifkan `httpOnly` agar cookie TIDAK bisa dibaca JavaScript di browser — ini pertahanan utama terhadap pencurian token lewat XSS. Untuk produksi, tambahkan juga `secure: true` dan `sameSite: 'lax'`."
                      },
                      {
                        "pattern": "['\"]token['\"]\\s*,\\s*token",
                        "message": "Argumen pertama nama cookie-nya, argumen kedua nilainya."
                      }
                    ],
          solution: "res.cookie('token', token, { httpOnly: true });",
          susunKode: {
            question:
              "Rangkai pengiriman cookie aman 'token' dari Express dengan mengaktifkan opsi keamanan httpOnly: true.",
            potongan: [
              "res.cookie('token',",
              "token,",
              "{ httpOnly: true });",
            ],
            pengecoh: [
              "res.sendCookie('token',",
              "{ httpOnly: false });",
            ],
            pemisah: " ",
            explanation:
              "Metode res.cookie(nama, nilai, opsi) memasang cookie di mana httpOnly: true mencegah JavaScript client membaca cookie tersebut. Keping res.sendCookie keliru nama metode Express. Keping httpOnly: false sangat berbahaya karena membiarkan skrip klien membaca cookie sesi.",
          },
        },
        {
          kind: "step",
          id: "node-5-6",
          title: "Logout & Token Revocation",
          explanation:
            "Proses logout pada sistem autentikasi cookie dilakukan dengan memanggil metode `res.clearCookie('token')` untuk menghapus cookie dari peramban klien. Pada arsitektur JWT stateless, karena token yang telah diterbitkan tidak dapat dihapus langsung dari server, strategi pembatalan (*token revocation*) dilakukan dengan menyimpan ID token yang dibatalkan ke dalam daftar hitam (*denylist*) Redis hingga masa kadaluarsanya habis. Memastikan alur logout bekerja dengan sempurna mencegah penyalahgunaan sesi oleh pengguna lain di perangkat publik. Jebakan utama adalah hanya menghapus token di antarmuka frontend tanpa membersihkan cookie resmi dari server.",
          example: {
            code: "res.clearCookie('refreshToken');\nreturn res.status(200).json({ message: 'Logout berhasil' });",
            output: "Set-Cookie: refreshToken=; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
            note: "Menjamin sesi berakhir sempurna dengan menghapus cookie dari peramban. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Tuliskan perintah balasan Express untuk menghapus cookie autentikasi bernama `'token'` saat proses logout.",
          starterCode: "// Tulis clearCookie di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "res\\.clearCookie\\(",
                        "message": "Logout pada pola cookie berarti menghapus cookie-nya dengan `res.clearCookie(<nama>)`."
                      },
                      {
                        "pattern": "['\"]token['\"]",
                        "message": "Sebutkan nama cookie yang sama seperti saat dibuat. Catatan penting: menghapus cookie tidak membatalkan JWT-nya — token yang sudah dicuri tetap berlaku sampai kedaluwarsa, dan itu sebabnya ada denylist/refresh token."
                      }
                    ],
          solution: "res.clearCookie('token');",
          susunKode: {
            question:
              "Rangkai penghapusan cookie sesi 'token' pada proses logout menggunakan res.clearCookie.",
            potongan: [
              "res.clearCookie(",
              "'token'",
              ");",
            ],
            pengecoh: [
              "res.unsetCookie(",
              "'user_session'",
            ],
            pemisah: "",
            explanation:
              "Metode bawaan res.clearCookie('namaCookie') di Express menghapus cookie dari browser klien secara instan. Keping res.unsetCookie keliru nama metode Express. Keping 'user_session' keliru nama kunci cookie yang dipersyaratkan.",
          },
        },
        {
          kind: "quiz",
          id: "node-5-kuis",
          title: "Kuis: Autentikasi Node.js",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Opsi keamanan cookie apa yang wajib diaktifkan agar nilai cookie autentikasi tidak bisa dicuri oleh skrip JavaScript XSS penyerang di browser?",
              choices: ["httpOnly: true","domain: '*'","path: '/'","express: true"],
              answerIndex: 0,
              explanation: "Menyetel opsi httpOnly: true pada cookie menginstruksikan peramban agar melarang skrip JavaScript sisi klien (termasuk document.cookie) mengakses nilai cookie tersebut. Fitur ini merupakan dinding pertahanan utama melawan pencurian token sesi melalui serangan injeksi skrip jahat (Cross-Site Scripting / XSS). Pilihan secure: true memastikan HTTPS, dan sameSite: 'strict' mencegah CSRF."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa menyimpan plain-text password pengguna di database dianggap sebagai pelanggaran keamanan paling fatal?",
              choices: ["Karena jika database bocor, penyerang langsung mengetahui password asli seluruh pengguna tanpa perlu mendekripsi","Karena database akan menolak menyimpan string biasa","Karena plain-text password membuat ukuran database membengkak 100 kali lipat","Karena bcrypt berbayar"],
              answerIndex: 0,
              explanation: "Menyimpan kata sandi dalam bentuk teks mentah (plain-text) adalah pelanggaran kepatuhan keamanan data paling fatal. Jika file backup atau server database bocor akibat SQL injection, penyerang dapat langsung melihat kata sandi asli jutaan pengguna. Kata sandi wajib di-hash menggunakan fungsi kriptografi satu arah berbasis salt seperti bcrypt atau argon2id sehingga nilai aslinya mustahil dikomputasi balik."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara kerja skema autentikasi JSON Web Token (JWT)?",
              choices: ["Server menandatangani payload JSON dengan secret key, lalu client mengirimkan token tersebut pada header Authorization Bearer di tiap request","Server menyimpan seluruh data sesi di RAM server","JWT mengompresi gambar file profil","JWT menghapus cookie secara otomatis tiap 5 detik"],
              answerIndex: 0,
              explanation: "JWT beroperasi secara stateless: saat login sukses, server menandatangani (cryptographic signature) payload identitas pengguna menggunakan secret key rahasia dan mengirimkannya ke klien. Pada setiap request berikutnya, klien menyertakan token tersebut di header \"Authorization: Bearer <token>\". Server cukup memverifikasi keabsahan tanda tangan matematis token tanpa perlu melakukan kueri pencarian sesi di RAM atau database."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Dalam implementasi autentikasi JWT di Express, nilai apakah yang krusial untuk dimasukkan di fungsi `jwt.sign(payload, secret, { expiresIn: '...' })` demi keamanan sesi aplikasi?",
              choices: ["Pesan enkripsi statis","Waktu kadaluarsa token (expiresIn)","Password asli pengguna dalam payload","Alamat IP pengguna server"],
              answerIndex: 1,
              explanation: "Opsi expiresIn (seperti '15m' atau '1h') menetapkan masa berlaku token. Karena JWT bersifat stateless dan tidak dapat dibatalkan (revoked) secara instan dari server tanpa bantuan denylist, token tanpa kedaluwarsa yang berhasil dicuri penyerang akan dapat disalahgunakan selamanya untuk membobol akun korban. Membatasi umur token dan menggabungkannya dengan Refresh Token Rotation adalah standar keamanan industri."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kamu menggunakan middleware `authenticateToken` yang memverifikasi JWT dan meletakkan informasi pengguna ke `req.user`. Jika klien tidak mengirimkan token yang sah, status HTTP apa yang lazim dikembalikan?",
              choices: ["401 Unauthorized","500 Internal Server Error","404 Not Found","200 OK"],
              answerIndex: 0,
              explanation: "Status HTTP 401 Unauthorized adalah respon standar yang menandakan bahwa request ditolak karena klien tidak menyertakan kredensial autentikasi yang sah (token hilang, token palsu, atau token kadaluwarsa). Berbeda dengan 403 Forbidden yang berarti identitas klien sudah dikenali namun akun tersebut tidak memiliki hak akses izin (role) yang memadai terhadap endpoint tersebut."
            }
          ],
        },
      ],
    },
    {
      slug: "validasi-error",
      title: "Validasi & Error Handling",
      description:
        "API production tidak pernah percaya input — dan tidak pernah bocorkan stack trace.",
      topics: [
        "Validasi body/params dengan Zod",
        "Error handler terpusat di Express",
        "Custom error class (NotFoundError, ValidationError)",
        "async error & pola wrapper",
        "Logging terstruktur (pino)",
        "Pesan error untuk user vs untuk developer",
      ],
      items: [
        {
          kind: "materi",
          id: "node-6-m1",
          title: "Validasi Schema & Handling Error Terpusat",
          body:
            "# Validasi Schema & Handling Error Terpusat\n\n" +
            "Aplikasi backend tingkat produksi bertindak atas satu prinsip utama: **Jangan Pernah Mempercayai Input dari Klien!** Data masukan pengguna dapat berisi format tidak sesuai, bidang yang hilang, atau skrip berbahaya. Selain validasi masukan, backend memerlukan sistem **Centralized Error Handling** untuk menangkap seluruh kesalahan aplikasi secara konsisten tanpa membocorkan rahasia internal server.\n\n" +
            "## Validasi Schema Deklaratif dengan Zod\n\n" +
            "Zod adalah pustaka validasi skema TypeScript-first yang memungkinkan kita mendefinisikan bentuk data yang diharapkan secara deklaratif. Saat `UserSchema.parse(req.body)` dipanggil, Zod akan memverifikasi tipe data runtime sekaligus menghasilkan tipe TypeScript secara otomatis.\n\n" +
            "```text\n" +
            "Client Input Payload JSON  ===>  Zod Schema Parse  ===> Validated Type-Safe Data\n" +
            "{ \"email\": \"bimo@mail.com\" }     (Email Format Check)     (Lolos ke Route Controller)\n" +
            "                                        |\n" +
            "                                (Gagal Validasi)\n" +
            "                                        v\n" +
            "                             Throw ZodError (400 Bad Request)\n" +
            "```\n\n" +
            "## Arsitektur Middleware Error Terpusat Express (4 Arguments)\n\n" +
            "Di Express, sebuah middleware dikenali secara khusus sebagai **Centralized Error Handler** jika memiliki **tepat 4 parameter**: `(err, req, res, next)`. Middleware ini harus diletakkan di urutan **paling bawah** dari seluruh rute aplikasi.\n\n" +
            "```text\n" +
            "Route Handler / Controller  ===>  throw new AppError(404, \"User Not Found\")\n" +
            "                                                 |\n" +
            "                                                 v\n" +
            "+-----------------------------------------------------------------------------------------+\n" +
            "| Centralized Error Middleware: app.use((err, req, res, next) => { ... })                |\n" +
            "|                                                                                         |\n" +
            "|  1. Deteksi Jenis Error (Operational vs Programming Error)                              |\n" +
            "|  2. Catat Log ke Pino Logger (JSON Terstruktur)                                         |\n" +
            "|  3. Kirim Respon Sanitasi ke Klien (Sembunyikan Stacktrace di Produksi)                 |\n" +
            "+-----------------------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Perbedaan Operational Error vs Programming Error\n\n" +
            "| Kategori Error | Deskripsi | Penanganan Respon |\n" +
            "|---|---|---|\n" +
            "| **Operational Error** | Kesalahan yang dapat diprediksi (misal data 404, input 400 gagal validasi, token 401 expired) | Respon pesan error yang informatif ke klien beserta status code sesuai |\n" +
            "| **Programming Error** | Bug tidak terduga di kode (misal `TypeError: Cannot read property of undefined`) | Log stacktrace ke Pino & return pesan generik `500 Internal Server Error` |\n\n" +
            "## Custom Error Class (`AppError`) & Logging Terstruktur (`pino`)\n\n" +
            "- **`AppError extends Error`:** Kelas turunan error kustom untuk menyuntikkan `statusCode` semantik pada setiap exception.\n" +
            "- **Pino Logger:** Pengganti `console.log` yang mencatat log dalam format JSON terstruktur untuk diproses oleh sistem pemantau log (seperti Datadog / Elasticsearch).\n\n" +
            "## Evolusi Penanganan Async Error: Express 4 vs Express 5\n\n" +
            "Pada Express v4, error yang terjadi di dalam fungsi `async (req, res) => { ... }` tidak otomatis ditangkap oleh Express dan memicu *UnhandledPromiseRejection* kecuali dibungkus dengan wrapper `Promise.resolve(fn(req, res, next)).catch(next)` atau pustaka `express-async-errors`. Namun pada **Express v5**, Express sudah mendukung penanganan Promise asinkron secara *native* — setiap penolakan asinkron langsung dialirkan otomatis ke Centralized Error Handler tanpa butuh kode pembungkus tambahan!\n\n" +
            "## Pola Reusable Middleware Validasi Zod\n\n" +
            "Alih-alih memanggil `UserSchema.parse(req.body)` manual di dalam tiap controller, standar industri menggunakan fungsi pembantu *middleware factory*:\n\n" +
            "```typescript\n" +
            "export const validate = (schema: z.ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {\n" +
            "  try {\n" +
            "    req.body = await schema.parseAsync(req.body);\n" +
            "    next();\n" +
            "  } catch (error) {\n" +
            "    next(error); // Error Zod mengalir ke error handler terpusat\n" +
            "  }\n" +
            "};\n" +
            "```\n\n" +
            "## Kesalahan Umum & Jebakan (Pitfalls)\n\n" +
            "- **Middleware Error Kurang Parameter:** Menuliskan `(err, req, res)` dengan 3 parameter akan membuat Express memperlakukannya sebagai middleware biasa, sehingga error tidak tertangkap.\n" +
            "- **Membocorkan Stacktrace di Produksi:** Mengirimkan `err.stack` ke respon JSON di server produksi membeberkan struktur folder internal yang bisa dieksploitasi peretas.\n" +
            "- **Unhandled Promise Rejection:** Tidak menangkap exception dari fungsi `async` di Express v4 yang dapat membuat proses Node.js crash mendadak.\n" +
            "- **Menggunakan `console.log` Polos di Produksi:** Log teks biasa sulit disaring dan memperlambat kinerja *event loop* I/O Node.js.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Penerapan validasi Zod dan sistem penanganan error terpusat yang aman merupakan tolok ukur utama kualitas senioritas kode backend. Sistem ini memastikan aplikasi produksi tetap stabil (*zero-crash*), aman dari kebocoran informasi internal, dan mudah dipantau melalui platform APM.",
        },
        {
          kind: "step",
          id: "node-6-1",
          title: "Validasi Input Express dengan Zod",
          explanation:
            "Zod adalah pustaka validasi skema TypeScript-first yang digunakan untuk memverifikasi dan menyaring data masukan pengguna `req.body` sebelum diproses oleh logika bisnis backend. Metode `schema.parse(req.body)` memverifikasi tipe data secara runtime dan otomatis melempar `ZodError` jika format masukan tidak sesuai. Menggunakan validasi skema mencegah timbulnya bug tak terduga akibat data yang hilang atau bertipe salah. Selain itu, Zod secara otomatis menghasilkan tipe TypeScript yang *type-safe* untuk digunakan di handler rute. Jebakan umum pemula adalah mempercayai masukan klien secara mentah tanpa validasi skema.",
          example: {
            code: "import { z } from 'zod';\nconst schema = z.object({ age: z.number() });\nconsole.log(schema.parse({ age: 20 }));",
            output: "{ age: 20 }",
            note: "Gunakan safeParse jika tidak ingin melempar exception otomatis.",
          },
          instruction:
            "Jalankan validasi penguraian objek input `req.body` menggunakan skema `UserSchema.parse()` dan simpan hasilnya di konstanta `data`.",
          starterCode: "// Tulis Zod parse di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "UserSchema\\.parse\\(",
                        "message": "Validasi Zod dijalankan dengan `.parse(...)` pada skemanya. Ia melempar error kalau data tidak sesuai — pasangkan dengan error handler global. (`.safeParse()` dipakai kalau kamu ingin hasil berupa objek sukses/gagal tanpa exception.)"
                      },
                      {
                        "pattern": "req\\.body",
                        "message": "Yang divalidasi adalah isi permintaan dari `req.body`. Ingat memasang `express.json()` lebih dulu, kalau tidak `req.body` bernilai undefined."
                      },
                      {
                        "pattern": "const\\s+data\\s*=",
                        "message": "Simpan hasilnya, karena keluaran `parse` adalah data yang sudah bertipe dan bersih — itu yang dipakai selanjutnya, bukan `req.body` mentah."
                      }
                    ],
          solution: "const data = UserSchema.parse(req.body);",
          susunKode: {
            question:
              "Rangkai validasi dan ekstraksi data aman dari req.body menggunakan skema Zod UserSchema.parse.",
            potongan: [
              "const data =",
              "UserSchema.parse(",
              "req.body",
              ");",
            ],
            pengecoh: [
              "UserSchema.validate(",
              "req.payload",
            ],
            pemisah: " ",
            explanation:
              "Zod menguraikan dan memvalidasi objek dengan metode UserSchema.parse(data) yang akan melempar ZodError jika data tidak sesuai. Keping .validate keliru nama metode (validate adalah metode pustaka Joi). Keping req.payload keliru lokasi data body Express.",
          },
        },
        {
          kind: "step",
          id: "node-6-2",
          title: "Error Handler Terpusat Express (4 Arguments)",
          explanation:
            "Middleware penangan kesalahan terpusat di Express dikenali secara khusus melalui aritas **4 parameter**: `(err, req, res, next)`. Tempatkan middleware ini di urutan paling bawah setelah seluruh rute aplikasi terdaftar agar dapat menangkap seluruh exception yang dilempar dari rute di atasnya. Dengan handler terpusat, kamu tidak perlu mengulang-ulang kode penanganan error di setiap rute controller. Handler ini bertugas memformat pesan kesalahan menjadi JSON seragam dan menentukan status code HTTP yang sesuai. Jebakan fatal adalah menuliskan kurang dari 4 parameter yang membuat Express memperlakukannya sebagai middleware biasa.",
          example: {
            code: "app.use((err, req, res, next) => {\n  console.error('[Error log]:', err.message);\n  res.status(err.statusCode || 500).json({\n    error: err.message || 'Terjadi kesalahan pada server',\n  });\n});",
            output: "HTTP 500 Internal Server Error: { \"error\": \"Database connection timeout\" }",
            note: "Urutan 4 parameter (err, req, res, next) wajib ditulis lengkap agar Express mengenalinya sebagai error handler. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Daftarkan fungsi penanganan error terpusat pada Express yang memiliki empat parameter lengkap `(err, req, res, next)`.",
          starterCode: "// Tulis middleware error di sini\n",
          language: "text",
          tests: [
            {
              pattern: "app\\.use\\(\\s*\\(\\s*err\\s*,\\s*req\\s*,\\s*res\\s*,\\s*next\\s*\\)\\s*=>",
              message: "Definisikan middleware error dengan 4 parameter (err, req, res, next)",
            },
          ],
          solution: "app.use((err, req, res, next) => {\n  res.status(500).json({ error: 'Server Error' });\n});",
          susunKode: {
            question:
              "Daftarkan penangan error terpusat Express. Perhatikan jumlah parameternya — justru itu yang membedakannya dari middleware biasa.",
            potongan: [
              "app.use((err, req, res, next) => {",
              "  res.status(500).json({ error: 'Server Error' });",
              "});",
            ],
            pengecoh: [
              "app.use((req, res, next) => {",
              "app.use((err, req, res) => {",
            ],
            pemisah: "\n",
            explanation:
              "Express hanya mengenali middleware penangan error jika fungsi callback memiliki tepat 4 argumen (err, req, res, next). Keping 3 argumen (req, res, next) akan dianggap sebagai middleware biasa. Keping tanpa next keliru jumlah argumen handler.",
          },
        },
        {
          kind: "step",
          id: "node-6-3",
          title: "Custom AppError Class",
          explanation:
            "Membuat kelas kesalahan kustom `AppError extends Error` memungkinkan pengembang menyuntikkan properti `statusCode` semantik (seperti 400, 401, 404) langsung pada objek kesalahan. Saat kesalahan terjadi di dalam logika bisnis, kamu cukup memicu `throw new AppError('Pesan Error', 404)` untuk diteruskan ke middleware terpusat. Pola ini membedakan secara tegas antara kesalahan operasional yang aman ditunjukkan ke pengguna dan kesalahan sistem internal. Menggunakan kelas kesalahan kustom membuat penanganan status code HTTP menjadi sangat terstruktur. Jebakan umum adalah melempar string biasa alih-alih instansi objek kelas `Error`.",
          example: {
            code: "class AppError extends Error { constructor(m, s) { super(m); this.statusCode = s; } }\nconst err = new AppError('Denied', 401);\nconsole.log(err.statusCode);",
            output: "401",
            note: "Mempermudah pembacaan status code di middleware error terpusat.",
          },
          instruction:
            "Picu (throw) instansi error kustom `AppError` baru dengan pesan `'Unauthorized'` dan status code `401`.",
          starterCode: "// Tulis throw AppError di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "throw\\s+new\\s+AppError\\(",
                        "message": "Error yang disengaja dilempar sebagai instance class error kustom, supaya error handler bisa membedakannya dari bug tak terduga."
                      },
                      {
                        "pattern": "['\"]Unauthorized['\"]\\s*,\\s*401",
                        "message": "Argumennya pesan untuk klien, lalu status code-nya. Dengan pola ini status HTTP ikut melekat pada error, jadi handler tidak perlu menebak."
                      }
                    ],
          solution: "throw new AppError('Unauthorized', 401);",
          susunKode: {
            question:
              "Rangkai instruksi pelemparan error kustom AppError dengan pesan 'Unauthorized' dan status code 401.",
            potongan: [
              "throw new AppError(",
              "'Unauthorized',",
              "401",
              ");",
            ],
            pengecoh: [
              "return AppError(",
              "'Unauthorized', 400",
            ],
            pemisah: " ",
            explanation:
              "Penghentian eksekusi akibat error dilakukan dengan kata kunci throw new namaKelas(...). Keping return AppError keliru karena tanpa kata kunci throw error tidak akan ditangkap oleh middleware error handler. Keping status 400 keliru status code otentikasi.",
          },
        },
        {
          kind: "step",
          id: "node-6-4",
          title: "Async Error Handler Wrapper",
          explanation:
            "Fungsi penangan rute asinkron (`async/await`) di Express v4 tidak secara otomatis meneruskan penolakan Promise rejections ke middleware kesalahan. Pembungkus `asyncHandler` atau `Promise.resolve(fn(...)).catch(next)` digunakan untuk menangkap penolakan async dan secara otomatis meneruskannya ke fungsi `next(err)`. Tanpa pembungkus ini, penolakan promise yang tidak ditangani akan membuat proses Node.js gantung atau mengalami crash *UnhandledPromiseRejection*. Menggunakan pola wrapper ini menjaga aplikasi backend tetap stabil dari kesalahan tak terduga. Jebakan utama adalah lupa memanggil `.catch(next)` pada rute async di Express v4.",
          example: {
            code: "const fn = async () => 'OK';\nPromise.resolve(fn({}, {}, () => {})).then(console.log);",
            output: "OK",
            note: "Express 5 secara native sudah menangani async error rejection.",
          },
          instruction:
            "Bungkus eksekusi fungsi handler `fn(req, res, next)` dengan `Promise.resolve()` dan tangkap penolakannya (`.catch(next)`).",
          starterCode: "// Tulis asyncHandler catch di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Promise\\.resolve\\(\\s*fn\\(\\s*req\\s*,\\s*res\\s*,\\s*next\\s*\\)\\s*\\)\\.catch\\(\\s*next\\s*\\)\\s*;?",
              message: "Gunakan pola Promise.resolve(...).catch(next)",
            },
          ],
          solution: "Promise.resolve(fn(req, res, next)).catch(next);",
          susunKode: {
            question:
              "Bungkus pemanggilan handler async supaya penolakannya diteruskan ke penangan error Express, tanpa menulis try/catch di setiap rute.",
            potongan: [
              "Promise.resolve(",
              "fn(req, res, next)",
              ").catch(next);",
            ],
            pengecoh: [
              "Promise.reject(",
              ").then(next);",
            ],
            pemisah: "",
            explanation:
              "Async error wrapper membungkus return handler async dengan Promise.resolve(...) dan mengoper penanganan penolakan ke .catch(next). Keping Promise.reject keliru karena akan memicu reject buatan. Keping .then(next) keliru handler error.",
          },
        },
        {
          kind: "step",
          id: "node-6-5",
          title: "Logging Terstruktur dengan Pino",
          explanation:
            "Di lingkungan produksi, menggunakan `console.log` polos sangat tidak direkomendasikan karena kodenya lambat dan menghasilkan teks tidak terstruktur yang sulit diurai. Pustaka pencetak log terstruktur seperti `pino` mencatat kejadian dalam format JSON berkecepatan tinggi yang mudah di-parse oleh sistem pemantau server (seperti Datadog atau Elasticsearch). Panggilan `logger.info('Pesan')` atau `logger.error(err)` menyertakan informasi timestamp dan konteks eksekusi secara otomatis. Menggunakan pencetak log terstruktur sangat membantu tim dalam melakukan analisis bug di lingkungan produksi. Jebakan umum adalah mencetak informasi kredensial rahasia ke dalam log produksi.",
          example: {
            code: "logger.info({ port: 3000, env: 'production' }, 'Server Express berhasil dijalankan');",
            output: "{\"level\":30,\"time\":1710000000000,\"port\":3000,\"env\":\"production\",\"msg\":\"Server Express berhasil dijalankan\"}",
            note: "Log JSON Pino diproses secara otomatis oleh sistem pemantau log (Datadog/Elasticsearch). Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Tuliskan pencatatan log tingkat informasi menggunakan `logger.info` dengan pesan `'Server started'`.",
          starterCode: "// Tulis logger.info di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "logger\\.info\\(",
                        "message": "Logging terstruktur memakai instance logger (Pino), bukan `console.log`. Alasannya praktis: keluarannya JSON yang bisa dicari dan difilter di layanan log."
                      },
                      {
                        "pattern": "['\"]Server started['\"]",
                        "message": "Berikan pesannya sebagai argumen. Untuk konteks tambahan, Pino menerima objek di argumen pertama: `logger.info({ port }, 'Server started')`."
                      }
                    ],
          solution: 'logger.info("Server started");',
          susunKode: {
            question:
              "Rangkai pencatatan log informasi 'Server started' menggunakan logger Pino.",
            potongan: [
              "logger.info(",
              "\"Server started\"",
              ");",
            ],
            pengecoh: [
              "logger.log(",
              "\"Server running\"",
            ],
            pemisah: "",
            explanation:
              "Pustaka logging Pino menggunakan metode spesifik sesuai tingkatan log seperti logger.info(...). Keping logger.log menggoda bagi pengguna console.log, tetapi nama metode log umum di Pino adalah logger.info.",
          },
        },
        {
          kind: "step",
          id: "node-6-6",
          title: "Sanitasi Pesan Error Produksi",
          explanation:
            "Membocorkan informasi rincian kesalahan internal (`err.stack`) ke pengguna di lingkungan produksi adalah celah keamanan yang sangat berbahaya. Informasi rincian kesalahan dapat membeberkan struktur direktori server dan versi pustaka internal yang dapat dimanfaatkan oleh peretas. Dengan mengecek `const isProd = process.env.NODE_ENV === 'production'`, kamu dapat menyembunyikan rincian kesalahan dan mengembalikan pesan generik yang aman bagi pengguna publik. Praktik sanitasi ini wajib diterapkan sebelum aplikasi dirilis ke publik. Jebakan fatal adalah lupa mengatur variabel lingkungan `NODE_ENV=production` saat deploy server.",
          example: {
            code: "const isProd = process.env.NODE_ENV === 'production';\nres.status(err.statusCode || 500).json({\n  message: isProd ? 'Internal Server Error' : err.message,\n  ...(isProd ? {} : { stack: err.stack }),\n});",
            output: "HTTP 500: { \"message\": \"Internal Server Error\" } (stack trace disembunyikan di produksi)",
            note: "Selalu sembunyikan detail internal error dari publik di lingkungan produksi. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat konstanta boolean `isProd` yang memeriksa apakah `process.env.NODE_ENV` persis sama dengan string `'production'`.",
          starterCode: "// Tulis pengecekan isProd di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "process\\.env\\.NODE_ENV",
                        "message": "Lingkungan aktif dibaca dari `process.env.NODE_ENV`."
                      },
                      {
                        "pattern": "===\\s*['\"]production['\"]",
                        "message": "Bandingkan dengan teks `production` memakai `===`. Nilai inilah yang dipakai untuk memutuskan apakah detail error (stack trace) boleh dikirim ke klien — di produksi tidak boleh, karena ia membocorkan struktur folder dan versi library."
                      },
                      {
                        "pattern": "const\\s+isProd\\s*=",
                        "message": "Simpan hasilnya sebagai boolean supaya pemeriksaannya bisa dipakai berulang tanpa mengulang string."
                      }
                    ],
          solution: "const isProd = process.env.NODE_ENV === 'production';",
          susunKode: {
            question:
              "Susun pemeriksaan apakah aplikasi sedang berjalan di lingkungan produksi, lalu simpan hasilnya sebagai boolean yang bisa dipakai berulang.",
            potongan: [
              "const isProd =",
              "process.env.NODE_ENV",
              "=== 'production';",
            ],
            pengecoh: [
              "process.env.ENV",
              "=== 'prod';",
            ],
            pemisah: " ",
            explanation:
              "Konvensi standar Node.js menyimpan status lingkungan pada process.env.NODE_ENV yang bernilai string 'production'. Keping process.env.ENV keliru nama kunci environment. Keping string 'prod' keliru penulisan konvensi resmi.",
          },
        },
        {
          kind: "quiz",
          id: "node-6-kuis",
          title: "Kuis: Validasi & Error Handling",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Berapa jumlah parameter wajib pada fungsi middleware Express agar dikenali secara khusus sebagai Error Handler Terpusat?",
              choices: ["2 (req, res)","3 (req, res, next)","4 (err, req, res, next)","1 (err)"],
              answerIndex: 2,
              explanation: "Express secara internal mendeteksi tipe middleware berdasarkan jumlah parameter fungsinya (fn.length / arity). Fungsi dengan tepat 4 parameter (err, req, res, next) diidentifikasi khusus sebagai Error Handling Middleware. Jika kamu hanya menulis 3 parameter (err, req, res), Express akan salah menganggap parameter pertama sebagai objek request biasa, sehingga error handler terpusat tidak akan pernah dipanggil saat terjadi exception."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Library schema validation TypeScript populer apa yang umum digunakan di Node.js untuk memvalidasi req.body dan melempar type-safe error?",
              choices: ["Zod","Axios","Prisma","Pino"],
              answerIndex: 0,
              explanation: "Zod adalah pustaka deklarasi skema dan validasi data berbasis TypeScript standar industri. Zod memeriksa struktur objek req.body saat runtime (misal validasi email, batas panjang password, format angka) sekaligus menginferensi tipe data TypeScript secara otomatis via z.infer<typeof Schema>. Axios adalah HTTP client, Prisma adalah database ORM, dan Pino adalah pustaka structured logger."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa membocorkan err.stack (stacktrace) lengkap ke respon JSON di lingkungan produksi sangat dilarang?",
              choices: ["Karena stacktrace membeberkan struktur direktori server dan versi pustaka internal yang bisa dimanfaatkan peretas untuk mengeksploitasi celah keamanan","Karena stacktrace otomatis menghapus berkas database","Karena stacktrace tidak bisa dibaca oleh browser","Karena membuat koneksi jaringan terputus"],
              answerIndex: 0,
              explanation: "Stacktrace error membeberkan rincian internal aplikasi yang sangat rahasia: nama direktori server (/home/ubuntu/app/...), nomor baris kode, nama tabel database, hingga versi pustaka yang digunakan. Informasi ini adalah tambang emas bagi peretas untuk mencari CVE (Common Vulnerabilities and Exposures) spesifik versi tersebut. Di lingkungan produksi, selalu sembunyikan stack trace dan kembalikan pesan error generik."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Pada server Node.js + Express modern, library manakah yang paling umum digunakan untuk mencatat (logging) error dan request dalam format JSON terstruktur untuk monitoring server?",
              choices: ["Zod","Pino (atau Winston)","Bcrypt","Mongoose"],
              answerIndex: 1,
              explanation: "Pino (serta Winston) adalah pustaka pencatat log terstruktur berkecepatan tinggi yang menghasilkan output log dalam format JSON baris tunggal (JSON Lines). Format ini dirancang khusus agar mudah diserap dan difilter oleh alat pemantau log server skala besar (seperti Datadog, Elasticsearch, Grafana Loki, atau CloudWatch). Console.log mentah tidak direkomendasikan di produksi karena lambat dan tidak terstruktur."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Dalam penulisan handler Route secara Asynchronous, mengapa penting membungkus promise atau menggunakan penanganan `catch(next)` pada Express (terutama di Express v4)?",
              choices: ["Karena janji kosong tidak disetujui","Agar server bisa dimatikan","Agar reject promise asinkron diteruskan (di-passing) ke error handler terpusat express, menghindari crash aplikasi atau unhandled rejection","Untuk mendapatkan bonus poin TypeScript"],
              answerIndex: 2,
              explanation: "Di Express v4, blok router tidak menangkap promise rejection dari fungsi async secara otomatis. Jika terjadi error di dalam async handler tanpa try/catch atau wrapper catch(next), proses Node.js akan memicu UnhandledPromiseRejection dan koneksi HTTP klien akan menggantung (hanging) selamanya. Meneruskan error ke next(err) menjamin error tertangkap dengan rapi oleh middleware error handler terpusat."
            }
          ],
        },
      ],
    },
    {
      slug: "file-email",
      title: "File Upload & Email",
      description: "Dua kebutuhan yang muncul di hampir setiap proyek nyata.",
      topics: [
        "Upload dengan multer & validasi file",
        "Menyimpan ke disk vs object storage (S3-compatible)",
        "Kirim email (nodemailer) & template",
        "Background job sederhana untuk tugas lambat",
        "Serving file dengan aman",
      ],
      items: [
        {
          kind: "materi",
          id: "node-7-m1",
          title: "Penanganan File Upload & Background Worker",
          body:
            "# Penanganan File Upload & Background Worker\n\nMenangani pengunggahan berkas (*file upload*), distribusi media, dan pengiriman email merupakan kebutuhan fitur yang hampir selalu ditemui pada proyek backend nyata (seperti upload avatar pengguna, impor laporan CSV, kirim invoice pembelian). Namun, jika tidak diarsitekturkan dengan benar, pengunggahan berkas dapat menghabiskan ruang penyimpanan server hingga memicu crash kehabisan memori (*out of memory*), dan pengiriman email dapat memperlambat waktu respon HTTP hingga puluhan detik.\n\n## Strategi Penyimpanan Berkas: Local Disk vs Cloud Object Storage vs Presigned URL\n\nDi lingkungan server cloud modern (seperti Vercel, Render, AWS ECS, atau container Kubernetes), harddisk server bersifat **ephemeral** (sementara) — berkas yang disimpan di folder lokal server akan terhapus otomatis setiap kali aplikasi me-restart, melakukan deploy versi baru, atau mengalami *auto-scaling*.\n\n| Dimensi Komparasi | Local Server Disk (`/public/uploads`) | Cloud Object Storage (AWS S3 / Cloudflare R2) | Direct Client Upload (S3 Presigned URL) |\n|---|---|---|---|\n| **Persistensi Data** | ❌ Ephemeral (Hilang saat deploy/restart) | ✅ Persisten Terpisah dari Server | ✅ Persisten Terpisah dari Server |\n| **Beban Bandwidth Server**| ❌ Sangat Tinggi (Server memproses tiap MB) | ❌ Tinggi (File mengalir lewat Express) | ✅ Nol (Klien upload langsung ke bucket S3) |\n| **Kapasitas Penyimpanan** | ❌ Dibatasi kapasitas disk server | ✅ Tidak terbatas (Pay-as-you-go) | ✅ Tidak terbatas (Pay-as-you-go) |\n| **Integrasi CDN** | ❌ Harus disiapkan manual | ✅ Terhubung CDN Global (Cloudflare/CloudFront) | ✅ Terhubung CDN Global |\n| **Kasus Penggunaan Ideal**| Pengolahan sementara (misal kompresi sharp) | File kecil & butuh enkripsi server | File raksasa (video, arsip zip, album foto) |\n\n## Arsitektur Alur Unggah Berkas & Pemrosesan Latar Belakang\n\nPemisahan tugas antara penerima request HTTP dan pemrosesan latar belakang (*background workers*) menjamin server backend tetap responsif:\n\n```text\n+-----------------------+\n|  Client HTTP Request  | ===> [ Multer Middleware: Validasi Mimetype & File Size ]\n+-----------------------+                          |\n                                                   v\n                          +------------------------------------------------+\n                          | Pilihan Penyimpanan:                           |\n                          | 1. memoryStorage() -> Buffer ke S3/R2 Bucket   |\n                          | 2. diskStorage()   -> File lokal sementara     |\n                          +------------------------------------------------+\n                                                   |\n                                                   v\n                     Express Controller: await emailQueue.add('sendWelcome', data)\n                                                   |\n                                                   v\n                                      HTTP 200 OK Respon Instan!\n                                                   |\n                             +---------------------+---------------------+\n                             | (Enqueue Job ke Redis)                    |\n                             v                                           v\n                 [ Redis In-Memory DB ]                      [ User Tetap Browsing Lancar ]\n                             |\n                             v (Dequeue Job Worker)\n                 [ BullMQ Worker Process ]\n                             |\n                             +===> 1. Nodemailer SMTP: Kirim Email HTML Template\n                             +===> 2. Sharp Image Processing: Buat WebP Thumbnail\n```\n\n## Pengaturan Multer yang Aman di Express\n\nMulter membaca data berformat `multipart/form-data`. Di lingkungan produksi, selalu tentukan batas ukuran (`limits.fileSize`) dan filter tipe berkas (`fileFilter`) untuk mencegah pengguna mengunggah berkas berbahaya (seperti skrip `.sh` atau berkas `.exe`):\n\n```typescript\nimport multer from 'multer';\n\n// Gunakan memoryStorage agar buffer file langsung bisa diunggah ke S3/R2\nconst upload = multer({\n  storage: multer.memoryStorage(),\n  limits: {\n    fileSize: 2 * 1024 * 1024, // Maksimal 2 Megabyte\n  },\n  fileFilter: (req, file, cb) => {\n    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp'];\n    if (allowedMimes.includes(file.mimetype)) {\n      cb(null, true);\n    } else {\n      cb(new Error('Format file tidak didukung: hanya JPEG, PNG, dan WebP'));\n    }\n  },\n});\n```\n\n## Pengiriman Email dengan Nodemailer & Template HTML\n\nPengiriman email transaksional membutuhkan integrasi dengan protokol SMTP. Gunakan layanan sandbox penguji seperti **Mailtrap** pada mode pengembangan agar email palsu tidak nyasar ke pengguna nyata, dan gunakan provider produksi seperti **Resend**, **SendGrid**, atau **AWS SES** saat rilis.\n\n```typescript\nimport nodemailer from 'nodemailer';\n\nconst transporter = nodemailer.createTransport({\n  host: process.env.SMTP_HOST,\n  port: Number(process.env.SMTP_PORT),\n  auth: {\n    user: process.env.SMTP_USER,\n    pass: process.env.SMTP_PASS,\n  },\n});\n\n// Template HTML dinamis yang bersih dan responsif\nconst sendVerificationEmail = async (toEmail: string, activationUrl: string) => {\n  return transporter.sendMail({\n    from: '\"Tim BiLearn\" <noreply@bilearn.id>',\n    to: toEmail,\n    subject: 'Verifikasi Akun BiLearn Kamu',\n    html: `\n      <div style=\"font-family: sans-serif; max-width: 600px; margin: auto;\">\n        <h2>Selamat Datang di BiLearn!</h2>\n        <p>Silakan klik tautan di bawah ini untuk mengaktifkan akunmu:</p>\n        <a href=\"${activationUrl}\" style=\"background: #2563eb; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;\">Aktivasi Akun</a>\n      </div>\n    `,\n  });\n};\n```\n\n## Background Job dengan BullMQ & Redis\n\nMengirimkan email lewat SMTP membutuhkan waktu antara 2 sampai 5 detik karena melibatkan *handshake* jaringan eksternal. Jika kamu memanggil `await sendVerificationEmail()` langsung di handler Express `app.post('/register')`, pengguna akan melihat animasi loading berputar selama beberapa detik. Jika SMTP sedang gangguan, proses registrasi pengguna akan gagal total.\n\nDengan BullMQ dan Redis:\n1. **Tambahkan Job:** Handler rute hanya memasukkan pekerjaan ke Redis dalam 2 milidetik (`await emailQueue.add('sendEmail', payload)`), lalu langsung membalas `res.status(201).json({ message: 'Registrasi berhasil' })`.\n2. **Eksekusi Worker:** Proses *Worker* terpisah mengambil antrean dari Redis dan mengeksekusi pengiriman email di latar belakang.\n3. **Fitur Retry Otomatis:** Jika SMTP down sementara, BullMQ secara otomatis mencoba kembali (*retry*) dengan jeda waktu tertentu (*exponential backoff*).\n\n```typescript\n// Definisi Worker BullMQ\nimport { Worker } from 'bullmq';\n\nconst emailWorker = new Worker('emailQueue', async (job) => {\n  console.log(`Memproses pekerjaan pengiriman email #${job.id}`);\n  await sendVerificationEmail(job.data.email, job.data.url);\n}, {\n  connection: { host: 'localhost', port: 6379 },\n  concurrency: 5, // Memproses 5 email secara bersamaan\n});\n```\n\n## Menyajikan File Statis Secara Aman (`express.static`)\n\nMenyajikan berkas statis (seperti CSS, favicon, atau aset gambar) dilakukan dengan `express.static('public')`. Pastikan path direktori diikat secara absolut menggunakan `path.join(__dirname, 'public')` untuk mencegah celah keamanan **Path Traversal**:\n\n```typescript\nimport path from 'node:path';\nimport express from 'express';\n\nconst app = express();\n\n// ✅ AMAN: Menyajikan folder terisolasi dengan prefix spesifik\napp.use('/static', express.static(path.join(process.cwd(), 'public'), {\n  maxAge: '1d', // Cache browser selama 1 hari\n  dotfiles: 'ignore', // Abaikan file tersembunyi seperti .env atau .git\n}));\n\n// ❌ SANGAT BERBAHAYA: Jangan pernah menyajikan root direktori '.'!\n// app.use(express.static('.')); // Ini akan mengekspos .env dan kode sumber ke publik!\n```\n\n## Kesalahan Umum & Jebakan (Pitfalls)\n\n- **Menyimpan Berkas Upload di Local Disk Cloud:** Mengunggah berkas foto pengguna ke folder `./uploads` lokal di server Render/Heroku/Vercel. Berkas tersebut akan hilang tanpa jejak saat server me-restart atau di-deploy ulang.\n- **Pengiriman Email Synchronous di Route:** Menunggu `await transporter.sendMail()` di rute checkout atau pendaftaran yang membuat koneksi HTTP berisiko mengalami *gateway timeout*.\n- **Membuka Root Server dengan `express.static`:** Mengatur direktori statis ke titik `.` yang memungkinkan siapa saja membuka `http://server.com/.env` dan mencuri seluruh kunci database dan secret token.\n- **Mengabaikan Batas Ukuran Berkas Multer:** Membiarkan pengguna mengunggah berkas tanpa batas ukuran (`limits.fileSize`). Satu file video berukuran 2GB yang diunggah ke `memoryStorage` dapat membuat RAM server habis (*Out of Memory*) dan mematikan seluruh aplikasi.\n- **Lupa Atribut `enctype=\"multipart/form-data\"`:** Mengirim berkas dari form HTML/Frontend tanpa header multipart yang membuat `req.file` selalu bernilai `undefined`.\n\n## Kaitan ke Dunia Kerja\n\nPemisahan tugas media ke Cloud Object Storage (S3/Cloudflare R2), penanganan antrean tugas dengan Redis/BullMQ, dan pengiriman email transaksional dengan template engine adalah arsitektur wajib di level industri backend. Pola ini memastikan aplikasi kamu sanggup melayani lonjakan ribuan pengguna serentak tanpa penurunan performa.",
        },
        {
          kind: "step",
          id: "node-7-1",
          title: "File Upload dengan Multer",
          explanation:
            "Multer adalah middleware Express yang digunakan untuk menangani pengunggahan berkas berformat data `multipart/form-data`. Metode `upload.single('avatar')` mengekstrak satu berkas dari bidang form bernama `'avatar'` dan menyimpannya ke objek `req.file`. Menggunakan Multer memudahkan backend menerima foto profil, dokumen PDF, atau lampiran dari antarmuka pengguna. Selalu sertakan batasan ukuran berkas dan filter tipe MIME untuk menjaga keamanan server. Jebakan utama pemula adalah lupa menambahkan atribut `enctype=\"multipart/form-data\"` pada form pengirim di sisi frontend.",
          example: {
            code: "app.post('/api/profile/avatar', upload.single('avatar'), (req, res) => {\n  res.json({ filename: req.file?.filename, size: req.file?.size });\n});",
            output: "HTTP 200 OK: { \"filename\": \"171000-avatar.png\", \"size\": 245120 }",
            note: "req.file memuat informasi nama file, ukuran byte, dan mimetype. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Panggil middleware `upload.single` untuk memproses unggahan satu file tunggal yang dikirimkan pada field bernama `'avatar'`.",
          starterCode: "// Tulis upload.single di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "upload\\.single\\(",
                        "message": "Untuk satu berkas, middleware Multer yang dipakai `upload.single(...)`. Untuk beberapa berkas ada `upload.array()`."
                      },
                      {
                        "pattern": "['\"]avatar['\"]",
                        "message": "Argumennya nama FIELD di form, bukan nama berkasnya. Nama ini harus sama dengan atribut `name` pada input file — kalau berbeda, Multer tidak menemukan apa pun dan `req.file` bernilai undefined tanpa pesan error."
                      }
                    ],
          solution: "upload.single('avatar')",
          susunKode: {
            question:
              "Rangkai middleware Multer untuk mengunggah berkas tunggal dengan nama field 'avatar'.",
            potongan: [
              "upload",
              ".single(",
              "'avatar'",
              ")",
            ],
            pengecoh: [
              ".file(",
              ".array(",
              "'profile_photo'",
            ],
            pemisah: "",
            explanation:
              "Multer memproses payload multipart/form-data dan menaruh hasilnya di req.file. Keping .file( keliru nama metode — yang ada .single(), .array(), dan .fields(). Keping .array( menggoda karena sama-sama metode Multer yang sah, tetapi ia dipakai untuk BANYAK berkas dan mengisi req.files (jamak), sehingga kode yang membaca req.file akan mendapat undefined. Keping 'profile_photo' keliru karena argumennya adalah nama atribut name pada input form, bukan nama berkas atau nama kolom database — begitu namanya tidak cocok, Multer diam saja tanpa error.",
          },
        },
        {
          kind: "step",
          id: "node-7-2",
          title: "Simpan ke S3 Object Storage (@aws-sdk/client-s3)",
          explanation:
            "Di aplikasi tingkat produksi, berkas terunggah disimpan di Cloud Object Storage (seperti AWS S3 atau Cloudflare R2) alih-alih di harddisk lokal server backend. Penyimpanan cloud bersifat persisten dan terpisah dari server aplikasi, sehingga berkas tetap aman saat server backend me-restart atau melakukan skalabilitas otomatis. Perintah `new PutObjectCommand({ Bucket, Key, Body })` dari AWS SDK v3 mengunggah aliran data berkas langsung ke ember penyimpanan cloud. Menggunakan Object Storage adalah standar industri untuk pengelolaan aset media. Jebakan utama adalah menyimpan kredensial akses S3 secara langsung di dalam kode program.",
          example: {
            code: "const command = new PutObjectCommand({\n  Bucket: process.env.AWS_S3_BUCKET,\n  Key: `avatars/${Date.now()}.png`,\n  Body: req.file.buffer,\n  ContentType: req.file.mimetype,\n});\nawait s3Client.send(command);",
            output: "Berkas berhasil tersimpan di S3 dengan status HTTP 200 dan ETag valid",
            note: "Object storage cloud (S3/R2) menyimpan berkas secara persisten terpisah dari server aplikasi. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh AWS SDK dan runtime Node), jadi tidak ada koneksi fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat perintah instansi `PutObjectCommand` dari AWS SDK v3 dengan melewatkan objek opsi `{ Bucket, Key, Body }`.",
          starterCode: "// Tulis PutObjectCommand di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "new\\s+PutObjectCommand\\(",
                        "message": "AWS SDK v3 memakai pola command: buat objek perintah dengan `new PutObjectCommand({...})` lalu kirim lewat `client.send(...)`."
                      },
                      {
                        "pattern": "Bucket\\s*,\\s*Key\\s*,\\s*Body|Bucket\\s*:",
                        "message": "Isi tiga hal wajibnya: `Bucket` (nama bucket), `Key` (jalur berkas di dalam bucket), dan `Body` (isinya). Perhatikan huruf besar di awal — nama properti AWS memang begitu, dan salah huruf kecil membuat perintahnya ditolak."
                      }
                    ],
          solution: "new PutObjectCommand({ Bucket, Key, Body });",
          susunKode: {
            question:
              "Rangkai instansiasi objek PutObjectCommand dari AWS SDK v3 dengan properti Bucket, Key, dan Body.",
            potongan: [
              "new PutObjectCommand({",
              "Bucket, Key, Body",
              "});",
            ],
            pengecoh: [
              "new UploadS3Command({",
              "BucketName, KeyName",
            ],
            pemisah: " ",
            explanation:
              "Pengunggahan berkas ke Amazon S3 pada AWS SDK v3 menggunakan kelas perintah PutObjectCommand dengan opsi Bucket, Key, dan Body. Keping UploadS3Command keliru nama kelas SDK. Keping BucketName keliru nama kunci properti.",
          },
        },
        {
          kind: "step",
          id: "node-7-3",
          title: "Kirim Email dengan Nodemailer",
          explanation:
            "Nodemailer adalah pustaka populer di lingkungan Node.js yang memfasilitasi pengiriman email terprogram melalui protokol SMTP. Metode `transporter.sendMail({ from, to, subject, html })` mengirimkan pesan email berformat HTML lengkap dengan gaya tampilan ke alamat penerima. Mengintegrasikan Nodemailer sangat berguna untuk fitur pendaftaran akun, verifikasi email, dan konfirmasi transaksi pembayaran. Selalu gunakan pustaka penguji seperti Mailtrap pada mode pengembangan agar email tidak terkirim ke pengguna asli. Jebakan umum adalah menyimpan nama pengguna dan kata sandi SMTP langsung di berkas JavaScript.",
          example: {
            code: "const info = await transporter.sendMail({\n  from: '\"Tim BiLearn\" <noreply@bilearn.id>',\n  to: 'user@example.com',\n  subject: 'Verifikasi Akun BiLearn',\n  html: '<h1>Selamat Datang!</h1><p>Klik tombol aktivasi.</p>',\n});",
            output: "Email terkirim: messageId <b658f8ca-6296-ccf4-8306@bilearn.id>",
            note: "Uji coba pengiriman email secara aman di lingkungan dev menggunakan Mailtrap. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh SMTP dan runtime Node), jadi tidak ada email fisik yang terkirim dari sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Jalankan fungsi pengiriman email asinkron `transporter.sendMail()` dengan melewatkan objek opsi `{ from, to, subject, html }`.",
          starterCode: "// Tulis transporter.sendMail di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "transporter\\.sendMail\\(",
                        "message": "Pengiriman email memakai `transporter.sendMail({...})`, dengan transporter yang sudah dikonfigurasi kredensial SMTP-nya."
                      },
                      {
                        "pattern": "from\\s*,\\s*to|from\\s*:",
                        "message": "Sertakan minimal `from`, `to`, `subject`, dan isi (`html` atau `text`). Tanpa `from` yang cocok dengan domain terverifikasi, email besar kemungkinan masuk folder spam."
                      },
                      {
                        "pattern": "await\\s",
                        "message": "Tunggu dengan `await` supaya kamu bisa menangkap kegagalan pengiriman — pengiriman email adalah operasi jaringan yang sering gagal."
                      }
                    ],
          solution: "await transporter.sendMail({ from, to, subject, html });",
          susunKode: {
            question:
              "Rangkai pengiriman surel asinkronus menggunakan transporter.sendMail dengan parameter from, to, subject, dan html.",
            potongan: [
              "await",
              "transporter.sendMail({",
              "from, to, subject, html",
              "});",
            ],
            pengecoh: [
              "transporter.postMail({",
              "sender, receiver",
            ],
            pemisah: " ",
            explanation:
              "Nodemailer mengoperasikan pengiriman email via metode asinkron transporter.sendMail({ from, to, subject, html }). Keping postMail keliru nama metode. Keping sender/receiver menggoda tetapi nama kunci resminya adalah from/to.",
          },
        },
        {
          kind: "step",
          id: "node-7-4",
          title: "Background Job dengan BullMQ & Redis",
          explanation:
            "Memproses tugas-tugas lambat seperti pengiriman email atau pemrosesan video di dalam rute utama HTTP dapat memperlambat waktu respon server bagi pengguna. Pustaka antrean `BullMQ` berbasis basis data Redis memungkinkan kita memasukkan tugas ke antrean latar belakang menggunakan `await emailQueue.add('sendEmail', data)`. Setelah tugas dimasukkan ke antrean, server Express dapat langsung mengembalikan respon instan 200 OK ke pengguna, sementara proses pekerja latar belakang (*worker*) mengeksekusi tugas tersebut secara terpisah. Arsitektur ini meningkatkan skalabilitas dan kenyamanan pengguna secara signifikan. Jebakan utama adalah menjalankan tugas berat di thread utama HTTP.",
          example: {
            code: "await emailQueue.add('sendWelcomeEmail', {\n  userId: 42,\n  email: 'user@example.com',\n});",
            output: "Job #102 berhasil ditambahkan ke antrean Redis (status: waiting)",
            note: "Worker BullMQ akan mengambil tugas dari Redis dan mengeksekusinya secara terpisah di background. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh Redis dan runtime Node), jadi tidak ada antrean fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Tambahkan pekerjaan baru bernama `'sendEmail'` ke dalam antrean `emailQueue` membawa muatan objek `data` menggunakan kata kunci `await`.",
          starterCode: "// Tulis emailQueue.add di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "emailQueue\\.add\\(",
                        "message": "Pekerjaan latar belakang dimasukkan ke antrean dengan `queue.add(...)`. Ini yang membuat request pengguna tidak menunggu pengiriman email selesai."
                      },
                      {
                        "pattern": "['\"]sendEmail['\"]\\s*,\\s*data",
                        "message": "Argumennya nama job (dipakai worker untuk memilih penangannya) lalu datanya. Data ini diserialisasi ke Redis, jadi isinya harus bisa di-JSON — jangan memasukkan objek Prisma atau fungsi."
                      },
                      {
                        "pattern": "await\\s",
                        "message": "Tambahkan `await` agar kamu tahu job-nya benar-benar tercatat di Redis."
                      }
                    ],
          solution: "await emailQueue.add('sendEmail', data);",
          susunKode: {
            question:
              "Rangkai penambahan tugas pengiriman email 'sendEmail' ke antrean BullMQ emailQueue.add.",
            potongan: [
              "await",
              "emailQueue.add(",
              "'sendEmail', data",
              ");",
            ],
            pengecoh: [
              "emailQueue.push(",
              "'sendEmail' => data",
            ],
            pemisah: " ",
            explanation:
              "Antrean BullMQ menambahkan job asinkron dengan metode await queue.add('namaJob', payloadData). Keping queue.push keliru nama metode antrean BullMQ. Keping panah => keliru secara sintaksis di dalam pemanggilan fungsi.",
          },
        },
        {
          kind: "step",
          id: "node-7-5",
          title: "Serving Static Files dengan Safe Middleware",
          explanation:
            "Menyajikan berkas media publik seperti gambar atau berkas CSS dari direktori lokal dilakukan menggunakan middleware bawaan `express.static('public')`. Dengan mendaftarkannya pada jalur `app.use('/static', express.static('public'))`, peramban dapat mengunduh berkas di dalam folder `public` secara langsung melalui URL. Pastikan kamu selalu membatasi direktori yang disajikan hanya pada folder khusus publik untuk mencegah akses tanpa izin ke berkas kode sumber. Penggunaan jalur terisolasi ini menjaga keamanan aplikasi backend secara menyeluruh. Jebakan fatal adalah membuka folder root server sebagai direktori statis yang dapat membeberkan berkas `.env`.",
          example: {
            code: "app.use('/assets', express.static('public'));",
            output: "File statis di folder public dapat diakses via http://localhost:3000/assets/logo.png",
            note: "Jangan pernah menyajikan folder root server sebagai direktori statis agar berkas rahasia .env tidak bocor ke internet. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Pasang middleware statis Express `express.static('public')` pada awalan jalur URL `\"/static\"` menggunakan `app.use`.",
          starterCode: "// Tulis express.static di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "express\\.static\\(",
                        "message": "Penyajian berkas statis memakai middleware bawaan `express.static(<folder>)`."
                      },
                      {
                        "pattern": "['\"]public['\"]",
                        "message": "Sebutkan folder sumbernya. Arahkan ke folder khusus berkas publik — mengarahkannya ke root proyek berarti membuka `.env` dan seluruh kode sumbermu ke internet."
                      },
                      {
                        "pattern": "app\\.use\\(\\s*['\"]/static['\"]",
                        "message": "Pasang di prefix URL yang diminta lewat `app.use(<prefix>, ...)`, supaya jalur berkas tidak bercampur dengan jalur API."
                      }
                    ],
          solution: "app.use('/static', express.static('public'));",
          susunKode: {
            question:
              "Rangkai penyajian berkas statis dari direktori 'public' ke dalam prefiks URL '/static' di Express.",
            potongan: [
              "app.use('/static',",
              "express.static('public')",
              ");",
            ],
            pengecoh: [
              "app.serve('/static',",
              "express.public('static')",
            ],
            pemisah: " ",
            explanation:
              "Penyajian berkas statis di Express menggunakan built-in middleware express.static('folderLocal') yang dipasang pada path rute app.use('/static', ...). Keping app.serve keliru nama metode. Keping express.public keliru nama helper Express.",
          },
        },
        {
          kind: "quiz",
          id: "node-7-kuis",
          title: "Kuis: File Upload & Email",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Library Node.js populer apa yang biasa digunakan sebagai middleware untuk menangani upload file multipart/form-data di Express?",
              choices: ["multer","nodemailer","bcrypt","cors"],
              answerIndex: 0,
              explanation: "Multer adalah middleware resmi ekosistem Express yang dirancang khusus untuk memproses payload bertipe multipart/form-data (seperti unggahan file atau dokumen). Nodemailer khusus untuk protokol pengiriman email, bcrypt untuk hashing kata sandi, dan cors untuk pembatasan origin web."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa menyimpan berkas terunggah (seperti foto profil) langsung di folder disk lokal server Heroku/Vercel sangat tidak direkomendasikan?",
              choices: ["Karena penyimpanannya bersifat ephemeral (sementara) dan akan terhapus otomatis tiap kali server melakukan restart atau redeploy","Karena berkas di disk lokal tidak bisa dikompresi","Karena Node.js melarang penggunaan disk","Karena disk lokal memerlukan lisensi berbayar"],
              answerIndex: 0,
              explanation: "Server cloud modern (seperti Vercel, Render, Heroku, AWS ECS) menggunakan sistem penyimpanan kontainer yang bersifat ephemeral (sementara). Setiap kali aplikasi melakukan restart, update versi baru, atau auto-scaling ke instance baru, seluruh berkas lokal di folder server akan musnah. Oleh karena itu, aset pengguna wajib dialihkan ke Cloud Object Storage persisten seperti AWS S3 atau Cloudflare R2."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi utama memasukkan pekerjaan pengiriman email ke dalam Background Queue (seperti BullMQ + Redis)?",
              choices: ["Mencegah request HTTP user terhenti (hanging) menunggu pengiriman email SMTP yang lambat selesai","Menjadikan isi email terenkripsi otomatis","Menghilangkan kebutuhan SMTP server","Mengubah format email menjadi PDF"],
              answerIndex: 0,
              explanation: "Proses pengiriman email melalui jaringan SMTP membutuhkan waktu 2 hingga 5 detik. Jika dipanggil langsung di controller Express, pengguna akan tertahan menunggu respon HTTP. Dengan Background Queue (BullMQ + Redis), Express langsung mengembalikan balasan HTTP 200/201 dalam hitungan milidetik, sementara proses background worker terpisah mengirim email di latar belakang lengkap dengan fitur retry otomatis."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Aplikasi Express kamu butuh menyajikan file gambar dari folder bernama 'public' ke pengguna secara langsung. Konfigurasi middleware apa yang tepat untuk melakukannya?",
              choices: ["app.use(express.static('public'))","app.use(multer('public'))","app.set('public')","app.get('public', res.download)"],
              answerIndex: 0,
              explanation: "express.static('public') adalah middleware bawaan Express yang memetakan file di folder disk lokal ke endpoint URL publik secara langsung (misal public/logo.png dapat diakses di http://localhost:3000/logo.png). Pilihan multer salah karena hanya untuk menangani upload multipart, app.set() untuk menyetel variabel konfigurasi aplikasi, dan app.get() membutuhkan implementasi route handler custom."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Untuk menjalankan pengiriman email terprogram di dalam aplikasi Express, paket Node standar apakah yang menjadi solusi andalan (sering dipadukan dengan layanan pengiriman SMTP)?",
              choices: ["Bcrypt","Nodemailer","Zod","Multer"],
              answerIndex: 1,
              explanation: "Nodemailer adalah pustaka standar de facto di ekosistem Node.js untuk mengirim email melalui protokol SMTP maupun layanan API penyedia surat elektronik (seperti Mailtrap, SendGrid, atau AWS SES). Bcrypt digunakan untuk enkripsi hashing kata sandi, Zod untuk validasi skema input, dan Multer untuk penanganan unggah file multipart."
            }
          ],
        },
      ],
    },
    {
      slug: "testing-api",
      title: "Testing API",
      description:
        "Integration test dengan supertest: kontrak API yang terjaga.",
      topics: [
        "Unit vs integration test untuk API",
        "supertest: request & assert response",
        "Test database terpisah & cleanup",
        "Menguji auth flow lengkap",
        "Coverage yang bermakna (bukan angka 100%)",
      ],
      items: [
        {
          kind: "materi",
          id: "node-8-m1",
          title: "Strategi Testing Integration API",
          body:
            "# Strategi Testing Integration API\n\nMenguji aplikasi backend secara manual menggunakan aplikasi seperti Postman atau cURL untuk setiap perubahan kode sangat menyita waktu, membosankan, dan rentan melewatkan bug regresi (*regression bugs*). Di perusahaan teknologi, **Automated Testing** adalah jaring pengaman utama yang memastikan seluruh rute API, middleware autentikasi, validasi schema, dan kueri database bekerja persis sesuai kontrak spesifikasi sebelum kode diizinkan masuk ke server produksi.\n\n## Piramida Pengujian Backend: Unit vs Integration vs E2E\n\n| Dimensi Komparasi | Unit Test | Integration Test (Vitest + Supertest) | End-to-End Test (E2E) |\n|---|---|---|---|\n| **Cakupan Pengujian** | 1 Fungsi / Helper murni terisolasi | Alur penuh: HTTP Req -> Middleware -> Controller -> DB | Seluruh sistem: UI Frontend -> API -> Gateway -> Third Party |\n| **Kecepatan Eksekusi** | Sangat Cepat (< 5ms per tes) | Cepat (50ms - 200ms per tes) | Lambat (beberapa detik per skenario) |\n| **Tingkat Kepercayaan**| Rendah-Sedang (Banyak komponen di-mock) | Sangat Tinggi (Mendekati perilaku produksi nyata) | Maksimal (Menguji sistem utuh pengguna) |\n| **Penggunaan Mocking** | Mock penuh pada database & modul eksternal | Menggunakan database penguji fisik terpisah | Tidak ada mocking (sistem live nyata) |\n| **Rekomendasi di Backend**| Bagus untuk helper perhitungan/bisnis | **Fokus Utama (70-80% dari pengujian backend)** | Cukup untuk alur kritis (Checkout/Auth) |\n\n## Alur Kerja Supertest Tanpa Mendengarkan Port Jaringan Fisik\n\nKeunggulan utama pustaka `supertest` adalah kemampuannya membungkus instansi aplikasi Express (`app`) secara in-memory. Supertest mengirimkan objek permintaan HTTP tiruan langsung ke pipeline Express tanpa perlu mengeksekusi `app.listen(3000)` di port jaringan sistem operasi.\n\n```text\nVitest / Jest Test Runner\n       |\n       v\nSupertest request(app).post('/api/v1/auth/login')\n       |\n       v (Memanggil Alur Pipeline Express Secara In-Memory)\n+-------------------------------------------------------------------------+\n| [ Helmet ] ===> [ CORS ] ===> [ Zod Validator ] ===> [ Controller ]     |\n|                                                            |            |\n|                                                            v            |\n|                                           [ Isolated Test DB (Postgres) ]|\n+-------------------------------------------------------------------------+\n       |\n       v\nAssert Respon: expect(res.status).toBe(200) & expect(res.body.token).toBeDefined()\n```\n\n## Pemisahan Berkas `app.ts` dan `server.ts`\n\nSalah satu prinsip terpenting agar pengujian Express bekerja mulus adalah memisahkan inisialisasi aplikasi dari pemanggilan port:\n- **`src/app.ts`:** Mengonfigurasi middleware, rute, dan error handler, lalu mengekspor `app` tanpa memanggil `app.listen()`. Berkas ini yang di-import oleh Supertest.\n- **`src/server.ts`:** Meng-import `app` dari `app.ts`, lalu memanggil `app.listen(port, callback)`. Berkas ini adalah entry point saat aplikasi dijalankan di server.\n\n```typescript\n// src/app.ts\nimport express from 'express';\nexport const app = express();\napp.use(express.json());\napp.get('/ping', (req, res) => res.send('pong'));\n\n// src/server.ts (Hanya dijalankan saat runtime, bukan saat testing!)\nimport { app } from './app';\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}`));\n```\n\n## Isolasi Database Penguji & Kait `beforeEach`\n\nSetiap skenario pengujian wajib bersifat **Independen (Flaky-Free)**. Hasil pengujian skenario A tidak boleh mempengaruhi hasil skenario B. Menjalankan pengujian pada database yang kotor dapat memicu error duplikasi unik (misal email sudah terdaftar).\n\nPraktik standar industri:\n1. Jalankan pengujian pada database khusus test, misal dengan variabel lingkungan `DATABASE_URL=\"postgresql://user:pass@localhost:5432/mydb_test\"`.\n2. Kosongkan seluruh tabel sebelum tiap skenario pengujian menggunakan kait `beforeEach()`:\n\n```typescript\nimport { beforeEach, describe, it, expect } from 'vitest';\nimport request from 'supertest';\nimport { app } from '../src/app';\nimport { prisma } from '../src/lib/prisma';\n\ndescribe('Auth Integration Test', () => {\n  beforeEach(async () => {\n    // Bersihkan tabel data uji agar tiap tes mulai dari keadaan kosong yang sama\n    await prisma.order.deleteMany();\n    await prisma.user.deleteMany();\n  });\n\n  it('mengembalikan status 201 dan token saat registrasi sukses', async () => {\n    const res = await request(app)\n      .post('/api/v1/auth/register')\n      .send({ email: 'tester@bilearn.id', password: 'password123' });\n\n    expect(res.status).toBe(201);\n    expect(res.body.success).toBe(true);\n    expect(res.body.data.email).toBe('tester@bilearn.id');\n  });\n});\n```\n\n## Menguji Alur Autentikasi Lengkap (Auth Flow Testing)\n\nUntuk menguji rute yang dilindungi (*protected route*), alur pengujian harus merefleksikan perilaku pengguna sesungguhnya:\n1. Buat data pengguna baru di database atau panggil endpoint register.\n2. Lakukan login untuk mendapatkan token JWT.\n3. Kirimkan token tersebut ke endpoint terproteksi via header `.set('Authorization', `Bearer ${token}`)`.\n4. Uji juga skenario negatif: apa yang terjadi jika token tidak dikirim (wajib return `401 Unauthorized`) atau peran pengguna tidak memenuhi syarat (wajib return `403 Forbidden`).\n\n```typescript\nit('menolak akses ke profil jika token tidak disertakan', async () => {\n  const res = await request(app).get('/api/v1/users/profile');\n  expect(res.status).toBe(401);\n});\n```\n\n## Filosofi Code Coverage yang Bermakna (Bukan Angka 100%)\n\nDi banyak tim pemula, manajemen menuntut metrik \"100% Code Coverage\". Arsitek backend berpengalaman sepakat bahwa mengejar 100% secara buta adalah anti-pattern yang berbahaya:\n- Angka 100% bisa dicapai dengan menulis tes dangkal yang hanya memicu baris kode tanpa menguji skenario batas (*edge cases*).\n- Menghabiskan waktu membuat tes untuk tipe data TypeScript atau konfigurasi boilerplate tidak bernilai bisnis.\n- **Fokuslah pada Critical Business Logic & Error Branches:** Pastikan jalur kalkulasi uang, otorisasi peran, validasi input yang salah, dan penanganan database error teruji dengan kokoh (target sehat: 75-85% coverage pada branch bisnis).\n\nJalankan perintah pengujian dengan coverage menggunakan:\n```bash\nnpx vitest run --coverage\n```\n\n## Kesalahan Umum & Jebakan (Pitfalls)\n\n- **Memanggil `app.listen()` di Berkas yang Di-import Supertest:** Menyebabkan error fatal `EADDRINUSE: address already in use` karena runner mencoba membuka port fisik yang sama berulang kali saat menjalankan berkas tes secara paralel.\n- **Menggunakan Database Pengembangan atau Produksi:** Menjalankan `deleteMany()` di database utama secara tidak sengaja dapat menghapus seluruh data asli pelanggan perusahaan! Selalu gunakan URL database test terpisah (`_test`).\n- **Lupa Kata Kunci `await` pada Permintaan Supertest:** Menuliskan `request(app).get('/ping')` tanpa `await` membuat eksekusi tes selesai sebelum respon HTTP kembali, menghasilkan tes palsu yang tampak lulus padahal aslinya gagal (*false positive*).\n- **Tes yang Saling Bergantung (*Tightly Coupled Tests*):** Skenario tes nomor 2 mengasumsikan data yang dibuat oleh tes nomor 1 masih ada. Jika urutan tes diacak oleh runner, tes akan gagal total (*flaky test*).\n- **Hanya Menguji Kasus Positif (*Happy Path*):** Lupa menguji input kosong, password salah, format email tidak valid, dan ID yang tidak ditemukan.\n\n## Kaitan ke Dunia Kerja\n\nPenulisan pengujian otomatis adalah tiket masuk ke tim engineering modern. Dalam alur kerja CI/CD (*Continuous Integration*), setiap Pull Request (PR) di GitHub akan otomatis menjalankan seluruh suite tes (`npm run test:ci`). Jika ada satu tes yang gagal, kode tidak akan pernah diizinkan untuk di-merge ke branch utama atau di-deploy ke server produksi.",
        },
        {
          kind: "step",
          id: "node-8-1",
          title: "Unit vs Integration Test di Backend",
          explanation:
            "Pengujian perangkat lunak backend terbagi menjadi Unit Test dan Integration Test. Unit Test berfokus menguji satu fungsi murni terisolasi, sedangkan Integration Test menggunakan test runner (seperti Vitest atau Jest) dan `supertest` untuk menguji alur penuh endpoint API. Dalam pengujian integrasi otomatis, setiap skenario pengujian didefinisikan di dalam blok `it('deskripsi skenario', async () => {})`. Menulis fungsi pengujian asinkron dengan kata kunci `async` adalah kewajiban mutlak karena panggilan HTTP dan kueri database selalu bersifat asinkron. Jebakan utama pemula adalah lupa menyertakan kata kunci `async` pada blok tes sehingga penolakan Promise tidak tertangkap test runner.",
          example: {
            code: "it('mengembalikan status 404 jika id tidak ditemukan', async () => {\n  const res = await request(app).get('/api/v1/users/999');\n  expect(res.status).toBe(404);\n});",
            output: "✓ mengembalikan status 404 jika id tidak ditemukan (42ms)",
            note: "Integration test menguji skenario positif dan skenario batas/error. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat blok pengujian endpoint menggunakan fungsi `it` dengan judul `'mengembalikan status 200 dan data user'`, yang di dalamnya menjalankan fungsi asinkron (`async () => {}`).",
          starterCode: "// Tulis blok pengujian it di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\bit\\(\\s*['\"]mengembalikan status 200 dan data user['\"]",
              message: "Gunakan fungsi pengujian `it('mengembalikan status 200 dan data user', ...)`.",
            },
            {
              pattern: "async\\s*\\(\\s*\\)\\s*=>\\s*\\{\\s*\\}",
              message: "Gunakan handler fungsi asinkron `async () => {}` karena pengujian API memerlukan await.",
            },
          ],
          solution: "it('mengembalikan status 200 dan data user', async () => {});",
          susunKode: {
            question:
              "Rangkai pendefinisian blok pengujian integrasi asinkron untuk endpoint user.",
            potongan: [
              "it(",
              "'mengembalikan status 200 dan data user', ",
              "async () => {});",
            ],
            pengecoh: [
              "testCase(",
              "'status 200', ",
              "(done) => {});",
            ],
            pemisah: "",
            explanation:
              "Pengujian integrasi endpoint pada Vitest dan Jest dibungkus dalam blok it() dengan callback fungsi async karena pengujian memanggil network request asinkron. Keping testCase( keliru karena API pengujian standar runner bernama it atau test. Keping 'status 200' menggoda namun tidak menjelaskan kontrak perilaku bisnis secara lengkap. Keping (done) => {}); keliru karena pengujian modern berbasis async/await tidak lagi menggunakan callback done manual yang rentan unhandled rejection.",
          },
        },
        {
          kind: "step",
          id: "node-8-2",
          title: "Supertest: Testing Express Route",
          explanation:
            "Pustaka `supertest` memungkinkan kita melakukan pengujian integrasi rute Express dengan membungkus instansi aplikasi `request(app)` tanpa perlu menjalankan server HTTP di port jaringan. Dengan panggilan `await request(app).get('/ping')`, kamu dapat memverifikasi status code HTTP dan isi body respon secara otomatis. Pendekatan pengujian ini sangat cepat dan dapat diintegrasikan dengan test runner seperti Vitest atau Jest. Memastikan setiap rute utama memiliki skenario pengujian mencegah munculnya bug di kemudian hari. Jebakan fatal adalah memanggil `app.listen()` di berkas utama yang di-import oleh Supertest.",
          example: {
            code: "import request from 'supertest';\nimport app from './app';\nconst res = await request(app).get('/ping');\nconsole.log(res.status);",
            output: "200",
            note: "Pastikan file app.js mengekspor app tanpa memanggil app.listen()!",
          },
          instruction:
            "Gunakan `supertest` untuk melakukan permintaan HTTP GET ke endpoint `\"/ping\"` pada aplikasi `app` dan simpan responnya ke variabel `res`.",
          starterCode: "// Tulis request supertest di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "request\\(\\s*app\\s*\\)",
                        "message": "Supertest membungkus aplikasi Express-mu dengan `request(app)` — tanpa perlu menyalakan server di port sungguhan."
                      },
                      {
                        "pattern": "\\.get\\(\\s*['\"]/ping['\"]\\s*\\)",
                        "message": "Rantaikan metode HTTP-nya beserta jalur yang diuji."
                      },
                      {
                        "pattern": "await\\s+request",
                        "message": "Tunggu hasilnya dengan `await`, lalu periksa `res.status` dan `res.body` pada assertion berikutnya."
                      }
                    ],
          solution: 'const res = await request(app).get("/ping");',
          susunKode: {
            question:
              "Rangkai pengujian HTTP GET /ping pada aplikasi Express menggunakan pustaka Supertest (request).",
            potongan: [
              "const res =",
              "await request(app)",
              ".get(\"/ping\");",
            ],
            pengecoh: [
              "request(app).fetch(\"/ping\");",
              "supertest(app).getRoute(\"/ping\");",
            ],
            pemisah: " ",
            explanation:
              "Supertest menguji server Express tanpa perlu menyalakan port HTTP asli dengan pemanggilan await request(app).get('/ping'). Keping .fetch keliru nama metode Supertest. Keping .getRoute keliru nama metode.",
          },
        },
        {
          kind: "step",
          id: "node-8-3",
          title: "Test Database Cleanup (beforeEach / afterEach)",
          explanation:
            "Setiap skenario pengujian otomatis harus bersifat independen dan tidak terpengaruh oleh sisa data dari pengujian sebelumnya. Menggunakan kait pengujian `beforeEach(async () => { await prisma.user.deleteMany(); })` memastikan isi database penguji selalu dalam keadaan bersih sebelum pengujian baru dimulai. Selalu pastikan pengujian berjalan di database khusus penguji (misal `mydb_test`) agar tidak mengganggu data pengembangan atau produksi. Menjaga isolasi data pengujian mencegah terjadinya kegagalan tes yang tidak konsisten (*flaky test*). Jebakan utama adalah lupa mengosongkan tabel penguji yang menyebabkan tes berikutnya gagal akibat bentrokan data duplikat.",
          example: {
            code: "beforeEach(async () => {\n  await prisma.orderItem.deleteMany();\n  await prisma.order.deleteMany();\n});",
            output: "Tabel orderItem dan order berhasil dikosongkan sebelum tiap skenario pengujian",
            note: "Gunakan database PostgreSQL terpisah untuk pengujian (misal mydb_test). Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh database dan runtime Node), jadi tidak ada database fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Di dalam kait pengujian `beforeEach`, hapus seluruh data catatan pengguna dari tabel database menggunakan metode pembersihan massal Prisma Client.",
          starterCode: "// Tulis deleteMany di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "prisma\\.user\\.deleteMany\\(",
                        "message": "Pembersihan tabel sebelum/sesudah tiap test memakai `deleteMany()` tanpa argumen — tanpa `where`, ia menghapus SEMUA baris. Sengaja: test butuh keadaan awal yang selalu sama."
                      },
                      {
                        "pattern": "await\\s",
                        "message": "Tambahkan `await`, kalau tidak test berikutnya bisa mulai sebelum pembersihan selesai dan hasilnya jadi tidak konsisten. Pastikan juga ini dijalankan pada database TEST, bukan database utama."
                      }
                    ],
          solution: "await prisma.user.deleteMany();",
          susunKode: {
            question:
              "Susun pembersihan seluruh baris tabel pengguna di basis data penguji, supaya tiap skenario tes dimulai dari keadaan kosong yang sama.",
            potongan: [
              "await ",
              "prisma.user",
              ".deleteMany(",
              ");",
            ],
            pengecoh: [
              ".truncate(",
              ".removeAll(",
              "prisma.users",
            ],
            pemisah: "",
            explanation:
              "Pembersihan tabel di kait beforeEach memakai metode penghapusan massal Prisma yang dipanggil tanpa klausa where, sehingga seluruh baris ikut terhapus. Keping .truncate( menggoda karena istilah TRUNCATE memang ada di SQL, tetapi Prisma Client tidak menyediakan metode itu. Keping .removeAll( keliru nama metode dan tidak ada di API mana pun. Keping prisma.users adalah jebakan yang sering terjadi sungguhan: nama model di Prisma ditulis TUNGGAL sesuai schema.prisma, dan menambah huruf s membuat properti itu undefined.",
          },
        },
        {
          kind: "step",
          id: "node-8-4",
          title: "Testing Auth Flow & Bearer Token",
          explanation:
            "Menguji rute API yang membutuhkan autentikasi dilakukan dengan menyuntikkan token otorisasi ke header Supertest menggunakan `.set('Authorization', `Bearer ${token}`)`. Skenario pengujian autentikasi yang baik harus mencakup pengujian dengan token yang sah, pengujian dengan token yang kadaluarsa, dan pengujian tanpa token untuk memverifikasi respons `401 Unauthorized`. Menguji alur otorisasi menjamin rute rahasia aman dari akses tanpa izin. Memastikan pengujian mencakup skenario kegagalan meningkatkan keandalan sistem keamanan backend. Jebakan umum adalah mengabaikan pengujian skenario kegagalan autentikasi.",
          example: {
            code: "const res = await request(app)\n  .get('/api/v1/profile')\n  .set('Authorization', `Bearer ${token}`);",
            output: "HTTP 200 OK: { \"id\": 1, \"email\": \"user@example.com\", \"role\": \"admin\" }",
            note: "Uji juga skenario token tidak ada atau kadaluarsa untuk memastikan return 401. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh Supertest dan runtime Node), jadi tidak ada request fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Suntikkan header otorisasi pada permintaan Supertest: pakai metode pemasang header-nya, dengan nama header standar HTTP untuk otorisasi dan nilai berpola skema Bearer diikuti isi variabel `token`.",
          starterCode: "// Tulis set Authorization di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "\\.set\\(",
                        "message": "Header pada permintaan uji ditambahkan dengan `.set(nama, nilai)`."
                      },
                      {
                        "pattern": "['\"]Authorization['\"]",
                        "message": "Nama header standarnya `Authorization`."
                      },
                      {
                        "pattern": "Bearer\\s+\\$\\{token\\}|Bearer\\s+['\"]?\\s*\\+\\s*token",
                        "message": "Nilainya berpola `Bearer <token>`: kata Bearer, satu spasi, lalu tokennya disisipkan. Lupa spasinya menghasilkan 401 yang paling sering luput terlihat."
                      }
                    ],
          solution: ".set('Authorization', `Bearer ${token}`);",
          susunKode: {
            question:
              "Sisipkan header otorisasi Bearer pada permintaan Supertest.",
            potongan: [
              ".set('Authorization',",
              "`Bearer ${token}`);",
            ],
            pengecoh: [
              ".setHeader('Auth',",
              "`Token ${token}`);",
            ],
            pemisah: " ",
            explanation:
              "Header HTTP pada Supertest dipasang dengan metode .set('Authorization', `Bearer ${token}`). Keping .setHeader keliru nama metode Supertest (setHeader adalah metode ServerResponse Node native). Keping nama header 'Auth' keliru header standar RFC.",
          },
        },
        {
          kind: "step",
          id: "node-8-5",
          title: "Code Coverage yang Bermakna",
          explanation:
            "Metrik cakupan kode (*code coverage*) diukur menggunakan opsi `vitest run --coverage` untuk mengetahui seberapa banyak baris kode backend yang telah dieksekusi oleh tes. Namun, mengejar angka cakupan 100% secara buta bukanlah tujuan utama; pengembang senior memprioritaskan kualitas pengujian pada alur bisnis utama (*happy path*), penanganan kesalahan validasi, dan pembatasan hak akses. Pengujian yang bermakna memberikan rasa percaya diri tinggi saat memperbarui kode tanpa membuang waktu membuat tes redundan. Menjadikan pengujian bagian dari alur pengembangan menjaga kualitas proyek dalam jangka panjang. Jebakan utama adalah menulis pengujian asal-asalan hanya demi menaikkan metrik persentase coverage.",
          example: {
            code: "npx vitest run --coverage --reporter=html",
            output: "Coverage HTML report generated at coverage/index.html",
            note: "Pengujian berkualitas fokus pada skenario nyata pengguna.",
          },
          instruction:
            "Tuliskan perintah CLI npx untuk mengeksekusi tes runner `vitest` lengkap dengan pembuatan laporan cakupan kode (`--coverage`).",
          starterCode: "# Tulis perintah vitest coverage di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "vitest\\s+run",
                        "message": "Untuk sekali jalan (bukan mode pantau), subperintahnya `vitest run` — penting di CI, karena mode pantau tidak pernah berhenti dan pipeline-mu akan menggantung."
                      },
                      {
                        "pattern": "--coverage",
                        "message": "Tambahkan flag laporan cakupan. Ingat cakupan 100% bukan tujuan: yang penting jalur kritis (auth, pembayaran) terlingkupi, bukan angka totalnya."
                      }
                    ],
          solution: "npx vitest run --coverage",
          susunKode: {
            question:
              "Rangkai perintah CLI untuk menjalankan tes Vitest sekaligus menghitung persentase cakupan kode (coverage).",
            potongan: [
              "npx",
              "vitest run",
              "--coverage",
            ],
            pengecoh: [
              "vitest test",
              "--with-coverage",
            ],
            pemisah: " ",
            explanation:
              "Vitest menjalankan suite tes satu kali (ci mode) dan menghitung coverage dengan npx vitest run --coverage. Keping vitest test keliru nama sub-perintah mode run. Keping --with-coverage adalah nama flag fiktif.",
          },
        },
        {
          kind: "quiz",
          id: "node-8-kuis",
          title: "Kuis: Testing API",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Library Node.js populer apakah yang digunakan untuk melakukan simulasi request HTTP (seperti GET, POST) langsung ke instansi Express app tanpa perlu mendengarkan port jaringan fisik?",
              choices: ["supertest","vitest","axios","nodemon"],
              answerIndex: 0,
              explanation: "Pustaka Supertest membungkus aplikasi Express dan mengeksekusi simulasi panggilan HTTP langsung secara in-memory tanpa perlu membuka port jaringan fisik (app.listen). Vitest adalah runner pengujian, axios adalah HTTP client untuk peramban/node, dan nodemon adalah tool hot-reloading."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa pembersihan (cleanup) data di database pengujian wajib dilakukan sebelum/sesudah setiap test case berjalan?",
              choices: ["Agar setiap test case berjalan secara independen tanpa terpengaruh oleh sisa data dari test case sebelumnya","Agar ukuran database menjadi 0 byte","Karena database akan otomatis terkunci jika tidak dibersihkan","Untuk mempercepat jaringan internet"],
              answerIndex: 0,
              explanation: "Kaidah utama automated testing adalah independensi pengujian (test isolation). Jika data pengguna dari tes 1 tertinggal di tabel, tes 2 yang mencoba mendaftarkan email yang sama akan gagal karena pelanggaran unique constraint. Mengosongkan data di beforeEach menjamin hasil tes deterministik dan bebas flaky."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa tujuan utama penulisan Integration Test pada API backend?",
              choices: ["Memverifikasi alur penuh dari HTTP request, middleware, controller, hingga interaksi database secara nyata","Memastikan warna tampilan tombol di frontend sudah sesuai","Mengecek apakah kodingan ditulis dalam bahasa Inggris","Mengganti tugas server deployment"],
              answerIndex: 0,
              explanation: "Integration Test memverifikasi kerja sama antara routing Express, middleware validasi Zod, autentikasi JWT, dan kueri database fisik secara utuh sesuai kontrak API. Berbeda dari Unit Test yang menguji satu fungsi terisolasi, Integration Test membuktikan bahwa seluruh sistem bekerja secara terintegrasi."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Dalam pengujian route terproteksi dengan Supertest, kamu harus mengatur header otorisasi simulasi pada Request HTTP. Bagaimana cara melakukan hal tersebut?",
              choices: ["Dengan mendeklarasikan variabel global token","Melampirkannya melalui URL sebagai string params","Menggunakan chain method `.set('Authorization', 'Bearer <token>')` di supertest","Menonaktifkan otorisasi secara paksa di router"],
              answerIndex: 2,
              explanation: "Metode .set('Authorization', 'Bearer <token>') pada Supertest menyuntikkan header HTTP resmi sebelum request dikirimkan ke pipeline Express. Mengirim via query params melanggar spesifikasi OAuth2/JWT, mendeklarasikan variabel global tidak menyentuh request header, dan menonaktifkan otorisasi merusak keabsahan pengujian rute terproteksi."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Saat mengukur kualitas pengujian dari Code Coverage, apa saran yang ditekankan oleh arsitek perangkat lunak berpengalaman?",
              choices: ["Mendapatkan skor pas 100% adalah kewajiban mutlak","Mencapai angka 10% sudah lebih dari cukup","Lebih difokuskan pada pengujian jalur penting bisnis (Happy Path + Validasi Error) alih-alih hanya mengejar angka metrik acak 100%","Coverage hanya diukur untuk Frontend"],
              answerIndex: 2,
              explanation: "Mengejar 100% coverage secara buta sering melahirkan tes dangkal yang hanya memicu baris kode tanpa menguji skenario batas (edge cases) dan kegagalan. Standar industri menyarankan fokus pada pengujian alur bisnis kritis (Happy Path + Sad Path validasi) dengan target realistis 75-85% yang bermakna."
            }
          ],
        },
      ],
    },
    {
      slug: "keamanan",
      title: "Keamanan Dasar",
      description:
        "OWASP untuk pemula: lubang yang paling sering menghancurkan aplikasi junior.",
      topics: [
        "SQL injection & kenapa ORM/parameterized query menyelamatkan",
        "XSS & sanitasi output",
        "CORS: paham betulan, bukan copy-paste",
        "Rate limiting & brute force protection",
        "helmet & security header",
        "Secrets management: jangan commit .env",
        "Checklist keamanan sebelum deploy",
      ],
      items: [
        {
          kind: "materi",
          id: "node-9-m1",
          title: "Keamanan Backend & Hardening OWASP",
          body:
            "# Keamanan Backend & Hardening OWASP\n\nKeamanan backend bukanlah fitur tambahan yang dipasang belakangan saat aplikasi selesai dibuat, melainkan disiplin arsitektur pencegahan yang wajib diterapkan sejak hari pertama. Menurut **OWASP (Open Web Application Security Project)**, sebagian besar insiden pembobolan data dan peretasan server backend modern disebabkan oleh celah keamanan klasik yang sebenarnya sangat mudah dicegah jika pengembang memahami mekanismenya.\n\n## Ancaman Kerentanan Utama OWASP API Security & Solusinya\n\n| Kerentanan OWASP API | Risiko Ancaman Nyata | Solusi Praktis Node.js / Express |\n|---|---|---|\n| **SQL Injection** | Penyerang menyuntikkan klausa SQL via input untuk membobol seluruh database | Gunakan **ORM Prisma** atau Parameterized Query (Tagged Template) |\n| **BOLA (Broken Object Level Auth)**| User A mengganti URL `/orders/42` menjadi `/orders/43` untuk mengintip order orang lain | Selalu validasi kepemilikan data: `where: { id, userId: req.user.id }` |\n| **XSS (Cross-Site Scripting)** | Penyerang menyuntikkan tag `<script>` berbahaya yang mencuri sesi peramban | Sanitasi entitas HTML (`validator.escape`) & simpan JWT di `httpOnly` cookie |\n| **Brute Force & DDoS** | Bot mencoba jutaan kombinasi password per detik hingga server crash | Terapkan **`express-rate-limit`** dengan Redis store |\n| **Unrestricted CORS** | Situs web phising asing mengambil data pengguna dari backend-mu | Terapkan whitelist domain resmi spesifik pada konfigurasi **`cors()`** |\n| **Secret Leakage** | Kunci database dan JWT secret bocor ke publik di GitHub | Masukkan `.env` ke `.gitignore` & validasi fail-fast saat startup |\n\n## Arsitektur Rantai Middleware Keamanan Express\n\nUrutan pemasangan middleware keamanan di aplikasi Express menentukan efektivitas perlindungan server sebelum request mencapai logika controller:\n\n```text\nClient HTTP Request\n       |\n       v\n+-------------------------------------------------------------------------+\n| Pipeline Perlindungan Express                                           |\n|                                                                         |\n|  [ 1. app.disable('x-powered-by') ] ===> Hilangkan identitas framework  |\n|  [ 2. helmet() ]                    ===> Pasang 15+ HTTP Security Header|\n|  [ 3. cors(corsOptions) ]           ===> Filter domain asal (Origin)    |\n|  [ 4. rateLimiter ]                 ===> Batasi max request per IP      |\n|  [ 5. express.json({ limit: '10kb' })]=> Cegah payload memori raksasa   |\n|  [ 6. validate(zodSchema) ]         ===> Validasi tipe & sanitasi input |\n|                                                                         |\n|                                     next()                              |\n|                                       v                                 |\n|                         [ Business Logic Controller ]                   |\n+-------------------------------------------------------------------------+\n```\n\n## Helmet & HTTP Security Headers yang Wajib Dipahami\n\nPustaka `helmet()` bukan sekadar plugin tambahan; ia menyuntikkan header keamanan HTTP standar peramban:\n- **`Content-Security-Policy (CSP)`:** Membatasi dari sumber mana saja skrip, gaya tampilan, dan gambar boleh dimuat oleh peramban, memblokir eksekusi skrip jahat XSS.\n- **`X-Frame-Options: DENY`:** Mencegah situs web kamu dimuat di dalam tag `<iframe>` oleh situs lain untuk menggagalkan serangan penipuan klik (*Clickjacking*).\n- **`Strict-Transport-Security (HSTS)`:** Memaksa seluruh koneksi klien menggunakan protokol aman HTTPS, bukan HTTP biasa.\n- **`X-Content-Type-Options: nosniff`:** Mencegah peramban menebak tipe MIME berkas selain dari header `Content-Type` resmi.\n\n## Pemahaman CORS Mendalam: Browser vs Postman\n\nBanyak pengembang pemula mengira CORS melindungi server dari serangan hacker langsung. **Ini salah paham besar.** CORS adalah mekanisme keamanan yang ditegakkan oleh **Peramban (Browser)**, bukan server atau Postman:\n- Jika kamu memanggil API dari cURL, Postman, atau skrip Python backend, CORS **tidak berlaku** karena klien tersebut bukan peramban web.\n- CORS dirancang khusus untuk melindungi pengguna saat membuka browser: mencegah skrip di situs jahat `https://evil-site.com` memanggil `https://mybank.com/transfer` menggunakan sesi cookie korban.\n\n```typescript\n// ❌ SANGAT BERBAHAYA di Lingkungan Produksi:\napp.use(cors({ origin: '*' }));\n\n// ✅ AMAN & TERPROTEKSI:\nconst allowedOrigins = ['https://app.bilearn.id', 'https://admin.bilearn.id'];\napp.use(cors({\n  origin: (origin, callback) => {\n    if (!origin || allowedOrigins.includes(origin)) {\n      callback(null, true);\n    } else {\n      callback(new Error('Diblokir oleh kebijakan keamanan CORS'));\n    }\n  },\n  credentials: true, // Izinkan cookie jika domain ada di whitelist\n}));\n```\n\n## Secrets Management & Validasi Fail-Fast Startup\n\nMenyimpan rahasia sistem di kode program (*hardcoded*) adalah dosa terbesar pengembang backend.\n1. Masukkan `.env` ke `.gitignore` **sebelum** commit pertama dibuat.\n2. Buat berkas `.env.example` sebagai dokumentasi variabel apa saja yang wajib diisi oleh rekan tim.\n3. Terapkan pola **Fail-Fast Startup**: jika ada variabel kritis (seperti `DATABASE_URL` atau `JWT_SECRET`) yang belum disetel, aplikasi harus langsung menolak menyala saat booting daripada berjalan dalam keadaan rentan!\n\n```typescript\n// src/config/env.ts\nimport { z } from 'zod';\n\nconst envSchema = z.object({\n  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),\n  PORT: z.string().default('3000'),\n  DATABASE_URL: z.string().url('DATABASE_URL wajib berupa URL database valid'),\n  JWT_SECRET: z.string().min(32, 'JWT_SECRET minimal 32 karakter demi keamanan'),\n});\n\nexport const env = envSchema.parse(process.env);\n```\n\n## Graceful Shutdown & Health Check untuk Docker / Kubernetes\n\nDi lingkungan container produksi, server dapat dimatikan kapan saja saat proses deployment rilis baru. Jika server dimatikan mendadak saat sedang memproses transaksi kartu kredit pelanggan, data transaksi akan rusak. Tangani sinyal sistem operasi `SIGTERM` dan `SIGINT` untuk menyelesaikan request yang sedang berjalan:\n\n```typescript\nconst server = app.listen(PORT, () => console.log(`Server online di port ${PORT}`));\n\nconst gracefulShutdown = async (signal: string) => {\n  console.log(`Menerima sinyal ${signal}. Menutup server secara aman...`);\n  server.close(async () => {\n    console.log('Koneksi HTTP ditutup.');\n    await prisma.$disconnect();\n    console.log('Koneksi database Prisma ditutup.');\n    process.exit(0);\n  });\n};\n\nprocess.on('SIGTERM', () => gracefulShutdown('SIGTERM'));\nprocess.on('SIGINT', () => gracefulShutdown('SIGINT'));\n\n// Endpoint health check untuk Kubernetes Liveness & Readiness Probe\napp.get('/healthz', (req, res) => res.status(200).send('OK'));\n```\n\n## Checklist Keamanan Sebelum Deploy Backend ke Produksi\n\n1. ✅ **`NODE_ENV=production`:** Mematikan stack trace error agar rincian folder internal tidak bocor ke klien.\n2. ✅ **Matikan Fingerprint Server:** Panggil `app.disable('x-powered-by')` agar peretas tidak tahu framework yang digunakan.\n3. ✅ **Aktifkan Helmet & CORS Whitelist.**\n4. ✅ **Rate Limiting:** Pasang pembatas jumlah request pada endpoint autentikasi (`/login`, `/register`, `/forgot-password`).\n5. ✅ **Batasi Ukuran Payload Body:** Gunakan `express.json({ limit: '10kb' })` untuk mencegah serangan Denial of Service berbasis pengiriman JSON raksasa.\n6. ✅ **Bcrypt Password:** Pastikan salt rounds minimal 10 (atau argon2id).\n7. ✅ **Simpan JWT di HttpOnly Cookie** atau gunakan Refresh Token Rotation berumur pendek.\n8. ✅ **Validasi Fail-Fast Variabel Lingkungan & Sediakan Rute `/healthz`.**\n\n## Kesalahan Umum & Jebakan (Pitfalls)\n\n- **Sanitasi XSS Menggunakan Regex Manual:** Menuliskan `input.replace(/<script>/gi, '')` adalah jebakan klasik yang sangat mudah diakali peretas dengan tag bersarang `<scr<script>ipt>` atau atribut event peramban `<img src=x onerror=alert(1)>`. Selalu gunakan library encoding teruji seperti `validator.escape`.\n- **Interpolasi String SQL Mentah:** Menuliskan kueri `prisma.$queryRawUnsafe(\"SELECT * FROM users WHERE email = '\" + email + \"'\")` yang langsung membuka pintu kebocoran database via SQL Injection. Selalu gunakan tagged template parameterized query `prisma.$queryRaw`.\n- **CORS `origin: '*'` dengan Opsi `credentials: true`:** Peramban modern akan menolak mengirimkan cookie jika origin diatur wildcard `*` dan `credentials: true`.\n- **Membiarkan Endpoint Sensitif Tanpa Rate Limit:** Membiarkan rute login terbuka tanpa pembatas request memungkinkan peretas meluncurkan serangan brute force ribuan kali per detik.\n- **Menyimpan Kredensial Produksi di Git:** Terlanjur menekan `git commit` berkas `.env` ke repositori GitHub. Menghapus commit tersebut tidak cukup; kredensial yang pernah terunggah harus segera diganti (*revoked*) di dashboard cloud provider.\n\n## Kaitan ke Dunia Kerja\n\nKeahlian melakukan pengerasan keamanan (*security hardening*) dan mematuhi standar OWASP merupakan pembeda utama antara pengembang junior dan senior. Keterampilan ini menjamin backend perusahaan kebal dari kebocoran data, memenuhi standar regulasi kepatuhan privasi (GDPR / UU PDP), dan lulus dalam proses audit keamanan eksternal (*penetration testing*).",
        },
        {
          kind: "step",
          id: "node-9-1",
          title: "Mencegah SQL Injection",
          explanation:
            "SQL Injection adalah ancaman keamanan di mana penyerang menyuntikkan perintah SQL jahat melalui kolom input pengguna akibat penggabungan string query mentah secara langsung. Saat kamu harus menjalankan kueri SQL mentah di Prisma, jangan pernah menggabungkan string biasa! Gunakan tagged template literal `prisma.$queryRaw` bawaan Prisma. Prisma secara otomatis memisahkan variabel di dalam `${...}` menjadi parameter terikat (*parameterized query*) di tingkat database engine sehingga aman dari manipulasi sintaks SQL penyerang. Mengamankan kueri database merupakan langkah wajib pertama dalam pengamanan backend. Jebakan utama pemula adalah memakai penggabungan string (`+`) atau metode tidak aman saat menyusun perintah database.",
          example: {
            code: "const result = await prisma.$queryRaw`SELECT * FROM \"Product\" WHERE price <= ${maxPrice}`;",
            output: "Kueri SQL dieksekusi dengan parameter terikat aman",
            note: "Tagged template literal prisma.$queryRaw otomatis melakukan parameterisasi kueri SQL. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Eksekusi kueri mentah yang aman dari SQL Injection menggunakan tagged template literal Prisma `prisma.$queryRaw` untuk mencari pengguna dengan perintah `SELECT * FROM \"User\" WHERE email = ${email}`. Gunakan kata kunci `await`.",
          starterCode: "// Tulis prisma.$queryRaw di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "await\\s+prisma\\.\\$queryRaw`",
              message: "Gunakan `await prisma.$queryRaw` dengan tagged template literal (menggunakan backtick).",
            },
            {
              pattern: "SELECT \\* FROM [\"']User[\"'] WHERE email = \\$\\{email\\}",
              message: "Tuliskan klausa SQL parameterized: `SELECT * FROM \"User\" WHERE email = ${email}`.",
            },
          ],
          solution: 'await prisma.$queryRaw`SELECT * FROM "User" WHERE email = ${email}`;',
          susunKode: {
            question:
              "Rangkai pemanggilan kueri SQL mentah yang aman dari SQL Injection menggunakan Prisma queryRaw.",
            potongan: [
              "await prisma.$queryRaw",
              '`SELECT * FROM "User" WHERE email = ',
              "${email}`;",
            ],
            pengecoh: [
              "await prisma.$queryRawUnsafe",
              '`SELECT * FROM "User" WHERE email = \'" + email',
              "prisma.$executeRaw",
            ],
            pemisah: "",
            explanation:
              "Metode $queryRaw pada Prisma secara otomatis memisahkan variabel template literal menjadi parameter terikat ($1, $2) di level database driver sehingga aman dari SQL Injection. Keping $queryRawUnsafe sangat menggoda namun berbahaya karena metode tersebut tidak melakukan parameterisasi otomatis dan rentan disusupi kode berbahaya. Keping penggabungan string (' + email) adalah jebakan klasik yang menjadi akar kerentanan SQL Injection selama beberapa dekade. Keping $executeRaw keliru karena dipakai untuk mutasi DDL/DML, bukan mengambil baris data SELECT.",
          },
        },
        {
          kind: "step",
          id: "node-9-2",
          title: "Mencegah XSS (Cross-Site Scripting)",
          explanation:
            "Cross-Site Scripting (XSS) terjadi saat penyerang berhasil menyuntikkan skrip HTML/JavaScript berbahaya ke dalam masukan aplikasi yang kemudian dieksekusi oleh peramban pengguna lain. Menggunakan ekspresi reguler (regex) untuk membersihkan tag `<script>` adalah anti-pattern berbahaya yang sering gagal karena penyerang dapat menyusupkan skrip via atribut onerror pada gambar atau tag SVG. Standar industri yang aman adalah mengonversi karakter berbahaya menjadi entitas HTML (*HTML entity encoding*) menggunakan fungsi teruji seperti `validator.escape(input)`. Karakter `<` diubah menjadi `&lt;` dan `>` menjadi `&gt;` sehingga peramban hanya menampilkannya sebagai teks biasa. Jebakan fatal pemula adalah percaya pada regex buatan sendiri untuk membersihkan XSS.",
          example: {
            code: "import validator from 'validator';\nconst safe = validator.escape('<img src=x onerror=alert(1)>');\nconsole.log(safe);",
            output: "&lt;img src=x onerror=alert(1)&gt;",
            note: "HTML entity escaping mengubah karakter tag HTML menjadi entitas teks aman. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Gunakan fungsi `validator.escape(inputString)` untuk mengubah karakter berisiko XSS (seperti `<`, `>`, dan `&`) menjadi entitas HTML yang aman, lalu simpan hasilnya dalam konstanta `cleanInput`.",
          starterCode: "// Tulis sanitasi validator.escape di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "const\\s+cleanInput\\s*=",
              message: "Deklarasikan konstanta `const cleanInput = ...`.",
            },
            {
              pattern: "validator\\.escape\\(\\s*inputString\\s*\\)",
              message: "Panggil fungsi sanitasi entitas HTML: `validator.escape(inputString)`.",
            },
          ],
          solution: "const cleanInput = validator.escape(inputString);",
          susunKode: {
            question:
              "Rangkai pemanggilan fungsi sanitasi entitas HTML menggunakan pustaka validator.",
            potongan: [
              "const cleanInput = ",
              "validator.escape(",
              "inputString);",
            ],
            pengecoh: [
              "validator.unescape(",
              "validator.strip(",
              "inputString.replace(",
            ],
            pemisah: "",
            explanation:
              "Pustaka validator.escape() mengubah karakter berbahaya seperti <, >, &, dan kutip menjadi entitas HTML (&lt;, &gt;) sehingga browser klien tidak akan mengeksekusinya sebagai skrip berbahaya. Keping validator.unescape() keliru fatal karena justru mengembalikan karakter entitas menjadi karakter mentah. Keping validator.strip() keliru karena fungsi tersebut tidak ada di API pustaka validator. Keping inputString.replace( menggoda bagi pemula, namun mencoba membersihkan XSS dengan regex manual adalah anti-pattern berbahaya yang mudah ditembus oleh payload variasi seperti <img onerror=...> atau tag bersarang.",
          },
        },
        {
          kind: "step",
          id: "node-9-3",
          title: "Konfigurasi CORS (Cross-Origin Resource Sharing)",
          explanation:
            "CORS adalah mekanisme keamanan berbasis peramban yang mengontrol domain web mana saja yang diizinkan mengambil data dari API backend milikmu. Menggunakan middleware `cors({ origin: 'https://myapp.com' })` membatasi akses API hanya untuk domain antarmuka resmi aplikasi web kamu. Hindari penggunaan asal wildcard `origin: '*'` pada API produksi yang memproses data sensitif atau cookie autentikasi. Mengonfigurasi CORS dengan tepat mencegah aplikasi web asing yang tidak dikenal mengambil data backend-mu secara ilegal. Jebakan umum adalah menyalin konfigurasi `origin: '*'` secara sembarangan di lingkungan produksi.",
          example: {
            code: "app.use(cors({\n  origin: 'https://app.bilearn.id',\n  credentials: true,\n}));",
            output: "Access-Control-Allow-Origin disetel ke https://app.bilearn.id",
            note: "Jangan gunakan origin: '*' pada API produksi terproteksi dengan kredensial atau cookie. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Pasang middleware `cors` pada aplikasi Express dengan membatasi asal domain (`origin`) hanya untuk `'https://myapp.com'`.",
          starterCode: "// Tulis cors di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "cors\\(\\s*\\{",
                        "message": "Middleware CORS dikonfigurasi dengan objek opsi — bukan dipanggil tanpa argumen. `cors()` polos mengizinkan SEMUA domain, dan itu tidak layak untuk produksi."
                      },
                      {
                        "pattern": "origin\\s*:\\s*['\"]https://myapp\\.com['\"]",
                        "message": "Sebutkan domain yang diizinkan lewat opsi `origin`, lengkap dengan skema `https://` dan tanpa garis miring di akhir — kesalahan kecil di sini membuat browser tetap memblokir permintaannya."
                      },
                      {
                        "pattern": "app\\.use\\(",
                        "message": "Pasang sebagai middleware global dengan `app.use(...)`, sebelum definisi route."
                      }
                    ],
          solution: "app.use(cors({ origin: 'https://myapp.com' }));",
          susunKode: {
            question:
              "Rangkai konfigurasi middleware CORS pada Express yang membatasi asal domain domain https://myapp.com.",
            potongan: [
              "app.use(cors({",
              "origin: 'https://myapp.com'",
              "}));",
            ],
            pengecoh: [
              "app.use(corsConfig({",
              "domain: 'https://myapp.com'",
            ],
            pemisah: " ",
            explanation:
              "Middleware cors diisi dengan opsi origin: 'https://myapp.com' untuk mengizinkan hanya domain tertentu mengakses API. Keping corsConfig keliru nama middleware. Keping domain keliru nama kunci properti opsi.",
          },
        },
        {
          kind: "step",
          id: "node-9-4",
          title: "Rate Limiting dengan express-rate-limit",
          explanation:
            "Rate Limiting adalah teknik membatasi jumlah permintaan HTTP yang dapat dilakukan oleh sebuah alamat IP dalam jendela waktu tertentu. Menggunakan `express-rate-limit` pada rute sensitif seperti `app.use('/api/v1/login', limiter)` mencegah serangan *Brute Force* pencobaan kata sandi otomatis oleh bot penyerang. Jika batas jumlah request terlampaui, middleware ini akan otomatis menolak request dengan status HTTP `429 Too Many Requests`. Memasang pembatas jumlah request menjaga ketersediaan layanan backend dari ancaman overload. Jebakan utama adalah membiarkan rute login tanpa pembatas yang membuatnya rentan dibobol serangan brute force.",
          example: {
            code: "app.use('/api/v1/auth/login', authLimiter);",
            output: "Request ke-6 dalam 1 menit diblokir: HTTP 429 Too Many Requests",
            note: "Melindungi endpoint sensitif dari serangan brute force otomatis. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Terapkan middleware `limiter` khusus pada rute login `\"/api/v1/login\"` menggunakan `app.use`.",
          starterCode: "// Tulis app.use limiter di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "app\\.use\\(",
                        "message": "Pasang limiter sebagai middleware dengan `app.use(<jalur>, <limiter>)`."
                      },
                      {
                        "pattern": "['\"]/api/v1/login['\"]",
                        "message": "Terapkan pada jalur yang rawan disalahgunakan (login), bukan ke seluruh aplikasi — pembatasan menyeluruh bisa mengganggu pemakaian normal."
                      },
                      {
                        "pattern": ",\\s*limiter",
                        "message": "Argumen keduanya instance limiter yang sudah dikonfigurasi `windowMs` dan `max`."
                      }
                    ],
          solution: "app.use('/api/v1/login', limiter);",
          susunKode: {
            question:
              "Rangkai pendaftaran limiter pembatas laju akses express-rate-limit khusus pada rute POST login /api/v1/login.",
            potongan: [
              "app.use(",
              "'/api/v1/login',",
              "limiter",
              ");",
            ],
            pengecoh: [
              "'/login/v1',",
              "rateLimiterMiddleware",
            ],
            pemisah: " ",
            explanation:
              "Rate limiter dipasang pada rute sensitif login dengan app.use('/api/v1/login', limiter) untuk memblokir serangan Brute Force. Keping '/login/v1' keliru prefiks rute. Keping rateLimiterMiddleware keliru nama variabel limiter yang dipersyaratkan.",
          },
        },
        {
          kind: "step",
          id: "node-9-5",
          title: "Pengamanan Security Headers dengan Helmet",
          explanation:
            "Pustaka `helmet` membantu mengamankan aplikasi Express dengan menginjeksi lebih dari 15 header keamanan HTTP standar secara otomatis (seperti Content-Security-Policy, X-Frame-Options, dan X-Content-Type-Options). Menyertakan `app.use(helmet())` di bagian atas rantai middleware melindungi aplikasi dari ancaman serangan *clickjacking*, *mime-sniffing*, dan injeksi berkas. Langkah ini merupakan tindakan pengamanan awal wajib pada setiap server backend Express produksi. Memasang header keamanan menyulitkan penyerang dalam mengeksploitasi peramban pengguna. Jebakan umum adalah lupa memasang Helmet sehingga header respons backend sepenuhnya terbuka.",
          example: {
            code: "app.use(helmet({ crossOriginResourcePolicy: { policy: 'same-origin' } }));",
            output: "15+ Security Headers (CSP, X-Frame-Options, HSTS, X-Content-Type-Options) aktif",
            note: "Langkah wajib untuk pengamanan awal aplikasi Express tingkat produksi. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh runtime Node), jadi tidak ada server fisik yang berjalan di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Pasang middleware pengaman header HTTP `helmet()` di aplikasi Express menggunakan `app.use`.",
          starterCode: "// Tulis helmet di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "helmet\\(\\s*\\)",
                        "message": "Helmet dipasang dengan MEMANGGIL fungsinya (`helmet()`), bukan menyebut namanya saja. Ia menyetel belasan header keamanan sekaligus."
                      },
                      {
                        "pattern": "app\\.use\\(",
                        "message": "Pasang paling awal lewat `app.use(...)`, sebelum route mana pun, supaya header-nya ikut pada semua respons — termasuk respons error."
                      }
                    ],
          solution: "app.use(helmet());",
          susunKode: {
            question:
              "Rangkai pengamanan HTTP Security Headers pada aplikasi Express menggunakan middleware Helmet.",
            potongan: [
              "app.use(",
              "helmet()",
              ");",
            ],
            pengecoh: [
              "app.security(",
              "helmetHeaders()",
            ],
            pemisah: "",
            explanation:
              "Pustaka Helmet memasang berbagai header keamanan HTTP secara otomatis lewat middleware app.use(helmet()). Keping app.security keliru nama metode Express. Keping helmetHeaders() keliru nama fungsi pemanggil Helmet.",
          },
        },
        {
          kind: "step",
          id: "node-9-6",
          title: "Manajemen Kunci Rahasia (.gitignore)",
          explanation:
            "Manajemen kredensial rahasia mewajibkan agar berkas konfig `.env` yang menyimpan kata sandi database dan kunci API **SELALU** dicantumkan di dalam `.gitignore`. Selain mengabaikan berkas di git, aplikasi backend modern menerapkan prinsip **Fail-Fast** saat booting server: jika variabel rahasia wajib seperti `JWT_SECRET` tidak didefinisikan di lingkungan runtime, server harus langsung melempar error dan berhenti beroperasi. Ini mencegah server berjalan dalam keadaan cacat keamanan yang dapat dimanfaatkan penyerang. Jebakan paling fatal di dunia nyata adalah membiarkan server menyala tanpa kunci rahasia yang valid.",
          example: {
            code: "if (!process.env.DATABASE_URL) {\n  throw new Error('DATABASE_URL wajib disetel di .env');\n}",
            output: "Error: DATABASE_URL wajib disetel di .env",
            note: "Pola Fail-Fast mencegah server berjalan tanpa konfigurasi rahasia yang lengkap. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Di dalam modul konfigurasi rahasia, periksa keberadaan kunci `JWT_SECRET`. Jika `process.env.JWT_SECRET` bernilai falsy, lemparkan error baru dengan pesan `'JWT_SECRET wajib disetel'` menggunakan kata kunci `throw new Error(...)`.",
          starterCode: "// Tulis pengecekan fail-fast JWT_SECRET di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "if\\s*\\(\\s*!process\\.env\\.JWT_SECRET\\s*\\)",
              message: "Periksa nilai variabel lingkungan: `if (!process.env.JWT_SECRET)`.",
            },
            {
              pattern: "throw\\s+new\\s+Error\\(\\s*['\"]JWT_SECRET wajib disetel['\"]\\s*\\)",
              message: "Lemparkan exception: `throw new Error('JWT_SECRET wajib disetel')`.",
            },
          ],
          solution: "if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET wajib disetel');",
          susunKode: {
            question:
              "Rangkai validasi fail-fast saat server booting untuk memastikan variabel JWT_SECRET tersedia.",
            potongan: [
              "if (!process.env.JWT_SECRET) ",
              "throw new Error(",
              "'JWT_SECRET wajib disetel');",
            ],
            pengecoh: [
              "if (process.env.JWT_SECRET) ",
              "return new Error(",
              "'JWT_SECRET opsional');",
            ],
            pemisah: "",
            explanation:
              "Pola Fail-Fast memastikan server backend langsung berhenti di awal proses booting jika ada kredensial lingkungan wajib yang belum terdefinisi di berkas .env. Keping if (process.env.JWT_SECRET) keliru logika karena justru melempar error saat rahasianya ADA (kondisi terbalik). Keping return new Error( menggoda bagi pemula, namun return tidak menghentikan alur aplikasi melainkan hanya mengembalikan objek Error sebagai nilai — server tetap berjalan dalam keadaan cacat tanpa kunci rahasia. Keping 'JWT_SECRET opsional' keliru pesan penanganan.",
          },
        },
        {
          kind: "step",
          id: "node-9-7",
          title: "Checklist Keamanan Pre-Deploy",
          explanation:
            "Daftar periksa (*checklist*) keamanan pre-deploy adalah serangkaian verifikasi wajib sebelum backend dirilis ke server produksi. Salah satu langkah terpenting adalah mematikan header default `X-Powered-By: Express` menggunakan perintah `app.disable('x-powered-by')`. Header default tersebut membeberkan teknologi server yang kamu gunakan ke publik, memudahkan bot pemindai peretas untuk mencari celah eksploitasi spesifik versi Express. Menyembunyikan identitas framework (*security through obscurity* sebagai lapisan pelengkap) adalah praktik standar di setiap checklist produksi. Jebakan umum pemula adalah membiarkan header informasi server aktif sehingga target serangan mudah dipetakan.",
          example: {
            code: "app.disable('x-powered-by');\nconsole.log('X-Powered-By header disabled');",
            output: "X-Powered-By header disabled",
            note: "Matikan fingerprinting server sebelum aplikasi dirilis ke publik. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Sebelum aplikasi di-deploy ke server produksi, matikan header informasi teknologi server yang membeberkan Express ke publik menggunakan metode `app.disable('x-powered-by')`.",
          starterCode: "// Tulis penonaktifan x-powered-by di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "app\\.disable\\(",
              message: "Gunakan metode Express `app.disable(...)` untuk menonaktifkan fitur internal.",
            },
            {
              pattern: "['\"]x-powered-by['\"]",
              message: "Tentukan nama konfigurasi header yang dimatikan: `'x-powered-by'`.",
            },
          ],
          solution: "app.disable('x-powered-by');",
          susunKode: {
            question:
              "Rangkai penonaktifan header informasi framework Express menggunakan metode disable.",
            potongan: [
              "app",
              ".disable(",
              "'x-powered-by');",
            ],
            pengecoh: [
              ".enable(",
              ".delete(",
              "'powered-by');",
            ],
            pemisah: "",
            explanation:
              "Secara default, Express mengirimkan header HTTP X-Powered-By: Express pada setiap balasan server. Informasi ini memberi tahu peretas teknologi apa yang kamu gunakan sehingga mempermudah pencarian celah eksploitasi spesifik versi. Keping .enable( keliru karena justru mengaktifkan kembali header tersebut. Keping .delete( menggoda karena istilah hapus terdengar intuitif, tetapi metode Express untuk mematikan setting bawaan bernama .disable(). Keping 'powered-by' keliru nama konfigurasi karena standar header Express adalah x-powered-by.",
          },
        },
        {
          kind: "quiz",
          id: "node-9-kuis",
          title: "Kuis: Keamanan Dasar Node.js",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Library Express populer apa yang digunakan untuk menginjeksi HTTP Security Headers secara otomatis demi melindungi server dari berbagai serangan umum?",
              choices: ["helmet","cors","morgan","dotenv"],
              answerIndex: 0,
              explanation: "Pustaka Helmet menyuntikkan 15+ HTTP security headers otomatis (seperti Content-Security-Policy, X-Frame-Options, dan HSTS) untuk menangkal celah clickjacking dan XSS. Cors hanya mengatur asal domain permintaan, Morgan adalah logger HTTP request, dan Dotenv mengelola environment variable."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa mengaktifkan Rate Limiting (seperti express-rate-limit) sangat penting pada endpoint login API?",
              choices: ["Untuk mencegah serangan Brute Force di mana peretas mencoba ribuan kombinasi password per detik secara otomatis","Agar database tidak pernah penuh","Untuk mengompresi response JSON menjadi Gzip","Agar user tidak perlu menggunakan password"],
              answerIndex: 0,
              explanation: "Rate limiting (seperti express-rate-limit) membatasi jumlah request per alamat IP (misal maksimal 5 request per menit untuk endpoint login). Ini mencegah serangan brute force di mana bot penyerang mencoba ribuan kombinasi kata sandi per detik, sekaligus menghemat sumber daya komputasi server dari ancaman overload."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa risiko keamanan terbesar jika berkas .env tidak sengaja ter-push ke repository GitHub publik?",
              choices: ["Kredensial rahasia (seperti password database, API key, JWT secret) dapat dicuri dan disalahgunakan oleh siapa saja","Repository GitHub akan terhapus","Ukuran kode repository membengkak 1GB","Node.js tidak bisa lagi di-install"],
              answerIndex: 0,
              explanation: "Berkas .env menyimpan kredensial paling sensitif seperti kata sandi database, API key pembayaran, dan secret key JWT. Jika bocor ke publik di GitHub, peretas dapat mengakses infrastruktur database dan memalsukan identitas token autentikasi pengguna secara instan."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Ketika melayani data lintas domain dari server Node ke aplikasi React Frontend yang beda origin (misal Frontend port 3000, Backend port 8000), pengaturan keamanan apakah yang harus dieksekusi agar tidak ditolak oleh Browser?",
              choices: ["Bypass Router","Mengganti SSL Certificate","Mengkonfigurasi aturan CORS (Cross-Origin Resource Sharing) middleware di backend","Menghapus .env File"],
              answerIndex: 2,
              explanation: "CORS (Cross-Origin Resource Sharing) adalah kebijakan keamanan yang ditegakkan oleh peramban web (browser). Jika aplikasi React berjalan di domain port 3000 dan Express di port 8000, peramban akan memblokir request kecuali backend menyertakan header Access-Control-Allow-Origin resmi yang mengizinkan domain asal tersebut."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Sebuah celah di mana penyerang berhasil membubuhi payload jahat `<script>alert('Ter-hack')</script>` dalam isi input komentar, lalu dijalankan oleh browser pengguna lain, disebut serangan apa?",
              choices: ["SQL Injection","XSS (Cross-Site Scripting)","DDoS","CSRF"],
              answerIndex: 1,
              explanation: "Cross-Site Scripting (XSS) adalah celah keamanan di mana skrip HTML/JavaScript berbahaya berhasil disuntikkan ke dalam aplikasi dan dieksekusi oleh peramban pengguna lain. SQL Injection menargetkan basis data, DDoS menargetkan ketersediaan jaringan server, dan CSRF memalsukan aksi pengguna yang sudah terotentikasi."
            }
          ],
        },
      ],
    },
  ],
};
