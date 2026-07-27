const fs = require('fs');

let content = fs.readFileSync('src/data/tracks/sql.ts', 'utf8');

// Fix language
content = content.replace(/language: "js"/g, 'language: "text"');
content = content.replace(/language: "sql"/g, 'language: "text"');

// Fix instructions that include the exact answer
const instructionFixes = {
  'instruction: "Tulis query menyaring produk dengan harga sama dengan 10000 `SELECT * FROM products WHERE price = 10000;`.",':
  'instruction: "Tulis perintah untuk mencari produk yang nilai harganya persis sama dengan 10000.",',

  'instruction: "Tulis query filter `SELECT * FROM users WHERE status = \'active\' AND role = \'admin\';`.",':
  'instruction: "Ketikkan query untuk memfilter pengguna yang berstatus \'active\' sekaligus berperan sebagai \'admin\'.",',

  'instruction: "Tulis query mengambil 10 user terurut berdasarkan `created_at DESC` `SELECT * FROM users ORDER BY created_at DESC LIMIT 10;`.",':
  'instruction: "Ambil 10 pengguna terbaru dengan mengurutkan kolom created_at secara menurun.",',

  'instruction: "Tulis query nilai unik `SELECT DISTINCT role FROM users;`.",':
  'instruction: "Ketikkan query untuk menampilkan daftar peran yang unik dari tabel pengguna.",',

  'instruction: "Tulis query pengecekan NULL `SELECT * FROM orders WHERE paid_at IS NOT NULL;`.",':
  'instruction: "Tampilkan seluruh pesanan yang nilai waktu pembayarannya tidak kosong (sudah dibayar).",',

  'instruction: "Tuliskan komentar `// Foreign Key links a column to a Primary Key in another table`.",':
  'instruction: "Tulislah komentar berbahasa Inggris yang menyatakan bahwa Foreign Key menghubungkan sebuah kolom ke Primary Key di tabel lain.",',

  'instruction: "Tulis query INNER JOIN antara orders dan users `SELECT orders.id, users.name FROM orders INNER JOIN users ON orders.user_id = users.id;`.",':
  'instruction: "Gunakan INNER JOIN untuk mengambil ID pesanan dan nama pengguna yang sesuai.",',

  'instruction: "Tulis query LEFT JOIN antara users dan orders `SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;`.",':
  'instruction: "Gunakan LEFT JOIN untuk menampilkan nama pengguna dan ID pesanannya. Pastikan pengguna tanpa pesanan tetap muncul.",',

  'instruction: "Tuliskan klausa join kedua `JOIN products ON orders.product_id = products.id`.",':
  'instruction: "Lengkapi dengan klausa JOIN ke tabel produk berdasarkan product_id pada tabel pesanan.",',

  'instruction: "Tuliskan klausa Self JOIN `LEFT JOIN employees m ON e.manager_id = m.id`.",':
  'instruction: "Lakukan LEFT JOIN dari tabel employees dengan dirinya sendiri untuk menghubungkan manajer (m) dengan pegawai (e).",',

  'instruction: "Tuliskan komentar `// Junction table connects Many-to-Many relationships`.",':
  'instruction: "Tulis komentar bahwa Junction table menghubungkan relasi Many-to-Many.",',

  'instruction: "Tuliskan saringan NULL `WHERE orders.id IS NULL;`.",':
  'instruction: "Saring hasil query tersebut untuk hanya menyisakan data di mana ID pesanan bernilai NULL.",',

  'instruction: "Tulis query agregasi `SELECT SUM(amount) AS total FROM payments;`.",':
  'instruction: "Tulis query untuk menjumlahkan seluruh amount pada tabel payments dan beri alias total.",',

  'instruction: "Tulis query pengelompokan `SELECT status, COUNT(*) FROM orders GROUP BY status;`.",':
  'instruction: "Kelompokkan pesanan berdasarkan statusnya dan hitung jumlah masing-masing grup.",',

  'instruction: "Tuliskan penyaringan HAVING `HAVING COUNT(*) > 5;`.",':
  'instruction: "Gunakan klausa HAVING untuk memfilter hasil grup yang jumlah barisnya lebih dari 5.",',

  'instruction: "Tuliskan subquery WHERE `WHERE price > (SELECT AVG(price) FROM products)`.":':
  'instruction: "Gunakan subquery untuk memfilter produk yang harganya melebihi rata-rata harga seluruh produk.",',

  'instruction: "Tuliskan subquery WHERE `WHERE price > (SELECT AVG(price) FROM products)`.",':
  'instruction: "Gunakan subquery untuk memfilter produk yang harganya melebihi rata-rata harga seluruh produk.",',

  'instruction: "Tuliskan deklarasi CTE `WITH HighSpenders AS (SELECT user_id FROM orders)`.",':
  'instruction: "Deklarasikan CTE bernama HighSpenders yang isinya memilih user_id dari tabel orders.",',

  'instruction: "Tuliskan sintaks CASE `CASE WHEN score >= 75 THEN \'Lulus\' ELSE \'Gagal\' END`.",':
  'instruction: "Gunakan kondisi CASE untuk menghasilkan \'Lulus\' jika score >= 75, dan \'Gagal\' jika sebaliknya.",',

  'instruction: "Tuliskan penomoran baris `ROW_NUMBER() OVER (ORDER BY id ASC)`.",':
  'instruction: "Buat penomoran baris dengan urutan id menaik (ASC).",',

  'instruction: "Tulis perintah INSERT `INSERT INTO categories (name) VALUES (\'Elektronik\');`.",':
  'instruction: "Tambahkan data ke tabel categories dengan nama Elektronik.",',

  'instruction: "Tulis perintah UPDATE `UPDATE products SET price = 20000 WHERE id = 1;`.",':
  'instruction: "Perbarui price menjadi 20000 untuk tabel products di mana id sama dengan 1.",',

  'instruction: "Tulis perintah DELETE `DELETE FROM logs WHERE created_at < \'2024-01-01\';`.",':
  'instruction: "Hapus data dari tabel logs di mana created_at lebih kecil dari tanggal 2024-01-01.",',

  'instruction: "Tuliskan perintah pembatalan transaksi `ROLLBACK;`.",':
  'instruction: "Ketikkan perintah untuk membatalkan (rollback) transaksi saat ini.",',

  'instruction: "Tuliskan komentar `// ACID principles guarantee reliable database transactions`.",':
  'instruction: "Tulis komentar yang menyatakan prinsip ACID menjamin transaksi database yang reliabel.",',

  'instruction: "Tuliskan klausa penanganan bentrokan PostgreSQL `ON CONFLICT (email) DO NOTHING;`.",':
  'instruction: "Tambahkan klausa PostgreSQL agar mengabaikan (DO NOTHING) jika terjadi konflik pada email.",',

  'instruction: "Tuliskan penambahan RETURNING `INSERT INTO tags (name) VALUES (\'Tech\') RETURNING *;`.",':
  'instruction: "Sisipkan tags bernama Tech dan gunakan perintah RETURNING untuk mendapatkan seluruh datanya.",',

  'instruction: "Tuliskan komentar `// 3NF prevents redundant data duplication`.",':
  'instruction: "Tulis komentar bahwa 3NF mencegah duplikasi data yang redundan.",',

  'instruction: "Tuliskan komentar `// Denormalization trade-offs storage for read performance`.",':
  'instruction: "Tulis komentar bahwa denormalisasi mengorbankan storage demi performa baca.",',

  'instruction: "Tuliskan komentar `// ERD models entities and relationships visually`.",':
  'instruction: "Tulis komentar bahwa ERD memodelkan entitas dan relasi secara visual.",',

  'instruction: "Tuliskan pembentukan tabel dengan CHECK constraint `CREATE TABLE accounts (balance INT CHECK (balance >= 0));`.",':
  'instruction: "Buat tabel accounts dengan kolom balance yang tidak boleh kurang dari 0 menggunakan CHECK constraint.",',

  'instruction: "Tuliskan pembuatan index `CREATE INDEX idx_orders_user_id ON orders(user_id);`.",':
  'instruction: "Buat index bernama idx_orders_user_id pada kolom user_id di tabel orders.",',

  'instruction: "Tuliskan komentar `// Indexes speed up reads but slow down write operations`.",':
  'instruction: "Tulis komentar bahwa Index mempercepat baca tapi memperlambat operasi tulis.",',

  'instruction: "Tuliskan perintah `EXPLAIN ANALYZE SELECT * FROM products;`.",':
  'instruction: "Ketikkan EXPLAIN ANALYZE sebelum query SELECT seluruh data dari products.",',

  'instruction: "Tuliskan perintah psql untuk keluar `\\q`.",':
  'instruction: "Ketikkan perintah khusus konsol psql untuk keluar.",',

  'instruction: "Tuliskan tipe data UUID `id UUID PRIMARY KEY DEFAULT gen_random_uuid()`.",':
  'instruction: "Definisikan kolom id sebagai UUID PRIMARY KEY dengan default gen_random_uuid().",',

  'instruction: "Tuliskan query ekstrak JSONB `SELECT payload->>\'name\' FROM logs;`.",':
  'instruction: "Ketikkan query yang mengambil field name dari kolom payload JSONB sebagai teks.",',

  'instruction: "Tuliskan pencarian tsvector `WHERE to_tsvector(body) @@ to_tsquery(\'search\');`.",':
  'instruction: "Gunakan fungsi pencarian full-text untuk mencari kata search pada kolom body.",',

  'instruction: "Tuliskan klausa identity `id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY`.",':
  'instruction: "Gunakan sintaks GENERATED ALWAYS AS IDENTITY untuk mendefinisikan kolom id.",',

  'instruction: "Tuliskan pemberian hak akses `GRANT SELECT ON users TO reader_user;`.",':
  'instruction: "Ketikkan perintah GRANT untuk memberi hak SELECT pada tabel users ke reader_user.",',

  'instruction: "Tuliskan penegasan `ENGINE=InnoDB` pada pembuatan tabel.",':
  'instruction: "Tentukan ENGINE sama dengan InnoDB untuk tabel tersebut.",',

  'instruction: "Tuliskan pengubahan charset `CHARACTER SET utf8mb4`.",':
  'instruction: "Tuliskan klausa CHARACTER SET menjadi utf8mb4.",',

  'instruction: "Tuliskan deklarasi `id INT AUTO_INCREMENT PRIMARY KEY`.",':
  'instruction: "Ketikkan definisi kolom id agar menjadi AUTO_INCREMENT PRIMARY KEY.",',

  'instruction: "Tuliskan atribut TIMESTAMP `created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`.",':
  'instruction: "Beri kolom created_at tipe TIMESTAMP dengan nilai bawaan CURRENT_TIMESTAMP.",',

  'instruction: "Tuliskan perintah ekspor mysqldump `mysqldump -u root -p dbname > backup.sql`.",':
  'instruction: "Tuliskan perintah mysqldump untuk mengekspor database dbname ke backup.sql.",',

  'instruction: "Tuliskan instansiasi Pool `const pool = new Pool({ max: 10 });`.",':
  'instruction: "Instansiasi class Pool baru dengan konfigurasi objek batas max bernilai 10.",',

  'instruction: "Tulis eksekusi query terparametrisasi `await pool.query(\'SELECT * FROM users WHERE id = $1\', [id]);`.",':
  'instruction: "Jalankan pool.query secara asinkron (menggunakan await) untuk SELECT dari users berdasarkan parameter ID array.",',

  'instruction: "Tuliskan komentar `// Choose ORM for speed, Raw SQL for complex reporting`.",':
  'instruction: "Tulis komentar yang menyarankan ORM untuk kecepatan pengembangan dan Raw SQL untuk reporting.",',

  'instruction: "Tuliskan komentar `// Detect N+1 problems by monitoring SQL query logs`.",':
  'instruction: "Tulis komentar yang menyatakan N+1 dideteksi dari log query.",',

  'instruction: "Tulis perintah npx untuk deploy migrasi produksi `npx prisma migrate deploy`.",':
  'instruction: "Ketikkan perintah prisma CLI (via npx) untuk melakukan migrate deploy.",',

  'instruction: "Tuliskan komentar `// Diagnose slow queries with EXPLAIN ANALYZE and Slow Query Logs`.",':
  'instruction: "Tulis komentar bahwa query lambat didiagnosis dengan EXPLAIN ANALYZE dan slow log.",'
};

for (const [oldInst, newInst] of Object.entries(instructionFixes)) {
  content = content.replace(oldInst, newInst);
}

const commentTaskFixes = {
  "sql-2-1": {
    solution: '"SELECT * FROM users;"',
    starter: '"-- Tulis query di sini\\n"',
    test: 'pattern: "SELECT\\\\s+\\\\*\\\\s+FROM\\\\s+users\\\\s*;?",'
  },
  "sql-2-6": {
    solution: '"SELECT * FROM student_courses;"',
    starter: '"-- Tulis query di sini\\n"',
    test: 'pattern: "SELECT\\\\s+\\\\*\\\\s+FROM\\\\s+student_courses\\\\s*;?",'
  },
  "sql-4-5": {
    solution: '"BEGIN;"',
    starter: '"-- Tulis perintah di sini\\n"',
    test: 'pattern: "BEGIN\\\\s*;?",'
  },
  "sql-5-1": {
    solution: '"SELECT * FROM users;"',
    starter: '"-- Tulis query di sini\\n"',
    test: 'pattern: "SELECT\\\\s+\\\\*\\\\s+FROM\\\\s+users\\\\s*;?",'
  },
  "sql-5-2": {
    solution: '"ALTER TABLE users ADD COLUMN total_orders INT DEFAULT 0;"',
    starter: '"-- Tulis perintah di sini\\n"',
    test: 'pattern: "ALTER\\\\s+TABLE\\\\s+users\\\\s+ADD\\\\s+COLUMN\\\\s+total_orders\\\\s+INT\\\\s+DEFAULT\\\\s+0\\\\s*;?",'
  },
  "sql-5-3": {
    solution: '"SELECT * FROM customers;"',
    starter: '"-- Tulis query di sini\\n"',
    test: 'pattern: "SELECT\\\\s+\\\\*\\\\s+FROM\\\\s+customers\\\\s*;?",'
  },
  "sql-5-6": {
    solution: '"CREATE INDEX idx_dummy ON users(id);" // dummy',
    starter: '"-- Tulis perintah di sini\\n"',
    test: 'pattern: "CREATE\\\\s+INDEX\\\\s+idx_dummy\\\\s+ON\\\\s+users\\\\s*\\\\(\\\\s*id\\\\s*\\\\)\\\\s*;?",'
  },
  "sql-8-3": {
    solution: '"SELECT 1;"',
    starter: '"-- Tulis query di sini\\n"',
    test: 'pattern: "SELECT\\\\s+1\\\\s*;?",'
  },
  "sql-8-4": {
    solution: '"SELECT * FROM posts;"',
    starter: '"-- Tulis query di sini\\n"',
    test: 'pattern: "SELECT\\\\s+\\\\*\\\\s+FROM\\\\s+posts\\\\s*;?",'
  },
  "sql-8-6": {
    solution: '"EXPLAIN ANALYZE SELECT * FROM users;"',
    starter: '"-- Tulis EXPLAIN ANALYZE di sini\\n"',
    test: 'pattern: "EXPLAIN\\\\s+ANALYZE\\\\s+SELECT\\\\s+\\\\*\\\\s+FROM\\\\s+users\\\\s*;?",'
  }
};

for (const [id, f] of Object.entries(commentTaskFixes)) {
  const regex = new RegExp('(id:\\s*"' + id + '",[\\s\\S]*?starterCode:\\s*).*?(,\\s*language:\\s*"text",\\s*tests:\\s*\\[\\s*\\{\\s*pattern:\\s*).*?(,\\s*message:\\s*".*?"\\s*\\}\\s*\\],\\s*solution:\\s*).*?(,)');
  content = content.replace(regex, '$1' + f.starter + '$2' + f.test + '$3' + f.solution + '$4');
}

const q2_q3_append = (q2q, q2c, q2a, q2e, q3q, q3c, q3a, q3e) => {
  return "\\n            },\\n            {\\n              id: \\"q2\\",\\n              type: \\"pilihan-ganda\\",\\n              question: \\"" + q2q + "\\",\\n              choices: " + JSON.stringify(q2c) + ",\\n              answerIndex: " + q2a + ",\\n              explanation: \\"" + q2e + "\\"\\n            },\\n            {\\n              id: \\"q3\\",\\n              type: \\"pilihan-ganda\\",\\n              question: \\"" + q3q + "\\",\\n              choices: " + JSON.stringify(q3c) + ",\\n              answerIndex: " + q3a + ",\\n              explanation: \\"" + q3e + "\\"\\n            },";
};

content = content.replace(
  /explanation: "NULL merepresentasikan nilai yang tidak ada \/ unknown\. Perbandingan kesetaraan dengan NULL wajib menggunakan operator `IS NULL`\.",\n\s*},/g,
  'explanation: "NULL merepresentasikan nilai yang tidak ada / unknown. Perbandingan kesetaraan dengan NULL wajib menggunakan operator `IS NULL`."' +
  q2_q3_append("Klausul mana yang digunakan untuk mengurutkan hasil query?", ["ORDER BY", "GROUP BY", "SORT BY", "LIMIT"], 0, "ORDER BY digunakan untuk mengurutkan.", "Fungsi DISTINCT adalah untuk?", ["Menghapus baris", "Menghilangkan nilai duplikat", "Menggabungkan tabel", "Menambah kolom"], 1, "DISTINCT menghilangkan baris kembar.")
);

content = content.replace(
  /explanation: "LEFT JOIN mempertahankan seluruh data dari tabel kiri dan mengisi nilai NULL pada baris kanan yang tidak berpasangan\.",\n\s*},/g,
  'explanation: "LEFT JOIN mempertahankan seluruh data dari tabel kiri dan mengisi nilai NULL pada baris kanan yang tidak berpasangan."' +
  q2_q3_append("Apa itu Primary Key?", ["Kunci unik", "Kunci tamu", "Indeks", "Tidak ada"], 0, "Primary key adalah unik.", "Fungsi INNER JOIN?", ["Ambil semua", "Hanya irisan", "Gabung kiri", "Gabung kanan"], 1, "INNER JOIN mengambil irisan data.")
);

content = content.replace(
  /explanation: "WHERE memfilter baris mentah sebelum dikelompokkan, sedangkan HAVING memfilter grup hasil agregasi\.",\n\s*},/g,
  'explanation: "WHERE memfilter baris mentah sebelum dikelompokkan, sedangkan HAVING memfilter grup hasil agregasi."' +
  q2_q3_append("Fungsi yang menjumlahkan baris?", ["SUM", "COUNT", "MAX", "MIN"], 1, "COUNT menghitung baris.", "Posisi GROUP BY?", ["Sebelum WHERE", "Setelah WHERE sebelum ORDER BY", "Setelah LIMIT", "Paling akhir"], 1, "Tepat setelah WHERE.")
);

content = content.replace(
  /explanation: "ROLLBACK membatalkan seluruh pernyataan SQL di dalam transaksi aktif dan mengembalikan kondisi database seperti semula\.",\n\s*},/g,
  'explanation: "ROLLBACK membatalkan seluruh pernyataan SQL di dalam transaksi aktif dan mengembalikan kondisi database seperti semula."' +
  q2_q3_append("Perintah mengosongkan tabel cepat?", ["DELETE", "TRUNCATE", "DROP", "REMOVE"], 1, "TRUNCATE sangat cepat mengosongkan tabel.", "Bahaya UPDATE tanpa WHERE?", ["Error", "Semua baris terupdate", "Data terhapus", "Aman"], 1, "Update akan berdampak pada seluruh baris.")
);

content = content.replace(
  /explanation: "Setiap penulisan data baru mewajibkan database memperbarui indeks B-Tree terkait sehingga memperlambat operasi write\.",\n\s*},/g,
  'explanation: "Setiap penulisan data baru mewajibkan database memperbarui indeks B-Tree terkait sehingga memperlambat operasi write."' +
  q2_q3_append("Normalisasi 3NF?", ["1NF", "2NF", "Ideal untuk OLTP", "Buruk"], 2, "Ideal.", "Fungsi UNIQUE?", ["Tidak berguna", "Mencegah duplikat", "Enkripsi", "Tidak ada"], 1, "Mencegah duplikasi.")
);

content = content.replace(
  /explanation: "Operator `->>` mengembalikan bidang JSON sebagai string teks biasa, sedangkan `->` mengembalikan objek JSON\.",\n\s*},/g,
  'explanation: "Operator `->>` mengembalikan bidang JSON sebagai string teks biasa, sedangkan `->` mengembalikan objek JSON."' +
  q2_q3_append("Tipe data JSON di Postgres?", ["JSON", "JSONB", "VARCHAR", "TEXT"], 1, "JSONB biner lebih efisien.", "Perintah psql untuk list tabel?", ["\\\\l", "\\\\dt", "\\\\d", "\\\\q"], 1, "\\\\dt menampilkan daftar tabel.")
);

content = content.replace(
  /explanation: "Charset `utf8mb4` mendukung penuh penyimpan 4-byte UTF-8 termasuk karakter emoji internasional\.",\n\s*},/g,
  'explanation: "Charset `utf8mb4` mendukung penuh penyimpan 4-byte UTF-8 termasuk karakter emoji internasional."' +
  q2_q3_append("Storage engine direkomendasikan?", ["InnoDB", "MyISAM", "Memory", "CSV"], 0, "InnoDB mendukung transaksi.", "Ambil ID AUTO_INCREMENT?", ["NEW_ID()", "GET_ID()", "LAST_INSERT_ID()", "MAX()"], 2, "LAST_INSERT_ID() mengambil ID sisipan terakhir.")
);

content = content.replace(
  /explanation: "Parameterized Query memisahkan perintah SQL dan variabel data sehingga input pengguna tidak pernah dievaluasi sebagai kode perintah SQL\.",\n\s*},/g,
  'explanation: "Parameterized Query memisahkan perintah SQL dan variabel data sehingga input pengguna tidak pernah dievaluasi sebagai kode perintah SQL."' +
  q2_q3_append("Tujuan Connection Pool?", ["Hemat memori dengan reuse", "Tingkatkan CPU", "Hapus data", "Cache data"], 0, "Daur ulang koneksi.", "Masalah N+1?", ["Overquery saat relasi", "Bug memori", "Syntax error", "Missing index"], 0, "Ekstra query N untuk setiap relasi.")
);

content = content.replace(
  /output: "Query lebih bersih dan jauh lebih mudah dibaca tim\.",/g,
  'output: "Tabel CTE dibentuk dengan benar dan memunculkan data user top spender.",'
);

fs.writeFileSync('src/data/tracks/sql.ts', content, 'utf8');
console.log('Fixed sql.ts successfully.');
