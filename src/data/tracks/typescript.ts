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
          kind: "step",
          id: "ts-1-1",
          title: "Kenapa TypeScript Ada?",
          explanation:
            "TypeScript bekerja seperti fitur spell-check di Microsoft Word. Ia akan otomatis menggarisbawahi kode yang salah (misalnya menganggap teks sebagai angka) saat kamu masih mengetik — bukan saat aplikasinya sudah dijalankan dan dipakai pengguna. Proses pemeriksaan ini terjadi saat kompilasi, yaitu ketika TypeScript diubah menjadi JavaScript biasa. Hasilnya: bug yang biasanya baru ketahuan di production bisa tertangkap sebelum kode dijalankan.",
          example: {
            code: 'const pesanan = { id: 1 };\n// console.log(pesanan.harga.toFixed(2)); // TS Warning: Property harga does not exist',
            output: "Property 'harga' does not exist on type '{ id: number; }'.",
            note: "Di JS biasa, error ini baru ketahuan saat aplikasi diakses user di produksi.",
          },
          instruction:
            "Buat variabel konstan bernama `appName` bertipe `string` yang menyimpan teks `\"BiLearn\"`.",
          starterCode: "// Tulis variabel appName di sini\n",
          language: "text",
          tests: [
            {
              pattern: "const\\s+appName\\s*:\\s*string\\s*=\\s*['\"]BiLearn['\"]",
              message: 'Gunakan sintaks: const appName: string = "BiLearn";',
            },
          ],
          solution: 'const appName: string = "BiLearn";',
        },
        {
          kind: "step",
          id: "ts-1-2",
          title: "Anotasi Dasar: string, number, boolean, array",
          explanation:
            "Anotasi tipe ditulis dengan titik dua `: tipe`. Untuk array gunakan `tipe[]` seperti `number[]` atau `string[]`.",
          example: {
            code:
              'let nama: string = "Budi";\n' +
              'let umur: number = 25;\n' +
              'let hobi: string[] = ["Koding", "Membaca"];',
            output: "Budi 25 ['Koding', 'Membaca']",
            note: "Menjamin seluruh isi elemen di dalam hobi harus berupa string.",
          },
          instruction:
            "Buat array `const nilai: number[]` yang berisi angka `[85, 90, 95]`.",
          starterCode: "// Tulis array nilai di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "const\\s+nilai\\s*:\\s*number\\[\\]\\s*=\\s*\\[\\s*85\\s*,\\s*90\\s*,\\s*95\\s*\\]",
              message: "Gunakan: const nilai: number[] = [85, 90, 95];",
            },
          ],
          solution: "const nilai: number[] = [85, 90, 95];",
        },
        {
          kind: "step",
          id: "ts-1-3",
          title: "Type Inference",
          explanation:
            "Sama seperti kamu bisa menebak bahwa 'Budi' adalah nama orang tanpa diberi tahu, TypeScript sangat pintar menebak tipe data (type inference) dari nilai awal. Kalau kamu menulis `let skor = 100`, TypeScript langsung tahu itu angka tanpa kamu harus capek menulis `: number`. Kapan kamu perlu menulis tipe secara eksplisit? Saat TypeScript tidak punya cukup petunjuk — misalnya parameter fungsi yang belum punya nilai awal.",
          example: {
            code: 'let judul = "Belajar TS"; // TS otomatis tahu judul bertipe string\nconsole.log(typeof judul);',
            output: "string",
            note: "Biarkan TypeScript melakukan inference untuk variabel lokal sederhana.",
          },
          instruction:
            "Deklarasikan variabel `skor` dengan nilai angka `100` menggunakan `let`. Biarkan TypeScript menentukan tipenya secara otomatis (tanpa anotasi tipe manual).",
          starterCode: "// Tulis variabel skor di sini\n",
          language: "js",
          tests: [
            {
              pattern: "let\\s+skor\\s*=\\s*100",
              message: "Tuliskan: let skor = 100;",
            },
            {
              pattern: "^(?![\\s\\S]*:\\s*number)",
              message: "Jangan sertakan anotasi : number",
            },
          ],
          solution: "let skor = 100;",
        },
        {
          kind: "step",
          id: "ts-1-4",
          title: "any vs unknown",
          explanation:
            "`any` mematikan semua type checking. Sebaliknya, `unknown` memaksa pemeriksaan tipe (narrowing) sebelum data diakses.",
          example: {
            code:
              'let inputData: unknown = "Halo";\n' +
              'if (typeof inputData === "string") {\n' +
              '  console.log(inputData.toUpperCase());\n' +
              '}',
            output: "HALO",
            note: "Pilihlah unknown daripada any saat memproses data dari API eksternal.",
          },
          instruction:
            "Buat variabel `let dataMentah: unknown` lalu lakukan pengecekan `if (typeof dataMentah === 'string')`.",
          starterCode: "// Tulis kode di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "let\\s+dataMentah\\s*:\\s*unknown",
              message: "Deklarasikan let dataMentah: unknown",
            },
            {
              pattern: "typeof\\s+dataMentah\\s*===\\s*['\"]string['\"]",
              message: "Gunakan if (typeof dataMentah === 'string')",
            },
          ],
          solution:
            'let dataMentah: unknown = "Test";\nif (typeof dataMentah === "string") {\n  console.log(dataMentah.length);\n}',
        },
        {
          kind: "step",
          id: "ts-1-5",
          title: "null, undefined, dan strictNullChecks",
          explanation:
            "Dengan opsi `strictNullChecks: true`, TypeScript mencegah error fatal `Cannot read property of undefined` saat runtime.",
          example: {
            code:
              'let email: string | null = null;\n' +
              'email = "bimo@test.com";\n' +
              'console.log(email);',
            output: "bimo@test.com",
            note: "strictNullChecks wajib diaktifkan di setiap proyek profesional.",
          },
          instruction:
            "Deklarasikan variabel `token` yang boleh menampung tipe `string` atau `null`, lalu inisialisasi awal dengan nilai `null`.",
          starterCode: "// Tulis variabel token di sini\n",
          language: "text",
          tests: [
            {
              pattern: "let\\s+token\\s*:\\s*(string\\s*\\|\\s*null|null\\s*\\|\\s*string)\\s*=\\s*null",
              message: "Gunakan: let token: string | null = null;",
            },
          ],
          solution: "let token: string | null = null;",
        },
        {
          kind: "step",
          id: "ts-1-6",
          title: "Function: Tipe Parameter & Return",
          explanation:
            "Parameter fungsi wajib diberi anotasi tipe. Tipe kembalian (return type) ditulis setelah kurung parameter.",
          example: {
            code:
              "function kali(a: number, b: number): number {\n" +
              "  return a * b;\n" +
              "}\n" +
              "console.log(kali(4, 5));",
            output: "20",
            note: "Jika fungsi tidak mengembalikan nilai, gunakan return type void.",
          },
          instruction:
            "Buat fungsi `tambah(a: number, b: number): number` yang mengembalikan `a + b`.",
          starterCode: "// Tulis fungsi tambah di sini\n",
          language: "text",
          tests: [
            {
              pattern: "function\\s+tambah\\s*\\(\\s*a\\s*:\\s*number\\s*,\\s*b\\s*:\\s*number\\s*\\)\\s*:\\s*number",
              message: "Definisikan: function tambah(a: number, b: number): number",
            },
          ],
          solution:
            "function tambah(a: number, b: number): number {\n  return a + b;\n}",
        },
        {
          kind: "step",
          id: "ts-1-7",
          title: "Setup tsconfig.json (strict: true)",
          explanation:
            "Berkas `tsconfig.json` mengatur aturan kompilator TypeScript. Memasang `\"strict\": true` mengaktifkan seluruh fitur pengamanan tipe terbaik.",
          example: {
            code: '// tsconfig.json\n{\n  "compilerOptions": {\n    "strict": true\n  }\n}',
            output: '{\n  "compilerOptions": {\n    "strict": true\n  }\n}',
            note: "Selalu aktifkan strict mode pada proyek TypeScript baru.",
          },
          instruction:
            "Pada konfigurasi compilerOptions di `tsconfig.json`, tulis opsi untuk mengaktifkan seluruh aturan pengamanan tipe ketat.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "[\"']strict[\"']\\s*:\\s*true",
              message: 'Tuliskan: "strict": true',
            },
          ],
          solution: '"strict": true',
        },
        {
          kind: "quiz",
          id: "ts-1-kuis",
          title: "Kuis: Tipe Dasar",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa fungsi utama dari opsi `strict: true` di tsconfig.json?",
              choices: [
                "Membuat kompilasi kode 10x lebih cepat",
                "Mengaktifkan seluruh aturan pemeriksaan tipe ketat untuk mencegah bug",
                "Menghapus kode JavaScript otomatis",
                "Mengganti sintaks HTML",
              ],
              answerIndex: 1,
              explanation: "strict: true mengaktifkan jaminan pengamanan tipe maksimal di TypeScript seperti strictNullChecks dan noImplicitAny.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa tipe `unknown` lebih aman digunakan dibanding `any`?",
              choices: [
                "unknown dapat langsung diakses method-nya tanpa pengecekan",
                "unknown memaksa developer melakukan type checking (narrowing) sebelum nilainya digunakan",
                "unknown hanya bisa menyimpan string",
                "unknown mempercepat eksekusi browser",
              ],
              answerIndex: 1,
              explanation: "unknown mematikan akses langsung sampai kita melakukan pengecekan tipe (narrowing), berbeda dengan any yang mematikan type safety secara total.",
            },
            {
              id: "q3",
              type: "prediksi-output",
              question: "Apa luaran dari eksekusi fungsi berikut saat dikompilasi?",
              code: 'function sapa(nama: string = "Dunia"): string {\n  return "Halo " + nama;\n}\nconsole.log(sapa());',
              acceptedAnswers: ["Halo Dunia"],
              explanation: "Parameter default nama bertipe string dengan nilai awal 'Dunia', sehingga saat sapa() dipanggil tanpa argumen mengembalikan 'Halo Dunia'.",
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
          kind: "step",
          id: "ts-2-1",
          title: "Type Alias vs Interface",
          explanation:
            "`type` sangat serbaguna — bayangkan sebagai nama alias untuk bentuk tipe apa saja (angka, teks, gabungan beberapa tipe). Sebaliknya, `interface` khusus dipakai untuk mendesain kerangka sebuah objek, seperti data profil pengguna yang punya `nama`, `email`, dan `umur`. Di dunia kerja, `interface` sering dipilih karena bisa diperluas (di-extend) layaknya cetak biru yang bisa ditambahi tanpa mengubah aslinya.",
          example: {
            code:
              "type ID = string | number;\n" +
              "interface User {\n" +
              "  id: ID;\n" +
              "  nama: string;\n" +
              "}\n" +
              "const u: User = { id: 'U1', nama: 'Budi' };\n" +
              "console.log(u.id, u.nama);",
            output: "U1 Budi",
            note: "Gunakan interface untuk objek aplikasi, dan type untuk union/primitive aliases.",
          },
          instruction:
            "Buat type alias bernama `UserID` yang dapat menerima nilai bertipe `string` atau `number`.",
          starterCode: "// Tulis type UserID di sini\n",
          language: "text",
          tests: [
            {
              pattern: "type\\s+UserID\\s*=\\s*(string\\s*\\|\\s*number|number\\s*\\|\\s*string)",
              message: "Definisikan: type UserID = string | number;",
            },
          ],
          solution: "type UserID = string | number;",
        },
        {
          kind: "step",
          id: "ts-2-2",
          title: "Optional Property (?) & Readonly",
          explanation:
            "`?` menandai properti opsional (boleh diisi/tidak), dan `readonly` mencegah nilai properti diubah setelah inisialisasi.",
          example: {
            code:
              "interface Product {\n" +
              "  readonly id: number;\n" +
              "  title: string;\n" +
              "  discount?: number;\n" +
              "}\n" +
              "const p: Product = { id: 10, title: 'Kopi' };\n" +
              "console.log(p.id, p.title);",
            output: "10 Kopi",
            note: "readonly id mencegah perubahan yang tak disengaja.",
          },
          instruction:
            "Buat `interface Student` dengan `readonly id: number`, `name: string`, dan `age?: number` (opsional).",
          starterCode: "// Tulis interface Student di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "readonly\\s+id\\s*:\\s*number",
              message: "Gunakan readonly id: number",
            },
            {
              pattern: "age\\?\\s*:\\s*number",
              message: "Gunakan age?: number",
            },
          ],
          solution:
            "interface Student {\n  readonly id: number;\n  name: string;\n  age?: number;\n}",
        },
        {
          kind: "step",
          id: "ts-2-3",
          title: "Nested Object & Array of Object",
          explanation:
            "Interface bisa berisi struktur objek bersarang (nested) atau daftar array dari objek lain.",
          example: {
            code:
              "interface Alamat {\n" +
              "  kota: string;\n" +
              "}\n" +
              "interface User {\n" +
              "  nama: string;\n" +
              "  alamat: Alamat;\n" +
              "}\n" +
              "const u: User = { nama: 'Budi', alamat: { kota: 'Bandung' } };\n" +
              "console.log(u.alamat.kota);",
            output: "Bandung",
            note: "Memecah tipe ke dalam interface terpisah menjaga keterbacaan kode.",
          },
          instruction:
            "Buat `interface Team` yang memiliki properti `members: User[]` (asumsikan interface User sudah ada).",
          starterCode: "// Tulis interface Team di sini\n",
          language: "text",
          tests: [
            {
              pattern: "interface\\s+Team\\s*\\{\\s*members\\s*:\\s*User\\[\\]\\s*;?\\s*\\}",
              message: "Definisikan: interface Team { members: User[]; }",
            },
          ],
          solution: "interface Team {\n  members: User[];\n}",
        },
        {
          kind: "step",
          id: "ts-2-4",
          title: "Index Signature untuk Object Dinamis",
          explanation:
            "Jika nama key pada objek bersifat dinamis (misal dictionary), gunakan Index Signature `[key: string]: string`.",
          example: {
            code:
              "interface KamusGaji {\n" +
              "  [jabatan: string]: number;\n" +
              "}\n" +
              "const gaji: KamusGaji = { manager: 1000, dev: 800 };\n" +
              "console.log(gaji.manager);",
            output: "1000",
            note: "Gunakan index signature saat struktur key objek tidak bisa diprediksi.",
          },
          instruction:
            "Buat `interface StringMap` yang menggunakan index signature `[key: string]: string`.",
          starterCode: "// Tulis interface StringMap di sini\n",
          language: "text",
          tests: [
            {
              pattern: "interface\\s+StringMap\\s*\\{\\s*\\[\\s*key\\s*:\\s*string\\s*\\]\\s*:\\s*string\\s*;?\\s*\\}",
              message: "Gunakan: interface StringMap { [key: string]: string; }",
            },
          ],
          solution: "interface StringMap {\n  [key: string]: string;\n}",
        },
        {
          kind: "step",
          id: "ts-2-5",
          title: "Extending Interface & Intersection (&)",
          explanation:
            "`interface Admin extends User` mewarisi properti dari User. Pada `type`, kita menggunakan operator `&` (Intersection).",
          example: {
            code:
              "interface Person { name: string; }\n" +
              "interface Employee extends Person { salary: number; }\n" +
              "const emp: Employee = { name: 'Siti', salary: 5000 };\n" +
              "console.log(emp.name, emp.salary);",
            output: "Siti 5000",
            note: "Extending interface adalah cara terbaik menyusun tipe hierarkis.",
          },
          instruction:
            "Buat `interface Admin extends User` yang menambahkan properti `role: string`.",
          starterCode: "// Tulis interface Admin di sini\n",
          language: "text",
          tests: [
            {
              pattern: "interface\\s+Admin\\s+extends\\s+User\\s*\\{\\s*role\\s*:\\s*string\\s*;?\\s*\\}",
              message: "Definisikan: interface Admin extends User { role: string; }",
            },
          ],
          solution: "interface Admin extends User {\n  role: string;\n}",
        },
        {
          kind: "step",
          id: "ts-2-6",
          title: "Memodelkan Response API Nyata",
          explanation:
            "Respon API nyata umumnya dibungkus dalam bentuk generik seperti `{ status: boolean, data: T }`.",
          example: {
            code:
              "interface UserResponse {\n" +
              "  status: boolean;\n" +
              "  data: object;\n" +
              "}\n" +
              "const res: UserResponse = { status: true, data: {} };\n" +
              "console.log(res.status);",
            output: "true",
            note: "Memodelkan respon API mencegah error properti undefined di frontend.",
          },
          instruction:
            "Buat `interface ApiResponse` yang memiliki properti `code: number` dan `message: string`.",
          starterCode: "// Tulis interface ApiResponse di sini\n",
          language: "text",
          tests: [
            {
              pattern: "interface\\s+ApiResponse\\s*\\{\\s*code\\s*:\\s*number\\s*;?\\s*message\\s*:\\s*string\\s*;?\\s*\\}",
              message: "Definisikan: interface ApiResponse { code: number; message: string; }",
            },
          ],
          solution: "interface ApiResponse {\n  code: number;\n  message: string;\n}",
        },
        {
          kind: "quiz",
          id: "ts-2-kuis",
          title: "Kuis: Object Types",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Kata kunci apa yang digunakan agar interface B mewarisi properti dari interface A?",
              choices: ["implements", "extends", "inherits", "includes"],
              answerIndex: 1,
              explanation: "Kata kunci `extends` digunakan untuk menurunkan properti interface.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Bagaimana cara menandai bahwa properti `diskon` bersifat opsional pada interface?",
              choices: ["diskon!: number", "diskon?: number", "optional diskon: number", "diskon: number | undefined"],
              answerIndex: 1,
              explanation: "Tanda tanya `?` setelah nama properti menandakan bahwa properti tersebut bersifat opsional.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa efek dari memberikan pengabjadan `readonly` pada properti interface?",
              choices: [
                "Nilai properti tersebut disembunyikan dari konsol",
                "Properti tersebut tidak bisa diubah nilainya setelah objek diinisialisasi",
                "Properti tersebut hanya menerima tipe string",
                "Properti tersebut otomatis bernilai null",
              ],
              answerIndex: 1,
              explanation: "readonly mencegah re-assignment properti setelah objek dibuat.",
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
          kind: "step",
          id: "ts-3-1",
          title: "Union Type (|) & Literal Types",
          explanation:
            "Union type (`string | number`) memungikan variabel menampung salah satu dari beberapa tipe.",
          example: {
            code:
              'type Status = "success" | "error";\n' +
              'let s: Status = "success";\n' +
              'console.log(s);',
            output: "success",
            note: "Mencegah typo nilai string di seluruh aplikasi.",
          },
          instruction:
            'Buat `type Role = "admin" | "user" | "guest"`.',
          starterCode: "// Tulis type Role di sini\n",
          language: "text",
          tests: [
            {
              pattern: "type\\s+Role\\s*=\\s*['\"]admin['\"]\\s*\\|\\s*['\"]user['\"]\\s*\\|\\s*['\"]guest['\"]",
              message: 'Definisikan: type Role = "admin" | "user" | "guest";',
            },
          ],
          solution: 'type Role = "admin" | "user" | "guest";',
        },
        {
          kind: "step",
          id: "ts-3-2",
          title: "Type Narrowing (typeof, in, instanceof)",
          explanation:
            "Narrowing adalah teknik mempersempit tipe union yang lebih luas ke tipe yang lebih spesifik saat runtime menggunakan `typeof` atau `in`.",
          example: {
            code:
              "function cetak(val: string | number) {\n" +
              '  if (typeof val === "string") {\n' +
              "    console.log(val.toUpperCase());\n" +
              "  }\n" +
              "}\n" +
              'cetak("hello");',
            output: "HELLO",
            note: "Narrowing membuka akses ke method spesifik tipe tersebut.",
          },
          instruction:
            "Tulis pengondisian `if (typeof val === 'number')` di dalam fungsi.",
          starterCode: "// Tulis pengondisian di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "if\\s*\\(\\s*typeof\\s+val\\s*===\\s*['\"]number['\"]\\s*\\)",
              message: "Gunakan: if (typeof val === 'number')",
            },
          ],
          solution: "if (typeof val === 'number') {\n  console.log(val.toFixed(2));\n}",
        },
        {
          kind: "step",
          id: "ts-3-3",
          title: "Discriminated Union",
          explanation:
            "Discriminated Union adalah pola di mana setiap interface dalam union memiliki satu properti pembeda yang sama (misal `kind` atau `status`).",
          example: {
            code:
              'type Shape = \n' +
              '  | { kind: "circle"; radius: number }\n' +
              '  | { kind: "square"; side: number };\n' +
              'const c: Shape = { kind: "circle", radius: 7 };\n' +
              'console.log(c.kind);',
            output: "circle",
            note: "Memeriksa shape.kind akan otomatis mempersempit properti yang tersedia.",
          },
          instruction:
            "Buat type alias `State` berbentuk Discriminated Union. State pertama memiliki `status: \"success\"` dengan payload `data: string`, sedangkan state kedua memiliki `status: \"error\"` dengan pesan `message: string`.",
          starterCode: "// Tulis type State di sini\n",
          language: "text",
          tests: [
            {
              pattern: "type\\s+State\\s*=\\s*\\{\\s*status\\s*:\\s*['\"]success['\"]",
              message: "Definisikan type State sesuai pola Discriminated Union",
            },
          ],
          solution:
            'type State = { status: "success"; data: string } | { status: "error"; message: string };',
        },
        {
          kind: "step",
          id: "ts-3-4",
          title: "Custom Type Guard Function (is)",
          explanation:
            "Kadang TypeScript kebingungan memastikan tipe datamu — misalnya, apakah variabel `hewan` itu Kucing atau Anjing? Type guard adalah fungsi penolong yang menjawab keraguan ini (mengembalikan true/false). Dengan penanda khusus seperti `val is Anjing` pada return type, fungsi ini meyakinkan TypeScript: 'Tenang, kalau hasilnya true, datanya pasti Anjing!' Setelah itu, TypeScript akan memberimu akses ke properti khusus Anjing tanpa protes.",
          example: {
            code:
              "function isString(val: unknown): val is string {\n" +
              '  return typeof val === "string";\n' +
              "}\n" +
              'console.log(isString("tes"));',
            output: "true",
            note: "Penanda 'val is string' memberi tahu TS bahwa val pasti string jika fungsi return true.",
          },
          instruction:
            "Buat fungsi type guard `function isNumber(val: unknown): val is number`.",
          starterCode: "// Tulis fungsi isNumber di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+isNumber\\s*\\(\\s*val\\s*:\\s*unknown\\s*\\)\\s*:\\s*val\\s+is\\s+number",
              message: "Definisikan: function isNumber(val: unknown): val is number",
            },
          ],
          solution:
            'function isNumber(val: unknown): val is number {\n  return typeof val === "number";\n}',
        },
        {
          kind: "step",
          id: "ts-3-5",
          title: "Enum vs Union Literal",
          explanation:
            "Meskipun `enum` tersedia, mayoritas tim modern lebih menyukai String Union Literal karena menghasilkan kode JavaScript kompilasi yang jauh lebih bersih.",
          example: {
            code:
              '// Union Literal (Direkomendasikan)\n' +
              'type Direction = "UP" | "DOWN";\n' +
              'let d: Direction = "UP";\n' +
              'console.log(d);',
            output: "UP",
            note: "Gunakan String Union Literal untuk opsi konstanta sederhana.",
          },
          instruction:
            "Definisikan type alias `Direction` menggunakan String Union Literal yang mencakup empat arah mata angin dasar: `\"UP\"`, `\"DOWN\"`, `\"LEFT\"`, dan `\"RIGHT\"`.",
          starterCode: "// Tulis type Direction di sini\n",
          language: "text",
          tests: [
            {
              pattern: "type\\s+Direction\\s*=\\s*['\"]UP['\"]\\s*\\|\\s*['\"]DOWN['\"]",
              message: 'Definisikan: type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";',
            },
          ],
          solution: 'type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";',
        },
        {
          kind: "step",
          id: "ts-3-6",
          title: "as const & satisfies Operator",
          explanation:
            "Opsi `as const` mengunci nilai objek menjadi readonly literal. Operator `satisfies` meyakinkan objek memenuhi interface TANPA mengubah tipenya menjadi terlalu abstrak.",
          example: {
            code:
              "const config = {\n" +
              "  port: 8080\n" +
              "} as const;\n" +
              "console.log(config.port);",
            output: "8080",
            note: "as const membuat objek konfigurasi tidak bisa diubah nilainya.",
          },
          instruction:
            "Buat variabel `colors` yang berisi objek `{ red: '#ff0000' }` dan tambahkan assertion agar propertinya bersifat readonly literal.",
          starterCode: "// Tulis objek colors di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+colors\\s*=\\s*\\{\\s*red\\s*:\\s*['\"]#ff0000['\"]\\s*\\}\\s+as\\s+const",
              message: "Gunakan: const colors = { red: '#ff0000' } as const;",
            },
          ],
          solution: "const colors = { red: '#ff0000' } as const;",
        },
        {
          kind: "quiz",
          id: "ts-3-kuis",
          title: "Kuis: Union & Narrowing",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa fungsi dari `as const` pada pembuatan objek JavaScript di TypeScript?",
              choices: [
                "Mengubah objek menjadi kelas",
                "Mengunci semua properti objek menjadi readonly dengan tipe literal yang paling presisi",
                "Mengirim objek ke server",
                "Menghapus properti objek",
              ],
              answerIndex: 1,
              explanation: "as const mengunci seluruh properti objek agar tidak bisa diubah dan mempersempit tipenya ke literal.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa pembeda utama dari struktur Discriminated Union?",
              choices: [
                "Semua properti memiliki tipe number",
                "Setiap objek dalam union memiliki satu properti pembeda (discriminant) dengan nilai literal unik",
                "Menggunakan kata kunci class",
                "Hanya bisa digunakan pada array",
              ],
              answerIndex: 1,
              explanation: "Discriminated union mengandalkan satu properti bersama (seperti kind atau status) untuk melakukan narrowing aman.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana penanda return type pada custom type guard function?",
              choices: ["param is Type", "param == Type", "param instanceof Type", "param: Type"],
              answerIndex: 0,
              explanation: "Sintaks `param is Type` memberi tahu TypeScript bahwa jika fungsi bernilai true, maka param memiliki tipe Type.",
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
          kind: "step",
          id: "ts-4-1",
          title: "Masalah yang Generics Selesaikan",
          explanation:
            "Tanpa Generics, kita terpaksa memakai `any` untuk fungsi fleksibel yang kehilangan type safety. Generics `<T>` menjaga informasi tipe tersebut.",
          example: {
            code:
              "function echo<T>(val: T): T {\n" +
              "  return val;\n" +
              "}\n" +
              "console.log(echo('halo'));",
            output: "halo",
            note: "Generics mengaitkan tipe input dengan tipe return value.",
          },
          instruction:
            "Buat fungsi generic `function identity<T>(arg: T): T` yang mengembalikan `arg`.",
          starterCode: "// Tulis fungsi identity di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+identity\\s*<\\s*T\\s*>\\s*\\(\\s*arg\\s*:\\s*T\\s*\\)\\s*:\\s*T",
              message: "Definisikan: function identity<T>(arg: T): T",
            },
          ],
          solution: "function identity<T>(arg: T): T {\n  return arg;\n}",
        },
        {
          kind: "step",
          id: "ts-4-2",
          title: "Generic Function & Constraint (extends)",
          explanation:
            "Gunakan `T extends { id: number }` untuk membatasi bahwa tipe Generics `T` wajib memiliki properti tertentu.",
          example: {
            code:
              "function getId<T extends { id: number }>(item: T): number {\n" +
              "  return item.id;\n" +
              "}\n" +
              "console.log(getId({ id: 99, name: 'Budi' }));",
            output: "99",
            note: "Constraint mencegah Generics menerima tipe data yang sembarangan.",
          },
          instruction:
            "Buat fungsi `function getName<T extends { name: string }>(item: T): string` yang mengembalikan `item.name`.",
          starterCode: "// Tulis fungsi getName di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "function\\s+getName\\s*<\\s*T\\s+extends\\s*\\{\\s*name\\s*:\\s*string\\s*\\}\\s*>\\(\\s*item\\s*:\\s*T\\s*\\)\\s*:\\s*string",
              message: "Definisikan function getName<T extends { name: string }>(item: T): string",
            },
          ],
          solution:
            "function getName<T extends { name: string }>(item: T): string {\n  return item.name;\n}",
        },
        {
          kind: "step",
          id: "ts-4-3",
          title: "Generic Interface & Type",
          explanation:
            "Interface dapat dibuat generik untuk membungkus struktur data dinamis seperti respon API.",
          example: {
            code:
              "interface ApiResponse<T> {\n" +
              "  status: boolean;\n" +
              "  data: T;\n" +
              "}\n" +
              "const r: ApiResponse<number> = { status: true, data: 200 };\n" +
              "console.log(r.data);",
            output: "200",
            note: "Pola paling populer memodelkan payload data eksternal.",
          },
          instruction:
            "Buat `interface ResponseBox<T>` yang berisi properti `data: T` dan `success: boolean`.",
          starterCode: "// Tulis interface ResponseBox di sini\n",
          language: "text",
          tests: [
            {
              pattern: "interface\\s+ResponseBox\\s*<\\s*T\\s*>\\s*\\{\\s*data\\s*:\\s*T\\s*;?\\s*success\\s*:\\s*boolean\\s*;?\\s*\\}",
              message: "Definisikan: interface ResponseBox<T> { data: T; success: boolean; }",
            },
          ],
          solution:
            "interface ResponseBox<T> {\n  data: T;\n  success: boolean;\n}",
        },
        {
          kind: "step",
          id: "ts-4-4",
          title: "Default Type Parameter",
          explanation:
            "Kita bisa memberikan tipe bawaan pada Generics dengan `= DefaultType` jika caller tidak menentukan tipenya.",
          example: {
            code:
              "interface Container<T = string> {\n" +
              "  value: T;\n" +
              "}\n" +
              "const c: Container = { value: 'Halo' };\n" +
              "console.log(c.value);",
            output: "Halo",
            note: "Memberikan kenyamanan pengguna tanpa wajib menyebut tipe setiap saat.",
          },
          instruction:
            "Buat `interface Wrapper<T = number>` dengan properti `content: T`.",
          starterCode: "// Tulis interface Wrapper di sini\n",
          language: "js",
          tests: [
            {
              pattern: "interface\\s+Wrapper\\s*<\\s*T\\s*=\\s*number\\s*>\\s*\\{\\s*content\\s*:\\s*T\\s*;?\\s*\\}",
              message: "Definisikan: interface Wrapper<T = number> { content: T; }",
            },
          ],
          solution: "interface Wrapper<T = number> {\n  content: T;\n}",
        },
        {
          kind: "step",
          id: "ts-4-5",
          title: "Membaca Signature Generic di Library",
          explanation:
            "Library populer seperti React memakai Generics di mana-mana, contohnya `useState<User | null>(null)`.",
          example: {
            code: 'const [user, setUser] = useState<string | null>(null);\nconsole.log(user);',
            output: "null",
            note: "Memahami membaca Generics membuat dokumentasi library modern mudah dibaca.",
          },
          instruction:
            "Deklarasikan state `count` dan setter `setCount` menggunakan `useState` React. Tentukan tipe Generics secara eksplisit sebagai `number` dengan nilai awal `0`.",
          starterCode: "// Tulis deklarasi useState di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s*\\[\\s*count\\s*,\\s*setCount\\s*\\]\\s*=\\s*useState\\s*<\\s*number\\s*>\\(\\s*0\\s*\\)",
              message: "Gunakan: const [count, setCount] = useState<number>(0);",
            },
          ],
          solution: "const [count, setCount] = useState<number>(0);",
        },
        {
          kind: "step",
          id: "ts-4-6",
          title: "Menulis Fetch Wrapper Ber-tipe",
          explanation:
            "Fungsi pembungkus HTTP fetch bisa dibuat generik agar otomatis mengembalikan data ber-tipe sesuai yang diminta.",
          example: {
            code:
              "async function getData<T>(url: string): Promise<T> {\n" +
              "  const res = await fetch(url);\n" +
              "  return res.json();\n" +
              "}",
            output: "getData<User>('/api/user') mengembalikan Promise<User>.",
            note: "Pola dasar membuat HTTP client serba ketat di aplikasi.",
          },
          instruction:
            "Tulis fungsi `async function fetcher<T>(url: string): Promise<T>`.",
          starterCode: "// Tulis fungsi fetcher di sini\n",
          language: "text",
          tests: [
            {
              pattern: "async\\s+function\\s+fetcher\\s*<\\s*T\\s*>\\s*\\(\\s*url\\s*:\\s*string\\s*\\)\\s*:\\s*Promise\\s*<\\s*T\\s*>",
              message: "Definisikan: async function fetcher<T>(url: string): Promise<T>",
            },
          ],
          solution:
            "async function fetcher<T>(url: string): Promise<T> {\n  const res = await fetch(url);\n  return res.json();\n}",
        },
        {
          kind: "quiz",
          id: "ts-4-kuis",
          title: "Kuis: Generics",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa kegunaan dari Generics Constraint (`<T extends SomeType>`)?",
              choices: [
                "Menghapus tipe T",
                "Membatasi bahwa tipe Generics T wajib memiliki struktur atau memenuhi kriteria tipe tertentu",
                "Mengubah T menjadi string",
                "Meningkatkan kecepatan kompilasi",
              ],
              answerIndex: 1,
              explanation: "Constraint memastikan tipe Generics T memenuhi kontrak interface yang disyaratkan.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa keuntungan utama menggunakan Generics `<T>` dibandingkan `any`?",
              choices: [
                "Generics membuat file bundle menjadi 50% lebih kecil",
                "Generics menjaga hubungan tipe (type safety) antara input dan output tanpa kehilangan informasi tipe",
                "Generics mengubah JS menjadi C++",
                "Generics tidak memerlukan kompilasi",
              ],
              answerIndex: 1,
              explanation: "Generics mempertahankan informasi tipe spesifik saat fungsi dipanggil, sedangkan any menghapus type checking sama sekali.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara memberikan nilai tipe bawaan (default parameter) pada generic type `T`?",
              choices: ["<T : string>", "<T = string>", "<T default string>", "<T as string>"],
              answerIndex: 1,
              explanation: "Sintaks `<T = DefaultType>` menetapkan tipe bawaan jika pemanggil tidak menyertakan argumen tipe.",
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
          kind: "step",
          id: "ts-5-1",
          title: "Partial, Required, dan Readonly",
          explanation:
            "`Partial<T>` membuat semua properti opsional. `Required<T>` membuat semua properti wajib. `Readonly<T>` membuat semua properti tidak bisa diubah.",
          example: {
            code:
              "interface User { id: number; name?: string; }\n" +
              "type StrictUser = Required<User>;\n" +
              "const u: StrictUser = { id: 1, name: 'Budi' };\n" +
              "console.log(u.name);",
            output: "Budi",
            note: "Sangat membantu membuat tipe turunan dari satu interface utama.",
          },
          instruction:
            "Buat type alias `DraftUser` yang memanfaatkan Utility Type bawaan TypeScript untuk membuat seluruh properti dari `User` menjadi opsional.",
          starterCode: "// Tulis type DraftUser di sini\n",
          language: "text",
          tests: [
            {
              pattern: "type\\s+DraftUser\\s*=\\s*Partial\\s*<\\s*User\\s*>",
              message: "Gunakan: type DraftUser = Partial<User>;",
            },
          ],
          solution: "type DraftUser = Partial<User>;",
        },
        {
          kind: "step",
          id: "ts-5-2",
          title: "Pick & Omit",
          explanation:
            "`Pick<T, Keys>` memilih subset properti. `Omit<T, Keys>` membuang properti tertentu dari T.",
          example: {
            code:
              "interface User { id: number; name: string; email: string; }\n" +
              "type UserInfo = Pick<User, 'name' | 'email'>;\n" +
              "type UserWithoutId = Omit<User, 'id'>;",
            output: "UserWithoutId hanya berisi properti name dan email.",
            note: "Gunakan Omit untuk tipe form pembuat data baru tanpa ID.",
          },
          instruction:
            "Definisikan type alias `UserPreview` yang mengambil hanya properti `name` dan `email` dari tipe `User` menggunakan Utility Type yang sesuai.",
          starterCode: "// Tulis type UserPreview di sini\n",
          language: "text",
          tests: [
            {
              pattern: "type\\s+UserPreview\\s*=\\s*Pick\\s*<\\s*User\\s*,\\s*['\"]name['\"]\\s*\\|\\s*['\"]email['\"]\\s*>",
              message: "Gunakan: type UserPreview = Pick<User, 'name' | 'email'>;",
            },
          ],
          solution: "type UserPreview = Pick<User, 'name' | 'email'>;",
        },
        {
          kind: "step",
          id: "ts-5-3",
          title: "Record untuk Object Map",
          explanation:
            "`Record<K, T>` membuat tipe objek pemetaan (map) dengan tipe key `K` dan tipe value `T`.",
          example: {
            code:
              'type Role = "admin" | "user";\n' +
              "type RolePermissions = Record<Role, string[]>;\n" +
              "const p: RolePermissions = { admin: ['read', 'write'], user: ['read'] };\n" +
              "console.log(p.admin.length);",
            output: "2",
            note: "Pola ideal membuat objek kamus/map dengan key terbatas.",
          },
          instruction:
            "Buat type alias `PageStatus` menggunakan `Record` untuk memetakan key bertipe `string` ke nilai bertipe `boolean`.",
          starterCode: "// Tulis type PageStatus di sini\n",
          language: "text",
          tests: [
            {
              pattern: "type\\s+PageStatus\\s*=\\s*Record\\s*<\\s*string\\s*,\\s*boolean\\s*>",
              message: "Gunakan: type PageStatus = Record<string, boolean>;",
            },
          ],
          solution: "type PageStatus = Record<string, boolean>;",
        },
        {
          kind: "step",
          id: "ts-5-4",
          title: "ReturnType, Parameters, dan Awaited",
          explanation:
            "`ReturnType<typeof fn>` mengabstraksi tipe hasil kembalian fungsi. `Awaited<T>` mengekstrak tipe data di dalam Promise.",
          example: {
            code:
              "function getUser() { return { id: 1, name: 'Budi' }; }\n" +
              "type User = ReturnType<typeof getUser>;\n" +
              "const u: User = { id: 2, name: 'Siti' };\n" +
              "console.log(u.name);",
            output: "Siti",
            note: "Mengekstrak tipe otomatis dari fungsi tanpa mendefinisikan ulang interface.",
          },
          instruction:
            "Buat type alias `Result` yang mengekstrak tipe kembalian dari fungsi `getData` menggunakan Utility Type `ReturnType`.",
          starterCode: "// Tulis type Result di sini\n",
          language: "text",
          tests: [
            {
              pattern: "type\\s+Result\\s*=\\s*ReturnType\\s*<\\s*typeof\\s+getData\\s*>",
              message: "Gunakan: type Result = ReturnType<typeof getData>;",
            },
          ],
          solution: "type Result = ReturnType<typeof getData>;",
        },
        {
          kind: "step",
          id: "ts-5-5",
          title: "keyof dan typeof di Level Tipe",
          explanation:
            "`typeof` mengambil tipe dari objek JS. `keyof` mengekstrak union dari semua nama key properti objek tersebut.",
          example: {
            code:
              "const user = { name: 'Budi', age: 20 };\n" +
              "type UserKeys = keyof typeof user; // 'name' | 'age'\n" +
              "const k: UserKeys = 'name';\n" +
              "console.log(k);",
            output: "name",
            note: "Berguna untuk menjamin penanganan key objek secara dinamis dan aman.",
          },
          instruction:
            "Definisikan type alias `ConfigKeys` yang mengekstrak union dari semua key properti pada objek `config` menggabungkan operator `keyof` dan `typeof`.",
          starterCode: "// Tulis type ConfigKeys di sini\n",
          language: "text",
          tests: [
            {
              pattern: "type\\s+ConfigKeys\\s*=\\s*keyof\\s+typeof\\s+config",
              message: "Gunakan: type ConfigKeys = keyof typeof config;",
            },
          ],
          solution: "type ConfigKeys = keyof typeof config;",
        },
        {
          kind: "step",
          id: "ts-5-6",
          title: "Mapped Types & Template Literal Type Dasar",
          explanation:
            "Mapped type dan Template Literal type memungkinkan pembuatan nama tipe baru berbasis manipulasi pola string.",
          example: {
            code:
              'type EventName = "click" | "hover";\n' +
              'type EventHandler = `on${Capitalize<EventName>}`; // "onClick" | "onHover"\n' +
              'const h: EventHandler = "onClick";\n' +
              'console.log(h);',
            output: "onClick",
            note: "Fitur tipe tingkat lanjut untuk membangun API library yang sangat ekspresif.",
          },
          instruction:
            "Buat type alias `EventGetter` menggunakan Template Literal Type yang menggabungkan awalan `get` dengan string yang diawali huruf kapital.",
          starterCode: "// Tulis type EventGetter di sini\n",
          language: "text",
          tests: [
            {
              pattern: "type\\s+EventGetter\\s*=\\s*`get\\$\\{Capitalize<string>\\}`",
              message: "Definisikan: type EventGetter = `get${Capitalize<string>}`;",
            },
          ],
          solution: "type EventGetter = `get${Capitalize<string>}`;",
        },
        {
          kind: "quiz",
          id: "ts-5-kuis",
          title: "Kuis: Utility Types",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Utility type apa yang membuang properti tertentu dari Interface?",
              choices: ["Pick", "Omit", "Partial", "Record"],
              answerIndex: 1,
              explanation: "Omit<T, K> membuat tipe baru dengan membuang properti K dari T.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa kegunaan dari `Partial<T>`?",
              choices: [
                "Membuat semua properti di T menjadi opsional (?)",
                "Membuat semua properti di T menjadi readonly",
                "Menghapus tipe T",
                "Membuat properti bertipe string saja",
              ],
              answerIndex: 0,
              explanation: "Partial<T> mengubah seluruh properti pada T menjadi opsional.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Utility type apa yang digunakan untuk mendapatkan tipe nilai kembalian dari sebuah fungsi?",
              choices: ["Parameters<T>", "ReturnType<T>", "Awaited<T>", "InstanceType<T>"],
              answerIndex: 1,
              explanation: "ReturnType<typeof fn> mengekstrak tipe nilai kembalian (return) dari fungsi fn.",
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
          kind: "step",
          id: "ts-6-1",
          title: "Membaca Error TS Panjang Tanpa Panik",
          explanation:
            "Saat pesan error TS sangat panjang, kunci membacanya adalah fokus pada baris paling bawah dan cari frasa kunci `is not assignable to type`.",
          example: {
            code: "// Error: Type 'string' is not assignable to type 'number'.",
            output: "Type 'string' is not assignable to type 'number'.",
            note: "Baca error dari paling bawah ke atas.",
          },
          instruction:
            "Perbaiki `interface Produk` di bawah agar properti `harga` bertipe `number` sehingga cocok dengan data objek `p`.",
          starterCode:
            "interface Produk {\n  id: number;\n  harga: string;\n}\nconst p: Produk = { id: 1, harga: 50000 };\n",
          language: "text",
          tests: [
            {
              pattern: "harga\\s*:\\s*number",
              message: "Ubah tipe harga dari string menjadi number",
            },
          ],
          solution:
            "interface Produk {\n  id: number;\n  harga: number;\n}\nconst p: Produk = { id: 1, harga: 50000 };",
        },
        {
          kind: "step",
          id: "ts-6-2",
          title: "Migrasi File JS ke TS Bertahap",
          explanation:
            "Strategi migrasi JS ke TS: ubah ekstensi `.js` ke `.ts`, lalu gunakan `allowJs: true` di tsconfig untuk bertahap menambahkan anotasi tipe.",
          example: {
            code: '// tsconfig.json\n{ "compilerOptions": { "allowJs": true } }',
            output: '{\n  "compilerOptions": {\n    "allowJs": true\n  }\n}',
            note: "Jangan mencoba mengubah seluruh file JS sekaligus dalam satu PR.",
          },
          instruction:
            "Di dalam file `tsconfig.json` pada bagian `compilerOptions`, tambahkan properti untuk mengizinkan file JavaScript (`.js`) dikompilasi bersama proyek TypeScript.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "[\"']allowJs[\"']\\s*:\\s*true",
              message: 'Tuliskan: "allowJs": true',
            },
          ],
          solution: '"allowJs": true',
        },
        {
          kind: "step",
          id: "ts-6-3",
          title: "Tipe untuk Event Handler & DOM",
          explanation:
            "Elemen DOM dan event React memiliki tipe spesifik seperti `React.ChangeEvent<HTMLInputElement>` atau `MouseEvent`.",
          example: {
            code:
              "function handleChange(e: React.ChangeEvent<HTMLInputElement>) {\n" +
              "  console.log(e.target.value);\n" +
              "}",
            output: "e.target.value otomatis memiliki autosuggestion properti input HTML.",
            note: "Memberi tipe eksplisit pada event handler menjamin akses atribut DOM yang aman.",
          },
          instruction:
            "Tulis parameter fungsi `handleChange` bernama `e` yang diberi anotasi tipe event perubahan input HTML di React.",
          starterCode: "// Tulis parameter e di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "\\(?e\\s*:\\s*React\\.ChangeEvent<HTMLInputElement>\\)?",
              message: "Gunakan: (e: React.ChangeEvent<HTMLInputElement>)",
            },
          ],
          solution: "(e: React.ChangeEvent<HTMLInputElement>)",
        },
        {
          kind: "step",
          id: "ts-6-4",
          title: "Deklarasi Tipe Pihak Ketiga (@types/*)",
          explanation:
            "Library JS lama yang tidak memiliki TypeScript bawaan memerlukan paket tipe terpisah dari DefinitelyTyped (`npm install -D @types/express`).",
          example: {
            code: "npm install --save-dev @types/lodash",
            output: "+ @types/lodash@4.14.202\nadded 1 package in 2s",
            note: "Paket @types selalu diinstall sebagai devDependencies.",
          },
          instruction:
            "Tulis perintah CLI npm untuk memasang tipe data node (`@types/node`) ke dalam devDependencies proyek.",
          starterCode: "# Tulis perintah npm di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "npm\\s+install\\s+(-D|--save-dev)\\s+@types/node",
              message: "Gunakan: npm install -D @types/node",
            },
          ],
          solution: "npm install -D @types/node",
        },
        {
          kind: "step",
          id: "ts-6-5",
          title: "Type Assertion (as) dan Kapan Menghindarinya",
          explanation:
            "Type Assertion `data as string` memaksa TS menganggap variabel bertipe tertentu. Gunakan secara hemat karena bisa menyembunyikan bug jika data nyatanya berbeda.",
          example: {
            code: "const input = document.getElementById('username') as HTMLInputElement;\nconsole.log(input.value);",
            output: "bimo123",
            note: "Hanya gunakan 'as' jika kamu 100% yakin dengan tipe data tersebut.",
          },
          instruction:
            "Lakukan type assertion pada variabel `elem` agar TypeScript menganggapnya sebagai `HTMLInputElement`.",
          starterCode: "// Tulis tipe assertion di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "elem\\s+as\\s+HTMLInputElement",
              message: "Gunakan: elem as HTMLInputElement",
            },
          ],
          solution: "elem as HTMLInputElement",
        },
        {
          kind: "step",
          id: "ts-6-6",
          title: "Validasi Schema Runtime dengan Zod",
          explanation:
            "Zod menjamin validasi data eksternal saat aplikasi berjalan (runtime) sekaligus mengekstrak tipe TypeScript statis.",
          example: {
            code:
              'import { z } from "zod";\n' +
              "const UserSchema = z.object({ id: z.number(), name: z.string() });\n" +
              "type User = z.infer<typeof UserSchema>;",
            output: "Validasi data runtime + Tipe statis TypeScript.",
            note: "Standar emas validasi API di aplikasi Next.js & React modern.",
          },
          instruction:
            "Buat skema Zod `const ProductSchema = z.object({ id: z.number(), title: z.string() });`.",
          starterCode: "// Tulis ProductSchema di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+ProductSchema\\s*=\\s*z\\.object\\(\\s*\\{\\s*id\\s*:\\s*z\\.number\\(\\)\\s*,\\s*title\\s*:\\s*z\\.string\\(\\)(?:\\s*,)?\\s*\\}\\s*\\)",
              message: "Definisikan ProductSchema dengan Zod",
            },
          ],
          solution:
            "const ProductSchema = z.object({\n  id: z.number(),\n  title: z.string(),\n});",
        },
        {
          kind: "quiz",
          id: "ts-6-kuis",
          title: "Kuis: TypeScript di Proyek Nyata",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa Zod dibutuhkan padahal kita sudah punya tipe TypeScript?",
              choices: [
                "TypeScript hanya memeriksa tipe saat compile-time; Zod mengecek kebenaran data saat runtime",
                "Zod membuat file JS lebih kecil",
                "Zod menggantikan peran React",
                "Zod otomatis membuat database",
              ],
              answerIndex: 0,
              explanation: "Tipe TypeScript dihapus saat kompilasi ke JS, sehingga Zod diperlukan untuk memvalidasi data API eksternal saat runtime.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Di folder mana paket tipe pihak ketiga dari DefinitelyTyped dikelola?",
              choices: ["@types/*", "@dts/*", "@definitions/*", "@ts-pkg/*"],
              answerIndex: 0,
              explanation: "Paket DefinitelyTyped dipublikasikan di bawah scope npm `@types/`.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa risiko utama dari sering menggunakan Type Assertion (`as T`)?",
              choices: [
                "Membuat kompilasi gagal total",
                "Menyembunyikan potensi bug runtime karena memaksa TS mempercayai tipe tanpa validasi nyata",
                "Menghapus variabel dari memori",
                "Mengganti browser pengguna",
              ],
              answerIndex: 1,
              explanation: "Type assertion 'as' mematikan pengecekan tipe kompilator pada nilai tersebut, sehingga jika struktur aslinya berbeda bisa terjadi error di runtime.",
            },
          ],
        },
      ],
    },
  ],
};

