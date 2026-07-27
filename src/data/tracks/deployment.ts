import type { Track } from "@/lib/types";

export const deploymentTrack: Track = {
  slug: "deployment",
  title: "Deployment & Docker",
  description:
    "Linux, Docker, CI/CD — Docker kini hampir universal di industri.",
  hours: 35,
  recommendedPrereqs: ["node-express"],
  color: "bg-slate-600",
  icon: "🐳",
  order: 12,
  modules: [
    {
      slug: "linux-terminal",
      title: "Linux & Terminal",
      description:
        "Server hidup di Linux — terminal adalah bahasa ibumu sebagai developer.",
      topics: [
        "Navigasi: pwd, ls, cd, struktur filesystem Linux",
        "File: cat, less, cp, mv, rm, mkdir",
        "Permission: chmod, chown, sudo dijelaskan benar",
        "Pipe & redirect: |, >, >>, grep",
        "Process: ps, kill, htop",
        "SSH: masuk ke server & scp",
        "Package manager (apt) & systemd dasar",
      ],
      items: [
        {
          kind: "step",
          id: "deploy-1-1",
          title: "Navigasi Terminal Linux (pwd, ls, cd)",
          explanation:
            "Perintah `pwd` menampilkan lokasi direktori saat ini, `ls -la` menampilkan seluruh isi folder (termasuk hidden files), dan `cd` berpindah direktori.",
          example: {
            code: "pwd\nls -la /var/www",
            output: "/home/ubuntu\ntotal 24\ndrwxr-xr-x 2 root root...",
            note: "Flag -la menampilkan rincian hak akses dan berkas tersembunyi.",
          },
          instruction:
            "Tulis perintah untuk berpindah ke direktori `/var/www/html`.",
          starterCode: "# Tulis perintah cd di sini\n",
          language: "text",
          tests: [
            {
              pattern: "cd\\s+/var/www/html",
              message: "Gunakan perintah: cd /var/www/html",
            },
          ],
          solution: "cd /var/www/html",
        },
        {
          kind: "step",
          id: "deploy-1-2",
          title: "Manajemen File & Folder (cp, mv, rm, mkdir)",
          explanation:
            "Perintah `mkdir` membuat folder, `cp` menyalin, `mv` memindahkan/mengubah nama, dan `rm -rf` menghapus folder beserta isinya.",
          example: {
            code: "mkdir app && cp index.html app/ && mv app/index.html app/main.html",
            output: "$ ls -la app/\ntotal 8\ndrwxr-xr-x 2 ubuntu ubuntu 4096 Jul 27 10:02 .\n-rw-r--r-- 1 ubuntu ubuntu  128 Jul 27 10:02 main.html",
            note: "Gunakan rm -rf dengan sangat hati-hati di server produksi!",
          },
          instruction:
            "Tulis perintah untuk membuat direktori bernama `project`.",
          starterCode: "# Tulis perintah mkdir di sini\n",
          language: "text",
          tests: [
            {
              pattern: "mkdir\\s+project",
              message: "Gunakan perintah: mkdir project",
            },
          ],
          solution: "mkdir project",
        },
        {
          kind: "step",
          id: "deploy-1-3",
          title: "Hak Akses File: chmod, chown, sudo",
          explanation:
            "Di Linux, setiap file memiliki 'pemilik' dan aturan siapa saja yang boleh membaca (Read), mengubah (Write), atau menjalankannya (Execute). Gunakan `chmod` untuk mengubah izin akses ini (misalnya membuat script bisa dijalankan). Gunakan `chown` untuk memindahkan kepemilikan file ke user atau grup lain. Jika kamu butuh hak akses tertinggi layaknya administrator untuk perubahan krusial, tambahkan perintah `sudo` (Superuser DO) di awal perintahmu.",
          example: {
            code: "sudo chown -R www-data:www-data /var/www/html\nsudo chmod 755 /var/www/html",
            output: "drwxr-xr-x 2 www-data www-data 4096 Jul 27 10:00 html",
            note: "Angka 755 berarti Owner (rwx), Group (r-x), Others (r-x).",
          },
          instruction:
            "Tulis perintah chmod untuk memberikan izin `755` pada file `script.sh`.",
          starterCode: "# Tulis perintah chmod di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "chmod\\s+755\\s+script\\.sh",
              message: "Gunakan: chmod 755 script.sh",
            },
          ],
          solution: "chmod 755 script.sh",
        },
        {
          kind: "step",
          id: "deploy-1-4",
          title: "Pipe & Redirect (| , >, >>, grep)",
          explanation:
            "`|` mengoper output ke perintah berikutnya, `>` menulis ulang file, `>>` menambah ke akhir file (append), dan `grep` menyaring teks.",
          example: {
            code: "cat access.log | grep '404' > error_404.log",
            output: "Seluruh baris error 404 dari access.log disimpan ke error_404.log.",
            note: "Simbol > akan menghapus isi file lama, gunakan >> jika ingin menumpuk log.",
          },
          instruction:
            "Tulis perintah grep untuk mencari kata `ERROR` dari file `app.log`.",
          starterCode: "# Tulis perintah grep di sini\n",
          language: "text",
          tests: [
            {
              pattern: "grep\\s+['\"]ERROR['\"]\\s+app\\.log",
              message: "Gunakan: grep 'ERROR' app.log",
            },
          ],
          solution: "grep 'ERROR' app.log",
        },
        {
          kind: "step",
          id: "deploy-1-5",
          title: "Manajemen Proses (ps, kill, htop)",
          explanation:
            "Perintah `ps aux` menampilkan seluruh proses aktif, `htop` menampilkan monitor RAM/CPU interaktif, dan `kill -9 <PID>` menghentikan proses.",
          example: {
            code: "ps aux | grep node\nkill -9 1234",
            output: "Proses Node.js dengan PID 1234 dihentikan secara paksa.",
            note: "Flag -9 melempar sinyal SIGKILL untuk menghentikan proses yang macet.",
          },
          instruction:
            "Tulis perintah untuk menghentikan proses dengan PID `5678` secara paksa.",
          starterCode: "# Tulis perintah kill di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "kill\\s+-9\\s+5678",
              message: "Gunakan: kill -9 5678",
            },
          ],
          solution: "kill -9 5678",
        },
        {
          kind: "step",
          id: "deploy-1-6",
          title: "Koneksi Remote SSH & Pengiriman SCP",
          explanation:
            "Perintah `ssh user@ip` terhubung ke server remote via SSH Key, dan `scp` menyalin berkas antar komputer/server.",
          example: {
            code: "ssh -i key.pem ubuntu@203.0.113.195\nscp -i key.pem build.zip ubuntu@203.0.113.195:/var/www/",
            output: "The authenticity of host '203.0.113.195' can't be established.\nubuntu@203.0.113.195:~$\nbuild.zip                     100%  2148KB   1.2MB/s   00:01",
            note: "Simpan SSH Private Key di ~/.ssh/ id_rsa secara aman.",
          },
          instruction:
            "Tulis perintah SSH untuk masuk ke `root@192.168.1.1`.",
          starterCode: "# Tulis perintah ssh di sini\n",
          language: "text",
          tests: [
            {
              pattern: "ssh\\s+root@192\\.168\\.1\\.1",
              message: "Gunakan: ssh root@192.168.1.1",
            },
          ],
          solution: "ssh root@192.168.1.1",
        },
        {
          kind: "step",
          id: "deploy-1-7",
          title: "Package Manager apt & Controller systemd",
          explanation:
            "Gunakan `sudo apt update && sudo apt install -y nginx` untuk menginstal software di Ubuntu, dan `systemctl` untuk mengelola service background.",
          example: {
            code: "sudo systemctl status nginx\nsudo systemctl restart nginx",
            output: "\u25cf nginx.service - A high performance web server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled)\n     Active: active (running) since Mon 2026-07-27 10:05:11 UTC; 2h ago",
            note: "systemctl enable nginx memastikan Nginx otomatis berjalan saat VPS reboot.",
          },
          instruction:
            "Tulis perintah systemctl untuk memeriksa status service `nginx`.",
          starterCode: "# Tulis perintah systemctl di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "sudo\\s+systemctl\\s+status\\s+nginx",
              message: "Gunakan: sudo systemctl status nginx",
            },
          ],
          solution: "sudo systemctl status nginx",
        },
        {
          kind: "quiz",
          id: "deploy-1-kuis",
          title: "Kuis: Linux & Terminal",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Perintah Linux apa yang digunakan untuk menghentikan proses yang berjalan berdasarkan ID Proses (PID)-nya?",
              choices: ["kill", "stop", "close", "end"],
              answerIndex: 0,
              explanation: "Perintah `kill` (terutama `kill -9 <PID>`) mengirimkan sinyal penghentian ke proses sistem.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Simbol apa yang digunakan untuk mengarahkan output dari suatu perintah dan menambahkan nilainya di akhir file (append) tanpa menghapus isinya?",
              choices: [">", "|", ">>", "<"],
              answerIndex: 2,
              explanation: "Simbol `>>` digunakan untuk append, sedangkan `>` akan menghapus isi file sebelumnya.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi dari perintah pwd?",
              choices: ["Menampilkan proses berjalan", "Mengubah password user", "Menampilkan direktori saat ini", "Membuat direktori baru"],
              answerIndex: 2,
              explanation: "`pwd` singkatan dari Print Working Directory, digunakan untuk melihat lokasi folder saat ini.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Perintah apa yang digunakan untuk menyalin berkas atau file antar komputer/server secara aman?",
              choices: ["scp", "ftp", "ssh", "mv"],
              answerIndex: 0,
              explanation: "Perintah `scp` (Secure Copy) digunakan untuk menyalin berkas antar mesin melalui koneksi SSH yang terenkripsi.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Apa arti dari angka 755 pada perintah `chmod 755 script.sh`?",
              choices: ["Owner bisa apa saja, Group dan Others hanya bisa membaca", "Owner bisa apa saja, Group dan Others bisa membaca dan mengeksekusi", "Semua pengguna memiliki hak akses penuh", "Hanya root yang bisa menjalankan script tersebut"],
              answerIndex: 1,
              explanation: "Angka 7 berarti rwx (Read, Write, Execute) untuk Owner, dan 5 berarti r-x (Read, Execute) untuk Group serta Others.",
            }
          ],
        },
      ],
    },
    {
      slug: "docker",
      title: "Docker",
      description:
        "'Jalan di laptopku' bukan lagi alasan — container untuk semua environment.",
      topics: [
        "Masalah yang Docker selesaikan: image vs container",
        "docker run, ps, logs, exec, stop",
        "Dockerfile: FROM, COPY, RUN, CMD",
        "Layer & cache — Dockerfile yang build-nya cepat",
        "Multi-stage build untuk image kecil",
        "Volume & bind mount",
        "Network antar container",
        ".dockerignore & best practice keamanan dasar",
      ],
      items: [
        {
          kind: "step",
          id: "deploy-2-1",
          title: "Konsep Docker: Image vs Container",
          explanation:
            "Bayangkan Image sebagai buku resep kue — ia adalah cetak biru yang tidak bisa diubah (read-only). Sedangkan Container adalah kue nyata yang dipanggang berdasarkan resep tersebut. Kamu bisa membuat sepuluh kue (Container) dari satu buku resep (Image) yang sama. Container membungkus aplikasi beserta seluruh persyaratannya, sehingga pasti berjalan persis sama di laptopmu maupun di server produksi.",
          example: {
            code: "docker pull node:20-alpine\ndocker run -d -p 3000:3000 --name myapp myimage",
            output: "Container myapp aktif melayani port 3000.",
            note: "Container menjamin lingkungan aplikasi identik di laptop dev dan server prod.",
          },
          instruction:
            "Tuliskan perintah docker untuk mengunduh image `nginx:alpine`.",
          starterCode: "# Tulis perintah docker pull di sini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+pull\\s+nginx:alpine",
              message: "Gunakan: docker pull nginx:alpine",
            },
          ],
          solution: "docker pull nginx:alpine",
        },
        {
          kind: "step",
          id: "deploy-2-2",
          title: "Perintah Dasar Docker (ps, logs, exec, stop)",
          explanation:
            "`docker ps` melihat container aktif, `docker logs` membaca log console, `docker exec -it` masuk ke dalam container, dan `docker stop` menghentikannya.",
          example: {
            code: "docker ps\ndocker logs -f myapp\ndocker exec -it myapp sh",
            output: "Membuka terminal shell sh di dalam container myapp.",
            note: "Flag -f pada docker logs mengikuti log secara real-time.",
          },
          instruction:
            "Tulis perintah docker untuk melihat daftar container yang sedang berjalan.",
          starterCode: "# Tulis perintah melihat container di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+ps",
              message: "Gunakan perintah: docker ps",
            },
          ],
          solution: "docker ps",
        },
        {
          kind: "step",
          id: "deploy-2-3",
          title: "Menulis Dockerfile",
          explanation:
            "Dockerfile mendefinisikan instruksi pembuatan Image: `FROM` (base image), `WORKDIR` (folder kerja), `COPY` (salin file), `RUN` (eksekusi build), dan `CMD` (perintah jalankan).",
          example: {
            code:
              "FROM node:20-alpine\n" +
              "WORKDIR /app\n" +
              "COPY package*.json ./\n" +
              "RUN npm install\n" +
              "COPY . .\n" +
              'CMD ["npm", "start"]',
            output: "Dockerfile siap digunakan untuk docker build -t myapp .",
            note: "Salin package.json dan jalankan npm install sebelum COPY . . untuk memanfaatkan caching layer Docker.",
          },
          instruction:
            "Tentukan base image menggunakan NodeJS versi 20 varian alpine.",
          starterCode: "# Tulis baris FROM di sini\n",
          language: "text",
          tests: [
            {
              pattern: "FROM\\s+node:20-alpine",
              message: "Tuliskan: FROM node:20-alpine",
            },
          ],
          solution: "FROM node:20-alpine",
        },
        {
          kind: "step",
          id: "deploy-2-4",
          title: "Optimasi Docker Layer Caching",
          explanation:
            "Setiap instruksi di Dockerfile menghasilkan Layer ter-cache. Susun instruksi yang jarang berubah (seperti instalasi npm) di atas instruksi yang sering berubah (seperti source code).",
          example: {
            code: "// ✅ Bagus: COPY package.json -> RUN npm install -> COPY src code\n// ❌ Buruk: COPY src code -> RUN npm install (Cache npm terbuang tiap ngoding)",
            output: "Waktu docker build berkurang dari 3 menit menjadi 5 detik.",
            note: "Menghemat waktu CI/CD secara dramatis.",
          },
          instruction:
            "Salin file package.json beserta pasangannya ke direktori kerja saat ini menggunakan pola wildcard asterisk.",
          starterCode: "# Tulis COPY package di sini\n",
          language: "text",
          tests: [
            {
              pattern: "COPY\\s+package\\*\\.json\\s+\\./",
              message: "Gunakan: COPY package*.json ./",
            },
          ],
          solution: "COPY package*.json ./",
        },
        {
          kind: "step",
          id: "deploy-2-5",
          title: "Multi-stage Build untuk Ukuran Image Ringkas",
          explanation:
            "Multi-stage build memisahkan tahap kompilasi (builder) dan tahap runtime untuk menghasilkan ukuran image sekecil mungkin (misal dari 1GB menjadi 50MB).",
          example: {
            code:
              "FROM node:20 AS builder\nWORKDIR /app\nRUN npm run build\n\n" +
              "FROM node:20-alpine AS runner\n" +
              "COPY --from=builder /app/dist ./dist\n" +
              'CMD ["node", "dist/index.js"]',
            output: "Hanya hasil build dist yang disertakan di image akhir.",
            note: "Menghilangkan devDependencies dan compiler dari image produksi.",
          },
          instruction:
            "Pindahkan folder /app/dist yang dihasilkan dari stage bernama builder ke lokasi ./dist pada stage final.",
          starterCode: "# Tulis COPY --from di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "COPY\\s+--from=builder\\s+/app/dist\\s+\\./dist",
              message: "Gunakan: COPY --from=builder /app/dist ./dist",
            },
          ],
          solution: "COPY --from=builder /app/dist ./dist",
        },
        {
          kind: "step",
          id: "deploy-2-6",
          title: "Docker Volume & Persistence Data",
          explanation:
            "Gunakan **Volume** (`-v mydata:/var/lib/postgresql/data`) agar data database bertahan permanen meskipun container di-restart/dihapus.",
          example: {
            code: "docker run -d -v postgres_data:/var/lib/postgresql/data postgres:16",
            output: "Data database tersimpan aman di luar container di host volume.",
            note: "Tanpa Volume, data di dalam container akan hilang saat container dihapus.",
          },
          instruction:
            "Tuliskan perintah docker run dengan volume `-v db_data:/var/lib/mysql`.",
          starterCode: "# Tulis perintah dengan volume di sini\n",
          language: "text",
          tests: [
            {
              pattern: "-v\\s+db_data:/var/lib/mysql",
              message: "Gunakan sintaks: -v db_data:/var/lib/mysql",
            },
          ],
          solution: "docker run -d -v db_data:/var/lib/mysql mysql",
        },
        {
          kind: "step",
          id: "deploy-2-7",
          title: "Docker Network & .dockerignore",
          explanation:
            "Buat `.dockerignore` untuk mencegah folder `node_modules` dan file `.env` lokal ikut ter-copy ke dalam Docker image.",
          example: {
            code: "# .dockerignore\nnode_modules\n.env\n.git",
            output: "Ukuran konteks build menjadi sangat ringan.",
            note: "Perlakuan .dockerignore persis seperti file .gitignore.",
          },
          instruction:
            "Kecualikan direktori dependensi Node.js agar tidak disertakan ke dalam Docker image saat proses build berlangsung.",
          starterCode: "# Tulis abaikan dependensi folder di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "node_modules",
              message: "Tuliskan: node_modules",
            },
          ],
          solution: "node_modules",
        },
        {
          kind: "step",
          id: "deploy-2-8",
          title: "Best Practice Keamanan Docker: Non-root User",
          explanation:
            "Secara default container berjalan sebagai `root`. Buat user biasa non-root di Dockerfile demi keamanan server host.",
          example: {
            code: "USER appuser",
            output: "Aplikasi dalam container dieksekusi oleh user 'node' non-privileged.",
            note: "Mencegah serangan pembobolan root host dari dalam container.",
          },
          instruction:
            "Alihkan identitas pelaksana perintah selanjutnya agar dijalankan sebagai pengguna node untuk alasan keamanan.",
          starterCode: "# Tulis USER di sini\n",
          language: "text",
          tests: [
            {
              pattern: "USER\\s+node",
              message: "Tuliskan: USER node",
            },
          ],
          solution: "USER node",
        },
        {
          kind: "quiz",
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
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Mengapa disarankan untuk menggunakan perintah `USER` untuk beralih ke pengguna non-root pada akhir Dockerfile?",
              choices: ["Agar performa kontainer menjadi lebih cepat", "Mencegah potensi serangan pembobolan host jika kontainer berhasil diretas", "Menghemat penggunaan RAM saat berjalan", "Agar file log tidak memakan disk"],
              answerIndex: 1,
              explanation: "Menjalankan aplikasi sebagai pengguna non-root dalam kontainer membatasi dampak yang bisa terjadi jika penyerang berhasil mengeksploitasi celah keamanan aplikasi.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Bagaimana cara untuk memastikan file rahasia lokal seperti `.env` tidak ikut terbawa ke dalam Image saat menjalankan perintah `docker build`?",
              choices: ["Menghapus file tersebut sebelum build", "Menggunakan file .gitignore", "Menambahkan nama file ke dalam .dockerignore", "Mengenkripsi file tersebut"],
              answerIndex: 2,
              explanation: "Berkas yang dicantumkan dalam `.dockerignore` tidak akan disalin oleh instruksi COPY dalam Dockerfile, sehingga mencegah rahasia bocor ke Image.",
            }
          ],
        },
      ],
    },
    {
      slug: "compose-env",
      title: "Docker Compose & Environment",
      description:
        "Menjalankan app + database + redis dengan satu perintah.",
      topics: [
        "compose.yaml: service, port, volume, depends_on",
        "Environment variable & file .env di compose",
        "Secrets: kenapa .env tidak boleh di-commit",
        "Healthcheck & restart policy",
        "Setup development lengkap: app + postgres + redis",
        "Perbedaan setup dev vs production",
      ],
      items: [
        {
          kind: "step",
          id: "deploy-3-1",
          title: "Struktur compose.yaml (services, ports, volumes)",
          explanation:
            "File `compose.yaml` mendefinisikan multi-container environment yang dapat dijalankan bersamaan dengan perintah `docker compose up -d`.",
          example: {
            code:
              "services:\n" +
              "  web:\n" +
              "    build: .\n" +
              "    ports:\n" +
              "      - '3000:3000'\n" +
              "  db:\n" +
              "    image: postgres:16\n" +
              "    environment:\n" +
              "      POSTGRES_PASSWORD: secret",
            output: "[+] Running 3/3\n \u2714 Network app_default     Created\n \u2714 Container app-db-1     Started\n \u2714 Container app-web-1    Started",
            note: "Perintah docker compose up -d menjalankan layanan di background.",
          },
          instruction:
            "Tulis perintah docker compose untuk menjalankan layanan di background.",
          starterCode: "# Tulis perintah docker compose di sini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+compose\\s+up\\s+-d",
              message: "Gunakan: docker compose up -d",
            },
          ],
          solution: "docker compose up -d",
        },
        {
          kind: "step",
          id: "deploy-3-2",
          title: "Variabel Lingkungan di Compose (.env)",
          explanation:
            "Docker Compose otomatis membaca variabel dari file `.env` lokal untuk disuntikkan ke dalam properti `environment:`.",
          example: {
            code:
              "services:\n" +
              "  api:\n" +
              "    environment:\n" +
              "      - DATABASE_URL=${DATABASE_URL}",
            output: "Kredensial database terbaca aman dari file .env.",
            note: "Jangan sertakan file .env di dalam Git repository!",
          },
          instruction:
            "Suntikkan nilai dari variabel lingkungan bernama DATABASE_URL menggunakan tanda dolar dan kurung kurawal.",
          starterCode: "# Tulis interpolasi env variabel di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$\\{DATABASE_URL\\}",
              message: "Tuliskan: ${DATABASE_URL}",
            },
          ],
          solution: "${DATABASE_URL}",
        },
        {
          kind: "step",
          id: "deploy-3-3",
          title: "Pengamanan Rahasia (Docker Secrets)",
          explanation:
            "Di lingkungan produksi, gunakan Docker Secrets atau Vault daripada menyebar file `.env` biasa di server.",
          example: {
            code: "secrets:\n  db_password:\n    file: ./db_password.txt",
            output: "Password disuntikkan secara aman ke memori container.",
            note: "Mencegah password bocor dari log inspeksi container.",
          },
          instruction:
            "Konfigurasi secrets di compose untuk password database yang mengarah ke file lokal ./db_password.txt.",
          starterCode: "secrets:\n  db_password:\n    # Tulis properti konfigurasi file di sini\n",
          language: "text",
          tests: [
            {
              pattern: "file:\\s*\\./db_password\\.txt",
              message: "Gunakan properti file menunjuk ke ./db_password.txt",
            },
          ],
          solution: "file: ./db_password.txt",
        },
        {
          kind: "step",
          id: "deploy-3-4",
          title: "Healthcheck & Restart Policy",
          explanation:
            "Atur `restart: unless-stopped` agar container otomatis di-restart oleh Docker jika mengalami crash.",
          example: {
            code:
              "services:\n" +
              "  app:\n" +
              "    restart: unless-stopped\n" +
              "    healthcheck:\n" +
              "      test: ['CMD', 'curl', '-f', 'http://localhost:3000/health']",
            output: "Container otomatis bangkit kembali saat terjadi failure.",
            note: "depends_on dengan condition: service_healthy memastikan DB siap dulu sebelum app berjalan.",
          },
          instruction:
            "Atur kebijakan mulai ulang sehingga container akan selalu direstart saat crash, kecuali jika dihentikan manual oleh admin.",
          starterCode: "# Tulis restart policy di sini\n",
          language: "text",
          tests: [
            {
              pattern: "restart:\\s*unless-stopped",
              message: "Tuliskan: restart: unless-stopped",
            },
          ],
          solution: "restart: unless-stopped",
        },
        {
          kind: "step",
          id: "deploy-3-5",
          title: "Setup Stack Lengkap (App + Postgres + Redis)",
          explanation:
            "Gabungkan 3 layanan utama (Aplikasi Web, Database PostgreSQL, dan Redis Cache) di dalam 1 file `compose.yaml`.",
          example: {
            code:
              "services:\n" +
              "  web: { build: . }\n" +
              "  postgres: { image: 'postgres:16' }\n" +
              "  redis: { image: 'redis:alpine' }",
            output: "Lingkungan aplikasi backend utuh siap digunakan untuk pengembangan.",
            note: "Memasang stack lokal lengkap hanya butuh 1 perintah docker compose up.",
          },
          instruction:
            "Konfigurasikan layanan cache agar memakai image redis dengan tag alpine.",
          starterCode: "# Tulis image redis di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "image:\\s*redis:alpine",
              message: "Tuliskan: image: redis:alpine",
            },
          ],
          solution: "image: redis:alpine",
        },
        {
          kind: "step",
          id: "deploy-3-6",
          title: "Perbedaan Setup Compose Dev vs Production",
          explanation:
            "Di Dev: sertakan bind mount (`./:/app`) untuk hot reloading. Di Production: gunakan image statis ter-build tanpa bind mount kode.",
          example: {
            code: "docker compose -f compose.yaml -f compose.prod.yaml up -d",
            output: "Menggabungkan konfigurasi dasar dengan override produksi.",
            note: "File compose.override.yaml otomatis dibaca di lingkungan lokal.",
          },
          instruction:
            "Jalankan sub-perintah yang bertugas menghentikan serta menghapus kontainer dan jaringan dari susunan compose.",
          starterCode: "# Tulis penghentian stack di sini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+compose\\s+down",
              message: "Gunakan perintah: docker compose down",
            },
          ],
          solution: "docker compose down",
        },
        {
          kind: "quiz",
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
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Opsi properti apa yang dapat kita gunakan pada `compose.yaml` untuk memastikan kontainer otomatis menyala kembali jika mengalami crash?",
              choices: ["auto_heal: true", "restart: unless-stopped", "reboot: always", "healthcheck: auto"],
              answerIndex: 1,
              explanation: "Kebijakan `restart: unless-stopped` membuat Docker daemon akan senantiasa menyalakan ulang kontainer saat terjadi kegagalan, kecuali kita secara manual yang menghentikannya.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Bagaimana penulisan yang benar untuk menyuntikkan variabel environment `API_KEY` ke dalam layanan pada compose.yaml dari file `.env`?",
              choices: ["${API_KEY}", "$env:API_KEY", "%API_KEY%", "{{ API_KEY }}"],
              answerIndex: 0,
              explanation: "Docker Compose menggunakan sintaks interpolasi Shell standar yaitu `${NAMA_VARIABEL}` untuk membaca nilainya dari file `.env`.",
            }
          ],
        },
      ],
    },
    {
      slug: "deploy-vps",
      title: "Deploy ke VPS",
      description:
        "Dari kosong sampai HTTPS: pengalaman deploy yang sesungguhnya.",
      topics: [
        "Memilih & menyiapkan VPS (firewall, user non-root)",
        "Deploy container ke server",
        "Nginx sebagai reverse proxy",
        "Domain & DNS: A record sampai propagasi",
        "HTTPS gratis dengan Let's Encrypt (certbot)",
        "Zero-downtime dasar & rollback manual",
      ],
      items: [
        {
          kind: "step",
          id: "deploy-4-1",
          title: "Setup Awal VPS & Firewall (ufw)",
          explanation:
            "Setelah menyewa VPS (DigitalOcean / Biznet), buat user sudo baru dan kunci port menggunakan `ufw` (Uncomplicated Firewall).",
          example: {
            code: "sudo ufw allow 22/tcp\nsudo ufw allow 80/tcp\nsudo ufw allow 443/tcp\nsudo ufw enable",
            output: "Firewall mengunci seluruh port kecuali SSH (22), HTTP (80), dan HTTPS (443).",
            note: "Pastikan port SSH 22 diizinkan SEBELUM mengaktifkan ufw agar tidak terkunci keluar!",
          },
          instruction:
            "Tulis perintah ufw untuk mengizinkan port `80/tcp`.",
          starterCode: "# Tulis perintah ufw allow di sini\n",
          language: "text",
          tests: [
            {
              pattern: "sudo\\s+ufw\\s+allow\\s+80/tcp",
              message: "Gunakan: sudo ufw allow 80/tcp",
            },
          ],
          solution: "sudo ufw allow 80/tcp",
        },
        {
          kind: "step",
          id: "deploy-4-2",
          title: "Deploy Container ke VPS",
          explanation:
            "Clone repository ke VPS atau tarik image dari Docker Hub, lalu jalankan `docker compose up -d` di server produksi.",
          example: {
            code: "git clone https://github.com/user/app.git\ncd app\ndocker compose up -d",
            output: "1e8f3a92c1d4   app:latest   \"node server.js\"   Up 2 minutes   0.0.0.0:3000->3000/tcp   app-web-1",
            note: "Pastikan file .env produksi sudah terisi lengkap di VPS.",
          },
          instruction:
            "Unduh salinan repository dari alamat https://github.com/user/app.git ke server VPS.",
          starterCode: "# Tulis perintah git clone di sini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+clone\\s+https://github\\.com/user/app\\.git",
              message: "Gunakan perintah git clone",
            },
          ],
          solution: "git clone https://github.com/user/app.git",
        },
        {
          kind: "step",
          id: "deploy-4-3",
          title: "Nginx sebagai Reverse Proxy",
          explanation:
            "Nginx menerima trafik publik di port 80/443 dan memutarnya (`proxy_pass`) ke port lokal container (misal `http://127.0.0.1:3000`).",
          example: {
            code:
              "server {\n" +
              "  server_name domainku.com;\n" +
              "  location / {\n" +
              "    proxy_pass http://127.0.0.1:3000;\n" +
              "  }\n" +
              "}",
            output: "Forwarding request to internal upstream 127.0.0.1:3000",
            note: "Nginx menangani SSL termination dan pencatatan access log.",
          },
          instruction:
            "Instruksikan Nginx agar meneruskan setiap permintaan ke alamat loopback lokal di port 3000.",
          starterCode: "# Tulis proxy_pass di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "proxy_pass\\s+http://127\\.0\\.0\\.1:3000\\s*;?",
              message: "Tuliskan: proxy_pass http://127.0.0.1:3000;",
            },
          ],
          solution: "proxy_pass http://127.0.0.1:3000;",
        },
        {
          kind: "step",
          id: "deploy-4-4",
          title: "Pengaturan Domain & DNS (A Record)",
          explanation:
            "Di DNS Provider (Cloudflare / Namecheap), arahkan **A Record** nama domain ke IP Publik VPS milikmu.",
          example: {
            code: "mysite.id. IN A 198.51.100.45",
            output: "Domain mysite.id mengarah ke IP VPS 198.51.100.45.",
            note: "Propagasi DNS membutuhkan waktu antara beberapa menit hingga 24 jam.",
          },
          instruction:
            "Tuliskan baris konfigurasi zona DNS record bertipe A yang memetakan domain example.com ke alamat IP server 203.0.113.195.",
          starterCode: "# Tulis DNS A record di sini\n",
          language: "text",
          tests: [
            {
              pattern: "example\\.com\\.\\s+IN\\s+A\\s+203\\.0\\.113\\.195",
              message: "Gunakan: example.com. IN A 203.0.113.195",
            },
          ],
          solution: "example.com. IN A 203.0.113.195",
        },
        {
          kind: "step",
          id: "deploy-4-5",
          title: "HTTPS Gratis dengan Let's Encrypt (Certbot)",
          explanation:
            "Gunakan `certbot` untuk mendapatkan dan memasang sertifikat SSL gratis secara otomatis pada server Nginx.",
          example: {
            code: "sudo certbot --nginx -d domainku.com",
            output: "Certbot mengonfigurasi sertifikat SSL dan mengalihkan HTTP ke HTTPS.",
            note: "Certbot otomatis memperbarui sertifikat setiap 90 hari.",
          },
          instruction:
            "Tulis perintah certbot untuk domain `myapp.com`.",
          starterCode: "# Tulis perintah certbot di sini\n",
          language: "text",
          tests: [
            {
              pattern: "sudo\\s+certbot\\s+--nginx\\s+-d\\s+myapp\\.com",
              message: "Gunakan: sudo certbot --nginx -d myapp.com",
            },
          ],
          solution: "sudo certbot --nginx -d myapp.com",
        },
        {
          kind: "step",
          id: "deploy-4-6",
          title: "Zero-Downtime Deployment & Rollback Manual",
          explanation:
            "Jalankan container versi baru di port terpisah, periksa statusnya, lalu alihkan pointer Nginx agar pengguna tidak mengalami layar blank saat deploy.",
          example: {
            code: "// Run App v2 -> Verify Health -> Reload Nginx -> Stop App v1",
            output: "Pembaruan versi rilis tanpa ada downtime bagi pengguna.",
            note: "Jika versi v2 crash, langsung alihkan Nginx kembali ke v1 (Rollback).",
          },
          instruction:
            "Muat ulang konfigurasi service web server secara graceful menggunakan systemctl tanpa memutus koneksi aktif.",
          starterCode: "# Tulis reload Nginx di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "sudo\\s+systemctl\\s+reload\\s+nginx",
              message: "Gunakan: sudo systemctl reload nginx",
            },
          ],
          solution: "sudo systemctl reload nginx",
        },
        {
          kind: "quiz",
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
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa jenis DNS record yang perlu ditambahkan agar suatu nama domain dapat diarahkan ke alamat IP Publik dari sebuah VPS?",
              choices: ["CNAME Record", "MX Record", "TXT Record", "A Record"],
              answerIndex: 3,
              explanation: "A Record (Address Record) memetakan nama domain ke alamat IPv4 server (VPS) yang dituju.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Dalam konsep Zero-Downtime Deployment sederhana menggunakan Nginx, apa perintah yang dijalankan setelah memutar lalu lintas ke versi baru?",
              choices: ["sudo systemctl stop nginx", "sudo systemctl restart nginx", "sudo systemctl reload nginx", "sudo systemctl start nginx"],
              answerIndex: 2,
              explanation: "Perintah `reload` memuat ulang konfigurasi tanpa mematikan proses utama Nginx, sehingga koneksi aktif pengguna tidak terputus (graceful).",
            }
          ],
        },
      ],
    },
    {
      slug: "platform-cicd",
      title: "Platform Deploy & CI/CD",
      description:
        "Otomatisasi: push ke main → test jalan → production terupdate.",
      topics: [
        "PaaS: Vercel/Railway — kapan lebih tepat dari VPS",
        "GitHub Actions: workflow, job, step",
        "CI: lint + test otomatis di setiap PR",
        "CD: deploy otomatis setelah merge",
        "Environment & secret di GitHub Actions",
        "Preview deployment untuk review",
      ],
      items: [
        {
          kind: "step",
          id: "deploy-5-1",
          title: "PaaS (Vercel/Railway) vs IaaS (VPS)",
          explanation:
            "PaaS (Platform as a Service) mengotomatiskan infrastruktur sehingga developer fokus ke kode. VPS (IaaS) memberikan kontrol penuh namun butuh perawatan manual.",
          example: {
            code: "npx vercel --prod --yes",
            output: "Production deployment live at https://app.vercel.app",
            note: "PaaS sangat menghemat waktu untuk tim developer berukuran kecil.",
          },
          instruction:
            "Tuliskan perintah CLI Vercel untuk melakukan publikasi aplikasi langsung ke lingkungan produksi (--prod).",
          starterCode: "# Tulis perintah vercel di sini\n",
          language: "text",
          tests: [
            {
              pattern: "vercel\\s+--prod",
              message: "Gunakan: vercel --prod",
            },
          ],
          solution: "vercel --prod",
        },
        {
          kind: "step",
          id: "deploy-5-2",
          title: "Struktur Workflow GitHub Actions (.github/workflows/)",
          explanation:
            "File `.github/workflows/ci.yml` mendefinisikan skrip otomatisasi yang dipicu oleh event `on: [push, pull_request]`.",
          example: {
            code:
              "name: CI Pipeline\n" +
              "on: [push]\n" +
              "jobs:\n" +
              "  test:\n" +
              "    runs-on: ubuntu-latest\n" +
              "    steps:\n" +
              "      - uses: actions/checkout@v4\n" +
              "      - run: npm install && npm test",
            output: "GitHub Actions otomatis mengeksekusi tes di setiap push kode.",
            note: "Workflow gagal (merah) menolak penggabungan Pull Request.",
          },
          instruction:
            "Konfigurasikan agar workflow otomatis berjalan apabila terdapat dorongan kode baru (push) maupun usulan perubahan (pull_request).",
          starterCode: "# Tulis on event di sini\n",
          language: "text",
          tests: [
            {
              pattern: "on:\\s*\\[\\s*push\\s*,\\s*pull_request\\s*\\]",
              message: "Tuliskan: on: [push, pull_request]",
            },
          ],
          solution: "on: [push, pull_request]",
        },
        {
          kind: "step",
          id: "deploy-5-3",
          title: "Continuous Integration (CI): Automated Test & Lint",
          explanation:
            "Alur CI memastikan tidak ada kode rusak yang bisa masuk ke main branch dengan menjalankan Linter dan Test Suite otomatis.",
          example: {
            code: "- run: npx eslint .\n- run: npm test",
            output: "Setiap PR diverifikasi kualitas kodenya secara otomatis.",
            note: "Mencegah 'human error' lupa me-run tes lokal sebelum PR.",
          },
          instruction:
            "Tambahkan satu step khusus yang menjalankan skrip pengujian bawaan Node Package Manager.",
          starterCode: "# Tulis step npm test di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "-\\s+run:\\s+npm\\s+test",
              message: "Tuliskan: - run: npm test",
            },
          ],
          solution: "- run: npm test",
        },
        {
          kind: "step",
          id: "deploy-5-4",
          title: "Continuous Deployment (CD): Deploy Otomatis",
          explanation:
            "Alur CD secara otomatis mempublikasikan image ke Docker Hub dan me-restart container di VPS saat PR di-merge ke branch `main`.",
          example: {
            code: "if: github.ref == 'refs/heads/main'\nsteps:\n  - run: ssh user@vps 'cd app && git pull && docker compose up -d'",
            output: "Kode terbaru langsung tayang di server produksi.",
            note: "Menghapus proses deploy manual yang berisiko.",
          },
          instruction:
            "Tambahkan blok kondisional (if) agar job deployment ini hanya dijalankan apabila referensi cabang merujuk tepat ke branch utama.",
          starterCode: "# Tulis if branch main di sini\n",
          language: "text",
          tests: [
            {
              pattern: "if:\\s*github\\.ref\\s*==\\s*['\"]refs/heads/main['\"]",
              message: "Gunakan: if: github.ref == 'refs/heads/main'",
            },
          ],
          solution: "if: github.ref == 'refs/heads/main'",
        },
        {
          kind: "step",
          id: "deploy-5-5",
          title: "Secrets di GitHub Actions (secrets.VAR_NAME)",
          explanation:
            "Simpan SSH Key dan Token di **GitHub Repository Secrets** dan akses di workflow via `${{ secrets.SSH_PRIVATE_KEY }}`.",
          example: {
            code: "env:\n  SSH_KEY: ${{ secrets.SSH_PRIVATE_KEY }}",
            output: "Kredensial rahasia tersimpan aman dan tidak terlihat di log rilis.",
            note: "Jangan sekali-kali menuliskan password/key polos di file YAML workflow!",
          },
          instruction:
            "Panggil variabel rahasia bernama DEPLOY_KEY dari vault repositori menggunakan sintaks injeksi variabel ganda bawaan GitHub.",
          starterCode: "# Tulis secret interpolasi di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$\\{\\{\\s*secrets\\.DEPLOY_KEY\\s*\\}\\}",
              message: "Tuliskan: ${{ secrets.DEPLOY_KEY }}",
            },
          ],
          solution: "${{ secrets.DEPLOY_KEY }}",
        },
        {
          kind: "step",
          id: "deploy-5-6",
          title: "Preview Deployment untuk Pull Request",
          explanation:
            "Platform seperti Vercel atau Railway membuat URL Prinjau (Preview Deployment) khusus untuk setiap Pull Request yang dibuka.",
          example: {
            code: "// PR #42 -> https://app-git-fork-feature-user.vercel.app",
            output: "Ready! Deployment available at https://app-pr-42.vercel.app",
            note: "Mempermudah review visual oleh tim QA dan Designer.",
          },
          instruction:
            "Apa sebutan fitur CI/CD yang meng-hosting secara temporer setiap PR ke sebuah URL unik sebelum digabungkan? (Terdiri dari dua kata bahasa Inggris berawalan P dan D).",
          starterCode: "# Fitur: \n",
          language: "text",
          tests: [
            {
              pattern: "^Preview Deployment$",
              message: "Jawab dengan Preview Deployment",
            },
          ],
          solution: "Preview Deployment",
        },
        {
          kind: "quiz",
          id: "deploy-5-kuis",
          title: "Kuis: Platform Deploy & CI/CD",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Di folder mana file skrip otomatisasi GitHub Actions wajib diletakkan di dalam repository?",
              choices: [".github/workflows/", ".ci/actions/", ".github/scripts/", "config/ci/"],
              answerIndex: 0,
              explanation: "GitHub Actions secara otomatis mencari file konfigurasi workflow YAML di folder `.github/workflows/`.",
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
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa tujuan utama dari lingkungan Preview Deployment yang sering diotomatisasi oleh layanan PaaS seperti Vercel?",
              choices: ["Menyimpan cadangan database produksi", "Menghasilkan URL unik untuk meninjau perubahan dari suatu Pull Request sebelum di-merge", "Menjalankan uji beban (stress testing)", "Menyembunyikan kode sumber dari pengguna publik"],
              answerIndex: 1,
              explanation: "Preview Deployment memungkinkan tim untuk melihat dan menguji coba fitur baru pada aplikasi web yang hidup dan nyata secara temporer per Pull Request.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Pada workflow GitHub Actions, apa sintaks yang tepat untuk membatasi sebuah step agar hanya dieksekusi ketika workflow berjalan di branch 'main'?",
              choices: ["if: github.ref == 'refs/heads/main'", "when: branch is main", "only_on: main", "condition: master"],
              answerIndex: 0,
              explanation: "Kita dapat menggunakan klausa kondisional `if:` dipadukan dengan konteks ekspresi `github.ref` untuk menentukan di cabang mana langkah (deploy) tersebut berlaku.",
            }
          ],
        },
      ],
    },
    {
      slug: "monitoring",
      title: "Monitoring & Log",
      description:
        "Tahu aplikasimu sakit sebelum user yang memberi tahu.",
      topics: [
        "Log terstruktur & di mana membacanya",
        "Uptime monitoring & alerting sederhana",
        "Error tracking dengan Sentry",
        "Metrik dasar: CPU, memori, disk, response time",
        "Backup database otomatis & uji restore",
        "Post-mortem sederhana saat insiden",
      ],
      items: [
        {
          kind: "step",
          id: "deploy-6-1",
          title: "Log Terstruktur & Membaca Log Produksi",
          explanation:
            "Baca log container produksi dengan `docker logs --tail 100 -f <container_name>`.",
          example: {
            code: "docker logs --tail 50 -f myapp_web",
            output: "Menampilkan 50 baris log terakhir dan terus mengikuti baris baru.",
            note: "Gunakan format JSON pada logger aplikasi untuk mempermudah agregasi.",
          },
          instruction:
            "Tampilkan cuplikan rekaman riwayat akhir dari kontainer app, terbatas hanya pada 100 baris ke belakang.",
          starterCode: "# Tulis perintah docker logs di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+logs\\s+--tail\\s+100\\s+app",
              message: "Gunakan: docker logs --tail 100 app",
            },
          ],
          solution: "docker logs --tail 100 app",
        },
        {
          kind: "step",
          id: "deploy-6-2",
          title: "Uptime Monitoring & Alerting (UptimeRobot)",
          explanation:
            "Gunakan layanan Uptime Monitoring gratis (seperti UptimeRobot / Better Stack) yang mengecek kesehatan endpoint `/health` setiap 5 menit dan memberi notifikasi Telegram/Email jika down.",
          example: {
            code: "GET https://domainku.com/health -> 200 OK (Healthy)",
            output: "Notifikasi otomatis dikirimkan ke HP developer jika server down.",
            note: "Mengetahui server bermasalah sebelum adanya komplain dari pelanggan.",
          },
          instruction:
            "Apa nama rute umum (endpoint URL) yang rutin dipanggil oleh layanan monitoring demi memvalidasi bahwa web server sedang merespons normal? Jawab dengan format `/nama`.",
          starterCode: "# Endpoint: \n",
          language: "text",
          tests: [
            {
              pattern: "^/health$",
              message: "Endpoint yang umum adalah /health",
            },
          ],
          solution: "/health",
        },
        {
          kind: "step",
          id: "deploy-6-3",
          title: "Error Tracking dengan Sentry",
          explanation:
            "Sentry menangkap crash unhandled exception di server dan mengelompokkannya lengkap dengan stacktrace, data user, dan browser environment.",
          example: {
            code:
              'import * as Sentry from "@sentry/node";\n' +
              'Sentry.init({ dsn: "https://examplePublicKey@o0.ingest.sentry.io/0" });',
            output: "Crash log terkirim otomatis ke dashboard Sentry.",
            note: "Sentry memangkas waktu investigasi bug produksi dari hitungan jam ke hitungan menit.",
          },
          instruction:
            "Panggil fungsi inisialisasi dari objek Sentry dan masukkan objek konfigurasi berisi key rahasia pengenal proyek yang bernilai string literal 'my-dsn'.",
          starterCode: "// Tulis Sentry.init di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Sentry\\.init\\(\\s*\\{\\s*dsn\\s*:\\s*['\"]my-dsn['\"]\\s*\\}\\s*\\)\\s*;?",
              message: "Gunakan: Sentry.init({ dsn: 'my-dsn' });",
            },
          ],
          solution: "Sentry.init({ dsn: 'my-dsn' });",
        },
        {
          kind: "step",
          id: "deploy-6-4",
          title: "Pemantauan Metrik Server (CPU, RAM, Disk)",
          explanation:
            "Pantau pemakaian kapasitas Disk (`df -h`) dan RAM (`free -m`) agar server tidak mati akibat disk penuh.",
          example: {
            code: "df -h\nfree -m",
            output: "Memeriksa sisa kapasitas harddisk dan memori RAM.",
            note: "Log file yang tidak di-rotate sering menjadi penyebab utama disk VPS penuh.",
          },
          instruction:
            "Tulis perintah Linux untuk memeriksa sisa ruang disk `df -h`.",
          starterCode: "# Tulis perintah df di sini\n",
          language: "text",
          tests: [
            {
              pattern: "df\\s+-h",
              message: "Gunakan perintah: df -h",
            },
          ],
          solution: "df -h",
        },
        {
          kind: "step",
          id: "deploy-6-5",
          title: "Otomasi Backup Database & Uji Restore",
          explanation:
            "Jadwalkan `pg_dump` harian ke S3. Ingat: Backup yang belum pernah di-uji coba proses restore-nya BUKANLAH backup yang valid!",
          example: {
            code: "0 2 * * * pg_dump -U postgres mydb | aws s3 cp - s3://mybucket/backup.sql",
            output: "Database di-backup otomatis setiap jam 2 pagi ke S3 Cloud Storage.",
            note: "Uji restore file backup secara berkala di lingkungan lokal.",
          },
          instruction:
            "Apa alat command-line bawaan PostgreSQL yang dipakai untuk membuang keseluruhan isi tabel ke dalam bentuk file skrip? Jawab nama programnya.",
          starterCode: "# Command: \n",
          language: "text",
          tests: [
            {
              pattern: "^pg_dump$",
              message: "Alat tersebut adalah pg_dump",
            },
          ],
          solution: "pg_dump",
        },
        {
          kind: "step",
          id: "deploy-6-6",
          title: "Dokumen Post-Mortem Insiden Server",
          explanation:
            "Setiap kali terjadi outage (server mati), susun dokumen Post-Mortem tanpa menyalahkan individu (blameless) untuk mencatat: Penyebab, Penanganan, dan Tindakan Pencegahan agar tidak terulang.",
          example: {
            code: "// Post-Mortem Outage 27 Juli: Penyebab (Disk Penuh Log) -> Action (Pasang Logrotate)",
            output: "Menciptakan budaya rekayasa perangkat lunak yang dewasa.",
            note: "Fokus pada perbaikan sistem dan proses otomatisasi.",
          },
          instruction:
            "Apa nama dokumen atau sesi laporan evaluasi yang dilakukan tim setelah terjadi insiden kegagalan sistem? (Sering disebut P.M, gunakan tanda hubung di tengah).",
          starterCode: "# Aktivitas: \n",
          language: "text",
          tests: [
            {
              pattern: "^Post-Mortem$",
              message: "Laporan tersebut disebut Post-Mortem",
            },
          ],
          solution: "Post-Mortem",
        },
        {
          kind: "quiz",
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
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Fungsi apa yang ditawarkan oleh layanan seperti UptimeRobot terkait kesehatan aplikasi di lingkungan produksi?",
              choices: ["Mempercepat kecepatan respons aplikasi (CDN)", "Menampilkan laporan analitik jumlah kunjungan per bulan", "Melakukan pengecekan berkala pada endpoint `/health` dan mengirimkan notifikasi saat sistem mati", "Membasmi virus dari server VPS secara otomatis"],
              answerIndex: 2,
              explanation: "Uptime monitoring memastikan server dan aplikasi kamu aktif melayani pelanggan. Jika server tidak merespons (down), tim developer langsung mendapat peringatan.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Perintah Linux dasar apa yang sering digunakan secara cepat untuk memantau sisa ruang kapasitas harddisk yang kosong (Free Disk Space)?",
              choices: ["free -m", "ps aux", "df -h", "du -sh"],
              answerIndex: 2,
              explanation: "Perintah `df -h` (Disk Free dalam format human-readable) menampilkan ringkasan ruang penyimpanan kosong dari seluruh partisi sistem file.",
            }
          ],
        },
      ],
    },
  ],
};
