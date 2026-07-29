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
      slug: "persiapan-alat-kerja",
      title: "Persiapan & Alat Kerja",
      description:
        "Sebelum menulis satu tag pun: berkas .html pertamamu, editor, dan cara browser membacanya.",
      topics: [
        "Apa yang dikerjakan HTML — dan apa yang bukan tugasnya",
        "Tiga alat yang kamu butuhkan: editor, browser, folder proyek",
        "Kenapa halaman utama selalu bernama index.html",
        "Kerangka minimum halaman: doctype, html, head, body",
        "Head vs body: yang tidak terlihat dan yang terlihat",
        "Potongan kode vs dokumen utuh (dan apa yang kamu tulis di editor BiLearn)",
      ],
      items: [
        {
          kind: "materi",
          id: "html-0-m1",
          title: "Apa Itu HTML, dan Apa yang Perlu Kamu Siapkan",
          body:
            "# Pengertian\n\n" +
            "HTML adalah **bahasa penanda** (*markup language*). Kamu menulis teks biasa, lalu menempelkan penanda di sekelilingnya untuk memberi tahu browser peran teks itu: \"ini judul\", \"ini paragraf\", \"ini gambar\", \"ini tombol kirim\".\n\n" +
            "Perlu diluruskan sejak awal: HTML **bukan** bahasa pemrograman. Ia tidak bisa menghitung, mengambil keputusan, menyimpan data, atau mengulang sesuatu. Ia hanya menyusun dan menamai isi halaman. Itu bukan kelemahan — justru pembagian tugas yang membuat web bisa dirawat.\n\n" +
            "| Lapisan | Tugasnya | Contoh pertanyaan yang dijawabnya |\n" +
            "|---|---|---|\n" +
            "| **HTML** | struktur & makna | bagian mana yang judul, mana yang daftar? |\n" +
            "| **CSS** | tampilan | warnanya apa, ukurannya berapa, letaknya di mana? |\n" +
            "| **JavaScript** | perilaku | apa yang terjadi saat tombol ini diklik? |\n\n" +
            "Ketiganya kamu pelajari berurutan di BiLearn, dan urutan itu bukan kebetulan: CSS tidak punya apa pun untuk diwarnai kalau HTML-nya belum ada.\n\n" +
            "## Cara Browser Membaca Berkasmu\n\n" +
            "```text\n" +
            "index.html          ← kamu menulis di sini (teks + penanda)\n" +
            "    |\n" +
            "    |  browser membaca dari atas ke bawah\n" +
            "    v\n" +
            "pohon elemen        ← browser menyusun daftar bertingkat: siapa di dalam siapa\n" +
            "    |\n" +
            "    |  browser menggambar\n" +
            "    v\n" +
            "halaman yang kamu lihat\n" +
            "```\n\n" +
            "Satu hal penting yang membedakan HTML dari hampir semua bahasa lain: **browser tidak pernah menolak kodemu.** Tag yang lupa ditutup atau penanda yang salah tempat tidak memunculkan pesan error — browser menebak sendiri, lalu menampilkan sesuatu yang mungkin bukan maksudmu. Karena itu ketelitian menutup tag jauh lebih penting di sini daripada terlihatnya.\n\n" +
            "## Tiga Alat yang Kamu Butuhkan\n\n" +
            "1. **Editor kode** — Visual Studio Code paling umum dipakai, gratis, tersedia untuk Windows, macOS, dan Linux. Notepad juga bisa, tapi kamu kehilangan pewarnaan sintaks yang membantu melihat tag yang belum tertutup.\n" +
            "2. **Browser** — Chrome, Firefox, atau Edge. Yang mana saja, karena HTML dasar berperilaku sama di semuanya.\n" +
            "3. **Satu folder khusus** — misalnya `latihan-html` di Documents. Semua berkas latihanmu tinggal di sana supaya tidak tercampur.\n\n" +
            "Alurnya sesederhana ini: buat berkas `index.html` di folder itu → tulis kode → simpan dengan Ctrl+S (atau Cmd+S) → klik dua kali berkasnya, ia terbuka di browser. Setelah mengubah kode, **simpan dulu, lalu tekan F5** di browser untuk melihat hasilnya.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "HTML itu seperti **denah bangunan beserta papan nama ruangannya**. Denah tidak menentukan warna dinding atau jenis lampu (itu CSS), dan tidak mengurus pintu otomatis (itu JavaScript). Tapi tanpa denah, tukang tidak tahu mana ruang tamu dan mana kamar mandi — dan siapa pun yang datang kemudian akan salah menebak.\n\n" +
            "Papan nama itu bagian pentingnya. Bukan cuma manusia yang membacanya: mesin pencari memakainya untuk memahami halamanmu, dan *screen reader* — perangkat lunak yang membacakan halaman untuk pengguna tunanetra — sepenuhnya bergantung padanya.\n\n" +
            "## Anatomi Berkas HTML\n\n" +
            "```html\n" +
            "<!DOCTYPE html>          <!-- pakai aturan HTML modern -->\n" +
            "<html lang=\"id\">         <!-- halaman ini berbahasa Indonesia -->\n" +
            "<head>\n" +
            "  <title>Halo</title>    <!-- judul di TAB browser, bukan di halaman -->\n" +
            "</head>\n" +
            "<body>\n" +
            "  <h1>Halo</h1>          <!-- semua yang TERLIHAT ada di sini -->\n" +
            "</body>\n" +
            "</html>\n" +
            "```\n\n" +
            "Aturan pembagiannya cuma satu kalimat: **`head` untuk keterangan tentang halaman, `body` untuk isi yang dilihat pengunjung.**\n\n" +
            "## Jebakan yang Menjatuhkan Hampir Semua Pemula\n\n" +
            "1. **Menyimpan tanpa ekstensi `.html`.** Berkas bernama `halaman` atau `halaman.txt` akan dibuka browser sebagai teks polos — kamu melihat tag-nya sendiri di layar, bukan hasilnya.\n" +
            "2. **Mengetik di aplikasi pengolah kata.** Word menyimpan format tersembunyi dan mengubah tanda kutip lurus `\"` menjadi kutip miring `”` yang tidak dikenali HTML. Pakai editor kode.\n" +
            "3. **Lupa menyimpan sebelum menyegarkan browser.** Berkas yang belum disimpan tidak berubah, dan orang bisa kehilangan waktu lama mencari kesalahan yang sebenarnya tidak ada.\n" +
            "4. **Mengharapkan HTML melakukan pekerjaan JavaScript.** Kalau kamu butuh halaman yang menghitung atau mengingat sesuatu, itu bukan tugas HTML.\n\n" +
            "## Tentang Panel Editor di BiLearn\n\n" +
            "> **Penting supaya kamu tidak bingung:** di latihan-latihan berikutnya kamu biasanya hanya menulis **potongan isi `body`** — misalnya satu `<h1>` saja. Kerangka `<!DOCTYPE html>`, `<head>`, dan `<body>` dipasang otomatis oleh panel preview supaya latihannya tetap singkat. Di komputermu sendiri, potongan itu harus kamu letakkan di dalam kerangka lengkap seperti contoh di atas. Modul terakhir track ini melatih kerangka lengkapnya sekali lagi.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** setiap halaman web yang pernah kamu buka adalah berkas HTML. Di pekerjaan nyata kamu memang jarang membuat berkasnya dari nol — biasanya kamu mengedit *template* di dalam React, Laravel, atau WordPress. Tapi yang kamu edit di sana tetap HTML, dan orang yang tidak paham strukturnya akan menghasilkan halaman yang tampak benar di layar namun kacau bagi mesin pencari dan pengguna screen reader. Itu jenis kesalahan yang muncul di code review, bukan di layar.",
        },
        {
          kind: "step",
          id: "html-0-1",
          title: "Menamai Berkas Halaman Utama",
          explanation:
            "Nama berkas di web bukan sekadar selera, karena ada satu nama yang diperlakukan istimewa oleh hampir semua server: `index.html`. Ketika seseorang membuka alamat situsmu tanpa menyebut nama berkas apa pun, server mencari `index.html` di folder itu dan menyajikannya. Berkas lain tetap boleh bernama apa saja, tapi harus disebut lengkap di alamatnya, misalnya `/kontak.html`. Kebiasaan yang dipakai di lapangan: tulis nama berkas dengan **huruf kecil semua dan tanpa spasi**, pakai tanda hubung bila perlu (`tentang-kami.html`), karena banyak server membedakan huruf besar-kecil sehingga `Index.html` bisa dianggap berkas yang sama sekali lain.",
          example: {
            code:
              "situsku/\n" +
              "  index.html      -> dibuka lewat alamat /\n" +
              "  kontak.html     -> dibuka lewat alamat /kontak.html\n" +
              "  Profil Saya.html -> bermasalah: ada huruf besar dan spasi",
            output:
              "Membuka https://situsku.id/ menampilkan isi index.html tanpa perlu menyebut nama berkasnya.\n" +
              "Membuka https://situsku.id/kontak.html menampilkan isi kontak.html.\n" +
              "Alamat untuk berkas ketiga menjadi /Profil%20Saya.html — spasi berubah jadi %20 dan mudah salah ketik.",
            note: "Spasi pada nama berkas selalu berubah menjadi %20 di alamat web. Itu sah, tapi membuat tautan sulit dibaca dan sering salah disalin.",
          },
          instruction:
            "Kamu baru saja membuat folder proyek kosong dan akan membuat berkas pertama untuk halaman depan situsmu. Tulis nama berkas yang tepat untuk halaman utama itu, lengkap dengan ekstensinya, mengikuti kebiasaan penamaan yang dipakai di lapangan.",
          starterCode: "# Tulis nama berkasnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(^|\\s)index\\.html(\\s|$)",
              flags: "",
              message:
                "Belum tepat. Nama berkas yang dicari server saat alamat dibuka tanpa nama berkas adalah nama yang berarti \"daftar isi\" — tulis semuanya dengan huruf kecil dan jangan lupa ekstensi `.html`.",
            },
          ],
          solution: "index.html",
          susunKode: {
            question:
              "Rangkai nama berkas untuk halaman utama situsmu, lengkap dengan ekstensinya.",
            potongan: [
              "index",
              ".html",
            ],
            pengecoh: [
              "home",
              ".txt",
              "Index",
            ],
            pemisah: "",
            explanation:
              "Nama `index.html` diperlakukan istimewa oleh hampir semua server web: ia yang disajikan saat alamat dibuka tanpa menyebut nama berkas. Keping `home` menggoda karena artinya \"rumah\" dan terdengar seperti halaman depan, padahal server tidak mengenalinya secara otomatis. Keping `.txt` adalah jebakan bagi yang lupa mengganti ekstensi — berkasnya terbuka sebagai teks biasa, bukan halaman web. Keping `Index` berhuruf besar: banyak server membedakan huruf besar-kecil, sehingga `Index.html` dianggap berkas yang lain sama sekali dan pengunjung mendapat halaman 404.",
          },
        },
        {
          kind: "step",
          id: "html-0-2",
          title: "Kerangka Minimum Sebuah Halaman",
          explanation:
            "Setiap berkas HTML yang utuh punya empat bagian dengan urutan yang selalu sama. `<!DOCTYPE html>` di baris pertama memberi tahu browser agar memakai aturan HTML modern; tanpa itu browser masuk ke mode kompatibilitas lama dan tata letakmu bisa bergeser tanpa sebab yang jelas. `<html>` membungkus seluruh dokumen, dan atribut `lang` di dalamnya menyebutkan bahasa halaman — `lang=\"id\"` membuat screen reader melafalkan teksmu sebagai bahasa Indonesia, bukan Inggris. Lalu ada dua ruangan: `<head>` berisi keterangan tentang halaman yang tidak tampil di layar, dan `<body>` berisi semua yang dilihat pengunjung. Jebakan yang paling sering terjadi: menaruh isi halaman di dalam `<head>` sehingga tidak muncul apa-apa, padahal kodenya \"terlihat benar\".",
          example: {
            code:
              "<!DOCTYPE html>\n" +
              "<html lang=\"id\">\n" +
              "<head>\n" +
              "  <title>Toko Kopi Nusantara</title>\n" +
              "</head>\n" +
              "<body>\n" +
              "  <h1>Selamat datang di Toko Kopi</h1>\n" +
              "</body>\n" +
              "</html>",
            output:
              "Tab browser bertuliskan 'Toko Kopi Nusantara', sedangkan di halaman tampil satu judul besar 'Selamat datang di Toko Kopi'. Teks di dalam title TIDAK muncul di halaman.",
            note: "Perhatikan indentasi: head dan body berada satu tingkat di dalam html, dan isinya menjorok satu tingkat lagi. Indentasi tidak memengaruhi tampilan, tapi sangat memengaruhi kemampuanmu membaca ulang kodemu.",
          },
          instruction:
            "Tulis kerangka utuh sebuah halaman profil dari nol: deklarasi doctype, elemen pembungkus dokumen dengan bahasa Indonesia, bagian keterangan yang memuat judul tab `Profil Bimo`, dan bagian isi yang memuat satu judul utama bertuliskan `Bimo Aresdaffa`.",
          starterCode: "<!-- tulis kerangka lengkapnya di bawah ini -->\n",
          language: "html",
          tests: [
            {
              pattern: "<!DOCTYPE\\s+html>",
              message:
                "Baris pertama harus deklarasi doctype: `<!DOCTYPE html>`. Ini yang memberi tahu browser agar memakai aturan HTML modern.",
            },
            {
              pattern: "<html[^>]*lang=['\"]id['\"][^>]*>",
              message:
                "Elemen pembungkusnya adalah `<html>`, dan bahasanya disebut lewat atribut `lang` bernilai `id`.",
            },
            {
              pattern: "<head>[\\s\\S]*<title>\\s*Profil Bimo\\s*</title>[\\s\\S]*</head>",
              message:
                "Judul tab ditulis dengan `<title>` dan harus berada di dalam `<head>`, bukan di `<body>`.",
            },
            {
              pattern: "<body>[\\s\\S]*<h1>\\s*Bimo Aresdaffa\\s*</h1>[\\s\\S]*</body>",
              message:
                "Judul utama halaman ditulis dengan `<h1>` dan harus berada di dalam `<body>` supaya terlihat pengunjung.",
            },
          ],
          solution:
            "<!DOCTYPE html>\n" +
            "<html lang=\"id\">\n" +
            "<head>\n" +
            "  <title>Profil Bimo</title>\n" +
            "</head>\n" +
            "<body>\n" +
            "  <h1>Bimo Aresdaffa</h1>\n" +
            "</body>\n" +
            "</html>",
          susunKode: {
            question:
              "Susun kerangka utuh sebuah halaman profil: doctype, pembungkus dokumen berbahasa Indonesia, bagian keterangan berisi judul tab `Profil Bimo`, dan bagian isi berisi judul utama `Bimo Aresdaffa`.",
            potongan: [
              "<!DOCTYPE html>",
              "<html lang=\"id\">",
              "<head>",
              "<title>Profil Bimo</title>",
              "</head>",
              "<body>",
              "<h1>Bimo Aresdaffa</h1>",
              "</body>",
              "</html>",
            ],
            pengecoh: [
              "<html lang=\"en\">",
              "<h1>Profil Bimo</h1>",
              "<title>Bimo Aresdaffa</title>",
            ],
            pemisah: "\n",
            explanation:
              "Urutannya selalu sama: doctype, lalu `<html>`, lalu `<head>` yang berisi keterangan, baru `<body>` yang berisi apa yang dilihat pengunjung. Keping `<html lang=\"en\">` menggoda karena hampir semua contoh di internet berbahasa Inggris, padahal `lang` menentukan bagaimana screen reader melafalkan teksmu — halaman Indonesia yang ditandai `en` akan dibacakan dengan lafal Inggris. Dua keping sisanya menukar isi `<title>` dengan isi `<h1>`; itu kekeliruan yang sering terjadi karena keduanya sama-sama terasa seperti \"judul\", padahal `<title>` hanya muncul di tab dan `<h1>` hanya muncul di halaman.",
          },
        },
        {
          kind: "step",
          id: "html-0-3",
          title: "Head vs Body: Menaruh Sesuatu di Tempatnya",
          explanation:
            "Pembagiannya bisa diringkas satu kalimat: `<head>` menjawab \"halaman ini tentang apa\", `<body>` menjawab \"apa yang dilihat pengunjung\". Karena itu `<title>`, keterangan bahasa, tautan ke berkas CSS, dan keterangan untuk mesin pencari semuanya tinggal di `<head>` dan tidak satu pun tampil di layar. Sebaliknya judul, paragraf, gambar, daftar, dan tombol harus berada di `<body>`. Gejala khas kalau keduanya tertukar: halaman tampak kosong padahal kodemu penuh, atau teks judul tab malah tercetak di tengah halaman. Browser tidak akan menegurmu — ia hanya menampilkan hasil yang aneh, dan inilah salah satu latihan membaca kesalahan paling berguna di awal belajar HTML.",
          example: {
            code:
              "<!-- SALAH: paragraf diletakkan di head -->\n" +
              "<head>\n" +
              "  <p>Selamat datang</p>\n" +
              "</head>\n\n" +
              "<!-- BENAR -->\n" +
              "<head>\n" +
              "  <title>Beranda</title>\n" +
              "</head>\n" +
              "<body>\n" +
              "  <p>Selamat datang</p>\n" +
              "</body>",
            output:
              "Versi pertama menampilkan halaman kosong — browser mengabaikan paragraf yang berada di head. Versi kedua menampilkan tulisan 'Selamat datang' di halaman, dengan tab bertuliskan 'Beranda'.",
            note: "Kalau halamanmu tampak kosong padahal kode sudah ditulis, periksa dulu: apakah isinya nyasar ke dalam head?",
          },
          instruction:
            "Dokumen di editor sudah lengkap kerangkanya, tapi dua isinya tertukar ruangan sehingga judul tab tidak muncul di tab dan judul halaman tidak muncul di halaman. Pindahkan masing-masing ke bagian yang benar tanpa mengubah tulisannya.",
          starterCode:
            "<!DOCTYPE html>\n" +
            "<html lang=\"id\">\n" +
            "<head>\n" +
            "  <h1>Menu Hari Ini</h1>\n" +
            "</head>\n" +
            "<body>\n" +
            "  <title>Warung Bu Sri</title>\n" +
            "</body>\n" +
            "</html>\n",
          language: "html",
          tests: [
            {
              pattern:
                "<head>(?:(?!</head>)[\\s\\S])*<title>\\s*Warung Bu Sri\\s*</title>",
              message:
                "Pindahkan `<title>Warung Bu Sri</title>` ke dalam `<head>` — judul tab adalah keterangan tentang halaman, bukan isi halaman.",
            },
            {
              pattern:
                "<body>(?:(?!</body>)[\\s\\S])*<h1>\\s*Menu Hari Ini\\s*</h1>",
              message:
                "Pindahkan `<h1>Menu Hari Ini</h1>` ke dalam `<body>` — hanya isi body yang tampil di layar.",
            },
            {
              pattern: "<head>(?:(?!</head>)[\\s\\S])*<h1",
              mustNotMatch: true,
              message:
                "Masih ada `<h1>` yang tertinggal di dalam `<head>`. Browser akan mengabaikannya, jadi pindahkan seluruhnya ke `<body>`.",
            },
          ],
          solution:
            "<!DOCTYPE html>\n" +
            "<html lang=\"id\">\n" +
            "<head>\n" +
            "  <title>Warung Bu Sri</title>\n" +
            "</head>\n" +
            "<body>\n" +
            "  <h1>Menu Hari Ini</h1>\n" +
            "</body>\n" +
            "</html>",
          susunKode: {
            question:
              "Susun dokumen ini supaya judul tab `Warung Bu Sri` berada di tempat yang benar, dan judul halaman `Menu Hari Ini` juga di tempatnya.",
            potongan: [
              "<!DOCTYPE html>",
              "<html lang=\"id\">",
              "<head>",
              "<title>Warung Bu Sri</title>",
              "</head>",
              "<body>",
              "<h1>Menu Hari Ini</h1>",
              "</body>",
              "</html>",
            ],
            pengecoh: [
              "<title>Menu Hari Ini</title>",
              "<h1>Warung Bu Sri</h1>",
              "<head><h1>Menu Hari Ini</h1></head>",
            ],
            pemisah: "\n",
            explanation:
              "`<head>` menjawab \"halaman ini tentang apa\", `<body>` menjawab \"apa yang dilihat pengunjung\". Karena itu nama warung ada di `<title>` dan judul isi ada di `<h1>` di dalam `<body>`. Dua keping pertama menukar isi keduanya — kekeliruan yang sering terjadi karena sama-sama terasa seperti judul. Keping ketiga memasukkan `<h1>` ke dalam `<head>`, dan inilah jebakan yang paling membingungkan pemula: browser tidak menampilkan pesan error apa pun, halamannya hanya tampak kosong, sehingga orang mengira dirinya yang salah menulis kode padahal ia cuma salah ruangan.",
          },
        },
        {
          kind: "step",
          id: "html-0-4",
          title: "Potongan Kode vs Dokumen Utuh",
          explanation:
            "Mulai modul berikutnya, hampir semua latihan di BiLearn hanya memintamu menulis **potongan isi `body`** — satu heading, satu daftar, satu formulir — supaya latihannya singkat dan fokus pada satu hal. Panel preview memasang kerangka dokumennya untukmu di balik layar. Itu memang mempercepat belajar, tapi menyimpan satu risiko: kalau kamu tidak sadar sedang menulis potongan, kamu akan menyalin latihan itu ke komputermu, membukanya di browser, dan bingung karena hasilnya tidak sebagus di layar latihan. Aturan yang perlu kamu pegang: **di BiLearn tulis potongannya, di komputermu bungkus potongan itu dengan kerangka lengkap** yang baru kamu latih di step sebelumnya.",
          example: {
            code:
              "<!-- dokumen utuh: yang kamu simpan sebagai index.html -->\n" +
              "<!DOCTYPE html>\n" +
              "<html lang=\"id\">\n" +
              "<head>\n" +
              "  <title>Blog Saya</title>\n" +
              "</head>\n" +
              "<body>\n" +
              "  <h1>Catatan Belajar</h1>\n" +
              "  <p>Hari ini saya belajar HTML.</p>\n" +
              "</body>\n" +
              "</html>\n\n" +
              "<!-- potongan yang setara: yang kamu tulis di editor latihan -->\n" +
              "<h1>Catatan Belajar</h1>\n" +
              "<p>Hari ini saya belajar HTML.</p>",
            output:
              "Keduanya menampilkan halaman yang sama persis di preview BiLearn. Bedanya, hanya versi pertama yang bisa langsung disimpan sebagai berkas dan dibuka di browser komputermu.",
            note: "Potongan bukan versi \"salah\" — ia hanya belum dibungkus. Yang salah adalah menyimpan potongan sebagai berkas lalu mengira kerangkanya tidak perlu.",
          },
          instruction:
            "Editor sudah berisi satu dokumen utuh. Ambil hanya bagian yang benar-benar tampil di layar, lalu tulis ulang sebagai potongan: buang deklarasi doctype, elemen pembungkus dokumen, seluruh bagian keterangan, dan tag `body` itu sendiri. Isi yang terlihat harus tetap sama.",
          starterCode:
            "<!DOCTYPE html>\n" +
            "<html lang=\"id\">\n" +
            "<head>\n" +
            "  <title>Warung Bu Sri</title>\n" +
            "</head>\n" +
            "<body>\n" +
            "  <h2>Menu Hari Ini</h2>\n" +
            "  <p>Nasi rames, soto ayam, dan es teh.</p>\n" +
            "</body>\n" +
            "</html>\n",
          language: "html",
          tests: [
            {
              pattern: "<h2>\\s*Menu Hari Ini\\s*</h2>",
              message:
                "Isi yang terlihat harus tetap ada. Pertahankan `<h2>Menu Hari Ini</h2>`.",
            },
            {
              pattern: "<p>\\s*Nasi rames[\\s\\S]*</p>",
              message:
                "Paragrafnya juga bagian yang terlihat — pertahankan `<p>` beserta isinya.",
            },
            {
              // Sengaja memakai [\s>] setelah nama tag: pola `<head` tanpa itu
              // juga cocok dengan `<header>`, sehingga potongan yang memakai
              // elemen semantik akan ditolak padahal jawabannya benar.
              pattern: "<!DOCTYPE|<html[\\s>]|<head[\\s>]|<title[\\s>]|<body[\\s>]",
              mustNotMatch: true,
              message:
                "Masih ada bagian kerangka yang tertinggal. Sebuah potongan hanya memuat isi yang terlihat: tanpa doctype, tanpa `<html>`, tanpa `<head>`, tanpa `<title>`, dan tanpa tag `<body>`.",
            },
          ],
          solution:
            "<h2>Menu Hari Ini</h2>\n" +
            "<p>Nasi rames, soto ayam, dan es teh.</p>",
          susunKode: {
            question:
              "Susun ulang isi yang benar-benar tampil di layar sebagai potongan kode saja — tanpa kerangka dokumen.",
            potongan: [
              "<h2>Menu Hari Ini</h2>",
              "<p>Nasi rames, soto ayam, dan es teh.</p>",
            ],
            pengecoh: [
              "<!DOCTYPE html>",
              "<html lang=\"id\">",
              "<body>",
              "</body>",
            ],
            pemisah: "\n",
            explanation:
              "Di panel latihan BiLearn kamu cukup menulis isi `<body>`-nya saja; kerangka dokumennya dipasangkan di balik layar. Keping doctype, `<html>`, dan `<body>` sengaja disediakan karena sangat menggoda: kamu baru saja berlatih menulisnya di step sebelumnya, jadi tanganmu ingin memasangnya lagi. Di sini justru itu yang keliru — memasang kerangka di dalam kerangka menghasilkan dokumen bertumpuk. Yang perlu kamu bawa pulang: di BiLearn tulis potongannya, di komputermu sendiri barulah potongan itu dibungkus kerangka lengkap.",
          },
        },
        {
          kind: "quiz",
          id: "html-0-kuis",
          title: "Kuis: Persiapan & Alat Kerja",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Seseorang membuka `https://tokoku.id/` tanpa menyebut nama berkas apa pun. Berkas mana yang dicari server?",
              choices: [
                "home.html",
                "index.html",
                "utama.html",
                "Berkas apa saja yang paling dulu dibuat",
              ],
              answerIndex: 1,
              explanation:
                "`index.html` adalah nama yang diperlakukan istimewa: server menyajikannya saat alamat dibuka tanpa nama berkas. `home.html` menggoda karena namanya terasa paling masuk akal dalam bahasa Inggris, tapi ia harus disebut lengkap di alamatnya (`/home.html`) dan tidak akan terpanggil sendiri.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Apa fungsi baris `<!DOCTYPE html>` di awal berkas?",
              choices: [
                "Memberi tahu browser agar memakai aturan HTML modern",
                "Menyatakan judul halaman",
                "Memuat berkas CSS secara otomatis",
                "Menandai bahwa halaman memakai bahasa Indonesia",
              ],
              answerIndex: 0,
              explanation:
                "Doctype memilih mode penafsiran browser. Tanpanya browser masuk mode kompatibilitas lama, dan tata letak bisa bergeser tanpa pesan error apa pun. Pilihan tentang bahasa menggoda karena keduanya sama-sama ditulis di baris awal — tapi bahasa dinyatakan lewat atribut `lang` pada `<html>`, bukan lewat doctype.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kamu menulis `<p>Selamat datang</p>` tapi halaman tampil kosong. Kode ditulis di dalam `<head>`. Kenapa tidak muncul?",
              choices: [
                "Karena paragraf butuh atribut tambahan",
                "Karena head hanya untuk keterangan tentang halaman, bukan isi yang ditampilkan",
                "Karena browsernya perlu diperbarui",
                "Karena `<p>` harus ditulis huruf kapital",
              ],
              answerIndex: 1,
              explanation:
                "Semua yang terlihat pengunjung harus berada di `<body>`. Isi yang nyasar ke `<head>` diabaikan browser tanpa pesan error — inilah kenapa \"halaman kosong padahal kode ada\" adalah gejala pertama yang harus membuatmu memeriksa pembagian head dan body.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Manakah pernyataan yang benar tentang HTML?",
              choices: [
                "HTML adalah bahasa pemrograman yang bisa menghitung dan mengambil keputusan",
                "HTML adalah bahasa penanda yang menyusun dan menamai isi halaman",
                "HTML mengatur warna dan tata letak halaman",
                "HTML dibutuhkan hanya kalau halaman punya gambar",
              ],
              answerIndex: 1,
              explanation:
                "HTML menandai peran tiap bagian isi — judul, paragraf, daftar — dan tidak punya kemampuan menghitung atau mengambil keputusan. Pilihan tentang warna dan tata letak sangat menggoda karena hasil akhirnya memang terlihat, tapi itu pekerjaan CSS; HTML menyediakan isinya untuk diwarnai.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Kamu menyimpan kode HTML-mu sebagai `halaman.txt` lalu membukanya di browser. Apa yang terjadi?",
              choices: [
                "Halaman tampil normal karena isinya tetap HTML",
                "Browser menampilkan kodenya sebagai teks polos, lengkap dengan tag-tagnya",
                "Browser menolak membuka berkasnya",
                "Tag HTML otomatis dihapus dan hanya teksnya tampil rapi",
              ],
              answerIndex: 1,
              explanation:
                "Browser memutuskan cara menampilkan berkas dari ekstensinya. Dengan `.txt` ia menganggap isinya teks biasa, jadi tag-tagnya ikut tercetak di layar. Pilihan \"menolak membuka\" menggoda karena terasa seperti error, padahal browser tidak pernah menolak — ia hanya menampilkan hasil yang bukan maksudmu, dan itulah yang membuat kesalahan ini sulit disadari.",
            },
          ],
        },
      ],
    },
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
          kind: "materi",
          id: "html-1-m1",
          title: "Elemen, Tag, dan Atribut — Tata Bahasa HTML",
          body:
            "# Pengertian\n\n" +
            "Seluruh HTML dibangun dari satu pola yang diulang terus: **elemen**. Satu elemen terdiri dari tag pembuka, isi, dan tag penutup.\n\n" +
            "```text\n" +
            "<p class=\"catatan\">Kopi tanpa gula.</p>\n" +
            " ^  ^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^ ^^^^\n" +
            " |        |                |            |\n" +
            " |        |                |            tag penutup (ada garis miring)\n" +
            " |        |                isi yang dilihat pengunjung\n" +
            " |        atribut: keterangan tambahan, selalu di tag PEMBUKA\n" +
            " nama elemen\n" +
            "```\n\n" +
            "Nama elemen menentukan **maknanya**, bukan tampilannya. `<h1>` berarti \"judul terpenting halaman ini\", bukan \"tulisan besar\". Perbedaan ini terasa akibatnya nanti: mesin pencari dan screen reader membaca maknanya, sedangkan ukuran huruf gampang diubah CSS kapan saja.\n\n" +
            "## Dua Bentuk Tag\n\n" +
            "| Bentuk | Contoh | Kenapa begitu |\n" +
            "|---|---|---|\n" +
            "| Berpasangan | `<p>...</p>`, `<h1>...</h1>`, `<li>...</li>` | ada isi di antara pembuka dan penutup |\n" +
            "| Tunggal | `<img>`, `<br>`, `<hr>`, `<input>` | tidak punya isi, semua keterangannya lewat atribut |\n\n" +
            "Tag tunggal tidak punya versi penutup. Menulis `</img>` bukan sekadar tidak perlu — ia tidak dikenal sama sekali.\n\n" +
            "## Nesting: Siapa di Dalam Siapa\n\n" +
            "Elemen boleh berada di dalam elemen lain, dan urutan penutupannya harus **terbalik** dari urutan pembukaannya — seperti tanda kurung dalam matematika:\n\n" +
            "```text\n" +
            "BENAR   <li> <strong> Kopi </strong> </li>\n" +
            "        buka1  buka2        tutup2   tutup1\n\n" +
            "SALAH   <li> <strong> Kopi </li> </strong>\n" +
            "                           ^ menutup induk sebelum anaknya selesai\n" +
            "```\n\n" +
            "Browser tidak menolak versi salah. Ia menebak maksudmu, dan tebakannya kadang membuat sebagian halaman ikut masuk ke tempat yang tidak kamu inginkan. Karena itu **indentasi** — menjorokkan setiap tingkat satu langkah ke dalam — bukan soal kerapian, melainkan cara tercepat melihat pasangan tag yang belum tertutup.\n\n" +
            "## Atribut yang Akan Kamu Pakai Terus\n\n" +
            "| Atribut | Isinya | Dipakai untuk |\n" +
            "|---|---|---|\n" +
            "| `href` | alamat tujuan | pada `<a>`: halaman mana yang dibuka |\n" +
            "| `src` | lokasi berkas | pada `<img>`, `<video>`: berkas mana yang dimuat |\n" +
            "| `alt` | deskripsi teks | pengganti gambar bagi screen reader & saat gambar gagal |\n" +
            "| `id` | nama unik | satu elemen saja per halaman; target tautan `#nama` |\n" +
            "| `class` | nama kelompok | boleh berulang; pegangan utama CSS |\n\n" +
            "Nilai atribut selalu ditulis di antara tanda kutip: `class=\"kartu\"`. Kutip lurus (`\"`), bukan kutip miring hasil salin-tempel dari Word.\n\n" +
            "## Heading Bukan Ukuran Huruf, tapi Daftar Isi\n\n" +
            "```text\n" +
            "h1  Buku Resep Nusantara        ← satu per halaman: topik utama\n" +
            "  h2  Bab 1: Sarapan\n" +
            "    h3  Telur Dadar\n" +
            "    h3  Bubur Ayam\n" +
            "  h2  Bab 2: Makan Malam\n" +
            "```\n\n" +
            "Pengguna screen reader benar-benar menavigasi dengan melompat antar heading, seperti kamu membaca daftar isi buku. Karena itu memilih `h4` \"karena ukurannya pas\" merusak daftar isi tak terlihat itu. Butuh teks lebih kecil? Itu pekerjaan CSS.\n\n" +
            "## Memilih Format Gambar\n\n" +
            "| Format | Paling cocok untuk | Catatan |\n" +
            "|---|---|---|\n" +
            "| `.jpg` | foto | ukuran kecil, tapi kualitas menurun tiap kali disimpan ulang |\n" +
            "| `.png` | gambar dengan latar transparan, tangkapan layar | tajam, ukurannya lebih besar |\n" +
            "| `.svg` | logo, ikon, diagram | tetap tajam di ukuran apa pun karena berupa gambar vektor |\n" +
            "| `.webp` | pengganti modern jpg & png | ukuran lebih kecil, didukung semua browser saat ini |\n" +
            "| `.gif` | animasi pendek sederhana | warna terbatas; untuk video pakai `<video>`, jauh lebih ringan |\n\n" +
            "> **Kapan dipakai:** ini keputusan sehari-hari yang berdampak langsung ke kecepatan halaman. Mengunggah foto kamera 4 MB apa adanya adalah penyebab paling umum halaman terasa berat di jaringan seluler.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Elemen HTML itu seperti **label pada kardus saat pindahan**. Isi kardus tetap sama entah dilabeli atau tidak — tapi label \"PECAH BELAH — DAPUR\" menentukan bagaimana orang lain memperlakukannya. Mesin pencari, screen reader, dan rekan setimmu adalah \"orang lain\" itu. Kardus tanpa label (`<div>` untuk segalanya) tetap bisa diangkut, hanya saja semua orang harus menebak isinya.\n\n" +
            "## Jebakan yang Sering Menjatuhkan Pemula\n\n" +
            "1. **Lupa menutup tag.** Tidak ada pesan error; halaman hanya jadi aneh. Kalau tampilan tiba-tiba kacau setelah satu baris ditambah, periksa baris itu dulu.\n" +
            "2. **Menutup tag tunggal.** `<br></br>` dan `</img>` bukan HTML.\n" +
            "3. **Memilih heading berdasarkan ukuran.** Struktur dulu, tampilan diatur CSS.\n" +
            "4. **Mengetik nomor sendiri di dalam daftar bernomor.** `<ol>` sudah membuat nomornya; mengetik \"1.\" membuat nomornya dobel.\n" +
            "5. **Menaruh `<ul>` anak sebagai saudara `<li>`.** Sub-daftar harus berada di dalam `<li>` induknya, kalau tidak hubungan induk-anak hilang bagi screen reader.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> Sembilan bab di modul ini adalah kosakata yang dipakai setiap hari, di framework apa pun. Saat kamu nanti menulis komponen React atau template Laravel, yang kamu susun tetap elemen-elemen ini. Reviewer jarang mengomentari cara kamu menulis fungsi di hari pertama — tapi `alt` yang kosong, heading yang melompat, dan `<div>` yang seharusnya `<button>` hampir selalu ketahuan.",
        },
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
          susunKode: {
            question:
              "Rangkai satu elemen heading tingkat satu yang berisi teks `Halo Dunia`.",
            potongan: [
              "<h1>",
              "Halo Dunia",
              "</h1>",
            ],
            pengecoh: [
              "<heading1>",
              "</heading1>",
              "<h1/>",
            ],
            pemisah: "",
            explanation:
              "Elemen berpasangan selalu punya tiga bagian: tag pembuka, isi, lalu tag penutup yang bergaris miring. Keping `<heading1>` dan `</heading1>` menggoda karena namanya terdengar lebih jelas dan mudah diingat, padahal HTML hanya mengenal `h1` sampai `h6` — tag karangan sendiri tidak akan dianggap heading oleh browser maupun mesin pencari. Keping `<h1/>` adalah jebakan yang datang dari kebiasaan menulis tag tunggal seperti `<br>`: elemen yang punya isi tidak pernah ditutup dengan garis miring di depan kurung.",
          },
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
          susunKode: {
            question:
              "Susun sebuah paragraf di bawah heading `Halo Dunia` yang sudah ada.",
            potongan: [
              "<h1>Halo Dunia</h1>",
              "<p>",
              "Ini paragraf pertamaku di BiLearn.",
              "</p>",
            ],
            pengecoh: [
              "<paragraph>",
              "</paragraph>",
              "<p/>",
            ],
            pemisah: " ",
            explanation:
              "Paragraf ditulis dengan `<p>` dan wajib ditutup `</p>`; browser memberi jarak vertikal antar paragraf secara otomatis. Keping `<paragraph>` dan `</paragraph>` menggoda justru karena lebih terbaca — banyak pemula menyangka nama tag boleh dieja panjang. Browser tidak mengeluh, ia hanya memperlakukan tag asing itu sebagai elemen tak dikenal tanpa jarak paragraf. Keping `<p/>` adalah jebakan yang sering muncul pada orang yang pernah menyentuh XML atau JSX, tempat tag kosong memang ditulis begitu; di HTML, paragraf punya isi sehingga harus dibuka dan ditutup.",
          },
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
          susunKode: {
            question:
              "Rangkai heading tingkat dua yang berisi teks `Tentang Saya`.",
            potongan: [
              "<h2>",
              "Tentang Saya",
              "</h2>",
            ],
            pengecoh: [
              "<h3>",
              "</h3>",
              "<h2/>",
            ],
            pemisah: " ",
            explanation:
              "Tingkat heading menyatakan susunan isi, bukan ukuran huruf: `<h1>` topik utama halaman, `<h2>` bagian di bawahnya, `<h3>` sub-bagiannya lagi. Keping `<h3>` menggoda karena di layar hasilnya cuma sedikit lebih kecil dan terlihat sama-sama rapi, padahal melompati tingkat membuat screen reader membacakan kerangka isi yang bolong dan pendengarnya mengira ada bagian yang terlewat. Keping `<h2/>` adalah jebakan tag tunggal: heading punya isi, jadi ia dibuka dan ditutup, bukan ditutup sendiri.",
          },
        },
        {
          kind: "step",
          id: "html-1-4",
          title: "Link: menghubungkan halaman",
          explanation:
            "Elemen `<a>` (singkatan dari *anchor*) membuat tautan, dan tujuannya ditentukan oleh **atribut** bernama `href`. Atribut adalah keterangan tambahan yang selalu ditulis di **tag pembuka** dengan pola `nama=\"nilai\"`, sementara teks yang dilihat pengunjung berada di antara tag pembuka dan penutup — dua hal yang sering tertukar saat pertama belajar. Ada satu atribut pendamping yang sering kamu temui: `target=\"_blank\"` membuka tautan di tab baru, dan sebaiknya selalu ditemani `rel=\"noopener\"` karena tanpa itu halaman tujuan mendapat akses terbatas ke halamanmu — celah keamanan lama yang masih sering lolos di code review. Jebakan yang paling sering terjadi di sini: membuka **semua** tautan di tab baru. Itu mengambil keputusan yang seharusnya milik pengguna, jadi pakai hanya saat pengguna memang sedang mengerjakan sesuatu yang tidak boleh terputus, misalnya sedang mengisi formulir panjang.",
          example: {
            code:
              '<!-- tautan biasa: dibuka di tab yang sama -->\n' +
              '<a href="https://google.com">Buka Google</a>\n\n' +
              '<!-- dibuka di tab baru, dengan pengaman rel -->\n' +
              '<a href="https://wikipedia.org" target="_blank" rel="noopener">\n' +
              '  Wikipedia (tab baru)\n' +
              '</a>',
            output:
              "Dua tulisan biru bergaris bawah. Yang pertama menggantikan halaman saat diklik; yang kedua membuka tab baru dan halaman ini tetap terbuka.",
            note: 'Atribut ditulis di dalam tag pembuka dengan pola nama="nilai". Teks yang terlihat pengguna ada di antara tag. Satu elemen boleh punya beberapa atribut, dipisah spasi.',
          },
          instruction:
            'Buat link berisi teks `Kunjungi BiLearn` yang mengarah ke `https://bilearn.id`.',
          starterCode: "<h1>Halo Dunia</h1>\n",
          language: "html",
          tests: [
            {
              pattern:
                '<a\\s+href=[\'"]https://bilearn\\.id[\'"]\\s*>\\s*Kunjungi BiLearn\\s*</a>',
              message:
                'Buat elemen <a> dengan atribut href="https://bilearn.id" dan teks "Kunjungi BiLearn".',
            },
          ],
          solution:
            '<h1>Halo Dunia</h1>\n<a href="https://bilearn.id">Kunjungi BiLearn</a>',
          susunKode: {
            question:
              "Rangkai sebuah tautan berteks `Kunjungi BiLearn` yang mengarah ke `https://bilearn.id`.",
            potongan: [
              "<a",
              "href=\"https://bilearn.id\"",
              ">",
              "Kunjungi BiLearn",
              "</a>",
            ],
            pengecoh: [
              "src=\"https://bilearn.id\"",
              "<link",
              "</link>",
            ],
            pemisah: " ",
            explanation:
              "Tautan memakai elemen `<a>` dengan atribut `href` yang menunjuk alamat tujuan, dan teks yang diklik berada di antara tag pembuka dan penutup. Keping `src=\"...\"` adalah pengecoh yang paling sering menjerat: `href` dan `src` sama-sama berisi alamat, tapi `href` berarti \"ke mana ini menuju\" sementara `src` berarti \"apa yang dimuat ke dalam halaman\" seperti pada gambar. Keping `<link` juga menggoda karena namanya persis kata \"link\"; padahal di HTML `<link>` dipakai di dalam `<head>` untuk menyambungkan berkas CSS, bukan untuk membuat tautan yang bisa diklik.",
          },
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
              pattern: '<img[^>]*src=[\'"]https://picsum\\.photos/200[\'"][^>]*>',
              message: 'Elemen <img> harus punya src="https://picsum.photos/200".',
            },
            {
              pattern: '<img[^>]*alt=[\'"]Foto acak[\'"][^>]*>',
              message:
                'Tambahkan atribut alt="Foto acak" — gambar tanpa alt menyulitkan pengguna screen reader.',
            },
          ],
          solution: '<img src="https://picsum.photos/200" alt="Foto acak">',
          susunKode: {
            question:
              "Rangkai sebuah elemen gambar yang menampilkan `https://picsum.photos/200` dengan teks alternatif `Foto acak`.",
            potongan: [
              "<img",
              "src=\"https://picsum.photos/200\"",
              "alt=\"Foto acak\"",
              ">",
            ],
            pengecoh: [
              "href=\"https://picsum.photos/200\"",
              "title=\"Foto acak\"",
              "<image",
            ],
            pemisah: " ",
            explanation:
              "`<img>` adalah elemen tunggal: ia tidak punya isi sehingga tidak perlu `</img>`. Alamat berkasnya ditunjuk `src`, dan `alt` menyediakan teks pengganti bagi pengguna screen reader maupun saat gambarnya gagal dimuat. Keping `href` menggoda karena sama-sama berisi alamat, dan tertukarnya `href` dengan `src` termasuk kekeliruan yang paling sering muncul di minggu-minggu pertama — browser tidak memberi pesan error, gambarnya hanya tidak muncul. Keping `title` juga terasa masuk akal sebagai \"keterangan gambar\", padahal isinya cuma muncul saat kursor didiamkan di atas gambar dan tidak menolong pengguna screen reader. Keping `<image` adalah tebakan nama yang wajar tapi bukan nama elemen di HTML.",
          },
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
          susunKode: {
            question:
              "Susun daftar tiga fitur produk yang urutannya tidak penting: `Gratis`, `Terbuka`, dan `Bahasa Indonesia`.",
            potongan: [
              "<ul>",
              "<li>Gratis</li>",
              "<li>Terbuka</li>",
              "<li>Bahasa Indonesia</li>",
              "</ul>",
            ],
            pengecoh: [
              "<ol>",
              "</ol>",
              "<li>Gratis<li>",
            ],
            pemisah: "\n",
            explanation:
              "Daftar yang urutannya tidak penting memakai `<ul>` (unordered list); setiap butirnya dibungkus `<li>`. Keping `<ol>` dan `</ol>` menggoda karena hasilnya di layar tetap terlihat seperti daftar yang rapi — bedanya `<ol>` memberi nomor, dan nomor itu menyiratkan urutan yang sebenarnya tidak ada pada daftar fitur. Keping `<li>Gratis<li>` adalah jebakan tag penutup tanpa garis miring: sekilas terlihat berpasangan, tetapi browser membacanya sebagai dua butir daftar yang dibuka dan tidak pernah ditutup, sehingga strukturnya berantakan.",
          },
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
          susunKode: {
            question:
              "Susun daftar dua tingkat: butir `Frontend` yang di dalamnya berisi sub-daftar `HTML` dan `CSS`.",
            potongan: [
              "<ul>",
              "<li>Frontend",
              "<ul>",
              "<li>HTML</li>",
              "<li>CSS</li>",
              "</ul>",
              "</li>",
              "</ul>",
            ],
            pengecoh: [
              "<li>HTML<li>",
              "<li>CSS<li>",
            ],
            pemisah: "\n",
            explanation:
              "Pada daftar bersarang, sub-daftar diletakkan DI DALAM `<li>` induknya — perhatikan bahwa `</li>` milik `Frontend` baru ditutup setelah `</ul>` anaknya. Karena itu di kolam kepingan ada dua `<ul>` dan dua `</ul>`: satu untuk daftar luar, satu untuk daftar dalam. Kekeliruan yang sering terjadi adalah menutup `</li>` lebih dulu lalu menaruh sub-daftarnya di luar, dan itu tidak menghasilkan pesan error apa pun — hubungan induk-anak hanya hilang diam-diam bagi screen reader. Dua keping pengecoh memakai tag penutup tanpa garis miring, jebakan yang membuat butir daftar tidak pernah tertutup.",
          },
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
              pattern: "<section[^>]*id=['\"]tentang['\"]",
              message:
                "Beri atribut id=\"tentang\" pada section.",
            },
            {
              pattern: "<section[^>]*class=['\"][^\"']*kartu",
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
          susunKode: {
            question:
              "Rangkai sebuah `<section>` beridentitas `tentang` dan berkelas `kartu`, yang berisi judul `Tentang Saya`.",
            potongan: [
              "<section",
              "id=\"tentang\"",
              "class=\"kartu\"",
              ">",
              "<h2>Tentang Saya</h2>",
              "</section>",
            ],
            pengecoh: [
              "class=\"tentang\"",
              "id=\"kartu\"",
            ],
            pemisah: " ",
            explanation:
              "`id` adalah identitas unik — hanya boleh dimiliki satu elemen dalam satu halaman — sedangkan `class` menandai sekelompok elemen yang berbagi ciri atau gaya yang sama. Karena itu nama bagiannya (`tentang`) menjadi `id`, dan nama tampilannya (`kartu`) menjadi `class`. Dua keping pengecoh menukar keduanya, dan ini kekeliruan yang sangat sering terjadi karena di layar hasilnya bisa terlihat sama persis. Akibatnya baru terasa nanti: tautan jangkar `#tentang` tidak lagi menemukan sasarannya, dan gaya `.kartu` menempel pada elemen yang salah.",
          },
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
            note: "../ berarti naik satu folder. Kalau gambarmu tidak muncul, path inilah yang pertama harus kamu periksa. Di panel preview, berkas `aset/foto.jpg` memang tidak ada sehingga yang tampil adalah ikon gambar rusak beserta teks alt-nya — itu justru memperlihatkan gunanya alt, dan bukan tanda jawabanmu salah.",
          },
          instruction:
            "Halamanmu berada di folder `blog/` dan gambarnya di folder `aset/` yang sejajar dengan `blog/`. Tulis elemen `<img>` yang menunjuk `aset/foto.jpg` memakai path relatif yang naik satu folder, dengan alt `Foto artikel`.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: "<img[^>]*src=['\"]\\.\\./aset/foto\\.jpg['\"]",
              message:
                "Pakai path relatif yang naik satu folder: ../aset/foto.jpg",
            },
            {
              pattern: "<img[^>]*alt=['\"]Foto artikel['\"]",
              message:
                "Sertakan alt=\"Foto artikel\".",
            },
          ],
          solution: "<img src=\"../aset/foto.jpg\" alt=\"Foto artikel\">",
          susunKode: {
            question:
              "Halamanmu ada di folder `blog/`, gambarnya di folder `aset/` yang sejajar dengan `blog/`. Rangkai elemen gambar yang menunjuk `foto.jpg` di sana, dengan teks alternatif `Foto artikel`.",
            potongan: [
              "<img",
              "src=\"../aset/foto.jpg\"",
              "alt=\"Foto artikel\"",
              ">",
            ],
            pengecoh: [
              "src=\"aset/foto.jpg\"",
              "src=\"/aset/foto.jpg\"",
              "alt=\"foto.jpg\"",
            ],
            pemisah: " ",
            explanation:
              "Path relatif dihitung dari lokasi berkas HTML-nya, bukan dari akar situs. Karena halamanmu ada di dalam `blog/`, kamu perlu naik satu tingkat dulu dengan `../` sebelum masuk ke `aset/`. Keping `src=\"aset/foto.jpg\"` adalah pengecoh yang paling sering dipilih: ia terlihat paling bersih, tapi artinya \"cari folder aset DI DALAM blog\" — folder yang tidak ada. Keping `src=\"/aset/foto.jpg\"` dengan garis miring di depan menggoda karena terasa seperti jalan pintas ke folder utama; itu memang path absolut dari akar situs, dan biasanya rusak begitu situsmu dipasang di dalam subfolder. Keping `alt=\"foto.jpg\"` keliru karena teks alternatif seharusnya menerangkan isi gambar kepada orang yang tidak bisa melihatnya, bukan mengulang nama berkasnya.",
          },
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
          susunKode: {
            question:
              "Susun satu paragraf berisi dua baris alamat, lalu garis pemisah, lalu sebuah komentar HTML.",
            potongan: [
              "<p>Jl. Anggrek No. 7<br>",
              "Surabaya 60111</p>",
              "<hr>",
              "<!-- di bawah ini nanti diisi daftar produk -->",
            ],
            pengecoh: [
              "</br>",
              "<!-- -->",
              "<break>",
            ],
            pemisah: "\n",
            explanation:
              "`<br>` memotong baris di dalam satu blok teks — persis yang dibutuhkan alamat surat — sedangkan `<hr>` menggambar garis pemisah antar bagian, dan `<!-- ... -->` adalah catatan yang hanya terbaca di kode. Keping `</br>` adalah jebakan yang paling menggoda karena hampir semua tag yang sudah kamu pelajari memang berpasangan; `<br>` termasuk elemen tanpa isi, jadi tidak ada yang perlu ditutup. Keping `<!-- -->` terlihat seperti komentar yang sah, tapi kosong — komentar yang tidak mengatakan apa pun tidak menolong siapa pun yang membaca kodemu nanti. Keping `<break>` adalah tebakan nama yang wajar tapi tidak dikenal browser.",
          },
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
                "Satu halaman sebaiknya punya tepat satu <h1> sebagai judul utama, karena itulah cara menyatakan \"inilah topik halaman ini\" secara tidak ambigu bagi mesin pencari dan pengguna screen reader. Pilihan \"sebanyak mungkin\" menggoda karena secara teknis browser memang tidak melarangnya dan tampilannya tetap normal — tapi halaman dengan lima <h1> sama saja dengan buku yang punya lima judul di kover. Heading berikutnya memakai <h2>–<h6> mengikuti kedalaman strukturnya, bukan mengikuti ukuran huruf yang kamu inginkan.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Atribut apa yang dipakai elemen <a> untuk menentukan tujuan link?",
              choices: ["src", "href", "link", "target"],
              answerIndex: 1,
              explanation:
                'href (singkatan dari hypertext reference) menentukan alamat tujuan tautan, misalnya <a href="https://google.com">. Tanpa href, elemen <a> tetap tampil tapi tidak mengarah ke mana-mana dan tidak bisa difokuskan dengan Tab. Dua pengecoh di sini punya sebab yang jelas: src memang atribut alamat, tapi dipakai elemen yang MEMUAT berkas seperti <img> dan <video>; sedangkan target benar-benar ada pada <a> — hanya saja tugasnya menentukan di jendela mana tautan dibuka, bukan tujuannya.',
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
                "Browser meringkas spasi dan baris baru berlebih menjadi satu spasi, jadi teks tanpa pembungkus akan menyambung menjadi satu blok panjang meski di editormu terlihat rapi berbaris. <p> menyatakan \"ini satu paragraf\" sehingga browser memberi jarak atas-bawah, dan screen reader pun berhenti sejenak di antara paragraf. Pilihan \"satu-satunya cara menulis teks\" menggoda karena kelihatan tegas, padahal teks juga sah berada di dalam heading, <li>, atau <td> — <p> khusus untuk teks yang memang berbentuk paragraf.",
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
                "<img> adalah tag tunggal: tidak ada isi di antara tag pembuka dan penutup, jadi tidak ada </img>. Alamat berkasnya disebut lewat src, dan alt menyediakan deskripsi teksnya. Pengecoh pertama dan ketiga menggoda karena meniru pola tag berpasangan yang kamu pakai untuk <p> dan <h1>; sedangkan pengecoh kedua salah atribut — href milik <a> untuk berpindah halaman, src untuk memuat berkas ke dalam halaman ini.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kamu ingin satu tautan terbuka di tab baru agar formulir panjang yang sedang diisi pengguna tidak hilang. Atribut apa yang dipakai, dan apa pendampingnya?",
              choices: [
                'target="_blank", sebaiknya ditemani rel="noopener"',
                'newtab="true"',
                'href="_blank"',
                'window="new", tanpa atribut tambahan',
              ],
              answerIndex: 0,
              explanation:
                'target="_blank" membuka tautan di tab baru, dan rel="noopener" menutup celah lama di mana halaman tujuan bisa mendapat akses terbatas ke halaman asalmu. Yang perlu diingat justru pemakaiannya: membuka SEMUA tautan di tab baru mengambil keputusan yang seharusnya milik pengguna — pakai hanya kalau ada alasan seperti pada soal ini. Pengecoh newtab dan window sengaja dibuat masuk akal secara bahasa Inggris, tapi keduanya bukan atribut HTML.',
            },
            {
              id: "q7",
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
          kind: "materi",
          id: "html-2-m1",
          title: "Semantic HTML: Memberi Nama pada Bagian Halaman",
          body:
            "# Pengertian\n\n" +
            "**Semantic HTML** berarti memilih elemen berdasarkan *peran* isinya, bukan berdasarkan tampilan yang kamu inginkan. `<div>` dan `<section>` tampil sama persis di layar — bedanya, `<section>` memberi tahu mesin bahwa bagian ini adalah satu bagian bertema, sedangkan `<div>` tidak menyatakan apa pun.\n\n" +
            "Kalau seluruh halamanmu tersusun dari `<div>`, halaman itu tetap tampil normal. Yang hilang adalah informasi — dan yang membutuhkan informasi itu bukan kamu, melainkan tiga pihak yang tidak bisa melihat layarmu: mesin pencari, screen reader, dan rekan setim yang membuka kodemu enam bulan kemudian.\n\n" +
            "## Peta Halaman yang Dipakai di Hampir Semua Situs\n\n" +
            "```text\n" +
            "+-------------------------------------------+\n" +
            "| <header>  logo + <nav> menu utama         |\n" +
            "+-------------------------------------------+\n" +
            "| <main>                     | <aside>      |\n" +
            "|   <article> tulisan 1      |  konten      |\n" +
            "|   <article> tulisan 2      |  pendukung   |\n" +
            "|                            |  (sidebar)   |\n" +
            "+-------------------------------------------+\n" +
            "| <footer>  kontak, hak cipta               |\n" +
            "+-------------------------------------------+\n" +
            "```\n\n" +
            "Empat elemen di gambar itu disebut **landmark**. Screen reader menyediakan daftar landmark dan pengguna bisa melompat langsung ke salah satunya — persis seperti kamu melirik ke bagian atas halaman untuk mencari menu. Halaman tanpa landmark memaksa mereka mendengarkan isinya berurutan dari awal.\n\n" +
            "## Elemen dan Pertanyaan Ujinya\n\n" +
            "| Elemen | Artinya | Pertanyaan cepat sebelum memakainya |\n" +
            "|---|---|---|\n" +
            "| `<header>` | kepala halaman atau kepala satu bagian | ini bagian pembuka? |\n" +
            "| `<nav>` | kumpulan tautan navigasi utama | ini menu yang dipakai untuk berpindah halaman? |\n" +
            "| `<main>` | konten utama, tepat satu per halaman | kalau ini dihapus, halaman kehilangan intinya? |\n" +
            "| `<article>` | isi yang utuh sendirian | masih masuk akal kalau dibagikan terpisah? |\n" +
            "| `<section>` | bagian bertema, hampir selalu berjudul | bisa aku beri judul yang wajar? |\n" +
            "| `<aside>` | isi pendukung yang bukan inti | halaman tetap utuh tanpa bagian ini? |\n" +
            "| `<footer>` | penutup halaman atau penutup satu bagian | ini keterangan akhir? |\n" +
            "| `<div>` | tidak ada artinya, murni pembungkus | aku cuma butuh kotak untuk mengatur tata letak? |\n\n" +
            "## Cara Memilih: Tiga Pertanyaan Berurutan\n\n" +
            "```text\n" +
            "Apakah isi ini utuh kalau dicabut dari halaman?\n" +
            "   ya  -> <article>\n" +
            "   tidak\n" +
            "     |\n" +
            "     v\n" +
            "Bisakah aku memberinya judul yang wajar?\n" +
            "   ya  -> <section> (beserta heading di dalamnya)\n" +
            "   tidak\n" +
            "     |\n" +
            "     v\n" +
            "Aku cuma butuh kotak untuk styling -> <div>\n" +
            "```\n\n" +
            "Urutan ini menyelesaikan hampir semua perdebatan `article` vs `section` vs `div` yang sering bikin pemula ragu berlama-lama.\n\n" +
            "## Membedah Halaman Nyata\n\n" +
            "Buka situs berita atau blog mana pun, klik kanan di area artikelnya, pilih **Inspect** (atau tekan F12). Panel *Elements* akan menampilkan struktur HTML halaman itu. Yang perlu kamu cari:\n\n" +
            "- Di mana `<header>` dan `<nav>`-nya, dan apakah `<nav>`-nya cuma satu.\n" +
            "- Apakah isi artikel dibungkus `<article>` atau hanya `<div>` berlapis-lapis.\n" +
            "- Berapa banyak `<h1>` yang ada — situs besar pun sering keliru di sini.\n\n" +
            "Kebiasaan membaca struktur halaman orang lain adalah cara belajar paling cepat di HTML, dan sekaligus keterampilan yang kamu pakai saat harus meniru tata letak yang sudah ada di pekerjaan nyata.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan **dua gedung kantor**. Yang pertama semua pintunya identik tanpa papan nama — kamu harus membuka satu per satu untuk menemukan ruang rapat. Yang kedua setiap pintunya berlabel: Resepsionis, Ruang Rapat, Toilet, Gudang. Tata letak ruangannya sama, biaya membuat labelnya nyaris nol, tapi pengalaman orang baru di dalamnya sangat berbeda. `<div>` adalah pintu tanpa papan nama.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **`<section>` tanpa judul.** Kalau kamu tidak bisa memberinya heading, yang kamu butuhkan `<div>`.\n" +
            "2. **Semua kumpulan tautan dibungkus `<nav>`.** Pakai untuk navigasi utama saja; deretan tautan di dalam artikel tidak perlu.\n" +
            "3. **Menaruh menu dan footer ke dalam `<main>`.** Isi yang berulang di setiap halaman harus di luar `<main>`, kalau tidak pintasan \"lompat ke konten utama\" jadi tidak berguna.\n" +
            "4. **Mengira `<header>` hanya boleh satu.** Boleh ada beberapa: satu untuk halaman, dan satu lagi di dalam setiap `<article>` sebagai kepala tulisan. Yang benar-benar dibatasi satu adalah `<main>`.\n" +
            "5. **Memakai `<b>` dan `<i>` untuk menegaskan.** Keduanya hanya mengubah tampilan; `<strong>` dan `<em>` yang membawa makna.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** setiap kali kamu membuat halaman baru. Di lowongan frontend, aksesibilitas (sering ditulis *a11y*) makin sering muncul sebagai syarat, dan pertanyaan \"apa bedanya section dan div\" adalah salah satu pertanyaan interview HTML yang paling sering ditanyakan justru karena jawabannya menunjukkan apakah seseorang berpikir soal makna atau cuma soal tampilan.",
        },
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
              pattern: '<a\\s+href=[\'"]/[\'"]\\s*>\\s*Beranda\\s*</a>',
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
              pattern: 'alt=[\'"]Pemandangan[\'"]',
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
              pattern: '<time[^>]*datetime=[\'"]2026-07-27[\'"][^>]*>',
              message:
                'Tambahkan <time datetime="2026-07-27"> — atribut datetime wajib agar mesin bisa membacanya.',
            },
          ],
          solution:
            '<p>\n  <strong>Penting</strong>: acara dimulai <time datetime="2026-07-27">27 Juli 2026</time>.\n</p>',
        },
        {
          kind: "step",
          id: "html-2-7",
          title: "Kutipan dan Cuplikan Kode",
          explanation:
            "Empat elemen ini sering diganti `<div>` berhias CSS, padahal masing-masing menyatakan sesuatu yang tidak bisa disampaikan tampilan. `<blockquote>` menandai kutipan panjang dari sumber lain, dan `<cite>` menyebut nama sumbernya — dibacakan screen reader sebagai kutipan, sehingga pendengar tahu kata-kata itu bukan milik penulis halaman. Untuk hal teknis ada dua elemen berpasangan: `<code>` menandai potongan kode di tengah kalimat, sedangkan `<pre>` mempertahankan spasi dan baris baru apa adanya — dan inilah bedanya yang penting, karena HTML biasanya meringkas spasi berlebih menjadi satu. Karena itu kode berbaris banyak selalu ditulis sebagai `<pre><code>...</code></pre>`: `pre` menjaga bentuknya, `code` menyatakan maknanya. Jebakan yang perlu diingat: di dalam `<pre>`, indentasi kodemu **ikut tampil**, jadi jangan menjorokkan isinya mengikuti indentasi HTML di sekitarnya.",
          example: {
            code:
              "<blockquote>\n" +
              "  <p>Program harus ditulis agar bisa dibaca manusia.</p>\n" +
              "  <cite>Harold Abelson</cite>\n" +
              "</blockquote>\n\n" +
              "<p>Simpan berkasnya sebagai <code>index.html</code>.</p>",
            output:
              "Kutipan tampil menjorok ke dalam dengan nama sumber di bawahnya (biasanya miring), dan tulisan index.html di dalam paragraf tampil dengan huruf monospace.",
            note: "`<cite>` berisi nama karya atau penulisnya, bukan kalimat kutipannya. Kalau sumbernya punya alamat, bungkus isi cite dengan `<a>`.",
          },
          instruction:
            "Tulis satu kutipan bertingkat dari sumber lain: bungkus kalimat `Sederhana lebih baik daripada rumit.` sebagai kutipan blok, sebutkan sumbernya `Tim Peters` dengan elemen yang tepat, lalu di luar kutipan tampilkan potongan kode dua baris apa pun memakai kombinasi elemen yang mempertahankan spasi sekaligus menyatakan bahwa isinya kode.",
          starterCode: "<!-- tulis kutipan dan cuplikan kodenya di bawah ini -->\n",
          language: "html",
          tests: [
            {
              pattern:
                "<blockquote>[\\s\\S]*Sederhana lebih baik daripada rumit\\.[\\s\\S]*</blockquote>",
              message:
                "Bungkus kalimatnya dengan `<blockquote>` ... `</blockquote>` — itu penanda kutipan panjang dari sumber lain.",
            },
            {
              pattern: "<cite>\\s*Tim Peters\\s*</cite>",
              message:
                "Sebutkan sumbernya dengan `<cite>Tim Peters</cite>`, bukan paragraf biasa.",
            },
            {
              pattern: "<pre>[\\s\\S]*<code>[\\s\\S]*\\n[\\s\\S]*</code>[\\s\\S]*</pre>",
              message:
                "Untuk kode berbaris banyak, gabungkan keduanya: `<pre><code>` di awal dan `</code></pre>` di akhir. `pre` menjaga baris dan spasinya, `code` menyatakan bahwa isinya kode.",
            },
          ],
          solution:
            "<blockquote>\n" +
            "  <p>Sederhana lebih baik daripada rumit.</p>\n" +
            "  <cite>Tim Peters</cite>\n" +
            "</blockquote>\n\n" +
            "<pre><code>const nama = \"Bimo\";\nconsole.log(nama);</code></pre>",
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
                "Tepat satu <main> per halaman, karena screen reader menyediakan pintasan 'lompat ke konten utama' yang kehilangan artinya kalau ada dua kandidat. Pilihan \"sebanyak bagian utama yang ada\" menggoda justru karena namanya terdengar seperti \"bagian penting\" — padahal <main> berarti \"inti halaman ini\", dan halaman hanya punya satu inti. Kalau kamu butuh membagi isinya, pakai <section> atau <article> di dalam <main>. Perlu dicatat: <header> dan <footer> justru boleh muncul beberapa kali, misalnya di dalam tiap <article>.",
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
          kind: "materi",
          id: "html-3-m1",
          title: "Tabel untuk Data, Media untuk Isi Berat",
          body:
            "# Pengertian\n\n" +
            "Modul ini menggabungkan dua hal yang tampaknya tidak berhubungan, tapi punya satu kesamaan: keduanya sering dipakai untuk tujuan yang salah.\n\n" +
            "**Tabel** dipakai untuk *data tabular* — data yang hubungan baris dan kolomnya bermakna, seperti laporan penjualan atau jadwal. Dulu, sebelum ada CSS layout, orang memakai tabel untuk mengatur tata letak halaman. Praktik itu sudah lama ditinggalkan karena tabel tidak bisa menyesuaikan diri di layar HP dan membuat screen reader membacakan urutan yang membingungkan.\n\n" +
            "**Media** (gambar, video, audio, peta yang disematkan) adalah bagian terberat dari hampir semua halaman. Cara kamu menuliskannya menentukan apakah halamanmu terasa cepat atau membuat orang menutup tab sebelum isinya muncul.\n\n" +
            "## Anatomi Tabel\n\n" +
            "```text\n" +
            "<table>\n" +
            "  <caption>       judul resmi tabel, dibacakan lebih dulu\n" +
            "  <thead>         kepala tabel\n" +
            "    <tr>          satu baris\n" +
            "      <th>        sel kepala (mengumumkan konteks kolom)\n" +
            "  <tbody>         isi tabel\n" +
            "    <tr>\n" +
            "      <td>        sel data biasa\n" +
            "  <tfoot>         baris ringkasan/total\n" +
            "</table>\n" +
            "```\n\n" +
            "Urutan penulisan yang wajib diingat: `<caption>` harus menjadi elemen **pertama** di dalam `<table>`. Sisanya mengikuti urutan wajar dari atas ke bawah.\n\n" +
            "Kenapa `<th>` penting padahal cuma terlihat tebal? Karena saat pengguna screen reader berpindah antar sel, perangkatnya mengumumkan header terkait: alih-alih mendengar \"20\", ia mendengar \"Umur: 20\". Tanpa `<th>`, tabel berisi angka menjadi hampir tidak bisa dipahami tanpa melihat layar.\n\n" +
            "## Tiga Elemen Media dan Atribut Wajibnya\n\n" +
            "| Elemen | Untuk | Yang sering terlupa |\n" +
            "|---|---|---|\n" +
            "| `<img>` | gambar statis | `alt` — deskripsi teksnya |\n" +
            "| `<video>` / `<audio>` | media yang diputar | `controls` — tanpa ini tidak ada tombol play |\n" +
            "| `<iframe>` | menyematkan halaman lain | `title` dan `loading=\"lazy\"` |\n\n" +
            "Sebagian atribut HTML tidak punya nilai, hanya ada atau tidak ada — namanya **boolean attribute**. `controls`, `muted`, `autoplay`, dan `required` termasuk di dalamnya. Menuliskan `controls=\"true\"` tidak salah secara teknis, tapi tidak perlu, dan `controls=\"false\"` justru menyesatkan: atributnya tetap dianggap ada, jadi tombolnya tetap muncul.\n\n" +
            "## Kenapa Autoplay-mu Tidak Jalan\n\n" +
            "> Browser modern **memblokir** video yang memutar sendiri bila ada suaranya. Autoplay hanya diizinkan kalau videonya di-*mute*, atau kalau pengguna sudah berinteraksi dengan halaman. Aturan ini lahir dari pengalaman buruk bersama: suara yang menyala sendiri di kantor atau di tempat umum. Jadi kalau autoplay-mu \"tidak berfungsi\", periksa `muted` sebelum mencari kesalahan lain.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Tabel itu seperti **spreadsheet**: gunanya ketika setiap angka punya arti dari perpotongan baris dan kolomnya. Memakai tabel untuk menata halaman sama seperti menyusun tata letak brosur dengan sel-sel Excel — bisa saja jadi, tapi begitu ukuran kertasnya berubah, semuanya berantakan.\n\n" +
            "Sedangkan `loading=\"lazy\"` itu seperti **menyiapkan hidangan saat tamu mendekati meja**, bukan memasak seluruh menu sebelum tamu pertama duduk. Halaman jadi siap dilihat lebih cepat, dan yang tidak pernah discroll tidak pernah dimuat.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Tabel untuk tata letak.** Rusak di HP, membingungkan screen reader. Untuk tata letak, tunggu materi Flexbox dan Grid di track CSS.\n" +
            "2. **Jumlah kolom tidak seimbang setelah `colspan`.** Satu sel dengan `colspan=\"2\"` menghitung sebagai dua kolom; kalau totalnya tidak sama dengan baris lain, tabelnya tampil miring.\n" +
            "3. **`<th>` diganti `<td>` lalu ditebalkan dengan CSS.** Tampilannya sama, maknanya hilang.\n" +
            "4. **Mengunggah video besar langsung ke halaman.** Untuk video panjang, sematkan dari layanan video; `<video>` cocok untuk klip pendek.\n" +
            "5. **`<iframe>` tanpa `title`.** Screen reader hanya menyebut \"frame\" tanpa tahu isinya — temuan yang langsung ketangkap alat audit.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** tabel muncul di hampir semua halaman admin dan laporan — bagian aplikasi yang paling sering dikerjakan developer pemula di perusahaan. Sementara media adalah pos terbesar dalam audit performa: `loading=\"lazy\"` dan ukuran gambar yang wajar hampir selalu jadi dua rekomendasi pertama Lighthouse, alat audit yang dipakai tim frontend untuk mengukur kecepatan halaman.",
        },
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
              pattern: '<td[^>]*colspan=[\'"]2[\'"][^>]*>\\s*Total: 1 peserta\\s*</td>',
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
            note: "controls adalah atribut tanpa nilai (boolean attribute) — cukup ditulis namanya saja, tidak perlu controls=\"true\". Catatan preview: berkas `film.mp4` tidak ada di panel preview, jadi pemutarnya tampil kosong atau bertanda gagal memuat. Yang dinilai di step ini adalah penulisan elemennya.",
          },
          instruction:
            "Buat elemen `<video>` dengan atribut `src` berisi `film.mp4` dan atribut `controls`.",
          starterCode: "",
          language: "html",
          tests: [
            {
              pattern: '<video[^>]*src=[\'"]film\\.mp4[\'"][^>]*>',
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
              pattern: '<iframe[^>]*src=[\'"]https://example\\.com[\'"][^>]*>',
              message: 'Buat <iframe> dengan src="https://example.com".',
            },
            {
              pattern: '<iframe[^>]*title=[\'"]Contoh situs[\'"][^>]*>',
              message:
                'Tambahkan title="Contoh situs" — iframe tanpa title adalah pelanggaran aksesibilitas yang sering ketangkap audit.',
            },
            {
              pattern: '<iframe[^>]*loading=[\'"]lazy[\'"][^>]*>',
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
            note: "img di dalam picture WAJIB ada — dialah yang benar-benar ditampilkan, source hanya memberi alternatif. Catatan preview: berkas `besar.jpg` dan `kecil.jpg` tidak ada, jadi yang muncul ikon gambar rusak. Itu wajar; yang diperiksa adalah struktur elemennya.",
          },
          instruction:
            "Buat `<picture>` dengan satu `<source>` (`srcset` = `besar.jpg`, `media` = `(min-width: 800px)`) dan `<img>` fallback (`src` = `kecil.jpg`, `alt` = `Banner`).",
          starterCode: "<picture>\n  \n</picture>",
          language: "html",
          tests: [
            {
              pattern: '<source[^>]*srcset=[\'"]besar\\.jpg[\'"][^>]*>',
              message: 'Tambahkan <source srcset="besar.jpg" ...>.',
            },
            {
              pattern: '<source[^>]*media=[\'"]\\(min-width: 800px\\)[\'"][^>]*>',
              message: 'Tambahkan atribut media="(min-width: 800px)" pada source.',
            },
            {
              pattern: '<img[^>]*src=[\'"]kecil\\.jpg[\'"][^>]*alt=[\'"]Banner[\'"]|<img[^>]*alt=[\'"]Banner[\'"][^>]*src=[\'"]kecil\\.jpg[\'"]',
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
                "Tanpa `controls`, elemen video tetap ada di halaman tapi pengguna tidak punya satu pun cara memainkan atau menghentikannya — gejalanya terlihat seperti kotak kosong. Ini juga soal aksesibilitas: pengguna harus selalu bisa menghentikan media, terutama yang bersuara. Pilihan `autoplay` menggoda karena kelihatannya menyelesaikan masalah \"videonya tidak jalan\", padahal ia justru memainkan video tanpa memberi tombol untuk menghentikannya — dan browser modern pun memblokirnya kecuali videonya di-mute.",
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
                'loading="lazy" menunda pemuatan iframe atau gambar yang berada di luar layar sampai pengguna hampir men-scroll ke sana. Ini salah satu perbaikan performa termurah dan sering jadi rekomendasi pertama audit Lighthouse. Tiga pengecohnya sengaja diambil dari atribut yang benar-benar ada di HTML: `defer` dan `async` mengatur kapan berkas JavaScript dijalankan lewat `<script>`, bukan kapan sesuatu dimuat pada iframe — mudah tertukar karena ketiganya sama-sama soal penundaan. `delay` tidak ada sama sekali.',
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
          kind: "materi",
          id: "html-4-m1",
          title: "Formulir: Tempat Pengguna Mengirim Data",
          body:
            "# Pengertian\n\n" +
            "Formulir adalah satu-satunya bagian HTML yang **mengirim sesuatu keluar**. Semua yang kamu pelajari sebelumnya menampilkan isi; formulir mengumpulkan isian pengguna lalu menyerahkannya ke server. Login, pendaftaran, pencarian, checkout, unggah berkas — semuanya formulir.\n\n" +
            "Karena itu modul ini terasa berbeda: kesalahan di sini bukan cuma soal tampilan, tapi soal data yang hilang atau bocor.\n\n" +
            "## Alur Sebuah Formulir\n\n" +
            "```text\n" +
            "pengguna mengisi input\n" +
            "        |\n" +
            "        |  klik tombol submit\n" +
            "        v\n" +
            "browser mengumpulkan pasangan  name=\"...\"  ->  nilai isian\n" +
            "        |                       ^^^^\n" +
            "        |            input TANPA name tidak ikut terkirim\n" +
            "        v\n" +
            "dikirim ke alamat pada  action  dengan cara pada  method\n" +
            "        |\n" +
            "        v\n" +
            "server memproses, lalu membalas halaman berikutnya\n" +
            "```\n\n" +
            "Satu baris di tengah diagram itu adalah sumber bug paling sering di formulir: **`name` adalah kunci pengiriman.** Input tanpa `name` tampil normal, bisa diisi, bisa divalidasi — tapi nilainya tidak pernah sampai ke server. Sedangkan `id` sama sekali bukan penggantinya: `id` dipakai untuk menghubungkan label, CSS, dan JavaScript.\n\n" +
            "## GET atau POST\n\n" +
            "| | `method=\"get\"` | `method=\"post\"` |\n" +
            "|---|---|---|\n" +
            "| Data dikirim lewat | alamat URL, terlihat semua orang | badan permintaan, tidak tampil di URL |\n" +
            "| Bisa di-bookmark | ya | tidak |\n" +
            "| Cocok untuk | pencarian, penyaringan, urutan tampilan | login, pendaftaran, pembelian, apa pun yang mengubah data |\n\n" +
            "> **Jangan pernah** memakai GET untuk kata sandi. Nilainya akan tercatat di riwayat browser, log server, dan header Referer situs berikutnya — tiga tempat yang tidak pernah kamu bersihkan.\n\n" +
            "## Label Bukan Hiasan\n\n" +
            "```text\n" +
            "<label for=\"kota\">Kota</label>\n" +
            "           ^^^^\n" +
            "           harus sama persis\n" +
            "           vvvv\n" +
            "<input id=\"kota\" name=\"kota\">\n" +
            "```\n\n" +
            "Pasangan `for` dan `id` inilah yang membuat: (1) mengeklik tulisan \"Kota\" langsung memfokuskan kursor ke kotaknya — target sentuh jadi jauh lebih besar di HP, dan (2) screen reader menyebutkan \"Kota, kotak isian\" saat pengguna sampai di sana. Tanpa pasangan itu, pengguna screen reader hanya mendengar \"kotak isian\" tanpa tahu harus mengisi apa.\n\n" +
            "`placeholder` **bukan** pengganti label. Ia hilang begitu pengguna mulai mengetik, kontrasnya biasanya rendah, dan pada formulir panjang orang lupa kolom yang sedang ia isi.\n\n" +
            "## Peta Cepat Isian Formulir\n\n" +
            "| Elemen / atribut | Dipakai untuk |\n" +
            "|---|---|\n" +
            "| `<input type=\"text\">` | teks satu baris |\n" +
            "| `<input type=\"email\">` | alamat email; di HP memunculkan tombol @ |\n" +
            "| `<input type=\"tel\">` | nomor telepon; papan ketik angka besar |\n" +
            "| `<input type=\"date\">` | pemilih tanggal bawaan sistem |\n" +
            "| `<textarea>` | teks panjang; nilainya di antara tag, bukan di `value` |\n" +
            "| `<select>` + `<option>` | pilihan dari daftar |\n" +
            "| `<input type=\"radio\">` | pilih satu dari beberapa; `name` harus sama |\n" +
            "| `<input type=\"checkbox\">` | boleh pilih beberapa sekaligus |\n" +
            "| `<fieldset>` + `<legend>` | mengelompokkan dan memberi judul kelompok |\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Formulir HTML itu seperti **formulir kertas di loket bank**. `name` adalah nama kolom yang dibaca petugas — kolom tanpa nama akan diabaikan meski kamu mengisinya. `label` adalah tulisan di sebelah kolom; tanpanya kamu menebak-nebak apa yang diminta. `required` adalah petugas yang mengembalikan formulirmu di loket karena ada kolom kosong. Dan validasi server adalah pemeriksaan di belakang meja — karena petugas loket bisa kamu lewati, tapi bagian verifikasi tidak.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Input tanpa `name`.** Datanya tidak terkirim. Ini bug nomor satu di formulir buatan pemula.\n" +
            "2. **Radio dengan `name` berbeda-beda.** Semuanya bisa aktif bersamaan, dan gejalanya terlihat seperti kerusakan aneh.\n" +
            "3. **`<button>` tanpa `type` di dalam form.** Default-nya `submit`, jadi halaman ikut terkirim — penyebab klasik \"halaman refresh sendiri saat aku klik tombol\".\n" +
            "4. **`placeholder` sebagai satu-satunya keterangan.** Hilang saat diisi, dan buruk untuk aksesibilitas.\n" +
            "5. **Mengandalkan validasi HTML sebagai keamanan.** Siapa pun bisa menghapus `required` lewat DevTools atau mengirim permintaan tanpa browser sama sekali.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** hampir semua tugas pertama developer baru menyentuh formulir — halaman login, form pendaftaran, halaman pengaturan. Dan satu aturan dari modul ini akan ditanyakan di interview backend maupun frontend: **validasi di sisi klien adalah kenyamanan, bukan keamanan; server wajib memvalidasi ulang.** Yang membedakan pemula dan profesional di sini bukan kemampuan membuat formulirnya tampil, tapi kesadaran bahwa datanya bisa dikirim orang yang tidak memakai halamanmu.",
        },
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
              pattern: '<form[^>]*action=[\'"]/daftar[\'"][^>]*>',
              message: 'Buat <form> dengan action="/daftar".',
            },
            {
              pattern: '<form[^>]*method=[\'"]post[\'"][^>]*>',
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
              pattern: '<label[^>]*for=[\'"]email[\'"][^>]*>\\s*Email\\s*</label>',
              message: 'Buat <label for="email">Email</label>.',
            },
            {
              pattern: '<input[^>]*id=[\'"]email[\'"][^>]*>',
              message:
                'Input harus punya id="email" agar cocok dengan for pada label.',
            },
            {
              pattern: '<input[^>]*type=[\'"]email[\'"][^>]*>',
              message: 'Gunakan type="email".',
            },
            {
              pattern: '<input[^>]*name=[\'"]email[\'"][^>]*>',
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
              pattern: '<input[^>]*type=[\'"]password[\'"][^>]*name=[\'"]sandi[\'"]|<input[^>]*name=[\'"]sandi[\'"][^>]*type=[\'"]password[\'"]',
              message: 'Buat input type="password" dengan name="sandi".',
            },
            {
              pattern: '<input[^>]*type=[\'"]tel[\'"][^>]*name=[\'"]telepon[\'"]|<input[^>]*name=[\'"]telepon[\'"][^>]*type=[\'"]tel[\'"]',
              message: 'Buat input type="tel" dengan name="telepon".',
            },
            {
              pattern: '<input[^>]*type=[\'"]date[\'"][^>]*name=[\'"]lahir[\'"]|<input[^>]*name=[\'"]lahir[\'"][^>]*type=[\'"]date[\'"]',
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
            code:
              '<textarea name="catatan">Isi awal</textarea>\n\n' +
              '<select name="ukuran">\n' +
              '  <optgroup label="Kaos">\n' +
              '    <option value="s">Small</option>\n' +
              '    <option value="l">Large</option>\n' +
              '  </optgroup>\n' +
              '  <optgroup label="Jaket">\n' +
              '    <option value="j-m">Medium</option>\n' +
              '  </optgroup>\n' +
              "</select>",
            output:
              "Kotak teks besar berisi 'Isi awal', lalu dropdown yang isinya terbagi dua kelompok berjudul 'Kaos' dan 'Jaket'. Judul kelompoknya tampil abu-abu dan tidak bisa dipilih.",
            note: "Yang dikirim ke server adalah value option (s, l, atau j-m), bukan teks yang dilihat user. `<optgroup label=\"...\">` hanya mengelompokkan tampilan daftar — ia tidak ikut terkirim dan tidak bisa dipilih.",
          },
          instruction:
            "Buat `<textarea>` dengan `name=\"pesan\"`, dan `<select>` dengan `name=\"kota\"` yang punya dua `<option>`: value `jkt` (teks `Jakarta`) dan value `bdg` (teks `Bandung`).",
          starterCode: '<form action="/kirim" method="post">\n  \n</form>',
          language: "html",
          tests: [
            {
              pattern: '<textarea[^>]*name=[\'"]pesan[\'"][^>]*>',
              message: 'Buat <textarea name="pesan"></textarea>.',
            },
            {
              pattern: '<select[^>]*name=[\'"]kota[\'"][^>]*>',
              message: 'Buat <select name="kota">.',
            },
            {
              pattern: '<option[^>]*value=[\'"]jkt[\'"][^>]*>\\s*Jakarta\\s*</option>',
              message: 'Tambahkan <option value="jkt">Jakarta</option>.',
            },
            {
              pattern: '<option[^>]*value=[\'"]bdg[\'"][^>]*>\\s*Bandung\\s*</option>',
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
            code:
              '<!-- radio: name sama, hanya satu boleh aktif -->\n' +
              '<input type="radio" name="bayar" value="transfer"> Transfer\n' +
              '<input type="radio" name="bayar" value="cod"> COD\n\n' +
              '<!-- checkbox: name sama juga, tapi boleh dipilih beberapa -->\n' +
              '<input type="checkbox" name="hobi" value="baca"> Membaca\n' +
              '<input type="checkbox" name="hobi" value="koding"> Koding',
            output:
              "Dua bulatan dan dua kotak centang. Memilih 'COD' otomatis membatalkan 'Transfer', sedangkan kedua kotak centang bisa aktif bersamaan dan server menerima dua nilai untuk name hobi.",
            note: "Yang membuatnya satu grup adalah name yang IDENTIK — untuk radio artinya \"pilih satu\", untuk checkbox artinya \"nilai-nilai ini satu kelompok\". Kalau name-nya beda, radio bisa aktif bersamaan dan itu terlihat seperti kerusakan.",
          },
          instruction:
            "Buat dua radio dengan `name=\"gender\"`: satu `value=\"L\"`, satu `value=\"P\"`.",
          starterCode: '<form action="/daftar" method="post">\n  \n</form>',
          language: "html",
          tests: [
            {
              pattern: '<input(?=[^>]*\\btype=[\'"]radio[\'"])(?=[^>]*\\bname=[\'"]gender[\'"])(?=[^>]*\\bvalue=[\'"]L[\'"])[^>]*>',
              message: 'Buat radio dengan name="gender" dan value="L".',
            },
            {
              pattern: '<input(?=[^>]*\\btype=[\'"]radio[\'"])(?=[^>]*\\bname=[\'"]gender[\'"])(?=[^>]*\\bvalue=[\'"]P[\'"])[^>]*>',
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
            "Browser sudah bisa memeriksa isian sebelum formulir dikirim, tanpa satu baris JavaScript pun. Alatnya berupa atribut: `required` mewajibkan isian, `minlength` dan `maxlength` membatasi panjang teks, `min` dan `max` membatasi nilai angka atau tanggal, sedangkan `pattern` memeriksa bentuk isian dengan pola *regex* — misalnya `pattern=\"[0-9]{5}\"` untuk kode pos lima angka. Pesan kesalahannya dibuat browser sendiri dan otomatis mengikuti bahasa perangkat pengguna. **Tapi ini yang wajib kamu ingat seumur hidup:** validasi seperti ini adalah kenyamanan, bukan keamanan. Siapa pun bisa menghapus atribut `required` lewat DevTools dalam dua detik, atau mengirim permintaan langsung ke servermu tanpa memakai browser sama sekali — karena itu server **wajib** memvalidasi ulang semuanya. Prinsip ini punya nama yang sering muncul di interview: *never trust the client*.",
          example: {
            code:
              '<!-- wajib diisi, maksimal 5 karakter -->\n' +
              '<input type="text" name="kode" required maxlength="5">\n\n' +
              '<!-- hanya menerima angka, rentang 17 sampai 100 -->\n' +
              '<input type="number" name="umur" min="17" max="100">\n\n' +
              '<!-- pattern: harus tepat 5 angka, mis. kode pos -->\n' +
              '<input type="text" name="kodepos" pattern="[0-9]{5}" title="Isi 5 angka">',
            output:
              "Menekan submit dengan kode kosong memunculkan pesan bawaan browser 'Please fill out this field'.\n" +
              "Umur 15 ditolak dengan pesan 'Value must be greater than or equal to 17'.\n" +
              "Kode pos '123' ditolak, dan isi atribut title ditampilkan sebagai petunjuk.",
            note: "Isi `title` pada input ber-`pattern` dipakai browser sebagai penjelasan tambahan saat isiannya salah — tanpa itu pesannya terasa membingungkan bagi pengguna.",
          },
          instruction:
            "Buat input `type=\"text\"` dengan `name=\"username\"`, atribut `required`, dan `minlength=\"3\"`.",
          starterCode: '<form action="/daftar" method="post">\n  \n</form>',
          language: "html",
          tests: [
            {
              pattern: '<input[^>]*name=[\'"]username[\'"][^>]*>',
              message: 'Buat input dengan name="username".',
            },
            {
              pattern: "<input[^>]*\\srequired[\\s>]",
              message: "Tambahkan atribut required.",
            },
            {
              pattern: '<input[^>]*minlength=[\'"]3[\'"][^>]*>',
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
              pattern: '<button[^>]*type=[\'"]submit[\'"][^>]*>\\s*Kirim\\s*</button>',
              message: 'Tambahkan <button type="submit">Kirim</button>.',
            },
          ],
          solution:
            '<form action="/daftar" method="post">\n  <fieldset>\n    <legend>Data Diri</legend>\n    <label for="nama">Nama</label>\n    <input type="text" id="nama" name="nama" required>\n  </fieldset>\n  <button type="submit">Kirim</button>\n</form>',
        },
        {
          kind: "step",
          id: "html-4-8",
          title: "autocomplete dan inputmode untuk Pengisian di HP",
          explanation:
            "Dua atribut ini tidak mengubah tampilan sama sekali, tapi berdampak besar pada seberapa cepat orang selesai mengisi formulirmu di ponsel. `autocomplete` memberi tahu browser jenis data yang diminta — `autocomplete=\"email\"`, `\"name\"`, `\"tel\"`, `\"street-address\"`, atau `\"one-time-code\"` untuk kode OTP — sehingga browser dan pengelola kata sandi bisa menawarkan isian yang sudah pernah disimpan pengguna. `inputmode` mengatur **papan ketik** yang muncul tanpa mengubah tipe inputnya: `inputmode=\"numeric\"` memunculkan tombol angka besar untuk hal seperti NIK atau kode pos, sementara inputnya tetap `type=\"text\"` sehingga angka nol di depan tidak hilang dan tidak ada tombol naik-turun yang mengganggu. Jebakan yang perlu dihindari: mematikan autocomplete di seluruh formulir dengan alasan keamanan. Kebiasaan itu justru mendorong orang memakai kata sandi yang mudah diingat, dan pedoman aksesibilitas menganggapnya penghalang bagi pengguna dengan keterbatasan motorik.",
          example: {
            code:
              '<label for="nm">Nama lengkap</label>\n' +
              '<input type="text" id="nm" name="nama" autocomplete="name">\n\n' +
              '<label for="kp">Kode pos</label>\n' +
              '<input type="text" id="kp" name="kodepos"\n' +
              '       inputmode="numeric" autocomplete="postal-code">',
            output:
              "Di ponsel, isian nama menawarkan saran nama yang tersimpan di browser. Isian kode pos memunculkan papan ketik angka, tapi tetap menerima '01234' tanpa membuang angka nol di depannya.",
            note: "Pakai `type=\"text\"` + `inputmode=\"numeric\"` untuk nomor yang bukan untuk dihitung (NIK, kode pos, nomor rekening). `type=\"number\"` cocok hanya untuk nilai yang benar-benar dihitung.",
          },
          instruction:
            "Formulir checkout di editor punya satu isian nomor telepon. Lengkapi input itu dengan dua atribut: satu yang memberi tahu browser jenis data ini agar isian tersimpan bisa ditawarkan, dan satu lagi yang memunculkan papan ketik angka di ponsel tanpa mengubah tipe inputnya.",
          starterCode:
            '<form action="/checkout" method="post">\n' +
            '  <label for="hp">Nomor HP</label>\n' +
            '  <input type="text" id="hp" name="telepon">\n' +
            "</form>\n",
          language: "html",
          tests: [
            {
              pattern: '<input[^>]*autocomplete=[\'"]tel[\'"][^>]*>',
              message:
                'Tambahkan `autocomplete="tel"` — nilainya adalah nama jenis data, dan untuk nomor telepon namanya `tel`.',
            },
            {
              pattern: '<input[^>]*inputmode=[\'"]numeric[\'"][^>]*>',
              message:
                'Tambahkan `inputmode="numeric"` agar papan ketik angka muncul di ponsel, sementara `type` tetap `text`.',
            },
            {
              pattern: '<input[^>]*type=[\'"]number[\'"][^>]*>',
              mustNotMatch: true,
              message:
                'Jangan mengganti tipenya menjadi `number`. Nomor telepon bukan nilai yang dihitung, dan `type="number"` akan membuang angka nol di depan serta menampilkan tombol naik-turun.',
            },
          ],
          solution:
            '<form action="/checkout" method="post">\n' +
            '  <label for="hp">Nomor HP</label>\n' +
            '  <input type="text" id="hp" name="telepon"\n' +
            '         autocomplete="tel" inputmode="numeric">\n' +
            "</form>",
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
          kind: "materi",
          id: "html-5-m1",
          title: "Aksesibilitas: Halaman yang Bisa Dipakai Tanpa Melihat Layar",
          body:
            "# Pengertian\n\n" +
            "**Aksesibilitas** (sering disingkat *a11y* — huruf a, sebelas huruf, huruf y) berarti halamanmu tetap bisa dipakai oleh orang yang tidak memakainya dengan cara yang kamu bayangkan: tanpa melihat layar, tanpa memakai tetikus, dengan tangan yang gemetar, atau di bawah sinar matahari yang membuat kontras rendah tidak terbaca.\n\n" +
            "Ini bukan topik amal. Sebagian besar pekerjaannya sudah selesai kalau kamu memakai elemen HTML yang benar — yang justru butuh usaha adalah *merusaknya*, misalnya dengan membuat tombol dari `<div>`.\n\n" +
            "## Bagaimana Screen Reader Membaca Halamanmu\n\n" +
            "*Screen reader* adalah perangkat lunak yang membacakan isi layar dengan suara. Yang perlu kamu tahu: ia tidak membaca halaman sebagai gambar, melainkan sebagai **daftar berurutan** yang bisa dilompati.\n\n" +
            "```text\n" +
            "pengguna menekan:      screen reader menyebutkan:\n" +
            "-------------------    ---------------------------------------\n" +
            "Tab                    elemen interaktif berikutnya (tautan, tombol, input)\n" +
            "daftar heading         \"Panduan Belajar, tingkat 1\" ... \"Bagian Pertama, tingkat 2\"\n" +
            "daftar landmark        \"navigasi\", \"konten utama\", \"footer\"\n" +
            "sampai di gambar       isi atribut alt — atau nama berkasnya kalau alt tidak ada\n" +
            "sampai di tombol ikon  \"tombol\" saja, kalau tidak ada nama yang bisa diakses\n" +
            "```\n\n" +
            "Dari tabel itu terbaca dua hal sekaligus: kenapa hierarki heading dan landmark penting, dan kenapa `alt` serta nama tombol bukan sekadar formalitas.\n\n" +
            "## Empat Hal yang Menutup Sebagian Besar Masalah\n\n" +
            "| Hal | Aturan praktisnya |\n" +
            "|---|---|\n" +
            "| Teks alternatif | `alt` menjawab \"informasi apa yang hilang kalau gambar tidak muncul\"; gambar hiasan pakai `alt=\"\"` |\n" +
            "| Struktur heading | turun satu tingkat setiap kali, jangan melompat, satu `h1` per halaman |\n" +
            "| Elemen native | tautan pakai `<a>`, tombol pakai `<button>` — jangan `<div>` yang dipaksa |\n" +
            "| Nama yang bisa diakses | tombol ikon butuh `aria-label`; input butuh `<label>` |\n\n" +
            "## Navigasi Keyboard\n\n" +
            "Cobalah sekarang: buka halaman apa pun, lalu tekan Tab beberapa kali tanpa menyentuh tetikus. Kotak fokus akan berpindah antar tautan dan tombol. Dua hal yang perlu kamu perhatikan seumur hidup sebagai developer:\n\n" +
            "- **Fokusnya harus kelihatan.** Menghilangkan garis fokus dengan CSS (`outline: none`) tanpa menggantinya membuat pengguna keyboard tidak tahu sedang berada di mana.\n" +
            "- **Urutannya harus wajar.** Urutan Tab mengikuti urutan elemen di HTML, bukan urutan posisi di layar. Kalau kamu memindahkan sesuatu secara visual dengan CSS, urutan Tab-nya tidak ikut berpindah.\n\n" +
            "## Kontras dan Ukuran Target Sentuh\n\n" +
            "Dua ukuran yang dipakai sebagai patokan di industri, keduanya berasal dari pedoman WCAG:\n\n" +
            "- **Kontras teks minimal 4,5:1** dibanding latarnya untuk teks berukuran biasa. Teks abu-abu muda di atas putih adalah pelanggaran paling umum — dan yang pertama mengeluh biasanya bukan penyandang disabilitas, tapi pengguna biasa di bawah sinar matahari.\n" +
            "- **Target sentuh minimal sekitar 44x44 piksel.** Tautan yang berdempetan di HP membuat orang salah tekan. Ini juga alasan praktis kenapa `<label>` yang terhubung ke input begitu berharga: seluruh tulisan labelnya ikut jadi area yang bisa disentuh.\n\n" +
            "## Aturan Pertama ARIA\n\n" +
            "ARIA adalah sekumpulan atribut tambahan (`role`, `aria-label`, `aria-hidden`) untuk menjelaskan hal-hal yang tidak bisa dinyatakan HTML biasa. Aturan pertamanya, ditulis di spesifikasinya sendiri, terdengar mengejutkan:\n\n" +
            "> **Jangan pakai ARIA kalau ada elemen HTML yang sudah sesuai.**\n\n" +
            "`<div role=\"button\" tabindex=\"0\">` butuh JavaScript tambahan supaya bisa ditekan dengan Enter dan Space, dan bagian itulah yang paling sering terlupa. `<button>` memberikan semuanya gratis. ARIA yang dipakai setengah jalan lebih buruk daripada tidak memakai ARIA sama sekali, karena ia menjanjikan perilaku yang tidak ada.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Aksesibilitas itu seperti **ramp dan lift di gedung**. Dibangun sejak awal, biayanya kecil dan hampir tidak terlihat. Ditambahkan setelah gedung berdiri, ia mahal, jelek, dan sering diletakkan di pintu belakang. Yang menariknya: yang paling sering memakai ramp bukan pengguna kursi roda, melainkan orang yang mendorong troli atau koper — persis seperti `alt` yang membantu mesin pencari, dan `<label>` yang membantu semua orang di layar HP.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Menghapus atribut `alt`** pada gambar hiasan. Sebagian screen reader lalu membacakan nama berkasnya; yang benar `alt=\"\"`.\n" +
            "2. **Memilih tingkat heading berdasarkan ukuran huruf.** Daftar isi tak terlihat itu jadi menyesatkan; ukuran diatur CSS.\n" +
            "3. **Membuat tombol dari `<div>`.** Tanpa JavaScript tambahan ia tidak bisa ditekan Enter maupun Space.\n" +
            "4. **Menghapus garis fokus dengan `outline: none`** tanpa menggantinya. Pengguna keyboard kehilangan penanda posisi.\n" +
            "5. **Memasang `aria-label` pada elemen yang sudah punya teks bermakna.** Ia menimpa teks aslinya, dan yang dibacakan bisa berbeda dari yang terlihat.\n" +
            "6. **Menganggap alat audit sudah cukup.** Lighthouse tidak bisa menilai apakah `alt`-mu masuk akal — hanya manusia yang bisa.\n\n" +
            "## Cara Memeriksa Pekerjaanmu\n\n" +
            "1. **Lighthouse** — sudah ada di Chrome DevTools, tab *Lighthouse*. Jalankan, lihat bagian Accessibility. Ia menangkap masalah mekanis: kontras rendah, gambar tanpa alt, tombol tanpa nama.\n" +
            "2. **axe DevTools** — ekstensi gratis, temuannya lebih rinci beserta cara memperbaikinya.\n" +
            "3. **Tab tanpa tetikus** — pemeriksaan paling murah dan paling sering menemukan masalah nyata yang tidak tertangkap alat.\n\n" +
            "> **Kapan dipakai di dunia kerja:** untuk situs pemerintah dan perusahaan besar, aksesibilitas sering menjadi kewajiban kontrak atau hukum. Di lowongan frontend, *a11y* makin sering muncul di daftar syarat, dan pertanyaan interview yang khas bukan \"apa itu ARIA\" melainkan \"kenapa `<div onclick>` bermasalah\" — pertanyaan yang langsung memisahkan orang yang menyalin pola dari orang yang paham akibatnya.",
        },
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
              pattern: '<img[^>]*src=[\'"]grafik\\.png[\'"][^>]*alt=[\'"][^"\']*penjualan[^"\']*[\'"]|<img[^>]*alt=[\'"][^"\']*penjualan[^"\']*[\'"][^>]*src=[\'"]grafik\\.png[\'"]',
              message:
                'Gambar grafik.png harus punya alt deskriptif yang memuat kata "penjualan", misal alt="Grafik penjualan naik tiap bulan".',
            },
            {
              pattern: '<img[^>]*src=[\'"]hiasan\\.svg[\'"][^>]*alt=[\'"][\'"]|<img[^>]*alt=[\'"][\'"][^>]*src=[\'"]hiasan\\.svg[\'"]',
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
            "Pengguna screen reader jarang mendengarkan halaman dari awal sampai akhir; mereka membuka daftar heading lalu **melompat** ke bagian yang dicari, persis seperti kamu melirik daftar isi buku. Daftar itu hanya berguna kalau tingkatannya konsisten, karena tingkat heading menyatakan hubungan induk-anak: `h3` berarti \"sub-bagian dari h2 di atasnya\". Begitu kamu melompat dari `h1` langsung ke `h5`, perangkatnya mengumumkan tingkat 5 dan penggunanya menyimpulkan ada tiga tingkat bagian yang terlewat — struktur dokumenmu jadi menyesatkan meski tampilannya rapi. Sumber kesalahan ini hampir selalu sama: memilih heading karena **ukuran hurufnya terlihat pas**. Kalau `h2` terasa terlalu besar, kecilkan lewat CSS; tingkat heading ditentukan oleh struktur, bukan oleh selera visual.",
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
              pattern: "<h[456]\\b",
              mustNotMatch: true,
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
              pattern: '<button[^>]*aria-label=[\'"]Tutup dialog[\'"][^>]*>',
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
              message:
                "Pakai elemen native `<button>`, bukan `<div>` yang dipaksa jadi tombol. Yang kamu dapat gratis: bisa difokus dengan Tab, bisa ditekan dengan Enter dan Spasi, dan langsung dikenali screen reader sebagai tombol.",
            },
            {
              pattern: "role=['\"]button['\"]",
              mustNotMatch: true,
              message:
                "Kalau elemennya sudah `<button>`, atribut `role=\"button\"` justru berlebihan dan tidak perlu ada. Atribut itu hanya jadi tambalan saat seseorang memaksa `<div>` berperan sebagai tombol — dan tambalan itu tetap tidak memberi dukungan keyboard.",
            },
          ],
          solution: "<button>Simpan</button>",
        },
        {
          kind: "step",
          id: "html-5-5",
          title: "Skip link untuk pengguna keyboard",
          explanation:
            "Pengguna keyboard berpindah antar elemen dengan menekan Tab, dan urutannya mengikuti urutan elemen di HTML. Akibatnya, sebelum sampai ke isi halaman ia harus melewati seluruh menu lebih dulu — pada navigasi besar itu bisa dua puluh kali tekan, di setiap halaman yang ia buka. **Skip link** menyelesaikan ini: sebuah tautan yang diletakkan paling awal di halaman dan menunjuk ke `id` elemen konten utama, sehingga satu kali Tab lalu Enter sudah memindahkan fokus ke sana. Tautan ini biasanya disembunyikan dengan CSS sampai ia mendapat fokus, jadi pengguna tetikus tidak pernah melihatnya sementara pengguna keyboard menemukannya sebagai perhentian pertama. Yang wajib diperhatikan: nilai `href=\"#konten\"` harus sama persis dengan `id=\"konten\"` pada targetnya — kalau tidak cocok, tautannya tidak melompat ke mana-mana dan tidak ada pesan error apa pun yang memberitahumu.",
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
              pattern: '<a[^>]*href=[\'"]#konten[\'"][^>]*>\\s*Lewati ke konten\\s*</a>',
              message: 'Buat <a href="#konten">Lewati ke konten</a>.',
            },
            {
              pattern: '<main[^>]*id=[\'"]konten[\'"][^>]*>',
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
          kind: "step",
          id: "html-5-6",
          title: "aria-hidden untuk Ikon yang Tidak Perlu Dibacakan",
          explanation:
            "Ikon yang ditulis sebagai karakter atau emoji tetap dibacakan screen reader, dan hasilnya sering aneh: tombol \"Simpan\" berikon disket bisa terdengar sebagai \"disket Simpan\", atau ikon bintang dibacakan namanya satu per satu. `aria-hidden=\"true\"` menyembunyikan sebuah elemen **dari teknologi bantu saja**, tanpa mengubah tampilannya sedikit pun — berbeda dari `hidden` atau `display: none` yang menyembunyikannya dari semua orang. Aturan pemakaiannya cuma satu: pakai hanya saat isinya benar-benar hiasan yang informasinya sudah disampaikan teks di sebelahnya. Jebakan yang berbahaya: memasangnya pada elemen yang bisa difokuskan Tab, misalnya tombol atau tautan. Elemen itu tetap bisa dijangkau keyboard tapi tidak punya nama untuk dibacakan, sehingga penggunanya mendapat perhentian kosong yang membingungkan — inilah alasan `aria-hidden` sebaiknya hanya dipasang pada bagian ikonnya, bukan pada tombolnya.",
          example: {
            code:
              '<!-- ikon ikut dibacakan: "bintang Favorit" -->\n' +
              "<button>★ Favorit</button>\n\n" +
              '<!-- ikon disembunyikan dari screen reader saja -->\n' +
              '<button><span aria-hidden="true">★</span> Favorit</button>',
            output:
              "Tampilan kedua tombol identik. Yang pertama dibacakan sebagai 'bintang hitam Favorit, tombol', yang kedua sebagai 'Favorit, tombol'.",
            note: "aria-hidden menyembunyikan dari screen reader tapi TETAP terlihat di layar. Kalau kamu ingin menyembunyikan dari semua orang, itu tugas `hidden` atau CSS.",
          },
          instruction:
            "Tombol di editor menampilkan ikon panah diikuti teks yang sudah menjelaskan fungsinya, sehingga ikonnya tidak perlu ikut dibacakan. Bungkus karakter ikonnya dengan sebuah `<span>`, lalu sembunyikan span itu dari screen reader tanpa mengubah tampilannya. Jangan menyentuh teks tombolnya.",
          starterCode: "<button>→ Lanjut ke pembayaran</button>\n",
          language: "html",
          tests: [
            {
              pattern: '<span[^>]*aria-hidden=[\'"]true[\'"][^>]*>\\s*→\\s*</span>',
              message:
                'Bungkus ikonnya saja: `<span aria-hidden="true">→</span>`. Nilainya harus `true` — `aria-hidden="false"` tidak menyembunyikan apa pun.',
            },
            {
              pattern: "<button[^>]*>[\\s\\S]*Lanjut ke pembayaran[\\s\\S]*</button>",
              message:
                "Teks `Lanjut ke pembayaran` harus tetap ada di dalam tombol — itulah nama yang dibacakan screen reader.",
            },
            {
              pattern: '<button[^>]*aria-hidden',
              mustNotMatch: true,
              message:
                "Jangan memasang aria-hidden pada tombolnya. Tombol yang bisa difokuskan Tab tapi tersembunyi dari screen reader menjadi perhentian kosong yang membingungkan — sembunyikan hanya bagian ikonnya.",
            },
          ],
          solution:
            '<button><span aria-hidden="true">→</span> Lanjut ke pembayaran</button>',
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
                "Skip link menghemat puluhan tekanan Tab bagi pengguna keyboard dan screen reader, di setiap halaman yang mereka buka. Ia biasanya disembunyikan sampai mendapat fokus, dan `href`-nya harus cocok persis dengan `id` elemen tujuan. Pilihan tentang kecepatan memuat menggoda karena kata \"skip\" terdengar seperti melewatkan pemuatan sesuatu — padahal tidak ada berkas yang dilewati; yang dipersingkat adalah perjalanan fokus keyboard.",
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
          kind: "materi",
          id: "html-6-m1",
          title: "Bagian Halaman yang Tidak Terlihat — tapi Paling Menentukan",
          body:
            "# Pengertian\n\n" +
            "Modul ini tentang isi `<head>`: bagian halaman yang tidak pernah dilihat pengunjung, tapi menentukan bagaimana halamanmu tampil di hasil pencarian, bagaimana tautanmu terlihat saat dibagikan di WhatsApp, dan apakah halamanmu terbaca benar di HP.\n\n" +
            "Inilah bagian yang paling membedakan halaman buatan pemula dan halaman produksi. Bukan karena sulit — justru karena isinya hampir tidak pernah terlihat, jadi mudah dilewatkan.\n\n" +
            "## Isi Head yang Wajib Ada\n\n" +
            "```html\n" +
            "<head>\n" +
            "  <meta charset=\"UTF-8\">                                  <!-- 1. paling atas -->\n" +
            "  <meta name=\"viewport\"\n" +
            "        content=\"width=device-width, initial-scale=1\">     <!-- 2. wajib untuk HP -->\n" +
            "  <title>Resep Nasi Goreng - Dapur Kita</title>            <!-- 3. judul di tab & Google -->\n" +
            "  <meta name=\"description\" content=\"Cara membuat...\">      <!-- 4. cuplikan di Google -->\n" +
            "  <link rel=\"icon\" href=\"/favicon.ico\">                    <!-- 5. ikon di tab -->\n" +
            "  <link rel=\"stylesheet\" href=\"/style.css\">                <!-- 6. berkas CSS -->\n" +
            "</head>\n" +
            "```\n\n" +
            "| Baris | Kalau dilupakan |\n" +
            "|---|---|\n" +
            "| `charset` | huruf beraksen dan emoji berubah jadi karakter aneh seperti `Ã©` |\n" +
            "| `viewport` | di HP halaman tampil mengecil, dan seluruh CSS responsive-mu tidak terasa |\n" +
            "| `title` | tab dan hasil pencarian menampilkan nama berkas atau alamat |\n" +
            "| `description` | Google mengarang cuplikan sendiri dari isi halaman |\n" +
            "| `link rel=stylesheet` | halaman tampil tanpa gaya sama sekali |\n\n" +
            "Baris `viewport` adalah yang paling sering ditanyakan pemula tanpa sadar: \"CSS responsive-ku sudah benar, kok di HP tetap mengecil?\" Hampir selalu jawabannya baris itu.\n\n" +
            "> **Catatan tentang panel preview di modul ini:** karena isi `<head>` memang tidak pernah tampil di layar, panel preview di sebagian besar latihan modul ini akan tampak **kosong** — itu normal, bukan tanda kodemu salah. Yang menilai jawabanmu di sini adalah tombol Jalankan Tes. Beberapa latihan juga menyebut berkas seperti `/style.css` dan `/favicon.ico` yang tidak ada di preview, jadi tidak ada perubahan yang bisa kamu lihat.\n\n" +
            "## Kenapa charset Harus Paling Atas\n\n" +
            "Browser membaca berkasmu dari atas ke bawah dan langsung mulai menafsirkan huruf. Kalau kamu baru menyebutkan pengkodean karakter di tengah `<head>`, teks yang sudah dibaca sebelumnya bisa salah ditafsirkan. Karena itu `charset` selalu ditulis sebagai elemen pertama.\n\n" +
            "## Open Graph: Wajah Tautanmu di Luar\n\n" +
            "Saat tautanmu dibagikan, WhatsApp, LinkedIn, dan X tidak membuka halamanmu seperti manusia. Mereka membaca beberapa tag khusus untuk menyusun kartu pratinjau:\n\n" +
            "```html\n" +
            "<meta property=\"og:title\" content=\"Resep Nasi Goreng\">\n" +
            "<meta property=\"og:description\" content=\"Enak, cepat, 15 menit.\">\n" +
            "<meta property=\"og:image\" content=\"https://dapurkita.id/nasgor.jpg\">\n" +
            "```\n\n" +
            "> **Perhatikan bedanya:** Open Graph memakai `property=`, sedangkan meta biasa seperti `description` memakai `name=`. Tertukar sedikit saja membuatnya gagal **tanpa pesan error apa pun** — pratinjaunya hanya tidak muncul. Dan `og:image` harus memakai alamat lengkap berawalan `https://`, karena platform luar tidak tahu alamat dasar situsmu.\n\n" +
            "## Struktur Folder Proyek Statis\n\n" +
            "```text\n" +
            "situsku/\n" +
            "  index.html        <- halaman utama, di akar folder\n" +
            "  tentang.html\n" +
            "  css/\n" +
            "    style.css\n" +
            "  img/\n" +
            "    logo.svg\n" +
            "  js/\n" +
            "    app.js\n" +
            "```\n\n" +
            "Kesepakatan yang dipakai hampir semua proyek: `index.html` di akar, berkas pendukung dikelompokkan per jenis di dalam folder. Penataan ini yang membuat jalur seperti `css/style.css` dan `img/logo.svg` bisa ditulis pendek dan tidak berubah saat proyek bertambah besar.\n\n" +
            "## Memeriksa Pekerjaanmu\n\n" +
            "- **W3C Validator** (`validator.w3.org`) memeriksa apakah HTML-mu sah. Kesalahan paling sering yang ia laporkan: tag belum ditutup, `id` yang sama dipakai dua kali, `alt` yang hilang pada gambar, dan elemen yang ditaruh di tempat yang tidak diperbolehkan.\n" +
            "- **Klik kanan lalu View Page Source** pada situs mana pun untuk membandingkan `<head>` mereka dengan milikmu. Situs berita dan e-commerce adalah contoh terbaik, karena `<head>` mereka digarap serius demi hasil pencarian.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "`<head>` itu seperti **sampul dan katalog sebuah buku di perpustakaan**. Pembaca yang sudah memegang bukumu tidak peduli pada nomor katalognya. Tapi tanpa sampul yang jelas dan kartu katalog yang benar, bukumu tidak pernah ditemukan orang yang mencarinya — dan berapa pun bagusnya isinya, tidak ada yang membacanya.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Judul yang sama di seluruh halaman.** \"Beranda\" di setiap halaman membuat mesin pencari tidak bisa membedakan isinya.\n" +
            "2. **`name=\"og:title\"`.** Open Graph memakai `property`, dan kesalahan ini gagal secara sunyi.\n" +
            "3. **`og:image` dengan jalur relatif.** Platform luar butuh alamat lengkap.\n" +
            "4. **Menyimpan data untuk JavaScript di `class` atau `id`.** Untuk itu ada `data-*`, yang sah dan dibaca lewat `element.dataset`.\n" +
            "5. **Menaruh `<link rel=\"stylesheet\">` di akhir `<body>`.** Halaman akan tampil sesaat tanpa gaya sebelum CSS-nya termuat.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** setiap halaman baru yang masuk produksi diperiksa bagian ini — biasanya oleh orang SEO atau lewat audit otomatis di pipeline. Menyiapkan `<head>` yang benar adalah salah satu tugas paling awal yang dipercayakan ke developer baru, karena dampaknya besar sementara risikonya kecil. Dan `data-*` adalah jembatan yang akan kamu pakai terus di track JavaScript nanti.",
        },
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
              pattern: '<meta[^>]*charset=[\'"]?UTF-8[\'"]?[^>]*>',
              message: 'Tambahkan <meta charset="UTF-8">.',
            },
            {
              pattern: '<meta(?=[^>]*\\bname=[\'"]viewport[\'"])(?=[^>]*\\bcontent=[\'"]width=device-width,\\s*initial-scale=1[^"\']*[\'"])[^>]*>',
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
              pattern: '<meta(?=[^>]*\\bname=[\'"]description[\'"])(?=[^>]*\\bcontent=[\'"][^"\']{30,}[\'"])[^>]*>',
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
              pattern: '<meta(?=[^>]*\\bproperty=[\'"]og:title[\'"])(?=[^>]*\\bcontent=[\'"][^"\']{3,}[\'"])[^>]*>',
              message: 'Tambahkan <meta property="og:title" content="...">.',
            },
            {
              pattern: '<meta(?=[^>]*\\bproperty=[\'"]og:description[\'"])(?=[^>]*\\bcontent=[\'"][^"\']{3,}[\'"])[^>]*>',
              message: 'Tambahkan <meta property="og:description" content="...">.',
            },
            {
              pattern: '<meta(?=[^>]*\\bproperty=[\'"]og:image[\'"])(?=[^>]*\\bcontent=[\'"]https://bilearn\\.id/preview\\.png[\'"])[^>]*>',
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
              pattern: '<link[^>]*rel=[\'"]icon[\'"][^>]*href=[\'"]/favicon\\.ico[\'"]|<link[^>]*href=[\'"]/favicon\\.ico[\'"][^>]*rel=[\'"]icon[\'"]',
              message: 'Tambahkan <link rel="icon" href="/favicon.ico">.',
            },
            {
              pattern: '<link[^>]*rel=[\'"]stylesheet[\'"][^>]*href=[\'"]/style\\.css[\'"]|<link[^>]*href=[\'"]/style\\.css[\'"][^>]*rel=[\'"]stylesheet[\'"]',
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
            "Sering kali kamu perlu menempelkan sepotong data pada sebuah elemen supaya JavaScript bisa membacanya nanti — misalnya ID produk pada tombol \"Beli\". Godaannya adalah menumpangkannya ke `class` (`class=\"produk-42\"`) atau ke `id`, dan keduanya bermasalah: `class` seharusnya milik CSS, sedangkan `id` wajib unik dan bukan tempat menyimpan nilai bisnis. Untuk kebutuhan ini HTML menyediakan atribut `data-*`: namanya bebas setelah awalan `data-`, sah secara resmi, dan tidak berpengaruh apa pun ke tampilan. JavaScript membacanya lewat `element.dataset`, dengan satu konversi yang perlu diingat — tanda hubung berubah menjadi camelCase, jadi `data-product-id` diakses sebagai `dataset.productId`. Satu peringatan penting: isinya terbaca siapa pun yang membuka DevTools, jadi jangan pernah menyimpan harga yang menentukan tagihan atau data rahasia di sana; server tetap harus memastikan sendiri nilainya.",
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
              pattern: '<button[^>]*data-product-id=[\'"]42[\'"][^>]*>',
              message: 'Tambahkan data-product-id="42" pada button.',
            },
            {
              pattern: '<button[^>]*data-price=[\'"]50000[\'"][^>]*>',
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
              pattern: '<html[^>]*lang=[\'"]id[\'"][^>]*>',
              message: 'Gunakan <html lang="id">.',
            },
            {
              pattern: '<meta[^>]*charset=[\'"]?UTF-8[\'"]?[^>]*>',
              message: 'Tambahkan <meta charset="UTF-8"> di head.',
            },
            {
              pattern: '<meta[^>]*name=[\'"]viewport[\'"][^>]*>',
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
          kind: "step",
          id: "html-6-7",
          title: "Validasi HTML: Tiga Kesalahan yang Paling Sering Ditemukan",
          explanation:
            "Karena browser tidak pernah menolak HTML yang salah, satu-satunya cara memastikan kodemu sah adalah memeriksanya dengan alat: **W3C Validator** di `validator.w3.org`, tempat kamu bisa menempelkan kode atau memasukkan alamat halaman. Tiga temuan yang mendominasi laporannya selalu sama. Pertama, **tag yang belum ditutup** — akibatnya elemen berikutnya ikut tersedot ke dalamnya dan tampilan berubah jauh dari satu baris yang keliru. Kedua, **`id` yang dipakai lebih dari sekali**; `id` wajib unik per halaman karena tautan `#nama`, `<label for>`, dan JavaScript semuanya berhenti di kecocokan pertama, sehingga elemen kedua diam-diam tidak pernah tersentuh. Ketiga, **gambar tanpa `alt`**, yang membuat screen reader membacakan nama berkasnya. Kebiasaan yang layak dibangun sekarang: jalankan validator sebelum menyerahkan pekerjaan, karena semua temuan itu murah diperbaiki hari ini dan mahal dicari nanti.",
          example: {
            code:
              "<!-- kode dengan dua temuan validator -->\n" +
              '<section id="menu">\n' +
              "  <h2>Menu<h2>                          <!-- h2 tidak ditutup, ditulis ulang -->\n" +
              '  <img src="kopi.jpg">                  <!-- alt tidak ada -->\n' +
              "</section>",
            output:
              "Laporan validator:\n" +
              "  Error: Stray start tag h2.\n" +
              "  Error: An img element must have an alt attribute, except under certain conditions.\n" +
              "Di layar, seluruh isi setelah judul ikut tampil sebagai judul besar karena h2 tidak pernah ditutup.",
            note: "Pesan \"Stray start tag\" hampir selalu berarti tag penutupnya salah tulis — perhatikan garis miringnya.",
          },
          instruction:
            "Kode di editor punya tiga pelanggaran yang akan dilaporkan validator: satu tag yang tidak pernah ditutup, satu nilai `id` yang dipakai dua kali, dan satu gambar tanpa teks alternatif. Perbaiki ketiganya tanpa mengubah tulisan yang sudah ada — untuk `id` yang bentrok, ganti yang kedua menjadi `harga-teh`, dan beri gambar deskripsi `Segelas kopi tubruk`.",
          starterCode:
            '<section id="daftar">\n' +
            "  <p>Kopi tubruk\n" +
            '  <span id="harga">18.000</span>\n' +
            '  <span id="harga">12.000</span>\n' +
            '  <img src="kopi.jpg">\n' +
            "</section>\n",
          language: "html",
          tests: [
            {
              pattern: "Kopi tubruk\\s*</p>",
              message:
                "Paragrafnya belum ditutup. Tambahkan `</p>` tepat setelah teks `Kopi tubruk`.",
            },
            {
              pattern: 'id=[\'"]harga-teh[\'"]',
              message:
                'Ganti nilai `id` yang kedua menjadi `harga-teh` supaya tidak ada dua elemen dengan id yang sama.',
            },
            {
              pattern: 'id=[\'"]harga[\'"][\\s\\S]*id=[\'"]harga[\'"]',
              mustNotMatch: true,
              message:
                'Masih ada dua elemen dengan `id="harga"`. Nilai id wajib unik dalam satu halaman.',
            },
            {
              pattern: '<img[^>]*alt=[\'"]Segelas kopi tubruk[\'"][^>]*>',
              message:
                'Tambahkan `alt="Segelas kopi tubruk"` pada gambar — gambar informatif tanpa alt selalu dilaporkan validator.',
            },
          ],
          solution:
            '<section id="daftar">\n' +
            "  <p>Kopi tubruk</p>\n" +
            '  <span id="harga">18.000</span>\n' +
            '  <span id="harga-teh">12.000</span>\n' +
            '  <img src="kopi.jpg" alt="Segelas kopi tubruk">\n' +
            "</section>",
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
                'lang (misalnya <html lang="id">) membuat screen reader memakai pelafalan yang benar. Tanpa itu, teks Indonesia bisa dibacakan dengan pelafalan Inggris dan nyaris tidak dimengerti pendengarnya. Atribut ini juga dipakai browser untuk menawarkan terjemahan dan aturan pemisahan suku kata. Pengecoh `language` dan `locale` menggoda karena keduanya kata yang tepat secara makna — tapi nama atributnya memang hanya `lang`; sedangkan `charset` mengurus pengkodean karakter, bukan bahasa.',
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Kamu menata folder sebuah situs statis. Susunan mana yang mengikuti kesepakatan umum?",
              choices: [
                "Semua berkas HTML, CSS, dan gambar dicampur di satu folder",
                "index.html di akar folder, lalu berkas pendukung dikelompokkan di css/, img/, dan js/",
                "Setiap halaman dibuatkan satu folder sendiri berisi salinan CSS-nya",
                "index.html diletakkan di dalam folder html/ agar rapi",
              ],
              answerIndex: 1,
              explanation:
                "`index.html` harus berada di akar folder supaya bisa dibuka lewat alamat situs tanpa nama berkas, sementara berkas pendukung dikelompokkan per jenis agar jalur seperti `css/style.css` tetap pendek dan tidak berubah saat proyek bertambah besar. Pilihan terakhir menggoda karena terasa lebih teratur — tapi memindahkan `index.html` ke dalam folder membuat halaman utamamu hanya bisa dibuka lewat `/html/index.html`. Menyalin CSS ke setiap folder halaman membuat satu perubahan gaya harus dikerjakan berulang kali.",
            },
            {
              id: "q6",
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
