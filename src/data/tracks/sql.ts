import type { Track } from "@/lib/types";

export const sqlTrack: Track = {
  "slug": "sql",
  "title": "Database & SQL",
  "description": "SQL murni dulu, ORM belakangan. PostgreSQL & MySQL sampai optimasi query.",
  "hours": 90,
  "recommendedPrereqs": [],
  "color": "bg-indigo-600",
  "icon": "🗄️",
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
              "pattern": "SELECT\\s+\\*",
              "message": "Untuk mengambil SEMUA kolom, daftar kolomnya diganti tanda bintang. Di produksi kebiasaan ini dihindari (kolom baru ikut terbawa), tapi untuk melihat isi tabel ia paling cepat."
            },
            {
              "pattern": "FROM\\s+products",
              "message": "Sebutkan tabel sumbernya setelah kata kunci `FROM`. Perhatikan namanya jamak dan huruf kecil — nama tabel harus persis seperti di skema."
            },
            {
              "pattern": ";",
              "message": "Akhiri pernyataannya dengan titik koma. Di psql, perintah tanpa titik koma dianggap belum selesai: prompt berubah jadi `db-#` dan seolah tidak terjadi apa-apa."
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
              "pattern": "SELECT\\s+name\\s*,\\s*email|SELECT\\s+email\\s*,\\s*name",
              "message": "Sebutkan kedua kolom yang diminta, dipisah koma, langsung setelah `SELECT`. Urutan kolom menentukan urutan tampilan hasil, jadi keduanya diterima."
            },
            {
              "pattern": "FROM\\s+users",
              "message": "Tabel sumbernya belum disebut. Tambahkan `FROM` diikuti nama tabel penggunanya."
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
              "pattern": "SELECT\\s+\\*\\s+FROM\\s+products",
              "message": "Mulai dari pengambilan seluruh kolom tabel produk, baru tambahkan penyaringnya."
            },
            {
              "pattern": "WHERE\\s+price\\s*=\\s*10000",
              "message": "Penyaring baris ditulis dengan `WHERE`, lalu kolom, operator, dan nilainya. Angka TIDAK dibungkus tanda kutip — mengutip angka membuat sebagian database melakukan konversi diam-diam dan mengabaikan index."
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
              "pattern": "WHERE\\s+.*status\\s*=\\s*['\"]active['\"]",
              "message": "Syarat pertama: kolom status bernilai teks `active`. Di SQL, teks dibungkus **petik tunggal** — petik ganda berarti nama kolom dan akan memicu error kolom tidak ditemukan."
            },
            {
              "pattern": "AND\\s+|\\s+AND",
              "message": "Dua syarat yang harus terpenuhi BERSAMAAN disambung dengan `AND`. Kalau kamu memakai `OR`, hasilnya justru melebar: siapa pun yang aktif ATAU admin akan ikut terambil."
            },
            {
              "pattern": "role\\s*=\\s*['\"]admin['\"]",
              "message": "Syarat kedua belum ada: kolom peran bernilai `admin`, juga dengan petik tunggal."
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
              "pattern": "ORDER\\s+BY\\s+created_at",
              "message": "Pengurutan memakai `ORDER BY` diikuti kolom waktu pembuatannya."
            },
            {
              "pattern": "ORDER\\s+BY\\s+created_at\\s+DESC",
              "message": "\"Terbaru\" berarti urutan menurun, jadi tambahkan penanda urutan turun setelah nama kolom. Tanpa itu, default SQL adalah menaik (`ASC`) dan yang muncul justru data paling lama."
            },
            {
              "pattern": "LIMIT\\s+10",
              "message": "Batasi jumlah barisnya dengan `LIMIT` diikuti angka. Perhatikan urutan klausa: `ORDER BY` selalu ditulis SEBELUM `LIMIT`, karena pembatasan diambil dari hasil yang sudah terurut."
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
              "pattern": "SELECT\\s+DISTINCT\\s+role",
              "message": "Untuk membuang nilai kembar, sisipkan kata kunci penghilang duplikat tepat setelah `SELECT`, sebelum nama kolom. Ia berlaku untuk KOMBINASI seluruh kolom yang kamu pilih, bukan per kolom."
            },
            {
              "pattern": "FROM\\s+users",
              "message": "Tambahkan tabel sumbernya dengan `FROM`."
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
              "pattern": "FROM\\s+orders",
              "message": "Ambil dari tabel pesanan dengan `FROM`."
            },
            {
              "pattern": "paid_at\\s+IS\\s+NOT\\s+NULL",
              "message": "Pemeriksaan kosong/tidak kosong TIDAK memakai `=`. `paid_at != NULL` selalu menghasilkan nol baris, karena perbandingan dengan NULL bernilai \"tidak diketahui\" — bentuk yang benar memakai kata `IS`."
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
              "explanation": "NULL berarti 'nilainya tidak diketahui', bukan nol dan bukan string kosong. Membandingkan sesuatu yang tidak diketahui dengan nilai apa pun hasilnya juga tidak diketahui — bukan TRUE — sehingga barisnya tidak pernah lolos filter. Karena itu SQL menyediakan operator khusus IS NULL dan IS NOT NULL."
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
              "explanation": "Urutannya tetap: ORDER BY dulu, baru LIMIT. Database mengurutkan seluruh baris lebih dulu, baru memotong 10 teratas — kalau LIMIT ditulis duluan, sintaksnya error di MySQL maupun PostgreSQL. Kata kunci DESC dipakai karena termahal berarti dari besar ke kecil; tanpa DESC kamu justru mendapat 10 termurah."
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
              "explanation": "DISTINCT membuang baris kembar dari hasil query sehingga setiap kota hanya muncul sekali. SELECT city biasa mengembalikan 5.000 baris penuh pengulangan, dan UNIQUE() bukan fungsi SQL standar. Alternatif yang juga benar adalah GROUP BY city — biasanya dipakai kalau kamu sekaligus ingin menghitung jumlah pelanggan per kota."
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
      "description": "Materi interview SQL paling sering keluar — kuasai sampai bisa menggambar diagramnya.",
      "topics": [
        "Primary key & foreign key",
        "INNER JOIN: irisan dua tabel",
        "LEFT/RIGHT JOIN & baris NULL",
        "Join lebih dari dua tabel",
        "Self join (karyawan → atasan)",
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
          "explanation": "**Primary Key (PK)** adalah kolom yang menjadi identitas unik satu baris: nilainya tidak boleh kembar dan tidak boleh kosong, misalnya `users.id`. **Foreign Key (FK)** adalah kolom di tabel lain yang menunjuk ke PK itu, misalnya `orders.user_id` — inilah yang membuat dua tabel benar-benar berelasi, bukan sekadar terlihat mirip. Kamu memakainya sejak tahap desain: begitu satu entitas bisa memiliki banyak entitas lain (satu user punya banyak order), datanya dipecah ke dua tabel lalu dijahit dengan FK. Nilai sesungguhnya bukan kerapian, tapi jaminan dari database: dengan FK terpasang, `orders` menolak `user_id` yang tidak ada di `users`. Jebakan yang paling sering terjadi adalah membuat kolom `user_id` saja tanpa klausul `FOREIGN KEY` — relasinya hanya ada di kepala pembuatnya, sehingga baris yatim (menunjuk user yang sudah terhapus) tetap bisa masuk. Di MySQL ada jebakan tambahan: tabel wajib memakai engine InnoDB, karena MyISAM menerima sintaksnya tapi mengabaikan constraint-nya diam-diam.",
          "example": {
            "code": "CREATE TABLE orders (\n  id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);\n\n-- lalu coba simpan order milik user yang tidak ada:\nINSERT INTO orders (id, user_id) VALUES (1, 999);",
            "output": "CREATE TABLE\n\nERROR:  insert or update on table \"orders\" violates foreign key constraint \"orders_user_id_fkey\"\nDETAIL:  Key (user_id)=(999) is not present in table \"users\".",
            "note": "Pesan error itulah bukti FK bekerja. Tanpa klausul FOREIGN KEY, INSERT tadi SUKSES dan kamu baru sadar datanya rusak berbulan-bulan kemudian saat laporan tidak cocok."
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
          "explanation": "`INNER JOIN` menggabungkan baris dua tabel dan **hanya** menyisakan baris yang punya pasangan di kedua sisi. Klausul `ON` menentukan aturan pasangannya, hampir selalu FK di satu tabel dibandingkan dengan PK di tabel lain (`ON orders.user_id = users.id`). Dipakai ketika kamu memang ingin membuang data tanpa pasangan — misalnya menampilkan daftar pesanan yang dipastikan punya pembeli valid. Jebakan pertama: lupa `ON`, yang membuat database menghasilkan perkalian kartesian — 10.000 baris × 10.000 baris = 100 juta baris palsu yang bisa membekukan server. Jebakan kedua lebih halus: baris yang FK-nya `NULL` ikut hilang, jadi \"data saya kok berkurang setelah di-JOIN?\" hampir selalu berarti pilihanmu seharusnya `LEFT JOIN`. Jebakan ketiga: kalau kedua tabel punya kolom bernama sama (`id`, `created_at`), sebutkan asalnya (`orders.id`) atau database menolak dengan error ambigu.",
          "example": {
            "code": "SELECT products.title, categories.name AS kategori\nFROM products\nINNER JOIN categories ON products.category_id = categories.id;",
            "output": "   title    | kategori\n------------+----------\n Kopi Gayo  | Minuman\n Teh Hijau  | Minuman\n Kaos Polos | Fashion\n(3 rows)",
            "note": "Di tabel `products` sebenarnya ada 5 baris; dua di antaranya `category_id`-nya NULL sehingga tidak muncul sama sekali. Selisih jumlah baris seperti ini yang sering disalahartikan sebagai data hilang."
          },
          "instruction": "Gunakan INNER JOIN untuk mengambil ID pesanan dan nama pengguna yang sesuai.",
          "starterCode": "-- Tulis query INNER JOIN di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+orders\\.id\\s*,\\s*users\\.name|SELECT\\s+users\\.name\\s*,\\s*orders\\.id",
              "message": "Sebutkan kolom beserta tabel asalnya (`tabel.kolom`). Tanpa penyebutan itu, kolom bernama sama di dua tabel (`id`) membuat database menolak dengan error \"column reference is ambiguous\"."
            },
            {
              "pattern": "FROM\\s+orders\\s+(INNER\\s+)?JOIN\\s+users",
              "message": "Sambungkan tabel pesanan dengan tabel pengguna memakai `JOIN`. Kata `INNER` boleh ditulis atau tidak — keduanya berarti sama."
            },
            {
              "pattern": "ON\\s+orders\\.user_id\\s*=\\s*users\\.id|ON\\s+users\\.id\\s*=\\s*orders\\.user_id",
              "message": "Setiap JOIN butuh aturan pasangannya lewat `ON`: foreign key di tabel pesanan dibandingkan dengan primary key di tabel pengguna. Tanpa `ON`, database menghasilkan perkalian kartesian — setiap baris digabung dengan semua baris tabel lain."
            }
          ],
          "solution": "SELECT orders.id, users.name FROM orders INNER JOIN users ON orders.user_id = users.id;"
        },
        {
          "kind": "step",
          "id": "sql-2-3",
          "title": "LEFT JOIN & Baris NULL",
          "explanation": "`LEFT JOIN` mengembalikan **seluruh** baris tabel kiri, ditambah data dari tabel kanan bila ada pasangannya; bila tidak ada, kolom kanan diisi `NULL`. Bedanya dengan `INNER JOIN` hanya satu hal, tapi konsekuensinya besar: tidak ada baris kiri yang hilang. Dipakai untuk laporan yang wajib memuat semua entitas — daftar seluruh pengguna beserta belanjanya, termasuk pengguna baru yang belum pernah membeli. Pola turunannya sangat berguna: `LEFT JOIN ... WHERE kanan.id IS NULL` memberi daftar \"yang belum punya pasangan\" (pengguna tanpa pesanan, produk tanpa ulasan). Jebakan yang paling sering: menaruh syarat tabel kanan di `WHERE` (`WHERE orders.status = 'paid'`) — baris `NULL` langsung tersaring habis dan hasilnya berubah menjadi INNER JOIN. Syarat seperti itu harus ditulis di dalam `ON`. Jebakan kedua: `COUNT(orders.id)` menghitung 0 untuk baris tanpa pasangan, sedangkan `COUNT(*)` menghitung 1 — sumber angka laporan yang salah.",
          "example": {
            "code": "SELECT customers.name, reviews.rating\nFROM customers\nLEFT JOIN reviews ON customers.id = reviews.customer_id;",
            "output": "  name  | rating\n--------+--------\n Ana    |      5\n Ana    |      4\n Budi   |      3\n Citra  | [NULL]\n(4 rows)",
            "note": "Ana muncul dua kali karena punya dua ulasan — LEFT JOIN memang bisa melipatgandakan baris kiri. Citra muncul dengan rating NULL: itu tanda ia belum pernah menulis ulasan, bukan tanda datanya rusak."
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
          "explanation": "Menggabungkan lebih dari dua tabel dilakukan dengan **menumpuk** klausul `JOIN` satu per satu; setiap `JOIN` baru menempel pada hasil gabungan sebelumnya, jadi urutannya boleh dibaca dari atas ke bawah seperti alur cerita. Dipakai untuk hampir semua tampilan detail di aplikasi nyata — halaman rincian pesanan menyambung `orders`, `users`, `products`, dan `shipping_addresses` sekaligus. Sejak tabel ketiga, alias tabel (`orders o`, `users u`) berubah dari selera menjadi kebutuhan, karena tanpa itu setiap kolom `id` menjadi ambigu. Jebakan pertama: satu `INNER JOIN` di tengah rantai bisa menghapus baris yang sudah kamu jaga di JOIN sebelumnya — cukup satu pesanan tanpa alamat pengiriman, dan pesanan itu hilang dari laporan. Jebakan kedua: jumlah baris membengkak diam-diam saat salah satu relasi bersifat one-to-many, sehingga `SUM()` menghitung nilai yang sama berulang kali dan totalnya menggelembung.",
          "example": {
            "code": "SELECT i.id, c.name AS pelanggan, p.method AS bayar\nFROM invoices i\nJOIN customers c ON i.customer_id = c.id\nJOIN payments p ON p.invoice_id = i.id;",
            "output": " id | pelanggan | bayar\n----+-----------+----------\n  7 | Ana       | transfer\n  8 | Budi      | qris\n(2 rows)",
            "note": "Invoice nomor 9 tidak muncul karena belum ada barisnya di `payments`. Untuk laporan yang wajib menampilkan invoice belum terbayar, JOIN kedua harus diganti `LEFT JOIN`."
          },
          "instruction": "Query di editor sudah menyambungkan `orders` dengan `users`, tapi kolom `products.title` belum punya sumber tabelnya. Tambahkan satu klausul JOIN lagi ke tabel `products`, dipasangkan lewat kolom penghubung yang ada di tabel `orders`.",
          "starterCode": "-- Tabel: orders(id, user_id, product_id), users(id, name), products(id, title)\nSELECT orders.id, users.name, products.title\nFROM orders\nJOIN users ON orders.user_id = users.id\n-- lengkapi di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "JOIN\\s+products\\s+ON\\s+orders\\.product_id\\s*=\\s*products\\.id",
              "message": "Tuliskan: JOIN products ON orders.product_id = products.id"
            }
          ],
          "solution": "SELECT orders.id, users.name, products.title\nFROM orders\nJOIN users ON orders.user_id = users.id\nJOIN products ON orders.product_id = products.id;"
        },
        {
          "kind": "step",
          "id": "sql-2-5",
          "title": "Self JOIN (Menggabungkan Tabel dengan Dirinya Sendiri)",
          "explanation": "**Self JOIN** adalah menggabungkan satu tabel dengan dirinya sendiri, dan syarat mutlaknya adalah memberi dua alias berbeda (`employees e` dan `employees m`) supaya database tahu sisi mana yang sedang dibandingkan. Ini dipakai saat relasinya berada di dalam satu tabel — pegawai menunjuk atasannya lewat `manager_id`, kategori menunjuk kategori induknya lewat `parent_id`, komentar membalas komentar lain lewat `reply_to`. Pilihan `LEFT JOIN` biasanya lebih tepat daripada `INNER JOIN` di sini, karena selalu ada baris tanpa pasangan: direktur utama tidak punya atasan, dan dengan `INNER JOIN` ia lenyap dari daftar. Jebakan pertama: lupa alias sehingga muncul error \"table name specified more than once\". Jebakan kedua: pada struktur berlapis (atasan dari atasan), satu Self JOIN hanya menjangkau satu tingkat — untuk kedalaman tak terbatas kamu butuh CTE rekursif, bukan JOIN tambahan.",
          "example": {
            "code": "SELECT k.name AS kategori, p.name AS induk\nFROM categories k\nLEFT JOIN categories p ON k.parent_id = p.id;",
            "output": "  kategori   |  induk\n-------------+----------\n Elektronik  | [NULL]\n Laptop      | Elektronik\n Aksesoris   | Elektronik\n(3 rows)",
            "note": "Baris pertama NULL karena Elektronik adalah kategori teratas. Kalau JOIN-nya INNER, kategori teratas itu hilang — dan menu navigasi yang dibangun dari query ini jadi kosong di level pertama."
          },
          "instruction": "Tabel `employees(id, name, manager_id)` menyimpan atasan setiap pegawai di dalam tabel yang sama. Sambungkan tabel itu dengan dirinya sendiri agar setiap pegawai (alias `e`) tampil bersama nama atasannya (alias `m`), dan pastikan pegawai yang tidak punya atasan tetap ikut muncul.",
          "starterCode": "-- e = pegawai, m = atasannya (tabel yang sama, dua alias berbeda)\nSELECT e.name AS pegawai, m.name AS atasan\nFROM employees e\n-- lengkapi di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "LEFT\\s+JOIN\\s+employees\\s+m\\s+ON\\s+e\\.manager_id\\s*=\\s*m\\.id",
              "message": "Gunakan: LEFT JOIN employees m ON e.manager_id = m.id"
            }
          ],
          "solution": "SELECT e.name AS pegawai, m.name AS atasan\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;"
        },
        {
          "kind": "step",
          "id": "sql-2-6",
          "title": "Many-to-Many & Junction Table",
          "explanation": "Relasi **many-to-many** muncul saat kedua sisi bisa berjumlah banyak: satu buku punya beberapa penulis, satu penulis menulis beberapa buku. Relasi seperti ini tidak bisa diwakili oleh satu kolom FK, karena satu kolom hanya bisa menyimpan satu nilai. Solusinya adalah **junction table** (tabel perantara) yang isinya minimal dua FK — satu ke masing-masing tabel — dan setiap baris di sana mewakili satu pasangan hubungan. Dipakai di hampir semua aplikasi: produk–tag, mahasiswa–mata kuliah, user–role. Praktik yang baik adalah memasang `PRIMARY KEY (book_id, author_id)` supaya pasangan yang sama tidak bisa masuk dua kali; kalau tidak, satu klik ganda di form bisa membuat satu penulis tercatat dua kali untuk buku yang sama. Jebakan lain: menaruh daftar penulis sebagai teks berkoma di kolom `authors` — cara ini terlihat praktis, tapi mencari \"semua buku karya penulis X\" jadi mustahil dilakukan dengan benar, dan itu pelanggaran normalisasi 1NF yang klasik.",
          "example": {
            "code": "CREATE TABLE student_courses (\n  student_id INT,\n  course_id INT,\n  PRIMARY KEY (student_id, course_id),\n  FOREIGN KEY (student_id) REFERENCES students(id),\n  FOREIGN KEY (course_id) REFERENCES courses(id)\n);\n\nINSERT INTO student_courses VALUES (1, 10);\nINSERT INTO student_courses VALUES (1, 10);",
            "output": "CREATE TABLE\nINSERT 0 1\nERROR:  duplicate key value violates unique constraint \"student_courses_pkey\"\nDETAIL:  Key (student_id, course_id)=(1, 10) already exists.",
            "note": "PRIMARY KEY gabungan itulah yang menolak pendaftaran ganda. Tanpa itu, kedua INSERT sukses dan mahasiswa 1 terdaftar dua kali di mata kuliah yang sama."
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
          "explanation": "Bagian tersulit dari SQL di dunia kerja bukan sintaksnya, melainkan **menerjemahkan pertanyaan bisnis menjadi query**. Urutan yang membantu: tentukan dulu daftar apa yang harus utuh (itu tabel kiri), lalu tabel apa yang mungkin tidak punya pasangan, baru pilih jenis JOIN-nya, dan terakhir tulis syaratnya. Pertanyaan \"siapa pelanggan yang belum pernah membeli?\" adalah pola *anti-join* yang wajib kamu kenali: `LEFT JOIN` ke tabel pesanan, lalu saring `WHERE pesanan.id IS NULL`. Pola ini dipakai untuk kampanye pelanggan pasif, mencari produk tanpa ulasan, atau menemukan data yatim saat migrasi. Jebakan yang mematikan pola ini: menaruh syarat tabel kanan di `WHERE` selain pemeriksaan `IS NULL`, karena semua baris NULL langsung tersapu dan hasilnya selalu kosong. Jebakan lain: memakai kolom yang boleh kosong sebagai penanda `IS NULL` — pakailah primary key tabel kanan, satu-satunya kolom yang dijamin tidak pernah NULL kecuali karena tidak ada pasangan.",
          "example": {
            "code": "SELECT p.title\nFROM products p\nLEFT JOIN reviews r ON p.id = r.product_id\nWHERE r.id IS NULL;",
            "output": "    title\n--------------\n Teh Hijau\n Gula Aren\n(2 rows)",
            "note": "Dua produk itu belum punya satu pun ulasan. Coba tukar `r.id IS NULL` menjadi `r.rating IS NULL` pada data yang punya ulasan tanpa nilai — hasilnya bercampur, dan itulah alasan pemeriksaan NULL selalu diarahkan ke primary key."
          },
          "instruction": "Bagian pemasaran minta daftar pelanggan yang belum pernah memesan satu kali pun. LEFT JOIN-nya sudah ditulis di editor; tambahkan penyaring yang menyisakan hanya baris tanpa pasangan di tabel `orders`. Pakai kolom yang dijamin tidak pernah kosong pada baris yang memang punya pesanan.",
          "starterCode": "SELECT customers.name\nFROM customers\nLEFT JOIN orders ON customers.id = orders.customer_id\n-- lengkapi penyaringnya di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WHERE\\s+orders\\.id\\s+IS\\s+NULL\\s*;?",
              "message": "Tuliskan: WHERE orders.id IS NULL;"
            }
          ],
          "solution": "SELECT customers.name\nFROM customers\nLEFT JOIN orders ON customers.id = orders.customer_id\nWHERE orders.id IS NULL;"
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
                "Primary key — agar setiap pesanan punya identitas unik",
                "Foreign key — database ikut menolak pesanan yang menunjuk user tidak ada",
                "Index — semata-mata agar query lebih cepat",
                "Alias — supaya nama kolom lebih pendek"
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
              "explanation": "Polanya disebut anti-join: LEFT JOIN membawa semua pelanggan, lalu pelanggan tanpa pasangan pesanan akan berkolom NULL — itulah yang disaring dengan WHERE orders.id IS NULL. INNER JOIN mustahil dipakai di sini karena ia justru membuang pelanggan tanpa pesanan sejak awal."
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
              "explanation": "Relasi many-to-many butuh junction table yang menyimpan pasangan id dari kedua sisi. Satu kolom author_id di books hanya memuat satu penulis per buku, sedangkan menyimpan nama dipisah koma membuat data mustahil di-JOIN, difilter, atau dihitung — pelanggaran bentuk normal pertama yang sering ditemukan di database warisan."
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
          "explanation": "Fungsi agregasi memadatkan **banyak baris menjadi satu nilai**: `COUNT()` menghitung jumlah baris, `SUM()` menjumlahkan, `AVG()` merata-ratakan, `MIN()`/`MAX()` mengambil nilai terkecil dan terbesar. Dipakai untuk setiap angka ringkasan di dasbor — total pendapatan, jumlah pesanan hari ini, harga tertinggi. Perbedaan yang wajib dihafal: `COUNT(*)` menghitung semua baris, sedangkan `COUNT(kolom)` **mengabaikan baris yang kolomnya NULL** — dan itu jawaban dari kebanyakan laporan yang angkanya tidak cocok. `AVG()` juga membuang NULL dari pembagi, jadi rata-rata dari (10, NULL, 20) adalah 15, bukan 10. Jebakan kedua: `SUM()` pada tabel kosong mengembalikan `NULL`, bukan 0, sehingga perhitungan di aplikasi bisa gagal — bungkus dengan `COALESCE(SUM(amount), 0)`. Jebakan ketiga: mencampur kolom biasa dengan fungsi agregasi tanpa `GROUP BY` langsung ditolak database.",
          "example": {
            "code": "SELECT COUNT(*) AS baris,\n       COUNT(phone) AS punya_telepon,\n       ROUND(AVG(age), 1) AS rerata_umur\nFROM users;",
            "output": " baris | punya_telepon | rerata_umur\n-------+---------------+-------------\n    50 |            38 |        27.4\n(1 row)",
            "note": "Selisih 50 dan 38 bukan bug: 12 pengguna kolom `phone`-nya NULL. Kalau kamu melaporkan \"38 pengguna\" sebagai jumlah pengguna, angkanya salah 24%."
          },
          "instruction": "Tulis query untuk menjumlahkan seluruh amount pada tabel payments dan beri alias total.",
          "starterCode": "-- Tulis query SUM di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SUM\\(\\s*amount\\s*\\)",
              "message": "Penjumlahan seluruh baris memakai fungsi agregasi penjumlah, dengan nama kolom di dalam tanda kurung."
            },
            {
              "pattern": "AS\\s+total",
              "message": "Beri nama hasilnya dengan `AS` supaya kolomnya tidak bernama `sum` di respons API. Alias inilah yang dibaca kode aplikasimu."
            },
            {
              "pattern": "FROM\\s+payments",
              "message": "Tambahkan tabel sumbernya dengan `FROM`."
            }
          ],
          "solution": "SELECT SUM(amount) AS total FROM payments;"
        },
        {
          "kind": "step",
          "id": "sql-3-2",
          "title": "Pengelompokan Data dengan GROUP BY",
          "explanation": "`GROUP BY` memecah baris menjadi kelompok berdasarkan nilai kolom tertentu, lalu fungsi agregasi dihitung **per kelompok**, bukan untuk seluruh tabel. Hasilnya selalu satu baris per kelompok. Dipakai untuk semua pertanyaan berbentuk \"per\": pesanan per status, pendapatan per bulan, jumlah produk per kategori. Aturan besinya: setiap kolom yang muncul di `SELECT` tapi tidak dibungkus fungsi agregasi **wajib** ikut di `GROUP BY`. PostgreSQL menolak pelanggaran ini dengan error yang jelas; MySQL versi lama malah menerimanya dan mengembalikan nilai acak dari salah satu baris — jebakan yang menghasilkan laporan salah tanpa satu pun pesan error. Jebakan kedua: mengelompokkan berdasarkan kolom timestamp mentah, sehingga setiap detik menjadi kelompoknya sendiri; kelompokkan hasil pemotongannya (`DATE(created_at)`). Jebakan ketiga: kelompok yang isinya nol baris tidak akan pernah muncul — status tanpa pesanan tidak akan tampil sebagai 0.",
          "example": {
            "code": "SELECT DATE(created_at) AS tanggal, COUNT(*) AS pesanan\nFROM orders\nGROUP BY DATE(created_at)\nORDER BY tanggal;",
            "output": "  tanggal   | pesanan\n------------+---------\n 2026-07-25 |       4\n 2026-07-26 |      11\n 2026-07-28 |       7\n(3 rows)",
            "note": "Perhatikan 27 Juli tidak ada sama sekali, bukan bernilai 0. Grafik harian yang dibangun langsung dari hasil ini akan melompati tanggal kosong — di aplikasi nyata, deretan tanggalnya dibuat lebih dulu lalu di-LEFT JOIN ke hasil agregasi."
          },
          "instruction": "Kelompokkan pesanan berdasarkan statusnya dan hitung jumlah masing-masing grup.",
          "starterCode": "-- Tulis query GROUP BY di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+status\\s*,",
              "message": "Sebutkan kolom pengelompokannya lebih dulu di `SELECT`, diikuti koma."
            },
            {
              "pattern": "COUNT\\(\\s*\\*\\s*\\)",
              "message": "Untuk menghitung jumlah baris per kelompok, pakai fungsi pencacah dengan tanda bintang di dalamnya. Memakai nama kolom di dalamnya (`COUNT(kolom)`) akan MENGABAIKAN baris yang kolomnya NULL — angkanya jadi lebih kecil tanpa peringatan."
            },
            {
              "pattern": "GROUP\\s+BY\\s+status",
              "message": "Setiap kolom di `SELECT` yang tidak dibungkus fungsi agregasi WAJIB ikut di `GROUP BY`. PostgreSQL menolak kalau dilanggar; MySQL lama malah menerimanya dan mengembalikan nilai acak."
            }
          ],
          "solution": "SELECT status, COUNT(*) FROM orders GROUP BY status;"
        },
        {
          "kind": "step",
          "id": "sql-3-3",
          "title": "Menyaring Agregat: HAVING vs WHERE",
          "explanation": "`WHERE` dan `HAVING` sama-sama menyaring, tapi pada tahap yang berbeda: `WHERE` menyaring **baris sebelum** dikelompokkan, `HAVING` menyaring **kelompok setelah** agregasi dihitung. Karena itu `HAVING COUNT(*) > 5` sah, sementara `WHERE COUNT(*) > 5` selalu ditolak — saat `WHERE` dievaluasi, hitungannya belum ada. Urutan pengerjaan database yang berguna dihafal: `FROM` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY`. Dipakai untuk pertanyaan seperti \"pelanggan yang total belanjanya di atas 1 juta\" atau \"kategori dengan lebih dari 10 produk\". Jebakan yang paling mahal soal performa: menaruh syarat baris biasa di `HAVING`, misalnya `HAVING status = 'paid'`. Hasilnya benar, tapi database mengelompokkan seluruh tabel dulu lalu membuang sebagian besarnya — pada tabel besar bedanya bisa puluhan kali lipat. Aturan praktisnya: syarat tentang satu baris masuk `WHERE`, syarat tentang hasil hitungan masuk `HAVING`.",
          "example": {
            "code": "SELECT category, COUNT(*) AS jumlah\nFROM products\nWHERE is_active = true\nGROUP BY category\nHAVING COUNT(*) > 2;",
            "output": "  category  | jumlah\n------------+--------\n Minuman    |      6\n Fashion    |      3\n(2 rows)",
            "note": "Dua penyaring dipakai bersamaan dan itu memang cara yang benar: `WHERE` membuang produk nonaktif dulu (murah), `HAVING` baru membuang kategori yang isinya sedikit (setelah dihitung)."
          },
          "instruction": "Query di editor sudah menghitung jumlah pesanan per status. Tambahkan penyaring yang menyisakan hanya status dengan lebih dari 5 pesanan. Perhatikan penyaring ini bekerja pada hasil hitungan, bukan pada baris satu per satu — jadi bukan `WHERE`.",
          "starterCode": "SELECT status, COUNT(*) AS jumlah\nFROM orders\nGROUP BY status\n-- lengkapi di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "HAVING\\s+COUNT\\(\\*\\)\\s*>\\s*5\\s*;?",
              "message": "Tuliskan: HAVING COUNT(*) > 5;"
            }
          ],
          "solution": "SELECT status, COUNT(*) AS jumlah\nFROM orders\nGROUP BY status\nHAVING COUNT(*) > 5;"
        },
        {
          "kind": "step",
          "id": "sql-3-4",
          "title": "Subquery di dalam WHERE",
          "explanation": "**Subquery** adalah query di dalam query. Di posisi `WHERE`, ia dipakai saat ambang pembandingmu harus dihitung dulu dari data — misalnya \"produk yang harganya di atas rata-rata\", karena rata-ratanya baru diketahui setelah tabelnya dibaca. Bentuk yang mengembalikan satu nilai (*scalar subquery*) dipasangkan dengan `>`, `<`, atau `=`; bentuk yang mengembalikan banyak baris wajib dipasangkan dengan `IN`, `ANY`, atau `EXISTS`. Jebakan pertama: memakai `=` pada subquery yang ternyata mengembalikan lebih dari satu baris — database langsung berhenti dengan error \"more than one row returned by a subquery\". Jebakan kedua, yang jauh lebih berbahaya: `NOT IN` menjadi **selalu kosong** kalau subquery-nya memuat satu saja nilai `NULL`, karena perbandingan dengan NULL bernilai \"tidak diketahui\". Untuk kasus itu pakai `NOT EXISTS`. Jebakan ketiga soal performa: subquery yang menyebut kolom dari query luar (*correlated*) dijalankan ulang untuk setiap baris, dan pada tabel besar itu sering lebih baik ditulis ulang sebagai JOIN.",
          "example": {
            "code": "-- subquery yang mengembalikan BANYAK baris → wajib pakai IN\nSELECT name, email\nFROM users\nWHERE id IN (SELECT user_id FROM orders WHERE total > 500000);",
            "output": " name  |     email\n-------+----------------\n Ana   | ana@test.com\n Citra | citra@test.com\n(2 rows)\n\n-- kalau IN diganti '=' pada subquery yang sama:\nERROR:  more than one row returned by a subquery used as an expression",
            "note": "Pilih operatornya berdasarkan jumlah baris yang dikembalikan subquery: satu nilai → `>`/`<`/`=`, banyak nilai → `IN`. Baris ERROR di atas adalah keluaran nyata saat aturan itu dilanggar."
          },
          "instruction": "Ambil produk yang harganya di atas rata-rata harga seluruh produk. Nilai rata-ratanya belum kamu ketahui, jadi harus dihitung di dalam query yang sama sebagai subquery di bagian penyaring.",
          "starterCode": "SELECT name, price\nFROM products\n-- lengkapi penyaringnya di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WHERE\\s+price\\s*>\\s*\\(\\s*SELECT\\s+AVG\\(\\s*price\\s*\\)\\s+FROM\\s+products\\s*\\)",
              "message": "Tuliskan subquery rata-rata harga produk"
            }
          ],
          "solution": "SELECT name, price\nFROM products\nWHERE price > (SELECT AVG(price) FROM products);"
        },
        {
          "kind": "step",
          "id": "sql-3-5",
          "title": "CTE (Common Table Expressions) dengan WITH",
          "explanation": "**CTE** (*Common Table Expression*) adalah hasil query yang diberi nama di awal dengan `WITH nama AS (...)`, lalu dipakai seperti tabel biasa di query utamanya. Fungsinya bukan menambah kemampuan baru — hampir semua CTE bisa ditulis sebagai subquery — melainkan **membuat query panjang bisa dibaca manusia**, karena tiap langkah punya nama. Dipakai saat analisis butuh beberapa tahap: cari dulu pelanggan besar, lalu gabungkan dengan datanya, lalu urutkan. Kelebihan lain: satu CTE bisa dipakai berkali-kali di query yang sama, dan CTE rekursif (`WITH RECURSIVE`) adalah satu-satunya cara wajar menelusuri struktur bertingkat seperti kategori induk-anak berlapis. Jebakan pertama: CTE hanya hidup selama satu perintah — ia bukan tabel sementara, dan tidak bisa dipakai di query berikutnya. Jebakan kedua: setiap CTE wajib dibungkus tanda kurung dan dipisah koma bila lebih dari satu; koma yang tertinggal sebelum `SELECT` utama adalah kesalahan sintaks paling sering di sini.",
          "example": {
            "code": "WITH TopUsers AS (\n  SELECT user_id, COUNT(*) AS jml\n  FROM orders\n  GROUP BY user_id\n  HAVING COUNT(*) > 10\n)\nSELECT u.name, t.jml\nFROM TopUsers t\nJOIN users u ON u.id = t.user_id;",
            "output": " name  | jml\n-------+-----\n Ana   |  14\n Citra |  11\n(2 rows)",
            "note": "Bacalah dari atas: CTE menghasilkan tabel sementara berisi dua baris (user_id, jml), lalu query utama menukar id menjadi nama. Menulis ini sebagai satu query bersarang tetap bisa, tapi jauh lebih sulit ditelusuri saat angkanya salah."
          },
          "instruction": "Query utama di editor sudah mencari user berdasarkan tabel bernama `HighSpenders`, tapi nama itu belum ada. Deklarasikan CTE `HighSpenders` di atas query tersebut, isinya mengambil kolom `user_id` dari tabel `orders`.",
          "starterCode": "-- Tulis deklarasi CTE di atas SELECT di bawah ini:\n\nSELECT * FROM users WHERE id IN (SELECT user_id FROM HighSpenders);\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WITH\\s+HighSpenders\\s+AS\\s*\\(\\s*SELECT\\s+user_id\\s+FROM\\s+orders\\s*\\)",
              "message": "Gunakan sintaks WITH CTE"
            }
          ],
          "solution": "WITH HighSpenders AS (SELECT user_id FROM orders)\nSELECT * FROM users WHERE id IN (SELECT user_id FROM HighSpenders);"
        },
        {
          "kind": "step",
          "id": "sql-3-6",
          "title": "Kategorisasi Data dengan CASE WHEN",
          "explanation": "`CASE WHEN` adalah percabangan di dalam SQL: ia memeriksa kondisi satu per satu dari atas, lalu mengembalikan nilai dari cabang pertama yang benar, dan `ELSE` menangkap sisanya. Dipakai untuk mengubah data mentah menjadi label yang dimengerti manusia (`'Lulus'`/`'Gagal'`, rentang umur, kelas harga) tanpa perlu menambah kolom baru di tabel. Gabungan yang sangat berguna di dunia kerja adalah `SUM(CASE WHEN ... THEN 1 ELSE 0 END)` untuk menghitung bersyarat di dalam satu baris hasil — misalnya jumlah pesanan lunas dan belum lunas berdampingan sebagai dua kolom. Jebakan pertama: urutan kondisi menentukan hasil, sehingga `WHEN score >= 50` yang ditulis sebelum `WHEN score >= 75` membuat cabang kedua tidak pernah tercapai. Jebakan kedua: tanpa `ELSE`, baris yang tidak memenuhi kondisi apa pun bernilai `NULL`, bukan string kosong. Jebakan ketiga: semua cabang harus menghasilkan tipe data yang sepadan — mencampur angka dan teks akan ditolak.",
          "example": {
            "code": "SELECT name,\n  CASE\n    WHEN price >= 500000 THEN 'Premium'\n    WHEN price >= 100000 THEN 'Menengah'\n    ELSE 'Ekonomis'\n  END AS kelas\nFROM products;",
            "output": "   name    |  kelas\n-----------+----------\n Laptop    | Premium\n Headset   | Menengah\n Teh Hijau | Ekonomis\n(3 rows)",
            "note": "Kondisi diperiksa dari atas ke bawah, jadi Laptop berhenti di cabang pertama dan tidak pernah diuji ke cabang kedua. Kalau urutannya dibalik (100000 di atas), semua produk mahal akan salah dilabeli 'Menengah'."
          },
          "instruction": "Tabel `students` punya kolom `score` berisi angka, dan laporan butuh label yang bisa dibaca orang. Tambahkan satu kolom hasil bernama `status` yang bernilai `'Lulus'` bila score minimal 75, dan `'Gagal'` untuk sisanya.",
          "starterCode": "-- Tambahkan kolom hasil bernama status di query ini\nSELECT name, score\nFROM students;\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CASE\\s+WHEN\\s+score\\s*>=\\s*75\\s+THEN\\s+['\"]Lulus['\"]\\s+ELSE\\s+['\"]Gagal['\"]\\s+END",
              "message": "Gunakan ekspresi CASE WHEN sesuai instruksi"
            }
          ],
          "solution": "SELECT name, score,\n  CASE WHEN score >= 75 THEN 'Lulus' ELSE 'Gagal' END AS status\nFROM students;"
        },
        {
          "kind": "step",
          "id": "sql-3-7",
          "title": "Window Function Dasar (ROW_NUMBER)",
          "explanation": "**Window function** menghitung nilai berdasarkan sekumpulan baris lain, tetapi **tanpa memadatkan hasilnya** — berbeda dari `GROUP BY`, semua baris asli tetap muncul dan sebuah kolom hasil perhitungan ditempelkan di sampingnya. `ROW_NUMBER() OVER (ORDER BY ...)` memberi nomor urut, dan menambahkan `PARTITION BY kategori` membuat penomoran dimulai ulang dari 1 di setiap kategori. Dipakai untuk pertanyaan peringkat yang sangat sering muncul di dunia kerja: tiga produk termahal per kategori, pesanan terakhir per pelanggan, atau membuat halaman bernomor. Jebakan pertama: `ROW_NUMBER` selalu memberi nomor unik, bahkan untuk nilai yang seri — kalau nilai seri harus bernomor sama, yang kamu butuhkan `RANK()` atau `DENSE_RANK()`. Jebakan kedua: kolom hasil window function **tidak bisa dipakai di `WHERE`** pada query yang sama, karena ia dihitung setelah penyaringan; bungkus dulu dengan CTE atau subquery lalu saring di luar. Jebakan ketiga: tanpa `ORDER BY` di dalam `OVER()`, urutan nomornya tidak dijamin konsisten.",
          "example": {
            "code": "SELECT name, category, price,\n  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS urutan\nFROM products;",
            "output": "   name    | category   | price  | urutan\n-----------+------------+--------+--------\n Laptop    | Elektronik | 850000 |      1\n Headset   | Elektronik | 120000 |      2\n Kopi Gayo | Minuman    |  85000 |      1\n Teh Hijau | Minuman    |  25000 |      2\n(4 rows)",
            "note": "Nomor kembali ke 1 saat kategori berganti — itu efek PARTITION BY. Untuk mengambil hanya juara tiap kategori, taruh query ini di dalam CTE lalu `WHERE urutan = 1` di luarnya; menyaringnya langsung di sini akan ditolak database."
          },
          "instruction": "Tabel `payments` perlu ditampilkan bernomor urut untuk keperluan halaman bernomor. Tambahkan satu kolom bernama `urutan` yang memberi nomor tiap baris berdasarkan `id` dari kecil ke besar, tanpa mengurangi jumlah baris hasil.",
          "starterCode": "-- Tambahkan kolom penomoran bernama urutan\nSELECT id, amount\nFROM payments;\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ROW_NUMBER\\(\\)\\s+OVER\\s*\\(\\s*ORDER\\s+BY\\s+id\\s+ASC\\s*\\)",
              "message": "Gunakan: ROW_NUMBER() OVER (ORDER BY id ASC)"
            }
          ],
          "solution": "SELECT id, amount,\n  ROW_NUMBER() OVER (ORDER BY id ASC) AS urutan\nFROM payments;"
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
              "explanation": "WHERE bekerja pada baris mentah sebelum dikelompokkan, sementara HAVING bekerja pada hasil kelompok. Karena itu kamu tidak bisa menulis WHERE COUNT(*) > 5 — pada saat WHERE dievaluasi, COUNT belum dihitung. Filter yang tidak melibatkan fungsi agregat sebaiknya tetap ditaruh di WHERE agar barisnya berkurang lebih dulu dan query lebih ringan."
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
              "explanation": "Aturan emas GROUP BY: setiap kolom di SELECT harus berupa kolom pengelompok atau berada di dalam fungsi agregat. Satu kategori berisi banyak produk, jadi database tidak tahu nama mana yang harus ditampilkan. Solusinya: ikutkan nama ke GROUP BY, atau agregasi (misal MIN(nama)). MySQL versi lama menerima query ini dan diam-diam memilih nilai acak — sumber bug yang sulit dilacak."
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
              "explanation": "Window function menghitung nilai per kelompok TANPA meringkas barisnya — setiap transaksi tetap muncul, dengan tambahan kolom peringkat. GROUP BY sebaliknya: ia menciutkan banyak baris menjadi satu per wilayah, sehingga detail transaksinya hilang. Inilah alasan window function jadi materi wajib untuk kerja analitik."
            }
          ]
        }
      ]
    },
    {
      "slug": "dml",
      "title": "Manipulasi Data & Transaksi",
      "description": "INSERT, UPDATE, DELETE — dan jaring pengaman sebelum kamu menghapus data produksi.",
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
          "explanation": "`INSERT INTO ... VALUES` menambahkan baris baru. Menyebutkan daftar kolomnya secara eksplisit (`INSERT INTO users (name, email)`) bukan formalitas: tanpa itu, urutan nilai harus persis sama dengan urutan kolom di tabel, dan begitu ada kolom baru ditambahkan bulan depan, semua query lamamu rusak diam-diam. Satu perintah bisa memasukkan banyak baris sekaligus dengan beberapa kelompok `VALUES` yang dipisah koma, dan itu jauh lebih cepat daripada mengulang perintah satu per satu. Kolom yang punya nilai default (seperti `id` otomatis atau `created_at`) sebaiknya tidak kamu isi sendiri. Jebakan pertama: di SQL, teks dibungkus **petik tunggal**; petik ganda berarti nama kolom, sehingga `INSERT ... VALUES (\"Budi\")` menghasilkan error kolom tidak ditemukan. Jebakan kedua: melanggar constraint `UNIQUE` atau `NOT NULL` membuat seluruh perintah gagal — pada insert banyak baris, tidak ada satu pun baris yang masuk kecuali kamu membungkusnya lain. Jebakan ketiga: menyusun perintah dengan menempel string dari input pengguna membuka pintu SQL injection.",
          "example": {
            "code": "INSERT INTO users (name, email) VALUES\n  ('Budi', 'budi@test.com'),\n  ('Ana',  'ana@test.com');",
            "output": "INSERT 0 2",
            "note": "Angka 2 pada keluaran psql adalah jumlah baris yang benar-benar masuk — biasakan membacanya. Kalau email `budi@test.com` sudah ada dan kolomnya UNIQUE, keluarannya berubah menjadi ERROR dan Ana pun tidak tersimpan."
          },
          "instruction": "Tambahkan data ke tabel categories dengan nama Elektronik.",
          "starterCode": "-- Tulis perintah INSERT di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "INSERT\\s+INTO\\s+categories",
              "message": "Penyisipan baris dimulai dengan `INSERT INTO` diikuti nama tabelnya."
            },
            {
              "pattern": "\\(\\s*name\\s*\\)",
              "message": "Sebutkan daftar kolomnya di dalam tanda kurung. Ini bukan formalitas: tanpa daftar kolom, urutan nilai harus persis sama dengan urutan kolom di tabel, dan query-mu rusak begitu ada kolom baru ditambahkan."
            },
            {
              "pattern": "VALUES\\s*\\(\\s*['\"]Elektronik['\"]\\s*\\)",
              "message": "Nilainya ditulis setelah kata `VALUES` di dalam tanda kurung, dan karena berupa teks ia dibungkus petik tunggal."
            }
          ],
          "solution": "INSERT INTO categories (name) VALUES ('Elektronik');"
        },
        {
          "kind": "step",
          "id": "sql-4-2",
          "title": "UPDATE Data dengan WHERE",
          "explanation": "`UPDATE ... SET` mengubah nilai kolom pada baris yang cocok dengan `WHERE`. Yang wajib kamu tanam sejak sekarang: **`UPDATE` tanpa `WHERE` mengubah SELURUH baris tabel**, tanpa konfirmasi dan tanpa tombol batal. Kebiasaan yang menyelamatkan banyak orang: tulis dulu `SELECT * FROM ... WHERE ...` dengan syarat yang sama, lihat baris mana yang kena, baru ubah kata `SELECT` menjadi `UPDATE`. Di dalam `SET` kamu boleh memakai nilai kolom itu sendiri (`SET stock = stock - 1`), dan itu cara yang benar untuk mengurangi stok karena perhitungannya terjadi di database, bukan di aplikasi. Jebakan pertama: `SET status = 'aktif' WHERE id = 1 AND id = 2` tidak pernah cocok — satu baris tidak bisa punya dua id; yang kamu maksud `IN (1, 2)`. Jebakan kedua: syarat berisi `= NULL` selalu gagal, gunakan `IS NULL`. Jebakan ketiga: pada pekerjaan yang mengubah banyak baris, jalankan di dalam transaksi supaya masih bisa `ROLLBACK`.",
          "example": {
            "code": "-- periksa dulu\nSELECT id, stock FROM products WHERE id = 7;\n\n-- baru ubah\nUPDATE products SET stock = stock - 1 WHERE id = 7;",
            "output": " id | stock\n----+-------\n  7 |    12\n(1 row)\n\nUPDATE 1",
            "note": "`UPDATE 1` berarti tepat satu baris berubah. Kalau yang muncul `UPDATE 5000`, kamu baru saja mengubah seluruh tabel — dan itu momen untuk segera menjalankan ROLLBACK bila kamu berada di dalam transaksi."
          },
          "instruction": "Perbarui price menjadi 20000 untuk tabel products di mana id sama dengan 1.",
          "starterCode": "-- Tulis query UPDATE di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "UPDATE\\s+products\\s+SET\\s+price\\s*=\\s*20000",
              "message": "Pengubahan data memakai `UPDATE <tabel> SET <kolom> = <nilai baru>`."
            },
            {
              "pattern": "WHERE\\s+id\\s*=\\s*1",
              "message": "Wajib ada penyaring `WHERE`. Tanpa itu, SELURUH baris tabel berubah tanpa konfirmasi dan tanpa cara membatalkan — kebiasaan yang aman: jalankan dulu sebagai `SELECT` dengan syarat yang sama untuk melihat baris mana yang akan kena."
            }
          ],
          "solution": "UPDATE products SET price = 20000 WHERE id = 1;"
        },
        {
          "kind": "step",
          "id": "sql-4-3",
          "title": "Menghapus Data: DELETE vs TRUNCATE",
          "explanation": "`DELETE FROM ... WHERE` menghapus baris tertentu dan tetap tercatat sebagai transaksi, sehingga masih bisa dibatalkan dengan `ROLLBACK` selama transaksinya belum di-commit. `TRUNCATE TABLE` mengosongkan seluruh tabel dengan cara berbeda: jauh lebih cepat karena tidak memeriksa baris satu per satu, sekaligus mereset penomoran otomatis, tapi tidak bisa disaring dengan `WHERE` dan tidak memicu trigger. Pilih `DELETE` untuk membuang sebagian data (misalnya log lebih tua dari setahun), `TRUNCATE` hanya untuk mengosongkan tabel sementara atau menyiapkan data uji. Jebakan pertama sama seperti UPDATE: `DELETE FROM users` tanpa `WHERE` mengosongkan seluruh tabel. Jebakan kedua: penghapusan bisa gagal karena masih ada baris anak yang menunjuk ke sana, atau justru **ikut menghapus** baris anak kalau FK-nya `ON DELETE CASCADE` — satu perintah bisa merembet ke beberapa tabel. Jebakan ketiga: di banyak aplikasi nyata, data penting tidak dihapus sungguhan melainkan ditandai (`deleted_at`), karena pesanan yang hilang berarti riwayat keuangan yang hilang.",
          "example": {
            "code": "BEGIN;\nDELETE FROM logs WHERE created_at < '2025-01-01';\n-- ternyata terlalu banyak:\nROLLBACK;",
            "output": "BEGIN\nDELETE 18432\nROLLBACK",
            "note": "Angka 18432 muncul SEBELUM keputusan akhir — itulah gunanya membungkus dengan BEGIN. Dengan TRUNCATE kamu tidak mendapat angka ini, dan pada banyak konfigurasi tidak ada yang bisa dibatalkan."
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
          "explanation": "**Transaksi** mengelompokkan beberapa perintah menjadi satu paket yang berhasil bersama atau gagal bersama. `BEGIN` membukanya, `COMMIT` menyimpan permanen, `ROLLBACK` membatalkan semuanya seolah tidak pernah terjadi. Contoh klasiknya transfer uang: saldo pengirim berkurang dan saldo penerima bertambah harus terjadi bersama-sama — kalau perintah kedua gagal sementara yang pertama sudah tersimpan, uang benar-benar hilang. Dipakai setiap kali satu peristiwa bisnis menyentuh lebih dari satu tabel: pesanan + pengurangan stok + pencatatan pembayaran. Jebakan pertama: lupa `COMMIT` sehingga transaksi menggantung, mengunci baris, dan pengguna lain ikut terhenti menunggu. Jebakan kedua: mengira `ROLLBACK` bisa membatalkan sesuatu yang sudah di-commit — setelah commit, satu-satunya jalan adalah perintah pemulihan baru atau backup. Jebakan ketiga: perintah DDL seperti `TRUNCATE` atau `ALTER TABLE` di MySQL menyebabkan commit implisit, jadi transaksinya tertutup di tengah jalan tanpa kamu minta.",
          "example": {
            "code": "BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 99;\nSELECT balance FROM accounts WHERE id IN (1, 99);\nROLLBACK;",
            "output": "BEGIN\nUPDATE 1\nUPDATE 0        <-- akun 99 tidak ada!\n balance\n---------\n    9900\n(1 row)\nROLLBACK",
            "note": "`UPDATE 0` adalah tanda bahaya: uang keluar dari akun 1 tapi tidak masuk ke mana pun. Karena masih di dalam transaksi, `ROLLBACK` memulihkan saldo ke 10.000. Kalau di sini kamu menulis COMMIT, seratus rupiah itu hilang selamanya."
          },
          "instruction": "Ketikkan perintah untuk membatalkan (rollback) transaksi saat ini.",
          "starterCode": "-- Tulis perintah pembatalan transaksi di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bROLLBACK\\b\\s*;?",
              "message": "Perintah yang kamu cari adalah kebalikan dari `COMMIT`: satu kata yang membuang semua perubahan sejak `BEGIN`. Ia hanya berguna selama transaksi belum di-commit — setelah commit, tidak ada yang bisa dibatalkan lagi."
            },
            {
              "pattern": ";",
              "message": "Akhiri pernyataannya dengan titik koma. Di psql, perintah tanpa titik koma dianggap belum selesai: prompt berubah jadi `db-#` dan seolah tidak terjadi apa-apa."
            }
          ],
          "solution": "ROLLBACK;"
        },
        {
          "kind": "step",
          "id": "sql-4-5",
          "title": "Prinsip Keandalan Transaksi ACID",
          "explanation": "**ACID** adalah empat jaminan yang membuat database relasional layak dipercaya memegang uang. *Atomicity*: satu transaksi berhasil seluruhnya atau gagal seluruhnya. *Consistency*: data selalu meninggalkan transaksi dalam keadaan yang memenuhi semua aturan dan constraint. *Isolation*: transaksi yang berjalan bersamaan tidak saling melihat pekerjaan setengah jadi. *Durability*: begitu `COMMIT` menjawab sukses, datanya bertahan meski server mati sedetik kemudian. Kamu memakai pengetahuan ini saat memutuskan apa yang wajib dibungkus transaksi, dan saat menjawab pertanyaan interview tentang perbedaan SQL dan NoSQL. Jebakan pertama: menganggap isolasi berarti antrean sempurna — pada tingkat isolasi default (`READ COMMITTED` di PostgreSQL), dua transaksi bisa membaca data yang sama lalu saling menimpa hasil hitungan, dan pola `SELECT` lalu `UPDATE` seperti itu perlu `SELECT ... FOR UPDATE`. Jebakan kedua: memindahkan aturan penting ke kode aplikasi saja; constraint di database tetap perlu, karena aplikasi bisa punya banyak versi sedangkan databasenya satu.",
          "example": {
            "code": "BEGIN;\nUPDATE stocks SET qty = qty - 1 WHERE id = 1;\nINSERT INTO order_items (order_id, stock_id) VALUES (55, 1);\nCOMMIT;",
            "output": "BEGIN\nUPDATE 1\nERROR:  insert or update on table \"order_items\" violates foreign key constraint \"order_items_order_id_fkey\"\nROLLBACK\n\n-- qty kembali seperti semula, tidak berkurang",
            "note": "PostgreSQL menandai transaksi yang error sebagai gagal, sehingga `COMMIT` di akhir justru dijalankan sebagai ROLLBACK. Itu Atomicity yang bekerja: stok tidak berkurang untuk pesanan yang tidak pernah ada."
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
          "explanation": "**UPSERT** adalah satu perintah yang menyisipkan baris baru, atau memperbarui yang sudah ada bila terjadi bentrok pada kolom unik. Di PostgreSQL bentuknya `INSERT ... ON CONFLICT (kolom) DO UPDATE SET ...` atau `DO NOTHING`; di MySQL padanannya `INSERT ... ON DUPLICATE KEY UPDATE`. Dipakai untuk sinkronisasi data (impor ulang katalog produk), penyimpanan preferensi pengguna, dan penghitung yang naik bila sudah ada. Alasan memakainya bukan sekadar ringkas: pola \"cek dulu dengan SELECT, kalau tidak ada baru INSERT\" punya celah *race condition* — dua permintaan bersamaan bisa lolos pemeriksaan lalu sama-sama menyisipkan. UPSERT menyerahkan pemeriksaan itu ke database yang memang bisa menjaminnya. Jebakan pertama: `ON CONFLICT` hanya bekerja bila kolom yang disebut benar-benar punya constraint `UNIQUE` atau primary key; tanpa itu, perintahnya ditolak. Jebakan kedua: di dalam `DO UPDATE`, nilai baru diambil dari tabel semu `EXCLUDED` (`SET value = EXCLUDED.value`) — memakai nama kolom biasa berarti menimpa nilai dengan dirinya sendiri.",
          "example": {
            "code": "INSERT INTO settings (key, value) VALUES ('theme', 'dark')\nON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;\n\n-- jalankan dua kali, lalu periksa:\nSELECT * FROM settings WHERE key = 'theme';",
            "output": "INSERT 0 1\nINSERT 0 1\n\n  key  | value\n-------+-------\n theme | dark\n(1 row)",
            "note": "Dijalankan dua kali, barisnya tetap satu — itulah sifat yang dicari (*idempotent*). Tanpa ON CONFLICT, perintah kedua berhenti dengan ERROR duplicate key."
          },
          "instruction": "Skrip impor pengguna dijalankan ulang setiap malam, dan sekarang gagal dengan `duplicate key` begitu menemui email yang sudah ada. Tambahkan klausul PostgreSQL yang membuat bentrok pada kolom `email` dilewati saja tanpa error dan tanpa mengubah baris lama.",
          "starterCode": "-- Skrip impor harian; kalau email sudah ada, jangan error\nINSERT INTO users (name, email) VALUES ('Ana', 'ana@test.com')\n-- lengkapi di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ON\\s+CONFLICT\\s*\\(\\s*email\\s*\\)\\s+DO\\s+NOTHING\\s*;?",
              "message": "Gunakan: ON CONFLICT (email) DO NOTHING;"
            }
          ],
          "solution": "INSERT INTO users (name, email) VALUES ('Ana', 'ana@test.com')\nON CONFLICT (email) DO NOTHING;"
        },
        {
          "kind": "step",
          "id": "sql-4-7",
          "title": "Klausul RETURNING di PostgreSQL",
          "explanation": "`RETURNING` membuat perintah `INSERT`, `UPDATE`, atau `DELETE` mengembalikan baris hasilnya, bukan hanya jumlah baris yang terkena. Ini fitur PostgreSQL (juga ada di SQLite dan MariaDB modern, tapi tidak di MySQL). Kegunaan utamanya: mendapatkan nilai yang baru dibuat database — `id` otomatis, `created_at` default, atau hasil trigger — dalam **satu** perjalanan ke server, tanpa perlu `SELECT` menyusul. Ini penting karena `SELECT` menyusul rawan salah: pada sistem yang sibuk, baris yang kamu ambil bisa saja baris orang lain. Dipakai di hampir semua endpoint API yang membuat data lalu harus mengembalikan objek yang baru dibuat ke klien. Jebakan pertama: `RETURNING *` mengembalikan **semua** kolom, termasuk `password_hash` — sebutkan kolomnya secara eksplisit untuk data sensitif. Jebakan kedua: pada `DELETE ... RETURNING`, data yang kamu terima sudah tidak ada lagi di tabel; kalau ingin menyimpannya, tampung di tabel arsip pada perintah yang sama. Jebakan ketiga: kode yang mengandalkan `RETURNING` tidak bisa langsung dipindahkan ke MySQL.",
          "example": {
            "code": "INSERT INTO users (name) VALUES ('Budi') RETURNING id, created_at;",
            "output": " id |          created_at\n----+-------------------------------\n 42 | 2026-07-28 09:14:22.881+07\n(1 row)\nINSERT 0 1",
            "note": "Nilai 42 dan waktunya dibuat oleh database, bukan oleh aplikasimu — dan hanya lewat RETURNING kamu mengetahuinya tanpa query tambahan."
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
              "explanation": "ROLLBACK mengembalikan kondisi database seperti sebelum transaksi dimulai. Selama belum COMMIT, perubahanmu hanya terlihat di sesi sendiri — inilah jaring pengaman saat kamu menjalankan UPDATE besar di production."
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
                "Atomicity — seluruh transaksi dianggap satu kesatuan, gagal sebagian berarti dibatalkan semua",
                "Consistency — data selalu konsisten antar server",
                "Isolation — transaksi lain tidak melihat perubahan yang belum di-commit",
                "Durability — data tetap tersimpan setelah listrik mati"
              ],
              "answerIndex": 0,
              "explanation": "Atomicity berarti transaksi bersifat semua-atau-tidak-sama-sekali: karena COMMIT belum sempat dijalankan, potongan saldo A otomatis dibatalkan saat database pulih. Isolation dan Durability juga sifat ACID, tapi keduanya menjawab pertanyaan berbeda — siapa yang boleh melihat perubahan, dan apakah data bertahan setelah di-commit."
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
        "Normalisasi 1NF–3NF dengan contoh nyata (bukan definisi hafalan)",
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
          "body": "# Desain Skema Database, Normalisasi & Performa Indexing\n\nModul ini mempelajari dasar perancangan struktur tabel yang rapi (Normalisasi) serta teknik mempercepat pencarian data dengan Index.\n\n## 1. Pengertian Desain Skema & Normalisasi\n\nDesain skema adalah cetak biru (blueprint) arsitektur database. Desain yang buruk membuat data duplikat, tidak konsisten, dan sulit diperbaiki. Untuk menghindarinya, kita menerapkan proses **Normalisasi**:\n\n- **1NF (First Normal Form):** Setiap kolom wajib berisi nilai atomik (tunggal, tidak ada daftar terpisah koma dalam satu kolom).\n- **2NF (Second Normal Form):** Sudah 1NF dan seluruh kolom non-kunci bergantung penuh pada Primary Key.\n- **3NF (Third Normal Form):** Sudah 2NF dan tidak ada ketergantungan transitif (kolom non-kunci tidak boleh bergantung pada kolom non-kunci lainnya).\n\n---\n\n## 2. Mengenal B-Tree Index (Akselerator Kueri)\n\nSecara bawaan, jika kamu mencari data dengan `WHERE email = 'bimo@bilearn.id'`, database harus melakukan **Full Table Scan** (memeriksa setiap baris dari atas ke bawah). Jika tabel ber-isi 10 juta baris, pencarian ini butuh waktu beberapa detik.\n\nDengan menambahkan **Index (B-Tree)** pada kolom `email`, database membuat struktur data pohon seimbang (Balanced Tree) di mana pencarian berubah dari **O(N)** menjadi **O(log N)** — pencarian 10 juta baris selesai dalam orde milidetik!\n\n```text\n               [ Root Node: M ]\n              /                      [ Leaf Node: A - L ]     [ Leaf Node: N - Z ]\n      /                  \\     /                    (Ahmad)             (Bimo) (Siti)             (Zack)\n```\n\n| Penggunaan Index | Dampak Positif | Dampak Negatif / Kerugian |\n|---|---|---|\n| Pada Kueri `SELECT` | Mempercepat pencarian data berlipat ganda | Tidak ada |\n| Pada `INSERT` / `UPDATE` | Tidak ada | Memperlambat penulisan karena indeks harus diurutkan ulang |\n| Konsumsi Penyimpanan | Tidak ada | Memakan ruang disk (RAM & Storage) tambahan |\n\n---\n\n## 3. Analogi Dunia Nyata: Indeks Halaman Belakang Buku\n\nBayangkan sebuah buku tebal ber-isi 1.000 halaman:\n- Tanpa indeks: Kamu harus membaca lembar demi lembar dari halaman 1 sampai menemukan kata \"PostgreSQL\" (**Full Table Scan**).\n- Dengan indeks: Kamu buka lembar indeks di belakang buku, menemukan kata \"PostgreSQL -> Hal 452\", dan langsung membuka halaman tersebut (**Index Scan**).\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **Indexing Semua Kolom (Over-Indexing):** Mengindeks setiap kolom tabel secara asal-asalan akan membuat operasi `INSERT`, `UPDATE`, dan `DELETE` menjadi sangat lambat karena mesin database harus memperbarui banyak B-Tree sekaligus.\n2. **Salah Memilih Tipe Data:** Menggunakan `VARCHAR(255)` untuk menyimpan angka umur atau status bernilai 0/1 memboroskan memori RAM secara signifikan.\n3. **Mengabaikan Foreign Key Constraints:** Lupa menambahkan constraint `FOREIGN KEY ... ON DELETE CASCADE` membuat database kamu dipenuhi oleh \"Data Yatim Piatu\" (Orphan Rows) — baris transaksi yang pemiliknya sudah dihapus dari tabel users.\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Saat merancang aplikasi baru dari nol, melakukan migrasi skema, dan melakukan perbaikan performa (Performance Tuning) pada query yang lambat di produksi.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan arsitektur utama: *\"Bagaimana struktur B-Tree Index bekerja dan mengapa indeks tidak selalu mempercepat kueri?\"*\n- Senior DBA & Tech Lead di code review akan mengevaluasi rancangan skema ERD kamu sebelum diizinkan rilis ke produksi."
        },
        {
          "kind": "step",
          "id": "sql-5-1",
          "title": "Normalisasi Database (1NF, 2NF, 3NF)",
          "explanation": "**Normalisasi** adalah menata tabel agar setiap fakta disimpan tepat satu kali. Ringkasnya: 1NF berarti satu sel berisi satu nilai (bukan `\"merah,biru,hijau\"`), 2NF berarti setiap kolom bergantung pada seluruh primary key, dan 3NF berarti tidak ada kolom yang bergantung pada kolom non-kunci lain (nama kategori tidak ikut ditulis di tabel produk, cukup `category_id`). Tujuannya sangat praktis: kalau nama kategori tersimpan di 5.000 baris produk, mengganti satu nama berarti 5.000 baris yang bisa gagal sebagian dan meninggalkan data campur aduk. Dipakai saat merancang tabel baru, dan menjadi pertanyaan interview yang hampir pasti muncul. Jebakan pertama: memecah tabel berlebihan sampai query paling sederhana butuh lima JOIN — normalisasi adalah alat, bukan lomba. Jebakan kedua: menyimpan data hasil hitungan (`total_harga`) sebagai kolom biasa tanpa mekanisme pembaruan, sehingga angkanya cepat basi. Jebakan ketiga: memakai data yang bisa berubah (email, nomor telepon) sebagai primary key.",
          "example": {
            "code": "-- ❌ satu tabel, nama departemen berulang di setiap baris\n-- employees(id, name, dept_name, dept_lokasi)\n\n-- ✅ dipecah, nama departemen hanya ada satu tempat\nCREATE TABLE departments (\n  dept_id INT PRIMARY KEY,\n  dept_name VARCHAR(50),\n  dept_lokasi VARCHAR(50)\n);",
            "output": "CREATE TABLE\n\n-- ganti nama departemen sesudah normalisasi:\nUPDATE departments SET dept_name = 'Teknologi' WHERE dept_id = 3;\nUPDATE 1        <-- satu baris saja\n\n-- sebelum normalisasi, perubahan yang sama:\nUPDATE 214      <-- 214 baris, dan cukup satu yang luput untuk merusak laporan",
            "note": "Angka 1 lawan 214 itulah inti normalisasi. Bukan soal keindahan skema, tapi soal berapa banyak tempat yang harus benar setiap kali satu fakta berubah."
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
          "explanation": "**Denormalisasi** adalah keputusan sadar untuk menduplikasi data demi kecepatan baca — misalnya menyimpan `customer_name` langsung di tabel pesanan supaya laporan tidak perlu JOIN. Ini kebalikan dari normalisasi, dan hanya masuk akal setelah ada bukti bahwa JOIN-nya memang menjadi hambatan: tabel laporan yang dibaca ribuan kali per menit, dasbor analitik, atau data historis yang memang **harus** membeku (nama dan harga pada struk lama tidak boleh ikut berubah saat produknya di-rename). Kamu memakainya di tabel pelaporan, bukan di tabel transaksi utama. Jebakan pertama: dua sumber kebenaran yang lupa disinkronkan, sehingga nama di pesanan berbeda dengan nama di profil pengguna — dan tidak ada yang tahu mana yang benar. Jebakan kedua: mendenormalisasi sejak awal \"supaya cepat\" tanpa mengukur; biaya perawatannya nyata, keuntungannya belum. Jebakan ketiga: lupa mencatat bahwa kolom itu salinan, sehingga developer berikutnya memperbaruinya di satu tempat saja.",
          "example": {
            "code": "SELECT order_id, customer_name, total_price\nFROM denormalized_orders\nWHERE status = 'PAID';",
            "output": " order_id | customer_name | total_price\n----------+---------------+-------------\n     1001 | Ana Rahma     |      150000\n     1002 | Budi Santoso  |       75000\n(2 rows)\nTime: 1.902 ms\n\n-- versi normal (JOIN ke customers) pada data yang sama:\nTime: 12.431 ms",
            "note": "Selisih waktunya nyata tapi kecil pada data kecil; ia baru berarti pada jutaan baris. Perhatikan juga `customer_name` di sini adalah salinan — kalau Ana mengganti namanya, struk lama tetap menyebut nama lama, dan untuk dokumen keuangan itu justru yang diinginkan."
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
          "explanation": "**ERD** (*Entity Relationship Diagram*) adalah gambar yang menunjukkan tabel apa saja yang ada, kolom kuncinya, dan bagaimana mereka berhubungan — satu-ke-banyak, banyak-ke-banyak, atau satu-ke-satu. Gunanya bukan dekorasi dokumen: menggambar relasi lebih dulu adalah cara termurah menemukan kesalahan desain, karena mengubah garis di diagram jauh lebih ringan daripada memindahkan satu juta baris data. Notasi *crow's foot* (kaki gagak) adalah yang paling umum: garis bercabang tiga di ujung berarti \"banyak\". Dipakai saat memulai proyek, saat menjelaskan sistem ke anggota tim baru, dan sering diminta langsung di sesi interview (\"gambarkan skema untuk aplikasi pemesanan tiket\"). Jebakan pertama: menggambar relasi banyak-ke-banyak sebagai garis langsung tanpa junction table — di database, relasi itu tidak bisa diwujudkan tanpa tabel perantara. Jebakan kedua: ERD yang tidak pernah diperbarui setelah skema berubah; diagram yang salah lebih berbahaya daripada tidak ada diagram. Jebakan ketiga: lupa menandai kolom mana yang boleh `NULL`, padahal itu yang menentukan pilihan `INNER` atau `LEFT JOIN` nanti.",
          "example": {
            "code": "-- posts 1 --- N comments\n--\n--   posts                comments\n--  +--------+          +------------+\n--  | id (PK)|<--------o| post_id(FK)|\n--  | title  |          | id (PK)    |\n--  +--------+          +------------+\n\nCREATE TABLE comments (\n  id INT PRIMARY KEY,\n  post_id INT,\n  FOREIGN KEY (post_id) REFERENCES posts(id)\n);",
            "output": "CREATE TABLE\n\n-- diagram di atas terwujud sebagai constraint nyata:\n\\d comments\n  Column  |  Type   | Nullable\n----------+---------+----------\n id       | integer | not null\n post_id  | integer |\nForeign-key constraints:\n    \"comments_post_id_fkey\" FOREIGN KEY (post_id) REFERENCES posts(id)",
            "note": "Perintah `\\d nama_tabel` di psql adalah cara memeriksa apakah skema nyata benar-benar sesuai diagram. Kolom `post_id` di sini masih boleh NULL — kalau setiap komentar wajib punya post, tambahkan `NOT NULL`."
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
          "explanation": "**Constraint** adalah aturan yang dijaga oleh database itu sendiri. `NOT NULL` melarang kolom dibiarkan kosong, `UNIQUE` melarang nilai kembar, `CHECK` melarang nilai yang tidak masuk akal (`CHECK (balance >= 0)`), dan `DEFAULT` mengisi nilai bila tidak disebutkan. Kenapa tidak cukup divalidasi di aplikasi? Karena aplikasi bisa punya banyak pintu masuk — API versi lama, skrip impor, perbaikan manual lewat terminal — sementara databasenya hanya satu. Constraint adalah jaring terakhir yang tidak bisa dilewati siapa pun. Dipakai sejak `CREATE TABLE`, dan menambahkannya belakangan pada tabel yang sudah berisi data kotor akan gagal sampai datanya dibersihkan lebih dulu — itu sendiri sudah menjadi alasan memasangnya sedini mungkin. Jebakan pertama: `UNIQUE` memperlakukan `NULL` sebagai \"tidak diketahui\", sehingga beberapa baris ber-`NULL` tetap diizinkan; kalau kolomnya wajib unik, pasangkan dengan `NOT NULL`. Jebakan kedua: pesan error constraint biasanya bocor ke pengguna dalam bentuk teknis — tangkap di aplikasi dan terjemahkan menjadi pesan yang manusiawi.",
          "example": {
            "code": "CREATE TABLE products (\n  id SERIAL PRIMARY KEY,\n  sku VARCHAR(50) UNIQUE NOT NULL,\n  price INT CHECK (price >= 0)\n);\n\nINSERT INTO products (sku, price) VALUES ('KOPI-01', -5000);",
            "output": "CREATE TABLE\n\nERROR:  new row for relation \"products\" violates check constraint \"products_price_check\"\nDETAIL:  Failing row contains (1, KOPI-01, -5000).",
            "note": "Harga negatif ditolak di lapisan paling dalam, jadi bug di form manapun tidak bisa menyelundupkannya. Perhatikan nama constraint `products_price_check` pada pesan error — nama itulah yang kamu pakai di kode aplikasi untuk mengenali pelanggaran dan menampilkan pesan yang ramah."
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
              "pattern": "CREATE\\s+INDEX\\s+idx_orders_user_id",
              "message": "Pembuatan index diawali `CREATE INDEX` diikuti NAMA index-nya. Nama itu bukan hiasan: ia yang muncul di `EXPLAIN` dan yang kamu pakai saat menghapusnya nanti."
            },
            {
              "pattern": "ON\\s+orders\\s*\\(\\s*user_id\\s*\\)",
              "message": "Sebutkan tabel dan kolomnya dengan pola `ON <tabel>(<kolom>)`. Untuk kolom foreign key seperti ini, index hampir selalu berbayar karena ia yang dipakai setiap JOIN."
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
            "code": "CREATE INDEX idx_user_email ON users(email);\n\n-- lalu ukur dampaknya pada tulis:\nINSERT INTO users (name, email) VALUES ('Ana', 'ana@test.com');",
            "output": "CREATE INDEX\nTime: 128.402 ms\n\nINSERT 0 1\nTime: 1.740 ms      <-- tabel dengan 1 index\nTime: 4.902 ms      <-- tabel yang sama dengan 6 index",
            "note": "Setiap index harus ikut diperbarui pada setiap INSERT, UPDATE, dan DELETE. Itu sebabnya \"tambahkan index pada semua kolom\" adalah saran yang salah: baca menjadi cepat, tulis menjadi lambat."
          },
          "instruction": "Buat index dengan nama `idx_order_status` pada kolom `status` di tabel `orders`.",
          "starterCode": "-- Tulis query pembuatan index di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+INDEX\\s+idx_order_status",
              "message": "Awali dengan `CREATE INDEX` lalu nama index sesuai konvensi tim (`idx_<tabel>_<kolom>`)."
            },
            {
              "pattern": "ON\\s+orders\\s*\\(\\s*status\\s*\\)",
              "message": "Sebutkan tabel dan kolomnya: `ON <tabel>(<kolom>)`. Catatan penting untuk kolom seperti `status` yang isinya cuma beberapa nilai berbeda — index di sini sering TIDAK dipakai optimizer, dan itu justru pelajaran modul ini."
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
            "output": "Index Scan using idx_users_email on users  (cost=0.28..8.30 rows=1 width=72)\n                                          (actual time=0.041..0.043 rows=1 loops=1)\n  Index Cond: (email = 'budi@test.com'::text)\nPlanning Time: 0.132 ms\nExecution Time: 0.071 ms\n\n-- tanpa index pada kolom email:\nSeq Scan on users  (cost=0.00..1834.00 rows=1 width=72)\n                   (actual time=12.884..38.201 rows=1 loops=1)\nExecution Time: 38.244 ms",
            "note": "Dua kata yang wajib kamu cari: `Seq Scan` berarti seluruh tabel dibaca satu per satu, `Index Scan` berarti index dipakai. Bandingkan juga `rows=` perkiraan dengan `rows=` aktual — selisih jauh menandakan statistik tabel sudah basi (`ANALYZE` perlu dijalankan)."
          },
          "instruction": "Ketikkan EXPLAIN ANALYZE sebelum query SELECT seluruh data dari products.",
          "starterCode": "-- Tulis EXPLAIN ANALYZE di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "EXPLAIN\\s+ANALYZE",
              "message": "Untuk melihat rencana eksekusi SEKALIGUS waktu nyatanya, tambahkan dua kata kunci di depan query. Tanpa kata kedua, query tidak benar-benar dijalankan dan kamu hanya melihat perkiraan."
            },
            {
              "pattern": "SELECT\\s+\\*\\s+FROM\\s+products",
              "message": "Query yang dianalisis ditulis apa adanya setelah kedua kata kunci itu — tidak perlu tanda kurung."
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
                "1NF — karena ada kolom bertipe teks",
                "3NF — kota_nama dan kota_provinsi bergantung pada kota_id, bukan pada primary key pesanan, sehingga data kota terduplikasi dan bisa tidak sinkron",
                "Tidak melanggar apa pun",
                "2NF — karena tabel punya lebih dari tiga kolom"
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
              "explanation": "Constraint UNIQUE membuat database sendiri menolak baris kedua dengan email sama, apa pun jalur masuknya — form, API, atau query manual. Validasi aplikasi tetap perlu demi pesan error yang ramah, tapi ia bisa dilewati dan punya celah race condition. Index biasa hanya mempercepat pencarian tanpa mencegah duplikat."
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
              "explanation": "Index menyimpan nilai kolom apa adanya dalam keadaan terurut. Begitu kolom dibungkus fungsi, nilai yang dicari tidak lagi cocok dengan yang tersimpan di index sehingga database terpaksa memindai seluruh tabel. Perbaikannya: ubah menjadi rentang — created_at >= '2026-01-01' AND created_at < '2027-01-01' — atau buat expression index khusus."
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
      "description": "Database #1 pilihan developer dunia (58% pemakaian) — fitur yang membuatnya dipilih untuk stack modern.",
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
              "pattern": "psql\\s",
              "message": "Program CLI resmi PostgreSQL adalah `psql`. Ini dijalankan di terminal, bukan di dalam database."
            },
            {
              "pattern": "-U\\s+admin_user",
              "message": "Nama pengguna diberikan lewat flag `-U` (huruf besar). Tanpa itu, psql memakai nama pengguna sistem operasimu dan biasanya gagal autentikasi."
            },
            {
              "pattern": "-d\\s+aplikasi_db",
              "message": "Nama database diberikan lewat flag `-d`. Kalau dilewatkan, psql mencoba menyambung ke database yang bernama sama dengan usernya."
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
              "pattern": "payload->>'name'",
              "message": "Untuk mengambil nilai JSONB sebagai TEKS biasa, pakai operator dua tanda lebih besar (`->>`). Operator satu tanda (`->`) mengembalikan JSON, sehingga hasilnya masih berkutip dan perbandingan teks jadi gagal."
            },
            {
              "pattern": "FROM\\s+logs",
              "message": "Tambahkan tabel sumbernya dengan `FROM`."
            },
            {
              "pattern": "WHERE\\s+payload->>'role'\\s*=\\s*'admin'",
              "message": "Penyaringnya juga membandingkan hasil `->>` dengan teks berpetik tunggal. Di SQL, petik ganda berarti nama kolom — memakainya di sini membuat query gagal."
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
          "instruction": "Tabel `articles` punya kolom teks panjang `body`. Tambahkan penyaring pencarian teks penuh PostgreSQL yang mengubah `body` menjadi bentuk terindeks, lalu mencocokkannya dengan kata pencarian `database` memakai operator pencocokan khusus milik full-text search.",
          "starterCode": "SELECT title\nFROM articles\n-- lengkapi penyaringnya di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WHERE\\s+to_tsvector\\(\\s*body\\s*\\)\\s*@@\\s*to_tsquery\\(\\s*['\"]database['\"]\\s*\\)",
              "message": "Gunakan operator @@ to_tsquery('database')"
            }
          ],
          "solution": "SELECT title\nFROM articles\nWHERE to_tsvector(body) @@ to_tsquery('database');"
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
              "pattern": "GRANT\\s+SELECT\\s*,\\s*INSERT|GRANT\\s+INSERT\\s*,\\s*SELECT",
              "message": "Pemberian hak akses memakai `GRANT` diikuti daftar hak yang dipisah koma. Berikan hanya yang dibutuhkan — prinsip *least privilege* inilah yang ditanyakan saat audit keamanan."
            },
            {
              "pattern": "ON\\s+orders",
              "message": "Sebutkan objek yang diberi hak dengan `ON` diikuti nama tabel."
            },
            {
              "pattern": "TO\\s+app_reporter",
              "message": "Penerima haknya disebut dengan `TO` diikuti nama role. Untuk mencabutnya nanti, perintahnya `REVOKE ... FROM ...`."
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
              "explanation": "SERIAL masih bekerja, tapi ia hanya gula sintaks lama yang membuat sequence terpisah dan tetap mengizinkan aplikasi menyisipkan id manual. Kalau itu terjadi, sequence tertinggal dan INSERT berikutnya gagal karena id-nya bentrok — jebakan yang sering muncul setelah restore data. GENERATED ALWAYS AS IDENTITY adalah bentuk standar SQL yang menutup celah itu."
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
              "explanation": "RLS memasang aturan penyaringan di tabel itu sendiri, sehingga siapa pun yang mengakses — termasuk lewat psql atau tool BI — otomatis hanya melihat baris yang diizinkan. Mengandalkan WHERE di aplikasi tetap perlu, tapi satu query yang lupa filter langsung membocorkan data tenant lain. Index hanya soal kecepatan, bukan keamanan."
            }
          ]
        }
      ]
    },
    {
      "slug": "mysql",
      "title": "MySQL: Fundamental",
      "description": "Pasangan setia Laravel dan mayoritas hosting Indonesia — jalur tercepat ke pekerjaan lokal.",
      "topics": [
        "Instalasi & mysql CLI: SHOW DATABASES, SHOW TABLES, DESCRIBE",
        "MySQL vs MariaDB: apa bedanya dan kenapa hosting sering memakai MariaDB",
        "Storage engine InnoDB (dan kenapa MyISAM ditinggalkan)",
        "AUTO_INCREMENT: perilaku setelah DELETE dan setelah restart",
        "Charset utf8mb4 & collation — jebakan emoji dan urutan sortir",
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
          "body": "# Pengenalan & Fitur Khusus MySQL\n\nMySQL (dan varian fork-nya MariaDB) adalah mesin database relasional paling populer di dunia web hosting dan ekosistem PHP/Laravel.\n\n## 1. Pengenalan CLI `mysql` & Storage Engine\n\nMySQL mendukung arsitektur **Storage Engine** modular di mana setiap tabel bisa menggunakan mesin penyimpanan berbeda.\n\n### Storage Engine Utama:\n- **InnoDB (Default & Wajib):** Mendukung Transaksi ACID, Foreign Key Constraints, dan Row-Level Locking.\n- **MyISAM (Legacy):** Mesin lama tanpa transaksi dan hanya Table-Level Locking. Jangan pernah gunakan MyISAM untuk aplikasi produksi modern!\n\n### Perintah Penting CLI `mysql`:\n- `SHOW DATABASES;`: Menampilkan daftar database.\n- `USE nama_database;`: Memilih database aktif.\n- `SHOW TABLES;`: Menampilkan daftar tabel.\n- `DESCRIBE nama_tabel;`: Menampilkan struktur detail kolom tabel.\n\n---\n\n## 2. Magnet Bug Pemula: Charset `utf8` vs `utf8mb4`\n\nIni adalah jebakan paling berbahaya di MySQL!\n- **`utf8` di MySQL (Legacy):** Hanya mendukung maksimal 3 bytes per karakter. Menimpan emoji (seperti 😀 atau 🚀) atau karakter Mandarin akan melempar error `Incorrect string value`.\n- **`utf8mb4` (Full Unicode):** Mendukung 4 bytes per karakter secara utuh. Gunakan selalu `utf8mb4` dan collation `utf8mb4_unicode_ci` atau `utf8mb4_0900_ai_ci`.\n\n```text\n+--------------------------------------------------------------------------+\n|                  PERBEDAAN TIPE TANGGAL PADA MYSQL                       |\n+---------------------+-----------------------+----------------------------+\n| Tipe Data           | Rentang Tahun         | Penyimpanan & Timezone     |\n+---------------------+-----------------------+----------------------------+\n| DATETIME            | 1000-01-01 s/d 9999   | 8 Bytes, Statis (No TZ)    |\n| TIMESTAMP           | 1970-01-01 s/d 2038   | 4 Bytes, Auto-convert UTC  |\n+---------------------+-----------------------+----------------------------+\n```\n\n---\n\n## 3. AUTO_INCREMENT & `LAST_INSERT_ID()`\n\nMySQL menggunakan kata kunci `AUTO_INCREMENT` untuk menghasilkan nomor ID numerik berurutan secara otomatis. Untuk mengambil nilai ID yang baru saja dihasilkan oleh kueri `INSERT` di sesi yang sama, panggil fungsi `LAST_INSERT_ID()`.\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **Gagal Menyimpan Emoji akibat Charset `utf8`:** Banyak aplikasi terhenti crash saat pengguna menginput emoji pada komentar karena tabel MySQL lama masih diset ke charset `utf8` 3-byte.\n2. **Masalah Tahun 2038 pada `TIMESTAMP`:** Tipe `TIMESTAMP` berbasis integer 32-bit akan mengalami overflow (masalah Year 2038) pada tanggal 19 Januari 2038. Pertimbangkan menggunakan `DATETIME` untuk rentang waktu jauh di masa depan.\n3. **Mengabaikan `sql_mode` Strict:** Di MySQL versi lama tanpa `STRICT_TRANS_TABLES`, menginput string panjang ke kolom pendek akan memotong teks secara diam-diam (truncate warning) tanpa melempar Error!\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Aplikasi berbasis WordPress, Laravel, Symfony, E-Commerce Magento, dan berbagai layanan web hosting murah / shared hosting.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan interview klasik: *\"Mengapa kita wajib menggunakan storage engine InnoDB dibanding MyISAM, dan apa beda `DATETIME` dengan `TIMESTAMP`?\"*\n- Di code review backend Laravel, Tech Lead akan memastikan konfigurasi database kamu sudah menggunakan `utf8mb4` di `config/database.php`."
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
              "message": "Storage engine ditentukan dengan `ENGINE=` diikuti namanya. Pilih engine yang mendukung transaksi dan foreign key — MyISAM menerima sintaks FK tapi mengabaikannya diam-diam, dan itu sumber data rusak yang sulit dilacak."
            }
          ],
          "solution": "ENGINE=InnoDB"
        },
        {
          "kind": "step",
          "id": "sql-7-2",
          "title": "Charset utf8mb4 untuk Dukungan Emoji Full",
          "explanation": "Set pengodean karakter `utf8mb4` di MySQL adalah satu-satunya charset yang mendukung seluruh karakter Unicode 4-byte termasuk emoji (😀), simbol khusus, dan karakter bahasa asing. Kebiasaan menggunakan charset `utf8` lama di MySQL sangat berbahaya karena hanya mendukung 3-byte per karakter, sehingga menginput emoji akan melempar Error fatal. Pengaturan charset `utf8mb4` wajib dikonfigurasi saat membuat database dan tabel baru pada aplikasi web modern. Jebakan yang sering membingungkan adalah aplikasi crash saat pengguna memasukkan emoji di kolom komentar akibat tabel masih ber-charset `utf8`.",
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
              "pattern": "ALTER\\s+TABLE\\s+comments",
              "message": "Perubahan struktur tabel memakai `ALTER TABLE` diikuti nama tabelnya."
            },
            {
              "pattern": "CHARACTER\\s+SET\\s*=?\\s*utf8mb4",
              "message": "Sebutkan charset barunya dengan `CHARACTER SET`. Pakai varian 4-byte, bukan `utf8` biasa — di MySQL, `utf8` hanya menampung 3 byte sehingga emoji tersimpan sebagai `???` dan datanya tidak bisa dipulihkan."
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
              "pattern": "SELECT\\s+LAST_INSERT_ID\\(\\s*\\)",
              "message": "Fungsi MySQL yang mengembalikan ID auto-increment terakhir dipanggil lewat `SELECT` dengan tanda kurung kosong. Nilainya bersifat **per koneksi**, jadi aman dipakai bersamaan oleh banyak pengguna — tapi berhenti akurat kalau kamu menyisipkan banyak baris sekaligus."
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
              "pattern": "created_at\\s+TIMESTAMP",
              "message": "Definisi kolom dimulai dari namanya, lalu tipe datanya. Untuk waktu yang ikut zona waktu server, pakai `TIMESTAMP` (rentangnya sampai 2038) — `DATETIME` menyimpan waktu apa adanya tanpa konversi zona."
            },
            {
              "pattern": "DEFAULT\\s+CURRENT_TIMESTAMP",
              "message": "Nilai otomatis diberikan lewat `DEFAULT` diikuti fungsi waktu sekarang, tanpa tanda kurung di MySQL. Dengan ini kolomnya terisi sendiri dan aplikasimu tidak perlu mengirim waktu."
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
                "Karena charset utf8 lama di MySQL tidak mendukung karakter 4-byte seperti Emoji (😊)",
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
              "explanation": "TIMESTAMP sadar zona waktu: nilainya disimpan sebagai UTC lalu dikonversi mengikuti pengaturan koneksi, sehingga cocok untuk mencatat kapan sesuatu terjadi. DATETIME menyimpan angka jam apa adanya — tepat untuk hal yang memang tidak boleh bergeser seperti jadwal acara lokal. Salah pilih membuat catatan waktu meleset berjam-jam saat server dan pengguna beda zona."
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
              "explanation": "MySQL non-strict berusaha 'menolong' dengan memotong string yang kepanjangan dan menerima tanggal nol, lalu hanya mencatat warning — data rusak masuk tanpa disadari. MySQL 8 mengaktifkan STRICT_TRANS_TABLES secara default sehingga query semacam itu ditolak. Saat memindahkan aplikasi dari hosting lama, perbedaan sql_mode inilah yang sering memunculkan error yang sebelumnya tidak pernah terlihat."
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
              "pattern": "EXPLAIN\\s+ANALYZE",
              "message": "Awali dengan dua kata kunci: yang pertama menampilkan rencana, yang kedua benar-benar menjalankan query dan mencatat waktu nyatanya."
            },
            {
              "pattern": "FROM\\s+orders\\s+WHERE\\s+status\\s*=\\s*['\"]pending['\"]",
              "message": "Tulis query yang dianalisis apa adanya: dari tabel pesanan, disaring pada kolom status bernilai teks `pending`."
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
              "pattern": "CREATE\\s+INDEX\\s+idx_pending_orders",
              "message": "Awali `CREATE INDEX` diikuti nama index-nya."
            },
            {
              "pattern": "ON\\s+orders\\s*\\(\\s*user_id\\s*\\)",
              "message": "Sebutkan tabel dan kolom yang diindeks dengan pola `ON <tabel>(<kolom>)`."
            },
            {
              "pattern": "WHERE\\s+status\\s*=\\s*['\"]pending['\"]",
              "message": "Yang membuatnya *partial* adalah klausa `WHERE` di AKHIR definisi index — hanya baris yang memenuhi syarat itu yang diindeks, sehingga index-nya kecil dan cepat. Syarat ini harus cocok dengan query aplikasimu, kalau tidak optimizer tidak akan memakainya."
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
              "pattern": "VACUUM\\s+FULL\\s+logs",
              "message": "Pembersihan baris mati memakai `VACUUM`, dan varian `FULL` yang benar-benar mengembalikan ruang ke sistem operasi. Perhatikan: `VACUUM FULL` **mengunci tabel** sepanjang prosesnya, jadi di produksi ia dijalankan pada jam sepi, bukan siang hari."
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
              "pattern": "pg_restore\\s",
              "message": "Pemulihan dari berkas dump biner memakai program `pg_restore` (bukan `psql`, yang hanya untuk dump berformat teks SQL)."
            },
            {
              "pattern": "-U\\s+postgres",
              "message": "Sebutkan pengguna database dengan flag `-U`."
            },
            {
              "pattern": "-d\\s+production_db",
              "message": "Sebutkan database tujuan dengan flag `-d`. Database-nya harus SUDAH ada — `pg_restore` tidak membuatkannya kecuali kamu menambahkan flag `-C`."
            },
            {
              "pattern": "backup\\.dump",
              "message": "Nama berkas dump-nya ditulis terakhir, tanpa flag apa pun."
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
              "pattern": "CREATE\\s+EXTENSION",
              "message": "Pengaktifan modul tambahan memakai `CREATE EXTENSION`."
            },
            {
              "pattern": "IF\\s+NOT\\s+EXISTS",
              "message": "Tambahkan penjaga tiga kata agar perintah tidak error saat extension-nya sudah aktif. Ini yang membuat skrip migrasi bisa dijalankan berulang kali dengan aman (*idempotent*)."
            },
            {
              "pattern": "pg_stat_statements",
              "message": "Sebutkan nama extension-nya. Yang ini mencatat statistik semua query yang pernah jalan — sumber utama saat mencari query paling lambat di produksi."
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
              "pattern": "^\\s*EXPLAIN\\s+SELECT",
              "message": "Di MySQL, cukup satu kata kunci di depan query untuk melihat rencana eksekusinya. (`EXPLAIN ANALYZE` juga ada di MySQL 8.0+, tapi yang diminta di sini bentuk dasarnya.)"
            },
            {
              "pattern": "FROM\\s+users\\s+WHERE\\s+status\\s*=\\s*['\"]active['\"]",
              "message": "Query yang dianalisis: dari tabel pengguna, disaring pada kolom status bernilai `active`."
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
              "pattern": "CREATE\\s+INDEX\\s+idx_email_created",
              "message": "Awali `CREATE INDEX` diikuti nama index-nya."
            },
            {
              "pattern": "ON\\s+users\\s*\\(\\s*email\\s*,\\s*created_at\\s*\\)",
              "message": "Index komposit menyebut BEBERAPA kolom di dalam satu tanda kurung, dipisah koma. Urutannya menentukan segalanya: index ini bisa dipakai untuk pencarian berdasarkan `email` saja, tapi TIDAK untuk pencarian berdasarkan `created_at` saja."
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
            "code": "-- ❌ MEMBATALKAN INDEX: WHERE YEAR(created_at) = 2026\n-- ✅ MENGGUNAKAN INDEX: WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'",
            "output": "Query memanfaatkan B-tree Index Scan alih-alih Full Table Scan.",
            "note": "Selalu jaga agar kolom di sisi kiri operator perbandingan tetap bersih tanpa pembungkus fungsi."
          },
          "instruction": "Query di editor menyaring pesanan tahun 2026, tapi versi sebelumnya memakai `WHERE YEAR(created_at) = 2026` sehingga index pada `created_at` tidak terpakai. Tulis penyaringnya sebagai rentang tanggal — dari awal 2026 sampai sebelum awal 2027 — supaya kolomnya tetap 'bersih' dan index bisa dipakai.",
          "starterCode": "-- ❌ versi lama: WHERE YEAR(created_at) = 2026  → index diabaikan\nSELECT id, total\nFROM orders\n-- lengkapi di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WHERE\\s+created_at\\s*>=\\s*['\"]2026-01-01['\"]\\s+AND\\s+created_at\\s*<\\s*['\"]2027-01-01['\"]",
              "message": "Gunakan: WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'"
            }
          ],
          "solution": "SELECT id, total\nFROM orders\nWHERE created_at >= '2026-01-01' AND created_at < '2027-01-01';"
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
              "pattern": "SET\\s+GLOBAL\\s+slow_query_log",
              "message": "Pengaturan tingkat server diubah dengan `SET GLOBAL` diikuti nama variabelnya. Pakai `GLOBAL`, bukan `SESSION` — kalau tidak, pencatatan hanya berlaku untuk koneksimu sendiri dan query lambat dari aplikasi tidak tercatat."
            },
            {
              "pattern": "=\\s*['\"]?ON['\"]?",
              "message": "Beri nilai penyala pada variabel itu. Nilai `1` juga diterima MySQL, tapi bentuk `'ON'` lebih jelas dibaca orang berikutnya."
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
              "pattern": "SET\\s+SESSION\\s+sql_mode",
              "message": "Ubah mode SQL untuk koneksi ini dengan `SET SESSION` diikuti nama variabelnya."
            },
            {
              "pattern": "['\"]STRICT_TRANS_TABLES['\"]",
              "message": "Isi dengan nama mode ketat untuk tabel transaksional, dibungkus tanda kutip. Tanpa mode ini, MySQL menerima data yang tidak valid dengan cara paling berbahaya: memotongnya diam-diam dan hanya memberi *warning* — teks kepanjangan terpotong, tanggal tidak valid berubah jadi `0000-00-00`."
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
              "pattern": "SHOW\\s+(REPLICA|SLAVE)\\s+STATUS",
              "message": "Perintah pemeriksa status replikasi diawali `SHOW`. Istilah modernnya `REPLICA` (MySQL 8.0.22+), sedangkan `SLAVE` masih diterima untuk kompatibilitas — keduanya lolos di sini. Yang dibaca dari hasilnya adalah `Seconds_Behind_Source`: kalau angkanya terus naik, replika ketinggalan dan data yang dibaca aplikasi sudah basi."
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
              "pattern": "SELECT\\s+\\*\\s+FROM\\s+inventory\\s+WHERE\\s+product_id\\s*=\\s*10",
              "message": "Mulai dari pengambilan baris stok untuk produk yang dimaksud."
            },
            {
              "pattern": "FOR\\s+UPDATE",
              "message": "Kuncian baris ditambahkan dengan dua kata di AKHIR query. Ini yang mencegah dua transaksi membaca stok yang sama lalu sama-sama menguranginya (*race condition*). Catatan penting: kuncian hanya berlaku di dalam transaksi — tanpa `BEGIN`, perintah ini praktis tidak melindungi apa pun."
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
              "pattern": "CONCAT\\(",
              "message": "Penggabungan teks yang berjalan di MySQL MAUPUN PostgreSQL memakai fungsi `CONCAT(...)`. Operator `||` lebih pendek tapi tidak jalan di MySQL dengan setelan default — dan itulah inti pelajaran modul migrasi ini."
            },
            {
              "pattern": "first_name\\s*,\\s*['\"]\\s+['\"]\\s*,\\s*last_name",
              "message": "Argumennya tiga: nama depan, sebuah spasi di dalam tanda kutip, lalu nama belakang. Tanpa argumen spasi itu, hasilnya menempel jadi satu kata."
            },
            {
              "pattern": "AS\\s+full_name",
              "message": "Beri nama hasilnya dengan `AS` supaya kolomnya punya nama yang bisa dibaca kode aplikasi."
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
          "instruction": "Kueri ini sedang dipindahkan dari MySQH yang memakai `ON DUPLICATE KEY UPDATE updated_at = NOW()`. Tulis padanannya untuk PostgreSQL: bila bentrok terjadi pada kolom `email`, baris lama diperbarui kolom `updated_at`-nya dengan waktu sekarang.",
          "starterCode": "-- Versi MySQL: INSERT ... ON DUPLICATE KEY UPDATE updated_at = NOW()\nINSERT INTO users (email, updated_at) VALUES ('ana@test.com', NOW())\n-- tulis padanan PostgreSQL-nya di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ON\\s+CONFLICT\\s*\\(\\s*email\\s*\\)\\s+DO\\s+UPDATE\\s+SET\\s+updated_at\\s*=\\s*NOW\\(\\)",
              "message": "Gunakan: ON CONFLICT (email) DO UPDATE SET updated_at = NOW()"
            }
          ],
          "solution": "INSERT INTO users (email, updated_at) VALUES ('ana@test.com', NOW())\nON CONFLICT (email) DO UPDATE SET updated_at = NOW();"
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
              "pattern": "is_active\\s+BOOLEAN",
              "message": "Definisikan kolomnya dengan tipe boolean. Di PostgreSQL ini tipe sungguhan; di MySQL ia sebenarnya alias untuk `TINYINT(1)` yang menyimpan 0/1 — perbedaan yang wajib diingat saat memindahkan data antar keduanya."
            },
            {
              "pattern": "DEFAULT\\s+TRUE",
              "message": "Beri nilai bawaan dengan `DEFAULT`. Tanpa nilai bawaan, kolom ini berisi NULL untuk baris lama, dan NULL pada kondisi boolean bukan berarti \"false\" — ia berarti \"tidak diketahui\", sehingga `WHERE is_active = FALSE` tidak akan menemukannya."
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
              "pattern": "FROM\\s+users",
              "message": "Ambil dari tabel pengguna dengan `FROM`."
            },
            {
              "pattern": "payload->>['\"]tier['\"]\\s*=\\s*['\"]gold['\"]",
              "message": "Baca field di dalam kolom JSONB memakai operator dua tanda lebih besar agar hasilnya berupa teks, lalu bandingkan dengan nilai berpetik tunggal. Ini bukti PostgreSQL bisa menangani data semi-terstruktur — argumen yang sering dipakai untuk TIDAK pindah ke MongoDB."
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
              "pattern": "pgloader\\s",
              "message": "Alat migrasi otomatis MySQL ke PostgreSQL bernama `pgloader`. Ia memetakan tipe data dan memindahkan datanya sekaligus, jauh lebih aman daripada menyalin dump mentah."
            },
            {
              "pattern": "mysql://root@localhost/source_db",
              "message": "Argumen pertama adalah URI sumbernya, berskema `mysql://`."
            },
            {
              "pattern": "postgresql://postgres@localhost/target_db",
              "message": "Argumen kedua adalah URI tujuannya, berskema `postgresql://`. Urutan sumber lalu tujuan tidak boleh tertukar — kalau tertukar, kamu menimpa data yang seharusnya jadi hasil."
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
              "pattern": "COUNT\\(\\s*\\*\\s*\\)",
              "message": "Pemeriksaan pertama setelah migrasi selalu jumlah baris, dan itu memakai fungsi pencacah dengan tanda bintang. Pakai `COUNT(*)`, bukan `COUNT(kolom)` — yang kedua mengabaikan baris ber-NULL sehingga selisihnya keliru dibaca sebagai data hilang."
            },
            {
              "pattern": "FROM\\s+orders",
              "message": "Sebutkan tabel yang diperiksa dengan `FROM`. Jalankan query yang sama di database sumber dan tujuan, lalu bandingkan angkanya."
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
        "ORM vs query builder vs raw SQL — trade-off jujur",
        "Masalah N+1 & cara mendeteksinya",
        "Migration di aplikasi nyata",
        "Optimasi query lambat: proses diagnosis lengkap"
      ],
      "items": [
        {
          "kind": "materi",
          "id": "sql-11-m1",
          "title": "Integrasi SQL di Aplikasi Backend, Connection Pool & ORM",
          "body": "# Integrasi SQL di Aplikasi Backend, Connection Pool & ORM\n\nModul penutup ini mendalami integrasi SQL pada aplikasi backend nyata (seperti Node.js), keamanan dari serangan SQL Injection, bahaya N+1 query, serta pemakaian ORM.\n\n## 1. Menghubungkan Backend ke Database & Connection Pooling\n\nSaat membangun API backend (seperti dengan Express.js atau NestJS), aplikasi kita harus berkomunikasi dengan server database.\n\n### Mengapa Harus Menggunakan Connection Pool (`pg.Pool` / `mysql2.createPool`)?\nMembuka koneksi baru ke database membutuhkan proses handshaking TCP dan autentikasi yang berat (memakan waktu ~50-100ms). Jika setiap HTTP request membuka koneksi baru, server akan cepat kehabisan memori RAM dan crash!\n**Connection Pool** mempertahankan kumpulan koneksi terbuka yang siap dipakai ulang oleh HTTP handler secara instan.\n\n```text\n+--------------------------------------------------------------------------+\n|                BAHAYA SQL INJECTION vs PARAMETERIZED QUERY               |\n+--------------------------------------------------------------------------+\n|  ❌ SANGAT BERBAHAYA (String Concatenation):                             |\n|  const query = \"SELECT * FROM users WHERE email = '\" + req.body.email + \"'\";\n|  Input Peretas: ' OR '1'='1                                             |\n|  Kueri Terkessekusi: SELECT * FROM users WHERE email = '' OR '1'='1'     |\n|  --> SELURUH DATA USER BOCOR KELUAR!                                     |\n|                                                                          |\n|  ✅ SANGAT AMAN (Parameterized Query):                                   |\n|  const query = \"SELECT * FROM users WHERE email = $1\";                    |\n|  db.query(query, [req.body.email]);                                      |\n|  --> Input dianggap sebagai TEKS MATI biasa, bukan sintaks perintah SQL!  |\n+--------------------------------------------------------------------------+\n```\n\n---\n\n## 2. Trade-Off: ORM vs Query Builder vs Raw SQL\n\nDi aplikasi industri, kita memiliki 3 pendekatan untuk berinteraksi dengan database:\n\n| Pendekatan | Contoh Library | Kelebihan Utama | Kelemahan Utama |\n|---|---|---|---|\n| **ORM (Object-Relational Mapping)** | Prisma, TypeORM, Drizzle, Eloquent | Type-safety, relasi otomatis, produktivitas tinggi | Kueri kompleks bisa kurang efisien |\n| **Query Builder** | Knex.js, Kysely | Fleksibel, sintaks JavaScript/TypeScript rapi | Tidak ada pemetaan objek otomatis |\n| **Raw SQL** | Native `pg` / `mysql2` | Performa maksimal, kontrol penuh kueri | Harus mengelola sanitasi & mapping manual |\n\n---\n\n## 3. Masalah N+1 Query & Cara Mengatasinya\n\nMasalah N+1 terjadi saat aplikasi memanggil 1 kueri utama untuk mengambil daftar data (misal 100 pengguna), lalu di dalam perulangan (loop) memanggil 1 kueri tambahan per pengguna untuk mengambil data profilnya (total 101 kueri ke database!).\n\n**Solusinya:** Gunakan teknik **Eager Loading** (`JOIN` atau klausul `include` pada ORM) untuk mengambil seluruh data pengguna dan profilnya dalam **1 kueri tunggal**.\n\n---\n\n## 4. Jebakan & Kesalahan Umum Pemula\n\n1. **Serangan SQL Injection akibat String Interpolation:** Menggabungkan string variabel pengguna langsung ke dalam kueri SQL (`\"WHERE name = '\" + input + \"'\"` ) adalah celah keamanan nomor 1 di web. Gunakan selalu Parameterized Query (`$1` atau `?`).\n2. **Koneksi Bocor (Connection Leak):** Membuka koneksi manual `const client = await pool.connect()` namun lupa memanggil `client.release()` di blok `finally` akan menghabiskan seluruh kuota connection pool.\n3. **Menjalankan Migration Manual di Produksi:** Menjalankan perintah perombakan skema tanpa versi migration script (seperti Prisma Migrate atau Knex Migrations) akan menyulitkan rollback saat terjadi bug di produksi.\n\n---\n\n## 5. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Setiap hari saat kamu bekerja sebagai Fullstack atau Backend Developer yang membangun REST API, GraphQL, atau Microservices.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan keamanan & performa paling populer: *\"Bagaimana cara kerja serangan SQL Injection, bagaimana parameterized query mencegahnya, dan apa itu masalah N+1 query?\"*\n- Di code review tim backend, pull request kamu akan ditolak keras jika ditemukan penggabungan string pada kueri SQL atau adanya indikasi masalah N+1 query di endpoint API."
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
              "pattern": "new\\s+Pool\\(",
              "message": "Pool koneksi dibuat sekali dengan `new Pool({...})` lalu dipakai bersama seluruh aplikasi. Membuat koneksi baru per request adalah penyebab klasik server tumbang saat trafik naik — setiap koneksi memakan memori di sisi database."
            },
            {
              "pattern": "max\\s*:\\s*10",
              "message": "Batas jumlah koneksi diberikan lewat opsi `max`. Angka ini bukan \"makin besar makin bagus\": patokannya jumlah koneksi maksimum yang diizinkan databasemu dibagi jumlah instance aplikasi."
            },
            {
              "pattern": "const\\s+pool\\s*=",
              "message": "Simpan hasilnya ke sebuah konstanta bernama `pool` supaya modul lain bisa mengimpor pool yang SAMA."
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
              "pattern": "prisma\\.user\\.findMany\\(",
              "message": "Pengambilan banyak baris di Prisma memakai `findMany()` pada model yang dituju."
            },
            {
              "pattern": "where\\s*:\\s*\\{[^}]*role\\s*:\\s*['\"]admin['\"]",
              "message": "Penyaring ditulis sebagai objek pada opsi `where`. Nilai yang kamu masukkan otomatis dijadikan parameter oleh Prisma — inilah alasan ORM lebih tahan SQL injection daripada string query yang ditempel manual."
            },
            {
              "pattern": "await\\s",
              "message": "Query database selalu asinkron, jadi tunggu hasilnya dengan `await`. Tanpa itu yang kamu terima objek Promise, dan gejalanya khas: `[object Promise]` atau `undefined` saat datanya dipakai."
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
            "output": "-- log query Prisma TANPA include (10 user):\nSELECT * FROM \"User\";\nSELECT * FROM \"Profile\" WHERE \"userId\" = 1;\nSELECT * FROM \"Profile\" WHERE \"userId\" = 2;\n... 8 baris serupa lagi        <-- inilah N+1: 1 + 10 query\n\n-- log query DENGAN include:\nSELECT * FROM \"User\";\nSELECT * FROM \"Profile\" WHERE \"userId\" IN (1,2,3,4,5,6,7,8,9,10);\n(2 query total)",
            "note": "Cara mendeteksinya bukan dengan menebak: nyalakan log query ORM (`new PrismaClient({ log: ['query'] })`) lalu hitung barisnya. Di data lokal yang cuma 10 baris, N+1 hampir tidak terasa — di produksi dengan 5.000 baris, halaman yang sama menunggu ribuan query."
          },
          "instruction": "Endpoint daftar user memicu satu query tambahan untuk setiap user demi mengambil postingannya. Tulis ulang pemanggilan `prisma.user.findMany()` agar relasi `posts` ikut diambil dalam pengambilan yang sama (eager loading), sehingga jumlah query tidak lagi tumbuh mengikuti jumlah user.",
          "starterCode": "// Tulis query Eager Loading Prisma di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "prisma\\.user\\.findMany\\(",
              "message": "Tetap pakai `findMany()` pada model pengguna — yang berubah hanya opsinya."
            },
            {
              "pattern": "include\\s*:\\s*\\{[^}]*posts\\s*:\\s*true",
              "message": "Eager loading diminta lewat opsi `include`, berisi nama relasi yang ikut diambil. Inilah yang mengubah 1+N query menjadi dua query saja."
            },
            {
              "pattern": "await\\s",
              "message": "Jangan lupa `await` — hasilnya Promise."
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
              "pattern": "prisma\\s+migrate\\s+deploy",
              "message": "Untuk MENERAPKAN migrasi yang sudah ada di server, subperintahnya `migrate deploy`. Jangan pakai `migrate dev` di produksi: ia bisa membuat berkas migrasi baru dan, pada kondisi tertentu, me-reset database."
            },
            {
              "pattern": "npx\\s+prisma",
              "message": "Jalankan CLI Prisma lewat `npx` supaya versinya mengikuti yang tercatat di proyek, bukan versi global di komputer server."
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
              "pattern": "EXPLAIN\\s+ANALYZE",
              "message": "Awali dengan dua kata kunci agar kamu melihat rencana eksekusi sekaligus waktu nyatanya."
            },
            {
              "pattern": "FROM\\s+orders\\s+WHERE\\s+user_id\\s*=\\s*42",
              "message": "Tulis query lambat yang sedang kamu selidiki apa adanya. Yang dicari di hasilnya satu kata: `Seq Scan` berarti seluruh tabel dibaca, dan itu tanda kolom penyaringnya belum punya index."
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
