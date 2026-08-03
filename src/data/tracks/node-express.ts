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
            " Selama bertahun-tahun, JavaScript hanya dikenal sebagai bahasa yang berjalan di dalam peramban web (browser) untuk memanipulasi tampilan DOM. Node.js lahir saat Ryan Dahl mengekstrak V8 JavaScript Engine milik Google Chrome dan menggabungkannya dengan pustaka C++ berkinerja tinggi bernama `libuv`. Hasilnya adalah sebuah runtime lingkungan eksekusi mandiri yang memungkinkan JavaScript berjalan langsung di server atau komputer lokal tanpa memerlukan peramban web.\n\n" +
            "## Perbedaan Utama Node.js vs Browser\n\n" +
            "Di dalam browser, JavaScript dibatasi oleh sandbox keamanan peramban: kamu bisa mengakses `window`, `document`, dan elemen visual UI, namun tidak bisa membaca file di harddisk komputer pengguna secara bebas. Di Node.js, keadaan berbalik total: objek visual seperti `window` dan `document` **tidak ada**, namun kamu mendapatkan akses penuh ke Sistem Operasi (OS) untuk membaca file, berkomunikasi dengan database, mengelola jaringan, dan membaca variabel lingkungan.\n\n" +
            "| Fitur / API | Browser (Client-Side) | Node.js (Server-Side) |\n" +
            "|---|---|---|\n" +
            "| **Global Object** | `window` / `globalThis` | `global` / `process` |\n" +
            "| **Akses File System** | ❌ Dibatasi (Sandbox) | ✅ Membaca & Menulis file (`node:fs`) |\n" +
            "| **Elemen DOM & Visual** | ✅ (`document.getElementById`) | ❌ Tidak ada (Headless Runtime) |\n" +
            "| **Network Communication** | `fetch` / `XMLHttpRequest` | `http`, `https`, `net`, `fetch` |\n" +
            "| **Module System** | ES Modules (`<script type=\"module\">`) | CommonJS (`require`) & ES Modules (`import`) |\n\n" +
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
              explanation: "process.env menyimpan seluruh variabel lingkungan yang disuntikkan ke runtime Node.js."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Properti sintaks apa di package.json yang harus dikonfigurasi agar Node.js memperlakukan berkas .js sebagai ES Modules (bukan CommonJS)?",
              choices: ["\"type\": \"module\"","\"module\": true","\"format\": \"esm\"","\"target\": \"esnext\""],
              answerIndex: 0,
              explanation: "\"type\": \"module\" memberitahu Node.js untuk mengeksekusi berkas JavaScript menggunakan kata kunci import/export."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Manakah perbedaan utama antara browser JavaScript runtime dan Node.js runtime?",
              choices: ["Node.js tidak memiliki objek DOM (window, document), tetapi memiliki akses ke File System lokal dan variabel process","Browser menggunakan bahasa Python sedangkan Node.js menggunakan C++","Node.js hanya bisa berjalan di HP Android","Browser tidak mendukung fungsi matematika"],
              answerIndex: 0,
              explanation: "Node.js dirancang untuk server-side sehingga tidak memuat API tampilan browser seperti document dan window."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Perintah npm mana yang secara khusus digunakan untuk menginstal paket dependensi yang hanya dibutuhkan selama tahap pengembangan (development), seperti library testing atau TypeScript?",
              choices: ["npm install --prod","npm install -D (atau --save-dev)","npm add","npm init"],
              answerIndex: 1,
              explanation: "Flag -D / --save-dev mencatat package ke dalam atribut devDependencies di package.json."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Di lingkungan Node.js modern, modul built-in mana yang sebaiknya di-import untuk melakukan pembacaan/penulisan file dengan dukungan API Promise bawaan (asynchronous tanpa callback)?",
              choices: ["node:fs","node:http","node:fs/promises","node:path"],
              answerIndex: 2,
              explanation: "node:fs/promises memuat API File System yang khusus mengembalikan Promise, sehingga dapat menggunakan async/await dengan mudah."
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
            "- **Lupa `app.use(express.json())`:** Mengakses `req.body` tanpa mengaktifkan middleware pengurai JSON bawaan Express ini akan menghasilkan `undefined`.\n" +
            "- **Lupa Memanggil `next()` di Middleware:** Jika middleware tidak mengirimkan respon (`res.json`) dan juga tidak memanggil `next()`, permintaan klien akan **gantung (*hanging*)** selamanya hingga mengalami timeout.\n" +
            "- **Error `ERR_HTTP_HEADERS_SENT`:** Terjadi saat kamu mencoba memanggil `res.json()` atau `res.send()` lebih dari satu kali dalam satu alur request yang sama.\n" +
            "- **Urutan Middleware 404 & Error Handler:** Tempatkan handler 404 dan Error Handler di bagian **paling bawah** setelah seluruh rute terdaftar.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Kemampuan merancang arsitektur server Express yang modular menggunakan middleware dan pemisahan `Router` adalah keterampilan teknis backend yang diuji pada sesi *coding live interview*. Pemahaman tentang siklus Request-Response memastikan aplikasi backend yang kamu bangun tangguh dan mudah dipelihara oleh tim.",
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
            code: "const app = { get(path, handler) { console.log(handler({}, { send: (body) => body })); } };\napp.get('/health', (req, res) => res.send('OK'));",
            output: "OK",
            note: "Di sini `app` sengaja dipalsukan supaya handler-nya benar-benar dipanggil dan hasil `res.send` terlihat sebagai keluaran. Pada Express sungguhan, nilai itu dikirim sebagai body respons HTTP, bukan dicetak ke terminal — dan `res.json()` juga otomatis mengatur Content-Type ke application/json. Catatan jujur: panel preview BiLearn tidak menjalankan Node.js, jadi latihanmu hanya diperiksa lewat tes, bukan dieksekusi.",
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
            code: "const req = { params: { id: '42' } };\nconst { id } = req.params;\nconsole.log(id);",
            output: "42",
            note: "Pastikan app.use(express.json()) terpasang sebelum membaca req.body.",
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
            code: "const res = { status(c) { return this; }, json(d) { console.log(d); } };\nres.status(404).json({ error: 'Not Found' });",
            output: "{ error: 'Not Found' }",
            note: "res.status(404) untuk Not Found, res.status(400) untuk Bad Request.",
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
            code: "const app = { use(fn) { fn({}, { status(c) { return this; }, json(d) { console.log(d); } }); } };\napp.use((req, res) => res.status(404).json({ error: '404' }));",
            output: "{ error: '404' }",
            note: "Middleware ini harus berada di paling bawah setelah daftar route terdefinisi. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
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
              explanation: "Fungsi next() memberitahu Express untuk melanjutkan eksekusi ke middleware atau route handler berikutnya."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Middleware bawaan Express apa yang harus dipasang agar server dapat mengurai (parse) body request berformat JSON?",
              choices: ["express.json()","express.urlencoded()","express.bodyParser()","express.parse()"],
              answerIndex: 0,
              explanation: "express.json() adalah middleware bawaan yang mengubah payload JSON dari req.body menjadi objek JavaScript."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Properti req mana yang digunakan untuk mengekstrak parameter dinamis dari URL path (seperti `:id` pada `/users/:id`)?",
              choices: ["req.params","req.query","req.body","req.headers"],
              answerIndex: 0,
              explanation: "req.params memuat objek parameter rute dinamis yang dicocokkan dari segmen URL path."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Dalam pengembangan server Express, apa peran metode 'res.status()'?",
              choices: ["Untuk mengubah status koneksi internet","Untuk mengatur HTTP Status Code yang akan dikirim kembali (contoh: res.status(404))","Untuk mengecek apakah server berjalan atau error","Untuk mengirim status ke database"],
              answerIndex: 1,
              explanation: "res.status(code) menyetel HTTP Status Code yang akan dikembalikan oleh respon secara semantik."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Bagaimana cara terbaik untuk memecah daftar ratusan rute Express menjadi berkas terpisah yang modular dan bersih?",
              choices: ["Mendeklarasikan banyak objek app.js","Menggunakan kelas Router bawaan dengan express.Router()","Membuat fungsi callback kustom berlapis","Menggunakan middleware eksternal"],
              answerIndex: 1,
              explanation: "express.Router() menyediakan sistem routing mini yang bisa digunakan untuk memecah endpoint logis menjadi modul terpisah, lalu diimpor ke aplikasi utama."
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
            "## Kesalahan Umum & Jebakan (Pitfalls)\n\n" +
            "- **Mengaburkan PUT dan PATCH:** `PUT` mengganti **seluruh** bidang objek data (data yang tidak dikirim akan hilang/null), sedangkan `PATCH` hanya memperbarui bidang yang dikirimkan saja (*partial update*).\n" +
            "- **Mengabaikan Pagination:** Membiarkan endpoint `GET /api/v1/products` mengembalikan seluruh jutaan baris data sekaligus tanpa `page` dan `limit` akan membuat server dan aplikasi mobile mengalami crash memori.\n" +
            "- **Tanpa Versioning API:** Tidak memasangkan awalan versi seperti `/api/v1/` akan menyulitkan perombakan API di masa depan karena perubahan rute langsung merusak (*break*) aplikasi klien lama pengguna.\n" +
            "- **Mengembalikan HTTP 200 untuk Error:** Mengirim status 200 OK dengan body `{ status: 400, error: \"Bad Data\" }` merusak standar pengolahan error pada pustaka HTTP client seperti Axios.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Kemampuan mendesain RESTful API yang mematuhi standar HTTP semantik, idempotency, dan versioning adalah topik diskusi arsitektur wajib dalam tim backend engineer. Konvensi ini memastikan API yang dibangun mudah diintegrasikan dengan aplikasi Frontend (React, Vue) dan aplikasi Mobile (iOS, Android).",
        },
        {
          kind: "step",
          id: "node-3-1",
          title: "Konvensi Penamaan Resource Noun Jamak",
          explanation:
            "Saat merancang REST API, aturan emas penamaan endpoint adalah menggunakan Kata Benda Jamak (Plural Noun), contoh `/api/v1/users` alih-alih kata kerja seperti `/getUsers` atau `/create_user`. Dalam prinsip REST, URL berfungsi sebagai petunjuk lokasi sumber daya (resource), sedangkan aksinya sudah diwakili oleh kata kerja HTTP Method (GET, POST, DELETE). Konsistensi ini membuat API kamu terasa profesional, rapi, dan mudah ditebak oleh pengembang frontend. Menghindari kata kerja pada URL path mencegah terbentuknya endpoint yang tidak terstruktur. Jebakan umum pemula adalah mencampur kata kerja dalam URL path seperti `/api/v1/updateUser`.",
          example: {
            code: "function getEndpoint(resource) {\n  return `/api/v1/${resource}`;\n}\nconsole.log(getEndpoint('users'));",
            output: "/api/v1/users",
            note: "Aksi (action) ditentukan oleh HTTP Method, bukan nama URL path. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat fungsi `getEndpoint(resourceName)` yang mengembalikan string URL RESTful terformat `\"/api/v1/\${resourceName}\"`.",
          starterCode: "// Tulis fungsi getEndpoint di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "`/api/v1/\\$\\{resourceName\\}`|['\"]/api/v1/['\"]\\s*\\+\\s*resourceName",
              message: "Format URL: `/api/v1/${resourceName}`",
            },
          ],
          solution:
            "function getEndpoint(resourceName) {\n  return `/api/v1/${resourceName}`;\n}",
          susunKode: {
            question:
              "Susun fungsi helper yang mengembalikan string URL endpoint versi 1 berawalan /api/v1/.",
            potongan: [
              "function getEndpoint(resourceName) {",
              "  return `/api/v1/${resourceName}`;",
              "}",
            ],
            pengecoh: [
              "  return `/api/v2/${resourceName}`;",
              "  return `/v1/api/${resourceName}`;",
            ],
            pemisah: "\n",
            explanation:
              "Konvensi URL REST API menggunakan skema /api/v1/ diawali kata api kemudian versi. Keping /api/v2/ keliru nomor versi yang dipersyaratkan. Keping /v1/api/ menggoda tetapi menyalahi penulisan urutan segmen prefiks URL standar.",
          },
        },
        {
          kind: "step",
          id: "node-3-2",
          title: "HTTP Method Semantik: PUT vs PATCH",
          explanation:
            "Perbedaan mendasar antara metode HTTP `PUT` dan `PATCH` terletak pada cakupan data yang diperbarui di server. `PUT` digunakan untuk mengganti **seluruh** dokumen data secara utuh, sehingga bidang yang tidak dikirimkan dalam payload akan terhapus atau bernilai null. Sebaliknya, `PATCH` digunakan untuk memperbarui sebagian (*partial update*) bidang data yang dikirim saja tanpa mengganggu bidang lainnya. Menggunakan `PATCH` sangat cocok untuk fitur sederhana seperti mengubah nama pengguna atau status profil. Jebakan klasik pengembang adalah menggunakan `PUT` padahal yang dilakukan hanya mengubah satu kolom data.",
          example: {
            code: "function getUpdateMethod(isPartial) {\n  return isPartial ? 'PATCH' : 'PUT';\n}\nconsole.log(getUpdateMethod(true));",
            output: "PATCH",
            note: "Gunakan PATCH untuk update sebagian bidang data. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat fungsi `getUpdateMethod(isPartial)` yang mengembalikan string `'PATCH'` jika `isPartial` bernilai `true` dan `'PUT'` jika `false`.",
          starterCode: "// Tulis fungsi getUpdateMethod di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "isPartial\\s*\\?\\s*['\"]PATCH['\"]\\s*:\\s*['\"]PUT['\"]",
              message: "Gunakan: isPartial ? 'PATCH' : 'PUT'",
            },
          ],
          solution:
            "function getUpdateMethod(isPartial) {\n  return isPartial ? 'PATCH' : 'PUT';\n}",
          susunKode: {
            question:
              "Susun fungsi penentu metode HTTP yang mengembalikan 'PATCH' untuk pembaruan parsial dan 'PUT' untuk pembaruan menyeluruh.",
            potongan: [
              "function getUpdateMethod(isPartial) {",
              "  return isPartial ? 'PATCH' : 'PUT';",
              "}",
            ],
            pengecoh: [
              "  return isPartial ? 'POST' : 'PUT';",
              "  return isPartial ? 'PUT' : 'PATCH';",
            ],
            pemisah: "\n",
            explanation:
              "Dalam spesifikasi REST HTTP, PATCH digunakan khusus untuk perubahan parsial sedangkan PUT untuk penggantian dokumen utuh. Keping POST keliru metode. Keping penukaran urutan ternary keliru logika pemetaan kondisi isPartial.",
          },
        },
        {
          kind: "step",
          id: "node-3-3",
          title: "Status Code HTTP Semantik",
          explanation:
            "Mengembalikan Status Code HTTP yang tepat membantu klien menginterpretasikan hasil pengolahan data tanpa harus mengurai isi teks body. Contohnya, saat penghapusan data berhasil dan server tidak mengembalikan body JSON, status `204 No Content` adalah standar resmi yang paling tepat. Menggunakan kode 200 untuk pembuatan data baru (harusnya 201) atau saat terjadi kesalahan input (harusnya 400) membuat aplikasi frontend sulit menangani kesalahan secara otomatis. Menyusun rantai `res.status(204).send()` menutup siklus komunikasi HTTP dengan efisien. Jebakan umum adalah mengembalikan status 200 OK padahal server mengalami crash internal.",
          example: {
            code: "const res = { status(c) { console.log(c); return this; }, send() {} };\nres.status(204).send();",
            output: "204",
            note: "Jangan pernah mengembalikan status 200 OK jika terjadi error di API!",
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
            code: "const res = { json(obj) { console.log(obj.success); } };\nres.json({ success: true, data: [] });",
            output: "true",
            note: "Struktur konsisten mempermudah pembacaan data di sisi client.",
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
            code: "const app = { use(path, r) { console.log(path); } };\napp.use('/api/v1/posts', {});",
            output: "/api/v1/posts",
            note: "Versioning adalah standar wajib bagi API skala produksi.",
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
            code: "const req = { query: { limit: '20' } };\nconst limit = Number(req.query.limit) || 10;\nconsole.log(limit);",
            output: "20",
            note: "Selalu berikan nilai default untuk limit agar tidak ada request yang mengambil jutaan baris sekaligus.",
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
            "Operasi Idempotent dalam HTTP berarti mengeksekusi permintaan yang sama secara berulang-ulang akan menghasilkan status state akhir yang identik pada database server. Metode `GET`, `PUT`, dan `DELETE` dikategorikan sebagai operasi Idempotent karena memanggil `DELETE /users/42` sebanyak 1 kali atau 100 kali akan tetap meninggalkan keadaan akhir yang sama: pengguna ID 42 terhapus. Sebaliknya, `POST` bukan Idempotent karena mengeksekusi `POST /orders` 10 kali akan membuat 10 pesanan baru yang duplikat. Memahami Idempotency membantu pengembang merancang mekanisme pemicu ulang (*retry strategy*) jaringan yang aman. Jebakan umum adalah merancang endpoint `POST` untuk operasi yang seharusnya bersifat idempotent.",
          example: {
            code: "function isIdempotentMethod(method) {\n  return ['GET', 'PUT', 'DELETE'].includes(method.toUpperCase());\n}\nconsole.log(isIdempotentMethod('DELETE'));",
            output: "true",
            note: "POST tidak idempotent karena 10x POST akan membuat 10 data baru. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat fungsi `isIdempotentMethod(httpMethod)` yang mengembalikan `true` bila metode yang diterima termasuk salah satu dari `'GET'`, `'PUT'`, atau `'DELETE'`. Susun ketiganya sebagai array literal, lalu periksa keanggotaannya dengan metode array `.includes()`.",
          starterCode: "// Tulis fungsi isIdempotentMethod di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\[\\s*['\"]GET['\"]\\s*,\\s*['\"]PUT['\"]\\s*,\\s*['\"]DELETE['\"]\\s*\\]\\.includes\\(\\s*httpMethod\\s*\\)",
              message: "Gunakan: ['GET', 'PUT', 'DELETE'].includes(httpMethod)",
            },
          ],
          solution:
            "function isIdempotentMethod(httpMethod) {\n  return ['GET', 'PUT', 'DELETE'].includes(httpMethod);\n}",
          susunKode: {
            question:
              "Susun fungsi pemeriksaan metode idempotensi HTTP yang mengembalikan true untuk GET, PUT, dan DELETE.",
            potongan: [
              "function isIdempotentMethod(httpMethod) {\n",
              "  return ",
              "['GET', 'PUT', 'DELETE']",
              ".includes(httpMethod);",
              "\n}",
            ],
            pengecoh: [
              "['POST', 'PUT', 'DELETE']",
              "['GET', 'POST', 'DELETE']",
              ".contains(httpMethod);",
            ],
            pemisah: "",
            explanation:
              "Metode HTTP yang idempotent (GET, PUT, DELETE) menjamin bahwa eksekusi berulang meninggalkan keadaan akhir yang sama di server. Keping berisi POST sangat keliru karena POST justru membuat data baru setiap dipanggil, sehingga sepuluh kali retry menghasilkan sepuluh baris duplikat. Keping yang membuang PUT juga keliru: PUT mengganti dokumen secara utuh, jadi mengirimnya berulang menghasilkan isi yang sama persis. Keping .contains( menggoda bagi pendatang dari Java atau Python, tetapi metode pencarian anggota array di JavaScript bernama .includes( — .contains( menghasilkan TypeError saat dijalankan.",
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
              explanation: "PUT digunakan untuk mengganti penuh resource, sedangkan PATCH digunakan untuk pembaruan sebagian bidang (partial update)."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "HTTP Status Code manakah yang paling sesuai dikembalikan saat server berhasil memproses pembuatan data baru (misal pendaftaran pengguna sukses)?",
              choices: ["200 OK","201 Created","204 No Content","302 Found"],
              answerIndex: 1,
              explanation: "HTTP 201 Created mengindikasikan bahwa request berhasil dan sebuah resource baru telah berhasil dibuat di server."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa HTTP Method POST tidak dikategorikan sebagai operasi yang Idempotent?",
              choices: ["Karena mengeksekusi request POST sebanyak 10 kali secara berulang akan menghasilkan 10 data resource baru di database","Karena POST tidak membutuhkan kata sandi","Karena POST tidak bisa menerima payload JSON","Karena POST selalu mengembalikan error 500"],
              answerIndex: 0,
              explanation: "Operasi Idempotent mengembalikan state akhir yang identik meski dipanggil berkali-kali. POST menciptakan entitas baru setiap dipanggil."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Menurut konvensi desain RESTful standar, manakah bentuk penamaan endpoint URL di bawah ini yang paling direkomendasikan?",
              choices: ["/api/v1/getUsers","/api/v1/users","/api/v1/user/getAll","/api/v1/fetch_users"],
              answerIndex: 1,
              explanation: "REST API berprinsip URL merepresentasikan kata benda (Resource Jamak), sedangkan aksinya didefinisikan lewat HTTP Method (GET, POST)."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Bagaimana sebuah endpoint API GET standar menangani opsi operasi seperti Pagination, Filtering, dan Sorting?",
              choices: ["Melalui input form HTML form-data","Dengan membacanya dari body JSON request","Menggunakan parameter Query String URL (contoh: ?page=1&limit=10)","Melalui custom HTTP Headers"],
              answerIndex: 2,
              explanation: "Query string (req.query) adalah mekanisme alami HTTP untuk menyaring data GET secara fleksibel tanpa mengubah endpoint sumber."
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
            "# Integrasi Database & ORM Prisma\n\n" +
            "Aplikasi backend skala produksi memerlukan penyimpanan data persisten seperti PostgreSQL atau MySQL. Menulis query SQL mentah (*raw SQL*) secara manual berisiko tinggi menimbulkan kesalahan pengetikan nama kolom dan kerentanan SQL Injection. Prisma hadir sebagai ORM (*Object-Relational Mapping*) generasi baru untuk Node.js & TypeScript yang memberikan jaminan tipe data penuh (*type-safety*) sejak tahap pengodean.\n\n" +
            "## Arsitektur & Alur Kerja Prisma\n\n" +
            "Pengembangan berpusat pada satu berkas cetak biru bernama `prisma/schema.prisma`. Di berkas ini kamu mendefinisikan model tabel, tipe data, dan relasi antar tabel.\n\n" +
            "```text\n" +
            "+-------------------------------+       npx prisma migrate dev\n" +
            "|     prisma/schema.prisma      | ----------------------------------> [ PostgreSQL Database ]\n" +
            "| (Definisi Model & Tabel Data) |                                      (Tabel & Relasi Fisik)\n" +
            "+-------------------------------+ \n" +
            "                |\n" +
            "                | npx prisma generate\n" +
            "                v\n" +
            "+-----------------------------------------------------------------------------------------+\n" +
            "| @prisma/client (Auto-generated TypeScript Client)                                       |\n" +
            "| -> Autocomplete instan untuk prisma.user.findMany(), prisma.post.create(), dll          |\n" +
            "+-----------------------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Tabel Perbandingan Prisma Client vs SQL Mentah\n\n" +
            "| Operasi Data | SQL Mentah (Raw Query) | Prisma Client (Type-Safe API) |\n" +
            "|---|---|---|\n" +
            "| **Cari by ID** | `SELECT * FROM \"User\" WHERE id = $1;` | `prisma.user.findUnique({ where: { id } })` |\n" +
            "| **Tambah Data** | `INSERT INTO \"User\" (email) VALUES ($1);` | `prisma.user.create({ data: { email } })` |\n" +
            "| **Join Relasi** | `SELECT * FROM \"User\" JOIN \"Post\" ON ...;` | `prisma.user.findMany({ include: { posts: true } })` |\n" +
            "| **Transaksi** | `BEGIN; ... COMMIT;` | `prisma.$transaction([ ... ])` |\n\n" +
            "## Pola Arsitektur Repository (Data Access Isolation)\n\n" +
            "Sesuai prinsip *Separation of Concerns* (SoC), jangan mencampur panggilan `prisma.user.create()` langsung di dalam Express Route Controller. Pisahkan pemanggilan database ke dalam fungsi atau kelas khusus bernama **Repository** (misal `UserRepository`).\n\n" +
            "```text\n" +
            "Express Controller  ===>  UserRepository  ===>  Prisma Client  ===>  PostgreSQL Database\n" +
            "(Handle HTTP Req/Res)     (Logika Database)     (Type-Safe ORM)       (Penyimpanan Fisik)\n" +
            "```\n\n" +
            "## Visualisasi & Seeding Data: Prisma Studio\n\n" +
            "- **Prisma Studio (`npx prisma studio`):** Meluncurkan antarmuka GUI peramban instan untuk melihat, menambah, dan mengedit data tabel database tanpa memerlukan software database client eksternal.\n" +
            "- **Database Seeding (`prisma/seed.ts`):** Skrip otomatis untuk mengisi database pengembangan dengan data awal dummy agar penguji tidak mulai dari tabel kosong.\n\n" +
            "## Kesalahan Umum & Jebakan (Pitfalls)\n\n" +
            "- **Lupa Menjalankan Migrasi:** Mengubah model di `schema.prisma` tanpa menjalankan `npx prisma migrate dev` menyebabkan database fisik dan Prisma Client tidak sinkron.\n" +
            "- **Problem N+1 Query:** Melakukan kueri relasi di dalam perulangan `map` alih-alih memanfaatkan atribut `include: { profile: true }` bawaan Prisma.\n" +
            "- **Lupa Klausa `where` pada Update/Delete:** Memanggil `deleteMany()` tanpa menyertakan `where` akan **menghapus seluruh isi tabel** database produksi secara tidak sengaja.\n" +
            "- **Multiple Instance Prisma Client:** Membuat `new PrismaClient()` berulang kali di setiap berkas akan menghabiskan batas *connection pool* database. Selalu gunakan pola *Singleton*.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Penguasaan Prisma ORM dan penulisan skema migrasi database adalah standar wajib pada lowongan backend TypeScript modern. Memahami pola Repository dan transaksi database memastikan data aplikasi perusahaan tetap konsisten dan bebas dari kebocoran koneksi.",
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
            code: "const prisma = { user: { findUnique: (o) => ({ id: o.where.id, name: 'Budi' }) } };\nconst user = await prisma.user.findUnique({ where: { id: 1 } });\nconsole.log(user.name);",
            output: "Budi",
            note: "Prisma otomatis mengembalikan tipe data TypeScript yang sesuai.",
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
            code: "const prisma = { user: { findMany: (o) => [{ profile: true }] } };\nconst users = await prisma.user.findMany({ include: { profile: true } });\nconsole.log(users.length);",
            output: "1",
            note: "Nested query Prisma mencegah problem N+1 di Node.js.",
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
            "Fitur `prisma.$transaction()` digunakan untuk memastikan serangkaian operasi database dieksekusi secara *atomic* (memenuhi prinsip ACID). Jika ada satu kueri yang mengalami kesalahan di tengah proses transaksi, seluruh perubahan kueri sebelumnya akan secara otomatis dibatalkan (*rollback*). Fitur ini sangat krusial untuk fitur-fitur sensitif seperti transaksi keuangan atau pemotongan stok barang di mana integritas data adalah harga mati. Membungkus array kueri ke dalam `$transaction([])` memberikan jaminan keamanan data tingkat tinggi di server backend. Jebakan utama adalah menjalankan beberapa kueri terpisah tanpa transaksi pada alur bisnis yang saling bergantung.",
          example: {
            code: "const prisma = { $transaction: async (arr) => 'Transaction Success' };\nconsole.log(await prisma.$transaction([]));",
            output: "Transaction Success",
            note: "Menjamin prinsip ACID pada transaksi keuangan.",
          },
          instruction:
            "Bungkus sekumpulan perintah database di dalam fungsi transaksi atomic `prisma.$transaction()` yang menerima array kosong `[]` sebagai argumen dasar.",
          starterCode: "// Tulis $transaction di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "prisma\\.\\$transaction\\(",
                        "message": "Beberapa operasi yang harus berhasil bersama dibungkus `prisma.$transaction(...)`. Kalau satu gagal, semuanya dibatalkan."
                      },
                      {
                        "pattern": "\\[\\s*\\]",
                        "message": "Bentuk array menerima daftar operasi yang dijalankan berurutan. (Ada juga bentuk callback `$transaction(async (tx) => ...)` untuk logika yang butuh hasil operasi sebelumnya.)"
                      },
                      {
                        "pattern": "await\\s",
                        "message": "Tunggu dengan `await` — tanpa itu transaksinya belum tentu selesai saat kamu mengirim respons."
                      }
                    ],
          solution: "await prisma.$transaction([]);",
          susunKode: {
            question:
              "Rangkai pemanggilan transaksi berurutan Prisma Client menggunakan metode $transaction.",
            potongan: [
              "await ",
              "prisma",
              ".$transaction(",
              "[]",
              ");",
            ],
            pengecoh: [
              ".transaction(",
              ".startTransaction(",
              "{}",
            ],
            pemisah: "",
            explanation:
              "Transaksi atomik pada Prisma dijalankan lewat metode bawaan yang namanya sengaja diawali tanda dollar untuk membedakan API tingkat klien dari nama modelmu. Keping .transaction( sangat menggoda karena tanda dollar mudah terlewat saat mengetik, padahal tanpa tanda itu Prisma melempar TypeError karena propertinya tidak ada. Keping .startTransaction( keliru — itu gaya penamaan driver database lain, bukan Prisma. Keping {} keliru karena bentuk berurutan menerima ARRAY operasi yang dijalankan satu per satu, sedangkan objek kosong bukan daftar dan langsung ditolak.",
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
            code: "const UserRepository = { findById: (id) => `User ${id}` };\nconsole.log(UserRepository.findById(10));",
            output: "User 10",
            note: "Menerapkan prinsip SoC (Separation of Concerns). Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
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
              explanation: "Properti `include: { relasi: true }` digunakan di Prisma Client untuk melakukan Eager Loading data relasi."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Perintah Prisma CLI manakah yang digunakan untuk menyelaraskan skema schema.prisma ke database development dan menghasilkan berkas migrasi baru?",
              choices: ["npx prisma migrate dev","npx prisma push","npx prisma db sync","npx prisma generate"],
              answerIndex: 0,
              explanation: "npx prisma migrate dev membuat berkas migrasi SQL baru dan menerapkan perubahan skema ke database lokal."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Fitur Prisma Client manakah yang memastikan bahwa serangkaian query database dieksekusi secara atomic (jika 1 query gagal, seluruh perubahan dibatalkan)?",
              choices: ["prisma.$transaction()","prisma.$batch()","prisma.$queryRaw()","prisma.$rollback()"],
              answerIndex: 0,
              explanation: "prisma.$transaction() membungkus kueri ke dalam transaksi database tunggal untuk menjamin konsistensi ACID."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Saat mendefinisikan arsitektur aplikasi backend berskala besar, mengapa disarankan memisahkan semua kueri Prisma (database logic) dari Express Route Controller dan meletakkannya di kelas/fungsi tersendiri?",
              choices: ["Agar aplikasi mengonsumsi lebih sedikit RAM","Karena ini adalah pola Repository yang memisahkan urusan akses data dari urusan HTTP Request","Agar bisa menggunakan MySQL dan PostgreSQL bersamaan","Kewajiban dari dokumentasi Express"],
              answerIndex: 1,
              explanation: "Pola Repository memisahkan lapisan Data Access Object dengan logika Controller, mempermudah pengujian (mocking) dan pemeliharaan kode."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Perintah Prisma apa yang membuka antarmuka GUI browser instan untuk melihat dan memodifikasi isi tabel database kamu dengan mudah?",
              choices: ["npx prisma dashboard","npx prisma db admin","npx prisma studio","npx prisma view"],
              answerIndex: 2,
              explanation: "Prisma Studio meluncurkan antarmuka visual gratis untuk berinteraksi langsung dengan data di database selama pengembangan."
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
            "# Strategi Autentikasi: JWT vs Session\n\n" +
            "Keamanan pengguna merupakan fondasi paling kritis dalam aplikasi backend. Dua tugas utama dalam domain keamanan ini adalah **Autentikasi** (memastikan identitas siapa yang masuk) dan **Otorisasi** (memastikan hak akses apa yang dimiliki pengguna). Memahami trade-off antara pendekatan *Stateless Token* (JWT) dan *Stateful Session* sangat penting saat merancang sistem backend modern.\n\n" +
            "## Prinsip Utama Hashing Kata Sandi\n\n" +
            "**JANGAN PERNAH menyimpan kata sandi dalam bentuk teks mentah (plain-text) di database!** Jika database bocor, seluruh akun pengguna akan terkompromi. Gunakan algoritma enkripsi satu arah berbasis *salt* seperti `bcrypt` atau `argon2`.\n\n" +
            "```text\n" +
            "Password Mentah: \"rahasia123\"\n" +
            "       |\n" +
            "       v bcrypt.hash(password, 10)\n" +
            "Hash Tersimpan: \"$2b$10$e8.Z...K3Q.u6Xn7Y...\" (Satu Arah - Tidak Bisa Di-decode)\n" +
            "```\n\n" +
            "## Arsitektur Autentikasi JWT (Stateless Token)\n\n" +
            "JSON Web Token (JWT) terdiri dari 3 bagian yang dipisahkan titik: `Header.Payload.Signature`. Server menandatangani token menggunakan kunci rahasia (*secret key*). Klien menyimpan token ini dan mengirimkannya kembali di header `Authorization: Bearer <token>` pada setiap request.\n\n" +
            "```text\n" +
            "Client (Browser / Mobile)                 Server Backend (Express)\n" +
            "        |\n" +
            "        |-- 1. POST /login { email, pass } ------>|\n" +
            "        |                                         |---> Verify bcrypt.compare()\n" +
            "        |<-- 2. Return JWT Token (Stateless) -----|\n" +
            "        |\n" +
            "        |-- 3. GET /orders (Bearer Token) ------->|\n" +
            "        |                                         |---> Verifikasi Signature Token\n" +
            "        |<-- 4. Return Data Respon 200 -----------|\n" +
            "```\n\n" +
            "## Tabel Perbandingan JWT vs Session Cookie\n\n" +
            "| Dimensi Keamanan / Performa | JWT (JSON Web Token) | Stateful Session + Cookie |\n" +
            "|---|---|---|\n" +
            "| **Penyimpanan State Server** | ❌ None (Stateless) | ✅ Di RAM Server / Redis Database |\n" +
            "| **Skalabilitas Microservices**| ✅ Sangat Mudah & Fleksibel | ❌ Butuh Shared Session Store |\n" +
            "| **Penyimpanan di Klien** | `httpOnly Cookie` (Aman) / LocalStorage | `httpOnly Cookie` |\n" +
            "| **Pembatalan Sesi (Revocation)**| ❌ Sulit (Harus tunggu `expiresIn` / Redis Denylist) | ✅ Sangat Mudah (Hapus ID Sesi di Server) |\n" +
            "| **Risiko XSS & CSRF** | Rawan XSS jika di LocalStorage | Rawan CSRF jika tanpa SameSite strict |\n\n" +
            "## Pengamanan Cookie HttpOnly & Role-Based Access (RBAC)\n\n" +
            "- **`httpOnly: true`:** Mencegah skrip jahat JavaScript peramban (XSS) membaca isi token cookie.\n" +
            "- **`sameSite: 'strict'`:** Mencegah ancaman serangan pemalsuan permintaan antar situs (CSRF).\n" +
            "- **Middleware RBAC:** Memeriksa peran pengguna (seperti `req.user.role === 'admin'`) sebelum memberikan izin akses ke rute terproteksi.\n\n" +
            "## Kesalahan Umum & Jebakan (Pitfalls)\n\n" +
            "- **Menyimpan JWT di LocalStorage:** Menyimpan token autentikasi di `localStorage` peramban membuat token sangat rentan dicuri melalui serangan XSS.\n" +
            "- **Menyimpan Rahasia di Payload JWT:** Payload JWT hanya di-encode Base64 (BUKAN dienkripsi). Siapa pun dapat membaca isinya, jadi jangan simpan kata sandi di payload.\n" +
            "- **JWT Masa Kadaluarsa Abadi:** Menerbitkan JWT tanpa opsi `expiresIn` membuat token yang tercuri dapat digunakan selamanya oleh penyerang.\n" +
            "- **Lupa Pembatalan Cookie saat Logout:** Hanya menghapus token di sisi klien tanpa memanggil `res.clearCookie()` atau memasukkannya ke denylist.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Merancang arsitektur autentikasi yang aman dengan penanganan token JWT dan Cookie HttpOnly adalah persyaratan utama di industri SaaS, Fintech, dan e-Commerce. Pemahaman ini memastikan backend yang kamu bangun memenuhi standar audit keamanan informasi.",
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
            code: "const req = { session: {} };\nreq.session.userId = 42;\nconsole.log(req.session.userId);",
            output: "42",
            note: "Cookie HttpOnly aman dari pencurian script XSS.",
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
            code: "const res = { sendStatus(s) { console.log(s); } };\nconst token = null;\nif (!token) res.sendStatus(401);",
            output: "401",
            note: "Simpan payload terbongkar di req.user untuk dipakai di route handler.",
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
            code: "const res = { cookie(k, v, o) { console.log(o.httpOnly); } };\nres.cookie('token', 'abc', { httpOnly: true });",
            output: "true",
            note: "Perlindungan utama dari ancaman serangan XSS.",
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
            code: "const res = { clearCookie(name) { console.log('Cleared ' + name); } };\nres.clearCookie('token');",
            output: "Cleared token",
            note: "Menjamin sesi berakhir sempurna setelah tombol logout diklik.",
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
              explanation: "httpOnly: true melarang akses JavaScript client-side (document.cookie) ke cookie tersebut."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa menyimpan plain-text password pengguna di database dianggap sebagai pelanggaran keamanan paling fatal?",
              choices: ["Karena jika database bocor, penyerang langsung mengetahui password asli seluruh pengguna tanpa perlu mendekripsi","Karena database akan menolak menyimpan string biasa","Karena plain-text password membuat ukuran database membengkak 100 kali lipat","Karena bcrypt berbayar"],
              answerIndex: 0,
              explanation: "Password harus selalu di-hash menggunakan algoritma satu arah seperti bcrypt/argon2 agar nilai aslinya tidak dapat direkonstruksi."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara kerja skema autentikasi JSON Web Token (JWT)?",
              choices: ["Server menandatangani payload JSON dengan secret key, lalu client mengirimkan token tersebut pada header Authorization Bearer di tiap request","Server menyimpan seluruh data sesi di RAM server","JWT mengompresi gambar file profil","JWT menghapus cookie secara otomatis tiap 5 detik"],
              answerIndex: 0,
              explanation: "JWT bersifat stateless; server memverifikasi keabsahan tanda tangan (signature) token tanpa perlu membaca memori sesi server."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Dalam implementasi autentikasi JWT di Express, nilai apakah yang krusial untuk dimasukkan di fungsi `jwt.sign(payload, secret, { expiresIn: '...' })` demi keamanan sesi aplikasi?",
              choices: ["Pesan enkripsi statis","Waktu kadaluarsa token (expiresIn)","Password asli pengguna dalam payload","Alamat IP pengguna server"],
              answerIndex: 1,
              explanation: "Menetapkan durasi kedaluwarsa token (seperti '1h') mencegah penggunaan token yang terkompromi/tercuri dalam jangka waktu yang tak terbatas."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kamu menggunakan middleware `authenticateToken` yang memverifikasi JWT dan meletakkan informasi pengguna ke `req.user`. Jika klien tidak mengirimkan token yang sah, status HTTP apa yang lazim dikembalikan?",
              choices: ["401 Unauthorized","500 Internal Server Error","404 Not Found","200 OK"],
              answerIndex: 0,
              explanation: "Status HTTP 401 Unauthorized secara tegas menyatakan bahwa klien belum terotentikasi dan permintaannya ditolak untuk sumber daya yang diproteksi."
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
            code: "const app = { use(fn) { console.log(fn.length); } };\napp.use((err, req, res, next) => {});",
            output: "4",
            note: "Urutan 4 parameter (err, req, res, next) wajib ditulis lengkap agar Express mengenali sebagai error handler. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
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
            code: "const logger = { info(msg) { console.log('INFO: ' + msg); } };\nlogger.info('Server started');",
            output: "INFO: Server started",
            note: "Log JSON mempermudah parsing di sistem pemantau log (seperti Datadog / Elasticsearch).",
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
            code: "process.env.NODE_ENV = 'production';\nconst isProd = process.env.NODE_ENV === 'production';\nconsole.log(isProd);",
            output: "true",
            note: "Selalu sembunyikan detail internal error dari publik.",
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
              explanation: "Express membedakan middleware biasa dan error handler berdasarkan aritas (jumlah parameter) 4: (err, req, res, next)."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Library schema validation TypeScript populer apa yang umum digunakan di Node.js untuk memvalidasi req.body dan melempar type-safe error?",
              choices: ["Zod","Axios","Prisma","Pino"],
              answerIndex: 0,
              explanation: "Zod memungkinkan pembuatan skema tipe data deklaratif yang memvalidasi objek input runtime sekaligus mengekstrak tipe TypeScript."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa membocorkan err.stack (stacktrace) lengkap ke respon JSON di lingkungan produksi sangat dilarang?",
              choices: ["Karena stacktrace membeberkan struktur direktori server dan versi pustaka internal yang bisa dimanfaatkan peretas untuk mengeksploitasi celah keamanan","Karena stacktrace otomatis menghapus berkas database","Karena stacktrace tidak bisa dibaca oleh browser","Karena membuat koneksi jaringan terputus"],
              answerIndex: 0,
              explanation: "Stacktrace membeberkan informasi sensitif internal arsitektur server yang sangat berguna bagi analisis serangan peretas."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Pada server Node.js + Express modern, library manakah yang paling umum digunakan untuk mencatat (logging) error dan request dalam format JSON terstruktur untuk monitoring server?",
              choices: ["Zod","Pino (atau Winston)","Bcrypt","Mongoose"],
              answerIndex: 1,
              explanation: "Pino dan Winston mencatat log dalam format JSON. Format ini sangat penting untuk platform pengumpulan log (Datadog, Elastic) di lingkungan produksi."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Dalam penulisan handler Route secara Asynchronous, mengapa penting membungkus promise atau menggunakan penanganan `catch(next)` pada Express (terutama di Express v4)?",
              choices: ["Karena janji kosong tidak disetujui","Agar server bisa dimatikan","Agar reject promise asinkron diteruskan (di-passing) ke error handler terpusat express, menghindari crash aplikasi atau unhandled rejection","Untuk mendapatkan bonus poin TypeScript"],
              answerIndex: 2,
              explanation: "Node menghentikan aplikasi secara mendadak pada 'Unhandled Promise Rejection'. Meneruskannya via next(err) menjaga stabilitas proses."
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
            "# Penanganan File Upload & Background Worker\n\n" +
            "Menangani pengunggahan berkas (*file upload*) dan pengiriman email merupakan dua kebutuhan fitur yang hampir selalu ditemui pada proyek backend nyata. Namun, jika tidak diarsitekturkan dengan benar, pengunggahan berkas dapat menghabiskan ruang penyimpanan server dan pengiriman email dapat memperlambat waktu respon HTTP bagi pengguna.\n\n" +
            "## Strategi Penyimpanan Berkas: Local Disk vs Cloud Object Storage\n\n" +
            "Di lingkungan server cloud modern (seperti Vercel, Heroku, atau AWS EC2 Auto-Scaling), harddisk server bersifat **ephemeral** (sementara) — berkas yang disimpan di direktori lokal akan terhapus otomatis saat server me-restart atau melakukan deploy ulang.\n\n" +
            "| Dimensi Komparasi | Local Server Disk (`/public/uploads`) | Cloud Object Storage (AWS S3 / Cloudflare R2) |\n" +
            "|---|---|---|\n" +
            "| **Persistensi Data** | ❌ Ephemeral (Hilang saat restart/redeploy) | ✅ Persisten Terpisah dari Server Backend |\n" +
            "| **Skalabilitas Kapasitas**| ❌ Terbatas ukuran harddisk server | ✅ Tidak terbatas (Pay-as-you-go) |\n" +
            "| **Integrasi CDN** | ❌ Harus dikonfigurasi manual | ✅ Terintegrasi CDN Global (WebP/AVIF cepat) |\n" +
            "| **Keamanan File** | Rawan keterpaparan root direktori | Terproteksi dengan ACL & Presigned URL |\n\n" +
            "## Arsitektur Background Worker (BullMQ + Redis)\n\n" +
            "Pengiriman email lewat SMTP membutuhkan waktu 2-5 detik. Jika pengiriman email dilakukan secara langsung (*synchronous*) di dalam handler rute HTTP Express, pengguna akan tertahan menunggu loading peramban. Solusinya adalah memindahkan tugas lambat tersebut ke **Background Job Queue** berbasis **BullMQ** dan **Redis**.\n\n" +
            "```text\n" +
            "Express HTTP Handler  ===>  emailQueue.add('sendEmail', data)  ===> Respon 200 Instan (Fast!)\n" +
            "                                     |\n" +
            "                                     v (Enqueue Job Data)\n" +
            "                            [ Redis Memory Database ]\n" +
            "                                     |\n" +
            "                                     v (Dequeue Job Worker)\n" +
            "                        [ BullMQ Worker Process (Background) ]\n" +
            "                                     |\n" +
            "                                     v\n" +
            "                         Nodemailer SMTP Mail Server\n" +
            "```\n\n" +
            "## Pengunggahan Berkas Aman dengan Multer & Serving File Statis\n\n" +
            "- **`multer` Middleware:** Memproses bentuk payload `multipart/form-data` dari klien dan meletakkan informasi berkas terurai di `req.file` atau `req.files`.\n" +
            "- **Validasi Berkas:** Wajib memvalidasi ukuran berkas (*file size limit*) dan tipe MIME (*image/jpeg*, *image/png*) untuk mencegah unggahan skrip berbahaya.\n" +
            "- **`express.static('public')`:** Menyajikan berkas aset statis secara aman dari direktori khusus tanpa mengekspos direktori kode sumber.\n\n" +
            "## Kesalahan Umum & Jebakan (Pitfalls)\n\n" +
            "- **Menyimpan Upload di Local Disk Cloud:** Mengunggah foto profil pengguna ke folder lokal server di Heroku/Vercel yang menyebabkan berkas hilang saat server restart.\n" +
            "- **Pengiriman Email Synchronous:** Memanggil `await transporter.sendMail()` langsung di handler rute tanpa antrean background yang membuat koneksi HTTP berisiko mengalami timeout.\n" +
            "- **Membuka Folder Root Server:** Memanggil `app.use(express.static('.'))` yang berisiko mengekspos berkas rahasia `.env` ke publik.\n" +
            "- **Tanpa Limit Ukuran Berkas Multer:** Membiarkan pengguna mengunggah berkas video 5GB yang menghabiskan memori RAM server.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Pemisahan tugas pengolahan media ke Cloud Object Storage (S3) dan pemrosesan tugas berat ke antrean latar belakang (*background workers*) adalah arsitektur standar di tingkat industri untuk menjamin ketersediaan tinggi (*high availability*) sistem backend.",
        },
        {
          kind: "step",
          id: "node-7-1",
          title: "File Upload dengan Multer",
          explanation:
            "Multer adalah middleware Express yang digunakan untuk menangani pengunggahan berkas berformat data `multipart/form-data`. Metode `upload.single('avatar')` mengekstrak satu berkas dari bidang form bernama `'avatar'` dan menyimpannya ke objek `req.file`. Menggunakan Multer memudahkan backend menerima foto profil, dokumen PDF, atau lampiran dari antarmuka pengguna. Selalu sertakan batasan ukuran berkas dan filter tipe MIME untuk menjaga keamanan server. Jebakan utama pemula adalah lupa menambahkan atribut `enctype=\"multipart/form-data\"` pada form pengirim di sisi frontend.",
          example: {
            code: "const upload = { single: (name) => `Uploading ${name}` };\nconsole.log(upload.single('avatar'));",
            output: "Uploading avatar",
            note: "req.file memuat informasi nama file, ukuran, dan mimetype.",
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
            code: "class PutObjectCommand { constructor(opts) { this.opts = opts; } }\nconst cmd = new PutObjectCommand({ Bucket: 'b', Key: 'k', Body: 'd' });\nconsole.log(cmd.opts.Bucket);",
            output: "b",
            note: "Disk lokal server cloud bersifat ephemeral yang mudah terhapus saat restart.",
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
            code: "const transporter = { sendMail: async (opts) => ({ messageId: '123' }) };\nconst info = await transporter.sendMail({ from: 'a', to: 'b', subject: 's', html: 'h' });\nconsole.log(info.messageId);",
            output: "123",
            note: "Uji coba pengiriman email secara aman di dev environment menggunakan Mailtrap.",
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
            code: "const emailQueue = { add: async (name, data) => ({ id: 'job1' }) };\nconst job = await emailQueue.add('sendEmail', {});\nconsole.log(job.id);",
            output: "job1",
            note: "Worker BullMQ akan mengambil tugas dari Redis dan mengeksekusinya secara async.",
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
            code: "const app = { use(prefix, handler) { console.log(prefix); } };\napp.use('/assets', () => {});",
            output: "/assets",
            note: "Yang tercetak hanyalah prefix tempat berkas dipasang — Express sendiri tidak mencetak apa pun saat middleware statis didaftarkan. Jangan pernah menyajikan folder root server sebagai direktori statis: `.env` dan seluruh kode sumbermu ikut terbuka ke internet.",
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
              explanation: "Multer adalah middleware khusus untuk menangani multipart/form-data yang digunakan saat mengunggah file."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa menyimpan berkas terunggah (seperti foto profil) langsung di folder disk lokal server Heroku/Vercel sangat tidak direkomendasikan?",
              choices: ["Karena penyimpanannya bersifat ephemeral (sementara) dan akan terhapus otomatis tiap kali server melakukan restart atau redeploy","Karena berkas di disk lokal tidak bisa dikompresi","Karena Node.js melarang penggunaan disk","Karena disk lokal memerlukan lisensi berbayar"],
              answerIndex: 0,
              explanation: "Lingkungan server cloud menggunakan ephemeral filesystem; simpanlah berkas terunggah ke Cloud Object Storage seperti S3 atau Cloudflare R2."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi utama memasukkan pekerjaan pengiriman email ke dalam Background Queue (seperti BullMQ + Redis)?",
              choices: ["Mencegah request HTTP user terhenti (hanging) menunggu pengiriman email SMTP yang lambat selesai","Menjadikan isi email terenkripsi otomatis","Menghilangkan kebutuhan SMTP server","Mengubah format email menjadi PDF"],
              answerIndex: 0,
              explanation: "Background Queue mengeksekusi tugas berdurasi lama secara terpisah dari main thread request HTTP Express agar respon ke pengguna tetap instan."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Aplikasi Express kamu butuh menyajikan file gambar dari folder bernama 'public' ke pengguna secara langsung. Konfigurasi middleware apa yang tepat untuk melakukannya?",
              choices: ["app.use(express.static('public'))","app.use(multer('public'))","app.set('public')","app.get('public', res.download)"],
              answerIndex: 0,
              explanation: "express.static() adalah fungsi bawaan yang menyediakan kapabilitas file-serving statis untuk menyajikan direktori aset murni (HTML, CSS, gambar) dengan aman."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Untuk menjalankan pengiriman email terprogram di dalam aplikasi Express, paket Node standar apakah yang menjadi solusi andalan (sering dipadukan dengan layanan pengiriman SMTP)?",
              choices: ["Bcrypt","Nodemailer","Zod","Multer"],
              answerIndex: 1,
              explanation: "Nodemailer memfasilitasi pengiriman email dari dalam kode Node.js dengan menghubungkan ke SMTP/Transport layaknya server pengiriman."
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
            "# Strategi Testing Integration API\n\n" +
            "Menguji aplikasi backend secara manual menggunakan aplikasi seperti Postman untuk setiap perubahan kode sangat menyita waktu dan rentan melewatkan bug regresi. **Automated Testing** adalah jaring pengaman utama yang memastikan seluruh rute API, middleware, dan kueri database bekerja sesuai kontrak spesifikasi.\n\n" +
            "## Perbedaan Unit Test vs Integration Test di Backend\n\n" +
            "| Dimensi Komparasi | Unit Test | Integration Test (Supertest + Vitest) |\n" +
            "|---|---|---|\n" +
            "| **Cakupan Pengujian** | 1 Fungsi / Helper murni terisolasi | Alur penuh: HTTP Req -> Route -> Middleware -> Database |\n" +
            "| **Kecepatan Eksekusi** | Sangat Cepat (Hitungan milidetik) | Lebih Lambat (Memerlukan IO Database Test) |\n" +
            "| **Tingkat Kepercayaan**| Sedang (Banyak komponen di-mock) | Sangat Tinggi (Mendekati perilaku produksi nyata) |\n" +
            "| **Penggunaan Mocking** | Mock penuh pada semua dependensi | Menggunakan database penguji fisik terpisah |\n\n" +
            "## Alur Kerja Integration Test dengan Supertest\n\n" +
            "Pustaka `supertest` memungkinkan kita mensimulasikan permintaan HTTP ke instansi aplikasi Express tanpa harus menjalankan server HTTP fisik di port jaringan.\n\n" +
            "```text\n" +
            "Vitest / Jest Test Runner\n" +
            "       |\n" +
            "       v\n" +
            "Supertest request(app).post('/api/v1/users')\n" +
            "       |\n" +
            "       v (Memanggil Alur Express Langsung)\n" +
            "[ Express Router ] ===> [ Middleware Zod ] ===> [ Isolated Test DB (PostgreSQL) ]\n" +
            "                                                        |\n" +
            "                                                        v\n" +
            "Assert Respon: expect(res.status).toBe(201) & expect(res.body.success).toBe(true)\n" +
            "```\n\n" +
            "## Isolasi Database Penguji & Kait `beforeEach`\n\n" +
            "Setiap pengujian wajib bersifat **Independen (Flaky-Free)**. Jangan biarkan sisa data dari skenario pengujian 1 mengotori skenario pengujian 2. Selalu gunakan database penguji terpisah (misal `mydb_test`) dan hapus seluruh data tabel di kait `beforeEach()`.\n\n" +
            "```typescript\n" +
            "beforeEach(async () => {\n" +
            "  // Mengosongkan data sebelum setiap skenario test berjalan\n" +
            "  await prisma.user.deleteMany();\n" +
            "});\n" +
            "```\n\n" +
            "## Pengujian Alur Autentikasi & Header Bearer Token\n\n" +
            "Untuk menguji rute terproteksi, alur pengujian harus mengeksekusi login terlebih dahulu untuk mendapatkan token JWT, lalu menyuntikkan token tersebut ke header panggilan Supertest selanjutnya via `.set('Authorization', `Bearer ${token}`)`.\n\n" +
            "## Kesalahan Umum & Jebakan (Pitfalls)\n\n" +
            "- **Memanggil `app.listen()` di File Aplikasi:** Meng-import berkas yang memanggil `app.listen()` saat pengujian akan menyebabkan error *port in use*. Selalu pisahkan definisi `app` dari panggilan `listen`.\n" +
            "- **Menggunakan Database Utama:** Menjalankan skrip pengujian pada database utama yang dapat menghapus data produksi secara tidak sengaja.\n" +
            "- **Mengejar Metrik 100% Coverage Secara Buta:** Membuat pengujian dangkal hanya demi mencapai metrik angka 100% alih-alih menguji skenario kegagalan bisnis nyata.\n" +
            "- **Saling Ketergantungan Antar Test:** Mengandalkan urutan eksekusi berkas tes yang membuat tes mengalami kegagalan saat dijalankan secara acak.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Penulisan pengujian integrasi otomatis adalah bagian tak terpisahkan dari alur kerja CI/CD (*Continuous Integration*) di perusahaan teknologi. Pengujian otomatis yang bersih menjamin bahwa perubahan kode baru tidak merusak fitur lama saat proses rilis.",
        },
        {
          kind: "step",
          id: "node-8-1",
          title: "Unit vs Integration Test di Backend",
          explanation:
            "Pengujian perangkat lunak backend terbagi menjadi Unit Test dan Integration Test. Unit Test berfokus menguji satu fungsi atau helper terisolasi tanpa dependensi luar. Sebaliknya, Integration Test menggunakan pustaka seperti `supertest` untuk menguji alur penuh endpoint API dari penerimaan rute HTTP, verifikasi middleware, hingga kueri database fisik. Integration Test memberikan jaminan rasa aman paling tinggi bagi pengembang saat melakukan refactoring kode backend. Memahami kapan harus menulis unit test dan kapan menggunakan integration test menjaga efisiensi alur kerja pengujian. Jebakan utama pemula adalah hanya menulis unit test tanpa pernah menguji alur integrasi database.",
          example: {
            code: "function getTestType(isFullFlow) {\n  return isFullFlow ? 'integration' : 'unit';\n}\nconsole.log(getTestType(true));",
            output: "integration",
            note: "Integration test memberi rasa aman paling tinggi saat refactoring. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat fungsi `getTestType(isFullFlow)` yang mengembalikan `'integration'` jika `isFullFlow` bernilai `true` dan `'unit'` jika `false`.",
          starterCode: "// Tulis fungsi getTestType di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "isFullFlow\\s*\\?\\s*['\"]integration['\"]\\s*:\\s*['\"]unit['\"]",
              message: "Gunakan: isFullFlow ? 'integration' : 'unit'",
            },
          ],
          solution:
            "function getTestType(isFullFlow) {\n  return isFullFlow ? 'integration' : 'unit';\n}",
          susunKode: {
            question:
              "Susun fungsi penentu tipe pengujian yang mengembalikan string 'integration' jika flows utuh dan 'unit' jika komponen terisolasi.",
            potongan: [
              "function getTestType(isFullFlow) {\n",
              "  return isFullFlow",
              " ? 'integration'",
              " : 'unit';",
              "\n}",
            ],
            pengecoh: [
              " ? 'e2e'",
              " ? 'unit'",
              " : 'e2e';",
            ],
            pemisah: "",
            explanation:
              "Integration test menguji alur gabungan antar komponen backend, sedangkan unit test menguji satu fungsi secara terisolasi. Keping 'e2e' menggoda karena istilahnya memang ada di dunia nyata, tetapi end-to-end test menjalankan aplikasi lengkap beserta antarmukanya — bukan yang sedang dibedakan di sini. Keping ? 'unit' keliru karena menukar cabang ternary: kondisi isFullFlow yang bernilai true justru menandakan alur penuh, jadi cabang pertama harus integration. Jebakan ini sering lolos dari mata karena kodenya tetap berjalan tanpa error, hanya hasilnya terbalik.",
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
            code: "const prisma = { user: { deleteMany: async () => 'Cleaned' } };\nconsole.log(await prisma.user.deleteMany());",
            output: "Cleaned",
            note: "Gunakan database PostgreSQL terpisah untuk pengujian (misal mydb_test).",
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
            code: "const reqObj = { set(k, v) { console.log(`${k}: ${v}`); return this; } };\nreqObj.set('Authorization', 'Bearer abc');",
            output: "Authorization: Bearer abc",
            note: "Uji juga kondisi jika token kadaluarsa / tidak sah.",
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
              explanation: "supertest menguji alur rute Express secara cepat dengan mengabstraksi permintaan HTTP langsung ke fungsi aplikasi."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa pembersihan (cleanup) data di database pengujian wajib dilakukan sebelum/sesudah setiap test case berjalan?",
              choices: ["Agar setiap test case berjalan secara independen tanpa terpengaruh oleh sisa data dari test case sebelumnya","Agar ukuran database menjadi 0 byte","Karena database akan otomatis terkunci jika tidak dibersihkan","Untuk mempercepat jaringan internet"],
              answerIndex: 0,
              explanation: "Test case yang baik harus terisolasi; data sisa dari test sebelumnya dapat menyebabkan flaky test (hasil test tidak konsisten)."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa tujuan utama penulisan Integration Test pada API backend?",
              choices: ["Memverifikasi alur penuh dari HTTP request, middleware, controller, hingga interaksi database secara nyata","Memastikan warna tampilan tombol di frontend sudah sesuai","Mengecek apakah kodingan ditulis dalam bahasa Inggris","Mengganti tugas server deployment"],
              answerIndex: 0,
              explanation: "Integration Test menjamin bahwa seluruh komponen arsitektur backend terhubung dan bekerja dengan benar sesuai kontrak API."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Dalam pengujian route terproteksi dengan Supertest, kamu harus mengatur header otorisasi simulasi pada Request HTTP. Bagaimana cara melakukan hal tersebut?",
              choices: ["Dengan mendeklarasikan variabel global token","Melampirkannya melalui URL sebagai string params","Menggunakan chain method `.set('Authorization', 'Bearer <token>')` di supertest","Menonaktifkan otorisasi secara paksa di router"],
              answerIndex: 2,
              explanation: "Objek supertest memungkinkan kita mengatur header secara kustom via '.set()' yang mereplikasikan pengiriman token seperti client sungguhan."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Saat mengukur kualitas pengujian dari Code Coverage, apa saran yang ditekankan oleh arsitek perangkat lunak berpengalaman?",
              choices: ["Mendapatkan skor pas 100% adalah kewajiban mutlak","Mencapai angka 10% sudah lebih dari cukup","Lebih difokuskan pada pengujian jalur penting bisnis (Happy Path + Validasi Error) alih-alih hanya mengejar angka metrik acak 100%","Coverage hanya diukur untuk Frontend"],
              answerIndex: 2,
              explanation: "Mengejar metrik buatan (100% coverage) cenderung menghasilkan tes rapuh dan redundan; memfokuskan pengujian pada skenario dunia nyata memberi perlindungan bernilai tinggi."
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
            "# Keamanan Backend & Hardening OWASP\n\n" +
            "Keamanan backend adalah disiplin pencegahan yang melindungi infrastruktur server, data pengguna, dan ketersediaan layanan dari ancaman eksploitasi peretas. Menurut **OWASP (Open Web Application Security Project)**, sebagian besar insiden peretasan aplikasi backend disebabkan oleh celah keamanan klasik yang sebenarnya sangat mudah dicegah.\n\n" +
            "## 5 Ancaman Kerentanan Utama OWASP & Solusinya\n\n" +
            "| Kerentanan OWASP | Risiko Ancaman | Solusi Praktis Node.js / Express |\n" +
            "|---|---|---|\n" +
            "| **SQL Injection** | Penyuntikan kode SQL mentah via input pengguna untuk membobol DB | Gunakan **ORM Prisma** / Parameterized Query |\n" +
            "| **XSS (Cross-Site Scripting)** | Penyuntikan tag `<script>` berbahaya yang mengeksekusi skrip di peramban | Sanitasi masukan HTML & aktifkan **Helmet CSP** |\n" +
            "| **Brute Force Attack** | Pencobaan kata sandi masif ribuan kali per detik secara otomatis | Terapkan **`express-rate-limit`** pada rute login |\n" +
            "| **Unrestricted CORS** | Pengambilan data API dari domain asing tak dikenal | Atur whitelist domain spesifik pada **`cors()`** |\n" +
            "| **Secret Leakage** | Kebocoran kunci API rahasia ke repositori publik | Masukkan berkas **`.env`** ke berkas **`.gitignore`** |\n\n" +
            "## Arsitektur Proteksi Middleware Keamanan Express\n\n" +
            "Urutan pemasangan middleware keamanan di aplikasi Express menentukan efektivitas perlindungan server:\n\n" +
            "```text\n" +
            "Client HTTP Request\n" +
            "       |\n" +
            "       v\n" +
            "[ 1. Helmet Headers ]      ===> Menyuntikkan 15+ HTTP Security Headers (anti-clickjacking/XSS)\n" +
            "       |\n" +
            "       v\n" +
            "[ 2. Rate Limiter ]       ===> Membatasi max 100 req / 15 menit per IP (anti-DDoS/Brute Force)\n" +
            "       |\n" +
            "       v\n" +
            "[ 3. CORS Middleware ]     ===> Menyaring hanya domain terdaftar yang boleh mengambil data\n" +
            "       |\n" +
            "       v\n" +
            "[ 4. Zod Input Sanitize ]  ===> Menolak payload bertipe tidak sesuai\n" +
            "       |\n" +
            "       v\n" +
            "Express Route Controller\n" +
            "```\n\n" +
            "## Pemahaman CORS (Cross-Origin Resource Sharing)\n\n" +
            "CORS adalah mekanisme keamanan berbasis peramban yang membatasi aplikasi web di satu domain (misal `https://myfrontend.com`) mengambil data dari backend di domain lain (misal `https://api.mybackend.com`).\n\n" +
            "```typescript\n" +
            "// ❌ SANGAT BERBAHAYA di Produksi (Mengizinkan Semua Domain):\n" +
            "app.use(cors({ origin: '*' }));\n\n" +
            "// ✅ AMAN & TERPROTEKSI (Hanya Domain Resmi):\n" +
            "app.use(cors({\n" +
            "  origin: 'https://myfrontend.com',\n" +
            "  credentials: true,\n" +
            "}));\n" +
            "```\n\n" +
            "## Checklist Keamanan Pre-Deploy Backend\n\n" +
            "1. ✅ **Matikan Stacktrace:** Pastikan `NODE_ENV=production` aktif.\n" +
            "2. ✅ **Sembunyikan Rahasia:** Pastikan berkas `.env` ada di `.gitignore`.\n" +
            "3. ✅ **Aktifkan Helmet & CORS Whitelist.**\n" +
            "4. ✅ **Bcrypt Password:** Gunakan salt rounds minimal 10.\n" +
            "5. ✅ **Rate Limiting:** Pasang pembatas jumlah request pada rute autentikasi.\n\n" +
            "## Kesalahan Umum & Jebakan (Pitfalls)\n\n" +
            "- **Menggabungkan String Query SQL:** Menggabungkan variabel input pengguna secara langsung ke string `SELECT * FROM users WHERE email = '` + input + `'` yang membuka celah SQL Injection.\n" +
            "- **`cors({ origin: '*' })` dengan Credentials:** Peramban modern akan menolak mengirimkan cookie jika origin diatur wildcard `*`.\n" +
            "- **Mengabaikan Rate Limiting:** Membiarkan endpoint `POST /api/v1/login` tanpa pembatas request per detik.\n" +
            "- **Menyimpan Kunci Rahasia di Git:** Terlanjur melakukan commit berkas `.env` yang berisi rahasia ke repositori GitHub publik.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Pemahaman mendalam seputar praktik *backend hardening* dan standar keamanan OWASP adalah kualifikasi wajib bagi Software Engineer. Keterampilan ini menjamin sistem backend yang dibangun bebas dari celah eksploitasi dan memenuhi standar regulasi perlindungan data pribadi.",
        },
        {
          kind: "step",
          id: "node-9-1",
          title: "Mencegah SQL Injection",
          explanation:
            "SQL Injection adalah ancaman keamanan di mana penyerang menyuntikkan perintah SQL jahat melalui kolom input pengguna akibat penggabungan string query mentah secara langsung. Menggunakan ORM seperti Prisma atau kueri terparameter (*parameterized query*) mencegah ancaman ini karena input pengguna diperlakukan secara ketat sebagai nilai data literal, bukan sebagai kode executable SQL. Mengamankan kueri database merupakan langkah wajib pertama dalam pengamanan backend. Selalu hindari penggabungan string langsung saat menyusun kueri database. Jebakan utama pemula adalah menggabungkan variabel string pengguna langsung ke dalam perintah SQL mentah.",
          example: {
            code: "function isSafeQuery(usesORM) {\n  return Boolean(usesORM);\n}\nconsole.log(isSafeQuery(true));",
            output: "true",
            note: "Jangan pernah menggabungkan variabel string ke query SQL mentah! Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat fungsi `isSafeQuery(usesORM)` yang mengembalikan nilai boolean dari parameter `usesORM`.",
          starterCode: "// Tulis fungsi isSafeQuery di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "Boolean\\s*\\(\\s*usesORM\\s*\\)|return\\s+usesORM",
              message: "Kembalikan nilai boolean usesORM",
            },
          ],
          solution:
            "function isSafeQuery(usesORM) {\n  return Boolean(usesORM);\n}",
          susunKode: {
            question:
              "Susun fungsi validator keamanan kueri yang mengembalikan boolean keberadaan pengunaan ORM.",
            potongan: [
              "function isSafeQuery(usesORM) {",
              "  return Boolean(usesORM);",
              "}",
            ],
            pengecoh: [
              "  return String(usesORM);",
              "  return Number(usesORM);",
            ],
            pemisah: "\n",
            explanation:
              "Penggunaan ORM seperti Prisma secara otomatis melakukan parameterisasi kueri SQL sehingga aman dari SQL Injection. Keping String(usesORM) keliru karena mengembalikan tipe data string bukan boolean. Keping Number(usesORM) keliru tipe data angka.",
          },
        },
        {
          kind: "step",
          id: "node-9-2",
          title: "Mencegah XSS (Cross-Site Scripting)",
          explanation:
            "Cross-Site Scripting (XSS) terjadi saat penyerang berhasil menyuntikkan skrip HTML/JavaScript berbahaya (`<script>`) ke dalam masukan aplikasi yang kemudian dirender oleh peramban pengguna lain. Melakukan sanitasi teks masukan menggunakan ekspresi reguler atau pustaka pembersih HTML mencegah skrip eksekusi tersebut berjalan di sisi peramban. Kerangka kerja modern seperti React secara otomatis melakukan *escaping* pada string, namun sanitasi tetap wajib diterapkan di sisi backend. Menjaga kebersihan data tersimpan melindungi sesi pengguna lain dari ancaman pencurian cookie. Jebakan fatal adalah merender teks dari masukan pengguna secara mentah menggunakan `innerHTML`. Satu peringatan penting: latihan ini memakai regex agar mekanismenya terlihat jelas, tetapi **regex bukan sanitasi yang layak produksi** — varian seperti `<scr<script>ipt>` atau `<img onerror=...>` tetap lolos. Di proyek nyata, pakai pustaka teruji seperti `sanitize-html` atau DOMPurify.",
          example: {
            code: "function sanitizeHtmlInput(str) {\n  return str.replace(/<script.*?>.*?<\\/script>/gi, '');\n}\nconsole.log(sanitizeHtmlInput('<script>bad()</script>Hi'));",
            output: "Hi",
            note: "React dan template engine modern otomatis melakukan escaping pada output string. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat fungsi `sanitizeHtmlInput(inputString)` yang menghapus tag `<script>` dari string menggunakan `inputString.replace(/<script.*?>.*?<\\/script>/gi, '')`.",
          starterCode: "// Tulis fungsi sanitizeHtmlInput di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "replace\\(\\s*/<script\\.\\*\\?>\\.\\*\\?<\\\\/script>/gi\\s*,\\s*['\"]['\"]\\s*\\)",
              message: "Gunakan replace dengan regex script tag",
            },
          ],
          solution:
            "function sanitizeHtmlInput(inputString) {\n  return inputString.replace(/<script.*?>.*?<\\/script>/gi, '');\n}",
          susunKode: {
            question:
              "Susun fungsi pembersihan sanitasi tag skrip berbahaya untuk mencegah serangan Cross-Site Scripting (XSS).",
            potongan: [
              "function sanitizeHtmlInput(inputString) {\n",
              "  return inputString",
              ".replace(",
              "/<script.*?>.*?<\\/script>/gi",
              ", '');",
              "\n}",
            ],
            pengecoh: [
              ".replaceAll(",
              "/<script>/gi",
              "/<script.*?>/gi",
            ],
            pemisah: "",
            explanation:
              "Sanitasi masukan membuang pasangan tag skrip beserta isinya, dengan flag g agar semua kemunculan kena dan i agar SCRIPT huruf besar ikut tertangkap. Keping .replaceAll( menggoda karena namanya terdengar lebih menyeluruh, padahal dengan regex ber-flag g hasilnya sama — dan replaceAll justru melempar TypeError bila regexnya TIDAK ber-flag g. Keping /<script>/gi keliru karena hanya cocok pada tag polos, sehingga <script src=x> lolos. Keping /<script.*?>/gi keliru karena membuang tag pembuka saja dan meninggalkan isi skrip beserta penutupnya di dalam teks.",
          },
        },
        {
          kind: "step",
          id: "node-9-3",
          title: "Konfigurasi CORS (Cross-Origin Resource Sharing)",
          explanation:
            "CORS adalah mekanisme keamanan berbasis peramban yang mengontrol domain web mana saja yang diizinkan mengambil data dari API backend milikmu. Menggunakan middleware `cors({ origin: 'https://myapp.com' })` membatasi akses API hanya untuk domain antarmuka resmi aplikasi web kamu. Hindari penggunaan asal wildcard `origin: '*'` pada API produksi yang memproses data sensitif atau cookie autentikasi. Mengonfigurasi CORS dengan tepat mencegah aplikasi web asing yang tidak dikenal mengambil data backend-mu secara ilegal. Jebakan umum adalah menyalin konfigurasi `origin: '*'` secara sembarangan di lingkungan produksi.",
          example: {
            code: "import cors from 'cors';\nconst app = { use(fn) { console.log('CORS configured'); } };\napp.use(cors({ origin: 'https://myapp.com' }));",
            output: "CORS configured",
            note: "Jangan gunakan origin: '*' pada API terproteksi dengan credential!",
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
            code: "const app = { use(path, fn) { console.log(path); } };\napp.use('/api/v1/login', {});",
            output: "/api/v1/login",
            note: "Melindungi endpoint sensitif dari serangan brute force.",
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
            code: "import helmet from 'helmet';\nconst app = { use(fn) { console.log('Helmet enabled'); } };\napp.use(helmet());",
            output: "Helmet enabled",
            note: "Langkah wajib untuk pengamanan awal aplikasi Express.",
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
            "Manajemen kredensial rahasia mewajibkan agar berkas konfig `.env` yang menyimpan kata sandi database dan kunci API **SELALU** dicantumkan di dalam berkas `.gitignore`. Jika berkas rahasia ini ter-push ke repositori git publik, bot pemindai peretas dapat langsung mencuri kredensial server milikmu hanya dalam hitungan detik. Gunakan berkas templat `.env.example` tanpa nilai rahasia untuk dibagikan ke anggota tim lain. Menjaga kerahasiaan kredensial adalah aturan keselamatan paling fundamental dalam pengembangan perangkat lunak. Jebakan paling fatal di dunia nyata adalah tidak sengaja men-commit berkas `.env` ke GitHub publik.",
          example: {
            code: "const ignoredFiles = ['.env', 'node_modules'];\nconsole.log(ignoredFiles.includes('.env'));",
            output: "true",
            note: "Gunakan .env.example untuk membagikan templat variabel env tanpa rahasia.",
          },
          instruction:
            "Tuliskan nama file environment rahasia `.env` yang wajib dimasukkan ke dalam daftar `.gitignore`.",
          starterCode: "// Tulis abaikan file rahasia di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\.env",
              message: "Tuliskan: .env",
            },
          ],
          solution: ".env",
          susunKode: {
            question:
              "Susun entri berkas .gitignore untuk memastikan file kredensial rahasia .env tidak terikut ke repository Git.",
            potongan: [
              ".",
              "env",
            ],
            pengecoh: [
              "_",
              "config",
            ],
            pemisah: "",
            explanation:
              "Mencantumkan nama file .env di dalam .gitignore adalah aturan krusial agar kunci rahasia API dan kata sandi database tidak terpublikasi ke repository VCS. Keping garis bawah _ dan config keliru nama berkas kredensial.",
          },
        },
        {
          kind: "step",
          id: "node-9-7",
          title: "Checklist Keamanan Pre-Deploy",
          explanation:
            "Daftar periksa (*checklist*) keamanan pre-deploy adalah serangkaian verifikasi wajib sebelum backend dirilis ke server produksi: 1. Mematikan rincian stacktrace kesalahan (`NODE_ENV=production`), 2. Mengaktifkan Helmet dan whitelist CORS, 3. Menggunakan bcrypt untuk enkripsi kata sandi, 4. Memasang Rate Limiting, dan 5. Memastikan berkas `.env` aman. Membuat fungsi verifikasi otomatis seperti `checkSecurityReadiness(checksArray)` menggunakan `checksArray.every(c => c === true)` membantu memastikan seluruh prasyarat keamanan terpenuhi. Melakukan audit berkala menjaga integritas sistem backend secara berkelanjutan. Jebakan utama adalah terburu-buru melakukan rilis tanpa memverifikasi checklist keamanan.",
          example: {
            code: "function checkSecurityReadiness(checks) {\n  return checks.every(c => c === true);\n}\nconsole.log(checkSecurityReadiness([true, true, true]));",
            output: "true",
            note: "Jalankan pengujian keamanan secara berkala. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat fungsi `checkSecurityReadiness(checksArray)` yang mengembalikan `true` hanya bila SELURUH elemen boolean di dalam `checksArray` bernilai `true`. Pakai metode array yang menguji semua elemen sekaligus, lalu kembalikan hasilnya.",
          starterCode: "// Tulis fungsi checkSecurityReadiness di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "checksArray\\.every\\(",
              message:
                "Metode array yang menuntut SEMUA elemen memenuhi syarat adalah `.every()`. Jangan tertukar dengan `.some()`, yang cukup satu elemen lolos — untuk checklist keamanan, itu artinya rilis dianggap siap padahal empat dari lima syarat belum terpenuhi.",
            },
            {
              pattern: "return\\s+checksArray\\.every\\(",
              message:
                "Kembalikan hasilnya dengan `return`. `.every()` sudah menghasilkan boolean, jadi tidak perlu dibungkus `if` lagi.",
            },
          ],
          solution:
            "function checkSecurityReadiness(checksArray) {\n  return checksArray.every(c => c === true);\n}",
          susunKode: {
            question:
              "Susun fungsi verifikasi kesiapan checklist keamanan pre-deploy yang memastikan seluruh pemeriksaan bernilai true.",
            potongan: [
              "function checkSecurityReadiness(checksArray) {",
              "  return checksArray.every(c => c === true);",
              "}",
            ],
            pengecoh: [
              "  return checksArray.some(c => c === true);",
              "  return checksArray.filter(c => c === true);",
            ],
            pemisah: "\n",
            explanation:
              "Metode .every() memastikan SEMUA item dalam array memenuhi kriteria keamanan (semua bernilai true). Keping .some keliru karena .some mengembalikan true meskipun hanya satu elemen yang lulus. Keping .filter keliru karena mengembalikan array, bukan boolean.",
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
              explanation: "Helmet mengkonfigurasi HTTP headers keamanan standar untuk mengamankan aplikasi Express secara instan."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa mengaktifkan Rate Limiting (seperti express-rate-limit) sangat penting pada endpoint login API?",
              choices: ["Untuk mencegah serangan Brute Force di mana peretas mencoba ribuan kombinasi password per detik secara otomatis","Agar database tidak pernah penuh","Untuk mengompresi response JSON menjadi Gzip","Agar user tidak perlu menggunakan password"],
              answerIndex: 0,
              explanation: "Rate limiting membatasi jumlah request per IP dalam jendela waktu tertentu, menggagalkan upaya pencobaan password masif secara paksa."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa risiko keamanan terbesar jika berkas .env tidak sengaja ter-push ke repository GitHub publik?",
              choices: ["Kredensial rahasia (seperti password database, API key, JWT secret) dapat dicuri dan disalahgunakan oleh siapa saja","Repository GitHub akan terhapus","Ukuran kode repository membengkak 1GB","Node.js tidak bisa lagi di-install"],
              answerIndex: 0,
              explanation: "File .env menyimpan rahasia tingkat tinggi. Jika bocor ke publik, peretas dapat mengakses database dan infrastruktur server secara penuh."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Ketika melayani data lintas domain dari server Node ke aplikasi React Frontend yang beda origin (misal Frontend port 3000, Backend port 8000), pengaturan keamanan apakah yang harus dieksekusi agar tidak ditolak oleh Browser?",
              choices: ["Bypass Router","Mengganti SSL Certificate","Mengkonfigurasi aturan CORS (Cross-Origin Resource Sharing) middleware di backend","Menghapus .env File"],
              answerIndex: 2,
              explanation: "CORS adalah mekanisme keamanan berbasis Browser yang mengatur asal domain (origin) mana saja yang disetujui server untuk menelusuri API."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Sebuah celah di mana penyerang berhasil membubuhi payload jahat `<script>alert('Ter-hack')</script>` dalam isi input komentar, lalu dijalankan oleh browser pengguna lain, disebut serangan apa?",
              choices: ["SQL Injection","XSS (Cross-Site Scripting)","DDoS","CSRF"],
              answerIndex: 1,
              explanation: "Cross-Site Scripting (XSS) adalah ancaman keamanan dari masukan (input) yang tidak di-sanitasi dengan semestinya, sehingga dirender sebagai kode script mentah di mesin peramban pengguna lain."
            }
          ],
        },
      ],
    },
  ],
};
