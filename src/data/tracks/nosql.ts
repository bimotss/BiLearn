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
          title: "Empat Keluarga NoSQL",
          explanation:
            "NoSQL terbagi menjadi 4 jenis utama: Document Store (MongoDB), Key-Value (Redis), Column-Family (Cassandra), dan Graph Database (Neo4j).",
          example: {
            code:
              "function getDBType(name) {\n" +
              "  if (name === 'MongoDB') return 'document';\n" +
              "  if (name === 'Redis') return 'key-value';\n" +
              "  return 'other';\n" +
              "}\n" +
              "console.log(getDBType('Redis'));",
            output: "key-value",
            note: "Pilihlah jenis NoSQL berdasarkan struktur data yang ingin dikelola.",
          },
          instruction:
            "Lengkapi fungsi `getNoSQLFamily(db)` agar mengembalikan jenis keluarga NoSQL yang tepat: untuk `'MongoDB'` kembalikan `'document'`, `'Redis'` -> `'key-value'`, dan `'Neo4j'` -> `'graph'`.",
          starterCode:
            "function getNoSQLFamily(db) {\n  if (db === 'MongoDB') return 'document';\n  if (db === 'Redis') return '';\n  if (db === 'Neo4j') return '';\n}\n",
          language: "js",
          tests: [
            {
              pattern: "db\\s*===\\s*['\"]Redis['\"]\\s*\\)?\\s*return\\s*['\"]key-value['\"]",
              message: "Kembalikan 'key-value' untuk Redis",
            },
            {
              pattern: "db\\s*===\\s*['\"]Neo4j['\"]\\s*\\)?\\s*return\\s*['\"]graph['\"]",
              message: "Kembalikan 'graph' untuk Neo4j",
            },
          ],
          solution:
            "function getNoSQLFamily(db) {\n  if (db === 'MongoDB') return 'document';\n  if (db === 'Redis') return 'key-value';\n  if (db === 'Neo4j') return 'graph';\n}",
        },
        {
          kind: "step",
          id: "nosql-1-2",
          title: "Trade-off NoSQL vs SQL",
          explanation:
            "NoSQL memberikan skema fleksibel dan skala horizontal yang mudah (sharding), namun mengorbankan transaksi ACID kompleks dan JOIN relasional.",
          example: {
            code:
              "function checkScalability(type) {\n" +
              "  return type === 'NoSQL' ? 'horizontal' : 'vertical';\n" +
              "}\n" +
              "console.log(checkScalability('NoSQL'));",
            output: "horizontal",
            note: "Gunakan NoSQL saat skema data belum pasti atau berubah cepat.",
          },
          instruction:
            "Lengkapi fungsi `shouldUseNoSQL(req)` yang mengembalikan `true` jika salah satu syarat terpenuhi: `req.flexibleSchema` atau `req.horizontalScale`.",
          starterCode: "function shouldUseNoSQL(req) {\n  return false;\n}\n",
          language: "js",
          tests: [
            {
              pattern: "req\\.flexibleSchema\\s*\\|\\|\\s*req\\.horizontalScale",
              message: "Periksa req.flexibleSchema || req.horizontalScale",
            },
          ],
          solution:
            "function shouldUseNoSQL(req) {\n  return Boolean(req.flexibleSchema || req.horizontalScale);\n}",
        },
        {
          kind: "step",
          id: "nosql-1-3",
          title: "Teorema CAP (Consistency, Availability, Partition Tolerance)",
          explanation:
            "Saat database berskala masif tersebar di banyak server, ada aturan absolut bernama Teorema CAP. Kamu hanya bisa memilih dua dari tiga jaminan: Consistency (setiap pengguna selalu melihat data terbaru yang sama), Availability (server selalu online dan merespon), dan Partition Tolerance (sistem tetap jalan meski jaringan antar-server terputus). Di era aplikasi modern, Partition Tolerance adalah harga mati karena jaringan bisa kacau kapan saja. Jadi pilihanmu: menolak akses sementara demi keakuratan data (CP), atau tetap online walau data mungkin belum tersinkron (AP).",
          example: {
            code:
              "function getCAPType(c, a, p) {\n" +
              "  if (c && p) return 'CP';\n" +
              "  if (a && p) return 'AP';\n" +
              "  return 'UNKNOWN';\n" +
              "}\n" +
              "console.log(getCAPType(true, false, true));",
            output: "CP",
            note: "Di era cloud, Partition Tolerance (P) adalah keharusan mutlak.",
          },
          instruction:
            "Buat fungsi `checkCAPGuarantee(sys)` yang mengembalikan string `\"CP\"` jika sistem memiliki properti `sys.hasConsistency` dan `sys.hasPartition`.",
          starterCode: "// Tulis fungsi checkCAPGuarantee di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+checkCAPGuarantee\\s*\\(\\s*sys\\s*\\)",
              message: "Definisikan function checkCAPGuarantee(sys)",
            },
            {
              pattern: "sys\\.hasConsistency\\s*&&\\s*sys\\.hasPartition",
              message: "Periksa properti sys.hasConsistency && sys.hasPartition",
            },
          ],
          solution:
            'function checkCAPGuarantee(sys) {\n  if (sys.hasConsistency && sys.hasPartition) return "CP";\n  return "OTHER";\n}',
        },
        {
          kind: "step",
          id: "nosql-1-4",
          title: "Kesalahan Pemilihan Database",
          explanation:
            "Jangan gunakan NoSQL HANYA karena 'populer'! Jika datamu penuh relasi kompleks (seperti e-commerce/perbankan), SQL relasional tetap pilihan terbaik.",
          example: {
            code:
              "function recommendDB(isFinancial) {\n" +
              "  return isFinancial ? 'SQL' : 'NoSQL';\n" +
              "}\n" +
              "console.log(recommendDB(true));",
            output: "SQL",
            note: "Gunakan alat yang tepat untuk jenis masalah yang tepat.",
          },
          instruction:
            "Buat fungsi `selectDatabase(useCase)` yang mengembalikan `'SQL'` untuk kasus `'financial_ledger'` dan `'NoSQL'` untuk `'product_catalog'`.",
          starterCode: "// Tulis fungsi selectDatabase di sini\n",
          language: "js",
          tests: [
            {
              pattern: "useCase\\s*===\\s*['\"]financial_ledger['\"]",
              message: "Periksa pengondisian useCase === 'financial_ledger'",
            },
          ],
          solution:
            "function selectDatabase(useCase) {\n  return useCase === 'financial_ledger' ? 'SQL' : 'NoSQL';\n}",
        },
        {
          kind: "step",
          id: "nosql-1-5",
          title: "Studi Kasus Aplikasi yang Tepat",
          explanation:
            "Gunakan **MongoDB** untuk Katalog Produk / CMS. Gunakan **Redis** untuk Session & Cache. Gunakan **PostgreSQL** untuk Transaksi Keuangan.",
          example: {
            code:
              "const appStack = {\n" +
              "  cache: 'Redis',\n" +
              "  db: 'MongoDB'\n" +
              "};\n" +
              "console.log(appStack.cache);",
            output: "Redis",
            note: "Banyak startup menggunakan PostgreSQL + Redis secara bersamaan.",
          },
          instruction:
            "Buat objek `config` yang memetakan properti `sessionStore` ke `'Redis'` dan `mainDB` ke `'MongoDB'`.",
          starterCode: "// Tulis objek config di sini\n",
          language: "js",
          tests: [
            {
              pattern: "sessionStore\\s*:\\s*['\"]Redis['\"]",
              message: "Set sessionStore: 'Redis'",
            },
            {
              pattern: "mainDB\\s*:\\s*['\"]MongoDB['\"]",
              message: "Set mainDB: 'MongoDB'",
            },
          ],
          solution:
            "const config = {\n  sessionStore: 'Redis',\n  mainDB: 'MongoDB'\n};",
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
          title: "Mongoose ODM vs Driver Native",
          explanation:
            "Mongoose memberikan skema terstruktur, validasi, dan middleware di atas MongoDB yang berbasis skema fleksibel.",
          example: {
            code:
              "import mongoose from 'mongoose';\n" +
              "const UserSchema = new mongoose.Schema({ name: String, email: { type: String, required: true } });\n" +
              "const User = mongoose.model('User', UserSchema);\n" +
              "console.log(User.modelName);",
            output: "User",
            note: "Mongoose adalah ODM paling umum untuk Node.js + MongoDB.",
          },
          instruction:
            "Buat skema Mongoose baru bernama `ProductSchema` yang memiliki bidang `title` bertipe `String`.",
          starterCode: "// Tulis Schema Mongoose di sini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+ProductSchema\\s*=\\s*new\\s+mongoose\\.Schema\\(\\s*\\{\\s*title\\s*:\\s*String\\s*\\}\\s*\\)",
              message: "Gunakan: const ProductSchema = new mongoose.Schema({ title: String });",
            },
          ],
          solution: "const ProductSchema = new mongoose.Schema({ title: String });",
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
          title: "Embed vs Reference: Aturan Emas Desain",
          explanation:
            "**Embed** (menyematkan dokumen di dalam dokumen) jika data dibaca bersamaan dan berukuran terbatas (misal: Alamat di User). **Reference** (menyimpan ID) jika data berkembang tanpa batas.",
          example: {
            code:
              "function shouldEmbed(isBounded) {\n" +
              "  return isBounded === true;\n" +
              "}\n" +
              "console.log(shouldEmbed(true));",
            output: "true",
            note: "Batas ukuran 1 dokumen MongoDB adalah 16 Megabytes.",
          },
          instruction:
            "Buat fungsi `chooseEmbedding(dataSize)` yang mengembalikan `true` jika `dataSize === 'bounded'` dan `false` jika sebaliknya.",
          starterCode: "// Tulis fungsi chooseEmbedding di sini\n",
          language: "js",
          tests: [
            {
              pattern: "dataSize\\s*===\\s*['\"]bounded['\"]",
              message: "Kembalikan true jika dataSize === 'bounded'",
            },
          ],
          solution:
            "function chooseEmbedding(dataSize) {\n  return dataSize === 'bounded';\n}",
        },
        {
          kind: "step",
          id: "nosql-3-2",
          title: "Memodelkan One-to-Many & Many-to-Many",
          explanation:
            "Untuk 1:Banyak Kecil (misal 1 User punya 3 No HP), gunakan Array Embedded. Untuk 1:Banyak Besar (misal 1 User punya 1 juta Log), gunakan Parent Reference.",
          example: {
            code:
              "function getRelationStrategy(count) {\n" +
              "  return count > 1000 ? 'reference' : 'embed';\n" +
              "}\n" +
              "console.log(getRelationStrategy(5000));",
            output: "reference",
            note: "Modelkan data sesuai pola akses query aplikasi.",
          },
          instruction:
            "Buat fungsi `getModelType(relationCount)` yang mengembalikan `'array_embed'` jika `relationCount < 100` dan `'parent_reference'` jika `relationCount >= 100`.",
          starterCode: "// Tulis getModelType di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "relationCount\\s*<\\s*100\\s*\\?\\s*['\"]array_embed['\"]\\s*:\\s*['\"]parent_reference['\"]",
              message: "Gunakan pengondisian relationCount < 100",
            },
          ],
          solution:
            "function getModelType(relationCount) {\n  return relationCount < 100 ? 'array_embed' : 'parent_reference';\n}",
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
          title: "Schema Validation di MongoDB",
          explanation:
            "Meskipun NoSQL fleksibel, kita dapat menambah aturan Schema Validation menggunakan `$jsonSchema` langsung pada tingkatan collection.",
          example: {
            code:
              "function isValidDoc(doc) {\n" +
              "  return typeof doc.email === 'string';\n" +
              "}\n" +
              "console.log(isValidDoc({ email: 'test@bimo.com' }));",
            output: "true",
            note: "Menjaga integritas data tanpa mengorbankan fleksibilitas NoSQL.",
          },
          instruction:
            "Buat fungsi validator `validateDocument(doc)` yang mengembalikan nilai boolean apakah properti `doc.email` ada (truthy).",
          starterCode: "// Tulis fungsi validateDocument di sini\n",
          language: "js",
          tests: [
            {
              pattern: "Boolean\\s*\\(\\s*doc\\s*&&\\s*doc\\.email\\s*\\)",
              message: "Gunakan Boolean(doc && doc.email)",
            },
          ],
          solution:
            "function validateDocument(doc) {\n  return Boolean(doc && doc.email);\n}",
        },
        {
          kind: "step",
          id: "nosql-3-6",
          title: "Mencegah Anti-Pattern: Unbounded Array",
          explanation:
            "HINDARI menyematkan Array yang tumbuh tanpa batas (seperti `comments: [...]` di dalam dokumen Post jika komentar bisa berjumlah ribuan).",
          example: {
            code:
              "function checkLimit(arr) {\n" +
              "  if (arr.length > 1000) throw new Error('Too big');\n" +
              "}\n" +
              "checkLimit([1, 2, 3]);",
            output: "Array aman.",
            note: "Dokumen yang terlalu besar memperlambat transfer network.",
          },
          instruction:
            "Buat fungsi `checkArraySafety(arrayLength)` yang melempar error `\"Array exceeds limit\"` jika `arrayLength > 1000`.",
          starterCode: "// Tulis fungsi checkArraySafety di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "if\\s*\\(\\s*arrayLength\\s*>\\s*1000\\s*\\)\\s*throw\\s+new\\s+Error",
              message: "Gunakan: if (arrayLength > 1000) throw new Error('Array exceeds limit');",
            },
          ],
          solution:
            'function checkArraySafety(arrayLength) {\n  if (arrayLength > 1000) throw new Error("Array exceeds limit");\n}',
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
          title: "Pola Caching: Cache-Aside Pattern",
          explanation:
            "Aplikasi mengecek Redis terlebih dahulu (Cache Hit). Jika tidak ada (Cache Miss), ambil dari database utama lalu simpan hasilnya ke Redis.",
          example: {
            code:
              "const cached = await redis.get(key);\n" +
              "if (cached) return JSON.parse(cached);\n" +
              "const data = await db.find();\n" +
              "await redis.setex(key, 300, JSON.stringify(data));",
            output: "Data diambil dari cache dalam 0.5ms.",
            note: "Pola caching paling standar di backend API.",
          },
          instruction:
            "Buat fungsi async `getOrSetCache(redis, key)` yang mengambil nilai `redis.get(key)` lalu mengembalikan hasilnya.",
          starterCode: "// Tulis fungsi getOrSetCache di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+cached\\s*=\\s*await\\s+redis\\.get\\(\\s*key\\s*\\)",
              message: "Gunakan: const cached = await redis.get(key);",
            },
          ],
          solution:
            "async function getOrSetCache(redis, key) {\n  const cached = await redis.get(key);\n  return cached;\n}",
        },
        {
          kind: "step",
          id: "nosql-4-5",
          title: "Rate Limiter & Session Store dengan Redis",
          explanation:
            "Gunakan `INCR key` dan `EXPIRE` untuk menghitung jumlah hit API pengguna secara real-time demi mencegah DDoS.",
          example: {
            code: "const requests = await redis.incr(`rate:${ip}`);\nif (requests === 1) await redis.expire(`rate:${ip}`, 60);",
            output: "Counter bertambah 1 secara atomik.",
            note: "Operasi INCR di Redis bersifat atomik.",
          },
          instruction:
            "Buat fungsi async `incrementRateLimit(redis, key)` yang menaikkan counter Redis menggunakan `redis.incr(key)` dan mengembalikan hasilnya.",
          starterCode: "// Tulis fungsi incrementRateLimit di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "redis\\.incr\\(\\s*key\\s*\\)",
              message: "Panggil await redis.incr(key)",
            },
          ],
          solution:
            "async function incrementRateLimit(redis, key) {\n  return await redis.incr(key);\n}",
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
          title: "Kapan Redis BUKAN Jawabannya",
          explanation:
            "JANGAN gunakan Redis sebagai database penyimpanan utama yang permanen! Jika RAM server mati/kehabisan memori, data di Redis berisiko terhapus.",
          example: {
            code:
              "function checkPersistence(db) {\n" +
              "  return db !== 'redis';\n" +
              "}\n" +
              "console.log(checkPersistence('redis'));",
            output: "false",
            note: "Selalu back-up data berharga ke database persisten berbasis disk.",
          },
          instruction:
            "Buat fungsi `isPersistentStore(dbType)` yang mengembalikan `false` jika `dbType === 'redis'` dan `true` jika sebaliknya.",
          starterCode: "// Tulis fungsi isPersistentStore di sini\n",
          language: "js",
          tests: [
            {
              pattern: "return\\s+dbType\\s*!==\\s*['\"]redis['\"]",
              message: "Kembalikan dbType !== 'redis'",
            },
          ],
          solution:
            "function isPersistentStore(dbType) {\n  return dbType !== 'redis';\n}",
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
          ],
        },
      ],
    },
  ],
};
