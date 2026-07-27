import type { Track } from "@/lib/types";

export const sqlTrack: Track = {
  slug: "sql",
  title: "Database & SQL",
  description:
    "SQL murni dulu, ORM belakangan. PostgreSQL & MySQL sampai optimasi query.",
  hours: 90,
  recommendedPrereqs: [],
  color: "bg-indigo-600",
  icon: "🗄️",
  order: 10,
  modules: [
    {
      slug: "konsep-select",
      title: "Konsep Database & SELECT",
      description:
        "Berpikir dalam tabel: query pertamamu sampai filter yang presisi.",
      topics: [
        "Database relasional: tabel, baris, kolom, tipe data",
        "SELECT & FROM: mengambil kolom",
        "WHERE: =, <>, >, <, BETWEEN, IN, LIKE",
        "AND/OR/NOT & urutan evaluasi",
        "ORDER BY & LIMIT/OFFSET",
        "DISTINCT & alias (AS)",
        "NULL: kenapa = NULL tidak jalan (IS NULL)",
      ],
      items: [
        {
          kind: "step",
          id: "sql-1-1",
          title: "Konsep Database Relasional",
          explanation:
            "Bayangkan sebuah database relasional seperti aplikasi Microsoft Excel atau Google Sheets. Seluruh data disimpan dalam bentuk 'Tabel' yang strukturnya sangat rapi. Di dalam tabel, 'Kolom' (columns) berderet ke samping menentukan jenis informasi (misal: nama, umur, email). 'Baris' (rows) menyusun ke bawah menyimpan data nyata — setiap satu baris mewakili satu entitas (satu pengguna, satu produk). Struktur ketat inilah yang membuat database relasional sangat anadalan dalam mencari dan menghubungkan jutaan baris data secara kilat.",
          example: {
            code: "-- Tabel 'users' memuat kolom id, name, email, dan created_at\nSELECT * FROM users;",
            output: "Seluruh baris dan kolom dari tabel users ditampilkan.",
            note: "Setiap baris mewakili 1 entitas data tunggal.",
          },
          instruction:
            "Tulis query SQL sederhana untuk memilih semua data dari tabel `products`.",
          starterCode: "-- Tulis query SELECT di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+\\*\\s+FROM\\s+products\\s*;?",
              message: "Gunakan: SELECT * FROM products;",
            },
          ],
          solution: "SELECT * FROM products;",
        },
        {
          kind: "step",
          id: "sql-1-2",
          title: "SELECT Kolom Spesifik & Alias (AS)",
          explanation:
            "Hindari menggunakan `SELECT *` di aplikasi produksi! Ambil kolom spesifik dan berikan nama alias menggunakan kata kunci `AS`.",
          example: {
            code: "SELECT name AS nama_produk, price AS harga FROM products;",
            output: "Tabel hasil menampilkan nama header 'nama_produk' dan 'harga'.",
            note: "Alias memperjelas nama kolom pada laporan respon JSON.",
          },
          instruction:
            "Tulis query memilih kolom `name` dan `email` dari tabel `users`.",
          starterCode: "-- Tulis query SELECT kolom di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+name\\s*,\\s*email\\s+FROM\\s+users\\s*;?",
              message: "Gunakan: SELECT name, email FROM users;",
            },
          ],
          solution: "SELECT name, email FROM users;",
        },
        {
          kind: "step",
          id: "sql-1-3",
          title: "Filtering Baris dengan Klausul WHERE",
          explanation:
            "Klausul `WHERE` menyaring baris data berdasarkan kondisi tertentu menggunakan operator `=`, `>`, `<`, `BETWEEN`, `IN`, atau `LIKE`.",
          example: {
            code: "SELECT * FROM products WHERE price > 50000;",
            output: "Halaman hanya menampilkan produk yang harganya di atas 50.000.",
            note: "Operator LIKE 'B%' mencari string yang diawali huruf 'B'.",
          },
          instruction:
            "Tulis perintah untuk mencari produk yang nilai harganya persis sama dengan 10000.",
          starterCode: "-- Tulis query WHERE di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+\\*\\s+FROM\\s+products\\s+WHERE\\s+price\\s*=\\s*10000\\s*;?",
              message: "Gunakan: SELECT * FROM products WHERE price = 10000;",
            },
          ],
          solution: "SELECT * FROM products WHERE price = 10000;",
        },
        {
          kind: "step",
          id: "sql-1-4",
          title: "Kombinasi Kondisi AND, OR, dan NOT",
          explanation:
            "Gabungkan beberapa kriteria filter menggunakan operator logika `AND`, `OR`, dan `NOT`.",
          example: {
            code: "SELECT * FROM users WHERE status = 'active' AND age >= 18;",
            output: "Hanya mengembalikan user aktif yang berumur 18 tahun ke atas.",
            note: "Gunakan tanda kurung () untuk memperjelas prioritas evaluasi logika OR/AND.",
          },
          instruction:
            "Ketikkan query untuk memfilter pengguna yang berstatus 'active' sekaligus berperan sebagai 'admin'.",
          starterCode: "-- Tulis query AND di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+status\\s*=\\s*['\"]active['\"]\\s+AND\\s+role\\s*=\\s*['\"]admin['\"]\\s*;?",
              message: "Gunakan: SELECT * FROM users WHERE status = 'active' AND role = 'admin';",
            },
          ],
          solution: "SELECT * FROM users WHERE status = 'active' AND role = 'admin';",
        },
        {
          kind: "step",
          id: "sql-1-5",
          title: "Pengurutan ORDER BY & Pembatasan LIMIT/OFFSET",
          explanation:
            "`ORDER BY` mengurutkan hasil (ASC / DESC), dan `LIMIT` membatasi jumlah baris yang dikembalikan.",
          example: {
            code: "SELECT * FROM products ORDER BY price DESC LIMIT 5;",
            output: "Mengembalikan 5 produk termahal.",
            note: "Gunakan OFFSET 10 untuk melompati 10 baris pertama saat pagination.",
          },
          instruction:
            "Ambil 10 pengguna terbaru dengan mengurutkan kolom created_at secara menurun.",
          starterCode: "-- Tulis query ORDER BY & LIMIT di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+\\*\\s+FROM\\s+users\\s+ORDER\\s+BY\\s+created_at\\s+DESC\\s+LIMIT\\s+10\\s*;?",
              message: "Gunakan: SELECT * FROM users ORDER BY created_at DESC LIMIT 10;",
            },
          ],
          solution: "SELECT * FROM users ORDER BY created_at DESC LIMIT 10;",
        },
        {
          kind: "step",
          id: "sql-1-6",
          title: "Menghilangkan Duplikat dengan DISTINCT",
          explanation:
            "Klausul `DISTINCT` mengeliminasi baris nilai duplikat dari kolom hasil query.",
          example: {
            code: "SELECT DISTINCT category FROM products;",
            output: " kategori\n----------\n Minuman\n Makanan\n Elektronik\n(3 rows)",
            note: "Bisa digunakan pada satu atau beberapa kolom sekaligus.",
          },
          instruction:
            "Ketikkan query untuk menampilkan daftar peran yang unik dari tabel pengguna.",
          starterCode: "-- Tulis query DISTINCT di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+DISTINCT\\s+role\\s+FROM\\s+users\\s*;?",
              message: "Gunakan: SELECT DISTINCT role FROM users;",
            },
          ],
          solution: "SELECT DISTINCT role FROM users;",
        },
        {
          kind: "step",
          id: "sql-1-7",
          title: "Pengecekan Nilai Kosong (IS NULL / IS NOT NULL)",
          explanation:
            "Di SQL, nilai `NULL` tidaklah sama dengan angka nol (0) atau teks kosong (''). `NULL` secara harafiah bermakna 'tidak diketahui' (unknown). Karena wujudnya yang tidak diketahui, kamu tidak boleh membandingkannya menggunakan `= NULL` — sesuatu yang tidak diketahui tidak bisa disetarakan dengan apa pun! Sebagai solusinya, SQL merancang operator khusus: `IS NULL` untuk mencari data yang kosong, dan `IS NOT NULL` untuk memfilter yang sudah terisi. Ini jebakan klasik yang sering memusingkan pengembang pemula.",
          example: {
            code: "SELECT * FROM users WHERE deleted_at IS NULL;",
            output: "Mengembalikan user yang belum pernah dihapus.",
            note: "Ekspresi = NULL di SQL selalu mengembalikan FALSE/UNKNOWN.",
          },
          instruction:
            "Tampilkan seluruh pesanan yang nilai waktu pembayarannya tidak kosong (sudah dibayar).",
          starterCode: "-- Tulis query IS NOT NULL di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+\\*\\s+FROM\\s+orders\\s+WHERE\\s+paid_at\\s+IS\\s+NOT\\s+NULL\\s*;?",
              message: "Gunakan: SELECT * FROM orders WHERE paid_at IS NOT NULL;",
            },
          ],
          solution: "SELECT * FROM orders WHERE paid_at IS NOT NULL;",
        },
        {
          kind: "quiz",
          id: "sql-1-kuis",
          title: "Kuis: Konsep Database & SELECT",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa klausa `= NULL` tidak akan pernah menghasilkan data pada query SQL?",
              choices: [
                "Karena NULL di SQL berarti data tidak diketahui (Unknown), sehingga wajib diperiksa dengan `IS NULL`",
                "Karena NULL adalah kata terlarang",
                "Karena NULL hanya bisa dibaca oleh Python",
                "Karena NULL bernilai angka nol",
              ],
              answerIndex: 0,
              explanation: "NULL merepresentasikan nilai yang tidak ada / unknown. Perbandingan kesetaraan dengan NULL wajib menggunakan operator `IS NULL`.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Klausul mana yang digunakan untuk mengurutkan hasil query?",
              choices: ['ORDER BY', 'GROUP BY', 'SORT BY', 'LIMIT'],
              answerIndex: 0,
              explanation: "ORDER BY digunakan untuk mengurutkan."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Fungsi DISTINCT adalah untuk?",
              choices: ['Menghapus baris', 'Menghilangkan nilai duplikat', 'Menggabungkan tabel', 'Menambah kolom'],
              answerIndex: 1,
              explanation: "DISTINCT menghilangkan baris kembar."
            },
          ],
        },
      ],
    },
    {
      slug: "join",
      title: "Relasi & JOIN",
      description:
        "Materi interview SQL paling sering keluar — kuasai sampai bisa menggambar diagramnya.",
      topics: [
        "Primary key & foreign key",
        "INNER JOIN: irisan dua tabel",
        "LEFT/RIGHT JOIN & baris NULL",
        "Join lebih dari dua tabel",
        "Self join (karyawan → atasan)",
        "Many-to-many & junction table",
        "Latihan: menulis join dari pertanyaan bisnis nyata",
      ],
      items: [
        {
          kind: "step",
          id: "sql-2-1",
          title: "Primary Key vs Foreign Key",
          explanation:
            "Primary Key (PK) adalah identitas unik 1 baris di tabel asal, sedangkan Foreign Key (FK) adalah kolom di tabel lain yang menunjuk ke PK tersebut.",
          example: {
            code: "-- Tabel users memuat Primary Key (id)\n-- Tabel orders memuat Foreign Key (user_id) yang merujuk ke users(id)",
            output: "Relasi One-to-Many terwujud antar tabel.",
            note: "FK menjamin integritas referensial data.",
          },
          instruction:
            "Tulislah komentar berbahasa Inggris yang menyatakan bahwa Foreign Key menghubungkan sebuah kolom ke Primary Key di tabel lain.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "//\\s*Foreign\\s+Key\\s+links\\s+a\\s+column\\s+to\\s+a\\s+Primary\\s+Key\\s+in\\s+another\\s+table",
              message: "Tuliskan komentar yang diminta",
            },
          ],
          solution: "// Foreign Key links a column to a Primary Key in another table",
        },
        {
          kind: "step",
          id: "sql-2-2",
          title: "INNER JOIN: Irisan Dua Tabel",
          explanation:
            "`INNER JOIN` HANYA mengembalikan baris yang memiliki pasangan nilai cocok di kedua tabel.",
          example: {
            code:
              "SELECT orders.id, users.name\n" +
              "FROM orders\n" +
              "INNER JOIN users ON orders.user_id = users.id;",
            output: " id | user_nama | total\n----+-----------+--------\n  1 | Ana       |  50000\n  2 | Budi      |  75000\n(2 rows)",
            note: "Baris order yang tidak memiliki user_id tidak akan muncul di hasil query.",
          },
          instruction:
            "Gunakan INNER JOIN untuk mengambil ID pesanan dan nama pengguna yang sesuai.",
          starterCode: "-- Tulis query INNER JOIN di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+orders\\.id\\s*,\\s*users\\.name\\s+FROM\\s+orders\\s+INNER\\s+JOIN\\s+users\\s+ON\\s+orders\\.user_id\\s*=\\s*users\\.id\\s*;?",
              message: "Gunakan: SELECT orders.id, users.name FROM orders INNER JOIN users ON orders.user_id = users.id;",
            },
          ],
          solution: "SELECT orders.id, users.name FROM orders INNER JOIN users ON orders.user_id = users.id;",
        },
        {
          kind: "step",
          id: "sql-2-3",
          title: "LEFT JOIN & Baris NULL",
          explanation:
            "`LEFT JOIN` mengembalikan SELURUH baris dari tabel kiri, meskipun tidak ada pasangan yang cocok di tabel kanan (kolom kanan diisi NULL).",
          example: {
            code:
              "SELECT users.name, orders.id\n" +
              "FROM users\n" +
              "LEFT JOIN orders ON users.id = orders.user_id;",
            output: "Semua user muncul, termasuk user yang belum pernah membuat order (orders.id = NULL).",
            note: "Sangat berguna untuk mencari data yang belum memiliki relasi.",
          },
          instruction:
            "Gunakan LEFT JOIN untuk menampilkan nama pengguna dan ID pesanannya. Pastikan pengguna tanpa pesanan tetap muncul.",
          starterCode: "-- Tulis query LEFT JOIN di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+users\\.name\\s*,\\s*orders\\.id\\s+FROM\\s+users\\s+LEFT\\s+JOIN\\s+orders\\s+ON\\s+users\\.id\\s*=\\s*orders\\.user_id\\s*;?",
              message: "Gunakan query LEFT JOIN sesuai instruksi",
            },
          ],
          solution: "SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;",
        },
        {
          kind: "step",
          id: "sql-2-4",
          title: "JOIN Lebih dari 2 Tabel",
          explanation:
            "Kamu dapat menghubungkan 3 tabel atau lebih dengan menggabungkan beberapa klausa `JOIN` berturut-turut.",
          example: {
            code:
              "SELECT orders.id, users.name, products.title\n" +
              "FROM orders\n" +
              "JOIN users ON orders.user_id = users.id\n" +
              "JOIN products ON orders.product_id = products.id;",
            output: "Menggabungkan rincian order, nama pembeli, dan judul produk sekaligus.",
            note: "Perhatikan urutan join dan kesesuaian foreign key.",
          },
          instruction:
            "Lengkapi dengan klausa JOIN ke tabel produk berdasarkan product_id pada tabel pesanan.",
          starterCode: "-- Tulis klausa JOIN kedua di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "JOIN\\s+products\\s+ON\\s+orders\\.product_id\\s*=\\s*products\\.id",
              message: "Tuliskan: JOIN products ON orders.product_id = products.id",
            },
          ],
          solution: "JOIN products ON orders.product_id = products.id",
        },
        {
          kind: "step",
          id: "sql-2-5",
          title: "Self JOIN (Menggabungkan Tabel dengan Dirinya Sendiri)",
          explanation:
            "Self JOIN digunakan saat suatu tabel memiliki FK yang merujuk ke PK di tabel itu sendiri (seperti struktur Hirarki Pegawai ➔ Atasan).",
          example: {
            code:
              "SELECT e.name AS emp, m.name AS manager\n" +
              "FROM employees e\n" +
              "LEFT JOIN employees m ON e.manager_id = m.id;",
            output: "Menampilkan daftar pegawai beserta nama atasannya dari tabel yang sama.",
            note: "Berikan alias tabel berbeda (e dan m) untuk membedakan perannya.",
          },
          instruction:
            "Lakukan LEFT JOIN dari tabel employees dengan dirinya sendiri untuk menghubungkan manajer (m) dengan pegawai (e).",
          starterCode: "-- Tulis Self JOIN di sini\n",
          language: "text",
          tests: [
            {
              pattern: "LEFT\\s+JOIN\\s+employees\\s+m\\s+ON\\s+e\\.manager_id\\s*=\\s*m\\.id",
              message: "Gunakan: LEFT JOIN employees m ON e.manager_id = m.id",
            },
          ],
          solution: "LEFT JOIN employees m ON e.manager_id = m.id",
        },
        {
          kind: "step",
          id: "sql-2-6",
          title: "Many-to-Many & Junction Table",
          explanation:
            "Relasi Banyak-ke-Banyak (Many-to-Many) dihubungkan menggunakan Tabel Perantara (Junction / Pivot Table).",
          example: {
            code: "-- Tabel 'student_courses' menghubungkan tabel 'students' dan 'courses'",
            output: "Satu siswa bisa mengambil banyak kelas, dan satu kelas diambil banyak siswa.",
            note: "Junction table menyimpan pasangan student_id dan course_id.",
          },
          instruction:
            "Tulis komentar bahwa Junction table menghubungkan relasi Many-to-Many.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "//\\s*Junction\\s+table\\s+connects\\s+Many-to-Many\\s+relationships",
              message: "Tuliskan komentar yang diminta",
            },
          ],
          solution: "// Junction table connects Many-to-Many relationships",
        },
        {
          kind: "step",
          id: "sql-2-7",
          title: "Studi Kasus Pertanyaan Bisnis Nyata",
          explanation:
            "Menjawab kebutuhan bisnis: 'Tampilkan nama customer yang belum pernah membeli produk di bulan ini'.",
          example: {
            code:
              "SELECT c.name\n" +
              "FROM customers c\n" +
              "LEFT JOIN orders o ON c.id = o.customer_id\n" +
              "WHERE o.id IS NULL;",
            output: "Daftar pelanggan pasif berhasil diisolasi.",
            note: "Pola LEFT JOIN + WHERE IS NULL sangat ampuh untuk analisis data bisnis.",
          },
          instruction:
            "Saring hasil query tersebut untuk hanya menyisakan data di mana ID pesanan bernilai NULL.",
          starterCode: "-- Tulis WHERE IS NULL di sini\n",
          language: "text",
          tests: [
            {
              pattern: "WHERE\\s+orders\\.id\\s+IS\\s+NULL\\s*;?",
              message: "Tuliskan: WHERE orders.id IS NULL;",
            },
          ],
          solution: "WHERE orders.id IS NULL;",
        },
        {
          kind: "quiz",
          id: "sql-2-kuis",
          title: "Kuis: Relasi & JOIN",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Jenis JOIN apa yang mengembalikan SELURUH baris dari tabel sebelah kiri, meskipun tidak ada pasangan data yang cocok di tabel kanan?",
              choices: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
              answerIndex: 1,
              explanation: "LEFT JOIN mempertahankan seluruh data dari tabel kiri dan mengisi nilai NULL pada baris kanan yang tidak berpasangan.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa itu Primary Key?",
              choices: ['Kunci unik', 'Kunci tamu', 'Indeks', 'Tidak ada'],
              answerIndex: 0,
              explanation: "Primary key adalah unik."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Fungsi INNER JOIN?",
              choices: ['Ambil semua', 'Hanya irisan', 'Gabung kiri', 'Gabung kanan'],
              answerIndex: 1,
              explanation: "INNER JOIN mengambil irisan data."
            },
          ],
        },
      ],
    },
    {
      slug: "agregasi",
      title: "Agregasi & Subquery",
      description:
        "Dari data mentah ke jawaban bisnis: total, rata-rata, dan pengelompokan.",
      topics: [
        "COUNT, SUM, AVG, MIN, MAX",
        "GROUP BY: aturan emas kolom yang boleh di-SELECT",
        "HAVING vs WHERE",
        "Subquery di WHERE, FROM, SELECT",
        "CTE (WITH): query kompleks yang tetap terbaca",
        "CASE WHEN untuk kategorisasi",
        "Window function dasar: ROW_NUMBER, RANK, running total",
      ],
      items: [
        {
          kind: "step",
          id: "sql-3-1",
          title: "Fungsi Agregasi (COUNT, SUM, AVG, MIN, MAX)",
          explanation:
            "Fungsi agregasi menghitung sekumpulan nilai baris menjadi 1 nilai ringkasan.",
          example: {
            code: "SELECT COUNT(*) AS total_users, AVG(age) AS rerata_umur FROM users;",
            output: "Ringkasan total user dan rata-rata umur seluruh pengguna.",
            note: "COUNT(*) menghitung seluruh baris termasuk baris bermuatan NULL.",
          },
          instruction:
            "Tulis query untuk menjumlahkan seluruh amount pada tabel payments dan beri alias total.",
          starterCode: "-- Tulis query SUM di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+SUM\\(\\s*amount\\s*\\)\\s+AS\\s+total\\s+FROM\\s+payments\\s*;?",
              message: "Gunakan: SELECT SUM(amount) AS total FROM payments;",
            },
          ],
          solution: "SELECT SUM(amount) AS total FROM payments;",
        },
        {
          kind: "step",
          id: "sql-3-2",
          title: "Pengelompokan Data dengan GROUP BY",
          explanation:
            "`GROUP BY` mengelompokkan baris yang memiliki nilai sama ke dalam baris ringkasan.",
          example: {
            code: "SELECT category, COUNT(*) FROM products GROUP BY category;",
            output: "Jumlah produk per masing-masing kategori.",
            note: "Aturan Emas: Setiap kolom non-agregat di SELECT wajib masuk ke GROUP BY!",
          },
          instruction:
            "Kelompokkan pesanan berdasarkan statusnya dan hitung jumlah masing-masing grup.",
          starterCode: "-- Tulis query GROUP BY di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+status\\s*,\\s*COUNT\\(\\*\\)\\s+FROM\\s+orders\\s+GROUP\\s+BY\\s+status\\s*;?",
              message: "Gunakan: SELECT status, COUNT(*) FROM orders GROUP BY status;",
            },
          ],
          solution: "SELECT status, COUNT(*) FROM orders GROUP BY status;",
        },
        {
          kind: "step",
          id: "sql-3-3",
          title: "Menyaring Agregat: HAVING vs WHERE",
          explanation:
            "`WHERE` menyaring baris SEBELUM di-group. `HAVING` menyaring hasil agregat SETELAH di-group.",
          example: {
            code:
              "SELECT user_id, SUM(amount) AS total\n" +
              "FROM orders\n" +
              "GROUP BY user_id\n" +
              "HAVING SUM(amount) > 1000000;",
            output: "Mengisolasi pelanggan 'High Value' yang total belanjanya di atas 1 juta.",
            note: "Jangan gunakan fungsi agregat (seperti HAVING SUM > ...) di dalam klausa WHERE!",
          },
          instruction:
            "Gunakan klausa HAVING untuk memfilter hasil grup yang jumlah barisnya lebih dari 5.",
          starterCode: "-- Tulis klausa HAVING di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "HAVING\\s+COUNT\\(\\*\\)\\s*>\\s*5\\s*;?",
              message: "Tuliskan: HAVING COUNT(*) > 5;",
            },
          ],
          solution: "HAVING COUNT(*) > 5;",
        },
        {
          kind: "step",
          id: "sql-3-4",
          title: "Subquery di dalam WHERE",
          explanation:
            "Subquery adalah query SQL bersarang di dalam query lain.",
          example: {
            code: "SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);",
            output: "Mengambil produk yang harganya di atas rata-rata seluruh produk.",
            note: "Subquery di dalam WHERE diapit tanda kurung ().",
          },
          instruction:
            "Gunakan subquery untuk memfilter produk yang harganya melebihi rata-rata harga seluruh produk.",
          starterCode: "-- Tulis subquery WHERE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "WHERE\\s+price\\s*>\\s*\\(\\s*SELECT\\s+AVG\\(\\s*price\\s*\\)\\s+FROM\\s+products\\s*\\)",
              message: "Tuliskan subquery rata-rata harga produk",
            },
          ],
          solution: "WHERE price > (SELECT AVG(price) FROM products)",
        },
        {
          kind: "step",
          id: "sql-3-5",
          title: "CTE (Common Table Expressions) dengan WITH",
          explanation:
            "CTE (`WITH nama_cte AS (...)`) membuat tabel sementara yang terbaca rapi untuk menyederhanakan query subquery yang rumit.",
          example: {
            code:
              "WITH TopUsers AS (\n" +
              "  SELECT user_id FROM orders GROUP BY user_id HAVING COUNT(*) > 10\n" +
              ")\n" +
              "SELECT * FROM users WHERE id IN (SELECT user_id FROM TopUsers);",
            output: "Tabel CTE dibentuk dengan benar dan memunculkan data user top spender.",
            note: "CTE sangat direkomendasikan dibanding subquery bertingkat-tingkat.",
          },
          instruction:
            "Deklarasikan CTE bernama HighSpenders yang isinya memilih user_id dari tabel orders.",
          starterCode: "-- Tulis deklarasi WITH CTE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "WITH\\s+HighSpenders\\s+AS\\s*\\(\\s*SELECT\\s+user_id\\s+FROM\\s+orders\\s*\\)",
              message: "Gunakan sintaks WITH CTE",
            },
          ],
          solution: "WITH HighSpenders AS (SELECT user_id FROM orders)",
        },
        {
          kind: "step",
          id: "sql-3-6",
          title: "Kategorisasi Data dengan CASE WHEN",
          explanation:
            "Ekspresi `CASE WHEN` adalah logika `if-else` di SQL untuk mengkategorikan baris data.",
          example: {
            code:
              "SELECT name, price,\n" +
              "  CASE\n" +
              "    WHEN price > 100000 THEN 'Mahal'\n" +
              "    ELSE 'Terjangkau'\n" +
              "  END AS kategori_harga\n" +
              "FROM products;",
            output: "Kolom baru 'kategori_harga' diisi string 'Mahal' atau 'Terjangkau'.",
            note: "Selalu diakhiri dengan kata kunci END.",
          },
          instruction:
            "Gunakan kondisi CASE untuk menghasilkan 'Lulus' jika score >= 75, dan 'Gagal' jika sebaliknya.",
          starterCode: "-- Tulis ekspresi CASE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "CASE\\s+WHEN\\s+score\\s*>=\\s*75\\s+THEN\\s+['\"]Lulus['\"]\\s+ELSE\\s+['\"]Gagal['\"]\\s+END",
              message: "Gunakan ekspresi CASE WHEN sesuai instruksi",
            },
          ],
          solution: "CASE WHEN score >= 75 THEN 'Lulus' ELSE 'Gagal' END",
        },
        {
          kind: "step",
          id: "sql-3-7",
          title: "Window Function Dasar (ROW_NUMBER)",
          explanation:
            "Window function (`ROW_NUMBER() OVER (...)`) melakukan perhitungan analitis tanpa menggabungkan baris data seperti GROUP BY.",
          example: {
            code:
              "SELECT name, category, price,\n" +
              "  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rank\n" +
              "FROM products;",
            output: "Memberi nomor urut peringkat 1, 2, 3 untuk produk di tiap kategori.",
            note: "PARTITION BY membagi kelompok baris analisis.",
          },
          instruction:
            "Buat penomoran baris dengan urutan id menaik (ASC).",
          starterCode: "-- Tulis ROW_NUMBER di sini\n",
          language: "text",
          tests: [
            {
              pattern: "ROW_NUMBER\\(\\)\\s+OVER\\s*\\(\\s*ORDER\\s+BY\\s+id\\s+ASC\\s*\\)",
              message: "Gunakan: ROW_NUMBER() OVER (ORDER BY id ASC)",
            },
          ],
          solution: "ROW_NUMBER() OVER (ORDER BY id ASC)",
        },
        {
          kind: "quiz",
          id: "sql-3-kuis",
          title: "Kuis: Agregasi & Subquery",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa perbedaan utama klausa `HAVING` dibanding `WHERE` di SQL?",
              choices: [
                "WHERE menyaring data sebelum agregasi, sedangkan HAVING menyaring data hasil agregasi (GROUP BY)",
                "HAVING hanya bisa dipakai di MySQL",
                "WHERE tidak bisa memfilter string",
                "Tidak ada perbedaan",
              ],
              answerIndex: 0,
              explanation: "WHERE memfilter baris mentah sebelum dikelompokkan, sedangkan HAVING memfilter grup hasil agregasi.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Fungsi yang menjumlahkan baris?",
              choices: ['SUM', 'COUNT', 'MAX', 'MIN'],
              answerIndex: 1,
              explanation: "COUNT menghitung baris."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Posisi GROUP BY?",
              choices: ['Sebelum WHERE', 'Setelah WHERE sebelum ORDER BY', 'Setelah LIMIT', 'Paling akhir'],
              answerIndex: 1,
              explanation: "Tepat setelah WHERE."
            },
          ],
        },
      ],
    },
    {
      slug: "dml",
      title: "Manipulasi Data & Transaksi",
      description:
        "INSERT, UPDATE, DELETE — dan jaring pengaman sebelum kamu menghapus data produksi.",
      topics: [
        "INSERT: satu baris, banyak baris, dari SELECT",
        "UPDATE dengan WHERE (dan horor UPDATE tanpa WHERE)",
        "DELETE vs TRUNCATE",
        "Transaksi: BEGIN, COMMIT, ROLLBACK",
        "ACID dijelaskan dengan kasus transfer uang",
        "UPSERT (ON CONFLICT / ON DUPLICATE KEY)",
        "RETURNING untuk mendapat data yang berubah",
      ],
      items: [
        {
          kind: "step",
          id: "sql-4-1",
          title: "INSERT INTO Menyimpan Data Baru",
          explanation:
            "`INSERT INTO nama_tabel (kolom1, kolom2) VALUES (val1, val2)` menambahkan baris data baru ke tabel.",
          example: {
            code: "INSERT INTO users (name, email) VALUES ('Budi', 'budi@test.com');",
            output: "1 baris user baru ditambahkan ke tabel users.",
            note: "Kamu dapat memasukkan banyak baris sekaligus dengan memisahkan koma pada VALUES.",
          },
          instruction:
            "Tambahkan data ke tabel categories dengan nama Elektronik.",
          starterCode: "-- Tulis perintah INSERT di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "INSERT\\s+INTO\\s+categories\\s*\\(\\s*name\\s*\\)\\s+VALUES\\s*\\(\\s*['\"]Elektronik['\"]\\s*\\)\\s*;?",
              message: "Gunakan: INSERT INTO categories (name) VALUES ('Elektronik');",
            },
          ],
          solution: "INSERT INTO categories (name) VALUES ('Elektronik');",
        },
        {
          kind: "step",
          id: "sql-4-2",
          title: "UPDATE Data dengan WHERE",
          explanation:
            "JANGAN PERNAH menjalankan `UPDATE` tanpa klausa `WHERE`! Tanpa WHERE, SELURUH baris di tabel akan terupdate secara tidak sengaja.",
          example: {
            code: "UPDATE users SET status = 'active' WHERE id = 5;",
            output: "Hanya user dengan ID 5 yang diperbarui statusnya.",
            note: "Selalu jalankan SELECT dengan klausa WHERE yang sama dulu untuk memastikan baris mana yang akan terpengaruh.",
          },
          instruction:
            "Perbarui price menjadi 20000 untuk tabel products di mana id sama dengan 1.",
          starterCode: "-- Tulis query UPDATE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "UPDATE\\s+products\\s+SET\\s+price\\s*=\\s*20000\\s+WHERE\\s+id\\s*=\\s*1\\s*;?",
              message: "Gunakan: UPDATE products SET price = 20000 WHERE id = 1;",
            },
          ],
          solution: "UPDATE products SET price = 20000 WHERE id = 1;",
        },
        {
          kind: "step",
          id: "sql-4-3",
          title: "Menghapus Data: DELETE vs TRUNCATE",
          explanation:
            "`DELETE FROM tabel WHERE ...` menghapus baris spesifik (bisa di-rollback). `TRUNCATE TABLE tabel` mengosongkan seluruh tabel secara instan dan mengereset auto-increment ID.",
          example: {
            code: "DELETE FROM users WHERE status = 'inactive';",
            output: "Baris user inaktif terhapus.",
            note: "TRUNCATE jauh lebih cepat daripada DELETE tanpa WHERE untuk mengosongkan tabel.",
          },
          instruction:
            "Hapus data dari tabel logs di mana created_at lebih kecil dari tanggal 2024-01-01.",
          starterCode: "-- Tulis query DELETE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "DELETE\\s+FROM\\s+logs\\s+WHERE\\s+created_at\\s*<\\s*['\"]2024-01-01['\"]\\s*;?",
              message: "Gunakan perintah DELETE berfilter WHERE",
            },
          ],
          solution: "DELETE FROM logs WHERE created_at < '2024-01-01';",
        },
        {
          kind: "step",
          id: "sql-4-4",
          title: "Transaksi SQL: BEGIN, COMMIT, ROLLBACK",
          explanation:
            "Jalankan `BEGIN` untuk memulai transaksi. Jika semua sukses jalankan `COMMIT`. Jika ada error, jalankan `ROLLBACK` untuk membatalkan seluruh perubahan.",
          example: {
            code:
              "BEGIN;\n" +
              "UPDATE accounts SET balance = balance - 100 WHERE id = 1;\n" +
              "UPDATE accounts SET balance = balance + 100 WHERE id = 2;\n" +
              "COMMIT;",
            output: "Transaksi transfer uang aman dan atomik.",
            note: "ROLLBACK mengembalikan data ke kondisi persis sebelum BEGIN.",
          },
          instruction:
            "Ketikkan perintah untuk membatalkan (rollback) transaksi saat ini.",
          starterCode: "-- Tulis perintah pembatalan transaksi di sini\n",
          language: "text",
          tests: [
            {
              pattern: "ROLLBACK\\s*;?",
              message: "Tuliskan: ROLLBACK;",
            },
          ],
          solution: "ROLLBACK;",
        },
        {
          kind: "step",
          id: "sql-4-5",
          title: "Prinsip Keandalan Transaksi ACID",
          explanation:
            "ACID: **Atomicity** (semua atau tidak sama sekali), **Consistency** (data selalu sah), **Isolation** (transaksi independen), **Durability** (permanen tersimpan).",
          example: {
            code: "// Atomicity menjamin transfer bank tidak akan memotong uang pengirim jika penerima gagal menerima data",
            output: "Integritas data transaksi keuangan terjamin.",
            note: "Prinsip utama mengapa RDBMS dipilih untuk aplikasi finansial.",
          },
          instruction:
            "Tulis komentar yang menyatakan prinsip ACID menjamin transaksi database yang reliabel.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "//\\s*ACID\\s+principles\\s+guarantee\\s+reliable\\s+database\\s+transactions",
              message: "Tuliskan komentar yang diminta",
            },
          ],
          solution: "// ACID principles guarantee reliable database transactions",
        },
        {
          kind: "step",
          id: "sql-4-6",
          title: "UPSERT (Insert or Update on Conflict)",
          explanation:
            "UPSERT menyisipkan data baru jika belum ada, atau memperbarui data lama jika terjadi bentrokan kunci unik (ON CONFLICT / ON DUPLICATE KEY).",
          example: {
            code:
              "INSERT INTO settings (key, value) VALUES ('theme', 'dark')\n" +
              "ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;",
            output: "Nilai theme di-insert jika belum ada, atau di-update jika sudah ada.",
            note: "Sangat berguna untuk fitur sync data dan pengaturan.",
          },
          instruction:
            "Tambahkan klausa PostgreSQL agar mengabaikan (DO NOTHING) jika terjadi konflik pada email.",
          starterCode: "-- Tulis ON CONFLICT di sini\n",
          language: "text",
          tests: [
            {
              pattern: "ON\\s+CONFLICT\\s*\\(\\s*email\\s*\\)\\s+DO\\s+NOTHING\\s*;?",
              message: "Gunakan: ON CONFLICT (email) DO NOTHING;",
            },
          ],
          solution: "ON CONFLICT (email) DO NOTHING;",
        },
        {
          kind: "step",
          id: "sql-4-7",
          title: "Klausul RETURNING di PostgreSQL",
          explanation:
            "Gunakan `RETURNING *` pada perintah INSERT/UPDATE/DELETE di PostgreSQL untuk mendapatkan data yang baru saja terproses tanpa query SELECT tambahan.",
          example: {
            code: "INSERT INTO users (name) VALUES ('Budi') RETURNING id, created_at;",
            output: "Mengembalikan ID otomatis dan created_at yang baru saja di-generate.",
            note: "Fitur khusus PostgreSQL yang sangat efisien di backend.",
          },
          instruction:
            "Sisipkan tags bernama Tech dan gunakan perintah RETURNING untuk mendapatkan seluruh datanya.",
          starterCode: "-- Tulis RETURNING * di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "INSERT\\s+INTO\\s+tags\\s*\\(\\s*name\\s*\\)\\s+VALUES\\s*\\(\\s*['\"]Tech['\"]\\s*\\)\\s+RETURNING\\s+\\*\\s*;?",
              message: "Gunakan perintah INSERT dengan RETURNING *",
            },
          ],
          solution: "INSERT INTO tags (name) VALUES ('Tech') RETURNING *;",
        },
        {
          kind: "quiz",
          id: "sql-4-kuis",
          title: "Kuis: Manipulasi Data & Transaksi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Perintah SQL mana yang digunakan untuk membatalkan seluruh perubahan data dan mengembalikan kondisi ke sebelum transaksi (BEGIN) dimulai?",
              choices: ["COMMIT", "ROLLBACK", "RESET", "UNDO"],
              answerIndex: 1,
              explanation: "ROLLBACK membatalkan seluruh pernyataan SQL di dalam transaksi aktif dan mengembalikan kondisi database seperti semula.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Perintah mengosongkan tabel cepat?",
              choices: ['DELETE', 'TRUNCATE', 'DROP', 'REMOVE'],
              answerIndex: 1,
              explanation: "TRUNCATE sangat cepat mengosongkan tabel."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bahaya UPDATE tanpa WHERE?",
              choices: ['Error', 'Semua baris terupdate', 'Data terhapus', 'Aman'],
              answerIndex: 1,
              explanation: "Update akan berdampak pada seluruh baris."
            },
          ],
        },
      ],
    },
    {
      slug: "desain-skema",
      title: "Desain Skema & Index",
      description:
        "Merancang database yang tidak menyesal 6 bulan kemudian.",
      topics: [
        "Normalisasi 1NF–3NF dengan contoh nyata (bukan definisi hafalan)",
        "Kapan denormalisasi masuk akal",
        "ERD: membaca & menggambar",
        "Memilih tipe data & constraint (NOT NULL, UNIQUE, CHECK)",
        "Index: cara kerja B-tree secara intuitif",
        "Kapan index membantu & kapan memperlambat",
        "EXPLAIN: membaca rencana eksekusi query",
      ],
      items: [
        {
          kind: "step",
          id: "sql-5-1",
          title: "Normalisasi Database (1NF, 2NF, 3NF)",
          explanation:
            "Normalisasi adalah proses menstrukturkan tabel untuk mengeliminasi duplikasi data: 1NF (nilai atomik), 2NF (tanpa ketergantungan parsial), 3NF (tanpa ketergantungan transitif).",
          example: {
            code: "// Pecah alamat rumah dari tabel User menjadi tabel tersendiri jika 1 user bisa punya banyak alamat",
            output: "Mencegah anomali update, insert, dan delete data.",
            note: "Struktur 3NF adalah standar ideal untuk aplikasi OLTP.",
          },
          instruction:
            "Tulis komentar bahwa 3NF mencegah duplikasi data yang redundan.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "//\\s*3NF\\s+prevents\\s+redundant\\s+data\\s+duplication",
              message: "Tuliskan komentar yang diminta",
            },
          ],
          solution: "// 3NF prevents redundant data duplication",
        },
        {
          kind: "step",
          id: "sql-5-2",
          title: "Kapan Denormalisasi Masuk Akal?",
          explanation:
            "Denormalisasi (seperti menyimpan `total_orders` di tabel `users`) sengaja mengorbankan duplikasi demi kecepatan membaca query analitis (OLAP/Read-Heavy).",
          example: {
            code: "ALTER TABLE users ADD COLUMN total_orders INT DEFAULT 0;",
            output: "Menghindari query COUNT(orders) yang lambat saat membaca daftar ribuan user.",
            note: "Gunakan denormalisasi hanya jika ada masalah performa membaca nyata.",
          },
          instruction:
            "Tulis komentar bahwa denormalisasi mengorbankan storage demi performa baca.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "//\\s*Denormalization\\s+trade-offs\\s+storage\\s+for\\s+read\\s+performance",
              message: "Tuliskan komentar yang diminta",
            },
          ],
          solution: "// Denormalization trade-offs storage for read performance",
        },
        {
          kind: "step",
          id: "sql-5-3",
          title: "Entity Relationship Diagram (ERD)",
          explanation:
            "ERD memvisualisasikan entitas tabel dan relasinya (1:1, 1:N, N:M) menggunakan simbol cardinality.",
          example: {
            code: "// Customer (1) -------- (N) Order",
            output: "Peta visual arsitektur database.",
            note: "Rancang ERD sebelum mulai mengetik baris kode aplikasi.",
          },
          instruction:
            "Tulis komentar bahwa ERD memodelkan entitas dan relasi secara visual.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "//\\s*ERD\\s+models\\s+entities\\s+and\\s+relationships\\s+visually",
              message: "Tuliskan komentar yang diminta",
            },
          ],
          solution: "// ERD models entities and relationships visually",
        },
        {
          kind: "step",
          id: "sql-5-4",
          title: "Constraint: NOT NULL, UNIQUE, CHECK",
          explanation:
            "Constraint menjaga validitas data langsung di tingkatan engine database.",
          example: {
            code:
              "CREATE TABLE products (\n" +
              "  id SERIAL PRIMARY KEY,\n" +
              "  sku VARCHAR(50) UNIQUE NOT NULL,\n" +
              "  price INT CHECK (price >= 0)\n" +
              ");",
            output: "Database menolak harga bernilai negatif atau SKU duplikat.",
            note: "CHECK constraint menjamin konsistensi data bisnis di layer terbawah.",
          },
          instruction:
            "Buat tabel accounts dengan kolom balance yang tidak boleh kurang dari 0 menggunakan CHECK constraint.",
          starterCode: "-- Tulis CREATE TABLE CHECK di sini\n",
          language: "text",
          tests: [
            {
              pattern: "CREATE\\s+TABLE\\s+accounts\\s*\\(\\s*balance\\s+INT\\s+CHECK\\s*\\(\\s*balance\\s*>=\\s*0\\s*\\)\\s*\\)\\s*;?",
              message: "Definisikan constraint CHECK pada pembuatan tabel",
            },
          ],
          solution: "CREATE TABLE accounts (balance INT CHECK (balance >= 0));",
        },
        {
          kind: "step",
          id: "sql-5-5",
          title: "Indexing dengan B-Tree",
          explanation:
            "Index B-Tree mempercepat pencarian data dari $O(N)$ (Full Table Scan) menjadi $O(\\log N)$. Buat index pada kolom yang sering dicari di WHERE.",
          example: {
            code: "CREATE INDEX idx_users_email ON users(email);",
            output: "CREATE INDEX\nTime: 42.118 ms",
            note: "Primary Key dan kolom UNIQUE otomatis diberi index oleh database.",
          },
          instruction:
            "Buat index bernama idx_orders_user_id pada kolom user_id di tabel orders.",
          starterCode: "-- Tulis CREATE INDEX di sini\n",
          language: "text",
          tests: [
            {
              pattern: "CREATE\\s+INDEX\\s+idx_orders_user_id\\s+ON\\s+orders\\(\\s*user_id\\s*\\)\\s*;?",
              message: "Gunakan: CREATE INDEX idx_orders_user_id ON orders(user_id);",
            },
          ],
          solution: "CREATE INDEX idx_orders_user_id ON orders(user_id);",
        },
        {
          kind: "step",
          id: "sql-5-6",
          title: "Kapan Index Membantu & Memperlambat",
          explanation:
            "Index mempercepat operasi `SELECT`, namun MEMPERLAMBAT operasi `INSERT`, `UPDATE`, dan `DELETE` karena engine harus memperbarui pohon B-Tree index.",
          example: {
            code: "// Pasang Index HANYA pada kolom yang sering difilter di WHERE / JOIN\n// Hindari memasang index di seluruh kolom!",
            output: "Keseimbangan performa antara read dan write.",
            note: "Terlalu banyak index juga memboroskan ruang penyimpanan disk.",
          },
          instruction:
            "Tulis komentar bahwa Index mempercepat baca tapi memperlambat operasi tulis.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "//\\s*Indexes\\s+speed\\s+up\\s+reads\\s+but\\s+slow\\s+down\\s+write\\s+operations",
              message: "Tuliskan komentar yang diminta",
            },
          ],
          solution: "// Indexes speed up reads but slow down write operations",
        },
        {
          kind: "step",
          id: "sql-5-7",
          title: "Membaca Execution Plan dengan EXPLAIN ANALYZE",
          explanation:
            "Tambahkan `EXPLAIN ANALYZE` di depan query SELECT untuk melihat bagaimana engine mengesekusi query dan apakah index terpakai.",
          example: {
            code: "EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'budi@test.com';",
            output: "Tampilan rincian Execution Time dan Scan Method (Index Scan / Seq Scan).",
            note: "Jika terlihat 'Seq Scan' pada tabel besar, tandanya kamu butuh memasang Index.",
          },
          instruction:
            "Ketikkan EXPLAIN ANALYZE sebelum query SELECT seluruh data dari products.",
          starterCode: "-- Tulis EXPLAIN ANALYZE di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "EXPLAIN\\s+ANALYZE\\s+SELECT\\s+\\*\\s+FROM\\s+products\\s*;?",
              message: "Gunakan: EXPLAIN ANALYZE SELECT * FROM products;",
            },
          ],
          solution: "EXPLAIN ANALYZE SELECT * FROM products;",
        },
        {
          kind: "quiz",
          id: "sql-5-kuis",
          title: "Kuis: Desain Skema & Index",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa efek samping dari memasang terlalu banyak Index pada sebuah tabel di database?",
              choices: [
                "Ukuran database menjadi 0 byte",
                "Mempercepat perintah INSERT dan DELETE",
                "Memperlambat operasi penulisan data (INSERT/UPDATE/DELETE) karena index B-Tree harus ikut diperbarui",
                "MenghapusPrimary Key",
              ],
              answerIndex: 2,
              explanation: "Setiap penulisan data baru mewajibkan database memperbarui indeks B-Tree terkait sehingga memperlambat operasi write.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Normalisasi 3NF?",
              choices: ['1NF', '2NF', 'Ideal untuk OLTP', 'Buruk'],
              answerIndex: 2,
              explanation: "Ideal."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Fungsi UNIQUE?",
              choices: ['Tidak berguna', 'Mencegah duplikat', 'Enkripsi', 'Tidak ada'],
              answerIndex: 1,
              explanation: "Mencegah duplikasi."
            },
          ],
        },
      ],
    },
    {
      slug: "postgresql",
      title: "PostgreSQL: Fundamental",
      description:
        "Database #1 pilihan developer dunia (58% pemakaian) — fitur yang membuatnya dipilih untuk stack modern.",
      topics: [
        "Instalasi & psql: \\l, \\dt, \\d, \\?",
        "Tipe data kaya: array, JSONB, UUID, enum, range",
        "SERIAL vs GENERATED ALWAYS AS IDENTITY (mana yang benar sekarang)",
        "Query JSONB: operator ->, ->>, @>, dan jsonb_path_query",
        "Membuat index pada kolom JSONB (GIN)",
        "Full-text search: tsvector, tsquery, ts_rank",
        "Sequence: currval, nextval, dan jebakan setelah restore",
        "Role, GRANT, dan Row Level Security dasar",
        "Skema (schema) untuk memisahkan domain data",
      ],
      items: [
        {
          kind: "step",
          id: "sql-6-1",
          title: "PostgreSQL CLI (psql) Connection",
          explanation:
            "Perintah `psql` digunakan untuk terhubung ke instance database PostgreSQL melalui baris perintah CLI. Parameter `-U` menentukan nama user dan `-d` menentukan nama database target.",
          example: {
            code: "psql -U postgres -d toko_online",
            output: "psql (16.1)\nType \"help\" for help.\n\ntoko_online=#",
            note: "Gunakan \\q di dalam prompt psql untuk keluar dari sesi CLI.",
          },
          instruction:
            "Tuliskan perintah CLI psql untuk terhubung ke database bernama 'aplikasi_db' sebagai user 'admin_user'.",
          starterCode: "# Tulis perintah psql di sini\n",
          language: "text",
          tests: [
            {
              pattern: "psql\\s+-U\\s+admin_user\\s+-d\\s+aplikasi_db",
              message: "Gunakan: psql -U admin_user -d aplikasi_db",
            },
          ],
          solution: "psql -U admin_user -d aplikasi_db",
        },
        {
          kind: "step",
          id: "sql-6-2",
          title: "Tipe Data Kaya: JSONB & UUID",
          explanation:
            "PostgreSQL mendukung tipe data modern seperti `UUID` untuk penomoran unik terdistribusi dan `JSONB` untuk dokumen JSON terstruktur yang terindeks secara biner.",
          example: {
            code:
              "CREATE TABLE events (\n" +
              "  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n" +
              "  payload JSONB\n" +
              ");",
            output: "CREATE TABLE",
            note: "gen_random_uuid() menghasilkan nilai UUID v4 otomatis tanpa membutuhkan ekstensi luar.",
          },
          instruction:
            "Definisikan kolom id bertipe UUID yang menjadi PRIMARY KEY dan otomatis mendapatkan nilai awal dari gen_random_uuid().",
          starterCode: "-- Tulis definisi kolom id di sini\n",
          language: "text",
          tests: [
            {
              pattern: "id\\s+UUID\\s+PRIMARY\\s+KEY\\s+DEFAULT\\s+gen_random_uuid\\(\\)",
              message: "Gunakan sintaks UUID gen_random_uuid()",
            },
          ],
          solution: "id UUID PRIMARY KEY DEFAULT gen_random_uuid()",
        },
        {
          kind: "step",
          id: "sql-6-3",
          title: "Query Data JSONB (Operator -> dan ->>)",
          explanation:
            "Operator `->` mengambil bidang JSONB sebagai objek JSON, sedangkan `->>` mengembalikan bidang tersebut sebagai string teks biasa yang bisa difilter.",
          example: {
            code: "SELECT payload->>'city' AS kota FROM events WHERE payload->>'status' = 'active';",
            output: "   kota\n----------\n Jakarta\n Surabaya",
            note: "Gunakan ->> saat ingin melakukan perbandingan string atau penyaringan WHERE.",
          },
          instruction:
            "Tulis query SELECT untuk mengambil kolom 'payload->>'name'' dari tabel 'logs' di mana bidang 'payload->>'role'' bernilai 'admin'.",
          starterCode: "-- Tulis query JSONB di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+payload->>'name'\\s+FROM\\s+logs\\s+WHERE\\s+payload->>'role'\\s*=\\s*['\"]admin['\"]\\s*;?",
              message: "Gunakan: SELECT payload->>'name' FROM logs WHERE payload->>'role' = 'admin';",
            },
          ],
          solution: "SELECT payload->>'name' FROM logs WHERE payload->>'role' = 'admin';",
        },
        {
          kind: "step",
          id: "sql-6-4",
          title: "Full-Text Search PostgreSQL (to_tsvector & to_tsquery)",
          explanation:
            "PostgreSQL memiliki mesin pencari teks internal berbasis `to_tsvector()` dan `to_tsquery()` yang menggunakan operator `@@` untuk pencarian bahasa alami.",
          example: {
            code: "SELECT * FROM articles WHERE to_tsvector('indonesian', title) @@ to_tsquery('kopi');",
            output: "Daftar artikel yang memuat kata 'kopi' pada kolom title.",
            note: "Fungsi ini melakukan pencarian kata dasar (stemming) tanpa butuh Elasticsearch.",
          },
          instruction:
            "Tulis klausul WHERE yang memeriksa apakah penjelmaan tsvector dari kolom 'body' cocok (menggunakan operator @@) dengan tsquery untuk kata 'database'.",
          starterCode: "-- Tulis kondisi WHERE tsvector di sini\n",
          language: "text",
          tests: [
            {
              pattern: "WHERE\\s+to_tsvector\\(\\s*body\\s*\\)\\s*@@\\s*to_tsquery\\(\\s*['\"]database['\"]\\s*\\)",
              message: "Gunakan operator @@ to_tsquery('database')",
            },
          ],
          solution: "WHERE to_tsvector(body) @@ to_tsquery('database');",
        },
        {
          kind: "step",
          id: "sql-6-5",
          title: "Identity Column (GENERATED ALWAYS AS IDENTITY)",
          explanation:
            "Standar SQL modern ANSI untuk auto-increment di PostgreSQL adalah `GENERATED ALWAYS AS IDENTITY`, menggantikan tipe `SERIAL` konvensional.",
          example: {
            code: "CREATE TABLE tags (\n  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  name TEXT\n);",
            output: "CREATE TABLE",
            note: "Identity column mencegah penyisipan nilai ID manual yang tidak disengaja.",
          },
          instruction:
            "Definisikan kolom 'id' bertipe INT yang menggunakan GENERATED ALWAYS AS IDENTITY dan berfungsi sebagai PRIMARY KEY.",
          starterCode: "-- Tulis kolom IDENTITY di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "id\\s+INT\\s+GENERATED\\s+ALWAYS\\s+AS\\s+IDENTITY\\s+PRIMARY\\s+KEY",
              message: "Gunakan sintaks GENERATED ALWAYS AS IDENTITY",
            },
          ],
          solution: "id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY",
        },
        {
          kind: "step",
          id: "sql-6-6",
          title: "Role & Permission Manajemen (GRANT / REVOKE)",
          explanation:
            "Manajemen keamanan database PostgreSQL menggunakan perintah `GRANT` untuk memberikan hak akses spesifik (SELECT, INSERT, UPDATE) kepada pengguna atau peran tertentu.",
          example: {
            code: "GRANT SELECT, INSERT ON ALL TABLES IN SCHEMA public TO app_user;",
            output: "GRANT",
            note: "Prinsip Least Privilege: berikan izin minimal yang dibutuhkan oleh aplikasi.",
          },
          instruction:
            "Berikan hak akses SELECT dan INSERT pada tabel 'orders' kepada user 'app_reporter'.",
          starterCode: "-- Tulis perintah GRANT di sini\n",
          language: "text",
          tests: [
            {
              pattern: "GRANT\\s+SELECT\\s*,\\s*INSERT\\s+ON\\s+orders\\s+TO\\s+app_reporter\\s*;?",
              message: "Gunakan: GRANT SELECT, INSERT ON orders TO app_reporter;",
            },
          ],
          solution: "GRANT SELECT, INSERT ON orders TO app_reporter;",
        },
        {
          kind: "quiz",
          id: "sql-6-kuis",
          title: "Kuis: PostgreSQL Spesifik",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Operator PostgreSQL mana yang digunakan untuk mengekstrak bidang JSONB langsung sebagai string teks murni?",
              choices: ["->>", "->", "#>", "=>"],
              answerIndex: 0,
              explanation: "Operator `->>` mengembalikan bidang JSON sebagai string teks biasa, sedangkan `->` mengembalikan objek JSON.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa tipe data JSONB di PostgreSQL lebih direkomendasikan dibanding tipe JSON biasa untuk penyimpanan dokumen fleksibel?",
              choices: [
                "Karena JSONB disimpan dalam bentuk biner terurai yang jauh lebih cepat di-index dan di-query",
                "Karena JSONB mengompres teks menjadi file zip otomatis",
                "Karena JSON biasa tidak mengizinkan penulisan angka desimal",
                "Karena JSONB hanya bisa dibaca oleh bahasa Python"
              ],
              answerIndex: 0,
              explanation: "JSONB mengurai dokumen JSON ke format biner terstruktur saat disimpan sehingga pencarian bidang dan indeks GIN berjalan sangat kencang.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Perintah psql mana yang digunakan untuk melihat daftar tabel yang ada di dalam database saat ini?",
              choices: ["\\dt", "\\l", "\\d", "\\q"],
              answerIndex: 0,
              explanation: "\\dt (display tables) menampilkan seluruh daftar tabel pada schema aktif.",
            },
          ],
        },
      ],
    },
    {
      slug: "mysql",
      title: "MySQL: Fundamental",
      description:
        "Pasangan setia Laravel dan mayoritas hosting Indonesia — jalur tercepat ke pekerjaan lokal.",
      topics: [
        "Instalasi & mysql CLI: SHOW DATABASES, SHOW TABLES, DESCRIBE",
        "MySQL vs MariaDB: apa bedanya dan kenapa hosting sering memakai MariaDB",
        "Storage engine InnoDB (dan kenapa MyISAM ditinggalkan)",
        "AUTO_INCREMENT: perilaku setelah DELETE dan setelah restart",
        "Charset utf8mb4 & collation — jebakan emoji dan urutan sortir",
        "Tipe data: perbedaan penting dari PostgreSQL (TINYINT, ENUM, TEXT)",
        "DATETIME vs TIMESTAMP & penanganan timezone",
        "Tipe JSON di MySQL & generated column untuk mengindeksnya",
        "User, GRANT, dan hak akses per-database",
      ],
      items: [
        {
          kind: "step",
          id: "sql-7-1",
          title: "Storage Engine: InnoDB vs MyISAM",
          explanation:
            "Selalu tentukan `ENGINE=InnoDB` di MySQL karena InnoDB mendukung fitur Transaksi (ACID), Foreign Key, dan crash recovery, sedangkan MyISAM sudah usang.",
          example: {
            code:
              "CREATE TABLE users (\n" +
              "  id INT AUTO_INCREMENT PRIMARY KEY,\n" +
              "  username VARCHAR(50)\n" +
              ") ENGINE=InnoDB;",
            output: "Query OK, 0 rows affected",
            note: "InnoDB adalah storage engine bawaan MySQL sejak versi 5.5.",
          },
          instruction:
            "Tambahkan klausa penentuan storage engine InnoDB pada akhir perintah pembuatan tabel.",
          starterCode: "-- Tulis klausul ENGINE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "ENGINE\\s*=\\s*InnoDB",
              message: "Tuliskan: ENGINE=InnoDB",
            },
          ],
          solution: "ENGINE=InnoDB",
        },
        {
          kind: "step",
          id: "sql-7-2",
          title: "Charset utf8mb4 untuk Dukungan Emoji Full",
          explanation:
            "Pengaturan `utf8` lama pada MySQL hanya mendukung maksimal 3-byte per karakter, sehingga akan error saat menyimpan emoji. Gunakan `utf8mb4` untuk UTF-8 sejati 4-byte.",
          example: {
            code: "ALTER DATABASE toko_db CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;",
            output: "Query OK, 1 row affected",
            note: "utf8mb4_unicode_ci memberikan akurasi pengurutan teks lintas bahasa terbaik.",
          },
          instruction:
            "Ubah tabel 'comments' agar menggunakan CHARACTER SET utf8mb4.",
          starterCode: "-- Tulis klausa CHARACTER SET di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "ALTER\\s+TABLE\\s+comments\\s+CHARACTER\\s+SET\\s*=?\\s*utf8mb4\\s*;?",
              message: "Gunakan: ALTER TABLE comments CHARACTER SET utf8mb4;",
            },
          ],
          solution: "ALTER TABLE comments CHARACTER SET utf8mb4;",
        },
        {
          kind: "step",
          id: "sql-7-3",
          title: "AUTO_INCREMENT & LAST_INSERT_ID()",
          explanation:
            "Atribut `AUTO_INCREMENT` membuat penomoran integer bertambah otomatis. Fungsi `LAST_INSERT_ID()` mengambil nilai ID terakhir yang disisipkan oleh koneksi tersebut secara aman.",
          example: {
            code: "INSERT INTO categories (name) VALUES ('Elektronik');\nSELECT LAST_INSERT_ID();",
            output: "   LAST_INSERT_ID()\n-------------------\n 42",
            note: "LAST_INSERT_ID() terisolasi per koneksi user sehingga tidak akan tertukar dengan user lain.",
          },
          instruction:
            "Tulis query untuk mengambil nilai ID auto-increment yang baru saja disisipkan pada koneksi aktif.",
          starterCode: "-- Tulis query LAST_INSERT_ID di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+LAST_INSERT_ID\\(\\)\\s*;?",
              message: "Gunakan: SELECT LAST_INSERT_ID();",
            },
          ],
          solution: "SELECT LAST_INSERT_ID();",
        },
        {
          kind: "step",
          id: "sql-7-4",
          title: "Tipe Tanggal: DATETIME vs TIMESTAMP",
          explanation:
            "Tipe `TIMESTAMP` menyimpan waktu dalam zona UTC (4 byte, hingga tahun 2038), sedangkan `DATETIME` menyimpan angka tanggal persis tanpa penyesuaian zona waktu.",
          example: {
            code: "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
            output: "Waktu otomatis tercatat dan terbarui dalam UTC.",
            note: "Gunakan TIMESTAMP untuk aplikasi web yang diakses dari berbagai zona waktu dunia.",
          },
          instruction:
            "Definisikan kolom 'created_at' bertipe TIMESTAMP yang nilai utamanya (DEFAULT) adalah CURRENT_TIMESTAMP.",
          starterCode: "-- Tulis kolom TIMESTAMP di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "created_at\\s+TIMESTAMP\\s+DEFAULT\\s+CURRENT_TIMESTAMP",
              message: "Gunakan: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
            },
          ],
          solution: "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
        },
        {
          kind: "step",
          id: "sql-7-5",
          title: "Backup & Restore dengan mysqldump",
          explanation:
            "Utility `mysqldump` digunakan untuk mengekspor struktur schema dan data tabel menjadi berkas skrip SQL mentah `.sql` dari terminal.",
          example: {
            code: "mysqldump -u root -p toko_db > backup_toko.sql",
            output: "File dump backup_toko.sql berhasil dibuat.",
            note: "Untuk me-restore: mysql -u root -p toko_db < backup_toko.sql.",
          },
          instruction:
            "Tulis perintah terminal mysqldump untuk mengekspor database bernama 'production_db' oleh user 'root' (dengan prompt password -p) ke berkas 'dump.sql'.",
          starterCode: "# Tulis perintah mysqldump di sini\n",
          language: "text",
          tests: [
            {
              pattern: "mysqldump\\s+-u\\s+root\\s+-p\\s+production_db\\s*>\\s*dump\\.sql",
              message: "Gunakan perintah mysqldump sesuai instruksi",
            },
          ],
          solution: "mysqldump -u root -p production_db > dump.sql",
        },
        {
          kind: "quiz",
          id: "sql-7-kuis",
          title: "Kuis: MySQL Spesifik",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa sebaiknya menggunakan charset `utf8mb4` dibanding `utf8` standar pada database MySQL?",
              choices: [
                "Karena utf8mb4 membuat file database lebih kecil",
                "Karena charset utf8 lama di MySQL tidak mendukung karakter 4-byte seperti Emoji (😊)",
                "Karena utf8mb4 hanya berjalan di Linux",
                "Karena utf8mb4 menghapus password user",
              ],
              answerIndex: 1,
              explanation: "Charset `utf8mb4` mendukung penuh penyimpan 4-byte UTF-8 termasuk karakter emoji internasional.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa InnoDB lebih direkomendasikan dibanding MyISAM sebagai Storage Engine utama di MySQL?",
              choices: [
                "InnoDB mendukung transaksi ACID dan klausa Foreign Key untuk integritas data",
                "InnoDB memformat tabel dalam file CSV murni",
                "MyISAM membutuhkan RAM 100x lebih besar",
                "InnoDB tidak bisa menyimpan angka desimal"
              ],
              answerIndex: 0,
              explanation: "InnoDB menyediakan dukungan transaksi penuh (ACID), pemulihan crash otomatis, serta penegakan integritas data relasional via Foreign Key.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Fungsi SQL MySQL apa yang digunakan untuk mengambil nilai ID auto-increment dari baris yang baru disisipkan?",
              choices: ["LAST_INSERT_ID()", "GET_LAST_ID()", "NEW_AUTO_ID()", "MAX(id)"],
              answerIndex: 0,
              explanation: "LAST_INSERT_ID() mengembalikan ID auto-increment yang terlahir pada sesi koneksi aktif pengirim query.",
            },
          ],
        },
      ],
    },
    {
      slug: "pg-lanjutan",
      title: "PostgreSQL: Performa & Operasional",
      description:
        "Yang ditanyakan saat kamu pegang database production: kenapa query lambat, index mana yang dipakai, dan bagaimana kalau data hilang.",
      topics: [
        "EXPLAIN vs EXPLAIN ANALYZE — membaca rencana eksekusi sungguhan",
        "Seq Scan vs Index Scan vs Bitmap Heap Scan: kapan masing-masing wajar",
        "Jenis index: B-tree, GIN, GiST, BRIN, partial, dan expression index",
        "Index yang tidak terpakai & kenapa menambah index bisa memperlambat",
        "Window function: ROW_NUMBER, LAG/LEAD, running total",
        "CTE & recursive CTE untuk data berjenjang (kategori, struktur organisasi)",
        "VACUUM, autovacuum, dan table bloat",
        "Transaction isolation level & deadlock",
        "Backup dengan pg_dump/pg_restore + latihan restore (bukan cuma backup)",
        "Connection pooling: kenapa PostgreSQL butuh PgBouncer",
        "Extension berguna: pg_stat_statements, uuid-ossp, pgcrypto",
      ],
      items: [
        {
          kind: "step",
          id: "sql-8-pg-1",
          title: "Membaca Rencana Eksekusi (EXPLAIN ANALYZE)",
          explanation:
            "Perintah `EXPLAIN ANALYZE` mengeksekusi query secara riil dan menampilkan execution plan lengkap beserta durasi eksekusi aktual (actual time), jumlah baris (rows), dan metode scan yang digunakan optimizer PostgreSQL.",
          example: {
            code: "EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';",
            output: "Index Scan using idx_users_email on users  (cost=0.28..8.29 rows=1 width=128) (actual time=0.015..0.018 ms)\nExecution Time: 0.045 ms",
            note: "EXPLAIN biasa hanya mengestimasi biaya, sedangkan EXPLAIN ANALYZE mengeksekusi query sungguhan.",
          },
          instruction:
            "Tulis perintah EXPLAIN ANALYZE untuk mengevaluasi eksekusi query pencarian transaksi pada tabel 'orders' dengan kondisi 'status = ''pending'''.",
          starterCode: "-- Tulis EXPLAIN ANALYZE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "EXPLAIN\\s+ANALYZE\\s+SELECT\\s+\\*\\s+FROM\\s+orders\\s+WHERE\\s+status\\s*=\\s*['\"]pending['\"]\\s*;?",
              message: "Gunakan: EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'pending';",
            },
          ],
          solution: "EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'pending';",
        },
        {
          kind: "step",
          id: "sql-8-pg-2",
          title: "Membuat Partial Index & GIN Index",
          explanation:
            "Partial Index (`WHERE status = 'active'`) hanya mengindeks sebagian baris sehingga ukuran indeks jauh lebih kecil. GIN Index (`USING gin`) digunakan khusus untuk mengindeks dokumen JSONB atau kolom pencarian teks.",
          example: {
            code: "CREATE INDEX idx_active_users ON users (email) WHERE status = 'active';",
            output: "CREATE INDEX",
            note: "Partial index menghemat ruang RAM dan mempercepat pencarian data berstatus khusus.",
          },
          instruction:
            "Buat Partial Index bernama 'idx_pending_orders' pada kolom 'user_id' di tabel 'orders' khusus untuk baris yang 'status = ''pending'''.",
          starterCode: "-- Tulis CREATE INDEX di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "CREATE\\s+INDEX\\s+idx_pending_orders\\s+ON\\s+orders\\s*\\(\\s*user_id\\s*\\)\\s+WHERE\\s+status\\s*=\\s*['\"]pending['\"]\\s*;?",
              message: "Gunakan: CREATE INDEX idx_pending_orders ON orders (user_id) WHERE status = 'pending';",
            },
          ],
          solution: "CREATE INDEX idx_pending_orders ON orders (user_id) WHERE status = 'pending';",
        },
        {
          kind: "step",
          id: "sql-8-pg-3",
          title: "Window Function (ROW_NUMBER & OVER PARTITION BY)",
          explanation:
            "Window Function melakukan kalkulasi melintasi sekumpulan baris relasional tanpa menggabungkan baris data menjadi 1 baris seperti GROUP BY.",
          example: {
            code: "SELECT name, salary, ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank FROM employees;",
            output: "  name  | salary | rank\n--------+--------+------\n Budi   | 15000  |  1\n Siti   | 12000  |  2",
            note: "OVER (PARTITION BY ...) membagi jendela komputasi per kelompok kategori.",
          },
          instruction:
            "Tulis query SELECT yang mengambil kolom 'id', 'amount', dan fungsi 'ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)' dengan alias 'order_seq' dari tabel 'orders'.",
          starterCode: "-- Tulis Window Function di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+id\\s*,\\s*amount\\s*,\\s*ROW_NUMBER\\(\\)\\s+OVER\\s*\\(\\s*PARTITION\\s+BY\\s+user_id\\s+ORDER\\s+BY\\s+created_at\\s+DESC\\s*\\)\\s+AS\\s+order_seq\\s+FROM\\s+orders\\s*;?",
              message: "Gunakan ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS order_seq",
            },
          ],
          solution: "SELECT id, amount, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS order_seq FROM orders;",
        },
        {
          kind: "step",
          id: "sql-8-pg-4",
          title: "Common Table Expression (WITH CTE)",
          explanation:
            "CTE (`WITH nama_cte AS (...)`) membuat tabel sementara yang terbaca rapi untuk menyederhanakan query komplek atau menyusun hirarki bertingkat.",
          example: {
            code: "WITH high_sales AS (\n  SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id\n)\nSELECT * FROM high_sales WHERE total > 1000000;",
            output: "Daftar pengguna dengan total pembelian di atas 1 juta.",
            note: "CTE membuat query SQL yang rumit menjadi jauh lebih mudah dibaca dan di-maintain.",
          },
          instruction:
            "Tulis CTE bernama 'active_users' yang mengambil 'SELECT * FROM users WHERE status = ''active''' kemudian lakukan 'SELECT * FROM active_users;'.",
          starterCode: "-- Tulis CTE di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "WITH\\s+active_users\\s+AS\\s*\\(\\s*SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+status\\s*=\\s*['\"]active['\"]\\s*\\)\\s*SELECT\\s+\\*\\s+FROM\\s+active_users\\s*;?",
              message: "Gunakan sintaks CTE WITH active_users AS (...)",
            },
          ],
          solution: "WITH active_users AS (SELECT * FROM users WHERE status = 'active') SELECT * FROM active_users;",
        },
        {
          kind: "step",
          id: "sql-8-pg-5",
          title: "Pembersihan Baris Mati dengan VACUUM",
          explanation:
            "Saat baris di-UPDATE atau DELETE di PostgreSQL, data lama tidak langsung dihapus melainkan ditandai mati (dead tuples). Perintah `VACUUM` membersihkan tuple mati untuk mengembalikan ruang penyimpanan dan mencegah table bloat.",
          example: {
            code: "VACUUM ANALYZE users;",
            output: "VACUUM\nMembersihkan tuple mati dan memperbarui statistik optimizer.",
            note: "Autovacuum berjalan otomatis di background, namun VACUUM manual berguna setelah penghapusan masif.",
          },
          instruction:
            "Tulis perintah VACUUM FULL pada tabel 'logs' untuk membebaskan ruang penyimpanan disk secara menyeluruh.",
          starterCode: "-- Tulis VACUUM FULL di sini\n",
          language: "text",
          tests: [
            {
              pattern: "VACUUM\\s+FULL\\s+logs\\s*;?",
              message: "Tuliskan: VACUUM FULL logs;",
            },
          ],
          solution: "VACUUM FULL logs;",
        },
        {
          kind: "step",
          id: "sql-8-pg-6",
          title: "Backup & Restore Database (pg_dump & pg_restore)",
          explanation:
            "Perintah `pg_dump -Fc` membuat backup database berformat kustom biner terkompresi yang siap di-restore secara paralel menggunakan `pg_restore`.",
          example: {
            code: "pg_dump -U postgres -Fc db_utama > db_backup.dump",
            output: "File dump biner db_backup.dump dibuat.",
            note: "Restore dapat dilakukan dengan perintah: pg_restore -U postgres -d db_target db_backup.dump.",
          },
          instruction:
            "Tulis perintah pg_restore untuk memulihkan file 'backup.dump' ke database target 'production_db' sebagai user 'postgres'.",
          starterCode: "# Tulis perintah pg_restore di sini\n",
          language: "text",
          tests: [
            {
              pattern: "pg_restore\\s+-U\\s+postgres\\s+-d\\s+production_db\\s+backup\\.dump",
              message: "Gunakan: pg_restore -U postgres -d production_db backup.dump",
            },
          ],
          solution: "pg_restore -U postgres -d production_db backup.dump",
        },
        {
          kind: "step",
          id: "sql-8-pg-7",
          title: "Aktifkan Extension PostgreSQL (CREATE EXTENSION)",
          explanation:
            "PostgreSQL mendukung ekstensi modular seperti `pg_stat_statements` untuk monitoring slow query dan `uuid-ossp` untuk fungsi UUID tambahan.",
          example: {
            code: 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
            output: "CREATE EXTENSION",
            note: "Ekstensi dipasang per database oleh user berkewenangan superuser.",
          },
          instruction:
            "Tulis perintah untuk mengaktifkan ekstensi 'pg_stat_statements' jika belum ada (IF NOT EXISTS).",
          starterCode: "-- Tulis CREATE EXTENSION di sini\n",
          language: "text",
          tests: [
            {
              pattern: "CREATE\\s+EXTENSION\\s+IF\\s+NOT\\s+EXISTS\\s+[\"']?pg_stat_statements[\"']?\\s*;?",
              message: 'Gunakan: CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";',
            },
          ],
          solution: 'CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";',
        },
        {
          kind: "quiz",
          id: "sql-8-pg-kuis",
          title: "Kuis: PostgreSQL Performa & Operasional",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa perbedaan utama antara perintah `EXPLAIN` dan `EXPLAIN ANALYZE` pada PostgreSQL?",
              choices: [
                "EXPLAIN biasa hanya mengestimasi rencana eksekusi, sedangkan EXPLAIN ANALYZE benar-benar mengeksekusi query dan mencatat durasi waktu aktual",
                "EXPLAIN ANALYZE menghapus data dari tabel",
                "EXPLAIN biasa hanya bisa digunakan di MySQL",
                "EXPLAIN ANALYZE mengubah urutan kolom di database"
              ],
              answerIndex: 0,
              explanation: "EXPLAIN ANALYZE mengeksekusi kueri secara riil di database sehingga menampilkan jumlah baris dan durasi waktu eksekusi yang sesungguhnya (actual time).",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa fitur autovacuum / perintah VACUUM sangat krusial dalam operasional database PostgreSQL?",
              choices: [
                "Untuk membersihkan tuple/baris mati (dead tuples) bekas UPDATE/DELETE sehingga tidak menyebabkan table bloat",
                "Untuk mengubah password user postgres secara berkala",
                "Untuk memformat ulang harddisk server",
                "Untuk mengonversi file SQL menjadi format JSON"
              ],
              answerIndex: 0,
              explanation: "PostgreSQL menggunakan MVCC di mana operasi UPDATE/DELETE meninggalkan baris lama sebagai dead tuple. VACUUM mengklaim kembali ruang tersebut agar tabel tidak menggelembung (bloat).",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Kapan jenis indeks GIN (Generalized Inverted Index) di PostgreSQL paling tepat digunakan?",
              choices: [
                "Untuk kolom tipe data JSONB, pencarian teks (Full-Text Search), atau array",
                "Untuk kolom bertipe INTEGER yang nilainya selalu naik",
                "Untuk kolom tanggal lahir",
                "Untuk kolom yang nilainya kosong"
              ],
              answerIndex: 0,
              explanation: "GIN Index sangat efisien memetakan elemen-elemen internal di dalam dokumen biner JSONB, teks tsvector, maupun array.",
            },
          ],
        },
      ],
    },
    {
      slug: "mysql-lanjutan",
      title: "MySQL: Performa & Operasional",
      description:
        "Menangani MySQL di production: optimizer, index, replikasi, dan pemulihan data.",
      topics: [
        "EXPLAIN & EXPLAIN ANALYZE di MySQL: kolom type, key, rows, filtered",
        "Clustered index InnoDB: kenapa primary key besar merusak performa",
        "Covering index & prefix index untuk kolom teks panjang",
        "Kenapa fungsi di kolom WHERE membatalkan index",
        "Window function & CTE (tersedia sejak MySQL 8.0)",
        "sql_mode & STRICT_TRANS_TABLES: kenapa MySQL lama menerima data invalid",
        "Slow query log: menemukan query paling berat",
        "Transaksi InnoDB, locking, dan deadlock",
        "Backup mysqldump vs snapshot + latihan restore",
        "Replikasi master-replica dasar & kapan dibutuhkan",
        "Perbedaan penting MySQL 8.4 LTS vs versi lama yang masih banyak di hosting",
      ],
      items: [
        {
          kind: "step",
          id: "sql-9-my-1",
          title: "Membaca Rencana Eksekusi (EXPLAIN di MySQL)",
          explanation:
            "Perintah `EXPLAIN` di MySQL menunjukkan bagaimana optimizer mengeksekusi query. Kolom `type` menunjukkan metode join/scan (misal `ALL` = Full Table Scan berbahaya, `ref` / `eq_ref` = Index Scan efisien).",
          example: {
            code: "EXPLAIN SELECT * FROM products WHERE category_id = 5;",
            output: "id | select_type | table    | type | possible_keys | key            | rows\n 1 | SIMPLE      | products | ref  | idx_category  | idx_category   | 12",
            note: "Tipe 'ALL' menandakan MySQL melakukan scanning ke seluruh baris tabel!",
          },
          instruction:
            "Tulis perintah EXPLAIN untuk menganalisis query 'SELECT * FROM users WHERE status = ''active'';'.",
          starterCode: "-- Tulis EXPLAIN di sini\n",
          language: "text",
          tests: [
            {
              pattern: "EXPLAIN\\s+SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+status\\s*=\\s*['\"]active['\"]\\s*;?",
              message: "Gunakan: EXPLAIN SELECT * FROM users WHERE status = 'active';",
            },
          ],
          solution: "EXPLAIN SELECT * FROM users WHERE status = 'active';",
        },
        {
          kind: "step",
          id: "sql-9-my-2",
          title: "Optimasi Covering Index",
          explanation:
            "Covering Index adalah indeks gabungan yang memuat seluruh kolom yang diminta oleh query `SELECT`, sehingga MySQL tidak perlu melakukan lookup balik ke clustered index tabel (Index-Only Scan).",
          example: {
            code: "CREATE INDEX idx_user_status_name ON users (status, name);",
            output: "CREATE INDEX",
            note: "Jika query memilih status dan name, MySQL mengambil data langsung dari memori index.",
          },
          instruction:
            "Buat komposit indeks bernama 'idx_email_created' pada kolom 'email' dan 'created_at' di tabel 'users'.",
          starterCode: "-- Tulis CREATE INDEX di sini\n",
          language: "text",
          tests: [
            {
              pattern: "CREATE\\s+INDEX\\s+idx_email_created\\s+ON\\s+users\\s*\\(\\s*email\\s*,\\s*created_at\\s*\\)\\s*;?",
              message: "Gunakan: CREATE INDEX idx_email_created ON users (email, created_at);",
            },
          ],
          solution: "CREATE INDEX idx_email_created ON users (email, created_at);",
        },
        {
          kind: "step",
          id: "sql-9-my-3",
          title: "Mencegah Pembatalan Indeks (Index Invalidation)",
          explanation:
            "Membungkus kolom indeks dengan fungsi di klausul `WHERE` (misal `YEAR(created_at) = 2026`) membuat MySQL tidak bisa menggunakan B-tree index. Gunakan perbandingan rentang tanggal langsung.",
          example: {
            code: "-- ❌ MEMBATALKAN INDEX: WHERE YEAR(created_at) = 2026\n-- ✅ MENGGUNAKAN INDEX: WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'",
            output: "Query memanfaatkan B-tree Index Scan alih-alih Full Table Scan.",
            note: "Selalu jaga agar kolom di sisi kiri operator perbandingan tetap bersih tanpa pembungkus fungsi.",
          },
          instruction:
            "Tulis klausul WHERE untuk kolom 'created_at' yang memanfaatkan rentang tanggal dari '2026-01-01' hingga kurang dari '2027-01-01'.",
          starterCode: "-- Tulis klausul WHERE rentang tanggal di sini\n",
          language: "text",
          tests: [
            {
              pattern: "WHERE\\s+created_at\\s*>=\\s*['\"]2026-01-01['\"]\\s+AND\\s+created_at\\s*<\\s*['\"]2027-01-01['\"]",
              message: "Gunakan: WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'",
            },
          ],
          solution: "WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'",
        },
        {
          kind: "step",
          id: "sql-9-my-4",
          title: "Mendeteksi Query Lambat (Slow Query Log)",
          explanation:
            "MySQL menyediakan fitur `Slow Query Log` untuk mencatat query yang waktu eksekusinya melebihi ambang batas `long_query_time` (misal 2 detik).",
          example: {
            code: "SET GLOBAL slow_query_log = 'ON';\nSET GLOBAL long_query_time = 2;",
            output: "Slow Query Log aktif mencatat query berdurasi > 2 detik.",
            note: "Log disimpan di file mysql-slow.log untuk dianalisis dengan mysqldumpslow.",
          },
          instruction:
            "Tulis perintah SET GLOBAL untuk mengaktifkan variabel 'slow_query_log' menjadi 'ON'.",
          starterCode: "-- Tulis SET GLOBAL di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SET\\s+GLOBAL\\s+slow_query_log\\s*=\\s*['\"]?ON['\"]?\\s*;?",
              message: "Gunakan: SET GLOBAL slow_query_log = 'ON';",
            },
          ],
          solution: "SET GLOBAL slow_query_log = 'ON';",
        },
        {
          kind: "step",
          id: "sql-9-my-5",
          title: "Mode Ketat SQL (STRICT_TRANS_TABLES)",
          explanation:
            "Pengaturan `sql_mode = 'STRICT_TRANS_TABLES'` menolak penyisipan data invalid (seperti angka terpotong atau nilai string terlalu panjang) dengan melempar Error, bukan Warning.",
          example: {
            code: "SET SESSION sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION';",
            output: "Session mode diset ke strict mode.",
            note: "Strict mode wajib diaktifkan pada aplikasi produksi modern agar data konsisten.",
          },
          instruction:
            "Tulis perintah untuk mengeset SESSION sql_mode berisi 'STRICT_TRANS_TABLES'.",
          starterCode: "-- Tulis SET SESSION sql_mode di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SET\\s+SESSION\\s+sql_mode\\s*=\\s*['\"]STRICT_TRANS_TABLES['\"]\\s*;?",
              message: "Gunakan: SET SESSION sql_mode = 'STRICT_TRANS_TABLES';",
            },
          ],
          solution: "SET SESSION sql_mode = 'STRICT_TRANS_TABLES';",
        },
        {
          kind: "step",
          id: "sql-9-my-6",
          title: "Replikasi Database (SHOW REPLICA STATUS)",
          explanation:
            "Replikasi MySQL menyalin data dari server Master ke satu atau lebih server Replica untuk memisahkan trafik Read (baca) dan Write (tulis).",
          example: {
            code: "SHOW REPLICA STATUS\\G",
            output: "Replica_IO_Running: Yes\nReplica_SQL_Running: Yes\nSeconds_Behind_Master: 0",
            note: "Memastikan proses replikasi berjalan sinkron tanpa delay.",
          },
          instruction:
            "Tulis perintah SQL MySQL untuk memeriksa status replikasi pada server replica (SHOW REPLICA STATUS).",
          starterCode: "-- Tulis perintah status replikasi di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SHOW\\s+(REPLICA|SLAVE)\\s+STATUS\\s*;?",
              message: "Gunakan: SHOW REPLICA STATUS;",
            },
          ],
          solution: "SHOW REPLICA STATUS;",
        },
        {
          kind: "step",
          id: "sql-9-my-7",
          title: "Mengunci Baris dengan FOR UPDATE",
          explanation:
            "Klausul `FOR UPDATE` memasang Exclusive Lock pada baris yang dipilih di dalam transaksi InnoDB, mencegah transaksi lain mengubah baris tersebut sampai transaksi selesai.",
          example: {
            code: "START TRANSACTION;\nSELECT * FROM accounts WHERE id = 1 FOR UPDATE;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT;",
            output: "Pembaruan saldo rekening aman dari kondisi race condition.",
            note: "Penting untuk transaksi finansial dan sistem tiket.",
          },
          instruction:
            "Tulis query SELECT memilih seluruh kolom dari tabel 'inventory' di mana 'product_id = 10' menggunakan penguncian transaksi FOR UPDATE.",
          starterCode: "-- Tulis query SELECT FOR UPDATE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+\\*\\s+FROM\\s+inventory\\s+WHERE\\s+product_id\\s*=\\s*10\\s+FOR\\s+UPDATE\\s*;?",
              message: "Gunakan: SELECT * FROM inventory WHERE product_id = 10 FOR UPDATE;",
            },
          ],
          solution: "SELECT * FROM inventory WHERE product_id = 10 FOR UPDATE;",
        },
        {
          kind: "quiz",
          id: "sql-9-my-kuis",
          title: "Kuis: MySQL Performa & Operasional",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Nilai `type` apa pada hasil EXPLAIN MySQL yang paling berbahaya karena menandakan Full Table Scan?",
              choices: ["ALL", "ref", "eq_ref", "const"],
              answerIndex: 0,
              explanation: "Tipe `ALL` berarti MySQL harus memindai seluruh baris tabel tanpa bantuan indeks, yang sangat lambat pada dataset besar.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa pemanggilan fungsi pada kolom di klausul WHERE (seperti `WHERE YEAR(created_at) = 2026`) membatalkan penggunaan B-Tree Index?",
              choices: [
                "Karena MySQL harus mengeksekusi fungsi tersebut pada setiap baris data sehingga tidak bisa memanfaatkan pencarian urut di B-Tree Index",
                "Karena YEAR() adalah fungsi khusus PostgreSQL",
                "Karena B-Tree index hanya menyimpan nilai string",
                "Karena fungsi YEAR() menghapus index dari memori server"
              ],
              answerIndex: 0,
              explanation: "Fungsi membungkus kolom mencegah pencarian range biner di B-tree index, memaksa MySQL melakukan evaluasi fungsi per baris (Full Table Scan).",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa kegunaan klausul `FOR UPDATE` saat memilih baris data di dalam transaksi InnoDB MySQL?",
              choices: [
                "Memasang exclusive row lock agar transaksi lain tidak bisa memodifikasi baris tersebut hingga transaksi di-commit",
                "Mengubah data secara permanen tanpa perlu perintah UPDATE",
                "Menghapus baris yang terpilih dari tabel secara otomatis",
                "Membuat backup snapshot ke file .sql"
              ],
              answerIndex: 0,
              explanation: "FOR UPDATE mengunci baris data secara eksklusif untuk mencegah race condition (misal perebutan stok barang / saldo rekening).",
            },
          ],
        },
      ],
    },
    {
      slug: "pilih-migrasi",
      title: "Memilih & Migrasi antar Database",
      description:
        "Keputusan arsitektur yang sering ditanyakan di interview: kenapa memilih yang ini, dan apa risikonya kalau harus pindah.",
      topics: [
        "Peta perbedaan sintaks: LIMIT/OFFSET, string concat, upsert, boolean",
        "AUTO_INCREMENT vs SERIAL/IDENTITY vs UUID",
        "Perbedaan penanganan tipe JSON, timezone, dan pencarian teks",
        "Kapan MySQL lebih tepat (ekosistem Laravel, hosting murah, tim existing)",
        "Kapan PostgreSQL lebih tepat (data kompleks, JSONB, analitik, Supabase)",
        "Menjawab pertanyaan interview 'kenapa pakai X?' dengan alasan teknis",
        "Strategi migrasi: dump-restore, tool bantu, dan uji kesetaraan data",
        "Jebakan migrasi: collation, tipe boolean, tanggal nol (0000-00-00)",
        "Menulis SQL yang portabel (dan kapan justru tidak perlu portabel)",
      ],
      items: [
        {
          kind: "step",
          id: "sql-10-mig-1",
          title: "Perbedaan Sintaks: String Concatenation",
          explanation:
            "Di PostgreSQL gabungkan string memakai operator `||` atau `CONCAT()`, sedangkan di MySQL gunakan fungsi `CONCAT(str1, str2)`. Operator `||` di MySQL beroperasi sebagai OR logika secara default.",
          example: {
            code: "-- PostgreSQL: SELECT first_name || ' ' || last_name AS full_name FROM users;\n-- MySQL: SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;",
            output: " full_name\n-----------------\n Budi Sudarsono",
            note: "Perhatikan perbedaan operator string saat melakukan porting kueri.",
          },
          instruction:
            "Tulis query portabel MySQL yang menggabungkan kolom 'first_name', spasi ' ', dan 'last_name' dengan alias 'full_name' dari tabel 'users'.",
          starterCode: "-- Tulis CONCAT di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+CONCAT\\(\\s*first_name\\s*,\\s*['\"]\\s+['\"]\\s*,\\s*last_name\\s*\\)\\s+AS\\s+full_name\\s+FROM\\s+users\\s*;?",
              message: "Gunakan: SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;",
            },
          ],
          solution: "SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;",
        },
        {
          kind: "step",
          id: "sql-10-mig-2",
          title: "Penanganan Upsert (Insert or Update)",
          explanation:
            "Operasi Upsert menyisipkan data baru atau memperbarui jika primary key sudah ada. PostgreSQL menggunakan `ON CONFLICT (...) DO UPDATE`, sedangkan MySQL menggunakan `ON DUPLICATE KEY UPDATE`.",
          example: {
            code: "-- PostgreSQL: INSERT INTO stats (id, views) VALUES (1, 1) ON CONFLICT (id) DO UPDATE SET views = stats.views + 1;\n-- MySQL: INSERT INTO stats (id, views) VALUES (1, 1) ON DUPLICATE KEY UPDATE views = views + 1;",
            output: "Data baru disisipkan atau nilai views di-increment otomatis.",
            note: "Pola paling umum untuk penanganan kaunter atau caching database.",
          },
          instruction:
            "Tulis klausa PostgreSQL ON CONFLICT pada kolom 'email' yang melakukan DO UPDATE SET 'updated_at = NOW()'.",
          starterCode: "-- Tulis ON CONFLICT PostgreSQL di sini\n",
          language: "text",
          tests: [
            {
              pattern: "ON\\s+CONFLICT\\s*\\(\\s*email\\s*\\)\\s+DO\\s+UPDATE\\s+SET\\s+updated_at\\s*=\\s*NOW\\(\\)",
              message: "Gunakan: ON CONFLICT (email) DO UPDATE SET updated_at = NOW()",
            },
          ],
          solution: "ON CONFLICT (email) DO UPDATE SET updated_at = NOW()",
        },
        {
          kind: "step",
          id: "sql-10-mig-3",
          title: "Penanganan Tipe Boolean & Date Invalid",
          explanation:
            "PostgreSQL mendukung tipe `BOOLEAN` murni (`TRUE`/`FALSE`), sedangkan MySQL mengonversinya ke `TINYINT(1)` (`1`/`0`). Selain itu, MySQL lama mengizinkan tanggal nol `0000-00-00` yang ditolak keras oleh PostgreSQL.",
          example: {
            code: "-- MySQL: is_active TINYINT(1) DEFAULT 1\n-- PostgreSQL: is_active BOOLEAN DEFAULT TRUE",
            output: "Perubahan tipe data saat migrasi skema tabel.",
            note: "Pastikan ORM atau skrip migrasi melakukan pemetaan tipe data dengan benar.",
          },
          instruction:
            "Definisikan kolom 'is_active' bertipe BOOLEAN dengan nilai default TRUE sesuai standar PostgreSQL.",
          starterCode: "-- Tulis kolom BOOLEAN di sini\n",
          language: "text",
          tests: [
            {
              pattern: "is_active\\s+BOOLEAN\\s+DEFAULT\\s+TRUE",
              message: "Gunakan: is_active BOOLEAN DEFAULT TRUE",
            },
          ],
          solution: "is_active BOOLEAN DEFAULT TRUE",
        },
        {
          kind: "step",
          id: "sql-10-mig-4",
          title: "Justifikasi Arsitektur Pemilihan Database",
          explanation:
            "Pilih **MySQL** untuk integrasi ekosistem PHP/Laravel cepat dan hosting murah. Pilih **PostgreSQL** untuk integritas data kompleks, pencarian teks/JSONB canggih, geospasial (PostGIS), dan analitik.",
          example: {
            code: "// PostgreSQL: Sangat cocok untuk FinTech, GIS, dan aplikasi data kompleks.\n// MySQL: Sangat cocok untuk CMS, e-Commerce standar, dan web skala menengah.",
            output: "Keputusan arsitektural berbasis analisis kebutuhan teknis.",
            note: "Sampaikan kriteria pemilihan ini secara logis saat wawancara sistem desain.",
          },
          instruction:
            "Tulis query PostgreSQL yang memanfaatkan tipe data JSONB 'payload' untuk menyaring baris di mana payload->>'tier' bernilai 'gold'.",
          starterCode: "-- Tulis query JSONB Postgres di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+payload->>'tier'\\s*=\\s*['\"]gold['\"]\\s*;?",
              message: "Gunakan: SELECT * FROM users WHERE payload->>'tier' = 'gold';",
            },
          ],
          solution: "SELECT * FROM users WHERE payload->>'tier' = 'gold';",
        },
        {
          kind: "step",
          id: "sql-10-mig-5",
          title: "Transformasi Data saat Migrasi",
          explanation:
            "Migrasi antar mesin database yang berbeda membutuhkan skrip transformasi untuk mengonversi sintaks DDL, tipe data, dan urutan sekuensial.",
          example: {
            code: "pgloader mysql://user:pass@localhost/db_lama postgresql://user:pass@localhost/db_baru",
            output: "pgloader mengotomatiskan konversi skema dan migrasi data dari MySQL ke PostgreSQL.",
            note: "pgloader adalah alat migrasi otomatis paling populer dari MySQL ke Postgres.",
          },
          instruction:
            "Tulis perintah CLI pgloader untuk memigrasikan database asal 'mysql://root@localhost/source_db' ke target 'postgresql://postgres@localhost/target_db'.",
          starterCode: "# Tulis perintah pgloader di sini\n",
          language: "text",
          tests: [
            {
              pattern: "pgloader\\s+mysql://root@localhost/source_db\\s+postgresql://postgres@localhost/target_db",
              message: "Gunakan: pgloader mysql://root@localhost/source_db postgresql://postgres@localhost/target_db",
            },
          ],
          solution: "pgloader mysql://root@localhost/source_db postgresql://postgres@localhost/target_db",
        },
        {
          kind: "step",
          id: "sql-10-mig-6",
          title: "Verifikasi Jumlah & Hash Data Pasca-Migrasi",
          explanation:
            "Setelah migrasi selesai, lakukan verifikasi integritas data dengan membandingkan jumlah baris (`COUNT(*)`) dan checksum/hash data pada setiap tabel di kedua server.",
          example: {
            code: "SELECT COUNT(*) FROM users;",
            output: " MySQL: 50000 rows | PostgreSQL: 50000 rows (Match!)",
            note: "Uji kesetaraan memastikan tidak ada data yang hilang atau corrupt selama proses migrasi.",
          },
          instruction:
            "Tulis query SQL standar untuk menghitung jumlah total baris pada tabel 'orders' demi memverifikasi jumlah data.",
          starterCode: "-- Tulis query COUNT di sini\n",
          language: "text",
          tests: [
            {
              pattern: "SELECT\\s+COUNT\\(\\*\\)\\s+FROM\\s+orders\\s*;?",
              message: "Gunakan: SELECT COUNT(*) FROM orders;",
            },
          ],
          solution: "SELECT COUNT(*) FROM orders;",
        },
        {
          kind: "quiz",
          id: "sql-10-mig-kuis",
          title: "Kuis: Memilih & Migrasi antar Database",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Bagaimanakah penanganan tipe data Boolean yang berbeda antara PostgreSQL dan MySQL?",
              choices: [
                "PostgreSQL mendukung tipe BOOLEAN sejati (TRUE/FALSE), sedangkan MySQL mengonversinya menjadi TINYINT(1) (1/0)",
                "MySQL menggunakan VARCHAR untuk boolean",
                "PostgreSQL tidak mendukung nilai FALSE",
                "Kedua database menggunakan format teks 'YES/NO'"
              ],
              answerIndex: 0,
              explanation: "PostgreSQL menyediakan tipe data `BOOLEAN` asli, sedangkan MySQL memperlakukan `BOOLEAN` sebagai alias untuk `TINYINT(1)`.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Tool open-source populer apa yang digunakan untuk mengotomatiskan migrasi skema dan data dari MySQL langsung ke PostgreSQL?",
              choices: ["pgloader", "mysqldump", "certbot", "npm"],
              answerIndex: 0,
              explanation: "pgloader secara otomatis mengonversi skema DDL, memetakan tipe data, dan memindahkan isi data dari MySQL ke PostgreSQL secara cepat.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Manakah skenario di mana PostgreSQL jauh lebih unggul dibanding MySQL secara arsitektural?",
              choices: [
                "Aplikasi yang membutuhkan query JSONB ter-index kompleks, pencarian teks tingkat lanjut, dan analisis query relasional berat",
                "Web blog sederhana yang hanya butuh hosting murah Rp 15rb/bulan",
                "Aplikasi yang hanya berjalan di server Windows 98",
                "Aplikasi tanpa database"
              ],
              answerIndex: 0,
              explanation: "PostgreSQL sangat unggul pada fitur data modern seperti JSONB ter-index GIN, ekstensi PostGIS, pencarian tsvector, serta optimasi query analitik.",
            },
          ],
        },
      ],
    },
    {
      // CATATAN: id item di modul ini memakai awalan sql-8-* karena dulu modul
      // ke-8. Setelah PostgreSQL/MySQL Lanjutan disisipkan, posisinya bergeser
      // tapi id TIDAK diubah agar progres pengguna tidak hilang.
      slug: "sql-di-aplikasi",
      title: "SQL di Aplikasi",
      description:
        "Menjembatani SQL murni dengan kode: ORM, N+1, dan keamanan.",
      topics: [
        "Koneksi dari Node (pg) & connection pool",
        "Parameterized query: satu-satunya cara mencegah SQL injection",
        "ORM vs query builder vs raw SQL — trade-off jujur",
        "Masalah N+1 & cara mendeteksinya",
        "Migration di aplikasi nyata",
        "Optimasi query lambat: proses diagnosis lengkap",
      ],
      items: [
        {
          kind: "step",
          id: "sql-8-1",
          title: "Connection Pooling di Backend Node.js",
          explanation:
            "Connection Pool mengelola kumpulan koneksi database aktif yang siap dipakai ulang oleh HTTP handler, mencegah kehabisan memori akibat pembukaan koneksi berulang.",
          example: {
            code:
              'import { Pool } from "pg";\n' +
              "const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 20 });",
            output: "Pool diinisialisasi dengan kuota maksimal 20 koneksi.",
            note: "Mencegah error 'FATAL: sorry, too many clients already'.",
          },
          instruction:
            "Buat objek instance Pool baru dari driver pg yang membatasi koneksi maksimal sebanyak 10.",
          starterCode: "// Tulis instance Pool di sini\n",
          language: "text",
          tests: [
            {
              pattern: "const\\s+pool\\s*=\\s*new\\s+Pool\\(\\s*\\{\\s*max\\s*:\\s*10\\s*\\}\\s*\\)\\s*;?",
              message: "Gunakan: const pool = new Pool({ max: 10 });",
            },
          ],
          solution: "const pool = new Pool({ max: 10 });",
        },
        {
          kind: "step",
          id: "sql-8-2",
          title: "Parameterized Query Mencegah SQL Injection",
          explanation:
            "Selalu gunakan variabel terparameter (`$1, $2` atau `?`) agar masukan dari pengguna disanitasi secara terpisah dari sintaks kode perintah SQL.",
          example: {
            code: "const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);",
            output: "Query dieksekusi aman tanpa risiko terinjeksi string berbahaya.",
            note: "Jangan pernah menggabungkan input pengguna menggunakan string concatenation (+ configuration)!",
          },
          instruction:
            "Tulis panggilan pool.query asinkron untuk menyaring data pengguna dari tabel 'users' di mana kolom 'id' sama dengan parameter $1, lalu lewatkan variabel [id] dalam array.",
          starterCode: "// Tulis pool.query terparameter di sini\n",
          language: "text",
          tests: [
            {
              pattern: "await\\s+pool\\.query\\(\\s*['\"]SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+id\\s*=\\s*\\$1['\"]\\s*,\\s*\\[\\s*id\\s*\\]\\s*\\)\\s*;?",
              message: "Gunakan parameterized query $1 dengan array [id]",
            },
          ],
          solution: "await pool.query('SELECT * FROM users WHERE id = $1', [id]);",
        },
        {
          kind: "step",
          id: "sql-8-3",
          title: "Kueri ORM (Prisma / Eloquent) vs Raw SQL",
          explanation:
            "ORM seperti Prisma memberikan kenyamanan Type-safety dan relasi otomatis, sedangkan Raw SQL dibutuhkan ketika mengeksekusi query agregasi complex yang butuh optimasi performa tinggi.",
          example: {
            code:
              "const users = await prisma.user.findMany({\n" +
              '  where: { status: "active" }\n' +
              "});",
            output: "Array berisi daftar objek user ber-status active.",
            note: "Gunakan ORM untuk operasi CRUD harian, dan Raw SQL untuk pelaporan berat.",
          },
          instruction:
            "Gunakan Prisma Client untuk mengambil seluruh data pengguna dari tabel 'user' yang memiliki kolom 'role' bernilai 'admin'.",
          starterCode: "// Tulis query Prisma findMany di sini\n",
          language: "text",
          tests: [
            {
              pattern: "await\\s+prisma\\.user\\.findMany\\(\\s*\\{\\s*where\\s*:\\s*\\{\\s*role\\s*:\\s*['\"]admin['\"]\\s*\\}\\s*\\}\\s*\\)\\s*;?",
              message: 'Gunakan: await prisma.user.findMany({ where: { role: "admin" } });',
            },
          ],
          solution: 'await prisma.user.findMany({ where: { role: "admin" } });',
        },
        {
          kind: "step",
          id: "sql-8-4",
          title: "Mendeteksi & Menghilangkan Masalah N+1",
          explanation:
            "Masalah N+1 terjadi saat aplikasi memanggil 1 query utama lalu mengeksekusi N query tambahan di dalam loop. Selesaikan dengan Eager Loading (JOIN / include).",
          example: {
            code:
              "const usersWithProfile = await prisma.user.findMany({\n" +
              "  include: { profile: true }\n" +
              "});",
            output: "ORM mengeksekusi 1 query gabungan yang efisien tanpa memicu loop N+1.",
            note: "Mencegah ratusan request SQL beruntun ke database server.",
          },
          instruction:
            "Gunakan fitur Eager Loading pada Prisma findMany dengan menambahkan opsi 'include: { posts: true }' untuk mengambil data user beserta post-nya sekaligus.",
          starterCode: "// Tulis query Eager Loading Prisma di sini\n",
          language: "text",
          tests: [
            {
              pattern: "await\\s+prisma\\.user\\.findMany\\(\\s*\\{\\s*include\\s*:\\s*\\{\\s*posts\\s*:\\s*true\\s*\\}\\s*\\}\\s*\\)\\s*;?",
              message: "Gunakan: await prisma.user.findMany({ include: { posts: true } });",
            },
          ],
          solution: "await prisma.user.findMany({ include: { posts: true } });",
        },
        {
          kind: "step",
          id: "sql-8-5",
          title: "Skema Migration di Aplikasi Nyata",
          explanation:
            "Migrasi mengontrol perubahan skema database secara bertahap dan terversi. Perintah `npx prisma migrate deploy` menerapkan migrasi tertunda di server produksi tanpa merusak data.",
          example: {
            code: 'npx prisma migrate dev --name add_profile',
            output: "1 migration created and applied: 20260727_add_profile",
            note: "Jalankan migrate deploy pada langkah deployment CI/CD otomatis.",
          },
          instruction:
            "Ketikkan perintah CLI Prisma untuk mengeksekusi migrasi tertunda pada lingkungan produksi (migrate deploy).",
          starterCode: "# Tulis perintah migrate deploy di sini\n",
          language: "text",
          tests: [
            {
              pattern: "npx\\s+prisma\\s+migrate\\s+deploy",
              message: "Gunakan: npx prisma migrate deploy",
            },
          ],
          solution: "npx prisma migrate deploy",
        },
        {
          kind: "step",
          id: "sql-8-6",
          title: "Diagnosis & Optimasi Query Lambat (EXPLAIN ANALYZE)",
          explanation:
            "Untuk memperbaiki bottleneck query lambat, jalankan perintah `EXPLAIN ANALYZE` di SQL untuk melihat rencana eksekusi (query execution plan) dan biaya waktu per operasi (seq scan vs index scan).",
          example: {
            code: "EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';",
            output: "Index Scan using idx_users_email on users  (cost=0.28..8.29 rows=1 width=128) (actual time=0.015..0.018 ms)",
            note: "Jika melihat 'Seq Scan' pada tabel besar, buatlah Index pada kolom pencarian tersebut.",
          },
          instruction:
            "Tuliskan perintah EXPLAIN ANALYZE untuk menganalisis rencana eksekusi query 'SELECT * FROM orders WHERE user_id = 42;'.",
          starterCode: "-- Tulis perintah EXPLAIN ANALYZE di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "EXPLAIN\\s+ANALYZE\\s+SELECT\\s+\\*\\s+FROM\\s+orders\\s+WHERE\\s+user_id\\s*=\\s*42\\s*;?",
              message: "Gunakan: EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 42;",
            },
          ],
          solution: "EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 42;",
        },
        {
          kind: "quiz",
          id: "sql-8-kuis",
          title: "Kuis: SQL di Aplikasi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Cara paling aman dan ampuh untuk mencegah serangan SQL Injection saat mengeksekusi Raw Query dari aplikasi backend adalah?",
              choices: [
                "Menggunakan Parameterized Query dengan placeholder (seperti $1 atau ?)",
                "Mengubah semua huruf SQL menjadi KAPITAL",
                "Menghapus kata kunci SELECT",
                "Menyimpan password di file TXT",
              ],
              answerIndex: 0,
              explanation: "Parameterized Query memisahkan perintah SQL dan variabel data sehingga input pengguna tidak pernah dievaluasi sebagai kode perintah SQL.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa tujuan utama penggunaan Connection Pool pada aplikasi backend bertrafik tinggi?",
              choices: [
                "Mendaur ulang koneksi database aktif yang ada agar tidak membebankan pembuatan koneksi baru per HTTP request",
                "Mempercepat proses kompilasi kode JavaScript",
                "Menyimpan cache HTML di browser",
                "Menghapus tabel otomatis setiap jam"
              ],
              answerIndex: 0,
              explanation: "Connection Pool mendaur ulang koneksi yang sudah terbuka sehingga server tidak kewalahan dan tidak kehabisan RAM akibat membuka koneksi TCP berulang.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apakah yang dimaksud dengan masalah N+1 dalam konteks penggunaan ORM/Database?",
              choices: [
                "Kondisi saat aplikasi memanggil 1 query utama lalu secara tidak efisien mengeksekusi N query tambahan di dalam loop",
                "Kesalahan tipe data angka yang ditambah 1",
                "Bug di mana database kekurangan 1 kolom",
                "Syntax error pada klausa ORDER BY"
              ],
              answerIndex: 0,
              explanation: "Masalah N+1 terjadi ketika pengambil data relasi dilakukan di dalam perulangan N baris, memicu N+1 kali kueri ke server yang seharusnya cukup diselesaikan dalam 1 kueri JOIN/Eager Loading.",
            },
          ],
        },
      ],
    },
  ],
};
