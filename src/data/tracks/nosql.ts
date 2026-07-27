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
          kind: "step",
          id: "nosql-1-1",
          title: "Empat Keluarga NoSQL dan Bentuk Datanya",
          explanation:
            "NoSQL bukan satu teknologi, melainkan payung untuk empat keluarga dengan bentuk data berbeda. Document store (MongoDB) menyimpan dokumen mirip JSON dan cocok untuk data yang bentuknya berubah-ubah. Key-value store (Redis) menyimpan pasangan kunci-nilai di memori dan unggul untuk cache atau sesi. Column-family (Cassandra) dirancang untuk penulisan sangat besar yang tersebar di banyak server, sedangkan graph database (Neo4j) unggul saat yang penting adalah relasi antar entitas, misalnya jaringan pertemanan. Memilih keluarga yang salah membuat query sehari-harimu terasa melawan arus.",
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
              message:
                "Pakai db.artikel.insertOne({ ... }).",
            },
            {
              pattern: "judul\\s*:\\s*['\"]Belajar NoSQL['\"]",
              message:
                "Sertakan bidang judul bernilai 'Belajar NoSQL'.",
            },
            {
              pattern: "tags\\s*:\\s*\\[\\s*['\"]db['\"]\\s*,\\s*['\"]nosql['\"]\\s*\\]",
              message:
                "Sertakan tags berupa array ['db', 'nosql'].",
            },
          ],
          solution: "db.artikel.insertOne({ judul: 'Belajar NoSQL', tags: ['db', 'nosql'] });",
        },
        {
          kind: "step",
          id: "nosql-1-2",
          title: "Trade-off: Kapan NoSQL Masuk Akal",
          explanation:
            "NoSQL bukan pengganti SQL, melainkan pilihan dengan konsekuensi berbeda. Kamu mendapat skema fleksibel dan penskalaan horizontal yang lebih mudah, tapi kehilangan JOIN yang murah dan jaminan transaksi lintas tabel yang ketat. Untuk data yang bentuknya sering berubah atau dokumen yang selalu dibaca utuh, dokumen menang telak. Untuk data keuangan yang saling terhubung dan wajib konsisten, relasional tetap jawaban yang benar — dan menjawab pertanyaan interview 'kenapa pilih ini?' dengan trade-off seperti ini jauh lebih meyakinkan daripada menyebut tren.",
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
              message:
                "Pakai db.aktivitas.insertOne({ ... }).",
            },
            {
              pattern: "tipe\\s*:\\s*['\"]login['\"]",
              message:
                "Sertakan bidang tipe bernilai 'login'.",
            },
            {
              pattern: "meta\\s*:\\s*\\{[^}]*ip\\s*:\\s*['\"]10\\.0\\.0\\.1['\"]",
              message:
                "Sertakan objek meta berisi ip '10.0.0.1'.",
            },
          ],
          solution: "db.aktivitas.insertOne({ tipe: 'login', meta: { ip: '10.0.0.1' } });",
        },
        {
          kind: "step",
          id: "nosql-1-3",
          title: "Teorema CAP dalam Praktik",
          explanation:
            "Saat sebuah sistem database tersebar di beberapa server, jaringan antar server suatu saat pasti terputus — itu keniscayaan, bukan kemungkinan. Teorema CAP menyatakan pada saat pemutusan itu terjadi kamu hanya bisa memilih dua dari tiga: konsistensi, ketersediaan, dan toleransi partisi. Karena toleransi partisi wajib ada, pilihan nyatanya menyempit: sistem CP menolak melayani agar data tidak berbeda antar server (cocok untuk saldo), sistem AP tetap melayani meski data sementara berbeda (cocok untuk katalog atau feed). MongoDB secara bawaan condong ke CP, sedangkan Cassandra condong ke AP.",
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
              message:
                "Mulai dari db.katalog.find(...).",
            },
            {
              pattern: "readPref\\(\\s*['\"]secondary['\"]\\s*\\)",
              message:
                "Tambahkan .readPref('secondary') agar tetap melayani saat primary sibuk.",
            },
          ],
          solution: "db.katalog.find().readPref('secondary');",
        },
        {
          kind: "step",
          id: "nosql-1-4",
          title: "Kesalahan Umum: Memilih NoSQL karena Sedang Ramai",
          explanation:
            "Alasan paling sering di balik proyek yang berantakan adalah memilih database karena namanya sedang populer, bukan karena bentuk datanya. Data keuangan dan inventori penuh relasi serta menuntut konsistensi ketat; memaksakannya ke dokumen berarti kamu menulis sendiri logika JOIN dan konsistensi di kode aplikasi — pekerjaan yang sudah diselesaikan database relasional puluhan tahun lalu. Sebaliknya, memaksa data log atau dokumen bervariasi masuk ke tabel kaku membuat skema penuh kolom kosong. Tanyakan dulu: datanya dibaca utuh atau saling dihubungkan?",
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
              message:
                "Mulai dengan session.startTransaction();",
            },
            {
              pattern: "session\\.commitTransaction\\(\\s*\\)",
              message:
                "Akhiri dengan session.commitTransaction();",
            },
          ],
          solution: "session.startTransaction();\nsession.commitTransaction();",
        },
        {
          kind: "step",
          id: "nosql-1-5",
          title: "Studi Kasus: Memasangkan Kebutuhan dengan Database",
          explanation:
            "Aplikasi nyata jarang memakai satu database saja. Pola yang umum dipakai: PostgreSQL atau MySQL untuk data inti yang saling berelasi, MongoDB untuk dokumen yang bentuknya bervariasi seperti katalog atau log aktivitas, dan Redis untuk sesi login serta cache yang harus dijawab dalam milidetik. Kombinasi ini disebut polyglot persistence, dan kuncinya adalah menempatkan setiap data pada penyimpanan yang paling sesuai sifatnya. Yang perlu kamu hindari adalah menambah teknologi baru tanpa alasan — setiap database tambahan berarti satu lagi yang harus dipantau, dicadangkan, dan dipahami tim.",
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
              message:
                "Pakai SETEX sesi:u42 1800 diikuti nilainya.",
            },
            {
              pattern: "['\"]?token-xyz['\"]?",
              message:
                "Nilainya 'token-xyz'.",
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
          kind: "step",
          id: "nosql-2-1",
          title: "Dokumen & Koleksi MongoDB",
          explanation:
            "MongoDB menyimpan data dalam bentuk Dokumen BSON (Binary JSON) yang dikelompokkan di dalam **Collection** (setara tabel). Setiap dokumen memiliki kunci unik `_id`.",
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
              pattern: "db\\.products\\.insertOne\\(\\s*\\{\\s*title\\s*:\\s*['\"]Laptop['\"]\\s*,\\s*price\\s*:\\s*1000\\s*\\}\\s*\\)",
              message: "Gunakan: db.products.insertOne({ title: 'Laptop', price: 1000 })",
            },
          ],
          solution: "db.products.insertOne({ title: 'Laptop', price: 1000 });",
        },
        {
          kind: "step",
          id: "nosql-2-2",
          title: "Query Data dengan find() & Operator $gt, $in",
          explanation:
            "Pencarian data dilakukan dengan `db.collection.find({ filter })` menggunakan operator seperti `$gt` (greater than), `$in`, dan `$regex`.",
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
              pattern: "db\\.users\\.find\\(\\s*\\{\\s*age\\s*:\\s*\\{\\s*\\$gt\\s*:\\s*18\\s*\\}\\s*\\}\\s*\\)",
              message: "Gunakan: db.users.find({ age: { $gt: 18 } })",
            },
          ],
          solution: "db.users.find({ age: { $gt: 18 } });",
        },
        {
          kind: "step",
          id: "nosql-2-3",
          title: "Update Dokumen: $set, $inc, $push",
          explanation:
            "Update menggunakan operator pembaruan: `$set` untuk mengubah nilai, `$inc` untuk menambah angka, dan `$push` untuk menambah elemen ke array.",
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
              pattern: "db\\.users\\.updateOne\\(\\s*\\{\\s*_id\\s*\\}\\s*,\\s*\\{\\s*\\$set\\s*:\\s*\\{\\s*active\\s*:\\s*true\\s*\\}\\s*\\}\\s*\\)",
              message: "Gunakan operator $set di updateOne",
            },
          ],
          solution: "db.users.updateOne({ _id }, { $set: { active: true } });",
        },
        {
          kind: "step",
          id: "nosql-2-4",
          title: "Penghapusan Dokumen: deleteOne & deleteMany",
          explanation:
            "Hapus dokumen menggunakan `db.collection.deleteOne({ _id })` atau `db.collection.deleteMany({ status: 'expired' })`.",
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
              pattern: "db\\.users\\.deleteOne\\(\\s*\\{\\s*_id\\s*:\\s*userId\\s*\\}\\s*\\)",
              message: "Gunakan: db.users.deleteOne({ _id: userId })",
            },
          ],
          solution: "db.users.deleteOne({ _id: userId });",
        },
        {
          kind: "step",
          id: "nosql-2-5",
          title: "Projection & Sort/Limit/Skip",
          explanation:
            "Gunakan **Projection** `{ name: 1, email: 1 }` untuk membatasi kolom yang dikembalikan, serta `.sort()`, `.skip()`, dan `.limit()` untuk pagination.",
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
              pattern: "db\\.products\\.find\\(\\)\\.sort\\(\\s*\\{\\s*price\\s*:\\s*1\\s*\\}\\s*\\)\\.limit\\(\\s*5\\s*\\)",
              message: "Gunakan: db.products.find().sort({ price: 1 }).limit(5)",
            },
          ],
          solution: "db.products.find().sort({ price: 1 }).limit(5);",
        },
        {
          kind: "step",
          id: "nosql-2-6",
          title: "Indexing di MongoDB (createIndex)",
          explanation:
            "Buat Index di MongoDB menggunakan `db.collection.createIndex({ field: 1 })` untuk mempercepat query pencarian.",
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
              pattern: "db\\.orders\\.createIndex\\(\\s*\\{\\s*userId\\s*:\\s*1\\s*\\}\\s*\\)",
              message: "Gunakan: db.orders.createIndex({ userId: 1 })",
            },
          ],
          solution: "db.orders.createIndex({ userId: 1 });",
        },
        {
          kind: "step",
          id: "nosql-2-7",
          title: "Mongoose ODM atau Driver Native",
          explanation:
            "Driver native MongoDB memberimu kendali penuh dan tidak memaksakan struktur apa pun, sedangkan Mongoose menambahkan lapisan skema di sisi aplikasi: tipe bidang, nilai wajib, nilai bawaan, dan validasi sebelum data masuk. Untuk tim yang datanya harus konsisten, Mongoose menghemat banyak bug karena dokumen tanpa bidang wajib langsung ditolak. Harganya adalah satu lapisan abstraksi tambahan yang harus dipahami, dan sedikit beban performa. Ingat bahwa skema Mongoose hanya berlaku lewat aplikasimu — siapa pun yang menulis langsung ke database tetap bisa melewatinya.",
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
              message:
                "Buat const ProductSchema = new mongoose.Schema({ ... }).",
            },
            {
              pattern: "title\\s*:\\s*\\{[^}]*type\\s*:\\s*String[^}]*required\\s*:\\s*true",
              message:
                "Bidang title bertipe String dan required: true.",
            },
            {
              pattern: "price\\s*:\\s*(Number|\\{[^}]*type\\s*:\\s*Number)",
              message:
                "Bidang price bertipe Number.",
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
          kind: "step",
          id: "nosql-3-1",
          title: "Embed atau Reference: Aturan Praktis",
          explanation:
            "Keputusan desain paling menentukan di MongoDB adalah menyimpan data anak di dalam dokumen induk (embed) atau menyimpannya terpisah lalu menunjuk lewat id (reference). Embed tepat kalau datanya selalu dibaca bersama induknya dan jumlahnya terbatas — misalnya alamat pengiriman pada satu pesanan. Reference tepat kalau datanya tumbuh tanpa batas atau dipakai banyak dokumen lain, misalnya komentar pada artikel populer. Batas keras yang perlu kamu ingat: satu dokumen MongoDB maksimal 16 MB, dan dokumen yang terus membesar akan memperlambat setiap pembacaan meski kamu hanya butuh satu bidang.",
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
              message:
                "Pakai db.komentar.insertOne({ ... }).",
            },
            {
              pattern: "artikelId\\s*:\\s*postId",
              message:
                "Simpan penunjuk ke induknya lewat artikelId: postId.",
            },
            {
              pattern: "isi\\s*:\\s*['\"]Bermanfaat!['\"]",
              message:
                "Sertakan isi: 'Bermanfaat!'.",
            },
          ],
          solution: "db.komentar.insertOne({ artikelId: postId, isi: 'Bermanfaat!' });",
        },
        {
          kind: "step",
          id: "nosql-3-2",
          title: "Memodelkan One-to-Many dan Many-to-Many",
          explanation:
            "Untuk relasi satu-ke-banyak yang jumlahnya sedikit dan tetap — misalnya beberapa nomor telepon milik satu pengguna — array di dalam dokumen induk adalah pilihan paling sederhana dan paling cepat dibaca. Begitu jumlahnya bisa ribuan, pindahkan ke koleksi terpisah dengan penunjuk id. Untuk relasi banyak-ke-banyak, cara paling umum adalah menyimpan array id di salah satu sisi, misalnya daftar id kategori di dokumen produk. Pilihanmu di sini menentukan bentuk query nanti, jadi tentukan setelah tahu pola pembacaan aplikasimu, bukan sebelumnya.",
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
              message:
                "Pakai db.produk.updateOne(...).",
            },
            {
              pattern: "_id\\s*:\\s*produkId",
              message:
                "Saring dokumen dengan _id: produkId.",
            },
            {
              pattern: "\\$(push|addToSet)\\s*:\\s*\\{\\s*kategori\\s*:\\s*kategoriId",
              message:
                "Tambahkan elemen dengan $push (atau $addToSet) ke array kategori.",
            },
          ],
          solution: "db.produk.updateOne({ _id: produkId }, { $addToSet: { kategori: kategoriId } });",
        },
        {
          kind: "step",
          id: "nosql-3-3",
          title: "Aggregation Pipeline: $match, $group, $sort",
          explanation:
            "Aggregation Pipeline memproses data bertahap melalui serangkaian stage (seperti memfilter `$match`, mengelompokkan `$group`, dan mengurutkan `$sort`).",
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
              pattern: "db\\.orders\\.aggregate\\(\\s*\\[\\s*\\{\\s*\\$match\\s*:\\s*\\{\\s*status\\s*:\\s*['\"]paid['\"]\\s*\\}\\s*\\}\\s*\\]\\s*\\)",
              message: "Gunakan stage $match di aggregate",
            },
          ],
          solution: "db.orders.aggregate([{ $match: { status: 'paid' } }]);",
        },
        {
          kind: "step",
          id: "nosql-3-4",
          title: "Tahap $lookup (Join ala MongoDB)",
          explanation:
            "Stage `$lookup` menggabungkan dokumen dari collection lain layaknya SQL JOIN.",
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
              pattern: "\\{\\s*\\$lookup\\s*:\\s*\\{\\s*from\\s*:\\s*['\"]categories['\"]\\s*,\\s*localField\\s*:\\s*['\"]catId['\"]\\s*,\\s*foreignField\\s*:\\s*['\"]_id['\"]\\s*,\\s*as\\s*:\\s*['\"]category['\"]\\s*\\}\\s*\\}",
              message: "Definisikan stage $lookup sesuai instruksi",
            },
          ],
          solution: "{$lookup: { from: 'categories', localField: 'catId', foreignField: '_id', as: 'category' }}",
        },
        {
          kind: "step",
          id: "nosql-3-5",
          title: "Schema Validation di Sisi Database",
          explanation:
            "Fleksibilitas MongoDB berubah menjadi masalah begitu beberapa layanan menulis ke koleksi yang sama dengan bentuk berbeda-beda. Karena itu MongoDB menyediakan validator di level database: aturan yang menolak dokumen yang tidak memenuhi bentuk yang kamu tetapkan, apa pun jalur masuknya. Berbeda dengan skema Mongoose yang hanya berlaku di aplikasimu, validator ini ditegakkan oleh server. Praktik yang lazim: pasang validator untuk bidang yang benar-benar wajib, lalu biarkan sisanya tetap fleksibel supaya keunggulan dokumen tidak hilang.",
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
              message:
                "Pakai db.createCollection('pengguna', { ... }).",
            },
            {
              pattern: "validator\\s*:",
              message:
                "Sertakan opsi validator.",
            },
            {
              pattern: "\\$jsonSchema",
              message:
                "Pakai $jsonSchema untuk mendeskripsikan bentuk dokumen.",
            },
            {
              pattern: "required\\s*:\\s*\\[\\s*['\"]email['\"]",
              message:
                "Tetapkan email sebagai bidang wajib.",
            },
          ],
          solution: "db.createCollection('pengguna', {\n  validator: { $jsonSchema: { required: ['email'] } },\n});",
        },
        {
          kind: "step",
          id: "nosql-3-6",
          title: "Anti-pattern: Array yang Tumbuh Tanpa Batas",
          explanation:
            "Menyimpan seluruh riwayat di dalam array dokumen induk terasa praktis di awal, lalu perlahan menghancurkan performa. Setiap pembacaan dokumen ikut memuat seluruh array meski kamu hanya butuh nama pengguna, dan setiap penambahan memaksa dokumen dipindahkan saat ukurannya membengkak. Batas 16 MB per dokumen akan tercapai pada pengguna paling aktif — biasanya justru pelanggan terpentingmu. Solusi bakunya: simpan riwayat di koleksi terpisah, dan kalau memang perlu di dokumen induk, batasi jumlahnya dengan operator `$slice` sehingga hanya beberapa terbaru yang disimpan.",
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
              message:
                "Pakai db.user.updateOne(...).",
            },
            {
              pattern: "\\$push\\s*:\\s*\\{\\s*notifikasi",
              message:
                "Tambahkan ke array notifikasi memakai $push.",
            },
            {
              pattern: "\\$each\\s*:\\s*\\[\\s*pesanBaru\\s*\\]",
              message:
                "Bungkus item baru dengan $each: [pesanBaru].",
            },
            {
              pattern: "\\$slice\\s*:\\s*-10",
              message:
                "Batasi array dengan $slice: -10.",
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
          kind: "step",
          id: "nosql-4-1",
          title: "Kenapa Redis Super Cepat?",
          explanation:
            "Redis menyimpan seluruh data langsung di RAM (In-Memory Data Store), menjadikannya mampu mengeksekusi puluhan ribu operasi per detik dengan latency di bawah 1 milidetik.",
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
            "Redis bukan sekadar key-value biasa, ia mendukung tipe data kaya seperti Hash (`HSET`), List (`LPUSH`), Set (`SADD`), dan Sorted Set (`ZADD`).",
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
            "Atur waktu hidup data (Time To Live) menggunakan `EXPIRE key seconds` atau `SETEX key seconds value` agar data otomatis terhapus saat kadaluarsa.",
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
            "Cache-aside adalah pola caching paling umum di aplikasi web: aplikasi memeriksa Redis lebih dulu, dan hanya kalau datanya tidak ada barulah ia bertanya ke database lalu menyimpan hasilnya ke Redis untuk permintaan berikutnya. Yang wajib kamu tentukan adalah masa berlaku (TTL), karena cache tanpa kedaluwarsa akan menyajikan data basi tanpa ada yang menyadarinya. Kesalahan umum berikutnya adalah menyimpan hasil kosong atau error ke cache — permintaan berikutnya akan mendapat kekosongan itu sampai TTL habis. Perlakukan cache sebagai lapisan yang boleh hilang kapan saja: aplikasimu harus tetap benar meski Redis mati.",
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
              message:
                "Baris pertama: GET artikel:12.",
            },
            {
              pattern: "SETEX\\s+artikel:12\\s+600",
              message:
                "Baris kedua: SETEX artikel:12 600 diikuti nilainya.",
            },
            {
              pattern: "\\{[^}]*judul",
              message:
                "Simpan nilai JSON yang memuat judul.",
            },
          ],
          solution: "GET artikel:12\nSETEX artikel:12 600 '{\"judul\":\"NoSQL\"}'",
        },
        {
          kind: "step",
          id: "nosql-4-5",
          title: "Rate Limiter dengan INCR dan EXPIRE",
          explanation:
            "Rate limiter membatasi berapa kali satu pengguna boleh memanggil endpoint dalam rentang waktu tertentu, dan Redis nyaris sempurna untuk ini karena operasinya atomik dan datanya memang boleh hilang. Polanya: naikkan penghitung dengan `INCR`, lalu pasang masa berlaku dengan `EXPIRE` pada kenaikan pertama sehingga jendela waktunya bergulir sendiri. Yang sering terlewat adalah lupa memasang EXPIRE — akibatnya penghitung tidak pernah berhenti dan pengguna terblokir selamanya. Pola yang sama dipakai untuk membatasi percobaan login demi menahan serangan tebak kata sandi.",
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
              message:
                "Naikkan penghitung dengan INCR limit:u7.",
            },
            {
              pattern: "EXPIRE\\s+limit:u7\\s+60",
              message:
                "Pasang masa berlaku dengan EXPIRE limit:u7 60.",
            },
          ],
          solution: "INCR limit:u7\nEXPIRE limit:u7 60",
        },
        {
          kind: "step",
          id: "nosql-4-6",
          title: "Pub/Sub Sederhana di Redis",
          explanation:
            "Redis Pub/Sub memungkinkan pengiriman pesan real-time antar layanan mikro menggunakan `PUBLISH channel message` dan `SUBSCRIBE channel`.",
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
            "Redis menyimpan data di memori, dan itulah sumber kecepatannya sekaligus batasnya. Memori jauh lebih mahal daripada disk, jadi menyimpan seluruh data aplikasi di Redis akan mahal dan tidak realistis. Meski Redis punya mekanisme penyimpanan ke disk, jaminan ketahanannya tidak sekuat database relasional: pada kegagalan tertentu, data beberapa detik terakhir bisa hilang. Karena itu jangan pernah menjadikan Redis satu-satunya tempat data yang tidak boleh hilang seperti transaksi atau pesanan. Tempatkan ia sebagai lapisan cepat di depan database utama, bukan penggantinya.",
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
              message:
                "Pakai DEL produk:7 (atau UNLINK) untuk membuang cache lama.",
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
              question: "Dalam Redis, jenis data apa yang dimanipulasi dengan perintah awalan L dan R seperti LPUSH dan RPOP?",
              choices: ["Set", "Hash", "List", "Sorted Set"],
              answerIndex: 2,
              explanation: "Perintah push/pop awalan L (Left) dan R (Right) digunakan pada tipe List untuk membikin message queue atau antrean.",
            },
            {
              id: "q5",
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
          ],
        },
      ],
    },
  ],
};
