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
      slug: "dasar-styling",
      title: "Dasar Styling",
      description:
        "Cara CSS bekerja: selector, cascade, dan box model — fondasi yang salah paham di sini bikin frustrasi bertahun-tahun.",
      topics: [
        "Tiga cara memasang CSS & kenapa external stylesheet menang",
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
          kind: "step",
          id: "css-1-1",
          title: "Selector pertamamu",
          explanation:
            "Aturan CSS punya dua bagian: **selector** (elemen mana) dan **deklarasi** dalam kurung kurawal (`properti: nilai;`). Selector paling dasar adalah nama tag. Jangan lupa titik koma di akhir setiap deklarasi — lupa satu saja bisa membuat deklarasi berikutnya diabaikan.",
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
            "Class dipilih dengan titik: `.nama-class`. Inilah selector yang dipakai 90% waktu di dunia kerja, karena bisa dipakai berulang di banyak elemen dan tidak mengikat gaya ke jenis tag. Satu elemen boleh punya beberapa class sekaligus.",
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
              pattern: "\\.sorotan\\s*\\{[^}]*background-color\\s*:\\s*yellow",
              message:
                "Gunakan selector .sorotan (dengan titik di depan) dan atur background-color: yellow;",
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
              pattern: "^(?![\\s\\S]*#judul)",
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
            "`px` bersifat mutlak. `rem` relatif terhadap ukuran font root (default 16px, jadi `1rem` = 16px) — dan ikut membesar kalau pengguna memperbesar ukuran font di pengaturan browser. Untuk teks dan spacing, `rem` lebih ramah aksesibilitas; `px` masih wajar untuk border tipis.",
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
              type: "isian",
              question:
                "Unit apa yang relatif terhadap font-size elemen root dan ikut membesar saat pengguna memperbesar font browser? (tulis nama unitnya)",
              acceptedAnswers: ["rem"],
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
            "`position: absolute` memposisikan elemen relatif terhadap **leluhur terdekat yang punya position selain static**. Jadi polanya selalu berpasangan: parent diberi `position: relative`, anak diberi `position: absolute`. Lupa memberi relative pada parent membuat elemen melompat ke sudut halaman — bug paling umum di materi ini.",
          example: {
            code: ".kartu {\n  position: relative;   /* ← acuan bagi anak */\n  height: 80px;\n}\n\n.label {\n  position: absolute;   /* ← menempel ke .kartu */\n  bottom: 4px;\n  left: 4px;\n}",
            output:
              "Label menempel di sudut kiri-bawah kartu. Kalau .kartu tidak diberi relative, label akan melompat ke sudut kiri-bawah HALAMAN.",
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
            "`sticky` adalah hibrida: elemen berperilaku normal sampai batas scroll tertentu, lalu 'menempel'. Wajib menyertakan nilai offset (`top: 0`) — tanpa itu sticky tidak melakukan apa pun, dan ini kebingungan yang sangat sering terjadi. Dipakai untuk header navigasi dan header tabel.",
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
            "`z-index` menentukan siapa di atas siapa — **tapi hanya bekerja pada elemen yang punya position selain static**. Nilai besar tidak selalu menang: elemen di dalam parent dengan z-index rendah terkurung di lapisan parent-nya (stacking context). Praktik baik: pakai skala kecil dan konsisten (10, 20, 30), bukan `z-index: 99999`.",
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
            "Untuk memusatkan elemen block secara horizontal, dua hal harus ada bersamaan: **lebar yang terbatas** dan `margin-inline: auto` (atau `margin: 0 auto`). Tanpa width, elemen block sudah selebar penuh sehingga tidak ada ruang untuk dipusatkan — inilah kenapa `margin: 0 auto` sering 'tidak berefek'.",
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
          kind: "step",
          id: "css-3-1",
          title: "display: flex",
          explanation:
            "`display: flex` pada **parent** membuat anak-anaknya berbaris. Ini poin penting: kamu mengatur flex di container, bukan di item. Secara default arah barisnya horizontal (row), dan anak-anak menyusut/melebar sesuai ruang.",
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
            "Peta mental yang harus benar: `justify-content` bekerja **sepanjang main axis**. Saat `flex-direction: row` (default), main axis horizontal — jadi justify-content mengatur kiri-kanan. Nilai yang sering dipakai: `flex-start`, `center`, `space-between` (dorong ke ujung, jarak di tengah — pola navbar), `space-around`.",
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
            "`align-items` bekerja pada **cross axis** — tegak lurus dari main axis. Pada row, cross axis vertikal, jadi align-items mengatur atas-bawah. Kombinasi `justify-content: center` + `align-items: center` adalah cara paling ringkas memusatkan sesuatu secara sempurna, menggantikan trik-trik lama yang rumit.",
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
            "Mengubah `flex-direction: column` **memutar kedua axis**: main axis jadi vertikal, cross axis jadi horizontal. Konsekuensinya sering mengejutkan — sekarang `justify-content` mengatur atas-bawah dan `align-items` mengatur kiri-kanan. Ingat prinsipnya, jangan hafal 'justify = horizontal'.",
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
            "`flex: 1` pada item berarti 'ambil semua ruang sisa'. Ini shorthand dari `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`. Pola paling berguna: sidebar berlebar tetap + konten `flex: 1` yang menyesuaikan sisa ruang — layout aplikasi klasik dalam dua baris CSS.",
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
            "Secara default item flex **memaksa diri tetap satu baris** dan menyusut sampai gepeng. `flex-wrap: wrap` mengizinkan mereka turun ke baris berikutnya. Kombinasi `flex-wrap: wrap` + `flex-basis` minimum adalah cara membuat grid kartu responsif tanpa satu pun media query.",
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
              type: "isian",
              question:
                "Properti apa yang harus ditambahkan agar flex item boleh turun ke baris berikutnya saat ruang habis? (tulis nama propertinya)",
              acceptedAnswers: ["flex-wrap"],
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
          kind: "step",
          id: "css-4-1",
          title: "grid-template-columns dan unit fr",
          explanation:
            "`display: grid` + `grid-template-columns` mendefinisikan kolom secara eksplisit. Unit `fr` (fraction) berarti bagian dari ruang tersisa: `1fr 1fr 1fr` = tiga kolom sama lebar. Keunggulan `fr` atas persen: ia sudah memperhitungkan `gap`, jadi tidak ada lagi hitungan `33.33%` yang meleset.",
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
            "`repeat(3, 1fr)` lebih ringkas daripada menulis `1fr` tiga kali. `minmax(200px, 1fr)` berarti 'jangan lebih sempit dari 200px, tapi silakan melebar'. Kombinasi keduanya adalah fondasi grid responsif.",
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
            "Item grid bisa menempati lebih dari satu kolom dengan `grid-column: span 2`. Untuk posisi presisi, pakai nomor garis: `grid-column: 1 / 3` berarti dari garis 1 sampai garis 3 (yaitu menutupi 2 kolom). Perhatikan: yang dihitung adalah **garis**, bukan kolom — sumber kebingungan yang umum.",
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
            "`grid-template-areas` membuat layout yang **terlihat seperti bentuknya** di dalam CSS — sangat mudah dibaca saat maintenance. Setiap area diberi nama, lalu item ditempatkan dengan `grid-area: nama`. Cocok untuk layout halaman utuh: header, sidebar, main, footer.",
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
              type: "isian",
              question:
                "Properti apa yang memungkinkan kamu menuliskan layout dengan nama area seperti \"header header\" / \"sidebar main\"? (tulis nama propertinya)",
              acceptedAnswers: ["grid-template-areas"],
              explanation:
                "grid-template-areas membuat struktur layout terlihat langsung di CSS dalam bentuk visual. Sangat membantu maintenance, karena orang berikutnya bisa memahami layout tanpa menggambar sendiri.",
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
            "Pola responsif paling umum: default satu kolom (mobile), lalu di layar lebar menjadi beberapa kolom. Perhatikan bahwa aturan dasar tidak perlu media query sama sekali — hanya penyesuaian yang perlu.",
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
            "`clamp(minimum, ideal, maksimum)` memberi nilai yang menyesuaikan diri tapi tidak pernah keluar batas. Contoh `clamp(1.5rem, 5vw, 3rem)`: font tumbuh mengikuti lebar viewport (5vw), tapi tidak akan lebih kecil dari 1.5rem atau lebih besar dari 3rem. Satu baris ini menggantikan tiga media query.",
          example: {
            code: "/* clamp(minimum, ideal, maksimum) */\n.judul   { font-size: clamp(1rem, 3vw, 2rem); }\n.wadah   { padding: clamp(1rem, 5vw, 4rem);   }",
            output:
              "Ukuran font dan padding tumbuh mulus mengikuti lebar layar, tapi berhenti di batas minimum dan maksimum.",
            note: "vw = 1% lebar viewport. Jadi 3vw di layar 1000px = 30px. clamp mencegahnya jadi terlalu kecil atau raksasa.",
          },
          instruction:
            "Beri `h1` ukuran `font-size: clamp(1.5rem, 5vw, 3rem)`.",
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
            "Gambar dengan lebar asli 2000px akan merusak layout mobile. Perbaikan bakunya dua baris: `max-width: 100%` (jangan melebihi wadahnya) dan `height: auto` (jaga rasio agar tidak gepeng). Ini salah satu aturan pertama yang ditulis di hampir setiap proyek nyata.",
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
          kind: "step",
          id: "css-6-1",
          title: "font-family dan font stack",
          explanation:
            "`font-family` menerima **daftar** font, dibaca dari kiri: kalau font pertama tidak tersedia, browser mencoba berikutnya. Karena itu selalu akhiri dengan kategori generik (`sans-serif`, `serif`, `monospace`) sebagai jaring pengaman. Nama font yang mengandung spasi harus dikutip.",
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
                'font-family\\s*:\\s*"Helvetica Neue"\\s*,\\s*Arial\\s*,\\s*sans-serif',
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
            "`line-height` mengatur jarak antar baris — faktor terbesar dalam kenyamanan membaca. Praktik terbaik: **tulis tanpa satuan** (`1.6`), artinya 1,6× ukuran font elemen itu sendiri. Kalau kamu pakai `line-height: 24px`, nilai itu diwarisi mentah oleh anak-anaknya yang ukuran fontnya berbeda, dan teks besar jadi bertumpuk.",
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
            "Untuk **satu baris**, kombinasi tiga properti wajib bersama: `white-space: nowrap` (jangan turun baris), `overflow: hidden` (sembunyikan luapan), `text-overflow: ellipsis` (beri tanda …). Menghilangkan salah satunya membuat efeknya gagal — inilah kenapa orang sering bilang 'ellipsis saya tidak muncul'.",
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
            "`transition` membuat perubahan nilai berlangsung mulus, bukan patah. Aturan penting: **pasang transition di keadaan normal, bukan di `:hover`** — kalau dipasang di hover, animasinya mulus saat masuk tapi patah saat keluar. Sebutkan properti spesifik (`background-color`) daripada `all` agar performanya terjaga.",
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
            "`transform` mengubah tampilan elemen (geser, perbesar, putar) **tanpa memicu ulang perhitungan layout** — karena itu jauh lebih hemat daripada menganimasikan `width`, `top`, atau `margin`. Efek 'kartu terangkat saat disentuh' dibuat dengan `translateY(-4px)` plus bayangan.",
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
              type: "isian",
              question:
                "Media feature apa yang dipakai untuk menghormati pengguna yang mematikan animasi di pengaturan sistemnya? (tulis nama fiturnya, tanpa nilai)",
              acceptedAnswers: ["prefers-reduced-motion"],
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
          kind: "step",
          id: "css-7-1",
          title: "Custom properties (variabel CSS)",
          explanation:
            "Variabel CSS dideklarasikan dengan dua tanda hubung dan dipakai lewat `var()`. Biasanya ditaruh di `:root` agar berlaku global. Bedanya dengan variabel Sass: ini **hidup di browser**, bisa berubah saat runtime dan diwarisi oleh anak — dasar dari theming dan dark mode modern.",
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
            "`var(--nama, nilaiCadangan)` memakai nilai cadangan jika variabelnya belum terdefinisi. Ini penting saat membangun komponen yang bisa dikustomisasi: komponenmu tetap tampil benar walau pengguna tidak menyetel variabelnya.",
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
            "Selama bertahun-tahun CSS tidak bisa memilih elemen berdasarkan isinya. `:has()` mengubah itu: `.kartu:has(img)` berarti 'kartu **yang di dalamnya ada** gambar'. Ini membuka pola yang sebelumnya butuh JavaScript, misalnya memberi gaya berbeda pada form yang punya input invalid.",
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
            "`aspect-ratio: 16 / 9` menjaga perbandingan sisi tanpa trik padding lama. Pasangannya `object-fit: cover` membuat gambar mengisi kotak **tanpa gepeng** — bagian yang berlebih dipotong, bukan diregangkan. Kombinasi ini adalah cara baku menampilkan thumbnail dengan ukuran seragam.",
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
            "Inilah kenapa variabel CSS begitu berharga: definisikan warna sekali, lalu **ganti nilainya saja** di dalam `@media (prefers-color-scheme: dark)`. Seluruh halaman ikut berubah tanpa menulis ulang satu pun aturan komponen. Pendekatan ini yang dipakai hampir semua situs modern.",
          example: {
            code: ":root {\n  --kartu: #ffffff;\n  --teks: #111111;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --kartu: #1f2937;\n    --teks: #f9fafb;\n  }\n}\n\n.kartu { background: var(--kartu); color: var(--teks); }",
            output:
              "Seluruh komponen ikut berubah saat pengguna menyalakan mode gelap — tanpa satu pun aturan komponen ditulis dua kali.",
            note: "Kunci pendekatan ini: komponen hanya memakai var(), dan media query hanya mengganti NILAI variabelnya.",
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
            "`:is()` meringkas selector panjang: `:is(h1, h2, h3) { margin-block: 0.5em }` menggantikan tiga aturan terpisah. Catatan penting untuk debugging: specificity `:is()` mengikuti argumen **terkuat** di dalamnya, sedangkan `:where()` yang mirip selalu bernilai **nol** — pakai `:where()` untuk gaya dasar yang mudah ditimpa.",
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
              pattern:
                ":is\\(\\s*h1\\s*,\\s*h2\\s*,\\s*h3\\s*\\)\\s*\\{[^}]*color\\s*:\\s*#1d4ed8",
              message:
                "Buat aturan :is(h1, h2, h3) { color: #1d4ed8; }",
            },
          ],
          solution: ":is(h1, h2, h3) {\n  color: #1d4ed8;\n}",
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
              type: "isian",
              question:
                "Media feature apa yang mendeteksi bahwa pengguna memilih tema gelap di sistemnya? (tulis nama fiturnya saja)",
              acceptedAnswers: ["prefers-color-scheme"],
              explanation:
                "@media (prefers-color-scheme: dark). Dikombinasikan dengan custom property, kamu hanya perlu mengganti nilai variabel di dalamnya — seluruh komponen ikut menyesuaikan tanpa aturan tambahan.",
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
          kind: "step",
          id: "css-8-1",
          title: "Utility-first: dari CSS ke kelas",
          explanation:
            "Tailwind menyediakan kelas kecil yang masing-masing mewakili satu deklarasi CSS. `p-4` = `padding: 1rem`, `bg-blue-500` = warna latar biru, `text-white` = teks putih. Kamu tidak menulis CSS lagi — kamu menyusun kelas di HTML. Karena kamu sudah paham CSS murni, ini murni soal penerjemahan.",
          example: {
            code: '<!-- CSS biasa -->\n<!-- .box { background: #ef4444; color: white; padding: 8px } -->\n\n<!-- Tailwind: kelas yang setara -->\n<div class="bg-red-500 text-white p-2">Kotak</div>',
            output:
              "Kotak merah dengan teks putih dan padding 8px — hasil identik dengan CSS di atasnya.",
            note: "Pola nama: bg- untuk background, text- untuk warna teks, p- untuk padding. Angka = intensitas/ukuran.",
          },
          instruction:
            "Pada `<div>`, tambahkan kelas Tailwind: `bg-blue-500`, `text-white`, dan `p-4`.",
          starterCode: '<div class="">Kotak Tailwind</div>',
          language: "html",
          loadTailwind: true,
          tests: [
            {
              pattern: 'class="[^"]*\\bbg-blue-500\\b[^"]*"',
              message: "Tambahkan kelas bg-blue-500",
            },
            {
              pattern: 'class="[^"]*\\btext-white\\b[^"]*"',
              message: "Tambahkan kelas text-white",
            },
            {
              pattern: 'class="[^"]*\\bp-4\\b[^"]*"',
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
            "Angka pada kelas Tailwind mengikuti skala tetap: **1 satuan = 0,25rem = 4px**. Jadi `p-2` = 8px, `p-4` = 16px, `p-8` = 32px. Skala terbatas ini justru kelebihannya — desain jadi konsisten karena tidak ada lagi campuran 13px, 15px, 17px yang muncul saat semua orang bebas memilih angka.",
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
              pattern: 'class="[^"]*\\bp-6\\b[^"]*"',
              message: "Tambahkan p-6",
            },
            {
              pattern: 'class="[^"]*\\bmb-4\\b[^"]*"',
              message: "Tambahkan mb-4",
            },
            {
              pattern: 'class="[^"]*\\brounded-lg\\b[^"]*"',
              message: "Tambahkan rounded-lg",
            },
            {
              pattern: 'class="[^"]*\\bshadow-md\\b[^"]*"',
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
            "Semua konsep Flexbox yang kamu pelajari berlaku sama, hanya namanya berubah: `flex` = `display: flex`, `justify-between` = `justify-content: space-between`, `items-center` = `align-items: center`, `gap-4` = `gap: 1rem`. Inilah keuntungan belajar CSS murni lebih dulu — Tailwind jadi sekadar kosakata baru.",
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
              pattern: '<nav[^>]*class="[^"]*\\bflex\\b[^"]*"',
              message: "Tambahkan kelas flex pada <nav>",
            },
            {
              pattern: '<nav[^>]*class="[^"]*\\bjustify-between\\b[^"]*"',
              message: "Tambahkan justify-between",
            },
            {
              pattern: '<nav[^>]*class="[^"]*\\bitems-center\\b[^"]*"',
              message: "Tambahkan items-center",
            },
            {
              pattern: '<nav[^>]*class="[^"]*\\bp-4\\b[^"]*"',
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
            "Prefix seperti `md:` berarti 'berlaku mulai breakpoint md ke atas' — persis `@media (min-width: 768px)`. Karena itu Tailwind **mobile-first**: kelas tanpa prefix adalah dasar untuk layar kecil, kelas berprefix menimpanya di layar lebih besar. Contoh: `grid-cols-1 md:grid-cols-3`.",
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
              pattern: 'class="[^"]*\\bgrid\\b[^"]*"',
              message: "Tambahkan kelas grid",
            },
            {
              pattern: 'class="[^"]*\\bgrid-cols-1\\b[^"]*"',
              message: "Tambahkan grid-cols-1 sebagai dasar (mobile)",
            },
            {
              pattern: 'class="[^"]*\\bmd:grid-cols-3\\b[^"]*"',
              message:
                "Tambahkan md:grid-cols-3 — prefix md: berarti berlaku mulai layar medium ke atas.",
            },
            {
              pattern: 'class="[^"]*\\bgap-4\\b[^"]*"',
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
            "Prefix state bekerja sama seperti pseudo-class: `hover:bg-blue-700` = `:hover { background: ... }`. Jangan lupakan `focus:` — pengguna keyboard bergantung pada indikator fokus, dan menghapus outline tanpa menggantinya adalah kesalahan aksesibilitas yang sangat umum di proyek Tailwind.",
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
              pattern: 'class="[^"]*\\bhover:bg-blue-700\\b[^"]*"',
              message: "Tambahkan hover:bg-blue-700",
            },
            {
              pattern: 'class="[^"]*\\bfocus:ring-2\\b[^"]*"',
              message:
                "Tambahkan focus:ring-2 — indikator fokus penting untuk pengguna keyboard.",
            },
            {
              pattern: 'class="[^"]*\\btransition\\b[^"]*"',
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
            "Sekarang gabungkan: layout, spacing, tipografi, dan state dalam satu komponen kartu yang realistis. Perhatikan bahwa kelas dibaca berkelompok — biasakan urutan yang konsisten (layout → spacing → warna → tipografi → state) agar mudah dibaca orang lain.",
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
              pattern: '<div[^>]*class="[^"]*\\bmax-w-sm\\b[^"]*"',
              message: "Tambahkan max-w-sm pada div luar",
            },
            {
              pattern: '<div[^>]*class="[^"]*\\brounded-xl\\b[^"]*"',
              message: "Tambahkan rounded-xl",
            },
            {
              pattern: '<div[^>]*class="[^"]*\\bshadow-lg\\b[^"]*"',
              message: "Tambahkan shadow-lg",
            },
            {
              pattern: '<div[^>]*class="[^"]*\\bp-6\\b[^"]*"',
              message: "Tambahkan p-6",
            },
            {
              pattern: '<div[^>]*class="[^"]*\\bbg-white\\b[^"]*"',
              message: "Tambahkan bg-white",
            },
            {
              pattern: '<h3[^>]*class="[^"]*\\btext-xl\\b[^"]*"',
              message: "Tambahkan text-xl pada h3",
            },
            {
              pattern: '<h3[^>]*class="[^"]*\\bfont-bold\\b[^"]*"',
              message: "Tambahkan font-bold pada h3",
            },
            {
              pattern: '<h3[^>]*class="[^"]*\\bmb-2\\b[^"]*"',
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
              type: "isian",
              question:
                "Prefix state apa yang harus ditambahkan agar indikator fokus muncul bagi pengguna keyboard? (tulis prefiksnya saja, mis. 'xxx:')",
              acceptedAnswers: ["focus:", "focus"],
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
          kind: "step",
          id: "css-9-1",
          title: "Design token dari spesifikasi desain",
          explanation:
            "Langkah pertama saat menerima desain **bukan** langsung membuat komponen, tapi mengekstrak **design token**: warna, spacing, radius, dan font yang dipakai berulang. Simpan sebagai custom property. Kalau desainer nanti mengubah warna brand, kamu hanya mengedit satu baris.",
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
            "Desainer sering hanya menggambar keadaan normal. Tugasmu sebagai frontend adalah melengkapi yang hilang: **hover, focus, disabled, loading, error, dan empty state**. Menanyakan ini ke desainer sebelum mulai coding adalah tanda developer berpengalaman — bukan menebak sendiri lalu diminta revisi.",
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
