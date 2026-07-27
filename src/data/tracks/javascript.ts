import type { Track } from "@/lib/types";

export const javascriptTrack: Track = {
  slug: "javascript",
  title: "JavaScript",
  description:
    "Inti segalanya: dari variabel sampai async, testing, dan API nyata.",
  hours: 120,
  recommendedPrereqs: ["html", "css"],
  color: "bg-yellow-500",
  icon: "⚡",
  order: 3,
  modules: [
    {
      slug: "dasar",
      title: "Dasar JavaScript",
      description:
        "Fondasi berpikir seperti programmer: nilai, keputusan, dan pengulangan.",
      topics: [
        "Variabel: let, const (dan kenapa var ditinggalkan)",
        "Tipe data primitif: string, number, boolean, null, undefined",
        "Operator aritmetika, perbandingan (== vs ===), logika",
        "Template literal & manipulasi string dasar",
        "Kondisi: if/else, ternary, switch",
        "Loop: for, while, for...of",
        "Truthy/falsy — sumber bug klasik",
        "Type coercion & konversi eksplisit",
      ],
      items: [
        {
          kind: "step",
          id: "js-1-1",
          title: "let dan const",
          explanation:
            "Variabel bekerja layaknya kotak berlabel tempat kamu menyimpan data di dalam program. Di JavaScript modern, ada dua jenis 'kotak' utama. Pertama, gunakan `const` (konstanta) untuk data yang isinya tidak akan pernah diganti. Kedua, gunakan `let` khusus untuk data yang nilainya memang direncanakan berubah (seperti skor dalam permainan). Di dunia kerja nyata, selalu jadikan `const` sebagai pilihan utamamu. Hindari pemakaian `var` karena memiliki aturan penyimpanan masa lalu yang sering memunculkan bug tersembunyi bagi pemula.",
          example: {
            code: "const kota = 'Bandung';   // tidak akan diubah\nlet skor = 0;             // akan berubah nanti\nskor = 10;                // ✅ boleh, karena let\n\nconsole.log(kota, skor);",
            output: "Bandung 10",
            note: "Kalau kamu menulis kota = 'Jakarta', akan muncul TypeError: Assignment to constant variable.",
          },
          instruction:
            "Buat `const nama` berisi string `Bimo` dan `let umur` berisi angka `20`, lalu tampilkan keduanya dengan `console.log`.",
          starterCode: "// tulis kodemu di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+nama\\s*=\\s*['\"]Bimo['\"]",
              message: "Buat const nama = 'Bimo';",
            },
            {
              pattern: "let\\s+umur\\s*=\\s*20",
              message: "Buat let umur = 20;",
            },
            {
              pattern: "console\\.log\\(",
              message: "Tampilkan hasilnya dengan console.log(...)",
            },
          ],
          solution:
            "const nama = 'Bimo';\nlet umur = 20;\nconsole.log(nama, umur);",
        },
        {
          kind: "step",
          id: "js-1-2",
          title: "Template literal",
          explanation:
            "Backtick (`` ` ``) memungkinkan menyisipkan nilai langsung ke dalam string dengan `${...}`, dan mendukung baris baru tanpa `\\n`. Ini menggantikan penggabungan string dengan `+` yang cepat jadi tidak terbaca begitu ada lebih dari dua variabel.",
          example: {
            code: "const produk = 'Kopi';\nconst harga = 25000;\n\n// cara lama, sulit dibaca\nconsole.log('Beli ' + produk + ' seharga ' + harga);\n\n// template literal\nconsole.log(`Beli ${produk} seharga ${harga}`);",
            output: "Beli Kopi seharga 25000\nBeli Kopi seharga 25000",
            note: "Perhatikan tanda kutipnya backtick ` (di bawah tombol Esc), bukan petik biasa. Di dalam ${} boleh ada ekspresi seperti ${harga * 2}.",
          },
          instruction:
            "Buat `const pesan` memakai template literal yang menghasilkan `Halo, saya Bimo berumur 20 tahun` dengan menyisipkan variabel `nama` dan `umur`. Tampilkan dengan console.log.",
          starterCode: "const nama = 'Bimo';\nconst umur = 20;\n\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+pesan\\s*=\\s*`[^`]*\\$\\{\\s*nama\\s*\\}",
              message:
                "Gunakan backtick dan sisipkan ${nama} di dalam const pesan.",
            },
            {
              pattern: "`[^`]*\\$\\{\\s*umur\\s*\\}",
              message: "Sisipkan juga ${umur} di template literal yang sama.",
            },
            {
              pattern: "console\\.log\\(\\s*pesan\\s*\\)",
              message: "Tampilkan dengan console.log(pesan);",
            },
          ],
          solution:
            "const nama = 'Bimo';\nconst umur = 20;\n\nconst pesan = `Halo, saya ${nama} berumur ${umur} tahun`;\nconsole.log(pesan);",
        },
        {
          kind: "step",
          id: "js-1-3",
          title: "=== bukan ==",
          explanation:
            "`==` melakukan konversi tipe diam-diam: `'5' == 5` bernilai `true`, dan `0 == ''` juga `true`. Ini sumber bug yang sulit dilacak. `===` membandingkan **nilai dan tipe** tanpa konversi, jadi `'5' === 5` bernilai `false`. Aturannya sederhana dan hampir tanpa pengecualian: **selalu pakai `===`**.",
          example: {
            code: "console.log(1 == '1');    // konversi dulu\nconsole.log(1 === '1');   // bandingkan apa adanya\nconsole.log(0 == false);\nconsole.log(0 === false);",
            output: "true\nfalse\ntrue\nfalse",
            note: "Semua baris dengan === menghasilkan false karena tipenya berbeda (number vs string, number vs boolean).",
          },
          instruction:
            "Tampilkan hasil perbandingan `'5' == 5` dan `'5' === 5` dengan dua `console.log`, lalu perhatikan bedanya di panel output.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "console\\.log\\(\\s*['\"]5['\"]\\s*==\\s*5\\s*\\)",
              message: "Tampilkan console.log('5' == 5);",
            },
            {
              pattern: "console\\.log\\(\\s*['\"]5['\"]\\s*===\\s*5\\s*\\)",
              message: "Tampilkan juga console.log('5' === 5);",
            },
          ],
          solution: "console.log('5' == 5);\nconsole.log('5' === 5);",
        },
        {
          kind: "step",
          id: "js-1-4",
          title: "Kondisi if dan else if",
          explanation:
            "Kondisi dievaluasi **berurutan dari atas**, dan yang pertama bernilai true langsung dijalankan — sisanya dilewati. Karena itu urutan pengecekan penting: kalau kamu menulis `nilai >= 60` sebelum `nilai >= 80`, nilai 90 akan salah masuk kategori.",
          example: {
            code: "const suhu = 32;\n\nif (suhu >= 35) {\n  console.log('Panas sekali');\n} else if (suhu >= 28) {\n  console.log('Hangat');\n} else {\n  console.log('Sejuk');\n}",
            output: "Hangat",
            note: "Urutan penting: kalau cabang >= 28 ditulis lebih dulu, suhu 40 akan salah masuk ke 'Hangat' dan cabang 35 tak pernah tercapai.",
          },
          instruction:
            "Buat variabel `nilai = 85`, lalu tampilkan `'A'` jika nilai >= 80, `'B'` jika >= 70, selain itu `'C'`. Gunakan `console.log` di setiap cabang.",
          starterCode: "const nilai = 85;\n\n",
          language: "js",
          tests: [
            {
              pattern: "if\\s*\\(\\s*nilai\\s*>=\\s*80\\s*\\)",
              message: "Buat if (nilai >= 80) sebagai pengecekan pertama.",
            },
            {
              pattern: "else\\s+if\\s*\\(\\s*nilai\\s*>=\\s*70\\s*\\)",
              message: "Tambahkan else if (nilai >= 70).",
            },
            {
              pattern: "else\\s*\\{",
              message: "Tambahkan blok else untuk sisanya.",
            },
            {
              pattern: "console\\.log\\(\\s*['\"]A['\"]\\s*\\)",
              message: "Di cabang pertama, tampilkan console.log('A');",
            },
          ],
          solution:
            "const nilai = 85;\n\nif (nilai >= 80) {\n  console.log('A');\n} else if (nilai >= 70) {\n  console.log('B');\n} else {\n  console.log('C');\n}",
        },
        {
          kind: "step",
          id: "js-1-5",
          title: "Loop for",
          explanation:
            "`for (let i = 1; i <= 5; i++)` punya tiga bagian: nilai awal, kondisi lanjut, dan perubahan tiap putaran. Kesalahan klasik: memakai `i <= panjang` saat mengakses array (indeks dimulai dari 0, jadi seharusnya `i < panjang`) — hasilnya `undefined` di putaran terakhir.",
          example: {
            code: "// mulai 0, lanjut selama < 3, naik 1 tiap putaran\nfor (let i = 0; i < 3; i++) {\n  console.log('Putaran ' + i);\n}",
            output: "Putaran 0\nPutaran 1\nPutaran 2",
            note: "Tiga bagian dipisah titik koma: (nilai awal; kondisi lanjut; perubahan). Loop berhenti saat kondisi jadi false.",
          },
          instruction:
            "Gunakan `for` untuk menampilkan angka 1 sampai 5 dengan `console.log`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern:
                "for\\s*\\(\\s*let\\s+i\\s*=\\s*1\\s*;\\s*i\\s*<=?\\s*(5|6)\\s*;\\s*i\\+\\+\\s*\\)",
              message:
                "Buat for (let i = 1; i <= 5; i++) — mulai dari 1 sampai 5.",
            },
            {
              pattern: "console\\.log\\(\\s*i\\s*\\)",
              message: "Di dalam loop, tampilkan console.log(i);",
            },
          ],
          solution:
            "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
        },
        {
          kind: "step",
          id: "js-1-6",
          title: "Truthy dan falsy",
          explanation:
            "Di dalam `if`, JavaScript mengubah nilai apa pun menjadi true/false. Yang **falsy** hanya ada enam: `false`, `0`, `''` (string kosong), `null`, `undefined`, `NaN`. Sisanya truthy — termasuk `'0'`, `'false'`, `[]`, dan `{}`. Array kosong bernilai truthy adalah jebakan yang sering mengejutkan pemula.",
          example: {
            code: "console.log(Boolean('teks'));   // string berisi\nconsole.log(Boolean(null));\nconsole.log(Boolean('0'));      // string '0', bukan angka!\nconsole.log(Boolean({}));       // object kosong",
            output: "true\nfalse\ntrue\ntrue",
            note: "Yang falsy hanya enam: false, 0, '', null, undefined, NaN. String '0' dan object/array kosong semuanya truthy.",
          },
          instruction:
            "Tampilkan hasil `Boolean(0)`, `Boolean('')`, dan `Boolean([])` dengan console.log. Perhatikan bahwa array kosong ternyata truthy.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "console\\.log\\(\\s*Boolean\\(\\s*0\\s*\\)\\s*\\)",
              message: "Tampilkan console.log(Boolean(0));",
            },
            {
              pattern: "console\\.log\\(\\s*Boolean\\(\\s*['\"]['\"]\\s*\\)\\s*\\)",
              message: "Tampilkan console.log(Boolean(''));",
            },
            {
              pattern: "console\\.log\\(\\s*Boolean\\(\\s*\\[\\s*\\]\\s*\\)\\s*\\)",
              message: "Tampilkan console.log(Boolean([]));",
            },
          ],
          solution:
            "console.log(Boolean(0));\nconsole.log(Boolean(''));\nconsole.log(Boolean([]));",
        },
        {
          kind: "quiz",
          id: "js-1-kuis",
          title: "Kuis: Dasar JavaScript",
          questions: [
            {
              id: "q1",
              type: "prediksi-output",
              question: "Apa yang ditampilkan kode ini? (tulis true atau false)",
              code: "console.log('5' === 5);",
              acceptedAnswers: ["false"],
              explanation:
                "false. Operator === membandingkan nilai DAN tipe tanpa konversi: string '5' bukan number 5. Dengan == hasilnya akan true karena ada konversi tipe otomatis — inilah kenapa === adalah pilihan default.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Kapan sebaiknya memakai let daripada const?",
              choices: [
                "Selalu pakai let, const terlalu membatasi",
                "Hanya saat nilai variabel benar-benar perlu diubah setelah dibuat",
                "Saat variabelnya berupa angka",
                "Saat berada di dalam fungsi",
              ],
              answerIndex: 1,
              explanation:
                "const sebagai default, let hanya bila nilainya memang berubah (misal counter di dalam loop). Ini membuat maksud kode jelas dan mencegah perubahan nilai yang tidak disengaja.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Manakah yang BUKAN nilai falsy di JavaScript?",
              choices: ["0", "''", "[]", "NaN"],
              answerIndex: 2,
              explanation:
                "Array kosong [] adalah TRUTHY, meskipun terasa 'kosong'. Nilai falsy hanya enam: false, 0, '' , null, undefined, NaN. Untuk memeriksa array kosong gunakan arr.length === 0, bukan if (!arr).",
            },
            {
              id: "q4",
              type: "prediksi-output",
              question:
                "Berapa nilai terakhir yang ditampilkan loop ini? (tulis angkanya)",
              code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
              acceptedAnswers: ["2"],
              explanation:
                "2. Loop mencetak 0, 1, 2 lalu berhenti karena kondisi i < 3 tidak lagi terpenuhi saat i menjadi 3. Kesalahan umum adalah mengira ia mencetak sampai 3.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Kenapa 0 == '' menghasilkan true, tapi 0 === '' menghasilkan false?",
              choices: [
                "Karena == membandingkan panjang karakter",
                "Karena == melakukan konversi tipe sebelum membandingkan, sedangkan === tidak",
                "Karena string kosong dianggap angka nol secara permanen",
                "Karena itu bug JavaScript yang belum diperbaiki",
              ],
              answerIndex: 1,
              explanation:
                "== mengonversi kedua nilai ke tipe yang sama dulu (string kosong menjadi 0), sehingga perbandingannya menjadi 0 == 0. === menolak membandingkan tipe berbeda dan langsung mengembalikan false. Konversi diam-diam inilah sumber bug yang sulit ditemukan.",
            },
          ],
        },
      ],
    },
    {
      slug: "fungsi",
      title: "Fungsi",
      description:
        "Unit terkecil kode yang bisa dipakai ulang — dan konsep scope yang menentukan segalanya.",
      topics: [
        "Deklarasi fungsi, parameter, return",
        "Arrow function & perbedaannya",
        "Default parameter & rest parameter",
        "Scope: global, function, block",
        "Closure — dijelaskan tanpa mistis, dengan kasus nyata",
        "Callback: fungsi sebagai argumen",
        "Pure function vs side effect",
        "Hoisting & temporal dead zone",
      ],
      items: [
        {
          kind: "step",
          id: "js-2-1",
          title: "Fungsi dengan parameter dan return",
          explanation:
            "Perbedaan penting: `console.log` **menampilkan** nilai, `return` **mengembalikan** nilai agar bisa dipakai lagi. Fungsi tanpa `return` menghasilkan `undefined`. Pemula sering menulis `console.log` di dalam fungsi lalu bingung kenapa hasilnya tidak bisa dijumlahkan — karena yang keluar bukan nilai, tapi tampilan.",
          example: {
            code: "function totalHarga(harga, jumlah) {\n  return harga * jumlah;      // mengembalikan nilai\n}\n\nconst bayar = totalHarga(5000, 3);\nconsole.log(bayar);\nconsole.log(bayar + 1000);     // nilainya bisa dipakai lagi",
            output: "15000\n16000",
            note: "Karena memakai return, hasilnya bisa disimpan dan dihitung lagi. Kalau di dalam fungsi hanya console.log, nilainya hilang.",
          },
          instruction:
            "Buat fungsi `luas(panjang, lebar)` yang **mengembalikan** hasil perkalian, lalu tampilkan `luas(5, 3)` dengan console.log.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern:
                "function\\s+luas\\s*\\(\\s*panjang\\s*,\\s*lebar\\s*\\)",
              message: "Buat function luas(panjang, lebar) { ... }",
            },
            {
              pattern: "return\\s+panjang\\s*\\*\\s*lebar",
              message:
                "Gunakan return panjang * lebar; — bukan console.log di dalam fungsi.",
            },
            {
              pattern: "console\\.log\\(\\s*luas\\(\\s*5\\s*,\\s*3\\s*\\)",
              message: "Tampilkan hasilnya: console.log(luas(5, 3));",
            },
          ],
          solution:
            "function luas(panjang, lebar) {\n  return panjang * lebar;\n}\n\nconsole.log(luas(5, 3));",
        },
        {
          kind: "step",
          id: "js-2-2",
          title: "Arrow function",
          explanation:
            "Arrow function adalah cara modern untuk menulis kode fungsi agar jauh lebih singkat dan bersih. Alih-alih mengetikkan kata kunci `function`, kamu cukup menggunakan tanda panah `=>`. Jika fungsimu hanya melakukan satu perhitungan sederhana (satu baris operasi), kamu bahkan diperbolehkan menghapus kurung kurawal `{}` dan kata kunci `return`. Ini sangat membantu ketika kamu perlu menyisipkan fungsi kecil secara cepat. Bayangkan arrow function ini layaknya jalan pintas penulisan untuk instruksi yang tidak membutuhkan banyak langkah.",
          example: {
            code: "// fungsi biasa\nfunction tambah(a, b) {\n  return a + b;\n}\n\n// arrow dengan kurawal (perlu return)\nconst tambah2 = (a, b) => { return a + b; };\n\n// arrow implicit return (paling ringkas)\nconst tambah3 = (a, b) => a + b;\n\nconsole.log(tambah3(2, 3));",
            output: "5",
            note: "Tanpa kurung kurawal, nilai ekspresinya otomatis dikembalikan. Kalau memakai kurawal, kamu WAJIB menulis return.",
          },
          instruction:
            "Ubah fungsi `luas` menjadi arrow function dengan implicit return (tanpa kurung kurawal), lalu tampilkan `luas(4, 6)`.",
          starterCode: "// ubah jadi arrow function\n",
          language: "js",
          tests: [
            {
              pattern:
                "const\\s+luas\\s*=\\s*\\(\\s*panjang\\s*,\\s*lebar\\s*\\)\\s*=>\\s*panjang\\s*\\*\\s*lebar",
              message:
                "Buat const luas = (panjang, lebar) => panjang * lebar; — tanpa kurung kurawal.",
            },
            {
              pattern: "console\\.log\\(\\s*luas\\(\\s*4\\s*,\\s*6\\s*\\)",
              message: "Tampilkan console.log(luas(4, 6));",
            },
          ],
          solution:
            "const luas = (panjang, lebar) => panjang * lebar;\n\nconsole.log(luas(4, 6));",
        },
        {
          kind: "step",
          id: "js-2-3",
          title: "Default parameter",
          explanation:
            "Nilai default dipakai kalau argumen tidak diberikan atau bernilai `undefined`. Ini menghilangkan pola lama `harga = harga || 0` yang punya bug: kalau argumennya `0` (nilai falsy yang sah), pola `||` akan menimpanya. Default parameter tidak punya masalah itu.",
          example: {
            code: "function kirim(pesan, prioritas = 'normal') {\n  return `[${prioritas}] ${pesan}`;\n}\n\nconsole.log(kirim('Server down'));\nconsole.log(kirim('Server down', 'urgent'));",
            output: "[normal] Server down\n[urgent] Server down",
            note: "Default hanya dipakai kalau argumennya tidak dikirim atau undefined. Kirim 0 atau '' tetap dihormati sebagai nilai.",
          },
          instruction:
            "Buat fungsi `sapa(nama, sapaan = 'Halo')` yang mengembalikan `` `${sapaan}, ${nama}!` ``. Tampilkan hasil `sapa('Bimo')` dan `sapa('Bimo', 'Hai')`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern:
                "(function\\s+sapa|const\\s+sapa\\s*=)[\\s\\S]{0,40}nama\\s*,\\s*sapaan\\s*=\\s*['\"]Halo['\"]",
              message:
                "Buat fungsi sapa dengan parameter kedua bernilai default 'Halo'.",
            },
            {
              pattern:
                "return\\s+`[^`]*\\$\\{\\s*sapaan\\s*\\}[^`]*\\$\\{\\s*nama\\s*\\}[^`]*`|=>\\s*`[^`]*\\$\\{\\s*sapaan\\s*\\}",
              message:
                "Kembalikan template literal `${sapaan}, ${nama}!`",
            },
            {
              pattern: "console\\.log\\(\\s*sapa\\(\\s*['\"]Bimo['\"]\\s*\\)",
              message: "Tampilkan console.log(sapa('Bimo'));",
            },
            {
              pattern:
                "sapa\\(\\s*['\"]Bimo['\"]\\s*,\\s*['\"]Hai['\"]\\s*\\)",
              message: "Tampilkan juga sapa('Bimo', 'Hai').",
            },
          ],
          solution:
            "function sapa(nama, sapaan = 'Halo') {\n  return `${sapaan}, ${nama}!`;\n}\n\nconsole.log(sapa('Bimo'));\nconsole.log(sapa('Bimo', 'Hai'));",
        },
        {
          kind: "step",
          id: "js-2-4",
          title: "Scope: variabel punya wilayah",
          explanation:
            "Variabel yang dibuat dengan `let`/`const` di dalam blok `{ }` **hanya hidup di dalam blok itu**. Fungsi bisa membaca variabel di luarnya (scope luar), tapi tidak sebaliknya. Memahami ini mencegah error 'x is not defined' yang membingungkan.",
          example: {
            code: "const global = 'terlihat semua';\n\nfunction contoh() {\n  const lokal = 'hanya di dalam';\n  console.log(global);   // ✅ boleh melihat ke luar\n  console.log(lokal);    // ✅ miliknya sendiri\n}\n\ncontoh();\n// console.log(lokal);   // ❌ ReferenceError: lokal is not defined",
            output: "terlihat semua\nhanya di dalam",
            note: "Arahnya satu jalan: dari dalam bisa melihat ke luar, tapi dari luar tidak bisa melihat ke dalam.",
          },
          instruction:
            "Buat `const luar = 'aku di luar'`, lalu fungsi `cek()` yang menampilkan `luar` dan sebuah `const dalam` miliknya sendiri. Panggil `cek()`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+luar\\s*=",
              message: "Buat const luar = 'aku di luar';",
            },
            {
              pattern:
                "(function\\s+cek\\s*\\(\\s*\\)|const\\s+cek\\s*=\\s*\\(\\s*\\)\\s*=>)",
              message: "Buat fungsi cek().",
            },
            {
              pattern: "const\\s+dalam\\s*=",
              message: "Di dalam cek(), buat const dalam = ...;",
            },
            {
              pattern: "cek\\(\\s*\\)\\s*;?",
              message: "Panggil fungsinya: cek();",
            },
          ],
          solution:
            "const luar = 'aku di luar';\n\nfunction cek() {\n  const dalam = 'aku di dalam';\n  console.log(luar);\n  console.log(dalam);\n}\n\ncek();",
        },
        {
          kind: "step",
          id: "js-2-5",
          title: "Closure",
          explanation:
            "Closure sering terdengar mistis, padahal sederhana: **fungsi mengingat variabel dari tempat ia dibuat, bahkan setelah fungsi luarnya selesai berjalan**. Ini yang memungkinkan pembuatan counter privat — `hitung` tidak bisa diakses dari luar, hanya lewat fungsi yang dikembalikan.",
          example: {
            code: "function buatDompet() {\n  let saldo = 100;                 // privat, tak bisa disentuh dari luar\n  return function () {\n    saldo = saldo - 10;\n    return saldo;\n  };\n}\n\nconst tarik = buatDompet();\nconsole.log(tarik());\nconsole.log(tarik());",
            output: "90\n80",
            note: "Variabel saldo tetap hidup di antara pemanggilan meski buatDompet() sudah selesai — itulah closure.",
          },
          instruction:
            "Buat fungsi `buatCounter()` yang punya `let hitung = 0` dan **mengembalikan fungsi** yang menaikkan lalu mengembalikan `hitung`. Buat `const naik = buatCounter()`, panggil dua kali dan tampilkan hasilnya.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern:
                "(function\\s+buatCounter|const\\s+buatCounter\\s*=)",
              message: "Buat fungsi buatCounter.",
            },
            {
              pattern: "let\\s+hitung\\s*=\\s*0",
              message: "Di dalamnya, buat let hitung = 0;",
            },
            {
              pattern: "return\\s+(function|\\(\\s*\\)\\s*=>)",
              message:
                "buatCounter harus MENGEMBALIKAN sebuah fungsi (return function() {...} atau return () => ...).",
            },
            {
              pattern: "const\\s+naik\\s*=\\s*buatCounter\\(\\s*\\)",
              message: "Buat const naik = buatCounter();",
            },
            {
              pattern:
                "console\\.log\\(\\s*naik\\(\\s*\\)\\s*\\)[\\s\\S]*console\\.log\\(\\s*naik\\(\\s*\\)\\s*\\)",
              message:
                "Panggil dan tampilkan dua kali: console.log(naik()); dua baris.",
            },
          ],
          solution:
            "function buatCounter() {\n  let hitung = 0;\n  return function () {\n    hitung++;\n    return hitung;\n  };\n}\n\nconst naik = buatCounter();\nconsole.log(naik());\nconsole.log(naik());",
        },
        {
          kind: "step",
          id: "js-2-6",
          title: "Callback: fungsi sebagai argumen",
          explanation:
            "Di JavaScript, fungsi adalah **nilai** — bisa disimpan di variabel dan dikirim sebagai argumen. Fungsi yang dikirim seperti itu disebut callback, dan ini fondasi dari `map`, `addEventListener`, dan semua kode asynchronous yang akan kamu tulis nanti.",
          example: {
            code: "function olah(teks, aksi) {\n  return aksi(teks);           // fungsi yang dikirim, dipanggil di sini\n}\n\nconsole.log(olah('halo', (t) => t.toUpperCase()));\nconsole.log(olah('halo', (t) => t.length));",
            output: "HALO\n4",
            note: "Fungsi yang sama menghasilkan perilaku berbeda tergantung callback yang dikirim — dasar dari map, filter, dan addEventListener.",
          },
          instruction:
            "Buat fungsi `prosesAngka(angka, callback)` yang mengembalikan `callback(angka)`. Lalu panggil dengan callback yang mengalikan dua, dan tampilkan hasilnya untuk angka 7.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern:
                "(function\\s+prosesAngka|const\\s+prosesAngka\\s*=)[\\s\\S]{0,60}callback",
              message: "Buat fungsi prosesAngka(angka, callback).",
            },
            {
              pattern: "return\\s+callback\\(\\s*angka\\s*\\)|=>\\s*callback\\(\\s*angka\\s*\\)",
              message: "Kembalikan callback(angka).",
            },
            {
              pattern:
                "prosesAngka\\(\\s*7\\s*,\\s*(function|\\(?\\s*\\w+\\s*\\)?\\s*=>)",
              message:
                "Panggil prosesAngka(7, ...) dengan sebuah fungsi sebagai argumen kedua.",
            },
            {
              pattern: "\\*\\s*2",
              message: "Callback-nya harus mengalikan angka dengan 2.",
            },
          ],
          solution:
            "function prosesAngka(angka, callback) {\n  return callback(angka);\n}\n\nconsole.log(prosesAngka(7, (n) => n * 2));",
        },
        {
          kind: "quiz",
          id: "js-2-kuis",
          title: "Kuis: Fungsi",
          questions: [
            {
              id: "q1",
              type: "prediksi-output",
              question: "Apa yang ditampilkan kode ini?",
              code: "function tambah(a, b) {\n  console.log(a + b);\n}\n\nconsole.log(tambah(2, 3));",
              acceptedAnswers: ["5 undefined", "5, undefined", "5 dan undefined", "undefined"],
              explanation:
                "Pertama tercetak 5 (dari console.log di dalam fungsi), lalu undefined — karena fungsi tidak punya return, nilai kembaliannya undefined. Inilah beda mendasar antara menampilkan (console.log) dan mengembalikan (return).",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Kenapa harga = harga || 0 bermasalah sebagai cara memberi nilai default?",
              choices: [
                "Karena || tidak bisa dipakai untuk angka",
                "Karena kalau harga bernilai 0 (nilai sah), 0 itu falsy sehingga akan ditimpa",
                "Karena || lebih lambat dari default parameter",
                "Tidak ada masalah",
              ],
              answerIndex: 1,
              explanation:
                "0, '', dan false adalah nilai falsy yang bisa jadi nilai sah dalam bisnis (harga 0 untuk gratis). Pola || akan menimpanya. Gunakan default parameter (harga = 0) atau ?? yang hanya menimpa null/undefined.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa itu closure dalam kalimat sederhana?",
              choices: [
                "Fungsi yang menutup program",
                "Fungsi yang mengingat variabel dari lingkungan tempat ia dibuat, bahkan setelah fungsi luarnya selesai",
                "Cara mengunci variabel agar jadi const",
                "Fungsi yang hanya bisa dipanggil sekali",
              ],
              answerIndex: 1,
              explanation:
                "Closure = fungsi + lingkungan variabel tempat ia dibuat. Karena itu counter yang dikembalikan buatCounter() tetap bisa mengakses 'hitung' meski buatCounter sudah selesai berjalan. Ini dasar dari data privat dan custom hooks di React.",
            },
            {
              id: "q4",
              type: "prediksi-output",
              question: "Apa yang ditampilkan baris terakhir?",
              code: "function buat() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = buat();\na();\na();\nconsole.log(a());",
              acceptedAnswers: ["3"],
              explanation:
                "3. Variabel n dipertahankan oleh closure di antara pemanggilan, jadi nilainya bertambah terus: 1, 2, lalu 3. Kalau setiap pemanggilan membuat n baru, hasilnya akan selalu 1.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Fungsi di dalam blok bisa membaca variabel di luarnya, tapi tidak sebaliknya. Apa nama konsep ini?",
              choices: [
                "Hoisting",
                "Scope (lingkup variabel)",
                "Callback",
                "Type coercion",
              ],
              answerIndex: 1,
              explanation:
                "Scope menentukan di mana variabel bisa diakses. Kode di dalam bisa 'melihat keluar' (scope chain), tapi kode di luar tidak bisa melihat variabel yang dibuat di dalam blok — itulah kenapa 'x is not defined' sering muncul saat variabel dipakai di luar bloknya.",
            },
          ],
        },
      ],
    },
    {
      slug: "struktur-data",
      title: "Array & Object",
      description:
        "Struktur data yang kamu pakai setiap hari kerja — kuasai method-methodnya sampai refleks.",
      topics: [
        "Array: push/pop, slice/splice, indexOf/includes",
        "map, filter, reduce — trio yang muncul di setiap interview",
        "find, some, every, sort (dan jebakan sort default)",
        "Object: property, method, this dasar",
        "Destructuring array & object",
        "Spread & rest untuk copy dan merge",
        "Reference vs value — kenapa objectmu 'berubah sendiri'",
        "JSON: parse & stringify",
        "Map & Set — kapan lebih tepat dari object/array",
      ],
      items: [
        {
          kind: "step",
          id: "js-3-1",
          title: "Array dan aksesnya",
          explanation:
            "Indeks array dimulai dari **0**, jadi elemen terakhir ada di `length - 1`. Cara modern mengambil elemen terakhir: `arr.at(-1)` — lebih jelas daripada `arr[arr.length - 1]`. Mengakses indeks yang tidak ada tidak menimbulkan error, hanya `undefined` (yang justru sering menyamarkan bug).",
          example: {
            code: "const hari = ['Senin', 'Selasa', 'Rabu'];\n\nconsole.log(hari[0]);        // indeks pertama = 0\nconsole.log(hari[2]);        // indeks terakhir = length - 1\nconsole.log(hari.at(-1));    // cara modern ambil terakhir\nconsole.log(hari.length);\nconsole.log(hari[5]);        // indeks tidak ada",
            output: "Senin\nRabu\nRabu\n3\nundefined",
            note: "Mengakses indeks yang tidak ada TIDAK error, hanya undefined — ini sering menyamarkan bug sampai jauh kemudian.",
          },
          instruction:
            "Buat array `const buah = ['apel', 'mangga', 'jeruk']`, lalu tampilkan elemen pertama, elemen terakhir dengan `.at(-1)`, dan `buah.length`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern:
                "const\\s+buah\\s*=\\s*\\[\\s*['\"]apel['\"]\\s*,\\s*['\"]mangga['\"]\\s*,\\s*['\"]jeruk['\"]\\s*\\]",
              message:
                "Buat const buah = ['apel', 'mangga', 'jeruk'];",
            },
            {
              pattern: "console\\.log\\(\\s*buah\\[\\s*0\\s*\\]\\s*\\)",
              message: "Tampilkan elemen pertama: console.log(buah[0]);",
            },
            {
              pattern: "buah\\.at\\(\\s*-1\\s*\\)",
              message: "Gunakan buah.at(-1) untuk elemen terakhir.",
            },
            {
              pattern: "buah\\.length",
              message: "Tampilkan juga buah.length.",
            },
          ],
          solution:
            "const buah = ['apel', 'mangga', 'jeruk'];\n\nconsole.log(buah[0]);\nconsole.log(buah.at(-1));\nconsole.log(buah.length);",
        },
        {
          kind: "step",
          id: "js-3-2",
          title: "map: mengubah setiap elemen",
          explanation:
            "`map` membuat **array baru** dengan panjang sama, di mana setiap elemen adalah hasil transformasi. Array aslinya tidak berubah. Ini method yang paling sering kamu pakai di React untuk mengubah data menjadi daftar komponen. Ingat: `map` selalu mengembalikan array baru — kalau kamu tidak memakai hasilnya, kamu salah memilih method (yang kamu butuh mungkin `forEach`).",
          example: {
            code: "const harga = [10000, 20000];\n\nconst denganPajak = harga.map((h) => h * 1.11);\n\nconsole.log(denganPajak);\nconsole.log(harga);        // array asli TIDAK berubah",
            output: "[11100,22200]\n[10000,20000]",
            note: "map selalu menghasilkan array BARU dengan panjang sama. Karena itu hasilnya harus disimpan ke variabel.",
          },
          instruction:
            "Dari array `angka`, buat `const dobel` berisi setiap angka dikali 2 memakai `map`. Tampilkan `dobel`.",
          starterCode: "const angka = [1, 2, 3, 4];\n\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+dobel\\s*=\\s*angka\\.map\\(",
              message: "Buat const dobel = angka.map(...);",
            },
            {
              pattern: "\\*\\s*2",
              message: "Di dalam callback map, kalikan dengan 2.",
            },
            {
              pattern: "console\\.log\\(\\s*dobel\\s*\\)",
              message: "Tampilkan console.log(dobel);",
            },
          ],
          solution:
            "const angka = [1, 2, 3, 4];\n\nconst dobel = angka.map((n) => n * 2);\nconsole.log(dobel);",
        },
        {
          kind: "step",
          id: "js-3-3",
          title: "filter: menyaring elemen",
          explanation:
            "`filter` mengembalikan array baru berisi elemen yang callback-nya bernilai **true**. Panjangnya bisa lebih pendek dari aslinya. Perbedaan mendasar dengan `map`: filter memilih, map mengubah. Kalau kamu butuh keduanya, rantaikan: `.filter(...).map(...)`.",
          example: {
            code: "const nilai = [45, 80, 92, 60];\n\nconst lulus = nilai.filter((n) => n >= 70);\n\nconsole.log(lulus);\nconsole.log(lulus.length);   // panjangnya bisa berbeda dari aslinya",
            output: "[80,92]\n2",
            note: "Callback filter harus mengembalikan true/false. true = elemen disimpan, false = dibuang.",
          },
          instruction:
            "Dari array `angka`, buat `const genap` berisi hanya angka yang habis dibagi 2 (`n % 2 === 0`). Tampilkan `genap`.",
          starterCode: "const angka = [1, 2, 3, 4, 5, 6];\n\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+genap\\s*=\\s*angka\\.filter\\(",
              message: "Buat const genap = angka.filter(...);",
            },
            {
              pattern: "%\\s*2\\s*===\\s*0",
              message:
                "Gunakan kondisi n % 2 === 0 (pakai === bukan ==).",
            },
            {
              pattern: "console\\.log\\(\\s*genap\\s*\\)",
              message: "Tampilkan console.log(genap);",
            },
          ],
          solution:
            "const angka = [1, 2, 3, 4, 5, 6];\n\nconst genap = angka.filter((n) => n % 2 === 0);\nconsole.log(genap);",
        },
        {
          kind: "step",
          id: "js-3-4",
          title: "reduce: meringkas jadi satu nilai",
          explanation:
            "`reduce` memampatkan array menjadi **satu nilai**. Dua argumen callback-nya: nilai terkumpul (accumulator) dan elemen saat ini. Argumen kedua reduce adalah nilai awal — **selalu tulis nilai awalnya**, karena reduce pada array kosong tanpa nilai awal akan melempar error. Ini pertanyaan interview yang sangat umum.",
          example: {
            code: "const angka = [5, 10, 15];\n\n// (terkumpul, elemenSaatIni) => hasil baru,  nilai awal 0\nconst jumlah = angka.reduce((total, n) => total + n, 0);\n\nconsole.log(jumlah);\n// jalannya: 0+5=5 → 5+10=15 → 15+15=30",
            output: "30",
            note: "Angka 0 di akhir adalah nilai AWAL. Tanpa itu, reduce pada array kosong melempar TypeError.",
          },
          instruction:
            "Hitung total dari array `harga` memakai `reduce` dengan nilai awal `0`. Simpan di `const total` dan tampilkan.",
          starterCode: "const harga = [15000, 20000, 5000];\n\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+total\\s*=\\s*harga\\.reduce\\(",
              message: "Buat const total = harga.reduce(...);",
            },
            {
              pattern: "reduce\\([\\s\\S]*,\\s*0\\s*\\)",
              message:
                "Jangan lupa nilai awal 0 sebagai argumen kedua reduce: reduce((a, b) => a + b, 0)",
            },
            {
              pattern: "console\\.log\\(\\s*total\\s*\\)",
              message: "Tampilkan console.log(total);",
            },
          ],
          solution:
            "const harga = [15000, 20000, 5000];\n\nconst total = harga.reduce((jumlah, h) => jumlah + h, 0);\nconsole.log(total);",
        },
        {
          kind: "step",
          id: "js-3-5",
          title: "Object dan aksesnya",
          explanation:
            "Object menyimpan data berpasangan `key: value`. Dua cara akses: notasi titik (`user.nama`) untuk key yang sudah kamu ketahui, dan notasi bracket (`user['nama']`) saat key-nya berupa variabel atau mengandung karakter khusus. Object adalah bentuk data yang kamu terima dari hampir semua API.",
          example: {
            code: "const produk = {\n  nama: 'Kopi Arabika',\n  harga: 85000,\n  tersedia: true,\n};\n\nconsole.log(produk.nama);          // notasi titik\nconsole.log(produk['harga']);      // notasi bracket\n\nconst kunci = 'tersedia';\nconsole.log(produk[kunci]);        // bracket wajib untuk key dinamis",
            output: "Kopi Arabika\n85000\ntrue",
            note: "Titik untuk key yang sudah kamu tahu namanya. Bracket kalau nama key-nya ada di dalam variabel.",
          },
          instruction:
            "Buat object `const user` dengan properti `nama` (`'Bimo'`), `umur` (`20`), dan `aktif` (`true`). Tampilkan `user.nama` dan `user['umur']`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+user\\s*=\\s*\\{[\\s\\S]*nama\\s*:\\s*['\"]Bimo['\"]",
              message: "Buat object user dengan properti nama: 'Bimo'.",
            },
            {
              pattern: "umur\\s*:\\s*20",
              message: "Tambahkan properti umur: 20.",
            },
            {
              pattern: "aktif\\s*:\\s*true",
              message: "Tambahkan properti aktif: true.",
            },
            {
              pattern: "console\\.log\\(\\s*user\\.nama\\s*\\)",
              message: "Tampilkan console.log(user.nama);",
            },
            {
              pattern: "user\\[\\s*['\"]umur['\"]\\s*\\]",
              message: "Tampilkan juga user['umur'] dengan notasi bracket.",
            },
          ],
          solution:
            "const user = {\n  nama: 'Bimo',\n  umur: 20,\n  aktif: true,\n};\n\nconsole.log(user.nama);\nconsole.log(user['umur']);",
        },
        {
          kind: "step",
          id: "js-3-6",
          title: "Destructuring",
          explanation:
            "Destructuring mengambil beberapa nilai sekaligus: `const { nama, umur } = user`. Sangat sering dipakai untuk props di React dan hasil API. Untuk array, urutannya yang menentukan: `const [pertama, kedua] = arr`. Nama variabel pada object harus **cocok dengan nama key**.",
          example: {
            code: "const produk = { nama: 'Kopi', harga: 85000, stok: 4 };\n\n// cara panjang\nconst nama1 = produk.nama;\n\n// destructuring: ambil beberapa sekaligus\nconst { nama, harga } = produk;\nconsole.log(nama, harga);\n\n// array pakai urutan, bukan nama\nconst [pertama, kedua] = ['a', 'b'];\nconsole.log(pertama, kedua);",
            output: "Kopi 85000\na b",
            note: "Untuk object, nama variabel HARUS sama dengan nama key. Untuk array, yang menentukan adalah posisinya.",
          },
          instruction:
            "Ambil `nama` dan `kota` dari object `user` memakai destructuring, lalu tampilkan keduanya.",
          starterCode:
            "const user = { nama: 'Bimo', umur: 20, kota: 'Jakarta' };\n\n",
          language: "js",
          tests: [
            {
              pattern:
                "const\\s*\\{\\s*nama\\s*,\\s*kota\\s*\\}\\s*=\\s*user|const\\s*\\{\\s*kota\\s*,\\s*nama\\s*\\}\\s*=\\s*user",
              message:
                "Gunakan const { nama, kota } = user; untuk mengambil keduanya sekaligus.",
            },
            {
              pattern: "console\\.log\\(\\s*nama",
              message: "Tampilkan nama.",
            },
            {
              pattern: "kota\\s*\\)|,\\s*kota",
              message: "Tampilkan juga kota.",
            },
          ],
          solution:
            "const user = { nama: 'Bimo', umur: 20, kota: 'Jakarta' };\n\nconst { nama, kota } = user;\nconsole.log(nama);\nconsole.log(kota);",
        },
        {
          kind: "step",
          id: "js-3-7",
          title: "Spread: menyalin tanpa merusak",
          explanation:
            "Ini bab paling penting dalam modul ini. `const b = a` **bukan** menyalin object — keduanya menunjuk ke data yang sama, jadi mengubah `b` juga mengubah `a`. Inilah 'kenapa object saya berubah sendiri'. Spread (`...`) membuat salinan baru: `const b = { ...a }`. React sangat bergantung pada ini karena ia mendeteksi perubahan dari identitas object, bukan isinya.",
          example: {
            code: "const asli = { nama: 'Kopi', stok: 5 };\n\n// ❌ BUKAN salinan — dua nama untuk data yang SAMA\nconst salah = asli;\nsalah.stok = 99;\nconsole.log(asli.stok);      // ikut berubah!\n\n// ✅ salinan sungguhan\nconst benar = { ...asli, stok: 1 };\nconsole.log(asli.stok, benar.stok);",
            output: "99\n99 1",
            note: "Spread menyalin isi ke object BARU. Properti yang ditulis SETELAH ...asli akan menimpa nilai aslinya.",
          },
          instruction:
            "Buat `const userBaru` yang merupakan salinan `user` dengan `umur` diubah menjadi `21`, memakai spread. Tampilkan `user` dan `userBaru` untuk membuktikan aslinya tidak berubah.",
          starterCode: "const user = { nama: 'Bimo', umur: 20 };\n\n",
          language: "js",
          tests: [
            {
              pattern:
                "const\\s+userBaru\\s*=\\s*\\{\\s*\\.\\.\\.\\s*user",
              message:
                "Gunakan const userBaru = { ...user, ... } untuk menyalin.",
            },
            {
              pattern: "umur\\s*:\\s*21",
              message: "Timpa umur menjadi 21 setelah spread.",
            },
            {
              pattern: "console\\.log\\(\\s*user\\s*\\)",
              message: "Tampilkan console.log(user);",
            },
            {
              pattern: "console\\.log\\(\\s*userBaru\\s*\\)",
              message: "Tampilkan console.log(userBaru);",
            },
          ],
          solution:
            "const user = { nama: 'Bimo', umur: 20 };\n\nconst userBaru = { ...user, umur: 21 };\nconsole.log(user);\nconsole.log(userBaru);",
        },
        {
          kind: "step",
          id: "js-3-8",
          title: "find dan includes",
          explanation:
            "`find` mengembalikan **elemen pertama** yang cocok (atau `undefined` kalau tidak ada) — berbeda dari `filter` yang selalu mengembalikan array. `includes` mengembalikan true/false untuk keberadaan nilai sederhana. Memilih method yang tepat membuat maksud kode langsung terbaca.",
          example: {
            code: "const produk = [\n  { kode: 'A1', nama: 'Kopi' },\n  { kode: 'B2', nama: 'Teh' },\n];\n\nconsole.log(produk.find((p) => p.kode === 'B2'));    // satu object\nconsole.log(produk.filter((p) => p.kode === 'B2'));  // array berisi satu\nconsole.log(produk.find((p) => p.kode === 'ZZ'));    // tidak ditemukan\nconsole.log(['a', 'b'].includes('c'));",
            output: '{"kode":"B2","nama":"Teh"}\n[{"kode":"B2","nama":"Teh"}]\nundefined\nfalse',
            note: "find memberi undefined kalau tidak ketemu — selalu periksa dulu sebelum mengakses propertinya, agar tidak TypeError.",
          },
          instruction:
            "Dari array `users`, cari user dengan `id === 2` memakai `find` dan tampilkan hasilnya. Lalu tampilkan hasil `['a','b'].includes('b')`.",
          starterCode:
            "const users = [\n  { id: 1, nama: 'Ana' },\n  { id: 2, nama: 'Budi' },\n];\n\n",
          language: "js",
          tests: [
            {
              pattern: "users\\.find\\(",
              message: "Gunakan users.find(...).",
            },
            {
              pattern: "id\\s*===\\s*2",
              message: "Kondisinya: u.id === 2",
            },
            {
              pattern: "\\.includes\\(\\s*['\"]b['\"]\\s*\\)",
              message: "Tampilkan juga ['a','b'].includes('b').",
            },
          ],
          solution:
            "const users = [\n  { id: 1, nama: 'Ana' },\n  { id: 2, nama: 'Budi' },\n];\n\nconst hasil = users.find((u) => u.id === 2);\nconsole.log(hasil);\nconsole.log(['a', 'b'].includes('b'));",
        },
        {
          kind: "quiz",
          id: "js-3-kuis",
          title: "Kuis: Array & Object",
          questions: [
            {
              id: "q1",
              type: "prediksi-output",
              question: "Apa isi array a setelah kode ini dijalankan?",
              code: "const a = { n: 1 };\nconst b = a;\nb.n = 99;\nconsole.log(a.n);",
              acceptedAnswers: ["99"],
              explanation:
                "99. const b = a tidak menyalin object — keduanya menunjuk ke data yang SAMA di memori, jadi mengubah b juga mengubah a. Untuk menyalin gunakan { ...a }. Ini penyebab bug 'data saya berubah sendiri' yang paling sering terjadi.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Kamu perlu mengubah array [1,2,3] menjadi [2,4,6]. Method apa yang tepat?",
              choices: ["filter", "map", "reduce", "find"],
              answerIndex: 1,
              explanation:
                "map — ia mengubah setiap elemen dan mengembalikan array baru dengan panjang sama. filter untuk menyaring (panjang bisa berkurang), reduce untuk meringkas jadi satu nilai, find untuk mengambil satu elemen.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Apa perbedaan find dan filter?",
              choices: [
                "Tidak ada, hanya nama berbeda",
                "find mengembalikan elemen pertama yang cocok (atau undefined), filter mengembalikan array berisi semua yang cocok",
                "find hanya untuk angka",
                "filter hanya mengembalikan satu elemen",
              ],
              answerIndex: 1,
              explanation:
                "find memberi satu elemen (atau undefined), filter selalu memberi array (bisa kosong). Kesalahan umum: memakai filter lalu mengambil [0], padahal find lebih tepat dan lebih jelas maksudnya.",
            },
            {
              id: "q4",
              type: "prediksi-output",
              question: "Apa yang ditampilkan kode ini?",
              code: "const angka = [1, 2, 3, 4];\nconst hasil = angka.reduce((a, b) => a + b, 0);\nconsole.log(hasil);",
              acceptedAnswers: ["10"],
              explanation:
                "10. reduce menjumlahkan seluruh elemen dimulai dari nilai awal 0: 0+1+2+3+4 = 10. Nilai awal (argumen kedua) penting — tanpa itu, reduce pada array kosong akan melempar TypeError.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Kenapa React sangat menganjurkan update state secara immutable (dengan spread) daripada mengubah object langsung?",
              choices: [
                "Karena mutasi langsung tidak diizinkan JavaScript",
                "Karena React mendeteksi perubahan dengan membandingkan identitas object — kalau object-nya sama, React menganggap tidak ada perubahan dan tidak me-render ulang",
                "Karena spread lebih cepat dieksekusi",
                "Karena aturan ESLint saja",
              ],
              answerIndex: 1,
              explanation:
                "React membandingkan referensi (===), bukan isi. Kalau kamu memutasi object yang sama, referensinya tidak berubah sehingga React tidak tahu perlu me-render ulang — UI tidak terupdate meski data sudah berubah. Membuat object baru dengan spread memberi referensi baru.",
            },
          ],
        },
      ],
    },
    {
      slug: "dom",
      title: "DOM: JavaScript Bertemu HTML",
      description:
        "Membuat halaman hidup: seleksi elemen, event, dan manipulasi.",
      topics: [
        "document.querySelector & querySelectorAll",
        "Mengubah teks, atribut, class (classList), dan style",
        "createElement, append, remove — membangun UI dari data",
        "addEventListener: click, input, submit",
        "Event object, preventDefault, dan event delegation",
        "Form handling: membaca nilai & validasi custom",
        "dataset (data-* attribute)",
        "Merender list dari array — pola dasar semua framework",
      ],
      items: [
        {
          kind: "step",
          id: "js-4-1",
          title: "querySelector",
          explanation:
            "`document.querySelector` mencari elemen memakai **selector CSS** — jadi pengetahuan CSS-mu langsung terpakai. Ia mengembalikan elemen **pertama** yang cocok, atau `null` kalau tidak ada. Menyentuh properti dari `null` inilah penyebab error paling sering: `Cannot read properties of null`.",
          example: {
            code: "// selector CSS yang sama seperti di stylesheet\nconst kotak = document.querySelector('.teks');    // class\nconst semua = document.querySelectorAll('p');     // SEMUA yang cocok\n\nconsole.log(kotak.textContent);\nconsole.log(semua.length);",
            output: "Paragraf\n1",
            note: "querySelector → satu elemen pertama. querySelectorAll → daftar semua. Kalau tidak ketemu, querySelector memberi null.",
          },
          instruction:
            "Ambil elemen `<h1 id=\"judul\">` dengan `querySelector('#judul')`, simpan di `const judul`, lalu tampilkan `judul.textContent`.",
          starterCode: "",
          language: "js",
          previewHtml:
            '<h1 id="judul">Judul Asli</h1>\n<p class="teks">Paragraf</p>',
          tests: [
            {
              pattern:
                "const\\s+judul\\s*=\\s*document\\.querySelector\\(\\s*['\"]#judul['\"]\\s*\\)",
              message:
                "Buat const judul = document.querySelector('#judul');",
            },
            {
              pattern: "console\\.log\\(\\s*judul\\.textContent\\s*\\)",
              message: "Tampilkan console.log(judul.textContent);",
            },
          ],
          solution:
            "const judul = document.querySelector('#judul');\nconsole.log(judul.textContent);",
        },
        {
          kind: "step",
          id: "js-4-2",
          title: "Mengubah teks dan style",
          explanation:
            "`textContent` mengubah teks dengan aman. Hindari `innerHTML` untuk data dari pengguna — string yang mengandung tag akan dieksekusi sebagai HTML, dan itulah celah **XSS**. Untuk styling, jangan atur satu-satu lewat `style`; lebih baik `classList.add()` dengan class yang sudah didefinisikan di CSS.",
          example: {
            code: "const el = document.querySelector('h1');\n\nel.textContent = 'Teks Baru';       // aman\nel.classList.add('terpilih');       // tambah class\nel.classList.remove('lama');        // hapus class\nel.classList.toggle('buka');        // ada→hapus, tidak ada→tambah",
            output:
              "Teks judul berganti, dan class-nya berubah sehingga aturan CSS yang sesuai langsung berlaku.",
            note: "Cara profesional: JavaScript hanya mengganti class, CSS yang mengatur tampilannya. Hindari mengatur el.style satu-satu.",
          },
          instruction:
            "Ubah `textContent` elemen `#judul` menjadi `'Judul Baru'` dan tambahkan class `aktif` memakai `classList.add`.",
          starterCode: "const judul = document.querySelector('#judul');\n\n",
          language: "js",
          previewHtml:
            '<style>.aktif { color: green; text-decoration: underline; }</style>\n<h1 id="judul">Judul Asli</h1>',
          tests: [
            {
              pattern:
                "judul\\.textContent\\s*=\\s*['\"]Judul Baru['\"]",
              message: "Atur judul.textContent = 'Judul Baru';",
            },
            {
              pattern: "judul\\.classList\\.add\\(\\s*['\"]aktif['\"]\\s*\\)",
              message: "Tambahkan judul.classList.add('aktif');",
            },
          ],
          solution:
            "const judul = document.querySelector('#judul');\n\njudul.textContent = 'Judul Baru';\njudul.classList.add('aktif');",
        },
        {
          kind: "step",
          id: "js-4-3",
          title: "addEventListener",
          explanation:
            "`addEventListener('click', fn)` menghubungkan aksi pengguna ke fungsi. Perhatikan: kirim **referensi fungsi**, bukan hasil pemanggilannya — `addEventListener('click', fn())` salah karena fungsinya langsung dijalankan sekali lalu hasilnya (biasanya `undefined`) yang dipasang.",
          example: {
            code: "const btn = document.querySelector('button');\n\n// ✅ kirim referensi fungsi\nbtn.addEventListener('click', () => {\n  console.log('Diklik!');\n});\n\n// ❌ ini salah: fungsi langsung jalan sekali\n// btn.addEventListener('click', sapa());",
            output: "Setiap kali tombol diklik, muncul 'Diklik!' di panel output.",
            note: "Event lain yang sering dipakai: 'input' (tiap ketikan), 'change', 'submit', 'keydown'.",
          },
          instruction:
            "Pasang event listener `click` pada `#tombol` yang menampilkan `'Tombol diklik'` lewat console.log.",
          starterCode:
            "const tombol = document.querySelector('#tombol');\n\n",
          language: "js",
          previewHtml: '<button id="tombol">Klik aku</button>',
          tests: [
            {
              pattern:
                "tombol\\.addEventListener\\(\\s*['\"]click['\"]\\s*,",
              message:
                "Gunakan tombol.addEventListener('click', ...);",
            },
            {
              pattern: "console\\.log\\(\\s*['\"]Tombol diklik['\"]",
              message: "Di dalam handler, tampilkan 'Tombol diklik'.",
            },
          ],
          solution:
            "const tombol = document.querySelector('#tombol');\n\ntombol.addEventListener('click', () => {\n  console.log('Tombol diklik');\n});",
        },
        {
          kind: "step",
          id: "js-4-4",
          title: "Membaca input dan preventDefault",
          explanation:
            "Form secara default me-refresh halaman saat disubmit — itu perilaku HTML asli. Untuk menanganinya dengan JavaScript, panggil `event.preventDefault()`. Nilai input dibaca lewat properti `.value` (selalu berupa **string**, jadi angka perlu dikonversi dengan `Number()`).",
          example: {
            code: "const f = document.querySelector('form');\nconst kotak = document.querySelector('input');\n\nf.addEventListener('submit', (e) => {\n  e.preventDefault();               // tanpa ini halaman refresh\n  console.log(kotak.value);         // selalu string\n  console.log(Number(kotak.value)); // konversi kalau butuh angka\n});",
            output:
              "Saat form disubmit, isi input tampil di output dan halaman tidak berpindah.",
            note: "input.value SELALU string, bahkan pada type=\"number\". Jadi '5' + 1 menghasilkan '51', bukan 6.",
          },
          instruction:
            "Tangani submit form `#form`: cegah refresh dengan `e.preventDefault()`, lalu tampilkan nilai `#nama` lewat `.value`.",
          starterCode:
            "const form = document.querySelector('#form');\nconst input = document.querySelector('#nama');\n\n",
          language: "js",
          previewHtml:
            '<form id="form">\n  <input id="nama" placeholder="Nama kamu">\n  <button type="submit">Kirim</button>\n</form>',
          tests: [
            {
              pattern:
                "form\\.addEventListener\\(\\s*['\"]submit['\"]\\s*,",
              message: "Gunakan form.addEventListener('submit', ...);",
            },
            {
              pattern: "\\.preventDefault\\(\\s*\\)",
              message:
                "Panggil e.preventDefault() agar halaman tidak refresh.",
            },
            {
              pattern: "input\\.value",
              message: "Baca nilainya dengan input.value",
            },
          ],
          solution:
            "const form = document.querySelector('#form');\nconst input = document.querySelector('#nama');\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  console.log(input.value);\n});",
        },
        {
          kind: "step",
          id: "js-4-5",
          title: "Merender list dari array",
          explanation:
            "Inilah pola inti semua framework modern, dan sekarang kamu melakukannya manual: ambil data → ubah jadi HTML → masukkan ke DOM. Setelah memahami ini, `map` di React akan terasa jelas sebagai versi otomatis dari apa yang kamu tulis di sini.",
          example: {
            code: "const data = ['Kopi', 'Teh'];\nconst ul = document.querySelector('ul');\n\ndata.forEach((nama) => {\n  const li = document.createElement('li');  // 1. buat elemen\n  li.textContent = nama;                    // 2. isi teksnya\n  ul.append(li);                            // 3. masukkan ke DOM\n});",
            output: "Muncul daftar berisi dua item: Kopi dan Teh.",
            note: "Tiga langkah ini pola universal: buat → isi → masukkan. React hanya mengotomatiskan proses yang sama.",
          },
          instruction:
            "Untuk setiap item di array `buah`, buat elemen `li` dengan `document.createElement`, isi `textContent`-nya, dan tambahkan ke `#daftar` dengan `append`.",
          starterCode:
            "const buah = ['apel', 'mangga', 'jeruk'];\nconst daftar = document.querySelector('#daftar');\n\n",
          language: "js",
          previewHtml: '<ul id="daftar"></ul>',
          tests: [
            {
              pattern:
                "buah\\.forEach\\(|for\\s*\\(\\s*const\\s+\\w+\\s+of\\s+buah|buah\\.map\\(",
              message:
                "Iterasi array buah (pakai forEach, for...of, atau map).",
            },
            {
              pattern:
                "document\\.createElement\\(\\s*['\"]li['\"]\\s*\\)",
              message: "Buat elemen dengan document.createElement('li').",
            },
            {
              pattern: "\\.textContent\\s*=",
              message: "Isi teksnya lewat .textContent = ...",
            },
            {
              pattern: "daftar\\.append(Child)?\\(",
              message:
                "Tambahkan ke DOM dengan daftar.append(li) atau appendChild.",
            },
          ],
          solution:
            "const buah = ['apel', 'mangga', 'jeruk'];\nconst daftar = document.querySelector('#daftar');\n\nbuah.forEach((nama) => {\n  const li = document.createElement('li');\n  li.textContent = nama;\n  daftar.append(li);\n});",
        },
        {
          kind: "step",
          id: "js-4-6",
          title: "Event delegation",
          explanation:
            "Kalau daftarmu punya 100 tombol, memasang 100 listener itu pemborosan — dan tombol yang ditambahkan **setelah** listener dipasang tidak akan berfungsi. Solusinya: pasang **satu** listener di parent, lalu periksa `event.target` untuk tahu elemen mana yang diklik. Ini pertanyaan interview yang sering muncul.",
          example: {
            code: "const tabel = document.querySelector('table');\n\n// SATU listener untuk semua baris, termasuk yang ditambah nanti\ntabel.addEventListener('click', (e) => {\n  if (e.target.tagName === 'TD') {\n    console.log('Sel diklik: ' + e.target.textContent);\n  }\n});",
            output: "Mengklik sel mana pun menampilkan isinya, tanpa perlu listener per sel.",
            note: "e.target = elemen yang benar-benar diklik. Periksa dulu jenisnya, karena klik bisa mendarat di elemen lain.",
          },
          instruction:
            "Pasang satu listener `click` di `#daftar`, lalu di dalamnya periksa `e.target` dan tampilkan `e.target.textContent`.",
          starterCode:
            "const daftar = document.querySelector('#daftar');\n\n",
          language: "js",
          previewHtml:
            '<ul id="daftar">\n  <li>Apel</li>\n  <li>Mangga</li>\n  <li>Jeruk</li>\n</ul>\n<small>Klik salah satu item</small>',
          tests: [
            {
              pattern:
                "daftar\\.addEventListener\\(\\s*['\"]click['\"]\\s*,",
              message:
                "Pasang listener di parent: daftar.addEventListener('click', ...);",
            },
            {
              pattern: "e\\.target|event\\.target",
              message:
                "Gunakan e.target untuk mengetahui elemen mana yang diklik.",
            },
            {
              pattern: "\\.target\\.textContent",
              message: "Tampilkan e.target.textContent",
            },
          ],
          solution:
            "const daftar = document.querySelector('#daftar');\n\ndaftar.addEventListener('click', (e) => {\n  if (e.target.tagName === 'LI') {\n    console.log(e.target.textContent);\n  }\n});",
        },
        {
          kind: "quiz",
          id: "js-4-kuis",
          title: "Kuis: DOM",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kamu mendapat error 'Cannot read properties of null (reading textContent)'. Apa penyebab paling mungkin?",
              choices: [
                "textContent sudah tidak didukung",
                "querySelector tidak menemukan elemen (selector salah, atau script jalan sebelum elemen ada di DOM)",
                "Elemennya tidak punya class",
                "Harus memakai innerHTML",
              ],
              answerIndex: 1,
              explanation:
                "querySelector mengembalikan null saat tidak menemukan apa pun. Dua penyebab umum: selector salah tulis, atau <script> diletakkan di <head> sehingga berjalan sebelum elemen dibuat. Solusi: taruh script sebelum </body> atau pakai defer.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Kenapa sebaiknya menghindari innerHTML untuk menampilkan data dari pengguna?",
              choices: [
                "Karena innerHTML lebih lambat",
                "Karena tag di dalam string akan dieksekusi sebagai HTML — celah serangan XSS",
                "Karena innerHTML tidak bisa mengubah teks",
                "Karena innerHTML sudah dihapus dari browser modern",
              ],
              answerIndex: 1,
              explanation:
                "innerHTML mem-parse string sebagai HTML, sehingga input berbahaya bisa menyisipkan script atau elemen berbahaya (XSS). textContent memperlakukan semuanya sebagai teks biasa — aman secara default.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa yang salah dengan kode ini?",
              code: "tombol.addEventListener('click', sapa());",
              choices: [
                "Nama event harus 'onclick'",
                "sapa() langsung dijalankan saat pemasangan; yang terpasang adalah nilai kembaliannya, bukan fungsinya",
                "Harus memakai tanda kutip ganda",
                "Tidak ada yang salah",
              ],
              answerIndex: 1,
              explanation:
                "Tanda kurung memanggil fungsi seketika. Yang benar adalah mengirim referensinya: addEventListener('click', sapa) tanpa kurung, atau membungkusnya: () => sapa().",
            },
            {
              id: "q4",
              type: "isian",
              question:
                "Method apa yang dipanggil pada event agar form tidak me-refresh halaman saat disubmit? (tulis nama methodnya)",
              acceptedAnswers: ["preventDefault", "preventDefault()", "e.preventDefault()"],
              explanation:
                "e.preventDefault() membatalkan perilaku default browser (mengirim form dan memuat ulang halaman), sehingga kamu bisa menanganinya sendiri dengan JavaScript.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Kamu menambahkan item baru ke daftar lewat JavaScript, tapi item baru itu tidak merespons klik padahal item lama bisa. Apa solusinya?",
              choices: [
                "Memasang ulang listener setiap kali item ditambahkan",
                "Event delegation: pasang satu listener di elemen parent dan periksa e.target",
                "Memakai innerHTML",
                "Menambahkan atribut onclick di HTML",
              ],
              answerIndex: 1,
              explanation:
                "Listener hanya terpasang pada elemen yang ada saat kode dijalankan. Event delegation memasang satu listener di parent yang sudah ada, sehingga elemen baru otomatis tertangani lewat event bubbling — sekaligus lebih hemat memori.",
            },
          ],
        },
      ],
    },
    {
      slug: "es6-modern",
      title: "JavaScript Modern (ES6+)",
      description:
        "Sintaks yang dipakai codebase modern — wajib lancar sebelum React.",
      topics: [
        "Module: import/export, default vs named",
        "Optional chaining (?.) & nullish coalescing (??)",
        "Short-circuit && || untuk conditional",
        "Enhanced object literal & computed property",
        "Array/object method modern: at, flat, structuredClone",
        "Iterator & generator (pengenalan)",
        "Tooling ringkas: npm, bundler, dan kenapa mereka ada",
      ],
      items: [
        {
          kind: "step",
          id: "js-5-1",
          title: "Optional chaining (?.)",
          explanation:
            "Data dari API sering tidak lengkap. `user.alamat.kota` akan melempar error kalau `alamat` tidak ada. `user.alamat?.kota` menghentikan evaluasi dan mengembalikan `undefined` alih-alih error. Ini menggantikan rantai pemeriksaan `user && user.alamat && user.alamat.kota` yang panjang.",
          example: {
            code: "const data = { profil: { nama: 'Ana' } };\n\nconsole.log(data.profil?.nama);      // ada\nconsole.log(data.toko?.nama);        // toko tidak ada → undefined\n// console.log(data.toko.nama);      // ❌ TypeError, aplikasi berhenti",
            output: "Ana\nundefined",
            note: "Tanda ? diletakkan SEBELUM titik pada bagian yang mungkin tidak ada. Bisa dirantai: a?.b?.c",
          },
          instruction:
            "Tampilkan `user.alamat?.kota` dan `user.kontak?.email` — perhatikan yang tidak ada menghasilkan undefined, bukan error.",
          starterCode:
            "const user = { nama: 'Bimo', alamat: { kota: 'Jakarta' } };\n\n",
          language: "js",
          tests: [
            {
              pattern: "user\\.alamat\\?\\.kota",
              message: "Tampilkan user.alamat?.kota",
            },
            {
              pattern: "user\\.kontak\\?\\.email",
              message:
                "Tampilkan user.kontak?.email — properti kontak sengaja tidak ada.",
            },
          ],
          solution:
            "const user = { nama: 'Bimo', alamat: { kota: 'Jakarta' } };\n\nconsole.log(user.alamat?.kota);\nconsole.log(user.kontak?.email);",
        },
        {
          kind: "step",
          id: "js-5-2",
          title: "Nullish coalescing (??)",
          explanation:
            "`??` mengembalikan sisi kanan **hanya jika** sisi kiri `null` atau `undefined`. Bedanya dengan `||` sangat penting: `0 || 10` menghasilkan `10` (karena 0 falsy), sedangkan `0 ?? 10` menghasilkan `0`. Untuk nilai yang boleh nol — jumlah stok, harga diskon, skor — `??` adalah pilihan yang benar.",
          example: {
            code: "const diskon = 0;\nconst nama = null;\n\nconsole.log(diskon ?? 100);   // 0 bukan null → pakai 0\nconsole.log(diskon || 100);   // 0 falsy → ditimpa jadi 100\nconsole.log(nama ?? 'Tamu');  // null → pakai fallback",
            output: "0\n100\nTamu",
            note: "?? hanya peduli null/undefined. || peduli semua nilai falsy (termasuk 0, '', false) — sering keliru untuk angka.",
          },
          instruction:
            "Tampilkan hasil `stok ?? 10` dan `stok || 10` untuk `const stok = 0`, lalu bandingkan hasilnya di output.",
          starterCode: "const stok = 0;\n\n",
          language: "js",
          tests: [
            {
              pattern: "console\\.log\\(\\s*stok\\s*\\?\\?\\s*10\\s*\\)",
              message: "Tampilkan console.log(stok ?? 10);",
            },
            {
              pattern: "console\\.log\\(\\s*stok\\s*\\|\\|\\s*10\\s*\\)",
              message: "Tampilkan juga console.log(stok || 10);",
            },
          ],
          solution:
            "const stok = 0;\n\nconsole.log(stok ?? 10);\nconsole.log(stok || 10);",
        },
        {
          kind: "step",
          id: "js-5-3",
          title: "Rest parameter",
          explanation:
            "`...angka` di parameter mengumpulkan **semua argumen sisanya** menjadi array. Berbeda dari spread yang menyebar, rest mengumpulkan — sintaksnya sama, arah kerjanya berlawanan. Berguna untuk fungsi yang menerima jumlah argumen bebas.",
          example: {
            code: "function gabung(pemisah, ...kata) {\n  // kata sekarang berupa array\n  return kata.join(pemisah);\n}\n\nconsole.log(gabung('-', 'a', 'b', 'c'));\nconsole.log(gabung('-', 'x'));",
            output: "a-b-c\nx",
            note: "Rest parameter harus jadi parameter TERAKHIR. Ia mengumpulkan semua argumen sisa menjadi satu array.",
          },
          instruction:
            "Buat fungsi `jumlahkan(...angka)` yang mengembalikan total semua argumen memakai `reduce`. Tampilkan `jumlahkan(1, 2, 3, 4)`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern:
                "(function\\s+jumlahkan|const\\s+jumlahkan\\s*=)[\\s\\S]{0,30}\\.\\.\\.\\s*angka",
              message: "Buat fungsi jumlahkan(...angka).",
            },
            {
              pattern: "angka\\.reduce\\(",
              message: "Gunakan angka.reduce(...) untuk menjumlahkan.",
            },
            {
              pattern:
                "jumlahkan\\(\\s*1\\s*,\\s*2\\s*,\\s*3\\s*,\\s*4\\s*\\)",
              message: "Tampilkan jumlahkan(1, 2, 3, 4).",
            },
          ],
          solution:
            "function jumlahkan(...angka) {\n  return angka.reduce((a, b) => a + b, 0);\n}\n\nconsole.log(jumlahkan(1, 2, 3, 4));",
        },
        {
          kind: "step",
          id: "js-5-4",
          title: "Spread untuk array",
          explanation:
            "Spread juga bekerja pada array: `[...a, ...b]` menggabungkan tanpa mengubah aslinya. Ini penting untuk state di React — jangan pakai `push` yang memutasi array, tapi buat array baru. Menambahkan item: `[...daftar, itemBaru]`.",
          example: {
            code: "const lama = ['a', 'b'];\n\nconst tambahAkhir = [...lama, 'c'];\nconst tambahAwal  = ['z', ...lama];\nconst salinan     = [...lama];\n\nconsole.log(tambahAkhir);\nconsole.log(tambahAwal);\nconsole.log(lama);        // tetap utuh",
            output: '["a","b","c"]\n["z","a","b"]\n["a","b"]',
            note: "Posisi ... menentukan di mana isi array lama disisipkan. Aslinya tidak pernah berubah — berbeda dari push.",
          },
          instruction:
            "Gabungkan `a` dan `b` menjadi `const gabung` memakai spread, lalu buat `const tambah` yang berisi isi `a` plus angka `99` di akhir. Tampilkan keduanya.",
          starterCode: "const a = [1, 2];\nconst b = [3, 4];\n\n",
          language: "js",
          tests: [
            {
              pattern:
                "const\\s+gabung\\s*=\\s*\\[\\s*\\.\\.\\.\\s*a\\s*,\\s*\\.\\.\\.\\s*b\\s*\\]",
              message: "Buat const gabung = [...a, ...b];",
            },
            {
              pattern:
                "const\\s+tambah\\s*=\\s*\\[\\s*\\.\\.\\.\\s*a\\s*,\\s*99\\s*\\]",
              message: "Buat const tambah = [...a, 99];",
            },
            {
              pattern: "console\\.log\\(",
              message: "Tampilkan hasilnya dengan console.log.",
            },
          ],
          solution:
            "const a = [1, 2];\nconst b = [3, 4];\n\nconst gabung = [...a, ...b];\nconst tambah = [...a, 99];\nconsole.log(gabung);\nconsole.log(tambah);",
        },
        {
          kind: "step",
          id: "js-5-5",
          title: "Shorthand property dan computed key",
          explanation:
            "Kalau nama variabel sama dengan nama key, tulis sekali saja: `{ nama, umur }` alih-alih `{ nama: nama, umur: umur }`. Untuk key yang ditentukan saat runtime, pakai bracket: `{ [kunci]: nilai }` — sangat berguna saat membuat object dari input dinamis.",
          example: {
            code: "const judul = 'Kopi';\nconst stok = 3;\nconst field = 'kategori';\n\n// cara panjang\nconst a = { judul: judul, stok: stok };\n\n// shorthand + computed key\nconst b = { judul, stok, [field]: 'minuman' };\n\nconsole.log(b);",
            output: '{"judul":"Kopi","stok":3,"kategori":"minuman"}',
            note: "Shorthand hanya bisa kalau nama variabel = nama key. Bracket [] dipakai saat nama key-nya berasal dari variabel.",
          },
          instruction:
            "Buat `const user` memakai shorthand dari variabel `nama` dan `umur`, dan tambahkan satu properti dengan computed key `[kunci]` bernilai `'Jakarta'`. Tampilkan `user`.",
          starterCode:
            "const nama = 'Bimo';\nconst umur = 20;\nconst kunci = 'kota';\n\n",
          language: "js",
          tests: [
            {
              pattern:
                "const\\s+user\\s*=\\s*\\{[\\s\\S]*\\bnama\\b\\s*[,}]",
              message:
                "Gunakan shorthand: { nama, ... } tanpa menulis nama: nama.",
            },
            {
              pattern: "\\bumur\\b\\s*[,}]",
              message: "Tambahkan umur dengan shorthand juga.",
            },
            {
              pattern: "\\[\\s*kunci\\s*\\]\\s*:\\s*['\"]Jakarta['\"]",
              message:
                "Tambahkan computed key: [kunci]: 'Jakarta'",
            },
            {
              pattern: "console\\.log\\(\\s*user\\s*\\)",
              message: "Tampilkan console.log(user);",
            },
          ],
          solution:
            "const nama = 'Bimo';\nconst umur = 20;\nconst kunci = 'kota';\n\nconst user = { nama, umur, [kunci]: 'Jakarta' };\nconsole.log(user);",
        },
        {
          kind: "step",
          id: "js-5-6",
          title: "Module: import dan export",
          explanation:
            "Module memecah kode jadi file terpisah. `export` menyediakan, `import` memakai. Ada dua bentuk: **named export** (bisa banyak per file, nama harus cocok) dan **default export** (satu per file, nama saat import bebas). Konvensi umum: named export untuk utilitas, default untuk komponen utama file itu.",
          example: {
            code: "// ── file: hitung.js ──\nexport const PPN = 0.11;                 // named\nexport function pajak(x) { return x * PPN; }  // named\nexport default pajak;                    // default (satu per file)\n\n// ── file lain ──\n// import pajak, { PPN } from './hitung.js';\n// nama default bebas, nama named harus cocok",
            output:
              "hitung.js menyediakan tiga hal; file lain bisa mengimpor sebagian atau semuanya sesuai kebutuhan.",
            note: "Named export dibungkus kurung kurawal saat diimpor, default export tidak. Satu file maksimal satu default.",
          },
          instruction:
            "Tulis kode yang mengekspor fungsi `luas` sebagai named export DAN sebuah nilai sebagai default export. (Preview tidak menjalankan module, cukup tulis sintaksnya dengan benar.)",
          starterCode: "// tulis export di sini\n",
          language: "js",
          tests: [
            {
              pattern:
                "export\\s+(function\\s+luas|const\\s+luas)",
              message:
                "Buat named export: export function luas(...) atau export const luas = ...",
            },
            {
              pattern: "export\\s+default\\s+",
              message: "Tambahkan satu default export: export default ...",
            },
          ],
          solution:
            "export function luas(p, l) {\n  return p * l;\n}\n\nexport default luas;",
        },
        {
          kind: "quiz",
          id: "js-5-kuis",
          title: "Kuis: JavaScript Modern",
          questions: [
            {
              id: "q1",
              type: "prediksi-output",
              question: "Apa yang ditampilkan kode ini? (tulis angkanya)",
              code: "const stok = 0;\nconsole.log(stok ?? 10);",
              acceptedAnswers: ["0"],
              explanation:
                "0. Operator ?? hanya menggantikan nilai null atau undefined, dan 0 bukan keduanya. Kalau memakai || hasilnya 10 karena 0 bersifat falsy — perbedaan yang menentukan saat menangani angka, terutama nilai nol yang sah.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Data API kadang tidak menyertakan objek 'alamat'. Cara paling ringkas mengakses kota tanpa error?",
              choices: [
                "user.alamat.kota",
                "user.alamat?.kota",
                "user && user.alamat && user.alamat.kota (satu-satunya cara)",
                "typeof user.alamat.kota",
              ],
              answerIndex: 1,
              explanation:
                "Optional chaining (?.) menghentikan evaluasi dan menghasilkan undefined jika bagian sebelumnya null/undefined. Rantai && juga bekerja tapi jauh lebih panjang; ?. adalah cara modern yang standar.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Apa perbedaan rest (...) di parameter dan spread (...) saat memanggil?",
              choices: [
                "Tidak ada, sintaksnya identik dan fungsinya sama",
                "Rest mengumpulkan beberapa argumen menjadi array; spread menyebar array menjadi elemen/argumen terpisah",
                "Rest hanya untuk object, spread hanya untuk array",
                "Spread sudah usang",
              ],
              answerIndex: 1,
              explanation:
                "Sintaksnya sama (...) tapi arahnya berlawanan: di posisi parameter ia mengumpulkan (rest), di posisi pemanggilan atau literal ia menyebar (spread). Konteks penulisannya yang menentukan.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kenapa di React sebaiknya menambah item dengan [...daftar, baru] daripada daftar.push(baru)?",
              choices: [
                "Karena push tidak ada di JavaScript modern",
                "Karena push memutasi array yang sama sehingga referensinya tidak berubah dan React tidak me-render ulang",
                "Karena spread lebih cepat",
                "Karena push hanya bekerja pada angka",
              ],
              answerIndex: 1,
              explanation:
                "push mengubah array yang sudah ada — referensinya tetap sama, jadi React yang membandingkan referensi menganggap tidak ada perubahan. Spread membuat array baru dengan referensi baru sehingga perubahan terdeteksi.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Berapa banyak default export yang boleh ada dalam satu file module?",
              choices: [
                "Sebanyak yang dibutuhkan",
                "Tepat satu",
                "Maksimal dua",
                "Tidak boleh ada, hanya named export",
              ],
              answerIndex: 1,
              explanation:
                "Satu default export per file, sedangkan named export boleh banyak. Saat mengimpor default, nama variabelnya bebas; saat mengimpor named, namanya harus cocok (kecuali memakai 'as' untuk mengganti nama).",
            },
          ],
        },
      ],
    },
    {
      slug: "asynchronous",
      title: "Asynchronous & Fetch API",
      description:
        "Materi yang paling sering keluar di interview junior — dari callback hell sampai async/await.",
      topics: [
        "Event loop: kenapa JS tidak 'menunggu'",
        "setTimeout/setInterval & callback pattern",
        "Promise: then, catch, finally, chaining",
        "async/await & try/catch",
        "fetch: GET, POST, header, body JSON",
        "Menangani response: status code, ok, json()",
        "Promise.all / allSettled / race untuk request paralel",
        "Loading & error state — pola UI yang benar",
        "Konsumsi REST API publik nyata",
      ],
      items: [
        {
          kind: "step",
          id: "js-6-1",
          title: "setTimeout dan urutan eksekusi",
          explanation:
            "JavaScript **tidak menunggu**. `setTimeout` menjadwalkan fungsi untuk dijalankan nanti, lalu kode berikutnya langsung berjalan. Karena itu output kode ini bukan urut dari atas ke bawah — ini konsep pertama yang harus benar sebelum belajar Promise.",
          example: {
            code: "console.log('Mulai');\n\nsetTimeout(() => {\n  console.log('Ditunda 1 detik');\n}, 1000);\n\nsetTimeout(() => {\n  console.log('Ditunda 0 detik');\n}, 0);\n\nconsole.log('Selesai');",
            output: "Mulai\nSelesai\nDitunda 0 detik\nDitunda 1 detik",
            note: "Semua kode biasa (sinkron) selesai LEBIH DULU, baru callback setTimeout dijalankan — bahkan yang delay-nya 0.",
          },
          instruction:
            "Tampilkan `'Pertama'`, lalu `setTimeout` yang menampilkan `'Kedua'` setelah 0 ms, lalu `'Ketiga'`. Perhatikan urutan output yang muncul.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "console\\.log\\(\\s*['\"]Pertama['\"]\\s*\\)",
              message: "Tampilkan 'Pertama' terlebih dahulu.",
            },
            {
              pattern: "setTimeout\\(",
              message: "Gunakan setTimeout untuk 'Kedua'.",
            },
            {
              pattern: "console\\.log\\(\\s*['\"]Ketiga['\"]\\s*\\)",
              message: "Tampilkan 'Ketiga' setelah setTimeout.",
            },
          ],
          solution:
            "console.log('Pertama');\n\nsetTimeout(() => {\n  console.log('Kedua');\n}, 0);\n\nconsole.log('Ketiga');",
        },
        {
          kind: "step",
          id: "js-6-2",
          title: "Promise: janji hasil di masa depan",
          explanation:
            "Promise adalah object yang mewakili hasil yang **belum ada**. Ia punya tiga keadaan: pending, fulfilled (berhasil), rejected (gagal). `.then()` menangani keberhasilan, `.catch()` menangani kegagalan. Hampir semua API modern mengembalikan Promise.",
          example: {
            code: "const janji = new Promise((resolve, reject) => {\n  const berhasil = true;\n  setTimeout(() => {\n    if (berhasil) resolve('Data diterima');\n    else reject(new Error('Koneksi gagal'));\n  }, 400);\n});\n\njanji\n  .then((hasil) => console.log('OK: ' + hasil))\n  .catch((err) => console.log('Gagal: ' + err.message));",
            output: "OK: Data diterima",
            note: "resolve = berhasil (masuk .then), reject = gagal (masuk .catch). Satu Promise hanya selesai sekali.",
          },
          instruction:
            "Buat Promise yang `resolve('Sukses')` setelah 500 ms, lalu tangani dengan `.then()` untuk menampilkan hasilnya.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "new\\s+Promise\\(",
              message: "Buat new Promise((resolve) => { ... });",
            },
            {
              pattern: "resolve\\(\\s*['\"]Sukses['\"]\\s*\\)",
              message: "Panggil resolve('Sukses') di dalamnya.",
            },
            {
              pattern: "\\.then\\(",
              message: "Tangani hasilnya dengan .then(...)",
            },
          ],
          solution:
            "const janji = new Promise((resolve) => {\n  setTimeout(() => resolve('Sukses'), 500);\n});\n\njanji.then((hasil) => {\n  console.log(hasil);\n});",
        },
        {
          kind: "step",
          id: "js-6-3",
          title: "async/await",
          explanation:
            "`async/await` adalah cara menulis Promise agar terlihat berurutan seperti kode biasa — jauh lebih mudah dibaca daripada rantai `.then()`. Dua aturan: `await` hanya bisa dipakai di dalam fungsi `async`, dan fungsi `async` **selalu** mengembalikan Promise.",
          example: {
            code: "const tunggu = (ms) =>\n  new Promise((r) => setTimeout(() => r('selesai ' + ms + 'ms'), ms));\n\n// dengan .then (bertingkat)\ntunggu(200).then((a) => console.log(a));\n\n// dengan async/await (rata, mudah dibaca)\nasync function jalan() {\n  const hasil = await tunggu(400);\n  console.log(hasil);\n}\njalan();",
            output: "selesai 200ms\nselesai 400ms",
            note: "await 'menunggu' Promise selesai lalu memberi nilainya langsung. Hanya boleh dipakai di dalam fungsi async.",
          },
          instruction:
            "Buat fungsi `async function ambilData()` yang `await` sebuah Promise lalu menampilkan hasilnya, dan panggil fungsinya.",
          starterCode:
            "const janji = new Promise((resolve) => {\n  setTimeout(() => resolve('Data siap'), 300);\n});\n\n",
          language: "js",
          tests: [
            {
              pattern:
                "async\\s+function\\s+ambilData|const\\s+ambilData\\s*=\\s*async",
              message: "Buat async function ambilData() { ... }",
            },
            {
              pattern: "await\\s+janji",
              message: "Gunakan await janji di dalam fungsi async.",
            },
            {
              pattern: "ambilData\\(\\s*\\)",
              message: "Panggil ambilData();",
            },
          ],
          solution:
            "const janji = new Promise((resolve) => {\n  setTimeout(() => resolve('Data siap'), 300);\n});\n\nasync function ambilData() {\n  const hasil = await janji;\n  console.log(hasil);\n}\n\nambilData();",
        },
        {
          kind: "step",
          id: "js-6-4",
          title: "fetch: mengambil data dari API",
          explanation:
            "`fetch` mengembalikan Promise berisi object Response — perhatikan bahwa datanya belum siap, perlu `await res.json()` sebagai langkah kedua. **Jebakan penting:** fetch **tidak** melempar error untuk status 404 atau 500; ia hanya gagal saat jaringan bermasalah. Karena itu kamu harus memeriksa `res.ok` sendiri.",
          example: {
            code: "async function ambilUser() {\n  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');\n\n  console.log(res.status);   // 200\n  console.log(res.ok);       // true kalau status 200-299\n\n  if (!res.ok) return;       // WAJIB diperiksa sendiri\n\n  const data = await res.json();   // langkah kedua\n  console.log(data.name);\n}\n\nambilUser();",
            output: "200\ntrue\nLeanne Graham",
            note: "Dua langkah: fetch dapat Response, lalu res.json() dapat datanya. Status 404 TIDAK otomatis error.",
          },
          instruction:
            "Buat fungsi async yang fetch `https://jsonplaceholder.typicode.com/todos/1`, periksa `res.ok`, ambil `await res.json()`, dan tampilkan hasilnya.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "await\\s+fetch\\(",
              message: "Gunakan await fetch(url).",
            },
            {
              pattern: "res\\.ok|response\\.ok",
              message:
                "Periksa res.ok — fetch tidak otomatis gagal pada status 404/500.",
            },
            {
              pattern: "await\\s+res\\.json\\(\\s*\\)|await\\s+response\\.json\\(",
              message: "Ambil datanya dengan await res.json().",
            },
            {
              pattern: "console\\.log\\(",
              message: "Tampilkan hasilnya.",
            },
          ],
          solution:
            "async function ambil() {\n  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');\n  if (!res.ok) {\n    console.log('Gagal: ' + res.status);\n    return;\n  }\n  const data = await res.json();\n  console.log(data);\n}\n\nambil();",
        },
        {
          kind: "step",
          id: "js-6-5",
          title: "try/catch pada async",
          explanation:
            "Kode async yang gagal tanpa `try/catch` menghasilkan *unhandled rejection* — aplikasi bisa diam tanpa pesan, dan pengguna melihat layar kosong tanpa tahu apa yang terjadi. Pola produksi selalu: `try` untuk alur normal, `catch` untuk kegagalan, dan beri pesan yang bermanfaat.",
          example: {
            code: "async function muat() {\n  try {\n    const res = await fetch('https://alamat-palsu-xyz.test/data');\n    const data = await res.json();\n    console.log(data);\n  } catch (error) {\n    console.log('Gagal memuat: ' + error.message);\n  } finally {\n    console.log('Loading dimatikan');   // selalu jalan\n  }\n}\n\nmuat();",
            output: "Gagal memuat: Failed to fetch\nLoading dimatikan",
            note: "finally selalu dijalankan, berhasil maupun gagal — di situlah tempat mematikan indikator loading.",
          },
          instruction:
            "Bungkus fetch ke URL yang tidak valid dengan `try/catch`, dan di `catch` tampilkan pesan error memakai `error.message`.",
          starterCode: "async function ambil() {\n  \n}\n\nambil();",
          language: "js",
          tests: [
            {
              pattern: "try\\s*\\{",
              message: "Tambahkan blok try { ... }",
            },
            {
              pattern: "catch\\s*\\(\\s*\\w+\\s*\\)\\s*\\{",
              message: "Tambahkan blok catch (error) { ... }",
            },
            {
              pattern: "await\\s+fetch\\(",
              message: "Di dalam try, lakukan await fetch(...).",
            },
            {
              pattern: "\\.message",
              message: "Di catch, tampilkan error.message.",
            },
          ],
          solution:
            "async function ambil() {\n  try {\n    const res = await fetch('https://domain-tidak-ada-12345.test/data');\n    const data = await res.json();\n    console.log(data);\n  } catch (error) {\n    console.log('Terjadi kesalahan: ' + error.message);\n  }\n}\n\nambil();",
        },
        {
          kind: "step",
          id: "js-6-6",
          title: "Promise.all: request paralel",
          explanation:
            "Kalau kamu `await` tiga request berurutan, totalnya adalah jumlah semua waktunya. `Promise.all` menjalankannya **bersamaan**, sehingga total hanya selama yang paling lambat. Catatan penting: kalau satu gagal, semuanya gagal — pakai `Promise.allSettled` bila kamu ingin tetap mendapat hasil yang berhasil.",
          example: {
            code: "const t = (ms, label) =>\n  new Promise((r) => setTimeout(() => r(label), ms));\n\nasync function jalan() {\n  // ❌ berurutan: total 300 + 300 = 600ms\n  // const a = await t(300, 'A');\n  // const b = await t(300, 'B');\n\n  // ✅ paralel: total hanya ~300ms\n  const [a, b] = await Promise.all([t(300, 'A'), t(300, 'B')]);\n  console.log(a, b);\n}\n\njalan();",
            output: "A B",
            note: "Hasilnya array dengan urutan sesuai input (bukan urutan selesai), jadi bisa langsung di-destructuring.",
          },
          instruction:
            "Gunakan `Promise.all` untuk menunggu dua Promise (`a` dan `b`) sekaligus, lalu tampilkan hasilnya.",
          starterCode:
            "const a = new Promise((r) => setTimeout(() => r('A'), 300));\nconst b = new Promise((r) => setTimeout(() => r('B'), 200));\n\nasync function jalan() {\n  \n}\n\njalan();",
          language: "js",
          tests: [
            {
              pattern:
                "await\\s+Promise\\.all\\(\\s*\\[\\s*a\\s*,\\s*b\\s*\\]\\s*\\)",
              message: "Gunakan await Promise.all([a, b]);",
            },
            {
              pattern: "console\\.log\\(",
              message: "Tampilkan hasilnya.",
            },
          ],
          solution:
            "const a = new Promise((r) => setTimeout(() => r('A'), 300));\nconst b = new Promise((r) => setTimeout(() => r('B'), 200));\n\nasync function jalan() {\n  const hasil = await Promise.all([a, b]);\n  console.log(hasil);\n}\n\njalan();",
        },
        {
          kind: "quiz",
          id: "js-6-kuis",
          title: "Kuis: Asynchronous & Fetch",
          questions: [
            {
              id: "q1",
              type: "prediksi-output",
              question:
                "Urutan output kode ini apa? (tulis ketiganya dipisah spasi)",
              code: "console.log('A');\nsetTimeout(() => console.log('B'), 0);\nconsole.log('C');",
              acceptedAnswers: ["A C B", "A, C, B", "a c b"],
              explanation:
                "A C B. Meski delay-nya 0 ms, callback setTimeout masuk ke task queue dan baru dijalankan setelah seluruh kode sinkron selesai. Ini demonstrasi paling ringkas dari cara kerja event loop.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "fetch ke URL yang mengembalikan status 404. Apakah blok catch akan berjalan?",
              choices: [
                "Ya, semua status error masuk ke catch",
                "Tidak — fetch hanya reject saat kegagalan jaringan, jadi kamu harus memeriksa res.ok sendiri",
                "Ya, tapi hanya untuk status 500",
                "Tergantung browser",
              ],
              answerIndex: 1,
              explanation:
                "Ini jebakan fetch yang paling sering menjatuhkan pemula. Response 404/500 dianggap 'berhasil diterima', jadi Promise-nya resolve. Selalu periksa if (!res.ok) dan lempar error sendiri bila perlu.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Apa yang dikembalikan sebuah fungsi async, walaupun di dalamnya hanya ada return 5?",
              choices: [
                "Angka 5",
                "Sebuah Promise yang resolve dengan nilai 5",
                "undefined",
                "String '5'",
              ],
              answerIndex: 1,
              explanation:
                "Fungsi async SELALU mengembalikan Promise. Karena itu memanggilnya tanpa await memberi Promise, bukan nilainya — penyebab umum log yang menampilkan 'Promise { <pending> }'.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kamu perlu mengambil 3 data yang tidak saling bergantung. Mana yang lebih cepat?",
              choices: [
                "await satu per satu secara berurutan",
                "await Promise.all([p1, p2, p3])",
                "Keduanya sama cepat",
                "Memakai setTimeout bertingkat",
              ],
              answerIndex: 1,
              explanation:
                "Promise.all menjalankan ketiganya bersamaan sehingga total waktunya selama request terlambat saja. await berurutan menjumlahkan semua waktu — kesalahan performa yang sering ditemukan saat code review.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apa risiko kode async tanpa try/catch di aplikasi produksi?",
              choices: [
                "Tidak ada risiko",
                "Terjadi unhandled rejection: aplikasi bisa diam tanpa pesan, pengguna melihat layar kosong tanpa tahu penyebabnya",
                "Kode jadi lebih lambat",
                "Browser otomatis me-refresh halaman",
              ],
              answerIndex: 1,
              explanation:
                "Kegagalan yang tidak ditangani tidak memunculkan apa pun di UI — pengguna hanya melihat loading abadi atau layar kosong. Selalu tangkap error dan tampilkan pesan yang bisa dipahami, plus sediakan cara mencoba lagi.",
            },
          ],
        },
      ],
    },
    {
      slug: "error-debugging",
      title: "Error Handling & Debugging",
      description:
        "Skill kerja yang jarang diajarkan: membaca error, melacak bug, memakai DevTools.",
      topics: [
        "Jenis error: SyntaxError, TypeError, ReferenceError",
        "Membaca stack trace dari bawah ke atas",
        "try/catch/finally & throw — kapan melempar error sendiri",
        "console di luar log: table, group, time, trace",
        "Breakpoint & step debugging di DevTools",
        "Network tab: memeriksa request yang gagal",
        "Strategi debugging sistematis (reproduce → isolate → fix)",
      ],
      items: [
        {
          kind: "step",
          id: "js-7-1",
          title: "Membaca jenis error",
          explanation:
            "Tiga error yang akan kamu temui paling sering: **ReferenceError** (variabel tidak ada / salah tulis), **TypeError** (nilai bukan tipe yang diharapkan, misalnya memanggil sesuatu yang bukan fungsi atau membaca properti dari `null`), dan **SyntaxError** (kode tidak bisa diparse — biasanya kurung atau kurawal yang tidak seimbang). Mengenali jenisnya langsung mempersempit pencarian.",
          example: {
            code: "// ReferenceError: variabel tidak ada\ntry { console.log(tidakAda); }\ncatch (e) { console.log(e.name + ': ' + e.message); }\n\n// TypeError: membaca properti dari null\ntry { const x = null; console.log(x.nama); }\ncatch (e) { console.log(e.name + ': ' + e.message); }",
            output:
              "ReferenceError: tidakAda is not defined\nTypeError: Cannot read properties of null (reading 'nama')",
            note: "Nama error langsung memberi arah: ReferenceError → variabel/typo. TypeError → nilainya bukan yang kamu duga.",
          },
          instruction:
            "Sengaja picu sebuah TypeError: buat `const angka = 5` lalu coba panggil `angka()` sebagai fungsi. Perhatikan pesan error di panel output.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+angka\\s*=\\s*5",
              message: "Buat const angka = 5;",
            },
            {
              pattern: "angka\\(\\s*\\)",
              message:
                "Coba panggil angka() — ini akan memicu TypeError karena angka bukan fungsi.",
            },
          ],
          solution: "const angka = 5;\nangka();",
        },
        {
          kind: "step",
          id: "js-7-2",
          title: "try/catch/finally",
          explanation:
            "`try` menjalankan kode berisiko, `catch` menangkap kegagalan, `finally` **selalu** dijalankan — berhasil maupun gagal. `finally` itulah tempat mematikan indikator loading, karena kalau kamu menaruhnya hanya di `try`, spinner akan berputar selamanya saat terjadi error.",
          example: {
            code: "function proses(teks) {\n  try {\n    const data = JSON.parse(teks);\n    console.log('Berhasil:', data.nama);\n  } catch (e) {\n    console.log('Format salah:', e.name);\n  } finally {\n    console.log('--- proses berakhir ---');\n  }\n}\n\nproses('{\"nama\":\"Ana\"}');\nproses('bukan json');",
            output:
              "Berhasil: Ana\n--- proses berakhir ---\nFormat salah: SyntaxError\n--- proses berakhir ---",
            note: "Perhatikan finally muncul di KEDUA kasus. Kode setelah error di dalam try otomatis dilewati.",
          },
          instruction:
            "Buat try/catch/finally: di `try` panggil `JSON.parse('{ rusak }')`, di `catch` tampilkan `error.name`, di `finally` tampilkan `'Selesai'`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "try\\s*\\{",
              message: "Buat blok try.",
            },
            {
              pattern: "JSON\\.parse\\(",
              message: "Di dalam try, panggil JSON.parse dengan string rusak.",
            },
            {
              pattern: "catch\\s*\\(\\s*\\w+\\s*\\)",
              message: "Buat blok catch (error).",
            },
            {
              pattern: "\\.name",
              message: "Di catch, tampilkan error.name.",
            },
            {
              pattern: "finally\\s*\\{[\\s\\S]*Selesai",
              message: "Buat blok finally yang menampilkan 'Selesai'.",
            },
          ],
          solution:
            "try {\n  JSON.parse('{ rusak }');\n} catch (error) {\n  console.log(error.name);\n} finally {\n  console.log('Selesai');\n}",
        },
        {
          kind: "step",
          id: "js-7-3",
          title: "throw: melempar error sendiri",
          explanation:
            "Fungsi yang menerima input tidak valid sebaiknya **gagal dengan jelas dan segera** (`throw`), bukan mengembalikan `undefined` diam-diam yang baru meledak jauh di tempat lain. Prinsip ini disebut *fail fast* — error yang muncul dekat dengan penyebabnya jauh lebih murah untuk diperbaiki.",
          example: {
            code: "function daftarUmur(umur) {\n  if (umur < 0) {\n    throw new Error('Umur tidak boleh negatif');\n  }\n  return 'Terdaftar: ' + umur;\n}\n\ntry {\n  console.log(daftarUmur(25));\n  console.log(daftarUmur(-5));   // berhenti di sini\n} catch (e) {\n  console.log('Ditolak: ' + e.message);\n}",
            output: "Terdaftar: 25\nDitolak: Umur tidak boleh negatif",
            note: "Bandingkan dengan 'return undefined' diam-diam: error baru muncul jauh kemudian di tempat lain, jauh lebih sulit dilacak.",
          },
          instruction:
            "Buat fungsi `bagi(a, b)` yang `throw new Error('Pembagi tidak boleh nol')` jika `b === 0`, selain itu mengembalikan hasil bagi. Uji dengan try/catch memakai `bagi(10, 0)`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "(function\\s+bagi|const\\s+bagi\\s*=)",
              message: "Buat fungsi bagi(a, b).",
            },
            {
              pattern: "b\\s*===\\s*0",
              message: "Periksa if (b === 0).",
            },
            {
              pattern: "throw\\s+new\\s+Error\\(",
              message:
                "Gunakan throw new Error('Pembagi tidak boleh nol');",
            },
            {
              pattern: "catch\\s*\\(",
              message: "Uji dengan try/catch.",
            },
            {
              pattern: "bagi\\(\\s*10\\s*,\\s*0\\s*\\)",
              message: "Panggil bagi(10, 0) di dalam try.",
            },
          ],
          solution:
            "function bagi(a, b) {\n  if (b === 0) {\n    throw new Error('Pembagi tidak boleh nol');\n  }\n  return a / b;\n}\n\ntry {\n  console.log(bagi(10, 0));\n} catch (error) {\n  console.log(error.message);\n}",
        },
        {
          kind: "step",
          id: "js-7-4",
          title: "console lebih dari log",
          explanation:
            "`console.table` menampilkan array of object sebagai tabel — sangat membantu saat memeriksa data API. `console.time`/`timeEnd` mengukur durasi. `console.error` dan `console.warn` memberi warna dan stack trace. Memakainya menghemat waktu dibanding menyebar `console.log` di mana-mana.",
          example: {
            code: "const data = [{ id: 1, nama: 'Ana' }, { id: 2, nama: 'Budi' }];\n\nconsole.table(data);            // tampilkan sebagai tabel\nconsole.warn('Ini peringatan');\nconsole.error('Ini error');\n\nconsole.time('hitung');\nlet s = 0;\nfor (let i = 0; i < 100000; i++) s += i;\nconsole.timeEnd('hitung');     // tampilkan durasinya",
            output:
              "Tabel data, pesan peringatan & error berwarna, lalu durasi loop dalam milidetik.",
            note: "Label pada console.time dan console.timeEnd harus SAMA persis, itulah yang memasangkan keduanya.",
          },
          instruction:
            "Tampilkan array `users` memakai `console.table`, lalu ukur durasi sebuah loop memakai `console.time('loop')` dan `console.timeEnd('loop')`.",
          starterCode:
            "const users = [\n  { id: 1, nama: 'Ana' },\n  { id: 2, nama: 'Budi' },\n];\n\n",
          language: "js",
          tests: [
            {
              pattern: "console\\.table\\(\\s*users\\s*\\)",
              message: "Gunakan console.table(users);",
            },
            {
              pattern: "console\\.time\\(\\s*['\"]loop['\"]\\s*\\)",
              message: "Gunakan console.time('loop');",
            },
            {
              pattern: "console\\.timeEnd\\(\\s*['\"]loop['\"]\\s*\\)",
              message: "Tutup dengan console.timeEnd('loop');",
            },
          ],
          solution:
            "const users = [\n  { id: 1, nama: 'Ana' },\n  { id: 2, nama: 'Budi' },\n];\n\nconsole.table(users);\n\nconsole.time('loop');\nfor (let i = 0; i < 1000; i++) {\n  // pekerjaan\n}\nconsole.timeEnd('loop');",
        },
        {
          kind: "step",
          id: "js-7-5",
          title: "Debugging sistematis",
          explanation:
            "Cara amatir: mengubah kode secara acak sampai jalan. Cara profesional: **reproduce** (buat error muncul konsisten) → **isolate** (persempit sampai kode terkecil yang masih gagal) → **fix** → **verify**. Fungsi di bawah punya bug klasik; temukan lewat isolasi, bukan tebakan.",
          example: {
            code: "// BUG: kenapa hasilnya undefined?\nfunction ambilPertama(arr) {\n  return arr[1];        // ← isolasi: cek asumsi indeks\n}\nconsole.log(ambilPertama(['a', 'b']));   // 'b', bukan 'a'\n\n// PERBAIKAN: indeks pertama adalah 0\nfunction ambilPertamaBenar(arr) {\n  return arr[0];\n}\nconsole.log(ambilPertamaBenar(['a', 'b']));",
            output: "b\na",
            note: "Proses: reproduce (jalankan, lihat 'b') → isolate (curigai indeks) → fix (ubah ke 0) → verify (jalankan lagi).",
          },
          instruction:
            "Fungsi `ambilTerakhir` mengembalikan `undefined`. Perbaiki bug off-by-one-nya (indeks array dimulai dari 0), lalu tampilkan hasilnya.",
          starterCode:
            "function ambilTerakhir(arr) {\n  return arr[arr.length];\n}\n\nconsole.log(ambilTerakhir([1, 2, 3]));",
          language: "js",
          tests: [
            {
              pattern:
                "arr\\[\\s*arr\\.length\\s*-\\s*1\\s*\\]|arr\\.at\\(\\s*-1\\s*\\)",
              message:
                "Perbaiki menjadi arr[arr.length - 1] (atau arr.at(-1)).",
            },
            {
              pattern: "console\\.log\\(\\s*ambilTerakhir\\(",
              message: "Tetap tampilkan hasil ambilTerakhir(...).",
            },
          ],
          solution:
            "function ambilTerakhir(arr) {\n  return arr[arr.length - 1];\n}\n\nconsole.log(ambilTerakhir([1, 2, 3]));",
        },
        {
          kind: "quiz",
          id: "js-7-kuis",
          title: "Kuis: Error & Debugging",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kamu melihat 'TypeError: Cannot read properties of null (reading name)'. Apa artinya?",
              choices: [
                "Properti name salah tulis",
                "Kamu mencoba membaca .name dari sesuatu yang bernilai null — biasanya hasil pencarian yang tidak ditemukan",
                "Variabel name belum dideklarasikan",
                "Ada kurung yang tidak seimbang",
              ],
              answerIndex: 1,
              explanation:
                "Pesannya memberi tahu persis: nilainya null dan kamu membaca properti 'name'. Langkah pertama bukan mengubah kode, tapi menelusuri KENAPA nilainya null — misalnya querySelector tidak menemukan elemen, atau find tidak menemukan data.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Kenapa mematikan indikator loading sebaiknya di blok finally, bukan di try?",
              choices: [
                "Karena finally berjalan lebih cepat",
                "Karena finally selalu berjalan baik saat berhasil maupun gagal — kalau ditaruh di try, spinner akan berputar selamanya saat error",
                "Karena try tidak boleh berisi lebih dari satu perintah",
                "Tidak ada bedanya",
              ],
              answerIndex: 1,
              explanation:
                "Saat terjadi error, sisa kode di try dilewati — termasuk perintah mematikan loading. finally dijamin berjalan di kedua jalur, jadi di situlah tempat pembersihan (cleanup) yang benar.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Fungsi menerima input tidak valid. Mana pendekatan yang lebih baik?",
              choices: [
                "return undefined secara diam-diam agar aplikasi tetap jalan",
                "throw error dengan pesan jelas (fail fast) agar penyebabnya ketahuan dekat dengan sumbernya",
                "console.log peringatan lalu lanjut memproses",
                "Mengembalikan string kosong",
              ],
              answerIndex: 1,
              explanation:
                "Mengembalikan undefined diam-diam membuat error meledak jauh dari penyebabnya, kadang beberapa fungsi kemudian — jauh lebih mahal untuk dilacak. throw membuat masalah terlihat tepat di tempat asalnya.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Apa urutan pendekatan debugging yang sistematis?",
              choices: [
                "Ubah kode sampai jalan, lalu lanjutkan",
                "Reproduce → isolate → fix → verify",
                "Tanya AI dulu sebelum melihat errornya",
                "Restart komputer, lalu install ulang dependensi",
              ],
              answerIndex: 1,
              explanation:
                "Reproduce agar kamu tahu error muncul konsisten, isolate untuk mempersempit ke kode terkecil yang masih gagal, fix, lalu verify bahwa perbaikannya benar dan tidak merusak yang lain. Menebak secara acak sering 'menyembunyikan' bug, bukan menyelesaikannya.",
            },
            {
              id: "q5",
              type: "isian",
              question:
                "Method console apa yang menampilkan array of object dalam bentuk tabel? (tulis lengkap, mis. console.xxx)",
              acceptedAnswers: ["console.table", "table"],
              explanation:
                "console.table(data) menampilkan data terstruktur sebagai tabel dengan kolom yang bisa diurutkan — jauh lebih mudah dibaca daripada console.log untuk data dari API.",
            },
          ],
        },
      ],
    },
    {
      slug: "oop-fp",
      title: "OOP & Functional Programming Dasar",
      description:
        "Dua paradigma yang membentuk kode di dunia nyata — cukup untuk membaca codebase apa pun.",
      topics: [
        "Class: constructor, method, field",
        "Inheritance & extends — plus kapan menghindarinya",
        "this: aturan yang sebenarnya, bind/call/apply",
        "Prototype: apa yang terjadi di balik class",
        "Getter, setter, static",
        "Immutability & kenapa framework menyukainya",
        "Komposisi fungsi & higher-order function",
      ],
      items: [
        {
          kind: "step",
          id: "js-8-1",
          title: "Class dan constructor",
          explanation:
            "`class` adalah cetakan untuk membuat object serupa. `constructor` dijalankan otomatis saat `new` dipanggil, dan `this` menunjuk ke instance yang sedang dibuat. Meski kode modern lebih sering memakai fungsi dan object literal, kamu **pasti** menemui class saat membaca codebase yang sudah ada.",
          example: {
            code: "class Buku {\n  constructor(judul, halaman) {\n    this.judul = judul;      // this = instance yang sedang dibuat\n    this.halaman = halaman;\n  }\n\n  ringkas() {\n    return `${this.judul} (${this.halaman} hlm)`;\n  }\n}\n\nconst b1 = new Buku('Atomic Habits', 320);\nconst b2 = new Buku('Sapiens', 500);\nconsole.log(b1.ringkas());\nconsole.log(b2.ringkas());",
            output: "Atomic Habits (320 hlm)\nSapiens (500 hlm)",
            note: "Satu class bisa membuat banyak instance, masing-masing punya data sendiri. Method ditulis TANPA kata function.",
          },
          instruction:
            "Buat `class Produk` dengan constructor yang menerima `nama` dan `harga`, dan method `info()` yang mengembalikan string keduanya. Buat instance dan tampilkan hasil `info()`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "class\\s+Produk\\s*\\{",
              message: "Buat class Produk { ... }",
            },
            {
              pattern: "constructor\\s*\\(\\s*nama\\s*,\\s*harga\\s*\\)",
              message: "Buat constructor(nama, harga).",
            },
            {
              pattern: "this\\.nama\\s*=\\s*nama",
              message: "Simpan this.nama = nama;",
            },
            {
              pattern: "info\\s*\\(\\s*\\)\\s*\\{",
              message: "Buat method info() { ... }",
            },
            {
              pattern: "new\\s+Produk\\(",
              message: "Buat instance dengan new Produk(...).",
            },
          ],
          solution:
            "class Produk {\n  constructor(nama, harga) {\n    this.nama = nama;\n    this.harga = harga;\n  }\n\n  info() {\n    return `${this.nama} - Rp${this.harga}`;\n  }\n}\n\nconst p = new Produk('Sepatu', 450000);\nconsole.log(p.info());",
        },
        {
          kind: "step",
          id: "js-8-2",
          title: "Inheritance dengan extends",
          explanation:
            "`extends` mewarisi properti dan method dari class induk, dan `super()` **wajib** dipanggil di constructor anak sebelum memakai `this`. Peringatan dari pengalaman: pewarisan berlapis-lapis membuat kode sulit dilacak — di praktik modern, **komposisi lebih disukai daripada pewarisan**.",
          example: {
            code: "class Hewan {\n  constructor(nama) { this.nama = nama; }\n  suara() { return '...'; }\n}\n\nclass Kucing extends Hewan {\n  constructor(nama, warna) {\n    super(nama);          // WAJIB duluan, sebelum pakai this\n    this.warna = warna;\n  }\n  suara() { return 'Meong'; }   // menimpa method induk\n}\n\nconst k = new Kucing('Oyen', 'kuning');\nconsole.log(k.nama, k.warna, k.suara());",
            output: "Oyen kuning Meong",
            note: "Kucing mewarisi properti nama dari Hewan lewat super(), dan boleh menimpa method induk dengan versinya sendiri.",
          },
          instruction:
            "Buat `class Diskon extends Produk` dengan constructor yang menerima `nama`, `harga`, `potongan`, memanggil `super(nama, harga)`, dan method `hargaAkhir()`. Uji dan tampilkan hasilnya.",
          starterCode:
            "class Produk {\n  constructor(nama, harga) {\n    this.nama = nama;\n    this.harga = harga;\n  }\n}\n\n",
          language: "js",
          tests: [
            {
              pattern: "class\\s+Diskon\\s+extends\\s+Produk",
              message: "Buat class Diskon extends Produk.",
            },
            {
              pattern: "super\\(\\s*nama\\s*,\\s*harga\\s*\\)",
              message:
                "Panggil super(nama, harga) di constructor — wajib sebelum memakai this.",
            },
            {
              pattern: "hargaAkhir\\s*\\(\\s*\\)\\s*\\{",
              message: "Buat method hargaAkhir().",
            },
            {
              pattern: "new\\s+Diskon\\(",
              message: "Buat instance dengan new Diskon(...).",
            },
          ],
          solution:
            "class Produk {\n  constructor(nama, harga) {\n    this.nama = nama;\n    this.harga = harga;\n  }\n}\n\nclass Diskon extends Produk {\n  constructor(nama, harga, potongan) {\n    super(nama, harga);\n    this.potongan = potongan;\n  }\n\n  hargaAkhir() {\n    return this.harga - this.potongan;\n  }\n}\n\nconst d = new Diskon('Sepatu', 450000, 50000);\nconsole.log(d.hargaAkhir());",
        },
        {
          kind: "step",
          id: "js-8-3",
          title: "this yang hilang di callback",
          explanation:
            "Ini bug klasik: method yang dipakai sebagai callback **kehilangan `this`**, karena nilai `this` ditentukan oleh *cara pemanggilan*, bukan tempat penulisan. Solusi modern: pakai arrow function, yang mengambil `this` dari tempat ia didefinisikan.",
          example: {
            code: "class Timer {\n  constructor() { this.label = 'TIMER'; }\n\n  jalan() {\n    // ❌ function biasa: this berubah, jadi undefined\n    setTimeout(function () {\n      console.log('A:', this?.label);\n    }, 50);\n\n    // ✅ arrow: this tetap milik instance\n    setTimeout(() => {\n      console.log('B:', this.label);\n    }, 100);\n  }\n}\n\nnew Timer().jalan();",
            output: "A: undefined\nB: TIMER",
            note: "Arrow function tidak punya this sendiri — ia meminjam this dari tempat ia DITULIS, bukan dari cara ia dipanggil.",
          },
          instruction:
            "Perbaiki kode agar `this.nama` terbaca di dalam `setTimeout`: ubah callback function biasa menjadi arrow function.",
          starterCode:
            "class Orang {\n  constructor(nama) {\n    this.nama = nama;\n  }\n  sapaNanti() {\n    setTimeout(function () {\n      console.log('Halo ' + this.nama);\n    }, 100);\n  }\n}\n\nnew Orang('Bimo').sapaNanti();",
          language: "js",
          tests: [
            {
              pattern:
                "setTimeout\\(\\s*\\(\\s*\\)\\s*=>",
              message:
                "Ubah callback setTimeout menjadi arrow function: setTimeout(() => { ... }, 100);",
            },
            {
              pattern: "this\\.nama",
              message: "Tetap gunakan this.nama di dalam callback.",
            },
          ],
          solution:
            "class Orang {\n  constructor(nama) {\n    this.nama = nama;\n  }\n  sapaNanti() {\n    setTimeout(() => {\n      console.log('Halo ' + this.nama);\n    }, 100);\n  }\n}\n\nnew Orang('Bimo').sapaNanti();",
        },
        {
          kind: "step",
          id: "js-8-4",
          title: "Pure function",
          explanation:
            "Fungsi **pure** punya dua sifat: hasilnya hanya bergantung pada argumennya, dan ia tidak mengubah apa pun di luar dirinya. Fungsi pure mudah diuji (tanpa setup), mudah dipahami, dan aman dipakai ulang. Fungsi yang memutasi argumennya adalah sumber bug yang sulit dilacak.",
          example: {
            code: "// ❌ TIDAK pure: mengubah object milik pemanggil\nfunction naikkanHargaBuruk(p) {\n  p.harga = p.harga + 1000;\n  return p;\n}\n\n// ✅ pure: object baru, aslinya utuh\nfunction naikkanHarga(p) {\n  return { ...p, harga: p.harga + 1000 };\n}\n\nconst produk = { nama: 'Kopi', harga: 5000 };\nconst baru = naikkanHarga(produk);\nconsole.log(produk.harga, baru.harga);",
            output: "5000 6000",
            note: "Fungsi pure: input sama → output selalu sama, dan tidak menyentuh apa pun di luar dirinya. Mudah diuji, aman dipakai ulang.",
          },
          instruction:
            "Ubah `tambahItem` menjadi pure: jangan `push` ke array asli, tapi kembalikan array baru memakai spread. Tampilkan array asli dan hasilnya untuk membuktikan aslinya utuh.",
          starterCode:
            "function tambahItem(daftar, item) {\n  daftar.push(item);\n  return daftar;\n}\n\nconst asli = ['a'];\nconsole.log(tambahItem(asli, 'b'));\nconsole.log(asli);",
          language: "js",
          tests: [
            {
              pattern:
                "return\\s*\\[\\s*\\.\\.\\.\\s*daftar\\s*,\\s*item\\s*\\]",
              message:
                "Kembalikan array baru: return [...daftar, item];",
            },
            {
              pattern: "^(?![\\s\\S]*\\.push\\()",
              message:
                "Hapus daftar.push(item) — fungsi pure tidak boleh mengubah argumennya.",
            },
          ],
          solution:
            "function tambahItem(daftar, item) {\n  return [...daftar, item];\n}\n\nconst asli = ['a'];\nconsole.log(tambahItem(asli, 'b'));\nconsole.log(asli);",
        },
        {
          kind: "step",
          id: "js-8-5",
          title: "Higher-order function",
          explanation:
            "Higher-order function adalah fungsi yang menerima fungsi dan/atau mengembalikan fungsi. Kamu sudah memakainya (`map`, `filter`), sekarang kamu membuatnya. Pola ini dipakai untuk membuat fungsi terspesialisasi dari satu template umum.",
          example: {
            code: "function buatSapaan(sapaan) {\n  return (nama) => `${sapaan}, ${nama}!`;\n}\n\nconst formal = buatSapaan('Selamat pagi');\nconst santai = buatSapaan('Woi');\n\nconsole.log(formal('Bu Ani'));\nconsole.log(santai('Bimo'));",
            output: "Selamat pagi, Bu Ani!\nWoi, Bimo!",
            note: "Satu template fungsi menghasilkan banyak fungsi terspesialisasi. Perhatikan return-nya berupa FUNGSI, bukan nilai biasa.",
          },
          instruction:
            "Buat `pengali(faktor)` yang mengembalikan fungsi pengali. Buat `const kaliTiga = pengali(3)`, lalu tampilkan `kaliTiga(5)`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "(function\\s+pengali|const\\s+pengali\\s*=)",
              message: "Buat fungsi pengali(faktor).",
            },
            {
              pattern:
                "return\\s+(function|\\(?\\s*\\w+\\s*\\)?\\s*=>)|=>\\s*\\(?\\s*\\w+\\s*\\)?\\s*=>",
              message: "pengali harus MENGEMBALIKAN sebuah fungsi.",
            },
            {
              pattern: "const\\s+kaliTiga\\s*=\\s*pengali\\(\\s*3\\s*\\)",
              message: "Buat const kaliTiga = pengali(3);",
            },
            {
              pattern: "kaliTiga\\(\\s*5\\s*\\)",
              message: "Tampilkan kaliTiga(5).",
            },
          ],
          solution:
            "function pengali(faktor) {\n  return (angka) => angka * faktor;\n}\n\nconst kaliTiga = pengali(3);\nconsole.log(kaliTiga(5));",
        },
        {
          kind: "quiz",
          id: "js-8-kuis",
          title: "Kuis: OOP & Functional",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "this.nama menghasilkan undefined di dalam callback setTimeout. Apa solusi paling umum sekarang?",
              choices: [
                "Menyimpan this ke variabel self di luar",
                "Mengganti callback menjadi arrow function, yang mengambil this dari tempat ia didefinisikan",
                "Memakai var alih-alih const",
                "Menambahkan return sebelum setTimeout",
              ],
              answerIndex: 1,
              explanation:
                "Arrow function tidak punya this sendiri; ia memakai this dari scope tempat penulisannya (lexical this). Pola lama 'const self = this' atau .bind(this) juga bekerja, tapi arrow function adalah cara modern yang paling bersih.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Apa yang wajib dilakukan di constructor class anak sebelum memakai this?",
              choices: [
                "Memanggil super()",
                "Mendeklarasikan semua properti",
                "Memanggil constructor() induk secara manual dengan new",
                "Tidak ada kewajiban apa pun",
              ],
              answerIndex: 0,
              explanation:
                "super() menjalankan constructor induk dan menyiapkan this. Memakai this sebelum super() akan melempar ReferenceError — salah satu error paling membingungkan bagi yang baru belajar class.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Manakah fungsi yang PURE?",
              code: "// A\nfunction a(arr) { arr.push(1); return arr; }\n// B\nfunction b(arr) { return [...arr, 1]; }",
              choices: [
                "A, karena lebih efisien",
                "B, karena tidak mengubah argumen dan hasilnya hanya bergantung pada input",
                "Keduanya pure",
                "Keduanya tidak pure",
              ],
              answerIndex: 1,
              explanation:
                "B pure: tidak ada efek samping, input sama selalu memberi output sama. A memutasi array milik pemanggil — efek samping yang bisa menimbulkan bug jauh dari tempat fungsi ini dipanggil.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kenapa praktik modern lebih menyukai komposisi daripada pewarisan berlapis?",
              choices: [
                "Karena extends sudah tidak didukung",
                "Karena rantai pewarisan yang dalam membuat sulit melacak asal sebuah method dan perubahan di induk berdampak luas",
                "Karena komposisi selalu lebih cepat",
                "Karena class tidak bisa diuji",
              ],
              answerIndex: 1,
              explanation:
                "Dengan pewarisan berlapis, memahami satu method berarti membaca seluruh rantai induknya, dan mengubah induk berisiko merusak banyak turunan. Komposisi menyusun perilaku dari bagian-bagian kecil yang jelas asalnya.",
            },
            {
              id: "q5",
              type: "prediksi-output",
              question: "Apa yang ditampilkan kode ini? (tulis angkanya)",
              code: "function pengali(f) {\n  return (n) => n * f;\n}\nconsole.log(pengali(4)(3));",
              acceptedAnswers: ["12"],
              explanation:
                "12. pengali(4) mengembalikan fungsi yang mengingat f = 4 (closure), lalu fungsi itu langsung dipanggil dengan 3 sehingga 3 × 4 = 12. Pola pemanggilan berantai seperti ini umum di library fungsional.",
            },
          ],
        },
      ],
    },
    {
      slug: "browser-api",
      title: "Browser API",
      description:
        "Kemampuan bawaan browser yang dipakai fitur nyata: penyimpanan, URL, dan observer.",
      topics: [
        "localStorage & sessionStorage (dan batasnya)",
        "URL & URLSearchParams — parsing query string",
        "History API dasar",
        "Timer & requestAnimationFrame",
        "IntersectionObserver: lazy load & infinite scroll",
        "Clipboard, geolocation (pengenalan)",
        "FormData untuk upload",
      ],
      items: [
        {
          kind: "step",
          id: "js-9-1",
          title: "localStorage",
          explanation:
            "`localStorage` menyimpan data di browser secara permanen (sampai dihapus). Batas pentingnya: **hanya bisa menyimpan string**, jadi object harus dilewatkan `JSON.stringify` saat menyimpan dan `JSON.parse` saat membaca. Jangan pernah menyimpan token sensitif di sini — bisa dibaca skrip apa pun di halaman (risiko XSS).",
          example: {
            code: "// string biasa: langsung bisa\nlocalStorage.setItem('nama', 'Bimo');\nconsole.log(localStorage.getItem('nama'));\n\n// ❌ object tanpa stringify\nlocalStorage.setItem('a', { x: 1 });\nconsole.log(localStorage.getItem('a'));\n\n// ✅ object dengan stringify + parse\nlocalStorage.setItem('b', JSON.stringify({ x: 1 }));\nconsole.log(JSON.parse(localStorage.getItem('b')).x);",
            output: "Bimo\n[object Object]\n1",
            note: "localStorage hanya paham string. Object wajib di-stringify saat menyimpan dan di-parse saat dibaca.",
          },
          instruction:
            "Simpan object `{ tema: 'gelap' }` ke localStorage dengan key `'pengaturan'` (pakai JSON.stringify), lalu baca kembali dengan JSON.parse dan tampilkan.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern:
                "localStorage\\.setItem\\(\\s*['\"]pengaturan['\"]\\s*,\\s*JSON\\.stringify\\(",
              message:
                "Gunakan localStorage.setItem('pengaturan', JSON.stringify(...));",
            },
            {
              pattern:
                "JSON\\.parse\\(\\s*localStorage\\.getItem\\(\\s*['\"]pengaturan['\"]",
              message:
                "Baca kembali dengan JSON.parse(localStorage.getItem('pengaturan')).",
            },
            {
              pattern: "console\\.log\\(",
              message: "Tampilkan hasilnya.",
            },
          ],
          solution:
            "localStorage.setItem('pengaturan', JSON.stringify({ tema: 'gelap' }));\n\nconst data = JSON.parse(localStorage.getItem('pengaturan'));\nconsole.log(data);",
        },
        {
          kind: "step",
          id: "js-9-2",
          title: "URLSearchParams",
          explanation:
            "Mengurai query string secara manual dengan `split` rapuh dan mudah salah. `URLSearchParams` menanganinya dengan benar, termasuk encoding karakter khusus. Dipakai untuk filter dan pencarian yang bisa di-bookmark serta dibagikan.",
          example: {
            code: "const p = new URLSearchParams('?kategori=kopi&urut=harga');\n\nconsole.log(p.get('kategori'));\nconsole.log(p.get('tidakAda'));    // null kalau tidak ada\nconsole.log(p.has('urut'));\n\np.set('halaman', '3');             // tambah/ubah parameter\nconsole.log(p.toString());",
            output: "kopi\nnull\ntrue\nkategori=kopi&urut=harga&halaman=3",
            note: "Jauh lebih aman daripada split('&') manual, karena menangani encoding karakter khusus seperti spasi dan & otomatis.",
          },
          instruction:
            "Buat `URLSearchParams` dari string `'?q=sepatu&halaman=2'`, lalu tampilkan nilai `q` dan `halaman` memakai `.get()`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "new\\s+URLSearchParams\\(",
              message: "Buat new URLSearchParams('?q=sepatu&halaman=2').",
            },
            {
              pattern: "\\.get\\(\\s*['\"]q['\"]\\s*\\)",
              message: "Ambil nilai dengan .get('q').",
            },
            {
              pattern: "\\.get\\(\\s*['\"]halaman['\"]\\s*\\)",
              message: "Ambil juga .get('halaman').",
            },
          ],
          solution:
            "const params = new URLSearchParams('?q=sepatu&halaman=2');\n\nconsole.log(params.get('q'));\nconsole.log(params.get('halaman'));",
        },
        {
          kind: "step",
          id: "js-9-3",
          title: "Debounce dengan timer",
          explanation:
            "Kalau kamu memanggil API di setiap ketikan, mengetik 'sepatu' berarti 6 request. **Debounce** menunda eksekusi sampai pengguna berhenti mengetik sejenak: setiap ketikan membatalkan timer sebelumnya. Ini teknik optimasi paling sering diminta pada fitur pencarian.",
          example: {
            code: "function debounce(fn, jeda) {\n  let timer;                       // diingat lewat closure\n  return function (...args) {\n    clearTimeout(timer);           // batalkan jadwal sebelumnya\n    timer = setTimeout(() => fn(...args), jeda);\n  };\n}\n\nconst simpan = debounce((v) => console.log('Menyimpan: ' + v), 200);\n\nsimpan('a');\nsimpan('ab');\nsimpan('abc');   // hanya yang terakhir yang benar-benar jalan",
            output: "Menyimpan: abc",
            note: "Tiga pemanggilan, satu eksekusi. Tanpa debounce, fitur pencarian mengirim satu request per ketikan.",
          },
          instruction:
            "Buat fungsi `debounce(fn, jeda)` yang memakai `clearTimeout` dan `setTimeout` untuk menunda pemanggilan. Uji dengan memanggil hasilnya beberapa kali.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "(function\\s+debounce|const\\s+debounce\\s*=)",
              message: "Buat fungsi debounce(fn, jeda).",
            },
            {
              pattern: "clearTimeout\\(",
              message:
                "Gunakan clearTimeout untuk membatalkan timer sebelumnya.",
            },
            {
              pattern: "setTimeout\\(",
              message: "Gunakan setTimeout untuk menjadwalkan pemanggilan.",
            },
            {
              pattern: "return\\s+(function|\\(?[\\s\\S]{0,20}=>)",
              message: "debounce harus mengembalikan sebuah fungsi.",
            },
          ],
          solution:
            "function debounce(fn, jeda) {\n  let timer;\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), jeda);\n  };\n}\n\nconst cari = debounce((kata) => console.log('Mencari: ' + kata), 300);\ncari('s');\ncari('se');\ncari('sepatu');",
        },
        {
          kind: "step",
          id: "js-9-4",
          title: "FormData",
          explanation:
            "`FormData` mengumpulkan seluruh nilai form sekaligus berdasarkan atribut `name` — jauh lebih ringkas daripada membaca setiap input satu per satu. Ia juga wajib dipakai untuk upload file. `Object.fromEntries` mengubahnya menjadi object biasa yang siap dikirim sebagai JSON.",
          example: {
            code: "const f = document.querySelector('form');\n\nf.addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  const fd = new FormData(f);\n  console.log(fd.get('email'));          // ambil satu field\n  console.log(Object.fromEntries(fd));   // jadikan object utuh\n});",
            output:
              'Menampilkan isi field email, lalu seluruh isi form sebagai object: {"email":"...","pesan":"..."}',
            note: "FormData membaca berdasarkan atribut name — input tanpa name tidak akan terbaca sama sekali.",
          },
          instruction:
            "Tangani submit form: cegah default, buat `new FormData(form)`, ubah jadi object dengan `Object.fromEntries`, lalu tampilkan.",
          starterCode: "const form = document.querySelector('#form');\n\n",
          language: "js",
          previewHtml:
            '<form id="form">\n  <input name="nama" placeholder="Nama" value="Bimo">\n  <input name="kota" placeholder="Kota" value="Jakarta">\n  <button type="submit">Kirim</button>\n</form>',
          tests: [
            {
              pattern:
                "form\\.addEventListener\\(\\s*['\"]submit['\"]",
              message: "Pasang listener submit pada form.",
            },
            {
              pattern: "\\.preventDefault\\(\\s*\\)",
              message: "Panggil e.preventDefault().",
            },
            {
              pattern: "new\\s+FormData\\(\\s*form\\s*\\)",
              message: "Buat new FormData(form).",
            },
            {
              pattern: "Object\\.fromEntries\\(",
              message:
                "Ubah menjadi object dengan Object.fromEntries(...).",
            },
          ],
          solution:
            "const form = document.querySelector('#form');\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const data = new FormData(form);\n  console.log(Object.fromEntries(data));\n});",
        },
        {
          kind: "quiz",
          id: "js-9-kuis",
          title: "Kuis: Browser API",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kamu menyimpan object ke localStorage lalu membacanya, tapi hasilnya '[object Object]'. Kenapa?",
              choices: [
                "localStorage rusak, perlu dibersihkan",
                "localStorage hanya menyimpan string — object harus dilewatkan JSON.stringify saat menyimpan",
                "Harus memakai sessionStorage untuk object",
                "Key-nya terlalu panjang",
              ],
              answerIndex: 1,
              explanation:
                "localStorage mengonversi nilai apa pun menjadi string dengan cara paling naif, sehingga object menjadi '[object Object]'. Selalu JSON.stringify saat menyimpan dan JSON.parse saat membaca.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Kenapa token autentikasi sebaiknya tidak disimpan di localStorage?",
              choices: [
                "Karena ukurannya terlalu besar",
                "Karena bisa dibaca skrip apa pun yang berjalan di halaman, sehingga rentan terhadap XSS",
                "Karena localStorage terhapus saat tab ditutup",
                "Karena tidak didukung di mobile",
              ],
              answerIndex: 1,
              explanation:
                "localStorage bisa diakses JavaScript apa pun di halaman itu, termasuk skrip berbahaya yang berhasil disuntikkan. Alternatif yang lebih aman untuk token adalah cookie httpOnly, yang tidak bisa dibaca JavaScript.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Fitur pencarian memanggil API di setiap ketikan sehingga terlalu banyak request. Teknik apa yang tepat?",
              choices: [
                "Menaikkan timeout request",
                "Debounce: tunda pemanggilan sampai pengguna berhenti mengetik beberapa ratus milidetik",
                "Memakai localStorage untuk menyimpan semua hasil",
                "Mengurangi jumlah data yang diminta",
              ],
              answerIndex: 1,
              explanation:
                "Debounce membatalkan timer setiap ada ketikan baru, sehingga API hanya dipanggil sekali setelah pengguna berhenti. Kembarannya, throttle, membatasi frekuensi pemanggilan — dipakai untuk event scroll.",
            },
            {
              id: "q4",
              type: "isian",
              question:
                "API apa yang dipakai untuk mengumpulkan semua nilai input form sekaligus berdasarkan atribut name? (tulis nama API-nya)",
              acceptedAnswers: ["FormData", "new FormData", "formdata"],
              explanation:
                "new FormData(form) mengumpulkan seluruh nilai berdasarkan atribut name, dan wajib dipakai untuk upload file. Object.fromEntries(formData) mengubahnya menjadi object biasa.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apa perbedaan localStorage dan sessionStorage?",
              choices: [
                "sessionStorage bisa menyimpan object langsung",
                "sessionStorage terhapus saat tab ditutup, localStorage bertahan sampai dihapus",
                "localStorage hanya untuk angka",
                "Tidak ada perbedaan",
              ],
              answerIndex: 1,
              explanation:
                "Keduanya punya API yang sama, hanya masa hidupnya berbeda: sessionStorage per-tab dan hilang saat tab ditutup, localStorage bertahan lintas sesi. Keduanya sama-sama hanya menyimpan string.",
            },
          ],
        },
      ],
    },
    {
      slug: "testing",
      title: "Testing Dasar",
      description:
        "Pembeda di interview junior: bisa menulis unit test dengan Vitest.",
      topics: [
        "Kenapa test ada: regresi & refactoring dengan percaya diri",
        "Anatomi test: describe, it/test, expect",
        "Matcher penting: toBe, toEqual, toThrow, toContain",
        "Arrange–Act–Assert",
        "Menguji edge case: input kosong, null, angka negatif",
        "Mock dasar: vi.fn dan kapan mock berlebihan",
        "TDD ringan: test dulu untuk fungsi murni",
      ],
      items: [
        {
          kind: "step",
          id: "js-10-1",
          title: "Anatomi sebuah test",
          explanation:
            "Struktur test standar: `describe` mengelompokkan, `it`/`test` mendeskripsikan satu perilaku, `expect` memeriksa hasilnya. Nama test yang baik menjelaskan **perilaku**, bukan implementasi: 'mengembalikan 0 untuk array kosong' jauh lebih berguna daripada 'test fungsi total'.",
          example: {
            code: "function diskon(harga, persen) {\n  return harga - (harga * persen) / 100;\n}\n\ndescribe('diskon', () => {\n  it('mengurangi harga sesuai persentase', () => {\n    expect(diskon(100000, 10)).toBe(90000);\n  });\n\n  it('mengembalikan harga utuh saat diskon 0', () => {\n    expect(diskon(100000, 0)).toBe(100000);\n  });\n});",
            output:
              "Saat dijalankan test runner: ✓ mengurangi harga sesuai persentase, ✓ mengembalikan harga utuh saat diskon 0",
            note: "describe = nama yang diuji, it = satu perilaku spesifik, expect = pemeriksaannya. Satu it sebaiknya menguji satu hal.",
          },
          instruction:
            "Tulis test untuk fungsi `total`: buat `describe('total', ...)` berisi satu `it` dengan `expect(total([1,2])).toBe(3)`. (Sintaksnya saja — test runner belum berjalan di preview.)",
          starterCode:
            "function total(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}\n\n",
          language: "js",
          tests: [
            {
              pattern: "describe\\(\\s*['\"]total['\"]\\s*,",
              message: "Buat describe('total', () => { ... });",
            },
            {
              pattern: "it\\(\\s*['\"][^'\"]{5,}['\"]\\s*,|test\\(\\s*['\"][^'\"]{5,}['\"]\\s*,",
              message:
                "Buat it('...') dengan deskripsi perilaku yang jelas (minimal 5 karakter).",
            },
            {
              pattern:
                "expect\\(\\s*total\\(\\s*\\[\\s*1\\s*,\\s*2\\s*\\]\\s*\\)\\s*\\)\\.toBe\\(\\s*3\\s*\\)",
              message:
                "Tulis expect(total([1, 2])).toBe(3);",
            },
          ],
          solution:
            "function total(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}\n\ndescribe('total', () => {\n  it('menjumlahkan semua angka dalam array', () => {\n    expect(total([1, 2])).toBe(3);\n  });\n});",
        },
        {
          kind: "step",
          id: "js-10-2",
          title: "toBe vs toEqual",
          explanation:
            "`toBe` membandingkan identitas (seperti `===`) — cocok untuk angka, string, boolean. Untuk object dan array **wajib** `toEqual`, karena dua object dengan isi sama tetap merupakan object berbeda. Salah memilih di sini adalah kebingungan nomor satu bagi yang baru menulis test.",
          example: {
            code: "// nilai sederhana → toBe\nexpect(5 * 2).toBe(10);\nexpect('ab').toBe('ab');\nexpect(true).toBe(true);\n\n// object & array → toEqual\nexpect({ a: 1 }).toEqual({ a: 1 });   // ✅ lolos\n// expect({ a: 1 }).toBe({ a: 1 });   // ❌ gagal: dua object berbeda",
            output:
              "Semua assertion dengan matcher yang tepat lolos; baris toBe pada object akan gagal.",
            note: "Aturan cepat: kalau nilainya bisa 'dipegang langsung' (angka/string/boolean) pakai toBe, kalau berisi struktur pakai toEqual.",
          },
          instruction:
            "Tulis dua assertion: `expect(2 + 1).toBe(3)` untuk angka, dan `expect([1, 2]).toEqual([1, 2])` untuk array.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "expect\\([^)]*\\)\\.toBe\\(\\s*3\\s*\\)",
              message: "Tulis expect(2 + 1).toBe(3);",
            },
            {
              pattern:
                "expect\\(\\s*\\[\\s*1\\s*,\\s*2\\s*\\]\\s*\\)\\.toEqual\\(",
              message:
                "Tulis expect([1, 2]).toEqual([1, 2]); — array butuh toEqual, bukan toBe.",
            },
          ],
          solution:
            "expect(2 + 1).toBe(3);\nexpect([1, 2]).toEqual([1, 2]);",
        },
        {
          kind: "step",
          id: "js-10-3",
          title: "Arrange–Act–Assert",
          explanation:
            "Pola tiga langkah yang membuat test mudah dibaca: **Arrange** (siapkan data), **Act** (jalankan yang diuji), **Assert** (periksa hasilnya). Test yang mencampur ketiganya jadi sulit dipahami saat gagal — dan test yang gagal tanpa penjelasan jelas hampir tidak berguna.",
          example: {
            code: "function rataRata(arr) {\n  return arr.reduce((a, b) => a + b, 0) / arr.length;\n}\n\nit('menghitung rata-rata nilai ujian', () => {\n  // Arrange — siapkan\n  const nilai = [80, 90, 100];\n\n  // Act — jalankan\n  const hasil = rataRata(nilai);\n\n  // Assert — periksa\n  expect(hasil).toBe(90);\n});",
            output: "✓ menghitung rata-rata nilai ujian",
            note: "Tiga bagian dipisah baris kosong. Saat test gagal, kamu langsung tahu apakah masalahnya di data atau di perhitungan.",
          },
          instruction:
            "Tulis satu test dengan tiga bagian jelas: siapkan `const data = [10, 20]`, jalankan `const hasil = total(data)`, lalu `expect(hasil).toBe(30)`.",
          starterCode:
            "function total(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}\n\n",
          language: "js",
          tests: [
            {
              pattern:
                "const\\s+data\\s*=\\s*\\[\\s*10\\s*,\\s*20\\s*\\]",
              message: "Arrange: const data = [10, 20];",
            },
            {
              pattern: "const\\s+hasil\\s*=\\s*total\\(\\s*data\\s*\\)",
              message: "Act: const hasil = total(data);",
            },
            {
              pattern:
                "expect\\(\\s*hasil\\s*\\)\\.toBe\\(\\s*30\\s*\\)",
              message: "Assert: expect(hasil).toBe(30);",
            },
          ],
          solution:
            "function total(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}\n\nit('menjumlahkan data penjualan', () => {\n  const data = [10, 20];\n  const hasil = total(data);\n  expect(hasil).toBe(30);\n});",
        },
        {
          kind: "step",
          id: "js-10-4",
          title: "Menguji edge case",
          explanation:
            "Test untuk kasus normal (*happy path*) mudah dan jarang menemukan bug. Bug bersembunyi di **edge case**: array kosong, nilai nol, angka negatif, `null`, string kosong. Kalau kamu hanya punya waktu menulis dua test, tulis satu happy path dan satu edge case.",
          example: {
            code: "function potong(teks, maks) {\n  if (teks.length <= maks) return teks;\n  return teks.slice(0, maks) + '…';\n}\n\n// happy path\nit('memotong teks panjang', () => {\n  expect(potong('abcdefg', 3)).toBe('abc…');\n});\n\n// edge case\nit('tidak memotong teks yang sudah pendek', () => {\n  expect(potong('ab', 5)).toBe('ab');\n});\n\nit('menangani teks kosong', () => {\n  expect(potong('', 5)).toBe('');\n});",
            output: "✓ tiga test lolos",
            note: "Daftar edge case yang wajib dipikirkan: kosong, nol, negatif, satu elemen, nilai sama dengan batas, dan nilai sangat besar.",
          },
          instruction:
            "Tambahkan dua test edge case untuk `total`: array kosong harus `toBe(0)`, dan array dengan angka negatif `[-5, 5]` harus `toBe(0)`.",
          starterCode:
            "function total(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}\n\n",
          language: "js",
          tests: [
            {
              pattern:
                "expect\\(\\s*total\\(\\s*\\[\\s*\\]\\s*\\)\\s*\\)\\.toBe\\(\\s*0\\s*\\)",
              message:
                "Tulis expect(total([])).toBe(0); untuk array kosong.",
            },
            {
              pattern:
                "expect\\(\\s*total\\(\\s*\\[\\s*-5\\s*,\\s*5\\s*\\]\\s*\\)\\s*\\)\\.toBe\\(\\s*0\\s*\\)",
              message:
                "Tulis expect(total([-5, 5])).toBe(0); untuk angka negatif.",
            },
          ],
          solution:
            "function total(arr) {\n  return arr.reduce((a, b) => a + b, 0);\n}\n\nit('mengembalikan 0 untuk array kosong', () => {\n  expect(total([])).toBe(0);\n});\n\nit('menangani angka negatif', () => {\n  expect(total([-5, 5])).toBe(0);\n});",
        },
        {
          kind: "step",
          id: "js-10-5",
          title: "Menguji error dengan toThrow",
          explanation:
            "Untuk memeriksa bahwa fungsi **melempar error**, `expect` harus menerima **fungsi**, bukan hasil pemanggilannya: `expect(() => bagi(1, 0)).toThrow()`. Kalau kamu menulis `expect(bagi(1, 0))`, errornya terjadi sebelum expect berjalan dan test gagal dengan pesan yang menyesatkan.",
          example: {
            code: "function ambilUmur(umur) {\n  if (umur < 0) throw new Error('Umur tidak valid');\n  return umur;\n}\n\n// ✅ expect menerima FUNGSI, jadi ia bisa menangkap errornya\nit('menolak umur negatif', () => {\n  expect(() => ambilUmur(-1)).toThrow();\n  expect(() => ambilUmur(-1)).toThrow('Umur tidak valid');\n});\n\n// ❌ salah: error meledak sebelum expect berjalan\n// expect(ambilUmur(-1)).toThrow();",
            output: "✓ menolak umur negatif",
            note: "Perhatikan () => di dalam expect. toThrow juga bisa diberi teks untuk memastikan pesan errornya benar.",
          },
          instruction:
            "Tulis test yang memeriksa `bagi(10, 0)` melempar error: `expect(() => bagi(10, 0)).toThrow()`.",
          starterCode:
            "function bagi(a, b) {\n  if (b === 0) throw new Error('Pembagi tidak boleh nol');\n  return a / b;\n}\n\n",
          language: "js",
          tests: [
            {
              pattern:
                "expect\\(\\s*\\(\\s*\\)\\s*=>\\s*bagi\\(\\s*10\\s*,\\s*0\\s*\\)\\s*\\)\\.toThrow\\(",
              message:
                "Tulis expect(() => bagi(10, 0)).toThrow(); — perhatikan expect menerima fungsi.",
            },
          ],
          solution:
            "function bagi(a, b) {\n  if (b === 0) throw new Error('Pembagi tidak boleh nol');\n  return a / b;\n}\n\nit('melempar error saat pembagi nol', () => {\n  expect(() => bagi(10, 0)).toThrow();\n});",
        },
        {
          kind: "quiz",
          id: "js-10-kuis",
          title: "Kuis: Testing",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "expect([1,2]).toBe([1,2]) akan gagal. Kenapa?",
              choices: [
                "Karena array tidak bisa diuji",
                "Karena toBe membandingkan identitas (seperti ===) dan dua array berbeda meski isinya sama — pakai toEqual",
                "Karena harus memakai toStrictEqual saja",
                "Karena panjang array tidak dicek",
              ],
              answerIndex: 1,
              explanation:
                "toBe memakai perbandingan referensi, dan dua array literal adalah dua object berbeda di memori. toEqual membandingkan isi secara rekursif — itulah yang kamu inginkan untuk array dan object.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Manakah nama test yang lebih baik?",
              choices: [
                "it('test total')",
                "it('mengembalikan 0 untuk array kosong')",
                "it('fungsi jalan')",
                "it('case 1')",
              ],
              answerIndex: 1,
              explanation:
                "Nama yang mendeskripsikan perilaku dan ekspektasi membuat laporan kegagalan langsung bermakna: kamu tahu apa yang rusak tanpa membuka kodenya. Nama seperti 'case 1' memaksa orang membaca isi test.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kenapa expect(() => bagi(1, 0)).toThrow() harus memakai arrow function di dalam expect?",
              choices: [
                "Agar test berjalan lebih cepat",
                "Agar expect yang memanggil fungsinya dan bisa menangkap errornya — kalau dipanggil langsung, error terjadi sebelum expect berjalan",
                "Karena arrow function wajib di semua expect",
                "Agar fungsinya jadi async",
              ],
              answerIndex: 1,
              explanation:
                "expect perlu mengendalikan kapan fungsi dijalankan agar bisa membungkusnya dalam try/catch internal. Kalau kamu memanggil langsung, error meledak lebih dulu dan test gagal dengan alasan yang salah.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kalau waktumu terbatas, test apa yang paling layak ditulis lebih dulu?",
              choices: [
                "Semua getter dan setter sederhana",
                "Satu happy path plus edge case pada logika yang paling berisiko (perhitungan, validasi, uang)",
                "Test untuk kode pihak ketiga",
                "Test yang mengejar coverage 100%",
              ],
              answerIndex: 1,
              explanation:
                "Nilai test terletak pada risiko yang dicegahnya. Logika perhitungan, validasi, dan yang menyangkut uang paling mahal kalau salah. Coverage 100% bisa dicapai tanpa menguji apa pun yang penting — angka itu bukan tujuan.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apa urutan pola Arrange–Act–Assert?",
              choices: [
                "Periksa hasil, jalankan fungsi, siapkan data",
                "Siapkan data, jalankan yang diuji, periksa hasilnya",
                "Jalankan fungsi, siapkan data, periksa hasil",
                "Urutannya tidak penting",
              ],
              answerIndex: 1,
              explanation:
                "Arrange (siapkan), Act (jalankan), Assert (periksa). Memisahkan ketiganya secara visual membuat test langsung terbaca — saat gagal, kamu tahu di bagian mana masalahnya tanpa membaca ulang seluruh test.",
            },
          ],
        },
      ],
    },
  ],
};
