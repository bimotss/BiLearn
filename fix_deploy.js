const fs = require('fs');
let file = fs.readFileSync('src/data/tracks/deployment.ts', 'utf8');

// Fix outputs
file = file.replace(
  'output: "Hak akses folder diatur agar Nginx dapat membacanya.",',
  'output: "drwxr-xr-x 2 www-data www-data 4096 Jul 27 10:00 html",'
);
file = file.replace(
  'output: "Aplikasi Node.js di port 3000 kini dapat diakses via domainku.com.",',
  'output: "Forwarding request to internal upstream 127.0.0.1:3000",'
);
file = file.replace(
  'output: "Tim dapat menguji fitur langsung di browser sebelum menyetujui PR.",',
  'output: "Ready! Deployment available at https://app-pr-42.vercel.app",'
);

// Fix quizzes
file = file.replace(
  /kind: "quiz",\s*id: "deploy-1-kuis",\s*title: "Kuis: Linux & Terminal",\s*questions: \[\s*\{\s*id: "q1",\s*type: "pilihan-ganda",\s*question: "Perintah Linux apa yang digunakan untuk menghentikan proses yang berjalan berdasarkan ID Proses \(PID\)-nya\?",\s*choices: \["kill", "stop", "close", "end"\],\s*answerIndex: 0,\s*explanation: "Perintah `kill` \(terutama `kill -9 <PID>`\) mengirimkan sinyal penghentian ke proses sistem\.",\s*\},\s*\],/s,
  `kind: "quiz",
          id: "deploy-1-kuis",
          title: "Kuis: Linux & Terminal",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Perintah Linux apa yang digunakan untuk menghentikan proses yang berjalan berdasarkan ID Proses (PID)-nya?",
              choices: ["kill", "stop", "close", "end"],
              answerIndex: 0,
              explanation: "Perintah \`kill\` (terutama \`kill -9 <PID>\`) mengirimkan sinyal penghentian ke proses sistem.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Simbol apa yang digunakan untuk mengarahkan output dari suatu perintah dan menambahkan nilainya di akhir file (append) tanpa menghapus isinya?",
              choices: [">", "|", ">>", "<"],
              answerIndex: 2,
              explanation: "Simbol \`>>\` digunakan untuk append, sedangkan \`>\` akan menghapus isi file sebelumnya.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi dari perintah pwd?",
              choices: ["Menampilkan proses berjalan", "Mengubah password user", "Menampilkan direktori saat ini", "Membuat direktori baru"],
              answerIndex: 2,
              explanation: "\`pwd\` singkatan dari Print Working Directory, digunakan untuk melihat lokasi folder saat ini.",
            }
          ],`
);

file = file.replace(
  /kind: "quiz",\s*id: "deploy-2-kuis",\s*title: "Kuis: Docker",\s*questions: \[\s*\{\s*id: "q1",\s*type: "pilihan-ganda",\s*question: "Instruksi Dockerfile apa yang digunakan untuk mendefinisikan perintah eksekusi utama saat Container pertama kali dijalankan\?",\s*choices: \["RUN", "CMD", "COPY", "FROM"\],\s*answerIndex: 1,\s*explanation: "CMD mendefinisikan perintah default yang akan dieksekusi saat container dijalankan\.",\s*\},\s*\],/s,
  `kind: "quiz",
          id: "deploy-2-kuis",
          title: "Kuis: Docker",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Instruksi Dockerfile apa yang digunakan untuk mendefinisikan perintah eksekusi utama saat Container pertama kali dijalankan?",
              choices: ["RUN", "CMD", "COPY", "FROM"],
              answerIndex: 1,
              explanation: "CMD mendefinisikan perintah default yang akan dieksekusi saat container dijalankan.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa tujuan utama menggunakan multi-stage build?",
              choices: ["Menambah layer di image", "Menghasilkan image lebih kecil dengan membuang alat build", "Menggabungkan beberapa Dockerfile", "Menjalankan beberapa container sekaligus"],
              answerIndex: 1,
              explanation: "Multi-stage memisahkan build environment dan runtime, sehingga alat-alat build tidak terbawa ke image akhir.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara membuat data tetap bertahan meski container dihapus?",
              choices: ["Menggunakan Network", "Menggunakan Docker Volume", "Menaruhnya di image root", "Memakai .dockerignore"],
              answerIndex: 1,
              explanation: "Volume menyimpan data di host secara independen, di luar sistem berkas container yang bersifat sementara.",
            }
          ],`
);

file = file.replace(
  /kind: "quiz",\s*id: "deploy-3-kuis",\s*title: "Kuis: Docker Compose",\s*questions: \[\s*\{\s*id: "q1",\s*type: "pilihan-ganda",\s*question: "Perintah Docker Compose apa yang digunakan untuk mengunduh, membikin, dan menjalankan seluruh multi-container service di background\?",\s*choices: \["docker compose start", "docker compose up -d", "docker compose run --all", "docker compose build"\],\s*answerIndex: 1,\s*explanation: "docker compose up -d menyusun dan memulakan seluruh layanan yang terdefinisi di compose\.yaml secara detached \(background\)\.",\s*\},\s*\],/s,
  `kind: "quiz",
          id: "deploy-3-kuis",
          title: "Kuis: Docker Compose",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Perintah Docker Compose apa yang digunakan untuk mengunduh, membikin, dan menjalankan seluruh multi-container service di background?",
              choices: ["docker compose start", "docker compose up -d", "docker compose run --all", "docker compose build"],
              answerIndex: 1,
              explanation: "docker compose up -d menyusun dan memulakan seluruh layanan yang terdefinisi di compose.yaml secara detached (background).",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Dari mana Docker Compose membaca variabel lingkungan (environment variables) secara default?",
              choices: [".env", "config.json", "env.yaml", "secrets.txt"],
              answerIndex: 0,
              explanation: "Secara bawaan, docker compose akan mencari file .env di direktori yang sama dengan berkas compose.yaml.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa tujuan menggunakan properti depends_on di compose?",
              choices: ["Menyatukan dua container", "Menentukan urutan startup layanan", "Menghapus service dependen", "Menyalin kode sumber"],
              answerIndex: 1,
              explanation: "depends_on memastikan layanan tertentu (seperti app) berjalan setelah layanan lain (seperti database) siap.",
            }
          ],`
);

file = file.replace(
  /kind: "quiz",\s*id: "deploy-4-kuis",\s*title: "Kuis: Deploy ke VPS",\s*questions: \[\s*\{\s*id: "q1",\s*type: "pilihan-ganda",\s*question: "Tool populer apa yang digunakan untuk menerbitkan sertifikat SSL\/HTTPS gratis dari Let's Encrypt secara otomatis pada server Nginx\?",\s*choices: \["Certbot", "Docker", "NPM", "Ufw"\],\s*answerIndex: 0,\s*explanation: "Certbot mengotomatiskan penerbitan dan pembaruan sertifikat SSL Let's Encrypt pada web server\.",\s*\},\s*\],/s,
  `kind: "quiz",
          id: "deploy-4-kuis",
          title: "Kuis: Deploy ke VPS",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Tool populer apa yang digunakan untuk menerbitkan sertifikat SSL/HTTPS gratis dari Let's Encrypt secara otomatis pada server Nginx?",
              choices: ["Certbot", "Docker", "NPM", "Ufw"],
              answerIndex: 0,
              explanation: "Certbot mengotomatiskan penerbitan dan pembaruan sertifikat SSL Let's Encrypt pada web server.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Peran utama Nginx dalam skenario deployment modern adalah...",
              choices: ["Menjadi database SQL", "Sebagai Reverse Proxy memutar trafik ke aplikasi", "Menyimpan file Docker image", "Mengeksekusi kode NodeJS"],
              answerIndex: 1,
              explanation: "Nginx beroperasi di depan, menerima koneksi publik lalu meneruskannya (proxy_pass) ke port internal aplikasi Node/Python.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa tujuan menggunakan UFW (Uncomplicated Firewall)?",
              choices: ["Mengubah IP server", "Mempercepat koneksi internet VPS", "Membatasi port jaringan mana yang boleh diakses publik", "Menginstal dependensi otomatis"],
              answerIndex: 2,
              explanation: "UFW menutup port yang tidak digunakan demi keamanan, dan hanya membuka port esensial seperti 80 (HTTP), 443 (HTTPS), dan 22 (SSH).",
            }
          ],`
);

file = file.replace(
  /kind: "quiz",\s*id: "deploy-5-kuis",\s*title: "Kuis: Platform Deploy & CI\/CD",\s*questions: \[\s*\{\s*id: "q1",\s*type: "pilihan-ganda",\s*question: "Di folder mana file skrip otomatisasi GitHub Actions wajib diletakkan di dalam repository\?",\s*choices: \["\.github\/workflows\/", "\.ci\/actions\/", "\.github\/scripts\/", "config\/ci\/"\],\s*answerIndex: 0,\s*explanation: "GitHub Actions secara otomatis mencari file konfigurasi workflow YAML di folder `\.github\/workflows\/`\.",\s*\},\s*\],/s,
  `kind: "quiz",
          id: "deploy-5-kuis",
          title: "Kuis: Platform Deploy & CI/CD",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Di folder mana file skrip otomatisasi GitHub Actions wajib diletakkan di dalam repository?",
              choices: [".github/workflows/", ".ci/actions/", ".github/scripts/", "config/ci/"],
              answerIndex: 0,
              explanation: "GitHub Actions secara otomatis mencari file konfigurasi workflow YAML di folder \`.github/workflows/\`.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Tahap mana dalam CI/CD yang berfokus menjalankan linter dan automated tests?",
              choices: ["Continuous Deployment", "Continuous Integration", "Preview Deployment", "Infrastructure as Code"],
              answerIndex: 1,
              explanation: "Continuous Integration memastikan setiap baris kode baru bebas dari syntax error dan lulus unit testing sebelum digabungkan.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Di mana sebaiknya token API privat disimpan agar dapat digunakan di GitHub Actions dengan aman?",
              choices: ["Hardcode di dalam file YAML", "Di dalam variabel proses file aplikasi", "Di GitHub Repository Secrets", "Di dalam commit history"],
              answerIndex: 2,
              explanation: "GitHub Repository Secrets mengenkripsi nilainya, mencegahnya terekspos di log dan tidak tercatat dalam riwayat Git.",
            }
          ],`
);

file = file.replace(
  /kind: "quiz",\s*id: "deploy-6-kuis",\s*title: "Kuis: Monitoring & Log",\s*questions: \[\s*\{\s*id: "q1",\s*type: "pilihan-ganda",\s*question: "Prinsip utama apa yang harus dipegang saat menyusun dokumen Post-Mortem pasca terjadi insiden server down\?",\s*choices: \[\s*"Menghukum developer yang berbuat salah",\s*"Bersifat Blameless \(tanpa menyalahkan individu\) dan berfokus pada perbaikan sistem\/proses",\s*"Menyembunyikan insiden dari atasan",\s*"Menghapus seluruh file backup",\s*\],\s*answerIndex: 1,\s*explanation: "Post-Mortem yang baik bersifat Blameless untuk fokus mencari akar masalah sistemik dan mencegah terulangnya insiden\.",\s*\},\s*\],/s,
  `kind: "quiz",
          id: "deploy-6-kuis",
          title: "Kuis: Monitoring & Log",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Prinsip utama apa yang harus dipegang saat menyusun dokumen Post-Mortem pasca terjadi insiden server down?",
              choices: [
                "Menghukum developer yang berbuat salah",
                "Bersifat Blameless (tanpa menyalahkan individu) dan berfokus pada perbaikan sistem/proses",
                "Menyembunyikan insiden dari atasan",
                "Menghapus seluruh file backup",
              ],
              answerIndex: 1,
              explanation: "Post-Mortem yang baik bersifat Blameless untuk fokus mencari akar masalah sistemik dan mencegah terulangnya insiden.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Manakah tool yang difokuskan untuk menangkap uncaught exception pada aplikasi beserta stacktrace eksekusi baris kodenya?",
              choices: ["UptimeRobot", "Sentry", "Nginx", "GitHub Actions"],
              answerIndex: 1,
              explanation: "Sentry secara otomatis menangkap exception (Error/Crash) pada aplikasi beserta konteks kode untuk mempercepat diagnosis.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa menyimpan cadangan database ke tempat tidur/lokal server (VPS yang sama) adalah praktik yang berbahaya?",
              choices: ["Mengurangi kecepatan database", "Jika VPS terbakar atau datanya lenyap, cadangannya juga ikut musnah", "Ukurannya memakan cache NodeJS", "Hanya root yang bisa membukanya"],
              answerIndex: 1,
              explanation: "Backup harus dikirim keluar (offsite backup) semacam ke Object Storage (S3) supaya selamat meskipun server utamanya hancur total.",
            }
          ],`
);

// Fix instructions carefully
const replacer = (patternStr, newInstruction) => {
  file = file.replace(patternStr, newInstruction);
};

replacer(
  'instruction:\n            "Tulis instruksi dasar Dockerfile `FROM node:20-alpine`.",',
  'instruction:\n            "Tentukan image dasar untuk Dockerfile menggunakan NodeJS versi 20 varian alpine.",'
);

replacer(
  'instruction:\n            "Tuliskan instruksi penyalinan `COPY package*.json ./`.",',
  'instruction:\n            "Salin file package.json beserta pasangannya ke direktori kerja saat ini menggunakan pola wildcard asterisk.",'
);

replacer(
  'instruction:\n            "Tulis instruksi penyalinan antar stage `COPY --from=builder /app/dist ./dist`.",',
  'instruction:\n            "Pindahkan folder /app/dist yang dihasilkan dari stage bernama builder ke lokasi ./dist pada stage final.",'
);

replacer(
  'instruction:\n            "Tuliskan baris penolak `node_modules` di `.dockerignore`.",',
  'instruction:\n            "Kecualikan direktori dependensi Node.js agar tidak disertakan ke dalam Docker image saat proses build berlangsung.",'
);

replacer(
  'instruction:\n            "Tuliskan instruksi user non-root `USER node`.",',
  'instruction:\n            "Alihkan identitas pelaksana perintah selanjutnya agar dijalankan sebagai pengguna node untuk alasan keamanan.",'
);

replacer(
  'instruction:\n            "Tuliskan sintaks interpolasi env di compose `${DATABASE_URL}`.",',
  'instruction:\n            "Suntikkan nilai dari variabel lingkungan bernama DATABASE_URL menggunakan tanda dolar dan kurung kurawal.",'
);

replacer(
  'instruction:\n            "Tuliskan deklarasi restart policy `restart: unless-stopped`.",',
  'instruction:\n            "Atur kebijakan mulai ulang sehingga container akan selalu direstart saat crash, kecuali jika dihentikan manual oleh admin.",'
);

replacer(
  'instruction:\n            "Tuliskan nama image redis `image: redis:alpine`.",',
  'instruction:\n            "Konfigurasikan layanan cache agar memakai image redis dengan tag alpine.",'
);

replacer(
  'instruction:\n            "Tuliskan perintah docker compose down untuk menghentikan stack.",',
  'instruction:\n            "Jalankan sub-perintah yang bertugas menghentikan serta menghapus kontainer dan jaringan dari susunan compose.",'
);

replacer(
  'instruction:\n            "Tulis perintah git clone `git clone https://github.com/user/app.git`.",',
  'instruction:\n            "Unduh salinan repository dari alamat https://github.com/user/app.git ke server VPS.",'
);

replacer(
  'instruction:\n            "Tuliskan pengarahan Nginx `proxy_pass http://127.0.0.1:3000;`.",',
  'instruction:\n            "Instruksikan Nginx agar meneruskan setiap permintaan ke alamat loopback lokal di port 3000.",'
);

replacer(
  'instruction:\n            "Tuliskan perintah reload Nginx `sudo systemctl reload nginx`.",',
  'instruction:\n            "Muat ulang konfigurasi service web server secara graceful menggunakan systemctl tanpa memutus koneksi aktif.",'
);

replacer(
  'instruction:\n            "Tuliskan pemicu event `on: [push, pull_request]`.",',
  'instruction:\n            "Konfigurasikan agar workflow otomatis berjalan apabila terdapat dorongan kode baru (push) maupun usulan perubahan (pull_request).",'
);

replacer(
  'instruction:\n            "Tuliskan langkah eksekusi tes `- run: npm test`.",',
  'instruction:\n            "Tambahkan satu step khusus yang menjalankan skrip pengujian bawaan Node Package Manager.",'
);

replacer(
  'instruction:\n            "Tuliskan pengecekan branch main `if: github.ref == \\\'refs/heads/main\\\'`.",',
  'instruction:\n            "Tambahkan kondisi kondisional agar langkah ini hanya tereksekusi bila branch yang merujuk adalah refs/heads/main.",'
);

replacer(
  'instruction:\n            "Tuliskan interpolasi secret `${{ secrets.DEPLOY_KEY }}`.",',
  'instruction:\n            "Panggil variabel rahasia bernama DEPLOY_KEY dari vault repositori menggunakan sintaks injeksi variabel ganda bawaan GitHub.",'
);

replacer(
  'instruction:\n            "Tulis perintah docker logs untuk melihat 100 baris terakhir `docker logs --tail 100 app`.",',
  'instruction:\n            "Tampilkan cuplikan rekaman riwayat akhir dari kontainer app, terbatas hanya pada 100 baris ke belakang.",'
);

replacer(
  'instruction:\n            "Tuliskan inisialisasi Sentry `Sentry.init({ dsn: \\\'my-dsn\\\' });`.",',
  'instruction:\n            "Aktifkan pelacakan error dengan menyuplai konfigurasi objek yang memiliki properti dsn dengan nilai literal \'my-dsn\'.",'
);


// Complex replacements that change language to text and change starterCode

// deploy-3-3
file = file.replace(
  'instruction:\n            "Tuliskan komentar `// Use Docker Secrets for production credentials`.",\n          starterCode: "",\n          language: "js",\n          tests: [\n            {\n              pattern: "//\\\\s*Use\\\\s+Docker\\\\s+Secrets\\\\s+for\\\\s+production\\\\s+credentials",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Use Docker Secrets for production credentials",',
  'instruction:\n            "Konfigurasi secrets di compose untuk password database yang mengarah ke file lokal ./db_password.txt.",\n          starterCode: "secrets:\\n  db_password:\\n    # Tulis properti konfigurasi file di sini\\n",\n          language: "text",\n          tests: [\n            {\n              pattern: "file:\\\\s*\\\\./db_password\\\\.txt",\n              message: "Gunakan properti file menunjuk ke ./db_password.txt",\n            },\n          ],\n          solution: "file: ./db_password.txt",'
);

// deploy-4-4
file = file.replace(
  'instruction:\n            "Tuliskan komentar `// Set A record DNS to point domain to VPS IP address`.",\n          starterCode: "",\n          language: "js",\n          tests: [\n            {\n              pattern: "//\\\\s*Set\\\\s+A\\\\s+record\\\\s+DNS\\\\s+to\\\\s+point\\\\s+domain\\\\s+to\\\\s+VPS\\\\s+IP\\\\s+address",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Set A record DNS to point domain to VPS IP address",',
  'instruction:\n            "Masukkan tipe DNS record yang memetakan nama domain ke alamat IPv4 server (jawab dengan 1 huruf kapital).",\n          starterCode: "# Record Type: \\n",\n          language: "text",\n          tests: [\n            {\n              pattern: "^A$",\n              message: "Gunakan tipe A",\n            },\n          ],\n          solution: "A",'
);

// deploy-5-1
file = file.replace(
  'instruction:\n            "Tuliskan komentar `// PaaS automates infrastructure management for small teams`.",\n          starterCode: "",\n          language: "js",\n          tests: [\n            {\n              pattern: "//\\\\s*PaaS\\\\s+automates\\\\s+infrastructure\\\\s+management\\\\s+for\\\\s+small\\\\s+teams",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// PaaS automates infrastructure management for small teams",',
  'instruction:\n            "Sebutkan model layanan cloud di mana penyedia mengatur OS dan runtime untuk Anda (seperti Vercel atau Railway, jawab singkat dalam 4 huruf).",\n          starterCode: "# Model: \\n",\n          language: "text",\n          tests: [\n            {\n              pattern: "^PaaS$",\n              message: "Singkatan dari Platform as a Service",\n            },\n          ],\n          solution: "PaaS",'
);

// deploy-5-6
file = file.replace(
  'instruction:\n            "Tuliskan komentar `// Preview deployments generate unique staging URLs per PR`.",\n          starterCode: "",\n          language: "js",\n          tests: [\n            {\n              pattern: "//\\\\s*Preview\\\\s+deployments\\\\s+generate\\\\s+unique\\\\s+staging\\\\s+URLs\\\\s+per\\\\s+PR",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Preview deployments generate unique staging URLs per PR",',
  'instruction:\n            "Apa sebutan fitur CI/CD yang meng-hosting secara temporer setiap PR ke URL unik sebelum di-merge? Jawab dengan `Preview Deployment`.",\n          starterCode: "# Fitur: \\n",\n          language: "text",\n          tests: [\n            {\n              pattern: "^Preview Deployment$",\n              message: "Jawab dengan Preview Deployment",\n            },\n          ],\n          solution: "Preview Deployment",'
);

// deploy-6-2
file = file.replace(
  'instruction:\n            "Tuliskan komentar `// Monitor HTTP /health endpoint with UptimeRobot`.",\n          starterCode: "",\n          language: "js",\n          tests: [\n            {\n              pattern: "//\\\\s*Monitor\\\\s+HTTP\\\\s+/health\\\\s+endpoint\\\\s+with\\\\s+UptimeRobot",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Monitor HTTP /health endpoint with UptimeRobot",',
  'instruction:\n            "Apa nama rute umum (endpoint URL) yang rutin dipanggil oleh layanan monitoring demi memvalidasi bahwa web server sedang merespons normal? Jawab dengan format `/nama`.",\n          starterCode: "# Endpoint: \\n",\n          language: "text",\n          tests: [\n            {\n              pattern: "^/health$",\n              message: "Endpoint yang umum adalah /health",\n            },\n          ],\n          solution: "/health",'
);

// deploy-6-5
file = file.replace(
  'instruction:\n            "Tuliskan komentar `// Test database restore periodically to verify backup integrity`.",\n          starterCode: "",\n          language: "js",\n          tests: [\n            {\n              pattern: "//\\\\s*Test\\\\s+database\\\\s+restore\\\\s+periodically\\\\s+to\\\\s+verify\\\\s+backup\\\\s+integrity",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Test database restore periodically to verify backup integrity",',
  'instruction:\n            "Apa alat command-line bawaan PostgreSQL yang dipakai untuk membuang keseluruhan isi tabel ke dalam bentuk file skrip? Jawab nama programnya.",\n          starterCode: "# Command: \\n",\n          language: "text",\n          tests: [\n            {\n              pattern: "^pg_dump$",\n              message: "Alat tersebut adalah pg_dump",\n            },\n          ],\n          solution: "pg_dump",'
);

// deploy-6-6
file = file.replace(
  'instruction:\n            "Tuliskan komentar `// Write blameless post-mortems to improve system resilience`.",\n          starterCode: "",\n          language: "js",\n          tests: [\n            {\n              pattern: "//\\\\s*Write\\\\s+blameless\\\\s+post-mortems\\\\s+to\\\\s+improve\\\\s+system\\\\s+resilience",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Write blameless post-mortems to improve system resilience",',
  'instruction:\n            "Apa nama aktivitas atau laporan formal yang disusun tim teknik pasca-insiden demi merefleksikan kegagalan sistem tanpa saling menuding? Jawab dengan `Post-Mortem`.",\n          starterCode: "# Aktivitas: \\n",\n          language: "text",\n          tests: [\n            {\n              pattern: "^Post-Mortem$",\n              message: "Laporan tersebut disebut Post-Mortem",\n            },\n          ],\n          solution: "Post-Mortem",'
);

fs.writeFileSync('src/data/tracks/deployment.ts', file);
console.log('Fixed deployment.ts');
