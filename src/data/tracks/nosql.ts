import type { Track } from "@/lib/types";

export const nosqlTrack: Track = {
  slug: "nosql",
  title: "NoSQL & Data Lanjutan",
  description: "MongoDB & Redis: kapan dipakai, kapan tidak.",
  hours: 30,
  recommendedPrereqs: ["sql"],
  color: "bg-emerald-600",
  icon: "🍃",
  order: 11,
  modules: [
    {
      slug: "konsep-nosql",
      title: "Konsep NoSQL",
      description:
        "Bukan pengganti SQL — alat berbeda untuk masalah berbeda.",
      topics: [
        "Empat keluarga: document, key-value, column, graph",
        "Trade-off vs relasional: skema, konsistensi, skala",
        "CAP theorem dijelaskan praktis",
        "Kesalahan umum: pakai NoSQL karena 'keren'",
        "Studi kasus: aplikasi yang tepat untuk masing-masing",
      ],
      items: [
        {
          kind: "materi",
          id: "nosql-1-m1",
          title: "Pengenalan NoSQL, Taksonomi & Teorema CAP",
          body:
            "# Pengertian NoSQL & Latar Belakang\n\n" +
            "Selama puluhan tahun, Database Relasional (RDBMS) seperti PostgreSQL dan MySQL menjadi standar emas penyimpanan data. Namun seiring ledakan era web 2.0, aplikasi modern dihadapkan pada dua tantangan besar: skema data yang sangat dinamis dan kebutuhan skalabilitas horizontal ke puluhan server. **NoSQL** (*Not Only SQL*) lahir sebagai payung teknologi database non-relasional yang dirancang khusus untuk mengatasi keterbatasan tersebut.\n\n" +
            "NoSQL bukan diciptakan untuk memusnahkan SQL, melainkan untuk memberikan alternatif model penyimpanan yang lebih optimal sesuai karakteristik data yang ditangani.\n\n" +
            "## Taksonomi 4 Keluarga Utama NoSQL\n\n" +
            "Dunia NoSQL terbagi menjadi empat keluarga besar dengan struktur data internal yang berbeda:\n\n" +
            "| Keluarga | Model Data Utama | Contoh Database | Kasus Penggunaan Ideal |\n" +
            "|---|---|---|---|\n" +
            "| **Document Store** | Dokumen JSON/BSON bersarang | MongoDB, CouchDB | Katalog produk, manajemen konten (CMS), profil pengguna dinamis |\n" +
            "| **Key-Value Store** | Kunci-nilai (Hash Map terdistribusi) | Redis, Amazon DynamoDB | Caching API, manajemen session login, rate limiting |\n" +
            "| **Column-Family** | Baris dengan kolom yang fleksibel | Apache Cassandra, ScyllaDB | Log transaksi IoT skala raksasa, time-series data |\n" +
            "| **Graph Database** | Simpul (*Nodes*) & Relasi (*Edges*) | Neo4j, Amazon Neptune | Jaringan pertemanan sosial, mesin rekomendasi, deteksi kecurangan |\n\n" +
            "## Teorema CAP (Brewer's Theorem)\n\n" +
            "Dalam sistem database terdistribusi yang berjalan di banyak server, kegagalan jaringan (*Network Partition*) adalah kepastian. Teorema CAP menyatakan bahwa sebuah sistem terdistribusi **hanya dapat menjamin 2 dari 3 properti utama** secara bersamaan:\n\n" +
            "1. **Consistency (C):** Setiap operasi pembacaan menerima data terbaru atau melempar error.\n" +
            "2. **Availability (A):** Setiap permintaan non-error selalu menerima respon (meskipun datanya mungkin bukan yang paling baru).\n" +
            "3. **Partition Tolerance (P):** Sistem tetap beroperasi meski terjadi pemutusan komunikasi jaringan antar server.\n\n" +
            "```text\n" +
            "               [ Consistency (C) ]\n" +
            "                      /   \\\n" +
            "                     /     \\\n" +
            "      (RDBMS/HBase) /       \\ (MongoDB default / CP)\n" +
            "                   /  CAP    \\\n" +
            "                  / Triangle  \\\n" +
            "                 /             \\\n" +
            "[ Availability (A) ] ───────── [ Partition Tolerance (P) ]\n" +
            "                      (Cassandra / AP)\n" +
            "```\n\n" +
            "Karena **Partition Tolerance (P)** wajib ada di dunia terdistribusi, pilihan arsitektur riil menyempit menjadi **CP** (mengorbankan ketersediaan demi konsistensi saldo/transaksi) atau **AP** (mengorbankan konsistensi seketika demi aplikasi yang tidak pernah *down*).\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Membayangkan RDBMS itu seperti lemari arsip kantor pemerintah: setiap berkas wajib ditempatkan di map berlabel yang ukurannya persis sama. Sebaliknya, **Document Store (MongoDB)** seperti amplop besar tempat kamu bisa memasukkan surat, foto, dan nota tanpa aturan kaku. **Key-Value Store (Redis)** seperti loker penitipan barang di stasiun: kamu menyerahkan nomor loker (kunci) dan langsung mengambil barang dalam hitungan detik.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> ⚠️ **Anti-Pattern:** Memilih NoSQL hanya karena tren (*hype*). Menggunakan MongoDB untuk sistem akuntansi keuangan yang penuh transaksi antar tabel akan memaksamu menulis logika JOIN dan transaksi ACID manual di kode Node.js — hal yang justru sudah ditangani RDBMS dengan sangat efisien.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di industri modern, arsitektur yang digunakan adalah **Polyglot Persistence**: mengombinasikan PostgreSQL untuk data transaksi inti, MongoDB untuk dokumen katalog/log, dan Redis untuk *session store*. Dalam *technical interview*, kamu akan dinilai berdasarkan kemampuan menjelaskan *trade-off* ini, bukan sekadar menghafal perintah.",
        },
        {
          kind: "step",
          id: "nosql-1-1",
          title: "Empat Keluarga NoSQL dan Bentuk Datanya",
          explanation:
            "**APA:** NoSQL bukan satu teknologi tunggal, melainkan payung untuk empat keluarga database dengan struktur penyimpanan internal berbeda: Document (MongoDB), Key-Value (Redis), Column-Family (Cassandra), dan Graph (Neo4j).\n\n" +
            "**KENAPA:** Setiap keluarga mengoptimalkan jenis query tertentu. Document store menyimpan JSON bersarang tanpa JOIN, sementara Key-Value menyimpan pasangan kunci-nilai cepat di memori.\n\n" +
            "**KAPAN:** Gunakan Document store untuk data yang bentuknya bervariasi atau selalu dibaca utuh bersama induknya, dan gunakan Key-Value untuk cache/sesi.\n\n" +
            "**JEBAKAN:** Salah memilih keluarga NoSQL akan membuat operasi sederhana di aplikasi terasa melawan arus arsitektur database.",
          example: {
            code: "// dokumen di MongoDB: satu entitas utuh, tanpa JOIN\ndb.produk.insertOne({\n  nama: 'Kopi Gayo',\n  varian: [{ ukuran: '250g', harga: 65000 }],\n});",
            output: "{ acknowledged: true, insertedId: ObjectId('66a1...') }",
            note: "Array dan objek bersarang boleh disimpan langsung di satu dokumen — di SQL ini butuh tabel terpisah.",
          },
          instruction:
            "Tulis perintah MongoDB shell yang memasukkan satu dokumen ke koleksi `artikel` berisi bidang `judul` bernilai `'Belajar NoSQL'` dan bidang `tags` berupa array `['db', 'nosql']` — bentuk bersarang seperti ini yang membedakan document store dari tabel relasional.",
          starterCode: "// Tulis perintah insert di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.artikel\\.insertOne\\(",
              message: "Pakai db.artikel.insertOne({ ... }).",
            },
            {
              pattern: "judul\\s*:\\s*['\"]Belajar NoSQL['\"]",
              message: "Sertakan bidang judul bernilai 'Belajar NoSQL'.",
            },
            {
              pattern: "tags\\s*:\\s*\\[\\s*['\"]db['\"]\\s*,\\s*['\"]nosql['\"]\\s*\\]",
              message: "Sertakan tags berupa array ['db', 'nosql'].",
            },
          ],
          solution: "db.artikel.insertOne({ judul: 'Belajar NoSQL', tags: ['db', 'nosql'] });",
        },
        {
          kind: "step",
          id: "nosql-1-2",
          title: "Trade-off: Kapan NoSQL Masuk Akal",
          explanation:
            "**APA:** NoSQL menawarkan skema fleksibel (*schema-less*) dan kemudahan *horizontal scaling* (menyebar data ke banyak server) dengan cara menghilangkan dependensi kaku antar tabel.\n\n" +
            "**KENAPA:** Menyimpan dokumen berstruktur JSON menghilangkan kebutuhan skema tabel yang harus dimigrasi setiap kali ada penambahan bidang data baru.\n\n" +
            "**KAPAN:** Sangat tepat untuk katalog produk yang propertinya berbeda-beda per kategori, log aktivitas pengguna, atau data profil yang terus berkembang.\n\n" +
            "**JEBAKAN:** Kamu kehilangan jaminan *foreign key* dan transaksi lintas tabel otomatis yang disediakan database relasional.",
          example: {
            code: "// dokumen katalog: dibaca utuh, bentuk tiap kategori berbeda\ndb.katalog.findOne({ slug: 'kopi-gayo' });",
            output: "{ _id: ObjectId('66a1...'), slug: 'kopi-gayo', varian: [ { ukuran: '250g' } ] }",
          },
          instruction:
            "Kamu menyimpan riwayat aktivitas pengguna yang bentuk datanya berbeda-beda per jenis aktivitas. Tulis perintah MongoDB yang menyimpan satu dokumen ke koleksi `aktivitas` dengan bidang `tipe` bernilai `'login'` dan bidang `meta` berupa objek berisi `ip` bernilai `'10.0.0.1'`.",
          starterCode: "// Simpan satu dokumen aktivitas\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.aktivitas\\.insertOne\\(",
              message: "Pakai db.aktivitas.insertOne({ ... }).",
            },
            {
              pattern: "tipe\\s*:\\s*['\"]login['\"]",
              message: "Sertakan bidang tipe bernilai 'login'.",
            },
            {
              pattern: "meta\\s*:\\s*\\{[^}]*ip\\s*:\\s*['\"]10\\.0\\.0\\.1['\"]",
              message: "Sertakan objek meta berisi ip '10.0.0.1'.",
            },
          ],
          solution: "db.aktivitas.insertOne({ tipe: 'login', meta: { ip: '10.0.0.1' } });",
        },
        {
          kind: "step",
          id: "nosql-1-3",
          title: "Teorema CAP dalam Praktik",
          explanation:
            "**APA:** Teorema CAP menyatakan bahwa ketika terjadi pemutusan komunikasi antar node terdistribusi (*Partition*), kamu harus memilih antara menolak kueri (*Consistency*) atau melayani kueri walau data belum sinkron (*Availability*).\n\n" +
            "**KENAPA:** Pemahaman ini menentukan konfigurasi *read preference* dan *write concern* di lingkungan kluster database terdistribusi.\n\n" +
            "**KAPAN:** Pilih mode CP untuk data keuangan yang wajib konsisten, dan pilih AP untuk feed berita atau katalog produk yang boleh sedikit tertinggal demi ketersediaan.\n\n" +
            "**JEBAKAN:** Menganggap database NoSQL selalu seragam dalam menerapkan teorema CAP tanpa membaca dokumentasi bawaannya.",
          example: {
            code: "// membaca dari primary: konsisten, tapi gagal saat primary tidak terjangkau\ndb.saldo.find({ userId: 7 }).readPref('primary');",
            output: "[ { _id: ObjectId('66b2...'), userId: 7, jumlah: 250000 } ]",
            note: "Membaca dari secondary menaikkan ketersediaan, tapi datanya bisa tertinggal beberapa saat — itulah harga pilihan AP.",
          },
          instruction:
            "Data katalog boleh sedikit tertinggal asalkan situs tetap bisa dibuka (pilihan AP). Tulis query MongoDB pada koleksi `katalog` yang mengambil semua dokumen dengan preferensi baca dari replika sekunder memakai `.readPref('secondary')`.",
          starterCode: "// Baca katalog dengan preferensi ketersediaan\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.katalog\\.find\\(",
              message: "Mulai dari db.katalog.find(...).",
            },
            {
              pattern: "readPref\\(\\s*['\"]secondary['\"]\\s*\\)",
              message: "Tambahkan .readPref('secondary') agar tetap melayani saat primary sibuk.",
            },
          ],
          solution: "db.katalog.find().readPref('secondary');",
        },
        {
          kind: "step",
          id: "nosql-1-4",
          title: "Kesalahan Umum: Memilih NoSQL karena Sedang Ramai",
          explanation:
            "**APA:** Memilih database NoSQL atas dasar popularitas daripada kesesuaian bentuk data adalah kesalahan arsitektur yang sering berujung kegagalan proyek.\n\n" +
            "**KENAPA:** Data keuangan dan transaksi memiliki relasi kuat dan membutuhkan transaksi multi-dokumen ACID yang ketat yang lebih alami di RDBMS.\n\n" +
            "**KAPAN:** Evaluasi alur pembacaan (*read vs write pattern*) sebelum memutuskan apakah data harus disimpan secara relasional atau dokumen.\n\n" +
            "**JEBAKAN:** Menulis sendiri logika JOIN manual dan *lock* di kode aplikasi Node.js karena memaksa data relasional ke database NoSQL.",
          example: {
            code: "// buku besar keuangan: butuh transaksi lintas dokumen\n// di MongoDB kamu harus menulisnya secara eksplisit\nsession.startTransaction();",
            output: "Transaksi dimulai; tanpa ini, dua penulisan terkait bisa gagal separuh.",
          },
          instruction:
            "Untuk mutasi saldo yang harus berhasil bersama, tulis blok transaksi MongoDB: mulai dengan `session.startTransaction();`, lalu akhiri dengan `session.commitTransaction();` pada baris berikutnya.",
          starterCode: "// Tulis blok transaksi di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "session\\.startTransaction\\(\\s*\\)",
              message: "Mulai dengan session.startTransaction();",
            },
            {
              pattern: "session\\.commitTransaction\\(\\s*\\)",
              message: "Akhiri dengan session.commitTransaction();",
            },
          ],
          solution: "session.startTransaction();\nsession.commitTransaction();",
        },
        {
          kind: "step",
          id: "nosql-1-5",
          title: "Studi Kasus: Memasangkan Kebutuhan dengan Database",
          explanation:
            "**APA:** Arsitektur modern menerapkan *Polyglot Persistence*, yaitu mengombinasikan beberapa teknologi database sesuai spesialisasi data masing-masing.\n\n" +
            "**KENAPA:** Kombinasi RDBMS (PostgreSQL), Document (MongoDB), dan Key-Value (Redis) memberikan performa maksimal tanpa mengorbankan integritas data.\n\n" +
            "**KAPAN:** Gunakan Redis untuk sesi login dan cache transient, MongoDB untuk dokumen katalog/log, dan RDBMS untuk persistensi akun/keuangan.\n\n" +
            "**JEBAKAN:** Menambah terlalu banyak jenis database tanpa infrastruktur pemantauan (*monitoring*) dan pembackupan yang memadai.",
          example: {
            code: "// sesi login di Redis: cepat dan otomatis kedaluwarsa\nSETEX sesi:u7 3600 'token-abc'",
            output: "OK",
          },
          instruction:
            "Simpan sesi login pengguna `u42` di Redis dengan nilai `'token-xyz'` yang otomatis hangus setelah 1800 detik. Tulis perintahnya memakai `SETEX` dengan key `sesi:u42`.",
          starterCode: "# Tulis perintah Redis di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SETEX\\s+sesi:u42\\s+1800",
              message: "Pakai SETEX sesi:u42 1800 diikuti nilainya.",
            },
            {
              pattern: "['\"]?token-xyz['\"]?",
              message: "Nilainya 'token-xyz'.",
            },
          ],
          solution: "SETEX sesi:u42 1800 'token-xyz'",
        },
        {
          kind: "quiz",
          id: "nosql-1-kuis",
          title: "Kuis: Konsep NoSQL",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Berdasarkan Teorema CAP, berapa jumlah maksimum properti yang dapat dijamin secara bersamaan oleh sebuah sistem database terdistribusi?",
              choices: ["1 properti", "2 properti", "3 properti", "Semua properti"],
              answerIndex: 1,
              explanation: "Teorema CAP menyatakan bahwa sistem terdistribusi hanya bisa memilih 2 dari 3 properti (Consistency, Availability, Partition Tolerance).",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Manakah jenis database NoSQL yang paling cocok untuk memodelkan graf hubungan pertemanan di media sosial?",
              choices: ["Document Store", "Key-Value Store", "Graph Database", "Column Family"],
              answerIndex: 2,
              explanation: "Graph Database (seperti Neo4j) dirancang khusus untuk memproses simpul (nodes) dan relasi antar data berarsitektur kompleks.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa istilah untuk praktik menggunakan beberapa jenis database (misal PostgreSQL + Redis) sekaligus dalam satu arsitektur aplikasi?",
              choices: ["Monolithic Database", "Polyglot Persistence", "Multi-Querying", "Database Sharding"],
              answerIndex: 1,
              explanation: "Polyglot Persistence mengacu pada pemilihan berbagai solusi database yang disesuaikan dengan kebutuhan domain spesifik tiap modul aplikasi.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apakah fungsi utama dari jenis Document Store (seperti MongoDB)?",
              choices: [
                "Menyimpan data sebagai relasi baris dan kolom yang ketat",
                "Menyimpan objek JSON/BSON berdokumen fleksibel bersarang",
                "Menyimpan data dalam graf nodes dan edges",
                "Menyimpan memori cache saja",
              ],
              answerIndex: 1,
              explanation: "Document Store mengelola data dalam struktur BSON berdokumen yang tidak mengharuskan kesamaan field secara kaku pada seluruh koleksinya.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Mengapa skala horizontal lebih mudah diterapkan pada database NoSQL dibanding SQL relasional?",
              choices: [
                "Karena NoSQL merancang strukturnya tanpa JOIN kompleks sehingga data mudah disebar ke banyak server",
                "Karena SQL tidak mendukung operasi UPDATE",
                "Karena NoSQL berjalan langsung di hardware tanpa OS",
                "Karena SQL memblokir semua query secara sekuensial",
              ],
              answerIndex: 0,
              explanation: "Minimnya dependensi Foreign Key dan JOIN pada NoSQL membuat data lebih mandiri, sehingga mudah dipartisi dan disebar ke ribuan server (horizontal scaling).",
            },
          ],
        },
      ],
    },
    {
      slug: "mongodb-crud",
      title: "MongoDB: Document & CRUD",
      description:
        "Database dokumen paling populer — dari nol sampai query nyata.",
      topics: [
        "Document, collection, BSON, _id",
        "insertOne/Many, find & operator query ($gt, $in, $regex)",
        "updateOne: $set, $inc, $push",
        "deleteOne/Many & soft delete",
        "Projection & sort/limit/skip",
        "Index di MongoDB",
        "Mongoose vs driver native",
      ],
      items: [
        {
          kind: "materi",
          id: "nosql-2-m1",
          title: "Arsitektur Dokumen MongoDB & Dasar Operasi CRUD",
          body:
            "# Arsitektur Dokumen MongoDB & Format BSON\n\n" +
            "MongoDB adalah database dokumen berbasis BSON (*Binary JSON*). BSON memperluas format JSON standar dengan menambahkan tipe data kaya seperti `ObjectId`, `Date`, `BinData`, dan angka presisi `Decimal128`. Penyiapan data dalam BSON memungkinkan MongoDB melakukan traversal query dengan sangat cepat di tingkat memori dan disk.\n\n" +
            "Di MongoDB, data dikelompokkan ke dalam **Collection** (setara tabel di SQL), di mana setiap item disimpan sebagai **Document** (setara baris di SQL).\n\n" +
            "## Pemetaan Konsep: SQL vs MongoDB\n\n" +
            "| Konsep SQL (Relasional) | Konsep MongoDB (Dokumen) | Keterangan |\n" +
            "|---|---|---|\n" +
            "| Database | Database | Wadah logis untuk sekumpulan tabel/koleksi |\n" +
            "| Table | Collection | Kelompok dokumen yang sejenis |\n" +
            "| Row | Document | Satu unit data berformat BSON |\n" +
            "| Column | Field | Pasangan kunci-nilai (*key-value*) dalam dokumen |\n" +
            "| Primary Key (`id`) | `_id` (`ObjectId`) | Identitas unik otomatis 12-byte BSON |\n" +
            "| Foreign Key | Reference / Embedded Doc | Menghubungkan atau menyematkan dokumen |\n\n" +
            "## Siklus Alur Query & Operator BSON\n\n" +
            "```text\n" +
            "[ Node.js Driver / Mongoose ] ──(BSON Driver)──► [ Query Parser & Engine ]\n" +
            "                                                        │\n" +
            "                                  ┌─────────────────────┴─────────────────────┐\n" +
            "                                  ▼                                           ▼\n" +
            "                         [ Filter Operators ]                        [ Update Operators ]\n" +
            "                         • $gt / $gte / $lt / $lte                   • $set (Ubah nilai)\n" +
            "                         • $in / $nin                                • $inc (Tambah angka)\n" +
            "                         • $regex (Pencarian teks)                   • $push / $pull (Array)\n" +
            "                                  │                                           │\n" +
            "                                  └─────────────────────┬─────────────────────┘\n" +
            "                                                        ▼\n" +
            "                                            [ WiredTiger Storage Engine ]\n" +
            "                                            (B-Tree Indexing & Disk Persistence)\n" +
            "```\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan paspor fisik seseorang. Di database relasional, nama paspor ada di Tabel Paspor, stempel visa ada di Tabel Visa, dan kontak darurat ada di Tabel Kontak. Di **MongoDB**, paspor adalah **satu dokumen utuh**: nama, array visa, dan objek kontak darurat berada di dalam satu amplop BSON yang dibaca sekali jalan tanpa JOIN.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> ⚠️ **Kesalahan fatal pemula:** Mengabaikan operator `$set` saat memanggil `updateOne()`. Jika kamu menulis `db.users.updateOne({ _id }, { active: true })`, MongoDB akan **mengganti seluruh dokumen** menjadi hanya `{ active: true }` dan menghapus bidang lainnya!\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Dalam pengembangan backend berbasis Node.js/Express, pustaka **Mongoose ODM** digunakan untuk memvalidasi dokumen BSON sebelum dikirim ke database. Memahami operator native MongoDB seperti `$set`, `$inc`, dan `$push` adalah syarat mutlak agar query Mongoose milikmu tidak memicu pemindaian seluruh dokumen (*COLLSCAN*) yang lambat.",
        },
        {
          kind: "step",
          id: "nosql-2-1",
          title: "Dokumen & Koleksi MongoDB",
          explanation:
            "**APA:** MongoDB menyimpan data sebagai Dokumen BSON (Binary JSON) fleksibel di dalam Collection. Setiap dokumen secara otomatis diberi kunci unik bernama `_id` bertipe `ObjectId`.\n\n" +
            "**KENAPA:** Format BSON memungkinkan penyimpanan struktur data kompleks seperti array dan objek bersarang langsung di satu tempat tanpa pemisahan tabel.\n\n" +
            "**KAPAN:** Gunakan `insertOne()` untuk menambahkan satu dokumen baru dan `insertMany()` untuk menambahkan array dokumen sekaligus ke koleksi.\n\n" +
            "**JEBAKAN:** Menulis nama bidang dengan huruf besar/kecil yang tidak konsisten, karena kunci dokumen MongoDB bersifat *case-sensitive*.",
          example: {
            code:
              'db.users.insertOne({\n' +
              '  name: "Budi",\n' +
              '  email: "budi@test.com",\n' +
              '  hobbies: ["Coding", "Gaming"]\n' +
              '});',
            output: '{\n  "acknowledged": true,\n  "insertedId": ObjectId("65b2a1c8f9e0123456789abc")\n}',
            note: "Setiap dokumen di collection yang sama tidak wajib memiliki struktur kolom yang identik.",
          },
          instruction:
            "Tulis perintah MongoDB shell untuk memasukkan satu dokumen produk dengan atribut `title: 'Laptop'` dan `price: 1000` ke koleksi `products`.",
          starterCode: "# Tulis insertOne di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.products\\.insertOne\\(",
              message: "Gunakan metode db.products.insertOne(...).",
            },
            {
              pattern: "title\\s*:\\s*['\"]Laptop['\"]",
              message: "Sertakan bidang title: 'Laptop'.",
            },
            {
              pattern: "price\\s*:\\s*1000",
              message: "Sertakan bidang price: 1000.",
            },
          ],
          solution: "db.products.insertOne({ title: 'Laptop', price: 1000 });",
        },
        {
          kind: "step",
          id: "nosql-2-2",
          title: "Query Data dengan find() & Operator $gt, $in",
          explanation:
            "**APA:** `db.collection.find({ filter })` digunakan untuk memfilter dokumen BSON menggunakan operator seperti `$gt` (lebih besar), `$in` (mencocokkan daftar), dan `$regex`.\n\n" +
            "**KENAPA:** Operator penyeleksi BSON memberikan fleksibilitas ekspresi query yang kuat untuk data bersarang tanpa memerlukan sintaks SQL bertingkat.\n\n" +
            "**KAPAN:** Gunakan `$gt` untuk perbandingan angka dan `$in` saat kamu perlu mencocokkan satu bidang dengan beberapa pilihan nilai.\n\n" +
            "**JEBAKAN:** Menulis operator tanpa tanda dolar (seperti `gt` bukannya `$gt`) yang akan dianggap MongoDB sebagai pencarian bidang bernama `gt`.",
          example: {
            code: "db.products.find({ price: { $gt: 50000 }, status: { $in: ['active', 'sale'] } });",
            output: '[{ "_id": ObjectId("..."), "title": "Kopi Premium", "price": 75000 }]',
            note: "Gunakan $regex: /keyword/i untuk pencarian string case-insensitive.",
          },
          instruction:
            "Tulis query `find` MongoDB pada koleksi `users` untuk mencari dokumen dengan nilai `age` lebih besar dari `18` menggunakan operator `$gt`.",
          starterCode: "# Tulis db.users.find di sini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.users\\.find\\(",
              message: "Gunakan metode db.users.find(...).",
            },
            {
              pattern: "age\\s*:\\s*\\{\\s*\\$gt\\s*:\\s*18\\s*\\}",
              message: "Gunakan filter age dengan operator $gt: 18.",
            },
          ],
          solution: "db.users.find({ age: { $gt: 18 } });",
        },
        {
          kind: "step",
          id: "nosql-2-3",
          title: "Update Dokumen: $set, $inc, $push",
          explanation:
            "**APA:** Operasi `updateOne` memodifikasi dokumen yang ada menggunakan operator pembaru: `$set` (mengubah bidang), `$inc` (menambah/mengurangi angka), dan `$push` (menambah elemen ke array).\n\n" +
            "**KENAPA:** Menggunakan operator update spesifik menjamin perubahan dilakukan secara atomik tanpa risiko menimpa data bidang lain.\n\n" +
            "**KAPAN:** Gunakan `$set` untuk pembaruan biasa, `$inc` untuk hitungan counter/stok, dan `$push` untuk menambahkan entri log/riwayat ke array.\n\n" +
            "**JEBAKAN:** Memanggil `updateOne` tanpa operator `$set` yang akan menimpa seluruh dokumen menjadi hanya objek baru yang diberikan.",
          example: {
            code:
              'db.users.updateOne(\n' +
              '  { _id: userId },\n' +
              '  { $set: { status: "verified" }, $inc: { loginCount: 1 } }\n' +
              ');',
            output: '{ "acknowledged": true, "matchedCount": 1, "modifiedCount": 1 }',
            note: "Tanpa $set, updateOne akan mengganti seluruh isi dokumen!",
          },
          instruction:
            "Tulis perintah `updateOne` pada koleksi `users` yang memperbarui bidang `active` menjadi `true` menggunakan operator `$set`.",
          starterCode: "# Tulis updateOne di sini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.users\\.updateOne\\(",
              message: "Gunakan metode db.users.updateOne(...).",
            },
            {
              pattern: "\\$set\\s*:\\s*\\{\\s*active\\s*:\\s*true\\s*\\}",
              message: "Gunakan operator $set: { active: true }.",
            },
          ],
          solution: "db.users.updateOne({ _id }, { $set: { active: true } });",
        },
        {
          kind: "step",
          id: "nosql-2-4",
          title: "Penghapusan Dokumen: deleteOne & deleteMany",
          explanation:
            "**APA:** Operasi `deleteOne({ filter })` dan `deleteMany({ filter })` menghapus dokumen dari koleksi berdasarkan kondisi filter yang diberikan.\n\n" +
            "**KENAPA:** Memisahkan penghapusan tunggal (`deleteOne`) dan masal (`deleteMany`) mencegah keteledoran terhapusnya seluruh data secara tidak sengaja.\n\n" +
            "**KAPAN:** Gunakan `deleteOne` saat menghapus resource berdasarkan ID unik dan `deleteMany` saat membersihkan log yang sudah kedaluwarsa.\n\n" +
            "**JEBAKAN:** Menjalankan `deleteMany({})` dengan argumen objek kosong yang akan menguras seluruh dokumen di dalam koleksi tersebut.",
          example: {
            code: "db.logs.deleteMany({ createdAt: { $lt: new Date('2024-01-01') } });",
            output: '{ "acknowledged": true, "deletedCount": 42 }',
            note: "Di aplikasi nyata, pertimbangkan pola Soft Delete (isDeleted: true).",
          },
          instruction:
            "Tuliskan perintah `deleteOne` pada koleksi `users` untuk menghapus dokumen berdasarkan `_id: userId`.",
          starterCode: "# Tulis deleteOne di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.users\\.deleteOne\\(",
              message: "Gunakan metode db.users.deleteOne(...).",
            },
            {
              pattern: "_id\\s*:\\s*userId",
              message: "Sertakan filter _id: userId.",
            },
          ],
          solution: "db.users.deleteOne({ _id: userId });",
        },
        {
          kind: "step",
          id: "nosql-2-5",
          title: "Projection & Sort/Limit/Skip",
          explanation:
            "**APA:** Projection `{ name: 1, email: 1 }` membatasi bidang yang dikembalikan query, sementara `.sort()`, `.limit()`, dan `.skip()` mengatur urutan dan paginasi data.\n\n" +
            "**KENAPA:** Mengembalikan bidang yang diperlukan saja menghemat penggunaan RAM dan konsumsi bandwidth transfer jaringan secara drastis.\n\n" +
            "**KAPAN:** Gunakan kombinasi `.skip((page-1)*limit).limit(limit)` untuk mengimplementasikan paginasi halaman di backend API.\n\n" +
            "**JEBAKAN:** Melakukan `.skip()` dengan angka berukuran besar (misal puluhan ribu) yang memperlambat query karena MongoDB harus memindai dari dokumen awal.",
          example: {
            code: "db.users.find({}, { name: 1, email: 1 }).sort({ createdAt: -1 }).limit(10);",
            output: '[{ "_id": "...", "name": "Budi", "email": "budi@test.com" }]',
            note: "Nilai 1 pada projection berarti tampilkan, nilai 0 berarti sembunyikan.",
          },
          instruction:
            "Tuliskan query pencarian `find()` pada koleksi `products` yang diurutkan ascending berdasarkan `price` (nilai `1`) dan dibatasi maksimal `5` dokumen.",
          starterCode: "# Tulis find sort limit di sini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.products\\.find\\(",
              message: "Gunakan metode db.products.find().",
            },
            {
              pattern: "sort\\(\\s*\\{\\s*price\\s*:\\s*1\\s*\\}\\s*\\)",
              message: "Tambahkan pengurutan .sort({ price: 1 }).",
            },
            {
              pattern: "limit\\(\\s*5\\s*\\)",
              message: "Tambahkan batas hasil .limit(5).",
            },
          ],
          solution: "db.products.find().sort({ price: 1 }).limit(5);",
        },
        {
          kind: "step",
          id: "nosql-2-6",
          title: "Indexing di MongoDB (createIndex)",
          explanation:
            "**APA:** Indexing membuat struktur data B-Tree pada bidang tertentu menggunakan `createIndex({ field: 1 })` untuk memangkas pencarian data.\n\n" +
            "**KENAPA:** Tanpa indeks, MongoDB terpaksa melakukan Pemindaian Koleksi (*COLLSCAN*) dengan mengecek seluruh dokumen satu per satu dari disk.\n\n" +
            "**KAPAN:** Buat indeks pada bidang yang sering muncul di dalam filter `find()`, kondisi pengurutan `sort()`, atau pencarian unik seperti `email`.\n\n" +
            "**JEBAKAN:** Membuat terlalu banyak indeks pada satu koleksi yang akan memperlambat operasi penulisan (`insertOne`, `updateOne`) karena indeks harus terus diperbarui.",
          example: {
            code: "db.users.createIndex({ email: 1 }, { unique: true });",
            output: "email_1",
            note: "Meningkatkan kecepatan pencarian dari scan seluruh dokumen ke B-Tree scan.",
          },
          instruction:
            "Tuliskan perintah pembuatan index pada koleksi `orders` untuk field `userId` secara ascending.",
          starterCode: "# Tulis createIndex di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.orders\\.createIndex\\(",
              message: "Gunakan db.orders.createIndex(...).",
            },
            {
              pattern: "userId\\s*:\\s*1",
              message: "Tentukan opsi indeks userId: 1.",
            },
          ],
          solution: "db.orders.createIndex({ userId: 1 });",
        },
        {
          kind: "step",
          id: "nosql-2-7",
          title: "Mongoose ODM atau Driver Native",
          explanation:
            "**APA:** Driver native MongoDB memberikan kendali langsung tanpa struktur ketat, sedangkan Mongoose ODM menambahkan lapisan skema, validasi tipe, dan middleware di Node.js.\n\n" +
            "**KENAPA:** Mongoose mencegah masuknya data berstruktur tidak valid ke dalam database dengan cara melempar `ValidationError` di tingkat aplikasi.\n\n" +
            "**KAPAN:** Gunakan Mongoose saat membangun backend produksi dengan tim besar untuk memastikan konsistensi struktur dokumen di seluruh modul.\n\n" +
            "**JEBAKAN:** Menganggap skema Mongoose melindungi database secara absolut, padahal query yang ditulis langsung via Mongo Shell tetap bisa memintas skema Mongoose.",
          example: {
            code: "const UserSchema = new mongoose.Schema({\n  email: { type: String, required: true },\n});",
            output: "Dokumen tanpa bidang email ditolak sebelum dikirim ke MongoDB: ValidationError: email is required.",
          },
          instruction:
            "Buat skema Mongoose bernama `ProductSchema` dengan dua bidang: `title` bertipe `String` dan wajib diisi (`required: true`), serta `price` bertipe `Number`.",
          starterCode: "// Tulis skema Mongoose di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "const\\s+ProductSchema\\s*=\\s*new\\s+mongoose\\.Schema\\(",
              message: "Buat const ProductSchema = new mongoose.Schema({ ... }).",
            },
            {
              pattern: "title\\s*:\\s*\\{[^}]*type\\s*:\\s*String[^}]*required\\s*:\\s*true",
              message: "Bidang title bertipe String dan required: true.",
            },
            {
              pattern: "price\\s*:\\s*(Number|\\{[^}]*type\\s*:\\s*Number)",
              message: "Bidang price bertipe Number.",
            },
          ],
          solution: "const ProductSchema = new mongoose.Schema({\n  title: { type: String, required: true },\n  price: Number,\n});",
        },
        {
          kind: "quiz",
          id: "nosql-2-kuis",
          title: "Kuis: MongoDB CRUD",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Operator update MongoDB apa yang wajib digunakan saat memanggil `updateOne()` agar hanya mengubah bidang yang ditentukan tanpa menimpa seluruh isi dokumen?",
              choices: ["$set", "$update", "$change", "$replace"],
              answerIndex: 0,
              explanation: "Operator `$set` memperbarui bidang tertentu tanpa menghapus bidang dokumen yang lain.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa fungsi dari Projection pada query `find({}, { name: 1, _id: 0 })` di MongoDB?",
              choices: [
                "Menghapus dokumen yang tidak memiliki name",
                "Hanya mengembalikan bidang `name` dan menyembunyikan `_id` dari hasil query",
                "Membuat index baru pada field name",
                "Mengurutkan dokumen secara acak",
              ],
              answerIndex: 1,
              explanation: "Projection memilih atribut mana saja yang perlu dikembalikan oleh query untuk menghemat bandwidth memori.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Operator update apa yang digunakan untuk menambahkan elemen baru ke dalam bidang berjenis Array di MongoDB?",
              choices: ["$push", "$append", "$add", "$insert"],
              answerIndex: 0,
              explanation: "Operator `$push` memasukkan nilai baru ke ujung array pada dokumen MongoDB.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa fungsi dari modifier `$inc` dalam operasi update dokumen MongoDB?",
              choices: [
                "Mengganti seluruh nilai menjadi nol",
                "Menambah atau mengurangi nilai pada suatu bidang bertipe angka",
                "Menghapus bidang tertentu pada dokumen",
                "Menjadikan sebuah array memiliki nilai acak",
              ],
              answerIndex: 1,
              explanation: "Modifier `$inc` menambah atau mengurangi nilai (increment/decrement) numerik secara atomik.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Metode mana yang menghapus semua dokumen yang memenuhi kondisi tertentu tanpa menghapus collection-nya?",
              choices: [
                "db.collection.deleteMany({kondisi})",
                "db.collection.removeAll({kondisi})",
                "db.collection.drop()",
                "db.collection.deleteOne({kondisi})",
              ],
              answerIndex: 0,
              explanation: "Metode `deleteMany()` memfilter dan menghapus dokumen sekaligus, berbeda dengan `drop()` yang langsung melenyapkan tabel utuh beserta strukturnya.",
            },
          ],
        },
      ],
    },
    {
      slug: "mongodb-desain",
      title: "MongoDB: Desain & Agregasi",
      description:
        "Embed vs reference — keputusan desain terpenting di MongoDB.",
      topics: [
        "Embed vs reference: aturan praktis",
        "Memodelkan one-to-many & many-to-many",
        "Aggregation pipeline: $match, $group, $sort",
        "$lookup (join ala Mongo) & batasannya",
        "Skema validation",
        "Anti-pattern: array tak terbatas, dokumen raksasa",
      ],
      items: [
        {
          kind: "materi",
          id: "nosql-3-m1",
          title: "Desain Skema Document Store & Aggregation Pipeline",
          body:
            "# Keputusan Desain Skema: Embed vs Reference\n\n" +
            "Berbeda dari database relasional yang memisahkan entitas ke tabel-tabel terpisah melalui norma normalisasi (1NF-3NF), aturan emas pemodelan di MongoDB adalah: **'Data yang diakses bersamaan harus disimpan bersamaan.'**\n\n" +
            "Dua pola utama pemodelan data di MongoDB:\n\n" +
            "1. **Embedding (Disematkan):** Memasukkan data anak langsung sebagai sub-dokumen atau array di dalam dokumen induk.\n" +
            "2. **Referencing (Direnferensikan):** Menyimpan data anak di koleksi terpisah dan menautkannya menggunakan `ObjectId` (mirip Foreign Key).\n\n" +
            "## Panduan Memilih Model Data\n\n" +
            "| Pertimbangan | Pola Embedding | Pola Referencing |\n" +
            "|---|---|---|\n" +
            "| **Tipe Relasi** | One-to-Few (terbatas, misal 3 alamat) | One-to-Many Unbounded (ribuan log/komentar) |\n" +
            "| **Pola Akses** | Selalu dibaca bersama induk | Dibaca mandiri atau jarang diakses |\n" +
            "| **Independensi Data** | Data anak tidak berdiri sendiri | Data anak diakses oleh banyak entity lain |\n" +
            "| **Kecepatan Baca** | Sangat Cepat (1 kali read disk) | Membutuhkan `$lookup` atau query bertahap |\n\n" +
            "## Arsitektur Aggregation Pipeline\n\n" +
            "**Aggregation Pipeline** adalah fitur analitis paling ampuh di MongoDB. Data diproses secara beruntun (*sequential stage*) melalui pipa transformasi:\n\n" +
            "```text\n" +
            "[ Raw Documents ] ──► [ $match ] ──► [ $lookup ] ──► [ $group ] ──► [ $sort / $project ] ──► [ Output Final ]\n" +
            "                        Filter         JOIN           Agregasi           Format & Urutkan\n" +
            "```\n\n" +
            "### Stage Utama Aggregation Pipeline:\n" +
            "- `$match`: Menyaring dokumen awal (mirip `WHERE` di SQL).\n" +
            "- `$group`: Mengelompokkan dokumen berdasarkan kunci tertentu dan menghitung akumulasi `$sum`, `$avg`, `$max` (mirip `GROUP BY`).\n" +
            "- `$lookup`: Melakukan penggabungan dokumen (*Left Outer Join*) dari koleksi lain.\n" +
            "- `$project`: Mengubah bentuk dokumen output (menambah/menghapus field).\n" +
            "- `$unwind`: Mengurai bidang array menjadi beberapa dokumen individual.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Pola **Embedding** seperti daftar isi di dalam satu buku: kamu langsung membaca semua bab tanpa perlu beranjak. Pola **Referencing** seperti footnote yang merujuk ke buku lain di perpustakaan: kamu harus berdiri dan mengambil buku rujukan tersebut saat membutuhkan detail tambahan.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> ⚠️ **Anti-Pattern Unbounded Array:** Menyimpan array komentar yang terus bertambah tanpa batas di satu dokumen artikel. Setiap dokumen BSON memiliki batas keras **16 MB**. Begitu dokumen membengkak, pembacaan artikel biasa akan membebankan RAM secara tidak rasional.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di industri ecommerce dan SaaS, Aggregation Pipeline digunakan untuk menghasilkan laporan penjualan harian, menghitung metrik analitik dashboard, dan melakukan pencarian komprehensif. Penguasaan `$match` dan `$group` menjadi pembeda utama antara developer junior dan mid-level backend engineer.",
        },
        {
          kind: "step",
          id: "nosql-3-1",
          title: "Embed atau Reference: Aturan Praktis",
          explanation:
            "**APA:** Keputusan desain skema di MongoDB berpusat pada menyematkan data anak di dokumen induk (*Embed*) atau menyimpannya di koleksi terpisah dengan rujukan `ObjectId` (*Reference*).\n\n" +
            "**KENAPA:** Embed mempercepat pembacaan karena data diambil dalam satu operasi I/O disk, sedangkan Reference mencegah dokumen menabrak limit ukuran 16 MB.\n\n" +
            "**KAPAN:** Gunakan Embed untuk data berukuran kecil yang selalu dibaca bersama induknya (misal alamat pesanan), dan gunakan Reference untuk data yang terus bertambah tanpa batas.\n\n" +
            "**JEBAKAN:** Menyetujui pola Embed untuk data bertipe *unbounded* (seperti komentar atau log) yang pada akhirnya menembus batas 16 MB per dokumen BSON.",
          example: {
            code: "// embed: alamat selalu dibaca bersama pesanannya\ndb.pesanan.insertOne({\n  kode: 'INV-1',\n  alamat: { kota: 'Bandung', pos: '40115' },\n});",
            output: "{ acknowledged: true, insertedId: ObjectId('66c3...') }",
          },
          instruction:
            "Komentar artikel bisa bertambah tanpa batas, jadi simpan terpisah dengan pola reference. Tulis perintah yang menyimpan satu dokumen ke koleksi `komentar` berisi `artikelId` bernilai `postId` dan `isi` bernilai `'Bermanfaat!'`.",
          starterCode: "// Simpan komentar dengan pola reference\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.komentar\\.insertOne\\(",
              message: "Pakai db.komentar.insertOne({ ... }).",
            },
            {
              pattern: "artikelId\\s*:\\s*postId",
              message: "Simpan penunjuk ke induknya lewat artikelId: postId.",
            },
            {
              pattern: "isi\\s*:\\s*['\"]Bermanfaat!['\"]",
              message: "Sertakan isi: 'Bermanfaat!'.",
            },
          ],
          solution: "db.komentar.insertOne({ artikelId: postId, isi: 'Bermanfaat!' });",
        },
        {
          kind: "step",
          id: "nosql-3-2",
          title: "Memodelkan One-to-Many dan Many-to-Many",
          explanation:
            "**APA:** Relasi satu-ke-banyak dimodelkan dengan array sub-dokumen (jika jumlahnya sedikit) atau array `ObjectId` rujukan, sedangkan relasi banyak-ke-banyak umumnya menggunakan array rujukan di salah satu atau kedua dokumen.\n\n" +
            "**KENAPA:** MongoDB tidak memaksakan *junction table* (tabel perantara) seperti SQL, sehingga relasi banyak-ke-banyak bisa direpresentasikan langsung sebagai array ID.\n\n" +
            "**KAPAN:** Gunakan operator `$push` atau `$addToSet` untuk menambah elemen rujukan baru ke dalam bidang berjenis array.\n\n" +
            "**JEBAKAN:** Menggunakan `$push` berulang kali tanpa kontrol yang menyebabkan ID duplikat masuk ke dalam array rujukan.",
          example: {
            code: "// one-to-many kecil: array di dokumen induk\ndb.user.updateOne(\n  { _id: userId },\n  { $push: { telepon: '0812-1111-2222' } }\n);",
            output: "{ matchedCount: 1, modifiedCount: 1 }",
            note: "$addToSet mencegah id yang sama masuk dua kali, sedangkan $push selalu menambah.",
          },
          instruction:
            "Satu produk bisa masuk beberapa kategori. Tulis perintah `updateOne` pada koleksi `produk` yang menambahkan `kategoriId` ke array `kategori` milik dokumen dengan `_id: produkId`, memakai operator penambah elemen array.",
          starterCode: "// Tambahkan kategori ke produk\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.produk\\.updateOne\\(",
              message: "Pakai db.produk.updateOne(...).",
            },
            {
              pattern: "_id\\s*:\\s*produkId",
              message: "Saring dokumen dengan _id: produkId.",
            },
            {
              pattern: "\\$(push|addToSet)\\s*:\\s*\\{\\s*kategori\\s*:\\s*kategoriId",
              message: "Tambahkan elemen dengan $push (atau $addToSet) ke array kategori.",
            },
          ],
          solution: "db.produk.updateOne({ _id: produkId }, { $addToSet: { kategori: kategoriId } });",
        },
        {
          kind: "step",
          id: "nosql-3-3",
          title: "Aggregation Pipeline: $match, $group, $sort",
          explanation:
            "**APA:** Aggregation Pipeline memproses dokumen secara bertahap melalui serangkaian stage transformasi seperti penyaringan (`$match`), pengelompokan (`$group`), dan pengurutan (`$sort`).\n\n" +
            "**KENAPA:** Mengelompokkan dan menghitung total agregat langsung di server MongoDB jauh lebih cepat daripada mengambil ribuan dokumen ke aplikasi Node.js untuk dihitung manual.\n\n" +
            "**KAPAN:** Gunakan `$match` di awal pipeline untuk memangkas jumlah dokumen sebelum masuk ke stage pengelompokan `$group` yang berat.\n\n" +
            "**JEBAKAN:** Menempatkan `$group` sebelum `$match` yang memaksa MongoDB mengelompokkan seluruh dokumen database di RAM.",
          example: {
            code:
              "db.orders.aggregate([\n" +
              "  { $match: { status: 'completed' } },\n" +
              "  { $group: { _id: '$userId', totalSpent: { $sum: '$amount' } } },\n" +
              "  { $sort: { totalSpent: -1 } }\n" +
              "]);",
            output: '[{ "_id": "U123", "totalSpent": 2500000 }]',
            note: "Aggregation pipeline adalah fitur analitis paling ampuh di MongoDB.",
          },
          instruction:
            "Tuliskan stage `$match` di perintah `aggregate` koleksi `orders` untuk menyaring pesanan dengan `status: 'paid'`.",
          starterCode: "# Tulis aggregate $match di sini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.orders\\.aggregate\\(",
              message: "Gunakan metode db.orders.aggregate([...]).",
            },
            {
              pattern: "\\$match\\s*:\\s*\\{\\s*status\\s*:\\s*['\"]paid['\"]\\s*\\}",
              message: "Gunakan stage $match dengan status: 'paid'.",
            },
          ],
          solution: "db.orders.aggregate([{ $match: { status: 'paid' } }]);",
        },
        {
          kind: "step",
          id: "nosql-3-4",
          title: "Tahap $lookup (Join ala MongoDB)",
          explanation:
            "**APA:** Stage `$lookup` melakukan penggabungan dokumen (*Left Outer Join*) dari koleksi lain dengan mencocokkan bidang `localField` dan `foreignField`.\n\n" +
            "**KENAPA:** `$lookup` memungkinkan penggabungan data antar koleksi terpisah saat pola skema Referencing digunakan.\n\n" +
            "**KAPAN:** Gunakan `$lookup` ketika kamu perlu melengkapi dokumen utama (seperti data pesanan) dengan detail dari koleksi lain (seperti nama pengguna).\n\n" +
            "**JEBAKAN:** Menggunakan `$lookup` berantai pada koleksi berukuran jutaan dokumen tanpa indeks pada `foreignField` yang akan melumpuhkan performa database.",
          example: {
            code:
              "{\n" +
              "  $lookup: {\n" +
              "    from: 'users',\n" +
              "    localField: 'userId',\n" +
              "    foreignField: '_id',\n" +
              "    as: 'userInfo'\n" +
              "  }\n" +
              "}",
            output: '{ "from": "users", "localField": "userId", "foreignField": "_id", "as": "userInfo" }',
            note: "Gunakan $lookup secukupnya karena operasi join di NoSQL relatif mahal.",
          },
          instruction:
            "Tuliskan objek stage `$lookup` untuk menggabungkan koleksi `categories` menggunakan `localField: 'catId'`, `foreignField: '_id'`, dan nama output `category`.",
          starterCode: "# Tulis $lookup di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$lookup\\s*:",
              message: "Definisikan objek $lookup.",
            },
            {
              pattern: "from\\s*:\\s*['\"]categories['\"]",
              message: "Tentukan koleksi asal from: 'categories'.",
            },
            {
              pattern: "localField\\s*:\\s*['\"]catId['\"]",
              message: "Tentukan localField: 'catId'.",
            },
            {
              pattern: "foreignField\\s*:\\s*['\"]_id['\"]",
              message: "Tentukan foreignField: '_id'.",
            },
            {
              pattern: "as\\s*:\\s*['\"]category['\"]",
              message: "Tentukan nama hasil as: 'category'.",
            },
          ],
          solution: "{$lookup: { from: 'categories', localField: 'catId', foreignField: '_id', as: 'category' }}",
        },
        {
          kind: "step",
          id: "nosql-3-5",
          title: "Schema Validation di Sisi Database",
          explanation:
            "**APA:** Schema Validation menegakkan aturan validator `$jsonSchema` langsung di server MongoDB untuk menolak dokumen yang tidak memenuhi kriteria bidang wajib.\n\n" +
            "**KENAPA:** Penegakan aturan di level database menjamin integritas data tetap terjaga meskipun ada beberapa microservice berbeda yang mengakses koleksi tersebut.\n\n" +
            "**KAPAN:** Gunakan `db.createCollection('name', { validator: { ... } })` saat membuat koleksi krusial yang mewajibkan bidang spesifik (seperti email atau total bayar).\n\n" +
            "**JEBAKAN:** Menulis aturan validasi yang terlalu mengekang fleksibilitas dokumen NoSQL sehingga membatalkan manfaat utama skema dinamis.",
          example: {
            code: "db.createCollection('log', {\n  validator: { $jsonSchema: { required: ['level'] } },\n});",
            output: "{ ok: 1 }",
          },
          instruction:
            "Buat koleksi `pengguna` beserta validator `$jsonSchema` yang mewajibkan bidang `email` ada di setiap dokumen. Pakai `db.createCollection` dengan opsi `validator`.",
          starterCode: "// Buat koleksi beserta validatornya\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.createCollection\\(\\s*['\"]pengguna['\"]",
              message: "Pakai db.createCollection('pengguna', { ... }).",
            },
            {
              pattern: "validator\\s*:",
              message: "Sertakan opsi validator.",
            },
            {
              pattern: "\\$jsonSchema",
              message: "Pakai $jsonSchema untuk mendeskripsikan bentuk dokumen.",
            },
            {
              pattern: "required\\s*:\\s*\\[\\s*['\"]email['\"]",
              message: "Tetapkan email sebagai bidang wajib.",
            },
          ],
          solution: "db.createCollection('pengguna', {\n  validator: { $jsonSchema: { required: ['email'] } },\n});",
        },
        {
          kind: "step",
          id: "nosql-3-6",
          title: "Anti-pattern: Array yang Tumbuh Tanpa Batas",
          explanation:
            "**APA:** Menyimpan array tanpa batas di dalam satu dokumen adalah anti-pattern utama di MongoDB yang menyebabkan pembengkakan ukuran dokumen dan degradasi performa.\n\n" +
            "**KENAPA:** Setiap penambahan elemen baru memaksa MongoDB mengalokasikan ulang memori disk jika dokumen melebihi batas alokasi awal.\n\n" +
            "**KAPAN:** Gunakan kombinasi `$push` dengan modifier `$each` dan `$slice: -N` jika kamu hanya ingin mempertahankan *N* item paling baru di dalam dokumen.\n\n" +
            "**JEBAKAN:** Membiarkan array riwayat aktivitas bertambah tanpa batasan hingga menembus batas maksimum dokumen BSON 16 MB.",
          example: {
            code: "// simpan hanya 5 aktivitas terbaru di dokumen induk\ndb.user.updateOne(\n  { _id: userId },\n  { $push: { aktivitas: { $each: [baru], $slice: -5 } } }\n);",
            output: "{ matchedCount: 1, modifiedCount: 1 }",
          },
          instruction:
            "Batasi array `notifikasi` pada dokumen `user` agar hanya menyimpan 10 item terbaru. Tulis perintah `updateOne` yang menambahkan `pesanBaru` memakai `$push` dengan `$each` dan `$slice: -10`.",
          starterCode: "// Tambahkan notifikasi dengan batas jumlah\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.user\\.updateOne\\(",
              message: "Pakai db.user.updateOne(...).",
            },
            {
              pattern: "\\$push\\s*:\\s*\\{\\s*notifikasi",
              message: "Tambahkan ke array notifikasi memakai $push.",
            },
            {
              pattern: "\\$each\\s*:\\s*\\[\\s*pesanBaru\\s*\\]",
              message: "Bungkus item baru dengan $each: [pesanBaru].",
            },
            {
              pattern: "\\$slice\\s*:\\s*-10",
              message: "Batasi array dengan $slice: -10.",
            },
          ],
          solution: "db.user.updateOne(\n  { _id: userId },\n  { $push: { notifikasi: { $each: [pesanBaru], $slice: -10 } } }\n);",
        },
        {
          kind: "quiz",
          id: "nosql-3-kuis",
          title: "Kuis: MongoDB Desain & Agregasi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Stage Aggregation Pipeline MongoDB apa yang berfungsi menggabungkan data dari collection lain layaknya SQL JOIN?",
              choices: ["$match", "$lookup", "$group", "$project"],
              answerIndex: 1,
              explanation: "Stage `$lookup` melakukan left outer join ke collection lain di MongoDB.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Berapa batas ukuran maksimum untuk satu dokumen BSON tunggal di MongoDB?",
              choices: ["2 Megabytes", "8 Megabytes", "16 Megabytes", "1 Gigabyte"],
              answerIndex: 2,
              explanation: "Ukuran dokumen MongoDB dibatasi maksimum 16 MB untuk menjamin efisiensi penggunaan RAM dan jaringan.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Kapan pola Embedding (menyematkan sub-dokumen) direkomendasikan dibanding Referencing?",
              choices: [
                "Saat data anak jumlahnya terbatas (bounded) dan selalu dibaca bersamaan dengan data induk",
                "Saat data anak terus bertambah tanpa batas (jutaan log)",
                "Saat data anak diakses oleh seluruh aplikasi lain secara independen",
                "Saat tidak ada indeks yang dibuat",
              ],
              answerIndex: 0,
              explanation: "Embedding paling efisien untuk hubungan 1-to-few yang bounded dan selalu dibaca dalam satu kali query.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Mengapa menyimpan Array ukuran tak terbatas (Unbounded Array) di dalam dokumen MongoDB tidak disarankan?",
              choices: [
                "Karena akan memakan proses kompilasi BSON secara sekuensial",
                "Karena dapat menabrak batas maksimal ukuran satu dokumen (16 MB) dan lambat saat dibaca",
                "Karena ukuran array maksimal adalah 256 item",
                "Karena akan diubah menjadi string otomatis",
              ],
              answerIndex: 1,
              explanation: "Pertumbuhan array yang tak berujung bisa menembus limit memori dokumen (16 MB) sehingga merusak laju baca/tulis aplikasi (anti-pattern).",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Stage Aggregation Pipeline apa yang umumnya dipakai sedini mungkin untuk memfilter dokumen mentah?",
              choices: ["$group", "$sort", "$match", "$project"],
              answerIndex: 2,
              explanation: "Stage `$match` difungsikan untuk memfilter dan memangkas jumlah dokumen awal di pipeline sehingga memori yang dikonsumsi stage `$group` menjadi jauh lebih ringan.",
            },
          ],
        },
      ],
    },
    {
      slug: "redis",
      title: "Redis",
      description:
        "In-memory store yang naik daun — caching, session, dan antrian.",
      topics: [
        "Kenapa Redis cepat: in-memory & struktur data",
        "String, hash, list, set, sorted set — use case masing-masing",
        "TTL & eviction policy",
        "Pola cache-aside untuk API",
        "Session store & rate limiter dengan Redis",
        "Pub/sub dasar",
        "Kapan Redis BUKAN jawabannya (data utama, durability)",
      ],
      items: [
        {
          kind: "materi",
          id: "nosql-4-m1",
          title: "Arsitektur In-Memory Redis, Caching & Strategy",
          body:
            "# Arsitektur In-Memory Redis & Kecepatan Ekstrim\n\n" +
            "**Redis** (*Remote Dictionary Server*) adalah penyimpan struktur data di dalam memori RAM (*In-Memory Data Structure Store*). Berbeda dari database tradisional yang harus melakukan pembacaan blok disk NVMe/SSD, Redis mengeksekusi seluruh operasi langsung di RAM dengan waktu respon sub-milidetik (< 1 ms).\n\n" +
            "Redis menggunakan arsitektur *single-threaded event loop* berbasis *non-blocking I/O multiplexing*. Karena tidak ada *overhead context switching* antar thread dan tidak ada pencarian disk, Redis dapat melayani lebih dari 100.000 operasi per detik secara konsisten.\n\n" +
            "## Ringkasan 5 Struktur Data Utama Redis\n\n" +
            "| Tipe Data | Perintah Utama | Kasus Penggunaan Ideal |\n" +
            "|---|---|---|\n" +
            "| **String** | `SET`, `GET`, `SETEX`, `INCR` | Cache respons JSON API, token session, rate limiter counter |\n" +
            "| **Hash** | `HSET`, `HGET`, `HGETALL` | Objek user profile, item keranjang belanja sederhana |\n" +
            "| **List** | `LPUSH`, `RPOP`, `LRANGE` | Queue/antrean latar belakang (BullMQ), log aktivitas terbaru |\n" +
            "| **Set** | `SADD`, `SMEMBERS`, `SISMEMBER` | Daftar ID unik, tagar postingan, pengikut bersama (*mutual*) |\n" +
            "| **Sorted Set** | `ZADD`, `ZRANGE`, `ZREVRANGE` | Papan peringkat (*Leaderboard* game/skor), prioritas antrean |\n\n" +
            "## Pola Arsitektur Cache-Aside (Lazy Loading)\n\n" +
            "Pola caching paling populer untuk REST API backend adalah **Cache-Aside**:\n\n" +
            "```text\n" +
            "[ Client ] ──1. Request API──► [ Backend Server ] ──2. GET key ──► [ Redis Cache ]\n" +
            "                                     │                                │\n" +
            "                                     ├── (Hit: Data ditemukan) ◄──────┤\n" +
            "                                     │                                │ (Miss: nil)\n" +
            "                                     └── 3. Query DB ──► [ PostgreSQL / Mongo ]\n" +
            "                                            │\n" +
            "                                            └─► 4. SETEX key TTL ──► [ Redis Cache ]\n" +
            "```\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan dapur restoran berbintang. Database utama (PostgreSQL/MongoDB) seperti gudang pendingin besar di lantai bawah: lengkap dan aman, tetapi membutuhkan waktu 5 menit untuk mengambil bahan baku. **Redis** seperti meja persiapan koki (*prep station*): bumbu dan bahan populer ditaruh tepat di depan koki untuk diambil dalam waktu 1 detik.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> ⚠️ **Lupa memasang TTL (Time-To-Live):** Menyimpan kunci cache di Redis tanpa perintah `EXPIRE` atau `SETEX` akan membuat RAM server membengkak hingga penuh. Saat RAM 100%, Redis akan mulai menghapus kunci acak (*OOM Eviction*) atau menolak perintah penulisan baru!\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Redis adalah komponen standar dalam arsitektur backend modern. Redis digunakan oleh framework seperti Laravel (Laravel Horizon/Redis Queue) dan Node.js (BullMQ) untuk mengelola antrean pengiriman email, serta digunakan oleh API Gateway untuk *rate limiting* pencegahan serangan DDoS.",
        },
        {
          kind: "step",
          id: "nosql-4-1",
          title: "Kenapa Redis Super Cepat?",
          explanation:
            "**APA:** Redis menyimpan seluruh data langsung di memori utama (RAM) menggunakan arsitektur *single-threaded event loop* berbasis non-blocking I/O multiplexing.\n\n" +
            "**KENAPA:** Kecepatan akses RAM beribu-ribu kali lebih cepat daripada disk NVMe, dan arsitektur single-threaded menghilangkan *overhead lock concurrency*.\n\n" +
            "**KAPAN:** Gunakan Redis CLI `SET key value` dan `GET key` untuk menyimpan data string sederhana yang membutuhkan akses instan sub-milidetik.\n\n" +
            "**JEBAKAN:** Menjadikan Redis sebagai database persisten utama untuk data keuangan tanpa memahami risiko hilangnya memori RAM saat server restart.",
          example: {
            code: "SET user:1 'Budi'\nGET user:1",
            output: '"Budi"',
            note: "Redis umumnya digunakan sebagai Lapisan Cache di depan database utama.",
          },
          instruction:
            "Tulis perintah Redis CLI `SET` untuk menyimpan key `user:1` dengan nilai string `'Budi'`.",
          starterCode: "# Tulis perintah Redis SET di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SET\\s+user:1\\s+['\"]Budi['\"]",
              message: "Tuliskan: SET user:1 'Budi'",
            },
          ],
          solution: "SET user:1 'Budi'",
        },
        {
          kind: "step",
          id: "nosql-4-2",
          title: "Struktur Data Redis: String, Hash, List, Set",
          explanation:
            "**APA:** Redis mendukung tipe data terstruktur seperti String, Hash (`HSET`), List (`LPUSH`), Set (`SADD`), dan Sorted Set (`ZADD`).\n\n" +
            "**KENAPA:** Tipe data Hash sangat efisien untuk menyimpan atribut objek karena meminimalkan penggunaan memori dibanding menyimpan JSON string mentah.\n\n" +
            "**KAPAN:** Gunakan `HSET` untuk atribut profil pengguna, `LPUSH/RPOP` untuk antrean tugas, dan `ZADD` untuk papan peringkat (*leaderboard*).\n\n" +
            "**JEBAKAN:** Menggunakan `HGETALL` pada Hash yang memiliki ratusan ribu bidang yang akan memblokir thread tunggal Redis sementara waktu.",
          example: {
            code: "HSET user:100 name 'Bimo' age '25'\nHGET user:100 name",
            output: '"Bimo"',
            note: "Hash sangat cocok untuk menyimpan objek JSON sederhana.",
          },
          instruction:
            "Tuliskan perintah Redis CLI `HSET` untuk mengeset atribut `name` bernilai `'Budi'` pada key hash `user:1`.",
          starterCode: "# Tulis HSET di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "HSET\\s+user:1\\s+name\\s+['\"]Budi['\"]",
              message: "Tuliskan: HSET user:1 name 'Budi'",
            },
          ],
          solution: "HSET user:1 name 'Budi'",
        },
        {
          kind: "step",
          id: "nosql-4-3",
          title: "Masa Kedaluwarsa Data (TTL & EXPIRE)",
          explanation:
            "**APA:** Redis menyediakan perintah `EXPIRE key seconds` dan `SETEX key seconds value` untuk memberikan waktu hidup (*Time To Live*) pada kunci data.\n\n" +
            "**KENAPA:** Data sementara seperti OTP atau token sesi harus terhapus secara otomatis dari RAM untuk menjaga kapasitas memori dan keamanan.\n\n" +
            "**KAPAN:** Gunakan `SETEX` saat memasukkan data cache API atau token login agar tidak perlu memanggil perintah `EXPIRE` terpisah.\n\n" +
            "**JEBAKAN:** Lupa memasang TTL pada kunci cache yang mengakibatkan penggunaan RAM membengkak hingga menyentuh batas *Out Of Memory* (OOM).",
          example: {
            code: "SETEX session:abc 3600 'userId_100'",
            output: "OK",
            note: "Sangat ideal untuk manajemen data session login dan OTP.",
          },
          instruction:
            "Tulis perintah Redis CLI `SETEX` untuk menyimpan key `otp:123` selama `60` detik dengan nilai `'998877'`.",
          starterCode: "# Tulis perintah SETEX di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SETEX\\s+otp:123\\s+60\\s+['\"]998877['\"]",
              message: "Gunakan: SETEX otp:123 60 '998877'",
            },
          ],
          solution: "SETEX otp:123 60 '998877'",
        },
        {
          kind: "step",
          id: "nosql-4-4",
          title: "Pola Cache-Aside untuk API",
          explanation:
            "**APA:** Cache-Aside adalah strategi membaca cache terlebih dahulu; jika tidak ditemukan (*Cache Miss*), aplikasi mengambil data dari database lalu menyimpannya ke Redis.\n\n" +
            "**KENAPA:** Mengurangi beban *query* langsung ke database utama pada endpoint API dengan lalu lintas pembacaan yang sangat tinggi.\n\n" +
            "**KAPAN:** Terapkan pola ini pada data yang sering dibaca tetapi jarang diperbarui, seperti katalog produk atau detail postingan blog.\n\n" +
            "**JEBAKAN:** Menyimpan hasil kosong atau error ke cache tanpa penanganan TTL yang tepat, membuat pengguna mendapat respon error berulang.",
          example: {
            code: "GET produk:7\nSETEX produk:7 300 '{\"nama\":\"Kopi\"}'",
            output: "(nil)\nOK",
          },
          instruction:
            "Tulis dua perintah Redis CLI berurutan untuk pola cache-aside pada key `artikel:12`: pertama ambil nilainya dari cache, lalu simpan hasil dari database selama 600 detik dengan nilai `'{\"judul\":\"NoSQL\"}'`.",
          starterCode: "# Baris 1: ambil dari cache. Baris 2: simpan beserta masa berlakunya\n",
          language: "text",
          tests: [
            {
              pattern: "GET\\s+artikel:12",
              message: "Baris pertama: GET artikel:12.",
            },
            {
              pattern: "SETEX\\s+artikel:12\\s+600",
              message: "Baris kedua: SETEX artikel:12 600 diikuti nilainya.",
            },
            {
              pattern: "\\{[^}]*judul",
              message: "Simpan nilai JSON yang memuat judul.",
            },
          ],
          solution: "GET artikel:12\nSETEX artikel:12 600 '{\"judul\":\"NoSQL\"}'",
        },
        {
          kind: "step",
          id: "nosql-4-5",
          title: "Rate Limiter dengan INCR dan EXPIRE",
          explanation:
            "**APA:** Rate Limiter membatasi frekuensi permintaan pengguna dalam jendela waktu tertentu menggunakan kombinasi atomik perintah `INCR` dan `EXPIRE`.\n\n" +
            "**KENAPA:** Operasi `INCR` di Redis bersifat atomik dan aman dari *race condition* meski diakses secara bersamaan oleh ribuan proses backend.\n\n" +
            "**KAPAN:** Terapkan pada endpoint login untuk mencegah *brute force* atau pada API publik untuk mencegah penyalahgunaan kuota kupon.\n\n" +
            "**JEBAKAN:** Lupa mengeksekusi `EXPIRE` pada kenaikan `INCR` pertama, yang menyebabkan penghat batas terhitung selamanya tanpa reset.",
          example: {
            code: "INCR limit:ip:10.0.0.1\nEXPIRE limit:ip:10.0.0.1 60",
            output: "(integer) 1\n(integer) 1",
          },
          instruction:
            "Batasi permintaan pengguna `u7` menjadi per 60 detik. Tulis dua perintah Redis CLI: naikkan penghitung pada key `limit:u7`, lalu pasang masa berlaku 60 detik pada key yang sama.",
          starterCode: "# Baris 1: naikkan penghitung. Baris 2: pasang masa berlaku\n",
          language: "text",
          tests: [
            {
              pattern: "INCR\\s+limit:u7",
              message: "Naikkan penghitung dengan INCR limit:u7.",
            },
            {
              pattern: "EXPIRE\\s+limit:u7\\s+60",
              message: "Pasang masa berlaku dengan EXPIRE limit:u7 60.",
            },
          ],
          solution: "INCR limit:u7\nEXPIRE limit:u7 60",
        },
        {
          kind: "step",
          id: "nosql-4-6",
          title: "Pub/Sub Sederhana di Redis",
          explanation:
            "**APA:** Fitur Pub/Sub (*Publish/Subscribe*) Redis memungkinkan komunikasi pesan real-time antar microservice menggunakan `PUBLISH channel message` dan `SUBSCRIBE channel`.\n\n" +
            "**KENAPA:** Menyediakan jalur pemrosesan event terdistribusi yang sangat ringan tanpa perlu mengkonfigurasi broker pesan berat seperti Kafka.\n\n" +
            "**KAPAN:** Gunakan untuk menyiarkan notifikasi obrolan instan (*chat*), pembaruan status sistem, atau pemicu pembersihan cache lintas server.\n\n" +
            "**JEBAKAN:** Pub/Sub Redis bersifat *fire-and-forget* (tidak menyimpan riwayat pesan); jika subscriber offline saat pesan dikirim, pesan tersebut hilang.",
          example: {
            code: "PUBLISH chat 'Halo Semua'\nSUBSCRIBE chat",
            output: "(integer) 1",
            note: "Gunakan untuk fitur obrolan atau notifikasi terdistribusi.",
          },
          instruction:
            "Tuliskan perintah CLI Redis `PUBLISH` untuk mengirim pesan `'Headline'` ke channel `'news'`.",
          starterCode: "# Tulis PUBLISH di sini\n",
          language: "text",
          tests: [
            {
              pattern: "PUBLISH\\s+news\\s+['\"]Headline['\"]",
              message: "Tuliskan: PUBLISH news 'Headline'",
            },
          ],
          solution: "PUBLISH news 'Headline'",
        },
        {
          kind: "step",
          id: "nosql-4-7",
          title: "Kapan Redis Bukan Jawabannya",
          explanation:
            "**APA:** Redis adalah *in-memory store* yang dirancang untuk performa tinggi, bukan untuk persistensi permanen data transaksi utama aplikasi.\n\n" +
            "**KENAPA:** RAM bersifat *volatile* dan biayanya mahal; menyimpan seluruh data historis di RAM tidak rasional secara finansial.\n\n" +
            "**KAPAN:** Gunakan Redis sebagai lapisan cache/sesi ephemeral di depan PostgreSQL atau MongoDB, bukan sebagai tempat penyimpanan permanen tunggal.\n\n" +
            "**JEBAKAN:** Lupa melakukan invalidasi cache (`DEL key`) saat data di database utama diperbarui, menyebabkan aplikasi menampilkan data usang.",
          example: {
            code: "# data utama tetap di database, cache boleh hilang\nDEL produk:7",
            output: "(integer) 1",
            note: "Membuang cache setelah data berubah disebut cache invalidation — sumber bug klasik kalau terlupa.",
          },
          instruction:
            "Setelah harga produk berubah di database utama, cache lama harus dibuang agar pengguna tidak melihat harga basi. Tulis perintah Redis CLI yang menghapus key `produk:7`.",
          starterCode: "# Buang cache yang sudah tidak berlaku\n",
          language: "text",
          tests: [
            {
              pattern: "(DEL|UNLINK)\\s+produk:7",
              message: "Pakai DEL produk:7 (atau UNLINK) untuk membuang cache lama.",
            },
          ],
          solution: "DEL produk:7",
        },
        {
          kind: "quiz",
          id: "nosql-4-kuis",
          title: "Kuis: Redis",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa Redis dapat mengeksekusi operasi data jauh lebih cepat daripada database tradisional seperti PostgreSQL?",
              choices: [
                "Karena Redis menyimpan seluruh data di dalam RAM (In-Memory), bukan di Hard Disk",
                "Karena Redis ditulis dalam bahasa Python",
                "Karena Redis tidak menggunakan kabel internet",
                "Karena Redis menghapus seluruh file log",
              ],
              answerIndex: 0,
              explanation: "Kecepatan ekstrim Redis berasal dari arsitektur In-Memory Store yang menyimpan data langsung di RAM.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Perintah Redis apa yang digunakan untuk memasukkan kunci bertipe string sekaligus mengatur waktu kedaluwarsa (TTL) dalam detik?",
              choices: ["SETEX", "EXPIRE", "HSET", "INCR"],
              answerIndex: 0,
              explanation: "`SETEX key seconds value` memasukkan string sekaligus menyetel nilai kedaluwarsa TTL dalam satu operasi atomik.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa Redis TIDAK cocok dijadikan sebagai database utama untuk menyimpan transaksi keuangan abadi?",
              choices: [
                "Karena Redis tidak mendukung angka desimal",
                "Karena data disimpan di RAM yang bersifat volatile (berisiko hilang jika server mati/kehabisan RAM)",
                "Karena Redis hanya bisa diakses oleh 1 user",
                "Karena Redis memerlukan izin khusus",
              ],
              answerIndex: 1,
              explanation: "RAM bersifat volatile dan mahal. Redis dirancang untuk caching dan session ephemeral, bukan gudang persisten transaksi keuangan.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Pada pola desain 'Cache-Aside', apa yang dilakukan jika data tidak ditemukan (Cache Miss)?",
              choices: [
                "Sistem memberi respons error",
                "Sistem mengambil data dari database relasional lalu menyimpannya di Redis",
                "Sistem menghentikan proses sementara",
                "Sistem merestart server Redis",
              ],
              answerIndex: 1,
              explanation: "Saat Cache Miss, sistem akan membaca database asli untuk merespon dan menyimpan hasil tarikannya ke Redis supaya proses serupa jadi instan di kemudian hari.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Pada Redis, jenis data apa yang dimanipulasi dengan perintah awalan L dan R seperti LPUSH dan RPOP?",
              choices: ["Set", "Hash", "List", "Sorted Set"],
              answerIndex: 2,
              explanation: "Perintah push/pop awalan L (Left) dan R (Right) digunakan pada tipe List untuk membikin message queue atau antrean.",
            },
          ],
        },
      ],
    },
  ],
};
