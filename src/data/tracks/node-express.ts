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
          kind: "step",
          id: "node-1-1",
          title: "Apa itu Node.js?",
          explanation:
            "Pernahkah kamu membuat website dan mendapati JavaScript hanya bisa berjalan di browser (seperti Chrome)? Node.js hadir untuk mengubah hal itu. Node.js adalah 'mesin' yang memungkinkanmu menjalankan kode JavaScript langsung di komputermu — layaknya sebuah program biasa atau server backend. Karena tidak berjalan di browser, Node.js tidak memiliki fitur visual seperti `window` atau `document` (DOM). Sebagai gantinya, Node.js memberimu akses ke sistem operasi: membaca file, mengakses database, dan membangun API. Jebakan: jangan coba alert() di Node.js — pasti error!",
          example: {
            code: "const platform = process.platform;\nconsole.log(platform);",
            output: "darwin",
            note: "Objek 'process' menyediakan informasi seputar lingkungan runtime Node.js.",
          },
          instruction:
            "Tuliskan perintah JavaScript Node.js untuk mencetak string versi runtime Node.js yang sedang berjalan menggunakan objek global `process`.",
          starterCode: "// Tulis kode console.log di bawah ini\n",
          language: "js",
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
            'Gunakan "type": "module" di package.json untuk mengaktifkan sintaks standar ES Module (import / export).',
          example: {
            code: "export const add = (a, b) => a + b;\nconsole.log(add(2, 3));",
            output: "5",
            note: "Impor file lokal wajib mencantumkan ekstensi .js.",
          },
          instruction:
            "Buat dan ekspor fungsi bernama `multiply` yang menerima dua parameter `(a, b)` dan mengembalikan hasil perkalian keduanya (`a * b`).",
          starterCode: "// Tulis ekspor fungsi di sini\n",
          language: "js",
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
            "`package.json` mencatat dependensi proyek. Library produksi disimpan di `dependencies`, sedangkan library pengujian/kompilasi disimpan di `devDependencies`.",
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
            "Module `node:fs/promises` menyediakan fungsi baca/tulis file berbasis Promise async/await.",
          example: {
            code: "import fs from 'node:fs/promises';\nawait fs.writeFile('out.txt', 'OK');\nconsole.log('Done');",
            output: "Done",
            note: "Selalu sertakan encoding 'utf-8' saat membaca file teks.",
          },
          instruction:
            "Tuliskan panggilan asinkron `fs.writeFile` untuk membuat file `'file.txt'` yang berisi konten teks `'Halo'`. Gunakan kata kunci `await` di awal.",
          starterCode: "// Tulis fs.writeFile di sini\n",
          language: "js",
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
            "Variabel lingkungan diakses via `process.env`. Gunakan paket `dotenv` atau flag `--env-file=.env` di Node 20+ untuk memuat file `.env`.",
          example: {
            code: "process.env.APP_ENV = 'dev';\nconsole.log(process.env.APP_ENV);",
            output: "dev",
            note: "Jangan simpan rahasia di berkas kode JS biasa.",
          },
          instruction:
            "Deklarasikan konstanta `dbUrl` yang nilainya diambil dari variabel lingkungan `DATABASE_URL` pada objek `process.env`.",
          starterCode: "// Tulis pembacaan process.env di sini\n",
          language: "js",
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
          title: "EventEmitter Dasar",
          explanation:
            "`EventEmitter` memicu dan mendengarkan event khusus (Event-Driven Architecture).",
          example: {
            code: "import { EventEmitter } from 'node:events';\nconst em = new EventEmitter();\nem.on('test', console.log);\nem.emit('test', 'ok');",
            output: "ok",
            note: "Banyak modul internal Node.js dibangun di atas EventEmitter.",
          },
          instruction:
            "Picu peristiwa bernama `'login'` pada objek `emitter` dengan membawa argumen variabel `data` menggunakan metode `.emit()`.",
          starterCode: "// Tulis emitter.emit di sini\n",
          language: "js",
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
            "Perintah `tsx --watch src/index.ts` mengeksekusi file TypeScript dan otomatis me-restart server setiap kali berkas kode diubah.",
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
              choices: ["window.env", "process.env", "document.env", "global.env"],
              answerIndex: 1,
              explanation: "process.env menyimpan seluruh variabel lingkungan yang disuntikkan ke runtime Node.js.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Properti sintaks apa di `package.json` yang harus dikonfigurasi agar Node.js memperlakukan berkas `.js` sebagai ES Modules (bukan CommonJS)?",
              choices: ['"type": "module"', '"module": true', '"format": "esm"', '"target": "esnext"'],
              answerIndex: 0,
              explanation: '"type": "module" memberitahu Node.js untuk mengeksekusi berkas JavaScript menggunakan kata kunci import/export.',
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Manakah perbedaan utama antara browser JavaScript runtime dan Node.js runtime?",
              choices: [
                "Node.js tidak memiliki objek DOM (window, document), tetapi memiliki akses ke File System lokal dan variabel process",
                "Browser menggunakan bahasa Python sedangkan Node.js menggunakan C++",
                "Node.js hanya bisa berjalan di HP Android",
                "Browser tidak mendukung fungsi matematika",
              ],
              answerIndex: 0,
              explanation: "Node.js dirancang untuk server-side sehingga tidak memuat API tampilan browser seperti document dan window.",
            },
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
          kind: "step",
          id: "node-2-1",
          title: "Inisialisasi Server Express + TypeScript",
          explanation:
            "Buat server Express dengan memanggil `express()` lalu dengarkan port server menggunakan `app.listen(port)`.",
          example: {
            code: "import express from 'express';\nconst app = express();\nconsole.log(typeof app);",
            output: "function",
            note: "Gunakan express.json() agar server bisa membaca JSON request body.",
          },
          instruction:
            "Deklarasikan instansi aplikasi Express baru dan simpan ke dalam konstanta `app`.",
          starterCode: "// Tulis inisialisasi Express di sini\n",
          language: "js",
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
            "Daftarkan handler route dengan `app.get('/path', handler)` atau `app.post('/path', handler)`.",
          example: {
            code: "import express from 'express';\nconst app = express();\napp.get('/health', (req, res) => res.send('OK'));",
            output: "OK",
            note: "res.json() otomatis mengatur Content-Type ke application/json.",
          },
          instruction:
            "Buat rute GET pada path `\"/ping\"` yang merespon dengan mengirimkan string `'pong'` menggunakan `res.send`.",
          starterCode: "// Tulis route ping di bawah ini\n",
          language: "js",
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
            "`req.params` membaca URL segment (`:id`), `req.query` membaca query string (`?q=a`), dan `req.body` membaca JSON payload.",
          example: {
            code: "const req = { params: { id: '42' } };\nconst { id } = req.params;\nconsole.log(id);",
            output: "42",
            note: "Pastikan app.use(express.json()) terpasang sebelum membaca req.body.",
          },
          instruction:
            "Lakukan destructuring variabel `id` dari properti parameter jalur URL `req.params`.",
          starterCode: "// Tulis ekstraksi req.params di sini\n",
          language: "js",
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
            "Atur HTTP Status Code menggunakan `res.status(code)` sebelum mengirimkan data JSON.",
          example: {
            code: "const res = { status(c) { return this; }, json(d) { console.log(d); } };\nres.status(404).json({ error: 'Not Found' });",
            output: "{ error: 'Not Found' }",
            note: "res.status(404) untuk Not Found, res.status(400) untuk Bad Request.",
          },
          instruction:
            "Kirimkan balasan HTTP status 404 yang dikombinasikan dengan payload JSON `{ error: \"Not Found\" }`.",
          starterCode: "// Tulis res.status(404) di sini\n",
          language: "js",
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
            "Bayangkan middleware seperti satpam di gerbang perumahan. Saat ada tamu (request) datang, satpam ini bisa mencegat dan memeriksa identitasnya sebelum membiarkannya masuk ke rumah tujuan (Route Handler). Middleware sangat berguna untuk mengecek apakah user sudah login sebelum mengakses halaman tertentu. Fungsi ini selalu menerima tiga parameter: `(req, res, next)`. Kamu WAJIB memanggil `next()` agar request diteruskan — jika lupa, request akan menggantung (loading terus-menerus tanpa respons).",
          example: {
            code: "function myMw(req, res, next) { console.log('Passed'); next(); }\nmyMw({}, {}, () => {});",
            output: "Passed",
            note: "Jika next() tidak dipanggil, request akan gantung (hanging) selamanya.",
          },
          instruction:
            "Panggil fungsi kelanjutan middleware `next()` tanpa argumen untuk melanjutkan alur eksekusi request Express.",
          starterCode: "// Tulis panggilan fungsi berikutnya di bawah ini\n",
          language: "js",
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
            "Gunakan `express.Router()` untuk memecah daftar endpoint menjadi modul-modul terpisah (misal `userRouter`).",
          example: {
            code: "import { Router } from 'express';\nconst router = Router();\nconsole.log(typeof router);",
            output: "function",
            note: "Membuat struktur aplikasi Express tetap bersih dan terpelihara.",
          },
          instruction:
            "Inisialisasikan sebuah instansi objek `Router` dari Express dan simpan dalam konstanta bernama `router`.",
          starterCode: "// Tulis Router() di sini\n",
          language: "js",
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
            "Tempatkan middleware 404 di urutan paling akhir untuk menangkap seluruh route yang tidak cocok.",
          example: {
            code: "const app = { use(fn) { fn({}, { status(c) { return this; }, json(d) { console.log(d); } }); } };\napp.use((req, res) => res.status(404).json({ error: '404' }));",
            output: "{ error: '404' }",
            note: "Middleware ini harus berada di paling bawah setelah daftar route terdefinisi.",
          },
          instruction:
            "Pasang middleware penangkap rute tak dikenal di akhir rantai `app.use` yang mengembalikan status code 404 beserta JSON `{ error: \"404\" }`.",
          starterCode: "// Tulis handler 404 di bawah ini\n",
          language: "js",
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
              choices: ["next()", "continue()", "res.send()", "express.next()"],
              answerIndex: 0,
              explanation: "Fungsi next() memberitahu Express untuk melanjutkan eksekusi ke middleware atau route handler berikutnya.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Middleware bawaan Express apa yang harus dipasang agar server dapat mengurai (parse) body request berformat JSON?",
              choices: ["express.json()", "express.urlencoded()", "express.bodyParser()", "express.parse()"],
              answerIndex: 0,
              explanation: "express.json() adalah middleware bawaan yang mengubah payload JSON dari req.body menjadi objek JavaScript.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Properti req mana yang digunakan untuk mengekstrak parameter dinamis dari URL path (seperti `:id` pada `/users/:id`)?",
              choices: ["req.params", "req.query", "req.body", "req.headers"],
              answerIndex: 0,
              explanation: "req.params memuat objek parameter rute dinamis yang dicocokkan dari segmen URL path.",
            },
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
          kind: "step",
          id: "node-3-1",
          title: "Konvensi Penamaan Resource Noun Jamak",
          explanation:
            "Saat merancang REST API, aturan emasnya: URL endpoint harus berupa Kata Benda Jamak, BUKAN kata kerja. Kenapa? Karena dalam REST, URL berfungsi sebagai 'alamat rumah' data (resource). Aksi yang dilakukan (ambil, buat, hapus) sudah diwakili oleh HTTP Method (GET, POST, DELETE). Jadi gunakan `/api/v1/users`, bukan `/getUsers` atau `/create_user`. Konsistensi ini membuat API-mu rapi dan mudah ditebak oleh frontend developer.",
          example: {
            code: "function getEndpoint(resource) {\n  return `/api/v1/${resource}`;\n}\nconsole.log(getEndpoint('users'));",
            output: "/api/v1/users",
            note: "Aksi (action) ditentukan oleh HTTP Method, bukan nama URL path.",
          },
          instruction:
            "Buat fungsi `getEndpoint(resourceName)` yang mengembalikan string URL RESTful terformat `\"/api/v1/\${resourceName}\"`.",
          starterCode: "// Tulis fungsi getEndpoint di bawah ini\n",
          language: "js",
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
            "`PUT` mengganti SELURUH data resource, sedangkan `PATCH` hanya mengganti sebagian properti yang dikirim.",
          example: {
            code: "function getUpdateMethod(isPartial) {\n  return isPartial ? 'PATCH' : 'PUT';\n}\nconsole.log(getUpdateMethod(true));",
            output: "PATCH",
            note: "Gunakan PATCH untuk update sebagian bidang data.",
          },
          instruction:
            "Buat fungsi `getUpdateMethod(isPartial)` yang mengembalikan string `'PATCH'` jika `isPartial` bernilai `true` dan `'PUT'` jika `false`.",
          starterCode: "// Tulis fungsi getUpdateMethod di bawah ini\n",
          language: "js",
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
            "Gunakan HTTP status code yang tepat: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found).",
          example: {
            code: "const res = { status(c) { console.log(c); return this; }, send() {} };\nres.status(204).send();",
            output: "204",
            note: "Jangan pernah mengembalikan status 200 OK jika terjadi error di API!",
          },
          instruction:
            "Tuliskan perintah balasan Express untuk mengembalikan HTTP status 204 No Content tanpa payload body (`res.status(204).send()`).",
          starterCode: "// Tulis res.status(204) di sini\n",
          language: "js",
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
            "Bungkus respon API dalam format standar: `{ success: true, data: ..., meta: ... }`.",
          example: {
            code: "const res = { json(obj) { console.log(obj.success); } };\nres.json({ success: true, data: [] });",
            output: "true",
            note: "Struktur konsisten mempermudah pembacaan data di sisi client.",
          },
          instruction:
            "Kirimkan data variabel `users` di dalam pembungkus respon JSON terstandar `{ success: true, data: users }`.",
          starterCode: "// Tulis res.json di bawah ini\n",
          language: "js",
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
            "Terapkan versioning pada URL prefix (`/api/v1/`) agar pembaruan API di masa mendatang tidak memutus (break) pengguna versi lama.",
          example: {
            code: "const app = { use(path, r) { console.log(path); } };\napp.use('/api/v1/posts', {});",
            output: "/api/v1/posts",
            note: "Versioning adalah standar wajib bagi API skala produksi.",
          },
          instruction:
            "Daftarkan modul `postRouter` ke aplikasi Express pada jalur prefix versi 1 (`\"/api/v1/posts\"`) menggunakan `app.use`.",
          starterCode: "// Tulis app.use v1 di sini\n",
          language: "js",
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
            "Terima parameter `page`, `limit`, dan `search` dari query string URL `req.query`.",
          example: {
            code: "const req = { query: { limit: '20' } };\nconst limit = Number(req.query.limit) || 10;\nconsole.log(limit);",
            output: "20",
            note: "Selalu berikan nilai default untuk limit agar tidak ada request yang mengambil jutaan baris sekaligus.",
          },
          instruction:
            "Konversikan nilai query `req.query.limit` ke tipe angka menggunakan `Number()` dan berikan fallback default `10` jika nilainya falsy.",
          starterCode: "// Tulis pembacaan limit di sini\n",
          language: "js",
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
            "Operasi Idempotent (seperti GET, PUT, DELETE) mengembalikan status state akhir yang sama meskipun dieksekusi berulang kali.",
          example: {
            code: "function isIdempotentMethod(method) {\n  return ['GET', 'PUT', 'DELETE'].includes(method.toUpperCase());\n}\nconsole.log(isIdempotentMethod('DELETE'));",
            output: "true",
            note: "POST tidak idempotent karena 10x POST akan membuat 10 data baru.",
          },
          instruction:
            "Buat fungsi `isIdempotentMethod(httpMethod)` yang mengembalikan `true` jika metode HTTP adalah `'GET'`, `'PUT'`, atau `'DELETE'`. Gunakan `['GET', 'PUT', 'DELETE'].includes(httpMethod)`.",
          starterCode: "// Tulis fungsi isIdempotentMethod di bawah ini\n",
          language: "js",
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
              question: "Apa perbedaan utama antara HTTP Method `PUT` dan `PATCH`?",
              choices: [
                "PUT hanya bisa dipakai di browser Chrome",
                "PUT memperbarui seluruh bidang objek, sedangkan PATCH memperbarui sebagian bidang objek",
                "PATCH menghapus seluruh database",
                "Tidak ada perbedaan",
              ],
              answerIndex: 1,
              explanation: "PUT digunakan untuk mengganti penuh resource, sedangkan PATCH digunakan untuk pembaruan sebagian bidang (partial update).",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "HTTP Status Code manakah yang paling sesuai dikembalikan saat server berhasil memproses pembuatan data baru (misal pendaftaran pengguna sukses)?",
              choices: ["200 OK", "201 Created", "204 No Content", "302 Found"],
              answerIndex: 1,
              explanation: "HTTP 201 Created mengindikasikan bahwa request berhasil dan sebuah resource baru telah berhasil dibuat di server.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa HTTP Method POST tidak dikategorikan sebagai operasi yang Idempotent?",
              choices: [
                "Karena mengeksekusi request POST sebanyak 10 kali secara berulang akan menghasilkan 10 data resource baru di database",
                "Karena POST tidak membutuhkan kata sandi",
                "Karena POST tidak bisa menerima payload JSON",
                "Karena POST selalu mengembalikan error 500",
              ],
              answerIndex: 0,
              explanation: "Operasi Idempotent mengembalikan state akhir yang identik meski dipanggil berkali-kali. POST menciptakan entitas baru setiap dipanggil.",
            },
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
          kind: "step",
          id: "node-4-1",
          title: "Prisma Schema & Migration",
          explanation:
            "Prisma adalah alat (ORM) yang memungkinkanmu merancang struktur database menggunakan kode, tanpa menulis SQL mentah yang rumit. Semua struktur tabelmu didefinisikan di file `prisma/schema.prisma`. Setelah selesai menuliskannya, jalankan `npx prisma migrate dev`. 'Migrasi' ini ibarat menyerahkan cetak biru ke tukang bangunan: Prisma membaca kodemu dan otomatis membangun tabel di database. Jebakan: jangan lupa menjalankan migrasi setiap kali kamu menambah atau mengubah kolom, jika tidak database aslimu tidak akan berubah.",
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
            "Prisma Client menyediakan method `findMany()`, `findUnique()`, `create()`, `update()`, dan `delete()`.",
          example: {
            code: "const prisma = { user: { findUnique: (o) => ({ id: o.where.id, name: 'Budi' }) } };\nconst user = await prisma.user.findUnique({ where: { id: 1 } });\nconsole.log(user.name);",
            output: "Budi",
            note: "Prisma otomatis mengembalikan tipe data TypeScript yang sesuai.",
          },
          instruction:
            "Tuliskan kueri Prisma Client untuk mencari satu data spesifik pada tabel `user` berdasarkan kunci unik `id`.",
          starterCode: "// Tulis findUnique di bawah ini\n",
          language: "js",
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
            "Sertakan data relasi pada query Prisma menggunakan properti `include: { posts: true }`.",
          example: {
            code: "const prisma = { user: { findMany: (o) => [{ profile: true }] } };\nconst users = await prisma.user.findMany({ include: { profile: true } });\nconsole.log(users.length);",
            output: "1",
            note: "Nested query Prisma mencegah problem N+1 di Node.js.",
          },
          instruction:
            "Jalankan pencarian `findMany` pada tabel `user` dengan menyertakan relasi tabel `profile` menggunakan opsi `include`.",
          starterCode: "// Tulis query include di sini\n",
          language: "js",
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
            "Gunakan `prisma.$transaction([...])` untuk menjamin beberapa perintah database berhasil seluruhnya atau dibatalkan (rollback) seluruhnya.",
          example: {
            code: "const prisma = { $transaction: async (arr) => 'Transaction Success' };\nconsole.log(await prisma.$transaction([]));",
            output: "Transaction Success",
            note: "Menjamin prinsip ACID pada transaksi keuangan.",
          },
          instruction:
            "Bungkus sekumpulan perintah database di dalam fungsi transaksi atomic `prisma.$transaction()` yang menerima array kosong `[]` sebagai argumen dasar.",
          starterCode: "// Tulis $transaction di bawah ini\n",
          language: "js",
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
            "`npx prisma studio` membuka GUI browser visual untuk melihat dan mengedit isi tabel database secara langsung.",
          example: {
            code: "npx prisma db seed",
            output: "Seeding database completed.",
            note: "Sangat membantu saat pengamatan data saat proses development.",
          },
          instruction:
            "Tulis perintah CLI npx untuk membuka antarmuka GUI visual Prisma Studio di browser.",
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
            "Pisahkan panggilan Prisma Client ke dalam kelas/fungsi Repository khusus agar handler Express tidak langsung bergantung pada ORM.",
          example: {
            code: "const UserRepository = { findById: (id) => `User ${id}` };\nconsole.log(UserRepository.findById(10));",
            output: "User 10",
            note: "Menerapkan prinsip SoC (Separation of Concerns).",
          },
          instruction:
            "Lengkapi properti `findById` pada objek `UserRepository` agar mengembalikan kueri `prisma.user.findUnique({ where: { id } })`.",
          starterCode: "// Tulis findById repo di sini\n",
          language: "js",
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
              choices: ["join", "include", "with", "attach"],
              answerIndex: 1,
              explanation: "Properti `include: { relasi: true }` digunakan di Prisma Client untuk melakukan Eager Loading data relasi.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Perintah Prisma CLI manakah yang digunakan untuk menyelaraskan skema `schema.prisma` ke database development dan menghasilkan berkas migrasi baru?",
              choices: ["npx prisma migrate dev", "npx prisma push", "npx prisma db sync", "npx prisma generate"],
              answerIndex: 0,
              explanation: "npx prisma migrate dev membuat berkas migrasi SQL baru dan menerapkan perubahan skema ke database lokal.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Fitur Prisma Client manakah yang memastikan bahwa serangkaian query database dieksekusi secara atomic (jika 1 query gagal, seluruh perubahan dibatalkan)?",
              choices: ["prisma.$transaction()", "prisma.$batch()", "prisma.$queryRaw()", "prisma.$rollback()"],
              answerIndex: 0,
              explanation: "prisma.$transaction() membungkus kueri ke dalam transaksi database tunggal untuk menjamin konsistensi ACID.",
            },
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
          kind: "step",
          id: "node-5-1",
          title: "Hashing Password dengan bcrypt",
          explanation:
            "JANGAN PERNAH menyimpan password dalam bentuk plain text! Gunakan `bcrypt.hash(password, 10)` untuk mengenskripsi password.",
          example: {
            code: "import bcrypt from 'bcrypt';\nconst hash = await bcrypt.hash('pass123', 10);\nconsole.log(hash.startsWith('$2b$'));",
            output: "true",
            note: "Angka 10 adalah salt rounds standar industri.",
          },
          instruction:
            "Lakukan verifikasi kecocokan password mentah `input` dengan string enkripsi `hash` menggunakan `bcrypt.compare` secara async.",
          starterCode: "// Tulis bcrypt.compare di sini\n",
          language: "js",
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
            "Gunakan `jwt.sign(payload, secret, { expiresIn: '1h' })` untuk menerbitkan token JWT bagi user yang berhasil login.",
          example: {
            code: "import jwt from 'jsonwebtoken';\nconst token = jwt.sign({ id: 1 }, 'secret', { expiresIn: '1h' });\nconsole.log(typeof token);",
            output: "string",
            note: "Jangan simpan data sensitif seperti password di dalam payload JWT!",
          },
          instruction:
            "Terbitkan token JWT berisi payload `{ id: user.id }` menggunakan kunci rahasia `secret` dengan masa kadaluarsa 1 jam (`expiresIn: '1h'`).",
          starterCode: "// Tulis jwt.sign di bawah ini\n",
          language: "js",
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
            "Alternatif JWT adalah menggunakan cookie session berbasis paket `express-session` di mana ID session disimpan di Cookie HttpOnly.",
          example: {
            code: "const req = { session: {} };\nreq.session.userId = 42;\nconsole.log(req.session.userId);",
            output: "42",
            note: "Cookie HttpOnly aman dari pencurian script XSS.",
          },
          instruction:
            "Simpan ID pengguna `user.id` ke dalam properti `req.session.userId` pada objek sesi request.",
          starterCode: "// Tulis req.session di sini\n",
          language: "js",
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
            "Buat middleware `authenticateToken` untuk mengekstrak Bearer Token dari Header `Authorization` dan memverifikasinya.",
          example: {
            code: "const res = { sendStatus(s) { console.log(s); } };\nconst token = null;\nif (!token) res.sendStatus(401);",
            output: "401",
            note: "Simpan payload terbongkar di req.user untuk dipakai di route handler.",
          },
          instruction:
            "Periksa keberadaan token. Jika variabel `token` tidak ada (falsy), hentikan proses dengan mengembalikan status code 401 (`res.sendStatus(401)`).",
          starterCode: "// Tulis pengecekan token di sini\n",
          language: "js",
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
            "Jika menyimpan JWT di Cookie, wajib aktifkan opsi `{ httpOnly: true, secure: true, sameSite: 'strict' }`.",
          example: {
            code: "const res = { cookie(k, v, o) { console.log(o.httpOnly); } };\nres.cookie('token', 'abc', { httpOnly: true });",
            output: "true",
            note: "Perlindungan utama dari ancaman serangan XSS.",
          },
          instruction:
            "Kirimkan cookie bernama `'token'` yang membawa nilai `token` dengan menyertakan opsi perlindungan `httpOnly: true`.",
          starterCode: "// Tulis res.cookie di bawah ini\n",
          language: "js",
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
            "Untuk logout pada sistem cookie, panggil `res.clearCookie('token')`. Pada sistem JWT, simpan token terpakai di Redis Denylist.",
          example: {
            code: "const res = { clearCookie(name) { console.log('Cleared ' + name); } };\nres.clearCookie('token');",
            output: "Cleared token",
            note: "Menjamin sesi berakhir sempurna setelah tombol logout diklik.",
          },
          instruction:
            "Tuliskan perintah balasan Express untuk menghapus cookie autentikasi bernama `'token'` saat proses logout.",
          starterCode: "// Tulis clearCookie di sini\n",
          language: "js",
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
              choices: ["httpOnly: true", "domain: '*'", "path: '/'", "express: true"],
              answerIndex: 0,
              explanation: "httpOnly: true melarang akses JavaScript client-side (document.cookie) ke cookie tersebut.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa menyimpan plain-text password pengguna di database dianggap sebagai pelanggaran keamanan paling fatal?",
              choices: [
                "Karena jika database bocor, penyerang langsung mengetahui password asli seluruh pengguna tanpa perlu mendekripsi",
                "Karena database akan menolak menyimpan string biasa",
                "Karena plain-text password membuat ukuran database membengkak 100 kali lipat",
                "Karena bcrypt berbayar",
              ],
              answerIndex: 0,
              explanation: "Password harus selalu di-hash menggunakan algoritma satu arah seperti bcrypt/argon2 agar nilai aslinya tidak dapat direkonstruksi.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara kerja skema autentikasi JSON Web Token (JWT)?",
              choices: [
                "Server menandatangani payload JSON dengan secret key, lalu client mengirimkan token tersebut pada header Authorization Bearer di tiap request",
                "Server menyimpan seluruh data sesi di RAM server",
                "JWT mengompresi gambar file profil",
                "JWT menghapus cookie secara otomatis tiap 5 detik",
              ],
              answerIndex: 0,
              explanation: "JWT bersifat stateless; server memverifikasi keabsahan tanda tangan (signature) token tanpa perlu membaca memori sesi server.",
            },
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
          kind: "step",
          id: "node-6-1",
          title: "Validasi Input Express dengan Zod",
          explanation:
            "Definisikan Skema Zod dan jalankan `schema.parse(req.body)` untuk melempar error jika data input tidak valid.",
          example: {
            code: "import { z } from 'zod';\nconst schema = z.object({ age: z.number() });\nconsole.log(schema.parse({ age: 20 }));",
            output: "{ age: 20 }",
            note: "Gunakan safeParse jika tidak ingin melempar exception otomatis.",
          },
          instruction:
            "Jalankan validasi penguraian objek input `req.body` menggunakan skema `UserSchema.parse()` dan simpan hasilnya di konstanta `data`.",
          starterCode: "// Tulis Zod parse di sini\n",
          language: "js",
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
            "Middleware error di Express dikenali dengan **4 parameter**: `(err, req, res, next)`. Tempatkan middleware ini di urutan paling bawah.",
          example: {
            code: "const app = { use(fn) { console.log(fn.length); } };\napp.use((err, req, res, next) => {});",
            output: "4",
            note: "Urutan 4 parameter (err, req, res, next) wajib ditulis lengkap agar Express mengenali sebagai error handler.",
          },
          instruction:
            "Daftarkan fungsi penanganan error terpusat pada Express yang memiliki empat parameter lengkap `(err, req, res, next)`.",
          starterCode: "// Tulis middleware error di sini\n",
          language: "js",
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
            "Buat turunan kelas `AppError extends Error` yang membawa properti `statusCode` untuk membedakan Operational Error dan Programming Error.",
          example: {
            code: "class AppError extends Error { constructor(m, s) { super(m); this.statusCode = s; } }\nconst err = new AppError('Denied', 401);\nconsole.log(err.statusCode);",
            output: "401",
            note: "Mempermudah pembacaan status code di middleware error terpusat.",
          },
          instruction:
            "Picu (throw) instansi error kustom `AppError` baru dengan pesan `'Unauthorized'` dan status code `401`.",
          starterCode: "// Tulis throw AppError di sini\n",
          language: "js",
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
            "Bungkus fungsi async route handler dengan asyncHandler agar promise rejection otomatis ditangkap dan diteruskan ke `next(err)`.",
          example: {
            code: "const fn = async () => 'OK';\nPromise.resolve(fn({}, {}, () => {})).then(console.log);",
            output: "OK",
            note: "Express 5 secara native sudah menangani async error rejection.",
          },
          instruction:
            "Bungkus eksekusi fungsi handler `fn(req, res, next)` dengan `Promise.resolve()` dan tangkap penolakannya (`.catch(next)`).",
          starterCode: "// Tulis asyncHandler catch di sini\n",
          language: "js",
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
            "Gunakan logger terstruktur seperti `pino` daripada `console.log` biasa di lingkungan produksi agar log tersimpan dalam format JSON yang mudah dianalisis.",
          example: {
            code: "const logger = { info(msg) { console.log('INFO: ' + msg); } };\nlogger.info('Server started');",
            output: "INFO: Server started",
            note: "Log JSON mempermudah parsing di sistem pemantau log (seperti Datadog / Elasticsearch).",
          },
          instruction:
            "Tuliskan pencatatan log tingkat informasi menggunakan `logger.info` dengan pesan `'Server started'`.",
          starterCode: "// Tulis logger.info di bawah ini\n",
          language: "js",
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
            "JANGAN PERNAH membocorkan raw `err.stack` ke client di lingkungan produksi karena dapat memberikan petunjuk celah keamanan bagi peretas.",
          example: {
            code: "process.env.NODE_ENV = 'production';\nconst isProd = process.env.NODE_ENV === 'production';\nconsole.log(isProd);",
            output: "true",
            note: "Selalu sembunyikan detail internal error dari publik.",
          },
          instruction:
            "Buat konstanta boolean `isProd` yang memeriksa apakah `process.env.NODE_ENV` persis sama dengan string `'production'`.",
          starterCode: "// Tulis pengecekan isProd di sini\n",
          language: "js",
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
              choices: ["2 (req, res)", "3 (req, res, next)", "4 (err, req, res, next)", "1 (err)"],
              answerIndex: 2,
              explanation: "Express membedakan middleware biasa dan error handler berdasarkan aritas (jumlah parameter) 4: (err, req, res, next).",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Library schema validation TypeScript populer apa yang umum digunakan di Node.js untuk memvalidasi req.body dan melempar type-safe error?",
              choices: ["Zod", "Axios", "Prisma", "Pino"],
              answerIndex: 0,
              explanation: "Zod memungkinkan pembuatan skema tipe data deklaratif yang memvalidasi objek input runtime sekaligus mengekstrak tipe TypeScript.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa membocorkan `err.stack` (stacktrace) lengkap ke respon JSON di lingkungan produksi sangat dilarang?",
              choices: [
                "Karena stacktrace membeberkan struktur direktori server dan versi pustaka internal yang bisa dimanfaatkan peretas untuk mengeksploitasi celah keamanan",
                "Karena stacktrace otomatis menghapus berkas database",
                "Karena stacktrace tidak bisa dibaca oleh browser",
                "Karena membuat koneksi jaringan terputus",
              ],
              answerIndex: 0,
              explanation: "Stacktrace membeberkan informasi sensitif internal arsitektur server yang sangat berguna bagi analisis serangan peretas.",
            },
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
          kind: "step",
          id: "node-7-1",
          title: "File Upload dengan Multer",
          explanation:
            "Gunakan middleware `multer` untuk menangani upload multipart/form-data di Express.",
          example: {
            code: "const upload = { single: (name) => `Uploading ${name}` };\nconsole.log(upload.single('avatar'));",
            output: "Uploading avatar",
            note: "req.file memuat informasi nama file, ukuran, dan mimetype.",
          },
          instruction:
            "Panggil middleware `upload.single` untuk memproses unggahan satu file tunggal yang dikirimkan pada field bernama `'avatar'`.",
          starterCode: "// Tulis upload.single di sini\n",
          language: "js",
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
            "Di aplikasi skala produksi, simpan file terunggah ke S3/Cloudflare R2 daripada di disk lokal server.",
          example: {
            code: "class PutObjectCommand { constructor(opts) { this.opts = opts; } }\nconst cmd = new PutObjectCommand({ Bucket: 'b', Key: 'k', Body: 'd' });\nconsole.log(cmd.opts.Bucket);",
            output: "b",
            note: "Disk lokal server cloud bersifat ephemeral yang mudah terhapus saat restart.",
          },
          instruction:
            "Buat perintah instansi `PutObjectCommand` dari AWS SDK v3 dengan melewatkan objek opsi `{ Bucket, Key, Body }`.",
          starterCode: "// Tulis PutObjectCommand di bawah ini\n",
          language: "js",
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
            "Gunakan `nodemailer.createTransport()` untuk menghubungkan Express ke server SMTP pengiriman email.",
          example: {
            code: "const transporter = { sendMail: async (opts) => ({ messageId: '123' }) };\nconst info = await transporter.sendMail({ from: 'a', to: 'b', subject: 's', html: 'h' });\nconsole.log(info.messageId);",
            output: "123",
            note: "Uji coba pengiriman email secara aman di dev environment menggunakan Mailtrap.",
          },
          instruction:
            "Jalankan fungsi pengiriman email asinkron `transporter.sendMail()` dengan melewatkan objek opsi `{ from, to, subject, html }`.",
          starterCode: "// Tulis transporter.sendMail di sini\n",
          language: "js",
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
            "Gunakan `BullMQ` berbasis Redis untuk memproses pengiriman email di antrean background tanpa memperlambat respon HTTP Express.",
          example: {
            code: "const emailQueue = { add: async (name, data) => ({ id: 'job1' }) };\nconst job = await emailQueue.add('sendEmail', {});\nconsole.log(job.id);",
            output: "job1",
            note: "Worker BullMQ akan mengambil tugas dari Redis dan mengeksekusinya secara async.",
          },
          instruction:
            "Tambahkan pekerjaan baru bernama `'sendEmail'` ke dalam antrean `emailQueue` membawa muatan objek `data` menggunakan kata kunci `await`.",
          starterCode: "// Tulis emailQueue.add di sini\n",
          language: "js",
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
            "Gunakan `express.static('public')` untuk melayani file gambar/CSS statis dari folder `public`.",
          example: {
            code: "import express from 'express';\nconst app = express();\napp.use('/static', express.static('public'));",
            output: "Serving static files at /static",
            note: "Jangan pernah menyajikan root folder server sebagai static directory!",
          },
          instruction:
            "Pasang middleware statis Express `express.static('public')` pada awalan jalur URL `\"/static\"` menggunakan `app.use`.",
          starterCode: "// Tulis express.static di bawah ini\n",
          language: "js",
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
              choices: ["multer", "nodemailer", "bcrypt", "cors"],
              answerIndex: 0,
              explanation: "Multer adalah middleware khusus untuk menangani multipart/form-data yang digunakan saat mengunggah file.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa menyimpan berkas terunggah (seperti foto profil) langsung di folder disk lokal server Heroku/Vercel sangat tidak direkomendasikan?",
              choices: [
                "Karena penyimpanannya bersifat ephemeral (sementara) dan akan terhapus otomatis tiap kali server melakukan restart atau redeploy",
                "Karena berkas di disk lokal tidak bisa dikompresi",
                "Karena Node.js melarang penggunaan disk",
                "Karena disk lokal memerlukan lisensi berbayar",
              ],
              answerIndex: 0,
              explanation: "Lingkungan server cloud menggunakan ephemeral filesystem; simpanlah berkas terunggah ke Cloud Object Storage seperti S3 atau Cloudflare R2.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi utama memasukkan pekerjaan pengiriman email ke dalam Background Queue (seperti BullMQ + Redis)?",
              choices: [
                "Mencegah request HTTP user terhenti (hanging) menunggu pengiriman email SMTP yang lambat selesai",
                "Menjadikan isi email terenkripsi otomatis",
                "Menghilangkan kebutuhan SMTP server",
                "Mengubah format email menjadi PDF",
              ],
              answerIndex: 0,
              explanation: "Background Queue mengeksekusi tugas berdurasi lama secara terpisah dari main thread request HTTP Express agar respon ke pengguna tetap instan.",
            },
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
          kind: "step",
          id: "node-8-1",
          title: "Unit vs Integration Test di Backend",
          explanation:
            "Unit Test menguji 1 fungsi terisolasi (misal helper). Integration Test menguji alur penuh API endpoint dari HTTP request hingga database menggunakan **Supertest**.",
          example: {
            code: "function getTestType(isFullFlow) {\n  return isFullFlow ? 'integration' : 'unit';\n}\nconsole.log(getTestType(true));",
            output: "integration",
            note: "Integration test memberi rasa aman paling tinggi saat refactoring.",
          },
          instruction:
            "Buat fungsi `getTestType(isFullFlow)` yang mengembalikan `'integration'` jika `isFullFlow` bernilai `true` dan `'unit'` jika `false`.",
          starterCode: "// Tulis fungsi getTestType di bawah ini\n",
          language: "js",
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
            "Gunakan paket `supertest` untuk membungkus server Express `request(app)` dan memverifikasi status code serta body respon.",
          example: {
            code: "import request from 'supertest';\nimport app from './app';\nconst res = await request(app).get('/ping');\nconsole.log(res.status);",
            output: "200",
            note: "Pastikan file app.js mengekspor app tanpa memanggil app.listen()!",
          },
          instruction:
            "Gunakan `supertest` untuk melakukan permintaan HTTP GET ke endpoint `\"/ping\"` pada aplikasi `app` dan simpan responnya ke variabel `res`.",
          starterCode: "// Tulis request supertest di bawah ini\n",
          language: "js",
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
            "Bersihkan isi database pengujian sebelum/sesudah fungsi test berjalan dengan `beforeEach` agar test independen satu sama lain.",
          example: {
            code: "const prisma = { user: { deleteMany: async () => 'Cleaned' } };\nconsole.log(await prisma.user.deleteMany());",
            output: "Cleaned",
            note: "Gunakan database PostgreSQL terpisah untuk pengujian (misal mydb_test).",
          },
          instruction:
            "Di dalam kait pengujian `beforeEach`, hapus seluruh data catatan pengguna dari tabel database menggunakan metode pembersihan massal Prisma Client.",
          starterCode: "// Tulis deleteMany di sini\n",
          language: "js",
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
            "Uji endpoint terproteksi dengan menyuntikkan header `.set('Authorization', 'Bearer ' + token)` di Supertest.",
          example: {
            code: "const reqObj = { set(k, v) { console.log(`${k}: ${v}`); return this; } };\nreqObj.set('Authorization', 'Bearer abc');",
            output: "Authorization: Bearer abc",
            note: "Uji juga kondisi jika token kadaluarsa / tidak sah.",
          },
          instruction:
            "Suntikkan header otorisasi Bearer token pada pembuka rute Supertest menggunakan `.set('Authorization', `Bearer ${token}`)`.",
          starterCode: "// Tulis set Authorization di sini\n",
          language: "js",
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
            "Jangan mengejar angka coverage 100% secara asal! Fokus pada pengujian alur bisnis utama (happy path), skenario error validasi, dan pembatasan hak akses.",
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
          title: "Kuis: Testing API Node.js",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Library Node.js apa yang digunakan untuk mensimulasikan HTTP Request ke aplikasi Express saat membuat Integration Test?",
              choices: ["supertest", "express-test", "axios", "fetch"],
              answerIndex: 0,
              explanation: "supertest memungkinkan kita menguji HTTP assertion pada aplikasi Express tanpa harus menjalankan server listen() sesungguhnya.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa pembersihan (cleanup) data di database pengujian wajib dilakukan sebelum/sesudah setiap test case berjalan?",
              choices: [
                "Agar setiap test case berjalan secara independen tanpa terpengaruh oleh sisa data dari test case sebelumnya",
                "Agar ukuran database menjadi 0 byte",
                "Karena database akan otomatis terkunci jika tidak dibersihkan",
                "Untuk mempercepat jaringan internet",
              ],
              answerIndex: 0,
              explanation: "Test case yang baik harus terisolasi; data sisa dari test sebelumnya dapat menyebabkan flaky test (hasil test tidak konsisten).",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa tujuan utama penulisan Integration Test pada API backend?",
              choices: [
                "Memverifikasi alur penuh dari HTTP request, middleware, controller, hingga interaksi database secara nyata",
                "Memastikan warna tampilan tombol di frontend sudah sesuai",
                "Mengecek apakah kodingan ditulis dalam bahasa Inggris",
                "Mengganti tugas server deployment",
              ],
              answerIndex: 0,
              explanation: "Integration Test menjamin bahwa seluruh komponen arsitektur backend terhubung dan bekerja dengan benar sesuai kontrak API.",
            },
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
          kind: "step",
          id: "node-9-1",
          title: "Mencegah SQL Injection",
          explanation:
            "SQL Injection terjadi saat input mentah pengguna digabungkan langsung ke string query SQL. Gunakan ORM (Prisma) atau Parameterized Query untuk mencegahnya.",
          example: {
            code: "function isSafeQuery(usesORM) {\n  return Boolean(usesORM);\n}\nconsole.log(isSafeQuery(true));",
            output: "true",
            note: "Jangan pernah menggabungkan variabel string ke query SQL mentah!",
          },
          instruction:
            "Buat fungsi `isSafeQuery(usesORM)` yang mengembalikan nilai boolean dari parameter `usesORM`.",
          starterCode: "// Tulis fungsi isSafeQuery di bawah ini\n",
          language: "js",
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
            "XSS terjadi saat peretas berhasil menyuntikkan skrip `<script>` berbahaya ke dalam aplikasi web. Sanitasi data masukan dan hindari `innerHTML` murni.",
          example: {
            code: "function sanitizeHtmlInput(str) {\n  return str.replace(/<script.*?>.*?<\\/script>/gi, '');\n}\nconsole.log(sanitizeHtmlInput('<script>bad()</script>Hi'));",
            output: "Hi",
            note: "React dan template engine modern otomatis melakukan escaping pada output string.",
          },
          instruction:
            "Buat fungsi `sanitizeHtmlInput(inputString)` yang menghapus tag `<script>` dari string menggunakan `inputString.replace(/<script.*?>.*?<\\/script>/gi, '')`.",
          starterCode: "// Tulis fungsi sanitizeHtmlInput di bawah ini\n",
          language: "js",
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
            "Gunakan middleware `cors` untuk membatasi domain web mana saja yang diizinkan mengambil data dari backend Express-mu.",
          example: {
            code: "import cors from 'cors';\nconst app = { use(fn) { console.log('CORS configured'); } };\napp.use(cors({ origin: 'https://myapp.com' }));",
            output: "CORS configured",
            note: "Jangan gunakan origin: '*' pada API terproteksi dengan credential!",
          },
          instruction:
            "Pasang middleware `cors` pada aplikasi Express dengan membatasi asal domain (`origin`) hanya untuk `'https://myapp.com'`.",
          starterCode: "// Tulis cors di bawah ini\n",
          language: "js",
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
            "Pasang `express-rate-limit` pada route login untuk mencegah serangan Brute Force pengtebakan password.",
          example: {
            code: "const app = { use(path, fn) { console.log(path); } };\napp.use('/api/v1/login', {});",
            output: "/api/v1/login",
            note: "Melindungi endpoint sensitif dari serangan brute force.",
          },
          instruction:
            "Terapkan middleware `limiter` khusus pada rute login `\"/api/v1/login\"` menggunakan `app.use`.",
          starterCode: "// Tulis app.use limiter di sini\n",
          language: "js",
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
            "Paket `helmet` menginjeksi 15+ HTTP security headers otomatis (seperti Content-Security-Policy, X-Frame-Options) untuk mengamankan Express.",
          example: {
            code: "import helmet from 'helmet';\nconst app = { use(fn) { console.log('Helmet enabled'); } };\napp.use(helmet());",
            output: "Helmet enabled",
            note: "Langkah wajib untuk pengamanan awal aplikasi Express.",
          },
          instruction:
            "Pasang middleware pengaman header HTTP `helmet()` di aplikasi Express menggunakan `app.use`.",
          starterCode: "// Tulis helmet di sini\n",
          language: "js",
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
            "Pastikan file `.env` yang memuat password database dan secret key **SELALU** dicantumkan di `.gitignore`.",
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
            "Checklist sebelum rilis backend: 1. Matikan error stacktrace, 2. Aktifkan Helmet & CORS, 3. Gunakan bcrypt untuk password, 4. Pasang Rate Limiting, 5. Pastikan .env aman.",
          example: {
            code: "function checkSecurityReadiness(checks) {\n  return checks.every(c => c === true);\n}\nconsole.log(checkSecurityReadiness([true, true, true]));",
            output: "true",
            note: "Jalankan pengujian keamanan secara berkala.",
          },
          instruction:
            "Buat fungsi `checkSecurityReadiness(checksArray)` yang mengembalikan `true` jika seluruh elemen boolean dalam `checksArray` bernilai `true` menggunakan `checksArray.every(c => c === true)`.",
          starterCode: "// Tulis fungsi checkSecurityReadiness di bawah ini\n",
          language: "js",
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
              choices: ["helmet", "cors", "morgan", "dotenv"],
              answerIndex: 0,
              explanation: "Helmet mengkonfigurasi HTTP headers keamanan standar untuk mengamankan aplikasi Express secara instan.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa mengaktifkan Rate Limiting (seperti `express-rate-limit`) sangat penting pada endpoint login API?",
              choices: [
                "Untuk mencegah serangan Brute Force di mana peretas mencoba ribuan kombinasi password per detik secara otomatis",
                "Agar database tidak pernah penuh",
                "Untuk mengompresi response JSON menjadi Gzip",
                "Agar user tidak perlu menggunakan password",
              ],
              answerIndex: 0,
              explanation: "Rate limiting membatasi jumlah request per IP dalam jendela waktu tertentu, menggagalkan upaya pencobaan password masif secara paksa.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa risiko keamanan terbesar jika berkas `.env` tidak sengaja ter-push ke repository GitHub publik?",
              choices: [
                "Kredensial rahasia (seperti password database, API key, JWT secret) dapat dicuri dan disalahgunakan oleh siapa saja",
                "Repository GitHub akan terhapus",
                "Ukuran kode repository membengkak 1GB",
                "Node.js tidak bisa lagi di-install",
              ],
              answerIndex: 0,
              explanation: "File .env menyimpan rahasia tingkat tinggi. Jika bocor ke publik, peretas dapat mengakses database dan infrastruktur server secara penuh.",
            },
          ],
        },
      ],
    },
  ],
};
