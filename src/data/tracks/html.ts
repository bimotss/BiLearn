import type { Track } from "@/lib/types";

export const htmlTrack: Track = {
  slug: "html",
  title: "HTML",
  description:
    "Fondasi semua halaman web. Dari elemen pertama sampai semantic HTML yang dipakai di dunia kerja.",
  hours: 40,
  recommendedPrereqs: [],
  color: "bg-orange-500",
  icon: "🧱",
  order: 1,
  modules: [
    {
      slug: "dasar-dokumen",
      title: "Dasar Dokumen HTML",
      description:
        "Kenalan dengan elemen, atribut, dan struktur dasar halaman web.",
      topics: [
        "Apa itu HTML & cara browser membacanya",
        "Elemen, tag pembuka/penutup, dan nesting",
        "Heading h1–h6 dan hierarki dokumen",
        "Paragraf, line break, dan horizontal rule",
        "Atribut: id, class, dan atribut global",
        "Link (a, href, target) dan path relatif vs absolut",
        "Gambar (img, src, alt) dan format gambar web",
        "List: ul, ol, li, dan list bersarang",
        "Komentar & struktur dokumen lengkap (doctype, html, head, body)",
      ],
      items: [
        {
          kind: "step",
          id: "html-1-1",
          title: "Elemen pertamamu: heading",
          explanation:
            "HTML tersusun dari **elemen**. Sebagian besar elemen ditulis berpasangan: tag pembuka `<h1>`, isi teks, lalu tag penutup `</h1>` yang ditandai garis miring. Elemen `<h1>` dipakai untuk judul paling penting di halaman — bukan sekadar membuat teks besar, tapi menyatakan 'inilah topik halaman ini' kepada mesin pencari dan screen reader. Kesalahan paling sering pemula adalah lupa menutup tag: browser tidak menampilkan pesan error, ia hanya menebak sendiri dan tampilanmu jadi berantakan tanpa petunjuk sebabnya.",
          example: {
            code: "<h2>Selamat Datang</h2>",
            output:
              "Muncul tulisan 'Selamat Datang' berukuran besar dan tebal di halaman.",
            note: "Perhatikan pola tag pembuka <h2>, isi teks, lalu tag penutup </h2> yang punya garis miring.",
          },
          instruction:
            'Buat elemen `<h1>` berisi teks `Halo Dunia` di editor.',
          starterCode: "<!-- tulis kodemu di bawah ini -->\n",
          language: "html",
          tests: [
            {
              pattern: "<h1>\\s*Halo Dunia\\s*</h1>",
              message:
                "Kamu belum membuat elemen <h1> berisi teks 'Halo Dunia'. Pastikan ada tag pembuka <h1> dan tag penutup </h1>.",
            },
          ],
          solution: "<h1>Halo Dunia</h1>",
        },
        {
          kind: "step",
          id: "html-1-2",
          title: "Paragraf",
          explanation:
            "HTML membutuhkan tag khusus agar browser tahu cara menampilkan teksmu dengan benar. Elemen `<p>` (singkatan dari paragraph) digunakan untuk membungkus blok teks biasa. Bayangkan elemen ini seperti sebuah paragraf di buku cetak; browser akan otomatis memberikan jarak (spasi) dengan teks di atas dan di bawahnya. Tanpa elemen ini, browser akan menggabungkan semua teks menjadi satu baris panjang yang sangat sulit dibaca. Selalu gunakan tag ini saat kamu menyajikan deskripsi, artikel, atau instruksi panjang.",
          example: {
            code: "<h2>Tentang Kopi</h2>\n<p>Kopi adalah minuman dari biji yang disangrai.</p>",
            output:
              "Judul 'Tentang Kopi' di atas, lalu paragraf teks biasa di bawahnya dengan jarak otomatis.",
            note: "Browser otomatis memberi jarak antar paragraf — kamu tidak perlu menambah baris kosong.",
          },
          instruction:
            "Di bawah `<h1>` yang sudah ada, tambahkan elemen `<p>` berisi kalimat apa pun (minimal 5 karakter).",
          starterCode: "<h1>Halo Dunia</h1>\n",
          language: "html",
          tests: [
            {
              pattern: "<p>[^<]{5,}</p>",
              message:
                "Tambahkan elemen <p> dengan isi teks minimal 5 karakter di dalamnya.",
            },
            {
              pattern: "<h1>\\s*Halo Dunia\\s*</h1>",
              message: "Jangan hapus elemen <h1> yang sudah ada ya.",
            },
          ],
          solution:
            "<h1>Halo Dunia</h1>\n<p>Ini paragraf pertamaku di BiLearn.</p>",
        },
        {
          kind: "step",
          id: "html-1-3",
          title: "Tingkatan heading",
          explanation:
            "Heading punya enam tingkat, dari `<h1>` (paling penting) sampai `<h6>`. Tingkatnya menyatakan struktur, bukan ukuran huruf: anggap saja seperti daftar isi buku, di mana h1 judul buku, h2 nama bab, dan h3 sub-bab. Satu halaman sebaiknya hanya punya satu `<h1>` supaya topik utamanya tidak ambigu bagi mesin pencari. Jebakannya: memilih h4 hanya karena hurufnya terlihat pas — kalau ingin teks lebih kecil, kecilkan lewat CSS dan biarkan tingkat headingnya mengikuti struktur.",
          example: {
            code: "<h1>Buku Resep</h1>\n<h2>Bab 1: Sarapan</h2>\n<h3>Telur Dadar</h3>",
            output:
              "Tiga tingkat judul dengan ukuran menurun: h1 paling besar, h3 paling kecil.",
            note: "Ini seperti daftar isi: h1 judul buku, h2 nama bab, h3 sub-bagian. Ukuran mengikuti tingkat, bukan sebaliknya.",
          },
          instruction:
            "Tambahkan elemen `<h2>` berisi teks `Tentang Saya` di bawah paragraf.",
          starterCode:
            "<h1>Halo Dunia</h1>\n<p>Ini paragraf pertamaku di BiLearn.</p>\n",
          language: "html",
          tests: [
            {
              pattern: "<h2>\\s*Tentang Saya\\s*</h2>",
              message:
                "Kamu belum menambahkan <h2> berisi teks 'Tentang Saya'.",
            },
          ],
          solution:
            "<h1>Halo Dunia</h1>\n<p>Ini paragraf pertamaku di BiLearn.</p>\n<h2>Tentang Saya</h2>",
        },
        {
          kind: "step",
          id: "html-1-4",
          title: "Link: menghubungkan halaman",
          explanation:
            "Elemen `<a>` (anchor) membuat link. Atribut `href` menentukan tujuannya. **Atribut** adalah informasi tambahan yang ditulis di tag pembuka: `<a href=\"https://example.com\">teks link</a>`.",
          example: {
            code: '<a href="https://google.com">Buka Google</a>',
            output:
              "Muncul tulisan 'Buka Google' berwarna biru dan bergaris bawah; diklik akan membuka google.com.",
            note: 'Atribut ditulis di dalam tag pembuka dengan pola nama="nilai". Teks yang terlihat user ada di antara tag.',
          },
          instruction:
            'Buat link berisi teks `Kunjungi BiLearn` yang mengarah ke `https://bilearn.id`.',
          starterCode: "<h1>Halo Dunia</h1>\n",
          language: "html",
          tests: [
            {
              pattern:
                '<a\\s+href="https://bilearn\\.id"\\s*>\\s*Kunjungi BiLearn\\s*</a>',
              message:
                'Buat elemen <a> dengan atribut href="https://bilearn.id" dan teks "Kunjungi BiLearn".',
            },
          ],
          solution:
            '<h1>Halo Dunia</h1>\n<a href="https://bilearn.id">Kunjungi BiLearn</a>',
        },
        {
          kind: "step",
          id: "html-1-5",
          title: "Gambar",
          explanation:
            "Elemen `<img>` menampilkan gambar dan tidak punya tag penutup — cukup satu tag saja. Atribut `src` menunjuk lokasi berkas gambarnya, sedangkan `alt` berisi deskripsi teks yang dibacakan screen reader dan ditampilkan saat gambar gagal dimuat. Menulis `alt` bukan formalitas: di banyak perusahaan ia diperiksa saat code review, dan di beberapa negara aksesibilitas adalah kewajiban hukum. Untuk gambar yang murni hiasan, isi `alt=\"\"` (kosong) supaya screen reader melewatinya, bukan menghapus atributnya.",
          example: {
            code: '<img src="https://picsum.photos/150" alt="Gambar contoh">',
            output:
              "Sebuah gambar berukuran 150×150 piksel muncul di halaman.",
            note: "Tidak ada </img> — elemen ini self-closing. Kalau gambar gagal dimuat, teks pada alt yang akan tampil.",
          },
          instruction:
            'Buat elemen `<img>` dengan `src` berisi `https://picsum.photos/200` dan `alt` berisi `Foto acak`.',
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: '<img[^>]*src="https://picsum\\.photos/200"[^>]*>',
              message: 'Elemen <img> harus punya src="https://picsum.photos/200".',
            },
            {
              pattern: '<img[^>]*alt="Foto acak"[^>]*>',
              message:
                'Tambahkan atribut alt="Foto acak" — gambar tanpa alt menyulitkan pengguna screen reader.',
            },
          ],
          solution: '<img src="https://picsum.photos/200" alt="Foto acak">',
        },
        {
          kind: "step",
          id: "html-1-6",
          title: "Daftar: ul, ol, dan li",
          explanation:
            "Hampir setiap halaman berisi daftar: menu navigasi, fitur produk, langkah tutorial. HTML punya dua jenis. `<ul>` (unordered list) untuk daftar yang urutannya tidak penting — ditampilkan dengan bullet. `<ol>` (ordered list) untuk daftar yang urutannya bermakna, seperti langkah resep — ditampilkan bernomor otomatis, jadi kamu tidak perlu mengetik angkanya sendiri. Keduanya hanya boleh berisi `<li>` sebagai anak langsung. Memakai daftar yang benar juga penting bagi screen reader: ia mengumumkan 'daftar dengan 5 item' sehingga penggunanya tahu seberapa panjang isinya.",
          example: {
            code: "<ol>\n  <li>Panaskan minyak</li>\n  <li>Masukkan bumbu</li>\n  <li>Aduk hingga matang</li>\n</ol>",
            output: "Tiga langkah bernomor 1, 2, 3 — nomornya dibuat browser, bukan diketik manual.",
            note: "Perhatikan: nomor pada <ol> muncul sendiri. Jangan pernah mengetik '1.' di dalam <li> — nanti nomornya dobel.",
          },
          instruction:
            "Buat daftar fitur produk yang urutannya tidak penting, berisi tiga item: `Gratis`, `Terbuka`, dan `Bahasa Indonesia`. Pilih jenis daftar yang sesuai.",
          starterCode: "<h2>Fitur</h2>\n",
          language: "html",
          tests: [
            {
              pattern: "<ul>[\\s\\S]*</ul>",
              message:
                "Karena urutannya tidak penting, pakai <ul> ... </ul>.",
            },
            {
              pattern: "<li>\\s*Gratis\\s*</li>",
              message:
                "Tambahkan item <li>Gratis</li>.",
            },
            {
              pattern: "<li>\\s*Terbuka\\s*</li>",
              message:
                "Tambahkan item <li>Terbuka</li>.",
            },
            {
              pattern: "<li>\\s*Bahasa Indonesia\\s*</li>",
              message:
                "Tambahkan item <li>Bahasa Indonesia</li>.",
            },
          ],
          solution: "<h2>Fitur</h2>\n<ul>\n  <li>Gratis</li>\n  <li>Terbuka</li>\n  <li>Bahasa Indonesia</li>\n</ul>",
        },
        {
          kind: "step",
          id: "html-1-7",
          title: "Daftar Bersarang",
          explanation:
            "Menu dan daftar isi sering punya sub-item. Cara menulisnya sering salah: `<ul>` anak **harus berada di dalam `<li>` induknya**, bukan sebagai saudara di antara dua `<li>`. Kalau ditaruh langsung di bawah `<ul>` tanpa dibungkus `<li>`, HTML-nya tidak valid dan hubungan induk-anak hilang bagi screen reader — pengguna tidak tahu sub-item itu milik item yang mana. Perhatikan juga indentasi: setiap tingkat menjorok satu langkah supaya struktur bersarangnya terbaca saat kamu membaca ulang kodemu nanti.",
          example: {
            code: "<ul>\n  <li>Minuman\n    <ul>\n      <li>Kopi</li>\n      <li>Teh</li>\n    </ul>\n  </li>\n  <li>Makanan</li>\n</ul>",
            output: "Dua item utama, dan di bawah 'Minuman' muncul dua sub-item yang menjorok ke dalam.",
          },
          instruction:
            "Buat daftar dua tingkat: item `Frontend` yang di dalamnya berisi sub-daftar dengan dua item, `HTML` dan `CSS`. Pastikan sub-daftarnya berada di dalam item induknya.",
          starterCode: "<ul>\n  <li>Frontend</li>\n</ul>\n",
          language: "html",
          tests: [
            {
              pattern: "<li>\\s*Frontend[\\s\\S]*<ul>[\\s\\S]*</ul>[\\s\\S]*</li>",
              message:
                "Sub-daftar <ul> harus berada DI DALAM <li>Frontend</li>, sebelum tag penutupnya.",
            },
            {
              pattern: "<li>\\s*HTML\\s*</li>",
              message:
                "Tambahkan sub-item <li>HTML</li>.",
            },
            {
              pattern: "<li>\\s*CSS\\s*</li>",
              message:
                "Tambahkan sub-item <li>CSS</li>.",
            },
          ],
          solution: "<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n</ul>",
        },
        {
          kind: "step",
          id: "html-1-8",
          title: "Atribut id dan class",
          explanation:
            "Dua atribut ini muncul di hampir setiap baris HTML profesional. `id` adalah nama unik — hanya boleh dipakai satu elemen di seluruh halaman, dan dipakai untuk menandai target link (`#kontak`) atau menghubungkan label ke input. `class` adalah penanda kelompok — boleh dipakai berulang di banyak elemen, dan inilah yang dipakai CSS untuk memberi gaya yang sama ke banyak elemen sekaligus. Satu elemen boleh punya beberapa class, dipisah spasi. Jebakan pemula: memakai `id` untuk styling berulang, lalu bingung ketika elemen keduanya tidak ikut berubah.",
          example: {
            code: "<section id=\"kontak\" class=\"kartu penting\">\n  <h2>Hubungi Kami</h2>\n</section>",
            output: "Satu section yang bisa dituju lewat link #kontak, dan sekaligus membawa dua class untuk diberi gaya CSS.",
            note: "id unik per halaman, class boleh berulang. Beberapa class ditulis dipisah spasi di dalam satu atribut.",
          },
          instruction:
            "Buat sebuah `<section>` yang punya `id` bernilai `tentang` dan `class` bernilai `kartu`, berisi `<h2>` bertuliskan `Tentang Saya`.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: "<section[^>]*id=\"tentang\"",
              message:
                "Beri atribut id=\"tentang\" pada section.",
            },
            {
              pattern: "<section[^>]*class=\"[^\"]*kartu",
              message:
                "Beri atribut class=\"kartu\" pada section.",
            },
            {
              pattern: "<h2>\\s*Tentang Saya\\s*</h2>",
              message:
                "Isi section dengan <h2>Tentang Saya</h2>.",
            },
          ],
          solution: "<section id=\"tentang\" class=\"kartu\">\n  <h2>Tentang Saya</h2>\n</section>",
        },
        {
          kind: "step",
          id: "html-1-9",
          title: "Path Relatif vs Absolut",
          explanation:
            "Nilai `href` dan `src` bisa ditulis dalam tiga bentuk, dan salah pilih adalah penyebab paling umum gambar tidak muncul. Path **absolut** memuat alamat lengkap (`https://situs.com/logo.png`) dan dipakai untuk sumber di luar situsmu. Path **root-relative** diawali garis miring (`/gambar/logo.png`), artinya dihitung dari akar situs — aman meski halamanmu berpindah folder. Path **relatif** (`gambar/logo.png` atau `../logo.png`) dihitung dari lokasi file HTML saat ini, sehingga bisa rusak begitu file dipindahkan. Tanda `../` berarti naik satu folder.",
          example: {
            code: "<a href=\"https://bps.go.id\">Situs luar (absolut)</a>\n<a href=\"/tentang\">Halaman lain di situs ini (root-relative)</a>\n<img src=\"../aset/logo.png\" alt=\"Logo\">",
            output: "Tiga cara menunjuk berkas: alamat lengkap, dari akar situs, dan naik satu folder dari lokasi file ini.",
            note: "../ berarti naik satu folder. Kalau gambarmu tidak muncul, path inilah yang pertama harus kamu periksa.",
          },
          instruction:
            "Halamanmu berada di folder `blog/` dan gambarnya di folder `aset/` yang sejajar dengan `blog/`. Tulis elemen `<img>` yang menunjuk `aset/foto.jpg` memakai path relatif yang naik satu folder, dengan alt `Foto artikel`.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: "<img[^>]*src=\"\\.\\./aset/foto\\.jpg\"",
              message:
                "Pakai path relatif yang naik satu folder: ../aset/foto.jpg",
            },
            {
              pattern: "<img[^>]*alt=\"Foto artikel\"",
              message:
                "Sertakan alt=\"Foto artikel\".",
            },
          ],
          solution: "<img src=\"../aset/foto.jpg\" alt=\"Foto artikel\">",
        },
        {
          kind: "step",
          id: "html-1-10",
          title: "br, hr, dan Komentar",
          explanation:
            "Tiga hal kecil yang sering dipakai keliru. `<br>` memaksa pindah baris di dalam satu blok teks — tepat untuk alamat atau lirik, tapi jangan dipakai untuk memberi jarak antar paragraf (itu tugas CSS). `<hr>` menandai pergantian topik dan tampil sebagai garis horizontal. Keduanya tidak punya tag penutup. Komentar ditulis `<!-- seperti ini -->`: tidak tampil di layar, tapi tetap terbaca siapa pun yang membuka source — jadi jangan pernah menyimpan catatan rahasia atau kredensial di sana.",
          example: {
            code: "<p>Senin - Jumat<br>\n09.00 - 17.00 WIB</p>",
            output: "Jam buka tampil dua baris di dalam satu paragraf, tanpa jarak antar-paragraf tambahan.",
          },
          instruction:
            "Tulis satu paragraf berisi dua baris alamat yang dipisah `<br>`, lalu tambahkan garis pemisah dan sebuah komentar HTML berisi catatan apa pun.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: "<p>[\\s\\S]*<br\\s*/?>[\\s\\S]*</p>",
              message:
                "Pakai <br> di dalam satu <p> untuk memisahkan dua baris alamat.",
            },
            {
              pattern: "<hr\\s*/?>",
              message:
                "Tambahkan garis pemisah <hr>.",
            },
            {
              pattern: "<!--[\\s\\S]{3,}-->",
              message:
                "Tambahkan komentar HTML dengan format <!-- catatan -->.",
            },
          ],
          solution: "<p>Jl. Anggrek No. 7<br>\nSurabaya 60111</p>\n<hr>\n<!-- di bawah ini nanti diisi daftar produk -->",
        },
        {
          kind: "quiz",
          id: "html-1-kuis",
          title: "Kuis: Dasar Dokumen",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Berapa banyak elemen <h1> yang sebaiknya ada di satu halaman?",
              choices: ["Sebanyak mungkin", "Satu", "Maksimal tiga", "Tidak boleh ada"],
              answerIndex: 1,
              explanation:
                "Satu halaman sebaiknya punya tepat satu <h1> sebagai judul utama. Ini membantu SEO dan pengguna screen reader memahami struktur halaman. Heading lain pakai <h2>–<h6>.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Atribut apa yang dipakai elemen <a> untuk menentukan tujuan link?",
              choices: ["src", "href", "link", "target"],
              answerIndex: 1,
              explanation:
                'href (hypertext reference) menentukan URL tujuan link, contoh: <a href="https://google.com">. Tanpa href, link tidak mengarah ke mana-mana.',
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Kenapa atribut alt pada <img> penting?",
              code: '<img src="produk.jpg" alt="Sepatu lari warna merah">',
              choices: [
                "Membuat gambar tampil lebih cepat",
                "Dibaca screen reader & tampil saat gambar gagal dimuat",
                "Mengubah ukuran gambar",
                "Hanya formalitas, tidak ada efeknya",
              ],
              answerIndex: 1,
              explanation:
                "alt dideskripsikan ke pengguna tunanetra lewat screen reader, ditampilkan jika gambar gagal dimuat, dan dibaca mesin pencari. Di lowongan kerja, aksesibilitas (a11y) makin sering jadi requirement.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Mengapa elemen <p> lebih baik daripada teks biasa untuk paragraf?",
              choices: [
                "Karena <p> otomatis memberi warna",
                "Karena browser memberikan jarak antar paragraf yang jelas",
                "Karena <p> bisa diklik",
                "Karena <p> adalah satu-satunya cara menulis teks",
              ],
              answerIndex: 1,
              explanation:
                "Elemen <p> secara otomatis memberikan margin (jarak) dengan teks atas dan bawahnya agar mudah dibaca.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara menulis elemen <img> yang benar?",
              choices: [
                "<img>gambar.jpg</img>",
                '<img href="gambar.jpg" alt="foto">',
                '<image src="gambar.jpg"></image>',
                '<img src="gambar.jpg" alt="foto">',
              ],
              answerIndex: 3,
              explanation:
                "Elemen <img> adalah self-closing dan wajib menggunakan src untuk menunjuk file serta alt untuk deskripsi.",
            },
                      {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kamu menulis langkah-langkah pendaftaran yang harus dikerjakan berurutan. Elemen daftar mana yang tepat, dan kenapa?",
              choices: [
                "<ul>, karena bullet lebih rapi dipandang",
                "<ol>, karena urutannya bermakna dan nomornya dibuat browser otomatis",
                "<div> berisi teks 1., 2., 3. yang diketik manual",
                "<table> dengan satu kolom",
              ],
              answerIndex: 1,
              explanation:
                "Urutan yang bermakna adalah tanda dipakainya <ol>: browser membuat nomornya sendiri, jadi menyisipkan langkah baru di tengah tidak membuatmu menomori ulang. Mengetik angka manual di dalam <div> membuat screen reader tidak mengumumkannya sebagai daftar, dan tabel hanya tepat untuk data yang punya hubungan baris-kolom.",
            },
          ],
        },
      ],
    },
    {
      slug: "struktur-halaman",
      title: "Struktur Halaman & Semantic HTML",
      description:
        "Struktur halaman yang dipakai di proyek nyata — penting untuk SEO, aksesibilitas, dan lolos code review.",
      topics: [
        "Kenapa semantic HTML penting (SEO, a11y, maintainability)",
        "header, nav, main, footer",
        "section vs article vs div — kapan pakai yang mana",
        "aside, figure, figcaption",
        "Elemen teks semantik: strong, em, mark, time, address",
        "blockquote, cite, dan code/pre untuk teknis",
        "Anatomi halaman nyata: membedah struktur situs populer",
      ],
      items: [
        {
          kind: "step",
          id: "html-2-1",
          title: "header dan nav",
          explanation:
            "`<div>` tidak menyatakan apa pun — ia hanya kotak tanpa makna. Elemen **semantic** memberi tahu browser, mesin pencari, dan screen reader apa peran sebuah bagian: `<header>` untuk kepala halaman, `<nav>` khusus untuk kumpulan link navigasi. Manfaatnya nyata bagi pengguna screen reader, yang bisa melompat langsung antar penanda ini tanpa mendengarkan seluruh isi halaman. Tidak semua kumpulan link perlu `<nav>` — pakai untuk navigasi utama, bukan untuk setiap deretan link di dalam artikel.",
          example: {
            code: '<header>\n  <nav>\n    <a href="/produk">Produk</a>\n    <a href="/harga">Harga</a>\n  </nav>\n</header>',
            output:
              "Dua link berjejer di bagian atas halaman — secara tampilan mirip div biasa, tapi maknanya berbeda bagi mesin pencari dan screen reader.",
            note: "Perhatikan indentasi: nav berada DI DALAM header, ditandai posisinya di antara <header> dan </header>.",
          },
          instruction:
            "Buat `<header>` yang di dalamnya ada `<nav>`. Di dalam nav, buat satu link ke `/` bertuliskan `Beranda`.",
          starterCode: "<!-- bangun header + nav di sini -->\n",
          language: "html",
          tests: [
            {
              pattern: "<header>[\\s\\S]*<nav>[\\s\\S]*</nav>[\\s\\S]*</header>",
              message:
                "Pastikan ada <nav> di DALAM <header> (nav harus bersarang di dalam header, bukan di sebelahnya).",
            },
            {
              pattern: '<a\\s+href="/"\\s*>\\s*Beranda\\s*</a>',
              message: 'Tambahkan link <a href="/">Beranda</a> di dalam nav.',
            },
          ],
          solution:
            '<header>\n  <nav>\n    <a href="/">Beranda</a>\n  </nav>\n</header>',
        },
        {
          kind: "step",
          id: "html-2-2",
          title: "main: satu per halaman",
          explanation:
            "`<main>` menandai konten utama halaman — bukan header, bukan sidebar, bukan footer. Aturannya tegas: tepat satu `<main>` per halaman, karena screen reader menyediakan pintasan 'lompat ke konten utama' yang jadi ambigu kalau ada lebih dari satu. Isi yang berulang di setiap halaman, seperti menu dan informasi kontak, harus berada di luarnya. Menempatkan seluruh halaman termasuk menu ke dalam `<main>` adalah kesalahan umum yang membuat pintasan itu kehilangan gunanya.",
          example: {
            code: "<main>\n  <h1>Katalog Produk</h1>\n</main>\n<footer>\n  <p>Hubungi kami di info@toko.com</p>\n</footer>",
            output:
              "Judul halaman muncul di area konten utama, dan informasi kontak di bagian bawah.",
            note: "main hanya untuk konten utama — menu dan footer TIDAK boleh masuk ke dalamnya.",
          },
          instruction:
            "Lengkapi struktur di bawah: tambahkan `<main>` berisi `<h1>` dengan teks `Artikel Terbaru`, lalu `<footer>` berisi paragraf apa pun.",
          starterCode:
            '<header>\n  <nav><a href="/">Beranda</a></nav>\n</header>\n',
          language: "html",
          tests: [
            {
              pattern: "<main>[\\s\\S]*<h1>\\s*Artikel Terbaru\\s*</h1>[\\s\\S]*</main>",
              message:
                "Buat <main> yang di dalamnya ada <h1>Artikel Terbaru</h1>.",
            },
            {
              pattern: "<footer>[\\s\\S]*<p>[\\s\\S]{3,}</p>[\\s\\S]*</footer>",
              message: "Tambahkan <footer> yang berisi elemen <p>.",
            },
          ],
          solution:
            '<header>\n  <nav><a href="/">Beranda</a></nav>\n</header>\n<main>\n  <h1>Artikel Terbaru</h1>\n</main>\n<footer>\n  <p>© 2026 BiLearn</p>\n</footer>',
        },
        {
          kind: "step",
          id: "html-2-3",
          title: "article: konten yang berdiri sendiri",
          explanation:
            "`<article>` dipakai untuk konten yang tetap bermakna jika dicabut dari halamannya — satu postingan blog, satu berita, satu kartu produk. Tes cepatnya: kalau bagian ini muncul sendirian di feed RSS atau dibagikan ke orang lain, apakah masih utuh dan bisa dipahami? Kalau ya, `<article>` tepat; kalau butuh konteks halaman di sekitarnya, `<section>` lebih cocok. Sebuah `<article>` boleh berisi `<article>` lain, misalnya komentar di dalam postingan.",
          example: {
            code: "<article>\n  <h2>Resep Nasi Goreng</h2>\n  <p>Siapkan nasi dingin dan bumbu.</p>\n</article>",
            output:
              "Satu blok resep yang utuh — kalau dibagikan sendirian ke orang lain, isinya masih masuk akal.",
            note: "Tes cepat: bisa dibaca berdiri sendiri? Pakai article. Kalau butuh konteks halaman, pakai section.",
          },
          instruction:
            "Di dalam `<main>`, buat dua `<article>`. Masing-masing berisi `<h2>` (judul apa pun) dan `<p>`.",
          starterCode: "<main>\n  <h1>Artikel Terbaru</h1>\n  \n</main>",
          language: "html",
          tests: [
            {
              pattern:
                "<article>[\\s\\S]*?<h2>[\\s\\S]{3,}?</h2>[\\s\\S]*?<p>[\\s\\S]{3,}?</p>[\\s\\S]*?</article>[\\s\\S]*<article>[\\s\\S]*?<h2>[\\s\\S]{3,}?</h2>[\\s\\S]*?</article>",
              message:
                "Butuh DUA elemen <article>, masing-masing berisi <h2> dan <p> dengan teks.",
            },
          ],
          solution:
            "<main>\n  <h1>Artikel Terbaru</h1>\n  <article>\n    <h2>Belajar HTML</h2>\n    <p>HTML adalah fondasi web.</p>\n  </article>\n  <article>\n    <h2>Belajar CSS</h2>\n    <p>CSS mengatur tampilan.</p>\n  </article>\n</main>",
        },
        {
          kind: "step",
          id: "html-2-4",
          title: "section vs div",
          explanation:
            "`<section>` adalah pengelompokan tematik dan hampir selalu punya judul di dalamnya. Kalau kamu kesulitan memberi judul yang wajar untuk sebuah blok, kemungkinan besar yang kamu butuhkan adalah `<div>` — pembungkus netral untuk kebutuhan tata letak. Aturan praktisnya: ada judulnya berarti `section`, sekadar kotak pengatur layout berarti `div`. Memaksakan elemen semantik untuk kebutuhan visual justru mengaburkan struktur halaman, dan itu terbaca jelas saat audit aksesibilitas.",
          example: {
            code: '<section>\n  <h2>Pertanyaan Umum</h2>\n  <p>Berikut jawaban yang sering ditanyakan.</p>\n</section>\n\n<div class="pembungkus-layout">\n  <p>Ini hanya wadah untuk styling.</p>\n</div>',
            output:
              "Keduanya tampil sama di layar, tapi section menyatakan 'ini bagian bertema berjudul', sedangkan div tidak menyatakan apa pun.",
            note: "Bisa diberi judul yang wajar? Pakai section. Cuma butuh kotak untuk mengatur tata letak? Pakai div.",
          },
          instruction:
            "Buat `<section>` berisi `<h2>` dengan teks `Tentang Kami` dan sebuah paragraf.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern:
                "<section>[\\s\\S]*<h2>\\s*Tentang Kami\\s*</h2>[\\s\\S]*</section>",
              message:
                "Buat <section> yang berisi <h2>Tentang Kami</h2> di dalamnya.",
            },
            {
              pattern: "<section>[\\s\\S]*<p>[\\s\\S]{3,}</p>[\\s\\S]*</section>",
              message: "Tambahkan juga elemen <p> di dalam section.",
            },
          ],
          solution:
            "<section>\n  <h2>Tentang Kami</h2>\n  <p>BiLearn membantu orang belajar coding.</p>\n</section>",
        },
        {
          kind: "step",
          id: "html-2-5",
          title: "aside, figure, dan figcaption",
          explanation:
            "`<aside>` menandai konten pendukung yang bukan inti halaman: sidebar, info terkait, atau iklan. `<figure>` membungkus gambar, diagram, atau cuplikan kode beserta keterangannya, dan `<figcaption>` adalah keterangannya. Bedanya dengan paragraf biasa di bawah gambar: `figcaption` terikat resmi ke gambarnya, sehingga screen reader membacakan keduanya sebagai satu kesatuan. Letakkan `figcaption` sebagai anak pertama atau terakhir di dalam `figure` — posisi lain tidak valid.",
          example: {
            code: '<figure>\n  <img src="https://picsum.photos/120" alt="Grafik penjualan">\n  <figcaption>Gambar 1: Tren penjualan 2026</figcaption>\n</figure>',
            output:
              "Gambar dengan keterangan di bawahnya, dan browser tahu bahwa keterangan itu MILIK gambar tersebut.",
            note: "Bedanya dengan <p> biasa di bawah gambar: figcaption terikat resmi ke gambarnya, jadi screen reader membacakannya bersama.",
          },
          instruction:
            "Buat `<figure>` berisi `<img>` (src `https://picsum.photos/300`, alt `Pemandangan`) dan `<figcaption>` bertuliskan `Foto pemandangan acak`.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: "<figure>[\\s\\S]*<img[^>]*>[\\s\\S]*</figure>",
              message: "Butuh elemen <img> di dalam <figure>.",
            },
            {
              pattern: 'alt="Pemandangan"',
              message: 'Gambar harus punya alt="Pemandangan".',
            },
            {
              pattern:
                "<figcaption>\\s*Foto pemandangan acak\\s*</figcaption>",
              message:
                "Tambahkan <figcaption>Foto pemandangan acak</figcaption> di dalam figure.",
            },
          ],
          solution:
            '<figure>\n  <img src="https://picsum.photos/300" alt="Pemandangan">\n  <figcaption>Foto pemandangan acak</figcaption>\n</figure>',
        },
        {
          kind: "step",
          id: "html-2-6",
          title: "Elemen teks semantik",
          explanation:
            "`<strong>` menyatakan bahwa teksnya penting dan screen reader membacakannya dengan penekanan, sedangkan `<b>` hanya menebalkan tanpa makna apa pun. Pola yang sama berlaku untuk `<em>` (penekanan) dibanding `<i>` (miring saja). Elemen `<time datetime=\"2026-07-27\">` membuat tanggal terbaca mesin dalam format standar, sehingga mesin pencari bisa menampilkan tanggal artikelmu di hasil pencarian. Di code review, memilih elemen bermakna dibanding elemen visual adalah salah satu hal yang paling sering dikomentari reviewer.",
          example: {
            code: '<p>\n  <strong>Perhatian</strong>: promo berakhir\n  <time datetime="2026-12-31">31 Desember 2026</time>.\n</p>',
            output:
              "Kata 'Perhatian' tampil tebal, dan tanggal tampil normal tapi bisa dibaca mesin dalam format standar.",
            note: "datetime memakai format YYYY-MM-DD (format internasional), sementara teks yang terlihat user boleh ditulis bebas.",
          },
          instruction:
            "Buat paragraf yang di dalamnya ada `<strong>` berisi `Penting` dan elemen `<time>` dengan atribut `datetime` bernilai `2026-07-27`.",
          starterCode: "<p>\n  \n</p>",
          language: "html",
          tests: [
            {
              pattern: "<strong>\\s*Penting\\s*</strong>",
              message: "Tambahkan <strong>Penting</strong>.",
            },
            {
              pattern: '<time[^>]*datetime="2026-07-27"[^>]*>',
              message:
                'Tambahkan <time datetime="2026-07-27"> — atribut datetime wajib agar mesin bisa membacanya.',
            },
          ],
          solution:
            '<p>\n  <strong>Penting</strong>: acara dimulai <time datetime="2026-07-27">27 Juli 2026</time>.\n</p>',
        },
        {
          kind: "quiz",
          id: "html-2-kuis",
          title: "Kuis: Semantic HTML",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kamu membuat daftar kartu produk di halaman toko. Elemen apa yang paling tepat membungkus SATU kartu produk?",
              choices: ["<div>", "<article>", "<section>", "<aside>"],
              answerIndex: 1,
              explanation:
                "<article> tepat karena satu kartu produk tetap bermakna jika dicabut dari halaman (bisa dibagikan/di-feed sendirian). <section> untuk pengelompokan bertema berjudul, <aside> untuk konten pendukung, <div> tidak punya makna semantik.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Berapa banyak <main> yang boleh ada dalam satu halaman?",
              choices: [
                "Sebanyak bagian utama yang ada",
                "Tepat satu",
                "Maksimal dua (desktop & mobile)",
                "Tidak dibatasi",
              ],
              answerIndex: 1,
              explanation:
                "Tepat satu <main> per halaman. Screen reader menyediakan shortcut 'lompat ke main content' — kalau ada lebih dari satu, shortcut itu jadi ambigu dan aksesibilitas rusak.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Apa perbedaan praktis <strong> dan <b>?",
              code: "<p>Harga <strong>diskon 50%</strong> hari ini</p>\n<p>Harga <b>diskon 50%</b> hari ini</p>",
              choices: [
                "Tidak ada bedanya, keduanya menebalkan",
                "<strong> menandai kepentingan (dibaca berbeda screen reader), <b> hanya visual",
                "<b> sudah dihapus dari HTML5",
                "<strong> hanya untuk heading",
              ],
              answerIndex: 1,
              explanation:
                "Keduanya tampak sama tebal, tapi <strong> membawa makna 'penting' yang disampaikan screen reader dengan penekanan, sementara <b> murni presentasi. Di dunia kerja, memilih yang benar adalah bagian dari code review.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Elemen apa yang khusus dipakai untuk membungkus kumpulan link navigasi?",
              choices: ["menu", "header", "nav", "links"],
              answerIndex: 2,
              explanation:
                "<nav> menandai blok navigasi utama. Screen reader bisa melompat antar landmark, dan tidak semua kumpulan link perlu <nav> — cukup untuk navigasi utama/penting saja, bukan setiap grup link.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Kapan sebaiknya kamu pakai <div> daripada <section>?",
              choices: [
                "Saat butuh pembungkus murni untuk styling/layout tanpa makna",
                "Saat bagian itu punya judul",
                "Selalu pakai div, section sudah usang",
                "Saat konten berada di dalam main",
              ],
              answerIndex: 0,
              explanation:
                "<div> adalah pembungkus tanpa makna — tepat untuk kebutuhan layout/styling. Kalau blok itu punya judul dan merupakan tema tersendiri, <section> lebih tepat. Jangan memaksa elemen semantik untuk kebutuhan visual semata.",
            },
          ],
        },
      ],
    },
    {
      slug: "tabel-media",
      title: "Tabel & Media",
      description:
        "Menyajikan data tabular dan menyematkan media dengan benar.",
      topics: [
        "table, tr, th, td, dan caption",
        "thead, tbody, tfoot untuk tabel data nyata",
        "colspan & rowspan tanpa merusak aksesibilitas",
        "audio & video beserta atribut controls, autoplay, muted",
        "iframe: embed YouTube/Maps dengan aman (sandbox, loading)",
        "picture & source untuk responsive image",
      ],
      items: [
        {
          kind: "step",
          id: "html-3-1",
          title: "Tabel dasar",
          explanation:
            "Tabel dipakai untuk data tabular — data yang hubungan baris dan kolomnya bermakna, bukan untuk mengatur tata letak halaman. `<table>` berisi baris `<tr>`, dan di dalam baris ada sel data `<td>` atau sel header `<th>`. `<th>` bukan sekadar teks tebal: screen reader memakainya untuk mengumumkan konteks kolom saat pengguna berpindah antar sel, sehingga angka tetap bisa dipahami tanpa melihat layar. Memakai tabel untuk layout adalah praktik lama yang merusak tampilan di HP dan menyulitkan pengguna screen reader.",
          example: {
            code: "<table>\n  <tr>\n    <th>Produk</th>\n    <th>Stok</th>\n  </tr>\n  <tr>\n    <td>Kopi</td>\n    <td>12</td>\n  </tr>\n</table>",
            output:
              "Tabel 2 kolom: baris pertama header (tebal, di tengah), baris kedua data biasa.",
            note: "Struktur berlapis: table membungkus tr (baris), tr membungkus th/td (sel). Satu tr = satu baris.",
          },
          instruction:
            "Buat tabel dengan 1 baris header (`<th>` berisi `Nama` dan `Umur`) dan 1 baris data (`<td>` berisi `Bimo` dan `20`).",
          starterCode: "<table>\n  \n</table>",
          language: "html",
          tests: [
            {
              pattern:
                "<tr>[\\s\\S]*?<th>\\s*Nama\\s*</th>[\\s\\S]*?<th>\\s*Umur\\s*</th>[\\s\\S]*?</tr>",
              message:
                "Buat satu <tr> yang berisi <th>Nama</th> dan <th>Umur</th>.",
            },
            {
              pattern:
                "<tr>[\\s\\S]*?<td>\\s*Bimo\\s*</td>[\\s\\S]*?<td>\\s*20\\s*</td>[\\s\\S]*?</tr>",
              message:
                "Buat <tr> berikutnya yang berisi <td>Bimo</td> dan <td>20</td>.",
            },
          ],
          solution:
            "<table>\n  <tr>\n    <th>Nama</th>\n    <th>Umur</th>\n  </tr>\n  <tr>\n    <td>Bimo</td>\n    <td>20</td>\n  </tr>\n</table>",
        },
        {
          kind: "step",
          id: "html-3-2",
          title: "thead, tbody, dan caption",
          explanation:
            "Untuk tabel data yang sesungguhnya, pisahkan bagiannya: `<thead>` untuk baris header, `<tbody>` untuk isi, dan `<tfoot>` untuk baris total. Pembagian ini bukan kosmetik — ia memberi browser dan teknologi bantu informasi bagian mana yang merupakan kepala tabel. `<caption>` memberi tabel judul resmi yang dibacakan lebih dulu oleh screen reader, sehingga penggunanya tahu isi tabel sebelum menyusurinya. Ingat urutannya: `caption` wajib menjadi elemen pertama di dalam `table`, sebelum `thead`.",
          example: {
            code: "<table>\n  <caption>Laporan Stok</caption>\n  <thead>\n    <tr><th>Produk</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Kopi</td></tr>\n  </tbody>\n</table>",
            output:
              "Tampilan mirip tabel biasa, tapi caption muncul sebagai judul tabel dan strukturnya kini terbagi jelas.",
            note: "caption harus jadi elemen PERTAMA di dalam table, sebelum thead.",
          },
          instruction:
            "Bungkus ulang tabel: tambahkan `<caption>` bertuliskan `Data Peserta`, letakkan baris header di dalam `<thead>` dan baris data di dalam `<tbody>`.",
          starterCode:
            "<table>\n  <tr>\n    <th>Nama</th>\n    <th>Umur</th>\n  </tr>\n  <tr>\n    <td>Bimo</td>\n    <td>20</td>\n  </tr>\n</table>",
          language: "html",
          tests: [
            {
              pattern: "<caption>\\s*Data Peserta\\s*</caption>",
              message: "Tambahkan <caption>Data Peserta</caption>.",
            },
            {
              pattern: "<thead>[\\s\\S]*<th>[\\s\\S]*</thead>",
              message: "Pindahkan baris <th> ke dalam <thead>.",
            },
            {
              pattern: "<tbody>[\\s\\S]*<td>[\\s\\S]*</tbody>",
              message: "Pindahkan baris <td> ke dalam <tbody>.",
            },
          ],
          solution:
            "<table>\n  <caption>Data Peserta</caption>\n  <thead>\n    <tr>\n      <th>Nama</th>\n      <th>Umur</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Bimo</td>\n      <td>20</td>\n    </tr>\n  </tbody>\n</table>",
        },
        {
          kind: "step",
          id: "html-3-3",
          title: "colspan",
          explanation:
            "`colspan` membuat satu sel melebar menutupi beberapa kolom, biasanya untuk baris total atau judul kelompok. Nilainya adalah jumlah kolom yang ditutupi, jadi `colspan=\"2\"` berarti sel itu dihitung sebagai dua kolom. Jumlah kolom setiap baris harus tetap sama setelah colspan diperhitungkan; kalau tidak, tabelnya tampil miring dan screen reader kehilangan hubungan antara sel dan headernya. Ada juga `rowspan` yang bekerja sama persis, tapi ke arah vertikal.",
          example: {
            code: '<tr>\n  <td>Kopi</td>\n  <td>12</td>\n</tr>\n<tr>\n  <td colspan="2">Total: 12 item</td>\n</tr>',
            output:
              "Baris terakhir hanya punya satu sel, tapi lebarnya menutupi kedua kolom di atasnya.",
            note: 'colspan="2" berarti "sel ini menghitung sebagai 2 kolom", sehingga jumlah kolom per baris tetap seimbang.',
          },
          instruction:
            "Tambahkan baris terakhir berisi satu `<td>` dengan `colspan=\"2\"` bertuliskan `Total: 1 peserta`.",
          starterCode:
            "<table>\n  <tr>\n    <th>Nama</th>\n    <th>Umur</th>\n  </tr>\n  <tr>\n    <td>Bimo</td>\n    <td>20</td>\n  </tr>\n  \n</table>",
          language: "html",
          tests: [
            {
              pattern: '<td[^>]*colspan="2"[^>]*>\\s*Total: 1 peserta\\s*</td>',
              message:
                'Buat <td colspan="2">Total: 1 peserta</td> di dalam baris <tr> baru.',
            },
          ],
          solution:
            '<table>\n  <tr>\n    <th>Nama</th>\n    <th>Umur</th>\n  </tr>\n  <tr>\n    <td>Bimo</td>\n    <td>20</td>\n  </tr>\n  <tr>\n    <td colspan="2">Total: 1 peserta</td>\n  </tr>\n</table>',
        },
        {
          kind: "step",
          id: "html-3-4",
          title: "Video dan audio",
          explanation:
            "`<video>` dan `<audio>` membutuhkan atribut `controls` agar pemutarnya muncul — tanpa itu elemennya tetap ada tapi pengguna tidak punya cara memainkannya. Untuk autoplay, browser modern hanya mengizinkannya bila video di-mute, aturan yang lahir karena suara yang menyala sendiri sangat mengganggu. `controls` adalah boolean attribute: cukup ditulis namanya, tanpa nilai. Sediakan juga teks alternatif atau subtitle bila video memuat informasi penting, karena tidak semua orang bisa mendengarnya.",
          example: {
            code: '<audio src="lagu.mp3" controls></audio>',
            output:
              "Muncul pemutar audio kecil dengan tombol play, slider posisi, dan volume.",
            note: "controls adalah atribut tanpa nilai (boolean attribute) — cukup ditulis namanya saja, tidak perlu controls=\"true\".",
          },
          instruction:
            "Buat elemen `<video>` dengan atribut `src` berisi `film.mp4` dan atribut `controls`.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: '<video[^>]*src="film\\.mp4"[^>]*>',
              message: 'Buat <video> dengan src="film.mp4".',
            },
            {
              pattern: "<video[^>]*\\scontrols[\\s>]",
              message:
                "Tambahkan atribut controls agar pemutar video terlihat dan bisa dikendalikan.",
            },
          ],
          solution: '<video src="film.mp4" controls></video>',
        },
        {
          kind: "step",
          id: "html-3-5",
          title: "iframe yang aman",
          explanation:
            "`<iframe>` menyematkan halaman lain ke dalam halamanmu, misalnya video YouTube atau peta. Dua atribut yang selalu diperiksa di dunia kerja: `title`, karena screen reader hanya menyebut 'frame' tanpa itu, dan `loading=\"lazy\"`, yang menunda pemuatan sampai pengguna hampir men-scroll ke sana. Menunda pemuatan adalah salah satu perbaikan performa termurah dan sering jadi rekomendasi pertama audit Lighthouse. Untuk konten dari sumber yang tidak kamu kendalikan, tambahkan juga atribut `sandbox` agar isinya dibatasi.",
          example: {
            code: '<iframe\n  src="https://www.openstreetmap.org"\n  title="Peta lokasi kantor"\n  loading="lazy">\n</iframe>',
            output:
              "Sebuah jendela kecil di dalam halaman yang menampilkan situs peta.",
            note: "title dibacakan screen reader sebagai nama frame. Tanpa itu, pengguna hanya mendengar 'frame' tanpa tahu isinya.",
          },
          instruction:
            "Buat `<iframe>` dengan `src` berisi `https://example.com`, `title` berisi `Contoh situs`, dan `loading` bernilai `lazy`.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: '<iframe[^>]*src="https://example\\.com"[^>]*>',
              message: 'Buat <iframe> dengan src="https://example.com".',
            },
            {
              pattern: '<iframe[^>]*title="Contoh situs"[^>]*>',
              message:
                'Tambahkan title="Contoh situs" — iframe tanpa title adalah pelanggaran aksesibilitas yang sering ketangkap audit.',
            },
            {
              pattern: '<iframe[^>]*loading="lazy"[^>]*>',
              message: 'Tambahkan loading="lazy".',
            },
          ],
          solution:
            '<iframe src="https://example.com" title="Contoh situs" loading="lazy"></iframe>',
        },
        {
          kind: "step",
          id: "html-3-6",
          title: "picture untuk responsive image",
          explanation:
            "`<picture>` membiarkan browser memilih berkas gambar yang paling sesuai — versi kecil untuk layar HP, atau format modern seperti WebP bila didukung. Browser membaca setiap `<source>` dari atas ke bawah dan memakai yang pertama cocok dengan kondisinya. `<img>` di dalamnya wajib ada karena dialah yang sebenarnya ditampilkan; `source` hanya menawarkan alternatif. Manfaatnya besar di Indonesia, tempat banyak pengguna mengakses lewat jaringan seluler dengan kuota terbatas.",
          example: {
            code: '<picture>\n  <source srcset="foto-lebar.jpg" media="(min-width: 1200px)">\n  <img src="foto-kecil.jpg" alt="Foto produk">\n</picture>',
            output:
              "Di layar sangat lebar browser memakai foto-lebar.jpg; di layar lain memakai foto-kecil.jpg.",
            note: "img di dalam picture WAJIB ada — dialah yang benar-benar ditampilkan, source hanya memberi alternatif.",
          },
          instruction:
            "Buat `<picture>` dengan satu `<source>` (`srcset` = `besar.jpg`, `media` = `(min-width: 800px)`) dan `<img>` fallback (`src` = `kecil.jpg`, `alt` = `Banner`).",
          starterCode: "<picture>\n  \n</picture>",
          language: "html",
          tests: [
            {
              pattern: '<source[^>]*srcset="besar\\.jpg"[^>]*>',
              message: 'Tambahkan <source srcset="besar.jpg" ...>.',
            },
            {
              pattern: '<source[^>]*media="\\(min-width: 800px\\)"[^>]*>',
              message: 'Tambahkan atribut media="(min-width: 800px)" pada source.',
            },
            {
              pattern: '<img[^>]*src="kecil\\.jpg"[^>]*alt="Banner"|<img[^>]*alt="Banner"[^>]*src="kecil\\.jpg"',
              message:
                'Tambahkan <img src="kecil.jpg" alt="Banner"> sebagai fallback di dalam picture.',
            },
          ],
          solution:
            '<picture>\n  <source srcset="besar.jpg" media="(min-width: 800px)">\n  <img src="kecil.jpg" alt="Banner">\n</picture>',
        },
        {
          kind: "quiz",
          id: "html-3-kuis",
          title: "Kuis: Tabel & Media",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Kapan tabel HTML adalah pilihan yang benar?",
              choices: [
                "Untuk mengatur layout halaman jadi kolom-kolom",
                "Untuk menampilkan data tabular seperti laporan penjualan",
                "Untuk membuat galeri gambar",
                "Untuk menyusun form",
              ],
              answerIndex: 1,
              explanation:
                "Tabel untuk data tabular — data yang punya hubungan baris-kolom bermakna. Memakai tabel untuk layout adalah praktik lama yang merusak aksesibilitas dan responsivitas; untuk layout gunakan Flexbox/Grid.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Atribut apa yang harus ditambahkan ke <video> agar pemutarnya (play, pause, volume) muncul?",
              choices: ["autoplay", "controls", "buttons", "player"],
              answerIndex: 1,
              explanation:
                "Tanpa controls, elemen video muncul tapi pengguna tidak punya cara memainkannya. Ini juga soal aksesibilitas: pengguna harus selalu bisa menghentikan media.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Browser modern memblokir autoplay video kecuali satu kondisi. Apa kondisinya?",
              choices: [
                "Video berukuran kecil",
                "Video di-mute",
                "Video dari domain yang sama",
                "Pengguna sudah login",
              ],
              answerIndex: 1,
              explanation:
                "Autoplay hanya diizinkan jika video di-mute (atau user sudah berinteraksi dengan halaman). Aturan ini dibuat karena video bersuara yang jalan sendiri sangat mengganggu — pertanyaan yang sering muncul saat debugging 'kenapa autoplay saya tidak jalan'.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Apa fungsi <th> dibandingkan <td> selain tampil lebih tebal?",
              choices: [
                "Tidak ada, murni tampilan",
                "Menandai sel sebagai header sehingga screen reader mengumumkan konteks kolom/baris",
                "Membuat sel tidak bisa diedit",
                "Otomatis mengurutkan data",
              ],
              answerIndex: 1,
              explanation:
                "<th> menandai sel header secara semantik. Saat pengguna screen reader berpindah antar sel, pembaca mengumumkan header terkait ('Umur: 20') sehingga data tetap dimengerti tanpa melihat tabel.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Atribut apa pada <iframe> yang menunda pemuatan sampai pengguna hampir men-scroll ke elemen itu?",
              choices: ["defer", 'loading="lazy"', "async", "delay"],
              answerIndex: 1,
              explanation:
                'loading="lazy" menunda pemuatan iframe/gambar di luar viewport. Ini salah satu perbaikan performa termurah dan sering jadi rekomendasi pertama audit Lighthouse.',
            },
          ],
        },
      ],
    },
    {
      slug: "formulir",
      title: "Formulir",
      description:
        "Input, label, dan validasi bawaan — fondasi semua aplikasi web dari login sampai checkout.",
      topics: [
        "form, action, method — cara kerja pengiriman data",
        "input type: text, email, password, number, date, file",
        "label & hubungannya dengan input (for/id) — wajib untuk a11y",
        "textarea, select, option, optgroup",
        "checkbox & radio beserta pola name yang benar",
        "Validasi bawaan: required, minlength, pattern, min/max",
        "fieldset & legend untuk mengelompokkan form panjang",
        "button type: submit vs button vs reset",
        "Autocomplete & inputmode untuk UX mobile",
      ],
      items: [
        {
          kind: "step",
          id: "html-4-1",
          title: "form, action, dan method",
          explanation:
            "`<form>` membungkus input dan menentukan ke mana data dikirim lewat `action` serta caranya lewat `method`. Aturan praktisnya: `GET` untuk pencarian, karena datanya tampil di URL sehingga hasilnya bisa di-bookmark dan dibagikan; `POST` untuk apa pun yang mengubah data, seperti login, pendaftaran, dan pembelian. Jangan pernah mengirim kata sandi lewat GET — nilainya akan tercatat di riwayat browser, log server, dan header Referer. Kalau `action` dikosongkan, form dikirim kembali ke alamat halaman itu sendiri.",
          example: {
            code: '<form action="/cari" method="get">\n  <input type="search" name="q">\n  <button type="submit">Cari</button>\n</form>',
            output:
              "Kotak pencarian dengan tombol. Saat disubmit, browser membuka /cari?q=isian karena memakai GET.",
            note: "Perhatikan GET menempelkan data ke URL (bisa di-bookmark). Untuk login/pendaftaran, itu justru bahaya.",
          },
          instruction:
            'Buat `<form>` dengan `action="/daftar"` dan `method="post"`. Isinya boleh kosong dulu.',
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: '<form[^>]*action="/daftar"[^>]*>',
              message: 'Buat <form> dengan action="/daftar".',
            },
            {
              pattern: '<form[^>]*method="post"[^>]*>',
              message:
                'Tambahkan method="post" karena pendaftaran mengubah data di server.',
            },
          ],
          solution: '<form action="/daftar" method="post">\n  \n</form>',
        },
        {
          kind: "step",
          id: "html-4-2",
          title: "label yang benar-benar terhubung",
          explanation:
            "Ini bab paling sering salah di dunia kerja. `<label>` harus terhubung ke input lewat `for` yang cocok dengan `id` input. Efeknya nyata: klik pada teks label memfokuskan input (target sentuh jadi jauh lebih besar di HP), dan screen reader membacakan labelnya saat input difokuskan. Placeholder **bukan** pengganti label — ia hilang saat user mulai menulis.",
          example: {
            code: '<label for="kota">Kota</label>\n<input type="text" id="kota" name="kota">',
            output:
              "Tulisan 'Kota' dan kotak input. Klik pada tulisan 'Kota' langsung memfokuskan kursor ke input.",
            note: 'Kuncinya: for="kota" pada label harus SAMA dengan id="kota" pada input. Itulah yang mengikat keduanya.',
          },
          instruction:
            'Buat `<label>` dengan `for="email"` bertuliskan `Email`, dan `<input>` dengan `type="email"`, `id="email"`, serta `name="email"`.',
          starterCode: '<form action="/daftar" method="post">\n  \n</form>',
          language: "html",
          tests: [
            {
              pattern: '<label[^>]*for="email"[^>]*>\\s*Email\\s*</label>',
              message: 'Buat <label for="email">Email</label>.',
            },
            {
              pattern: '<input[^>]*id="email"[^>]*>',
              message:
                'Input harus punya id="email" agar cocok dengan for pada label.',
            },
            {
              pattern: '<input[^>]*type="email"[^>]*>',
              message: 'Gunakan type="email".',
            },
            {
              pattern: '<input[^>]*name="email"[^>]*>',
              message:
                'Tambahkan name="email" — tanpa name, data tidak terkirim ke server.',
            },
          ],
          solution:
            '<form action="/daftar" method="post">\n  <label for="email">Email</label>\n  <input type="email" id="email" name="email">\n</form>',
        },
        {
          kind: "step",
          id: "html-4-3",
          title: "Tipe input yang tepat",
          explanation:
            "Atribut `type` bukan sekadar soal validasi — di HP ia menentukan papan ketik yang muncul. `type=\"email\"` memunculkan tombol @, `type=\"tel\"` memunculkan tombol angka besar, dan `type=\"date\"` memanggil pemilih tanggal bawaan sistem. Memilih tipe yang tepat adalah peningkatan pengalaman pengguna yang gratis dan sering terlewat pemula. Satu catatan penting: `type=\"number\"` sebaiknya hanya untuk nilai yang benar-benar dihitung, bukan untuk nomor telepon atau NIK yang boleh diawali angka nol.",
          example: {
            code: '<input type="email" name="email">\n<input type="number" name="jumlah">\n<input type="color" name="warna">',
            output:
              "Tiga input berbeda: email (validasi format @), number (ada tombol naik-turun), color (memunculkan pemilih warna).",
            note: "Di HP, type juga menentukan keyboard yang muncul — email menampilkan tombol @, number menampilkan angka.",
          },
          instruction:
            "Tambahkan tiga input dengan `name` masing-masing: `type=\"password\"` (name `sandi`), `type=\"tel\"` (name `telepon`), dan `type=\"date\"` (name `lahir`).",
          starterCode: '<form action="/daftar" method="post">\n  \n</form>',
          language: "html",
          tests: [
            {
              pattern: '<input[^>]*type="password"[^>]*name="sandi"|<input[^>]*name="sandi"[^>]*type="password"',
              message: 'Buat input type="password" dengan name="sandi".',
            },
            {
              pattern: '<input[^>]*type="tel"[^>]*name="telepon"|<input[^>]*name="telepon"[^>]*type="tel"',
              message: 'Buat input type="tel" dengan name="telepon".',
            },
            {
              pattern: '<input[^>]*type="date"[^>]*name="lahir"|<input[^>]*name="lahir"[^>]*type="date"',
              message: 'Buat input type="date" dengan name="lahir".',
            },
          ],
          solution:
            '<form action="/daftar" method="post">\n  <input type="password" name="sandi">\n  <input type="tel" name="telepon">\n  <input type="date" name="lahir">\n</form>',
        },
        {
          kind: "step",
          id: "html-4-4",
          title: "textarea dan select",
          explanation:
            "`<textarea>` dipakai untuk teks panjang, dan nilainya ditulis di antara tag pembuka dan penutup — bukan di atribut `value` seperti input biasa. `<select>` berisi elemen `<option>`, di mana atribut `value` adalah yang dikirim ke server sementara teks di dalamnya yang dibaca pengguna. Membedakan keduanya penting supaya nilai di database tetap stabil meski labelnya diubah. Jangan lupa memberi `name` pada keduanya, karena tanpa `name` isinya tidak ikut terkirim sama sekali.",
          example: {
            code: '<textarea name="catatan">Isi awal</textarea>\n\n<select name="ukuran">\n  <option value="s">Small</option>\n  <option value="l">Large</option>\n</select>',
            output:
              "Kotak teks besar berisi 'Isi awal', dan dropdown berisi pilihan Small/Large.",
            note: "Yang dikirim ke server adalah value option (s atau l), bukan teks yang dilihat user (Small/Large).",
          },
          instruction:
            "Buat `<textarea>` dengan `name=\"pesan\"`, dan `<select>` dengan `name=\"kota\"` yang punya dua `<option>`: value `jkt` (teks `Jakarta`) dan value `bdg` (teks `Bandung`).",
          starterCode: '<form action="/kirim" method="post">\n  \n</form>',
          language: "html",
          tests: [
            {
              pattern: '<textarea[^>]*name="pesan"[^>]*>',
              message: 'Buat <textarea name="pesan"></textarea>.',
            },
            {
              pattern: '<select[^>]*name="kota"[^>]*>',
              message: 'Buat <select name="kota">.',
            },
            {
              pattern: '<option[^>]*value="jkt"[^>]*>\\s*Jakarta\\s*</option>',
              message: 'Tambahkan <option value="jkt">Jakarta</option>.',
            },
            {
              pattern: '<option[^>]*value="bdg"[^>]*>\\s*Bandung\\s*</option>',
              message: 'Tambahkan <option value="bdg">Bandung</option>.',
            },
          ],
          solution:
            '<form action="/kirim" method="post">\n  <textarea name="pesan"></textarea>\n  <select name="kota">\n    <option value="jkt">Jakarta</option>\n    <option value="bdg">Bandung</option>\n  </select>\n</form>',
        },
        {
          kind: "step",
          id: "html-4-5",
          title: "Radio: name yang sama itu kuncinya",
          explanation:
            "Radio button menjadi satu kelompok hanya jika atribut `name`-nya sama persis — itulah yang membuat memilih satu otomatis membatalkan pilihan lain. Kalau `name`-nya berbeda, semuanya bisa aktif bersamaan dan tampak seperti bug yang sulit dilacak. Setiap radio wajib punya `value` berbeda, karena nilai itulah yang dikirim ke server, bukan teks yang terlihat. Kalau pengguna boleh memilih lebih dari satu, yang kamu butuhkan adalah checkbox, bukan radio.",
          example: {
            code: '<input type="radio" name="bayar" value="transfer"> Transfer\n<input type="radio" name="bayar" value="cod"> COD',
            output:
              "Dua bulatan pilihan. Memilih 'COD' otomatis membatalkan 'Transfer' — hanya satu yang bisa aktif.",
            note: "Yang membuatnya satu grup adalah name=\"bayar\" yang IDENTIK. Kalau name-nya beda, keduanya bisa aktif bersamaan.",
          },
          instruction:
            "Buat dua radio dengan `name=\"gender\"`: satu `value=\"L\"`, satu `value=\"P\"`.",
          starterCode: '<form action="/daftar" method="post">\n  \n</form>',
          language: "html",
          tests: [
            {
              pattern: '<input[^>]*type="radio"[^>]*name="gender"[^>]*value="L"|<input[^>]*type="radio"[^>]*value="L"[^>]*name="gender"',
              message: 'Buat radio dengan name="gender" dan value="L".',
            },
            {
              pattern: '<input[^>]*type="radio"[^>]*name="gender"[^>]*value="P"|<input[^>]*type="radio"[^>]*value="P"[^>]*name="gender"',
              message:
                'Buat radio kedua dengan name="gender" (SAMA dengan yang pertama) dan value="P".',
            },
          ],
          solution:
            '<form action="/daftar" method="post">\n  <input type="radio" name="gender" value="L"> Laki-laki\n  <input type="radio" name="gender" value="P"> Perempuan\n</form>',
        },
        {
          kind: "step",
          id: "html-4-6",
          title: "Validasi bawaan browser",
          explanation:
            "Browser bisa memvalidasi sebelum form terkirim: `required` (wajib diisi), `minlength`, `pattern` (regex). Ini gratis dan instan. **Tapi ingat:** validasi HTML hanya untuk kenyamanan user — bisa dilewati lewat DevTools, jadi server **wajib** memvalidasi ulang. Ini prinsip keamanan yang selalu ditanya di interview backend.",
          example: {
            code: '<input type="text" name="kode" required maxlength="5">\n<input type="number" name="umur" min="17" max="100">',
            output:
              "Submit dengan kode kosong memunculkan pesan browser 'Please fill out this field'. Umur di bawah 17 juga ditolak.",
            note: "Pesan validasinya otomatis dan mengikuti bahasa browser user — kamu tidak perlu menulisnya sendiri.",
          },
          instruction:
            "Buat input `type=\"text\"` dengan `name=\"username\"`, atribut `required`, dan `minlength=\"3\"`.",
          starterCode: '<form action="/daftar" method="post">\n  \n</form>',
          language: "html",
          tests: [
            {
              pattern: '<input[^>]*name="username"[^>]*>',
              message: 'Buat input dengan name="username".',
            },
            {
              pattern: "<input[^>]*\\srequired[\\s>]",
              message: "Tambahkan atribut required.",
            },
            {
              pattern: '<input[^>]*minlength="3"[^>]*>',
              message: 'Tambahkan minlength="3".',
            },
          ],
          solution:
            '<form action="/daftar" method="post">\n  <input type="text" name="username" required minlength="3">\n</form>',
        },
        {
          kind: "step",
          id: "html-4-7",
          title: "fieldset, legend, dan tombol submit",
          explanation:
            "`<fieldset>` mengelompokkan input yang berkaitan dan `<legend>` memberi judul kelompok itu — screen reader membacakan legend saat user masuk ke grup, sangat membantu pada form panjang. Untuk tombol: `type=\"submit\"` mengirim form, `type=\"button\"` tidak melakukan apa-apa sendiri (dipakai bersama JavaScript). Lupa menulis `type` pada `<button>` di dalam form berarti default-nya submit — penyebab klasik 'halaman ke-refresh sendiri saat saya klik tombol'.",
          example: {
            code: '<fieldset>\n  <legend>Alamat Pengiriman</legend>\n  <label for="jalan">Jalan</label>\n  <input id="jalan" name="jalan">\n</fieldset>\n<button type="submit">Simpan</button>',
            output:
              "Kotak bergaris dengan judul 'Alamat Pengiriman' menempel di tepi atasnya, lalu tombol Simpan di luar kotak.",
            note: "legend harus jadi elemen pertama di dalam fieldset. Tulis type pada button secara eksplisit agar tidak salah perilaku.",
          },
          instruction:
            "Buat `<fieldset>` dengan `<legend>` bertuliskan `Data Diri`, lalu di luar fieldset tambahkan `<button type=\"submit\">` bertuliskan `Kirim`.",
          starterCode: '<form action="/daftar" method="post">\n  \n</form>',
          language: "html",
          tests: [
            {
              pattern: "<fieldset>[\\s\\S]*<legend>\\s*Data Diri\\s*</legend>[\\s\\S]*</fieldset>",
              message:
                "Buat <fieldset> dengan <legend>Data Diri</legend> di dalamnya.",
            },
            {
              pattern: '<button[^>]*type="submit"[^>]*>\\s*Kirim\\s*</button>',
              message: 'Tambahkan <button type="submit">Kirim</button>.',
            },
          ],
          solution:
            '<form action="/daftar" method="post">\n  <fieldset>\n    <legend>Data Diri</legend>\n    <label for="nama">Nama</label>\n    <input type="text" id="nama" name="nama" required>\n  </fieldset>\n  <button type="submit">Kirim</button>\n</form>',
        },
        {
          kind: "quiz",
          id: "html-4-kuis",
          title: "Kuis: Formulir",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Input di bawah tidak akan mengirim datanya ke server. Atribut apa yang hilang?",
              code: '<input type="text" id="nama">',
              choices: ["value", "name", "required", "for"],
              answerIndex: 1,
              explanation:
                "name adalah kunci yang dipakai server untuk membaca nilai input. id hanya untuk keperluan label/JavaScript/CSS. Input tanpa name tidak ikut terkirim sama sekali — bug yang membuat banyak pemula bingung karena form 'terlihat normal'.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Kenapa placeholder tidak boleh dipakai sebagai pengganti label?",
              choices: [
                "Karena placeholder tidak bisa diberi warna",
                "Karena placeholder hilang saat user mulai mengetik dan sering tidak dibaca screen reader",
                "Karena placeholder hanya bekerja di Chrome",
                "Tidak masalah, placeholder cukup",
              ],
              answerIndex: 1,
              explanation:
                "Placeholder hilang begitu user mengetik, sehingga user kehilangan konteks (terutama pada form panjang), kontrasnya biasanya rendah, dan dukungan screen reader tidak konsisten. Label yang terhubung dengan for/id adalah standar yang benar.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Dua radio button di bawah bisa dicentang bersamaan. Kenapa?",
              code: '<input type="radio" name="warna1" value="merah">\n<input type="radio" name="warna2" value="biru">',
              choices: [
                "Karena value-nya berbeda",
                "Karena name-nya berbeda — radio hanya jadi satu grup jika name sama",
                "Karena tidak ada atribut checked",
                "Karena tidak dibungkus form",
              ],
              answerIndex: 1,
              explanation:
                "Radio dikelompokkan berdasarkan atribut name yang identik. Karena name-nya berbeda, browser menganggapnya dua pertanyaan terpisah. Perbaikannya: pakai name yang sama (misal name=\"warna\") dan value yang berbeda.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kamu sudah memakai required dan pattern di form. Apakah server masih perlu memvalidasi?",
              choices: [
                "Tidak, validasi HTML sudah cukup",
                "Ya, karena validasi HTML bisa dilewati lewat DevTools atau request langsung",
                "Hanya jika memakai method GET",
                "Hanya untuk form pembayaran",
              ],
              answerIndex: 1,
              explanation:
                "Validasi client-side adalah UX, bukan keamanan. Siapa pun bisa menghapus atribut required di DevTools atau mengirim request langsung tanpa browser. Aturan abadi: never trust the client — server wajib memvalidasi ulang.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Method form apa yang harus dipakai untuk login?",
              choices: ["GET", "POST", "PUT", "DELETE"],
              answerIndex: 1,
              explanation:
                "POST, karena GET menempelkan data ke URL — password akan tersimpan di riwayat browser, log server, dan header Referer. Aturan umum: GET untuk mengambil/mencari data, POST untuk mengirim atau mengubah data.",
            },
          ],
        },
      ],
    },
    {
      slug: "aksesibilitas",
      title: "Aksesibilitas (a11y)",
      description:
        "Membuat halaman yang bisa dipakai semua orang — makin sering jadi requirement lowongan dan pertanyaan interview.",
      topics: [
        "Cara kerja screen reader & keyboard navigation",
        "Alt text yang baik vs buruk",
        "Heading hierarchy & landmark untuk navigasi cepat",
        "Kontras warna & ukuran target sentuh",
        "ARIA dasar: role, aria-label, aria-hidden — dan kapan TIDAK memakainya",
        "Focus management: tabindex, :focus-visible",
        "Audit dengan Lighthouse & axe DevTools",
      ],
      items: [
        {
          kind: "step",
          id: "html-5-1",
          title: "Alt text yang bermanfaat",
          explanation:
            "Alt text yang baik menjawab: *informasi apa yang hilang kalau gambar tidak muncul?* Hindari 'gambar' atau 'foto' (screen reader sudah mengumumkan itu elemen gambar). Untuk gambar **dekoratif murni**, pakai `alt=\"\"` (kosong) — itu memerintahkan screen reader melewatinya. Menghapus atribut alt sama sekali justru membuat screen reader membacakan nama file, yang jauh lebih buruk.",
          example: {
            code: '<!-- informatif: jelaskan isinya -->\n<img src="cuaca.png" alt="Ramalan cuaca: hujan sepanjang Sabtu">\n\n<!-- dekoratif: kosongkan -->\n<img src="garis-hias.svg" alt="">',
            output:
              "Keduanya tampil sama. Screen reader membacakan deskripsi gambar pertama, dan melewati gambar kedua sepenuhnya.",
            note: 'Alt buruk: alt="cuaca.png" atau alt="gambar". Alt baik: menjawab "informasi apa yang hilang jika gambar tidak muncul?".',
          },
          instruction:
            "Buat dua gambar: satu informatif (`src` = `grafik.png`, alt yang deskriptif berisi kata `penjualan`), dan satu dekoratif (`src` = `hiasan.svg`, `alt=\"\"`).",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: '<img[^>]*src="grafik\\.png"[^>]*alt="[^"]*penjualan[^"]*"|<img[^>]*alt="[^"]*penjualan[^"]*"[^>]*src="grafik\\.png"',
              message:
                'Gambar grafik.png harus punya alt deskriptif yang memuat kata "penjualan", misal alt="Grafik penjualan naik tiap bulan".',
            },
            {
              pattern: '<img[^>]*src="hiasan\\.svg"[^>]*alt=""|<img[^>]*alt=""[^>]*src="hiasan\\.svg"',
              message:
                'Gambar dekoratif hiasan.svg harus punya alt="" (kosong) agar dilewati screen reader.',
            },
          ],
          solution:
            '<img src="grafik.png" alt="Grafik penjualan naik setiap bulan sepanjang 2026">\n<img src="hiasan.svg" alt="">',
        },
        {
          kind: "step",
          id: "html-5-2",
          title: "Hierarki heading tanpa lompat",
          explanation:
            "Pengguna screen reader sering menavigasi dengan **melompat antar heading** — seperti membaca daftar isi. Karena itu heading tidak boleh melompat tingkat (h1 → h3 tanpa h2), dan **jangan pilih heading berdasarkan ukuran font**. Butuh teks kecil? Atur dengan CSS, bukan dengan menurunkan tingkat heading.",
          example: {
            code: "<!-- SALAH: melompat dari h1 ke h5 -->\n<h1>Panduan</h1>\n<h5>Langkah Pertama</h5>\n\n<!-- BENAR: turun satu tingkat -->\n<h1>Panduan</h1>\n<h2>Langkah Pertama</h2>",
            output:
              "Versi salah membuat pengguna screen reader merasa ada 3 tingkat bagian yang terlewat. Versi benar strukturnya utuh.",
            note: "Kalau h2 terasa terlalu besar, kecilkan lewat CSS — jangan turunkan tingkat headingnya.",
          },
          instruction:
            "Perbaiki struktur di bawah: ubah heading yang melompat sehingga urutannya menjadi h1 → h2 → h3 dengan benar.",
          starterCode:
            "<h1>Panduan Belajar</h1>\n<h4>Bagian Pertama</h4>\n<h6>Sub-bagian</h6>",
          language: "html",
          tests: [
            {
              pattern: "<h1>[\\s\\S]*</h1>[\\s\\S]*<h2>[\\s\\S]*</h2>[\\s\\S]*<h3>[\\s\\S]*</h3>",
              message:
                "Urutannya harus h1, lalu h2, lalu h3 — ganti h4 menjadi h2 dan h6 menjadi h3.",
            },
            {
              pattern: "^(?![\\s\\S]*<h[456])",
              flags: "i",
              message:
                "Masih ada heading h4/h5/h6 yang membuat urutan melompat. Hapus atau ganti jadi tingkat yang benar.",
            },
          ],
          solution:
            "<h1>Panduan Belajar</h1>\n<h2>Bagian Pertama</h2>\n<h3>Sub-bagian</h3>",
        },
        {
          kind: "step",
          id: "html-5-3",
          title: "Tombol ikon butuh nama",
          explanation:
            "Tombol yang isinya hanya ikon tidak punya teks untuk dibacakan, sehingga screen reader hanya menyebut 'tombol' tanpa menjelaskan fungsinya. `aria-label` memberi nama yang bisa diakses tanpa mengubah tampilan sedikit pun. Ini termasuk temuan paling sering muncul di audit aksesibilitas, terutama pada tombol tutup, menu, dan pencarian. Alternatif lain yang sama diterimanya adalah menaruh teks asli lalu menyembunyikannya secara visual dengan CSS, sehingga tetap terbaca teknologi bantu.",
          example: {
            code: '<!-- screen reader hanya menyebut "tombol" -->\n<button>☰</button>\n\n<!-- sekarang jelas fungsinya -->\n<button aria-label="Buka menu navigasi">☰</button>',
            output:
              "Tampilannya identik. Bedanya, versi kedua dibacakan sebagai 'Buka menu navigasi, tombol'.",
            note: "aria-label menimpa teks yang terlihat sebagai nama yang dibacakan — jadi pakai hanya saat tidak ada teks yang bermakna.",
          },
          instruction:
            "Buat `<button>` berisi karakter `×` dengan `aria-label` bernilai `Tutup dialog`.",
          starterCode: "<button>×</button>",
          language: "html",
          tests: [
            {
              pattern: '<button[^>]*aria-label="Tutup dialog"[^>]*>',
              message:
                'Tambahkan aria-label="Tutup dialog" pada tombol agar screen reader tahu fungsinya.',
            },
          ],
          solution: '<button aria-label="Tutup dialog">×</button>',
        },
        {
          kind: "step",
          id: "html-5-4",
          title: "Pakai elemen native, bukan div yang dipaksa",
          explanation:
            "Aturan pertama ARIA justru menyuruhmu tidak memakai ARIA bila sudah ada elemen HTML yang sesuai. `<div role=\"button\" tabindex=\"0\">` menuntut JavaScript tambahan agar bisa ditekan dengan Enter dan Space, dan bagian itu paling sering terlupa. `<button>` membawa semuanya secara gratis: bisa difokuskan dengan Tab, merespons Enter dan Space, diumumkan sebagai tombol, serta mengikuti pengaturan sistem pengguna. Pola yang sama berlaku untuk link: kalau tujuannya berpindah halaman, pakai `<a>`, bukan div yang diberi event klik.",
          example: {
            code: '<!-- div ini butuh JS tambahan untuk Enter & Space -->\n<div role="button" tabindex="0">Hapus</div>\n\n<!-- gratis: fokus, Enter, Space, semantik -->\n<button>Hapus</button>',
            output:
              "Keduanya bisa diklik mouse, tapi hanya <button> yang otomatis bisa ditekan dengan Enter dan Space.",
            note: "Aturan pertama ARIA: jangan pakai ARIA kalau ada elemen HTML native yang sesuai.",
          },
          instruction:
            "Ganti div yang berpura-pura jadi tombol di bawah menjadi elemen `<button>` yang sebenarnya (teksnya tetap `Simpan`).",
          starterCode: '<div role="button" tabindex="0">Simpan</div>',
          language: "html",
          tests: [
            {
              pattern: "<button[^>]*>\\s*Simpan\\s*</button>",
              message: "Gunakan <button>Simpan</button>.",
            },
            {
              pattern: '^(?![\\s\\S]*role="button")',
              message:
                'Hapus div dengan role="button" — elemen native <button> sudah membawa peran itu sendiri.',
            },
          ],
          solution: "<button>Simpan</button>",
        },
        {
          kind: "step",
          id: "html-5-5",
          title: "Skip link untuk pengguna keyboard",
          explanation:
            "Pengguna keyboard harus menekan Tab melewati seluruh menu sebelum mencapai isi halaman — di navigasi besar itu puluhan kali. **Skip link** adalah link pertama di halaman yang melompat langsung ke konten utama. Ia biasanya disembunyikan sampai difokuskan. Targetnya butuh `id` yang cocok.",
          example: {
            code: '<a href="#isi">Langsung ke isi</a>\n<nav>... 20 link menu ...</nav>\n<main id="isi">\n  <h1>Artikel</h1>\n</main>',
            output:
              "Menekan Tab sekali lalu Enter langsung memindahkan fokus ke <main>, melewati seluruh menu.",
            note: "Tanda # pada href menunjuk ke id elemen di halaman yang sama — keduanya harus sama persis.",
          },
          instruction:
            'Buat link `<a href="#konten">` bertuliskan `Lewati ke konten` di paling atas, lalu `<main id="konten">` berisi `<h1>` apa pun.',
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: '<a[^>]*href="#konten"[^>]*>\\s*Lewati ke konten\\s*</a>',
              message: 'Buat <a href="#konten">Lewati ke konten</a>.',
            },
            {
              pattern: '<main[^>]*id="konten"[^>]*>',
              message:
                'Buat <main id="konten"> — id-nya harus cocok dengan href skip link.',
            },
            {
              pattern: "<main[^>]*>[\\s\\S]*<h1>[\\s\\S]{2,}</h1>[\\s\\S]*</main>",
              message: "Tambahkan <h1> di dalam main.",
            },
          ],
          solution:
            '<a href="#konten">Lewati ke konten</a>\n<nav><a href="/">Beranda</a></nav>\n<main id="konten">\n  <h1>Isi Halaman</h1>\n</main>',
        },
        {
          kind: "quiz",
          id: "html-5-kuis",
          title: "Kuis: Aksesibilitas",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Sebuah ikon panah dekoratif dipakai di samping teks yang sudah jelas. Alt apa yang benar?",
              code: '<img src="panah.svg" alt="???">',
              choices: [
                'alt="gambar panah"',
                'alt="" (kosong)',
                "Hapus atribut alt sepenuhnya",
                'alt="panah.svg"',
              ],
              answerIndex: 1,
              explanation:
                'alt="" memberi tahu screen reader bahwa gambar ini dekoratif dan harus dilewati. Menghapus atribut alt justru membuat sebagian screen reader membacakan nama file ("panah titik svg") — lebih mengganggu.',
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Kenapa struktur heading h1 → h4 (melompati h2 dan h3) bermasalah?",
              choices: [
                "Karena h4 terlalu kecil ukurannya",
                "Karena pengguna screen reader menavigasi antar heading dan lompatan tingkat membuat struktur dokumen menyesatkan",
                "Karena Google melarangnya",
                "Karena h4 tidak valid di HTML5",
              ],
              answerIndex: 1,
              explanation:
                "Heading berfungsi sebagai daftar isi yang bisa dilompati. Lompatan tingkat membuat pengguna berpikir ada bagian yang terlewat. Pilih tingkat berdasarkan struktur, bukan ukuran font — ukuran diatur CSS.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Manakah pendekatan yang benar untuk membuat tombol yang bisa diklik?",
              choices: [
                '<div onclick="...">Kirim</div>',
                '<div role="button" tabindex="0">Kirim</div>',
                "<button>Kirim</button>",
                '<span class="btn">Kirim</span>',
              ],
              answerIndex: 2,
              explanation:
                "<button> membawa semuanya secara gratis: bisa difokuskan dengan Tab, ditekan dengan Enter dan Space, diumumkan sebagai tombol, dan mengikuti pengaturan sistem. Aturan pertama ARIA: jangan pakai ARIA kalau ada elemen native yang sesuai.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Atribut apa yang memberi nama yang bisa diakses pada tombol yang isinya hanya ikon?",
              choices: ["title", "name", "aria-label", "alt"],
              answerIndex: 2,
              explanation:
                'aria-label memberi nama untuk screen reader tanpa menampilkan teks di layar, misal <button aria-label="Tutup dialog">×</button>. Alternatifnya: teks visual yang disembunyikan secara visual (sr-only) — keduanya diterima.',
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apa fungsi 'skip link' di awal halaman?",
              choices: [
                "Mempercepat loading halaman",
                "Membiarkan pengguna keyboard melompat langsung ke konten utama tanpa Tab melewati seluruh menu",
                "Menyembunyikan menu di mobile",
                "Meningkatkan ranking SEO",
              ],
              answerIndex: 1,
              explanation:
                "Skip link menghemat puluhan tekanan Tab bagi pengguna keyboard dan screen reader. Ia biasanya disembunyikan sampai mendapat fokus, dan menunjuk ke id elemen main.",
            },
          ],
        },
      ],
    },
    {
      slug: "html-dunia-kerja",
      title: "HTML untuk Dunia Kerja",
      description:
        "Detail yang membedakan pemula dan profesional: metadata, SEO teknis, dan struktur proyek.",
      topics: [
        "head lengkap: meta charset, viewport, description",
        "Open Graph & Twitter Card untuk share di sosmed",
        "Favicon & manifest dasar",
        "Struktur folder proyek statis yang rapi",
        "Validasi HTML (W3C validator) & error umum",
        "data-* attribute — jembatan ke JavaScript",
        "Studi kasus: membedah HTML halaman produksi",
      ],
      items: [
        {
          kind: "step",
          id: "html-6-1",
          title: "Dua meta tag yang tidak boleh lupa",
          explanation:
            "`<meta charset=\"UTF-8\">` mencegah teks berubah jadi karakter aneh (Ã©, ï¿½) — wajib, dan harus berada di awal `<head>`. `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` membuat halaman menyesuaikan lebar layar HP; **tanpa ini, semua CSS responsive-mu tidak berpengaruh** di mobile dan halaman tampil mengecil seperti versi desktop.",
          example: {
            code: "<!-- head yang MASIH KURANG: viewport belum ada -->\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Toko Kopi</title>\n</head>",
            output: "Huruf beraksen tampil benar, tapi di HP halaman mengecil seperti versi desktop karena viewport belum dideklarasikan.",
            note: "Keduanya wajib ada di setiap halaman. Tanpa viewport, media query CSS-mu tidak akan terasa di HP.",
          },
          instruction:
            "Lengkapi `<head>` dengan meta charset UTF-8 dan meta viewport `width=device-width, initial-scale=1`.",
          starterCode: "<head>\n  <title>BiLearn</title>\n</head>",
          language: "html",
          tests: [
            {
              pattern: '<meta[^>]*charset="?UTF-8"?[^>]*>',
              message: 'Tambahkan <meta charset="UTF-8">.',
            },
            {
              pattern: '<meta[^>]*name="viewport"[^>]*content="width=device-width,\\s*initial-scale=1[^"]*"',
              message:
                'Tambahkan <meta name="viewport" content="width=device-width, initial-scale=1">.',
            },
          ],
          solution:
            '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>BiLearn</title>\n</head>',
        },
        {
          kind: "step",
          id: "html-6-2",
          title: "title dan meta description",
          explanation:
            "`<title>` adalah judul yang tampil di tab browser dan menjadi teks tautan di hasil pencarian, jadi buatlah spesifik — 'Home' tidak memberi tahu apa pun. `<meta name=\"description\">` mengisi cuplikan di bawahnya, sekitar 150 karakter, dan meski bukan faktor peringkat langsung, ia sangat menentukan apakah orang mengeklik hasilmu. Tulis keduanya berbeda di setiap halaman; judul yang sama di seluruh situs membuat mesin pencari sulit membedakan halamanmu. Anggap keduanya sebagai iklan singkat halamanmu di hasil pencarian.",
          example: {
            code: '<title>Resep Nasi Goreng Mudah - Dapur Kita</title>\n<meta name="description" content="Cara membuat nasi goreng enak dalam 15 menit dengan bahan sederhana.">',
            output:
              "Di hasil Google: judul jadi teks biru yang diklik, description jadi cuplikan abu-abu di bawahnya.",
            note: "Judul spesifik ('Resep Nasi Goreng Mudah') jauh lebih baik daripada generik ('Home' atau 'Halaman Utama').",
          },
          instruction:
            "Buat `<title>` berisi `Belajar HTML - BiLearn` dan `<meta name=\"description\">` dengan `content` minimal 30 karakter.",
          starterCode: '<head>\n  <meta charset="UTF-8">\n  \n</head>',
          language: "html",
          tests: [
            {
              pattern: "<title>\\s*Belajar HTML - BiLearn\\s*</title>",
              message: "Buat <title>Belajar HTML - BiLearn</title>.",
            },
            {
              pattern: '<meta[^>]*name="description"[^>]*content="[^"]{30,}"',
              message:
                'Tambahkan <meta name="description" content="..."> dengan isi minimal 30 karakter.',
            },
          ],
          solution:
            '<head>\n  <meta charset="UTF-8">\n  <title>Belajar HTML - BiLearn</title>\n  <meta name="description" content="Belajar HTML dari dasar sampai semantic HTML yang dipakai di dunia kerja.">\n</head>',
        },
        {
          kind: "step",
          id: "html-6-3",
          title: "Open Graph: tampilan saat dibagikan",
          explanation:
            "Saat tautanmu dibagikan di WhatsApp, LinkedIn, atau X, platform-platform itu membaca tag Open Graph untuk menyusun kartu pratinjau. Tanpa tag itu, tautanmu tampil sebagai URL polos dan jauh lebih sedikit diklik. Perhatikan bedanya: Open Graph memakai atribut `property`, sedangkan meta description memakai `name` — tertukar sedikit saja membuatnya gagal tanpa pesan error apa pun. Gambar `og:image` sebaiknya memakai URL absolut lengkap, karena platform luar tidak tahu alamat dasar situsmu.",
          example: {
            code: '<meta property="og:title" content="Resep Nasi Goreng">\n<meta property="og:description" content="Enak, cepat, 15 menit.">\n<meta property="og:image" content="https://dapurkita.id/nasgor.jpg">',
            output:
              "Saat link dibagikan di WhatsApp, muncul kartu berisi gambar, judul, dan deskripsi — bukan URL polos.",
            note: "Ingat: OG memakai property=, sedangkan meta description memakai name=. Salah satu ini gagal tanpa pesan error.",
          },
          instruction:
            "Tambahkan tiga tag Open Graph: `og:title` (isi bebas), `og:description` (isi bebas), dan `og:image` dengan content `https://bilearn.id/preview.png`.",
          starterCode: '<head>\n  <meta charset="UTF-8">\n  <title>BiLearn</title>\n  \n</head>',
          language: "html",
          tests: [
            {
              pattern: '<meta[^>]*property="og:title"[^>]*content="[^"]{3,}"',
              message: 'Tambahkan <meta property="og:title" content="...">.',
            },
            {
              pattern: '<meta[^>]*property="og:description"[^>]*content="[^"]{3,}"',
              message: 'Tambahkan <meta property="og:description" content="...">.',
            },
            {
              pattern: '<meta[^>]*property="og:image"[^>]*content="https://bilearn\\.id/preview\\.png"',
              message:
                'Tambahkan <meta property="og:image" content="https://bilearn.id/preview.png"> — perhatikan pakai property, bukan name.',
            },
          ],
          solution:
            '<head>\n  <meta charset="UTF-8">\n  <title>BiLearn</title>\n  <meta property="og:title" content="BiLearn - Belajar Coding">\n  <meta property="og:description" content="Kurikulum berbasis lowongan kerja nyata.">\n  <meta property="og:image" content="https://bilearn.id/preview.png">\n</head>',
        },
        {
          kind: "step",
          id: "html-6-4",
          title: "Favicon dan stylesheet",
          explanation:
            "Keduanya memakai elemen `<link>` dan yang membedakan fungsinya adalah nilai `rel`: `rel=\"icon\"` untuk favicon di tab browser, `rel=\"stylesheet\"` untuk berkas CSS. `<link>` tidak punya tag penutup. Letakkan stylesheet di dalam `<head>` supaya halaman tidak sempat tampil tanpa gaya sesaat sebelum CSS-nya termuat. Berkas CSS yang dipanggil terlalu banyak juga memperlambat tampilan pertama, jadi gabungkan bila memungkinkan.",
          example: {
            code: '<link rel="icon" href="/logo.png">\n<link rel="stylesheet" href="/css/utama.css">',
            output:
              "Ikon kecil muncul di tab browser, dan seluruh aturan CSS dari utama.css diterapkan ke halaman.",
            note: "Sama-sama <link>, yang membedakan fungsinya adalah nilai rel. Tidak ada tag penutup </link>.",
          },
          instruction:
            "Tambahkan favicon (`href` = `/favicon.ico`) dan stylesheet (`href` = `/style.css`).",
          starterCode: '<head>\n  <meta charset="UTF-8">\n  \n</head>',
          language: "html",
          tests: [
            {
              pattern: '<link[^>]*rel="icon"[^>]*href="/favicon\\.ico"|<link[^>]*href="/favicon\\.ico"[^>]*rel="icon"',
              message: 'Tambahkan <link rel="icon" href="/favicon.ico">.',
            },
            {
              pattern: '<link[^>]*rel="stylesheet"[^>]*href="/style\\.css"|<link[^>]*href="/style\\.css"[^>]*rel="stylesheet"',
              message: 'Tambahkan <link rel="stylesheet" href="/style.css">.',
            },
          ],
          solution:
            '<head>\n  <meta charset="UTF-8">\n  <link rel="icon" href="/favicon.ico">\n  <link rel="stylesheet" href="/style.css">\n</head>',
        },
        {
          kind: "step",
          id: "html-6-5",
          title: "data-* : jembatan ke JavaScript",
          explanation:
            "Butuh menyimpan data di elemen HTML untuk dipakai JavaScript? Jangan menumpangkannya ke `class` atau `id`. Pakai atribut `data-*` — nama bebas setelah `data-`, valid secara resmi, dan diakses lewat `element.dataset`. Contoh: `data-product-id=\"42\"` menjadi `el.dataset.productId`.",
          example: {
            code: '<button data-user-id="7" data-role="admin">Edit</button>\n\n<!-- di JavaScript nanti: -->\n<!-- el.dataset.userId  → "7"     -->\n<!-- el.dataset.role    → "admin" -->',
            output:
              "Tombol tampil normal, tapi membawa data tersembunyi yang siap dibaca JavaScript.",
            note: "data-user-id (tanda hubung) menjadi dataset.userId (camelCase) di JavaScript — konversi otomatis.",
          },
          instruction:
            "Buat `<button>` bertuliskan `Beli` dengan atribut `data-product-id` bernilai `42` dan `data-price` bernilai `50000`.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: '<button[^>]*data-product-id="42"[^>]*>',
              message: 'Tambahkan data-product-id="42" pada button.',
            },
            {
              pattern: '<button[^>]*data-price="50000"[^>]*>',
              message: 'Tambahkan data-price="50000".',
            },
            {
              pattern: "<button[^>]*>\\s*Beli\\s*</button>",
              message: "Teks tombolnya harus `Beli`.",
            },
          ],
          solution:
            '<button data-product-id="42" data-price="50000">Beli</button>',
        },
        {
          kind: "step",
          id: "html-6-6",
          title: "Halaman lengkap: menyatukan semuanya",
          explanation:
            "Sekarang satukan semuanya menjadi satu dokumen utuh: `<!DOCTYPE html>`, atribut `lang`, meta wajib di `<head>`, dan struktur semantik di `<body>`. Deklarasi doctype memberi tahu browser agar memakai mode standar; tanpa itu browser masuk ke mode kompatibilitas lama dan tata letakmu bisa bergeser. `<html lang=\"id\">` membuat screen reader memakai pelafalan bahasa Indonesia — tanpa itu teksmu bisa dibacakan dengan pelafalan Inggris dan nyaris tidak dimengerti. Kerangka ini akan kamu tulis ulang di hampir setiap proyek, jadi hafalkan urutannya sampai otomatis.",
          example: {
            code: "<!-- kerangka lama: doctype, lang, dan viewport belum ada -->\n<html>\n<head>\n  <title>Toko Kopi</title>\n</head>\n<body>\n  <div class=\"atas\">Menu</div>\n  <div class=\"isi\">Selamat datang</div>\n</body>\n</html>",
            output: "Halaman tetap tampil, tapi browser masuk mode kompatibilitas lama, screen reader tidak tahu bahasa halamannya, dan strukturnya hanya div tanpa makna.",
            note: "Ini kerangka yang akan kamu tulis ulang di hampir setiap proyek — hafalkan urutannya sampai otomatis.",
          },
          instruction:
            "Buat dokumen lengkap: `<!DOCTYPE html>`, `<html lang=\"id\">`, `<head>` (charset + viewport + title), dan `<body>` berisi `<header>`, `<main>`, dan `<footer>`.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: "<!DOCTYPE html>",
              message: "Mulai dengan <!DOCTYPE html>.",
            },
            {
              pattern: '<html[^>]*lang="id"[^>]*>',
              message: 'Gunakan <html lang="id">.',
            },
            {
              pattern: '<meta[^>]*charset="?UTF-8"?[^>]*>',
              message: 'Tambahkan <meta charset="UTF-8"> di head.',
            },
            {
              pattern: '<meta[^>]*name="viewport"[^>]*>',
              message: "Tambahkan meta viewport di head.",
            },
            {
              pattern: "<title>[\\s\\S]{3,}</title>",
              message: "Tambahkan <title> dengan isi.",
            },
            {
              pattern: "<body>[\\s\\S]*<header>[\\s\\S]*</header>[\\s\\S]*<main>[\\s\\S]*</main>[\\s\\S]*<footer>[\\s\\S]*</footer>[\\s\\S]*</body>",
              message:
                "Di dalam <body> harus ada <header>, lalu <main>, lalu <footer> berurutan.",
            },
          ],
          solution:
            '<!DOCTYPE html>\n<html lang="id">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Profil Saya - BiLearn</title>\n</head>\n<body>\n  <header>\n    <nav><a href="/">Beranda</a></nav>\n  </header>\n  <main>\n    <h1>Halo, saya belajar HTML</h1>\n  </main>\n  <footer>\n    <p>© 2026</p>\n  </footer>\n</body>\n</html>',
        },
        {
          kind: "quiz",
          id: "html-6-kuis",
          title: "Kuis: HTML untuk Dunia Kerja",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kamu sudah menulis CSS responsive dengan media query, tapi di HP halaman tetap tampil mengecil seperti versi desktop. Apa yang paling mungkin hilang?",
              choices: [
                "meta charset",
                "meta viewport",
                "Open Graph tag",
                "favicon",
              ],
              answerIndex: 1,
              explanation:
                'Tanpa <meta name="viewport" content="width=device-width, initial-scale=1">, browser mobile berasumsi halaman dibuat untuk desktop dan menampilkannya dalam skala kecil — media query-mu tidak akan terasa. Ini bug responsive paling umum bagi pemula.',
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Tag Open Graph di bawah tidak bekerja saat link dibagikan. Kenapa?",
              code: '<meta name="og:title" content="Judul Artikel">',
              choices: [
                "Harus di dalam body, bukan head",
                'Open Graph memakai atribut property, bukan name',
                "content-nya terlalu pendek",
                "og:title sudah tidak didukung",
              ],
              answerIndex: 1,
              explanation:
                'Open Graph memakai property="og:title", bukan name. Ini kesalahan yang gagal secara sunyi — tidak ada error, preview-nya saja tidak muncul. Meta biasa seperti description memakai name, OG memakai property.',
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kamu perlu menyimpan ID produk di elemen tombol untuk dibaca JavaScript. Cara mana yang benar?",
              choices: [
                'class="product-42"',
                'id="42"',
                'data-product-id="42"',
                "Menulis ID di dalam teks tombol",
              ],
              answerIndex: 2,
              explanation:
                "data-* adalah cara resmi menyimpan data kustom di HTML, diakses lewat element.dataset.productId. Menumpangkan data ke class mencampur styling dengan data, dan id harus unik serta bukan tempat menyimpan nilai bisnis.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Atribut apa pada tag <html> yang memberi tahu screen reader bahasa halaman?",
              choices: ["language", "lang", "locale", "charset"],
              answerIndex: 1,
              explanation:
                'lang (misal <html lang="id">) membuat screen reader memakai pelafalan yang benar. Tanpa itu, teks Indonesia bisa dibacakan dengan pelafalan Inggris dan nyaris tidak dimengerti.',
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Kenapa <meta charset=\"UTF-8\"> harus diletakkan di paling awal <head>?",
              choices: [
                "Agar CSS dimuat lebih cepat",
                "Karena browser perlu tahu encoding sebelum mem-parse teks selanjutnya, kalau tidak karakter bisa rusak",
                "Karena aturan validator W3C",
                "Tidak harus, urutannya bebas",
              ],
              answerIndex: 1,
              explanation:
                "Browser membaca dokumen dari atas. Jika encoding dideklarasikan terlambat, teks yang sudah diproses bisa salah ditafsirkan (muncul karakter seperti Ã© atau �). Karena itu charset diletakkan sebagai elemen pertama di head.",
            },
          ],
        },
      ],
    },
  ],
};
