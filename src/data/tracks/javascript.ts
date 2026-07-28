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
      slug: "persiapan-alat-kerja",
      title: "Persiapan & Alat Kerja",
      description:
        "Sebelum menulis satu baris logika: di mana JavaScript ditulis, bagaimana ia dijalankan, dan di mana pesan errornya muncul.",
      topics: [
        "Apa yang dikerjakan JavaScript — dan apa yang bukan tugasnya",
        "Tiga tempat JavaScript bisa dijalankan: tag script, berkas .js, konsol browser",
        "Menghubungkan berkas .js ke halaman (dan kenapa posisinya penting)",
        "Membuka DevTools & membaca panel Console",
        "console.log sebagai alat kerja utama, bukan sekadar contoh",
        "Membaca pesan error pertamamu tanpa panik",
      ],
      items: [
        {
          kind: "materi",
          id: "js-0-m1",
          title: "Di Mana JavaScript Ditulis dan Dijalankan",
          body:
            "# Pengertian\n\n" +
            "**JavaScript** adalah bahasa pemrograman yang dijalankan oleh browser. Kalau HTML menyusun isi halaman dan CSS mengatur tampilannya, JavaScript adalah satu-satunya dari ketiganya yang bisa **mengambil keputusan dan mengubah halaman setelah halaman itu terbuka**.\n\n" +
            "Pertanyaan yang jarang dijawab tutorial — dan justru yang membuat pemula macet di hari pertama — bukan \"apa itu variabel\", tapi **\"kodenya saya tulis di mana, dan bagaimana saya tahu ia jalan?\"**. Modul ini menjawab itu lebih dulu.\n\n" +
            "| Lapisan | Tugasnya | Contoh pertanyaan yang dijawabnya |\n" +
            "|---|---|---|\n" +
            "| **HTML** | struktur & makna | bagian mana yang judul, mana tombolnya? |\n" +
            "| **CSS** | tampilan | warnanya apa, letaknya di mana? |\n" +
            "| **JavaScript** | perilaku & logika | apa yang terjadi saat tombol itu diklik? |\n\n" +
            "## Tiga Tempat JavaScript Bisa Kamu Jalankan\n\n" +
            "```text\n" +
            "1. KONSOL BROWSER (paling cepat, untuk mencoba satu-dua baris)\n" +
            "   buka halaman apa pun -> F12 -> tab Console -> ketik -> Enter\n" +
            "   kodenya hilang saat halaman dimuat ulang\n" +
            "\n" +
            "2. TAG <script> DI DALAM HTML (untuk kode pendek)\n" +
            "   <script>\n" +
            "     console.log('halo');\n" +
            "   </script>\n" +
            "\n" +
            "3. BERKAS .js TERPISAH (cara yang dipakai di proyek nyata)\n" +
            "   index.html  <-- memuat berkasnya\n" +
            "   app.js      <-- kodenya di sini\n" +
            "   <script src=\"app.js\" defer></script>\n" +
            "```\n\n" +
            "Cara ketiga yang dipakai di dunia kerja, karena kode terpisah dari markup bisa dibaca, dicari, dan diuji. Dua cara pertama tetap berguna: konsol untuk memeriksa cepat, tag `<script>` untuk contoh sekali pakai.\n\n" +
            "## Kenapa `defer` Hampir Selalu Perlu\n\n" +
            "Browser membaca HTML dari atas ke bawah. Kalau `<script>` diletakkan di `<head>` tanpa `defer`, kodenya berjalan **sebelum** elemen halaman ada, sehingga usaha mengambil tombol menghasilkan `null`:\n\n" +
            "```text\n" +
            "TANPA defer (script di head)          DENGAN defer\n" +
            "-----------------------------         ------------------------------\n" +
            "1. baca <head>                        1. baca <head>, catat script\n" +
            "2. JALANKAN app.js  <-- tombol        2. bangun seluruh halaman\n" +
            "   belum ada -> null                  3. JALANKAN app.js -> tombol ada\n" +
            "3. bangun <body>\n" +
            "```\n\n" +
            "Dua jalan keluar yang sama-sama benar: tambahkan `defer`, atau letakkan `<script>` di baris terakhir sebelum `</body>`. Yang pertama lebih disukai sekarang.\n\n" +
            "## DevTools: Panel yang Akan Kamu Buka Setiap Hari\n\n" +
            "| Tab | Isinya | Kapan dipakai |\n" +
            "|---|---|---|\n" +
            "| **Console** | pesan `console.log` dan **semua error** | selalu — ini tempat pertama yang dilihat saat ada yang tidak jalan |\n" +
            "| **Elements** | struktur halaman saat ini | memeriksa apakah JavaScript benar-benar mengubah isi halaman |\n" +
            "| **Network** | permintaan ke server | nanti, saat belajar `fetch` |\n" +
            "| **Sources** | berkas & breakpoint | saat butuh menghentikan kode di satu baris |\n\n" +
            "Membukanya: `F12`, atau `Ctrl+Shift+I` (Windows/Linux), atau `Cmd+Option+I` (macOS).\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan sebuah toko. **HTML** adalah rak, meja kasir, dan papan namanya. **CSS** adalah warna dinding dan penataan lampunya. **JavaScript** adalah **pegawainya**: ia yang menghitung total belanja, menolak kartu yang kedaluwarsa, dan mengganti label \"stok habis\" saat barang terakhir terjual.\n\n" +
            "Karena itu urutan belajarnya begini: pegawai tidak bisa bekerja di toko yang raknya belum ada.\n\n" +
            "## Membaca Pesan Error Tanpa Panik\n\n" +
            "Error di JavaScript **tidak** menghentikan halaman secara diam-diam seperti HTML. Ia muncul di Console dengan bentuk yang selalu sama:\n\n" +
            "```text\n" +
            "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')\n" +
            "    at app.js:3\n" +
            "^jenis error        ^apa yang terjadi                    ^berkas:baris\n" +
            "```\n\n" +
            "Baca dari kanan: **baris 3 di `app.js`**. Lalu ke tengah: sesuatu bernilai `null` padahal dipakai seolah objek. Tiga jenis error yang akan paling sering kamu lihat: `SyntaxError` (salah tulis, kode tidak jalan sama sekali), `ReferenceError` (nama yang dipakai tidak pernah dibuat), `TypeError` (nilainya ada tapi bukan jenis yang diharapkan).\n\n" +
            "## Jebakan yang Menjatuhkan Hampir Semua Pemula\n\n" +
            "1. **Mengira kode tidak jalan padahal errornya tidak dibaca.** Halaman terlihat diam karena JavaScript berhenti di baris pertama yang error. Konsol sudah memberi tahu alasannya — kebiasaan membuka Console lebih dulu menghemat berjam-jam.\n" +
            "2. **Salah nama berkas di `src`.** `<script src=\"App.js\">` untuk berkas bernama `app.js` gagal di sebagian sistem (huruf besar-kecil dibedakan), dan gagalnya **senyap** kecuali kamu melihat tab Network atau pesan 404 di Console.\n" +
            "3. **Menaruh `<script>` di `<head>` tanpa `defer`.** Ini penyebab nomor satu error `null` pada pemula.\n" +
            "4. **Menulis JavaScript di dalam berkas `.css`, atau menyalin `<script>` ke dalam berkas `.js`.** Berkas `.js` berisi kode saja — tanpa tag apa pun.\n" +
            "5. **Mengira `console.log` menampilkan sesuatu di halaman.** Ia menulis ke Console, bukan ke layar. Untuk mengubah halaman, nanti kamu memakai DOM.\n" +
            "6. **Lupa menyimpan lalu menyalahkan kodenya.** Simpan, muat ulang (`F5`), baru menilai.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "- Di **code review**, `console.log` yang tertinggal di kode produksi hampir selalu diminta dihapus. Ia alat kerja saat mengembangkan, bukan bagian dari fitur.\n" +
            "- Pertanyaan **interview** yang sangat sering muncul untuk junior: \"apa bedanya `defer` dan `async` pada tag script?\" Jawabannya berakar pada diagram di atas.\n" +
            "- Kemampuan yang paling cepat membedakan pemula dari yang sudah bisa bekerja bukan hafalan sintaks, melainkan **membaca pesan error lalu menemukan barisnya**. Itulah yang dilatih sejak modul ini.\n\n" +
            "> **Kapan dipakai:** setiap kali kamu memulai berkas JavaScript baru — hubungkan dengan `defer`, buka Console, dan pastikan satu `console.log` muncul sebelum menulis logika sungguhan. Langkah kecil ini memastikan kamu men-debug logika, bukan men-debug pemasangan berkas.\n\n" +
            "> **Catatan tentang latihan di BiLearn:** untuk step berbahasa JavaScript, kode yang kamu tulis benar-benar dijalankan di panel preview, dan panel keluaran konsol muncul otomatis di bawahnya — jadi kamu tidak perlu menyiapkan `index.html` sendiri di sini.",
        },
        {
          kind: "step",
          id: "js-0-1",
          title: "Menghubungkan berkas .js ke halaman",
          explanation:
            "Di proyek nyata, kode JavaScript hidup di berkas terpisah lalu dipanggil dari HTML memakai `<script src=\"...\">`. Atribut `defer` menyuruh browser menyelesaikan pembuatan halaman lebih dulu, baru menjalankan kodenya — tanpa itu, kode yang mencari elemen halaman akan mendapat `null` karena elemennya belum lahir. Kamu memakainya setiap kali memulai proyek baru, dan salah menuliskan nama berkas adalah kegagalan yang paling senyap: tidak ada yang muncul di layar, dan satu-satunya petunjuk adalah pesan 404 di Console. Jebakan lainnya, tag `<script>` **wajib** ditutup dengan `</script>` meskipun isinya kosong; menulisnya sebagai `<script src=\"app.js\" />` tidak dikenali HTML dan seluruh sisa halamanmu bisa ikut tidak tampil.",
          example: {
            code:
              "<!-- ❌ dijalankan sebelum halaman ada -->\n" +
              "<head>\n" +
              "  <script src=\"main.js\"></script>\n" +
              "</head>\n\n" +
              "<!-- ✅ menunggu halaman selesai dibangun -->\n" +
              "<head>\n" +
              "  <script src=\"main.js\" defer></script>\n" +
              "</head>",
            output:
              "Versi pertama, Console:\n" +
              "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')\n\n" +
              "Versi kedua, Console:\n" +
              "(tidak ada error — elemen sudah ada saat kode berjalan)",
            note: "Kalau kamu tidak boleh mengubah `<head>`, alternatif yang sama benarnya adalah menaruh `<script src=\"main.js\"></script>` tepat sebelum `</body>`.",
          },
          instruction:
            "Halaman ini akan memakai kode dari berkas bernama `app.js` yang berada di folder yang sama. Tambahkan tag pemuat berkas itu di dalam `<head>`, dan pastikan kodenya baru berjalan setelah seluruh halaman selesai dibangun.",
          starterCode:
            "<!DOCTYPE html>\n" +
            "<html lang=\"id\">\n" +
            "<head>\n" +
            "  <title>Latihan JS</title>\n" +
            "  <!-- tambahkan pemuat berkas app.js di bawah ini -->\n" +
            "</head>\n" +
            "<body>\n" +
            "  <button id=\"kirim\">Kirim</button>\n" +
            "</body>\n" +
            "</html>\n",
          language: "html",
          tests: [
            {
              pattern: "<script(?=[^>]*src=['\"]\\.?/?app\\.js['\"])[^>]*>",
              message:
                "Belum ada `<script>` yang memuat `app.js`. Isi atribut `src` dengan nama berkasnya — perhatikan huruf kecil semua.",
            },
            {
              pattern: "<script(?=[^>]*src=['\"]\\.?/?app\\.js['\"])(?=[^>]*\\bdefer\\b)[^>]*>",
              message:
                "Tag-nya sudah ada, tapi belum menunggu halaman selesai dibangun. Tambahkan atribut `defer` (tanpa nilai) pada tag `<script>` itu.",
            },
            {
              pattern: "<script[^>]*src=['\"][^'\"]*app\\.js['\"][^>]*>\\s*</script>",
              message:
                "Tutup tag-nya dengan `</script>` meskipun isinya kosong. Bentuk `<script ... />` tidak dikenali HTML.",
            },
          ],
          solution:
            "<!DOCTYPE html>\n" +
            "<html lang=\"id\">\n" +
            "<head>\n" +
            "  <title>Latihan JS</title>\n" +
            "  <script src=\"app.js\" defer></script>\n" +
            "</head>\n" +
            "<body>\n" +
            "  <button id=\"kirim\">Kirim</button>\n" +
            "</body>\n" +
            "</html>",
        },
        {
          kind: "step",
          id: "js-0-2",
          title: "console.log: alat kerja pertamamu",
          explanation:
            "`console.log()` menuliskan nilai ke panel **Console** di DevTools, bukan ke halaman. Fungsinya sederhana tapi perannya besar: inilah cara kamu memeriksa apakah kode benar-benar sampai ke suatu baris dan apa isi sebuah nilai pada saat itu. Kamu bisa memberinya beberapa argumen sekaligus, dipisah koma, dan semuanya dicetak dalam satu baris dipisah spasi. Jebakan yang sering: menulis `console.log` tanpa tanda kurung sama sekali (tidak terjadi apa-apa), atau lupa bahwa **teks harus dibungkus tanda kutip** sementara nama variabel justru tidak boleh dikutip — `console.log('harga')` mencetak kata `harga`, sedangkan `console.log(harga)` mencetak isinya. Terakhir, jangan lupa menghapus log sisa percobaan sebelum menyerahkan kode ke tim.",
          example: {
            code:
              "const namaProduk = 'Kopi Gayo';\n" +
              "const stok = 12;\n\n" +
              "console.log('memeriksa data produk');\n" +
              "console.log(namaProduk, stok);\n" +
              "console.log('stok'); // teks apa adanya, bukan isi variabel",
            output: "memeriksa data produk\nKopi Gayo 12\nstok",
            note: "Perhatikan dua baris terakhir: yang berbeda hanya tanda kutip, tapi hasilnya jauh berbeda. Itu sumber kebingungan yang sangat umum di minggu pertama.",
          },
          instruction:
            "Panel keluaran di bawah masih kosong. Buat satu variabel bernama `pesan` yang berisi teks `Halo BiLearn`, lalu cetak **isi variabel itu** ke konsol — bukan tulisan `pesan`.",
          starterCode: "// tulis kodenya di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "(const|let)\\s+pesan\\s*=\\s*['\"]Halo BiLearn['\"]",
              message:
                "Buat dulu variabelnya: pakai `const` atau `let`, beri nama `pesan`, dan isi dengan teks yang diminta di dalam tanda kutip.",
            },
            {
              pattern: "console\\.log\\(\\s*pesan\\s*\\)",
              message:
                "Cetak isi variabelnya, jadi nama `pesan` di dalam `console.log()` TIDAK dibungkus tanda kutip. Kalau dikutip, yang tercetak justru kata \"pesan\".",
            },
          ],
          solution: "const pesan = 'Halo BiLearn';\nconsole.log(pesan);",
        },
        {
          kind: "step",
          id: "js-0-3",
          title: "Membaca pesan error dan memperbaikinya",
          explanation:
            "Ada tiga jenis error yang akan menemanimu terus: `SyntaxError` berarti tulisannya salah sehingga tidak ada satu baris pun yang dijalankan, `ReferenceError` berarti kamu memakai nama yang belum pernah dibuat, dan `TypeError` berarti nilainya ada tapi diperlakukan sebagai jenis yang bukan dirinya. Pesan error selalu menyebutkan **berkas dan baris**, dan itulah bagian yang dibaca lebih dulu — bukan menebak-nebak dari awal berkas. Kebiasaan yang membedakan orang yang cepat maju: baca pesannya sampai habis, buka barisnya, baru berpikir. Jebakan yang sering terjadi pada `ReferenceError` adalah salah huruf besar-kecil, karena JavaScript membedakan `totalHarga` dan `totalharga` sebagai dua nama berbeda.",
          example: {
            code:
              "const totalHarga = 50000;\n" +
              "console.log(totalharga);   // huruf H kecil\n" +
              "console.log('selesai');",
            output:
              "Uncaught ReferenceError: totalharga is not defined\n    at app.js:2\n\n" +
              "(baris ke-3 TIDAK pernah berjalan — eksekusi berhenti di error)",
            note: "Perhatikan `selesai` tidak muncul. Error yang tidak ditangani menghentikan sisa kode, jadi \"kodeku cuma jalan separuh\" hampir selalu berarti ada error di Console.",
          },
          instruction:
            "Kode di editor gagal dengan `ReferenceError` karena nama variabel yang dicetak tidak sama dengan nama yang dibuat. Perbaiki pemanggilannya sehingga konsol menampilkan angka `50000`, dan biarkan nama variabel aslinya apa adanya.",
          starterCode:
            "const totalHarga = 50000;\n" + "console.log(totalharga);\n",
          language: "js",
          tests: [
            {
              pattern: "console\\.log\\(\\s*totalHarga\\s*\\)",
              message:
                "Sesuaikan nama di dalam `console.log()` dengan nama variabel yang dideklarasikan. JavaScript membedakan huruf besar dan kecil.",
            },
            {
              pattern: "totalharga",
              flags: "", // sengaja peka huruf besar-kecil: totalHarga ≠ totalharga
              mustNotMatch: true,
              message:
                "Masih ada `totalharga` (huruf h kecil) yang tertinggal di kode. Selama nama itu ada, `ReferenceError` tetap muncul.",
            },
          ],
          solution: "const totalHarga = 50000;\nconsole.log(totalHarga);",
        },
        {
          kind: "step",
          id: "js-0-4",
          title: "Memeriksa jenis nilai dengan typeof",
          explanation:
            "`typeof` memberi tahu jenis sebuah nilai dalam bentuk teks: `'string'`, `'number'`, `'boolean'`, `'undefined'`, atau `'object'`. Ini alat pemeriksa cepat saat sebuah nilai tidak berperilaku seperti dugaanmu — misalnya angka dari form yang ternyata berupa teks, sehingga `'2' + 3` menghasilkan `'23'` alih-alih `5`. Kamu akan sering memakainya berpasangan dengan `console.log` saat menelusuri data yang datang dari luar (input pengguna, API). Dua jebakan yang wajib kamu tahu sejak awal: `typeof null` mengembalikan `'object'` — kekeliruan bersejarah di JavaScript yang tidak pernah diperbaiki — dan `typeof` sebuah array juga `'object'`, bukan `'array'`, sehingga memeriksa array dilakukan dengan `Array.isArray()`.",
          example: {
            code:
              "const umur = 20;\n" +
              "const umurDariForm = '20';\n\n" +
              "console.log(typeof umur, typeof umurDariForm);\n" +
              "console.log(umur + 1, umurDariForm + 1);\n" +
              "console.log(typeof null, typeof [1, 2]);",
            output: "number string\n21 201\nobject object",
            note: "Baris kedua adalah alasan `typeof` ada: `'20' + 1` menempelkan teks, bukan menjumlahkan. Bug seperti ini paling sering datang dari nilai form yang selalu berupa string.",
          },
          instruction:
            "Variabel `hargaInput` di editor berisi angka dalam bentuk teks. Tanpa mengubah nilainya, cetak **jenis** nilai variabel itu ke konsol supaya kamu bisa membuktikan penyebab bug penjumlahannya.",
          starterCode:
            "const hargaInput = '15000';\n" + "// cetak jenis nilainya di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "console\\.log\\(\\s*typeof\\s+hargaInput\\s*\\)|console\\.log\\(\\s*typeof\\s*\\(\\s*hargaInput\\s*\\)\\s*\\)",
              message:
                "Pakai `typeof` di dalam `console.log()` untuk memeriksa jenis nilai `hargaInput`. `typeof` tidak butuh tanda kurung, tapi memakainya juga boleh.",
            },
            {
              pattern: "hargaInput\\s*=\\s*['\"]15000['\"]",
              message:
                "Biarkan nilai `hargaInput` apa adanya (tetap berupa teks `'15000'`) — yang diminta hanya memeriksa jenisnya, bukan memperbaikinya.",
            },
          ],
          solution: "const hargaInput = '15000';\nconsole.log(typeof hargaInput);",
        },
        {
          kind: "quiz",
          id: "js-0-kuis",
          title: "Kuis: Persiapan & Alat Kerja",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kamu menaruh `<script src=\"app.js\"></script>` di dalam `<head>` tanpa `defer`. Kodenya mencari tombol di halaman dan gagal dengan `TypeError: ... null`. Apa penyebabnya?",
              choices: [
                "Nama berkasnya salah, seharusnya App.js",
                "Kode berjalan sebelum elemen tombol dibuat browser",
                "JavaScript tidak boleh dipanggil dari head sama sekali",
                "Tombol harus punya atribut onclick agar bisa dibaca",
              ],
              answerIndex: 1,
              explanation:
                "Browser membaca HTML dari atas ke bawah. Script di `head` tanpa `defer` dijalankan saat `<body>` belum dibangun, jadi pencarian tombol menghasilkan `null`. Pilihan pertama menggoda karena kesalahan nama berkas juga umum, tapi gejalanya berbeda: yang muncul adalah 404 di Console, bukan `null`. Memanggil script dari `head` sendiri tidak dilarang — asalkan memakai `defer`.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Apa perbedaan hasil `console.log(harga)` dan `console.log('harga')` jika `const harga = 5000`?",
              choices: [
                "Keduanya mencetak 5000",
                "Yang pertama mencetak 5000, yang kedua mencetak tulisan harga",
                "Yang pertama error karena variabel harus dikutip",
                "Keduanya mencetak tulisan harga",
              ],
              answerIndex: 1,
              explanation:
                "Tanda kutip menandai teks apa adanya, sedangkan tanpa kutip berarti nama variabel yang isinya dibaca. Ini kelihatan sepele tapi jadi sumber kebingungan nyata saat pemula men-debug: log-nya muncul, tapi yang tercetak nama variabelnya, bukan nilainya.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Halaman terlihat 'tidak melakukan apa-apa' dan tidak ada perubahan di layar. Apa langkah pertama yang paling masuk akal?",
              choices: [
                "Menulis ulang seluruh kode dari awal",
                "Menambahkan lebih banyak CSS agar terlihat",
                "Membuka DevTools dan membaca tab Console",
                "Mengganti browser",
              ],
              answerIndex: 2,
              explanation:
                "Error JavaScript menghentikan eksekusi dan melaporkan penyebabnya di Console, lengkap dengan berkas dan nomor baris. Menulis ulang kode tanpa membaca error berarti membuang informasi yang sudah diberikan gratis — dan kebiasaan membuka Console lebih dulu inilah yang paling cepat membedakan pemula dari orang yang sudah bisa bekerja.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kamu memakai nama variabel `totalHarga`, tapi menulis `console.log(totalharga)`. Error apa yang muncul?",
              choices: [
                "SyntaxError, karena tulisannya tidak valid",
                "TypeError, karena jenis nilainya salah",
                "ReferenceError, karena nama itu belum pernah dibuat",
                "Tidak ada error, JavaScript mengabaikan huruf besar-kecil",
              ],
              answerIndex: 2,
              explanation:
                "JavaScript membedakan huruf besar dan kecil, jadi `totalharga` dianggap nama yang belum pernah dideklarasikan — itu definisi `ReferenceError`. `SyntaxError` muncul kalau tulisannya melanggar aturan bahasa (misalnya kurung tidak tertutup), dan `TypeError` muncul kalau nilainya ada tapi diperlakukan sebagai jenis yang bukan dirinya.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Nilai dari form selalu berupa teks. Apa hasil `'20' + 1` dan bagaimana cara paling cepat membuktikan penyebabnya?",
              choices: [
                "Hasilnya 21; buktikan dengan console.log saja",
                "Hasilnya '201'; buktikan dengan typeof pada nilainya",
                "Hasilnya error; buktikan dengan membuka tab Network",
                "Hasilnya 20; buktikan dengan mengganti browser",
              ],
              answerIndex: 1,
              explanation:
                "Karena sisi kiri berupa string, operator `+` menempelkan teks alih-alih menjumlahkan, sehingga hasilnya `'201'`. `typeof` adalah pemeriksa tercepat untuk membedakan `number` dan `string` pada nilai yang datang dari luar. Ini bukan kasus langka — hampir semua bug penjumlahan pada formulir pemula berakar di sini.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Mana pernyataan yang benar tentang tempat menulis JavaScript?",
              choices: [
                "Berkas .js berisi kode saja, tanpa tag <script> di dalamnya",
                "Berkas .js wajib dibuka dengan <script> dan ditutup dengan </script>",
                "Kode di konsol browser tersimpan permanen di halaman",
                "JavaScript harus ditulis di dalam berkas .css agar bisa dipakai",
              ],
              answerIndex: 0,
              explanation:
                "Tag `<script>` adalah penanda milik HTML; di dalam berkas `.js` ia tidak diperlukan dan justru memicu `SyntaxError`. Kode yang diketik di konsol hilang saat halaman dimuat ulang — berguna untuk mencoba, bukan untuk menyimpan. Dan `.css` hanya untuk aturan tampilan.",
            },
          ],
        },
      ],
    },
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
          kind: "materi",
          id: "js-1-m1",
          title: "Nilai, Keputusan, dan Pengulangan",
          body:
            "# Pengertian\n\n" +
            "HTML menyusun isi, CSS mengatur tampilan, dan **JavaScript adalah satu-satunya dari ketiganya yang bisa berpikir**: menghitung, membandingkan, mengambil keputusan, mengulang pekerjaan, dan mengubah halaman setelah halaman itu terbuka.\n\n" +
            "Berbeda dari dua track sebelumnya, di sini kamu tidak lagi mendeskripsikan sesuatu — kamu memberi **urutan instruksi** yang dijalankan dari atas ke bawah.\n\n" +
            "## Tiga Bahan Dasar Setiap Program\n\n" +
            "```text\n" +
            "1. NILAI      data yang disimpan            const harga = 25000\n" +
            "2. KEPUTUSAN  memilih jalan                 if (stok > 0) { ... }\n" +
            "3. PENGULANGAN mengerjakan berulang         for (const item of daftar)\n" +
            "```\n\n" +
            "Seluruh program apa pun — dari kalkulator sampai aplikasi bank — tersusun dari tiga hal itu digabungkan dan disusun bertingkat.\n\n" +
            "## Wadah Nilai: let dan const\n\n" +
            "| Kata kunci | Nilainya boleh diganti? | Kapan dipakai |\n" +
            "|---|---|---|\n" +
            "| `const` | tidak | **pilihan utama** — hampir semua variabel |\n" +
            "| `let` | boleh | hanya bila nilainya memang berubah (penghitung, penampung sementara) |\n" +
            "| `var` | boleh | jangan dipakai lagi; aturan wilayahnya berbeda dan sering memunculkan bug |\n\n" +
            "> **Satu hal yang sering disalahpahami:** `const` mengunci **wadahnya**, bukan isinya. `const daftar = [1, 2]` masih memperbolehkan `daftar.push(3)` — yang dilarang adalah `daftar = [4]`. Ini akan dibahas tuntas di modul Array & Object.\n\n" +
            "## Tipe Data yang Akan Kamu Pakai Terus\n\n" +
            "| Tipe | Isinya | Contoh |\n" +
            "|---|---|---|\n" +
            "| `string` | teks | `'Bimo'`, `\"Kopi\"`, `` `Halo ${nama}` `` |\n" +
            "| `number` | semua angka, bulat maupun desimal | `20`, `-7`, `3.14` |\n" +
            "| `boolean` | benar atau salah | `true`, `false` |\n" +
            "| `null` | **sengaja** dikosongkan | `null` |\n" +
            "| `undefined` | belum pernah diisi | `undefined` |\n\n" +
            "Perbedaan `null` dan `undefined` bukan soal gaya: `undefined` biasanya berarti \"kamu lupa mengisi ini\", sedangkan `null` berarti \"ini memang kosong, dan itu disengaja\".\n\n" +
            "## Type Coercion: Sumber Bug Paling Terkenal\n\n" +
            "JavaScript diam-diam mengubah tipe nilai saat dua tipe berbeda bertemu, dan hasilnya sering mengejutkan:\n\n" +
            "```text\n" +
            "'5' + 1     ->  '51'      (+ dengan string berarti MENYAMBUNG)\n" +
            "'5' - 1     ->  4         (- tidak punya arti untuk teks, jadi teks diubah jadi angka)\n" +
            "'5' == 5    ->  true      (dikonversi dulu sebelum dibandingkan)\n" +
            "'5' === 5   ->  false     (bandingkan nilai DAN tipe, tanpa konversi)\n" +
            "```\n\n" +
            "Dua kebiasaan yang menyelamatkanmu dari seluruh kelas bug ini: **selalu pakai `===`**, dan **konversi secara terbuka** dengan `Number(x)` atau `String(x)` saat memang perlu. Ini bukan teori — nilai dari input form **selalu** berupa string, jadi `nilai + 1` pada input angka menghasilkan teks, bukan penjumlahan.\n\n" +
            "## Truthy dan Falsy\n\n" +
            "Di dalam `if`, nilai apa pun diubah menjadi benar/salah. Yang **falsy hanya enam**:\n\n" +
            "```text\nfalse    0    ''    null    undefined    NaN\n```\n\n" +
            "Sisanya truthy — termasuk yang terasa \"kosong\": `'0'`, `'false'`, `[]`, dan `{}`. Karena itu `if (daftar)` **selalu** benar meski daftarnya kosong; yang benar adalah `if (daftar.length > 0)`.\n\n" +
            "## Tiga Bentuk Keputusan\n\n" +
            "```js\n" +
            "// 1. if / else if / else — paling umum, boleh serumit apa pun\n" +
            "if (nilai >= 80) { ... } else if (nilai >= 70) { ... } else { ... }\n\n" +
            "// 2. ternary — satu keputusan singkat yang MENGHASILKAN nilai\n" +
            "const status = nilai >= 60 ? 'lulus' : 'gagal';\n\n" +
            "// 3. switch — satu nilai dibandingkan ke banyak kemungkinan tetap\n" +
            "switch (peran) {\n" +
            "  case 'admin': ...; break;   // break WAJIB, kalau tidak jatuh ke case berikutnya\n" +
            "  default: ...;\n" +
            "}\n" +
            "```\n\n" +
            "Ternary akan kamu pakai sangat sering nanti di React karena ia menghasilkan nilai dan bisa disisipkan di tengah tampilan. Aturan praktisnya: satu keputusan sederhana pakai ternary, keputusan bertingkat pakai `if` — ternary bersarang adalah salah satu hal yang paling sering dikomentari di code review.\n\n" +
            "## Tiga Bentuk Pengulangan\n\n" +
            "| Bentuk | Pakai saat |\n" +
            "|---|---|\n" +
            "| `for (let i = 0; i < n; i++)` | kamu benar-benar butuh nomor indeksnya |\n" +
            "| `for (const item of daftar)` | hanya butuh isinya — **paling sering tepat** |\n" +
            "| `while (kondisi)` | jumlah putaran tidak diketahui, berhenti karena kondisi |\n\n" +
            "Dua kesalahan batas yang klasik: menulis `i <= daftar.length` (kelebihan satu putaran, hasilnya `undefined`), dan lupa mengubah kondisi di dalam `while` sehingga perulangannya tidak pernah berhenti dan tab browser membeku.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Program itu seperti **resep masakan**. Variabel adalah bahan yang sudah ditakar dan diberi label. Kondisi adalah instruksi bercabang — \"kalau kuahnya kurang asin, tambahkan garam\". Perulangan adalah \"aduk sepuluh kali\". Dan resep dibaca dari atas ke bawah: langkah kelima tidak bisa memakai bahan yang baru disiapkan di langkah kesembilan. Itu sebabnya urutan penulisan kode benar-benar menentukan.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Memakai `==`.** Konversi diam-diamnya membuat `0 == ''` bernilai benar.\n" +
            "2. **Menjumlahkan nilai dari input form.** Isinya string, jadi `+` menyambung. Bungkus dengan `Number()`.\n" +
            "3. **`if (array)` untuk memeriksa array kosong.** Array kosong itu truthy; pakai `.length`.\n" +
            "4. **Salah batas pada loop.** Indeks mulai dari 0, jadi batasnya `<`, bukan `<=`.\n" +
            "5. **Lupa `break` di `switch`.** Eksekusi jatuh ke case berikutnya tanpa peringatan.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** setiap hari, di setiap baris. Dan dua hal dari modul ini muncul di hampir semua technical interview JavaScript: perbedaan `==` dan `===`, serta daftar nilai falsy. Keduanya ditanyakan bukan untuk menguji hafalan, tapi karena orang yang tidak menguasainya akan menulis bug yang sama berulang kali.",
        },
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
            "Backtick (`` ` ``) memungkinkan menyisipkan nilai langsung ke dalam string dengan `${...}`, dan mendukung baris baru tanpa `\\n`. Ini menggantikan penggabungan string dengan `+` yang cepat jadi tidak terbaca begitu ada lebih dari dua variabel. Backtick juga membuat string multi-baris jadi rapi tanpa tanda plus di setiap ujung baris, dan di dalam `${...}` kamu boleh menulis ekspresi apa pun, bukan sekadar nama variabel.",
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
            "Kondisi dievaluasi **berurutan dari atas**, dan yang pertama bernilai true langsung dijalankan — sisanya dilewati. Karena itu urutan pengecekan penting: kalau kamu menulis `nilai >= 60` sebelum `nilai >= 80`, nilai 90 akan salah masuk kategori. Susun kondisi dari yang paling ketat ke yang paling longgar, dan pakai `else` di akhir sebagai jaring pengaman agar tidak ada masukan yang lolos tanpa penanganan.",
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
            "`for (let i = 1; i <= 5; i++)` punya tiga bagian: nilai awal, kondisi lanjut, dan perubahan tiap putaran. Kesalahan klasik: memakai `i <= panjang` saat mengakses array (indeks dimulai dari 0, jadi seharusnya `i < panjang`) — hasilnya `undefined` di putaran terakhir. Kalau yang kamu butuhkan hanya menelusuri isi array tanpa mengurus indeks, `for...of` lebih ringkas dan lebih kecil kemungkinannya salah batas.",
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
          kind: "step",
          id: "js-1-7",
          title: "for...of dan while",
          explanation:
            "Selain `for` klasik, ada dua bentuk perulangan yang sering lebih tepat. `for...of` menelusuri isi array satu per satu tanpa kamu mengurus indeks — lebih pendek dan menghilangkan seluruh kelas kesalahan batas seperti `<=` yang kelebihan satu putaran. `while` dipakai ketika jumlah putarannya tidak diketahui di awal dan hanya bergantung pada sebuah kondisi, misalnya membaca data sampai habis. Bahaya `while` adalah lupa mengubah kondisinya di dalam blok: perulangan tidak pernah berhenti dan tab browser membeku. Pilih `for...of` untuk isi array, `for` klasik saat kamu benar-benar butuh indeksnya, dan `while` saat berhentinya ditentukan kondisi.",
          example: {
            code: "const antre = ['Ani', 'Budi'];\n\nfor (const nama of antre) {\n  console.log('Melayani ' + nama);\n}\n\nlet sisa = 2;\nwhile (sisa > 0) {\n  console.log('Sisa tiket: ' + sisa);\n  sisa = sisa - 1;\n}",
            output: "Melayani Ani\nMelayani Budi\nSisa tiket: 2\nSisa tiket: 1",
          },
          instruction:
            "Array `nilai` berisi beberapa angka. Cetak setiap angkanya satu per satu memakai bentuk perulangan yang menelusuri isi array tanpa memakai indeks.",
          starterCode: "const nilai = [80, 92, 75];\n\n",
          language: "js",
          tests: [
            {
              pattern: "for\\s*\\(\\s*(const|let)\\s+\\w+\\s+of\\s+nilai\\s*\\)",
              message:
                "Pakai for (const n of nilai) { ... }",
            },
            {
              pattern: "console\\.log\\(",
              message:
                "Cetak tiap angkanya dengan console.log().",
            },
            {
              pattern: "nilai\\[",
              mustNotMatch: true,
              message:
                "Di sini jangan mengakses lewat indeks — itulah gunanya for...of.",
            },
          ],
          solution: "const nilai = [80, 92, 75];\n\nfor (const n of nilai) {\n  console.log(n);\n}",
        },
        {
          kind: "step",
          id: "js-1-8",
          title: "Ternary dan switch",
          explanation:
            "Selain `if`, ada dua bentuk keputusan yang punya wilayahnya sendiri. **Ternary** ditulis `kondisi ? nilaiBenar : nilaiSalah` dan bedanya dengan `if` bukan soal panjang: ternary **menghasilkan nilai**, sehingga bisa langsung ditaruh di sisi kanan tanda sama dengan atau disisipkan ke dalam template literal — dan itulah sebabnya ia muncul di mana-mana nanti di React. **switch** dipakai ketika satu nilai dibandingkan ke banyak kemungkinan tetap; ia membandingkan dengan `===`, jadi `'1'` tidak akan cocok dengan `case 1`. Dua jebakan yang wajib diingat: pada `switch`, lupa menulis `break` membuat eksekusi **jatuh ke case berikutnya** tanpa peringatan apa pun, dan `default` sebaiknya selalu ada sebagai jaring pengaman. Sedangkan pada ternary, jebakannya adalah menyarangkannya: ternary di dalam ternary di dalam ternary hampir mustahil dibaca ulang, dan itu salah satu hal yang paling sering diminta diubah saat code review.",
          example: {
            code:
              "const umur = 20;\n\n" +
              "// ternary: menghasilkan NILAI, jadi bisa langsung disimpan\n" +
              "const status = umur >= 17 ? 'dewasa' : 'anak';\n" +
              "console.log(`Status: ${status}`);\n\n" +
              "// switch: satu nilai, banyak kemungkinan tetap\n" +
              "const peran = 'editor';\n" +
              "switch (peran) {\n" +
              "  case 'admin':\n" +
              "    console.log('Akses penuh');\n" +
              "    break;\n" +
              "  case 'editor':\n" +
              "    console.log('Boleh mengubah artikel');\n" +
              "    break;\n" +
              "  default:\n" +
              "    console.log('Hanya membaca');\n" +
              "}",
            output: "Status: dewasa\nBoleh mengubah artikel",
            note: "Tanpa `break` pada case 'editor', keluaran berikutnya ('Hanya membaca') akan ikut tercetak — itulah yang disebut fall-through.",
          },
          instruction:
            "Variabel `nilai` berisi 45. Buat `const lulus` yang berisi teks `'lulus'` bila nilai minimal 60 dan `'remedial'` bila tidak, memakai bentuk keputusan yang menghasilkan nilai dalam satu baris — bukan `if`. Lalu cetak hasilnya.",
          starterCode: "const nilai = 45;\n\n",
          language: "js",
          tests: [
            {
              pattern:
                "const\\s+lulus\\s*=\\s*nilai\\s*>=\\s*60\\s*\\?\\s*['\"]lulus['\"]\\s*:\\s*['\"]remedial['\"]",
              message:
                "Pakai ternary: `const lulus = nilai >= 60 ? 'lulus' : 'remedial';` — tanda tanya memisahkan kondisi dari hasil, titik dua memisahkan kedua hasilnya.",
            },
            {
              pattern: "console\\.log\\(",
              message: "Cetak hasilnya dengan `console.log`.",
            },
            {
              pattern: "\\bif\\s*\\(",
              mustNotMatch: true,
              message:
                "Untuk latihan ini jangan pakai `if` — intinya melatih bentuk yang menghasilkan nilai, karena bentuk itulah yang nanti dipakai di dalam JSX React.",
            },
          ],
          solution:
            "const nilai = 45;\n\n" +
            "const lulus = nilai >= 60 ? 'lulus' : 'remedial';\n" +
            "console.log(lulus);",
        },
        {
          kind: "quiz",
          id: "js-1-kuis",
          title: "Kuis: Dasar JavaScript",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa yang ditampilkan oleh console.log('5' === 5)? Perhatikan operator perbandingan yang digunakan.",
              choices: ["false", "true", "undefined", "TypeError"],
              answerIndex: 0,
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
              type: "pilihan-ganda",
              question: "Sebuah loop ditulis: for (let i = 0; i < 3; i++) { console.log(i); } — berapa nilai TERAKHIR yang ditampilkan?",
              choices: ["2", "3", "0", "1"],
              answerIndex: 0,
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
          kind: "materi",
          id: "js-2-m1",
          title: "Fungsi, Scope, dan Closure",
          body:
            "# Pengertian\n\n" +
            "**Fungsi** adalah sepotong pekerjaan yang diberi nama, sehingga bisa dipanggil kapan saja tanpa menulis ulang isinya. Ia menerima **parameter** (bahan masuk) dan memberikan **nilai kembalian** lewat `return` (hasil keluar).\n\n" +
            "```text\n" +
            "        parameter                  return\n" +
            "            |                        |\n" +
            "function luas(panjang, lebar) { return panjang * lebar; }\n" +
            "                                       |\n" +
            "const hasil = luas(5, 3);   <----------+  nilainya bisa dipakai lagi\n" +
            "```\n\n" +
            "> **Beda `return` dan `console.log` adalah kebingungan nomor satu di modul ini.** `console.log` hanya **menampilkan** ke layar lalu selesai; `return` **mengembalikan nilai** sehingga bisa disimpan, dijumlahkan, atau dikirim ke fungsi lain. Fungsi tanpa `return` menghasilkan `undefined`.\n\n" +
            "## Dua Cara Menulis Fungsi\n\n" +
            "```js\n" +
            "// deklarasi biasa — punya nama sendiri, ter-hoisting\n" +
            "function sapa(nama) {\n" +
            "  return 'Halo ' + nama;\n" +
            "}\n\n" +
            "// arrow function — lebih ringkas, sangat umum di kode modern\n" +
            "const sapa = (nama) => 'Halo ' + nama;   // return implisit, tanpa kurung kurawal\n" +
            "```\n\n" +
            "Arrow function bukan sekadar bentuk yang lebih pendek. Perbedaan yang benar-benar berdampak: **arrow function tidak punya `this` sendiri**, ia mewarisi `this` dari tempat ia ditulis. Justru karena itu ia menyelamatkanmu di dalam callback — sesuatu yang akan kamu lihat langsung di modul OOP.\n\n" +
            "## Parameter: Default dan Rest\n\n" +
            "```js\n" +
            "function kirim(pesan, ulangi = 1) { ... }      // default: dipakai bila argumen tidak dikirim\n" +
            "function jumlah(...angka) { ... }              // rest: mengumpulkan sisa argumen jadi array\n" +
            "```\n\n" +
            "Nilai bawaan hanya berlaku saat argumennya `undefined` — mengirim `null` **tidak** memicu nilai bawaan, dan itu jebakan yang sering lolos. Rest parameter wajib menjadi parameter terakhir.\n\n" +
            "## Scope: Wilayah Hidup Sebuah Variabel\n\n" +
            "```text\n" +
            "const global = 1;              <- scope global: terlihat dari mana saja\n" +
            "\n" +
            "function hitung() {\n" +
            "  const lokal = 2;             <- scope fungsi: hanya di dalam hitung()\n" +
            "\n" +
            "  if (true) {\n" +
            "    const blok = 3;            <- scope blok: hanya di dalam { } ini\n" +
            "  }\n" +
            "  // blok TIDAK ada di sini\n" +
            "}\n" +
            "// lokal TIDAK ada di sini\n" +
            "```\n\n" +
            "Aturannya satu arah: kode **di dalam** boleh melihat ke luar, tapi kode di luar tidak bisa melihat ke dalam. `let` dan `const` menghormati scope blok; `var` tidak — itu salah satu alasan utama `var` ditinggalkan.\n\n" +
            "## Hoisting dan Temporal Dead Zone\n\n" +
            "JavaScript \"mengangkat\" deklarasi ke atas sebelum menjalankan kode, tapi perlakuannya berbeda:\n\n" +
            "| Yang dideklarasikan | Dipakai sebelum barisnya |\n" +
            "|---|---|\n" +
            "| `function nama() {}` | **boleh** — deklarasi fungsi ikut terangkat utuh |\n" +
            "| `var x` | jalan, tapi nilainya `undefined` (menyesatkan) |\n" +
            "| `let` / `const` | **ReferenceError: Cannot access before initialization** |\n\n" +
            "Rentang antara awal blok sampai baris deklarasi `let`/`const` itu disebut **temporal dead zone**. Error-nya terasa mengganggu, tapi justru itu gunanya: ia menghentikanmu di tempat kesalahan terjadi, alih-alih membiarkan `undefined` menyebar ke mana-mana seperti pada `var`.\n\n" +
            "## Closure Tanpa Mistis\n\n" +
            "Closure sering terdengar rumit, padahal isinya satu kalimat: **fungsi mengingat variabel dari tempat ia dibuat, bahkan setelah fungsi luarnya selesai berjalan.**\n\n" +
            "```js\n" +
            "function buatPenghitung() {\n" +
            "  let jumlah = 0;              // variabel ini \"diingat\"\n" +
            "  return () => ++jumlah;       // fungsi dalam tetap memegangnya\n" +
            "}\n\n" +
            "const naik = buatPenghitung();\n" +
            "naik();  // 1\n" +
            "naik();  // 2   <- nilainya bertahan, dan tidak bisa disentuh dari luar\n" +
            "```\n\n" +
            "Kegunaan nyatanya: membuat nilai privat (tidak bisa diubah sembarangan dari luar), menyimpan konfigurasi, dan pola *debounce* yang kamu pelajari di modul Browser API. Closure juga fondasi cara `useState` React bekerja — jadi memahaminya sekarang membuat modul React nanti terasa jauh lebih masuk akal.\n\n" +
            "## Callback dan Higher-Order Function\n\n" +
            "Di JavaScript, fungsi adalah **nilai biasa**: bisa disimpan di variabel, dikirim sebagai argumen, dan dikembalikan dari fungsi lain. Fungsi yang dikirim sebagai argumen disebut **callback**:\n\n" +
            "```js\n" +
            "tombol.addEventListener('click', () => console.log('diklik'));\n" +
            "//                               ^^^^^^^^^^^^^^^^^^^^^^^^^ callback\n" +
            "[1, 2, 3].map((n) => n * 2);   // map menerima callback\n" +
            "```\n\n" +
            "Sifat inilah yang membuat `map`, `filter`, `addEventListener`, dan seluruh kode asynchronous di modul-modul berikutnya mungkin ada.\n\n" +
            "## Pure Function\n\n" +
            "Fungsi **murni** memenuhi dua syarat: masukan sama selalu menghasilkan keluaran sama, dan ia tidak mengubah apa pun di luar dirinya. Fungsi murni mudah diuji, mudah dipindahkan, dan tidak pernah memberi kejutan — itu sebabnya modul Testing nanti dimulai dari fungsi murni.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Fungsi itu seperti **mesin jus**: kamu memasukkan buah (parameter), mesin bekerja, keluar jus (`return`). Mesin yang bagus tidak diam-diam mengganti isi kulkasmu — itulah fungsi murni. Sedangkan closure seperti **karyawan yang membawa catatan pribadi** dari ruang pelatihan: pelatihannya sudah selesai berbulan-bulan lalu, tapi catatannya masih ia pegang dan tidak seorang pun bisa membacanya.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **`console.log` di dalam fungsi, bukan `return`.** Nilainya tidak bisa dipakai lagi di luar.\n" +
            "2. **Lupa `return` pada arrow function berkurung kurawal.** `n => { n * 2 }` mengembalikan `undefined`.\n" +
            "3. **Mengira nilai bawaan berlaku untuk `null`.** Ia hanya berlaku untuk `undefined`.\n" +
            "4. **Mengakses `let` sebelum deklarasinya.** ReferenceError, bukan `undefined`.\n" +
            "5. **Membuat fungsi yang mengubah variabel luar.** Sulit diuji dan sumber bug yang jejaknya jauh dari penyebabnya.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** closure dan `this` pada arrow function adalah dua pertanyaan interview JavaScript yang paling sering muncul. Yang dicari bukan definisi hafalan, melainkan apakah kamu bisa menyebut satu kasus nyata pemakaiannya — dan `buatPenghitung()` di atas sudah cukup sebagai jawaban.",
        },
        {
          kind: "step",
          id: "js-2-1",
          title: "Fungsi dengan parameter dan return",
          explanation:
            "Perbedaan penting: `console.log` **menampilkan** nilai, `return` **mengembalikan** nilai agar bisa dipakai lagi. Fungsi tanpa `return` menghasilkan `undefined`. Pemula sering menulis `console.log` di dalam fungsi lalu bingung kenapa hasilnya tidak bisa dijumlahkan — karena yang keluar bukan nilai, tapi tampilan. Cara cepat menentukan mana yang kamu butuhkan: kalau hasilnya masih akan dipakai kode lain, pakai `return`; `console.log` hanya untuk melihat sesuatu saat sedang memeriksa kode. Satu hal lagi yang perlu diketahui sejak sekarang: `return` juga **menghentikan** fungsi seketika, jadi baris apa pun setelahnya di dalam fungsi itu tidak akan pernah dijalankan.",
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
            "Nilai default dipakai kalau argumen tidak diberikan atau bernilai `undefined`. Ini menghilangkan pola lama `harga = harga || 0` yang punya bug: kalau argumennya `0` (nilai falsy yang sah), pola `||` akan menimpanya. Default parameter tidak punya masalah itu. Nilai default juga boleh berupa hasil perhitungan atau parameter sebelumnya, misalnya `function luas(sisi, tinggi = sisi)`, sehingga satu fungsi bisa melayani dua bentuk pemanggilan.",
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
            "Variabel yang dibuat dengan `let`/`const` di dalam blok `{ }` **hanya hidup di dalam blok itu**. Fungsi bisa membaca variabel di luarnya (scope luar), tapi tidak sebaliknya. Memahami ini mencegah error 'x is not defined' yang membingungkan. Aturan ini juga alasan kenapa `var` ditinggalkan: `var` bocor keluar dari blok dan sering menimbulkan nilai yang berubah di tempat yang tidak kamu duga.",
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
            "Closure sering terdengar mistis, padahal sederhana: **fungsi mengingat variabel dari tempat ia dibuat, bahkan setelah fungsi luarnya selesai berjalan**. Ini yang memungkinkan pembuatan counter privat — `hitung` tidak bisa diakses dari luar, hanya lewat fungsi yang dikembalikan. Closure juga yang membuat callback di dalam `setTimeout` masih bisa membaca variabel di sekitarnya beberapa detik kemudian, jauh setelah fungsi induknya selesai.",
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
            "Di JavaScript, fungsi adalah **nilai** — bisa disimpan di variabel dan dikirim sebagai argumen. Fungsi yang dikirim seperti itu disebut callback, dan ini fondasi dari `map`, `addEventListener`, dan semua kode asynchronous yang akan kamu tulis nanti. Perhatikan bedanya mengirim `fn` dengan `fn()`: yang pertama menyerahkan fungsinya, yang kedua menjalankan lebih dulu lalu menyerahkan hasilnya — sumber bug yang sangat sering terjadi.",
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
          kind: "step",
          id: "js-2-7",
          title: "Hoisting dan Temporal Dead Zone",
          explanation:
            "Sebelum menjalankan kodemu, JavaScript memindai berkasnya dan **mendaftarkan** semua deklarasi lebih dulu — perilaku itu bernama *hoisting*. Akibatnya berbeda tergantung cara kamu mendeklarasikan. Deklarasi `function` terangkat **utuh**, jadi memanggilnya sebelum barisnya ditulis tetap berhasil. `var` terangkat tapi nilainya belum ada, sehingga kamu mendapat `undefined` — menyesatkan, karena kode berjalan seolah tidak ada masalah. Sedangkan `let` dan `const` terangkat **tanpa boleh diakses**: rentang dari awal blok sampai baris deklarasinya disebut **temporal dead zone**, dan menyentuhnya melempar `ReferenceError: Cannot access before initialization`. Error itu terasa mengganggu, tapi justru itu gunanya — ia menghentikanmu tepat di tempat kesalahan terjadi, alih-alih membiarkan `undefined` menyebar sampai meledak di tempat lain. Aturan praktisnya sederhana: **deklarasikan variabel sebelum dipakai**, dan pakai `let`/`const` supaya kekeliruan urutan langsung terdengar.",
          example: {
            code:
              "// deklarasi function terangkat utuh — ini BERHASIL\n" +
              "console.log(sapa('Bimo'));\n" +
              "function sapa(n) { return 'Halo ' + n; }\n\n" +
              "// var: terangkat tapi belum berisi\n" +
              "console.log(kota);   // undefined, bukan error\n" +
              "var kota = 'Bandung';\n\n" +
              "// let: temporal dead zone\n" +
              "// console.log(umur);\n" +
              "// ReferenceError: Cannot access 'umur' before initialization\n" +
              "let umur = 20;\n" +
              "console.log(umur);",
            output:
              "Halo Bimo\nundefined\n20\n\n" +
              "// jika baris console.log(umur) yang dikomentari diaktifkan:\n" +
              "ReferenceError: Cannot access 'umur' before initialization",
            note: "Perhatikan bedanya: `var` memberi `undefined` diam-diam, `let` berteriak. Yang berteriak justru lebih menolong.",
          },
          instruction:
            "Kode di editor melempar `ReferenceError` karena variabelnya dipakai sebelum dideklarasikan. Perbaiki urutannya sehingga deklarasi `const pajak` berada sebelum pemakaiannya, tanpa mengubah `const` menjadi `var` dan tanpa mengubah nilai-nilainya.",
          starterCode:
            "const harga = 100000;\n" +
            "const total = harga + harga * pajak;\n" +
            "const pajak = 0.11;\n\n" +
            "console.log(total);\n",
          language: "js",
          tests: [
            {
              pattern:
                "const\\s+pajak\\s*=\\s*0\\.11\\s*;[\\s\\S]*const\\s+total\\s*=",
              message:
                "Pindahkan `const pajak = 0.11;` ke ATAS baris yang memakainya. Di dalam temporal dead zone, variabel `const` belum boleh disentuh sama sekali.",
            },
            {
              pattern: "\\bvar\\s+pajak",
              mustNotMatch: true,
              message:
                "Jangan menggantinya dengan `var`. Itu memang menghilangkan error-nya, tapi menggantinya dengan `undefined` yang diam — dan `total` akan menjadi `NaN` tanpa satu pun peringatan.",
            },
          ],
          solution:
            "const harga = 100000;\n" +
            "const pajak = 0.11;\n" +
            "const total = harga + harga * pajak;\n\n" +
            "console.log(total);",
        },
        {
          kind: "quiz",
          id: "js-2-kuis",
          title: "Kuis: Fungsi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Fungsi tambah(a, b) hanya memanggil console.log(a + b) tanpa return. Apa yang ditampilkan oleh console.log(tambah(2, 3))?",
              choices: ["5 undefined", "5", "undefined", "5 5"],
              answerIndex: 0,
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
              type: "pilihan-ganda",
              question: "Sebuah fungsi buat() mengembalikan closure () => ++n (dimulai dari n = 0). Setelah memanggil a() dua kali, berapa nilai yang ditampilkan oleh console.log(a()) pada pemanggilan ketiga?",
              choices: ["3", "1", "undefined", "ReferenceError"],
              answerIndex: 0,
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
          kind: "materi",
          id: "js-3-m1",
          title: "Array, Object, dan Jebakan Reference",
          body:
            "# Pengertian\n\n" +
            "Sampai sini kamu menyimpan satu nilai per variabel. Data nyata tidak seperti itu: satu produk punya nama, harga, dan stok sekaligus; satu halaman menampilkan dua puluh produk. Untuk itu ada dua bentuk penampung:\n\n" +
            "```text\n" +
            "ARRAY   daftar berurutan, diakses lewat nomor indeks (mulai 0)\n" +
            "        ['Senin', 'Selasa']          hari[0] -> 'Senin'\n\n" +
            "OBJECT  pasangan nama-nilai, diakses lewat nama key\n" +
            "        { nama: 'Kopi', harga: 25000 }    produk.nama -> 'Kopi'\n" +
            "```\n\n" +
            "Aturan praktisnya: **array untuk banyak hal sejenis**, **object untuk satu hal dengan banyak keterangan**. Data dari API hampir selalu berupa array berisi object — bentuk yang akan kamu tangani terus.\n\n" +
            "## Reference vs Value — Jebakan Terpenting di Modul Ini\n\n" +
            "Ini penyebab bug \"kok data saya berubah sendiri\" yang paling sering, dan wajib kamu pahami sebelum masuk React.\n\n" +
            "```text\n" +
            "PRIMITIF (string, number, boolean) disalin NILAINYA:\n" +
            "  let a = 5;  let b = a;  b = 99;\n" +
            "  a masih 5        <- aman, keduanya terpisah\n" +
            "\n" +
            "OBJECT & ARRAY disalin ALAMATNYA:\n" +
            "  const asli = { stok: 5 };\n" +
            "  const salah = asli;        <- BUKAN salinan, hanya nama kedua\n" +
            "  salah.stok = 99;\n" +
            "  asli.stok sekarang 99      <- ikut berubah!\n" +
            "```\n\n" +
            "Keduanya menunjuk ke **satu** object yang sama. Cara membuat salinan sungguhan:\n\n" +
            "```js\n" +
            "const salinan = { ...asli };            // object: spread\n" +
            "const salinanArr = [...daftar];         // array: spread\n" +
            "const dalam = structuredClone(asli);    // salinan mendalam, termasuk isi bersarang\n" +
            "```\n\n" +
            "> **Spread bersifat dangkal.** `{ ...user }` menyalin lapisan pertama saja — kalau `user.alamat` berupa object, alamatnya masih berbagi alamat memori yang sama. Untuk data bersarang pakai `structuredClone()`.\n\n" +
            "Hal yang sama menjelaskan kenapa `const` tidak menghalangi `daftar.push(3)`: yang dikunci `const` adalah alamatnya, bukan isi di alamat itu.\n\n" +
            "## Method Array yang Wajib Dikuasai\n\n" +
            "| Method | Menghasilkan | Mengubah array asli? |\n" +
            "|---|---|---|\n" +
            "| `map` | array baru, tiap elemen diubah | tidak |\n" +
            "| `filter` | array baru berisi yang lolos syarat | tidak |\n" +
            "| `reduce` | satu nilai gabungan | tidak |\n" +
            "| `find` | elemen pertama yang cocok, atau `undefined` | tidak |\n" +
            "| `some` / `every` | boolean: ada yang cocok / semua cocok | tidak |\n" +
            "| `includes` | boolean: nilai ada di dalamnya | tidak |\n" +
            "| `slice` | potongan baru | tidak |\n" +
            "| `push` / `pop` / `splice` / `sort` / `reverse` | — | **ya, memutasi** |\n\n" +
            "Kolom terakhir itu yang penting. Kelompok pertama menghasilkan data baru dan meninggalkan aslinya utuh — itulah yang disukai React. Kelompok terakhir mengubah array di tempat, dan `sort` termasuk di dalamnya: `daftar.sort()` **mengubah `daftar`**, bukan hanya mengembalikan versi terurut.\n\n" +
            "> **Jebakan `sort` yang paling sering:** tanpa fungsi pembanding, `sort` mengurutkan sebagai **teks**. Karena itu `[10, 9, 100].sort()` menghasilkan `[10, 100, 9]`. Untuk angka wajib `sort((a, b) => a - b)`.\n\n" +
            "## Destructuring: Membongkar Isi\n\n" +
            "```js\n" +
            "const { nama, harga } = produk;        // ambil dua properti sekaligus\n" +
            "const [pertama, kedua] = daftar;       // ambil dua elemen pertama\n" +
            "const { alamat: { kota } } = user;     // bersarang\n" +
            "const { diskon = 0 } = produk;         // nilai bawaan bila properti tidak ada\n" +
            "```\n\n" +
            "Bentuk ini muncul di baris pertama hampir setiap komponen React (`function Kartu({ nama, harga })`), jadi kebiasaan memakainya sekarang terbayar langsung nanti.\n\n" +
            "## JSON: Bahasa Pertukaran Data\n\n" +
            "JSON adalah **teks** yang bentuknya mirip object JavaScript, dan itulah format yang dipakai hampir semua API serta `localStorage`.\n\n" +
            "```js\n" +
            "const teks = JSON.stringify(produk);   // object -> teks (untuk dikirim/disimpan)\n" +
            "const obj  = JSON.parse(teks);         // teks -> object (untuk dipakai)\n" +
            "```\n\n" +
            "Tiga hal yang perlu kamu tahu: `JSON.parse` **melempar error** kalau teksnya bukan JSON yang sah (jadi bungkus dengan `try/catch` saat sumbernya tidak kamu kuasai), `JSON.stringify` **membuang** fungsi dan `undefined`, serta `Date` berubah menjadi teks — jadi hasil `parse` tidak otomatis kembali menjadi objek tanggal. Sebagai bonus, `JSON.parse(JSON.stringify(obj))` adalah cara lama membuat salinan mendalam; sekarang `structuredClone` lebih tepat karena tidak merusak tipe data.\n\n" +
            "## Map dan Set: Kapan Lebih Tepat\n\n" +
            "| Pilih | Saat |\n" +
            "|---|---|\n" +
            "| `Object` | key-nya tetap dan kamu tahu namanya |\n" +
            "| `Map` | key-nya dinamis, bisa berupa apa pun (termasuk object), dan urutannya penting |\n" +
            "| `Set` | kamu hanya butuh kumpulan **nilai unik** |\n\n" +
            "```js\n" +
            "const unik = [...new Set([1, 2, 2, 3])];   // [1, 2, 3] — cara terpendek menghapus duplikat\n" +
            "const stok = new Map();\n" +
            "stok.set('kopi', 12);\n" +
            "stok.get('kopi');                          // 12\n" +
            "stok.size;                                 // jumlah entri, tanpa Object.keys\n" +
            "```\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Array itu seperti **rak bernomor**; object seperti **formulir berlabel**. Dan reference itu seperti **berbagi tautan dokumen** alih-alih mengirim fotokopi: dua orang membuka tautan yang sama, jadi suntingan siapa pun terlihat oleh keduanya. Kalau kamu ingin perubahanmu tidak memengaruhi dokumen asli, kamu harus membuat salinan lebih dulu — dan itulah persisnya arti spread.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **`const b = a` pada object.** Bukan salinan; keduanya menunjuk data yang sama.\n" +
            "2. **Mengira spread menyalin semuanya.** Ia dangkal; data bersarang tetap berbagi.\n" +
            "3. **`sort()` tanpa pembanding.** Mengurutkan sebagai teks, dan memutasi array aslinya.\n" +
            "4. **`find` yang tidak ketemu.** Hasilnya `undefined`, dan menyentuh propertinya melempar TypeError.\n" +
            "5. **`JSON.parse` tanpa `try/catch`.** Satu respons rusak menjatuhkan seluruh halaman.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** `map`, `filter`, dan `reduce` muncul di hampir setiap technical interview frontend, dan `map` adalah cara React merender daftar. Sementara reference vs value adalah penyebab bug \"state tidak ter-update\" yang paling sering dialami orang saat pertama memakai React — memahaminya di sini menghemat berhari-hari kebingungan nanti.",
        },
        {
          kind: "step",
          id: "js-3-1",
          title: "Array dan aksesnya",
          explanation:
            "Indeks array dimulai dari **0**, jadi elemen terakhir ada di `length - 1`. Cara modern mengambil elemen terakhir: `arr.at(-1)` — lebih jelas daripada `arr[arr.length - 1]`. Mengakses indeks yang tidak ada tidak menimbulkan error, hanya `undefined` (yang justru sering menyamarkan bug). Sifat itu berbahaya karena error-nya muncul jauh kemudian: `daftar[5].nama` baru meledak sebagai `Cannot read properties of undefined`, dan yang tertulis di stack trace adalah baris itu — bukan baris tempat indeksnya salah dihitung. Perlu diingat juga bahwa `length` bukan indeks terakhir melainkan **jumlah** elemen, dan array di JavaScript boleh berisi campuran tipe apa pun sekaligus.",
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
            code: "const harga = [10000, 20000];\n\nconst diskon = harga.map((h) => h - 2500);\n\nconsole.log(diskon);\nconsole.log(harga);        // array asli TIDAK berubah",
            output: "[7500,17500]\n[10000,20000]",
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
            "Object menyimpan data berpasangan `key: value`. Dua cara akses: notasi titik (`user.nama`) untuk key yang sudah kamu ketahui, dan notasi bracket (`user['nama']`) saat key-nya berupa variabel atau mengandung karakter khusus. Object adalah bentuk data yang kamu terima dari hampir semua API. Mengakses key yang tidak ada memberi `undefined` tanpa error — sama seperti array — sehingga salah ketik nama properti sering baru terasa beberapa baris kemudian. Untuk data bersarang yang belum pasti ada, `user?.alamat?.kota` jauh lebih aman daripada rantai titik biasa. Dan satu hal yang perlu diingat dari modul ini: object disimpan sebagai **alamat**, jadi menyalinnya dengan tanda sama dengan tidak menghasilkan salinan sungguhan.",
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
            "`find` mengembalikan **elemen pertama** yang cocok (atau `undefined` kalau tidak ada) — berbeda dari `filter` yang selalu mengembalikan array. `includes` mengembalikan true/false untuk keberadaan nilai sederhana. Memilih method yang tepat membuat maksud kode langsung terbaca. Kalau kamu perlu tahu posisinya, bukan elemennya, pakai `findIndex`, dan ingat bahwa ia mengembalikan -1 saat tidak menemukan apa pun.",
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
          kind: "step",
          id: "js-3-9",
          title: "sort dan Jebakan Urutannya",
          explanation:
            "`sort` mengurutkan array **di tempat** — array aslinya ikut berubah, jadi salin dulu dengan spread bila kamu masih membutuhkan urutan semula. Jebakan terbesarnya: tanpa fungsi pembanding, `sort` mengubah setiap elemen menjadi string lalu mengurutkannya secara alfabet, sehingga `[10, 9, 1]` menjadi `[1, 10, 9]` dan terlihat seperti bug padahal itu perilaku resminya. Untuk angka, berikan pembanding `(a, b) => a - b` yang berarti naik, atau `b - a` untuk turun. Untuk teks berbahasa Indonesia, `localeCompare` menangani huruf besar-kecil dan aksen jauh lebih baik daripada perbandingan biasa.",
          example: {
            code: "const angka = [10, 9, 1];\n\nconsole.log([...angka].sort());              // alfabet, bukan angka\nconsole.log([...angka].sort((a, b) => a - b)); // benar",
            output: "[1,10,9]\n[1,9,10]",
          },
          instruction:
            "Array `harga` berisi angka. Buat `const urut` berisi salinan yang terurut dari termurah ke termahal, tanpa mengubah array `harga` aslinya, lalu cetak keduanya.",
          starterCode: "const harga = [25000, 9000, 120000];\n\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+urut\\s*=\\s*\\[\\s*\\.\\.\\.harga\\s*\\]\\.sort\\(|const\\s+urut\\s*=\\s*harga\\.slice\\(\\s*\\)\\.sort\\(",
              message:
                "Salin dulu (misalnya [...harga]) sebelum memanggil sort agar array asli tidak berubah.",
            },
            {
              pattern: "\\(\\s*a\\s*,\\s*b\\s*\\)\\s*=>\\s*a\\s*-\\s*b",
              message:
                "Beri fungsi pembanding (a, b) => a - b untuk urutan naik.",
            },
            {
              pattern: "console\\.log\\([\\s\\S]*console\\.log\\(",
              message:
                "Cetak urut dan harga supaya terlihat array aslinya tidak berubah.",
            },
          ],
          solution: "const harga = [25000, 9000, 120000];\n\nconst urut = [...harga].sort((a, b) => a - b);\nconsole.log(urut);\nconsole.log(harga);",
        },
        {
          kind: "step",
          id: "js-3-10",
          title: "Reference vs Value: Kenapa Data Berubah Sendiri",
          explanation:
            "Ini jebakan paling mahal di seluruh track ini, dan wajib kamu pahami sebelum masuk React. Nilai primitif — angka, teks, boolean — **disalin nilainya**, jadi `let b = a; b = 99` tidak menyentuh `a`. Object dan array berbeda: yang disalin adalah **alamatnya**, sehingga `const salinan = asli` hanya membuat nama kedua untuk data yang sama, dan mengubah satu ikut mengubah yang lain. Cara membuat salinan sungguhan adalah spread: `{ ...asli }` untuk object, `[...daftar]` untuk array. Tapi ada batas yang wajib diingat: **spread bersifat dangkal** — ia hanya menyalin lapisan pertama, sehingga object yang bersarang di dalamnya masih dibagi bersama. Untuk data bertingkat, `structuredClone(asli)` membuat salinan mendalam sungguhan. Hal yang sama juga menjelaskan kenapa `const` tidak menghalangi `daftar.push(3)`: yang dikunci `const` adalah alamatnya, bukan isi di alamat itu.",
          example: {
            code:
              "const asli = { nama: 'Kopi', stok: 5 };\n\n" +
              "// ❌ BUKAN salinan — dua nama untuk data yang SAMA\n" +
              "const salah = asli;\n" +
              "salah.stok = 99;\n" +
              "console.log(asli.stok);        // ikut berubah!\n\n" +
              "// ✅ salinan sungguhan\n" +
              "const benar = { ...asli, stok: 1 };\n" +
              "console.log(asli.stok, benar.stok);\n\n" +
              "// spread itu DANGKAL: object bersarang masih dibagi\n" +
              "const user = { nama: 'Bimo', alamat: { kota: 'Bandung' } };\n" +
              "const dangkal = { ...user };\n" +
              "dangkal.alamat.kota = 'Jakarta';\n" +
              "console.log(user.alamat.kota);  // ikut berubah\n\n" +
              "const dalam = structuredClone(user);\n" +
              "dalam.alamat.kota = 'Surabaya';\n" +
              "console.log(user.alamat.kota);  // kali ini aman",
            output: "99\n99 1\nJakarta\nJakarta",
            note: "Perhatikan baris terakhir: setelah structuredClone, kota asli tetap 'Jakarta' — perubahan pada salinan mendalam tidak menyentuh aslinya sama sekali.",
          },
          instruction:
            "Object `pesanan` di editor tidak boleh berubah. Buat `const pesananBaru` yang berisi seluruh isi `pesanan` tapi dengan `jumlah` menjadi `5`, tanpa menyentuh object aslinya. Lalu cetak `jumlah` dari keduanya untuk membuktikan yang asli masih utuh — jangan memakai tanda sama dengan biasa untuk menyalinnya.",
          starterCode:
            "const pesanan = { produk: 'Kopi Gayo', jumlah: 1 };\n\n",
          language: "js",
          tests: [
            {
              pattern:
                "const\\s+pesananBaru\\s*=\\s*\\{[\\s\\S]*\\.\\.\\.\\s*pesanan[\\s\\S]*\\}",
              message:
                "Pakai spread untuk menyalin: `const pesananBaru = { ...pesanan, ... };`. Menulis `= pesanan` saja hanya membuat nama kedua untuk data yang sama.",
            },
            {
              pattern: "jumlah\\s*:\\s*5",
              message:
                "Di dalam object barunya, timpa `jumlah` menjadi 5. Properti yang ditulis SETELAH spread akan menimpa nilai aslinya.",
            },
            {
              pattern: "console\\.log\\([\\s\\S]*pesanan\\s*\\.\\s*jumlah",
              message:
                "Cetak juga `pesanan.jumlah` supaya terbukti object aslinya tidak ikut berubah.",
            },
            {
              pattern: "pesanan\\s*\\.\\s*jumlah\\s*=",
              mustNotMatch: true,
              message:
                "Jangan mengubah object aslinya secara langsung. Seluruh inti latihan ini adalah menghasilkan data BARU tanpa menyentuh yang lama.",
            },
          ],
          solution:
            "const pesanan = { produk: 'Kopi Gayo', jumlah: 1 };\n\n" +
            "const pesananBaru = { ...pesanan, jumlah: 5 };\n\n" +
            "console.log(pesanan.jumlah);\n" +
            "console.log(pesananBaru.jumlah);",
        },
        {
          kind: "quiz",
          id: "js-3-kuis",
          title: "Kuis: Array & Object",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Diberikan: const a = { n: 1 }; const b = a; b.n = 99; — Berapa nilai a.n setelah baris tersebut dieksekusi?",
              choices: ["99", "1", "undefined", "TypeError"],
              answerIndex: 0,
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
              type: "pilihan-ganda",
              question: "Diberikan: const angka = [1, 2, 3, 4]; const hasil = angka.reduce((a, b) => a + b, 0); — Berapa nilai variabel hasil?",
              choices: ["10", "0", "undefined", "NaN"],
              answerIndex: 0,
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
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kamu menyimpan object ke localStorage, tapi yang tersimpan malah teks `[object Object]`. Apa yang terlewat?",
              choices: [
                "localStorage hanya bisa menyimpan angka",
                "Object harus diubah menjadi teks JSON lebih dulu dengan JSON.stringify",
                "Perlu memakai await karena localStorage asynchronous",
                "Nama key-nya tidak boleh mengandung huruf besar",
              ],
              answerIndex: 1,
              explanation:
                "`localStorage` hanya menyimpan **teks**, jadi object yang dimasukkan langsung akan diubah menjadi teks apa adanya — hasilnya `[object Object]`. Alurnya: `JSON.stringify` saat menyimpan, `JSON.parse` saat membaca. Perlu diingat `JSON.parse` melempar error kalau isinya bukan JSON yang sah, jadi bungkus dengan `try/catch` — satu nilai rusak di localStorage bisa menjatuhkan aplikasi setiap kali dibuka, dan pengguna tidak punya cara memperbaikinya sendiri.",
            },
            {
              id: "q7",
              type: "pilihan-ganda",
              question:
                "Kamu punya array berisi ratusan email dan ingin membuang duplikatnya. Cara mana yang paling ringkas?",
              choices: [
                "filter dengan indexOf di dalamnya",
                "[...new Set(daftar)]",
                "sort() lalu bandingkan tetangganya satu per satu",
                "reduce dengan pengecekan includes",
              ],
              answerIndex: 1,
              explanation:
                "`Set` adalah kumpulan yang **hanya menerima nilai unik**, jadi memasukkan array ke dalamnya lalu menyebarnya kembali dengan spread menghapus duplikat dalam satu baris. Pilihan lain memang bekerja, tapi ketiganya memeriksa ulang isi array untuk setiap elemen sehingga jauh lebih lambat pada data besar. Pasangannya adalah `Map`, yang dipilih saat kamu butuh key berupa apa pun (termasuk object) dan urutan penyisipan yang terjaga.",
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
          kind: "materi",
          id: "js-4-m1",
          title: "DOM: Menyentuh Halaman dari JavaScript",
          body:
            "# Pengertian\n\n" +
            "Saat browser membaca HTML-mu, ia menyusunnya menjadi **pohon object** di memori. Pohon itu bernama **DOM** (*Document Object Model*), dan itulah yang sebenarnya kamu ubah dari JavaScript — bukan berkas HTML-nya.\n\n" +
            "```text\n" +
            "berkas index.html          DOM di memori              yang terlihat\n" +
            "-----------------          -------------              -------------\n" +
            "<h1>Judul</h1>      ->     document                ->   Judul\n" +
            "                             └ html\n" +
            "                                └ body\n" +
            "                                   └ h1  \"Judul\"\n" +
            "```\n\n" +
            "> **Konsekuensi yang wajib kamu pahami:** perubahan lewat JavaScript hanya hidup di memori. Menyegarkan halaman membuat DOM dibangun ulang dari berkas HTML, jadi seluruh perubahanmu hilang. Kalau perubahan harus bertahan, ia perlu disimpan — ke server, atau ke `localStorage` seperti di modul Browser API.\n\n" +
            "## Tiga Langkah yang Selalu Sama\n\n" +
            "```text\n" +
            "1. AMBIL      elemennya          const tombol = document.querySelector('#kirim')\n" +
            "2. UBAH       isi atau tampilan  tombol.textContent = 'Mengirim...'\n" +
            "3. DENGARKAN  peristiwa          tombol.addEventListener('click', ...)\n" +
            "```\n\n" +
            "Seluruh modul ini hanya variasi dari tiga langkah itu.\n\n" +
            "## Mengambil Elemen\n\n" +
            "| Cara | Hasilnya |\n" +
            "|---|---|\n" +
            "| `querySelector('.kartu')` | **satu** elemen pertama yang cocok, atau `null` |\n" +
            "| `querySelectorAll('.kartu')` | daftar **semua** yang cocok (NodeList) |\n\n" +
            "Keduanya memakai **selector CSS**, jadi seluruh pengetahuan CSS-mu langsung terpakai. Dua catatan yang menghemat waktu: hasil `querySelector` bisa `null` — dan menyentuh propertinya melempar `Cannot read properties of null`, error DOM paling sering. Sedangkan hasil `querySelectorAll` bukan array sungguhan; ia bisa di-`forEach` tapi tidak punya `map`, kecuali kamu ubah dulu dengan `[...semua]`.\n\n" +
            "## Mengubah Isi dan Tampilan\n\n" +
            "```js\n" +
            "el.textContent = 'Teks baru';       // AMAN — teks tetap teks\n" +
            "el.innerHTML   = '<b>Tebal</b>';    // menafsirkan HTML — hati-hati\n" +
            "el.classList.add('aktif');          // cara yang benar untuk styling\n" +
            "el.setAttribute('disabled', '');    // atribut HTML\n" +
            "el.style.color = 'red';             // gaya langsung — hindari kalau bisa\n" +
            "```\n\n" +
            "> **Jangan pernah memasukkan data dari pengguna ke `innerHTML`.** Kalau isinya `<img src=x onerror=...>`, kode itu benar-benar dijalankan browser. Celah ini bernama **XSS**, dan ia salah satu kerentanan web paling umum. Untuk teks, `textContent` selalu jawaban yang benar.\n\n" +
            "Untuk tampilan, biarkan CSS yang mengatur dan JavaScript hanya berganti class. Selain lebih rapi, keadaan visualnya jadi bisa dibaca dari HTML — dan itu jauh lebih mudah diperbaiki daripada belasan baris `el.style`.\n\n" +
            "## Membangun Elemen dari Data\n\n" +
            "```js\n" +
            "const li = document.createElement('li');\n" +
            "li.textContent = produk.nama;\n" +
            "daftarEl.append(li);        // masukkan ke DOM\n" +
            "li.remove();                // hapus\n" +
            "```\n\n" +
            "Pola merender daftar dari array inilah **inti semua framework**. React, Vue, dan Svelte pada dasarnya mengotomatiskan langkah ini — jadi mengerjakannya manual sekali membuat framework nanti terasa seperti kemudahan, bukan sihir.\n\n" +
            "## Event: Halaman yang Menjawab\n\n" +
            "```js\n" +
            "el.addEventListener('click', (event) => { ... });\n" +
            "//                   ^^^^^     ^^^^^\n" +
            "//                   nama      object berisi keterangan peristiwa\n" +
            "```\n\n" +
            "| Yang sering dipakai | Terjadi saat |\n" +
            "|---|---|\n" +
            "| `click` | elemen diklik atau disentuh |\n" +
            "| `input` | isi kotak masukan berubah, setiap ketikan |\n" +
            "| `change` | nilai selesai berubah (select, checkbox) |\n" +
            "| `submit` | form dikirim — **pasang di `<form>`, bukan di tombolnya** |\n\n" +
            "Dua anggota `event` yang paling sering kamu pakai: `event.preventDefault()` untuk membatalkan perilaku bawaan (form yang me-refresh halaman, tautan yang berpindah), dan `event.target` yang menunjuk elemen persis tempat peristiwa itu berasal.\n\n" +
            "## Event Delegation\n\n" +
            "Peristiwa **naik** dari elemen anak ke induknya. Sifat itu bisa dimanfaatkan: alih-alih memasang seratus pendengar di seratus tombol, pasang **satu** di induknya lalu periksa `event.target`.\n\n" +
            "```js\n" +
            "daftar.addEventListener('click', (e) => {\n" +
            "  const tombol = e.target.closest('.hapus');\n" +
            "  if (!tombol) return;             // klik di tempat lain — abaikan\n" +
            "  tombol.closest('li').remove();\n" +
            "});\n" +
            "```\n\n" +
            "Selain lebih hemat, pola ini punya keunggulan yang menentukan: ia **tetap bekerja untuk elemen yang dibuat nanti**. Pendengar yang dipasang satu-satu hanya mengenal elemen yang sudah ada saat kode itu dijalankan — itu sebabnya tombol pada baris yang baru ditambahkan sering \"tidak bisa diklik\".\n\n" +
            "## dataset: Menitipkan Data di Elemen\n\n" +
            "```html\n" +
            "<button data-produk-id=\"42\" data-harga=\"85000\">Beli</button>\n" +
            "```\n\n" +
            "```js\n" +
            "tombol.dataset.produkId;   // \"42\"   — tanda hubung menjadi camelCase\n" +
            "tombol.dataset.harga;      // \"85000\" — SELALU string\n" +
            "```\n\n" +
            "Ini jembatan resmi antara HTML dan JavaScript, dan pasangan alami event delegation: satu pendengar di induk, lalu identitas barisnya dibaca dari `dataset`. Ingat dua hal: nilainya selalu string (bungkus `Number()` bila perlu dihitung), dan isinya terbaca siapa pun yang membuka DevTools — jadi jangan menaruh apa pun yang menentukan tagihan di sana.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "HTML adalah **cetak biru bangunan**; DOM adalah **bangunan yang sudah berdiri**. Kamu tidak bisa memindahkan tembok dengan menggambar ulang cetak birunya — kamu memindahkan tembok yang sudah berdiri itu. Dan karena kamu mengubah bangunannya saja, cetak biru tetap seperti semula: dibangun ulang dari cetak biru (menyegarkan halaman) mengembalikan semuanya ke bentuk awal.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Script berjalan sebelum elemennya ada.** Hasil `querySelector` jadi `null`. Taruh `<script>` sebelum `</body>` atau pakai atribut `defer`.\n" +
            "2. **`innerHTML` untuk data pengguna.** Celah XSS; pakai `textContent`.\n" +
            "3. **Memasang pendengar `submit` di tombol.** Pasang di `<form>` agar tombol Enter juga tertangani.\n" +
            "4. **Lupa `preventDefault()` pada form.** Halaman ter-refresh dan seolah tidak terjadi apa-apa.\n" +
            "5. **Memasang pendengar satu-satu pada elemen yang dibuat dinamis.** Pakai delegation.\n" +
            "6. **`querySelectorAll(...).map(...)`.** NodeList bukan array; ubah dulu dengan spread.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** modul ini adalah pertama kalinya kodemu benar-benar terasa seperti aplikasi. Meski nanti kamu memakai React, konsepnya tetap: mengambil data, merender daftar, mendengarkan peristiwa. Dan pertanyaan interview \"apa itu event delegation dan kenapa berguna\" masih sering muncul justru karena jawabannya menunjukkan apakah seseorang paham peristiwa itu naik.",
        },
        {
          kind: "step",
          id: "js-4-1",
          title: "querySelector",
          explanation:
            "`document.querySelector` mencari elemen memakai **selector CSS** — jadi pengetahuan CSS-mu langsung terpakai. Ia mengembalikan elemen **pertama** yang cocok, atau `null` kalau tidak ada. Menyentuh properti dari `null` inilah penyebab error paling sering: `Cannot read properties of null`. Penyebab tersering hasilnya `null` cuma dua: nama selectornya keliru, atau **script berjalan sebelum elemennya ada** — dan yang kedua diperbaiki dengan menaruh `<script>` sebelum `</body>` atau memakai atribut `defer`. Perlu diketahui juga bahwa `querySelectorAll` mengembalikan NodeList, bukan array sungguhan: ia bisa di-`forEach` tapi tidak punya `map`, kecuali kamu ubah dulu dengan `[...semua]`.",
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
            "`textContent` mengubah teks dengan aman. Hindari `innerHTML` untuk data dari pengguna — string yang mengandung tag akan dieksekusi sebagai HTML, dan itulah celah **XSS**. Untuk styling, jangan atur satu-satu lewat `style`; lebih baik `classList.add()` dengan class yang sudah didefinisikan di CSS. Alasannya bukan kerapian belaka: dengan class, seluruh keadaan visual terbaca dari HTML dan bisa diubah dari satu tempat di stylesheet — sedangkan belasan baris `el.style` menyebar aturan tampilan ke dalam logika. Method `classList` yang akan kamu pakai terus ada empat: `add`, `remove`, `toggle` (ada berarti hapus, tidak ada berarti tambah), dan `contains` untuk memeriksa.",
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
            "`addEventListener('click', fn)` menghubungkan aksi pengguna ke fungsi. Perhatikan: kirim **referensi fungsi**, bukan hasil pemanggilannya — `addEventListener('click', fn())` salah karena fungsinya langsung dijalankan sekali lalu hasilnya (biasanya `undefined`) yang dipasang. Kalau kamu perlu mengirim argumen, bungkus dengan arrow function seperti `addEventListener('click', () => hapus(id))` agar fungsinya baru berjalan saat diklik.",
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
            "Form secara default me-refresh halaman saat disubmit — itu perilaku HTML asli. Untuk menanganinya dengan JavaScript, panggil `event.preventDefault()`. Nilai input dibaca lewat properti `.value` (selalu berupa **string**, jadi angka perlu dikonversi dengan `Number()`). Sifat itu penyebab bug yang terlihat aneh: pada `type=\"number\"` sekalipun, `nilai + 1` menghasilkan `'51'` alih-alih `6` karena operator `+` menyambung teks. Satu hal lagi soal penempatan: pasang pendengarnya di elemen `<form>`, bukan di tombolnya — dengan begitu menekan Enter di dalam kotak masukan ikut tertangani, sesuatu yang sangat sering dilakukan pengguna.",
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
            "Inilah pola inti semua framework modern, dan sekarang kamu melakukannya manual: ambil data → ubah jadi HTML → masukkan ke DOM. Setelah memahami ini, `map` di React akan terasa jelas sebagai versi otomatis dari apa yang kamu tulis di sini. Untuk daftar panjang, kumpulkan dulu elemennya di `DocumentFragment` lalu masukkan sekali — memasukkan satu per satu ke DOM memaksa browser menghitung ulang layout berkali-kali.",
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
            "Kalau daftarmu punya 100 tombol, memasang 100 listener itu pemborosan — dan tombol yang ditambahkan **setelah** listener dipasang tidak akan berfungsi. Solusinya: pasang **satu** listener di parent, lalu periksa `event.target` untuk tahu elemen mana yang diklik. Ini pertanyaan interview yang sering muncul. Keunggulan yang paling menentukan: pendengar di induk **tetap bekerja untuk elemen yang dibuat nanti** — sedangkan pendengar yang dipasang satu-satu hanya mengenal elemen yang sudah ada saat kodenya dijalankan, dan itulah sebabnya tombol pada baris yang baru ditambahkan sering terasa \"tidak bisa diklik\". Satu jebakan praktis: `event.target` menunjuk elemen **persis** yang tersentuh, jadi klik pada ikon di dalam tombol memberimu ikonnya, bukan tombolnya — untuk itu pakai `event.target.closest('.tombol')`.",
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
          kind: "step",
          id: "js-4-7",
          title: "dataset: Menitipkan Data di Elemen",
          explanation:
            "Saat kamu merender daftar dari data, setiap baris perlu membawa identitasnya sendiri — kalau tidak, tombol \"hapus\" tidak tahu baris mana yang dimaksud. Cara resminya bukan menumpangkannya ke `class` atau `id`, melainkan atribut `data-*`: namanya bebas setelah awalan `data-`, sah menurut standar, dan tidak berpengaruh apa pun ke tampilan. Di JavaScript ia dibaca lewat `element.dataset`, dengan satu konversi yang perlu diingat — tanda hubung berubah menjadi camelCase, sehingga `data-produk-id` diakses sebagai `dataset.produkId`. Pasangan alaminya adalah event delegation: satu pendengar di elemen induk, lalu identitas barisnya dibaca dari `dataset` milik `event.target`. Dua hal yang wajib disadari: nilainya **selalu string**, jadi bungkus dengan `Number()` bila perlu dihitung; dan isinya terbaca siapa pun yang membuka DevTools, jadi jangan pernah menaruh harga atau nilai apa pun yang menentukan tagihan di sana — server tetap harus memastikannya sendiri.",
          example: {
            code:
              "// HTML: <li data-user-id=\"7\" data-peran=\"admin\">Bimo</li>\n\n" +
              "const li = document.querySelector('li');\n\n" +
              "console.log(li.dataset.userId);    // \"7\"  — tanda hubung jadi camelCase\n" +
              "console.log(li.dataset.peran);     // \"admin\"\n" +
              "console.log(typeof li.dataset.userId);   // selalu string\n" +
              "console.log(Number(li.dataset.userId) + 1);\n\n" +
              "li.dataset.peran = 'editor';       // boleh diubah dari JavaScript",
            output: "7\nadmin\nstring\n8",
            note: "Perhatikan baris ketiga: '7' adalah teks, bukan angka. Menjumlahkannya tanpa Number() menghasilkan '71', bukan 8.",
          },
          instruction:
            "Daftar produk di preview memakai atribut `data-harga` pada setiap tombol. Pasang **satu** pendengar klik di elemen `#daftar`, lalu saat sebuah tombol diklik, cetak harga produk itu sebagai **angka** yang sudah ditambah 1000 sebagai biaya layanan. Baca harganya dari dataset milik elemen yang diklik.",
          starterCode:
            "const daftar = document.querySelector('#daftar');\n\n",
          language: "js",
          previewHtml:
            "<ul id=\"daftar\">\n  <li><button data-harga=\"85000\">Kopi Gayo</button></li>\n  <li><button data-harga=\"12000\">Teh Tarik</button></li>\n</ul>",
          tests: [
            {
              pattern:
                "daftar\\s*\\.\\s*addEventListener\\s*\\(\\s*['\"]click['\"]",
              message:
                "Pasang pendengarnya sekali saja di `#daftar` dengan `daftar.addEventListener('click', ...)` — inilah event delegation.",
            },
            {
              pattern:
                "(e|event|ev)\\s*\\.\\s*target[\\s\\S]*dataset\\s*\\.\\s*harga",
              message:
                "Baca harganya dari elemen yang benar-benar diklik: `e.target.dataset.harga`.",
            },
            {
              pattern: "Number\\s*\\(",
              message:
                "Nilai dataset selalu berupa string, jadi bungkus dengan `Number(...)` sebelum ditambah — kalau tidak, hasilnya jadi teks tersambung.",
            },
            {
              pattern: "1000",
              message: "Tambahkan biaya layanan 1000 pada harganya.",
            },
          ],
          solution:
            "const daftar = document.querySelector('#daftar');\n\n" +
            "daftar.addEventListener('click', (e) => {\n" +
            "  const harga = e.target.dataset.harga;\n" +
            "  if (!harga) return;\n" +
            "  console.log(Number(harga) + 1000);\n" +
            "});",
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
              type: "pilihan-ganda",
              question: "Form-mu memuat ulang halaman setiap kali disubmit sehingga data yang baru diketik hilang. Method apa yang dipanggil pada objek event untuk mencegahnya?",
              choices: ["preventDefault()", "stopPropagation()", "stopImmediatePropagation()", "return false"],
              answerIndex: 0,
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
          kind: "materi",
          id: "js-5-m1",
          title: "JavaScript Modern: Menulis Lebih Sedikit, Salah Lebih Jarang",
          body:
            "# Pengertian\n\n" +
            "Sejak 2015 JavaScript mendapat tambahan setiap tahun, dan yang dibahas di modul ini adalah bagian yang **paling sering kamu lihat di kode nyata**. Semuanya bukan fitur eksotis: kalau kamu membuka repositori React mana pun hari ini, sintaks di modul ini ada di hampir setiap berkas.\n\n" +
            "Tema besarnya satu: **menghapus kode penjaga yang berulang** — pemeriksaan null yang bertumpuk, penyalinan manual, dan pembongkaran object baris demi baris.\n\n" +
            "## Optional Chaining dan Nullish Coalescing\n\n" +
            "```js\n" +
            "// sebelum: penjagaan bertumpuk\n" +
            "const kota = user && user.alamat && user.alamat.kota;\n\n" +
            "// sekarang\n" +
            "const kota = user?.alamat?.kota ?? 'Tidak diketahui';\n" +
            "```\n\n" +
            "`?.` berhenti dengan aman dan menghasilkan `undefined` begitu menemui `null`/`undefined`, alih-alih melempar `Cannot read properties of null`. Ia juga bekerja pada pemanggilan fungsi (`fn?.()`) dan indeks array (`arr?.[0]`).\n\n" +
            "| Operator | Mengambil sisi kanan saat sisi kiri… |\n" +
            "|---|---|\n" +
            "| `\\|\\|` | **falsy apa pun** — termasuk `0`, `''`, `false` |\n" +
            "| `??` | **hanya** `null` atau `undefined` |\n\n" +
            "> **Perbedaan itu bukan detail.** `stok \\|\\| 10` mengubah stok 0 menjadi 10 — bug yang tampak masuk akal di kode dan salah di kenyataan. Untuk angka, harga, dan nilai yang boleh nol, `??` adalah pilihan yang benar.\n\n" +
            "Pasangannya `&&` dan `||` juga dipakai sebagai **short-circuit**: keduanya berhenti mengevaluasi begitu hasilnya sudah pasti. `daftar.length > 0 && tampilkan()` hanya memanggil `tampilkan()` bila syaratnya benar, dan `nama || 'Tamu'` berhenti di `nama` bila isinya sudah bernilai. Pola conditional itulah yang nanti kamu lihat di JSX React untuk menampilkan sesuatu hanya bila datanya ada — dan jebakannya sama seperti sebelumnya: pada angka, `0 && ...` ikut berhenti karena 0 falsy.\n\n" +
            "## Spread dan Rest: Sintaks Sama, Arah Berlawanan\n\n" +
            "```text\n" +
            "SPREAD  menyebar isi        [...a, ...b]        { ...user, aktif: true }\n" +
            "REST    mengumpulkan sisa   function f(...args)  const { id, ...sisa } = user\n" +
            "```\n\n" +
            "Cara cepat membedakannya: kalau `...` ada di tempat **nilai** dibuat, ia menyebar; kalau ada di tempat **nama** dideklarasikan (parameter atau destructuring), ia mengumpulkan.\n\n" +
            "Pola yang akan kamu pakai terus, dan yang menjadi cara baku memperbarui state di React:\n\n" +
            "```js\n" +
            "const diperbarui = { ...produk, stok: produk.stok - 1 };   // ganti satu properti\n" +
            "const ditambah   = [...daftar, itemBaru];                  // tambah tanpa push\n" +
            "const tanpaSatu  = daftar.filter((x) => x.id !== id);      // hapus tanpa splice\n" +
            "```\n\n" +
            "Ketiganya menghasilkan data **baru** dan meninggalkan yang lama utuh. Ingat juga batasnya: spread bersifat dangkal, jadi untuk data bersarang pakai `structuredClone()`.\n\n" +
            "## Object Literal yang Lebih Ringkas\n\n" +
            "```js\n" +
            "const nama = 'Bimo';\n" +
            "const field = 'umur';\n\n" +
            "const user = {\n" +
            "  nama,                    // shorthand: sama dengan nama: nama\n" +
            "  [field]: 20,             // computed key: nama key dari variabel\n" +
            "  sapa() { ... },          // method shorthand\n" +
            "};\n" +
            "```\n\n" +
            "Computed key sangat berguna saat menangani form: `{ ...form, [e.target.name]: e.target.value }` memperbarui field mana pun dengan satu baris, tanpa satu cabang `if` per field.\n\n" +
            "## Method Modern yang Layak Dikenali\n\n" +
            "| Method | Gunanya |\n" +
            "|---|---|\n" +
            "| `arr.at(-1)` | elemen terakhir, lebih jelas daripada `arr[arr.length - 1]` |\n" +
            "| `arr.flat()` | meratakan array bersarang satu tingkat |\n" +
            "| `Object.entries` / `fromEntries` | object ⇄ array pasangan, pasangan wajib saat mengolah form |\n" +
            "| `structuredClone(obj)` | salinan mendalam sungguhan, pengganti `JSON.parse(JSON.stringify(...))` |\n" +
            "| `arr.toSorted()` | versi terurut **tanpa memutasi** aslinya (berbeda dari `sort`) |\n\n" +
            "## Module: import dan export\n\n" +
            "```js\n" +
            "// hitung.js\n" +
            "export function tambah(a, b) { return a + b; }      // named export\n" +
            "export default function kali(a, b) { return a * b; } // default export, satu per berkas\n\n" +
            "// app.js\n" +
            "import kali, { tambah } from './hitung.js';\n" +
            "```\n\n" +
            "Dua hal yang sering menghambat pemula: di browser, `import` hanya bekerja bila script dimuat dengan `<script type=\"module\">`, dan jalur berkas relatif **wajib** diawali `./`. Selain itu module otomatis berjalan dalam mode ketat dan punya scope-nya sendiri — variabel di dalamnya tidak lagi bocor ke seluruh halaman seperti pada script biasa.\n\n" +
            "## Iterator dan Generator (pengenalan)\n\n" +
            "Kamu tidak perlu menulisnya sekarang, tapi perlu tahu keberadaannya. Segala hal yang bisa dipakai di `for...of` — array, string, `Map`, `Set` — adalah **iterable**. Dan `function*` beserta `yield` membuat fungsi yang bisa berhenti lalu dilanjutkan, sehingga nilainya dihasilkan satu per satu saat diminta, bukan sekaligus:\n\n" +
            "```js\n" +
            "function* nomorAntre() {\n" +
            "  let n = 1;\n" +
            "  while (true) yield n++;   // tak terbatas, tapi tidak membebani memori\n" +
            "}\n" +
            "```\n\n" +
            "Kenali bentuknya agar tidak bingung saat menemukannya di kode pustaka; pemakaian sehari-harinya jarang.\n\n" +
            "## Kenapa Ada npm dan Bundler\n\n" +
            "```text\n" +
            "npm        mengunduh & mengunci versi kode buatan orang lain (node_modules)\n" +
            "bundler    menyatukan puluhan berkas modulmu menjadi berkas yang efisien\n" +
            "           untuk browser, sekaligus menerjemahkan sintaks baru bila perlu\n" +
            "           (Vite dan Turbopack adalah dua yang paling umum sekarang)\n" +
            "```\n\n" +
            "Keduanya ada karena satu alasan praktis: proyek nyata terdiri dari ratusan berkas dan puluhan pustaka, dan mengirim semuanya apa adanya ke browser akan lambat. Kamu akan memakainya langsung di track React dan Next.js.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Fitur-fitur di modul ini seperti **perkakas listrik**: pekerjaannya sama seperti yang bisa kamu lakukan dengan tangan, hanya jauh lebih cepat dan lebih kecil kemungkinan cedera. `?.` adalah sarung tangan — bukan mengubah pekerjaannya, tapi mencegah satu jenis luka yang sering terjadi.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Memakai `||` untuk nilai yang boleh nol.** Pakai `??`.\n" +
            "2. **Mengira `?.` menyembunyikan semua error.** Ia hanya menangani `null`/`undefined`; salah nama properti tetap menghasilkan `undefined` tanpa peringatan.\n" +
            "3. **Mengira spread menyalin mendalam.** Ia dangkal.\n" +
            "4. **Lupa `./` pada jalur import** atau lupa `type=\"module\"` di HTML.\n" +
            "5. **Lebih dari satu `export default` per berkas.** Hanya boleh satu.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** sintaks modul ini adalah bahasa sehari-hari kode frontend hari ini. Kalau kamu membaca komponen React dan melihat `{ ...state, [name]: value }` atau `data?.user?.nama ?? '-'` tanpa perlu berhenti berpikir, kamu sudah siap masuk track berikutnya.",
        },
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
            "`??` mengembalikan sisi kanan **hanya jika** sisi kiri `null` atau `undefined`. Bedanya dengan `||` sangat penting: `0 || 10` menghasilkan `10` (karena 0 falsy), sedangkan `0 ?? 10` menghasilkan `0`. Untuk nilai yang boleh nol — jumlah stok, harga diskon, skor — `??` adalah pilihan yang benar. Jebakan yang sama juga mengenai string: `nama || 'Tamu'` mengubah nama kosong `''` menjadi 'Tamu', yang mungkin memang kamu inginkan — tapi itu keputusan yang harus sadar, bukan kebetulan. `??` berpasangan alami dengan `?.` karena keduanya hanya peduli pada `null` dan `undefined`, sehingga `data?.stok ?? 0` menangani data yang belum datang tanpa merusak angka nol yang sah.",
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
            "`...angka` di parameter mengumpulkan **semua argumen sisanya** menjadi array. Berbeda dari spread yang menyebar, rest mengumpulkan — sintaksnya sama, arah kerjanya berlawanan. Berguna untuk fungsi yang menerima jumlah argumen bebas, misalnya fungsi penjumlah atau pencatat log yang tidak tahu akan diberi berapa nilai. Karena hasilnya array sungguhan, seluruh method array langsung bisa dipakai di dalamnya — `reduce`, `map`, `filter` — dan itu bedanya dari `arguments` di kode lama yang bukan array. Dua aturan yang mengikat: rest **wajib** menjadi parameter terakhir, dan hanya boleh ada satu per fungsi.",
          example: {
            code: "function gabung(pemisah, ...kata) {\n  // kata sekarang berupa array\n  return kata.join(pemisah);\n}\n\nconsole.log(gabung('-', 'a', 'b', 'c'));\nconsole.log(gabung('-', 'x'));",
            output: "a-b-c\nx",
            note: "Rest parameter harus jadi parameter TERAKHIR. Ia mengumpulkan semua argumen sisa menjadi satu array.",
          },
          instruction:
            "Buat fungsi bernama `jumlahkan` yang bisa dipanggil dengan **berapa pun** jumlah angka lalu mengembalikan totalnya — kumpulkan argumennya jadi satu array, lalu ringkas menjadi satu nilai. Buktikan dengan menampilkan hasil pemanggilan `jumlahkan(1, 2, 3, 4)`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern:
                "(function\\s+jumlahkan|const\\s+jumlahkan\\s*=)[\\s\\S]{0,30}\\.\\.\\.\\s*\\w+",
              message:
                "Kumpulkan argumennya dengan rest parameter, misalnya `function jumlahkan(...angka)`. Nama parameternya bebas — yang wajib adalah tiga titik di depannya.",
            },
            {
              pattern: "\\w+\\s*\\.\\s*reduce\\s*\\(",
              message:
                "Ringkas array-nya menjadi satu nilai dengan `reduce`, misalnya `angka.reduce((a, b) => a + b, 0)`. Nilai awal `0` penting agar pemanggilan tanpa argumen tetap menghasilkan angka.",
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
            "Spread juga bekerja pada array: `[...a, ...b]` menggabungkan tanpa mengubah aslinya. Ini penting untuk state di React — jangan pakai `push` yang memutasi array, tapi buat array baru. Menambahkan item: `[...daftar, itemBaru]`. Posisi tanda `...` menentukan letak penyisipannya, jadi `['z', ...lama]` menaruh isi lama di belakang. Untuk menghapus, pasangannya adalah `filter` yang juga menghasilkan array baru. Ingat batasnya: spread bersifat **dangkal** — pada array berisi object, object di dalamnya masih dibagi bersama array aslinya, dan untuk itu kamu butuh `structuredClone`.",
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
            "Kalau nama variabel sama dengan nama key, tulis sekali saja: `{ nama, umur }` alih-alih `{ nama: nama, umur: umur }`. Untuk key yang ditentukan saat runtime, pakai bracket: `{ [kunci]: nilai }` — sangat berguna saat membuat object dari input dinamis. Computed key juga berguna saat menangani form: `{ [e.target.name]: e.target.value }` memperbarui field yang benar tanpa menulis percabangan panjang.",
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
          language: "text",
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
              type: "pilihan-ganda",
              question: "Diberikan: const stok = 0; console.log(stok ?? 10); — Apa yang ditampilkan? Ingat perbedaan operator ?? dengan ||.",
              choices: ["0", "10", "null", "undefined"],
              answerIndex: 0,
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
          kind: "materi",
          id: "js-6-m1",
          title: "Asynchronous: Kenapa JavaScript Tidak Menunggu",
          body:
            "# Pengertian\n\n" +
            "JavaScript menjalankan kodemu di **satu jalur** saja. Kalau ia berhenti menunggu balasan server selama dua detik, seluruh halaman ikut membeku: tombol tidak bisa diklik, animasi berhenti, teks tidak bisa dipilih.\n\n" +
            "Solusinya bukan menambah jalur, melainkan **tidak menunggu**: pekerjaan yang lama dititipkan, lalu kodemu lanjut. Begitu titipannya selesai, hasilnya dikerjakan kemudian. Itulah arti *asynchronous*, dan dari satu kalimat itu lahir seluruh isi modul ini.\n\n" +
            "## Event Loop dalam Satu Gambar\n\n" +
            "```text\n" +
            "console.log('A');\n" +
            "setTimeout(() => console.log('B'), 0);   // dititipkan, meski 0 milidetik\n" +
            "console.log('C');\n" +
            "\n" +
            "keluaran:  A  C  B\n" +
            "                 ^\n" +
            "  B menunggu SELURUH kode utama selesai lebih dulu — bukan soal lama-cepat,\n" +
            "  tapi soal urutan antrean.\n" +
            "```\n\n" +
            "Aturannya: kode utama dijalankan sampai habis, baru antrean titipan diperiksa. `setTimeout(fn, 0)` karena itu berarti \"jalankan segera **setelah** semua kode sekarang selesai\", bukan \"jalankan sekarang\".\n\n" +
            "Satu hal yang sering mengejutkan: Promise punya antrean sendiri yang **lebih diprioritaskan** daripada `setTimeout`. Jadi pada kode yang memuat keduanya, hasil Promise selalu muncul lebih dulu meski timernya 0.\n\n" +
            "## Tiga Generasi Cara Menuliskannya\n\n" +
            "```text\n" +
            "1. CALLBACK      fn(hasil => fn2(hasil, hasil2 => ...))   -> \"callback hell\", sulit dibaca\n" +
            "2. PROMISE       ambil().then(...).catch(...)             -> rantai, tidak lagi bertumpuk\n" +
            "3. ASYNC/AWAIT   const data = await ambil();             -> terbaca seperti kode biasa\n" +
            "```\n\n" +
            "Ketiganya masih kamu temui di kode nyata, tapi **tulis kode barumu dengan async/await**. Kamu tetap perlu mengenali Promise karena `async/await` sesungguhnya hanya cara lain menulis Promise — dan beberapa hal, seperti menjalankan banyak permintaan sekaligus, memang lebih jelas ditulis dengan Promise langsung.\n\n" +
            "## Promise: Tiga Keadaan\n\n" +
            "```text\n" +
            "pending  ->  fulfilled   (berhasil, ada nilainya)   -> .then()  / await\n" +
            "         ->  rejected    (gagal, ada alasannya)      -> .catch() / try-catch\n" +
            "```\n\n" +
            "`await` menunggu sebuah Promise selesai lalu memberikan **isinya**. Karena itu `await` hanya boleh berada di dalam fungsi `async`, dan fungsi `async` selalu mengembalikan Promise — jadi memanggilnya tanpa `await` memberimu Promise-nya, bukan datanya.\n\n" +
            "## fetch: Mengambil Data dari Internet\n\n" +
            "```js\n" +
            "async function ambilProduk(id) {\n" +
            "  try {\n" +
            "    const res = await fetch(`https://api.contoh.id/produk/${id}`);\n" +
            "    if (!res.ok) throw new Error(`Gagal: ${res.status}`);   // WAJIB\n" +
            "    const data = await res.json();                          // dua kali await\n" +
            "    return data;\n" +
            "  } catch (e) {\n" +
            "    console.error(e.message);\n" +
            "    return null;\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "> **Jebakan wajib diingat: `fetch` TIDAK menganggap 404 atau 500 sebagai kegagalan.** Selama servernya menjawab — apa pun jawabannya — Promise-nya dianggap berhasil. Yang membuat `fetch` gagal hanya masalah jaringan. Karena itu **selalu** periksa `res.ok` sendiri; tanpa baris itu, halaman error dari server akan kamu perlakukan sebagai data.\n\n" +
            "Perhatikan juga ada **dua** `await`: satu untuk balasannya tiba, satu lagi untuk membaca isi badannya sebagai JSON.\n\n" +
            "Untuk mengirim data:\n\n" +
            "```js\n" +
            "await fetch(url, {\n" +
            "  method: 'POST',\n" +
            "  headers: { 'Content-Type': 'application/json' },\n" +
            "  body: JSON.stringify({ nama: 'Bimo' }),   // body harus TEKS, bukan object\n" +
            "});\n" +
            "```\n\n" +
            "## Menjalankan Beberapa Permintaan Sekaligus\n\n" +
            "| Cara | Perilakunya |\n" +
            "|---|---|\n" +
            "| `await a(); await b();` | berurutan — total waktunya dijumlahkan |\n" +
            "| `Promise.all([a(), b()])` | paralel; **gagal satu, gagal semua** |\n" +
            "| `Promise.allSettled([...])` | paralel; melaporkan hasil masing-masing, tidak ada yang menjatuhkan yang lain |\n" +
            "| `Promise.race([...])` | yang tercepat selesai yang dipakai |\n\n" +
            "Kesalahan yang paling sering: menaruh `await` di dalam `for` untuk lima permintaan yang tidak saling bergantung. Lima kali 300 milidetik menjadi 1,5 detik, padahal dengan `Promise.all` cukup 300 milidetik. Pakai `allSettled` bila sebagian gagal masih dapat diterima — misalnya memuat tiga widget dashboard yang berdiri sendiri.\n\n" +
            "## Pola UI yang Benar: Tiga Keadaan\n\n" +
            "```text\n" +
            "loading   tampilkan penanda proses, matikan tombolnya\n" +
            "success   tampilkan datanya\n" +
            "error     tampilkan pesan yang bisa ditindaklanjuti + tombol coba lagi\n" +
            "```\n\n" +
            "Melupakan keadaan `loading` membuat aplikasi terasa rusak — pengguna mengklik dan tidak terjadi apa-apa, lalu mengklik lagi sehingga permintaannya terkirim dua kali. Melupakan `error` membuat halaman kosong tanpa penjelasan. Ketiganya wajib, dan pola inilah yang nanti kamu tulis dengan `useState` di React.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan **memesan makanan di kedai kopi**. Kasir tidak berdiri diam menunggu pesananmu jadi — ia memberimu nomor antrean dan melayani orang berikutnya. Itu asynchronous. Nomor antrean adalah Promise: bukan kopinya, tapi janji bahwa kopinya akan ada. `await` adalah kamu memilih duduk menunggu nomormu dipanggil. Dan `Promise.all` adalah memesan tiga minuman sekaligus lalu menunggu ketiganya siap, alih-alih memesan satu, menunggu, lalu memesan lagi.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Tidak memeriksa `res.ok`.** 404 bukan error bagi `fetch`.\n" +
            "2. **Lupa `await` pada `res.json()`.** Yang kamu pegang jadi Promise, dan `data.nama` berisi `undefined`.\n" +
            "3. **`await` di luar fungsi `async`.** SyntaxError (kecuali di module tingkat atas).\n" +
            "4. **`await` di dalam loop untuk permintaan yang tidak saling bergantung.** Lambat tanpa alasan.\n" +
            "5. **Mengirim object langsung sebagai `body`.** Harus `JSON.stringify` lebih dulu.\n" +
            "6. **`try/catch` tanpa `res.ok`.** Blok catch tidak akan pernah tersentuh oleh 404.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** hampir semua fitur yang kamu kerjakan di pekerjaan nyata menyentuh data dari server. Dua hal dari modul ini paling sering ditanyakan di interview: menjelaskan event loop dengan contoh `setTimeout(fn, 0)`, dan bahwa `fetch` tidak melempar error pada 404. Yang kedua itu bug produksi nyata, bukan trivia.",
        },
        {
          kind: "step",
          id: "js-6-1",
          title: "setTimeout dan urutan eksekusi",
          explanation:
            "JavaScript **tidak menunggu**. `setTimeout` menjadwalkan fungsi untuk dijalankan nanti, lalu kode berikutnya langsung berjalan. Karena itu output kode ini bukan urut dari atas ke bawah — ini konsep pertama yang harus benar sebelum belajar Promise. Bahkan `setTimeout(fn, 0)` tetap dijalankan setelah seluruh kode sinkron selesai, karena tugas terjadwal baru diambil ketika antrean utama kosong.",
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
            "`async/await` adalah cara menulis Promise agar terlihat berurutan seperti kode biasa — jauh lebih mudah dibaca daripada rantai `.then()`. Dua aturan: `await` hanya bisa dipakai di dalam fungsi `async`, dan fungsi `async` **selalu** mengembalikan Promise. Perlu diingat `await` menghentikan hanya fungsi tempat ia berada, bukan seluruh program — bagian lain aplikasimu tetap berjalan seperti biasa.",
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
            "`fetch` mengembalikan Promise berisi object Response — perhatikan bahwa datanya belum siap, perlu `await res.json()` sebagai langkah kedua. **Jebakan penting:** fetch **tidak** melempar error untuk status 404 atau 500; ia hanya gagal saat jaringan bermasalah. Karena itu kamu harus memeriksa `res.ok` sendiri. Tanpa baris pemeriksaan itu, halaman error dari server akan kamu perlakukan sebagai data — dan bug-nya muncul beberapa langkah kemudian sebagai `undefined` yang sulit dilacak asalnya. Perhatikan juga bahwa dibutuhkan **dua** kali `await`: satu sampai balasannya tiba, satu lagi untuk membaca isi badannya sebagai JSON. Melupakan `await` yang kedua membuatmu memegang Promise, sehingga `data.nama` berisi `undefined` padahal permintaannya berhasil.",
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
            "Kode async yang gagal tanpa `try/catch` menghasilkan *unhandled rejection* — aplikasi bisa diam tanpa pesan, dan pengguna melihat layar kosong tanpa tahu apa yang terjadi. Pola produksi selalu: `try` untuk alur normal, `catch` untuk kegagalan, dan beri pesan yang bermanfaat. Ingat juga bahwa `fetch` tidak melempar error saat server membalas 404 atau 500, jadi periksa `res.ok` di dalam `try` sebelum memproses datanya.",
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
            "Kalau kamu `await` tiga request berurutan, totalnya adalah jumlah semua waktunya. `Promise.all` menjalankannya **bersamaan**, sehingga total hanya selama yang paling lambat. Catatan penting: kalau satu gagal, semuanya gagal — pakai `Promise.allSettled` bila kamu ingin tetap mendapat hasil yang berhasil. Kesalahan yang paling sering di sini adalah menaruh `await` di dalam `for` untuk beberapa permintaan yang **tidak** saling bergantung: lima permintaan berdurasi 300 milidetik menjadi 1,5 detik, padahal dijalankan bersamaan cukup 300 milidetik. Aturan pemilihannya: `all` saat semuanya wajib berhasil, `allSettled` saat sebagian gagal masih bisa diterima (misalnya tiga widget dashboard yang berdiri sendiri), dan `race` saat kamu hanya butuh yang tercepat.",
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
              type: "pilihan-ganda",
              question: "Diberikan kode: console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C'); — Apa urutan output yang benar?",
              choices: ["A C B", "A B C", "B A C", "C B A"],
              answerIndex: 0,
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
          kind: "materi",
          id: "js-7-m1",
          title: "Error dan Debugging: Keterampilan Harian yang Jarang Diajarkan",
          body:
            "# Pengertian\n\n" +
            "Menulis kode yang jalan dari percobaan pertama itu jarang. Yang sebenarnya kamu kerjakan sepanjang hari sebagai developer adalah **mencari tahu kenapa kode tidak berperilaku seperti dugaanmu** — dan itu keterampilan yang bisa dilatih, bukan bakat.\n\n" +
            "Perbedaan antara pemula dan orang berpengalaman di sini bukan jumlah bug, tapi **kecepatan menemukan penyebabnya**. Pemula menebak dan mengubah baris secara acak; yang berpengalaman membaca pesan errornya sampai habis.\n\n" +
            "## Tiga Jenis Error yang Perlu Kamu Kenali\n\n" +
            "| Jenis | Artinya | Contoh penyebab |\n" +
            "|---|---|---|\n" +
            "| `SyntaxError` | tulisannya tidak sah, **kode tidak jalan sama sekali** | kurung atau kurawal tidak seimbang |\n" +
            "| `ReferenceError` | nama yang dipakai tidak ada | salah ketik nama variabel, atau memakai `let` sebelum deklarasinya |\n" +
            "| `TypeError` | nilainya ada, tapi bukan jenis yang bisa diperlakukan begitu | `null.nama`, atau memanggil sesuatu yang bukan fungsi |\n\n" +
            "Membedakan ketiganya langsung memangkas separuh pencarian: `SyntaxError` berarti masalahnya tulisan (dan seringnya beberapa baris **di atas** yang ditunjuk), `ReferenceError` berarti masalah nama atau urutan, sedangkan `TypeError` berarti asumsimu tentang isi sebuah nilai keliru — dan yang terakhir inilah yang paling sering.\n\n" +
            "> **Dua pesan yang akan kamu lihat ratusan kali:** `Cannot read properties of null (reading 'x')` berarti sesuatu yang kamu harap ada ternyata `null` — biasanya hasil `querySelector` yang tidak ketemu. Dan `x is not a function` biasanya berarti salah ketik nama method, atau nilainya bukan jenis yang kamu duga.\n\n" +
            "## Membaca Stack Trace\n\n" +
            "```text\n" +
            "TypeError: Cannot read properties of undefined (reading 'nama')\n" +
            "    at tampilkanUser (app.js:42)      <- BARIS PALING ATAS: tempat error terjadi\n" +
            "    at render (app.js:88)             <- siapa yang memanggilnya\n" +
            "    at main (app.js:120)              <- siapa yang memanggil itu\n" +
            "```\n\n" +
            "Baris **paling atas** adalah tempat kejadiannya; baris di bawahnya adalah jalur bagaimana kode sampai ke sana. Cara membacanya: mulai dari atas untuk tahu apa yang rusak, lalu turun untuk tahu **dari mana** nilai yang rusak itu datang. Abaikan baris yang menyebut berkas di dalam `node_modules` — kesalahannya hampir selalu di kodemu, bukan di pustakanya.\n\n" +
            "## try / catch / finally dan throw\n\n" +
            "```js\n" +
            "try {\n" +
            "  const data = JSON.parse(teksDariServer);   // bisa gagal\n" +
            "} catch (e) {\n" +
            "  console.error('Data tidak bisa dibaca:', e.message);\n" +
            "} finally {\n" +
            "  setLoading(false);                          // SELALU dijalankan, gagal atau tidak\n" +
            "}\n" +
            "```\n\n" +
            "`finally` adalah tempat yang tepat untuk membersihkan keadaan — mematikan penanda *loading*, menutup koneksi — karena ia berjalan pada kedua kemungkinan.\n\n" +
            "Kamu juga boleh **melempar** error sendiri dengan `throw new Error('pesan')`. Kapan itu tepat? Ketika fungsimu menerima sesuatu yang mustahil dikerjakan: pembagian dengan nol, umur negatif, atau respons server yang bentuknya tidak sesuai. Melempar lebih awal jauh lebih baik daripada mengembalikan `null` yang kemudian meledak sepuluh baris di tempat lain — jejaknya jadi sulit dilacak.\n\n" +
            "> **Yang harus dihindari: `catch` kosong.** `catch (e) {}` membuat error hilang tanpa jejak, dan bug yang tidak meninggalkan jejak adalah bug yang paling lama diperbaiki. Minimal catat pesannya.\n\n" +
            "## console Lebih dari log\n\n" +
            "| Perintah | Gunanya |\n" +
            "|---|---|\n" +
            "| `console.table(arr)` | menampilkan array of object sebagai tabel — jauh terbaca untuk data API |\n" +
            "| `console.group()` / `groupEnd()` | mengelompokkan keluaran agar tidak bercampur |\n" +
            "| `console.time('x')` / `timeEnd('x')` | mengukur lama sebuah proses |\n" +
            "| `console.trace()` | menampilkan jalur pemanggilan tanpa perlu melempar error |\n" +
            "| `console.error` / `warn` | ikut menampilkan stack trace dan mudah difilter di panel |\n\n" +
            "## Breakpoint: Berhenti dan Melihat ke Dalam\n\n" +
            "`console.log` bertaburan di mana-mana ada batasnya. Cara yang lebih cepat: buka **DevTools → Sources**, klik nomor baris untuk memasang **breakpoint**, lalu muat ulang halaman. Eksekusi berhenti tepat di baris itu dan kamu bisa melihat isi **semua** variabel pada saat itu.\n\n" +
            "```text\n" +
            "Resume (F8)      lanjutkan sampai breakpoint berikutnya\n" +
            "Step over (F10)  jalankan baris ini, jangan masuk ke dalam fungsinya\n" +
            "Step into (F11)  masuk ke dalam fungsi yang dipanggil di baris ini\n" +
            "Watch            pantau nilai sebuah ekspresi terus-menerus\n" +
            "```\n\n" +
            "Menulis `debugger;` di dalam kodemu punya efek sama dengan memasang breakpoint, dan berguna saat baris yang ingin kamu periksa sulit ditemukan di panel.\n\n" +
            "## Network Tab: Saat Datanya yang Bermasalah\n\n" +
            "Kalau tampilan kosong padahal kode terasa benar, buka **DevTools → Network** dan periksa empat hal berurutan: apakah permintaannya **terkirim**, berapa **status**-nya (404? 401? 500?), apa isi **Response**-nya, dan apa yang dikirim di **Payload**. Empat pertanyaan itu memisahkan dengan cepat \"bug di kodeku\" dari \"servernya memang menjawab lain\" — dan itu menentukan siapa yang harus memperbaikinya.\n\n" +
            "## Strategi Sistematis: Reproduce → Isolate → Fix\n\n" +
            "```text\n" +
            "1. REPRODUCE  temukan langkah persis yang selalu memunculkan bug-nya.\n" +
            "              Bug yang tidak bisa diulang tidak bisa dipastikan selesai.\n" +
            "2. ISOLATE    persempit wilayahnya. Matikan separuh kode; masih terjadi?\n" +
            "              Berarti penyebabnya di separuh yang tersisa. Ulangi.\n" +
            "3. FIX        perbaiki PENYEBABNYA, bukan gejalanya. Lalu jalankan ulang\n" +
            "              langkah nomor 1 untuk membuktikan bug-nya benar-benar hilang.\n" +
            "```\n\n" +
            "Langkah 2 itu yang paling sering dilewati, padahal paling berdampak: membelah wilayah pencarian berulang kali menemukan penyebab jauh lebih cepat daripada membaca seluruh kode dari awal.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Debugging itu seperti **mencari kebocoran air di rumah**. Pemula langsung membongkar dinding tempat air terlihat menggenang. Tukang berpengalaman menutup keran satu per satu untuk mempersempit wilayah, karena air mengalir — tempat munculnya hampir selalu bukan tempat bocornya. Stack trace adalah jejak aliran itu, dibaca dari genangan ke arah sumbernya.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Tidak membaca pesan errornya sampai habis.** Sebagian besar pesan menyebut penyebabnya secara harfiah.\n" +
            "2. **`catch` kosong.** Bug jadi tak berjejak.\n" +
            "3. **Mengubah beberapa hal sekaligus.** Kalau bug hilang, kamu tidak tahu yang mana penyebabnya.\n" +
            "4. **Mencari `SyntaxError` tepat di baris yang ditunjuk.** Penyebabnya sering beberapa baris di atas.\n" +
            "5. **Menutup gejala dengan `if (x)`.** Nilai `undefined` itu ada asalnya; cari asalnya.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** ini keterampilan yang paling sering dipakai dan paling jarang diajarkan. Di sesi wawancara teknis berbasis kasus, yang dinilai justru caramu mendekati masalah: apakah kamu membaca pesannya, mempersempit wilayahnya, dan menjelaskan dugaanmu — atau langsung mengubah baris secara acak sambil berharap.",
        },
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
            "`try` menjalankan kode berisiko, `catch` menangkap kegagalan, `finally` **selalu** dijalankan — berhasil maupun gagal. `finally` itulah tempat mematikan indikator loading, karena kalau kamu menaruhnya hanya di `try`, spinner akan berputar selamanya saat terjadi error. Tangkap error yang spesifik bila memungkinkan, dan jangan pernah mengosongkan blok `catch` — kegagalan yang ditelan diam-diam adalah bug yang paling mahal untuk ditemukan.",
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
            "Fungsi yang menerima input tidak valid sebaiknya **gagal dengan jelas dan segera** (`throw`), bukan mengembalikan `undefined` diam-diam yang baru meledak jauh di tempat lain. Prinsip ini disebut *fail fast* — error yang muncul dekat dengan penyebabnya jauh lebih murah untuk diperbaiki. Sertakan pesan yang menyebut nilai penyebabnya, misalnya `throw new Error('Umur tidak valid: ' + umur)`, agar log-nya bisa langsung menunjuk sumber masalah.",
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
            "Cara amatir: mengubah kode secara acak sampai jalan. Cara profesional: **reproduce** (buat error muncul konsisten) → **isolate** (persempit sampai kode terkecil yang masih gagal) → **fix** → **verify**. Fungsi di bawah punya bug klasik; temukan lewat isolasi, bukan tebakan. Setelah bug ditemukan, tulis satu test kecil yang gagal sebelum perbaikan dan lulus sesudahnya — itu cara termurah memastikan bug yang sama tidak kembali.",
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
              type: "pilihan-ganda",
              question: "Kamu men-debug array berisi 20 object dan console.log menampilkannya bertumpuk sulit dibaca. Method console apa yang menampilkannya sebagai tabel?",
              choices: ["console.table()", "console.log()", "console.dir()", "console.group()"],
              answerIndex: 0,
              explanation:
                "console.table(data) menampilkan data terstruktur sebagai tabel dengan kolom yang bisa diurutkan — jauh lebih mudah dibaca daripada console.log untuk data dari API.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Daftar produk di halamanmu kosong padahal kodenya terasa benar. Di mana kamu memeriksa lebih dulu untuk memisahkan \"bug di kodeku\" dari \"servernya menjawab lain\"?",
              choices: [
                "Menambahkan console.log di seluruh berkas",
                "Tab Network di DevTools: apakah permintaannya terkirim, berapa status-nya, dan apa isi Response-nya",
                "Menyegarkan halaman beberapa kali",
                "Tab Elements untuk memeriksa CSS",
              ],
              answerIndex: 1,
              explanation:
                "Tab Network menjawab empat pertanyaan sekaligus: permintaannya terkirim atau tidak, status-nya (404, 401, 500), isi Response-nya, dan apa yang kamu kirim di Payload. Jawabannya langsung menentukan siapa yang harus memperbaiki — kalau server mengembalikan 401, tidak ada gunanya menyisir logika render. Menaburkan `console.log` menggoda karena terasa produktif, tapi ia menjawab pertanyaan yang lebih sempit dan butuh waktu jauh lebih lama.",
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
          kind: "materi",
          id: "js-8-m1",
          title: "Dua Cara Menyusun Kode: Object dan Fungsi",
          body:
            "# Pengertian\n\n" +
            "Begitu programmu tumbuh melewati beberapa ratus baris, pertanyaannya bukan lagi \"bagaimana caranya jalan\" tapi **\"bagaimana menyusunnya agar tetap bisa dibaca\"**. Ada dua jawaban besar, dan keduanya dipakai berdampingan di kode nyata:\n\n" +
            "```text\n" +
            "OOP                            FUNCTIONAL\n" +
            "kumpulkan data + perilakunya   pisahkan data dari perilaku\n" +
            "jadi satu object               olah data lewat fungsi kecil\n" +
            "class, method, this            pure function, map/filter/reduce\n" +
            "```\n\n" +
            "Frontend modern condong ke gaya kedua — React dibangun di atasnya — tapi kamu tetap akan membaca `class` di kode Node.js, pustaka, dan proyek lama. Jadi keduanya perlu.\n\n" +
            "## Class: Cetakan untuk Object\n\n" +
            "```js\n" +
            "class Produk {\n" +
            "  #stok = 0;                       // field privat: hanya bisa diakses di dalam class\n" +
            "  static pajak = 0.11;             // milik class, bukan milik tiap object\n\n" +
            "  constructor(nama, harga) {       // dijalankan otomatis saat new Produk(...)\n" +
            "    this.nama = nama;              // this = object yang sedang dibuat\n" +
            "    this.harga = harga;\n" +
            "  }\n\n" +
            "  get hargaAkhir() {               // getter: dipakai seperti properti, bukan method\n" +
            "    return this.harga * (1 + Produk.pajak);\n" +
            "  }\n\n" +
            "  set stok(nilai) {                // setter: tempat menaruh validasi\n" +
            "    if (nilai < 0) throw new Error('Stok tidak boleh negatif');\n" +
            "    this.#stok = nilai;\n" +
            "  }\n" +
            "}\n\n" +
            "const p = new Produk('Kopi', 20000);\n" +
            "p.hargaAkhir;      // 22200 — tanpa tanda kurung, karena getter\n" +
            "p.stok = -5;       // melempar Error, karena lewat setter\n" +
            "```\n\n" +
            "Empat hal di atas layak diingat: **constructor** menyiapkan object baru, **getter/setter** membuat nilai turunan dan validasi terasa seperti properti biasa, **`static`** untuk hal yang milik seluruh class (bukan tiap object), dan **`#field`** untuk data yang tidak boleh disentuh dari luar.\n\n" +
            "## Inheritance dan Kapan Menghindarinya\n\n" +
            "```js\n" +
            "class Admin extends User {\n" +
            "  constructor(nama, level) {\n" +
            "    super(nama);        // WAJIB dipanggil lebih dulu sebelum memakai this\n" +
            "    this.level = level;\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "Inheritance terasa elegan di contoh, dan menyulitkan di proyek nyata: rantai warisan tiga tingkat membuat kamu harus membuka tiga berkas untuk tahu satu method sebenarnya melakukan apa. Nasihat yang sudah lama disepakati banyak tim: **utamakan komposisi daripada pewarisan** — gabungkan kemampuan kecil, jangan membangun pohon keluarga. Pakai `extends` saat hubungannya benar-benar \"adalah jenis dari\", dan berhenti di satu tingkat.\n\n" +
            "## this: Aturan yang Sebenarnya\n\n" +
            "`this` tidak ditentukan oleh tempat fungsi **ditulis**, tapi oleh **cara ia dipanggil**:\n\n" +
            "| Cara dipanggil | Isi `this` |\n" +
            "|---|---|\n" +
            "| `obj.method()` | `obj` |\n" +
            "| `fn()` biasa | `undefined` (mode ketat) |\n" +
            "| `new Kelas()` | object baru yang sedang dibuat |\n" +
            "| di dalam arrow function | **diwarisi** dari tempat ia ditulis |\n" +
            "| `fn.call(x)` / `fn.apply(x)` / `fn.bind(x)` | ditentukan olehmu secara eksplisit |\n\n" +
            "```js\n" +
            "class Tombol {\n" +
            "  constructor() { this.jumlah = 0; }\n\n" +
            "  // ❌ this hilang: dipanggil oleh browser sebagai fungsi biasa\n" +
            "  pasangSalah(el) { el.addEventListener('click', function () { this.jumlah++; }); }\n\n" +
            "  // ✅ arrow function mewarisi this dari sekitarnya\n" +
            "  pasangBenar(el) { el.addEventListener('click', () => { this.jumlah++; }); }\n" +
            "}\n" +
            "```\n\n" +
            "Inilah alasan paling praktis arrow function ada, dan gejalanya khas: `Cannot read properties of undefined (reading 'jumlah')` di dalam callback.\n\n" +
            "## Prototype: Apa yang Terjadi di Balik class\n\n" +
            "JavaScript sebenarnya tidak punya class seperti Java. `class` hanyalah **penulisan yang lebih rapi** di atas mekanisme yang sudah ada sejak awal: **prototype**.\n\n" +
            "```text\n" +
            "const p = new Produk('Kopi', 20000);\n" +
            "\n" +
            "p.hitung()  ->  ada di p sendiri?  tidak\n" +
            "                ada di Produk.prototype?  ya  -> jalankan\n" +
            "                (kalau tidak, naik lagi ke Object.prototype, lalu null)\n" +
            "```\n\n" +
            "Rantai pencarian itu bernama **prototype chain**, dan ia menjelaskan dua hal yang sering terasa ajaib: kenapa method tidak digandakan di setiap object (semuanya berbagi satu salinan di prototype), dan kenapa `[].map` bisa dipanggil padahal kamu tidak pernah menulisnya. Kamu jarang perlu menyentuh prototype secara langsung, tapi pertanyaan \"apa bedanya class dan prototype\" masih sering muncul di interview.\n\n" +
            "## Immutability: Kenapa Framework Menyukainya\n\n" +
            "```js\n" +
            "// ❌ memutasi — React tidak tahu ada yang berubah\n" +
            "state.daftar.push(item);\n\n" +
            "// ✅ menghasilkan data baru\n" +
            "setState({ ...state, daftar: [...state.daftar, item] });\n" +
            "```\n\n" +
            "React membandingkan **alamat** data lama dan baru untuk memutuskan perlu merender ulang atau tidak. Kalau kamu mengubah isi di alamat yang sama, alamatnya tidak berubah, dan React menyimpulkan tidak ada yang perlu diperbarui — inilah sumber keluhan \"state saya tidak ter-update\" yang paling sering. Karena itu biasakan sekarang: `map`, `filter`, dan spread menghasilkan data baru; `push`, `splice`, dan `sort` memutasi.\n\n" +
            "## Komposisi Fungsi dan Higher-Order Function\n\n" +
            "**Higher-order function** adalah fungsi yang menerima atau mengembalikan fungsi lain — `map`, `filter`, dan `addEventListener` semuanya termasuk. Sifat ini memungkinkan kamu menyusun perilaku dari bagian kecil:\n\n" +
            "```js\n" +
            "const kaliDengan = (n) => (x) => x * n;    // fungsi yang MEMBUAT fungsi\n" +
            "const dobel = kaliDengan(2);\n" +
            "[1, 2, 3].map(dobel);                      // [2, 4, 6]\n" +
            "```\n\n" +
            "Keuntungannya bukan kepintaran, tapi kemudahan pengujian: fungsi kecil yang murni bisa diuji satu per satu tanpa menyiapkan apa pun — dan itu langsung kamu praktikkan di modul Testing.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "OOP itu seperti **peralatan dapur khusus**: rice cooker menyimpan sekaligus memasak nasi — data dan perilaku dalam satu benda. Functional itu seperti **pisau dan talenan**: alat sederhana yang tidak menyimpan apa pun, dipakai berurutan untuk mengolah bahan. Dapur profesional punya keduanya, dan memilih berdasarkan pekerjaannya — bukan berdasarkan mana yang lebih modern.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Lupa `new`.** Memanggil `Produk(...)` tanpa `new` melempar TypeError.\n" +
            "2. **Lupa `super()`** sebelum memakai `this` di constructor turunan.\n" +
            "3. **`function` biasa sebagai callback di dalam class.** `this` hilang; pakai arrow function.\n" +
            "4. **Pewarisan tiga tingkat.** Sulit dilacak; utamakan komposisi.\n" +
            "5. **Memutasi state.** Framework tidak melihat perubahannya.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** `this` dan immutability adalah dua topik dari modul ini yang paling sering muncul di interview frontend, dan keduanya bukan trivia — keliru di keduanya menghasilkan bug yang benar-benar terjadi di produksi. Sementara `class` akan kamu temui langsung begitu masuk backend di track Node.js.",
        },
        {
          kind: "step",
          id: "js-8-1",
          title: "Class dan constructor",
          explanation:
            "`class` adalah cetakan untuk membuat object serupa. `constructor` dijalankan otomatis saat `new` dipanggil, dan `this` menunjuk ke instance yang sedang dibuat. Meski kode modern lebih sering memakai fungsi dan object literal, kamu **pasti** menemui class saat membaca codebase yang sudah ada. Awali nama class dengan huruf kapital sebagai konvensi, dan ingat bahwa lupa menulis `new` membuat `this` tidak menunjuk ke instance mana pun.",
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
            "`extends` mewarisi properti dan method dari class induk, dan `super()` **wajib** dipanggil di constructor anak sebelum memakai `this`. Peringatan dari pengalaman: pewarisan berlapis-lapis membuat kode sulit dilacak — di praktik modern, **komposisi lebih disukai daripada pewarisan**. Sebelum memakai `extends`, tanyakan apakah hubungannya benar-benar 'adalah sebuah', bukan sekadar 'punya beberapa kemiripan' — pertanyaan itu mencegah hierarki yang menyulitkan.",
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
            "Ini bug klasik: method yang dipakai sebagai callback **kehilangan `this`**, karena nilai `this` ditentukan oleh *cara pemanggilan*, bukan tempat penulisan. Solusi modern: pakai arrow function, yang mengambil `this` dari tempat ia didefinisikan. Alternatif lama yang masih sering kamu temui di codebase adalah `fn.bind(this)`, jadi kenali bentuknya walaupun kamu sendiri memilih arrow function.",
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
            "Fungsi **pure** punya dua sifat: hasilnya hanya bergantung pada argumennya, dan ia tidak mengubah apa pun di luar dirinya. Fungsi pure mudah diuji (tanpa setup), mudah dipahami, dan aman dipakai ulang. Fungsi yang memutasi argumennya adalah sumber bug yang sulit dilacak. Fungsi yang menyentuh jaringan, waktu, atau DOM tidak mungkin pure — pisahkan bagian itu ke tepi program dan biarkan inti logikanya tetap pure agar mudah diuji.",
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
            "Higher-order function adalah fungsi yang menerima fungsi dan/atau mengembalikan fungsi. Kamu sudah memakainya (`map`, `filter`), sekarang kamu membuatnya. Pola ini dipakai untuk membuat fungsi terspesialisasi dari satu template umum. Pola ini juga yang dipakai middleware dan dekorator: satu fungsi membungkus fungsi lain untuk menambah perilaku tanpa mengubah isinya.",
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
          kind: "step",
          id: "js-8-6",
          title: "Getter, Setter, dan static",
          explanation:
            "Tiga fitur class ini menyelesaikan masalah yang berbeda. **Getter** membuat nilai yang dihitung dari properti lain terasa seperti properti biasa: ditulis `get hargaAkhir()` di dalam class, dipakai `produk.hargaAkhir` **tanpa tanda kurung** — jadi saat rumusnya berubah, seluruh pemakainya tidak perlu diubah. **Setter** adalah tempat menaruh validasi di jalur masuk: `set stok(nilai)` dijalankan setiap kali seseorang menulis `produk.stok = -5`, sehingga nilai mustahil bisa ditolak di satu tempat alih-alih diperiksa di dua puluh tempat pemakaian. **`static`** menandai sesuatu yang milik **class-nya**, bukan milik tiap object — cocok untuk nilai tetap bersama seperti tarif pajak, atau fungsi pembantu yang tidak butuh data satu object tertentu, dan diaksesnya lewat nama class (`Produk.pajak`). Jebakan yang perlu diingat: getter tidak boleh menerima parameter, setter wajib menerima tepat satu, dan getter yang di dalamnya mengerjakan sesuatu yang berat atau mengubah data akan mengejutkan pemakainya — karena dari luar ia terlihat seperti sekadar membaca properti.",
          example: {
            code:
              "class Lingkaran {\n" +
              "  static PI = 3.14;              // milik class, bukan tiap object\n\n" +
              "  constructor(radius) { this._radius = radius; }\n\n" +
              "  get luas() {                   // dipakai TANPA tanda kurung\n" +
              "    return Lingkaran.PI * this._radius ** 2;\n" +
              "  }\n\n" +
              "  set radius(nilai) {            // tempat validasi\n" +
              "    if (nilai <= 0) throw new Error('Radius harus positif');\n" +
              "    this._radius = nilai;\n" +
              "  }\n" +
              "}\n\n" +
              "const c = new Lingkaran(10);\n" +
              "console.log(c.luas);           // 314 — tanpa ()\n" +
              "console.log(Lingkaran.PI);     // diakses lewat NAMA CLASS\n" +
              "c.radius = 5;\n" +
              "console.log(c.luas);",
            output: "314\n3.14\n78.5",
            note: "`c.luas` tanpa tanda kurung karena getter. Menulis `c.luas()` justru error: hasilnya angka, dan angka bukan fungsi.",
          },
          instruction:
            "Lengkapi class `Karyawan` di editor. Tambahkan getter bernama `gajiTahunan` yang mengembalikan `gajiBulanan` dikali 12, lalu tambahkan properti static bernama `mataUang` bernilai `'IDR'`. Setelah itu cetak gaji tahunan sebuah karyawan dan nilai static-nya lewat nama class.",
          starterCode:
            "class Karyawan {\n" +
            "  constructor(nama, gajiBulanan) {\n" +
            "    this.nama = nama;\n" +
            "    this.gajiBulanan = gajiBulanan;\n" +
            "  }\n" +
            "}\n\n" +
            "const k = new Karyawan('Bimo', 8000000);\n",
          language: "js",
          tests: [
            {
              pattern:
                "get\\s+gajiTahunan\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*this\\s*\\.\\s*gajiBulanan\\s*\\*\\s*12",
              message:
                "Tulis `get gajiTahunan() { return this.gajiBulanan * 12; }` — getter tidak menerima parameter apa pun.",
            },
            {
              pattern: "static\\s+mataUang\\s*=\\s*['\"]IDR['\"]",
              message:
                "Tambahkan `static mataUang = 'IDR';` di dalam class — properti static tidak memakai `this`.",
            },
            {
              pattern: "console\\.log\\([\\s\\S]*k\\s*\\.\\s*gajiTahunan(?!\\s*\\()",
              message:
                "Cetak `k.gajiTahunan` TANPA tanda kurung. Getter dipakai seperti properti biasa; menambahkan `()` justru melempar error.",
            },
            {
              pattern:
                "console\\.log\\([\\s\\S]*Karyawan\\s*\\.\\s*mataUang",
              message:
                "Properti static diakses lewat nama class: `Karyawan.mataUang`, bukan `k.mataUang`.",
            },
          ],
          solution:
            "class Karyawan {\n" +
            "  static mataUang = 'IDR';\n\n" +
            "  constructor(nama, gajiBulanan) {\n" +
            "    this.nama = nama;\n" +
            "    this.gajiBulanan = gajiBulanan;\n" +
            "  }\n\n" +
            "  get gajiTahunan() {\n" +
            "    return this.gajiBulanan * 12;\n" +
            "  }\n" +
            "}\n\n" +
            "const k = new Karyawan('Bimo', 8000000);\n" +
            "console.log(k.gajiTahunan);\n" +
            "console.log(Karyawan.mataUang);",
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
              type: "pilihan-ganda",
              question: "Diberikan: function pengali(f) { return (n) => n * f; } — Berapa nilai pengali(4)(3)?",
              choices: ["12", "7", "undefined", "TypeError"],
              answerIndex: 0,
              explanation:
                "12. pengali(4) mengembalikan fungsi yang mengingat f = 4 (closure), lalu fungsi itu langsung dipanggil dengan 3 sehingga 3 × 4 = 12. Pola pemanggilan berantai seperti ini umum di library fungsional.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kamu membuat 1.000 object dari sebuah class. Berapa salinan method-nya yang tersimpan di memori, dan kenapa?",
              choices: [
                "1.000 salinan — setiap object punya method-nya sendiri",
                "Satu salinan, karena method tinggal di prototype dan semua object berbagi lewat prototype chain",
                "Tidak ada; method dibuat ulang setiap kali dipanggil",
                "Tergantung jumlah parameter method-nya",
              ],
              answerIndex: 1,
              explanation:
                "Method yang ditulis di dalam `class` disimpan sekali di `Kelas.prototype`, dan setiap object hanya menyimpan **tautan** ke sana. Saat kamu memanggil `obj.hitung()`, JavaScript mencari di object itu dulu, lalu naik ke prototype-nya — rantai pencarian itu bernama prototype chain. Mekanisme yang sama menjelaskan kenapa `[].map` bisa dipanggil padahal kamu tidak pernah menuliskannya: ia tinggal di `Array.prototype`. Sebaliknya, fungsi yang kamu tulis di dalam `constructor` memang digandakan per object.",
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
          kind: "materi",
          id: "js-9-m1",
          title: "Browser API: Kemampuan yang Sudah Ada Tanpa Pustaka",
          body:
            "# Pengertian\n\n" +
            "Browser bukan hanya penampil halaman. Ia menyediakan puluhan **API** siap pakai — menyimpan data, membaca alamat, mengamati posisi scroll, mengakses papan klip — dan semuanya bisa dipakai **tanpa memasang pustaka apa pun**.\n\n" +
            "Modul ini penting karena satu alasan praktis: banyak pemula memasang pustaka pihak ketiga untuk pekerjaan yang sudah bisa dikerjakan browser dalam tiga baris. Itu menambah ukuran unduhan dan satu ketergantungan yang harus dirawat.\n\n" +
            "## localStorage: Ingatan yang Bertahan\n\n" +
            "```js\n" +
            "localStorage.setItem('tema', 'gelap');            // simpan\n" +
            "localStorage.getItem('tema');                     // baca -> 'gelap'\n" +
            "localStorage.removeItem('tema');                  // hapus satu\n\n" +
            "// object WAJIB diubah jadi teks lebih dulu\n" +
            "localStorage.setItem('user', JSON.stringify(user));\n" +
            "const user = JSON.parse(localStorage.getItem('user') ?? 'null');\n" +
            "```\n\n" +
            "| | `localStorage` | `sessionStorage` |\n" +
            "|---|---|---|\n" +
            "| Bertahan | sampai dihapus, meski browser ditutup | hanya selama tab itu terbuka |\n" +
            "| Cakupan | per domain | per tab |\n\n" +
            "Empat batas yang wajib kamu tahu: isinya **selalu teks** (angka `5` kembali sebagai `'5'`), kapasitasnya sekitar **5 MB**, ia **tidak aman** untuk data sensitif karena bisa dibaca siapa pun lewat DevTools maupun skrip lain di halaman yang sama, dan operasinya **sinkron** — menyimpan data besar berulang kali bisa membuat halaman tersendat. Untuk data terstruktur yang besar, IndexedDB pilihannya; untuk token sesi, cookie ber-`HttpOnly` jauh lebih tepat.\n\n" +
            "> **Pola yang aman:** bungkus `JSON.parse` dengan `try/catch`. Satu nilai rusak di localStorage bisa menjatuhkan seluruh aplikasi setiap kali dibuka, dan pengguna tidak punya cara memperbaikinya sendiri.\n\n" +
            "## URL dan URLSearchParams\n\n" +
            "```js\n" +
            "// alamat: /produk?kategori=kopi&halaman=2\n" +
            "const p = new URLSearchParams(location.search);\n" +
            "p.get('kategori');         // 'kopi'\n" +
            "p.get('tidakAda');         // null\n" +
            "p.set('halaman', '3');\n" +
            "p.toString();              // 'kategori=kopi&halaman=3'  (otomatis di-encode)\n" +
            "```\n\n" +
            "Menyimpan keadaan tampilan — kata pencarian, filter, urutan, nomor halaman — di alamat URL punya keuntungan yang sering diremehkan: halamannya bisa **dibagikan dan di-bookmark**, dan tombol kembali browser bekerja seperti yang diharapkan pengguna. Jangan pernah menyusun query string dengan penggabungan teks sendiri; spasi dan karakter khusus akan merusaknya, sedangkan `URLSearchParams` menanganinya otomatis.\n\n" +
            "## History API\n\n" +
            "```js\n" +
            "history.pushState({}, '', '?halaman=2');      // ganti alamat TANPA memuat ulang\n" +
            "history.replaceState({}, '', '?halaman=2');   // ganti tanpa menambah riwayat\n" +
            "window.addEventListener('popstate', ...);     // pengguna menekan tombol kembali\n" +
            "```\n\n" +
            "Inilah mekanisme di balik semua *single-page app*: alamat berubah, tombol kembali berfungsi, tapi halaman tidak dimuat ulang. Router React dan Next.js dibangun tepat di atas tiga baris ini.\n\n" +
            "## Timer: setTimeout, setInterval, requestAnimationFrame\n\n" +
            "| Alat | Untuk |\n" +
            "|---|---|\n" +
            "| `setTimeout` | menjalankan sekali setelah jeda |\n" +
            "| `setInterval` | menjalankan berulang tiap jeda |\n" +
            "| `requestAnimationFrame` | animasi — menyesuaikan diri dengan laju gambar layar |\n\n" +
            "Untuk animasi, `requestAnimationFrame` hampir selalu lebih tepat daripada `setInterval`: ia berhenti sendiri saat tab tidak aktif (menghemat baterai) dan tidak pernah menggambar lebih cepat daripada kemampuan layar. Dan setiap timer yang kamu buat **wajib dibersihkan** dengan `clearTimeout`/`clearInterval` saat tidak lagi dibutuhkan — timer yang tertinggal terus berjalan di latar belakang dan itu penyebab umum kebocoran memori.\n\n" +
            "## Debounce dan Throttle\n\n" +
            "```js\n" +
            "// debounce: tunggu sampai pengguna BERHENTI mengetik 400 ms\n" +
            "let timer;\n" +
            "input.addEventListener('input', (e) => {\n" +
            "  clearTimeout(timer);                        // batalkan rencana sebelumnya\n" +
            "  timer = setTimeout(() => cari(e.target.value), 400);\n" +
            "});\n" +
            "```\n\n" +
            "Tanpa debounce, kotak pencarian mengirim satu permintaan **per ketikan** — sepuluh huruf berarti sepuluh permintaan, dan jawaban yang datang bisa saling menyalip sehingga hasil yang tampil bukan milik kata terakhir. Bedanya dengan *throttle*: debounce menunggu sampai kegiatannya berhenti (cocok untuk pencarian), throttle membatasi frekuensi maksimal (cocok untuk peristiwa scroll).\n\n" +
            "## IntersectionObserver: Lazy Load dan Infinite Scroll\n\n" +
            "```js\n" +
            "const pengamat = new IntersectionObserver((entries) => {\n" +
            "  for (const e of entries) {\n" +
            "    if (e.isIntersecting) muatHalamanBerikutnya();\n" +
            "  }\n" +
            "});\n" +
            "pengamat.observe(document.querySelector('#penanda-bawah'));\n" +
            "```\n\n" +
            "Cara lama mengerjakan ini adalah mendengarkan peristiwa `scroll` lalu menghitung posisi sendiri — berjalan puluhan kali per detik dan membuat halaman tersendat. `IntersectionObserver` melakukannya di luar jalur utama dan hanya memberi tahu saat status \"terlihat/tidak terlihat\" benar-benar berubah. Dipakai untuk memuat gambar saat mendekati layar, infinite scroll, dan menghitung bagian mana yang benar-benar dibaca pengunjung.\n\n" +
            "## FormData, Clipboard, dan Geolocation\n\n" +
            "```js\n" +
            "const data = Object.fromEntries(new FormData(form));   // seluruh isi form jadi object\n" +
            "await navigator.clipboard.writeText('disalin');        // butuh HTTPS + interaksi pengguna\n" +
            "navigator.geolocation.getCurrentPosition(ok, gagal);   // memunculkan dialog izin\n" +
            "```\n\n" +
            "`FormData` membaca berdasarkan atribut `name`, jadi input tanpa `name` tidak akan pernah terbaca — dan ia satu-satunya cara mengirim berkas unggahan. Sementara Clipboard dan Geolocation adalah contoh API yang butuh **izin dan konteks aman**: keduanya hanya bekerja di HTTPS (localhost dihitung aman), dan Geolocation selalu memunculkan dialog yang bisa ditolak pengguna. Karena bisa ditolak, kodemu wajib menangani kasus gagalnya — bukan menganggap izin selalu diberikan.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Browser API itu seperti **fasilitas yang sudah terpasang di apartemen sewaan**: air panas, lift, tempat penyimpanan di basement. Banyak orang membeli dispenser sendiri (memasang pustaka) padahal keran air panasnya sudah ada. Mengetahui isi bangunanmu menghemat uang, tempat, dan perawatan.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Menyimpan object langsung ke localStorage.** Hasilnya teks `[object Object]`; pakai `JSON.stringify`.\n" +
            "2. **`JSON.parse` tanpa `try/catch`.** Satu nilai rusak menjatuhkan aplikasi setiap kali dibuka.\n" +
            "3. **Menyimpan token di localStorage.** Bisa dibaca skrip lain; cookie `HttpOnly` lebih tepat.\n" +
            "4. **Lupa membersihkan timer.** Kebocoran memori dan pekerjaan yang terus berjalan tanpa terlihat.\n" +
            "5. **Menyusun query string dengan penggabungan teks.** Pakai `URLSearchParams` agar aman ter-encode.\n" +
            "6. **Menganggap izin selalu diberikan.** Clipboard dan Geolocation bisa ditolak.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** debounce pada kotak pencarian, filter yang tersimpan di URL, dan infinite scroll adalah tiga permintaan fitur yang sangat sering datang. Menyelesaikannya dengan API bawaan — bukan dengan memasang pustaka — adalah salah satu hal yang membuat pekerjaanmu terlihat matang saat direview.",
        },
        {
          kind: "step",
          id: "js-9-1",
          title: "localStorage",
          explanation:
            "`localStorage` menyimpan data di browser secara permanen (sampai dihapus). Batas pentingnya: **hanya bisa menyimpan string**, jadi object harus dilewatkan `JSON.stringify` saat menyimpan dan `JSON.parse` saat membaca. Jangan pernah menyimpan token sensitif di sini — bisa dibaca skrip apa pun di halaman (risiko XSS), dan untuk token sesi cookie ber-`HttpOnly` jauh lebih tepat. Dua batas lain yang perlu kamu tahu: kapasitasnya sekitar 5 MB per domain, dan operasinya berjalan **sinkron** sehingga menyimpan data besar berulang kali bisa membuat halaman tersendat. Bungkus juga `JSON.parse` dengan `try/catch`, karena satu nilai rusak di localStorage akan menjatuhkan aplikasimu setiap kali dibuka — dan pengguna tidak punya cara memperbaikinya sendiri.",
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
            "Mengurai query string secara manual dengan `split` rapuh dan mudah salah. `URLSearchParams` menanganinya dengan benar, termasuk encoding karakter khusus. Dipakai untuk filter dan pencarian yang bisa di-bookmark serta dibagikan. Objek `URLSearchParams` juga bisa diubah lalu ditempel kembali ke alamat halaman, sehingga hasil filter tetap benar ketika pengguna menekan tombol kembali.",
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
            "Kalau kamu memanggil API di setiap ketikan, mengetik 'sepatu' berarti 6 request. **Debounce** menunda eksekusi sampai pengguna berhenti mengetik sejenak: setiap ketikan membatalkan timer sebelumnya. Ini teknik optimasi paling sering diminta pada fitur pencarian. Jangan tertukar dengan throttle: debounce menunggu sampai aktivitas berhenti, sedangkan throttle membatasi frekuensi eksekusi pada rentang waktu tetap.",
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
            "`FormData` mengumpulkan seluruh nilai form sekaligus berdasarkan atribut `name` — jauh lebih ringkas daripada membaca setiap input satu per satu. Ia juga wajib dipakai untuk upload file. `Object.fromEntries` mengubahnya menjadi object biasa yang siap dikirim sebagai JSON. Konsekuensi dari cara kerjanya: input **tanpa atribut `name`** tidak akan pernah terbaca, dan itu penyebab \"kok fieldku hilang\" yang paling sering. Perlu diketahui juga bahwa `fromEntries` hanya mengambil nilai terakhir bila ada beberapa field bernama sama — untuk checkbox berkelompok pakai `fd.getAll('nama')` supaya semuanya terambil.",
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
              type: "pilihan-ganda",
              question: "Form-mu punya 12 input dan kamu tidak ingin membaca satu per satu dengan querySelector. API apa yang mengumpulkan semua nilainya sekaligus berdasarkan atribut name?",
              choices: ["FormData", "URLSearchParams", "JSON.stringify()", "Object.keys()"],
              answerIndex: 0,
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
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kamu membuat infinite scroll. Halaman jadi tersendat karena kode menghitung posisi di setiap peristiwa scroll. Apa penggantinya?",
              choices: [
                "setInterval yang memeriksa posisi setiap 100 ms",
                "IntersectionObserver, yang memberi tahu hanya saat elemen benar-benar masuk atau keluar layar",
                "requestAnimationFrame di dalam pendengar scroll",
                "Menambah debounce pada pendengar scroll",
              ],
              answerIndex: 1,
              explanation:
                "Peristiwa `scroll` bisa terpicu puluhan kali per detik, dan menghitung posisi di dalamnya memaksa browser mengukur ulang tata letak setiap kali. `IntersectionObserver` mengerjakannya di luar jalur utama dan hanya memanggil kodemu saat status \"terlihat/tidak terlihat\" benar-benar berubah — dipakai untuk infinite scroll, lazy load gambar, dan mengukur bagian mana yang benar-benar dibaca. Debounce menggoda karena juga mengurangi frekuensi, tapi ia hanya menunda gejalanya; perhitungan posisinya tetap ada.",
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
          kind: "materi",
          id: "js-10-m1",
          title: "Testing: Menulis Kode yang Berani Kamu Ubah",
          body:
            "# Pengertian\n\n" +
            "**Test** adalah kode yang memeriksa kode lain. Bukan untuk membuktikan programmu sempurna — itu tidak mungkin — melainkan untuk menjawab satu pertanyaan yang muncul setiap hari di pekerjaan nyata: *\"kalau aku mengubah bagian ini, apakah ada yang rusak di tempat lain?\"*\n\n" +
            "Tanpa test, jawabannya hanya bisa didapat dengan mengklik-klik seluruh aplikasi secara manual. Setelah aplikasinya cukup besar, tidak ada yang benar-benar melakukannya — dan di situlah orang mulai takut menyentuh kode lama.\n\n" +
            "## Kenapa Test Ada\n\n" +
            "```text\n" +
            "REGRESI     bug yang muncul kembali di bagian yang tadinya sudah benar.\n" +
            "            Test menangkapnya dalam hitungan detik, bukan setelah\n" +
            "            dilaporkan pengguna.\n" +
            "\n" +
            "REFACTOR    memperbaiki bentuk kode tanpa mengubah perilakunya.\n" +
            "            Mustahil dilakukan dengan tenang tanpa test — kamu tidak\n" +
            "            punya cara membuktikan perilakunya masih sama.\n" +
            "```\n\n" +
            "Manfaat ketiga yang jarang disebut: test adalah **dokumentasi yang tidak bisa basi**. Membaca nama-nama test sebuah fungsi memberimu daftar perilaku yang dijaminnya — dan berbeda dari komentar, ia gagal kalau sudah tidak sesuai kenyataan.\n\n" +
            "## Anatomi Sebuah Test\n\n" +
            "```js\n" +
            "describe('hitungTotal', () => {              // kelompok test untuk satu unit\n" +
            "  it('menjumlahkan harga semua item', () => { // satu perilaku, satu test\n" +
            "    const hasil = hitungTotal([1000, 2000]);  // jalankan\n" +
            "    expect(hasil).toBe(3000);                 // periksa\n" +
            "  });\n" +
            "});\n" +
            "```\n\n" +
            "Namanya berbeda antar alat (`it` atau `test`; Vitest, Jest, dan Node test runner semuanya memakai bentuk ini), tapi susunannya sama di mana pun. Tulis nama test sebagai **kalimat perilaku** — \"mengembalikan 0 untuk daftar kosong\" — bukan \"test 1\". Saat suatu hari test itu gagal di pipeline, namanya itulah satu-satunya petunjuk yang langsung terbaca.\n\n" +
            "## Arrange – Act – Assert\n\n" +
            "```js\n" +
            "it('memberi diskon 10% untuk member', () => {\n" +
            "  const pesanan = { total: 100000, member: true };   // ARRANGE  siapkan\n" +
            "  const hasil = hitungDiskon(pesanan);               // ACT      kerjakan\n" +
            "  expect(hasil).toBe(90000);                         // ASSERT   periksa\n" +
            "});\n" +
            "```\n\n" +
            "Tiga bagian, dan urutannya selalu sama. Kalau satu test punya beberapa blok Act dan Assert yang bergantian, itu tanda ia sedang menguji lebih dari satu perilaku — pecah menjadi beberapa test. Test yang gagal harus langsung memberi tahu **apa** yang rusak; test yang menguji lima hal sekaligus hanya memberi tahu bahwa \"ada sesuatu\".\n\n" +
            "## Matcher yang Paling Sering Dipakai\n\n" +
            "| Matcher | Untuk |\n" +
            "|---|---|\n" +
            "| `toBe(x)` | nilai primitif — angka, teks, boolean |\n" +
            "| `toEqual(x)` | object dan array — membandingkan **isinya** |\n" +
            "| `toContain(x)` | satu elemen ada di dalam array atau teks |\n" +
            "| `toThrow()` | fungsi memang melempar error |\n" +
            "| `toBeNull()` / `toBeUndefined()` | nilai kosong yang spesifik |\n\n" +
            "> **Beda `toBe` dan `toEqual` adalah kesalahan pemula nomor satu di modul ini,** dan penyebabnya sudah kamu pelajari: object dibandingkan berdasarkan **alamat**, bukan isi. `expect({a: 1}).toBe({a: 1})` **gagal** karena keduanya dua object berbeda yang kebetulan isinya sama. Untuk object dan array, pakai `toEqual`.\n\n" +
            "Untuk `toThrow`, ingat satu hal: yang dikirim harus **fungsi yang belum dijalankan** — `expect(() => bagi(1, 0)).toThrow()`. Menulis `expect(bagi(1, 0))` membuat error-nya terjadi sebelum `expect` bekerja, dan test-nya gagal karena alasan yang salah.\n\n" +
            "## Menguji Edge Case\n\n" +
            "Test untuk masukan normal jarang menemukan bug; bug hidup di tepi. Daftar periksa yang bisa kamu pakai untuk fungsi apa pun:\n\n" +
            "```text\n" +
            "- daftar kosong  []           -> apakah hasilnya 0, atau malah error?\n" +
            "- satu elemen                 -> apakah rata-ratanya benar?\n" +
            "- angka nol dan negatif       -> apakah diskon negatif ditolak?\n" +
            "- null / undefined            -> apakah dilempar error yang jelas?\n" +
            "- teks bukan angka  '12abc'   -> apakah dikonversi diam-diam jadi NaN?\n" +
            "- nilai sangat besar          -> apakah masih masuk akal?\n" +
            "```\n\n" +
            "Kebiasaan yang membedakan: saat sebuah bug ditemukan di produksi, **tulis dulu test yang menangkap bug itu**, baru perbaiki kodenya. Dengan begitu bug yang sama tidak akan pernah kembali tanpa diketahui.\n\n" +
            "## Mock: Mengganti Bagian yang Tidak Ingin Kamu Jalankan\n\n" +
            "```js\n" +
            "const kirimEmail = vi.fn();                  // fungsi palsu yang mencatat pemanggilan\n" +
            "\n" +
            "daftarkanUser({ email: 'a@b.c' }, kirimEmail);\n" +
            "\n" +
            "expect(kirimEmail).toHaveBeenCalledTimes(1);\n" +
            "expect(kirimEmail).toHaveBeenCalledWith('a@b.c');\n" +
            "```\n\n" +
            "Mock dipakai untuk hal yang **lambat, berbayar, atau di luar kendalimu**: mengirim email sungguhan, memanggil API pihak ketiga, menulis ke database. Tapi ada garis yang perlu dijaga: kalau sebuah test mengganti hampir semua bagiannya dengan mock, yang kamu uji tinggal mock-nya sendiri — bukan kodemu. Aturan praktisnya: **fungsi murni tidak butuh mock sama sekali**, dan itu satu alasan lagi untuk menulis logika dalam bentuk fungsi murni.\n\n" +
            "## TDD Ringan\n\n" +
            "```text\n" +
            "1. tulis test yang GAGAL      (perilaku yang kamu inginkan, belum ada kodenya)\n" +
            "2. tulis kode paling sederhana sampai test itu LULUS\n" +
            "3. rapikan kodenya, test tetap lulus\n" +
            "```\n\n" +
            "Kamu tidak harus menerapkannya untuk semua hal. Tapi untuk **fungsi murni** — menghitung harga, memvalidasi format, mengubah bentuk data — urutan ini justru terasa lebih cepat, karena kamu memikirkan perilaku yang diinginkan lebih dulu sebelum tenggelam dalam detail implementasi.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Test itu seperti **sabuk pengaman**, bukan seperti asuransi. Asuransi membayar setelah kecelakaan; sabuk pengaman mengubah cara kamu mengemudi — kamu berani menyalip karena tahu ada pengaman. Efek terbesar test bukan pada bug yang tertangkap, tapi pada **keberanian mengubah kode**. Tim tanpa test cenderung menumpuk kode baru di samping kode lama, karena tidak ada yang berani menyentuh yang sudah jalan.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **`toBe` untuk object atau array.** Pakai `toEqual`.\n" +
            "2. **`expect(fn())` untuk `toThrow`.** Kirim fungsinya, jangan panggil: `expect(() => fn())`.\n" +
            "3. **Nama test tidak deskriptif.** \"test 1\" tidak memberi tahu apa pun saat gagal.\n" +
            "4. **Satu test menguji lima perilaku.** Saat gagal, kamu tidak tahu yang mana.\n" +
            "5. **Mock berlebihan.** Yang teruji tinggal mock-nya.\n" +
            "6. **Hanya menguji jalur yang berhasil.** Bug hidup di edge case, bukan di jalur normal.\n\n" +
            "## Catatan tentang Panel Preview\n\n" +
            "> Latihan di modul ini menuliskan **bentuk** test yang benar. Panel preview BiLearn tidak menjalankan test runner, jadi tidak akan ada laporan lulus/gagal — yang menilai jawabanmu adalah tombol Jalankan Tes. Untuk mempraktikkannya sungguhan di komputermu, pasang Vitest (`npm i -D vitest`) lalu jalankan `npx vitest`.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** di banyak perusahaan, *pull request* tanpa test tidak akan disetujui, dan pipeline CI menjalankan seluruh test sebelum kode boleh naik ke produksi. Kamu tidak perlu menjadi ahli — cukup bisa menulis test untuk fungsi murni, memahami perbedaan `toBe` dan `toEqual`, dan tahu kapan mock berlebihan. Itu sudah di atas rata-rata pelamar tingkat awal.",
        },
        {
          kind: "step",
          id: "js-10-1",
          title: "Anatomi sebuah test",
          explanation:
            "Struktur test standar: `describe` mengelompokkan, `it`/`test` mendeskripsikan satu perilaku, `expect` memeriksa hasilnya. Nama test yang baik menjelaskan **perilaku**, bukan implementasi: 'mengembalikan 0 untuk array kosong' jauh lebih berguna daripada 'test fungsi total'. Satu test sebaiknya memeriksa satu perilaku saja, supaya ketika gagal kamu langsung tahu bagian mana yang rusak tanpa membaca isinya.",
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
            "`toBe` membandingkan identitas (seperti `===`) — cocok untuk angka, string, boolean. Untuk object dan array **wajib** `toEqual`, karena dua object dengan isi sama tetap merupakan object berbeda. Salah memilih di sini adalah kebingungan nomor satu bagi yang baru menulis test. Untuk angka pecahan, hindari `toBe` karena hasil perhitungan seperti 0,1 + 0,2 tidak persis — pakai `toBeCloseTo` yang memang disediakan untuk itu.",
          example: {
            code: "// nilai sederhana → toBe\nexpect(5 * 2).toBe(10);\nexpect('ab').toBe('ab');\nexpect(true).toBe(true);\n\n// object & array → toEqual\nexpect({ a: 1 }).toEqual({ a: 1 });   // ✅ lolos\n// expect({ a: 1 }).toBe({ a: 1 });   // ❌ gagal: dua object berbeda",
            output:
              "✓ src/matcher.test.js (4 tests) 6ms\n\n" +
              "Test Files  1 passed (1)\n" +
              "     Tests  4 passed (4)\n\n" +
              "// jika baris toBe pada object diaktifkan:\n" +
              "AssertionError: expected { a: 1 } to be { a: 1 } // Object.is equality",
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
            "Pola tiga langkah yang membuat test mudah dibaca: **Arrange** (siapkan data), **Act** (jalankan yang diuji), **Assert** (periksa hasilnya). Test yang mencampur ketiganya jadi sulit dipahami saat gagal — dan test yang gagal tanpa penjelasan jelas hampir tidak berguna. Menjaga urutan ini juga memudahkan orang lain menambah kasus baru: cukup menyalin blok yang sama dan mengganti bagian Arrange-nya.",
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
            "Test untuk kasus normal (*happy path*) mudah dan jarang menemukan bug. Bug bersembunyi di **edge case**: array kosong, nilai nol, angka negatif, `null`, string kosong. Kalau kamu hanya punya waktu menulis dua test, tulis satu happy path dan satu edge case. Daftar edge case terbaik biasanya datang dari bug yang pernah terjadi di produksi, jadi biasakan menambah test setiap kali menemukan satu.",
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
            "Untuk memeriksa bahwa fungsi **melempar error**, `expect` harus menerima **fungsi**, bukan hasil pemanggilannya: `expect(() => bagi(1, 0)).toThrow()`. Kalau kamu menulis `expect(bagi(1, 0))`, errornya terjadi sebelum expect berjalan dan test gagal dengan pesan yang menyesatkan. Kamu juga bisa memeriksa isi pesannya dengan `toThrow('Pembagi tidak boleh nol')`, berguna saat sebuah fungsi bisa melempar lebih dari satu jenis kesalahan.",
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
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Fungsi `daftarkanUser` mengirim email sungguhan. Kamu ingin mengujinya tanpa benar-benar mengirim email. Apa yang kamu pakai, dan apa batasnya?",
              choices: [
                "Mock (vi.fn) untuk fungsi pengirim email — tapi kalau hampir semua bagian di-mock, yang teruji tinggal mock-nya sendiri",
                "Jalankan saja; satu email percobaan tidak masalah",
                "Hapus bagian pengiriman email dari fungsinya",
                "Bungkus seluruh test dengan try/catch",
              ],
              answerIndex: 0,
              explanation:
                "Mock adalah fungsi palsu yang mencatat pemanggilannya, sehingga kamu bisa memeriksa `toHaveBeenCalledWith(...)` tanpa menyentuh dunia luar. Ia tepat untuk hal yang lambat, berbayar, atau di luar kendalimu — email, API pihak ketiga, database. Batasnya itu yang sering dilupakan: test yang seluruh bagiannya di-mock tidak lagi menguji kodemu. Karena itu logika inti sebaiknya ditulis sebagai fungsi murni, yang justru **tidak butuh mock sama sekali**.",
            },
          ],
        },
      ],
    },
  ],
};
