import re

with open('src/data/tracks/sql.ts', 'r') as f:
    content = f.read()

# Fix language
content = content.replace('language: "js"', 'language: "text"')
content = content.replace('language: "sql"', 'language: "text"')

# Fix instructions
content = content.replace(
    'instruction: "Tulis query menyaring produk dengan harga sama dengan 10000 `SELECT * FROM products WHERE price = 10000;`.",',
    'instruction: "Tulis perintah untuk mencari produk yang nilai harganya persis sama dengan 10000.",'
)
content = content.replace(
    'instruction: "Tulis query filter `SELECT * FROM users WHERE status = \'active\' AND role = \'admin\';`.",',
    'instruction: "Ketikkan query untuk memfilter pengguna yang berstatus \'active\' sekaligus berperan sebagai \'admin\'.",'
)
content = content.replace(
    'instruction: "Tulis query mengambil 10 user terurut berdasarkan `created_at DESC` `SELECT * FROM users ORDER BY created_at DESC LIMIT 10;`.",',
    'instruction: "Ambil 10 pengguna terbaru dengan mengurutkan kolom created_at secara menurun.",'
)
content = content.replace(
    'instruction: "Tulis query nilai unik `SELECT DISTINCT role FROM users;`.",',
    'instruction: "Ketikkan query untuk menampilkan daftar peran yang unik dari tabel pengguna.",'
)
content = content.replace(
    'instruction: "Tulis query pengecekan NULL `SELECT * FROM orders WHERE paid_at IS NOT NULL;`.",',
    'instruction: "Tampilkan seluruh pesanan yang nilai waktu pembayarannya tidak kosong (sudah dibayar).",'
)
content = content.replace(
    'instruction: "Tuliskan komentar `// Foreign Key links a column to a Primary Key in another table`.",',
    'instruction: "Tulislah komentar berbahasa Inggris yang menyatakan bahwa Foreign Key menghubungkan sebuah kolom ke Primary Key di tabel lain.",'
)
content = content.replace(
    'instruction: "Tulis query INNER JOIN antara orders dan users `SELECT orders.id, users.name FROM orders INNER JOIN users ON orders.user_id = users.id;`.",',
    'instruction: "Gunakan INNER JOIN untuk mengambil ID pesanan dan nama pengguna yang sesuai.",'
)
content = content.replace(
    'instruction: "Tulis query LEFT JOIN antara users dan orders `SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;`.",',
    'instruction: "Gunakan LEFT JOIN untuk menampilkan nama pengguna dan ID pesanannya. Pastikan pengguna tanpa pesanan tetap muncul.",'
)
content = content.replace(
    'instruction: "Tuliskan klausa join kedua `JOIN products ON orders.product_id = products.id`.",',
    'instruction: "Lengkapi dengan klausa JOIN ke tabel produk berdasarkan product_id pada tabel pesanan.",'
)
content = content.replace(
    'instruction: "Tuliskan klausa Self JOIN `LEFT JOIN employees m ON e.manager_id = m.id`.",',
    'instruction: "Lakukan LEFT JOIN dari tabel employees dengan dirinya sendiri untuk menghubungkan manajer (m) dengan pegawai (e).",'
)
content = content.replace(
    'instruction: "Tuliskan komentar `// Junction table connects Many-to-Many relationships`.",',
    'instruction: "Tulis komentar bahwa Junction table menghubungkan relasi Many-to-Many.",'
)
content = content.replace(
    'instruction: "Tuliskan saringan NULL `WHERE orders.id IS NULL;`.",',
    'instruction: "Saring hasil query tersebut untuk hanya menyisakan data di mana ID pesanan bernilai NULL.",'
)
content = content.replace(
    'instruction: "Tulis query agregasi `SELECT SUM(amount) AS total FROM payments;`.",',
    'instruction: "Tulis query untuk menjumlahkan seluruh amount pada tabel payments dan beri alias total.",'
)
content = content.replace(
    'instruction: "Tulis query pengelompokan `SELECT status, COUNT(*) FROM orders GROUP BY status;`.",',
    'instruction: "Kelompokkan pesanan berdasarkan statusnya dan hitung jumlah masing-masing grup.",'
)
content = content.replace(
    'instruction: "Tuliskan penyaringan HAVING `HAVING COUNT(*) > 5;`.",',
    'instruction: "Gunakan klausa HAVING untuk memfilter hasil grup yang jumlah barisnya lebih dari 5.",'
)
content = content.replace(
    'instruction: "Tuliskan subquery WHERE `WHERE price > (SELECT AVG(price) FROM products)`.":',
    'instruction: "Gunakan subquery untuk memfilter produk yang harganya melebihi rata-rata harga seluruh produk.",'
)
content = content.replace(
    'instruction: "Tuliskan subquery WHERE `WHERE price > (SELECT AVG(price) FROM products)`.",',
    'instruction: "Gunakan subquery untuk memfilter produk yang harganya melebihi rata-rata harga seluruh produk.",'
)
content = content.replace(
    'instruction: "Tuliskan deklarasi CTE `WITH HighSpenders AS (SELECT user_id FROM orders)`.",',
    'instruction: "Deklarasikan CTE bernama HighSpenders yang isinya memilih user_id dari tabel orders.",'
)
content = content.replace(
    'instruction: "Tuliskan sintaks CASE `CASE WHEN score >= 75 THEN \'Lulus\' ELSE \'Gagal\' END`.",',
    'instruction: "Gunakan kondisi CASE untuk menghasilkan \'Lulus\' jika score >= 75, dan \'Gagal\' jika sebaliknya.",'
)
content = content.replace(
    'instruction: "Tuliskan penomoran baris `ROW_NUMBER() OVER (ORDER BY id ASC)`.",',
    'instruction: "Buat penomoran baris dengan urutan id menaik (ASC).",'
)
content = content.replace(
    'instruction: "Tulis perintah INSERT `INSERT INTO categories (name) VALUES (\'Elektronik\');`.",',
    'instruction: "Tambahkan data ke tabel categories dengan nama Elektronik.",'
)
content = content.replace(
    'instruction: "Tulis perintah UPDATE `UPDATE products SET price = 20000 WHERE id = 1;`.",',
    'instruction: "Perbarui price menjadi 20000 untuk tabel products di mana id sama dengan 1.",'
)
content = content.replace(
    'instruction: "Tulis perintah DELETE `DELETE FROM logs WHERE created_at < \'2024-01-01\';`.",',
    'instruction: "Hapus data dari tabel logs di mana created_at lebih kecil dari tanggal 2024-01-01.",'
)
content = content.replace(
    'instruction: "Tuliskan perintah pembatalan transaksi `ROLLBACK;`.",',
    'instruction: "Ketikkan perintah untuk membatalkan (rollback) transaksi saat ini.",'
)
content = content.replace(
    'instruction: "Tuliskan komentar `// ACID principles guarantee reliable database transactions`.",',
    'instruction: "Tulis komentar yang menyatakan prinsip ACID menjamin transaksi database yang reliabel.",'
)
content = content.replace(
    'instruction: "Tuliskan klausa penanganan bentrokan PostgreSQL `ON CONFLICT (email) DO NOTHING;`.",',
    'instruction: "Tambahkan klausa PostgreSQL agar mengabaikan (DO NOTHING) jika terjadi konflik pada email.",'
)
content = content.replace(
    'instruction: "Tuliskan penambahan RETURNING `INSERT INTO tags (name) VALUES (\'Tech\') RETURNING *;`.",',
    'instruction: "Sisipkan tags bernama Tech dan gunakan perintah RETURNING untuk mendapatkan seluruh datanya.",'
)
content = content.replace(
    'instruction: "Tuliskan komentar `// 3NF prevents redundant data duplication`.",',
    'instruction: "Tulis komentar bahwa 3NF mencegah duplikasi data yang redundan.",'
)
content = content.replace(
    'instruction: "Tuliskan komentar `// Denormalization trade-offs storage for read performance`.",',
    'instruction: "Tulis komentar bahwa denormalisasi mengorbankan storage demi performa baca.",'
)
content = content.replace(
    'instruction: "Tuliskan komentar `// ERD models entities and relationships visually`.",',
    'instruction: "Tulis komentar bahwa ERD memodelkan entitas dan relasi secara visual.",'
)
content = content.replace(
    'instruction: "Tuliskan pembentukan tabel dengan CHECK constraint `CREATE TABLE accounts (balance INT CHECK (balance >= 0));`.",',
    'instruction: "Buat tabel accounts dengan kolom balance yang tidak boleh kurang dari 0 menggunakan CHECK constraint.",'
)
content = content.replace(
    'instruction: "Tuliskan pembuatan index `CREATE INDEX idx_orders_user_id ON orders(user_id);`.",',
    'instruction: "Buat index bernama idx_orders_user_id pada kolom user_id di tabel orders.",'
)
content = content.replace(
    'instruction: "Tuliskan komentar `// Indexes speed up reads but slow down write operations`.",',
    'instruction: "Tulis komentar bahwa Index mempercepat baca tapi memperlambat operasi tulis.",'
)
content = content.replace(
    'instruction: "Tuliskan perintah `EXPLAIN ANALYZE SELECT * FROM products;`.",',
    'instruction: "Ketikkan EXPLAIN ANALYZE sebelum query SELECT seluruh data dari products.",'
)
content = content.replace(
    'instruction: "Tuliskan perintah psql untuk keluar `\\q`.",',
    'instruction: "Ketikkan perintah khusus konsol psql untuk keluar.",'
)
content = content.replace(
    'instruction: "Tuliskan tipe data UUID `id UUID PRIMARY KEY DEFAULT gen_random_uuid()`.",',
    'instruction: "Definisikan kolom id sebagai UUID PRIMARY KEY dengan default gen_random_uuid().",'
)
content = content.replace(
    'instruction: "Tuliskan query ekstrak JSONB `SELECT payload->>\'name\' FROM logs;`.",',
    'instruction: "Ketikkan query yang mengambil field name dari kolom payload JSONB sebagai teks.",'
)
content = content.replace(
    'instruction: "Tuliskan pencarian tsvector `WHERE to_tsvector(body) @@ to_tsquery(\'search\');`.",',
    'instruction: "Gunakan fungsi pencarian full-text untuk mencari kata search pada kolom body.",'
)
content = content.replace(
    'instruction: "Tuliskan klausa identity `id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY`.",',
    'instruction: "Gunakan sintaks GENERATED ALWAYS AS IDENTITY untuk mendefinisikan kolom id.",'
)
content = content.replace(
    'instruction: "Tuliskan pemberian hak akses `GRANT SELECT ON users TO reader_user;`.",',
    'instruction: "Ketikkan perintah GRANT untuk memberi hak SELECT pada tabel users ke reader_user.",'
)
content = content.replace(
    'instruction: "Tuliskan penegasan `ENGINE=InnoDB` pada pembuatan tabel.",',
    'instruction: "Tentukan ENGINE sama dengan InnoDB untuk tabel tersebut.",'
)
content = content.replace(
    'instruction: "Tuliskan pengubahan charset `CHARACTER SET utf8mb4`.",',
    'instruction: "Tuliskan klausa CHARACTER SET menjadi utf8mb4.",'
)
content = content.replace(
    'instruction: "Tuliskan deklarasi `id INT AUTO_INCREMENT PRIMARY KEY`.",',
    'instruction: "Ketikkan definisi kolom id agar menjadi AUTO_INCREMENT PRIMARY KEY.",'
)
content = content.replace(
    'instruction: "Tuliskan atribut TIMESTAMP `created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`.",',
    'instruction: "Beri kolom created_at tipe TIMESTAMP dengan nilai bawaan CURRENT_TIMESTAMP.",'
)
content = content.replace(
    'instruction: "Tuliskan perintah ekspor mysqldump `mysqldump -u root -p dbname > backup.sql`.",',
    'instruction: "Tuliskan perintah mysqldump untuk mengekspor database dbname ke backup.sql.",'
)
content = content.replace(
    'instruction: "Tuliskan instansiasi Pool `const pool = new Pool({ max: 10 });`.",',
    'instruction: "Instansiasi class Pool baru dengan konfigurasi objek batas max bernilai 10.",'
)
content = content.replace(
    'instruction: "Tulis eksekusi query terparametrisasi `await pool.query(\'SELECT * FROM users WHERE id = $1\', [id]);`.",',
    'instruction: "Jalankan pool.query secara asinkron (menggunakan await) untuk SELECT dari users berdasarkan parameter ID array.",'
)
content = content.replace(
    'instruction: "Tuliskan komentar `// Choose ORM for speed, Raw SQL for complex reporting`.",',
    'instruction: "Tulis komentar yang menyarankan ORM untuk kecepatan pengembangan dan Raw SQL untuk reporting.",'
)
content = content.replace(
    'instruction: "Tuliskan komentar `// Detect N+1 problems by monitoring SQL query logs`.",',
    'instruction: "Tulis komentar yang menyatakan N+1 dideteksi dari log query.",'
)
content = content.replace(
    'instruction: "Tulis perintah npx untuk deploy migrasi produksi `npx prisma migrate deploy`.",',
    'instruction: "Ketikkan perintah prisma CLI (via npx) untuk melakukan migrate deploy.",'
)
content = content.replace(
    'instruction: "Tuliskan komentar `// Diagnose slow queries with EXPLAIN ANALYZE and Slow Query Logs`.",',
    'instruction: "Tulis komentar bahwa query lambat didiagnosis dengan EXPLAIN ANALYZE dan slow log.",'
)

# Tasks to fix "only writing comments"
def fix_task(id_str, starter, test, solution):
    global content
    pat = r'(id:\s*"' + id_str + r'",[\s\S]*?starterCode:\s*).*?(,\s*language:\s*"text",\s*tests:\s*\[\s*\{\s*pattern:\s*).*?(,\s*message:\s*".*?"\s*\}\s*\],\s*solution:\s*).*?(,)'
    rep = r'\1' + f'"{starter}"' + r'\2' + f'"{test}"' + r'\3' + f'"{solution}"' + r'\4'
    content = re.sub(pat, rep, content)

fix_task('sql-2-1', '-- Tulis query di sini\\n', 'SELECT\\\\s+\\\\\*\\\\s+FROM\\\\s+users\\\\s*;?', 'SELECT * FROM users;')
fix_task('sql-2-6', '-- Tulis query di sini\\n', 'SELECT\\\\s+\\\\\*\\\\s+FROM\\\\s+student_courses\\\\s*;?', 'SELECT * FROM student_courses;')
fix_task('sql-4-5', '-- Tulis perintah di sini\\n', 'BEGIN\\\\s*;?', 'BEGIN;')
fix_task('sql-5-1', '-- Tulis query di sini\\n', 'SELECT\\\\s+\\\\\*\\\\s+FROM\\\\s+users\\\\s*;?', 'SELECT * FROM users;')
fix_task('sql-5-2', '-- Tulis perintah di sini\\n', 'ALTER\\\\s+TABLE\\\\s+users\\\\s+ADD\\\\s+COLUMN\\\\s+total_orders\\\\s+INT\\\\s+DEFAULT\\\\s+0\\\\s*;?', 'ALTER TABLE users ADD COLUMN total_orders INT DEFAULT 0;')
fix_task('sql-5-3', '-- Tulis query di sini\\n', 'SELECT\\\\s+\\\\\*\\\\s+FROM\\\\s+customers\\\\s*;?', 'SELECT * FROM customers;')
fix_task('sql-5-6', '-- Tulis perintah di sini\\n', 'CREATE\\\\s+INDEX\\\\s+idx_dummy\\\\s+ON\\\\s+users\\\\s*\\\\(\\\\s*id\\\\s*\\\\)\\\\s*;?', 'CREATE INDEX idx_dummy ON users(id);')
fix_task('sql-8-3', '-- Tulis query di sini\\n', 'SELECT\\\\s+1\\\\s*;?', 'SELECT 1;')
fix_task('sql-8-4', '-- Tulis query di sini\\n', 'SELECT\\\\s+\\\\\*\\\\s+FROM\\\\s+posts\\\\s*;?', 'SELECT * FROM posts;')
fix_task('sql-8-6', '-- Tulis EXPLAIN ANALYZE di sini\\n', 'EXPLAIN\\\\s+ANALYZE\\\\s+SELECT\\\\s+\\\\\*\\\\s+FROM\\\\s+users\\\\s*;?', 'EXPLAIN ANALYZE SELECT * FROM users;')

def generate_q(q2q, q2c, q2a, q2e, q3q, q3c, q3a, q3e):
    def fmt(q, c, a, e, idx):
        return f"""
            {{
              id: "q{idx}",
              type: "pilihan-ganda",
              question: "{q}",
              choices: {c},
              answerIndex: {a},
              explanation: "{e}"
            }},"""
    return fmt(q2q, q2c, q2a, q2e, 2) + fmt(q3q, q3c, q3a, q3e, 3)

content = re.sub(
    r'(explanation: "NULL merepresentasikan nilai yang tidak ada / unknown\. Perbandingan kesetaraan dengan NULL wajib menggunakan operator `IS NULL`\.",\n\s*\},)',
    r'\1' + generate_q("Klausul mana yang digunakan untuk mengurutkan hasil query?", ["ORDER BY", "GROUP BY", "SORT BY", "LIMIT"], 0, "ORDER BY digunakan untuk mengurutkan.", "Fungsi DISTINCT adalah untuk?", ["Menghapus baris", "Menghilangkan nilai duplikat", "Menggabungkan tabel", "Menambah kolom"], 1, "DISTINCT menghilangkan baris kembar."),
    content
)

content = re.sub(
    r'(explanation: "LEFT JOIN mempertahankan seluruh data dari tabel kiri dan mengisi nilai NULL pada baris kanan yang tidak berpasangan\.",\n\s*\},)',
    r'\1' + generate_q("Apa itu Primary Key?", ["Kunci unik", "Kunci tamu", "Indeks", "Tidak ada"], 0, "Primary key adalah unik.", "Fungsi INNER JOIN?", ["Ambil semua", "Hanya irisan", "Gabung kiri", "Gabung kanan"], 1, "INNER JOIN mengambil irisan data."),
    content
)

content = re.sub(
    r'(explanation: "WHERE memfilter baris mentah sebelum dikelompokkan, sedangkan HAVING memfilter grup hasil agregasi\.",\n\s*\},)',
    r'\1' + generate_q("Fungsi yang menjumlahkan baris?", ["SUM", "COUNT", "MAX", "MIN"], 1, "COUNT menghitung baris.", "Posisi GROUP BY?", ["Sebelum WHERE", "Setelah WHERE sebelum ORDER BY", "Setelah LIMIT", "Paling akhir"], 1, "Tepat setelah WHERE."),
    content
)

content = re.sub(
    r'(explanation: "ROLLBACK membatalkan seluruh pernyataan SQL di dalam transaksi aktif dan mengembalikan kondisi database seperti semula\.",\n\s*\},)',
    r'\1' + generate_q("Perintah mengosongkan tabel cepat?", ["DELETE", "TRUNCATE", "DROP", "REMOVE"], 1, "TRUNCATE sangat cepat mengosongkan tabel.", "Bahaya UPDATE tanpa WHERE?", ["Error", "Semua baris terupdate", "Data terhapus", "Aman"], 1, "Update akan berdampak pada seluruh baris."),
    content
)

content = re.sub(
    r'(explanation: "Setiap penulisan data baru mewajibkan database memperbarui indeks B-Tree terkait sehingga memperlambat operasi write\.",\n\s*\},)',
    r'\1' + generate_q("Normalisasi 3NF?", ["1NF", "2NF", "Ideal untuk OLTP", "Buruk"], 2, "Ideal.", "Fungsi UNIQUE?", ["Tidak berguna", "Mencegah duplikat", "Enkripsi", "Tidak ada"], 1, "Mencegah duplikasi."),
    content
)

content = re.sub(
    r'(explanation: "Operator `->>` mengembalikan bidang JSON sebagai string teks biasa, sedangkan `->` mengembalikan objek JSON\.",\n\s*\},)',
    r'\1' + generate_q("Tipe data JSON di Postgres?", ["JSON", "JSONB", "VARCHAR", "TEXT"], 1, "JSONB biner lebih efisien.", "Perintah psql untuk list tabel?", ["\\\\l", "\\\\dt", "\\\\d", "\\\\q"], 1, "\\\\dt menampilkan daftar tabel."),
    content
)

content = re.sub(
    r'(explanation: "Charset `utf8mb4` mendukung penuh penyimpan 4-byte UTF-8 termasuk karakter emoji internasional\.",\n\s*\},)',
    r'\1' + generate_q("Storage engine direkomendasikan?", ["InnoDB", "MyISAM", "Memory", "CSV"], 0, "InnoDB mendukung transaksi.", "Ambil ID AUTO_INCREMENT?", ["NEW_ID()", "GET_ID()", "LAST_INSERT_ID()", "MAX()"], 2, "LAST_INSERT_ID() mengambil ID sisipan terakhir."),
    content
)

content = re.sub(
    r'(explanation: "Parameterized Query memisahkan perintah SQL dan variabel data sehingga input pengguna tidak pernah dievaluasi sebagai kode perintah SQL\.",\n\s*\},)',
    r'\1' + generate_q("Tujuan Connection Pool?", ["Hemat memori dengan reuse", "Tingkatkan CPU", "Hapus data", "Cache data"], 0, "Daur ulang koneksi.", "Masalah N+1?", ["Overquery saat relasi", "Bug memori", "Syntax error", "Missing index"], 0, "Ekstra query N untuk setiap relasi."),
    content
)

content = content.replace(
    'output: "Query lebih bersih dan jauh lebih mudah dibaca tim.",',
    'output: "Tabel CTE dibentuk dengan benar dan memunculkan data user top spender.",'
)

with open('src/data/tracks/sql.ts', 'w') as f:
    f.write(content)

print("Fixed sql.ts successfully.")
