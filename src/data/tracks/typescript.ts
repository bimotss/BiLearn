import type { Track } from "@/lib/types";

export const typescriptTrack: Track = {
  slug: "typescript",
  title: "TypeScript",
  description:
    "Requirement standar lowongan modern. Dari tipe dasar sampai generics.",
  hours: 40,
  recommendedPrereqs: ["javascript"],
  color: "bg-sky-600",
  icon: "🔷",
  order: 5,
  modules: [
    {
      slug: "persiapan-instalasi",
      title: "Persiapan & Instalasi",
      description:
        "Sebelum menulis satu tipe pun: pasang TypeScript, tahu file .ts dijalankan bagaimana.",
      topics: [
        "Apa yang sebenarnya dikerjakan TypeScript — dan apa yang TIDAK",
        "Memasang TypeScript di sebuah proyek dengan npm",
        "Membuat tsconfig.json lewat tsc --init",
        "Alur kerja: .ts → tsc → .js → node",
        "Membaca pesan error tsc pertamamu",
        "tsx: menjalankan file .ts langsung saat sedang belajar",
      ],
      items: [
        {
          kind: "materi",
          id: "ts-0-m1",
          title: "Apa Itu TypeScript, dan Kenapa Repot-Repot?",
          body:
            "# Pengertian\n\n" +
            "TypeScript adalah **JavaScript ditambah catatan tentang jenis data**. Kamu tetap menulis JavaScript yang sama persis seperti yang sudah kamu pelajari, tapi sekarang kamu boleh menambahkan keterangan seperti \"variabel ini berisi angka\" atau \"fungsi ini mengembalikan teks\".\n\n" +
            "Keterangan itu disebut **tipe** (*type*). Browser tidak mengerti tipe. Karena itu file `.ts` selalu diubah dulu menjadi file `.js` biasa oleh sebuah program bernama **compiler** (`tsc`). Proses pengubahan itu namanya **kompilasi**.\n\n" +
            "## Yang Perlu Dipahami Sejak Awal\n\n" +
            "> **Tipe hanya hidup sebelum kode dijalankan.** Saat file `.ts` dikompilasi menjadi `.js`, semua anotasi tipe **dibuang**. Tidak ada satu pun tipe yang tersisa di kode yang benar-benar dijalankan browser atau Node.\n\n" +
            "Konsekuensinya penting dan sering disalahpahami pemula:\n\n" +
            "- TypeScript **bisa** memberi tahu kamu bahwa kamu salah mengetik nama properti, salah mengirim argumen, atau lupa menangani nilai `null`.\n" +
            "- TypeScript **tidak bisa** memeriksa data yang baru datang dari internet saat aplikasi berjalan. Kalau server mengirim `\"20\"` padahal kamu janjikan `number`, TypeScript sudah selesai bekerja dan tidak akan menghentikan apa pun. (Ini yang nanti kita selesaikan dengan Zod di modul terakhir.)\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan kamu mengisi formulir pendaftaran di atas kertas. **TypeScript adalah petugas loket yang memeriksa formulirmu sebelum diserahkan**: kolom tanggal lahir kamu isi dengan nama? Dikembalikan, perbaiki dulu. Petugas itu bekerja di loket — bukan mengikuti berkasmu sampai ke dalam gedung. Begitu formulir masuk, petugasnya tidak ikut.\n\n" +
            "JavaScript tanpa TypeScript berarti tidak ada loket sama sekali: semua formulir diterima, dan kesalahannya baru ketahuan berminggu-minggu kemudian saat berkas itu dipakai.\n\n" +
            "## Kapan Dipakai di Dunia Kerja\n\n" +
            "> **Kapan dipakai:** hampir semua lowongan frontend dan Node.js tahun ini menuliskan TypeScript sebagai syarat, bukan nilai tambah. Alasannya bukan gaya-gayaan: di codebase yang dikerjakan lima orang, tipe adalah dokumentasi yang tidak bisa basi — kalau kode berubah tapi tipenya tidak, compiler langsung protes.\n\n" +
            "## Sebelum Mulai: Empat Kata dari Dunia Terminal\n\n" +
            "Enam latihan di modul ini berisi **perintah terminal**, sesuatu yang mungkin belum pernah kamu pakai. Empat kata ini cukup untuk mengikutinya:\n\n" +
            "| Kata | Artinya sesederhana mungkin |\n" +
            "|---|---|\n" +
            "| **terminal** | jendela tempat kamu mengetik perintah, bukan mengklik. Di VS Code: menu *Terminal → New Terminal*, atau tekan Ctrl+` |\n" +
            "| **npm** | program yang mengunduh paket (kode buatan orang lain) ke dalam proyekmu. Ikut terpasang otomatis saat kamu memasang Node.js |\n" +
            "| **package.json** | satu berkas di akar proyek berisi daftar paket yang dipakai proyek itu. Dibuat sekali dengan `npm init -y` |\n" +
            "| **npx** | menjalankan program dari paket yang **sudah ada di proyekmu**, jadi kamu tidak perlu memasangnya untuk seluruh komputer |\n\n" +
            "Satu istilah lagi yang akan sering muncul: **devDependency**. Itu paket yang hanya dibutuhkan saat kamu *menulis* kode — bukan saat aplikasi berjalan melayani pengguna. Compiler TypeScript termasuk di dalamnya, dan cara memasangnya begitu adalah dengan menambahkan `-D` pada perintah `npm install`.\n\n" +
            "Kalau kamu belum punya folder proyek sama sekali, urutannya: buat folder baru, buka terminal di folder itu, jalankan `npm init -y` (sekali saja), baru mulai step 1.\n\n" +
            "## Jebakan yang Sering Menjatuhkan Pemula\n\n" +
            "1. **Memasang TypeScript secara global (`npm i -g typescript`).** Ini sering keliru karena proyek lama dan baru bisa butuh versi compiler yang berbeda. Selalu pasang lokal per proyek dengan `npm i -D typescript`.\n" +
            "2. **Menjalankan `node index.ts` langsung.** Node.js bawaan tidak mengerti anotasi tipe dan akan langsung melempar SyntaxError. Kompilasi dulu ke `.js` dengan `tsc`, atau jalankan lewat runner modern seperti `tsx`.\n" +
            "3. **Lupa membuat `tsconfig.json`.** Menjalankan `tsc` tanpa berkas konfigurasi membuat compiler mengabaikan aturan ketat (*strict*) yang seharusnya melindungi kodemu.\n" +
            "4. **Mengira tipe melindungi data di runtime.** Tipe dibuang total saat kompilasi — tidak ada satu pun tipe yang tertinggal di hasil akhir yang dijalankan browser.\n\n" +
            "## Alur Kerja yang Akan Kamu Pakai\n\n" +
            "```text\n" +
            "src/index.ts    ← kamu menulis di sini (JavaScript + tipe)\n" +
            "    |\n" +
            "    |  npx tsc          (compiler memeriksa tipe, lalu membuang tipenya)\n" +
            "    v\n" +
            "dist/index.js   ← hasilnya: JavaScript biasa di folder dist, tanpa satu pun tipe\n" +
            "    |\n" +
            "    |  node dist/index.js\n" +
            "    v\n" +
            "hasil di terminal\n" +
            "```\n\n" +
            "### tsc --noEmit dan Pemeriksaan di CI/CD Dunia Kerja\n\n" +
            "Di proyek industri modern (seperti Next.js, Vite, atau NestJS), kompilasi file ke bundle browser atau server biasanya dikerjakan oleh compiler cepat seperti SWC, esbuild, atau Turbopack. Lalu untuk apa compiler TypeScript dipakai?\n\n" +
            "Untuk **pemeriksaan tipe murni tanpa membuat berkas fisik apa pun**. Perintahnya adalah `npx tsc --noEmit`. Di tim profesional, perintah ini dipasang di dalam skrip `npm run typecheck` dan dijalankan otomatis oleh CI/CD (seperti GitHub Actions) setiap kali ada yang mengajukan Pull Request. Bila ada kesalahan tipe sekecil apa pun, sistem langsung menolak penggabungan kode sebelum bug sempat masuk ke server produksi.\n\n" +
            "Enam step berikutnya menjalankan alur ini dari nol: memasang, membuat konfigurasi, mengompilasi, membaca error, dan mempercepat lingkaran belajarmu dengan `tsx`.\n\n" +
            "**Catatan tentang preview di BiLearn:** panel kanan bisa memeriksa apakah *sintaks* TypeScript-mu benar, tapi ia tidak menjalankan pemeriksaan tipe penuh seperti `tsc` di komputermu. Untuk step berisi perintah terminal, panel hanya menampilkan apa yang kamu ketik. Praktikkan perintah-perintahnya di terminal sungguhan supaya terbiasa.",
        },
        {
          kind: "step",
          id: "ts-0-1",
          title: "Memasang TypeScript di Sebuah Proyek",
          explanation:
            "TypeScript dipasang **per proyek**, bukan sekali untuk seluruh komputer. Alasannya praktis: proyek yang kamu buat tahun ini dan proyek lama di folder sebelah bisa butuh versi compiler yang berbeda, dan versi yang terkunci di dalam proyek membuat hasil di komputermu sama dengan hasil di komputer rekan setim. Karena compiler hanya dibutuhkan saat menulis kode — bukan saat aplikasi berjalan di server — ia dipasang sebagai **devDependency** memakai flag `-D` (bentuk panjangnya `--save-dev`). Jebakan yang sering terjadi: memasangnya tanpa `-D` sehingga compiler ikut terbawa ke server produksi dan memperbesar ukuran deployment tanpa guna.",
          example: {
            code: "npm install -D prettier",
            output:
              "added 1 package, and audited 128 packages in 3s\n\n" +
              "found 0 vulnerabilities",
            note: "Setelah perintah ini, nama paket muncul di bagian \"devDependencies\" pada package.json.",
          },
          instruction:
            "Kamu baru saja membuat folder proyek kosong yang sudah berisi `package.json`. Tulis satu perintah npm untuk memasang compiler TypeScript sebagai dependency yang hanya dipakai saat pengembangan.",
          starterCode: "# Tulis perintahnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "npm\\s+(install|i)\\s+(-D|--save-dev)\\s+typescript|npm\\s+(install|i)\\s+typescript\\s+(-D|--save-dev)",
              message:
                "Belum tepat. Perintahnya diawali `npm install`, lalu flag untuk devDependency (`-D` atau `--save-dev`), lalu nama paketnya: `typescript`.",
            },
          ],
          solution: "npm install -D typescript",
          susunKode: {
            question:
              "Tulis perintah npm untuk memasang TypeScript sebagai devDependency.",
            potongan: [
              "npm install",
              "-D",
              "typescript",
            ],
            pengecoh: [
              "npm add",
              "--save",
            ],
            pemisah: " ",
            explanation:
              "Saat memasang TypeScript di proyek, kesalahan yang sering terjadi adalah memasangnya sebagai dependency biasa (`--save`) atau secara global (`-g`), padahal compiler TypeScript hanya dibutuhkan saat pengembangan. Pengecoh `--save` dan `npm add` menggoda pemula yang belum terbiasa dengan flag `-D` (`--save-dev`) untuk membedakan devDependency.",
          },
        },
        {
          kind: "step",
          id: "ts-0-2",
          title: "Membuat tsconfig.json",
          explanation:
            "`tsconfig.json` adalah berkas yang memberi tahu compiler cara bekerja: folder mana yang diperiksa, hasil kompilasinya diletakkan di mana, dan seberapa galak pemeriksaannya. Kehadiran berkas ini juga menandai batas proyek — editor seperti VS Code membaca `tsconfig.json` untuk tahu file mana saja yang termasuk satu proyek TypeScript. Kamu tidak perlu mengetiknya dari nol: compiler bisa membuatkan kerangkanya lengkap dengan komentar penjelasan setiap opsi. Jebakan umum: menaruh `tsconfig.json` di folder yang salah — ia harus berada di akar proyek, sejajar dengan `package.json`.",
          example: {
            code: "npx tsc --version",
            output: "Version 5.6.3",
            note: "`npx` menjalankan perintah dari paket yang terpasang di proyek, jadi kamu tidak perlu memasang tsc secara global.",
          },
          instruction:
            "TypeScript sudah terpasang di proyekmu, tapi belum ada berkas konfigurasi. Jalankan compiler dengan flag yang membuatkan kerangka `tsconfig.json` secara otomatis di folder saat ini.",
          starterCode: "# Tulis perintahnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(npx\\s+)?tsc\\s+--init",
              message:
                "Belum tepat. Panggil compiler lewat `npx tsc`, lalu tambahkan flag yang artinya \"buatkan konfigurasi awal\" — namanya `--init`.",
            },
          ],
          solution: "npx tsc --init",
          susunKode: {
            question:
              "Jalankan compiler dengan flag yang membuatkan tsconfig.json otomatis.",
            potongan: [
              "npx tsc",
              "--init",
            ],
            pengecoh: [
              "npx tsconfig",
              "--generate",
            ],
            pemisah: " ",
            explanation:
              "Perintah untuk membuat `tsconfig.json` adalah `npx tsc --init`. Pengecoh `npx tsconfig` menggoda karena nama berkas konfigurasinya adalah `tsconfig.json`, sehingga keliru dikira sebagai perintah CLI. Begitu pula `--generate` sering dikira flag pembuat berkas, padahal TypeScript menggunakan flag `--init`.",
          },
        },
        {
          kind: "step",
          id: "ts-0-3",
          title: "Mengompilasi File .ts Menjadi .js",
          explanation:
            "Compiler mengerjakan dua hal sekaligus dalam satu perintah: memeriksa apakah tipe-tipe di kodemu masuk akal, lalu menuliskan versi JavaScript-nya. Kalau ada kesalahan tipe, pesannya muncul di terminal — dan secara bawaan file `.js` **tetap dihasilkan**, karena TypeScript menganggap kamu yang paling tahu apakah kode itu layak dijalankan. Menjalankan `npx tsc` tanpa nama file akan mengompilasi seluruh proyek sesuai isi `tsconfig.json`, sedangkan menyebut nama file akan mengompilasi file itu saja dan **mengabaikan tsconfig.json**. Jebakan yang menghabiskan waktu banyak orang: menyebut nama file lalu heran kenapa opsi `strict` di tsconfig tidak berlaku.",
          example: {
            code: "npx tsc laporan.ts",
            output:
              "laporan.ts:2:7 - error TS2322: Type 'string' is not assignable to type 'number'.\n\n" +
              "2 const total: number = \"120000\";\n" +
              "        ~~~~~\n\n" +
              "Found 1 error in laporan.ts:2",
            note: "Perhatikan formatnya: nama file, baris:kolom, kode error (TS2322), lalu kalimat masalahnya.",
          },
          instruction:
            "Di folder proyekmu ada file bernama `hitung.ts`. Tulis perintah untuk mengompilasi file tersebut saja menjadi JavaScript.",
          starterCode: "# Tulis perintahnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(npx\\s+)?tsc\\s+hitung\\.ts",
              message:
                "Belum tepat. Bentuknya `npx tsc` diikuti nama file yang ingin dikompilasi, lengkap dengan ekstensinya.",
            },
          ],
          solution: "npx tsc hitung.ts",
          susunKode: {
            question:
              "Tulis perintah untuk mengompilasi hitung.ts saja.",
            potongan: [
              "npx tsc",
              "hitung.ts",
            ],
            pengecoh: [
              "npx build",
              "hitung.js",
            ],
            pemisah: " ",
            explanation:
              "Untuk mengompilasi file TypeScript secara spesifik, kita memanggil `npx tsc hitung.ts`. Pengecoh `npx build` menggoda pengguna yang terbiasa dengan perintah build framework, padahal CLI TypeScript menggunakan `tsc`. Pengecoh `hitung.js` juga sering jadi jebakan karena pengguna keliru memasukkan nama file hasil kompilasi.",
          },
        },
        {
          kind: "step",
          id: "ts-0-4",
          title: "Menjalankan Hasilnya — dan Melihat Tipe Menghilang",
          explanation:
            "Setelah kompilasi selesai, yang benar-benar dijalankan bukan file `.ts` milikmu, melainkan file `.js` hasil terjemahannya. Node.js tidak mengerti anotasi tipe, jadi ia hanya bisa menjalankan berkas hasil kompilasi itu. Kalau kamu membuka file `.js` yang dihasilkan, kamu akan melihat kodemu sendiri **tanpa satu pun tipe** — inilah bukti nyata bahwa tipe hanya alat bantu saat menulis. Memahami hal ini menutup satu kesalahpahaman besar: TypeScript tidak membuat aplikasimu lebih cepat, lebih aman dari peretas, atau lebih ringan; ia membuat *kamu* lebih jarang salah.",
          example: {
            code:
              "// laporan.ts — yang kamu tulis\n" +
              "const total: number = 120000;\n" +
              "const label: string = \"Total\";\n" +
              "console.log(label, total);\n\n" +
              "// laporan.js — hasil kompilasi, dijalankan dengan: node laporan.js\n" +
              "const total = 120000;\n" +
              "const label = \"Total\";\n" +
              "console.log(label, total);",
            output: "Total 120000",
            note: "Bandingkan kedua blok: satu-satunya perbedaan adalah `: number` dan `: string` yang hilang.",
          },
          instruction:
            "Kompilasi `hitung.ts` menghasilkan berkas `hitung.js` di folder yang sama. Tulis perintah Node.js untuk menjalankan berkas hasil kompilasi itu.",
          starterCode: "# Tulis perintahnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "node\\s+(\\./)?hitung\\.js",
              message:
                "Belum tepat. Node hanya bisa menjalankan JavaScript, jadi yang disebut adalah berkas berekstensi `.js`, bukan `.ts`.",
            },
          ],
          solution: "node hitung.js",
          susunKode: {
            question:
              "Tulis perintah Node.js untuk menjalankan berkas hitung.js hasil kompilasi.",
            potongan: [
              "node",
              "hitung.js",
            ],
            pengecoh: [
              "tsc",
              "hitung.ts",
            ],
            pemisah: " ",
            explanation:
              "Hasil kompilasi TypeScript adalah file JavaScript (.js) murni yang dieksekusi menggunakan runtime Node.js via `node hitung.js`. Pengecoh `hitung.ts` menggoda karena merupakan nama file sumber asal, padahal Node.js tidak bisa langsung menjalankan file TS tanpa runner khusus. Pengecoh `tsc` keliru digunakan jika menyangka kompilator yang me-run kode.",
          },
        },
        {
          kind: "step",
          id: "ts-0-5",
          title: "Membaca Pesan Error tsc Pertamamu",
          explanation:
            "Pesan error TypeScript terlihat menakutkan karena panjang, padahal susunannya selalu sama: **lokasi** (file, baris, kolom), **kode error** (`TS` diikuti angka), lalu **kalimat masalahnya**. Kalimat itu hampir selalu berbentuk \"Type X is not assignable to type Y\" atau \"Argument of type X is not assignable to parameter of type Y\", yang artinya: kamu memberi sesuatu berjenis X ke tempat yang hanya menerima Y. Cara membacanya: temukan X dan Y dulu, baru lihat baris yang ditunjuk. Jebakan pemula: langsung mengubah tipe di deklarasi supaya error hilang, padahal yang salah justru nilai yang dikirim — memperbaiki gejala, bukan penyebabnya.",
          example: {
            code:
              "function ulangi(teks: string, kali: number): string {\n" +
              "  return teks.repeat(kali);\n" +
              "}\n" +
              "console.log(ulangi(3, \"ha\"));   // dua argumen tertukar",
            output:
              "index.ts:4:20 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.\n\n" +
              "4 console.log(ulangi(3, \"ha\"));   // dua argumen tertukar\n" +
              "                     ~\n\n" +
              "Found 1 error in index.ts:4\n\n" +
              "Setelah argumen ditukar menjadi ulangi(\"ha\", 3), hasilnya:\n" +
              "hahaha",
            note: "Baca urutan argumennya, bukan cuma tipenya — error TS2345 sering berarti posisi argumen tertukar.",
          },
          instruction:
            "Kode di editor gagal dikompilasi dengan pesan yang sudah dituliskan sebagai komentar di atasnya. Sesuai isi pesan itu, perbaiki **pemanggilan fungsinya** — bukan tipe parameter di deklarasi — agar argumen yang dikirim benar-benar berjenis angka.",
          starterCode:
            "// Terminal menampilkan:\n" +
            "// index.ts:8:25 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.\n\n" +
            "function luasPersegi(sisi: number): number {\n" +
            "  return sisi * sisi;\n" +
            "}\n" +
            "console.log(luasPersegi(\"5\"));\n",
          language: "jsx",
          tests: [
            {
              pattern: "luasPersegi\\s*\\(\\s*5\\s*\\)",
              message:
                "Panggil `luasPersegi` dengan angka 5 tanpa tanda kutip — tanda kutip membuatnya menjadi teks.",
            },
            {
              pattern: "sisi\\s*:\\s*(string|any)",
              mustNotMatch: true,
              message:
                "Jangan melonggarkan tipe parameter `sisi`. Yang keliru adalah nilai yang dikirim, bukan deklarasi fungsinya.",
            },
          ],
          solution:
            "function luasPersegi(sisi: number): number {\n" +
            "  return sisi * sisi;\n" +
            "}\n" +
            "console.log(luasPersegi(5));",
          susunKode: {
            question:
              "Perbaiki pemanggilan fungsi agar argumen yang dikirim berjenis angka.",
            potongan: [
              "function luasPersegi(sisi: number): number {",
              "  return sisi * sisi;",
              "}",
              "console.log(luasPersegi(5));",
            ],
            pengecoh: [
              "console.log(luasPersegi(\"5\"));",
              "function luasPersegi(sisi: string): number {",
            ],
            pemisah: "\n",
            explanation:
              "Pesan error TypeScript memberi tahu bahwa argumen tipe `string` tidak dapat diberikan ke parameter tipe `number`. Perbaikan yang benar adalah mengubah argumen pemanggilan fungsi menjadi angka `luasPersegi(5)`. Pengecoh dengan string \"5\" menggoda tetapi tetap menyebabkan error tipe, dan mengubah anotasi tipe parameter menjadi `string` adalah jebakan yang melanggar instruksi.",
          },
        },
        {
          kind: "step",
          id: "ts-0-6",
          title: "tsx: Menjalankan File .ts Tanpa Kompilasi Manual",
          explanation:
            "Mengetik `npx tsc` lalu `node hasil.js` setiap kali mengubah satu baris itu melelahkan, terutama saat sedang belajar. Paket `tsx` menggabungkan keduanya: ia mengompilasi di memori lalu langsung menjalankannya, sehingga kamu cukup satu perintah dan tidak ada berkas `.js` yang berserakan. Yang perlu kamu sadari: demi kecepatan, `tsx` **melewati pemeriksaan tipe** — ia hanya membuang anotasi lalu menjalankan kodenya. Karena itu di proyek nyata orang tetap menjalankan `npx tsc --noEmit` secara terpisah (biasanya di CI) untuk memeriksa tipe, sementara `tsx` dipakai untuk mencoba-coba dengan cepat.",
          example: {
            code: "npm install -D tsx",
            output:
              "added 3 packages, and audited 131 packages in 2s\n\n" +
              "found 0 vulnerabilities",
            note: "Sama seperti typescript, tsx juga alat bantu pengembangan — pasang dengan -D.",
          },
          instruction:
            "Paket `tsx` sudah terpasang di proyekmu. File yang ingin kamu coba ada di `src/index.ts`. Tulis satu perintah untuk menjalankan file itu langsung, tanpa membuat berkas `.js` lebih dulu.",
          starterCode: "# Tulis perintahnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(npx\\s+)?tsx\\s+(\\./)?src/index\\.ts",
              message:
                "Belum tepat. Bentuknya `npx tsx` diikuti jalur file `.ts` yang ingin dijalankan, yaitu `src/index.ts`.",
            },
          ],
          solution: "npx tsx src/index.ts",
          susunKode: {
            question:
              "Tulis perintah untuk menjalankan src/index.ts langsung menggunakan tsx.",
            potongan: [
              "npx tsx",
              "src/index.ts",
            ],
            pengecoh: [
              "npx node",
              "src/index.js",
            ],
            pemisah: " ",
            explanation:
              "Perintah `npx tsx src/index.ts` langsung mengeksekusi file TypeScript tanpa membuat file JS perantara di disk. Pengecoh `npx node` menggoda karena Node.js adalah runtime dasar, tetapi `node` standar tidak mendukung pengesetan loader TS secara langsung tanpa flag tambahan. Pengecoh `src/index.js` adalah keliru karena file yang ingin dijalankan ber-ekstensi `.ts`.",
          },
        },
        {
          kind: "quiz",
          id: "ts-0-kuis",
          title: "Kuis: Persiapan & Instalasi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Setelah file `app.ts` dikompilasi menjadi `app.js`, apa yang terjadi pada anotasi tipe seperti `: number` di dalamnya?",
              choices: [
                "Ikut tersalin ke app.js dan diperiksa lagi oleh Node saat dijalankan",
                "Dibuang seluruhnya — app.js adalah JavaScript biasa tanpa satu pun tipe",
                "Diubah menjadi komentar agar tetap terbaca manusia",
                "Disimpan di berkas terpisah bernama app.types.js",
              ],
              answerIndex: 1,
              explanation:
                "Tipe hanya dipakai compiler saat memeriksa kode. Setelah pemeriksaan selesai, anotasinya dihapus dan yang tersisa adalah JavaScript murni. Inilah sebabnya TypeScript tidak bisa melindungimu dari data buruk yang datang saat aplikasi berjalan — pilihan pertama menggoda karena orang mengira tipe \"ikut jalan\", padahal Node sama sekali tidak mengenalnya.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Kenapa TypeScript dipasang dengan `npm install -D typescript` dan bukan tanpa flag `-D`?",
              choices: [
                "Karena tanpa -D perintah npm akan gagal",
                "Karena compiler hanya dibutuhkan saat menulis kode, bukan saat aplikasi berjalan di server",
                "Karena -D membuat proses instalasi lebih cepat",
                "Karena -D otomatis membuatkan tsconfig.json",
              ],
              answerIndex: 1,
              explanation:
                "`-D` menaruh paket di `devDependencies`, yaitu daftar alat bantu pengembangan. Server produksi menjalankan hasil kompilasi (`.js`), jadi ia tidak butuh compiler — memasangnya tanpa `-D` hanya memperbesar deployment. Perintahnya tetap berhasil tanpa `-D`, jadi kesalahan ini tidak akan menegurmu sampai deployment terasa berat.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kamu menjalankan `npx tsc index.ts`, tapi opsi `strict` yang sudah kamu nyalakan di `tsconfig.json` sepertinya tidak berlaku. Apa penyebab paling mungkin?",
              choices: [
                "tsconfig.json harus bernama tsconfig.ts",
                "Menyebut nama file secara langsung membuat compiler mengabaikan tsconfig.json",
                "Opsi strict hanya berlaku untuk file di dalam folder src",
                "Versi TypeScript-mu terlalu baru",
              ],
              answerIndex: 1,
              explanation:
                "Begitu kamu memberi `tsc` daftar file secara eksplisit, compiler menganggap kamu mengatur semuanya sendiri dan tidak membaca `tsconfig.json`. Jalankan `npx tsc` tanpa nama file agar konfigurasinya dipakai. Ini penyebab kebingungan yang sangat sering terjadi karena tidak ada peringatan apa pun yang muncul.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Terminal menampilkan: `error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'`. Apa arti pesan ini?",
              choices: [
                "Ada fungsi yang lupa dideklarasikan",
                "Sebuah fungsi dipanggil dengan argumen berupa teks, padahal parameternya minta angka",
                "Variabel bertipe number dipakai sebelum diisi nilai",
                "Berkas tsconfig.json rusak",
              ],
              answerIndex: 1,
              explanation:
                "Kata kunci `Argument ... parameter` menunjukkan masalahnya ada di **pemanggilan** fungsi, bukan di deklarasinya. Pola \"type X is not assignable to type Y\" selalu berarti: kamu memberi X ke tempat yang hanya menerima Y. Godaan terbesarnya adalah mengganti tipe parameter jadi `string` agar error hilang — itu menyembunyikan bug, bukan memperbaikinya.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Tim kamu memakai `tsx` untuk menjalankan skrip saat pengembangan. Kenapa mereka tetap menjalankan `npx tsc --noEmit` di pipeline CI?",
              choices: [
                "Karena tsx tidak bisa membaca file di folder src",
                "Karena tsx melewati pemeriksaan tipe demi kecepatan, jadi tipe perlu diperiksa terpisah",
                "Karena --noEmit menjalankan seluruh unit test",
                "Karena CI tidak bisa memasang tsx",
              ],
              answerIndex: 1,
              explanation:
                "`tsx` hanya membuang anotasi lalu menjalankan kodenya, sehingga kode dengan tipe yang salah tetap jalan di komputermu. `tsc --noEmit` memeriksa tipe tanpa menghasilkan berkas apa pun — pas untuk CI. Kalau langkah ini dilewatkan, kesalahan tipe baru ketahuan oleh orang lain yang membuka proyekmu di editor.",
            },
          ],
        },
      ],
    },
    {
      slug: "tipe-dasar",
      title: "Tipe Dasar & Inference",
      description:
        "TS = JS + anotasi tipe. Mulai dari yang paling sering dipakai sehari-hari.",
      topics: [
        "Kenapa TypeScript ada: bug yang tertangkap sebelum jalan",
        "Anotasi dasar: string, number, boolean, array",
        "Type inference: kapan TIDAK perlu menulis tipe",
        "any vs unknown — dan kenapa any adalah menyerah",
        "null, undefined, dan strictNullChecks",
        "Function: tipe parameter & return",
        "Setup: tsconfig penting (strict: true selalu)",
      ],
      items: [
        {
          kind: "materi",
          id: "ts-1-m1",
          title: "Membaca dan Menulis Anotasi Tipe",
          body:
            "# Pengertian\n\n" +
            "**Anotasi tipe** adalah keterangan yang kamu tempelkan pada sebuah variabel, parameter, atau nilai kembalian fungsi. Bentuknya selalu sama: **titik dua, lalu nama tipenya**.\n\n" +
            "```text\nnamaVariabel : namaTipe\n              ^\n              titik dua dibaca \"bertipe\"\n```\n\n" +
            "Jadi `let umur: number` dibaca \"umur bertipe number\". Titik dua di sini **bukan** operator JavaScript — ia bagian dari TypeScript dan akan hilang saat kompilasi.\n\n" +
            "## Tipe Dasar yang Dipakai Sehari-hari\n\n" +
            "| Tipe | Isinya | Contoh nilai |\n" +
            "|---|---|---|\n" +
            "| `string` | teks | `\"Bimo\"`, `''`, `` `Halo ${nama}` `` |\n" +
            "| `number` | semua angka (bulat maupun desimal) | `42`, `-7`, `3.14` |\n" +
            "| `boolean` | benar/salah | `true`, `false` |\n" +
            "| `string[]` | array berisi teks saja | `[\"a\", \"b\"]` |\n" +
            "| `number[]` | array berisi angka saja | `[1, 2, 3]` |\n" +
            "| `[string, number]` | tuple: array dengan panjang dan tipe urutan pasti | `[\"OK\", 200]`, koordinat `[-6.2, 106.8]` |\n" +
            "| `void` | nilai kembalian fungsi yang tidak menghasilkan apa-apa | `function catat(): void` |\n" +
            "| `never` | fungsi yang tidak pernah selesai (melempar error) | `function lempar(): never` |\n" +
            "| `null` | sengaja kosong | `null` |\n" +
            "| `undefined` | belum diisi sama sekali | `undefined` |\n\n" +
            "Perhatikan: TypeScript **tidak** punya `int` dan `float` terpisah seperti Java atau C. Semua angka adalah `number`, persis seperti di JavaScript.\n\n" +
            "## Tuple vs Array Biasa\n\n" +
            "Banyak pemula rancu antara array biasa dengan tuple:\n\n" +
            "```text\n(string | number)[]   → array biasa: panjang bebas, urutan bebas ([1, \"a\", 2])\n[string, number]      → tuple: persis dua elemen, indeks 0 wajib string, indeks 1 wajib number\n```\n\n" +
            "Tuple dipakai di mana-mana di industri. Contoh paling terkenal adalah hook React `const [state, setState] = useState(0)` yang mengembalikan tuple dua elemen: nilai state dan fungsi pengubahnya.\n\n" +
            "## void vs never vs undefined pada Fungsi\n\n" +
            "- `void`: fungsi selesai bekerja tapi tidak mengembalikan nilai bermakna (misal mencetak `console.log` atau menyimpan ke database).\n" +
            "- `never`: fungsi yang tidak mungkin pernah selesai normal — ia melempar pengecualian (`throw new Error(...)`) atau berjalan dalam perulangan tanpa henti.\n" +
            "- `undefined`: fungsi yang secara eksplisit menulis `return undefined;`.\n\n" +
            "## Use Case Utama\n\n" +
            "> **Kapan dipakai:** anotasi paling berguna di tempat yang tidak punya nilai awal — terutama **parameter fungsi**. Tanpa anotasi, TypeScript tidak punya petunjuk apa pun tentang isi parameter, dan dengan `strict: true` ia akan menolak kodemu.\n\n" +
            "> **Kapan TIDAK dipakai:** saat kamu langsung memberi nilai. `let kota = \"Bandung\"` sudah cukup jelas — menulis `let kota: string = \"Bandung\"` hanya menambah kebisingan. Ini dibahas tuntas di step Type Inference.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Anotasi tipe itu seperti **label pada wadah bumbu di dapur**. Wadah tanpa label tetap bisa diisi apa saja, dan kamu mungkin masih ingat isinya hari ini. Masalahnya muncul tiga bulan kemudian, atau saat orang lain memasak di dapurmu. Label tidak mengubah rasa masakan — ia mencegah gula masuk ke tumisan.\n\n" +
            "## Jebakan yang Sering Menjatuhkan Pemula\n\n" +
            "1. **Mengira anotasi memeriksa data saat aplikasi berjalan.** `let umur: number` tidak menghalangi apa pun kalau angkanya datang dari server sebagai teks — anotasi sudah hilang sebelum kode dijalankan.\n" +
            "2. **Mengira `number[]` menjamin isinya ada.** Ia mengunci **jenis** isi, bukan jumlahnya. Array kosong tetap sah, jadi `nilai[0]` bisa saja `undefined`.\n" +
            "3. **Menambal error dengan `any`.** Errornya hilang seketika, dan bersamanya hilang juga seluruh perlindungan di baris-baris berikutnya.\n" +
            "4. **Menganotasi variabel yang sudah jelas.** `let kota: string = \"Bandung\"` bukan salah, tapi ia teks tambahan yang harus ikut dirawat setiap kali nilainya berganti jenis.\n" +
            "5. **Mengira `null` dan `undefined` bisa dipertukarkan.** Dengan `strict` menyala keduanya tipe berbeda, dan `string` tidak menerima salah satu pun tanpa kamu tuliskan.\n\n" +
            "## Satu Hal yang Sering Membingungkan: Kapan Anotasi vs Inference?\n\n" +
            "Di step pertama modul ini kamu diminta **menulis** anotasi secara eksplisit, lalu beberapa step kemudian diminta **tidak** menulisnya. Itu bukan kontradiksi:\n\n" +
            "- Saat belajar, menulis anotasi eksplisit membuatmu terbiasa dengan bentuknya.\n" +
            "- Di kode nyata, anotasi ditulis **hanya di tempat yang tidak bisa ditebak TypeScript**.\n\n" +
            "**Aturan praktis industri:**\n" +
            "- **Wajib Anotasi:** parameter fungsi, return type fungsi publik, deklarasi model data/interface, dan inisialisasi state kosong seperti `useState<User | null>(null)`.\n" +
            "- **Biarkan Inference:** variabel lokal di dalam fungsi yang langsung diisi nilai awal (`const total = 50000`).",
        },
        {
          kind: "step",
          id: "ts-1-1",
          title: "Kenapa TypeScript Ada?",
          explanation:
            "TypeScript bekerja seperti fitur spell-check di aplikasi pengolah kata: ia menggarisbawahi kekeliruan saat kamu masih mengetik, bukan setelah dokumennya dicetak dan dibagikan. Kekeliruan yang paling sering ia tangkap adalah **jenis data yang tertukar** — angka yang ternyata tersimpan sebagai teks, properti yang salah eja, argumen yang tertukar posisinya. Di JavaScript murni, kekeliruan seperti itu tidak menimbulkan error sama sekali; ia hanya menghasilkan nilai aneh yang baru terlihat berminggu-minggu kemudian, biasanya oleh pengguna. Jebakan klasiknya adalah operator `+`: pada angka ia menjumlahkan, pada teks ia menyambung, sehingga `\"50000\" + 1000` menghasilkan `\"500001000\"` tanpa satu pun peringatan.",
          example: {
            code:
              "// ❌ JavaScript menerima ini tanpa protes\n" +
              "const stok = \"12\";        // datang dari input form, jadinya teks\n" +
              "console.log(stok - 2);    // kebetulan benar: teks diubah jadi angka\n" +
              "console.log(stok + 2);    // di sinilah bugnya\n\n" +
              "// ✅ dengan tipe yang benar sejak awal\n" +
              "const stokBenar: number = 12;\n" +
              "console.log(stokBenar + 2);",
            output: "10\n122\n14",
            note: "Baris kedua adalah bug yang paling sering lolos ke produksi: hasilnya \"122\", bukan 14.",
          },
          instruction:
            "Di editor, harga total sebuah pesanan tersimpan sebagai teks. Akibatnya penambahan ongkos kirim menyambung angka alih-alih menjumlahkannya. Perbaiki deklarasi `hargaTotal` agar ia benar-benar berjenis angka, lalu perhatikan perubahan hasilnya di panel preview. Anotasi eksplisitnya boleh kamu pertahankan atau hapus — keduanya diterima, dan step Type Inference nanti menjelaskan kapan sebaiknya dipilih yang mana.",
          starterCode:
            "const hargaTotal: string = \"50000\";\n" +
            "const ongkir = 1000;\n" +
            "console.log(hargaTotal + ongkir);\n",
          language: "jsx",
          tests: [
            {
              pattern: "const\\s+hargaTotal\\s*(:\\s*number\\s*)?=\\s*50000\\b",
              message:
                "Hapus tanda kutip pada nilainya — `\"50000\"` adalah teks, `50000` adalah angka. Anotasinya boleh kamu tulis `: number` atau kamu hapus sama sekali.",
            },
            {
              pattern: "hargaTotal\\s*:\\s*string",
              mustNotMatch: true,
              message:
                "Masih ada anotasi `: string` pada hargaTotal. Selama tipenya teks, operator + akan menyambung, bukan menjumlahkan.",
            },
          ],
          solution:
            "const hargaTotal: number = 50000;\n" +
            "const ongkir = 1000;\n" +
            "console.log(hargaTotal + ongkir);",
          susunKode: {
            question:
              "Deklarasikan hargaTotal sebagai angka 50000.",
            potongan: [
              "const hargaTotal: number = 50000;",
              "const ongkir = 1000;",
              "console.log(hargaTotal + ongkir);",
            ],
            pengecoh: [
              "const hargaTotal: string = \"50000\";",
              "const hargaTotal: any = \"50000\";",
            ],
            pemisah: "\n",
            explanation:
              "Memastikan variabel bernilai angka sangat penting agar operasi aritmatika tidak berubah menjadi penyambungan string. Pengecoh `string = \"50000\"` menggoda pemula yang belum paham dampak pengetikan teks pada angka, dan sering keliru membuat hasil `500001000`. Pengecoh type assertion juga jebakan yang menyimpang dari anotasi angka.",
          },
        },
        {
          kind: "step",
          id: "ts-1-2",
          title: "Anotasi Dasar: string, number, boolean, array",
          explanation:
            "Anotasi ditulis tepat setelah nama variabel dengan pola `nama: tipe`, dan untuk array kamu menambahkan `[]` di belakang tipe isinya — `number[]` berarti \"array yang setiap elemennya angka\". Ada bentuk kedua yang sama artinya, `Array<number>`; keduanya benar, dan kebanyakan tim memilih `number[]` karena lebih pendek. Manfaat nyatanya bukan pada deklarasi, tapi pada apa yang terjadi setelahnya: TypeScript akan menolak `nilai.push(\"A\")` dan memberimu autocomplete method angka saat kamu menulis `nilai[0].`. Jebakan yang perlu diingat: `string[]` mengunci **isi** array, bukan panjangnya — array kosong `[]` tetap sah, jadi jangan berasumsi elemen pertama pasti ada.",
          example: {
            code:
              "let sudahLunas: boolean = false;\n" +
              "let namaBarang: string[] = [\"Kopi\", \"Gula\"];\n" +
              "namaBarang.push(\"Susu\");\n" +
              "console.log(sudahLunas, namaBarang.length, namaBarang[2]);",
            output: "false 3 Susu",
            note: "Coba tambahkan namaBarang.push(99) di editormu nanti — compiler akan menolaknya karena isinya dikunci sebagai string.",
          },
          instruction:
            "Sebuah aplikasi rapor menyimpan tiga nilai ujian: 85, 90, dan 95. Buat sebuah konstanta bernama `nilai` yang menampung ketiga angka itu dalam satu array, dan beri anotasi tipe yang memastikan tidak ada teks yang bisa menyelinap masuk ke dalamnya.",
          starterCode: "// Tulis konstanta nilai di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "(?:const|let)\\s+nilai\\s*:\\s*(number\\s*\\[\\s*\\]|Array\\s*<\\s*number\\s*>)\\s*=\\s*\\[\\s*85\\s*,\\s*90\\s*,\\s*95\\s*,?\\s*\\]",
              message:
                "Bentuknya `const nilai: <tipe> = [85, 90, 95];`. Tipenya harus menyatakan \"array berisi angka\" — tulis `number[]` (atau `Array<number>`).",
            },
          ],
          solution: "const nilai: number[] = [85, 90, 95];",
          susunKode: {
            question:
              "Buat array angka bernamanya nilai berisi [85, 90, 95].",
            potongan: [
              "const nilai: number[] =",
              "[85, 90, 95];",
            ],
            pengecoh: [
              "const nilai: string[] =",
              "[\"85\", \"90\", \"95\"];",
            ],
            pemisah: " ",
            explanation:
              "Anotasi array angka ditulis sebagai `number[]` atau `Array<number>`. Pengecoh `string[]` menggoda bagi yang keliru menganggap array nilai sebagai kumpulan teks. Pengecoh elemen string `[\"85\", \"90\", \"95\"]` juga sering menjadi jebakan karena menyisipkan tanda kutip pada angka.",
          },
        },
        {
          kind: "step",
          id: "ts-1-3",
          title: "Type Inference: Kapan TIDAK Perlu Menulis Tipe",
          explanation:
            "Sama seperti kamu bisa menebak bahwa \"Budi\" adalah sebuah nama tanpa diberi tahu, TypeScript menebak tipe dari nilai awal yang kamu berikan — kemampuan ini disebut **type inference**. Kalau kamu menulis `let skor = 100`, compiler langsung tahu `skor` bertipe `number`, dan ia akan tetap menolak `skor = \"seratus\"` di baris berikutnya. Karena itu menulis `let skor: number = 100` tidak menambah keamanan apa pun; ia hanya menambah teks yang harus ikut diubah setiap kali nilainya berganti jenis. Aturan yang dipakai di code review: **beri anotasi di tempat yang tidak punya nilai awal** (parameter fungsi, data dari API), dan biarkan inference bekerja untuk variabel lokal biasa.",
          example: {
            code:
              "let kota = \"Bandung\";      // TS menyimpulkan: string\n" +
              "let jumlah = 3;            // TS menyimpulkan: number\n" +
              "let daftar = [1, 2, 3];    // TS menyimpulkan: number[]\n" +
              "console.log(typeof kota, typeof jumlah, Array.isArray(daftar));",
            output: "string number true",
            note: "`typeof` di sini adalah typeof JavaScript yang berjalan saat runtime — berbeda dari typeof di level tipe yang dibahas di modul Utility Types.",
          },
          instruction:
            "Buat variabel bernama `skor` memakai `let` yang berisi angka 100. Kali ini jangan tulis anotasi tipenya sama sekali — biarkan TypeScript menyimpulkannya sendiri dari nilai awal.",
          starterCode: "// Tulis variabel skor di sini\n",
          language: "jsx",
          tests: [
            {
              pattern: "let\\s+skor\\s*=\\s*100\\b",
              message:
                "Deklarasikan `skor` dengan `let` dan langsung isi angka 100.",
            },
            {
              pattern: "skor\\s*:\\s*\\w",
              mustNotMatch: true,
              message:
                "Masih ada anotasi tipe pada `skor`. Hapus bagian `: number` — nilai 100 sudah cukup bagi TypeScript untuk menyimpulkannya.",
            },
          ],
          solution: "let skor = 100;",
          susunKode: {
            question:
              "Buat let skor = 100 tanpa anotasi tipe.",
            potongan: [
              "let skor",
              "= 100;",
            ],
            pengecoh: [
              "let skor: number",
              "= \"100\";",
            ],
            pemisah: " ",
            explanation:
              "Dalam TypeScript, Type Inference akan otomatis menyimpulkan tipe `number` dari nilai awal 100. Pengecoh `let skor: number` menggoda tetapi melanggar instruksi untuk tidak menulis anotasi tipe sama sekali. Pengecoh `= \"100\";` sering keliru dipakai jika salah mengetik nilai awal sebagai string.",
          },
        },
        {
          kind: "step",
          id: "ts-1-4",
          title: "any vs unknown — Kenapa any Adalah Menyerah",
          explanation:
            "`any` memberi tahu compiler \"jangan periksa apa pun di sini\", dan sejak saat itu variabel tersebut kembali berperilaku seperti JavaScript biasa: salah ketik nama method pun tidak akan ditegur. Yang membuatnya berbahaya adalah sifatnya menular — nilai `any` yang dimasukkan ke variabel lain akan melemahkan pemeriksaan di sana juga, sehingga satu `any` bisa membutakan seluruh alur data. `unknown` adalah versi jujurnya: ia juga berarti \"saya belum tahu isinya apa\", bedanya compiler **melarang** kamu menyentuh isinya sampai kamu membuktikan tipenya lewat pengecekan seperti `typeof`. Pakai `unknown` untuk semua data yang datang dari luar aplikasimu — hasil `fetch`, isi `JSON.parse`, pesan dari WebSocket — karena di situlah asumsi paling sering meleset.",
          example: {
            code:
              "// ❌ any: compiler diam, aplikasi meledak saat dijalankan\n" +
              "const dariApi: any = 42;\n" +
              "// dariApi.toUpperCase();   // lolos compile, runtime: TypeError\n\n" +
              "// ✅ unknown: compiler memaksa dicek dulu\n" +
              "const aman: unknown = 42;\n" +
              "if (typeof aman === \"number\") {\n" +
              "  console.log(aman.toFixed(1));\n" +
              "} else {\n" +
              "  console.log(\"bukan angka\");\n" +
              "}",
            output: "42.0",
            note: "Baris yang dikomentari adalah bug nyata: dengan any, TypeScript tidak menolongmu sama sekali.",
          },
          instruction:
            "Kamu menerima sebuah nilai dari API yang belum bisa dipastikan jenisnya. Simpan nilai itu di variabel bernama `dataMentah` dengan tipe teraman yang memaksa pengecekan sebelum dipakai, lalu tulis pengecekan yang memastikan isinya berupa teks sebelum kamu mengaksesnya.",
          starterCode: "// Tulis kode di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern: "(let|const)\\s+dataMentah\\s*:\\s*unknown",
              message:
                "Deklarasikan `dataMentah` dengan tipe `unknown`, bukan `any` — hanya `unknown` yang memaksa pengecekan sebelum dipakai.",
            },
            {
              pattern: "typeof\\s+dataMentah\\s*===\\s*['\"]string['\"]",
              message:
                "Tambahkan pengecekan `if (typeof dataMentah === \"string\")` supaya compiler yakin isinya benar-benar teks.",
            },
          ],
          solution:
            "const dataMentah: unknown = \"Halo dari API\";\n" +
            "if (typeof dataMentah === \"string\") {\n" +
            "  console.log(dataMentah.toUpperCase());\n" +
            "}",
          susunKode: {
            question:
              "Gunakan tipe unknown untuk dataMentah dan periksa typeof sebelum memakainya.",
            potongan: [
              "const dataMentah: unknown = \"Halo dari API\";",
              "if (typeof dataMentah === \"string\") {",
              "  console.log(dataMentah.toUpperCase());",
              "}",
            ],
            pengecoh: [
              "const dataMentah: any = \"Halo dari API\";",
              "if (dataMentah.type === \"string\") {",
            ],
            pemisah: "\n",
            explanation:
              "Tipe `unknown` adalah tipe teraman untuk data luar karena memaksa tipe diperiksa sebelum digunakan. Pengecoh `any` menggoda karena mudah ditulis tetapi mematikan pemeriksaan kompilator, yang merupakan jebakan umum dalam TypeScript. Pengecoh `dataMentah.type` sering keliru menguji properti alih-alih operator `typeof`.",
          },
        },
        {
          kind: "step",
          id: "ts-1-5",
          title: "null, undefined, dan strictNullChecks",
          explanation:
            "`null` berarti \"sengaja dikosongkan\", sedangkan `undefined` berarti \"belum pernah diisi\" — keduanya kosong, tapi ceritanya berbeda. Dengan opsi `strictNullChecks` menyala, TypeScript memisahkan keduanya dari tipe biasa: `string` tidak lagi boleh berisi `null`, dan kalau memang bisa kosong kamu harus menuliskannya secara terbuka sebagai `string | null`. Efeknya terasa langsung: setiap kali kamu menyentuh nilai yang mungkin kosong tanpa memeriksanya dulu, compiler menolak dengan pesan `'x' is possibly 'null'` — inilah pertahanan terhadap error runtime paling terkenal di JavaScript, `Cannot read properties of null`. Jebakan yang perlu diwaspadai: `if (nama)` juga menganggap string kosong `\"\"` dan angka `0` sebagai kosong, jadi untuk membedakan \"kosong\" dari \"nol\" pakai `if (nama !== null)`.",
          example: {
            code:
              "// ❌ compiler menolak baris ini\n" +
              "function panjangNama(nama: string | null) {\n" +
              "  return nama.length;\n" +
              "}\n\n" +
              "// ✅ periksa dulu, baru sentuh isinya\n" +
              "function panjangAman(nama: string | null) {\n" +
              "  if (nama === null) return 0;\n" +
              "  return nama.length;\n" +
              "}\n" +
              "console.log(panjangAman(null), panjangAman(\"Bimo\"));",
            output:
              "Pada fungsi pertama, tsc menolak dengan:\n" +
              "error TS18047: 'nama' is possibly 'null'.\n\n" +
              "Fungsi kedua lolos dan mencetak:\n" +
              "0 4",
            note: "Pesan TS18047 adalah salah satu error yang paling sering kamu temui setelah menyalakan strict.",
          },
          instruction:
            "Sebuah aplikasi menyimpan token login yang baru terisi setelah pengguna masuk. Buat variabel bernama `token` yang boleh menampung teks maupun keadaan kosong yang disengaja, dan isi nilai awalnya dengan keadaan kosong itu.",
          starterCode: "// Tulis variabel token di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "let\\s+token\\s*:\\s*(string\\s*\\|\\s*null|null\\s*\\|\\s*string)\\s*=\\s*null",
              message:
                "Gabungkan dua tipe dengan tanda `|`, misalnya `let token: string | null = null;`. Pakai `let` karena nilainya akan berubah setelah login.",
            },
          ],
          solution: "let token: string | null = null;",
          susunKode: {
            question:
              "Buat variabel token bertipe string | null diawali null.",
            potongan: [
              "let token:",
              "string | null",
              "= null;",
            ],
            pengecoh: [
              "string | undefined",
              "= undefined;",
            ],
            pemisah: " ",
            explanation:
              "Union type `string | null` mengizinkan variabel berisi teks atau nilai `null` secara eksplisit. Pengecoh `string | undefined` menggoda karena `undefined` juga menyatakan ketiadaan nilai, namun keliru karena instruksi meminta keadaan `null`. Pengecoh `= undefined;` sering jadi jebakan saat salah memilih nilai inisialisasi.",
          },
        },
        {
          kind: "step",
          id: "ts-1-6",
          title: "Function: Tipe Parameter & Return",
          explanation:
            "Parameter fungsi adalah tempat anotasi paling berguna, karena compiler tidak punya petunjuk apa pun tentang isinya sampai fungsi itu dipanggil. Dengan `strict: true` menyala, parameter tanpa anotasi akan ditolak lewat error `Parameter 'a' implicitly has an 'any' type` — jadi di praktiknya kamu memang hampir selalu menulisnya, meski aturannya bukan \"wajib tanpa kecuali\" (fungsi callback sering mendapat tipenya secara otomatis dari konteks). Tipe kembalian ditulis setelah kurung tutup parameter, dan sifatnya opsional: TypeScript bisa menyimpulkannya dari isi `return`. Banyak tim tetap menuliskannya untuk fungsi yang dipakai lintas berkas, karena begitu isi fungsi berubah dan hasilnya jadi lain, error muncul di fungsi itu sendiri — bukan di sepuluh tempat lain yang memakainya.",
          example: {
            code:
              "function sapa(nama: string): string {\n" +
              "  return \"Halo, \" + nama;\n" +
              "}\n\n" +
              "// fungsi tanpa nilai kembalian memakai void\n" +
              "function catat(pesan: string): void {\n" +
              "  console.log(\"[log] \" + pesan);\n" +
              "}\n\n" +
              "console.log(sapa(\"Bimo\"));\n" +
              "catat(\"selesai\");",
            output: "Halo, Bimo\n[log] selesai",
            note: "`void` berarti \"nilai kembaliannya tidak untuk dipakai\". Saat dijalankan, fungsi seperti `catat` tetap menghasilkan `undefined` — bedanya dengan menulis `: undefined` adalah bahwa `void` tidak menuntut adanya `return` sama sekali.",
          },
          instruction:
            "Buat sebuah fungsi bernama `tambah` yang menerima dua buah angka dan mengembalikan hasil penjumlahannya. Beri anotasi tipe pada kedua parameternya dan juga pada nilai kembaliannya.",
          starterCode: "// Tulis fungsi tambah di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "(function\\s+tambah\\s*\\(|const\\s+tambah\\s*=\\s*\\()\\s*\\w+\\s*:\\s*number\\s*,\\s*\\w+\\s*:\\s*number\\s*\\)\\s*:\\s*number",
              message:
                "Beri anotasi `: number` pada kedua parameter DAN pada nilai kembalian, misalnya `function tambah(a: number, b: number): number`.",
            },
            {
              pattern: "return\\s+\\w+\\s*\\+\\s*\\w+|=>\\s*\\w+\\s*\\+\\s*\\w+",
              message:
                "Fungsinya belum mengembalikan hasil penjumlahan kedua parameternya.",
            },
          ],
          solution:
            "function tambah(a: number, b: number): number {\n" +
            "  return a + b;\n" +
            "}\n" +
            "console.log(tambah(4, 5));",
          susunKode: {
            question:
              "Buat fungsi tambah dengan anotasi parameter dan kembalian number.",
            potongan: [
              "function tambah(a: number, b: number): number {",
              "  return a + b;",
              "}",
              "console.log(tambah(4, 5));",
            ],
            pengecoh: [
              "function tambah(a, b): number {",
              "  return a * b;",
            ],
            pemisah: "\n",
            explanation:
              "Anotasi tipe parameter `a: number, b: number` wajib ada pada fungsi agar TypeScript bisa memverifikasi argumen. Pengecoh tanpa tipe parameter menggoda pengembang JS yang keliru melupakan anotasi TS. Pengecoh perkalian `a * b` juga jebakan logika yang menyimpang dari penjumlahan.",
          },
        },
        {
          kind: "step",
          id: "ts-1-7",
          title: "tsconfig.json: Menyalakan strict",
          explanation:
            "`strict` bukan satu aturan, melainkan sakelar induk yang menyalakan sekelompok pemeriksaan sekaligus — di antaranya `strictNullChecks` (nilai kosong harus ditulis terang-terangan) dan `noImplicitAny` (parameter tanpa tipe ditolak). Tanpa `strict`, TypeScript diam-diam menganggap banyak hal sebagai `any`, sehingga kamu menanggung semua kerepotan menulis tipe tapi hanya mendapat sebagian kecil manfaatnya. Menyalakannya di **hari pertama proyek** jauh lebih murah daripada menyalakannya setahun kemudian, saat ribuan baris kode sudah bergantung pada kelonggaran itu — pengalaman umum di lapangan: proyek yang menunda biasanya berakhir dengan ratusan error yang tidak ada yang berani sentuh. Karena itu di code review, `\"strict\": false` pada proyek baru hampir selalu dipertanyakan.",
          example: {
            code:
              "// tsconfig.json\n" +
              "{\n" +
              "  \"compilerOptions\": {\n" +
              "    \"target\": \"ES2022\",\n" +
              "    \"module\": \"NodeNext\",\n" +
              "    \"noUncheckedIndexedAccess\": true\n" +
              "  }\n" +
              "}",
            output:
              "Dengan noUncheckedIndexedAccess menyala, baris berikut ditolak:\n" +
              "  const pertama = daftar[0];\n" +
              "  pertama.toUpperCase();\n" +
              "error TS18048: 'pertama' is possibly 'undefined'.",
            note: "Opsi ini bukan bagian dari strict, tapi sering ditambahkan tim yang serius — ia mengingatkan bahwa daftar[0] bisa saja tidak ada. Sekilas tentang opsi lain di editor: `outDir` menentukan folder tempat berkas `.js` hasil kompilasi diletakkan (di sini `dist`), sedangkan tanpa opsi itu hasilnya menumpuk di sebelah berkas `.ts` seperti yang kamu lihat di modul persiapan.",
          },
          instruction:
            "Di dalam blok `compilerOptions` pada tsconfig di editor, tambahkan satu opsi yang menyalakan seluruh kelompok pemeriksaan tipe paling ketat sekaligus. Nilainya diisi `true`.",
          starterCode:
            "{\n" +
            "  \"compilerOptions\": {\n" +
            "    \"target\": \"ES2022\",\n" +
            "    \"outDir\": \"dist\"\n" +
            "  }\n" +
            "}\n",
          language: "text",
          tests: [
            {
              pattern: "[\"']strict[\"']\\s*:\\s*true",
              message:
                "Tambahkan pasangan key-value di dalam compilerOptions. Nama opsinya satu kata dan berarti \"ketat\" — tulis dengan tanda kutip, diikuti titik dua dan `true`.",
            },
            {
              pattern: "[\"']outDir[\"']",
              message:
                "Jangan hapus opsi yang sudah ada. Tambahkan opsi baru, jangan menimpa isi tsconfig.",
            },
          ],
          solution:
            "{\n" +
            "  \"compilerOptions\": {\n" +
            "    \"target\": \"ES2022\",\n" +
            "    \"outDir\": \"dist\",\n" +
            "    \"strict\": true\n" +
            "  }\n" +
            "}",
          susunKode: {
            question:
              "Tambahkan opsi strict: true di tsconfig.json.",
            potongan: [
              "{\n  \"compilerOptions\": {",
              "    \"target\": \"ES2022\",",
              "    \"outDir\": \"dist\",",
              "    \"strict\": true",
              "  }\n}",
            ],
            pengecoh: [
              "    \"strictMode\": true,",
              "    \"strictChecks\": true,",
            ],
            pemisah: "\n",
            explanation:
              "Opsi `\"strict\": true` di `tsconfig.json` menyalakan seluruh aturan pemeriksaan ketat TypeScript. Pengecoh `\"strictMode\"` dan `\"strictChecks\"` menggoda karena terdengar mirip dengan konsep JavaScript, tetapi keliru karena nama properti resmi TypeScript hanyalah `strict`.",
          },
        },
        {
          kind: "step",
          id: "ts-1-8",
          title: "Tuple: Array dengan Panjang dan Tipe Pasti",
          explanation:
            "Array biasa seperti `number[]` hanya mengunci jenis datanya, tetapi membebaskan berapa banyak elemen di dalamnya — bisa kosong, bisa sepuluh. **Tuple** adalah variasi array yang mengunci **panjang dan urutan tipe pada setiap posisi**, ditulis dengan kurung siku berisi daftar tipe seperti `[string, number]`. Posisi pertama wajib teks, posisi kedua wajib angka, dan menambahkan elemen ketiga dengan jenis berbeda akan ditolak oleh compiler. Pola ini dipakai di mana-mana dalam ekosistem modern: kembalian hook React `useState` adalah tuple dua elemen berisi nilai state dan fungsi pengubahnya, dan endpoint API sering memakai tuple untuk koordinat `[latitude, longitude]` atau pasangan status `[kodeStatus, pesan]`. Jebakan yang sering menjatuhkan pemula: metode mutasi bawaan JavaScript seperti `.push()` secara teknis masih diizinkan compiler pada tuple biasa kecuali kamu menguncinya dengan `readonly [string, number]`.",
          example: {
            code:
              "const koordinat: [number, number] = [-6.2088, 106.8456];\n" +
              "console.log(koordinat[0], koordinat[1]);",
            output: "-6.2088 106.8456",
            note: "`koordinat` wajib berisi persis dua angka — memasukkan elemen ketiga atau teks akan langsung ditolak compiler.",
          },
          instruction:
            "Sebuah sistem mencatat status respons HTTP sebagai pasangan: kode status berupa angka pada posisi pertama, dan pesan status berupa teks pada posisi kedua. Buat sebuah konstanta bernama `respon` bertipe tuple yang menampung kedua nilai itu, lalu isi nilai awalnya dengan angka `200` dan teks `\"OK\"`.",
          starterCode: "// Tulis konstanta respon di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "(?:const|let)\\s+respon\\s*:\\s*\\[\\s*number\\s*,\\s*string\\s*\\]\\s*=\\s*\\[\\s*200\\s*,\\s*['\"]OK['\"]\\s*\\]",
              message:
                "Deklarasikan `const respon: [number, string] = [200, \"OK\"];` — posisi pertama number (200), posisi kedua string (\"OK\").",
            },
            {
              pattern:
                "respon\\s*:\\s*\\(\\s*(number\\s*\\|\\s*string|string\\s*\\|\\s*number)\\s*\\)\\s*\\[\\s*\\]",
              mustNotMatch: true,
              message:
                "Jangan gunakan array union `(number | string)[]`. Gunakan sintaks tuple `[number, string]` agar posisi dan panjangnya terkunci.",
            },
          ],
          solution:
            "const respon: [number, string] = [200, \"OK\"];\n" +
            "console.log(respon[0], respon[1]);",
          susunKode: {
            question:
              "Deklarasikan konstanta respon sebagai tuple pasangan angka dan teks bernilai 200 dan OK.",
            potongan: [
              "const respon: [number, string] =",
              "[200, \"OK\"];",
              "console.log(respon[0], respon[1]);",
            ],
            pengecoh: [
              "const respon: (number | string)[] =",
              "[\"OK\", 200];",
            ],
            pemisah: "\n",
            explanation:
              "Sintaks tuple menggunakan kurung siku `[number, string]` untuk mengunci tipe per indeks. Pengecoh `(number | string)[]` menggoda karena sama-sama array tetapi keliru karena tidak mengunci urutan posisi. Pengecoh urutan terbalik `[\"OK\", 200]` juga jebakan yang melanggar kontrak tipe tuple.",
          },
        },
        {
          kind: "quiz",
          id: "ts-1-kuis",
          title: "Kuis: Tipe Dasar",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Apa yang sebenarnya dinyalakan oleh opsi `strict: true` di tsconfig.json?",
              choices: [
                "Membuat proses kompilasi berjalan lebih cepat",
                "Sekelompok pemeriksaan sekaligus, termasuk strictNullChecks dan noImplicitAny",
                "Penghapusan otomatis kode JavaScript lama",
                "Pemeriksaan sintaks HTML di dalam proyek",
              ],
              answerIndex: 1,
              explanation:
                "`strict` adalah sakelar induk, bukan satu aturan tunggal. Menyalakannya berarti menyalakan strictNullChecks, noImplicitAny, dan beberapa lainnya sekaligus. Pilihan tentang kecepatan menggoda karena orang mengira \"ketat\" berarti \"dioptimalkan\", padahal strict justru menambah pekerjaan compiler — yang dibeli adalah keamanan, bukan kecepatan.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Kenapa `unknown` dianggap lebih aman daripada `any` untuk menampung data dari API?",
              choices: [
                "unknown bisa langsung diakses method-nya tanpa pengecekan",
                "unknown memaksa kamu membuktikan tipenya lewat pengecekan sebelum isinya boleh disentuh",
                "unknown hanya bisa menyimpan teks",
                "unknown membuat eksekusi di browser lebih cepat",
              ],
              answerIndex: 1,
              explanation:
                "Keduanya sama-sama berarti \"belum tahu isinya apa\", tapi `any` mematikan pemeriksaan sementara `unknown` menundanya sampai kamu melakukan narrowing. Sifat `any` yang menular ke variabel lain membuat satu `any` bisa membutakan seluruh alur data — itulah alasan sebenarnya `unknown` lebih disukai.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kamu menulis `let total = 50000;` tanpa anotasi apa pun, lalu di baris berikutnya `total = \"gratis\";`. Apa yang terjadi?",
              choices: [
                "Berhasil, karena tanpa anotasi variabelnya bertipe any",
                "Ditolak compiler, karena inference sudah mengunci total sebagai number",
                "Berhasil, tapi total berubah menjadi bertipe string",
                "Ditolak, tapi hanya kalau strict dinyalakan",
              ],
              answerIndex: 1,
              explanation:
                "Type inference bukan berarti \"tanpa tipe\" — TypeScript menyimpulkan `number` dari nilai awalnya dan menjaga kesimpulan itu seterusnya. Inilah kenapa menulis `let total: number = 50000` tidak menambah keamanan apa pun. Pilihan pertama menggoda karena banyak yang mengira tanpa anotasi berarti bebas, padahal `any` implisit hanya terjadi pada parameter fungsi, bukan variabel yang langsung diisi nilai.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kamu perlu menyimpan daftar tahun kelahiran seperti `[1990, 1995, 2000]`. Anotasi mana yang benar?",
              choices: ["number", "number[]", "Array", "list"],
              answerIndex: 1,
              explanation:
                "`number[]` berarti \"array yang setiap elemennya angka\". Bentuk `Array<number>` juga benar dan artinya sama persis. Pilihan `number` saja menggoda karena isinya memang angka, tapi itu berarti satu angka — bukan kumpulan angka; sementara `Array` tanpa keterangan isi tidak memberi tahu apa pun tentang elemennya.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Tim backend memberi tahu bahwa sebuah endpoint bisa mengembalikan objek data, atau `null` bila data tidak ditemukan. Dengan strictNullChecks menyala, deklarasi mana yang paling tepat?",
              choices: [
                "let response: any",
                "let response: object",
                "let response: object | null",
                "let response: null",
              ],
              answerIndex: 2,
              explanation:
                "Tipe union `object | null` menuliskan kenyataannya apa adanya, sehingga compiler memaksamu memeriksa null sebelum mengakses isinya. `any` menggoda karena membuat semua error hilang seketika — tapi itu berarti melepas seluruh perlindungan; sedangkan `object` saja akan ditolak begitu nilai null benar-benar masuk.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kamu mendeklarasikan variabel `const item: [string, number] = ['Buku', 50000];`. Mengapa bentuk ini disebut tuple dan bukan array biasa?",
              choices: [
                "Karena panjang dan tipe pada setiap posisinya terkunci secara spesifik",
                "Karena tuple hanya bisa memuat data teks tanpa angka",
                "Karena tuple otomatis dikonversi menjadi objek saat dijalankan di Node",
                "Karena tuple tidak bisa dibaca menggunakan indeks seperti item[0]",
              ],
              answerIndex: 0,
              explanation:
                "Tuple adalah tipe array khusus di mana jumlah elemen dan jenis tipe pada setiap indeks sudah ditentukan sejak awal. Pilihan kedua keliru karena tuple mendukung berbagai tipe. Pilihan ketiga dan keempat juga jebakan yang tidak sesuai kenyataan.",
            },
          ],
        },
      ],
    },
    {
      slug: "object-types",
      title: "Object Types & Interface",
      description:
        "Memodelkan data aplikasi nyata: user, produk, respons API.",
      topics: [
        "type alias vs interface (dan jawaban pragmatisnya)",
        "Optional property (?) & readonly",
        "Nested object & array of object",
        "Index signature untuk object dinamis",
        "Extending interface & intersection (&)",
        "Memodelkan respons API nyata dari dokumentasi",
      ],
      items: [
        {
          kind: "materi",
          id: "ts-2-m1",
          title: "Memberi Bentuk pada Objek",
          body:
            "# Pengertian\n\n" +
            "Sejauh ini kamu memberi tipe pada nilai tunggal: satu angka, satu teks. Data aplikasi nyata hampir tidak pernah seperti itu — yang kamu tangani adalah **objek**: satu user punya nama, email, dan umur sekaligus.\n\n" +
            "Menuliskan bentuk objek berulang-ulang di setiap variabel jelas melelahkan:\n\n" +
            "```text\nconst a: { nama: string; email: string } = ...\nconst b: { nama: string; email: string } = ...\n```\n\n" +
            "Karena itu TypeScript menyediakan cara **memberi nama pada sebuah bentuk**, lalu memakai nama itu di mana-mana. Ada dua cara: `interface` dan `type`.\n\n" +
            "## Dua Cara, Satu Tujuan\n\n" +
            "```text\ninterface User {          type User = {\n" +
            "  nama: string;             nama: string;\n" +
            "  email: string;            email: string;\n" +
            "}                         };\n" +
            "                                    ^\n" +
            "  tanpa tanda =               pakai tanda = dan titik koma di akhir\n" +
            "```\n\n" +
            "Untuk mendeskripsikan objek, keduanya nyaris identik. Perbedaan yang benar-benar terasa sehari-hari:\n\n" +
            "| | `interface` | `type` |\n" +
            "|---|---|---|\n" +
            "| Mendeskripsikan objek | ✅ | ✅ |\n" +
            "| Union (`\"a\" \\| \"b\"`) | ❌ tidak bisa | ✅ |\n" +
            "| Alias untuk tipe primitif | ❌ tidak bisa | ✅ |\n" +
            "| Menggabungkan | `extends` | operator `&` |\n" +
            "| Otomatis bergabung saat dideklarasikan ulang | ✅ Ya (Declaration Merging) | ❌ Error duplikat |\n\n" +
            "## Kenapa Ada Dua? Kekuatan Declaration Merging\n\n" +
            "Salah satu alasan terbesar `interface` tetap ada adalah **Declaration Merging**: bila dua `interface` dideklarasikan dengan nama sama, compiler menyatukan propertinya secara otomatis:\n\n" +
            "```text\ninterface User { id: number; }\ninterface User { nama: string; }\n// Hasil akhir: User punya properti id DAN nama!\n```\n\n" +
            "Fitur ini memungkinkan kita memperluas interface bawaan library (misalnya menambahkan `user` ke `Request` di Express atau variabel kustom ke `Window`). Sebaliknya, kata kunci `type` sengaja melarang deklarasi ulang agar tidak terjadi penimpaan yang tak disengaja.\n\n" +
            "> **Jawaban pragmatisnya:** pakai `interface` untuk bentuk objek entitas (User, Produk, respons API) dan kontrak yang berpotensi diperluas; pakai `type` untuk segala hal lain (union, tuple, alias primitif, hasil utility type, dan React component props). Kalau tim punya aturan sendiri, ikuti kesepakatan tim.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Interface itu seperti **formulir kosong yang dicetak kantor**. Formulir menentukan kolom apa saja yang ada dan mana yang wajib diisi. Setiap orang yang mengisinya menghasilkan berkas berbeda, tapi semuanya berbentuk sama — sehingga bagian arsip tahu persis di mana mencari nomor telepon.\n\n" +
            "## Tiga Penanda yang Akan Kamu Pakai Terus\n\n" +
            "```text\ninterface Produk {\n" +
            "  readonly id: number;   // boleh dibaca, tidak boleh diubah lagi\n" +
            "  nama: string;          // wajib ada\n" +
            "  diskon?: number;       // boleh tidak ada sama sekali\n" +
            "}\n```\n\n" +
            "Tanda `?` mengubah tipe properti menjadi `number | undefined`. Artinya setelah kamu menandainya opsional, compiler akan menagih pengecekan sebelum kamu memakainya — itu memang tujuannya.\n\n" +
            "Untuk array, kamu juga bisa membuat array yang tidak boleh diubah dengan `readonly number[]` atau `ReadonlyArray<number>`. Memanggil `.push()` atau `.splice()` pada array tersebut langsung dicegah oleh compiler.\n\n" +
            "## Jebakan yang Sering Menjatuhkan Pemula\n\n" +
            "1. **Memakai koma seperti di objek.** Di dalam `interface`, pemisah antar properti adalah **titik koma** (`;`). Koma juga diterima, tapi jangan campur keduanya dalam satu berkas.\n" +
            "2. **Mengira `readonly` mengunci isi objek di dalamnya.** `readonly alamat: Alamat` hanya melarang mengganti seluruh objek alamat; properti *di dalam* alamat tetap bisa diubah.\n" +
            "3. **Mengira interface memeriksa data saat aplikasi berjalan.** Tidak. Interface hilang saat kompilasi, persis seperti anotasi lain.\n\n" +
            "> **Kapan dipakai di dunia kerja:** hal pertama yang dikerjakan developer saat menyambungkan endpoint baru adalah menuliskan interface untuk respons endpoint itu. Setelah bentuknya tertulis, seluruh tim mendapat autocomplete dan salah eja properti langsung ketahuan.",
        },
        {
          kind: "step",
          id: "ts-2-1",
          title: "Type Alias vs Interface",
          explanation:
            "`type` adalah pemberian nama untuk **tipe apa pun** — bisa objek, bisa gabungan beberapa kemungkinan seperti `string | number`, bisa juga sekadar alias untuk satu tipe primitif. `interface` lebih sempit: ia khusus untuk mendeskripsikan bentuk objek, dan sebagai gantinya ia bisa diperluas dengan `extends` serta digabungkan otomatis bila dideklarasikan dua kali dengan nama sama. Untuk bentuk objek biasa keduanya bisa saling tukar, jadi jangan menghabiskan waktu memilih; yang penting konsisten dalam satu proyek. Aturan praktis yang dipakai kebanyakan tim: `interface` untuk objek yang mewakili entitas aplikasi (User, Produk, Pesanan), `type` untuk union, alias, dan hasil olahan utility type.",
          example: {
            code:
              "type Kode = string | number;      // hanya bisa dengan type\n" +
              "interface Pelanggan {\n" +
              "  kode: Kode;\n" +
              "  nama: string;\n" +
              "}\n" +
              "const p: Pelanggan = { kode: 1024, nama: \"Siti\" };\n" +
              "console.log(p.kode, p.nama);",
            output: "1024 Siti",
            note: "Perhatikan `Kode` dipakai sebagai tipe properti — nama tipe bisa dipakai di dalam tipe lain.",
          },
          instruction:
            "Sistemmu menerima ID pengguna dalam dua bentuk: kadang berupa teks seperti `\"U-102\"`, kadang berupa angka seperti `102`. Buat sebuah nama tipe bernama `UserID` yang mewakili kedua kemungkinan itu. Perhatikan bahwa hanya satu dari dua kata kunci di step ini yang sanggup melakukannya.",
          starterCode: "// Tulis UserID di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "type\\s+UserID\\s*=\\s*(string\\s*\\|\\s*number|number\\s*\\|\\s*string)\\s*;?",
              message:
                "Pakai `type` (interface tidak bisa membuat union), lalu gabungkan kedua kemungkinan dengan tanda `|`.",
            },
          ],
          solution: "type UserID = string | number;",
          susunKode: {
            potongan: [
              "type UserID =",
              "string | number;",
            ],
            pengecoh: [
              "interface UserID =",
              "string & number;",
            ],
            pemisah: " ",
            explanation:
              "Type Alias (`type`) sanggup membuat union type `string | number`. Pengecoh `interface UserID` menggoda karena interface sering dipakai untuk objek, tetapi keliru karena interface tidak bisa digunakan untuk tipe union primitif. Pengecoh `string & number` juga jebakan logika intersection yang tak mungkin terwujud.",
          },
        },
        {
          kind: "step",
          id: "ts-2-2",
          title: "Optional Property (?) & readonly",
          explanation:
            "Tanda `?` di belakang nama properti berarti properti itu boleh tidak ada sama sekali, dan di balik layar tipenya berubah menjadi `tipe | undefined` — konsekuensinya compiler akan menagih pengecekan sebelum kamu memakainya. Penanda `readonly` bekerja di arah berbeda: propertinya wajib ada, tapi nilainya tidak boleh diganti setelah objeknya dibuat, sehingga `produk.id = 99` ditolak saat kompilasi. Keduanya sering dipakai bersama untuk memodelkan data dari database: `id` selalu ada dan tidak boleh diubah, sedangkan `diskon` hanya ada pada sebagian baris. Jebakan yang perlu diingat: `readonly` bersifat dangkal — pada properti berisi objek atau array, ia hanya melarang mengganti seluruh objeknya, sedangkan isi di dalamnya masih bisa diubah.",
          example: {
            code:
              "interface Artikel {\n" +
              "  readonly slug: string;\n" +
              "  judul: string;\n" +
              "  penulis?: string;\n" +
              "}\n" +
              "const a: Artikel = { slug: \"belajar-ts\", judul: \"Belajar TS\" };\n" +
              "// a.slug = \"lain\";   // ditolak: Cannot assign to 'slug'\n" +
              "console.log(a.judul, a.penulis ?? \"Redaksi\");",
            output: "Belajar TS Redaksi",
            note: "Karena penulis opsional, nilainya undefined — operator `??` menyediakan nilai cadangan.",
          },
          instruction:
            "Buat sebuah interface bernama `Student` untuk data mahasiswa. Nomor induknya (`id`, berupa angka) sudah ditetapkan sistem dan tidak boleh diubah lagi. Namanya (`name`, berupa teks) selalu wajib diisi. Umurnya (`age`, berupa angka) boleh dikosongkan karena tidak semua mahasiswa mengisinya.",
          starterCode: "// Tulis interface Student di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern: "interface\\s+Student\\s*\\{",
              message: "Mulai dengan `interface Student {` lalu tulis propertinya di dalam.",
            },
            {
              pattern: "readonly\\s+id\\s*:\\s*number",
              message:
                "Properti `id` harus tidak bisa diubah setelah objek dibuat — tambahkan penanda `readonly` di depannya.",
            },
            {
              pattern: "name\\s*:\\s*string",
              message: "Tambahkan properti `name` bertipe `string` tanpa penanda apa pun (wajib diisi).",
            },
            {
              pattern: "age\\s*\\?\\s*:\\s*number",
              message:
                "Properti `age` boleh dikosongkan — tandai dengan `?` sebelum titik dua, jadi `age?: number`.",
            },
          ],
          solution:
            "interface Student {\n" +
            "  readonly id: number;\n" +
            "  name: string;\n" +
            "  age?: number;\n" +
            "}",
          susunKode: {
            question:
              "Buat interface Student dengan readonly id, name, dan age opsional.",
            potongan: [
              "interface Student {",
              "  readonly id: number;",
              "  name: string;",
              "  age?: number;",
              "}",
            ],
            pengecoh: [
              "  private id: number;",
              "  age: number | null;",
            ],
            pemisah: "\n",
            explanation:
              "Properti imutabel diberi kata kunci `readonly`, sedangkan properti opsional menggunakan tanda tanya `age?: number`. Pengecoh `private id` menggoda bagi programmer berbasis class tetapi keliru dalam interface. Pengecoh `age: number | null` sering jadi jebakan karena mengharuskan properti ditulis walau bernilai null.",
          },
        },
        {
          kind: "step",
          id: "ts-2-3",
          title: "Nested Object & Array of Object",
          explanation:
            "Data nyata jarang datar: satu user punya alamat, satu pesanan punya daftar item, satu tim punya daftar anggota. Kamu bisa menuliskan bentuk objek di dalam objek secara langsung, tapi memecahnya menjadi interface terpisah lalu merujuknya lewat nama membuat kode jauh lebih mudah dibaca dan bisa dipakai ulang. Untuk daftar objek, polanya sama seperti array biasa: tulis nama interface-nya lalu tambahkan `[]`, sehingga `User[]` berarti \"array berisi objek berbentuk User\". Jebakan yang sering menghabiskan waktu: mengakses `tim.members[0].nama` padahal array-nya bisa saja kosong — TypeScript secara bawaan tidak memperingatkan hal ini kecuali opsi `noUncheckedIndexedAccess` dinyalakan.",
          example: {
            code:
              "interface Alamat {\n" +
              "  kota: string;\n" +
              "  kodePos: string;\n" +
              "}\n" +
              "interface Pelanggan {\n" +
              "  nama: string;\n" +
              "  alamat: Alamat;\n" +
              "}\n" +
              "const c: Pelanggan = {\n" +
              "  nama: \"Budi\",\n" +
              "  alamat: { kota: \"Bandung\", kodePos: \"40123\" },\n" +
              "};\n" +
              "console.log(c.alamat.kota, c.alamat.kodePos);",
            output: "Bandung 40123",
            note: "Menulis Alamat sebagai interface terpisah membuatnya bisa dipakai ulang di Pengirim, Penerima, dan Gudang.",
          },
          instruction:
            "Interface `User` sudah tersedia di editor. Sebuah tim terdiri atas beberapa user sekaligus. Buat interface bernama `Team` dengan satu properti bernama `members` yang menampung kumpulan user tersebut.",
          starterCode:
            "interface User {\n" +
            "  id: number;\n" +
            "  name: string;\n" +
            "  email: string;\n" +
            "}\n\n" +
            "// Tulis interface Team di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern: "interface\\s+Team\\s*\\{",
              message: "Mulai dengan `interface Team {`.",
            },
            {
              pattern:
                "members\\s*:\\s*(User\\s*\\[\\s*\\]|Array\\s*<\\s*User\\s*>)",
              message:
                "Properti `members` menampung banyak user, jadi tipenya array of User — tulis `User[]` (atau `Array<User>`).",
            },
          ],
          solution:
            "interface User {\n" +
            "  id: number;\n" +
            "  name: string;\n" +
            "  email: string;\n" +
            "}\n\n" +
            "interface Team {\n" +
            "  members: User[];\n" +
            "}",
          susunKode: {
            question:
              "Buat interface Team dengan members bertipe User[].",
            potongan: [
              "interface User {\n  id: number;\n  name: string;\n  email: string;\n}",
              "interface Team {",
              "  members: User[];",
              "}",
            ],
            pengecoh: [
              "  members: User;",
              "  members: Array<object>;",
            ],
            pemisah: "\n",
            explanation:
              "Array of Object didefinisikan dengan menyandingkan nama interface objek dan tanda siku `User[]`. Pengecoh `members: User` menggoda jika lupa bahwa tim berisi banyak pengguna. Pengecoh `Array<object>` keliru karena kehilangan detail struktur `User` yang sudah ditentukan.",
          },
        },
        {
          kind: "step",
          id: "ts-2-4",
          title: "Index Signature untuk Objek Dinamis",
          explanation:
            "Kadang kamu tidak tahu nama-nama properti sebuah objek saat menulis kode — misalnya kamus terjemahan yang key-nya adalah kode bahasa, atau penghitung yang key-nya adalah nama produk yang baru diketahui saat aplikasi berjalan. Untuk kasus seperti itu kamu mendeskripsikan **polanya**, bukan daftarnya: `[key: string]: string` dibaca \"properti apa pun yang namanya teks, isinya juga teks\". Kata `key` di dalam kurung siku hanyalah label untuk keterbacaan — kamu boleh menamainya `kodeBahasa` atau apa saja, yang mengikat adalah tipenya. Jebakan pentingnya: index signature memaksa **semua** properti mengikuti tipe itu, jadi menambahkan `total: number` ke dalam interface ber-`[key: string]: string` akan langsung ditolak compiler.",
          example: {
            code:
              "interface JumlahStok {\n" +
              "  [namaProduk: string]: number;\n" +
              "}\n" +
              "const stok: JumlahStok = { kopi: 12, gula: 4 };\n" +
              "stok.teh = 7;                 // key baru boleh ditambah kapan saja\n" +
              "console.log(stok.kopi, stok.teh, Object.keys(stok).length);",
            output: "12 7 3",
            note: "Perhatikan: stok.tehh (salah ketik) TIDAK akan ditolak compiler — index signature memang menerima key apa pun.",
          },
          instruction:
            "Aplikasimu menyimpan terjemahan antarmuka, dan daftar key-nya bertambah terus seiring halaman baru dibuat. Buat interface bernama `StringMap` yang menerima properti dengan nama apa pun berupa teks, dan nilainya juga selalu berupa teks.",
          starterCode: "// Tulis interface StringMap di sini\n",
          language: "jsx",
          tests: [
            {
              pattern: "interface\\s+StringMap\\s*\\{",
              message: "Mulai dengan `interface StringMap {`.",
            },
            {
              pattern: "\\[\\s*\\w+\\s*:\\s*string\\s*\\]\\s*:\\s*string",
              message:
                "Isi interface-nya dengan index signature: kurung siku berisi `label: string`, lalu titik dua dan tipe nilainya `string`.",
            },
          ],
          solution: "interface StringMap {\n  [key: string]: string;\n}",
          susunKode: {
            potongan: [
              "interface StringMap {",
              "  [key: string]: string;",
              "}",
            ],
            pengecoh: [
              "  [key: number]: string;",
              "  key: string = string;",
            ],
            pemisah: "\n",
            explanation:
              "Index Signature `[key: string]: string` mengizinkan objek memiliki key dinamis berupa teks dengan nilai teks. Pengecoh `[key: number]` menggoda jika keliru mengira key objek bertipe angka. Pengecoh `key: string = string` sering jadi jebakan karena mencoba menulis sintaks assign nilai di interface.",
          },
        },
        {
          kind: "step",
          id: "ts-2-5",
          title: "Extending Interface & Intersection (&)",
          explanation:
            "Saat dua bentuk data punya bagian yang sama, kamu tidak perlu menyalin propertinya — cukup mewarisi. `interface Admin extends User` berarti Admin punya seluruh properti User ditambah properti barunya sendiri, sehingga perubahan pada User otomatis mengalir ke Admin. Pada `type`, penggabungan dilakukan dengan operator `&` (intersection): `type Admin = User & { role: string }` menghasilkan hal yang sama. Perbedaan yang layak diingat saat terjadi bentrokan: kalau tipe properti yang diwarisi bertabrakan (misalnya `id` bertipe `string` di satu sisi dan `number` di sisi lain), `extends` langsung **menolak** dengan error, sedangkan `&` diam saja dan menghasilkan `never` — nama tipe untuk \"tidak ada satu pun nilai yang sah di sini\", sehingga properti itu jadi mustahil diisi dan errornya baru muncul jauh di tempat pemakaian.",
          example: {
            code:
              "interface Kendaraan {\n" +
              "  merek: string;\n" +
              "  roda: number;\n" +
              "}\n" +
              "interface Truk extends Kendaraan {\n" +
              "  kapasitasTon: number;\n" +
              "}\n" +
              "const t: Truk = { merek: \"Hino\", roda: 6, kapasitasTon: 8 };\n" +
              "console.log(t.merek, t.roda, t.kapasitasTon);",
            output: "Hino 6 8",
            note: "Truk wajib mengisi properti warisan juga — melewatkan `roda` akan ditolak compiler.",
          },
          instruction:
            "Interface `User` sudah tersedia di editor. Seorang admin adalah user biasa yang punya satu keterangan tambahan: `role` berupa teks. Buat interface bernama `Admin` yang mewarisi seluruh properti `User` tanpa menyalinnya ulang, lalu tambahkan properti barunya.",
          starterCode:
            "interface User {\n" +
            "  id: number;\n" +
            "  name: string;\n" +
            "  email: string;\n" +
            "}\n\n" +
            "// Tulis interface Admin di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern: "interface\\s+Admin\\s+extends\\s+User\\s*\\{",
              message:
                "Pakai kata kunci pewarisan: `interface Admin extends User {`. Jangan menyalin ulang nama dan email.",
            },
            {
              pattern: "role\\s*:\\s*string",
              message: "Tambahkan properti `role` bertipe `string` di dalam Admin.",
            },
            {
              pattern: "interface\\s+Admin[^{]*\\{[^}]*\\b(email|name)\\s*:",
              mustNotMatch: true,
              message:
                "Kamu menyalin ulang properti milik User ke dalam badan interface Admin. Cukup warisi dengan `extends` — itu inti latihan ini.",
            },
          ],
          solution:
            "interface User {\n" +
            "  id: number;\n" +
            "  name: string;\n" +
            "  email: string;\n" +
            "}\n\n" +
            "interface Admin extends User {\n" +
            "  role: string;\n" +
            "}",
          susunKode: {
            question:
              "Buat interface Admin yang meng-extends User.",
            potongan: [
              "interface User {\n  id: number;\n  name: string;\n  email: string;\n}",
              "interface Admin extends User {",
              "  role: string;",
              "}",
            ],
            pengecoh: [
              "interface Admin implements User {",
              "  role: string;\n  name: string;",
            ],
            pemisah: "\n",
            explanation:
              "Mewarisi interface dilakukan dengan kata kunci `extends User` tanpa menulis ulang properti lama. Pengecoh `implements` menggoda karena istilah tersebut ada di class, tetapi keliru untuk pewarisan interface. Pengecoh menyalin `name: string` juga jebakan yang melanggar instruksi.",
          },
        },
        {
          kind: "step",
          id: "ts-2-6",
          title: "Memodelkan Respons API Nyata",
          explanation:
            "Menyambungkan endpoint baru selalu dimulai dari langkah yang sama: buka dokumentasinya, lihat contoh respons JSON-nya, lalu terjemahkan bentuk itu menjadi interface. Terjemahannya mengikuti aturan sederhana — teks menjadi `string`, angka menjadi `number`, `true/false` menjadi `boolean`, objek bersarang menjadi interface tersendiri, dan daftar menjadi `[]`. Bagian yang menuntut ketelitian adalah properti yang **kadang tidak muncul** atau **bisa bernilai null**: dokumentasi sering menyebutnya sekilas, dan mengabaikannya berarti aplikasimu akan crash pada kasus yang jarang terjadi. Kebiasaan yang membedakan developer berpengalaman: menyalin satu contoh respons asli dari Postman atau tab Network, lalu menuliskan interface-nya baris demi baris sambil memeriksa mana yang benar-benar dijamin ada.",
          example: {
            code:
              "// Contoh respons dari GET /api/cuaca:\n" +
              "// { \"kota\": \"Bandung\", \"suhu\": 24.5, \"hujan\": false }\n" +
              "interface Cuaca {\n" +
              "  kota: string;\n" +
              "  suhu: number;\n" +
              "  hujan: boolean;\n" +
              "}\n" +
              "const c: Cuaca = { kota: \"Bandung\", suhu: 24.5, hujan: false };\n" +
              "console.log(`${c.kota}: ${c.suhu} derajat`);",
            output: "Bandung: 24.5 derajat",
            note: "Angka desimal dan bilangan bulat sama-sama `number` — TypeScript tidak punya tipe float terpisah.",
          },
          instruction:
            "Dokumentasi sebuah endpoint menyebutkan bahwa setiap respons selalu memuat dua hal: kode status berupa angka pada properti `code`, dan pesan untuk ditampilkan ke pengguna berupa teks pada properti `message`. Terjemahkan bentuk itu menjadi interface bernama `ApiResponse`.",
          starterCode:
            "// Contoh respons yang dikirim server:\n" +
            "// { \"code\": 404, \"message\": \"Data tidak ditemukan\" }\n\n" +
            "// Tulis interface ApiResponse di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern: "interface\\s+ApiResponse\\s*\\{",
              message: "Mulai dengan `interface ApiResponse {`.",
            },
            {
              pattern: "code\\s*:\\s*number",
              message: "Kode status berupa angka — tambahkan `code: number`.",
            },
            {
              pattern: "message\\s*:\\s*string",
              message: "Pesan berupa teks — tambahkan `message: string`.",
            },
          ],
          solution:
            "interface ApiResponse {\n  code: number;\n  message: string;\n}",
          susunKode: {
            question:
              "Buat interface ApiResponse dengan code: number dan message: string.",
            potongan: [
              "interface ApiResponse {",
              "  code: number;",
              "  message: string;",
              "}",
            ],
            pengecoh: [
              "  code: string;",
              "  message: text;",
            ],
            pemisah: "\n",
            explanation:
              "Pemodelan respons API membutuhkan kejelasan tipe data seperti `code: number` dan `message: string`. Pengecoh `code: string` menggoda jika biasa menerima kode HTTP dalam string. Pengecoh `text` adalah keliru karena tipe bawaan TypeScript untuk teks adalah `string`.",
          },
        },
        {
          kind: "quiz",
          id: "ts-2-kuis",
          title: "Kuis: Object Types",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kata kunci apa yang dipakai agar `interface Admin` mewarisi seluruh properti `interface User`?",
              choices: ["implements", "extends", "inherits", "includes"],
              answerIndex: 1,
              explanation:
                "`extends` menurunkan seluruh properti tipe induk ke tipe turunannya. `implements` menggoda karena juga terdengar seperti pewarisan, tapi ia dipakai pada **class** untuk menyatakan bahwa class itu memenuhi sebuah interface — bukan untuk menurunkan properti antar interface.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara menandai bahwa properti `diskon` boleh tidak ada pada sebuah interface?",
              choices: [
                "diskon!: number",
                "diskon?: number",
                "optional diskon: number",
                "diskon: number | never",
              ],
              answerIndex: 1,
              explanation:
                "Tanda `?` sebelum titik dua membuat properti opsional, dan di balik layar tipenya menjadi `number | undefined`. Menulis `diskon: number | undefined` juga memaksa pengecekan, tapi bedanya properti itu tetap **wajib dituliskan** saat membuat objek — sedangkan dengan `?` kamu boleh menghilangkannya sama sekali.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Apa efek penanda `readonly` pada sebuah properti interface?",
              choices: [
                "Nilai properti itu disembunyikan dari console.log",
                "Properti itu tidak boleh diganti nilainya setelah objeknya dibuat",
                "Properti itu hanya menerima tipe string",
                "Properti itu otomatis bernilai null",
              ],
              answerIndex: 1,
              explanation:
                "`readonly` melarang penugasan ulang setelah objek terbentuk, dan pelanggarannya ditolak saat kompilasi. Yang sering disalahpahami: penguncian ini dangkal — pada properti berisi objek, isi di dalam objek itu tetap bisa diubah. `readonly` juga tidak berpengaruh apa pun saat aplikasi berjalan, karena ia hilang bersama anotasi lainnya.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Sebuah objek konfigurasi menyimpan terjemahan yang key-nya bertambah setiap kali halaman baru dibuat, sehingga tidak bisa didaftarkan satu per satu. Fitur apa yang tepat dipakai?",
              choices: [
                "Optional property",
                "Readonly modifier",
                "Index signature",
                "Intersection type",
              ],
              answerIndex: 2,
              explanation:
                "Index signature mendeskripsikan **pola** key alih-alih daftarnya, misalnya `[key: string]: string`. Optional property menggoda karena juga terdengar seperti \"boleh ada boleh tidak\", tapi ia tetap menuntut kamu menyebutkan nama propertinya lebih dulu — yang justru tidak kamu ketahui di kasus ini.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Kamu ingin menggabungkan `User` dan `Access` menjadi satu tipe bernama `UserAccess` memakai `type`. Operator apa yang dipakai?",
              choices: ["|", "&", "+", "extends"],
              answerIndex: 1,
              explanation:
                "Operator `&` (intersection) menggabungkan dua tipe sehingga hasilnya wajib memenuhi keduanya sekaligus. Operator `|` menggoda karena bentuknya mirip, tapi artinya kebalikannya: \"salah satu dari dua\", bukan \"keduanya\". `extends` benar untuk interface, tapi tidak berlaku pada type alias.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kenapa `interface` tidak bisa dipakai untuk mendeklarasikan `type Status = \"aktif\" | \"nonaktif\"`?",
              choices: [
                "Karena interface hanya bisa mendeskripsikan bentuk objek, bukan union nilai",
                "Karena nama tipenya harus diawali huruf kecil",
                "Karena union hanya boleh berisi angka",
                "Karena interface harus selalu di-extend lebih dulu",
              ],
              answerIndex: 0,
              explanation:
                "`interface` dirancang khusus untuk mendeskripsikan bentuk objek, sehingga union, alias untuk tipe primitif, dan tuple (array berpanjang tetap yang tipe tiap posisinya ditentukan, misalnya `[string, number]`) hanya bisa dibuat dengan `type`. Inilah alasan praktis kenapa kedua kata kunci ini tetap ada berdampingan — bukan karena salah satunya usang.",
            },
          ],
        },
      ],
    },
    {
      slug: "union-narrowing",
      title: "Union, Literal & Narrowing",
      description:
        "Bagian paling 'TypeScript' dari TypeScript — memodelkan kemungkinan.",
      topics: [
        "Union type (A | B) & literal type ('loading' | 'success')",
        "Narrowing: typeof, in, instanceof",
        "Discriminated union — pola state yang mustahil salah",
        "Type guard function (is)",
        "enum vs union literal (dan kenapa banyak tim pilih union)",
        "as const & satisfies",
      ],
      items: [
        {
          kind: "materi",
          id: "ts-3-m1",
          title: "Memodelkan Kemungkinan, Bukan Cuma Bentuk",
          body:
            "# Pengertian\n\n" +
            "Modul sebelumnya mengajarkan cara memberi **bentuk** pada data. Modul ini tentang sesuatu yang lebih menarik: memberi tahu compiler bahwa sebuah nilai punya **beberapa kemungkinan**, lalu membiarkan compiler memaksamu menangani semuanya.\n\n" +
            "Ini bagian yang paling khas TypeScript. Bahasa lain punya tipe; tidak banyak yang punya cara seluwes ini untuk mengatakan \"nilai ini salah satu dari daftar berikut\".\n\n" +
            "## Dua Istilah Kunci\n\n" +
            "**Union type** — beberapa kemungkinan digabung dengan `|`:\n\n" +
            "```text\nstring | number        → boleh teks, boleh angka\n```\n\n" +
            "**Literal type** — bukan \"teks apa pun\", melainkan **teks tertentu saja**:\n\n" +
            "```text\n\"admin\" | \"user\"       → hanya dua teks itu yang diterima\n```\n\n" +
            "Gabungan keduanya inilah yang membuat salah ketik `\"amdin\"` ditolak sebelum kode dijalankan — sesuatu yang mustahil dilakukan JavaScript biasa.\n\n" +
            "## Narrowing: Membuka Kunci Isinya\n\n" +
            "Union punya konsekuensi. Kalau sebuah nilai bertipe `string | number`, kamu **tidak boleh** langsung memanggil `.toUpperCase()` — karena kalau isinya angka, method itu tidak ada.\n\n" +
            "```text\nsebelum diperiksa:  string | number   → hanya method milik keduanya yang boleh\n" +
            "                          |\n" +
            "        if (typeof x === \"string\") { ... }\n" +
            "                          |\n" +
            "di dalam if:        string            → seluruh method string terbuka\n```\n\n" +
            "Proses mempersempit dari \"salah satu dari beberapa\" menjadi \"satu yang pasti\" inilah yang disebut **narrowing**. Alat untuk melakukannya ada empat, dan masing-masing punya wilayahnya:\n\n" +
            "| Alat | Dipakai untuk | Contoh |\n" +
            "|---|---|---|\n" +
            "| `typeof` | tipe primitif | `typeof x === \"string\"` |\n" +
            "| `in` | membedakan bentuk objek | `\"radius\" in bentuk` |\n" +
            "| `instanceof` | objek hasil `new` / class bawaan | `x instanceof Date` |\n" +
            "| properti pembeda | discriminated union | `bentuk.kind === \"circle\"` |\n\n" +
            "## Exhaustive Checking dengan never\n\n" +
            "Ketika menangani discriminated union menggunakan `switch`, bagaimana cara memastikan kamu tidak lupa menangani salah satu variasinya?\n\n" +
            "Caranya adalah **Exhaustive Checking** menggunakan tipe `never` di blok `default`:\n\n" +
            "```text\nswitch (state.status) {\n  case \"success\": return state.data;\n  case \"error\": return state.pesan;\n  default: {\n    const _exhaustive: never = state; // ← aman: semua kasus sudah tertangani\n    return _exhaustive;\n  }\n}\n```\n\n" +
            "Jika suatu saat rekan setim menambahkan `| { status: \"loading\" }` pada union tapi lupa menambahkan `case \"loading\"`, compiler TypeScript langsung menolak baris `_exhaustive` dengan pesan error merah! Ini adalah standar industri untuk alur pembayaran, state machine, dan reducer.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Memakai `string` padahal nilainya terbatas.** `status: string` menerima typo `\"sucess\"`; union literal menolaknya sebelum kode dijalankan.\n" +
            "2. **`let` menghapus literal type.** `let peran = \"admin\"` disimpulkan sebagai `string` biasa karena masih bisa berubah — pakai `const`, atau tulis tipenya secara eksplisit.\n" +
            "3. **Memakai `instanceof` pada interface.** Interface hilang saat kompilasi, jadi tidak ada wujudnya saat aplikasi berjalan; untuk bentuk objek gunakan `in` atau properti pembeda.\n" +
            "4. **Lupa properti pembeda pada union objek.** Tanpa `kind`/`status`, compiler tidak bisa memilih anggota mana yang sedang ditangani.\n" +
            "5. **Menyalahgunakan non-null assertion (`!`).** Menulis `user!.nama` membungkam peringatan compiler, tapi bila data aslinya bernilai null, aplikasi tetap meledak saat dijalankan.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan sebuah **paket yang datang tanpa keterangan isi**. Kamu tidak boleh langsung menyeduhnya — bisa saja isinya bukan kopi. Narrowing adalah proses memeriksa isinya dulu: begitu kamu yakin itu kopi, barulah semua tindakan khusus kopi masuk akal. Compiler bersikap persis seperti itu, dan ia mengingat hasil pemeriksaanmu di dalam blok `if`.\n\n" +
            "## Kenapa Ini Penting di Dunia Kerja\n\n" +
            "> **Kapan dipakai:** setiap layar yang memuat data punya minimal tiga keadaan — sedang memuat, berhasil, gagal. Cara pemula menuliskannya adalah tiga variabel boolean terpisah, yang memungkinkan keadaan mustahil seperti \"sedang memuat sekaligus gagal\". Discriminated union di modul ini membuat keadaan mustahil itu **tidak bisa ditulis sama sekali** — dan itu salah satu jawaban yang paling sering ditanyakan saat technical interview frontend.",
        },
        {
          kind: "step",
          id: "ts-3-1",
          title: "Union Type (|) & Literal Type",
          explanation:
            "Union type ditulis dengan tanda `|` dan berarti \"nilai ini boleh salah satu dari beberapa kemungkinan\", misalnya `string | number`. Yang membuatnya jauh lebih berguna adalah **literal type**: alih-alih menyebut tipe umum seperti `string`, kamu menyebut nilai teksnya secara persis, sehingga `\"admin\" | \"user\"` hanya menerima dua teks itu dan menolak sisanya. Efek praktisnya besar: salah ketik `\"amdin\"` langsung ditolak compiler, dan editor menawarkan autocomplete berisi daftar nilai yang sah. Jebakan yang perlu diingat: literal type hanya mengikat kalau nilainya konstan — `let peran = \"admin\"` akan disimpulkan sebagai `string` biasa karena isinya masih bisa berubah, sedangkan `const peran = \"admin\"` disimpulkan sebagai literal `\"admin\"`.",
          example: {
            code:
              "type Ukuran = \"S\" | \"M\" | \"L\";\n" +
              "let pilihan: Ukuran = \"M\";\n" +
              "// pilihan = \"XL\";   // ditolak: Type '\"XL\"' is not assignable to type 'Ukuran'\n" +
              "console.log(\"Ukuran terpilih:\", pilihan);",
            output: "Ukuran terpilih: M",
            note: "Baris yang dikomentari adalah nilai yang tidak ada di daftar — compiler menolaknya sebelum kode dijalankan.",
          },
          instruction:
            "Aplikasimu hanya mengenal tiga jenis peran pengguna: administrator (`\"admin\"`), pengguna biasa (`\"user\"`), dan tamu (`\"guest\"`). Buat sebuah nama tipe bernama `Role` yang hanya menerima ketiga teks itu dan menolak teks lainnya.",
          starterCode: "// Tulis Role di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "type\\s+Role\\s*=(?=[\\s\\S]*['\"]admin['\"])(?=[\\s\\S]*['\"]user['\"])(?=[\\s\\S]*['\"]guest['\"])",
              message:
                "Sebutkan ketiga nilainya sebagai literal berkutip: `\"admin\"`, `\"user\"`, dan `\"guest\"`. Urutannya bebas — yang penting ketiganya ada.",
            },
            {
              pattern: "['\"]\\s*\\|\\s*['\"]",
              message:
                "Ketiga kemungkinan itu perlu dipisahkan tanda `|`. Boleh satu baris (`\"admin\" | \"user\"`) atau bertingkat ke bawah dengan `|` di awal tiap baris.",
            },
            {
              pattern: "^[^/\\n]*type\\s+Role\\s*=\\s*string",
              flags: "im",
              mustNotMatch: true,
              message:
                "`string` menerima teks apa pun, termasuk typo seperti \"amdin\". Sebutkan ketiga nilainya satu per satu.",
            },
          ],
          solution: 'type Role = "admin" | "user" | "guest";',
          susunKode: {
            potongan: [
              "type Role =",
              "\"admin\" | \"user\" | \"guest\";",
            ],
            pengecoh: [
              "type Role = string;",
              "\"admin\" & \"user\" & \"guest\";",
            ],
            pemisah: " ",
            explanation:
              "Union literal type `\"admin\" | \"user\" | \"guest\"` membatasi nilai variabel hanya ke opsi yang valid. Pengecoh `string` menggoda karena cepat ditulis tetapi keliru karena menerima teks apa pun (termasuk typo). Pengecoh operator `&` juga jebakan karena tak mungkin sebuah nilai bertipe tiga string sekaligus.",
          },
        },
        {
          kind: "step",
          id: "ts-3-2",
          title: "Narrowing dengan typeof",
          explanation:
            "Begitu sebuah nilai bertipe union, compiler hanya mengizinkan hal-hal yang aman untuk **semua** kemungkinan — jadi pada `string | number` kamu tidak boleh memanggil `.toUpperCase()` maupun `.toFixed()`. Cara membukanya adalah memeriksa isinya lebih dulu, dan untuk tipe primitif alatnya adalah `typeof` yang sudah kamu kenal dari JavaScript. Yang istimewa: TypeScript **membaca** pengecekan itu dan mempersempit tipenya di dalam blok tersebut, sehingga di dalam `if (typeof val === \"string\")` seluruh method string terbuka tanpa kamu perlu melakukan apa pun. Jebakan yang perlu diingat: `typeof null` menghasilkan `\"object\"` (bug lama JavaScript yang tidak bisa diperbaiki), jadi untuk memeriksa null gunakan `val === null`, bukan `typeof`.",
          example: {
            code:
              "function tampilkan(nilai: string | number) {\n" +
              "  if (typeof nilai === \"string\") {\n" +
              "    return nilai.toUpperCase();   // di sini nilai pasti string\n" +
              "  }\n" +
              "  return nilai.toFixed(2);        // sisanya pasti number\n" +
              "}\n" +
              "console.log(tampilkan(\"promo\"));\n" +
              "console.log(tampilkan(19.5));",
            output: "PROMO\n19.50",
            note: "Setelah blok if, compiler tahu satu-satunya kemungkinan tersisa adalah number — tanpa perlu else.",
          },
          instruction:
            "Di dalam fungsi di editor, parameter `val` bisa berisi teks maupun angka. Tambahkan pengecekan yang memastikan isinya berupa angka, lalu di dalam pengecekan itu cetak `val` dengan dua angka di belakang koma memakai `toFixed(2)`.",
          starterCode:
            "function cetakHarga(val: string | number) {\n" +
            "  // Tulis pengecekannya di sini\n" +
            "}\n" +
            "cetakHarga(1500);\n",
          language: "jsx",
          tests: [
            {
              pattern: "typeof\\s+val\\s*===?\\s*['\"]number['\"]",
              message:
                "Pakai `typeof val === \"number\"` di dalam sebuah `if` — inilah yang membuat compiler yakin isinya angka.",
            },
            {
              pattern: "val\\s*\\.\\s*toFixed\\s*\\(\\s*2\\s*\\)",
              message:
                "Di dalam blok if, panggil `val.toFixed(2)`. Method ini hanya boleh dipanggil setelah narrowing.",
            },
          ],
          solution:
            "function cetakHarga(val: string | number) {\n" +
            "  if (typeof val === \"number\") {\n" +
            "    console.log(val.toFixed(2));\n" +
            "  }\n" +
            "}\n" +
            "cetakHarga(1500);",
          susunKode: {
            potongan: [
              "function cetakHarga(val: string | number) {",
              "  if (typeof val === \"number\") {",
              "    console.log(val.toFixed(2));",
              "  }",
              "}",
              "cetakHarga(1500);",
            ],
            pengecoh: [
              "  if (typeof val === \"string\") {",
              "    console.log(val.toUpperCase());",
            ],
            pemisah: "\n",
            explanation:
              "Pemeriksaan `typeof val === \"number\"` mempersempit tipe union sehingga method `.toFixed(2)` aman dipanggil. Pengecoh `typeof val === \"string\"` menggoda jika terkecoh oleh tipe pertama di union, tetapi keliru karena method `.toFixed(2)` tidak ada di string. Pengecoh `toUpperCase()` juga jebakan fungsi string.",
          },
        },
        {
          kind: "step",
          id: "ts-3-3",
          title: "Narrowing dengan in dan instanceof",
          explanation:
            "`typeof` hanya sanggup membedakan tipe primitif; begitu union-mu berisi dua bentuk objek yang berbeda, ia tidak menolong karena keduanya sama-sama menghasilkan `\"object\"`. Untuk kasus itu ada dua alat lain. Operator `in` memeriksa apakah sebuah nama properti ada pada objek — `if (\"radius\" in bentuk)` cukup untuk meyakinkan compiler bahwa yang sedang ditangani adalah lingkaran. Operator `instanceof` dipakai saat objeknya lahir dari sebuah class, termasuk class bawaan seperti `Date` dan `Error`, sehingga `if (nilai instanceof Date)` membuka seluruh method tanggal. Jebakan yang sering menjatuhkan orang: `instanceof` tidak bekerja pada interface, karena interface hilang saat kompilasi dan tidak punya wujud apa pun saat aplikasi berjalan — untuk interface, gunakan `in`.",
          example: {
            code:
              "interface Email { alamat: string }\n" +
              "interface Telepon { nomor: string }\n\n" +
              "function kirim(tujuan: Email | Telepon) {\n" +
              "  if (\"alamat\" in tujuan) {\n" +
              "    return \"Kirim email ke \" + tujuan.alamat;\n" +
              "  }\n" +
              "  return \"Kirim SMS ke \" + tujuan.nomor;\n" +
              "}\n" +
              "console.log(kirim({ alamat: \"bimo@test.com\" }));\n" +
              "console.log(kirim({ nomor: \"08123\" }));",
            output: "Kirim email ke bimo@test.com\nKirim SMS ke 08123",
            note: "Nama properti di dalam `in` ditulis sebagai teks berkutip — menulis `alamat in tujuan` tanpa kutip akan dianggap variabel.",
          },
          instruction:
            "Fungsi di editor menerima nilai yang bisa berupa objek tanggal atau teks biasa. Tambahkan pengecekan yang memastikan `nilai` benar-benar objek `Date`, lalu di dalamnya cetak hasil pemanggilan `nilai.getFullYear()`. Gunakan operator yang cocok untuk objek hasil class, bukan `typeof`.",
          starterCode:
            "function tahunDari(nilai: Date | string) {\n" +
            "  // Tulis pengecekannya di sini\n" +
            "}\n" +
            "tahunDari(new Date(\"2026-07-28\"));\n",
          language: "jsx",
          tests: [
            {
              pattern: "nilai\\s+instanceof\\s+Date",
              message:
                "Objek hasil class diperiksa dengan `instanceof`, jadi tulis `if (nilai instanceof Date)`. `typeof` akan menghasilkan \"object\" dan tidak membedakan apa pun.",
            },
            {
              pattern: "nilai\\s*\\.\\s*getFullYear\\s*\\(\\s*\\)",
              message:
                "Di dalam blok pengecekan, panggil `nilai.getFullYear()` — method ini baru boleh diakses setelah compiler yakin nilai adalah Date.",
            },
          ],
          solution:
            "function tahunDari(nilai: Date | string) {\n" +
            "  if (nilai instanceof Date) {\n" +
            "    console.log(nilai.getFullYear());\n" +
            "  }\n" +
            "}\n" +
            "tahunDari(new Date(\"2026-07-28\"));",
          susunKode: {
            question:
              "Gunakan instanceof Date untuk narrowing objek Date.",
            potongan: [
              "function tahunDari(nilai: Date | string) {",
              "  if (nilai instanceof Date) {",
              "    console.log(nilai.getFullYear());",
              "  }",
              "}",
              "tahunDari(new Date(\"2026-07-28\"));",
            ],
            pengecoh: [
              "  if (typeof nilai === \"Date\") {",
              "  if (nilai in Date) {",
            ],
            pemisah: "\n",
            explanation:
              "Operator `instanceof Date` digunakan untuk mengecek apakah objek merupakan instansi dari kelas `Date`. Pengecoh `typeof nilai === \"Date\"` menggoda tetapi keliru karena `typeof` untuk objek hanya mengembalikan `\"object\"`. Pengecoh `nilai in Date` juga jebakan penggunaan operator `in` pada class.",
          },
        },
        {
          kind: "step",
          id: "ts-3-4",
          title: "Discriminated Union — Pola State yang Mustahil Salah",
          explanation:
            "Discriminated union adalah union objek yang setiap anggotanya punya satu properti pembeda dengan nilai literal berbeda — biasanya dinamai `kind`, `type`, atau `status`. Properti itu berfungsi seperti label pada map: begitu kamu memeriksa `if (state.status === \"success\")`, compiler tahu persis anggota mana yang sedang ditangani dan membuka properti khusus miliknya saja. Kekuatan sebenarnya ada pada apa yang **tidak bisa** kamu tulis: keadaan mustahil seperti \"berhasil tapi punya pesan error\" tidak akan lolos compile, sesuatu yang tidak mungkin dijamin oleh tiga variabel boolean terpisah. Pola ini adalah cara standar memodelkan keadaan pemuatan data di React, dan pertanyaan tentangnya sering muncul di technical interview frontend.",
          example: {
            code:
              "type Bentuk =\n" +
              "  | { kind: \"lingkaran\"; radius: number }\n" +
              "  | { kind: \"persegi\"; sisi: number };\n\n" +
              "function luas(b: Bentuk): number {\n" +
              "  if (b.kind === \"lingkaran\") return 3.14 * b.radius * b.radius;\n" +
              "  return b.sisi * b.sisi;\n" +
              "}\n" +
              "console.log(luas({ kind: \"lingkaran\", radius: 10 }));\n" +
              "console.log(luas({ kind: \"persegi\", sisi: 4 }));",
            output: "314\n16",
            note: "Coba akses b.sisi di dalam cabang lingkaran — compiler menolak, karena properti itu memang tidak ada di sana.",
          },
          instruction:
            "Modelkan keadaan pemuatan data sebagai tipe bernama `State` dengan dua kemungkinan. Keduanya dibedakan oleh properti `status`. Kemungkinan pertama berstatus `\"success\"` dan membawa `data` berupa teks; kemungkinan kedua berstatus `\"error\"` dan membawa `message` berupa teks. Pastikan properti `data` tidak bisa diakses saat statusnya error.",
          starterCode: "// Tulis State di sini\n",
          language: "jsx",
          tests: [
            {
              pattern: "type\\s+State\\s*=",
              message: "Mulai dengan `type State =` — bentuk union hanya bisa dibuat dengan `type`.",
            },
            {
              pattern:
                "(?:status\\s*:\\s*['\"]success['\"][\\s\\S]*data\\s*:\\s*string|data\\s*:\\s*string[\\s\\S]*status\\s*:\\s*['\"]success['\"])",
              message:
                "Kemungkinan pertama harus memuat `status: \"success\"` beserta `data: string` di dalam objek yang sama.",
            },
            {
              pattern:
                "(?:status\\s*:\\s*['\"]error['\"][\\s\\S]*message\\s*:\\s*string|message\\s*:\\s*string[\\s\\S]*status\\s*:\\s*['\"]error['\"])",
              message:
                "Kemungkinan kedua harus memuat `status: \"error\"` beserta `message: string` di dalam objek yang sama.",
            },
            {
              pattern: "\\}\\s*\\|\\s*\\{|\\|\\s*\\{[\\s\\S]*\\|\\s*\\{",
              message:
                "Kedua kemungkinan harus dipisahkan dengan tanda `|`, misalnya `{ ... } | { ... }`. Boleh ditulis satu baris atau bertingkat ke bawah.",
            },
          ],
          solution:
            "type State =\n" +
            "  | { status: \"success\"; data: string }\n" +
            "  | { status: \"error\"; message: string };",
          susunKode: {
            question:
              "Buat Discriminated Union untuk State success dan error.",
            potongan: [
              "type State =",
              "  | { status: \"success\"; data: string }",
              "  | { status: \"error\"; message: string };",
            ],
            pengecoh: [
              "  | { status: string; data: string }",
              "  & { status: \"error\"; message: string };",
            ],
            pemisah: "\n",
            explanation:
              "Discriminated union membedakan varian state menggunakan properti literal `status: \"success\"` dan `status: \"error\"`. Pengecoh `status: string` menggoda tetapi keliru karena membuat TypeScript tidak bisa membedakan kedua varian state. Pengecoh operator `&` juga jebakan yang menggabungkan tipe alih-alih membuat pilihan.",
          },
        },
        {
          kind: "step",
          id: "ts-3-5",
          title: "Custom Type Guard Function (is)",
          explanation:
            "Kadang pengecekannya terlalu panjang untuk ditulis berulang kali, atau kamu ingin memakainya di banyak tempat — solusinya memindahkan pengecekan itu ke dalam sebuah fungsi. Masalahnya, fungsi biasa yang mengembalikan `true`/`false` tidak membuat compiler yakin apa pun: ia hanya melihat sebuah boolean dan tetap menganggap nilaimu belum dipersempit. Penanda `val is string` pada posisi tipe kembalian mengubah keadaan itu — ia memberi tahu compiler \"kalau fungsi ini mengembalikan true, maka argumennya pasti bertipe string\", dan narrowing pun berlaku di tempat pemanggilnya. Jebakan yang perlu disadari: penanda ini adalah **janji dari kamu**, bukan hasil pemeriksaan compiler; kalau isi fungsinya salah, TypeScript akan tetap mempercayaimu dan bug-nya lolos.",
          example: {
            code:
              "interface Kucing { mengeong: () => string }\n\n" +
              "function isKucing(h: unknown): h is Kucing {\n" +
              "  return typeof h === \"object\" && h !== null && \"mengeong\" in h;\n" +
              "}\n\n" +
              "const hewan: unknown = { mengeong: () => \"meong\" };\n" +
              "if (isKucing(hewan)) {\n" +
              "  console.log(hewan.mengeong());   // properti terbuka di sini\n" +
              "}",
            output: "meong",
            note: "Tanpa penanda `h is Kucing`, baris hewan.mengeong() akan ditolak walaupun pengecekannya sudah benar.",
          },
          instruction:
            "Buat sebuah fungsi bernama `isNumber` yang menerima satu parameter bernama `val` bertipe `unknown` dan memeriksa apakah isinya angka. Beri fungsi itu penanda pada tipe kembaliannya agar compiler ikut mempersempit tipe di tempat pemanggilnya.",
          starterCode: "// Tulis fungsi isNumber di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "(function\\s+isNumber\\s*\\(|const\\s+isNumber\\s*=\\s*\\()\\s*val\\s*:\\s*unknown\\s*\\)\\s*:\\s*val\\s+is\\s+number",
              message:
                "Tipe kembaliannya bukan `boolean`, melainkan penanda `val is number` — tulis `function isNumber(val: unknown): val is number`. Bentuk arrow function juga diterima.",
            },
            {
              pattern: "typeof\\s+val\\s*===?\\s*['\"]number['\"]",
              message:
                "Isi fungsinya harus benar-benar memeriksa, misalnya `return typeof val === \"number\";`. Penanda `is` hanya janji — pemeriksaannya tetap tanggung jawabmu.",
            },
          ],
          solution:
            "function isNumber(val: unknown): val is number {\n" +
            "  return typeof val === \"number\";\n" +
            "}\n" +
            "console.log(isNumber(42), isNumber(\"42\"));",
          susunKode: {
            question:
              "Buat custom type guard function isNumber dengan return val is number.",
            potongan: [
              "function isNumber(val: unknown): val is number {",
              "  return typeof val === \"number\";",
              "}",
              "console.log(isNumber(42), isNumber(\"42\"));",
            ],
            pengecoh: [
              "function isNumber(val: unknown): boolean {",
              "  return typeof val == number;",
            ],
            pemisah: "\n",
            explanation:
              "Custom type guard membutuhkan sintaks `val is number` pada tipe return agar kompilator tahu tipe telah dipersempit. Pengecoh `: boolean` menggoda karena fungsi memang mengembalikan boolean, tetapi keliru karena tidak menginformasikan Narrowing ke TypeScript. Pengecoh `== number` juga jebakan sintaks.",
          },
        },
        {
          kind: "step",
          id: "ts-3-6",
          title: "enum vs Union Literal",
          explanation:
            "`enum` adalah fitur bawaan TypeScript untuk mendaftar sekumpulan nilai konstan, dan sekilas terlihat paling cocok untuk kasus seperti daftar status. Masalahnya, `enum` adalah salah satu dari sedikit fitur TypeScript yang **tidak hilang** saat kompilasi: ia menghasilkan objek JavaScript sungguhan di berkas hasil, menambah ukuran bundle, dan nilainya tidak bisa ditukar begitu saja dengan teks biasa sehingga `\"UP\"` ditolak di tempat yang minta `Direction.UP`. Union literal memberi perlindungan yang sama persis tanpa meninggalkan jejak apa pun setelah kompilasi, dan nilainya tetap berupa teks biasa yang gampang dikirim ke API atau disimpan di database. Karena itu banyak tim modern melarang `enum` di aturan lint mereka — kalau kamu butuh daftar nilainya saat runtime, pola `as const` di step berikutnya adalah gantinya.",
          example: {
            code:
              "// enum menghasilkan kode JavaScript sungguhan:\n" +
              "//   var Warna; (function (Warna) { Warna[\"Merah\"] = \"MERAH\"; })(Warna || (Warna = {}));\n\n" +
              "type Warna = \"MERAH\" | \"HIJAU\";\n" +
              "function cat(w: Warna) {\n" +
              "  return \"Mengecat dengan \" + w;\n" +
              "}\n" +
              "console.log(cat(\"HIJAU\"));",
            output: "Mengecat dengan HIJAU",
            note: "Versi union literal tidak menyisakan satu baris pun di berkas .js hasil kompilasi.",
          },
          instruction:
            "Sebuah permainan hanya mengenal empat arah gerakan: atas, bawah, kiri, dan kanan, yang ditulis dalam huruf kapital sebagai `\"UP\"`, `\"DOWN\"`, `\"LEFT\"`, dan `\"RIGHT\"`. Buat tipe bernama `Direction` untuk keempat arah itu memakai pendekatan yang tidak meninggalkan kode apa pun setelah kompilasi.",
          starterCode: "// Tulis Direction di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "type\\s+Direction\\s*=(?=[\\s\\S]*['\"]UP['\"])(?=[\\s\\S]*['\"]DOWN['\"])(?=[\\s\\S]*['\"]LEFT['\"])(?=[\\s\\S]*['\"]RIGHT['\"])",
              message:
                "Keempat arah harus disebut semua sebagai literal berkutip: `\"UP\"`, `\"DOWN\"`, `\"LEFT\"`, `\"RIGHT\"`. Urutannya bebas.",
            },
            {
              pattern: "['\"]\\s*\\|\\s*['\"]",
              message:
                "Pisahkan tiap arah dengan tanda `|`. Boleh satu baris atau bertingkat ke bawah dengan `|` di awal tiap baris.",
            },
            {
              pattern: "^[^/\\n]*enum\\s+Direction",
              flags: "im",
              mustNotMatch: true,
              message:
                "Justru `enum` yang ingin kita hindari di step ini karena ia meninggalkan kode di hasil kompilasi. Pakai `type` dengan union literal.",
            },
          ],
          solution: 'type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";',
          susunKode: {
            potongan: [
              "type Direction =",
              "\"UP\" | \"DOWN\" | \"LEFT\" | \"RIGHT\";",
            ],
            pengecoh: [
              "enum Direction {",
              "  UP, DOWN, LEFT, RIGHT\n}",
            ],
            pemisah: "\n",
            explanation:
              "Union literal `\"UP\" | \"DOWN\" | \"LEFT\" | \"RIGHT\"` hilang sepenuhnya setelah kompilasi tanpa menyisa kode JS. Pengecoh `enum Direction` menggoda bagi yang biasa menggunakan enum, namun keliru karena instruksi meminta pendekatan tanpa sisa kode JS. Pengecoh enum membuat objek tambahan di JavaScript.",
          },
        },
        {
          kind: "step",
          id: "ts-3-7",
          title: "as const — Mengunci Nilai Menjadi Literal",
          explanation:
            "Saat kamu menulis `const config = { port: 8080 }`, TypeScript menyimpulkan tipe `port` sebagai `number` biasa — sebab meski objeknya `const`, isi propertinya tetap bisa diubah. Menambahkan `as const` di belakang objek mengubah kesimpulan itu secara menyeluruh: seluruh properti menjadi `readonly` dan tipenya dipersempit ke **nilai persisnya**, sehingga `port` bertipe `8080`, bukan `number`. Ini yang membuat `as const` menjadi pengganti `enum` yang populer: dari objek ber-`as const` kamu bisa memanen daftar nilainya menjadi union literal, sekaligus tetap punya objeknya saat aplikasi berjalan. Jebakan yang perlu diketahui: penguncian ini terjadi di level tipe saja — `Object.freeze` yang mencegah perubahan saat runtime adalah hal berbeda, dan `as const` tidak melakukannya.",
          example: {
            code:
              "const STATUS = {\n" +
              "  AKTIF: \"aktif\",\n" +
              "  NONAKTIF: \"nonaktif\",\n" +
              "} as const;\n\n" +
              "// memanen daftar nilainya menjadi union literal:\n" +
              "//   hasilnya sama dengan menulis: \"aktif\" | \"nonaktif\"\n" +
              "type Status = (typeof STATUS)[keyof typeof STATUS];\n" +
              "const s: Status = \"aktif\";\n" +
              "console.log(STATUS.AKTIF, s);",
            output: "aktif aktif",
            note: "Tanpa as const, tipe STATUS.AKTIF hanyalah string — dan union Status di atas tidak akan terbentuk. Baris ber-`keyof typeof` itu belum perlu kamu kuasai sekarang; ia dibedah tuntas di modul Utility Types. Untuk step ini cukup kenali bentuknya sebagai \"ambil semua nilai dari objek ini\".",
          },
          instruction:
            "Buat sebuah konstanta bernama `colors` berisi objek dengan satu properti `red` yang nilainya `'#ff0000'`. Tambahkan penegasan di belakang objeknya agar seluruh propertinya menjadi readonly dan tipenya terkunci ke nilai persisnya, bukan sekadar `string`.",
          starterCode: "// Tulis colors di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "const\\s+colors\\s*=\\s*\\{[\\s\\S]*red\\s*:\\s*['\"]#ff0000['\"][\\s\\S]*\\}\\s*as\\s+const",
              message:
                "Bentuknya `const colors = { red: '#ff0000' } as const;` — jangan lupa `as const` setelah kurung kurawal penutup.",
            },
          ],
          solution: "const colors = { red: '#ff0000' } as const;\nconsole.log(colors.red);",
          susunKode: {
            question:
              "Gunakan as const pada objek colors.",
            potongan: [
              "const colors = { red: '#ff0000' }",
              "as const;",
              "console.log(colors.red);",
            ],
            pengecoh: [
              "as readonly;",
              "as string;",
            ],
            pemisah: " ",
            explanation:
              "Penegasan `as const` mengunci nilai objek menjadi literal yang bersifat `readonly`. Pengecoh `as readonly` menggoda karena istilahnya relevan, tetapi keliru karena `readonly` bukan keyword penegasan konstanta di TS. Pengecoh `as string` juga jebakan yang justru melebarkan tipe nilai.",
          },
        },
        {
          kind: "step",
          id: "ts-3-8",
          title: "satisfies — Memeriksa Tanpa Melebarkan",
          explanation:
            "Ada satu ketegangan yang sering dialami: kalau kamu menulis `const rute: { [key: string]: string } = {...}` — index signature dari modul sebelumnya — compiler memang memeriksa bentuknya, tapi ia juga **melebarkan** tipenya sehingga kamu kehilangan pengetahuan tentang key mana saja yang sebenarnya ada. Sebaliknya kalau kamu tidak menulis anotasi sama sekali, tipenya tetap presisi tapi tidak ada yang memeriksa apakah bentuknya sudah benar. Operator `satisfies` menyelesaikan keduanya sekaligus: ia memverifikasi bahwa objekmu memenuhi sebuah tipe, lalu tetap mempertahankan tipe sempit hasil inference. Aturan praktisnya sederhana — pakai anotasi biasa (`:`) saat kamu memang ingin tipenya seragam, dan pakai `satisfies` saat kamu ingin diperiksa tapi tetap butuh detail nilainya, misalnya pada objek konfigurasi dan tabel pemetaan.",
          example: {
            code:
              "type Tema = { [key: string]: string };\n\n" +
              "// ❌ dengan anotasi biasa, detail key hilang\n" +
              "const a: Tema = { utama: \"biru\" };\n" +
              "// a.utama bertipe string, dan a.salahKetik tidak ditolak\n\n" +
              "// ✅ dengan satisfies, bentuk diperiksa DAN detail dipertahankan\n" +
              "const b = { utama: \"biru\", aksen: \"kuning\" } satisfies Tema;\n" +
              "console.log(b.utama, b.aksen);",
            output: "biru kuning",
            note: "Pada objek b, mengetik b.aksn akan langsung ditolak compiler — pada objek a tidak.",
          },
          instruction:
            "Tipe `Konfigurasi` sudah tersedia di editor. Buat konstanta bernama `appConfig` berisi properti `port` bernilai `3000` dan `host` bernilai `\"localhost\"`. Verifikasi bahwa objek itu memenuhi `Konfigurasi` memakai operator yang tetap mempertahankan tipe sempit hasil inference — bukan anotasi titik dua.",
          starterCode:
            "type Konfigurasi = { [key: string]: string | number };\n\n" +
            "// Tulis appConfig di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "const\\s+appConfig\\s*=\\s*\\{(?=[\\s\\S]*port\\s*:\\s*3000)(?=[\\s\\S]*host\\s*:\\s*['\"]localhost['\"])[\\s\\S]*\\}\\s*satisfies\\s+Konfigurasi",
              message:
                "Bentuknya `const appConfig = { port: 3000, host: \"localhost\" } satisfies Konfigurasi;` — kata `satisfies` ditulis setelah kurung kurawal penutup. Urutan kedua propertinya bebas.",
            },
            {
              pattern: "^[^/\\n]*const\\s+appConfig\\s*:\\s*Konfigurasi",
              flags: "im",
              mustNotMatch: true,
              message:
                "Kamu memakai anotasi titik dua. Itu melebarkan tipenya dan menghilangkan detail nilai — gunakan `satisfies` di akhir objek.",
            },
          ],
          solution:
            "type Konfigurasi = { [key: string]: string | number };\n\n" +
            "const appConfig = {\n" +
            "  port: 3000,\n" +
            "  host: \"localhost\",\n" +
            "} satisfies Konfigurasi;\n" +
            "console.log(appConfig.port);",
          susunKode: {
            question:
              "Gunakan satisfies Konfigurasi pada appConfig.",
            potongan: [
              "type Konfigurasi = { [key: string]: string | number };\n",
              "const appConfig = {",
              "  port: 3000,",
              "  host: \"localhost\",",
              "} satisfies Konfigurasi;",
              "console.log(appConfig.port);",
            ],
            pengecoh: [
              ": Konfigurasi = {",
              "} as Konfigurasi;",
            ],
            pemisah: "\n",
            explanation:
              "Operator `satisfies Konfigurasi` memvalidasi struktur objek tanpa memperlebar tipe inferensi propertinya. Pengecoh `: Konfigurasi` menggoda tetapi keliru karena melebarkan tipe `port` menjadi `string | number`. Pengecoh `as Konfigurasi` juga jebakan type assertion yang mengabaikan validasi ketat.",
          },
        },
        {
          kind: "step",
          id: "ts-3-9",
          title: "Exhaustive Checking dengan never",
          explanation:
            "Saat menangani discriminated union dengan `switch`, bahaya terbesar di proyek tim adalah ketika seseorang menambahkan satu varian baru tetapi lupa menanganinya di seluruh fungsi yang ada. **Exhaustive checking** adalah teknik industri yang memanfaatkan tipe `never` untuk memastikan setiap kemungkinan varian sudah tertangani tanpa ada yang terlewat. Di blok `default`, kamu menetapkan variabel tersebut ke sebuah konstanta bertipe `never`: jika seluruh kasus sudah tertangani di `case`, compiler tahu cabang `default` mustahil tercapai sehingga penugasan ke `never` dinyatakan sah. Namun begitu ada varian baru yang belum ditangani, compiler langsung memprotes baris itu dengan pesan error bahwa varian baru tersebut tidak bisa dimasukkan ke `never`. Pola ini adalah standar wajib di fintech, sistem transaksi, dan manajemen state aplikasi besar.",
          example: {
            code:
              "type Mode = \"terang\" | \"gelap\";\n\n" +
              "function ambilWarna(m: Mode): string {\n" +
              "  switch (m) {\n" +
              "    case \"terang\":\n" +
              "      return \"#ffffff\";\n" +
              "    case \"gelap\":\n" +
              "      return \"#000000\";\n" +
              "    default: {\n" +
              "      const _cek: never = m;\n" +
              "      return _cek;\n" +
              "    }\n" +
              "  }\n" +
              "}\n" +
              "console.log(ambilWarna(\"terang\"));",
            output: "#ffffff",
            note: "Coba tambahkan | \"otomatis\" pada Mode tanpa menambah case-nya — compiler akan langsung menolak baris const _cek: never = m.",
          },
          instruction:
            "Tipe `Lampu` sudah tersedia di editor dengan dua kemungkinan warna: `\"MERAH\"` dan `\"HIJAU\"`. Lengkapi blok `default` pada fungsi `artiLampu` dengan membuat konstanta bernama `_exhaustiveCheck` bertipe `never` yang menampung parameter `lampu`. Ini memastikan jika suatu saat warna baru ditambahkan, compiler akan langsung memperingatkannya.",
          starterCode:
            "type Lampu = \"MERAH\" | \"HIJAU\";\n\n" +
            "function artiLampu(lampu: Lampu): string {\n" +
            "  switch (lampu) {\n" +
            "    case \"MERAH\":\n" +
            "      return \"Berhenti\";\n" +
            "    case \"HIJAU\":\n" +
            "      return \"Jalan\";\n" +
            "    default: {\n" +
            "      // Tulis exhaustive check di sini\n" +
            "      return \"Tidak dikenal\";\n" +
            "    }\n" +
            "  }\n" +
            "}\n" +
            "console.log(artiLampu(\"MERAH\"));\n",
          language: "jsx",
          tests: [
            {
              pattern: "const\\s+_exhaustiveCheck\\s*:\\s*never\\s*=\\s*lampu",
              message:
                "Tulis `const _exhaustiveCheck: never = lampu;` di dalam blok default untuk memastikan seluruh varian tertangani.",
            },
            {
              pattern: "const\\s+_exhaustiveCheck\\s*:\\s*(any|unknown|string)",
              mustNotMatch: true,
              message:
                "Gunakan tipe `never` untuk exhaustive check, bukan `any`, `unknown`, atau `string` — hanya `never` yang bisa menjamin tidak ada varian tersisa.",
            },
            {
              pattern: "return\\s+(_exhaustiveCheck|['\"]Tidak dikenal['\"])",
              message:
                "Kembalikan nilai `_exhaustiveCheck` (atau pertahankan return yang ada) dari blok default untuk menyelesaikan fungsi.",
            },
          ],
          solution:
            "type Lampu = \"MERAH\" | \"HIJAU\";\n\n" +
            "function artiLampu(lampu: Lampu): string {\n" +
            "  switch (lampu) {\n" +
            "    case \"MERAH\":\n" +
            "      return \"Berhenti\";\n" +
            "    case \"HIJAU\":\n" +
            "      return \"Jalan\";\n" +
            "    default: {\n" +
            "      const _exhaustiveCheck: never = lampu;\n" +
            "      return _exhaustiveCheck;\n" +
            "    }\n" +
            "  }\n" +
            "}\n" +
            "console.log(artiLampu(\"MERAH\"));",
          susunKode: {
            question:
              "Tambahkan exhaustive check pada blok default agar seluruh cabang dipastikan tertangani.",
            potongan: [
              "      const _exhaustiveCheck:",
              " never = lampu;\n",
              "      return _exhaustiveCheck;",
            ],
            pengecoh: [
              " any = lampu;\n",
              "      return lampu;",
            ],
            pemisah: "",
            explanation:
              "Exhaustive check menggunakan `const _exhaustiveCheck: never = lampu;` untuk membuktikan kepada compiler bahwa seluruh cabang sudah ditangani. Pengecoh tipe `any` menggoda karena menghilangkan pesan kompilasi tetapi mematikan proteksi tipe. Pengecoh `return lampu;` keliru karena mengembalikan variabel yang belum tentu aman tanpa exhaustive check.",
          },
        },
        {
          kind: "quiz",
          id: "ts-3-kuis",
          title: "Kuis: Union & Narrowing",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Apa yang dilakukan `as const` pada sebuah objek?",
              choices: [
                "Mengubah objek menjadi class",
                "Mengunci seluruh properti menjadi readonly dan mempersempit tipenya ke nilai persisnya",
                "Mencegah objek diubah saat aplikasi berjalan",
                "Menghapus properti yang tidak terpakai",
              ],
              answerIndex: 1,
              explanation:
                "`as const` bekerja di level tipe: properti menjadi readonly dan tipenya menjadi literal, bukan `string`/`number` umum. Pilihan tentang runtime sangat menggoda karena kata \"const\" terdengar seperti penguncian sungguhan — padahal untuk itu kamu butuh `Object.freeze`; `as const` hilang saat kompilasi seperti anotasi lainnya.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Apa ciri utama sebuah discriminated union?",
              choices: [
                "Semua propertinya bertipe number",
                "Setiap anggota union punya satu properti pembeda dengan nilai literal yang unik",
                "Union-nya dibuat memakai kata kunci class",
                "Union-nya hanya boleh berisi dua anggota",
              ],
              answerIndex: 1,
              explanation:
                "Properti pembeda (`kind`, `type`, atau `status`) adalah yang membuat compiler bisa menentukan anggota mana yang sedang ditangani hanya dari satu perbandingan. Tanpa properti itu, union objek tetap sah tapi kamu terpaksa memakai `in` atau type guard untuk membedakannya.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Bagaimana bentuk penanda tipe kembalian pada sebuah custom type guard?",
              choices: [
                "param is Type",
                "param == Type",
                "param instanceof Type",
                "param: Type",
              ],
              answerIndex: 0,
              explanation:
                "`param is Type` memberi tahu compiler bahwa nilai `true` dari fungsi itu berarti argumennya bertipe Type, sehingga narrowing ikut berlaku di tempat pemanggil. `param instanceof Type` menggoda karena juga soal pemeriksaan tipe, tapi itu operator yang dipakai *di dalam* fungsi — bukan penanda di posisi tipe kembalian.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Status pesanan hanya boleh bernilai 'PENDING', 'SHIPPED', atau 'DELIVERED'. Kenapa banyak tim memilih union literal dibanding enum untuk kasus ini?",
              choices: [
                "Karena enum tidak mendukung teks, hanya angka",
                "Karena union literal tidak meninggalkan kode apa pun di hasil kompilasi, sedangkan enum menghasilkan objek JavaScript sungguhan",
                "Karena enum tidak bisa dipakai di dalam interface",
                "Karena union literal memeriksa nilainya saat aplikasi berjalan",
              ],
              answerIndex: 1,
              explanation:
                "`enum` adalah salah satu dari sedikit fitur TypeScript yang bertahan setelah kompilasi, menambah bundle dan memaksa nilainya diakses lewat `Status.PENDING` alih-alih teks biasa. Pilihan terakhir menggoda tapi keliru arah: justru **tidak ada** tipe TypeScript yang memeriksa nilai saat runtime.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Variabel `data` bertipe `string | number` dan kamu ingin memastikan isinya teks sebelum memanggil method string. Operator apa yang tepat?",
              choices: ["in", "instanceof", "typeof", "as"],
              answerIndex: 2,
              explanation:
                "`typeof` adalah alat narrowing untuk tipe primitif seperti string, number, dan boolean. `as` menggoda karena juga membuat error hilang, tapi ia hanya **memaksa** compiler percaya tanpa memeriksa apa pun — kalau isinya ternyata angka, aplikasimu tetap crash saat dijalankan.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Sebuah fungsi menerima `Email | Telepon`, dua interface tanpa properti pembeda. Kenapa `instanceof` tidak bisa dipakai untuk membedakannya?",
              choices: [
                "Karena instanceof hanya bekerja pada array",
                "Karena interface hilang saat kompilasi sehingga tidak ada wujudnya saat aplikasi berjalan",
                "Karena instanceof hanya menerima satu argumen",
                "Karena kedua interface punya jumlah properti yang sama",
              ],
              answerIndex: 1,
              explanation:
                "`instanceof` memeriksa rantai prototype objek saat runtime, jadi ia butuh sesuatu yang benar-benar ada saat itu — yaitu class. Interface adalah konstruksi khusus TypeScript yang lenyap setelah kompilasi. Untuk membedakan bentuk objek biasa, gunakan operator `in` atau tambahkan properti pembeda.",
            },
            {
              id: "q7",
              type: "pilihan-ganda",
              question:
                "Kamu menulis objek konfigurasi dan ingin compiler memeriksa bentuknya, tapi tetap ingat key mana saja yang benar-benar ada. Apa yang kamu pakai?",
              choices: [
                "Anotasi titik dua: const cfg: Konfigurasi = { ... }",
                "Operator satisfies: const cfg = { ... } satisfies Konfigurasi",
                "Type assertion: const cfg = { ... } as Konfigurasi",
                "Tanpa apa pun, biarkan inference bekerja",
              ],
              answerIndex: 1,
              explanation:
                "`satisfies` memverifikasi bentuk tanpa melebarkan tipenya, sehingga detail key dan nilai literalnya tetap terjaga. Anotasi titik dua memeriksa tapi melebarkan; `as` tidak memeriksa sama sekali; tanpa apa pun tipenya presisi tapi kesalahan bentuk lolos begitu saja.",
            },
          ],
        },
      ],
    },
    {
      slug: "generics",
      title: "Generics",
      description:
        "Kode yang fleksibel TAPI tetap aman tipe — dari useState sampai fetch wrapper.",
      topics: [
        "Masalah yang generics selesaikan",
        "Generic function & generic constraint (extends)",
        "Generic interface & type",
        "Default type parameter",
        "Membaca signature generic di library (React, fetch)",
        "Menulis fetch wrapper ber-tipe",
      ],
      items: [
        {
          kind: "materi",
          id: "ts-4-m1",
          title: "Generics: Tipe yang Diisi Belakangan",
          body:
            "# Pengertian\n\n" +
            "Generics adalah **parameter, tapi untuk tipe**.\n\n" +
            "Kamu sudah terbiasa dengan parameter nilai: fungsi `tambah(a, b)` tidak tahu angka apa yang akan masuk, dan itu justru kekuatannya — satu fungsi melayani semua angka.\n\n" +
            "Generics memindahkan ide yang sama ke level tipe. Fungsi ditulis sekali, **tipenya diisi belakangan** oleh siapa pun yang memanggilnya.\n\n" +
            "```text\nfunction tambah( a: number )      ← nilai diisi saat dipanggil\n" +
            "                 ^^^^^^^^^\n" +
            "function bungkus< T >(nilai: T)   ← TIPE diisi saat dipanggil\n" +
            "                  ^^^\n```\n\n" +
            "## Masalah yang Diselesaikan\n\n" +
            "Coba tulis fungsi yang mengembalikan elemen pertama sebuah array. Tanpa generics kamu punya dua pilihan, dan keduanya buruk:\n\n" +
            "```text\n" +
            "// pilihan 1: satu fungsi per tipe → salin-tempel selamanya\n" +
            "function pertamaAngka(arr: number[]): number { return arr[0]; }\n" +
            "function pertamaTeks(arr: string[]): string { return arr[0]; }\n\n" +
            "// pilihan 2: pakai any → fleksibel, tapi tipenya hilang\n" +
            "function pertama(arr: any[]): any { return arr[0]; }\n" +
            "const nama = pertama([\"Budi\"]);   // nama bertipe any, autocomplete mati\n" +
            "```\n\n" +
            "Generics adalah pilihan ketiga yang tidak mengorbankan apa pun:\n\n" +
            "```text\n" +
            "function pertama<T>(arr: T[]): T { return arr[0]; }\n" +
            "const nama = pertama([\"Budi\"]);   // nama bertipe string — otomatis\n" +
            "```\n\n" +
            "> **Inti generics:** ia **mengaitkan** tipe input dengan tipe output. `any` memutus kaitan itu; generics menjaganya.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Generics itu seperti **kotak makan kosong**. Pabrik tidak perlu membuat kotak khusus nasi, kotak khusus roti, dan kotak khusus buah. Satu desain kotak melayani semuanya — dan begitu kamu memasukkan nasi, yang keluar nanti tetap nasi. Kotak itu tidak mengubah isinya menjadi \"makanan tak dikenal\", dan itulah bedanya dengan `any`.\n\n" +
            "## Cara Membaca Notasinya\n\n" +
            "| Yang kamu lihat | Cara membacanya |\n" +
            "|---|---|\n" +
            "| `<T>` | \"ada satu tipe yang belum ditentukan, saya panggil T\" |\n" +
            "| `<T, U>` | dua tipe yang belum ditentukan |\n" +
            "| `<T extends { id: number }>` | T boleh apa saja **asalkan** punya properti id bertipe number |\n" +
            "| `<T = string>` | kalau tidak disebutkan, T dianggap string |\n" +
            "| `Promise<User>` | Promise yang isinya User |\n" +
            "| `useState<number>(0)` | state yang isinya number |\n\n" +
            "Huruf `T` hanyalah kebiasaan (dari *Type*). Kamu boleh menamainya `Item`, `Data`, atau apa pun — dan di kode nyata nama yang deskriptif justru lebih disukai.\n\n" +
            "## Use Case Terbesar di Dunia Kerja: ApiResponse<T>\n\n" +
            "Di backend maupun frontend, pola generics yang paling sering kamu buat sendiri adalah **pembungkus respons API standar**:\n\n" +
            "```text\ninterface ApiResponse<T> {\n  success: boolean;\n  data: T;\n  message?: string;\n}\n```\n\n" +
            "Tanpa generics, kamu terpaksa membuat puluhan interface kembar yang melelahkan: `UserApiResponse`, `ProductApiResponse`, `OrderApiResponse`. Dengan generics, cukup satu interface `ApiResponse<T>` yang dipakai di mana-mana — tinggal mengganti `<T>` dengan model data yang sesuai saat dipanggil.\n\n" +
            "## Generic Constraint dengan keyof: <T, K extends keyof T>\n\n" +
            "Terkadang kamu ingin menghubungkan dua tipe: satu objek, dan satu key dari objek itu:\n\n" +
            "```text\nfunction getProp<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n```\n\n" +
            "Di sini `K` dibatasi (`extends`) hanya boleh berupa nama properti sah di dalam `T`. Jika kamu mencoba mengambil properti yang tidak ada, compiler langsung menolaknya sebelum runtime.\n\n" +
            "## Jebakan yang Perlu Diketahui Sejak Awal\n\n" +
            "1. **Menulis `<T>` padahal tidak butuh.** Kalau T hanya muncul sekali di seluruh signature fungsi (misal `function cetak<T>(item: T): void`), kamu tidak butuh generics — pakai tipe biasa atau union.\n" +
            "2. **Mengira T punya method tertentu.** Di dalam fungsi generic, T bisa apa saja, jadi kamu tidak boleh memanggil `t.nama`. Kalau kamu butuh itu, pakai `extends` untuk membatasinya.\n" +
            "3. **Menyamakan `extends` di generics dengan `extends` di interface.** Di generics artinya \"minimal harus memenuhi\", bukan \"mewarisi\".\n\n" +
            "> **Kapan dipakai di dunia kerja:** kamu akan **membaca** generics jauh lebih sering daripada menulisnya. `useState<User | null>(null)`, `Promise<Response>`, `Array<string>` — semuanya generics. Modul ini terutama membuatmu bisa membaca dokumentasi library modern tanpa tersesat.",
        },
        {
          kind: "step",
          id: "ts-4-1",
          title: "Masalah yang Generics Selesaikan",
          explanation:
            "Bayangkan sebuah fungsi yang menerima apa saja lalu mengembalikannya kembali. Kalau kamu menuliskannya dengan `any`, fungsinya memang fleksibel, tapi TypeScript kehilangan jejak: nilai yang masuk sebagai `string` keluar sebagai `any`, dan seluruh autocomplete serta pemeriksaan di baris berikutnya ikut mati. Generics menyelesaikan ini dengan memberi nama pada tipe yang belum diketahui — biasanya `T` — lalu memakai nama yang sama di parameter dan di nilai kembalian, sehingga compiler tahu keduanya pasti sama. Perbedaannya terasa saat memakai hasilnya: dengan `any` kamu bisa mengetik method yang tidak ada tanpa ditegur, dengan generics salah ketik langsung tertangkap.",
          example: {
            code:
              "// ❌ tipe terputus\n" +
              "function echoAny(val: any): any { return val; }\n" +
              "const a = echoAny(\"halo\");   // a bertipe any — .toUpperCse() lolos!\n\n" +
              "// ✅ tipe terjaga\n" +
              "function echo<T>(val: T): T { return val; }\n" +
              "const b = echo(\"halo\");      // b bertipe string\n" +
              "console.log(b.toUpperCase());",
            output: "HALO",
            note: "Perhatikan `T` muncul dua kali — di parameter dan di return. Itulah yang mengikat keduanya.",
          },
          instruction:
            "Buat sebuah fungsi bernama `identity` yang menerima satu argumen bernama `arg` dan mengembalikannya apa adanya. Buat fungsi itu generic agar tipe nilai yang dikembalikan selalu sama persis dengan tipe nilai yang masuk — jangan memakai `any`.",
          starterCode: "// Tulis fungsi identity di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "(?:function\\s+identity|const\\s+identity\\s*=\\s*)<\\s*(\\w+)\\s*>\\s*\\(\\s*arg\\s*:\\s*\\1\\s*\\)(?:\\s*:\\s*\\1)?",
              message:
                "Deklarasikan parameter tipenya di antara `<` dan `>` setelah nama fungsi, lalu pakai nama yang SAMA untuk tipe parameter dan tipe kembalian — misalnya `function identity<T>(arg: T): T`.",
            },
            {
              pattern: "^[^/\\n]*:\\s*any\\b",
              flags: "im",
              mustNotMatch: true,
              message:
                "Jangan pakai `any` — justru itulah yang sedang kita hindari di step ini.",
            },
          ],
          solution:
            "function identity<T>(arg: T): T {\n" +
            "  return arg;\n" +
            "}\n" +
            "console.log(identity(\"halo\"), identity(7));",
          susunKode: {
            potongan: [
              "function identity<T>(arg: T): T {",
              "  return arg;",
              "}",
              "console.log(identity(\"halo\"), identity(7));",
            ],
            pengecoh: [
              "function identity(arg: any): any {",
              "function identity<T>(arg: any): T {",
            ],
            pemisah: "\n",
            explanation:
              "Fungsi generic `identity<T>(arg: T): T` mempertahankan tipe nilai yang dikembalikan sesuai tipe inputnya. Pengecoh `any` menggoda karena sederhana, namun keliru karena merusak keamanan tipe. Pengecoh `arg: any` juga jebakan yang mematikan kejelasan tipe parameter.",
          },
        },
        {
          kind: "step",
          id: "ts-4-2",
          title: "Generic Constraint (extends)",
          explanation:
            "Di dalam fungsi generic, `T` bisa berarti apa saja — angka, teks, objek, bahkan `null` — sehingga compiler melarangmu mengakses properti apa pun darinya. Constraint memperbaiki ini dengan menetapkan syarat minimal: `T extends { id: number }` dibaca \"T boleh tipe apa pun, asalkan ia punya properti `id` bertipe number\". Setelah syarat itu ditulis, kamu bebas mengakses `item.id` di dalam fungsi, dan pemanggil tetap mendapat tipe aslinya yang lengkap — bukan dipangkas menjadi `{ id: number }`. Perlu diingat bahwa `extends` di sini artinya berbeda dari `extends` pada interface: ini bukan pewarisan, melainkan syarat kelayakan.",
          example: {
            code:
              "function panjangnya<T extends { length: number }>(x: T): number {\n" +
              "  return x.length;\n" +
              "}\n" +
              "console.log(panjangnya(\"halo\"));        // string punya length\n" +
              "console.log(panjangnya([1, 2, 3, 4]));  // array juga\n" +
              "// panjangnya(42);   // ditolak: number tidak punya length",
            output: "4\n4",
            note: "Satu fungsi melayani string dan array sekaligus, karena syaratnya bukan tipe tertentu melainkan kepemilikan properti length.",
          },
          instruction:
            "Buat fungsi generic bernama `getName` yang menerima sebuah objek pada parameter `item` lalu mengembalikan isi properti `name` miliknya sebagai teks. Batasi parameter tipenya agar hanya objek yang benar-benar punya properti `name` bertipe teks yang boleh dikirim.",
          starterCode: "// Tulis fungsi getName di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "(?:function\\s+getName|const\\s+getName\\s*=\\s*)<\\s*\\w+\\s+extends\\s*\\{\\s*name\\s*:\\s*string\\s*;?\\s*\\}\\s*>",
              message:
                "Tambahkan syaratnya di dalam kurung sudut: `<T extends { name: string }>`. Tanpa syarat itu compiler tidak akan mengizinkan `item.name`.",
            },
            {
              pattern: "\\(\\s*item\\s*:\\s*\\w+\\s*\\)\\s*:\\s*string",
              message:
                "Parameternya bernama `item` dan bertipe parameter generic-mu, sedangkan nilai kembaliannya bertipe `string`.",
            },
            {
              pattern: "(?:return\\s+|=>\\s*)item\\s*\\.\\s*name",
              message: "Kembalikan `item.name` dari dalam fungsinya.",
            },
          ],
          solution:
            "function getName<T extends { name: string }>(item: T): string {\n" +
            "  return item.name;\n" +
            "}\n" +
            "console.log(getName({ name: \"Siti\", umur: 30 }));",
          susunKode: {
            potongan: [
              "function getName<T extends { name: string }>(item: T): string {",
              "  return item.name;",
              "}",
              "console.log(getName({ name: \"Siti\", umur: 30 }));",
            ],
            pengecoh: [
              "function getName<T extends object>(item: T): string {",
              "  return (item as any).name;",
            ],
            pemisah: "\n",
            explanation:
              "Batasan generic `T extends { name: string }` memastikan hanya objek yang memiliki properti `name` bertipe teks yang diterima. Pengecoh `T extends object` menggoda tetapi keliru karena objek umum belum tentu memiliki properti `name`. Pengecoh `as any` adalah jebakan pemaksaan tipe.",
          },
        },
        {
          kind: "step",
          id: "ts-4-3",
          title: "Generic Interface & Type",
          explanation:
            "Generics tidak terbatas pada fungsi — interface dan type alias juga bisa menerima parameter tipe, dan di situlah generics paling sering kamu temui di kode nyata. Polanya: tulis `<T>` setelah nama interface, lalu pakai `T` di properti mana pun yang isinya berubah-ubah. Kegunaan paling umum adalah membungkus respons API: seluruh endpoint punya bungkus yang sama (`status`, `pesan`), yang berbeda hanya isi `data`-nya, sehingga satu interface melayani semua endpoint. Saat memakainya, tipe pembungkusnya kamu isi seperti argumen — `ApiResponse<User>` berarti bungkus standar yang isi datanya berbentuk User.",
          example: {
            code:
              "interface Kotak<Isi> {\n" +
              "  label: string;\n" +
              "  isi: Isi;\n" +
              "}\n" +
              "const kotakAngka: Kotak<number> = { label: \"stok\", isi: 12 };\n" +
              "const kotakDaftar: Kotak<string[]> = { label: \"tag\", isi: [\"baru\"] };\n" +
              "console.log(kotakAngka.isi + 1, kotakDaftar.isi[0]);",
            output: "13 baru",
            note: "Nama parameter tipe tidak harus T — `Isi` justru lebih terbaca. Yang penting konsisten di dalam satu deklarasi.",
          },
          instruction:
            "Setiap endpoint di aplikasimu mengembalikan bungkus yang sama: satu penanda keberhasilan bernama `success` berupa boolean, dan satu muatan bernama `data` yang bentuknya berbeda-beda tergantung endpoint. Buat sebuah interface bernama `ResponseBox` yang menerima parameter tipe untuk muatan itu.",
          starterCode: "// Tulis interface ResponseBox di sini\n",
          language: "jsx",
          tests: [
            {
              pattern: "interface\\s+ResponseBox\\s*<\\s*(\\w+)\\s*>\\s*\\{",
              message:
                "Tulis parameter tipenya di antara kurung sudut setelah nama interface, misalnya `interface ResponseBox<T> {`.",
            },
            {
              pattern:
                "interface\\s+ResponseBox\\s*<\\s*(\\w+)\\s*>[\\s\\S]*?data\\s*:\\s*\\1\\b",
              message:
                "Properti `data` harus memakai nama parameter generic yang kamu tulis di kurung sudut. Kalau parameternya `T`, tulis `data: T` — bukan nama tipe lain.",
            },
            {
              pattern: "success\\s*:\\s*boolean",
              message: "Tambahkan properti `success` bertipe `boolean`.",
            },
            {
              pattern: "^[^/\\n]*data\\s*:\\s*(string|number|boolean|object|any)\\b",
              flags: "im",
              mustNotMatch: true,
              message:
                "Properti `data` masih memakai tipe tetap. Isinya berbeda tiap endpoint, jadi pakai parameter generic-mu.",
            },
          ],
          solution:
            "interface ResponseBox<T> {\n  data: T;\n  success: boolean;\n}",
          susunKode: {
            potongan: [
              "interface ResponseBox<T> {",
              "  data: T;",
              "  success: boolean;",
              "}",
            ],
            pengecoh: [
              "  data: any;",
              "  data: string;",
            ],
            pemisah: "\n",
            explanation:
              "Interface generic `ResponseBox<T>` memungkinkan muatan `data` memiliki tipe `T` yang fleksibel. Pengecoh `data: any` menggoda tetapi keliru karena menghilangkan type safety. Pengecoh `data: string` juga jebakan kaku yang membatasi muatan hanya pada teks.",
          },
        },
        {
          kind: "step",
          id: "ts-4-4",
          title: "Default Type Parameter",
          explanation:
            "Parameter tipe bisa diberi nilai bawaan dengan tanda sama dengan, persis seperti parameter biasa: `<T = string>` berarti \"kalau pemanggil tidak menyebutkan tipenya, anggap saja string\". Ini membuat sebuah tipe generic tetap nyaman dipakai untuk kasus umum tanpa menghilangkan keluwesannya untuk kasus khusus. Kamu akan sering melihat pola ini di library — misalnya tipe respons HTTP yang defaultnya `any` atau `unknown` supaya pemakai tidak dipaksa menuliskan tipe hanya untuk mencoba sesuatu. Perlu diingat perbedaannya dengan constraint: `<T = string>` menentukan **nilai bawaan**, sedangkan `<T extends string>` menentukan **batasan**; keduanya bisa dipakai bersamaan seperti `<T extends string = string>`.",
          example: {
            code:
              "interface Hasil<Nilai = string> {\n" +
              "  sukses: boolean;\n" +
              "  nilai: Nilai;\n" +
              "}\n" +
              "const a: Hasil = { sukses: true, nilai: \"OK\" };          // pakai default\n" +
              "const b: Hasil<number> = { sukses: true, nilai: 200 };   // ditentukan sendiri\n" +
              "console.log(a.nilai, b.nilai);",
            output: "OK 200",
            note: "Perhatikan `Hasil` bisa ditulis tanpa kurung sudut sama sekali — itulah gunanya nilai bawaan.",
          },
          instruction:
            "Buat sebuah interface bernama `Wrapper` dengan satu properti bernama `content` yang tipenya generic. Atur agar ketika seseorang menulis `Wrapper` tanpa menyebutkan tipe apa pun, isinya otomatis dianggap angka.",
          starterCode: "// Tulis interface Wrapper di sini\n",
          language: "jsx",
          tests: [
            {
              pattern: "interface\\s+Wrapper\\s*<\\s*\\w+\\s*=\\s*number\\s*>\\s*\\{",
              message:
                "Nilai bawaan ditulis dengan tanda sama dengan di dalam kurung sudut, misalnya `interface Wrapper<T = number> {`.",
            },
            {
              pattern: "content\\s*:\\s*\\w+\\s*;?",
              message:
                "Tambahkan properti `content` yang bertipe parameter generic-mu, bukan tipe tetap.",
            },
          ],
          solution: "interface Wrapper<T = number> {\n  content: T;\n}",
          susunKode: {
            potongan: [
          "interface Wrapper<T = number> {\n",
          "  content: T;\n}"
],
            pengecoh: [
          "type Wrapper<T = number> = {\n",
          "  value: T;\n}"
],
            pemisah: "\n",
            explanation:
              "Default type parameter ditulis dengan tanda sama dengan `T = number` pada deklarasi generic. Pengecoh `T : number` menggoda bagi yang tertukar sintaks anotasi titik dua. Pengecoh `T == number` keliru karena mempergunakan operator perbandingan.",
          },
        },
        {
          kind: "step",
          id: "ts-4-5",
          title: "Membaca Signature Generic di Library",
          explanation:
            "Kamu akan jauh lebih sering membaca generics daripada menulisnya, dan tempat pertama kamu menemuinya adalah React. **React belum kamu pelajari, dan step ini tidak menuntutmu memahaminya** — tiga keterangan ini cukup: sebuah *komponen* adalah fungsi biasa yang namanya diawali huruf besar dan mengembalikan tampilan; tulisan mirip HTML di dalam JavaScript itu disebut *JSX*; dan `useState` adalah fungsi React untuk menyimpan satu nilai yang bisa berubah, yang mengembalikan dua hal sekaligus — nilainya sekarang dan fungsi untuk menggantinya. Yang perlu kamu perhatikan di sini murni soal kurung sudut. `useState<number>(0)` berarti \"buat state yang isinya angka, mulai dari 0\", dan dari situ React menyimpulkan bahwa fungsi pengubahnya hanya menerima angka. Dalam banyak kasus kamu tidak perlu menulis kurung sudut sama sekali karena nilai awal sudah cukup untuk disimpulkan — tetapi ada satu situasi yang mengharuskannya: ketika nilai awalnya `null` sementara nantinya akan diisi objek, seperti `useState<User | null>(null)`. Tanpa penyebutan itu, TypeScript menyimpulkan tipenya sebagai `null` saja dan menolak semua pengisian berikutnya — salah satu error paling membingungkan yang dialami pemula React.",
          example: {
            code:
              "import { useState } from \"react\";\n\n" +
              "function DaftarNama() {\n" +
              "  const [nama, setNama] = useState<string[]>([]);\n" +
              "  return <p>Jumlah nama: {nama.length}</p>;\n" +
              "}",
            output:
              "Komponen dirender dan menampilkan:\nJumlah nama: 0",
            note: "Menyebut <string[]> penting di sini: dari array kosong saja, TypeScript hanya menyimpulkan `never[]` — array yang tidak boleh diisi apa pun — sehingga penambahan nama nanti akan ditolak. `{nama.length}` adalah cara JSX menyelipkan nilai JavaScript ke dalam tampilan.",
          },
          instruction:
            "Di dalam komponen di editor, buat sebuah state bernama `count` beserta fungsi pengubahnya bernama `setCount`, dengan nilai awal 0. Sebutkan tipe generic-nya secara eksplisit sebagai angka, lalu tampilkan nilai `count` di dalam elemen yang sudah disediakan.",
          starterCode:
            "import { useState } from \"react\";\n\n" +
            "function Penghitung() {\n" +
            "  // Tulis deklarasi state di bawah ini\n\n" +
            "  return <p>Nilai sekarang: </p>;\n" +
            "}\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "const\\s*\\[\\s*count\\s*,\\s*setCount\\s*\\]\\s*=\\s*useState\\s*<\\s*number\\s*>\\s*\\(\\s*0\\s*\\)",
              message:
                "Bentuknya `const [count, setCount] = useState<number>(0);` — perhatikan tipe generic-nya ditulis di antara kurung sudut sebelum tanda kurung.",
            },
            {
              pattern: "\\{\\s*count\\s*\\}",
              message:
                "Tampilkan nilainya di dalam JSX dengan kurung kurawal, misalnya `Nilai sekarang: {count}`.",
            },
          ],
          solution:
            "import { useState } from \"react\";\n\n" +
            "function Penghitung() {\n" +
            "  const [count, setCount] = useState<number>(0);\n\n" +
            "  return <p>Nilai sekarang: {count}</p>;\n" +
            "}",
          susunKode: {
            potongan: [
              "import { useState } from \"react\";\n",
              "function Penghitung() {",
              "  const [count, setCount] = useState<number>(0);",
              "  return <p>Nilai sekarang: {count}</p>;",
              "}",
            ],
            pengecoh: [
              "  const [count, setCount] = useState(0 as number);",
              "  const [count, setCount] = useState: number(0);",
            ],
            pemisah: "\n",
            explanation:
              "Penggunaan generic pada hook `useState<number>(0)` secara eksplisit menentukan tipe state. Pengecoh `0 as number` menggoda tetapi keliru tempat penulisan generic-nya. Pengecoh `useState: number(0)` juga jebakan kesalahan sintaks anotasi.",
          },
        },
        {
          kind: "step",
          id: "ts-4-6",
          title: "Menulis Fetch Wrapper Ber-tipe",
          explanation:
            "Hampir setiap proyek punya satu fungsi pembungkus di atas `fetch` supaya penanganan error dan header tidak ditulis ulang di setiap tempat. Membuat pembungkus itu generic memberi keuntungan besar: pemanggil menyebutkan bentuk data yang ia harapkan, dan mulai dari situ seluruh alur datanya bertipe. Bentuk kembaliannya adalah `Promise<T>` karena operasi jaringan berjalan asynchronous — nilai aslinya baru tersedia setelah `await`, jadi `await fetcher<User>(url)` menghasilkan `User` sementara tanpa `await` yang kamu pegang adalah Promise-nya. Satu hal yang wajib disadari: janji tipe ini tidak diverifikasi sama sekali saat aplikasi berjalan, jadi kalau server mengirim bentuk lain, tidak ada yang menghalangi — inilah alasan validasi runtime seperti Zod dibahas di modul terakhir.",
          example: {
            code:
              "async function ambilJson<T>(url: string): Promise<T> {\n" +
              "  const res = await fetch(url);\n" +
              "  if (!res.ok) throw new Error(\"Gagal: \" + res.status);\n" +
              "  return res.json() as Promise<T>;\n" +
              "}\n\n" +
              "interface Kota { nama: string }\n" +
              "// const k = await ambilJson<Kota>(\"/api/kota/1\");\n" +
              "// k.nama otomatis bertipe string",
            output:
              "Tipe yang terlihat di editor saat memanggilnya:\n" +
              "  ambilJson<Kota>(url)  →  Promise<Kota>\n" +
              "  await ambilJson<Kota>(url)  →  Kota",
            note: "`if (!res.ok)` penting: fetch TIDAK melempar error pada status 404 atau 500 — ia tetap dianggap berhasil. Bagian `as Promise<T>` adalah *type assertion*: `res.json()` menghasilkan `Promise<any>` karena tidak ada yang tahu bentuk JSON-nya, jadi kamu yang memberitahu compiler. Kenapa itu berisiko dibahas di modul terakhir.",
          },
          instruction:
            "Buat sebuah fungsi asynchronous bernama `fetcher` yang menerima satu parameter `url` berupa teks. Buat fungsi itu generic sehingga pemanggil bisa menentukan bentuk data yang diharapkan, dan tuliskan tipe kembaliannya sesuai kenyataan bahwa hasilnya baru tersedia nanti.",
          starterCode: "// Tulis fungsi fetcher di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "(?:async\\s+function\\s+fetcher|const\\s+fetcher\\s*=\\s*async)\\s*<\\s*(\\w+)\\s*>\\s*\\(\\s*url\\s*:\\s*string\\s*\\)\\s*:\\s*Promise\\s*<\\s*\\1\\s*>",
              message:
                "Bentuknya `async function fetcher<T>(url: string): Promise<T>` — tipe kembalian fungsi async selalu dibungkus `Promise<...>`.",
            },
            {
              pattern: "await\\s+fetch\\s*\\(\\s*url\\s*\\)",
              message:
                "Di dalam fungsinya, panggil `await fetch(url)` untuk mengambil datanya.",
            },
          ],
          solution:
            "async function fetcher<T>(url: string): Promise<T> {\n" +
            "  const res = await fetch(url);\n" +
            "  return res.json() as Promise<T>;\n" +
            "}",
          susunKode: {
            question:
              "Buat fetcher generic mengembalikan Promise<T>.",
            potongan: [
              "async function fetcher<T>(url: string): Promise<T> {",
              "  const res = await fetch(url);",
              "  return res.json() as Promise<T>;",
              "}",
            ],
            pengecoh: [
              "async function fetcher(url: string): Promise<T> {",
              "async function fetcher<T>(url: number): Promise<T> {",
            ],
            pemisah: "\n",
            explanation:
              "Fungsi async wajib mengembalikan `Promise<T>` sebagai bungkus nilai masa depan yang dihasilkan. Pengecoh tanpa `<T>` menggoda jika lupa mendeklarasikan parameter tipe. Pengecoh `url: number` keliru karena url selalu berupa string.",
          },
        },
        {
          kind: "quiz",
          id: "ts-4-kuis",
          title: "Kuis: Generics",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa gunanya generic constraint `<T extends SomeType>`?",
              choices: [
                "Menghapus parameter tipe T",
                "Menetapkan syarat minimal yang harus dipenuhi T, sehingga propertinya boleh diakses di dalam fungsi",
                "Mengubah T menjadi string",
                "Mempercepat proses kompilasi",
              ],
              answerIndex: 1,
              explanation:
                "Tanpa constraint, T bisa apa saja sehingga compiler melarang akses properti apa pun. Constraint menetapkan syarat kelayakan — dan penting diingat, `extends` di sini berarti \"minimal memenuhi\", bukan pewarisan seperti pada interface.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Apa keuntungan utama generics dibandingkan `any`?",
              choices: [
                "Generics membuat ukuran bundle 50% lebih kecil",
                "Generics menjaga kaitan antara tipe input dan tipe output, sedangkan any memutusnya",
                "Generics tidak memerlukan kompilasi",
                "Generics bekerja saat aplikasi berjalan",
              ],
              answerIndex: 1,
              explanation:
                "Keduanya sama-sama fleksibel; bedanya `any` melupakan tipe aslinya sehingga nilai keluar tanpa informasi apa pun, sedangkan generics mengingatnya. Pilihan tentang runtime menggoda, tapi generics ikut hilang saat kompilasi seperti seluruh fitur tipe lainnya.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara memberi nilai bawaan pada parameter tipe `T`?",
              choices: ["<T : string>", "<T = string>", "<T default string>", "<T as string>"],
              answerIndex: 1,
              explanation:
                "Tanda sama dengan menetapkan nilai bawaan, persis seperti parameter fungsi biasa. `<T : string>` menggoda karena titik dua identik dengan anotasi tipe biasa, tapi di dalam kurung sudut sintaks itu tidak berlaku — untuk membatasi, yang dipakai adalah `extends`.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kamu memanggil `useState(null)` untuk state yang nantinya akan diisi objek User. Kenapa pengisian berikutnya ditolak compiler?",
              choices: [
                "Karena useState tidak menerima null sebagai nilai awal",
                "Karena tanpa penyebutan tipe generic, TypeScript menyimpulkan tipenya sebagai null saja",
                "Karena User harus berupa type, bukan interface",
                "Karena useState hanya bekerja untuk tipe primitif",
              ],
              answerIndex: 1,
              explanation:
                "Inference bekerja dari nilai awal, dan nilai awalnya `null` — jadi tipenya disimpulkan `null`. Perbaikannya adalah menyebutkan tipenya sendiri: `useState<User | null>(null)`. Ini salah satu error yang paling sering membingungkan pemula React karena pesannya muncul jauh dari baris yang sebenarnya bermasalah.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Fungsi `apiClient<T>(url: string): Promise<T>` dipanggil dengan `apiClient<User>('/user/1')` tanpa `await`. Apa tipe nilai yang kamu pegang?",
              choices: ["User", "Promise<User>", "any", "T"],
              answerIndex: 1,
              explanation:
                "Fungsi async selalu mengembalikan Promise, jadi tanpa `await` yang kamu pegang adalah `Promise<User>` — bukan datanya. `User` menggoda karena itulah yang kamu tuliskan di kurung sudut, tapi itu tipe isi Promise-nya, yang baru kamu dapat setelah `await`.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kapan sebaiknya kamu TIDAK memakai generics pada sebuah fungsi?",
              choices: [
                "Ketika fungsinya menerima objek",
                "Ketika parameter tipenya hanya muncul satu kali di seluruh signature",
                "Ketika fungsinya asynchronous",
                "Ketika fungsinya dipakai di lebih dari satu berkas",
              ],
              answerIndex: 1,
              explanation:
                "Gunanya generics adalah **mengaitkan** dua tempat atau lebih — biasanya parameter dengan nilai kembalian. Kalau T hanya muncul sekali, tidak ada yang dikaitkan, dan tipe biasa (atau `unknown`) lebih jujur sekaligus lebih mudah dibaca reviewer.",
            },
          ],
        },
      ],
    },
    {
      slug: "utility-types",
      title: "Utility Types",
      description:
        "Perkakas bawaan yang dipakai di hampir setiap codebase TS.",
      topics: [
        "Partial, Required, Readonly",
        "Pick & Omit — memotong tipe",
        "Record untuk object map",
        "ReturnType, Parameters, Awaited",
        "keyof & typeof di level tipe",
        "Mapped type dasar & template literal type (pengenalan)",
      ],
      items: [
        {
          kind: "materi",
          id: "ts-5-m1",
          title: "Tipe yang Dibuat dari Tipe Lain",
          body:
            "# Pengertian\n\n" +
            "Sampai sini kamu selalu menulis tipe dari nol. Modul ini tentang kebiasaan yang berbeda: **membuat tipe baru dari tipe yang sudah ada**.\n\n" +
            "Kenapa penting? Karena satu entitas biasanya butuh beberapa bentuk yang mirip tapi tidak sama:\n\n" +
            "```text\nUser                    ← data lengkap dari database\n" +
            "User tanpa id           ← untuk form pembuatan data baru\n" +
            "User yang semua opsional ← untuk form edit sebagian\n" +
            "User hanya nama & email ← untuk daftar di halaman depan\n```\n\n" +
            "Menulis keempatnya secara terpisah berarti setiap penambahan properti harus dikerjakan empat kali — dan cepat atau lambat ada yang terlewat. **Utility type** adalah fungsi bawaan TypeScript yang menghasilkan bentuk-bentuk turunan itu secara otomatis.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Mengira utility type bekerja mendalam.** `Partial<T>` dan `Readonly<T>` hanya menyentuh lapisan pertama; properti di dalam objek bersarang tidak ikut berubah.\n" +
            "2. **Lupa `typeof`.** `ReturnType<getData>` salah — yang kamu punya adalah nilai fungsi, sedangkan utility bekerja di level tipe, jadi tulis `ReturnType<typeof getData>`.\n" +
            "3. **Memilih `Omit` untuk data sensitif.** Ia daftar hitam: kolom baru yang ditambahkan ke tipe induk ikut terbawa. Untuk itu `Pick` lebih aman.\n" +
            "4. **`Record<string, T>` dianggap menjamin key-nya ada.** Mengakses key yang tidak ada tetap dianggap bertipe `T` padahal nilainya `undefined` saat dijalankan, kecuali `noUncheckedIndexedAccess` dinyalakan.\n" +
            "5. **Menuliskan tipe turunan secara manual.** Begitu tipe induknya berubah, salinan manual itu diam-diam jadi tidak sinkron — dan itu temuan code review yang sering.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Anggap `User` adalah **dokumen induk**. Utility type adalah mesin fotokopi dengan pengaturan: fotokopi tapi sensor kolom gaji (`Omit`), fotokopi tapi semua kolom boleh kosong (`Partial`), fotokopi hanya halaman 1 dan 2 (`Pick`). Kalau dokumen induknya direvisi, semua salinan ikut berubah — karena mereka bukan salinan mati, melainkan turunan.\n\n" +
            "## Peta Cepat\n\n" +
            "| Utility | Artinya | Contoh hasil |\n" +
            "|---|---|---|\n" +
            "| `Partial<T>` | semua properti jadi opsional | untuk form edit |\n" +
            "| `Required<T>` | semua properti jadi wajib | kebalikan Partial |\n" +
            "| `Readonly<T>` | semua properti jadi tidak bisa diubah | data konfigurasi |\n" +
            "| `Pick<T, K>` | ambil hanya properti K dari objek | tipe ringkas untuk daftar |\n" +
            "| `Omit<T, K>` | buang properti K dari objek | User tanpa password |\n" +
            "| `Record<K, V>` | objek dengan key K dan nilai V | kamus/pemetaan |\n" +
            "| `ReturnType<F>` | tipe hasil sebuah fungsi | mengikuti fungsi tanpa menyalin |\n" +
            "| `Parameters<F>` | tuple berisi tipe parameter fungsi | membungkus fungsi lain |\n" +
            "| `Awaited<P>` | isi sebuah Promise | `Awaited<Promise<User>>` → `User` |\n" +
            "| `Exclude<T, U>` | buang anggota U dari union T | `Exclude<Role, \"tamu\">` |\n" +
            "| `Extract<T, U>` | ambil anggota U yang cocok dari union T | `Extract<string \\| number, string>` |\n" +
            "| `NonNullable<T>` | buang null dan undefined dari T | `NonNullable<string \\| null>` → `string` |\n\n" +
            "## Properti Objek vs Anggota Union\n\n" +
            "Jebakan yang sering membuat pemula bingung adalah membedakan kapan memakai `Omit` vs `Exclude`:\n\n" +
            "- `Pick` dan `Omit` bekerja pada **properti objek** (`Pick<User, \"nama\">`).\n" +
            "- `Extract` dan `Exclude` bekerja pada **anggota union** (`Exclude<\"admin\" | \"user\" | \"guest\", \"guest\">`).\n\n" +
            "Rumus mudahnya: memotong kolom data objek gunakan `Pick`/`Omit`, memangkas opsi nilai union gunakan `Extract`/`Exclude`.\n\n" +
            "## Dua Operator yang Mendasarinya\n\n" +
            "Utility type dibangun di atas dua operator tingkat tipe. Keduanya sering membingungkan karena namanya sama dengan sesuatu di JavaScript, padahal bekerja di dunia yang berbeda:\n\n" +
            "```text\n" +
            "const user = { nama: \"Bimo\", umur: 20 };\n\n" +
            "typeof user            → { nama: string; umur: number }   (di level TIPE)\n" +
            "keyof typeof user      → \"nama\" | \"umur\"                  (union nama key)\n" +
            "```\n\n" +
            "> **Jangan tertukar:** `typeof` yang kamu pakai di dalam `if (typeof x === \"string\")` berjalan saat aplikasi hidup dan menghasilkan sebuah **teks**. `typeof` yang ditulis di posisi tipe (setelah tanda `:` atau di dalam `type`) tidak pernah dijalankan — ia menghasilkan sebuah **tipe**. Bentuknya sama, dunianya berbeda.\n\n" +
            "## Kapan Ini Muncul di Dunia Kerja\n\n" +
            "> **Kapan dipakai:** pola `Omit<User, \"id\" | \"createdAt\">` untuk payload pembuatan data, dan `Partial<User>` untuk payload update, muncul di hampir semua codebase TypeScript yang menyentuh API. Menuliskan tipe form secara manual — lalu lupa memperbaruinya saat model berubah — adalah salah satu temuan code review yang paling sering.\n\n" +
            "## Satu Hal tentang Panel Preview di Modul Ini\n\n" +
            "Hampir semua latihan di sini hanya **mendeklarasikan tipe** (`type`, `interface`) tanpa satu pun `console.log`. Karena tipe hilang saat kompilasi, panel preview memang tidak akan menampilkan hasil apa pun selain keterangan bahwa sintaksmu sudah benar — itu normal, bukan tanda latihanmu gagal. Yang menilai jawabanmu di modul ini adalah tombol **Jalankan Tes**.",
        },
        {
          kind: "step",
          id: "ts-5-1",
          title: "Partial, Required, dan Readonly",
          explanation:
            "Ketiga utility ini mengubah **penanda** pada seluruh properti sebuah tipe sekaligus, tanpa menyentuh nama atau tipe isinya. `Partial<T>` menambahkan `?` ke semua properti sehingga semuanya boleh dikosongkan, dan inilah bentuk yang tepat untuk payload update yang hanya mengirim kolom yang berubah. `Required<T>` melakukan kebalikannya dengan mencabut semua `?`, berguna saat kamu sudah memastikan seluruh nilai terisi dan tidak ingin dipaksa mengecek ulang. `Readonly<T>` menandai semua properti sebagai tidak bisa diubah, cocok untuk objek konfigurasi. Jebakan yang perlu diketahui: ketiganya bekerja **dangkal** — pada objek bersarang, hanya lapisan pertama yang berubah, sehingga `Partial<User>` tidak membuat properti di dalam `user.alamat` ikut opsional.",
          example: {
            code:
              "interface Pengaturan {\n" +
              "  tema: string;\n" +
              "  bahasa: string;\n" +
              "}\n" +
              "type PengaturanTerkunci = Readonly<Pengaturan>;\n" +
              "const p: PengaturanTerkunci = { tema: \"gelap\", bahasa: \"id\" };\n" +
              "// p.tema = \"terang\";   // ditolak: Cannot assign to 'tema'\n" +
              "console.log(p.tema, p.bahasa);",
            output: "gelap id",
            note: "Readonly<T> setara dengan menulis readonly di depan setiap properti — bedanya kamu tidak perlu menyentuh interface aslinya.",
          },
          instruction:
            "Interface `User` sudah tersedia di editor. Halaman edit profil hanya mengirim kolom yang benar-benar diubah pengguna, jadi kamu butuh bentuk `User` yang seluruh propertinya boleh dikosongkan. Buat tipe bernama `DraftUser` untuk keperluan itu dengan memanfaatkan utility type bawaan — jangan menyalin ulang propertinya.",
          starterCode:
            "interface User {\n" +
            "  id: number;\n" +
            "  name: string;\n" +
            "  email: string;\n" +
            "}\n\n" +
            "// Tulis DraftUser di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern: "type\\s+DraftUser\\s*=\\s*Partial\\s*<\\s*User\\s*>",
              message:
                "Utility yang membuat semua properti opsional bernama `Partial`. Tulis `type DraftUser = Partial<User>;`.",
            },
          ],
          solution:
            "interface User {\n" +
            "  id: number;\n" +
            "  name: string;\n" +
            "  email: string;\n" +
            "}\n\n" +
            "type DraftUser = Partial<User>;",
          susunKode: {
            potongan: [
              "interface User {\n  id: number;\n  name: string;\n  email: string;\n}",
              "type DraftUser = Partial<User>;",
            ],
            pengecoh: [
              "type DraftUser = Required<User>;",
              "type DraftUser = Omit<User, any>;",
            ],
            pemisah: "\n",
            explanation:
              "Utility type `Partial<User>` mengubah seluruh properti interface `User` menjadi opsional. Pengecoh `Required<User>` menggoda karena namanya mirip tetapi keliru karena justru membuat semua properti wajib. Pengecoh `Omit` juga jebakan utility yang salah sasaran.",
          },
        },
        {
          kind: "step",
          id: "ts-5-2",
          title: "Pick & Omit — Memotong Tipe",
          explanation:
            "`Pick<T, K>` membuat tipe baru yang hanya berisi properti yang kamu sebutkan, sedangkan `Omit<T, K>` melakukan kebalikannya dengan membuang properti yang kamu sebutkan. Nama properti ditulis sebagai literal string, dan bila lebih dari satu digabung dengan `|` seperti `\"name\" | \"email\"`. Memilih di antara keduanya bukan soal selera: `Pick` bersifat **daftar putih** sehingga properti baru yang ditambahkan ke tipe induk tidak akan ikut bocor, sedangkan `Omit` bersifat **daftar hitam** sehingga properti baru otomatis ikut terbawa. Untuk data sensitif, `Pick` lebih aman — kalau suatu hari kolom `password` ditambahkan ke `User`, tipe yang dibuat dengan `Omit<User, \"id\">` akan diam-diam ikut membawanya.",
          example: {
            code:
              "interface Pesanan {\n" +
              "  id: number;\n" +
              "  produk: string;\n" +
              "  jumlah: number;\n" +
              "  catatanInternal: string;\n" +
              "}\n" +
              "type PesananPublik = Omit<Pesanan, \"catatanInternal\">;\n" +
              "const p: PesananPublik = { id: 1, produk: \"Kopi\", jumlah: 2 };\n" +
              "console.log(p.produk, p.jumlah);",
            output: "Kopi 2",
            note: "Menambahkan catatanInternal ke objek p akan ditolak compiler — properti itu sudah dibuang dari tipenya.",
          },
          instruction:
            "Interface `User` sudah tersedia di editor. Halaman daftar pengguna hanya menampilkan nama dan email, dan tipe ini harus tetap aman seandainya nanti ada kolom rahasia ditambahkan ke `User`. Buat tipe bernama `UserPreview` yang hanya memuat kedua properti itu, memakai utility yang bersifat daftar putih.",
          starterCode:
            "interface User {\n" +
            "  id: number;\n" +
            "  name: string;\n" +
            "  email: string;\n" +
            "}\n\n" +
            "// Tulis UserPreview di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "type\\s+UserPreview\\s*=\\s*Pick\\s*<\\s*User\\s*,\\s*(['\"]name['\"]\\s*\\|\\s*['\"]email['\"]|['\"]email['\"]\\s*\\|\\s*['\"]name['\"])\\s*>",
              message:
                "Pakai `Pick` (daftar putih), sebutkan kedua nama properti sebagai teks dan gabungkan dengan `|`, misalnya `Pick<User, \"name\" | \"email\">`.",
            },
            {
              pattern: "^[^/\\n]*Omit\\s*<",
              flags: "im",
              mustNotMatch: true,
              message:
                "`Omit` bersifat daftar hitam — kolom rahasia yang ditambahkan nanti akan ikut terbawa. Step ini meminta pendekatan daftar putih.",
            },
          ],
          solution:
            "interface User {\n" +
            "  id: number;\n" +
            "  name: string;\n" +
            "  email: string;\n" +
            "}\n\n" +
            'type UserPreview = Pick<User, "name" | "email">;',
          susunKode: {
            potongan: [
              "interface User {\n  id: number;\n  name: string;\n  email: string;\n}",
              "type UserPreview = Pick<User, \"name\" | \"email\">;",
            ],
            pengecoh: [
              "type UserPreview = Omit<User, \"id\">;",
              "type UserPreview = Pick<User, \"name\", \"email\">;",
            ],
            pemisah: "\n",
            explanation:
              "Utility `Pick<User, \"name\" | \"email\">` mengambil properti secara daftar putih (whitelist). Pengecoh `Omit<User, \"id\">` menggoda karena hasil bidangnya sama, tetapi keliru karena `Omit` adalah pendekatan daftar hitam (blacklist) yang melanggar instruksi. Pengecoh koma `,` juga jebakan sintaks.",
          },
        },
        {
          kind: "step",
          id: "ts-5-3",
          title: "Record untuk Object Map",
          explanation:
            "`Record<K, V>` membangun tipe objek yang seluruh key-nya bertipe K dan seluruh nilainya bertipe V — cara ringkas menuliskan kamus atau tabel pemetaan. Kekuatannya muncul saat K berupa union literal: `Record<\"admin\" | \"user\", string[]>` memaksa objekmu memuat **kedua** key itu, sehingga menambah peran baru di union akan langsung memunculkan error di setiap tabel pemetaan yang belum diperbarui. Kalau key-nya memakai `string` biasa, hasilnya mirip index signature — fleksibel, tapi tidak ada yang menagih kelengkapan. Jebakan yang sering mengejutkan: pada `Record<string, boolean>`, mengakses key yang tidak ada tetap dianggap bertipe `boolean` oleh compiler padahal nilainya `undefined` saat dijalankan, kecuali kamu menyalakan `noUncheckedIndexedAccess`.",
          example: {
            code:
              "type Hari = \"senin\" | \"selasa\";\n" +
              "type Jadwal = Record<Hari, string>;\n" +
              "const j: Jadwal = { senin: \"Rapat\", selasa: \"Libur\" };\n" +
              "// menghapus selasa akan ditolak: Property 'selasa' is missing\n" +
              "console.log(j.senin, j.selasa);",
            output: "Rapat Libur",
            note: "Karena key-nya union literal, compiler menagih kelengkapan — inilah bedanya dengan index signature.",
          },
          instruction:
            "Aplikasimu mencatat halaman mana saja yang sudah selesai dimuat. Nama halamannya bertambah terus sehingga tidak bisa didaftarkan, dan setiap halaman hanya punya dua keadaan: sudah atau belum. Buat tipe bernama `PageStatus` untuk pemetaan itu memakai utility yang tepat.",
          starterCode: "// Tulis PageStatus di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "type\\s+PageStatus\\s*=\\s*Record\\s*<\\s*string\\s*,\\s*boolean\\s*>",
              message:
                "Bentuknya `Record<TipeKey, TipeNilai>`. Nama halaman berupa teks dan keadaannya cuma dua, jadi `Record<string, boolean>`.",
            },
          ],
          solution: "type PageStatus = Record<string, boolean>;",
          susunKode: {
            potongan: [
              "type PageStatus =",
              "Record<string, boolean>;",
            ],
            pengecoh: [
              "interface PageStatus =",
              "Map<string, boolean>;",
            ],
            pemisah: " ",
            explanation:
              "Utility `Record<string, boolean>` mendefinisikan tipe objek pemetaan dengan key string dan value boolean. Pengecoh `interface PageStatus` menggoda tetapi keliru karena interface tidak menerima assignment via sama dengan `=`. Pengecoh `Map<string, boolean>` adalah jebakan tipe kelas JS.",
          },
        },
        {
          kind: "step",
          id: "ts-5-4",
          title: "ReturnType, Parameters, dan Awaited",
          explanation:
            "Ketiga utility ini mengambil informasi tipe dari sesuatu yang sudah ada, sehingga kamu tidak perlu menuliskannya dua kali. `ReturnType<typeof fn>` menghasilkan tipe nilai kembalian sebuah fungsi, `Parameters<typeof fn>` menghasilkan **tuple** berisi tipe seluruh parameternya — tuple adalah array berpanjang tetap yang tipe tiap posisinya ditentukan, jadi `[string, boolean]` berarti \"dua elemen: yang pertama teks, yang kedua boolean\" — dan `Awaited<T>` mengupas pembungkus Promise sehingga `Awaited<Promise<User>>` menjadi `User`. Perhatikan kata `typeof` pada dua yang pertama: yang kamu berikan adalah **nilai** fungsinya, sedangkan utility bekerja di level tipe, jadi `typeof` diperlukan untuk menjembatani keduanya — melupakannya adalah kesalahan paling umum di sini. Ketiganya sering digabung untuk fungsi async: `Awaited<ReturnType<typeof ambilUser>>` berarti \"tipe data yang akhirnya keluar dari fungsi ambilUser setelah di-await\".",
          example: {
            code:
              "function buatLabel(teks: string, tebal: boolean) {\n" +
              "  return { teks, tebal, panjang: teks.length };\n" +
              "}\n\n" +
              "type Label = ReturnType<typeof buatLabel>;\n" +
              "type ArgLabel = Parameters<typeof buatLabel>;   // [string, boolean]\n" +
              "type IsiPromise = Awaited<Promise<number>>;     // number\n\n" +
              "const l: Label = { teks: \"Baru\", tebal: true, panjang: 4 };\n" +
              "console.log(l.teks, l.panjang);",
            output: "Baru 4",
            note: "Kalau isi buatLabel diubah, tipe Label ikut berubah sendiri — itulah gunanya menurunkan tipe dari fungsi.",
          },
          instruction:
            "Fungsi `getData` sudah tersedia di editor dan bentuk kembaliannya bisa berubah kapan saja. Buat tipe bernama `Result` yang selalu mengikuti tipe nilai kembalian fungsi itu tanpa kamu tulis ulang. Ingat bahwa yang kamu punya adalah sebuah nilai fungsi, sedangkan utility bekerja di level tipe.",
          starterCode:
            "function getData() {\n" +
            "  return { id: 1, nama: \"Kopi Gayo\", harga: 85000 };\n" +
            "}\n\n" +
            "// Tulis Result di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "type\\s+Result\\s*=\\s*ReturnType\\s*<\\s*typeof\\s+getData\\s*>",
              message:
                "Bentuknya `type Result = ReturnType<typeof getData>;`. Kata `typeof` wajib ada — tanpanya kamu memberikan nilai ke tempat yang meminta tipe.",
            },
          ],
          solution:
            "function getData() {\n" +
            "  return { id: 1, nama: \"Kopi Gayo\", harga: 85000 };\n" +
            "}\n\n" +
            "type Result = ReturnType<typeof getData>;",
          susunKode: {
            potongan: [
              "function getData() {\n  return { id: 1, nama: \"Kopi Gayo\", harga: 85000 };\n}",
              "type Result = ReturnType<typeof getData>;",
            ],
            pengecoh: [
              "type Result = ReturnType<getData>;",
              "type Result = typeof getData;",
            ],
            pemisah: "\n",
            explanation:
              "Utility `ReturnType<typeof getData>` mendapatkan tipe kembalian dari fungsi yang tersimpan di variabel. Pengecoh `ReturnType<getData>` menggoda tetapi keliru karena `getData` adalah nilai (value), bukan tipe — sehingga butuh `typeof`. Pengecoh `typeof getData` adalah jebakan tipe fungsi penuh.",
          },
        },
        {
          kind: "step",
          id: "ts-5-5",
          title: "keyof dan typeof di Level Tipe",
          explanation:
            "`typeof` yang ditulis di posisi tipe adalah operator yang berbeda dari `typeof` yang kamu pakai di dalam `if` — yang satu berjalan saat aplikasi hidup dan menghasilkan teks, yang satu lagi tidak pernah dijalankan dan menghasilkan tipe. `keyof` mengambil seluruh nama properti sebuah tipe lalu menyusunnya menjadi union literal, sehingga `keyof { nama: string; umur: number }` menghasilkan `\"nama\" | \"umur\"`. Keduanya hampir selalu dipakai berpasangan dalam urutan `keyof typeof objek`, yang dibaca dari kanan: ambil tipe dari objeknya, lalu ambil daftar key-nya. Kegunaan nyatanya adalah membuat fungsi yang menerima nama properti dengan aman — parameter bertipe `keyof typeof config` hanya menerima key yang benar-benar ada, dan salah ketik langsung tertangkap.",
          example: {
            code:
              "const menu = { kopi: 18000, teh: 12000, roti: 15000 };\n" +
              "type NamaMenu = keyof typeof menu;   // \"kopi\" | \"teh\" | \"roti\"\n\n" +
              "function harga(nama: NamaMenu): number {\n" +
              "  return menu[nama];\n" +
              "}\n" +
              "console.log(harga(\"teh\"));\n" +
              "// harga(\"susu\");   // ditolak sebelum dijalankan",
            output: "12000",
            note: "Perhatikan urutan bacanya: typeof menu dulu (jadi tipe objek), baru keyof (jadi union nama key).",
          },
          instruction:
            "Objek `config` sudah tersedia di editor. Buat tipe bernama `ConfigKeys` yang berisi seluruh nama properti objek itu sebagai union literal, sehingga hanya key yang benar-benar ada yang bisa dipakai. Gabungkan dua operator tingkat tipe yang dibahas di step ini.",
          starterCode:
            "const config = {\n" +
            "  apiUrl: \"https://api.bilearn.id\",\n" +
            "  timeout: 5000,\n" +
            "  debug: false,\n" +
            "};\n\n" +
            "// Tulis ConfigKeys di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern: "type\\s+ConfigKeys\\s*=\\s*keyof\\s+typeof\\s+config",
              message:
                "Urutannya `keyof typeof config` — `typeof` mengubah nilai menjadi tipe, lalu `keyof` mengambil daftar key-nya.",
            },
          ],
          solution:
            "const config = {\n" +
            "  apiUrl: \"https://api.bilearn.id\",\n" +
            "  timeout: 5000,\n" +
            "  debug: false,\n" +
            "};\n\n" +
            "type ConfigKeys = keyof typeof config;",
          susunKode: {
            potongan: [
              "const config = {\n  apiUrl: \"https://api.bilearn.id\",\n  timeout: 5000,\n  debug: false,\n};",
              "type ConfigKeys = keyof typeof config;",
            ],
            pengecoh: [
              "type ConfigKeys = keyof config;",
              "type ConfigKeys = typeof keyof config;",
            ],
            pemisah: "\n",
            explanation:
              "Kombinasi `keyof typeof config` mengambil union key dari variabel objek JS. Pengecoh `keyof config` menggoda tetapi keliru karena `config` adalah variabel nilai, bukan nama tipe. Pengecoh urutan `typeof keyof` juga jebakan sintaks.",
          },
        },
        {
          kind: "step",
          id: "ts-5-6",
          title: "Mapped Type: Membuat Utility-mu Sendiri",
          explanation:
            "Semua utility yang kamu pakai di step sebelumnya sebenarnya dibuat dengan satu mekanisme yang sama, dan mekanisme itu terbuka untuk kamu juga: **mapped type**. Bentuknya `{ [K in keyof T]: ... }`, dibaca \"untuk setiap key K di dalam T, buat properti dengan tipe berikut\" — mirip perulangan, tapi berjalan di level tipe. Untuk mengambil tipe nilai dari properti aslinya, kamu memakai `T[K]` yang disebut indexed access type; jadi `Readonly<T>` sesungguhnya hanyalah `{ readonly [K in keyof T]: T[K] }`. Kamu bisa menambahkan atau mencabut penanda di depan `[K in ...]`, misalnya `?` untuk membuat semuanya opsional dan `-?` untuk mencabutnya, dan kemampuan ini yang membuatmu tidak lagi bergantung sepenuhnya pada daftar utility bawaan.",
          example: {
            code:
              "interface Produk {\n" +
              "  nama: string;\n" +
              "  harga: number;\n" +
              "}\n\n" +
              "// untuk setiap key di T, jadikan nilainya boolean\n" +
              "type Terisi<T> = { [K in keyof T]: boolean };\n\n" +
              "const cek: Terisi<Produk> = { nama: true, harga: false };\n" +
              "console.log(cek.nama, cek.harga);",
            output: "true false",
            note: "Nama key-nya ikut dari Produk, tapi tipe nilainya diganti seragam menjadi boolean.",
          },
          instruction:
            "Buat tipe generic bernama `Opsional` yang menerima satu parameter tipe, lalu menghasilkan bentuk baru di mana **setiap** properti dari tipe itu menjadi opsional dan tipe nilainya tetap sama seperti aslinya. Tulis sendiri perulangan tingkat tipenya — jangan memakai `Partial`.",
          starterCode:
            "interface Produk {\n" +
            "  nama: string;\n" +
            "  harga: number;\n" +
            "}\n\n" +
            "// Tulis Opsional di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "type\\s+Opsional\\s*<\\s*(\\w+)\\s*>\\s*=\\s*\\{\\s*\\[\\s*(\\w+)\\s+in\\s+keyof\\s+\\1\\s*\\]\\s*\\?\\s*:\\s*\\1\\s*\\[\\s*\\2\\s*\\]\\s*;?\\s*\\}",
              message:
                "Bentuknya `type Opsional<T> = { [K in keyof T]?: T[K] };` — perhatikan tanda `?` sebelum titik dua, dan `T[K]` untuk mengambil tipe nilai aslinya.",
            },
            {
              pattern: "^[^/\\n]*Partial\\s*<",
              flags: "im",
              mustNotMatch: true,
              message:
                "Step ini justru meminta kamu menulis sendiri versi Partial-nya, supaya paham cara kerjanya dari dalam.",
            },
          ],
          solution:
            "interface Produk {\n" +
            "  nama: string;\n" +
            "  harga: number;\n" +
            "}\n\n" +
            "type Opsional<T> = { [K in keyof T]?: T[K] };",
          susunKode: {
            potongan: [
              "interface Produk {\n  nama: string;\n  harga: number;\n}",
              "type Opsional<T> = { [K in keyof T]?: T[K] };",
            ],
            pengecoh: [
              "type Opsional<T> = Partial<T>;",
              "type Opsional<T> = { [K of keyof T]?: T[K] };",
            ],
            pemisah: "\n",
            explanation:
              "Mapped type `{ [K in keyof T]?: T[K] }` melakukan iterasi key untuk membuat properti opsional secara manual. Pengecoh `Partial<T>` menggoda tetapi keliru karena melanggar instruksi untuk tidak menggunakan Partial bawaan. Pengecoh `K of keyof` juga jebakan sintaks keyword.",
          },
        },
        {
          kind: "step",
          id: "ts-5-7",
          title: "Template Literal Type",
          explanation:
            "Template literal type memakai backtick persis seperti template string di JavaScript, bedanya yang disusun bukan teks melainkan **tipe**. Dengan `` `on${Capitalize<EventName>}` ``, sebuah union `\"click\" | \"hover\"` berubah menjadi `\"onClick\" | \"onHover\"` — semua kemungkinan dihitung otomatis oleh compiler. Untuk membantu, TypeScript menyediakan empat pengubah huruf bawaan: `Uppercase`, `Lowercase`, `Capitalize`, dan `Uncapitalize`. Fitur ini paling berguna saat membangun API library yang penamaannya mengikuti pola, atau saat memvalidasi bentuk string seperti `` `${number}-${number}` ``; untuk kode aplikasi sehari-hari ia jarang dibutuhkan, jadi kenali bentuknya agar tidak bingung saat membacanya di dokumentasi, bukan untuk dipakai di mana-mana.",
          example: {
            code:
              "type Warna = \"merah\" | \"biru\";\n" +
              "type KelasBg = `bg-${Warna}`;   // \"bg-merah\" | \"bg-biru\"\n\n" +
              "const kelas: KelasBg = \"bg-biru\";\n" +
              "// const salah: KelasBg = \"bg-hijau\";   // ditolak compiler\n" +
              "console.log(kelas);",
            output: "bg-biru",
            note: "Compiler menghitung SEMUA kombinasi yang mungkin — dua nilai warna menghasilkan dua kelas yang sah.",
          },
          instruction:
            "Buat tipe bernama `EventGetter` yang hanya menerima teks berawalan `get` dan diikuti teks apa pun yang huruf pertamanya kapital. Gunakan backtick dan salah satu pengubah huruf bawaan TypeScript.",
          starterCode: "// Tulis EventGetter di sini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "type\\s+EventGetter\\s*=\\s*`get\\$\\{\\s*Capitalize\\s*<\\s*string\\s*>\\s*\\}`",
              message:
                "Bentuknya `type EventGetter = `get${Capitalize<string>}`;` — awalan get ditulis apa adanya, lalu bagian berubahnya di dalam ${ }.",
            },
          ],
          solution: "type EventGetter = `get${Capitalize<string>}`;",
          susunKode: {
            potongan: [
              "type EventGetter = `get${",
              "Capitalize<string>}`;",
            ],
            pengecoh: [
              "Uppercase<string>}`;",
              "Lower<string>}`;",
            ],
            pemisah: "",
            explanation:
              "Template literal type ``get${Capitalize<string>}`` memastikan teks diawali `get` dan diikuti kata berkapitallisasi awal. Pengecoh `Uppercase` menggoda tetapi keliru karena mengubah seluruh huruf menjadi kapital. Pengecoh `Lower` juga jebakan yang tidak mengubah huruf awal menjadi kapital.",
          },
        },
        {
          kind: "quiz",
          id: "ts-5-kuis",
          title: "Kuis: Utility Types",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Utility type apa yang membuang properti tertentu dari sebuah tipe?",
              choices: ["Pick", "Omit", "Partial", "Record"],
              answerIndex: 1,
              explanation:
                "`Omit<T, K>` menghasilkan tipe baru tanpa properti K. `Pick` menggoda karena keduanya sama-sama memotong tipe, tapi arahnya berlawanan: Pick menyebut yang **disimpan**, Omit menyebut yang **dibuang**.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa yang dilakukan `Partial<T>`?",
              choices: [
                "Membuat semua properti di T menjadi opsional",
                "Membuat semua properti di T menjadi readonly",
                "Mengambil separuh properti pertama dari T",
                "Mengubah semua properti menjadi string",
              ],
              answerIndex: 0,
              explanation:
                "`Partial<T>` menambahkan tanda `?` ke seluruh properti. Perlu diingat efeknya dangkal: pada objek bersarang, hanya lapisan pertama yang menjadi opsional — properti di dalam objek anak tetap wajib.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kenapa `ReturnType<getData>` salah dan harus ditulis `ReturnType<typeof getData>`?",
              choices: [
                "Karena getData harus diberi tanda kurung dulu",
                "Karena getData adalah sebuah nilai, sedangkan utility bekerja di level tipe — typeof yang menjembataninya",
                "Karena ReturnType hanya menerima fungsi async",
                "Karena nama fungsinya harus diawali huruf kapital",
              ],
              answerIndex: 1,
              explanation:
                "Di posisi tipe, TypeScript hanya mengenal tipe. `typeof getData` mengubah nilai fungsi itu menjadi tipe fungsinya, barulah `ReturnType` bisa bekerja. Ini kesalahan paling sering saat pertama memakai utility yang menerima fungsi.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kamu punya `interface Product { id: number; name: string; price: number; }` dan hanya butuh `id` dan `name` untuk halaman daftar. Utility mana yang paling aman jika suatu saat `Product` ditambahi kolom rahasia?",
              choices: [
                "Omit<Product, 'price'>",
                "Pick<Product, 'id' | 'name'>",
                "Partial<Product>",
                "Record<string, Product>",
              ],
              answerIndex: 1,
              explanation:
                "`Pick` bersifat daftar putih: hanya yang kamu sebut yang ikut, sehingga kolom baru tidak akan bocor. `Omit<Product, 'price'>` menggoda karena hasilnya sekarang identik — tapi begitu kolom `password` ditambahkan ke Product, versi Omit diam-diam ikut membawanya.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Aplikasi butuh pemetaan kode bahasa ke namanya, misalnya `'id'` menjadi `'Indonesia'`. Utility apa yang dibuat khusus untuk bentuk seperti ini?",
              choices: [
                "Record<string, string>",
                "Pick<string, string>",
                "Partial<string>",
                "ReturnType<string>",
              ],
              answerIndex: 0,
              explanation:
                "`Record<K, V>` membangun objek dengan key bertipe K dan nilai bertipe V. Kalau daftar kode bahasanya tetap, memakai union literal sebagai K (`Record<\"id\" | \"en\", string>`) lebih ketat lagi karena compiler menagih kelengkapannya.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question: "Apa hasil dari `Awaited<Promise<User[]>>`?",
              choices: ["Promise<User[]>", "User[]", "User", "Promise<User>"],
              answerIndex: 1,
              explanation:
                "`Awaited<T>` mengupas pembungkus Promise dan menyisakan isinya, jadi hasilnya `User[]`. Pilihan `User` menggoda karena terlihat seperti \"mengambil satu\", padahal Awaited hanya membuka Promise-nya — bentuk array di dalamnya tidak ikut dibongkar.",
            },
            {
              id: "q7",
              type: "pilihan-ganda",
              question:
                "Apa arti bagian `[K in keyof T]` pada sebuah mapped type?",
              choices: [
                "Ambil properti pertama dari T",
                "Untuk setiap nama properti di dalam T, buat satu properti baru",
                "Periksa apakah K ada di dalam T saat aplikasi berjalan",
                "Gabungkan T dengan tipe K",
              ],
              answerIndex: 1,
              explanation:
                "Itu adalah perulangan di level tipe: `keyof T` menghasilkan union nama properti, dan `K in` menyusuri satu per satu. Pilihan tentang runtime menggoda karena sintaksnya mirip operator `in` di JavaScript — padahal keduanya bekerja di dunia yang sama sekali berbeda.",
            },
          ],
        },
      ],
    },
    {
      slug: "ts-proyek-nyata",
      title: "TypeScript di Proyek Nyata",
      description:
        "Skill yang membedakan 'tahu TS' dan 'kerja dengan TS'.",
      topics: [
        "Membaca error TS panjang tanpa panik (dari bawah, cari 'is not assignable')",
        "Migrasi file JS ke TS bertahap",
        "Tipe untuk event handler & DOM",
        "Deklarasi tipe pihak ketiga (@types/*)",
        "Kapan boleh as (assertion) dan kenapa itu bau kode",
        "Zod: validasi runtime + tipe statis untuk data eksternal",
      ],
      items: [
        {
          kind: "materi",
          id: "ts-6-m1",
          title: "Batas Kemampuan TypeScript — dan Cara Menambalnya",
          body:
            "# Pengertian\n\n" +
            "Lima modul sebelumnya mengajarkan cara **menulis** tipe. Modul ini tentang hal yang berbeda dan lebih menentukan di pekerjaan nyata: apa yang terjadi ketika tipe bertemu dunia yang tidak rapi.\n\n" +
            "## Satu Kalimat yang Menjelaskan Seluruh Modul Ini\n\n" +
            "> **TypeScript memeriksa kode, bukan data.**\n\n" +
            "Compiler membaca berkas-berkasmu dan memastikan semuanya konsisten. Ia tidak pernah melihat satu pun nilai yang sebenarnya mengalir saat aplikasi berjalan. Dari kalimat ini lahir seluruh isi modul ini:\n\n" +
            "```text\nYANG DIPERIKSA TypeScript          YANG TIDAK\n" +
            "─────────────────────────          ────────────────────────────\n" +
            "kode yang kamu tulis               respons API sungguhan\n" +
            "kode di library ber-tipe           isi localStorage\n" +
            "                                   hasil JSON.parse\n" +
            "                                   input pengguna\n" +
            "                                   library JS tanpa tipe\n```\n\n" +
            "Kolom kanan itu bukan kelemahan yang bisa diperbaiki — ia konsekuensi dari kenyataan bahwa tipe hilang saat kompilasi. Yang bisa kamu lakukan adalah **memasang penjaga di perbatasan**, dan itulah yang dikerjakan Zod di akhir modul.\n\n" +
            "## Tiga Cara Orang Berbohong pada Compiler\n\n" +
            "Ketiganya sah secara sintaks dan ketiganya adalah alasan bug lolos ke produksi:\n\n" +
            "| Cara | Bentuknya | Kenapa berbahaya |\n" +
            "|---|---|---|\n" +
            "| `any` | `const data: any = ...` | mematikan pemeriksaan, dan menular |\n" +
            "| `as` | `data as User` | memaksa compiler percaya tanpa bukti |\n" +
            "| `@ts-ignore` | komentar di atas baris error | menyembunyikan error, bukan menyelesaikannya |\n\n" +
            "Ketiganya punya pemakaian yang sah — tapi masing-masing sebaiknya disertai komentar yang menjelaskan **kenapa** aman di tempat itu. Di code review, `as` tanpa penjelasan hampir selalu ditanyakan.\n\n" +
            "## Penanganan Error Runtime: catch (err: unknown)\n\n" +
            "Di TypeScript modern dengan `strict: true` (opsi `useUnknownInCatchVariables`), variabel pada blok `catch` **bukan `any`, melainkan `unknown`**:\n\n" +
            "```text\ntry {\n  await simpanKeDatabase();\n} catch (err: unknown) {\n  if (err instanceof Error) {\n    console.error(\"Pesan:\", err.message);\n  } else {\n    console.error(\"Terjadi error tidak dikenal:\", err);\n  }\n}\n```\n\n" +
            "Di JavaScript, siapa pun bisa melempar teks biasa `throw 'gagal'` atau angka `throw 500`. Karena compiler tidak bisa menebak apa yang dilempar, ia melarang mengakses `err.message` sebelum kamu membuktikan tipenya lewat `instanceof Error`. Jangan menambalnya dengan `as any`!\n\n" +
            "## File Deklarasi (.d.ts) dan Ambient Modules\n\n" +
            "File berekstensi `.d.ts` (*declaration file*) adalah file yang **hanya memuat tipe tanpa kode yang dijalankan**. Digunakan untuk:\n\n" +
            "- Memberi tahu compiler bentuk modul eksternal yang belum punya tipe: `declare module \"*.svg\" { const src: string; export default src; }`.\n" +
            "- Menambahkan variabel kustom ke objek global: `declare global { interface Window { analitik: any; } }`.\n\n" +
            "## Zod dan Pola safeParse di Batas Sistem\n\n" +
            "Di kode produksi, jangan memanggil `Schema.parse()` sembarangan karena ia melempar error bila data tidak cocok. Gunakan `Schema.safeParse()`:\n\n" +
            "```text\nconst hasil = UserSchema.safeParse(dataLuar);\nif (!hasil.success) {\n  console.error(hasil.error.flatten());\n  return;\n}\n// Di bawah baris ini, hasil.data terjamin 100% valid dan bertipe User!\nconst user = hasil.data;\n```\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Memakai `as` sebagai obat penghilang error.** Compiler menurut tanpa memeriksa apa pun, dan crash-nya terjadi jauh dari tempat assertion ditulis.\n" +
            "2. **Menganggap interface memvalidasi respons API.** Ia hilang saat kompilasi; tanpa validasi runtime, bentuk data yang berbeda lolos begitu saja.\n" +
            "3. **`@ts-ignore` tanpa penjelasan.** Error-nya disembunyikan, bukan diselesaikan — dan orang berikutnya tidak tahu kenapa.\n" +
            "4. **Menyalakan `checkJs` di awal migrasi.** Ribuan error dari kode lama muncul serentak dan tim biasanya menyerah lalu membatalkan seluruh migrasi.\n" +
            "5. **Melonggarkan tipe di deklarasi agar pesan error hilang.** Yang keliru biasanya justru data yang dikirim; membaca baris terakhir pesan error lebih cepat daripada menebak.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan **satpam di lobi kantor**. Ia memeriksa setiap orang yang masuk lewat pintu depan, dan itu efektif. Tapi ia tidak bisa menjamin apa pun tentang paket yang dilempar lewat jendela lantai dua. `as` adalah kamu berkata pada satpam \"yang ini teman saya, lewatkan saja\" — tanpa satpam sempat memeriksanya. Zod adalah memasang pos pemeriksaan kedua tepat di bawah jendela itu.\n\n" +
            "## Cara Membaca Error TypeScript yang Panjang\n\n" +
            "Error TS bisa memanjang sampai belasan baris karena compiler menelusuri tipe bersarang lapis demi lapis. Urutan membacanya:\n\n" +
            "1. Lihat **baris paling bawah** — di situ letak ketidakcocokan yang paling spesifik.\n" +
            "2. Cari frasa `is not assignable to type` — di kiri adalah yang kamu berikan, di kanan adalah yang diminta.\n" +
            "3. Baru naik ke atas untuk tahu properti mana yang membawamu ke sana.\n\n" +
            "```text\n" +
            "Type 'Produk' is not assignable to type 'ProdukBaru'.     ← ringkasan\n" +
            "  Types of property 'harga' are incompatible.             ← jalur\n" +
            "    Type 'string' is not assignable to type 'number'.     ← MASALAH SEBENARNYA\n" +
            "```\n\n" +
            "> **Kapan dipakai di dunia kerja:** kemampuan membaca error inilah yang membedakan orang yang \"tahu TypeScript\" dari yang \"bisa bekerja dengan TypeScript\". Yang pertama menambahkan `as any` sampai errornya diam; yang kedua membaca baris terakhir, menemukan `harga` bertipe salah, dan memperbaiki sumbernya.",
        },
        {
          kind: "step",
          id: "ts-6-1",
          title: "Membaca Error TS Panjang Tanpa Panik",
          explanation:
            "Error TypeScript terasa menakutkan karena panjang, padahal panjangnya justru membantu: compiler menunjukkan seluruh jalur penelusurannya, dari tipe terluar sampai properti terdalam yang benar-benar bermasalah. Karena itu **baris terakhir** hampir selalu berisi inti masalahnya, sementara baris-baris di atasnya hanya menjelaskan bagaimana compiler sampai ke sana. Kunci kedua adalah frasa `is not assignable to type`: bagian sebelum frasa itu adalah apa yang kamu berikan, bagian sesudahnya adalah apa yang sebenarnya diminta. Godaan terbesar saat menemui error semacam ini adalah melonggarkan tipe di deklarasi supaya pesannya hilang — padahal yang benar biasanya sebaliknya, karena pesan itu sedang memberitahumu bahwa data dan tipenya memang tidak cocok.",
          example: {
            code:
              "interface Baris { id: number; jumlah: number }\n" +
              "const dariCsv = { id: 1, jumlah: \"3\" };\n" +
              "const b: Baris = dariCsv;   // <- baris inilah yang ditolak",
            output:
              "Menjalankan tsc pada kode di atas menghasilkan:\n" +
              "Type '{ id: number; jumlah: string; }' is not assignable to type 'Baris'.\n" +
              "  Types of property 'jumlah' are incompatible.\n" +
              "    Type 'string' is not assignable to type 'number'.\n\n" +
              "Baris terakhir itulah masalahnya: jumlah berisi teks \"3\", bukan angka 3.",
            note: "Perhatikan indentasi pesannya — setiap tingkat menjorok satu langkah lebih dalam menuju penyebab sebenarnya.",
          },
          instruction:
            "Kode di editor ditolak compiler dengan pesan yang sudah dituliskan sebagai komentar. Baca baris terakhir pesan itu, lalu perbaiki **interface** `Produk` agar sesuai dengan data yang memang benar — harga sebuah produk seharusnya berupa angka, bukan teks.",
          starterCode:
            "// error TS2322: Type '{ id: number; harga: number; }' is not\n" +
            "// assignable to type 'Produk'.\n" +
            "//   Types of property 'harga' are incompatible.\n" +
            "//     Type 'number' is not assignable to type 'string'.\n\n" +
            "interface Produk {\n" +
            "  id: number;\n" +
            "  harga: string;\n" +
            "}\n" +
            "const dariForm = { id: 1, harga: 50000 };\n" +
            "const p: Produk = dariForm;\n",
          language: "jsx",
          tests: [
            {
              pattern: "interface\\s+Produk\\s*\\{[^}]*harga\\s*:\\s*number",
              message:
                "Di dalam badan `interface Produk`, properti `harga` harus bertipe `number`. Jangan menghapus propertinya — yang perlu diubah tipenya.",
            },
            {
              pattern: "^[^/\\n]*harga\\s*:\\s*string",
              flags: "im",
              mustNotMatch: true,
              message:
                "Masih ada `harga: string` di interface. Itulah sumber ketidakcocokan yang disebut baris terakhir pesan error.",
            },
            {
              pattern: "harga\\s*:\\s*['\"]50000['\"]",
              mustNotMatch: true,
              message:
                "Jangan mengubah datanya menjadi teks agar error hilang — harga memang seharusnya angka. Yang perlu diperbaiki adalah tipenya.",
            },
          ],
          solution:
            "interface Produk {\n" +
            "  id: number;\n" +
            "  harga: number;\n" +
            "}\n" +
            "const dariForm = { id: 1, harga: 50000 };\n" +
            "const p: Produk = dariForm;\n" +
            "console.log(p.harga);",
          susunKode: {
            question:
              "Perbaiki interface Produk agar harga bertipe number.",
            potongan: [
              "interface Produk {",
              "  id: number;",
              "  harga: number;",
              "}",
              "const dariForm = { id: 1, harga: 50000 };",
              "const p: Produk = dariForm;",
              "console.log(p.harga);",
            ],
            pengecoh: [
              "  harga: string;",
              "const dariForm = { id: 1, harga: \"50000\" };",
            ],
            pemisah: "\n",
            explanation:
              "Interface `Produk` harus disesuaikan agar `harga` bertipe `number` sesuai data asli yang masuk. Pengecoh `harga: string` menggoda jika keliru mengikuti error awal, tetapi merusak kecocokan data. Pengecoh data string `\"50000\"` juga jebakan yang bertentangan dengan tipe angka.",
          },
        },
        {
          kind: "step",
          id: "ts-6-2",
          title: "Migrasi File JS ke TS Secara Bertahap",
          explanation:
            "Proyek JavaScript yang sudah berjalan tidak pernah dipindahkan ke TypeScript dalam satu kali kerja — ribuan error yang muncul serentak hanya akan membuat tim menyerah dan mengembalikan perubahannya. Strategi yang dipakai di lapangan adalah membiarkan kedua jenis berkas hidup berdampingan, dengan menyalakan opsi `allowJs` supaya compiler ikut memproses berkas `.js` tanpa menuntut tipe apa pun darinya. Setelah itu berkas dipindahkan satu per satu dengan mengubah ekstensinya menjadi `.ts`, dimulai dari berkas utilitas yang paling sedikit bergantung pada berkas lain. Ada opsi pendamping bernama `checkJs` yang membuat compiler ikut memeriksa berkas `.js`; menyalakannya di awal migrasi biasanya justru kontraproduktif, jadi biarkan mati sampai sebagian besar berkas sudah berpindah.",
          example: {
            code:
              "// tsconfig.json saat migrasi baru dimulai\n" +
              "{\n" +
              "  \"compilerOptions\": {\n" +
              "    \"strict\": true,\n" +
              "    \"checkJs\": false\n" +
              "  },\n" +
              "  \"include\": [\"src\"]\n" +
              "}",
            output:
              "Tanpa allowJs, menjalankan npx tsc menghasilkan:\n" +
              "error TS6504: File 'src/utils.js' is a JavaScript file.\n" +
              "Did you mean to enable the 'allowJs' option?",
            note: "Pesan TS6504 adalah error pertama yang ditemui hampir semua orang saat memulai migrasi.",
          },
          instruction:
            "Tsconfig di editor belum mengizinkan berkas JavaScript ikut diproses, sehingga compiler menolak `src/utils.js`. Tambahkan satu opsi di dalam `compilerOptions` yang membuat berkas `.js` boleh ikut dikompilasi bersama berkas TypeScript.",
          starterCode:
            "{\n" +
            "  \"compilerOptions\": {\n" +
            "    \"strict\": true,\n" +
            "    \"outDir\": \"dist\"\n" +
            "  },\n" +
            "  \"include\": [\"src\"]\n" +
            "}\n",
          language: "text",
          tests: [
            {
              pattern: "[\"']allowJs[\"']\\s*:\\s*true",
              message:
                "Nama opsinya menggabungkan kata \"allow\" dan \"Js\", ditulis dalam gaya camelCase dan bernilai `true`.",
            },
            {
              pattern: "[\"']strict[\"']\\s*:\\s*true",
              message:
                "Jangan matikan strict saat migrasi — berkas .ts yang baru tetap harus ketat. Pertahankan opsi yang sudah ada.",
            },
          ],
          solution:
            "{\n" +
            "  \"compilerOptions\": {\n" +
            "    \"strict\": true,\n" +
            "    \"outDir\": \"dist\",\n" +
            "    \"allowJs\": true\n" +
            "  },\n" +
            "  \"include\": [\"src\"]\n" +
            "}",
          susunKode: {
            question:
              "Tambahkan \"allowJs\": true di compilerOptions.",
            potongan: [
              "{\n  \"compilerOptions\": {",
              "    \"strict\": true,",
              "    \"outDir\": \"dist\",",
              "    \"allowJs\": true",
              "  },",
              "  \"include\": [\"src\"]",
              "}",
            ],
            pengecoh: [
              "    \"allowJs\": false,",
              "    \"enableJs\": true,",
            ],
            pemisah: "\n",
            explanation:
              "Opsi `\"allowJs\": true` di `compilerOptions` mengizinkan berkas JavaScript disertakan dalam proses kompilasi TypeScript. Pengecoh `\"allowJs\": false` menggoda jika salah memasukkan nilai boolean. Pengecoh `\"enableJs\"` juga keliru karena nama opsi resmi TypeScript adalah `allowJs`.",
          },
        },
        {
          kind: "step",
          id: "ts-6-3",
          title: "Tipe untuk Event Handler & DOM",
          explanation:
            "Setiap event punya tipenya sendiri, dan tipe itu membawa informasi tentang elemen yang memicunya — itulah sebabnya `React.ChangeEvent<HTMLInputElement>` ditulis lengkap dengan kurung sudut. Tanpa keterangan elemen di dalam kurung sudut itu, `e.target` hanya dianggap elemen umum yang tidak punya properti `value`, sehingga kamu akan tertahan di error yang membingungkan. Tipe event yang paling sering kamu pakai ada tiga: `ChangeEvent` untuk input dan select, `FormEvent` untuk submit, dan `MouseEvent` untuk klik. Kabar baiknya, kamu sering tidak perlu menuliskannya sama sekali: bila handler ditulis langsung di dalam JSX seperti `onChange={(e) => ...}`, React sudah menyediakan tipenya lewat contextual typing — anotasi baru dibutuhkan saat handler dipisah menjadi fungsi tersendiri.",
          example: {
            code:
              "function FormCari() {\n" +
              "  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n" +
              "    e.preventDefault();\n" +
              "    console.log(\"dikirim\");\n" +
              "  }\n" +
              "  return <form onSubmit={handleSubmit}><button>Cari</button></form>;\n" +
              "}",
            output:
              "Komponen dirender berupa tombol Cari.\n" +
              "Saat diklik, panel output menampilkan:\ndikirim",
            note: "`e.preventDefault()` hanya tersedia karena tipe event-nya disebutkan — pada parameter tanpa tipe, compiler menolaknya. Dua gaya penulisan sama-sama umum: memakai awalan `React.ChangeEvent` seperti contoh ini, atau mengimpor tipenya sendiri lewat `import { ChangeEvent } from \"react\"` lalu menulis `ChangeEvent<HTMLInputElement>` tanpa awalan.",
          },
          instruction:
            "Komponen di editor punya sebuah input teks, tapi fungsi `handleChange` masih kekurangan anotasi pada parameternya sehingga `e.target.value` ditolak. Lengkapi parameter `e` dengan tipe event perubahan React yang menyebutkan bahwa elemen pemicunya adalah input HTML.",
          starterCode:
            "function KotakCari() {\n" +
            "  function handleChange(e) {\n" +
            "    console.log(e.target.value);\n" +
            "  }\n" +
            "  return <input onChange={handleChange} placeholder=\"Cari...\" />;\n" +
            "}\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "e\\s*:\\s*(React\\s*\\.\\s*)?ChangeEvent\\s*<\\s*HTMLInputElement\\s*>",
              message:
                "Beri anotasi pada parameter `e`: tipenya `React.ChangeEvent<HTMLInputElement>` (boleh tanpa awalan `React.` bila kamu meng-import ChangeEvent secara terpisah).",
            },
            {
              pattern: "e\\s*:\\s*any",
              mustNotMatch: true,
              message:
                "`any` memang membuat errornya hilang, tapi sekaligus mematikan autocomplete untuk seluruh properti input. Sebutkan tipe event-nya.",
            },
          ],
          solution:
            "function KotakCari() {\n" +
            "  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {\n" +
            "    console.log(e.target.value);\n" +
            "  }\n" +
            "  return <input onChange={handleChange} placeholder=\"Cari...\" />;\n" +
            "}",
          susunKode: {
            potongan: [
              "function KotakCari() {",
              "  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {",
              "    console.log(e.target.value);",
              "  }",
              "  return <input onChange={handleChange} placeholder=\"Cari...\" />;",
              "}",
            ],
            pengecoh: [
              "  function handleChange(e: any) {",
              "  function handleChange(e: React.FormEvent<HTMLInputElement>) {",
            ],
            pemisah: "\n",
            explanation:
              "Anotasi event handler input di React menggunakan `React.ChangeEvent<HTMLInputElement>`. Pengecoh `e: any` menggoda karena mudah tetapi melanggar keamanan tipe dan tes `mustNotMatch`. Pengecoh `FormEvent` juga jebakan event umum yang tidak presisi untuk perubahan nilai input.",
          },
        },
        {
          kind: "step",
          id: "ts-6-4",
          title: "Deklarasi Tipe Pihak Ketiga (@types/*)",
          explanation:
            "Sebagian library JavaScript sudah membawa berkas tipenya sendiri di dalam paketnya, sehingga langsung bisa dipakai tanpa tambahan apa pun. Library yang lebih tua umumnya tidak, dan untuk itu ada DefinitelyTyped — sebuah repositori komunitas berisi ribuan berkas tipe yang diterbitkan ke npm di bawah nama `@types/nama-library`. Paket tipe selalu dipasang sebagai devDependency karena ia hanya berisi keterangan tipe dan tidak menyumbang satu baris pun ke kode yang berjalan. Cara mengenali situasinya di lapangan: kalau `import` sebuah library memunculkan error `Could not find a declaration file for module '...'`, coba pasang `@types/` untuk library itu; kalau paketnya memang tidak ada, kamu bisa membuat berkas `.d.ts` sendiri berisi deklarasi seadanya.",
          example: {
            code: "npm install -D @types/lodash",
            output:
              "added 1 package, and audited 132 packages in 2s\n\n" +
              "found 0 vulnerabilities",
            note: "Setelah ini, import lodash langsung mendapat autocomplete tanpa perubahan kode apa pun.",
          },
          instruction:
            "Kamu menulis skrip Node.js dan compiler menolak `import fs from \"fs\"` dengan pesan bahwa berkas deklarasi untuk modul bawaan Node tidak ditemukan. Tulis satu perintah npm untuk memasang paket tipe milik Node.js ke dalam devDependencies.",
          starterCode: "# Tulis perintahnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "npm\\s+(install|i)\\s+(-D|--save-dev)\\s+@types/node|npm\\s+(install|i)\\s+@types/node\\s+(-D|--save-dev)",
              message:
                "Paket tipe selalu berada di bawah scope `@types/`, dan dipasang sebagai devDependency. Untuk Node.js namanya `@types/node`.",
            },
          ],
          solution: "npm install -D @types/node",
          susunKode: {
            question:
              "Pasang tipe Node.js dengan npm install -D @types/node.",
            potongan: [
              "npm install",
              "-D",
              "@types/node",
            ],
            pengecoh: [
              "npm add",
              "--save",
              "types-node",
            ],
            pemisah: " ",
            explanation:
              "Paket tipe bawaan Node.js dipasang via `npm install -D @types/node` sebagai devDependency. Pengecoh `--save` menggoda tetapi keliru karena tipe hanya dibutuhkan saat pengembangan. Pengecoh `types-node` juga jebakan nama paket tanpa namespace `@types/`.",
          },
        },
        {
          kind: "step",
          id: "ts-6-5",
          title: "Type Assertion (as) dan Kapan Menghindarinya",
          explanation:
            "Type assertion memakai kata kunci `as` untuk memberitahu compiler \"percaya saja, isinya bertipe ini\" — dan compiler akan menurut tanpa memeriksa apa pun. Ada tempat yang sah untuknya, terutama saat kamu punya informasi yang mustahil diketahui compiler: `document.getElementById` selalu mengembalikan `HTMLElement | null` karena TypeScript tidak bisa membaca berkas HTML-mu, padahal kamu tahu elemen itu ada dan berupa input. Yang berbahaya adalah memakainya sebagai obat penghilang error: setiap `as` menempatkan tanggung jawab pemeriksaan di pundakmu, dan bila asumsimu meleset, aplikasinya crash tanpa satu pun peringatan sebelumnya. Aturan yang dipakai banyak tim: setiap `as` wajib disertai komentar singkat yang menjelaskan kenapa ia aman di tempat itu — kalau kamu tidak bisa menuliskan alasannya, itu tanda kamu sebenarnya butuh pengecekan, bukan assertion.",
          example: {
            code:
              "// ❌ as sebagai obat penghilang error — bug menunggu terjadi\n" +
              "const dariApi: unknown = { nama: \"Bimo\" };\n" +
              "// const u = dariApi as { nama: string; umur: number };\n" +
              "// u.umur.toFixed(0);   // lolos compile, runtime: TypeError\n\n" +
              "// ✅ as untuk hal yang mustahil diketahui compiler\n" +
              "const kanvas = document.createElement(\"canvas\") as HTMLCanvasElement;\n" +
              "console.log(kanvas.tagName);",
            output: "CANVAS",
            note: "Bedanya: pada kasus kedua kamu benar-benar tahu bentuknya; pada kasus pertama kamu cuma berharap. `createElement` membuat elemennya sendiri, jadi contoh ini benar-benar berjalan di preview dan mencetak CANVAS.",
          },
          instruction:
            "Variabel `elem` di editor berisi hasil `document.getElementById`, yang menurut compiler bisa berupa elemen HTML umum atau `null` — sehingga `.value` ditolak. Kamu sudah memastikan sendiri bahwa elemen itu memang sebuah input teks. Buat konstanta baru bernama `input` yang menegaskan tipe `elem` sebagai elemen input HTML, lalu cetak nilainya. Catatan jujur: halaman preview tidak memuat elemen `#username`, jadi panel bawah akan berkata potongan ini belum bisa dijalankan sendiri — itu wajar, dan tesnya tetap bisa lulus karena yang dinilai adalah bentuk kodenya.",
          starterCode:
            "const elem = document.getElementById(\"username\");\n" +
            "// console.log(elem.value);\n" +
            "//   Property 'value' does not exist on type 'HTMLElement'.\n\n" +
            "// Tulis penegasan tipenya di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "const\\s+input\\s*=\\s*(elem|document\\s*\\.\\s*getElementById\\s*\\(\\s*['\"]username['\"]\\s*\\))\\s+as\\s+HTMLInputElement",
              message:
                "Bentuknya `const input = elem as HTMLInputElement;` — kata kunci `as` ditulis setelah nilainya, diikuti tipe yang kamu tegaskan. Menegaskan langsung pada hasil `document.getElementById(\"username\")` juga diterima.",
            },
            {
              pattern: "input\\s*\\.\\s*value",
              message:
                "Setelah ditegaskan, akses `input.value` — properti ini baru tersedia karena tipenya sekarang HTMLInputElement.",
            },
            {
              pattern: "as\\s+any\\b",
              mustNotMatch: true,
              message:
                "`as any` membuang seluruh informasi tipe. Tegaskan ke tipe yang spesifik, bukan ke any.",
            },
          ],
          solution:
            "const elem = document.getElementById(\"username\");\n" +
            "// aman: elemen #username dipastikan ada dan berupa <input> di halaman ini\n" +
            "const input = elem as HTMLInputElement;\n" +
            "console.log(input.value);",
          susunKode: {
            question:
              "Tegaskan elem sebagai HTMLInputElement dengan as.",
            potongan: [
              "const elem = document.getElementById(\"username\");",
              "const input = elem as HTMLInputElement;",
              "console.log(input.value);",
            ],
            pengecoh: [
              "const input = elem as any;",
              "const input = (elem as HTMLElement);",
            ],
            pemisah: "\n",
            explanation:
              "Type assertion `elem as HTMLInputElement` menegaskan tipe elemen DOM secara spesifik agar properti `.value` bisa diakses. Pengecoh `as any` menggoda tetapi melanggar tes `mustNotMatch`. Pengecoh `HTMLElement` juga keliru karena elemen umum belum tentu memiliki properti `.value`.",
          },
        },
        {
          kind: "step",
          id: "ts-6-6",
          title: "Zod: Validasi Runtime + Tipe Statis",
          explanation:
            "Di sinilah seluruh modul ini bertemu: TypeScript tidak melihat data sungguhan, jadi interface untuk respons API sebenarnya hanyalah harapan yang tidak pernah diperiksa. Zod menutup celah itu dengan membalik urutannya — kamu mendeklarasikan **skema** sekali, Zod memeriksa data asli saat aplikasi berjalan, dan tipe TypeScript-nya diturunkan otomatis dari skema itu lewat `z.infer`. Hasilnya satu sumber kebenaran: mengubah skema langsung mengubah tipenya, sehingga keduanya mustahil tidak sinkron. Cara memakainya di lapangan: panggil `Schema.parse(data)` yang melempar error bila bentuknya salah, atau `Schema.safeParse(data)` yang mengembalikan hasil berisi penanda keberhasilan bila kamu ingin menanganinya sendiri — dan tempatkan pemanggilan itu tepat di perbatasan, yaitu di dalam fungsi yang mengambil data, bukan tersebar di komponen.",
          example: {
            code:
              "import { z } from \"zod\";\n\n" +
              "const KotaSchema = z.object({\n" +
              "  nama: z.string(),\n" +
              "  penduduk: z.number(),\n" +
              "});\n" +
              "type Kota = z.infer<typeof KotaSchema>;\n\n" +
              "const hasil = KotaSchema.safeParse({ nama: \"Bandung\", penduduk: \"banyak\" });\n" +
              "console.log(hasil.success);",
            output:
              "false\n\n" +
              "Isi hasil.error memuat:\n" +
              "  path: [\"penduduk\"], message: \"Expected number, received string\"",
            note: "Perhatikan tipe Kota tidak ditulis manual — ia diturunkan dari skema, jadi keduanya selalu sinkron. Kalimat error persisnya bisa sedikit berbeda antar versi Zod; yang penting adalah isinya: properti mana yang salah dan bentuk apa yang diharapkan. Di panel preview, paket `zod` tidak tersedia sehingga panel hanya memastikan sintaksmu benar.",
          },
          instruction:
            "Endpoint produk mengembalikan objek berisi `id` berupa angka dan `title` berupa teks. Buat sebuah skema Zod bernama `ProductSchema` yang memvalidasi bentuk itu saat aplikasi berjalan, lalu turunkan tipe TypeScript bernama `Product` dari skema tersebut tanpa menulis ulang propertinya.",
          starterCode:
            "import { z } from \"zod\";\n\n" +
            "// Contoh respons dari GET /api/product/1:\n" +
            "// { \"id\": 7, \"title\": \"Kopi Gayo\" }\n\n" +
            "// Tulis ProductSchema dan Product di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern:
                "const\\s+ProductSchema\\s*=\\s*z\\s*\\.\\s*object\\s*\\(\\s*\\{(?=[\\s\\S]*\\bid\\s*:\\s*z\\s*\\.\\s*number\\s*\\(\\s*\\))(?=[\\s\\S]*\\btitle\\s*:\\s*z\\s*\\.\\s*string\\s*\\(\\s*\\))[\\s\\S]*\\}\\s*\\)",
              message:
                "Bungkus kedua properti di dalam `z.object({ ... })`, dan tulis tipe tiap properti sebagai pemanggilan fungsi: `z.number()` dan `z.string()`. Urutan properti di dalam objek bebas.",
            },
            {
              pattern:
                "type\\s+Product\\s*=\\s*z\\s*\\.\\s*infer\\s*<\\s*typeof\\s+ProductSchema\\s*>",
              message:
                "Turunkan tipenya dengan `type Product = z.infer<typeof ProductSchema>;` — jangan menulis ulang propertinya sebagai interface.",
            },
          ],
          solution:
            "import { z } from \"zod\";\n\n" +
            "const ProductSchema = z.object({\n" +
            "  id: z.number(),\n" +
            "  title: z.string(),\n" +
            "});\n\n" +
            "type Product = z.infer<typeof ProductSchema>;",
          susunKode: {
            question:
              "Turunkan tipe Product dari ProductSchema Zod.",
            potongan: [
              "import { z } from \"zod\";\n",
              "const ProductSchema = z.object({",
              "  id: z.number(),",
              "  title: z.string(),",
              "});\n",
              "type Product = z.infer<typeof ProductSchema>;",
            ],
            pengecoh: [
              "type Product = typeof ProductSchema;",
              "const ProductSchema = z.struct({",
            ],
            pemisah: "\n",
            explanation:
              "Inferensi tipe dari skema Zod menggunakan `z.infer<typeof ProductSchema>`. Pengecoh `typeof ProductSchema` menggoda tetapi keliru karena hanya menghasilkan tipe objek skema Zod itu sendiri. Pengecoh `z.struct` adalah jebakan metode yang tidak ada pada pustaka Zod.",
          },
        },
        {
          kind: "step",
          id: "ts-6-7",
          title: "Menangani Error di Blok Catch (unknown & instanceof Error)",
          explanation:
            "Saat kamu menulis blok `try ... catch` dengan `strict` menyala, TypeScript secara otomatis menganggap parameter error di blok catch bertipe `unknown`. Hal ini sering mengagetkan pemula yang terbiasa langsung mengetik `err.message`, karena compiler akan menolaknya dengan pesan bahwa properti tidak bisa diakses pada tipe unknown. Alasannya defensif: di JavaScript, siapa pun bisa melempar teks biasa `throw 'Gagal'` atau angka `throw 500`, bukan cuma objek Error. Untuk menanganinya dengan aman di kode produksi, lakukan narrowing menggunakan operator `instanceof Error` sebelum membaca pesannya, dan sediakan penanganan alternatif bila yang dilempar bukan objek error standar. Pola ini mencegah crash tak terduga dan merupakan standar wajib saat menulis API client atau form submission di industri.",
          example: {
            code:
              "function proses(data: string) {\n" +
              "  try {\n" +
              "    if (!data) throw new Error(\"Data kosong\");\n" +
              "    console.log(\"Berhasil:\", data);\n" +
              "  } catch (err: unknown) {\n" +
              "    if (err instanceof Error) {\n" +
              "      console.log(\"Error tertangkap:\", err.message);\n" +
              "    } else {\n" +
              "      console.log(\"Error bukan objek:\", String(err));\n" +
              "    }\n" +
              "  }\n" +
              "}\n" +
              "proses(\"\");",
            output: "Error tertangkap: Data kosong",
            note: "`err.message` hanya sah di dalam blok `if (err instanceof Error)` — di luarnya, compiler menolak karena tipenya masih unknown.",
          },
          instruction:
            "Fungsi `bacaFile` di editor menjalankan operasi yang bisa melempar pengecualian. Lengkapi blok `catch` dengan memeriksa apakah `err` merupakan instance dari class `Error`. Jika ya, cetak pesannya ke konsol menggunakan `console.log(err.message)`. Jangan memakai type assertion `as any`.",
          starterCode:
            "function bacaFile() {\n" +
            "  try {\n" +
            "    throw new Error(\"Berkas tidak ditemukan\");\n" +
            "  } catch (err: unknown) {\n" +
            "    // Periksa apakah err adalah instance dari Error, lalu cetak err.message di sini\n" +
            "  }\n" +
            "}\n" +
            "bacaFile();\n",
          language: "jsx",
          tests: [
            {
              pattern: "if\\s*\\(\\s*err\\s+instanceof\\s+Error\\s*\\)",
              message:
                "Gunakan `if (err instanceof Error)` untuk mempersempit tipe error sebelum mengakses properti miliknya.",
            },
            {
              pattern: "console\\.log\\s*\\(\\s*err\\.message\\s*\\)",
              message:
                "Cetak pesan error menggunakan `console.log(err.message)` di dalam blok pemeriksaan.",
            },
            {
              pattern: "err\\s+as\\s+(any|Error)",
              mustNotMatch: true,
              message:
                "Jangan gunakan type assertion `as any` atau `as Error`. Gunakan operator `instanceof Error` untuk pemeriksaan runtime yang aman.",
            },
          ],
          solution:
            "function bacaFile() {\n" +
            "  try {\n" +
            "    throw new Error(\"Berkas tidak ditemukan\");\n" +
            "  } catch (err: unknown) {\n" +
            "    if (err instanceof Error) {\n" +
            "      console.log(err.message);\n" +
            "    }\n" +
            "  }\n" +
            "}\n" +
            "bacaFile();",
          susunKode: {
            question:
              "Periksa apakah error merupakan objek Error lalu cetak pesannya.",
            potongan: [
              "    if (err instanceof Error) {",
              "      console.log(err.message);",
              "    }",
            ],
            pengecoh: [
              "    if (typeof err === \"error\") {",
              "      console.log((err as any).message);",
            ],
            pemisah: "\n",
            explanation:
              "Narrowing variabel error pada catch dilakukan dengan `if (err instanceof Error)`. Pengecoh `typeof err === \"error\"` menggoda tetapi keliru karena typeof tidak mengenal tipe 'error' di JavaScript runtime. Pengecoh `(err as any).message` juga jebakan type assertion yang mematikan keamanan tipe.",
          },
        },
        {
          kind: "quiz",
          id: "ts-6-kuis",
          title: "Kuis: TypeScript di Proyek Nyata",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kenapa library validasi seperti Zod tetap dibutuhkan padahal kamu sudah punya interface TypeScript yang rapi?",
              choices: [
                "TypeScript hanya memeriksa kode saat kompilasi; Zod memeriksa data sungguhan saat aplikasi berjalan",
                "Zod membuat berkas JavaScript hasil kompilasi lebih kecil",
                "Zod menggantikan peran React dalam mengelola state",
                "Zod otomatis membuatkan tabel database dari interface",
              ],
              answerIndex: 0,
              explanation:
                "Interface hilang saat kompilasi, jadi tidak ada apa pun yang memeriksa apakah respons API benar-benar sesuai bentuk yang kamu janjikan. Zod memasang pemeriksaan itu di perbatasan, dan `z.infer` membuat tipenya tetap satu sumber kebenaran dengan skemanya.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Sebuah library JavaScript lama tidak membawa tipe bawaan. Di scope npm mana biasanya tipe komunitasnya diterbitkan?",
              choices: ["@types/*", "@dts/*", "@definitions/*", "@ts-pkg/*"],
              answerIndex: 0,
              explanation:
                "Repositori DefinitelyTyped menerbitkan seluruh paket tipenya di bawah scope `@types/`, misalnya `@types/node`. Paket ini hanya berisi deklarasi tipe, jadi selalu dipasang sebagai devDependency.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Seorang developer terbiasa menambahkan `as User` setiap kali menemui error tipe. Apa risiko utama kebiasaan ini?",
              choices: [
                "Kompilasi akan gagal total",
                "Bug runtime tersembunyi, karena compiler dipaksa percaya tanpa ada yang memverifikasi bentuk datanya",
                "Variabelnya terhapus dari memori",
                "Ukuran bundle bertambah dua kali lipat",
              ],
              answerIndex: 1,
              explanation:
                "`as` tidak memeriksa apa pun — ia hanya mematikan keberatan compiler. Kalau bentuk data aslinya berbeda, crash-nya terjadi jauh dari tempat assertion ditulis, sehingga jejaknya sulit dilacak. Assertion yang sah selalu punya alasan yang bisa dituliskan sebagai komentar.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kamu mulai memindahkan codebase JavaScript besar ke TypeScript sedikit demi sedikit. Opsi tsconfig apa yang wajib dinyalakan lebih dulu?",
              choices: [
                "\"strict\": false",
                "\"allowJs\": true",
                "\"checkJs\": true",
                "\"noEmit\": true",
              ],
              answerIndex: 1,
              explanation:
                "`allowJs: true` membuat compiler mau memproses berkas `.js` yang belum sempat dipindahkan, sehingga build tidak berhenti di tengah jalan. `checkJs: true` menggoda karena terdengar lebih menyeluruh, tapi menyalakannya di awal justru memunculkan ribuan error dari kode lama sekaligus.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Sebuah error TypeScript panjangnya delapan baris dan menjorok makin dalam. Di bagian mana biasanya akar masalahnya berada?",
              choices: [
                "Di baris pertama, karena itu ringkasan utamanya",
                "Di nama berkas yang disebut di awal pesan",
                "Di baris paling bawah, yang biasanya memuat 'is not assignable to type'",
                "Di dokumentasi library yang dipakai",
              ],
              answerIndex: 2,
              explanation:
                "Baris pertama hanya menyebut ketidakcocokan di tingkat paling luar, sementara setiap tingkat menjorok membawa kamu lebih dekat ke properti yang benar-benar bermasalah. Baris terakhir adalah yang paling spesifik — dan biasanya cukup untuk tahu apa yang harus diperbaiki.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Di mana sebaiknya pemanggilan `Schema.parse()` ditempatkan dalam sebuah aplikasi?",
              choices: [
                "Di setiap komponen yang memakai datanya",
                "Di perbatasan, yaitu di dalam fungsi yang mengambil data dari luar",
                "Di dalam file tsconfig.json",
                "Hanya saat menjalankan unit test",
              ],
              answerIndex: 1,
              explanation:
                "Validasi cukup dilakukan sekali, tepat di tempat data tak terpercaya masuk — biasanya di fungsi fetch atau route handler. Setelah lolos di sana, seluruh kode di dalamnya boleh mempercayai tipenya. Memvalidasi ulang di setiap komponen memperlambat aplikasi dan menyebar tanggung jawab yang seharusnya terpusat.",
            },
            {
              id: "q7",
              type: "pilihan-ganda",
              question:
                "Saat menggunakan TypeScript dengan strict: true, mengapa variabel err pada blok catch otomatis bertipe unknown dan bukan any?",
              choices: [
                "Karena di JavaScript apa pun bisa dilempar (string, angka, dsb.), sehingga TypeScript memaksa kita membuktikan jenisnya sebelum mengakses properti",
                "Karena browser tidak mendukung objek Error jika dijalankan dengan TypeScript",
                "Karena tipe unknown secara otomatis menghapus pesan error dari memori",
                "Karena compiler TypeScript hanya mengizinkan penanganan error bertipe number",
              ],
              answerIndex: 0,
              explanation:
                "Di JavaScript, ekspresi throw bisa melempar tipe apa pun (tidak selalu instance dari Error). Dengan flag strict (useUnknownInCatchVariables), TypeScript menetapkan tipenya sebagai unknown agar developer wajib melakukan narrowing aman dengan if (err instanceof Error) sebelum membaca .message.",
            },
          ],
        },
      ],
    },
  ],
};
