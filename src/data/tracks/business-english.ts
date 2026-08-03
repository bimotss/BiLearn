import type { Track } from "@/lib/types";

/**
 * Track Business English.
 *
 * Kerangka topik mengikuti urutan buku "Business English for Success"
 * (The Saylor Foundation, CC BY-NC-SA 3.0): kalimat → tanda baca → kata →
 * bab khusus pembelajar non-native → paragraf → proses menulis → prinsip
 * tulisan bisnis → dokumen bisnis. Bab 14 (APA/MLA) sengaja tidak diambil
 * karena tidak dipakai di luar konteks akademik.
 *
 * SELURUH ISI DITULIS ULANG dalam bahasa Indonesia, bukan terjemahan, agar
 * BiLearn tidak terikat klausa NonCommercial dan ShareAlike lisensi sumber.
 *
 * Catatan pengisian (penting untuk siapa pun yang melanjutkan):
 * regex tidak bisa menilai kalimat Inggris bebas — jawaban benar variasinya
 * tak terhingga, dan tes yang menolak jawaban benar dilarang di AGENTS.md.
 * Karena itu latihan track ini bertumpu pada `susunKode` (merangkai kalimat
 * dari potongan) dan kuis pilihan ganda. Step ngetik bebas HANYA untuk kasus
 * deterministik: menyisipkan tanda baca, memilih bentuk verb, mengganti satu
 * kata. Semua step memakai `language: "text"` — tidak ada yang dieksekusi.
 */
export const businessEnglishTrack: Track = {
  slug: "business-english",
  title: "Business English",
  description:
    "Menulis bahasa Inggris yang benar dan profesional untuk dunia kerja — dari struktur kalimat dan tanda baca sampai e-mail, memo, laporan, dan résumé.",
  hours: 45,
  recommendedPrereqs: [],
  color: "bg-pink-600",
  icon: "✉️",
  order: 17,
  modules: [
    // ================================================================
    // MODUL 0 — Persiapan
    // ================================================================
    {
      slug: "persiapan-belajar",
      title: "Persiapan & Alat Belajar",
      description:
        "Menyiapkan kamus, pemeriksa tulisan, dan kebiasaan latihan sebelum masuk ke materi. Termasuk menaksir level kemampuanmu sekarang.",
      topics: [
        "Kenapa Business English berbeda dari English sehari-hari",
        "Menyiapkan kamus & thesaurus (Merriam-Webster, Cambridge)",
        "Memasang pemeriksa tulisan: LanguageTool & spell check",
        "Mengenal level CEFR dan menaksir posisimu",
        "Cara berlatih: menulis harian dan membaca contoh nyata",
        "American vs British English: pilih satu, lalu konsisten",
      ],
      items: [
        {
          kind: "materi",
          id: "beng-0-m1",
          title: "Sebelum Mulai: Alat, Level, dan Cara Berlatih",
          body:
            "# Business English bukan English yang lebih sulit\n\n" +
            "Business English bukan dialek terpisah dan bukan versi English yang lebih rumit. " +
            "Yang membedakannya adalah **tuntutan ketepatan**. Dalam obrolan sehari-hari, kalimat berantakan masih tertolong " +
            "oleh nada suara, ekspresi wajah, dan kesempatan bertanya ulang. Dalam e-mail ke klien, tidak ada satu pun dari itu. " +
            "Yang sampai ke pembaca hanya deretan kata, dan kalau deretan itu ambigu, kamu baru tahu setelah salah paham terlanjur terjadi.\n\n" +
            "Karena itu track ini lebih banyak membahas kejelasan daripada kosakata. Orang yang kosakatanya sedang tapi kalimatnya rapi " +
            "hampir selalu terbaca lebih profesional daripada orang yang kosakatanya luas tapi kalimatnya berantakan.\n\n" +
            "## Peta modul\n\n" +
            "| Modul | Yang dibangun |\n" +
            "| --- | --- |\n" +
            "| 1. Dasar Kalimat | Kalimat yang utuh dan tidak menggantung |\n" +
            "| 2. Tanda Baca | Koma, titik koma, apostrof — sumber salah paling sering |\n" +
            "| 3. Bekerja dengan Kata | Kata yang tertukar, ejaan, register |\n" +
            "| 4. Pembelajar Non-Native | Article, tense, preposition — jebakan khas kita |\n" +
            "| 5. Paragraf | Merangkai kalimat jadi satu ide utuh |\n" +
            "| 6. Proses Menulis | Dari halaman kosong ke draf yang layak dikirim |\n" +
            "| 7. Prinsip Business Writing | Style, nada, dan batas plagiarisme |\n" +
            "| 8. Dokumen Bisnis | E-mail, memo, proposal, laporan, résumé |\n\n" +
            "## Alat yang perlu disiapkan\n\n" +
            "Tiga saja, semuanya gratis:\n\n" +
            "```text\n" +
            "1. Kamus  — Merriam-Webster (American) atau Cambridge (British).\n" +
            "            Pakai kamus Inggris-Inggris, bukan Inggris-Indonesia.\n" +
            "2. Thesaurus — untuk mencari kata yang lebih tepat, BUKAN yang\n" +
            "            terdengar lebih pintar.\n" +
            "3. LanguageTool atau spell check bawaan editor — jaring pengaman\n" +
            "            terakhir, bukan pengganti pemahaman.\n" +
            "```\n\n" +
            "Kamus Inggris-Inggris terasa lambat di awal, tapi ia memberi sesuatu yang kamus dwibahasa tidak berikan: " +
            "contoh pemakaian dalam kalimat. Arti kata jarang jadi masalah; yang jadi masalah adalah kata itu biasanya dipakai bersama kata apa.\n\n" +
            "## Menaksir level: CEFR\n\n" +
            "CEFR adalah skala Eropa yang dipakai hampir semua penyedia tes bahasa. Enam tingkat, dari A1 sampai C2. " +
            "Untuk pekerjaan kantoran, patokan kasarnya B2 — bisa menulis e-mail, laporan pendek, dan mengikuti rapat tanpa terlalu tertinggal. " +
            "Track ini menargetkan seseorang di sekitar A2–B1 dan membawanya ke B2 dalam ranah tulisan.\n\n" +
            "Kamu tidak perlu tes resmi untuk memulai. Tes mandiri gratis dari Cambridge atau EF cukup untuk tahu kamu ada di mana.\n\n" +
            "## Jebakan yang sering terjadi di awal\n\n" +
            "**Menghafal daftar kosakata tanpa konteks.** Ini kebiasaan yang paling sering muncul dan paling sedikit hasilnya. " +
            "Kata yang dihafal lepas dari kalimatnya akan dipakai di tempat yang salah — `commence` dipakai di chat santai, `stuff` dipakai di laporan resmi.\n\n" +
            "**Mencampur American dan British English dalam satu dokumen.** `organize` di paragraf pertama lalu `organisation` di paragraf ketiga " +
            "adalah hal yang langsung terlihat oleh pembaca native. Pilih satu di awal — American lebih umum di perusahaan teknologi — lalu konsisten sampai akhir.\n\n" +
            "**Menyerahkan semuanya ke spell check.** Alat itu tidak bisa membedakan `their` dan `there`, karena dua-duanya kata yang benar. " +
            "Kesalahan yang paling memalukan justru yang lolos dari spell check.\n\n" +
            "## Kaitan ke dunia kerja\n\n" +
            "Tulisan adalah hal pertama yang dinilai dari kamu sebelum siapa pun bertemu denganmu: cover letter, e-mail lamaran, pesan pertama ke klien. " +
            "Dalam proses rekrutmen perusahaan asing, penyaringan awal sering dilakukan dari tulisan, bukan wawancara. " +
            "Dan setelah diterima pun, sebagian besar komunikasi kerja modern berbentuk tulisan — e-mail, dokumen, dan pesan tertulis " +
            "yang dibaca orang yang tidak bisa langsung bertanya balik kepadamu.\n\n" +
            "## Cara berlatih di luar track ini\n\n" +
            "Menulis tiga sampai lima kalimat setiap hari jauh lebih berguna daripada satu jam sekali seminggu. " +
            "Isinya bebas: ringkasan pekerjaan hari itu, catatan rapat, atau balasan e-mail yang kamu tulis ulang dengan lebih rapi. " +
            "Bacaan yang paling terjangkau untuk memulai adalah dokumen yang memang sudah kamu baca — rilis produk, syarat dan ketentuan, " +
            "atau pengumuman resmi perusahaan. Semuanya ditulis dengan register bisnis yang sedang kita pelajari.",
        },
      ],
    },

    // ================================================================
    // MODUL 1 — Dasar Kalimat (bab 1)
    // ================================================================
    {
      slug: "dasar-kalimat",
      title: "Dasar Kalimat",
      description:
        "Apa yang membuat sebuah kalimat utuh, dan empat kesalahan yang paling merusak kredibilitas tulisan.",
      topics: [
        "Komponen kalimat: subject, verb, dan complete thought",
        "Empat kesalahan fatal: fragment, run-on, comma splice, subject-verb disagreement",
        "Subject-verb agreement",
        "Verb tense yang konsisten dalam satu tulisan",
        "Capitalization",
        "Pronoun: bentuk dan kejelasan acuan",
        "Adjective dan adverb",
        "Misplaced dan dangling modifier",
      ],
      items: [
        {
          kind: "materi",
          id: "beng-1-m1",
          title: "Anatomi Kalimat yang Utuh",
          body:
            "# Tiga syarat sebuah kalimat\n\n" +
            "Kalimat Inggris yang utuh butuh tiga hal sekaligus: **subject** (siapa atau apa), **verb** (apa yang terjadi), " +
            "dan **complete thought** (bisa berdiri sendiri tanpa membuat pembaca menunggu kelanjutan). " +
            "Dua yang pertama mudah dicek. Yang ketiga yang sering luput.\n\n" +
            "```text\n" +
            "The server crashed.              → subject + verb + ide utuh  ✅\n" +
            "The server crashing.             → tidak ada verb utuh        ❌\n" +
            "When the server crashed.         → lengkap, tapi menggantung  ❌\n" +
            "```\n\n" +
            "Baris ketiga punya subject dan verb, tapi kata `When` mengubahnya jadi anak kalimat. " +
            "Pembaca menunggu kelanjutan yang tidak pernah datang. Inilah yang disebut **fragment**.\n\n" +
            "## Empat kesalahan fatal\n\n" +
            "| Kesalahan | Bentuknya | Perbaikannya |\n" +
            "| --- | --- | --- |\n" +
            "| Fragment | `Because the build failed.` | Sambungkan ke induk kalimat |\n" +
            "| Run-on | `The build failed we rolled back.` | Pisahkan dengan titik |\n" +
            "| Comma splice | `The build failed, we rolled back.` | Ganti koma jadi titik, titik koma, atau tambah `so` |\n" +
            "| Subject-verb disagreement | `The list of errors are long.` | `is` — subjeknya `list`, bukan `errors` |\n\n" +
            "Disebut fatal bukan karena paling sulit diperbaiki, tapi karena paling cepat terlihat. " +
            "Pembaca yang menemukan comma splice di kalimat pertama akan membaca sisa tulisanmu dengan kecurigaan.\n\n" +
            "## Subject-verb agreement dan jebakan frasa penyisip\n\n" +
            "Verb mengikuti subject, bukan kata terdekat sebelumnya. Jebakan ini sering terjadi ketika ada frasa " +
            "yang menyisip di antara keduanya:\n\n" +
            "```text\n" +
            "The list of open issues is growing.\n" +
            "         ~~~~~~~~~~~~~~ frasa penyisip — abaikan saat memilih verb\n" +
            "^^^^ subject sebenarnya: list (tunggal) → is\n" +
            "```\n\n" +
            "Cara cepat memeriksanya: tutup frasa yang diawali `of`, `with`, `along with`, `as well as`, lalu baca ulang.\n\n" +
            "## Modifier yang salah tempat\n\n" +
            "**Misplaced modifier** adalah keterangan yang duduk di sebelah kata yang salah, dan hasilnya sering tidak sengaja lucu. " +
            "**Dangling modifier** lebih halus: keterangannya tidak punya kata yang diterangkan sama sekali.\n\n" +
            "```text\n" +
            "❌ After reviewing the logs, the bug was obvious.\n" +
            "   → siapa yang me-review? Kalimat ini bilang: bug-nya yang me-review.\n" +
            "✅ After reviewing the logs, I found the bug obvious.\n" +
            "```\n\n" +
            "Aturan praktisnya: kalau kalimat diawali frasa `-ing` atau `After/Before + -ing`, kata pertama setelah koma " +
            "harus orang atau benda yang melakukan hal itu.\n\n" +
            "## Hal lain yang dibereskan di modul ini\n\n" +
            "**Verb tense** harus konsisten dalam satu tulisan — laporan yang loncat dari past ke present tanpa alasan membuat pembaca " +
            "kehilangan pegangan waktu. **Capitalization** punya aturan yang lebih ketat daripada bahasa Indonesia: nama hari, nama bulan, " +
            "nama bahasa, dan nama bangsa selalu huruf besar. **Pronoun** harus jelas acuannya — `it` yang bisa merujuk ke dua benda sekaligus " +
            "adalah sumber ambiguitas favorit di dokumen teknis. **Adjective** menerangkan noun, **adverb** menerangkan verb; " +
            "campur aduk keduanya (`He works good`) adalah penanda tulisan yang belum matang.\n\n" +
            "## Kaitan ke dunia kerja\n\n" +
            "Fragment dan comma splice adalah dua hal yang paling sering ditandai reviewer saat memeriksa dokumentasi, deskripsi produk, " +
            "atau pesan yang akan dikirim ke pelanggan. Di banyak perusahaan, dokumentasi melewati review yang sama ketatnya dengan code review — " +
            "dan koreksi yang berulang untuk kesalahan yang sama akan diingat. Menguasai satu modul ini saja sudah menghapus " +
            "sebagian besar catatan yang biasanya muncul.",
        },
      ],
    },

    // ================================================================
    // MODUL 2 — Tanda Baca (bab 2)
    // ================================================================
    {
      slug: "tanda-baca",
      title: "Tanda Baca",
      description:
        "Delapan tanda baca yang menentukan apakah kalimatmu terbaca sesuai maksud — koma, titik koma, titik dua, kutip, apostrof, kurung, dash, dan hyphen.",
      topics: [
        "Comma: pemakaian yang benar dan yang berlebihan",
        "Semicolon: menyambung dua kalimat setara",
        "Colon: memperkenalkan daftar dan penjelasan",
        "Quotation marks: kutipan langsung dan judul",
        "Apostrophe: kepemilikan dan kontraksi",
        "Parentheses: informasi tambahan",
        "Dash: jeda yang menekankan",
        "Hyphen: menggabungkan kata jadi satu makna",
      ],
      items: [
        {
          kind: "materi",
          id: "beng-2-m1",
          title: "Tanda Baca sebagai Rambu Lalu Lintas Kalimat",
          body:
            "# Kenapa tanda baca mengubah arti\n\n" +
            "Tanda baca bukan hiasan. Ia menandai di mana pembaca harus berhenti, apa yang menempel pada apa, " +
            "dan bagian mana yang boleh dilewati. Contoh klasik yang tidak pernah usang:\n\n" +
            "```text\n" +
            "Let's eat, Grandma.     → mengajak nenek makan\n" +
            "Let's eat Grandma.      → mengajak makan nenek\n" +
            "```\n\n" +
            "Perbedaannya satu koma. Dalam konteks kerja, kasusnya jarang selucu itu tapi akibatnya lebih mahal: " +
            "klausa kontrak, spesifikasi, dan instruksi teknis pernah disengketakan gara-gara satu koma.\n\n" +
            "## Delapan tanda dan tugasnya\n\n" +
            "| Tanda | Tugas utama | Contoh |\n" +
            "| --- | --- | --- |\n" +
            "| Comma `,` | Memisahkan bagian dalam satu kalimat | `After the meeting, we shipped the fix.` |\n" +
            "| Semicolon `;` | Menyambung dua kalimat utuh yang berkaitan | `The API is stable; the docs are not.` |\n" +
            "| Colon `:` | Memperkenalkan daftar atau penjelasan | `We need three things: scope, budget, and a deadline.` |\n" +
            "| Quotation `\" \"` | Menandai kutipan langsung dan judul | `She said, \"Ship it Monday.\"` |\n" +
            "| Apostrophe `'` | Kepemilikan dan kontraksi | `the client's request` / `it's ready` |\n" +
            "| Parentheses `( )` | Informasi tambahan yang bisa dilewati | `The release (delayed twice) is live.` |\n" +
            "| Dash `—` | Jeda yang menekankan | `One thing matters here—the deadline.` |\n" +
            "| Hyphen `-` | Menyatukan kata jadi satu makna | `a well-known issue` |\n\n" +
            "## Jebakan apostrof: `its` versus `it's`\n\n" +
            "Ini kesalahan tanda baca paling sering dalam bahasa Inggris tulisan, dan tidak akan pernah ditangkap spell check " +
            "karena dua-duanya kata yang sah.\n\n" +
            "```text\n" +
            "it's  = it is / it has          → It's down again.\n" +
            "its   = milik it (kepemilikan)  → The server lost its connection.\n" +
            "```\n\n" +
            "Cara mengeceknya satu detik: coba baca ulang kalimatmu dengan `it is`. Kalau masih masuk akal, pakai `it's`. Kalau tidak, pakai `its`.\n\n" +
            "Jebakan kedua yang serupa: apostrof **tidak dipakai** untuk membuat bentuk jamak. `Three PDF's` salah; " +
            "yang benar `three PDFs`. Kesalahan ini punya julukan sendiri di kalangan penyunting karena begitu seringnya muncul di papan nama toko.\n\n" +
            "## Comma splice sekali lagi, dari sisi tanda baca\n\n" +
            "Dua kalimat utuh tidak boleh disambung dengan koma saja. Ada empat jalan keluar, dan memilih di antaranya " +
            "adalah keputusan gaya, bukan benar-salah:\n\n" +
            "```text\n" +
            "❌ The tests passed, we deployed.\n" +
            "✅ The tests passed. We deployed.          (paling netral)\n" +
            "✅ The tests passed; we deployed.          (menekankan hubungan)\n" +
            "✅ The tests passed, so we deployed.       (menyebut sebabnya)\n" +
            "✅ Because the tests passed, we deployed.  (menonjolkan sebab)\n" +
            "```\n\n" +
            "## Hyphen, en dash, em dash\n\n" +
            "Tiga garis dengan panjang dan tugas berbeda, dan ini sering keliru: hyphen `-` menyatukan kata " +
            "(`a two-week sprint`), en dash `–` menyatakan rentang (`2019–2024`), em dash `—` memberi jeda dramatis di dalam kalimat. " +
            "Dalam tulisan kerja sehari-hari, hyphen dan em dash yang paling sering kamu butuhkan.\n\n" +
            "Perhatikan bahwa hyphen mengubah arti secara nyata: `a small business owner` bisa berarti pemilik usaha kecil " +
            "atau pemilik usaha yang bertubuh kecil. `A small-business owner` hanya punya satu arti.\n\n" +
            "## Kaitan ke dunia kerja\n\n" +
            "Dalam code review dan review dokumen, koma berlebihan dan comma splice adalah dua catatan yang paling sering muncul " +
            "pada tulisan penutur non-native. Keduanya bisa dihapus permanen dari kebiasaanmu dalam satu modul, " +
            "dan efeknya langsung terasa: tulisanmu berhenti terdengar seperti terjemahan.",
        },
        {
          kind: "step",
          id: "beng-2-1",
          title: "Koma Setelah Frasa Pembuka",
          explanation:
            "Frasa pembuka (*introductory phrase*) yang panjang di awal kalimat harus diikuti koma sebelum klausa utama dimulai. " +
            "Koma ini bertugas memberi jeda bagi pembaca agar mereka bisa membedakan latar belakang dari pesan inti kalimat. " +
            "Tanpa koma, kata pertama klausa utama sering terbaca menempel pada frasa pembuka sehingga membingungkan. " +
            "Di dunia kerja, kebiasaan memasang koma setelah frasa pembuka seperti `After reviewing the report` membuat dokumen teknis dan e-mail bisnis jauh lebih rapi.",
          example: {
            code:
              "❌ Before submitting the proposal we double-checked all figures.\n" +
              "✅ Before submitting the proposal, we double-checked all figures.",
            output:
              "Sebelum : frasa pembuka menempel langsung ke klausa utama tanpa jeda.\n" +
              "Sesudah : koma memberi jeda jernih antara latar belakang dan aksi utama.",
            note: "Jika frasa keterangan berada di akhir kalimat, koma biasanya tidak diperlukan.",
          },
          instruction:
            "Sisipkan koma setelah frasa pembuka `After reviewing the quarterly report` untuk memisahkannya dari klausa utama.",
          starterCode:
            "After reviewing the quarterly report we updated the budget forecast.",
          language: "text",
          tests: [
            {
              pattern:
                "After\\s+reviewing\\s+the\\s+quarterly\\s+report\\s*,\\s*we\\s+updated",
              flags: "i",
              message:
                "Sisipkan koma tepat setelah `report` sebelum klausa utama `we updated`.",
            },
            {
              pattern: "quarterly\\s+report\\s+we\\s+updated",
              flags: "i",
              mustNotMatch: true,
              message:
                "Koma setelah `report` belum ada — pisahkan frasa pembuka dari klausa utama.",
            },
          ],
          solution:
            "After reviewing the quarterly report, we updated the budget forecast.",
          susunKode: {
            question:
              "Susun kalimat ini dengan koma yang memisahkan frasa pembuka dari klausa utama.",
            potongan: [
              "After reviewing",
              "the quarterly report,",
              "we updated",
              "the budget forecast.",
            ],
            pengecoh: [
              "the quarterly report.",
              "and we updated",
            ],
            pemisah: " ",
            explanation:
              "Koma wajib diletakkan di akhir frasa pembuka sebelum klausa utama. Pengecoh bertitik pada frasa pembuka sering ditulis penutur Indonesia karena keliru menganggap frasa tersebut sebagai kalimat utuh. Pengecoh yang menambahkan 'and' juga menggoda dan sering keliru dipakai karena memuat kata hubung berlebih yang merusak alur frasa pembuka.",
          },
        },
        {
          kind: "step",
          id: "beng-2-2",
          title: "Titik Dua Memperkenalkan Daftar",
          explanation:
            "Titik dua (`:`) bertugas memperkenalkan daftar, penjelasan, atau rincian yang menguatkan klausa utama sebelumnya. " +
            "Klausa sebelum titik dua wajib berupa kalimat yang utuh (*complete thought*) — kamu tidak boleh menaruh titik dua langsung setelah kata kerja seperti `are` atau `include`. " +
            "Tanda titik dua memberi sinyal kuat kepada pembaca bahwa rincian penting akan segera menyusul. " +
            "Dalam e-mail dan memo bisnis, penggunaan titik dua sebelum daftar membuat poin-poin persyaratan atau hasil rapat terlihat profesional.",
          example: {
            code:
              "❌ We need two approvals legal and finance.\n" +
              "✅ We need two approvals: legal and finance.",
            output:
              "Sebelum : daftar rincian menempel tanpa tanda pengenal.\n" +
              "Sesudah : titik dua secara resmi memperkenalkan rincian daftar.",
            note: "Pastikan bagian sebelum titik dua adalah kalimat yang bisa berdiri sendiri.",
          },
          instruction:
            "Sisipkan titik dua (colon `:`) setelah kata `items` untuk memperkenalkan daftar persyaratan proyek.",
          starterCode:
            "The client requested three items a revised timeline, a cost breakdown, and a sample prototype.",
          language: "text",
          tests: [
            {
              pattern: "three\\s+items\\s*:\\s*a\\s+revised",
              flags: "i",
              message:
                "Ganti spasi setelah `items` dengan titik dua `:` untuk memperkenalkan daftar.",
            },
            {
              pattern: "three\\s+items\\s+a\\s+revised",
              flags: "i",
              mustNotMatch: true,
              message:
                "Titik dua setelah `items` belum ditambahkan — daftar rincian harus diawali titik dua.",
            },
          ],
          solution:
            "The client requested three items: a revised timeline, a cost breakdown, and a sample prototype.",
          susunKode: {
            question:
              "Susun kalimat ini dengan titik dua yang tepat untuk memperkenalkan daftar rincian.",
            potongan: [
              "The client requested three items:",
              "a revised timeline, a cost breakdown, and a sample prototype.",
            ],
            pengecoh: [
              "The client requested three items,",
              "The client requested three items;",
            ],
            pemisah: " ",
            explanation:
              "Titik dua adalah tanda yang tepat untuk memperkenalkan daftar setelah klausa utuh. Pengecoh berkoma menggoda karena penutur Indonesia sering memakai koma untuk fungsi ini, padahal koma memicu struktur kalimat yang lemah. Pengecoh titik koma juga keliru karena titik koma menyambung dua klausa setara, bukan memperkenalkan daftar rincian.",
          },
        },
        {
          kind: "step",
          id: "beng-2-3",
          title: "Memperbaiki Comma Splice",
          explanation:
            "Dua kalimat yang sama-sama utuh tidak boleh disambung hanya dengan koma — kesalahan ini bernama comma splice. " +
            "Koma bertugas memisahkan bagian DI DALAM satu kalimat, bukan menyambung dua kalimat penuh. " +
            "Ada empat jalan keluar yang sama-sama benar: titik, titik koma, koma plus conjunction seperti `so`, " +
            "atau mengubah salah satunya jadi anak kalimat dengan `because`. Pilihannya soal penekanan, bukan benar-salah. " +
            "Titik koma dipakai kalau dua kalimat itu berkaitan sangat erat dan kamu ingin pembaca membacanya sebagai satu tarikan napas.",
          example: {
            code:
              "❌ The invoice arrived late, the client complained.\n" +
              "✅ The invoice arrived late; the client complained.",
            output:
              "Sebelum : dua kalimat utuh disambung koma — comma splice.\n" +
              "Sesudah : titik koma menyambung keduanya sebagai kalimat setara.",
            note: "Cara mengeceknya: tutup bagian sebelum koma. Kalau sisanya masih kalimat utuh, koma itu salah.",
          },
          instruction:
            "Kalimat di editor menyambung dua kalimat utuh hanya dengan koma. Perbaiki memakai tanda baca " +
            "yang menyatakan keduanya setara dan berkaitan erat — jangan memecahnya jadi dua kalimat terpisah.",
          starterCode: "The tests passed, we shipped the release.",
          language: "text",
          tests: [
            {
              pattern: "passed\\s*;\\s*we\\s+shipped",
              flags: "i",
              message:
                "Ganti koma setelah `passed` dengan titik koma — dua kalimat utuh tidak bisa disambung koma.",
            },
            {
              pattern: "passed\\s*,\\s*we",
              flags: "i",
              mustNotMatch: true,
              message:
                "Koma setelah `passed` masih ada, jadi comma splice-nya belum hilang.",
            },
          ],
          solution: "The tests passed; we shipped the release.",
          susunKode: {
            question:
              "Sambungkan dua kalimat ini sebagai dua pernyataan setara yang berkaitan erat.",
            potongan: ["The tests passed;", "we shipped the release."],
            pengecoh: ["The tests passed,", "The tests passed."],
            pemisah: " ",
            explanation:
              "Titik koma menyambung dua kalimat utuh tanpa menjadikan salah satunya anak kalimat. " +
              "Pengecoh berkoma menggoda karena itulah yang paling sering ditulis penutur Indonesia — " +
              "dalam bahasa Indonesia koma memang boleh menyambung dua klausa, jadi kebiasaannya terbawa. " +
              "Pengecoh bertitik juga menggoda dan sebenarnya tidak salah secara tata bahasa, tapi ia memutus " +
              "hubungan erat antara kedua kalimat, dan itu bukan yang diminta soal ini.",
          },
        },
        {
          kind: "step",
          id: "beng-2-4",
          title: "Kepemilikan vs Kontraksi: its vs it's",
          explanation:
            "Penulisan `it's` dan `its` adalah jebakan paling sering di tulisan bisnis karena pemeriksa ejaan tidak akan mendeteksi kesalahan ini. " +
            "Kata `it's` selalu merupakan kontraksi atau singkatan dari `it is` atau `it has`. " +
            "Sementara itu, `its` (tanpa apostrof) adalah pronoun kepemilikan seperti `his` atau `her`. " +
            "Uji sederhana yang bisa kamu pakai: ganti kata tersebut dengan `it is` — jika kalimatnya menjadi aneh, gunakan `its`. " +
            "Dalam dokumen hukum dan laporan perusahaan, salah memakai `it's` di tempat kepemilikan dapat merusak kredibilitas profesionalitas tulisanmu.",
          example: {
            code:
              "❌ The server lost it's connection during backup.\n" +
              "✅ The server lost its connection during backup.",
            output:
              "Sebelum : it's (it is) dipakai untuk kepemilikan server — salah tata bahasa.\n" +
              "Sesudah : its dipakai secara tepat menandakan kepemilikan tanpa apostrof.",
            note: "Pronoun kepemilikan (its, his, hers, ours, theirs) tidak pernah menggunakan apostrof.",
          },
          instruction:
            "Kalimat di editor menggunakan `it's` untuk menyatakan kepemilikan. Ganti `it's` menjadi `its` tanpa apostrof.",
          starterCode:
            "The software company updated it's privacy policy yesterday.",
          language: "text",
          tests: [
            {
              pattern: "updated\\s+its\\s+privacy",
              flags: "i",
              message:
                "Ganti `it's` menjadi `its` tanpa apostrof untuk menyatakan kepemilikan.",
            },
            {
              pattern: "updated\\s+it's\\s+privacy",
              flags: "i",
              mustNotMatch: true,
              message:
                "`it's` dengan apostrof masih ada — `it's` berarti `it is`, bukan kepemilikan.",
            },
          ],
          solution:
            "The software company updated its privacy policy yesterday.",
          susunKode: {
            question:
              "Susun kalimat ini dengan kata kepemilikan yang tepat tanpa apostrof.",
            potongan: [
              "The software company",
              "updated",
              "its",
              "privacy policy yesterday.",
            ],
            pengecoh: ["it's", "its'"],
            pemisah: " ",
            explanation:
              "Bentuk kepemilikan untuk kata 'it' adalah 'its' tanpa apostrof. Pengecoh 'it's' sangat menggoda bagi penutur Indonesia karena adanya jebakan kebiasaan menganggap semua bentuk kepemilikan membutuhkan apostrof. Pengecoh 'its'' juga keliru karena bentuk tersebut tidak pernah ada dalam aturan tata bahasa Inggris.",
          },
        },
        {
          kind: "step",
          id: "beng-2-5",
          title: "Bentuk Jamak Akronim Tanpa Apostrof",
          explanation:
            "Apostrof berfungsi menandai kepemilikan (*possession*) atau kontraksi, bukan untuk membuat bentuk jamak (*plural*). " +
            "Singkatan, akronim, atau angka jamak seperti `PDFs`, `KPIs`, `CEOs`, atau `1990s` cukup ditambahkan huruf `s` kecil di akhir tanpa apostrof. " +
            "Penulisan `PDF's` secara tata bahasa berarti 'milik PDF' atau 'PDF is', bukan jamak. " +
            "Kesalahan ini sangat sering ditemui pada pengumuman bisnis dan e-mail kantor. " +
            "Menguasai aturan ini memastikan tulisan bisnismu bersih dari kesalahan tanda baca mendasar yang sering disindir penyunting profesional.",
          example: {
            code:
              "❌ We reviewed the main KPI's during the meeting.\n" +
              "✅ We reviewed the main KPIs during the meeting.",
            output:
              "Sebelum : KPI's memakai apostrof untuk bentuk jamak — tidak tepat.\n" +
              "Sesudah : KPIs ditulis jamak dengan s kecil tanpa apostrof.",
            note: "Gunakan apostrof pada akronim hanya jika memang menyatakan kepemilikan, seperti 'the CEO's decision'.",
          },
          instruction:
            "Perbaiki kesalahan apostrof pada kata jamak di editor. Hapus apostrof pada `PDF's` sehingga menjadi `PDFs`.",
          starterCode:
            "Please convert all the PDF's before sending them to the client.",
          language: "text",
          tests: [
            {
              pattern: "all\\s+the\\s+PDFs\\s+before",
              flags: "i",
              message:
                "Tulis `PDFs` tanpa apostrof untuk menyatakan bentuk jamak.",
            },
            {
              pattern: "PDF's",
              flags: "i",
              mustNotMatch: true,
              message:
                "`PDF's` masih menggunakan apostrof — apostrof tidak dipakai membuat bentuk jamak.",
            },
          ],
          solution:
            "Please convert all the PDFs before sending them to the client.",
          susunKode: {
            question:
              "Susun kalimat ini dengan bentuk jamak akronim yang benar tanpa apostrof.",
            potongan: [
              "Please convert all the PDFs",
              "before sending them to the client.",
            ],
            pengecoh: [
              "Please convert all the PDF's",
              "Please convert all the PDFes",
            ],
            pemisah: " ",
            explanation:
              "Bentuk jamak dari akronim seperti PDF dibuat dengan menambah 's' kecil tanpa apostrof ('PDFs'). Pengecoh 'PDF's' sering menggoda penutur Indonesia karena kebiasaan keliru yang menganggap huruf kapital jamak perlu dipisah apostrof. Pengecoh 'PDFes' juga salah karena akronim tidak membutuhkan akhiran '-es'.",
          },
        },
        {
          kind: "step",
          id: "beng-2-6",
          title: "Hyphen pada Compound Modifier",
          explanation:
            "Dua atau lebih kata yang bekerja sama menerangkan kata benda di depannya disebut *compound modifier* dan harus dihubungkan dengan hyphen (`-`). " +
            "Tanpa hyphen, arti kalimat bisa berubah atau menjadi ambigu: `a small business owner` bisa ditafsirkan sebagai pemilik bisnis yang bertubuh kecil (*a business owner who is small*). " +
            "Dengan hyphen, `a small-business owner` secara tegas berarti pemilik dari usaha kecil (*small business*). " +
            "Hubungan ini berlaku ketika frasa tersebut terletak *sebelum* kata benda yang diterangkan. " +
            "Menggunakan hyphen dengan tepat menunjukkan ketelitian tinggi dalam menyusun dokumen bisnis dan proposal.",
          example: {
            code:
              "❌ We need a long term strategy for growth.\n" +
              "✅ We need a long-term strategy for growth.",
            output:
              "Sebelum : long term tanpa hyphen dapat membuat frasa terasa terpisah.\n" +
              "Sesudah : long-term dihubungkan hyphen menjadi satu sifat majemuk utuh.",
            note: "Jika kata sifat majemuk berada setelah kata benda (misal: 'the strategy is long term'), hyphen tidak dipakai.",
          },
          instruction:
            "Sisipkan hyphen (`-`) di antara kata `small` dan `business` untuk membentuk kata sifat majemuk yang menerangkan `owner`.",
          starterCode:
            "She is a small business owner who manages fifty employees.",
          language: "text",
          tests: [
            {
              pattern: "a\\s+small-business\\s+owner",
              flags: "i",
              message:
                "Hubungkan `small` dan `business` dengan hyphen `-` menjadi `small-business`.",
            },
            {
              pattern: "small\\s+business\\s+owner",
              flags: "i",
              mustNotMatch: true,
              message:
                "Hyphen antara `small` dan `business` belum ada — gabungkan dua kata sifat sebelum kata benda.",
            },
          ],
          solution:
            "She is a small-business owner who manages fifty employees.",
          susunKode: {
            question:
              "Susun kalimat ini dengan hyphen yang tepat pada kata sifat majemuk.",
            potongan: [
              "She is a",
              "small-business",
              "owner who manages",
              "fifty employees.",
            ],
            pengecoh: ["small business", "small, business"],
            pemisah: " ",
            explanation:
              "Frasa 'small-business' wajib dihubungkan dengan hyphen ketika berdiri di depan kata benda 'owner' untuk membentuk kata sifat majemuk. Pengecoh tanpa hyphen menggoda karena penutur Indonesia sering keliru dan tidak terbiasa menggunakan tanda hyphen pada frasa sifat gabungan. Pengecoh berkoma juga salah karena koma memisahkan dua kata sifat sederajat.",
          },
        },
        {
          kind: "step",
          id: "beng-2-7",
          title: "Kutipan Langsung dan Tanda Baca Pengantar",
          explanation:
            "Kutipan langsung yang diawali frasa dialog (*reporting clause* seperti `said`, `stated`, `replied`) harus dipisahkan oleh koma sebelum tanda kutip pembuka. " +
            "Dalam standar ejaan Business English (terutama American English), tanda titik atau koma yang mengakhiri kutipan diletakkan di *dalam* tanda kutip penutup. " +
            "Huruf pertama dari kutipan langsung berupa kalimat utuh juga harus ditulis dengan huruf kapital. " +
            "Mengetahui tata cara memasang tanda kutip sangat berguna saat menulis memo, berita acara rapat, atau pengutipan ucapan klien.",
          example: {
            code:
              '❌ The director announced "Our revenue increased by twenty percent."\n' +
              '✅ The director announced, "Our revenue increased by twenty percent."',
            output:
              "Sebelum : frasa pengantar pengutip menempel ke kutipan tanpa koma.\n" +
              "Sesudah : koma memisahkan frasa pengantar dengan kutipan langsung secara konsisten.",
            note: "Dalam American English, koma dan titik di akhir kutipan selalu berada di dalam tanda kutip.",
          },
          instruction:
            "Sisipkan koma setelah `said` sebelum tanda kutip pembuka pada kalimat kutipan langsung di editor.",
          starterCode:
            'The project manager said "We will extend the deadline by two days."',
          language: "text",
          tests: [
            {
              pattern: 'manager\\s+said\\s*,\\s*"We',
              flags: "i",
              message:
                'Tambahkan koma setelah `said` sebelum tanda kutip pembuka `"We`.',
            },
            {
              pattern: 'manager\\s+said\\s+"We',
              flags: "i",
              mustNotMatch: true,
              message:
                "Koma setelah `said` belum ditambahkan — pisahkan frasa pengantar dengan kutipan langsung.",
            },
            {
              pattern: 'days\\."\\s*,',
              flags: "i",
              mustNotMatch: true,
              message:
                "Tanda koma tidak boleh diletakkan setelah tanda kutip penutup.",
            },
          ],
          solution:
            'The project manager said, "We will extend the deadline by two days."',
          susunKode: {
            question:
              "Susun kalimat kutipan langsung ini dengan tanda koma pengantar yang tepat.",
            potongan: [
              "The project manager",
              " said,",
              ' "We will extend the deadline',
              ' by two days."',
            ],
            pengecoh: [
              " said;",
              ' by two days.",',
            ],
            pemisah: "",
            explanation:
              'Kutipan langsung diawali dengan koma setelah frasa pengantar "said,". Pengecoh bertitik koma "said;" menggoda namun keliru karena titik koma tidak dipakai sebelum kutipan langsung. Pengecoh dengan koma di luar tanda kutip "by two days.", menggoda penutur Indonesia padahal dilarang dalam standar American English.',
          },
        },
        {
          kind: "quiz",
          id: "beng-2-kuis",
          title: "Kuis: Tanda Baca dalam Business English",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Seorang rekan kerja menulis e-mail: 'The client accepted our proposal, we will start work on Monday.' Mengapa kalimat tersebut ditandai salah oleh penyunting?",
              code: "The client accepted our proposal, we will start work on Monday.",
              choices: [
                "A. Terjadi kesalahan comma splice karena dua kalimat utuh hanya disambung dengan koma.",
                "B. Kata acceptance seharusnya digunakan sebagai pengganti accepted.",
                "C. Tanda koma seharusnya diletakkan setelah kata accepted.",
                "D. Kalimat tersebut kekurangan kata depan at di depan kata Monday.",
              ],
              answerIndex: 0,
              explanation:
                "Dua kalimat utuh (independent clause) tidak boleh disambung dengan koma saja — kesalahan ini disebut comma splice. Solusi yang tepat adalah mengganti koma dengan titik koma (;), titik biasa (.), atau menambahkan conjunction seperti 'so'.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Pilih kalimat e-mail bisnis berikut yang menggunakan tanda apostrof secara BENAR:",
              choices: [
                "A. The company announced it's new product lineup this morning.",
                "B. The company announced its new product lineup this morning.",
                "C. The company announced its' new product lineup this morning.",
                "D. The company announced it is' new product lineup this morning.",
              ],
              answerIndex: 1,
              explanation:
                "Bentuk kepemilikan (possessive) untuk kata 'it' adalah 'its' tanpa apostrof. Pilihan A salah karena 'it's' merupakan singkatan dari 'it is'. Pilihan C salah karena bentuk 'its'' tidak pernah ada dalam tata bahasa Inggris.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Seorang manajer ingin meminta tiga dokumen laporan keuangan dalam format PDF. Manakah penulisan kata jamak akronim yang tepat?",
              choices: [
                "A. Please send me the three financial PDF's by 5 p.m.",
                "B. Please send me the three financial PDFs by 5 p.m.",
                "C. Please send me the three financial PDFes by 5 p.m.",
                "D. Please send me the three financial PDF'es by 5 p.m.",
              ],
              answerIndex: 1,
              explanation:
                "Bentuk jamak dari akronim seperti PDF cukup ditambahkan huruf 's' kecil di akhir tanpa apostrof ('PDFs'). Apostrof ('s) hanya digunakan untuk menyatakan kepemilikan, bukan bentuk jamak.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Perhatikan kalimat berikut: 'We interviewed a small business owner.' Apa perbedaan makna jika frasa tersebut ditulis sebagai 'a small-business owner' dengan hyphen?",
              choices: [
                "A. 'small-business owner' secara spesifik berarti pemilik usaha kecil, sedangkan tanpa hyphen bisa ditafsirkan pemilik usaha yang bertubuh kecil.",
                "B. 'small-business owner' menyatakan dua pemilik bisnis terpisah, sedangkan tanpa hyphen menyatakan satu pemilik.",
                "C. Tidak ada perbedaan makna; hyphen hanya hiasan visual tanpa aturan tata bahasa.",
                "D. 'small-business owner' adalah bentuk informal yang tidak boleh dipakai di dokumen resmi.",
              ],
              answerIndex: 0,
              explanation:
                "Hyphen pada compound modifier ('small-business') menggabungkan dua kata sifat menjadi satu makna tunggal sebelum kata benda 'owner'. Tanpa hyphen, 'small' bisa dianggap menerangkan 'owner' (pemilik bertubuh kecil), bukan 'business'.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Dalam dokumen proposal teknis, kapan kamu sebaiknya menggunakan em dash (—) alih-alih kurung (parentheses)?",
              choices: [
                "A. Ketika ingin memberikan jeda dramatis yang menekankan informasi penting di tengah kalimat.",
                "B. Ketika ingin menyembunyikan informasi yang tidak relevan dengan pembahasan.",
                "C. Ketika menulis daftar angka di akhir paragraf.",
                "D. Ketika mengutip ucapan langsung dari seorang direktur.",
              ],
              answerIndex: 0,
              explanation:
                "Em dash (—) digunakan untuk menciptakan jeda kuat yang menarik perhatian pembaca pada informasi penting. Sebaliknya, kurung (parentheses) digunakan untuk menyisipkan informasi sampingan yang bersifat opsional atau sekadar penjelasan tambahan.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Manakah dari empat kalimat berikut yang menggunakan tanda titik dua (colon `:`) secara BENAR?",
              choices: [
                "A. Our main goals are: to increase sales, reduce costs, and expand market share.",
                "B. We need three resources: budget, personnel, and equipment.",
                "C. The team includes: Alice, Bob, and Charlie.",
                "D. We should consider: revising the timeline.",
              ],
              answerIndex: 1,
              explanation:
                "Titik dua (:) hanya boleh diletakkan setelah klausa yang utuh (complete thought) seperti 'We need three resources'. Menaruh titik dua langsung setelah kata kerja 'are' atau 'includes' (seperti pada pilihan A dan C) adalah kesalahan tata bahasa yang sering terjadi.",
            },
          ],
        },
      ],
    },

    // ================================================================
    // MODUL 3 — Bekerja dengan Kata (bab 3)
    // ================================================================
    {
      slug: "bekerja-dengan-kata",
      title: "Bekerja dengan Kata",
      description:
        "Memilih kata yang tepat: pasangan kata yang tertukar, aturan ejaan, register formal, serta cara menebak arti dari konteks.",
      topics: [
        "Commonly confused words: their/there/they're, affect/effect",
        "Ejaan: aturan dan pengecualiannya",
        "Word choice: denotasi, konotasi, dan register",
        "Prefix dan suffix",
        "Synonym dan antonym",
        "Context clues: menebak arti tanpa membuka kamus",
      ],
      items: [
        {
          kind: "materi",
          id: "beng-3-m1",
          title: "Kata yang Tepat, Bukan Kata yang Terdengar Pintar",
          body:
            "# Dua kata yang artinya mirip jarang benar-benar sama\n\n" +
            "Setiap kata punya dua lapis makna. **Denotasi** adalah arti kamusnya. **Konotasi** adalah kesan yang menempel padanya. " +
            "`Cheap` dan `affordable` sama-sama berarti murah, tapi yang satu terdengar seperti keluhan dan yang lain seperti pujian. " +
            "Menukar keduanya di deskripsi produk bisa membalik pesanmu tanpa satu pun kata yang salah secara kamus.\n\n" +
            "| Kata | Denotasi | Konotasi |\n" +
            "| --- | --- | --- |\n" +
            "| `cheap` | harga rendah | murahan, kualitas meragukan |\n" +
            "| `affordable` | harga rendah | terjangkau, wajar |\n" +
            "| `stubborn` | tidak mau berubah | keras kepala (negatif) |\n" +
            "| `determined` | tidak mau berubah | gigih (positif) |\n\n" +
            "## Register: satu ide, tiga tingkat formalitas\n\n" +
            "Register adalah tingkat formalitas bahasa. Salah register lebih mengganggu daripada salah tata bahasa, " +
            "karena ia menyiratkan kamu tidak membaca situasi.\n\n" +
            "```text\n" +
            "Formal    : We would like to request an extension.\n" +
            "Netral    : Could we get a few more days?\n" +
            "Informal  : Any chance we can push this back?\n" +
            "```\n\n" +
            "Ketiganya benar. Yang menentukan pilihan adalah siapa pembacanya dan seberapa dekat hubunganmu dengannya.\n\n" +
            "## Pasangan kata yang tertukar\n\n" +
            "Daftar ini pendek tapi menyumbang porsi besar kesalahan tulisan kerja:\n\n" +
            "```text\n" +
            "their / there / they're   → milik mereka / di sana / they are\n" +
            "your / you're             → milik kamu / you are\n" +
            "affect / effect           → memengaruhi (verb) / dampak (noun)\n" +
            "then / than               → lalu (waktu) / daripada (perbandingan)\n" +
            "accept / except           → menerima / kecuali\n" +
            "advice / advise           → nasihat (noun) / menasihati (verb)\n" +
            "lose / loose              → kehilangan / longgar\n" +
            "```\n\n" +
            "Semuanya lolos spell check, karena semuanya kata yang benar — hanya di tempat yang salah.\n\n" +
            "## Ejaan: beberapa aturan, banyak pengecualian\n\n" +
            "Ejaan bahasa Inggris tidak konsisten karena kosakatanya diserap dari banyak bahasa. " +
            "Tetap ada beberapa aturan yang menutupi sebagian besar kasus:\n\n" +
            "```text\n" +
            "i sebelum e, kecuali setelah c   → believe, receive\n" +
            "   pengecualian: their, weird, foreign, height\n\n" +
            "Kata berakhir -e, tambah akhiran vokal → buang e-nya\n" +
            "   write + ing = writing,  use + able = usable\n\n" +
            "Satu vokal + satu konsonan di suku akhir bertekanan → gandakan\n" +
            "   run + ing = running,  refer + ed = referred\n\n" +
            "Kata berakhir konsonan + y → y jadi i\n" +
            "   apply + ed = applied,  busy + ness = business\n" +
            "```\n\n" +
            "Pengecualiannya memang harus dihafal, tapi jumlahnya jauh lebih sedikit daripada yang dikhawatirkan. " +
            "Yang lebih penting: kata yang paling sering salah eja di tulisan kerja hampir selalu itu-itu saja — " +
            "`separate`, `definitely`, `necessary`, `occurred`, `receive`, `accommodate`. Menghafal enam kata ini " +
            "memberi hasil lebih besar daripada menghafal seluruh aturan.\n\n" +
            "## Prefix dan suffix: menebak arti tanpa kamus\n\n" +
            "Sebagian besar kata panjang dalam bahasa Inggris adalah kata pendek yang dipasangi awalan dan akhiran. " +
            "Mengenali potongannya membuatmu bisa menebak arti kata yang belum pernah kamu lihat.\n\n" +
            "```text\n" +
            "un-      = tidak       → unavailable, unclear\n" +
            "re-      = ulang       → resend, revise\n" +
            "mis-     = keliru      → misread, misconfigure\n" +
            "-able    = bisa di-    → readable, scalable\n" +
            "-ment    = hasil/proses → deployment, agreement\n" +
            "-ly      = penanda adverb → quickly, clearly\n" +
            "```\n\n" +
            "## Jebakan: thesaurus yang dipakai untuk pamer\n\n" +
            "Jebakan paling sering di bagian ini adalah membuka thesaurus lalu memilih kata yang paling jarang dipakai, " +
            "dengan asumsi kata langka terdengar lebih profesional. Hasilnya justru sebaliknya. " +
            "Synonym hampir tidak pernah bisa saling menggantikan sepenuhnya; masing-masing punya konteks pemakaiannya sendiri. " +
            "`Utilize` bukan versi lebih pintar dari `use`, dan pembaca yang berpengalaman akan langsung mengenalinya sebagai usaha terdengar pintar.\n\n" +
            "Aturan yang dipakai penyunting profesional: kalau kata yang lebih pendek menyampaikan hal yang sama, pakai yang pendek.\n\n" +
            "## Context clues\n\n" +
            "Saat menemukan kata asing, kalimat di sekitarnya biasanya sudah menyediakan petunjuk — lewat definisi langsung, " +
            "contoh, atau lawan kata. Membiasakan diri membaca petunjuk itu lebih cepat daripada berhenti setiap dua kalimat untuk membuka kamus, " +
            "dan lebih membekas karena kamu menemukannya sendiri.\n\n" +
            "## Kaitan ke dunia kerja\n\n" +
            "Salah register adalah kesalahan yang paling mahal di sini: pesan terlalu santai ke klien baru terbaca tidak serius, " +
            "pesan terlalu kaku ke rekan satu tim terbaca dingin atau pasif-agresif. Tidak ada spell check untuk ini. " +
            "Satu-satunya cara adalah membaca banyak contoh nyata dan memperhatikan siapa menulis apa kepada siapa.",
        },
      ],
    },

    // ================================================================
    // MODUL 4 — Bantuan untuk Pembelajar (bab 4)
    // ================================================================
    {
      slug: "pembelajar-non-native",
      title: "Jebakan Khas Pembelajar Non-Native",
      description:
        "Bagian bahasa Inggris yang tidak punya padanan di bahasa Indonesia: article, verb tense, modal, dan preposition.",
      topics: [
        "Word order: pola SVO dan urutan adjective",
        "Kalimat negatif",
        "Count dan noncount noun serta article a/an/the",
        "Pronoun dan acuannya",
        "Verb tense: dua belas bentuk dan kapan dipakai",
        "Modal auxiliary: can, could, may, might, must, should, would",
        "Preposition of time, place, dan movement",
        "Slang dan idiom di lingkungan kerja",
      ],
      items: [
        {
          kind: "materi",
          id: "beng-4-m1",
          title: "Empat Hal yang Tidak Ada di Bahasa Indonesia",
          body:
            "# Kenapa modul ini terasa paling sulit\n\n" +
            "Empat hal berikut tidak punya padanan langsung dalam bahasa Indonesia, jadi tidak ada intuisi bawaan yang bisa kamu andalkan: " +
            "**article** (`a`, `an`, `the`), **verb tense** yang berubah bentuk, **modal auxiliary** dengan gradasi kesopanannya, " +
            "dan **preposition** yang pasangannya harus dihafal. Semua penutur bahasa Indonesia tersandung di empat titik yang sama. " +
            "Kalau modul ini terasa lebih berat dari modul sebelumnya, itu wajar, bukan tanda kamu lambat.\n\n" +
            "## Article: `a`, `an`, `the`, atau tidak sama sekali\n\n" +
            "| Situasi | Article | Contoh |\n" +
            "| --- | --- | --- |\n" +
            "| Benda tunggal, pertama kali disebut | `a` / `an` | `I sent a report.` |\n" +
            "| Benda yang sudah diketahui pembaca | `the` | `The report is attached.` |\n" +
            "| Benda jamak secara umum | tanpa article | `Reports are due Friday.` |\n" +
            "| Noncount noun secara umum | tanpa article | `We need feedback.` |\n\n" +
            "Alurnya biasanya begini: sesuatu diperkenalkan dengan `a`, lalu disebut lagi dengan `the`.\n\n" +
            "```text\n" +
            "I opened a ticket this morning.\n" +
            "The ticket is still unassigned.\n" +
            "   ^^^ sudah diperkenalkan, jadi the\n" +
            "```\n\n" +
            "## Count dan noncount noun\n\n" +
            "Sebagian kata benda Inggris tidak bisa dihitung dan tidak punya bentuk jamak. Ini sering membingungkan " +
            "karena pembagiannya tidak selalu logis.\n\n" +
            "```text\n" +
            "Count    : a report, two reports, many reports\n" +
            "Noncount : information, feedback, advice, software, equipment\n\n" +
            "❌ informations, feedbacks, advices, softwares\n" +
            "✅ some information, a piece of advice, two pieces of equipment\n" +
            "```\n\n" +
            "`Informations` dan `feedbacks` adalah dua bentuk salah yang paling sering muncul di e-mail kerja dari penutur Indonesia.\n\n" +
            "## Verb tense: yang benar-benar dipakai\n\n" +
            "Buku tata bahasa mendaftar dua belas tense. Dalam tulisan kerja sehari-hari, empat ini menutupi hampir semua kebutuhan:\n\n" +
            "```text\n" +
            "Simple present   : We release every Tuesday.       (rutin, fakta)\n" +
            "Simple past      : We released the fix yesterday.  (selesai, waktunya jelas)\n" +
            "Present perfect  : We have released the fix.       (selesai, waktunya tidak penting)\n" +
            "Future (will)    : We will release on Tuesday.     (rencana)\n" +
            "```\n\n" +
            "Beda `simple past` dan `present perfect` adalah jebakan klasik. Patokannya: kalau kamu menyebut kapan persisnya, " +
            "pakai simple past. `We have released it yesterday` salah, karena `yesterday` menuntut simple past.\n\n" +
            "## Modal: gradasi kesopanan\n\n" +
            "Modal mengubah nada permintaan lebih kuat daripada kata apa pun. Ini yang membuat pesan terbaca sopan atau menuntut.\n\n" +
            "```text\n" +
            "Send me the file.            → perintah, terbaca kasar di banyak konteks\n" +
            "Can you send me the file?    → netral, sehari-hari\n" +
            "Could you send me the file?  → lebih sopan, aman untuk siapa pun\n" +
            "Would you mind sending...?   → paling sopan, untuk permintaan berat\n" +
            "```\n\n" +
            "`Must` juga perlu hati-hati: dalam bahasa Indonesia `harus` terdengar netral, tapi `You must send this today` " +
            "terbaca jauh lebih keras daripada yang biasanya kamu maksud. `Please send this today` sudah cukup.\n\n" +
            "## Pronoun: bentuk berubah, acuannya harus jelas\n\n" +
            "Bahasa Indonesia memakai `dia` di posisi mana pun. Bahasa Inggris mengubah bentuknya " +
            "tergantung peran kata itu dalam kalimat:\n\n" +
            "```text\n" +
            "Subject : I    you   he    she   it   we   they\n" +
            "Object  : me   you   him   her   it   us   them\n" +
            "Milik   : my   your  his   her   its  our  their\n" +
            "```\n\n" +
            "Masalah yang lebih halus adalah acuannya. Pronoun harus merujuk ke satu kata saja, tanpa keraguan:\n\n" +
            "```text\n" +
            "❌ The client sent the vendor its invoice.\n" +
            "   → milik siapa? client atau vendor?\n" +
            "✅ The client sent the vendor an invoice for the March work.\n" +
            "```\n\n" +
            "Dalam dokumen teknis, `it` yang menggantung adalah sumber ambiguitas paling sering. " +
            "Kalau ada dua benda di kalimat sebelumnya, sebut namanya lagi — pengulangan lebih baik daripada salah paham.\n\n" +
            "## Preposition dan word order\n\n" +
            "Preposition tidak bisa dinalar, hanya bisa dibiasakan — `on Monday`, `in July`, `at 9 a.m.` mengikuti pola " +
            "besar-ke-kecil untuk waktu dan tempat. Sementara urutan kata Inggris jauh lebih kaku daripada bahasa Indonesia: " +
            "pola SVO hampir tidak boleh diubah, dan adjective punya urutan bakunya sendiri (`a large red plastic box`, bukan `a plastic red large box`). " +
            "Kalimat negatif pun butuh auxiliary: `I don't agree`, bukan `I not agree`.\n\n" +
            "## Jebakan: menerjemahkan idiom kata per kata\n\n" +
            "Idiom dan slang tidak bisa diterjemahkan potongan demi potongan. `Let's touch base next week` tidak ada hubungannya dengan " +
            "menyentuh apa pun; artinya sekadar berkomunikasi singkat. Sebaliknya, idiom Indonesia yang diterjemahkan harfiah " +
            "akan membingungkan pembaca. Dalam tulisan kerja, cara paling aman adalah menghindari idiom sama sekali — " +
            "terutama kepada pembaca yang bahasa ibunya juga bukan Inggris.\n\n" +
            "## Kaitan ke dunia kerja\n\n" +
            "Kesalahan article dan tense jarang membuat pesanmu tidak dimengerti, tapi ia konsisten terbaca sebagai penanda " +
            "bahwa penulisnya belum nyaman berbahasa Inggris. Dalam seleksi kerja remote, di mana penilaian awal sering dilakukan " +
            "hanya dari tulisan, kesan itu punya bobot. Memperbaiki empat hal di modul ini memberi hasil paling besar " +
            "per jam belajar dibanding bagian mana pun di track ini.",
        },
      ],
    },

    // ================================================================
    // MODUL 5 — Paragraf (bab 5 & 6)
    // ================================================================
    {
      slug: "menulis-paragraf",
      title: "Menulis Paragraf",
      description:
        "Merangkai kalimat menjadi satu ide yang utuh: topic sentence, bukti pendukung, transisi, dan variasi kalimat.",
      topics: [
        "Topic sentence: menaruh ide utama di depan",
        "Supporting sentence dan bukti",
        "Unity: satu paragraf satu ide",
        "Coherence dan kata transisi",
        "Coordination dan subordination",
        "Parallelism dalam daftar dan poin",
        "Sentence variety: memvariasikan panjang dan pembuka",
      ],
      items: [
        {
          kind: "materi",
          id: "beng-5-m1",
          title: "Paragraf sebagai Satu Unit Ide",
          body:
            "# Satu paragraf, satu ide\n\n" +
            "Paragraf bukan sekadar kumpulan kalimat yang kebetulan berdekatan. Ia adalah satu ide yang dinyatakan, " +
            "lalu didukung, lalu ditutup. Kalau kamu tidak bisa menyebutkan ide sebuah paragraf dalam satu kalimat, " +
            "paragraf itu kemungkinan memuat dua ide dan perlu dipecah.\n\n" +
            "| Bagian | Tugas | Jumlah kalimat |\n" +
            "| --- | --- | --- |\n" +
            "| Topic sentence | Menyatakan ide utama | 1 |\n" +
            "| Supporting sentences | Bukti, contoh, alasan | 2–5 |\n" +
            "| Concluding sentence | Menutup atau menjembatani | 0–1 |\n\n" +
            "## Topic sentence di depan, bukan di belakang\n\n" +
            "Dalam tulisan bisnis Inggris, ide utama diletakkan di kalimat pertama. Ini berbeda dari kebiasaan menulis " +
            "yang lazim dalam bahasa Indonesia, yang sering membangun konteks dulu baru sampai ke inti. " +
            "Pembaca dokumen kerja memindai, bukan membaca kata per kata — kalau intinya ada di kalimat terakhir, " +
            "ia sudah pindah sebelum sampai ke sana.\n\n" +
            "```text\n" +
            "❌ We ran into several issues last sprint. The staging server was\n" +
            "   down twice. QA was short-staffed. As a result, the release will\n" +
            "   slip to next week.\n\n" +
            "✅ The release will slip to next week. The staging server went down\n" +
            "   twice, and QA was short-staffed for most of the sprint.\n" +
            "```\n\n" +
            "Isinya sama persis. Yang kedua bisa dipahami tanpa membaca kalimat kedua.\n\n" +
            "## Coherence: transisi yang menunjukkan hubungan\n\n" +
            "Kata transisi memberi tahu pembaca hubungan antar kalimat sebelum ia harus menebaknya sendiri.\n\n" +
            "```text\n" +
            "Menambah    : also, in addition, furthermore\n" +
            "Membanding  : similarly, likewise\n" +
            "Melawankan  : however, on the other hand, although\n" +
            "Sebab-akibat: therefore, as a result, consequently\n" +
            "Urutan      : first, next, finally\n" +
            "```\n\n" +
            "## Coordination dan subordination\n\n" +
            "Dua cara menggabungkan ide, dan pilihannya menentukan mana yang terdengar lebih penting. " +
            "**Coordination** menempatkan dua ide setara (`and`, `but`, `so`, `or`). **Subordination** menjadikan satu ide " +
            "sebagai latar bagi yang lain (`because`, `although`, `while`, `since`).\n\n" +
            "```text\n" +
            "The tests passed, but the build failed.        → dua-duanya setara\n" +
            "Although the tests passed, the build failed.   → penekanan pada build\n" +
            "```\n\n" +
            "## Parallelism\n\n" +
            "Bagian yang setara dalam satu kalimat harus punya bentuk gramatikal yang sama. " +
            "Ini paling sering dilanggar di daftar berpoin, dan hasilnya terbaca janggal meski sulit ditunjuk letak salahnya.\n\n" +
            "```text\n" +
            "❌ The role involves writing docs, code review, and to run tests.\n" +
            "✅ The role involves writing docs, reviewing code, and running tests.\n" +
            "```\n\n" +
            "## Jebakan yang sering terjadi\n\n" +
            "**Paragraf yang terlalu panjang.** Blok delapan sampai sepuluh kalimat tanpa jeda membuat pembaca menyerah " +
            "sebelum sampai ke inti. Untuk tulisan kerja, tiga sampai lima kalimat sudah cukup.\n\n" +
            "**Semua kalimat berpanjang sama dan berpembuka sama.** Lima kalimat berturut-turut yang diawali `We` " +
            "membuat tulisan terdengar seperti daftar, bukan penjelasan. Sesekali mulailah dari keterangan waktu atau anak kalimat.\n\n" +
            "**Unity yang bocor.** Satu kalimat yang membahas hal lain di tengah paragraf akan menarik perhatian pembaca ke arah salah. " +
            "Kalau kalimat itu penting, ia layak jadi paragraf sendiri; kalau tidak, hapus.\n\n" +
            "## Kaitan ke dunia kerja\n\n" +
            "Deskripsi pull request, laporan status, dan pesan panjang di kanal tim semuanya adalah paragraf. " +
            "Kebiasaan meletakkan kesimpulan di depan adalah satu perubahan kecil yang paling terasa oleh orang yang membaca tulisanmu, " +
            "karena ia menghemat waktu mereka setiap kali. Di banyak perusahaan, cara ini punya nama sendiri: *bottom line up front*.",
        },
      ],
    },

    // ================================================================
    // MODUL 6 — Proses Menulis (bab 7 & 8)
    // ================================================================
    {
      slug: "proses-menulis",
      title: "Proses Menulis",
      description:
        "Dari halaman kosong sampai draf yang layak dikirim: prewriting, outline, drafting, lalu revising dan editing.",
      topics: [
        "Prewriting: brainstorming, freewriting, dan mapping",
        "Outline: menyusun kerangka sebelum menulis",
        "Drafting: menulis cepat tanpa menyunting",
        "Thesis statement yang kuat dan spesifik",
        "Body paragraph dan pola pengembangannya",
        "Introduction dan conclusion",
        "Revising dan editing: dua pekerjaan yang berbeda",
      ],
      items: [
        {
          kind: "materi",
          id: "beng-6-m1",
          title: "Menulis Itu Proses, Bukan Satu Kali Duduk",
          body:
            "# Kenapa halaman kosong terasa menakutkan\n\n" +
            "Halaman kosong terasa berat karena kebanyakan orang mencoba melakukan dua pekerjaan sekaligus: " +
            "memikirkan apa yang mau dikatakan, dan sekaligus memilih kata yang tepat untuk mengatakannya. " +
            "Dua pekerjaan itu memakai cara berpikir yang berbeda, dan menjalankannya bersamaan membuat keduanya berjalan lambat.\n\n" +
            "Solusinya adalah memisahkan tahapan. Ini terdengar lebih lama, tapi dalam praktiknya lebih cepat.\n\n" +
            "| Tahap | Yang dikerjakan | Yang TIDAK dikerjakan |\n" +
            "| --- | --- | --- |\n" +
            "| Prewriting | Mengumpulkan ide | Menyusun kalimat |\n" +
            "| Outline | Mengurutkan ide | Mencari kata |\n" +
            "| Drafting | Menulis cepat sampai habis | Memperbaiki |\n" +
            "| Revising | Memperbaiki isi dan urutan | Membetulkan koma |\n" +
            "| Editing | Membetulkan tata bahasa | Mengubah isi |\n\n" +
            "## Prewriting: tiga cara yang berbeda\n\n" +
            "```text\n" +
            "Brainstorming : tulis semua yang terlintas sebagai daftar, tanpa menilai.\n" +
            "Freewriting   : menulis tanpa berhenti 5-10 menit, tanpa menghapus.\n" +
            "Mapping       : gambar ide utama di tengah, cabangkan yang terkait.\n" +
            "```\n\n" +
            "Ketiganya punya satu aturan bersama: jangan menilai apa pun di tahap ini. Ide buruk yang ditulis " +
            "sering memancing ide bagus yang tidak akan muncul kalau kamu berhenti untuk menyaring.\n\n" +
            "## Thesis statement\n\n" +
            "Thesis adalah satu kalimat yang menyatakan inti seluruh tulisan. Kalau kamu tidak bisa menuliskannya, " +
            "biasanya karena kamu belum tahu apa yang mau kamu katakan — dan itu informasi yang berguna, bukan kegagalan.\n\n" +
            "```text\n" +
            "❌ terlalu umum : This report is about our onboarding process.\n" +
            "❌ hanya fakta  : Our onboarding takes fourteen days.\n" +
            "✅ punya klaim  : Our fourteen-day onboarding delays new hires'\n" +
            "                  first contribution and should be cut to five.\n" +
            "```\n\n" +
            "Thesis yang baik bisa dibantah. Kalau tidak ada orang yang mungkin tidak setuju, itu bukan thesis, itu deskripsi.\n\n" +
            "## Outline\n\n" +
            "Kerangka tidak perlu rapi, cukup bisa dibaca ulang oleh dirimu sendiri lima menit kemudian. " +
            "Untuk dokumen kerja, tiga sampai lima poin utama dengan satu baris catatan di bawah masing-masing sudah memadai. " +
            "Nilai terbesarnya bukan pada kerangkanya, tapi pada kenyataan bahwa urutan yang keliru jauh lebih murah diperbaiki " +
            "di tahap ini daripada setelah dua halaman ditulis.\n\n" +
            "## Introduction dan conclusion\n\n" +
            "Pembuka punya tiga tugas: menarik perhatian, memberi konteks secukupnya, dan menyatakan thesis. " +
            "Penutup merangkum tanpa mengulang kata demi kata, lalu menyebut langkah berikutnya. " +
            "Dalam dokumen kerja, penutup yang tidak menyebutkan siapa harus melakukan apa adalah penutup yang belum selesai.\n\n" +
            "## Jebakan: menyunting sambil menulis draf\n\n" +
            "Ini jebakan paling sering dan paling mahal. Memperbaiki kalimat pertama berulang-ulang sebelum kalimat kedua ditulis " +
            "adalah cara paling efektif untuk tidak pernah menyelesaikan tulisan. Draf pertama memang seharusnya jelek; " +
            "tugasnya cuma satu, yaitu ada.\n\n" +
            "Jebakan kedua: menganggap revising dan editing pekerjaan yang sama. **Revising** menyangkut isi — apakah argumennya " +
            "masuk akal, apakah urutannya tepat, apakah ada bagian yang tidak perlu. **Editing** menyangkut permukaan — tata bahasa, " +
            "ejaan, tanda baca. Melakukan editing sebelum revising berarti kamu memoles kalimat yang mungkin akan kamu hapus.\n\n" +
            "## Kaitan ke dunia kerja\n\n" +
            "Proposal, laporan insiden, dan dokumen desain semuanya melewati proses ini, entah disadari atau tidak. " +
            "Orang yang menulisnya secara sadar bertahap selesai lebih cepat dan lebih jarang harus menulis ulang dari awal. " +
            "Kebiasaan menyusun outline dua menit sebelum menulis e-mail panjang adalah investasi terkecil dengan hasil terbesar di modul ini.",
        },
      ],
    },

    // ================================================================
    // MODUL 7 — Prinsip Business Writing (bab 9-12)
    // ================================================================
    {
      slug: "prinsip-business-writing",
      title: "Prinsip Business Writing",
      description:
        "Nada, gaya, dan etika tulisan bisnis: kapan menulis dan kapan bicara, tujuh prinsip komunikasi tertulis, serta batas antara parafrase dan plagiarisme.",
      topics: [
        "Komunikasi lisan vs tulisan: kapan memilih yang mana",
        "Ciri tulisan bisnis yang baik",
        "Style: formal, informal, dan colloquial",
        "Tujuh prinsip komunikasi tertulis",
        "Hambatan komunikasi tertulis dan cara mengatasinya",
        "Paraphrase, summary, dan batas plagiarisme",
        "Revisi tingkat kalimat: kata mubazir dan kalimat pasif",
      ],
      items: [
        {
          kind: "materi",
          id: "beng-7-m1",
          title: "Menulis untuk Dibaca Orang Sibuk",
          body:
            "# Tulisan bisnis punya satu ukuran: apakah pembaca bertindak\n\n" +
            "Tulisan bisnis tidak dinilai dari keindahannya, tapi dari apakah pembaca mengerti dan melakukan " +
            "apa yang perlu dilakukan. Pembacanya sibuk, memindai, dan sering membaca di ponsel di sela pekerjaan lain. " +
            "Semua prinsip di modul ini turun dari kenyataan itu.\n\n" +
            "## Kapan menulis, kapan bicara\n\n" +
            "| Situasi | Pilih |\n" +
            "| --- | --- |\n" +
            "| Perlu jejak dan bisa dirujuk ulang | Tulisan |\n" +
            "| Perlu keputusan cepat dengan banyak tanya-jawab | Lisan |\n" +
            "| Topik sensitif atau berpotensi salah paham | Lisan dulu, ringkas tertulis sesudahnya |\n" +
            "| Penerima di zona waktu berbeda | Tulisan |\n" +
            "| Instruksi yang harus diikuti persis | Tulisan |\n\n" +
            "Kesalahan yang mahal adalah memakai tulisan untuk hal yang seharusnya dibicarakan. " +
            "Kritik yang disampaikan lewat pesan tertulis kehilangan nada suara, dan hampir selalu terbaca lebih keras dari yang dimaksud.\n\n" +
            "## Tujuh prinsip komunikasi tertulis\n\n" +
            "```text\n" +
            "1. Clear      — satu tafsir saja, bukan dua.\n" +
            "2. Concise    — sependek mungkin tanpa kehilangan isi.\n" +
            "3. Concrete   — angka dan tanggal, bukan 'segera' dan 'beberapa'.\n" +
            "4. Correct    — fakta, nama, dan tata bahasa yang benar.\n" +
            "5. Coherent   — urutannya masuk akal dari awal ke akhir.\n" +
            "6. Complete   — pembaca tidak perlu bertanya balik untuk bisa bertindak.\n" +
            "7. Courteous  — sopan, tanpa jadi berputar-putar.\n" +
            "```\n\n" +
            "Prinsip ketiga yang paling sering dilanggar. `We will fix this soon` tidak bisa ditindaklanjuti; " +
            "`We will deploy the fix on Thursday, 5 March` bisa.\n\n" +
            "## Style: tiga tingkat, satu keputusan\n\n" +
            "```text\n" +
            "Formal     : Please find the revised proposal attached.\n" +
            "Informal   : I've attached the updated proposal.\n" +
            "Colloquial : Here's the new proposal.\n" +
            "```\n\n" +
            "Untuk pekerjaan sehari-hari, informal adalah pilihan default yang aman. Formal disimpan untuk kontrak, " +
            "surat resmi, dan komunikasi pertama dengan pihak yang belum kamu kenal.\n\n" +
            "## Memangkas kata mubazir\n\n" +
            "Sebagian besar draf pertama bisa dipotong dua puluh sampai tiga puluh persen tanpa kehilangan apa pun.\n\n" +
            "```text\n" +
            "due to the fact that        → because\n" +
            "at this point in time       → now\n" +
            "in order to                 → to\n" +
            "make a decision             → decide\n" +
            "it is important to note that → (hapus saja)\n" +
            "```\n\n" +
            "Kalimat pasif juga menambah panjang dan menghilangkan pelaku. `The deadline was missed` " +
            "tidak memberi tahu siapa yang melewatkannya — kadang itu memang disengaja, tapi lebih sering itu kekaburan yang tidak perlu.\n\n" +
            "## Jebakan: parafrase yang sebenarnya masih menyalin\n\n" +
            "Mengganti beberapa kata dengan sinonim sambil mempertahankan struktur kalimat aslinya **bukan** parafrase — " +
            "itu masih plagiarisme, dan ini kesalahpahaman yang sangat sering terjadi. " +
            "Parafrase yang sah berarti kamu memahami idenya lalu menuliskannya ulang dengan struktur kalimatmu sendiri, " +
            "dan tetap menyebutkan sumbernya.\n\n" +
            "```text\n" +
            "Asli      : Remote work increases productivity for focused tasks.\n" +
            "❌ Bukan  : Remote work improves productivity for concentrated tasks.\n" +
            "✅ Ya     : For work that requires deep focus, employees tend to get\n" +
            "            more done at home (Smith, 2023).\n" +
            "```\n\n" +
            "Hambatan lain yang perlu diantisipasi: jargon yang tidak dipahami pembaca, asumsi konteks yang ternyata tidak dimiliki, " +
            "dan nada yang salah terbaca karena tidak ada isyarat suara.\n\n" +
            "## Kaitan ke dunia kerja\n\n" +
            "Ini modul yang paling langsung terasa efeknya di dunia kerja. Pesan yang jelas dan ringkas dibalas lebih cepat, " +
            "dan orang yang menulis begitu akan lebih sering dilibatkan dalam keputusan — bukan karena bahasanya bagus, " +
            "tapi karena berkomunikasi dengannya murah secara waktu. Soal plagiarisme punya konsekuensi yang lebih keras: " +
            "di banyak perusahaan itu masalah kepatuhan, bukan sekadar masalah gaya.",
        },
      ],
    },

    // ================================================================
    // MODUL 8 — Dokumen Bisnis (bab 13)
    // ================================================================
    {
      slug: "dokumen-bisnis",
      title: "Dokumen Bisnis",
      description:
        "Format baku yang dipakai di tempat kerja: e-mail dan netiquette, memo, surat, proposal, laporan, résumé, dan sales message.",
      topics: [
        "Text message dan e-mail: netiquette",
        "Subject line dan kalimat pembuka e-mail",
        "Memorandum dan surat resmi",
        "Business proposal",
        "Report",
        "Résumé dan cover letter",
        "Sales message",
      ],
      items: [
        {
          kind: "materi",
          id: "beng-8-m1",
          title: "Format Baku dan Kenapa Ia Ada",
          body:
            "# Format bukan formalitas\n\n" +
            "Setiap dokumen bisnis punya bentuk baku, dan bentuk itu bukan warisan birokrasi. " +
            "Ia ada supaya pembaca tahu di mana mencari informasi tanpa membaca seluruhnya. " +
            "Orang yang membuka memo tahu bahwa inti keputusan ada di paragraf pertama; " +
            "orang yang membuka résumé tahu bahwa pengalaman kerja ada setelah ringkasan. " +
            "Melanggar format berarti memaksa pembaca mencari, dan pembaca yang harus mencari akan berhenti mencari.\n\n" +
            "| Dokumen | Panjang wajar | Yang dicari pembaca |\n" +
            "| --- | --- | --- |\n" +
            "| E-mail | 3–8 kalimat | Apa yang diminta dariku |\n" +
            "| Memo | 1 halaman | Keputusan dan siapa yang terdampak |\n" +
            "| Surat resmi | 1 halaman | Maksud dan pihak yang bertanggung jawab |\n" +
            "| Proposal | 2–10 halaman | Masalah, solusi, biaya, jadwal |\n" +
            "| Report | 3–20 halaman | Temuan dan rekomendasi |\n" +
            "| Résumé | 1–2 halaman | Kecocokan dengan posisi |\n" +
            "| Sales message | 1 layar | Manfaat dan langkah berikutnya |\n\n" +
            "## Anatomi e-mail kerja\n\n" +
            "```text\n" +
            "Subject : Invoice #4471 — payment due 12 March\n" +
            "          ^ spesifik dan bisa dicari, bukan \"Question\" atau \"Hi\"\n\n" +
            "Hi Sarah,\n" +
            "\n" +
            "We have not received payment for invoice #4471, due 12 March.\n" +
            "          ^ inti di kalimat pertama\n" +
            "\n" +
            "Could you confirm the payment date by Friday? I have attached\n" +
            "the invoice again for reference.\n" +
            "          ^ permintaan yang jelas, dengan tenggat\n" +
            "\n" +
            "Best regards,\n" +
            "Bimo\n" +
            "```\n\n" +
            "Subject line adalah bagian yang paling sering diabaikan padahal paling menentukan apakah e-mail dibuka hari itu " +
            "atau minggu depan. Subject yang baik bisa dipahami tanpa membuka isinya.\n\n" +
            "## Netiquette\n\n" +
            "```text\n" +
            "HURUF BESAR SEMUA        → terbaca sebagai teriakan\n" +
            "Reply All tanpa alasan   → mencuri waktu belasan orang\n" +
            "CC atasan saat kesal     → terbaca sebagai ancaman\n" +
            "Tanda seru berlebihan!!! → terbaca tidak profesional\n" +
            "Emoji ke pihak eksternal → tunggu sampai mereka memulai\n" +
            "```\n\n" +
            "## Memo, proposal, dan report\n\n" +
            "**Memo** dipakai untuk komunikasi internal dan punya kepala baku: `To`, `From`, `Date`, `Subject`. " +
            "Ia tidak memakai salam pembuka maupun penutup. **Proposal** menjawab empat pertanyaan berurutan: " +
            "apa masalahnya, apa solusi yang ditawarkan, berapa biayanya, dan kapan selesainya. " +
            "**Report** menyajikan temuan lalu rekomendasi — dan untuk pembaca eksekutif, ringkasan di halaman pertama " +
            "sering menjadi satu-satunya bagian yang benar-benar dibaca.\n\n" +
            "**Sales message** berbeda dari semuanya: ia tidak menjelaskan fitur, melainkan manfaat, dan selalu ditutup " +
            "dengan satu langkah berikutnya yang konkret.\n\n" +
            "## Résumé: kata kerja dan angka\n\n" +
            "```text\n" +
            "❌ Responsible for the company website.\n" +
            "✅ Rebuilt the company website, cutting load time from 4.2s to 1.1s.\n" +
            "```\n\n" +
            "Mulai dari kata kerja lampau (`built`, `led`, `reduced`), sebut hasilnya, sertakan angka bila ada. " +
            "Cover letter bukan pengulangan résumé; ia menjelaskan kenapa kamu cocok untuk posisi itu secara spesifik.\n\n" +
            "## Jebakan yang sering terjadi\n\n" +
            "**Menaruh permintaan di paragraf terakhir.** Pembaca berhenti di paragraf kedua, jadi permintaanmu tidak pernah terbaca. " +
            "**Subject line yang tidak berisi apa-apa.** `Hi` atau `Question` membuat e-mail sulit ditemukan lagi tiga bulan kemudian. " +
            "**Menyalin template Inggris tanpa mengubah nada.** Frasa seperti `Please be informed that` terdengar kaku dan bertele-tele " +
            "di sebagian besar konteks kerja modern; `Just so you know` atau kalimat langsung biasanya lebih tepat.\n\n" +
            "## Kaitan ke dunia kerja\n\n" +
            "Modul ini adalah bagian yang akan kamu pakai paling sering. E-mail dan pesan tertulis mengisi sebagian besar hari kerja, " +
            "dan résumé serta cover letter adalah hal pertama yang dinilai dari kamu dalam proses rekrutmen — " +
            "sering kali sebelum ada manusia yang benar-benar membacanya secara utuh.",
        },
        {
          kind: "step",
          id: "beng-8-1",
          title: "Menyusun Subject Line E-mail yang Spesifik",
          explanation:
            "Subject line adalah bagian e-mail yang pertama kali dibaca dan menentukan apakah e-mailmu akan segera dibuka atau diabaikan. " +
            "Subject line yang terlalu umum seperti `Question`, `Hi`, atau `Updates` menyulitkan penerima untuk memahami urgensi pesan dan pencarian arsip e-mail di kemudian hari. " +
            "Pola standar Business English yang profesional menggabungkan topik utama dan tindakan yang diminta beserta tenggat waktunya. " +
            "Menulis `Subject: Budget Proposal — Approval Required by April 15` memberi kepastian konteks langsung dari kotak masuk penerima.",
          example: {
            code:
              "❌ Subject: Meeting\n" +
              "✅ Subject: Q3 Roadmap — Meeting Agenda for Monday",
            output:
              "Sebelum : subject line terlalu umum dan membingungkan.\n" +
              "Sesudah : topik dan konteks rapat langsung terlihat jelas di inbox.",
            note: "Hindari penggunaan huruf kapital semua atau kata URGENT tanpa tanggal spesifik.",
          },
          instruction:
            "Tulis ulang subject line yang kabur `Subject: Question` menjadi spesifik dengan pola `Subject: [Topik] — [Tindakan] + [Tanggal]` untuk meminta persetujuan anggaran revisi proposal sebelum 15 April.",
          starterCode: "Subject: Question",
          language: "text",
          tests: [
            {
              pattern:
                "Subject\\s*:\\s*Budget\\s+Proposal\\s*—\\s*Approval\\s+Required\\s+by\\s+April\\s+15",
              flags: "i",
              message:
                "Gunakan pola `Subject: Budget Proposal — Approval Required by April 15`.",
            },
            {
              pattern: "Subject\\s*:\\s*Question",
              flags: "i",
              mustNotMatch: true,
              message:
                "Subject line `Question` masih ada — ganti dengan subject line yang spesifik.",
            },
          ],
          solution:
            "Subject: Budget Proposal — Approval Required by April 15",
          susunKode: {
            question:
              "Susun subject line e-mail ini agar spesifik memuat topik, tindakan, dan tenggat waktu.",
            potongan: [
              "Subject: Budget Proposal",
              "— Approval Required",
              "by April 15",
            ],
            pengecoh: [
              "Subject: Question About Budget",
              "— Need Approval Soon",
            ],
            pemisah: " ",
            explanation:
              "Subject line profesional menggabungkan topik spesifik dan tenggat waktu yang jelas. Pengecoh 'Subject: Question About Budget' menggoda karena masih memakai kata 'Question' yang kabur. Pengecoh '— Need Approval Soon' juga keliru karena kata 'soon' tidak memberikan tanggal tenggat yang konkret.",
          },
        },
        {
          kind: "step",
          id: "beng-8-2",
          title: "Memindahkan Permintaan ke Awal E-mail",
          explanation:
            "Dalam budaya Business English, meletakkan inti permintaan di paragraf akhir adalah kesalahan umum yang menghambat respons. " +
            "Pembaca dokumen bisnis biasanya memindai e-mail dengan cepat dan ingin tahu apa yang dibutuhkan dari mereka sejak kalimat pertama (*Bottom Line Up Front*). " +
            "Basa-basi yang berlebihan seperti `I am writing this email to inform you that...` membuat e-mail terasa lambat dan bertele-tele. " +
            "Menggunakan kalimat pembuka langsung berbasis modal polite request seperti `Could you please send us...` membuat pesanmu terdengar sopan sekaligus efisien.",
          example: {
            code:
              "❌ Hope you are well. I was wondering if you could send the report.\n" +
              "✅ Could you please send the Q2 sales report by tomorrow morning?",
            output:
              "Sebelum : inti permintaan tersembunyi di balik basa-basi berlebih.\n" +
              "Sesudah : permintaan dan tenggat waktu langsung dinyatakan di depan.",
            note: "Basa-basi singkat diperbolehkan, tetapi permintaan utama harus langsung terlihat.",
          },
          instruction:
            "Tulis ulang kalimat pembuka e-mail yang bertele-tele di editor agar langsung menyatakan permintaan *revised invoice* di kalimat pertama.",
          starterCode:
            "I am writing this email to kindly inform you that I hope you are doing well, and we need the revised invoice.",
          language: "text",
          tests: [
            {
              pattern:
                "Could\\s+you\\s+please\\s+send\\s+us\\s+the\\s+revised\\s+invoice\\s+by\\s+Friday\\?",
              flags: "i",
              message:
                "Gunakan kalimat permintaan langsung `Could you please send us the revised invoice by Friday?`.",
            },
            {
              pattern: "I\\s+am\\s+writing\\s+this\\s+email",
              flags: "i",
              mustNotMatch: true,
              message:
                "Hapus pembuka bertele-tele `I am writing this email...` — tempatkan permintaan di depan.",
            },
          ],
          solution:
            "Could you please send us the revised invoice by Friday?",
          susunKode: {
            question:
              "Susun kalimat pembuka e-mail ini agar langsung menyatakan permintaan secara sopan dan efisien.",
            potongan: [
              "Could you please send us",
              "the revised invoice",
              "by Friday?",
            ],
            pengecoh: ["I am writing to ask", "the invoice revision"],
            pemisah: " ",
            explanation:
              "E-mail bisnis yang efektif menaruh permintaan utama di kalimat pembuka dengan modal sopan seperti 'Could you please'. Pengecoh dengan 'I am writing to ask' menggoda karena kebiasaan basa-basi penutur Indonesia. Pengecoh 'the invoice revision' juga keliru karena tidak membentuk frasa kata benda yang tepat.",
          },
        },
        {
          kind: "step",
          id: "beng-8-3",
          title: "Mengubah Butir Résumé Menjadi Kata Kerja Lampau + Angka",
          explanation:
            "Perekrut dan sistem ATS (*Applicant Tracking System*) tidak mencari daftar tanggung jawab pasif seperti `Responsible for...` atau `Worked on...`. " +
            "Résumé yang kuat selalu diawali dengan kata kerja aksi dalam bentuk lampau (*action verb*) yang diikuti oleh hasil konkret berupa angka atau persentase. " +
            "Mengubah deskripsi pasif menjadi `Rebuilt the company website, reducing page load time by 40%` membuktikan dampak nyata dari pekerjaanmu. " +
            "Cara penulisan ini memperlihatkan pencapaian (*achievements*), bukan sekadar kewajiban tugas harian (*duties*).",
          example: {
            code:
              "❌ In charge of customer support emails.\n" +
              "✅ Resolved over 500 client tickets monthly, achieving a 98% satisfaction rating.",
            output:
              "Sebelum : sekadar menyebutkan tugas harian tanpa bukti keberhasilan.\n" +
              "Sesudah : kata kerja lampau aktif + jumlah tiket + angka kepuasan.",
            note: "Selalu gunakan angka konkret (persentase, nilai uang, atau waktu) di setiap poin résumé.",
          },
          instruction:
            "Ubah deskripsi tugas pasif `Responsible for website optimization` menjadi butir résumé aktif menggunakan kata kerja lampau `Rebuilt` dan angka pencapaian `40%`.",
          starterCode: "Responsible for website optimization.",
          language: "text",
          tests: [
            {
              pattern:
                "Rebuilt\\s+the\\s+company\\s+website\\s*,\\s*reducing\\s+page\\s+load\\s+time\\s+by\\s+40%",
              flags: "i",
              message:
                "Gunakan kalimat aksi `Rebuilt the company website, reducing page load time by 40%.`",
            },
            {
              pattern: "Responsible\\s+for",
              flags: "i",
              mustNotMatch: true,
              message:
                "Hapus frasa pasif `Responsible for` — awali dengan kata kerja lampau seperti `Rebuilt`.",
            },
          ],
          solution:
            "Rebuilt the company website, reducing page load time by 40%.",
          susunKode: {
            question:
              "Susun butir résumé ini dengan kata kerja aksi lampau dan data pencapaian kuantitatif.",
            potongan: [
              "Rebuilt the company website,",
              "reducing page load time",
              "by 40%.",
            ],
            pengecoh: [
              "Responsible for rebuilding website,",
              "reduce page load time",
            ],
            pemisah: " ",
            explanation:
              "Poin résumé harus diawali action verb lampau seperti 'Rebuilt' dan memuat data kuantitatif. Pengecoh 'Responsible for rebuilding website,' sering menggoda penutur Indonesia karena kebiasaan menulis deskripsi tugas pasif. Pengecoh 'reduce page load time' juga keliru karena tidak menggunakan bentuk gerund 'reducing' setelah koma.",
          },
        },
        {
          kind: "step",
          id: "beng-8-4",
          title: "Istilah Bagian Ringkasan dalam Report",
          explanation:
            "Dalam penulisan laporan bisnis profesional (*business report*), bagian ringkasan awal untuk para manajer dan eksekutif memiliki istilah baku yaitu `executive summary`. " +
            "Istilah seperti `short summary` atau `mini summary` tidak pernah digunakan dalam dokumen resmi perusahaan. " +
            "Executive summary menyajikan temuan utama, dampak, dan rekomendasi keputusan dalam satu atau dua halaman pertama. " +
            "Menggunakan istilah baku Business English menunjukkan pemahaman atas konvensi laporan bisnis internasional.",
          example: {
            code:
              "❌ The manager asked for a small summary of the audit.\n" +
              "✅ The manager asked for an executive summary of the audit.",
            output:
              "Sebelum : istilah 'small summary' tidak baku dalam dokumen resmi.\n" +
              "Sesudah : 'executive summary' dipakai sesuai standar laporan bisnis.",
            note: "Executive summary ditulis paling akhir setelah seluruh laporan selesai dikerjakan.",
          },
          instruction:
            "Ganti istilah `short summary` pada kalimat di editor menjadi istilah resmi dokumen bisnis `executive summary`.",
          starterCode:
            "Please read the short summary before reviewing the full incident report.",
          language: "text",
          tests: [
            {
              pattern: "read\\s+the\\s+executive\\s+summary\\s+before",
              flags: "i",
              message:
                "Ganti `short summary` menjadi istilah baku `executive summary`.",
            },
            {
              pattern: "short\\s+summary",
              flags: "i",
              mustNotMatch: true,
              message:
                "Istilah `short summary` masih ada — gunakan `executive summary`.",
            },
          ],
          solution:
            "Please read the executive summary before reviewing the full incident report.",
          susunKode: {
            question:
              "Susun kalimat ini dengan istilah baku untuk ringkasan laporan bisnis.",
            potongan: [
              "Please read the",
              "executive summary",
              "before reviewing the full incident report.",
            ],
            pengecoh: ["short summary", "executive summaries"],
            pemisah: " ",
            explanation:
              "Istilah baku untuk ringkasan laporan bisnis bagi manajemen adalah 'executive summary'. Pengecoh 'short summary' menggoda penutur Indonesia yang menerjemahkan langsung dari 'ringkasan pendek'. Pengecoh 'executive summaries' juga salah karena laporan ini hanya memerlukan bentuk tunggal.",
          },
        },
        {
          kind: "step",
          id: "beng-8-5",
          title: "Menyusun Solusi Spesifik dalam Business Proposal",
          explanation:
            "Proposal bisnis (*business proposal*) harus menawarkan solusi konkret dengan hasil yang dapat diukur, bukan janji-janji samar. " +
            "Pernyataan seperti `We will fix your server problems` terdengar tidak profesional dan tidak memberikan gambaran metode kerja. " +
            "Pola penulisan proposal yang efektif diawali dengan kata kerja proposisi `We propose [gerund]...` yang diikuti dengan manfaat bisnis yang jelas (*to achieve 99.9% uptime*). " +
            "Pendekatan yang berfokus pada hasil kuantitatif membuat proposal perusahaanmu jauh lebih unggul dalam persaingan tender.",
          example: {
            code:
              "❌ We will make your team work better.\n" +
              "✅ We propose implementing a centralized CRM to increase team productivity by 25%.",
            output:
              "Sebelum : janji umum tanpa metode dan angka pencapaian.\n" +
              "Sesudah : tindakan spesifik + hasil terukur yang siap dievaluasi klien.",
            note: "Dalam proposal, sertakan selalu estimasi waktu pelaksanaan dan biaya.",
          },
          instruction:
            "Tulis ulang pernyataan proposal yang abstrak `We will fix your server problems` menjadi solusi bisnis spesifik dengan pola `We propose + [Tindakan] + to + [Hasil]`.",
          starterCode: "We will fix your server problems.",
          language: "text",
          tests: [
            {
              pattern:
                "We\\s+propose\\s+upgrading\\s+the\\s+server\\s+infrastructure\\s+to\\s+achieve\\s+99\\.9%\\s+uptime",
              flags: "i",
              message:
                "Gunakan pola `We propose upgrading the server infrastructure to achieve 99.9% uptime.`",
            },
            {
              pattern: "We\\s+will\\s+fix",
              flags: "i",
              mustNotMatch: true,
              message:
                "Hapus janji samar `We will fix...` — ganti dengan pernyataan proposal yang spesifik.",
            },
          ],
          solution:
            "We propose upgrading the server infrastructure to achieve 99.9% uptime.",
          susunKode: {
            question:
              "Susun pernyataan proposal ini dengan frasa proposisi dan tujuan terukur.",
            potongan: [
              "We propose upgrading",
              "the server infrastructure",
              "to achieve 99.9% uptime.",
            ],
            pengecoh: ["We will fix", "to achieving 99.9% uptime."],
            pemisah: " ",
            explanation:
              "Pernyataan proposal menggunakan frasa 'We propose [verb-ing]' dan diikuti infinitive 'to achieve' untuk menyatakan tujuan. Pengecoh 'We will fix' menggoda karena terdengar langsung, tetapi terlalu samar untuk proposal. Pengecoh 'to achieving' juga keliru secara tata bahasa.",
          },
        },
        {
          kind: "step",
          id: "beng-8-6",
          title: "Menyusun Call to Action (CTA) Konkret dalam Sales Message",
          explanation:
            "Pesan penjualan (*sales message*) tidak boleh diakhiri dengan frasa pasif seperti `Let us know if you are interested` atau `Hope to hear from you soon`. " +
            "Penutup pasif memberikan beban berpikir kepada calon klien sehingga kemungkinan mereka bertindak menjadi sangat kecil. " +
            "*Call to Action* (CTA) yang efektif selalu diawali dengan kata kerja perintah (*imperative verb*) dan menentukan aktivitas singkat yang tidak memberatkan, seperti `Schedule a 15-minute demo today`. " +
            "Memberikan langkah berikutnya yang jelas dan konkret secara signifikan meningkatkan angka konversi e-mail penjualan.",
          example: {
            code:
              "❌ Contact us whenever you have time.\n" +
              "✅ Download our free whitepaper today to learn more about cloud security.",
            output:
              "Sebelum : penutup mengambang yang menyerahkan keputusan ke pembaca.\n" +
              "Sesudah : CTA tegas dengan instruksi langsung dan tenggat yang jelas.",
            note: "Makin spesifik dan rendah risiko tindakan yang diminta, makin tinggi tingkat responsnya.",
          },
          instruction:
            "Ubah penutup sales message yang pasif `Let us know if you are interested` menjadi *Call to Action* (CTA) konkret berbasis langkah langsung `Schedule a 15-minute demo today`.",
          starterCode: "Let us know if you are interested.",
          language: "text",
          tests: [
            {
              pattern:
                "Schedule\\s+a\\s+15-minute\\s+demo\\s+today\\s+to\\s+see\\s+how\\s+our\\s+software\\s+works",
              flags: "i",
              message:
                "Gunakan CTA aktif `Schedule a 15-minute demo today to see how our software works.`",
            },
            {
              pattern: "Let\\s+us\\s+know",
              flags: "i",
              mustNotMatch: true,
              message:
                "Hapus penutup pasif `Let us know...` — gunakan kata kerja perintah aktif.",
            },
          ],
          solution:
            "Schedule a 15-minute demo today to see how our software works.",
          susunKode: {
            question:
              "Susun Call to Action (CTA) ini dengan kata kerja perintah langsung dan ajakan spesifik.",
            potongan: [
              "Schedule a 15-minute demo",
              "today to see how",
              "our software works.",
            ],
            pengecoh: ["Let us know if you want", "today to seeing how"],
            pemisah: " ",
            explanation:
              "CTA pada sales message menggunakan kalimat perintah (imperative) langsung seperti 'Schedule a 15-minute demo'. Pengecoh 'Let us know if you want' sering menggoda penutur Indonesia karena dianggap lebih sopan, padahal menurunkan tingkat respons. Pengecoh 'today to seeing how' juga salah secara tata bahasa.",
          },
        },
        {
          kind: "step",
          id: "beng-8-7",
          title: "Menyesuaikan Kepala Memorandum Resmi (Memo)",
          explanation:
            "Memorandum (*memo*) adalah dokumen komunikasi internal resmi yang memiliki format kepala (*header*) standar yang kaku. " +
            "Ciri utama memo yang membedakannya dari surat resmi adalah adanya judul `MEMORANDUM` dengan huruf kapital penuh di bagian paling atas, diikuti oleh empat baris header: `TO:`, `FROM:`, `DATE:`, dan `SUBJECT:`. " +
            "Memo tidak menggunakan salam pembuka seperti `Dear All` maupun penutup seperti `Sincerely`. " +
            "Memahami format baku memo memastikan bahwa dokumen internal perusahaan disampaikan dengan tingkat keformalan yang tepat.",
          example: {
            code:
              "❌ Dear Team,\n\nSubject: Policy Update\nFrom: HR\n" +
              "✅ MEMORANDUM\n\nTO: All Employees\nFROM: Human Resources\nDATE: April 1\nSUBJECT: Remote Work Policy Update",
            output:
              "Sebelum : format memo tidak baku bercampur dengan gaya e-mail.\n" +
              "Sesudah : header memo standar dengan empat komponen utama berhuruf kapital.",
            note: "Memo digunakan khusus untuk pihak internal organisasi, bukan untuk klien eksternal.",
          },
          instruction:
            "Perbaiki format kepala memo di editor dengan menambahkan judul `MEMORANDUM` di bagian atas serta menggunakan label header berhuruf kapital.",
          starterCode:
            "To: All Staff\nFrom: Operations Manager\nDate: October 10\nSubject: Office Relocation",
          language: "text",
          tests: [
            {
              pattern:
                "^MEMORANDUM\\s+TO\\s*:\\s*All\\s+Staff\\s+FROM\\s*:\\s*Operations\\s+Manager\\s+DATE\\s*:\\s*October\\s+10\\s+SUBJECT\\s*:\\s*Office\\s+Relocation$",
              flags: "i",
              message:
                "Gunakan format memo baku dengan `MEMORANDUM` di awal dan label `TO:`, `FROM:`, `DATE:`, `SUBJECT:`.",
            },
            {
              pattern: "\\b(To|From|Date|Subject):",
              flags: "",
              mustNotMatch: true,
              message:
                "Gunakan huruf kapital penuh pada label header (`TO:`, `FROM:`, `DATE:`, `SUBJECT:`).",
            },
          ],
          solution:
            "MEMORANDUM\n\nTO: All Staff\nFROM: Operations Manager\nDATE: October 10\nSUBJECT: Office Relocation",
          susunKode: {
            question:
              "Susun bagian kepala (header) memorandum internal ini sesuai format baku perusahaan.",
            potongan: [
              "MEMORANDUM\n",
              "TO: All Staff",
              "FROM: Operations Manager",
              "DATE: October 10",
              "SUBJECT: Office Relocation",
            ],
            pengecoh: [
              "Dear All Staff,",
              "To: All Staff",
              "From: Operations Manager",
            ],
            pemisah: "\n",
            explanation:
              "Dokumen memo diawali judul 'MEMORANDUM' dan header berhuruf kapital (TO:, FROM:, DATE:, SUBJECT:). Pengecoh 'Dear All Staff,' menggoda bagi yang biasa menulis e-mail, padahal memo tidak memakai salam pembuka. Pengecoh berhuruf kecil 'To:' juga keliru dalam format baku memo resmi.",
          },
        },
        {
          kind: "quiz",
          id: "beng-8-kuis",
          title: "Kuis: Dokumen Bisnis dan Etika Komunikasi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Manakah subject line e-mail bisnis berikut yang paling efektif dan profesional?",
              choices: [
                "A. Question",
                "B. Project Update — Action Required by Friday, 3 PM",
                "C. PLEASE READ THIS URGENT EMAIL!!!",
                "D. Hi Sarah, just following up",
              ],
              answerIndex: 1,
              explanation:
                "Subject line yang efektif menggabungkan topik utama ('Project Update') dengan tindakan dan tenggat spesifik ('Action Required by Friday, 3 PM'). Pilihan A dan D terlalu kabur, sedangkan pilihan C memakai huruf kapital penuh dan tanda seru berlebihan yang dianggap tidak profesional.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Dalam etika e-mail kantor (netiquette), kapan kamu sebaiknya menyertakan atasanmu di kolom CC?",
              choices: [
                "A. Setiap kali kamu merasa kesal dengan rekan kerja agar atasan memberi teguran.",
                "B. Ketika ada keputusan penting atau hasil akhir proyek yang memang perlu diketahui atasan secara pasif.",
                "C. Pada setiap pesan e-mail harian tanpa terkecuali agar atasan tahu kamu bekerja.",
                "D. Saat membalas pesan obrolan santai di luar jam kerja.",
              ],
              answerIndex: 1,
              explanation:
                "Fitur CC (Carbon Copy) digunakan untuk memberikan transparansi informasi pasif kepada pihak yang perlu mengetahui keputusan penting. Menggunakan CC sebagai bentuk ancaman atau mem-spam inbox atasan untuk setiap pesan kecil dianggap sebagai pelanggaran netiquette.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Perekrut sedang mendokumentasikan pencapaian pada résumé. Manakah kalimat butir (bullet point) résumé yang paling kuat?",
              choices: [
                "A. Responsible for managing the company sales team.",
                "B. Managed a team of 8 sales representatives, increasing quarterly revenue by 35%.",
                "C. Worked hard on sales target every single day.",
                "D. Helped the company sell more products to various customers.",
              ],
              answerIndex: 1,
              explanation:
                "Butir résumé yang efektif diawali kata kerja lampau aktif ('Managed'), menyebut skala tanggung jawab ('team of 8'), dan memberikan angka pencapaian kuantitatif ('increasing quarterly revenue by 35%'). Pilihan A pasif, sedangkan C dan D terlalu subjektif tanpa data.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Empat komponen utama yang wajib dijawab secara berurutan dalam sebuah business proposal adalah:",
              choices: [
                "A. Basa-basi, riwayat hidup direktur, daftar harga, ucapan terima kasih.",
                "B. Pernyataan masalah, solusi yang ditawarkan, rincian biaya, dan jadwal pelaksanaan.",
                "C. Hasil audit keuangan, struktur organisasi, daftar klausa hukum, formulir klaim.",
                "D. Latar belakang pendidikan, sertifikasi teknis, daftar referensi, lampiran foto.",
              ],
              answerIndex: 1,
              explanation:
                "Proposal bisnis yang baik menjawab kebutuhan klien melalui empat tahap logis: Problem statement, Proposed solution, Cost breakdown, dan Implementation schedule. Tanpa keempatnya, proposal tidak dapat dievaluasi secara komersial.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apa fungsi utama dari Executive Summary pada sebuah laporan bisnis (report)?",
              choices: [
                "A. Menjadi halaman ucapan terima kasih kepada seluruh tim penyusun.",
                "B. Menyajikan temuan utama dan rekomendasi keputusan secara ringkas di halaman awal untuk pembuat keputusan.",
                "C. Menampung seluruh data statistik mentah yang tidak muat di lampiran.",
                "D. Menggantikan seluruh isi laporan sehingga bagian lainnya bisa dihapus.",
              ],
              answerIndex: 1,
              explanation:
                "Executive summary dirancang khusus untuk para eksekutif yang tidak memiliki waktu membaca laporan puluhan halaman. Bagian ini merangkum masalah, temuan kunci, dan rekomendasi aksi dalam 1–2 halaman pertama.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Apakah perbedaan utama antara Memorandum (memo) dan Surat Resmi (formal letter)?",
              choices: [
                "A. Memo ditujukan untuk komunikasi internal kantor dan tidak memakai salam pembuka/penutup, sedangkan surat resmi untuk pihak eksternal dan memakai salam formal.",
                "B. Memo harus ditulis tangan di atas kertas bermaterai, sedangkan surat resmi dikirim lewat e-mail.",
                "C. Memo selalu berisi 10 halaman, sedangkan surat resmi hanya 1 kalimat.",
                "D. Tidak ada perbedaan sama sekali; keduanya adalah istilah yang identik.",
              ],
              answerIndex: 0,
              explanation:
                "Memo digunakan untuk komunikasi internal antaranggota organisasi dengan header (TO, FROM, DATE, SUBJECT) tanpa salam pembuka (Dear...) atau penutup (Sincerely...). Surat resmi ditujukan untuk pihak luar organisasi dengan format surat lengkap.",
            },
          ],
        },
      ],
    },
  ],
};
