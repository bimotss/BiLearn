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
            "# Pengertian & Persiapan Lingkungan Kerja\n\n" +
            "Sebelum menyelami teori NoSQL, satu fondasi praktis harus beres: **kamu butuh database nyata yang bisa dihubungi dan diuji.** Untuk track ini, MongoDB adalah pilihan utama document store, dan ada dua cara gratis untuk menyiapkannya di komputermu.\n\n" +
            "**mongosh** adalah shell resmi MongoDB berbasis Node.js terminal: tempat kamu mengetik perintah query database, menguji pipeline agregasi, dan memeriksa keluaran secara langsung. Ia berbeda dari **MongoDB Compass** yang berupa antarmuka grafis (GUI desktop). Keduanya boleh dipakai; namun latihan di track ini berfokus pada sintaks gaya `mongosh` karena pola inilah yang muncul di kode aplikasi Node.js, Mongoose, dokumentasi resmi, dan soal uji teknis kerja.\n\n" +
            "## Dua Cara Menyiapkan MongoDB\n\n" +
            "| Karakteristik | **MongoDB Atlas** (Cloud Terkelola) | **Docker Lokal** (Di Komputer Sendiri) |\n" +
            "|---|---|---|\n" +
            "| Cara Mulai | Daftar di mongodb.com/atlas, buat cluster gratis M0 | Jalankan: `docker run -d -p 27017:27017 --name mongo mongo:7` |\n" +
            "| Koneksi Internet | Wajib selalu aktif | Hanya butuh internet saat mengunduh image pertama kali |\n" +
            "| Pola Connection String | `mongodb+srv://user:sandi@cluster0.xxxxx.mongodb.net` | `mongodb://localhost:27017` |\n" +
            "| Rekomendasi Penggunaan | Proyek portofolio, deploy aplikasi web, kolaborasi tim | Belajar mandiri tanpa kuota, uji coba skrip cepat dari nol |\n" +
            "| Jebakan Klasik | Lupa mendaftarkan IP di **Network Access (0.0.0.0/0)** $\\rightarrow$ timeout | Lupa mapping port `-p 27017:27017` $\\rightarrow$ koneksi ditolak (ECONNREFUSED) |\n\n" +
            "## Alur Menyambung dari Terminal ke Database\n\n" +
            "```text\n" +
            "  1. Database Menyala            2. mongosh Menyambung         3. Eksekusi Perintah Query\n" +
            "  ┌─────────────────────┐         ┌───────────────────┐         ┌─────────────────────────┐\n" +
            "  │ Cluster Atlas M0    │  ◄────  │ mongosh \"<uri>\"   │  ────►  │ test> use toko          │\n" +
            "  │ atau Container      │         └───────────────────┘         │ toko> db.produk.find()  │\n" +
            "  │ Docker mongo:7      │                                       └─────────────────────────┘\n" +
            "  └─────────────────────┘\n" +
            "\n" +
            "  Prompt shell berubah menampilkan database aktif: test> atau toko>\n" +
            "  Perintah ganti database aktif: use nama_database\n" +
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
            "Satu hal yang mengejutkan bagi pengembang dari latar belakang SQL: **kamu tidak perlu mengeksekusi `CREATE DATABASE` atau `CREATE TABLE` lebih dulu.** MongoDB membuat database dan collection secara otomatis begitu dokumen pertama kali disisipkan (*lazy creation*).\n\n" +
            "## Kosakata: Padanan Istilah dari SQL ke MongoDB\n\n" +
            "| Konsep SQL Relasional | Padanan di MongoDB | Catatan Arsitektural |\n" +
            "|---|---|---|\n" +
            "| Database | Database | Wadah logis sekumpulan koleksi data |\n" +
            "| Tabel (*Table*) | **Collection** | Kumpulan dokumen, tidak mewajibkan keseragaman skema |\n" +
            "| Baris (*Row*) | **Document** | Satu catatan data lengkap berformat BSON (Binary JSON) |\n" +
            "| Kolom (*Column*) | **Field** | Pasangan kunci-nilai (*key-value*), boleh bersarang objek/array |\n" +
            "| `PRIMARY KEY` | `_id: ObjectId(...)` | Identitas unik otomatis 12-byte jika tidak diisi manual |\n" +
            "| `JOIN` antar tabel | `$lookup` / Embedding | Bisa JOIN via `$lookup`, namun dioptimalkan lewat penyematan (*embed*) |\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Database relasional seperti **formulir sensus cetak pemerintah**: semua kolom sudah digariskan di kertas, dan setiap orang wajib mengisi kotak yang sama persis. Jika ada satu warga butuh kolom 'alamat kantor luar negeri', formulir cetak seluruh warga harus dicetak ulang (*schema migration*).\n\n" +
            "MongoDB seperti **buku binder amplop**: setiap warga memiliki amplop tersendiri tempat kamu bisa memasukkan kartu keluarga, foto, tiket perjalanan, dan catatan riwayat kesehatan tanpa perlu mengubah amplop milik warga lain.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "1. **Salah ketik nama collection:** Mengetik `db.produks.find()` untuk collection `produk` tidak menghasilkan error, melainkan mengembalikan array kosong `[]`. MongoDB mengira kamu sedang mencari di koleksi baru yang belum ada isinya.\n" +
            "2. **Menyimpan password database di kode git:** URI koneksi memuat user dan password sensitif. Jangan pernah menaruhnya di file script JavaScript; gunakan file `.env` dan pastikan masuk daftar `.gitignore`.\n" +
            "3. **Karakter khusus pada password cloud:** Jika password Atlas mengandung `@`, `:`, atau `/`, connection string akan gagal diparse kecuali karakter tersebut di-*URL-encode*.\n" +
            "4. **Lupa data Docker bersifat ephemeral:** Menjalankan container tanpa mount volume (`-v mongo_data:/data/db`) berarti begitu container dihapus (`docker rm`), seluruh data latihan ikut hilang.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "- Pada lowongan Full-Stack (MERN/MEVN), pewawancara kerja sering menguji pemahaman koneksi database: bagaimana mengelola *connection pooling* di Node.js agar tidak kehabisan soket koneksi saat traffic melonjak.\n" +
            "- Dalam *code review*, meletakkan string koneksi database langsung di dalam kode aplikasi adalah pelanggaran fatal (*critical security defect*) yang otomatis membatalkan Pull Request.\n\n" +
            "> **Kapan dipakai:** Lakukan langkah persiapan ini di setiap awal proyek baru: nyalakan database lokal atau cluster Atlas, amankan connection string di `.env`, lalu uji sambungan dengan `mongosh` untuk memastikan jaringan terbuka sebelum menulis baris pertama kode backend.",
        },
        {
          kind: "step",
          id: "nosql-1-0",
          title: "Menyambung ke MongoDB dengan mongosh",
          explanation:
            "`mongosh` adalah shell resmi MongoDB yang bertindak sebagai jembatan komunikasi antara terminal komputermu dengan server database. Untuk terhubung, kamu wajib menyebutkan **connection string** sebagai argumen utama di baris perintah. Format connection string untuk instance lokal adalah `mongodb://host:port`, dengan port bawaan **27017** yang wajib kamu hafal karena menjadi standar di seluruh dokumentasi dan konfigurasi Docker. Menjalankan perintah ini sebelum menulis kode aplikasi adalah kebiasaan baik di industri untuk memastikan layanan database benar-benar aktif dan menerima lalu lintas jaringan. Kesalahan yang sering terjadi pada pemula adalah lupa membungkus URI dengan tanda kutip, sehingga karakter khusus seperti tanda tanya atau ampersand dipotong keliru oleh shell terminal. Jika muncul pesan galat `ECONNREFUSED`, hal itu menandakan tidak ada proses database yang berjalan pada port tersebut.",
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
            "# Arsitektur NoSQL, Taksonomi 4 Keluarga & Teorema CAP\n\n" +
            "Selama puluhan tahun, Database Relasional (RDBMS) seperti PostgreSQL dan MySQL menjadi pilar utama rekayasa perangkat lunak. Namun, lonjakan beban data web skala masif menghadirkan dua tantangan berat: skema dokumen yang sangat dinamis (seperti katalog e-commerce multikategori) dan tuntutan skalabilitas horizontal (*scale-out*) melintasi puluhan server terdistribusi. **NoSQL** (*Not Only SQL*) hadir bukan untuk menggantikan SQL, melainkan menyediakan model arsitektur alternatif yang dioptimalkan untuk beban kerja spesifik.\n\n" +
            "## Peta 4 Keluarga Utama NoSQL\n\n" +
            "Dunia database non-relasional terbagi menjadi empat paradigma utama:\n\n" +
            "| Keluarga NoSQL | Karakteristik Model Data | Contoh Teknologi | Kasus Penggunaan Industri |\n" +
            "|---|---|---|---|\n" +
            "| **Document Store** | Dokumen pohon berformat BSON/JSON bersarang | MongoDB, CouchDB | Katalog e-commerce, manajemen konten (CMS), profil pengguna fleksibel |\n" +
            "| **Key-Value Store** | Kamus kunci-nilai ultra-cepat berbasis RAM | Redis, AWS DynamoDB | Caching API, session store, rate limiter token bucket |\n" +
            "| **Column-Family** | Tabel lebar dengan partisi kunci baris & kolom | Apache Cassandra, ScyllaDB | Telemetri IoT jutaan event/detik, log transaksi historis raksasa |\n" +
            "| **Graph Database** | Struktur simpul (*Nodes*) dan relasi (*Edges*) | Neo4j, Amazon Neptune | Rekomendasi jejaring sosial, pencegahan penipuan finansial (*fraud detection*) |\n\n" +
            "## Teorema CAP (Brewer's Theorem) & PACELC dalam Praktik Nyata\n\n" +
            "Dalam sistem database terdistribusi melintasi beberapa data center, gangguan jaringan (*Network Partition*) adalah keniscayaan fisik. Teorema CAP membuktikan secara matematis bahwa ketika **Partition Tolerance (P)** terjadi, kamu **hanya bisa memilih satu** dari dua opsi berikut:\n\n" +
            "1. **Consistency (C):** Menolak transaksi jika data belum tersinkronisasi ke seluruh server replika demi mencegah inkonsistensi data (*pilihan sistem perbankan / CP*).\n" +
            "2. **Availability (A):** Tetap memproses permintaan meskipun data di replika sekunder sedikit tertinggal (*pilihan media sosial / AP*).\n\n" +
            "Teorema ini diperluas oleh Daniel Abadi melalui **Teorema PACELC**: Jika terjadi Partisi (**P**), pilih antara Availability (**A**) atau Consistency (**C**); jika kondisi normal (**E**lse), pilih antara Latency (**L**) atau Consistency (**C**). Inilah alasan database seperti MongoDB mengizinkan pembacaan dari replika sekunder untuk mengejar latensi di bawah 5 milidetik dengan mengorbankan konsistensi seketika.\n\n" +
            "## Studi Kasus Industri: Polyglot Persistence\n\n" +
            "Perusahaan teknologi besar seperti Tokopedia atau Gojek tidak pernah menggunakan satu jenis database tunggal untuk seluruh sistem. Mereka menerapkan **Polyglot Persistence**, yaitu mengawinkan beberapa database sesuai keunggulannya:\n\n" +
            "```text\n" +
            "  [ Browser / Mobile App ]\n" +
            "             │\n" +
            "             ▼\n" +
            "    [ API Gateway ] ──────► [ Redis ] (Cek Auth Token & Rate Limiter, latensi < 1ms)\n" +
            "             │\n" +
            "             ├───► [ Katalog Service ] ────► [ MongoDB ] (Baca detail produk BSON dinamis)\n" +
            "             ├───► [ Pembayaran & Akun ] ──► [ PostgreSQL ] (ACID ketat, potong saldo mutlak)\n" +
            "             └───► [ Feed Teman & Rekomendasi ] ──► [ Neo4j ] (Jelajah graf teman & minat)\n" +
            "```\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan memesan kamar hotel. **PostgreSQL (RDBMS)** seperti resepsionis dengan buku register terpusat: jika buku sedang dipakai resepsionis A, resepsionis B harus menunggu agar kamar tidak dipesan ganda (*ACID*). **MongoDB** seperti formulir pesanan mandiri per tamu. **Redis** seperti papan tulis kecil di pintu kamar yang mencatat status 'kamar terisi' dalam hitungan detik.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> ⚠️ **Hype-Driven Development:** Memilih MongoDB untuk aplikasi perbankan hanya karena 'terasa modern'. Memaksakan data transaksi yang sarat relasi foreign key ke dalam NoSQL akan memaksamu menulis logika JOIN dan locking manual di kode Node.js — pekerjaan yang lambat, rentan bug race condition, dan sebenarnya sudah diselesaikan secara efisien oleh PostgreSQL.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Dalam sesi *System Design Interview* untuk posisi Mid hingga Senior Backend Engineer, pertanyaan nomor satu adalah: *'Bagaimana strategi pemilihan database untuk microservices yang kamu rancang?'* Jawaban yang dihargai bukanlah menyebut salah satu database sebagai yang 'terbaik', melainkan memaparkan trade-off Teorema CAP dan pola Polyglot Persistence.",
        },
        {
          kind: "step",
          id: "nosql-1-1",
          title: "Empat Keluarga NoSQL dan Bentuk Datanya",
          explanation:
            "NoSQL bukanlah satu teknologi tunggal, melainkan payung untuk empat keluarga database dengan struktur penyimpanan internal yang berlainan: Document Store (seperti MongoDB), Key-Value (Redis), Column-Family (Cassandra), dan Graph (Neo4j). Karakteristik pembeda utama pada Document Store adalah kemampuannya menyimpan pohon data hierarkis, seperti array dan sub-dokumen bersarang, langsung di dalam satu entitas tunggal. Pada database relasional SQL, menyimpan daftar tag pada sebuah artikel membutuhkan tiga tabel terpisah (tabel artikel, tabel tag, dan tabel relasi penghubung) yang harus disatukan lewat operasi JOIN. Di MongoDB, array tag dapat disimpan langsung di dalam field dokumen artikel yang sama, sehingga pembacaan data selesai dalam satu kali pencarian blok disk. Kesalahan yang sering terjadi pada pemula dari latar belakang SQL adalah memecah setiap array kecil ke dalam koleksi terpisah, yang justru menghilangkan keunggulan performa Document Store.",
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
            "Kekuatan utama NoSQL terletak pada sifatnya yang fleksibel terhadap perubahan skema (sering disebut *polymorphic schema*) serta kemudahan skala horizontal (*scale-out*). Dalam aplikasi analitik atau pencatatan aktivitas, struktur log sering kali berbeda drastis antara satu jenis aksi dengan aksi lainnya; aksi login membawa data IP dan user-agent, sementara aksi pembayaran membawa data nomor resi dan gateway. Di database relasional, memodelkan kebutuhan ini memaksa kita membuat tabel raksasa dengan puluhan kolom bernilai NULL atau kolom JSON teks yang sulit diindeks. MongoDB mengizinkan setiap dokumen memiliki pasangan atribut yang berbeda tanpa mengharuskan migrasi skema tabel secara berkala. Namun, fleksibilitas ini memiliki harga mahal: kamu kehilangan validasi tipe otomatis dan constraint foreign key di sisi mesin database, sehingga kedisiplinan struktur data harus dijaga ketat di tingkat kode aplikasi.",
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
            "Teorema CAP menyatakan bahwa ketika terjadi gangguan jaringan (*Network Partition*) pada kluster database terdistribusi, sistem harus memilih antara konsistensi data mutlak (*Consistency*) atau ketersediaan layanan (*Availability*). Pada arsitektur MongoDB Replica Set, penulisan data selalu diarahkan ke simpul utama (Primary). Namun untuk operasi pembacaan, kamu dapat menentukan preferensi baca (*read preference*), seperti `.readPref('secondary')` untuk membaca dari replika sekunder. Keputusan ini memprioritaskan Availability (AP): ketika simpul utama sedang sibuk atau mengalami failover singkat, aplikasi toko online tetap dapat menampilkan katalog produk kepada pembeli. Kompensasinya adalah konsistensi bertahap (*eventual consistency*), di mana pembaruan stok yang baru saja dilakukan mungkin tertunda beberapa milidetik di replika sebelum tersinkronisasi penuh.",
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
            "Banyak proyek perangkat lunak mengalami kegagalan performa karena memilih NoSQL semata-mata atas dasar tren (*hype-driven development*), padahal struktur domain datanya sangat relasional. Meskipun MongoDB telah mendukung transaksi multi-dokumen ACID sejak versi 4.0 lewat sesi eksplisit (`session.startTransaction()`), transaksi terdistribusi ini membutuhkan koordinasi lintas simpul yang menurunkan kecepatan komputasi secara signifikan. Di industri nyata, jika 90% dari operasi bisnismu membutuhkan penguncian transaksi antar entitas yang ketat seperti mutasi saldo perbankan, PostgreSQL atau MySQL tetap merupakan pilihan yang jauh lebih matang dan hemat sumber daya. Gunakan blok transaksi MongoDB hanya ketika operasi pembaruan beberapa dokumen wajib bersifat *all-or-nothing* dan tidak dapat dirancang ke dalam satu dokumen tunggal.",
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
            "Sistem berskala besar menerapkan pola *Polyglot Persistence*, yaitu memadukan beberapa jenis database sesuai spesialisasi beban kerjanya. Data otentikasi sesi pengguna misalnya, diakses pada setiap request HTTP dan harus memiliki batas masa berlaku (*Time To Live*). Menyimpan sesi di database berbasis disk seperti PostgreSQL atau MongoDB akan membebani I/O disk dan membutuhkan cron job manual untuk menghapus sesi yang usang. Redis menyelesaikan masalah ini secara elegan: data disimpan langsung di RAM dengan latensi sub-milidetik, dan perintah `SETEX` memungkinkan token kedaluwarsa secara otomatis tanpa komputasi tambahan. Memahami kapan mengalihkan beban kerja spesifik ke Redis adalah pembeda utama antara pengembang junior dan arsitek sistem backend.",
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
          title: "Arsitektur Dokumen MongoDB, Format BSON & Operasi CRUD Lanjutan",
          body:
            "# Arsitektur Dokumen MongoDB & Anatomi BSON\n\n" +
            "Sering kali pemula mengira MongoDB menyimpan dokumen teks JSON mentah. Kenyataannya, MongoDB menyimpan data dalam format biner bernama **BSON (*Binary JSON*)**. BSON dirancang untuk tiga tujuan utama: efisiensi traversal memori, kecepatan komputasi, dan dukungan tipe data kaya yang tidak didukung JSON standar (seperti `Date`, `BinData`, `Int32`, `Int64`, dan angka presisi desimal `Decimal128`).\n\n" +
            "Keunggulan teknis terbesar BSON dibanding teks JSON adalah sifatnya yang **Length-Prefixed**: setiap dokumen, sub-dokumen, dan array menyimpan informasi panjang ukuran byte di awal strukturnya. Ketika MongoDB mengeksekusi query pencarian, mesin penyimpanan dapat langsung melompati (*skip*) blok data yang tidak relevan tanpa harus mem-parsing string karakter per karakter seperti parser JSON biasa.\n\n" +
            "## Anatomi Fisik 12-Byte ObjectId\n\n" +
            "Setiap dokumen MongoDB yang dibuat secara otomatis akan diberikan identifier bawaan `_id` bertipe `ObjectId`. Berbeda dari `AUTO_INCREMENT` pada SQL yang membutuhkan koordinasi lock terpusat, `ObjectId` berukuran 12 byte dan dijamin unik secara global (*globally unique*) di lingkungan cluster terdistribusi:\n\n" +
            "```text\n" +
            "  ┌──────────────────────┬──────────────────────┬──────────────────────┐\n" +
            "  │ 4 Byte: Timestamp    │ 5 Byte: Nilai Acak   │ 3 Byte: Counter      │\n" +
            "  │ Waktu pembuatan      │ Unik per proses host │ Incrementing counter │\n" +
            "  │ (Detik Unix Epoch)   │ (Mencegah tabrakan)  │ (Mulai angka acak)   │\n" +
            "  └──────────────────────┴──────────────────────┴──────────────────────┘\n" +
            "```\n\n" +
            "> 💡 **Fakta Menarik Industri:** Karena 4 byte pertama `ObjectId` adalah timestamp waktu pembuatan, dokumen MongoDB secara otomatis terurut secara kronologis berdasarkan `_id`! Kamu bisa mengambil waktu pembuatan dokumen menggunakan `ObjectId.getTimestamp()` tanpa memerlukan field `createdAt` tambahan.\n\n" +
            "## Query Dokumen Bersarang (*Dot Notation*) & Array\n\n" +
            "Salah satu kekuatan utama MongoDB adalah menyimpan data hierarkis di dalam satu dokumen. Namun pemula sering keliru saat memfilternya:\n\n" +
            "- **Dot Notation untuk Objek Bersarang:** Gunakan tanda petik saat menunjuk field bertingkat: `db.users.find({ 'alamat.kota': 'Bandung' })`. Jangan menulis `{ alamat: { kota: 'Bandung' } }` karena penulisan objek utuh akan mencocokkan dokumen yang HANYA memiliki field kota dan menghapus kecocokan jika ada field jalan atau kode pos!\n" +
            "- **Query Array:** Pencarian `db.posts.find({ tags: 'mongodb' })` akan otomatis memeriksa apakah string `'mongodb'` ada di dalam array `tags`. Jika kamu perlu mencocokkan beberapa kriteria pada elemen array yang sama, gunakan operator `$elemMatch`.\n\n" +
            "## Operator Update Atomik & Pola Soft Delete\n\n" +
            "| Operator Update | Fungsi Teknis | Contoh Penggunaan |\n" +
            "|---|---|---|\n" +
            "| `$set` | Mengubah atau menambah nilai field spesifik | `{ $set: { status: 'active' } }` |\n" +
            "| `$inc` | Menaikkan/menurunkan angka secara atomik tanpa race condition | `{ $inc: { stok: -1, viewCount: 1 } }` |\n" +
            "| `$push` | Menambahkan item baru ke ujung array | `{ $push: { riwayat: logBaru } }` |\n" +
            "| `$pull` | Membuang item dari array yang cocok dengan kriteria | `{ $pull: { tags: 'spam' } }` |\n" +
            "| `$addToSet` | Menambahkan item ke array HANYA jika belum ada (set unik) | `{ $addToSet: { kategori: 'tech' } }` |\n\n" +
            "### Pola Soft Delete di Industri\n\n" +
            "Di lingkungan kerja nyata, data penting (seperti akun pengguna atau transaksi belanja) hampir **tidak pernah dihapus permanen** dari disk dengan `deleteOne()`. Penghapusan permanen akan merusak riwayat akuntansi dan integritas pelaporan. Industri menerapkan **Soft Delete**:\n\n" +
            "```javascript\n" +
            "// Soft Delete: Data tetap ada di disk tapi diabaikan oleh query aplikasi\n" +
            "db.users.updateOne(\n" +
            "  { _id: userId },\n" +
            "  { $set: { isDeleted: true, deletedAt: new Date() } }\n" +
            ");\n" +
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
            "MongoDB menyimpan data dalam bentuk Dokumen BSON (Binary JSON) yang dikelompokkan ke dalam wadah logis bernama Collection. Tidak seperti database SQL yang mewajibkan pembuatan tabel dengan tipe kolom kaku sebelum data disisipkan, MongoDB menggunakan mekanisme *lazy creation* di mana koleksi otomatis dibuat saat dokumen pertama masuk lewat `insertOne()`. Setiap dokumen yang masuk secara otomatis diberikan field pengenal `_id` bertipe 12-byte `ObjectId` unik global yang dihasilkan langsung oleh driver aplikasi, memangkas kebutuhan koordinasi lock auto-increment terpusat. Keuntungan terbesar dari model dokumen ini adalah kamu bisa menyimpan tipe data fleksibel seperti array dan objek bersarang secara native. Kesalahan umum pemula adalah tidak konsisten dalam penamaan properti huruf besar dan kecil, padahal field BSON di MongoDB bersifat sangat peka (*case-sensitive*).",
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
            "Pencarian dokumen di MongoDB dieksekusi melalui metode `db.collection.find({ filter })` yang mengembalikan cursor penunjuk data. Alih-alih menulis klausa string `WHERE age > 18` seperti SQL, MongoDB menggunakan operator berbasis objek ekspresi BSON berawalan tanda dolar seperti `{ age: { $gt: 18 } }`. Operator pembanding utama mencakup `$gt` (greater than), `$gte` (greater than or equal), `$in` (mencocokkan salah satu elemen dalam daftar), dan `$regex` untuk pola teks. Kesalahan paling umum yang sering membingungkan pemula adalah lupa menyertakan tanda dolar pada operator, misalnya menulis `{ age: { gt: 18 } }`. Jika ini terjadi, MongoDB tidak menghasilkan error sintaks, melainkan mencari dokumen yang memiliki sub-objek dengan field literal bernama `gt`, yang berujung pada hasil pencarian kosong.",
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
            "Operasi pembaruan dokumen melalui `updateOne()` atau `updateMany()` mewajibkan penggunaan operator modifikasi atomik seperti `$set` untuk mengubah nilai field, `$inc` untuk perhitungan counter angka, atau `$push` untuk memasukkan elemen array. Sifat atomik ini krusial di lingkungan produksi berkonkurensi tinggi: dua request yang memanggil `$inc: { stok: -1 }` secara serentak tidak akan saling menimpa data seperti halnya fetch-and-save manual di kode JavaScript. Jebakan terbesar dan paling fatal bagi pemula adalah lupa menyertakan `$set` saat memanggil update pada driver versi lawas atau shell mentah. Jika kamu mengeksekusi `updateOne({ _id }, { active: true })` tanpa `$set`, MongoDB akan menimpa seluruh dokumen target menjadi hanya satu properti `{ active: true }`, melenyapkan nama, email, dan seluruh field lainnya.",
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
            "Penghapusan fisik (*hard delete*) pada koleksi MongoDB dijalankan melalui metode `deleteOne({ filter })` untuk menghapus dokumen pertama yang cocok, atau `deleteMany({ filter })` untuk menghapus seluruh dokumen yang memenuhi kriteria. Di lingkungan pengujian atau pembersihan data sementara (seperti menghapus log uji coba), perintah ini sangat efisien. Namun, kamu harus ekstra waspada terhadap filter objek kosong `{}`: menjalankan `db.collection.deleteMany({})` akan menguras seluruh dokumen di dalam koleksi tanpa konfirmasi peringatan. Di lingkungan produksi perbankan dan e-commerce nyata, penghapusan langsung dengan `deleteOne()` hampir selalu dihindari demi kepatuhan audit regulasi. Para insinyur beralih ke pola *soft delete*, yaitu memperbarui dokumen dengan flag status `{ isDeleted: true, deletedAt: new Date() }`.",
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
            "Saat mengambil data melalui `find()`, parameter kedua yang diberikan disebut **Projection**. Projection memungkinkanmu membatasi field apa saja yang dikembalikan ke aplikasi, misalnya `{ title: 1, price: 1, _id: 0 }`, sehingga menghemat alokasi memori RAM dan bandwidth jaringan secara signifikan. Sementara itu, rangkaian chaining method `.sort({ price: 1 })` untuk ascending (atau `-1` untuk descending), `.limit(n)`, dan `.skip(m)` digunakan untuk menyusun fitur paginasi halaman antarmuka web. Jebakan performa klasik pada paginasi NoSQL adalah penggunaan nilai `.skip()` yang terlalu besar (misalnya melewati 50.000 dokumen). MongoDB terpaksa memindai dan menghitung seluruh 50.000 dokumen sebelum membuangnya. Pada sistem berskala besar di industri, arsitek backend mengganti skip-limit dengan *keyset pagination* berbasis nilai `_id` dokumen terakhir.",
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
            "Indeks di MongoDB dibangun menggunakan struktur pohon seimbang B-Tree yang disimpan di dalam memori RAM melalui perintah `db.collection.createIndex({ field: 1 })`. Tanpa indeks yang tepat, mesin penyimpanan WiredTiger terpaksa melakukan pemindaian seluruh koleksi (*Collection Scan / COLLSCAN*) yang membaca blok data disk dokumen per dokumen. Pada tabel berisi jutaan rekaman, COLLSCAN akan menyita 100% kapasitas CPU dan menyebabkan lonjakan latensi API. Dengan indeks B-Tree, kompleksitas pencarian data terpangkas drastis menjadi $O(\\log N)$. Namun, indeks bukanlah solusi tanpa biaya: setiap operasi penulisan dokumen baru (`insertOne`) atau pembaruan (`updateOne`) mewajibkan MongoDB menghitung ulang posisi simpul B-Tree indeks terkait. Terlalu banyak membuat indeks pada satu koleksi yang sama akan memperlambat kinerja tulis secara signifikan.",
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
            "Saat aplikasi mengeksekusi query kompleks yang memadukan filter pencarian spesifik dan pengurutan kronologis, indeks tunggal sering kali tidak memadai. MongoDB menyediakan **Compound Index** untuk mengindeks beberapa field sekaligus dalam satu struktur B-Tree. Agar indeks majemuk bekerja optimal, para insinyur database wajib mematuhi aturan baku **ESR (Equality, Sort, Range)**: deklarasikan field pencarian mutlak (*Equality*) terlebih dahulu, diikuti field pengurutan (*Sort*), dan tempatkan field rentang nilai (*Range*, seperti `$gt` atau `$lt`) di urutan terakhir. Menempatkan field Range mendahului Sort merupakan kekeliruan fatal yang membuat MongoDB tidak dapat memanfaatkan daun pohon B-Tree untuk pengurutan. Akibatnya, mesin terpaksa mengalokasikan memori RAM tambahan untuk melakukan *in-memory sort* yang akan melempar error jika data melebihi batas 32 MB.",
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
            "Mengoptimalkan performa database membutuhkan bukti terukur, bukan sekadar intuisi kode. Metode `.explain('executionStats')` di MongoDB mengeksekusi query dan membedah statistik internal mesin database secara transparan. Dari laporan eksekusi ini, ada dua indikator kunci yang selalu diperiksa saat audit performa: nilai `stage` dan rasio dokumen. Jika pada bagian `executionStages` tertera `COLLSCAN`, itu adalah alarm bahaya bahwa kueri memindai seluruh dokumen disk tanpa bantuan indeks; kueri yang sehat harus berada pada stage `IXSCAN` (Index Scan). Indikator kedua adalah perbandingan antara `totalDocsExamined` dengan `nReturned`. Jika database memeriksa 50.000 dokumen hanya untuk menyajikan 2 hasil, berarti indeks yang ada belum selektif dan membuang siklus komputasi CPU sia-sia.",
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
            "Dalam ekosistem Node.js, pengembang dihadapkan pada dua pendekatan: menggunakan driver native MongoDB resmi atau mengadopsi Mongoose ODM (Object Data Modeling). Driver native memberikan kecepatan murni dan kendali fleksibel tanpa overhead, namun rentan menimbulkan inkonsistensi data ketika puluhan developer menyisipkan field berbeda-beda ke koleksi yang sama. Mongoose mengatasi masalah ini dengan menyediakan lapisan skema terstruktur di sisi aplikasi, mendukung validasi tipe otomatis, nilai bawaan (*defaults*), serta middleware pra-penyimpanan (*pre-save hooks*). Dokumen yang tidak memiliki atribut wajib akan langsung ditolak oleh Mongoose melempar `ValidationError` sebelum kueri dikirimkan ke jaringan database. Memahami cara mendefinisikan skema Mongoose adalah keterampilan inti yang diuji dalam pengembangan API backend skala industri.",
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
          title: "Pola Desain Dokumen Industri & Aggregation Pipeline Lanjutan",
          body:
            "# Keputusan Desain Skema: Embed vs Reference & Pola Produksi\n\n" +
            "Berbeda dari database relasional yang memecah entitas ke tabel-tabel terpisah melalui norma normalisasi (1NF-3NF), aturan emas pemodelan di MongoDB adalah: **'Data yang diakses bersamaan harus disimpan bersamaan.'** Namun, pemula sering terjebak di dua ekstrem yang sama-sama salah: meniru relasi SQL dengan membuat koleksi untuk setiap hal kecil, atau menyematkan (*embed*) semua hal hingga dokumen menabrak batas kapasitas.\n\n" +
            "## 4 Pola Desain Resmi MongoDB di Industri (*Production Patterns*)\n\n" +
            "1. **The Subset Pattern (Pola Sebagian):**\n" +
            "   - *Masalah:* Satu produk e-commerce bisa memiliki 50.000 ulasan. Menyimpan semua ulasan di satu dokumen akan menembus batas 16 MB dan membuat halaman produk lambat dimuat.\n" +
            "   - *Solusi:* Sematkan (*embed*) hanya **5 ulasan paling baru/populer** di dokumen produk agar langsung tampil seketika saat halaman produk dibuka. Simpan sisa 49.995 ulasan di koleksi `reviews` terpisah dengan pagination.\n\n" +
            "2. **The Extended Reference Pattern (Referensi Diperluas):**\n" +
            "   - *Masalah:* Faktur pesanan membutuhkan nama pemesan dan alamat pengiriman. Jika hanya menyimpan `userId`, setiap kali melihat daftar pesanan aplikasi harus memanggil `$lookup` (JOIN) yang mahal.\n" +
            "   - *Solusi:* Salin beberapa field yang sering dibaca ke dokumen pesanan: `{ customerId, customerName, customerPhone }`. Jangan duplikasi seluruh data profil, cukup data yang relevan dengan pesanan.\n\n" +
            "3. **The Computed / Pre-aggregated Pattern:**\n" +
            "   - *Solusi:* Hitung total penjualan (`totalRevenue`) atau rating rata-rata (`avgRating`) saat operasi penulisan (*write-time*), lalu simpan nilainya langsung di dokumen produk. Jangan menjalankan aggregation pipeline berat di jutaan row setiap kali ada user membuka halaman katalog.\n\n" +
            "4. **The Bucket Pattern:**\n" +
            "   - *Solusi:* Untuk log IoT atau time-series, kelompokkan pembacaan sensor per jam atau per hari ke dalam satu dokumen (array 60 data per jam), bukan membuat 1 dokumen per detik yang memboroskan metadata indeks.\n\n" +
            "## Panduan Pemilihan Model Data\n\n" +
            "| Pertimbangan Arsitektur | Pola Embedding (Disematkan) | Pola Referencing (Direnferensikan) |\n" +
            "|---|---|---|\n" +
            "| **Karakter Relasi** | One-to-Few (terbatas, misal 3 alamat) | One-to-Many Unbounded (ribuan komentar/log) |\n" +
            "| **Pola Akses Utama** | Selalu dibaca bersamaan dengan induk | Dibaca mandiri atau jarang diakses |\n" +
            "| **Frekuensi Perubahan** | Jarang berubah independen | Sering diperbarui terpisah |\n" +
            "| **Beban I/O Disk** | Sangat Rendah (1 kali pembacaan blok) | Lebih Tinggi (membutuhkan `$lookup` berulang) |\n\n" +
            "## Arsitektur Aggregation Pipeline Lengkap\n\n" +
            "**Aggregation Pipeline** memproses dokumen melalui rangkaian pipa transformasi sekuensial:\n\n" +
            "```text\n" +
            "  [ Raw Documents ]\n" +
            "         │\n" +
            "         ▼\n" +
            "    [ $match ] ─────► Saring dokumen sedini mungkin (paling awal agar hemat RAM)\n" +
            "         │\n" +
            "         ▼\n" +
            "   [ $unwind ] ────► Pecah array sub-dokumen menjadi baris individual\n" +
            "         │\n" +
            "         ▼\n" +
            "    [ $group ] ─────► Kelompokkan berdasarkan _id & hitung $sum, $avg, $max\n" +
            "         │\n" +
            "         ▼\n" +
            "    [ $sort ] ──────► Urutkan hasil komputasi\n" +
            "         │\n" +
            "         ▼\n" +
            "   [ Output Akhir ]\n" +
            "```\n\n" +
            "> ⚠️ **Batas Memori RAM Stage:** Setiap stage di dalam Aggregation Pipeline memiliki batas RAM maksimum **100 MB**. Jika stage `$group` atau `$sort` memproses data melebihi 100 MB di memori, query akan melempar error kecuali kamu mengaktifkan opsi `{ allowDiskUse: true }`.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Pola **Embedding** seperti daftar isi dan bab di dalam satu buku: kamu langsung membaca seluruh materi tanpa beranjak dari kursi. Pola **Referencing** seperti footnote catatan kaki yang merujuk ke buku tebal lain di rak perpustakaan: kamu harus berdiri, berjalan mencari buku rujukan, dan membacanya terpisah.\n\n" +
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
            "Keputusan arsitektur paling fundamental saat merancang skema MongoDB adalah memilih antara menyematkan data anak di dalam dokumen induk (*Embedding*) atau memisahkannya ke koleksi lain dengan rujukan ID (*Referencing*). Embedding sangat unggul dalam kecepatan baca karena seluruh hierarki data ditarik dalam satu kali operasi I/O disk, sangat ideal untuk data yang selalu dibaca bersama dan memiliki batas pertumbuhan pasti seperti alamat pengiriman faktur. Sebaliknya, Referencing wajib dipilih ketika data anak bersifat tidak terbatas (*unbounded*) seperti komentar artikel atau riwayat log. Menyimpan ribuan komentar di satu dokumen artikel akan membengkakkan dokumen mendekati batas fisik 16 MB BSON dan memperlambat waktu muat halaman secara drastis. Aturan praktisnya sederhana: jika data anak berjumlah terbatas (*1-to-few*), lakukan embed; jika data anak berpotensi tumbuh tanpa batas (*1-to-many unbounded*), gunakan referensi.",
          example: {
            code:
              "// embed: alamat selalu dibaca bersama pesanannya\ndb.pesanan.insertOne({\n  kode: 'INV-1',\n  alamat: { kota: 'Bandung', pos: '40115' },\n});",
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
            "Pemodelan relasi banyak-ke-banyak (*Many-to-Many*) di MongoDB tidak memerlukan tabel perantara (*junction table*) seperti di SQL. Sebagai gantinya, MongoDB memanfaatkan array rujukan `ObjectId` yang disimpan langsung di salah satu atau kedua dokumen yang berelasi, misalnya field `kategori: [id1, id2]` pada dokumen produk. Saat memanipulasi array rujukan ini di aplikasi, penggunaan operator pembaruan sangat menentukan konsistensi data. Alih-alih memakai `$push` yang dapat memasukkan ID duplikat secara berulang jika pengguna mengklik dua kali, gunakan operator `$addToSet`. Operator `$addToSet` memastikan ID kategori hanya ditambahkan jika belum ada di dalam array, menjaga keunikan himpunan secara atomik tanpa memerlukan query pengecekan tambahan dari kode backend.",
          example: {
            code:
              "// one-to-many kecil: array di dokumen induk\ndb.user.updateOne(\n  { _id: userId },\n  { $push: { telepon: '0812-1111-2222' } }\n);",
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
            "Aggregation Pipeline adalah kerangka kerja analitik paling berdaya di MongoDB yang memproses dokumen dalam tahapan pipa sekuensial (*multi-stage pipeline*). Alih-alih menarik ratusan ribu baris data mentah ke server Node.js untuk dihitung manual dengan loop JavaScript, pemrosesan dilakukan langsung di mesin database menggunakan komputasi paralel C++. Tahap `$match` bertindak sebagai pintu gerbang penyaring di awal pipeline. Menempatkan `$match` sedini mungkin adalah aturan wajib optimasi performa: kueri dapat langsung memanfaatkan indeks B-Tree yang ada dan memangkas jumlah dokumen awal sebelum dialirkan ke tahap pengelompokan `$group` yang rakus memori RAM. Jika urutannya dibalik, MongoDB terpaksa mengelompokkan jutaan data di memori sebelum akhirnya menyaringnya, yang sering berujung pada error kehabisan batas memori 100 MB per stage.",
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
            "Dalam skema data berelasi, terkadang kita tetap perlu menggabungkan informasi dari dua koleksi berbeda. Stage `$lookup` pada aggregation pipeline menjalankan operasi penggabungan setara *Left Outer Join* di SQL dengan mencocokkan `localField` dokumen asal dengan `foreignField` di koleksi sasaran, lalu menampung hasilnya sebagai array di field `as`. Meskipun sangat berguna, penggunaan `$lookup` harus dibatasi dan dipertimbangkan secara matang. Setiap kali `$lookup` berjalan, MongoDB melakukan pemindaian ke koleksi kedua; jika `foreignField` tidak memiliki indeks, kompleksitasnya menjadi $O(N \\times M)$ yang dapat melumpuhkan server produksi. Jika aplikasi webmu membutuhkan 5 atau 6 `$lookup` berantai dalam satu kueri hanya untuk menampilkan satu halaman, itu adalah sinyal arsitektural jelas bahwa skema data tersebut seharusnya dinormalisasi di PostgreSQL.",
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
            "Tahap `$group` pada pipeline agregasi berfungsi mengelompokkan dokumen berdasarkan kunci pembeda tertentu yang wajib dideklarasikan pada properti `_id`. Seluruh akumulator agregat seperti `$sum`, `$avg`, `$min`, `$max`, dan `$push` dihitung di dalam tahap ini. Kesalahan paling umum yang menjadi momok bagi pemula adalah penulisan sintaks akumulator: untuk merujuk pada nilai sebuah field di dokumen, namanya wajib diawali tanda dolar sebagai string, misalnya `totalRevenue: { $sum: '$amount' }`. Jika kamu lupa membubuhkan tanda dolar dan hanya menulis `'$sum': 'amount'`, MongoDB akan menafsirkan kata 'amount' sebagai string literal statis, bukan nilai numerik dari field tersebut, sehingga perhitungan akumulasi total menghasilkan angka nol atau gagal secara diam-diam.",
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
            "Ketika dokumen memiliki field berjenis array (seperti daftar barang `items` di dalam sebuah pesanan), MongoDB tidak dapat menghitung total penjualan per item secara langsung karena data terbungkus di dalam array. Stage `$unwind` memecah setiap elemen di dalam array menjadi dokumen mandiri terpisah dengan menyalin seluruh atribut dokumen induknya. Jika satu faktur memiliki 3 item barang di array-nya, `$unwind: '$items'` akan menghasilkan 3 dokumen keluaran, masing-masing memuat satu item. Dokumen-dokumen individual ini kemudian dapat dialirkan ke tahap `$group` berikutnya untuk menghitung produk terlaris. Jebakan yang perlu diwaspadai: secara default, `$unwind` akan membuang dokumen yang array-nya kosong atau bernilai null. Jika kamu tetap ingin mempertahankan dokumen tersebut, aktifkan opsi `{ preserveNullAndEmptyArrays: true }`.",
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
            "Kekuatan analitik sesungguhnya dari Aggregation Pipeline lahir saat beberapa tahap digabungkan dalam satu rangkaian terpadu: penyaringan awal dengan `$match`, pengelompokan kalkulatif dengan `$group`, dan pengurutan akhir dengan `$sort`. Rangkaian ini memproses jutaan transaksi di level kernel database dan hanya mengembalikan belasan baris data ringkasan ke aplikasi backend, menghemat bandwidth jaringan dan kapasitas RAM Node.js. Menjaga urutan filter -> group -> sort adalah standar arsitektur industri. Memfilter di tahap awal menyusutkan volume data sedini mungkin, memastikan komputasi grup berjalan cepat di memori tanpa melampaui batas batas alokasi RAM pipeline. Laporan manajemen seperti daftar pelanggan paling loyal (*top spenders*) dibangun menggunakan pola pipeline tiga tahap ini.",
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
            "Meskipun NoSQL dikenal dengan skema dinamisnya, di lingkungan perusahaan besar dengan puluhan layanan microservice, ketiadaan aturan skema absolut dapat memicu kerusakan integritas data. Jika satu microservice salah menulis nama field, data rusak akan masuk ke database tanpa terdeteksi. MongoDB menyediakan fitur **Schema Validation** berbasis standar `$jsonSchema` yang ditegakkan langsung oleh mesin database melalui `db.createCollection('nama', { validator: { ... } })`. Dokumen yang tidak memiliki atribut wajib (*required fields*) atau memiliki tipe data yang keliru akan ditolak seketika oleh server database. Lapisan validasi ini melengkapi validasi tingkat aplikasi seperti Mongoose, memastikan bahwa skrip migrasi atau akses langsung dari shell terminal tetap tunduk pada integritas struktur data yang disepakati.",
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
            "Menyimpan array yang terus bertambah tanpa batas (*Unbounded Array*) di dalam satu dokumen adalah anti-pattern nomor satu dalam arsitektur MongoDB. Setiap kali elemen baru dimasukkan ke dokumen yang ukurannya melebihi alokasi disk awal, WiredTiger terpaksa memindahkan seluruh dokumen ke blok penyimpanan baru, memicu fragmentasi disk dan penurunan performa penulisan. Lebih parah lagi, dokumen tersebut berisiko menabrak batas keras ukuran dokumen BSON sebesar 16 MB. Jika kamu perlu menyimpan daftar riwayat terbaru di dokumen induk (seperti 10 notifikasi terakhir), gunakan modifier `$each` bersama `$slice: -N` di dalam perintah `$push`. Formula ini secara otomatis memotong array dan hanya mempertahankan *N* elemen paling mutakhir, bertindak seperti buffer geser yang menjaga ukuran dokumen tetap konstan dan aman.",
          example: {
            code:
              "// simpan hanya 5 aktivitas terbaru di dokumen induk\n" +
              "db.user.updateOne(\n  { _id: userId },\n  { $push: { aktivitas: { $each: [baru], $slice: -5 } } }\n);",
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
          title: "Arsitektur In-Memory Redis, Persistensi RDB/AOF & Caching Industri",
          body:
            "# Arsitektur In-Memory Redis, Event Loop & Persistensi Data\n\n" +
            "**Redis** (*Remote Dictionary Server*) adalah penyimpan struktur data di dalam memori RAM (*In-Memory Data Structure Store*). Berbeda dari database tradisional yang harus melakukan pembacaan blok disk NVMe/SSD, Redis mengeksekusi seluruh operasi langsung di RAM dengan waktu respon sub-milidetik (< 1 ms).\n\n" +
            "Arsitektur internal Redis mengandalkan **Single-Threaded Event Loop** berbasis *non-blocking I/O multiplexing* (menggunakan `epoll` di Linux atau `kqueue` di macOS/BSD). Mengapa thread tunggal justru membuat Redis sangat cepat? Karena tidak ada *overhead context-switching* CPU antar thread dan tidak ada *locking concurrency* (tidak ada mutex race condition di level data struktur memory).\n\n" +
            "## Bagaimana Redis Menyimpan Data Permanen? (RDB vs AOF)\n\n" +
            "Pemula sering keliru mengira Redis akan kehilangan seluruh data saat server dimatikan. Di lingkungan produksi, Redis memiliki dua mekanisme persistensi disk:\n\n" +
            "| Mekanisme Persistensi | Cara Kerja Fisik | Kelebihan | Kelemahan |\n" +
            "|---|---|---|---|\n" +
            "| **RDB (Snapshot)** | Mengambil snapshot seluruh memori RAM ke disk secara periodik (misal tiap 5 menit) | File backup ringkas, restart server sangat cepat | Kehilangan data beberapa menit terakhir jika listrik mati mendadak |\n" +
            "| **AOF (Append-Only File)** | Mencatat setiap perintah penulisan (`SET`, `INCR`, dll.) ke dalam log file secara real-time | Sangat aman (durability tinggi, fsync tiap detik) | Ukuran file log lebih besar, proses restart memuat ulang log lebih lambat |\n\n" +
            "> 💡 **Standar Produksi:** Arsitektur modern mengaktifkan **Hybrid Persistence**: snapshot RDB sebagai fondasi dasar pemulihan cepat, digabungkan dengan delta AOF untuk memastikan tidak ada data yang hilang.\n\n" +
            "## Eviction Policy: Apa yang Terjadi Saat RAM 100%?\n\n" +
            "RAM server terbatas (misal 8 GB). Ketika kapasitas memori menyentuh ambang batas `maxmemory`, Redis akan menerapkan kebijakan penghapusan kunci (*Eviction Policy*):\n\n" +
            "- `noeviction` (Bawaan): Menolak semua perintah penulisan baru dan mengembalikan error `OOM (Out Of Memory)`. Cocok untuk Redis yang dipakai sebagai message queue.\n" +
            "- `allkeys-lru`: Menghapus kunci yang paling jarang diakses (*Least Recently Used*) dari seluruh kunci. Standar emas untuk caching API murni.\n" +
            "- `volatile-lru`: Hanya menghapus kunci yang memiliki masa berlaku (*TTL/EXPIRE*) yang paling jarang diakses. Kunci abadi tetap dipertahankan.\n\n" +
            "## 3 Bencana Caching di Produksi & Cara Mencegahnya\n\n" +
            "1. **Cache Stampede / Thundering Herd:**\n" +
            "   - *Kejadian:* Kunci cache produk promo yang diakses 10.000 user/detik tiba-tiba kedaluwarsa (TTL habis). 10.000 request serentak membaca Redis $\\rightarrow$ Cache Miss $\\rightarrow$ 10.000 query langsung menabrak database PostgreSQL $\\rightarrow$ Database crash.\n" +
            "   - *Solusi:* Gunakan **Distributed Lock (SET NX EX)** sehingga hanya 1 worker yang men-query database untuk memperbarui cache, sementara request lainnya menunggu.\n\n" +
            "2. **Bahaya Perintah `KEYS *`:**\n" +
            "   - *Jebakan:* Mengetik `KEYS user:*` di terminal produksi. Karena Redis single-threaded, jika ada 2 juta kunci, server akan membeku (*freeze*) selama 3-5 detik menolak seluruh request aplikasi lain!\n" +
            "   - *Solusi:* Selalu gunakan perintah iterator non-blocking: `SCAN 0 MATCH user:* COUNT 100`.\n\n" +
            "3. **Cache Penetration:**\n" +
            "   - *Kejadian:* Penyerang berulang kali me-request ID fiktif yang tidak pernah ada di database (`GET /produk/-9999`). Cache selalu miss, database terus diserang.\n" +
            "   - *Solusi:* Simpan nilai kosong `nil` dengan TTL pendek (misal 60 detik) atau gunakan **Bloom Filter** di depan Redis.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan dapur restoran berbintang. Database utama (PostgreSQL/MongoDB) seperti gudang pendingin besar di lantai bawah: lengkap dan aman, tetapi membutuhkan waktu 5 menit untuk mengambil bahan baku. **Redis** seperti meja persiapan koki (*prep station*): bumbu dan bahan populer ditaruh tepat di depan koki untuk diambil dalam waktu 1 detik.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Redis adalah komponen standar dalam arsitektur backend modern. Redis digunakan oleh framework seperti Laravel (Laravel Horizon/Redis Queue) dan Node.js (BullMQ) untuk mengelola antrean pengiriman email, serta digunakan oleh API Gateway untuk *rate limiting* pencegahan serangan DDoS.",
        },
        {
          kind: "step",
          id: "nosql-4-1",
          title: "Kenapa Redis Super Cepat?",
          explanation:
            "Kecepatan ekstrem Redis berakar pada dua pilar arsitektur intinya: penyimpanan data sepenuhnya di memori utama (RAM) dan pemrosesan perintah melalui *single-threaded event loop* berbasis non-blocking I/O multiplexing. Kecepatan baca dan tulis memori semikonduktor RAM mencapai ribuan kali lebih cepat daripada media penyimpanan magnetik atau NVMe SSD tercepat sekalipun. Lebih dari itu, karena Redis mengeksekusi operasi perintah secara sekuensial pada satu utas tunggal (*single-thread*), mesin Redis tidak pernah mengalami perlambatan akibat peralihan konteks CPU (*context switching*) atau kebuntuan kunci sinkronisasi memori (*mutex lock contention*). Perintah dasar `SET key value` dan `GET key` dieksekusi dalam durasi sub-milidetik, menjadikannya standar industri untuk lapisan cache di depan database relasional.",
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
            "Banyak pemula salah mengira Redis hanya mampu menyimpan string teks biasa. Pada kenyataannya, Redis mendukung ragam struktur data kaya seperti Hash (`HSET`), List (`LPUSH`), Set (`SADD`), dan Sorted Set (`ZADD`). Struktur Hash bertindak seperti kamus objek mini di dalam satu kunci, sangat ideal untuk memodelkan entitas seperti profil pengguna atau setelan akun. Keunggulan teknis menggunakan Hash dibandingkan menyimpan JSON string biasa adalah efisiensi memori dan fleksibilitas: kamu dapat membaca atau memperbarui satu field atribut spesifik (misalnya hanya nama) tanpa perlu memuat dan mem-parsing seluruh objek JSON di kode aplikasi. Di tingkat internal, Redis mengoptimalkan memori Hash berukuran kecil menggunakan struktur data padat *listpack* yang memangkas konsumsi RAM hingga 70%.",
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
            "Struktur data Redis List diimplementasikan secara internal sebagai rantai berkait dua arah (*doubly linked list*). Karakteristik ini membuat operasi penyisipan elemen di kepala (`LPUSH`) dan penarikan elemen di ekor (`RPOP`) berjalan dalam kompleksitas waktu konstan $O(1)$, terlepas dari apakah antrean tersebut menampung sepuluh atau satu juta tugas. Kombinasi `LPUSH` oleh produser dan `RPOP` oleh konsumen membentuk pola antrean First-In First-Out (FIFO) yang sangat tangguh untuk memproses pekerjaan di latar belakang seperti pengiriman email notifikasi atau kompresi video. Di lingkungan kerja nyata, worker latar belakang menggunakan varian blocking `BRPOP queue timeout`, yang secara efisien menidurkan proses dan langsung terbangun seketika ada tugas baru masuk tanpa membuang siklus CPU polling.",
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
            "Redis Set adalah koleksi string acak tak berurut yang secara otomatis menjamin keunikan setiap anggotanya: elemen yang sama tidak akan pernah tersimpan ganda saat ditambahkan melalui `SADD`. Selain untuk mengelola tag atau daftar izin pengguna, kekuatan sejati Redis Set terletak pada operasi aljabar himpunan langsung di memori, seperti irisan (`SINTER`), gabungan (`SUNION`), dan selisih (`SDIFF`). Dalam aplikasi media sosial atau e-commerce, fitur seperti menemukan kesamaan minat antar-pengguna (*mutual interests*) atau teman bersama (*mutual friends*) dapat diselesaikan seketika lewat `SINTER setA setB`. Menjalankan kueri serupa pada database relasional SQL membutuhkan operasi self-join berlapis yang sangat berat dan lambat pada tabel berskala jutaan baris.",
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
            "Sorted Set (sering disingkat ZSet) memadukan keunikan anggota Set dengan skor numerik floating-point (*score*). Setiap kali elemen ditambahkan atau diperbarui skornya lewat `ZADD`, Redis secara otomatis mengurutkan seluruh anggota secara real-time di memori menggunakan struktur data hibrida *SkipList* dan *Hash Table*. Kompleksitas penambahan maupun pembaruan skor pemain hanya memakan waktu $O(\\log N)$. Saat aplikasi perlu menyajikan papan peringkat sepuluh besar (*Top 10 Leaderboard*), perintah `ZREVRANGE key 0 9 WITHSCORES` menarik data peringkat tertinggi secara instan tanpa perlu menjalankan pemindaian tabel dan pengurutan lambat `ORDER BY score DESC LIMIT 10` di SQL. Jangan sampai keliru pada urutan argumen `ZADD`: angka skor selalu ditulis terlebih dahulu sebelum nama anggota.",
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
            "Manajemen memori di Redis sangat mengandalkan mekanisme waktu hidup kunci (*Time-To-Live / TTL*). Data sementara seperti kode OTP, token sesi login, atau hasil kalkulasi API harus dihapus secara otomatis dari RAM begitu masa berlakunya usai agar tidak memicu kehabisan memori (*Out Of Memory / OOM*). Menggunakan perintah atomik `SETEX key seconds value` adalah praktik terbaik di industri karena menetapkan nilai sekaligus memasang masa kedaluwarsa dalam satu siklus perintah. Jika kamu memisahkannya menjadi dua perintah (`SET` lalu `EXPIRE`), ada risiko server aplikasi mati di antara kedua perintah tersebut, meninggalkan kunci permanen abadi di RAM yang bocor selamanya. Untuk memeriksa sisa masa berlaku kunci yang masih hidup, kamu dapat menjalankan perintah `TTL key`.",
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
            "Pola desain **Cache-Aside** (atau *Lazy Loading*) adalah arsitektur caching paling populer dalam rekayasa API backend. Alurnya terstruktur: saat aplikasi menerima permintaan data, aplikasi terlebih dahulu memeriksa Redis lewat `GET`. Jika data ditemukan (*Cache Hit*), payload langsung dikembalikan ke klien dalam tempo 1 milidetik. Jika kunci tidak ada (*Cache Miss*), aplikasi mengambil data dari database utama (PostgreSQL atau MongoDB), menyalin hasilnya ke Redis menggunakan `SETEX` lengkap dengan batas TTL, baru kemudian merespons pengguna. Pola ini menjamin hanya data yang benar-benar sering diminta yang memakan ruang di RAM, sekaligus melindungi database utama dari hantaman ribuan kueri pembacaan identik yang berulang.",
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
            "Membatasi frekuensi pemanggilan API (*Rate Limiting*) adalah lapisan pertahanan krusial untuk mencegah serangan brute force dan eksploitasi kuota API publik. Perintah `INCR key` pada Redis menaikkan angka integer secara atomik di dalam memori tanpa risiko kondisi balapan (*race condition*), bahkan saat ratusan proses backend mengakses kunci yang sama pada mikrodetik yang persis sama. Dengan memadukan `INCR` pada pemanggilan pertama dan menetapkan batas kedaluwarsa jendela waktu menggunakan `EXPIRE key seconds`, aplikasi dapat melacak jumlah request pengguna dalam rentang 60 detik. Jika nilai counter melampaui batas yang diizinkan (misal 100 panggilan per menit), API langsung menolak request dengan status HTTP 429 Too Many Requests.",
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
            "Dalam arsitektur microservices terdistribusi dengan banyak server container berjalan berdampingan, mengamankan eksekusi tugas tunggal (seperti pemotongan saldo invoice atau booking kursi konser) membutuhkan mekanisme penguncian bersama (*Distributed Lock*). Pola standar emas di industri mengandalkan perintah atomik tunggal: `SET key token NX EX seconds`. Argumen `NX` (*Not eXists*) memastikan kunci hanya berhasil dibuat jika belum ada worker lain yang memegang, sementara `EX seconds` menjamin kunci otomatis terlepas jika server pemegang tiba-tiba mengalami crash atau mati lampu, mencegah terjadinya *deadlock* permanen. Ketika melepaskan kunci, worker wajib memvalidasi token acak kepemilikannya menggunakan Lua script agar tidak sengaja menghapus kunci milik worker berikutnya yang baru saja masuk.",
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
            "Fitur Pub/Sub (*Publish/Subscribe*) pada Redis memfasilitasi siaran pesan real-time antar layanan microservice secara cepat melalui perintah `PUBLISH channel message` dan `SUBSCRIBE channel`. Fitur ini sangat ringan dan efisien untuk menyiarkan pesan obrolan langsung (*live chat*), pembaruan status sistem, atau sinyal pembersihan cache (*cache invalidation*) ke seluruh server backend. Namun, ada satu batasan arsitektur kritis yang wajib kamu pahami sebelum memakainya di produksi: Pub/Sub Redis bersifat *fire-and-forget* dan tidak memiliki persistensi riwayat. Jika ada subscriber yang sedang offline atau mengalami restart jaringan saat pesan dipublikasikan, pesan tersebut hilang selamanya. Untuk antrean tugas penting yang tidak boleh hilang, industri beralih ke Redis Streams atau sistem broker pesan persisten.",
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
            "Meskipun Redis sangat cepat dan fleksibel, ia dirancang sebagai lapisan penyimpanan in-memory dan transient cache, bukan sebagai basis data relasional permanen untuk buku besar transaksi utama. Memori RAM bersifat *volatile* dan memiliki biaya perangkat keras yang jauh lebih mahal per gigabyte dibanding media disk NVMe/SSD. Menggantungkan data transaksi abadi semata-mata pada Redis memiliki risiko kehilangan delta data jika terjadi pemadaman mendadak di antara siklus persistensi disk. Tugas esensial seorang insinyur saat data di database utama berubah adalah melakukan **Cache Invalidation**: menghapus kunci cache lama lewat `DEL key` (atau `UNLINK key` secara asinkron tanpa memblokir thread) agar aplikasi tidak menyajikan data usang kepada pengguna.",
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
