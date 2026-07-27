import re

with open('src/data/tracks/laravel.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. language: "js" -> "text" (and javascript)
content = re.sub(r'language:\s*"js"', 'language: "text"', content)
content = re.sub(r'language:\s*"javascript"', 'language: "text"', content)

# 2. Fix instruction
instructions = {
    'laravel-3-2': 'Buatlah sebuah route GET untuk \'/about\' yang mengarah ke method \'index\' pada AboutController dan berikan nama route \'about\'.',
    'laravel-3-4': 'Terapkan pewarisan layout Blade dengan memanggil layout utama yang bernama \'layouts.app\'.',
    'laravel-3-5': 'Lakukan redirect ke route bernama \'home\' sekaligus membawa pesan kilat (flash message) pada session dengan key \'success\' berisi \'Berhasil\'.',
    'laravel-3-6': 'Gunakan fungsi helper pembaca variabel lingkungan untuk mengambil nilai \'APP_NAME\', dengan nilai fallback \'Laravel\'.',
    'laravel-3-7': 'Terapkan perlindungan middleware \'auth\' pada definisi route yang ada sehingga hanya pengguna login yang bisa mengaksesnya.',
    
    'laravel-4-1': 'Tambahkan sebuah kolom bertipe string dengan nama \'title\' ke dalam definisi skema tabel.',
    'laravel-4-3': 'Gunakan metode bawaan Eloquent untuk mencari data User berdasarkan variabel $id, yang akan otomatis melempar error 404 jika tidak ditemukan.',
    'laravel-4-4': 'Ambil data dari model User dengan membaginya menjadi 10 baris per halaman menggunakan fungsi bawaan untuk paginasi.',
    'laravel-4-6': 'Hindari masalah N+1 dengan memuat relasi \'user\' secara eager bersamaan saat mengambil seluruh data Post.',
    'laravel-4-7': 'Buat 5 baris data dummy otomatis menggunakan factory bawaan dari model User.',
    
    'laravel-5-2': 'Ambil nilai yang dikirim dari input form bernama \'title\' melalui objek request yang disediakan oleh framework.',
    'laravel-5-4': 'Gunakan fungsi validasi bawaan pada Request untuk memastikan input \'title\' diisi, berformat string, dan maksimal 255 karakter.',
    'laravel-5-5': 'Buatlah instance custom Request class bernama \'StorePostRequest\' menggunakan perintah artisan untuk memisahkan logika validasi dari controller.',
    
    'laravel-6-2': 'Hasilkan format array dari sebuah koleksi Eloquent, lalu ambil datanya.',
    'laravel-6-5': 'Akses koleksi data yang sudah diload, dan modifikasi setiap nilainya menggunakan method transform atau sejenisnya.',
    
    'laravel-7-1': 'Buat event baru bernama UserRegistered menggunakan artisan command.',
    'laravel-7-3': 'Dispatch event UserRegistered yang sudah dibuat.',
    'laravel-7-4': 'Buat listener bernama SendWelcomeEmail untuk menangani event registrasi.',
    'laravel-7-5': 'Daftarkan SendWelcomeEmail listener ke dalam EventServiceProvider.',
    'laravel-7-6': 'Jalankan job queue dispatch untuk memproses pekerjaan di antrean.',
    'laravel-7-7': 'Buat kelas Job baru bernama SendEmailJob menggunakan perintah artisan untuk pemrosesan latar belakang.',

    'laravel-8-1': 'Tulis definisi route group yang menerapkan middleware khusus \'api\'.',
    'laravel-8-2': 'Kembalikan respon berbentuk JSON yang memuat status sukses dan kode 200 HTTP.',
    'laravel-8-4': 'Hasilkan kelas resource controller khusus API menggunakan artisan (dengan flag --api).',
    'laravel-8-5': 'Konversi model Eloquent menjadi representasi array menggunakan API Resource class.',
    'laravel-8-6': 'Bangkitkan sebuah token Sanctum baru dengan nama \'device-token\' untuk digunakan pada otentikasi API.',

    'laravel-9-1': 'Buat kelas test baru bernama UserTest melalui CLI artisan.',
    'laravel-9-2': 'Susun skenario pengujian dasar (basic test) yang memverifikasi bahwa kondisi nilai true benar-benar bernilai true.',
    'laravel-9-3': 'Simulasikan request HTTP tipe GET menuju endpoint profil pengguna pada kode pengujian.',
    'laravel-9-4': 'Periksa (assert) bahwa response HTTP yang diterima mengembalikan status kode HTTP 200.',
    'laravel-9-5': 'Lakukan verifikasi menggunakan assertion database bahwa terdapat data dengan email \'test@test.com\' di tabel users.',
    'laravel-9-6': 'Aktifkan trait penyegaran (RefreshDatabase) agar database dikosongkan secara otomatis pada setiap eksekusi fungsi pengujian.'
}

for step_id, new_inst in instructions.items():
    pattern = r'(id:\s*"' + step_id + r'"[\s\S]*?instruction:\s*")[\s\S]*?(",\s*starterCode:)'
    content = re.sub(pattern, r'\1' + new_inst + r'\2', content, count=1)

# Fix tests and solution for laravel-5-5 and laravel-7-7
content = re.sub(
    r'(id:\s*"laravel-5-5"[\s\S]*?tests:\s*\[\s*\{\s*pattern:\s*").*?(",\s*message:.*?\}\s*\],\s*solution:\s*").*?(")',
    r'\1php\\\\s\+artisan\\\\s\+make:request\\\\s\+StorePostRequest\2php artisan make:request StorePostRequest\3',
    content, count=1
)

content = re.sub(
    r'(id:\s*"laravel-7-7"[\s\S]*?tests:\s*\[\s*\{\s*pattern:\s*").*?(",\s*message:.*?\}\s*\],\s*solution:\s*").*?(")',
    r'\1php\\\\s\+artisan\\\\s\+make:job\\\\s\+SendEmailJob\2php artisan make:job SendEmailJob\3',
    content, count=1
)

# Fix laravel-7-7 example.output
content = re.sub(
    r'(id:\s*"laravel-7-7"[\s\S]*?example:\s*\{[\s\S]*?output:\s*")[^"]+(",)',
    r'\1Job created successfully.\2',
    content, count=1
)

# Fix quizzes
quiz_ids = [
    'laravel-1-kuis', 'laravel-2-kuis', 'laravel-3-kuis', 'laravel-4-kuis',
    'laravel-5-kuis', 'laravel-6-kuis', 'laravel-7-kuis', 'laravel-8-kuis', 'laravel-9-kuis'
]

new_questions = """,
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Manakah pernyataan di bawah ini yang paling tepat tentang fitur yang disediakan Laravel?",
              choices: ["Tidak memerlukan web server untuk production", "Memiliki ORM bawaan bernama Eloquent", "Hanya bisa diakses via API", "Memerlukan konfigurasi XML yang sangat banyak"],
              answerIndex: 1,
              explanation: "Laravel menyertakan Eloquent ORM secara default untuk berinteraksi dengan database secara mudah."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi utama dari file .env di aplikasi Laravel?",
              choices: ["Menyimpan seluruh logika database", "Mengatur styling CSS utama", "Menyimpan konfigurasi rahasia seperti kredensial database yang spesifik per environment", "Menjadi file utama yang dieksekusi oleh server"],
              answerIndex: 2,
              explanation: "File .env digunakan khusus untuk variabel lingkungan yang bisa berbeda antara development dan production."
            }"""

for q_id in quiz_ids:
    pattern = r'(id:\s*"' + q_id + r'"[\s\S]*?id:\s*"q1"[\s\S]*?explanation:\s*"[^"]+"\s*,\s*\})(?=\s*,\s*\]|\s*\])'
    content = re.sub(pattern, r'\1' + new_questions, content, count=1)

with open('src/data/tracks/laravel.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Python fixes applied!")
