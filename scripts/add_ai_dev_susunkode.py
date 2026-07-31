import sys
import os
import re
import importlib.util

spec = importlib.util.spec_from_file_location("sisip_susunkode", os.path.abspath("scripts/sisip-susunkode.py"))
sisip_susunkode = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sisip_susunkode)
sisipkan = sisip_susunkode.sisipkan

I = {}

# ai-0-1
I["ai-0-1"] = {
    "question": "Susun perintah npm untuk menginstal paket dotenv yang aman untuk menyimpan kunci API.",
    "potongan": ["npm install", "dotenv"],
    "pengecoh": ["npm add-secret", "env-safe-credentials"],
    "pemisah": " ",
    "explanation": "Perintah baku untuk memasang pustaka manajemen lingkungan di Node.js adalah 'npm install dotenv'. Pengecoh 'npm add-secret' dan 'env-safe-credentials' sering menggoda pemula yang mengira ada perintah khusus untuk kredensial rahasia, padahal itu perintah rekaan yang keliru."
}

# ai-0-2
I["ai-0-2"] = {
    "question": "Susun ekspresi JavaScript untuk membaca kunci API OpenAI dari variabel lingkungan Node.js.",
    "potongan": ["process.env", ".OPENAI_API_KEY"],
    "pengecoh": ["window.env", ".SECRET_OPENAI_TOKEN"],
    "pemisah": "",
    "explanation": "Di lingkungan Node.js, variabel lingkungan diakses melalui objek global 'process.env'. Objek 'window.env' adalah jebakan bagi yang terbiasa dengan browser, sedangkan 'SECRET_OPENAI_TOKEN' sering keliru dianggap nama standar padahal OpenAI menggunakan konvensi 'OPENAI_API_KEY'."
}

# ai-0-3
I["ai-0-3"] = {
    "question": "Susun perintah Git untuk memeriksa status berkas yang dilacak maupun yang diabaikan.",
    "potongan": ["git", "status"],
    "pengecoh": ["git-check", "state"],
    "pemisah": " ",
    "explanation": "Perintah 'git status' digunakan untuk melihat kondisi repositori lokal. Pengecoh 'git-check' dan 'state' sering menggoda pengguna yang lupa sintaks dasar Git dan keliru mengira ada sub-perintah bernama state."
}

# ai-0-4
I["ai-0-4"] = {
    "question": "Susun entri abaikan berkas untuk menyembunyikan berkas .env dari repositori Git.",
    "potongan": ["# ", ".env"],
    "pengecoh": ["// ", "config.json"],
    "pemisah": "",
    "explanation": "Berkas .gitignore menggunakan sintaks komentar garis diawali tanda pagar '# ' dan baris '.env' untuk mengabaikan berkas rahasia. Pengecoh '// ' adalah jebakan sintaks JavaScript, sedangkan 'config.json' keliru karena bisa mengabaikan konfigurasi non-rahasia lainnya."
}

# ai-1-1
I["ai-1-1"] = {
    "question": "Susun penjelasan mengenai sifat prediksi token pada LLM.",
    "potongan": ["LLM memprediksi token berikutnya", "berdasarkan probabilitas statistik"],
    "pengecoh": ["LLM memahami logika secara sadar", "berdasarkan indeks repositori lokal"],
    "pemisah": "\n",
    "explanation": "Model bahasa besar (LLM) bekerja dengan memprediksi token berikutnya berdasarkan distribusi probabilitas statistik dari data pelatihan. Anggapan bahwa LLM 'memahami logika secara sadar' atau melakukan 'pencarian database instan' adalah keliru dan sering menggoda pengguna yang menganggap AI sebagai manusia."
}

# ai-1-2
I["ai-1-2"] = {
    "question": "Susun struktur instruksi prompt yang menyertakan konteks peran dan format keluaran yang diinginkan.",
    "potongan": ["Bertindaklah sebagai pakar refactoring.", "Ubah fungsi berikut ke async/await dan berikan penjelasan singkat."],
    "pengecoh": ["Bertindaklah sebagai mesin pembuat kode otomatis.", "Tulis kode baru tanpa perlu melihat konteks proyek."],
    "pemisah": "\n",
    "explanation": "Prompt yang efektif memberikan peran jelas dan spesifikasi format luaran. Pengecoh 'tanpa perlu melihat konteks proyek' adalah jebakan umum yang sering menghasilkan kode halusinasi karena AI tidak diberi informasi yang cukup."
}

# ai-1-3
I["ai-1-3"] = {
    "question": "Susun prompt yang meminta AI memperbaiki bug dengan menyertakan pesan error lengkap.",
    "potongan": ["Fungsi ini menghasilkan TypeError: Cannot read property 'id' of undefined.", "Berikut kodenya: const id = user.id;"],
    "pengecoh": ["Kode ini rusak dan tidak mau jalan sama sekali.", "Tolong perbaiki tanpa saya sertakan pesan errornya."],
    "pemisah": "\n",
    "explanation": "Menyertakan pesan error yang presisi beserta potongan kodenya sangat krusial agar AI dapat mendiagnosis akar masalah. Mengirim prompt abstrak seperti 'kode ini rusak' sering keliru karena memaksa AI menebak-nebak tanpa bukti log."
}

# ai-1-4
I["ai-1-4"] = {
    "question": "Susun perintah untuk membatasi nilai temperatur LLM agar hasil pembuatan kode lebih konsisten.",
    "potongan": ["Set temperature:", "0.2"],
    "pengecoh": ["Set randomness:", "1.8"],
    "pemisah": " ",
    "explanation": "Pengaturan temperatur yang rendah (seperti 0.2) mengurangi variasi acak dan menghasilkan jawaban kode yang deterministik dan konsisten. Pengecoh 'randomness: 1.8' sering menggoda tetapi keliru karena temperatur tinggi justru meningkatkan risiko halusinasi kode."
}

# ai-1-5
I["ai-1-5"] = {
    "question": "Susun bagian prompt yang memberikan contoh input-output (Few-shot prompting).",
    "potongan": ["Input: 'user_name' -> Output: 'userName'", "Input: 'created_at' -> Output: 'createdAt'"],
    "pengecoh": ["Input: 'ubah nama' -> Output: 'berhasil'", "Input: 'proses data' -> Output: 'selesai'"],
    "pemisah": "\n",
    "explanation": "Few-shot prompting memberikan pasangan input-output yang konkrit agar model memahami pola transformasi yang diinginkan. Contoh abstrak seperti 'ubah nama -> berhasil' sering keliru dan menjebak karena tidak menunjukkan pola koding aktual."
}

# ai-1-6
I["ai-1-6"] = {
    "question": "Susun prompt untuk melakukan sistematisasi audit keamanan pada snippet kode.",
    "potongan": ["Periksa snippet berikut untuk celah SQL Injection:", "SELECT * FROM users WHERE id = ' + req.query.id"],
    "pengecoh": ["Pastikan kode ini 100% aman tanpa celah:", "SELECT * FROM users WHERE status = 'active'"],
    "pemisah": "\n",
    "explanation": "Spesifik sebutkan jenis celah (seperti SQL Injection) beserta potongan kodenya agar AI memfokuskan analisis keamanan. Pengecoh '100% aman tanpa celah' adalah klaim absolut yang keliru dan menggoda pemula padahal analisis keamanan membutuhkan pengujian berlapis."
}

# ai-2-1
I["ai-2-1"] = {
    "question": "Susun prompt yang menetapkan peran spesifik sebelum meminta penjelasan kode.",
    "potongan": ["Sebagai senior developer TypeScript,", "jelaskan perbedaan type dan interface dalam contoh ini."],
    "pengecoh": ["Sebagai pencari jawaban internet,", "carikan perbedaan type dan interface dari Google."],
    "pemisah": "\n",
    "explanation": "Menentukan persona ('Sebagai senior developer TypeScript') mengarahkan AI untuk memberikan penjelasan berstandar industri. Pengecoh 'pencari jawaban internet' adalah bentuk permohonan yang salah arah dan sering keliru menghasilkan rangkuman umum daripada analisis mendalam."
}

# ai-2-2
I["ai-2-2"] = {
    "question": "Susun prompt yang memberikan batasan eksplisit pada jawaban AI.",
    "potongan": ["Tulis fungsi validasi email dalam JavaScript.", "Jangan gunakan pustaka eksternal dan gunakan regex sederhana."],
    "pengecoh": ["Tulis fungsi validasi email terbaik.", "Gunakan npm package apa saja yang paling populer di industri."],
    "pemisah": "\n",
    "explanation": "Batasan eksplisit seperti 'Jangan gunakan pustaka eksternal' mencegah AI menyarankan dependency berlebihan. Mengabaikan batasan atau meminta 'package apa saja' sering menjebak proyek ke dalam dependensi yang tidak diperlukan."
}

# ai-2-3
I["ai-2-3"] = {
    "question": "Susun teknik Chain-of-Thought pada prompt refactoring.",
    "potongan": ["Jelaskan langkah demi langkah sebelum menulis kode refactored:", "1. Identifikasi duplikasi. 2. Ekstrak helper."],
    "pengecoh": ["Langsung berikan kode perbaikan akhir:", "Tanpa perlu menjelaskan langkah pemikirannya."],
    "pemisah": "\n",
    "explanation": "Pendekatan Chain-of-Thought ('Jelaskan langkah demi langkah') memaksa model merencanakan penalaran sebelum menulis sintaks. Meminta kode langsung tanpa langkah penalaran sering keliru karena AI cenderung melompati penanganan edge case."
}

# ai-2-4
I["ai-2-4"] = {
    "question": "Susun prompt yang menggunakan penanda blok sampel kode (Markdown code fence).",
    "potongan": ["Review kode berikut:\n```js\nconst total = price * qty;\n```", "Fokus pada potensi bug pembulatan desimal."],
    "pengecoh": ["Review kode berikut:\nconst total = price * qty;", "Fokus pada cara instalasi editor kodenya."],
    "pemisah": "\n",
    "explanation": "Mengurung kode dengan penanda Markdown (```js ... ```) membantu AI memisahkan instruksi prompt dari kode sumber. Pengecoh tanpa penanda blok sering membuat AI keliru mengartikan kode sebagai instruksi prompt."
}

# ai-2-5
I["ai-2-5"] = {
    "question": "Susun instruksi prompt untuk meminta unit test dengan skenario sukses dan gagal.",
    "potongan": ["Buat unit test Jest untuk fungsi hitungDiskon.", "Sertakan test case untuk nilai normal dan input negatif."],
    "pengecoh": ["Buat unit test singkat saja.", "Cukup uji skenario ketika input bernilai benar."],
    "pemisah": "\n",
    "explanation": "Prompt unit test yang baik mewajibkan cakupan skenario sukses dan batas/gagal (input negatif). Hanya menguji skenario sukses adalah jebakan klasik yang membuat bug edge-case lolos ke produksi."
}

# ai-2-6
I["ai-2-6"] = {
    "question": "Susun instruksi umpan balik saat jawaban AI pertama masih mengandung bug.",
    "potongan": ["Hasil kodenya masih Melempar RangeError pada array kosong.", "Perbaiki dengan menambahkan pengecekan panjang array di awal."],
    "pengecoh": ["Kodenya jelek dan masih salah.", "Tulis ulang seluruh aplikasi dari awal tanpa bug."],
    "pemisah": "\n",
    "explanation": "Umpan balik iteratif yang efektif menyertakan pesan error spesifik dan petunjuk perbaikan. Mengritik umum seperti 'kodenya jelek' menggoda secara emosional tetapi keliru karena tidak memberikan arah perbaikan bagi AI."
}

# ai-3-1
I["ai-3-1"] = {
    "question": "Susun konfigurasi file instruksi khusus AI untuk repositori proyek.",
    "potongan": ["# AI Instructions", "Gunakan TypeScript strict mode dan penulisan arrow function."],
    "pengecoh": ["# Global Settings", "Izinkan AI mengubah file package.json tanpa persetujuan."],
    "pemisah": "\n",
    "explanation": "File instruksi khusus (seperti .cursorrules atau AGENTS.md) mengarahkan AI mengikuti standar pengkodean repositori. Mengizinkan AI mengubah berkas sensitif seperti package.json tanpa persetujuan adalah jebakan berbahaya dalam alur kerja AI."
}

# ai-3-2
I["ai-3-2"] = {
    "question": "Susun prompt instruksi untuk pembuatan sketsa UI dasar.",
    "potongan": ["Buat komponen React tombol utama dengan Tailwind CSS.", "Gunakan warna bg-blue-600 dan efek hover:bg-blue-700."],
    "pengecoh": ["Buat komponen tombol UI yang paling bagus.", "Tulis kode CSS murni dalam file terpisah tanpa Tailwind."],
    "pemisah": "\n",
    "explanation": "Menentukan framework CSS dan utility class spesifik membantu AI merender UI dengan gaya terukur. Menggunakan kata subjektif seperti 'paling bagus' keliru dan menjebak karena hasil AI akan sangat bervariasi."
}

# ai-3-3
I["ai-3-3"] = {
    "question": "Susun instruksi pembuatan tipe data TypeScript dari skema respons JSON.",
    "potongan": ["Generasikan interface TypeScript dari sampel JSON berikut:", "{\n  \"id\": 1,\n  \"name\": \"Ali\"\n}"],
    "pengecoh": ["Tuliskan class JavaScript dari JSON berikut:", "{\n  \"id\": 1,\n  \"name\": \"Ali\"\n}"],
    "pemisah": "\n",
    "explanation": "TypeScript interface adalah cara baku untuk memetakan skema JSON ke dalam sistem tipe. Membuat class JavaScript murni sering keliru ketika tujuan utamanya hanya validasi tipe kompilasi."
}

# ai-3-4
I["ai-3-4"] = {
    "question": "Susun prompt pembuat skrip migrasi basis data.",
    "potongan": ["Buat skrip SQL migration untuk menambah kolom 'avatar_url' (VARCHAR 255)", "pada tabel 'users' di PostgreSQL."],
    "pengecoh": ["Tambahkan kolom baru ke basis data sekarang juga.", "Hapus tabel users lalu buat ulang dari awal."],
    "pemisah": "\n",
    "explanation": "Perubahan skema basis data wajib dilakukan via skrip migrasi terukur (ALTER TABLE). Pengecoh 'hapus tabel lalu buat ulang' adalah tindakan keliru mendasar yang berisiko memusnahkan data produksi."
}

# ai-3-5
I["ai-3-5"] = {
    "question": "Susun perintah CLI untuk menjalankan generator dokumen otomatis.",
    "potongan": ["npx typedoc", "--out docs src/index.ts"],
    "pengecoh": ["npm run make-doc-site", "--force-all"],
    "pemisah": " ",
    "explanation": "Pustaka seperti TypeDoc menggunakan sintaks CLI `npx typedoc --out docs src/index.ts`. Command rekaan `make-doc-site` sering menggoda pemula yang mengira ada skrip npm bawaan tanpa perlu memasang CLI."
}

# ai-3-6
I["ai-3-6"] = {
    "question": "Susun prompt pembuat konfigurasi CI/CD GitHub Actions.",
    "potongan": ["Buat workflow GitHub Actions untuk menjalankan `npm test`", "setiap kali ada Pull Request ke branch `main`."],
    "pengecoh": ["Buat workflow GitHub Actions untuk mengunggah berkas ke server", "setiap kali ada pengetikan kode baru."],
    "pemisah": "\n",
    "explanation": "Pengujian otomatis CI/CD dipicu oleh event `pull_request` ke branch `main`. Memicu workflow berat pada setiap pengetikan kode adalah konsep yang keliru dan menjebak karena menghabiskan kuota CI."
}

# ai-4-1
I["ai-4-1"] = {
    "question": "Susun verifikasi penanganan nilai null/undefined pada kode buatan AI.",
    "potongan": ["if (!user || !user.profile) {", "  return null;", "}"],
    "pengecoh": ["if (user = null) {", "  return undefined;", "}"],
    "pemisah": "\n",
    "explanation": "Pengecekan keabsahan objek sebelum mengakses propertinya menghalangi TypeError runtime. Pengecoh `if (user = null)` menggunakan operator penugasan `=` bukannya pembanding `!user`, kesalahan jebakan klasik yang sering terlewat saat membaca kode AI."
}

# ai-4-2
I["ai-4-2"] = {
    "question": "Susun pemeriksaan kerentanan Injection pada query yang dibuat AI.",
    "potongan": ["const query = 'SELECT * FROM users WHERE id = $1';", "await db.query(query, [userId]);"],
    "pengecoh": ["const query = `SELECT * FROM users WHERE id = ${userId}`;", "await db.query(query);"],
    "pemisah": "\n",
    "explanation": "Parameterized query (`$1` dengan array argumen) mencegah SQL injection. Template literal langsung `${userId}` sangat menggoda karena ringkas, tetapi keliru dan membuka celah keamanan kritis."
}

# ai-4-3
I["ai-4-3"] = {
    "question": "Susun pengujian kompleksitas waktu algoritma buatan AI.",
    "potongan": ["// Mengganti nested loop O(N^2) dengan Map O(N)", "const map = new Map();"],
    "pengecoh": ["// Menggunakan array.includes di dalam loop O(N^2)", "const list = [];"],
    "pemisah": "\n",
    "explanation": "Menggunakan Map/Set menurunkan kompleksitas dari O(N^2) ke O(N). Memakai `includes()` di dalam loop sering keliru dilakukan AI karena kodenya terlihat sederhana padahal kinerjanya lambat."
}

# ai-4-4
I["ai-4-4"] = {
    "question": "Susun refactoring variabel magic number pada kode buatan AI.",
    "potongan": ["const MAX_RETRY_ATTEMPTS = 3;", "if (attempts > MAX_RETRY_ATTEMPTS) {"],
    "pengecoh": ["var timeout_sec = 3000;", "if (attempts > 3) {"],
    "pemisah": "\n",
    "explanation": "Mengekstrak nilai konstan bertipe nama deskriptif (`MAX_RETRY_ATTEMPTS`) meningkatkan kejelasan kode. Menuliskan angka mentah `3` langsung di dalam kondisi sering menjebak developer saat ingin mengubah batas pengulangan."
}

# ai-4-5
I["ai-4-5"] = {
    "question": "Susun verifikasi konsistensi arsitektur lapisan aplikasi.",
    "potongan": ["// Controller memanggil Service layer", "const data = await userService.getUser(id);"],
    "pengecoh": ["// Controller langsung mengeksekusi SQL raw", "const data = await db.raw('SELECT * FROM users');"],
    "pemisah": "\n",
    "explanation": "Prinsip pemisahan tanggung jawab menuntut Controller memanggil Service layer. Kode AI yang langsung mengeksekusi SQL raw di Controller menggoda karena cepat dibuat, tetapi melanggar arsitektur bersih."
}

# ai-4-6
I["ai-4-6"] = {
    "question": "Susun daftar periksa manual wajib setelah menerima saran AI.",
    "potongan": ["1. Jalankan unit test lokal.", "2. Periksa kesesuaian dengan tipe data."],
    "pengecoh": ["1. Langsung commit ke main branch.", "2. Percaya penuh tanpa uji coba."],
    "pemisah": "\n",
    "explanation": "Verifikasi manual dan pengujian lokal wajib dilakukan sebelum commit. Mempercayai kode AI tanpa uji coba adalah jebakan terbesar yang sering menyebabkan kerusakan pada lingkungan produksi."
}

# ai-5-1
I["ai-5-1"] = {
    "question": "Susun prompt eksplorasi bug saat terjadi TypeError tak terduga.",
    "potongan": ["Mengapa `data.map is not a function` terjadi di React?", "Berikan 2 kemungkinan penyebab dan cara memperbaikinya."],
    "pengecoh": ["Mengapa React saya tidak muncul?", "Tulis ulang seluruh komponen React dari nol."],
    "pemisah": "\n",
    "explanation": "Menanyakan pesan error spesifik (`data.map is not a function`) membantu AI menganalisis bahwa `data` bernilai non-array. Pertanyaan umum seperti 'mengapa React tidak muncul' sering keliru karena tidak terarah."
}

# ai-5-2
I["ai-5-2"] = {
    "question": "Susun pesan log hipotesis masalah sesuai temuan awal.",
    "potongan": ["Dugaan saya: query dikirim sebelum state diperbarui.", "Sudah saya coba: mencetak kata kunci di handler.", "Belum saya periksa: apakah sebaiknya dipindah ke useEffect."],
    "pengecoh": ["Dugaan saya: server backend mati total.", "Sudah saya coba: merestart laptop.", "Belum saya periksa: menghapus seluruh berkas node_modules."],
    "pemisah": "\n",
    "explanation": "Log hipotesis yang terstruktur membantu pengembang dan AI memfokuskan pencarian bug pada alur state & efek. Pengecoh seperti 'merestart laptop' atau 'menghapus node_modules' adalah tindakan spekulatif yang sering keliru."
}

# ai-5-3
I["ai-5-3"] = {
    "question": "Susun refactoring fungsi tampilkanPesanan dari callback ke async/await.",
    "potongan": ["async function tampilkanPesanan(id) {", "  const user = await ambilUser(id);", "  const pesanan = await ambilPesanan(user.id);", "  console.log(pesanan);", "}"],
    "pengecoh": ["function tampilkanPesanan(id) {", "  const user = ambilUser(id);", "  const pesanan = ambilPesanan(user);", "  return pesanan;", "}"],
    "pemisah": "\n",
    "explanation": "Fungsi asynchronous memerlukan kata kunci `async` di deklarasi dan `await` di setiap pemanggilan Janji (Promise). Lupa mencantumkan `await` adalah kesalahan menggoda yang menyebabkan variabel berisi Promise terpending."
}

# ai-5-4
I["ai-5-4"] = {
    "question": "Susun prompt orientasi codebase asing untuk alur checkout.",
    "potongan": ["Saya baru di codebase ini dan harus mengubah alur checkout.", "1. Mana titik masuk aplikasinya?", "2. Bagaimana alur data dari tombol Bayar sampai pesanan tersimpan?", "3. File mana saja yang perlu saya buka untuk menambah metode pembayaran baru?"],
    "pengecoh": ["Saya tidak paham codebase ini.", "1. Buat ulang checkout dari awal.", "2. Jangan gunakan file yang sudah ada.", "3. Abaikan arsitektur lama."],
    "pemisah": "\n",
    "explanation": "Prompt orientasi mengajukan pertanyaan terstruktur mengenai titik masuk, alur data, dan berkas terkait. Menyarankan pembuatan ulang tanpa memahami arsitektur lama adalah pendekatan menjebak yang merusak proyek."
}

# ai-5-5
I["ai-5-5"] = {
    "question": "Susun pemanggilan useEffect untuk memuat data sekali saja setelah render pertama.",
    "potongan": ["useEffect(() => {", "  muatData();", "}, []);"],
    "pengecoh": ["useEffect(() => {", "  muatData();", "});"],
    "pemisah": "\n",
    "explanation": "Array dependensi kosong `[]` pada `useEffect` memastikan efek hanya berjalan sekali saat komponen di-mount. Lupa menyertakan array dependensi adalah jebakan umum yang memicu loop pemanggilan API tak terbatas."
}

# ai-5-6
I["ai-5-6"] = {
    "question": "Susun perintah Git untuk membuang seluruh perubahan lokal yang belum di-commit.",
    "potongan": ["git restore", "."],
    "pengecoh": ["git remove", "--all-files"],
    "pemisah": " ",
    "explanation": "Perintah `git restore .` membuang seluruh perubahan berkas lokal pada direktori kerja saat ini. Pengecoh `git remove` adalah perintah fiktif yang sering menggoda pengguna yang keliru membedakan `git rm` dan `git restore`."
}

# ai-6-1
I["ai-6-1"] = {
    "question": "Susun kode yang telah dibersihkan dari data sensitif sebelum dikirim ke AI.",
    "potongan": ["const key = process.env.API_KEY;", "const email = 'user@example.com';", "kirimLaporan(key, email);"],
    "pengecoh": ["const key = 'sk-live-2291-produksi';", "const email = 'siti.rahayu@bankxyz.co.id';", "kirimSensitif(key, email);"],
    "pemisah": "\n",
    "explanation": "Menyembunyikan kunci API ke `process.env` dan menggunakan email dummy (`user@example.com`) mencegah kebocoran data rahasia ke server LLM publik. Menempelkan kunci produksi atau data nasabah asli adalah pelanggaran keamanan fatal."
}

# ai-6-2
I["ai-6-2"] = {
    "question": "Susun kalimat pembuka sesi live coding mengenai aturan AI dan proses berpikir.",
    "potongan": ["Sebelum mulai, boleh saya tanya aturannya: apakah saya diizinkan memakai bantuan AI di sesi ini?", "Apa pun aturannya saya ikuti.", "Saya akan menjelaskan proses berpikir saya sambil mengerjakan supaya Anda bisa melihat alasan tiap keputusan."],
    "pengecoh": ["Saya akan menggunakan AI tanpa memberitahu Anda.", "Jika AI tidak diperbolehkan, saya tidak mau mengerjakan tes ini.", "Saya hanya akan menyalin jawaban tanpa menjelaskan alasan keputusan saya."],
    "pemisah": "\n",
    "explanation": "Bertanya secara terbuka mengenai aturan pemakaian AI dan bersedia menjelaskan proses berpikir menunjukkan profesionalisme tinggi. Menggunakan AI secara sembunyi-sembunyi atau menolak menjelaskan penalaran adalah jebakan etika yang menggagalkan interview."
}

# ai-6-3
I["ai-6-3"] = {
    "question": "Susun tiga kriteria penerimaan (acceptance criteria) fitur unggah foto profil.",
    "potongan": ["- Pengguna dapat mengunggah foto berformat JPG atau PNG berukuran maksimal 2 MB.", "- Foto yang berhasil diunggah langsung tampil di halaman profil tanpa perlu refresh.", "- Jika file ditolak, pesan error menyebut alasannya dan foto lama tetap dipakai."],
    "pengecoh": ["- Foto harus kelihatan bagus.", "- Sistem harus cepat tanpa kendala.", "- Unggah berkas apa saja diperbolehkan tanpa batas."],
    "pemisah": "\n",
    "explanation": "Kriteria penerimaan spesifik harus mencantumkan batasan teknis (ukuran 2 MB, JPG/PNG) serta perilaku error. Pernyataan kabur seperti 'harus kelihatan bagus' sering keliru karena tidak bisa diuji secara objektif."
}

# ai-6-4
I["ai-6-4"] = {
    "question": "Susun fungsi kapitalisasi kata tanpa bantuan AI.",
    "potongan": ["function kapitalisasi(kalimat) {", "  return kalimat", "    .split(' ')", "    .map((kata) => kata[0].toUpperCase() + kata.slice(1))", "    .join(' ');", "}", "\nconsole.log(kapitalisasi('belajar coding itu seru'));"],
    "pengecoh": ["function kapitalisasi(kalimat) {", "  return kalimat", "    .toLowerCase()", "    .map((kata) => kata.capitalize())", "    .concat(' ');", "}", "\nprint(kapitalisasi('belajar coding itu seru'));"],
    "pemisah": "\n",
    "explanation": "Mengubah huruf pertama tiap kata membutuhkan pemecahan string `.split(' ')`, transformasi `.toUpperCase()` pada indeks ke-0, dan penggabungan `.join(' ')`. Pengecoh `.capitalize()` adalah metode fiktif di JS standar yang sering keliru dikira ada."
}

# ai-6-5
I["ai-6-5"] = {
    "question": "Susun catatan keputusan arsitektur (ADR) untuk penggunaan Tailwind CSS.",
    "potongan": ["## Konteks\nSaya bekerja sendiri dan butuh UI konsisten tanpa memikirkan penamaan kelas.", "## Keputusan\nMemakai Tailwind CSS, bukan menulis CSS terpisah per komponen.", "## Konsekuensi\nMarkup jadi lebih panjang dan perlu waktu membiasakan diri, tapi tidak ada file CSS yang membengkak seiring proyek bertambah besar."],
    "pengecoh": ["## Permasalahan\nCSS sulit dipelajari.", "## Solusi\nTidak usah pakai styling sama sekali.", "## Hasil\nTampilan aplikasi polos tanpa CSS."],
    "pemisah": "\n\n",
    "explanation": "Format ADR (Architecture Decision Record) standar menyertakan Konteks, Keputusan, dan Konsekuensi kompromi yang diambil. Menghindari styling sama sekali adalah bentuk penyelesaian yang keliru dan menjebak bagi proyek portofolio."
}

# Perform insertion into ai-dev.ts
count = sisipkan("src/data/tracks/ai-dev.ts", I, r"ai-\d+-\d+")
print(f"Successfully inserted {count} susunKode entries into src/data/tracks/ai-dev.ts")
