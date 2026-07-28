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
      slug: "node-runtime",
      title: "Node.js Runtime & npm",
      description:
        "JavaScript keluar dari browser: file system, module, dan ekosistem npm.",
      topics: [
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
              pattern: "console\\.log\\(\\s*process\\.version\\s*\\)\\s*;?",
              message: "Tuliskan: console.log(process.version);",
            },
          ],
          solution: "console.log(process.version);",
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
              pattern: "export\\s+const\\s+multiply\\s*=\\s*\\(\\s*a\\s*,\\s*b\\s*\\)\\s*=>\\s*a\\s*\\*\\s*b\\s*;?",
              message: "Definisikan: export const multiply = (a, b) => a * b;",
            },
          ],
          solution: "export const multiply = (a, b) => a * b;",
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
              pattern: "npm\\s+i(nstall)?\\s+zod",
              message: "Gunakan perintah: npm install zod",
            },
          ],
          solution: "npm install zod",
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
              pattern: "await\\s+fs\\.writeFile\\(\\s*['\"]file\\.txt['\"]\\s*,\\s*['\"]Halo['\"]\\s*\\)",
              message: 'Gunakan: await fs.writeFile("file.txt", "Halo");',
            },
          ],
          solution: 'await fs.writeFile("file.txt", "Halo");',
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
              pattern: "const\\s+dbUrl\\s*=\\s*process\\.env\\.DATABASE_URL\\s*;?",
              message: "Gunakan: const dbUrl = process.env.DATABASE_URL;",
            },
          ],
          solution: "const dbUrl = process.env.DATABASE_URL;",
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
              pattern: "emitter\\.emit\\(\\s*['\"]login['\"]\\s*,\\s*data\\s*\\)\\s*;?",
              message: 'Gunakan: emitter.emit("login", data);',
            },
          ],
          solution: 'emitter.emit("login", data);',
        },
        {
          kind: "step",
          id: "node-1-7",
          title: "Development Runner: tsx & watch mode",
          explanation:
            "Selama proses pengembangan backend, mengeksekusi ulang server secara manual setiap kali mengubah baris kode sangat tidak efisien. Pustaka seperti `tsx` menyediakan pembaca TypeScript super cepat yang dilengkapi opsi `--watch` untuk memantau perubahan berkas dan me-restart server secara instan. Dibandingkan perkakas lama seperti `nodemone` atau `ts-node`, `tsx` memanfaatkan kompilator esbuild berbasis Go sehingga proses eksekusi kode terasa sangat cepat. Menggunakan penguji otomatis ini meningkatkan produktivitas alur kerja harian pengembang backend secara signifikan. Jebakan utama adalah menjalankan runner pengembang seperti `tsx --watch` di server produksi asli.",
          example: {
            code: "npx tsx --watch src/index.ts",
            output: "[tsx] Watching for changes in src/index.ts...",
            note: "tsx adalah pengganti ts-node/nodemon modern yang sangat cepat.",
          },
          instruction:
            "Tuliskan perintah CLI npx untuk menjalankan berkas `src/server.ts` menggunakan pembaca `tsx` dengan opsi pemantau berkas otomatis (`--watch`).",
          starterCode: "# Tulis perintah npx tsx di sini\n",
          language: "text",
          tests: [
            {
              pattern: "npx\\s+tsx\\s+--watch\\s+src/server\\.ts",
              message: "Gunakan: npx tsx --watch src/server.ts",
            },
          ],
          solution: "npx tsx --watch src/server.ts",
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
            "2. **`res` (Response):** Objek yang digunakan untuk menyusun balasan balasan server ke klien (`res.status()`, `res.json()`, `res.send()`).\n" +
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
              pattern: "const\\s+app\\s*=\\s*express\\(\\)\\s*;?",
              message: "Tuliskan: const app = express();",
            },
          ],
          solution: "const app = express();",
        },
        {
          kind: "step",
          id: "node-2-2",
          title: "Express Route: GET, POST, PUT, DELETE",
          explanation:
            "Rute Express mencocokkan kata kerja HTTP (GET, POST, PUT, DELETE) dan jalur URL path dengan fungsi penangan (*route handler*). Penangan rute ini menerima dua parameter utama `(req, res)` tempat kamu membaca data masuk dan mengembalikan respons HTTP. Menggunakan method yang sesuai secara semantik membantu klien (seperti aplikasi Frontend React) memahami tujuan dari setiap endpoint API. Metode `res.send()` atau `res.json()` otomatis menetapkan header respon dan menutup siklus komunikasi HTTP. Jebakan utama pemula adalah lupa menyertakan karakter garing awal `/` pada definisi jalur path URL.",
          example: {
            code: "import express from 'express';\nconst app = express();\napp.get('/health', (req, res) => res.send('OK'));",
            output: "OK",
            note: "res.json() otomatis mengatur Content-Type ke application/json. Catatan jujur: panel preview tidak menjalankan Node.js (kode ini butuh server dan modul bawaan Node), jadi tidak ada keluaran yang muncul di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Buat rute GET pada path `\"/ping\"` yang merespon dengan mengirimkan string `'pong'` menggunakan `res.send`.",
          starterCode: "// Tulis route ping di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "app\\.get\\(\\s*['\"]/ping['\"]\\s*,\\s*\\(\\s*req\\s*,\\s*res\\s*\\)\\s*=>\\s*res\\.send\\(\\s*['\"]pong['\"]\\s*\\)\\s*\\)\\s*;?",
              message: "Definisikan route ping sesuai instruksi",
            },
          ],
          solution: 'app.get("/ping", (req, res) => res.send("pong"));',
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
              pattern: "const\\s+\\{\\s*id\\s*\\}\\s*=\\s*req\\.params\\s*;?",
              message: "Gunakan: const { id } = req.params;",
            },
          ],
          solution: "const { id } = req.params;",
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
              pattern: "res\\.status\\(\\s*404\\s*\\)\\.json\\(\\s*\\{\\s*error\\s*:\\s*['\"]Not Found['\"]\\s*\\}\\s*\\)\\s*;?",
              message: 'Gunakan: res.status(404).json({ error: "Not Found" });',
            },
          ],
          solution: 'res.status(404).json({ error: "Not Found" });',
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
              pattern: "const\\s+router\\s*=\\s*Router\\(\\)\\s*;?",
              message: "Gunakan: const router = Router();",
            },
          ],
          solution: "const router = Router();",
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
              pattern: "app\\.use\\(\\s*\\(\\s*req\\s*,\\s*res\\s*\\)\\s*=>\\s*\\{\\s*res\\.status\\(\\s*404\\s*\\)",
              message: "Definisikan handler 404 di akhir middleware chain",
            },
          ],
          solution: 'app.use((req, res) => { res.status(404).json({ error: "404" }); });',
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
            "Tuliskan perintah balasan Express untuk mengembalikan HTTP status 204 No Content tanpa payload body (`res.status(204).send()`).",
          starterCode: "// Tulis res.status(204) di sini\n",
          language: "text",
          tests: [
            {
              pattern: "res\\.status\\(\\s*204\\s*\\)\\.send\\(\\)\\s*;?",
              message: "Gunakan: res.status(204).send();",
            },
          ],
          solution: "res.status(204).send();",
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
              pattern: "res\\.json\\(\\s*\\{\\s*success\\s*:\\s*true\\s*,\\s*data\\s*:\\s*users\\s*\\}\\s*\\)\\s*;?",
              message: "Gunakan: res.json({ success: true, data: users });",
            },
          ],
          solution: "res.json({ success: true, data: users });",
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
              pattern: "app\\.use\\(\\s*['\"]/api/v1/posts['\"]\\s*,\\s*postRouter\\s*\\)\\s*;?",
              message: "Gunakan: app.use('/api/v1/posts', postRouter);",
            },
          ],
          solution: "app.use('/api/v1/posts', postRouter);",
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
              pattern: "const\\s+limit\\s*=\\s*Number\\(\\s*req\\.query\\.limit\\s*\\)\\s*\\|\\|\\s*10\\s*;?",
              message: "Gunakan: const limit = Number(req.query.limit) || 10;",
            },
          ],
          solution: "const limit = Number(req.query.limit) || 10;",
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
            "Buat fungsi `isIdempotentMethod(httpMethod)` yang mengembalikan `true` jika metode HTTP adalah `'GET'`, `'PUT'`, atau `'DELETE'`. Gunakan `['GET', 'PUT', 'DELETE'].includes(httpMethod)`.",
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
            output: "Your database is now in sync with your schema.",
            note: "Atribut @unique menjamin email tidak bisa duplikat di database.",
          },
          instruction:
            "Tuliskan perintah CLI npx prisma untuk membuat dan menerapkan migrasi database pada mode pengembangan.",
          starterCode: "# Tulis perintah prisma migrate di sini\n",
          language: "text",
          tests: [
            {
              pattern: "npx\\s+prisma\\s+migrate\\s+dev",
              message: "Gunakan: npx prisma migrate dev",
            },
          ],
          solution: "npx prisma migrate dev",
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
              pattern: "await\\s+prisma\\.user\\.findUnique\\(\\s*\\{\\s*where\\s*:\\s*\\{\\s*id\\s*\\}\\s*\\}\\s*\\)",
              message: "Gunakan: await prisma.user.findUnique({ where: { id } });",
            },
          ],
          solution: "await prisma.user.findUnique({ where: { id } });",
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
              pattern: "await\\s+prisma\\.\\$transaction\\(\\s*\\[\\s*\\]\\s*\\)",
              message: "Gunakan: await prisma.$transaction([]);",
            },
          ],
          solution: "await prisma.$transaction([]);",
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
          starterCode: "# Tulis perintah prisma studio di sini\n",
          language: "text",
          tests: [
            {
              pattern: "npx\\s+prisma\\s+studio",
              message: "Gunakan: npx prisma studio",
            },
          ],
          solution: "npx prisma studio",
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
            "JSON Web Token (JWT) terdiri dari 3 bagian yang dipisahkan titik: `Header.Payload.Signature`. Server menandatangani token menggunakan kunci rahasia (*secret key*). Klien menyimpan token ini dan mengembangkannya di header `Authorization: Bearer <token>` pada setiap request.\n\n" +
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
              pattern: "const\\s+isValid\\s*=\\s*await\\s+bcrypt\\.compare\\(\\s*input\\s*,\\s*hash\\s*\\)\\s*;?",
              message: "Gunakan: const isValid = await bcrypt.compare(input, hash);",
            },
          ],
          solution: "const isValid = await bcrypt.compare(input, hash);",
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
              pattern: "const\\s+token\\s*=\\s*jwt\\.sign\\(\\s*\\{\\s*id\\s*:\\s*user\\.id\\s*\\}\\s*,\\s*secret\\s*,\\s*\\{\\s*expiresIn\\s*:\\s*['\"]1h['\"]\\s*\\}\\s*\\)\\s*;?",
              message: "Gunakan: const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });",
            },
          ],
          solution: "const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });",
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
              pattern: "req\\.session\\.userId\\s*=\\s*user\\.id\\s*;?",
              message: "Tuliskan: req.session.userId = user.id;",
            },
          ],
          solution: "req.session.userId = user.id;",
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
            "Periksa keberadaan token. Jika variabel `token` tidak ada (falsy), hentikan proses dengan mengembalikan status code 401 (`res.sendStatus(401)`).",
          starterCode: "// Tulis pengecekan token di sini\n",
          language: "text",
          tests: [
            {
              pattern: "if\\s*\\(\\s*!token\\s*\\)\\s*return\\s+res\\.sendStatus\\(\\s*401\\s*\\)\\s*;?",
              message: "Gunakan: if (!token) return res.sendStatus(401);",
            },
          ],
          solution: "if (!token) return res.sendStatus(401);",
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
              pattern: "res\\.cookie\\(\\s*['\"]token['\"]\\s*,\\s*token\\s*,\\s*\\{\\s*httpOnly\\s*:\\s*true\\s*\\}\\s*\\)\\s*;?",
              message: "Gunakan: res.cookie('token', token, { httpOnly: true });",
            },
          ],
          solution: "res.cookie('token', token, { httpOnly: true });",
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
              pattern: "res\\.clearCookie\\(\\s*['\"]token['\"]\\s*\\)\\s*;?",
              message: "Tuliskan: res.clearCookie('token');",
            },
          ],
          solution: "res.clearCookie('token');",
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
              pattern: "const\\s+data\\s*=\\s*UserSchema\\.parse\\(\\s*req\\.body\\s*\\)\\s*;?",
              message: "Gunakan: const data = UserSchema.parse(req.body);",
            },
          ],
          solution: "const data = UserSchema.parse(req.body);",
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
              pattern: "throw\\s+new\\s+AppError\\(\\s*['\"]Unauthorized['\"]\\s*,\\s*401\\s*\\)\\s*;?",
              message: "Gunakan: throw new AppError('Unauthorized', 401);",
            },
          ],
          solution: "throw new AppError('Unauthorized', 401);",
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
              pattern: "logger\\.info\\(\\s*['\"]Server started['\"]\\s*\\)\\s*;?",
              message: 'Gunakan: logger.info("Server started");',
            },
          ],
          solution: 'logger.info("Server started");',
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
              pattern: "const\\s+isProd\\s*=\\s*process\\.env\\.NODE_ENV\\s*===\\s*['\"]production['\"]\\s*;?",
              message: "Gunakan: const isProd = process.env.NODE_ENV === 'production';",
            },
          ],
          solution: "const isProd = process.env.NODE_ENV === 'production';",
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
              pattern: "upload\\.single\\(\\s*['\"]avatar['\"]\\s*\\)",
              message: "Gunakan: upload.single('avatar')",
            },
          ],
          solution: "upload.single('avatar')",
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
              pattern: "new\\s+PutObjectCommand\\(\\s*\\{\\s*Bucket\\s*,\\s*Key\\s*,\\s*Body\\s*\\}\\s*\\)",
              message: "Gunakan: new PutObjectCommand({ Bucket, Key, Body });",
            },
          ],
          solution: "new PutObjectCommand({ Bucket, Key, Body });",
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
              pattern: "await\\s+transporter\\.sendMail\\(\\s*\\{\\s*from\\s*,\\s*to\\s*,\\s*subject\\s*,\\s*html\\s*\\}\\s*\\)",
              message: "Gunakan: await transporter.sendMail({ from, to, subject, html });",
            },
          ],
          solution: "await transporter.sendMail({ from, to, subject, html });",
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
              pattern: "await\\s+emailQueue\\.add\\(\\s*['\"]sendEmail['\"]\\s*,\\s*data\\s*\\)",
              message: "Gunakan: await emailQueue.add('sendEmail', data);",
            },
          ],
          solution: "await emailQueue.add('sendEmail', data);",
        },
        {
          kind: "step",
          id: "node-7-5",
          title: "Serving Static Files dengan Safe Middleware",
          explanation:
            "Menyajikan berkas media publik seperti gambar atau berkas CSS dari direktori lokal dilakukan menggunakan middleware bawaan `express.static('public')`. Dengan mendaftarkannya pada jalur `app.use('/static', express.static('public'))`, peramban dapat mengunduh berkas di dalam folder `public` secara langsung melalui URL. Pastikan kamu selalu membatasi direktori yang disajikan hanya pada folder khusus publik untuk mencegah akses tanpa izin ke berkas kode sumber. Penggunaan jalur terisolasi ini menjaga keamanan aplikasi backend secara menyeluruh. Jebakan fatal adalah membuka folder root server sebagai direktori statis yang dapat membeberkan berkas `.env`.",
          example: {
            code: "import express from 'express';\nconst app = express();\napp.use('/static', express.static('public'));",
            output: "Serving static files at /static",
            note: "Jangan pernah menyajikan root folder server sebagai static directory!",
          },
          instruction:
            "Pasang middleware statis Express `express.static('public')` pada awalan jalur URL `\"/static\"` menggunakan `app.use`.",
          starterCode: "// Tulis express.static di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "app\\.use\\(\\s*['\"]/static['\"]\\s*,\\s*express\\.static\\(\\s*['\"]public['\"]\\s*\\)\\s*\\)\\s*;?",
              message: "Gunakan: app.use('/static', express.static('public'));",
            },
          ],
          solution: "app.use('/static', express.static('public'));",
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
              pattern: "const\\s+res\\s*=\\s*await\\s+request\\(\\s*app\\s*\\)\\.get\\(\\s*['\"]/ping['\"]\\s*\\)\\s*;?",
              message: 'Gunakan: const res = await request(app).get("/ping");',
            },
          ],
          solution: 'const res = await request(app).get("/ping");',
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
              pattern: "await\\s+prisma\\.user\\.deleteMany\\(\\)\\s*;?",
              message: "Tuliskan: await prisma.user.deleteMany();",
            },
          ],
          solution: "await prisma.user.deleteMany();",
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
            "Suntikkan header otorisasi Bearer token pada pembuka rute Supertest menggunakan `.set('Authorization', `Bearer ${token}`)`.",
          starterCode: "// Tulis set Authorization di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\.set\\(\\s*['\"]Authorization['\"]\\s*,\\s*`Bearer\\s+\\$\\{token\\}`\\s*\\)",
              message: "Gunakan: .set('Authorization', `Bearer ${token}`);",
            },
          ],
          solution: ".set('Authorization', `Bearer ${token}`);",
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
              pattern: "npx\\s+vitest\\s+run\\s+--coverage",
              message: "Gunakan: npx vitest run --coverage",
            },
          ],
          solution: "npx vitest run --coverage",
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
        },
        {
          kind: "step",
          id: "node-9-2",
          title: "Mencegah XSS (Cross-Site Scripting)",
          explanation:
            "Cross-Site Scripting (XSS) terjadi saat penyerang berhasil menyuntikkan skrip HTML/JavaScript berbahaya (`<script>`) ke dalam masukan aplikasi yang kemudian dirender oleh peramban pengguna lain. Melakukan sanitasi teks masukan menggunakan ekspresi reguler atau pustaka pembersih HTML mencegah skrip eksekusi tersebut berjalan di sisi peramban. Kerangka kerja modern seperti React secara otomatis melakukan *escaping* pada string, namun sanitasi tetap wajib diterapkan di sisi backend. Menjaga kebersihan data terisi melindungi sesi pengguna lain dari ancaman pencurian cookie. Jebakan fatal adalah merender teks dari masukan pengguna secara mentah menggunakan `innerHTML`.",
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
              pattern: "app\\.use\\(\\s*cors\\(\\s*\\{\\s*origin\\s*:\\s*['\"]https://myapp\\.com['\"]\\s*\\}\\s*\\)\\s*\\)\\s*;?",
              message: "Gunakan: app.use(cors({ origin: 'https://myapp.com' }));",
            },
          ],
          solution: "app.use(cors({ origin: 'https://myapp.com' }));",
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
              pattern: "app\\.use\\(\\s*['\"]/api/v1/login['\"]\\s*,\\s*limiter\\s*\\)\\s*;?",
              message: "Gunakan: app.use('/api/v1/login', limiter);",
            },
          ],
          solution: "app.use('/api/v1/login', limiter);",
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
              pattern: "app\\.use\\(\\s*helmet\\(\\)\\s*\\)\\s*;?",
              message: "Tuliskan: app.use(helmet());",
            },
          ],
          solution: "app.use(helmet());",
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
            "Buat fungsi `checkSecurityReadiness(checksArray)` yang mengembalikan `true` jika seluruh elemen boolean dalam `checksArray` bernilai `true` menggunakan `checksArray.every(c => c === true)`.",
          starterCode: "// Tulis fungsi checkSecurityReadiness di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "checksArray\\.every\\(\\s*c\\s*=>\\s*c\\s*===\\s*true\\s*\\)",
              message: "Gunakan: checksArray.every(c => c === true)",
            },
          ],
          solution:
            "function checkSecurityReadiness(checksArray) {\n  return checksArray.every(c => c === true);\n}",
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
