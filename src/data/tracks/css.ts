import type { Track } from "@/lib/types";

export const cssTrack: Track = {
  slug: "css",
  title: "CSS",
  description:
    "Styling dari dasar sampai Tailwind & Figma-to-CSS pixel-perfect.",
  hours: 70,
  recommendedPrereqs: ["html"],
  color: "bg-blue-500",
  icon: "🎨",
  order: 2,
  modules: [
    {
      slug: "persiapan-alat-kerja",
      title: "Persiapan & Alat Kerja",
      description:
        "Cara CSS menempel ke HTML, dan cara mencari tahu kenapa gayamu tidak muncul.",
      topics: [
        "Apa yang dikerjakan CSS dan bagaimana ia menempel ke HTML",
        "Tiga cara memasang CSS & kenapa external stylesheet menang",
        "CSS gagal dalam diam: deklarasi salah diabaikan tanpa pesan error",
        "Komentar CSS dan cara mematikan aturan sementara",
        "DevTools: melihat aturan mana yang benar-benar berlaku",
        "Gaya bawaan browser dan dari mana jarak yang tidak kamu tulis berasal",
      ],
      items: [
        {
          kind: "materi",
          id: "css-0-m1",
          title: "Cara CSS Bekerja, dan Alat untuk Mencari Tahu Kenapa Ia Tidak Bekerja",
          body:
            "# Pengertian\n\n" +
            "HTML menyusun isi halaman; **CSS menentukan tampilannya**. Kamu tidak menyuruh browser menggambar sesuatu langkah demi langkah — kamu menulis **aturan**, dan browser menerapkannya ke setiap elemen yang cocok.\n\n" +
            "```text\n" +
            "p { color: blue; }\n" +
            "^   ^^^^^  ^^^^\n" +
            "|     |      |\n" +
            "|     |      nilai\n" +
            "|     properti\n" +
            "selector: siapa yang dirias\n" +
            "```\n\n" +
            "Satu pasangan `properti: nilai;` disebut **deklarasi**. Kumpulan deklarasi di dalam kurung kurawal disebut **blok**. Selector + blok = satu **aturan**.\n\n" +
            "## Tiga Cara CSS Menempel ke HTML\n\n" +
            "| Cara | Bentuknya | Kapan dipakai |\n" +
            "|---|---|---|\n" +
            "| Inline | `<p style=\"color: red\">` | hampir tidak pernah — sulit dipakai ulang dan paling sulit ditimpa |\n" +
            "| Internal | `<style>` di dalam `<head>` | halaman tunggal, contoh cepat, email |\n" +
            "| External | `<link rel=\"stylesheet\" href=\"style.css\">` | **semua proyek nyata** |\n\n" +
            "External menang karena satu berkas melayani ratusan halaman, browser menyimpannya di cache sehingga halaman kedua terasa instan, dan gaya tidak bercampur dengan struktur.\n\n" +
            "## Satu Sifat CSS yang Wajib Kamu Pahami Sekarang\n\n" +
            "> **CSS gagal dalam diam.** Kalau kamu salah menulis nama properti, salah menulis nilai, atau lupa titik koma, browser **tidak** menampilkan pesan error apa pun. Ia hanya mengabaikan bagian yang tidak ia mengerti, lalu melanjutkan.\n\n" +
            "Sifat ini sengaja dibuat begitu agar halaman lama tidak rusak ketika CSS punya fitur baru. Tapi bagi pemula, akibatnya melelahkan: kamu menatap kode yang \"kelihatan benar\" tanpa satu pun petunjuk. Contoh yang paling sering terjadi:\n\n" +
            "```css\n" +
            ".kartu {\n" +
            "  colour: red;      /* salah tulis: yang benar color   -> DIABAIKAN */\n" +
            "  width: 300        /* lupa satuan dan titik koma      -> DIABAIKAN */\n" +
            "  padding: 16px;    /* ikut hilang, karena baris di atasnya belum ditutup */\n" +
            "}\n" +
            "```\n\n" +
            "Karena itu satu deklarasi yang salah bisa menjatuhkan deklarasi di bawahnya. Titik koma bukan formalitas.\n\n" +
            "## Alat Utamamu: DevTools\n\n" +
            "Klik kanan pada elemen mana pun di browser, pilih **Inspect** (atau tekan F12). Panel yang terbuka adalah tempat kamu menghabiskan waktu paling banyak sebagai frontend developer:\n\n" +
            "| Yang kamu lihat | Artinya |\n" +
            "|---|---|\n" +
            "| Panel **Styles** | seluruh aturan yang menyasar elemen ini, diurutkan dari yang paling menang |\n" +
            "| Deklarasi yang **dicoret** | aturan itu kalah oleh aturan lain, atau nilainya tidak sah |\n" +
            "| Aturanmu **tidak muncul sama sekali** | selectornya tidak cocok dengan elemen ini — salah nama class, atau berkasnya belum tertaut |\n" +
            "| Tab **Computed** | nilai akhir yang benar-benar dipakai browser |\n" +
            "| Diagram kotak di bawah | ukuran content, padding, border, dan margin elemen itu |\n\n" +
            "Kamu juga bisa mengubah nilai langsung di panel Styles dan melihat hasilnya seketika. Itu cara tercepat mencoba ide sebelum menuliskannya ke berkas — dan perubahan di sana hilang saat halaman dimuat ulang, jadi aman untuk bereksperimen.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "CSS itu seperti **panduan merek sebuah perusahaan**: \"semua judul memakai warna biru korporat, semua tombol bersudut membulat 8 piksel\". Panduan tidak menuliskan isi brosurnya — ia menentukan penampilannya. Satu panduan melayani seluruh materi promosi, dan mengubah satu baris di panduan mengubah semuanya sekaligus. Itulah persisnya nilai berkas CSS eksternal.\n\n" +
            "## Jebakan yang Menjatuhkan Hampir Semua Pemula\n\n" +
            "1. **Berkas CSS belum tertaut.** Kalau tidak satu pun gayamu berlaku, periksa `<link>` dan jalur berkasnya sebelum memeriksa hal lain. Di DevTools, aturanmu tidak akan muncul sama sekali.\n" +
            "2. **Nama class tidak cocok.** `.kartu-utama` di CSS dan `class=\"kartu_utama\"` di HTML adalah dua nama berbeda. CSS tidak akan protes.\n" +
            "3. **Titik koma hilang.** Bukan hanya baris itu yang gagal — deklarasi setelahnya bisa ikut terbawa.\n" +
            "4. **Angka tanpa satuan.** `width: 300` diabaikan; yang sah `width: 300px`. Pengecualiannya cuma beberapa, seperti `line-height: 1.6` dan `z-index: 10`.\n" +
            "5. **Lupa bahwa browser punya gayanya sendiri.** Jarak di sekeliling halaman dan bulatan pada daftar bukan buatanmu — itu *user-agent stylesheet*, gaya bawaan browser.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** kemampuan membuka DevTools dan menjawab \"aturan mana yang sebenarnya berlaku di elemen ini\" adalah keterampilan harian frontend developer, bukan keterampilan tingkat lanjut. Saat sebuah tampilan tidak sesuai desain, orang berpengalaman tidak menebak-nebak lalu menambahkan `!important` — ia membuka panel Styles, melihat deklarasi mana yang dicoret, dan memperbaiki sumbernya.",
        },
        {
          kind: "step",
          id: "css-0-1",
          title: "Menautkan Berkas CSS Eksternal",
          explanation:
            "Di proyek nyata, gaya hampir selalu tinggal di berkas terpisah dan dipanggil dari `<head>` memakai elemen `<link>`. Tiga hal yang harus benar: `rel=\"stylesheet\"` menyatakan jenis hubungannya, `href` menunjuk jalur berkasnya, dan letaknya di dalam `<head>` supaya halaman tidak sempat tampil tanpa gaya sesaat. `<link>` adalah tag tunggal — tidak ada `</link>`. Jebakan yang paling sering terjadi dan paling membingungkan: jalur berkas yang salah. Kalau `style.css` berada satu folder dengan HTML-mu, tulis `href=\"style.css\"`; kalau ia di dalam folder `css/`, tulis `href=\"css/style.css\"`. Tidak ada pesan error apa pun bila jalurnya salah — halaman hanya tampil tanpa gaya sama sekali, dan itulah gejala pertama yang harus membuatmu memeriksa baris ini.",
          example: {
            code:
              "<head>\n" +
              "  <meta charset=\"UTF-8\">\n" +
              "  <link rel=\"stylesheet\" href=\"css/utama.css\">\n" +
              "</head>",
            output:
              "Seluruh aturan di dalam css/utama.css diterapkan ke halaman. Kalau jalurnya salah, halaman tampil apa adanya tanpa satu pun pesan error — di tab Network DevTools, berkas itu tercatat dengan status 404.",
            note: "Urutan pemuatan penting: berkas yang ditautkan lebih akhir bisa menimpa yang lebih awal bila specificity-nya sama.",
          },
          instruction:
            "Halamanmu perlu memuat berkas gaya bernama `style.css` yang berada satu folder dengan berkas HTML-nya. Tambahkan satu elemen di dalam `<head>` yang memasang berkas itu sebagai stylesheet.",
          starterCode: "<head>\n  <title>Profil</title>\n</head>\n",
          language: "html",
          tests: [
            {
              pattern: "<link[^>]*rel=['\"]stylesheet['\"]",
              message:
                "Pakai elemen `<link>` dengan `rel=\"stylesheet\"` — itu yang menyatakan bahwa berkas ini adalah lembar gaya.",
            },
            {
              pattern: "<link[^>]*href=['\"]\\.?/?style\\.css['\"]",
              message:
                "Tunjuk berkasnya lewat `href=\"style.css\"`. Karena berkasnya satu folder dengan HTML, jalurnya cukup nama berkasnya saja.",
            },
          ],
          solution:
            "<head>\n  <title>Profil</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>",
        },
        {
          kind: "step",
          id: "css-0-2",
          title: "CSS yang Diabaikan Diam-Diam",
          explanation:
            "Browser membaca CSS deklarasi demi deklarasi, dan begitu menemukan sesuatu yang tidak ia mengerti, ia melewatinya tanpa memberi tahu siapa pun. Ada tiga penyebab yang menyumbang hampir semua kasus: **nama properti salah tulis** (`colour`, `font-weigth`), **nilai tanpa satuan** (`width: 300` bukan `300px`), dan **titik koma yang hilang** — yang paling jahat, karena browser lalu menyambung baris itu dengan baris berikutnya sehingga **dua** deklarasi sekaligus gagal. Cara membacanya di DevTools: deklarasi yang tidak sah muncul dicoret, sering dengan ikon peringatan kecil di sebelahnya. Kebiasaan yang perlu kamu bangun: saat satu properti tidak berpengaruh, periksa dulu baris **di atasnya**, karena penyebabnya sering bukan di baris yang kamu curigai.",
          example: {
            code:
              ".kartu {\n" +
              "  colour: red;      /* salah tulis -> diabaikan seluruhnya */\n" +
              "  border-radius: 8  /* tanpa satuan DAN tanpa titik koma   */\n" +
              "  padding: 16px;    /* ikut gagal karena baris di atasnya belum ditutup */\n" +
              "}",
            output:
              "Kartu tampil tanpa warna teks merah, tanpa sudut membulat, DAN tanpa padding — tiga deklarasi gagal padahal hanya dua yang salah. Tidak ada pesan error di konsol.",
            note: "Satuan wajib untuk hampir semua nilai panjang. Pengecualian yang perlu diingat: 0, line-height tanpa satuan, z-index, opacity, dan flex-grow.",
          },
          instruction:
            "Aturan di editor tidak menghasilkan tampilan apa pun selain latar abu-abu. Ada tiga kekeliruan: satu nama properti salah tulis, satu nilai kehilangan satuan, dan satu deklarasi belum ditutup. Perbaiki ketiganya sehingga teks menjadi putih, kotaknya selebar 240px, dan padding-nya berlaku.",
          starterCode:
            ".kotak {\n" +
            "  background: #334155;\n" +
            "  colour: white;\n" +
            "  width: 240\n" +
            "  padding: 20px;\n" +
            "}\n",
          language: "css",
          previewHtml: "<div class=\"kotak\">Perbaiki aku</div>",
          tests: [
            {
              pattern: "\\.kotak\\s*\\{[^}]*[^-]color\\s*:\\s*white",
              message:
                "Nama properti untuk warna teks adalah `color` (ejaan Amerika), bukan `colour`. Browser mengabaikan properti yang tidak dikenalnya.",
            },
            {
              pattern: "\\.kotak\\s*\\{[^}]*width\\s*:\\s*240px\\s*;",
              message:
                "Lengkapi nilainya menjadi `240px` dan akhiri dengan titik koma — angka tanpa satuan diabaikan, dan deklarasi tanpa titik koma menjatuhkan baris setelahnya.",
            },
            {
              pattern: "colour",
              mustNotMatch: true,
              message:
                "Masih ada `colour` di kodemu. Hapus atau perbaiki ejaannya, karena selama ada properti tak dikenal, deklarasi itu tidak akan pernah berlaku.",
            },
          ],
          solution:
            ".kotak {\n" +
            "  background: #334155;\n" +
            "  color: white;\n" +
            "  width: 240px;\n" +
            "  padding: 20px;\n" +
            "}",
        },
        {
          kind: "step",
          id: "css-0-3",
          title: "Selector yang Tidak Cocok — Membacanya di DevTools",
          explanation:
            "Ada satu kegagalan yang bentuknya berbeda dari sebelumnya: aturanmu ditulis dengan benar, tapi **tidak menyasar elemen mana pun**. Gejalanya di DevTools sangat khas — saat kamu memilih elemennya, aturan itu **tidak muncul sama sekali** di panel Styles, bukan muncul lalu dicoret. Bedanya penting: dicoret berarti aturannya kalah bersaing, sedangkan tidak muncul berarti selectornya tidak cocok. Penyebab tersering adalah beda penulisan nama class antara CSS dan HTML: tanda hubung versus garis bawah, huruf besar versus kecil, atau lupa titik di depan nama class sehingga `kartu` terbaca sebagai nama tag. Karena CSS tidak pernah memprotes selector yang tidak cocok, kebiasaan yang menghemat waktu adalah menyalin nama class dari HTML, bukan mengetiknya ulang dari ingatan.",
          example: {
            code:
              "<!-- HTML: <div class=\"harga-total\">Rp 50.000</div> -->\n\n" +
              "/* tidak cocok: garis bawah, padahal HTML memakai tanda hubung */\n" +
              ".harga_total { color: green; }\n\n" +
              "/* tidak cocok: tanpa titik, jadi mencari TAG bernama harga-total */\n" +
              "harga-total { color: green; }\n\n" +
              "/* cocok */\n" +
              ".harga-total { color: green; }",
            output:
              "Hanya aturan ketiga yang berlaku. Saat elemen itu dipilih di DevTools, dua aturan pertama tidak tampil sama sekali di panel Styles — itulah tanda selector tidak cocok, bukan kalah bersaing.",
            note: "Selector class diawali titik, id diawali pagar (#), dan nama tag ditulis tanpa apa pun. Salah satu tanda ini saja membuat aturanmu menyasar sesuatu yang tidak ada.",
          },
          instruction:
            "Elemen di preview memakai `class=\"kartu-produk\"`, tapi aturan di editor tidak pernah berlaku karena selectornya tidak cocok. Perbaiki selectornya sehingga aturan yang sudah ada benar-benar menyasar elemen itu, tanpa mengubah isi deklarasinya.",
          starterCode:
            "kartu_produk {\n" +
            "  background: #dcfce7;\n" +
            "  border: 2px solid #16a34a;\n" +
            "  padding: 16px;\n" +
            "}\n",
          language: "css",
          previewHtml: "<div class=\"kartu-produk\">Kopi Gayo — Rp 85.000</div>",
          tests: [
            {
              pattern: "\\.kartu-produk\\s*\\{",
              message:
                "Selectornya harus `.kartu-produk` — diawali titik karena ini class, dan memakai tanda hubung persis seperti di HTML.",
            },
            {
              pattern: "kartu_produk",
              mustNotMatch: true,
              message:
                "Masih ada `kartu_produk` dengan garis bawah. Nama itu tidak ada di HTML, jadi aturannya tidak akan menyasar apa pun.",
            },
          ],
          solution:
            ".kartu-produk {\n" +
            "  background: #dcfce7;\n" +
            "  border: 2px solid #16a34a;\n" +
            "  padding: 16px;\n" +
            "}",
        },
        {
          kind: "step",
          id: "css-0-4",
          title: "Gaya Bawaan Browser",
          explanation:
            "Halaman HTML tanpa satu baris CSS pun tidak tampil polos: judul sudah tebal dan besar, daftar sudah punya bulatan, tautan sudah biru bergaris bawah, dan ada jarak di sekeliling seluruh halaman. Semua itu berasal dari **user-agent stylesheet** — lembar gaya bawaan yang dimiliki setiap browser. Memahami keberadaannya menjawab pertanyaan yang membingungkan hampir semua pemula: \"jarak ini datang dari mana, padahal aku tidak menulisnya?\" Yang paling sering ditemui adalah `margin` bawaan pada `body` dan pada heading, serta `padding-left` pada `<ul>` yang menyediakan ruang untuk bulatan. Karena nilainya sedikit berbeda antar browser, banyak proyek menulis beberapa aturan penyeragam di awal berkas CSS — biasanya disebut *reset* atau *normalize*. Yang perlu kamu hindari adalah menghapus semuanya tanpa berpikir: bulatan pada daftar dan garis bawah pada tautan membawa makna bagi pembaca, jadi hilangkan hanya bila kamu memang menggantinya dengan penanda lain.",
          example: {
            code:
              "/* dua aturan penyeragam yang paling sering ditulis */\n" +
              "body {\n" +
              "  margin: 0;          /* browser memberi sekitar 8px di semua sisi */\n" +
              "}\n\n" +
              "h1, h2, h3, p {\n" +
              "  margin-block: 0;    /* hilangkan jarak atas-bawah bawaan heading */\n" +
              "}",
            output:
              "Halaman menempel rapat ke tepi jendela, dan judul tidak lagi punya jarak bawaan di atas dan di bawahnya — sekarang seluruh jarak berasal dari aturanmu sendiri.",
            note: "Kalau kamu ingin memeriksa nilai bawaannya, buka DevTools lalu pilih elemen: aturan dari browser tampil di panel Styles dengan label seperti \"user agent stylesheet\".",
          },
          instruction:
            "Daftar navigasi di preview masih memakai gaya bawaan browser: ada bulatan di setiap item dan ruang menjorok di sisi kiri, padahal ini menu, bukan daftar bacaan. Hilangkan penanda bulatannya dan hapus ruang menjorok bawaan `<ul>` itu, lalu hilangkan juga jarak bawaan di sekeliling halaman.",
          starterCode:
            ".menu {\n" +
            "  background: #f1f5f9;\n" +
            "}\n",
          language: "css",
          previewHtml:
            "<ul class=\"menu\">\n  <li>Beranda</li>\n  <li>Produk</li>\n  <li>Kontak</li>\n</ul>",
          tests: [
            {
              pattern: "\\.menu\\s*\\{[^}]*list-style\\s*:\\s*none",
              message:
                "Hilangkan bulatannya dengan `list-style: none;` pada `.menu`.",
            },
            {
              pattern:
                "\\.menu\\s*\\{[^}]*padding(-left|-inline-start)?\\s*:\\s*0",
              message:
                "Ruang menjorok itu adalah `padding-left` bawaan `<ul>`. Setel `padding: 0;` (atau `padding-left: 0;`) pada `.menu`.",
            },
            {
              pattern: "body\\s*\\{[^}]*margin\\s*:\\s*0",
              message:
                "Jarak di sekeliling halaman berasal dari margin bawaan `body`. Tambahkan aturan `body { margin: 0; }`.",
            },
          ],
          solution:
            "body {\n" +
            "  margin: 0;\n" +
            "}\n\n" +
            ".menu {\n" +
            "  background: #f1f5f9;\n" +
            "  list-style: none;\n" +
            "  padding: 0;\n" +
            "}",
        },
        {
          kind: "quiz",
          id: "css-0-kuis",
          title: "Kuis: Persiapan & Alat Kerja",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kamu menulis `colour: red;` di CSS. Apa yang dilakukan browser?",
              choices: [
                "Menampilkan pesan error di konsol dan menghentikan pemuatan CSS",
                "Mengabaikan deklarasi itu diam-diam dan melanjutkan ke deklarasi berikutnya",
                "Memperbaikinya otomatis menjadi color",
                "Menerapkan warna merah karena colour adalah ejaan Inggris yang sah",
              ],
              answerIndex: 1,
              explanation:
                "CSS dirancang untuk gagal dalam diam: properti atau nilai yang tidak dikenal dilewati tanpa pesan apa pun. Sifat ini menjaga halaman lama tetap jalan saat CSS punya fitur baru, tapi bagi pemula ia berarti kesalahan ejaan bisa memakan waktu lama untuk ditemukan. Pilihan terakhir menggoda karena `colour` memang kata yang benar dalam bahasa Inggris — tapi nama properti CSS hanya mengenal ejaan `color`.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Di DevTools kamu memilih sebuah elemen, dan aturan CSS-mu **tidak muncul sama sekali** di panel Styles (bukan muncul lalu dicoret). Apa artinya?",
              choices: [
                "Aturanmu kalah bersaing dengan aturan lain yang specificity-nya lebih tinggi",
                "Selectornya tidak cocok dengan elemen itu, atau berkas CSS-nya belum tertaut",
                "Browser terlalu lama memuat berkasnya",
                "Elemen itu tidak bisa diberi gaya",
              ],
              answerIndex: 1,
              explanation:
                "Ini pembedaan yang menghemat banyak waktu: **dicoret** berarti aturannya ditemukan tapi kalah bersaing, sedangkan **tidak muncul** berarti aturannya tidak pernah menyasar elemen itu. Penyebab tersering adalah nama class yang beda penulisan atau `<link>` yang salah jalur. Pilihan pertama menggoda karena keduanya sama-sama berarti \"gayaku tidak berlaku\" — padahal cara memperbaikinya berbeda jauh.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kenapa external stylesheet lebih disukai daripada inline style di proyek nyata?",
              choices: [
                "Karena inline style tidak didukung browser modern",
                "Karena satu berkas bisa dipakai ulang di banyak halaman, disimpan di cache, dan tidak mencampur gaya dengan struktur",
                "Karena inline style membuat halaman gagal divalidasi",
                "Karena external stylesheet dimuat lebih dulu daripada HTML",
              ],
              answerIndex: 1,
              explanation:
                "Tiga alasannya praktis: dipakai ulang, disimpan cache sehingga halaman berikutnya terasa instan, dan pemisahan struktur dari tampilan. Ada alasan keempat yang muncul nanti: inline style punya specificity sangat tinggi sehingga sulit ditimpa. Inline style tetap sah dan didukung semua browser — masalahnya perawatan, bukan dukungan.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Aturan ini tidak membuat kotaknya melebar. Kenapa?",
              code: ".kotak {\n  width: 300\n  padding: 20px;\n}",
              choices: [
                "Karena width tidak berlaku untuk div",
                "Karena nilainya tanpa satuan dan tanpa titik koma, sehingga width DAN padding ikut diabaikan",
                "Karena 300 terlalu kecil",
                "Karena padding harus ditulis lebih dulu",
              ],
              answerIndex: 1,
              explanation:
                "Nilai panjang wajib punya satuan (`300px`), dan karena titik komanya juga hilang, browser menyambung baris itu dengan baris berikutnya sehingga `padding` ikut jatuh. Inilah kenapa saat sebuah properti tidak berpengaruh, baris **di atasnya** yang perlu kamu periksa lebih dulu.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Halaman HTML tanpa CSS apa pun sudah punya jarak di sekeliling tepinya dan bulatan pada daftar. Dari mana itu berasal?",
              choices: [
                "Dari berkas CSS yang tersembunyi di dalam berkas HTML",
                "Dari user-agent stylesheet, yaitu gaya bawaan yang dimiliki setiap browser",
                "Dari pengaturan sistem operasi",
                "Dari elemen HTML yang memang tidak bisa diubah tampilannya",
              ],
              answerIndex: 1,
              explanation:
                "Setiap browser membawa lembar gaya bawaannya sendiri, dan nilainya sedikit berbeda antar browser — itulah alasan banyak proyek menulis beberapa aturan penyeragam di awal. Yang perlu dihindari adalah menghapus semuanya tanpa berpikir: garis bawah pada tautan dan bulatan pada daftar membawa makna, jadi hilangkan hanya bila kamu menggantinya dengan penanda lain.",
            },
          ],
        },
      ],
    },
    {
      slug: "dasar-styling",
      title: "Dasar Styling",
      description:
        "Cara CSS bekerja: selector, cascade, dan box model — fondasi yang salah paham di sini bikin frustrasi bertahun-tahun.",
      topics: [
        "Selector dasar: tag, class, id",
        "Combinator: descendant, child (>), sibling (+, ~)",
        "Specificity & cascade — kenapa style-mu 'tidak jalan'",
        "Warna: keyword, hex, rgb, hsl, dan opacity",
        "Unit: px, %, em, rem — kapan pakai yang mana",
        "Box model: content, padding, border, margin",
        "box-sizing: border-box dan kenapa semua orang memakainya",
        "Margin collapse — jebakan klasik pemula",
      ],
      items: [
        {
          kind: "materi",
          id: "css-1-m1",
          title: "Cascade, Specificity, dan Box Model",
          body:
            "# Pengertian\n\n" +
            "Modul ini berisi tiga hal yang, kalau salah paham, akan membuatmu frustrasi selama bertahun-tahun: **siapa yang menang saat dua aturan bertabrakan**, **satuan mana yang dipakai kapan**, dan **bagaimana ukuran sebuah kotak sebenarnya dihitung**.\n\n" +
            "## Cascade: Urutan Penentuan Pemenang\n\n" +
            "Nama \"CSS\" sendiri berasal dari *Cascading* Style Sheets — dan inilah cascade itu. Ketika dua aturan mengatur properti yang sama pada elemen yang sama, browser memutuskan dengan urutan berikut:\n\n" +
            "```text\n" +
            "1. Ada !important?              -> yang !important menang\n" +
            "2. Specificity lebih tinggi?    -> yang lebih spesifik menang\n" +
            "3. Sama-sama seri?              -> yang ditulis PALING AKHIR menang\n" +
            "```\n\n" +
            "Perhatikan urutannya: \"yang terakhir menang\" adalah penentu **terakhir**, bukan pertama. Inilah sumber kebingungan nomor satu — orang menambahkan aturan di bawah, tidak terjadi apa-apa, lalu menyimpulkan CSS-nya rusak.\n\n" +
            "## Specificity: Cara Menghitungnya\n\n" +
            "| Yang dipakai di selector | Nilainya | Contoh |\n" +
            "|---|---|---|\n" +
            "| Nama tag / pseudo-element | 1 | `p`, `li`, `::before` |\n" +
            "| Class / atribut / pseudo-class | 10 | `.kartu`, `[type=\"text\"]`, `:hover` |\n" +
            "| id | 100 | `#judul` |\n" +
            "| Atribut `style` di HTML | 1000 | `<p style=\"...\">` |\n\n" +
            "Jumlahkan seluruh bagian selectornya: `.kartu p` bernilai 11, sedangkan `#intro` bernilai 100 dan langsung menang. Karena itu dua kebiasaan yang dipegang tim profesional: **beri gaya lewat class**, dan **hindari `id` serta `!important`** — keduanya membuat aturanmu nyaris tidak bisa ditimpa nanti, termasuk oleh dirimu sendiri.\n\n" +
            "> **`!important` bukan solusi, ia utang.** Sekali dipakai, satu-satunya cara menimpanya adalah `!important` lagi dengan specificity lebih tinggi. Beberapa proyek lama berakhir dengan ratusan `!important` yang saling berebut, dan tidak ada yang berani menyentuhnya.\n\n" +
            "## Box Model: Setiap Elemen Adalah Kotak Berlapis\n\n" +
            "```text\n" +
            "+--------------------- margin (jarak LUAR, transparan) ----------------+\n" +
            "|   +----------------- border (garis tepi) --------------------+       |\n" +
            "|   |   +------------- padding (jarak DALAM, ikut berwarna) -+ |       |\n" +
            "|   |   |                                                   | |       |\n" +
            "|   |   |                 content (isi)                     | |       |\n" +
            "|   |   |                                                   | |       |\n" +
            "|   |   +---------------------------------------------------+ |       |\n" +
            "|   +--------------------------------------------------------+       |\n" +
            "+---------------------------------------------------------------------+\n" +
            "```\n\n" +
            "Cara mengingat bedanya: **padding di dalam pagar** (ikut kena warna latar), **margin di luar pagar** (selalu transparan). Butuh ruang di dalam kotak? padding. Butuh jarak antar kotak? margin.\n\n" +
            "Secara bawaan, `width` hanya mengatur lebar **content** — padding dan border ditambahkan di luarnya. Karena itu `width: 200px` dengan `padding: 20px` menghasilkan kotak selebar 240px di layar. `box-sizing: border-box` membalik perhitungan itu sehingga 200px benar-benar berarti 200px, dan hampir semua proyek menerapkannya ke seluruh elemen sebagai aturan pertama.\n\n" +
            "## Margin Collapse: Jebakan Klasik\n\n" +
            "Margin **vertikal** yang bersinggungan tidak dijumlahkan, melainkan menyatu — yang berlaku adalah nilai **terbesar**:\n\n" +
            "```text\n" +
            "kotak A  margin-bottom: 30px  ─┐\n" +
            "                               ├─ jarak sebenarnya: 30px, BUKAN 50px\n" +
            "kotak B  margin-top:    20px  ─┘\n" +
            "```\n\n" +
            "Margin horizontal tidak pernah collapse, dan collapse juga tidak terjadi di dalam flex container maupun grid container. Karena itu banyak tim memilih memberi jarak hanya dari satu arah (misalnya selalu `margin-bottom`), atau memakai `gap` pada flex/grid supaya soal ini tidak pernah muncul.\n\n" +
            "## Satuan: Kapan Pakai yang Mana\n\n" +
            "| Satuan | Relatif terhadap | Pakai untuk |\n" +
            "|---|---|---|\n" +
            "| `px` | tidak relatif, mutlak | garis tepi tipis, bayangan, radius kecil |\n" +
            "| `rem` | font-size elemen `<html>` (bawaan 16px) | ukuran font, padding, margin — pilihan utama |\n" +
            "| `em` | font-size **elemen itu sendiri** | jarak yang harus ikut skala teks di dalam komponen |\n" +
            "| `%` | ukuran elemen induk | lebar kolom, gambar responsif |\n" +
            "| `vw` / `vh` | 1% lebar / tinggi jendela | bagian setinggi layar, tipografi mengalir |\n" +
            "| `ch` | lebar karakter \"0\" | membatasi panjang baris teks agar nyaman dibaca |\n\n" +
            "Kenapa `rem` diutamakan untuk teks: kalau pengguna memperbesar ukuran font di pengaturan browsernya — hal yang sangat umum bagi orang dengan penglihatan terbatas — ukuran ber-`px` **tidak ikut membesar**, sedangkan `rem` ikut. Itu poin aksesibilitas yang selalu muncul di audit.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Specificity itu seperti **hierarki perintah di kantor**. Instruksi dari direktur (id) mengalahkan instruksi manajer (class), dan instruksi manajer mengalahkan pengumuman umum di papan (tag). Kalau dua orang selevel memberi instruksi berbeda, yang berlaku adalah yang **paling baru**. Dan `!important` adalah berteriak — sekali satu orang melakukannya, semua orang harus berteriak agar terdengar.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Mengira aturan terakhir selalu menang.** Specificity diperiksa lebih dulu.\n" +
            "2. **Memberi gaya lewat `id`.** Nilainya 100 dan nyaris tidak bisa ditimpa; pakai class.\n" +
            "3. **Melupakan `box-sizing: border-box`** lalu bingung kenapa dua kolom `width: 50%` dengan padding tidak muat berjejer.\n" +
            "4. **Mengira margin bisa dijumlahkan.** Margin vertikal yang bersinggungan menyatu ke nilai terbesar.\n" +
            "5. **Memakai `px` untuk ukuran font.** Tampilannya sama, tapi kamu menghilangkan kemampuan pengguna memperbesar teks.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** setiap hari, dan pertanyaan \"kenapa CSS ini tidak berpengaruh\" adalah pertanyaan debugging paling sering di frontend. Menjawabnya dengan membuka DevTools lalu menyebut specificity — bukan dengan menambah `!important` — adalah salah satu pembeda paling terlihat antara pemula dan orang yang sudah bekerja.",
        },
        {
          kind: "step",
          id: "css-1-1",
          title: "Selector pertamamu",
          explanation:
            "CSS bekerja layaknya memberikan instruksi rias wajah kepada browser. Kamu membutuhkan **selector** (untuk menunjuk siapa yang akan dirias, misalnya elemen `p`) dan **deklarasi** (instruksi riasnya, misalnya `color: blue;` untuk warna biru). Setiap deklarasi harus selalu dibungkus di dalam kurung kurawal `{}` dan wajib diakhiri dengan tanda titik koma `;`. Jika kamu sampai melupakan titik koma tersebut, browser akan kebingungan membaca instruksi selanjutnya sehingga CSS-mu bisa gagal bekerja sepenuhnya.",
          example: {
            code: "h1 {\n  color: red;\n}",
            output: "Semua elemen h1 di halaman berubah menjadi merah.",
            note: "Pola: selector (h1) → kurung kurawal → properti: nilai; Titik koma di akhir wajib.",
          },
          instruction:
            "Buat semua `<p>` berwarna biru dengan properti `color: blue;`.",
          starterCode: "/* tulis aturan CSS di sini */\n",
          language: "css",
          previewHtml:
            "<h1>Judul Halaman</h1>\n<p>Paragraf pertama.</p>\n<p>Paragraf kedua.</p>",
          tests: [
            {
              pattern: "p\\s*\\{[^}]*color\\s*:\\s*blue\\s*;?[^}]*\\}",
              message:
                "Buat aturan dengan selector p yang berisi color: blue;",
            },
          ],
          solution: "p {\n  color: blue;\n}",
        },
        {
          kind: "step",
          id: "css-1-2",
          title: "Class: selector yang paling sering dipakai",
          explanation:
            "Class dipilih dengan **titik di depan namanya**: `.nama-class` di CSS untuk elemen ber-`class=\"nama-class\"` di HTML — dan titik itu hanya ada di sisi CSS, sesuatu yang sangat sering tertukar saat pertama belajar. Inilah selector yang dipakai hampir sepanjang waktu di dunia kerja, karena satu nama bisa dipasang ke banyak elemen sekaligus dan gayanya tidak terikat pada jenis tag: `.tombol` tetap berlaku entah elemennya `<button>`, `<a>`, atau `<span>`. Satu elemen juga boleh punya beberapa class sekaligus, dipisah spasi (`class=\"kartu penting\"`), sehingga kamu bisa menyusun gaya berlapis: satu class untuk bentuk dasarnya, satu lagi untuk variasinya. Jebakan yang perlu diingat: nama class bersifat sensitif huruf dan tanda, jadi `.kartu-utama` dan `.kartu_utama` adalah dua nama berbeda — dan CSS tidak akan memberi peringatan apa pun kalau tidak ada yang cocok.",
          example: {
            code: '/* HTML: <p class="peringatan">Awas!</p> */\n\n.peringatan {\n  color: white;\n  background-color: red;\n}',
            output:
              "Hanya elemen yang punya class=\"peringatan\" berubah jadi teks putih di atas merah; elemen lain tidak terpengaruh.",
            note: "Di CSS pakai titik (.peringatan), di HTML tanpa titik (class=\"peringatan\"). Ini sering tertukar.",
          },
          instruction:
            "Beri elemen ber-class `sorotan` latar kuning (`background-color: yellow;`) dan teks tebal (`font-weight: bold;`).",
          starterCode: "",
          language: "css",
          previewHtml:
            '<p>Teks biasa.</p>\n<p class="sorotan">Teks yang disorot.</p>\n<p>Teks biasa lagi.</p>',
          tests: [
            {
              pattern: "\\.sorotan\\s*\\{[^}]*background(-color)?\\s*:\\s*yellow",
              message:
                "Gunakan selector .sorotan (dengan titik di depan) dan atur background-color: yellow; — menulis `background: yellow` juga diterima.",
            },
            {
              pattern: "\\.sorotan\\s*\\{[^}]*font-weight\\s*:\\s*bold",
              message: "Tambahkan font-weight: bold; di dalam aturan .sorotan",
            },
          ],
          solution:
            ".sorotan {\n  background-color: yellow;\n  font-weight: bold;\n}",
        },
        {
          kind: "step",
          id: "css-1-3",
          title: "Specificity: kenapa CSS-ku tidak jalan",
          explanation:
            "Kalau dua aturan mengatur properti yang sama, yang menang bukan yang terakhir ditulis — tapi yang **specificity**-nya lebih tinggi. Urutannya: id (100) > class (10) > tag (1). Karena itu `#judul { color: red }` mengalahkan `h1 { color: blue }` walau ditulis lebih dulu. Ini penyebab nomor satu frustrasi 'CSS saya tidak berpengaruh'.",
          example: {
            code: '/* HTML: <p id="intro" class="tebal">Teks</p> */\n\np       { color: black;  }  /* skor 1   */\n.tebal  { color: blue;   }  /* skor 10  → menang atas p */\n#intro  { color: green;  }  /* skor 100 → menang semua  */',
            output:
              "Teks menjadi HIJAU, karena #intro (100) mengalahkan .tebal (10) dan p (1) — bukan karena ditulis terakhir.",
            note: "Kalau specificity-nya sama, baru urutan penulisan yang menentukan. Hindari id di CSS agar tidak sulit ditimpa.",
          },
          instruction:
            "Elemen `<h1 id=\"judul\" class=\"besar\">` sudah diberi warna biru lewat selector tag. Buat teksnya menjadi hijau **menggunakan selector class** `.besar` (bukan id).",
          starterCode: "h1 {\n  color: blue;\n}\n\n",
          language: "css",
          previewHtml: '<h1 id="judul" class="besar">Judul Utama</h1>',
          tests: [
            {
              pattern: "\\.besar\\s*\\{[^}]*color\\s*:\\s*green",
              message:
                "Buat aturan .besar { color: green; } — class (10) mengalahkan tag (1).",
            },
            {
              pattern: "#judul",
              mustNotMatch: true,
              message:
                "Untuk latihan ini jangan pakai selector #judul — buktikan bahwa class saja sudah cukup mengalahkan selector tag.",
            },
          ],
          solution: "h1 {\n  color: blue;\n}\n\n.besar {\n  color: green;\n}",
        },
        {
          kind: "step",
          id: "css-1-4",
          title: "Box model: padding, border, margin",
          explanation:
            "Setiap elemen adalah kotak berlapis: **content** (isi) → **padding** (jarak dalam, ikut kena warna latar) → **border** (garis tepi) → **margin** (jarak luar, selalu transparan). Membedakan padding dan margin adalah kunci: butuh ruang di dalam kotak? padding. Butuh jarak antar kotak? margin.",
          example: {
            code: ".kotak {\n  background: lightblue;\n  padding: 30px;   /* ruang DALAM, ikut berwarna biru */\n  border: 4px dashed navy;\n  margin: 25px;    /* ruang LUAR, selalu transparan */\n}",
            output:
              "Kotak biru dengan isi yang berjarak jauh dari garis tepi, garis putus-putus biru tua, dan jarak dari elemen sekitarnya.",
            note: "Cara mengingat: padding di dalam pagar (kena warna), margin di luar pagar (tidak kena warna).",
          },
          instruction:
            "Beri `.kartu` padding `20px`, border `2px solid black`, dan margin `10px`.",
          starterCode: ".kartu {\n  background-color: #e0f2fe;\n}\n",
          language: "css",
          previewHtml:
            '<div class="kartu">Kartu A</div>\n<div class="kartu">Kartu B</div>',
          tests: [
            {
              pattern: "\\.kartu\\s*\\{[^}]*padding\\s*:\\s*20px",
              message: "Tambahkan padding: 20px; di dalam .kartu",
            },
            {
              pattern:
                "\\.kartu\\s*\\{[^}]*border\\s*:\\s*2px\\s+solid\\s+black",
              message: "Tambahkan border: 2px solid black;",
            },
            {
              pattern: "\\.kartu\\s*\\{[^}]*margin\\s*:\\s*10px",
              message: "Tambahkan margin: 10px;",
            },
          ],
          solution:
            ".kartu {\n  background-color: #e0f2fe;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n}",
        },
        {
          kind: "step",
          id: "css-1-5",
          title: "box-sizing: border-box",
          explanation:
            "Secara default, `width: 200px` + `padding: 20px` menghasilkan kotak selebar **240px** — padding ditambahkan di luar width. Ini membuat perhitungan layout menyakitkan. `box-sizing: border-box` membuat width mencakup padding dan border, sehingga 200px berarti benar-benar 200px. Hampir semua proyek nyata menerapkannya ke seluruh elemen.",
          example: {
            code: "/* TANPA border-box: 100 + 20 + 20 = 140px di layar */\n.a { width: 100px; padding: 20px; }\n\n/* DENGAN border-box: tetap 100px, padding masuk ke dalam */\n.b { width: 100px; padding: 20px; box-sizing: border-box; }",
            output:
              "Kotak .a jadi lebih lebar dari yang kamu tulis (140px), sementara .b benar-benar 100px.",
            note: "Karena itu hampir semua proyek menulis * { box-sizing: border-box } sebagai aturan pertama.",
          },
          instruction:
            "Tambahkan aturan untuk selector `*` (semua elemen) dengan `box-sizing: border-box;`.",
          starterCode:
            ".kotak {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid navy;\n  background: #dbeafe;\n}\n\n",
          language: "css",
          previewHtml: '<div class="kotak">Lebarku benar-benar 200px?</div>',
          tests: [
            {
              pattern: "\\*\\s*\\{[^}]*box-sizing\\s*:\\s*border-box",
              message:
                "Buat aturan * { box-sizing: border-box; } agar berlaku untuk semua elemen.",
            },
          ],
          solution:
            ".kotak {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid navy;\n  background: #dbeafe;\n}\n\n* {\n  box-sizing: border-box;\n}",
        },
        {
          kind: "step",
          id: "css-1-6",
          title: "rem: unit untuk ukuran yang bisa diakses",
          explanation:
            "`px` bersifat mutlak. `rem` relatif terhadap ukuran font root (default 16px, jadi `1rem` = 16px) — dan ikut membesar kalau pengguna memperbesar ukuran font di pengaturan browser. Untuk teks dan spacing, `rem` lebih ramah aksesibilitas; `px` masih wajar untuk border tipis. Patokan praktisnya: ukuran font, padding, dan margin memakai rem, sedangkan garis tepi tipis boleh tetap px.",
          example: {
            code: "/* root default 16px */\n.judul  { font-size: 2rem;    }  /* = 32px */\n.isi    { font-size: 0.875rem; }  /* = 14px */\n.tombol { padding: 0.75rem 1.5rem; }  /* = 12px 24px */",
            output:
              "Ukuran terlihat sama seperti px biasa, tapi ikut membesar kalau pengguna menaikkan ukuran font di browsernya.",
            note: "Rumus cepat: nilai rem × 16 = px. Jadi 1.5rem = 24px, 0.5rem = 8px.",
          },
          instruction:
            "Beri `.konten` `font-size: 1.25rem` dan `padding: 2rem`.",
          starterCode: ".konten {\n  background: #f1f5f9;\n}\n",
          language: "css",
          previewHtml: '<div class="konten">Teks dengan ukuran rem.</div>',
          tests: [
            {
              pattern: "\\.konten\\s*\\{[^}]*font-size\\s*:\\s*1\\.25rem",
              message: "Atur font-size: 1.25rem;",
            },
            {
              pattern: "\\.konten\\s*\\{[^}]*padding\\s*:\\s*2rem",
              message: "Atur padding: 2rem;",
            },
          ],
          solution:
            ".konten {\n  background: #f1f5f9;\n  font-size: 1.25rem;\n  padding: 2rem;\n}",
        },
        {
          kind: "step",
          id: "css-1-7",
          title: "Combinator: Menargetkan Berdasarkan Posisi",
          explanation:
            "Selector bisa digabung untuk menargetkan elemen berdasarkan hubungannya. Spasi berarti **descendant** — `.kartu p` memilih semua `<p>` di dalam `.kartu`, sedalam apa pun letaknya. Tanda `>` berarti **child langsung** — `.menu > li` hanya memilih `li` yang menjadi anak persis dari `.menu`, bukan cucunya. Ada juga `+` untuk saudara tepat setelahnya dan `~` untuk semua saudara sesudahnya. Menggunakan child selector membuat gayamu tidak bocor ke komponen bersarang, masalah yang sering muncul saat menu bertingkat mewarisi gaya yang tidak diinginkan.",
          example: {
            code: "/* semua a di dalam nav, sedalam apa pun */\nnav a { color: navy; }\n\n/* hanya li yang anak LANGSUNG dari .menu */\n.menu > li { font-weight: bold; }",
            output: "Semua tautan di dalam nav menjadi biru tua, sementara penebalan hanya kena item tingkat pertama — sub-menu di dalamnya tidak ikut.",
          },
          instruction:
            "Beri warna `#b91c1c` hanya pada elemen `<li>` yang merupakan anak langsung dari `.daftar`, sehingga item di sub-daftar tidak ikut berubah.",
          starterCode: ".daftar {\n  padding-left: 20px;\n}\n",
          language: "css",
          previewHtml: "<ul class=\"daftar\">\n  <li>Item pertama\n    <ul><li>Sub item</li></ul>\n  </li>\n  <li>Item kedua</li>\n</ul>",
          tests: [
            {
              pattern: "\\.daftar\\s*>\\s*li\\s*\\{",
              message:
                "Pakai child combinator: .daftar > li { ... }",
            },
            {
              pattern: "color\\s*:\\s*#b91c1c",
              message:
                "Beri color: #b91c1c.",
            },
          ],
          solution: ".daftar {\n  padding-left: 20px;\n}\n\n.daftar > li {\n  color: #b91c1c;\n}",
        },
        {
          kind: "step",
          id: "css-1-8",
          title: "Menulis Warna: hex, rgb, dan hsl",
          explanation:
            "CSS menerima warna dalam beberapa notasi. **Hex** (`#2563eb`) paling sering kamu temui karena itulah yang diberikan berkas desain. **rgb()** menuliskan komponen merah, hijau, biru dari 0–255, dan versi empat nilainya menambahkan transparansi: `rgb(0 0 0 / 0.5)` berarti hitam setengah tembus pandang. **hsl()** memakai rona, kejenuhan, dan kecerahan — jauh lebih mudah kalau kamu ingin membuat versi lebih terang atau lebih gelap dari warna yang sama, cukup ubah angka ketiganya. Hindari mengatur transparansi lewat properti `opacity` bila kamu hanya ingin latarnya tembus pandang, karena `opacity` ikut membuat teks di dalamnya pudar.",
          example: {
            code: "/* tiga notasi, warna yang sama persis */\n.a { color: #2563eb; }\n.b { color: rgb(37 99 235); }\n.c { color: hsl(221 83% 53%); }",
            output: "Ketiga elemen tampil dengan warna biru yang identik.",
          },
          instruction:
            "Beri `.kotak` latar hitam yang setengah tembus pandang memakai notasi `rgb` dengan nilai alpha 0.5, lalu beri teksnya warna putih.",
          starterCode: ".kotak {\n  padding: 16px;\n}\n",
          language: "css",
          previewHtml: "<div style=\"background:#fde68a;padding:20px\"><div class=\"kotak\">Teks di atas latar transparan</div></div>",
          tests: [
            {
              pattern: "background(-color)?\\s*:\\s*rgba?\\(\\s*0\\s*[ ,]\\s*0\\s*[ ,]\\s*0\\s*(/|,)\\s*0?\\.5\\s*\\)",
              message:
                "Pakai `rgb(0 0 0 / 0.5)` sebagai background — bentuk lama `rgba(0, 0, 0, 0.5)` juga diterima.",
            },
            {
              pattern: "color\\s*:\\s*(white|#fff|#ffffff)",
              message:
                "Beri teksnya warna putih.",
            },
          ],
          solution: ".kotak {\n  padding: 16px;\n  background: rgb(0 0 0 / 0.5);\n  color: white;\n}",
        },
        {
          kind: "quiz",
          id: "css-1-kuis",
          title: "Kuis: Dasar Styling",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Elemen di bawah akan berwarna apa? Jelaskan alasannya di kepalamu dulu.",
              code: 'p { color: blue; }\n.teks { color: green; }\n\n<p class="teks">Halo</p>',
              choices: [
                "Biru, karena aturan p ditulis lebih dulu",
                "Hijau, karena class (specificity 10) mengalahkan tag (1)",
                "Hitam, karena keduanya konflik dan dibatalkan",
                "Biru, karena selector tag lebih spesifik",
              ],
              answerIndex: 1,
              explanation:
                "Hijau. Specificity class (10) lebih tinggi dari selector tag (1), jadi urutan penulisan tidak menentukan. Urutan hanya jadi penentu kalau specificity-nya sama persis.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Berapa lebar total kotak ini di layar (tanpa box-sizing: border-box)?",
              code: ".kotak {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n}",
              choices: ["200px", "240px", "250px", "230px"],
              answerIndex: 2,
              explanation:
                "250px = 200 (width) + 20+20 (padding kiri-kanan) + 5+5 (border kiri-kanan). Inilah kenapa box-sizing: border-box begitu populer — dengannya, width: 200px berarti total 200px dan padding dihitung ke dalam.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kamu ingin memberi jarak ANTARA dua kartu yang berdampingan. Properti apa yang tepat?",
              choices: ["padding", "margin", "border", "width"],
              answerIndex: 1,
              explanation:
                "margin memberi jarak di LUAR elemen (antar elemen). padding memberi ruang di DALAM elemen antara border dan isinya — kalau kamu pakai padding, kartunya jadi besar, bukan berjarak.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Kamu ingin ukuran teks tetap menghormati pengaturan font browser pengguna. Unit mana yang relatif terhadap font-size elemen root <html>?",
              choices: ["px", "rem", "em", "vh"],
              answerIndex: 1,
              explanation:
                "rem (root em) relatif terhadap font-size elemen <html>, default 16px. Memakai rem untuk teks dan spacing membuat halaman menghormati preferensi ukuran font pengguna — poin aksesibilitas yang sering muncul di audit.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Dua div berurutan punya margin-bottom: 30px dan margin-top: 20px. Berapa jarak vertikal di antara keduanya?",
              choices: [
                "50px (dijumlahkan)",
                "30px (yang terbesar yang berlaku — margin collapse)",
                "20px",
                "10px (dikurangkan)",
              ],
              answerIndex: 1,
              explanation:
                "30px. Margin vertikal yang bersinggungan akan 'collapse' — yang berlaku adalah nilai terbesar, bukan jumlahnya. Ini jebakan klasik saat orang bingung 'kok jaraknya kurang'. Margin horizontal tidak collapse.",
            },
          ],
        },
      ],
    },
    {
      slug: "layout-klasik",
      title: "Layout Klasik",
      description:
        "display, position, dan float — cukup untuk membaca & memperbaiki kode lama di tempat kerja.",
      topics: [
        "display: block, inline, inline-block, none",
        "position: static, relative, absolute, fixed, sticky",
        "z-index & stacking context",
        "overflow: hidden, scroll, auto",
        "float & clear — kenal saja, jangan dipakai untuk layout baru",
        "Centering klasik: margin auto & teknik lama yang masih muncul di codebase",
      ],
      items: [
        {
          kind: "materi",
          id: "css-2-m1",
          title: "display, position, dan Warisan Layout Lama",
          body:
            "# Pengertian\n\n" +
            "Sebelum Flexbox dan Grid ada, seluruh tata letak web dibangun dari `display`, `position`, dan `float`. Kamu **tidak** akan memakai float untuk membuat layout baru — tapi kamu akan membacanya, karena kode yang sudah berjalan bertahun-tahun di perusahaan penuh dengan itu. Modul ini membekali dua hal sekaligus: alat yang masih dipakai setiap hari (`position`, `overflow`, `z-index`) dan kemampuan membaca warisan lama tanpa panik.\n\n" +
            "## display: Bagaimana Elemen Menempati Ruang\n\n" +
            "| Nilai | Perilakunya | Contoh elemen |\n" +
            "|---|---|---|\n" +
            "| `block` | memakan seluruh lebar, memulai baris baru | `div`, `p`, `h1`, `section` |\n" +
            "| `inline` | selebar isinya, ikut mengalir bersama teks | `span`, `a`, `strong` |\n" +
            "| `inline-block` | ikut mengalir seperti inline, tapi bisa diberi ukuran | tombol, badge |\n" +
            "| `none` | dihapus dari layout sepenuhnya | menu yang disembunyikan |\n\n" +
            "> **Jebakan paling sering:** elemen `inline` **mengabaikan** `width`, `height`, dan margin atas-bawah. Kalau `width` pada `<span>`-mu tidak berpengaruh, itu sebabnya — bukan karena kodenya salah tulis.\n\n" +
            "Perlu dibedakan juga `display: none` dari `visibility: hidden`: yang pertama menghapus elemen dari layout sehingga ruangnya ikut hilang, sedangkan yang kedua menyembunyikannya tapi ruangnya tetap terpakai.\n\n" +
            "## position: Lima Nilai dan Acuannya\n\n" +
            "```text\n" +
            "static    (bawaan)  mengikuti aliran normal; top/left DIABAIKAN\n" +
            "relative            tetap di aliran, tapi bisa digeser dari posisi aslinya\n" +
            "                    -> paling sering dipakai sebagai ACUAN bagi anak absolute\n" +
            "absolute            keluar dari aliran; mengacu ke leluhur terdekat yang\n" +
            "                    position-nya BUKAN static\n" +
            "fixed               keluar dari aliran; mengacu ke jendela browser\n" +
            "sticky              normal sampai batas scroll tertentu, lalu menempel\n" +
            "```\n\n" +
            "Pola yang akan kamu tulis ratusan kali: **induk `relative`, anak `absolute`.** Itulah cara memasang badge di sudut kartu, tombol tutup di sudut dialog, atau ikon di dalam kolom pencarian. Lupa memberi `relative` pada induknya membuat anaknya melompat ke sudut halaman — bug paling umum di materi ini.\n\n" +
            "Ingat juga: `top`, `right`, `bottom`, dan `left` **tidak melakukan apa pun** selama `position` masih `static`.\n\n" +
            "## z-index dan Stacking Context\n\n" +
            "`z-index` menentukan siapa tampil di atas siapa, dengan dua syarat yang sering dilupakan:\n\n" +
            "1. Elemennya harus punya `position` selain `static`.\n" +
            "2. Perbandingannya hanya berlaku **di dalam satu stacking context**. Anak tidak bisa keluar melampaui lapisan induknya, sebesar apa pun nilainya.\n\n" +
            "```text\n" +
            "induk A  (z-index: 1)          induk B  (z-index: 2)\n" +
            "   └ anak (z-index: 99999)        └ anak (z-index: 1)\n" +
            "\n" +
            "Anak milik B tetap tampil di atas anak milik A —\n" +
            "karena yang dibandingkan lebih dulu adalah induknya.\n" +
            "```\n\n" +
            "Karena itu `z-index: 99999` bukan solusi. Pakai skala kecil yang konsisten (10, 20, 30) dan periksa induknya saat sesuatu tetap tertimpa.\n\n" +
            "## float dan clear: Cara Membacanya\n\n" +
            "`float` awalnya dibuat untuk satu hal sederhana: membuat teks mengalir di sekeliling gambar, seperti di koran. Selama bertahun-tahun ia dipaksa menjadi alat layout karena tidak ada pilihan lain, dan itu melahirkan dua hal yang akan kamu temui di kode lama:\n\n" +
            "```css\n" +
            "/* elemen float keluar dari perhitungan tinggi induknya, */\n" +
            "/* sehingga induk bisa \"kolaps\" jadi setinggi nol         */\n" +
            ".kolom { float: left; width: 50%; }\n\n" +
            "/* clearfix: peninggalan paling khas dari era float */\n" +
            ".pembungkus::after {\n" +
            "  content: \"\";\n" +
            "  display: block;\n" +
            "  clear: both;\n" +
            "}\n" +
            "```\n\n" +
            "Kalau kamu melihat `clearfix` di sebuah proyek, artinya bagian itu memakai float untuk layout. `clear: both` berarti \"jangan berdampingan dengan elemen float sebelumnya, mulai di bawahnya\". Untuk kode **baru**, pakai Flexbox atau Grid; float sekarang hanya wajar untuk kebutuhan aslinya, yaitu teks yang mengalir mengelilingi gambar.\n\n" +
            "## overflow dan Efek Sampingnya\n\n" +
            "`overflow` menentukan apa yang terjadi ketika isi lebih besar dari kotaknya: `visible` (bawaan) meluber, `hidden` memotong, `scroll` selalu menampilkan scrollbar, `auto` menampilkannya hanya saat perlu. Satu efek samping yang wajib diingat karena memakan waktu banyak orang: **`overflow: hidden` atau `auto` pada elemen induk mematikan `position: sticky` pada anaknya.**\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "`position` itu seperti cara benda diletakkan di sebuah ruangan. `static` adalah barang yang disusun berurutan mengikuti antrean. `relative` adalah barang yang tetap punya tempat di antrean tapi digeser sedikit dari tanda kakinya. `absolute` adalah pigura yang digantung ke dinding — ia tidak lagi memakan tempat di lantai, dan posisinya diukur dari sudut dinding terdekat yang punya patokan. `fixed` adalah stiker yang ditempel di kaca jendela: apa pun yang bergerak di dalam ruangan, ia tetap di sana.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **`width` pada elemen inline.** Diabaikan; ubah ke `inline-block`.\n" +
            "2. **`absolute` tanpa induk `relative`.** Elemen melompat ke sudut halaman.\n" +
            "3. **`sticky` tanpa offset.** Tanpa `top` (atau `bottom`), sticky tidak melakukan apa pun.\n" +
            "4. **`z-index` pada elemen `static`.** Diabaikan sepenuhnya.\n" +
            "5. **`margin: 0 auto` tanpa lebar terbatas.** Tidak ada ruang sisa untuk dibagi, jadi tidak ada yang bisa dipusatkan.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** `position: relative/absolute` muncul di hampir setiap komponen yang punya badge, tooltip, atau ikon; `sticky` dipakai untuk header dan header tabel; `overflow` untuk area yang bisa digulir. Sementara kemampuan membaca float dan clearfix adalah keterampilan pemeliharaan — di banyak perusahaan, tugas pertama seorang junior justru menyentuh halaman lama yang belum pernah ditulis ulang.",
        },
        {
          kind: "step",
          id: "css-2-1",
          title: "block vs inline",
          explanation:
            "Elemen **block** (div, p, h1) memakan seluruh lebar dan memulai baris baru. Elemen **inline** (span, a) hanya selebar isinya dan berjejer. Penting: elemen inline **mengabaikan width, height, dan margin vertikal** — sumber kebingungan klasik 'kenapa width span saya tidak berubah'. Solusinya `display: inline-block` atau `block`.",
          example: {
            code: "/* span default inline: width DIABAIKAN */\n.tag-a { width: 200px; background: pink; }\n\n/* setelah jadi inline-block: width berlaku */\n.tag-b { width: 200px; background: lightgreen; display: inline-block; }",
            output:
              ".tag-a tetap selebar teksnya saja, sedangkan .tag-b benar-benar melebar 200px tapi masih sejajar dengan teks.",
            note: "inline = ikut mengalir bersama teks, block = memakan satu baris penuh, inline-block = sejajar tapi bisa diukur.",
          },
          instruction:
            "Buat `.tombol` (yang aslinya `<span>`) bisa diberi ukuran dengan `display: inline-block`, lalu beri `width: 150px` dan `padding: 10px`.",
          starterCode: ".tombol {\n  background: #2563eb;\n  color: white;\n}\n",
          language: "css",
          previewHtml:
            'Teks sebelum <span class="tombol">Klik</span> teks sesudah.',
          tests: [
            {
              pattern: "\\.tombol\\s*\\{[^}]*display\\s*:\\s*inline-block",
              message:
                "Tambahkan display: inline-block; agar span bisa menerima width.",
            },
            {
              pattern: "\\.tombol\\s*\\{[^}]*width\\s*:\\s*150px",
              message: "Atur width: 150px;",
            },
            {
              pattern: "\\.tombol\\s*\\{[^}]*padding\\s*:\\s*10px",
              message: "Atur padding: 10px;",
            },
          ],
          solution:
            ".tombol {\n  background: #2563eb;\n  color: white;\n  display: inline-block;\n  width: 150px;\n  padding: 10px;\n}",
        },
        {
          kind: "step",
          id: "css-2-2",
          title: "position: relative + absolute",
          explanation:
            "`position: absolute` memposisikan elemen relatif terhadap **leluhur terdekat yang punya position selain static**. Jadi polanya selalu berpasangan: parent diberi `position: relative`, anak diberi `position: absolute`. Lupa memberi relative pada parent membuat elemen melompat ke sudut halaman — bug paling umum di materi ini. Perhatikan juga bahwa `top`, `right`, `bottom`, dan `left` baru berpengaruh setelah position elemennya bukan static.",
          example: {
            code: ".kartu {\n  position: relative;   /* ← acuan bagi anak */\n  height: 80px;\n}\n\n.label {\n  position: absolute;   /* ← menempel ke .kartu */\n  bottom: 4px;\n  left: 4px;\n}",
            output:
              "Yang terlihat di preview:\n\n+--------------------------+\n|  .kartu (80px)           |\n|                          |\n| [label]                  |  <- menempel 4px dari kiri-bawah KARTU\n+--------------------------+\n\nTanpa position: relative pada .kartu, label pindah ke sini:\n(4px dari kiri-bawah JENDELA browser, menimpa isi lain)",
            note: "Selalu berpasangan: parent relative, anak absolute. Ini pola yang akan kamu pakai terus untuk badge, tooltip, dan ikon.",
          },
          instruction:
            "Beri `.wadah` `position: relative`, dan beri `.badge` `position: absolute` dengan `top: 0` dan `right: 0`.",
          starterCode:
            ".wadah {\n  width: 200px;\n  height: 100px;\n  background: #e2e8f0;\n}\n.badge {\n  background: crimson;\n  color: white;\n  padding: 4px 8px;\n}\n",
          language: "css",
          previewHtml:
            '<div class="wadah">\n  Produk\n  <span class="badge">Baru</span>\n</div>',
          tests: [
            {
              pattern: "\\.wadah\\s*\\{[^}]*position\\s*:\\s*relative",
              message:
                "Beri .wadah position: relative; — ini yang jadi acuan posisi anaknya.",
            },
            {
              pattern: "\\.badge\\s*\\{[^}]*position\\s*:\\s*absolute",
              message: "Beri .badge position: absolute;",
            },
            {
              pattern: "\\.badge\\s*\\{[^}]*top\\s*:\\s*0",
              message: "Tambahkan top: 0; pada .badge",
            },
            {
              pattern: "\\.badge\\s*\\{[^}]*right\\s*:\\s*0",
              message: "Tambahkan right: 0; pada .badge",
            },
          ],
          solution:
            ".wadah {\n  width: 200px;\n  height: 100px;\n  background: #e2e8f0;\n  position: relative;\n}\n.badge {\n  background: crimson;\n  color: white;\n  padding: 4px 8px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}",
        },
        {
          kind: "step",
          id: "css-2-3",
          title: "position: sticky",
          explanation:
            "`sticky` adalah hibrida: elemen berperilaku normal sampai batas scroll tertentu, lalu 'menempel'. Wajib menyertakan nilai offset (`top: 0`) — tanpa itu sticky tidak melakukan apa pun, dan ini kebingungan yang sangat sering terjadi. Dipakai untuk header navigasi dan header tabel. Penyebab kedua sticky gagal adalah salah satu elemen induknya memakai `overflow: hidden` atau `overflow: auto`, karena itu memutus konteks scroll yang dibutuhkan sticky.",
          example: {
            code: ".judul-tabel {\n  position: sticky;\n  top: 0;          /* ← WAJIB, ini titik menempelnya */\n  background: white;\n}",
            output:
              "Saat di-scroll, elemen ikut naik sampai menyentuh tepi atas, lalu berhenti dan menempel di sana.",
            note: "Beri background solid — tanpa itu, konten yang lewat di belakangnya akan terlihat menembus.",
          },
          instruction:
            "Buat `.header` menempel di atas saat di-scroll: `position: sticky` dan `top: 0`.",
          starterCode:
            ".header {\n  background: #1e293b;\n  color: white;\n  padding: 12px;\n}\n.isi {\n  height: 400px;\n  background: linear-gradient(#f8fafc, #cbd5e1);\n}\n",
          language: "css",
          previewHtml:
            '<div class="header">Header Menempel</div>\n<div class="isi">Scroll ke bawah di panel ini…</div>',
          tests: [
            {
              pattern: "\\.header\\s*\\{[^}]*position\\s*:\\s*sticky",
              message: "Beri .header position: sticky;",
            },
            {
              pattern: "\\.header\\s*\\{[^}]*top\\s*:\\s*0",
              message:
                "Tambahkan top: 0; — sticky tanpa offset tidak berfungsi sama sekali.",
            },
          ],
          solution:
            ".header {\n  background: #1e293b;\n  color: white;\n  padding: 12px;\n  position: sticky;\n  top: 0;\n}\n.isi {\n  height: 400px;\n  background: linear-gradient(#f8fafc, #cbd5e1);\n}",
        },
        {
          kind: "step",
          id: "css-2-4",
          title: "z-index dan stacking",
          explanation:
            "`z-index` menentukan siapa di atas siapa — **tapi hanya bekerja pada elemen yang punya position selain static**. Nilai besar tidak selalu menang: elemen di dalam parent dengan z-index rendah terkurung di lapisan parent-nya (stacking context). Praktik baik: pakai skala kecil dan konsisten (10, 20, 30), bukan `z-index: 99999`. Kalau elemen tetap tertimpa padahal nilainya sudah tinggi, periksa induknya: begitu induk punya z-index sendiri, anaknya tidak bisa keluar dari lapisan itu.",
          example: {
            code: "/* z-index DIABAIKAN: position masih static */\n.a { z-index: 999; }\n\n/* z-index BERLAKU */\n.b { position: relative; z-index: 2; }",
            output:
              ".a tetap tertimpa meski nilainya 999, sedangkan .b dengan nilai 2 berhasil tampil di atas.",
            note: "Syarat z-index bekerja: elemen harus punya position relative/absolute/fixed/sticky.",
          },
          instruction:
            "Buat `.depan` tampil di atas `.belakang`: beri `.depan` `position: relative` dan `z-index: 10`.",
          starterCode:
            ".belakang, .depan {\n  width: 120px;\n  height: 60px;\n  padding: 8px;\n}\n.belakang {\n  background: #fca5a5;\n  position: relative;\n  z-index: 5;\n}\n.depan {\n  background: #86efac;\n  margin-top: -30px;\n}\n",
          language: "css",
          previewHtml:
            '<div class="belakang">Belakang</div>\n<div class="depan">Depan</div>',
          tests: [
            {
              pattern: "\\.depan\\s*\\{[^}]*position\\s*:\\s*relative",
              message:
                "Beri .depan position: relative; — z-index diabaikan pada elemen position: static.",
            },
            {
              pattern: "\\.depan\\s*\\{[^}]*z-index\\s*:\\s*10",
              message: "Tambahkan z-index: 10; pada .depan",
            },
          ],
          solution:
            ".belakang, .depan {\n  width: 120px;\n  height: 60px;\n  padding: 8px;\n}\n.belakang {\n  background: #fca5a5;\n  position: relative;\n  z-index: 5;\n}\n.depan {\n  background: #86efac;\n  margin-top: -30px;\n  position: relative;\n  z-index: 10;\n}",
        },
        {
          kind: "step",
          id: "css-2-5",
          title: "Centering klasik dengan margin auto",
          explanation:
            "Untuk memusatkan elemen block secara horizontal, dua hal harus ada bersamaan: **lebar yang terbatas** dan `margin-inline: auto` (atau `margin: 0 auto`). Tanpa width, elemen block sudah selebar penuh sehingga tidak ada ruang untuk dipusatkan — inilah kenapa `margin: 0 auto` sering 'tidak berefek'. Untuk memusatkan secara vertikal, margin auto tidak cukup — itu tugas Flexbox atau Grid yang kamu pelajari di modul berikutnya.",
          example: {
            code: "/* TIDAK berefek: elemen sudah selebar penuh */\n.a { margin: 0 auto; }\n\n/* BERHASIL: ada batas lebar dulu */\n.b { max-width: 400px; margin: 0 auto; }",
            output:
              ".a tetap menempel di kiri, sedangkan .b berada di tengah dengan ruang seimbang di kedua sisi.",
            note: "auto berarti 'bagi ruang sisa secara rata'. Kalau tidak ada ruang sisa, tidak ada yang bisa dibagi.",
          },
          instruction:
            "Pusatkan `.wadah` dengan `max-width: 300px` dan `margin: 0 auto`.",
          starterCode: ".wadah {\n  background: #ddd6fe;\n  padding: 16px;\n}\n",
          language: "css",
          previewHtml: '<div class="wadah">Aku di tengah</div>',
          tests: [
            {
              pattern: "\\.wadah\\s*\\{[^}]*max-width\\s*:\\s*300px",
              message: "Atur max-width: 300px;",
            },
            {
              pattern:
                "\\.wadah\\s*\\{[^}]*margin\\s*:\\s*0\\s+auto|\\.wadah\\s*\\{[^}]*margin-inline\\s*:\\s*auto",
              message:
                "Tambahkan margin: 0 auto; (atau margin-inline: auto;)",
            },
          ],
          solution:
            ".wadah {\n  background: #ddd6fe;\n  padding: 16px;\n  max-width: 300px;\n  margin: 0 auto;\n}",
        },
        {
          kind: "step",
          id: "css-2-6",
          title: "overflow: Saat Isi Melebihi Kotaknya",
          explanation:
            "Ketika isi lebih besar daripada kotaknya, `overflow` menentukan apa yang terjadi. Nilai `visible` (bawaan) membiarkannya meluber keluar, `hidden` memotongnya tanpa scrollbar, `scroll` selalu menampilkan scrollbar, dan `auto` hanya menampilkannya saat memang dibutuhkan — inilah yang paling sering dipakai. Untuk membatasi hanya satu arah, ada `overflow-x` dan `overflow-y`. Satu efek samping yang wajib kamu ingat: memasang `overflow: hidden` atau `auto` pada elemen induk akan mematikan `position: sticky` pada anaknya, dan itu penyebab bug yang sering memakan waktu berjam-jam untuk ditemukan.",
          example: {
            code: ".kode {\n  height: 60px;\n  overflow: hidden;   /* isi yang lebih tinggi terpotong tanpa scrollbar */\n}",
            output: "Isi yang lebih tinggi dari 60px terpotong dan bagian bawahnya tidak bisa dijangkau pengguna.",
          },
          instruction:
            "Kotak `.log` tingginya dibatasi 80px dan isinya lebih panjang. Buat isinya tetap bisa dibaca dengan menggulir, dan pastikan scrollbar hanya muncul saat memang diperlukan.",
          starterCode: ".log {\n  height: 80px;\n  border: 1px solid #94a3b8;\n  padding: 8px;\n}\n",
          language: "css",
          previewHtml: "<div class=\"log\">Baris 1<br>Baris 2<br>Baris 3<br>Baris 4<br>Baris 5<br>Baris 6<br>Baris 7<br>Baris 8</div>",
          tests: [
            {
              pattern: "overflow(-y)?\\s*:\\s*auto",
              message:
                "Pakai overflow: auto agar scrollbar hanya muncul saat dibutuhkan.",
            },
          ],
          solution: ".log {\n  height: 80px;\n  border: 1px solid #94a3b8;\n  padding: 8px;\n  overflow: auto;\n}",
        },
        {
          kind: "step",
          id: "css-2-7",
          title: "float dan clear: Membaca Kode Lama",
          explanation:
            "`float` dibuat untuk satu tujuan sederhana: membuat teks mengalir mengelilingi gambar seperti di koran. Karena dulu tidak ada alat layout lain, ia dipaksa menyusun kolom halaman — dan itu meninggalkan dua jejak yang pasti kamu temui di proyek lama. Pertama, elemen ber-`float` **keluar dari perhitungan tinggi induknya**, sehingga induk bisa kolaps menjadi setinggi nol dan latar belakangnya hilang. Kedua, lahirlah *clearfix*: pseudo-element kosong ber-`clear: both` yang ditambahkan ke induk supaya tingginya kembali menghitung anak-anaknya. `clear` sendiri berarti \"jangan berdampingan dengan float sebelumnya, mulai di bawahnya\". Untuk kode **baru**, pakai Flexbox atau Grid; float sekarang hanya wajar untuk kebutuhan aslinya, yaitu gambar yang dikelilingi teks. Yang kamu butuhkan dari step ini adalah kemampuan mengenali polanya saat membuka berkas CSS yang ditulis orang lain bertahun-tahun lalu.",
          example: {
            code:
              "/* kebutuhan asli float: teks mengelilingi gambar */\n" +
              ".foto {\n" +
              "  float: left;\n" +
              "  margin-right: 12px;\n" +
              "}\n\n" +
              "/* clearfix: penanda paling khas era layout-dengan-float */\n" +
              ".pembungkus::after {\n" +
              "  content: \"\";\n" +
              "  display: block;\n" +
              "  clear: both;\n" +
              "}",
            output:
              "Paragraf mengalir rapi di sisi kanan gambar. Tanpa aturan clearfix, kotak pembungkusnya kolaps menjadi setinggi nol dan latar belakangnya tidak terlihat sama sekali.",
            note: "Kalau kamu menemukan `::after` berisi `content: \"\"` dan `clear: both` di sebuah proyek, itu tanda bagian tersebut memakai float untuk layout.",
          },
          instruction:
            "Kotak pembungkus di editor kolaps menjadi setinggi nol karena satu-satunya anaknya memakai `float`, sehingga garis tepinya tampak menempel rapat. Perbaiki dengan pola clearfix: buat pseudo-element `::after` pada `.pembungkus` yang berisi konten kosong, tampil sebagai blok, dan membersihkan float di kedua sisi.",
          starterCode:
            ".pembungkus {\n" +
            "  border: 2px solid #0ea5e9;\n" +
            "  background: #e0f2fe;\n" +
            "}\n" +
            ".foto {\n" +
            "  float: left;\n" +
            "  width: 80px;\n" +
            "  height: 60px;\n" +
            "  background: #0369a1;\n" +
            "}\n\n",
          language: "css",
          previewHtml:
            "<div class=\"pembungkus\">\n  <div class=\"foto\"></div>\n</div>\n<p>Paragraf sesudah pembungkus.</p>",
          tests: [
            {
              pattern: "\\.pembungkus::after\\s*\\{",
              message:
                "Buat aturan `.pembungkus::after { ... }` — pseudo-element inilah yang dipasang di akhir isi pembungkus.",
            },
            {
              pattern: "\\.pembungkus::after\\s*\\{[^}]*content\\s*:\\s*[\"']{2}",
              message:
                "Pseudo-element wajib punya `content` agar benar-benar dibuat. Isi dengan teks kosong: `content: \"\";`",
            },
            {
              pattern: "\\.pembungkus::after\\s*\\{[^}]*clear\\s*:\\s*both",
              message:
                "Tambahkan `clear: both;` — inilah yang memaksa pembungkus menghitung ulang tingginya setelah elemen float.",
            },
            {
              pattern: "\\.pembungkus::after\\s*\\{[^}]*display\\s*:\\s*block",
              message:
                "Tambahkan `display: block;` karena pseudo-element bawaannya inline, dan `clear` tidak berlaku pada elemen inline.",
            },
          ],
          solution:
            ".pembungkus {\n" +
            "  border: 2px solid #0ea5e9;\n" +
            "  background: #e0f2fe;\n" +
            "}\n" +
            ".foto {\n" +
            "  float: left;\n" +
            "  width: 80px;\n" +
            "  height: 60px;\n" +
            "  background: #0369a1;\n" +
            "}\n\n" +
            ".pembungkus::after {\n" +
            "  content: \"\";\n" +
            "  display: block;\n" +
            "  clear: both;\n" +
            "}",
        },
        {
          kind: "quiz",
          id: "css-2-kuis",
          title: "Kuis: Layout Klasik",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kamu memberi width: 200px pada sebuah <span> tapi tidak ada perubahan. Kenapa?",
              choices: [
                "Karena span tidak boleh diberi class",
                "Karena elemen inline mengabaikan width — perlu display: inline-block atau block",
                "Karena width harus dalam persen",
                "Karena span tidak punya isi",
              ],
              answerIndex: 1,
              explanation:
                "Elemen inline mengabaikan width, height, dan margin vertikal karena ia mengalir bersama teks. Ubah ke display: inline-block (tetap sejajar teks tapi bisa diukur) atau block.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Sebuah elemen dengan position: absolute melompat ke sudut halaman, bukan ke sudut kartunya. Apa yang lupa dilakukan?",
              choices: [
                "Menambah z-index pada elemen",
                "Memberi position: relative pada elemen parent-nya",
                "Mengubah display parent jadi flex",
                "Menghapus margin elemen",
              ],
              answerIndex: 1,
              explanation:
                "absolute mengacu ke leluhur terdekat yang position-nya BUKAN static. Kalau tidak ada, ia mengacu ke viewport/halaman. Pola bakunya: parent position: relative, anak position: absolute.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "position: sticky sudah dipasang tapi elemen tidak pernah menempel. Penyebab paling umum?",
              choices: [
                "Tidak ada nilai offset seperti top: 0",
                "Browser tidak mendukung sticky",
                "Elemen harus punya width",
                "Harus dipasang di body",
              ],
              answerIndex: 0,
              explanation:
                "sticky membutuhkan offset (top/bottom/left/right) sebagai titik 'menempel'. Tanpa itu, elemen berperilaku seperti relative biasa. Penyebab lain yang sering: parent punya overflow: hidden.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "z-index: 99999 dipasang tapi elemen tetap tertutup elemen lain yang z-index-nya 10. Apa penjelasan paling mungkin?",
              choices: [
                "z-index maksimal adalah 100",
                "Elemen berada di dalam stacking context parent yang z-index-nya lebih rendah, atau position-nya static",
                "Harus memakai !important",
                "z-index hanya bekerja pada gambar",
              ],
              answerIndex: 1,
              explanation:
                "z-index hanya berlaku dalam stacking context-nya sendiri. Anak tidak bisa 'keluar' melampaui lapisan parent-nya, sebesar apa pun nilainya. Selain itu z-index diabaikan sepenuhnya jika position: static.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "margin: 0 auto tidak memusatkan div. Apa yang biasanya kurang?",
              choices: [
                "text-align: center pada parent",
                "width atau max-width pada div tersebut",
                "display: flex pada div",
                "position: relative",
              ],
              answerIndex: 1,
              explanation:
                "Elemen block secara default sudah selebar penuh, jadi tidak ada sisa ruang untuk dibagi otomatis. Beri width/max-width dulu, baru margin auto punya ruang untuk memusatkan.",
            },
          ],
        },
      ],
    },
    {
      slug: "flexbox",
      title: "Flexbox",
      description:
        "Layout satu dimensi — skill yang disebut eksplisit di lowongan frontend.",
      topics: [
        "Konsep main axis vs cross axis",
        "display: flex, flex-direction, flex-wrap",
        "justify-content & align-items — peta mental yang benar",
        "gap: cara modern memberi jarak",
        "flex-grow, flex-shrink, flex-basis (dan shorthand flex)",
        "align-self & order",
        "Pola nyata: navbar, card row, sticky footer, media object",
      ],
      items: [
        {
          kind: "materi",
          id: "css-3-m1",
          title: "Flexbox: Satu Baris, Dua Sumbu",
          body:
            "# Pengertian\n\n" +
            "Flexbox mengatur **satu dimensi**: sederet item dalam satu arah, entah mendatar atau menurun. Ia dibuat untuk membagi ruang di antara item — sesuatu yang dulu butuh trik rumit dan sekarang cukup dua baris.\n\n" +
            "Satu hal yang harus benar sejak awal, karena semua kesalahpahaman lainnya berawal dari sini: **flex diatur di container (induk), bukan di item.** `display: flex` dipasang pada pembungkusnya; anak-anaknya otomatis menjadi flex item tanpa diberi properti apa pun.\n\n" +
            "## Dua Sumbu, dan Kenapa Ini Kuncinya\n\n" +
            "```text\n" +
            "flex-direction: row (bawaan)          flex-direction: column\n" +
            "\n" +
            "  main axis  ───────────────>            cross axis ──────────>\n" +
            "  +-----+  +-----+  +-----+              +-----------------+   |\n" +
            "  |  1  |  |  2  |  |  3  |    cross     |        1        |   |  main\n" +
            "  +-----+  +-----+  +-----+     axis     +-----------------+   |  axis\n" +
            "                                 |       |        2        |   |\n" +
            "                                 v       +-----------------+   v\n" +
            "\n" +
            "  justify-content -> main axis           align-items -> cross axis\n" +
            "```\n\n" +
            "> **Jangan hafal \"justify = horizontal\".** Hafalkan **\"justify = main axis\"**. Begitu kamu mengganti `flex-direction` menjadi `column`, kedua sumbu berputar: `justify-content` mengatur atas-bawah, dan `align-items` mengatur kiri-kanan. Ini penyebab nomor satu layout terasa \"terbalik\" setelah direction diubah.\n\n" +
            "## Properti Container vs Properti Item\n\n" +
            "| Dipasang di container | Dipasang di item |\n" +
            "|---|---|\n" +
            "| `display: flex` | `flex-grow`, `flex-shrink`, `flex-basis` |\n" +
            "| `flex-direction` | `flex` (shorthand ketiganya) |\n" +
            "| `flex-wrap` | `align-self` (menimpa align-items untuk satu item) |\n" +
            "| `justify-content` | `order` (mengubah urutan tampil) |\n" +
            "| `align-items`, `align-content` | |\n" +
            "| `gap` | |\n\n" +
            "Kalau sebuah properti tidak berpengaruh, periksa dulu: apakah kamu memasangnya di tempat yang benar?\n\n" +
            "## Memahami flex: 1\n\n" +
            "`flex` adalah shorthand tiga nilai sekaligus:\n\n" +
            "```text\n" +
            "flex: <grow> <shrink> <basis>\n" +
            "\n" +
            "flex: 1           =  1 1 0%      -> ambil semua ruang sisa\n" +
            "flex: 1 1 200px   =  minimal 200px, boleh melebar, boleh menyusut\n" +
            "flex: 0 0 auto    =  jangan tumbuh, jangan menyusut (kaku)\n" +
            "```\n\n" +
            "`flex: 1` membuat item mengabaikan lebar aslinya, jadi kalau kamu butuh lebar minimum yang dihormati, tulis lengkap seperti `flex: 1 1 200px`.\n\n" +
            "## gap: Cara Modern Memberi Jarak\n\n" +
            "Sebelum `gap` ada, orang memberi `margin-right` ke setiap item lalu menghapusnya di item terakhir dengan `:last-child`. `gap` menghapus seluruh kerepotan itu: ia hanya menaruh jarak **di antara** item, tidak di tepi luar, dan tidak perlu dikoreksi saat jumlah item berubah. Pakai `gap`, bukan margin, untuk jarak antar item flex maupun grid.\n\n" +
            "## Empat Pola yang Akan Kamu Tulis Terus\n\n" +
            "```css\n" +
            "/* 1. navbar: logo kiri, menu kanan */\n" +
            ".navbar { display: flex; justify-content: space-between; align-items: center; }\n\n" +
            "/* 2. media object: avatar + teks yang mengisi sisanya */\n" +
            ".media { display: flex; gap: 12px; }\n" +
            ".media__isi { flex: 1; }\n\n" +
            "/* 3. sticky footer: footer selalu di bawah walau isi pendek */\n" +
            "body { min-height: 100vh; display: flex; flex-direction: column; }\n" +
            "main { flex: 1; }\n\n" +
            "/* 4. deretan kartu responsif tanpa media query */\n" +
            ".kartu-baris { display: flex; flex-wrap: wrap; gap: 16px; }\n" +
            ".kartu { flex: 1 1 240px; }\n" +
            "```\n\n" +
            "Keempatnya berasal dari pekerjaan nyata, dan pola ketiga menjawab pertanyaan klasik \"kenapa footer saya naik ke tengah halaman saat isinya sedikit\".\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Flexbox itu seperti **menyusun buku di satu rak**. Kamu tidak menentukan koordinat setiap buku; kamu menentukan aturannya — rapatkan ke kiri, taruh di tengah, atau sebar merata; buku mana yang boleh melebar mengisi sisa rak, dan apakah buku yang tidak muat boleh turun ke rak berikutnya (`flex-wrap`). Raknya yang mengatur, bukan bukunya.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Memasang `display: flex` di item, bukan di container.**\n" +
            "2. **Mengira `justify-content` selalu horizontal.** Ia mengikuti main axis.\n" +
            "3. **Lupa `flex-wrap: wrap`.** Bawaannya `nowrap`, jadi item memaksa satu baris dan menyusut sampai isinya gepeng di HP.\n" +
            "4. **Memakai `margin` untuk jarak antar item.** Pakai `gap`.\n" +
            "5. **Mengira Grid menggantikan Flexbox.** Keduanya dipakai bersama: Grid untuk kerangka halaman, Flexbox di dalam komponennya.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** Flexbox disebut eksplisit di hampir semua lowongan frontend, dan pertanyaan interview yang paling sering muncul bukan sintaksnya melainkan \"apa bedanya `justify-content` dan `align-items`\" — pertanyaan yang langsung menunjukkan apakah seseorang punya peta mental sumbu atau hanya menghafal potongan kode.",
        },
        {
          kind: "step",
          id: "css-3-1",
          title: "display: flex",
          explanation:
            "`display: flex` pada **parent** membuat anak-anaknya berbaris. Ini poin penting: kamu mengatur flex di container, bukan di item. Secara default arah barisnya horizontal (row), dan anak-anak menyusut/melebar sesuai ruang. Anak-anaknya tidak perlu diberi properti apa pun untuk mulai berbaris, jadi memasang `display: flex` di item justru tidak menghasilkan efek yang kamu harapkan.",
          example: {
            code: "/* HTML:\n<div class=\"menu\">\n  <span>Satu</span>\n  <span>Dua</span>\n</div> */\n\n.menu {\n  display: flex;   /* di PARENT, bukan di anak */\n  gap: 20px;\n}",
            output:
              "Kedua span berbaris horizontal dengan jarak 20px di antaranya.",
            note: "Kesalahan umum: memasang display: flex di span (anak). Yang benar di .menu (pembungkusnya).",
          },
          instruction:
            "Buat `.baris` menjadi flex container dengan `display: flex` dan beri `gap: 12px`.",
          starterCode:
            ".baris {\n  background: #f1f5f9;\n  padding: 12px;\n}\n.item {\n  background: #60a5fa;\n  color: white;\n  padding: 16px;\n}\n",
          language: "css",
          previewHtml:
            '<div class="baris">\n  <div class="item">A</div>\n  <div class="item">B</div>\n  <div class="item">C</div>\n</div>',
          tests: [
            {
              pattern: "\\.baris\\s*\\{[^}]*display\\s*:\\s*flex",
              message: "Tambahkan display: flex; pada .baris (parent-nya).",
            },
            {
              pattern: "\\.baris\\s*\\{[^}]*gap\\s*:\\s*12px",
              message:
                "Tambahkan gap: 12px; — cara modern memberi jarak antar item flex.",
            },
          ],
          solution:
            ".baris {\n  background: #f1f5f9;\n  padding: 12px;\n  display: flex;\n  gap: 12px;\n}\n.item {\n  background: #60a5fa;\n  color: white;\n  padding: 16px;\n}",
        },
        {
          kind: "step",
          id: "css-3-2",
          title: "justify-content: sepanjang main axis",
          explanation:
            "Peta mental yang harus benar: `justify-content` bekerja **sepanjang main axis**. Saat `flex-direction: row` (default), main axis horizontal — jadi justify-content mengatur kiri-kanan. Nilai yang sering dipakai: `flex-start`, `center`, `space-between` (dorong ke ujung, jarak di tengah — pola navbar), `space-around`. Ingat juga bahwa justify-content hanya membagi ruang SISA — kalau item sudah memenuhi seluruh lebar container, mengubah nilainya tidak akan terlihat.",
          example: {
            code: ".a { display: flex; justify-content: flex-start; }  /* semua menumpuk di kiri  */\n.b { display: flex; justify-content: center;     }  /* semua di tengah         */\n.c { display: flex; justify-content: space-between; } /* dorong ke dua ujung  */",
            output:
              "Tiga baris dengan susunan berbeda: menumpuk kiri, terpusat, dan terpisah ke ujung kiri-kanan.",
            note: "space-between = item pertama menempel awal, terakhir menempel akhir, sisa ruang dibagi di tengah.",
          },
          instruction:
            "Buat item terdorong ke ujung kiri dan kanan dengan `justify-content: space-between`.",
          starterCode:
            ".navbar {\n  display: flex;\n  background: #1e293b;\n  padding: 12px;\n}\n.logo, .menu {\n  color: white;\n}\n",
          language: "css",
          previewHtml:
            '<div class="navbar">\n  <div class="logo">BiLearn</div>\n  <div class="menu">Masuk</div>\n</div>',
          tests: [
            {
              pattern:
                "\\.navbar\\s*\\{[^}]*justify-content\\s*:\\s*space-between",
              message: "Tambahkan justify-content: space-between; pada .navbar",
            },
          ],
          solution:
            ".navbar {\n  display: flex;\n  background: #1e293b;\n  padding: 12px;\n  justify-content: space-between;\n}\n.logo, .menu {\n  color: white;\n}",
        },
        {
          kind: "step",
          id: "css-3-3",
          title: "align-items: menyilang main axis",
          explanation:
            "`align-items` bekerja pada **cross axis** — tegak lurus dari main axis. Pada row, cross axis vertikal, jadi align-items mengatur atas-bawah. Kombinasi `justify-content: center` + `align-items: center` adalah cara paling ringkas memusatkan sesuatu secara sempurna, menggantikan trik-trik lama yang rumit. Nilai bawaannya `stretch`, dan itulah sebabnya kartu-kartu dalam satu baris flex otomatis sama tinggi meski panjang isinya berbeda.",
          example: {
            code: ".pembungkus {\n  display: flex;\n  height: 200px;\n  justify-content: center;  /* kiri-kanan (main axis)  */\n  align-items: center;      /* atas-bawah (cross axis) */\n}",
            output:
              "Isi berada tepat di tengah kotak, baik secara horizontal maupun vertikal.",
            note: "Dua baris ini menggantikan trik lama seperti position absolute + transform translate(-50%, -50%).",
          },
          instruction:
            "Pusatkan isi `.kotak` secara horizontal DAN vertikal dengan `justify-content: center` dan `align-items: center`.",
          starterCode:
            ".kotak {\n  display: flex;\n  height: 150px;\n  background: #fef3c7;\n}\n.isi {\n  background: #f59e0b;\n  color: white;\n  padding: 12px;\n}\n",
          language: "css",
          previewHtml: '<div class="kotak">\n  <div class="isi">Tengah</div>\n</div>',
          tests: [
            {
              pattern: "\\.kotak\\s*\\{[^}]*justify-content\\s*:\\s*center",
              message: "Tambahkan justify-content: center;",
            },
            {
              pattern: "\\.kotak\\s*\\{[^}]*align-items\\s*:\\s*center",
              message: "Tambahkan align-items: center;",
            },
          ],
          solution:
            ".kotak {\n  display: flex;\n  height: 150px;\n  background: #fef3c7;\n  justify-content: center;\n  align-items: center;\n}\n.isi {\n  background: #f59e0b;\n  color: white;\n  padding: 12px;\n}",
        },
        {
          kind: "step",
          id: "css-3-4",
          title: "flex-direction: column",
          explanation:
            "Mengubah `flex-direction: column` **memutar kedua axis**: main axis jadi vertikal, cross axis jadi horizontal. Konsekuensinya sering mengejutkan — sekarang `justify-content` mengatur atas-bawah dan `align-items` mengatur kiri-kanan. Ingat prinsipnya, jangan hafal 'justify = horizontal'. Karena itu ketika layout terasa terbalik setelah kamu mengganti direction, yang perlu ditukar adalah justify-content dengan align-items.",
          example: {
            code: ".daftar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;  /* sekarang ATAS-BAWAH  */\n  align-items: flex-end;    /* sekarang KIRI-KANAN  */\n  height: 200px;\n}",
            output:
              "Item tersusun bertumpuk vertikal, terpusat secara vertikal, dan rata ke sisi kanan.",
            note: "Perhatikan peran keduanya bertukar dibanding row. Karena itu hafalkan 'main axis' bukan 'horizontal'.",
          },
          instruction:
            "Susun item secara vertikal dengan `flex-direction: column`, lalu ratakan ke tengah horizontal memakai `align-items: center`.",
          starterCode:
            ".kolom {\n  display: flex;\n  gap: 8px;\n  background: #ecfdf5;\n  padding: 12px;\n}\n.item {\n  background: #10b981;\n  color: white;\n  padding: 10px;\n}\n",
          language: "css",
          previewHtml:
            '<div class="kolom">\n  <div class="item">Satu</div>\n  <div class="item">Dua</div>\n</div>',
          tests: [
            {
              pattern: "\\.kolom\\s*\\{[^}]*flex-direction\\s*:\\s*column",
              message: "Tambahkan flex-direction: column;",
            },
            {
              pattern: "\\.kolom\\s*\\{[^}]*align-items\\s*:\\s*center",
              message:
                "Tambahkan align-items: center; — pada column, align-items mengatur kiri-kanan.",
            },
          ],
          solution:
            ".kolom {\n  display: flex;\n  gap: 8px;\n  background: #ecfdf5;\n  padding: 12px;\n  flex-direction: column;\n  align-items: center;\n}\n.item {\n  background: #10b981;\n  color: white;\n  padding: 10px;\n}",
        },
        {
          kind: "step",
          id: "css-3-5",
          title: "flex: 1 untuk mengisi ruang sisa",
          explanation:
            "`flex: 1` pada item berarti 'ambil semua ruang sisa'. Ini shorthand dari `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`. Pola paling berguna: sidebar berlebar tetap + konten `flex: 1` yang menyesuaikan sisa ruang — layout aplikasi klasik dalam dua baris CSS. Perlu diingat `flex: 1` membuat item mengabaikan lebar aslinya, jadi kalau kamu butuh lebar minimum tetap, tulis lengkap seperti `flex: 1 1 200px`.",
          example: {
            code: ".wadah { display: flex; }\n.kiri  { width: 80px; }   /* lebar tetap        */\n.kanan { flex: 1;     }   /* ambil semua sisanya */",
            output:
              ".kiri tetap 80px di layar apa pun, sementara .kanan otomatis melebar mengisi ruang yang tersisa.",
            note: "Kalau .kiri dan .kanan keduanya flex: 1, ruang akan dibagi rata 50:50.",
          },
          instruction:
            "Beri `.konten` properti `flex: 1` agar mengisi ruang sisa di samping sidebar.",
          starterCode:
            ".layout {\n  display: flex;\n  gap: 8px;\n}\n.sidebar {\n  width: 100px;\n  background: #cbd5e1;\n  padding: 12px;\n}\n.konten {\n  background: #93c5fd;\n  padding: 12px;\n}\n",
          language: "css",
          previewHtml:
            '<div class="layout">\n  <div class="sidebar">Menu</div>\n  <div class="konten">Konten utama</div>\n</div>',
          tests: [
            {
              pattern: "\\.konten\\s*\\{[^}]*flex\\s*:\\s*1",
              message: "Tambahkan flex: 1; pada .konten",
            },
          ],
          solution:
            ".layout {\n  display: flex;\n  gap: 8px;\n}\n.sidebar {\n  width: 100px;\n  background: #cbd5e1;\n  padding: 12px;\n}\n.konten {\n  background: #93c5fd;\n  padding: 12px;\n  flex: 1;\n}",
        },
        {
          kind: "step",
          id: "css-3-6",
          title: "flex-wrap agar tidak gepeng di layar kecil",
          explanation:
            "Secara default item flex **memaksa diri tetap satu baris** dan menyusut sampai gepeng. `flex-wrap: wrap` mengizinkan mereka turun ke baris berikutnya. Kombinasi `flex-wrap: wrap` + `flex-basis` minimum adalah cara membuat grid kartu responsif tanpa satu pun media query. Perhitungkan juga `gap` saat menentukan lebar basis, karena jarak antar item ikut memakan ruang saat item turun baris.",
          example: {
            code: ".galeri { display: flex; flex-wrap: wrap; gap: 12px; }\n\n/* flex: grow shrink basis */\n.item { flex: 1 1 200px; }  /* minimal 200px, boleh melebar */",
            output:
              "Di layar lebar item berjejer beberapa per baris; saat layar menyempit, item otomatis turun ke baris berikutnya (bukan gepeng).",
            note: "Tanpa flex-wrap, item memaksa bertahan satu baris dan menyusut sampai isinya tidak terbaca.",
          },
          instruction:
            "Izinkan item turun baris dengan `flex-wrap: wrap`, dan beri `.kartu` properti `flex: 1 1 120px`.",
          starterCode:
            ".galeri {\n  display: flex;\n  gap: 8px;\n  background: #f8fafc;\n  padding: 8px;\n}\n.kartu {\n  background: #a78bfa;\n  color: white;\n  padding: 20px;\n}\n",
          language: "css",
          previewHtml:
            '<div class="galeri">\n  <div class="kartu">1</div>\n  <div class="kartu">2</div>\n  <div class="kartu">3</div>\n  <div class="kartu">4</div>\n</div>',
          tests: [
            {
              pattern: "\\.galeri\\s*\\{[^}]*flex-wrap\\s*:\\s*wrap",
              message: "Tambahkan flex-wrap: wrap; pada .galeri",
            },
            {
              pattern: "\\.kartu\\s*\\{[^}]*flex\\s*:\\s*1\\s+1\\s+120px",
              message: "Tambahkan flex: 1 1 120px; pada .kartu",
            },
          ],
          solution:
            ".galeri {\n  display: flex;\n  gap: 8px;\n  background: #f8fafc;\n  padding: 8px;\n  flex-wrap: wrap;\n}\n.kartu {\n  background: #a78bfa;\n  color: white;\n  padding: 20px;\n  flex: 1 1 120px;\n}",
        },
        {
          kind: "step",
          id: "css-3-7",
          title: "align-self dan order: Mengatur Satu Item Saja",
          explanation:
            "Semua properti flex yang kamu pelajari sejauh ini dipasang di container dan berlaku ke **semua** anaknya. Dua properti berikut bekerja sebaliknya: ia dipasang di **item** dan hanya memengaruhi item itu. `align-self` menimpa `align-items` untuk satu item — berguna ketika satu tombol harus menempel ke bawah sementara sisanya sejajar tengah. `order` mengubah urutan tampil tanpa mengubah HTML; nilai bawaannya 0, jadi `order: -1` melompat ke depan dan `order: 1` mundur ke belakang. Ada satu peringatan penting yang wajib kamu ingat sebelum memakai `order`: **urutan Tab keyboard dan urutan yang dibacakan screen reader tetap mengikuti urutan di HTML**, bukan urutan visual. Kalau kamu memakainya untuk memindahkan isi yang penting, pengguna keyboard akan melompat ke tempat yang tidak masuk akal. Karena itu pakai `order` hanya untuk penyesuaian tampilan yang tidak mengubah alur membaca — untuk perubahan urutan yang sesungguhnya, ubah HTML-nya.",
          example: {
            code:
              ".baris {\n" +
              "  display: flex;\n" +
              "  align-items: center;   /* semua item sejajar tengah */\n" +
              "  height: 120px;\n" +
              "}\n\n" +
              ".harga {\n" +
              "  align-self: flex-end;  /* KECUALI item ini: menempel ke bawah */\n" +
              "}\n\n" +
              ".badge-baru {\n" +
              "  order: -1;             /* tampil paling depan meski ditulis terakhir */\n" +
              "}",
            output:
              "Semua item sejajar di tengah secara vertikal, kecuali harga yang menempel di dasar baris. Badge tampil di posisi pertama walaupun di HTML ia ditulis paling akhir.",
            note: "`align-self` menimpa `align-items` hanya untuk satu item. Nilai bawaan `order` adalah 0, jadi angka negatif berarti lebih dulu.",
          },
          instruction:
            "Di dalam baris flex di editor, semua item sudah sejajar tengah. Buat **hanya** item `.tanggal` yang menempel ke dasar baris, lalu buat `.penting` tampil sebagai item pertama tanpa mengubah urutan HTML-nya.",
          starterCode:
            ".baris {\n" +
            "  display: flex;\n" +
            "  align-items: center;\n" +
            "  gap: 12px;\n" +
            "  height: 120px;\n" +
            "  background: #f1f5f9;\n" +
            "  padding: 8px;\n" +
            "}\n" +
            ".baris > div {\n" +
            "  background: #6366f1;\n" +
            "  color: white;\n" +
            "  padding: 8px;\n" +
            "}\n\n",
          language: "css",
          previewHtml:
            "<div class=\"baris\">\n  <div class=\"judul\">Judul</div>\n  <div class=\"tanggal\">28 Juli</div>\n  <div class=\"penting\">PENTING</div>\n</div>",
          tests: [
            {
              pattern:
                "\\.tanggal\\s*\\{[^}]*align-self\\s*:\\s*(flex-end|end)",
              message:
                "Pakai `align-self` pada `.tanggal` dengan nilai `flex-end` — properti ini dipasang di item, bukan di container.",
            },
            {
              pattern: "\\.penting\\s*\\{[^}]*order\\s*:\\s*-1",
              message:
                "Beri `.penting` properti `order: -1;` — nilai bawaan setiap item adalah 0, jadi angka negatif membuatnya tampil lebih dulu.",
            },
            {
              pattern: "\\.baris\\s*\\{[^}]*align-items\\s*:\\s*flex-end",
              mustNotMatch: true,
              message:
                "Jangan mengubah `align-items` di container — itu akan memindahkan SEMUA item. Yang diminta hanya satu item, jadi pakai `align-self` di itemnya.",
            },
          ],
          solution:
            ".baris {\n" +
            "  display: flex;\n" +
            "  align-items: center;\n" +
            "  gap: 12px;\n" +
            "  height: 120px;\n" +
            "  background: #f1f5f9;\n" +
            "  padding: 8px;\n" +
            "}\n" +
            ".baris > div {\n" +
            "  background: #6366f1;\n" +
            "  color: white;\n" +
            "  padding: 8px;\n" +
            "}\n\n" +
            ".tanggal {\n" +
            "  align-self: flex-end;\n" +
            "}\n\n" +
            ".penting {\n" +
            "  order: -1;\n" +
            "}",
        },
        {
          kind: "quiz",
          id: "css-3-kuis",
          title: "Kuis: Flexbox",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Di mana display: flex harus dipasang untuk membuat tiga kartu berbaris?",
              choices: [
                "Pada masing-masing kartu",
                "Pada elemen parent yang membungkus kartu-kartu itu",
                "Pada body",
                "Pada kartu pertama saja",
              ],
              answerIndex: 1,
              explanation:
                "flex dipasang di container/parent. Anak-anaknya otomatis menjadi flex item. Ini kesalahan pemula yang sering: memasang display: flex di item, bukan di pembungkusnya.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Pada flex-direction: column, properti apa yang mengatur posisi kiri-kanan item?",
              choices: [
                "justify-content",
                "align-items",
                "text-align",
                "flex-wrap",
              ],
              answerIndex: 1,
              explanation:
                "Pada column, main axis menjadi vertikal sehingga justify-content mengatur atas-bawah, dan align-items (cross axis) mengatur kiri-kanan. Karena itu jangan hafal 'justify = horizontal' — hafal 'justify = main axis'.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kamu ingin logo di kiri dan tombol login di kanan pada satu navbar. Nilai justify-content apa yang paling tepat?",
              choices: ["center", "flex-start", "space-between", "space-around"],
              answerIndex: 2,
              explanation:
                "space-between menempatkan item pertama di awal dan terakhir di akhir, dengan sisa ruang dibagi di antaranya — pola navbar paling umum di dunia kerja.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Deretan kartu di navbar gepeng saat layar menyempit karena semua dipaksa tetap satu baris. Properti apa yang membuat item boleh turun ke baris berikutnya?",
              choices: ["flex-wrap", "flex-direction", "justify-content", "align-items"],
              answerIndex: 0,
              explanation:
                "flex-wrap: wrap. Tanpa itu, default-nya nowrap: item memaksa tetap satu baris dan menyusut sampai isinya gepeng — sering terlihat sebagai 'layout rusak di HP'.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Apa arti flex: 1 pada sebuah item?",
              choices: [
                "Lebarnya menjadi 1px",
                "Item mengambil semua ruang sisa yang tersedia",
                "Item menjadi item pertama",
                "Item tidak boleh menyusut",
              ],
              answerIndex: 1,
              explanation:
                "flex: 1 adalah shorthand untuk flex-grow: 1, flex-shrink: 1, flex-basis: 0% — artinya 'tumbuh mengisi ruang sisa'. Kalau beberapa item diberi flex: 1, ruang sisa dibagi rata di antara mereka.",
            },
          ],
        },
      ],
    },
    {
      slug: "grid",
      title: "CSS Grid",
      description:
        "Layout dua dimensi untuk halaman utuh — pasangan Flexbox, bukan pesaingnya.",
      topics: [
        "grid-template-columns/rows & unit fr",
        "repeat(), minmax(), auto-fit vs auto-fill",
        "Menempatkan item: grid-column, grid-row, span",
        "grid-template-areas — layout yang bisa dibaca",
        "Implicit grid & grid-auto-flow",
        "Kapan Grid, kapan Flexbox (jawaban interview yang benar)",
        "Pola nyata: dashboard, galeri responsif tanpa media query",
      ],
      items: [
        {
          kind: "materi",
          id: "css-4-m1",
          title: "Grid: Berpikir dalam Garis, Bukan Kotak",
          body:
            "# Pengertian\n\n" +
            "Grid mengatur **dua dimensi sekaligus**: baris dan kolom. Kalau Flexbox membagi ruang di satu arah, Grid membuat kerangka — kamu menggambar peta lebih dulu, lalu menempatkan item ke dalamnya.\n\n" +
            "Perbedaan cara berpikirnya penting: di Grid, yang dinomori bukan kolomnya melainkan **garis di antara kolom**.\n\n" +
            "```text\n" +
            "garis:  1        2        3        4\n" +
            "        |        |        |        |\n" +
            "        +--------+--------+--------+\n" +
            "        | kolom1 | kolom2 | kolom3 |\n" +
            "        +--------+--------+--------+\n" +
            "\n" +
            "grid-column: 1 / 3   ->  dari garis 1 ke garis 3  =  menutupi 2 kolom\n" +
            "grid-column: span 2  ->  cara yang sama, ditulis lebih intuitif\n" +
            "grid-column: 1 / -1  ->  dari garis pertama ke garis TERAKHIR = penuh\n" +
            "```\n\n" +
            "Angka `-1` sangat berguna: ia selalu berarti garis terakhir, jadi kamu tidak perlu menghitung ulang saat jumlah kolomnya berubah.\n\n" +
            "## Kosakata Inti\n\n" +
            "| Yang kamu tulis | Artinya |\n" +
            "|---|---|\n" +
            "| `grid-template-columns: 200px 1fr` | kolom pertama tetap 200px, kolom kedua mengambil sisanya |\n" +
            "| `repeat(3, 1fr)` | sama dengan menulis `1fr 1fr 1fr` |\n" +
            "| `minmax(200px, 1fr)` | jangan lebih sempit dari 200px, tapi silakan melebar |\n" +
            "| `gap: 16px` | jarak antar sel, otomatis diperhitungkan oleh `fr` |\n" +
            "| `grid-template-areas` | menggambar peta layout dengan nama, langsung terbaca di CSS |\n\n" +
            "Satuan `fr` berarti \"bagian dari ruang yang **tersisa**\". Itulah kelebihannya atas persen: `33.33% × 3` ditambah `gap` akan melebihi lebar container dan meluber, sedangkan `1fr` sudah menghitung gap lebih dulu sehingga selalu pas.\n\n" +
            "## auto-fit dan auto-fill: Beda yang Sering Ditanyakan\n\n" +
            "Keduanya membuat browser menentukan sendiri jumlah kolom, dan bedanya hanya terlihat saat item lebih sedikit daripada kolom yang muat:\n\n" +
            "```text\n" +
            "repeat(auto-fill, minmax(150px, 1fr))   3 item, ruang cukup untuk 5 kolom:\n" +
            "  +-----+ +-----+ +-----+ .     .        kolom kosong TETAP ada,\n" +
            "  |  1  | |  2  | |  3  |                item tidak melebar\n" +
            "  +-----+ +-----+ +-----+\n" +
            "\n" +
            "repeat(auto-fit, minmax(150px, 1fr))    3 item, ruang sama:\n" +
            "  +---------+ +---------+ +---------+    kolom kosong DILIPAT,\n" +
            "  |    1    | |    2    | |    3    |    item melebar mengisi ruang\n" +
            "  +---------+ +---------+ +---------+\n" +
            "```\n\n" +
            "Aturan praktisnya: pakai `auto-fit` kalau kamu ingin item selalu mengisi lebar penuh (galeri, daftar kartu), dan `auto-fill` kalau kamu ingin ukuran item tetap konsisten meski isinya sedikit (kalender, papan yang rapi).\n\n" +
            "## Implicit Grid: Baris yang Dibuat Browser Sendiri\n\n" +
            "Kalau kamu mendefinisikan tiga kolom lalu memasukkan sepuluh item, browser membuat baris tambahan sendiri. Baris yang tidak kamu deklarasikan itu disebut **implicit grid**, dan ukurannya otomatis mengikuti isinya.\n\n" +
            "```css\n" +
            ".papan {\n" +
            "  display: grid;\n" +
            "  grid-template-columns: repeat(3, 1fr);\n" +
            "  grid-auto-rows: minmax(80px, auto);  /* atur tinggi baris implisit */\n" +
            "  grid-auto-flow: row;                 /* bawaan: isi baris demi baris */\n" +
            "}\n" +
            "```\n\n" +
            "`grid-auto-flow: dense` punya satu kegunaan khas: ketika ada item yang dibentangkan dengan `span` dan meninggalkan lubang, `dense` menyuruh browser mengisi lubang itu dengan item berikutnya yang cukup kecil. Perlu diketahui akibatnya: urutan tampil bisa berbeda dari urutan di HTML, dan urutan Tab keyboard tetap mengikuti HTML — jadi jangan memakainya untuk isi yang urutannya bermakna.\n\n" +
            "## Grid atau Flexbox? (jawaban interview yang benar)\n\n" +
            "| Pakai Grid saat | Pakai Flexbox saat |\n" +
            "|---|---|\n" +
            "| mengatur baris **dan** kolom bersamaan | sederet item dalam satu arah |\n" +
            "| kerangka halaman: header, sidebar, main, footer | navbar, deretan tombol, media object |\n" +
            "| galeri yang jumlah kolomnya menyesuaikan layar | isi komponen yang harus sejajar rapi |\n\n" +
            "Jawaban yang membuat interviewer puas bukan \"Grid lebih modern\", tapi: **keduanya bukan pesaing** — Grid biasanya menyusun kerangka halaman, dan Flexbox menyusun isi di dalam tiap bagiannya.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Grid itu seperti **rencana tata ruang sebuah kantor**: kamu menggambar dinding dan ruangan lebih dulu, lalu menempatkan meja ke ruangan tertentu. Flexbox adalah cara menyusun meja **di dalam** satu ruangan. Karena itu keduanya dipakai bersama, dan itu jawaban yang dicari saat pertanyaan ini muncul di wawancara.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Mengira angka pada `grid-column` merujuk kolom.** Ia merujuk garis; `1 / 3` menutupi dua kolom.\n" +
            "2. **Memakai persen padahal ada `gap`.** Totalnya melebihi container dan meluber; pakai `fr`.\n" +
            "3. **Salah jumlah nama di `grid-template-areas`.** Setiap baris string wajib memuat jumlah nama yang sama, kalau tidak seluruh aturan diabaikan tanpa pesan error.\n" +
            "4. **Menyangka `auto-fit` dan `auto-fill` sama.** Bedanya baru terlihat saat itemnya sedikit.\n" +
            "5. **Memakai Grid untuk sederet tombol.** Bisa, tapi Flexbox lebih tepat dan lebih pendek.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** satu baris `repeat(auto-fit, minmax(200px, 1fr))` menggantikan tiga media query untuk galeri produk — dan itu jenis kode yang membuat reviewer langsung tahu kamu paham Grid. Untuk halaman admin dan dashboard, `grid-template-areas` membuat kerangka layout bisa dibaca orang berikutnya tanpa menggambar apa pun di kertas.",
        },
        {
          kind: "step",
          id: "css-4-1",
          title: "grid-template-columns dan unit fr",
          explanation:
            "`display: grid` dipasang di container, lalu `grid-template-columns` menyatakan ada berapa kolom dan selebar apa masing-masing — kerangkanya kamu gambar lebih dulu, dan item mengisi sel demi sel secara berurutan tanpa perlu diberi properti apa pun. Satuan `fr` (singkatan *fraction*) berarti \"satu bagian dari ruang yang **tersisa**\", jadi `1fr 1fr 1fr` menghasilkan tiga kolom sama lebar, sementara `200px 1fr` berarti kolom pertama tetap 200px dan kolom kedua mengambil seluruh sisanya. Keunggulan `fr` atas persen justru terasa saat ada `gap`: `33.33%` dikali tiga sudah memakan 100% lebar, sehingga jarak antar kolom membuat totalnya meluber keluar container — sedangkan `fr` menghitung gap lebih dulu lalu membagi sisanya, jadi selalu pas. Jebakan yang perlu diingat: `grid-template-columns` dipasang di container, bukan di item; memasangnya di item tidak menghasilkan apa pun.",
          example: {
            code: ".papan {\n  display: grid;\n  grid-template-columns: 200px 1fr;  /* kolom 1 tetap, kolom 2 sisanya */\n  gap: 16px;\n}",
            output:
              "Dua kolom: yang pertama selalu 200px, yang kedua melebar mengisi ruang tersisa. Item otomatis mengisi kolom berurutan.",
            note: "1fr = 1 bagian dari ruang SISA (setelah kolom tetap dan gap dikurangi). Karena itu tidak pernah meluber.",
          },
          instruction:
            "Buat `.grid` dengan `display: grid`, tiga kolom sama lebar (`grid-template-columns: 1fr 1fr 1fr`), dan `gap: 10px`.",
          starterCode:
            ".grid {\n  background: #f1f5f9;\n  padding: 10px;\n}\n.sel {\n  background: #818cf8;\n  color: white;\n  padding: 16px;\n}\n",
          language: "css",
          previewHtml:
            '<div class="grid">\n  <div class="sel">1</div>\n  <div class="sel">2</div>\n  <div class="sel">3</div>\n  <div class="sel">4</div>\n</div>',
          tests: [
            {
              pattern: "\\.grid\\s*\\{[^}]*display\\s*:\\s*grid",
              message: "Tambahkan display: grid;",
            },
            {
              pattern:
                "grid-template-columns\\s*:\\s*1fr\\s+1fr\\s+1fr|grid-template-columns\\s*:\\s*repeat\\(\\s*3\\s*,\\s*1fr\\s*\\)",
              message:
                "Atur grid-template-columns: 1fr 1fr 1fr; (atau repeat(3, 1fr)).",
            },
            {
              pattern: "\\.grid\\s*\\{[^}]*gap\\s*:\\s*10px",
              message: "Tambahkan gap: 10px;",
            },
          ],
          solution:
            ".grid {\n  background: #f1f5f9;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}\n.sel {\n  background: #818cf8;\n  color: white;\n  padding: 16px;\n}",
        },
        {
          kind: "step",
          id: "css-4-2",
          title: "repeat() dan minmax()",
          explanation:
            "`repeat(3, 1fr)` lebih ringkas daripada menulis `1fr` tiga kali. `minmax(200px, 1fr)` berarti 'jangan lebih sempit dari 200px, tapi silakan melebar'. Kombinasi keduanya adalah fondasi grid responsif. `repeat()` juga menerima susunan campuran seperti `repeat(2, 1fr) 200px`, berguna ketika kolom terakhir harus berlebar tetap.",
          example: {
            code: "/* panjang */\ngrid-template-columns: 1fr 1fr 1fr 1fr;\n\n/* sama artinya, lebih ringkas */\ngrid-template-columns: repeat(4, 1fr);\n\n/* dengan batas minimum */\ngrid-template-columns: repeat(4, minmax(80px, 1fr));",
            output:
              "Empat kolom sama lebar. Versi minmax menjamin tiap kolom tidak pernah lebih sempit dari 80px.",
            note: "repeat(jumlah, ukuran) dan minmax(minimum, maksimum) — dua fungsi yang paling sering dipakai di Grid.",
          },
          instruction:
            "Buat 2 kolom dengan `grid-template-columns: repeat(2, minmax(100px, 1fr))`.",
          starterCode:
            ".grid {\n  display: grid;\n  gap: 8px;\n  background: #fafaf9;\n  padding: 8px;\n}\n.sel {\n  background: #f472b6;\n  color: white;\n  padding: 14px;\n}\n",
          language: "css",
          previewHtml:
            '<div class="grid">\n  <div class="sel">A</div>\n  <div class="sel">B</div>\n  <div class="sel">C</div>\n</div>',
          tests: [
            {
              pattern:
                "grid-template-columns\\s*:\\s*repeat\\(\\s*2\\s*,\\s*minmax\\(\\s*100px\\s*,\\s*1fr\\s*\\)\\s*\\)",
              message:
                "Atur grid-template-columns: repeat(2, minmax(100px, 1fr));",
            },
          ],
          solution:
            ".grid {\n  display: grid;\n  gap: 8px;\n  background: #fafaf9;\n  padding: 8px;\n  grid-template-columns: repeat(2, minmax(100px, 1fr));\n}\n.sel {\n  background: #f472b6;\n  color: white;\n  padding: 14px;\n}",
        },
        {
          kind: "step",
          id: "css-4-3",
          title: "auto-fit: responsif tanpa media query",
          explanation:
            "Ini salah satu baris CSS paling berguna yang akan kamu tulis: `repeat(auto-fit, minmax(150px, 1fr))`. Browser menghitung sendiri berapa kolom yang muat — banyak kolom di layar lebar, otomatis menyusut jadi satu kolom di HP. **Nol media query.** Pola ini sering membuat interviewer mengangkat kepala.",
          example: {
            code: ".galeri {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}",
            output:
              "Di layar 1000px muncul 4-5 kolom; di tablet jadi 2 kolom; di HP otomatis 1 kolom — tanpa media query sama sekali.",
            note: "auto-fit menghitung sendiri berapa kolom yang muat. Ini satu baris CSS yang menggantikan 3 media query.",
          },
          instruction:
            "Buat grid responsif otomatis: `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))`.",
          starterCode:
            ".galeri {\n  display: grid;\n  gap: 10px;\n  background: #f8fafc;\n  padding: 10px;\n}\n.kartu {\n  background: #22d3ee;\n  padding: 20px;\n}\n",
          language: "css",
          previewHtml:
            '<div class="galeri">\n  <div class="kartu">1</div>\n  <div class="kartu">2</div>\n  <div class="kartu">3</div>\n  <div class="kartu">4</div>\n  <div class="kartu">5</div>\n</div>',
          tests: [
            {
              pattern:
                "grid-template-columns\\s*:\\s*repeat\\(\\s*auto-fit\\s*,\\s*minmax\\(\\s*150px\\s*,\\s*1fr\\s*\\)\\s*\\)",
              message:
                "Atur grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));",
            },
          ],
          solution:
            ".galeri {\n  display: grid;\n  gap: 10px;\n  background: #f8fafc;\n  padding: 10px;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}\n.kartu {\n  background: #22d3ee;\n  padding: 20px;\n}",
        },
        {
          kind: "step",
          id: "css-4-4",
          title: "Membentangkan item dengan span",
          explanation:
            "Item grid bisa menempati lebih dari satu kolom dengan `grid-column: span 2`. Untuk posisi presisi, pakai nomor garis: `grid-column: 1 / 3` berarti dari garis 1 sampai garis 3 (yaitu menutupi 2 kolom). Perhatikan: yang dihitung adalah **garis**, bukan kolom — sumber kebingungan yang umum. Untuk membentang penuh berapa pun jumlah kolomnya, `grid-column: 1 / -1` lebih aman daripada menghitung nomor garis terakhir secara manual.",
          example: {
            code: "/* grid 4 kolom */\n.banner { grid-column: span 3; }   /* menutupi 3 kolom */\n.penuh  { grid-column: 1 / -1;  }   /* dari awal sampai akhir */",
            output:
              ".banner selebar 3 kolom, dan .penuh membentang penuh selebar grid apa pun jumlah kolomnya.",
            note: "grid-column: 1 / -1 adalah trik berguna: -1 berarti garis terakhir, jadi otomatis selalu penuh.",
          },
          instruction:
            "Buat `.lebar` membentang 2 kolom dengan `grid-column: span 2`.",
          starterCode:
            ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.sel {\n  background: #cbd5e1;\n  padding: 14px;\n}\n.lebar {\n  background: #ef4444;\n  color: white;\n  padding: 14px;\n}\n",
          language: "css",
          previewHtml:
            '<div class="grid">\n  <div class="lebar">Aku 2 kolom</div>\n  <div class="sel">B</div>\n  <div class="sel">C</div>\n  <div class="sel">D</div>\n</div>',
          tests: [
            {
              pattern:
                "\\.lebar\\s*\\{[^}]*grid-column\\s*:\\s*span\\s+2|\\.lebar\\s*\\{[^}]*grid-column\\s*:\\s*1\\s*/\\s*3",
              message:
                "Tambahkan grid-column: span 2; pada .lebar (atau grid-column: 1 / 3).",
            },
          ],
          solution:
            ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.sel {\n  background: #cbd5e1;\n  padding: 14px;\n}\n.lebar {\n  background: #ef4444;\n  color: white;\n  padding: 14px;\n  grid-column: span 2;\n}",
        },
        {
          kind: "step",
          id: "css-4-5",
          title: "grid-template-areas: layout yang bisa dibaca",
          explanation:
            "`grid-template-areas` membuat layout yang **terlihat seperti bentuknya** di dalam CSS — sangat mudah dibaca saat maintenance. Setiap area diberi nama, lalu item ditempatkan dengan `grid-area: nama`. Cocok untuk layout halaman utuh: header, sidebar, main, footer. Setiap baris string wajib memuat jumlah nama area yang sama; kalau tidak, seluruh aturan diabaikan browser tanpa pesan error apa pun.",
          example: {
            code: '.app {\n  display: grid;\n  grid-template-areas:\n    "atas  atas"\n    "menu  isi"\n    "bawah bawah";\n}\n\n.navbar { grid-area: atas;  }\n.menu   { grid-area: menu;  }\n.konten { grid-area: isi;   }\n.footer { grid-area: bawah; }',
            output:
              "Layout terbentuk sesuai gambar di grid-template-areas: navbar penuh di atas, menu di kiri, konten di kanan, footer penuh di bawah.",
            note: "Nama yang diulang ('atas atas') berarti area itu membentang melintasi kolom-kolom tersebut.",
          },
          instruction:
            "Lengkapi: beri `.header` `grid-area: header`, `.sidebar` `grid-area: sidebar`, dan `.main` `grid-area: main`.",
          starterCode:
            '.layout {\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  grid-template-areas:\n    "header header"\n    "sidebar main";\n  gap: 8px;\n}\n.header { background: #1e293b; color: white; padding: 12px; }\n.sidebar { background: #94a3b8; padding: 12px; }\n.main { background: #e2e8f0; padding: 12px; }\n',
          language: "css",
          previewHtml:
            '<div class="layout">\n  <div class="header">Header</div>\n  <div class="sidebar">Sidebar</div>\n  <div class="main">Main</div>\n</div>',
          tests: [
            {
              pattern: "\\.header\\s*\\{[^}]*grid-area\\s*:\\s*header",
              message: "Tambahkan grid-area: header; pada .header",
            },
            {
              pattern: "\\.sidebar\\s*\\{[^}]*grid-area\\s*:\\s*sidebar",
              message: "Tambahkan grid-area: sidebar; pada .sidebar",
            },
            {
              pattern: "\\.main\\s*\\{[^}]*grid-area\\s*:\\s*main",
              message: "Tambahkan grid-area: main; pada .main",
            },
          ],
          solution:
            '.layout {\n  display: grid;\n  grid-template-columns: 120px 1fr;\n  grid-template-areas:\n    "header header"\n    "sidebar main";\n  gap: 8px;\n}\n.header { background: #1e293b; color: white; padding: 12px; grid-area: header; }\n.sidebar { background: #94a3b8; padding: 12px; grid-area: sidebar; }\n.main { background: #e2e8f0; padding: 12px; grid-area: main; }',
        },
        {
          kind: "quiz",
          id: "css-4-kuis",
          title: "Kuis: CSS Grid",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Ini pertanyaan interview klasik: kapan pakai Grid dan kapan Flexbox?",
              choices: [
                "Grid selalu lebih baik, Flexbox sudah usang",
                "Grid untuk layout dua dimensi (baris DAN kolom), Flexbox untuk satu dimensi",
                "Flexbox untuk desktop, Grid untuk mobile",
                "Keduanya identik, pilih yang mana saja",
              ],
              answerIndex: 1,
              explanation:
                "Grid untuk dua dimensi — saat kamu mengatur baris dan kolom bersamaan (layout halaman, dashboard). Flexbox untuk satu dimensi — sederet item dalam satu arah (navbar, deretan tombol). Keduanya sering dipakai bersama: Grid untuk halaman, Flexbox di dalam komponennya.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Kenapa 1fr lebih baik daripada 33.33% untuk tiga kolom?",
              choices: [
                "Karena lebih pendek ditulis",
                "Karena fr menghitung ruang SISA setelah gap, sedangkan persen tidak sehingga bisa meluber",
                "Karena persen tidak didukung Grid",
                "Tidak ada bedanya",
              ],
              answerIndex: 1,
              explanation:
                "33.33% × 3 = 100%, lalu gap ditambahkan di atasnya sehingga total melebihi container dan layout meluber. Unit fr membagi ruang yang TERSISA setelah gap dikurangi — selalu pas.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Apa yang dilakukan repeat(auto-fit, minmax(150px, 1fr))?",
              choices: [
                "Membuat tepat 150 kolom",
                "Browser otomatis menentukan jumlah kolom yang muat, minimal 150px per kolom — responsif tanpa media query",
                "Membuat satu kolom selebar 150px",
                "Mengunci grid pada 150px di semua layar",
              ],
              answerIndex: 1,
              explanation:
                "Browser menghitung sendiri berapa kolom selebar minimal 150px yang muat, dan sisa ruang dibagi rata (1fr). Hasilnya grid yang beradaptasi dari banyak kolom di desktop sampai satu kolom di HP tanpa satu pun media query.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "grid-column: 1 / 3 membuat item menempati berapa kolom?",
              choices: ["1 kolom", "2 kolom", "3 kolom", "4 kolom"],
              answerIndex: 1,
              explanation:
                "2 kolom. Angka-angka itu merujuk pada nomor GARIS grid, bukan kolom: dari garis 1 sampai garis 3 mencakup kolom 1 dan 2. Kalau ingin lebih intuitif, gunakan grid-column: span 2.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kamu ingin struktur layout langsung terbaca di CSS dalam bentuk peta seperti \"header header\" / \"sidebar main\". Properti Grid apa yang menyediakannya?",
              choices: ["grid-template-areas", "grid-template-columns", "grid-auto-flow", "grid-area"],
              answerIndex: 0,
              explanation:
                "grid-template-areas membuat struktur layout terlihat langsung di CSS dalam bentuk visual. Sangat membantu maintenance, karena orang berikutnya bisa memahami layout tanpa menggambar sendiri.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Grid galerimu punya ruang untuk lima kolom, tapi hari itu hanya ada tiga item. Kamu ingin ketiganya melebar mengisi lebar penuh. Mana yang kamu pakai?",
              code: "grid-template-columns: repeat(???, minmax(150px, 1fr));",
              choices: [
                "auto-fill, karena ia mengisi seluruh ruang yang tersedia",
                "auto-fit, karena kolom kosong dilipat sehingga item yang ada ikut melebar",
                "Keduanya sama, pilih yang mana saja",
                "Tidak bisa; harus memakai media query",
              ],
              answerIndex: 1,
              explanation:
                "Bedanya hanya terlihat saat item lebih sedikit daripada kolom yang muat: `auto-fill` **mempertahankan** kolom kosong sehingga item tetap seukuran minimumnya, sedangkan `auto-fit` **melipat** kolom kosong sehingga item yang ada melebar mengisi ruang. Pilihan pertama menggoda karena nama \"fill\" terdengar seperti \"mengisi penuh\" — padahal yang diisi adalah jumlah kolomnya, bukan lebar itemnya. Pakai `auto-fill` kalau kamu justru ingin ukuran item tetap konsisten, misalnya pada tampilan kalender.",
            },
          ],
        },
      ],
    },
    {
      slug: "responsive",
      title: "Responsive Design",
      description:
        "Mobile-first yang benar — bukan sekadar 'tambah media query di akhir'.",
      topics: [
        "Viewport meta & kenapa tanpa itu semua berantakan",
        "Media query: min-width, mobile-first workflow",
        "Breakpoint: memilih berdasarkan konten, bukan device",
        "Fluid typography & clamp()",
        "Responsive image: srcset & sizes",
        "Container query — pendekatan modern per-komponen",
        "Menguji: DevTools device mode & perangkat nyata",
      ],
      items: [
        {
          kind: "materi",
          id: "css-5-m1",
          title: "Responsive: Satu Halaman untuk Semua Ukuran Layar",
          body:
            "# Pengertian\n\n" +
            "Responsive design bukan \"membuat versi mobile\". Ia berarti **satu halaman** yang menyesuaikan dirinya ke ruang yang tersedia — dari ponsel 360px sampai monitor 2560px, termasuk ukuran-ukuran yang belum ada saat kamu menulisnya.\n\n" +
            "Di Indonesia, mayoritas kunjungan datang dari ponsel dan sering lewat jaringan seluler. Jadi ini bukan penyempurnaan di akhir pekerjaan; ini bentuk dasar halamannya.\n\n" +
            "## Satu Baris HTML yang Menentukan Segalanya\n\n" +
            "```html\n" +
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
            "```\n\n" +
            "> **Tanpa baris ini, seluruh CSS responsive-mu tidak terasa apa pun di ponsel.** Browser mobile akan berpura-pura layarnya selebar desktop (sekitar 980px), merender halaman di sana, lalu mengecilkan hasilnya seperti foto — sehingga media query-mu tidak pernah terpicu. Ini bug responsive nomor satu, dan letaknya di HTML, bukan di CSS.\n\n" +
            "## Mobile-First: Arah Menulis yang Benar\n\n" +
            "```css\n" +
            "/* dasar: berlaku di SEMUA ukuran, ditulis untuk layar kecil */\n" +
            ".produk { display: grid; grid-template-columns: 1fr; gap: 12px; }\n\n" +
            "/* tambahan: hanya dari 900px ke atas */\n" +
            "@media (min-width: 900px) {\n" +
            "  .produk { grid-template-columns: repeat(3, 1fr); }\n" +
            "}\n" +
            "```\n\n" +
            "Kenapa arah ini, bukan sebaliknya? Karena layout mobile umumnya lebih sederhana — satu kolom, tanpa sidebar. Menulis dari sederhana ke rumit berarti kamu **menambah** aturan seiring ruang bertambah, bukan membatalkan aturan yang sudah ditulis. Hasilnya CSS lebih sedikit, dan ini juga arah bawaan Tailwind (`md:`, `lg:` semuanya berarti \"dari sini ke atas\").\n\n" +
            "Perhatikan juga urutan penulisannya: aturan di dalam media query harus berada **setelah** aturan dasarnya, karena specificity keduanya sama dan yang belakangan yang menang.\n\n" +
            "## Memilih Breakpoint\n\n" +
            "Jangan mengambil daftar ukuran iPhone dan iPad — daftar itu berubah setiap tahun dan tidak pernah lengkap. Cara yang dipakai profesional: **perlebar jendela browser perlahan sambil melihat halamanmu, dan tandai titik di mana tampilannya mulai terasa janggal.** Di situlah breakpoint yang tepat, karena ia ditentukan oleh kontenmu sendiri.\n\n" +
            "## Tiga Alat Modern yang Mengurangi Media Query\n\n" +
            "| Alat | Bentuknya | Menggantikan |\n" +
            "|---|---|---|\n" +
            "| `clamp()` | `font-size: clamp(1.5rem, 5vw, 3rem)` | beberapa media query untuk ukuran font |\n" +
            "| `auto-fit` + `minmax()` | `repeat(auto-fit, minmax(200px, 1fr))` | media query untuk jumlah kolom |\n" +
            "| Container query | `@container (min-width: 400px)` | media query untuk komponen yang dipakai di banyak tempat |\n\n" +
            "**Container query** adalah pergeseran cara berpikir yang layak kamu kenali sekarang. Media query menanyakan \"seberapa lebar **layarnya**\", padahal yang benar-benar penting biasanya \"seberapa lebar **ruang yang tersedia untuk komponen ini**\". Satu kartu produk bisa muncul di sidebar sempit dan di area utama yang lebar pada layar yang sama:\n\n" +
            "```css\n" +
            ".wadah-kartu { container-type: inline-size; }\n\n" +
            "@container (min-width: 400px) {\n" +
            "  .kartu { display: flex; gap: 16px; }   /* melebar hanya kalau WADAHNYA lebar */\n" +
            "}\n" +
            "```\n\n" +
            "## Gambar Responsif\n\n" +
            "Dua lapis yang berbeda tugasnya:\n\n" +
            "```css\n" +
            "/* 1. CSS: jangan sampai meluber */\n" +
            "img { max-width: 100%; height: auto; }\n" +
            "```\n\n" +
            "```html\n" +
            "<!-- 2. HTML: kirim BERKAS yang ukurannya wajar, hemat kuota -->\n" +
            "<img src=\"foto-800.jpg\"\n" +
            "     srcset=\"foto-400.jpg 400w, foto-800.jpg 800w, foto-1600.jpg 1600w\"\n" +
            "     sizes=\"(min-width: 900px) 50vw, 100vw\"\n" +
            "     alt=\"Kopi Gayo\">\n" +
            "```\n\n" +
            "`srcset` mendaftar berkas beserta lebar aslinya, dan `sizes` memberi tahu browser seberapa besar gambar itu akan ditampilkan. Dari dua keterangan itu browser memilih sendiri berkas yang paling pas. Tanpa keduanya, pengguna ponsel mengunduh berkas berukuran desktop — pemborosan kuota yang tidak pernah terlihat dari layar developer.\n\n" +
            "## Cara Mengujinya\n\n" +
            "1. Buka DevTools, klik ikon **Toggle device toolbar** (Ctrl+Shift+M). Kamu bisa memilih ukuran perangkat atau menarik tepinya bebas.\n" +
            "2. Menarik tepi jendela browser secara perlahan justru lebih berguna untuk menemukan breakpoint, karena kamu melihat titik persis saat layout mulai rusak.\n" +
            "3. Buka di ponsel sungguhan sebelum menyatakan selesai. Simulator tidak menunjukkan ukuran target sentuh yang terlalu kecil, dan tidak menunjukkan betapa lambatnya gambar besar di jaringan seluler.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Responsive design itu seperti **air**, bukan seperti es. Es harus dicetak ulang untuk setiap bentuk wadah — itu pendekatan \"buat versi mobile terpisah\". Air mengambil bentuk wadah apa pun tanpa dibuat ulang, termasuk wadah yang belum pernah kamu lihat. Media query hanyalah beberapa sekat di dalam wadah itu, bukan cetakan baru.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Lupa meta viewport.** Semua yang lain jadi tidak berarti.\n" +
            "2. **Menulis desktop lebih dulu lalu membatalkannya dengan `max-width`.** Bisa jalan, tapi CSS-nya lebih banyak dan lebih mudah bertabrakan.\n" +
            "3. **Breakpoint mengikuti nama perangkat.** Ikuti kontenmu.\n" +
            "4. **`width: 100%` pada gambar.** Gambar kecil ikut dipaksa melebar sampai pecah; pakai `max-width: 100%`.\n" +
            "5. **Menguji hanya dengan mengecilkan jendela di laptop.** Ukuran target sentuh dan kecepatan jaringan hanya terasa di perangkat sungguhan.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** hampir setiap tugas frontend. Dan satu hal yang membedakan pekerjaan yang lolos review: memeriksa tampilan pada lebar aneh — 320px, 768px, dan saat teks diperbesar 200% — bukan hanya pada tiga ukuran yang kebetulan ada di menu DevTools.",
        },
        {
          kind: "step",
          id: "css-5-1",
          title: "Media query mobile-first",
          explanation:
            "**Mobile-first** artinya CSS dasarmu ditulis untuk layar kecil, lalu `@media (min-width: ...)` menambahkan penyesuaian untuk layar lebih lebar. Kenapa arah ini? Karena layout mobile umumnya lebih sederhana (satu kolom), jadi kamu menambah kerumitan seiring ruang bertambah — bukan sebaliknya. Ini juga default di Tailwind.",
          example: {
            code: "/* dasar: berlaku di SEMUA ukuran (termasuk HP) */\n.judul {\n  font-size: 20px;\n}\n\n/* tambahan: hanya berlaku dari 768px ke atas */\n@media (min-width: 768px) {\n  .judul {\n    font-size: 36px;\n  }\n}",
            output:
              "Di HP judul berukuran 20px; begitu lebar layar mencapai 768px, judul menjadi 36px.",
            note: "Perhatikan struktur: @media (kondisi) { selector { properti } } — ada dua tingkat kurung kurawal.",
          },
          instruction:
            "Tambahkan media query `@media (min-width: 600px)` yang mengubah `.kotak` menjadi `background: green;`.",
          starterCode:
            ".kotak {\n  background: crimson;\n  color: white;\n  padding: 20px;\n}\n\n",
          language: "css",
          previewHtml:
            '<div class="kotak">Lebar panel preview menentukan warnaku</div>',
          tests: [
            {
              pattern:
                "@media\\s*\\(\\s*min-width\\s*:\\s*600px\\s*\\)\\s*\\{[\\s\\S]*\\.kotak[\\s\\S]*background\\s*:\\s*green",
              message:
                "Buat @media (min-width: 600px) yang di dalamnya ada .kotak { background: green; }",
            },
          ],
          solution:
            ".kotak {\n  background: crimson;\n  color: white;\n  padding: 20px;\n}\n\n@media (min-width: 600px) {\n  .kotak {\n    background: green;\n  }\n}",
        },
        {
          kind: "step",
          id: "css-5-2",
          title: "Dari satu kolom ke banyak kolom",
          explanation:
            "Pola responsif paling umum: default satu kolom (mobile), lalu di layar lebar menjadi beberapa kolom. Perhatikan bahwa aturan dasar tidak perlu media query sama sekali — hanya penyesuaian yang perlu. Perhatikan urutannya: aturan di dalam media query harus ditulis SETELAH aturan dasarnya, karena keduanya bernilai specificity sama dan yang belakangan yang menang.",
          example: {
            code: ".produk {\n  display: grid;\n  grid-template-columns: 1fr;      /* HP: 1 kolom */\n  gap: 12px;\n}\n\n@media (min-width: 900px) {\n  .produk {\n    grid-template-columns: 1fr 1fr 1fr;  /* desktop: 3 kolom */\n  }\n}",
            output:
              "Kartu produk bertumpuk satu kolom di HP, lalu menjadi tiga kolom berjejer di layar lebar.",
            note: "Aturan dasar tidak perlu media query — hanya perubahannya yang perlu. Itulah efisiensi mobile-first.",
          },
          instruction:
            "Di dalam `@media (min-width: 700px)`, ubah `.grid` menjadi `grid-template-columns: 1fr 1fr;`.",
          starterCode:
            ".grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 8px;\n}\n.sel {\n  background: #7dd3fc;\n  padding: 16px;\n}\n\n",
          language: "css",
          previewHtml:
            '<div class="grid">\n  <div class="sel">A</div>\n  <div class="sel">B</div>\n</div>',
          tests: [
            {
              pattern:
                "@media\\s*\\(\\s*min-width\\s*:\\s*700px\\s*\\)\\s*\\{[\\s\\S]*grid-template-columns\\s*:\\s*1fr\\s+1fr",
              message:
                "Di dalam @media (min-width: 700px), atur .grid { grid-template-columns: 1fr 1fr; }",
            },
          ],
          solution:
            ".grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 8px;\n}\n.sel {\n  background: #7dd3fc;\n  padding: 16px;\n}\n\n@media (min-width: 700px) {\n  .grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}",
        },
        {
          kind: "step",
          id: "css-5-3",
          title: "clamp(): tipografi yang mengalir",
          explanation:
            "`clamp(minimum, ideal, maksimum)` memberi nilai yang menyesuaikan diri tapi tidak pernah keluar batas. Contoh `clamp(1.5rem, 5vw, 3rem)`: font tumbuh mengikuti lebar viewport (5vw), tapi tidak akan lebih kecil dari 1.5rem atau lebih besar dari 3rem. Satu baris ini menggantikan tiga media query, dan hasilnya lebih halus karena ukurannya berubah bertahap alih-alih melompat di titik breakpoint. Satuan `vw` berarti persen dari lebar jendela, jadi `5vw` di layar 1000px sama dengan 50px. Dua hal yang perlu diperhatikan: pakailah `rem` untuk batas minimum dan maksimumnya agar pengaturan ukuran font pengguna tetap dihormati, dan jangan memakai `vw` sebagai satu-satunya satuan ukuran font — tanpa batas bawah, teks bisa menjadi terlalu kecil untuk dibaca di ponsel.",
          example: {
            code: "/* clamp(minimum, ideal, maksimum) */\n.judul   { font-size: clamp(1rem, 3vw, 2rem); }\n.wadah   { padding: clamp(1rem, 5vw, 4rem);   }",
            output:
              "Ukuran font dan padding tumbuh mulus mengikuti lebar layar, tapi berhenti di batas minimum dan maksimum.",
            note: "vw = 1% lebar viewport. Jadi 3vw di layar 1000px = 30px. clamp mencegahnya jadi terlalu kecil atau raksasa.",
          },
          instruction:
            "Judul halaman harus mengecil di ponsel tapi tidak pernah lebih kecil dari `1.5rem`, dan boleh membesar mengikuti lebar layar sampai berhenti di `3rem`. Terapkan ke `h1` dengan satu fungsi CSS yang menampung ketiga nilai itu sekaligus — pakai `5vw` sebagai nilai idealnya.",
          starterCode: "h1 {\n  color: #1e293b;\n}\n",
          language: "css",
          previewHtml: "<h1>Judul yang Mengalir</h1>",
          tests: [
            {
              pattern:
                "h1\\s*\\{[^}]*font-size\\s*:\\s*clamp\\(\\s*1\\.5rem\\s*,\\s*5vw\\s*,\\s*3rem\\s*\\)",
              message: "Atur font-size: clamp(1.5rem, 5vw, 3rem); pada h1",
            },
          ],
          solution: "h1 {\n  color: #1e293b;\n  font-size: clamp(1.5rem, 5vw, 3rem);\n}",
        },
        {
          kind: "step",
          id: "css-5-4",
          title: "Gambar yang tidak meluber",
          explanation:
            "Gambar dengan lebar asli 2000px akan merusak layout mobile. Perbaikan bakunya dua baris: `max-width: 100%` (jangan melebihi wadahnya) dan `height: auto` (jaga rasio agar tidak gepeng). Ini salah satu aturan pertama yang ditulis di hampir setiap proyek nyata. Tambahkan `display: block` bila muncul jarak kecil di bawah gambar — celah itu berasal dari sifat inline yang menyisakan ruang untuk garis dasar teks.",
          example: {
            code: "/* aturan yang hampir selalu ditulis di setiap proyek */\nimg, video {\n  max-width: 100%;\n  height: auto;\n}",
            output:
              "Gambar selebar 3000px otomatis menyusut agar pas di wadahnya, dengan proporsi tetap terjaga.",
            note: "Pakai max-width (bukan width) agar gambar kecil tidak dipaksa membesar sampai pecah.",
          },
          instruction:
            "Buat `img` responsif dengan `max-width: 100%` dan `height: auto`.",
          starterCode: "img {\n  border: 2px solid #334155;\n}\n",
          language: "css",
          previewHtml:
            '<div style="width:200px;border:1px dashed #999">\n  <img src="https://picsum.photos/600/200" alt="Contoh">\n</div>',
          tests: [
            {
              pattern: "img\\s*\\{[^}]*max-width\\s*:\\s*100%",
              message: "Tambahkan max-width: 100%;",
            },
            {
              pattern: "img\\s*\\{[^}]*height\\s*:\\s*auto",
              message:
                "Tambahkan height: auto; agar rasio gambar tidak berubah.",
            },
          ],
          solution:
            "img {\n  border: 2px solid #334155;\n  max-width: 100%;\n  height: auto;\n}",
        },
        {
          kind: "quiz",
          id: "css-5-kuis",
          title: "Kuis: Responsive Design",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Apa arti pendekatan 'mobile-first' dalam menulis CSS?",
              choices: [
                "Membuat versi mobile di file CSS terpisah",
                "CSS dasar ditulis untuk layar kecil, lalu min-width media query menambah penyesuaian untuk layar lebar",
                "Mendesain hanya untuk HP",
                "Memakai max-width media query untuk semuanya",
              ],
              answerIndex: 1,
              explanation:
                "Mobile-first: aturan dasar tanpa media query melayani layar kecil, lalu @media (min-width: ...) menambahkan kerumitan seiring ruang bertambah. Hasilnya CSS lebih sedikit dan performa mobile lebih baik — juga default Tailwind.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "CSS responsive-mu sudah benar tapi di HP tetap tampil seperti desktop yang dikecilkan. Apa penyebabnya?",
              choices: [
                "Media query harus pakai max-width",
                "Tag <meta name=\"viewport\"> belum ada di HTML",
                "Perlu file CSS khusus mobile",
                "Browser HP tidak mendukung media query",
              ],
              answerIndex: 1,
              explanation:
                'Tanpa <meta name="viewport" content="width=device-width, initial-scale=1">, browser mobile mensimulasikan lebar desktop lalu mengecilkan tampilannya — media query-mu tidak pernah terpicu. Ini bug responsive nomor satu.',
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa yang dilakukan clamp(1rem, 4vw, 2rem)?",
              choices: [
                "Memilih nilai acak antara 1rem dan 2rem",
                "Nilai mengikuti 4vw, tapi tidak pernah lebih kecil dari 1rem atau lebih besar dari 2rem",
                "Selalu 4vw",
                "Menjumlahkan ketiga nilai",
              ],
              answerIndex: 1,
              explanation:
                "clamp(min, ideal, max) memberi nilai fluid dengan batas aman. Nilai ideal (4vw) mengikuti lebar viewport, tapi tidak akan pernah keluar dari rentang 1rem–2rem. Menggantikan beberapa media query hanya untuk ukuran font.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara paling baku agar gambar besar tidak meluber di layar kecil?",
              choices: [
                "width: 100% saja",
                "max-width: 100% dan height: auto",
                "Mengecilkan gambar di Photoshop saja",
                "overflow: hidden pada body",
              ],
              answerIndex: 1,
              explanation:
                "max-width: 100% mencegah gambar melebihi wadahnya (tanpa memaksa membesar seperti width: 100% pada gambar kecil), dan height: auto menjaga rasio aspek agar tidak gepeng.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara terbaik menentukan nilai breakpoint?",
              choices: [
                "Sesuai ukuran iPhone dan iPad terbaru",
                "Berdasarkan titik di mana konten dan layout mulai terlihat buruk",
                "Selalu 768px dan 1024px",
                "Satu breakpoint per merek HP populer",
              ],
              answerIndex: 1,
              explanation:
                "Breakpoint mengikuti konten, bukan daftar device — jumlah dan ukuran device berubah terus. Caranya: perlebar browser perlahan sampai layout terlihat janggal, di situlah breakpoint yang tepat.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Gambarmu sudah memakai `max-width: 100%` sehingga tampil rapi di ponsel, tapi pengguna ponsel tetap mengunduh berkas berukuran 1600px. Apa yang menyelesaikannya?",
              choices: [
                "Menambahkan `height: auto` juga",
                "Menyediakan beberapa berkas lewat atribut `srcset` beserta `sizes` di HTML",
                "Menambahkan media query untuk gambar",
                "Mengecilkan gambar dengan `transform: scale()`",
              ],
              answerIndex: 1,
              explanation:
                "`max-width: 100%` hanya mengatur **tampilannya**, bukan berkas yang diunduh — gambar 1600px tetap diunduh seluruhnya lalu ditampilkan kecil. `srcset` mendaftar beberapa berkas beserta lebar aslinya dan `sizes` memberi tahu browser seberapa besar gambar akan ditampilkan, sehingga browser memilih sendiri berkas yang paling pas. Ini pemborosan kuota yang tidak pernah terlihat dari layar developer, tapi sangat terasa bagi pengguna jaringan seluler.",
            },
            {
              id: "q7",
              type: "pilihan-ganda",
              question:
                "Satu komponen kartu dipakai di sidebar sempit dan di area utama yang lebar, pada layar yang sama. Kamu ingin ia melebar hanya kalau ruang di sekitarnya cukup. Apa yang tepat?",
              choices: [
                "Media query, karena ia mengukur lebar layar",
                "Container query, karena ia mengukur lebar wadah tempat komponen itu berada",
                "Membuat dua komponen terpisah",
                "`clamp()` pada lebar kartunya",
              ],
              answerIndex: 1,
              explanation:
                "Media query hanya tahu lebar **layar**, sehingga kartu di sidebar sempit dan kartu di area utama mendapat perlakuan sama — itulah keterbatasannya. Container query (`container-type: inline-size` pada wadah, lalu `@container (min-width: 400px)`) menanyakan lebar **wadahnya**, sehingga satu komponen bisa dipakai di banyak tempat tanpa penyesuaian khusus. Membuat dua komponen terpisah memang bekerja, tapi berarti setiap perubahan harus dikerjakan dua kali.",
            },
          ],
        },
      ],
    },
    {
      slug: "tipografi-visual",
      title: "Tipografi & Efek Visual",
      description:
        "Detail yang membuat UI terlihat profesional: font, bayangan, transisi, dan animasi.",
      topics: [
        "font-family, web font, dan font loading (FOUT/FOIT)",
        "font-size, line-height, letter-spacing — skala tipografi",
        "text-overflow, ellipsis, dan line-clamp",
        "box-shadow & drop-shadow yang tidak norak",
        "Gradient: linear, radial, conic",
        "transition: property, duration, timing-function",
        "transform: translate, scale, rotate",
        "@keyframes & animation — plus prefers-reduced-motion",
      ],
      items: [
        {
          kind: "materi",
          id: "css-6-m1",
          title: "Tipografi dan Efek Visual yang Tidak Norak",
          body:
            "# Pengertian\n\n" +
            "Modul ini tentang detail yang membedakan halaman yang \"jadi\" dari halaman yang \"terlihat profesional\". Sebagian besar isinya bukan trik rumit, melainkan **nilai yang wajar**: jarak baris yang cukup, bayangan yang lembut, gerakan yang singkat.\n\n" +
            "Kebanyakan tampilan amatir bukan berasal dari kurangnya efek, tapi dari efek yang berlebihan.\n\n" +
            "## Tipografi: Tiga Angka yang Paling Berpengaruh\n\n" +
            "| Properti | Nilai yang wajar | Kenapa |\n" +
            "|---|---|---|\n" +
            "| `line-height` | 1.5–1.7 untuk teks bacaan, 1.1–1.2 untuk judul besar | jarak baris adalah faktor terbesar kenyamanan membaca |\n" +
            "| panjang baris | 45–75 karakter (`max-width: 65ch`) | baris terlalu lebar membuat mata sulit menemukan awal baris berikutnya |\n" +
            "| `letter-spacing` | 0 untuk teks isi; sedikit **negatif** untuk judul besar; sedikit **positif** untuk teks kapital | huruf kapital berdempetan terlihat rapat, judul besar terlihat renggang |\n\n" +
            "Tulis `line-height` **tanpa satuan** (`1.6`, bukan `24px`). Nilai tanpa satuan bersifat pengali: setiap elemen menghitung 1,6 × ukuran fontnya sendiri. Nilai `px` diwarisi mentah, sehingga anak dengan font 32px tetap mendapat jarak baris 24px dan barisnya bertumpuk.\n\n" +
            "## Web Font: FOUT dan FOIT\n\n" +
            "Font yang bukan bawaan sistem harus diunduh dulu, dan selama menunggu ada dua kemungkinan perilaku:\n\n" +
            "```text\n" +
            "FOIT  Flash Of Invisible Text  -> teks TIDAK TERLIHAT sampai font siap\n" +
            "FOUT  Flash Of Unstyled Text   -> teks tampil dengan font cadangan dulu,\n" +
            "                                  lalu berganti saat font aslinya siap\n" +
            "```\n\n" +
            "FOUT hampir selalu lebih baik: pengunjung bisa mulai membaca. Cara memintanya satu properti:\n\n" +
            "```css\n" +
            "@font-face {\n" +
            "  font-family: \"Inter\";\n" +
            "  src: url(\"/fonts/inter.woff2\") format(\"woff2\");\n" +
            "  font-display: swap;   /* tampilkan font cadangan dulu, jangan sembunyikan teks */\n" +
            "}\n" +
            "```\n\n" +
            "Cara paling hemat tentu tidak mengunduh apa pun: `font-family: system-ui, sans-serif` memakai font bawaan perangkat, tampil seketika, dan terasa \"asli\" di masing-masing sistem.\n\n" +
            "## Bayangan yang Lembut\n\n" +
            "```text\n" +
            "box-shadow:  0        4px      12px       rgba(0, 0, 0, 0.1)\n" +
            "             ^        ^         ^          ^\n" +
            "             geser-x  geser-y   blur       warna sangat transparan\n" +
            "```\n\n" +
            "Resepnya: **geser kecil, blur agak besar, warna sangat transparan**. Bayangan hitam pekat tanpa blur (`5px 5px black`) langsung terasa seperti web tahun 2005. Kalau butuh bayangan pada bentuk tidak beraturan seperti logo PNG atau ikon SVG, `box-shadow` akan mengikuti kotaknya, bukan bentuknya — untuk itu pakai `filter: drop-shadow(0 4px 6px rgba(0,0,0,.2))` yang mengikuti bentuk aslinya termasuk bagian transparannya.\n\n" +
            "## Gradient\n\n" +
            "```css\n" +
            "/* linear: arah bisa sudut atau kata (to right, to bottom right) */\n" +
            "background: linear-gradient(to right, #0ea5e9, #6366f1);\n\n" +
            "/* radial: menyebar dari satu titik */\n" +
            "background: radial-gradient(circle at 30% 30%, #fde68a, #f59e0b);\n\n" +
            "/* conic: berputar mengelilingi titik pusat — dipakai untuk diagram donat */\n" +
            "background: conic-gradient(#22c55e 0 35%, #e5e7eb 35% 100%);\n" +
            "```\n\n" +
            "Gradient adalah nilai `background`, bukan `color` — jadi ia menempati properti latar. Dua catatan praktis: gradient dengan kontras rendah di belakang teks membuat teksnya sulit dibaca di sebagian titik, dan gradient antara dua warna yang sangat berbeda rona sering memunculkan pita abu-abu di tengah. Perbaikannya: sisipkan satu warna tengah, atau pilih dua warna yang berdekatan ronanya.\n\n" +
            "## Gerakan: transition, transform, dan Batasnya\n\n" +
            "| Properti | Untuk | Catatan penting |\n" +
            "|---|---|---|\n" +
            "| `transition` | perubahan nilai jadi mulus | pasang di keadaan **normal**, bukan di `:hover` |\n" +
            "| `transform` | geser, perbesar, putar | tidak memicu perhitungan ulang layout, jadi hemat |\n" +
            "| `@keyframes` + `animation` | gerakan bertahap atau berulang | hormati `prefers-reduced-motion` |\n\n" +
            "Dua properti yang paling aman dianimasikan adalah `transform` dan `opacity`, karena keduanya bisa ditangani langsung oleh compositor tanpa menghitung ulang tata letak halaman. Menganimasikan `width`, `height`, `top`, atau `margin` memaksa browser menghitung ulang layout setiap frame — di ponsel, bedanya terasa.\n\n" +
            "Durasi yang wajar: **150–300 ms**. Di bawah 100 ms hampir tidak terasa; di atas 500 ms mulai membuat antarmuka terasa lambat.\n\n" +
            "> **Sebagian orang mengalami pusing atau mual karena gerakan di layar** (gangguan vestibular), dan sistem mereka menyalakan pengaturan \"kurangi gerakan\". Menghormatinya lewat `@media (prefers-reduced-motion: reduce)` adalah standar profesional, bukan tambahan opsional.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Efek visual itu seperti **bumbu**. Masakan tanpa bumbu terasa datar, tapi yang membuat orang berhenti makan bukan kurang bumbu — melainkan bumbu berlebihan. Bayangan tipis, transisi 200 ms, dan satu warna aksen sudah cukup. Empat animasi yang berebut perhatian di satu halaman adalah tanda paling jelas bahwa halaman itu dibuat pemula.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **`transition` ditulis di dalam `:hover`.** Mulus saat masuk, patah saat keluar.\n" +
            "2. **Dua properti `transform` terpisah.** Yang kedua menimpa yang pertama; gabungkan dalam satu properti dipisah spasi.\n" +
            "3. **`line-height` ber-satuan px.** Diwarisi mentah dan membuat teks besar bertumpuk.\n" +
            "4. **Ellipsis tanpa `white-space: nowrap`.** Ketiga properti (`nowrap`, `overflow: hidden`, `text-overflow: ellipsis`) adalah satu paket; kurang satu, efeknya batal total.\n" +
            "5. **Menganimasikan `width` atau `margin`.** Pakai `transform` supaya tidak memicu reflow.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** di code review, dua hal yang paling sering dikomentari dari modul ini adalah bayangan yang terlalu pekat dan animasi yang terlalu lama. Dan `prefers-reduced-motion` termasuk butir yang diperiksa saat audit aksesibilitas — sama seperti kontras warna dan indikator fokus.",
        },
        {
          kind: "step",
          id: "css-6-1",
          title: "font-family dan font stack",
          explanation:
            "`font-family` menerima **daftar** font, dibaca dari kiri: kalau font pertama tidak tersedia, browser mencoba berikutnya. Karena itu selalu akhiri dengan kategori generik (`sans-serif`, `serif`, `monospace`) sebagai jaring pengaman. Nama font yang mengandung spasi harus dikutip. Untuk halaman yang mengutamakan kecepatan, mulailah dari font sistem seperti `system-ui`: tidak ada berkas yang perlu diunduh sehingga teks langsung tampil.",
          example: {
            code: 'body {\n  font-family: Georgia, "Times New Roman", serif;\n}\n\ncode {\n  font-family: Consolas, monospace;\n}',
            output:
              "Teks utama memakai Georgia; kalau tidak tersedia, browser mencoba Times New Roman, lalu font serif bawaan sistem.",
            note: "Nama berspasi wajib dikutip. Kategori generik (serif/sans-serif/monospace) selalu jadi elemen terakhir.",
          },
          instruction:
            'Beri `body` font stack: `"Helvetica Neue", Arial, sans-serif`.',
          starterCode: "body {\n  color: #1e293b;\n}\n",
          language: "css",
          previewHtml:
            "<h2>Contoh Judul</h2>\n<p>Perhatikan bentuk hurufnya berubah.</p>",
          tests: [
            {
              pattern:
                'font-family\\s*:\\s*[\'"]Helvetica Neue[\'"]\\s*,\\s*Arial\\s*,\\s*sans-serif',
              message:
                'Atur font-family: "Helvetica Neue", Arial, sans-serif; — jangan lupa kutip untuk nama berspasi dan generic family di akhir.',
            },
          ],
          solution:
            'body {\n  color: #1e293b;\n  font-family: "Helvetica Neue", Arial, sans-serif;\n}',
        },
        {
          kind: "step",
          id: "css-6-2",
          title: "line-height tanpa satuan",
          explanation:
            "`line-height` mengatur jarak antar baris, dan ia faktor terbesar dalam kenyamanan membaca — lebih berpengaruh daripada pilihan font itu sendiri. Praktik terbaiknya: **tulis tanpa satuan** (`1.6`), yang berarti 1,6 kali ukuran font elemen itu sendiri. Kalau kamu menulis `line-height: 24px`, nilai tetap itu diwarisi mentah oleh elemen anak yang ukuran fontnya berbeda, sehingga judul berukuran 32px tetap mendapat jarak baris 24px dan barisnya saling bertumpuk. Patokan nilainya: 1.5–1.7 untuk teks bacaan panjang, dan 1.1–1.2 untuk judul besar yang justru terlihat lebih rapi bila rapat. Satu pasangannya yang sama pentingnya adalah panjang baris: baris yang terlalu lebar membuat mata sulit menemukan awal baris berikutnya, dan `max-width: 65ch` membatasinya berdasarkan jumlah karakter — bukan piksel — sehingga tetap nyaman pada ukuran font apa pun.",
          example: {
            code: "/* BAIK: multiplier, ikut ukuran font masing-masing */\n.isi { line-height: 1.5; }\n\n/* BERISIKO: nilai tetap, diwarisi mentah */\n.isi-buruk { line-height: 20px; }",
            output:
              "Pada .isi-buruk, anak dengan font 40px tetap mendapat jarak baris 20px sehingga barisnya bertumpuk.",
            note: "Untuk teks bacaan panjang, 1.5–1.7 nyaman. Untuk judul besar, 1.1–1.2 lebih rapat dan pas.",
          },
          instruction:
            "Beri `.artikel` `line-height: 1.6` dan `max-width: 65ch` (lebar baca ideal ±65 karakter).",
          starterCode: ".artikel {\n  font-size: 1rem;\n}\n",
          language: "css",
          previewHtml:
            "<div class='artikel'><p>Panjang baris yang terlalu lebar membuat mata sulit menemukan awal baris berikutnya. Unit ch membatasi lebar berdasarkan jumlah karakter, bukan piksel, sehingga tetap nyaman dibaca pada ukuran font apa pun.</p></div>",
          tests: [
            {
              pattern: "\\.artikel\\s*\\{[^}]*line-height\\s*:\\s*1\\.6\\s*;",
              message:
                "Atur line-height: 1.6; (tanpa satuan px atau em).",
            },
            {
              pattern: "\\.artikel\\s*\\{[^}]*max-width\\s*:\\s*65ch",
              message: "Atur max-width: 65ch;",
            },
          ],
          solution:
            ".artikel {\n  font-size: 1rem;\n  line-height: 1.6;\n  max-width: 65ch;\n}",
        },
        {
          kind: "step",
          id: "css-6-3",
          title: "Memotong teks yang terlalu panjang",
          explanation:
            "Untuk **satu baris**, kombinasi tiga properti wajib bersama: `white-space: nowrap` (jangan turun baris), `overflow: hidden` (sembunyikan luapan), `text-overflow: ellipsis` (beri tanda …). Menghilangkan salah satunya membuat efeknya gagal — inilah kenapa orang sering bilang 'ellipsis saya tidak muncul'. Untuk memotong pada beberapa baris sekaligus, pakai `-webkit-line-clamp` bersama `display: -webkit-box`, yang kini didukung semua browser besar.",
          example: {
            code: ".nama-file {\n  width: 150px;\n  white-space: nowrap;      /* 1. jangan turun baris */\n  overflow: hidden;         /* 2. sembunyikan luapan */\n  text-overflow: ellipsis;  /* 3. beri tanda …       */\n}",
            output:
              "Teks 'laporan-keuangan-tahunan-2026.pdf' tampil menjadi 'laporan-keuangan-t…'.",
            note: "Ketiganya satu paket. Hilangkan satu saja, efeknya batal total — bukan sebagian.",
          },
          instruction:
            "Buat `.judul` terpotong dalam satu baris dengan `white-space: nowrap`, `overflow: hidden`, dan `text-overflow: ellipsis`.",
          starterCode:
            ".judul {\n  width: 200px;\n  border: 1px solid #cbd5e1;\n  padding: 6px;\n}\n",
          language: "css",
          previewHtml:
            "<div class='judul'>Judul artikel yang sangat panjang sekali sampai tidak muat</div>",
          tests: [
            {
              pattern: "\\.judul\\s*\\{[^}]*white-space\\s*:\\s*nowrap",
              message: "Tambahkan white-space: nowrap;",
            },
            {
              pattern: "\\.judul\\s*\\{[^}]*overflow\\s*:\\s*hidden",
              message: "Tambahkan overflow: hidden;",
            },
            {
              pattern: "\\.judul\\s*\\{[^}]*text-overflow\\s*:\\s*ellipsis",
              message:
                "Tambahkan text-overflow: ellipsis; — ketiganya harus ada bersamaan.",
            },
          ],
          solution:
            ".judul {\n  width: 200px;\n  border: 1px solid #cbd5e1;\n  padding: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
        },
        {
          kind: "step",
          id: "css-6-4",
          title: "box-shadow yang tidak norak",
          explanation:
            "Sintaksnya: `box-shadow: x y blur warna`. Kunci bayangan yang terlihat profesional: **offset kecil, blur agak besar, warna sangat transparan**. Bayangan hitam pekat (`box-shadow: 5px 5px black`) langsung terasa amatir. Gunakan `rgba(0,0,0,0.1)` — cahaya nyata menghasilkan bayangan lembut, bukan blok hitam.",
          example: {
            code: "/* NORAK: pekat dan kaku */\n.buruk { box-shadow: 6px 6px 0 black; }\n\n/* PROFESIONAL: offset kecil, blur besar, sangat transparan */\n.baik  { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); }",
            output:
              ".buruk terlihat seperti stiker tahun 2005; .baik terlihat seperti kartu yang sedikit terangkat dari kertas.",
            note: "Pola: box-shadow: x y blur rgba(0,0,0,opacity). Nilai opacity 0.05–0.15 biasanya cukup.",
          },
          instruction:
            "Beri `.kartu` bayangan halus: `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)` dan `border-radius: 8px`.",
          starterCode:
            ".kartu {\n  background: white;\n  padding: 20px;\n  width: 200px;\n}\nbody { background: #f1f5f9; }\n",
          language: "css",
          previewHtml: "<div class='kartu'>Kartu dengan bayangan</div>",
          tests: [
            {
              pattern:
                "box-shadow\\s*:\\s*0\\s+4px\\s+12px\\s+rgba\\(\\s*0\\s*,\\s*0\\s*,\\s*0\\s*,\\s*0?\\.1\\s*\\)",
              message:
                "Atur box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);",
            },
            {
              pattern: "\\.kartu\\s*\\{[^}]*border-radius\\s*:\\s*8px",
              message: "Tambahkan border-radius: 8px;",
            },
          ],
          solution:
            ".kartu {\n  background: white;\n  padding: 20px;\n  width: 200px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\nbody { background: #f1f5f9; }",
        },
        {
          kind: "step",
          id: "css-6-5",
          title: "transition: animasi paling berguna",
          explanation:
            "`transition` membuat perubahan nilai berlangsung mulus, bukan patah. Aturan penting: **pasang transition di keadaan normal, bukan di `:hover`** — kalau dipasang di hover, animasinya mulus saat masuk tapi patah saat keluar. Sebutkan properti spesifik (`background-color`) daripada `all` agar performanya terjaga. Pilih durasi yang wajar pula: 150–300 ms terasa responsif, sedangkan di atas 500 ms mulai terasa lambat bagi pengguna.",
          example: {
            code: ".link {\n  color: gray;\n  transition: color 0.2s ease;  /* ← di keadaan NORMAL */\n}\n\n.link:hover {\n  color: black;                 /* ← hanya perubahan nilainya */\n}",
            output:
              "Warna berubah mulus saat kursor masuk DAN saat kursor keluar.",
            note: "Kalau transition ditulis di dalam :hover, perubahan masuk mulus tapi keluarnya patah seketika.",
          },
          instruction:
            "Beri `.tombol` `transition: background-color 0.3s ease`, lalu buat `.tombol:hover` dengan `background-color: #1e40af`.",
          starterCode:
            ".tombol {\n  background-color: #3b82f6;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  cursor: pointer;\n}\n\n",
          language: "css",
          previewHtml: "<button class='tombol'>Arahkan kursor ke sini</button>",
          tests: [
            {
              pattern:
                "\\.tombol\\s*\\{[^}]*transition\\s*:\\s*background-color\\s+0\\.3s\\s+ease",
              message:
                "Tambahkan transition: background-color 0.3s ease; di dalam .tombol (bukan di :hover).",
            },
            {
              pattern:
                "\\.tombol:hover\\s*\\{[^}]*background-color\\s*:\\s*#1e40af",
              message:
                "Buat aturan .tombol:hover { background-color: #1e40af; }",
            },
          ],
          solution:
            ".tombol {\n  background-color: #3b82f6;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.tombol:hover {\n  background-color: #1e40af;\n}",
        },
        {
          kind: "step",
          id: "css-6-6",
          title: "transform: menggerakkan tanpa mengganggu layout",
          explanation:
            "`transform` mengubah tampilan elemen (geser, perbesar, putar) **tanpa memicu ulang perhitungan layout** — karena itu jauh lebih hemat daripada menganimasikan `width`, `top`, atau `margin`. Efek 'kartu terangkat saat disentuh' dibuat dengan `translateY(-4px)` plus bayangan. Karena transform tidak mengubah ruang yang ditempati elemen, tetangganya tidak ikut bergeser — itulah alasan efek hover terasa halus tanpa layout melompat.",
          example: {
            code: "/* beberapa transform ditulis dalam SATU properti, dipisah spasi */\n.ikon:hover {\n  transform: rotate(15deg) scale(1.1);\n}\n\n/* SALAH: properti kedua menimpa yang pertama */\n.salah:hover {\n  transform: rotate(15deg);\n  transform: scale(1.1);   /* hanya ini yang berlaku */\n}",
            output:
              ".ikon berputar sekaligus membesar. Pada .salah, rotasinya hilang karena tertimpa.",
            note: "Satu elemen hanya boleh punya satu properti transform — gabungkan semua fungsinya di sana.",
          },
          instruction:
            "Buat `.kartu:hover` mengangkat kartu: `transform: translateY(-4px)` dan `scale(1.02)` — tulis keduanya dalam satu properti transform.",
          starterCode:
            ".kartu {\n  background: white;\n  padding: 20px;\n  width: 180px;\n  box-shadow: 0 2px 8px rgba(0,0,0,.1);\n  transition: transform 0.2s ease;\n}\nbody { background: #f1f5f9; }\n\n",
          language: "css",
          previewHtml: "<div class='kartu'>Arahkan kursor</div>",
          tests: [
            {
              pattern:
                "\\.kartu:hover\\s*\\{[^}]*transform\\s*:[^;}]*translateY\\(\\s*-4px\\s*\\)",
              message:
                "Di .kartu:hover, gunakan transform dengan translateY(-4px).",
            },
            {
              pattern:
                "\\.kartu:hover\\s*\\{[^}]*transform\\s*:[^;}]*scale\\(\\s*1\\.02\\s*\\)",
              message:
                "Tambahkan scale(1.02) di properti transform yang sama (dipisah spasi, bukan properti terpisah).",
            },
          ],
          solution:
            ".kartu {\n  background: white;\n  padding: 20px;\n  width: 180px;\n  box-shadow: 0 2px 8px rgba(0,0,0,.1);\n  transition: transform 0.2s ease;\n}\nbody { background: #f1f5f9; }\n\n.kartu:hover {\n  transform: translateY(-4px) scale(1.02);\n}",
        },
        {
          kind: "step",
          id: "css-6-7",
          title: "@keyframes dan prefers-reduced-motion",
          explanation:
            "`@keyframes` mendefinisikan tahapan animasi, lalu dipanggil dengan properti `animation`. Bagian yang sering dilupakan: sebagian orang mengalami mual atau pusing karena gerakan (vestibular disorder), dan sistem mereka menyalakan 'reduce motion'. Menghormatinya lewat `@media (prefers-reduced-motion: reduce)` adalah standar profesional, bukan opsional.",
          example: {
            code: "@keyframes geser {\n  from { transform: translateX(-20px); }\n  to   { transform: translateX(0);     }\n}\n\n.notif {\n  animation: geser 0.4s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .notif { animation: none; }\n}",
            output:
              "Notifikasi meluncur masuk dari kiri. Bagi pengguna yang mematikan animasi di sistemnya, ia langsung muncul tanpa gerakan.",
            note: "Pola: definisikan @keyframes (nama bebas), panggil lewat properti animation, lalu hormati preferensi pengguna.",
          },
          instruction:
            "Buat `@keyframes muncul` (dari `opacity: 0` ke `opacity: 1`), terapkan ke `.pesan` dengan `animation: muncul 0.5s ease`, lalu tambahkan `@media (prefers-reduced-motion: reduce)` yang mengatur `animation: none` pada `.pesan`.",
          starterCode:
            ".pesan {\n  background: #dcfce7;\n  padding: 16px;\n}\n\n",
          language: "css",
          previewHtml: "<div class='pesan'>Data berhasil disimpan</div>",
          tests: [
            {
              pattern:
                "@keyframes\\s+muncul\\s*\\{[\\s\\S]*opacity\\s*:\\s*0[\\s\\S]*opacity\\s*:\\s*1[\\s\\S]*\\}",
              message:
                "Buat @keyframes muncul dengan from { opacity: 0 } dan to { opacity: 1 }.",
            },
            {
              pattern:
                "\\.pesan\\s*\\{[^}]*animation\\s*:\\s*muncul\\s+0\\.5s\\s+ease",
              message: "Terapkan animation: muncul 0.5s ease; pada .pesan",
            },
            {
              pattern:
                "@media\\s*\\(\\s*prefers-reduced-motion\\s*:\\s*reduce\\s*\\)\\s*\\{[\\s\\S]*animation\\s*:\\s*none",
              message:
                "Tambahkan @media (prefers-reduced-motion: reduce) yang mengatur animation: none;",
            },
          ],
          solution:
            "@keyframes muncul {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.pesan {\n  background: #dcfce7;\n  padding: 16px;\n  animation: muncul 0.5s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .pesan {\n    animation: none;\n  }\n}",
        },
        {
          kind: "step",
          id: "css-6-8",
          title: "Gradient: linear, radial, dan conic",
          explanation:
            "Gradient adalah **nilai untuk properti `background`**, bukan untuk `color` — itu hal pertama yang perlu diluruskan, karena banyak orang mencoba `color: linear-gradient(...)` lalu bingung tidak terjadi apa-apa. Ada tiga bentuk yang dipakai sehari-hari: `linear-gradient()` berpindah warna dalam satu arah (`to right`, `to bottom right`, atau sudut seperti `135deg`), `radial-gradient()` menyebar dari sebuah titik sehingga cocok untuk sorotan cahaya, dan `conic-gradient()` berputar mengelilingi pusat sehingga sering dipakai membuat diagram donat tanpa gambar. Setiap warna boleh diberi posisi berhenti, misalnya `#22c55e 0 35%` berarti warna itu mengisi 35% pertama. Dua jebakan yang sering muncul: teks di atas gradient bisa kehilangan kontras di sebagian titik meski terlihat aman di titik lain, dan gradient antara dua warna yang jauh berbeda ronanya sering memunculkan pita abu-abu di tengah — perbaikannya dengan menyisipkan satu warna tengah atau memilih dua warna yang berdekatan.",
          example: {
            code:
              "/* linear: arah bisa kata atau sudut */\n" +
              ".header { background: linear-gradient(to right, #0ea5e9, #6366f1); }\n\n" +
              "/* radial: menyebar dari satu titik */\n" +
              ".sorot { background: radial-gradient(circle at 30% 30%, #fde68a, #f59e0b); }\n\n" +
              "/* conic: berputar — diagram donat tanpa gambar */\n" +
              ".donat {\n" +
              "  background: conic-gradient(#22c55e 0 35%, #e5e7eb 35% 100%);\n" +
              "  border-radius: 50%;\n" +
              "}",
            output:
              "Header bergradasi biru ke ungu dari kiri ke kanan, kotak sorot tampak seperti bola bercahaya di sudut kiri atas, dan lingkaran donat terisi hijau sebanyak 35 persen.",
            note: "Warna boleh lebih dari dua, dan tiap warna boleh diberi posisi: `linear-gradient(to right, red 0%, yellow 50%, green 100%)`.",
          },
          instruction:
            "Beri `.spanduk` latar bergradasi **mendatar dari kiri ke kanan** yang berpindah dari `#7c3aed` ke `#db2777`, lalu pastikan teks di atasnya tetap terbaca dengan memberinya warna putih.",
          starterCode:
            ".spanduk {\n" +
            "  padding: 32px 16px;\n" +
            "  font-size: 1.25rem;\n" +
            "  font-weight: bold;\n" +
            "}\n",
          language: "css",
          previewHtml: "<div class=\"spanduk\">Promo Akhir Tahun</div>",
          tests: [
            {
              pattern:
                "background(-image)?\\s*:\\s*linear-gradient\\(\\s*to\\s+right\\s*,\\s*#7c3aed\\s*,\\s*#db2777\\s*\\)",
              message:
                "Pakai `background: linear-gradient(to right, #7c3aed, #db2777);` — arah `to right` berarti berpindah warna dari kiri ke kanan.",
            },
            {
              pattern: "\\.spanduk\\s*\\{[^}]*color\\s*:\\s*(white|#fff|#ffffff)",
              message:
                "Beri teksnya `color: white;` agar kontrasnya tetap cukup di seluruh bentangan gradient.",
            },
          ],
          solution:
            ".spanduk {\n" +
            "  padding: 32px 16px;\n" +
            "  font-size: 1.25rem;\n" +
            "  font-weight: bold;\n" +
            "  background: linear-gradient(to right, #7c3aed, #db2777);\n" +
            "  color: white;\n" +
            "}",
        },
        {
          kind: "quiz",
          id: "css-6-kuis",
          title: "Kuis: Tipografi & Efek Visual",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kenapa line-height sebaiknya ditulis tanpa satuan (1.6) daripada dengan px (24px)?",
              choices: [
                "Karena px tidak valid untuk line-height",
                "Karena nilai tanpa satuan dihitung relatif terhadap font-size masing-masing elemen, sedangkan px diwarisi mentah dan bisa membuat teks besar bertumpuk",
                "Karena tanpa satuan lebih cepat dirender",
                "Tidak ada bedanya",
              ],
              answerIndex: 1,
              explanation:
                "Nilai tanpa satuan bersifat multiplier: setiap elemen menghitung 1.6 × font-size-nya sendiri. Nilai px diwarisi apa adanya, jadi anak dengan font 32px tetap mendapat line-height 24px dan barisnya bertumpuk.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Kode ini tidak menampilkan tanda … pada teks panjang. Apa yang kurang?",
              code: ".judul {\n  width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
              choices: [
                "white-space: nowrap",
                "display: block",
                "max-width bukan width",
                "line-height",
              ],
              answerIndex: 0,
              explanation:
                "Tanpa white-space: nowrap, teks turun ke baris berikutnya sehingga tidak pernah 'meluap' secara horizontal — ellipsis tidak punya alasan muncul. Ketiga properti (nowrap, overflow hidden, text-overflow) harus lengkap.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "transition dipasang di dalam .tombol:hover. Apa akibatnya?",
              choices: [
                "Tidak ada animasi sama sekali",
                "Animasi mulus saat kursor masuk, tapi patah saat kursor keluar",
                "Animasi jadi dua kali lebih lambat",
                "Sama saja dengan memasangnya di .tombol",
              ],
              answerIndex: 1,
              explanation:
                "Saat kursor keluar, aturan :hover (beserta transition-nya) tidak lagi berlaku, sehingga nilainya kembali seketika. Pasang transition di keadaan normal agar mulus di kedua arah.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kenapa menganimasikan transform: translateY lebih baik daripada menganimasikan margin-top?",
              choices: [
                "Karena transform lebih mudah ditulis",
                "Karena transform tidak memicu recalculate layout, sehingga jauh lebih hemat dan mulus",
                "Karena margin-top tidak bisa dianimasikan",
                "Karena transform bekerja di semua browser lama",
              ],
              answerIndex: 1,
              explanation:
                "Mengubah margin/width/top memaksa browser menghitung ulang layout seluruh halaman setiap frame (reflow). transform dan opacity bisa ditangani compositor — inilah dua properti yang paling aman dianimasikan.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Sebagian pengguna mematikan animasi di pengaturan sistem karena gerakan membuat mereka pusing. Media feature apa yang mendeteksi preferensi itu?",
              choices: ["prefers-reduced-motion", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-data"],
              answerIndex: 0,
              explanation:
                "@media (prefers-reduced-motion: reduce). Sebagian orang mengalami pusing atau mual akibat gerakan di layar. Menonaktifkan atau meredakan animasi untuk mereka adalah standar profesional dan sering diperiksa saat audit aksesibilitas.",
            },
          ],
        },
      ],
    },
    {
      slug: "css-modern",
      title: "CSS Modern",
      description:
        "Fitur yang sudah aman dipakai produksi dan bikin kode lebih bersih.",
      topics: [
        "Custom properties (variabel CSS) & theming",
        "Nesting native",
        ":has() — parent selector yang mengubah banyak pola",
        ":is() dan :where() untuk selector rapi",
        "@layer untuk mengatur cascade",
        "aspect-ratio, object-fit, dan logical properties",
        "Dark mode dengan prefers-color-scheme",
      ],
      items: [
        {
          kind: "materi",
          id: "css-7-m1",
          title: "CSS Modern: Fitur yang Mengubah Cara Menulis CSS",
          body:
            "# Pengertian\n\n" +
            "Beberapa tahun terakhir CSS mendapat tambahan yang menghapus kebutuhan pada banyak trik lama — dan yang penting, **semuanya sudah aman dipakai di produksi** karena didukung seluruh browser besar. Modul ini bukan daftar fitur eksotis; ini kosakata yang akan kamu temui di kode orang lain mulai sekarang.\n\n" +
            "## Custom Properties: Variabel yang Hidup di Browser\n\n" +
            "```css\n" +
            ":root {                      /* :root = elemen <html>, jadi berlaku global */\n" +
            "  --warna-utama: #2563eb;\n" +
            "  --radius: 8px;\n" +
            "}\n\n" +
            ".tombol { background: var(--warna-utama); border-radius: var(--radius); }\n" +
            ".kartu  { border: 1px solid var(--warna-utama); }\n" +
            "```\n\n" +
            "Bedanya dengan variabel Sass yang mungkin pernah kamu dengar: variabel Sass hilang saat dikompilasi, sedangkan custom property **tetap hidup di browser**. Konsekuensinya besar — nilainya bisa diganti saat halaman berjalan, diwarisi oleh elemen anak, dan dibaca JavaScript. Dari sifat itulah dark mode modern dibangun: komponen hanya memakai `var()`, dan yang diganti cuma nilai variabelnya.\n\n" +
            "Karena diwarisi, variabel yang dideklarasikan di sebuah komponen hanya berlaku untuk komponen itu dan turunannya — cara sederhana membuat tema lokal:\n\n" +
            "```css\n" +
            ".kartu-promo { --warna-utama: #dc2626; }   /* hanya di dalam kartu ini */\n" +
            "```\n\n" +
            "Sediakan nilai cadangan lewat argumen kedua: `var(--pad, 16px)` memakai 16px bila `--pad` belum ada. Ini membuat komponenmu tetap tampil benar walau pemakainya tidak menyetel apa pun.\n\n" +
            "## Nesting Native: Tanpa Sass\n\n" +
            "Menulis selector bersarang dulu hanya bisa dengan alat seperti Sass. Sekarang CSS mendukungnya langsung:\n\n" +
            "```css\n" +
            ".kartu {\n" +
            "  padding: 16px;\n\n" +
            "  & h3 { margin-block: 0; }        /* .kartu h3   */\n" +
            "  &:hover { border-color: #333; }  /* .kartu:hover */\n\n" +
            "  @media (min-width: 700px) {      /* media query pun boleh bersarang */\n" +
            "    padding: 24px;\n" +
            "  }\n" +
            "}\n" +
            "```\n\n" +
            "Tanda `&` berarti \"selector induknya\". Aturan penting: kalau kamu ingin menempelkannya langsung tanpa spasi — seperti pada `:hover` atau `.kartu.aktif` — tanda `&` **wajib** ditulis. Dan satu peringatan dari pengalaman era Sass: jangan bersarang lebih dari dua atau tiga tingkat. Selector yang dihasilkan jadi sangat spesifik dan sulit ditimpa, tepat masalah yang ingin kamu hindari.\n\n" +
            "## :has(), :is(), dan :where()\n\n" +
            "| Selector | Artinya | Specificity |\n" +
            "|---|---|---|\n" +
            "| `.kartu:has(img)` | kartu **yang di dalamnya ada** gambar | mengikuti argumen terkuat |\n" +
            "| `:is(h1, h2, h3)` | salah satu dari daftar itu | mengikuti argumen terkuat |\n" +
            "| `:where(h1, h2, h3)` | sama seperti `:is()` | **selalu nol** |\n\n" +
            "`:has()` adalah tambahan yang paling mengubah kebiasaan, karena selama bertahun-tahun CSS tidak bisa memilih elemen berdasarkan isinya. Sekarang pola seperti \"beri tanda merah pada form yang punya input tidak valid\" atau \"kartu tanpa gambar tampil lebih rapat\" bisa dikerjakan tanpa satu baris JavaScript.\n\n" +
            "Perbedaan specificity `:is()` dan `:where()` bukan detail sepele: pakai `:where()` untuk gaya dasar yang memang ingin mudah ditimpa nanti, dan `:is()` saat kamu memang butuh kekuatan selectornya.\n\n" +
            "## @layer: Mengatur Siapa Menang Tanpa Perang Specificity\n\n" +
            "```css\n" +
            "@layer dasar, komponen, utilitas;   /* urutan prioritas, dari lemah ke kuat */\n\n" +
            "@layer dasar     { a { color: blue; } }\n" +
            "@layer komponen  { .tautan-kartu { color: black; } }\n" +
            "@layer utilitas  { .teks-merah { color: red; } }\n" +
            "```\n\n" +
            "Aturan di layer yang disebut lebih akhir **menang** atas layer sebelumnya, **berapa pun specificity-nya**. Ini menyelesaikan masalah lama: satu aturan `#id` dari kode warisan yang selalu mengalahkan kelas utilitasmu. Dengan `@layer` kamu menentukan urutan prioritas secara sengaja, bukan lewat perlombaan menambah selector.\n\n" +
            "## aspect-ratio, object-fit, dan Logical Properties\n\n" +
            "```css\n" +
            ".thumb {\n" +
            "  aspect-ratio: 16 / 9;   /* jaga perbandingan sisi tanpa trik padding lama */\n" +
            "  object-fit: cover;      /* isi penuh, kelebihan dipotong (bukan gepeng) */\n" +
            "}\n\n" +
            "/* logical properties: mengikuti arah tulisan, bukan arah layar */\n" +
            ".kotak {\n" +
            "  margin-inline: auto;      /* kiri & kanan pada tulisan kiri-ke-kanan */\n" +
            "  padding-block: 12px;      /* atas & bawah */\n" +
            "  border-inline-start: 2px solid;  /* sisi AWAL tulisan, bukan selalu kiri */\n" +
            "}\n" +
            "```\n\n" +
            "Logical properties penting untuk satu alasan konkret: pada bahasa yang ditulis dari kanan ke kiri seperti Arab, `margin-left` selalu berarti kiri — sedangkan `margin-inline-start` otomatis berpindah ke kanan. Kalau produkmu suatu hari diterjemahkan, kode yang memakai properti logis tidak perlu ditulis ulang. Sebagai bonus, `margin-inline: auto` lebih pendek daripada `margin: 0 auto` dan tidak menyentuh margin atas-bawah.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Custom property itu seperti **panel saklar lampu di satu tempat**, bukan saklar terpisah di setiap ruangan. Mengubah suasana seluruh rumah cukup dari panel itu — dan itu persisnya cara dark mode modern bekerja. Sedangkan `@layer` seperti **urutan wewenang yang disepakati lebih dulu**: begitu semua pihak tahu siapa yang berhak memutuskan di akhir, tidak ada lagi yang perlu berteriak lebih keras.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Lupa dua tanda hubung.** Deklarasi wajib `--nama`, pemakaian wajib `var(--nama)`.\n" +
            "2. **Bersarang terlalu dalam.** Tiga tingkat sudah terlalu banyak; selectornya jadi sulit ditimpa.\n" +
            "3. **Lupa `&` saat menempelkan selector.** `:hover { }` bersarang tanpa `&` tidak berarti apa yang kamu kira.\n" +
            "4. **Menyangka `:is()` dan `:where()` identik.** Specificity-nya berbeda, dan itu justru gunanya.\n" +
            "5. **`object-fit` tanpa ukuran.** Ia baru bermakna kalau elemennya punya ukuran atau `aspect-ratio`.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** custom property adalah dasar hampir semua sistem tema dan design token di proyek modern — termasuk cara Tailwind v4 menyimpan warnanya. `:has()` mulai sering muncul di kode baru, dan `@layer` menjadi jawaban ketika sebuah codebase lama sudah dipenuhi `!important`. Mengenali keempatnya membuatmu bisa membaca kode tahun ini, bukan kode lima tahun lalu.",
        },
        {
          kind: "step",
          id: "css-7-1",
          title: "Custom properties (variabel CSS)",
          explanation:
            "Variabel CSS dideklarasikan dengan dua tanda hubung dan dipakai lewat `var()`. Biasanya ditaruh di `:root` agar berlaku global. Bedanya dengan variabel Sass: ini **hidup di browser**, bisa berubah saat runtime dan diwarisi oleh anak — dasar dari theming dan dark mode modern. Karena sifatnya diwarisi, variabel yang dideklarasikan di sebuah komponen hanya berlaku untuk komponen itu beserta turunannya — cara sederhana membuat tema lokal.",
          example: {
            code: ":root {\n  --biru: #0284c7;\n  --radius: 6px;\n}\n\n.tombol { background: var(--biru); border-radius: var(--radius); }\n.tautan { color: var(--biru); }",
            output:
              "Tombol dan tautan memakai warna yang sama. Mengubah --biru sekali otomatis mengubah keduanya.",
            note: "Deklarasi WAJIB pakai dua tanda hubung (--nama), pemakaian WAJIB lewat var(--nama).",
          },
          instruction:
            "Deklarasikan `--warna-utama: #2563eb` di `:root`, lalu pakai `var(--warna-utama)` sebagai `background` pada `.tombol`.",
          starterCode:
            ".tombol {\n  color: white;\n  padding: 12px 20px;\n  border: none;\n}\n\n",
          language: "css",
          previewHtml: "<button class='tombol'>Simpan</button>",
          tests: [
            {
              pattern:
                ":root\\s*\\{[^}]*--warna-utama\\s*:\\s*#2563eb",
              message:
                "Deklarasikan --warna-utama: #2563eb; di dalam :root { }",
            },
            {
              pattern:
                "\\.tombol\\s*\\{[^}]*background(-color)?\\s*:\\s*var\\(\\s*--warna-utama\\s*\\)",
              message:
                "Gunakan background: var(--warna-utama); pada .tombol",
            },
          ],
          solution:
            ":root {\n  --warna-utama: #2563eb;\n}\n\n.tombol {\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  background: var(--warna-utama);\n}",
        },
        {
          kind: "step",
          id: "css-7-2",
          title: "Nilai fallback pada var()",
          explanation:
            "`var(--nama, nilaiCadangan)` memakai nilai cadangan jika variabelnya belum terdefinisi. Ini penting saat membangun komponen yang bisa dikustomisasi: komponenmu tetap tampil benar walau pengguna tidak menyetel variabelnya. Nilai cadangannya boleh berupa variabel lain, misalnya `var(--pad, var(--pad-dasar, 8px))`, sehingga kamu bisa menyusun rantai prioritas.",
          example: {
            code: "/* --gap belum didefinisikan, jadi 8px yang dipakai */\n.daftar { gap: var(--gap, 8px); }\n\n/* pengguna komponen bisa menimpanya kapan saja */\n.daftar-rapat { --gap: 2px; }",
            output:
              ".daftar berjarak 8px (dari fallback), sedangkan .daftar-rapat berjarak 2px karena variabelnya disetel.",
            note: "Pola ini membuat komponenmu punya default yang aman tapi tetap bisa dikustomisasi dari luar.",
          },
          instruction:
            "Pada `.kartu`, atur `padding` menjadi `var(--pad, 16px)` — variabel `--pad` sengaja belum dideklarasikan, jadi fallback-nya yang berlaku.",
          starterCode: ".kartu {\n  background: #e0e7ff;\n}\n",
          language: "css",
          previewHtml: "<div class='kartu'>Padding dari fallback</div>",
          tests: [
            {
              pattern:
                "\\.kartu\\s*\\{[^}]*padding\\s*:\\s*var\\(\\s*--pad\\s*,\\s*16px\\s*\\)",
              message: "Atur padding: var(--pad, 16px); pada .kartu",
            },
          ],
          solution:
            ".kartu {\n  background: #e0e7ff;\n  padding: var(--pad, 16px);\n}",
        },
        {
          kind: "step",
          id: "css-7-3",
          title: ":has() — selector induk yang lama ditunggu",
          explanation:
            "Selama bertahun-tahun CSS hanya bisa memilih elemen berdasarkan dirinya sendiri atau leluhurnya, tidak berdasarkan **isinya** — dan itu sebabnya banyak pola sederhana dulu harus dikerjakan JavaScript. `:has()` menutup celah itu: `.kartu:has(img)` berarti \"kartu yang di dalamnya ada gambar\", dan yang diberi gaya adalah kartunya, bukan gambarnya. Karena itu ia sering disebut *parent selector*, meski sebenarnya lebih luas dari itu: ia bisa memeriksa keberadaan anak, saudara, maupun keadaan seperti `form:has(input:invalid)` untuk menandai form yang isinya belum sah. Dua hal yang perlu kamu ingat saat memakainya: specificity `:has()` mengikuti argumen terkuat di dalamnya, dan ia tidak bisa disarangkan di dalam `:has()` lain. Fitur ini sudah didukung semua browser besar, jadi aman dipakai di produksi hari ini.",
          example: {
            code: "/* form yang MENGANDUNG input invalid */\nform:has(input:invalid) {\n  border: 2px solid red;\n}\n\n/* label yang punya checkbox tercentang */\nlabel:has(input:checked) {\n  font-weight: bold;\n}",
            output:
              "Form otomatis bergaris merah begitu ada satu input yang tidak valid — tanpa JavaScript sama sekali.",
            note: "Yang diberi gaya adalah elemen di LUAR (form/label), berdasarkan kondisi isi di dalamnya.",
          },
          instruction:
            "Beri `border: 3px solid #16a34a` pada kartu yang memiliki gambar di dalamnya, memakai `.kartu:has(img)`.",
          starterCode:
            ".kartu {\n  border: 3px solid #cbd5e1;\n  padding: 12px;\n  margin-bottom: 8px;\n}\nimg { width: 60px; }\n\n",
          language: "css",
          previewHtml:
            "<div class='kartu'>Kartu tanpa gambar</div>\n<div class='kartu'>Kartu dengan gambar<br><img src='https://picsum.photos/60' alt=''></div>",
          tests: [
            {
              pattern:
                "\\.kartu:has\\(\\s*img\\s*\\)\\s*\\{[^}]*border\\s*:\\s*3px\\s+solid\\s+#16a34a",
              message:
                "Buat aturan .kartu:has(img) { border: 3px solid #16a34a; }",
            },
          ],
          solution:
            ".kartu {\n  border: 3px solid #cbd5e1;\n  padding: 12px;\n  margin-bottom: 8px;\n}\nimg { width: 60px; }\n\n.kartu:has(img) {\n  border: 3px solid #16a34a;\n}",
        },
        {
          kind: "step",
          id: "css-7-4",
          title: "aspect-ratio dan object-fit",
          explanation:
            "`aspect-ratio: 16 / 9` menjaga perbandingan sisi tanpa trik padding lama. Pasangannya `object-fit: cover` membuat gambar mengisi kotak **tanpa gepeng** — bagian yang berlebih dipotong, bukan diregangkan. Kombinasi ini adalah cara baku menampilkan thumbnail dengan ukuran seragam. Pasangkan dengan `object-position` bila bagian penting gambar ikut terpotong, misalnya wajah pada foto profil.",
          example: {
            code: ".avatar {\n  width: 64px;\n  aspect-ratio: 1 / 1;    /* persegi sempurna */\n  object-fit: cover;      /* isi penuh, kelebihan dipotong */\n  border-radius: 50%;\n}",
            output:
              "Foto profil apa pun bentuk aslinya tampil sebagai lingkaran rapi tanpa gepeng.",
            note: "object-fit: cover memotong kelebihan, contain menampilkan seluruh gambar tapi menyisakan ruang kosong.",
          },
          instruction:
            "Beri `.thumb` `aspect-ratio: 16 / 9`, `width: 240px`, dan `object-fit: cover`.",
          starterCode: ".thumb {\n  border: 2px solid #334155;\n}\n",
          language: "css",
          previewHtml:
            "<img class='thumb' src='https://picsum.photos/600/200' alt='Thumbnail'>",
          tests: [
            {
              pattern:
                "\\.thumb\\s*\\{[^}]*aspect-ratio\\s*:\\s*16\\s*/\\s*9",
              message: "Atur aspect-ratio: 16 / 9;",
            },
            {
              pattern: "\\.thumb\\s*\\{[^}]*width\\s*:\\s*240px",
              message: "Atur width: 240px;",
            },
            {
              pattern: "\\.thumb\\s*\\{[^}]*object-fit\\s*:\\s*cover",
              message:
                "Tambahkan object-fit: cover; agar gambar terpotong rapi, bukan gepeng.",
            },
          ],
          solution:
            ".thumb {\n  border: 2px solid #334155;\n  aspect-ratio: 16 / 9;\n  width: 240px;\n  object-fit: cover;\n}",
        },
        {
          kind: "step",
          id: "css-7-5",
          title: "Dark mode dengan variabel",
          explanation:
            "Inilah kenapa variabel CSS begitu berharga: definisikan warna sekali, lalu **ganti nilainya saja** di dalam `@media (prefers-color-scheme: dark)`. Seluruh halaman ikut berubah tanpa menulis ulang satu pun aturan komponen. Pendekatan ini yang dipakai hampir semua situs modern. Sediakan juga pilihan manual di antarmuka bila memungkinkan, karena sebagian pengguna ingin memaksa satu tema tanpa mengubah pengaturan sistemnya.",
          example: {
            code: ":root {\n  --kartu: #ffffff;\n  --teks: #111111;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --kartu: #1f2937;\n    --teks: #f9fafb;\n  }\n}\n\n.kartu { background: var(--kartu); color: var(--teks); }",
            output:
              "Seluruh komponen ikut berubah saat pengguna menyalakan mode gelap — tanpa satu pun aturan komponen ditulis dua kali.",
            note: "Kunci pendekatan ini: komponen hanya memakai var(), dan media query hanya mengganti NILAI variabelnya. Catatan preview: perubahan baru terlihat kalau tema perangkatmu memang sedang gelap — kalau sistemmu bertema terang, panel akan tampak tidak berubah meski kodemu sudah benar, dan tesnya tetap lulus.",
          },
          instruction:
            "Tambahkan `@media (prefers-color-scheme: dark)` yang mengubah `:root` menjadi `--bg: #0f172a` dan `--fg: #f8fafc`.",
          starterCode:
            ":root {\n  --bg: #ffffff;\n  --fg: #0f172a;\n}\n\nbody {\n  background: var(--bg);\n  color: var(--fg);\n  padding: 20px;\n}\n\n",
          language: "css",
          previewHtml:
            "<h3>Judul</h3>\n<p>Ubah tema sistemmu untuk melihat perubahan.</p>",
          tests: [
            {
              pattern:
                "@media\\s*\\(\\s*prefers-color-scheme\\s*:\\s*dark\\s*\\)\\s*\\{[\\s\\S]*--bg\\s*:\\s*#0f172a",
              message:
                "Di dalam @media (prefers-color-scheme: dark), atur --bg: #0f172a;",
            },
            {
              pattern:
                "@media\\s*\\(\\s*prefers-color-scheme\\s*:\\s*dark\\s*\\)\\s*\\{[\\s\\S]*--fg\\s*:\\s*#f8fafc",
              message: "Atur juga --fg: #f8fafc; di dalam media query yang sama.",
            },
          ],
          solution:
            ":root {\n  --bg: #ffffff;\n  --fg: #0f172a;\n}\n\nbody {\n  background: var(--bg);\n  color: var(--fg);\n  padding: 20px;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #0f172a;\n    --fg: #f8fafc;\n  }\n}",
        },
        {
          kind: "step",
          id: "css-7-6",
          title: ":is() untuk selector yang rapi",
          explanation:
            "`:is()` meringkas selector panjang: `:is(h1, h2, h3) { margin-block: 0.5em }` menggantikan tiga aturan terpisah. Catatan penting untuk debugging: specificity `:is()` mengikuti argumen **terkuat** di dalamnya, sedangkan `:where()` yang mirip selalu bernilai **nol** — pakai `:where()` untuk gaya dasar yang mudah ditimpa. `:is()` juga memangkas selector panjang seperti `.artikel h1, .artikel h2, .artikel h3` menjadi satu baris yang jauh lebih mudah dirawat.",
          example: {
            code: "/* panjang dan berulang */\n.menu a, .menu button, .menu span { padding: 4px; }\n\n/* ringkas, sama artinya */\n.menu :is(a, button, span) { padding: 4px; }",
            output: "Ketiga jenis elemen di dalam .menu mendapat padding yang sama.",
            note: "Kalau ingin selector yang mudah ditimpa nanti, pakai :where() — specificity-nya nol.",
          },
          instruction:
            "Gunakan `:is(h1, h2, h3)` untuk memberi `color: #1d4ed8` pada ketiga heading sekaligus.",
          starterCode: "",
          language: "css",
          previewHtml: "<h1>H1</h1>\n<h2>H2</h2>\n<h3>H3</h3>\n<p>Paragraf tetap hitam.</p>",
          tests: [
            {
              pattern: ":is\\(\\s*h1\\s*,\\s*h2\\s*,\\s*h3\\s*\\)",
              message:
                "Beberapa selector yang berbagi aturan yang sama bisa dipadatkan dengan pseudo-class `:is(...)`, berisi daftar selector dipisah koma. Catatan penting soal specificity: `:is()` mengambil nilai specificity dari selector TERKUAT di dalamnya — beda dari `:where()` yang selalu bernilai nol.",
            },
            {
              pattern: "color\\s*:\\s*#1d4ed8",
              message:
                "Isi aturannya dengan properti warna teks beserta nilai heksadesimal yang diminta, diakhiri titik koma.",
            },
          ],
          solution: ":is(h1, h2, h3) {\n  color: #1d4ed8;\n}",
        },
        {
          kind: "step",
          id: "css-7-7",
          title: "Nesting Native: Menulis Bersarang Tanpa Sass",
          explanation:
            "Menulis selector bersarang dulu hanya bisa dengan alat tambahan seperti Sass; sekarang CSS mendukungnya sendiri di semua browser besar. Manfaatnya nyata: seluruh aturan yang berhubungan dengan satu komponen berkumpul di satu blok, sehingga kamu tidak perlu mengulang `.kartu` di setiap barisnya. Tanda `&` berarti \"selector induknya\", dan **wajib** ditulis kalau kamu ingin menempelkannya tanpa spasi — `&:hover` menghasilkan `.kartu:hover`, sedangkan menulis `:hover` saja di dalam blok berarti `.kartu :hover`, yaitu elemen mana pun di dalamnya yang sedang disentuh kursor. Untuk selector keturunan biasa, `&` justru boleh dihilangkan: `h3 { ... }` di dalam blok `.kartu` sudah berarti `.kartu h3`. Media query pun boleh bersarang di dalam blok komponen, dan itu membuat penyesuaian responsif tinggal di sebelah aturan yang diubahnya. Satu pelajaran dari pengalaman era Sass yang perlu kamu bawa: **jangan bersarang lebih dari dua atau tiga tingkat**, karena selector yang dihasilkan menjadi sangat spesifik dan sulit ditimpa — tepat masalah yang ingin kamu hindari.",
          example: {
            code:
              ".menu {\n" +
              "  display: flex;\n" +
              "  gap: 12px;\n\n" +
              "  a {                 /* = .menu a  (tanpa & pun sudah keturunan) */\n" +
              "    color: #334155;\n" +
              "  }\n\n" +
              "  &:hover {           /* = .menu:hover  — & WAJIB agar menempel */\n" +
              "    background: #f1f5f9;\n" +
              "  }\n\n" +
              "  @media (min-width: 700px) {\n" +
              "    gap: 24px;        /* penyesuaian responsif di dalam blok yang sama */\n" +
              "  }\n" +
              "}",
            output:
              "Hasilnya identik dengan menulis empat aturan terpisah, tapi seluruh gaya milik .menu berkumpul di satu tempat sehingga lebih mudah dibaca dan dipindahkan.",
            note: "Tanpa `&`, `:hover { }` bersarang berarti `.menu :hover` — elemen di dalamnya, bukan menunya sendiri. Perbedaan satu karakter yang mengubah artinya.",
          },
          instruction:
            "Tulis ulang gaya kartu memakai nesting: satu blok `.kartu` yang di dalamnya memuat aturan untuk `h3` keturunannya (`color: #1e293b`) dan aturan untuk keadaan hover kartunya sendiri (`background: #eef2ff`). Perhatikan bahwa hover harus menempel pada kartunya, bukan pada elemen di dalamnya.",
          starterCode:
            ".kartu {\n" +
            "  border: 1px solid #cbd5e1;\n" +
            "  padding: 16px;\n" +
            "}\n",
          language: "css",
          previewHtml:
            "<div class=\"kartu\">\n  <h3>Judul Kartu</h3>\n  <p>Arahkan kursor ke kartu ini.</p>\n</div>",
          tests: [
            {
              pattern:
                "\\.kartu\\s*\\{[\\s\\S]*&?\\s*h3\\s*\\{[^}]*color\\s*:\\s*#1e293b",
              message:
                "Di dalam blok `.kartu`, tulis aturan bersarang untuk `h3` berisi `color: #1e293b;` (boleh dengan atau tanpa `&`, karena keduanya berarti keturunan).",
            },
            {
              pattern:
                "\\.kartu\\s*\\{[\\s\\S]*&:hover\\s*\\{[^}]*background\\s*:\\s*#eef2ff",
              message:
                "Untuk keadaan hover kartunya sendiri, tanda `&` wajib: `&:hover { background: #eef2ff; }`. Tanpa `&`, artinya berubah menjadi elemen di dalam kartu.",
            },
          ],
          solution:
            ".kartu {\n" +
            "  border: 1px solid #cbd5e1;\n" +
            "  padding: 16px;\n\n" +
            "  h3 {\n" +
            "    color: #1e293b;\n" +
            "  }\n\n" +
            "  &:hover {\n" +
            "    background: #eef2ff;\n" +
            "  }\n" +
            "}",
        },
        {
          kind: "quiz",
          id: "css-7-kuis",
          title: "Kuis: CSS Modern",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Apa keunggulan custom property CSS dibanding variabel Sass?",
              choices: [
                "Lebih cepat dikompilasi",
                "Hidup di browser: bisa berubah saat runtime, diwarisi anak, dan bisa diubah lewat JavaScript",
                "Sintaksnya lebih pendek",
                "Didukung browser lama",
              ],
              answerIndex: 1,
              explanation:
                "Variabel Sass hilang setelah kompilasi menjadi nilai statis. Custom property CSS tetap ada di browser, mengikuti cascade dan inheritance, serta bisa diubah lewat media query atau JavaScript — inilah yang memungkinkan dark mode dan theming dinamis.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa yang dipilih oleh selector .kartu:has(img)?",
              choices: [
                "Gambar yang ada di dalam kartu",
                "Elemen .kartu yang di dalamnya terdapat gambar",
                "Kartu yang berada di dalam gambar",
                "Kartu yang tidak punya gambar",
              ],
              answerIndex: 1,
              explanation:
                "Yang terpilih tetap .kartu (elemen induknya), dengan syarat ia mengandung img. Ini yang membuat :has() disebut 'parent selector' — kemampuan yang sebelumnya hanya bisa dicapai dengan JavaScript.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Gambar landscape dipasang di kotak persegi dan tampil gepeng. Properti apa yang memperbaikinya?",
              choices: [
                "object-fit: cover",
                "overflow: hidden",
                "aspect-ratio: auto",
                "max-width: 100%",
              ],
              answerIndex: 0,
              explanation:
                "object-fit: cover membuat gambar mengisi kotak sambil mempertahankan rasio aslinya — kelebihannya dipotong. Alternatifnya contain (seluruh gambar terlihat, ada ruang kosong). Tanpa keduanya, gambar diregangkan mengikuti kotak.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Apa perbedaan penting :is() dan :where()?",
              choices: [
                "Tidak ada, hanya alias",
                ":is() mengambil specificity argumen terkuat, sedangkan :where() specificity-nya selalu nol",
                ":where() hanya untuk media query",
                ":is() sudah usang",
              ],
              answerIndex: 1,
              explanation:
                "Keduanya meringkas daftar selector, tapi :where() tidak menambah specificity sama sekali sehingga sangat mudah ditimpa — ideal untuk reset/gaya dasar. :is() mewarisi specificity tertinggi dari argumennya, yang bisa mengejutkan saat debugging.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kamu ingin situsmu otomatis gelap kalau sistem pengguna memakai tema gelap. Media feature apa yang kamu pakai?",
              choices: ["prefers-color-scheme", "prefers-reduced-motion", "color-theme", "theme-mode"],
              answerIndex: 0,
              explanation:
                "@media (prefers-color-scheme: dark). Dikombinasikan dengan custom property, kamu hanya perlu mengganti nilai variabel di dalamnya — seluruh komponen ikut menyesuaikan tanpa aturan tambahan.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Sebuah codebase lama punya aturan `#sidebar a { color: blue }` yang selalu mengalahkan kelas utilitasmu. Fitur CSS modern apa yang menyelesaikannya tanpa menambah `!important`?",
              choices: [
                "`@layer`, karena urutan layer mengalahkan specificity",
                "`:where()`, karena specificity-nya nol",
                "Nesting native, karena selectornya jadi lebih pendek",
                "Custom property, karena nilainya bisa diganti saat runtime",
              ],
              answerIndex: 0,
              explanation:
                "`@layer` menetapkan urutan prioritas secara sengaja: aturan di layer yang dideklarasikan lebih akhir menang atas layer sebelumnya, **berapa pun specificity-nya**. Jadi menaruh kelas utilitas di layer terakhir menyelesaikan masalah tanpa perlombaan selector. Pilihan `:where()` menggoda karena juga soal specificity — tapi arahnya berlawanan: ia membuat aturanmu makin lemah, bukan makin menang.",
            },
          ],
        },
      ],
    },
    {
      slug: "tailwind",
      title: "Tailwind CSS",
      description:
        "Utility-first framework yang jadi requirement lowongan — dipelajari SETELAH paham CSS murni.",
      topics: [
        "Filosofi utility-first & setup Tailwind",
        "Terjemahan mental: CSS yang kamu tahu → kelas Tailwind",
        "Spacing, warna, dan skala bawaan",
        "Responsive & state variant (hover:, md:, dark:)",
        "Ekstraksi komponen: kapan pakai @apply (jarang) vs komponen framework",
        "Kustomisasi theme & design token",
        "Anti-pattern Tailwind yang bikin kode tak terbaca",
      ],
      items: [
        {
          kind: "materi",
          id: "css-8-m1",
          title: "Tailwind: Kosakata Baru untuk CSS yang Sudah Kamu Kuasai",
          body:
            "# Pengertian\n\n" +
            "Tailwind adalah kumpulan **kelas utilitas**: setiap kelas mewakili satu deklarasi CSS. Kamu tidak lagi menulis berkas CSS dan memikirkan nama class — kamu menyusun utilitas langsung di HTML.\n\n" +
            "```text\n" +
            "CSS biasa                          Tailwind\n" +
            "-----------------------------      --------------------------------\n" +
            ".kartu {                           <div class=\"p-4 bg-white rounded-lg\n" +
            "  padding: 1rem;                                shadow-md\">\n" +
            "  background: white;\n" +
            "  border-radius: 0.5rem;\n" +
            "  box-shadow: ...;\n" +
            "}\n" +
            "<div class=\"kartu\">\n" +
            "```\n\n" +
            "> **Karena kamu sudah paham CSS murni, modul ini hampir seluruhnya soal penerjemahan.** Itulah alasan Tailwind ditaruh di sini, bukan di awal: `justify-between` hanya bermakna kalau kamu tahu apa itu main axis.\n\n" +
            "## Kenapa Orang Memakainya\n\n" +
            "| Masalah CSS biasa | Jawaban Tailwind |\n" +
            "|---|---|\n" +
            "| memikirkan nama class untuk setiap elemen | tidak perlu nama sama sekali |\n" +
            "| berkas CSS terus tumbuh dan tidak ada yang berani menghapus | tidak ada berkas yang tumbuh; kelas dipakai ulang |\n" +
            "| nilai berbeda-beda: 13px, 15px, 17px | skala tetap, jadi tampilan konsisten |\n" +
            "| harus berpindah berkas untuk mengubah satu jarak | semuanya di satu tempat |\n\n" +
            "Harganya juga nyata: HTML jadi lebih panjang dan pada awalnya terasa berantakan. Itu perdagangan yang sadar, bukan kekurangan yang disembunyikan.\n\n" +
            "## Kamus Terjemahan\n\n" +
            "| CSS | Tailwind |\n" +
            "|---|---|\n" +
            "| `display: flex` | `flex` |\n" +
            "| `flex-direction: column` | `flex-col` |\n" +
            "| `justify-content: space-between` | `justify-between` |\n" +
            "| `align-items: center` | `items-center` |\n" +
            "| `gap: 1rem` | `gap-4` |\n" +
            "| `padding: 1rem` | `p-4` |\n" +
            "| `padding-inline: 1rem` | `px-4` |\n" +
            "| `margin-bottom: 0.5rem` | `mb-2` |\n" +
            "| `border-radius: 0.5rem` | `rounded-lg` |\n" +
            "| `font-weight: 700` | `font-bold` |\n" +
            "| `color: white` | `text-white` |\n" +
            "| `background: #3b82f6` | `bg-blue-500` |\n\n" +
            "## Skala Spacing: Satu Rumus\n\n" +
            "```text\n" +
            "angka x 4px = hasilnya\n" +
            "\n" +
            "p-1 = 4px      p-4 = 16px     p-8  = 32px\n" +
            "p-2 = 8px      p-6 = 24px     p-12 = 48px\n" +
            "```\n\n" +
            "Arah spesifik ditandai satu huruf: `t` atas, `r` kanan, `b` bawah, `l` kiri, `x` kiri-kanan, `y` atas-bawah. Jadi `py-2` berarti padding atas dan bawah 8px.\n\n" +
            "Kalau kamu butuh nilai di luar skala, ada sintaks kurung siku: `p-[13px]`, `w-[38%]`. Pakai seperlunya — di situlah konsistensi mulai bocor, dan reviewer biasanya menanyakan alasannya.\n\n" +
            "## Variant: Responsive, State, dan Dark Mode\n\n" +
            "```text\n" +
            "md:grid-cols-3     -> dari breakpoint md (768px) KE ATAS\n" +
            "hover:bg-blue-700  -> saat kursor di atasnya\n" +
            "focus:ring-2       -> saat elemen mendapat fokus keyboard\n" +
            "dark:bg-slate-900  -> saat mode gelap aktif\n" +
            "disabled:opacity-50 -> saat elemen dinonaktifkan\n" +
            "```\n\n" +
            "Breakpoint Tailwind semuanya berarti \"dari sini ke atas\": `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px. Artinya kelas **tanpa prefix adalah keadaan mobile** — Tailwind memaksamu menulis mobile-first, dan itu salah satu manfaat terbesarnya bagi pemula.\n\n" +
            "> **Jangan lupakan `focus:`.** Banyak proyek Tailwind hanya menangani `hover:`, sehingga pengguna keyboard kehilangan seluruh penanda posisi. `focus-visible:` bahkan lebih baik: ia hanya menyala saat pengguna memakai keyboard, jadi tidak muncul mengganggu saat tombol diklik mouse.\n\n" +
            "## Kustomisasi: Menaruh Warna Brand-mu\n\n" +
            "Tailwind versi 4 menyimpan tema di CSS lewat `@theme`, sedangkan versi 3 memakai berkas `tailwind.config.js`. Keduanya masih banyak ditemui:\n\n" +
            "```css\n" +
            "/* Tailwind v4 — di berkas CSS utama */\n" +
            "@import \"tailwindcss\";\n\n" +
            "@theme {\n" +
            "  --color-brand: #4f46e5;      /* dipakai sebagai bg-brand, text-brand */\n" +
            "  --radius-kartu: 12px;\n" +
            "}\n" +
            "```\n\n" +
            "```text\n" +
            "// Tailwind v3 — tailwind.config.js\n" +
            "theme: {\n" +
            "  extend: {\n" +
            "    colors: { brand: \"#4f46e5\" },\n" +
            "  },\n" +
            "}\n" +
            "```\n\n" +
            "Perhatikan kata `extend` pada v3: tanpa itu kamu **mengganti** seluruh palet bawaan, bukan menambahkannya — kesalahan yang membuat kelas seperti `bg-slate-800` mendadak tidak berfungsi.\n\n" +
            "## Kapan @apply (jarang sekali)\n\n" +
            "`@apply` memindahkan kelas utilitas ke dalam aturan CSS:\n\n" +
            "```css\n" +
            ".btn { @apply px-4 py-2 rounded bg-blue-500 text-white; }\n" +
            "```\n\n" +
            "Terlihat rapi, dan justru itu jebakannya: kamu kembali menciptakan nama abstrak dan berkas CSS yang tumbuh terus — tepat dua masalah yang ingin dihindari Tailwind. Untuk sesuatu yang berulang, jawaban yang benar adalah **membuat komponen** di framework yang kamu pakai (React, Vue, Blade), bukan kelas CSS baru. `@apply` wajar dipakai pada kasus sempit: menata elemen yang HTML-nya tidak kamu kuasai, misalnya keluaran dari editor teks atau pustaka pihak ketiga.\n\n" +
            "## Anti-Pattern yang Membuat Kode Tak Terbaca\n\n" +
            "1. **Menyalin-tempel deretan kelas yang sama ke sepuluh tempat.** Itu tanda kamu butuh komponen.\n" +
            "2. **Satu elemen dengan lebih dari sekitar lima belas kelas.** Pecah komponennya, jangan tambah kelas.\n" +
            "3. **Urutan kelas acak.** Sepakati urutan (layout → ukuran → spacing → warna → teks → state) agar orang lain bisa memindainya.\n" +
            "4. **Nilai kurung siku di mana-mana** (`mt-[7px]`, `text-[13px]`). Kalau desain butuh nilai itu berulang, tambahkan ke tema.\n" +
            "5. **Memakai Tailwind tanpa paham CSS-nya.** Tampilan bisa jadi, tapi saat layout berperilaku aneh kamu tidak punya alat untuk mendiagnosis.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Tailwind itu seperti **kotak Lego dengan ukuran balok yang terbatas**. Kamu tidak lagi memesan cetakan khusus untuk setiap bentuk (menulis class sendiri); kamu menyusun dari balok yang sudah ada. Keterbatasan ukurannya bukan kekurangan — itu yang membuat semua bangunan di satu meja terlihat serasi.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** Tailwind muncul di sangat banyak lowongan frontend Indonesia, hampir selalu berpasangan dengan React atau Next.js. Tapi yang ditanyakan di wawancara tetap CSS-nya — karena kandidat yang hanya menghafal kelas akan langsung terlihat begitu diminta menjelaskan kenapa sebuah layout berperilaku tertentu.",
        },
        {
          kind: "step",
          id: "css-8-1",
          title: "Utility-first: dari CSS ke kelas",
          explanation:
            "Tailwind menyediakan kelas kecil yang masing-masing mewakili satu deklarasi CSS. `p-4` = `padding: 1rem`, `bg-blue-500` = warna latar biru, `text-white` = teks putih. Kamu tidak menulis CSS lagi — kamu menyusun kelas di HTML. Karena kamu sudah paham CSS murni, ini murni soal penerjemahan.",
          example: {
            code: '<!-- CSS biasa -->\n<!-- .box { background: #ef4444; color: white; padding: 8px } -->\n\n<!-- Tailwind: kelas yang setara -->\n<div class="bg-red-500 text-white p-2">Kotak</div>',
            output:
              "Kotak merah dengan teks putih dan padding 8px — hasil identik dengan CSS di atasnya.",
            note: "Pola nama: bg- untuk background, text- untuk warna teks, p- untuk padding. Angka = intensitas/ukuran. Catatan preview: panel di modul ini memuat Tailwind dari internet, jadi kalau koneksimu terputus, kelasnya tidak akan berpengaruh apa pun — kodenya tetap benar dan tesnya tetap lulus.",
          },
          instruction:
            "Pada `<div>`, tambahkan kelas Tailwind: `bg-blue-500`, `text-white`, dan `p-4`.",
          starterCode: '<div class="">Kotak Tailwind</div>',
          language: "html",
          loadTailwind: true,
          tests: [
            {
              pattern: 'class=[\'"][^"\']*\\bbg-blue-500\\b[^"\']*[\'"]',
              message: "Tambahkan kelas bg-blue-500",
            },
            {
              pattern: 'class=[\'"][^"\']*\\btext-white\\b[^"\']*[\'"]',
              message: "Tambahkan kelas text-white",
            },
            {
              pattern: 'class=[\'"][^"\']*\\bp-4\\b[^"\']*[\'"]',
              message: "Tambahkan kelas p-4 (padding: 1rem)",
            },
          ],
          solution:
            '<div class="bg-blue-500 text-white p-4">Kotak Tailwind</div>',
        },
        {
          kind: "step",
          id: "css-8-2",
          title: "Skala spacing Tailwind",
          explanation:
            "Angka pada kelas Tailwind mengikuti skala tetap: **1 satuan = 0,25rem = 4px**. Jadi `p-2` = 8px, `p-4` = 16px, `p-8` = 32px. Skala terbatas ini justru kelebihannya — desain jadi konsisten karena tidak ada lagi campuran 13px, 15px, 17px yang muncul saat semua orang bebas memilih angka. Kalau kamu benar-benar butuh nilai di luar skala, Tailwind menyediakan sintaks kurung siku seperti `p-[13px]` — pakai seperlunya, karena di situlah konsistensi mulai bocor.",
          example: {
            code: '<!-- p-2=8px  p-4=16px  p-8=32px  (kelipatan 4px) -->\n<div class="p-3 mt-2 rounded shadow-sm">Kartu kecil</div>\n\n<!-- arah spesifik: t=top r=right b=bottom l=left, x=kiri-kanan, y=atas-bawah -->\n<div class="px-4 py-2">Padding horizontal 16px, vertikal 8px</div>',
            output:
              "Kartu pertama padding 12px dengan sudut sedikit membulat; kartu kedua padding berbeda antara sisi.",
            note: "Rumus: angka × 4px. Jadi p-3 = 12px, mt-2 = margin-top 8px, px-4 = padding kiri & kanan 16px.",
          },
          instruction:
            "Buat kartu dengan `p-6` (24px), `mb-4` (margin bawah 16px), `rounded-lg`, dan `shadow-md`.",
          starterCode: '<div class="bg-white">Kartu</div>',
          language: "html",
          loadTailwind: true,
          tests: [
            {
              pattern: 'class=[\'"][^"\']*\\bp-6\\b[^"\']*[\'"]',
              message: "Tambahkan p-6",
            },
            {
              pattern: 'class=[\'"][^"\']*\\bmb-4\\b[^"\']*[\'"]',
              message: "Tambahkan mb-4",
            },
            {
              pattern: 'class=[\'"][^"\']*\\brounded-lg\\b[^"\']*[\'"]',
              message: "Tambahkan rounded-lg",
            },
            {
              pattern: 'class=[\'"][^"\']*\\bshadow-md\\b[^"\']*[\'"]',
              message: "Tambahkan shadow-md",
            },
          ],
          solution:
            '<div class="bg-white p-6 mb-4 rounded-lg shadow-md">Kartu</div>',
        },
        {
          kind: "step",
          id: "css-8-3",
          title: "Flexbox versi Tailwind",
          explanation:
            "Semua konsep Flexbox yang kamu pelajari berlaku sama, hanya namanya berubah: `flex` = `display: flex`, `justify-between` = `justify-content: space-between`, `items-center` = `align-items: center`, `gap-4` = `gap: 1rem`. Inilah keuntungan belajar CSS murni lebih dulu — Tailwind jadi sekadar kosakata baru. Karena penamaannya mengikuti CSS aslinya, kamu bisa membaca kelas Tailwind milik orang lain tanpa membuka dokumentasi begitu CSS murninya sudah kamu kuasai.",
          example: {
            code: '<!-- CSS: display:flex; align-items:center; gap:8px -->\n<div class="flex items-center gap-2">\n  <img class="w-8 h-8 rounded-full" src="a.jpg" alt="">\n  <span>Nama Pengguna</span>\n</div>',
            output:
              "Foto profil bulat dan nama berjejer rapi, sejajar secara vertikal di tengah.",
            note: "Terjemahan langsung: flex→display:flex, items-center→align-items:center, gap-2→gap:8px.",
          },
          instruction:
            "Buat navbar: tambahkan `flex`, `justify-between`, `items-center`, dan `p-4` pada elemen `<nav>`.",
          starterCode:
            '<nav class="bg-slate-800 text-white">\n  <span>BiLearn</span>\n  <button class="bg-blue-500 px-3 py-1 rounded">Masuk</button>\n</nav>',
          language: "html",
          loadTailwind: true,
          tests: [
            {
              pattern: '<nav[^>]*class=[\'"][^"\']*\\bflex\\b[^"\']*[\'"]',
              message: "Tambahkan kelas flex pada <nav>",
            },
            {
              pattern: '<nav[^>]*class=[\'"][^"\']*\\bjustify-between\\b[^"\']*[\'"]',
              message: "Tambahkan justify-between",
            },
            {
              pattern: '<nav[^>]*class=[\'"][^"\']*\\bitems-center\\b[^"\']*[\'"]',
              message: "Tambahkan items-center",
            },
            {
              pattern: '<nav[^>]*class=[\'"][^"\']*\\bp-4\\b[^"\']*[\'"]',
              message: "Tambahkan p-4",
            },
          ],
          solution:
            '<nav class="bg-slate-800 text-white flex justify-between items-center p-4">\n  <span>BiLearn</span>\n  <button class="bg-blue-500 px-3 py-1 rounded">Masuk</button>\n</nav>',
        },
        {
          kind: "step",
          id: "css-8-4",
          title: "Responsive variant: mobile-first",
          explanation:
            "Prefix seperti `md:` berarti 'berlaku mulai breakpoint md ke atas' — persis `@media (min-width: 768px)`. Karena itu Tailwind **mobile-first**: kelas tanpa prefix adalah dasar untuk layar kecil, kelas berprefix menimpanya di layar lebih besar. Contoh: `grid-cols-1 md:grid-cols-3`. Hindari menulis `sm:` untuk sesuatu yang seharusnya menjadi dasar; kalau tampilan HP sudah membutuhkannya, tulis kelas itu tanpa prefix.",
          example: {
            code: '<!-- teks kecil di HP, besar di layar lebar -->\n<h1 class="text-xl md:text-3xl lg:text-5xl">Judul</h1>\n\n<!-- sembunyi di HP, tampil dari md ke atas -->\n<nav class="hidden md:block">Menu desktop</nav>',
            output:
              "Judul membesar bertahap seiring lebar layar; menu desktop hanya muncul di layar md ke atas.",
            note: "Breakpoint Tailwind: sm=640px, md=768px, lg=1024px, xl=1280px. Semuanya berarti 'dari sini ke atas'.",
          },
          instruction:
            "Buat grid satu kolom di mobile dan tiga kolom mulai breakpoint md: tambahkan `grid`, `grid-cols-1`, `md:grid-cols-3`, dan `gap-4`.",
          starterCode:
            '<div class="">\n  <div class="bg-purple-400 p-4">1</div>\n  <div class="bg-purple-400 p-4">2</div>\n  <div class="bg-purple-400 p-4">3</div>\n</div>',
          language: "html",
          loadTailwind: true,
          tests: [
            {
              pattern: 'class=[\'"][^"\']*\\bgrid\\b[^"\']*[\'"]',
              message: "Tambahkan kelas grid",
            },
            {
              pattern: 'class=[\'"][^"\']*\\bgrid-cols-1\\b[^"\']*[\'"]',
              message: "Tambahkan grid-cols-1 sebagai dasar (mobile)",
            },
            {
              pattern: 'class=[\'"][^"\']*\\bmd:grid-cols-3\\b[^"\']*[\'"]',
              message:
                "Tambahkan md:grid-cols-3 — prefix md: berarti berlaku mulai layar medium ke atas.",
            },
            {
              pattern: 'class=[\'"][^"\']*\\bgap-4\\b[^"\']*[\'"]',
              message: "Tambahkan gap-4",
            },
          ],
          solution:
            '<div class="grid grid-cols-1 md:grid-cols-3 gap-4">\n  <div class="bg-purple-400 p-4">1</div>\n  <div class="bg-purple-400 p-4">2</div>\n  <div class="bg-purple-400 p-4">3</div>\n</div>',
        },
        {
          kind: "step",
          id: "css-8-5",
          title: "State variant: hover dan focus",
          explanation:
            "Prefix state bekerja sama seperti pseudo-class: `hover:bg-blue-700` = `:hover { background: ... }`. Jangan lupakan `focus:` — pengguna keyboard bergantung pada indikator fokus, dan menghapus outline tanpa menggantinya adalah kesalahan aksesibilitas yang sangat umum di proyek Tailwind. Tailwind juga punya `focus-visible:` yang hanya menyala saat pengguna memakai keyboard, sehingga indikator tidak muncul mengganggu ketika tombol diklik mouse.",
          example: {
            code: '<a class="text-gray-600 hover:text-black hover:underline transition">\n  Tautan\n</a>\n\n<input class="border focus:border-blue-500 focus:outline-none">',
            output:
              "Tautan menghitam dan bergaris bawah saat disentuh kursor; input berganti warna tepi saat aktif diisi.",
            note: "Pola: state:properti-nilai. Selain hover & focus ada disabled:, active:, group-hover:, dan dark:.",
          },
          instruction:
            "Pada tombol, tambahkan `hover:bg-blue-700`, `focus:ring-2`, dan `transition`.",
          starterCode:
            '<button class="bg-blue-500 text-white px-4 py-2 rounded">Kirim</button>',
          language: "html",
          loadTailwind: true,
          tests: [
            {
              pattern: 'class=[\'"][^"\']*\\bhover:bg-blue-700\\b[^"\']*[\'"]',
              message: "Tambahkan hover:bg-blue-700",
            },
            {
              pattern: 'class=[\'"][^"\']*\\bfocus:ring-2\\b[^"\']*[\'"]',
              message:
                "Tambahkan focus:ring-2 — indikator fokus penting untuk pengguna keyboard.",
            },
            {
              pattern: 'class=[\'"][^"\']*\\btransition\\b[^"\']*[\'"]',
              message: "Tambahkan transition",
            },
          ],
          solution:
            '<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:ring-2 transition">Kirim</button>',
        },
        {
          kind: "step",
          id: "css-8-6",
          title: "Kartu lengkap: menyusun semuanya",
          explanation:
            "Sekarang gabungkan: layout, spacing, tipografi, dan state dalam satu komponen kartu yang realistis. Perhatikan bahwa kelas dibaca berkelompok — biasakan urutan yang konsisten (layout → spacing → warna → tipografi → state) agar mudah dibaca orang lain. Kalau satu elemen sudah memuat lebih dari sekitar lima belas kelas, itu tanda komponennya perlu dipecah — bukan tanda kamu butuh @apply.",
          example: {
            code: '<!-- urutan kelas: layout → ukuran → spacing → warna → teks → state -->\n<div class="flex flex-col w-64 p-4 bg-gray-100 rounded-lg">\n  <h4 class="text-lg font-semibold mb-1">Judul</h4>\n  <p class="text-sm text-gray-500">Keterangan singkat</p>\n</div>',
            output:
              "Kartu abu-abu berlebar 256px berisi judul tebal dan keterangan kecil berwarna lebih redup.",
            note: "Kelas bisa sangat banyak — urutan yang konsisten membuat orang lain (dan kamu nanti) mudah membacanya.",
          },
          instruction:
            "Buat kartu produk: pada div luar tambahkan `max-w-sm`, `rounded-xl`, `shadow-lg`, `p-6`, `bg-white`; pada judul `<h3>` tambahkan `text-xl`, `font-bold`, `mb-2`.",
          starterCode:
            '<div class="">\n  <h3 class="">Sepatu Lari</h3>\n  <p class="text-gray-600">Rp 450.000</p>\n</div>',
          language: "html",
          loadTailwind: true,
          tests: [
            {
              pattern: '<div[^>]*class=[\'"][^"\']*\\bmax-w-sm\\b[^"\']*[\'"]',
              message: "Tambahkan max-w-sm pada div luar",
            },
            {
              pattern: '<div[^>]*class=[\'"][^"\']*\\brounded-xl\\b[^"\']*[\'"]',
              message: "Tambahkan rounded-xl",
            },
            {
              pattern: '<div[^>]*class=[\'"][^"\']*\\bshadow-lg\\b[^"\']*[\'"]',
              message: "Tambahkan shadow-lg",
            },
            {
              pattern: '<div[^>]*class=[\'"][^"\']*\\bp-6\\b[^"\']*[\'"]',
              message: "Tambahkan p-6",
            },
            {
              pattern: '<div[^>]*class=[\'"][^"\']*\\bbg-white\\b[^"\']*[\'"]',
              message: "Tambahkan bg-white",
            },
            {
              pattern: '<h3[^>]*class=[\'"][^"\']*\\btext-xl\\b[^"\']*[\'"]',
              message: "Tambahkan text-xl pada h3",
            },
            {
              pattern: '<h3[^>]*class=[\'"][^"\']*\\bfont-bold\\b[^"\']*[\'"]',
              message: "Tambahkan font-bold pada h3",
            },
            {
              pattern: '<h3[^>]*class=[\'"][^"\']*\\bmb-2\\b[^"\']*[\'"]',
              message: "Tambahkan mb-2 pada h3",
            },
          ],
          solution:
            '<div class="max-w-sm rounded-xl shadow-lg p-6 bg-white">\n  <h3 class="text-xl font-bold mb-2">Sepatu Lari</h3>\n  <p class="text-gray-600">Rp 450.000</p>\n</div>',
        },
        {
          kind: "quiz",
          id: "css-8-kuis",
          title: "Kuis: Tailwind CSS",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Berapa padding yang dihasilkan kelas p-4?",
              choices: ["4px", "8px", "16px", "40px"],
              answerIndex: 2,
              explanation:
                "16px. Skala Tailwind: 1 satuan = 0,25rem = 4px, jadi p-4 = 4 × 4px = 16px = 1rem. Skala yang terbatas ini membuat spacing di seluruh proyek konsisten.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Apa arti md:grid-cols-3 dalam pendekatan mobile-first Tailwind?",
              choices: [
                "3 kolom hanya di layar medium, kembali 1 kolom di layar besar",
                "3 kolom mulai breakpoint medium ke ATAS (termasuk lg dan xl)",
                "3 kolom di layar kecil saja",
                "Maksimal 3 kolom di semua ukuran",
              ],
              answerIndex: 1,
              explanation:
                "Prefix breakpoint Tailwind berarti min-width, jadi berlaku dari breakpoint itu ke atas. Kelas tanpa prefix adalah dasar untuk layar terkecil — inilah arti mobile-first.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Seorang developer menulis banyak sekali @apply untuk memindahkan semua kelas Tailwind ke file CSS. Apa masalahnya?",
              choices: [
                "@apply tidak valid di Tailwind",
                "Ini mengembalikan masalah penamaan dan CSS yang membengkak — justru membatalkan keuntungan utility-first",
                "@apply membuat halaman lebih lambat 10x",
                "Tidak ada masalah, itu praktik yang dianjurkan",
              ],
              answerIndex: 1,
              explanation:
                "Memakai @apply berlebihan berarti kembali menciptakan nama kelas abstrak dan file CSS yang tumbuh terus — tepat masalah yang ingin dihindari Tailwind. Untuk komponen berulang, buat komponen di framework (React/Blade), bukan kelas CSS baru.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Tombolmu punya efek hover, tapi pengguna keyboard tidak melihat penanda apa pun saat berpindah dengan Tab. Prefix state Tailwind apa yang kamu tambahkan?",
              choices: ["focus:", "hover:", "active:", "visited:"],
              answerIndex: 0,
              explanation:
                "focus: (misal focus:ring-2). Banyak proyek hanya menangani hover: dan melupakan focus:, padahal pengguna keyboard tidak punya kursor — tanpa indikator fokus mereka tidak tahu sedang di elemen mana.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Kenapa BiLearn mengajarkan Tailwind setelah Flexbox dan Grid, bukan sebelumnya?",
              choices: [
                "Karena Tailwind lebih sulit dipasang",
                "Karena kelas Tailwind hanyalah nama lain dari properti CSS — tanpa paham CSS-nya, kamu menghafal tanpa bisa mendiagnosis masalah",
                "Karena Tailwind hanya untuk proyek besar",
                "Karena urutannya tidak penting",
              ],
              answerIndex: 1,
              explanation:
                "justify-between hanya bermakna kalau kamu tahu apa itu main axis. Orang yang belajar Tailwind tanpa CSS bisa membuat tampilan jadi, tapi macet saat layout berperilaku aneh — dan itu terlihat jelas di technical interview.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kamu menambahkan warna brand di `tailwind.config.js` (v3), tapi setelahnya kelas bawaan seperti `bg-slate-800` mendadak tidak berfungsi. Apa yang terlewat?",
              code: "theme: {\n  colors: { brand: \"#4f46e5\" },\n}",
              choices: [
                "Warnanya harus ditulis dalam format rgb",
                "Kata `extend` — tanpa itu kamu MENGGANTI seluruh palet bawaan, bukan menambahkannya",
                "Nama warna tidak boleh 'brand'",
                "Tailwind hanya menerima warna bawaan",
              ],
              answerIndex: 1,
              explanation:
                "Menulis `colors` langsung di dalam `theme` menimpa seluruh palet, sehingga hanya `brand` yang tersisa dan semua kelas warna lain hilang. Yang benar adalah `theme: { extend: { colors: { brand: ... } } }`. Di Tailwind v4 pendekatannya berbeda: tema ditulis di CSS lewat `@theme` sebagai custom property, dan menambah satu warna tidak menghapus yang lain.",
            },
          ],
        },
      ],
    },
    {
      slug: "figma-to-css",
      title: "Figma → CSS",
      description:
        "Skill yang diminta lowongan: menerjemahkan desain jadi UI pixel-perfect.",
      topics: [
        "Membaca file Figma: inspect, ukuran, warna, font",
        "Auto layout Figma ≈ Flexbox — pemetaan konsep",
        "Ekstrak design token: spacing, radius, shadow",
        "Menangani keadaan yang tidak digambar desainer (hover, error, loading, teks panjang)",
        "Komunikasi dengan desainer: pertanyaan yang benar",
        "Workflow review: membandingkan hasil vs desain",
      ],
      items: [
        {
          kind: "materi",
          id: "css-9-m1",
          title: "Dari Berkas Desain ke Kode yang Tahan Produksi",
          body:
            "# Pengertian\n\n" +
            "Di pekerjaan nyata kamu jarang menentukan sendiri tampilan halaman. Kamu menerima **berkas desain** — biasanya Figma — dan tugasmu menerjemahkannya menjadi antarmuka yang berfungsi di layar apa pun, dengan data sungguhan, dan pada keadaan yang tidak digambar desainer.\n\n" +
            "Modul ini soal keterampilan itu, dan bagian tersulitnya bukan menyamakan warna. Bagian tersulitnya adalah **melengkapi yang tidak ada di desain**.\n\n" +
            "## Membaca Berkas Figma\n\n" +
            "Kamu tidak perlu bisa mendesain; kamu perlu bisa membaca. Yang kamu cari:\n\n" +
            "| Di Figma | Yang kamu ambil |\n" +
            "|---|---|\n" +
            "| Klik elemen, lihat panel kanan | ukuran, warna, radius, jenis & ukuran font |\n" +
            "| Panel **Inspect** / **Dev Mode** | nilai siap pakai, sering langsung dalam bentuk CSS |\n" +
            "| Jarak antar elemen (tahan Alt/Option) | nilai spacing yang sebenarnya |\n" +
            "| Panel **Auto layout** | struktur Flexbox dari frame itu |\n\n" +
            "> **Jangan menyalin CSS ekspor Figma apa adanya.** Ia sering memakai `position: absolute`, lebar tetap dalam piksel, dan nama kelas acak — hasilnya tampil benar hanya pada satu ukuran layar dan mustahil dirawat. Ambil **nilainya**, tulis sendiri strukturnya.\n\n" +
            "## Auto Layout ≈ Flexbox\n\n" +
            "```text\n" +
            "Figma (Auto layout)          CSS\n" +
            "-------------------------    ---------------------------------\n" +
            "Direction: Vertical      ->  flex-direction: column\n" +
            "Direction: Horizontal    ->  flex-direction: row\n" +
            "Gap / Spacing            ->  gap\n" +
            "Padding                  ->  padding\n" +
            "Alignment (ikon 9 titik) ->  justify-content + align-items\n" +
            "Fill container           ->  flex: 1\n" +
            "Hug contents             ->  ukuran mengikuti isi (bawaan)\n" +
            "```\n\n" +
            "Begitu kamu melihat auto layout sebagai Flexbox, membaca desain jadi jauh lebih cepat — dan kamu bisa berdiskusi dengan desainer memakai istilah yang sama.\n\n" +
            "## Langkah Pertama: Ekstrak Token, Bukan Bikin Komponen\n\n" +
            "```css\n" +
            "/* satu tempat untuk semua nilai yang berulang */\n" +
            ":root {\n" +
            "  --warna-primer: #4f46e5;\n" +
            "  --warna-teks: #111827;\n" +
            "  --radius: 12px;\n" +
            "  --spasi: 8px;\n" +
            "}\n" +
            "```\n\n" +
            "Beri nama berdasarkan **perannya**, bukan wujudnya: `--warna-primer`, bukan `--biru`. Kalau nanti brand-nya berganti warna menjadi hijau, nama `--biru` yang berisi warna hijau adalah warisan yang membingungkan semua orang.\n\n" +
            "## Keadaan yang Tidak Digambar Desainer\n\n" +
            "Desain biasanya menampilkan satu keadaan: normal, dengan data yang rapi. Yang harus kamu lengkapi:\n\n" +
            "| Keadaan | Pertanyaan yang perlu dijawab |\n" +
            "|---|---|\n" +
            "| `:hover` | apa yang berubah saat kursor di atasnya? |\n" +
            "| `:focus-visible` | bagaimana pengguna keyboard tahu posisinya? |\n" +
            "| `:disabled` | bagaimana tombol yang tidak bisa diklik terlihat? |\n" +
            "| loading | apa yang tampil selama menunggu data? |\n" +
            "| error | bagaimana pesan gagal ditampilkan? |\n" +
            "| **empty state** | apa yang tampil kalau daftarnya kosong? |\n\n" +
            "Dua yang terakhir paling sering absen dari berkas desain, padahal keduanya pasti terjadi di produksi. Menanyakannya **sebelum** mulai coding adalah tanda developer berpengalaman — bukan menebak sendiri lalu diminta revisi.\n\n" +
            "## Pertanyaan yang Tepat untuk Desainer\n\n" +
            "1. \"Kalau judul produknya 90 karakter, dipotong atau kartunya memanjang?\"\n" +
            "2. \"Ini di layar 360px jadi berapa kolom?\"\n" +
            "3. \"Bagaimana tampilan tombol saat sedang memproses?\"\n" +
            "4. \"Kalau daftarnya kosong, apa yang pengguna lihat?\"\n" +
            "5. \"Angka spacing ini 14 atau 16? Apakah kita punya skala tetap?\"\n\n" +
            "Perhatikan bentuknya: semuanya pertanyaan konkret tentang satu keputusan, bukan \"desainnya kurang lengkap\". Cara bertanya seperti ini yang membuat kerja sama berjalan, dan biasanya desainer memang belum memikirkannya — bukan menyembunyikannya.\n\n" +
            "## Konten Nyata Selalu Berbeda dari Desain\n\n" +
            "```css\n" +
            "/* RAPUH: konten panjang akan terpotong atau meluber */\n" +
            ".kartu { height: 120px; }\n\n" +
            "/* TANGGUH: punya tinggi minimum tapi boleh tumbuh */\n" +
            ".kartu { min-height: 120px; }\n" +
            "```\n\n" +
            "Uji komponenmu dengan **teks tiga kali lebih panjang** dari desain, nama tanpa spasi yang sangat panjang, gambar yang gagal dimuat, dan daftar berisi nol item. Empat pengujian itu menangkap hampir semua kerusakan tampilan yang biasanya baru ditemukan QA.\n\n" +
            "## Workflow Review: Membandingkan Hasil vs Desain\n\n" +
            "1. **Sejajarkan dua jendela** — desain di satu sisi, hasilmu di sisi lain, pada lebar yang sama.\n" +
            "2. **Periksa dari besar ke kecil:** susunan dulu, lalu spacing, baru warna dan tipografi. Memperbaiki warna sebelum susunan benar adalah pekerjaan sia-sia.\n" +
            "3. **Cek pada tiga lebar** minimal: 360px, 768px, dan lebar desainnya.\n" +
            "4. **Tab dari atas ke bawah tanpa tetikus** untuk memastikan seluruh elemen interaktif punya penanda fokus.\n" +
            "5. Baru kirim untuk review, sertakan tangkapan layar hasilmu di beberapa ukuran.\n\n" +
            "> **Apa arti \"pixel-perfect\" secara realistis?** Bukan identik di setiap perangkat — itu mustahil, karena rendering font dan ukuran layar berbeda-beda. Yang diharapkan adalah kesetiaan pada sistem desain: token yang konsisten, hierarki yang terjaga, dan hasil yang terlihat benar di semua ukuran.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Menyalin CSS ekspor Figma apa adanya.** Ia memakai posisi absolut dan lebar tetap; tampil benar hanya pada satu ukuran layar.\n" +
            "2. **Menyebar nilai mentah ke setiap komponen.** Saat warna brand berganti, kamu menyisir puluhan berkas.\n" +
            "3. **Menamai token berdasarkan wujudnya** (`--biru`) alih-alih perannya (`--warna-primer`).\n" +
            "4. **`height` tetap pada kartu.** Konten nyata lebih panjang dari teks contoh, dan kartunya rusak.\n" +
            "5. **Hanya membuat keadaan normal.** Hover, focus, disabled, loading, error, dan empty state semuanya pasti terjadi di produksi.\n" +
            "6. **Menghapus indikator fokus** agar terlihat lebih rapi. Pengguna keyboard kehilangan seluruh penanda posisi.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Desain itu seperti **gambar rumah dari arsitek**; kamu tukangnya. Gambar tidak menyebutkan apa yang terjadi saat hujan miring atau saat tiga orang lewat pintu bersamaan — tapi bangunannya harus tetap berdiri. Menanyakan hal-hal itu di awal jauh lebih murah daripada membongkar dinding setelah selesai.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "> **Kapan dipakai:** ini isi pekerjaan harian frontend developer, dan sering menjadi tes praktik saat melamar: \"implementasikan desain ini\". Yang dinilai penguji bukan cuma kemiripannya, tapi apakah kamu memakai token, apakah tampilannya bertahan di lebar aneh, dan apakah kamu menangani keadaan yang tidak digambar. Ketiganya persis isi modul ini.",
        },
        {
          kind: "step",
          id: "css-9-1",
          title: "Design token dari spesifikasi desain",
          explanation:
            "Langkah pertama saat menerima desain **bukan** langsung membuat komponen, tapi mengekstrak **design token**: warna, spacing, radius, dan font yang dipakai berulang. Simpan sebagai custom property. Kalau desainer nanti mengubah warna brand, kamu hanya mengedit satu baris. Simpan token itu di satu berkas terpisah agar mudah ditemukan, dan beri nama berdasarkan perannya (`--warna-primer`) bukan wujudnya (`--biru`).",
          example: {
            code: "/* Dari panel Figma:\n   Primary  #0ea5e9\n   Danger   #dc2626\n   Radius   8px          */\n\n:root {\n  --primary: #0ea5e9;\n  --danger: #dc2626;\n  --radius: 8px;\n}\n\n.btn-utama { background: var(--primary); border-radius: var(--radius); }\n.btn-hapus { background: var(--danger);  border-radius: var(--radius); }",
            output:
              "Semua komponen memakai token yang sama, sehingga desain konsisten dan perubahan warna brand cukup di satu tempat.",
            note: "Langkah pertama menerima desain: kumpulkan nilai yang BERULANG jadi token, jangan sebar nilai mentah ke tiap komponen.",
          },
          instruction:
            "Spesifikasi dari Figma: warna primer `#4f46e5`, warna teks `#111827`, radius `12px`, spacing dasar `8px`. Deklarasikan sebagai `--primary`, `--text`, `--radius`, dan `--space` di `:root`.",
          starterCode: ":root {\n  \n}\n",
          language: "css",
          previewHtml: "<p>Token siap dipakai komponen.</p>",
          tests: [
            {
              pattern: "--primary\\s*:\\s*#4f46e5",
              message: "Deklarasikan --primary: #4f46e5;",
            },
            {
              pattern: "--text\\s*:\\s*#111827",
              message: "Deklarasikan --text: #111827;",
            },
            {
              pattern: "--radius\\s*:\\s*12px",
              message: "Deklarasikan --radius: 12px;",
            },
            {
              pattern: "--space\\s*:\\s*8px",
              message: "Deklarasikan --space: 8px;",
            },
          ],
          solution:
            ":root {\n  --primary: #4f46e5;\n  --text: #111827;\n  --radius: 12px;\n  --space: 8px;\n}",
        },
        {
          kind: "step",
          id: "css-9-2",
          title: "Auto layout Figma = Flexbox",
          explanation:
            "Ini pemetaan yang perlu kamu hafal karena dipakai setiap hari: Auto layout **vertical** → `flex-direction: column`; **horizontal** → `row`. Properti *gap* di Figma → `gap`. *Padding* → `padding`. Alignment di panel Figma → `justify-content` dan `align-items`. Begitu kamu melihatnya sebagai Flexbox, membaca desain jadi jauh lebih cepat.",
          example: {
            code: "/* Panel Figma:\n   Auto layout : Vertical\n   Gap         : 12\n   Padding     : 16\n   Align       : Center      */\n\n.panel {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 16px;\n  align-items: center;\n}",
            output:
              "Hasil di browser identik dengan frame di Figma — karena auto layout memang Flexbox dengan nama berbeda.",
            note: "Pemetaan: Vertical→column, Horizontal→row, Gap→gap, Padding→padding, Align→align-items.",
          },
          instruction:
            "Desainnya: auto layout **horizontal**, gap 16px, padding 24px, item **center** secara vertikal. Terapkan ke `.toolbar`.",
          starterCode: ".toolbar {\n  background: #eef2ff;\n}\n.btn { background: #4f46e5; color: white; padding: 8px 12px; }\n",
          language: "css",
          previewHtml:
            "<div class='toolbar'>\n  <button class='btn'>Simpan</button>\n  <button class='btn'>Batal</button>\n</div>",
          tests: [
            {
              pattern: "\\.toolbar\\s*\\{[^}]*display\\s*:\\s*flex",
              message: "Tambahkan display: flex;",
            },
            {
              pattern: "\\.toolbar\\s*\\{[^}]*gap\\s*:\\s*16px",
              message: "Atur gap: 16px; sesuai spesifikasi desain.",
            },
            {
              pattern: "\\.toolbar\\s*\\{[^}]*padding\\s*:\\s*24px",
              message: "Atur padding: 24px;",
            },
            {
              pattern: "\\.toolbar\\s*\\{[^}]*align-items\\s*:\\s*center",
              message:
                "Tambahkan align-items: center; (alignment vertikal center di Figma).",
            },
          ],
          solution:
            ".toolbar {\n  background: #eef2ff;\n  display: flex;\n  gap: 16px;\n  padding: 24px;\n  align-items: center;\n}\n.btn { background: #4f46e5; color: white; padding: 8px 12px; }",
        },
        {
          kind: "step",
          id: "css-9-3",
          title: "Keadaan yang tidak digambar desainer",
          explanation:
            "Desainer sering hanya menggambar keadaan normal. Tugasmu sebagai frontend adalah melengkapi yang hilang: **hover, focus, disabled, loading, error, dan empty state**. Menanyakan ini ke desainer sebelum mulai coding adalah tanda developer berpengalaman — bukan menebak sendiri lalu diminta revisi. Sepakati juga apa yang terjadi saat data kosong atau gagal dimuat — dua keadaan yang paling sering absen dari berkas desain.",
          example: {
            code: ".input { border: 1px solid #d1d5db; }\n\n.input:hover         { border-color: #9ca3af; }\n.input:focus-visible { outline: 2px solid #3b82f6; }\n.input:disabled      { background: #f3f4f6; cursor: not-allowed; }\n.input[aria-invalid=\"true\"] { border-color: #dc2626; }",
            output:
              "Satu komponen input dengan empat keadaan berbeda — padahal desainer mungkin hanya menggambar satu.",
            note: "Daftar periksa keadaan: normal, hover, focus, disabled, error, loading, dan empty state.",
          },
          instruction:
            "Lengkapi tombol dengan keadaan yang belum digambar: `.btn:hover` (`background: #4338ca`), `.btn:focus-visible` (`outline: 3px solid #a5b4fc`), dan `.btn:disabled` (`opacity: 0.5` serta `cursor: not-allowed`).",
          starterCode:
            ".btn {\n  background: #4f46e5;\n  color: white;\n  padding: 10px 16px;\n  border: none;\n  border-radius: 8px;\n}\n\n",
          language: "css",
          previewHtml:
            "<button class='btn'>Normal</button>\n<button class='btn' disabled>Disabled</button>",
          tests: [
            {
              pattern:
                "\\.btn:hover\\s*\\{[^}]*background(-color)?\\s*:\\s*#4338ca",
              message: "Buat .btn:hover { background: #4338ca; }",
            },
            {
              pattern:
                "\\.btn:focus-visible\\s*\\{[^}]*outline\\s*:\\s*3px\\s+solid\\s+#a5b4fc",
              message:
                "Buat .btn:focus-visible { outline: 3px solid #a5b4fc; } — jangan hilangkan indikator fokus.",
            },
            {
              pattern: "\\.btn:disabled\\s*\\{[^}]*opacity\\s*:\\s*0?\\.5",
              message: "Buat .btn:disabled dengan opacity: 0.5;",
            },
            {
              pattern:
                "\\.btn:disabled\\s*\\{[^}]*cursor\\s*:\\s*not-allowed",
              message: "Tambahkan cursor: not-allowed; pada .btn:disabled",
            },
          ],
          solution:
            ".btn {\n  background: #4f46e5;\n  color: white;\n  padding: 10px 16px;\n  border: none;\n  border-radius: 8px;\n}\n\n.btn:hover {\n  background: #4338ca;\n}\n\n.btn:focus-visible {\n  outline: 3px solid #a5b4fc;\n}\n\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}",
        },
        {
          kind: "step",
          id: "css-9-4",
          title: "Konten nyata selalu lebih panjang dari desain",
          explanation:
            "Desain memakai teks contoh yang rapi; data nyata tidak. Nama produk bisa 90 karakter, nama kota bisa sangat panjang. Komponen yang tangguh **tidak memakai height tetap** dan siap terhadap teks berlebih — pakai `min-height` plus pembatas baris. Ini pembeda antara 'sesuai desain' dan 'tahan produksi'.",
          example: {
            code: "/* RAPUH: teks panjang akan terpotong atau meluber */\n.kartu-buruk { height: 120px; }\n\n/* TANGGUH: punya tinggi minimum tapi boleh tumbuh */\n.kartu-baik { min-height: 120px; }\n\n/* batasi judul maksimal 3 baris */\n.judul {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}",
            output:
              "Kartu tetap seragam tingginya saat konten pendek, dan tidak rusak saat kontennya panjang.",
            note: "Uji komponenmu dengan teks 3x lebih panjang dari desain — begitulah data produksi berperilaku.",
          },
          instruction:
            "Buat kartu tahan konten panjang: ganti pendekatan tinggi tetap dengan `min-height: 80px`, dan batasi judul jadi 2 baris memakai `display: -webkit-box`, `-webkit-line-clamp: 2`, `-webkit-box-orient: vertical`, `overflow: hidden` pada `.judul`.",
          starterCode:
            ".kartu {\n  width: 200px;\n  border: 1px solid #e5e7eb;\n  padding: 12px;\n}\n.judul {\n  font-weight: bold;\n}\n",
          language: "css",
          previewHtml:
            "<div class='kartu'>\n  <div class='judul'>Sepatu Lari Profesional Edisi Terbatas Warna Merah Menyala Ukuran Lengkap</div>\n</div>",
          tests: [
            {
              pattern: "\\.kartu\\s*\\{[^}]*min-height\\s*:\\s*80px",
              message: "Tambahkan min-height: 80px; pada .kartu",
            },
            {
              pattern: "\\.judul\\s*\\{[^}]*-webkit-line-clamp\\s*:\\s*2",
              message: "Tambahkan -webkit-line-clamp: 2; pada .judul",
            },
            {
              pattern: "\\.judul\\s*\\{[^}]*display\\s*:\\s*-webkit-box",
              message: "Tambahkan display: -webkit-box;",
            },
            {
              pattern: "\\.judul\\s*\\{[^}]*overflow\\s*:\\s*hidden",
              message: "Tambahkan overflow: hidden;",
            },
            {
              pattern:
                "\\.judul\\s*\\{[^}]*-webkit-box-orient\\s*:\\s*vertical",
              message:
                "Tambahkan `-webkit-box-orient: vertical;` juga. Tanpa baris ini, line-clamp TIDAK bekerja sama sekali — teksnya tetap tampil penuh, dan itu jenis kegagalan yang lolos dari mata karena tidak ada pesan error apa pun.",
            },
          ],
          solution:
            ".kartu {\n  width: 200px;\n  border: 1px solid #e5e7eb;\n  padding: 12px;\n  min-height: 80px;\n}\n.judul {\n  font-weight: bold;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}",
        },
        {
          kind: "quiz",
          id: "css-9-kuis",
          title: "Kuis: Figma → CSS",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kamu menerima file Figma baru. Apa langkah pertama yang paling profesional?",
              choices: [
                "Langsung membuat komponen pertama agar cepat kelihatan progres",
                "Mengekstrak design token (warna, spacing, radius, tipografi) yang dipakai berulang",
                "Menyalin semua nilai px persis satu per satu ke tiap komponen",
                "Meminta desainer mengekspor CSS-nya",
              ],
              answerIndex: 1,
              explanation:
                "Mengekstrak token lebih dulu membuat implementasi konsisten dan mudah diubah. Menyalin nilai mentah ke setiap komponen berarti saat warna brand berubah, kamu harus menyisir puluhan file.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Auto layout vertical dengan gap 16px di Figma diterjemahkan menjadi apa di CSS?",
              choices: [
                "display: block dengan margin-bottom: 16px",
                "display: flex; flex-direction: column; gap: 16px",
                "display: grid; grid-template-rows: 16px",
                "position: absolute dengan top bertambah 16px",
              ],
              answerIndex: 1,
              explanation:
                "Auto layout Figma adalah Flexbox: vertical → flex-direction: column, dan properti gap Figma memetakan langsung ke gap CSS. Memakai margin-bottom bekerja tapi menyisakan margin di item terakhir.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Desain hanya menggambar keadaan normal sebuah tombol. Apa yang sebaiknya kamu lakukan?",
              choices: [
                "Implementasi apa adanya, keadaan lain bukan tanggung jawab frontend",
                "Menanyakan ke desainer keadaan hover, focus, disabled, dan loading sebelum mulai coding",
                "Menebak sendiri dan tidak perlu memberi tahu siapa pun",
                "Menunggu sampai QA melaporkannya sebagai bug",
              ],
              answerIndex: 1,
              explanation:
                "Menanyakan keadaan yang hilang di awal mencegah revisi berulang dan menunjukkan kamu berpikir menyeluruh. Kalau desainer tidak punya jawabannya, usulkan default yang wajar — jangan diam lalu menebak.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Kenapa memberi height tetap pada kartu produk berisiko di produksi?",
              choices: [
                "Karena height tidak didukung semua browser",
                "Karena data nyata sering lebih panjang dari teks contoh sehingga konten terpotong atau meluber",
                "Karena height membuat halaman lambat",
                "Karena desainer melarangnya",
              ],
              answerIndex: 1,
              explanation:
                "Teks di desain selalu rapi; nama produk nyata bisa jauh lebih panjang. Gunakan min-height agar kartu punya tinggi minimum tapi tetap bisa tumbuh, dan batasi baris judul dengan line-clamp bila perlu.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apa yang dimaksud 'pixel-perfect' secara realistis di dunia kerja?",
              choices: [
                "Setiap piksel harus identik di semua browser dan perangkat",
                "Spacing, ukuran, warna, dan tipografi mengikuti sistem desain secara konsisten, dengan penyesuaian wajar untuk berbagai ukuran layar",
                "Cukup mirip secara umum",
                "Memakai screenshot desain sebagai background halaman",
              ],
              answerIndex: 1,
              explanation:
                "Identik di setiap perangkat tidak mungkin dan bukan tujuannya — rendering font dan ukuran layar berbeda. Yang diharapkan adalah kesetiaan pada sistem desain: token konsisten, hierarki terjaga, dan hasil yang terlihat benar di semua ukuran.",
            },
          ],
        },
      ],
    },
  ],
};
