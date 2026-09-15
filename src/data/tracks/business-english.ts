import { Track } from "@/lib/types";

export const businessEnglishTrack: Track = {
  "slug": "business-english",
  "title": "Business English",
  "description": "Kuasai komunikasi tertulis profesional dalam bahasa Inggris: tata kalimat yang kokoh, tanda baca presisi, pemilihan kata yang tepat, etika e-mail, dan format dokumen bisnis modern.",
  "hours": 30,
  "recommendedPrereqs": [],
  "color": "bg-blue-800",
  "icon": "💼",
  "order": 17,
  "modules": [
    {
      "slug": "persiapan-belajar",
      "title": "Persiapan & Alat Belajar",
      "description": "Menyiapkan kamus, pemeriksa tulisan, dan kebiasaan latihan sebelum masuk ke materi. Termasuk menaksir level kemampuanmu sekarang.",
      "topics": [
        "Kenapa Business English berbeda dari English sehari-hari",
        "Menyiapkan kamus & thesaurus (Merriam-Webster, Cambridge)",
        "Memasang pemeriksa tulisan: LanguageTool & spell check",
        "Mengenal level CEFR dan menaksir posisimu",
        "Cara berlatih: menulis harian dan membaca contoh nyata",
        "American vs British English: pilih satu, lalu konsisten"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "beng-0-m1",
          "title": "Sebelum Mulai: Alat, Level CEFR, dan Standar Business Writing",
          "body": "# Business English: Tuntutan Ketepatan di Dunia Kerja Profesional\n\nBusiness English bukan dialek terpisah yang asing dan bukan versi bahasa Inggris yang sengaja dibuat rumit dengan kata-kata puitis. Perbedaan mendasar antara bahasa Inggris percakapan sehari-hari (*conversational English*) dan Business English terletak pada **tuntutan ketepatan, kejelasan konteks, dan akuntabilitas tulisan**. Dalam obrolan santai, kalimat yang tidak lengkap masih tertolong oleh nada bicara, ekspresi wajah, bahasa tubuh, dan kesempatan langsung untuk mengoreksi kesalahpahaman. Sebaliknya, dalam komunikasi tertulis di dunia kerja—seperti e-mail ke klien internasional, tiket dokumentasi teknis, atau proposal tender—pesanmu berdiri sendiri tanpa kehadiran fisikmu. Jika kalimatmu ambigu, pembaca akan menarik kesimpulan sendiri, dan kamu baru menyadari kekeliruan itu setelah keputusan bisnis yang salah terlanjur diambil.\n\nTujuan utama track ini adalah membangun kemampuan menulis yang jernih, profesional, dan ringkas (*concise*). Seseorang dengan kosakata menengah tetapi struktur kalimatnya rapi dan logis akan selalu dinilai jauh lebih kompeten daripada orang yang menggunakan kosakata muluk namun susunan pesannya berantakan dan membingungkan.\n\n## Kenapa Business English Berbeda dari English Sehari-hari\n\nKomunikasi bisnis berorientasi pada tindakan (*action-oriented*) dan efisiensi waktu. Rekan kerja dan klien tidak membaca dokumen kerjamu untuk menikmati gaya sastra, melainkan untuk menemukan jawaban atas tiga pertanyaan mendasar: **apa informasinya, apa dampaknya bagi mereka, dan tindakan apa yang perlu diambil selanjutnya**. Berikut adalah perbandingan kontras antara pola pikir percakapan kasual dan standar tulisan bisnis profesional:\n\n| Aspek | Percakapan Kasual / Sehari-hari | Standar Business Writing Profesional |\n| --- | --- | --- |\n| **Tujuan Utama** | Membangun keakraban sosial dan berbagi cerita | Menyampaikan informasi akurat dan mendorong keputusan/tindakan |\n| **Struktur Pesan** | Alur mengalir bebas, berputar, sering diawali basa-basi | *Bottom Line Up Front* (BLUF) — inti pesan langsung di awal |\n| **Pilihan Kosakata** | Penuh slang, singkatan informal (`gonna`, `btw`), idiom lokal | Kosakata baku, presisi, bebas slang ambigu, register netral-formal |\n| **Tanda Baca** | Emotikon berlebih, tanda seru ganda (`!!`), huruf kecil semua | Tanda baca fungsional yang mengatur jeda logis dan hierarki informasi |\n| **Toleransi Ambiguitas** | Tinggi (bisa langsung bertanya balik secara lisan) | Nol (ambiguitas berisiko memicu sengketa kontrak atau kegagalan rilis) |\n\n## Menyiapkan Kamus & Thesaurus yang Tepat\n\nBanyak pembelajar non-native menghabiskan waktu bertahun-tahun menggunakan kamus dwibahasa (Inggris–Indonesia). Kamus dwibahasa sangat berguna pada tingkat pemula (*beginner*), namun menjadi penghambat besar saat kamu ingin menulis secara profesional. Kamus terjemahan sering memberikan padanan kata tanpa menjelaskan **kolokasi** (pasangan kata yang alami) dan **nuansa rasa kata** (*connotation*).\n\nTiga perangkat referensi wajib yang perlu kamu siapkan:\n\n```text\n1. Kamus Monolingual Standar American: Merriam-Webster (merriam-webster.com)\n   -> Sangat baik untuk definisi presisi, label kelas kata, dan variasi ejaan resmi AS.\n\n2. Kamus Monolingual Standar British / Learner: Cambridge Dictionary (dictionary.cambridge.org)\n   -> Menyediakan label level CEFR (A1-C2), contoh kalimat bisnis nyata, dan panduan idiom.\n\n3. Thesaurus Presisi: Merriam-Webster Thesaurus atau Oxford Learner's Thesaurus\n   -> Digunakan untuk mencari kata yang LEBIH TEPAT dan LEBIH SPESIFIK, BUKAN kata yang terdengar rumit.\n```\n\nGunakan thesaurus secara bijak: jangan pernah memilih sinonim yang belum pernah kamu lihat dalam kalimat nyata hanya karena kata tersebut terlihat intelek. Kata pendek dan lugas seperti `use` hampir selalu lebih disukai daripada `utilize` dalam dokumen bisnis modern.\n\n## Memasang Pemeriksa Tulisan: LanguageTool & Batasan Spell Check\n\nPemeriksa ejaan otomatis (*spell check*) bawaan editor kode atau browser adalah jaring pengaman lini pertama, tetapi ia memiliki kelemahan mendasar: **spell check hanya memeriksa apakah suatu kata terdaftar di kamus, bukan apakah kata tersebut tepat dalam konteks kalimatmu**.\n\n```text\nContoh kalimat rancu yang LOLOS dari spell check biasa:\n\"Their going to except our proposal because its principal is sound.\"\n\nAnalisis kesalahan kontekstual:\n1. \"Their\"      -> Seharusnya \"They're\" (they are), bukan kata ganti kepemilikan.\n2. \"except\"     -> Seharusnya \"accept\" (menerima), bukan kecuali.\n3. \"its\"        -> Benar (kepemilikan proposal).\n4. \"principal\"  -> Seharusnya \"principle\" (prinsip dasar), bukan kepala sekolah/modal utama.\n\nBentuk benar: \"They're going to accept our proposal because its principle is sound.\"\n```\n\nPasang alat bantu tata bahasa tingkat lanjut seperti **LanguageTool** (open-source dan privasi aman) untuk mendeteksi kesalahan tata bahasa, kesesuaian subjek-kata kerja (*subject-verb agreement*), dan koma yang hilang. Namun, ingatlah bahwa alat pemeriksa tulisan adalah asisten, bukan pengganti pemahaman logikamu.\n\n## Mengenal Level CEFR dan Menaksir Posisimu\n\nCEFR (*Common European Framework of Reference for Languages*) adalah standar internasional yang digunakan perusahaan multinasional dan institusi global untuk mengukur kemahiran bahasa seseorang dalam enam tingkatan:\n\n```text\n[A1 - Pemula Total]      -> Memahami frasa dasar dan instruksi sangat sederhana.\n        |\n[A2 - Dasar / Waystage]  -> Mampu menulis pesan pendek dan mengisi formulir rutin.\n        |\n[B1 - Menengah Bawah]    -> Mampu menulis e-mail kerja sederhana dan teks faktual.\n        |\n[B2 - Standar Mandiri]   -> TARGET TRACK INI: Mandiri menyusun tulisan kerja (e-mail,\n                            proposal, laporan insiden, dan catatan teknis).\n        |\n[C1 - Mahir Operasional] -> Menguasai register bahasa kompleks, nuansa diplomatis, dan kontrak.\n        |\n[C2 - Penguasaan Penuh]  -> Setara penutur asli berpendidikan tinggi dalam segala konteks.\n```\n\nFokus dan Batasan Track: Track ini berfokus secara khusus pada kemahiran komunikasi TERTULIS (writing & reading) di lingkungan kerja modern. Target track ini adalah membawa pembelajar dari tingkat dasar/menengah (A2/B1) menuju kemandirian menyusun dokumen kerja (setara deskriptor B2 writing: tulisan terstruktur, jelas, dan akuntabel), tanpa mengklaim sertifikasi resmi CEFR menyeluruh (karena sertifikasi utuh juga menguji listening dan speaking). Estimasi 30 jam belajar dirancang realistis untuk mendalami 17 panduan materi, menuntaskan 65 latihan penulisan dan susun kalimat, serta mengevaluasi 17 kuis berbasis skenario kerja.\n\n## Cara Berlatih: Menulis Harian dan Membaca Contoh Nyata\n\nKemampuan menulis tidak berkembang melalui hafalan rumus tata bahasa yang terisolasi, melainkan lewat pembiasaan aktif (*active output*). Luangkan waktu 10–15 menit setiap hari untuk menulis tiga hingga lima kalimat bahasa Inggris profesional. Bahan latihan terbaik tersedia di sekitarmu: catat ringkasan tugas harian (*standup notes*), tulis ulang pesan tiket dukungan teknis, atau buat draf balasan e-mail sebelum dikirim. Selain menulis, bacalah dokumentasi resmi teknologi global (seperti Stripe Docs, AWS Architecture Blogs, atau GitHub Engineering Logs) untuk menyerap bagaimana para profesional menyusun kalimat ringkas dan berbobot.\n\n## American vs British English: Pilih Satu, Lalu Konsisten\n\nDua varian utama bahasa Inggris yang dominan di dunia kerja internasional adalah **American English (AmE)** dan **British English (BrE)**. Keduanya sama-sama sah dan diakui secara global. Masalah paling fatal yang sering dilakukan pembelajar non-native adalah **mencampurkan kedua varian dalam satu dokumen yang sama**.\n\n| Varian / Aspek | American English (AmE) | British English (BrE) |\n| --- | --- | --- |\n| **Akhiran Kata Kerja** | `-ize` (`organize`, `prioritize`, `optimize`) | `-ise` atau `-ize` (`organise`, `prioritise`) |\n| **Pengejaan Vokal** | `-or` (`color`, `flavor`, `behavior`) | `-our` (`colour`, `flavour`, `behaviour`) |\n| **Akhiran Tempat/Pusat** | `-er` (`center`, `theater`, `meter`) | `-re` (`centre`, `theatre`, `metre`) |\n| **Huruf L Ganda** | `traveled`, `canceled`, `modeling` | `travelled`, `cancelled`, `modelling` |\n| **Penempatan Titik/Koma pada Kutipan** | Selalu di dalam tanda kutip: `\"... Friday.\"` | Sering di luar tanda kutip: `\"... Friday\".` |\n| **Istilah Kerja Umum** | `resume`, `vacation`, `schedule` | `CV`, `holiday`, `timetable` |\n\nAturan bakunya: jika perusahaanmu berbasis di AS atau mayoritas klienmu menggunakan standar Amerika, pilih American English dan pertahankan di seluruh berkas. Konsistensi adalah tanda utama disiplin editorial seorang profesional.\n\n## Jebakan yang Sering Terjadi di Awal Belajar\n\n1. **Menerjemahkan kata demi kata dari pola pikir bahasa Indonesia.** Kalimat Indonesia seperti *\"Kami ingin mendiskusikan tentang proyek baru\"* sering keliru diterjemahkan menjadi *\"We want to discuss about the new project\"* (kata `discuss` adalah transitive verb yang langsung diikuti objek tanpa `about`).\n2. **Mengira bahwa kalimat panjang dan berbelit-belit terdengar lebih cerdas.** Di dunia bisnis berbahasa Inggris modern, kalimat yang terlalu panjang (lebih dari 25 kata) dipandang sebagai tanda ketidakmampuan merapikan pikiran.\n3. **Terlalu bergantung pada kecerdasan buatan (AI) tanpa menyunting.** AI sering menghasilkan teks yang terdengar generik, berbusa-busa (*fluff*), dan memuat klise bisnis hampa. Kamu tetap wajib menguasai prinsip ketepatan agar bisa mengevaluasi hasil draf tersebut.\n4. **Takut menulis karena takut salah tanda baca.** Tanda baca adalah rambu yang bisa dipelajari secara sistematis; kesalahan awal adalah bagian wajar dari proses kalibrasi.\n\n## Kaitan ke Dunia Kerja dan Rekrutmen\n\nDalam proses rekrutmen kerja jarak jauh (*remote work*) maupun perusahaan multinasional, draf tulisanmu adalah representasi langsung dari profesionalisme dan ketelitian kerjamu. Perekrut membaca surat lamaran (*cover letter*), profil GitHub/LinkedIn, dan balasan e-mail pertamamu sebelum memutuskan apakah kamu layak diundang ke tahap wawancara. Di dalam tim kerja sehari-hari, dokumentasi kode yang rapi dan komunikasi asinkron yang jernih mencegah perdebatan tanpa ujung serta menghemat ratusan jam kerja tim. Memulai track ini dengan pondasi alat yang kokoh akan mempercepat penguasaan modul-modul penulisan berikutnya."
        },
        {
          "kind": "quiz",
          "id": "beng-0-k1",
          "title": "Kuis: Persiapan, Alat Belajar, dan Standar Business English",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Kamu sedang mengevaluasi standar komunikasi tulisan tim sebelum bekerja sama dengan klien internasional. Manakah pernyataan berikut yang paling tepat menggambarkan perbedaan utama antara Business English dan percakapan bahasa Inggris sehari-hari?",
              "choices": [
                "A. Business English menggunakan kosakata puitis kuno agar terlihat terhormat di hadapan mitra bisnis.",
                "B. Business English menuntut ketepatan makna, keterbacaan efisien, dan ketiadaan ambiguitas karena pesan tertulis harus mampu memicu tindakan nyata tanpa kehadiran fisik penulis.",
                "C. Business English melarang penggunaan kalimat aktif dan mewajibkan seluruh laporan ditulis dalam bentuk kalimat pasif.",
                "D. Business English hanya berbeda pada logat bicara saat rapat daring dan tidak memiliki aturan khusus pada tulisan."
              ],
              "answerIndex": 1,
              "explanation": "Business English berfokus pada kejelasan, efisiensi waktu pembaca, dan ketepatan informasi (Bottom Line Up Front). Pilihan A salah karena gaya sastra puitis justru mengaburkan maksud bisnis. Pilihan C salah karena kalimat aktif justru sangat dianjurkan untuk kejelasan penanggung jawab aksi. Pilihan D keliru karena standar tertulis Business English memiliki konvensi ketat pada struktur kalimat, ejaan, dan tanda baca."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Seorang rekan kerja ingin meningkatkan akurasi pilihan kata dalam menyusun dokumentasi teknis. Mengapa kamus monolingual Inggris-Inggris (seperti Merriam-Webster atau Cambridge) lebih disarankan daripada kamus terjemahan dwibahasa?",
              "choices": [
                "A. Kamus monolingual menyediakan contoh kalimat nyata, nuansa konotasi kata, dan kolokasi alami yang tidak tercakup dalam padanan kata dwibahasa.",
                "B. Kamus dwibahasa dilarang oleh standar hukum internasional di seluruh perusahaan teknologi.",
                "C. Kamus monolingual menghapus seluruh kata sifat dari daftar kosakata bahasa Inggris.",
                "D. Kamus dwibahasa hanya memuat kata-kata informal dan slang."
              ],
              "answerIndex": 0,
              "explanation": "Kamus monolingual menjelaskan arti kata secara presisi serta memberikan informasi kolokasi (kata mana yang lazim berpasangan) dan konotasi rasa. Pilihan B mengada-ada karena tidak ada larangan hukum semacam itu. Pilihan C salah karena kamus monolingual memuat seluruh kelas kata lengkap. Pilihan D salah karena kamus dwibahasa yang baik tetap memuat kata formal, namun tidak memberikan penjelasan nuansa penggunaan yang mendalam."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu sedang memeriksa draf pengumuman internal perusahaan yang ditulis oleh staf magang. Perhatikan kalimat berikut: 'Their ready to accept the new security policy.' Mengapa fitur spell check bawaan editor sering kali TIDAK menandai kesalahan pada kalimat tersebut?",
              "code": "Their ready to accept the new security policy.",
              "choices": [
                "A. Spell check hanya memeriksa keberadaan kata di kamus ejaan, sehingga kata 'Their' yang sah secara ejaan tetap lolos meskipun salah secara konteks tata bahasa (seharusnya 'They're').",
                "B. Kalimat tersebut sudah sepenuhnya benar dan tidak memiliki kesalahan tata bahasa apa pun.",
                "C. Kata 'policy' adalah kata asing yang tidak dikenali oleh algoritma pemroses kata.",
                "D. Fitur spell check otomatis menonaktifkan diri ketika mendeteksi huruf kapital di awal kalimat."
              ],
              "answerIndex": 0,
              "explanation": "Kata 'Their' adalah kata bahasa Inggris yang sah (possessive pronoun), sehingga pemeriksa ejaan kata tunggal tidak mendeteksinya sebagai salah ketik, padahal secara konteks dibutuhkan kontraksi 'They're' (They are). Pilihan B salah karena ada kesalahan homofon yang jelas. Pilihan C dan D tidak masuk akal secara teknis."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu bertindak sebagai manajer perekrutan yang sedang menyusun kriteria bahasa untuk posisi remote engineer. Dalam kerangka kemahiran bahasa internasional CEFR, level berapakah yang menjadi standar umum agar seorang profesional mampu bekerja mandiri, menulis laporan teknis, dan berkorespondensi tanpa perlu disunting ulang?",
              "choices": [
                "A. Level A1 (Pemula Dasar)",
                "B. Level A2 (Pra-Menengah)",
                "C. Level B2 (Menengah Atas / Pengguna Mandiri)",
                "D. Level C2 mutlak tanpa pengecualian"
              ],
              "answerIndex": 2,
              "explanation": "Level B2 (Independent User) adalah tolok ukur standar di mana seseorang dapat berkomunikasi secara efektif, menyusun teks kerja yang jelas dan terperinci, serta memahami konteks profesional secara mandiri. Level A1 dan A2 masih membutuhkan panduan ketat. Level C2 adalah penguasaan tingkat penutur asli akademis yang melampaui kebutuhan operasional mayoritas pekerjaan bisnis."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu sedang melakukan review terhadap draf proposal bisnis setebal 5 halaman. Pada halaman 1 tertulis 'We prioritize customer satisfaction', namun pada halaman 4 tertulis 'Our organisation was founded in London'. Kaidah penulisan profesional manakah yang dilanggar dalam draf tersebut?",
              "choices": [
                "A. Prinsip konsistensi varian ejaan (American vs British English), karena mencampurkan akhiran '-ize' (AmE) dengan '-ise' (BrE) dalam satu dokumen yang sama.",
                "B. Larangan menggunakan kata 'London' dalam dokumen bisnis resmi.",
                "C. Kewajiban menggunakan huruf kapital penuh pada seluruh nama departemen perusahaan.",
                "D. Aturan bahwa proposal bisnis tidak boleh melebihi satu halaman."
              ],
              "answerIndex": 0,
              "explanation": "Mencampurkan akhiran American English ('prioritize') dan British English ('organisation') dalam satu berkas menunjukkan kurangnya ketelitian editorial. Penulis harus memilih satu standar ejaan dan konsisten dari awal hingga akhir dokumen. Pilihan B, C, dan D adalah aturan keliru yang mengada-ada."
            }
          ]
        }
      ]
    },
    {
      "slug": "dasar-kalimat",
      "title": "Dasar Kalimat",
      "description": "Apa yang membuat sebuah kalimat utuh, dan empat kesalahan yang paling merusak kredibilitas tulisan.",
      "topics": [
        "Komponen kalimat: subject, verb, dan complete thought",
        "Empat kesalahan fatal: fragment, run-on, comma splice, subject-verb disagreement",
        "Subject-verb agreement",
        "Verb tense yang konsisten dalam satu tulisan",
        "Capitalization",
        "Pronoun: bentuk dan kejelasan acuan",
        "Adjective dan adverb",
        "Misplaced dan dangling modifier"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "beng-1-m1",
          "title": "Anatomi Kalimat yang Utuh dan Empat Kesalahan Struktur Kunci",
          "body": "# Tiga Syarat Mutlak Sebuah Kalimat Bahasa Inggris\n\nDalam penulisan profesional, kalimat bukan sekadar kumpulan kata yang diakhiri titik. Sebuah kalimat bahasa Inggris yang utuh (*complete sentence*) wajib memenuhi tiga syarat secara bersamaan:\n\n1. **Subject (Subjek)**: Pelaku atau topik yang dibicarakan (berupa *noun* atau *pronoun*).\n2. **Verb (Kata Kerja / Predikat)**: Tindakan, keadaan, atau peristiwa yang terjadi (harus berupa *finite verb* yang memiliki bentuk waktu/tense).\n3. **Complete Thought (Gagasan Lengkap)**: Mampu berdiri sendiri sebagai klausa independen (*independent clause*) tanpa meninggalkan kesan menggantung bagi pembaca.\n\n```text\nThe development team deployed the security patch.  -> Subject + Verb + Lengkap  [BENAR ✅]\nThe development team deploying the security patch. -> Tanpa finite verb           [SALAH ❌]\nAlthough the team deployed the security patch.    -> Menggantung (dependent)      [SALAH ❌]\n```\n\nPerhatikan baris ketiga: kata hubung subordinat `Although` mengubah klausa utama menjadi anak kalimat (*subordinate clause*). Pembaca menunggu informasi konsekuensi yang tidak pernah tiba. Kesalahan inilah yang disebut **sentence fragment**.\n\n## Komponen Kalimat: Subject, Verb, dan Complete Thought\n\nSubjek kalimat bisa berupa kata benda tunggal, frasa benda panjang (*noun phrase*), maupun gerund. Kata kerja kalimat wajib menyesuaikan diri (*agree*) dengan inti subjek tersebut, bukan dengan kata keterangan yang berada di sekitarnya.\n\n```text\nStruktur Kalimat Lengkap:\n[      SUBJECT      ]   [    VERB    ]   [        OBJECT / COMPLEMENT        ]\nThe quarterly report        shows             a twenty percent increase in sales.\n```\n\n## Empat Kesalahan Struktur yang Sering Mengaburkan Maksud Kalimat\n\nDalam komunikasi kerja, pembaca membaca cepat di antara berbagai kesibukan. Kesalahan struktur dasar tidak berarti seluruh kemampuan kerjamu diragukan, melainkan memaksa pembaca berhenti dan membaca ulang untuk menebak alur pikiranmu. Menghilangkan empat kesalahan ini memastikan pesanmu langsung dipahami dalam sekali baca:\n\n| Jenis Masalah | Ciri Masalah | Contoh Salah | Solusi Perbaikan Baku |\n| --- | --- | --- | --- |\n| **Sentence Fragment** | Penggalan klausa menggantung tanpa subjek/predikat utuh | `Because the database connection timed out.` | Sambungkan ke klausa utama: `We rolled back the release because the database connection timed out.` |\n| **Run-on Sentence** | Dua klausa utuh digabungkan tanpa tanda baca atau kata hubung | `The build succeeded we deployed to staging.` | Pisahkan dengan titik atau beri conjunction: `The build succeeded, so we deployed to staging.` |\n| **Comma Splice** | Dua klausa utuh hanya dipisahkan tanda koma | `The server crashed, the team investigated.` | Ganti koma dengan titik koma (`;`) atau titik: `The server crashed; the team investigated.` |\n| **Subject-Verb Disagreement** | Bentuk kata kerja tidak cocok dengan jumlah subjek | `The list of open tickets are growing.` | Sesuaikan ke subjek tunggal `list`: `The list of open tickets is growing.` |\n\n## Subject-Verb Agreement dan Jebakan Frasa Penyisip\n\nKesalahan kesesuaian subjek dan kata kerja (*subject-verb agreement*) paling sering terjadi ketika terdapat frasa preposisi atau frasa penyisip (*intervening phrases*) di antara subjek dan kata kerja.\n\n```text\nThe architect [along with two senior backend engineers] is reviewing the database schema.\n^^^^^^^^^^^^^  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ^^\nSubjek Tunggal              Frasa Penyisip               Verb Tunggal (is)\n```\n\nFrasa seperti `along with`, `as well as`, `in addition to`, dan `accompanied by` **bukanlah** bagian dari subjek gabungan majemuk (*compound subject* dengan `and`). Subjek aslinya tetaplah kata benda pertama sebelum tanda kurung mental tersebut.\n\n## Jebakan yang Sering Terjadi\n\n1. **Menganggap `there is` dan `there are` selalu bebas dipilih.** Dalam konstruksi `there + be`, subjek sebenarnya berada *setelah* kata kerja `be`. Contoh: `There is an open ticket` (tunggal) vs `There are three open tickets` (jamak).\n2. **Menyambung ide sebab-akibat dengan koma saja.** Dalam bahasa Indonesia, kalimat *\"Server mati, kami memperbaikinya\"* terdengar wajar. Namun dalam bahasa Inggris, itu adalah pelanggaran *comma splice* yang harus diperbaiki menjadi `The server crashed; we fixed it` atau `Because the server crashed, we fixed it`.\n3. **Mengabaikan kata kerja bantu pada klausa negatif.** Kalimat `We not agree` salah total; bentuk yang benar membutuhkan auxiliary: `We do not agree`.\n\n## Kaitan ke Dunia Kerja\n\nDi lingkungan kerja teknologi global, dokumentasi arsitektur perangkat lunak (*RFC - Request for Comments*) dan tiket insiden (*Post-Mortem Reports*) dibaca oleh pimpinan teknik dan mitra eksternal. Kalimat yang memuat fragment atau run-on menimbulkan kesan bahwa penulisnya bekerja terburu-buru dan tidak memiliki ketelitian analitis. Menghilangkan empat kesalahan fatal ini adalah langkah pertama membangun reputasi kerja yang solid."
        },
        {
          "kind": "materi",
          "id": "beng-1-m2",
          "title": "Keteraturan Kalimat: Tense, Kapitalisasi, Modifiers, dan Kata Keterangan",
          "body": "# Menjaga Konsistensi dan Presisi Struktur Kalimat\n\nSetelah menguasai syarat kalimat utuh, langkah berikutnya adalah menjaga agar elemen-elemen di dalam kalimat selaras secara logis, tidak ambigu, dan mematuhi konvensi formal.\n\n## Verb Tense yang Konsisten dalam Satu Tulisan\n\nPergeseran waktu kata kerja (*verb tense shift*) tanpa alasan yang jelas akan membuat pembaca kehilangan orientasi kronologis. Jika kamu menceritakan rangkaian kejadian insiden di masa lalu, pertahankan bentuk lampau (*past tense*) untuk semua peristiwa yang terjadi di linimasa tersebut.\n\n```text\n❌ Tense Berantakan: The engineer detected the memory leak and resolves it immediately.\n   (Kata kerja 'detected' berbentuk lampau, tetapi 'resolves' tiba-tiba melompat ke masa kini)\n\n✅ Tense Konsisten:  The engineer detected the memory leak and resolved it immediately.\n   (Keduanya konsisten menggunakan past tense: detected & resolved)\n```\n\nGunakan *present tense* ketika menyatakan fakta umum, kebijakan permanen, atau deskripsi fungsionalitas sistem yang masih berlaku saat ini.\n\n## Aturan Kapitalisasi (Capitalization Rules)\n\nBahasa Inggris menerapkan aturan huruf kapital yang jauh lebih ketat dibandingkan bahasa Indonesia. Huruf kapital wajib digunakan pada:\n\n| Kategori | Contoh Benar | Contoh Salah |\n| --- | --- | --- |\n| **Nama Hari & Bulan** | `Monday`, `Friday`, `January`, `September` | `monday`, `september` |\n| **Bahasa & Bangsa** | `English`, `Indonesian`, `Japanese`, `German` | `english`, `japanese` |\n| **Nama Jabatan Sebelum Nama Orang** | `Director Sarah Jenkins`, `President Davis` | `director Sarah` |\n| **Nama Produk Resmi & Merek** | `PostgreSQL`, `Docker`, `JavaScript` | `postgresql`, `docker` |\n| **Akronim & Singkatan Resmi** | `API`, `SaaS`, `AWS`, `URL`, `HTML` | `api`, `saas` |\n\nCatatan: Nama musim (*spring*, *summer*, *autumn*, *winter*) **tidak** menggunakan huruf kapital kecuali menjadi bagian dari judul acara resmi (*Spring 2026 Release*).\n\n## Pronoun: Bentuk dan Kejelasan Acuan (Antecedent Clarity)\n\nKata ganti (*pronoun*) harus merujuk secara tegas ke satu kata benda sebelumnya (*antecedent*). Jika sebuah kalimat memuat dua kata benda yang sama-sama berpotensi menjadi acuan, penggunaan pronoun seperti `it` atau `they` akan menimbulkan kebingungan interpretasi.\n\n```text\n❌ Acuan Ambigu: The database server sent an error message to the client application,\n                 but it was unable to process it.\n                 (Siapa yang tidak bisa memproses apa? server atau client app?)\n\n✅ Acuan Jelas:  The database server sent an error message to the client application,\n                 but the client application was unable to parse the response.\n```\n\n## Adjective dan Adverb: Pasangan yang Sering Tertukar\n\n**Adjective (kata sifat)** menerangkan kata benda (*noun*), sedangkan **Adverb (kata keterangan)** menerangkan kata kerja (*verb*), kata sifat lain, atau seluruh klausa.\n\n```text\nAdjective: \"We conducted a thorough audit.\"      -> 'thorough' menerangkan kata benda 'audit'.\nAdverb:    \"The team audited the logs thoroughly.\" -> 'thoroughly' menerangkan kata kerja 'audited'.\n\nJebakan klasik: 'He speaks English good' (SALAH) -> 'He speaks English well' (BENAR).\n```\n\n## Misplaced dan Dangling Modifier\n\n**Misplaced Modifier** terjadi ketika frasa keterangan diletakkan terlalu jauh dari kata yang diterangkan, sehingga secara tidak sengaja menerangkan kata yang salah. **Dangling Modifier** terjadi ketika pelaku dari tindakan di frasa pembuka sama sekali tidak ada di dalam klausa utama.\n\n```text\n❌ Dangling Modifier:\n\"After analyzing the performance metrics, the server configuration was modified.\"\n(Siapa yang menganalisis metrik? Konfigurasi server tidak bisa menganalisis dirinya sendiri!)\n\n✅ Perbaikan Menjadi Kalimat Aktif Ber-Subjek Jelas:\n\"After analyzing the performance metrics, our infrastructure team modified the server configuration.\"\n```\n\nAturan emas: Setiap kali kalimatmu diawali frasa kata kerja seperti `After reviewing...` atau `Having completed the test...`, subjek pertama tepat setelah tanda koma wajib berupa pihak yang melakukan tindakan tersebut.\n\n## Kaitan ke Dunia Kerja\n\nDalam tinjauan spesifikasi teknis (*PRD - Product Requirement Document*) dan tiket bug, ambiguitas pronoun dan dangling modifier sering menjadi sumber perdebatan antardepartemen. Menulis dengan kejelasan antecedent dan modifier yang terikat kuat memastikan bahwa setiap pengembang, penguji (*QA*), dan pemangku kepentingan memahami secara persis siapa melakukan apa dan sistem mana yang terdampak."
        },
        {
          "kind": "step",
          "id": "beng-1-1",
          "title": "Memperbaiki Sentence Fragment",
          "explanation": "Sebuah klausa subordinat yang diawali kata hubung seperti `Although`, `Because`, `Since`, atau `While` bukanlah kalimat yang utuh (*sentence fragment*). Klausa semacam ini berfungsi sebagai anak kalimat dan membutuhkan klausa utama (*independent clause*) agar gagasan yang disampaikan menjadi lengkap dan tuntas. Jika dibiarkan berdiri sendiri, pembaca akan merasa informasi terputus di tengah jalan. Di dunia kerja, menyajikan fragment dalam ringkasan laporan insiden membuat penjelasan terlihat tidak tuntas dan meragukan.",
          "example": {
            "code": "❌ Although the system passed all automated integration tests.\n✅ Although the system passed all automated integration tests, the team ran manual checks.",
            "output": "Sebelum : klausa tergantung berdiri sendiri tanpa akibat atau kelanjutan gagasan.\nSesudah : klausa utama ditambahkan setelah koma untuk melengkapi seluruh konteks.",
            "note": "Klausa dependen di awal kalimat selalu diikuti tanda koma sebelum klausa utama dimulai."
          },
          "instruction": "Skenario: kamu sedang menyusun laporan verifikasi pencadangan data. Klausa subordinat di editor masih menggantung sebagai sentence fragment. Tulis ulang menjadi SATU kalimat utuh dengan menambahkan tanda koma dan klausa utama bahwa tim kamu tetap melakukan pemeriksaan manual secara tuntas. Pastikan diakhiri tanda titik.",
          "starterCode": "Although the database backup completed successfully",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(although|even\\s+though|though|while)\\b[^,.]*,\\s*\\S",
              "flags": "i",
              "message": "Klausa subordinat pembuka harus ditutup tanda koma sebelum klausa utama menyusul."
            },
            {
              "pattern": ",\\s*(we|i|our\\s+\\w+|my\\s+\\w+|the\\s+team|the\\s+\\w+\\s+team)\\b",
              "flags": "i",
              "message": "Setelah koma belum ada subjek pelaku. Klausa utama butuh subjek yang melakukan pemeriksaan."
            },
            {
              "pattern": "\\b(performed|conducted|ran|carried\\s+out|completed|did|repeated)\\b[^.]*\\b(thorough\\s+|careful\\s+|detailed\\s+|additional\\s+)?manual\\s+(\\w+\\s+){0,2}(checks?|verifications?|audits?|reviews?|inspections?|tests?|testing)\\b|\\b(performed|conducted|ran|carried\\s+out|completed|did|repeated)\\b[^.]*\\b(checks?|verifications?|audits?|reviews?|inspections?|tests?)\\s+manually\\b",
              "flags": "i",
              "message": "Klausa utama belum menyatakan bahwa pemeriksaan manual tetap kamu lakukan."
            },
            {
              "pattern": "\\.\\s*$",
              "flags": "i",
              "message": "Kalimat belum diakhiri tanda titik seperti yang diminta instruksi."
            },
            {
              "pattern": "\\b(although|even\\s+though|though)\\b[^,.]*\\.\\s*$",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Klausa subordinat masih berdiri sendiri tanpa klausa utama — itu masih sentence fragment."
            }
          ],
          "solution": "Although the database backup completed successfully, we still performed a manual check.",
          "susunKode": {
            "question": "Susun klausa ini menjadi satu kalimat utuh yang bebas dari kesalahan fragment.",
            "potongan": [
              "Although the database backup completed successfully,",
              "we still performed",
              "a manual check."
            ],
            "pengecoh": [
              "Although the database backup completed successfully.",
              "and we still performed"
            ],
            "pemisah": " ",
            "explanation": "Klausa pengantar yang diawali 'Although' harus disambung dengan tanda koma menuju klausa utama. Pengecoh bertitik pada klausa awal sering menggoda pembelajar karena keliru menganggap klausa panjang sudah otomatis menjadi kalimat utuh. Pengecoh yang menambahkan 'and' juga keliru karena merusak hubungan subordinasi kalimat."
          }
        },
        {
          "kind": "step",
          "id": "beng-1-2",
          "title": "Memperbaiki Run-on Sentence",
          "explanation": "Dua klausa independen yang lengkap tidak boleh digabungkan berdampingan tanpa tanda baca pemisah atau kata hubung koordinatif (*run-on sentence*). Kesalahan ini membuat dua gagasan yang sebenarnya mandiri bertabrakan tanpa jeda napas bagi pembaca. Cara perbaikan standar adalah menambahkan tanda koma yang diikuti coordinating conjunction seperti `so`, `and`, atau `but`, atau memisahkannya dengan tanda titik. Dalam komunikasi teknis, memisahkan dua ide aksi secara jelas membantu pembaca memahami hubungan sebab-akibat dengan akurat.",
          "example": {
            "code": "❌ The staging server crashed we deployed the hotfix immediately.\n✅ The staging server crashed, so we deployed the hotfix immediately.",
            "output": "Sebelum : dua klausa utuh bertabrakan langsung tanpa jeda atau konektor.\nSesudah : koma dan kata hubung 'so' memperjelas hubungan sebab dan tindakan.",
            "note": "Gunakan koma sebelum coordinating conjunction (FANBOYS) ketika menghubungkan dua klausa utuh."
          },
          "instruction": "Skenario: kamu mencatat tindakan pemulihan sistem pada log pemeliharaan infrastruktur. Dua klausa di editor bertabrakan sebagai run-on sentence. Perbaiki kalimat tersebut menjadi SATU kalimat majemuk yang menghubungkan sebab dan akibat dengan menyisipkan tanda koma dan kata hubung konsekuensi di antara kedua klausa. Jangan menghapus kata yang sudah ada.",
          "starterCode": "The production server crashed we restored it from the latest snapshot.",
          "language": "text",
          "tests": [
            {
              "pattern": ",\\s*(so|and\\s+so|and\\s+therefore|and\\s+thus|and\\s+as\\s+a\\s+result|and\\s+consequently)\\b",
              "flags": "i",
              "message": "Belum ada koma diikuti kata hubung konsekuensi yang memisahkan kedua klausa."
            },
            {
              "pattern": "\\bserver\\s+(\\w+\\s+)?crashed\\b",
              "flags": "i",
              "message": "Klausa sebab tentang server yang mati harus tetap ada — jangan hapus kata yang sudah tersedia."
            },
            {
              "pattern": "\\b(restored|recovered|rebuilt)\\b[^.]*\\bsnapshot\\b",
              "flags": "i",
              "message": "Klausa akibat tentang pemulihan dari snapshot harus tetap ada di kalimat yang sama."
            },
            {
              "pattern": "\\bcrashed\\s+we\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Dua klausa masih bertabrakan langsung tanpa pemisah — itu ciri run-on sentence."
            },
            {
              "pattern": "\\b(was|were|is|are)\\s+crashed\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kata kerja `crash` di sini intransitif, jadi bentuk pasif tidak tepat."
            }
          ],
          "solution": "The production server crashed, so we restored it from the latest snapshot.",
          "susunKode": {
            "question": "Susun kedua klausa ini menjadi satu kalimat majemuk yang benar menggunakan penghubung sebab-akibat.",
            "potongan": [
              "The production server crashed,",
              "so we restored it",
              "from the latest snapshot."
            ],
            "pengecoh": [
              "The production server was crashed,",
              "so we restoring it"
            ],
            "pemisah": " ",
            "explanation": "Hubungan logis antara server yang tumbang dan tindakan pemulihan dihubungkan dengan ', so'. Pengecoh 'was crashed' sering menggoda karena pembelajar mengira crash membutuhkan kata kerja pasif. Pengecoh 'so we restoring' adalah bentuk keliru yang melanggar tenses kalimat."
          }
        },
        {
          "kind": "step",
          "id": "beng-1-3",
          "title": "Subject-Verb Agreement dengan Frasa Penyisip",
          "explanation": "Kata kerja (*verb*) wajib menyesuaikan bentuknya dengan subjek utama, bukan dengan kata benda di dalam frasa penyisip yang mendahuluinya. Frasa preposisi seperti `of pending pull requests` atau `along with the engineers` sering menjebak penulis untuk memilih kata kerja jamak karena kata terdekatnya berbentuk jamak. Untuk menentukan kata kerja yang tepat, temukan inti subjek kalimat (dalam hal ini kata tunggal `The list`) dan abaikan frasa penjelas di antaranya. Ketelitian ini sangat krusial dalam menyusun ringkasan status operasional agar tulisan terlihat rapi dan taat kaidah.",
          "example": {
            "code": "❌ The collection of error logs are ready for analysis.\n✅ The collection of error logs is ready for analysis.",
            "output": "Sebelum : kata kerja 'are' keliru terpengaruh oleh kata benda jamak 'logs'.\nSesudah : kata kerja 'is' konsisten menyesuaikan subjek tunggal 'collection'.",
            "note": "Tutup sementara frasa preposisional di dalam tanda kurung mental untuk melihat subjek intinya."
          },
          "instruction": "Skenario: kamu mengirim pesan status antrean review kode ke channel tim. Kalimat di editor keliru menggunakan kata kerja jamak karena terpengaruh kata benda jamak di frasa penyisip. Perbaiki kata kerja bantu tersebut agar sesuai dengan subjek tunggal daftar antrean di awal kalimat. Pertahankan struktur kata lainnya.",
          "starterCode": "The list of pending pull requests are ready for review.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\blist\\s+of\\s+\\w+",
              "flags": "i",
              "message": "Subjek tunggal `the list of ...` harus dipertahankan sebagai inti kalimat."
            },
            {
              "pattern": "\\bis\\s+(\\w+\\s+){0,2}ready\\b",
              "flags": "i",
              "message": "Kata kerja bantu harus tunggal karena inti subjeknya tunggal, bukan kata benda jamak di frasa penyisip."
            },
            {
              "pattern": "\\b(are|were)\\s+(\\w+\\s+){0,2}ready\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu masih memakai kata kerja jamak. Frasa penyisip jamak tidak menentukan bentuk kata kerja."
            },
            {
              "pattern": "\\b(requests|reviews|prs)\\s+(are|were)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kata benda jamak di frasa penyisip bukan subjek kalimat, jadi kata kerjanya jangan disesuaikan ke situ."
            }
          ],
          "solution": "The list of pending pull requests is ready for review.",
          "susunKode": {
            "question": "Susun kalimat ini dengan kesesuaian subjek dan kata kerja yang tepat.",
            "potongan": [
              "The list of pending pull requests",
              "is ready",
              "for review."
            ],
            "pengecoh": [
              "are ready",
              "were being ready"
            ],
            "pemisah": " ",
            "explanation": "Subjek utama adalah 'The list' (tunggal), sehingga kata kerja yang benar adalah 'is ready'. Pengecoh 'are ready' sangat menggoda karena letaknya persis setelah kata jamak 'requests'. Pengecoh 'were being ready' keliru secara bentuk tense dan aspek bahasa Inggris."
          }
        },
        {
          "kind": "step",
          "id": "beng-1-4",
          "title": "Tugas Mengarang: Pembaruan Insiden dengan Tense Konsisten",
          "explanation": "Dalam pelaporan teknis pasca-insiden (*post-incident report*), seluruh kronologi peristiwa lampau wajib ditulis dengan *simple past tense* yang konsisten. Pergeseran waktu (*tense shift*) ke bentuk *present* di tengah laporan akan mengaburkan batas antara tindakan yang sudah tuntas dilakukan dan tindakan yang masih berlangsung. Menyusun kalimat lampau yang kuat diawali dengan subjek tim yang jelas, diikuti *action verb* bentuk lampau (`identified`, `resolved`, `investigated`), objek masalah, dan keterangan waktu spesifik. Struktur kalimat yang lugas dan konsisten mencerminkan profesionalitas penanganan insiden teknologi.",
          "example": {
            "code": "❌ Our security team investigates the breach and patched the vulnerability yesterday.\n✅ Our security team investigated the breach and patched the vulnerability yesterday.",
            "output": "Sebelum : kata kerja 'investigates' (present) bertabrakan dengan 'patched' (past).\nSesudah : seluruh kata kerja aksi konsisten menggunakan bentuk lampau (past tense).",
            "note": "Semua kata kerja dalam satu klausa gabungan kronologi lampau harus berakhiran past tense."
          },
          "instruction": "Skenario: kamu menulis satu kalimat pembaruan status insiden untuk dikirim ke manajer teknik. Tulis SATU kalimat pernyataan kronologis utuh dengan bentuk kata kerja lampau yang konsisten. Unsur wajib: (1) subjek tim pelaku di awal kalimat, (2) kata kerja lampau untuk menemukan masalah, (3) kata sambung koordinatif dan kata kerja lampau untuk tindakan penyelesaian, (4) objek insiden teknis yang ditangani, dan (5) keterangan waktu lampau di akhir kalimat. Dilarang menggunakan kata kerja bentuk present tense apa pun.",
          "starterCode": "# Tulis satu kalimat laporan insiden lampau di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(we\\b|i\\b|our\\b|my\\b|the\\b|[a-z][\\w']*\\s+(and|&)\\s+\\w+|[a-z][\\w']*\\s+(team|squad|group|engineers|developers|staff|unit)\\b|[a-z][\\w']*\\s+(identified|discovered|found|detected|spotted|noticed|uncovered|traced|located)\\b)",
              "flags": "i",
              "message": "Kalimat harus dibuka oleh subjek tim pelaku, bukan unsur lain."
            },
            {
              "pattern": "\\b(identified|discovered|found|detected|spotted|noticed|uncovered|traced|located)\\b",
              "flags": "i",
              "message": "Belum ada kata kerja lampau yang menyatakan masalah itu ditemukan."
            },
            {
              "pattern": "\\b(and|then|but)\\s+(\\w+\\s+){0,2}(resolved|fixed|repaired|patched|addressed|corrected|mitigated|solved|remediated|restored|eliminated)\\b",
              "flags": "i",
              "message": "Belum ada kata sambung koordinatif yang diikuti kata kerja lampau untuk tindakan penyelesaian."
            },
            {
              "pattern": "\\b(issue|issues|bug|bugs|outage|problem|vulnerability|incident|error|defect|failure|glitch|crash|regression|downtime)\\b",
              "flags": "i",
              "message": "Objek insiden teknis yang ditangani belum disebutkan."
            },
            {
              "pattern": "(yesterday|last\\s+\\w+|this\\s+morning|this\\s+afternoon|earlier\\s+today|earlier\\s+this\\s+\\w+|\\w+\\s+ago|on\\s+\\w+day(\\s+\\w+)?|overnight)\\s*[.!]?\\s*$",
              "flags": "i",
              "message": "Keterangan waktu lampau di akhir kalimat belum ada, jadi kronologinya tidak jelas."
            },
            {
              "pattern": "\\b(identify|identifies|discover|discovers|find|finds|detect|detects|resolve|resolves|fix|fixes|patch|patches|address|addresses|is|are|am|has|have)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Masih ada kata kerja bentuk present tense, padahal seluruh tindakan sudah selesai di masa lampau."
            }
          ],
          "solution": "Our team identified and resolved the issue yesterday.",
          "susunKode": {
            "question": "Susun kalimat pembaruan insiden ini dengan kata kerja lampau yang konsisten.",
            "potongan": [
              "Our team identified",
              "and resolved the issue",
              "yesterday."
            ],
            "pengecoh": [
              "Our team identifies",
              "and resolve the issue"
            ],
            "pemisah": " ",
            "explanation": "Seluruh kata kerja aksi dalam klausa ini harus berbentu past tense ('identified' dan 'resolved') karena terjadi di waktu lampau ('yesterday'). Pengecoh 'Our team identifies' sering menggoda karena kebiasaan mencampur present tense saat mendeskripsikan ringkasan. Pengecoh 'and resolve' juga keliru karena melanggar konsistensi bentuk kata kerja majemuk."
          }
        },
        {
          "kind": "step",
          "id": "beng-1-5",
          "title": "Aturan Kapitalisasi pada Jadwal dan Nama Resmi",
          "explanation": "Dalam bahasa Inggris, nama hari (*Monday*, *Tuesday*), nama bulan (*January*, *October*), dan nama bahasa atau kebangsaan (*English*, *Indonesian*) WAJIB diawali huruf kapital di mana pun posisinya dalam kalimat. Aturan ini berbeda dari bahasa Indonesia yang menulis nama hari dan bahasa dengan huruf kecil jika berada di tengah kalimat. Menulis `monday` atau `english` dengan huruf kecil adalah penanda visual yang langsung terbaca tidak profesional oleh rekan kerja dan klien global. Menjaga kedisiplinan kapitalisasi memastikan dokumen jadwal kerja dan pengumuman sprint terlihat formal dan rapi.",
          "example": {
            "code": "❌ The sprint planning is scheduled for wednesday in japanese.\n✅ The sprint planning is scheduled for Wednesday in Japanese.",
            "output": "Sebelum : nama hari dan bahasa ditulis huruf kecil di tengah kalimat.\nSesudah : 'Wednesday' dan 'Japanese' dikapitalisasi sesuai aturan baku bahasa Inggris.",
            "note": "Nama bahasa, negara, hari, dan bulan selalu diawali huruf besar dalam bahasa Inggris."
          },
          "instruction": "Skenario: kamu mengirimkan undangan kalender rapat mingguan ke tim global. Kalimat di editor memuat kesalahan huruf kecil pada nama hari dan nama bahasa di tengah kalimat. Perbaiki kedua kata tersebut dengan mengkapitalisasi huruf pertama pada nama hari Senin dan bahasa Inggris. Jangan mengubah susunan kata lainnya.",
          "starterCode": "The weekly sprint review is on monday in english.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bMonday\\b",
              "flags": "",
              "message": "Nama hari adalah nama diri, jadi huruf pertamanya wajib kapital di tengah kalimat."
            },
            {
              "pattern": "\\bEnglish\\b",
              "flags": "",
              "message": "Nama bahasa juga nama diri, jadi huruf pertamanya wajib kapital."
            },
            {
              "pattern": "\\bmonday\\b",
              "flags": "",
              "mustNotMatch": true,
              "message": "Masih ada nama hari berhuruf kecil di kalimatmu."
            },
            {
              "pattern": "\\benglish\\b",
              "flags": "",
              "mustNotMatch": true,
              "message": "Masih ada nama bahasa berhuruf kecil di kalimatmu."
            }
          ],
          "solution": "The weekly sprint review is on Monday in English.",
          "susunKode": {
            "question": "Susun kalimat jadwal rapat ini dengan kapitalisasi nama hari dan bahasa yang tepat.",
            "potongan": [
              "The weekly sprint review",
              "is on Monday",
              "in English."
            ],
            "pengecoh": [
              "is on monday",
              "in english."
            ],
            "pemisah": " ",
            "explanation": "Nama hari ('Monday') dan nama bahasa ('English') wajib diawali huruf kapital dalam bahasa Inggris. Pengecoh berhuruf kecil 'monday' dan 'english' sangat menggoda penutur Indonesia karena kebiasaan bahasa ibu yang tidak mengkapitalisasi nama hari dan bahasa di tengah kalimat."
          }
        },
        {
          "kind": "step",
          "id": "beng-1-6",
          "title": "Memperbaiki Ambiguitas Pronoun Reference",
          "explanation": "Kata ganti (*pronoun*) seperti `he`, `she`, `it`, atau `they` harus merujuk secara tegas dan tidak ambigu ke satu kata benda sebelumnya (*antecedent*). Jika terdapat dua pihak dalam klausa pertama (misalnya `the manager` dan `the client`), penggunaan pronoun `he` di klausa kedua akan membingungkan pembaca: siapakah yang merasa puas? Solusi paling profesional adalah mengganti kata ganti yang rancu tersebut dengan menyebutkan kembali kata benda spesifik yang dimaksud. Kejelasan ini sangat penting dalam risalah rapat (*meeting minutes*) dan korespondensi bisnis agar tidak ada keraguan penanggung jawab.",
          "example": {
            "code": "❌ When the director met the contractor, he approved the design.\n✅ When the director met the contractor, the director approved the design.",
            "output": "Sebelum : pronoun 'he' ambigu karena bisa merujuk ke director maupun contractor.\nSesudah : menyebutkan subjek spesifik 'the director' menghapus seluruh keraguan makna.",
            "note": "Ulangi kata bendanya secara eksplisit jika ada potensi ambiguitas acuan kata ganti."
          },
          "instruction": "Skenario: kamu menulis catatan hasil pertemuan bisnis pada rangkuman mingguan. Kalimat di editor menggunakan kata ganti orang ketiga tunggal yang rancu karena ada dua subjek maskulin di klausa pertama. Ganti kata ganti yang ambigu tersebut menjadi subjek spesifik pihak yang puas, yaitu pihak klien. Pertahankan sisa kalimat lainnya.",
          "starterCode": "When the manager met the client, he was satisfied with the demo.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bthe\\s+manager\\s+met\\s+the\\s+client\\b",
              "flags": "i",
              "message": "Klausa pertama dengan dua pihak itu harus dipertahankan seperti aslinya."
            },
            {
              "pattern": ",\\s*the\\s+client\\b",
              "flags": "i",
              "message": "Klausa kedua harus dibuka subjek spesifik pihak yang puas, bukan kata ganti."
            },
            {
              "pattern": "\\b(was|felt|seemed|looked)\\s+(\\w+\\s+){0,2}(satisfied|pleased|happy|impressed|delighted)\\b",
              "flags": "i",
              "message": "Bagian yang menyatakan kepuasan terhadap demo belum lengkap."
            },
            {
              "pattern": ",\\s*(he|she|they)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kata ganti di klausa kedua masih ambigu karena ada dua pihak yang bisa jadi acuannya."
            }
          ],
          "solution": "When the manager met the client, the client was satisfied with the demo.",
          "susunKode": {
            "question": "Susun kalimat ini dengan acuan subjek yang jelas dan tidak ambigu.",
            "potongan": [
              "When the manager met the client,",
              "the client was satisfied",
              "with the demo."
            ],
            "pengecoh": [
              "he was satisfied",
              "it was satisfied"
            ],
            "pemisah": " ",
            "explanation": "Mengganti pronoun 'he' dengan 'the client' memastikan pembaca tahu persis siapa pihak yang puas. Pengecoh 'he was satisfied' menggoda karena lebih pendek, tetapi menimbulkan ambiguitas fatal apakah yang puas manajer atau klien. Pengecoh 'it was satisfied' salah karena manusia tidak dirujuk dengan pronoun 'it'."
          }
        },
        {
          "kind": "step",
          "id": "beng-1-7",
          "title": "Tugas Mengarang: Memperbaiki Dangling Modifier Menjadi Kalimat Aktif",
          "explanation": "Frasa keterangan pembuka yang diawali bentuk gerund (seperti `After analyzing the logs,`) harus langsung diikuti oleh subjek logis yang melakukan tindakan tersebut. Jika kata pertama setelah koma adalah kata benda mati (seperti `the bug` atau `the anomaly`), kalimat tersebut menjadi *dangling modifier* yang secara konyol menyiratkan bahwa bug tersebut yang menganalisis log. Struktur kalimat yang benar menempatkan tim pelaku (`our engineers`, `we`, atau `the security team`) tepat setelah tanda koma, diikuti kata kerja aktif lampau (`discovered`, `identified`, `found`) dan objek masalah. Penguasaan pola aktif ini membuat dokumentasi analisis teknis terbaca tajam dan profesional.",
          "example": {
            "code": "❌ After reviewing the audit data, the vulnerability was discovered.\n✅ After reviewing the audit data, our engineers discovered the vulnerability.",
            "output": "Sebelum : frasa pembuka menggantung tanpa pelaku logis di klausa utama.\nSesudah : subjek pelaku 'our engineers' ditaruh tepat setelah koma.",
            "note": "Pastikan subjek setelah koma adalah pihak yang secara logis melakukan tindakan di frasa pembuka."
          },
          "instruction": "Skenario: kamu mendokumentasikan investigasi performa server pada laporan teknis. Tulis SATU kalimat aktif yang diawali frasa pembuka analisis log tanpa cacat dangling modifier. Unsur wajib: (1) awali kalimat dengan frasa pembuka gerund peninjauan log yang diikuti tanda koma, (2) tempatkan subjek tim pelaku tepat setelah tanda koma, (3) gunakan kata kerja aktif lampau untuk tindakan menemukan masalah, dan (4) sebutkan objek anomali trafik di akhir kalimat. Dilarang menggunakan konstruksi pasif tanpa pelaku setelah tanda koma.",
          "starterCode": "# Tulis satu kalimat aktif perbaikan investigasi log di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(after\\s+|while\\s+|upon\\s+|when\\s+)?\\w+ing\\b[^,.]*\\blogs?\\b\\s*,",
              "flags": "i",
              "message": "Kalimat harus dibuka frasa gerund tentang peninjauan log lalu ditutup tanda koma."
            },
            {
              "pattern": ",\\s*[\\w']+(\\s+[\\w']+){0,3}\\s+(?<!\\b(?:was|were|been|being|is|are|got)\\s)(discovered|identified|found|detected|noticed|spotted|uncovered|traced|isolated|pinpointed)\\b",
              "flags": "i",
              "message": "Setelah koma harus langsung ada subjek pelaku diikuti kata kerja aktif lampau, kalau tidak frasa pembukanya menggantung."
            },
            {
              "pattern": "(traffic\\s+(\\w+\\s+){0,2}anomal\\w+|anomal\\w+\\s+(in|of)\\s+(the\\s+)?(\\w+\\s+){0,2}traffic)",
              "flags": "i",
              "message": "Objek yang ditemukan belum disebut, yaitu anomali pada trafik."
            },
            {
              "pattern": "\\b(was|were)\\s+(\\w+\\s+){0,2}(discovered|identified|found|detected|noticed|spotted)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Konstruksi pasif tanpa pelaku membuat frasa pembuka jadi dangling modifier."
            }
          ],
          "solution": "After analyzing the logs, our engineers discovered the traffic anomaly.",
          "susunKode": {
            "question": "Susun kalimat ini agar bebas dari kesalahan dangling modifier dengan subjek aktif yang jelas.",
            "potongan": [
              "After analyzing the logs,",
              "our engineers discovered",
              "the traffic anomaly."
            ],
            "pengecoh": [
              "the traffic anomaly was discovered",
              "and discovering server logs."
            ],
            "pemisah": " ",
            "explanation": "Pelaku tindakan analisis ('our engineers') harus diletakkan tepat setelah frasa pembuka. Pengecoh 'the traffic anomaly was discovered' sering menggoda karena bentuk pasif tampak ilmiah, padahal menciptakan cacat dangling modifier. Pengecoh 'and discovering server logs' keliru karena tidak menyebut objek anomali trafik dan merusak struktur kalimat."
          }
        },
        {
          "kind": "step",
          "id": "beng-1-8",
          "title": "Tugas Mengarang: Kalimat Kinerja Sistem dengan Pasangan Adjective dan Adverb",
          "explanation": "Menyusun rekomendasi performa sistem menuntut ketepatan penggunaan *adjective* dan *adverb*. Adverb menerangkan kata kerja tindakan (misalnya aplikasi beroperasi secara lancar -> `operates smoothly` atau `runs efficiently`). Sebaliknya, adjective menerangkan kata benda hasil (misalnya memberikan performa yang andal -> `reliable performance` atau `stable performance`). Kesalahan fatal yang sering dilakukan pembelajar adalah menukar keduanya (seperti `operates smooth` atau `reliably performance`). Menggabungkan keduanya dalam satu kalimat rekomendasi yang seimbang membuktikan kematangan tata bahasa bisnismu.",
          "example": {
            "code": "❌ The new database runs quick and delivers a reliably performance.\n✅ The new database runs quickly and delivers a reliable performance.",
            "output": "Sebelum : 'quick' (adjective) keliru menerangkan verb, 'reliably' (adverb) keliru menerangkan noun.\nSesudah : 'quickly' menerangkan kata kerja 'runs', 'reliable' menerangkan kata benda 'performance'.",
            "note": "Gunakan akhiran -ly untuk adverb yang menerangkan verb, dan bentuk kata sifat dasar untuk noun."
          },
          "instruction": "Skenario: kamu menulis kesimpulan optimasi server untuk laporan kinerja kuartalan. Tulis SATU kalimat pernyataan performa sistem yang menggabungkan pasangan kata keterangan (adverb) dan kata sifat (adjective) secara tepat. Unsur wajib: (1) subjek sistem di awal kalimat, (2) kata kerja present tense diikuti kata keterangan berakhiran -ly yang menerangkan kelancaran/efisiensi operasi, (3) kata sambung koordinatif dan kata kerja penyediaan, dan (4) frasa benda yang diterangkan oleh kata sifat keandalan/stabilitas. Dilarang menggunakan kata sifat tanpa -ly untuk menerangkan kata kerja, dan dilarang menggunakan kata keterangan berakhiran -ly untuk menerangkan kata benda.",
          "starterCode": "# Tulis satu kalimat rekomendasi performa dengan adjective dan adverb yang tepat di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(the|our|this|a)\\s+(\\w+\\s+){0,3}(server|system|application|app|platform|service|pipeline|dashboard|tool|infrastructure)\\b",
              "flags": "i",
              "message": "Kalimat harus dibuka subjek sistem yang sedang kamu nilai."
            },
            {
              "pattern": "\\b(runs|operates|performs|works|functions|executes|processes|handles)\\s+(\\w+\\s+){0,2}(smoothly|efficiently|reliably|seamlessly|stably|flawlessly|consistently|steadily)\\b",
              "flags": "i",
              "message": "Kata kerja present tense-nya belum diterangkan kata keterangan berakhiran -ly soal kelancaran operasi."
            },
            {
              "pattern": "\\b(and|and\\s+also)\\s+(\\w+\\s+){0,2}(delivers|provides|offers|ensures|supplies|guarantees|maintains|gives|yields)\\b",
              "flags": "i",
              "message": "Belum ada kata sambung koordinatif diikuti kata kerja penyediaan hasil."
            },
            {
              "pattern": "\\b(reliable|stable|dependable|consistent|robust|steady|solid|predictable)\\s+(\\w+\\s+){0,2}(performance|uptime|results|service|output|throughput|availability|response\\s+times)\\b",
              "flags": "i",
              "message": "Frasa bendanya belum diterangkan kata sifat keandalan atau stabilitas."
            },
            {
              "pattern": "\\b(runs|operates|performs|works|functions|executes)\\s+(smooth|efficient|reliable|stable|quick|good|steady)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Yang menerangkan kata kerja itu adverb, bukan adjective tanpa -ly."
            },
            {
              "pattern": "\\b\\w+ly\\s+(performance|uptime|results|service|output|throughput|availability)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Yang menerangkan kata benda itu adjective, bukan adverb berakhiran -ly."
            }
          ],
          "solution": "The new server operates smoothly and delivers reliable performance.",
          "susunKode": {
            "question": "Susun kalimat evaluasi performa ini dengan pasangan adjective dan adverb yang tepat.",
            "potongan": [
              "The new server operates smoothly",
              "and delivers",
              "reliable performance."
            ],
            "pengecoh": [
              "The new server operates with smooth",
              "reliably performance."
            ],
            "pemisah": " ",
            "explanation": "'Smoothly' adalah adverb yang tepat untuk kata kerja 'operates', sedangkan 'reliable' adalah adjective untuk kata benda 'performance'. Pengecoh 'operates with smooth' sering menggoda karena kebiasaan bahasa ibu yang menerjemahkan 'dengan lancar' secara harafiah. Pengecoh 'reliably performance' keliru karena adverb tidak boleh menerangkan kata benda tunggal."
          }
        },
        {
          "kind": "quiz",
          "id": "beng-1-k1",
          "title": "Kuis: Struktur Dasar Kalimat, Kesalahan Fatal, dan Keteraturan Kalimat",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Kamu sedang meninjau draf pembaruan rilis perangkat lunak yang ditulis oleh anggota tim junior. Perhatikan cuplikan berikut: 'Because the migration script encountered an unexpected lock.' Mengapa kalimat tersebut dikategorikan sebagai sentence fragment?",
              "choices": [
                "A. Karena tidak memiliki subjek pelaku maupun kata kerja sama sekali.",
                "B. Keberadaan kata hubung subordinat 'Because' menjadikannya klausa dependen yang membutuhkan klausa utama untuk melengkapi gagasannya.",
                "C. Karena kata kerja 'encountered' berbentuk lampau sedangkan rilis berjalan di masa kini.",
                "D. Karena istilah teknis 'lock' wajib diawali artikel definit 'the'."
              ],
              "answerIndex": 1,
              "explanation": "Kata hubung subordinat 'Because' mengubah klausa menjadi anak kalimat yang bergantung pada klausa utama. Tanpa klausa utama yang menjelaskan akibatnya, kalimat tersebut menggantung sebagai sentence fragment. Pilihan A salah karena ada subjek dan kata kerja. Pilihan C dan D bukan penyebab fragment."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Seorang analis data menuliskan pesan status berikut pada dashboard tim: 'The data pipeline finished processing we verified the metrics.' Bagaimanakah cara terbaik memperbaiki kesalahan run-on sentence tersebut menjadi satu kalimat majemuk yang benar?",
              "choices": [
                "A. 'The data pipeline finished processing, and we verified the metrics.'",
                "B. 'The data pipeline finished processing we, verified the metrics.'",
                "C. 'The data pipeline finished processing; and we verified the metrics.'",
                "D. 'The data pipeline finished processing, we verified the metrics.'"
              ],
              "answerIndex": 0,
              "explanation": "Dua klausa independen dapat disambung dengan koma dan coordinating conjunction 'and'. Pilihan B salah menempatkan koma, pilihan C salah memadukan titik koma dengan 'and', dan pilihan D menghasilkan comma splice."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu sedang memeriksa draf laporan audit operasional jaringan. Perhatikan kalimat berikut: 'The lead engineer together with three security consultants [is / are] reviewing the firewall rules.' Bentuk kata kerja manakah yang benar secara kaidah subject-verb agreement?",
              "choices": [
                "A. 'are', karena ada empat orang yang terlibat dalam peninjauan aturan firewall.",
                "B. 'are', karena kata benda terdekat sebelum kata kerja adalah kata jamak 'consultants'.",
                "C. 'is', karena subjek gramatikal utamanya adalah 'The lead engineer' (tunggal), sedangkan frasa 'together with' adalah frasa penyisip yang tidak mengubah jumlah subjek.",
                "D. 'is', karena kata kerja bantu present tense selalu berbentuk tunggal dalam tulisan formal."
              ],
              "answerIndex": 2,
              "explanation": "Frasa penyisip seperti 'together with', 'along with', atau 'as well as' tidak mengubah jumlah subjek kalimat. Subjek aslinya adalah 'The lead engineer' (tunggal), sehingga kata kerja yang sesuai adalah 'is'."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu bertindak sebagai lead QA yang sedang menyusun ringkasan pengujian rilis mingguan. Manakah kalimat berikut yang mempertahankan konsistensi verb tense secara BENAR?",
              "choices": [
                "A. The QA team executes the automated test suite and reported zero critical bugs yesterday.",
                "B. The QA team executed the automated test suite and resolves all issues yesterday.",
                "C. The QA team executed the automated test suite and will report zero bugs yesterday.",
                "D. The QA team executed the automated test suite and reported zero critical bugs yesterday."
              ],
              "answerIndex": 3,
              "explanation": "Kedua kata kerja ('executed' dan 'reported') konsisten menggunakan past tense karena seluruh peristiwa terjadi di linimasa lampau yang ditandai keterangan waktu 'yesterday'. Pilihan A, B, dan C mencampuradukkan tense secara tidak logis."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu sedang mengedit draf pengumuman pelatihan internal perusahaan. Pilihlah kalimat berikut yang menerapkan seluruh kaidah kapitalisasi bahasa Inggris secara BENAR:",
              "choices": [
                "A. The advanced python workshop will start on tuesday in French.",
                "B. The advanced Python workshop will start on Tuesday in French.",
                "C. The advanced Python workshop will start on Tuesday in french.",
                "D. The advanced Python Workshop will start on tuesday in French."
              ],
              "answerIndex": 1,
              "explanation": "Nama bahasa ('French'), nama bahasa pemrograman resmi ('Python'), dan nama hari ('Tuesday') wajib diawali huruf kapital. Kata benda umum seperti 'workshop' tidak dikapitalisasi di tengah kalimat."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Seorang teknisi menuliskan catatan berikut pada tiket insiden: 'Having completed the routine database maintenance, the server rebooted automatically.' Apa masalah tata bahasa mendasar pada kalimat tersebut?",
              "choices": [
                "A. Terjadi kesalahan dangling modifier, karena frasa pembuka 'Having completed...' secara gramatikal menempel pada subjek 'the server', seolah-olah server itu sendiri yang melakukan pemeliharaan rutin.",
                "B. Penggunaan kata kerja lampau 'rebooted' tidak tepat untuk kejadian sistem otomatis.",
                "C. Frasa 'Having completed' tidak boleh digunakan dalam dokumentasi teknis formal.",
                "D. Kata keterangan 'automatically' wajib diletakkan sebelum kata kerja 'rebooted'."
              ],
              "answerIndex": 0,
              "explanation": "Dangling modifier terjadi ketika pelaku tindakan di frasa pembuka tidak menjadi subjek klausa utama. Pelaku pemeliharaan adalah tim teknis, bukan server. Kalimat yang benar: 'Having completed the routine database maintenance, the technician rebooted the server.'"
            }
          ]
        }
      ]
    },
    {
      "slug": "tanda-baca",
      "title": "Tanda Baca",
      "description": "Delapan tanda baca yang menentukan apakah kalimatmu terbaca sesuai maksud — koma, titik koma, titik dua, kutip, apostrof, kurung, dash, dan hyphen.",
      "topics": [
        "Comma: pemakaian yang benar dan yang berlebihan",
        "Semicolon: menyambung dua kalimat setara",
        "Colon: memperkenalkan daftar dan penjelasan",
        "Quotation marks: kutipan langsung dan judul",
        "Apostrophe: kepemilikan dan kontraksi",
        "Parentheses: informasi tambahan",
        "Dash: jeda yang menekankan",
        "Hyphen: menggabungkan kata jadi satu makna"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "beng-2-m1",
          "title": "Rambu Lalu Lintas Kalimat: Koma, Titik Koma, dan Titik Dua",
          "body": "# Tanda Baca Bukan Hiasan Visual\n\nDalam tulisan bisnis profesional, tanda baca adalah rambu pengatur ritme dan logika kalimat. Ia memberi tahu pembaca kapan harus mengambil jeda pendek, bagian mana yang merupakan penjelas tambahan, apa yang terhubung dengan apa, dan bagian mana yang menjadi inti keputusan. Perhatikan contoh klasik yang menggambarkan bagaimana satu tanda baca dapat mengubah arti secara radikal:\n\n```text\nLet's review, Sarah. -> Mengajak Sarah untuk meninjau dokumen bersama. [BENAR ✅]\nLet's review Sarah.  -> Mengajak orang lain untuk mengaudit kinerja Sarah. [ARTI BERBEDA ⚠️]\n```\n\nDalam dunia kerja nyata, kekeliruan penempatan koma pada dokumen perjanjian tingkat layanan (*SLA*) atau spesifikasi kontrak pernah memicu sengketa hukum bernilai jutaan dolar. Memahami fungsi presisi setiap tanda baca akan melindungi integritas komunikasimu.\n\n## Koma: Pemakaian yang Tepat dan Menghindari Pemakaian Berlebihan\n\nKoma (`,`) memiliki empat fungsi utama dalam tulisan bisnis modern:\n\n1. **Setelah Frasa Pembuka (Introductory Phrase)**: Memberi jeda bersih antara latar belakang dan klausa utama (`After reviewing the quarterly metrics, we updated the roadmap.`).\n2. **Memisahkan Butir Daftar (Series / Oxford Comma)**: Menggunakan koma sebelum kata sambung terakhir untuk mencegah kebingungan makna (`We need design, frontend, and backend approvals.`).\n3. **Sebelum Coordinating Conjunction**: Menghubungkan dua klausa independen bersama `for`, `and`, `nor`, `but`, `or`, `yet`, `so` (`The automated pipeline passed, so we triggered the production deploy.`).\n4. **Mengapit Informasi Tambahan Non-Esensial (Parenthetical Comma)**: Memberi keterangan tambahan yang jika dihapus tidak merusak arti kalimat (`Our lead architect, who joined last year, designed the new cluster.`).\n\n```text\nJebakan Koma Berlebihan (Comma Overuse):\n❌ \"The marketing director, sent the revised contract, to the client, on Friday.\"\n   (Koma memutus alur subjek-predikat dan predikat-objek secara tidak wajar)\n✅ \"The marketing director sent the revised contract to the client on Friday.\"\n```\n\n## Semicolon: Menyambung Dua Kalimat Setara yang Erat\n\nTitik koma (`;`) digunakan untuk menyambungkan dua klausa independen yang lengkap tanpa kata hubung koordinatif. Gunakan titik koma ketika kedua gagasan tersebut memiliki hubungan konseptual yang sangat dekat dan kamu ingin pembaca memahaminya sebagai satu kesatuan pikiran yang seimbang.\n\n```text\n❌ Comma Splice:  The production database is healthy, the cache layer needs a restart.\n✅ Semicolon:     The production database is healthy; the cache layer needs a restart.\n✅ Transition:    The production database is healthy; however, the cache layer needs a restart.\n```\n\nPerhatikan bahwa setelah titik koma, kata pertama **tidak** diawali huruf kapital kecuali berupa kata nama diri (*proper noun*) atau pronoun `I`.\n\n## Colon: Memperkenalkan Daftar dan Penjelasan Resmi\n\nTitik dua (`:`) bertugas memberi sinyal kuat kepada pembaca bahwa penjelasan terperinci, daftar butir, atau konsekuensi penting akan segera menyusul. Aturan mutlak penggunaan titik dua: **klausa sebelum tanda titik dua wajib berupa kalimat yang utuh (*complete thought*)**.\n\n| Pola Kalimat | Contoh Kalimat | Status |\n| --- | --- | --- |\n| **Klausa Utuh + Titik Dua** | `We evaluated three cloud providers: AWS, GCP, and Azure.` | **BENAR ✅** |\n| **Menempel Langsung pada Verb** | `The required cloud providers are: AWS, GCP, and Azure.` | **SALAH ❌** |\n| **Menempel pada Preposisi** | `The team migrated to: AWS and Azure.` | **SALAH ❌** |\n\nJangan pernah meletakkan titik dua langsung setelah kata kerja seperti `are`, `include`, atau `consist of`.\n\n## Jebakan yang Sering Terjadi\n\n1. **Menghubungkan dua kalimat mandiri dengan koma saja (*comma splice*).** Ini kesalahan tanda baca paling sering pada penutur non-native. Solusinya: gunakan titik koma, titik biasa, atau koma + conjunction `so`/`and`.\n2. **Memasang titik koma di depan anak kalimat (*dependent clause*).** Titik koma hanya boleh diletakkan di antara dua klausa yang sama-sama bisa berdiri sendiri.\n3. **Lupa memberi spasi tunggal setelah tanda koma, titik koma, atau titik dua.** Di era dokumen digital, spasi ganda setelah tanda baca sudah ditinggalkan.\n\n## Kaitan ke Dunia Kerja\n\nDi lingkungan kerja rekayasa perangkat lunak dan bisnis internasional, dokumentasi API dan perjanjian kontrak dibaca dengan tingkat ketelitian tinggi. Pemberian tanda baca yang presisi mencegah multitafsir hak dan kewajiban hukum antarperusahaan serta memastikan arsitektur teknis terdokumentasi tanpa celah keraguan."
        },
        {
          "kind": "materi",
          "id": "beng-2-m2",
          "title": "Apostrof, Tanda Hubung, Kurung, dan Tanda Kutip Profesional",
          "body": "# Tanda Baca Lanjutan untuk Presisi Dokumen Bisnis\n\nSelain koma dan titik koma, ada lima tanda baca spesifik yang sering menjadi batu sandungan: apostrof, tanda kutip, kurung, dash, dan hyphen.\n\n## Apostrophe: Kepemilikan vs Kontraksi (`its` vs `it's`)\n\nApostrof (`'`) memiliki dua tugas utama: menandai kepemilikan (*possession*) dan menandai huruf yang dihilangkan pada singkatan (*contraction*).\n\n```text\n1. Kontraksi: it's  = it is / it has       -> \"It's time to deploy the release.\"\n2. Kepemilikan: its = milik benda tunggal -> \"The server lost its network configuration.\"\n```\n\nUji cepat satu detik: gantilah kata tersebut dengan `it is`. Jika kalimat menjadi janggal, maka bentuk yang benar adalah `its` tanpa apostrof. Ingat bahwa seluruh pronoun kepemilikan bahasa Inggris (`its`, `his`, `hers`, `theirs`, `ours`) **tidak pernah** menggunakan apostrof.\n\n### Bentuk Jamak Akronim dan Singkatan\n\nApostrof **tidak boleh** digunakan untuk membuat bentuk jamak (*plural*). Singkatan huruf kapital seperti `PDF`, `API`, `KPI`, atau `CEO` cukup ditambahkan huruf `s` kecil di akhir tanpa apostrof (`PDFs`, `APIs`, `KPIs`, `CEOs`). Menulis `PDF's` berarti *'milik PDF'* atau *'PDF is'*.\n\n## Hyphen (`-`) pada Compound Modifier\n\nHyphen (tanda hubung pendek `-`) bertugas menyatukan dua atau lebih kata menjadi satu kesatuan makna ketika kata-kata tersebut berdiri bersama sebelum kata benda yang diterangkan (*compound modifier*).\n\n| Frasa | Arti yang Ditangkap Pembaca |\n| --- | --- |\n| `a small business owner` | Pemilik bisnis yang ukuran tubuhnya kecil (*an owner who is small*) |\n| `a small-business owner` | Pemilik dari sebuah usaha berskala kecil (*owner of a small business*) |\n| `a well-known framework` | Kerangka kerja yang terkenal luas (sebelum noun) |\n| `the framework is well known` | Tanpa hyphen, karena berada setelah noun |\n\n## Em Dash (`—`) vs En Dash (`–`) vs Parentheses (`( )`)\n\nTiga tanda ini mengatur penekanan informasi sampingan:\n\n```text\n1. Em Dash (—)    : Memberikan jeda kuat yang MENARIK PERHATIAN pada informasi penting.\n                    Contoh: \"One metric matters most to stakeholders—user retention.\"\n\n2. En Dash (–)    : Menyatakan RENTANG angka, tanggal, atau waktu.\n                    Contoh: \"The conference runs October 12–15 (pages 45–60).\"\n\n3. Kurung ( ( ) ) : Menampung INFORMASI SAMPINGAN opsional yang tidak penting bagi alur utama.\n                    Contoh: \"The migration script (tested on staging) is ready for execution.\"\n```\n\n## Quotation Marks: Kutipan Langsung dan Konvensi American English\n\nSaat mengutip pernyataan langsung (*direct quotation*) yang diawali frasa pengantar (seperti `stated`, `said`, `announced`), pisahkan frasa tersebut dengan tanda koma sebelum tanda kutip pembuka. Dalam standar **American English (AmE)**, tanda titik dan koma di akhir kutipan diletakkan di **dalam** tanda kutip penutup:\n\n```text\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Menambahkan apostrof pada bentuk jamak akronim.** Menulis `API's` untuk menyatakan banyak API adalah kesalahan umum; bentuk jamak yang benar adalah `APIs`.\n2. **Menukar `its` dan `it's`.** Ingat bahwa `its` adalah bentuk kepemilikan netral, sedangkan `it's` selalu merupakan singkatan dari `it is` atau `it has`.\n3. **Lupa memberi tanda hubung pada kata sifat majemuk sebelum kata benda.** Menulis `small business owner` bisa bermakna pemilik usaha yang berbadan kecil; gunakan `small-business owner`.\n\n## Kaitan ke Dunia Kerja\n\nDalam tinjauan proposal komersial dan dokumen kebijakan, penulisan akronim tanpa apostrof (`KPIs`) dan penggunaan hyphen yang akurat pada kata sifat majemuk (`high-risk transaction`) membuktikan standar kepenulisan yang matang. Kerapian tipografi ini membangun kepercayaan instan dari pihak manajemen dan klien korporat."
        },
        {
          "kind": "step",
          "id": "beng-2-1",
          "title": "Koma Setelah Frasa Pembuka",
          "explanation": "Frasa keterangan pembuka (*introductory phrase*) yang panjang di awal kalimat harus dipisahkan oleh tanda koma sebelum klausa utama dimulai. Koma ini memberi jeda visual yang jernih agar pembaca tidak menggabungkan kata terakhir frasa pengantar dengan subjek klausa utama secara keliru. Tanpa koma pemisah, struktur kalimat terasa bertumpuk dan memperlambat pemahaman pembaca. Dalam e-mail dan laporan profesional, kebiasaan menaruh koma setelah frasa pembuka mencerminkan kerapian tata bahasa yang disiplin.",
          "example": {
            "code": "❌ Before submitting the proposal we double-checked all figures.\n✅ Before submitting the proposal, we double-checked all figures.",
            "output": "Sebelum : frasa pembuka menempel langsung ke klausa utama tanpa jeda pemisah.\nSesudah : tanda koma memberi batas tegas antara latar belakang waktu dan aksi utama.",
            "note": "Jika frasa keterangan berada di akhir kalimat, tanda koma umumnya tidak diperlukan."
          },
          "instruction": "Skenario: kamu memperbarui prakiraan anggaran setelah memeriksa laporan kuartalan. Kalimat di editor menggabungkan frasa pengantar keterangan waktu dan klausa utama tanpa jeda tanda baca. Perbaiki kalimat tersebut dengan menyisipkan tanda koma tepat di akhir frasa pembuka laporan kuartalan sebelum klausa aksi pembaruan anggaran dimulai. Pertahankan seluruh kata asli.",
          "starterCode": "After reviewing the quarterly report we updated the budget forecast.",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(after|once|following|having|upon|when|before|since)\\b[^,]{3,}?,\\s*\\w",
              "flags": "i",
              "message": "Kalimatmu belum memberi jeda: frasa pembuka di awal kalimat harus ditutup koma sebelum klausa utama dimulai."
            },
            {
              "pattern": "\\bquarterly\\b[^,]*,",
              "flags": "i",
              "message": "Sebutan laporan kuartalan harus berada di dalam frasa pembuka, yaitu sebelum koma."
            },
            {
              "pattern": ",[^.]*\\b(updat\\w*|revis\\w*|adjust\\w*|chang\\w*|refresh\\w*|rework\\w*|correct\\w*)\\b[^.]*\\bbudget\\b",
              "flags": "i",
              "message": "Setelah koma harus ada klausa utama yang lengkap tentang pembaruan anggaran, bukan potongan frasa."
            },
            {
              "pattern": "\\b(report|results|figures|numbers|summary)\\s+(we|i|they|our|the)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Frasa pembuka masih menempel langsung ke subjek klausa utama tanpa koma, sehingga pembaca kehilangan jeda."
            },
            {
              "pattern": ",\\s*(and|but|so)\\s+",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Jangan menyisipkan kata hubung koordinatif (and/but/so) tepat setelah koma frasa pembuka."
            }
          ],
          "solution": "After reviewing the quarterly report, we updated the budget forecast.",
          "susunKode": {
            "question": "Susun kalimat ini dengan koma yang memisahkan frasa pembuka dari klausa utama secara tepat.",
            "potongan": [
              "After reviewing the quarterly report,",
              "we updated",
              "the budget forecast."
            ],
            "pengecoh": [
              "After reviewing the quarterly report.",
              "and we updated"
            ],
            "pemisah": " ",
            "explanation": "Frasa pembuka harus diakhiri tanda koma sebelum menyambung ke klausa utama 'we updated'. Pengecoh bertitik pada frasa pembuka sering menggoda penutur Indonesia karena keliru menganggap frasa tersebut sebagai kalimat utuh. Pengecoh yang menambahkan 'and' juga keliru karena memuat kata hubung berlebih yang merusak alur subordinasi."
          }
        },
        {
          "kind": "step",
          "id": "beng-2-2",
          "title": "Titik Dua Memperkenalkan Daftar",
          "explanation": "Titik dua (`:`) berfungsi memberi sinyal resmi kepada pembaca bahwa rincian daftar, item persyaratan, atau elaborasi penting akan segera disajikan. Klausa yang mendahului tanda titik dua wajib mampu berdiri sendiri sebagai kalimat yang utuh (*independent clause*) dan memiliki gagasan lengkap. Jebakan klasik yang sering merusak struktur dokumen adalah menaruh titik dua langsung menempel pada kata kerja transitif (seperti `are:` atau `include:`) atau preposisi (seperti `to:`). Dalam memo pengadaan barang dan spesifikasi teknis, penggunaan titik dua yang tepat memisahkan deskripsi umum dari rincian komponen secara teratur dan profesional.",
          "example": {
            "code": "❌ We ordered three new items a monitor, a keyboard, and a mouse.\n✅ We ordered three new items: a monitor, a keyboard, and a mouse.",
            "output": "Sebelum : daftar rincian menempel langsung tanpa tanda pengenal resmi.\nSesudah : titik dua memperkenalkan rincian daftar secara terstruktur.",
            "note": "Pastikan bagian sebelum titik dua adalah kalimat yang bisa berdiri sendiri."
          },
          "instruction": "Skenario: kamu mendokumentasikan tiga item permintaan klien pada tiket proyek. Klausa pengantar di editor terputus dari daftar rincian tanpa tanda baca pengenal resmi. Sisipkan tanda titik dua tepat setelah kata penanda jumlah item untuk memperkenalkan rincian permintaan tersebut secara resmi. Jangan menghapus kata atau rincian yang ada.",
          "starterCode": "The client requested three items a revised timeline, a cost breakdown, and a sample prototype.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(three|3)\\s+\\w+\\s*:\\s*\\S",
              "flags": "i",
              "message": "Daftar rincian harus diperkenalkan dengan titik dua tepat setelah kata penanda jumlah item."
            },
            {
              "pattern": "\\b(request\\w*|ask\\w*|need\\w*|requir\\w*|want\\w*|list\\w*|specif\\w*|submit\\w*)\\b[^:]*:",
              "flags": "i",
              "message": "Bagian sebelum titik dua harus berupa klausa utuh dengan kata kerja, bukan sekadar frasa."
            },
            {
              "pattern": ":\\s*[^:]*,\\s*[^:]*\\band\\b",
              "flags": "i",
              "message": "Setelah titik dua, ketiga rincian harus tetap dipisah koma dan disambung `and` di item terakhir."
            },
            {
              "pattern": "\\b(three|3)\\s+(items?|things?|deliverables?|requests?|documents?)\\s+(a|an|the)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Klausa pengantar masih menempel ke daftar tanpa tanda pengenal, sehingga pembaca tidak tahu daftarnya sudah dimulai."
            }
          ],
          "solution": "The client requested three items: a revised timeline, a cost breakdown, and a sample prototype.",
          "susunKode": {
            "question": "Susun kalimat ini dengan titik dua yang tepat untuk memperkenalkan daftar rincian.",
            "potongan": [
              "The client requested three items:",
              "a revised timeline, a cost breakdown,",
              "and a sample prototype."
            ],
            "pengecoh": [
              "The client requested three items,",
              "The client requested three items;"
            ],
            "pemisah": " ",
            "explanation": "Titik dua adalah tanda yang tepat untuk memperkenalkan daftar setelah klausa utuh. Pengecoh berkoma menggoda karena penutur Indonesia sering memakai koma untuk fungsi ini, padahal koma memicu struktur kalimat yang lemah. Pengecoh titik koma juga keliru karena titik koma menyambung dua klausa setara, bukan memperkenalkan daftar rincian."
          }
        },
        {
          "kind": "step",
          "id": "beng-2-3",
          "title": "Menyambung Dua Pernyataan Setara Menggunakan Semicolon",
          "explanation": "Dua klausa independen yang utuh tidak boleh disambung hanya dengan tanda koma (*comma splice*). Untuk memastikannya, periksa kedua sisi: apakah sisi sebelum koma DAN sisi setelah koma sama-sama memiliki subjek serta predikat utuh (*independent clause*)? Jika ya dan tidak ada kata hubung koordinatif (*FANBOYS: for, and, nor, but, or, yet, so*), maka penggunaan koma tunggal adalah kesalahan struktur. Tanda titik koma (`;`) adalah solusi paling elegan ketika kamu ingin menyajikan dua kondisi kerja yang saling melengkapi atau kontras tanpa memutus napas kalimat dengan tanda titik. Struktur kalimat ber-semicolon terdiri atas klausa utuh pertama, tanda titik koma, lalu klausa utuh kedua yang diawali huruf kecil (kecuali nama diri). Di dunia kerja, teknik ini sering dipakai pada laporan status teknis untuk menyajikan dua capaian tim yang berkaitan erat secara ringkas dan berimbang.",
          "example": {
            "code": "❌ The tests passed, we shipped the release.       (comma splice: dua klausa utuh hanya dengan koma)\n✅ The tests passed; we shipped the release.      (semicolon: dua klausa berkaitan erat)\n✅ The tests passed, so we shipped the release.   (koma + coordinating conjunction: hubungan hasil)\n✅ After the meeting, we sent the report.         (koma setelah frasa pembuka, bukan dua klausa utuh)",
            "output": "Analisis hubungan klausa:\n1. Bentuk splice : dua kalimat utuh dipaksa menyatu dengan koma saja.\n2. Semicolon     : menyambung dua klausa setara tanpa kata sambung.\n3. Conjunction   : koma sah jika diikuti 'so' untuk menyatakan akibat.\n4. Frasa pembuka : koma sah karena sisi kiri adalah frasa pengantar, bukan klausa utuh.",
            "note": "Jangan menganggap koma salah hanya karena bagian setelahnya kalimat utuh. Pada frasa pembuka seperti 'After the meeting, we sent the report', koma justru wajib."
          },
          "instruction": "Skenario: kamu melaporkan status kesiapan rilis perangkat lunak ke manajer teknik. Tulis SATU kalimat majemuk setara yang menghubungkan dua klausa independen menggunakan tanda titik koma (`;`). Unsur wajib: (1) klausa pertama tentang pengujian sistem yang telah lulus (mis. 'The tests passed'), (2) tanda titik koma sebagai pemisah tanpa kata hubung, dan (3) klausa kedua tentang tindakan rilis sistem (mis. 'we deployed the release' atau 'we shipped the release'). Step ini khusus melatih pemakaian tanda titik koma; bentuk dengan kata hubung koordinatif (seperti ', so') tidak memenuhi target latihan ini.",
          "starterCode": "# Tulis satu kalimat majemuk ber-semicolon di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "[^;\\s]\\s*;\\s*\\S",
              "flags": "i",
              "message": "Kedua klausa harus disambung dengan tanda titik koma (;) tanpa kata hubung koordinatif."
            },
            {
              "pattern": "\\b(tests?|test\\s+suite|testing|qa|checks?|regressions?|builds?)\\b[^;]*\\b(passed|succeeded|cleared|completed|green|clean)\\b[^;]*;",
              "flags": "i",
              "message": "Klausa sebelum titik koma harus menyatakan bahwa pengujian sistem sudah lulus."
            },
            {
              "pattern": ";\\s*\\w[^;]*\\b(deploy\\w*|ship\\w*|releas\\w*|roll\\w*|launch\\w*|push\\w*|publish\\w*|went\\s+live)\\b",
              "flags": "i",
              "message": "Klausa setelah titik koma harus berupa kalimat utuh tentang tim yang merilis sistem."
            },
            {
              "pattern": "\\b(passed|succeeded|cleared|completed)\\s*,\\s*(and\\s+|but\\s+|so\\s+|yet\\s+)?(we|our|the|they|i)\\b|\\b(passed|succeeded|cleared|completed)\\s+(and|but|so|yet)\\s+(we|our|the|they|i)\\b|;\\s*(and|but|so|or|yet|nor|for)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kalimat majemuk ber-conjunction (mis. ', so') secara gramatikal sah, tetapi step ini secara khusus melatih pemakaian tanda titik koma (;) sebagai penghubung dua klausa mandiri."
            }
          ],
          "solution": "The tests passed; we deployed the release.",
          "susunKode": {
            "question": "Sambungkan dua kalimat ini sebagai dua pernyataan setara yang berkaitan erat menggunakan titik koma.",
            "potongan": [
              "The tests passed;",
              "we deployed the release."
            ],
            "pengecoh": [
              "The tests passed,",
              "The tests passed."
            ],
            "pemisah": " ",
            "explanation": "Titik koma menyambung dua klausa independen yang berkaitan erat tanpa kata sambung koordinatif. Pengecoh berkoma ('The tests passed,') menggoda karena penutur Indonesia sering menyambung kalimat hanya dengan koma (comma splice). Pengecoh bertitik ('The tests passed.') memutus kesinambungan dua pernyataan yang seharusnya dibaca sebagai satu kesatuan pikiran."
          }
        },
        {
          "kind": "step",
          "id": "beng-2-4",
          "title": "Kepemilikan vs Kontraksi: its vs it's",
          "explanation": "Penulisan `it's` dan `its` adalah jebakan homofon paling sering dalam tulisan bisnis karena pemeriksa ejaan kata tunggal tidak akan menandai kekeliruan ini. `it's` (dengan apostrof) selalu merupakan singkatan dari `it is` atau `it has`. Sebaliknya, `its` (tanpa apostrof) adalah kata ganti kepemilikan netral untuk benda atau organisasi, setara dengan `his` atau `their`. Uji cepat: gantilah kata tersebut dengan `it is` di dalam pikiranmu—jika kalimat menjadi tidak masuk akal, gunakan `its` tanpa apostrof. Menjaga ketepatan penulisan ini pada kebijakan privasi dan dokumen kontrak sangat penting untuk kredibilitas perusahaan.",
          "example": {
            "code": "❌ The platform updated it's terms of service yesterday.\n✅ The platform updated its terms of service yesterday.",
            "output": "Sebelum : 'it's' (it is) keliru dipakai untuk menyatakan kepemilikan platform.\nSesudah : 'its' dipakai secara tepat menandakan kepemilikan tanpa apostrof.",
            "note": "Seluruh kata ganti kepemilikan (its, his, hers, ours, theirs) tidak pernah memakai apostrof."
          },
          "instruction": "Skenario: kamu mengumumkan pembaruan kebijakan privasi perusahaan perangkat lunak kepada pengguna. Kalimat di editor keliru menggunakan bentuk singkatan yang memiliki apostrof untuk menyatakan kepemilikan dokumen. Perbaiki kata ganti tersebut menjadi bentuk kata ganti kepemilikan netral yang sah tanpa tanda apostrof. Pertahankan struktur kata lainnya.",
          "starterCode": "The software company updated it's privacy policy yesterday.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bits\\s+\\w+",
              "flags": "i",
              "message": "Kepemilikan dinyatakan dengan kata ganti posesif tanpa apostrof, diikuti kata benda yang dimiliki."
            },
            {
              "pattern": "\\bits\\s+(\\w+\\s+){0,2}polic(y|ies)\\b",
              "flags": "i",
              "message": "Yang dimiliki perusahaan di kalimat ini adalah dokumen kebijakannya, jadi bentuk posesif harus berada tepat sebelum kata itu."
            },
            {
              "pattern": "\\bit\\s*['’]\\s*s\\s+(\\w+\\s+){0,2}polic(y|ies)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Bentuk berapostrof itu singkatan dari `it is`/`it has`, bukan penanda kepemilikan."
            }
          ],
          "solution": "The software company updated its privacy policy yesterday.",
          "susunKode": {
            "question": "Susun kalimat ini dengan kata kepemilikan yang tepat tanpa tanda apostrof.",
            "potongan": [
              "The software company",
              "updated its",
              "privacy policy yesterday."
            ],
            "pengecoh": [
              "updated it's",
              "updated its'"
            ],
            "pemisah": " ",
            "explanation": "Bentuk kepemilikan untuk kata ganti 'it' adalah 'its' tanpa apostrof. Pengecoh 'it's' sangat menggoda bagi penutur Indonesia karena kebiasaan menganggap semua bentuk kepemilikan wajib memakai apostrof. Pengecoh 'its'' keliru karena bentuk tersebut tidak ada dalam tata bahasa Inggris."
          }
        },
        {
          "kind": "step",
          "id": "beng-2-5",
          "title": "Bentuk Jamak Akronim Tanpa Apostrof",
          "explanation": "Tanda apostrof berfungsi menandai kepemilikan (*possession*) atau kontraksi, BUKAN untuk membentuk kata jamak (*plural*). Akronim huruf kapital dan singkatan teknis seperti `PDF`, `KPI`, `API`, atau `CEO` cukup ditambahkan huruf `s` kecil langsung di akhir kata tanpa apostrof (`PDFs`, `KPIs`, `APIs`, `CEOs`). Menulis `PDF's` secara gramatikal berarti 'milik PDF' atau 'PDF is', bukan dokumen PDF dalam jumlah banyak. Kesalahan ini sangat sering ditemui pada korespondensi kantor dan pengumuman teknis. Menghilangkan apostrof pada akronim jamak membuktikan ketelitian standar penyuntingan profesional.",
          "example": {
            "code": "❌ We reviewed the quarterly KPI's during the executive meeting.\n✅ We reviewed the quarterly KPIs during the executive meeting.",
            "output": "Sebelum : 'KPI's' keliru memakai apostrof untuk menyatakan bentuk jamak.\nSesudah : 'KPIs' ditulis dengan huruf s kecil tanpa apostrof.",
            "note": "Gunakan apostrof pada akronim hanya jika memang menyatakan kepemilikan, seperti 'the CEO's decision'."
          },
          "instruction": "Skenario: kamu meminta rekan kerja mengonversi sejumlah berkas sebelum dikirimkan ke klien. Kalimat di editor memuat kesalahan penggunaan tanda apostrof pada akronim jamak. Perbaiki akronim jamak tersebut dengan menghapus tanda apostrofnya sehingga menjadi bentuk jamak baku. Pertahankan seluruh kata lainnya.",
          "starterCode": "Please convert all the PDF's before sending them to the client.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b[A-Z]{2,}s\\b",
              "flags": "",
              "message": "Bentuk jamak akronim ditulis dengan huruf `s` kecil langsung setelah akronim, tanpa tanda apostrof."
            },
            {
              "pattern": "\\b(convert\\w*|export\\w*|chang\\w*|turn\\w*|sav\\w*|render\\w*)\\b",
              "flags": "i",
              "message": "Permintaan mengonversi berkas harus tetap ada; jangan hapus kata kerja aksinya."
            },
            {
              "pattern": "\\b[A-Z]{2,}\\s*['’]\\s*s\\b",
              "flags": "",
              "mustNotMatch": true,
              "message": "Apostrof menandai kepemilikan atau singkatan, bukan bentuk jamak, jadi tidak boleh dipakai pada akronim jamak."
            }
          ],
          "solution": "Please convert all the PDFs before sending them to the client.",
          "susunKode": {
            "question": "Susun kalimat ini dengan bentuk jamak akronim yang benar tanpa apostrof.",
            "potongan": [
              "Please convert all the PDFs",
              "before sending them",
              "to the client."
            ],
            "pengecoh": [
              "Please convert all the PDF's",
              "Please convert all the PDFes"
            ],
            "pemisah": " ",
            "explanation": "Bentuk jamak dari akronim seperti PDF dibentuk dengan menambahkan huruf 's' kecil ('PDFs') tanpa tanda apostrof. Pengecoh 'PDF's' sering menggoda penutur Indonesia karena kebiasaan keliru yang menganggap akronim kapital perlu dipisah apostrof. Pengecoh 'PDFes' juga keliru karena akronim tidak memerlukan akhiran '-es'."
          }
        },
        {
          "kind": "step",
          "id": "beng-2-6",
          "title": "Hyphen pada Compound Modifier",
          "explanation": "Dua atau lebih kata yang bekerja sama menerangkan kata benda di depannya disebut *compound modifier* dan wajib dihubungkan dengan tanda hyphen (`-`). Tanpa tanda hyphen, arti kalimat bisa berubah atau menjadi ambigu bagi pembaca: frasa `a small business owner` bisa ditafsirkan sebagai pemilik bisnis yang bertubuh kecil (*a business owner who is small*). Dengan menyematkan tanda hyphen, frasa `a small-business owner` secara tegas bermakna pemilik dari usaha berskala kecil (*small business*). Kaidah ini berlaku ketika frasa gabungan tersebut terletak *sebelum* kata benda yang diterangkan. Ketepatan penggunaan hyphen mencerminkan presisi tinggi dalam penyusunan profil bisnis dan proposal tender.",
          "example": {
            "code": "❌ We need a long term strategy for infrastructure growth.\n✅ We need a long-term strategy for infrastructure growth.",
            "output": "Sebelum : 'long term' tanpa hyphen membuat frasa sifat terasa terpisah.\nSesudah : 'long-term' dihubungkan hyphen menjadi satu sifat majemuk utuh.",
            "note": "Jika kata sifat majemuk berada setelah kata benda (misal: 'the strategy is long term'), hyphen tidak dipakai."
          },
          "instruction": "Skenario: kamu menulis profil pengusaha pada artikel studi kasus perusahaan. Frasa kata sifat gabungan sebelum kata benda di editor belum dihubungkan tanda baca sehingga berpotensi menimbulkan ambiguitas makna. Gabungkan kedua kata sifat tersebut menggunakan tanda hyphen untuk membentuk satu kata sifat majemuk yang menerangkan pemilik usaha kecil. Jangan mengubah kata lainnya.",
          "starterCode": "She is a small business owner who manages fifty employees.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bsmall-business\\b",
              "flags": "i",
              "message": "Dua kata sifat yang bekerja sebagai satu penjelas harus disatukan dengan hyphen agar maknanya tidak ambigu."
            },
            {
              "pattern": "\\b\\w+-\\w+\\s+(owner|entrepreneur|proprietor)\\b",
              "flags": "i",
              "message": "Kata sifat majemuk berhyphen harus berdiri tepat sebelum kata bendanya, dan kata benda itu tetap terpisah spasi."
            },
            {
              "pattern": "\\bsmall\\s+business\\s+(owner|entrepreneur|proprietor)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Tanpa hyphen, pembaca bisa membacanya sebagai pemilik yang berbadan kecil, bukan pemilik usaha kecil."
            }
          ],
          "solution": "She is a small-business owner who manages fifty employees.",
          "susunKode": {
            "question": "Susun kalimat ini dengan hyphen yang tepat pada kata sifat majemuk sebelum kata benda.",
            "potongan": [
              "She is a",
              "small-business owner",
              "who manages fifty employees."
            ],
            "pengecoh": [
              "small business owner",
              "small, business owner"
            ],
            "pemisah": " ",
            "explanation": "Frasa 'small-business' wajib dihubungkan dengan hyphen ketika mendahului kata benda 'owner' untuk membentuk kata sifat majemuk yang utuh. Pengecoh tanpa hyphen menggoda karena pembaca sering tidak menyadari potensi ambiguitas makna. Pengecoh berkoma keliru karena koma digunakan untuk memisahkan dua kata sifat koordinatif yang berdiri sendiri."
          }
        },
        {
          "kind": "step",
          "id": "beng-2-7",
          "title": "Tugas Mengarang: Kutipan Langsung dan Tanda Baca Pengantar",
          "explanation": "Kutipan langsung (*direct quotation*) berupa kalimat utuh yang diawali klausa dialog pengantar (seperti `said`, `announced`, `stated`) wajib dipisahkan oleh tanda koma sebelum tanda kutip pembuka. Dalam standar ejaan formal bahasa Inggris (terutama American English), tanda koma atau titik penutup kutipan diletakkan di *dalam* tanda kutip penutup (`\"... days.\"`). Huruf pertama pada kutipan langsung yang berupa kalimat utuh juga wajib ditulis dengan huruf kapital. Mengetahui konvensi penempatan tanda kutip ini sangat berguna saat menyusun risalah rapat, kutipan pernyataan pers, atau testimoni kepuasan klien.",
          "example": {
            "code": "❌ The director announced \"Our revenue increased by twenty percent.\"\n✅ The director announced, \"Our revenue increased by twenty percent.\"",
            "output": "Sebelum : klausa dialog pengantar menempel langsung ke tanda kutip tanpa koma.\nSesudah : tanda koma memisahkan frasa pengantar dengan kutipan langsung secara rapi.",
            "note": "Dalam standar American English, titik dan koma penutup selalu berada di dalam tanda kutip."
          },
          "instruction": "Skenario: kamu mencatat pernyataan manajer proyek dalam risalah rapat teknis tim. Tulis SATU kalimat kutipan langsung yang diawali klausa dialog pengantar. Unsur wajib: (1) klausa dialog pengantar di awal kalimat, (2) tanda koma sebelum tanda kutip pembuka, (3) kutipan langsung berupa kalimat utuh berhuruf kapital di awal yang menyatakan perpanjangan tenggat waktu selama dua hari, dan (4) tanda titik di dalam tanda kutip penutup. Dilarang menempatkan tanda titik atau koma di luar tanda kutip penutup (ikuti konvensi American English).",
          "starterCode": "# Tulis satu kalimat kutipan langsung dengan koma pengantar di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*[A-Za-z][^,\"“”]*\\b(said|says|announced|stated|noted|explained|remarked|confirmed|added|reported|told\\s+\\w+)\\b[^,\"“”]*,\\s*[\"“']",
              "flags": "i",
              "message": "Klausa dialog pengantar harus berada di awal kalimat dan ditutup koma tepat sebelum tanda kutip pembuka."
            },
            {
              "pattern": "[\"“']\\s*[A-Z]",
              "flags": "",
              "message": "Kutipan langsung berupa kalimat utuh dimulai dengan huruf kapital setelah tanda kutip pembuka."
            },
            {
              "pattern": "\\b(extend\\w*|extension|push\\w*|mov\\w*|delay\\w*|postpon\\w*|shift\\w*|slip\\w*|add\\w*|giv\\w*)\\b",
              "flags": "i",
              "message": "Isi kutipan harus menyatakan tindakan memperpanjang tenggat waktu."
            },
            {
              "pattern": "\\b(deadline|due\\s+date|timeline)\\b[^\"”]*\\b(two|2)\\s+(\\w+\\s+)?days?\\b|\\b(two|2)\\s+(\\w+\\s+)?days?\\b[^\"”]*\\b(deadline|due\\s+date|timeline)\\b",
              "flags": "i",
              "message": "Kutipan harus menyebut tenggat waktu beserta lama perpanjangannya, yaitu dua hari."
            },
            {
              "pattern": "\\.\\s*[\"”']\\s*$",
              "flags": "",
              "message": "Dalam konvensi American English, tanda titik penutup kalimat kutipan diletakkan di dalam tanda kutip."
            },
            {
              "pattern": "[\"”]\\s*[.,]",
              "flags": "",
              "mustNotMatch": true,
              "message": "Titik atau koma tidak boleh berada di luar tanda kutip penutup pada konvensi American English."
            }
          ],
          "solution": "The project manager said, \"We will extend the deadline by two days.\"",
          "susunKode": {
            "question": "Susun kalimat kutipan langsung ini dengan tanda koma pengantar yang tepat.",
            "potongan": [
              "The project manager said,",
              "\"We will extend the deadline",
              "by two days.\""
            ],
            "pengecoh": [
              "The project manager said;",
              "by two days.\","
            ],
            "pemisah": " ",
            "explanation": "Kutipan langsung diawali dengan tanda koma setelah frasa pengantar dialog \"said,\". Pengecoh bertitik koma \"said;\" menggoda namun keliru karena titik koma tidak digunakan untuk mengawali kutipan langsung. Pengecoh dengan tanda koma di luar tanda kutip penutup keliru dalam konvensi resmi American English."
          }
        },
        {
          "kind": "step",
          "id": "beng-2-8",
          "title": "Tugas Mengarang: Menyisipkan Em Dash untuk Menekankan Batasan Kritis",
          "explanation": "Tanda em dash (`—`) digunakan untuk menciptakan jeda dramatis yang menarik perhatian langsung pembaca pada informasi atau kendala paling kritis dalam sebuah kalimat. Berbeda dari tanda kurung yang meredam informasi menjadi catatan sampingan opsional, em dash mengangkat informasi penjelas menjadi sorotan utama. Dalam komunikasi kepemimpinan dan proposal bisnis, em dash sering digunakan untuk menegaskan satu metrik kunci, deliverable utama, atau tenggat mutlak di akhir kalimat. Menggunakan em dash dengan takaran yang tepat memberikan energi dan kejelasan yang tegas pada pesanmu.",
          "example": {
            "code": "❌ We achieved our primary milestone (the database migration).\n✅ We achieved our primary milestone—the database migration.",
            "output": "Sebelum : tanda kurung meredam pencapaian kunci menjadi sekadar catatan kaki.\nSesudah : em dash menegaskan pencapaian inti sebagai sorotan utama kalimat.",
            "note": "Em dash ditulis rapat tanpa spasi di kedua sisinya dalam konvensi resmi American English."
          },
          "instruction": "Skenario: kamu menulis pembaruan rilis fitur baru kepada para pemangku kepentingan. Tulis SATU kalimat pernyataan utuh yang menggunakan em dash untuk memberikan penekanan tajam pada sasaran utama. Unsur wajib: (1) klausa pembuka tentang satu tujuan utama yang difokuskan oleh tim, (2) tanda em dash untuk memberi jeda penekanan visual, dan (3) frasa aksi tentang pengurangan waktu muat sebesar 50 persen di akhir kalimat. Dilarang menggunakan tanda kurung.",
          "starterCode": "# Tulis satu kalimat penekanan pencapaian dengan em dash di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\S\\s*(—|–|--)\\s*\\S",
              "flags": "i",
              "message": "Penekanan tajam di step ini dibuat dengan em dash, bukan koma atau hyphen pendek."
            },
            {
              "pattern": "\\b(focus\\w*|prioriti[sz]\\w*|concentrat\\w*|commit\\w*|target\\w*|narrow\\w*)\\b[^—–]*\\bone\\s+(\\w+\\s+){0,2}(goal|objective|target|priority|milestone|aim|metric)\\b",
              "flags": "i",
              "message": "Klausa sebelum em dash harus menyatakan satu tujuan utama yang menjadi fokus tim."
            },
            {
              "pattern": "(—|–|--)[^.]*\\b(reduc\\w*|cut\\w*|lower\\w*|decreas\\w*|shrink\\w*|trim\\w*|halv\\w*|improv\\w*|speed\\w*|slash\\w*)\\b[^.]*\\b(load|latency|response|render)\\w*",
              "flags": "i",
              "message": "Bagian setelah em dash harus berisi frasa aksi tentang pengurangan waktu muat."
            },
            {
              "pattern": "\\b50\\s*(%|percent\\b)",
              "flags": "i",
              "message": "Sasarannya belum terukur: sebutkan angka 50 persen seperti diminta instruksi."
            },
            {
              "pattern": "[()]",
              "flags": "",
              "mustNotMatch": true,
              "message": "Tanda kurung justru meredam informasi, sedangkan yang diminta step ini adalah penekanan dengan em dash."
            }
          ],
          "solution": "Our team focused on one primary goal—reducing page load time by 50%.",
          "susunKode": {
            "question": "Susun kalimat pembaruan ini dengan em dash untuk memberikan penekanan yang kuat.",
            "potongan": [
              "Our team focused on one primary goal",
              "—reducing page load time",
              "by 50%."
            ],
            "pengecoh": [
              "(reducing page load time",
              "by 50%)"
            ],
            "pemisah": " ",
            "explanation": "Em dash ('—') memberikan penekanan kuat pada pencapaian utama tim. Pengecoh bertanda kurung menggoda karena secara tata bahasa sah, tetapi tanda kurung meredam urgensi informasi alih-alih menonjolkannya sesuai instruksi."
          }
        },
        {
          "kind": "quiz",
          "id": "beng-2-k1",
          "title": "Kuis: Tanda Baca Presisi dalam Tulisan Bisnis",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Kamu sedang memeriksa draf e-mail rekan tim sebelum dikirim ke klien: 'After reviewing the comprehensive security report from our external legal team we updated the incident mitigation guidelines.' Perbaikan tanda baca apakah yang mutlak diperlukan?",
              "choices": [
                "A. Menyisipkan titik koma tepat sebelum 'we updated'.",
                "B. Menyisipkan tanda koma tepat setelah 'legal team' untuk memisahkan introductory dependent clause yang panjang dari klausa utama.",
                "C. Menambahkan tanda hubung (hyphen) di antara kata 'incident' dan 'mitigation'.",
                "D. Menghapus kata 'After' agar kalimat menjadi lebih ringkas."
              ],
              "answerIndex": 1,
              "explanation": "Frasa atau klausa pengantar (introductory clause) wajib diikuti tanda koma agar pembaca segera mengenali di mana klausa utama dimulai. Pilihan A salah karena 'After...' bukan klausa independen."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Kamu sedang meninjau dokumentasi insiden kluster data. Perhatikan empat opsi kalimat berikut. Manakah yang menggunakan tanda titik koma (semicolon) secara TEPAT?",
              "choices": [
                "A. The primary cluster recovered quickly; the secondary replica took ten minutes to synchronize.",
                "B. The primary cluster recovered quickly; and the secondary replica took ten minutes to synchronize.",
                "C. Because the primary cluster recovered quickly; the secondary replica took ten minutes to synchronize.",
                "D. The primary cluster recovered quickly; however the secondary replica took ten minutes to synchronize."
              ],
              "answerIndex": 0,
              "explanation": "Titik koma menyambung dua klausa independen yang berkaitan erat tanpa kata hubung koordinatif. Pilihan B berlebihan karena memakai 'and', pilihan C salah memakai titik koma pada klausa dependen, dan pilihan D kurang tanda koma setelah 'however'."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu bertindak sebagai staf pengadaan yang sedang menyusun draf memo resmi. Manakah kalimat berikut yang menerapkan tanda titik dua (colon) dan koma serial secara BENAR?",
              "choices": [
                "A. The procurement team approved: three servers, two switches, and a rack.",
                "B. The procurement team approved three purchases, three servers, two switches and a rack.",
                "C. The procurement team approved three purchases: three servers, two switches, and a rack.",
                "D. The procurement team approved three purchases: three servers, two switches and, a rack."
              ],
              "answerIndex": 2,
              "explanation": "Titik dua diletakkan setelah klausa independen utuh untuk memperkenalkan daftar rincian ('...approved three purchases:'). Pilihan A salah meletakkan titik dua langsung setelah kata kerja 'approved'."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Seorang manajer produk menulis pesan rilis: 'The mobile application updated [its / it's] authentication protocol yesterday.' Bentuk kata ganti manakah yang benar dan apa alasannya?",
              "choices": [
                "A. 'it's', karena merupakan singkatan dari 'it has updated'.",
                "B. 'its'', karena aplikasi merupakan kata benda tunggal yang berakhiran huruf konsonan.",
                "C. 'it's', karena menunjukkan kepemilikan protokol oleh aplikasi.",
                "D. 'its', karena 'its' adalah possessive pronoun yang menyatakan kepemilikan tanpa apostrof."
              ],
              "answerIndex": 3,
              "explanation": "'its' adalah bentuk possessive pronoun (seperti his, her, their) yang menyatakan kepemilikan. 'it's' adalah kontraksi dari 'it is' atau 'it has'. Pilihan B bentuk tidak baku."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyusun prospektus investasi teknologi untuk mitra korporat. Manakah penulisan compound modifier berikut yang benar menggunakan hyphen?",
              "choices": [
                "A. We are launching a high risk investment strategy next quarter.",
                "B. We are launching a high-risk investment strategy next quarter.",
                "C. We are launching a high-risk-investment strategy next quarter.",
                "D. We are launching a high risk-investment strategy next quarter."
              ],
              "answerIndex": 1,
              "explanation": "Dua kata atau lebih yang berfungsi sebagai satu kesatuan kata sifat sebelum kata benda ('high-risk investment') wajib dihubungkan dengan hyphen untuk mencegah ambiguitas pembacaan."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyunting risalah wawancara eksekutif. Berdasarkan konvensi tanda baca standar, manakah penempatan tanda petik dan tanda titik yang benar?",
              "choices": [
                "A. The CTO stated, \"We will open-source our internal tool next month.\"",
                "B. The CTO stated \"We will open-source our internal tool next month\".",
                "C. The CTO stated, \"We will open-source our internal tool next month\".",
                "D. The CTO stated: \"We will open-source our internal tool next month\"."
              ],
              "answerIndex": 0,
              "explanation": "Dalam konvensi standar penulisan bisnis, tanda koma diletakkan sebelum tanda petik pembuka, dan tanda titik penutup diletakkan di DALAM tanda petik penutup. Pilihan B, C, dan D melanggar kaidah penempatan tanda baca kutipan."
            }
          ]
        }
      ]
    },
    {
      "slug": "bekerja-dengan-kata",
      "title": "Bekerja dengan Kata",
      "description": "Memilih kata yang tepat: pasangan kata yang tertukar, aturan ejaan, register formal, serta cara menebak arti dari konteks.",
      "topics": [
        "Commonly confused words: their/there/they're, affect/effect",
        "Ejaan: aturan dan pengecualiannya",
        "Word choice: denotasi, konotasi, dan register",
        "Prefix dan suffix",
        "Synonym dan antonym",
        "Context clues: menebak arti tanpa membuka kamus"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "beng-3-m1",
          "title": "Presisi Kosakata: Pasangan Kata Tertukar, Ejaan Kritis, dan Denotasi-Konotasi",
          "body": "# Kata yang Tepat, Bukan Kata yang Terdengar Rumit\n\nDalam penulisan bisnis internasional, kekuatan tulisan tidak diukur dari seberapa banyak kata langka yang kamu gunakan, melainkan dari **seberapa presisi kata yang kamu pilih**. Dua kata yang memiliki arti kamus serupa jarang memiliki rasa bahasa yang identik. Memahami perbedaan antara **denotasi** (definisi literal kamus) dan **konotasi** (kesan emosional atau asosiasi nilai yang melekat pada kata tersebut) adalah kunci utama menyusun pesan yang persuasif dan diplomatis.\n\n```text\nPerbandingan Konotasi dalam Deskripsi Solusi:\n\"We built a cheap software architecture.\"     -> Konotasi Negatif (murahan, kualitas rendah) ❌\n\"We built a cost-effective architecture.\"    -> Konotasi Positif (efisien, hemat biaya)     ✅\n```\n\n## Pasangan Kata yang Sering Tertukar (Confused Words)\n\nDaftar homofon dan pasangan kata mirip ini menyumbang lebih dari separuh kesalahan fatal dalam dokumen kerja. Seluruh kesalahan ini **lolos dari pemeriksaan spell check biasa** karena masing-masing merupakan kata yang sah:\n\n| Pasangan Kata | Peran Gramatikal & Makna | Contoh Kalimat Kerja Benar |\n| --- | --- | --- |\n| **affect vs effect** | `affect` (Verb: memengaruhi) / `effect` (Noun: dampak/hasil) | `The outage will not affect our users; the net effect was minimal.` |\n| **accept vs except** | `accept` (Verb: menerima) / `except` (Preposisi: kecuali) | `We accept all major currencies except offline checks.` |\n| **than vs then** | `than` (Perbandingan) / `then` (Keterangan waktu: lalu/kemudian) | `Our system is faster than before; then we deployed it.` |\n| **principle vs principal** | `principle` (Prinsip moral/aturan dasar) / `principal` (Utama/modal) | `Our primary architectural principle is high reliability.` |\n| **their / there / they're** | `their` (milik mereka) / `there` (lokasi) / `they're` (singkatan *they are*) | `They're verifying their code over there.` |\n| **lose vs loose** | `lose` (Verb: kehilangan/kalah) / `loose` (Adjective: longgar) | `Do not lose the encryption key for the loose connection.` |\n| **advice vs advise** | `advice` (Noun: nasihat) / `advise` (Verb: menasihati/memberi saran) | `We appreciate your advice, and we advise upgrading today.` |\n\n## Ejaan Kritis Dunia Kerja yang Sering Keliru\n\nEjaan bahasa Inggris penuh dengan serapan bahasa asing yang membuat pembelajar sering keliru menempatkan huruf ganda atau vokal. Enam kata ini paling sering salah dieja dalam e-mail profesional:\n\n```text\n1. accommodate  (dua 'c', dua 'm')    -> BUKAN accomodate atau accommode\n2. separate     (tengahnya 'par')     -> BUKAN seperate\n3. definitely   (akar 'finite')       -> BUKAN definately atau definitly\n4. receive      ('e' sebelum 'i')     -> BUKAN recieve (kaidah: i before e except after c)\n5. occurrence   (dua 'c', dua 'r')    -> BUKAN occurance\n6. maintenance  (akar kata maintain) -> BUKAN maintainance\n## Prefix dan Suffix dalam Pembentukan Kata Teknis\n\nMemahami imbuhan awalan (*prefix*) dan akhiran (*suffix*) membantumu menganalisis arti kata baru di dokumentasi teknis:\n\n- **Prefix Negasi / Pembalik**: `un-` (unauthorized), `in-`/`im-` (incompatible, immutable), `dis-` (disconnect), `mis-` (misconfigured).\n- **Prefix Skala & Waktu**: `micro-` (microservices), `multi-` (multithreading), `pre-` (prerequisite), `post-` (post-mortem).\n- **Suffix Perubahan Kelas Kata**: `-ize`/`-ise` membentuk kata kerja (`optimize`), `-tion` membentuk kata benda (`authentication`), `-able`/`-ible` membentuk kata sifat (`scalable`, `accessible`).\n\n## Synonym dan Antonym untuk Variasi Kosakata Dokumen\n\nMengulang-ulang kata yang sama (seperti `good` atau `fast`) membuat laporan terasa membosankan. Gunakan **synonym** (padanan kata) yang presisi seperti `robust`, `reliable`, `efficient`, atau `accelerated`. Pahami pula **antonym** (lawan kata) teknis yang baku: `synchronous` vs `asynchronous`, `mutable` vs `immutable`, `deprecated` vs `supported`.\n\n## Context Clues: Menebak Arti Tanpa Membuka Kamus\n\nSaat membaca RFC atau dokumentasi teknologi baru, manfaatkan petunjuk konteks (*context clues*): definisi langsung setelah tanda kurung/koma, contoh ilustrasi, atau kata transisi kontras untuk menyimpulkan arti kata asing tanpa menghentikan alur baca.\n\n## Jebakan yang Sering Terjadi\n\n1. **Menggunakan thesaurus untuk mengganti kata sederhana menjadi kata bombastis.** Mengganti kata lugas `use` menjadi `utilize`, atau `help` menjadi `facilitate assistance` hanya membuat tulisanmu terasa kaku, berjarak, dan sulit dipahami pembaca cepat.\n2. **Keliru membedakan `then` dan `than` pada tolok ukur performa.** Kalimat `The query runs faster then the legacy script` salah; gunakan `than` untuk komparasi.\n3. **Mengabaikan perbedaan kelas kata pada `advice` (noun) dan `advise` (verb).** Kalimat `Please advice us` salah; bentuk yang benar adalah `Please advise us`.\n\n## Kaitan ke Dunia Kerja\n\nDalam korespondensi bisnis resmi, salah memilih `affect` di tempat `effect` atau salah mengeja `accommodate` pada proposal tender segera disadari oleh pihak pengadaan barang (*procurement*). Presisi kata mencerminkan ketelitian kerja dan perhatian penuh terhadap detail produk."
        },
        {
          "kind": "materi",
          "id": "beng-3-m2",
          "title": "Register Kerja, Jargon, Slang Global, dan Memangkas Klise Bisnis",
          "body": "# Menyesuaikan Nada Bahasa dan Menghapus Hambatan Komunikasi\n\nKomunikasi bisnis modern melibatkan rekan kerja dan klien dari berbagai latar belakang budaya. Menulis secara profesional menuntut kepekaan terhadap tingkat formalitas (*register*) serta keberanian memangkas jargon kosong dan klise yang mengaburkan pesan.\n\n## Register: Formal, Netral-Profesional, dan Kasual\n\nRegister adalah tingkat formalitas bahasa yang ditentukan oleh hubungan hierarkis antara penulis dan pembaca serta bobot keputusan yang dibahas:\n\n| Tingkat Register | Kapan Digunakan | Contoh Kalimat |\n| --- | --- | --- |\n| **Formal** | Dokumen hukum, surat penawaran resmi, laporan dewan direksi | `We would be grateful if you could grant an extension.` |\n| **Netral-Profesional** | E-mail kerja harian, tiket Jira, dokumentasi teknis, chat tim | `Could you please extend the deadline to Friday?` |\n| **Kasual / Informal** | Percakapan santai di luar konteks keputusan resmi | `Any chance we can push this back?` |\n\nStandar emas di sebagian besar perusahaan teknologi global adalah **Netral-Profesional**: sopan, lugas, efisien, dan bebas dari basa-basi birokrasi berlebihan.\n\n## Jargon & Buzzword: Kapan Membantu, Kapan Mengaburkan\n\n**Technical Jargon (Istilah Teknis Spesifik)** seperti `latency`, `API endpoint`, `idempotent`, atau `concurrency` sangat membantu ketika berbicara dengan sesama insinyur teknis karena meringkas konsep yang rumit menjadi satu istilah baku. Namun, **Corporate Buzzwords** seperti `synergy`, `paradigm shift`, `deep dive`, atau `game-changer` sering digunakan untuk menutupi ketiadaan rencana konkret.\n\n```text\n❌ Buzzword Kabur: \"We need to leverage synergy and think outside the box to move the needle.\"\n✅ Penjelasan Konkret: \"The engineering and marketing teams will collaborate to increase user signups by 15%.\"\n```\n\n## Slang dan Idiom: Bahaya dalam Komunikasi Lintas Budaya\n\nIdiom bahasa Inggris (seperti `ballpark figure`, `touch base`, `bite the bullet`, atau `hit a home run`) berakar dari budaya lokal tertentu (sering kali olahraga bisbol Amerika). Ketika kamu menulis untuk tim global yang beranggotakan insinyur dari Asia, Eropa, dan Amerika Latin, penggunaan idiom lokal sering menimbulkan salah tafsir literal.\n\n| Idiom Lokal yang Berisiko | Arti Sebenarnya | Alternatif Global yang Jernih |\n| --- | --- | --- |\n| `Give me a ballpark figure` | Perkiraan kasar | `Please provide a rough estimate` |\n| `Let's touch base next week` | Bertemu / berdiskusi singkat | `Let's meet briefly next week` |\n| `Cut to the chase` | Langsung ke inti | `Let's discuss the main point` |\n| `On the same page` | Sepakat / sepemahaman | `Ensure we are aligned` |\n\n## Klise Bisnis yang Perlu Dipangkas\n\nKlise bisnis (*business clichés*) adalah frasa hafalan yang kehilangan maknanya karena terlalu sering diulang tanpa substansi. Gantilah frasa klise dengan pernyataan langsung berbasis tindakan dan angka:\n\n```text\n1. \"At the end of the day\"       -> Ganti dengan: \"Ultimately\" atau langsung sebut kesimpulannya.\n2. \"Move the needle\"             -> Ganti dengan metrik nyata: \"Increase active users by 10%\".\n3. \"Low-hanging fruit\"           -> Ganti dengan: \"Quick-win tasks\" atau \"High-priority simple fixes\".\n```\n\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Menggunakan idiom lokal dalam komunikasi lintas negara.** Mengirim pesan seperti `Let's touch base and hit a home run` berisiko membingungkan anggota tim internasional yang tidak memahami metafora olahraga Amerika.\n2. **Memenuhi laporan dengan buzzword korporat kosong.** Menulis `We will leverage synergy` tanpa mendefinisikan tim dan target angka nyata menurunkan kepercayaan direktur operasional.\n3. **Menggunakan register percakapan kasual (`gonna`, `wanna`, `ASAP`) pada tiket dukungan resmi.** Hal ini merusak citra profesionalitas tim rekayasa.\n\n## Kaitan ke Dunia Kerja\n\nDalam komunikasi tim terdistribusi global (*async remote culture*), pesan yang ditulis dalam bahasa netral, konkret, dan bebas idiom lokal mempercepat pengambilan keputusan serta mencegah kesalahan integrasi produk antarnegara."
        },
        {
          "kind": "step",
          "id": "beng-3-1",
          "title": "Memilih Pasangan Kata Tertukar: Affect vs Effect",
          "explanation": "Pasangan kata `affect` dan `effect` adalah salah satu sumber kekeliruan kosakata paling umum dalam laporan metrik dan analisis sistem. `affect` (umumnya berupa kata kerja / *verb*) bermakna memengaruhi atau memberikan dampak pada sesuatu. Sebaliknya, `effect` (umumnya berupa kata benda / *noun*) bermakna hasil, dampak, atau akibat dari suatu peristiwa. Untuk mengujinya: jika kamu membutuhkan kata kerja tindakan setelah modal (seperti `will`), gunakan `affect`. Membedakan kedua kata ini dengan benar memastikan laporan insiden teknismu terdengar presisi dan kredibel.",
          "example": {
            "code": "❌ The database migration will effect our response times negatively.\n✅ The database migration will affect our response times negatively.",
            "output": "Sebelum : 'effect' (noun) keliru dipakai sebagai kata kerja tindakan.\nSesudah : 'affect' (verb) digunakan secara tepat setelah modal 'will'.",
            "note": "Ingat rumus RAVEN: Remember Affect Verb, Effect Noun."
          },
          "instruction": "Skenario: kamu menyusun laporan analisis dampak pemadaman jaringan terhadap metrik kuartalan. Kalimat di editor keliru menggunakan kata benda di posisi kata kerja setelah modal penanda masa depan. Ganti kata tersebut menjadi bentuk kata kerja dasar yang tepat untuk menyatakan bahwa gangguan tidak akan memengaruhi metrik kuartalan. Pertahankan kata lainnya.",
          "starterCode": "The network outage will not effect our quarterly metrics.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(will\\s+not|won['’]t|will\\s+never|shall\\s+not|is\\s+not\\s+going\\s+to)\\s+affect\\b",
              "flags": "i",
              "message": "Setelah modal penanda masa depan kamu butuh kata kerja, dan kata kerja yang berarti `memengaruhi` adalah `affect` (dengan a)."
            },
            {
              "pattern": "\\b(outage|disruption|downtime|incident|interruption|failure|blackout)\\w*\\b",
              "flags": "i",
              "message": "Kalimatmu kehilangan subjeknya — gangguan jaringan itulah yang jadi pelaku dalam kalimat ini."
            },
            {
              "pattern": "\\bquarterly\\s+\\w+",
              "flags": "i",
              "message": "Objek yang terpengaruh harus tetap ada: metrik kuartalan, bukan sekadar `metrics` tanpa periode."
            },
            {
              "pattern": "\\b(will|would|shall|can|may|might|does|do|did|won['’]t|doesn['’]t)\\s+(not\\s+|never\\s+)?effect\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "`effect` di posisi ini masih berupa kata benda yang dipakai sebagai kata kerja — itu inti kesalahan yang sedang kamu perbaiki."
            }
          ],
          "solution": "The network outage will not affect our quarterly metrics.",
          "susunKode": {
            "question": "Susun kalimat ini dengan kata kerja yang tepat untuk menyatakan pengaruh pada metrik.",
            "potongan": [
              "The network outage will not",
              "affect our",
              "quarterly metrics."
            ],
            "pengecoh": [
              "effect our",
              "affecting our"
            ],
            "pemisah": " ",
            "explanation": "Setelah modal 'will not', bentuk kata kerja dasar yang tepat adalah 'affect'. Pengecoh 'effect our' sangat menggoda karena kemiripan bunyi fonetik (homofon). Pengecoh 'affecting our' keliru karena modal membutuhkan bare infinitive (kata kerja dasar)."
          }
        },
        {
          "kind": "step",
          "id": "beng-3-2",
          "title": "Memperbaiki Ejaan Kritis Dunia Kerja",
          "explanation": "Kata kerja `accommodate` (bermakna menyediakan ruang, memfasilitasi, atau memenuhi kebutuhan penyesuaian) adalah salah satu kata yang paling sering salah dieja dalam dokumen kontrak dan korespondensi komersial. Banyak penulis secara tidak sengaja menghilangkan salah satu huruf ganda, sehingga menghasilkan salah eja seperti `accomodate` (kurang satu m) atau `acommodate` (kurang satu c). Dalam penulisan profesional tingkat internasional, kata ini wajib ditulis dengan DUA huruf 'c' dan DUA huruf 'm' secara utuh (`accommodate`). Kesalahan ketik pada kata-kata penting ini langsung disadari oleh manajer pengadaan (*procurement*) dan dapat menurunkan penilaian terhadap ketelitian kerja timmu.",
          "example": {
            "code": "❌ Our server infrastructure can easily accomodate the traffic surge.\n✅ Our server infrastructure can easily accommodate the traffic surge.",
            "output": "Sebelum : 'accomodate' salah eja dengan hanya satu huruf 'm'.\nSesudah : 'accommodate' ditulis dengan benar menggunakan double 'c' dan double 'm'.",
            "note": "Ingat: accommodate memiliki dua C (Coffee) dan dua M (Milk)."
          },
          "instruction": "Skenario: kamu menulis tanggapan proposal penyesuaian jadwal untuk memenuhi permintaan klien. Kalimat di editor memuat kesalahan ejaan pada kata kerja penyesuaian yang kehilangan salah satu huruf gandanya. Perbaiki ejaan kata kerja penyesuaian tersebut menjadi bentuk baku dengan huruf ganda yang lengkap. Jangan mengubah susunan kata lainnya.",
          "starterCode": "We will adjust our project timeline to accomodate your request.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\baccommodat(e|es|ed|ing|ion)\\b",
              "flags": "i",
              "message": "Kata kerja penyesuaian ini dieja dengan dua huruf `c` dan dua huruf `m`: accommodate."
            },
            {
              "pattern": "\\b(adjust|revise|change|modify|shift|update|amend|adapt|rework|extend)\\w*\\b",
              "flags": "i",
              "message": "Kalimatmu belum menyebut tindakan menyesuaikan jadwalnya — pakai kata kerja penyesuaian."
            },
            {
              "pattern": "\\b(timeline|timetable|schedule|plan|plans|roadmap|deadlines?|dates?)\\b",
              "flags": "i",
              "message": "Yang disesuaikan adalah jadwal proyek, jadi objek itu harus tetap muncul di kalimatmu."
            },
            {
              "pattern": "\\b(accomodat|acomodat|acommodat|accomadat|acomadat)\\w*\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Ejaan ini masih kehilangan salah satu huruf gandanya — kata bakunya memakai `cc` dan `mm`."
            }
          ],
          "solution": "We will adjust our project timeline to accommodate your request.",
          "susunKode": {
            "question": "Susun kalimat ini dengan ejaan kata kerja yang benar.",
            "potongan": [
              "We will adjust our project timeline",
              "to accommodate",
              "your request."
            ],
            "pengecoh": [
              "to accomodate",
              "to accommadate"
            ],
            "pemisah": " ",
            "explanation": "Ejaan baku bahasa Inggris yang benar adalah 'accommodate' dengan dua huruf 'c' dan dua huruf 'm'. Pengecoh 'to accomodate' sangat sering menggoda karena kekeliruan visual umum saat mengetik cepat di dokumen bisnis. Pengecoh 'to accommadate' juga merupakan jebakan salah eja huruf vokal yang sering terjadi."
          }
        },
        {
          "kind": "step",
          "id": "beng-3-3",
          "title": "Menyesuaikan Register dari Terlalu Kasual Menjadi Profesional Standar",
          "explanation": "Penggunaan bahasa percakapan kasual seperti `gonna`, `wanna`, atau singkatan tidak resmi tidak pantas digunakan dalam e-mail bisnis atau komunikasi tiket resmi. Kalimat seperti `We are gonna fix the bug ASAP` terdengar tidak matang dan menurunkan tingkat kepercayaan penerima pesan. Dalam standar Business English netral-profesional, gantilah frasa kasual dengan bentuk kalimat masa depan resmi (`will resolve`) dan ganti akronim tergesa-gesa dengan tenggat waktu spesifik (`by tomorrow morning` atau `promptly`). Penyesuaian register ini menetapkan batas profesionalisme yang jelas.",
          "example": {
            "code": "❌ We gotta wrap up the code review ASAP.\n✅ We will complete the code review by 5 PM today.",
            "output": "Sebelum : penuh slang kasual 'gotta' dan akronim tidak spesifik 'ASAP'.\nSesudah : menggunakan kata kerja baku 'will complete' dan tenggat waktu konkret.",
            "note": "Hindari kontraksi slang seperti gonna, gotta, wanna dalam seluruh komunikasi kerja resmi."
          },
          "instruction": "Skenario: kamu membalas tiket pelaporan bug dari mitra eksternal. Draf awal di editor ditulis terlalu santai dan menggunakan singkatan tergesa-gesa. Tulis ulang kalimat tersebut ke dalam register profesional netral: gunakan subjek dan kata kerja masa depan yang baku untuk tindakan tim menyelesaikan masalah login, lalu tutup dengan keterangan waktu yang santun untuk menyatakan penyelesaian segera. Hilangkan seluruh unsur percakapan kasual dan singkatan informal.",
          "starterCode": "We are gonna fix the login issue ASAP.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(we|our\\s+team|our\\s+\\w+\\s+team|the\\s+team|the\\s+\\w+\\s+team|our\\s+engineers)(['’]ll|\\s+will|\\s+shall)\\s+(resolve|fix|address|correct|repair|remedy|solve|rectify|investigate)\\b",
              "flags": "i",
              "message": "Register profesional butuh subjek jelas plus kata kerja masa depan baku (`will` + kata kerja penyelesaian), bukan bentuk percakapan."
            },
            {
              "pattern": "\\b(log-?in|sign-?in|authentication|access)\\s+(issue|problem|error|bug|fault|defect|failure)s?\\b",
              "flags": "i",
              "message": "Objek masalahnya harus disebut secara spesifik: masalah login, bukan kata umum seperti `thing` atau `stuff`."
            },
            {
              "pattern": "\\b(promptly|quickly|shortly|immediately|without\\s+delay|as\\s+soon\\s+as\\s+possible|at\\s+the\\s+earliest\\s+opportunity|right\\s+away|today|by\\s+\\w+)\\b",
              "flags": "i",
              "message": "Tutup dengan keterangan waktu yang santun untuk menandakan penyelesaian segera."
            },
            {
              "pattern": "\\b(gonna|wanna|gotta|asap|yeah|yep|nope|stuff|guys|no\\s+worries|super\\s+fast|real\\s+soon|hey)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Slang dan singkatan tergesa-gesa menurunkan register tulisanmu di bawah standar komunikasi profesional."
            }
          ],
          "solution": "We will resolve the login issue promptly.",
          "susunKode": {
            "question": "Susun balasan tiket ini dalam register bahasa kerja yang profesional.",
            "potongan": [
              "We will resolve",
              "the login issue",
              "promptly."
            ],
            "pengecoh": [
              "We are gonna fix",
              "the login issue ASAP."
            ],
            "pemisah": " ",
            "explanation": "'We will resolve ... promptly.' adalah rumusan standar profesional untuk menanggapi tiket bug. Pengecoh 'We are gonna fix' dan 'ASAP' menggoda bagi penutur yang terbiasa dengan bahasa obrolan santai, namun menurunkan standar kredibilitas profesional."
          }
        },
        {
          "kind": "step",
          "id": "beng-3-4",
          "title": "Tugas Mengarang: Mengganti Klise Bisnis dengan Penjelasan Kolaborasi Konkret",
          "explanation": "Kalimat korporat yang dipenuhi *buzzwords* kosong seperti `leverage synergy` dan `think outside the box` sering kali tidak memberikan informasi tindakan yang nyata. Pembaca profesional lebih menghargai deskripsi kolaborasi nyata yang menyebutkan pihak yang terlibat, tindakan bersama, dan tujuan kuantitatif yang ingin dicapai. Pola kalimat kolaborasi yang kuat menggabungkan subjek tim gabungan (`Engineering and marketing`), kata kerja kerja sama aktif (`collaborated` atau `will collaborate`), dan tujuan terukur (`to increase conversion by 20%`). Gaya penulisan konkret ini membuat rencana kerja tim dapat langsung dievaluasi.",
          "example": {
            "code": "❌ We must leverage synergy and think outside the box to drive results.\n✅ Engineering and sales will collaborate to increase enterprise revenue by 15%.",
            "output": "Sebelum : deretan klise abstrak tanpa pihak penanggung jawab dan metrik.\nSesudah : menyebutkan departemen spesifik, aksi kolaborasi, dan target angka terukur.",
            "note": "Gantilah setiap buzzword dengan siapa melakukan apa dan berapa target capaiannya."
          },
          "instruction": "Skenario: kamu menulis rencana aksi kuartalan untuk dokumen strategi produk. Tulis SATU kalimat rencana kolaborasi konkret dalam bahasa Inggris. Unsur wajib: (1) dua tim departemen yang berkolaborasi, (2) kata kerja aksi kemitraan masa depan, dan (3) klausa target peningkatan konversi pengguna sebesar 20 persen di akhir kalimat. Dilarang menggunakan istilah klise korporat yang abstrak.",
          "starterCode": "# Tulis satu kalimat kolaborasi konkret dengan target terukur di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b\\w+\\s+and\\s+\\w+\\s+(teams?\\s+)?will\\b",
              "flags": "i",
              "message": "Sebutkan dua tim departemen sebagai subjek, lalu `will` untuk menandai rencana masa depan."
            },
            {
              "pattern": "\\bwill\\s+(collaborate|partner|cooperate|co-?operate|work\\s+together|team\\s+up|join\\s+forces|coordinate|jointly\\s+\\w+)\\b",
              "flags": "i",
              "message": "Kata kerjanya belum menyatakan kemitraan — pakai kata kerja aksi kerja sama setelah `will`."
            },
            {
              "pattern": "\\b(user\\s+)?(conversion|conversions|sign-?ups|signup\\s+rate|conversion\\s+rate)\\b",
              "flags": "i",
              "message": "Targetnya harus menyebut konversi pengguna, bukan tujuan abstrak."
            },
            {
              "pattern": "\\bby\\s+20\\s*(%|percent\\b|per\\s*cent\\b)",
              "flags": "i",
              "message": "Rencana tanpa angka tidak bisa dievaluasi — cantumkan besaran peningkatan 20 persen."
            },
            {
              "pattern": "\\b(synergy|synergies|outside\\s+the\\s+box|move\\s+the\\s+needle|low-?hanging\\s+fruit|leverage\\s+synergies|paradigm\\s+shift|circle\\s+back)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Klise korporat seperti ini terdengar sibuk tetapi tidak menyampaikan informasi apa pun kepada pembaca."
            }
          ],
          "solution": "Engineering and marketing will collaborate to increase user conversion by 20%.",
          "susunKode": {
            "question": "Susun rencana aksi kolaborasi ini dengan bahasa konkret tanpa klise bisnis.",
            "potongan": [
              "Engineering and marketing",
              "will collaborate",
              "to increase user conversion",
              "by 20%."
            ],
            "pengecoh": [
              "We will leverage synergy",
              "and think outside the box"
            ],
            "pemisah": " ",
            "explanation": "Menyebutkan pihak pelaku ('Engineering and marketing') dan target angka konkret menghasilkan rencana kerja yang tajam. Pengecoh 'We will leverage synergy' dan 'think outside the box' adalah klise korporat yang sering menggoda namun tidak memiliki makna terukur."
          }
        },
        {
          "kind": "step",
          "id": "beng-3-5",
          "title": "Memilih Pasangan Kata Tertukar: Accept vs Except",
          "explanation": "Pasangan kata `accept` dan `except` memiliki pengucapan yang sangat mirip namun kelas kata dan fungsi logikanya bertolak belakang. `accept` (kata kerja / *verb*) berarti menyetujui, menerima, atau menyambut baik sesuatu. `except` (kata depan / *preposition*) berarti selain, terkecuali, atau mengecualikan sesuatu dari daftar. Dalam penulisan syarat dan ketentuan (*terms and conditions*) atau kebijakan lisensi, menukar kedua kata ini dapat membalikkan klausul hukum yang sah. Memastikan penulisan yang tepat menjamin kepastian hukum layanan digitalmu.",
          "example": {
            "code": "❌ We except credit card payments from all verified accounts.\n✅ We accept credit card payments from all verified accounts.",
            "output": "Sebelum : 'except' (pengecualian) keliru dipakai untuk tindakan menerima pembayaran.\nSesudah : 'accept' (kata kerja) digunakan secara tepat untuk menyatakan penerimaan.",
            "note": "Accept = menerima (Action); Except = pengecualian (Exclude)."
          },
          "instruction": "Skenario: kamu menulis kebijakan pembaruan metode pembayaran pada portal klien. Kalimat di editor keliru menggunakan kata depan pengecualian di posisi kata kerja setelah modal penanda masa depan. Ganti kata tersebut menjadi bentuk kata kerja penerimaan yang tepat untuk menyatakan bahwa platform menerima semua metode pembayaran perusahaan. Pertahankan kata lainnya.",
          "starterCode": "Our platform will except all major enterprise payment methods.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(will|shall|can|may|must|should)\\s+(now\\s+|also\\s+|soon\\s+)?accept\\b",
              "flags": "i",
              "message": "Setelah modal dibutuhkan kata kerja penerimaan `accept`, bukan kata depan pengecualian."
            },
            {
              "pattern": "\\b(payment|billing)\\s+(methods?|options?|types?|instruments?|channels?)\\b",
              "flags": "i",
              "message": "Objek kalimatnya harus tetap metode pembayaran yang diterima platform."
            },
            {
              "pattern": "\\b(all|every|any)\\b",
              "flags": "i",
              "message": "Kebijakannya menyatakan cakupan menyeluruh, jadi pertahankan penanda `all` atau padanannya."
            },
            {
              "pattern": "\\b(will|shall|can|may|must|should|does|do)\\s+(now\\s+|also\\s+|soon\\s+)?except\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "`except` adalah kata depan pengecualian, jadi ia tidak bisa berdiri di posisi kata kerja setelah modal."
            }
          ],
          "solution": "Our platform will accept all major enterprise payment methods.",
          "susunKode": {
            "question": "Susun kebijakan pembayaran ini dengan kata kerja penerimaan yang benar.",
            "potongan": [
              "Our platform will accept",
              "all major enterprise",
              "payment methods."
            ],
            "pengecoh": [
              "Our platform will except",
              "will accepting"
            ],
            "pemisah": " ",
            "explanation": "'will accept' adalah susunan modal dan bare infinitive yang tepat untuk menyatakan penerimaan. Pengecoh 'will except' menggoda karena kemiripan pelafalan dengan kata 'accept'. Pengecoh 'will accepting' salah secara bentuk tata bahasa."
          }
        },
        {
          "kind": "step",
          "id": "beng-3-6",
          "title": "Menghilangkan Slang dan Idiom Lokal untuk Audiens Global",
          "explanation": "Menggunakan idiom percakapan lokal seperti `touch base` (berdiskusi singkat) atau `ballpark figure` (angka perkiraan kasar) berisiko membingungkan tim global dan klien internasional yang tidak akrab dengan metafora budaya tersebut. Dalam komunikasi asinkron profesional lintas negara, pesan harus ditulis dengan kata-kata denotatif yang universal dan lugas. Mengganti frasa idiomatis seperti `Let's touch base on Monday` menjadi `Let's meet briefly on Monday` menghapus ambiguitas semantik tanpa mengurangi kesopanan. Pilihan kata yang bersih memperlancar kolaborasi tim rekayasa terdistribusi.",
          "example": {
            "code": "❌ Let's touch base next Monday to review the design mockups.\n✅ Let's meet briefly next Monday to review the design mockups.",
            "output": "Sebelum : idiom 'touch base' berisiko tidak dipahami penutur non-native global.\nSesudah : diganti frasa lugas 'meet briefly' yang memiliki makna operasional jelas.",
            "note": "Pilihlah kosakata yang dapat dipahami secara harfiah tanpa memerlukan konteks budaya lokal."
          },
          "instruction": "Skenario: kamu mengirim undangan koordinasi proyek kepada tim mitra di Tokyo dan Berlin. Draf di editor menggunakan idiom lokal yang ambigu bagi audiens internasional. Ganti frasa idiom tersebut menjadi ungkapan kerja baku yang jelas dan universal untuk menyatakan pertemuan singkat pada hari Kamis. Pertahankan sisa kalimat lainnya.",
          "starterCode": "Let us touch base on Thursday to align on the release schedule.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(meet\\s+briefly|briefly\\s+meet|meet\\s+for\\s+a\\s+(short|brief|quick)\\s+\\w+|(have|hold|schedule|arrange|set\\s+up)\\s+a\\s+(short|brief|quick|15-minute|30-minute)\\s+(meeting|call|discussion|session|sync)|(have|hold)\\s+a\\s+(meeting|call)\\s+briefly)\\b",
              "flags": "i",
              "message": "Ganti idiom itu dengan ungkapan kerja lugas untuk pertemuan singkat, yang bisa dipahami audiens mana pun."
            },
            {
              "pattern": "\\bthursday\\b",
              "flags": "i",
              "message": "Keterangan waktunya harus tetap ada supaya undangannya jelas: pertemuan itu hari Kamis."
            },
            {
              "pattern": "\\b(touch\\s+base|circle\\s+back|ping\\s+you|catch\\s+up\\s+offline|ballpark|hop\\s+on\\s+a|reach\\s+out\\s+and\\s+touch|shoot\\s+you\\s+a|drop\\s+a\\s+line|get\\s+the\\s+ball\\s+rolling)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Idiom lokal seperti ini ambigu bagi pembaca lintas negara — pilih ungkapan yang harfiah."
            }
          ],
          "solution": "Let us meet briefly on Thursday to align on the release schedule.",
          "susunKode": {
            "question": "Susun kalimat undangan rapat ini dengan bahasa yang jernih dan bebas idiom lokal.",
            "potongan": [
              "Let us meet briefly",
              "on Thursday to align",
              "on the release schedule."
            ],
            "pengecoh": [
              "Let us touch base",
              "to touch base"
            ],
            "pemisah": " ",
            "explanation": "'meet briefly' menyampaikan maksud rapat singkat secara universal dan profesional. Pengecoh 'touch base' menggoda penutur yang menyukai istilah pergaulan kantor Amerika, namun berisiko membingungkan dalam komunikasi tim multinasional."
          }
        },
        {
          "kind": "step",
          "id": "beng-3-7",
          "title": "Tugas Mengarang: Menyusun Permintaan Klarifikasi dengan Register Formal Menengah",
          "explanation": "Menulis permintaan klarifikasi teknis kepada mitra eksternal memerlukan register netral-formal yang santun tanpa terdengar menuntut. Memulai kalimat dengan kata tanya lugas berbasis modal sopan (`Could you please provide...`) jauh lebih profesional daripada perintah langsung (`Give us...`) atau bahasa slang (`Send over the stuff`). Struktur kalimat permintaan klarifikasi yang efektif menggabungkan modal sopan, kata kerja permintaaan spesifik (`provide` atau `share`), frasa benda dokumen (`the detailed API specifications`), dan tenggat waktu wajar (`before Friday`). Nada bahasa ini menjaga hubungan kerja sama tetap harmonis sekaligus menjaga ketepatan jadwal.",
          "example": {
            "code": "❌ Send over the API docs ASAP so we can finish our integration.\n✅ Could you please provide the detailed API specifications before Friday?",
            "output": "Sebelum : nada imperatif kasar dengan slang 'ASAP' yang menuntut.\nSesudah : kalimat tanya sopan berbasis modal 'Could you please' dengan objek dan tenggat jelas.",
            "note": "Permintaan sopan dalam bentuk pertanyaan selalu diakhiri tanda tanya."
          },
          "instruction": "Skenario: kamu memerlukan spesifikasi teknis dari penyedia gateway pembayaran eksternal. Tulis SATU kalimat tanya permintaan sopan dalam bahasa Inggris. Unsur wajib: (1) modal pembuka permintaan sopan kepada lawan bicara di awal kalimat, (2) objek dokumen spesifikasi API yang terperinci, (3) keterangan batas waktu sebelum hari Jumat, dan (4) tanda tanya di akhir kalimat. Dilarang menggunakan kata perintah imperatif langsung atau singkatan informal.",
          "starterCode": "# Tulis satu kalimat tanya permintaan sopan di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(could|would|can|may|might)\\s+(you|we|your\\s+team|it\\s+be\\s+possible)\\b",
              "flags": "i",
              "message": "Permintaan sopan dibuka dengan modal pertanyaan di awal kalimat, bukan dengan perintah langsung."
            },
            {
              "pattern": "\\b(api|technical|integration)\\s+(specifications?|specs?|documentation|docs)\\b",
              "flags": "i",
              "message": "Sebutkan objek yang kamu minta secara spesifik: dokumen spesifikasi API-nya."
            },
            {
              "pattern": "\\b(before|by|prior\\s+to|ahead\\s+of|no\\s+later\\s+than)\\s+(this\\s+|next\\s+|end\\s+of\\s+day\\s+)?friday\\b",
              "flags": "i",
              "message": "Batas waktunya belum tertulis — permintaan tanpa tenggat sulit ditindaklanjuti."
            },
            {
              "pattern": "\\?\\s*$",
              "flags": "i",
              "message": "Kalimat permintaan berbentuk pertanyaan harus ditutup tanda tanya."
            },
            {
              "pattern": "\\b(asap|send\\s+over|give\\s+us|gimme|need\\s+it\\s+now|right\\s+now\\s+please)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Singkatan informal dan desakan kasar menurunkan register permintaanmu kepada pihak eksternal."
            }
          ],
          "solution": "Could you please provide the detailed API specifications before Friday?",
          "susunKode": {
            "question": "Susun permintaan klarifikasi teknis ini dalam register profesional yang sopan.",
            "potongan": [
              "Could you please provide",
              "the detailed API specifications",
              "before Friday?"
            ],
            "pengecoh": [
              "Give us immediately",
              "before Friday."
            ],
            "pemisah": " ",
            "explanation": "'Could you please provide ... before Friday?' adalah bentuk baku permintaan resmi yang sopan kepada pihak eksternal. Pengecoh 'Give us immediately' terdengar menuntut dan tidak sopan dalam etika bisnis. Pengecoh bertitik di akhir keliru karena kalimat tanya wajib diakhiri tanda tanya."
          }
        },
        {
          "kind": "step",
          "id": "beng-3-8",
          "title": "Tugas Mengarang: Menyusun Pernyataan Prinsip Kebijakan Menggunakan Kata Presisi",
          "explanation": "Menyusun pernyataan kepatuhan dan tata kelola sistem menuntut ketepatan kata homofon `principle` (aturan dasar / asas etika). Penggunaan kata kerja formal yang terukur seperti `adheres to` (mematuhi) yang dipadukan dengan kata benda presisi (`the core principle` atau `the guiding principle`) dan objek standar (`data privacy` atau `system security`) menghasilkan pernyataan kebijakan yang kuat di mata auditor. Salah memilih ejaan `principal` pada pengumuman kebijakan privasi akan langsung merusak reputasi kepatuhan perusahaan. Ketelitian memilih kata adalah cerminan dari komitmen tata kelola organisasi.",
          "example": {
            "code": "❌ Our engineering team follows the principal of zero trust security.\n✅ Our engineering team adheres to the principle of zero trust security.",
            "output": "Sebelum : 'principal' (utama/modal) keliru dipakai untuk asas aturan dasar.\nSesudah : 'principle' (asas/kaidah) digunakan secara presisi bersama kata kerja formal 'adheres to'.",
            "note": "Principle (asas/kaidah aturan); Principal (pokok utang/pemimpin utama)."
          },
          "instruction": "Skenario: kamu menyusun pengumuman kepatuhan tata kelola data untuk laporan audit tahunan. Tulis SATU kalimat pernyataan utuh dalam bahasa Inggris. Unsur wajib: (1) subjek organisasi atau perusahaan, (2) kata kerja formal kepatuhan, (3) frasa asas aturan dasar yang menggunakan kata presisi bermakna prinsip panduan, dan (4) preposisi keterikatan diikuti fokus perlindungan privasi data. Dilarang menggunakan ejaan homofon yang bermakna pokok pinjaman atau pimpinan utama.",
          "starterCode": "# Tulis satu kalimat pernyataan kepatuhan kebijakan data di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(our|the|this)\\s+(organization|organisation|company|firm|team|business|institution|department|group)\\b",
              "flags": "i",
              "message": "Pernyataan kebijakan butuh subjek organisasi yang jelas sebagai pihak yang terikat."
            },
            {
              "pattern": "\\b(adheres?|adhering|complies|comply|complying|follows?|upholds?|honou?rs?|abides?|conforms?|observes?|is\\s+committed|remains\\s+committed|commits?)\\b",
              "flags": "i",
              "message": "Pakai kata kerja kepatuhan yang formal untuk menyatakan keterikatan pada aturan."
            },
            {
              "pattern": "\\bprinciples?\\b",
              "flags": "i",
              "message": "Kata presisi untuk asas atau aturan dasar adalah `principle` — tanpa kata itu pernyataanmu kehilangan intinya."
            },
            {
              "pattern": "\\b(of|to|on)\\s+(strict\\s+|strong\\s+)?(data|user|customer|client|information|personal)\\s+(privacy|protection|security|confidentiality)\\b",
              "flags": "i",
              "message": "Setelah frasa asas, preposisi keterikatan harus diikuti fokusnya: perlindungan privasi data."
            },
            {
              "pattern": "\\bprincipals?\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "`principal` bermakna pokok pinjaman atau pimpinan utama, jadi ia homofon yang salah untuk asas kebijakan."
            },
            {
              "pattern": "\\b(to\\s+adhere|company\\s+adhere\\b|organization\\s+adhere\\b|adhere\\s+to\\s+the\\s+principle)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Subjek tunggal (Our organization) memerlukan kata kerja 'adheres', bukan 'adhere'."
            }
          ],
          "solution": "Our organization adheres to the core principle of data privacy.",
          "susunKode": {
            "question": "Susun pernyataan tata kelola ini dengan kata asas kebijakan yang tepat.",
            "potongan": [
              "Our organization adheres to",
              "the core principle",
              "of data privacy."
            ],
            "pengecoh": [
              "the core principal",
              "adhere to the principle"
            ],
            "pemisah": " ",
            "explanation": "'the core principle' adalah pilihan kata yang presisi untuk menyatakan asas aturan dasar tata kelola. Pengecoh 'the core principal' keliru karena 'principal' berarti utama atau modal utang. Pengecoh 'adhere to' keliru secara subject-verb agreement untuk subjek tunggal 'Our organization'."
          }
        },
        {
          "kind": "quiz",
          "id": "beng-3-k1",
          "title": "Kuis: Presisi Kosakata, Ejaan Kritis, dan Register Bahasa",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyusun laporan evaluasi performa infrastruktur server. Pilihlah kalimat yang menggunakan kata kerja 'affect' secara TEPAT:",
              "choices": [
                "A. The unexpected database outage will not effect our quarterly SLA targets.",
                "B. The unexpected database outage will not affect our quarterly SLA targets.",
                "C. The unexpected database outage had a severe affect on transaction processing times.",
                "D. The team took immediate action to effectuate the database affect."
              ],
              "answerIndex": 1,
              "explanation": "'affect' adalah kata kerja yang berarti memengaruhi atau berdampak pada sesuatu. 'effect' adalah kata benda yang berarti hasil atau akibat. Pada pilihan A dan C penggunaannya tertukar."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Seorang koordinator logistik menulis konfirmasi penginapan untuk delegasi klien. Manakah penulisan ejaan yang benar untuk kata 'accommodate'?",
              "choices": [
                "A. We will adjust our schedule to accommodate your delegation's requests.",
                "B. We will adjust our schedule to acommodate your delegation's requests.",
                "C. We will adjust our schedule to accomomodate your delegation's requests.",
                "D. We will adjust our schedule to accomdate your delegation's requests."
              ],
              "answerIndex": 0,
              "explanation": "Kata 'accommodate' dieja dengan dua huruf 'c' dan dua huruf 'm'. Kesalahan umum yang sering muncul adalah menulis dengan satu 'c' atau satu 'm'."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Dalam draf e-mail penawaran produk B2B, kamu ingin mendeskripsikan harga yang terjangkau tanpa menimbulkan kesan kualitas rendah. Kata manakah yang memiliki konotasi paling profesional?",
              "choices": [
                "A. 'We offer a cheap enterprise platform designed for budget constraints.'",
                "B. 'We offer a cut-rate enterprise platform designed for budget constraints.'",
                "C. 'We offer a cost-effective enterprise platform designed for budget constraints.'",
                "D. 'We offer a stingy enterprise platform designed for budget constraints.'"
              ],
              "answerIndex": 2,
              "explanation": "'cost-effective' mengomunikasikan efisiensi finansial yang bernilai tinggi, sedangkan 'cheap' dan 'cut-rate' berkonotasi barang murahan atau berkualitas rendah."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyunting draf pernyataan prinsip arsitektur sistem. Pilihlah kata yang tepat untuk melengkapi kalimat: 'Our organization strictly adheres to the core [...] of data privacy.'",
              "choices": [
                "A. principal (karena merujuk pada pimpinan atau nilai pokok)",
                "B. principals (karena merupakan kata benda jamak aturan)",
                "C. principal's (karena menyatakan kepemilikan organisasi)",
                "D. principle (karena merujuk pada asas, kaidah moral, atau aturan dasar)"
              ],
              "answerIndex": 3,
              "explanation": "'principle' adalah kata benda yang berarti prinsip, aturan dasar, atau kaidah fundamental. 'principal' berarti kepala sekolah, pimpinan lembaga, atau modal pokok pinjaman."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyusun draf e-mail pembaruan status ke klien korporat. Manakah kalimat yang menggunakan register formal standar dan lugas tanpa istilah kasual berlebihan?",
              "choices": [
                "A. We gonna fix up the database latency pronto before tomorrow morning.",
                "B. We will resolve the database latency issue promptly before tomorrow morning.",
                "C. Our tech guys will totally crush the database bug ASAP.",
                "D. We will fix the stuff regarding database speed right now."
              ],
              "answerIndex": 1,
              "explanation": "Pilihan B menggunakan register formal standar ('resolve', 'promptly', 'issue'). Pilihan A, C, dan D memuat slang kasual ('gonna', 'pronto', 'crush', 'stuff', 'ASAP') yang tidak layak dalam korespondensi B2B resmi."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Kamu sedang berkomunikasi dengan tim pengembang jarak jauh di berbagai negara. Mengapa penggunaan idiom lokal seperti 'let's touch base' sebaiknya diganti dengan frasa langsung seperti 'let's meet briefly'?",
              "choices": [
                "A. Idiom berbasis budaya lokal sering membingungkan audiens non-native yang tidak memahami kiasan bisbol Amerika, sehingga pesan langsung lebih transparan dan inklusif.",
                "B. Idiom 'touch base' melanggar tata bahasa baku bahasa Inggris Oxford.",
                "C. Semua kata kerja majemuk dilarang keras dalam komunikasi tertulis perusahaan.",
                "D. Kata 'touch' memiliki konotasi negatif dalam budaya kerja teknologi informasi."
              ],
              "answerIndex": 0,
              "explanation": "Dalam lingkungan kerja global, idiom budaya lokal (seperti analogi olahraga Amerika 'touch base') menimbulkan friksi pemahaman bagi penutur bahasa Inggris internasional. Menggunakan plain English langsung ('meet briefly') menjamin kejelasan pesan."
            }
          ]
        }
      ]
    },
    {
      "slug": "pembelajar-non-native",
      "title": "Jebakan Khas Pembelajar Non-Native",
      "description": "Bagian bahasa Inggris yang tidak punya padanan di bahasa Indonesia: article, verb tense, modal, dan preposition.",
      "topics": [
        "Word order: pola SVO dan urutan adjective",
        "Kalimat negatif",
        "Count dan noncount noun serta article a/an/the",
        "Pronoun dan acuannya",
        "Verb tense: dua belas bentuk dan kapan dipakai",
        "Modal auxiliary: can, could, may, might, must, should, would",
        "Preposition of time, place, dan movement",
        "Slang dan idiom di lingkungan kerja"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "beng-4-m1",
          "title": "Tata Bahasa Tanpa Padanan: Article, Noncount Noun, dan Urutan SVO",
          "body": "# Kenapa Bagian Ini Terasa Paling Berat\n\nBagi penutur asli bahasa Indonesia, empat konsep tata bahasa Inggris ini tidak memiliki padanan langsung dalam struktur bahasa ibu kita: **article** (`a`, `an`, `the`), **perbedaan kata benda hitung dan tak hitung** (*count vs noncount nouns*), **urutan kata sifat** (*adjective order*), dan **bantuan kata kerja bantu negatif** (*negative auxiliaries*). Karena bahasa Indonesia tidak mengubah bentuk kata untuk jumlah, kala waktu, atau rujukan spesifik, intuisi alamiah kita sering kali gagal memandu di area ini. Memahami pola logis di balik aturan-aturan ini akan menghapus rasa cemas dan keraguan saat menulis dokumen profesional.\n\n## Article: `a`, `an`, `the`, atau Zero Article (Tanpa Artikel)\n\nArtikel dalam bahasa Inggris berfungsi sebagai penanda status pengetahuan pembaca terhadap benda yang disebutkan:\n\n```text\nAlur Pengenalan Konsep dalam Dokumen:\n1. Pengenalan Pertama (Indefinite) -> \"Our team identified a critical vulnerability.\"\n                                      ^ Pembaca baru pertama kali mendengar hal ini (a / an)\n\n2. Rujukan Kedua (Definite)        -> \"The vulnerability was patched within two hours.\"\n                                      ^ Pembaca sudah tahu kerentanan mana yang dimaksud (the)\n```\n\n| Situasi Penggunaan | Artikel yang Digunakan | Contoh Kalimat Kerja |\n| --- | --- | --- |\n| **Benda tunggal dapat dihitung (pertama kali disebut)** | `a` (bunyi konsonan) / `an` (bunyi vokal) | `We submitted a proposal yesterday.` / `I created an account.` |\n| **Benda spesifik yang sudah diketahui kedua pihak** | `the` (tunggal maupun jamak) | `The client approved the invoice.` |\n| **Benda jamak dalam konteks umum** | Tanpa artikel (*Zero Article*) | `Engineers need quiet time for deep focus.` |\n| **Noncount noun dalam konteks umum** | Tanpa artikel (*Zero Article*) | `We require reliable data to proceed.` |\n\n## Count dan Noncount Noun: Jebakan Tanpa Akhiran '-s'\n\nSebagian kata benda dalam bahasa Inggris bersifat massa (*uncountable*) dan **tidak pernah memiliki bentuk jamak dengan akhiran -s**, serta **tidak boleh diawali 'a/an' secara langsung**.\n\n```text\nKata Benda Noncount Populer di Dunia Kerja:\n- information  (BUKAN: informations) -> Gunakan: some information / pieces of information\n- feedback     (BUKAN: feedbacks)    -> Gunakan: valuable feedback / some feedback\n- advice       (BUKAN: advices)      -> Gunakan: a piece of advice / professional advice\n- software     (BUKAN: softwares)    -> Gunakan: software applications / software packages\n- equipment    (BUKAN: equipments)   -> Gunakan: two pieces of equipment / hardware equipment\n```\n\nMenulis `Please give us your feedbacks` adalah salah satu kesalahan paling umum dari penutur Indonesia yang langsung disadari oleh penutur native. Bentuk yang benar adalah `Please give us your feedback`.\n\n## Word Order: Pola SVO dan Urutan Baku Adjective\n\nBahasa Inggris memiliki struktur **SVO (Subject - Verb - Object)** yang sangat kaku. Selain itu, ketika beberapa kata sifat diletakkan berurutan sebelum kata benda, ada urutan baku yang harus dipatuhi:\n\n```text\nUrutan Baku Adjective Sebelum Kata Benda:\n[Opini] -> [Ukuran] -> [Bentuk] -> [Usia] -> [Warna] -> [Asal/Negara] -> [Bahan] -> [Tujuan] -> NOUN\nContoh:  a useful    large     rectangular    new      silver       German       metal    storage   cabinet\n```\n\nDi dunia kerja, kamu jarang memakai 8 adjective sekaligus, namun kaidah dasar bahwa **ukuran mendahului warna** dan **warna mendahului bahan** wajib ditaati (`a large blue plastic container`, BUKAN `a plastic large blue container`).\n\n## Pembentukan Kalimat Negatif Profesional\n\nDalam bahasa Indonesia, kita cukup menambahkan kata *\"tidak\"* di depan kata kerja apa pun (*\"Kami tidak setuju\"*). Namun dalam bahasa Inggris, kalimat negatif **wajib menggunakan kata kerja bantu (*auxiliary verb*)** seperti `do not`, `does not`, `did not`, atau `cannot`.\n\n```text\n❌ Terjemahan Harfiah: \"We not agree with the terms.\"\n✅ Standar Baku:       \"We do not agree with the terms.\"\n```\n\n## Kaitan ke Dunia Kerja\n\nDi lingkungan perusahaan multinasional dan seleksi teknis jarak jauh, dokumen tertulis yang bersih dari kesalahan artikel dan noncount noun memberikan impresi instan bahwa kamu adalah komunikator internasional yang mandiri dan siap diterjunkan langsung menghadapi klien global."
        },
        {
          "kind": "materi",
          "id": "beng-4-m2",
          "title": "Modal Kesopanan, Tenses Kerja, dan Preposition of Time, Place, & Movement",
          "body": "# Nuansa Kesopanan dan Presisi Waktu, Tempat, Serta Gerak\n\nKomunikasi kerja menuntut diplomasi yang halus saat meminta bantuan dan akurasi tinggi saat menetapkan jadwal, lokasi, atau perpindahan data.\n\n## Modal Auxiliary: Gradasi Tingkat Kesopanan (*Politeness Levels*)\n\nKata kerja bantu modal (*modal auxiliary*) mengubah nada permintaan secara drastis dari perintah kasar menjadi permintaan kolaboratif yang santun:\n\n| Bentuk Permintaan | Tingkat Nada | Kapan Digunakan |\n| --- | --- | --- |\n| `Send me the contract.` | Perintah Langsung (Imperatif) | Terbaca menuntut atau kasar kecuali kepada bawahan langsung dalam kondisi darurat |\n| `Can you send me the contract?` | Netral Kasual | Rekan satu tim yang sudah akrab |\n| `Could you please send me the contract?` | Sopan Standar (**Sangat Direkomendasikan**) | Standar emas untuk seluruh e-mail kerja, atasan, dan klien |\n| `Would you mind sending me the contract?` | Paling Sopan & Berhati-hati | Permintaan bernilai besar atau kepada pihak eksekutif tinggi |\n\nHindari penggunaan kata `must` saat meminta sesuatu dari klien atau rekan kerja setara (`You must send this today` terdengar sangat agresif). Gantilah dengan `Please provide this by 5 PM today`.\n\n## Verb Tense Kerja: Simple Past vs Present Perfect\n\nPerbedaan antara *Simple Past* dan *Present Perfect* sering membingungkan pembelajar non-native:\n\n```text\n1. Simple Past (Waktu Spesifik Lampau):\n   -> Digunakan ketika waktu kejadian DISEBUTKAN SECARA EKSPLISIT (yesterday, on Monday, last week).\n   Contoh: \"We deployed the patch yesterday.\"\n\n2. Present Perfect (Waktu Tidak Spesifik / Dampak Masih Terasa):\n   -> Digunakan ketika hasil pekerjaan sudah selesai namun WAKTU PERSIS TIDAK DISEBUTKAN.\n   Contoh: \"We have deployed the patch successfully.\"\n\n❌ SALAH: \"We have deployed the patch yesterday.\" (yesterday menuntut simple past!)\n```\n\n## Preposition of Time, Place, dan Movement: In, On, At, Into, Onto, Across, Through\n\nPreposisi bahasa Inggris mengikuti prinsip hierarki ruang dan gerak:\n\n### 1. Preposisi Waktu & Tempat Statis\n\n```text\nAT  -> Sangat Spesifik (Jam / Titik Lokasi Tepat)    : at 9:00 AM, at the main entrance, at my desk\nON  -> Permukaan / Hari / Tanggal Kalender          : on Monday, on July 15, on the server rack\nIN  -> Ruang Tertutup / Bulan / Tahun / Kota         : in July, in 2026, in Jakarta, in the building\n```\n\n### 2. Preposisi Gerak (*Preposition of Movement*)\n\nPreposisi gerak menyatakan perpindahan fisik, perpindahan arah berkas, atau alur data melintasi batas:\n\n| Preposisi Gerak | Arah Perpindahan | Contoh Kalimat Bisnis / Teknis |\n| --- | --- | --- |\n| **into** | Dari luar masuk ke dalam ruang atau sistem | `The data is ingested into the analytical warehouse.` |\n| **onto** | Berpindah naik ke atas permukaan platform | `Deploy the container image onto the production cluster.` |\n| **across** | Melintasi dari satu sisi ke sisi lain / antardepartemen | `Information was shared across all regional offices.` |\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Menggabungkan present perfect dengan penanda waktu lampau spesifik.** Menulis `We have deployed the patch yesterday` adalah kesalahan tata bahasa; gunakan `We deployed the patch yesterday`.\n2. **Menggunakan modal 'must' saat meminta sesuatu dari klien.** Frasa `You must send the contract` terdengar agresif; gunakan `Could you please send the contract`.\n3. **Menukar preposisi in, on, dan at.** Ingat: `in` untuk bulan/tahun/kota, `on` untuk hari/tanggal, dan `at` untuk jam spesifik.\n\n## Kaitan ke Dunia Kerja\n\nMenyusun undangan rapat kerja dengan susunan waktu dan lokasi yang wajar (`The meeting is in July, on Monday, at 9 a.m. in the main conference room`) serta menjelaskan arsitektur data dengan preposisi gerak yang tepat (`migrated into AWS, routed through the load balancer`) mencerminkan ketajaman komunikasi teknis kelas dunia."
        },
        {
          "kind": "step",
          "id": "beng-4-1",
          "title": "Urutan Adjective sebelum Noun",
          "explanation": "Bahasa Inggris menerapkan urutan baku untuk kata sifat yang berdiri sebelum kata benda. Urutan standarnya bergerak dari opini → ukuran → bentuk → warna → bahan sebelum kata benda utama. Kaidah paling mendasar yang wajib diingat: ukuran (*size*) selalu mendahului warna (*color*), dan warna selalu mendahului bahan (*material*). Penutur non-native sering keliru menaruh bahan di depan ukuran karena terbiasa dengan pola bahasa ibu. Menyusun kata sifat sesuai urutan alami penutur native membuat deskripsi inventaris atau perangkat keras terdengar wajar dan profesional.",
          "example": {
            "code": "❌ We ordered a wooden round small table for the conference room.\n✅ We ordered a small round wooden table for the conference room.",
            "output": "Sebelum : bahan 'wooden' mendahului ukuran 'small' — urutan tidak baku.\nSesudah : ukuran (small) -> bentuk (round) -> bahan (wooden) -> noun.",
            "note": "Urutan: Ukuran -> Bentuk -> Usia -> Warna -> Bahan -> Noun."
          },
          "instruction": "Skenario: kamu mencatat pesanan wadah penyimpanan arsip server di inventaris kantor. Urutan kata sifat pada draf di editor tidak baku karena bahan diletakkan sebelum ukuran dan warna. Susun ulang ketiga kata sifat tersebut mengikuti urutan baku (ukuran → warna → bahan) sebelum kata benda utama. Jangan menambah atau menghapus kata lain.",
          "starterCode": "We ordered a plastic large blue container for the archive.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\blarge\\s+blue\\s+plastic\\s+\\w+",
              "flags": "i",
              "message": "Urutan kata sifat belum baku. Dalam bahasa Inggris ukuran mendahului warna, dan warna mendahului bahan, sebelum kata bendanya."
            },
            {
              "pattern": "\\b(plastic\\s+(large|big|blue)|blue\\s+(large|big))\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu masih menaruh bahan atau warna di depan ukuran. Bahan adalah kata sifat yang paling dekat dengan kata benda."
            }
          ],
          "solution": "We ordered a large blue plastic container for the archive.",
          "susunKode": {
            "question": "Susun kalimat pesanan inventaris ini dengan urutan kata sifat yang baku.",
            "potongan": [
              "We ordered a",
              "large blue plastic",
              "container for the archive."
            ],
            "pengecoh": [
              "plastic large blue",
              "blue plastic large"
            ],
            "pemisah": " ",
            "explanation": "Urutan yang benar adalah ukuran ('large') -> warna ('blue') -> bahan ('plastic'). Pengecoh 'plastic large blue' sering menggoda penutur Indonesia karena bahan sering dianggap sebagai sifat paling dominan."
          }
        },
        {
          "kind": "step",
          "id": "beng-4-2",
          "title": "Pembentukan Kalimat Negatif Profesional",
          "explanation": "Dalam bahasa Inggris baku, menyusun kalimat negatif membutuhkan kata kerja bantu (*auxiliary verb*) seperti `do not`, `does not`, atau `did not` sebelum kata kerja utama. Konstruksi harfiah seperti `We not agree` atau `The system not respond` adalah kesalahan pembentukan kalimat negatif yang fatal. Untuk subjek jamak atau pronoun `We` pada present tense, gunakan bentuk `do not` diikuti kata kerja dasar (*bare infinitive*). Menyatakan ketidaksetujuan dengan struktur tata bahasa yang benar mencerminkan kematangan bernegosiasi bisnis secara formal.",
          "example": {
            "code": "❌ The development team not support legacy browser versions.\n✅ The development team does not support legacy browser versions.",
            "output": "Sebelum : 'not' langsung menempel pada kata kerja tanpa auxiliary verb.\nSesudah : auxiliary 'does not' disisipkan sesuai subjek tunggal 'team'.",
            "note": "Gunakan do not / does not / did not sebelum kata kerja utama dalam kalimat negatif."
          },
          "instruction": "Skenario: kamu menyusun tanggapan resmi mengenai persyaratan pembayaran yang diajukan vendor. Kalimat di editor memuat kesalahan pembentukan kalimat negatif tanpa kata kerja bantu. Perbaiki kalimat tersebut dengan menambahkan kata kerja bantu negasi yang sesuai dengan subjek sebelum kata penyangkal. Pertahankan sisa kalimat lainnya.",
          "starterCode": "We not agree with the proposed payment terms.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(do|does|did)(\\s+not|n['’]t)\\s+[a-z]+",
              "flags": "i",
              "message": "Kalimat negatif bahasa Inggris butuh kata kerja bantu. Pakai `do/does/did` sebelum `not` (boleh dikontraksi) lalu kata kerja bentuk dasar."
            },
            {
              "pattern": "\\b(we|they|you|i|he|she|it)\\s+not\\s+[a-z]+",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu meletakkan `not` langsung setelah subjek. Tanpa auxiliary, negasinya tidak terbentuk."
            },
            {
              "pattern": "\\b((we|they|you)\\s+(does\\s+not|doesn['’]t)|i\\s+(does\\s+not|doesn['’]t))\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Bentuk auxiliary-nya tidak cocok dengan subjek. `does` hanya untuk subjek orang ketiga tunggal."
            }
          ],
          "solution": "We do not agree with the proposed payment terms.",
          "susunKode": {
            "question": "Susun kalimat negasi formal ini dengan kata kerja bantu yang tepat.",
            "potongan": [
              "We do not agree",
              "with the proposed",
              "payment terms."
            ],
            "pengecoh": [
              "We not agree",
              "We are not agree"
            ],
            "pemisah": " ",
            "explanation": "'We do not agree' adalah bentuk negatif standar bahasa Inggris untuk kata kerja 'agree'. Pengecoh 'We not agree' adalah terjemahan harfiah bahasa Indonesia yang keliru. Pengecoh 'We are not agree' juga salah karena 'agree' adalah kata kerja, bukan kata sifat."
          }
        },
        {
          "kind": "step",
          "id": "beng-4-3",
          "title": "Memperbaiki Noncount Noun Jamak Tanpa Akhiran -s",
          "explanation": "Kata benda tak dapat dihitung (*noncount noun*) seperti `information`, `feedback`, `advice`, `software`, dan `equipment` tidak pernah memiliki bentuk jamak dengan akhiran `-s`. Penutur Indonesia sering terbiasa menambahkan `-s` (seperti `feedbacks` atau `informations`) karena menganggap konsep tersebut jamak dalam bahasa Indonesia. Untuk menyatakan kuantitas, gunakan kata penjelas seperti `some feedback` atau `detailed feedback`. Menghapus akhiran `-s` pada noncount nouns adalah perbaikan instan yang paling nyata dalam e-mail profesional.",
          "example": {
            "code": "❌ The vendor delivered new hardware equipments yesterday.\n✅ The vendor delivered new hardware equipment yesterday.",
            "output": "Sebelum : 'equipments' keliru diberi akhiran jamak -s pada noncount noun.\nSesudah : 'equipment' ditulis tanpa akhiran -s sesuai kaidah kata benda massa.",
            "note": "Noncount nouns tidak pernah memakai akhiran -s atau -es."
          },
          "instruction": "Skenario: kamu mengirimkan survei pengalaman pengguna pasca-peluncuran fitur baru. Kalimat di editor keliru menambahkan akhiran jamak pada kata benda massa umpan balik. Perbaiki kata tersebut sehingga menjadi bentuk kata benda tak dapat dihitung yang baku. Pertahankan seluruh kata lainnya.",
          "starterCode": "Please share your valuable feedbacks on the new user interface.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bfeedback\\b",
              "flags": "i",
              "message": "Kata benda massa yang diminta belum muncul dalam bentuk bakunya."
            },
            {
              "pattern": "\\bfeedbacks\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu menambahkan akhiran jamak pada kata benda tak dapat dihitung. Kata benda massa tidak punya bentuk -s."
            },
            {
              "pattern": "\\b(informations|advices|equipments|softwares|staffs|researches|luggages)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kata benda tak dapat dihitung lain juga kamu jamakkan. Bentuk -s tidak berlaku untuk kelompok kata ini."
            },
            {
              "pattern": "\\b(a|an)\\s+(valuable\\s+)?feedback\\b|\\byour\\s+a\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kata benda tak dapat dihitung (feedback) tidak boleh diawali artikel 'a/an'."
            }
          ],
          "solution": "Please share your valuable feedback on the new user interface.",
          "susunKode": {
            "question": "Susun permintaan umpan balik ini dengan kata benda noncount yang tepat.",
            "potongan": [
              "Please share your",
              "valuable feedback on",
              "the new user interface."
            ],
            "pengecoh": [
              "valuable feedbacks on",
              "a valuable feedback on"
            ],
            "pemisah": " ",
            "explanation": "'feedback' adalah noncount noun yang tidak boleh ditambah akhiran '-s' dan tidak boleh diawali 'a'. Pengecoh 'feedbacks' menggoda karena konsep umpan balik sering dianggap jamak dalam pikiran penutur Indonesia."
          }
        },
        {
          "kind": "step",
          "id": "beng-4-4",
          "title": "Penggunaan Article a/an dan the pada Alur Referensi",
          "explanation": "Saat sebuah objek diperkenalkan pertama kali ke dalam wacana, gunakan artikel tak tentu (*indefinite article*) `a` atau `an`. Setelah objek tersebut diketahui oleh pembaca, rujukan berikutnya untuk objek yang sama WAJIB menggunakan artikel tertentu (*definite article*) `the`. Alur ini memberikan kejelasan acuan bahwa objek pada kalimat kedua adalah objek spesifik yang sama dengan yang baru saja dibahas. Konsistensi artikel ini sangat krusial dalam deskripsi alur kerja pengadaan dan penanganan tiket teknis.",
          "example": {
            "code": "❌ Our finance manager created a budget proposal. A budget proposal is under review.\n✅ Our finance manager created a budget proposal. The budget proposal is under review.",
            "output": "Sebelum : kalimat kedua keliru memakai 'A', seolah-olah proposal yang berbeda.\nSesudah : kalimat kedua memakai 'The' karena merujuk ke proposal spesifik yang sama.",
            "note": "Gunakan 'a/an' saat menyebutkan pertama kali, lalu 'the' saat merujuknya kembali."
          },
          "instruction": "Skenario: kamu mencatat status pesanan pembelian pada sistem ERP. Kalimat pertama telah memperkenalkan dokumen dengan artikel tak tentu. Pada kalimat kedua di editor, ubah artikel pembuka menjadi artikel rujukan tertentu karena dokumen tersebut sudah diketahui dari kalimat sebelumnya. Pertahankan kata lainnya.",
          "starterCode": "We submitted a purchase order this morning. A purchase order is awaiting manager approval.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(a|an)\\s+\\w+[^.]*\\.\\s+the\\b",
              "flags": "i",
              "message": "Alur rujukannya belum benar. Penyebutan pertama memakai artikel tak tentu, penyebutan berikutnya memakai artikel tertentu."
            },
            {
              "pattern": "\\.\\s+(a|an)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu masih membuka kalimat kedua dengan artikel tak tentu, padahal dokumen itu sudah dikenal pembaca dari kalimat sebelumnya."
            }
          ],
          "solution": "We submitted a purchase order this morning. The purchase order is awaiting manager approval.",
          "susunKode": {
            "question": "Susun alur dua kalimat ini dengan artikel yang tepat pada rujukan pertama dan kedua.",
            "potongan": [
              "We submitted a purchase order this morning.",
              "The purchase order is",
              "awaiting manager approval."
            ],
            "pengecoh": [
              "A purchase order is",
              "Purchase order is"
            ],
            "pemisah": " ",
            "explanation": "Rujukan kedua untuk dokumen yang sama wajib menggunakan 'The purchase order'. Pengecoh 'A purchase order is' keliru karena mengindikasikan dokumen yang baru/berbeda. Pengecoh 'Purchase order is' salah karena kata benda tunggal dapat dihitung wajib memiliki determiner."
          }
        },
        {
          "kind": "step",
          "id": "beng-4-5",
          "title": "Tugas Mengarang: Menyusun Permintaan Sopan Menggunakan Modal Auxiliary",
          "explanation": "Dalam korespondensi bisnis, meminta bantuan atau peninjauan dokumen kepada rekan senior atau manajer harus menggunakan modal kesopanan seperti `Could you` atau `Would you`. Memulai kalimat langsung dengan kata perintah imperatif (`Review this document`) terbaca menuntut dan kurang menghormati waktu rekan kerja. Struktur permintaan sopan yang baku diawali modal `Could you` (atau `Would you`), kata keterangan sopan opsional (`please` / `kindly`), kata kerja tindakan (`review`), objek dokumen (`the draft proposal`), keterangan batas waktu wajar (`before Thursday?`), dan diakhiri tanda tanya. Menguasai gradasi modal ini menjamin komunikasi kerja yang efektif dan persuasif.",
          "example": {
            "code": "❌ Send me your feedback on the slide deck today.\n✅ Could you please review the slide deck before Wednesday?",
            "output": "Sebelum : kalimat perintah imperatif yang terkesan kasar dan menuntut.\nSesudah : pertanyaan sopan dengan modal 'Could you please' dan tenggat terukur.",
            "note": "Permintaan sopan dalam bentuk kalimat tanya selalu diakhiri dengan tanda tanya (?)."
          },
          "instruction": "Skenario: kamu meminta manajer meninjau draf proposal sebelum rapat komite hari Kamis. Tulis SATU kalimat tanya permintaan sopan dalam bahasa Inggris. Unsur wajib: (1) modal pembuka permintaan sopan di awal kalimat, (2) kata kerja aksi peninjauan dokumen, (3) objek dokumen draf proposal, (4) batas waktu sebelum hari Kamis, dan (5) tanda tanya di akhir. Dilarang menggunakan kalimat perintah imperatif langsung tanpa modal.",
          "starterCode": "# Tulis satu kalimat tanya permintaan sopan dengan modal di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(could|would|can|may)\\s+(you|i)\\b",
              "flags": "i",
              "message": "Permintaan sopan dibuka dengan modal di awal kalimat, bukan langsung dengan kata kerja."
            },
            {
              "pattern": "\\b(review|check|examine|proofread|assess|read|look\\s+over|go\\s+over|look\\s+through)(s|ed|ing)?\\b",
              "flags": "i",
              "message": "Kata kerjanya belum menyatakan aksi meninjau dokumen."
            },
            {
              "pattern": "\\bdraft\\b[\\s\\w]{0,15}\\bproposal\\b|\\bproposal\\b[\\s\\w]{0,15}\\bdraft\\b",
              "flags": "i",
              "message": "Objek yang diminta belum jelas. Sebutkan draf proposal yang harus ditinjau."
            },
            {
              "pattern": "\\b(before|by|ahead\\s+of|prior\\s+to)\\s+(this\\s+|next\\s+)?thursday\\b",
              "flags": "i",
              "message": "Batas waktunya belum disebut. Tanpa tenggat, permintaanmu tidak bisa diprioritaskan."
            },
            {
              "pattern": "\\?\\s*$",
              "flags": "i",
              "message": "Permintaan berbentuk pertanyaan harus ditutup tanda tanya."
            },
            {
              "pattern": "^\\s*(please\\s+)?(review|check|examine|send|look|go)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu memakai kalimat perintah langsung. Perintah tanpa modal terdengar menuntut kepada atasan."
            }
          ],
          "solution": "Could you please review the draft proposal before Thursday?",
          "susunKode": {
            "question": "Susun kalimat permintaan peninjauan dokumen ini dengan modal kesopanan yang tepat.",
            "potongan": [
              "Could you please review",
              "the draft proposal",
              "before Thursday?"
            ],
            "pengecoh": [
              "Review immediately",
              "before Thursday."
            ],
            "pemisah": " ",
            "explanation": "'Could you please review ... before Thursday?' adalah susunan baku permintaan kerja yang sopan dan profesional. Pengecoh 'Review immediately' sering menggoda karena singkat, namun terdengar menuntut dan kasar dalam etika bisnis. Pengecoh bertitik adalah jebakan keliru karena kalimat tanya wajib diakhiri tanda tanya."
          }
        },
        {
          "kind": "step",
          "id": "beng-4-6",
          "title": "Memilih Simple Past vs Present Perfect dengan Keterangan Waktu Lampau",
          "explanation": "Banyak pembelajar non-native keliru menggabungkan *present perfect tense* (seperti `have deployed`) dengan keterangan waktu lampau yang spesifik (seperti `yesterday`, `last night`, atau `on Tuesday`). Kaidah mutlak bahasa Inggris: **jika waktu lampau spesifik disebutkan, kamu WAJIB menggunakan simple past tense (`deployed`), BUKAN present perfect**. Present perfect hanya digunakan jika waktu persisnya tidak disebutkan dan fokus kalimat terletak pada hasil yang telah tercapai saat ini. Mematuhi kaidah ini mencegah kerancuan linimasa dalam laporan insiden dan tiket rilis.",
          "example": {
            "code": "❌ Our infrastructure team has deployed the update on Monday.\n✅ Our infrastructure team deployed the update on Monday.",
            "output": "Sebelum : 'has deployed' (present perfect) keliru digabung dengan waktu spesifik 'on Monday'.\nSesudah : kata kerja lampau 'deployed' (simple past) selaras dengan keterangan waktu 'on Monday'.",
            "note": "Keterangan waktu lampau spesifik (yesterday, last week, on Tuesday) menuntut simple past."
          },
          "instruction": "Skenario: kamu mencatat riwayat penerapan patch keamanan pada dokumen pembaruan server. Kalimat di editor keliru menggunakan bentuk waktu sekarang selesai bersama keterangan hari lampau yang spesifik. Ubah kata kerja tersebut menjadi bentuk waktu lampau sederhana agar selaras dengan keterangan waktu yang disebutkan. Pertahankan kata lainnya.",
          "starterCode": "We have deployed the security patch on Tuesday.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(\\w+ed|sent|ran|took|went|made|wrote|built|began|put|set|shut|left|gave|got)\\b",
              "flags": "i",
              "message": "Kata kerjanya belum dalam bentuk lampau sederhana."
            },
            {
              "pattern": "\\bon\\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\\b",
              "flags": "i",
              "message": "Keterangan hari lampau yang spesifik harus tetap ada, karena itulah yang menentukan pilihan tense."
            },
            {
              "pattern": "(\\bhave|\\bhas|['’]ve|['’]s)\\s+(just\\s+|already\\s+|recently\\s+)?(been\\s+)?\\w+(ed|en)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu memakai present perfect bersama keterangan waktu lampau yang spesifik. Kedua unsur itu tidak bisa berdampingan."
            }
          ],
          "solution": "We deployed the security patch on Tuesday.",
          "susunKode": {
            "question": "Susun kalimat pembaruan keamanan ini dengan bentuk waktu kata kerja yang tepat.",
            "potongan": [
              "We deployed",
              "the security patch",
              "on Tuesday."
            ],
            "pengecoh": [
              "We have deployed",
              "We are deploy"
            ],
            "pemisah": " ",
            "explanation": "Keberadaan keterangan waktu lampau spesifik 'on Tuesday' mewajibkan penggunaan simple past 'deployed'. Pengecoh 'We have deployed' sangat menggoda penutur Indonesia yang menganggap 'have + V3' selalu berarti 'sudah', tanpa menyadari benturan gramatikal dengan penanda waktu lampau. Pengecoh 'We are deploy' juga merupakan jebakan keliru yang sering muncul saat terburu-buru."
          }
        },
        {
          "kind": "step",
          "id": "beng-4-7",
          "title": "Tugas Mengarang: Menyusun Permintaan Dokumen Kontrak dengan Modal dan Tenggat",
          "explanation": "Meminta penandatanganan dokumen resmi kepada klien membutuhkan kombinasi modal sopan, objek yang spesifik, dan batas waktu yang tegas. Menulis permintaan dengan modal seperti `Could you send me` atau `Would you please forward` memberikan rasa hormat tanpa kehilangan ketegasan tenggat. Pastikan frasa `please` atau `kindly` bersifat opsional agar variasi penulisan yang sopan tetap diterima. Struktur kalimat yang baik menyebutkan objek dokumen secara lengkap (`the signed contract`) dan tenggat waktu konkret (`before Friday?`). Kombinasi ini memastikan bahwa proses administrasi kontrak berjalan lancar tanpa gesekan interpersonal.",
          "example": {
            "code": "❌ Send the signed agreement immediately.\n✅ Could you please send me the signed contract before Friday?",
            "output": "Sebelum : perintah langsung yang menuntut dan kurang diplomatis.\nSesudah : pertanyaan berbasis modal yang sopan dengan tenggat waktu hari Jumat.",
            "note": "Kata 'please' atau 'kindly' dapat disisipkan setelah subjek 'you'."
          },
          "instruction": "Skenario: kamu meminta klien mengirimkan berkas kontrak yang sudah ditandatangani sebelum hari Jumat. Tulis SATU kalimat tanya permintaan sopan dalam bahasa Inggris. Unsur wajib: (1) modal permintaan sopan kepada klien di awal kalimat, (2) kata kerja pengiriman berkas kepada kami, (3) objek dokumen kontrak yang telah ditandatangani, (4) batas waktu sebelum hari Jumat, dan (5) tanda tanya di akhir kalimat. Kata kesopanan tambahan bersifat opsional.",
          "starterCode": "# Tulis satu kalimat tanya permintaan pengiriman kontrak di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(could|would|can|may)\\s+(you|i)\\b",
              "flags": "i",
              "message": "Permintaan kepada klien dibuka dengan modal di awal kalimat, bukan dengan kata kerja perintah."
            },
            {
              "pattern": "\\b(send|forward|share|email|deliver|submit|pass|hand)(s|ed|ing)?\\b",
              "flags": "i",
              "message": "Kata kerjanya belum menyatakan aksi mengirimkan berkas."
            },
            {
              "pattern": "\\b(me|us|our\\s+team|our\\s+office)\\b",
              "flags": "i",
              "message": "Penerima berkasnya belum disebut, jadi klien tidak tahu harus mengirim ke siapa."
            },
            {
              "pattern": "\\b(signed|executed|countersigned|finalized)\\s+(\\w+\\s+){0,2}(contract|agreement|document|copy)\\b|\\b(contract|agreement)\\s+(that\\s+|which\\s+)?(you\\s+)?(have\\s+)?(already\\s+)?signed\\b",
              "flags": "i",
              "message": "Objeknya belum jelas. Sebutkan dokumen kontrak yang sudah ditandatangani."
            },
            {
              "pattern": "\\b(before|by|ahead\\s+of|prior\\s+to)\\s+(this\\s+|next\\s+)?friday\\b",
              "flags": "i",
              "message": "Tenggat waktunya belum disebut, padahal batas hari itu bagian dari permintaan."
            },
            {
              "pattern": "\\?\\s*$",
              "flags": "i",
              "message": "Permintaan berbentuk pertanyaan harus ditutup tanda tanya."
            },
            {
              "pattern": "^\\s*(please\\s+)?(send|forward|share|email|deliver|submit)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu memakai kalimat perintah langsung kepada klien. Awali dengan modal agar terdengar sopan."
            }
          ],
          "solution": "Could you please send me the signed contract before Friday?",
          "susunKode": {
            "question": "Susun permintaan pengiriman kontrak resmi ini dengan struktur modal yang sopan.",
            "potongan": [
              "Could you please send me",
              "the signed contract",
              "before Friday?"
            ],
            "pengecoh": [
              "Send me immediately",
              "before Friday."
            ],
            "pemisah": " ",
            "explanation": "'Could you please send me the signed contract before Friday?' adalah format baku permintaan kontrak yang sopan. Pengecoh 'Send me immediately' sering menggoda karena ringkas, tetapi terlalu kasar untuk korespondensi klien. Pengecoh bertitik adalah jebakan tanda baca keliru karena kalimat tanya wajib diakhiri tanda tanya."
          }
        },
        {
          "kind": "step",
          "id": "beng-4-8",
          "title": "Tugas Mengarang: Menyusun Jadwal Pertemuan dengan Preposisi Waktu, Tempat, dan Gerak",
          "explanation": "Menyusun jadwal pertemuan penting menuntut urutan keterangan waktu dan tempat yang alami di telinga penutur native. Urutan preposisi waktu yang paling wajar bergerak dari unit yang lebih besar atau spesifik secara logis: menyebut bulan (*in July*), diikuti hari (*on Monday*), dan jam (*at 9 a.m.*). Selain itu, ketika mendeskripsikan perpindahan peserta masuk ke dalam ruang rapat, gunakan preposisi gerak *into* (`into the main conference room`). Kombinasi preposisi yang tepat (`in`, `on`, `at`, `into`) membuktikan penguasaan hierarki ruang dan waktu bahasa Inggris secara komprehensif.",
          "example": {
            "code": "❌ The meeting is at 9 a.m. in July on Monday in the room.\n✅ The kickoff meeting is in July, on Monday, at 9 a.m. in the main conference room.",
            "output": "Sebelum : urutan preposisi bertumpuk secara acak dan tidak wajar.\nSesudah : hierarki waktu tersusun rapi: in July -> on Monday -> at 9 a.m.",
            "note": "Urutan waktu: In [Bulan] -> On [Hari] -> At [Jam]."
          },
          "instruction": "Skenario: kamu mengirim pengumuman jadwal rapat perdana proyek kepada seluruh tim. Tulis SATU kalimat pernyataan utuh dalam bahasa Inggris. Unsur wajib: (1) subjek rapat perdana proyek, (2) preposisi bulan Juli, (3) preposisi hari Senin, dan (4) preposisi jam sembilan pagi. Pastikan urutan waktu disusun secara hierarkis dan natural serta diakhiri tanda titik.",
          "starterCode": "# Tulis satu kalimat pengumuman jadwal rapat dengan preposisi waktu yang natural di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(kick[\\s-]?off|inaugural|opening|initial|first|launch)\\s+(project\\s+)?meeting\\b|\\bproject\\s+kick[\\s-]?off\\b",
              "flags": "i",
              "message": "Subjeknya belum jelas. Sebutkan rapat perdana proyek sebagai pokok kalimat."
            },
            {
              "pattern": "\\bin\\s+july\\b",
              "flags": "i",
              "message": "Nama bulan memakai preposisi `in`, karena bulan adalah rentang waktu yang luas."
            },
            {
              "pattern": "\\bon\\s+monday\\b",
              "flags": "i",
              "message": "Nama hari memakai preposisi `on`, bukan preposisi untuk rentang waktu luas."
            },
            {
              "pattern": "\\bat\\s+(9|09|nine)\\s*(:\\s*00|\\.00)?\\s*(a\\.?\\s*m\\.?|o['’]?clock|in\\s+the\\s+morning)",
              "flags": "i",
              "message": "Jam memakai preposisi `at`, dan waktunya harus menunjukkan pukul sembilan pagi."
            },
            {
              "pattern": "\\.\\s*$",
              "flags": "i",
              "message": "Kalimat pernyataan ini harus ditutup tanda titik."
            },
            {
              "pattern": "\\b(on|at)\\s+july\\b|\\b(in|at)\\s+monday\\b|\\b(in|on)\\s+(9|09|nine)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Preposisi waktunya tertukar. Bulan, hari, dan jam masing-masing punya preposisi sendiri."
            }
          ],
          "solution": "The kickoff meeting is in July, on Monday, at 9 a.m.",
          "susunKode": {
            "question": "Susun jadwal rapat proyek ini dengan urutan preposisi waktu yang natural.",
            "potongan": [
              "The kickoff meeting is in July,",
              "on Monday,",
              "at 9 a.m."
            ],
            "pengecoh": [
              "The kickoff meeting is on July,",
              "in 9 a.m."
            ],
            "pemisah": " ",
            "explanation": "Urutan preposisi yang natural adalah 'in July' (bulan), 'on Monday' (hari), dan 'at 9 a.m.' (jam). Pengecoh 'on July' keliru karena bulan menggunakan preposisi 'in'. Pengecoh 'in 9 a.m.' keliru karena jam spesifik wajib menggunakan preposisi 'at'."
          }
        },
        {
          "kind": "quiz",
          "id": "beng-4-k1",
          "title": "Kuis: Mengatasi Jebakan Tata Bahasa Khas Pembelajar Non-Native",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Kamu sedang mengedit draf e-mail resmi ke mitra bisnis internasional. Manakah kalimat berikut yang menggunakan kata benda noncount 'feedback' secara BENAR?",
              "choices": [
                "A. Please send us your valuable feedbacks regarding the prototype.",
                "B. Please send us your valuable feedback regarding the prototype.",
                "C. The team received many feedbacks from the initial beta testing cohort.",
                "D. We appreciate all of the constructive feedbacks submitted by the users."
              ],
              "answerIndex": 1,
              "explanation": "'feedback' adalah noncount noun (mass noun) yang tidak memiliki bentuk jamak berakhiran '-s' dan tidak diawali quantifier 'many'. Jika ingin menghitung, gunakan 'pieces of feedback'."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyusun deskripsi spesifikasi fisik casing server pada inventaris kantor. Berdasarkan kaidah urutan kata sifat (OSASCOMP: Size -> Color -> Material), manakah urutan yang BENAR?",
              "choices": [
                "A. We ordered a plastic blue large container for the backup tapes.",
                "B. We ordered a blue large plastic container for the backup tapes.",
                "C. We ordered a large blue plastic container for the backup tapes.",
                "D. We ordered a plastic large blue container for the backup tapes."
              ],
              "answerIndex": 2,
              "explanation": "Urutan kata sifat bahasa Inggris mengikuti rumus: Size (large) -> Color (blue) -> Material (plastic). Pilihan A, B, dan D melanggar urutan standar alami."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menulis tanggapan penolakan terhadap draf kontrak vendor. Manakah pembentukan kalimat negatif profesional yang BENAR secara kaidah auxiliary verb?",
              "choices": [
                "A. We do not agree with the proposed payment terms.",
                "B. We not agree with the proposed payment terms.",
                "C. We are not agree with the proposed payment terms.",
                "D. We do not agreeing with the proposed payment terms."
              ],
              "answerIndex": 0,
              "explanation": "Dalam bahasa Inggris, kalimat negatif pada simple present membutuhkan kata kerja bantu 'do/does' + 'not' + bare infinitive ('do not agree'). Konstruksi 'we not agree' atau 'we are not agree' adalah kesalahan tipikal penutur non-native."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyusun permohonan persetujuan dokumen kepada klien eksekutif. Manakah kalimat yang menerapkan modal auxiliary untuk kesopanan tingkat tinggi (*courtesy*)?",
              "choices": [
                "A. You must review the attached contract before Friday.",
                "B. Send me your review of the attached contract by Friday.",
                "C. You should definitely check the contract before Friday.",
                "D. Could you please review the attached contract before Friday?"
              ],
              "answerIndex": 3,
              "explanation": "Modal 'Could you please...' melembutkan permintaan menjadi permohonan yang santun dan menghormati otonomi pihak penerima, berbeda dari perintah imperatif atau tuntutan 'You must' yang terkesan agresif."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu sedang memeriksa laporan audit sistem berikut: 'The security team [deployed / has deployed] the critical patch on Tuesday.' Bentuk kata kerja mana yang tepat dan apa alasannya?",
              "choices": [
                "A. 'has deployed', karena peristiwa tersebut masih berdampak pada keamanan sistem saat ini.",
                "B. 'deployed', karena terdapat keterangan waktu lampau spesifik yang sudah selesai ('on Tuesday').",
                "C. Keduanya sama-sama benar dan bebas dipilih sesuai preferensi penulis.",
                "D. 'has deployed', karena present perfect wajib digunakan untuk semua laporan resmi."
              ],
              "answerIndex": 1,
              "explanation": "Jika sebuah kalimat memuat penanda waktu lampau yang spesifik dan telah usai ('on Tuesday', 'yesterday', 'in 2025'), simple past ('deployed') wajib digunakan. Present perfect tidak boleh dipadukan dengan keterangan waktu lampau tertentu."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Seorang manajer proyek menjadwalkan rapat koordinasi global. Pilihlah kalimat yang menggunakan preposisi waktu (in, on, at) secara TEPAT:",
              "choices": [
                "A. The sprint planning meeting is in October, on Monday, at 9 a.m.",
                "B. The sprint planning meeting is on October, at Monday, in 9 a.m.",
                "C. The sprint planning meeting is at October, in Monday, on 9 a.m.",
                "D. The sprint planning meeting is in October, in Monday, at 9 a.m."
              ],
              "answerIndex": 0,
              "explanation": "Kaidah preposisi waktu: 'in' untuk bulan/tahun ('in October'), 'on' untuk hari/tanggal ('on Monday'), dan 'at' untuk jam spesifik ('at 9 a.m.')."
            }
          ]
        }
      ]
    },
    {
      "slug": "menulis-paragraf",
      "title": "Menulis Paragraf",
      "description": "Membangun paragraf yang fokus, logis, dan mudah dipindai di layar monitor maupun ponsel.",
      "topics": [
        "Struktur paragraf: topic sentence, supporting sentences, concluding sentence",
        "Transisi antar kalimat: furthermore, however, therefore, in addition",
        "Panjang paragraf yang ideal untuk e-mail dan dokumen kerja",
        "Paragraf satu ide: membuang kalimat yang melenceng",
        "Pola paragraf: chronological, problem-solution, cause-effect",
        "Paragraf pembuka & penutup yang kuat",
        "White space: keterbacaan di layar HP dan monitor"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "beng-5-m1",
          "title": "Struktur dan Kohesi: Topic Sentence, Supporting Sentences, dan Transisi",
          "body": "# Paragraf Bukan Sekadar Tumpukan Kalimat\n\nDalam penulisan bisnis profesional, sebuah paragraf adalah unit pemikiran terkecil yang mengusung **satu gagasan pokok tunggal (*paragraph unity*)**. Di era komunikasi digital yang serbacepat, pembaca tidak membaca setiap kata dari awal sampai akhir—mereka memindai (*skimming*) untuk menemukan informasi penting. Jika sebuah paragraf memuat tiga topik berbeda sekaligus atau berpindah arah tanpa kata transisi, pembaca akan melewatkan pesan kuncimu.\n\n## Anatomi Tiga Bagian Paragraf Profesional\n\nSebuah paragraf bisnis yang terstruktur dengan baik terdiri atas tiga komponen hierarkis:\n\n```text\n1. TOPIC SENTENCE (Kalimat Topik Utama)\n   -> Diletakkan di kalimat pertama. Menyatakan gagasan sentral paragraf secara tegas.\n   Contoh: \"Our engineering department completed two major database migrations during Q2.\"\n\n2. SUPPORTING SENTENCES (Kalimat-Kalimat Pendukung)\n   -> 2 hingga 4 kalimat yang menyajikan bukti, data kuantitatif, analisis, atau contoh konkret.\n   Contoh: \"First, we migrated the user authentication records to the new cluster. Additionally,\n            we enabled automated failover, cutting failover latency by 80%.\"\n\n3. CONCLUDING / TRANSITIONAL SENTENCE (Kalimat Penutup / Transisi)\n   -> Menyimpulkan dampak gagasan atau mengarahkan pembaca ke tindakan / paragraf selanjutnya.\n   Contoh: \"These architectural upgrades ensure that our platform can sustain peak holiday traffic.\"\n```\n\n## Transisi Antarkalimat: Menghubungkan Pikiran secara Mulus\n\nKata transisi (*transitional words*) bertindak sebagai jembatan logis yang memberi tahu pembaca bagaimana kalimat kedua berkaitan dengan kalimat pertama:\n\n| Kategori Transisi | Kata Transisi Baku | Fungsi Hubungan Logis | Contoh Pemakaian |\n| --- | --- | --- | --- |\n| **Kontras / Sanggahan** | `However,` / `Nevertheless,` / `On the other hand,` | Menunjukkan kendala atau pergeseran arah | `The server crashed; however, the failover mechanism activated immediately.` |\n| **Penambahan / Penguatan** | `Furthermore,` / `In addition,` / `Moreover,` | Menambahkan bukti atau penguatan data | `The patch resolved the bug. Furthermore, it lowered memory usage.` |\n| **Sebab-Akibat / Kesimpulan** | `Therefore,` / `Consequently,` / `As a result,` | Menyajikan konsekuensi logis atau keputusan | `Latency dropped by 40%. Consequently, user retention increased.` |\n| **Ilustrasi / Bukti** | `For example,` / `Specifically,` / `For instance,` | Menyajikan contoh spesifik atau angka | `We observed several issues; specifically, query timeouts surged.` |\n\nAturan tanda baca: kata transisi di awal kalimat **selalu diikuti tanda koma** (`However, we decided...`).\n\n## Paragraph Unity: Memangkas Kalimat yang Melenceng\n\nPrinsip *unity* menuntut agar **setiap kalimat pendukung di dalam paragraf secara langsung mendukung kalimat topik utama**. Jika sebuah paragraf membahas migrasi database, menyisipkan kalimat tentang rencana liburan tim atau pembaruan desain antarmuka akan merusak fokus logis pembaca.\n\n```text\n❌ Paragraf Rusak Unity:\n\"We optimized our PostgreSQL database queries to handle Black Friday traffic. The team indexed three\ncritical tables, reducing query execution time by 50%. Our lead designer also created new landing page\nbanners. As a result, the checkout service processed over 10,000 orders per minute without latency.\"\n(Kalimat tentang desain banner TIDAK relevan dengan optimasi database PostgreSQL -> WAJIB DIHAPUS!)\n```\n\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Menyisipkan kalimat yang melenceng dari topic sentence.** Menyisipkan detail fasilitas kantor ke dalam paragraf optimasi database merusak paragraph unity.\n2. **Lupa memberi koma setelah kata transisi.** Menulis `However we decided...` tanpa koma setelah `However` adalah kesalahan tanda baca umum.\n3. **Membuat paragraf bertembok tebal.** Paragraf lebih dari 7 baris di layar monitor membuat pembaca cepat kehilangan fokus.\n\n## Kaitan ke Dunia Kerja\n\nDalam menyusun *Executive Summary* dan tiket RFC arsitektur, paragraf yang kohesif dan berorientasi pada satu ide memungkinkan para pimpinan teknik (*VP of Engineering*) menangkap kesimpulan teknis dalam waktu kurang dari 30 detik. Kerapian struktur paragraf mencerminkan kejernihan berpikir sang penulis."
        },
        {
          "kind": "materi",
          "id": "beng-5-m2",
          "title": "Pola Paragraf Bisnis, White Space, dan Pembuka-Penutup Efektif",
          "body": "# Pola Pengorganisasian dan Tipografi Layar Digital\n\nMenulis untuk pembaca modern berarti menulis untuk layar monitor dan ponsel pintar. Format teks yang padat tanpa ruang jeda visual (*wall of text*) membuat pembaca lelah dan cenderung mengabaikan isi pesan.\n\n## Panjang Paragraf yang Ideal untuk E-mail dan Dokumen Kerja\n\nDalam tulisan bisnis digital modern, panjang paragraf ideal berkisar antara **3 hingga 5 kalimat** (atau sekitar 40 hingga 75 kata). Paragraf yang lebih panjang dari 7 baris di layar monitor akan terlihat seperti tembok teks tebal di layar ponsel. Jika sebuah paragraf mulai membahas aspek kedua dari suatu masalah, segera pecah menjadi paragraf baru.\n\n## Tiga Pola Paragraf Utama dalam Dokumen Bisnis\n\nPilihlah pola pengorganisasian paragraf sesuai dengan tujuan komunikasimu:\n\n### 1. Pola Problem - Solution (Masalah -> Solusi)\n\nPola paling populer dalam e-mail laporan teknis dan proposal perbaikan:\n\n```text\n[Problem]   Our API response times increased by 300% following the recent product release.\n[Transition] To mitigate this latency bottleneck,\n[Solution]  our infrastructure team provisioned an in-memory Redis caching layer.\n[Outcome]   This architectural adjustment restored average latency to under 50 milliseconds.\n```\n\n### 2. Pola Cause - Effect (Sebab -> Akibat Terukur)\n\nDigunakan saat melaporkan dampak perubahan konfigurasi atau analisis pascainsiden:\n\n```text\n[Cause]   We refactored our database indexing and eliminated unindexed table scans.\n[Effect]  Consequently, CPU utilization on the primary cluster decreased from 85% to 35%.\n```\n\n### 3. Pola Chronological (Kronologi Linimasa)\n\nDigunakan dalam investigasi insiden dan linimasa peluncuran produk: diawali penanda waktu (`At 02:00 UTC`, `Next`, `Finally`).\n\n## Paragraf Pembuka & Penutup yang Kuat (BLUF Approach)\n\nMetode **BLUF (Bottom Line Up Front)** menempatkan kesimpulan atau inti permintaan di kalimat pertama paragraf pembuka. Jangan menyembunyikan maksud e-mail di balik tiga paragraf basa-basi sopan santun. Paragraf penutup wajib memberikan kejelasan langkah selanjutnya (*Next Steps / Call to Action*) disertai penanggung jawab dan tanggal tenggat.\n\n## White Space dan Keterbacaan di Layar Monitor dan Ponsel\n\nManfaatkan ruang kosong (*white space*) dan butir daftar (*bullet points*) untuk memecah informasi kompleks:\n\n```text\n| Format Tembok Teks (Hindari ❌) | Format White Space & Bullet Points (Gunakan ✅) |\n| --- | --- |\n| Teks mengalir 15 baris tanpa spasi memuat tanggal, biaya, dan nama penanggung jawab yang tercampur aduk di tengah kalimat. | Paragraf pembuka 2 kalimat -> Butir daftar 3 poin -> Paragraf penutup 1 kalimat. |\n```\n\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Menunda inti pesan di akhir e-mail.** Menaruh permohonan penting di paragraf ketiga setelah dua paragraf basa-basi memperlambat respons pembaca.\n2. **Menulis daftar panjang dalam satu kalimat mengalir tanpa bullet points.** Membaca 5 rincian tugas dalam satu baris sangat melelahkan di layar ponsel.\n3. **Mengakhiri paragraf laporan dengan kalimat mengambang tanpa arahan tindak lanjut.** Selalu tegaskan langkah selanjutnya atau standar kepatuhan yang tercapai.\n\n## Kaitan ke Dunia Kerja\n\nE-mail eksekutif yang menerapkan prinsip BLUF, paragraf ringkas 3–5 kalimat, dan penataan white space yang bersih mendapatkan tingkat balasan (*response rate*) hingga dua kali lebih cepat dibandingkan e-mail bertembok teks padat."
        },
        {
          "kind": "step",
          "id": "beng-5-1",
          "title": "Menyusun Topic Sentence yang Fokus",
          "explanation": "Sebuah *topic sentence* yang efektif harus menyatakan gagasan pokok paragraf secara tegas dan spesifik sejak kalimat pertama. Kalimat topik yang terlalu umum seperti `We worked on the system yesterday` tidak memberi gambaran apa pun kepada pembaca tentang arah paragraf selanjutnya. Pola kalimat topik bisnis yang kuat diawali dengan subjek tim yang jelas, menyebutkan pencapaian kunci secara terukur (seperti menyelesaikan tiga pembaruan keamanan penting), dan menyebutkan periode waktu relevan (`this quarter` atau `this sprint`). Kalimat topik yang tajam memandu ekspektasi pembaca terhadap kalimat-kalimat pendukung berikutnya.",
          "example": {
            "code": "❌ Our team did some work on the backend servers recently.\n✅ Our infrastructure team completed three critical security updates this quarter.",
            "output": "Sebelum : pernyataan samar tanpa rincian pencapaian dan batas waktu.\nSesudah : menyatakan subjek spesifik, 3 pembaruan keamanan kritis, dan periode kuartal.",
            "note": "Letakkan topic sentence selalu di kalimat paling awal paragraf bisnis."
          },
          "instruction": "Skenario: kamu menulis kalimat pembuka paragraf pembaruan status infrastruktur untuk laporan bulanan. Draf di editor terlalu samar. Tulis ulang menjadi SATU topic sentence yang fokus dan terukur. Unsur wajib: (1) subjek tim departemen secara spesifik, (2) kata kerja aksi penyelesaian di masa lampau, (3) objek pencapaian tiga pembaruan keamanan kritis, dan (4) keterangan periode waktu kuartal berjalan. Jangan gunakan kata-kata samar.",
          "starterCode": "We did some server updates recently.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(infrastructure|infra|engineering|security|platform|devops|dev\\s*ops|operations|ops|network|networking|database|backend|back-end|frontend|front-end|it|systems|system|sre|technical|tech|cloud|data|qa|product|development|release|application|server)\\s+(?:[\\w-]+\\s+)?(teams?|departments?|groups?|squads?|units?|divisions?|engineers|staff)\\b",
              "flags": "i",
              "message": "Subjeknya belum menyebut tim departemen secara spesifik. Sebutkan bidang timnya (misalnya tim infrastruktur/keamanan), bukan sekadar `we`."
            },
            {
              "pattern": "\\b(completed|finished|delivered|implemented|deployed|shipped|rolled\\s+out|installed|applied|performed|executed|carried\\s+out|released|patched)\\b",
              "flags": "i",
              "message": "Kata kerjanya belum menyatakan aksi penyelesaian di masa lampau. Pakai bentuk lampau yang menandai pekerjaan sudah tuntas."
            },
            {
              "pattern": "\\b(three|3)\\s+(?:[\\w-]+\\s+){0,2}security\\s+(updates?|patches|fixes|upgrades|releases|hardenings?)\\b",
              "flags": "i",
              "message": "Objeknya belum terukur. Sebutkan jumlahnya (tiga) dan bahwa yang diselesaikan adalah pembaruan keamanan."
            },
            {
              "pattern": "\\b(this|the\\s+current|the\\s+present|the\\s+ongoing)\\s+(quarter|fiscal\\s+quarter|reporting\\s+quarter)\\b",
              "flags": "i",
              "message": "Periode waktunya belum jelas. Tambahkan keterangan kuartal berjalan supaya pembaca tahu kapan pekerjaan itu selesai."
            },
            {
              "pattern": "\\b(recently|did\\s+some|some\\s+stuff|a\\s+few|various\\s+things|several\\s+things|lately)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Masih ada kata samar. Topic sentence harus memakai angka dan periode yang konkret, bukan keterangan kabur."
            }
          ],
          "solution": "Our infrastructure team completed three critical security updates this quarter.",
          "susunKode": {
            "question": "Susun topic sentence yang kuat dan fokus ini untuk laporan status kuartalan.",
            "potongan": [
              "Our infrastructure team",
              "completed three critical security updates",
              "this quarter."
            ],
            "pengecoh": [
              "We did some updates",
              "recently without details."
            ],
            "pemisah": " ",
            "explanation": "'Our infrastructure team completed three critical security updates this quarter.' menyajikan gagasan pokok yang terukur dan profesional. Pengecoh 'We did some updates' sering menggoda karena singkat, namun merupakan jebakan kalimat samar yang tidak layak menjadi topic sentence dalam laporan formal."
          }
        },
        {
          "kind": "step",
          "id": "beng-5-2",
          "title": "Menyisipkan Transisi Kontras yang Tepat",
          "explanation": "Kata transisi kontras seperti `However,` atau `Nevertheless,` bertugas menghubungkan dua kondisi yang bertolak belakang secara logis, misalnya antara munculnya masalah tak terduga dan aktivasi mekanisme penanganan otomatis. Ketika menghubungkan dua klausa independen dalam satu kalimat majemuk, polanya adalah: klausa pertama, titik koma (`;`), kata transisi `however`, tanda koma (`,`), lalu klausa kedua. Tanpa kata transisi yang tepat, perpindahan arah narasi dari masalah ke pemulihan terasa kaku dan membingungkan. Transisi yang halus memandu pembaca memahami daya tahan sistem saat menghadapi gangguan.",
          "example": {
            "code": "❌ The primary database node failed. The automated replica took over immediately.\n✅ The primary database node failed; however, the automated replica took over immediately.",
            "output": "Sebelum : dua kalimat terpisah tanpa penanda kontras eksplisit.\nSesudah : '; however,' menghubungkan kegagalan dengan keberhasilan mekanisme cadangan.",
            "note": "Gunakan titik koma sebelum however dan koma setelah however di antara dua klausa utuh."
          },
          "instruction": "Skenario: kamu mendokumentasikan ketahanan kluster database pada laporan pascainsiden. Dua klausa di editor terputus tanpa kata transisi kontras. Sisipkan titik koma, kata transisi kontras, dan tanda koma tepat di antara klausa kegagalan node utama dan klausa keberhasilan replika cadangan mengambil alih sistem. Pertahankan sisa kata lainnya.",
          "starterCode": "The primary database node failed the automated replica took over immediately.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bfailed\\s*;",
              "flags": "i",
              "message": "Klausa pertama belum ditutup titik koma. Dua klausa lengkap yang setara disambung dengan `;`, bukan dibiarkan menempel."
            },
            {
              "pattern": ";\\s*(however|nevertheless|nonetheless|conversely|in\\s+contrast|by\\s+contrast|on\\s+the\\s+other\\s+hand|even\\s+so|still|yet|instead|regardless|notwithstanding)\\b",
              "flags": "i",
              "message": "Setelah titik koma belum ada kata transisi kontras. Sisipkan penanda pertentangan agar hubungan kedua klausa terbaca."
            },
            {
              "pattern": "\\b(however|nevertheless|nonetheless|conversely|contrast|other\\s+hand|even\\s+so|still|yet|instead|regardless|notwithstanding)\\s*,\\s*the\\b",
              "flags": "i",
              "message": "Kata transisi harus diikuti koma sebelum klausa kedua."
            },
            {
              "pattern": "\\bfailed\\s*,\\s*(however|nevertheless|nonetheless|conversely|instead|still|yet|therefore)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Koma saja tidak cukup kuat untuk menyambung dua klausa lengkap — itu comma splice. Pakai titik koma sebelum kata transisi."
            }
          ],
          "solution": "The primary database node failed; however, the automated replica took over immediately.",
          "susunKode": {
            "question": "Susun kalimat ini dengan transisi kontras yang benar menggunakan titik koma dan koma.",
            "potongan": [
              "The primary database node failed;",
              "however, the automated replica",
              "took over immediately."
            ],
            "pengecoh": [
              "The primary database node failed,",
              "The primary database node failed without"
            ],
            "pemisah": " ",
            "explanation": "Pola penghubung conjunctive adverb yang benar adalah '; however,'. Pengecoh berkoma sering menggoda penutur karena memicu kesalahan koma sambung (comma splice). Pengecoh tanpa tanda baca adalah jebakan keliru yang sering terjadi saat mengetik cepat."
          }
        },
        {
          "kind": "step",
          "id": "beng-5-3",
          "title": "Memangkas Kalimat yang Melenceng untuk Menjaga Paragraph Unity",
          "explanation": "Prinsip *paragraph unity* menuntut agar setiap kalimat di dalam paragraf secara mutlak mendukung topik utama yang sama. Menyisipkan informasi yang tidak berhubungan—seperti menyelipkan kalimat tentang renovasi kantor di tengah paragraf optimasi database—merusak konsentrasi pembaca dan menurunkan nilai profesional tulisan. Saat menyunting paragraf, lakukan uji relevansi: apakah setiap kalimat memberikan bukti, data, atau penjabaran langsung terhadap kalimat topik? Jika tidak relevan, kalimat tersebut wajib dipangkas tanpa kompromi.",
          "example": {
            "code": "❌ We optimized our query caching layer. The office cafeteria introduced new lunch menus. Query latency dropped by 40%.\n✅ We optimized our query caching layer. Query latency dropped by 40%.",
            "output": "Sebelum : kalimat tentang menu kafetaria menyusup di tengah paragraf optimasi cache.\nSesudah : kalimat yang melenceng dihapus sehingga paragraf fokus 100% pada satu topik.",
            "note": "Hapus setiap kalimat yang tidak memiliki kaitan logis langsung dengan topic sentence."
          },
          "instruction": "Skenario: kamu meninjau draf paragraf teknis tentang optimasi query database. Di dalam draf terdapat kalimat asing yang melenceng dari topik utama optimasi sistem. Hapus kalimat asing tersebut secara bersih sehingga paragraf hanya memuat dua kalimat yang fokus pada pengindeksan tabel dan penurunan latensi eksekusi query. Pertahankan kedua kalimat teknis tersebut.",
          "starterCode": "We indexed three high-traffic tables in the database. Our team also ordered new office chairs yesterday. Query execution time decreased by 50%.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bindex(ed|ing)?\\b[^.!?]*\\btables?\\b",
              "flags": "i",
              "message": "Kalimat tentang pengindeksan tabel ikut terhapus. Yang dibuang hanya kalimat yang melenceng dari topik."
            },
            {
              "pattern": "\\bquery\\s+execution\\s+times?\\b[^.!?]*\\b(decreased|dropped|fell|declined|reduced|improved|went\\s+down)\\b[^.!?]*\\b50\\s*(%|percent\\b)",
              "flags": "i",
              "message": "Kalimat hasil penurunan latensi eksekusi query beserta angkanya harus tetap ada."
            },
            {
              "pattern": "^[^.!?]*[.!?]\\s*[^.!?]*[.!?]\\s*$",
              "flags": "i",
              "message": "Paragrafnya harus tersisa tepat dua kalimat yang saling terkait — tidak lebih, tidak kurang."
            },
            {
              "pattern": "\\b(office\\s+chairs?|furniture|new\\s+desks?)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kalimat yang melenceng dari topik optimasi sistem masih ada. Paragraph unity menuntut semua kalimat mendukung satu topik."
            }
          ],
          "solution": "We indexed three high-traffic tables in the database. Query execution time decreased by 50%.",
          "susunKode": {
            "question": "Susun paragraf yang padu ini dengan membuang kalimat yang melenceng dari topik.",
            "potongan": [
              "We indexed three high-traffic tables in the database.",
              "Query execution time",
              "decreased by 50%."
            ],
            "pengecoh": [
              "Our team also ordered new office chairs yesterday.",
              "decreased by 50% on office chairs."
            ],
            "pemisah": " ",
            "explanation": "Paragraf yang padu hanya menyandingkan tindakan pengindeksan tabel dan hasil penurunan waktu eksekusi query. Pengecoh tentang 'new office chairs' adalah distraktor yang melanggar prinsip paragraph unity dan merupakan jebakan keliru yang sering menggoda saat merangkum rapat."
          }
        },
        {
          "kind": "step",
          "id": "beng-5-4",
          "title": "Tugas Mengarang: Menyusun Paragraf Pola Problem-Solution untuk E-mail Klien",
          "explanation": "Pola paragraf *Problem-Solution* adalah struktur paling efektif saat mengomunikasikan kendala teknis kepada klien secara transparan dan solutif. Paragraf ini dibuka dengan kalimat yang mendefinisikan masalah secara jujur tanpa kepanikan (`We encountered a temporary database latency issue this morning.`). Kalimat kedua langsung menyajikan solusi tindakan nyata yang telah atau sedang diambil dengan transisi tegas (`To resolve this bottleneck, our team deployed an in-memory caching layer.`). Struktur dua kalimat berpasangan ini membuktikan akuntabilitas dan kecepatan respons tim teknis.",
          "example": {
            "code": "❌ The server is very slow and we are trying our best.\n✅ We identified a database latency bottleneck this morning. To resolve this issue, our engineering team provisioned a dedicated Redis cache.",
            "output": "Sebelum : keluhan pasif tanpa rincian masalah dan solusi konkret.\nSesudah : kalimat 1 mendefinisikan problem; kalimat 2 menyajikan solusi terukur.",
            "note": "Awali kalimat solusi dengan frasa tujuan: 'To resolve this [problem], our team [action]'."
          },
          "instruction": "Skenario: kamu mengirimkan e-mail penjelasan kendala performa kepada manajer klien. Tulis SATU paragraf pendek yang terdiri atas DUA kalimat berurutan dengan pola Problem-Solution. Kalimat 1 (Problem): sebutkan bahwa tim mendeteksi kendala lonjakan latensi server pada pagi ini. Kalimat 2 (Solution): awali dengan frasa penanda tujuan penyelesaian masalah, diikuti subjek tim teknik, kata kerja implementasi, dan objek penyediaan lapisan caching terdedikasi.",
          "starterCode": "# Tulis dua kalimat berpola Problem-Solution di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(detected|identified|observed|discovered|encountered|noticed|found|flagged|spotted|traced)\\b[^.!?]*\\blatenc(y|ies)\\b",
              "flags": "i",
              "message": "Kalimat pertama belum menyatakan masalah yang terdeteksi. Sebutkan kata kerja pendeteksian dan kendala latensinya."
            },
            {
              "pattern": "\\bthis\\s+morning\\b",
              "flags": "i",
              "message": "Waktu kejadian belum disebut. Klien perlu tahu kapan kendala itu muncul."
            },
            {
              "pattern": "[.!?]\\s*(?:in\\s+order\\s+)?to\\s+(resolve|address|fix|mitigate|remedy|solve|correct|eliminate|restore|prevent)\\b",
              "flags": "i",
              "message": "Kalimat kedua belum diawali frasa penanda tujuan penyelesaian. Awali dengan frasa `to` + kata kerja penyelesaian."
            },
            {
              "pattern": "\\bteams?\\s+(?:has\\s+|have\\s+|had\\s+)?(deployed|implemented|provisioned|introduced|added|rolled\\s+out|set\\s+up|installed|configured|built|launched|enabled)\\b[^.!?]*\\bcach(e|es|ing)\\b",
              "flags": "i",
              "message": "Solusinya belum lengkap: sebutkan tim teknik sebagai pelaku, kata kerja implementasi, dan lapisan caching yang disediakan."
            },
            {
              "pattern": "^[^.!?]*[.!?]\\s*[^.!?]*[.!?]\\s*$",
              "flags": "i",
              "message": "Paragrafnya harus terdiri atas tepat dua kalimat: satu masalah, satu solusi."
            },
            {
              "pattern": "\\b(trying\\s+our\\s+best|very\\s+slow|super\\s+slow|really\\s+sorry|kind\\s+of\\s+broken)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Bahasa emosional atau kabur seperti ini tidak memberi informasi teknis kepada klien."
            }
          ],
          "solution": "We identified a server latency issue this morning. To resolve this issue, our engineering team deployed a dedicated caching layer.",
          "susunKode": {
            "question": "Susun dua kalimat berpola Problem-Solution yang kohesif ini.",
            "potongan": [
              "We identified a server latency issue this morning.",
              "To resolve this issue, our engineering team",
              "deployed a dedicated caching layer."
            ],
            "pengecoh": [
              "The server is very slow this morning.",
              "We are trying our best to resolve."
            ],
            "pemisah": " ",
            "explanation": "Paragraf Problem-Solution yang baik menyandingkan pernyataan masalah objektif dengan tindakan mitigasi nyata ('deployed a dedicated caching layer'). Pengecoh 'The server is very slow' sering menggoda karena bahasa percakapan sehari-hari, namun merupakan jebakan keliru yang tidak mencerminkan standar komunikasi teknis profesional."
          }
        },
        {
          "kind": "step",
          "id": "beng-5-5",
          "title": "Menyusun Concluding Sentence yang Memberi Arahan Tindak Lanjut",
          "explanation": "Kalimat penutup paragraf (*concluding sentence*) bertugas merangkum implikasi utama dari paragraf tersebut atau menetapkan langkah tindak lanjut yang jelas (*actionable next step*). Menutup paragraf dengan kalimat mengambang seperti `That is all about the update` membuat pesan terasa tidak bertenaga. Kalimat penutup bisnis yang profesional diawali dengan frasa penegas hasil (`These enhancements ensure` atau `This milestone guarantees`), diikuti dampak kepatuhan atau kesiapan operasional (`that our system complies with SOC 2 standards` atau `that our platform is ready for launch`). Penutup yang kuat memberikan rasa kepastian dan arah yang jelas bagi pembaca.",
          "example": {
            "code": "❌ That is our summary of the database work for today.\n✅ These optimizations ensure that our application meets all SOC 2 compliance standards.",
            "output": "Sebelum : penutup mengambang yang hanya mengulang bahwa teks sudah selesai.\nSesudah : menegaskan dampak kepatuhan standar industri yang tercapai.",
            "note": "Pastikan kalimat penutup menegaskan nilai bisnis atau langkah tindak lanjut yang konkret."
          },
          "instruction": "Skenario: kamu menulis kalimat penutup paragraf laporan kepatuhan keamanan data. Draf di editor terlalu pasif. Tulis ulang menjadi SATU kalimat penutup yang menegaskan peningkatan sistem: gunakan subjek penegas peningkatan teknis, kata kerja kepatuhan sistem, dan objek standar keamanan SOC 2. Pastikan diakhiri tanda titik.",
          "starterCode": "That is all about our security update.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(these|those|the|our)\\s+(?:[\\w-]+\\s+){0,2}(enhancements|improvements|optimizations|optimisations|updates|upgrades|changes|measures|fixes|safeguards|controls|hardening)\\b",
              "flags": "i",
              "message": "Subjeknya belum menegaskan peningkatan teknis yang sudah dilakukan."
            },
            {
              "pattern": "\\b((complies|comply|complied)\\s+with|compliant\\s+with|meets?|satisfies|satisfy|adheres?\\s+to|conforms?\\s+to|align(s|ed)?\\s+with|in\\s+line\\s+with)\\b",
              "flags": "i",
              "message": "Belum ada kata kerja kepatuhan yang menghubungkan sistem dengan standar."
            },
            {
              "pattern": "\\bSOC\\s*-?\\s*2\\b(?:[^.!?]*\\b(security|compliance|audit)?\\s*(standards?|requirements?|controls?|criteria)\\b)?",
              "flags": "i",
              "message": "Standar acuannya belum disebut. Tuliskan standar keamanan SOC 2 sebagai objeknya."
            },
            {
              "pattern": "\\.\\s*$",
              "flags": "i",
              "message": "Kalimat penutup harus diakhiri tanda titik."
            },
            {
              "pattern": "\\b(that\\s+is\\s+all|that'?s\\s+all|thank\\s+you\\s+for\\s+reading|nothing\\s+else\\s+to\\s+add)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Frasa penutup pasif seperti ini tidak menegaskan dampak apa pun. Tutup dengan pernyataan kepatuhan sistem."
            },
            {
              "pattern": "\\b(with\\s+comply|system\\s+comply\\b|complies?\\s+with\\s+comply)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Subjek tunggal (our system) memerlukan bentuk 'complies with', bukan 'comply with'."
            }
          ],
          "solution": "These enhancements ensure that our system complies with SOC 2 security standards.",
          "susunKode": {
            "question": "Susun kalimat penutup paragraf ini dengan penegasan kepatuhan standar yang kuat.",
            "potongan": [
              "These enhancements ensure that",
              "our system complies with",
              "SOC 2 security standards."
            ],
            "pengecoh": [
              "That is all about",
              "comply with SOC 2 standards."
            ],
            "pemisah": " ",
            "explanation": "'These enhancements ensure that our system complies with SOC 2 security standards.' adalah bentuk penutup laporan bisnis yang formal dan bertenaga. Pengecoh 'That is all about' sering menggoda karena kebiasaan percakapan santai, namun merupakan jebakan yang tidak profesional. Pengecoh 'comply with' adalah bentuk keliru yang melanggar subject-verb agreement."
          }
        },
        {
          "kind": "step",
          "id": "beng-5-6",
          "title": "Menata White Space dan Format Bullet Points dari Teks Padat",
          "explanation": "Teks paragraf yang memuat deretan butir rincian panjang dalam satu baris kalimat yang padat sangat sulit dipindai dengan cepat di layar ponsel. Mengonversi kalimat daftar yang bertumpuk menjadi format daftar berbutir (*bullet points*) dengan indentasi bersih menciptakan ruang jeda visual (*white space*) yang meningkatkan pemahaman pembaca hingga dua kali lipat. Kaidah format daftar: awali dengan klausa pengantar utuh yang diakhiri tanda titik dua (`:`), lalu sajikan setiap butir dengan struktur awal kata yang sejajar (*parallel structure*). Kerapian tipografi ini mempermudah pembaca eksekutif mengevaluasi deliverable proyek.",
          "example": {
            "code": "❌ We completed three deliverables: we patched the database and we updated the docs and we ran tests.\n✅ We completed three deliverables:\n- Patched the primary database\n- Updated technical documentation\n- Executed automated tests",
            "output": "Sebelum : kalimat daftar bertumpuk tanpa jeda visual.\nSesudah : klausa pengantar ber-titik dua diikuti tiga butir aksi sejajar.",
            "note": "Gunakan bullet points untuk daftar 3 item atau lebih agar mudah dipindai."
          },
          "instruction": "Skenario: kamu merapikan draf pembaruan rilis agar mudah dibaca di ponsel pintar. Ubah kalimat daftar yang padat di editor menjadi format daftar berbutir (bullet points): baris pertama berupa klausa pengantar dengan titik dua yang menyatakan penyelesaian tiga deliverable utama, diikuti tiga baris butir terpisah yang memuat perbaikan database, pembaruan dokumentasi API, dan eksekusi tes integrasi. Gunakan baris baru untuk setiap butir.",
          "starterCode": "We completed three core deliverables: we patched the database and we updated API documentation and we executed integration tests.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(three|3)\\s+[^\\n:]*:[ \\t]*\\r?\\n",
              "flags": "i",
              "message": "Baris pengantar belum benar. Tulis klausa pengantar yang menyebut tiga deliverable dan tutup dengan titik dua sebelum pindah baris."
            },
            {
              "pattern": "\\n[ \\t]*[-*•]\\s*[^\\n]*\\bdatabase\\b",
              "flags": "i",
              "message": "Butir perbaikan database belum ditulis sebagai baris bullet tersendiri."
            },
            {
              "pattern": "\\n[ \\t]*[-*•]\\s*[^\\n]*\\bAPI\\b[^\\n]*\\bdoc",
              "flags": "i",
              "message": "Butir pembaruan dokumentasi API belum ditulis sebagai baris bullet tersendiri."
            },
            {
              "pattern": "\\n[ \\t]*[-*•]\\s*[^\\n]*\\bintegration\\s+tests?\\b",
              "flags": "i",
              "message": "Butir eksekusi tes integrasi belum ditulis sebagai baris bullet tersendiri."
            },
            {
              "pattern": "(?:\\n[ \\t]*[-*•][^\\n]*){3}",
              "flags": "i",
              "message": "Harus ada tiga baris butir terpisah. Satu butir satu baris agar mudah dipindai di layar ponsel."
            },
            {
              "pattern": "\\band\\s+we\\s+\\w+",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kalimat masih menyambung dengan `and we ...`. Pecah menjadi butir-butir baris baru."
            },
            {
              "pattern": "\\b(Updating|Patching|Executing)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Gunakan bentuk kata kerja lampau yang sejajar (Updated, Patched, Executed) pada semua butir, bukan bentuk -ing."
            }
          ],
          "solution": "We completed three core deliverables:\n- Patched the database\n- Updated API documentation\n- Executed integration tests",
          "susunKode": {
            "question": "Susun teks ini menjadi format daftar berbutir yang rapi dengan white space.",
            "potongan": [
              "We completed three core deliverables:\n",
              "- Patched the database\n",
              "- Updated API documentation\n",
              "- Executed integration tests"
            ],
            "pengecoh": [
              "we patched the database and",
              "- Updating API documentation\n"
            ],
            "pemisah": "",
            "explanation": "Format bullet points diawali titik dua dan memuat butir-butir dengan struktur kata kerja sejajar (Patched, Updated, Executed). Pengecoh dengan kata sambung 'and' sering menggoda karena kebiasaan menulis cepat dalam satu paragraf padat. Pengecoh '- Updating' adalah jebakan keliru yang melanggar prinsip paralelisme bentuk kata kerja lampau."
          }
        },
        {
          "kind": "step",
          "id": "beng-5-7",
          "title": "Tugas Mengarang: Menyusun Paragraf Pembuka E-mail Pendekatan BLUF",
          "explanation": "Pendekatan **BLUF (Bottom Line Up Front)** menuntut agar tujuan utama penulisan e-mail dinyatakan secara eksplisit pada kalimat pertama. Dalam e-mail permohonan dukungan teknis, menunda inti masalah di balik tiga kalimat basa-basi sopan santun memperlambat penanganan teknis oleh tim on-call. Paragraf pembuka BLUF yang baik terdiri atas dua kalimat padat: kalimat pertama menyatakan permohonan bantuan spesifik (`I am writing to request urgent technical assistance regarding our payment webhook.`), dan kalimat kedua memberikan konteks kegagalan transaksi secara terukur (`Transaction verification requests have been failing since 08:00 UTC.`). Pola pembuka langsung ini mempercepat eskalasi tiket darurat.",
          "example": {
            "code": "❌ Hope you are having a wonderful week. I was wondering if you could help us with an issue.\n✅ I am requesting urgent assistance regarding our authentication gateway. User login requests have been timing out since 09:00 UTC.",
            "output": "Sebelum : basa-basi panjang yang menunda informasi urgensi sistem.\nSesudah : kalimat 1 menyatakan permohonan bantuan; kalimat 2 memberikan metrik kegagalan waktu.",
            "note": "Nyatakan sistem yang terdampak dan waktu mulai insiden sejak paragraf pertama."
          },
          "instruction": "Skenario: kamu mengirim e-mail permohonan bantuan teknis darurat kepada tim infrastruktur cloud. Tulis DUA kalimat pembuka berpola BLUF dalam satu paragraf tanpa basa-basi. Kalimat 1: nyatakan permohonan bantuan teknis mendesak terkait webhook pembayaran sistem. Kalimat 2: nyatakan bahwa panggilan verifikasi transaksi telah mengalami kegagalan sejak pukul 08:00 UTC.",
          "starterCode": "# Tulis dua kalimat paragraf pembuka BLUF di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(i|we|our\\s+[\\w-]+|the\\s+[\\w-]+)\\b[^.!?]*\\b(request|requests|requesting|require|requires|need|needs|ask|asking|seek|seeking|escalat\\w+)\\b",
              "flags": "i",
              "message": "Prinsip BLUF: permohonan bantuan harus berada di kalimat pertama, tanpa didahului basa-basi."
            },
            {
              "pattern": "\\b(urgent|urgently|immediate|immediately|emergency|critical|asap|as\\s+soon\\s+as\\s+possible|time-?sensitive|priority)\\b",
              "flags": "i",
              "message": "Tingkat kegentingannya belum dinyatakan. Pembaca perlu tahu ini mendesak."
            },
            {
              "pattern": "\\b(payment|billing|checkout|transaction)[\\w\\s-]{0,20}webhooks?\\b|\\bwebhooks?\\b[^.!?]{0,40}\\b(payments?|transactions?|billing)\\b",
              "flags": "i",
              "message": "Objek masalahnya belum spesifik. Sebutkan webhook pembayaran yang bermasalah."
            },
            {
              "pattern": "\\b(transaction|payment)\\s+verification\\b|\\bverification\\s+(requests?|calls?)\\b",
              "flags": "i",
              "message": "Kalimat kedua belum menyebut panggilan verifikasi transaksi sebagai bagian yang gagal."
            },
            {
              "pattern": "\\b(fail\\w*|error\\w*|tim(e|ed|ing)\\s*-?\\s*out|timeouts?|timing\\s+out|rejected|unavailable|broken|down)\\b[^.!?]*\\bsince\\b[^.!?]*\\b0?8[:.]?00\\s*(hrs\\s*)?(UTC|GMT)\\b",
              "flags": "i",
              "message": "Belum jelas sejak kapan kegagalan berlangsung. Sebutkan kegagalannya dan waktu mulainya pukul 08:00 UTC."
            },
            {
              "pattern": "^[^.!?]*[.!?]\\s*[^.!?]*[.!?]\\s*$",
              "flags": "i",
              "message": "Paragraf pembukanya harus tepat dua kalimat."
            },
            {
              "pattern": "\\b(hope\\s+you\\s+are\\s+well|hope\\s+this\\s+(email\\s+)?finds\\s+you|wonderful\\s+week|how\\s+are\\s+you|hope\\s+all\\s+is\\s+well|just\\s+checking\\s+in)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Basa-basi pembuka menunda inti pesan. BLUF menuntut permintaan muncul lebih dulu."
            }
          ],
          "solution": "I am requesting urgent technical support regarding our payment webhook. Transaction verification requests have been failing since 08:00 UTC.",
          "susunKode": {
            "question": "Susun paragraf pembuka BLUF ini untuk permohonan dukungan teknis mendesak.",
            "potongan": [
              "I am requesting urgent technical support regarding our payment webhook.",
              "Transaction verification requests have been failing",
              "since 08:00 UTC."
            ],
            "pengecoh": [
              "Hope you are having a great day today.",
              "since a few hours ago."
            ],
            "pemisah": " ",
            "explanation": "Prinsip BLUF menaruh permohonan bantuan spesifik dan waktu kejadian presisi ('since 08:00 UTC') langsung di paragraf awal. Pengecoh basa-basi 'Hope you are having a great day' sering menggoda namun membuang waktu dalam situasi darurat teknis. Pengecoh 'a few hours ago' adalah jebakan keliru yang terlalu samar dibandingkan penanda waktu standar UTC."
          }
        },
        {
          "kind": "step",
          "id": "beng-5-8",
          "title": "Tugas Mengarang: Menyusun Paragraf Pola Cause-Effect tentang Dampak Optimasi",
          "explanation": "Pola paragraf *Cause-Effect* menghubungkan tindakan teknis yang dilakukan dengan hasil kuantitatif yang dicapai secara berurutan. Kalimat pertama menyajikan tindakan penyebab (*Cause*), misalnya pengindeksan ulang database (`Our team refactored the database queries and indexed three primary tables.`). Kalimat kedua menyajikan dampak akibat (*Effect*) yang diawali kata transisi sebab-akibat seperti `Consequently,` atau `As a result,` dan memuat angka penurunan latensi 60% (`Consequently, average response times decreased by 60%.`). Struktur sebab-akibat yang didukung data statistik konkret adalah standar baku pelaporan kinerja rekayasa teknologi.",
          "example": {
            "code": "❌ We changed the code and the server became faster.\n✅ Our team refactored the primary search query. Consequently, database execution time decreased by 60%.",
            "output": "Sebelum : pernyataan umum tanpa istilah teknis dan tanpa angka pencapaian.\nSesudah : kalimat 1 memuat aksi refactoring; kalimat 2 memuat transisi 'Consequently' dan angka 60%.",
            "note": "Gunakan kata transisi 'Consequently,' atau 'As a result,' sebelum menyebutkan data hasil."
          },
          "instruction": "Skenario: kamu mendokumentasikan hasil optimasi query database pada ringkasan sprint. Tulis DUA kalimat berurutan berpola Cause-Effect dalam satu paragraf. Kalimat 1 (Cause): sebutkan bahwa tim rekayasa merefaktor query database. Kalimat 2 (Effect): awali dengan kata transisi sebab-akibat baku, ikuti subjek metrik waktu respons rata-rata, kata kerja penurunan, dan persentase penurunan performa sebesar 60 persen.",
          "starterCode": "# Tulis dua kalimat paragraf Cause-Effect dengan transisi dan persentase di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(teams?|groups?|engineers|departments?)\\b[^.!?]*\\b(refactored|rewrote|rewrite|optimized|optimised|rebuilt|restructured|tuned|reworked|streamlined)\\b[^.!?]*\\bquer(y|ies)\\b",
              "flags": "i",
              "message": "Kalimat sebab belum lengkap: sebutkan tim rekayasa sebagai pelaku dan pekerjaan refaktor pada query database."
            },
            {
              "pattern": "[.!?]\\s*(consequently|as\\s+a\\s+result|as\\s+a\\s+consequence|therefore|thus|hence|accordingly|because\\s+of\\s+this|for\\s+this\\s+reason)\\b",
              "flags": "i",
              "message": "Kalimat kedua belum diawali kata transisi sebab-akibat baku, jadi hubungan sebab dan dampaknya tidak terbaca."
            },
            {
              "pattern": "\\b(response\\s+times?|response\\s+latency|latency|execution\\s+times?)\\b[^.!?]*\\b(decreased|dropped|fell|declined|reduced|shrank|went\\s+down|improved)\\b",
              "flags": "i",
              "message": "Dampaknya belum diukur pada metrik waktu respons. Sebutkan metriknya dan kata kerja penurunan."
            },
            {
              "pattern": "\\bby\\s+60\\s*(%|percent\\b)",
              "flags": "i",
              "message": "Besaran penurunannya belum disebut. Tulis persentase penurunan 60 persen agar dampaknya terukur."
            },
            {
              "pattern": "^[^.!?]*[.!?]\\s*[^.!?]*[.!?]\\s*$",
              "flags": "i",
              "message": "Paragrafnya harus terdiri atas tepat dua kalimat: satu sebab, satu akibat."
            },
            {
              "pattern": "\\b(became\\s+faster|changed\\s+the\\s+code|much\\s+better|a\\s+lot\\s+faster|way\\s+quicker)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Ungkapan umum seperti ini tidak terukur. Pakai istilah teknis dan angka."
            }
          ],
          "solution": "Our engineering team refactored the database queries. Consequently, average response times decreased by 60%.",
          "susunKode": {
            "question": "Susun dua kalimat berpola Cause-Effect ini dengan kata transisi dan metrik terukur.",
            "potongan": [
              "Our engineering team refactored the database queries.",
              "Consequently, average response times",
              "decreased by 60%."
            ],
            "pengecoh": [
              "We changed the code recently.",
              "However, average response times"
            ],
            "pemisah": " ",
            "explanation": "Pola Cause-Effect menggabungkan tindakan teknis ('refactored the database queries') dengan konsekuensi logis yang terukur ('Consequently, ... decreased by 60%'). Pengecoh 'We changed the code recently' terlalu umum. Pengecoh 'However' keliru karena 'however' menandai kontras, bukan hubungan sebab-akibat."
          }
        },
        {
          "kind": "quiz",
          "id": "beng-5-k1",
          "title": "Kuis: Struktur Paragraf, Transisi Logis, dan Format Keterbacaan",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Kamu sedang mengevaluasi draf pembaruan sprint mingguan. Manakah dari kalimat pembuka berikut yang memenuhi syarat sebagai TOPIC SENTENCE yang efektif?",
              "choices": [
                "A. Our infrastructure engineering team completed three critical security updates this quarter.",
                "B. Computers and networks are very important for modern companies nowadays.",
                "C. In this paragraph, I will talk about some updates that were done recently.",
                "D. We worked on various different tasks during the last few working days."
              ],
              "answerIndex": 0,
              "explanation": "Topic sentence yang baik memiliki topik yang jelas ('three critical security updates') dan sudut pandang pembatas/controlling idea yang terukur ('completed this quarter'). Pilihan B terlalu umum, C bertele-tele, dan D tidak memiliki rincian jelas."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Kamu sedang meninjau draf arsitektur sistem berikut: 'The primary database node failed; [transisi], the automated replica took over immediately.' Kata transisi kontras manakah yang paling tepat?",
              "choices": [
                "A. consequently (menyatakan konsekuensi sebab-akibat langsung)",
                "B. however (menyatakan pertentangan kontras positif terhadap kegagalan)",
                "C. furthermore (menambahkan informasi yang searah)",
                "D. for instance (memberikan contoh ilustrasi)"
              ],
              "answerIndex": 1,
              "explanation": "Klausa kedua menyatakan hal yang berlawanan dari dugaan (server mati, TETAPI replika otomatis langsung mengambil alih). Transisi kontras seperti 'however' atau 'nevertheless' tepat untuk menjembatani ide tersebut."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu bertindak sebagai koordinator komunikasi internal. Sebuah paragraf membahas optimasi kueri database yang menurunkan latensi 50%. Tiba-tiba terdapat kalimat: 'We also ordered new ergonomic office chairs for the developer room.' Tindakan apa yang harus diambil demi menjaga paragraph unity?",
              "choices": [
                "A. Memindahkan kalimat kursi ergonomis ke awal paragraf sebagai pengantar santai.",
                "B. Mengganti kata 'chairs' dengan 'furniture' agar terdengar lebih umum.",
                "C. Menghapus kalimat tentang kursi ergonomis karena melenceng dari ide pokok optimasi teknis.",
                "D. Membiarkan kalimat tersebut karena masih berkaitan dengan ruangan pengembang."
              ],
              "answerIndex": 2,
              "explanation": "Paragraph unity menuntut setiap kalimat pendukung secara eksklusif menjelaskan dan memperkuat topic sentence. Informasi tentang pengadaan kursi kantor merusak fokus teknis dan harus dibuang ke bagian terpisah."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Sebagai manajer teknik, kamu rutin berkomunikasi dengan direktur eksekutif. Mengapa pendekatan BLUF (Bottom Line Up Front) sangat dianjurkan dalam paragraf pembuka e-mail kerja?",
              "choices": [
                "A. Memaksa pembaca membaca seluruh badan e-mail sampai tanda tangan penutup.",
                "B. Mengikuti konvensi sastra bahasa Inggris klasik.",
                "C. Menunjukkan kepada eksekutif bahwa penulis memiliki kosakata yang sangat banyak.",
                "D. Memastikan inti masalah dan permohonan tindakan langsung diketahui tanpa harus menggali tumpukan paragraf latar belakang."
              ],
              "answerIndex": 3,
              "explanation": "Pendekatan BLUF menempatkan inti pesan, keputusan, atau permohonan di kalimat pertama, menghemat waktu pembaca eksekutif yang sibuk dan mempercepat proses persetujuan."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyunting draf ringkasan performa sistem pada laporan kuartalan: 'Our engineering team refactored the database queries. [Transisi], average response times decreased by 60%.' Manakah kata transisi yang tepat?",
              "choices": [
                "A. Consequently (menyatakan hasil logis dari tindakan refactoring)",
                "B. However (menyatakan pertentangan)",
                "C. In contrast (menyatakan perbandingan berlawanan)",
                "D. Meanwhile (menyatakan peristiwa simultan yang terpisah)"
              ],
              "answerIndex": 0,
              "explanation": "Penurunan latensi sebesar 60% adalah akibat/hasil langsung dari refactoring query database. Transisi sebab-akibat seperti 'Consequently' atau 'As a result' adalah pilihan yang tepat."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyusun dokumentasi arsitektur REST API untuk pengembang eksternal. Kapan penggunaan format butir daftar (bullet points) lebih unggul dibandingkan satu paragraf teks panjang padat?",
              "choices": [
                "A. Hanya ketika dokumen akan dicetak di atas kertas fisik.",
                "B. Ketika menyajikan daftar item, prasyarat teknis, atau langkah-langkah yang butuh dipindai cepat dengan white space yang nyaman.",
                "C. Ketika penulis kehabisan ide untuk menyusun kalimat utuh.",
                "D. Setiap kali ada kalimat yang memuat lebih dari lima kata."
              ],
              "answerIndex": 1,
              "explanation": "Bullet points menciptakan white space yang memecah blok teks tebal, mempermudah pembaca teknis memindai (scanning) persyaratan, modul, atau hasil kerja dalam hitungan detik."
            }
          ]
        }
      ]
    },
    {
      "slug": "proses-menulis",
      "title": "Proses Menulis",
      "description": "Alur kerja menulis profesional: pra-tulis, kerangka, draf cepat, revisi mendalam, editing, dan proofreading.",
      "topics": [
        "Prewriting: menentukan audiens, tujuan, dan pesan inti (one-sentence takeaway)",
        "Outlining: dari ide acak ke kerangka terstruktur",
        "Drafting: menulis cepat tanpa mengedit di saat bersamaan",
        "Revising: struktur, kejelasan, dan pemangkasan kata bertele-tele",
        "Editing: tata bahasa, ejaan, tanda baca",
        "Proofreading: teknik membaca mundur dan checklist akhir",
        "Memberi dan menerima feedback tulisan"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "beng-6-m1",
          "title": "Tahap Pra-Tulis dan Draf: Audiens, One-Sentence Takeaway, dan Outlining",
          "body": "# Menulis Adalah Proses Bertahap, Bukan Sekali Jadi\n\nBanyak penulis pemula melakukan kesalahan fatal dengan mencoba memikirkan ide, menyusun struktur dokumen, memilih kosakata indah, dan mengoreksi tanda baca secara bersamaan di hadapan layar kosong. Pendekatan 'sekaligus' ini memicu hambatan menulis (*writer's block*) dan menghasilkan dokumen yang bertele-tele. Penulis profesional memisahkan proses penulisan ke dalam tahapan-tahapan yang terisolasi dan sistematis: **Prewriting -> Outlining -> Drafting -> Revising -> Editing -> Proofreading**.\n\n```text\nAlur Proses Penulisan Profesional:\n[ 1. PREWRITING ] -> Analisis audiens, tujuan bisnis, dan One-Sentence Takeaway.\n        |\n[ 2. OUTLINING  ] -> Menyusun kerangka hierarkis (poin utama & sub-poin data).\n        |\n[ 3. DRAFTING   ] -> Menulis cepat tanpa menyunting (menuangkan ide ke teks).\n        |\n[ 4. REVISING   ] -> Memeriksa struktur argumen, kejelasan, dan memangkas kata mubazir.\n        |\n[ 5. EDITING    ] -> Memperbaiki tata bahasa, variasi kalimat, dan konsistensi istilah.\n        |\n[ 6. PROOFREAD  ] -> Memeriksa ejaan, tanda baca, tipografi akhir, dan tautan dokumen.\n```\n\n## Prewriting: Menentukan Audiens, Tujuan, dan One-Sentence Takeaway\n\nSebelum menulis satu kata pun di editor, jawablah tiga pertanyaan penentu arah:\n\n1. **Who is the primary reader? (Siapa pembaca utama?)**: Apakah dokumen ini dibaca oleh rekan insinyur (membutuhkan detail teknis), manajer produk (membutuhkan linimasa fitur), atau direktur keuangan (membutuhkan efisiensi biaya)?\n2. **What is the goal? (Apa tujuan dokumen ini?)**: Apakah untuk menginformasikan status, meminta persetujuan anggaran, atau menjelaskan analisis kegagalan insiden?\n3. **What is the One-Sentence Takeaway? (Pesan inti satu kalimat)**: Rangkuman satu kalimat padat yang wajib diingat pembaca jika mereka hanya punya waktu 10 detik untuk membaca.\n\n```text\nContoh One-Sentence Takeaway:\n\"Migrating our database cluster to AWS will reduce annual hosting expenses by 30%\nwhile ensuring 99.99% high availability.\"\n```\n\n## Outlining: Dari Ide Acak ke Kerangka Terstruktur\n\nKerangka tulisan (*outline*) adalah cetak biru dokumen. Mengelompokkan catatan *brainstorming* acak ke dalam tiga babak hierarkis (Masalah -> Solusi -> Linimasa & Biaya) mencegah dokumen melompat-lompat tanpa arah logis.\n\n```text\nKerangka Standar Proposal Teknis:\nI. Executive Summary (Masalah bisnis & One-Sentence Takeaway)\nII. Technical Architecture (Spesifikasi solusi & mitigasi risiko)\nIII. Implementation Roadmap & Resource Allocation (Jadwal & rincian biaya)\n```\n\n## Drafting: Menulis Cepat Tanpa Menyunting di Saat Bersamaan\n\nSaat menyusun draf awal (*drafting*), matikan 'sensor penyunting' di kepalamu. Fokuslah pada menuangkan seluruh gagasan dari kerangka menjadi kalimat-kalimat yang utuh tanpa berhenti setiap menit untuk mengoreksi tanda baca atau mencari sinonim sempurna. Draf yang buruk dapat diperbaiki (*revised*), tetapi halaman yang kosong tidak bisa disunting sama sekali.\n\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Menyunting kata saat menyusun draf awal.** Berhenti setiap dua menit untuk mencari kosakata indah memicu kebuntuan menulis (*writer's block*).\n2. **Menulis dokumen tanpa One-Sentence Takeaway.** Tanpa pesan inti satu kalimat, dokumen cenderung melebar ke mana-mana tanpa fokus.\n3. **Mengabaikan analisis audiens.** Menulis laporan berbobot teknis tinggi untuk dewan direksi non-teknis membuat proposal sulit disetujui.\n\n## Kaitan ke Dunia Kerja\n\nDalam proyek pengembangan perangkat lunak berskala besar, insinyur senior yang menguasai tahap pra-tulis mampu menyelesaikan dokumen arsitektur (*RFC*) dalam separuh waktu rekan-rekannya karena mereka membangun kerangka logika sebelum menyusun teks panjang."
        },
        {
          "kind": "materi",
          "id": "beng-6-m2",
          "title": "Revisi Berbobot, Editing, Proofreading Mundur, dan Peer Review",
          "body": "# Menyempurnakan Draf Menjadi Dokumen Siap Kirim\n\nMenyelesaikan draf pertama barulah separuh perjalanan. Nilai sesungguhnya dari seorang komunikator bisnis terletak pada kemampuannya memangkas kata-kata mubazir (*wordiness trimming*), mengedit tata bahasa, dan memeriksa kesalahan tipografi akhir.\n\n## Revising vs Editing vs Proofreading: Jangan Dicampur\n\nTiga tahap penyempurnaan akhir ini memiliki fokus lensa yang berbeda:\n\n| Tahap | Lensa Pemeriksaan | Yang Dikerjakan |\n| --- | --- | --- |\n| **Revising (Revisi Makro)** | Struktur & Substansi | Memeriksa alur logis antarparagraf, memangkas paragraf berulang, menghapus kata mubazir (*fluff*) |\n| **Editing (Penyuntingan Mikro)** | Kalimat & Gaya | Memperbaiki struktur kalimat, mengubah kalimat pasif lambat menjadi aktif, konsistensi istilah |\n| **Proofreading (Pemeriksaan Akhir)** | Tipografi & Detail | Memeriksa salah ketik (*typo*), koma hilang, format angka, kapitalisasi, dan tautan berkas |\n\n## Memangkas Kata Bertele-tele (Trimming Wordiness)\n\nDokumen bisnis yang tangguh tidak membuang waktu pembaca dengan frasa klise yang panjang. Pangkas frasa bertele-tele menjadi kata tunggal yang berbobot:\n\n| Frasa Bertele-tele (Hindari ❌) | Padanan Ringkas & Tajam (Gunakan ✅) |\n| --- | --- |\n| `due to the fact that` | `because` / `since` |\n| `at this point in time` | `now` / `currently` |\n| `in order to` | `to` |\n| `in the event that` | `if` |\n| `for the purpose of verifying` | `to verify` |\n| `conduct an investigation of` | `investigate` |\n\n```text\n❌ 25 Kata Bertele-tele:\n\"Due to the fact that the server failed, we need to conduct an investigation in order to\ndetermine the root cause at this point in time.\"\n\n✅ 12 Kata Ringkas & Bertenaga:\n\"Because the server failed, we must investigate the root cause now.\"\n```\n\n## Proofreading: Teknik Membaca Mundur (*Backward Reading*)\n\nSaat membaca dokumen yang baru saja kamu tulis, otakmu cenderung 'melihat apa yang seharusnya tertulis' alih-alih 'apa yang sebenarnya tercetak'. Gunakan teknik **membaca mundur kalimat demi kalimat** dari akhir dokumen ke awal. Membaca mundur memutus konteks makna sehingga matamu dipaksa fokus pada ejaan murni, huruf ganda, dan tanda baca di setiap kata.\n\n## Memberi dan Menerima Feedback Tulisan (Peer Review)\n\nUlasan dokumen (*document review*) harus ditujukan pada **kejelasan teks**, bukan pada diri penulis. Saat memberi feedback, gunakan prinsip spesifik dan berorientasi solusi (misalnya: *'Paragraf 2 melompat dari biaya ke keamanan; sarankan tambahkan transisi'* alih-alih *'Tulisanmu membingungkan'*). Saat menerima feedback, pandanglah komentar rekan tim sebagai peluang gratis menyaring bug komunikasi sebelum dokumen dibaca klien.\n\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Mencampuradukkan revisi makro dan proofreading mikro dalam satu putaran baca.** Hal ini menyebabkan kesalahan struktural terlewatkan.\n2. **Memberikan komentar review yang menghakimi dan tidak spesifik.** Komentar seperti 'tulisanmu jelek' merusak hubungan tim; berikan saran perbaikan konkret.\n3. **Membiarkan frasa bertele-tele seperti 'due to the fact that' lolos ke dokumen akhir.** Selalu pangkas menjadi kata lugas.\n\n## Kaitan ke Dunia Kerja\n\nDi perusahaan kelas dunia seperti Amazon, memo bisnis 6 halaman (*six-pagers*) menjadi dasar pengambilan keputusan bernilai miliaran dolar. Dokumen yang ringkas, bebas kata mubazir, dan telah melalui proses peer review ketat menentukan persetujuan inisiatif strategis."
        },
        {
          "kind": "step",
          "id": "beng-6-1",
          "title": "Tugas Mengarang: Menyusun One-Sentence Takeaway untuk Proposal Proyek",
          "explanation": "Sebuah *One-Sentence Takeaway* adalah inti pesan dokumen yang merangkum tindakan yang diusulkan, target sasaran, dan manfaat bisnis utama dalam satu kalimat padat. Kalimat ini menjadi jangkar bagi seluruh draf proposal sehingga penulis dan pembaca tetap selaras pada tujuan yang sama. Struktur kalimat takeaway yang efektif diawali tindakan gerund atau subjek aksi (`Migrating our database cluster to AWS` atau `Upgrading our server infrastructure`), diikuti kata kerja hasil (`will reduce` atau `will decrease`), persentase penghematan biaya (`annual hosting costs by 30%`), dan ditutup dengan jaminan ketersediaan sistem (`while ensuring 99.9% uptime`). Ketajaman perumusan ini menjadi penentu apakah proposalmu layak dibaca lebih lanjut oleh manajemen.",
          "example": {
            "code": "❌ We want to migrate our database to the cloud because it is good and cheap.\n✅ Migrating our database cluster to AWS will reduce annual hosting expenses by 30% while ensuring 99.9% uptime.",
            "output": "Sebelum : pernyataan samar tanpa rincian penyedia cloud, persentase penghematan, dan SLA.\nSesudah : memuat tindakan spesifik, angka biaya terukur (30%), dan jaminan keandalan (99.9% uptime).",
            "note": "Rumus: [Aksi Spesifik] + will reduce [Biaya] by [X%] + while ensuring [SLA/Uptime]."
          },
          "instruction": "Skenario: kamu merumuskan pesan inti proposal migrasi cloud untuk diajukan ke dewan direksi. Tulis SATU kalimat One-Sentence Takeaway yang padat dalam bahasa Inggris. Unsur wajib: (1) aksi migrasi kluster database ke penyedia cloud AWS, (2) kata kerja masa depan dan pengurangan biaya hosting tahunan sebesar 30 persen, dan (3) klausa penutup jaminan keandalan uptime 99.9 persen.",
          "starterCode": "# Tulis satu kalimat One-Sentence Takeaway yang terukur di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "(?=[\\s\\S]*\\b(migrat|mov|transition|shift|relocat|transfer|port)\\w*\\b)(?=[\\s\\S]*\\b(database|db)\\s+clusters?\\b)(?=[\\s\\S]*\\bAWS\\b)",
              "flags": "i",
              "message": "Unsur aksi belum lengkap: sebutkan perpindahan kluster database ke AWS sebagai inti takeaway."
            },
            {
              "pattern": "(?=[\\s\\S]*\\bwill\\b)(?=[\\s\\S]*\\b(reduc|cut|lower|decreas|shrink|trim|slash|sav)\\w*\\b)(?=[\\s\\S]*\\b(annual|yearly|per\\s+year|a\\s+year)\\b)(?=[\\s\\S]*\\bhosting\\b)(?=[\\s\\S]*\\b30\\s*(%|percent\\b))",
              "flags": "i",
              "message": "Manfaatnya belum terukur ke depan: pakai kata kerja masa depan `will` plus penghematan biaya hosting tahunan 30%."
            },
            {
              "pattern": "(?=[\\s\\S]*\\b99\\.9\\s*(%|percent)?)(?=[\\s\\S]*\\b(uptime|availability)\\b)",
              "flags": "i",
              "message": "Klausa penutup jaminan keandalan belum ada: sebutkan uptime 99.9%."
            },
            {
              "pattern": "\\b(cheap|cheaper|good|nice|awesome|great)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kata sifat subjektif tidak bisa diukur dewan direksi. Ganti dengan metrik angka."
            }
          ],
          "solution": "Migrating our database cluster to AWS will reduce annual hosting expenses by 30% while ensuring 99.9% uptime.",
          "susunKode": {
            "question": "Susun One-Sentence Takeaway yang tajam dan terukur untuk proposal migrasi ini.",
            "potongan": [
              "Migrating our database cluster to AWS",
              "will reduce annual hosting expenses by 30%",
              "while ensuring 99.9% uptime."
            ],
            "pengecoh": [
              "We want to migrate our database",
              "because it is very cheap."
            ],
            "pemisah": " ",
            "explanation": "One-Sentence Takeaway menggabungkan aksi teknis spesifik, dampak persentase biaya terukur, dan jaminan keandalan sistem. Pengecoh 'We want to migrate' dan 'because it is very cheap' sering menggoda penulis pemula, namun merupakan jebakan keliru yang tidak memiliki bobot analisis bisnis."
          }
        },
        {
          "kind": "step",
          "id": "beng-6-2",
          "title": "Menyusun Kerangka Tiga Poin Terstruktur dari Catatan Acak",
          "explanation": "Tahap *outlining* bertugas mengubah catatan acak hasil rapat menjadi struktur dokumen berjenjang yang logis. Format kerangka tiga babak standar proposal teknis terdiri atas: Bagian I (Ringkasan Masalah Bisnis), Bagian II (Solusi Arsitektur Teknis), dan Bagian III (Jadwal Pelaksanaan & Alokasi Anggaran). Menyusun butir kerangka dengan angka Romawi (`I.`, `II.`, `III.`) memberikan hierarki visual yang jelas sebelum draf teks panjang ditulis. Kerangka yang kokoh memastikan tidak ada topik penting yang terlewatkan selama penulisan draf.",
          "example": {
            "code": "❌ Notes: talk about budget then server crash then timeline then architecture\n✅ I. Problem Statement\nII. Technical Solution\nIII. Timeline and Budget",
            "output": "Sebelum : catatan acak tanpa urutan hierarki logis.\nSesudah : tiga bagian terstruktur berangka Romawi: Masalah -> Solusi -> Jadwal & Biaya.",
            "note": "Gunakan angka Romawi I, II, III untuk menandai bagian utama dokumen formal."
          },
          "instruction": "Skenario: kamu merapikan catatan brainstorming menjadi kerangka proposal tiga bagian resmi. Susun teks di editor menjadi format kerangka hierarkis dengan tiga baris berurutan: baris pertama untuk ringkasan eksekutif berpenomoran Romawi I, baris kedua untuk arsitektur teknis berpenomoran Romawi II, dan baris ketiga untuk linimasa implementasi dan anggaran berpenomoran Romawi III.",
          "starterCode": "Executive summary and technical architecture and implementation timeline and budget.",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*I\\.\\s+[^\\n]*\\bexecutive\\s+summary\\b",
              "flags": "im",
              "message": "Baris pertama harus bernomor Romawi `I.` dan memuat ringkasan eksekutif."
            },
            {
              "pattern": "^\\s*II\\.\\s+[^\\n]*\\btechnical\\s+architecture\\b",
              "flags": "im",
              "message": "Baris kedua harus bernomor Romawi `II.` dan memuat arsitektur teknis."
            },
            {
              "pattern": "^\\s*III\\.\\s+[^\\n]*\\bimplementation\\s+timeline\\b[^\\n]*\\bbudget\\b",
              "flags": "im",
              "message": "Baris ketiga harus bernomor Romawi `III.` dan memuat linimasa implementasi beserta anggaran."
            },
            {
              "pattern": "\\band\\s+technical\\s+architecture\\s+and\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu masih menulis kalimat menyambung. Pecah menjadi tiga baris kerangka terpisah."
            }
          ],
          "solution": "I. Executive Summary\nII. Technical Architecture\nIII. Implementation Timeline and Budget",
          "susunKode": {
            "question": "Susun kerangka proposal formal tiga babak ini secara berurutan.",
            "potongan": [
              "I. Executive Summary\n",
              "II. Technical Architecture\n",
              "III. Implementation Timeline and Budget"
            ],
            "pengecoh": [
              "Executive summary and\n",
              "IV. Random Notes"
            ],
            "pemisah": "",
            "explanation": "Urutan outline formal yang logis bergerak dari Ringkasan Eksekutif (I) -> Solusi Arsitektur (II) -> Jadwal & Anggaran (III). Pengecoh dengan kalimat bersambung 'and' adalah jebakan format keliru yang sering menggoda saat menyalin catatan mentah rapat."
          }
        },
        {
          "kind": "step",
          "id": "beng-6-3",
          "title": "Memangkas Frasa Bertele-tele (Trimming Wordiness)",
          "explanation": "Salah satu kelemahan terbesar draf awal adalah banyaknya frasa pengisi (*fluff / wordiness*) yang memperlambat laju membaca tanpa menambah makna baru. Frasa bertele-tele seperti `due to the fact that` harus dipangkas menjadi `because`, `at this point in time` menjadi `now`, dan `in order to` menjadi `to`. Memangkas frasa 20 kata menjadi 10 kata yang tajam melipatgandakan dampak argumenmu di mata pimpinan perusahaan. Penyuntingan yang bersih dan ringkas adalah ciri utama penulis bisnis yang terlatih.",
          "example": {
            "code": "❌ Due to the fact that the API timed out, we need to inspect the logs at this point in time.\n✅ Because the API timed out, we must inspect the logs now.",
            "output": "Sebelum : 19 kata bertele-tele dengan frasa klise panjang.\nSesudah : 10 kata ringkas dan bertenaga tanpa kehilangan satu pun fakta penting.",
            "note": "Ganti 'due to the fact that' -> 'because', dan 'at this point in time' -> 'now'."
          },
          "instruction": "Skenario: kamu menyunting kalimat laporan insiden agar ringkas dan hemat kata. Draf di editor memuat frasa pembuka dan keterangan waktu yang bertele-tele. Pangkas kalimat tersebut menjadi versi ringkas tanpa mengubah fakta teknis: ganti frasa pembuka sebab-akibat yang panjang menjadi kata hubung tunggal, perkuat kata kerja kebutuhan menjadi keharusan, dan sederhanakan keterangan waktu saat ini menjadi kata tunggal.",
          "starterCode": "Due to the fact that the server failed, we need to inspect the logs at this point in time.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(because|since|as|when|after)\\s+(the|our)\\s+server\\b",
              "flags": "i",
              "message": "Frasa sebab-akibat panjang harus diringkas jadi satu kata hubung di depan `the server`."
            },
            {
              "pattern": "\\b(must|should)\\s+(\\w+\\s+){0,1}(inspect|check|review|examine|analyz\\w+|audit|read)\\b",
              "flags": "i",
              "message": "Kata kerja kebutuhan masih lemah. Pakai modal keharusan sebelum kata kerja pemeriksaan log."
            },
            {
              "pattern": "\\b(now|immediately|today)\\b",
              "flags": "i",
              "message": "Keterangan waktu belum diringkas menjadi satu kata."
            },
            {
              "pattern": "\\b(due\\s+to\\s+the\\s+fact\\s+that|at\\s+this\\s+point\\s+in\\s+time|in\\s+order\\s+to|for\\s+the\\s+purpose\\s+of|it\\s+is\\s+necessary\\s+that|in\\s+the\\s+event\\s+that|take\\s+a\\s+look\\s+at)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Masih ada frasa mubazir yang bisa diganti satu kata lugas."
            },
            {
              "pattern": "(\\b[\\w%'-]+\\b\\W+){12}[\\w%']",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kalimatmu masih di atas 12 kata. Pangkas lagi sampai benar-benar ringkas."
            }
          ],
          "solution": "Because the server failed, we must inspect the logs now.",
          "susunKode": {
            "question": "Susun kalimat yang telah dipangkas dari kata bertele-tele ini secara efisien.",
            "potongan": [
              "Because the server failed,",
              "we must inspect",
              "the logs now."
            ],
            "pengecoh": [
              "Due to the fact that the server failed,",
              "at this point in time."
            ],
            "pemisah": " ",
            "explanation": "'Because the server failed, we must inspect the logs now.' menyampaikan pesan yang sama dengan separuh jumlah kata. Pengecoh 'Due to the fact that' dan 'at this point in time' adalah frasa mubazir yang sering menggoda penulis namun merupakan jebakan yang wajib dibuang dalam tahap revisi."
          }
        },
        {
          "kind": "step",
          "id": "beng-6-4",
          "title": "Tugas Mengarang: Mengubah Pernyataan Fakta Pasif Menjadi Thesis Claim Rekomendasi",
          "explanation": "Pernyataan tesis (*thesis statement*) dalam dokumen rekomendasi arsitektur tidak boleh sekadar menyatakan fakta pasif yang sudah diketahui semua orang (seperti `Our database latency is high`). Tesis bisnis yang kuat wajib memuat **klaim tindakan rekomendasi (*action claim*)** yang didukung modal saran tegas (`should` atau `must`), tindakan terukur (`migrate to PostgreSQL`), dan target hasil kuantitatif (`to achieve a 40% performance gain`). Mengubah fakta pasif menjadi rekomendasi aktif mengubah status dokumen dari sekadar keluhan menjadi panduan keputusan strategis.",
          "example": {
            "code": "❌ Our current search query latency is very slow during peak hours.\n✅ Our engineering team should implement Elasticsearch to reduce query response times by 50%.",
            "output": "Sebelum : sekadar pernyataan fakta pasif tanpa usulan arah solusi.\nSesudah : memuat modal rekomendasi 'should', aksi teknologi, dan target angka 50%.",
            "note": "Rumus: [Subjek Tim] + should/must [Aksi Teknologi] + to reduce [Metrik] by [X%]."
          },
          "instruction": "Skenario: kamu menulis kalimat tesis rekomendasi pada ringkasan proposal arsitektur. Tulis SATU kalimat klaim rekomendasi tegas dalam bahasa Inggris. Unsur wajib: (1) subjek tim rekayasa di awal kalimat, (2) kata kerja modal rekomendasi tindakan tegas, (3) penyebutan solusi teknologi Elasticsearch atau Redis cache, dan (4) klausa tujuan terukur dengan target pemangkasan latensi query sebesar 50 persen.",
          "starterCode": "# Tulis satu kalimat tesis klaim rekomendasi dengan modal dan target persentase di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*((our|the|my)\\s+([\\w-]+\\s+){0,2}teams?|engineering)\\b",
              "flags": "i",
              "message": "Klaim tesis harus dibuka subjek tim rekayasa, bukan objek atau keterangan."
            },
            {
              "pattern": "\\b(should|must|ought\\s+to)\\s+(\\w+\\s+){0,2}(implement|deploy|adopt|introduce|migrate|integrate|install|add|use|build|roll\\s+out|standardize)\\w*\\b",
              "flags": "i",
              "message": "Belum ada modal rekomendasi tegas plus kata kerja tindakan. Klaim harus menyarankan aksi, bukan melaporkan keadaan."
            },
            {
              "pattern": "\\b(elasticsearch|redis)\\b",
              "flags": "i",
              "message": "Solusi teknologinya belum disebut. Tunjuk Elasticsearch atau Redis cache secara eksplisit."
            },
            {
              "pattern": "(?=[\\s\\S]*\\b(reduc|cut|lower|decreas|shrink|trim|slash)\\w*\\b)(?=[\\s\\S]*\\b(latency|response\\s+times?)\\b)(?=[\\s\\S]*\\b50\\s*(%|percent\\b))",
              "flags": "i",
              "message": "Klausa tujuan belum terukur: sebutkan pemangkasan latensi query sebesar 50%."
            },
            {
              "pattern": "\\b(is\\s+(very\\s+)?slow|latency\\s+is\\s+(bad|high|terrible)|are\\s+slow)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Ini masih pernyataan fakta pasif tentang keadaan, bukan klaim rekomendasi."
            }
          ],
          "solution": "Our engineering team should implement Elasticsearch to reduce query latency by 50%.",
          "susunKode": {
            "question": "Susun kalimat klaim tesis rekomendasi yang bertenaga ini.",
            "potongan": [
              "Our engineering team should implement Elasticsearch",
              "to reduce query latency",
              "by 50%."
            ],
            "pengecoh": [
              "Our database latency is very slow",
              "without any clear recommendation."
            ],
            "pemisah": " ",
            "explanation": "Tesis rekomendasi yang kuat menggabungkan modal saran ('should implement') dengan teknologi spesifik dan target terukur ('by 50%'). Pengecoh 'Our database latency is very slow' sering menggoda karena terdengar alami, namun hanyalah jebakan keluhan pasif tanpa nilai rekomendasi solutif."
          }
        },
        {
          "kind": "step",
          "id": "beng-6-5",
          "title": "Mengubah Kalimat Pasif Lambat Menjadi Kalimat Aktif Lugas",
          "explanation": "Meskipun kalimat pasif sesekali berguna untuk diplomasi, penggunaan kalimat pasif yang berlebihan (seperti `The database was optimized by our team`) membuat draf laporan kerja terasa lambat dan menyembunyikan pelaku aksi di akhir kalimat. Mengubah kalimat pasif menjadi kalimat aktif (*active voice*) dengan menempatkan subjek pelaku di awal (`Our engineering team optimized the database`) menghasilkan kalimat yang lebih bertenaga, ringkas, dan tegas penanggung jawabnya. Di dunia kerja, kalimat aktif memperlihatkan kepemilikan tanggung jawab (*ownership*) yang tinggi.",
          "example": {
            "code": "❌ The automated security audit was conducted by our infrastructure team yesterday.\n✅ Our infrastructure team conducted the automated security audit yesterday.",
            "output": "Sebelum : kalimat pasif lambat dengan pelaku tersembunyi di frasa 'by our team'.\nSesudah : kalimat aktif lugas yang diawali subjek pelaku 'Our infrastructure team'.",
            "note": "Ubah struktur: [Pelaku] + [Kata Kerja Lampau] + [Objek]."
          },
          "instruction": "Skenario: kamu merevisi laporan status arsitektur agar lebih aktif dan lugas. Kalimat di editor menggunakan bentuk pasif yang menyembunyikan pelaku di akhir klausa. Ubah kalimat tersebut menjadi kalimat aktif yang menempatkan subjek tim rekayasa di awal kalimat sebagai pelaku tindakan pembenahan database inti.",
          "starterCode": "The core database was refactored by our engineering team.",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*((our|the|my)\\s+([\\w-]+\\s+){0,2}teams?|engineering)\\b",
              "flags": "i",
              "message": "Pelaku harus jadi subjek di awal kalimat aktif, bukan disembunyikan di belakang."
            },
            {
              "pattern": "\\b(refactored|refactors|restructured|rebuilt|reworked|overhauled|redesigned|revamped|cleaned\\s+up)\\b",
              "flags": "i",
              "message": "Kata kerja aksinya belum berbentuk aktif langsung setelah subjek."
            },
            {
              "pattern": "\\b(the|our)\\s+core\\s+database\\b",
              "flags": "i",
              "message": "Objek tindakan `the core database` harus tetap disebut."
            },
            {
              "pattern": "\\b(was|were|is|are|been|being)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Ubah menjadi kalimat aktif tanpa to-be pasif (was/were/is/are)."
            },
            {
              "pattern": "\\bby\\s+our\\b|\\bby\\s+the\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Tempatkan tim pelaku langsung di awal kalimat, bukan di belakang frasa 'by our team'."
            }
          ],
          "solution": "Our engineering team refactored the core database.",
          "susunKode": {
            "question": "Susun kalimat ini menjadi bentuk aktif yang lugas dan berorientasi pelaku.",
            "potongan": [
              "Our engineering team",
              "refactored",
              "the core database."
            ],
            "pengecoh": [
              "The core database was",
              "refactored by our team."
            ],
            "pemisah": " ",
            "explanation": "'Our engineering team refactored the core database.' adalah bentuk kalimat aktif yang lugas dan efisien. Pengecoh dengan konstruksi pasif 'The core database was refactored by' sering menggoda namun merupakan jebakan yang memperpanjang kalimat tanpa menambah nilai informasi."
          }
        },
        {
          "kind": "step",
          "id": "beng-6-6",
          "title": "Proofreading: Menemukan dan Memperbaiki Tiga Kesalahan Tersembunyi",
          "explanation": "Tahap *proofreading* adalah pemeriksaan ketelitian mikro terhadap salah ketik (*typos*), huruf ganda yang hilang, tanda baca, dan kapitalisasi. Kesalahan seperti salah mengeja `seperate` (seharusnya `separate`), salah memilih `there` (seharusnya `their`), atau huruf kecil pada nama hari `friday` sering lolos saat penulis membaca draf secara terburu-buru. Menggunakan teknik membaca perlahan per kata memastikan seluruh cacat tipografi berhasil dibersihkan sebelum dokumen dikirimkan ke pihak eksternal. Dokumen yang bersih dari salah ketik mencerminkan standar kualitas tanpa kompromi.",
          "example": {
            "code": "❌ We will accomodate there request on monday.\n✅ We will accommodate their request on Monday.",
            "output": "Sebelum : tiga kesalahan (accomodate [salah eja], there [salah homofon], monday [huruf kecil]).\nSesudah : seluruhnya dikoreksi menjadi 'accommodate', 'their', dan 'Monday'.",
            "note": "Periksa ejaan huruf ganda, homofon kepemilikan, dan kapitalisasi nama hari."
          },
          "instruction": "Skenario: kamu melakukan proofreading akhir pada draf pengumuman rapat evaluasi. Terdapat tiga kesalahan mikro pada kalimat di editor: kesalahan ejaan pada kata peninjauan terpisah, kesalahan pemilihan kata ganti kepemilikan kemajuan mereka, dan huruf kecil pada nama hari Jumat. Perbaiki ketiga kesalahan tersebut menjadi bentuk baku yang sempurna.",
          "starterCode": "The teams will hold a seperate review of there progress on friday.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bseparate\\b",
              "flags": "i",
              "message": "Ejaan kata peninjauan terpisah belum baku."
            },
            {
              "pattern": "\\btheir\\s+progress\\b",
              "flags": "i",
              "message": "Kepemilikan kemajuan harus memakai kata ganti kepemilikan."
            },
            {
              "pattern": "\\breview\\b",
              "flags": "i",
              "message": "Isi kalimat tentang peninjauan harus tetap dipertahankan."
            },
            {
              "pattern": "\\bFriday\\b",
              "flags": "",
              "message": "Nama hari adalah nama diri, jadi diawali huruf kapital."
            },
            {
              "pattern": "\\bseperate\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kata ini salah eja; bagian tengahnya seharusnya `par`."
            },
            {
              "pattern": "\\bthere\\s+progress\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu memakai keterangan tempat, bukan kata ganti kepemilikan."
            },
            {
              "pattern": "\\bfriday\\b",
              "flags": "",
              "mustNotMatch": true,
              "message": "Nama hari masih ditulis huruf kecil."
            }
          ],
          "solution": "The teams will hold a separate review of their progress on Friday.",
          "susunKode": {
            "question": "Susun kalimat yang telah dibersihkan melalui proofreading teliti ini.",
            "potongan": [
              "The teams will hold a separate review",
              "of their progress",
              "on Friday."
            ],
            "pengecoh": [
              "a seperate review",
              "of there progress",
              "on friday."
            ],
            "pemisah": " ",
            "explanation": "Hasil proofreading yang benar menghasilkan 'separate' (ejaan baku), 'their' (kepemilikan jamak), dan 'Friday' (kapitalisasi nama hari). Pengecoh 'seperate', 'there progress', dan 'friday' adalah bentuk kesalahan ketik yang sangat sering menjebak penulis."
          }
        },
        {
          "kind": "step",
          "id": "beng-6-7",
          "title": "Tugas Mengarang: Menyusun Parafrase yang Sah Tanpa Plagiarisme Struktur",
          "explanation": "Menyusun parafrase (*paraphrasing*) yang sah dalam dokumen kerja bukan sekadar mengganti beberapa kata dengan sinonim kamus sementara struktur kalimatnya tetap sama persis (*patchwriting / structural plagiarism*). Parafrase profesional menuntut agar kamu memahami ide intinya, lalu **merombak total struktur kalimatnya dengan sudut pandang dan perbendaharaan katamu sendiri**. Jika kutipan asli berbunyi: *'Automated testing reduces software release bugs by detecting code errors before deployment'*, parafrase yang sah mengubah subjek dan alur klausa: *'Our engineering team minimizes production defects by verifying software through continuous integration pipelines.'* Keterampilan ini melindungi orisinalitas tulisan dan membuktikan pemahaman mendalam atas konsep yang dibahas.",
          "example": {
            "code": "Kutipan Asli: \"Cloud migration lowers infrastructure expenses by replacing physical servers with on-demand compute instances.\"\n❌ Parafrase Palsu (Patchwriting): \"Cloud migration reduces hardware costs by exchanging physical servers with on-demand instances.\"\n✅ Parafrase Sah: \"Organizations achieve significant cost efficiencies by transitioning from on-premise hardware to scalable cloud resources.\"",
            "output": "Sebelum : struktur kalimat hanya menukar sinonim kata per kata (plagiarisme struktur).\nSesudah : merombak total struktur kalimat dan menyajikan ide inti dengan rumusan baru.",
            "note": "Rombak subjek kalimat dan gunakan struktur klausa baru tanpa menyalin 4 kata berturut-turut."
          },
          "instruction": "Skenario: kamu memparafrasekan temuan arsitektur mengenai akselerasi performa aplikasi web melalui penyimpanan hasil query di memori. Tulis SATU kalimat parafrase orisinal yang sah dalam bahasa Inggris. Unsur wajib: (1) subjek tim rekayasa dengan sudut pandang aktif di awal kalimat, (2) kata kerja peningkatan performa atau kecepatan aplikasi, dan (3) klausa metode penyimpanan query berfrekuensi tinggi dalam memori Redis. Dilarang menyalin struktur atau rangkaian 4 kata berturut-turut dari sumber asli.",
          "starterCode": "# Tulis satu kalimat parafrase yang sah dengan struktur baru di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*((our|the|my)\\s+([\\w-]+\\s+){0,2}teams?|engineering)\\b",
              "flags": "i",
              "message": "Parafrase harus dibuka subjek tim dengan sudut pandang aktif."
            },
            {
              "pattern": "(?=[\\s\\S]*\\b(enhanc|improv|boost|accelerat|increas|speed|quicken|rais|strengthen)\\w*\\b)(?=[\\s\\S]*\\b(speeds?\\s+up|speed|performance|response\\s+times?|throughput|latency)\\b)",
              "flags": "i",
              "message": "Belum ada kata kerja peningkatan performa atau kecepatan aplikasi."
            },
            {
              "pattern": "(?=[\\s\\S]*\\b(cach|stor|keep|retain|hold|buffer)\\w*\\b)(?=[\\s\\S]*\\b(quer\\w+|requests?)\\b)(?=[\\s\\S]*\\b(high[-\\s]?frequency|frequent\\w*|most\\s+common|repeated|hot)\\b)(?=[\\s\\S]*\\b(redis|in-?memory|memory)\\b)",
              "flags": "i",
              "message": "Klausa metodenya belum utuh: jelaskan penyimpanan query berfrekuensi tinggi di memori Redis."
            },
            {
              "pattern": "\\b(database\\s+caching\\s+accelerates|web\\s+application\\s+performance\\s+by|frequently?\\s+accessed\\s+query\\s+results|storing\\s+frequent\\w*\\s+query\\s+results|in\\s+memory\\.\\s+in\\s+redis)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kamu masih menyalin rangkaian kata dari sumber. Susun ulang struktur kalimatnya sendiri."
            }
          ],
          "solution": "Our engineering team enhances application speed by caching high-frequency queries in Redis.",
          "susunKode": {
            "question": "Susun parafrase yang sah dan orisinal ini dengan struktur kalimat yang baru.",
            "potongan": [
              "Our engineering team enhances application speed",
              "by caching high-frequency queries",
              "in Redis."
            ],
            "pengecoh": [
              "Database caching accelerates web performance",
              "by storing frequent query results in memory."
            ],
            "pemisah": " ",
            "explanation": "Parafrase yang sah merombak struktur subjek dan klausa metode tanpa menyalin frasa kutipan asli secara harfiah. Pengecoh 'Database caching accelerates...' sering menggoda karena menyalin teks asli, namun merupakan jebakan keliru yang melanggar prinsip integritas orisinalitas tulisan."
          }
        },
        {
          "kind": "step",
          "id": "beng-6-8",
          "title": "Menyusun Komentar Peer Review yang Konstruktif dan Spesifik",
          "explanation": "Memberikan komentar *review* pada draf dokumen rekan tim membutuhkan keseimbangan antara ketegasan teknis dan penghargaan profesional (*constructive feedback*). Komentar yang terlalu samar atau menghakimi seperti `This section is confusing and bad` tidak membantu rekan kerja melakukan perbaikan. Pola komentar review yang efektif diawali dengan penunjukan lokasi paragraf spesifik (`In Section 2,`), menjelaskan kendala pembacaan secara objektif (`the transition from problem to solution feels abrupt`), dan menawarkan saran tindakan perbaikan konkret (`suggest adding a transitional sentence`). Etika review yang konstruktif mempercepat iterasi penyempurnaan dokumen tanpa merusak semangat kerja sama tim.",
          "example": {
            "code": "❌ This paragraph is poorly written and makes no sense.\n✅ In Section 2, the transition between problem and solution is abrupt; suggest adding a transitional sentence.",
            "output": "Sebelum : komentar menghakimi yang emosional tanpa solusi perbaikan.\nSesudah : menunjuk lokasi spesifik, menjelaskan kendala transisi, dan memberi usulan solusi.",
            "note": "Sebutkan nomor bagian/paragraf, jelaskan masalahnya secara objektif, dan beri usulan perbaikan."
          },
          "instruction": "Skenario: kamu memberikan catatan peninjauan pada draf proposal rekan kerja. Komentar awal di editor terlalu kasar dan tidak memberikan solusi. Tulis ulang menjadi komentar peninjauan konstruktif yang baku: sebutkan lokasi Bagian 2 di awal kalimat, jelaskan kendala transisi antargagasan yang terasa mendadak, dan berikan usulan perbaikan penambahan kalimat transisi. Pastikan diakhiri tanda titik.",
          "starterCode": "Section 2 is confusing.",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(in\\s+)?section\\s+2\\b",
              "flags": "i",
              "message": "Sebutkan lokasi Bagian 2 di awal kalimat supaya penulis tahu bagian mana yang dimaksud."
            },
            {
              "pattern": "(?=[\\s\\S]*\\btransitions?\\b)(?=[\\s\\S]*\\b(abrupt|abruptly|sudden|suddenly|jarring|disjointed|jumps?)\\b)",
              "flags": "i",
              "message": "Kendalanya belum dijelaskan: sebutkan bahwa perpindahan antargagasan terasa mendadak."
            },
            {
              "pattern": "(?=[\\s\\S]*\\b(suggest|recommend|consider|propose|please|try|could\\s+you)\\w*)(?=[\\s\\S]*\\b(add|adding|insert|inserting|includ\\w+|writ\\w+)\\b)(?=[\\s\\S]*\\b(transitional|transition|bridging|linking|connecting)\\s+(sentence|phrase|clause|line)\\b)",
              "flags": "i",
              "message": "Komentar belum memberi jalan keluar: usulkan penambahan kalimat transisi."
            },
            {
              "pattern": "\\.\\s*$",
              "flags": "i",
              "message": "Komentar peninjauan harus ditutup tanda titik."
            },
            {
              "pattern": "\\b(is\\s+confusing|confusing|bad|terrible|awful|makes\\s+no\\s+sense|sloppy|lazy|useless)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Penilaian menghakimi tidak membantu penulis memperbaiki apa pun."
            }
          ],
          "solution": "In Section 2, the transition feels abrupt; suggest adding a transitional sentence.",
          "susunKode": {
            "question": "Susun komentar peer review yang konstruktif dan spesifik ini.",
            "potongan": [
              "In Section 2, the transition feels abrupt;",
              "suggest adding a",
              "transitional sentence."
            ],
            "pengecoh": [
              "Section 2 is totally confusing and bad;",
              "fix it immediately."
            ],
            "pemisah": " ",
            "explanation": "'In Section 2, the transition feels abrupt; suggest adding a transitional sentence.' memberikan kritik objektif yang terarah pada solusi. Pengecoh 'Section 2 is totally confusing and bad' sering menggoda saat kesal, namun merupakan jebakan yang melanggar etika profesionalisme peer review dan tidak memberikan arahan perbaikan yang jelas."
          }
        },
        {
          "kind": "quiz",
          "id": "beng-6-k1",
          "title": "Kuis: Siklus Menulis, Pemangkasan Kata, dan Peer Review",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Dalam tahap prewriting proposal migrasi database, kamu menyusun 'One-Sentence Takeaway'. Manakah rumusan kalimat pesan inti yang paling berdampak bisnis bagi dewan direksi?",
              "choices": [
                "A. We think cloud databases are really cool and want to try AWS soon.",
                "B. A lot of companies are moving to cloud platforms nowadays for modern technology.",
                "C. Migrating our database cluster to AWS will reduce annual hosting expenses by 30% while ensuring 99.9% uptime.",
                "D. Database migration is a technical process that requires careful planning by engineers."
              ],
              "answerIndex": 2,
              "explanation": "One-sentence takeaway yang tajam memadukan aksi konkret ('Migrating database cluster to AWS'), nilai bisnis terukur ('reduce annual hosting expenses by 30%'), dan jaminan keandalan ('ensuring 99.9% uptime')."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Sebagai arsitek perangkat lunak, kamu sedang menyusun kerangka proposal sistem (outlining). Manakah struktur tiga bagian yang paling logis dan baku?",
              "choices": [
                "A. I. Rincian Biaya -> II. Kesimpulan -> III. Latar Belakang Perusahaan",
                "B. I. Cuplikan Kode -> II. Riwayat Tim -> III. Lampiran Gambar",
                "C. I. Saran Rekan -> II. Jadwal Libur -> III. Rincian Tagihan",
                "D. I. Executive Summary -> II. Technical Architecture -> III. Implementation Timeline and Budget"
              ],
              "answerIndex": 3,
              "explanation": "Kerangka proposal teknis standar diawali ringkasan eksekutif bagi pimpinan, arsitektur teknis bagi tim penilai teknis, dan linimasa beserta anggaran bagi tim pengadaan."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyunting draf kebijakan operasional sistem: 'Due to the fact that the server failed, we must inspect the logs at this point in time.' Manakah perbaikan kalimat yang paling ringkas (concise) tanpa menghilangkan makna?",
              "choices": [
                "A. In light of the circumstance that the server failed, we inspect the logs currently.",
                "B. Because the server failed, we must inspect the logs now.",
                "C. Owing to the server failure condition, logs must be examined presently.",
                "D. The server failed due to facts so we check logs right at this minute."
              ],
              "answerIndex": 1,
              "explanation": "Frasa bertele-tele 'Due to the fact that' diganti menjadi 'Because', dan 'at this point in time' diganti menjadi 'now', memangkas separuh panjang kalimat tanpa mengorbankan informasi."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyunting ringkasan deployment: 'The core database was refactored by our engineering team.' Mengapa versi aktif 'Our engineering team refactored the core database' dinilai lebih kuat?",
              "choices": [
                "A. Kalimat aktif menempatkan pelaku di awal kalimat, menggunakan kata kerja lugas, dan meniadakan kata kerja bantu pasif yang memperlambat laju baca.",
                "B. Kalimat pasif melanggar tata bahasa resmi bahasa Inggris bisnis.",
                "C. Kalimat aktif selalu menghasilkan kata yang lebih sedikit di semua kondisi.",
                "D. Perekrut ATS melarang segala bentuk kalimat pasif dalam dokumen."
              ],
              "answerIndex": 0,
              "explanation": "Kalimat aktif memperjelas akuntabilitas pelaku tindakan, memberikan energi gerak pada kalimat, dan lebih mudah dipahami secara cepat oleh pembaca bisnis."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu sedang melakukan proofreading mandiri terhadap proposal kerja sebelum dikirim ke dewan direksi. Manakah teknik proofreading yang paling efektif untuk mendeteksi salah ketik tersembunyi?",
              "choices": [
                "A. Membaca naskah secepat mungkin secara sepintas di layar monitor.",
                "B. Membaca kalimat secara mundur dari akhir dokumen ke awal, atau mencetak dokumen di atas kertas untuk mengubah persepsi visual mata.",
                "C. Mengandalkan sepenuhnya spell checker otomatis tanpa membaca ulang.",
                "D. Meminta anggota keluarga yang tidak paham bidang teknologi untuk menilai arsitekturnya."
              ],
              "answerIndex": 1,
              "explanation": "Membaca teks secara terbalik (dari kalimat terakhir ke awal) memutus arus asosiasi konteks di otak, memaksa mata memeriksa ejaan dan tanda baca kata per kata secara mekanis."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Sebagai senior engineer yang melakukan peer review terhadap dokumentasi rekan tim, manakah komentar tinjauan yang paling konstruktif dan profesional?",
              "choices": [
                "A. 'This entire section is very confusing and poorly written.'",
                "B. 'Looks good to me, no comments.'",
                "C. 'In Section 2, the transition between database setup and caching feels abrupt; suggest adding a transitional sentence explaining Redis.'",
                "D. 'You should rewrite this part because I do not like the way you explain things.'"
              ],
              "answerIndex": 2,
              "explanation": "Peer review yang konstruktif menyebutkan lokasi spesifik ('Section 2'), menjelaskan kendala objektif ('transition feels abrupt'), dan memberikan saran tindakan konkret yang dapat langsung dieksekusi penulis."
            }
          ]
        }
      ]
    },
    {
      "slug": "prinsip-business-writing",
      "title": "Prinsip Business Writing",
      "description": "Tujuh prinsip tulisan bisnis efektif (7 C), kalimat aktif vs pasif, parallelism, serta etika dan nada profesional.",
      "topics": [
        "Prinsip 7C: Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous",
        "Active voice vs passive voice: kapan aktif lebih kuat, kapan pasif lebih bijak",
        "Parallelism: struktur sejajar pada daftar dan kalimat berseri",
        "Plain English vs legalese/bureaucratese: hindari 'pursuant to', 'herein'",
        "Tone: percaya diri tanpa agresif, sopan tanpa membungkuk",
        "Inklusivitas: bahasa netral gender dan bebas stereotip",
        "Etika tulisan bisnis: kejujuran, akurasi, dan plagiarisme di tempat kerja"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "beng-7-m1",
          "title": "Fondasi Komunikasi Bisnis: Prinsip 7C, Active Voice, dan Parallelism",
          "body": "# Standar Emas Business Writing: Prinsip 7 C\n\nKeberhasilan komunikasi bisnis ditentukan oleh seberapa mudah pesanmu dipahami dan seberapa efektif pesan itu mendorong tindakan. Selama puluhan tahun, para pakar komunikasi manajemen global menyaring prinsip-prinsip penulisan efektif ke dalam kerangka **Tujuh C (The 7 Cs of Business Communication)**:\n\n| Prinsip 7 C | Makna & Syarat Standar | Contoh Penerapan Nyata |\n| --- | --- | --- |\n| **1. Clear (Jelas)** | Tujuan pesan langsung terlihat; bebas dari ambiguitas atau jargon kabur | Inti permintaan dinyatakan di paragraf pertama tanpa frasa berputar. |\n| **2. Concise (Ringkas)** | Menyampaikan pesan secara utuh dengan jumlah kata paling efisien | Mengganti `due to the fact that` menjadi `because`. |\n| **3. Concrete (Konkret)** | Menggunakan data spesifik, angka kuantitatif, dan fakta terukur | `Reducing response time by 40%` alih-alih `Making the system faster`. |\n| **4. Correct (Benar/Akurat)** | Bebas dari kesalahan tata bahasa, ejaan, tanda baca, dan klaim fakta | Seluruh nama hari diawali kapital, tenses konsisten, dan data terverifikasi. |\n| **5. Coherent (Koheren/Padu)** | Seluruh kalimat tersambung secara logis dengan kata transisi yang tepat | Alur ide bergerak mulus dari masalah -> analisis -> solusi. |\n| **6. Complete (Lengkap)** | Memuat seluruh informasi yang dibutuhkan pembaca untuk mengambil keputusan | Menyertakan tenggat waktu, tautan dokumen, dan penanggung jawab. |\n| **7. Courteous (Santun)** | Nada ramah, menghormati waktu pembaca, empati, dan tidak agresif | Menolak permintaan dengan sopan sambil menawarkan alternatif bernilai. |\n\n## Active Voice vs Passive Voice: Kapan Aktif, Kapan Pasif?\n\nKaidah umum penulisan bisnis mewajibkan **80% kalimat ditulis dalam bentuk aktif (*Active Voice*)** karena kalimat aktif lebih ringkas, bertenaga, dan secara transparan menunjukkan siapa penanggung jawab tindakan.\n\n```text\nActive (Unggul untuk Akuntabilitas & Kejelasan):\n\"Our engineering team resolved the memory leak within twenty minutes.\"\n[Subjek Pelaku]      [Action Verb]  [Objek Masalah]   [Durasi]\n\nPassive (Tepat Digunakan untuk Diplomasi & Menghindari Menyalahkan Orang):\n\"An incorrect configuration parameter was applied during the deployment.\"\n(Fokus pada masalah yang terjadi, BUKAN mempermalukan individu teknisi yang salah ketik)\n```\n\nGunakan kalimat pasif secara bijak hanya ketika: (1) pelaku tidak diketahui, (2) objek hasil jauh lebih penting daripada pelaku, atau (3) dalam situasi diplomatik di mana menyebut nama orang secara langsung akan memicu permusuhan antardepartemen.\n\n## Parallelism: Struktur Sejajar pada Daftar dan Kalimat Berseri\n\nPrinsip *parallelism* (kesejajaran struktur) menuntut agar elemen-elemen yang setara dalam suatu daftar atau seri memiliki bentuk gramatikal yang identik. Pelanggaran paralelisme membuat kalimat terdengar patah dan tidak seimbang.\n\n```text\n❌ Struktur Tidak Sejajar (Melanggar Parallelism):\n\"Our deliverables for this sprint are to optimize queries, designing new mockups, and we will deploy the API.\"\n (Infinitive 'to optimize'  !=  Gerund 'designing'  !=  Klausa 'we will deploy')\n\n✅ Struktur Sejajar Sempurna (Semua Berbentuk Infinitive):\n\"Our deliverables for this sprint are to optimize queries, to design new mockups, and to deploy the API.\"\n```\n\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Mencampuradukkan bentuk gramatikal dalam satu daftar seri.** Menulis daftar dengan awalan `to analyze`, `designing`, dan `we deploy` melanggar kaidah paralelisme.\n2. **Menggunakan kalimat pasif berlebihan.** Terlalu banyak kalimat pasif membuat pembaca sulit mengetahui siapa penanggung jawab tugas.\n3. **Membuat klaim tanpa angka konkret.** Menulis `The system is much faster` tanpa data persentase melanggar prinsip Concrete.\n\n## Kaitan ke Dunia Kerja\n\nDalam tinjauan proposal komersial dan audit kepatuhan, dokumen yang mematuhi prinsip 7C dan paralelisme dinilai memiliki kematangan manajemen yang tinggi. Struktur bahasa yang sejajar mempercepat pemahaman tim penilai tender terhadap daftar layanan yang ditawarkan."
        },
        {
          "kind": "materi",
          "id": "beng-7-m2",
          "title": "Plain English, Nada Profesional, Inklusivitas, dan Etika Penulisan",
          "body": "# Komunikasi Modern: Lugas, Inklusif, dan Beretika\n\nBahasa bisnis kontemporer telah meninggalkan gaya birokrasi kuno yang kaku. Fokus utama tulisan kerja hari ini adalah keterbukaan (*accessibility*), penghormatan terhadap keberagaman (*inclusivity*), dan integritas etika yang tanpa kompromi.\n\n## Plain English vs Legalese / Bureaucratese\n\nBanyak pembelajar keliru mengira bahwa menggunakan istilah birokrasi kuno seperti `pursuant to`, `herein`, atau `heretofore` membuat e-mail mereka terdengar lebih berbobot. Kenyataannya, gerakan **Plain English** yang diadopsi oleh pemerintah dan korporasi global mewajibkan penggunaan bahasa lugas sehari-hari yang mudah dipahami:\n\n| Bahasa Birokrasi Kuno (Hindari ❌) | Padanan Plain English Modern (Gunakan ✅) |\n| --- | --- |\n| `Pursuant to your request` | `As you requested` / `As requested` |\n| `Enclosed herewith please find` | `I have attached` / `Attached is` |\n| `In accordance with the aforementioned` | `As mentioned earlier` / `Under our policy` |\n| `Notwithstanding the fact that` | `Although` / `Even though` |\n| `Please be informed that` | Langsung sebutkan faktanya tanpa frasa pembuka |\n\n## Tone: Percaya Diri Tanpa Agresif, Sopan Tanpa Membungkuk\n\nMenemukan nada (*tone*) yang seimbang adalah seni komunikasi kepemimpinan:\n\n```text\n1. Terlalu Pasif/Membungkuk: \"I am extremely sorry to bother you, but maybe could you look at this if you have time?\"\n   (Menghancurkan otoritas profesionalmu)\n\n2. Terlalu Agresif/Menuntut: \"You must review this proposal immediately or the project will fail.\"\n   (Memicu resistensi emosional pembaca)\n\n3. Percaya Diri & Sopan (Ideal): \"Could you please review the attached proposal by Thursday to keep our timeline on track?\"\n   (Tegas, beralasan logis, dan menghormati mitra kerja)\n\n```\n\n## Inklusivitas: Bahasa Netral Gender dan Bebas Stereotip\n\nLingkungan kerja global mewajibkan penggunaan bahasa netral gender (*gender-neutral language*) untuk menciptakan budaya kerja yang adil:\n\n```text\n- Gunakan: 'sales representative'   (BUKAN: salesman)\n- Gunakan: 'chair' / 'chairperson'   (BUKAN: chairman)\n- Gunakan: 'workforce' / 'staffing' (BUKAN: manpower)\n- Gunakan pronoun singular 'they/their' untuk merujuk pengguna umum yang gendernya tidak spesifik:\n  \"Each developer should verify their local environment configuration.\"\n```\n\n## Etika Tulisan Bisnis: Kejujuran dan Batas Plagiarisme di Tempat Kerja\n\nIntegritas adalah aset paling berharga dalam karier profesional. Tiga prinsip etika mutlak:\n\n1. **Akurasi Data**: Dilarang memanipulasi metrik performa atau menyembunyikan kelemahan keamanan sistem dalam proposal.\n2. **Orisinalitas & Hak Cipta**: Jangan menyalin analisis kode atau proposal vendor lain tanpa izin atau atribusi yang sah.\n3. **Transparansi Peran**: Mengakui kontribusi rekan tim dan mitra kerja secara adil dalam laporan pencapaian proyek.\n\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Menggunakan istilah birokrasi kuno seperti 'Pursuant to'.** Padanan Plain English seperti 'As requested' jauh lebih ramah dan modern.\n2. **Menggunakan kata ganti bias gender seperti 'he/his'.** Gunakan singular 'they/their' untuk merujuk individu tunggal umum.\n3. **Menolak permintaan klien secara kasar.** Selalu gunakan prinsip Courteous dengan mengawali kalimat melalui empati dan menawarkan solusi alternatif.\n\n## Kaitan ke Dunia Kerja\n\nDalam komunikasi lintas fungsi (*cross-functional communication*), dokumen yang ditulis dalam Plain English dan menjunjung tinggi inklusivitas mempercepat persetujuan antar divisi serta membangun budaya organisasi yang saling menghargai."
        },
        {
          "kind": "step",
          "id": "beng-7-1",
          "title": "Menerapkan Parallelism pada Butir Daftar Tindakan Rapat",
          "explanation": "Prinsip *parallelism* mengharuskan seluruh butir tindakan dalam suatu seri memiliki bentuk gramatikal yang setara. Jika butir pertama diawali bentuk *to-infinitive* (`to analyze`), maka butir kedua dan ketiga juga wajib diawali bentuk *to-infinitive* (`to design`, `to deploy`). Mencampurkan infinitive dengan bentuk gerund `-ing` atau kalimat klausa baru merusak ritme kalimat dan memperlambat pemrosesan kognitif pembaca. Kesejajaran struktur pada daftar butir tindakan rapat (*action items*) memastikan pembagian tugas terlihat rapi dan seimbang.",
          "example": {
            "code": "❌ Our goals are to analyze data, designing architecture, and we will deploy services.\n✅ Our goals are to analyze data, to design architecture, and to deploy services.",
            "output": "Sebelum : mencampurkan 'to analyze' (infinitive), 'designing' (gerund), dan 'we will deploy' (klausa).\nSesudah : seluruh butir konsisten menggunakan bentuk infinitive (to analyze, to design, to deploy).",
            "note": "Pastikan seluruh kata kerja dalam daftar berseri memiliki bentuk awalan gramatikal yang seragam."
          },
          "instruction": "Skenario: kamu merumuskan tiga tujuan utama sprint pada dokumen perencanaan. Draf di editor melanggar prinsip parallelism pada butir kedua perancangan arsitektur. Perbaiki butir kedua tersebut menjadi bentuk to-infinitive yang sejajar dengan butir pertama dan ketiga. Pertahankan butir lainnya.",
          "starterCode": "Our goals for this sprint are to analyze requirements, designing the architecture, and to deploy the service.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bto\\s+\\w+[\\s\\S]*?,\\s*to\\s+\\w+[\\s\\S]*?\\band\\s+to\\s+\\w+",
              "flags": "i",
              "message": "Ketiga butir belum sejajar. Pakai bentuk to-infinitive yang sama untuk butir pertama, kedua, dan ketiga."
            },
            {
              "pattern": "\\bto\\s+(design|architect|develop|create|build)\\s+(the\\s+|our\\s+|a\\s+|new\\s+)*(system\\s+|service\\s+)?architecture\\b",
              "flags": "i",
              "message": "Butir kedua tentang perancangan arsitektur belum berbentuk to-infinitive."
            },
            {
              "pattern": "\\b(designing|design\\s+of)\\s+(the\\s+|our\\s+|a\\s+)?architecture\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Bentuk gerund atau nomina di butir kedua merusak paralelisme daftar; sejajarkan dengan butir lain."
            }
          ],
          "solution": "Our goals for this sprint are to analyze requirements, to design the architecture, and to deploy the service.",
          "susunKode": {
            "question": "Susun tiga butir sasaran sprint ini dengan struktur paralelisme yang sejajar sempurna.",
            "potongan": [
              "Our goals for this sprint are to analyze requirements,",
              "to design the architecture,",
              "and to deploy the service."
            ],
            "pengecoh": [
              "designing the architecture,",
              "and deploying the service."
            ],
            "pemisah": " ",
            "explanation": "Seluruh elemen dalam daftar ini wajib diawali 'to + verb' (to analyze, to design, to deploy) untuk mematuhi kaidah parallelism. Pengecoh 'designing' dan 'and deploying' sering menggoda karena terdengar alami, namun merupakan jebakan yang melanggar keselarasan bentuk gramatikal."
          }
        },
        {
          "kind": "step",
          "id": "beng-7-2",
          "title": "Mengubah Bahasa Birokrasi Menjadi Plain English yang Jelas",
          "explanation": "Penggunaan frasa birokrasi kuno (*legalese/bureaucratese*) seperti `Pursuant to your request` atau `Enclosed herewith please find` membuat e-mail kerja terasa kaku dan berjarak. Standar komunikasi bisnis global modern mengutamakan *Plain English* yang lugas dan efisien: frasa `Pursuant to your request` cukup diganti menjadi `As requested`. Mengganti istilah usang dengan padanan modern mempercepat pemahaman pembaca dan menciptakan nada komunikasi yang kolaboratif. Menulis dalam Plain English membuktikan kepercayaan diri dan kejelasan berpikir.",
          "example": {
            "code": "❌ Pursuant to your request, we have revised the project budget.\n✅ As requested, we have revised the project budget.",
            "output": "Sebelum : 'Pursuant to your request' terdengar kaku seperti dokumen pengadilan kuno.\nSesudah : 'As requested' menyampaikan pesan yang sama secara lugas, sopan, dan modern.",
            "note": "Ganti frasa birokrasi kuno dengan padanan Plain English yang ramah pembaca."
          },
          "instruction": "Skenario: kamu mengirimkan draf anggaran yang telah direvisi kepada manajer proyek. Kalimat di editor menggunakan frasa birokrasi kuno. Ganti frasa pembuka birokrasi usang tersebut menjadi padanan Plain English yang modern, ramah, dan ringkas. Pertahankan klausa utama setelah tanda koma.",
          "starterCode": "Pursuant to your request, we have updated the budget breakdown.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(as\\s+requested|as\\s+you\\s+requested|as\\s+you\\s+asked|as\\s+per\\s+your\\s+request|per\\s+your\\s+request|at\\s+your\\s+request|following\\s+your\\s+request|since\\s+you\\s+asked)\\s*,",
              "flags": "i",
              "message": "Pembukanya belum memakai padanan Plain English yang ringkas dan diikuti koma."
            },
            {
              "pattern": "\\bwe\\s*(’|')?\\s*(ve\\s+|have\\s+)?updated\\s+the\\s+budget\\s+breakdown\\b",
              "flags": "i",
              "message": "Klausa utama setelah koma harus kamu pertahankan: subjek kami memperbarui rincian anggaran."
            },
            {
              "pattern": "\\b(pursuant\\s+to|herewith|heretofore|aforementioned|kindly\\s+be\\s+advised|please\\s+be\\s+advised|in\\s+accordance\\s+with\\s+your\\s+request|attached\\s+herewith)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Frasa birokrasi kuno masih tersisa. Ganti dengan padanan sehari-hari yang modern."
            }
          ],
          "solution": "As requested, we have updated the budget breakdown.",
          "susunKode": {
            "question": "Susun kalimat balasan ini dalam format Plain English yang lugas dan modern.",
            "potongan": [
              "As requested,",
              "we have updated",
              "the budget breakdown."
            ],
            "pengecoh": [
              "Pursuant to your request,",
              "Enclosed herewith,"
            ],
            "pemisah": " ",
            "explanation": "'As requested,' adalah ungkapan Plain English standar yang efisien dan profesional. Pengecoh 'Pursuant to your request,' dan 'Enclosed herewith,' adalah istilah birokrasi usang yang sering menggoda namun merupakan jebakan yang dihindari dalam komunikasi modern."
          }
        },
        {
          "kind": "step",
          "id": "beng-7-3",
          "title": "Menyesuaikan Kalimat Aktif untuk Akuntabilitas dan Pasif untuk Diplomasi",
          "explanation": "Mengetahui kapan harus menggunakan kalimat aktif dan kapan kalimat pasif adalah keterampilan komunikasi tingkat tinggi. Ketika merayakan keberhasilan atau menyatakan kepemilikan tanggung jawab tugas, gunakan kalimat aktif yang tegas (`Our team deployed the security patch`). Sebaliknya, ketika mendokumentasikan kekeliruan konfigurasi yang tidak disengaja dalam laporan insiden publik, kalimat pasif yang diplomatis (`An incorrect configuration parameter was applied`) menghindarkan tim dari budaya saling menyalahkan individu di hadapan umum. Kalibrasi nada ini membangun budaya kerja yang aman secara psikologis dan bertanggung jawab.",
          "example": {
            "code": "❌ John made a stupid mistake and broke the database connection.\n✅ An incorrect connection string was applied during the migration.",
            "output": "Sebelum : menyerang individu secara personal dan tidak profesional.\nSesudah : bentuk pasif diplomatis yang fokus pada akar masalah teknis tanpa menyalahkan individu.",
            "note": "Gunakan bentuk pasif untuk mendeskripsikan error secara objektif tanpa menyerang rekan kerja."
          },
          "instruction": "Skenario: kamu menulis ringkasan penyebab insiden pada laporan pascainsiden publik. Draf di editor menyerang rekan kerja secara personal. Ubah kalimat tersebut menjadi kalimat pasif diplomatis yang fokus pada kesalahan konfigurasi alamat IP selama pembaruan sistem. Pastikan nama individu dihilangkan.",
          "starterCode": "Sarah configured the wrong IP address yesterday.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(was|were|has\\s+been|had\\s+been|got)\\s+(incorrectly\\s+|mistakenly\\s+|wrongly\\s+|accidentally\\s+|erroneously\\s+)?(configured|set|entered|assigned|applied|input)\\b",
              "flags": "i",
              "message": "Kalimatnya belum berbentuk pasif. Bentuk pasif memindahkan sorotan dari orang ke kejadian."
            },
            {
              "pattern": "((incorrect|wrong|invalid|erroneous|mistyped|inaccurate|misconfigured)\\s+IP\\s+address|IP\\s+address\\s+was\\s+(incorrectly|wrongly|mistakenly|erroneously|accidentally))",
              "flags": "i",
              "message": "Sebutkan pokok masalahnya secara spesifik: alamat IP yang salah."
            },
            {
              "pattern": "\\b(during|in|as\\s+part\\s+of|throughout|amid)\\s+(the\\s+|a\\s+|an\\s+|our\\s+)?(\\w+\\s+)?(update|upgrade|maintenance|deployment|rollout|release|patch|migration)\\b",
              "flags": "i",
              "message": "Konteks waktunya belum ada. Sebutkan bahwa hal itu terjadi saat pembaruan sistem berlangsung."
            },
            {
              "pattern": "\\b\\w+\\s+(configured|entered|set|assigned|input)\\s+(the|a|an)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kalimat aktif berpelaku menunjuk siapa yang salah. Untuk laporan publik, hilangkan pelakunya."
            }
          ],
          "solution": "An incorrect IP address was configured during the update.",
          "susunKode": {
            "question": "Susun penjelasan insiden yang diplomatis dan fokus pada masalah teknis ini.",
            "potongan": [
              "An incorrect IP address",
              "was configured",
              "during the update."
            ],
            "pengecoh": [
              "Sarah configured the wrong IP address",
              "stupidly yesterday."
            ],
            "pemisah": " ",
            "explanation": "'An incorrect IP address was configured during the update.' menjelaskan fakta teknis secara objektif tanpa menyudutkan individu di hadapan publik. Pengecoh yang menyebut nama individu adalah jebakan keliru yang melanggar etika komunikasi pelaporan insiden profesional."
          }
        },
        {
          "kind": "step",
          "id": "beng-7-4",
          "title": "Tugas Mengarang: Menyusun Kalimat Penolakan Halus yang Tegas dan Courteous",
          "explanation": "Prinsip *Courteous* (santun) sangat diuji saat kamu harus menolak permintaan diskon atau permintaan fitur di luar ruang lingkup proyek. Penolakan yang kasar seperti `We cannot give you any discount` merusak relasi bisnis. Struktur penolakan yang diplomatis diawali dengan apresiasi kemitraan atau penegasan empati (`While we understand your budget constraints,` atau `Although we appreciate your request,`), diikuti penegasan batasan secara santun (`we are unable to offer additional discounts`), dan ditutup dengan penawaran nilai alternatif (`at this stage.` atau `for this project scope.`). Pola ini mempertahankan integritas harga sekaligus menjaga hubungan baik dengan klien.",
          "example": {
            "code": "❌ No, we cannot lower our price for your company.\n✅ While we understand your budget constraints, we are unable to offer additional discounts at this stage.",
            "output": "Sebelum : penolakan mentah yang dingin dan merusak relasi bisnis.\nSesudah : diawali empati subordinat 'While we understand...', diikuti penolakan santun 'we are unable to'.",
            "note": "Gunakan frasa 'we are unable to' sebagai pengganti kata 'we cannot' yang terkesan kaku."
          },
          "instruction": "Skenario: kamu merespons permintaan diskon tambahan dari calon klien korporat. Tulis SATU kalimat penolakan santun dan diplomatis dalam bahasa Inggris. Unsur wajib: (1) klausa empati pembuka yang memahami kendala anggaran klien, (2) klausa penolakan santun yang menyatakan ketidakmampuan memberikan diskon tambahan, dan (3) keterangan pembatas pada tahap saat ini.",
          "starterCode": "# Tulis satu kalimat penolakan santun (Courteous) di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "((understand|appreciate|recogni[sz]e|acknowledge|sympathi[sz]e|empathi[sz]e|aware|mindful)[\\s\\S]{0,60}(budget|budgetary|financial|cost|pricing|price)|(budget|budgetary|financial|cost|pricing|price)[\\s\\S]{0,60}(understand|appreciate|recogni[sz]e|acknowledge|sympathi[sz]e|empathi[sz]e|aware|mindful))",
              "flags": "i",
              "message": "Klausa empati pembuka belum ada. Tunjukkan dulu bahwa kamu memahami kendala anggaran klien."
            },
            {
              "pattern": "\\b(unable|cannot|can\\s*not|can'?t|not\\s+able|not\\s+in\\s+a\\s+position|won'?t\\s+be\\s+able|no\\s+longer\\s+able|do\\s+not\\s+have\\s+the\\s+flexibility)\\b[\\s\\S]{0,80}\\b(discounts?|price\\s+reductions?|reduced\\s+pricing|lower\\s+pricing|concessions?)\\b",
              "flags": "i",
              "message": "Penolakannya belum tersampaikan. Nyatakan ketidakmampuan memberi potongan harga tambahan dengan nada halus."
            },
            {
              "pattern": "\\b(at\\s+this\\s+(stage|time|point|juncture|moment)|at\\s+present|at\\s+the\\s+moment|currently|right\\s+now|for\\s+now|for\\s+this\\s+(phase|quarter|cycle)|in\\s+the\\s+current\\s+(quarter|cycle|phase))\\b",
              "flags": "i",
              "message": "Tanpa keterangan pembatas waktu, penolakanmu terdengar permanen dan menutup peluang lanjutan."
            },
            {
              "pattern": "\\b(no\\s*[,.!]|absolutely\\s+not|stupid|ridiculous|forget\\s+it|nonsense|obviously\\s+not)",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Penolakan yang blak-blakan atau bernada emosional melanggar prinsip Courteous."
            }
          ],
          "solution": "While we understand your budget constraints, we are unable to offer additional discounts at this stage.",
          "susunKode": {
            "question": "Susun kalimat penolakan santun dan diplomatis ini untuk menjaga relasi klien.",
            "potongan": [
              "While we understand your budget constraints,",
              "we are unable to offer",
              "additional discounts at this stage."
            ],
            "pengecoh": [
              "No, we cannot give you discounts,",
              "because your budget is low."
            ],
            "pemisah": " ",
            "explanation": "'While we understand your budget constraints, we are unable to offer additional discounts at this stage.' menggabungkan empati dan ketegasan kebijakan. Pengecoh 'No, we cannot give you discounts' sering menggoda saat ingin cepat, namun merupakan jebakan kasar yang merusak relasi komersial."
          }
        },
        {
          "kind": "step",
          "id": "beng-7-5",
          "title": "Mengganti Bahasa Bias Gender Menjadi Frasa Netral Inklusif",
          "explanation": "Lingkungan kerja global modern mewajibkan penggunaan bahasa netral gender (*gender-neutral / inclusive language*) untuk menghormati seluruh anggota tim tanpa memandang jenis kelamin. Istilah-istilah tradisional yang bias gender seperti `salesman` digantikan dengan `sales representative`, `chairman` menjadi `chair` atau `chairperson`, dan `manpower` menjadi `workforce` atau `staffing`. Selain itu, ketika merujuk seorang pengguna atau karyawan tunggal yang identitas gendernya tidak spesifik, gunakan kata ganti netral *singular they/their* (`Each developer must verify their local settings`). Bahasa inklusif mencerminkan standar etika kesetaraan korporat internasional.",
          "example": {
            "code": "❌ Every developer must submit his pull request before 5 PM.\n✅ Every developer must submit their pull request before 5 PM.",
            "output": "Sebelum : pronoun 'his' bias gender mengasumsikan seluruh pengembang adalah laki-laki.\nSesudah : pronoun netral 'their' mencakup seluruh gender pengembang secara inklusif.",
            "note": "Gunakan singular 'their' untuk merujuk individu tunggal yang tidak spesifik gendernya."
          },
          "instruction": "Skenario: kamu memperbarui panduan orientasi staf baru perusahaan. Kalimat di editor memuat istilah bias gender dan kata ganti tunggal bias. Perbaiki kalimat tersebut menjadi bahasa inklusif netral gender yang menggunakan sebutan perwakilan penjualan dan kata ganti netral jamak/singular their. Pertahankan kata lainnya.",
          "starterCode": "Each salesman must submit his weekly sales report.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\b(sales\\s+(representatives?|reps?|associates?|agents?|staff|people|person)|salespersons?|salespeople|account\\s+executives?)\\b",
              "flags": "i",
              "message": "Sebutan jabatannya masih belum netral gender. Pakai istilah yang tidak menandai jenis kelamin."
            },
            {
              "pattern": "\\btheir\\b",
              "flags": "i",
              "message": "Kata gantinya belum netral. Pakai bentuk netral yang sah untuk subjek tunggal maupun jamak."
            },
            {
              "pattern": "\\b(must|should|needs?\\s+to|has\\s+to|have\\s+to|is\\s+required\\s+to|are\\s+required\\s+to)\\s+submit\\s+(their|the)\\s+weekly\\s+sales\\s+reports?\\b",
              "flags": "i",
              "message": "Bagian inti kalimat tentang kewajiban menyerahkan laporan penjualan mingguan harus kamu pertahankan."
            },
            {
              "pattern": "\\b(salesman|salesmen|saleswoman|saleswomen|his|her|hers|he\\s+or\\s+she|s/?he|chairman|manpower|businessman)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Masih ada istilah atau kata ganti bias gender di kalimatmu."
            }
          ],
          "solution": "Each sales representative must submit their weekly sales report.",
          "susunKode": {
            "question": "Susun pedoman kerja ini dengan bahasa netral gender yang inklusif.",
            "potongan": [
              "Each sales representative",
              "must submit their",
              "weekly sales report."
            ],
            "pengecoh": [
              "Each salesman must",
              "submit his weekly"
            ],
            "pemisah": " ",
            "explanation": "'Each sales representative must submit their weekly sales report.' adalah bentuk baku bahasa inklusif modern. Pengecoh 'salesman' dan 'his' adalah bentuk bias gender tradisional yang sering menggoda namun merupakan jebakan yang sudah ditinggalkan dalam penulisan profesional."
          }
        },
        {
          "kind": "step",
          "id": "beng-7-6",
          "title": "Tugas Mengarang: Menyusun Pengumuman Jadwal Berdasarkan Prinsip Concrete & Courteous",
          "explanation": "Mengumumkan penundaan jadwal rilis produk memerlukan perpaduan prinsip *Concrete* (fakta dan tanggal baru yang terukur) serta *Courteous* (apresiasi santun atas kesabaran pemangku kepentingan). Pengumuman yang baik diawali penetapan tanggal peluncuran baru yang pasti (`We have rescheduled the platform launch to October 15`), diikuti jaminan kualitas fitur (`to ensure comprehensive security verification`), dan ditutup dengan ucapan terima kasih tulus atas pengertian mitra (`and we sincerely appreciate your patience`). Kombinasi ini menjaga rasa aman dan kepercayaan mitra bisnis terhadap integritas produk.",
          "example": {
            "code": "❌ The release is delayed and we are sorry about it.\n✅ We have rescheduled the platform launch to October 15, and we sincerely appreciate your patience.",
            "output": "Sebelum : pernyataan samar tanpa tanggal pengganti yang konkret.\nSesudah : memuat tanggal pasti (October 15) dan apresiasi profesional yang santun.",
            "note": "Sertakan tanggal baru yang spesifik dan ucapan apresiasi: 'and we appreciate your patience'."
          },
          "instruction": "Skenario: kamu mengumumkan pergeseran tanggal peluncuran sistem kepada para pemangku kepentingan. Tulis SATU kalimat pengumuman profesional yang memenuhi prinsip Concrete dan Courteous. Unsur wajib: (1) subjek dan tindakan penjadwalan ulang peluncuran platform ke tanggal konkret 15 Oktober, dan (2) klausa apresiasi tulus atas kesabaran mitra kerja.",
          "starterCode": "# Tulis satu kalimat pengumuman jadwal baru yang santun dan konkret di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "((reschedul|mov|shift|postpon|push|adjust|revis|reset)\\w*[\\s\\S]{0,60}(launch|release|rollout|go[-\\s]?live|deployment)|(launch|release|rollout|go[-\\s]?live|deployment)[\\s\\S]{0,60}(reschedul|mov|shift|postpon|push|adjust|revis|reset)\\w*)",
              "flags": "i",
              "message": "Tindakan penjadwalan ulang peluncuran platform belum terbaca jelas di kalimatmu."
            },
            {
              "pattern": "\\b(october|oct\\.?)\\s+15\\b|\\b15\\s+(october|oct\\.?)\\b",
              "flags": "i",
              "message": "Prinsip Concrete menuntut tanggal pasti, bukan keterangan waktu yang mengambang."
            },
            {
              "pattern": "\\b(appreciate|thanks?|thank\\s+you|grateful|gratitude)\\b[\\s\\S]{0,50}\\b(patience|understanding|flexibility|support|cooperation)\\b",
              "flags": "i",
              "message": "Klausa apresiasi atas kesabaran mitra kerja belum ada; itu bagian dari prinsip Courteous."
            },
            {
              "pattern": "\\b(some\\s+time\\s+later|sometime\\s+(soon|later)|in\\s+the\\s+near\\s+future|a\\s+later\\s+date|to\\s+be\\s+determined|tbd|asap)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Keterangan waktu yang samar membuat pembaca tidak bisa merencanakan apa pun."
            }
          ],
          "solution": "We have rescheduled the platform launch to October 15, and we sincerely appreciate your patience.",
          "susunKode": {
            "question": "Susun pengumuman pergeseran jadwal ini dengan prinsip Concrete dan Courteous.",
            "potongan": [
              "We have rescheduled the platform launch to October 15,",
              "and we sincerely appreciate",
              "your patience."
            ],
            "pengecoh": [
              "The launch is delayed indefinitely,",
              "sorry for that."
            ],
            "pemisah": " ",
            "explanation": "'We have rescheduled the platform launch to October 15, and we sincerely appreciate your patience.' memberikan kepastian tanggal konkret dan nada santun. Pengecoh 'delayed indefinitely' sering menggoda namun memicu kepanikan dan merupakan jebakan yang melanggar prinsip Concrete."
          }
        },
        {
          "kind": "step",
          "id": "beng-7-7",
          "title": "Memperbaiki Pelanggaran Parallelism pada Kalimat Majemuk",
          "explanation": "Pelanggaran *parallelism* sering terjadi saat menghubungkan dua klausa yang menggunakan kata kerja bantu berpasangan (seperti `not only ... but also ...`). Struktur gramatikal setelah `not only` harus sejajar secara persis dengan struktur setelah `but also`. Jika setelah `not only` berupa kata kerja lampau aktif (`improved query latency`), maka setelah `but also` juga wajib berupa kata kerja lampau aktif (`reduced server memory usage`), bukan klausa pasif atau bentuk nomina baru. Kesejajaran kalimat majemuk menciptakan ritme baca yang meyakinkan dan elegan.",
          "example": {
            "code": "❌ The upgrade not only improved latency, but also memory was reduced by it.\n✅ The upgrade not only improved latency, but also reduced memory usage.",
            "output": "Sebelum : klausa kedua berubah menjadi bentuk pasif yang canggung (melanggar paralelisme).\nSesudah : kedua klausa sejajar menggunakan verb lampau aktif (improved latency ... reduced memory usage).",
            "note": "Pastikan struktur setelah 'not only' dan 'but also' memiliki kelas kata yang sama."
          },
          "instruction": "Skenario: kamu mendokumentasikan manfaat ganda dari pembaruan arsitektur pada ringkasan teknis. Klausa kedua di editor melanggar paralelisme karena berbentuk pasif. Perbaiki bagian setelah but also agar sejajar dengan kata kerja lampau aktif yang menyatakan penurunan penggunaan memori. Pertahankan klausa pertama.",
          "starterCode": "The upgrade not only reduced query latency, but also memory usage was decreased.",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bnot\\s+only\\s+(reduced|lowered|cut|decreased|shortened|slashed|improved|trimmed)\\s+(the\\s+)?(query\\s+|response\\s+)?latency\\b",
              "flags": "i",
              "message": "Klausa pertama setelah `not only` harus kamu pertahankan dalam bentuk kata kerja lampau aktif."
            },
            {
              "pattern": "\\bbut\\s+also\\s+(\\w+ly\\s+)?(decreased|reduced|lowered|cut|dropped|shrank|shrunk|trimmed|slashed|minimi[sz]ed|lessened)\\s+(the\\s+|its\\s+)?memory\\s+(usage|consumption|footprint|use)\\b",
              "flags": "i",
              "message": "Bagian setelah `but also` belum sejajar. Pakai kata kerja lampau aktif yang langsung diikuti objeknya."
            },
            {
              "pattern": "\\bmemory\\s+(usage|consumption|footprint|use)\\s+(was|were|has\\s+been|had\\s+been|got)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Klausa pasif setelah `but also` tidak sejajar dengan klausa aktif sebelum `not only`."
            }
          ],
          "solution": "The upgrade not only reduced query latency, but also decreased memory usage.",
          "susunKode": {
            "question": "Susun kalimat majemuk ini dengan struktur paralelisme berpasangan yang tepat.",
            "potongan": [
              "The upgrade not only reduced query latency,",
              "but also decreased",
              "memory usage."
            ],
            "pengecoh": [
              "but also memory usage",
              "was decreased by the upgrade."
            ],
            "pemisah": " ",
            "explanation": "Kaidah 'not only [verb] ... but also [verb]' mewajibkan kata kerja sejajar ('reduced query latency ... decreased memory usage'). Pengecoh berkonstruksi pasif sering menggoda namun merupakan jebakan yang merusak kesejajaran struktur kalimat majemuk."
          }
        },
        {
          "kind": "step",
          "id": "beng-7-8",
          "title": "Tugas Mengarang: Menyusun Ringkasan Kebijakan Baru yang Transparan dan Bebas Ambiguitas",
          "explanation": "Menyusun ringkasan kebijakan teknis (seperti batasan kuota API) menuntut penerapan prinsip *Clear*, *Concise*, dan *Concrete*. Pernyataan kebijakan yang baik diawali dengan subjek entitas resmi (`To maintain high system availability` atau `Under our updated security policy`), diikuti aturan pembatasan terukur (`our API enforces a strict rate limit of 100 requests per minute`), dan subjek pengguna yang terdampak (`for all standard accounts.`). Keterbukaan aturan tanpa celah interpretasi mencegah keluhan dan kebingungan pengguna integrasi.",
          "example": {
            "code": "❌ We might limit your API calls if the server gets too busy.\n✅ To maintain system stability, our API enforces a rate limit of 100 requests per minute for standard accounts.",
            "output": "Sebelum : kebijakan mengambang dengan kata samar 'might' dan 'too busy'.\nSesudah : memuat alasan stabilitas, kata kerja penegakan 'enforces', dan angka kuota 100 req/min.",
            "note": "Sebutkan angka batasan spesifik dan kategori akun yang terkena dampak secara transparan."
          },
          "instruction": "Skenario: kamu menyusun pengumuman kebijakan pembatasan kuota API baru untuk para pengembang eksternal. Tulis SATU kalimat pernyataan kebijakan yang transparan dan konkret dalam bahasa Inggris. Unsur wajib: (1) klausa tujuan pembuka penegakan stabilitas sistem, (2) subjek dan kata kerja penegakan batas kuota oleh sistem API, (3) penyebutan angka kuota spesifik 100 permintaan per menit, dan (4) sasaran kategori akun standar.",
          "starterCode": "# Tulis satu kalimat pernyataan kebijakan kuota API yang konkret di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bto\\s+(ensure|maintain|preserve|protect|guarantee|safeguard|support|improve|uphold)\\s+(system\\s+|platform\\s+|service\\s+|overall\\s+|our\\s+|high\\s+)*(stability|reliability|availability|uptime|performance)\\b",
              "flags": "i",
              "message": "Klausa tujuan pembuka belum ada. Jelaskan dulu bahwa kebijakan ini demi kestabilan sistem."
            },
            {
              "pattern": "\\b(api|platform|system|service|gateway)s?\\s+(now\\s+|will\\s+|currently\\s+|automatically\\s+)?(enforces?|applies|imposes|caps|limits|restricts|throttles)\\b",
              "flags": "i",
              "message": "Subjek dan kata kerja penegakannya belum jelas. Sebutkan siapa yang memberlakukan batas itu."
            },
            {
              "pattern": "\\b100\\s+(api\\s+calls?|requests?|calls?)\\s+(per|a|each|every)\\s+minute\\b",
              "flags": "i",
              "message": "Angka kuotanya belum konkret. Sebutkan batas 100 permintaan per menit secara eksplisit."
            },
            {
              "pattern": "\\bstandard[-\\s](tier\\s+|plan\\s+)?accounts?\\b|\\bstandard\\s+(plan|tier)\\b|\\baccounts?\\s+on\\s+the\\s+standard\\b",
              "flags": "i",
              "message": "Sasaran kebijakannya belum disebut. Nyatakan kategori akun standar yang terkena batas ini."
            },
            {
              "pattern": "\\b(might\\s+limit|may\\s+sometimes|sometimes|maybe|possibly|too\\s+busy|as\\s+needed|a\\s+few\\s+requests)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Bahasa mengambang membuat kebijakan tidak bisa dipegang pembaca."
            }
          ],
          "solution": "To ensure system stability, our API enforces a rate limit of 100 requests per minute for standard accounts.",
          "susunKode": {
            "question": "Susun pernyataan kebijakan kuota API yang konkret dan transparan ini.",
            "potongan": [
              "To ensure system stability,",
              "our API enforces a rate limit of 100 requests per minute",
              "for standard accounts."
            ],
            "pengecoh": [
              "We might limit your requests",
              "whenever the server gets busy."
            ],
            "pemisah": " ",
            "explanation": "'To ensure system stability, our API enforces a rate limit of 100 requests per minute for standard accounts.' menyajikan kebijakan yang transparan, terukur, dan profesional. Pengecoh 'We might limit your requests whenever...' sering menggoda karena informal, namun merupakan jebakan ambigu yang tidak memenuhi standar dokumentasi API enterprise."
          }
        },
        {
          "kind": "quiz",
          "id": "beng-7-k1",
          "title": "Kuis: Prinsip 7C, Active/Passive Voice, Parallelism, dan Tone",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Kamu sedang mengaudit draf pengumuman berdasarkan prinsip 'Concrete' (Konkret) dalam kerangka 7 Cs. Manakah pernyataan yang paling memenuhi prinsip tersebut?",
              "choices": [
                "A. 'We improved system performance significantly and reduced latency by a large amount.'",
                "B. 'Our optimization reduced query latency by 45% and decreased monthly hosting costs by $3,200.'",
                "C. 'The platform is running much faster than before and everyone is very satisfied.'",
                "D. 'System metrics look awesome after the engineering team did some magic.'"
              ],
              "answerIndex": 1,
              "explanation": "Prinsip Concrete menuntut bukti nyata berupa angka pasti dan fakta objektif ('reduced query latency by 45%', 'decreased monthly costs by $3,200'), bukan klaim kabur seperti 'significantly' atau 'large amount'."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Kamu sedang memeriksa catatan risalah rapat berikut: 'The team's goals for this sprint are to analyze requirements, to design the architecture, and [...].' Frasa manakah yang menjaga PARALLELISM?",
              "choices": [
                "A. deploying the microservice",
                "B. to deploy the microservice",
                "C. deployment of the service",
                "D. we will deploy the service"
              ],
              "answerIndex": 1,
              "explanation": "Struktur sejajar (parallelism) menuntut bentuk gramatikal yang seragam: 'to analyze...', 'to design...', dan 'to deploy...'. Menggunakan gerund atau kata benda di item ketiga merusak keselarasan kalimat."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Dalam situasi pelaporan insiden jaringan ke publik, kapan penggunaan kalimat pasif diplomatis ('An incorrect IP address was configured during the update') LEBIH TEPAT dibandingkan kalimat aktif?",
              "choices": [
                "A. Ketika manajemen ingin menutupi kegagalan agar tidak ada yang bertanggung jawab.",
                "B. Setiap kali insiden melibatkan sistem jaringan komputer.",
                "C. Ketika fokus komunikasi adalah menjelaskan kejadian secara objektif kepada klien tanpa mempermalukan atau menunjuk individu rekan kerja tertentu di ranah publik.",
                "D. Kalimat pasif tidak pernah boleh digunakan dalam situasi apa pun."
              ],
              "answerIndex": 2,
              "explanation": "Kalimat pasif berguna dalam diplomasi bisnis untuk memusatkan perhatian pada penyelesaian masalah tanpa melakukan tuduhan personal yang merusak dinamika tim di hadapan publik."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menelaah korespondensi formal rekan tim: 'Pursuant to your request, please be advised that the report is attached herewith.' Bagaimanakah cara mengubahnya menjadi Plain English modern?",
              "choices": [
                "A. In accordance with your aforementioned desire, we advise that the file is here.",
                "B. We hereby declare that the requested file has been attached hereto.",
                "C. As per aforementioned communication, please find attached the report.",
                "D. As requested, I have attached the report."
              ],
              "answerIndex": 3,
              "explanation": "Gerakan Plain English mengganti frasa birokrasi kuno ('Pursuant to your request, please be advised...') menjadi ungkapan lugas sehari-hari: 'As requested, I have attached the report.'"
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Perusahaanmu menerapkan kebijakan komunikasi inklusif (*inclusive workplace communication*). Manakah kalimat berikut yang menggunakan bahasa netral gender secara profesional?",
              "choices": [
                "A. Each sales representative must submit his weekly sales report by Friday.",
                "B. Each sales representative must submit their weekly sales report by Friday.",
                "C. Each sales representative must submit his or her weekly sales report by Friday.",
                "D. All salesman must submit his weekly sales report by Friday."
              ],
              "answerIndex": 1,
              "explanation": "Penggunaan singular 'their' diakui secara internasional sebagai bentuk netral gender yang ringkas dan alami, menggantikan bentuk bias 'his' atau bentuk kaku 'his/her'."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Kamu menyusun draf penolakan atas permohonan diskon klien enterprise. Manakah kalimat penolakan yang paling memenuhi prinsip 'Courteous' (Sopan namun Tegas)?",
              "choices": [
                "A. 'While we understand your budget constraints, we are unable to offer additional discounts at this stage.'",
                "B. 'No, our prices are completely fixed and we do not give discounts to anyone.'",
                "C. 'You must pay our standard prices or we cannot do business together.'",
                "D. 'Maybe if you ask again next year we could think about giving you a small discount.'"
              ],
              "answerIndex": 0,
              "explanation": "Pilihan A mengakui kendala klien secara santun ('While we understand...'), namun menyatakan batas kebijakan perusahaan secara tegas dan profesional tanpa merusak hubungan kemitraan."
            }
          ]
        }
      ]
    },
    {
      "slug": "dokumen-bisnis",
      "title": "Dokumen Bisnis",
      "description": "Format baku yang dipakai di tempat kerja: e-mail dan netiquette, memo, surat, proposal, laporan, résumé, dan sales message.",
      "topics": [
        "Text message dan e-mail: netiquette",
        "Subject line dan kalimat pembuka e-mail",
        "Memorandum dan surat resmi",
        "Business proposal",
        "Report",
        "Résumé dan cover letter",
        "Sales message"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "beng-8-m1",
          "title": "Format Baku Komunikasi Digital: E-mail, Netiquette, dan Memorandum",
          "body": "# Format Bukan Formalitas, Melainkan Peta Navigasi Pembaca\n\nSetiap dokumen bisnis memiliki format baku yang diakui secara internasional. Bentuk baku ini bukan diciptakan untuk membatasi kreativitas, melainkan agar **pembaca yang sangat sibuk dapat menemukan informasi kunci dalam hitungan detik tanpa harus membaca seluruh teks dari awal sampai akhir**. Seorang manajer yang membuka memo tahu bahwa inti keputusan berada di baris pertama; seorang perekrut yang membuka résumé tahu bahwa rekam jejak pencapaian kuantitatif berada tepat di bawah jabatan kerja. Melanggar format baku memaksa pembaca mencari-cari, dan di dunia kerja, pembaca yang merasa kesulitan akan segera beralih ke dokumen berikutnya.\n\n| Dokumen Bisnis | Panjang Efektif | Yang Pertama Kali Dicari Pembaca |\n| --- | --- | --- |\n| **E-mail Kerja** | 3–8 kalimat | Apa inti informasi dan apa tindakan yang diminta dariku? |\n| **Memorandum (Memo)** | 1 halaman | Keputusan internal apa yang diambil dan siapa tim yang terdampak? |\n| **Surat Resmi (Letter)** | 1–2 halaman | Pernyataan resmi dan siapa pihak eksekutif yang bertanggung jawab? |\n| **Business Proposal** | 2–10 halaman | Apa masalahnya, apa solusi yang ditawarkan, berapa biayanya, dan kapan selesai? |\n| **Business Report** | 3–20 halaman | Ringkasan eksekutif (*Executive Summary*), temuan data, dan rekomendasi aksi. |\n| **Résumé & Cover Letter** | 1–2 halaman | Bukti pencapaian kuantitatif lampau dan kecocokan spesifik dengan posisi. |\n| **Sales Message** | 1 layar baca | Apa manfaat nyata bagi bisnis saya dan bagaimana langkah uji coba berikutnya? |\n\n## Anatomi E-mail Bisnis Profesional\n\nSebuah e-mail bisnis yang berkinerja tinggi memiliki lima bagian anatomi standar:\n\n```text\n1. SUBJECT LINE: [Topik Spesifik] — [Tindakan Diminta / Tenggat]\n   Contoh: \"Subject: Q3 Cloud Budget Proposal — Approval Required by April 15\"\n   ^ Harus dapat dimengerti dan dicari di kotak masuk (inbox) tanpa harus dibuka.\n\n2. PROFESSIONAL SALUTATION: Sapaan formal atau semi-formal\n   Contoh: \"Dear Ms. Jenkins,\" (formal) atau \"Hi Sarah,\" (rekan kerja reguler).\n\n3. OPENING / BLUF: Inti pesan dan konteks utama di kalimat pertama\n   Contoh: \"I have attached the revised Q3 cloud infrastructure budget proposal for your review.\"\n\n4. BODY & CALL TO ACTION: Rincian butir dan permintaan tenggat yang santun\n   Contoh: \"Could you please review the attached breakdown and provide your approval before Friday?\"\n\n5. SIGN-OFF & SIGNATURE: Penutup profesional dan kontak penanggung jawab\n   Contoh: \"Best regards,\nBimo Daffa\nLead DevOps Engineer\"\n```\n\n## Netiquette: Etika Korespondensi Digital Modern\n\nEtika komunikasi tertulis (*netiquette*) menetapkan batas-batas kepatutan di dunia kerja digital:\n\n```text\n- HURUF KAPITAL SEMUA (ALL CAPS)   -> Terbaca sebagai teriakan atau kemarahan emosional.\n- Reply All Tanpa Seleksi          -> Membanjiri kotak masuk belasan orang yang tidak berkepentingan.\n- Menyertakan Atasan di Kolom CC   -> Gunakan hanya untuk transparansi keputusan penting, BUKAN ancaman.\n- Tanda Seru Berlebihan (!!!)      -> Menurunkan kesan ketenangan dan profesionalitas emosional.\n- Emotikon dan Emoji               -> Gunakan secara sangat hemat hanya setelah pihak eksternal memulainya.\n```\n\n## Memorandum (Memo): Format Baku Komunikasi Internal\n\nMemo digunakan khusus untuk komunikasi resmi antardepartemen di dalam satu organisasi. Ciri khas memo adalah memiliki **kepala baku empat baris berhuruf kapital** dan **tidak menggunakan salam pembuka (*Dear...*) maupun salam penutup (*Sincerely...*)**:\n\n```text\nMEMORANDUM\n\nTO:       All Engineering Staff\nFROM:     David Mitchell, VP of Engineering\nDATE:     October 10, 2026\nSUBJECT:  Mandatory Multi-Factor Authentication Migration\n\n[Isi langsung membahas latar belakang kebijakan dan linimasa kepatuhan]\n```\n\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Menggunakan subject line e-mail yang terlalu umum.** Menulis `Subject: Meeting` atau `Subject: Info` menyulitkan pencarian arsip dan memperlambat respons penerima.\n2. **Menambahkan salam pembuka atau penutup pada memo internal.** Memo tidak pernah menggunakan `Dear...` atau `Sincerely...`.\n3. **Menggunakan huruf kapital semua (ALL CAPS) dalam pesan kerja.** Hal ini dianggap sebagai teriakan emosional dan melanggar netiquette.\n\n## Kaitan ke Dunia Kerja\n\nDi era kerja terdistribusi (*remote work*), sebagian besar reputasi profesionalmu dibangun melalui kualitas e-mail dan memo yang kamu kirimkan setiap hari. Subject line yang jelas dan pesan yang ringkas memastikan pekerjaanmu diprioritaskan oleh rekan kerja dan pimpinan tim."
        },
        {
          "kind": "materi",
          "id": "beng-8-m2",
          "title": "Dokumen Penentu: Business Proposal, Report, Résumé, dan Sales Message",
          "body": "# Dokumen Pengambil Keputusan Bisnis Tingkat Tinggi\n\nDokumen penentu seperti proposal, laporan bisnis, résumé, dan pesan penjualan memiliki standar struktur yang ketat karena berkaitan langsung dengan persetujuan anggaran dan karier profesional.\n\n## Business Proposal: Menjawab Empat Pertanyaan Inti Klien\n\nSebuah proposal bisnis komersial yang persuasif wajib menjawab empat pertanyaan kunci secara berurutan:\n\n1. **Problem Statement (Pernyataan Masalah)**: Menggambarkan kendala atau kerugian nyata yang dialami klien secara objektif.\n2. **Proposed Solution (Solusi yang Ditawarkan)**: Menawarkan solusi terukur dengan metodologi kerja yang jelas (`We propose upgrading the database infrastructure to achieve 99.9% uptime`).\n3. **Cost Breakdown (Rincian Anggaran & Investasi)**: Menyajikan transparansi biaya lisensi, implementasi, dan pemeliharaan.\n4. **Implementation Schedule (Jadwal & Linimasa)**: Menyajikan peta jalan tonggak pencapaian (*milestones*) yang realistis.\n\n## Business Report dan Posisi Kunci Executive Summary\n\nDalam laporan bisnis formal (*business report*), bagian ringkasan awal untuk manajemen memiliki istilah resmi **Executive Summary**. Istilah seperti `short summary` atau `mini summary` tidak pernah digunakan dalam dokumen resmi korporat. Executive Summary menyajikan latar belakang masalah, temuan kunci data audit, dan rekomendasi keputusan dalam satu atau dua halaman pertama sehingga para pembuat keputusan dapat mengambil tindakan tanpa harus membaca ratusan halaman lampiran teknis.\n\n## Résumé & Cover Letter: Action Verbs Lampau dan Dampak Kuantitatif\n\nPerekrut global dan sistem ATS (*Applicant Tracking System*) memindai résumé untuk mencari bukti dampak pencapaian nyata, bukan daftar tugas pasif:\n\n```text\n❌ Format Tugas Pasif (Lemah): \"Responsible for cloud infrastructure and latency monitoring.\"\n\n✅ Format Dampak Aktif (Kuat): \"Architected the cloud migration pipeline, cutting infrastructure latency from 350ms to 45ms.\"\n   [Action Verb Lampau]        [Objek Proyek]       [Klausa Hasil Gerund + Angka Kuantitatif]\n```\n\nAwali setiap butir résumé dengan kata kerja aksi lampau yang kuat (seperti `Designed`, `Led`, `Architected`, `Automated`, `Reduced`), sebutkan teknologi atau lingkup tanggung jawab, dan tutup dengan metrik kuantitatif terukur (persentase, nilai uang, atau durasi waktu).\n\n## Sales Message: Call to Action (CTA) yang Ringan dan Spesifik\n\nPesan penjualan B2B tidak boleh ditutup dengan kalimat mengambang seperti `Feel free to reach out whenever you like`. Tutup pesan penjualan dengan **Call to Action (CTA)** aktif yang diawali kata kerja perintah (*imperative verb*), meminta tindakan singkat berisiko rendah, dan menyebutkan manfaat langsungnya:\n\n```text\n✅ CTA Konkret: \"Book a 20-minute consultation this week to explore our enterprise security audit.\"\n                [Action Verb: Schedule/Book] [Waktu Ringan] [Manfaat Langsung]\n```\n\n## Jebakan dan Kesalahan yang Sering Terjadi\n\n1. **Menulis résumé hanya berisi daftar tugas pasif.** Selalu sertakan pencapaian kuantitatif dengan rumus: kata kerja lampau + proyek + angka hasil.\n2. **Menutup pesan penawaran penjualan tanpa Call to Action yang jelas.** Gunakan kata kerja imperatif aktif seperti `Book a 15-minute demo`.\n3. **Mengabaikan Executive Summary dalam laporan bisnis panjang.** Para pimpinan hanya punya waktu membaca ringkasan eksekutif sebelum memutuskan persetujuan.\n\n## Kaitan ke Dunia Kerja\n\nButir résumé yang didukung data kuantitatif meningkatkan peluang panggilan wawancara kerja hingga tiga kali lipat. Sementara proposal yang terstruktur dengan Executive Summary yang tajam mempercepat siklus persetujuan kontrak proyek komersial."
        },
        {
          "kind": "step",
          "id": "beng-8-1",
          "title": "Tugas Mengarang: Menyusun Subject Line E-mail yang Spesifik",
          "explanation": "Subject line adalah elemen e-mail yang pertama kali dibaca dan menentukan apakah pesanmu akan segera dibuka, ditunda, atau diabaikan di kotak masuk penerima. Subject line yang terlalu umum seperti `Question`, `Hi`, atau `Updates` menyulitkan pencarian arsip dan tidak mencerminkan urgensi pesan. Pola standar Business English profesional menggabungkan topik proyek utama, tindakan yang diminta, dan batas waktu tenggat yang dipisahkan oleh tanda pemisah dash (`—` atau `-`). Menulis `Subject: Budget Proposal — Approval Required by April 15` atau `Subject: Revised Budget Proposal — Please Approve before 15 April` memberikan kepastian konteks langsung dari kotak masuk pembaca.",
          "example": {
            "code": "❌ Subject: Meeting\n✅ Subject: Q3 Roadmap — Meeting Agenda for Monday",
            "output": "Sebelum : subject line terlalu umum dan membingungkan penerima.\nSesudah : topik spesifik dan konteks rapat langsung terlihat di inbox.",
            "note": "Gunakan pemisah dash (— atau -) untuk memisahkan topik dari tindakan. Format tanggal dapat menggunakan standar American (April 15) maupun British (15 April)."
          },
          "instruction": "Skenario: kamu mengirimkan proposal anggaran yang telah direvisi dan membutuhkan persetujuan atasan sebelum atau paling lambat tanggal 15 April. Tulis SATU subject line e-mail profesional dalam bahasa Inggris. Unsur wajib: (1) topik proposal anggaran di awal (boleh menyertakan 'Revised'), (2) tanda pemisah dash diikuti penegasan kebutuhan tindakan persetujuan (mis. 'Approval Required' atau 'Please Approve'), dan (3) batas tanggal tenggat 15 April (format 'by/before April 15' atau 'by/before 15 April').",
          "starterCode": "# Tulis satu subject line e-mail dengan topik, tindakan, dan tenggat di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(subject\\s*:\\s*)?[^\\n—–-]{0,40}\\b(revised\\s+)?budget\\s+proposal\\b",
              "flags": "i",
              "message": "Topik proposal anggaran ('Budget Proposal' atau 'Revised Budget Proposal') belum kamu cantumkan di bagian awal subject line."
            },
            {
              "pattern": "[—–-]{1,2}\\s*[^\\n]{0,35}(?<!\\bno\\s+)(?<!\\bnot\\s+)\\b(approval\\s+required|please\\s+approve|approval\\s+needed|action\\s+required|sign[-\\s]?off\\s+required|sign[-\\s]?off|authoriz\\w*)\\b",
              "flags": "i",
              "message": "Setelah tanda dash pemisah, sertakan kata permohonan tindakan persetujuan (misalnya 'Approval Required' atau 'Please Approve')."
            },
            {
              "pattern": "\\b(by|before|due|due\\s+by|no\\s+later\\s+than|deadline\\s*:?)\\s+(april\\s+15(th)?|15(th)?(\\s+of)?\\s+april)\\b",
              "flags": "i",
              "message": "Tenggat 15 April belum kamu cantumkan dengan jelas (gunakan format 'by/before April 15' atau 'by/before 15 April')."
            },
            {
              "pattern": "subject\\s*:\\s*(question|hi|hello|meeting|update)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Subjek umum seperti 'Question' atau 'Update' terlalu kabur dan tidak memberi tahu isi proposal."
            },
            {
              "pattern": "\\b(soon|asap|sometime)\\b|(?<!\\bno\\s+)later\\b(?!\\s+than)",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Kata samar seperti 'soon' atau 'asap' tidak memberikan kepastian tenggat. Cantumkan tanggal konkret 15 April."
            },
            {
              "pattern": "\\b(reject\\w*|do\\s+not\\s+approve|don't\\s+approve|denied|cancel\\w*|postpone\\w*|no\\s+approval|not\\s+required|without\\s+approval)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Subject line tidak boleh berisi penolakan atau pernyataan bahwa persetujuan tidak diperlukan, karena skenario meminta persetujuan proposal."
            },
            {
              "pattern": "\\b(january|february|march|may|june|july|august|september|october|november|december)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Bulan yang diminta dalam skenario adalah April, bukan bulan lain."
            }
          ],
          "solution": "Subject: Budget Proposal — Approval Required by April 15",
          "susunKode": {
            "question": "Susun subject line e-mail ini agar memuat topik, tindakan, dan tenggat waktu secara spesifik.",
            "potongan": [
              "Subject: Budget Proposal",
              "— Approval Required",
              "by April 15"
            ],
            "pengecoh": [
              "Subject: Question About Budget",
              "— Need Approval Soon"
            ],
            "pemisah": " ",
            "explanation": "'Subject: Budget Proposal — Approval Required by April 15' menggabungkan topik terdefinisi dan tenggat waktu yang jelas. Pengecoh 'Subject: Question About Budget' menggoda karena masih memakai kata 'Question' yang kabur. Pengecoh '— Need Approval Soon' keliru karena kata 'soon' tidak memberikan tanggal tenggat yang konkret."
          }
        },
        {
          "kind": "step",
          "id": "beng-8-2",
          "title": "Tugas Mengarang: Memindahkan Permintaan ke Awal E-mail",
          "explanation": "Dalam etika Business English profesional, menunda inti permintaan di paragraf akhir adalah kesalahan komunikasi yang menghambat pengambilan keputusan. Pembaca e-mail bisnis memindai pesan secara cepat dan ingin mengetahui apa yang dibutuhkan dari mereka sejak kalimat pertama (*Bottom Line Up Front*). Basa-basi yang bertele-tele seperti `I am writing this email to kindly inform you that...` memperlambat laju pesan dan menunda respons. Menggunakan kalimat pembuka langsung berbasis modal permohonan santun seperti `Could you please send us the revised invoice by Friday?` membuat pesanmu terdengar efisien, sopan, dan jelas.",
          "example": {
            "code": "❌ Hope you are doing well. I was wondering if we could possibly get the invoice.\n✅ Could you please send us the revised invoice by Friday?",
            "output": "Sebelum : inti permintaan tersembunyi di balik basa-basi berlebih.\nSesudah : permintaan dokumen dan tenggat waktu dinyatakan langsung di awal.",
            "note": "Kata 'please' atau 'kindly' bersifat opsional setelah subjek 'you'."
          },
          "instruction": "Skenario: kamu memerlukan berkas tagihan yang telah direvisi dari vendor sebelum hari Jumat. Tulis SATU kalimat pembuka permohonan santun dalam format tanya langsung (BLUF) tanpa basa-basi. Unsur wajib: awali dengan kata kerja bantu modal permohonan santun, sebutkan objek dokumen tagihan yang telah direvisi, dan sertakan tenggat waktu hari Jumat.",
          "starterCode": "# Tulis satu kalimat pembuka permohonan santun (BLUF) di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(could|would|can|will)\\s+you\\b",
              "flags": "i",
              "message": "Kalimat kamu belum dibuka dengan modal permohonan santun. Prinsip BLUF menuntut permintaan ada di posisi paling depan."
            },
            {
              "pattern": "\\b(revised|updated|corrected|amended|reviewed)\\s+invoice\\b",
              "flags": "i",
              "message": "Objek yang kamu minta belum jelas: sebut dokumen tagihan versi revisinya."
            },
            {
              "pattern": "\\b(by|before|on|no\\s+later\\s+than)\\s+friday\\b",
              "flags": "i",
              "message": "Tanpa tenggat hari Jumat, penerima tidak tahu kapan kamu membutuhkan berkasnya."
            },
            {
              "pattern": "\\?\\s*$",
              "flags": "i",
              "message": "Permohonan langsung ini seharusnya berbentuk pertanyaan, jadi tutup dengan tanda tanya."
            },
            {
              "pattern": "i\\s+am\\s+writing\\s+(this\\s+)?(email|e-mail|to)",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Pembuka bertele-tele menunda inti pesan kamu — itu justru kebalikan dari BLUF."
            }
          ],
          "solution": "Could you please send us the revised invoice by Friday?",
          "susunKode": {
            "question": "Susun kalimat pembuka e-mail ini agar langsung menyatakan permintaan secara santun dan efisien.",
            "potongan": [
              "Could you please send us",
              "the revised invoice",
              "by Friday?"
            ],
            "pengecoh": [
              "I am writing to ask for",
              "the invoice revision"
            ],
            "pemisah": " ",
            "explanation": "'Could you please send us the revised invoice by Friday?' menaruh permintaan dokumen langsung di awal dengan modal santun. Pengecoh 'I am writing to ask for' menggoda karena kebiasaan basa-basi penutur Indonesia. Pengecoh 'the invoice revision' keliru secara pembentukan frasa kata benda."
          }
        },
        {
          "kind": "step",
          "id": "beng-8-3",
          "title": "Mengubah Butir Résumé Menjadi Kata Kerja Lampau + Angka",
          "explanation": "Perekrut global dan sistem penyeleksi ATS tidak mencari deskripsi tanggung jawab pasif seperti `Responsible for...` atau `In charge of...`. Butir résumé yang berkinerja tinggi selalu diawali dengan kata kerja aksi lampau (*action verb*) yang diikuti lingkup proyek, dan diakhiri dengan klausa hasil berbentuk gerund yang menyertakan data persentase konkret. Mengubah deskripsi tugas pasif menjadi `Rebuilt the company website, reducing page load time by 40%` membuktikan dampak keberhasilan nyata dari pekerjaanmu. Struktur berbasis hasil ini memperlihatkan kontribusi bernilai tinggi bagi bisnis.",
          "example": {
            "code": "❌ In charge of customer support ticket management.\n✅ Resolved over 500 client tickets monthly, achieving a 98% satisfaction rating.",
            "output": "Sebelum : sekadar menyebutkan tugas harian pasif tanpa bukti keberhasilan.\nSesudah : action verb lampau aktif + jumlah tiket + angka persentase kepuasan.",
            "note": "Format persentase dapat ditulis '40%' atau '40 percent'."
          },
          "instruction": "Skenario: kamu memperbarui profil résumé untuk posisi Senior Web Developer. Ubah deskripsi tugas pasif di editor menjadi satu butir résumé berbasis pencapaian aktif. Unsur wajib: (1) kata kerja aksi lampau dan objek pembangunan ulang situs web perusahaan di awal, (2) tanda koma diikuti klausa hasil gerund pemangkasan waktu muat halaman, dan (3) persentase penurunan performa sebesar 40 persen.",
          "starterCode": "Responsible for website optimization.",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(rebuilt|redesigned|revamped|overhauled|rewrote|redeveloped|modernized|refactored|rearchitected|reengineered|re-engineered|optimized)\\b",
              "flags": "i",
              "message": "Butir résumé kamu belum dibuka dengan kata kerja aksi bentuk lampau yang menonjolkan pencapaian."
            },
            {
              "pattern": "\\bwebsite\\b",
              "flags": "i",
              "message": "Objek pekerjaannya belum kamu sebutkan: situs web perusahaan yang kamu bangun ulang."
            },
            {
              "pattern": ",\\s*\\w+ing\\b[^.\\n]*\\bload(ing)?\\s+time\\b",
              "flags": "i",
              "message": "Hasil kerjanya belum kamu sambungkan dengan koma + klausa gerund yang menyebut waktu muat halaman."
            },
            {
              "pattern": "\\b40\\s*(%|percent\\b)",
              "flags": "i",
              "message": "Pencapaian kamu belum terukur. Cantumkan angka penurunan 40 persen supaya dampaknya terbukti."
            },
            {
              "pattern": "\\bresponsible\\s+for\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Frasa pasif ini hanya menyebut tugas, bukan hasil yang kamu capai."
            }
          ],
          "solution": "Rebuilt the company website, reducing page load time by 40%.",
          "susunKode": {
            "question": "Susun butir résumé ini dengan kata kerja aksi lampau dan data pencapaian kuantitatif.",
            "potongan": [
              "Rebuilt the company website,",
              "reducing page load time",
              "by 40%."
            ],
            "pengecoh": [
              "Responsible for rebuilding website,",
              "reduce page load time"
            ],
            "pemisah": " ",
            "explanation": "'Rebuilt the company website, reducing page load time by 40%.' menyajikan pencapaian kerja terukur yang sangat disukai perekrut dan ATS. Pengecoh 'Responsible for rebuilding website,' menggoda karena kebiasaan lama menulis daftar tugas pasif. Pengecoh 'reduce page load time' keliru karena tidak menggunakan bentuk gerund 'reducing' setelah koma."
          }
        },
        {
          "kind": "step",
          "id": "beng-8-4",
          "title": "Menyusun Ringkasan Eksekutif (Executive Summary): Menyajikan Temuan Kunci dan Rekomendasi Tindakan",
          "explanation": "Executive Summary adalah bagian terpenting dari sebuah business report atau proposal karena sering kali menjadi satu-satunya bagian yang dibaca secara lengkap oleh para pengambil keputusan (C-level executives dan direktur). Berbeda dari sekadar deskripsi kegiatan, sebuah ringkasan eksekutif yang efektif wajib menyandingkan dua unsur inti secara terstruktur: data temuan kunci (key findings) dan rekomendasi tindakan yang jelas (actionable recommendation). Menyajikan narasi pasif seperti 'tim memeriksa log' tanpa menyebutkan temuan dan arah tindakan membuat pimpinan kehilangan gambaran strategis. Dengan memadukan temuan konkret dan rekomendasi keputusan, dokumenmu langsung menggerakkan tindakan nyata di lingkungan kerja.",
          "example": {
            "code": "❌ The IT committee reviewed user complaints and surveyed thirty staff members over two months.\n✅ Based on our security audit, unauthorized login attempts rose by 30%; therefore, we recommend enforcing multi-factor authentication for all staff.",
            "output": "Sebelum : narasi pasif tentang aktivitas tim tanpa data temuan dan tanpa arahan tindakan.\nSesudah : menyajikan temuan data audit (lonjakan 30%) dan rekomendasi keputusan yang jelas.",
            "note": "Executive Summary harus langsung memberi tahu pimpinan apa masalahnya dan tindakan apa yang direkomendasikan."
          },
          "instruction": "Skenario: kamu menyusun ringkasan eksekutif (Executive Summary) pembuka untuk laporan evaluasi infrastruktur sistem setebal 80 halaman kepada dewan direksi. Draf awal di editor hanya berisi narasi pasif tanpa temuan dan tanpa arahan keputusan: 'The team reviewed the system logs and database metrics over three months.' Tulis ulang draf tersebut menjadi SATU kalimat Executive Summary profesional yang menyandingkan: (1) temuan kunci bahwa latensi kueri (query latency) mengalami lonjakan 45%, dan (2) rekomendasi tindakan tegas (mis. diawali kata transisi seperti 'therefore, we recommend') untuk bermigrasi ke kluster PostgreSQL terkelola (*managed PostgreSQL cluster*).",
          "starterCode": "The team reviewed the system logs and database metrics over three months.",
          "language": "text",
          "tests": [
            {
              "pattern": "(?:\\b(audit|findings?|data|metrics?|analysis|investigation)\\b[^;.]*)?\\b(query\\s+)?(latency|response\\s+times?)\\b[^;.]*\\b(increased|rose|jumped|grew|surged|spiked)\\s+by\\s+45\\s*(%|percent\\b)",
              "flags": "i",
              "message": "Sertakan temuan kunci bahwa query latency mengalami lonjakan sebesar 45%."
            },
            {
              "pattern": "\\b(therefore|consequently|as\\s+a\\s+result)\\s*,\\s*(we\\s+)?recommend\\b|\\bwe\\s+(therefore\\s+)?recommend\\b|;\\s*we\\s+recommend\\b",
              "flags": "i",
              "message": "Hubungkan temuan dengan rekomendasi tindakan menggunakan transisi logis (mis. '; therefore, we recommend')."
            },
            {
              "pattern": "\\brecommend\\s+(migrating|upgrading|transitioning|moving)\\s+to\\s+(a\\s+)?(managed\\s+)?postgresql\\s+cluster\\b",
              "flags": "i",
              "message": "Sertakan rekomendasi tindakan yang jelas kepada direksi untuk bermigrasi ke kluster PostgreSQL."
            },
            {
              "pattern": "\\b(reviewed\\s+the\\s+system\\s+logs\\s+and\\s+database\\s+metrics|only\\s+looked\\s+at\\s+logs|did\\s+not\\s+recommend)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Hilangkan narasi proses pasif lama. Executive Summary harus berfokus pada hasil temuan dan rekomendasi."
            },
            {
              "pattern": "\\b(short\\s+summary|brief\\s+overview|quick\\s+recap)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Hindari frasa deskriptif umum. Fokus pada isi temuan dan rekomendasi tindakan."
            }
          ],
          "solution": "Based on our technical audit, query latency increased by 45%; therefore, we recommend migrating to a managed PostgreSQL cluster.",
          "susunKode": {
            "question": "Susun potongan kalimat ini menjadi satu kalimat Executive Summary utuh yang memuat data temuan audit dan rekomendasi keputusan.",
            "potongan": [
              "Based on our technical audit, query latency increased by 45%;",
              "therefore, we recommend",
              "migrating to a managed PostgreSQL cluster."
            ],
            "pengecoh": [
              "we only reviewed database logs without recommendations;",
              "therefore, no action is needed"
            ],
            "pemisah": " ",
            "explanation": "'Based on our technical audit, query latency increased by 45%; therefore, we recommend migrating to a managed PostgreSQL cluster.' merupakan struktur Executive Summary baku yang menghubungkan temuan data (finding) dengan arahan keputusan (recommendation). Pengecoh narasi pasif 'we only reviewed database logs without recommendations;' menggoda karena terdengar seperti deskripsi kerja biasa, namun merupakan jebakan laporan buruk yang tidak memberi simpulan hasil bagi pimpinan. Pengecoh 'therefore, no action is needed' bertentangan dengan kebutuhan penyelesaian lonjakan latensi."
          }
        },
        {
          "kind": "step",
          "id": "beng-8-5",
          "title": "Tugas Mengarang: Menyusun Solusi Spesifik dalam Business Proposal",
          "explanation": "Proposal bisnis (*business proposal*) harus menawarkan solusi teknologi yang konkret dengan hasil yang dapat diukur, bukan janji-janji samar tanpa metodologi. Pernyataan seperti `We will fix your server problems` terdengar amatir dan tidak memberikan kepastian evaluasi kepada calon klien. Pola penulisan solusi proposal yang efektif diawali dengan frasa usulan formal `We propose [gerund]...` yang diikuti dengan objek infrastruktur (`the server infrastructure`) dan ditutup dengan sasaran manfaat bisnis terukur (`to achieve 99.9% uptime`). Pendekatan berbasis hasil kuantitatif ini memberikan keunggulan kompetitif yang nyata saat memenangkan persaingan tender.",
          "example": {
            "code": "❌ We will make your database work much better.\n✅ We propose implementing a dedicated caching layer to achieve a 50% reduction in query latency.",
            "output": "Sebelum : janji umum tanpa metodologi teknis dan target angka pencapaian.\nSesudah : tindakan spesifik (implementing cache) + hasil terukur (50% latency reduction).",
            "note": "Rumus: We propose [Verb-ing] [Objek] to achieve [Metrik Terukur]."
          },
          "instruction": "Skenario: kamu menyusun bagian solusi teknis pada proposal peningkatan infrastruktur server klien. Tulis SATU kalimat pernyataan solusi proposal resmi dalam bahasa Inggris. Unsur wajib: (1) frasa proposisi formal peningkatan infrastruktur server di awal, dan (2) klausa tujuan pencapaian target tingkat ketersediaan 99.9 persen.",
          "starterCode": "# Tulis satu kalimat solusi proposal dengan usulan dan target ketersediaan di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(we|our\\s+team)\\s+(propose|proposes|recommend|recommends|suggest|suggests|are\\s+proposing|would\\s+like\\s+to\\s+propose)\\b",
              "flags": "i",
              "message": "Kalimat solusi proposal kamu belum dibuka dengan frasa proposisi formal."
            },
            {
              "pattern": "\\b(upgrad\\w*|modern\\w*|overhaul\\w*|expand\\w*|enhanc\\w*|strengthen\\w*|rebuild\\w*|scal\\w*)\\b[^.\\n]*\\bserver\\s+infrastructure\\b",
              "flags": "i",
              "message": "Usulan kamu belum menyebut tindakan peningkatan atas infrastruktur server klien."
            },
            {
              "pattern": "\\b(to|in\\s+order\\s+to)\\s+(achieve|reach|attain|deliver|guarantee|ensure|maintain|provide|hit|secure)\\b",
              "flags": "i",
              "message": "Belum ada klausa tujuan, jadi pembaca tidak tahu hasil apa yang mau kamu capai."
            },
            {
              "pattern": "\\b99\\.9\\s*(%|percent)\\s*(uptime|availability)\\b",
              "flags": "i",
              "message": "Target ketersediaan 99.9 persen belum kamu cantumkan sebagai ukuran keberhasilan."
            },
            {
              "pattern": "\\bwe\\s+will\\s+fix\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Janji samar seperti ini tidak menjelaskan apa yang kamu usulkan maupun targetnya."
            }
          ],
          "solution": "We propose upgrading the server infrastructure to achieve 99.9% uptime.",
          "susunKode": {
            "question": "Susun pernyataan solusi proposal bisnis ini dengan frasa proposisi dan sasaran terukur.",
            "potongan": [
              "We propose upgrading",
              "the server infrastructure",
              "to achieve 99.9% uptime."
            ],
            "pengecoh": [
              "We will fix your server problems",
              "to achieving 99.9% uptime."
            ],
            "pemisah": " ",
            "explanation": "'We propose upgrading the server infrastructure to achieve 99.9% uptime.' menyajikan solusi metodologis dengan target ketersediaan terukur. Pengecoh 'We will fix...' sering menggoda penulis namun terdengar samar dan merupakan jebakan yang tidak profesional untuk proposal komersial. Pengecoh 'to achieving' adalah bentuk keliru secara tata bahasa."
          }
        },
        {
          "kind": "step",
          "id": "beng-8-6",
          "title": "Menyusun Call to Action (CTA) Konkret dalam Sales Message",
          "explanation": "Pesan penjualan bisnis (*sales message*) tidak boleh ditutup dengan kalimat pasif mengambang seperti `Let us know if you are interested` atau `Hope to hear from you soon`. Penutup yang pasif membebankan inisiatif berpikir kepada calon klien sehingga tingkat konversi penjualan menjadi sangat rendah. *Call to Action* (CTA) yang efektif selalu diawali kata kerja perintah aktif (`Schedule`, `Book`, atau `Reserve`), menawarkan aktivitas singkat berisiko rendah yang menggunakan compound modifier ber-hyphen (`a 15-minute demo`), menyebutkan waktu segera (`today`), dan menjelaskan tujuannya (`to see how our software works`). Instruksi langkah berikutnya yang konkret secara signifikan meningkatkan respons klien.",
          "example": {
            "code": "❌ Contact us whenever you have free time.\n✅ Book a 15-minute demo today to see how our platform streamlines deployment.",
            "output": "Sebelum : penutup mengambang tanpa kejelasan langkah berikutnya.\nSesudah : CTA aktif diawali kata kerja 'Book', durasi 15 menit ber-hyphen, dan tujuan jelas.",
            "note": "Perhatikan penulisan compound modifier '15-minute demo' wajib menggunakan tanda hyphen."
          },
          "instruction": "Skenario: kamu menyusun kalimat penutup Call to Action (CTA) pada e-mail penawaran software ke calon klien korporat. Ubah penutup pasif di editor menjadi CTA aktif yang bertenaga. Unsur wajib: (1) kata kerja perintah imperatif aktif di awal kalimat, (2) tawaran demo berdurasi 15 menit pada hari ini dengan compound modifier ber-hyphen, dan (3) klausa tujuan untuk melihat cara kerja perangkat lunak.",
          "starterCode": "Let us know if you are interested.",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(schedule|book|reserve|claim|grab|request|start|get|set\\s+up|sign\\s+up\\s+for)\\b",
              "flags": "i",
              "message": "CTA kamu belum dibuka dengan kata kerja perintah imperatif yang mendorong tindakan."
            },
            {
              "pattern": "\\b15-minute\\s+demo\\b",
              "flags": "i",
              "message": "Tawarannya belum spesifik: sebut demo 15 menit dengan compound modifier ber-hyphen."
            },
            {
              "pattern": "\\btoday\\b",
              "flags": "i",
              "message": "Tanpa penanda waktu `today`, ajakan kamu kehilangan dorongan untuk bertindak sekarang."
            },
            {
              "pattern": "\\bto\\s+(see|learn|discover|find\\s+out|explore|watch|understand)\\b[^.\\n]*\\bhow\\b[^.\\n]*\\b(software|platform|product|app|tool|system)\\b",
              "flags": "i",
              "message": "Klausa tujuannya belum ada: jelaskan bahwa calon klien akan melihat cara kerja perangkat lunaknya."
            },
            {
              "pattern": "\\b15\\s+minute\\s+demo\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Compound modifier di depan kata benda butuh hyphen, jadi bentuk tanpa hyphen ini salah."
            },
            {
              "pattern": "\\blet\\s+us\\s+know\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Penutup pasif ini melempar beban tindakan ke pembaca tanpa langkah konkret."
            }
          ],
          "solution": "Schedule a 15-minute demo today to see how our software works.",
          "susunKode": {
            "question": "Susun Call to Action (CTA) aktif ini dengan kata kerja perintah langsung dan durasi ber-hyphen.",
            "potongan": [
              "Schedule a 15-minute demo",
              "today to see how",
              "our software works."
            ],
            "pengecoh": [
              "Let us know if you want",
              "a 15 minute demo"
            ],
            "pemisah": " ",
            "explanation": "'Schedule a 15-minute demo today to see how our software works.' adalah rumusan CTA penjualan yang tajam dan berdaya konversi tinggi. Pengecoh 'Let us know if you want' sering menggoda karena pasif, namun menurunkan tingkat respons. Pengecoh 'a 15 minute demo' adalah jebakan keliru karena tidak menyertakan tanda hyphen pada compound modifier sebelum kata benda."
          }
        },
        {
          "kind": "step",
          "id": "beng-8-7",
          "title": "Menyesuaikan Kepala Memorandum Resmi (Memo)",
          "explanation": "Memorandum (*memo*) adalah dokumen komunikasi internal resmi yang memiliki format kepala (*header*) standar yang kaku. Ciri utama memo yang membedakannya dari surat resmi adalah adanya judul `MEMORANDUM` dengan huruf kapital penuh di bagian paling atas, diikuti oleh empat baris header: `TO:`, `FROM:`, `DATE:`, dan `SUBJECT:`. Memo tidak menggunakan salam pembuka seperti `Dear All` maupun penutup seperti `Sincerely`. Memahami format baku memo memastikan bahwa dokumen internal perusahaan disampaikan dengan tingkat keformalan yang tepat.",
          "example": {
            "code": "❌ Dear Team,\n\nSubject: Policy Update\nFrom: HR\n✅ MEMORANDUM\n\nTO: All Employees\nFROM: Human Resources\nDATE: April 1\nSUBJECT: Remote Work Policy Update",
            "output": "Sebelum : format memo tidak baku bercampur dengan gaya e-mail.\nSesudah : header memo standar dengan empat komponen utama berhuruf kapital.",
            "note": "Memo digunakan khusus untuk pihak internal organisasi, bukan untuk klien eksternal."
          },
          "instruction": "Skenario: kamu menyusun pengumuman resmi perpindahan kantor internal perusahaan. Draf di editor belum menyertakan judul resmi dan menggunakan label header berhuruf kecil. Perbaiki format kepala memo tersebut dengan menambahkan judul memorandum resmi di baris paling atas, diikuti baris kosong, lalu gunakan empat label kepala baku berhuruf kapital penuh. Pertahankan nama pihak, tanggal, dan perihal yang tercantum.",
          "starterCode": "To: All Staff\nFrom: Operations Manager\nDate: October 10\nSubject: Office Relocation",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*MEMORANDUM\\b",
              "flags": "",
              "message": "Baris paling atas belum memuat judul memo berhuruf kapital penuh — itu penanda jenis dokumennya."
            },
            {
              "pattern": "^\\s*MEMORANDUM[^\\n]*\\n[ \\t]*\\n",
              "flags": "",
              "message": "Kamu belum memberi baris kosong pemisah antara judul memo dan blok label header."
            },
            {
              "pattern": "\\bTO:[^\\n]*\\S[\\s\\S]*\\bFROM:[^\\n]*\\S[\\s\\S]*\\bDATE:[^\\n]*\\S[\\s\\S]*\\bSUBJECT:[^\\n]*\\S",
              "flags": "",
              "message": "Keempat label baku harus berhuruf kapital penuh dan berurutan, masing-masing diikuti isinya."
            },
            {
              "pattern": "(^|\\n)[ \\t]*(To|From|Date|Subject)\\s*:",
              "flags": "",
              "mustNotMatch": true,
              "message": "Masih ada label header yang kamu tulis berhuruf kecil; format memo resmi memakai kapital penuh."
            }
          ],
          "solution": "MEMORANDUM\n\nTO: All Staff\nFROM: Operations Manager\nDATE: October 10\nSUBJECT: Office Relocation",
          "susunKode": {
            "question": "Susun bagian kepala (header) memorandum internal ini sesuai format baku perusahaan.",
            "potongan": [
              "MEMORANDUM\n\n",
              "TO: All Staff\n",
              "FROM: Operations Manager\n",
              "DATE: October 10\n",
              "SUBJECT: Office Relocation"
            ],
            "pengecoh": [
              "Dear All Staff,\n",
              "To: All Staff\n",
              "From: Operations Manager\n"
            ],
            "pemisah": "",
            "explanation": "Dokumen memo diawali judul 'MEMORANDUM' dan header berhuruf kapital (TO:, FROM:, DATE:, SUBJECT:). Pengecoh 'Dear All Staff,' sering menggoda bagi yang biasa menulis e-mail, padahal memo tidak memakai salam pembuka. Pengecoh berhuruf kecil 'To:' adalah jebakan keliru dalam format baku memo resmi."
          }
        },
        {
          "kind": "step",
          "id": "beng-8-8",
          "title": "Tugas Mengarang: Menyusun Butir Tindakan Rapat dengan Penanggung Jawab dan Tenggat Konkret",
          "explanation": "Dalam risalah rapat bisnis (*meeting minutes*), setiap butir tindakan (*action item*) wajib memuat empat elemen tanpa celah: siapa penanggung jawabnya (*Owner / PIC*), kata kerja tindakan apa yang harus dilakukan, deliverable apa yang dihasilkan, dan kapan tenggat waktu penyelesaiannya. Catatan yang hanya berbunyi `The database should be reviewed soon` tidak memiliki nilai akuntabilitas karena tidak ada orang yang ditugaskan secara spesifik. Struktur action item yang baku diawali nama penanggung jawab dan kata kerja masa depan (`David will refactor the authentication middleware` atau `Sarah will conduct the security audit`), dan ditutup dengan tenggat tanggal mutlak (`by October 20`). Ketegasan penulisan ini memastikan seluruh keputusan rapat dieksekusi secara nyata.",
          "example": {
            "code": "❌ Action item: Someone needs to look into server monitoring soon.\n✅ Action Item: David will configure the Prometheus monitoring cluster by October 20.",
            "output": "Sebelum : tugas mengambang tanpa pemilik tindakan (PIC) dan tanpa batas tanggal.\nSesudah : memuat nama PIC (David), aksi teknis (configure cluster), dan tenggat pasti (by October 20).",
            "note": "Rumus: [Nama PIC] + will [Action Verb] [Deliverable] + by [Tanggal Spesifik]."
          },
          "instruction": "Skenario: kamu mencatat butir tindakan penanggung jawab dalam risalah rapat mingguan. Tulis SATU kalimat butir tindakan yang jelas dan akuntabel dalam bahasa Inggris. Unsur wajib: (1) label butir tindakan resmi diikuti nama penanggung jawab dan kata kerja bantu will, (2) kata kerja aksi pembenahan teknis middleware autentikasi, dan (3) tenggat tanggal penyelesaian spesifik pada 20 Oktober.",
          "starterCode": "# Tulis satu kalimat Action Item risalah rapat dengan PIC dan tenggat di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*action\\s+item\\s*:",
              "flags": "i",
              "message": "Butir tindakan kamu belum diberi label resmi di awal baris, jadi sulit ditemukan dalam risalah."
            },
            {
              "pattern": ":\\s*[\\w.'-]+(\\s+[\\w.'-]+){0,3}\\s+will\\b",
              "flags": "i",
              "message": "Setelah label, sebutkan nama penanggung jawabnya lalu `will` supaya jelas siapa yang berkomitmen."
            },
            {
              "pattern": "\\b(refactor|rewrite|rebuild|repair|fix|update|patch|overhaul|redesign|revamp|clean\\s+up|migrate|harden)\\s+(the\\s+|our\\s+)?(authentication|auth)\\s+middleware\\b",
              "flags": "i",
              "message": "Pekerjaannya belum konkret: sebut tindakan pembenahan atas middleware autentikasi."
            },
            {
              "pattern": "\\b(by|before|on|due\\s+on|no\\s+later\\s+than)\\s+october\\s+20\\b",
              "flags": "i",
              "message": "Tenggat 20 Oktober belum kamu cantumkan, sehingga tugas ini tidak bisa ditagih."
            },
            {
              "pattern": "\\b(someone\\s+needs|somebody\\s+needs|asap|as\\s+soon\\s+as\\s+possible|soon|later\\s+on|sometime)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Penugasan anonim atau tenggat samar membuat butir tindakan kamu tidak bisa dipertanggungjawabkan."
            }
          ],
          "solution": "Action Item: David will refactor the authentication middleware by October 20.",
          "susunKode": {
            "question": "Susun butir tindakan risalah rapat ini dengan penanggung jawab dan tenggat tanggal yang jelas.",
            "potongan": [
              "Action Item: David will",
              "refactor the authentication middleware",
              "by October 20."
            ],
            "pengecoh": [
              "Someone should refactor middleware",
              "sometime soon."
            ],
            "pemisah": " ",
            "explanation": "'Action Item: David will refactor the authentication middleware by October 20.' adalah format baku pencatatan risalah rapat yang akuntabel. Pengecoh 'Someone should refactor...' dan 'sometime soon' sering menggoda karena terdengar santai, namun merupakan jebakan catatan rapat buruk yang tidak memiliki penanggung jawab dan tenggat waktu nyata."
          }
        },
        {
          "kind": "step",
          "id": "beng-8-9",
          "title": "Tugas Penerapan Akhir: Menyusun E-mail Bisnis Profesional Utuh",
          "explanation": "Menyusun e-mail kerja utuh menggabungkan seluruh prinsip yang telah kamu pelajari di track ini: subject line yang spesifik, pendekatan BLUF di paragraf pembuka, fakta dan konteks terstruktur, permintaan tindakan dengan tenggat konkret, serta penutup profesional (*sign-off*). Di dunia kerja nyata, e-mail yang efektif tidak dinilai dari kerumitan kosakatanya, melainkan dari seberapa cepat penerima memahami inti permohonan dan mengeksekusi tindakan yang diharapkan.\n\n**Rubrik Penilaian Mandiri 5 Aspek:**\n1. **Tujuan & Permintaan Mudah Ditemukan:** Permohonan diletakkan di kalimat awal (BLUF), bukan terselip di akhir.\n2. **Fakta Penting Lengkap & Benar:** Memuat detail dokumen, tanggal, nomor versi, dan angka nominal anggaran yang relevan.\n3. **Nada Sesuai Penerima:** Sopan (*courteous*), profesional, tidak memaksa secara agresif, dan bebas dari bahasa slang.\n4. **Struktur Mudah Diikuti:** Ada pemisahan paragraf yang bersih (white space) antara salam, konteks, tindakan, dan penutup.\n5. **Grammar & Kosakata Presisi:** Kalimat utuh bebas dari fragment, comma splice, atau kesalahan agreement.\n\n*Catatan Evaluasi Sistem:* Pemeriksaan otomatis mengecek struktur dan pola pada paragraf pembuka setelah salam, termasuk total anggaran dan tenggat permintaan. Pemeriksaan ini belum menilai seluruh makna, grammar, atau konsistensi antarparagraf. Gunakan rubrik di atas untuk memeriksa kualitas dan konsistensi seluruh draf, termasuk rincian biaya serta jadwal pendukung.",
          "example": {
            "code": "Subject: Cloud Migration Contract — Signature Required by October 25\n\nDear Mr. Henderson,\n\nCould you please review and sign the attached cloud migration agreement by October 25?\n\nOur technical audit confirmed that the proposed timeline and SLA requirements align with our Q4 operational goals. The security team has also approved the data encryption protocols outlined in Appendix B.\n\nPlease let me know if you have any questions or require adjustments before signing.\n\nBest regards,\nNadia Pratama\nOperations Lead",
            "output": "Analisis struktur e-mail profesional:\n1. Subject Line: memuat topik kontrak, aksi tandatangan, dan tenggat 25 Oktober.\n2. Pembuka BLUF: permintaan tandatangan langsung di baris pertama dengan modal sopan.\n3. Fakta pendukung: menyajikan hasil audit SLA dan enkripsi keamanan.\n4. Penutup profesional: sign-off baku dan penawaran klarifikasi.",
            "note": "Pisahkan setiap bagian dengan satu baris kosong (white space) agar pembaca dapat memindai informasi dengan cepat."
          },
          "instruction": "Skenario: kamu mengirim e-mail kepada manajer keuangan (Ms. Rachel Adams) untuk meminta persetujuan revisi anggaran proyek integrasi API senilai $15,000 sebelum atau paling lambat tanggal 20 November.\n\nTulis SATU e-mail bisnis utuh dalam bahasa Inggris dengan unsur wajib:\n1. Subject line resmi yang menyebut topik proposal anggaran, aksi persetujuan, dan tenggat 20 November.\n2. Salam pembuka formal kepada Ms. Adams (`Dear Ms. Adams,`).\n3. Paragraf pembuka BLUF yang menyatakan permohonan persetujuan anggaran revisi sebesar $15,000 dengan modal sopan.\n4. Penegasan tenggat tanggal sebelum atau paling lambat 20 November (`by November 20` atau `before November 20`).\n5. Salam penutup profesional (`Best regards,` atau `Sincerely,`) dan nama pengirim.\n\nFormat latihan: tulis salam pada baris tersendiri, lalu satu paragraf pembuka yang hanya memuat permintaan persetujuan, satu total anggaran, dan tenggatnya. Pisahkan paragraf dengan baris kosong. Letakkan riwayat anggaran, rincian biaya, jadwal pelaksanaan, dan pertanyaan tambahan pada paragraf berikutnya. Pemeriksa otomatis berfokus pada paragraf permintaan; tinjau sendiri konsistensi seluruh e-mail dengan rubrik.",
          "starterCode": "# Tulis draf e-mail lengkap di sini (Subject, Salutation, Body BLUF, dan Sign-off)\n",
          "language": "text",
          "tests": [
            {
              "pattern": "^\\s*(subject\\s*:\\s*)?[^\\n—–-]{0,40}\\b(revised\\s+)?budget\\b[^\\n]*[—–-]\\s*[^\\n]*\\b(approv\\w*|sign[-\\s]?off)\\b[^\\n]*\\b(by|before|due)\\s+(november\\s+20|20\\s+november)\\b",
              "flags": "i",
              "message": "Subject line harus berada di awal dan memuat topik anggaran/proposal, aksi persetujuan, serta tenggat 20 November."
            },
            {
              "pattern": "\\bdear\\s+ms\\.?\\s+adams\\s*,",
              "flags": "i",
              "message": "Cantumkan salam pembuka formal kepada penerima: `Dear Ms. Adams,`."
            },
            {
              "pattern": "\\b(could|would)\\s+you\\s+(please\\s+)?(be\\s+able\\s+to\\s+)?(review\\s+and\\s+)?approv\\w*\\b|\\bwould\\s+you\\s+mind\\s+(reviewing\\s+and\\s+)?approving\\b|\\b(would\\s+it\\s+be\\s+possible\\s+to\\s+(review\\s+and\\s+)?approv\\w*)\\b|\\bplease\\s+(review\\s+and\\s+)?approv\\w*\\b|\\bi\\s+would\\s+appreciate\\s+it\\s+if\\s+you\\s+could\\s+(review\\s+and\\s+)?approv\\w*\\b",
              "flags": "i",
              "message": "Paragraf pembuka harus menyatakan permohonan persetujuan anggaran secara langsung (BLUF) dengan modal kesopanan (mis. 'Could you please approve...', 'Would you be able to review and approve...', atau 'Would you mind approving...').",
              "scope": "email-opening"
            },
            {
              "pattern": "(?<![\\d.])(\\$15,?000(?:\\.00)?|15,?000(?:\\.00)?\\s*(?:USD|dollars?)|fifteen\\s+thousand\\s+dollars?)(?!\\.\\d|,\\d|\\d)",
              "flags": "i",
              "message": "Sertakan nominal revisi anggaran yang diminta secara tepat ($15,000).",
              "scope": "email-opening"
            },
            {
              "pattern": "\\$(?!15,?000(?:\\.00)?(?![\\d.,]))\\d[\\d,.]*|(?<![\\d.])(?!(?:15,?000(?:\\.00)?)(?![\\d.,]))\\d[\\d,.]*\\s*(?:USD|dollars?)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Nominal anggaran keliru. Skenario meminta persetujuan anggaran senilai tepat $15,000 (bukan pecahan atau nominal lain).",
              "scope": "email-opening"
            },
            {
              "pattern": "(?<!\\b(?:rather\\s+than|instead\\s+of|not)\\s+)\\b(by|before|no\\s+later\\s+than|due)\\s+(november\\s+20(th)?|20(th)?(\\s+of)?\\s+november)\\b",
              "flags": "i",
              "message": "Paragraf pembuka setelah salam harus menyebut tenggat persetujuan 20 November; tanggal pada subject atau paragraf lain tidak menggantikannya.",
              "scope": "email-opening"
            },
            {
              "pattern": "\\b(rather\\s+than|instead\\s+of|not)\\s+(?:by\\s+|before\\s+|due\\s+)?(november\\s+20(th)?|20(th)?(\\s+of)?\\s+november)\\b|\\b(by|before|no\\s+later\\s+than|due\\s+(?:on|by)?|deadline\\s+(?:is|of)?)\\s+(?:the\\s+)?(?:(?:january|february|march|april|may|june|july|august|september|october|december)\\b|\\d{1,2}(?:st|nd|rd|th)?\\s+(?:of\\s+)?(?:january|february|march|april|may|june|july|august|september|october|december)\\b)|\\b(by|before|no\\s+later\\s+than|due\\s+(?:on|by)?|deadline\\s+(?:is|of)?)\\s+(?:the\\s+)?(?:november\\s+(?!(?:20\\b|20th\\b))\\d{1,2}(?:st|nd|rd|th)?|(?!(?:20\\b|20th\\b))\\d{1,2}(?:st|nd|rd|th)?(?:\\s+of)?\\s+november)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Tenggat persetujuan keliru atau bertentangan. Skenario menetapkan batas waktu persetujuan sebelum atau paling lambat 20 November (bukan tanggal lain, bulan lain, atau penundaan/pembatalan).",
              "scope": "email-opening"
            },
            {
              "pattern": "\\b(best\\s+regards|sincerely|warm\\s+regards|regards|respectfully)\\s*,\\s*\\n{1,3}\\s*[A-Z][A-Za-z]*(?:[-'\\s][A-Za-z]+)*\\b",
              "flags": "i",
              "message": "Tutup e-mail dengan salam penutup profesional resmi (mis. 'Best regards,' atau 'Sincerely,') diikuti nama pengirim (mis. 'Bimo', 'Anne-Marie', atau 'Alex Pratama')."
            },
            {
              "pattern": "\\b(asap|gonna|wanna|urgent!|hey\\b|hi\\s+rachel|cheers\\b)\\b",
              "flags": "i",
              "mustNotMatch": true,
              "message": "Hindari singkatan informal atau salam kasual (seperti 'hey', 'asap', 'wanna') dalam permohonan anggaran resmi."
            }
          ],
          "solution": "Subject: Revised Budget Proposal — Approval Required by November 20\n\nDear Ms. Adams,\n\nCould you please review and approve the revised API integration budget of $15,000 by November 20?\n\nThe additional funds will cover third-party data licensing and automated security compliance testing for our Q4 release.\n\nBest regards,\nAlex Pratama",
          "susunKode": {
            "question": "Susun potongan kalimat ini menjadi satu e-mail bisnis profesional utuh yang memenuhi standar BLUF dan etika kerja.",
            "potongan": [
              "Subject: Revised Budget Proposal — Approval Required by November 20\n\n",
              "Dear Ms. Adams,\n\n",
              "Could you please review and approve the revised API integration budget of $15,000 by November 20?\n\n",
              "The additional funds will cover third-party data licensing and automated security compliance testing for our Q4 release.\n\n",
              "Best regards,\nAlex Pratama"
            ],
            "pengecoh": [
              "Subject: Hey Adams, Need Money ASAP\n\n",
              "Give us the cash before next month.\n\n"
            ],
            "pemisah": "",
            "explanation": "E-mail bisnis formal diawali subject line dengan topik dan tenggat, salam hormat 'Dear Ms. Adams,', inti permintaan BLUF dengan modal sopan 'Could you please approve...', fakta kebutuhan dana, dan penutup 'Best regards,'. Pengecoh 'Subject: Hey Adams, Need Money ASAP' dan 'Hey Rachel' menggoda bagi yang terbiasa dengan gaya pesan instan, namun melanggar netiquette kerja formal. Pengecoh imperatif kasar 'Give us the cash' keliru karena merusak hubungan kerja profesional."
          }
        },
        {
          "kind": "quiz",
          "id": "beng-8-k1",
          "title": "Kuis: Dokumen Bisnis, Netiquette, dan Struktur Proposal Komersial",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Kamu sedang mengirimkan proposal anggaran revisi kepada atasan. Manakah subject line e-mail berikut yang paling spesifik dan memenuhi standar Business English?",
              "choices": [
                "A. Urgent Question regarding budget",
                "B. Subject: Revised Budget Proposal — Approval Required by April 15",
                "C. PLEASE APPROVE THE BUDGET PROPOSAL IMMEDIATELY!!!",
                "D. Update on budget"
              ],
              "answerIndex": 1,
              "explanation": "Subject line yang efektif memuat topik spesifik ('Revised Budget Proposal'), tindakan yang diharapkan ('Approval Required'), dan tenggat pasti ('by April 15'). Pilihan A dan D terlalu samar, sedangkan C melanggar netiquette."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Sebagai staf profesional yang mematuhi netiquette perusahaan, kapan kamu sebaiknya menggunakan fitur CC (Carbon Copy)?",
              "choices": [
                "A. Menyertakan seluruh jajaran manajer saat menegur rekan kerja agar ia merasa takut.",
                "B. Mengirimkan pesan obrolan santai tentang rencana makan siang.",
                "C. Menambahkan semua staf divisi pada setiap pesan rutin harian.",
                "D. Menyertakan pihak pemangku kepentingan yang perlu mengetahui hasil keputusan penting secara pasif."
              ],
              "answerIndex": 3,
              "explanation": "Fitur CC digunakan untuk transparansi informasi kepada pihak yang berkepentingan mengetahui perkembangan keputusan secara pasif. Menggunakan CC untuk mempermalukan rekan kerja melanggar etika kerja."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu menerima dokumen internal dengan kepala: 'TO: All Staff / FROM: Operations Manager / DATE: October 10 / SUBJECT: Relocation'. Apakah ciri format baku yang membedakan dokumen memo internal ini dari surat resmi?",
              "choices": [
                "A. Memo memiliki 4 baris header formal (TO, FROM, DATE, SUBJECT) dan tidak menggunakan salam pembuka (Dear...) maupun salam penutup (Sincerely...).",
                "B. Memo wajib selalu diketik dalam bentuk poin-poin tanpa kalimat utuh.",
                "C. Memo hanya boleh diedarkan melalui kurir fisik dalam amplop tertutup.",
                "D. Memo merupakan dokumen informal yang tidak memiliki kekuatan kebijakan perusahaan."
              ],
              "answerIndex": 0,
              "explanation": "Memorandum internal dirancang untuk komunikasi cepat antardepartemen dengan header baku empat baris, tanpa salam pembuka (salutation) dan tanpa penutup formal (complimentary close)."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu sedang mengevaluasi catatan risalah rapat: 'Someone should fix the auth middleware soon.' Bagaimanakah cara mengubahnya menjadi Action Item yang akuntabel?",
              "choices": [
                "A. We discussed that the authentication middleware needs some fixes.",
                "B. It is recommended that authentication middleware be checked sometime.",
                "C. Action Item: David will refactor the authentication middleware by October 20.",
                "D. David might work on the middleware whenever he has free time."
              ],
              "answerIndex": 2,
              "explanation": "Action item yang akuntabel wajib diawali label penanda, menyebutkan satu penanggung jawab spesifik ('David'), kata kerja tindakan nyata ('will refactor'), dan batas tenggat tanggal pasti ('by October 20')."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu sedang menyusun draf proposal bisnis komersial untuk tender pengadaan teknologi. Empat komponen utama manakah yang wajib dijawab secara berurutan dan terstruktur dalam proposal tersebut?",
              "choices": [
                "A. Profil Perusahaan -> Riwayat Manajemen -> Portofolio Proyek -> Estimasi Biaya Kasar",
                "B. Rincian Fitur Teknis -> Daftar Spesifikasi API -> Syarat Pembayaran -> Formulir Kontak",
                "C. Pernyataan Masalah (Problem) -> Solusi Teknis yang Ditawarkan (Solution) -> Rincian Anggaran Biaya (Cost) -> Jadwal Pelaksanaan (Schedule)",
                "D. Analisis Kompetitor -> Perbandingan Harga Pasar -> Surat Rekomendasi -> Klausul Garansi"
              ],
              "answerIndex": 2,
              "explanation": "Proposal bisnis yang persuasif menjawab empat kebutuhan inti klien secara runtut: memetakan masalah klien (Problem), menawarkan solusi terukur (Solution), merinci investasi anggaran (Cost), dan menyajikan linimasa pelaksanaan (Schedule). Pilihan A, B, dan D adalah kesalahan umum vendor yang terlalu fokus pada diri sendiri alih-alih menyelesaikan masalah klien."
            },
            {
              "id": "q6",
              "type": "pilihan-ganda",
              "question": "Seorang konsultan IT menyerahkan laporan analisis sistem setebal 80 halaman kepada dewan direksi. Apakah fungsi utama bagian EXECUTIVE SUMMARY pada halaman awal dokumen tersebut?",
              "choices": [
                "A. Menyajikan rangkuman masalah, data temuan kunci, dan rekomendasi keputusan dalam 1–2 halaman bagi pengambil keputusan eksekutif.",
                "B. Berisi glosarium daftar istilah teknis dan singkatan kata yang dipakai di laporan.",
                "C. Menampung seluruh data log mentah yang tidak muat dimasukkan ke dalam bab utama.",
                "D. Menjadi halaman kata pengantar ucapan terima kasih kepada seluruh tim proyek."
              ],
              "answerIndex": 0,
              "explanation": "Executive Summary dirancang khusus bagi para eksekutif pengambil keputusan untuk segera memahami temuan kunci data audit dan menyetujui rekomendasi tindakan tanpa harus membaca lampiran teknis setebal puluhan halaman."
            }
          ]
        }
      ]
    }
  ]
};
