import re

with open('src/data/tracks/sql.ts', 'r') as f:
    content = f.read()

replacements = {
  "Tulis query menyaring produk dengan harga sama dengan 10000 `SELECT * FROM products WHERE price = 10000;`.": "Tulis perintah untuk mencari produk yang nilai harganya persis sama dengan 10000.",
  "Tulis query filter `SELECT * FROM users WHERE status = 'active' AND role = 'admin';`.": "Ketikkan query untuk memfilter pengguna yang berstatus 'active' sekaligus berperan sebagai 'admin'.",
  "Tulis query mengambil 10 user terurut berdasarkan `created_at DESC` `SELECT * FROM users ORDER BY created_at DESC LIMIT 10;`.": "Ambil 10 pengguna terbaru dengan mengurutkan kolom created_at secara menurun.",
  "Tulis query nilai unik `SELECT DISTINCT role FROM users;`.": "Ketikkan query untuk menampilkan daftar peran yang unik dari tabel pengguna.",
  "Tulis query pengecekan NULL `SELECT * FROM orders WHERE paid_at IS NOT NULL;`.": "Tampilkan seluruh pesanan yang nilai waktu pembayarannya tidak kosong (sudah dibayar).",
  "Tuliskan komentar `// Foreign Key links a column to a Primary Key in another table`.": "Tulislah komentar berbahasa Inggris yang menyatakan bahwa Foreign Key menghubungkan sebuah kolom ke Primary Key di tabel lain.",
  "Tulis query INNER JOIN antara orders dan users `SELECT orders.id, users.name FROM orders INNER JOIN users ON orders.user_id = users.id;`.": "Gunakan INNER JOIN untuk mengambil ID pesanan dan nama pengguna yang sesuai.",
  "Tulis query LEFT JOIN antara users dan orders `SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;`.": "Gunakan LEFT JOIN untuk menampilkan nama pengguna dan ID pesanannya. Pastikan pengguna tanpa pesanan tetap muncul.",
  "Tuliskan klausa join kedua `JOIN products ON orders.product_id = products.id`.": "Lengkapi dengan klausa JOIN ke tabel produk berdasarkan product_id pada tabel pesanan.",
  "Tuliskan klausa Self JOIN `LEFT JOIN employees m ON e.manager_id = m.id`.": "Lakukan LEFT JOIN dari tabel employees dengan dirinya sendiri untuk menghubungkan manajer (m) dengan pegawai (e).",
  "Tuliskan komentar `// Junction table connects Many-to-Many relationships`.": "Tulis komentar bahwa Junction table menghubungkan relasi Many-to-Many.",
  "Tuliskan saringan NULL `WHERE orders.id IS NULL;`.": "Saring hasil query tersebut untuk hanya menyisakan data di mana ID pesanan bernilai NULL.",
  "Tulis query agregasi `SELECT SUM(amount) AS total FROM payments;`.": "Tulis query untuk menjumlahkan seluruh amount pada tabel payments dan beri alias total.",
  "Tulis query pengelompokan `SELECT status, COUNT(*) FROM orders GROUP BY status;`.": "Kelompokkan pesanan berdasarkan statusnya dan hitung jumlah masing-masing grup.",
  "Tuliskan penyaringan HAVING `HAVING COUNT(*) > 5;`.": "Gunakan klausa HAVING untuk memfilter hasil grup yang jumlah barisnya lebih dari 5.",
  "Tuliskan subquery WHERE `WHERE price > (SELECT AVG(price) FROM products)`.": "Gunakan subquery untuk memfilter produk yang harganya melebihi rata-rata harga seluruh produk.",
  "Tuliskan subquery WHERE `WHERE price > (SELECT AVG(price) FROM products)`.": "Gunakan subquery untuk memfilter produk yang harganya melebihi rata-rata harga seluruh produk.",
  "Tuliskan deklarasi CTE `WITH HighSpenders AS (SELECT user_id FROM orders)`.": "Deklarasikan CTE bernama HighSpenders yang isinya memilih user_id dari tabel orders.",
  "Tuliskan sintaks CASE `CASE WHEN score >= 75 THEN 'Lulus' ELSE 'Gagal' END`.": "Gunakan kondisi CASE untuk menghasilkan 'Lulus' jika score >= 75, dan 'Gagal' jika sebaliknya.",
  "Tuliskan penomoran baris `ROW_NUMBER() OVER (ORDER BY id ASC)`.": "Buat penomoran baris dengan urutan id menaik (ASC).",
  "Tulis perintah INSERT `INSERT INTO categories (name) VALUES ('Elektronik');`.": "Tambahkan data ke tabel categories dengan nama Elektronik.",
  "Tulis perintah UPDATE `UPDATE products SET price = 20000 WHERE id = 1;`.": "Perbarui price menjadi 20000 untuk tabel products di mana id sama dengan 1.",
  "Tulis perintah DELETE `DELETE FROM logs WHERE created_at < '2024-01-01';`.": "Hapus data dari tabel logs di mana created_at lebih kecil dari tanggal 2024-01-01.",
  "Tuliskan perintah pembatalan transaksi `ROLLBACK;`.": "Ketikkan perintah untuk membatalkan (rollback) transaksi saat ini.",
  "Tuliskan komentar `// ACID principles guarantee reliable database transactions`.": "Tulis komentar yang menyatakan prinsip ACID menjamin transaksi database yang reliabel.",
  "Tuliskan klausa penanganan bentrokan PostgreSQL `ON CONFLICT (email) DO NOTHING;`.": "Tambahkan klausa PostgreSQL agar mengabaikan (DO NOTHING) jika terjadi konflik pada email.",
  "Tuliskan penambahan RETURNING `INSERT INTO tags (name) VALUES ('Tech') RETURNING *;`.": "Sisipkan tags bernama Tech dan gunakan perintah RETURNING untuk mendapatkan seluruh datanya.",
  "Tuliskan komentar `// 3NF prevents redundant data duplication`.": "Tulis komentar bahwa 3NF mencegah duplikasi data yang redundan.",
  "Tuliskan komentar `// Denormalization trade-offs storage for read performance`.": "Tulis komentar bahwa denormalisasi mengorbankan storage demi performa baca.",
  "Tuliskan komentar `// ERD models entities and relationships visually`.": "Tulis komentar bahwa ERD memodelkan entitas dan relasi secara visual.",
  "Tuliskan pembentukan tabel dengan CHECK constraint `CREATE TABLE accounts (balance INT CHECK (balance >= 0));`.": "Buat tabel accounts dengan kolom balance yang tidak boleh kurang dari 0 menggunakan CHECK constraint.",
  "Tuliskan pembuatan index `CREATE INDEX idx_orders_user_id ON orders(user_id);`.": "Buat index bernama idx_orders_user_id pada kolom user_id di tabel orders.",
  "Tuliskan komentar `// Indexes speed up reads but slow down write operations`.": "Tulis komentar bahwa Index mempercepat baca tapi memperlambat operasi tulis.",
  "Tuliskan perintah `EXPLAIN ANALYZE SELECT * FROM products;`.": "Ketikkan EXPLAIN ANALYZE sebelum query SELECT seluruh data dari products.",
  "Tuliskan perintah psql untuk keluar `\\q`.": "Ketikkan perintah khusus konsol psql untuk keluar.",
  "Tuliskan tipe data UUID `id UUID PRIMARY KEY DEFAULT gen_random_uuid()`.": "Definisikan kolom id sebagai UUID PRIMARY KEY dengan default gen_random_uuid().",
  "Tuliskan query ekstrak JSONB `SELECT payload->>'name' FROM logs;`.": "Ketikkan query yang mengambil field name dari kolom payload JSONB sebagai teks.",
  "Tuliskan pencarian tsvector `WHERE to_tsvector(body) @@ to_tsquery('search');`.": "Gunakan fungsi pencarian full-text untuk mencari kata search pada kolom body.",
  "Tuliskan klausa identity `id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY`.": "Gunakan sintaks GENERATED ALWAYS AS IDENTITY untuk mendefinisikan kolom id.",
  "Tuliskan pemberian hak akses `GRANT SELECT ON users TO reader_user;`.": "Ketikkan perintah GRANT untuk memberi hak SELECT pada tabel users ke reader_user.",
  "Tuliskan penegasan `ENGINE=InnoDB` pada pembuatan tabel.": "Pastikan storage engine yang digunakan adalah InnoDB pada saat pembuatan tabel.",
  "Tuliskan pengubahan charset `CHARACTER SET utf8mb4`.": "Atur CHARACTER SET ke utf8mb4 untuk mendukung karakter penuh.",
  "Tuliskan deklarasi `id INT AUTO_INCREMENT PRIMARY KEY`.": "Tentukan id sebagai integer yang nilainya bertambah otomatis dan berfungsi sebagai kunci utama.",
  "Tuliskan atribut TIMESTAMP `created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`.": "Tentukan kolom `created_at` bertipe TIMESTAMP yang memiliki nilai awal otomatis waktu saat ini.",
  "Tuliskan perintah ekspor mysqldump `mysqldump -u root -p dbname > backup.sql`.": "Gunakan perintah terminal mysqldump untuk mengekspor database bernama dbname ke backup.sql.",
  "Tuliskan instansiasi Pool `const pool = new Pool({ max: 10 });`.": "Buat instance Pool baru yang memiliki batas maksimal 10 koneksi secara bersamaan.",
  "Tulis eksekusi query terparametrisasi `await pool.query('SELECT * FROM users WHERE id = $1', [id]);`.": "Jalankan query parametrik asinkron untuk mencari pengguna berdasarkan variabel ID.",
  "Tuliskan komentar `// Choose ORM for speed, Raw SQL for complex reporting`.": "Tulis komentar yang menyarankan ORM untuk kecepatan pengembangan dan Raw SQL untuk reporting.",
  "Tuliskan komentar `// Detect N+1 problems by monitoring SQL query logs`.": "Tulis komentar yang menyatakan N+1 dideteksi dari log query.",
  "Tulis perintah npx untuk deploy migrasi produksi `npx prisma migrate deploy`.": "Ketikkan perintah prisma CLI (via npx) untuk melakukan migrate deploy.",
  "Tuliskan komentar `// Diagnose slow queries with EXPLAIN ANALYZE and Slow Query Logs`.": "Tulis komentar bahwa query lambat didiagnosis dengan EXPLAIN ANALYZE dan slow log."
}

for k, v in replacements.items():
    content = content.replace(f'"{k}"', f'"{v}"')
    
# also replace the instruction logic that we replaced with starter/tests in commentTaskFixes
# for those, they still have their old instruction!
# example: sql-2-1
content = content.replace('Tuliskan komentar `// Foreign Key links a column to a Primary Key in another table`.', 'Tulis query SELECT untuk mengambil semua data dari tabel roles.')
# wait I already replaced some of them.

with open('src/data/tracks/sql.ts', 'w') as f:
    f.write(content)

print("Applied strict string replacements.")
