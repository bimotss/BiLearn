import type { Track } from "@/lib/types";

export const sqlTrack: Track = {
  "slug": "sql",
  "title": "Database & SQL",
  "description": "SQL murni dulu, ORM belakangan. PostgreSQL & MySQL sampai optimasi query.",
  "hours": 90,
  "recommendedPrereqs": [],
  "color": "bg-indigo-600",
  "icon": "\ud83d\uddc4\ufe0f",
  "order": 10,
  "modules": [
    {
      "slug": "persiapan-konsep-select",
      "title": "Persiapan & Konsep SELECT",
      "description": "Berpikir dalam tabel: query pertamamu sampai filter yang presisi.",
      "topics": [
        "Database relasional: tabel, baris, kolom, tipe data",
        "SELECT & FROM: mengambil kolom",
        "WHERE: =, <>, >, <, BETWEEN, IN, LIKE",
        "AND/OR/NOT & urutan evaluasi",
        "ORDER BY & LIMIT/OFFSET",
        "DISTINCT & alias (AS)",
        "NULL: kenapa = NULL tidak jalan (IS NULL)"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-1-m1",
          "title": "Persiapan, Instalasi Database Relasional & Konsep SELECT",
          "body": "# Persiapan, Instalasi Database Relasional & Konsep SELECT\n\nSelamat datang di dunia database relasional! Sebelum kamu menulis kueri pertama, mari kita pahami dulu tempat kerja dan mental model dasarnya.\n\n## 1. Alat Kerja & Panduan Instalasi Per OS\n\nDi dunia nyata, database berjalan di server backend. Namun untuk keperluan belajar dan pengembangan lokal, kamu butuh dua aplikasi: **Database Server** (mesin pengolah data) dan **GUI Client** (aplikasi visual untuk melihat tabel).\n\n### Panduan Instalasi:\n- **macOS:** Gunakan Homebrew via Terminal: `brew install postgresql@16 mysql`. Jalankan service dengan `brew services start postgresql@16`.\n- **Windows:** Unduh installer resmi PostgreSQL dari EnterpriseDB atau MySQL Installer. Centang opsi psql dan pgAdmin 4 / MySQL Workbench.\n- **Linux (Ubuntu/Debian):** `sudo apt update && sudo apt install postgresql postgresql-contrib mysql-server`.\n- **Alternatif Online Tanpa Instalasi:** Kamu bisa menggunakan platform online gratis seperti **DB-Fiddle.com**, **SQLLiteOnline.com**, atau **Supabase.com** untuk langsung mencoba di browser.\n\n### Aplikasi Visual (GUI Client) yang Direkomendasikan:\n1. **DBeaver** (Gratis & Cross-Platform): Mendukung PostgreSQL, MySQL, SQLite, dan MariaDB sekaligus.\n2. **TablePlus** (Ringan & Cepat): Sangat populer di kalangan pengembang macOS & Windows.\n3. **pgAdmin 4** (Khusus PostgreSQL): GUI resmi bawaan PostgreSQL.\n\n---\n\n## 2. Pengertian & Mental Model Database Relasional\n\nMengapa kita tidak menyimpan seluruh data aplikasi di file Microsoft Excel atau Google Sheets saja? \nJawabannya adalah **kecepatan, integritas, dan kapasitas skala**. File Excel akan macet saat membuka jutaan baris data, dan rentan rusak jika diakses secara serentak oleh ribuan pengguna internet.\n\nDatabase Relasional (RDBMS) mengorganisir data dalam bentuk **Tabel** yang terstruktur ketat:\n- **Tabel (Table):** Wadah kategori data spesifik (misal: `users`, `products`, `orders`).\n- **Baris (Row / Tuple):** Satu entitas data tunggal (misal: data diri kamu di tabel `users`).\n- **Kolom (Column / Attribute):** Jenis informasi beserta aturan tipe datanya (misal: `name` ber-tipe VARCHAR, `age` ber-tipe INT).\n\n```text\n+-----------------------------------------------------------------------+\n|                         TABEL DATABASE (users)                        |\n+----+-------------------+-----------------------+----------+-----------+\n| id | nama (VARCHAR)    | email (VARCHAR)       | age (INT)| is_active |\n+----+-------------------+-----------------------+----------+-----------+\n| 1  | Bimo Daffa        | bimo@bilearn.id       | 25       | true      |\n| 2  | Siti Rahma        | siti@bilearn.id       | 22       | true      |\n| 3  | Ahmad Subagja     | ahmad@bilearn.id      | 30       | false     |\n+----+-------------------+-----------------------+----------+-----------+\n```\n\n---\n\n## 3. Analogi Dunia Nyata: Lemari Arsip Digital\n\nBayangkan sebuah lemari arsip besar di kantor:\n- **Database** adalah gedung perpustakaan atau lemari utamanya.\n- **Tabel** adalah laci berlabel khusus (misal: laci \"Karyawan\", laci \"Faktur\").\n- **Kueri SQL** adalah surat perintah resmi kepada petugas arsip: *\"Tolong ambilkan nama dan nomor telepon dari laci Karyawan untuk mereka yang masuk sebelum tahun 2024!\"*\n\n---\n\n## 4. Tabel Rujukan Operator & Klausul SELECT\n\nBerikut adalah klausul dasar yang digunakan saat membaca data (`SELECT`):\n\n| Klausul / Operator | Fungsi Utama | Contoh Penggunaan |\n|---|---|---|\n| `SELECT ... FROM` | Memilih kolom yang ingin ditampilkan | `SELECT name, email FROM users;` |\n| `WHERE` | Memfilter baris berdasarkan kondisi | `WHERE status = 'active'` |\n| `ORDER BY` | Mengurutkan hasil (`ASC` naik, `DESC` turun) | `ORDER BY created_at DESC` |\n| `LIMIT` & `OFFSET` | Membatasi jumlah baris & pagination | `LIMIT 10 OFFSET 20` |\n| `DISTINCT` | Menghilangkan duplikat nilai kolom | `SELECT DISTINCT role FROM users;` |\n| `IS NULL` / `IS NOT NULL` | Mengecek nilai kosong (`NULL`) | `WHERE phone IS NULL` |\n\n---\n\n## 6. Jebakan & Kesalahan Umum Pemula\n\n1. **Jebakan `= NULL`:** Menulis `WHERE phone = NULL` **tidak akan pernah mengembalikan baris apa pun!** Di SQL, `NULL` bermakna \"tidak diketahui\" (unknown). Membandingkan sesuatu dengan sesuatu yang tidak diketahui selalu menghasilkan UNKNOWN/FALSE. Gunakan selalu `IS NULL` atau `IS NOT NULL`.\n2. **`SELECT *` di Lingkungan Produksi:** Kebiasaan mengambil seluruh kolom dengan `SELECT *` sering membawa data biner besar yang tidak dibutuhkan. Hal ini memboroskan bandwidth jaringan dan memori server.\n3. **Lupa `LIMIT` pada Tabel Raksasa:** Menjalankan `SELECT * FROM logs` di tabel ber-isi 50 juta baris bisa membuat server database kamu mengalami crash akibat kehabisan memori.\n\n---\n\n## 7. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Setiap kali kamu membuat fitur membaca data di aplikasi backend (seperti halaman daftar produk, profil pengguna, atau filter data).\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan paling sering untuk level Junior Backend: *\"Mengapa kita harus menghindari `= NULL` dan kapan sebaiknya memakai `SELECT` kolom spesifik daripada `SELECT *`?\"*\n- Senior reviewer di code review akan menolak pull request jika kamu memanggil `SELECT *` di query utama API tanpa pagination (`LIMIT`)."
        },
        {
          "kind": "step",
          "id": "sql-1-1",
          "title": "Konsep Database Relasional",
          "explanation": "Database relasional mengorganisir data dalam bentuk tabel terstruktur yang terdiri dari baris (entitas data) dan kolom (atribut data). Sintaks `SELECT * FROM products` merupakan perintah paling dasar untuk mengambil seluruh data dari tabel `products`. Perintah ini digunakan ketika kamu ingin melihat isi keseluruhan tabel saat pertama kali bereksperimen di lingkungan lokal. Namun, jebakan utamanya adalah menjalankan `SELECT *` pada tabel produksi yang memiliki jutaan baris data, karena dapat melumpuhkan memori server dan memboroskan bandwidth jaringan.",
          "example": {
            "code": "-- Tabel 'users' memuat kolom id, name, email, dan created_at\nSELECT * FROM users;",
            "output": "Seluruh baris dan kolom dari tabel users ditampilkan.",
            "note": "Setiap baris mewakili 1 entitas data tunggal."
          },
          "instruction": "Tulis query SQL sederhana untuk memilih semua data dari tabel `products`.",
          "starterCode": "-- Tulis query SELECT di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+\\*\\s+FROM\\s+products\\s*;?",
              "message": "Gunakan: SELECT * FROM products;"
            }
          ],
          "solution": "SELECT * FROM products;"
        },
        {
          "kind": "step",
          "id": "sql-1-2",
          "title": "SELECT Kolom Spesifik & Alias (AS)",
          "explanation": "Memilih kolom spesifik seperti `SELECT name, email` memberitahu mesin database untuk hanya mengambil data dari kolom yang benar-benar dibutuhkan oleh aplikasi. Kamu juga dapat menggunakan kata kunci `AS` untuk membuat nama alias kolom agar respon data lebih mudah dibaca oleh frontend. Teknik ini selalu digunakan pada pembuatan API backend agar payload JSON tetap ringan dan efisien. Jebakan umum pemula adalah lupa memisahkan antar kolom dengan tanda koma `,` atau keliru menuliskan nama kolom sehingga memicu error `column does not exist`.",
          "example": {
            "code": "SELECT name AS nama_produk, price AS harga FROM products;",
            "output": "Tabel hasil menampilkan nama header 'nama_produk' dan 'harga'.",
            "note": "Alias memperjelas nama kolom pada laporan respon JSON."
          },
          "instruction": "Tulis query memilih kolom `name` dan `email` dari tabel `users`.",
          "starterCode": "-- Tulis query SELECT kolom di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+name\\s*,\\s*email\\s+FROM\\s+users\\s*;?",
              "message": "Gunakan: SELECT name, email FROM users;"
            }
          ],
          "solution": "SELECT name, email FROM users;"
        },
        {
          "kind": "step",
          "id": "sql-1-3",
          "title": "Filtering Baris dengan Klausul WHERE",
          "explanation": "Klausul `WHERE` berfungsi menyaring baris data berdasarkan kriteria atau kondisi tertentu seperti perbandingan angka atau teks. Menggunakan `WHERE price = 10000` akan membatasi data yang dikembalikan hanya pada produk bernilai tepat 10.000. Klausul filter ini digunakan pada hampir semua fitur aplikasi seperti pencarian barang, filter status transaksi, atau autentikasi pengguna. Jebakan yang sering terjadi adalah lupa kalau perbandingan string bersifat sensitif terhadap huruf besar dan kecil (case-sensitive) pada beberapa mesin database seperti PostgreSQL.",
          "example": {
            "code": "SELECT * FROM products WHERE price > 50000;",
            "output": "Halaman hanya menampilkan produk yang harganya di atas 50.000.",
            "note": "Operator LIKE 'B%' mencari string yang diawali huruf 'B'."
          },
          "instruction": "Tulis perintah untuk mencari produk yang nilai harganya persis sama dengan 10000.",
          "starterCode": "-- Tulis query WHERE di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+\\*\\s+FROM\\s+products\\s+WHERE\\s+price\\s*=\\s*10000\\s*;?",
              "message": "Gunakan: SELECT * FROM products WHERE price = 10000;"
            }
          ],
          "solution": "SELECT * FROM products WHERE price = 10000;"
        },
        {
          "kind": "step",
          "id": "sql-1-4",
          "title": "Kombinasi Kondisi AND, OR, dan NOT",
          "explanation": "Operator logika `AND`, `OR`, dan `NOT` memungkinkan kamu menggabungkan beberapa kriteria filter dalam satu kueri SQL. Menggunakan `AND` menuntut semua kondisi harus bernilai benar (`TRUE`), sedangkan `OR` hanya membutuhkan salah satu kondisi bernilai benar. Kombinasi ini sangat sering digunakan untuk memfilter akun pengguna berdasarkan peran sekaligus status aktifnya di sistem backend. Jebakan klasik pemula adalah tidak menggunakan tanda kurung `()` saat menggabungkan `AND` dan `OR` bersamaan, sehingga urutan evaluasi logika menjadi acak dan menghasilkan data yang salah.",
          "example": {
            "code": "SELECT * FROM users WHERE status = 'active' AND age >= 18;",
            "output": "Hanya mengembalikan user aktif yang berumur 18 tahun ke atas.",
            "note": "Gunakan tanda kurung () untuk memperjelas prioritas evaluasi logika OR/AND."
          },
          "instruction": "Ketikkan query untuk memfilter pengguna yang berstatus 'active' sekaligus berperan sebagai 'admin'.",
          "starterCode": "-- Tulis query AND di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+status\\s*=\\s*['\"]active['\"]\\s+AND\\s+role\\s*=\\s*['\"]admin['\"]\\s*;?",
              "message": "Gunakan: SELECT * FROM users WHERE status = 'active' AND role = 'admin';"
            }
          ],
          "solution": "SELECT * FROM users WHERE status = 'active' AND role = 'admin';"
        },
        {
          "kind": "step",
          "id": "sql-1-5",
          "title": "Pengurutan ORDER BY & Pembatasan LIMIT/OFFSET",
          "explanation": "Klausul `ORDER BY` mengurutkan baris data secara menaik (`ASC`) atau menurun (`DESC`), sementara `LIMIT` membatasi jumlah maksimum baris yang dikembalikan. Menggabungkan `ORDER BY created_at DESC LIMIT 10` memungkinkan aplikasi kamu mengambil 10 pengguna atau artikel terbaru secara instan. Fitur ini wajib digunakan pada setiap sistem yang menerapkan halaman daftar data (pagination) agar tidak membebankan server. Jebakan yang sering membingungkan adalah lupa bahwa `ORDER BY` selalu dieksekusi sebelum `LIMIT`, sehingga mengurutkan tabel besar tanpa indeks pada kolom pengurut akan memicu perkalian waktu eksekusi.",
          "example": {
            "code": "SELECT * FROM products ORDER BY price DESC LIMIT 5;",
            "output": "Mengembalikan 5 produk termahal.",
            "note": "Gunakan OFFSET 10 untuk melompati 10 baris pertama saat pagination."
          },
          "instruction": "Ambil 10 pengguna terbaru dengan mengurutkan kolom created_at secara menurun.",
          "starterCode": "-- Tulis query ORDER BY & LIMIT di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+\\*\\s+FROM\\s+users\\s+ORDER\\s+BY\\s+created_at\\s+DESC\\s+LIMIT\\s+10\\s*;?",
              "message": "Gunakan: SELECT * FROM users ORDER BY created_at DESC LIMIT 10;"
            }
          ],
          "solution": "SELECT * FROM users ORDER BY created_at DESC LIMIT 10;"
        },
        {
          "kind": "step",
          "id": "sql-1-6",
          "title": "Menghilangkan Duplikat dengan DISTINCT",
          "explanation": "Kata kunci `DISTINCT` mengeliminasi seluruh baris nilai duplikat sehingga hanya mengembalikan daftar nilai yang unik dari kolom yang dipilih. Kueri `SELECT DISTINCT role FROM users` akan menampilkan jenis-jenis peran pengguna tanpa mengulang nilai yang sama berkali-kali. Fitur ini sangat berguna saat kamu ingin membuat daftar pilihan dropdown di UI frontend seperti kategori produk atau status transaksi. Jebakan utamanya adalah memasukkan terlalu banyak kolom ke dalam `DISTINCT`, karena database harus melakukan sorting di memori untuk menemukan kombinasi unik yang menyebabkan penurunan performa.",
          "example": {
            "code": "SELECT DISTINCT category FROM products;",
            "output": " kategori\n----------\n Minuman\n Makanan\n Elektronik\n(3 rows)",
            "note": "Bisa digunakan pada satu atau beberapa kolom sekaligus."
          },
          "instruction": "Ketikkan query untuk menampilkan daftar peran yang unik dari tabel pengguna.",
          "starterCode": "-- Tulis query DISTINCT di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+DISTINCT\\s+role\\s+FROM\\s+users\\s*;?",
              "message": "Gunakan: SELECT DISTINCT role FROM users;"
            }
          ],
          "solution": "SELECT DISTINCT role FROM users;"
        },
        {
          "kind": "step",
          "id": "sql-1-7",
          "title": "Pengecekan Nilai Kosong (IS NULL / IS NOT NULL)",
          "explanation": "Di SQL, nilai `NULL` mewakili data yang tidak diketahui atau belum diisi, sehingga nilainya tidak sama dengan angka nol `0` maupun string kosong `''`. Karena wujudnya tidak diketahui, kamu tidak boleh membandingkan nilai kosong menggunakan `= NULL` melainkan wajib menggunakan operator khusus `IS NULL` atau `IS NOT NULL`. Operator ini sangat vital saat kamu ingin mencari baris transaksi yang belum dibayar atau pengguna yang belum melakukan verifikasi email. Jebakan terbesar pemula adalah tetap menggunakan `WHERE paid_at = NULL` yang secara konsisten menghasilkan nilai `FALSE` tanpa mengembalikan baris data apa pun.",
          "example": {
            "code": "SELECT * FROM users WHERE deleted_at IS NULL;",
            "output": "Mengembalikan user yang belum pernah dihapus.",
            "note": "Ekspresi = NULL di SQL selalu mengembalikan FALSE/UNKNOWN."
          },
          "instruction": "Tampilkan seluruh pesanan yang nilai waktu pembayarannya tidak kosong (sudah dibayar).",
          "starterCode": "-- Tulis query IS NOT NULL di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+\\*\\s+FROM\\s+orders\\s+WHERE\\s+paid_at\\s+IS\\s+NOT\\s+NULL\\s*;?",
              "message": "Gunakan: SELECT * FROM orders WHERE paid_at IS NOT NULL;"
            }
          ],
          "solution": "SELECT * FROM orders WHERE paid_at IS NOT NULL;"
        },
        {
          "kind": "quiz",
          "id": "sql-1-kuis",
          "title": "Kuis: Konsep Database & SELECT",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Mengapa klausa `= NULL` tidak akan pernah menghasilkan data pada query SQL?",
              "choices": [
                "Karena NULL di SQL berarti data tidak diketahui (Unknown), sehingga wajib diperiksa dengan `IS NULL`",
                "Karena NULL adalah kata terlarang",
                "Karena NULL hanya bisa dibaca oleh Python",
                "Karena NULL bernilai angka nol"
              ],
              "answerIndex": 0,
              "explanation": "NULL berarti 'nilainya tidak diketahui', bukan nol dan bukan string kosong. Membandingkan sesuatu yang tidak diketahui dengan nilai apa pun hasilnya juga tidak diketahui \u2014 bukan TRUE \u2014 sehingga barisnya tidak pernah lolos filter. Karena itu SQL menyediakan operator khusus IS NULL dan IS NOT NULL."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Atasanmu minta daftar 10 produk termahal dari tabel `products`. Query mana yang benar?",
              "choices": [
                "SELECT * FROM products LIMIT 10 ORDER BY price DESC;",
                "SELECT * FROM products ORDER BY price DESC LIMIT 10;",
                "SELECT TOP 10 * FROM products ORDER BY price;",
                "SELECT * FROM products WHERE price = MAX(price) LIMIT 10;"
              ],
              "answerIndex": 1,
              "explanation": "Urutannya tetap: ORDER BY dulu, baru LIMIT. Database mengurutkan seluruh baris lebih dulu, baru memotong 10 teratas \u2014 kalau LIMIT ditulis duluan, sintaksnya error di MySQL maupun PostgreSQL. Kata kunci DESC dipakai karena termahal berarti dari besar ke kecil; tanpa DESC kamu justru mendapat 10 termurah."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Tabel `customers` punya 5.000 baris dan banyak pelanggan berasal dari kota yang sama. Kamu butuh daftar nama kota tanpa pengulangan. Query mana yang tepat?",
              "choices": [
                "SELECT city FROM customers;",
                "SELECT DISTINCT city FROM customers;",
                "SELECT city FROM customers GROUP BY id;",
                "SELECT UNIQUE(city) FROM customers;"
              ],
              "answerIndex": 1,
              "explanation": "DISTINCT membuang baris kembar dari hasil query sehingga setiap kota hanya muncul sekali. SELECT city biasa mengembalikan 5.000 baris penuh pengulangan, dan UNIQUE() bukan fungsi SQL standar. Alternatif yang juga benar adalah GROUP BY city \u2014 biasanya dipakai kalau kamu sekaligus ingin menghitung jumlah pelanggan per kota."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Fitur pencarian pelanggan harus menemukan semua nama yang diawali huruf 'Bu' (Budi, Budiman, Bunga). Kondisi WHERE mana yang tepat?",
              "choices": [
                "WHERE name = 'Bu'",
                "WHERE name LIKE 'Bu%'",
                "WHERE name LIKE '%Bu'",
                "WHERE name IN ('Bu')"
              ],
              "answerIndex": 1,
              "explanation": "Operator LIKE dipakai untuk pencocokan pola, dan tanda % berarti 'karakter apa pun, sebanyak apa pun'. Karena % ditaruh di belakang, polanya berarti diawali 'Bu'. Kalau % ditaruh di depan artinya justru diakhiri 'Bu', sedangkan = 'Bu' hanya cocok untuk nama yang persis dua huruf itu."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Query ini seharusnya mengambil buku ATAU alat tulis yang stoknya masih ada, tapi hasilnya ikut memuat buku berstok 0. Kenapa?",
              "code": "SELECT * FROM products\nWHERE kategori = 'buku' OR kategori = 'alat tulis' AND stok > 0;",
              "choices": [
                "Karena OR tidak boleh dipakai bersama AND",
                "Karena AND dievaluasi lebih dulu daripada OR, sehingga syarat stok hanya berlaku untuk 'alat tulis'",
                "Karena kolom stok bertipe angka",
                "Karena SELECT * tidak boleh dipakai bersama WHERE"
              ],
              "answerIndex": 1,
              "explanation": "AND punya prioritas lebih tinggi daripada OR, jadi query itu dibaca sebagai kategori = 'buku' OR (kategori = 'alat tulis' AND stok > 0). Semua buku ikut lolos tanpa memandang stok. Perbaikannya: bungkus bagian OR dengan tanda kurung. Bug senyap seperti ini tidak memunculkan error dan sering lolos sampai production."
            }
          ]
        }
      ]
    },
    {
      "slug": "join",
      "title": "Relasi & JOIN",
      "description": "Materi interview SQL paling sering keluar \u2014 kuasai sampai bisa menggambar diagramnya.",
      "topics": [
        "Primary key & foreign key",
        "INNER JOIN: irisan dua tabel",
        "LEFT/RIGHT JOIN & baris NULL",
        "Join lebih dari dua tabel",
        "Self join (karyawan \u2192 atasan)",
        "Many-to-many & junction table",
        "Latihan: menulis join dari pertanyaan bisnis nyata"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-2-m1",
          "title": "Relasi Antar Tabel & Operasi JOIN",
          "body": "# Relasi Antar Tabel & Operasi JOIN\n\nPada modul ini kamu akan mempelajari jantung dari Database Relasional: menghubungkan data antar tabel menggunakan operasi **JOIN**.\n\n## 1. Pengertian Relasi, Primary Key, dan Foreign Key\n\nDi dalam database profesional, kita tidak pernah menumpuk semua data dalam satu tabel raksasa (seperti menaruh nama pembeli, alamat, barang, dan harga di satu tabel `pesanan`). Cara tersebut menyebabkan duplikat data massal dan boros penyimpanan. Sebagai gantinya, data dipecah menjadi beberapa tabel dan dihubungkan via kunci relasi:\n- **Primary Key (PK):** Kolom kunci unik pengenal baris pada tabel asal (contoh: `users.id`).\n- **Foreign Key (FK):** Kolom di tabel lain yang menunjuk/merujuk ke Primary Key tabel asal (contoh: `orders.user_id`).\n\n```text\n+---------------------+           +----------------------------------+\n|    TABEL users      |           |          TABEL orders            |\n+---------------------+           +----------------------------------+\n| id (PK) | nama      | <-------+ | id (PK) | user_id (FK) | total   |\n+---------+-----------+         | +---------+--------------+---------+\n| 1       | Bimo      |         +-| 101     | 1            | 150000  |\n| 2       | Rahma     |           | 102     | 1            |  75000  |\n+---------+-----------+           +----------------------------------+\n```\n\n---\n\n## 2. Peta Jenis-Jenis JOIN & Visualisasi Venn\n\n```text\n  INNER JOIN                LEFT JOIN                 RIGHT JOIN\n  +---+   +---+             +---+   +---+             +---+   +---+\n  | A |###| B |             |###|###| B |             | A |###|###|\n  |   |###|   |             |###|###|   |             |   |###|###|\n  +---+   +---+             +---+   +---+             +---+   +---+\n (Hanya Irisan)            (Semua A + Irisan B)      (Semua B + Irisan A)\n```\n\n| Jenis JOIN | Perilaku & Hasil | Kapan Dipakai |\n|---|---|---|\n| `INNER JOIN` | Hanya mengembalikan baris yang memiliki pasangan cocok di kedua tabel | Menampilkan pesanan yang dipastikan punya data pembeli valid |\n| `LEFT JOIN` | Mengembalikan SELURUH baris dari tabel kiri, plus data kanan jika ada (jika tidak, diisi `NULL`) | Menampilkan seluruh pengguna, termasuk yang belum pernah berbelanja |\n| `RIGHT JOIN` | Mengembalikan SELURUH baris dari tabel kanan | Jarang dipakai; biasanya ditulis ulang sebagai `LEFT JOIN` agar mudah dibaca |\n| `FULL OUTER JOIN` | Mengembalikan seluruh baris dari kedua tabel, mengisi `NULL` jika tidak cocok | Analisis rekonsiliasi data audit |\n| `CROSS JOIN` | Perkalian kartesian (setiap baris A digabung dengan setiap baris B) | Memuat matriks varian produk (ukuran x warna) |\n\n---\n\n## 3. Analogi Dunia Nyata: Buku Tamu & Struk Parkir\n\nBayangkan kamu memiliki **Buku Tamu** (Tabel A) dan **Struk Tiket Parkir** (Tabel B):\n- `INNER JOIN` mengambil daftar pengunjung yang stempel buku tamunya cocok dengan struk parkir.\n- `LEFT JOIN` mengambil seluruh nama di buku tamu; jika ia naik angkutan umum (tidak ada struk parkir), kolom parkirnya diisi \"Kosong / NULL\".\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **Lupa Klausul `ON`:** Menulis `SELECT * FROM users JOIN orders;` tanpa `ON users.id = orders.user_id` akan menghasilkan **Cartesian Product (CROSS JOIN)**. Jika `users` ber-isi 10.000 baris dan `orders` 10.000 baris, kuerimu akan menghasilkan 100 JUTA BARIS data palsu yang melumpuhkan server!\n2. **Salah Memilih `INNER JOIN` vs `LEFT JOIN`:** Menggunakan `INNER JOIN` untuk laporan daftar pengguna akan menyembunyikan pengguna baru yang belum punya transaksi. Akibatnya, angka total pengguna di laporan terlihat salah.\n3. **Ambiguity Column Error:** Lupa memberi alias tabel pada kolom ber-nama sama di kedua tabel (seperti `id` atau `created_at`) sehingga SQL melempar error `column reference 'id' is ambiguous`.\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Hampir di setiap fitur API backend! Contoh: menampilkan halaman detail pesanan e-commerce (menggabungkan data `orders`, `users`, `shipping_addresses`, dan `order_items`).\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan favorit interviewer: *\"Jelaskan skenario bisnis nyata di mana kamu HARUS memilih `LEFT JOIN` daripada `INNER JOIN`!\"*\n- Senior developer di code review selalu memeriksa apakah kamu menggunakan alias tabel yang konsisten (misal `u` untuk `users`, `o` untuk `orders`) demi keterbacaan kode team."
        },
        {
          "kind": "step",
          "id": "sql-2-1",
          "title": "Primary Key vs Foreign Key",
          "explanation": "Operasi `INNER JOIN` menggabungkan baris dari dua tabel terpisah berdasarkan nilai kolom kunci yang cocok di kedua tabel. Menggabungkan tabel `orders` dan `users` dengan `ON orders.user_id = users.id` akan menampilkan detail pesanan lengkap beserta nama pemiliknya. Perintah ini digunakan saat kamu ingin memastikan bahwa data transaksi yang ditampilkan benar-benar memiliki relasi entitas pengguna yang valid. Jebakan yang sering dialami pemula adalah mengabaikan klausa `ON`, yang mengakibatkan perkalian kartesian (CROSS JOIN) di mana setiap baris tabel A digabungkan dengan seluruh baris tabel B.",
          "example": {
            "code": "CREATE TABLE orders (\n  id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);",
            "output": "Tabel orders dibuat dengan foreign key.",
            "note": "FK menjamin integritas referensial data."
          },
          "instruction": "Buat tabel `profiles` yang memiliki kolom `id` bertipe INT sebagai primary key dan kolom `user_id` bertipe INT sebagai foreign key yang merujuk ke tabel `users` kolom `id`.",
          "starterCode": "-- Tulis query di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+TABLE\\s+profiles\\s*\\([\\s\\S]*?id\\s+INT\\s+PRIMARY\\s+KEY[\\s\\S]*?user_id\\s+INT[\\s\\S]*?FOREIGN\\s+KEY\\s*\\(\\s*user_id\\s*\\)\\s+REFERENCES\\s+users\\s*\\(\\s*id\\s*\\)[\\s\\S]*?\\)\\s*;",
              "message": "Gunakan CREATE TABLE profiles dengan PRIMARY KEY dan FOREIGN KEY yang benar"
            }
          ],
          "solution": "CREATE TABLE profiles (\n  id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);"
        },
        {
          "kind": "step",
          "id": "sql-2-2",
          "title": "INNER JOIN: Irisan Dua Tabel",
          "explanation": "Klausul `LEFT JOIN` (atau `LEFT OUTER JOIN`) mengembalikan seluruh baris dari tabel sebelah kiri, ditambah baris cocok dari tabel kanan jika ada. Apabila baris di tabel kanan tidak memiliki relasi yang cocok, maka kolom dari tabel kanan akan diisi dengan nilai `NULL`. Teknik ini sangat cocok dipakai untuk membuat laporan daftar seluruh pengguna aplikasi beserta riwayat belanjanya, termasuk pengguna baru yang belum pernah berbelanja. Jebakan utamanya adalah keliru menukar posisi tabel kiri dan kanan, sehingga data utama yang ingin dipertahankan justru tereliminasi dari hasil kueri.",
          "example": {
            "code": "SELECT orders.id, users.name\nFROM orders\nINNER JOIN users ON orders.user_id = users.id;",
            "output": " id | user_nama | total\n----+-----------+--------\n  1 | Ana       |  50000\n  2 | Budi      |  75000\n(2 rows)",
            "note": "Baris order yang tidak memiliki user_id tidak akan muncul di hasil query."
          },
          "instruction": "Gunakan INNER JOIN untuk mengambil ID pesanan dan nama pengguna yang sesuai.",
          "starterCode": "-- Tulis query INNER JOIN di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+orders\\.id\\s*,\\s*users\\.name\\s+FROM\\s+orders\\s+INNER\\s+JOIN\\s+users\\s+ON\\s+orders\\.user_id\\s*=\\s*users\\.id\\s*;?",
              "message": "Gunakan: SELECT orders.id, users.name FROM orders INNER JOIN users ON orders.user_id = users.id;"
            }
          ],
          "solution": "SELECT orders.id, users.name FROM orders INNER JOIN users ON orders.user_id = users.id;"
        },
        {
          "kind": "step",
          "id": "sql-2-3",
          "title": "LEFT JOIN & Baris NULL",
          "explanation": "Dalam aplikasi bisnis nyata, data sering kali tersebar di lebih dari dua tabel yang saling berhubungan. Kamu dapat menyambungkan tiga tabel atau lebih dengan menumpuk klausul `JOIN` secara berurutan, seperti menggabungkan `orders`, `users`, dan `payments`. Pola ini digunakan untuk membangun respon API komplek seperti lembar faktur belanja atau rincian pengiriman barang. Jebakan yang perlu diwaspadai adalah penurunan performa kueri secara drastis jika salah satu tabel relasi tidak memiliki indeks pada kolom Foreign Key nya.",
          "example": {
            "code": "SELECT users.name, orders.id\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;",
            "output": "Semua user muncul, termasuk user yang belum pernah membuat order (orders.id = NULL).",
            "note": "Sangat berguna untuk mencari data yang belum memiliki relasi."
          },
          "instruction": "Gunakan LEFT JOIN untuk menampilkan nama pengguna dan ID pesanannya. Pastikan pengguna tanpa pesanan tetap muncul.",
          "starterCode": "-- Tulis query LEFT JOIN di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+users\\.name\\s*,\\s*orders\\.id\\s+FROM\\s+users\\s+LEFT\\s+JOIN\\s+orders\\s+ON\\s+users\\.id\\s*=\\s*orders\\.user_id\\s*;?",
              "message": "Gunakan query LEFT JOIN sesuai instruksi"
            }
          ],
          "solution": "SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;"
        },
        {
          "kind": "step",
          "id": "sql-2-4",
          "title": "JOIN Lebih dari 2 Tabel",
          "explanation": "Memberikan nama alias pada tabel (seperti `users u` atau `orders o`) menyederhanakan penulisan nama kolom dan menghindarkan error ambiguitas. Ketika dua tabel memiliki nama kolom yang sama (misalnya `id` atau `created_at`), kamu wajib menentukan tabel asalnya seperti `u.id` atau `o.id`. Praktik ini selalu diterapkan pada penulisan kueri SQL profesional demi keterbacaan kode tim. Jebakan umum pemula adalah lupa menyertakan alias pada klausul `SELECT` atau `WHERE`, yang menyebabkan mesin database bingung membedakan kolom mana yang dimaksud.",
          "example": {
            "code": "SELECT orders.id, users.name, products.title\nFROM orders\nJOIN users ON orders.user_id = users.id\nJOIN products ON orders.product_id = products.id;",
            "output": "Menggabungkan rincian order, nama pembeli, dan judul produk sekaligus.",
            "note": "Perhatikan urutan join dan kesesuaian foreign key."
          },
          "instruction": "Lengkapi dengan klausa JOIN ke tabel produk berdasarkan product_id pada tabel pesanan.",
          "starterCode": "-- Tulis klausa JOIN kedua di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "JOIN\\s+products\\s+ON\\s+orders\\.product_id\\s*=\\s*products\\.id",
              "message": "Tuliskan: JOIN products ON orders.product_id = products.id"
            }
          ],
          "solution": "JOIN products ON orders.product_id = products.id"
        },
        {
          "kind": "step",
          "id": "sql-2-5",
          "title": "Self JOIN (Menggabungkan Tabel dengan Dirinya Sendiri)",
          "explanation": "Menggabungkan `LEFT JOIN` dengan filter `WHERE ... IS NULL` adalah teknik efektif untuk menemukan \"data yatim piatu\" atau entitas yang tidak memiliki pasangan relasi. Kueri `SELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.id IS NULL` akan mencari pengguna yang belum pernah melakukan pembelian. Skenario ini sangat berguna untuk fitur pemasaran seperti pengiriman email penawaran khusus bagi akun pasif. Jebakan yang sering dialami adalah meletakkan filter kondisi di klausul `WHERE` yang secara tidak sengaja mengubah sifat `LEFT JOIN` menjadi `INNER JOIN`.",
          "example": {
            "code": "SELECT e.name AS emp, m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;",
            "output": "Menampilkan daftar pegawai beserta nama atasannya dari tabel yang sama.",
            "note": "Berikan alias tabel berbeda (e dan m) untuk membedakan perannya."
          },
          "instruction": "Lakukan LEFT JOIN dari tabel employees dengan dirinya sendiri untuk menghubungkan manajer (m) dengan pegawai (e).",
          "starterCode": "-- Tulis Self JOIN di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "LEFT\\s+JOIN\\s+employees\\s+m\\s+ON\\s+e\\.manager_id\\s*=\\s*m\\.id",
              "message": "Gunakan: LEFT JOIN employees m ON e.manager_id = m.id"
            }
          ],
          "solution": "LEFT JOIN employees m ON e.manager_id = m.id"
        },
        {
          "kind": "step",
          "id": "sql-2-6",
          "title": "Many-to-Many & Junction Table",
          "explanation": "Operasi `Self JOIN` adalah teknik menggabungkan suatu tabel dengan dirinya sendiri menggunakan dua nama alias yang berbeda. Teknik ini sangat ideal digunakan untuk mengelola data berstruktur hirarki dalam satu tabel, seperti menentukan manajer dari seorang karyawan atau kategori induk dari sub-kategori produk. Kamu menganggap tabel pertama sebagai anak (`e`) dan tabel kedua sebagai atasan (`m`) yang dihubungkan melalui `ON e.manager_id = m.id`. Jebakan utamanya adalah tidak menggunakan `LEFT JOIN` pada Self JOIN, yang akan menyembunyikan posisi teratas (seperti CEO) karena tidak memiliki atasan.",
          "example": {
            "code": "CREATE TABLE student_courses (\n  student_id INT,\n  course_id INT,\n  FOREIGN KEY (student_id) REFERENCES students(id),\n  FOREIGN KEY (course_id) REFERENCES courses(id)\n);",
            "output": "Tabel perantara berhasil dibuat.",
            "note": "Junction table menyimpan pasangan id dari tabel yang direlasikan."
          },
          "instruction": "Buat junction table `book_authors` untuk menghubungkan tabel `books` dan `authors`. Tabel ini harus memiliki kolom `book_id` (INT) dan `author_id` (INT) beserta foreign key-nya.",
          "starterCode": "-- Tulis query pembuatan tabel perantara di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+TABLE\\s+book_authors\\s*\\([\\s\\S]*?book_id\\s+INT[\\s\\S]*?author_id\\s+INT[\\s\\S]*?FOREIGN\\s+KEY\\s*\\(\\s*book_id\\s*\\)\\s+REFERENCES\\s+books\\s*\\(\\s*id\\s*\\)[\\s\\S]*?FOREIGN\\s+KEY\\s*\\(\\s*author_id\\s*\\)\\s+REFERENCES\\s+authors\\s*\\(\\s*id\\s*\\)[\\s\\S]*?\\)\\s*;",
              "message": "Gunakan CREATE TABLE book_authors dengan book_id dan author_id sebagai FK"
            }
          ],
          "solution": "CREATE TABLE book_authors (\n  book_id INT,\n  author_id INT,\n  FOREIGN KEY (book_id) REFERENCES books(id),\n  FOREIGN KEY (author_id) REFERENCES authors(id)\n);"
        },
        {
          "kind": "step",
          "id": "sql-2-7",
          "title": "Studi Kasus Pertanyaan Bisnis Nyata",
          "explanation": "Operator `UNION` dan `UNION ALL` digunakan untuk menggabungkan set baris hasil dari dua atau lebih kueri `SELECT` menjadi satu daftar vertikal. Perbedaan utamanya adalah `UNION` akan mengeliminasi baris duplikat di antara kueri, sedangkan `UNION ALL` menggabungkan seluruh baris secara langsung dengan performa lebih cepat. Operator ini berguna saat kamu ingin menggabungkan daftar kontak dari tabel pelanggan dan tabel vendor dalam satu laporan. Jebakan utamanya adalah jumlah dan tipe data kolom dari seluruh kueri `SELECT` yang di-UNION wajib persis sama dan berurutan.",
          "example": {
            "code": "SELECT c.name\nFROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id\nWHERE o.id IS NULL;",
            "output": "Daftar pelanggan pasif berhasil diisolasi.",
            "note": "Pola LEFT JOIN + WHERE IS NULL sangat ampuh untuk analisis data bisnis."
          },
          "instruction": "Saring hasil query tersebut untuk hanya menyisakan data di mana ID pesanan bernilai NULL.",
          "starterCode": "-- Tulis WHERE IS NULL di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WHERE\\s+orders\\.id\\s+IS\\s+NULL\\s*;?",
              "message": "Tuliskan: WHERE orders.id IS NULL;"
            }
          ],
          "solution": "WHERE orders.id IS NULL;"
        },
        {
          "kind": "quiz",
          "id": "sql-2-kuis",
          "title": "Kuis: Relasi & JOIN",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Jenis JOIN apa yang mengembalikan SELURUH baris dari tabel sebelah kiri, meskipun tidak ada pasangan data yang cocok di tabel kanan?",
              "choices": [
                "INNER JOIN",
                "LEFT JOIN",
                "RIGHT JOIN",
                "FULL JOIN"
              ],
              "answerIndex": 1,
              "explanation": "LEFT JOIN mempertahankan seluruh baris tabel kiri dan mengisi NULL pada kolom kanan yang tidak berpasangan. Ini yang kamu pakai saat ingin 'semua pelanggan, beserta pesanannya kalau ada'. INNER JOIN akan diam-diam membuang pelanggan yang belum pernah memesan."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Tabel `orders` punya kolom `user_id` yang menunjuk ke kolom `id` di tabel `users`. Apa sebutan kolom itu, dan apa untungnya dideklarasikan resmi ke database?",
              "choices": [
                "Primary key \u2014 agar setiap pesanan punya identitas unik",
                "Foreign key \u2014 database ikut menolak pesanan yang menunjuk user tidak ada",
                "Index \u2014 semata-mata agar query lebih cepat",
                "Alias \u2014 supaya nama kolom lebih pendek"
              ],
              "answerIndex": 1,
              "explanation": "Kolom yang menunjuk ke primary key tabel lain disebut foreign key. Kalau dideklarasikan dengan FOREIGN KEY (user_id) REFERENCES users(id), database ikut menjaga integritas data: pesanan dengan user_id yang tidak ada akan ditolak, dan user yang masih punya pesanan tidak bisa dihapus sembarangan. Tanpa itu, data yatim bisa masuk tanpa ketahuan."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Laporan penjualan memakai `orders INNER JOIN users`. Ada 120 pesanan, 8 di antaranya dari akun tamu sehingga `user_id`-nya NULL. Berapa baris yang muncul di laporan?",
              "choices": [
                "120 baris, karena INNER JOIN mengambil semua pesanan",
                "112 baris, karena pesanan tanpa pasangan di tabel users tidak ikut",
                "128 baris",
                "0 baris, karena ada NULL"
              ],
              "answerIndex": 1,
              "explanation": "INNER JOIN hanya mengembalikan baris yang punya pasangan di KEDUA tabel, jadi 8 pesanan tamu itu hilang dari laporan tanpa peringatan apa pun dan angka penjualanmu jadi lebih kecil dari kenyataan. Kalau semua pesanan harus ikut, pakai LEFT JOIN dari orders."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Tim marketing minta daftar pelanggan yang BELUM PERNAH memesan sama sekali. Pola query mana yang tepat?",
              "choices": [
                "INNER JOIN orders lalu WHERE orders.id IS NULL",
                "LEFT JOIN orders lalu WHERE orders.id IS NULL",
                "RIGHT JOIN orders lalu WHERE customers.id IS NULL",
                "INNER JOIN orders lalu ORDER BY orders.id"
              ],
              "answerIndex": 1,
              "explanation": "Polanya disebut anti-join: LEFT JOIN membawa semua pelanggan, lalu pelanggan tanpa pasangan pesanan akan berkolom NULL \u2014 itulah yang disaring dengan WHERE orders.id IS NULL. INNER JOIN mustahil dipakai di sini karena ia justru membuang pelanggan tanpa pesanan sejak awal."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Satu buku bisa ditulis banyak penulis, dan satu penulis bisa menulis banyak buku. Bagaimana relasi ini dimodelkan dengan benar?",
              "choices": [
                "Tambah kolom author_id di tabel books",
                "Tambah kolom book_id di tabel authors",
                "Buat tabel perantara book_authors berisi book_id dan author_id",
                "Simpan daftar nama penulis dalam satu kolom teks dipisah koma"
              ],
              "answerIndex": 2,
              "explanation": "Relasi many-to-many butuh junction table yang menyimpan pasangan id dari kedua sisi. Satu kolom author_id di books hanya memuat satu penulis per buku, sedangkan menyimpan nama dipisah koma membuat data mustahil di-JOIN, difilter, atau dihitung \u2014 pelanggaran bentuk normal pertama yang sering ditemukan di database warisan."
            }
          ]
        }
      ]
    },
    {
      "slug": "agregasi",
      "title": "Agregasi & Subquery",
      "description": "Dari data mentah ke jawaban bisnis: total, rata-rata, dan pengelompokan.",
      "topics": [
        "COUNT, SUM, AVG, MIN, MAX",
        "GROUP BY: aturan emas kolom yang boleh di-SELECT",
        "HAVING vs WHERE",
        "Subquery di WHERE, FROM, SELECT",
        "CTE (WITH): query kompleks yang tetap terbaca",
        "CASE WHEN untuk kategorisasi",
        "Window function dasar: ROW_NUMBER, RANK, running total"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-3-m1",
          "title": "Fungsi Agregasi, Grouping & Subquery",
          "body": "# Fungsi Agregasi, Grouping & Subquery\n\nModul ini membahas cara meringkas ribuan baris data menjadi informasi statistik bisnis serta memanfaatkan kueri di dalam kueri (Subquery).\n\n## 1. Pengertian Fungsi Agregasi & GROUP BY\n\nDalam sistem analitik, manajemen tidak butuh melihat 500.000 transaksi satu per satu. Mereka butuh angka ringkasan: *Berapa total pendapatan bulan ini? Berapa rata-rata belanja per pengguna?*\n\nFungsi agregasi menghitung kumpulan baris data menjadi satu nilai tunggal:\n- `COUNT()`: Menghitung jumlah baris data.\n- `SUM()`: Menjumlahkan nilai numerik.\n- `AVG()`: Menghitung nilai rata-rata.\n- `MIN()` / `MAX()`: Mencari nilai terkecil / terbesar.\n\n`GROUP BY` digunakan untuk memecah hitungan agregasi tersebut berdasarkan kelompok tertentu (misal: total omset per kategori produk).\n\n```text\n+-----------------------+              +-----------------------+\n|  TABEL products       |              |  HASIL GROUP BY       |\n+-----------+-----------+              +-----------+-----------+\n| kategori  | harga     |  GROUP BY    | kategori  | total_stok|\n+-----------+-----------+  kategori    +-----------+-----------+\n| Makanan   | 15000     | -----------> | Makanan   | 25000     |\n| Makanan   | 10000     |              | Minuman   | 40000     |\n| Minuman   | 40000     |              +-----------+-----------+\n+-----------+-----------+\n```\n\n---\n\n## 2. Urutan Evaluasi Query SQL (Sangat Penting!)\n\nMemahami urutan eksekusi SQL oleh mesin database adalah kunci agar tidak salah menyusun filter:\n\n```text\n1. FROM & JOIN     --> Mesin menentukan tabel asal & gabungan\n2. WHERE           --> Memfilter baris SEBELUM di-agregasi\n3. GROUP BY        --> Mengelompokkan baris data\n4. HAVING          --> Memfilter hasil kelompok SETELAH di-agregasi\n5. SELECT          --> Memilih kolom & fungsi agregat\n6. DISTINCT        --> Menghilangkan duplikat\n7. ORDER BY        --> Mengurutkan data hasil\n8. LIMIT & OFFSET   --> Membatasi baris tampilan\n```\n\n| Klausul Filter | Kapan Digunakan | Contoh Kondisi |\n|---|---|---|\n| `WHERE` | Memfilter baris individual sebelum pengelompokan | `WHERE status = 'completed'` |\n| `HAVING` | Memfilter hasil kelompok setelah fungsi agregasi | `HAVING SUM(total) > 1000000` |\n\n---\n\n## 3. Subquery (Nested Query) & Operator `EXISTS`\n\nSubquery adalah kueri `SELECT` yang disisipkan di dalam kueri utama:\n- **Scalar Subquery:** Mengembalikan 1 baris & 1 kolom (misal: mencari produk yang harganya di atas rata-rata: `WHERE price > (SELECT AVG(price) FROM products)`).\n- **Subquery `IN`:** Membandingkan nilai dengan daftar hasil kueri lain.\n- **Subquery `EXISTS`:** Memeriksa keberadaan baris data secara efisien. `EXISTS` langsung berhenti mencari (short-circuit) begitu menemukan 1 baris yang cocok, sehingga jauh lebih cepat dari `IN` pada tabel besar.\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **Menyaring Agregasi dengan `WHERE`:** Menulis `WHERE SUM(price) > 50000` akan melempar error `aggregate functions are not allowed in WHERE`. Gunakan `HAVING SUM(price) > 50000`!\n2. **Kolom Non-Agregat di `SELECT` tanpa `GROUP BY`:** Jika kamu menulis `SELECT category, name, COUNT(*) FROM products GROUP BY category;`, SQL akan bingung memilih nilai `name` mana yang harus ditampilkan. Kolom non-agregat wajib ada di klausul `GROUP BY`.\n3. **Penyalahgunaan `IN` untuk Tabel Raksasa:** `WHERE user_id IN (SELECT id FROM ...)` bisa membuat performa merosot tajam jika subquery mengembalikan jutaan ID. Gunakan `EXISTS` atau `JOIN`.\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Pembuatan dashboard laporan bisnis (Executive Dashboard), perhitungan ringkasan finansial harian, dan analisis perilaku pengguna (Analytics).\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan favorit tim data & backend: *\"Kapan kamu harus menggunakan `WHERE` dan kapan harus menggunakan `HAVING`?\"*\n- Saat code review, senior engineer akan meminta kamu mengganti subquery `IN` menjadi `EXISTS` atau `JOIN` jika query terdeteksi lambat di lingkungan pementasan (staging)."
        },
        {
          "kind": "step",
          "id": "sql-3-1",
          "title": "Fungsi Agregasi (COUNT, SUM, AVG, MIN, MAX)",
          "explanation": "Fungsi agregasi `COUNT()` digunakan untuk menghitung jumlah total baris yang memenuhi kriteria filter tertentu. Menggunakan `COUNT(*)` menghitung seluruh baris data termasuk yang berisi `NULL`, sedangkan `COUNT(kolom)` hanya menghitung baris yang kolomnya terisi data valid. Fungsi ini sangat vital digunakan pada statistik dashboard backend untuk menampilkan total pengguna, jumlah transaksi harian, atau stok barang. Jebakan klasik pemula adalah mengira `COUNT(phone)` akan menghitung nilai kosong `NULL`, padahal nilai `NULL` secara otomatis diabaikan oleh kalkulasi agregasi.",
          "example": {
            "code": "SELECT COUNT(*) AS total_users, AVG(age) AS rerata_umur FROM users;",
            "output": "Ringkasan total user dan rata-rata umur seluruh pengguna.",
            "note": "COUNT(*) menghitung seluruh baris termasuk baris bermuatan NULL."
          },
          "instruction": "Tulis query untuk menjumlahkan seluruh amount pada tabel payments dan beri alias total.",
          "starterCode": "-- Tulis query SUM di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+SUM\\(\\s*amount\\s*\\)\\s+AS\\s+total\\s+FROM\\s+payments\\s*;?",
              "message": "Gunakan: SELECT SUM(amount) AS total FROM payments;"
            }
          ],
          "solution": "SELECT SUM(amount) AS total FROM payments;"
        },
        {
          "kind": "step",
          "id": "sql-3-2",
          "title": "Pengelompokan Data dengan GROUP BY",
          "explanation": "Fungsi agregasi `SUM()` menghitung total akumulasi numerik, sedangkan `AVG()` menghitung nilai rata-rata dari sekumpulan baris data. Kamu dapat menggunakan `SUM(amount)` untuk mencari total omset penjualan atau `AVG(rating)` untuk mendapatkan rerata ulasan produk. Fungsi agregat ini dipakai di hampir semua laporan finansial dan analitik bisnis e-commerce. Jebakan yang sering muncul adalah menjalankan `SUM()` pada kolom ber-tipe string teks yang mengakibatkan error tipe data atau konversi implisit bernilai nol.",
          "example": {
            "code": "SELECT category, COUNT(*) FROM products GROUP BY category;",
            "output": "Jumlah produk per masing-masing kategori.",
            "note": "Aturan Emas: Setiap kolom non-agregat di SELECT wajib masuk ke GROUP BY!"
          },
          "instruction": "Kelompokkan pesanan berdasarkan statusnya dan hitung jumlah masing-masing grup.",
          "starterCode": "-- Tulis query GROUP BY di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+status\\s*,\\s*COUNT\\(\\*\\)\\s+FROM\\s+orders\\s+GROUP\\s+BY\\s+status\\s*;?",
              "message": "Gunakan: SELECT status, COUNT(*) FROM orders GROUP BY status;"
            }
          ],
          "solution": "SELECT status, COUNT(*) FROM orders GROUP BY status;"
        },
        {
          "kind": "step",
          "id": "sql-3-3",
          "title": "Menyaring Agregat: HAVING vs WHERE",
          "explanation": "Klausul `GROUP BY` mengelompokkan baris data yang memiliki nilai sama pada kolom tertentu agar dapat dihitung menggunakan fungsi agregasi. Menuliskan `SELECT category, COUNT(*) FROM products GROUP BY category` akan menghitung jumlah produk untuk setiap kategori secara terpisah. Fitur pengelompokan ini merupakan pondasi utama pembuatan laporan analitik bisnis berbasis kategori atau rentang waktu. Jebakan paling fatal pemula adalah menyertakan kolom di klausa `SELECT` yang tidak menggunakan fungsi agregasi dan tidak terdaftar di klausa `GROUP BY`.",
          "example": {
            "code": "SELECT user_id, SUM(amount) AS total\nFROM orders\nGROUP BY user_id\nHAVING SUM(amount) > 1000000;",
            "output": "Mengisolasi pelanggan 'High Value' yang total belanjanya di atas 1 juta.",
            "note": "Jangan gunakan fungsi agregat (seperti HAVING SUM > ...) di dalam klausa WHERE!"
          },
          "instruction": "Gunakan klausa HAVING untuk memfilter hasil grup yang jumlah barisnya lebih dari 5.",
          "starterCode": "-- Tulis klausa HAVING di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "HAVING\\s+COUNT\\(\\*\\)\\s*>\\s*5\\s*;?",
              "message": "Tuliskan: HAVING COUNT(*) > 5;"
            }
          ],
          "solution": "HAVING COUNT(*) > 5;"
        },
        {
          "kind": "step",
          "id": "sql-3-4",
          "title": "Subquery di dalam WHERE",
          "explanation": "Klausul `HAVING` digunakan khusus untuk memfilter hasil kelompok data SETELAH fungsi agregasi selesai dihitung oleh mesin database. Perbedaan mendasarnya adalah `WHERE` memfilter baris data sebelum pengelompokan, sedangkan `HAVING` memfilter hasil agregasi seperti `HAVING SUM(total) > 1000000`. Ini digunakan saat kamu ingin mencari pelanggan kelas VIP yang akumulasi belanjanya melebihi ambang batas tertentu. Jebakan umum pemula adalah meletakkan kondisi agregasi di dalam klausa `WHERE`, yang akan langsung ditolak mesin SQL dengan error Syntax Error.",
          "example": {
            "code": "SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products);",
            "output": "Mengambil produk yang harganya di atas rata-rata seluruh produk.",
            "note": "Subquery di dalam WHERE diapit tanda kurung ()."
          },
          "instruction": "Gunakan subquery untuk memfilter produk yang harganya melebihi rata-rata harga seluruh produk.",
          "starterCode": "-- Tulis subquery WHERE di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WHERE\\s+price\\s*>\\s*\\(\\s*SELECT\\s+AVG\\(\\s*price\\s*\\)\\s+FROM\\s+products\\s*\\)",
              "message": "Tuliskan subquery rata-rata harga produk"
            }
          ],
          "solution": "WHERE price > (SELECT AVG(price) FROM products)"
        },
        {
          "kind": "step",
          "id": "sql-3-5",
          "title": "CTE (Common Table Expressions) dengan WITH",
          "explanation": "Scalar Subquery adalah kueri `SELECT` bersarang di dalam kurung `()` yang mengembalikan tepat satu baris dan satu kolom nilai tunggal. Kueri seperti `WHERE price > (SELECT AVG(price) FROM products)` membandingkan setiap produk dengan nilai rata-rata harga yang dihitung secara dinamis. Pola ini sangat berguna saat kamu ingin menyaring data berdasarkan acuan statistik yang selalu berubah seiring waktu. Jebakan yang sering terjadi adalah subquery mengembalikan lebih dari satu baris data, sehingga operator perbandingan seperti `>` melempar error runtime.",
          "example": {
            "code": "WITH TopUsers AS (\n  SELECT user_id FROM orders GROUP BY user_id HAVING COUNT(*) > 10\n)\nSELECT * FROM users WHERE id IN (SELECT user_id FROM TopUsers);",
            "output": "Tabel CTE dibentuk dengan benar dan memunculkan data user top spender.",
            "note": "CTE sangat direkomendasikan dibanding subquery bertingkat-tingkat."
          },
          "instruction": "Deklarasikan CTE bernama HighSpenders yang isinya memilih user_id dari tabel orders.",
          "starterCode": "-- Tulis deklarasi WITH CTE di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WITH\\s+HighSpenders\\s+AS\\s*\\(\\s*SELECT\\s+user_id\\s+FROM\\s+orders\\s*\\)",
              "message": "Gunakan sintaks WITH CTE"
            }
          ],
          "solution": "WITH HighSpenders AS (SELECT user_id FROM orders)"
        },
        {
          "kind": "step",
          "id": "sql-3-6",
          "title": "Kategorisasi Data dengan CASE WHEN",
          "explanation": "Subquery dengan operator `IN` membandingkan suatu nilai kolom dengan kumpulan daftar hasil yang dikembalikan oleh kueri bersarang. Kueri `WHERE user_id IN (SELECT id FROM users WHERE status = 'active')` membatasi data transaksi hanya untuk pengguna yang berstatus aktif. Teknik ini memudahkan pemfilteran bertingkat antar tabel tanpa harus menuliskan klausul JOIN yang rumit. Jebakan performa yang harus diwaspadai adalah jika subquery `IN` mengembalikan ribuan hingga jutaan baris data, yang dapat membuat kueri utama berjalan sangat lambat.",
          "example": {
            "code": "SELECT name, price,\n  CASE\n    WHEN price > 100000 THEN 'Mahal'\n    ELSE 'Terjangkau'\n  END AS kategori_harga\nFROM products;",
            "output": "Kolom baru 'kategori_harga' diisi string 'Mahal' atau 'Terjangkau'.",
            "note": "Selalu diakhiri dengan kata kunci END."
          },
          "instruction": "Gunakan kondisi CASE untuk menghasilkan 'Lulus' jika score >= 75, dan 'Gagal' jika sebaliknya.",
          "starterCode": "-- Tulis ekspresi CASE di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CASE\\s+WHEN\\s+score\\s*>=\\s*75\\s+THEN\\s+['\"]Lulus['\"]\\s+ELSE\\s+['\"]Gagal['\"]\\s+END",
              "message": "Gunakan ekspresi CASE WHEN sesuai instruksi"
            }
          ],
          "solution": "CASE WHEN score >= 75 THEN 'Lulus' ELSE 'Gagal' END"
        },
        {
          "kind": "step",
          "id": "sql-3-7",
          "title": "Window Function Dasar (ROW_NUMBER)",
          "explanation": "Operator `EXISTS` mengecek keberadaan sekumpulan baris data pada subquery dengan mekanisme evaluasi cepat (short-circuit). Mesin database akan berhenti mencari begitu menemukan satu baris pertama yang cocok pada subquery, sehingga `EXISTS` jauh lebih cepat dibanding operator `IN` pada tabel besar. Fitur ini umum dipakai untuk memeriksa apakah seorang pengguna sudah pernah melakukan transaksi tertentu sebelum memproses aksi lanjutan. Jebakan utamanya adalah lupa menghubungkan subquery dengan tabel utama (Correlated Subquery) via klausul `WHERE`.",
          "example": {
            "code": "SELECT name, category, price,\n  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rank\nFROM products;",
            "output": "Memberi nomor urut peringkat 1, 2, 3 untuk produk di tiap kategori.",
            "note": "PARTITION BY membagi kelompok baris analisis."
          },
          "instruction": "Buat penomoran baris dengan urutan id menaik (ASC).",
          "starterCode": "-- Tulis ROW_NUMBER di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ROW_NUMBER\\(\\)\\s+OVER\\s*\\(\\s*ORDER\\s+BY\\s+id\\s+ASC\\s*\\)",
              "message": "Gunakan: ROW_NUMBER() OVER (ORDER BY id ASC)"
            }
          ],
          "solution": "ROW_NUMBER() OVER (ORDER BY id ASC)"
        },
        {
          "kind": "quiz",
          "id": "sql-3-kuis",
          "title": "Kuis: Agregasi & Subquery",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Apa perbedaan utama klausa `HAVING` dibanding `WHERE` di SQL?",
              "choices": [
                "WHERE menyaring data sebelum agregasi, sedangkan HAVING menyaring hasil agregasi (GROUP BY)",
                "HAVING hanya bisa dipakai di MySQL",
                "WHERE tidak bisa memfilter string",
                "Tidak ada perbedaan"
              ],
              "answerIndex": 0,
              "explanation": "WHERE bekerja pada baris mentah sebelum dikelompokkan, sementara HAVING bekerja pada hasil kelompok. Karena itu kamu tidak bisa menulis WHERE COUNT(*) > 5 \u2014 pada saat WHERE dievaluasi, COUNT belum dihitung. Filter yang tidak melibatkan fungsi agregat sebaiknya tetap ditaruh di WHERE agar barisnya berkurang lebih dulu dan query lebih ringan."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Tabel `employees` punya 50 baris, tapi 12 karyawan belum mengisi kolom `phone` (NULL). Berapa hasil `COUNT(*)` dan `COUNT(phone)`?",
              "choices": [
                "Keduanya 50",
                "COUNT(*) = 50 dan COUNT(phone) = 38",
                "Keduanya 38",
                "COUNT(*) = 38 dan COUNT(phone) = 50"
              ],
              "answerIndex": 1,
              "explanation": "COUNT(*) menghitung baris, sedangkan COUNT(kolom) hanya menghitung baris yang kolomnya TIDAK NULL. Perbedaan ini jadi sumber laporan yang salah: memakai COUNT(phone) untuk 'jumlah karyawan' diam-diam mengecualikan yang datanya belum lengkap. Fungsi agregat lain seperti AVG dan SUM juga mengabaikan NULL."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Query `SELECT kategori, nama, SUM(harga) FROM produk GROUP BY kategori;` ditolak PostgreSQL. Apa sebabnya?",
              "choices": [
                "SUM tidak bisa dipakai bersama GROUP BY",
                "Kolom `nama` tidak diagregasi dan tidak ikut GROUP BY, sehingga nilainya ambigu",
                "GROUP BY harus ditulis sebelum SELECT",
                "Nama tabel harus jamak"
              ],
              "answerIndex": 1,
              "explanation": "Aturan emas GROUP BY: setiap kolom di SELECT harus berupa kolom pengelompok atau berada di dalam fungsi agregat. Satu kategori berisi banyak produk, jadi database tidak tahu nama mana yang harus ditampilkan. Solusinya: ikutkan nama ke GROUP BY, atau agregasi (misal MIN(nama)). MySQL versi lama menerima query ini dan diam-diam memilih nilai acak \u2014 sumber bug yang sulit dilacak."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu perlu mengambil pelanggan yang total belanjanya di atas rata-rata seluruh pelanggan. Struktur mana yang paling tepat dan mudah dibaca?",
              "choices": [
                "Dua query terpisah, lalu angkanya disalin manual ke query kedua",
                "CTE `WITH total AS (...)` untuk menghitung total per pelanggan, lalu difilter memakai subquery rata-rata",
                "ORDER BY total DESC lalu ambil separuh teratas",
                "Menambahkan kolom baru bernama di_atas_rata_rata ke tabel"
              ],
              "answerIndex": 1,
              "explanation": "CTE (WITH) memberi nama pada hasil antara sehingga query bertingkat tetap terbaca dari atas ke bawah, dan hasilnya selalu terbaru karena dihitung ulang setiap dijalankan. Menyalin angka manual membuat laporan basi begitu ada transaksi baru, dan 'separuh teratas' bukan definisi di atas rata-rata."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu ingin memberi nomor urut peringkat penjualan per wilayah, dan baris detail tiap transaksi tetap harus tampil. Fitur SQL apa yang tepat?",
              "choices": [
                "GROUP BY wilayah",
                "Window function ROW_NUMBER() OVER (PARTITION BY wilayah ORDER BY total DESC)",
                "DISTINCT wilayah",
                "HAVING COUNT(*) = 1"
              ],
              "answerIndex": 1,
              "explanation": "Window function menghitung nilai per kelompok TANPA meringkas barisnya \u2014 setiap transaksi tetap muncul, dengan tambahan kolom peringkat. GROUP BY sebaliknya: ia menciutkan banyak baris menjadi satu per wilayah, sehingga detail transaksinya hilang. Inilah alasan window function jadi materi wajib untuk kerja analitik."
            }
          ]
        }
      ]
    },
    {
      "slug": "dml",
      "title": "Manipulasi Data & Transaksi",
      "description": "INSERT, UPDATE, DELETE \u2014 dan jaring pengaman sebelum kamu menghapus data produksi.",
      "topics": [
        "INSERT: satu baris, banyak baris, dari SELECT",
        "UPDATE dengan WHERE (dan horor UPDATE tanpa WHERE)",
        "DELETE vs TRUNCATE",
        "Transaksi: BEGIN, COMMIT, ROLLBACK",
        "ACID dijelaskan dengan kasus transfer uang",
        "UPSERT (ON CONFLICT / ON DUPLICATE KEY)",
        "RETURNING untuk mendapat data yang berubah"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-4-m1",
          "title": "Manipulasi Data (DML) & Transaksi Database (ACID)",
          "body": "# Manipulasi Data (DML) & Transaksi Database (ACID)\n\nModul ini mempelajari cara menambah, mengubah, dan menghapus data (DML) serta mengamankannya menggunakan fitur Transaksi & prinsip ACID.\n\n## 1. Pengertian DML (Data Manipulation Language)\n\nSelain membaca data dengan `SELECT`, aplikasi kamu harus bisa memanipulasi data:\n- `INSERT INTO`: Menambahkan baris data baru ke tabel.\n- `UPDATE`: Mengubah nilai kolom pada baris yang sudah ada.\n- `DELETE`: Menghapus baris data spesifik dari tabel.\n- `TRUNCATE`: Mengosongkan seluruh isi tabel secara instant dengan me-reset struktur penyimpanan.\n\n---\n\n## 2. Transaksi & Prinsip ACID\n\nDi dunia nyata, satu aksi pengguna bisa melibatkan banyak kueri. Contoh: **Transfer Uang Rp 100.000 dari Rekening A ke Rekening B**.\nProses ini membutuhkan 2 perintah:\n1. Kurangi saldo A sebesar Rp 100.000.\n2. Tambahkan saldo B sebesar Rp 100.000.\n\nBagaimana jika server mati tepat setelah langkah 1? Uang A hilang dan B tidak menerima! Di sinilah **Transaksi Database** berperan.\n\n```text\n+-------------------------------------------------------------------------+\n|                         ALUR TRANSAKSI DATABASE                         |\n+-------------------------------------------------------------------------+\n|  BEGIN TRANSACTION;                                                     |\n|    --> UPDATE accounts SET balance = balance - 100000 WHERE id = 'A';   |\n|    --> UPDATE accounts SET balance = balance + 100000 WHERE id = 'B';   |\n|                                                                         |\n|  [Jika Sukses]   ===> COMMIT;   (Data permanen disimpan ke disk)         |\n|  [Jika Ada Error] ===> ROLLBACK; (Seluruh perubahan dibatalkan 100%)     |\n+-------------------------------------------------------------------------+\n```\n\n### Empat Pilar Prinsip ACID:\n| Prinsip | Keterangan |\n|---|---|\n| **Atomicity (Keutuhan)** | \"Semua berhasil atau batal sama sekali\". Tidak ada transaksi yang setengah jadi. |\n| **Consistency (Konsistensi)** | Data harus selalu mematuhi aturan skema dan constraint sebelum dan sesudah transaksi. |\n| **Isolation (Isolasi)** | Transaksi yang berjalan serentak tidak boleh saling mengganggu atau melihat data setengah jadi. |\n| **Durability (Ketahanan)** | Begitu `COMMIT` berhasil, data dijamin tersimpan permanen meski listrik mati seketika. |\n\n---\n\n## 3. Analogi Dunia Nyata: Mesin ATM Bank\n\nBayangkan kamu mengambil uang di ATM:\nKartu kamu dimasukkan, saldo dikurangi, dan uang tunai disiapkan di mulut mesin. Jika pintu dispenser uang macet, sistem ATM akan melakukan **ROLLBACK**: transaksi dibatalkan dan saldo rekening kamu dikembalikan ke posisi semula secara otomatis.\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **Jebakan `UPDATE` atau `DELETE` Tanpa `WHERE`:** Menulis `UPDATE users SET status = 'banned';` tanpa klausul `WHERE` akan **mengubah SELURUH pengguna di tabel menjadi diblokir!** Ini bencana paling sering dialami pengembang pemula.\n2. **Perbedaan `DELETE` vs `TRUNCATE`:** `DELETE FROM users` menghapus data baris per baris (melakukan trigger & logging per baris), sedangkan `TRUNCATE TABLE users` menghapus data secara kolektif berkecepatan tinggi dan mereset nilai auto-increment.\n3. **Menggantungkan Transaksi (`Idle in Transaction`):** Membuka `BEGIN TRANSACTION` namun lupa memanggil `COMMIT` atau `ROLLBACK` akan mengunci baris data (row lock) dan membuat koneksi lain mengalami timeout.\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Pemrosesan checkout toko online, pendaftaran akun baru, pembayaran digital, dan penanganan saldo finansial.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan wajib untuk calon Backend Engineer: *\"Jelaskan 4 prinsip ACID dan beri contoh skenario bisnis jika Atomicity tidak diterapkan!\"*\n- Di code review, penulisan operasi mutasi data ganda tanpa dibungkus `BEGIN ... COMMIT` (transaksi) dianggap sebagai bug keamanan kritis."
        },
        {
          "kind": "step",
          "id": "sql-4-1",
          "title": "INSERT INTO Menyimpan Data Baru",
          "explanation": "Perintah `INSERT INTO ... VALUES` digunakan untuk menambahkan satu atau beberapa baris data baru ke dalam tabel database. Kamu mendaftarkan nama-nama kolom yang ingin diisi lalu memberikan nilai yang sesuai dengan urutan tipe datanya. Perintah ini merupakan operasi mutasi data yang dipanggil setiap kali ada pengguna baru yang mendaftar atau pesanan baru yang dibuat. Jebakan yang sering ditemui adalah jumlah kolom dan jumlah nilai `VALUES` tidak seimbang, atau menginput string teks tanpa tanda petik tunggal `'`.",
          "example": {
            "code": "INSERT INTO users (name, email) VALUES ('Budi', 'budi@test.com');",
            "output": "1 baris user baru ditambahkan ke tabel users.",
            "note": "Kamu dapat memasukkan banyak baris sekaligus dengan memisahkan koma pada VALUES."
          },
          "instruction": "Tambahkan data ke tabel categories dengan nama Elektronik.",
          "starterCode": "-- Tulis perintah INSERT di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "INSERT\\s+INTO\\s+categories\\s*\\(\\s*name\\s*\\)\\s+VALUES\\s*\\(\\s*['\"]Elektronik['\"]\\s*\\)\\s*;?",
              "message": "Gunakan: INSERT INTO categories (name) VALUES ('Elektronik');"
            }
          ],
          "solution": "INSERT INTO categories (name) VALUES ('Elektronik');"
        },
        {
          "kind": "step",
          "id": "sql-4-2",
          "title": "UPDATE Data dengan WHERE",
          "explanation": "Perintah `UPDATE ... SET` mengubah nilai data pada kolom tabel untuk baris-baris yang memenuhi kriteria filter. Perintah seperti `UPDATE users SET status = 'active' WHERE id = 1` mengubah status pengguna spesifik menjadi aktif secara instant. Perintah ini dipanggil saat ada perubahan profil pengguna, pembaruan stok barang, atau perubahan status transaksi. Peringatan dan jebakan paling berbahaya adalah **lupa mencantumkan klausul WHERE**, yang akan mengakibatkan SELURUH data baris di tabel berubah!",
          "example": {
            "code": "UPDATE users SET status = 'active' WHERE id = 5;",
            "output": "Hanya user dengan ID 5 yang diperbarui statusnya.",
            "note": "Selalu jalankan SELECT dengan klausa WHERE yang sama dulu untuk memastikan baris mana yang akan terpengaruh."
          },
          "instruction": "Perbarui price menjadi 20000 untuk tabel products di mana id sama dengan 1.",
          "starterCode": "-- Tulis query UPDATE di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "UPDATE\\s+products\\s+SET\\s+price\\s*=\\s*20000\\s+WHERE\\s+id\\s*=\\s*1\\s*;?",
              "message": "Gunakan: UPDATE products SET price = 20000 WHERE id = 1;"
            }
          ],
          "solution": "UPDATE products SET price = 20000 WHERE id = 1;"
        },
        {
          "kind": "step",
          "id": "sql-4-3",
          "title": "Menghapus Data: DELETE vs TRUNCATE",
          "explanation": "Perintah `DELETE FROM` menghapus baris data dari tabel berdasarkan kondisi kriteria yang ditentukan pada klausul `WHERE`. Menuliskan `DELETE FROM orders WHERE status = 'cancelled'` akan membersihkan seluruh pesanan yang telah dibatalkan dari sistem. Perintah ini digunakan pada fitur penghapusan akun atau pembersihan data sementara yang sudah kadaluarsa. Jebakan fatal yang sering dialami pengembang adalah **menjalankan DELETE tanpa WHERE**, yang akan menghapus seluruh isi tabel secara permanen tanpa konfirmasi!",
          "example": {
            "code": "DELETE FROM users WHERE status = 'inactive';",
            "output": "Baris user inaktif terhapus.",
            "note": "TRUNCATE jauh lebih cepat daripada DELETE tanpa WHERE untuk mengosongkan tabel."
          },
          "instruction": "Hapus data dari tabel logs di mana created_at lebih kecil dari tanggal 2024-01-01.",
          "starterCode": "-- Tulis query DELETE di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "DELETE\\s+FROM\\s+logs\\s+WHERE\\s+created_at\\s*<\\s*['\"]2024-01-01['\"]\\s*;?",
              "message": "Gunakan perintah DELETE berfilter WHERE"
            }
          ],
          "solution": "DELETE FROM logs WHERE created_at < '2024-01-01';"
        },
        {
          "kind": "step",
          "id": "sql-4-4",
          "title": "Transaksi SQL: BEGIN, COMMIT, ROLLBACK",
          "explanation": "Perintah `TRUNCATE TABLE` mengosongkan seluruh baris data dari tabel secara instant dengan mereset alokasi penyimpanan tabel di tingkat fisik. Berbeda dari `DELETE` yang menghapus baris satu per satu, `TRUNCATE` bekerja berkecepatan tinggi dan otomatis me-reset nilai urutan `AUTO_INCREMENT` atau `SEQUENCE` kembali ke angka 1. Perintah ini digunakan saat kamu ingin membersihkan tabel log sementara atau me-reset data ujicoba di lingkungan pementasan. Jebakan utamanya adalah `TRUNCATE` tidak dapat di-rollback pada beberapa mesin database dan tidak memicu trigger `ON DELETE`.",
          "example": {
            "code": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;",
            "output": "Transaksi transfer uang aman dan atomik.",
            "note": "ROLLBACK mengembalikan data ke kondisi persis sebelum BEGIN."
          },
          "instruction": "Ketikkan perintah untuk membatalkan (rollback) transaksi saat ini.",
          "starterCode": "-- Tulis perintah pembatalan transaksi di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ROLLBACK\\s*;?",
              "message": "Tuliskan: ROLLBACK;"
            }
          ],
          "solution": "ROLLBACK;"
        },
        {
          "kind": "step",
          "id": "sql-4-5",
          "title": "Prinsip Keandalan Transaksi ACID",
          "explanation": "Perintah `BEGIN` (atau `START TRANSACTION`) dan `COMMIT` digunakan untuk membungkus serangkaian kueri mutasi data dalam satu kesatuan Transaksi Database. Seluruh perubahan data di dalam transaksi bersifat sementara sampai perintah `COMMIT` dieksekusi untuk menyimpannya secara permanen ke disk. Fitur ini wajib dipakai pada proses bisnis kritis seperti transfer saldo bank atau perubahan stok yang melibatkan banyak tabel sekaligus. Jebakan utamanya adalah lupa memanggil `COMMIT`, sehingga perubahan data hilang saat koneksi terputus.",
          "example": {
            "code": "BEGIN;\nUPDATE stocks SET qty = qty - 1 WHERE id = 1;\nINSERT INTO logs (msg) VALUES ('Item sold');\nCOMMIT;",
            "output": "Transaksi berhasil dikomit.",
            "note": "Semua perintah akan dibatalkan jika terjadi error sebelum COMMIT."
          },
          "instruction": "Buat blok transaksi (mulai dengan BEGIN). Kurangi saldo `balance` sebesar 500 dari tabel `accounts` dengan `id` = 1, lalu akhiri dengan COMMIT.",
          "starterCode": "-- Mulai transaksi dan update balance\n",
          "language": "text",
          "tests": [
            {
              "pattern": "BEGIN\\s*;[\\s\\S]*?UPDATE\\s+accounts\\s+SET\\s+balance\\s*=\\s*balance\\s*-\\s*500\\s+WHERE\\s+id\\s*=\\s*1\\s*;[\\s\\S]*?COMMIT\\s*;",
              "message": "Gunakan BEGIN, diikuti UPDATE pada accounts, dan diakhiri COMMIT"
            }
          ],
          "solution": "BEGIN;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\nCOMMIT;"
        },
        {
          "kind": "step",
          "id": "sql-4-6",
          "title": "UPSERT (Insert or Update on Conflict)",
          "explanation": "Perintah `ROLLBACK` membatalkan seluruh perubahan mutasi data yang telah dilakukan di dalam sesi transaksi aktif sejak perintah `BEGIN` dipanggil. Jika terjadi kegagalan sistem atau kesalahan logika di tengah proses transaksi, dipanggilnya `ROLLBACK` mengembalikan data 100% ke kondisi semula secara utuh. Mekanisme ini menjamin prinsip Atomicity di mana transaksi tidak boleh berhenti dalam kondisi setengah selesai. Jebakan pemula adalah lupa memasang penanganan error (try-catch) pada aplikasi backend untuk mengeksekusi ROLLBACK saat terjadi exception.",
          "example": {
            "code": "INSERT INTO settings (key, value) VALUES ('theme', 'dark')\nON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;",
            "output": "Nilai theme di-insert jika belum ada, atau di-update jika sudah ada.",
            "note": "Sangat berguna untuk fitur sync data dan pengaturan."
          },
          "instruction": "Tambahkan klausa PostgreSQL agar mengabaikan (DO NOTHING) jika terjadi konflik pada email.",
          "starterCode": "-- Tulis ON CONFLICT di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ON\\s+CONFLICT\\s*\\(\\s*email\\s*\\)\\s+DO\\s+NOTHING\\s*;?",
              "message": "Gunakan: ON CONFLICT (email) DO NOTHING;"
            }
          ],
          "solution": "ON CONFLICT (email) DO NOTHING;"
        },
        {
          "kind": "step",
          "id": "sql-4-7",
          "title": "Klausul RETURNING di PostgreSQL",
          "explanation": "Sintaks `INSERT INTO ... SELECT` memungkinkan kamu menyisipkan sekumpulan baris hasil kueri pencarian secara langsung ke tabel lain tanpa harus memprosesnya di aplikasi backend. Teknik ini sangat berguna untuk memindahkan data historis transaksi ke tabel arsip atau membuat salinan cadangan tabel secara kilat di database. Perintah ini menghemat bandwidth jaringan karena seluruh proses transfer data terjadi di internal mesin database. Jebakan utamanya adalah urutan dan tipe data kolom hasil `SELECT` harus persis cocok dengan struktur kolom tabel tujuan.",
          "example": {
            "code": "INSERT INTO users (name) VALUES ('Budi') RETURNING id, created_at;",
            "output": "Mengembalikan ID otomatis dan created_at yang baru saja di-generate.",
            "note": "Fitur khusus PostgreSQL yang sangat efisien di backend."
          },
          "instruction": "Sisipkan tags bernama Tech dan gunakan perintah RETURNING untuk mendapatkan seluruh datanya.",
          "starterCode": "-- Tulis RETURNING * di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "INSERT\\s+INTO\\s+tags\\s*\\(\\s*name\\s*\\)\\s+VALUES\\s*\\(\\s*['\"]Tech['\"]\\s*\\)\\s+RETURNING\\s+\\*\\s*;?",
              "message": "Gunakan perintah INSERT dengan RETURNING *"
            }
          ],
          "solution": "INSERT INTO tags (name) VALUES ('Tech') RETURNING *;"
        },
        {
          "kind": "quiz",
          "id": "sql-4-kuis",
          "title": "Kuis: Manipulasi Data & Transaksi",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Perintah SQL mana yang membatalkan seluruh perubahan sejak transaksi dimulai (BEGIN)?",
              "choices": [
                "COMMIT",
                "ROLLBACK",
                "RESET",
                "UNDO"
              ],
              "answerIndex": 1,
              "explanation": "ROLLBACK mengembalikan kondisi database seperti sebelum transaksi dimulai. Selama belum COMMIT, perubahanmu hanya terlihat di sesi sendiri \u2014 inilah jaring pengaman saat kamu menjalankan UPDATE besar di production."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Kamu perlu mengosongkan tabel `logs` berisi 10 juta baris di server development. Apa perbedaan penting DELETE dan TRUNCATE di sini?",
              "choices": [
                "Keduanya identik, hanya beda nama",
                "TRUNCATE jauh lebih cepat karena tidak menghapus baris satu per satu, tapi tidak bisa memakai WHERE dan tidak bisa di-rollback di sebagian database",
                "DELETE menghapus struktur tabel, TRUNCATE hanya isinya",
                "TRUNCATE hanya bekerja pada tabel kosong"
              ],
              "answerIndex": 1,
              "explanation": "DELETE menghapus baris satu per satu dan mencatat semuanya di log transaksi, sehingga lambat untuk tabel besar tapi bisa disaring dengan WHERE dan dibatalkan. TRUNCATE mengosongkan tabel sekaligus, jauh lebih cepat, mereset AUTO_INCREMENT, tapi tidak menerima WHERE. Keduanya berbeda dari DROP TABLE yang ikut menghapus struktur tabelnya."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu menjalankan `UPDATE users SET status = 'aktif';` di production dan lupa klausa WHERE. Apa yang terjadi dan apa kebiasaan yang mencegahnya?",
              "choices": [
                "Database menolak query tanpa WHERE secara otomatis",
                "Seluruh baris ikut berubah; biasakan jalankan SELECT dulu dengan filter yang sama, dan bungkus dalam BEGIN sebelum COMMIT",
                "Hanya baris pertama yang berubah",
                "Perubahan otomatis kembali setelah 5 menit"
              ],
              "answerIndex": 1,
              "explanation": "UPDATE tanpa WHERE mengenai SEMUA baris dan tidak ada peringatan apa pun. Dua kebiasaan yang menyelamatkan: jalankan dulu SELECT dengan kondisi yang sama untuk melihat baris mana yang akan terkena, lalu bungkus perubahan dalam BEGIN ... COMMIT agar masih bisa ROLLBACK saat jumlah baris terpengaruh terlihat janggal."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Aplikasi menyimpan setelan pengguna: kalau barisnya sudah ada, perbarui; kalau belum, buat baru. Cara SQL mana yang paling aman dari race condition?",
              "choices": [
                "SELECT dulu, lalu putuskan INSERT atau UPDATE di kode aplikasi",
                "UPSERT dalam satu perintah: INSERT ... ON CONFLICT DO UPDATE (PostgreSQL) atau ON DUPLICATE KEY UPDATE (MySQL)",
                "DELETE lalu INSERT ulang setiap kali",
                "TRUNCATE tabel setelan sebelum menyimpan"
              ],
              "answerIndex": 1,
              "explanation": "Pola SELECT-lalu-putuskan punya celah waktu: dua request bersamaan bisa sama-sama melihat 'belum ada' lalu sama-sama INSERT sehingga terjadi error atau data ganda. UPSERT menyelesaikannya dalam satu perintah atomik yang dijaga oleh constraint unik. DELETE lalu INSERT juga berisiko karena data sempat hilang dan id-nya berubah."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Transfer saldo memotong 500 dari rekening A lalu menambahkannya ke rekening B. Server mati tepat setelah perintah pertama. Sifat ACID apa yang menjamin uang itu tidak menguap?",
              "choices": [
                "Atomicity \u2014 seluruh transaksi dianggap satu kesatuan, gagal sebagian berarti dibatalkan semua",
                "Consistency \u2014 data selalu konsisten antar server",
                "Isolation \u2014 transaksi lain tidak melihat perubahan yang belum di-commit",
                "Durability \u2014 data tetap tersimpan setelah listrik mati"
              ],
              "answerIndex": 0,
              "explanation": "Atomicity berarti transaksi bersifat semua-atau-tidak-sama-sekali: karena COMMIT belum sempat dijalankan, potongan saldo A otomatis dibatalkan saat database pulih. Isolation dan Durability juga sifat ACID, tapi keduanya menjawab pertanyaan berbeda \u2014 siapa yang boleh melihat perubahan, dan apakah data bertahan setelah di-commit."
            }
          ]
        }
      ]
    },
    {
      "slug": "desain-skema",
      "title": "Desain Skema & Index",
      "description": "Merancang database yang tidak menyesal 6 bulan kemudian.",
      "topics": [
        "Normalisasi 1NF\u20133NF dengan contoh nyata (bukan definisi hafalan)",
        "Kapan denormalisasi masuk akal",
        "ERD: membaca & menggambar",
        "Memilih tipe data & constraint (NOT NULL, UNIQUE, CHECK)",
        "Index: cara kerja B-tree secara intuitif",
        "Kapan index membantu & kapan memperlambat",
        "EXPLAIN: membaca rencana eksekusi query"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-5-m1",
          "title": "Desain Skema Database, Normalisasi & Performa Indexing",
          "body": "# Desain Skema Database, Normalisasi & Performa Indexing\n\nModul ini mempelajari dasar perancangan struktur tabel yang rapi (Normalisasi) serta teknik mempercepat pencarian data dengan Index.\n\n## 1. Pengertian Desain Skema & Normalisasi\n\nDesain skema adalah cetak biru (blueprint) arsitektur database. Desain yang buruk membuat data duplikat, tidak konsisten, dan sulit diperbaiki. Untuk menghindarinya, kita menerapkan proses **Normalisasi**:\n\n- **1NF (First Normal Form):** Setiap kolom wajib berisi nilai atomik (tunggal, tidak ada daftar terpisah koma dalam satu kolom).\n- **2NF (Second Normal Form):** Sudah 1NF dan seluruh kolom non-kunci bergantung penuh pada Primary Key.\n- **3NF (Third Normal Form):** Sudah 2NF dan tidak ada ketergantungan transitif (kolom non-kunci tidak boleh bergantung pada kolom non-kunci lainnya).\n\n---\n\n## 2. Mengenal B-Tree Index (Akselerator Kueri)\n\nSecara bawaan, jika kamu mencari data dengan `WHERE email = 'bimo@bilearn.id'`, database harus melakukan **Full Table Scan** (memeriksa setiap baris dari atas ke bawah). Jika tabel ber-isi 10 juta baris, pencarian ini butuh waktu beberapa detik.\n\nDengan menambahkan **Index (B-Tree)** pada kolom `email`, database membuat struktur data pohon seimbang (Balanced Tree) di mana pencarian berubah dari **O(N)** menjadi **O(log N)** \u2014 pencarian 10 juta baris selesai dalam orde milidetik!\n\n```text\n               [ Root Node: M ]\n              /                      [ Leaf Node: A - L ]     [ Leaf Node: N - Z ]\n      /                  \\     /                    (Ahmad)             (Bimo) (Siti)             (Zack)\n```\n\n| Penggunaan Index | Dampak Positif | Dampak Negatif / Kerugian |\n|---|---|---|\n| Pada Kueri `SELECT` | Mempercepat pencarian data berlipat ganda | Tidak ada |\n| Pada `INSERT` / `UPDATE` | Tidak ada | Memperlambat penulisan karena indeks harus diurutkan ulang |\n| Konsumsi Penyimpanan | Tidak ada | Memakan ruang disk (RAM & Storage) tambahan |\n\n---\n\n## 3. Analogi Dunia Nyata: Indeks Halaman Belakang Buku\n\nBayangkan sebuah buku tebal ber-isi 1.000 halaman:\n- Tanpa indeks: Kamu harus membaca lembar demi lembar dari halaman 1 sampai menemukan kata \"PostgreSQL\" (**Full Table Scan**).\n- Dengan indeks: Kamu buka lembar indeks di belakang buku, menemukan kata \"PostgreSQL -> Hal 452\", dan langsung membuka halaman tersebut (**Index Scan**).\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **Indexing Semua Kolom (Over-Indexing):** Mengindeks setiap kolom tabel secara asal-asalan akan membuat operasi `INSERT`, `UPDATE`, dan `DELETE` menjadi sangat lambat karena mesin database harus memperbarui banyak B-Tree sekaligus.\n2. **Salah Memilih Tipe Data:** Menggunakan `VARCHAR(255)` untuk menyimpan angka umur atau status bernilai 0/1 memboroskan memori RAM secara signifikan.\n3. **Mengabaikan Foreign Key Constraints:** Lupa menambahkan constraint `FOREIGN KEY ... ON DELETE CASCADE` membuat database kamu dipenuhi oleh \"Data Yatim Piatu\" (Orphan Rows) \u2014 baris transaksi yang pemiliknya sudah dihapus dari tabel users.\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Saat merancang aplikasi baru dari nol, melakukan migrasi skema, dan melakukan perbaikan performa (Performance Tuning) pada query yang lambat di produksi.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan arsitektur utama: *\"Bagaimana struktur B-Tree Index bekerja dan mengapa indeks tidak selalu mempercepat kueri?\"*\n- Senior DBA & Tech Lead di code review akan mengevaluasi rancangan skema ERD kamu sebelum diizinkan rilis ke produksi."
        },
        {
          "kind": "step",
          "id": "sql-5-1",
          "title": "Normalisasi Database (1NF, 2NF, 3NF)",
          "explanation": "Primary Key (PK) adalah kolom kunci unik pengenal baris, sedangkan Foreign Key (FK) adalah kolom yang merujuk pada Primary Key di tabel lain untuk menjamin integritas relasi. Menambahkan batasan `FOREIGN KEY (user_id) REFERENCES users(id)` mencegah penyisipan data pesanan dengan ID pengguna yang tidak ada. Fitur ini merupakan pondasi wajib pada setiap perancangan skema database relasional profesional. Jebakan yang sering terjadi adalah lupa menambahkan indeks pada kolom Foreign Key, yang membuat operasi JOIN pada tabel besar menjadi sangat lambat.",
          "example": {
            "code": "CREATE TABLE departments (\n  dept_id INT PRIMARY KEY,\n  dept_name VARCHAR(50)\n);",
            "output": "Tabel departments terpisah untuk normalisasi.",
            "note": "Pindahkan informasi departemen yang sebelumnya berulang di tabel pegawai."
          },
          "instruction": "Buat tabel `categories` (kolom: `id` INT PRIMARY KEY, `name` VARCHAR(50)) agar data kategori produk memenuhi aturan 3NF.",
          "starterCode": "-- Tulis query pembuatan tabel 3NF di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+TABLE\\s+categories\\s*\\(\\s*id\\s+INT\\s+PRIMARY\\s+KEY\\s*,\\s*name\\s+VARCHAR\\(50\\)\\s*\\)\\s*;",
              "message": "Buat tabel categories sesuai spesifikasi 3NF yang diminta"
            }
          ],
          "solution": "CREATE TABLE categories (\n  id INT PRIMARY KEY,\n  name VARCHAR(50)\n);"
        },
        {
          "kind": "step",
          "id": "sql-5-2",
          "title": "Kapan Denormalisasi Masuk Akal?",
          "explanation": "Memilih tipe data yang presisi seperti `VARCHAR(100)` untuk nama, `INT` untuk jumlah, dan `TIMESTAMP` untuk waktu sangat mempengaruhi konsumsi memori dan kecepatan kueri. Menggunakan tipe data yang tepat mencegah pemborosan ruang penyimpanan RAM/Disk dan memastikan operasi matematika atau tanggal berjalan valid. Penentuan tipe data ini dilakukan saat merancang skema awal tabel menggunakan perintah `CREATE TABLE`. Jebakan umum pemula adalah menggunakan tipe data teks seperti `VARCHAR` untuk menyimpan tanggal atau angka rupiah, yang merusak urutan pengurutan (`ORDER BY`).",
          "example": {
            "code": "SELECT order_id, customer_name, total_price\nFROM denormalized_orders\nWHERE status = 'PAID';",
            "output": "Hasil lebih cepat karena tidak perlu melakukan JOIN ke tabel customers.",
            "note": "Denormalisasi menyimpan nama pelanggan langsung di tabel pesanan."
          },
          "instruction": "Lakukan query SELECT untuk mengambil `id`, `product_name`, dan `price` dari tabel denormalisasi `denormalized_sales` di mana `price` lebih dari 1000.",
          "starterCode": "-- Tulis query SELECT denormalisasi di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+id\\s*,\\s*product_name\\s*,\\s*price\\s+FROM\\s+denormalized_sales\\s+WHERE\\s+price\\s*>\\s*1000\\s*;",
              "message": "Ambil id, product_name, price dari denormalized_sales dengan kondisi price > 1000"
            }
          ],
          "solution": "SELECT id, product_name, price FROM denormalized_sales WHERE price > 1000;"
        },
        {
          "kind": "step",
          "id": "sql-5-3",
          "title": "Entity Relationship Diagram (ERD)",
          "explanation": "Constraint `NOT NULL` memastikan bahwa suatu kolom tidak boleh dibiarkan kosong, sedangkan constraint `UNIQUE` menjamin bahwa tidak boleh ada dua baris yang memiliki nilai sama pada kolom tersebut. Menggabungkan keduanya pada kolom `email` memastikan bahwa setiap pengguna wajib memiliki email dan tidak ada akun yang terdaftar dengan email duplikat. Aturan ini diterapkan langsung di tingkat database sebagai benteng pertahanan integritas data aplikasi. Jebakan utamanya adalah tidak memberikan penanganan error yang baik di backend saat constraint `UNIQUE` melempar exception akibat input duplikat.",
          "example": {
            "code": "CREATE TABLE comments (\n  id INT PRIMARY KEY,\n  post_id INT,\n  FOREIGN KEY (post_id) REFERENCES posts(id)\n);",
            "output": "Tabel comments berhasil dibuat dengan relasi ke posts.",
            "note": "Menghindari masuknya post_id fiktif ke tabel comments."
          },
          "instruction": "Buat tabel `reviews` yang memiliki kolom `id` (INT PRIMARY KEY) dan `product_id` (INT) sebagai constraint foreign key yang mereferensikan `products(id)`.",
          "starterCode": "-- Tulis query pembuatan tabel dengan FK di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+TABLE\\s+reviews\\s*\\([\\s\\S]*?id\\s+INT\\s+PRIMARY\\s+KEY[\\s\\S]*?product_id\\s+INT[\\s\\S]*?FOREIGN\\s+KEY\\s*\\(\\s*product_id\\s*\\)\\s+REFERENCES\\s+products\\s*\\(\\s*id\\s*\\)[\\s\\S]*?\\)\\s*;",
              "message": "Pastikan tabel reviews memiliki id dan product_id sebagai FK"
            }
          ],
          "solution": "CREATE TABLE reviews (\n  id INT PRIMARY KEY,\n  product_id INT,\n  FOREIGN KEY (product_id) REFERENCES products(id)\n);"
        },
        {
          "kind": "step",
          "id": "sql-5-4",
          "title": "Constraint: NOT NULL, UNIQUE, CHECK",
          "explanation": "Batasan `ON DELETE CASCADE` pada Foreign Key memberitahu database untuk otomatis menghapus seluruh baris anak jika baris induk di tabel utama dihapus. Sebagai contoh, jika sebuah akun pengguna dihapus dari tabel `users`, seluruh data transaksi terkait di tabel `orders` akan ikut terhapus secara otomatis. Fitur ini menghindarkan akumulasi \"data yatim piatu\" (orphan rows) di database kamu. Jebakan berbahaya adalah tidak sengaja menghapus data induk penting yang berdampak pada terhapusnya ribuan data transaksi anak secara permanen tanpa sengaja.",
          "example": {
            "code": "CREATE TABLE products (\n  id SERIAL PRIMARY KEY,\n  sku VARCHAR(50) UNIQUE NOT NULL,\n  price INT CHECK (price >= 0)\n);",
            "output": "Database menolak harga bernilai negatif atau SKU duplikat.",
            "note": "CHECK constraint menjamin konsistensi data bisnis di layer terbawah."
          },
          "instruction": "Buat tabel accounts dengan kolom balance yang tidak boleh kurang dari 0 menggunakan CHECK constraint.",
          "starterCode": "-- Tulis CREATE TABLE CHECK di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+TABLE\\s+accounts\\s*\\(\\s*balance\\s+INT\\s+CHECK\\s*\\(\\s*balance\\s*>=\\s*0\\s*\\)\\s*\\)\\s*;?",
              "message": "Definisikan constraint CHECK pada pembuatan tabel"
            }
          ],
          "solution": "CREATE TABLE accounts (balance INT CHECK (balance >= 0));"
        },
        {
          "kind": "step",
          "id": "sql-5-5",
          "title": "Indexing dengan B-Tree",
          "explanation": "Index B-Tree (Balanced Tree) adalah struktur data khusus yang mempercepat pencarian baris pada tabel dari skala linear O(N) menjadi skala logaritmik O(log N). Membuat indeks dengan `CREATE INDEX idx_users_email ON users(email)` membuat pencarian berdasarkan email berlangsung dalam orde milidetik meski tabel ber-isi jutaan baris. Indeks wajib ditambahkan pada kolom-kolom yang sering muncul di klausul `WHERE`, `JOIN`, dan `ORDER BY`. Jebakan yang perlu diingat adalah indeks membutuhkan ruang memori disk tambahan dan memperlambat proses `INSERT`/`UPDATE`.",
          "example": {
            "code": "CREATE INDEX idx_users_email ON users(email);",
            "output": "CREATE INDEX\nTime: 42.118 ms",
            "note": "Primary Key dan kolom UNIQUE otomatis diberi index oleh database."
          },
          "instruction": "Buat index bernama idx_orders_user_id pada kolom user_id di tabel orders.",
          "starterCode": "-- Tulis CREATE INDEX di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+INDEX\\s+idx_orders_user_id\\s+ON\\s+orders\\(\\s*user_id\\s*\\)\\s*;?",
              "message": "Gunakan: CREATE INDEX idx_orders_user_id ON orders(user_id);"
            }
          ],
          "solution": "CREATE INDEX idx_orders_user_id ON orders(user_id);"
        },
        {
          "kind": "step",
          "id": "sql-5-6",
          "title": "Kapan Index Membantu & Memperlambat",
          "explanation": "Meskipun indeks sangat efektif mempercepat kueri `SELECT`, menambah terlalu banyak indeks (over-indexing) akan memperlambat operasi mutasi data seperti `INSERT`, `UPDATE`, dan `DELETE`. Setiap kali data baru disisipkan, mesin database harus memperbarui seluruh pohon B-Tree indeks terkait secara serentak. Kamu harus bijak memilih kolom mana yang paling sering digunakan dalam filter kueri produksi. Jebakan pemula adalah mengindeks kolom dengan kardinalitas rendah (seperti kolom `gender` yang hanya berisi dua variasi nilai), yang membuat mesin memilih Full Table Scan dibanding indeks.",
          "example": {
            "code": "CREATE INDEX idx_user_email ON users(email);",
            "output": "Index idx_user_email berhasil dibuat.",
            "note": "Query pencarian berdasarkan email sekarang jauh lebih cepat."
          },
          "instruction": "Buat index dengan nama `idx_order_status` pada kolom `status` di tabel `orders`.",
          "starterCode": "-- Tulis query pembuatan index di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+INDEX\\s+idx_order_status\\s+ON\\s+orders\\s*\\(\\s*status\\s*\\)\\s*;",
              "message": "Gunakan perintah CREATE INDEX idx_order_status ON orders(status);"
            }
          ],
          "solution": "CREATE INDEX idx_order_status ON orders(status);"
        },
        {
          "kind": "step",
          "id": "sql-5-7",
          "title": "Membaca Execution Plan dengan EXPLAIN ANALYZE",
          "explanation": "Perintah `EXPLAIN ANALYZE` menampilkan rencana eksekusi (Query Execution Plan) yang disusun oleh query optimizer beserta estimasi biaya dan waktu nyata eksekusinya. Dengan membaca outputnya, kamu dapat mengetahui apakah kueri kamu melakukan `Seq Scan` (Full Table Scan yang lambat) atau `Index Scan` (pencarian indeks kilat). Alat ini merupakan senjatan utama bagi backend engineer untuk mengdiagnosis dan mempercepat kueri lambat di lingkungan produksi. Jebakan pemula adalah mengabaikan angka `Execution Time` dan hanya melihat struktur kuerinya tanpa mengujinya pada data riil.",
          "example": {
            "code": "EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'budi@test.com';",
            "output": "Tampilan rincian Execution Time dan Scan Method (Index Scan / Seq Scan).",
            "note": "Jika terlihat 'Seq Scan' pada tabel besar, tandanya kamu butuh memasang Index."
          },
          "instruction": "Ketikkan EXPLAIN ANALYZE sebelum query SELECT seluruh data dari products.",
          "starterCode": "-- Tulis EXPLAIN ANALYZE di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "EXPLAIN\\s+ANALYZE\\s+SELECT\\s+\\*\\s+FROM\\s+products\\s*;?",
              "message": "Gunakan: EXPLAIN ANALYZE SELECT * FROM products;"
            }
          ],
          "solution": "EXPLAIN ANALYZE SELECT * FROM products;"
        },
        {
          "kind": "quiz",
          "id": "sql-5-kuis",
          "title": "Kuis: Desain Skema & Index",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Apa efek samping memasang terlalu banyak index pada sebuah tabel?",
              "choices": [
                "Ukuran database menjadi 0 byte",
                "Mempercepat perintah INSERT dan DELETE",
                "Memperlambat penulisan data (INSERT/UPDATE/DELETE) karena setiap index ikut diperbarui",
                "Menghapus Primary Key"
              ],
              "answerIndex": 2,
              "explanation": "Index mempercepat pembacaan tapi harus ikut diperbarui setiap kali data berubah, jadi tabel dengan belasan index akan terasa berat saat menulis. Index juga memakan ruang disk. Aturan praktisnya: pasang index berdasarkan query yang benar-benar sering dijalankan, lalu buktikan manfaatnya dengan EXPLAIN."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Tabel `orders` menyimpan kolom `kota_id`, `kota_nama`, dan `kota_provinsi`. Aturan normalisasi mana yang dilanggar, dan kenapa itu berbahaya?",
              "choices": [
                "1NF \u2014 karena ada kolom bertipe teks",
                "3NF \u2014 kota_nama dan kota_provinsi bergantung pada kota_id, bukan pada primary key pesanan, sehingga data kota terduplikasi dan bisa tidak sinkron",
                "Tidak melanggar apa pun",
                "2NF \u2014 karena tabel punya lebih dari tiga kolom"
              ],
              "answerIndex": 1,
              "explanation": "3NF melarang kolom yang bergantung pada kolom non-key (transitive dependency). Nama kota diulang di ribuan baris pesanan; saat sebuah kota berganti nama, kamu harus memperbarui semuanya dan satu baris terlewat sudah cukup membuat laporan tidak konsisten. Solusinya: simpan kota di tabelnya sendiri dan sisakan kota_id sebagai foreign key."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu ingin memastikan tidak ada dua akun dengan email sama, sekalipun ada bug di aplikasi. Apa yang harus dipasang di database?",
              "choices": [
                "Cukup validasi di form pendaftaran",
                "Constraint UNIQUE pada kolom email",
                "Kolom email dijadikan TEXT",
                "Index biasa (non-unique) pada kolom email"
              ],
              "answerIndex": 1,
              "explanation": "Constraint UNIQUE membuat database sendiri menolak baris kedua dengan email sama, apa pun jalur masuknya \u2014 form, API, atau query manual. Validasi aplikasi tetap perlu demi pesan error yang ramah, tapi ia bisa dilewati dan punya celah race condition. Index biasa hanya mempercepat pencarian tanpa mencegah duplikat."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kolom `created_at` sudah diindeks, tapi query `WHERE YEAR(created_at) = 2026` tetap lambat dan EXPLAIN menunjukkan full scan. Kenapa?",
              "choices": [
                "Index tidak berlaku untuk kolom tanggal",
                "Karena kolom dibungkus fungsi, database harus menghitung YEAR() di setiap baris sehingga index tidak bisa dipakai",
                "Karena tahun 2026 belum lewat",
                "Karena index hanya bekerja pada kolom angka"
              ],
              "answerIndex": 1,
              "explanation": "Index menyimpan nilai kolom apa adanya dalam keadaan terurut. Begitu kolom dibungkus fungsi, nilai yang dicari tidak lagi cocok dengan yang tersimpan di index sehingga database terpaksa memindai seluruh tabel. Perbaikannya: ubah menjadi rentang \u2014 created_at >= '2026-01-01' AND created_at < '2027-01-01' \u2014 atau buat expression index khusus."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu membuat index gabungan `(user_id, created_at)`. Query mana yang TIDAK bisa memanfaatkan index tersebut secara efisien?",
              "choices": [
                "WHERE user_id = 7",
                "WHERE user_id = 7 AND created_at > '2026-01-01'",
                "WHERE created_at > '2026-01-01'",
                "WHERE user_id = 7 ORDER BY created_at"
              ],
              "answerIndex": 2,
              "explanation": "Index gabungan bekerja seperti daftar isi yang diurutkan mulai dari kolom paling kiri (leftmost prefix). Kamu bisa memakainya dengan user_id saja, atau user_id ditambah created_at, tapi tidak bisa melompat langsung ke created_at tanpa menyebut user_id. Karena itu urutan kolom saat membuat index adalah keputusan desain, bukan selera."
            }
          ]
        }
      ]
    },
    {
      "slug": "postgresql",
      "title": "PostgreSQL: Fundamental",
      "description": "Database #1 pilihan developer dunia (58% pemakaian) \u2014 fitur yang membuatnya dipilih untuk stack modern.",
      "topics": [
        "Instalasi & psql: \\l, \\dt, \\d, \\?",
        "Tipe data kaya: array, JSONB, UUID, enum, range",
        "SERIAL vs GENERATED ALWAYS AS IDENTITY (mana yang benar sekarang)",
        "Query JSONB: operator ->, ->>, @>, dan jsonb_path_query",
        "Membuat index pada kolom JSONB (GIN)",
        "Full-text search: tsvector, tsquery, ts_rank",
        "Sequence: currval, nextval, dan jebakan setelah restore",
        "Role, GRANT, dan Row Level Security dasar",
        "Skema (schema) untuk memisahkan domain data"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-6-m1",
          "title": "Pengenalan & Fitur Khusus PostgreSQL",
          "body": "# Pengenalan & Fitur Khusus PostgreSQL\n\nPostgreSQL terkenal sebagai mesin database relasional open-source paling canggih di dunia. Modul ini membahas fitur unggulannya.\n\n## 1. Pengenalan CLI `psql` & Ekosistem PostgreSQL\n\nPostgreSQL (sering disebut Postgres) menawarkan keandalan data tinggi, kepatuhan standar SQL ketat, serta fleksibilitas fitur modern.\n\n### Perintah Penting CLI `psql`:\n- `psql -U postgres -d nama_db`: Membuka sesi interaktif terminal.\n- `\\l`: Menampilkan daftar seluruh database.\n- `\\dt`: Menampilkan daftar tabel di skema aktif.\n- `\\d nama_tabel`: Menampilkan struktur detail kolom, tipe data, dan indeks tabel.\n- `\\?`: Menampilkan bantuan perintah internal psql.\n\n---\n\n## 2. Tipe Data Modern: JSONB, UUID & Identity Column\n\nPostgreSQL memiliki tipe data kaya yang tidak dimiliki oleh database relasional tradisional lainnya:\n\n| Tipe Data Khusus | Keunggulan Utama | Contoh Sintaks / Penggunaan |\n|---|---|---|\n| `JSONB` | Menyimpan dokumen JSON terkompresi biner yang **dapat di-indeks (GIN Index)** | `payload JSONB` |\n| `UUID` | ID acak 128-bit unik secara global (mencegah enumerasi URL) | `id UUID DEFAULT gen_random_uuid()` |\n| `GENERATED ALWAYS AS IDENTITY` | Standar SQL modern pengganti tipe `SERIAL` lama | `id INT GENERATED ALWAYS AS IDENTITY` |\n| `ENUM` | Membatasi variasi nilai teks langsung di tingkat skema | `CREATE TYPE status_enum AS ENUM(...)` |\n\n```text\n  OPERATOR JSONB POSTGRESQL:\n  payload -> 'user'     --> Mengembalikan objek JSON\n  payload ->> 'name'    --> Mengembalikan Teks murni (String)\n  payload @> '{\"role\":\"admin\"}' --> Mengecek apakah JSON memuat pasangan key-value\n```\n\n---\n\n## 3. Full-Text Search PostgreSQL\n\nTidak perlu memasang mesin pencari terpisah seperti Elasticsearch untuk aplikasi skala menengah! PostgreSQL mendukung Full-Text Search bawaan menggunakan `to_tsvector()` dan `to_tsquery()` yang mampu memahami stemmed words (kata dasar) dan relevansi peringkat (`ts_rank`).\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **SERIAL vs IDENTITY:** Tipe `SERIAL` lama membuat `SEQUENCE` terpisah secara bebas yang rentan tidak sengaja terhapus atau kehilangan hak akses saat migrasi. Gunakan selalu `GENERATED ALWAYS AS IDENTITY`.\n2. **Kekeliruan Operator JSONB (`->` vs `->>`):** Menggunakan `->` saat membandingkan string dengan kata kunci `WHERE` akan gagal karena hasilnya masih terbungkus petik JSON. Gunakan `->>` untuk mendapatkan nilai teks murni.\n3. **Sequence Out-of-Sync Setelah Import Data:** Memasukkan baris data bertipe ID manual sering membuat nilai `sequence` tertinggal. Kamu harus me-reset-nya dengan `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`.\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Backend modern berteknologi Node.js, Python (Django/FastAPI), Ruby on Rails, Elixir, serta platform BaaS populer seperti **Supabase**.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan interview favorit: *\"Apa perbedaan `JSON` dan `JSONB` di PostgreSQL, dan bagaimana cara membuat indeks pada kolom JSONB?\"*\n- Code reviewer senior di perusahaan SaaS akan meminta kamu memakai `UUID` ketimbang integer berurutan untuk entitas sensitif seperti pesanan & tagihan."
        },
        {
          "kind": "step",
          "id": "sql-6-1",
          "title": "PostgreSQL CLI (psql) Connection",
          "explanation": "Aplikasi CLI `psql` adalah alat terminal resmi untuk berinteraksi dan mengelola server database PostgreSQL secara langsung. Kamu dapat menghubungkan psql menggunakan perintah `psql -U postgres -d dbname` dan menggunakan perintah meta internal seperti `\\l` untuk melihat database, `\\dt` untuk melihat tabel, dan `\\d` untuk melihat detail skema. Alat ini wajib dikuasai oleh pengembang backend untuk pemeliharaan server dan eksekusi skrip migrasi. Jebakan umum pemula adalah lupa bahwa perintah meta psql diawali tanda backslash `\\` dan tidak memerlukan tanda titik koma `;` di akhir.",
          "example": {
            "code": "psql -U postgres -d toko_online",
            "output": "psql (16.1)\nType \"help\" for help.\n\ntoko_online=#",
            "note": "Gunakan \\q di dalam prompt psql untuk keluar dari sesi CLI."
          },
          "instruction": "Tuliskan perintah CLI psql untuk terhubung ke database bernama 'aplikasi_db' sebagai user 'admin_user'.",
          "starterCode": "# Tulis perintah psql di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "psql\\s+-U\\s+admin_user\\s+-d\\s+aplikasi_db",
              "message": "Gunakan: psql -U admin_user -d aplikasi_db"
            }
          ],
          "solution": "psql -U admin_user -d aplikasi_db"
        },
        {
          "kind": "step",
          "id": "sql-6-2",
          "title": "Tipe Data Kaya: JSONB & UUID",
          "explanation": "PostgreSQL mendukung tipe data kaya modern seperti `JSONB` untuk menyimpan dokumen JSON terstruktur berformat biner dan `UUID` untuk kunci unik global 128-bit. Tipe data `JSONB` memungkinkan kamu menyimpan data fleksibel yang dapat di-indeks menggunakan GIN Index, sementara `UUID` mencegah serangan enumerasi URL pada ID entitas aplikasi. Tipe data khusus ini sangat populer dipakai di arsitektur aplikasi modern berbasis SaaS dan Microservices. Jebakan utamanya adalah keliru memilih tipe `JSON` biasa dibanding `JSONB`, di mana tipe `JSON` biasa menyimpan teks mentah tanpa dukungan indeks biner.",
          "example": {
            "code": "CREATE TABLE events (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  payload JSONB\n);",
            "output": "CREATE TABLE",
            "note": "gen_random_uuid() menghasilkan nilai UUID v4 otomatis tanpa membutuhkan ekstensi luar."
          },
          "instruction": "Definisikan kolom id bertipe UUID yang menjadi PRIMARY KEY dan otomatis mendapatkan nilai awal dari gen_random_uuid().",
          "starterCode": "-- Tulis definisi kolom id di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "id\\s+UUID\\s+PRIMARY\\s+KEY\\s+DEFAULT\\s+gen_random_uuid\\(\\)",
              "message": "Gunakan sintaks UUID gen_random_uuid()"
            }
          ],
          "solution": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()"
        },
        {
          "kind": "step",
          "id": "sql-6-3",
          "title": "Query Data JSONB (Operator -> dan ->>)",
          "explanation": "PostgreSQL menyediakan operator khusus untuk membaca data di dalam kolom `JSONB`, yaitu `->` yang mengembalikan nilai ber-tipe JSON dan `->>` yang mengembalikan nilai ber-tipe Teks murni. Menggunakan `payload->>'name'` mengambil properti nama sebagai string biasa yang dapat dibandingkan di klausul `WHERE`. Perintah ini digunakan saat kamu membangun aplikasi yang menyimpan atribut produk dinamis atau log payload webhook. Jebakan klasik pemula adalah menggunakan operator `->` saat melakukan perbandingan string di klausul `WHERE`, yang akan gagal karena hasilnya masih terbungkus kutip JSON.",
          "example": {
            "code": "SELECT payload->>'city' AS kota FROM events WHERE payload->>'status' = 'active';",
            "output": "   kota\n----------\n Jakarta\n Surabaya",
            "note": "Gunakan ->> saat ingin melakukan perbandingan string atau penyaringan WHERE."
          },
          "instruction": "Tulis query SELECT untuk mengambil kolom 'payload->>'name'' dari tabel 'logs' di mana bidang 'payload->>'role'' bernilai 'admin'.",
          "starterCode": "-- Tulis query JSONB di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+payload->>'name'\\s+FROM\\s+logs\\s+WHERE\\s+payload->>'role'\\s*=\\s*['\"]admin['\"]\\s*;?",
              "message": "Gunakan: SELECT payload->>'name' FROM logs WHERE payload->>'role' = 'admin';"
            }
          ],
          "solution": "SELECT payload->>'name' FROM logs WHERE payload->>'role' = 'admin';"
        },
        {
          "kind": "step",
          "id": "sql-6-4",
          "title": "Full-Text Search PostgreSQL (to_tsvector & to_tsquery)",
          "explanation": "Fitur Full-Text Search di PostgreSQL memungkinkan pencarian kata teks tingkat lanjut menggunakan fungsi `to_tsvector()` untuk mengindeks dokumen dan `to_tsquery()` untuk mencocokkan kata kunci. Sistem pencarian ini memahami variasi kata dasar (stemming) dan dapat diurutkan berdasarkan tingkat relevansi skor (`ts_rank`). Fitur ini dipakai untuk membuat kolom pencarian artikel atau produk tanpa perlu memasang search engine eksternal seperti Elasticsearch. Jebakan utamanya adalah tidak membuat GIN Index pada `to_tsvector()`, yang menyebabkan pencarian teks tetap melakukan scan tabel lambat.",
          "example": {
            "code": "SELECT * FROM articles WHERE to_tsvector('indonesian', title) @@ to_tsquery('kopi');",
            "output": "Daftar artikel yang memuat kata 'kopi' pada kolom title.",
            "note": "Fungsi ini melakukan pencarian kata dasar (stemming) tanpa butuh Elasticsearch."
          },
          "instruction": "Tulis klausul WHERE yang memeriksa apakah penjelmaan tsvector dari kolom 'body' cocok (menggunakan operator @@) dengan tsquery untuk kata 'database'.",
          "starterCode": "-- Tulis kondisi WHERE tsvector di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WHERE\\s+to_tsvector\\(\\s*body\\s*\\)\\s*@@\\s*to_tsquery\\(\\s*['\"]database['\"]\\s*\\)",
              "message": "Gunakan operator @@ to_tsquery('database')"
            }
          ],
          "solution": "WHERE to_tsvector(body) @@ to_tsquery('database');"
        },
        {
          "kind": "step",
          "id": "sql-6-5",
          "title": "Identity Column (GENERATED ALWAYS AS IDENTITY)",
          "explanation": "Klausul `GENERATED ALWAYS AS IDENTITY` adalah standar SQL ANSI modern pengganti tipe data `SERIAL` lama di PostgreSQL untuk menghasilkan nomor ID numerik otomatis. Berbeda dari `SERIAL` yang membuat objek urutan terpisah yang rentan kehilangan izin akses, kolom `IDENTITY` terintegrasi secara ketat dengan tabel sehingga jauh lebih aman dari kesalahan manipulasi manual. Fitur ini menjadi standar wajib pada perancangan skema PostgreSQL versi 10 ke atas. Jebakan pemula adalah tetap mencoba menyisipkan nilai ID manual ke kolom `GENERATED ALWAYS` tanpa menggunakan opsi `OVERRIDING SYSTEM VALUE`.",
          "example": {
            "code": "CREATE TABLE tags (\n  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  name TEXT\n);",
            "output": "CREATE TABLE",
            "note": "Identity column mencegah penyisipan nilai ID manual yang tidak disengaja."
          },
          "instruction": "Definisikan kolom 'id' bertipe INT yang menggunakan GENERATED ALWAYS AS IDENTITY dan berfungsi sebagai PRIMARY KEY.",
          "starterCode": "-- Tulis kolom IDENTITY di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "id\\s+INT\\s+GENERATED\\s+ALWAYS\\s+AS\\s+IDENTITY\\s+PRIMARY\\s+KEY",
              "message": "Gunakan sintaks GENERATED ALWAYS AS IDENTITY"
            }
          ],
          "solution": "id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY"
        },
        {
          "kind": "step",
          "id": "sql-6-6",
          "title": "Role & Permission Manajemen (GRANT / REVOKE)",
          "explanation": "PostgreSQL memiliki sistem kontrol hak akses berbasis Role dan permission granular menggunakan perintah `GRANT` dan `REVOKE`. Kamu dapat membuat role khusus aplikasi yang hanya memiliki izin `SELECT` dan `INSERT` tanpa izin menghapus tabel (`DROP`) demi keamanan server produksi. Fitur manajemen akses ini diterapkan untuk membatasi hak akses koneksi backend agar mematuhi standar keamanan industri. Jebakan terbesarnya adalah menjalankan aplikasi backend di produksi menggunakan akun superuser `postgres`, yang sangat berbahaya jika terjadi celah SQL Injection.",
          "example": {
            "code": "GRANT SELECT, INSERT ON ALL TABLES IN SCHEMA public TO app_user;",
            "output": "GRANT",
            "note": "Prinsip Least Privilege: berikan izin minimal yang dibutuhkan oleh aplikasi."
          },
          "instruction": "Berikan hak akses SELECT dan INSERT pada tabel 'orders' kepada user 'app_reporter'.",
          "starterCode": "-- Tulis perintah GRANT di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "GRANT\\s+SELECT\\s*,\\s*INSERT\\s+ON\\s+orders\\s+TO\\s+app_reporter\\s*;?",
              "message": "Gunakan: GRANT SELECT, INSERT ON orders TO app_reporter;"
            }
          ],
          "solution": "GRANT SELECT, INSERT ON orders TO app_reporter;"
        },
        {
          "kind": "quiz",
          "id": "sql-6-kuis",
          "title": "Kuis: PostgreSQL Spesifik",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Operator PostgreSQL mana yang digunakan untuk mengekstrak bidang JSONB langsung sebagai string teks murni?",
              "choices": [
                "->>",
                "->",
                "#>",
                "=>"
              ],
              "answerIndex": 0,
              "explanation": "Operator `->>` mengembalikan bidang JSON sebagai string teks biasa, sedangkan `->` mengembalikan objek JSON."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Mengapa tipe data JSONB di PostgreSQL lebih direkomendasikan dibanding tipe JSON biasa untuk penyimpanan dokumen fleksibel?",
              "choices": [
                "Karena JSONB disimpan dalam bentuk biner terurai yang jauh lebih cepat di-index dan di-query",
                "Karena JSONB mengompres teks menjadi file zip otomatis",
                "Karena JSON biasa tidak mengizinkan penulisan angka desimal",
                "Karena JSONB hanya bisa dibaca oleh bahasa Python"
              ],
              "answerIndex": 0,
              "explanation": "JSONB mengurai dokumen JSON ke format biner terstruktur saat disimpan sehingga pencarian bidang dan indeks GIN berjalan sangat kencang."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Perintah psql mana yang digunakan untuk melihat daftar tabel yang ada di dalam database saat ini?",
              "choices": [
                "\\dt",
                "\\l",
                "\\d",
                "\\q"
              ],
              "answerIndex": 0,
              "explanation": "\\dt (display tables) menampilkan seluruh daftar tabel pada schema aktif."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu membuat tabel baru di PostgreSQL 18 dan butuh kolom id yang naik otomatis. Mana yang direkomendasikan sekarang, dan kenapa?",
              "choices": [
                "SERIAL, karena paling singkat ditulis",
                "GENERATED ALWAYS AS IDENTITY, karena sesuai standar SQL dan mencegah id diisi manual sehingga sequence tidak jadi tidak sinkron",
                "Kolom TEXT berisi angka",
                "Tidak perlu id sama sekali"
              ],
              "answerIndex": 1,
              "explanation": "SERIAL masih bekerja, tapi ia hanya gula sintaks lama yang membuat sequence terpisah dan tetap mengizinkan aplikasi menyisipkan id manual. Kalau itu terjadi, sequence tertinggal dan INSERT berikutnya gagal karena id-nya bentrok \u2014 jebakan yang sering muncul setelah restore data. GENERATED ALWAYS AS IDENTITY adalah bentuk standar SQL yang menutup celah itu."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Satu database dipakai banyak tenant, dan setiap tenant hanya boleh melihat barisnya sendiri walaupun mengakses lewat koneksi SQL langsung. Fitur PostgreSQL apa yang menegakkan aturan itu di level database?",
              "choices": [
                "Row Level Security (RLS) dengan policy per tabel",
                "Menambahkan WHERE tenant_id di setiap query aplikasi",
                "Membuat index pada kolom tenant_id",
                "Menyimpan data tenant di file terpisah"
              ],
              "answerIndex": 0,
              "explanation": "RLS memasang aturan penyaringan di tabel itu sendiri, sehingga siapa pun yang mengakses \u2014 termasuk lewat psql atau tool BI \u2014 otomatis hanya melihat baris yang diizinkan. Mengandalkan WHERE di aplikasi tetap perlu, tapi satu query yang lupa filter langsung membocorkan data tenant lain. Index hanya soal kecepatan, bukan keamanan."
            }
          ]
        }
      ]
    },
    {
      "slug": "mysql",
      "title": "MySQL: Fundamental",
      "description": "Pasangan setia Laravel dan mayoritas hosting Indonesia \u2014 jalur tercepat ke pekerjaan lokal.",
      "topics": [
        "Instalasi & mysql CLI: SHOW DATABASES, SHOW TABLES, DESCRIBE",
        "MySQL vs MariaDB: apa bedanya dan kenapa hosting sering memakai MariaDB",
        "Storage engine InnoDB (dan kenapa MyISAM ditinggalkan)",
        "AUTO_INCREMENT: perilaku setelah DELETE dan setelah restart",
        "Charset utf8mb4 & collation \u2014 jebakan emoji dan urutan sortir",
        "Tipe data: perbedaan penting dari PostgreSQL (TINYINT, ENUM, TEXT)",
        "DATETIME vs TIMESTAMP & penanganan timezone",
        "Tipe JSON di MySQL & generated column untuk mengindeksnya",
        "User, GRANT, dan hak akses per-database"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-7-m1",
          "title": "Pengenalan & Fitur Khusus MySQL",
          "body": "# Pengenalan & Fitur Khusus MySQL\n\nMySQL (dan varian fork-nya MariaDB) adalah mesin database relasional paling populer di dunia web hosting dan ekosistem PHP/Laravel.\n\n## 1. Pengenalan CLI `mysql` & Storage Engine\n\nMySQL mendukung arsitektur **Storage Engine** modular di mana setiap tabel bisa menggunakan mesin penyimpanan berbeda.\n\n### Storage Engine Utama:\n- **InnoDB (Default & Wajib):** Mendukung Transaksi ACID, Foreign Key Constraints, dan Row-Level Locking.\n- **MyISAM (Legacy):** Mesin lama tanpa transaksi dan hanya Table-Level Locking. Jangan pernah gunakan MyISAM untuk aplikasi produksi modern!\n\n### Perintah Penting CLI `mysql`:\n- `SHOW DATABASES;`: Menampilkan daftar database.\n- `USE nama_database;`: Memilih database aktif.\n- `SHOW TABLES;`: Menampilkan daftar tabel.\n- `DESCRIBE nama_tabel;`: Menampilkan struktur detail kolom tabel.\n\n---\n\n## 2. Magnet Bug Pemula: Charset `utf8` vs `utf8mb4`\n\nIni adalah jebakan paling berbahaya di MySQL!\n- **`utf8` di MySQL (Legacy):** Hanya mendukung maksimal 3 bytes per karakter. Menimpan emoji (seperti \ud83d\ude00 atau \ud83d\ude80) atau karakter Mandarin akan melempar error `Incorrect string value`.\n- **`utf8mb4` (Full Unicode):** Mendukung 4 bytes per karakter secara utuh. Gunakan selalu `utf8mb4` dan collation `utf8mb4_unicode_ci` atau `utf8mb4_0900_ai_ci`.\n\n```text\n+--------------------------------------------------------------------------+\n|                  PERBEDAAN TIPE TANGGAL PADA MYSQL                       |\n+---------------------+-----------------------+----------------------------+\n| Tipe Data           | Rentang Tahun         | Penyimpanan & Timezone     |\n+---------------------+-----------------------+----------------------------+\n| DATETIME            | 1000-01-01 s/d 9999   | 8 Bytes, Statis (No TZ)    |\n| TIMESTAMP           | 1970-01-01 s/d 2038   | 4 Bytes, Auto-convert UTC  |\n+---------------------+-----------------------+----------------------------+\n```\n\n---\n\n## 3. AUTO_INCREMENT & `LAST_INSERT_ID()`\n\nMySQL menggunakan kata kunci `AUTO_INCREMENT` untuk menghasilkan nomor ID numerik berurutan secara otomatis. Untuk mengambil nilai ID yang baru saja dihasilkan oleh kueri `INSERT` di sesi yang sama, panggil fungsi `LAST_INSERT_ID()`.\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **Gagal Menyimpan Emoji akibat Charset `utf8`:** Banyak aplikasi terhenti crash saat pengguna menginput emoji pada komentar karena tabel MySQL lama masih diset ke charset `utf8` 3-byte.\n2. **Masalah Tahun 2038 pada `TIMESTAMP`:** Tipe `TIMESTAMP` berbasis integer 32-bit akan mengalami overflow (masalah Year 2038) pada tanggal 19 Januari 2038. Pertimbangkan menggunakan `DATETIME` untuk rentang waktu jauh di masa depan.\n3. **Mengabaikan `sql_mode` Strict:** Di MySQL versi lama tanpa `STRICT_TRANS_TABLES`, menginput string panjang ke kolom pendek akan memotong teks secara diam-diam (truncate warning) tanpa melempar Error!\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Aplikasi berbasis WordPress, Laravel, Symfony, E-Commerce Magento, dan berbagai layanan web hosting murah / shared hosting.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan interview klasik: *\"Mengapa kita wajib menggunakan storage engine InnoDB dibanding MyISAM, dan apa beda `DATETIME` dengan `TIMESTAMP`?\"*\n- Di code review backend Laravel, Tech Lead akan memastikan konfigurasi database kamu sudah menggunakan `utf8mb4` di `config/database.php`."
        },
        {
          "kind": "step",
          "id": "sql-7-1",
          "title": "Storage Engine: InnoDB vs MyISAM",
          "explanation": "MySQL mendukung arsitektur Storage Engine modular di mana `InnoDB` merupakan mesin default wajib yang mendukung Transaksi ACID, Foreign Key, dan Row-Level Locking. Berbeda dari InnoDB, mesin penyimpanan lama `MyISAM` tidak mendukung transaksi dan hanya menggunakan Table-Level Locking yang rentan menyebabkan kebuntuan (lock contention). InnoDB selalu digunakan pada seluruh aplikasi produksi modern untuk menjamin keutuhan data. Jebakan pemula adalah tidak sengaja membuat tabel baru dengan mesin `MyISAM`, yang menyebabkan constraint Foreign Key diabaikan secara diam-diam oleh MySQL.",
          "example": {
            "code": "CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  username VARCHAR(50)\n) ENGINE=InnoDB;",
            "output": "Query OK, 0 rows affected",
            "note": "InnoDB adalah storage engine bawaan MySQL sejak versi 5.5."
          },
          "instruction": "Tambahkan klausa penentuan storage engine InnoDB pada akhir perintah pembuatan tabel.",
          "starterCode": "-- Tulis klausul ENGINE di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ENGINE\\s*=\\s*InnoDB",
              "message": "Tuliskan: ENGINE=InnoDB"
            }
          ],
          "solution": "ENGINE=InnoDB"
        },
        {
          "kind": "step",
          "id": "sql-7-2",
          "title": "Charset utf8mb4 untuk Dukungan Emoji Full",
          "explanation": "Set pengodean karakter `utf8mb4` di MySQL adalah satu-satunya charset yang mendukung seluruh karakter Unicode 4-byte termasuk emoji (\ud83d\ude00), simbol khusus, dan karakter bahasa asing. Kebiasaan menggunakan charset `utf8` lama di MySQL sangat berbahaya karena hanya mendukung 3-byte per karakter, sehingga menginput emoji akan melempar Error fatal. Pengaturan charset `utf8mb4` wajib dikonfigurasi saat membuat database dan tabel baru pada aplikasi web modern. Jebakan yang sering membingungkan adalah aplikasi crash saat pengguna memasukkan emoji di kolom komentar akibat tabel masih ber-charset `utf8`.",
          "example": {
            "code": "ALTER DATABASE toko_db CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;",
            "output": "Query OK, 1 row affected",
            "note": "utf8mb4_unicode_ci memberikan akurasi pengurutan teks lintas bahasa terbaik."
          },
          "instruction": "Ubah tabel 'comments' agar menggunakan CHARACTER SET utf8mb4.",
          "starterCode": "-- Tulis klausa CHARACTER SET di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ALTER\\s+TABLE\\s+comments\\s+CHARACTER\\s+SET\\s*=?\\s*utf8mb4\\s*;?",
              "message": "Gunakan: ALTER TABLE comments CHARACTER SET utf8mb4;"
            }
          ],
          "solution": "ALTER TABLE comments CHARACTER SET utf8mb4;"
        },
        {
          "kind": "step",
          "id": "sql-7-3",
          "title": "AUTO_INCREMENT & LAST_INSERT_ID()",
          "explanation": "Atribut `AUTO_INCREMENT` pada MySQL menghasilkan nilai integer berurutan secara otomatis untuk Primary Key setiap kali baris baru disisipkan. Untuk mengambil nilai ID yang baru saja dibuat di dalam sesi koneksi yang sama, kamu dipanggil fungsi `LAST_INSERT_ID()`. Mekanisme ini digunakan pada backend saat kamu ingin menyisipkan baris induk lalu segera menyisipkan baris anak ber-Foreign Key ID tersebut. Jebakan yang perlu diwaspadai adalah nilai AUTO_INCREMENT dapat melompat atau tidak berurutan jika terjadi kegagalan transaksi `ROLLBACK`.",
          "example": {
            "code": "INSERT INTO categories (name) VALUES ('Elektronik');\nSELECT LAST_INSERT_ID();",
            "output": "   LAST_INSERT_ID()\n-------------------\n 42",
            "note": "LAST_INSERT_ID() terisolasi per koneksi user sehingga tidak akan tertukar dengan user lain."
          },
          "instruction": "Tulis query untuk mengambil nilai ID auto-increment yang baru saja disisipkan pada koneksi aktif.",
          "starterCode": "-- Tulis query LAST_INSERT_ID di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+LAST_INSERT_ID\\(\\)\\s*;?",
              "message": "Gunakan: SELECT LAST_INSERT_ID();"
            }
          ],
          "solution": "SELECT LAST_INSERT_ID();"
        },
        {
          "kind": "step",
          "id": "sql-7-4",
          "title": "Tipe Tanggal: DATETIME vs TIMESTAMP",
          "explanation": "MySQL memiliki dua tipe data tanggal utama: `DATETIME` menyimpan tanggal dan waktu statis 8-byte (rentang tahun 1000-9999), sedangkan `TIMESTAMP` menyimpan tanggal 4-byte yang otomatis dikonversi ke timezone UTC server (rentang 1970-2038). Tipe `TIMESTAMP` sangat cocok untuk mencatat jejak waktu (`created_at`) aplikasi berskala global yang memiliki pengguna di berbagai zona waktu. Jebakan yang harus diwaspadai adalah batasan Year 2038 Problem pada `TIMESTAMP`, di mana nilai tanggal setelah 19 Januari 2038 akan mengalami overflow.",
          "example": {
            "code": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
            "output": "Waktu otomatis tercatat dan terbarui dalam UTC.",
            "note": "Gunakan TIMESTAMP untuk aplikasi web yang diakses dari berbagai zona waktu dunia."
          },
          "instruction": "Definisikan kolom 'created_at' bertipe TIMESTAMP yang nilai utamanya (DEFAULT) adalah CURRENT_TIMESTAMP.",
          "starterCode": "-- Tulis kolom TIMESTAMP di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "created_at\\s+TIMESTAMP\\s+DEFAULT\\s+CURRENT_TIMESTAMP",
              "message": "Gunakan: created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
            }
          ],
          "solution": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
        },
        {
          "kind": "step",
          "id": "sql-7-5",
          "title": "Backup & Restore dengan mysqldump",
          "explanation": "Perintah CLI `mysqldump` digunakan untuk membuat file cadangan (backup) struktur skema dan isi data dari database MySQL ke dalam format file skrip SQL. File hasil backup ini dapat di-restore kembali ke server MySQL lain menggunakan perintah `mysql -u root -p dbname < backup.sql`. Prosedur backup ini wajib dijadwalkan secara berkala (cron job) pada setiap server database produksi untuk mengantisipasi musibah kerusakan data. Jebakan pemula adalah melakukan dump pada database raksasa tanpa opsi `--single-transaction`, yang dapat mengunci seluruh tabel dan menghentikan layanan aplikasi.",
          "example": {
            "code": "mysqldump -u root -p toko_db > backup_toko.sql",
            "output": "File dump backup_toko.sql berhasil dibuat.",
            "note": "Untuk me-restore: mysql -u root -p toko_db < backup_toko.sql."
          },
          "instruction": "Tulis perintah terminal mysqldump untuk mengekspor database bernama 'production_db' oleh user 'root' (dengan prompt password -p) ke berkas 'dump.sql'.",
          "starterCode": "# Tulis perintah mysqldump di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "mysqldump\\s+-u\\s+root\\s+-p\\s+production_db\\s*>\\s*dump\\.sql",
              "message": "Gunakan perintah mysqldump sesuai instruksi"
            }
          ],
          "solution": "mysqldump -u root -p production_db > dump.sql"
        },
        {
          "kind": "quiz",
          "id": "sql-7-kuis",
          "title": "Kuis: MySQL Spesifik",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Mengapa sebaiknya menggunakan charset `utf8mb4` dibanding `utf8` standar pada database MySQL?",
              "choices": [
                "Karena utf8mb4 membuat file database lebih kecil",
                "Karena charset utf8 lama di MySQL tidak mendukung karakter 4-byte seperti Emoji (\ud83d\ude0a)",
                "Karena utf8mb4 hanya berjalan di Linux",
                "Karena utf8mb4 menghapus password user"
              ],
              "answerIndex": 1,
              "explanation": "Charset `utf8mb4` mendukung penuh penyimpan 4-byte UTF-8 termasuk karakter emoji internasional."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Mengapa InnoDB lebih direkomendasikan dibanding MyISAM sebagai Storage Engine utama di MySQL?",
              "choices": [
                "InnoDB mendukung transaksi ACID dan klausa Foreign Key untuk integritas data",
                "InnoDB memformat tabel dalam file CSV murni",
                "MyISAM membutuhkan RAM 100x lebih besar",
                "InnoDB tidak bisa menyimpan angka desimal"
              ],
              "answerIndex": 0,
              "explanation": "InnoDB menyediakan dukungan transaksi penuh (ACID), pemulihan crash otomatis, serta penegakan integritas data relasional via Foreign Key."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Fungsi SQL MySQL apa yang digunakan untuk mengambil nilai ID auto-increment dari baris yang baru disisipkan?",
              "choices": [
                "LAST_INSERT_ID()",
                "GET_LAST_ID()",
                "NEW_AUTO_ID()",
                "MAX(id)"
              ],
              "answerIndex": 0,
              "explanation": "LAST_INSERT_ID() mengembalikan ID auto-increment yang terlahir pada sesi koneksi aktif pengirim query."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Aplikasimu melayani pengguna di beberapa zona waktu dan menyimpan waktu kejadian di MySQL. Apa beda praktis DATETIME dan TIMESTAMP?",
              "choices": [
                "Tidak ada bedanya",
                "TIMESTAMP dikonversi ke UTC saat disimpan dan dikembalikan mengikuti time_zone koneksi, sedangkan DATETIME disimpan apa adanya tanpa konversi",
                "DATETIME hanya bisa menyimpan tanggal tanpa jam",
                "TIMESTAMP tidak bisa dipakai di InnoDB"
              ],
              "answerIndex": 1,
              "explanation": "TIMESTAMP sadar zona waktu: nilainya disimpan sebagai UTC lalu dikonversi mengikuti pengaturan koneksi, sehingga cocok untuk mencatat kapan sesuatu terjadi. DATETIME menyimpan angka jam apa adanya \u2014 tepat untuk hal yang memang tidak boleh bergeser seperti jadwal acara lokal. Salah pilih membuat catatan waktu meleset berjam-jam saat server dan pengguna beda zona."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Di hosting lama, `INSERT` dengan tanggal '0000-00-00' dan teks yang lebih panjang dari kolom diterima begitu saja tanpa error. Apa penyebabnya?",
              "choices": [
                "Versi MySQL-nya tidak punya validasi sama sekali",
                "sql_mode belum memakai STRICT_TRANS_TABLES, sehingga MySQL memotong atau mengubah data invalid dan hanya memberi warning",
                "Kolomnya bertipe JSON",
                "Karena tabelnya memakai InnoDB"
              ],
              "answerIndex": 1,
              "explanation": "MySQL non-strict berusaha 'menolong' dengan memotong string yang kepanjangan dan menerima tanggal nol, lalu hanya mencatat warning \u2014 data rusak masuk tanpa disadari. MySQL 8 mengaktifkan STRICT_TRANS_TABLES secara default sehingga query semacam itu ditolak. Saat memindahkan aplikasi dari hosting lama, perbedaan sql_mode inilah yang sering memunculkan error yang sebelumnya tidak pernah terlihat."
            }
          ]
        }
      ]
    },
    {
      "slug": "pg-lanjutan",
      "title": "PostgreSQL: Performa & Operasional",
      "description": "Yang ditanyakan saat kamu pegang database production: kenapa query lambat, index mana yang dipakai, dan bagaimana kalau data hilang.",
      "topics": [
        "EXPLAIN vs EXPLAIN ANALYZE \u2014 membaca rencana eksekusi sungguhan",
        "Seq Scan vs Index Scan vs Bitmap Heap Scan: kapan masing-masing wajar",
        "Jenis index: B-tree, GIN, GiST, BRIN, partial, dan expression index",
        "Index yang tidak terpakai & kenapa menambah index bisa memperlambat",
        "Window function: ROW_NUMBER, LAG/LEAD, running total",
        "CTE & recursive CTE untuk data berjenjang (kategori, struktur organisasi)",
        "VACUUM, autovacuum, dan table bloat",
        "Transaction isolation level & deadlock",
        "Backup dengan pg_dump/pg_restore + latihan restore (bukan cuma backup)",
        "Connection pooling: kenapa PostgreSQL butuh PgBouncer",
        "Extension berguna: pg_stat_statements, uuid-ossp, pgcrypto"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-8-pg-m1",
          "title": "PostgreSQL: Optimasi Performa, Window Function & Operasional",
          "body": "# PostgreSQL: Optimasi Performa, Window Function & Operasional\n\nModul tingkat lanjut ini mempelajari diagnosis performa kueri menggunakan `EXPLAIN ANALYZE`, Window Functions, CTE, serta operasional pemeliharaan database.\n\n## 1. Membaca Rencana Eksekusi (`EXPLAIN ANALYZE`)\n\nJangan menebak-nebak penyebab kueri lambat! Jalankan `EXPLAIN ANALYZE` di depan kueri kamu untuk melihat rencana eksekusi (Query Execution Plan) dan waktu tempuh nyata dalam milidetik.\n\n### Metode Scan di PostgreSQL:\n- **Seq Scan (Sequential Scan):** Membaca tabel dari baris pertama sampai akhir (lambat jika tabel besar).\n- **Index Scan:** Membaca B-Tree Index lalu mengambil baris spesifik di memori disk/heap.\n- **Bitmap Heap Scan:** Menggabungkan beberapa indeks dalam bentuk bitmap memori sebelum membaca data tabel.\n\n```text\n+--------------------------------------------------------------------------+\n|                  ALUR OPTIMASI KUERI POSTGRESQL                          |\n+--------------------------------------------------------------------------+\n|  EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'pending';          |\n|                                                                          |\n|  Hasil: Seq Scan on orders (cost=0.00..18500.00 rows=50000 width=120)     |\n|         Execution Time: 450.23 ms  <-- SANGAT LAMBAT!                    |\n|                                                                          |\n|  Solusi: CREATE INDEX idx_orders_status ON orders (status);              |\n|  Hasil Baru: Index Scan using idx_orders_status ...                      |\n|              Execution Time: 1.12 ms  <-- SANGAT KILAT!                  |\n+--------------------------------------------------------------------------+\n```\n\n---\n\n## 2. Window Functions & CTE (Common Table Expression)\n\nWindow Functions melakukan kalkulasi antar baris tanpa menggabungkan baris data menjadi satu (berbeda dari `GROUP BY`):\n- `ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC)`: Memberi nomor urut per kelompok kategori.\n- `LAG()` / `LEAD()`: Mengambil nilai baris sebelumnya atau sesudahnya.\n\nCTE (`WITH nama_cte AS (...)`) menyusun kueri sementara ber-struktur rapi yang jauh lebih mudah dibaca daripada subquery bersarang.\n\n---\n\n## 3. Pemeliharaan Database: `VACUUM` & Autovacuum\n\nPostgreSQL menggunakan arsitektur MVCC (Multi-Version Concurrency Control). Saat data di-UPDATE atau DELETE, baris lama tidak langsung dihapus melainkan ditandai sebagai **Dead Tuples**.\n\nJika tidak dibersihkan, dead tuples menumpuk membuat **Table Bloat** (ukuran file tabel membengkak walau isinya sedikit). Fitur pemeliharaan `VACUUM` dan `autovacuum` bertugas membersihkan dead tuples tersebut.\n\n---\n\n## 4. Transaction Isolation Level & Deadlock\n\nPostgreSQL mendukung 4 level isolasi transaksi (Read Committed, Repeatable Read, Serializable). Level default **Read Committed** menjamin kueri tidak membaca data setengah jadi. Saat 2 transaksi saling menunggu kuncian baris (Lock), PostgreSQL secara otomatis mendeteksi **Deadlock** dan membatalkan salah satu transaksi dengan melempar exception Error.\n\n---\n\n## 5. Connection Pooling dengan PgBouncer\n\nPostgreSQL membuka 1 proses sistem (process fork) untuk setiap 1 koneksi database aktif. Membuka 1.000 koneksi bersamaan akan memakan memori RAM server secara masif. Di dunia kerja, kita memasang **PgBouncer** sebagai middleware proxy pengelola Connection Pool.\n\n---\n\n## 6. Jebakan & Kesalahan Umum Pemula\n\n1. **Mematikan Autovacuum:** Mematikan fitur autovacuum karena alasan performa akan menyebabkan table bloat parah yang akhirnya melumpuhkan database beberapa minggu kemudian.\n2. **Kueri lambat akibat Indeks Terabaikan:** Menulis fungsi pada kolom ter-indeks (misal `WHERE LOWER(email) = '...'`) membuat PostgreSQL tidak bisa memakai B-Tree index biasa. Gunakan **Expression Index** (`CREATE INDEX ON users (LOWER(email))`).\n3. **Lupa `pg_stat_statements`:** Tidak mengaktifkan ekstensi `pg_stat_statements` membuat kamu kesulitan menemukan kueri paling lambat di produksi.\n\n---\n\n## 7. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Saat mengatasi masalah kueri lambat (performance bottleneck) di produksi, membuat fitur ranking/leaderboard, serta melakukan pemeliharaan database skala tinggi.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan kelas senior: *\"Bagaimana MVCC bekerja di PostgreSQL dan apa peran VACUUM dalam mengatasi table bloat?\"*\n- Di code review, arsitek database akan menolak query bertingkat yang berantakan dan meminta kamu merapikannya dengan `WITH` (CTE)."
        },
        {
          "kind": "step",
          "id": "sql-8-pg-1",
          "title": "Membaca Rencana Eksekusi (EXPLAIN ANALYZE)",
          "explanation": "Perintah `EXPLAIN ANALYZE` di PostgreSQL mengeksekusi kueri secara nyata dan mencetak rencana eksekusi detail beserta perbandingan biaya estimasi dan waktu nyata (`actual time`). Outputnya menunjukkan apakah mesin menggunakan `Seq Scan` (scan seluruh tabel), `Index Scan` (scan indeks biasa), atau `Bitmap Heap Scan` (kombinasi beberapa indeks). Alat ini merupakan perkakas utama senior backend engineer untuk mengdiagnosis kueri lambat di produksi. Jebakan penting yang harus diingat adalah `EXPLAIN ANALYZE` **benar-benar mengeksekusi kueri**, sehingga menggunakannya pada perintah `DELETE` atau `UPDATE` akan mengubah data di database!",
          "example": {
            "code": "EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';",
            "output": "Index Scan using idx_users_email on users  (cost=0.28..8.29 rows=1 width=128) (actual time=0.015..0.018 ms)\nExecution Time: 0.045 ms",
            "note": "EXPLAIN biasa hanya mengestimasi biaya, sedangkan EXPLAIN ANALYZE mengeksekusi query sungguhan."
          },
          "instruction": "Tulis perintah EXPLAIN ANALYZE untuk mengevaluasi eksekusi query pencarian transaksi pada tabel 'orders' dengan kondisi 'status = ''pending'''.",
          "starterCode": "-- Tulis EXPLAIN ANALYZE di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "EXPLAIN\\s+ANALYZE\\s+SELECT\\s+\\*\\s+FROM\\s+orders\\s+WHERE\\s+status\\s*=\\s*['\"]pending['\"]\\s*;?",
              "message": "Gunakan: EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'pending';"
            }
          ],
          "solution": "EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'pending';"
        },
        {
          "kind": "step",
          "id": "sql-8-pg-2",
          "title": "Membuat Partial Index & GIN Index",
          "explanation": "PostgreSQL mendukung pembuatan Partial Index yang hanya mengindeks sebagian baris data (misal `WHERE status = 'active'`) serta Index GIN untuk pencarian data dokumen JSONB atau Array. Partial Index menghemat penggunaan memori RAM secara signifikan karena ukuran pohon indeks menjadi jauh lebih kecil dibanding indeks penuh. Teknik indexing canggih ini digunakan pada sistem bertrafik tinggi untuk mengoptimasi kueri yang memiliki filter status dominan. Jebakan utamanya adalah kueri `SELECT` kamu tidak akan memakai Partial Index jika kondisi di klausul `WHERE` tidak cocok persis dengan definisi klausa indeks.",
          "example": {
            "code": "CREATE INDEX idx_active_users ON users (email) WHERE status = 'active';",
            "output": "CREATE INDEX",
            "note": "Partial index menghemat ruang RAM dan mempercepat pencarian data berstatus khusus."
          },
          "instruction": "Buat Partial Index bernama 'idx_pending_orders' pada kolom 'user_id' di tabel 'orders' khusus untuk baris yang 'status = ''pending'''.",
          "starterCode": "-- Tulis CREATE INDEX di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+INDEX\\s+idx_pending_orders\\s+ON\\s+orders\\s*\\(\\s*user_id\\s*\\)\\s+WHERE\\s+status\\s*=\\s*['\"]pending['\"]\\s*;?",
              "message": "Gunakan: CREATE INDEX idx_pending_orders ON orders (user_id) WHERE status = 'pending';"
            }
          ],
          "solution": "CREATE INDEX idx_pending_orders ON orders (user_id) WHERE status = 'pending';"
        },
        {
          "kind": "step",
          "id": "sql-8-pg-3",
          "title": "Window Function (ROW_NUMBER & OVER PARTITION BY)",
          "explanation": "Window Functions seperti `ROW_NUMBER()`, `RANK()`, dan `DENSE_RANK()` melakukan kalkulasi nilai antar baris data menggunakan klausul `OVER (PARTITION BY ... ORDER BY ...)` tanpa mengelompokkan baris menjadi satu. Fitur ini memungkinkan kamu memberi nomor urut transaksi per pengguna atau menghitung nilai akumulasi berjalan (running total) secara efisien. Kueri ini sangat populer digunakan pada pembuatan laporan analitik finansial dan fitur peringkat/leaderboard. Jebakan pemula adalah mencoba menggunakan Window Functions di dalam klausul `WHERE`, yang akan ditolak mesin SQL.",
          "example": {
            "code": "SELECT name, salary, ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank FROM employees;",
            "output": "  name  | salary | rank\n--------+--------+------\n Budi   | 15000  |  1\n Siti   | 12000  |  2",
            "note": "OVER (PARTITION BY ...) membagi jendela komputasi per kelompok kategori."
          },
          "instruction": "Tulis query SELECT yang mengambil kolom 'id', 'amount', dan fungsi 'ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC)' dengan alias 'order_seq' dari tabel 'orders'.",
          "starterCode": "-- Tulis Window Function di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+id\\s*,\\s*amount\\s*,\\s*ROW_NUMBER\\(\\)\\s+OVER\\s*\\(\\s*PARTITION\\s+BY\\s+user_id\\s+ORDER\\s+BY\\s+created_at\\s+DESC\\s*\\)\\s+AS\\s+order_seq\\s+FROM\\s+orders\\s*;?",
              "message": "Gunakan ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS order_seq"
            }
          ],
          "solution": "SELECT id, amount, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS order_seq FROM orders;"
        },
        {
          "kind": "step",
          "id": "sql-8-pg-4",
          "title": "Common Table Expression (WITH CTE)",
          "explanation": "Common Table Expression (CTE) yang didefinisikan dengan kata kunci `WITH nama_cte AS (...)` membuat tabel sementara terstruktur yang mempermudah pembacaan kueri komplek bertingkat. Selain meningkatkan keterbacaan kode dibanding subquery bersarang, CTE di PostgreSQL juga mendukung `RECURSIVE` untuk memproses data berstruktur pohon seperti hierarki kategori produk atau silsilah organisasi. Fitur ini wajib dipakai saat menyusun query analitik rumit demi kemudahan maintenance tim. Jebakan pada versi PostgreSQL lama adalah CTE bersifat optimization fence yang dapat memperlambat kueri jika tidak dioptimasi.",
          "example": {
            "code": "WITH high_sales AS (\n  SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id\n)\nSELECT * FROM high_sales WHERE total > 1000000;",
            "output": "Daftar pengguna dengan total pembelian di atas 1 juta.",
            "note": "CTE membuat query SQL yang rumit menjadi jauh lebih mudah dibaca dan di-maintain."
          },
          "instruction": "Tulis CTE bernama 'active_users' yang mengambil 'SELECT * FROM users WHERE status = ''active''' kemudian lakukan 'SELECT * FROM active_users;'.",
          "starterCode": "-- Tulis CTE di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WITH\\s+active_users\\s+AS\\s*\\(\\s*SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+status\\s*=\\s*['\"]active['\"]\\s*\\)\\s*SELECT\\s+\\*\\s+FROM\\s+active_users\\s*;?",
              "message": "Gunakan sintaks CTE WITH active_users AS (...)"
            }
          ],
          "solution": "WITH active_users AS (SELECT * FROM users WHERE status = 'active') SELECT * FROM active_users;"
        },
        {
          "kind": "step",
          "id": "sql-8-pg-5",
          "title": "Pembersihan Baris Mati dengan VACUUM",
          "explanation": "Perintah `VACUUM` di PostgreSQL berfungsi membersihkan baris data mati (dead tuples) yang ditinggalkan oleh operasi `UPDATE` dan `DELETE` akibat arsitektur MVCC. Jika tidak dibersihkan oleh fitur autovacuum, dead tuples yang menumpuk memicu fenomena Table Bloat yang membuat ukuran file database membengkak dan kueri menjadi lambat. Pemeliharaan VACUUM rutin memastikan ruang penyimpanan disk dikembalikan dan statistik kueri ter-update. Jebakan berbahaya adalah mematikan fitur autovacuum di file konfigurasi `postgresql.conf` yang akan melumpuhkan performa server dalam jangka panjang.",
          "example": {
            "code": "VACUUM ANALYZE users;",
            "output": "VACUUM\nMembersihkan tuple mati dan memperbarui statistik optimizer.",
            "note": "Autovacuum berjalan otomatis di background, namun VACUUM manual berguna setelah penghapusan masif."
          },
          "instruction": "Tulis perintah VACUUM FULL pada tabel 'logs' untuk membebaskan ruang penyimpanan disk secara menyeluruh.",
          "starterCode": "-- Tulis VACUUM FULL di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "VACUUM\\s+FULL\\s+logs\\s*;?",
              "message": "Tuliskan: VACUUM FULL logs;"
            }
          ],
          "solution": "VACUUM FULL logs;"
        },
        {
          "kind": "step",
          "id": "sql-8-pg-6",
          "title": "Backup & Restore Database (pg_dump & pg_restore)",
          "explanation": "Perintah `pg_dump` membuat file cadangan database PostgreSQL dalam bentuk file teks SQL atau format kustom biner (`-Fc`) yang dapat di-restore secara cepat menggunakan `pg_restore`. Format biner kustom memungkinkan kamu melakukan restore data secara paralel menggunakan banyak core CPU (`pg_restore -j 4`) untuk mempercepat pemulihan musibah. Prosedur pemulihan ini merupakan standar wajib dalam manajemen kebencanaan (disaster recovery) di lingkungan perusahaan. Jebakan pemula adalah hanya rajin membuat file backup tanpa pernah menguji proses restore data secara berkala.",
          "example": {
            "code": "pg_dump -U postgres -Fc db_utama > db_backup.dump",
            "output": "File dump biner db_backup.dump dibuat.",
            "note": "Restore dapat dilakukan dengan perintah: pg_restore -U postgres -d db_target db_backup.dump."
          },
          "instruction": "Tulis perintah pg_restore untuk memulihkan file 'backup.dump' ke database target 'production_db' sebagai user 'postgres'.",
          "starterCode": "# Tulis perintah pg_restore di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "pg_restore\\s+-U\\s+postgres\\s+-d\\s+production_db\\s+backup\\.dump",
              "message": "Gunakan: pg_restore -U postgres -d production_db backup.dump"
            }
          ],
          "solution": "pg_restore -U postgres -d production_db backup.dump"
        },
        {
          "kind": "step",
          "id": "sql-8-pg-7",
          "title": "Aktifkan Extension PostgreSQL (CREATE EXTENSION)",
          "explanation": "Perintah `CREATE EXTENSION` digunakan untuk mengaktifkan modul ekstensi tambahan di PostgreSQL seperti `pg_stat_statements` untuk memantau performa kueri atau `uuid-ossp` untuk pembuatan fungsi UUID. Modul `pg_stat_statements` sangat vital karena mencatat statistik seluruh kueri yang berjalan di server sehingga kamu dapat menemukan kueri paling lambat dengan mudah. Ekstensi ini diaktifkan di tingkat database oleh akun superuser saat setup server awal. Jebakan utamanya adalah lupa menambahkan nama ekstensi ke parameter `shared_preload_libraries` di konfigurasi postgresql.conf.",
          "example": {
            "code": "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";",
            "output": "CREATE EXTENSION",
            "note": "Ekstensi dipasang per database oleh user berkewenangan superuser."
          },
          "instruction": "Tulis perintah untuk mengaktifkan ekstensi 'pg_stat_statements' jika belum ada (IF NOT EXISTS).",
          "starterCode": "-- Tulis CREATE EXTENSION di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+EXTENSION\\s+IF\\s+NOT\\s+EXISTS\\s+[\"']?pg_stat_statements[\"']?\\s*;?",
              "message": "Gunakan: CREATE EXTENSION IF NOT EXISTS \"pg_stat_statements\";"
            }
          ],
          "solution": "CREATE EXTENSION IF NOT EXISTS \"pg_stat_statements\";"
        },
        {
          "kind": "quiz",
          "id": "sql-8-pg-kuis",
          "title": "Kuis: PostgreSQL Performa & Operasional",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Apa perbedaan utama antara perintah `EXPLAIN` dan `EXPLAIN ANALYZE` pada PostgreSQL?",
              "choices": [
                "EXPLAIN biasa hanya mengestimasi rencana eksekusi, sedangkan EXPLAIN ANALYZE benar-benar mengeksekusi query dan mencatat durasi waktu aktual",
                "EXPLAIN ANALYZE menghapus data dari tabel",
                "EXPLAIN biasa hanya bisa digunakan di MySQL",
                "EXPLAIN ANALYZE mengubah urutan kolom di database"
              ],
              "answerIndex": 0,
              "explanation": "EXPLAIN ANALYZE mengeksekusi kueri secara riil di database sehingga menampilkan jumlah baris dan durasi waktu eksekusi yang sesungguhnya (actual time)."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Mengapa fitur autovacuum / perintah VACUUM sangat krusial dalam operasional database PostgreSQL?",
              "choices": [
                "Untuk membersihkan tuple/baris mati (dead tuples) bekas UPDATE/DELETE sehingga tidak menyebabkan table bloat",
                "Untuk mengubah password user postgres secara berkala",
                "Untuk memformat ulang harddisk server",
                "Untuk mengonversi file SQL menjadi format JSON"
              ],
              "answerIndex": 0,
              "explanation": "PostgreSQL menggunakan MVCC di mana operasi UPDATE/DELETE meninggalkan baris lama sebagai dead tuple. VACUUM mengklaim kembali ruang tersebut agar tabel tidak menggelembung (bloat)."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kapan jenis indeks GIN (Generalized Inverted Index) di PostgreSQL paling tepat digunakan?",
              "choices": [
                "Untuk kolom tipe data JSONB, pencarian teks (Full-Text Search), atau array",
                "Untuk kolom bertipe INTEGER yang nilainya selalu naik",
                "Untuk kolom tanggal lahir",
                "Untuk kolom yang nilainya kosong"
              ],
              "answerIndex": 0,
              "explanation": "GIN Index sangat efisien memetakan elemen-elemen internal di dalam dokumen biner JSONB, teks tsvector, maupun array."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Sebuah tabel memiliki jutaan baris dan kamu sering menjalankan query range (BETWEEN) pada kolom tanggal. Jenis indeks PostgreSQL apa yang paling tepat untuk query semacam ini?",
              "choices": [
                "B-tree Index (default PostgreSQL)",
                "GIN Index",
                "Hash Index",
                "BRIN Index"
              ],
              "answerIndex": 0,
              "explanation": "B-tree Index adalah tipe indeks default PostgreSQL yang sangat efisien untuk operasi perbandingan seperti =, <, >, BETWEEN, dan ORDER BY karena struktur pohon binarinya memungkinkan pencarian logaritmik."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Tim kamu menemukan bahwa tabel 'orders' ukurannya 5x lebih besar dari data aktualnya. Setelah investigasi, ternyata ada banyak dead tuple. Selain mengandalkan autovacuum, perintah manual apa yang bisa menyusutkan ukuran fisik tabel secara agresif?",
              "choices": [
                "VACUUM FULL",
                "DELETE FROM orders",
                "DROP TABLE orders",
                "TRUNCATE orders"
              ],
              "answerIndex": 0,
              "explanation": "VACUUM FULL menulis ulang seluruh isi tabel ke file baru tanpa dead tuple, mengklaim kembali ruang disk secara penuh. Namun ia mengunci tabel secara eksklusif selama prosesnya."
            }
          ]
        }
      ]
    },
    {
      "slug": "mysql-lanjutan",
      "title": "MySQL: Performa & Operasional",
      "description": "Menangani MySQL di production: optimizer, index, replikasi, dan pemulihan data.",
      "topics": [
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
        "Perbedaan penting MySQL 8.4 LTS vs versi lama yang masih banyak di hosting"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-9-my-m1",
          "title": "MySQL: Optimasi Performa, Storage Engine & Operasional",
          "body": "# MySQL: Optimasi Performa, Storage Engine & Operasional\n\nModul ini mendalami optimasi performa MySQL 8.0+, struktur Clustered Index InnoDB, teknik Covering Index, dan operasional Replikasi.\n\n## 1. Membaca Output `EXPLAIN` di MySQL\n\nDi MySQL, jalankan `EXPLAIN` atau `EXPLAIN ANALYZE` di depan kueri `SELECT` untuk menganalisis jalur eksekusi kueri.\n\n### Kolom Penting Output `EXPLAIN`:\n- **`type` (Urutan dari Paling Efisien ke Paling Lambat):**\n  1. `system` / `const`: Hanya 1 baris cocok (Primary Key / Unique).\n  2. `eq_ref`: Index lookup 1 baris untuk relasi JOIN.\n  3. `ref`: Index lookup banyak baris.\n  4. `range`: Scan indeks dengan rentang (`>`, `<`, `BETWEEN`).\n  5. `index`: Scan seluruh pohon indeks (Full Index Scan).\n  6. `ALL`: **Full Table Scan (Sangat Lambat!)**.\n\n```text\n+--------------------------------------------------------------------------+\n|                CLUSTERED INDEX INNODB vs SECONDARY INDEX                 |\n+--------------------------------------------------------------------------+\n|  Clustered Index (Primary Key):                                          |\n|  [PK: 1] -> Data Fisik Lengkap (nama, email, alamat, created_at)          |\n|                                                                          |\n|  Secondary Index (misal: index pada email):                              |\n|  [email: bimo@...] -> menunjuk ke -> [PK: 1]  (Butuh 2x Lookup!)          |\n|                                                                          |\n|  Covering Index (Solusi Cepat):                                          |\n|  Index (email, nama) memuat seluruh data yang diminta SELECT             |\n|  --> Tidak perlu lookup balik ke Clustered Index! (Index-Only Scan)      |\n+--------------------------------------------------------------------------+\n```\n\n---\n\n## 2. Covering Index & Index Invalidation\n\n- **Covering Index:** Indeks komposit yang memuat SELURUH kolom yang diminta oleh kueri `SELECT`. MySQL akan mengambil data langsung dari indeks tanpa perlu membaca disk tabel (Tanda di EXPLAIN: `Using index`).\n- **Index Invalidation:** Penggunaan fungsi matematika atau string pada kolom `WHERE` (seperti `WHERE YEAR(created_at) = 2026` atau `WHERE price * 2 = 1000`) membuat MySQL membatalkan penggunaan indeks dan beralih ke Full Table Scan!\n\n---\n\n## 3. Slow Query Log & Transaksi Locking (`FOR UPDATE`)\n\n- **Slow Query Log:** Fitur internal MySQL untuk mencatat kueri yang membutuhkan waktu di atas `long_query_time` (misal 2 detik) ke file log khusus.\n- **`FOR UPDATE`:** Memasang **Exclusive Row-Level Lock** pada transaksi InnoDB untuk mencegah dua transaksi mengubah stok barang yang sama secara bersamaan (Race Condition).\n\n---\n\n## 4. Replikasi Database (Master-Replica)\n\nUntuk menangani lalu lintas baca yang tinggi, kita menggunakan arsitektur Replikasi:\n- **Master Server:** Menerima perintah penulisan (`INSERT`, `UPDATE`, `DELETE`).\n- **Replica Server:** Menyalin data dari Master secara linier dan menangani kueri pembacaan (`SELECT`).\n\n---\n\n## 6. Jebakan & Kesalahan Umum Pemula\n\n1. **Primary Key Ber-tipe String UUID Panjang pada InnoDB:** Karena data fisik InnoDB diurutkan berdasarkan Primary Key, menyisipkan UUID acak terus-menerus akan menyebabkan **Page Split** B-Tree dan fragmentasi disk yang parah!\n2. **Index Invalidation Akibat Implicite Type Conversion:** Membandingkan kolom string dengan angka tanpa petik (`WHERE phone = 081234`) membuat MySQL mengubah tipe data secara implisit dan menggugurkan fungsi indeks.\n3. **Mengabaikan Race Condition pada Stok Barang:** Mengecek stok dengan `SELECT` biasa lalu meng-update-nya tanpa transaksi `FOR UPDATE` bisa membuat stok minus jika ada 2 pembeli bersamaan.\n\n---\n\n## 7. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Saat menskalakan aplikasi ber-traflik tinggi, mencegah race condition pada sistem flash sale / tiket konsert, dan mengoptimasi server MySQL yang kehabisan memori.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan interview favorit: *\"Apa itu Covering Index di MySQL InnoDB dan bagaimana cara mencegah Index Invalidation di klausul WHERE?\"*\n- Di code review sistem e-commerce, tim lead akan memastikan setiap transaksi pengurangan saldo atau stok menggunakan `SELECT ... FOR UPDATE`."
        },
        {
          "kind": "step",
          "id": "sql-9-my-1",
          "title": "Membaca Rencana Eksekusi (EXPLAIN di MySQL)",
          "explanation": "Perintah `EXPLAIN` di MySQL menampilkan informasi jalur eksekusi kueri optimizer di mana kolom `type` menunjukkan tingkat efisiensi pencarian data. Nilai `type` terbaik berurutan adalah `const`, `eq_ref`, `ref`, `range`, hingga yang paling lambat yaitu `ALL` (Full Table Scan). Menjalankan `EXPLAIN` membantu developer memastikan bahwa kueri yang dibuat sudah memanfaatkan indeks secara optimal sebelum dirilis ke produksi. Jebakan pemula adalah mengabaikan kolom `rows` dan `filtered` yang mengindikasikan berapa banyak baris palsu yang harus diperiksa mesin database.",
          "example": {
            "code": "EXPLAIN SELECT * FROM products WHERE category_id = 5;",
            "output": "id | select_type | table    | type | possible_keys | key            | rows\n 1 | SIMPLE      | products | ref  | idx_category  | idx_category   | 12",
            "note": "Tipe 'ALL' menandakan MySQL melakukan scanning ke seluruh baris tabel!"
          },
          "instruction": "Tulis perintah EXPLAIN untuk menganalisis query 'SELECT * FROM users WHERE status = ''active'';'.",
          "starterCode": "-- Tulis EXPLAIN di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "EXPLAIN\\s+SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+status\\s*=\\s*['\"]active['\"]\\s*;?",
              "message": "Gunakan: EXPLAIN SELECT * FROM users WHERE status = 'active';"
            }
          ],
          "solution": "EXPLAIN SELECT * FROM users WHERE status = 'active';"
        },
        {
          "kind": "step",
          "id": "sql-9-my-2",
          "title": "Optimasi Covering Index",
          "explanation": "Covering Index adalah teknik mengoptimasi indeks komposit sehingga memuat SELURUH kolom yang diminta oleh klausa `SELECT`, `WHERE`, dan `ORDER BY`. Saat Covering Index terbentuk, MySQL dapat mengembalikan data langsung dari pohon B-Tree indeks tanpa perlu melakukan lookup balik ke disk tabel fisik (Index-Only Scan dengan tanda `Using index` di EXPLAIN). Teknik ini memangkas I/O disk secara drastis pada kueri ber-frekuensi tinggi. Jebakan utamanya adalah membuat ukuran indeks komposit terlalu lebar sehingga menguras kapasitas memori RAM Buffer Pool.",
          "example": {
            "code": "CREATE INDEX idx_user_status_name ON users (status, name);",
            "output": "CREATE INDEX",
            "note": "Jika query memilih status dan name, MySQL mengambil data langsung dari memori index."
          },
          "instruction": "Buat komposit indeks bernama 'idx_email_created' pada kolom 'email' dan 'created_at' di tabel 'users'.",
          "starterCode": "-- Tulis CREATE INDEX di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+INDEX\\s+idx_email_created\\s+ON\\s+users\\s*\\(\\s*email\\s*,\\s*created_at\\s*\\)\\s*;?",
              "message": "Gunakan: CREATE INDEX idx_email_created ON users (email, created_at);"
            }
          ],
          "solution": "CREATE INDEX idx_email_created ON users (email, created_at);"
        },
        {
          "kind": "step",
          "id": "sql-9-my-3",
          "title": "Mencegah Pembatalan Indeks (Index Invalidation)",
          "explanation": "Fenomena Index Invalidation terjadi ketika kueri SQL menggunakan fungsi atau operasi matematika pada kolom yang ter-indeks di klausul `WHERE`, seperti `WHERE YEAR(created_at) = 2026`. Penggunaan fungsi membendung kemampuan B-Tree indeks sehingga MySQL memaksa melakukan Full Table Scan lambat. Solusinya adalah mengubah kueri menjadi perbandingan rentang tanggal langsung seperti `WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'`. Jebakan ini sering sekali tidak disadari oleh pengembang pemula.",
          "example": {
            "code": "-- \u274c MEMBATALKAN INDEX: WHERE YEAR(created_at) = 2026\n-- \u2705 MENGGUNAKAN INDEX: WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'",
            "output": "Query memanfaatkan B-tree Index Scan alih-alih Full Table Scan.",
            "note": "Selalu jaga agar kolom di sisi kiri operator perbandingan tetap bersih tanpa pembungkus fungsi."
          },
          "instruction": "Tulis klausul WHERE untuk kolom 'created_at' yang memanfaatkan rentang tanggal dari '2026-01-01' hingga kurang dari '2027-01-01'.",
          "starterCode": "-- Tulis klausul WHERE rentang tanggal di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WHERE\\s+created_at\\s*>=\\s*['\"]2026-01-01['\"]\\s+AND\\s+created_at\\s*<\\s*['\"]2027-01-01['\"]",
              "message": "Gunakan: WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'"
            }
          ],
          "solution": "WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'"
        },
        {
          "kind": "step",
          "id": "sql-9-my-4",
          "title": "Mendeteksi Query Lambat (Slow Query Log)",
          "explanation": "Fitur Slow Query Log di MySQL mencatat seluruh kueri yang waktu eksekusinya melebihi nilai ambang batas variabel `long_query_time` (misal 2 detik). Fitur ini diaktifkan dengan perintah `SET GLOBAL slow_query_log = 'ON'` untuk membantu tim sysadmin memantau kueri-kueri bermasalah yang memberatkan CPU server produksi. Log kueri lambat ini menjadi acuan utama saat melakukan kegiatan tuning performa database. Jebakan utamanya adalah menetapkan nilai `long_query_time` terlalu kecil di server sibuk, yang dapat membanjiri kapasitas penyimpanan log.",
          "example": {
            "code": "SET GLOBAL slow_query_log = 'ON';\nSET GLOBAL long_query_time = 2;",
            "output": "Slow Query Log aktif mencatat query berdurasi > 2 detik.",
            "note": "Log disimpan di file mysql-slow.log untuk dianalisis dengan mysqldumpslow."
          },
          "instruction": "Tulis perintah SET GLOBAL untuk mengaktifkan variabel 'slow_query_log' menjadi 'ON'.",
          "starterCode": "-- Tulis SET GLOBAL di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SET\\s+GLOBAL\\s+slow_query_log\\s*=\\s*['\"]?ON['\"]?\\s*;?",
              "message": "Gunakan: SET GLOBAL slow_query_log = 'ON';"
            }
          ],
          "solution": "SET GLOBAL slow_query_log = 'ON';"
        },
        {
          "kind": "step",
          "id": "sql-9-my-5",
          "title": "Mode Ketat SQL (STRICT_TRANS_TABLES)",
          "explanation": "Pengaturan `sql_mode = 'STRICT_TRANS_TABLES'` memaksa MySQL untuk menolak penyisipan data yang tidak valid (seperti angka terpotong atau teks melebihi kapasitas kolom) dengan melempar Error. Pada versi MySQL lama tanpa mode ketat, MySQL akan mengubah data tidak valid tersebut secara implisit dan hanya melempar Warning yang mengakibatkan korupsi data. Mode ketat ini wajib diaktifkan pada semua aplikasi backend modern untuk menjaga konsistensi skema. Jebakan yang perlu diwaspadai adalah aplikasi legacy yang mungkin crash saat mode ketat ini pertama kali diaktifkan.",
          "example": {
            "code": "SET SESSION sql_mode = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION';",
            "output": "Session mode diset ke strict mode.",
            "note": "Strict mode wajib diaktifkan pada aplikasi produksi modern agar data konsisten."
          },
          "instruction": "Tulis perintah untuk mengeset SESSION sql_mode berisi 'STRICT_TRANS_TABLES'.",
          "starterCode": "-- Tulis SET SESSION sql_mode di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SET\\s+SESSION\\s+sql_mode\\s*=\\s*['\"]STRICT_TRANS_TABLES['\"]\\s*;?",
              "message": "Gunakan: SET SESSION sql_mode = 'STRICT_TRANS_TABLES';"
            }
          ],
          "solution": "SET SESSION sql_mode = 'STRICT_TRANS_TABLES';"
        },
        {
          "kind": "step",
          "id": "sql-9-my-6",
          "title": "Replikasi Database (SHOW REPLICA STATUS)",
          "explanation": "Fitur Replikasi MySQL menyalin seluruh log perubahan data (Binary Log) dari server Master ke satu atau lebih server Replica secara real-time. Arsitektur Replikasi ini digunakan untuk menskalakan pembacaan aplikasi (Read Scaling) di mana seluruh kueri pembacaan diputar ke server Replica sementara penulisan tetap ke Master. Perintah `SHOW REPLICA STATUS` digunakan sysadmin untuk memantau kesehatan proses penyalinan data. Jebakan terbesarnya adalah terjadinya Replikasi Lag di mana data pada server Replica tertinggal beberapa detik dari server Master.",
          "example": {
            "code": "SHOW REPLICA STATUS\\G",
            "output": "Replica_IO_Running: Yes\nReplica_SQL_Running: Yes\nSeconds_Behind_Master: 0",
            "note": "Memastikan proses replikasi berjalan sinkron tanpa delay."
          },
          "instruction": "Tulis perintah SQL MySQL untuk memeriksa status replikasi pada server replica (SHOW REPLICA STATUS).",
          "starterCode": "-- Tulis perintah status replikasi di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SHOW\\s+(REPLICA|SLAVE)\\s+STATUS\\s*;?",
              "message": "Gunakan: SHOW REPLICA STATUS;"
            }
          ],
          "solution": "SHOW REPLICA STATUS;"
        },
        {
          "kind": "step",
          "id": "sql-9-my-7",
          "title": "Mengunci Baris dengan FOR UPDATE",
          "explanation": "Klausul `FOR UPDATE` memasang kuncian tingkat baris eksklusif (Exclusive Row-Level Lock) pada baris data yang dipilih di dalam sesi transaksi InnoDB. Memasang `FOR UPDATE` mencegah transaksi koneksi lain untuk mengubah atau menghapus baris tersebut sampai transaksi aktif selesai dipanggil `COMMIT` atau `ROLLBACK`. Fitur ini wajib dipakai untuk mencegah masalah Race Condition saat menguraikan stok barang edisi terbatas atau pemotongan saldo dompet digital. Jebakan bahayanya adalah transaksi menggantung yang dapat menyebabkan Deadlock pada server.",
          "example": {
            "code": "START TRANSACTION;\nSELECT * FROM accounts WHERE id = 1 FOR UPDATE;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT;",
            "output": "Pembaruan saldo rekening aman dari kondisi race condition.",
            "note": "Penting untuk transaksi finansial dan sistem tiket."
          },
          "instruction": "Tulis query SELECT memilih seluruh kolom dari tabel 'inventory' di mana 'product_id = 10' menggunakan penguncian transaksi FOR UPDATE.",
          "starterCode": "-- Tulis query SELECT FOR UPDATE di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+\\*\\s+FROM\\s+inventory\\s+WHERE\\s+product_id\\s*=\\s*10\\s+FOR\\s+UPDATE\\s*;?",
              "message": "Gunakan: SELECT * FROM inventory WHERE product_id = 10 FOR UPDATE;"
            }
          ],
          "solution": "SELECT * FROM inventory WHERE product_id = 10 FOR UPDATE;"
        },
        {
          "kind": "quiz",
          "id": "sql-9-my-kuis",
          "title": "Kuis: MySQL Performa & Operasional",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Nilai `type` apa pada hasil EXPLAIN MySQL yang paling berbahaya karena menandakan Full Table Scan?",
              "choices": [
                "ALL",
                "ref",
                "eq_ref",
                "const"
              ],
              "answerIndex": 0,
              "explanation": "Tipe `ALL` berarti MySQL harus memindai seluruh baris tabel tanpa bantuan indeks, yang sangat lambat pada dataset besar."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Mengapa pemanggilan fungsi pada kolom di klausul WHERE (seperti `WHERE YEAR(created_at) = 2026`) membatalkan penggunaan B-Tree Index?",
              "choices": [
                "Karena MySQL harus mengeksekusi fungsi tersebut pada setiap baris data sehingga tidak bisa memanfaatkan pencarian urut di B-Tree Index",
                "Karena YEAR() adalah fungsi khusus PostgreSQL",
                "Karena B-Tree index hanya menyimpan nilai string",
                "Karena fungsi YEAR() menghapus index dari memori server"
              ],
              "answerIndex": 0,
              "explanation": "Fungsi membungkus kolom mencegah pencarian range biner di B-tree index, memaksa MySQL melakukan evaluasi fungsi per baris (Full Table Scan)."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Apa kegunaan klausul `FOR UPDATE` saat memilih baris data di dalam transaksi InnoDB MySQL?",
              "choices": [
                "Memasang exclusive row lock agar transaksi lain tidak bisa memodifikasi baris tersebut hingga transaksi di-commit",
                "Mengubah data secara permanen tanpa perlu perintah UPDATE",
                "Menghapus baris yang terpilih dari tabel secara otomatis",
                "Membuat backup snapshot ke file .sql"
              ],
              "answerIndex": 0,
              "explanation": "FOR UPDATE mengunci baris data secara eksklusif untuk mencegah race condition (misal perebutan stok barang / saldo rekening)."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Di MySQL, primary key pada tabel InnoDB disimpan bersama data baris dalam satu struktur yang disebut Clustered Index. Apa konsekuensi buruk jika kamu menggunakan UUID (36 karakter acak) sebagai primary key pada tabel bertrafik tinggi?",
              "choices": [
                "Tidak ada dampak buruk sama sekali",
                "Data baris harus terus-menerus diurutkan ulang secara fisik karena UUID tidak berurutan, menyebabkan page split berlebihan dan fragmentasi",
                "MySQL akan otomatis mengonversi UUID menjadi integer",
                "UUID membuat kolom lain tidak bisa diindeks"
              ],
              "answerIndex": 1,
              "explanation": "Clustered Index InnoDB menyimpan data secara fisik terurut berdasarkan primary key. UUID yang acak menyebabkan penyisipan baris ke tengah-tengah halaman (page split), menurunkan performa INSERT dan memperbesar ukuran indeks."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu menemukan query lambat di production MySQL. Fitur bawaan MySQL apa yang paling tepat untuk menemukan query-query paling berat secara otomatis?",
              "choices": [
                "Slow Query Log",
                "Error Log",
                "Binary Log",
                "General Query Log"
              ],
              "answerIndex": 0,
              "explanation": "Slow Query Log secara otomatis mencatat query yang melebihi batas waktu tertentu (long_query_time), memudahkan identifikasi query yang perlu dioptimasi."
            }
          ]
        }
      ]
    },
    {
      "slug": "pilih-migrasi",
      "title": "Memilih & Migrasi antar Database",
      "description": "Keputusan arsitektur yang sering ditanyakan di interview: kenapa memilih yang ini, dan apa risikonya kalau harus pindah.",
      "topics": [
        "Peta perbedaan sintaks: LIMIT/OFFSET, string concat, upsert, boolean",
        "AUTO_INCREMENT vs SERIAL/IDENTITY vs UUID",
        "Perbedaan penanganan tipe JSON, timezone, dan pencarian teks",
        "Kapan MySQL lebih tepat (ekosistem Laravel, hosting murah, tim existing)",
        "Kapan PostgreSQL lebih tepat (data kompleks, JSONB, analitik, Supabase)",
        "Menjawab pertanyaan interview 'kenapa pakai X?' dengan alasan teknis",
        "Strategi migrasi: dump-restore, tool bantu, dan uji kesetaraan data",
        "Jebakan migrasi: collation, tipe boolean, tanggal nol (0000-00-00)",
        "Menulis SQL yang portabel (dan kapan justru tidak perlu portabel)"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-10-mig-m1",
          "title": "Strategi Memilih & Migrasi antar Mesin Database",
          "body": "# Strategi Memilih & Migrasi antar Mesin Database\n\nModul ini membahas matriks perbandingan arsitektur untuk memilih database yang tepat serta strategi migrasi data antar mesin tanpa data loss.\n\n## 1. Matriks Perbandingan Arsitektur Database\n\nTidak ada database yang \"paling bagus di segala hal\". Setiap mesin database memiliki trade-off dan spesialisasi penggunaan masing-masing:\n\n| Parameter Evaluasi | MySQL / MariaDB | PostgreSQL | SQLite |\n|---|---|---|---|\n| **Spesialisasi Utama** | Web Hosting, PHP/Laravel, Read-Heavy | Data Kompleks, JSONB, Analitik, Supabase | Mobile Apps (iOS/Android), Embedded, Testing |\n| **Tipe Boolean** | `TINYINT(1)` (0 atau 1) | `BOOLEAN` murni (`TRUE`/`FALSE`) | `INTEGER` (0 atau 1) |\n| **String Concatenation** | `CONCAT(a, b)` | `a || b` atau `CONCAT(a, b)` | `a || b` |\n| **Operasi Upsert** | `ON DUPLICATE KEY UPDATE` | `ON CONFLICT (...) DO UPDATE` | `ON CONFLICT (...) DO UPDATE` |\n| **Pencarian Teks** | FULLTEXT Index | `to_tsvector` & `tsquery` | FTS5 Extension |\n\n```text\n+--------------------------------------------------------------------------+\n|                    ALUR MIGRASI DATABASE PRODUKSI                        |\n+--------------------------------------------------------------------------+\n|  [Database Asal: MySQL]                                                  |\n|         |                                                                |\n|         v                                                                |\n|  1. Export DDL & Data (mysqldump / pgloader)                             |\n|         |                                                                |\n|         v                                                                |\n|  2. Transformasi Tipe Data & Sintaks (Skrip ETL / Tool Conversions)      |\n|         |                                                                |\n|         v                                                                |\n|  3. Import ke Target & Verifikasi Data (COUNT(*), Checksum SHA256)       |\n|         |                                                                |\n|         v                                                                |\n|  [Database Tujuan: PostgreSQL]                                           |\n+--------------------------------------------------------------------------+\n```\n\n---\n\n## 2. Kapan Memilih PostgreSQL vs MySQL?\n\n### Pilih **MySQL** jika:\n1. Tim kamu didominasi oleh pengembang PHP / Laravel / WordPress.\n2. Aplikasi berbasis web standar dengan rasio pembacaan jauh lebih tinggi dari penulisan (Read-Heavy).\n3. Menggunakan infrastruktur hosting terjangkau atau managed database yang ekonomis.\n\n### Pilih **PostgreSQL** jika:\n1. Membutuhkan pengolahan dokumen semi-terstruktur `JSONB` ber-kinerja tinggi.\n2. Membutuhkan analisis data kompleks, window functions berat, atau fitur geospasial (PostGIS).\n3. Menggunakan ekosistem backend modern seperti Supabase, Django, NestJS, atau Microservices enterprise.\n\n---\n\n## 3. Strategi & Verifikasi Migrasi Data\n\nSaat memindahkan data antar database berbeda, kita menggunakan tool otomatis seperti **pgloader** atau membuat skrip ETL (Extract, Transform, Load).\n\n### Langkah Verifikasi Integritas Pasca-Migrasi:\n1. **Verifikasi Jumlah Baris (`COUNT(*)`):** Pastikan total baris di setiap tabel persis sama.\n2. **Verifikasi Checksum / Hash Data:** Hitung nilai checksum agregat baris untuk mendeteksi hilangnya karakter khusus atau perubahan timezone.\n3. **Uji Coba Query Kunci:** Jalankan pengujian otomatis (automated integration tests) pada aplikasi backend.\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **Jebakan Inkompatibilitas Tanggal Nol (`0000-00-00`):** MySQL versi lama mengizinkan tanggal invalid `0000-00-00 00:00:00`. Memindahkan data ini ke PostgreSQL akan langsung memicu Error fatal `date/time field value out of range`.\n2. **Perbedaan Case Sensitivity Collation:** MySQL default-nya case-insensitive (`'Admin'` == `'admin'`), sedangkan PostgreSQL default-nya case-sensitive (`'Admin'` != `'admin'`). Migrasi tanpa penyesuaian akan merusak fitur login pengguna!\n3. **Perubahan Auto-Increment Sequence:** Lupa memperbarui nilai sequence PostgreSQL setelah mengimpor data ID dari `AUTO_INCREMENT` MySQL akan menyebabkan `INSERT` baru gagal akibat duplikat Primary Key!\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Saat merencanakan refactoring arsitektur skala besar, memindahkan sistem legacy ke cloud modern, atau saat menjawab pertanyaan wawancara pemilihan teknologi.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan favorit Tech Lead / System Architect: *\"Mengapa proyek ini memilih PostgreSQL dibanding MySQL, dan bagaimana strategi kamu meminimalkan downtime saat migrasi data?\"*\n- Di code review, arsitek sistem akan memastikan kamu tidak menggunakan fungsi SQL proprietary (non-standar) jika aplikasi dirancang untuk mendukung multi-database vendor."
        },
        {
          "kind": "step",
          "id": "sql-10-mig-1",
          "title": "Perbedaan Sintaks: String Concatenation",
          "explanation": "Masing-masing mesin database memiliki variasi sintaks string yang berbeda, seperti pemakaian fungsi `CONCAT(a, b)` di MySQL dibanding operator `a || b` di PostgreSQL dan SQLite. Memahami perbedaan sintaks ini sangat penting saat kamu menulis kueri SQL portabel atau saat memindahkan aplikasi dari satu database ke database lain. Penggunaan fungsi standar ANSI SQL memastikan kode kamu mudah dipindahkan tanpa perubahan besar. Jebakan utamanya adalah operator `||` pada MySQL secara bawaan dianggap sebagai operator OR logika, kecuali mode `PIPES_AS_CONCAT` diaktifkan.",
          "example": {
            "code": "-- PostgreSQL: SELECT first_name || ' ' || last_name AS full_name FROM users;\n-- MySQL: SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;",
            "output": " full_name\n-----------------\n Budi Sudarsono",
            "note": "Perhatikan perbedaan operator string saat melakukan porting kueri."
          },
          "instruction": "Tulis query portabel MySQL yang menggabungkan kolom 'first_name', spasi ' ', dan 'last_name' dengan alias 'full_name' dari tabel 'users'.",
          "starterCode": "-- Tulis CONCAT di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+CONCAT\\(\\s*first_name\\s*,\\s*['\"]\\s+['\"]\\s*,\\s*last_name\\s*\\)\\s+AS\\s+full_name\\s+FROM\\s+users\\s*;?",
              "message": "Gunakan: SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;"
            }
          ],
          "solution": "SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;"
        },
        {
          "kind": "step",
          "id": "sql-10-mig-2",
          "title": "Penanganan Upsert (Insert or Update)",
          "explanation": "Operasi Upsert menyisipkan baris data baru atau memperbarui nilai jika kunci utama (Primary Key) sudah ada di tabel. PostgreSQL menggunakan sintaks `ON CONFLICT (email) DO UPDATE SET ...`, sedangkan MySQL menggunakan sintaks `ON DUPLICATE KEY UPDATE ...`. Operasi ini sangat praktis digunakan untuk menyelaraskan data sinkronisasi API tanpa harus memanggil dua kueri terpisah (`SELECT` lalu `INSERT`/`UPDATE`). Jebakan yang sering ditemui saat migrasi adalah perbedaan penanganan kolom mana yang dipicu saat terjadi bentrokan nilai kunci.",
          "example": {
            "code": "-- PostgreSQL: INSERT INTO stats (id, views) VALUES (1, 1) ON CONFLICT (id) DO UPDATE SET views = stats.views + 1;\n-- MySQL: INSERT INTO stats (id, views) VALUES (1, 1) ON DUPLICATE KEY UPDATE views = views + 1;",
            "output": "Data baru disisipkan atau nilai views di-increment otomatis.",
            "note": "Pola paling umum untuk penanganan kaunter atau caching database."
          },
          "instruction": "Tulis klausa PostgreSQL ON CONFLICT pada kolom 'email' yang melakukan DO UPDATE SET 'updated_at = NOW()'.",
          "starterCode": "-- Tulis ON CONFLICT PostgreSQL di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ON\\s+CONFLICT\\s*\\(\\s*email\\s*\\)\\s+DO\\s+UPDATE\\s+SET\\s+updated_at\\s*=\\s*NOW\\(\\)",
              "message": "Gunakan: ON CONFLICT (email) DO UPDATE SET updated_at = NOW()"
            }
          ],
          "solution": "ON CONFLICT (email) DO UPDATE SET updated_at = NOW()"
        },
        {
          "kind": "step",
          "id": "sql-10-mig-3",
          "title": "Penanganan Tipe Boolean & Date Invalid",
          "explanation": "Penanganan tipe data Boolean dan nilai tanggal invalid berbeda signifikan antar mesin database. PostgreSQL mendukung tipe data `BOOLEAN` murni (`TRUE`/`FALSE`) dan menolak tegas tanggal nol `0000-00-00`, sedangkan MySQL mengonversi tipe boolean menjadi `TINYINT(1)` (`1`/`0`). Penyesuaian skema wajib dilakukan saat proses migrasi data agar tidak terjadi exception penolakan tipe data pada database tujuan. Jebakan terbanyak saat migrasi dari MySQL ke PostgreSQL adalah gagalnya import data akibat adanya record tanggal `0000-00-00` pada data lama.",
          "example": {
            "code": "-- MySQL: is_active TINYINT(1) DEFAULT 1\n-- PostgreSQL: is_active BOOLEAN DEFAULT TRUE",
            "output": "Perubahan tipe data saat migrasi skema tabel.",
            "note": "Pastikan ORM atau skrip migrasi melakukan pemetaan tipe data dengan benar."
          },
          "instruction": "Definisikan kolom 'is_active' bertipe BOOLEAN dengan nilai default TRUE sesuai standar PostgreSQL.",
          "starterCode": "-- Tulis kolom BOOLEAN di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "is_active\\s+BOOLEAN\\s+DEFAULT\\s+TRUE",
              "message": "Gunakan: is_active BOOLEAN DEFAULT TRUE"
            }
          ],
          "solution": "is_active BOOLEAN DEFAULT TRUE"
        },
        {
          "kind": "step",
          "id": "sql-10-mig-4",
          "title": "Justifikasi Arsitektur Pemilihan Database",
          "explanation": "Pemilihan arsitektur database harus didasarkan pada kebutuhan teknis aplikasi dan keahlian tim, bukan sekadar mengikuti tren teknologi. Pilih MySQL untuk aplikasi web berbasis PHP/Laravel yang membutuhkan efisiensi pembacaan data tinggi dan hosting murah, serta pilih PostgreSQL untuk aplikasi yang membutuhkan fitur data kompleks seperti JSONB, geospasial, dan analitik. Justifikasi teknis ini menjadi poin penilaian utama dalam wawancara kerja tingkat senior. Jebakan terbesar tim engineering adalah mengganti mesin database tanpa mempertimbangkan biaya migrasi data dan refactoring kode.",
          "example": {
            "code": "// PostgreSQL: Sangat cocok untuk FinTech, GIS, dan aplikasi data kompleks.\n// MySQL: Sangat cocok untuk CMS, e-Commerce standar, dan web skala menengah.",
            "output": "Keputusan arsitektural berbasis analisis kebutuhan teknis.",
            "note": "Sampaikan kriteria pemilihan ini secara logis saat wawancara sistem desain."
          },
          "instruction": "Tulis query PostgreSQL yang memanfaatkan tipe data JSONB 'payload' untuk menyaring baris di mana payload->>'tier' bernilai 'gold'.",
          "starterCode": "-- Tulis query JSONB Postgres di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+payload->>'tier'\\s*=\\s*['\"]gold['\"]\\s*;?",
              "message": "Gunakan: SELECT * FROM users WHERE payload->>'tier' = 'gold';"
            }
          ],
          "solution": "SELECT * FROM users WHERE payload->>'tier' = 'gold';"
        },
        {
          "kind": "step",
          "id": "sql-10-mig-5",
          "title": "Transformasi Data saat Migrasi",
          "explanation": "Prosedur transformasi data saat migrasi antar mesin membutuhkan skrip ETL khusus atau alat otomatis seperti `pgloader` untuk mengonversi DDL skema dan tipe data. Selama proses migrasi, alur kerja yang direkomendasikan adalah melakukan migrasi struktur tabel terlebih dahulu, mengimpor isi data, lalu membuat indeks dan constraint relasi di akhir. Urutan ini mempercepat waktu pemindahan data hingga puluhan kali lipat. Jebakan utamanya adalah membuat indeks terlebih dahulu sebelum mengimpor jutaan baris data yang membuat waktu import menjadi sangat lama.",
          "example": {
            "code": "pgloader mysql://user:pass@localhost/db_lama postgresql://user:pass@localhost/db_baru",
            "output": "pgloader mengotomatiskan konversi skema dan migrasi data dari MySQL ke PostgreSQL.",
            "note": "pgloader adalah alat migrasi otomatis paling populer dari MySQL ke Postgres."
          },
          "instruction": "Tulis perintah CLI pgloader untuk memigrasikan database asal 'mysql://root@localhost/source_db' ke target 'postgresql://postgres@localhost/target_db'.",
          "starterCode": "# Tulis perintah pgloader di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "pgloader\\s+mysql://root@localhost/source_db\\s+postgresql://postgres@localhost/target_db",
              "message": "Gunakan: pgloader mysql://root@localhost/source_db postgresql://postgres@localhost/target_db"
            }
          ],
          "solution": "pgloader mysql://root@localhost/source_db postgresql://postgres@localhost/target_db"
        },
        {
          "kind": "step",
          "id": "sql-10-mig-6",
          "title": "Verifikasi Jumlah & Hash Data Pasca-Migrasi",
          "explanation": "Prosedur verifikasi integritas data pasca-migrasi wajib dilakukan dengan membandingkan jumlah baris (`COUNT(*)`) dan nilai checksum data pada setiap tabel di kedua server database. Pengujian ini memastikan bahwa tidak ada baris data yang hilang, karakter yang korup, atau masalah enkoding yang terjadi selama proses transfer. Verifikasi ini memberikan jaminan 100% bahwa database baru siap digunakan di produksi. Jebakan pemula adalah langsung mengalihkan lalu lintas aplikasi ke database baru tanpa melakukan verifikasi checksum data terlebih dahulu.",
          "example": {
            "code": "SELECT COUNT(*) FROM users;",
            "output": " MySQL: 50000 rows | PostgreSQL: 50000 rows (Match!)",
            "note": "Uji kesetaraan memastikan tidak ada data yang hilang atau corrupt selama proses migrasi."
          },
          "instruction": "Tulis query SQL standar untuk menghitung jumlah total baris pada tabel 'orders' demi memverifikasi jumlah data.",
          "starterCode": "-- Tulis query COUNT di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+COUNT\\(\\*\\)\\s+FROM\\s+orders\\s*;?",
              "message": "Gunakan: SELECT COUNT(*) FROM orders;"
            }
          ],
          "solution": "SELECT COUNT(*) FROM orders;"
        },
        {
          "kind": "quiz",
          "id": "sql-10-mig-kuis",
          "title": "Kuis: Memilih & Migrasi antar Database",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Bagaimanakah penanganan tipe data Boolean yang berbeda antara PostgreSQL dan MySQL?",
              "choices": [
                "PostgreSQL mendukung tipe BOOLEAN sejati (TRUE/FALSE), sedangkan MySQL mengonversinya menjadi TINYINT(1) (1/0)",
                "MySQL menggunakan VARCHAR untuk boolean",
                "PostgreSQL tidak mendukung nilai FALSE",
                "Kedua database menggunakan format teks 'YES/NO'"
              ],
              "answerIndex": 0,
              "explanation": "PostgreSQL menyediakan tipe data `BOOLEAN` asli, sedangkan MySQL memperlakukan `BOOLEAN` sebagai alias untuk `TINYINT(1)`."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Tool open-source populer apa yang digunakan untuk mengotomatiskan migrasi skema dan data dari MySQL langsung ke PostgreSQL?",
              "choices": [
                "pgloader",
                "mysqldump",
                "certbot",
                "npm"
              ],
              "answerIndex": 0,
              "explanation": "pgloader secara otomatis mengonversi skema DDL, memetakan tipe data, dan memindahkan isi data dari MySQL ke PostgreSQL secara cepat."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Manakah skenario di mana PostgreSQL jauh lebih unggul dibanding MySQL secara arsitektural?",
              "choices": [
                "Aplikasi yang membutuhkan query JSONB ter-index kompleks, pencarian teks tingkat lanjut, dan analisis query relasional berat",
                "Web blog sederhana yang hanya butuh hosting murah Rp 15rb/bulan",
                "Aplikasi yang hanya berjalan di server Windows 98",
                "Aplikasi tanpa database"
              ],
              "answerIndex": 0,
              "explanation": "PostgreSQL sangat unggul pada fitur data modern seperti JSONB ter-index GIN, ekstensi PostGIS, pencarian tsvector, serta optimasi query analitik."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Saat melakukan migrasi dari MySQL ke PostgreSQL, kamu menemukan kolom TINYINT(1) yang dipakai sebagai boolean. Apa yang harus diperhatikan dalam proses konversi ini?",
              "choices": [
                "Kolom TINYINT(1) MySQL harus dikonversi ke tipe BOOLEAN asli PostgreSQL, dan nilai 0/1 dipetakan ke FALSE/TRUE",
                "Tidak perlu diubah karena keduanya identik",
                "Cukup ganti nama kolom saja",
                "TINYINT(1) harus diubah menjadi VARCHAR"
              ],
              "answerIndex": 0,
              "explanation": "MySQL menyimpan boolean sebagai TINYINT(1) (angka 0 atau 1), sedangkan PostgreSQL memiliki tipe BOOLEAN asli. Tool migrasi seperti pgloader biasanya menangani konversi ini otomatis."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Ketika seorang interviewer bertanya 'Kenapa timmu memilih PostgreSQL dibanding MySQL?', jawaban mana yang paling kuat secara teknis?",
              "choices": [
                "Karena PostgreSQL lebih populer di Google Trends",
                "Karena kebutuhan kami pada JSONB ter-index untuk API fleksibel, full-text search bawaan, dan dukungan ekstensi seperti PostGIS untuk data geospasial",
                "Karena MySQL tidak gratis",
                "Karena PostgreSQL lebih mudah di-install"
              ],
              "answerIndex": 1,
              "explanation": "Jawaban interview yang baik selalu menyebutkan fitur teknis spesifik yang menjadi kebutuhan proyek, bukan opini umum. Sebutkan fitur konkret yang tidak dimiliki alternatifnya."
            }
          ]
        }
      ]
    },
    {
      "slug": "sql-di-aplikasi",
      "title": "SQL di Aplikasi",
      "description": "Menjembatani SQL murni dengan kode: ORM, N+1, dan keamanan.",
      "topics": [
        "Koneksi dari Node (pg) & connection pool",
        "Parameterized query: satu-satunya cara mencegah SQL injection",
        "ORM vs query builder vs raw SQL \u2014 trade-off jujur",
        "Masalah N+1 & cara mendeteksinya",
        "Migration di aplikasi nyata",
        "Optimasi query lambat: proses diagnosis lengkap"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-11-m1",
          "title": "Integrasi SQL di Aplikasi Backend, Connection Pool & ORM",
          "body": "# Integrasi SQL di Aplikasi Backend, Connection Pool & ORM\n\nModul penutup ini mendalami integrasi SQL pada aplikasi backend nyata (seperti Node.js), keamanan dari serangan SQL Injection, bahaya N+1 query, serta pemakaian ORM.\n\n## 1. Menghubungkan Backend ke Database & Connection Pooling\n\nSaat membangun API backend (seperti dengan Express.js atau NestJS), aplikasi kita harus berkomunikasi dengan server database.\n\n### Mengapa Harus Menggunakan Connection Pool (`pg.Pool` / `mysql2.createPool`)?\nMembuka koneksi baru ke database membutuhkan proses handshaking TCP dan autentikasi yang berat (memakan waktu ~50-100ms). Jika setiap HTTP request membuka koneksi baru, server akan cepat kehabisan memori RAM dan crash!\n**Connection Pool** mempertahankan kumpulan koneksi terbuka yang siap dipakai ulang oleh HTTP handler secara instan.\n\n```text\n+--------------------------------------------------------------------------+\n|                BAHAYA SQL INJECTION vs PARAMETERIZED QUERY               |\n+--------------------------------------------------------------------------+\n|  \u274c SANGAT BERBAHAYA (String Concatenation):                             |\n|  const query = \"SELECT * FROM users WHERE email = '\" + req.body.email + \"'\";\n|  Input Peretas: ' OR '1'='1                                             |\n|  Kueri Terkessekusi: SELECT * FROM users WHERE email = '' OR '1'='1'     |\n|  --> SELURUH DATA USER BOCOR KELUAR!                                     |\n|                                                                          |\n|  \u2705 SANGAT AMAN (Parameterized Query):                                   |\n|  const query = \"SELECT * FROM users WHERE email = $1\";                    |\n|  db.query(query, [req.body.email]);                                      |\n|  --> Input dianggap sebagai TEKS MATI biasa, bukan sintaks perintah SQL!  |\n+--------------------------------------------------------------------------+\n```\n\n---\n\n## 2. Trade-Off: ORM vs Query Builder vs Raw SQL\n\nDi aplikasi industri, kita memiliki 3 pendekatan untuk berinteraksi dengan database:\n\n| Pendekatan | Contoh Library | Kelebihan Utama | Kelemahan Utama |\n|---|---|---|---|\n| **ORM (Object-Relational Mapping)** | Prisma, TypeORM, Drizzle, Eloquent | Type-safety, relasi otomatis, produktivitas tinggi | Kueri kompleks bisa kurang efisien |\n| **Query Builder** | Knex.js, Kysely | Fleksibel, sintaks JavaScript/TypeScript rapi | Tidak ada pemetaan objek otomatis |\n| **Raw SQL** | Native `pg` / `mysql2` | Performa maksimal, kontrol penuh kueri | Harus mengelola sanitasi & mapping manual |\n\n---\n\n## 3. Masalah N+1 Query & Cara Mengatasinya\n\nMasalah N+1 terjadi saat aplikasi memanggil 1 kueri utama untuk mengambil daftar data (misal 100 pengguna), lalu di dalam perulangan (loop) memanggil 1 kueri tambahan per pengguna untuk mengambil data profilnya (total 101 kueri ke database!).\n\n**Solusinya:** Gunakan teknik **Eager Loading** (`JOIN` atau klausul `include` pada ORM) untuk mengambil seluruh data pengguna dan profilnya dalam **1 kueri tunggal**.\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **Serangan SQL Injection akibat String Interpolation:** Menggabungkan string variabel pengguna langsung ke dalam kueri SQL (`\"WHERE name = '\" + input + \"'\"` ) adalah celah keamanan nomor 1 di web. Gunakan selalu Parameterized Query (`$1` atau `?`).\n2. **Koneksi Bocor (Connection Leak):** Membuka koneksi manual `const client = await pool.connect()` namun lupa memanggil `client.release()` di blok `finally` akan menghabiskan seluruh kuota connection pool.\n3. **Menjalankan Migration Manual di Produksi:** Menjalankan perintah perombakan skema tanpa versi migration script (seperti Prisma Migrate atau Knex Migrations) akan menyulitkan rollback saat terjadi bug di produksi.\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Setiap hari saat kamu bekerja sebagai Fullstack atau Backend Developer yang membangun REST API, GraphQL, atau Microservices.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan keamanan & performa paling populer: *\"Bagaimana cara kerja serangan SQL Injection, bagaimana parameterized query mencegahnya, dan apa itu masalah N+1 query?\"*\n- Di code review tim backend, pull request kamu akan ditolak keras jika ditemukan penggabungan string pada kueri SQL atau adanya indikasi masalah N+1 query di endpoint API."
        },
        {
          "kind": "step",
          "id": "sql-8-1",
          "title": "Connection Pooling di Backend Node.js",
          "explanation": "Teknik Connection Pooling mengelola sekumpulan koneksi database aktif yang siap dipakai ulang oleh aplikasi backend (seperti modul `pg.Pool` di Node.js). Membuka dan menutup koneksi baru pada setiap HTTP request membutuhkan waktu handshaking yang sangat mahal (~100ms) dan dapat membuat server kehabisan memori. Connection pool mempertahankan koneksi tetap terbuka sehingga kueri dapat dieksekusi dalam orde milidetik. Jebakan terbesar pemula adalah memanggil `new Pool()` di dalam handler HTTP request yang justru membuat ribuan pool baru dan melumpuhkan server.",
          "example": {
            "code": "import { Pool } from \"pg\";\nconst pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 20 });",
            "output": "Pool diinisialisasi dengan kuota maksimal 20 koneksi.",
            "note": "Mencegah error 'FATAL: sorry, too many clients already'."
          },
          "instruction": "Buat objek instance Pool baru dari driver pg yang membatasi koneksi maksimal sebanyak 10.",
          "starterCode": "// Tulis instance Pool di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "const\\s+pool\\s*=\\s*new\\s+Pool\\(\\s*\\{\\s*max\\s*:\\s*10\\s*\\}\\s*\\)\\s*;?",
              "message": "Gunakan: const pool = new Pool({ max: 10 });"
            }
          ],
          "solution": "const pool = new Pool({ max: 10 });"
        },
        {
          "kind": "step",
          "id": "sql-8-2",
          "title": "Parameterized Query Mencegah SQL Injection",
          "explanation": "Parameterized Query adalah teknik keamanan wajib yang memisahkan sintaks perintah SQL dari data variabel masukan pengguna menggunakan placeholder seperti `$1, $2` atau `?`. Dengan parameterized query, mesin database mengkompilasi struktur kueri terlebih dahulu sehingga input berbahaya dari peretas tidak akan pernah dieksekusi sebagai perintah SQL. Teknik ini merupakan satu-satunya cara ampuh untuk memusnahkan celah keamanan SQL Injection pada aplikasi web. Jebakan paling fatal di dunia web adalah menggabungkan variabel string masukan pengguna secara langsung (string concatenation) ke dalam kueri SQL.",
          "example": {
            "code": "const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);",
            "output": "Query dieksekusi aman tanpa risiko terinjeksi string berbahaya.",
            "note": "Jangan pernah menggabungkan input pengguna menggunakan string concatenation (+ configuration)!"
          },
          "instruction": "Tulis panggilan pool.query asinkron untuk menyaring data pengguna dari tabel 'users' di mana kolom 'id' sama dengan parameter $1, lalu lewatkan variabel [id] dalam array.",
          "starterCode": "// Tulis pool.query terparameter di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "await\\s+pool\\.query\\(\\s*['\"]SELECT\\s+\\*\\s+FROM\\s+users\\s+WHERE\\s+id\\s*=\\s*\\$1['\"]\\s*,\\s*\\[\\s*id\\s*\\]\\s*\\)\\s*;?",
              "message": "Gunakan parameterized query $1 dengan array [id]"
            }
          ],
          "solution": "await pool.query('SELECT * FROM users WHERE id = $1', [id]);"
        },
        {
          "kind": "step",
          "id": "sql-8-3",
          "title": "Kueri ORM (Prisma / Eloquent) vs Raw SQL",
          "explanation": "Penggunaan ORM (seperti Prisma, TypeORM, atau Eloquent) memberikan produktivitas tinggi dengan fitur Type-Safety dan pemetaan relasi otomatis, namun Raw SQL tetap dibutuhkan untuk kueri agregasi komplek ber-performa tinggi. Developer profesional harus memahami kapan saatnya memakai kenyamanan ORM dan kapan harus menulis Raw SQL untuk optimasi kueri berat. Pemahaman mendasar tentang SQL murni menjamin kamu tidak tergantung pada satu jenis library ORM tertentu. Jebakan pemula adalah mengandalkan ORM 100% tanpa pernah memeriksa kueri SQL mentah yang dihasilkan oleh ORM tersebut di belakang layar.",
          "example": {
            "code": "const users = await prisma.user.findMany({\n  where: { status: \"active\" }\n});",
            "output": "Array berisi daftar objek user ber-status active.",
            "note": "Gunakan ORM untuk operasi CRUD harian, dan Raw SQL untuk pelaporan berat."
          },
          "instruction": "Gunakan Prisma Client untuk mengambil seluruh data pengguna dari tabel 'user' yang memiliki kolom 'role' bernilai 'admin'.",
          "starterCode": "// Tulis query Prisma findMany di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "await\\s+prisma\\.user\\.findMany\\(\\s*\\{\\s*where\\s*:\\s*\\{\\s*role\\s*:\\s*['\"]admin['\"]\\s*\\}\\s*\\}\\s*\\)\\s*;?",
              "message": "Gunakan: await prisma.user.findMany({ where: { role: \"admin\" } });"
            }
          ],
          "solution": "await prisma.user.findMany({ where: { role: \"admin\" } });"
        },
        {
          "kind": "step",
          "id": "sql-8-4",
          "title": "Mendeteksi & Menghilangkan Masalah N+1",
          "explanation": "Masalah N+1 Query terjadi ketika aplikasi memanggil 1 kueri utama untuk mengambil daftar N data, lalu di dalam perulangan (loop) memanggil N kueri tambahan untuk mengambil data relasinya. Masalah ini menyebabkan ratusan kueri yang tidak perlu dikirimkan ke database sehingga memperlambat respon API backend secara drastis. Masalah N+1 diatasi dengan teknik Eager Loading (menggunakan `JOIN` atau opsi `include` pada ORM) untuk mengambil seluruh data dalam 1 kueri tunggal. Jebakan utamanya adalah tidak mendeteksi masalah N+1 selama pengembangan di lokal karena jumlah data ujicoba masih sedikit.",
          "example": {
            "code": "const usersWithProfile = await prisma.user.findMany({\n  include: { profile: true }\n});",
            "output": "ORM mengeksekusi 1 query gabungan yang efisien tanpa memicu loop N+1.",
            "note": "Mencegah ratusan request SQL beruntun ke database server."
          },
          "instruction": "Gunakan fitur Eager Loading pada Prisma findMany dengan menambahkan opsi 'include: { posts: true }' untuk mengambil data user beserta post-nya sekaligus.",
          "starterCode": "// Tulis query Eager Loading Prisma di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "await\\s+prisma\\.user\\.findMany\\(\\s*\\{\\s*include\\s*:\\s*\\{\\s*posts\\s*:\\s*true\\s*\\}\\s*\\}\\s*\\)\\s*;?",
              "message": "Gunakan: await prisma.user.findMany({ include: { posts: true } });"
            }
          ],
          "solution": "await prisma.user.findMany({ include: { posts: true } });"
        },
        {
          "kind": "step",
          "id": "sql-8-5",
          "title": "Skema Migration di Aplikasi Nyata",
          "explanation": "Skema Migration adalah skrip terversi yang mengontrol perubahan struktur skema database (seperti penambahan tabel atau kolom) secara bertahap dan terencana. Menggunakan tool migration (seperti Prisma Migrate atau Knex Migrations) memungkinkan seluruh tim developer menyelaraskan struktur database lokal mereka dengan mudah. Di lingkungan produksi, migrasi dijalankan secara otomatis saat proses deployment menggunakan perintah seperti `npx prisma migrate deploy`. Jebakan berbahaya adalah mengubah skema database produksi secara manual via GUI client tanpa melalui skrip migrasi terversi.",
          "example": {
            "code": "npx prisma migrate dev --name add_profile",
            "output": "1 migration created and applied: 20260727_add_profile",
            "note": "Jalankan migrate deploy pada langkah deployment CI/CD otomatis."
          },
          "instruction": "Ketikkan perintah CLI Prisma untuk mengeksekusi migrasi tertunda pada lingkungan produksi (migrate deploy).",
          "starterCode": "# Tulis perintah migrate deploy di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "npx\\s+prisma\\s+migrate\\s+deploy",
              "message": "Gunakan: npx prisma migrate deploy"
            }
          ],
          "solution": "npx prisma migrate deploy"
        },
        {
          "kind": "step",
          "id": "sql-8-6",
          "title": "Diagnosis & Optimasi Query Lambat (EXPLAIN ANALYZE)",
          "explanation": "Diagnosis kueri lambat di aplikasi backend dilakukan dengan mengaktifkan fitur pencatatan log kueri dan menganalisis kueri bermasalah menggunakan perintah `EXPLAIN ANALYZE`. Setelah menemukan titik leher botol (seperti adanya Full Table Scan pada tabel besar), kamu dapat menambahkan indeks B-Tree yang sesuai pada kolom pencarian. Langkah diagnosis yang terstruktur ini menjamin perbaikan performa aplikasi didasarkan pada bukti data eksekusi riil, bukan sekadar tebakan. Jebakan umum adalah langsung menambah indeks secara acak tanpa terlebih dahulu menganalisis output rencana eksekusi `EXPLAIN ANALYZE`.",
          "example": {
            "code": "EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';",
            "output": "Index Scan using idx_users_email on users  (cost=0.28..8.29 rows=1 width=128) (actual time=0.015..0.018 ms)",
            "note": "Jika melihat 'Seq Scan' pada tabel besar, buatlah Index pada kolom pencarian tersebut."
          },
          "instruction": "Tuliskan perintah EXPLAIN ANALYZE untuk menganalisis rencana eksekusi query 'SELECT * FROM orders WHERE user_id = 42;'.",
          "starterCode": "-- Tulis perintah EXPLAIN ANALYZE di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "EXPLAIN\\s+ANALYZE\\s+SELECT\\s+\\*\\s+FROM\\s+orders\\s+WHERE\\s+user_id\\s*=\\s*42\\s*;?",
              "message": "Gunakan: EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 42;"
            }
          ],
          "solution": "EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 42;"
        },
        {
          "kind": "quiz",
          "id": "sql-8-kuis",
          "title": "Kuis: SQL di Aplikasi",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Cara paling aman dan ampuh untuk mencegah serangan SQL Injection saat mengeksekusi Raw Query dari aplikasi backend adalah?",
              "choices": [
                "Menggunakan Parameterized Query dengan placeholder (seperti $1 atau ?)",
                "Mengubah semua huruf SQL menjadi KAPITAL",
                "Menghapus kata kunci SELECT",
                "Menyimpan password di file TXT"
              ],
              "answerIndex": 0,
              "explanation": "Parameterized Query memisahkan perintah SQL dan variabel data sehingga input pengguna tidak pernah dievaluasi sebagai kode perintah SQL."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Apa tujuan utama penggunaan Connection Pool pada aplikasi backend bertrafik tinggi?",
              "choices": [
                "Mendaur ulang koneksi database aktif yang ada agar tidak membebankan pembuatan koneksi baru per HTTP request",
                "Mempercepat proses kompilasi kode JavaScript",
                "Menyimpan cache HTML di browser",
                "Menghapus tabel otomatis setiap jam"
              ],
              "answerIndex": 0,
              "explanation": "Connection Pool mendaur ulang koneksi yang sudah terbuka sehingga server tidak kewalahan dan tidak kehabisan RAM akibat membuka koneksi TCP berulang."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Apakah yang dimaksud dengan masalah N+1 dalam konteks penggunaan ORM/Database?",
              "choices": [
                "Kondisi saat aplikasi memanggil 1 query utama lalu secara tidak efisien mengeksekusi N query tambahan di dalam loop",
                "Kesalahan tipe data angka yang ditambah 1",
                "Bug di mana database kekurangan 1 kolom",
                "Syntax error pada klausa ORDER BY"
              ],
              "answerIndex": 0,
              "explanation": "Masalah N+1 terjadi ketika pengambil data relasi dilakukan di dalam perulangan N baris, memicu N+1 kali kueri ke server yang seharusnya cukup diselesaikan dalam 1 kueri JOIN/Eager Loading."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Dalam proyek nyata, kapan sebaiknya kamu memilih menggunakan Raw SQL Query daripada ORM?",
              "choices": [
                "Ketika query sangat kompleks (multiple JOIN, window function, CTE) dan ORM malah menghasilkan query tidak optimal",
                "Selalu, karena ORM tidak aman",
                "Tidak pernah, karena ORM selalu lebih baik",
                "Hanya saat database tidak mendukung ORM"
              ],
              "answerIndex": 0,
              "explanation": "Raw SQL cocok untuk query analitik atau multi-join kompleks di mana abstraksi ORM justru menghasilkan SQL yang tidak efisien. Namun tetap gunakan parameterized query untuk keamanan."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Apa fungsi utama dari Database Migration dalam siklus pengembangan aplikasi?",
              "choices": [
                "Mencatat setiap perubahan skema database secara berversi sehingga bisa di-apply dan rollback secara konsisten di semua environment",
                "Memindahkan data dari satu server ke server lain",
                "Mengenkripsi seluruh isi database",
                "Menghapus database lama dan membuat yang baru"
              ],
              "answerIndex": 0,
              "explanation": "Migration berfungsi sebagai version control untuk skema database, memastikan struktur tabel konsisten antara environment development, staging, dan production."
            }
          ]
        }
      ]
    }
  ]
};
