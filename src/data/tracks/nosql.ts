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
      slug: "persiapan-konsep-nosql",
      title: "Persiapan & Konsep NoSQL",
      description:
        "Siapkan MongoDB (Atlas gratis atau Docker lokal) lalu pahami peta NoSQL — bukan pengganti SQL, alat berbeda untuk masalah berbeda.",
      topics: [
        "Menyiapkan MongoDB: Atlas gratis atau Docker lokal, lalu menyambung dengan mongosh",
        "Empat keluarga: document, key-value, column, graph",
        "Trade-off vs relasional: skema, konsistensi, skala",
        "CAP theorem dijelaskan praktis",
        "Kesalahan umum: pakai NoSQL karena 'keren'",
        "Studi kasus: aplikasi yang tepat untuk masing-masing",
      ],
      items: [
        {
          kind: "materi",
          id: "nosql-1-m0",
          title: "Persiapan: Menyiapkan MongoDB dan Menyambung dengan mongosh",
          body:
            "# Pengertian\n\n" +
            "Sebelum membahas teori NoSQL, satu hal praktis harus beres: **kamu butuh database yang bisa disambungi.** Untuk track ini, MongoDB adalah pilihannya, dan ada dua cara menyiapkannya — keduanya gratis.\n\n" +
            "**mongosh** adalah shell resmi MongoDB: sebuah program terminal tempat kamu mengetik perintah database dan langsung melihat jawabannya. Ia berbeda dari **MongoDB Compass** yang berupa aplikasi dengan tampilan grafis. Keduanya boleh dipakai; latihan di track ini menulis perintah gaya `mongosh` karena itulah yang muncul di dokumentasi, di soal interview, dan di kode aplikasi.\n\n" +
            "## Dua Cara Menyiapkan MongoDB\n\n" +
            "| | **Atlas** (di cloud) | **Docker** (di komputermu) |\n" +
            "|---|---|---|\n" +
            "| Cara mulai | daftar di mongodb.com/atlas, buat cluster gratis M0 | `docker run -d -p 27017:27017 --name mongo mongo:7` |\n" +
            "| Butuh internet | ya, selalu | tidak, setelah image terunduh |\n" +
            "| Bentuk connection string | `mongodb+srv://user:sandi@cluster0.xxxxx.mongodb.net` | `mongodb://localhost:27017` |\n" +
            "| Cocok untuk | mencoba cepat, proyek portofolio yang perlu diakses orang lain | belajar tanpa kuota, mengulang dari nol kapan saja |\n" +
            "| Jebakan khasnya | lupa menambahkan IP-mu ke **Network Access** → koneksi menggantung lalu timeout | lupa `-p 27017:27017` → port tidak terbuka, koneksi ditolak |\n\n" +
            "## Alur Menyambung\n\n" +
            "```text\n" +
            "  1. database menyala             2. mongosh menyambung         3. kamu mengetik perintah\n" +
            "  +---------------------+         +-------------------+         +---------------------+\n" +
            "  | Atlas M0  ATAU      |  <----  | mongosh \"<uri>\"   |  ---->  | test> db.produk     |\n" +
            "  | container mongo:7   |         +-------------------+         |        .find()      |\n" +
            "  +---------------------+                                       +---------------------+\n" +
            "\n" +
            "  Prompt berubah jadi nama database:  test>  atau  toko>\n" +
            "  Ganti database aktif dengan:        use toko\n" +
            "```\n\n" +
            "```text\n" +
            "$ mongosh \"mongodb://localhost:27017\"\n" +
            "Current Mongosh Log ID: 66a5f1c2e4b0a1d3f2c8b7a9\n" +
            "Connecting to:          mongodb://localhost:27017\n" +
            "Using MongoDB:          7.0.12\n" +
            "test> use toko\n" +
            "switched to db toko\n" +
            "toko> db.produk.insertOne({ nama: \"Kopi Gayo\", stok: 12 })\n" +
            "{ acknowledged: true, insertedId: ObjectId('66a5f2...') }\n" +
            "```\n\n" +
            "Satu hal yang mengejutkan pendatang dari SQL: **kamu tidak perlu membuat database dan collection lebih dulu.** MongoDB membuatnya otomatis saat dokumen pertama masuk. Enak, tapi ada sisi gelapnya — lihat bagian jebakan.\n\n" +
            "## Kosakata: Padanan Istilah dari SQL\n\n" +
            "| SQL | MongoDB | Catatan |\n" +
            "|---|---|---|\n" +
            "| database | database | sama |\n" +
            "| tabel | **collection** | tidak punya skema tetap |\n" +
            "| baris | **document** | bentuknya seperti object JSON |\n" +
            "| kolom | **field** | tiap dokumen boleh punya field berbeda |\n" +
            "| `id SERIAL PRIMARY KEY` | `_id: ObjectId(...)` | dibuat otomatis kalau tidak kamu isi |\n" +
            "| `JOIN` | `$lookup` (agregasi) | ada, tapi lebih mahal dan lebih jarang dipakai |\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Database relasional itu seperti **formulir kertas yang sudah dicetak**: kolomnya sudah ditentukan, dan semua orang wajib mengisi kolom yang sama. MongoDB seperti **tumpukan catatan bebas dalam satu kotak**: setiap catatan boleh memuat hal berbeda.\n\n" +
            "Kebebasan itu berguna saat bentuk data memang belum pasti (katalog produk yang tiap kategorinya beda atribut). Tapi kebebasan yang tidak dijaga berubah jadi kekacauan: satu dokumen memakai field `harga`, dokumen lain `price`, dan laporan pun salah tanpa satu pun pesan error.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Salah ketik nama collection.** `db.produks.find()` untuk collection `produk` tidak error — ia mengembalikan hasil kosong, karena MongoDB menganggap kamu sedang menyebut collection baru yang belum berisi apa pun. Ini jebakan paling mahal bagi pendatang dari SQL, yang biasa mendapat pesan `relation does not exist`.\n" +
            "2. **Lupa membuka Network Access di Atlas.** Gejalanya bukan penolakan cepat, tapi koneksi yang menggantung lama lalu `ServerSelectionTimeoutError`.\n" +
            "3. **Menaruh sandi Atlas langsung di kode.** Connection string mengandung username dan sandi — ia wajib masuk `.env`, dan `.env` wajib masuk `.gitignore`.\n" +
            "4. **Sandi mengandung karakter khusus** (`@`, `:`, `/`) tanpa di-*encode* → connection string gagal diparse dengan pesan yang tidak menyebut sandi sama sekali.\n" +
            "5. **Mengira container Docker menyimpan data selamanya.** `docker rm mongo` tanpa volume berarti seluruh datanya hilang. Untuk latihan itu tidak masalah; untuk hal serius, pasang volume.\n" +
            "6. **Menganggap tanpa skema berarti tanpa desain.** Justru sebaliknya: karena database tidak lagi menjaga bentuk data, disiplin itu pindah ke kode aplikasimu.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "- Di lowongan, MongoDB hampir selalu muncul berpasangan dengan Node.js (`MERN stack`), dan yang diuji bukan hafalan perintah tapi **kapan kamu memilihnya dan kapan tidak**.\n" +
            "- Pertanyaan **interview** yang paling sering: \"kapan kamu pakai MongoDB, kapan PostgreSQL?\" Jawaban yang bagus menyebut bentuk data dan pola akses, bukan \"MongoDB lebih cepat\".\n" +
            "- Di **code review**, kredensial database yang tertulis di kode adalah temuan yang langsung memblokir PR — bukan catatan kecil.\n\n" +
            "> **Kapan dipakai:** setiap awal proyek — nyalakan database (Atlas atau Docker), simpan connection string di `.env`, sambungkan dengan `mongosh` sekali untuk membuktikan koneksinya hidup, baru tulis kode aplikasi. Membalik urutan ini membuatmu men-debug dua hal sekaligus.\n\n" +
            "> **Catatan tentang latihan di BiLearn:** panel latihan track ini **tidak menjalankan MongoDB** (tidak ada database di dalam browser), jadi tidak ada hasil query yang muncul di sana. Yang diperiksa adalah perintah yang kamu tulis, dan tesnya tetap bisa lulus. Hasil nyata selalu ditampilkan di bagian **Contoh**.",
        },
        {
          kind: "step",
          id: "nosql-1-0",
          title: "Menyambung ke MongoDB dengan mongosh",
          explanation:
            "`mongosh` adalah shell resmi MongoDB, dan cara memakainya adalah menyebutkan **connection string** sebagai argumen. Bentuknya `mongodb://host:port` untuk database lokal, atau `mongodb+srv://...` untuk Atlas di cloud. Port bawaan MongoDB adalah **27017**, dan angka itu layak kamu hafal karena muncul di hampir semua konfigurasi. Kamu menjalankan perintah ini di awal sesi kerja untuk membuktikan databasenya benar-benar bisa dihubungi — jauh lebih cepat daripada menebak-nebak dari dalam kode aplikasi. Jebakan yang sering: connection string tidak dibungkus tanda kutip, sehingga karakter seperti `?` dan `&` pada URI Atlas ditafsirkan oleh shell dan perintahnya gagal dengan pesan yang membingungkan. Jebakan kedua: `ECONNREFUSED` disimpulkan sebagai \"mongosh rusak\", padahal artinya tidak ada database yang mendengarkan di alamat itu — containernya belum menyala.",
          example: {
            code: 'mongosh "mongodb+srv://bimo:rahasia@cluster0.ab12c.mongodb.net"',
            output:
              "Current Mongosh Log ID: 66a5f1c2e4b0a1d3f2c8b7a9\n" +
              "Connecting to:          mongodb+srv://<credentials>@cluster0.ab12c.mongodb.net\n" +
              "Using MongoDB:          7.0.12\n" +
              "Atlas atlas-abc123-shard-0 [primary] test>",
            note: "Perhatikan sandi disamarkan menjadi `<credentials>` di keluaran, tapi tetap terbaca utuh di riwayat terminal (`history`). Itu sebabnya di proyek nyata connection string dibaca dari `.env`, bukan diketik langsung.",
          },
          instruction:
            "Kamu menjalankan MongoDB lokal lewat Docker di port bawaannya. Tulis perintah `mongosh` untuk menyambung ke database di komputermu sendiri, lengkap dengan connection string yang sesuai (bungkus dengan tanda kutip).",
          starterCode: "# tulis perintahnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "mongosh\\s+['\"]?mongodb://",
              message:
                "Mulai dengan `mongosh`, lalu connection string berskema `mongodb://` (bukan `mongodb+srv://` — bentuk itu khusus Atlas di cloud).",
            },
            {
              pattern: "mongodb://(localhost|127\\.0\\.0\\.1):27017",
              message:
                "Untuk database di komputer sendiri, host-nya `localhost` (atau `127.0.0.1`) dan port bawaan MongoDB adalah 27017. Tulis dengan format host:port.",
            },
          ],
          solution: 'mongosh "mongodb://localhost:27017"',
          susunKode: {
            question:
              "Susun perintah CLI mongosh untuk terhubung ke database MongoDB lokal.",
            potongan: [
              "mongosh",
              "\"mongodb://localhost:27017\"",
            ],
            pengecoh: [
              "mongo-cli",
              "\"http://localhost:27017\"",
            ],
            pemisah: " ",
            explanation:
              "Koneksi ke instance MongoDB lokal menggunakan utilitas CLI `mongosh` dengan connection string berpola `mongodb://host:port`. Penggunaan nama CLI fiktif 'mongo-cli' atau skema URL 'http://' merupakan kekeliruan protokol yang sering menggoda pemula dan membuat koneksi gagal.",
          },
        },
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
            code:
              "// dokumen di MongoDB: satu entitas utuh, tanpa JOIN\n" +
              "db.produk.insertOne({\n" +
              "  nama: 'Kopi Gayo',\n" +
              "  varian: [{ ukuran: '250g', harga: 65000 }],\n" +
              "});",
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
          susunKode: {
            question:
              "Susun perintah MongoDB insertOne dengan bidang array tags bersarang.",
            potongan: [
              "db.artikel.insertOne({ judul: 'Belajar NoSQL',",
              "tags: ['db', 'nosql'] });",
            ],
            pengecoh: [
              "db.artikel.addOne({ judul: 'Belajar NoSQL',",
              "tags: 'db, nosql' });",
            ],
            pemisah: " ",
            explanation:
              "Penyisipan dokumen dengan array bersarang pada MongoDB shell menggunakan perintah `db.koleksi.insertOne({ ... })`. Penggunaan kata 'addOne' atau penulisan array sebagai string biasa 'db, nosql' adalah bentuk kesalahan sintaksis yang sering mengelirukan pembelajar.",
          },
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
            code:
              "// dokumen katalog: dibaca utuh, bentuk tiap kategori berbeda\n" +
              "db.katalog.findOne({ slug: 'kopi-gayo' });",
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
          susunKode: {
            question:
              "Susun perintah MongoDB insertOne dengan bidang sub-dokumen meta bersarang.",
            potongan: [
              "db.aktivitas.insertOne({ tipe: 'login',",
              "meta: { ip: '10.0.0.1' } });",
            ],
            pengecoh: [
              "db.aktivitas.insert({ tipe: 'logout',",
              "meta: '10.0.0.1' });",
            ],
            pemisah: " ",
            explanation:
              "Operasi penyisipan dokumen dengan sub-dokumen/objek bersarang di MongoDB menggunakan `insertOne()` dan sintaks objek `{ meta: { ip: '...' } }`. Penggunaan string biasa pada meta atau kata 'logout' adalah kekeliruan umum dan jebakan sintaks.",
          },
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
            code:
              "// membaca dari primary: konsisten, tapi gagal saat primary tidak terjangkau\n" +
              "db.saldo.find({ userId: 7 }).readPref('primary');",
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
          susunKode: {
            question:
              "Susun query MongoDB untuk mengambil dokumen dengan preferensi membaca dari replika sekunder.",
            potongan: [
              "db.katalog.find()",
              ".readPref('secondary');",
            ],
            pengecoh: [
              "db.katalog.query()",
              ".readMode('secondary');",
            ],
            pemisah: "",
            explanation:
              "Pengaturan preferensi baca dari replika sekunder pada MongoDB menggunakan metode `.readPref('secondary')` setelah `.find()`. Penggunaan kata '.query()' atau '.readMode()' adalah jebakan sintaks fiktif yang sering membingungkan.",
          },
        },
        {
          kind: "step",
          id: "nosql-1-4",
          title: "Kesalahan Umum: Memilih NoSQL karena Sedang Ramai",
          explanation:
            "**APA:** Memilih database NoSQL semata karena popularitas daripada analisis bentuk relasi data adalah kesalahan arsitektur klasik yang merugikan jangka panjang.\n\n" +
            "**KENAPA:** Data keuangan dan transaksi memerlukan integritas ACID multi-dokumen ketat. Di MongoDB kamu harus mengelolanya secara eksplisit lewat session transaksi.\n\n" +
            "**KAPAN:** Gunakan transaksi `session.startTransaction()` dan `session.commitTransaction()` ketika dua dokumen saling terkait wajib diperbarui bersama atau dibatalkan seluruhnya.\n\n" +
            "**JEBAKAN:** Menulis sendiri logika penguncian manual di kode backend Node.js karena memaksakan data relasional kompleks ke dalam model document store.",
          example: {
            code:
              "// transaksi multi-dokumen di MongoDB wajib menggunakan session eksplisit\n" +
              "session.startTransaction();\n" +
              "await db.akun.updateOne({ id: 1 }, { $inc: { saldo: -50000 } }, { session });\n" +
              "await db.akun.updateOne({ id: 2 }, { $inc: { saldo: 50000 } }, { session });\n" +
              "session.commitTransaction();",
            output: "Kedua akun berhasil diperbarui secara atomik dalam satu siklus commit transaksi.",
          },
          instruction:
            "Dalam arsitektur MongoDB transaksi keuangan, transfer saldo antar rekening harus diapit blok sesi terdistribusi. Tulis urutan pemanggilan sesi transaksi dasar pada objek `session`: mulai transaksi baru di baris pertama, lalu simpan perubahan permanen dengan komit transaksi di baris kedua.",
          starterCode: "// Tulis manajemen sesi transaksi di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "session\\.startTransaction\\(\\s*\\)",
              message: "Mulai transaksi dengan memanggil session.startTransaction(); pada baris pertama.",
            },
            {
              pattern: "session\\.commitTransaction\\(\\s*\\)",
              message: "Akhiri dan tetapkan transaksi dengan memanggil session.commitTransaction(); pada baris kedua.",
            },
          ],
          solution: "session.startTransaction();\nsession.commitTransaction();",
          susunKode: {
            question:
              "Susun blok transaksi MongoDB dari startTransaction hingga commitTransaction.",
            potongan: [
              "session.startTransaction();\n",
              "session.commitTransaction();",
            ],
            pengecoh: [
              "session.beginTransaction();\n",
              "session.endTransaction();",
            ],
            pemisah: "",
            explanation:
              "Pengelolaan transaksi pada MongoDB session menggunakan pasangan perintah `session.startTransaction();` dan `session.commitTransaction();`. Penggunaan kata 'beginTransaction' (sintaks SQL/ORM) adalah kekeliruan API MongoDB yang sering mengecoh.",
          },
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
            code:
              "// sesi login di Redis: cepat dan otomatis kedaluwarsa\n" +
              "SETEX sesi:u7 3600 'token-abc'",
            output: "OK",
          },
          instruction:
            "Pengguna dengan identitas `u42` baru saja berhasil melakukan autentikasi login. Simpan token otentikasinya `'token-xyz'` ke dalam cache Redis dengan nama kunci `sesi:u42` dan atur agar kedaluwarsa otomatis dalam 1800 detik.",
          starterCode: "# Tulis perintah Redis di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SETEX\\s+sesi:u42\\s+1800",
              message: "Gunakan SETEX diikuti nama key sesi:u42 dan durasi 1800 detik.",
            },
            {
              pattern: "['\"]?token-xyz['\"]?",
              message: "Sertakan nilai string token-xyz di argumen terakhir.",
            },
          ],
          solution: "SETEX sesi:u42 1800 'token-xyz'",
          susunKode: {
            question:
              "Susun perintah Redis CLI SETEX untuk menyimpan sesi dengan TTL 1800 detik.",
            potongan: [
              "SETEX sesi:u42 1800",
              "'token-xyz'",
            ],
            pengecoh: [
              "SET_EXPIRE sesi:u42 1800",
              "'session-expired'",
            ],
            pemisah: " ",
            explanation:
              "Perintah Redis untuk menyimpan string dengan waktu kadaluarsa (TTL) dalam detik adalah `SETEX key ttl nilai`. Sintaks 'SET_EXPIRE' atau mengganti nilai token dengan 'session-expired' adalah kesalahan istilah CLI yang sering menggoda.",
          },
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
            {
              id: "q6",
              type: "pilihan-ganda",
              question: "Dalam skenario sistem perbankan terdistribusi saat terjadi gangguan jaringan antar data center (Network Partition), pilihan Teorema CAP manakah yang wajib diambil dan apa dampaknya?",
              choices: [
                "Memilih CP: transaksi ditolak sementara demi menjaga konsistensi saldo akurat",
                "Memilih AP: transaksi tetap diproses walau saldo berisiko mengalami double-spending",
                "Memilih CA: mengabaikan gangguan jaringan dan memaksa seluruh node sinkron",
                "Memilih No-CAP: teorema CAP tidak berlaku pada aplikasi perbankan modern",
              ],
              answerIndex: 0,
              explanation: "Untuk sistem finansial dan buku besar, konsistensi data mutlak (CP). Lebih aman menolak transaksi sementara daripada mengizinkan mutasi saldo yang belum tersinkronisasi.",
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
        "Compound index & aturan ESR (Equality, Sort, Range)",
        "Query profiling dengan explain('executionStats') & COLLSCAN vs IXSCAN",
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
            "Katalog toko online perlu mencatat inventaris baru. Tulis perintah shell MongoDB untuk menyisipkan satu dokumen ke koleksi `products` dengan nama barang (`title`) bernilai `'Laptop'` dan harga (`price`) bernilai `1000`.",
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
          susunKode: {
            question:
              "Susun perintah MongoDB insertOne untuk menambahkan produk baru.",
            potongan: [
              "db.products.insertOne({ title: 'Laptop',",
              "price: 1000 });",
            ],
            pengecoh: [
              "db.products.save({ title: 'Desktop',",
              "cost: 1000 });",
            ],
            pemisah: " ",
            explanation:
              "Memasukkan satu dokumen ke koleksi MongoDB menggunakan `insertOne({ field: value })`. Penggunaan `save()` (metode lama yang sudah deprecated) atau nama field 'Desktop'/'cost' mengelirukan pembelajar secara jebakan.",
          },
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
            "Untuk menyaring pendaftar yang sudah cukup umur, buat query pencarian pada koleksi `users` yang mengambil seluruh pengguna dengan usia (`age`) di atas 18 tahun memanfaatkan operator pembanding numerik.",
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
          susunKode: {
            question:
              "Susun kueri MongoDB find dengan operator $gt untuk menyaring umur di atas 18.",
            potongan: [
              "db.users.find({",
              "age: { $gt: 18 } });",
            ],
            pengecoh: [
              "db.users.search({",
              "age: { >: 18 } });",
            ],
            pemisah: " ",
            explanation:
              "Penyaringan nilai 'lebih besar dari' pada MongoDB kueri wajib menggunakan operator kueri `$gt`. Penggunaan simbol pembanding mentah `>: 18` atau kata `search()` adalah bentuk kekeliruan sintaksis kueri BSON yang jebakan.",
          },
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
            "Akun pengguna dengan `_id` perlu diaktifkan kembali setelah verifikasi email. Tulis perintah pembaruan dokumen tunggal pada koleksi `users` untuk dokumen tersebut agar field `active` bernilai `true` tanpa menghapus data field lainnya.",
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
          susunKode: {
            question:
              "Susun perintah MongoDB updateOne dengan operator $set untuk mengedit bidang active.",
            potongan: [
              "db.users.updateOne({ _id },",
              "{ $set: { active: true } });",
            ],
            pengecoh: [
              "db.users.update({ _id },",
              "{ $update: { active: true } });",
            ],
            pemisah: " ",
            explanation:
              "Pengubahan bidang dokumen di MongoDB tanpa menimpa seluruh dokumen wajib menggunakan operator `$set`. Penggunaan `$update` (operator fiktif) atau `update()` tanpa `$set` adalah kesalahan klasik yang keliru dan membingungkan.",
          },
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
            "Seorang pengguna memutuskan untuk menutup akunnya secara permanen. Tulis perintah pada koleksi `users` untuk menghapus satu dokumen milik pengguna tersebut berdasarkan kecocokan `_id: userId`.",
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
          susunKode: {
            question:
              "Susun perintah MongoDB deleteOne untuk menghapus dokumen berdasarkan _id.",
            potongan: [
              "db.users.deleteOne({",
              "_id: userId });",
            ],
            pengecoh: [
              "db.users.remove({",
              "identifier: userId });",
            ],
            pemisah: " ",
            explanation:
              "Penghapusan satu dokumen pada MongoDB shell menggunakan `deleteOne({ _id: ... })`. Metode `remove()` sudah deprecated, dan penulisan field identifier utama pada MongoDB selalu `_id`, bukan `identifier` secara jebakan.",
          },
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
            "Etalase toko ingin menampilkan 5 produk termurah. Tulis query pencarian pada koleksi `products` yang mengurutkan harga (`price`) dari yang paling murah (ascending) dan membatasi keluaran hanya sebanyak 5 dokumen.",
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
          susunKode: {
            question:
              "Susun query MongoDB find yang diurutkan berdasar harga termurah dan dibatasi 5 dokumen.",
            potongan: [
              "db.products.find()",
              ".sort({ price: 1 })",
              ".limit(5);",
            ],
            pengecoh: [
              "db.products.select()",
              ".orderBy({ price: 'ASC' })",
              ".take(5);",
            ],
            pemisah: "",
            explanation:
              "Pengurutan dan pembatasan hasil kueri MongoDB menggunakan chaining method `.sort({ field: 1 })` untuk ascending (atau -1 untuk descending) dan `.limit(n)`. Penggunaan kata '.orderBy' atau '.take' adalah kekeliruan istilah ORM SQL.",
          },
        },
        {
          kind: "materi",
          id: "nosql-2-m2",
          title: "Strategi Indexing MongoDB & Analisis Query Lambat",
          body:
            "# Strategi Indexing & Optimasi Query MongoDB\n\n" +
            "Ketika data di dalam koleksi bertambah dari ribuan menjadi jutaan dokumen, query tanpa indeks akan memicu bencana performa: **Collection Scan (COLLSCAN)**. Pada mode COLLSCAN, mesin penyimpanan WiredTiger terpaksa membaca seluruh blok disk dokumen dari awal sampai akhir, membebani CPU hingga 100% dan membuat latensi API melonjak drastis.\n\n" +
            "Indeks di MongoDB menggunakan struktur data **B-Tree** yang tersimpan di RAM. Dengan indeks, waktu pencarian terpangkas dari linear $O(N)$ menjadi logaritmik $O(\\log N)$.\n\n" +
            "## Perbandingan Strategi Indeks\n\n" +
            "| Jenis Indeks | Sintaks Pembuatan | Kasus Penggunaan Ideal |\n" +
            "|---|---|---|\n" +
            "| **Single Field** | `db.users.createIndex({ email: 1 })` | Pencarian kunci unik atau filter tunggal |\n" +
            "| **Compound Index** | `db.orders.createIndex({ storeId: 1, createdAt: -1 })` | Filter multi-field dan pengurutan berurutan |\n" +
            "| **TTL Index** | `db.logs.createIndex({ createdAt: 1 }, { expireAfterSeconds: 86400 })` | Pembersihan otomatis data sesi/log kedaluwarsa |\n" +
            "| **Multikey Index** | `db.posts.createIndex({ tags: 1 })` | Mengindeks elemen di dalam field bertipe array |\n\n" +
            "## Aturan Emas Compound Index: ESR Rule\n\n" +
            "Saat merancang compound index untuk query yang menggabungkan filter dan sorting, urutan deklarasi field **wajib** mengikuti aturan **ESR (Equality, Sort, Range)**:\n\n" +
            "```text\n" +
            "  1. EQUALITY (=)         2. SORT (Urutan)          3. RANGE (<, >, in)\n" +
            "  Field filter pasti      Field yang diurutkan      Field rentang nilai\n" +
            "  [ status: 'paid' ] ──►  [ createdAt: -1 ]   ──►   [ amount: { $gt: 50000 } ]\n" +
            "```\n\n" +
            "Jika kamu membalik urutannya (misal menaruh field Range sebelum Sort), MongoDB tidak bisa memanfaatkan B-Tree untuk sorting dan terpaksa melakukan *in-memory sort* yang dibatasi maksimal 32 MB.\n\n" +
            "## Diagnostik dengan explain('executionStats')\n\n" +
            "Untuk membuktikan efektivitas indeks, jalankan query dengan suffix `.explain('executionStats')`. Perhatikan dua metrik kritis:\n\n" +
            "- `stage`: Jika tertulis `COLLSCAN`, berarti query memindai seluruh database tanpa indeks. Targetmu adalah `IXSCAN` (Index Scan).\n" +
            "- Rasio `totalDocsExamined` vs `nReturned`: Jika database memeriksa 50.000 dokumen hanya untuk mengembalikan 2 dokumen, indeksmu belum optimal!\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Query tanpa indeks seperti mencari nama teman di buku telepon tebal 1.000 halaman yang halamannya diacak: kamu harus membaca nama di setiap lembar dari halaman 1 sampai 1.000. **Indeks B-Tree** seperti buku telepon yang sudah diurutkan abjad: kamu langsung melompat ke huruf 'B' dalam hitungan detik.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> ⚠️ **Index Overload:** Membuat indeks untuk setiap field secara membabi buta. Setiap kali ada operasi `insertOne()` atau `updateOne()`, seluruh B-Tree indeks terkait harus dihitung ulang. Terlalu banyak indeks akan melumpuhkan performa *write* dan menguras kapasitas RAM server.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Dalam code review backend dan evaluasi sistem produksi di AWS/Atlas, menemukan query berstatus `COLLSCAN` adalah insiden prioritas tinggi. Mengetahui cara menggunakan `.explain('executionStats')` dan merancang compound index dengan aturan ESR adalah keahlian mutlak yang diuji saat *technical interview* level Mid-Senior Backend Engineer.",
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
            "Pencarian riwayat pesanan berdasarkan pemesan sering dijalankan pelanggan. Tulis perintah pembuatan indeks pada koleksi `orders` untuk field `userId` dengan urutan ascending agar query tidak membaca seluruh dokumen.",
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
          susunKode: {
            question:
              "Susun perintah MongoDB createIndex untuk membuat indeks ascending pada userId.",
            potongan: [
              "db.orders.createIndex({",
              "userId: 1 });",
            ],
            pengecoh: [
              "db.orders.addIndex({",
              "userId: 'ASC' });",
            ],
            pemisah: " ",
            explanation:
              "Pembuatan indeks pada koleksi MongoDB menggunakan `createIndex({ field: 1 })`. Arah indeks ditentukan dengan angka 1 (ascending) atau -1 (descending), bukan string 'ASC' yang sering keliru menggoda pembelajar.",
          },
        },
        {
          kind: "step",
          id: "nosql-2-8",
          title: "Compound Index dan Aturan ESR",
          explanation:
            "**APA:** Compound Index mengindeks dua atau lebih bidang sekaligus dalam satu struktur B-Tree dengan mengikuti aturan urutan ESR (Equality, Sort, Range).\n\n" +
            "**KENAPA:** Indeks gabungan memungkinkan MongoDB menyaring filter kesamaan sekaligus mengurutkan hasil secara langsung tanpa alokasi memori tambahan (*in-memory sort*).\n\n" +
            "**KAPAN:** Gunakan compound index pada query kompleks yang memadukan filter ID spesifik dengan pengurutan kronologis, seperti riwayat pesanan per toko.\n\n" +
            "**JEBAKAN:** Menempatkan bidang rentang nilai sebelum bidang pengurutan yang menggugurkan kemampuan indeks dalam mengeliminasi operasi sort di memori.",
          example: {
            code: "db.transaksi.createIndex({ merchantId: 1, tanggal: -1 });",
            output: "merchantId_1_tanggal_-1",
            note: "Aturan ESR menjamin Equality (merchantId) berada di depan Sort (tanggal).",
          },
          instruction:
            "Query aplikasi sering menyaring pesanan berdasarkan toko (`storeId`) lalu mengurutkan hasilnya dari pesanan terbaru (`createdAt` descending). Buat compound index pada koleksi `orders` untuk kedua field tersebut sesuai kaidah urutan Equality lalu Sort.",
          starterCode: "# Buat compound index sesuai aturan ESR\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.orders\\.createIndex\\(",
              message: "Panggil metode db.orders.createIndex(...).",
            },
            {
              pattern: "storeId\\s*:\\s*1",
              message: "Sertakan field storeId: 1 sebagai Equality.",
            },
            {
              pattern: "createdAt\\s*:\\s*-1",
              message: "Sertakan field createdAt: -1 untuk pengurutan descending.",
            },
          ],
          solution: "db.orders.createIndex({ storeId: 1, createdAt: -1 });",
          susunKode: {
            question:
              "Susun perintah pembuatan compound index pada koleksi orders.",
            potongan: [
              "db.orders.createIndex({",
              "storeId: 1, createdAt: -1 });",
            ],
            pengecoh: [
              "db.orders.buildIndex({",
              "storeId: 'EQ', createdAt: 'DESC' });",
            ],
            pemisah: " ",
            explanation:
              "Compound index pada MongoDB dibuat dengan memanggil `createIndex({ fieldA: 1, fieldB: -1 })` sesuai aturan ESR (Equality, Sort, Range). Pilihan pengecoh 'buildIndex' serta notasi 'EQ' atau 'DESC' merupakan istilah fiktif yang sering keliru digunakan oleh pemula yang terbiasa dengan query builder SQL, sehingga menjadi jebakan sintaks.",
          },
        },
        {
          kind: "step",
          id: "nosql-2-9",
          title: "Query Profiling dengan explain('executionStats')",
          explanation:
            "**APA:** Metode `.explain('executionStats')` menganalisis rencana eksekusi query dan mengukur statistik aktual seperti jumlah dokumen yang dipindai serta waktu eksekusi.\n\n" +
            "**KENAPA:** Perintah ini memberikan bukti konkret apakah query berhasil memanfaatkan indeks (stage `IXSCAN`) atau terperangkap dalam pemindaian lambat (`COLLSCAN`).\n\n" +
            "**KAPAN:** Jalankan profiling saat menganalisis keluhan API lambat di lingkungan staging atau produksi sebelum memutuskan pembuatan indeks baru.\n\n" +
            "**JEBAKAN:** Menjalankan explain tanpa argumen `'executionStats'` yang hanya menampilkan prediksi rencana query tanpa metrik waktu dan dokumen riil.",
          example: {
            code: "db.users.find({ email: 'budi@test.com' }).explain('executionStats');",
            output: '{\n  "executionStats": {\n    "executionStages": { "stage": "IXSCAN", "indexName": "email_1" },\n    "totalDocsExamined": 1,\n    "nReturned": 1\n  }\n}',
            note: "Rasio totalDocsExamined berbanding nReturned idealnya mendekati 1:1.",
          },
          instruction:
            "Query pencarian pesanan yang belum diproses terasa lambat di server produksi. Jalankan evaluasi performa pada query pencarian `status: 'pending'` di koleksi `orders` menggunakan metode penjelas dengan mode statistik eksekusi untuk menganalisis indeks.",
          starterCode: "# Jalankan profiling executionStats pada query orders\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.orders\\.find\\(\\s*\\{\\s*status\\s*:\\s*['\"]pending['\"]\\s*\\}\\s*\\)",
              message: "Tulis query find pada koleksi orders dengan filter status: 'pending'.",
            },
            {
              pattern: "explain\\(\\s*['\"]executionStats['\"]\\s*\\)",
              message: "Lakukan chaining dengan metode .explain('executionStats').",
            },
          ],
          solution: "db.orders.find({ status: 'pending' }).explain('executionStats');",
          susunKode: {
            question:
              "Susun perintah query find dengan metode explain executionStats.",
            potongan: [
              "db.orders.find({ status: 'pending' })",
              ".explain('executionStats');",
            ],
            pengecoh: [
              "db.orders.query({ status: 'pending' })",
              ".profile('detailed');",
            ],
            pemisah: "",
            explanation:
              "Pemeriksaan efisiensi query secara akurat dilakukan dengan menyambungkan metode `.explain('executionStats')` langsung pada akhir query `find()`. Metode fiktif seperti `.profile('detailed')` atau `.query()` adalah jebakan istilah yang sering keliru diucapkan pembelajar, dan tidak dikenali oleh shell resmi MongoDB.",
          },
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
            "Dalam proyek backend Node.js, definisikan skema Mongoose bernama `ProductSchema` yang memiliki atribut `title` bertipe `String` dan wajib diisi (`required: true`), serta atribut `price` bertipe `Number`.",
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
          susunKode: {
            question:
              "Susun pendefinisian skema Mongoose ProductSchema.",
            potongan: [
              "const ProductSchema = new mongoose.Schema({\n",
              "  title: { type: String, required: true },\n",
              "  price: Number,\n});",
            ],
            pengecoh: [
              "const ProductSchema = new mongoose.Model({\n",
              "  title: { dataType: 'string', isRequired: true },\n",
              "  price: 'number',\n});",
            ],
            pemisah: "",
            explanation:
              "Pendefinisian skema Mongoose menggunakan `new mongoose.Schema({ field: { type: Type, required: true } })`. Penggunaan `dataType` atau `isRequired` (istilah fiktif) merupakan kesalahan umum dalam skema ODM yang jebakan.",
          },
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
              question: "Berdasarkan kaidah ESR (Equality, Sort, Range) dalam perancangan compound index, manakah urutan pembuatan indeks yang paling optimal untuk query filter toko sama, rentang harga, dan urutan tanggal terbaru?",
              choices: [
                "{ storeId: 1, createdAt: -1, price: 1 } (Equality -> Sort -> Range)",
                "{ price: 1, createdAt: -1, storeId: 1 } (Range -> Sort -> Equality)",
                "{ createdAt: -1, storeId: 1, price: 1 } (Sort -> Equality -> Range)",
                "{ storeId: 1, price: 1, createdAt: -1 } (Equality -> Range -> Sort)",
              ],
              answerIndex: 0,
              explanation: "Aturan ESR mewajibkan field Equality di depan, diikuti field Sort agar tidak memicu in-memory sorting, dan terakhir field Range.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Hasil `.explain('executionStats')` menunjukkan `stage: 'COLLSCAN'` dan `totalDocsExamined: 100000` dengan `nReturned: 5`. Apa arti temuan ini dan tindakannya?",
              choices: [
                "Query melakukan scan seluruh koleksi tanpa index; wajib dibuatkan index pada field filter terkait",
                "Query sudah sangat optimal karena berhasil menemukan 5 dokumen",
                "Database kehabisan memori RAM sehingga beralih ke SSD",
                "Koneksi jaringan timeout karena dokumen berukuran terlalu besar",
              ],
              answerIndex: 0,
              explanation: "COLLSCAN berarti pemindaian menyeluruh terhadap 100.000 dokumen untuk mengambil 5 hasil saja. Ini adalah anti-pattern performa yang harus diatasi dengan indeks.",
            },
            {
              id: "q6",
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
        "Agregasi $group: menghitung total dan rata-rata ($sum, $avg)",
        "Agregasi $unwind: mengurai array sub-dokumen",
        "Pipeline multi-tahap terpadu ($match, $group, $sort)",
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
            "[ Raw Documents ] ──► [ $match ] ──► [ $unwind ] ──► [ $group ] ──► [ $sort / $project ] ──► [ Output Final ]\n" +
            "                        Filter         Urai Array      Agregasi           Format & Urutkan\n" +
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
            "Di industri ecommerce dan SaaS, Aggregation Pipeline digunakan untuk menghasilkan laporan penjualan harian, menghitung metrik analitik dashboard, dan melakukan pencarian komprehensif. Penguasaan `$match`, `$unwind`, dan `$group` menjadi pembeda utama antara developer junior dan mid-level backend engineer.",
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
            code:
              "// embed: alamat selalu dibaca bersama pesanannya\n" +
              "db.pesanan.insertOne({\n" +
              "  kode: 'INV-1',\n" +
              "  alamat: { kota: 'Bandung', pos: '40115' },\n" +
              "});",
            output: "{ acknowledged: true, insertedId: ObjectId('66c3...') }",
          },
          instruction:
            "Komentar pada artikel blog populer berpotensi mencapai jutaan baris sehingga tidak boleh disimpan di dokumen artikel. Tulis perintah untuk menambahkan satu dokumen baru ke koleksi `komentar` dengan referensi `artikelId: postId` dan isi teks komentar `isi: 'Bermanfaat!'`.",
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
          susunKode: {
            question:
              "Susun penyisipan dokumen komentar dengan pola referensi artikelId.",
            potongan: [
              "db.komentar.insertOne({ artikelId: postId,",
              "isi: 'Bermanfaat!' });",
            ],
            pengecoh: [
              "db.komentar.add({ artikel_id: postId,",
              "content: 'Bermanfaat!' });",
            ],
            pemisah: " ",
            explanation:
              "Penerapan pola referensi antar-dokumen di MongoDB menyimpan ID dokumen induk sebagai bidang referensi `artikelId: postId`. Penggunaan metode `.add()` adalah kesalahan sintaksis shell yang sering menggoda pembelajar.",
          },
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
            code:
              "// one-to-many kecil: array di dokumen induk\n" +
              "db.user.updateOne(\n" +
              "  { _id: userId },\n" +
              "  { $push: { telepon: '0812-1111-2222' } }\n" +
              ");",
            output: "{ matchedCount: 1, modifiedCount: 1 }",
            note: "$addToSet mencegah id yang sama masuk dua kali, sedangkan $push selalu menambah.",
          },
          instruction:
            "Satu barang dagangan dapat dikaitkan ke beberapa kategori sekaligus. Tulis perintah pembaruan dokumen tunggal pada koleksi `produk` untuk barang dengan `_id: produkId` guna menambahkan `kategoriId` ke dalam array `kategori` tanpa memasukkan nilai duplikat.",
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
          susunKode: {
            question:
              "Susun perintah MongoDB updateOne dengan operator $addToSet untuk penambahan array unik.",
            potongan: [
              "db.produk.updateOne({ _id: produkId },",
              "{ $addToSet: { kategori: kategoriId } });",
            ],
            pengecoh: [
              "db.produk.update({ _id: produkId },",
              "{ $append: { kategori: kategoriId } });",
            ],
            pemisah: " ",
            explanation:
              "Penambahan elemen unik ke dalam bidang bertipe array pada MongoDB menggunakan operator `$addToSet`. Operator `$append` tidak ada di MongoDB (sering keliru dikira dari bahasa lain) dan metode `update()` deprecated.",
          },
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
            "Sebagai tahap awal pembuatan laporan keuangan, saring dokumen pesanan pada koleksi `orders` yang sudah lunas (`status: 'paid'`) menggunakan stage penyaringan pada aggregation pipeline.",
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
          susunKode: {
            question:
              "Susun pipeline aggregation MongoDB dengan stage $match.",
            potongan: [
              "db.orders.aggregate([",
              "{ $match: { status: 'paid' } } ]);",
            ],
            pengecoh: [
              "db.orders.pipeline([",
              "{ $where: { status: 'paid' } } ]);",
            ],
            pemisah: " ",
            explanation:
              "Aggregation pipeline MongoDB menerima array of stages `[{ ... }]` di mana penyaringan awal menggunakan stage `$match`. Menggantikan `$match` dengan `$where` atau kata `.pipeline()` adalah kekeliruan sintaks aggregation yang jebakan.",
          },
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
            "Dalam pipeline agregasi pesanan, gabungkan dokumen kategori terkait dari koleksi luar. Tulis objek stage `$lookup` yang mengambil data dari koleksi `'categories'`, mencocokkan field lokal `'catId'` dengan field relasi `'_id'`, dan menyimpan hasilnya sebagai array `'category'`.",
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
          susunKode: {
            question:
              "Susun stage aggregation $lookup untuk mengombinasikan data antar koleksi.",
            potongan: [
              "{$lookup: { from: 'categories',",
              "localField: 'catId', foreignField: '_id', as: 'category' }}",
            ],
            pengecoh: [
              "{$join: { target: 'categories',",
              "joinField: 'catId', foreignField: '_id', alias: 'category' }}",
            ],
            pemisah: " ",
            explanation:
              "Stage `$lookup` pada MongoDB aggregation pipeline digunakan untuk left outer join antar koleksi dengan parameter `from`, `localField`, `foreignField`, dan `as`. Penggunaan kata `$join` atau `target` adalah bentuk kekeliruan istilah fiktif.",
          },
        },
        {
          kind: "step",
          id: "nosql-3-7",
          title: "Agregasi $group: Menghitung Omset dengan $sum",
          explanation:
            "**APA:** Stage `$group` mengelompokkan dokumen berdasarkan nilai field tertentu (disimpan di `_id`) dan menghitung agregasi seperti jumlah `$sum` dan rata-rata `$avg`.\n\n" +
            "**KENAPA:** Perhitungan agregat di level server database memanfaatkan komputasi paralel dan memangkas ribuan baris data menjadi satu ringkasan ringkas.\n\n" +
            "**KAPAN:** Gunakan `$group` untuk membuat laporan keuangan bulanan, metrik performa toko, atau ringkasan penjualan per kategori produk.\n\n" +
            "**JEBAKAN:** Lupa menambahkan tanda dolar sebelum nama field referensi (seperti `$amount`) sehingga akumulator menjumlahkan string literal bukan nilai field.",
          example: {
            code: "db.orders.aggregate([{ $group: { _id: '$status', totalItems: { $sum: '$qty' } } }]);",
            output: '[{ "_id": "delivered", "totalItems": 420 }, { "_id": "canceled", "totalItems": 18 }]',
            note: "Akumulator $sum: '$qty' menjumlahkan isi field qty untuk setiap grup status pesanan.",
          },
          instruction:
            "Manajemen membutuhkan ringkasan omset penjualan per kategori produk. Tulis query agregasi pada koleksi `sales` yang mengelompokkan dokumen berdasarkan field `category` (sebagai `_id`), lalu menghitung total pendapatan (`totalRevenue`) menggunakan akumulator `$sum` dari field `amount`.",
          starterCode: "# Tulis aggregate $group di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.sales\\.aggregate\\(",
              message: "Gunakan metode db.sales.aggregate([...]).",
            },
            {
              pattern: "\\$group\\s*:\\s*\\{\\s*_id\\s*:\\s*['\"]\\$category['\"]",
              message: "Gunakan stage $group dengan _id bernilai '$category'.",
            },
            {
              pattern: "totalRevenue\\s*:\\s*\\{\\s*\\$sum\\s*:\\s*['\"]\\$amount['\"]",
              message: "Hitung totalRevenue dengan akumulator { $sum: '$amount' }.",
            },
          ],
          solution: "db.sales.aggregate([{ $group: { _id: '$category', totalRevenue: { $sum: '$amount' } } }]);",
          susunKode: {
            question:
              "Susun pipeline agregasi untuk mengelompokkan kategori dan menghitung totalRevenue.",
            potongan: [
              "db.sales.aggregate([",
              "{ $group: { _id: '$category',",
              "totalRevenue: { $sum: '$amount' } } } ]);",
            ],
            pengecoh: [
              "{ $groupBy: { category: 1,",
              "totalRevenue: { $total: 'amount' } } } ]);",
            ],
            pemisah: " ",
            explanation:
              "Pengelompokan agregasi di MongoDB selalu menggunakan stage resmi `$group` dengan parameter `_id` dan operator akumulasi seperti `$sum: '$amount'`. Penggunaan nama stage `$groupBy` atau akumulator `$total` adalah bentuk kekeliruan sintaksis yang sering menggoda pemula dan menjadi jebakan umum.",
          },
        },
        {
          kind: "step",
          id: "nosql-3-8",
          title: "Agregasi $unwind: Mengurai Array Sub-dokumen",
          explanation:
            "**APA:** Stage `$unwind` mendekonstruksi field bertipe array di dalam dokumen, menghasilkan satu dokumen tiruan untuk setiap elemen array tersebut.\n\n" +
            "**KENAPA:** MongoDB tidak dapat melakukan `$group` atau penghitungan agregat langsung pada item bersarang di dalam array tanpa memecahnya terlebih dahulu.\n\n" +
            "**KAPAN:** Gunakan `$unwind` ketika pesanan memiliki array produk `items` dan kamu ingin menganalisis item mana yang paling laku secara individual.\n\n" +
            "**JEBAKAN:** Menjalankan `$unwind` pada dokumen yang field array-nya bernilai null atau kosong akan membuang dokumen tersebut dari output kecuali opsi `preserveNullAndEmptyArrays: true` diaktifkan.",
          example: {
            code: "db.articles.aggregate([{ $unwind: '$tags' }]);",
            output: '[{ "_id": 101, "title": "NoSQL", "tags": "db" }, { "_id": 101, "title": "NoSQL", "tags": "mongo" }]',
            note: "Array tags yang berisi 2 string diurai menjadi 2 dokumen mandiri dengan tag individual.",
          },
          instruction:
            "Setiap faktur pesanan menyimpan daftar barang belanjaan di dalam array `items`. Untuk menganalisis penjualan barang secara terpisah, gunakan stage `$unwind` pada aggregation pipeline koleksi `orders` untuk memecah array `items` menjadi baris dokumen individual.",
          starterCode: "# Tulis aggregate $unwind di sini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.orders\\.aggregate\\(",
              message: "Panggil metode db.orders.aggregate([...]).",
            },
            {
              pattern: "\\$unwind\\s*:\\s*['\"]\\$items['\"]",
              message: "Gunakan stage { $unwind: '$items' }.",
            },
          ],
          solution: "db.orders.aggregate([{ $unwind: '$items' }]);",
          susunKode: {
            question:
              "Susun pipeline agregasi untuk mengurai array items dengan $unwind.",
            potongan: [
              "db.orders.aggregate([",
              "{ $unwind: '$items' } ]);",
            ],
            pengecoh: [
              "db.orders.pipeline([",
              "{ $flatten: '$items' } ]);",
            ],
            pemisah: " ",
            explanation:
              "Dekonstruksi elemen array menjadi baris dokumen terpisah pada MongoDB pipeline menggunakan stage `$unwind: '$items'`. Pemakaian istilah fiktif seperti `.pipeline()` atau operator `$flatten` adalah jebakan keliru yang sering menggoda pembelajar karena mirip fungsi manipulasi array di JavaScript.",
          },
        },
        {
          kind: "step",
          id: "nosql-3-9",
          title: "Pipeline Multi-tahap Terpadu ($match, $group, $sort)",
          explanation:
            "**APA:** Aggregation pipeline berdaya guna tinggi mengombinasikan beberapa stage sekuensial: filter awal (`$match`), pengelompokan agregat (`$group`), dan pengurutan (`$sort`).\n\n" +
            "**KENAPA:** Eksekusi berurutan dalam satu pipeline memangkas beban jaringan dan RAM aplikasi dibanding menarik data mentah untuk diproses di Node.js.\n\n" +
            "**KAPAN:** Gunakan pipeline lengkap untuk dasbor analitik manajemen bisnis, seperti daftar pelanggan setia dengan akumulasi pembelanjaan terbesar.\n\n" +
            "**JEBAKAN:** Menaruh filter `$match` setelah `$group` yang mengakibatkan database membuang resource mengelompokkan dokumen yang sebenarnya tidak dibutuhkan.",
          example: {
            code:
              "db.orders.aggregate([\n" +
              "  { $match: { status: 'completed' } },\n" +
              "  { $group: { _id: '$customerId', totalBelanja: { $sum: '$total' } } },\n" +
              "  { $sort: { totalBelanja: -1 } }\n" +
              "]);",
            output: '[{ "_id": "C01", "totalBelanja": 1200000 }, { "_id": "C02", "totalBelanja": 850000 }]',
            note: "Urutan filter -> group -> sort adalah arsitektur pipeline standar industri.",
          },
          instruction:
            "Susun pipeline agregasi 3 tahap pada koleksi `orders`: saring transaksi yang `status: 'completed'` pada stage pertama, kelompokkan berdasarkan `customerId` untuk menjumlahkan `totalBelanja` dengan akumulator `$sum: '$total'` pada stage kedua, lalu urutkan hasilnya dari belanja tertinggi ke terendah (`totalBelanja: -1`) pada stage ketiga.",
          starterCode: "# Susun pipeline $match, $group, dan $sort di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "db\\.orders\\.aggregate\\(",
              message: "Gunakan metode db.orders.aggregate([...]).",
            },
            {
              pattern: "\\$match\\s*:\\s*\\{\\s*status\\s*:\\s*['\"]completed['\"]\\s*\\}",
              message: "Tahap 1 wajib berupa $match dengan status: 'completed'.",
            },
            {
              pattern: "\\$group\\s*:\\s*\\{\\s*_id\\s*:\\s*['\"]\\$customerId['\"]\\s*,\\s*totalBelanja\\s*:\\s*\\{\\s*\\$sum\\s*:\\s*['\"]\\$total['\"]",
              message: "Tahap 2 wajib berupa $group dengan _id: '$customerId' dan akumulator totalBelanja.",
            },
            {
              pattern: "\\$sort\\s*:\\s*\\{\\s*totalBelanja\\s*:\\s*-1\\s*\\}",
              message: "Tahap 3 wajib berupa $sort dengan totalBelanja: -1.",
            },
          ],
          solution: "db.orders.aggregate([{ $match: { status: 'completed' } }, { $group: { _id: '$customerId', totalBelanja: { $sum: '$total' } } }, { $sort: { totalBelanja: -1 } }]);",
          susunKode: {
            question:
              "Susun pipeline agregasi 3 tahap ($match -> $group -> $sort).",
            potongan: [
              "db.orders.aggregate([",
              "{ $match: { status: 'completed' } },",
              "{ $group: { _id: '$customerId', totalBelanja: { $sum: '$total' } } },",
              "{ $sort: { totalBelanja: -1 } } ]);",
            ],
            pengecoh: [
              "{ $filter: { status: 'completed' } },",
              "{ $orderBy: { totalBelanja: 'DESC' } } ]);",
            ],
            pemisah: " ",
            explanation:
              "Pipeline multi-stage pada MongoDB wajib menggunakan tahapan baku `$match` untuk filter, `$group` untuk kalkulasi akumulator, dan `$sort` untuk pengurutan. Mengganti nama stage menjadi `$filter` atau `$orderBy` adalah kesalahan umum yang keliru dan sering menjadi jebakan pemula dari latar belakang SQL.",
          },
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
            "Untuk mencegah masuknya data tanpa identitas kontak, buat koleksi baru bernama `'pengguna'` menggunakan aturan validator `$jsonSchema` yang menetapkan field `'email'` sebagai bidang wajib.",
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
          susunKode: {
            question:
              "Susun pembuatan koleksi pengguna dengan validator $jsonSchema.",
            potongan: [
              "db.createCollection('pengguna', {\n",
              "  validator: { $jsonSchema: { required: ['email'] } },\n});",
            ],
            pengecoh: [
              "db.createTable('pengguna', {\n",
              "  validation: { schema: { mustHave: ['email'] } },\n});",
            ],
            pemisah: "",
            explanation:
              "Pembuatan koleksi terkonfigurasi dengan validator skema JSON di MongoDB menggunakan `db.createCollection('nama', { validator: { $jsonSchema: { required: [...] } } })`. Istilah `createTable` atau `mustHave` adalah kesalahan sintaksis yang sering mengelirukan.",
          },
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
            code:
              "// simpan hanya 5 aktivitas terbaru di dokumen induk\n" +
              "db.user.updateOne(\n" +
              "  { _id: userId },\n" +
              "  { $push: { aktivitas: { $each: [baru], $slice: -5 } } }\n" +
              ");",
            output: "{ matchedCount: 1, modifiedCount: 1 }",
          },
          instruction:
            "Agar dokumen pengguna tidak membengkak melebihi batas 16 MB, batasi array riwayat notifikasi hanya menyimpan 10 pesan paling baru. Tulis pembaruan dokumen pada koleksi `user` dengan `_id: userId` yang menyisipkan `pesanBaru` ke array `notifikasi` menggunakan pemotongan batas 10 item terbaru.",
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
          susunKode: {
            question:
              "Susun pembatasan array notifikasi MongoDB dengan $push, $each, dan $slice.",
            potongan: [
              "db.user.updateOne(\n  { _id: userId },\n",
              "  { $push: { notifikasi: { $each: [pesanBaru], $slice: -10 } } }\n);",
            ],
            pengecoh: [
              "db.user.update(\n  { _id: userId },\n",
              "  { $append: { notifikasi: { $values: [pesanBaru], $limit: -10 } } }\n);",
            ],
            pemisah: "",
            explanation:
              "Membatasi ukuran array dokumen di MongoDB menggunakan modifikator `$push` yang dikombinasikan dengan `$each` dan `$slice: -10` (mengambil 10 elemen terakhir). Penggunaan `$append` atau `$limit` adalah kekeliruan operator yang mengelirukan.",
          },
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
              question: "Apa fungsi stage `$unwind` dalam pipeline agregasi MongoDB?",
              choices: [
                "Mengurai satu bidang array menjadi beberapa dokumen individual terpisah",
                "Menggabungkan dua tabel menjadi satu dokumen",
                "Menghapus spasi kosong pada teks",
                "Mengurutkan array dari nilai terbesar",
              ],
              answerIndex: 0,
              explanation: "Stage `$unwind` membedah setiap elemen dalam array menjadi dokumen terpisah sehingga dapat dihitung dan dikelompokkan oleh stage `$group` berikutnya.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question: "Dalam pipeline analitik data penjualan, mengapa stage `$match` harus ditempatkan sebelum stage `$group`?",
              choices: [
                "Untuk memangkas jumlah dokumen awal sedini mungkin sehingga konsumsi memori RAM di stage $group jauh lebih efisien",
                "Karena MongoDB akan error jika $group ditaruh di awal",
                "Agar hasil perhitungan $sum bernilai positif",
                "Supaya dokumen otomatis terkonversi menjadi format CSV",
              ],
              answerIndex: 0,
              explanation: "Menyaring data dengan `$match` di awal pipeline mengurangi volume data yang harus diolah di memori oleh stage `$group`.",
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
        "Antrean kerja (message queue) dengan Redis List: LPUSH dan RPOP",
        "Himpunan data unik & relasi bersama dengan Redis Set: SADD dan SINTER",
        "Papan peringkat (Leaderboard) dengan Sorted Set: ZADD dan ZREVRANGE",
        "Pencegahan race condition dengan Distributed Lock: SET NX EX",
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
            "| **Set** | `SADD`, `SMEMBERS`, `SINTER` | Daftar ID unik, tagar postingan, pengikut bersama (*mutual*) |\n" +
            "| **Sorted Set** | `ZADD`, `ZRANGE`, `ZREVRANGE` | Papan peringkat (*Leaderboard* game/skor), rate limiter sliding window |\n\n" +
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
            "Simpan nama pengguna ke penyimpanan in-memory Redis. Tulis perintah CLI untuk mengaitkan kunci `user:1` dengan nilai string `'Budi'`.",
          starterCode: "# Tulis perintah Redis SET di sini\n",
          language: "text",
          tests: [
            {
              pattern: "^\\s*SET\\s",
              message: "Penyimpanan nilai sederhana di Redis memakai perintah `SET <kunci> <nilai>` — semua perintah Redis ditulis HURUF BESAR sesuai konvensi dokumentasinya.",
            },
            {
              pattern: "user:1",
              message: "Konvensi penamaan kunci Redis memakai titik dua sebagai pemisah namespace (`entitas:id`). Redis tidak punya tabel, jadi struktur itu satu-satunya cara menjaga kunci tetap teratur — dan `KEYS user:*` bisa menemukannya.",
            },
            {
              pattern: "['\"]Budi['\"]",
              message: "Nilainya dibungkus tanda kutip bila mengandung spasi atau ingin dipastikan terbaca sebagai satu argumen.",
            },
          ],
          solution: "SET user:1 'Budi'",
          susunKode: {
            question:
              "Susun perintah Redis CLI SET untuk menyimpan string key user:1.",
            potongan: [
              "SET user:1",
              "'Budi'",
            ],
            pengecoh: [
              "PUT user:100",
              "'Andi'",
            ],
            pemisah: " ",
            explanation:
              "Perintah dasar Redis untuk menyimpan pasangan key-value string adalah `SET key value`. Kata 'PUT' (dari HTTP/REST) atau mengganti key `user:1` menjadi `user:100` merupakan kekeliruan perintah CLI Redis yang sering menggoda pembelajar.",
          },
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
            "Profil pengguna memiliki beberapa atribut terpisah. Tulis perintah Redis CLI untuk menyimpan atribut `name` bernilai `'Budi'` ke dalam struktur Hash pada kunci `user:1` agar dapat dibaca tanpa mengurai seluruh JSON.",
          starterCode: "# Tulis HSET di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "^\\s*HSET\\s",
              message: "Untuk menyimpan beberapa field dalam satu kunci (mirip satu baris tabel), tipe datanya Hash dan perintahnya berawalan huruf H. Keunggulannya: kamu bisa membaca atau mengubah satu field saja tanpa menulis ulang seluruh objek — beda dari menyimpan JSON sebagai string biasa.",
            },
            {
              pattern: "user:1\\s+name\\s+['\"]Budi['\"]",
              message: "Urutan argumennya: kunci, nama field, lalu nilainya. Beberapa pasangan field-nilai boleh ditulis sekaligus dalam satu perintah.",
            },
          ],
          solution: "HSET user:1 name 'Budi'",
          susunKode: {
            question:
              "Susun perintah Redis CLI HSET untuk menetapkan atribut name pada hash user:1.",
            potongan: [
              "HSET user:1",
              "name 'Budi'",
            ],
            pengecoh: [
              "HASHSET user:2",
              "field:name 'Budi'",
            ],
            pemisah: " ",
            explanation:
              "Perintah Redis untuk menetapkan nilai bidang pada data berstruktur Hash adalah `HSET key field value`. Penggunaan kata 'HASHSET' atau 'field:name' adalah kesalahan sintaksis CLI Redis yang sering mengelirukan.",
          },
        },
        {
          kind: "step",
          id: "nosql-4-8",
          title: "Antrean Kerja (Queue) dengan Redis List: LPUSH dan RPOP",
          explanation:
            "**APA:** Struktur data Redis List adalah antrean dua arah (*doubly linked list*) yang mendukung operasi penyisipan dan pengambilan elemen dari kedua ujungnya.\n\n" +
            "**KENAPA:** Operasi `LPUSH` (menambahkan di kepala) dan `RPOP` (mengambil dari ekor) berjalan dalam kompleksitas waktu konstan $O(1)$ sehingga sangat andal untuk *message broker*.\n\n" +
            "**KAPAN:** Gunakan kombinasi `LPUSH` dan `RPOP` (atau `BRPOP` untuk blocking worker) saat membangun antrean pengiriman email atau konversi video di latar belakang.\n\n" +
            "**JEBAKAN:** Membaca antrean menggunakan `LRANGE 0 -1` pada antrean yang berisi jutaan item yang akan mengunci thread Redis dan menghabiskan bandwidth jaringan.",
          example: {
            code: "LPUSH queue:jobs 'job:10'\nRPOP queue:jobs",
            output: '"job:10"',
            note: "Pola Producer-Consumer FIFO (First-In, First-Out) dibentuk dari LPUSH di satu sisi dan RPOP di sisi lain.",
          },
          instruction:
            "Sistem pengiriman email notifikasi menggunakan Redis List sebagai antrean tugas latar belakang (*FIFO queue*). Tulis dua perintah Redis CLI: pertama masukkan ID email `'mail:101'` ke ujung kiri antrean `queue:email`, lalu pada baris kedua ambil tugas paling lama dari ujung kanan antrean untuk diproses pekerja.",
          starterCode: "# Baris 1: masukkan ke antrean. Baris 2: ambil tugas untuk diproses\n",
          language: "text",
          tests: [
            {
              pattern: "LPUSH\\s+queue:email\\s+['\"]mail:101['\"]",
              message: "Baris 1 wajib memasukkan tugas dengan perintah LPUSH queue:email 'mail:101'.",
            },
            {
              pattern: "RPOP\\s+queue:email",
              message: "Baris 2 wajib mengambil tugas dengan perintah RPOP queue:email.",
            },
          ],
          solution: "LPUSH queue:email 'mail:101'\nRPOP queue:email",
          susunKode: {
            question:
              "Susun perintah Redis List untuk pola antrean LPUSH dan RPOP.",
            potongan: [
              "LPUSH queue:email 'mail:101'\n",
              "RPOP queue:email",
            ],
            pengecoh: [
              "ENQUEUE queue:email 'mail:101'\n",
              "DEQUEUE queue:email",
            ],
            pemisah: "",
            explanation:
              "Pola antrean FIFO pada Redis menggunakan perintah native `LPUSH` untuk memasukkan data dari sisi kiri antrean dan `RPOP` untuk mengeluarkan tugas tertua dari sisi kanan. Perintah `ENQUEUE` dan `DEQUEUE` adalah istilah konseptual yang sering keliru diketik di CLI dan menjadi jebakan sintaks.",
          },
        },
        {
          kind: "step",
          id: "nosql-4-9",
          title: "Himpunan Unik (Set) dengan SADD dan SINTER",
          explanation:
            "**APA:** Redis Set adalah koleksi string acak tak berurut yang menjamin keunikan setiap anggotanya, serta mendukung operasi aljabar himpunan seperti irisan (`SINTER`) dan gabungan (`SUNION`).\n\n" +
            "**KENAPA:** Operasi interseksi dilakukan langsung di memori Redis dengan kecepatan sangat tinggi tanpa membebani query SQL bertingkat.\n\n" +
            "**KAPAN:** Gunakan Redis Set untuk menyimpan tag artikel, daftar IP blacklist, dan mencari teman bersama (*mutual friends*) atau kesamaan minat antarpengguna.\n\n" +
            "**JEBAKAN:** Menjalankan operasi interseksi `SINTER` pada beberapa Set raksasa yang memiliki jutaan anggota tanpa pengujian latensi terlebih dahulu.",
          example: {
            code: "SADD minat:user:1 'koding' 'game'\nSADD minat:user:2 'game' 'musik'\nSINTER minat:user:1 minat:user:2",
            output: '1) "game"',
            note: "SINTER mengembalikan elemen yang berada di kedua himpunan sekaligus.",
          },
          instruction:
            "Fitur media sosial ingin mencari ketertarikan yang sama antara dua pengguna. Tulis perintah Redis CLI yang mencari irisan elemen unik antara himpunan minat pengguna `minat:user:1` dan `minat:user:2` menggunakan perintah interseksi himpunan.",
          starterCode: "# Cari irisan minat kedua pengguna di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SINTER\\s+minat:user:1\\s+minat:user:2",
              message: "Gunakan perintah SINTER diikuti dua nama key himpunan: minat:user:1 minat:user:2.",
            },
          ],
          solution: "SINTER minat:user:1 minat:user:2",
          susunKode: {
            question:
              "Susun perintah Redis SINTER untuk mencari irisan minat dua pengguna.",
            potongan: [
              "SINTER minat:user:1",
              "minat:user:2",
            ],
            pengecoh: [
              "INTERSECT minat:user:1",
              "minat:user:99",
            ],
            pemisah: " ",
            explanation:
              "Perintah Redis untuk menghitung irisan dari dua atau lebih himpunan Set adalah `SINTER key1 key2`. Perintah `INTERSECT` atau mengubah ID key adalah jebakan sintaks SQL yang keliru dan sering menggoda pembelajar yang belum terbiasa dengan singkatan CLI Redis.",
          },
        },
        {
          kind: "step",
          id: "nosql-4-10",
          title: "Papan Peringkat (Leaderboard) dengan Sorted Set: ZADD dan ZREVRANGE",
          explanation:
            "**APA:** Sorted Set (ZSet) mengombinasikan keunikan anggota Set dengan skor numerik (*score*), di mana setiap elemen otomatis diurutkan secara real-time menggunakan struktur data SkipList.\n\n" +
            "**KENAPA:** Pembaruan skor dan penarikan peringkat 10 besar berjalan dalam waktu $O(\\log N)$, menghilangkan kebutuhan query `ORDER BY` yang lambat di database relasional.\n\n" +
            "**KAPAN:** Gunakan Sorted Set untuk papan peringkat game, trending topik berdasarkan jumlah klik, dan implementasi rate limiter sistem geser (*sliding window*).\n\n" +
            "**JEBAKAN:** Tertukar menulis urutan argumen antara skor dan nama member; pada `ZADD`, skor selalu ditulis sebelum nama anggotanya.",
          example: {
            code: "ZADD leaderboard 100 'userA' 250 'userB'\nZREVRANGE leaderboard 0 1 WITHSCORES",
            output: '1) "userB"\n2) "250"\n3) "userA"\n4) "100"',
            note: "ZREVRANGE mengambil daftar dari peringkat nilai tertinggi ke terendah.",
          },
          instruction:
            "Sebuah game online mencatat skor pemain untuk papan peringkat mingguan. Tulis perintah `ZADD` untuk mendaftarkan pemain `'player99'` dengan skor `1500` ke sorted set `leaderboard:weekly`.",
          starterCode: "# Tulis ZADD untuk mendaftarkan skor pemain di sini\n",
          language: "text",
          tests: [
            {
              pattern: "ZADD\\s+leaderboard:weekly\\s+1500\\s+['\"]player99['\"]",
              message: "Gunakan perintah ZADD leaderboard:weekly 1500 'player99' (skor 1500 sebelum nama pemain).",
            },
          ],
          solution: "ZADD leaderboard:weekly 1500 'player99'",
          susunKode: {
            question:
              "Susun perintah Redis ZADD untuk menambahkan skor ke leaderboard.",
            potongan: [
              "ZADD leaderboard:weekly",
              "1500 'player99'",
            ],
            pengecoh: [
              "ADD_SCORE leaderboard:weekly",
              "'player99' 1500",
            ],
            pemisah: " ",
            explanation:
              "Perintah `ZADD` menerima parameter nama key, angka skor, lalu nama member (`ZADD key score member`). Menukar posisi member sebelum score atau menggunakan perintah fiktif `ADD_SCORE` merupakan kekeliruan sintaks CLI Redis yang sering menggoda pemula dan menjadi jebakan klasik.",
          },
        },
        {
          kind: "step",
          id: "nosql-4-3",
          title: "Masa Kedaluwarsa Data (TTL & EXPIRE)",
          explanation:
            "**APA:** Redis menyediakan perintah `EXPIRE key seconds` dan `SETEX key seconds value` untuk memberikan waktu hidup (*Time To Live*) pada kunci data.\n\n" +
            "**KENAPA:** Data sementara seperti OTP atau token sesi harus terhapus secara otomatis dari RAM untuk menjaga kapasitas memori dan keamanan.\n\n" +
            "**KAPAN:** Gunakan `SETEX` saat memasukkan data cache API atau token login agar tidak perlu memanggil perintah `EXPIRE` terpisah.\n\n" +
            "**JEBAKAN:** Lupa memasang TTL pada kunci cache yang mengakibatkan penggunaan RAM membengkak hingga menyentuh batas *Out Of Memory* (OOM).\n\n" +
            "Pola ini juga menjadi pondasi cache invalidation otomatis agar memori server tidak penuh.",
          example: {
            code: "SETEX session:abc 3600 'userId_100'",
            output: "OK",
            note: "Sangat ideal untuk manajemen data session login dan OTP.",
          },
          instruction:
            "Kode OTP otentikasi dua langkah hanya boleh berlaku selama satu menit. Tulis perintah Redis CLI atomik untuk menyimpan kunci `otp:123` dengan nilai `'998877'` yang otomatis terhapus dalam waktu 60 detik.",
          starterCode: "# Tulis perintah SETEX di sini\n",
          language: "text",
          tests: [
            {
              pattern: "^\\s*SETEX\\s",
              message: "Untuk data yang harus hangus sendiri (OTP, sesi, cache), pakai varian `SET` yang sekaligus menetapkan kedaluwarsa — namanya `SET` ditambah tiga huruf. Alternatif dua langkah: `SET` lalu `EXPIRE`, tapi itu tidak atomik dan bisa meninggalkan kunci abadi kalau prosesnya mati di antaranya.",
            },
            {
              pattern: "otp:123\\s+60\\s+['\"]?998877['\"]?",
              message: "Urutan argumennya: kunci, DETIK masa berlaku, lalu nilainya. Satuannya detik — menuliskan 60 berarti satu menit, bukan 60 menit. Periksa sisa waktunya dengan `TTL <kunci>`.",
            },
          ],
          solution: "SETEX otp:123 60 '998877'",
          susunKode: {
            question:
              "Susun perintah Redis CLI SETEX untuk menyimpan key otp:123 selama 60 detik.",
            potongan: [
              "SETEX otp:123 60",
              "'998877'",
            ],
            pengecoh: [
              "SET_TTL otp:999 60s",
              "'112233'",
            ],
            pemisah: " ",
            explanation:
              "Perintah Redis `SETEX` menerima durasi waktu kedaluwarsa dalam hitungan detik (angka murni tanpa akhiran 's'). Sintaks fiktif 'SET_TTL' atau menambah akhiran 's' mengelirukan pembelajar secara jebakan.",
          },
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
            "Tuliskan dua baris perintah CLI untuk mensimulasikan alur cache-aside pada artikel `artikel:12`: baris pertama membaca kunci dari cache, dan baris kedua menyimpan payload hasil query database `'{\"judul\":\"NoSQL\"}'` dengan masa kedaluwarsa 600 detik.",
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
          susunKode: {
            question:
              "Susun perintah Redis CLI GET dan SETEX untuk pola cache-aside.",
            potongan: [
              "GET artikel:12\n",
              "SETEX artikel:12 600 '{\"judul\":\"NoSQL\"}'",
            ],
            pengecoh: [
              "FETCH artikel:12\n",
              "SET_EXPIRE artikel:12 600 '{\"judul\":\"NoSQL\"}'",
            ],
            pemisah: "",
            explanation:
              "Pola cache-aside diawali dengan membaca key memakai `GET key`, lalu jika tidak ada di-set ulang memakai `SETEX key ttl value`. Kata 'FETCH' atau 'SET_EXPIRE' adalah bentuk kesalahan istilah Redis yang jebakan.",
          },
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
            "Untuk membatasi frekuensi panggilan API oleh pengguna `u7`, tulis dua perintah berurutan: naikkan penghitung pada key `limit:u7`, kemudian pasang batas kedaluwarsa 60 detik pada key tersebut.",
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
          susunKode: {
            question:
              "Susun perintah Redis CLI INCR dan EXPIRE untuk rate limiting.",
            potongan: [
              "INCR limit:u7\n",
              "EXPIRE limit:u7 60",
            ],
            pengecoh: [
              "ADD limit:u7\n",
              "TTL limit:u7 60",
            ],
            pemisah: "",
            explanation:
              "Pola rate limiting Redis menaikkan angka dengan `INCR key` lalu memasang durasi kadaluarsa menggunakan `EXPIRE key detik`. Perintah `TTL` digunakan untuk mengecek sisa waktu, bukan memasang masa berlaku secara keliru.",
          },
        },
        {
          kind: "step",
          id: "nosql-4-11",
          title: "Distributed Lock dengan Atomic SET NX EX",
          explanation:
            "**APA:** Distributed Lock mencegah proses ganda yang saling bertabrakan (*race condition*) di banyak server dengan mengandalkan perintah atomik `SET key value NX EX seconds`.\n\n" +
            "**KENAPA:** Parameter `NX` menjamin kunci hanya dibuat jika belum ada orang lain yang memegang, dan `EX` mencegah *deadlock* jika server pemegang kunci tiba-tiba mati.\n\n" +
            "**KAPAN:** Gunakan distributed lock saat mengeksekusi pembayaran invoice saldo, memproses booking tiket kursi konser, atau menghasilkan laporan batch berkala.\n\n" +
            "**JEBAKAN:** Menghapus lock dengan `DEL key` biasa tanpa memverifikasi nilai token acak pemegang, yang berisiko menghapus lock milik worker lain yang baru saja masuk.",
          example: {
            code: "SET lock:order:12 'worker-99' NX EX 5",
            output: "OK",
            note: "Jika kunci sudah dipegang worker lain, Redis akan mengembalikan (nil) sehingga worker harus menunggu.",
          },
          instruction:
            "Untuk mencegah pembayaran ganda pada invoice `inv-404`, pasang kunci terdistribusi pada key `lock:inv:404` dengan token `'worker-A'`. Kunci hanya boleh dipasang jika belum ada yang memegang (opsi NX) dan harus otomatis hangus setelah 10 detik (opsi EX 10).",
          starterCode: "# Tulis perintah distributed lock atomik di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SET\\s+lock:inv:404\\s+['\"]worker-A['\"]",
              message: "Gunakan perintah SET lock:inv:404 'worker-A'.",
            },
            {
              pattern: "\\s+NX\\s+",
              message: "Sertakan opsi NX agar hanya di-set jika kunci belum ada.",
            },
            {
              pattern: "\\s+EX\\s+10",
              message: "Sertakan opsi EX 10 untuk masa kedaluwarsa 10 detik.",
            },
          ],
          solution: "SET lock:inv:404 'worker-A' NX EX 10",
          susunKode: {
            question:
              "Susun perintah Redis SET NX EX untuk membuat distributed lock.",
            potongan: [
              "SET lock:inv:404",
              "'worker-A' NX EX 10",
            ],
            pengecoh: [
              "LOCK lock:inv:404",
              "'worker-A' IF_NOT_EXISTS 10s",
            ],
            pemisah: " ",
            explanation:
              "Pembuatan distributed lock atomik di Redis menggunakan argumen bawaan `SET key value NX EX seconds`. Perintah fiktif `LOCK` atau parameter `IF_NOT_EXISTS` adalah jebakan istilah yang keliru dan sering menggoda developer yang belum memahami argumen flag atomik pada perintah SET Redis.",
          },
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
            "Layanan notifikasi perlu menyiarkan pengumuman baru ke semua worker yang sedang mendengarkan. Tulis perintah Redis CLI untuk mempublikasikan pesan `'Headline'` ke channel `'news'`.",
          starterCode: "# Tulis PUBLISH di sini\n",
          language: "text",
          tests: [
            {
              pattern: "^\\s*PUBLISH\\s",
              message: "Pengiriman pesan ke seluruh pelanggan sebuah channel memakai perintah `PUBLISH`.",
            },
            {
              pattern: "news\\s+['\"]Headline['\"]",
              message: "Argumennya nama channel lalu isi pesannya. Yang wajib diingat: Pub/Sub Redis bersifat *fire-and-forget* — pesan yang dikirim saat tidak ada subscriber HILANG, tidak ada antrean. Untuk pekerjaan yang tidak boleh hilang, pakai Redis Streams atau BullMQ.",
            },
          ],
          solution: "PUBLISH news 'Headline'",
          susunKode: {
            question:
              "Susun perintah Redis CLI PUBLISH untuk mempublikasikan pesan ke channel Pub/Sub.",
            potongan: [
              "PUBLISH news",
              "'Headline'",
            ],
            pengecoh: [
              "EMIT channel_news",
              "'Broadcasting'",
            ],
            pemisah: " ",
            explanation:
              "Mekanisme Pub/Sub pada Redis menggunakan perintah `PUBLISH channel message`. Penggunaan kata 'EMIT' (dari Socket.io/EventEmitters) atau nama channel fiktif adalah kekeliruan sintaks CLI Redis yang jebakan.",
          },
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
            code:
              "# data utama tetap di database, cache boleh hilang\n" +
              "DEL produk:7",
            output: "(integer) 1",
            note: "Membuang cache setelah data berubah disebut cache invalidation — sumber bug klasik kalau terlupa.",
          },
          instruction:
            "Harga barang baru saja diperbarui di database PostgreSQL utama. Agar pengguna tidak menerima harga lama yang basi, tulis perintah Redis CLI untuk menghapus entri cache pada key `produk:7`.",
          starterCode: "# Buang cache yang sudah tidak berlaku\n",
          language: "text",
          tests: [
            {
              pattern: "(DEL|UNLINK)\\s+produk:7",
              message: "Pakai DEL produk:7 (atau UNLINK) untuk membuang cache lama.",
            },
          ],
          solution: "DEL produk:7",
          susunKode: {
            question:
              "Susun perintah Redis CLI DEL untuk menghapus key dari cache.",
            potongan: [
              "DEL",
              "produk:7",
            ],
            pengecoh: [
              "REMOVE",
              "produk:99",
            ],
            pemisah: " ",
            explanation:
              "Perintah menghapus key di Redis adalah `DEL` (atau `UNLINK` untuk penghapusan asinkron). Perintah fiktif 'REMOVE' atau mengganti nama key adalah jebakan kata yang sering terjadi dalam CLI Redis saat mengosongkan cache.",
          },
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
            {
              id: "q6",
              type: "pilihan-ganda",
              question: "Bagaimana cara mencegah race condition booking tiket secara atomik di banyak server backend menggunakan Redis?",
              choices: [
                "Menggunakan perintah `SET lock:tiket token NX EX 10` (Distributed Lock)",
                "Memanggil perintah `KEYS lock:*` secara berulang",
                "Merestart instance Redis sebelum transaksi dimulai",
                "Mengganti seluruh tipe data string menjadi Pub/Sub",
              ],
              answerIndex: 0,
              explanation: "`SET key value NX EX seconds` menjamin kunci hanya dibuat jika belum ada pemegang lain (NX) dan memiliki TTL otomatis (EX) untuk mencegah deadlock.",
            },
          ],
        },
      ],
    },
  ],
};
