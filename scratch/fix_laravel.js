const fs = require('fs');

let content = fs.readFileSync('src/data/tracks/laravel.ts', 'utf8');

content = content.replace(/language:\s*"js"/g, 'language: "text"');
content = content.replace(/language:\s*"javascript"/g, 'language: "text"');

const stepsToFix = [
  'laravel-3-2', 'laravel-3-4', 'laravel-3-5', 'laravel-3-6', 'laravel-3-7',
  'laravel-4-1', 'laravel-4-3', 'laravel-4-4', 'laravel-4-6', 'laravel-4-7',
  'laravel-5-2', 'laravel-5-4', 'laravel-5-5',
  'laravel-6-2', 'laravel-6-5',
  'laravel-7-1', 'laravel-7-3', 'laravel-7-4', 'laravel-7-5', 'laravel-7-6', 'laravel-7-7',
  'laravel-8-1', 'laravel-8-2', 'laravel-8-4', 'laravel-8-5', 'laravel-8-6',
  'laravel-9-1', 'laravel-9-2', 'laravel-9-3', 'laravel-9-4', 'laravel-9-5', 'laravel-9-6'
];

stepsToFix.forEach(id => {
  const stepRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?instruction:\\s*")([^"]+)("[\\s\\S]*?solution:\\s*)(?:"([^"]+)"|'([^']+)'|([^\n]+))`);
  
  content = content.replace(stepRegex, (match, p1, instruction, p3, solDouble, solSingle, solRaw) => {
    let newInstruction = "Selesaikan tugas sesuai skenario yang diberikan tanpa menyalin kode secara mentah.";
    if (id === 'laravel-3-2') newInstruction = "Buatlah sebuah route GET untuk '/about' yang mengarah ke method 'index' pada AboutController dan berikan nama route 'about'.";
    if (id === 'laravel-3-4') newInstruction = "Terapkan pewarisan layout Blade dengan memanggil layout utama yang bernama 'layouts.app'.";
    if (id === 'laravel-3-5') newInstruction = "Lakukan redirect ke route bernama 'home' sekaligus membawa pesan kilat (flash message) pada session dengan key 'success' berisi 'Berhasil'.";
    if (id === 'laravel-3-6') newInstruction = "Gunakan fungsi helper pembaca variabel lingkungan untuk mengambil nilai 'APP_NAME', dengan nilai fallback 'Laravel'.";
    if (id === 'laravel-3-7') newInstruction = "Terapkan perlindungan middleware 'auth' pada definisi route yang ada sehingga hanya pengguna login yang bisa mengaksesnya.";
    
    if (id === 'laravel-4-1') newInstruction = "Tambahkan sebuah kolom bertipe string dengan nama 'title' ke dalam definisi skema tabel.";
    if (id === 'laravel-4-3') newInstruction = "Gunakan metode bawaan Eloquent untuk mencari data User berdasarkan variabel $id, yang akan otomatis melempar error 404 jika tidak ditemukan.";
    if (id === 'laravel-4-4') newInstruction = "Ambil data dari model User dengan membaginya menjadi 10 baris per halaman menggunakan fungsi bawaan untuk paginasi.";
    if (id === 'laravel-4-6') newInstruction = "Hindari masalah N+1 dengan memuat relasi 'user' secara eager bersamaan saat mengambil seluruh data Post.";
    if (id === 'laravel-4-7') newInstruction = "Buat 5 baris data dummy otomatis menggunakan factory bawaan dari model User.";
    
    if (id === 'laravel-5-2') newInstruction = "Ambil nilai yang dikirim dari input form bernama 'title' melalui objek request yang disediakan oleh framework.";
    if (id === 'laravel-5-4') newInstruction = "Gunakan fungsi validasi bawaan pada Request untuk memastikan input 'title' diisi, berformat string, dan maksimal 255 karakter.";
    if (id === 'laravel-5-5') newInstruction = "Buatlah instance custom Request class bernama 'StorePostRequest' menggunakan perintah artisan untuk memisahkan logika validasi dari controller.";
    
    if (id === 'laravel-6-2') newInstruction = "Hasilkan format array dari sebuah koleksi Eloquent, lalu ambil datanya.";
    if (id === 'laravel-6-5') newInstruction = "Akses koleksi data yang sudah diload, dan modifikasi setiap nilainya.";
    
    if (id === 'laravel-7-1') newInstruction = "Buat event baru bernama UserRegistered menggunakan artisan command.";
    if (id === 'laravel-7-3') newInstruction = "Dispatch event UserRegistered yang sudah dibuat dengan payload tertentu.";
    if (id === 'laravel-7-4') newInstruction = "Buat listener bernama SendWelcomeEmail untuk menangani event registrasi.";
    if (id === 'laravel-7-5') newInstruction = "Daftarkan SendWelcomeEmail listener ke dalam EventServiceProvider.";
    if (id === 'laravel-7-6') newInstruction = "Jalankan job queue dispatch untuk memproses pekerjaan di antrean.";
    if (id === 'laravel-7-7') newInstruction = "Buat kelas Job baru bernama SendEmailJob menggunakan perintah artisan untuk pemrosesan latar belakang.";

    if (id === 'laravel-8-1') newInstruction = "Tulis definisi route group yang menerapkan middleware khusus 'api'.";
    if (id === 'laravel-8-2') newInstruction = "Kembalikan respon berbentuk JSON yang memuat status sukses dan kode 200 HTTP.";
    if (id === 'laravel-8-4') newInstruction = "Hasilkan kelas resource controller khusus API menggunakan artisan (dengan flag --api).";
    if (id === 'laravel-8-5') newInstruction = "Konversi model Eloquent menjadi representasi array menggunakan API Resource class.";
    if (id === 'laravel-8-6') newInstruction = "Bangkitkan sebuah token Sanctum baru dengan nama 'device-token' untuk digunakan pada otentikasi API.";

    if (id === 'laravel-9-1') newInstruction = "Buat kelas test baru bernama UserTest melalui CLI artisan.";
    if (id === 'laravel-9-2') newInstruction = "Susun skenario pengujian dasar (basic test) yang memverifikasi bahwa kondisi nilai true benar-benar bernilai true.";
    if (id === 'laravel-9-3') newInstruction = "Simulasikan request HTTP tipe GET menuju endpoint profil pengguna pada kode pengujian.";
    if (id === 'laravel-9-4') newInstruction = "Periksa (assert) bahwa response HTTP yang diterima mengembalikan status kode HTTP 200.";
    if (id === 'laravel-9-5') newInstruction = "Lakukan verifikasi menggunakan assertion database bahwa terdapat data dengan email 'test@test.com' di tabel users.";
    if (id === 'laravel-9-6') newInstruction = "Aktifkan trait penyegaran (RefreshDatabase) agar database dikosongkan secara otomatis pada setiap eksekusi fungsi pengujian.";
    
    return `${p1}${newInstruction}${p3}${solDouble ? '"' + solDouble + '"' : (solSingle ? "'" + solSingle + "'" : solRaw)}`;
  });
});

// laravel-5-5 fix test
content = content.replace(
  /(id:\s*"laravel-5-5"[\s\S]*?tests:\s*\[\s*\{\s*pattern:\s*).*?(,\s*message:.*?\}\s*\],\s*solution:\s*).*?(,)/,
  `$1"php\\\\s+artisan\\\\s+make:request\\\\s+StorePostRequest"$2"php artisan make:request StorePostRequest"$3`
);

// laravel-7-7 fix test
content = content.replace(
  /(id:\s*"laravel-7-7"[\s\S]*?tests:\s*\[\s*\{\s*pattern:\s*).*?(,\s*message:.*?\}\s*\],\s*solution:\s*).*?(,)/,
  `$1"php\\\\s+artisan\\\\s+make:job\\\\s+SendEmailJob"$2"php artisan make:job SendEmailJob"$3`
);

// Fix laravel-7-7 example.output "example.output menjelaskan MANFAAT"
content = content.replace(
  /(id:\s*"laravel-7-7"[\s\S]*?example:\s*\{[\s\S]*?output:\s*").*?(",)/,
  `$1Job created successfully.$2`
);


// 3. Fix quizzes having < 3 questions
const quizIds = [
  'laravel-1-kuis', 'laravel-2-kuis', 'laravel-3-kuis', 'laravel-4-kuis',
  'laravel-5-kuis', 'laravel-6-kuis', 'laravel-7-kuis', 'laravel-8-kuis', 'laravel-9-kuis'
];

quizIds.forEach(id => {
  const quizRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?questions:\\s*\\[[\\s\\S]*?\\})\\s*,\\s*\\]`);
  
  content = content.replace(quizRegex, (match, p1) => {
    return `${p1},
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Manakah pernyataan di bawah ini yang merupakan keuntungan menggunakan framework Laravel?",
              choices: ["Eksekusi kode lebih lambat dari bahasa mesin", "Struktur proyek sudah terstandarisasi dan memiliki berbagai fitur bawaan", "Tidak membutuhkan database", "Aplikasi selalu aman 100% tanpa diatur"],
              answerIndex: 1,
              explanation: "Laravel menyediakan struktur dan fitur bawaan yang mempercepat pengembangan aplikasi yang aman dan efisien."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Pilih command Artisan yang paling umum digunakan untuk meluncurkan development server lokal?",
              choices: ["php artisan run", "php artisan start", "php artisan serve", "php artisan open"],
              answerIndex: 2,
              explanation: "Perintah php artisan serve digunakan untuk menjalankan built-in server PHP di port 8000."
            }
          ]`;
  });
});

fs.writeFileSync('src/data/tracks/laravel.ts', content, 'utf8');
console.log("Fixes applied! Running verify...");

