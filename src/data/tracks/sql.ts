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
          "body": "# Persiapan, Instalasi Database Relasional & Konsep SELECT\n\nSelamat datang di dunia database relasional! Sebelum kamu menulis kueri pertama, mari kita pahami tempat kerja, arsitektur sistem, dan mental model mendasarnya.\n\n---\n\n## 1. Alat Kerja & Panduan Instalasi Per OS\n\nDi dunia nyata, database berjalan di server backend atau cluster cloud. Untuk pengembangan lokal, kamu membutuhkan **Database Server** (mesin RDBMS pengolah data) dan **GUI Client** (aplikasi visual untuk mengelola tabel).\n\n### Panduan Instalasi:\n- **macOS:** Gunakan Homebrew via Terminal:\n  ```bash\n  brew install postgresql@16 mysql\n  brew services start postgresql@16\n  ```\n- **Windows:** Unduh installer resmi PostgreSQL dari EnterpriseDB atau MySQL Installer. Centang opsi `psql` dan pgAdmin 4 / MySQL Workbench.\n- **Linux (Ubuntu/Debian):**\n  ```bash\n  sudo apt update && sudo apt install postgresql postgresql-contrib mysql-server\n  sudo systemctl start postgresql\n  ```\n- **Opsi Modern Industri (Docker Container):**\n  Cara paling bersih dan terisolasi tanpa mengotori OS host:\n  ```bash\n  # Menjalankan PostgreSQL 16\n  docker run -d --name bilearn-postgres -e POSTGRES_PASSWORD=rahasia -p 5432:5432 postgres:16-alpine\n\n  # Menjalankan MySQL 8.4 LTS\n  docker run -d --name bilearn-mysql -e MYSQL_ROOT_PASSWORD=rahasia -p 3306:3306 mysql:8.4\n  ```\n- **Alternatif Online Tanpa Instalasi:** Kamu bisa mencoba kueri langsung di browser menggunakan platform gratis seperti **DB-Fiddle.com**, **SQLLiteOnline.com**, atau membuat instance gratis di **Supabase.com**.\n\n### Aplikasi Visual (GUI Client) yang Direkomendasikan:\n1. **DBeaver** (Gratis & Cross-Platform): Mendukung PostgreSQL, MySQL, SQLite, MariaDB, dan Oracle sekaligus.\n2. **TablePlus** (Ringan & Cepat): Sangat populer di kalangan software engineer profesional.\n3. **pgAdmin 4** (Khusus PostgreSQL): GUI resmi dengan fitur analisis maintenance lengkap.\n\n---\n\n## 2. Pengertian & Mental Model Database Relasional\n\nMengapa sistem perbankan, e-commerce, dan aplikasi SaaS menyimpan data di RDBMS alih-alih file Excel atau JSON biasa? Jawabannya adalah **kecepatan indeks, integritas data, transaksi konkuren, dan kapasitas skala**. RDBMS dirancang untuk melayani ribuan permintaan baca-tulis secara bersamaan tanpa merusak konsistensi data.\n\nDatabase Relasional mengorganisir data dalam bentuk **Tabel** yang terstruktur ketat:\n- **Tabel (Table):** Wadah kategori data spesifik (misal: `users`, `products`, `orders`).\n- **Baris (Row / Tuple / Record):** Satu entitas data tunggal (misal: data satu orang pengguna).\n- **Kolom (Column / Field / Attribute):** Informasi spesifik dengan tipe data tertentu (misal: `name` bertipe VARCHAR, `price` bertipe DECIMAL).\n\n```text\n+-----------------------------------------------------------------------------------+\n|                            TABEL DATABASE (users)                                 |\n+----+-------------------+-----------------------+----------+-----------+-----------+\n| id | name (VARCHAR)    | email (VARCHAR)       | age (INT)| is_active | role      |\n+----+-------------------+-----------------------+----------+-----------+-----------+\n| 1  | Bimo Daffa        | bimo@bilearn.id       | 25       | true      | admin     |\n| 2  | Siti Rahma        | siti@bilearn.id       | 22       | true      | customer  |\n| 3  | Ahmad Subagja     | ahmad@bilearn.id      | 30       | false     | customer  |\n+----+-------------------+-----------------------+----------+-----------+-----------+\n```\n\n---\n\n## 3. Urutan Eksekusi Logika SQL (Sangat Penting!)\n\nSalah satu sumber kebingungan terbesar bagi pemula adalah mengira bahwa kueri SQL dieksekusi dari atas ke bawah seperti kode pemrograman biasa. Padahal, SQL dieksekusi oleh mesin database (*query engine*) dalam urutan logis berikut:\n\n```text\n+-----------------------------------------------------------------------------+\n|          URUTAN EKSEKUSI LOGIKA KUERI SQL (Logical Query Processing)        |\n+-----------------------------------------------------------------------------+\n| 1. FROM & JOIN     --> Menentukan tabel sumber dan memasangkan relasinya    |\n| 2. WHERE           --> Menyaring baris data mentah per kondisi              |\n| 3. GROUP BY        --> Mengelompokkan data yang tersisa                     |\n| 4. HAVING          --> Menyaring hasil agregasi kelompok                    |\n| 5. SELECT          --> Memilih kolom spesifik & menghitung ekspresi/alias   |\n| 6. DISTINCT        --> Membuang baris hasil yang duplikat                   |\n| 7. ORDER BY        --> Mengurutkan data (ASC / DESC)                        |\n| 8. LIMIT / OFFSET  --> Memotong dan membatasi jumlah baris yang dikembalikan|\n+-----------------------------------------------------------------------------+\n```\n\n> **Kenapa alias `SELECT price * qty AS total` error saat dipakai di `WHERE total > 1000`?**\n> Karena klausa `WHERE` dieksekusi pada langkah 2, sedangkan `SELECT` (tempat alias `total` didefinisikan) baru dieksekusi pada langkah 5! Pada saat menyaring baris, mesin database belum mengetahui adanya alias tersebut.\n\n---\n\n## 4. Aturan Identifier Quoting & Nilai Literal\n\nPerhatikan cara penulisan teks dan nama kolom di SQL:\n- **Nilai Teks / String Literal:** Selalu dibungkus **petik tunggal** (`'active'`, `'admin'`).\n- **Nama Identifier (Kolom/Tabel) di PostgreSQL:** Menggunakan huruf kecil atau dibungkus **petik ganda** (`\"user_id\"`). Petik tunggal pada kolom akan dianggap nilai teks string!\n- **Nama Identifier di MySQL:** Menggunakan **backticks** (``` `order_id` ```).\n- **Angka Numerik:** Ditulis langsung tanpa tanda petik (`WHERE price = 10000`). Membungkus angka dengan petik (`'10000'`) memaksa database melakukan konversi tipe implisit yang dapat membatalkan penggunaan indeks.\n\n---\n\n## 5. Tabel Operator Filter & Klausul SELECT\n\nBerikut adalah klausul dasar dan operator perbandingan yang digunakan saat membaca data:\n\n| Operator / Klausul | Makna / Fungsi | Contoh Penggunaan |\n|---|---|---|\n| `SELECT ... FROM` | Menentukan kolom yang diambil dan tabel sumber | `SELECT name, email FROM users;` |\n| `=`, `<>`, `!=` | Sama dengan, tidak sama dengan | `WHERE status <> 'inactive'` |\n| `>`, `<`, `>=`, `<=` | Perbandingan numerik dan tanggal | `WHERE age >= 18` |\n| `BETWEEN a AND b` | Nilai berada di dalam rentang inklusif batas | `WHERE price BETWEEN 10000 AND 50000` |\n| `IN (x, y, z)` | Mencocokkan nilai dengan salah satu anggota daftar | `WHERE role IN ('admin', 'editor')` |\n| `LIKE 'pattern'` | Pencarian teks wildcard (`%` = sembarang teks, `_` = 1 huruf) | `WHERE name LIKE 'Kopi%'` |\n| `ILIKE 'pattern'` | Case-insensitive LIKE (eksklusif di PostgreSQL) | `WHERE email ILIKE '%@gmail.com'` |\n| `ORDER BY ... DESC` | Mengurutkan hasil (menaik `ASC`, menurun `DESC`) | `ORDER BY created_at DESC` |\n| `LIMIT ... OFFSET` | Pagination: batasi jumlah baris dan lewati sekian baris | `LIMIT 10 OFFSET 20` |\n| `DISTINCT` | Menghilangkan duplikat nilai hasil | `SELECT DISTINCT role FROM users;` |\n| `IS NULL` / `IS NOT NULL` | Memeriksa nilai kosong atau ada nilainya | `WHERE deleted_at IS NULL` |\n\n---\n\n## 6. Urutan Evaluasi Logika: Prioritas AND vs OR\n\nDi SQL, operator logika `AND` memiliki prioritas evaluasi (**operator precedence**) yang lebih tinggi daripada operator `OR`.\n\nBayangkan query berikut:\n```sql\n-- BERBAHAYA: Kurung tidak dipasang!\nSELECT * FROM users\nWHERE role = 'admin' OR role = 'manager' AND status = 'active';\n```\nMesin database akan mengevaluasi `role = 'manager' AND status = 'active'` terlebih dahulu. Akibatnya, semua user dengan `role = 'admin'` akan terambil **meskipun statusnya non-aktif/banned**!\n\nQuery yang benar wajib menggunakan tanda kurung `()`:\n```sql\nSELECT * FROM users\nWHERE (role = 'admin' OR role = 'manager') AND status = 'active';\n```\n\n---\n\n## 7. Jebakan & Kesalahan Umum Pemula\n\n1. **Jebakan `= NULL`:** Menulis `WHERE phone = NULL` **tidak akan pernah mengembalikan baris apa pun!** Di SQL, terdapat logika 3 nilai (*Three-Valued Logic*): `TRUE`, `FALSE`, dan `UNKNOWN`. Segala perbandingan dengan `NULL` bernilai `UNKNOWN`, dan klausa `WHERE` hanya meloloskan kondisi bernilai `TRUE`. Gunakan selalu `IS NULL` atau `IS NOT NULL`.\n2. **`SELECT *` di Lingkungan Produksi:** Mengambil seluruh kolom (`SELECT *`) membawa kolom teks panjang atau binary yang tidak dibutuhkan ke memori aplikasi. Ini memboroskan RAM server backend dan bandwidth jaringan. Selalu sebutkan kolom spesifik yang dibutuhkan.\n3. **Lupa Memberi `LIMIT` pada Tabel Jutaan Baris:** Menjalankan `SELECT * FROM transaction_logs` pada tabel berisi 20 juta baris dapat membekukan database server dan memicu memori out-of-memory (OOM).\n\n---\n\n## 8. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Setiap endpoint REST API atau GraphQL yang mengambil daftar entitas (daftar pengguna, katalog produk, filter transaksi) selalu dibangun di atas fondasi `SELECT`, `WHERE`, `ORDER BY`, dan `LIMIT`.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan favorit Junior Backend: *\"Jelaskan urutan eksekusi query SQL dan kenapa kita tidak bisa menggunakan alias SELECT di dalam WHERE?\"*\n- Senior engineer di sesi code review akan menolak pull request jika kamu menggunakan `SELECT *` di query API produksi atau lupa membungkus kombinasi `AND` dan `OR` dengan tanda kurung."
        },
        {
          "kind": "step",
          "id": "sql-1-1",
          "title": "Konsep Database Relasional",
          "explanation": "Database relasional mengorganisir data dalam bentuk tabel terstruktur yang terdiri dari baris (entitas data) dan kolom (atribut data). Sintaks `SELECT * FROM products` merupakan perintah paling dasar untuk mengambil seluruh data dari tabel `products`. Perintah ini digunakan ketika kamu ingin melihat isi keseluruhan tabel saat pertama kali bereksperimen di lingkungan lokal. Namun, jebakan utamanya adalah menjalankan `SELECT *` pada tabel produksi yang memiliki jutaan baris data, karena dapat melumpuhkan memori server dan memboroskan bandwidth jaringan.",
          "example": {
            "code": "-- Tabel 'users' memuat kolom id, name, email, dan created_at\nSELECT * FROM users;",
            "output": " id |     name     |     email      |       created_at       \n----+--------------+----------------+------------------------\n  1 | Ana Rahma    | ana@test.com   | 2026-07-28 20:10:00+07\n  2 | Budi Santoso | budi@test.com  | 2026-07-28 14:02:00+07\n  3 | Citra Dewi   | citra@test.com | 2026-07-27 09:31:00+07\n(3 rows)",
            "note": "Baris `(3 rows)` di bawah tabel adalah hitungan baris yang dikembalikan — biasakan membacanya, karena itu petunjuk pertama saat hasil query tidak sesuai dugaan. Tanda bintang mengambil SEMUA kolom, termasuk kolom yang belum ada saat kamu menulis query ini."
          },
          "instruction": "Sebagai langkah awal eksplorasi katalog di database toko online, ambil seluruh kolom dari tabel `products` untuk memeriksa struktur kolom dan data awal yang tersedia.",
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
            }
          ],
          "solution": "SELECT * FROM products;",
          "susunKode": {
            "question": "Susun query SQL untuk mengambil seluruh data dari tabel products.",
            "potongan": [
              "SELECT",
              "*",
              "FROM products;"
            ],
            "pengecoh": [
              "GET",
              "ALL",
              "IN products;"
            ],
            "pemisah": " ",
            "explanation": "Perintah SQL untuk mengambil data menggunakan katakunci SELECT, bukan GET atau ALL. Tanda bintang (*) digunakan untuk mengambil seluruh kolom dari tabel products. Pengecoh 'GET' sering mengeliru pemula yang terbiasa dengan metode HTTP REST API."
          }
        },
        {
          "kind": "step",
          "id": "sql-1-2",
          "title": "SELECT Kolom Spesifik & Alias (AS)",
          "explanation": "Memilih kolom spesifik seperti `SELECT name, email` memberitahu mesin database untuk hanya mengambil data dari kolom yang benar-benar dibutuhkan oleh aplikasi. Kamu juga dapat menggunakan kata kunci `AS` untuk membuat nama alias kolom agar respon data lebih mudah dibaca oleh frontend. Teknik ini selalu digunakan pada pembuatan API backend agar payload JSON tetap ringan dan efisien. Jebakan umum pemula adalah lupa memisahkan antar kolom dengan tanda koma `,` atau keliru menuliskan nama kolom sehingga memicu error `column does not exist`.",
          "example": {
            "code": "SELECT name AS nama_produk, price AS harga FROM products;",
            "output": " nama_produk | harga  \n-------------+--------\n Kopi Gayo   |  10000\n Teh Hijau   |  10000\n Kaos Polos  |  75000\n Gula Aren   |  18000\n Headset     | 150000\n(5 rows)",
            "note": "Perhatikan judul kolomnya: yang muncul `nama_produk` dan `harga`, bukan `name` dan `price`. Nama alias inilah yang nanti menjadi kunci di JSON respons API-mu, jadi memberi alias sama dengan menentukan kontrak data untuk tim frontend."
          },
          "instruction": "Layanan notifikasi newsletter hanya membutuhkan nama dan alamat email pengguna untuk mengirimkan email blast. Tampilkan hanya kolom `name` dan `email` dari tabel `users` agar payload data efisien.",
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
          "solution": "SELECT name, email FROM users;",
          "susunKode": {
            "question": "Susun query SQL untuk memilih kolom name dan email dari tabel users.",
            "potongan": [
              "SELECT name, email",
              "FROM users;"
            ],
            "pengecoh": [
              "SELECT name, username",
              "IN users;"
            ],
            "pemisah": " ",
            "explanation": "Query SQL memilih kolom spesifik menggunakan SELECT diikuti nama kolom name dan email dipisahkan koma. Sintaks 'CHOOSE' atau mengganti nama kolom email dengan username adalah kesalahan jebakan yang sering dilakukan."
          }
        },
        {
          "kind": "step",
          "id": "sql-1-3",
          "title": "Filtering Baris dengan Klausul WHERE",
          "explanation": "Klausul `WHERE` berfungsi menyaring baris data berdasarkan kriteria atau kondisi tertentu seperti perbandingan angka atau teks. Menggunakan `WHERE price = 10000` akan membatasi data yang dikembalikan hanya pada produk bernilai tepat 10.000. Klausul filter ini digunakan pada hampir semua fitur aplikasi seperti pencarian barang, filter status transaksi, atau autentikasi pengguna. Jebakan yang sering terjadi adalah lupa kalau perbandingan string bersifat sensitif terhadap huruf besar dan kecil (case-sensitive) pada beberapa mesin database seperti PostgreSQL.",
          "example": {
            "code": "SELECT name, category, price\nFROM products\nWHERE price BETWEEN 10000 AND 80000\n  AND name LIKE 'K%';",
            "output": "    name    | category | price \n------------+----------+-------\n Kopi Gayo  | Minuman  | 10000\n Kaos Polos | Fashion  | 75000\n(2 rows)",
            "note": "`BETWEEN` bersifat inklusif — batas 10000 dan 80000 ikut terambil, dan itu sumber selisih satu baris yang sering tidak disadari. `LIKE 'K%'` mencocokkan teks yang DIAWALI huruf K; tanda persen berarti \"boleh diikuti apa saja\"."
          },
          "instruction": "Pelanggan di aplikasi sedang memfilter katalog untuk mencari item promo dengan harga pas 10000. Ambil seluruh data produk dari tabel `products` yang harganya tepat 10000.",
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
          "solution": "SELECT * FROM products WHERE price = 10000;",
          "susunKode": {
            "question": "Susun query SQL untuk memfilter produk yang harganya bernilai 10000.",
            "potongan": [
              "SELECT * FROM products",
              "WHERE price =",
              "10000;"
            ],
            "pengecoh": [
              "FILTER price =",
              "WHERE price ==",
              "WHERE price IS 10000;"
            ],
            "pemisah": " ",
            "explanation": "Dalam SQL standar, klausa WHERE digunakan untuk memfilter baris data dan pembandingan kesamaan menggunakan satu tanda sama dengan (=), bukan dua (==) atau klausa IS. Pengecoh 'FILTER' dan '==' sangat menggoda bagi pemrogram web."
          }
        },
        {
          "kind": "step",
          "id": "sql-1-4",
          "title": "Kombinasi Kondisi AND, OR, dan NOT",
          "explanation": "Operator logika `AND`, `OR`, dan `NOT` memungkinkan kamu menggabungkan beberapa kriteria filter dalam satu kueri SQL. Menggunakan `AND` menuntut semua kondisi harus bernilai benar (`TRUE`), sedangkan `OR` hanya membutuhkan salah satu kondisi bernilai benar. Kombinasi ini sangat sering digunakan untuk memfilter akun pengguna berdasarkan peran sekaligus status aktifnya di sistem backend. Jebakan klasik pemula adalah tidak menggunakan tanda kurung `()` saat menggabungkan `AND` dan `OR` bersamaan, sehingga urutan evaluasi logika menjadi acak dan menghasilkan data yang salah.",
          "example": {
            "code": "SELECT * FROM users WHERE status = 'active' AND age >= 18;",
            "output": " id |     name     | status | age \n----+--------------+--------+-----\n  1 | Ana Rahma    | active |  27\n  2 | Budi Santoso | active |  31\n(2 rows)",
            "note": "Citra tidak muncul walau statusnya cocok, karena umurnya 16 — `AND` menuntut KEDUA syarat benar. Kalau kata itu diganti `OR`, ia ikut terambil, dan perbedaan satu kata inilah yang membedakan daftar yang benar dari daftar yang bocor."
          },
          "instruction": "Sistem audit keamanan memerlukan daftar akun staf internal yang berhak masuk ke panel admin. Filter tabel `users` agar hanya menampilkan pengguna yang kolom `status`-nya bernilai 'active' sekaligus memiliki `role` bernilai 'admin'.",
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
          "solution": "SELECT * FROM users WHERE status = 'active' AND role = 'admin';",
          "susunKode": {
            "question": "Susun query SQL untuk memfilter pengguna berstatus active dan peran admin.",
            "potongan": [
              "SELECT * FROM users",
              "WHERE status = 'active'",
              "AND role = 'admin';"
            ],
            "pengecoh": [
              "WHERE status == 'active'",
              "&& role = 'admin';",
              "THEN role = 'admin';"
            ],
            "pemisah": " ",
            "explanation": "Penggabungan dua kondisi filter pada SQL dilakukan dengan operator logika AND, bukan operator '&&' atau kata 'THEN'. Penggunaan '==' juga jebakan yang sering muncul karena kebiasaan bahasa pemograman seperti JS atau Python."
          }
        },
        {
          "kind": "step",
          "id": "sql-1-5",
          "title": "Pengurutan ORDER BY & Pembatasan LIMIT/OFFSET",
          "explanation": "Klausul `ORDER BY` mengurutkan baris data secara menaik (`ASC`) atau menurun (`DESC`), sementara `LIMIT` membatasi jumlah maksimum baris yang dikembalikan. Menggabungkan `ORDER BY created_at DESC LIMIT 10` memungkinkan aplikasi kamu mengambil 10 pengguna atau artikel terbaru secara instan. Fitur ini wajib digunakan pada setiap sistem yang menerapkan halaman daftar data (pagination) agar tidak membebankan server. Jebakan yang sering membingungkan adalah lupa bahwa `ORDER BY` selalu dieksekusi sebelum `LIMIT`, sehingga mengurutkan tabel besar tanpa indeks pada kolom pengurut akan memicu perkalian waktu eksekusi.",
          "example": {
            "code": "SELECT name, price FROM products ORDER BY price DESC LIMIT 3;",
            "output": "    name    | price  \n------------+--------\n Headset    | 150000\n Kaos Polos |  75000\n Gula Aren  |  18000\n(3 rows)",
            "note": "Database mengurutkan SELURUH tabel dulu, baru memotong tiga teratas — bukan sebaliknya. Karena itu `ORDER BY` pada kolom tanpa index di tabel jutaan baris tetap mahal meski `LIMIT`-nya kecil."
          },
          "instruction": "Halaman ringkasan dasbor admin menampilkan 10 pendaftar paling baru di sistem. Ambil seluruh data dari tabel `users`, urutkan berdasarkan waktu pendaftaran (`created_at`) dari yang paling baru ke paling lama, dan batasi hasilnya tepat 10 baris.",
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
          "solution": "SELECT * FROM users ORDER BY created_at DESC LIMIT 10;",
          "susunKode": {
            "question": "Susun query SQL untuk mengambil 10 pengguna terbaru berdasarkan urutan created_at secara menurun.",
            "potongan": [
              "SELECT * FROM users",
              "ORDER BY created_at",
              "DESC LIMIT 10;"
            ],
            "pengecoh": [
              "SORT BY created_at",
              "ASC LIMIT 10;",
              "TOP 10 DESC;"
            ],
            "pemisah": " ",
            "explanation": "SQL mengurutkan data menggunakan klausa ORDER BY dengan kata kunci DESC untuk urutan menurun (terbaru ke terlama), lalu dipadukan dengan LIMIT 10. Penggunaan 'SORT BY' atau 'TOP' adalah kesalahan menggoda yang keliru."
          }
        },
        {
          "kind": "step",
          "id": "sql-1-6",
          "title": "Menghilangkan Duplikat dengan DISTINCT",
          "explanation": "Kata kunci `DISTINCT` mengeliminasi seluruh baris nilai duplikat sehingga hanya mengembalikan daftar nilai yang unik dari kolom yang dipilih. Kueri `SELECT DISTINCT role FROM users` akan menampilkan jenis-jenis peran pengguna tanpa mengulang nilai yang sama berkali-kali. Fitur ini sangat berguna saat kamu ingin membuat daftar pilihan dropdown di UI frontend seperti kategori produk atau status transaksi. Jebakan utamanya adalah memasukkan terlalu banyak kolom ke dalam `DISTINCT`, karena database harus melakukan sorting di memori untuk menemukan kombinasi unik yang menyebabkan penurunan performa.",
          "example": {
            "code": "SELECT DISTINCT category FROM products;",
            "output": "  category  \n------------\n Makanan\n Elektronik\n Minuman\n Fashion\n(4 rows)",
            "note": "Perhatikan urutannya acak, tidak mengikuti urutan data asli: `DISTINCT` tidak menjanjikan urutan apa pun. Kalau daftar ini dipakai untuk dropdown, tambahkan `ORDER BY category` — kalau tidak, urutannya bisa berubah sendiri saat data bertambah."
          },
          "instruction": "Formulir pendaftaran staf di antarmuka frontend membutuhkan daftar opsi peran unik yang tersedia di sistem tanpa duplikasi. Tampilkan daftar nilai unik dari kolom `role` pada tabel `users`.",
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
          "solution": "SELECT DISTINCT role FROM users;",
          "susunKode": {
            "question": "Susun query SQL untuk menampilkan nilai unik dari kolom role di tabel users.",
            "potongan": [
              "SELECT DISTINCT",
              "role",
              "FROM users;"
            ],
            "pengecoh": [
              "SELECT UNIQUE",
              "user_role",
              "GROUP role"
            ],
            "pemisah": " ",
            "explanation": "Katakunci DISTINCT digunakan pada SELECT untuk membuang baris duplikat dan menampilkan nilai unik dari kolom role. Penggunaan kata 'UNIQUE' atau 'GROUP' sering keliru dianggap sebagai klausa SQL pemilah nilai unik."
          }
        },
        {
          "kind": "step",
          "id": "sql-1-7",
          "title": "Pengecekan Nilai Kosong (IS NULL / IS NOT NULL)",
          "explanation": "Di SQL, nilai `NULL` mewakili data yang tidak diketahui atau belum diisi, sehingga nilainya tidak sama dengan angka nol `0` maupun string kosong `''`. Karena wujudnya tidak diketahui, kamu tidak boleh membandingkan nilai kosong menggunakan `= NULL` melainkan wajib menggunakan operator khusus `IS NULL` atau `IS NOT NULL`. Operator ini sangat vital saat kamu ingin mencari baris transaksi yang belum dibayar atau pengguna yang belum melakukan verifikasi email. Jebakan terbesar pemula adalah tetap menggunakan `WHERE paid_at = NULL` yang secara konsisten menghasilkan nilai `FALSE` tanpa mengembalikan baris data apa pun.",
          "example": {
            "code": "SELECT * FROM users WHERE deleted_at IS NULL;",
            "output": " id |     name     | deleted_at \n----+--------------+------------\n  1 | Ana Rahma    | \n  2 | Budi Santoso | \n(2 rows)",
            "note": "Kolom `deleted_at` tampil KOSONG, bukan bertulisan NULL — begitulah psql menampilkannya secara bawaan, dan itu mudah tertukar dengan string kosong. Ganti `IS NULL` menjadi `= NULL` pada query yang sama, hasilnya `(0 rows)` tanpa satu pun pesan error."
          },
          "instruction": "Bagian pergudangan hanya boleh memproses pesanan yang pembayarannya sudah terverifikasi. Ambil seluruh data dari tabel `orders` di mana kolom waktu pembayaran (`paid_at`) tidak kosong (bukan NULL).",
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
          "solution": "SELECT * FROM orders WHERE paid_at IS NOT NULL;",
          "susunKode": {
            "question": "Susun query SQL untuk mengambil pesanan yang kolom paid_at-nya tidak kosong (IS NOT NULL).",
            "potongan": [
              "SELECT * FROM orders",
              "WHERE paid_at",
              "IS NOT NULL;"
            ],
            "pengecoh": [
              "WHERE paid_at !=",
              "IS NULL",
              "!= NULL;"
            ],
            "pemisah": " ",
            "explanation": "Untuk mengecek apakah kolom tidak bernilai kosong (NULL) dalam SQL, kita harus menggunakan frasa IS NOT NULL. Penggunaan operator relasional biasa seperti '!= NULL' merupakan jebakan klasik yang tidak akan menghasilkan kondisi TRUE yang diharapkan."
          }
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
                "Karena di SQL, NULL merepresentasikan nilai yang 'tidak diketahui' (UNKNOWN) sehingga perbandingan kesamaan selalu bernilai UNKNOWN/falsy",
                "Karena kata kunci NULL hanya diizinkan di dalam perintah INSERT",
                "Karena PostgreSQL otomatis mengonversi NULL menjadi angka 0 saat dievaluasi",
                "Karena perbandingan nilai kosong wajib menggunakan operator perbandingan =="
              ],
              "answerIndex": 0,
              "explanation": "NULL berarti 'nilainya tidak diketahui', bukan nol dan bukan string kosong. Membandingkan sesuatu yang tidak diketahui dengan nilai apa pun hasilnya juga tidak diketahui — bukan TRUE — sehingga barisnya tidak pernah lolos filter. Karena itu SQL menyediakan operator khusus IS NULL dan IS NOT NULL."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Atasanmu minta daftar 10 produk termahal dari tabel `products`. Query mana yang benar?",
              "choices": [
                "Untuk mencegah pengembalian kolom berukuran besar yang tidak perlu ke memori aplikasi dan menghemat bandwidth jaringan",
                "Karena database relasional tidak mengizinkan tanda bintang pada query produksi",
                "Karena SELECT * secara otomatis menghapus index dari memori server",
                "Karena tanda bintang hanya bisa digunakan pada tabel yang memiliki kurang dari 5 kolom"
              ],
              "answerIndex": 1,
              "explanation": "Urutannya tetap: ORDER BY dulu, baru LIMIT. Database mengurutkan seluruh baris lebih dulu, baru memotong 10 teratas — kalau LIMIT ditulis duluan, sintaksnya error di MySQL maupun PostgreSQL. Kata kunci DESC dipakai karena termahal berarti dari besar ke kecil; tanpa DESC kamu justru mendapat 10 termurah."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Tabel `customers` punya 5.000 baris dan banyak pelanggan berasal dari kota yang sama. Kamu butuh daftar nama kota tanpa pengulangan. Query mana yang tepat?",
              "choices": [
                "DISTINCT",
                "UNIQUE",
                "GROUP_FILTER",
                "DEDUPLICATE"
              ],
              "answerIndex": 1,
              "explanation": "DISTINCT membuang baris kembar dari hasil query sehingga setiap kota hanya muncul sekali. SELECT city biasa mengembalikan 5.000 baris penuh pengulangan, dan UNIQUE() bukan fungsi SQL standar. Alternatif yang juga benar adalah GROUP BY city — biasanya dipakai kalau kamu sekaligus ingin menghitung jumlah pelanggan per kota."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Fitur pencarian pelanggan harus menemukan semua nama yang diawali huruf 'Bu' (Budi, Budiman, Bunga). Kondisi WHERE mana yang tepat?",
              "choices": [
                "Semua user ber-role admin (termasuk yang banned/inactive) akan ikut terambil karena AND dievaluasi sebelum OR",
                "Database akan melempar SyntaxError karena melarang penggabungan AND dan OR",
                "Semua user berstatus active akan otomatis diubah rolenya menjadi admin",
                "Query akan berjalan lambat karena database melakukan Full Table Scan ganda"
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
                "Karena klausa WHERE dieksekusi lebih awal oleh query engine sebelum klausa SELECT dievaluasi",
                "Karena alias hanya boleh digunakan untuk kolom bertipe data numerik",
                "Karena nama alias hanya bisa dibaca oleh aplikasi frontend, bukan oleh server",
                "Karena SQL standar mewajibkan alias diulang di klausa FROM"
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
          "body": "# Relasi Antar Tabel & Operasi JOIN\n\nSebagian besar kekuatan database relasional terletak pada kemampuannya menghubungkan data dari berbagai tabel yang berbeda tanpa menduplikasi data secara serampangan.\n\n---\n\n## 1. Pengertian Relasi, Primary Key, dan Foreign Key\n\n- **Primary Key (PK):** Kolom (atau gabungan kolom) yang nilainya dijamin unik untuk setiap baris dan tidak boleh bernilai `NULL`. Contoh: `users.id`.\n- **Foreign Key (FK):** Kolom di suatu tabel yang merujuk pada Primary Key tabel lain untuk membentuk hubungan relasi. Contoh: kolom `orders.user_id` merujuk pada `users.id`.\n\n### Tiga Derajat Relasi:\n1. **One-to-Many (1:N):** Satu pengguna memiliki banyak pesanan. (Paling umum).\n2. **Many-to-Many (M:N):** Satu mahasiswa mengambil banyak mata kuliah, dan satu mata kuliah diikuti banyak mahasiswa. Membutuhkan tabel perantara (*Junction Table / Pivot Table*).\n3. **One-to-One (1:1):** Satu pengguna memiliki satu profil detail terpisah.\n\n---\n\n## 2. Integritas Referensial & Tindakan Cascading\n\nKetika baris pada tabel induk (*parent*) dihapus atau diubah, apa yang harus terjadi pada baris anak (*child*) di tabel lain? Aturan ini didefinisikan lewat opsi Foreign Key:\n\n| Aksi Cascading | Perilaku Saat Baris Induk Dihapus | Kasus Penggunaan Riil |\n|---|---|---|\n| `ON DELETE CASCADE` | Semua baris anak yang merujuk otomatis ikut terhapus | Menghapus `orders` otomatis menghapus seluruh `order_items` |\n| `ON DELETE RESTRICT` / `NO ACTION` | Operasi hapus ditolak dan menghasilkan error jika masih ada baris anak | Menghapus `users` ditolak jika pengguna masih memiliki catatan transaksi |\n| `ON DELETE SET NULL` | Kolom Foreign Key pada baris anak diubah menjadi `NULL` | Menghapus `categories` membuat produk terkait memiliki kategori `NULL` |\n\n---\n\n## 3. Analogi Diagram Venn vs Realita Relational Matching\n\nBanyak materi pemula menggambarkan operasi JOIN menggunakan Diagram Venn lingkaran matematika ($A cap B$). Meskipun membantu secara intuisi awal, **analogi Venn sering menyesatkan pemula**:\n\n```text\n+-------------------------------------------------------------------------------+\n|               DIAGRAM VENN VS REALITA RELATIONAL MATCHING                     |\n+-------------------------------------------------------------------------------+\n| VENN DIAGRAM (Teori Himpunan):                                                |\n| - Mengasumsikan elemen bersifat unik.                                         |\n| - Memberi ilusi bahwa hasil gabungan tidak akan pernah lebih besar dari       |\n|   jumlah baris tabel kiri.                                                    |\n|                                                                               |\n| REALITA SQL JOIN (Aljabar Relasional / Cartesian Match):                      |\n| - Jika 1 pengguna memiliki 3 pesanan di tabel kanan, melakukan JOIN           |\n|   users dan orders akan MENDUPLIKASI baris user tersebut sebanyak 3 kali!     |\n| - Akibatnya, jika kamu menghitung SUM(users.balance) setelah JOIN, angkanya   |\n|   akan membengkak 3x lipat secara keliru.                                     |\n+-------------------------------------------------------------------------------+\n```\n\n---\n\n## 4. Peta Jenis-Jenis JOIN\n\nBerikut rangkuman perilaku macam-macam klausul JOIN:\n\n| Jenis JOIN | Apa yang Dikembalikan? | Kapan Dipakai? |\n|---|---|---|\n| `INNER JOIN` | Hanya baris yang memiliki pasangan cocok di kedua tabel | Menampilkan pesanan yang valid memiliki data pembeli |\n| `LEFT JOIN` | Seluruh baris tabel kiri, ditambah data tabel kanan jika cocok (diisi `NULL` jika tidak ada) | Menampilkan seluruh pelanggan, termasuk yang belum pernah memesan |\n| `RIGHT JOIN` | Seluruh baris tabel kanan, ditambah data tabel kiri (kebalikan LEFT JOIN) | Jarang dipakai; developer biasanya menukar posisi tabel dan memakai LEFT JOIN |\n| `FULL OUTER JOIN` | Seluruh baris dari kedua tabel, mengisi `NULL` di sisi yang tidak berpasangan | Rekonsiliasi data migrasi atau sinkronisasi dua sistem |\n| `CROSS JOIN` | Perkalian Kartesian: menggabungkan setiap baris tabel A dengan semua baris tabel B | Membuat matriks kombinasi warna dan ukuran baju |\n\n```text\nTabel: users (kiri)            Tabel: orders (kanan)\n+----+-------+                 +----+---------+--------+\n| id | name  |                 | id | user_id | total  |\n+----+-------+                 +----+---------+--------+\n| 1  | Bimo  |                 | 10 | 1       | 50000  |\n| 2  | Siti  |                 | 11 | 1       | 75000  |\n| 3  | Joko  |                 | 12 | 2       | 30000  |\n+----+-------+                 +----+---------+--------+\n\nHasil INNER JOIN (Joko tidak muncul karena tidak punya order):\nBimo -> Order 10\nBimo -> Order 11\nSiti -> Order 12\n\nHasil LEFT JOIN (Joko tetap muncul dengan order NULL):\nBimo -> Order 10\nBimo -> Order 11\nSiti -> Order 12\nJoko -> NULL\n```\n\n---\n\n## 5. Pola Anti-Join (Mencari Data Tanpa Relasi)\n\nBagaimana cara mencari pelanggan yang **belum pernah memesan sama sekali**?\nGunakan pola **Anti-Join**: gabungkan dengan `LEFT JOIN`, lalu filter baris yang kolom kunci tabel kanannya bernilai `NULL`:\n```sql\nSELECT customers.name\nFROM customers\nLEFT JOIN orders ON customers.id = orders.customer_id\nWHERE orders.id IS NULL;\n```\n\n---\n\n## 6. Jebakan & Kesalahan Umum Pemula\n\n1. **Jebakan Filter `LEFT JOIN` di Klausa `WHERE`:**\n   Perhatikan kueri ini:\n   ```sql\n   SELECT u.name, o.id\n   FROM users u\n   LEFT JOIN orders o ON u.id = o.user_id\n   WHERE o.status = 'paid';\n   ```\n   Kondisi `WHERE o.status = 'paid'` akan membuang semua baris yang `o.status`-nya bernilai `NULL`! Tanpa disadari, kueri di atas berubah fungsi menjadi **INNER JOIN**. Jika ingin mempertahankan user yang tidak memiliki pesanan, pindahkan filternya ke dalam klausa `ON`:\n   ```sql\n   SELECT u.name, o.id\n   FROM users u\n   LEFT JOIN orders o ON u.id = o.user_id AND o.status = 'paid';\n   ```\n2. **Ambiguous Column Name:** Jika tabel `users` dan `orders` sama-sama memiliki kolom `id` atau `created_at`, menulis `SELECT id` akan memicu error. Selalu beri awalan tabel atau alias: `SELECT users.id, orders.id`.\n3. **Lupa Klausa `ON`:** Menulis `FROM users JOIN orders` tanpa klausul `ON` menghasilkan perkalian kartesian (*Cartesian Product*). Jika tabel users punya 10.000 baris dan orders punya 10.000 baris, database akan memproses 100.000.000 baris palsu yang dapat melumpuhkan server.\n\n---\n\n## 7. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Menampilkan rincian invoice (join pelanggan, item belanja, kurir pengiriman), otorisasi hak akses (join user, user_roles, roles), dan dasbor analitik bisnis.\n\n**Di Technical Interview & Code Review:**\n- Pertanyaan favorit: *\"Apa beda INNER JOIN dan LEFT JOIN? Kapan hasil LEFT JOIN bisa mendadak berubah menjadi INNER JOIN?\"*\n- Skenario live coding populer: *\"Tulis query untuk mencari produk yang tidak pernah terjual sama sekali dalam 30 hari terakhir.\"* (Diuji pemahaman Anti-Join)."
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
          "instruction": "Setiap pengguna sistem dapat memiliki profil akun pelengkap. Rancang tabel `profiles` dengan kolom `id` bertipe INT sebagai primary key, dan kolom `user_id` bertipe INT yang terikat sebagai foreign key ke tabel `users(id)`.",
          "starterCode": "-- Tulis query di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+TABLE\\s+profiles",
              "message": "Pembuatan tabel diawali `CREATE TABLE` diikuti nama tabelnya."
            },
            {
              "pattern": "id\\s+INT\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*id\\s*\\)",
              "message": "Tandai kolom identitasnya sebagai primary key. Boleh ditulis menempel di kolomnya, boleh juga sebagai baris tersendiri — keduanya diterima."
            },
            {
              "pattern": "user_id\\s+INT",
              "message": "Tambahkan kolom penunjuk ke tabel lain, bertipe sama dengan kolom yang ditunjuknya. Tipe yang berbeda (mis. `BIGINT` menunjuk `INT`) membuat constraint-nya ditolak."
            },
            {
              "pattern": "FOREIGN\\s+KEY\\s*\\(\\s*user_id\\s*\\)\\s*REFERENCES\\s+users\\s*\\(\\s*id\\s*\\)|user_id\\s+INT[^,\\n]*REFERENCES\\s+users\\s*\\(\\s*id\\s*\\)",
              "message": "Relasinya belum benar-benar dideklarasikan. Kolom penunjuk harus dikaitkan ke `users(id)` — boleh ditulis menempel di baris kolomnya, boleh sebagai baris `FOREIGN KEY (...)` tersendiri. Pastikan kolom yang dikaitkan memang kolom penunjuknya, bukan kolom identitas tabel ini."
            }
          ],
          "solution": "CREATE TABLE profiles (\n  id INT PRIMARY KEY,\n  user_id INT,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);",
          "susunKode": {
            "question": "Susun DDL SQL untuk membuat tabel profiles dengan foreign key user_id ke tabel users.",
            "potongan": [
              "CREATE TABLE profiles (",
              "\n  id INT PRIMARY KEY,",
              "\n  user_id INT,",
              "\n  FOREIGN KEY (user_id) REFERENCES users(id)",
              "\n);"
            ],
            "pengecoh": [
              "MAKE TABLE profiles (",
              "\n  FOREIGN KEY (id) REFERENCES users(id)",
              "\n  USER_KEY (user_id) REFERENCES users(id)"
            ],
            "pemisah": "",
            "explanation": "Pembuatan tabel relational dalam SQL menggunakan sintaks CREATE TABLE profiles (...) dengan menentukan tipe data kolom dan deklarasi FK berupa FOREIGN KEY (user_id) REFERENCES users(id). Pengecoh 'MAKE TABLE' dan 'USER_KEY' adalah bentuk sintaks fiktif yang sering membingungkan pembelajar."
          }
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
          "instruction": "Dasbor penjualan perlu menampilkan ID pesanan beserta nama pelanggan yang memesannya. Sambungkan tabel `orders` dan `users` menggunakan INNER JOIN berdasarkan kunci penghubung `user_id`, lalu tampilkan `orders.id` dan `users.name`.",
          "starterCode": "-- Tulis query INNER JOIN di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+\\w+\\.id\\s*,\\s*\\w+\\.name|SELECT\\s+\\w+\\.name\\s*,\\s*\\w+\\.id",
              "message": "Sebutkan kolom beserta tabel asalnya (`tabel.kolom`, atau `alias.kolom` kalau kamu memberi alias). Tanpa penyebutan itu, kolom bernama sama di dua tabel (`id`) membuat database menolak dengan error \"column reference is ambiguous\". Urutan kedua kolom bebas."
            },
            {
              "pattern": "FROM\\s+(orders\\s+(\\w+\\s+)?(INNER\\s+)?JOIN\\s+users|users\\s+(\\w+\\s+)?(INNER\\s+)?JOIN\\s+orders)",
              "message": "Sambungkan tabel pesanan dengan tabel pengguna memakai `JOIN`. Kata `INNER` boleh ditulis atau tidak — keduanya berarti sama. Urutan kedua tabel bebas."
            },
            {
              "pattern": "ON\\s+\\w+\\.user_id\\s*=\\s*\\w+\\.id|ON\\s+\\w+\\.id\\s*=\\s*\\w+\\.user_id",
              "message": "Setiap JOIN butuh aturan pasangannya lewat `ON`: foreign key di tabel pesanan dibandingkan dengan primary key di tabel pengguna. Sisi kiri dan kanan boleh ditukar."
            }
          ],
          "solution": "SELECT orders.id, users.name FROM orders INNER JOIN users ON orders.user_id = users.id;",
          "susunKode": {
            "question": "Susun query SQL INNER JOIN untuk menggabungkan tabel orders dan users.",
            "potongan": [
              "SELECT orders.id, users.name",
              "FROM orders",
              "INNER JOIN users",
              "ON orders.user_id = users.id;"
            ],
            "pengecoh": [
              "SELECT orders.id, users.email",
              "JOINING users",
              "ON orders.user_id == users.id;"
            ],
            "pemisah": " ",
            "explanation": "Penggabungan data antar tabel dilakukan menggunakan INNER JOIN diikuti kondisi relasi dengan ON orders.user_id = users.id. Menggantikan kata kunci JOIN dengan 'JOINING' atau mengganti kolom name dengan email merupakan jebakan kekeliruan sintaksis yang sering terjadi."
          }
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
          "instruction": "Tim pemasaran ingin melihat daftar semua pelanggan terdaftar beserta ID pesanannya, termasuk pengguna baru yang belum pernah belanja sekalipun. Gunakan LEFT JOIN antara `users` dan `orders` untuk menampilkan `users.name` dan `orders.id` tanpa menghilangkan pelanggan tanpa pesanan.",
          "starterCode": "-- Tulis query LEFT JOIN di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+[\\w]+\\.name|SELECT[^;]*\\b\\w+\\.name",
              "message": "Sebutkan kolom nama beserta tabel asalnya (`tabel.kolom` atau `alias.kolom`), karena kedua tabel punya kolom bernama sama."
            },
            {
              "pattern": "FROM\\s+users",
              "message": "Daftar yang harus UTUH ditulis sebagai tabel kiri — di sini tabel penggunanya, karena pengguna tanpa pesanan pun wajib muncul."
            },
            {
              "pattern": "LEFT\\s+(OUTER\\s+)?JOIN\\s+orders",
              "message": "Jenis JOIN yang mempertahankan seluruh baris tabel kiri adalah yang berawalan `LEFT`. Kata `OUTER` boleh ditulis atau tidak. `JOIN` biasa akan membuang pengguna yang belum punya pesanan."
            },
            {
              "pattern": "ON\\s+\\w+\\.id\\s*=\\s*\\w+\\.user_id|ON\\s+\\w+\\.user_id\\s*=\\s*\\w+\\.id",
              "message": "Setiap JOIN butuh aturan pasangannya lewat `ON`: primary key tabel pengguna dibandingkan dengan kolom penunjuk di tabel pesanan. Sisi kiri dan kanan boleh ditukar."
            }
          ],
          "solution": "SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;",
          "susunKode": {
            "question": "Susun query SQL LEFT JOIN untuk menampilkan semua pengguna beserta ID pesanannya.",
            "potongan": [
              "SELECT users.name, orders.id",
              "FROM users",
              "LEFT JOIN orders",
              "ON users.id = orders.user_id;"
            ],
            "pengecoh": [
              "RIGHT JOIN orders",
              "OUTER JOIN orders",
              "USING users.id = orders.user_id;"
            ],
            "pemisah": " ",
            "explanation": "Untuk mempertahankan seluruh baris dari tabel kiri (users) meskipun tidak memiliki pasangan di tabel kanan (orders), kita wajib menggunakan LEFT JOIN. Pengecoh 'RIGHT JOIN' akan membalik urutan tabel, sementara 'USING' digunakan hanya jika nama kolom sama di kedua tabel. Ini jebakan pemahaman join."
          }
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
              "pattern": "JOIN\\s+products",
              "message": "Sambungkan satu tabel lagi dengan menumpuk klausul `JOIN` baru di bawahnya."
            },
            {
              "pattern": "ON\\s+(orders\\.product_id\\s*=\\s*products\\.id|products\\.id\\s*=\\s*orders\\.product_id)",
              "message": "Pasangannya ditentukan lewat `ON`: kolom penghubung di tabel pesanan dibandingkan dengan primary key tabel produk. Urutan kiri-kanan bebas."
            }
          ],
          "solution": "SELECT orders.id, users.name, products.title\nFROM orders\nJOIN users ON orders.user_id = users.id\nJOIN products ON orders.product_id = products.id;",
          "susunKode": {
            "question": "Susun query SQL multi-JOIN untuk menghubungkan orders ke users dan products.",
            "potongan": [
              "SELECT orders.id, users.name, products.title\nFROM orders\nJOIN users ON orders.user_id = users.id",
              "\nJOIN products ON orders.product_id = products.id;"
            ],
            "pengecoh": [
              "\nLINK products ON orders.product_id = products.id;",
              "\nJOIN products WHERE orders.product_id = products.id;"
            ],
            "pemisah": "",
            "explanation": "Penggabungan lebih dari dua tabel dilakukan dengan menambahkan klausa JOIN berturut-turut beserta klausa ON masing-masing. Sintaks 'LINK' atau pengunaan 'WHERE' sebagai pengganti 'ON' adalah kesalahan umum yang menggoda."
          }
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
              "pattern": "LEFT\\s+(OUTER\\s+)?JOIN\\s+employees\\s+m",
              "message": "Sambungkan tabel itu dengan dirinya sendiri memakai alias kedua. Pilih jenis JOIN yang tetap memunculkan pegawai tanpa atasan — dengan JOIN biasa, direktur utama lenyap dari daftar."
            },
            {
              "pattern": "ON\\s+(e\\.manager_id\\s*=\\s*m\\.id|m\\.id\\s*=\\s*e\\.manager_id)",
              "message": "Aturan pasangannya: kolom atasan di sisi pegawai dibandingkan dengan primary key di sisi atasan. Sisi kiri dan kanan boleh ditukar."
            }
          ],
          "solution": "SELECT e.name AS pegawai, m.name AS atasan\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;",
          "susunKode": {
            "question": "Susun query self-join untuk menghubungkan tabel employees ke dirinya sendiri demi mencari nama atasan.",
            "potongan": [
              "SELECT e.name AS pegawai, m.name AS atasan\nFROM employees e",
              "\nLEFT JOIN employees m ON e.manager_id = m.id;"
            ],
            "pengecoh": [
              "\nJOIN employees m WHERE e.manager_id = m.id;",
              "\nSELF JOIN employees m ON e.manager_id = m.id;"
            ],
            "pemisah": "",
            "explanation": "Self-join dilakukan dengan menggabungkan tabel ke dirinya sendiri menggunakan alias (e dan m) serta klausa LEFT JOIN agar pegawai tanpa atasan tetap tampil. Katakunci 'SELF JOIN' tidak ada dalam standar SQL, melainkan konsep relasional yang sering membingungkan."
          }
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
              "pattern": "CREATE\\s+TABLE\\s+book_authors",
              "message": "Buat tabel perantaranya dengan `CREATE TABLE` diikuti namanya."
            },
            {
              "pattern": "book_id\\s+INT",
              "message": "Tabel perantara memuat kolom penunjuk ke tabel buku."
            },
            {
              "pattern": "author_id\\s+INT",
              "message": "Dan satu kolom penunjuk lagi ke tabel penulis — dua kolom inilah yang mewakili satu pasangan hubungan."
            },
            {
              "pattern": "FOREIGN\\s+KEY\\s*\\(\\s*book_id\\s*\\)\\s*REFERENCES\\s+books\\s*\\(\\s*id\\s*\\)|book_id\\s+INT[^,\\n]*REFERENCES\\s+books\\s*\\(\\s*id\\s*\\)",
              "message": "Kaitkan kolom bukunya ke `books(id)`. Bentuk menempel di baris kolom maupun baris `FOREIGN KEY (...)` tersendiri sama-sama diterima."
            },
            {
              "pattern": "FOREIGN\\s+KEY\\s*\\(\\s*author_id\\s*\\)\\s*REFERENCES\\s+authors\\s*\\(\\s*id\\s*\\)|author_id\\s+INT[^,\\n]*REFERENCES\\s+authors\\s*\\(\\s*id\\s*\\)",
              "message": "Kaitkan juga kolom penulisnya ke `authors(id)`. Tanpa kedua kaitan itu, tabel perantaramu hanya berisi angka yang tidak dijamin menunjuk ke mana pun."
            }
          ],
          "solution": "CREATE TABLE book_authors (\n  book_id INT,\n  author_id INT,\n  FOREIGN KEY (book_id) REFERENCES books(id),\n  FOREIGN KEY (author_id) REFERENCES authors(id)\n);",
          "susunKode": {
            "question": "Susun DDL tabel junction book_authors yang memiliki 2 foreign key.",
            "potongan": [
              "CREATE TABLE book_authors (",
              "\n  book_id INT,\n  author_id INT,",
              "\n  FOREIGN KEY (book_id) REFERENCES books(id),",
              "\n  FOREIGN KEY (author_id) REFERENCES authors(id)",
              "\n);"
            ],
            "pengecoh": [
              "\n  LINK (book_id) TO books(id),",
              "\n  FOREIGN KEY (author_id) IN authors(id)"
            ],
            "pemisah": "",
            "explanation": "Junction table memerlukan dua deklarasi FOREIGN KEY yang masing-masing menggunakan sintaks REFERENCES target_table(id). Pengecoh 'LINK ... TO' dan kata 'IN' menggoda pemula yang mengira SQL menggunakan frasa bahasa Inggris populer."
          }
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
              "pattern": "WHERE\\s+\\w+\\.id\\s+IS\\s+NULL",
              "message": "Penyaringnya memeriksa KEKOSONGAN kolom dari tabel kanan, dan pemeriksaan kosong tidak memakai `=` melainkan kata `IS`. Pilih kolom yang tidak mungkin kosong pada baris yang punya pasangan — primary key tabel kanan."
            },
            {
              "pattern": "orders\\.id|o\\.id",
              "message": "Arahkan pemeriksaannya ke primary key tabel pesanan. Kalau kamu memeriksa kolom yang memang boleh kosong (mis. `orders.note`), hasilnya bercampur antara pelanggan tanpa pesanan dan pesanan yang catatannya kebetulan kosong."
            }
          ],
          "solution": "SELECT customers.name\nFROM customers\nLEFT JOIN orders ON customers.id = orders.customer_id\nWHERE orders.id IS NULL;",
          "susunKode": {
            "question": "Susun query Anti-Join untuk menampilkan pelanggan yang tidak punya pesanan.",
            "potongan": [
              "SELECT customers.name\nFROM customers\nLEFT JOIN orders ON customers.id = orders.customer_id",
              "\nWHERE orders.id IS NULL;"
            ],
            "pengecoh": [
              "\nWHERE orders.id = NULL;",
              "\nHAVING orders.id IS NULL;"
            ],
            "pemisah": "",
            "explanation": "Teknik anti-join menggunakan LEFT JOIN memerlukan penyaring `WHERE orders.id IS NULL` untuk menemukan baris kiri tanpa pasangan. Pengecoh `orders.id = NULL` tidak akan pernah menghasilkan TRUE karena NULL tidak bisa dibandingkan dengan `=` dalam SQL. Ini jebakan pemahaman NULL."
          }
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
                "INNER JOIN hanya mengembalikan baris yang cocok di kedua tabel, sedangkan LEFT JOIN mempertahankan seluruh baris tabel kiri meski tidak ada pasangan",
                "INNER JOIN hanya bisa menggabungkan maksimal 2 tabel, sedangkan LEFT JOIN tidak terbatas",
                "LEFT JOIN secara otomatis mengurutkan hasil data dari kecil ke besar",
                "INNER JOIN mengunci tabel selama query berjalan, sedangkan LEFT JOIN tidak"
              ],
              "answerIndex": 1,
              "explanation": "LEFT JOIN mempertahankan seluruh baris tabel kiri dan mengisi NULL pada kolom kanan yang tidak berpasangan. Ini yang kamu pakai saat ingin 'semua pelanggan, beserta pesanannya kalau ada'. INNER JOIN akan diam-diam membuang pelanggan yang belum pernah memesan."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Tabel `orders` punya kolom `user_id` yang menunjuk ke kolom `id` di tabel `users`. Apa sebutan kolom itu, dan apa untungnya dideklarasikan resmi ke database?",
              "choices": [
                "Kondisi WHERE membuang baris yang bernilai NULL dari tabel kanan, sehingga secara tidak sengaja mengubah hasil menjadi setara INNER JOIN",
                "Database otomatis membatalkan eksekusi query karena pelanggaran sintaks ANSI SQL",
                "Semua baris tabel kiri otomatis digandakan sebanyak dua kali",
                "Query akan mengalami deadlock jika dijalankan di dalam transaksi"
              ],
              "answerIndex": 1,
              "explanation": "Kolom yang menunjuk ke primary key tabel lain disebut foreign key. Kalau dideklarasikan dengan FOREIGN KEY (user_id) REFERENCES users(id), database ikut menjaga integritas data: pesanan dengan user_id yang tidak ada akan ditolak, dan user yang masih punya pesanan tidak bisa dihapus sembarangan. Tanpa itu, data yatim bisa masuk tanpa ketahuan."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Laporan penjualan memakai `orders INNER JOIN users`. Ada 120 pesanan, 8 di antaranya dari akun tamu sehingga `user_id`-nya NULL. Berapa baris yang muncul di laporan?",
              "choices": [
                "Menghubungkan tabel ke dirinya sendiri (Self Join) untuk membandingkan baris pada tabel yang sama",
                "Membuat backup duplikat tabel secara otomatis",
                "Menggabungkan dua database yang berbeda pada satu server",
                "Membuat indeks sekunder otomatis pada foreign key"
              ],
              "answerIndex": 1,
              "explanation": "INNER JOIN hanya mengembalikan baris yang punya pasangan di KEDUA tabel, jadi 8 pesanan tamu itu hilang dari laporan tanpa peringatan apa pun dan angka penjualanmu jadi lebih kecil dari kenyataan. Kalau semua pesanan harus ikut, pakai LEFT JOIN dari orders."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Tim marketing minta daftar pelanggan yang BELUM PERNAH memesan sama sekali. Pola query mana yang tepat?",
              "choices": [
                "Tabel junction (penghubung) yang menyimpan pasangan foreign key dari kedua tabel entitas",
                "Menambahkan 10 kolom foreign key terpisah di tabel utama",
                "Menyimpan seluruh ID relasi dalam bentuk string teks dipisah tanda koma",
                "Menggunakan database NoSQL terpisah khusus untuk relasi tersebut"
              ],
              "answerIndex": 1,
              "explanation": "Polanya disebut anti-join: LEFT JOIN membawa semua pelanggan, lalu pelanggan tanpa pasangan pesanan akan berkolom NULL — itulah yang disaring dengan WHERE orders.id IS NULL. INNER JOIN mustahil dipakai di sini karena ia justru membuang pelanggan tanpa pesanan sejak awal."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Satu buku bisa ditulis banyak penulis, dan satu penulis bisa menulis banyak buku. Bagaimana relasi ini dimodelkan dengan benar?",
              "choices": [
                "Terjadi duplikasi baris tabel kiri karena satu baris kiri cocok dengan beberapa baris kanan (Cartesian multiplication pada relasi 1:N)",
                "Database otomatis menghapus baris yang memiliki nilai kembar",
                "Fungsi SUM() otomatis menghitung nilai baris yang bernilai NULL",
                "Hasil query mengalami pemotongan data akibat batas memori buffer"
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
          "body": "# Fungsi Agregasi, Grouping & Subquery\n\nDalam aplikasi nyata, manajemen dan analis bisnis tidak ingin membaca 1.000.000 baris transaksi satu per satu. Mereka membutuhkan ringkasan metrik: *Berapa total omzet bulan ini? Berapa rata-rata belanja per pengguna? Kategori mana yang paling laris?*\n\n---\n\n## 1. Pengertian Fungsi Agregasi & GROUP BY\n\nFungsi agregasi merangkum sekumpulan nilai menjadi satu nilai skalar tunggal:\n- `COUNT()`: Menghitung jumlah baris data.\n- `SUM()`: Menjumlahkan nilai kolom numerik.\n- `AVG()`: Menghitung nilai rata-rata (*average*).\n- `MIN()`: Mengambil nilai terendah / terkecil.\n- `MAX()`: Mengambil nilai tertinggi / terbesar.\n\nKlausa `GROUP BY` membagi baris data menjadi kelompok-kelompok berdasarkan nilai kolom tertentu, lalu fungsi agregasi dihitung untuk setiap kelompok tersebut.\n\n```sql\nSELECT status, COUNT(*) AS total_pesanan, SUM(amount) AS total_omzet\nFROM orders\nGROUP BY status;\n```\n\n---\n\n## 2. Perbedaan Fatal: COUNT(*) vs COUNT(kolom)\n\nIni adalah salah satu sumber perbedaan angka laporan keuangan yang paling sering terjadi di industri:\n\n| Ekspresi | Apa yang Dihitung? | Menghitung NULL? |\n|---|---|---|\n| `COUNT(*)` | Menghitung jumlah baris fisik keseluruhan | **YA**, baris tetap dihitung meskipun semua kolomnya NULL |\n| `COUNT(1)` | Identik dengan `COUNT(*)` secara performa dan hasil | **YA** |\n| `COUNT(kolom)` | Menghitung baris di mana nilai kolom tersebut **TIDAK NULL** | **TIDAK**, nilai `NULL` diabaikan dari hitungan |\n| `COUNT(DISTINCT kolom)` | Menghitung jumlah nilai unik yang tidak bernilai NULL | **TIDAK** |\n\n> **Kasus Nyata:** Jika tabel `orders` memiliki 100 baris, tetapi ada 20 pesanan yang tidak memiliki kupon diskon (`discount_code IS NULL`), maka `COUNT(*)` menghasilkan 100, sedangkan `COUNT(discount_code)` hanya menghasilkan 80!\n\n---\n\n## 3. Aturan Emas GROUP BY (The Golden Rule)\n\nStandar SQL modern (*SQL:2003 / ONLY_FULL_GROUP_BY*) menetapkan satu aturan ketat:\n> **Setiap kolom yang muncul di klausa `SELECT` WAJIB tercantum di dalam klausa `GROUP BY`, KECUALI jika kolom tersebut dibungkus oleh fungsi agregasi (`SUM`, `COUNT`, dsb).**\n\n```sql\n-- ❌ ERROR di PostgreSQL & MySQL 8:\nSELECT department_id, employee_name, MAX(salary)\nFROM employees\nGROUP BY department_id;\n```\n**Mengapa error?** Karena di satu departemen bisa terdapat 50 karyawan. Database tidak memiliki cara logis untuk menebak nama karyawan mana yang harus ditampilkan berdampingan dengan angka gaji tertinggi.\n\n---\n\n## 4. Perbedaan WHERE vs HAVING\n\nKeduanya berfungsi menyaring baris, namun bekerja pada fase eksekusi yang berbeda:\n\n| Fitur | Klausa `WHERE` | Klausa `HAVING` |\n|---|---|---|\n| **Kapan Dijalankan?** | Sebelum data dikelompokkan (`GROUP BY`) | Sesudah data dikelompokkan & dihitung agregatnya |\n| **Bisa Menyaring Agregasi?** | **TIDAK BISA** (akan memicu SyntaxError) | **BISA** (`HAVING COUNT(*) > 5`) |\n| **Efisiensi Performa** | Sangat efisien (membuang baris mentah lebih awal) | Mengevaluasi kelompok data yang sudah dihitung |\n\n```text\n+-------------------+      +--------------------+      +--------------------+\n| 100.000 Baris     | ---> | WHERE status='PAID'| ---> | 20.000 Baris Lolos |\n+-------------------+      +--------------------+      +--------------------+\n                                                                 |\n                                                                 v\n+-------------------+      +--------------------+      +--------------------+\n| Laporan Akhir     | <--- | HAVING total > 1jt | <--- | GROUP BY user_id   |\n+-------------------+      +--------------------+      +--------------------+\n```\n\n---\n\n## 5. Subquery & Common Table Expressions (CTE)\n\n### Subquery (Query di dalam Query)\n- **Subquery di `WHERE`:** Mencari data yang memenuhi kondisi dinamis:\n  ```sql\n  SELECT name, price FROM products WHERE price > (SELECT AVG(price) FROM products);\n  ```\n- **Subquery di `FROM` (Derived Table):** Memperlakukan hasil query sebagai tabel sementara (wajib diberi nama alias):\n  ```sql\n  SELECT AVG(total_order) FROM (SELECT user_id, COUNT(*) AS total_order FROM orders GROUP BY user_id) AS user_stats;\n  ```\n\n### Common Table Expression (CTE / Klausa `WITH`)\nCTE membuat kueri kompleks yang bertingkat menjadi rapi dan mudah dibaca dari atas ke bawah:\n```sql\nWITH TopSpenders AS (\n  SELECT user_id, SUM(amount) AS total_belanja\n  FROM orders\n  GROUP BY user_id\n  HAVING SUM(amount) > 5000000\n)\nSELECT u.name, u.email, ts.total_belanja\nFROM users u\nJOIN TopSpenders ts ON u.id = ts.user_id;\n```\n\n---\n\n## 6. Window Functions dalam Pelaporan Industri\n\nWindow function melakukan perhitungan pada sekumpulan baris yang berhubungan, **tanpa meringkas baris menjadi satu** (berbeda dengan `GROUP BY` yang menciutkan baris):\n\n```sql\n-- Memberi nomor urut transaksi per pelanggan:\nSELECT id, user_id, amount,\n       ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS urutan_pesanan,\n       SUM(amount) OVER (PARTITION BY user_id ORDER BY created_at) AS running_total\nFROM orders;\n```\n- `ROW_NUMBER()`: Memberi nomor urut unik 1, 2, 3...\n- `RANK()` / `DENSE_RANK()`: Memberi peringkat jika ada nilai kembar.\n- `LAG()` & `LEAD()`: Mengambil nilai baris sebelum atau sesudahnya (sangat krusial untuk menghitung pertumbuhan bulanan MoM).\n\n---\n\n## 7. Jebakan & Kesalahan Umum Pemula\n\n1. **Menaruh Filter Agregat di `WHERE`:** Menulis `WHERE COUNT(*) > 2` selalu menghasilkan error. Ingat: filter agregat selalu milik `HAVING`.\n2. **Performa Correlated Subquery:** Subquery yang merujuk pada tabel di kueri luar (*Correlated Subquery*) dieksekusi berulang kali untuk setiap baris data ($O(N \times M)$). Pada tabel besar, ubah menjadi operasi `JOIN` atau CTE agar dieksekusi secara optimal oleh database planner.\n3. **`AVG()` Mengabaikan NULL:** Jika nilai suatu baris adalah `NULL`, `AVG()` membaginya hanya dengan jumlah baris yang ada nilainya. Jika kamu ingin menganggap NULL sebagai nilai 0, bungkus kolom dengan `COALESCE(kolom, 0)`.\n\n---\n\n## 8. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Pembuatan dasbor KPI bisnis, laporan laba rugi bulanan, audit fraud transaksi, dan sistem rekomendasi berbasis data agregat.\n\n**Di Technical Interview:**\n- Soal klasik interview: *\"Temukan gaji tertinggi kedua (2nd highest salary) dari tabel karyawan.\"* (Bisa diselesaikan dengan subquery atau window function `DENSE_RANK()`).\n- Skenario arsitektur: *\"Kapan kita harus memakai CTE daripada subquery bertingkat?\"*"
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
          "instruction": "Laporan keuangan harian membutuhkan angka total perputaran uang. Hitung jumlah total nilai pembayaran dari kolom `amount` pada tabel `payments`, dan beri label kolom hasilnya sebagai `total`.",
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
          "solution": "SELECT SUM(amount) AS total FROM payments;",
          "susunKode": {
            "question": "Susun query SQL untuk menjumlahkan nilai kolom amount dengan alias total.",
            "potongan": [
              "SELECT SUM(amount) AS total",
              "FROM payments;"
            ],
            "pengecoh": [
              "SELECT TOTAL(amount) AS total",
              "FROM transactions;"
            ],
            "pemisah": " ",
            "explanation": "Fungsi agregat SQL untuk menjumlahkan nilai numerik kolom adalah SUM, bukan TOTAL. Penetapan alias kolom menggunakan kata kunci AS. Pengecoh 'TOTAL' sering menggoda pemula yang mengira SQL menggunakan istilah sehari-hari."
          }
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
          "instruction": "Manajer operasional ingin memantau persebaran status pesanan (pending, paid, cancelled). Kelompokkan tabel `orders` berdasarkan kolom `status`, lalu hitung jumlah total pesanan untuk masing-masing status tersebut.",
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
          "solution": "SELECT status, COUNT(*) FROM orders GROUP BY status;",
          "susunKode": {
            "question": "Susun query SQL pengelompokan pesanan berdasarkan status beserta jumlahnya.",
            "potongan": [
              "SELECT status,",
              "COUNT(*)",
              "FROM orders",
              "GROUP BY status;"
            ],
            "pengecoh": [
              "SUM(*)",
              "ORDER BY status;",
              "GROUP status"
            ],
            "pemisah": " ",
            "explanation": "Pengelompokkan data berdasarkan nilai kolom menggunakan klausa GROUP BY status dipadukan dengan fungsi hitung agregat COUNT(*). Menggantikan GROUP BY dengan 'ORDER BY' atau menggunakan 'SUM(*)' adalah kekeliruan konsep agregasi yang sering terjadi."
          }
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
          "instruction": "Kueri di editor sudah menghitung jumlah pesanan per status. Bagian logistik hanya ingin memantau status pesanan yang menumpuk banyak. Tambahkan penyaring agregasi yang hanya menyisakan kelompok status dengan jumlah pesanan lebih dari 5.",
          "starterCode": "SELECT status, COUNT(*) AS jumlah\nFROM orders\nGROUP BY status\n-- lengkapi di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "HAVING\\s+COUNT\\s*\\(\\s*\\*\\s*\\)\\s*>\\s*5",
              "message": "Syarat atas hasil agregasi ditulis di klausa yang berjalan SETELAH pengelompokan, bukan `WHERE`. Isinya fungsi pencacah yang sama seperti di `SELECT`, dibandingkan dengan angka batasnya — perhatikan \"lebih dari 5\" tidak menyertakan angka 5 itu sendiri."
            }
          ],
          "solution": "SELECT status, COUNT(*) AS jumlah\nFROM orders\nGROUP BY status\nHAVING COUNT(*) > 5;",
          "susunKode": {
            "question": "Susun klausa HAVING untuk memfilter hasil pengelompokan yang jumlahnya di atas 5.",
            "potongan": [
              "SELECT status, COUNT(*) AS jumlah\nFROM orders\nGROUP BY status",
              "\nHAVING COUNT(*) > 5;"
            ],
            "pengecoh": [
              "\nWHERE COUNT(*) > 5;",
              "\nFILTER COUNT(*) > 5;"
            ],
            "pemisah": "",
            "explanation": "Penyaringan hasil agregasi setelah GROUP BY wajib menggunakan klausa HAVING, bukan WHERE. Penggunaan klausa WHERE untuk menyaring nilai agregat seperti COUNT(*) adalah jebakan umum karena WHERE hanya memfilter baris sebelum agregasi."
          }
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
          "instruction": "Katalog ingin menandai produk-produk premium yang harganya di atas rata-rata harga seluruh produk di toko. Ambil `name` dan `price` dari tabel `products` yang harganya melebihi nilai rata-rata harga produk (gunakan subquery untuk menghitung rata-ratanya).",
          "starterCode": "SELECT name, price\nFROM products\n-- lengkapi penyaringnya di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WHERE\\s+price\\s*>\\s*\\(",
              "message": "Penyaringnya membandingkan harga dengan sebuah nilai yang harus dihitung dulu, jadi bagian kanannya berupa query lain di dalam tanda kurung."
            },
            {
              "pattern": "SELECT\\s+AVG\\s*\\(\\s*price\\s*\\)\\s+FROM\\s+products",
              "message": "Di dalam kurung itu, hitung rata-rata harga dari tabel yang sama. Fungsi rata-rata di SQL bernama `AVG` — bukan `MEAN` atau `AVERAGE` seperti di spreadsheet."
            }
          ],
          "solution": "SELECT name, price\nFROM products\nWHERE price > (SELECT AVG(price) FROM products);",
          "susunKode": {
            "question": "Susun query SQL dengan subquery untuk mencari produk di atas harga rata-rata.",
            "potongan": [
              "SELECT name, price\nFROM products\nWHERE price >",
              " (SELECT AVG(price) FROM products);"
            ],
            "pengecoh": [
              " (SELECT MEAN(price) FROM products);",
              " (SELECT AVERAGE(price) FROM products);"
            ],
            "pemisah": "",
            "explanation": "Subquery di dalam klausa WHERE menghitung rata-rata harga seluruh produk menggunakan fungsi agregat AVG, bukan MEAN atau AVERAGE. Pengecoh 'AVERAGE' sangat menggoda bagi yang biasa melihat rumus spreadsheet."
          }
        },
        {
          "kind": "step",
          "id": "sql-3-5",
          "title": "CTE (Common Table Expressions) dengan WITH",
          "explanation": "**CTE** (*Common Table Expression*) adalah hasil query yang diberi nama di awal dengan `WITH nama AS (...)`, lalu dipakai seperti tabel biasa di query utamanya. Fungsinya bukan menambah kemampuan baru — hampir semua CTE bisa ditulis sebagai subquery — melainkan **membuat query panjang bisa dibaca manusia**, karena tiap langkah punya nama. Dipakai saat analisis butuh beberapa tahap: cari dulu pelanggan besar, lalu gabungkan dengan datanya, lalu urutkan. Kelebihan lain: satu CTE bisa dipakai berkali-kali di query yang sama, dan CTE rekursif (`WITH RECURSIVE`) adalah satu-satunya cara wajar menelusuri struktur bertingkat seperti kategori induk-anak berlapis. Jebakan pertama: CTE hanya hidup selama satu perintah — ia bukan tabel sementara, dan tidak bisa dipakai di query berikutnya. Jebakan kedua: setiap CTE wajib dibungkus tanda kurung dan dipisah koma bila lebih dari satu; koma yang tertinggal sebelum `SELECT` utama adalah kesalahan sintaks paling sering di sini.",
          "example": {
            "code": "WITH pesanan_besar AS (\n  SELECT user_id, SUM(amount) AS belanja\n  FROM orders\n  GROUP BY user_id\n  HAVING SUM(amount) > 1000000\n)\nSELECT users.name, pesanan_besar.belanja\nFROM pesanan_besar\nJOIN users ON users.id = pesanan_besar.user_id;",
            "output": "    name    | belanja \n------------+---------\n Ana Rahma  | 1550000\n Citra Dewi | 1200000\n(2 rows)",
            "note": "CTE bukan tabel sungguhan: ia hidup hanya selama query ini berjalan. Nilainya ada pada keterbacaan — bagian penghitungan selesai lebih dulu di atas, lalu query utama tinggal memakainya seperti tabel biasa."
          },
          "instruction": "Program loyalitas ingin mendata pengguna prioritas yang akumulasi belanjanya di atas 1.000.000. Susun kueri bertahap memakai CTE bernama `HighSpenders` untuk mengagregasi `user_id` yang total belanjanya melebihi 1.000.000, lalu di kueri utama ambil data lengkap pengguna dari tabel `users` yang cocok dengan kelompok tersebut.",
          "starterCode": "-- Tulis query bertahap (CTE) di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WITH\\s+HighSpenders\\s+AS\\s*\\(",
              "message": "Blok sementara dibuka dengan `WITH <nama> AS (` lalu query di dalam kurung. Namanya harus persis seperti yang diminta soal, karena nama itulah yang dipanggil di query utama."
            },
            {
              "pattern": "GROUP\\s+BY\\s+user_id",
              "message": "Totalnya dihitung PER pengguna, jadi kelompokkan dulu barisnya berdasarkan kolom pemilik pesanan."
            },
            {
              "pattern": "HAVING\\s+SUM\\s*\\(\\s*amount\\s*\\)\\s*>\\s*1000000",
              "message": "Batas 1.000.000 diterapkan pada hasil penjumlahan, dan syarat atas hasil agregasi ditulis di `HAVING`, bukan `WHERE` — `WHERE` berjalan sebelum pengelompokan sehingga belum tahu totalnya."
            },
            {
              "pattern": "HighSpenders[\\s\\S]*HighSpenders",
              "message": "Nama bloknya harus muncul dua kali: sekali saat didefinisikan, sekali lagi saat dipakai di query utama. Kalau query utamanya kembali membaca `orders`, blok tadi mubazir."
            }
          ],
          "solution": "WITH HighSpenders AS (\n  SELECT user_id FROM orders GROUP BY user_id HAVING SUM(amount) > 1000000\n)\nSELECT * FROM users WHERE id IN (SELECT user_id FROM HighSpenders);",
          "susunKode": {
            "question": "Susun query bertahap yang lebih dulu menghitung total belanja per pengguna, lalu memakai hasilnya untuk mengambil data pengguna dari tabel `users`.",
            "potongan": [
              "WITH HighSpenders AS (",
              "  SELECT user_id FROM orders GROUP BY user_id HAVING SUM(amount) > 1000000",
              ")",
              "SELECT * FROM users WHERE id IN (SELECT user_id FROM HighSpenders);"
            ],
            "pengecoh": [
              "  SELECT user_id FROM orders GROUP BY user_id HAVING COUNT(*) > 1000000",
              "  SELECT user_id FROM orders WHERE SUM(amount) > 1000000",
              "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);"
            ],
            "pemisah": "\n",
            "explanation": "CTE dibuka dengan `WITH nama AS (` , diisi query penghitung, ditutup kurung, baru disusul query utama yang memakai namanya. Keping `HAVING COUNT(*)` menggoda karena bentuknya nyaris sama, tapi ia menghitung BANYAKNYA pesanan, bukan jumlah rupiahnya — pengguna dengan sejuta transaksi kecil ikut terjaring. Keping ber-`WHERE SUM(...)` adalah kekeliruan yang paling sering terjadi: `WHERE` dijalankan sebelum pengelompokan sehingga totalnya belum ada, dan PostgreSQL menolaknya dengan `aggregate functions are not allowed in WHERE`. Keping terakhir membaca ulang tabel `orders` di query utama sehingga blok yang sudah susah payah dibuat tidak terpakai sama sekali."
          }
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
          "instruction": "Sistem penilaian akademik perlu mengubah angka ujian menjadi predikat kelulusan. Tampilkan `name` dan `score` dari tabel `students`, serta tambahkan kolom kondisional bernama `status` yang bernilai 'Lulus' jika nilai minimal 75, dan 'Gagal' untuk nilai lainnya.",
          "starterCode": "-- Tambahkan kolom hasil bernama status di query ini\nSELECT name, score\nFROM students;\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CASE\\s+WHEN\\s+score\\s*>=\\s*75",
              "message": "Percabangan di dalam SELECT dibuka dengan `CASE WHEN` diikuti syaratnya. Perhatikan \"minimal 75\" berarti angka 75 ikut lulus, jadi pembandingnya bukan sekadar \"lebih besar\"."
            },
            {
              "pattern": "THEN\\s+['\"]Lulus['\"]",
              "message": "Nilai untuk kondisi yang terpenuhi ditulis setelah `THEN`, sebagai teks berpetik tunggal."
            },
            {
              "pattern": "ELSE\\s+['\"]Gagal['\"]",
              "message": "Sisanya ditangani `ELSE`. Tanpa `ELSE`, baris yang tidak memenuhi syarat mana pun bernilai `NULL` — bukan `'Gagal'` — dan itu jebakan yang sering lolos ke laporan."
            },
            {
              "pattern": "END\\s+AS\\s+status",
              "message": "Tutup percabangannya dengan `END`, lalu beri nama kolom hasilnya dengan `AS` sesuai yang diminta soal."
            }
          ],
          "solution": "SELECT name, score,\n  CASE WHEN score >= 75 THEN 'Lulus' ELSE 'Gagal' END AS status\nFROM students;",
          "susunKode": {
            "question": "Susun ekspresi CASE WHEN untuk menentukan status Lulus atau Gagal.",
            "potongan": [
              "SELECT name, score,\n  CASE WHEN score >= 75",
              "THEN 'Lulus'",
              "ELSE 'Gagal' END AS status\nFROM students;"
            ],
            "pengecoh": [
              "IF score >= 75",
              "= 'Lulus'",
              "ELSE NULL END AS status\nFROM students;"
            ],
            "pemisah": " ",
            "explanation": "Percabangan di dalam `SELECT` punya empat bagian tetap: `CASE WHEN <syarat>`, `THEN <nilai bila benar>`, `ELSE <nilai bila salah>`, lalu `END`. Keping `IF score >= 75` menggoda karena `IF` adalah kata yang paling kamu kenal dari bahasa pemrograman — MySQL memang punya fungsi `IF()`, tapi bentuk yang berjalan di semua database (dan satu-satunya yang dikenal PostgreSQL di sini) adalah `CASE WHEN`. Keping `= 'Lulus'` keliru memperlakukan percabangan sebagai pemberian nilai variabel. Keping `ELSE NULL` adalah jebakan yang paling sering lolos sampai ke laporan: bentuknya sah dan query berjalan tanpa error, tapi setiap siswa yang tidak lulus mendapat sel kosong alih-alih tulisan `Gagal` — dan kolom kosong di laporan hampir selalu dikira bug tampilan, bukan bug query."
          }
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
          "instruction": "Tampilan daftar mutasi pembayaran butuh penomoran baris berurut tanpa menghilangkan rincian tiap transaksi. Tampilkan `id` dan `amount` dari tabel `payments`, lalu gunakan window function untuk menambahkan kolom bernama `urutan` yang memberi nomor tiap baris terurut berdasarkan `id` secara menaik.",
          "starterCode": "-- Tambahkan kolom penomoran bernama urutan\nSELECT id, amount\nFROM payments;\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ROW_NUMBER\\s*\\(\\s*\\)",
              "message": "Penomoran baris memakai fungsi window bertanda kurung kosong. Bedanya dengan `RANK()`: `ROW_NUMBER()` selalu memberi nomor unik, sedangkan `RANK()` memberi nomor kembar untuk nilai yang sama."
            },
            {
              "pattern": "OVER\\s*\\(",
              "message": "Fungsi window selalu diikuti klausa `OVER (...)` — tanpa itu PostgreSQL menolak dengan `window function calls require an OVER clause`."
            },
            {
              "pattern": "ORDER\\s+BY\\s+id(\\s+ASC)?",
              "message": "Di dalam `OVER (...)`, tentukan dasar urutan nomornya: kolom id dari kecil ke besar. Kata `ASC` boleh ditulis atau tidak, karena itu memang urutan bawaan."
            },
            {
              "pattern": "AS\\s+urutan",
              "message": "Beri nama kolom hasilnya sesuai yang diminta soal dengan `AS`."
            }
          ],
          "solution": "SELECT id, amount,\n  ROW_NUMBER() OVER (ORDER BY id ASC) AS urutan\nFROM payments;",
          "susunKode": {
            "question": "Susun window function penomoran baris untuk memberi nomor urut baris.",
            "potongan": [
              "SELECT id, amount,\n  ROW_NUMBER() OVER",
              "(ORDER BY id ASC)",
              "AS urutan\nFROM payments;"
            ],
            "pengecoh": [
              "INDEX_NUMBER() OVER",
              "(SORT BY id ASC)",
              "RANK_NUMBER() OVER"
            ],
            "pemisah": " ",
            "explanation": "Window function untuk penomoran baris hasil secara berurutan adalah ROW_NUMBER() OVER (ORDER BY ...). Sintaks fiktif 'INDEX_NUMBER' atau 'RANK_NUMBER' serta kata 'SORT BY' adalah jebakan umum bagi pemula."
          }
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
                "WHERE menyaring baris sebelum pengelompokan data, sedangkan HAVING menyaring hasil kelompok setelah agregasi dihitung",
                "WHERE hanya bisa digunakan untuk teks, sedangkan HAVING hanya untuk angka",
                "HAVING dieksekusi lebih dulu oleh database engine dibanding WHERE",
                "Keduanya identik dan bisa saling menggantikan dalam semua kueri SQL"
              ],
              "answerIndex": 0,
              "explanation": "WHERE bekerja pada baris mentah sebelum dikelompokkan, sementara HAVING bekerja pada hasil kelompok. Karena itu kamu tidak bisa menulis WHERE COUNT(*) > 5 — pada saat WHERE dievaluasi, COUNT belum dihitung. Filter yang tidak melibatkan fungsi agregat sebaiknya tetap ditaruh di WHERE agar barisnya berkurang lebih dulu dan query lebih ringan."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Tabel `employees` punya 50 baris, tapi 12 karyawan belum mengisi kolom `phone` (NULL). Berapa hasil `COUNT(*)` dan `COUNT(phone)`?",
              "choices": [
                "Karena satu user_id bisa memiliki banyak order_date berbeda, sehingga database tidak tahu baris tanggal mana yang harus ditampilkan untuk satu baris agregat",
                "Karena fungsi SUM() hanya boleh dijalankan pada tabel yang tidak memiliki primary key",
                "Karena PostgreSQL dan MySQL melarang penggunaan klausa GROUP BY pada kolom integer",
                "Karena klausa ORDER BY wajib ditulis sebelum GROUP BY"
              ],
              "answerIndex": 1,
              "explanation": "COUNT(*) menghitung baris, sedangkan COUNT(kolom) hanya menghitung baris yang kolomnya TIDAK NULL. Perbedaan ini jadi sumber laporan yang salah: memakai COUNT(phone) untuk 'jumlah karyawan' diam-diam mengecualikan yang datanya belum lengkap. Fungsi agregat lain seperti AVG dan SUM juga mengabaikan NULL."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Query `SELECT kategori, nama, SUM(harga) FROM produk GROUP BY kategori;` ditolak PostgreSQL. Apa sebabnya?",
              "choices": [
                "COUNT(*) menghitung seluruh baris fisik termasuk yang NULL, sedangkan COUNT(kolom) mengabaikan baris di mana kolom tersebut NULL",
                "COUNT(*) berjalan jauh lebih lambat karena membaca seluruh kolom ke memori",
                "COUNT(kolom) otomatis membuang seluruh nilai duplikat pada tabel",
                "COUNT(*) hanya menghitung baris yang bernilai genap"
              ],
              "answerIndex": 1,
              "explanation": "Aturan emas GROUP BY: setiap kolom di SELECT harus berupa kolom pengelompok atau berada di dalam fungsi agregat. Satu kategori berisi banyak produk, jadi database tidak tahu nama mana yang harus ditampilkan. Solusinya: ikutkan nama ke GROUP BY, atau agregasi (misal MIN(nama)). MySQL versi lama menerima query ini dan diam-diam memilih nilai acak — sumber bug yang sulit dilacak."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu perlu mengambil pelanggan yang total belanjanya di atas rata-rata seluruh pelanggan. Struktur mana yang paling tepat dan mudah dibaca?",
              "choices": [
                "Membuat query kompleks lebih terstruktur dan mudah dibaca deklaratif dari atas ke bawah",
                "Otomatis mengompresi hasil kueri ke dalam format JSON",
                "Mencegah database server mengalami lonjakan penggunaan CPU",
                "Menghilangkan kebutuhan klausa WHERE pada kueri utama"
              ],
              "answerIndex": 1,
              "explanation": "CTE (WITH) memberi nama pada hasil antara sehingga query bertingkat tetap terbaca dari atas ke bawah, dan hasilnya selalu terbaru karena dihitung ulang setiap dijalankan. Menyalin angka manual membuat laporan basi begitu ada transaksi baru, dan 'separuh teratas' bukan definisi di atas rata-rata."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu ingin memberi nomor urut peringkat penjualan per wilayah, dan baris detail tiap transaksi tetap harus tampil. Fitur SQL apa yang tepat?",
              "choices": [
                "Window function menghitung agregasi baris per baris tanpa meringkas jumlah baris hasil, sedangkan GROUP BY menciutkan baris menjadi ringkasan kelompok",
                "Window function hanya bisa digunakan pada database SQLite",
                "GROUP BY tidak mendukung pengurutan dengan ORDER BY",
                "Window function otomatis menghapus baris yang memiliki nilai kembar"
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
          "body": "# Manipulasi Data (DML) & Transaksi Database (ACID)\n\nSelain membaca data dengan `SELECT`, sistem aplikasi backend bertanggung jawab memanipulasi data: membuat akun baru, mengubah status pembayaran, dan membatalkan pesanan.\n\n---\n\n## 1. Perintah Dasar DML (Data Manipulation Language)\n\n1. **`INSERT INTO` (Menambah Baris Data):**\n   ```sql\n   -- Satu baris:\n   INSERT INTO categories (name) VALUES ('Elektronik');\n\n   -- Multi-baris (Bulk Insert - Jauh lebih cepat):\n   INSERT INTO categories (name) VALUES ('Fashion'), ('Otomotif'), ('Kesehatan');\n   ```\n2. **`UPDATE` (Memperbarui Data):**\n   ```sql\n   UPDATE products SET price = 25000, updated_at = NOW() WHERE id = 1;\n   ```\n3. **`DELETE` vs `TRUNCATE` (Menghapus Data):**\n   - `DELETE FROM tabel WHERE kondisi;`: Menghapus baris tertentu satu per satu, mencatat perubahan di transaction log, dan bisa di-rollback.\n   - `TRUNCATE TABLE tabel;`: Mengosongkan seluruh tabel secara instan, mereset auto-increment sequence, dan jauh lebih efisien untuk reset data pengujian.\n\n> ⚠️ **HOROR PRODUKSI:** Menjalankan `UPDATE` atau `DELETE` **tanpa klausul `WHERE`** akan mengubah atau memusnahkan **seluruh data** di tabel tersebut! Selalu biasakan menulis `WHERE` terlebih dahulu sebelum menjalankan perintah.\n\n---\n\n## 2. Pola Soft Delete di Dunia Kerja\n\nDi industri modern (perbankan, e-commerce, sistem medis), hampir **tidak ada sistem yang melakukan hard delete** (`DELETE FROM`) untuk data pengguna atau pesanan karena alasan kepatuhan hukum dan audit trail.\n\nSebagai gantinya, industri menggunakan **Soft Delete**:\n```sql\n-- Menambahkan kolom penanda waktu penghapusan:\nALTER TABLE users ADD COLUMN deleted_at TIMESTAMP NULL;\n\n-- Saat user 'menghapus' akun:\nUPDATE users SET deleted_at = NOW() WHERE id = 42;\n\n-- Query aplikasi sehari-hari hanya membaca data yang belum dihapus:\nSELECT * FROM users WHERE deleted_at IS NULL;\n```\n\n---\n\n## 3. Transaksi & Prinsip ACID\n\n**Transaksi** adalah mekanisme untuk mengelompokkan serangkaian perintah SQL menjadi satu kesatuan unit kerja: **berhasil semua atau gagal semua**.\n\n```text\n+-------------------------------------------------------------------------------+\n|                        EMPAT PILAR PRINSIP ACID                               |\n+-------------------------------------------------------------------------------+\n| Atomicity    --> All or Nothing. Jika langkah ke-3 dari 4 perintah gagal,      |\n|                   seluruh perubahan langkah 1 dan 2 dibatalkan (ROLLBACK).    |\n| Consistency  --> Data selalu memenuhi aturan integritas, foreign key, dan     |\n|                   constraint unik sebelum dan sesudah transaksi.              |\n| Isolation    --> Transaksi konkuren yang berjalan paralel tidak saling intip  |\n|                   pekerjaan setengah jadi sebelum di-COMMIT.                  |\n| Durability   --> Begitu COMMIT sukses, perubahan tersimpan permanen di disk,  |\n|                   bahkan jika server listrik padam 1 milidetik kemudian.      |\n+-------------------------------------------------------------------------------+\n```\n\nContoh Blok Transaksi Perbankan:\n```sql\nBEGIN;\n\n-- 1. Kurangi saldo pengirim:\nUPDATE accounts SET balance = balance - 500000 WHERE id = 1 AND balance >= 500000;\n\n-- 2. Tambah saldo penerima:\nUPDATE accounts SET balance = balance + 500000 WHERE id = 2;\n\n-- Simpan permanen jika seluruh perintah berhasil:\nCOMMIT;\n\n-- Jika terjadi error atau kegagalan koneksi di tengah jalan:\n-- ROLLBACK;\n```\n\n---\n\n## 4. Bahaya Concurrency Race Condition (Overselling)\n\nBanyak pemula salah mengira bahwa membungkus kueri dengan `BEGIN ... COMMIT` otomatis mencegah bug rebutan saldo atau stok barang.\n\n**Skenario Race Condition (Flash Sale):**\n- Stok barang tersisa 1.\n- User A dan User B melakukan checkout di milidetik yang sama.\n- Backend membaca stok untuk User A: `stock = 1` (Lolos).\n- Backend membaca stok untuk User B: `stock = 1` (Lolos).\n- Kedua transaksi menjalankan `UPDATE items SET stock = stock - 1`.\n- Stok menjadi `-1`! Barang terjual dua kali (*Overselling*).\n\n**Dua Solusi Baku di Industri:**\n1. **Pessimistic Locking (`FOR UPDATE`):**\n   ```sql\n   SELECT stock FROM items WHERE id = 10 FOR UPDATE;\n   ```\n   Kueri ini memasang exclusive lock pada baris tersebut. Transaksi User B akan dipaksa menunggu hingga transaksi User A selesai melakukan `COMMIT`.\n2. **Atomic Conditional Update:**\n   ```sql\n   UPDATE items SET stock = stock - 1 WHERE id = 10 AND stock >= 1;\n   ```\n   Periksa jumlah baris yang terpengaruh (*affected rows*) di aplikasi backend. Jika bernilai 0, berarti stok sudah habis dan batalkan transaksi.\n\n---\n\n## 5. UPSERT & Klausul RETURNING\n\n- **UPSERT (Insert or Update on Conflict):**\n  ```sql\n  -- PostgreSQL:\n  INSERT INTO users (id, name, email) VALUES (1, 'Ana', 'ana@bilearn.id')\n  ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name;\n\n  -- MySQL:\n  INSERT INTO users (id, name, email) VALUES (1, 'Ana', 'ana@bilearn.id')\n  ON DUPLICATE KEY UPDATE name = VALUES(name);\n  ```\n- **Klausul `RETURNING` (PostgreSQL):**\n  Mengembalikan data baris yang baru saja dibuat atau diperbarui tanpa perlu memanggil `SELECT` tambahan:\n  ```sql\n  INSERT INTO orders (user_id, amount) VALUES (1, 150000) RETURNING id, created_at;\n  ```\n\n---\n\n## 6. Jebakan & Kesalahan Umum Pemula\n\n1. **Transaksi Menggantung (*Hanging Transaction*):** Membuka `BEGIN` di aplikasi backend tetapi lupa memanggil `COMMIT` atau `ROLLBACK` pada blok penanganan error (`catch`). Baris database akan terkunci selamanya dan membuat pengguna lain mengalami *timeout*.\n2. **Implicit Commit di MySQL:** Di MySQL, menjalankan perintah DDL seperti `CREATE TABLE` atau `ALTER TABLE` di dalam transaksi akan otomatis memicu `COMMIT` implisit secara diam-diam.\n3. **Mengira ROLLBACK Bisa Membatalkan COMMIT:** Begitu perintah `COMMIT` dijalankan, transaksi sudah selesai dan permanen. Tidak ada perintah SQL yang bisa membatalkannya kecuali pemulihan backup.\n\n---\n\n## 7. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Transfer dompet digital (GoPay/OVO), sistem checkout e-commerce, reservasi kursi bioskop/pesawat, dan modul inventaris gudang.\n\n**Di Technical Interview:**\n- *\"Jelaskan prinsip ACID dan bagaimana kamu mencegah race condition ketika dua user menekan tombol checkout bersamaan untuk barang yang tersisa 1 buah?\"*\n- *\"Apa perbedaan mendasar antara DELETE, TRUNCATE, dan DROP?\"*"
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
          "instruction": "Katalog baru saja membuka departemen perangkat elektronik. Tambahkan baris data baru ke tabel `categories` dengan nilai kolom `name` adalah 'Elektronik'.",
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
          "solution": "INSERT INTO categories (name) VALUES ('Elektronik');",
          "susunKode": {
            "question": "Susun perintah INSERT INTO SQL untuk menambahkan baris baru ke tabel categories.",
            "potongan": [
              "INSERT INTO categories",
              "(name)",
              "VALUES ('Elektronik');"
            ],
            "pengecoh": [
              "ADD TO categories",
              "(category_name)",
              "ENTRY ('Elektronik');"
            ],
            "pemisah": " ",
            "explanation": "Penyisipan data ke dalam tabel SQL menggunakan perintah INSERT INTO nama_tabel (kolom) VALUES (nilai). Mengganti nama kolom `name` menjadi `category_name` atau kata 'ADD TO'/'ENTRY' adalah bentuk kesalahan sintaksis yang sering menggoda pembelajar awal."
          }
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
          "instruction": "Harga barang dengan ID 1 mengalami penyesuaian tarif menjadi 20000. Perbarui kolom `price` pada tabel `products` untuk produk yang memiliki `id = 1` tanpa mengubah produk lainnya.",
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
          "solution": "UPDATE products SET price = 20000 WHERE id = 1;",
          "susunKode": {
            "question": "Susun perintah UPDATE SQL untuk mengedit harga produk dengan id tertentu.",
            "potongan": [
              "UPDATE products",
              "SET price = 20000",
              "WHERE id = 1;"
            ],
            "pengecoh": [
              "MODIFY products",
              "CHANGE price = 20000",
              "WHERE id == 1;"
            ],
            "pemisah": " ",
            "explanation": "Pengubahan data di SQL dilakukan dengan perintah UPDATE ... SET kolom = nilai WHERE kondisi. Kata 'MODIFY' atau 'CHANGE' serta pembandingan '==' merupakan jebakan kekeliruan sintaksis yang sering membingungkan."
          }
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
          "instruction": "Sistem audit membersihkan rekaman data usang sebelum pergantian tahun. Hapus seluruh rekaman dari tabel `logs` yang tanggal pembuatannya (`created_at`) tercatat sebelum tanggal '2024-01-01'.",
          "starterCode": "-- Tulis query DELETE di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "DELETE\\s+FROM\\s+logs",
              "message": "Penghapusan baris memakai `DELETE FROM` diikuti nama tabelnya."
            },
            {
              "pattern": "WHERE\\s+created_at\\s*<",
              "message": "WAJIB ada penyaring `WHERE` dengan pembanding \"lebih kecil dari\" pada kolom waktu — tanpa itu seluruh isi tabel terhapus. Kebiasaan yang menyelamatkan: jalankan dulu sebagai `SELECT` dengan syarat yang sama."
            },
            {
              "pattern": "2024-01-01",
              "message": "Sebutkan batas tanggalnya. Tanggal ditulis dalam format tahun-bulan-tanggal; format lokal seperti 01/01/2024 ditolak atau ditafsirkan salah tergantung setelan server."
            }
          ],
          "solution": "DELETE FROM logs WHERE created_at < '2024-01-01';",
          "susunKode": {
            "question": "Susun perintah DELETE FROM SQL untuk menghapus data berdasarkan kondisi tanggal.",
            "potongan": [
              "DELETE FROM logs",
              "WHERE created_at <",
              "'2024-01-01';"
            ],
            "pengecoh": [
              "REMOVE FROM logs",
              "DESTROY FROM logs",
              "WHERE created_at BEFORE"
            ],
            "pemisah": " ",
            "explanation": "Penghapusan baris data pada SQL menggunakan perintah DELETE FROM nama_tabel WHERE kondisi. Penggunaan kata 'REMOVE' atau 'DESTROY' adalah bentuk istilah fiktif yang sering mengelirukan pemula dalam mempelajari DML."
          }
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
          "instruction": "Skrip transfer dana mendeteksi saldo pengirim tidak mencukupi setelah pemotongan pertama dieksekusi. Batalkan seluruh perubahan yang belum tersimpan permanen pada blok transaksi aktif dengan perintah TCL yang sesuai.",
          "starterCode": "-- Transaksi terputus di tengah jalan; batalkan seluruh perubahannya:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "\\bROLLBACK\\b",
              "message": "Perintah yang kamu cari adalah kebalikan dari `COMMIT`: satu kata yang membuang semua perubahan sejak `BEGIN`."
            }
          ],
          "solution": "ROLLBACK;",
          "susunKode": {
            "question": "Susun perintah TCL untuk membatalkan transaksi.",
            "potongan": [
              "ROLLBACK",
              ";"
            ],
            "pengecoh": [
              "REVERT",
              "CANCEL",
              "UNDO"
            ],
            "pemisah": "",
            "explanation": "Membatalkan seluruh perubahan di dalam transaksi SQL wajib menggunakan perintah ROLLBACK;. Istilah seperti 'REVERT', 'CANCEL', atau 'UNDO' merupakan jebakan istilah dari version control atau aplikasi teks."
          }
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
          "instruction": "Implementasikan penarikan dana perbankan yang aman: buka transaksi dengan BEGIN, kurangi nilai kolom `balance` sebesar 500 pada tabel `accounts` untuk akun ber-`id = 1`, lalu kunci perubahan secara permanen dengan COMMIT.",
          "starterCode": "-- Mulai transaksi dan update balance\n",
          "language": "text",
          "tests": [
            {
              "pattern": "(BEGIN|START\\s+TRANSACTION)",
              "message": "Buka blok transaksi dengan `BEGIN` (atau `START TRANSACTION` di MySQL)."
            },
            {
              "pattern": "UPDATE\\s+accounts\\s+SET\\s+balance\\s*=\\s*balance\\s*-\\s*500\\s+WHERE\\s+id\\s*=\\s*1",
              "message": "Kurangi saldo dengan rumus `balance = balance - 500` dan pastikan klausul `WHERE id = 1` disertakan."
            },
            {
              "pattern": "COMMIT\\s*(;)?",
              "message": "Tutup blok transaksi dengan `COMMIT` untuk menyimpan perubahan permanen."
            }
          ],
          "solution": "BEGIN;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\nCOMMIT;",
          "susunKode": {
            "question": "Susun blok transaksi lengkap dari BEGIN, UPDATE, hingga COMMIT.",
            "potongan": [
              "BEGIN;\n",
              "UPDATE accounts SET balance = balance - 500 WHERE id = 1;\n",
              "COMMIT;"
            ],
            "pengecoh": [
              "OPEN TRANSACTION;\n",
              "FINISH;\n",
              "SAVE;"
            ],
            "pemisah": "",
            "explanation": "Transaksi dibuka, diisi perintah perubahan, lalu ditutup agar hasilnya permanen. Keping `OPEN TRANSACTION;` menggoda karena kata \"open\" terdengar paling masuk akal untuk membuka sesuatu, padahal yang dikenal SQL hanya `BEGIN;` atau `START TRANSACTION;`. Keping `FINISH;` dan `SAVE;` adalah tebakan yang sering muncul karena keduanya menggambarkan maksud kita dengan tepat — sayangnya penutup transaksi bernama `COMMIT`, dan salah kata di sini berarti transaksimu tidak pernah tertutup: barisnya tetap terkunci sampai koneksinya putus."
          }
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
          "instruction": "Skrip sinkronisasi akun harian sering gagal karena error duplikasi data email yang sudah terdaftar. Sisipkan pengguna bernama 'Ana' dengan email 'ana@test.com' ke tabel `users`, dan tambahkan klausa penanganan konflik PostgreSQL agar operasi dilewati tanpa error (`DO NOTHING`) jika terjadi bentrok pada kolom `email`.",
          "starterCode": "-- Skrip impor harian; kalau email sudah ada, jangan error\nINSERT INTO users (name, email) VALUES ('Ana', 'ana@test.com')\n-- lengkapi di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ON\\s+CONFLICT\\s*\\(\\s*email\\s*\\)",
              "message": "PostgreSQL menangani bentrok dengan klausa yang menyebut KOLOM penyebabnya di dalam tanda kurung. Kolom itu wajib punya constraint `UNIQUE` atau primary key — kalau tidak, perintahnya ditolak."
            },
            {
              "pattern": "DO\\s+NOTHING",
              "message": "Karena baris lama tidak boleh berubah, tindakannya adalah tidak melakukan apa-apa. (Pilihan satunya, `DO UPDATE SET ...`, justru menimpa baris lama.)"
            }
          ],
          "solution": "INSERT INTO users (name, email) VALUES ('Ana', 'ana@test.com')\nON CONFLICT (email) DO NOTHING;",
          "susunKode": {
            "question": "Susun penyisipan data PostgreSQL dengan penanganan bentrok ON CONFLICT DO NOTHING.",
            "potongan": [
              "INSERT INTO users (name, email) VALUES ('Ana', 'ana@test.com')",
              "\nON CONFLICT (email) DO NOTHING;"
            ],
            "pengecoh": [
              "\nON DUPLICATE IGNORE;",
              "\nIF EXISTS SKIP;"
            ],
            "pemisah": "",
            "explanation": "PostgreSQL menangani konflik pendaftaran kunci unik dengan klausa `ON CONFLICT (kolom) DO NOTHING;`. Sintaks 'ON DUPLICATE IGNORE' atau 'IF EXISTS SKIP' adalah jebakan paduan bahasa lain atau kata fiktif."
          }
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
          "instruction": "Setelah membuat tag artikel baru bernama 'Tech' di tabel `tags`, backend butuh ID dan metadata yang baru saja dibuat oleh database tanpa kueri SELECT kedua. Tulis perintah INSERT yang langsung mengembalikan seluruh baris data yang baru dibuat menggunakan klausul `RETURNING *`.",
          "starterCode": "-- Tulis RETURNING * di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "INSERT\\s+INTO\\s+tags",
              "message": "Mulai dengan penyisipan baris ke tabel yang diminta."
            },
            {
              "pattern": "VALUES\\s*\\(\\s*['\"]Tech['\"]\\s*\\)",
              "message": "Nilainya ditulis setelah `VALUES` di dalam kurung, dibungkus petik tunggal karena berupa teks."
            },
            {
              "pattern": "RETURNING\\s+\\*",
              "message": "Agar perintahnya mengembalikan barisnya sendiri (bukan sekadar jumlah baris), tambahkan klausa `RETURNING` di akhir. Tanda bintang mengambil semua kolom — di tabel berisi data sensitif, sebutkan kolomnya satu per satu."
            }
          ],
          "solution": "INSERT INTO tags (name) VALUES ('Tech') RETURNING *;",
          "susunKode": {
            "question": "Susun perintah INSERT dengan klausa RETURNING * pada PostgreSQL.",
            "potongan": [
              "INSERT INTO tags (name)",
              "VALUES ('Tech')",
              "RETURNING *;"
            ],
            "pengecoh": [
              "RETURN ALL;",
              "OUTPUT *;",
              "GET INSERTED;"
            ],
            "pemisah": " ",
            "explanation": "Untuk mengembalikan data hasil insert di PostgreSQL secara langsung, klausa yang tepat adalah `RETURNING *;`. Frasa fiktif seperti 'RETURN ALL' atau 'OUTPUT *' sering keliru dikira sebagai opsi bawaan SQL."
          }
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
                "Seluruh baris di tabel akan terupdate karena tanpa WHERE tidak ada batasan penyaringan",
                "Database akan otomatis menolak kueri dengan error missing where clause",
                "Hanya baris pertama yang akan diperbarui nilainya",
                "Database akan otomatis membatalkan kueri dan melakukan rollback"
              ],
              "answerIndex": 1,
              "explanation": "ROLLBACK mengembalikan kondisi database seperti sebelum transaksi dimulai. Selama belum COMMIT, perubahanmu hanya terlihat di sesi sendiri — inilah jaring pengaman saat kamu menjalankan UPDATE besar di production."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Kamu perlu mengosongkan tabel `logs` berisi 10 juta baris di server development. Apa perbedaan penting DELETE dan TRUNCATE di sini?",
              "choices": [
                "Atomicity (Semua berhasil atau semua dibatalkan sekaligus)",
                "Consistency",
                "Isolation",
                "Durability"
              ],
              "answerIndex": 1,
              "explanation": "DELETE menghapus baris satu per satu dan mencatat semuanya di log transaksi, sehingga lambat untuk tabel besar tapi bisa disaring dengan WHERE dan dibatalkan. TRUNCATE mengosongkan tabel sekaligus, jauh lebih cepat, mereset AUTO_INCREMENT, tapi tidak menerima WHERE. Keduanya berbeda dari DROP TABLE yang ikut menghapus struktur tabelnya."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu menjalankan `UPDATE users SET status = 'aktif';` di production dan lupa klausa WHERE. Apa yang terjadi dan apa kebiasaan yang mencegahnya?",
              "choices": [
                "TRUNCATE mengosongkan tabel secara instan pada level storage tanpa mencatat log per baris, sedangkan DELETE menghapus baris satu per satu dengan logging",
                "DELETE tidak bisa menggunakan klausa WHERE",
                "TRUNCATE hanya bisa digunakan pada tabel yang berukuran di bawah 10 MB",
                "Keduanya memiliki kecepatan dan cara kerja internal yang identik"
              ],
              "answerIndex": 1,
              "explanation": "UPDATE tanpa WHERE mengenai SEMUA baris dan tidak ada peringatan apa pun. Dua kebiasaan yang menyelamatkan: jalankan dulu SELECT dengan kondisi yang sama untuk melihat baris mana yang akan terkena, lalu bungkus perubahan dalam BEGIN ... COMMIT agar masih bisa ROLLBACK saat jumlah baris terpengaruh terlihat janggal."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Aplikasi menyimpan setelan pengguna: kalau barisnya sudah ada, perbarui; kalau belum, buat baru. Cara SQL mana yang paling aman dari race condition?",
              "choices": [
                "Mengembalikan data baris yang baru disisipkan atau diubah secara langsung tanpa perlu kueri SELECT tambahan",
                "Membatalkan seluruh perubahan jika terjadi galat tipe data",
                "Mengirimkan notifikasi webhook ke server aplikasi",
                "Membuat cadangan tabel otomatis ke skema public"
              ],
              "answerIndex": 1,
              "explanation": "Pola SELECT-lalu-putuskan punya celah waktu: dua request bersamaan bisa sama-sama melihat 'belum ada' lalu sama-sama INSERT sehingga terjadi error atau data ganda. UPSERT menyelesaikannya dalam satu perintah atomik yang dijaga oleh constraint unik. DELETE lalu INSERT juga berisiko karena data sempat hilang dan id-nya berubah."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Transfer saldo memotong 500 dari rekening A lalu menambahkannya ke rekening B. Server mati tepat setelah perintah pertama. Sifat ACID apa yang menjamin uang itu tidak menguap?",
              "choices": [
                "Menggunakan soft delete (menandai kolom deleted_at dengan waktu penghapusan) agar data historis dan audit trail tetap terjaga",
                "Menghapus baris fisik secara permanen menggunakan DELETE FROM",
                "Mengosongkan tabel setiap tengah malam menggunakan TRUNCATE",
                "Mengubah nilai primary key menjadi angka minus"
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
          "body": "# Desain Skema Database, Normalisasi & Performa Indexing\n\nDesain skema adalah cetak biru (*blueprint*) arsitektur data aplikasi. Skema yang dirancang buruk akan menimbulkan inkonsistensi data, anomali update, dan penurunan performa drastis saat pengguna bertambah banyak.\n\n---\n\n## 1. Aturan Normalisasi Database (1NF, 2NF, 3NF)\n\nNormalisasi adalah proses menstrukturkan tabel untuk meminimalkan redundansi (duplikasi) data dan mencegah anomali modifikasi.\n\n1. **First Normal Form (1NF) — Nilai Bersifat Atomik:**\n   - Setiap kolom hanya boleh menyimpan satu nilai tunggal (tidak boleh menyimpan daftar nilai dipisah koma seperti `hobi: 'baca, coding, renang'`).\n   - Setiap baris harus memiliki identitas unik (Primary Key).\n2. **Second Normal Form (2NF) — Dependensi Fungsional Penuh:**\n   - Harus sudah memenuhi 1NF.\n   - Semua kolom non-kunci harus bergantung sepenuhnya pada Primary Key utuh (tidak boleh bergantung hanya pada sebagian kunci komposit).\n3. **Third Normal Form (3NF) — Tidak Ada Dependensi Transitif:**\n   - Harus sudah memenuhi 2NF.\n   - Kolom non-kunci tidak boleh bergantung pada kolom non-kunci lainnya ($A \rightarrow B \rightarrow C$).\n   - *Contoh Pelanggaran:* Menyimpan `kota_id`, `nama_kota`, dan `provinsi` di tabel `orders`. Jika nama kota diubah, data lama di pesanan lain menjadi tidak sinkron. Pisahkan ke tabel `cities`.\n\n---\n\n## 2. Kapan Denormalisasi Masuk Akal?\n\nNormalisasi murni mengutamakan integritas tulis (*write-optimized*). Namun pada skala besar, query dengan 8-10 operasi JOIN untuk menampilkan satu halaman bisa menjadi sangat lambat.\n\n**Denormalisasi** adalah keputusan sadar menduplikasi sebagian data demi performa baca (*read-optimized*):\n- **Snapshot Data Historis:** Menyimpan `product_name` dan `unit_price` pada saat pembelian di tabel `order_items`. Ini wajib dilakukan agar ketika harga master produk naik bulan depan, riwayat belanja dan laporan keuangan masa lalu tidak ikut berubah!\n- **Counter Cache:** Menyimpan kolom `comments_count` di tabel `posts` agar tidak perlu melakukan `COUNT(*)` jutaan baris setiap kali artikel dibuka.\n\n---\n\n## 3. Standar Tipe Data Finansial & Uang\n\n> ⚠️ **HUKUM BAKU DATABASE FINANSIAL:**\n> **Dilarang keras menggunakan tipe data `FLOAT` atau `DOUBLE` untuk menyimpan uang atau saldo!**\n\nAngka floating point menggunakan representasi biner IEEE 754 yang memiliki galat presisi pecahan ($0.1 + 0.2 = 0.30000000000000004$). Di sistem keuangan, ini menyebabkan selisih pembukuan misterius.\n\n**Standar Baku Industri:**\n- Gunakan tipe data desimal presisi tetap: **`DECIMAL(15, 2)`** atau **`NUMERIC(15, 2)`**.\n- Atau simpan uang dalam pecahan terkecil (sen/rupiah) bertipe **`BIGINT`** (contoh: Rp 50.000 disimpan sebagai `5000000` sen).\n\n---\n\n## 4. Cara Kerja B-Tree Index (Akselerator Kueri)\n\nSecara default, database mencari data dengan memindai seluruh tabel dari baris pertama hingga terakhir (**Full Table Scan / Seq Scan**), dengan kompleksitas waktu $O(N)$.\n\n**B-Tree Index (Balanced Tree)** menyusun nilai kolom dalam struktur pohon berurut seimbang di disk. Pencarian data berubah dari $O(N)$ menjadi **$O(log N)$**:\n\n```text\n                  [ B-Tree Index: Kolom price ]\n                          [ 50.000 ]\n                         /          \\\n                [ 20.000 ]          [ 80.000 ]\n               /          \\        /          \\\n           [10.000]    [30.000] [70.000]    [90.000]\n```\nPada tabel 10.000.000 baris, pencarian tanpa indeks membutuhkan pemindaian 10 juta baris. Dengan B-tree indeks, database hanya membutuhkan sekitar 23 operasi lompatan!\n\n---\n\n## 5. Aturan Prefiks Kiri pada Composite Index (Leftmost Prefix Rule)\n\nJika kamu membuat indeks gabungan pada beberapa kolom:\n```sql\nCREATE INDEX idx_users_org_status_created ON users (org_id, status, created_at);\n```\n\nIndeks ini terorganisir berurutan dari kiri ke kanan:\n- `WHERE org_id = 5` $\rightarrow$ **Indeks Terpakai Efisien ✅**\n- `WHERE org_id = 5 AND status = 'active'` $\rightarrow$ **Indeks Terpakai Efisien ✅**\n- `WHERE org_id = 5 AND status = 'active' AND created_at >= '2026-01-01'` $\rightarrow$ **Indeks Terpakai Penuh ✅**\n- `WHERE status = 'active'` $\rightarrow$ **Indeks TIDAK BISA DIPAKAI ❌** (Melanggar aturan prefiks kiri).\n\n> **Urutan Baku Kolom Indeks:** Kolom filter kesetaraan (`=`) diletakkan di posisi paling kiri, diikuti kolom filter rentang (`>`, `<`, `BETWEEN`) atau kolom pengurutan (`ORDER BY`).\n\n---\n\n## 6. Konsep SARGability (Search Argument Able)\n\nBanyak engineer bingung kenapa kolom yang sudah diindeks tetap mengalami *Full Table Scan*. Penyebabnya adalah kueri yang **Non-SARGable** (membungkus kolom dengan fungsi):\n\n| Kueri Non-SARGable (Indeks Gagal ❌) | Kueri SARGable (Indeks Terpakai ✅) |\n|---|---|\n| `WHERE YEAR(created_at) = 2026` | `WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'` |\n| `WHERE LOWER(email) = 'ana@mail.com'` | `WHERE email = 'ana@mail.com'` (atau gunakan expression index) |\n| `WHERE name LIKE '%budi'` (wildcard di awal) | `WHERE name LIKE 'budi%'` (wildcard di akhir) |\n| `WHERE price + 5000 > 20000` | `WHERE price > 15000` |\n\n---\n\n## 7. Jebakan & Kesalahan Umum Pemula\n\n1. **Over-Indexing (Terlalu Banyak Indeks):** Setiap kali ada `INSERT`, `UPDATE`, atau `DELETE`, database harus memperbarui semua B-Tree indeks di tabel tersebut. Terlalu banyak indeks mempercepat baca tapi menghancurkan performa tulis.\n2. **Indeks pada Kolom Kardinalitas Rendah:** Membuat indeks B-tree pada kolom `gender` (hanya bernilai L/P) atau `is_active` (true/false) adalah pemborosan. Database optimizer hampir selalu memilih Full Table Scan karena selektivitasnya terlalu rendah.\n3. **Mengabaikan Constraint Database:** Mengandalkan validasi di kode backend saja tanpa memasang constraint `UNIQUE`, `NOT NULL`, atau `CHECK` di database adalah penyebab utama data korup di masa depan.\n\n---\n\n## 8. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Mendesain skema basis data fitur baru dari nol, mengoptimasi query yang masuk laporan slow query monitoring, dan arsitektur database skala tinggi.\n\n**Di Technical Interview:**\n- *\"Jelaskan konsep Leftmost Prefix Rule pada composite index!\"*\n- *\"Mengapa kueri `WHERE DATE(created_at) = '2026-05-01'` tidak bisa menggunakan B-Tree index dan bagaimana memperbaikinya?\"*"
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
          "instruction": "Agar tabel produk memenuhi normalisasi 3NF, pisahkan data kategori ke tabel tersendiri. Buat tabel `categories` dengan kolom `id` (INT PRIMARY KEY) dan kolom `name` (VARCHAR(50)).",
          "starterCode": "-- Tulis query pembuatan tabel 3NF di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+TABLE\\s+categories",
              "message": "Buat tabel terpisah untuk kategorinya dengan `CREATE TABLE`."
            },
            {
              "pattern": "id\\s+INT\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*id\\s*\\)",
              "message": "Beri kolom identitas yang dijadikan primary key — inilah yang nanti ditunjuk oleh tabel produk, menggantikan nama kategori yang ditulis berulang."
            },
            {
              "pattern": "name\\s+VARCHAR\\s*\\(\\s*50\\s*\\)",
              "message": "Kolom namanya bertipe teks berbatas panjang 50. Angka di dalam kurung adalah batas jumlah karakter, bukan jumlah byte penyimpanan yang dipesan."
            }
          ],
          "solution": "CREATE TABLE categories (\n  id INT PRIMARY KEY,\n  name VARCHAR(50)\n);",
          "susunKode": {
            "question": "Susun DDL SQL pembuatan tabel categories untuk normalisasi 3NF.",
            "potongan": [
              "CREATE TABLE categories (",
              "\n  id INT PRIMARY KEY,",
              "\n  name VARCHAR(50)",
              "\n);"
            ],
            "pengecoh": [
              "MAKE TABLE categories (",
              "\n  id INT MAIN KEY,",
              "\n  name TEXTFIELD(50)"
            ],
            "pemisah": "",
            "explanation": "DDL SQL pembuatan tabel kategori 3NF menggunakan `CREATE TABLE categories (...)` dengan tipe data INT PRIMARY KEY dan VARCHAR(50). Istilah 'MAKE TABLE', 'MAIN KEY', dan 'TEXTFIELD' adalah jebakan fiktif yang sering mengelabui pemula."
          }
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
          "instruction": "Dasbor performa analitik membaca data dari tabel pelaporan yang sudah didenormalisasi (`denormalized_sales`) agar tidak membebani server dengan JOIN jutaan baris pada jam sibuk. Ambil kolom `id`, `product_name`, dan `price` untuk produk yang memiliki nilai harga di atas 1000.",
          "starterCode": "-- Tulis query SELECT denormalisasi di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+id\\s*,\\s*product_name\\s*,\\s*price",
              "message": "Sebutkan ketiga kolom yang diminta, dipisah koma."
            },
            {
              "pattern": "FROM\\s+denormalized_sales",
              "message": "Ambil dari tabel laporan yang sudah didenormalisasi — namanya persis seperti di soal."
            },
            {
              "pattern": "WHERE\\s+price\\s*>\\s*1000",
              "message": "Tambahkan penyaring harga di atas seribu. Perhatikan: \"lebih dari\" tidak menyertakan angka batasnya sendiri."
            }
          ],
          "solution": "SELECT id, product_name, price FROM denormalized_sales WHERE price > 1000;",
          "susunKode": {
            "question": "Susun query SQL SELECT dari tabel denormalisasi denormalized_sales.",
            "potongan": [
              "SELECT id, product_name, price",
              "FROM denormalized_sales",
              "WHERE price > 1000;"
            ],
            "pengecoh": [
              "GET id, product_name, price",
              "FROM sales_denorm",
              "WHERE price OVER 1000;"
            ],
            "pemisah": " ",
            "explanation": "Query SQL membaca tabel denormalisasi menggunakan klausa SELECT ... FROM ... WHERE ... dengan pembandingan numerik `price > 1000`. Penggunaan kata 'GET' atau 'OVER' adalah bentuk kesalahan sintaksis yang sering membingungkan."
          }
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
          "instruction": "Sistem ulasan produk membutuhkan relasi banyak-ke-satu dengan katalog produk. Buat tabel `reviews` yang memiliki kolom `id` (INT PRIMARY KEY) dan kolom `product_id` (INT) yang bertindak sebagai FOREIGN KEY mereferensikan kolom `id` pada tabel `products`.",
          "starterCode": "-- Tulis query pembuatan tabel dengan FK di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+TABLE\\s+reviews",
              "message": "Buat tabelnya dengan `CREATE TABLE` diikuti namanya."
            },
            {
              "pattern": "id\\s+INT\\s+PRIMARY\\s+KEY|PRIMARY\\s+KEY\\s*\\(\\s*id\\s*\\)",
              "message": "Beri kolom identitas dan tandai sebagai primary key — boleh menempel di kolomnya, boleh sebagai baris tersendiri."
            },
            {
              "pattern": "product_id\\s+INT",
              "message": "Tambahkan kolom penunjuk ke tabel produk, bertipe sama dengan kolom yang ditunjuknya."
            },
            {
              "pattern": "FOREIGN\\s+KEY\\s*\\(\\s*product_id\\s*\\)\\s*REFERENCES\\s+products\\s*\\(\\s*id\\s*\\)|product_id\\s+INT[^,\\n]*REFERENCES\\s+products\\s*\\(\\s*id\\s*\\)",
              "message": "Garis relasi di diagram baru menjadi nyata kalau kolom penunjuknya dikaitkan ke `products(id)`. Bentuk menempel di baris kolom maupun baris `FOREIGN KEY (...)` tersendiri sama-sama diterima."
            }
          ],
          "solution": "CREATE TABLE reviews (\n  id INT PRIMARY KEY,\n  product_id INT,\n  FOREIGN KEY (product_id) REFERENCES products(id)\n);",
          "susunKode": {
            "question": "Susun DDL pembuatan tabel reviews dengan constraint FOREIGN KEY.",
            "potongan": [
              "CREATE TABLE reviews (",
              "\n  id INT PRIMARY KEY,\n  product_id INT,",
              "\n  FOREIGN KEY (product_id) REFERENCES products(id)",
              "\n);"
            ],
            "pengecoh": [
              "\n  LINK KEY (product_id) TO products(id)",
              "\n  FOREIGN KEY (product_id) IN products(id)"
            ],
            "pemisah": "",
            "explanation": "Penerapan referensi tabel lain menggunakan constraint `FOREIGN KEY (product_id) REFERENCES products(id)`. Penggunaan istilah fiktif 'LINK KEY' atau kata 'IN' adalah kesalahan yang kerap terjadi dan jebakan bagi pembelajar baru."
          }
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
          "instruction": "Untuk mencegah saldo rekening bernilai negatif di tingkat database, buat tabel `accounts` dengan kolom `balance` bertipe INT yang dilindungi oleh constraint `CHECK` agar nilainya selalu lebih besar atau sama dengan 0 (`balance >= 0`).",
          "starterCode": "-- Tulis CREATE TABLE CHECK di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+TABLE\\s+accounts",
              "message": "Buat tabelnya dengan `CREATE TABLE` diikuti namanya."
            },
            {
              "pattern": "balance\\s+INT",
              "message": "Sediakan kolom saldo bertipe angka bulat."
            },
            {
              "pattern": "CHECK\\s*\\(\\s*balance\\s*>=\\s*0\\s*\\)",
              "message": "Aturan nilainya dijaga dengan `CHECK (...)` berisi syarat yang harus selalu benar. Perhatikan tanda pembandingnya: saldo NOL harus tetap boleh, jadi bukan sekadar \"lebih besar dari nol\"."
            }
          ],
          "solution": "CREATE TABLE accounts (balance INT CHECK (balance >= 0));",
          "susunKode": {
            "question": "Susun DDL pembuatan tabel accounts dengan constraint CHECK pada balance.",
            "potongan": [
              "CREATE TABLE accounts",
              "(balance INT CHECK",
              "(balance >= 0));"
            ],
            "pengecoh": [
              "(balance INT VALIDATE",
              "(balance NONNEGATIVE));",
              "(balance > 0));"
            ],
            "pemisah": " ",
            "explanation": "Aturan nilai dipasang di dalam definisi tabel dengan `CHECK (...)`, dan syaratnya ditulis sebagai ekspresi yang harus selalu benar. Keping `VALIDATE` menggoda karena artinya persis menggambarkan maksud kita, tapi kata kunci yang dikenal SQL adalah `CHECK`. Keping `NONNEGATIVE` keliru dengan cara yang sama: SQL tidak punya kata sifat seperti itu, yang ada hanyalah ekspresi perbandingan biasa. Keping `> 0` paling menjebak karena hampir benar — ia menolak saldo nol, padahal rekening yang habis terpakai adalah keadaan yang sah, dan constraint seperti itu membuat penarikan saldo penuh gagal tanpa sebab yang jelas."
          }
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
          "instruction": "Pencarian pesanan berdasarkan pemilik akun sering mengalami Full Table Scan. Percepat kueri tersebut dengan membuat indeks B-Tree bernama `idx_orders_user_id` pada kolom `user_id` di tabel `orders`.",
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
          "solution": "CREATE INDEX idx_orders_user_id ON orders(user_id);",
          "susunKode": {
            "question": "Susun perintah CREATE INDEX idx_orders_user_id pada tabel orders.",
            "potongan": [
              "CREATE INDEX idx_orders_user_id",
              "ON orders(user_id);"
            ],
            "pengecoh": [
              "MAKE INDEX idx_orders_user_id",
              "FOR orders(user_id);",
              "IN orders(user_id);"
            ],
            "pemisah": " ",
            "explanation": "Pembuatan indeks database untuk mempercepat kueri menggunakan klausa `CREATE INDEX nama_indeks ON nama_tabel(nama_kolom);`. Pengecoh 'MAKE INDEX' dan 'FOR'/'IN' merupakan kekeliruan sintaks DDL yang jebakan."
          }
        },
        {
          "kind": "step",
          "id": "sql-5-6",
          "title": "Kapan Index Membantu & Memperlambat",
          "explanation": "Meskipun index sangat efektif mempercepat `SELECT`, menambah terlalu banyak index (*over-indexing*) memperlambat `INSERT`, `UPDATE`, dan `DELETE`, karena setiap index harus ikut diperbarui pada setiap perubahan baris. Yang menentukan berguna atau tidaknya sebuah index adalah **selektivitas**: berapa banyak baris yang tersisa setelah penyaringan. Kolom `created_at` pada laporan rentang tanggal menyisakan sebagian kecil baris, jadi index-nya terpakai; kolom seperti `status` yang isinya hanya dua-tiga nilai berbeda menyisakan hampir separuh tabel, dan optimizer justru memilih memindai seluruh tabel karena itu lebih murah daripada bolak-balik antara index dan tabel. Jebakan pemula adalah mengindeks setiap kolom yang muncul di `WHERE` tanpa melihat sebaran nilainya — index-nya terbentuk, memakan ruang, memperlambat tulis, dan tidak pernah dipakai. Untuk kolom berkardinalitas rendah, yang tepat justru *partial index* pada nilai yang jarang muncul.",
          "example": {
            "code": "CREATE INDEX idx_user_email ON users(email);\n\n-- lalu ukur dampaknya pada tulis:\nINSERT INTO users (name, email) VALUES ('Ana', 'ana@test.com');",
            "output": "CREATE INDEX\nTime: 128.402 ms\n\nINSERT 0 1\nTime: 1.740 ms      <-- tabel dengan 1 index\nTime: 4.902 ms      <-- tabel yang sama dengan 6 index",
            "note": "Setiap index harus ikut diperbarui pada setiap INSERT, UPDATE, dan DELETE. Itu sebabnya \"tambahkan index pada semua kolom\" adalah saran yang salah: baca menjadi cepat, tulis menjadi lambat."
          },
          "instruction": "Laporan berkala yang memfilter transaksi berdasarkan rentang tanggal mulai melambat karena tabel semakin besar. Buat indeks B-Tree bernama `idx_orders_created_at` pada kolom `created_at` di tabel `orders` agar pencarian rentang waktu bersifat selektif.",
          "starterCode": "-- Tulis query pembuatan index di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "CREATE\\s+INDEX\\s+idx_orders_created_at",
              "message": "Pembuatan index diawali `CREATE INDEX` diikuti NAMA index-nya, persis seperti yang diminta soal."
            },
            {
              "pattern": "ON\\s+orders\\s*\\(\\s*created_at\\s*\\)",
              "message": "Sebutkan tabel dan kolomnya dengan pola `ON <tabel>(<kolom>)`. Pilih kolom yang nilainya nyaris selalu berbeda tiap baris — itulah yang membuat index benar-benar menyempitkan pencarian."
            }
          ],
          "solution": "CREATE INDEX idx_orders_created_at ON orders(created_at);",
          "susunKode": {
            "question": "Susun pembuatan index untuk mempercepat laporan yang menyaring pesanan berdasarkan rentang tanggal.",
            "potongan": [
              "CREATE INDEX",
              "idx_orders_created_at",
              "ON orders(created_at);"
            ],
            "pengecoh": [
              "ON orders(status);",
              "MAKE INDEX",
              "ON orders;"
            ],
            "pemisah": " ",
            "explanation": "Index dibuat dengan `CREATE INDEX`, diberi nama, lalu ditunjuk tabel dan kolomnya. Keping `ON orders(status);` adalah jebakan utama step ini: bentuknya benar dan perintahnya sukses, tapi kolom yang isinya hanya beberapa nilai berulang menyisakan separuh tabel setelah disaring — optimizer mengabaikannya, sementara biaya tulisnya tetap kamu bayar di setiap INSERT. Keping `MAKE INDEX` memakai kata kerja yang terdengar wajar tapi tidak dikenal SQL. Keping `ON orders;` tanpa kolom sering terjadi karena terburu-buru; index selalu dibuat untuk kolom tertentu, bukan untuk tabel secara keseluruhan."
          }
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
          "instruction": "Sebelum melakukan deployment query baru ke produksi, kamu perlu memeriksa rencana eksekusi dan biaya kalkulasi query secara aktual. Jalankan analisis rencana eksekusi dengan EXPLAIN ANALYZE pada kueri `SELECT * FROM products`.",
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
          "solution": "EXPLAIN ANALYZE SELECT * FROM products;",
          "susunKode": {
            "question": "Susun perintah EXPLAIN ANALYZE untuk menganalisis eksekusi kueri.",
            "potongan": [
              "EXPLAIN ANALYZE",
              "SELECT * FROM products;"
            ],
            "pengecoh": [
              "SHOW PLAN FOR",
              "INSPECT ANALYZE",
              "EXPLAIN RUN"
            ],
            "pemisah": " ",
            "explanation": "Perintah profil kinerja kueri di database (seperti PostgreSQL) diawali dengan `EXPLAIN ANALYZE` sebelum query SELECT. Penggunaan 'SHOW PLAN FOR' atau 'INSPECT' merupakan bentuk istilah yang keliru dan jebakan."
          }
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
                "Memperlambat penulisan data (INSERT/UPDATE/DELETE) karena setiap indeks harus ikut diperbarui pada struktur pohonnya di disk",
                "Membatasi jumlah kolom yang boleh dibuat di tabel",
                "Menonaktifkan fitur transaksi ACID pada database",
                "Mengharuskan database di-restart setiap hari"
              ],
              "answerIndex": 2,
              "explanation": "Index mempercepat pembacaan tapi harus ikut diperbarui setiap kali data berubah, jadi tabel dengan belasan index akan terasa berat saat menulis. Index juga memakan ruang disk. Aturan praktisnya: pasang index berdasarkan query yang benar-benar sering dijalankan, lalu buktikan manfaatnya dengan EXPLAIN."
            },
            {
              "id": "q2",
              "type": "pilihan-ganda",
              "question": "Tabel `orders` menyimpan kolom `kota_id`, `kota_nama`, dan `kota_provinsi`. Aturan normalisasi mana yang dilanggar, dan kenapa itu berbahaya?",
              "choices": [
                "3NF — kota_nama dan kota_provinsi bergantung pada kota_id, bukan pada primary key pesanan, sehingga data kota terduplikasi dan bisa tidak sinkron",
                "1NF — kolom nama kota melanggar aturan atomik",
                "2NF — kolom kota_id tidak memiliki indeks unik",
                "Tidak melanggar aturan normalisasi apa pun"
              ],
              "answerIndex": 1,
              "explanation": "3NF melarang kolom yang bergantung pada kolom non-key (transitive dependency). Nama kota diulang di ribuan baris pesanan; saat sebuah kota berganti nama, kamu harus memperbarui semuanya dan satu baris terlewat sudah cukup membuat laporan tidak konsisten. Solusinya: simpan kota di tabelnya sendiri dan sisakan kota_id sebagai foreign key."
            },
            {
              "id": "q3",
              "type": "pilihan-ganda",
              "question": "Kamu ingin memastikan tidak ada dua akun dengan email sama, sekalipun ada bug di aplikasi. Apa yang harus dipasang di database?",
              "choices": [
                "Constraint UNIQUE pada kolom email",
                "Pemeriksaan if-else di kode JavaScript saja",
                "Membuat indeks B-Tree tanpa batasan unik",
                "Mengubah tipe data email menjadi INT"
              ],
              "answerIndex": 1,
              "explanation": "Constraint UNIQUE membuat database sendiri menolak baris kedua dengan email sama, apa pun jalur masuknya — form, API, atau query manual. Validasi aplikasi tetap perlu demi pesan error yang ramah, tapi ia bisa dilewati dan punya celah race condition. Index biasa hanya mempercepat pencarian tanpa mencegah duplikat."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kolom `created_at` sudah diindeks, tapi query `WHERE YEAR(created_at) = 2026` tetap lambat dan EXPLAIN menunjukkan full scan. Kenapa?",
              "choices": [
                "Karena kolom dibungkus fungsi, database harus menghitung YEAR() di setiap baris sehingga index tidak bisa dipakai",
                "Karena B-Tree index tidak bisa dibuat pada tipe data waktu",
                "Karena nilai tahun 2026 belum ada di dalam kalender database",
                "Karena fungsi YEAR() otomatis mengubah tipe data menjadi teks"
              ],
              "answerIndex": 1,
              "explanation": "Index menyimpan nilai kolom apa adanya dalam keadaan terurut. Begitu kolom dibungkus fungsi, nilai yang dicari tidak lagi cocok dengan yang tersimpan di index sehingga database terpaksa memindai seluruh tabel. Perbaikannya: ubah menjadi rentang — created_at >= '2026-01-01' AND created_at < '2027-01-01' — atau buat expression index khusus."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Kamu membuat index gabungan `(user_id, created_at)`. Query mana yang TIDAK bisa memanfaatkan index tersebut secara efisien?",
              "choices": [
                "WHERE created_at > '2026-01-01'",
                "WHERE user_id = 42",
                "WHERE user_id = 42 AND created_at > '2026-01-01'",
                "WHERE user_id = 42 ORDER BY created_at DESC"
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
          "body": "# Pengenalan & Fitur Khusus PostgreSQL\n\nPostgreSQL (sering disebut *Postgres*) adalah database relasional open-source paling canggih di dunia (*The World's Most Advanced Open Source Relational Database*). Postgres dikenal dengan kepatuhan standar SQL yang ketat, ekstensibilitas tinggi, dan dukungan tipe data modern.\n\n---\n\n## 1. Pengenalan CLI psql & Navigasi Sistem\n\nKetika terhubung ke server Postgres via terminal menggunakan `psql`, kamu menggunakan perintah meta khusus yang diawali tanda garis miring terbalik (`\\`):\n\n| Perintah `psql` | Deskripsi & Fungsi |\n|---|---|\n| `\\l` | Menampilkan daftar seluruh database (*list databases*) |\n| `\\c nama_db` | Berpindah koneksi ke database tertentu (*connect*) |\n| `\\dt` | Menampilkan daftar seluruh tabel (*display tables*) di skema aktif |\n| `\\d nama_tabel` | Menampilkan deskripsi struktur kolom, tipe data, dan indeks tabel |\n| `\\dn` | Menampilkan daftar skema (*schemas*) yang ada di database |\n| `\\du` | Menampilkan daftar seluruh user dan role beserta hak aksesnya |\n| `\\q` | Keluar dari aplikasi `psql` (*quit*) |\n\n---\n\n## 2. Tipe Data Modern di PostgreSQL\n\n### A. Tipe Data Array (`TEXT[]`, `INT[]`)\nPostgres memungkinkan kamu menyimpan array langsung di dalam satu kolom tanpa perlu tabel perantara tambahan:\n```sql\nCREATE TABLE articles (\n  id INT PRIMARY KEY,\n  title VARCHAR(200),\n  tags TEXT[]\n);\n\nINSERT INTO articles VALUES (1, 'Belajar SQL', ARRAY['database', 'backend', 'postgres']);\n\n-- Mencari artikel yang memiliki tag 'postgres':\nSELECT * FROM articles WHERE 'postgres' = ANY(tags);\n\n-- Operator contains (@>):\nSELECT * FROM articles WHERE tags @> ARRAY['backend'];\n```\n\n### B. Dokumen JSONB (Binary JSON)\nBerbeda dengan tipe JSON teks biasa, **`JSONB`** diurai ke dalam representasi biner saat disimpan. Keunggulannya: pemrosesan sangat cepat dan **mendukung indexing**!\n- Operator `->`: Mengambil field JSON sebagai objek JSON.\n- Operator `->>`: Mengambil field JSON langsung sebagai **string teks murni**.\n- Operator `@>`: Mengecek apakah dokumen JSON memuat struktur kunci-nilai tertentu.\n\n```sql\nSELECT payload->>'name' AS nama_user\nFROM event_logs\nWHERE payload @> '{\"role\": \"admin\"}';\n```\n\n### C. Kolom Identitas Modern (IDENTITY Column)\nGunakan `GENERATED ALWAYS AS IDENTITY` sesuai standar SQL:2003 alih-alih tipe `SERIAL` lama:\n```sql\nCREATE TABLE products (\n  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  name VARCHAR(100) NOT NULL\n);\n```\nAlasannya: `IDENTITY` mencegah pengisian manual ID secara tidak sengaja yang dapat merusak sinkronisasi sequence database.\n\n---\n\n## 3. Indeks GIN (Generalized Inverted Index)\n\nUntuk mengindeks dokumen JSONB, kolom array, atau pencarian teks panjang, B-Tree biasa tidak efektif. PostgreSQL menyediakan **GIN Index**:\n```sql\nCREATE INDEX idx_logs_payload ON event_logs USING gin (payload);\n```\nDengan indeks GIN, kueri pencarian dengan operator `@>` pada jutaan dokumen JSONB dapat berjalan dalam hitungan milidetik.\n\n---\n\n## 4. Full-Text Search PostgreSQL\n\nPostgreSQL memiliki mesin pencarian teks penuh (*Full-Text Search*) bawaan yang sangat mumpuni tanpa perlu memasang Elasticsearch untuk skala menengah:\n```sql\nSELECT title\nFROM articles\nWHERE to_tsvector('indonesian', body) @@ to_tsquery('indonesian', 'database & performa');\n```\n- `to_tsvector`: Mengurai teks menjadi token kata dasar (*lexeme*).\n- `to_tsquery`: Menentukan kata kunci dan operator logika pencarian (`&`, `|`, `!`).\n\n---\n\n## 5. Row Level Security (RLS) & Pemisahan Skema\n\n### Row Level Security (RLS)\nFitur unggulan Postgres yang menjadi fondasi keamanan platform seperti Supabase. RLS membatasi baris data mana yang boleh diakses pengguna langsung di tingkat mesin database:\n```sql\n-- Mengaktifkan RLS pada tabel dokumen:\nALTER TABLE documents ENABLE ROW LEVEL SECURITY;\n\n-- Membuat policy: user hanya boleh melihat dokumen miliknya sendiri:\nCREATE POLICY user_document_policy ON documents\n  FOR ALL\n  USING (owner_id = current_setting('app.current_user_id')::int);\n```\n\n### Pemisahan Skema (Schemas)\nSkema di PostgreSQL adalah namespace folder di dalam database untuk memisahkan domain atau modul data:\n```sql\nCREATE SCHEMA billing;\nCREATE TABLE billing.invoices (...);\n```\n\n---\n\n## 6. Jebakan & Kesalahan Umum Pemula\n\n1. **Jebakan Sequence Desinkronisasi:** Mengisi nilai kolom `id` secara manual pada tabel bertipe `SERIAL` menyebabkan sequence internal tidak bertambah. Saat ada `INSERT` berikutnya tanpa id, operasi akan gagal dengan error *\"duplicate key value violates unique constraint\"*. Gunakan `GENERATED ALWAYS AS IDENTITY`.\n2. **Menggunakan `->` Alih-Alih `->>` untuk Perbandingan:** Operator `->` mengembalikan tipe JSON (`\"admin\"` lengkap dengan petik JSON). Menulis `WHERE payload->'role' = 'admin'` akan selalu bernilai false karena `\"admin\"` tidak sama dengan string `admin`. Selalu gunakan `->>` jika ingin membandingkan nilai string.\n3. **Lupa Memberi Petik Ganda pada Huruf Kapital:** PostgreSQL secara otomatis mengubah semua nama tabel dan kolom menjadi huruf kecil, kecuali jika kamu membungkusnya dengan petik ganda (`\"CreatedAt\"`). Sebaiknya selalu gunakan konvensi `snake_case`.\n\n---\n\n## 7. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Menjadi pilihan utama stack teknologi modern (Node.js, Next.js, Django, Go, Elixir, Supabase) untuk sistem finansial, data analitik, dan multi-tenant SaaS.\n\n**Di Technical Interview:**\n- *\"Apa keunggulan JSONB dibanding tipe JSON biasa di PostgreSQL dan bagaimana cara mengindeksnya?\"*\n- *\"Jelaskan cara kerja Row Level Security (RLS) dalam arsitektur multi-tenant!\"*"
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
          "instruction": "Buka sesi terminal interaktif untuk mengelola PostgreSQL: tulis perintah CLI `psql` untuk terhubung ke database bernama 'aplikasi_db' menggunakan akun pengguna 'admin_user'.",
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
          "solution": "psql -U admin_user -d aplikasi_db",
          "susunKode": {
            "question": "Susun perintah CLI psql untuk masuk ke database PostgreSQL.",
            "potongan": [
              "psql",
              "-U admin_user",
              "-d aplikasi_db"
            ],
            "pengecoh": [
              "postgres",
              "-user admin_user",
              "--database aplikasi_db"
            ],
            "pemisah": " ",
            "explanation": "Koneksi psql via terminal menggunakan bendera `-U` untuk username dan `-d` untuk nama database. Penggunaan bendera panjang `-user` atau CLI 'postgres' adalah jebakan umum dari kebiasaan CLI lain yang sering membingungkan."
          }
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
          "instruction": "Tabel `events` memerlukan kunci utama yang tidak dapat ditebak secara berurutan oleh pengguna luar demi alasan keamanan. Definisikan kolom `id` bertipe UUID sebagai PRIMARY KEY dengan nilai default otomatis menggunakan fungsi `gen_random_uuid()`.",
          "starterCode": "-- Tulis definisi kolom id di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "id\\s+UUID",
              "message": "Kolomnya bertipe UUID — pengenal 128-bit yang tidak bisa ditebak berurutan, sehingga alamat `/users/1`, `/users/2` tidak bisa dijelajahi orang luar."
            },
            {
              "pattern": "PRIMARY\\s+KEY",
              "message": "Tandai sebagai primary key."
            },
            {
              "pattern": "DEFAULT\\s+gen_random_uuid\\s*\\(\\s*\\)",
              "message": "Nilai awalnya diisi otomatis oleh database lewat `DEFAULT` yang memanggil fungsi pembuat UUID acak bawaan PostgreSQL 13+ (tanpa perlu extension). Urutan penulisan `PRIMARY KEY` dan `DEFAULT` bebas."
            }
          ],
          "solution": "id UUID PRIMARY KEY DEFAULT gen_random_uuid()",
          "susunKode": {
            "question": "Susun definisi kolom id bertipe UUID dengan nilai default acak otomatis.",
            "potongan": [
              "id UUID",
              "PRIMARY KEY",
              "DEFAULT gen_random_uuid()"
            ],
            "pengecoh": [
              "id GUID",
              "AUTO_INCREMENT",
              "DEFAULT uuid_generate()"
            ],
            "pemisah": " ",
            "explanation": "Tipe data UUID bawaan PostgreSQL menggunakan default generator `gen_random_uuid()`. Pengecoh 'GUID', 'AUTO_INCREMENT' (milik MySQL), dan 'uuid_generate()' mengelirukan pemula secara jebakan dalam definisi kolom tabel."
          }
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
          "instruction": "Tabel audit `logs` menyimpan dokumen konfigurasi pada kolom JSONB bernama `payload`. Ekstrak nilai field `name` sebagai teks murni (gunakan operator `->>`) untuk baris data yang memiliki field `role` bernilai 'admin'.",
          "starterCode": "-- Tulis query JSONB di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "payload\\s*->>\\s*['\"]name['\"]",
              "message": "Ambil field namanya sebagai teks. Operator satu tanda `>` mengembalikan JSON — hasilnya masih berkutip (`\"Ana\"`) dan tidak sama dengan teks biasa."
            },
            {
              "pattern": "FROM\\s+logs",
              "message": "Tambahkan tabel sumbernya dengan `FROM`."
            },
            {
              "pattern": "WHERE\\s+payload\\s*->>\\s*['\"]role['\"]\\s*=\\s*['\"]admin['\"]",
              "message": "Penyaringnya juga harus mengeluarkan nilai dari bungkus JSON dulu, baru dibandingkan dengan teks berpetik tunggal. Kalau memakai operator JSON biasa, perbandingannya gagal diam-diam tanpa error dan hasilnya nol baris."
            }
          ],
          "solution": "SELECT payload->>'name' FROM logs WHERE payload->>'role' = 'admin';",
          "susunKode": {
            "question": "Susun query yang mengambil field `name` dari kolom JSONB `payload` sebagai teks, hanya untuk baris yang field `role`-nya bernilai `admin`.",
            "potongan": [
              "SELECT payload->>'name'",
              "FROM logs",
              "WHERE payload->>'role' = 'admin';"
            ],
            "pengecoh": [
              "SELECT payload->'name'",
              "WHERE payload->'role' = 'admin';",
              "WHERE payload.role = 'admin';"
            ],
            "pemisah": " ",
            "explanation": "Operator `->` mengembalikan nilai yang MASIH berbentuk JSON, sedangkan `->>` mengembalikan teks biasa. Keping ber-`->` menggoda karena bentuknya lebih pendek dan sekilas hasilnya terlihat sama di layar, padahal nilainya masih berkutip (`\"admin\"`), sehingga perbandingan dengan `'admin'` selalu bernilai salah — query berjalan mulus, hasilnya nol baris, dan tidak ada satu pun pesan error yang menunjukkan sebabnya. Keping `payload.role` adalah kekeliruan yang sering terbawa dari JavaScript: di SQL, titik berarti \"kolom milik tabel\", jadi PostgreSQL mencari tabel bernama `payload` dan berhenti dengan error."
          }
        },
        {
          "kind": "step",
          "id": "sql-6-4",
          "title": "Full-Text Search PostgreSQL (to_tsvector & to_tsquery)",
          "explanation": "Fitur Full-Text Search di PostgreSQL memungkinkan pencarian kata teks tingkat lanjut menggunakan fungsi `to_tsvector()` untuk mengindeks dokumen dan `to_tsquery()` untuk mencocokkan kata kunci. Sistem pencarian ini memahami variasi kata dasar (stemming) dan dapat diurutkan berdasarkan tingkat relevansi skor (`ts_rank`). Fitur ini dipakai untuk membuat kolom pencarian artikel atau produk tanpa perlu memasang search engine eksternal seperti Elasticsearch. Jebakan utamanya adalah tidak membuat GIN Index pada `to_tsvector()`, yang menyebabkan pencarian teks tetap melakukan scan tabel lambat.",
          "example": {
            "code": "SELECT id, title\nFROM articles\nWHERE to_tsvector('indonesian', title) @@ to_tsquery('kopi');",
            "output": " id |   title    \n----+------------\n  2 | Resep Kopi\n(1 row)",
            "note": "Yang cocok hanya baris yang KATA-nya benar-benar ada setelah dinormalkan, bukan sekadar mengandung potongan huruf — beda mendasar dengan `LIKE '%kopi%'`. Perhatikan juga argumen bahasa pada `to_tsvector`: kalau dokumen dinormalkan dengan aturan bahasa yang berbeda dari kata pencariannya, hasilnya bisa kosong tanpa satu pun pesan error."
          },
          "instruction": "Fitur pencarian artikel blog membutuhkan pencocokan teks penuh tanpa dependensi tool luar. Tampilkan `title` dari tabel `articles` menggunakan operator pencocokan teks `@@` dengan mencocokkan dokumen teks `to_tsvector(body)` terhadap kata kunci kueri `to_tsquery('database')`.",
          "starterCode": "SELECT title\nFROM articles\n-- lengkapi penyaringnya di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "to_tsvector\\s*\\([^)]*body",
              "message": "Kolom teksnya harus diubah dulu menjadi bentuk terindeks dengan `to_tsvector(...)`. Boleh menyertakan nama konfigurasi bahasa sebagai argumen pertama, boleh juga tidak."
            },
            {
              "pattern": "to_tsvector\\s*\\([^)]*\\)\\s*@@\\s*to_tsquery",
              "message": "Pencocokannya memakai operator khusus full-text search berupa dua karakter `@`, ditulis di antara hasil `to_tsvector` dan `to_tsquery`. Operator `=` atau `LIKE` tidak mengerti bentuk terindeks ini."
            },
            {
              "pattern": "to_tsquery\\s*\\(\\s*['\"]database['\"]\\s*\\)",
              "message": "Kata yang dicari dibungkus `to_tsquery('...')` supaya ikut melewati proses penormalan kata yang sama dengan dokumennya."
            }
          ],
          "solution": "SELECT title\nFROM articles\nWHERE to_tsvector(body) @@ to_tsquery('database');",
          "susunKode": {
            "question": "Susun query Full-Text Search PostgreSQL dengan to_tsvector, operator @@, dan to_tsquery.",
            "potongan": [
              "SELECT title\nFROM articles\nWHERE",
              "to_tsvector(body)",
              "@@ to_tsquery('database');"
            ],
            "pengecoh": [
              "to_tsvector(body) MATCH",
              "LIKE to_tsquery('database');",
              "to_tsvector(body) =="
            ],
            "pemisah": " ",
            "explanation": "Pencarian teks penuh (Full-Text Search) PostgreSQL menggunakan operator `@@` untuk mencocokkan hasil `to_tsvector()` dan `to_tsquery()`. Penggunaan 'LIKE' atau 'MATCH' adalah jebakan kueri string biasa yang sering mengelirukan pembelajar."
          }
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
          "instruction": "Sesuai standar SQL modern pada PostgreSQL 16+, rancang kolom identitas nomor urut otomatis yang aman dari intervensi manual: definisikan kolom `id` bertipe INT dengan atribut `GENERATED ALWAYS AS IDENTITY` sebagai PRIMARY KEY.",
          "starterCode": "-- Tulis kolom IDENTITY di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "id\\s+INT(EGER)?\\b",
              "message": "Kolomnya bertipe bilangan bulat. `INT` dan `INTEGER` sama-sama diterima."
            },
            {
              "pattern": "GENERATED\\s+ALWAYS\\s+AS\\s+IDENTITY",
              "message": "Penomoran otomatis versi standar SQL ditulis dengan tiga kata kunci berurutan lalu kata `IDENTITY`. Ini pengganti `SERIAL` yang lama, dan `AUTO_INCREMENT` adalah milik MySQL."
            },
            {
              "pattern": "PRIMARY\\s+KEY",
              "message": "Tandai juga sebagai primary key. Urutan penulisannya terhadap klausa penomoran otomatis bebas."
            }
          ],
          "solution": "id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY",
          "susunKode": {
            "question": "Susun definisi kolom identity PostgreSQL GENERATED ALWAYS AS IDENTITY.",
            "potongan": [
              "id INT",
              "GENERATED ALWAYS AS IDENTITY",
              "PRIMARY KEY"
            ],
            "pengecoh": [
              "GENERATED BY DEFAULT AS AUTO",
              "AUTO_INCREMENT",
              "IDENTITY(1,1)"
            ],
            "pemisah": " ",
            "explanation": "Fitur standar ANSI SQL yang didukung PostgreSQL modern untuk nomor otomatis adalah `GENERATED ALWAYS AS IDENTITY`. Pengecoh 'AUTO_INCREMENT' (MySQL) atau 'IDENTITY(1,1)' (SQL Server) adalah jebakan khas."
          }
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
          "instruction": "Layanan pelaporan analitik hanya membutuhkan akses baca dan pencatatan log baru pada data pesanan. Terapkan prinsip least-privilege dengan memberikan izin hak akses SELECT dan INSERT pada tabel `orders` kepada pengguna 'app_reporter'.",
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
          "solution": "GRANT SELECT, INSERT ON orders TO app_reporter;",
          "susunKode": {
            "question": "Susun perintah DCL GRANT hak akses SELECT dan INSERT di PostgreSQL.",
            "potongan": [
              "GRANT SELECT, INSERT",
              "ON orders",
              "TO app_reporter;"
            ],
            "pengecoh": [
              "ALLOW SELECT, INSERT",
              "FOR orders",
              "WITH app_reporter;"
            ],
            "pemisah": " ",
            "explanation": "Pemberian hak akses tabel pada PostgreSQL menggunakan sintaks `GRANT hak_akses ON nama_tabel TO nama_role;`. Perintah fiktif 'ALLOW' atau kata 'WITH' menggantikan 'TO' merupakan kekeliruan sintaks DCL yang sering membingungkan."
          }
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
                "@>"
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
                "Karena JSON biasa tidak mengizinkan penulisan angka desimal atau teks panjang",
                "Karena JSONB secara otomatis membuat tabel terpisah untuk setiap kunci JSON",
                "Karena PostgreSQL menghapus format JSON biasa di versi terbarunya"
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
                "\\du"
              ],
              "answerIndex": 0,
              "explanation": "\\dt (display tables) menampilkan seluruh daftar tabel pada schema aktif."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Kamu membuat tabel baru di PostgreSQL 18 dan butuh kolom id yang naik otomatis. Mana yang direkomendasikan sekarang, dan kenapa?",
              "choices": [
                "GENERATED ALWAYS AS IDENTITY, karena sesuai standar SQL dan mencegah id diisi manual sehingga sequence tidak jadi tidak sinkron",
                "SERIAL, karena tipe SERIAL tidak membutuhkan memori disk sama sekali",
                "Kolom VARCHAR acak, agar tidak ada batasan jumlah baris",
                "Membuat sequence manual tanpa mengikatnya ke kolom tabel"
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
                "Menulis kondisi filter tenant_id secara manual di setiap kueri aplikasi",
                "Membuat database server fisik terpisah untuk setiap tenant pengguna",
                "Mengenkripsi seluruh baris data menggunakan kunci AES"
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
          "body": "# Pengenalan & Fitur Khusus MySQL\n\nMySQL adalah sistem manajemen basis data relasional paling populer di dunia web, menjadi tulang punggung platform seperti WordPress, Wikipedia, Shopify, dan ekosistem framework PHP/Laravel.\n\n---\n\n## 1. Pengenalan CLI mysql & Storage Engine\n\nKetika mengelola MySQL via terminal, kamu menggunakan kueri SQL dan perintah navigasi:\n\n| Perintah CLI | Fungsi |\n|---|---|\n| `SHOW DATABASES;` | Menampilkan seluruh database di server MySQL |\n| `USE nama_database;` | Memilih database aktif yang ingin dikelola |\n| `SHOW TABLES;` | Menampilkan daftar seluruh tabel di database aktif |\n| `DESCRIBE nama_tabel;` | Menampilkan struktur kolom, tipe data, dan kunci tabel |\n| `SHOW CREATE TABLE tabel;` | Menampilkan kueri DDL asli pembuatan tabel |\n\n### Storage Engine: Mengapa InnoDB Menggantikan MyISAM?\nMySQL memiliki arsitektur *pluggable storage engine*. Dahulu mesin default-nya adalah **MyISAM**, namun sekarang seluruh dunia industri beralih ke **InnoDB**:\n- **InnoDB (Standar Modern):** Mendukung penuh transaksi ACID, row-level locking, foreign key constraints, dan fitur pemulihan otomatis dari crash (*crash recovery*).\n- **MyISAM (Usang/Ditinggalkan):** Tidak mendukung transaksi dan hanya mengunci seluruh tabel (*table-level locking*) saat ada penulisan data.\n\n---\n\n## 2. Magnet Bug Karakter: Charset utf8 vs utf8mb4\n\nIni adalah salah satu jebakan paling terkenal di MySQL:\n- Di MySQL versi lama, charset bernama `utf8` **hanya mendukung maksimal 3 byte per karakter**.\n- Namun karakter emoji modern (😊, 🚀) dan karakter aksara Mandarin/Jepang membutuhkan **4 byte** UTF-8.\n- Jika pengguna memasukkan emoji ke tabel ber-charset `utf8`, MySQL akan melempar error *\"Incorrect string value\"* atau memotong teks secara diam-diam.\n\n> **STANDAR WAJIB:** Selalu buat database dan tabel MySQL menggunakan **`utf8mb4`** dengan collation **`utf8mb4_unicode_ci`** atau **`utf8mb4_0900_ai_ci`** (MySQL 8+).\n\n```sql\nALTER TABLE comments CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n```\n\n---\n\n## 3. Tipe Tanggal: DATETIME vs TIMESTAMP\n\n| Karakteristik | `DATETIME` | `TIMESTAMP` |\n|---|---|---|\n| **Rentang Waktu** | `1000-01-01` s/d `9999-12-31` | `1970-01-01` s/d `2038-01-19` (Masalah Tahun 2038) |\n| **Zona Waktu (Timezone)** | Disimpan statis apa adanya tanpa konversi | Dikonversi otomatis ke **UTC** saat disimpan, dan dikonversi balik ke timezone koneksi saat dibaca |\n| **Ukuran Disk** | 5 byte (di MySQL 5.6+) | 4 byte |\n\n---\n\n## 4. Tipe Data JSON di MySQL & Generated Columns\n\nMySQL 5.7+ dan MySQL 8 mendukung tipe data JSON asli. Namun, kamu tidak bisa membuat indeks B-Tree langsung pada kolom JSON. Solusi elegan di MySQL adalah menggunakan **Generated Column (Virtual / Stored Column)**:\n\n```sql\n-- Membuat tabel dengan kolom JSON:\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  profile JSON\n);\n\n-- Menambahkan kolom virtual yang mengekstrak nilai JSON lalu diindeks:\nALTER TABLE users ADD COLUMN city VARCHAR(50)\n  AS (profile->>'$.address.city') STORED;\n\nCREATE INDEX idx_user_city ON users (city);\n```\n\n---\n\n## 5. Manajemen User & Hak Akses MySQL\n\nDi MySQL, identitas user ditentukan oleh kombinasi nama user dan **host asal koneksi**:\n- `'app_user'@'localhost'`: Hanya bisa login dari mesin server lokal.\n- `'app_user'@'%'`: Bisa login dari sembarang alamat IP jaringan.\n\n```sql\n-- Membuat user aplikasi baru:\nCREATE USER 'app_backend'@'%' IDENTIFIED BY 'PasswordRahasia123!';\n\n-- Memberikan hak akses khusus DML (Prinsip Least Privilege):\nGRANT SELECT, INSERT, UPDATE, DELETE ON production_db.* TO 'app_backend'@'%';\n\n-- Menerapkan perubahan izin:\nFLUSH PRIVILEGES;\n```\n\n---\n\n## 6. Mode Ketat: sql_mode & STRICT_TRANS_TABLES\n\nPada hosting MySQL versi lama, memasukkan tanggal tidak valid `'0000-00-00'` atau teks yang melebihi batas panjang kolom diterima begitu saja tanpa error (MySQL hanya memotong teks dan memberi peringatan).\n\nDi lingkungan produksi modern, pastikan **`sql_mode`** mengaktifkan **`STRICT_TRANS_TABLES`** agar data tidak valid langsung melempar error dan membatalkan transaksi.\n\n---\n\n## 7. Jebakan & Kesalahan Umum Pemula\n\n1. **Memakai AUTO_INCREMENT Tanpa Memperhitungkan Batas Maksimal:** Kolom `INT AUTO_INCREMENT` memiliki batas maksimal 2,1 miliar baris. Pada tabel transaksi atau log yang sangat aktif, angka ini bisa habis dalam beberapa bulan dan menyebabkan aplikasi lumpuh (*integer overflow*). Selalu gunakan `BIGINT` untuk tabel bertrafik tinggi.\n2. **Perilaku `LAST_INSERT_ID()`:** Fungsi `LAST_INSERT_ID()` hanya mengembalikan ID dari baris terakhir yang disisipkan pada **koneksi yang sama**. Jika kamu melakukan bulk insert 10 baris sekaligus, fungsi ini mengembalikan ID baris pertama dari batch tersebut.\n3. **Lupa Flag `-p` pada CLI:** Menjalankan `mysql -u root production_db` tanpa `-p` akan mencoba login tanpa password dan ditolak dengan error *\"Access denied for user\"*.\n\n---\n\n## 8. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Menjadi pilihan utama sistem arsitektur berbasis PHP (Laravel, WordPress), e-commerce Magento, dan infrastruktur database cloud (AWS RDS Aurora MySQL, Google Cloud SQL).\n\n**Di Technical Interview:**\n- *\"Apa beda DATETIME dan TIMESTAMP di MySQL dan apa konsekuensinya terhadap sistem multi-timezone?\"*\n- *\"Mengapa kita wajib menggunakan charset utf8mb4 alih-alih utf8 standar di MySQL?\"*"
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
          "instruction": "Tabel transaksi keuangan `accounts` membutuhkan dukungan transaksi ACID dan baris kunci otomatis. Lengkapi pembuatan tabel di editor dengan menentukan storage engine standar modern MySQL yang mendukung transaksi.",
          "starterCode": "-- Lengkapi pembuatan tabel dengan engine InnoDB:\nCREATE TABLE accounts (id INT PRIMARY KEY)\n-- lengkapi di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ENGINE\\s*=\\s*InnoDB",
              "message": "Storage engine ditentukan dengan `ENGINE=` diikuti namanya. Pilih engine yang mendukung transaksi dan foreign key — MyISAM menerima sintaks FK tapi mengabaikannya diam-diam, dan itu sumber data rusak yang sulit dilacak."
            }
          ],
          "solution": "ENGINE=InnoDB",
          "susunKode": {
            "question": "Susun klausa DDL penentu storage engine InnoDB pada MySQL.",
            "potongan": [
              "ENGINE",
              "=",
              "InnoDB"
            ],
            "pengecoh": [
              "TYPE",
              "STORAGE",
              "MyISAM"
            ],
            "pemisah": "",
            "explanation": "Storage engine bawaan MySQL modern ditentukan dengan klausa `ENGINE=InnoDB` pada akhir DDL `CREATE TABLE`. Pengecoh 'TYPE' (sintaks lama MySQL < 5.1), 'STORAGE', dan 'MyISAM' adalah bentuk kesalahan umum yang sering menggoda pemula."
          }
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
          "instruction": "Tabel komentar pengguna sering mengalami galat saat menerima emoji dari smartphone. Ubah pengaturan karakter tabel `comments` agar mendukung penuh karakter 4-byte menggunakan perintah ALTER TABLE dengan `CHARACTER SET utf8mb4`.",
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
          "solution": "ALTER TABLE comments CHARACTER SET utf8mb4;",
          "susunKode": {
            "question": "Susun perintah ALTER TABLE untuk mengubah karakter set ke utf8mb4 di MySQL.",
            "potongan": [
              "ALTER TABLE comments",
              "CHARACTER SET",
              "utf8mb4;"
            ],
            "pengecoh": [
              "UPDATE TABLE comments",
              "ENCODING",
              "utf8;"
            ],
            "pemisah": " ",
            "explanation": "Pengubahan karakter encoding tabel MySQL menggunakan DDL `ALTER TABLE nama_tabel CHARACTER SET utf8mb4;`. Pengecoh 'UPDATE TABLE', 'ENCODING', dan 'utf8' (yang hanya mendukung 3 byte) mengelirukan pemula secara jebakan."
          }
        },
        {
          "kind": "step",
          "id": "sql-7-3",
          "title": "AUTO_INCREMENT & LAST_INSERT_ID()",
          "explanation": "Atribut `AUTO_INCREMENT` pada MySQL menghasilkan nilai integer berurutan secara otomatis untuk Primary Key setiap kali baris baru disisipkan. Untuk mengambil nilai ID yang baru saja dibuat di dalam sesi koneksi yang sama, kamu memanggil fungsi `LAST_INSERT_ID()`. Mekanisme ini digunakan pada backend saat kamu ingin menyisipkan baris induk lalu segera menyisipkan baris anak ber-Foreign Key ID tersebut. Jebakan yang perlu diwaspadai adalah nilai AUTO_INCREMENT dapat melompat atau tidak berurutan jika terjadi kegagalan transaksi `ROLLBACK`.",
          "example": {
            "code": "INSERT INTO categories (name) VALUES ('Elektronik');\nSELECT LAST_INSERT_ID();",
            "output": "Query OK, 1 row affected (0.01 sec)\n\n+------------------+\n| LAST_INSERT_ID() |\n+------------------+\n|               42 |\n+------------------+\n1 row in set (0.00 sec)",
            "note": "Perhatikan bentuk tabelnya: MySQL membingkai hasil dengan garis `+---+`, berbeda dari psql yang memakai garis putus-putus. Nilai 42 itu milik KONEKSI-mu sendiri — pengguna lain yang menyisipkan baris pada detik yang sama tetap mendapat nilainya masing-masing."
          },
          "instruction": "Setelah menyisipkan baris baru ke tabel dengan primary key AUTO_INCREMENT, backend perlu mengetahui ID yang baru saja dihasilkan oleh MySQL pada koneksi tersebut. Jalankan fungsi bawaan MySQL untuk mengambil nilai ID terakhir yang baru dibuat.",
          "starterCode": "-- Ambil ID auto-increment terakhir pada koneksi aktif:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "SELECT\\s+LAST_INSERT_ID\\(\\s*\\)",
              "message": "Fungsi MySQL yang mengembalikan ID auto-increment terakhir dipanggil lewat `SELECT` dengan tanda kurung kosong. Nilainya bersifat **per koneksi**, jadi aman dipakai bersamaan oleh banyak pengguna — tapi berhenti akurat kalau kamu menyisipkan banyak baris sekaligus."
            }
          ],
          "solution": "SELECT LAST_INSERT_ID();",
          "susunKode": {
            "question": "Susun query SQL untuk mengambil ID auto increment terakhir di MySQL.",
            "potongan": [
              "SELECT",
              "LAST_INSERT_ID();"
            ],
            "pengecoh": [
              "GET",
              "GET_LAST_ID();",
              "CURRVAL();"
            ],
            "pemisah": " ",
            "explanation": "Fungsi bawaan MySQL untuk mengambil ID auto-increment terakhir pada koneksi aktif adalah `LAST_INSERT_ID()`. Pengecoh 'GET_LAST_ID()' atau 'CURRVAL()' (milik PostgreSQL sequence) adalah jebakan khas yang sering keliru digunakan."
          }
        },
        {
          "kind": "step",
          "id": "sql-7-4",
          "title": "Tipe Tanggal: DATETIME vs TIMESTAMP",
          "explanation": "MySQL memiliki dua tipe data tanggal utama: `DATETIME` menyimpan tanggal dan waktu statis 8-byte (rentang tahun 1000-9999), sedangkan `TIMESTAMP` menyimpan tanggal 4-byte yang otomatis dikonversi ke timezone UTC server (rentang 1970-2038). Tipe `TIMESTAMP` sangat cocok untuk mencatat jejak waktu (`created_at`) aplikasi berskala global yang memiliki pengguna di berbagai zona waktu. Jebakan yang harus diwaspadai adalah batasan Year 2038 Problem pada `TIMESTAMP`, di mana nilai tanggal setelah 19 Januari 2038 akan mengalami overflow.",
          "example": {
            "code": "CREATE TABLE artikel (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  judul VARCHAR(100),\n  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP\n);\n\nINSERT INTO artikel (judul) VALUES ('Draft pertama');\nSELECT id, judul, updated_at FROM artikel;",
            "output": "Query OK, 0 rows affected (0.03 sec)\nQuery OK, 1 row affected (0.01 sec)\n\n+----+---------------+---------------------+\n| id | judul         | updated_at          |\n+----+---------------+---------------------+\n|  1 | Draft pertama | 2026-07-29 13:31:02 |\n+----+---------------+---------------------+\n1 row in set (0.00 sec)",
            "note": "Kolom `updated_at` terisi sendiri tanpa disebut di `INSERT` — itulah kerja `DEFAULT CURRENT_TIMESTAMP`, dan `ON UPDATE` membuatnya ikut berubah setiap baris diperbarui. Nilai yang tersimpan adalah UTC; angka yang kamu lihat sudah dikonversi ke zona waktu sesi, jadi dua pengguna di zona berbeda melihat angka berbeda untuk baris yang sama."
          },
          "instruction": "Sistem aplikasi global melayani pengguna di berbagai belahan dunia. Definisikan kolom `created_at` bertipe TIMESTAMP yang otomatis mengisi waktu saat ini (`CURRENT_TIMESTAMP`) sebagai nilai default dan otomatis terkonversi mengikuti zona waktu UTC.",
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
          "solution": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
          "susunKode": {
            "question": "Susun definisi kolom created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP.",
            "potongan": [
              "created_at TIMESTAMP",
              "DEFAULT",
              "CURRENT_TIMESTAMP"
            ],
            "pengecoh": [
              "created_at DATETIME",
              "INITIAL",
              "NOW()"
            ],
            "pemisah": " ",
            "explanation": "Pendefinisian kolom TIMESTAMP dengan waktu otomatis saat insert menggunakan default value `DEFAULT CURRENT_TIMESTAMP`. Penggunaan kata 'INITIAL' atau fungsi 'NOW()' (sebagai pengganti kata kunci default) adalah kekeliruan sintaks DDL."
          }
        },
        {
          "kind": "step",
          "id": "sql-7-5",
          "title": "Backup & Restore dengan mysqldump",
          "explanation": "Perintah CLI `mysqldump` digunakan untuk membuat file cadangan (backup) struktur skema dan isi data dari database MySQL ke dalam format file skrip SQL. File hasil backup ini dapat di-restore kembali ke server MySQL lain menggunakan perintah `mysql -u root -p dbname < backup.sql`. Prosedur backup ini wajib dijadwalkan secara berkala (cron job) pada setiap server database produksi untuk mengantisipasi musibah kerusakan data. Jebakan pemula adalah melakukan dump pada database raksasa tanpa opsi `--single-transaction`, yang dapat mengunci seluruh tabel dan menghentikan layanan aplikasi.",
          "example": {
            "code": "mysqldump -u root -p toko_db > backup_toko.sql\nls -lh backup_toko.sql\nhead -3 backup_toko.sql",
            "output": "Enter password:\n-rw-r--r--  1 bimo  staff   4.2M Jul 29 13:35 backup_toko.sql\n-- MySQL dump 10.13  Distrib 8.4.2, for macos14 (arm64)\n--\n-- Host: localhost    Database: toko_db",
            "note": "`mysqldump` menulis SQL ke keluaran standar, jadi saat dialihkan dengan `>` terminalnya justru DIAM — tidak ada tulisan \"backup berhasil\". Satu-satunya cara memastikan adalah memeriksa ukuran berkas dan barisnya; berkas 0 byte berarti backup gagal meski perintahnya seolah selesai."
          },
          "instruction": "Sebelum melakukan pemeliharaan server database, buat cadangan data secara lengkap. Tulis perintah terminal `mysqldump` untuk mengekspor database bernama 'production_db' oleh pengguna 'root' dengan prompt password (`-p`), lalu alihkan keluarannya ke berkas 'dump.sql'.",
          "starterCode": "# Tulis perintah mysqldump di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "mysqldump\\s+-u\\s+root\\s+-p\\s+production_db\\s*>\\s*dump\\.sql",
              "message": "Gunakan perintah mysqldump sesuai instruksi"
            }
          ],
          "solution": "mysqldump -u root -p production_db > dump.sql",
          "susunKode": {
            "question": "Susun perintah CLI mysqldump untuk mengekspor database ke file SQL.",
            "potongan": [
              "mysqldump -u root",
              "-p production_db",
              "> dump.sql"
            ],
            "pengecoh": [
              "mysql-export -u root",
              "-pass production_db",
              "< dump.sql"
            ],
            "pemisah": " ",
            "explanation": "Utilitas CLI MySQL untuk mem-backup database adalah `mysqldump` dengan pengarah keluaran `>` ke berkas berkestensi .sql. Menggunakan `<` (yang berfungsi untuk restore/impor) adalah kesalahan fatal yang sering terbalik."
          }
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
                "Karena charset utf8 lama di MySQL tidak mendukung karakter 4-byte seperti Emoji (😊)",
                "Karena utf8mb4 mengompres data teks sehingga ukuran database menjadi lebih kecil",
                "Karena charset utf8 lama otomatis menolak karakter angka desimal",
                "Karena MySQL 8 menghapus dukungan terhadap semua jenis teks Latin"
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
                "InnoDB hanya mengunci seluruh tabel saat operasi tulis sehingga lebih cepat",
                "MyISAM tidak mengizinkan penulisan kueri SELECT bertingkat",
                "InnoDB secara otomatis membuat backup tabel ke file CSV setiap jam"
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
                "MAX(id)",
                "AUTO_INCREMENT_VALUE()"
              ],
              "answerIndex": 0,
              "explanation": "LAST_INSERT_ID() mengembalikan ID auto-increment yang terlahir pada sesi koneksi aktif pengirim query."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Aplikasimu melayani pengguna di beberapa zona waktu dan menyimpan waktu kejadian di MySQL. Apa beda praktis DATETIME dan TIMESTAMP?",
              "choices": [
                "TIMESTAMP dikonversi ke UTC saat disimpan dan dikembalikan mengikuti time_zone koneksi, sedangkan DATETIME disimpan apa adanya tanpa konversi",
                "DATETIME otomatis menghapus nilai detik saat disimpan di memori",
                "TIMESTAMP hanya bisa digunakan pada storage engine MyISAM",
                "Tidak ada perbedaan praktis sama sekali dalam pengelolaan zona waktu"
              ],
              "answerIndex": 1,
              "explanation": "TIMESTAMP sadar zona waktu: nilainya disimpan sebagai UTC lalu dikonversi mengikuti pengaturan koneksi, sehingga cocok untuk mencatat kapan sesuatu terjadi. DATETIME menyimpan angka jam apa adanya — tepat untuk hal yang memang tidak boleh bergeser seperti jadwal acara lokal. Salah pilih membuat catatan waktu meleset berjam-jam saat server dan pengguna beda zona."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Di hosting lama, `INSERT` dengan tanggal '0000-00-00' dan teks yang lebih panjang dari kolom diterima begitu saja tanpa error. Apa penyebabnya?",
              "choices": [
                "sql_mode belum memakai STRICT_TRANS_TABLES, sehingga MySQL memotong atau mengubah data invalid dan hanya memberi warning",
                "Database MySQL belum mengaktifkan plugin InnoDB",
                "Tabel tersebut tidak memiliki constraint PRIMARY KEY",
                "Koneksi jaringan menggunakan protokol non-enkripsi"
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
          "body": "# PostgreSQL: Optimasi Performa, Window Function & Operasional\n\nMengetahui cara menulis kueri SQL saja belum cukup. Di dunia kerja, seorang engineer dinilai dari kemampuannya membaca rencana eksekusi, mengoptimasi query yang lambat, dan menjaga kesehatan operasional database produksi.\n\n---\n\n## 1. Membaca Rencana Eksekusi (EXPLAIN vs EXPLAIN ANALYZE)\n\n- **`EXPLAIN`**: Hanya menampilkan rencana estimasi (*estimation plan*) dari query planner berbasis statistik tanpa mengeksekusi kueri.\n- **`EXPLAIN ANALYZE`**: Benar-benar **menjalankan kueri sungguhan** ke mesin database, mencatat durasi waktu aktual, pembacaan buffer memori, dan jumlah baris nyata.\n\n```text\n                                      QUERY PLAN\n--------------------------------------------------------------------------------------\n Bitmap Heap Scan on orders  (cost=4.32..127.45 rows=35 width=64) (actual time=0.042..0.120 rows=32 loops=1)\n   Recheck Cond: (status = 'pending'::text)\n   Buffers: shared hit=12\n   ->  Bitmap Index Scan on idx_pending_orders  (cost=0.00..4.31 rows=35 width=0) (actual time=0.021..0.021 rows=32 loops=1)\n Planning Time: 0.152 ms\n Execution Time: 0.165 ms\n```\n\n### Memahami Metode Scan:\n1. **Seq Scan (Sequential Scan):** Membaca seluruh tabel dari awal sampai akhir. Wajar untuk tabel kecil (< 1.000 baris), namun sangat berbahaya untuk tabel jutaan baris.\n2. **Index Scan:** Membaca B-Tree indeks, lalu mengambil data baris langsung ke tabel di disk. Sangat efisien untuk data selektif tinggi.\n3. **Index Only Scan:** Kueri terpenuhi 100% langsung dari data yang ada di indeks tanpa perlu membaca tabel utama (*Heap*). Ini adalah kondisi performa paling cepat!\n4. **Bitmap Heap Scan:** Mengumpulkan alamat baris dari indeks ke dalam bitmap di memori, lalu membaca data secara berurutan untuk meminimalkan I/O acak.\n\n---\n\n## 2. Ragam Indeks PostgreSQL Tingkat Lanjut\n\n- **Partial Index:** Hanya mengindeks baris yang memenuhi kondisi tertentu. Menghemat ukuran disk dan RAM:\n  ```sql\n  CREATE INDEX idx_pending_orders ON orders (user_id) WHERE status = 'pending';\n  ```\n- **Expression Index:** Mengindeks hasil ekspresi fungsi:\n  ```sql\n  CREATE INDEX idx_users_lower_email ON users (LOWER(email));\n  ```\n- **BRIN (Block Range Index):** Sangat efisien untuk tabel raksasa (ratusan gigabyte) yang datanya masuk berurutan secara fisik (misal data sensor atau log waktu). Ukuran indeksnya ribuan kali lebih kecil dibanding B-Tree.\n\n---\n\n## 3. Recursive CTE (Hierarki Data Berjenjang)\n\nUntuk membaca data pohon (*tree*), seperti hierarki kategori produk atau bagan organisasi perusahaan, gunakan **`WITH RECURSIVE`**:\n\n```sql\nWITH RECURSIVE OrgChart AS (\n  -- Anchor member: ambil pimpinan tertinggi (direktur)\n  SELECT id, name, manager_id, 1 AS level\n  FROM employees\n  WHERE manager_id IS NULL\n\n  UNION ALL\n\n  -- Recursive member: gabungkan bawahan secara berulang\n  SELECT e.id, e.name, e.manager_id, oc.level + 1\n  FROM employees e\n  JOIN OrgChart oc ON e.manager_id = oc.id\n)\nSELECT * FROM OrgChart ORDER BY level, id;\n```\n\n---\n\n## 4. Pemeliharaan Database: VACUUM & Bahaya VACUUM FULL\n\nPostgreSQL menggunakan model konkurensi **MVCC (Multi-Version Concurrency Control)**. Ketika baris data di-`UPDATE` atau di-`DELETE`, Postgres tidak langsung menimpa data lama di disk, melainkan menandainya sebagai baris mati (**Dead Tuple**).\n\n- **Autovacuum:** Proses latar belakang bawaan Postgres yang secara berkala membebaskan dead tuple agar ruangnya bisa dipakai kembali untuk baris baru.\n- **Table Bloat:** Kondisi ketika dead tuple menumpuk melebihi data aktif akibat autovacuum terlambat bekerja.\n- ⚠️ **BAHAYA OPERASIONAL `VACUUM FULL`:**\n  Perintah `VACUUM FULL` mengembalikan ruang disk fisik ke sistem operasi dengan cara menulis ulang seluruh tabel. Namun, ia mengambil **`ACCESS EXCLUSIVE LOCK`** yang mengunci seluruh operasi baca dan tulis! Di tabel produksi aktif, menjalankan `VACUUM FULL` akan menyebabkan aplikasi mengalami downtime. Di industri, gunakan autovacuum yang dituning dengan baik atau ekstensi non-blocking seperti **`pg_repack`**.\n\n---\n\n## 5. Connection Pooling dengan PgBouncer\n\nPostgres menggunakan model proses (*process-per-connection*). Setiap kali satu klien terkoneksi, Postgres membuat proses sistem operasi baru yang memakan sekitar 5–10 MB RAM.\nJika aplikasi backend membuka 1.000 koneksi bersamaan, server Postgres akan mengalami degradasi drastis.\n\n**Solusi Industri:** Gunakan **PgBouncer** sebagai connection pooler perantara. Aplikasi backend terkoneksi ke PgBouncer, dan PgBouncer mendaur ulang segelintir koneksi aktif (misal 50 koneksi) ke server Postgres secara sangat efisien.\n\n---\n\n## 6. Jebakan & Kesalahan Umum Pemula\n\n1. **Mengabaikan `pg_stat_statements`:** Ekstensi wajib untuk menemukan query paling lambat dan paling sering dieksekusi secara otomatis di server produksi.\n2. **Kueri Deadlock:** Dua transaksi yang saling mengunci baris data dalam urutan yang berlawanan (Transaksi 1 mengunci Akun A lalu Akun B; Transaksi 2 mengunci Akun B lalu Akun A). Selalu seragamkan urutan penguncian baris di kode aplikasi.\n3. **Backup Hanya dengan Format Teks Mentah:** Selalu gunakan format kompresi biner `pg_dump -Fc` untuk database produksi agar proses restore dengan `pg_restore` dapat berjalan paralel (*multithreaded*).\n\n---\n\n## 7. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Menangani query yang lambat di laporan APM (Datadog, New Relic), manajemen database PostgreSQL di AWS RDS / Aurora, dan perencanaan kapasitas infrastruktur.\n\n**Di Technical Interview:**\n- *\"Jelaskan cara kerja MVCC di PostgreSQL dan mengapa kita memerlukan proses VACUUM?\"*\n- *\"Bagaimana kamu membaca output EXPLAIN ANALYZE untuk mendiagnosis apakah query mengalami bottleneck di I/O disk atau CPU?\"*"
        },
        {
          "kind": "step",
          "id": "sql-8-pg-1",
          "title": "Membaca Rencana Eksekusi (EXPLAIN ANALYZE)",
          "explanation": "Perintah `EXPLAIN ANALYZE` di PostgreSQL mengeksekusi kueri secara nyata dan mencetak rencana eksekusi detail beserta perbandingan biaya estimasi dan waktu nyata (`actual time`). Outputnya menunjukkan apakah mesin menggunakan `Seq Scan` (scan seluruh tabel), `Index Scan` (scan indeks biasa), atau `Bitmap Heap Scan` (kombinasi beberapa indeks). Alat ini merupakan perkakas utama senior backend engineer untuk mengdiagnosis kueri lambat di produksi. Jebakan penting yang harus diingat adalah `EXPLAIN ANALYZE` **benar-benar mengeksekusi kueri**, sehingga menggunakannya pada perintah `DELETE` atau `UPDATE` akan mengubah data di database!",
          "example": {
            "code": "EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'user42@test.com';",
            "output": "                                                        QUERY PLAN                                                        \n--------------------------------------------------------------------------------------------------------------------------\n Index Scan using idx_big_email on users  (cost=0.41..8.43 rows=1 width=39) (actual time=0.024..0.025 rows=1 loops=1)\n   Index Cond: (email = 'user42@test.com'::text)\n Planning Time: 0.340 ms\n Execution Time: 0.048 ms\n(4 rows)\n\n-- kolom tanpa index, tabel yang sama (50.000 baris):\n Seq Scan on users  (cost=0.00..1083.00 rows=7028 width=39) (actual time=0.008..3.715 rows=7142 loops=1)\n   Filter: (status = 'pending'::text)\n   Rows Removed by Filter: 42858",
            "note": "Bandingkan dua angka `actual time`: 0,048 ms lawan 3,7 ms pada tabel yang sama. Baris `Rows Removed by Filter: 42858` adalah tanda paling jelas bahwa index tidak terpakai — mesin membaca 50.000 baris lalu membuang hampir semuanya. Perhatikan juga `cost=` hanyalah perkiraan, sedangkan `actual time=` adalah waktu nyata; hanya `EXPLAIN ANALYZE` yang memberi keduanya."
          },
          "instruction": "Endpoint daftar pesanan berstatus `pending` dilaporkan lambat. Tulis perintah yang menjalankan query itu apa adanya sekaligus melaporkan rencana eksekusi beserta waktu nyatanya — bukan yang hanya memperkirakan biaya tanpa menjalankan.",
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
          "solution": "EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'pending';",
          "susunKode": {
            "question": "Susun perintah EXPLAIN ANALYZE PostgreSQL untuk kueri status pending.",
            "potongan": [
              "EXPLAIN ANALYZE",
              "SELECT * FROM orders WHERE status = 'pending';"
            ],
            "pengecoh": [
              "EXPLAIN EXECUTE",
              "SELECT * FROM orders WHERE status = 'active';"
            ],
            "pemisah": " ",
            "explanation": "Untuk mendapatkan rencana eksekusi serta durasi aktual kueri PostgreSQL digunakan `EXPLAIN ANALYZE`. Kata 'EXECUTE' atau mengubah filter status adalah kesalahan istilah yang menggoda dan merusak logika kueri."
          }
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
          "instruction": "Tabel `orders` berisi jutaan baris, tapi dasbor operasional hanya pernah menanyakan pesanan berstatus `pending` (kurang dari 2% data) berdasarkan `user_id`. Buat index bernama `idx_pending_orders` yang hanya mencakup baris yang relevan itu saja, supaya ukurannya tetap kecil.",
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
          "solution": "CREATE INDEX idx_pending_orders ON orders (user_id) WHERE status = 'pending';",
          "susunKode": {
            "question": "Susun perintah DDL Partial Index idx_pending_orders pada PostgreSQL.",
            "potongan": [
              "CREATE INDEX idx_pending_orders",
              "ON orders (user_id)",
              "WHERE status = 'pending';"
            ],
            "pengecoh": [
              "PARTIAL INDEX idx_pending_orders",
              "FOR orders (user_id)",
              "FILTER status = 'pending';"
            ],
            "pemisah": " ",
            "explanation": "Partial index PostgreSQL dibuat dengan menambahkan klausa `WHERE` pada perintah `CREATE INDEX ON tabel (kolom) WHERE kondisi`. Perintah fiktif 'PARTIAL INDEX' atau 'FILTER' adalah kekeliruan sintaks DDL yang sangat mengelirukan pembelajar."
          }
        },
        {
          "kind": "step",
          "id": "sql-8-pg-3",
          "title": "Window Function (ROW_NUMBER & OVER PARTITION BY)",
          "explanation": "Window Functions seperti `ROW_NUMBER()`, `RANK()`, dan `DENSE_RANK()` melakukan kalkulasi nilai antar baris data menggunakan klausul `OVER (PARTITION BY ... ORDER BY ...)` tanpa mengelompokkan baris menjadi satu. Fitur ini memungkinkan kamu memberi nomor urut transaksi per pengguna atau menghitung nilai akumulasi berjalan (running total) secara efisien. Kueri ini sangat populer digunakan pada pembuatan laporan analitik finansial dan fitur peringkat/leaderboard. Jebakan pemula adalah mencoba menggunakan Window Functions di dalam klausul `WHERE`, yang akan ditolak mesin SQL.",
          "example": {
            "code": "SELECT id, amount,\n       ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS order_seq\nFROM orders\nORDER BY user_id, order_seq;",
            "output": " id | amount  | order_seq \n----+---------+-----------\n  5 |  250000 |         1\n  2 |  700000 |         2\n  1 |  600000 |         3\n  3 |  150000 |         1\n  4 | 1200000 |         1\n(5 rows)",
            "note": "Perhatikan `order_seq` kembali ke 1 di baris keempat: itulah kerja `PARTITION BY` — jendela perhitungan dimulai ulang setiap ganti pengguna. Bandingkan dengan `GROUP BY` yang akan meringkas lima baris ini menjadi tiga; window function mempertahankan setiap baris apa adanya."
          },
          "instruction": "Tabel `orders` punya kolom `id`, `amount`, `user_id`, dan `created_at`. Tampilkan `id` dan `amount` beserta nomor urut pesanan MILIK MASING-MASING pengguna, dihitung dari yang terbaru, dengan nama kolom `order_seq`. Nomornya harus dimulai ulang dari 1 untuk setiap pengguna, dan barisnya tidak boleh diringkas jadi satu.",
          "starterCode": "-- Tulis Window Function di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ROW_NUMBER\\s*\\(\\s*\\)",
              "message": "Penomoran baris memakai fungsi window `ROW_NUMBER()` dengan tanda kurung kosong."
            },
            {
              "pattern": "OVER\\s*\\(",
              "message": "Setiap window function butuh klausa `OVER (...)` yang menentukan jendela perhitungannya."
            },
            {
              "pattern": "PARTITION\\s+BY\\s+user_id",
              "message": "Agar nomornya dimulai ulang per pengguna, jendelanya dipecah dengan `PARTITION BY` diikuti kolom pemiliknya. Tanpa itu, nomornya berjalan terus dari 1 sampai baris terakhir."
            },
            {
              "pattern": "ORDER\\s+BY\\s+created_at\\s+DESC",
              "message": "Di dalam `OVER (...)`, tentukan urutan penomorannya. \"Dihitung dari yang terbaru\" berarti kolom waktu diurutkan menurun."
            },
            {
              "pattern": "AS\\s+order_seq",
              "message": "Beri nama kolom hasilnya dengan `AS` sesuai yang diminta soal — nama inilah yang dibaca kode aplikasi."
            },
            {
              "pattern": "FROM\\s+orders",
              "message": "Tambahkan tabel sumbernya dengan `FROM`."
            }
          ],
          "solution": "SELECT id, amount, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS order_seq FROM orders;",
          "susunKode": {
            "question": "Susun query window function PARTITION BY user_id ORDER BY created_at DESC.",
            "potongan": [
              "SELECT id, amount,",
              "ROW_NUMBER() OVER",
              "(PARTITION BY user_id ORDER BY created_at DESC)",
              "AS order_seq FROM orders;"
            ],
            "pengecoh": [
              "RANK() BY",
              "(GROUP BY user_id ORDER BY created_at DESC)",
              "AS order_seq IN orders;"
            ],
            "pemisah": " ",
            "explanation": "Penggunaan window function `ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)` membagi grup perhitungan per pengguna. Penggunaan 'GROUP BY' di dalam OVER klausul adalah kekeliruan sintaks window function."
          }
        },
        {
          "kind": "step",
          "id": "sql-8-pg-4",
          "title": "Common Table Expression (WITH CTE)",
          "explanation": "Common Table Expression (CTE) yang didefinisikan dengan kata kunci `WITH nama_cte AS (...)` membuat tabel sementara terstruktur yang mempermudah pembacaan kueri komplek bertingkat. Selain meningkatkan keterbacaan kode dibanding subquery bersarang, CTE di PostgreSQL juga mendukung `RECURSIVE` untuk memproses data berstruktur pohon seperti hierarki kategori produk atau silsilah organisasi. Fitur ini wajib dipakai saat menyusun query analitik rumit demi kemudahan maintenance tim. Jebakan pada versi PostgreSQL lama adalah CTE bersifat optimization fence yang dapat memperlambat kueri jika tidak dioptimasi.",
          "example": {
            "code": "WITH high_sales AS (\n  SELECT user_id, SUM(amount) AS total FROM orders GROUP BY user_id\n)\nSELECT * FROM high_sales WHERE total > 1000000;",
            "output": " user_id |  total  \n---------+---------\n       3 | 1200000\n       1 | 1550000\n(2 rows)",
            "note": "Perhatikan urutan `user_id`-nya tidak berurutan: CTE tidak menjanjikan urutan apa pun, sama seperti query biasa tanpa `ORDER BY`. Blok `WITH` juga tidak menyimpan apa-apa di disk — ia hidup hanya selama query ini berjalan."
          },
          "instruction": "Tabel `users` punya kolom `status`. Susun query bertahap: buat blok sementara bernama `active_users` yang menampung seluruh pengguna berstatus aktif, lalu ambil isinya di query utama.",
          "starterCode": "-- Tulis CTE di bawah ini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "WITH\\s+active_users\\s+AS\\s*\\(",
              "message": "Blok sementara dibuka dengan `WITH <nama> AS (`. Namanya harus persis seperti yang diminta soal, karena itu yang dipanggil di query utama."
            },
            {
              "pattern": "SELECT[\\s\\S]*FROM\\s+users[\\s\\S]*status\\s*=\\s*['\"]active['\"]",
              "message": "Isi bloknya adalah query yang mengambil pengguna berstatus aktif dari tabel `users`."
            },
            {
              "pattern": "\\)\\s*SELECT[\\s\\S]*\\bFROM\\s+active_users",
              "message": "Setelah kurung penutup blok, tulis query utamanya dan baca `FROM` nama blok tadi — bukan dari tabel aslinya lagi. Kalau query utamanya kembali membaca `users`, blok yang sudah dibuat tidak terpakai."
            }
          ],
          "solution": "WITH active_users AS (SELECT * FROM users WHERE status = 'active') SELECT * FROM active_users;",
          "susunKode": {
            "question": "Susun deklarasi CTE active_users dan query utamanya pada PostgreSQL.",
            "potongan": [
              "WITH active_users AS",
              "(SELECT * FROM users WHERE status = 'active')",
              "SELECT * FROM active_users;"
            ],
            "pengecoh": [
              "DEFINE active_users AS",
              "(SELECT * FROM users WHERE status = 'inactive')",
              "SELECT * IN active_users;"
            ],
            "pemisah": " ",
            "explanation": "Sintaks CTE PostgreSQL wajib diawali dengan `WITH nama_cte AS (...)` disusul kueri utama. Penggunaan kata 'DEFINE' atau 'IN' merupakan bentuk kesalahan sintaksis yang sering terjadi dan menggoda pemula."
          }
        },
        {
          "kind": "step",
          "id": "sql-8-pg-5",
          "title": "Pembersihan Baris Mati dengan VACUUM",
          "explanation": "Perintah `VACUUM` di PostgreSQL berfungsi membersihkan baris data mati (dead tuples) yang ditinggalkan oleh operasi `UPDATE` dan `DELETE` akibat arsitektur MVCC. Jika tidak dibersihkan oleh fitur autovacuum, dead tuples yang menumpuk memicu fenomena Table Bloat yang membuat ukuran file database membengkak dan kueri menjadi lambat. Pemeliharaan VACUUM rutin memastikan ruang penyimpanan disk dikembalikan dan statistik kueri ter-update. Jebakan berbahaya adalah mematikan fitur autovacuum di file konfigurasi `postgresql.conf` yang akan melumpuhkan performa server dalam jangka panjang.",
          "example": {
            "code": "VACUUM (VERBOSE) orders;",
            "output": "INFO:  vacuuming \"bilearn_cek.public.orders\"\nINFO:  finished vacuuming \"bilearn_cek.public.orders\": index scans: 0\npages: 0 removed, 1 remain, 1 scanned (100.00% of total)\ntuples: 0 removed, 5 remain, 0 are dead but not yet removable\nremovable cutoff: 824, which was 0 XIDs old when operation ended\nVACUUM",
            "note": "Baris `tuples: 0 removed, 5 remain` itulah laporan yang dicari: berapa baris mati yang berhasil dibersihkan. Angka `dead but not yet removable` yang besar berarti ada transaksi lama yang masih terbuka dan menahan pembersihan — penyebab table bloat yang paling sering terlewat."
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
          "solution": "VACUUM FULL logs;",
          "susunKode": {
            "question": "Susun perintah VACUUM FULL logs pada PostgreSQL.",
            "potongan": [
              "VACUUM",
              "FULL",
              "logs;"
            ],
            "pengecoh": [
              "CLEANUP",
              "PURGE",
              "tables;"
            ],
            "pemisah": " ",
            "explanation": "Perintah PostgreSQL untuk mereklamasi ruang penyimpanan disk secara total adalah `VACUUM FULL nama_tabel;`. Perintah fiktif 'CLEANUP', 'PURGE', atau kata 'tables;' mengelirukan pemula secara jebakan dalam pemeliharaan."
          }
        },
        {
          "kind": "step",
          "id": "sql-8-pg-6",
          "title": "Backup & Restore Database (pg_dump & pg_restore)",
          "explanation": "Perintah `pg_dump` membuat file cadangan database PostgreSQL dalam bentuk file teks SQL atau format kustom biner (`-Fc`) yang dapat di-restore secara cepat menggunakan `pg_restore`. Format biner kustom memungkinkan kamu melakukan restore data secara paralel menggunakan banyak core CPU (`pg_restore -j 4`) untuk mempercepat pemulihan musibah. Prosedur pemulihan ini merupakan standar wajib dalam manajemen kebencanaan (disaster recovery) di lingkungan perusahaan. Jebakan pemula adalah hanya rajin membuat file backup tanpa pernah menguji proses restore data secara berkala.",
          "example": {
            "code": "pg_dump -U postgres -Fc toko_online > db_backup.dump\npg_restore -l db_backup.dump | head -8",
            "output": ";\n; Archive created at 2026-07-29 20:27:55 WIB\n;     dbname: toko_online\n;     TOC Entries: 34\n;     Compression: gzip\n;     Dump Version: 1.15-0\n;     Format: CUSTOM\n;     Integer: 4 bytes",
            "note": "`pg_dump` sendiri diam saat berhasil — tidak ada kalimat \"backup sukses\". Cara memastikannya adalah membuka daftar isinya dengan `pg_restore -l`: kalau `TOC Entries` bernilai 0 atau perintahnya error, berkas dump-mu kosong meski ukurannya terlihat wajar."
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
          "solution": "pg_restore -U postgres -d production_db backup.dump",
          "susunKode": {
            "question": "Susun perintah CLI pg_restore untuk memulihkan arsip dump PostgreSQL.",
            "potongan": [
              "pg_restore",
              "-U postgres",
              "-d production_db",
              "backup.dump"
            ],
            "pengecoh": [
              "postgres_restore",
              "--username postgres",
              "--db production_db"
            ],
            "pemisah": " ",
            "explanation": "Utilitas CLI PostgreSQL untuk merestore arsip biner (.dump) adalah `pg_restore` dengan opsi `-U` untuk user dan `-d` untuk database target. Penggunaan nama CLI fiktif 'postgres_restore' adalah jebakan khas."
          }
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
          "solution": "CREATE EXTENSION IF NOT EXISTS \"pg_stat_statements\";",
          "susunKode": {
            "question": "Susun perintah DDL CREATE EXTENSION IF NOT EXISTS pg_stat_statements.",
            "potongan": [
              "CREATE EXTENSION",
              "IF NOT EXISTS",
              "\"pg_stat_statements\";"
            ],
            "pengecoh": [
              "INSTALL EXTENSION",
              "UNLESS EXISTS",
              "\"pg_stat_activity_logs\";"
            ],
            "pemisah": " ",
            "explanation": "Pengaktifan modul atau plugin ekstensi di PostgreSQL menggunakan perintah `CREATE EXTENSION IF NOT EXISTS \"nama_ekstensi\";`. Perintah 'INSTALL EXTENSION' atau nama ekstensi fiktif adalah jebakan kata yang sering mengelirukan."
          }
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
                "EXPLAIN ANALYZE hanya bisa dijalankan pada database yang sedang offline",
                "EXPLAIN biasa otomatis membuat indeks baru jika kueri terdeteksi lambat",
                "EXPLAIN ANALYZE tidak menampilkan estimasi biaya cost"
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
                "Untuk mereset password pengguna database secara otomatis setiap 30 hari",
                "Untuk membersihkan cache memori browser dari pengguna web",
                "Untuk mengompresi struktur tabel menjadi format NoSQL"
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
                "Untuk kolom primary key berurutan bertipe BIGINT",
                "Untuk kolom tanggal yang sering dicari menggunakan rentang waktu BETWEEN",
                "Untuk tabel berukuran kecil yang memiliki kurang dari 50 baris"
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
                "ANALYZE orders",
                "REINDEX TABLE orders"
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
          "body": "# MySQL: Optimasi Performa, Storage Engine & Operasional\n\nMengoptimasi database MySQL di lingkungan produksi berskala jutaan pengguna memerlukan pemahaman arsitektur mesin penyimpanan InnoDB, manajemen indeks, dan diagnosis query lambat.\n\n---\n\n## 1. Membaca Output EXPLAIN di MySQL\n\nKlausa `EXPLAIN` menampilkan rencana eksekusi query optimizer MySQL. Perhatikan kolom-kolom kritis berikut:\n\n| Kolom EXPLAIN | Makna & Indikator Kritis |\n|---|---|\n| **`type`** | Menunjukkan metode pengaksesan baris data (kunci performa utama) |\n| **`possible_keys`** | Indeks yang dipertimbangkan oleh optimizer |\n| **`key`** | Indeks yang **benar-benar dipilih** dan digunakan |\n| **`rows`** | Estimasi jumlah baris yang harus diperiksa |\n| **`filtered`** | Persentase baris tersaring yang lolos ke tahap berikutnya |\n| **`Extra`** | Informasi tambahan (`Using index`, `Using filesort`, `Using temporary`) |\n\n### Urutan Kualitas Nilai `type` (Dari Terbaik ke Terburuk):\n$$\text{system} > \text{const} > \text{eq_ref} > \text{ref} > \text{range} > \text{index} > mathbf{ALL}$$\n- **`const` / `eq_ref`**: Mengambil 1 baris via Primary Key atau Unique Index.\n- **`ref`**: Mengambil baris via Non-Unique Index biasa.\n- **`range`**: Mengambil rentang baris (`BETWEEN`, `>`, `<`, `IN`).\n- **`ALL` (Bahaya ❌)**: **Full Table Scan!** Menandakan query memeriksa seluruh tabel di disk tanpa memanfaatkan indeks.\n\n---\n\n## 2. Clustered Index InnoDB: Bahaya UUID sebagai Primary Key\n\nDi MySQL InnoDB, seluruh baris data disimpan langsung menyatu di dalam struktur pohon B-Tree Primary Key (**Clustered Index**):\n- **Primary Key:** Menentukan urutan fisik penyimpanan baris di disk.\n- **Secondary Index:** Tidak menyimpan data baris langsung, melainkan menyimpan nilai kolom indeks dan menunjuk ke nilai Primary Key.\n\n> ⚠️ **BAHAYA PENGGUNAAN UUIDv4 DI INNODB:**\n> UUIDv4 bernilai acak secara alfabetik. Menyisipkan jutaan UUID acak memaksa InnoDB menyisipkan baris di tengah-tengah halaman disk secara acak. Ini memicu fenomena **Page Split** yang masif, fragmentasi memori, dan penurunan performa penulisan hingga 80%!\n> **Solusi:** Gunakan `BIGINT AUTO_INCREMENT` atau gunakan format **UUIDv7** yang terurut berdasarkan waktu (*time-ordered*).\n\n---\n\n## 3. Covering Index (Using index)\n\nJika semua kolom yang diminta pada klausul `SELECT` dan `WHERE` sudah tercakup di dalam satu indeks sekunder, MySQL tidak perlu lagi melakukan pembacaan kedua ke Clustered Index (*Heap Table Lookup*).\n\n```sql\n-- Indeks komposit pada email dan created_at:\nCREATE INDEX idx_user_email_created ON users (email, created_at);\n\n-- Kueri ini terpenuhi 100% dari indeks (Sangat Cepat!):\nSELECT email, created_at FROM users WHERE email = 'ana@bilearn.id';\n```\nPada output `EXPLAIN`, kolom `Extra` akan menampilkan status emas: **`Using index`**.\n\n---\n\n## 4. Slow Query Log & Optimasi Kueri Berat\n\nMySQL memiliki fitur bawaan untuk merekam secara otomatis seluruh query yang waktu eksekusinya melebihi ambang batas toleransi:\n\n```sql\n-- Mengaktifkan Slow Query Log secara global:\nSET GLOBAL slow_query_log = 'ON';\n\n-- Catat semua query yang butuh waktu lebih dari 1 detik:\nSET GLOBAL long_query_time = 1.0;\n```\nGunakan utilitas terminal seperti **`mysqldumpslow`** atau **Percona Toolkit (`pt-query-digest`)** untuk menganalisis log tersebut dan mengidentifikasi query yang paling membebani CPU server.\n\n---\n\n## 5. Arsitektur Replikasi Master-Replica\n\nPada aplikasi bertrafik tinggi, satu server database tunggal tidak akan mampu menampung beban baca dari jutaan pengguna.\n\nArsitektur industri membagi database menjadi dua peran:\n1. **Primary / Master (Server Tulis):** Menangani seluruh operasi `INSERT`, `UPDATE`, `DELETE`, dan transaksi kritis. Seluruh perubahan dicatat ke dalam **Binary Log (binlog)**.\n2. **Replica / Read Replica (Server Baca):** Membaca binlog dari Primary dan menerapkan perubahan secara asinkron. Digunakan untuk melayani traffic `SELECT` dan laporan analitik.\n\n> **Tantangan Industri (Replication Lag):**\n> Ada jeda waktu sepersekian milidetik antara data ditulis di Primary dan disalin ke Replica. Jika pengguna baru saja mendaftar lalu langsung di-redirect ke profil dan diarahkan membaca Replica, profil bisa terlihat belum ada! Terapkan pola *Read-Your-Own-Writes* dengan mengarahkan kueri baca pasca-tulis langsung ke Primary.\n\n---\n\n## 6. Jebakan & Kesalahan Umum Pemula\n\n1. **`Using filesort` pada Tabel Jutaan Baris:** Muncul di kolom `Extra` saat MySQL harus mengurutkan data di memori/disk sementara karena klausa `ORDER BY` tidak cocok dengan indeks yang digunakan.\n2. **Mengabaikan Ukuran `innodb_buffer_pool_size`:** Pengaturan terpenting di server MySQL. Buffer pool harus dialokasikan sekitar 60–80% dari total RAM fisik server produksi agar data dan indeks tetap berada di cache memori.\n3. **Deadlock Tanpa Penanganan Retry:** Di transaksi dengan beban tinggi, deadlock adalah hal yang wajar terjadi. Kode aplikasi backend harus memiliki logika penanganan coba-lagi (*exponential backoff retry*) saat menerima error deadlock MySQL (Error 1213).\n\n---\n\n## 7. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Arsitektur database e-commerce skala besar, tuning parameter server MySQL di AWS RDS, dan investigasi insiden performa aplikasi web.\n\n**Di Technical Interview:**\n- *\"Apa yang dimaksud dengan Clustered Index di MySQL InnoDB dan apa pengaruhnya terhadap pemilihan tipe data Primary Key?\"*\n- *\"Bagaimana kamu menangani masalah Replication Lag pada arsitektur Master-Replica?\"*"
        },
        {
          "kind": "step",
          "id": "sql-9-my-1",
          "title": "Membaca Rencana Eksekusi (EXPLAIN di MySQL)",
          "explanation": "Perintah `EXPLAIN` di MySQL menampilkan informasi jalur eksekusi kueri optimizer di mana kolom `type` menunjukkan tingkat efisiensi pencarian data. Nilai `type` terbaik berurutan adalah `const`, `eq_ref`, `ref`, `range`, hingga yang paling lambat yaitu `ALL` (Full Table Scan). Menjalankan `EXPLAIN` membantu developer memastikan bahwa kueri yang dibuat sudah memanfaatkan indeks secara optimal sebelum dirilis ke produksi. Jebakan pemula adalah mengabaikan kolom `rows` dan `filtered` yang mengindikasikan berapa banyak baris palsu yang harus diperiksa mesin database.",
          "example": {
            "code": "EXPLAIN SELECT * FROM products WHERE category_id = 5;",
            "output": "+----+-------------+----------+------+---------------+--------------+---------+-------+------+----------+\n| id | select_type | table    | type | possible_keys | key          | key_len | ref   | rows | filtered |\n+----+-------------+----------+------+---------------+--------------+---------+-------+------+----------+\n|  1 | SIMPLE      | products | ref  | idx_category  | idx_category | 5       | const |   12 |   100.00 |\n+----+-------------+----------+------+---------------+--------------+---------+-------+------+----------+\n1 row in set, 1 warning (0.00 sec)",
            "note": "Kolom `type` bernilai `ref` berarti MySQL memakai index untuk mencocokkan nilai — hasil yang kamu inginkan. Yang harus membuatmu waspada adalah `type: ALL` berpasangan dengan `key: NULL`: itu berarti seluruh tabel dipindai. Kolom `rows` hanyalah PERKIRAAN optimizer, bukan jumlah baris sebenarnya."
          },
          "instruction": "Sebelum merilis endpoint baru, kamu ingin memastikan query pencarian pengguna berstatus `active` benar-benar memakai index. Tulis perintah MySQL yang menampilkan rencana eksekusi query itu tanpa menjalankannya.",
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
          "solution": "EXPLAIN SELECT * FROM users WHERE status = 'active';",
          "susunKode": {
            "question": "Susun perintah EXPLAIN MySQL untuk menganalisis query SELECT.",
            "potongan": [
              "EXPLAIN",
              "SELECT * FROM users WHERE status = 'active';"
            ],
            "pengecoh": [
              "ANALYZE PLAN",
              "SELECT * FROM accounts WHERE status = 'active';"
            ],
            "pemisah": " ",
            "explanation": "Untuk melihat rencana eksekusi query (execution plan) di MySQL digunakan kata kunci `EXPLAIN` di awal query SELECT. Frasa fiktif 'ANALYZE PLAN' atau mengganti tabel users menjadi accounts merupakan kekeliruan sintaksis yang sering mengelirukan pemula."
          }
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
          "solution": "CREATE INDEX idx_email_created ON users (email, created_at);",
          "susunKode": {
            "question": "Susun DDL CREATE INDEX komposit pada kolom email dan created_at di MySQL.",
            "potongan": [
              "CREATE INDEX idx_email_created",
              "ON users",
              "(email, created_at);"
            ],
            "pengecoh": [
              "MAKE COMPOSITE INDEX",
              "FOR users",
              "(email AND created_at);"
            ],
            "pemisah": " ",
            "explanation": "Indeks komposit dibuat dengan mendaftarkan beberapa kolom di dalam tanda kurung yang dipisahkan koma `(email, created_at)`. Menggunakan kata 'AND' di dalam tanda kurung atau perintah 'MAKE COMPOSITE INDEX' adalah kekeliruan sintaks DDL."
          }
        },
        {
          "kind": "step",
          "id": "sql-9-my-3",
          "title": "Mencegah Pembatalan Indeks (Index Invalidation)",
          "explanation": "Fenomena Index Invalidation terjadi ketika kueri SQL menggunakan fungsi atau operasi matematika pada kolom yang ter-indeks di klausul `WHERE`, seperti `WHERE YEAR(created_at) = 2026`. Penggunaan fungsi membendung kemampuan B-Tree indeks sehingga MySQL memaksa melakukan Full Table Scan lambat. Solusinya adalah mengubah kueri menjadi perbandingan rentang tanggal langsung seperti `WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'`. Jebakan ini sering sekali tidak disadari oleh pengembang pemula.",
          "example": {
            "code": "-- ❌ kolom dibungkus fungsi:\nEXPLAIN SELECT * FROM orders WHERE YEAR(created_at) = 2026;\n\n-- ✅ ditulis sebagai rentang:\nEXPLAIN SELECT * FROM orders WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01';",
            "output": "-- versi pertama:\n| type | possible_keys | key  | rows    |\n| ALL  | NULL          | NULL | 182904  |\n\n-- versi kedua, tabel dan index yang sama:\n| type  | possible_keys     | key               | rows  |\n| range | idx_orders_created| idx_orders_created|  4821 |",
            "note": "Perbedaannya ada di kolom `key`: `NULL` berarti tidak ada index yang dipakai, dan `rows` melonjak dari 4.821 menjadi 182.904 — 38 kali lebih banyak baris yang harus dibaca untuk jawaban yang sama persis. Index-nya tetap ada di kedua kasus; yang membuatnya tidak terpakai adalah fungsi yang membungkus kolomnya."
          },
          "instruction": "Query di editor menyaring pesanan tahun 2026, tapi versi sebelumnya memakai `WHERE YEAR(created_at) = 2026` sehingga index pada `created_at` tidak terpakai. Tulis penyaringnya sebagai rentang tanggal — dari awal 2026 sampai sebelum awal 2027 — supaya kolomnya tetap 'bersih' dan index bisa dipakai.",
          "starterCode": "-- ❌ versi lama: WHERE YEAR(created_at) = 2026  → index diabaikan\nSELECT id, total\nFROM orders\n-- lengkapi di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "created_at\\s*>=\\s*['\"]2026-01-01['\"]",
              "message": "Batas bawahnya awal tahun 2026, dan pakai \"lebih besar atau sama dengan\" supaya baris tepat 1 Januari ikut terambil."
            },
            {
              "pattern": "created_at\\s*<\\s*['\"]2027-01-01['\"]",
              "message": "Batas atasnya awal tahun BERIKUTNYA dengan pembanding \"lebih kecil dari\" — bukan 31 Desember, karena baris pada 31 Desember pukul 10 pagi akan luput. Urutan kedua syarat ini bebas."
            },
            {
              "pattern": "YEAR\\s*\\(",
              "mustNotMatch": true,
              "message": "Masih ada fungsi yang membungkus kolomnya. Begitu kolom ter-index dibungkus fungsi, MySQL tidak bisa lagi memakai index-nya dan kembali memindai seluruh tabel — itulah yang sedang kita hindari."
            }
          ],
          "solution": "SELECT id, total\nFROM orders\nWHERE created_at >= '2026-01-01' AND created_at < '2027-01-01';",
          "susunKode": {
            "question": "Susun query sargable rentang tanggal untuk mengoptimalkan penggunaan index.",
            "potongan": [
              "SELECT id, total\nFROM orders\nWHERE",
              "created_at >= '2026-01-01'",
              "AND created_at < '2027-01-01';"
            ],
            "pengecoh": [
              "YEAR(created_at) = 2026;",
              "BETWEEN '2026-01-01' TO '2027-01-01';"
            ],
            "pemisah": " ",
            "explanation": "Kueri penyaringan tanggal yang sargable (menggunakan indeks) menulis rentang eksplisit `created_at >= ... AND created_at < ...`. Membungkus kolom dengan `YEAR()` akan membuat indeks tidak terpakai (index scan menjadi full table scan), ini jebakan yang sering dilakukan."
          }
        },
        {
          "kind": "step",
          "id": "sql-9-my-4",
          "title": "Mendeteksi Query Lambat (Slow Query Log)",
          "explanation": "Fitur Slow Query Log di MySQL mencatat seluruh kueri yang waktu eksekusinya melebihi nilai ambang batas variabel `long_query_time` (misal 2 detik). Fitur ini diaktifkan dengan perintah `SET GLOBAL slow_query_log = 'ON'` untuk membantu tim sysadmin memantau kueri-kueri bermasalah yang memberatkan CPU server produksi. Log kueri lambat ini menjadi acuan utama saat melakukan kegiatan tuning performa database. Jebakan utamanya adalah menetapkan nilai `long_query_time` terlalu kecil di server sibuk, yang dapat membanjiri kapasitas penyimpanan log.",
          "example": {
            "code": "SET GLOBAL slow_query_log = 'ON';\nSET GLOBAL long_query_time = 2;\nSHOW VARIABLES LIKE 'slow_query%';",
            "output": "Query OK, 0 rows affected (0.00 sec)\nQuery OK, 0 rows affected (0.00 sec)\n\n+---------------------+-------------------------------+\n| Variable_name       | Value                         |\n+---------------------+-------------------------------+\n| slow_query_log      | ON                            |\n| slow_query_log_file | /var/lib/mysql/mysql-slow.log |\n+---------------------+-------------------------------+\n2 rows in set (0.01 sec)",
            "note": "`Query OK, 0 rows affected` bukan berarti gagal — perintah pengaturan memang tidak menyentuh baris data. Yang membuktikan pengaturannya masuk adalah `SHOW VARIABLES`, dan kolom `slow_query_log_file` memberitahu di mana log-nya harus dicari."
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
          "solution": "SET GLOBAL slow_query_log = 'ON';",
          "susunKode": {
            "question": "Susun perintah pengaktifan slow query log global pada MySQL.",
            "potongan": [
              "SET GLOBAL",
              "slow_query_log",
              "= 'ON';"
            ],
            "pengecoh": [
              "CONFIG GLOBAL",
              "slow_log_enable",
              "= TRUE;"
            ],
            "pemisah": " ",
            "explanation": "Mengubah variabel konfigurasi global MySQL dilakukan dengan `SET GLOBAL variabel = 'NILAI'`. Istilah fiktif 'CONFIG GLOBAL' atau nama variabel 'slow_log_enable' adalah kesalahan menggoda yang sering membingungkan."
          }
        },
        {
          "kind": "step",
          "id": "sql-9-my-5",
          "title": "Mode Ketat SQL (STRICT_TRANS_TABLES)",
          "explanation": "Pengaturan `sql_mode = 'STRICT_TRANS_TABLES'` memaksa MySQL untuk menolak penyisipan data yang tidak valid (seperti angka terpotong atau teks melebihi kapasitas kolom) dengan melempar Error. Pada versi MySQL lama tanpa mode ketat, MySQL akan mengubah data tidak valid tersebut secara implisit dan hanya melempar Warning yang mengakibatkan korupsi data. Mode ketat ini wajib diaktifkan pada semua aplikasi backend modern untuk menjaga konsistensi skema. Jebakan yang perlu diwaspadai adalah aplikasi legacy yang mungkin crash saat mode ketat ini pertama kali diaktifkan.",
          "example": {
            "code": "-- mode longgar (MySQL lama):\nSET SESSION sql_mode = '';\nINSERT INTO users (age) VALUES ('abc');\n\n-- mode ketat:\nSET SESSION sql_mode = 'STRICT_TRANS_TABLES';\nINSERT INTO users (age) VALUES ('abc');",
            "output": "Query OK, 1 row affected, 1 warning (0.01 sec)   <-- data 'abc' MASUK sebagai 0\n\nQuery OK, 0 rows affected (0.00 sec)\nERROR 1366 (HY000): Incorrect integer value: 'abc' for column 'age' at row 1",
            "note": "Bandingkan kedua keluaran: tanpa mode ketat, MySQL hanya memberi *warning* lalu menyimpan angka 0 — datanya rusak diam-diam dan tidak ada yang tahu sampai laporan terlihat aneh. Dengan mode ketat, barisnya ditolak dan aplikasimu langsung mendapat error yang bisa ditangani."
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
          "solution": "SET SESSION sql_mode = 'STRICT_TRANS_TABLES';",
          "susunKode": {
            "question": "Susun perintah pengubahan mode SQL sesi pada MySQL.",
            "potongan": [
              "SET SESSION",
              "sql_mode =",
              "'STRICT_TRANS_TABLES';"
            ],
            "pengecoh": [
              "SET GLOBAL ONLY",
              "sql_strict_mode =",
              "'NO_STRICT_MODE';"
            ],
            "pemisah": " ",
            "explanation": "Mengatur mode SQL pada sesi koneksi MySQL saat ini menggunakan `SET SESSION sql_mode = '...'`. Frasa 'SET GLOBAL ONLY' atau nama 'sql_strict_mode' merupakan jebakan istilah yang keliru dalam administrasi MySQL."
          }
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
          "solution": "SHOW REPLICA STATUS;",
          "susunKode": {
            "question": "Susun perintah SHOW REPLICA STATUS pada MySQL.",
            "potongan": [
              "SHOW REPLICA",
              "STATUS;"
            ],
            "pengecoh": [
              "CHECK REPLICATION",
              "VIEW REPLICA STATUS;",
              "GET SLAVE STATUS;"
            ],
            "pemisah": " ",
            "explanation": "Perintah administratif MySQL 8.0+ untuk memeriksa status replikasi adalah `SHOW REPLICA STATUS;`. Menggunakan 'CHECK REPLICATION' atau 'VIEW REPLICA' merupakan kesalahan klausa administratif yang sering jebakan bagi pemula."
          }
        },
        {
          "kind": "step",
          "id": "sql-9-my-7",
          "title": "Mengunci Baris dengan FOR UPDATE",
          "explanation": "Klausul `FOR UPDATE` memasang kuncian tingkat baris eksklusif (Exclusive Row-Level Lock) pada baris data yang dipilih di dalam sesi transaksi InnoDB. Memasang `FOR UPDATE` mencegah transaksi koneksi lain untuk mengubah atau menghapus baris tersebut sampai transaksi aktif selesai dipanggil `COMMIT` atau `ROLLBACK`. Fitur ini wajib dipakai untuk mencegah masalah Race Condition saat menguraikan stok barang edisi terbatas atau pemotongan saldo dompet digital. Jebakan bahayanya adalah transaksi menggantung yang dapat menyebabkan Deadlock pada server.",
          "example": {
            "code": "START TRANSACTION;\nSELECT * FROM accounts WHERE id = 1 FOR UPDATE;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT;",
            "output": "-- Sesi A:\nQuery OK, 0 rows affected (0.00 sec)\n+----+---------+\n| id | balance |\n+----+---------+\n|  1 |   10000 |\n+----+---------+\n1 row in set (0.00 sec)\n\n-- Sesi B menjalankan SELECT ... FOR UPDATE pada baris yang sama:\nERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction",
            "note": "Pesan `Lock wait timeout` di sesi B itulah bukti penguncian bekerja: baris 1 tidak bisa dibaca-untuk-diubah oleh siapa pun sampai sesi A menutup transaksinya. Tanpa `FOR UPDATE`, kedua sesi membaca saldo 10.000 lalu sama-sama mengurangi 100, dan uang seratus menghilang tanpa jejak."
          },
          "instruction": "Dua permintaan checkout bisa mengurangi stok produk yang sama pada saat bersamaan. Ambil baris stok produk ber-`product_id` 10 dari tabel `inventory` dengan cara yang MENGUNCI baris itu sampai transaksimu selesai, sehingga transaksi lain menunggu giliran.",
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
          "solution": "SELECT * FROM inventory WHERE product_id = 10 FOR UPDATE;",
          "susunKode": {
            "question": "Susun query SELECT ... FOR UPDATE untuk mengunci baris data di MySQL InnoDB.",
            "potongan": [
              "SELECT * FROM inventory",
              "WHERE product_id = 10",
              "FOR UPDATE;"
            ],
            "pengecoh": [
              "WITH LOCK;",
              "LOCK FOR WRITE;",
              "EXCLUSIVE LOCK;"
            ],
            "pemisah": " ",
            "explanation": "Pessimistic locking pada MySQL InnoDB untuk mengunci baris data saat SELECT menggunakan frasa `FOR UPDATE;`. Penggunaan istilah fiktif 'WITH LOCK' atau 'LOCK FOR WRITE' mengelirukan pembelajar secara jebakan dalam concurrency."
          }
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
                "range"
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
                "Karena fungsi waktu secara otomatis menghapus index dari memori server",
                "Karena B-Tree index di MySQL hanya bisa dibuat pada kolom bertipe data teks",
                "Karena fungsi YEAR() mengembalikan nilai bertipe boolean"
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
                "Otomatis mengubah level isolasi transaksi menjadi READ UNCOMMITTED",
                "Membuat cadangan baris data ke tabel sementara di disk",
                "Mengeksekusi perintah UPDATE tanpa memerlukan klausa WHERE"
              ],
              "answerIndex": 0,
              "explanation": "FOR UPDATE mengunci baris data secara eksklusif untuk mencegah race condition (misal perebutan stok barang / saldo rekening)."
            },
            {
              "id": "q4",
              "type": "pilihan-ganda",
              "question": "Di MySQL, primary key pada tabel InnoDB disimpan bersama data baris dalam satu struktur yang disebut Clustered Index. Apa konsekuensi buruk jika kamu menggunakan UUID (36 karakter acak) sebagai primary key pada tabel bertrafik tinggi?",
              "choices": [
                "Data baris harus terus-menerus diurutkan ulang secara fisik karena UUID tidak berurutan, menyebabkan page split berlebihan dan fragmentasi",
                "MySQL otomatis menolak tipe data teks acak pada kolom primary key",
                "UUID menyebabkan secondary index tidak bisa membaca kolom foreign key",
                "Kapasitas tabel menjadi terbatas maksimal 10.000 baris"
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
          "body": "# Strategi Memilih & Migrasi antar Mesin Database\n\nDi dunia rekayasa perangkat lunak, tidak ada satu teknologi yang selalu terbaik untuk semua situasi. Keputusan memilih antara PostgreSQL, MySQL, atau SQLite, serta kemampuan memigrasikan data antar sistem tanpa downtime, adalah keahlian arsitektural bernilai tinggi.\n\n---\n\n## 1. Matriks Perbandingan Arsitektur Database\n\n| Kriteria Evaluasi | PostgreSQL | MySQL (InnoDB) | SQLite |\n|---|---|---|---|\n| **Model Arsitektur** | Multi-Process (Sangat terisolasi) | Multi-Threaded (Hemat memory thread) | Serverless / File-based (Embed) |\n| **Kekuatan Utama** | Kepatuhan SQL ketat, JSONB, FTS, ekstensi (PostGIS) | Kecepatan baca tinggi, ekosistem masif, replikasi matang | Nol konfigurasi, sangat cepat untuk lokal & mobile |\n| **Kesesuaian Penggunaan** | Sistem analitik, fintech, aplikasi kompleks, Supabase | Aplikasi web CMS, e-commerce, Laravel, microservices | Mobile apps, CLI tools, testing suite, embedded devices |\n| **Tipe Data Boolean** | Mendukung tipe sejati (`BOOLEAN`: true/false) | Ditransformasikan menjadi `TINYINT(1)` (1/0) | Disimpan sebagai INTEGER (0 atau 1) |\n\n---\n\n## 2. Kapan Memilih PostgreSQL vs MySQL?\n\n### Pilih **PostgreSQL** jika:\n1. Aplikasimu memerlukan query analitik berat, pelaporan dengan Window Functions kompleks, dan Recursive CTE.\n2. Memerlukan penyimpanan dokumen fleksibel terindeks via **JSONB** dan pencarian teks penuh (*Full-Text Search*) tanpa dependensi Elasticsearch.\n3. Memerlukan ekstensi geospasial terbaik di dunia (**PostGIS**) untuk aplikasi logistik atau pemetaan lokasi.\n4. Mengembangkan aplikasi modern dengan arsitektur Row Level Security (RLS) di atas Supabase.\n\n### Pilih **MySQL** jika:\n1. Menggunakan ekosistem framework seperti **PHP / Laravel** di mana perkakas dan komunitasnya sangat matang di atas MySQL.\n2. Tim sudah sangat terbiasa dengan operasional replikasi MySQL berskala besar.\n3. Kebutuhan data didominasi oleh operasi CRUD sederhana dengan throughput baca yang sangat masif.\n\n---\n\n## 3. Peta Perbedaan Sintaks Antar Database\n\n| Fitur / Fungsi | Sintaks PostgreSQL | Sintaks MySQL |\n|---|---|---|\n| **String Concatenation** | `first_name || ' ' || last_name` | `CONCAT(first_name, ' ', last_name)` |\n| **Primary Key Otomatis** | `INT GENERATED ALWAYS AS IDENTITY` | `INT AUTO_INCREMENT` |\n| **Upsert (Insert/Update)** | `ON CONFLICT (col) DO UPDATE ...` | `ON DUPLICATE KEY UPDATE ...` |\n| **Pencarian Case-Insensitive** | `WHERE email ILIKE '%test%'` | `WHERE email LIKE '%test%'` (default collation) |\n| **Ekstraksi Teks JSON** | `payload->>'field'` | `payload->>'$.field'` |\n\n---\n\n## 4. Pola Migrasi Skema Zero-Downtime (Expand and Contract)\n\nDi database berukuran ratusan gigabyte dengan jutaan user aktif, menjalankan perintah migrasi DDL yang mengubah nama kolom atau menambah kolom NOT NULL bisa mengunci tabel selama berjam-jam dan mematikan aplikasi.\n\nGunakan **Pola Expand and Contract (Blue-Green Database Migration)**:\n\n```text\n+-------------------------------------------------------------------------------+\n|                    POLA MIGRASI EXPAND AND CONTRACT                           |\n+-------------------------------------------------------------------------------+\n| 1. EXPAND      --> Tambahkan kolom baru (nullable) tanpa menghapus kolom lama.|\n|                    Contoh: Tambah full_name VARCHAR(100) NULL.                |\n| 2. DUAL-WRITE  --> Update backend agar menulis ke kolom lama dan baru          |\n|                    secara bersamaan.                                          |\n| 3. BACKFILL    --> Jalankan worker latar belakang bertahap untuk menyalin     |\n|                    data lama ke kolom baru.                                   |\n| 4. CONTRACT    --> Ubah backend untuk hanya membaca dari kolom baru.          |\n| 5. CLEANUP     --> Hapus kolom lama setelah sistem berjalan stabil 100%.      |\n+-------------------------------------------------------------------------------+\n```\n\n---\n\n## 5. Strategi & Verifikasi Integritas Data Pasca-Migrasi\n\nMemigrasikan database dari MySQL ke PostgreSQL (misal menggunakan tool open-source **`pgloader`**) memerlukan verifikasi ketat sebelum switchover:\n1. **Verifikasi Jumlah Baris (`COUNT`):** Pastikan total baris di setiap tabel cocok di kedua sistem.\n2. **Verifikasi Nilai Finansial (`SUM`):** Bandingkan total nilai numerik penting (misal: `SUM(total_amount)` pada tabel pesanan).\n3. **Pengecekan Checksum Data:** Hitung hash MD5 dari kumpulan baris kunci untuk memastikan tidak ada karakter teks atau zona waktu tanggal yang terpotong secara diam-diam.\n4. **Verifikasi Sequence Identity:** Pastikan nilai sequence di PostgreSQL sudah di-set ke nilai maksimum ID saat ini (`SELECT setval(..., (SELECT MAX(id) FROM table))`) agar insert data baru tidak bentrok.\n\n---\n\n## 6. Jebakan & Kesalahan Umum Pemula\n\n1. **Jebakan Tanggal Nol MySQL (`0000-00-00`):** MySQL versi lama mengizinkan tanggal invalid `0000-00-00`. PostgreSQL akan menolak mentah-mentah nilai ini dengan error fatal. Data tanggal nol wajib dibersihkan atau diubah menjadi `NULL` sebelum migrasi.\n2. **Jebakan Boolean 0/1:** Di MySQL, boolean disimpan sebagai integer `0` atau `1`. Di PostgreSQL, kolom bertipe boolean sejati menuntut nilai `TRUE` atau `FALSE`. Kueri backend seperti `WHERE is_active = 1` akan memicu type mismatch error di PostgreSQL.\n3. **Perbedaan Case Sensitivity Collation:** Kolom teks di MySQL dengan collation `_ci` (*case-insensitive*) menganggap `'Bimo'` dan `'bimo'` sama. Di PostgreSQL standar, perbandingan teks bersifat *case-sensitive*.\n\n---\n\n## 7. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Memimpin inisiatif migrasi sistem warisan (*legacy migration*), perancangan arsitektur backend baru, dan negosiasi teknologi di tingkat pimpinan engineering.\n\n**Di Technical Interview:**\n- *\"Tim kami berencana memigrasikan database dari MySQL ke PostgreSQL. Apa saja risiko arsitektur dan perbedaan tipe data yang wajib diwaspadai?\"*\n- *\"Bagaimana strategimu melakukan migrasi skema database di tabel dengan 50 juta baris tanpa menyebabkan downtime aplikasi?\"*"
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
          "solution": "SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;",
          "susunKode": {
            "question": "Susun query CONCAT untuk penggabungan string nama di SQL.",
            "potongan": [
              "SELECT CONCAT(first_name,",
              "' ', last_name)",
              "AS full_name FROM users;"
            ],
            "pengecoh": [
              "CONCAT_WS(first_name, last_name)",
              "JOIN_STRING(first_name, last_name)",
              "AS total_name FROM users;"
            ],
            "pemisah": " ",
            "explanation": "Fungsi standar penggabungan string pada MySQL (dan didukung PostgreSQL) adalah `CONCAT(str1, str2, ...)`. Penggunaan `CONCAT_WS` tanpa delimiter awal atau kata 'JOIN_STRING' adalah bentuk kekeliruan sintaks portabilitas yang menggoda."
          }
        },
        {
          "kind": "step",
          "id": "sql-10-mig-2",
          "title": "Penanganan Upsert (Insert or Update)",
          "explanation": "Operasi Upsert menyisipkan baris data baru atau memperbarui nilai jika kunci utama (Primary Key) sudah ada di tabel. PostgreSQL menggunakan sintaks `ON CONFLICT (email) DO UPDATE SET ...`, sedangkan MySQL menggunakan sintaks `ON DUPLICATE KEY UPDATE ...`. Operasi ini sangat praktis digunakan untuk menyelaraskan data sinkronisasi API tanpa harus memanggil dua kueri terpisah (`SELECT` lalu `INSERT`/`UPDATE`). Jebakan yang sering ditemui saat migrasi adalah perbedaan penanganan kolom mana yang dipicu saat terjadi bentrokan nilai kunci.",
          "example": {
            "code": "INSERT INTO stats (id, views) VALUES (1, 1)\nON CONFLICT (id) DO UPDATE SET views = stats.views + 1;\n\n-- dijalankan dua kali, lalu:\nSELECT * FROM stats;",
            "output": "INSERT 0 1\nINSERT 0 1\n\n id | views\n----+-------\n  1 |     2\n(1 row)",
            "note": "Perhatikan `INSERT 0 1` muncul dua kali padahal barisnya tetap satu — pada perintah kedua yang terjadi sebenarnya UPDATE. Nilai `views` naik menjadi 2, dan itu bukti penghitungnya bekerja tanpa perlu `SELECT` pemeriksa lebih dulu."
          },
          "instruction": "Kueri ini sedang dipindahkan dari MySQL yang memakai `ON DUPLICATE KEY UPDATE updated_at = NOW()`. Tulis padanannya untuk PostgreSQL: bila bentrok terjadi pada kolom `email`, baris lama diperbarui kolom `updated_at`-nya dengan waktu sekarang.",
          "starterCode": "-- Versi MySQL: INSERT ... ON DUPLICATE KEY UPDATE updated_at = NOW()\nINSERT INTO users (email, updated_at) VALUES ('ana@test.com', NOW())\n-- tulis padanan PostgreSQL-nya di bawah ini:\n",
          "language": "text",
          "tests": [
            {
              "pattern": "ON\\s+CONFLICT\\s*\\(\\s*email\\s*\\)",
              "message": "Versi PostgreSQL menyebut KOLOM penyebab bentroknya secara eksplisit di dalam tanda kurung. Ini bedanya dengan MySQL yang cukup menyebut \"duplicate key\" tanpa nama kolom."
            },
            {
              "pattern": "DO\\s+UPDATE\\s+SET\\s+updated_at\\s*=",
              "message": "Setelah menyebut kolom bentroknya, tentukan tindakannya: perbarui kolom waktu pada baris lama. (`DO NOTHING` hanya melewatkan barisnya tanpa mengubah apa pun.)"
            },
            {
              "pattern": "NOW\\s*\\(\\s*\\)|CURRENT_TIMESTAMP",
              "message": "Isi nilainya dengan waktu sekarang dari database, bukan waktu dari aplikasimu — jam server aplikasi dan server database bisa berbeda. `NOW()` maupun `CURRENT_TIMESTAMP` sama-sama diterima."
            }
          ],
          "solution": "INSERT INTO users (email, updated_at) VALUES ('ana@test.com', NOW())\nON CONFLICT (email) DO UPDATE SET updated_at = NOW();",
          "susunKode": {
            "question": "Susun klausa ON CONFLICT DO UPDATE untuk upsert di PostgreSQL.",
            "potongan": [
              "INSERT INTO users (email, updated_at) VALUES ('ana@test.com', NOW())",
              "\nON CONFLICT (email) DO UPDATE SET updated_at = NOW();"
            ],
            "pengecoh": [
              "\nON DUPLICATE KEY UPDATE updated_at = NOW();",
              "\nON OVERLAP (email) DO UPDATE SET updated_at = NOW();"
            ],
            "pemisah": "",
            "explanation": "Sintaks PostgreSQL untuk upsert adalah `ON CONFLICT (kolom) DO UPDATE SET ...`. Frasa 'ON DUPLICATE KEY UPDATE' adalah sintaks khusus MySQL, bukan PostgreSQL. Menggunakannya di PostgreSQL adalah jebakan umum saat migrasi database."
          }
        },
        {
          "kind": "step",
          "id": "sql-10-mig-3",
          "title": "Penanganan Tipe Boolean & Date Invalid",
          "explanation": "Penanganan tipe data Boolean dan nilai tanggal invalid berbeda signifikan antar mesin database. PostgreSQL mendukung tipe data `BOOLEAN` murni (`TRUE`/`FALSE`) dan menolak tegas tanggal nol `0000-00-00`, sedangkan MySQL mengonversi tipe boolean menjadi `TINYINT(1)` (`1`/`0`). Penyesuaian skema wajib dilakukan saat proses migrasi data agar tidak terjadi exception penolakan tipe data pada database tujuan. Jebakan terbanyak saat migrasi dari MySQL ke PostgreSQL adalah gagalnya import data akibat adanya record tanggal `0000-00-00` pada data lama.",
          "example": {
            "code": "-- data lama dari MySQL memuat tanggal nol; PostgreSQL menolaknya:\nCREATE TABLE t_migrasi (tgl DATE);\nINSERT INTO t_migrasi VALUES ('0000-00-00');",
            "output": "CREATE TABLE\nERROR:  date/time field value out of range: \"0000-00-00\"\nLINE 1: INSERT INTO t_migrasi VALUES ('0000-00-00');\n                                      ^",
            "note": "Inilah pesan yang menghentikan ribuan proses migrasi MySQL ke PostgreSQL di tengah jalan. MySQL lama menerima `0000-00-00` sebagai \"tanggal kosong\"; PostgreSQL tidak mengenal konsep itu sama sekali. Bersihkan dulu di sisi sumber (`UPDATE ... SET tgl = NULL WHERE tgl = '0000-00-00'`) sebelum data dipindahkan."
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
          "solution": "is_active BOOLEAN DEFAULT TRUE",
          "susunKode": {
            "question": "Susun definisi kolom BOOLEAN DEFAULT TRUE pada PostgreSQL.",
            "potongan": [
              "is_active BOOLEAN",
              "DEFAULT TRUE"
            ],
            "pengecoh": [
              "is_active TINYINT(1)",
              "INITIAL TRUE"
            ],
            "pemisah": " ",
            "explanation": "PostgreSQL mendukung tipe data BOOLEAN asli dengan nilai default `TRUE` atau `FALSE`. Penggunaan `TINYINT(1)` adalah tipe konvensi bawaan MySQL, yang sering keliru dibawa saat berpindah ke PostgreSQL sebagai jebakan pemula."
          }
        },
        {
          "kind": "step",
          "id": "sql-10-mig-4",
          "title": "Justifikasi Arsitektur Pemilihan Database",
          "explanation": "Pemilihan arsitektur database harus didasarkan pada kebutuhan teknis aplikasi dan keahlian tim, bukan sekadar mengikuti tren teknologi. Pilih MySQL untuk aplikasi web berbasis PHP/Laravel yang membutuhkan efisiensi pembacaan data tinggi dan hosting murah, serta pilih PostgreSQL untuk aplikasi yang membutuhkan fitur data kompleks seperti JSONB, geospasial, dan analitik. Justifikasi teknis ini menjadi poin penilaian utama dalam wawancara kerja tingkat senior. Jebakan terbesar tim engineering adalah mengganti mesin database tanpa mempertimbangkan biaya migrasi data dan refactoring kode.",
          "example": {
            "code": "-- argumen teknis, bukan selera: satu query JSONB tanpa tabel tambahan\nSELECT id, payload->>'tier' AS tier\nFROM users\nWHERE payload->>'tier' = 'gold';",
            "output": " id | tier \n----+------\n  1 | gold\n  3 | gold\n(2 rows)",
            "note": "Kemampuan menyaring isi dokumen JSON langsung di SQL inilah alasan teknis yang paling sering dipakai untuk memilih PostgreSQL — data semi-terstruktur tertangani tanpa menambah database kedua. Sebutkan alasan sekonkret ini saat ditanya \"kenapa pakai X?\", bukan \"karena lebih modern\"."
          },
          "instruction": "Kamu diminta memberi alasan teknis kenapa tim tetap memakai PostgreSQL alih-alih menambah database dokumen terpisah. Buktikan dengan query: tabel `users` punya kolom JSONB `payload`, dan kamu perlu menyaring pengguna yang field `tier`-nya bernilai `gold` — langsung di SQL, tanpa tabel tambahan.",
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
          "solution": "SELECT * FROM users WHERE payload->>'tier' = 'gold';",
          "susunKode": {
            "question": "Susun query penyaringan JSONB PostgreSQL untuk tier bernilai gold.",
            "potongan": [
              "SELECT * FROM users",
              "WHERE payload->>'tier' =",
              "'gold';"
            ],
            "pengecoh": [
              "WHERE payload->'tier' =",
              "WHERE JSON_EXTRACT(payload, '$.tier') ="
            ],
            "pemisah": " ",
            "explanation": "Untuk mengekstrak nilai string dari JSONB pada PostgreSQL digunakan operator `->>`. Sintaks `JSON_EXTRACT()` merupakan fungsi bawaan MySQL, yang menjadi jebakan saat migrasi ke PostgreSQL dalam memfilter kolom JSON."
          }
        },
        {
          "kind": "step",
          "id": "sql-10-mig-5",
          "title": "Transformasi Data saat Migrasi",
          "explanation": "Prosedur transformasi data saat migrasi antar mesin membutuhkan skrip ETL khusus atau alat otomatis seperti `pgloader` untuk mengonversi DDL skema dan tipe data. Selama proses migrasi, alur kerja yang direkomendasikan adalah melakukan migrasi struktur tabel terlebih dahulu, mengimpor isi data, lalu membuat indeks dan constraint relasi di akhir. Urutan ini mempercepat waktu pemindahan data hingga puluhan kali lipat. Jebakan utamanya adalah membuat indeks terlebih dahulu sebelum mengimpor jutaan baris data yang membuat waktu import menjadi sangat lama.",
          "example": {
            "code": "pgloader mysql://user:pass@localhost/db_lama postgresql://user:pass@localhost/db_baru",
            "output": "2026-07-29T20:31:02.004000+07:00 LOG pgloader version \"3.6.10\"\n2026-07-29T20:31:02.451000+07:00 LOG Migrating from #<MYSQL-CONNECTION mysql://user@localhost:3306/db_lama>\n2026-07-29T20:31:02.452000+07:00 LOG Migrating into #<PGSQL-CONNECTION pgsql://user@localhost:5432/db_baru>\n             table name     errors       rows      bytes      total time\n-----------------------  ---------  ---------  ---------  --------------\n                  users          0      50000     4.1 MB          1.204s\n                 orders          0     182904    22.7 MB          6.881s\n-----------------------  ---------  ---------  ---------  --------------\n        Total import time          0     232904    26.8 MB          8.085s",
            "note": "Kolom `errors` adalah yang pertama dibaca, bukan `total time`: pgloader TIDAK berhenti saat sebuah baris ditolak — ia mencatatnya lalu lanjut. Migrasi yang \"sukses\" dengan errors 137 berarti 137 baris tidak ikut pindah, dan itu baru ketahuan kalau angkanya diperiksa."
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
          "solution": "pgloader mysql://root@localhost/source_db postgresql://postgres@localhost/target_db",
          "susunKode": {
            "question": "Susun perintah CLI pgloader untuk migrasi database MySQL ke PostgreSQL.",
            "potongan": [
              "pgloader",
              "mysql://root@localhost/source_db",
              "postgresql://postgres@localhost/target_db"
            ],
            "pengecoh": [
              "mariadb://root@localhost/source_db",
              "db-migrate",
              "mysql-to-postgres"
            ],
            "pemisah": " ",
            "explanation": "Perintah CLI `pgloader` menerima URL koneksi database asal (MySQL) lalu URL database tujuan (PostgreSQL). Penggunaan URL mariadb:// atau CLI fiktif 'db-migrate' mengelirukan pembelajar secara jebakan."
          }
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
          "solution": "SELECT COUNT(*) FROM orders;",
          "susunKode": {
            "question": "Susun query SQL untuk menghitung jumlah total baris pada tabel orders.",
            "potongan": [
              "SELECT",
              "COUNT(*)",
              "FROM orders;"
            ],
            "pengecoh": [
              "SUM(*)",
              "TOTAL_ROWS(*)",
              "FROM payments;"
            ],
            "pemisah": " ",
            "explanation": "Fungsi agregasi standar SQL untuk menghitung jumlah total baris pada sebuah tabel adalah `COUNT(*)`. Fungsi fiktif 'TOTAL_ROWS(*)' atau 'SUM(*)' adalah bentuk jebakan sintaks yang keliru dalam menghitung baris."
          }
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
                "MySQL mendukung BOOLEAN sejati, sedangkan PostgreSQL menyimpannya sebagai VARCHAR(5)",
                "Kedua database menyimpan boolean dalam representasi floating point",
                "PostgreSQL hanya mengizinkan nilai boolean bernilai TRUE"
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
                "pg_dump",
                "docker-compose"
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
                "Aplikasi CMS blog statis yang hanya membutuhkan hosting shared berbiaya rendah",
                "Sistem yang hanya membutuhkan penyimpanan dokumen key-value sederhana",
                "Aplikasi mobile tanpa koneksi internet"
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
                "Kolom tersebut wajib diubah menjadi tipe TEXT berformat 'TRUE'/'FALSE'",
                "Konversi tidak diperlukan karena PostgreSQL otomatis mengenali angka 1 sebagai boolean sejati di semua kueri",
                "Kolom tersebut harus dihapus dan dibuat ulang secara manual"
              ],
              "answerIndex": 0,
              "explanation": "MySQL menyimpan boolean sebagai TINYINT(1) (angka 0 atau 1), sedangkan PostgreSQL memiliki tipe BOOLEAN asli. Tool migrasi seperti pgloader biasanya menangani konversi ini otomatis."
            },
            {
              "id": "q5",
              "type": "pilihan-ganda",
              "question": "Ketika seorang interviewer bertanya 'Kenapa timmu memilih PostgreSQL dibanding MySQL?', jawaban mana yang paling kuat secara teknis?",
              "choices": [
                "Karena kebutuhan kami pada JSONB ter-index untuk API fleksibel, full-text search bawaan, dan dukungan ekstensi seperti PostGIS untuk data geospasial",
                "Karena PostgreSQL memiliki maskot gajah yang lebih menarik",
                "Karena MySQL tidak mendukung penggunaan klausa JOIN",
                "Karena PostgreSQL tidak memerlukan memori RAM sama sekali"
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
          "body": "# Integrasi SQL di Aplikasi Backend, Connection Pool & ORM\n\nKeahlian menulis SQL murni baru menjadi solusi nyata saat terhubung dengan aplikasi backend (Node.js/Express/NestJS, Go, Python/FastAPI, atau PHP/Laravel). Modul ini mempelajari cara menghubungkan backend ke database secara aman, efisien, dan siap menghadapi beban jutaan pengguna.\n\n---\n\n## 1. Menghubungkan Backend & Krisis Connection Pooling\n\nAplikasi backend tidak boleh membuka dan menutup koneksi database baru untuk setiap HTTP request yang masuk. Membuka koneksi baru membutuhkan proses *TCP Three-Way Handshake*, negosiasi keamanan TLS, dan alokasi memori proses di database server.\n\n### Mengapa Wajib Menggunakan Connection Pool?\n**Connection Pool** membuat sejumlah koneksi aktif tetap terbuka di memori. Ketika request masuk, aplikasi \"meminjam\" satu koneksi dari pool, mengeksekusi kueri, lalu \"mengembalikannya\" ke pool agar bisa dipakai oleh request lain.\n\n```javascript\n// Contoh Node.js dengan driver pg (Pool):\nimport { Pool } from 'pg';\n\nconst pool = new Pool({\n  host: process.env.DB_HOST,\n  user: process.env.DB_USER,\n  password: process.env.DB_PASSWORD,\n  database: 'production_db',\n  max: 20, // Maksimal 20 koneksi aktif bersamaan\n  idleTimeoutMillis: 30000,\n});\n```\n\n### Krisis Koneksi di Era Serverless (AWS Lambda / Vercel Edge)\nPada arsitektur serverless, setiap request bisa memicu instansiasi fungsi baru secara mandiri. Jika terjadi lonjakan 500 request bersamaan, 500 fungsi lambda akan membuka 500 koneksi langsung ke PostgreSQL. Database akan kehabisan slot koneksi dan melempar error fatal: **`FATAL: remaining connection slots are reserved`**.\n**Solusi Industri:** Wajib menggunakan Connection Pooler perantara seperti **PgBouncer**, **Supabase Supavisor**, atau **AWS RDS Proxy**.\n\n---\n\n## 2. Parameterized Query: Melawan Dosa Fatal SQL Injection\n\n> ⚠️ **HUKUM UTAMA KEAMANAN BACKEND:**\n> **Dilarang keras menggabungkan input pengguna menggunakan String Concatenation atau Template Literals ke dalam kueri SQL!**\n\n```javascript\n// ❌ SANGAT BERBAHAYA (SQL INJECTION):\nconst query = `SELECT * FROM users WHERE email = '${req.body.email}'`;\n// Jika input: \"' OR '1'='1\" --> Seluruh data pengguna bocor!\n\n// ✅ AMAN (PARAMETERIZED QUERY):\nconst query = 'SELECT * FROM users WHERE email = $1';\nconst result = await pool.query(query, [req.body.email]);\n```\nPada Parameterized Query, mesin database mengompilasi struktur kueri terlebih dahulu, baru kemudian memasukkan parameter sebagai nilai data literal murni. Hacker tidak akan bisa memanipulasi struktur sintaks SQL.\n\n---\n\n## 3. Trade-Off: Raw SQL vs Query Builder vs ORM\n\n| Pendekatan | Contoh Alat | Kelebihan | Kelemahan |\n|---|---|---|---|\n| **Raw SQL** | Driver `pg`, `mysql2` | Kontrol performa 100%, akses penuh fitur mesin database | Rawan typo, tidak ada type safety otomatis |\n| **Query Builder** | Knex.js, Kysely | Fleksibel, sintaks dinamis, aman dari SQL injection | Masih perlu memahami pemetaan relasi manual |\n| **ORM** | Prisma, TypeORM, Eloquent | Produktivitas tinggi, migrasi otomatis, Type-Safe | Abstraksi bocor, risiko N+1 query, kueri kompleks lambat |\n\n---\n\n## 4. Masalah N+1 Query & Solusinya\n\nMasalah **N+1 Query** terjadi saat ORM mengeksekusi 1 kueri utama untuk mengambil daftar data induk, lalu mengeksekusi **N kueri tambahan di dalam perulangan (loop)** untuk mengambil data anak:\n\n```javascript\n// ❌ MENGHASILKAN N+1 QUERY (1 + 100 = 101 Kueri ke Database!):\nconst users = await prisma.user.findMany(); // 1 kueri\nfor (const user of users) {\n  // Mengeksekusi query tambahan untuk setiap user di dalam loop!\n  const posts = await prisma.post.findMany({ where: { userId: user.id } });\n}\n\n// ✅ SOLUSI: EAGER LOADING (Hanya 1 atau 2 Kueri Efisien):\nconst usersWithPosts = await prisma.user.findMany({\n  include: { posts: true }\n});\n```\n\n---\n\n## 5. Pagination di Dunia Kerja: Keyset (Cursor) vs Offset Pagination\n\nSebagian besar tutorial mengajarkan pagination menggunakan `LIMIT ... OFFSET ...`. Di dunia kerja pada tabel jutaan baris, **Offset Pagination adalah bencana performa**:\n\n```sql\n-- ❌ OFFSET PAGINATION:\n-- Database membaca 100.020 baris dari disk lalu membuang 100.000 baris pertama!\nSELECT * FROM orders ORDER BY id DESC LIMIT 20 OFFSET 100000;\n\n-- ✅ KEYSET / CURSOR PAGINATION:\n-- Memanfaatkan B-Tree index secara instan (Kompleksitas O(log N) stabil):\nSELECT * FROM orders WHERE id < :last_seen_id ORDER BY id DESC LIMIT 20;\n```\n\nCursor Pagination adalah standar industri yang digunakan oleh API Instagram, Twitter, dan aplikasi e-commerce untuk fitur *infinite scroll* dan navigasi data cepat.\n\n---\n\n## 6. Penanganan Transaksi di Kode Backend\n\nContoh implementasi transaksi yang aman dengan mekanisme rollback otomatis pada driver database:\n\n```javascript\nconst client = await pool.connect();\ntry {\n  await client.query('BEGIN');\n\n  // Potong saldo pengirim:\n  const deductRes = await client.query(\n    'UPDATE accounts SET balance = balance - $1 WHERE id = $2 AND balance >= $1',\n    [amount, senderId]\n  );\n  if (deductRes.rowCount === 0) throw new Error('Saldo tidak mencukupi');\n\n  // Tambah saldo penerima:\n  await client.query(\n    'UPDATE accounts SET balance = balance + $1 WHERE id = $2',\n    [amount, receiverId]\n  );\n\n  await client.query('COMMIT');\n} catch (error) {\n  await client.query('ROLLBACK');\n  throw error;\n} finally {\n  client.release(); // Kembalikan koneksi ke pool\n}\n```\n\n---\n\n## 7. Jebakan & Kesalahan Umum Pemula\n\n1. **Lupa Melepaskan Koneksi (`client.release()`):** Meminjam klien dari pool dengan `pool.connect()` tetapi lupa memanggil `client.release()` di blok `finally`. Seluruh slot koneksi akan terkuras dalam beberapa menit (*connection pool starvation*).\n2. **Melakukan Komputasi dan Filter di Memory JavaScript:** Mengambil 500.000 baris data ke Node.js lalu memfilternya dengan `array.filter()`. Selalu biarkan database melakukan penyaringan dan pengurutan menggunakan indeksnya.\n3. **Migrasi Skema Manual di Server Produksi:** Mengubah kolom langsung di production tanpa skrip migrasi berversi (Prisma Migrate, Flyway, Knex) menyebabkan desinkronisasi skema antar environment.\n\n---\n\n## 8. Kaitan ke Dunia Kerja & Technical Interview\n\n**Kapan dipakai:** Arsitektur API backend skala produksi, penulisan service layer microservices, dan perlindungan keamanan sistem aplikasi web.\n\n**Di Technical Interview:**\n- *\"Apa itu masalah N+1 Query pada ORM dan bagaimana kamu mendeteksinya di production?\"*\n- *\"Mengapa Cursor Pagination jauh lebih unggul dibanding Offset Pagination pada tabel jutaan baris?\"*\n- *\"Bagaimana cara mengamankan aplikasi backend dari serangan SQL Injection?\"*"
        },
        {
          "kind": "step",
          "id": "sql-11-1",
          "title": "Connection Pooling di Backend Node.js",
          "explanation": "Teknik Connection Pooling mengelola sekumpulan koneksi database aktif yang siap dipakai ulang oleh aplikasi backend (seperti modul `pg.Pool` di Node.js). Membuka dan menutup koneksi baru pada setiap HTTP request membutuhkan waktu handshaking yang sangat mahal (~100ms) dan dapat membuat server kehabisan memori. Connection pool mempertahankan koneksi tetap terbuka sehingga kueri dapat dieksekusi dalam orde milidetik. Jebakan terbesar pemula adalah memanggil `new Pool()` di dalam handler HTTP request yang justru membuat ribuan pool baru dan melumpuhkan server.",
          "example": {
            "code": "import { Pool } from \"pg\";\nconst pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 20 });\n\nawait pool.query(\"SELECT 1\");\nconsole.log(pool.totalCount, pool.idleCount, pool.waitingCount);",
            "output": "1 1 0",
            "note": "Tiga angka itu berturut-turut: koneksi yang terbuka, yang menganggur, dan permintaan yang MENUNGGU giliran. Angka ketiga yang terus bertambah adalah tanda pool-mu terlalu kecil atau ada query yang lupa dilepas — gejalanya di produksi: API melambat padahal CPU database santai."
          },
          "instruction": "Aplikasi backend Node.js bertrafik tinggi membutuhkan pengelolaan koneksi database yang efisien. Inisialisasi instance `Pool` baru dari driver `pg` dengan konfigurasi batas koneksi maksimal sebanyak 10 (`max: 10`).",
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
          "solution": "const pool = new Pool({ max: 10 });",
          "susunKode": {
            "question": "Susun penginisialisasian pool koneksi node-postgres (pg).",
            "potongan": [
              "const pool = new Pool({",
              "max: 10 });"
            ],
            "pengecoh": [
              "const pool = createPool({",
              "maximum: 10 });"
            ],
            "pemisah": " ",
            "explanation": "Instansiasi pool koneksi PostgreSQL node-postgres (`pg`) dibuat dengan konstruktor `new Pool({ max: 10 })`. Penggunaan `createPool` atau `maximum` (properti milik mysql2) merupakan kekeliruan API driver yang sering menggoda."
          }
        },
        {
          "kind": "step",
          "id": "sql-11-2",
          "title": "Parameterized Query Mencegah SQL Injection",
          "explanation": "Parameterized Query adalah teknik keamanan wajib yang memisahkan sintaks perintah SQL dari data variabel masukan pengguna menggunakan placeholder seperti `$1, $2` atau `?`. Dengan parameterized query, mesin database mengkompilasi struktur kueri terlebih dahulu sehingga input berbahaya dari peretas tidak akan pernah dieksekusi sebagai perintah SQL. Teknik ini merupakan satu-satunya cara ampuh untuk memusnahkan celah keamanan SQL Injection pada aplikasi web. Jebakan paling fatal di dunia web adalah menggabungkan variabel string masukan pengguna secara langsung (string concatenation) ke dalam kueri SQL.",
          "example": {
            "code": "const email = \"' OR 1=1 --\";   // masukan jahat dari form\nconst res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);\nconsole.log(res.rowCount, res.rows);",
            "output": "0 []",
            "note": "Nol baris — persis yang seharusnya, karena tidak ada pengguna yang beralamat email `' OR 1=1 --`. Teks jahat itu diperlakukan sebagai DATA, bukan perintah. Kalau query-nya disusun dengan menempel string, kondisi `1=1` ikut dieksekusi dan SELURUH tabel pengguna terkirim ke penyerang."
          },
          "instruction": "Cegah celah keamanan SQL Injection saat mengambil data profil: panggil `pool.query` secara asinkron untuk mengambil data dari tabel `users` di mana `id` dicocokkan dengan placeholder terparameter `$1`, lalu lewatkan nilai variabel `id` di dalam array parameter.",
          "starterCode": "// Tulis pool.query terparameter di sini\n",
          "language": "text",
          "tests": [
            {
              "pattern": "await\\s",
              "message": "Query database berjalan asinkron, jadi tunggu hasilnya dengan `await` — tanpa itu yang kamu pegang objek Promise, bukan datanya."
            },
            {
              "pattern": "pool\\.query\\(",
              "message": "Jalankan lewat pool yang sudah dibuat sekali di awal aplikasi, bukan koneksi baru per request."
            },
            {
              "pattern": "\\$1",
              "message": "Nilai dari pengguna TIDAK ditempel ke dalam teks query. Ganti posisinya dengan penanda parameter bergaya PostgreSQL: tanda dolar diikuti nomor urut."
            },
            {
              "pattern": "\\[\\s*id\\s*\\]",
              "message": "Nilai sebenarnya dikirim terpisah sebagai array pada argumen kedua. Pemisahan inilah yang membuat input `' OR 1=1 --` diperlakukan sebagai teks biasa, bukan sebagai perintah."
            }
          ],
          "solution": "await pool.query('SELECT * FROM users WHERE id = $1', [id]);",
          "susunKode": {
            "question": "Susun panggilan pool.query dengan placeholder $1 dan array parameter [id].",
            "potongan": [
              "await pool.query(",
              "'SELECT * FROM users WHERE id = $1',",
              "[id]);"
            ],
            "pengecoh": [
              "await pool.execute(",
              "'SELECT * FROM users WHERE id = ?',",
              "(id));"
            ],
            "pemisah": " ",
            "explanation": "Driver `pg` untuk Node.js menggunakan metode `pool.query()` dengan placeholder numerik `$1` dan parameter berbentuk array `[id]`. Placeholder `?` atau `pool.execute` adalah sintaks driver mysql2 yang menjadi jebakan."
          }
        },
        {
          "kind": "step",
          "id": "sql-11-3",
          "title": "Kueri ORM (Prisma / Eloquent) vs Raw SQL",
          "explanation": "Penggunaan ORM (seperti Prisma, TypeORM, atau Eloquent) memberikan produktivitas tinggi dengan fitur Type-Safety dan pemetaan relasi otomatis, namun Raw SQL tetap dibutuhkan untuk kueri agregasi komplek ber-performa tinggi. Developer profesional harus memahami kapan saatnya memakai kenyamanan ORM dan kapan harus menulis Raw SQL untuk optimasi kueri berat. Pemahaman mendasar tentang SQL murni menjamin kamu tidak tergantung pada satu jenis library ORM tertentu. Jebakan pemula adalah mengandalkan ORM 100% tanpa pernah memeriksa kueri SQL mentah yang dihasilkan oleh ORM tersebut di belakang layar.",
          "example": {
            "code": "const users = await prisma.user.findMany({\n  where: { status: \"active\" },\n  select: { id: true, email: true }\n});\nconsole.log(users);",
            "output": "[\n  { id: 1, email: 'ana@test.com' },\n  { id: 2, email: 'budi@test.com' }\n]",
            "note": "ORM mengembalikan array objek JavaScript yang siap dikirim sebagai JSON — itulah kenyamanan yang dibelinya. Perhatikan `select`: tanpa itu, Prisma mengambil SEMUA kolom termasuk `password_hash`, dan objek itu gampang sekali ikut terkirim ke klien."
          },
          "instruction": "Gunakan Prisma Client untuk mengambil seluruh data pengguna dari model `user` yang memiliki kriteria penyaringan kolom `role` bernilai 'admin'.",
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
          "solution": "await prisma.user.findMany({ where: { role: \"admin\" } });",
          "susunKode": {
            "question": "Susun panggilan prisma.user.findMany dengan klausa where role admin.",
            "potongan": [
              "await prisma.user.findMany(",
              "{ where: { role: \"admin\" } });"
            ],
            "pengecoh": [
              "await prisma.user.filterMany(",
              "{ where: { role: \"user\" } });"
            ],
            "pemisah": " ",
            "explanation": "Query Prisma Client untuk mencari beberapa record menggunakan metode `findMany()` dengan opsi `where: { ... }`. Pengunaan `filterMany` atau mengganti nilai filter admin menjadi user adalah kekeliruan API Prisma yang sering keliru dan jebakan."
          }
        },
        {
          "kind": "step",
          "id": "sql-11-4",
          "title": "Mendeteksi & Menghilangkan Masalah N+1",
          "explanation": "Masalah N+1 Query terjadi ketika aplikasi memanggil 1 kueri utama untuk mengambil daftar N data, lalu di dalam perulangan (loop) memanggil N kueri tambahan untuk mengambil data relasinya. Masalah ini menyebabkan ratusan kueri yang tidak perlu dikirimkan ke database sehingga memperlambat respon API backend secara drastis. Masalah N+1 diatasi dengan teknik Eager Loading (menggunakan `JOIN` atau opsi `include` pada ORM) untuk mengambil seluruh data dalam 1 kueri tunggal. Jebakan utamanya adalah tidak mendeteksi masalah N+1 selama pengembangan di lokal karena jumlah data ujicoba masih sedikit.",
          "example": {
            "code": "const usersWithProfile = await prisma.user.findMany({\n  include: { profile: true }\n});",
            "output": "-- log query Prisma TANPA include (10 user):\nSELECT * FROM \"User\";\nSELECT * FROM \"Profile\" WHERE \"userId\" = 1;\nSELECT * FROM \"Profile\" WHERE \"userId\" = 2;\n... 8 baris serupa lagi        <-- inilah N+1: 1 + 10 query\n\n-- log query DENGAN include:\nSELECT * FROM \"User\";\nSELECT * FROM \"Profile\" WHERE \"userId\" IN (1,2,3,4,5,6,7,8,9,10);\n(2 query total)",
            "note": "Cara mendeteksinya bukan dengan menebak: nyalakan log query ORM (`new PrismaClient({ log: ['query'] })`) lalu hitung barisnya. Di data lokal yang cuma 10 baris, N+1 hampir tidak terasa — di produksi dengan 5.000 baris, halaman yang sama menunggu ribuan query."
          },
          "instruction": "Endpoint daftar artikel memicu masalah N+1 query karena mengambil data profil penulis satu per satu di dalam perulangan. Tulis ulang pemanggilan `prisma.user.findMany()` menggunakan teknik Eager Loading agar relasi `posts` ikut diambil sekaligus dalam kueri yang sama.",
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
          "solution": "await prisma.user.findMany({ include: { posts: true } });",
          "susunKode": {
            "question": "Susun query Prisma Client dengan opsi include relasi posts untuk eager loading.",
            "potongan": [
              "await prisma.user.findMany({",
              "include: { posts: true } });"
            ],
            "pengecoh": [
              "await prisma.user.findAll({",
              "with: { posts: true } });"
            ],
            "pemisah": " ",
            "explanation": "Untuk melakukan eager loading relasi pada Prisma Client digunakan properti `include: { posts: true }`. Menggantikan `include` dengan `with` (sintaks ORM Drizzle) adalah jebakan khas antar-ORM yang mengelirukan."
          }
        },
        {
          "kind": "step",
          "id": "sql-11-5",
          "title": "Skema Migration di Aplikasi Nyata",
          "explanation": "Skema Migration adalah skrip terversi yang mengontrol perubahan struktur skema database (seperti penambahan tabel atau kolom) secara bertahap dan terencana. Menggunakan tool migration (seperti Prisma Migrate atau Knex Migrations) memungkinkan seluruh tim developer menyelaraskan struktur database lokal mereka dengan mudah. Di lingkungan produksi, migrasi dijalankan secara otomatis saat proses deployment menggunakan perintah seperti `npx prisma migrate deploy`. Jebakan berbahaya adalah mengubah skema database produksi secara manual via GUI client tanpa melalui skrip migrasi terversi.",
          "example": {
            "code": "npx prisma migrate dev --name add_profile",
            "output": "1 migration created and applied: 20260727_add_profile",
            "note": "Jalankan migrate deploy pada langkah deployment CI/CD otomatis."
          },
          "instruction": "Dalam pipeline deployment CI/CD ke server produksi, eksekusi seluruh berkas migrasi skema Prisma yang tertunda secara otomatis tanpa meminta interaksi konfirmasi terminal.",
          "starterCode": "# Jalankan migrasi skema produksi tertunda:\n",
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
          "solution": "npx prisma migrate deploy",
          "susunKode": {
            "question": "Susun perintah CLI Prisma npx prisma migrate deploy untuk produksi.",
            "potongan": [
              "npx prisma migrate",
              "deploy"
            ],
            "pengecoh": [
              "npx prisma-cli migrate",
              "dev"
            ],
            "pemisah": " ",
            "explanation": "Perintah Prisma CLI untuk mengeksekusi migrasi yang belum berjalan pada lingkungan produksi adalah `npx prisma migrate deploy`. `migrate dev` hanya dipakai saat pengembangan lokal, menggunakannya di produksi adalah jebakan berbahaya."
          }
        },
        {
          "kind": "step",
          "id": "sql-11-6",
          "title": "Diagnosis & Optimasi Query Lambat (EXPLAIN ANALYZE)",
          "explanation": "Diagnosis kueri lambat di aplikasi backend dilakukan dengan mengaktifkan fitur pencatatan log kueri dan menganalisis kueri bermasalah menggunakan perintah `EXPLAIN ANALYZE`. Setelah menemukan titik leher botol (seperti adanya Full Table Scan pada tabel besar), kamu dapat menambahkan indeks B-Tree yang sesuai pada kolom pencarian. Langkah diagnosis yang terstruktur ini menjamin perbaikan performa aplikasi didasarkan pada bukti data eksekusi riil, bukan sekadar tebakan. Jebakan umum adalah langsung menambah indeks secara acak tanpa terlebih dahulu menganalisis output rencana eksekusi `EXPLAIN ANALYZE`.",
          "example": {
            "code": "EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'user42@test.com';",
            "output": "                                                        QUERY PLAN                                                        \n--------------------------------------------------------------------------------------------------------------------------\n Index Scan using idx_big_email on users  (cost=0.41..8.43 rows=1 width=39) (actual time=0.024..0.025 rows=1 loops=1)\n   Index Cond: (email = 'user42@test.com'::text)\n Planning Time: 0.340 ms\n Execution Time: 0.048 ms\n(4 rows)",
            "note": "Baris `Index Cond:` adalah tanda index benar-benar dipakai untuk mempersempit pencarian; kalau yang muncul `Filter:` beserta `Rows Removed by Filter`, mesin membaca banyak baris lalu membuangnya. Urutan diagnosis query lambat selalu sama: jalankan `EXPLAIN ANALYZE`, cari simpul dengan `actual time` terbesar, baru putuskan perlu index atau perlu query yang ditulis ulang."
          },
          "instruction": "Laporan APM menunjukkan endpoint rincian pesanan pelanggan #42 mengalami perlambatan. Jalankan analisis rencana eksekusi dan catat waktu eksekusi riil dari kueri `SELECT * FROM orders WHERE user_id = 42;` menggunakan perintah `EXPLAIN ANALYZE`.",
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
          "solution": "EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 42;",
          "susunKode": {
            "question": "Susun perintah EXPLAIN ANALYZE untuk kueri pesanan pengguna ID 42.",
            "potongan": [
              "EXPLAIN ANALYZE",
              "SELECT * FROM orders WHERE user_id = 42;"
            ],
            "pengecoh": [
              "INSPECT PLAN",
              "SELECT * FROM orders WHERE user_id = 100;"
            ],
            "pemisah": " ",
            "explanation": "Pemeriksaan profil eksekusi kueri pada PostgreSQL di aplikasi dilakukan dengan menambahkan `EXPLAIN ANALYZE` di depan query SELECT. Perintah fiktif 'INSPECT PLAN' atau mengganti ID target mengelirukan pembelajar secara jebakan."
          }
        },
        {
          "kind": "quiz",
          "id": "sql-11-kuis",
          "title": "Kuis: SQL di Aplikasi",
          "questions": [
            {
              "id": "q1",
              "type": "pilihan-ganda",
              "question": "Cara paling aman dan ampuh untuk mencegah serangan SQL Injection saat mengeksekusi Raw Query dari aplikasi backend adalah?",
              "choices": [
                "Menggunakan Parameterized Query dengan placeholder (seperti $1 atau ?)",
                "Menyaring kata kunci SQL dengan fungsi string replace di backend",
                "Mengenkripsi parameter URL menggunakan Base64 sebelum dikirim",
                "Mengubah semua huruf kueri SQL menjadi huruf kapital"
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
                "Menyimpan cache respons HTML dari server web",
                "Mengompresi data transaksi sebelum disimpan ke disk",
                "Mencegah pengguna mengirimkan lebih dari 10 request per detik"
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
                "Bug di mana database kekurangan 1 kolom primary key",
                "Kondisi di mana query SQL menghasilkan N baris ditambah 1 baris kosong",
                "Keterlambatan replikasi sebesar N detik ditambah 1 detik toleransi"
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
                "Setiap kali aplikasi melayani pengguna baru",
                "Hanya saat database server tidak memiliki koneksi internet",
                "Ketika tabel database memiliki lebih dari 100 baris data"
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
                "Menyalin seluruh data produksi ke server lokal untuk pengujian",
                "Mengubah format database dari relasional menjadi dokumen NoSQL",
                "Membuat cadangan fisik harddisk server secara berkala"
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
