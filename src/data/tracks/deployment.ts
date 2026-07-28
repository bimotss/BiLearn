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
      slug: "persiapan-linux-terminal",
      title: "Persiapan & Linux Terminal",
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
          kind: "materi",
          id: "deploy-1-m1",
          title: "Persiapan Environment, Terminal, dan Sistem Operasi Server",
          body:
            "# Pengertian: Mengapa Server Menggunakan Linux?\n\n" +
            "Hampir seluruh infrastruktur cloud modern (AWS, Google Cloud, DigitalOcean) berjalan di atas sistem operasi **Linux** (khususnya distribusi seperti Ubuntu Server atau Debian). Berbeda dengan laptop harianmu yang dilengkapi antarmuka grafis (GUI) seperti Windows atau macOS, server produksi umumnya **headless** — artinya tidak ada layar desktop, mouse, atau tombol klik.\n\n" +
            "Satu-satunya cara berkomunikasi dan mengendalikan server tersebut adalah melalui **Terminal** (Command Line Interface / CLI). Di modul ini, kamu akan mempelajari perintah-perintah navigasi, manipulasi berkas, pengoperasian proses, hak akses pengguna, serta cara masuk ke server remote melalui SSH.\n\n" +
            "---\n\n" +
            "## Mental Model: Struktur Filesystem Linux vs Windows\n\n" +
            "Di Windows, drive dipisah menjadi `C:\\`, `D:\\`, dan seterusnya. Di Linux, semua direktori bermula dari satu akar utama yang disebut **root directory (`/`)**.\n\n" +
            "```text\n" +
            "/\n" +
            "├── bin/        ← Eksekutabel perintah sistem dasar (ls, cd, cp)\n" +
            "├── etc/        ← Berkas konfigurasi sistem & service (nginx, sshd)\n" +
            "├── home/       ← Folder personal user biasa (/home/ubuntu, /home/bimo)\n" +
            "├── var/        ← Data dinamis yang sering berubah (/var/log, /var/www/html)\n" +
            "└── tmp/        ← Berkas sementara (otomatis dibersihkan saat reboot)\n" +
            "```\n\n" +
            "---\n\n" +
            "## Tabel Rujukan Perintah Utama Linux\n\n" +
            "| Kategori | Perintah | Fungsi Utama | Contoh Penggunaan |\n" +
            "|---|---|---|---|\n" +
            "| **Navigasi** | `pwd` | Menampilkan direktori kerja saat ini | `pwd` → `/var/www/html` |\n" +
            "| **Navigasi** | `ls -la` | Melihat seluruh isi folder (termasuk hidden file) | `ls -la /var/log` |\n" +
            "| **Navigasi** | `cd` | Berpindah lokasi direktori | `cd /var/www/html` |\n" +
            "| **File** | `mkdir -p` | Membuat folder baru (termasuk induknya) | `mkdir -p app/src` |\n" +
            "| **File** | `cp` / `mv` | Menyalin (`cp`) atau memindahkan/rename (`mv`) file | `mv app.js server.js` |\n" +
            "| **File** | `rm -rf` | Menghapus file/folder secara rekursif & paksa | `rm -rf dist/` |\n" +
            "| **File** | `cat` / `less` | Membaca isi berkas teks di terminal | `less /var/log/nginx/error.log` |\n" +
            "| **Akses** | `chmod` | Mengubah permission (rwx) file/folder | `chmod 755 script.sh` |\n" +
            "| **Akses** | `chown` | Mengubah pemilik (owner:group) file | `sudo chown -R www-data:www-data /var/www` |\n" +
            "| **Akses** | `sudo` | Menjalankan perintah dengan hak akses administrator (root) | `sudo systemctl restart nginx` |\n" +
            "| **Stream** | `\|` & `grep` | Mengoper output dan menyaring teks tertentu | `ps aux \| grep node` |\n" +
            "| **Stream** | `>` / `>>` | Redirect ke file: timpa (`>`) vs append (`>>`) | `cat log.txt >> all_logs.txt` |\n" +
            "| **Proses** | `ps aux` / `htop`| Memantau proses aktif & konsumsi CPU/RAM | `htop` |\n" +
            "| **Proses** | `kill -9` | Menghentikan proses berdasarkan PID | `kill -9 1234` |\n" +
            "| **Remote** | `ssh` / `scp` | Masuk ke server remote & menyalin berkas | `ssh root@203.0.113.1` |\n" +
            "| **Service** | `apt` / `systemctl`| Package manager Ubuntu & pengendali background service | `sudo systemctl status nginx` |\n\n" +
            "---\n\n" +
            "## Analogi Dunia Nyata: Sistem Operasi sebagai Gedung Perkantoran\n\n" +
            "Bayangkan Linux sebagai gedung kantor pencakar langit. Root (`/`) adalah lantai dasar. Folder `/home` adalah ruangan karyawan biasa, sedangkan `/etc` adalah ruang server kontrol. Hak akses `sudo` adalah **master key card** milik CEO — hanya boleh dipegang saat perlu mengubah struktur gedung, bukan untuk kegiatan rutin sehari-hari.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Salah memakai `>` alih-alih `>>`:** Simbol `>` akan **menghapus seluruh isi file lama** sebelum menuliskan teks baru, sedangkan `>>` menambahkan baris di bagian paling akhir. Jika kamu salah mengetik `cat log > /etc/nginx/nginx.conf`, file konfigurasi servermu akan terhapus!\n" +
            "2. **Mengabaikan peringatan `rm -rf`:** Perintah `rm -rf /` atau `rm -rf ./*` saat berada di lokasi folder yang salah tidak memiliki konfirmasi 'Recycle Bin'. Berkas terhapus permanen seketika.\n" +
            "3. **Lupa memberi izin eksekusi (`chmod +x`):** Script `.sh` yang diunduh tidak akan bisa dijalankan sebelum diberi izin execute (`chmod 755 script.sh` atau `chmod +x script.sh`).\n" +
            "4. **Menyalakan UFW sebelum membuka port SSH:** Menjalankan `sudo ufw enable` tanpa menjalankan `sudo ufw allow 22/tcp` lebih dulu akan mengunci akses remote-mu ke server selamanya!\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Dalam interview kerja untuk posisi Backend Engineer, DevOps, atau Fullstack Developer, kemampuan dasar Linux adalah syarat mutlak. Kamu sering diminta mendebug server yang crash via terminal, membaca log `nginx` atau `pm2`, mengelola hak akses folder upload, serta menyiapkan environment di VPS cloud.",
        },
        {
          kind: "step",
          id: "deploy-1-1",
          title: "Navigasi Terminal Linux (pwd, ls, cd)",
          explanation:
            "Perintah `pwd` (Print Working Directory) menampilkan lokasi direktori saat ini di filesystem Linux. Perintah `ls -la` menampilkan seluruh isi folder beserta berkas tersembunyi (diawali tanda titik `.`) dan rincian izin aksesnya. Perintah `cd` (Change Directory) digunakan untuk berpindah antar folder. Menguasai navigasi dasar ini krusial agar kamu tidak tersesat saat mengelola server produksi tanpa antarmuka visual.",
          example: {
            code: "pwd\nls -la /var/www\ncd /var/www/html",
            output:
              "/home/ubuntu\n" +
              "total 12\n" +
              "drwxr-xr-x 3 root root 4096 Jul 27 10:00 .\n" +
              "drwxr-xr-x 14 root root 4096 Jul 27 10:00 ..\n" +
              "drwxr-xr-x 2 www-data www-data 4096 Jul 27 10:00 html\n" +
              "/var/www/html",
            note: "Flag -la menampilkan rincian hak akses, pemilik, ukuran, serta berkas tersembunyi seperti .env.",
          },
          instruction:
            "Tulis perintah untuk berpindah ke direktori web server `/var/www/html`.",
          starterCode: "# Tulis perintah cd di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "cd\\s+/var/www/html/?$",
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
            "Di terminal Linux, `mkdir` membuat direktori baru (tambahkan flag `-p` untuk membuat subfolder berantai). Perintah `cp` menyalin berkas, `mv` memindahkan atau mengubah nama berkas, dan `rm` menghapus berkas. Untuk menghapus folder beserta seluruh isinya secara paksa, gunakan `rm -rf`. Selalu pastikan lokasi folder kamu sebelum menjalankan perintah hapus!",
          example: {
            code: "mkdir -p app/src\ncp index.html app/src/\nmv app/src/index.html app/src/main.html",
            output:
              "$ ls -la app/src/\n" +
              "total 8\n" +
              "drwxr-xr-x 2 ubuntu ubuntu 4096 Jul 27 10:02 .\n" +
              "-rw-r--r-- 1 ubuntu ubuntu  128 Jul 27 10:02 main.html",
            note: "Gunakan flag -p pada mkdir agar tidak error jika folder induk belum ada.",
          },
          instruction:
            "Tulis perintah untuk membuat direktori bernama `project`.",
          starterCode: "# Tulis perintah mkdir di sini\n",
          language: "text",
          tests: [
            {
              pattern: "mkdir\\s+(-p\\s+)?project/?$",
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
            "Sistem Linux memiliki model keamanan ketat berdasarkan permission. Setiap file memiliki izin Read (4), Write (2), dan Execute (1) untuk Owner, Group, dan Others. Perintah `chmod 755` memberikan akses penuh (7=4+2+1) untuk pemilik, serta akses baca & eksekusi (5=4+1) untuk grup dan publik. Perintah `chown` mengubah pemilik file, sedangkan `sudo` menjalankan perintah dengan hak superuser (root).",
          example: {
            code: "sudo chown -R www-data:www-data /var/www/html\nsudo chmod 755 script.sh",
            output:
              "-rwxr-xr-x 1 www-data www-data 1024 Jul 27 10:00 script.sh",
            note: "Angka 755 berarti Owner (rwx), Group (r-x), Others (r-x).",
          },
          instruction:
            "Tulis perintah chmod untuk memberikan izin `755` pada file `script.sh`.",
          starterCode: "# Tulis perintah chmod di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "chmod\\s+755\\s+(\\./)?script\\.sh$",
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
            "Kekuatan utama terminal Linux terletak pada kombinasi perintah. Operator pipe (`|`) mengalirkan output dari satu perintah menjadi input bagi perintah lain. Perintah `grep` menyaring baris teks yang cocok dengan kata kunci. Operator `>` mengalihkan output dan menimpa isi file tujuan, sedangkan `>>` menambahkan teks di baris paling bawah (append) tanpa menghapus isi lama.",
          example: {
            code: "cat access.log | grep '404' > error_404.log\ncat new_error.log >> error_404.log",
            output:
              "Seluruh baris bermuatan 404 tersaring dan tersimpan rapi di error_404.log.",
            note: "Ingat: > menimpa file, >> menambahkan di akhir file.",
          },
          instruction:
            "Tulis perintah grep untuk mencari teks `ERROR` pada berkas log `app.log`.",
          starterCode: "# Tulis perintah grep di sini\n",
          language: "text",
          tests: [
            {
              pattern: "grep\\s+['\"]?ERROR['\"]?\\s+app\\.log$",
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
            "Setiap aplikasi yang berjalan di Linux diberi nomor identifikasi unik bernama PID (Process ID). Perintah `ps aux` menampilkan daftar seluruh proses yang sedang aktif beserta pemakaian memori dan CPU-nya. Perintah `htop` menyediakan antarmuka pemantauan sistem secara interaktif. Jika aplikasi mengalami hang atau macet, kamu bisa menghentikannya secara paksa menggunakan perintah `kill -9 <PID>`.",
          example: {
            code: "ps aux | grep node\nkill -9 1234",
            output:
              "ubuntu 1234 2.5 4.1 854320 42100 ? Ssl 10:00 0:05 node server.js\nProses Node.js dengan PID 1234 berhasil dihentikan.",
            note: "Flag -9 mengirimkan sinyal SIGKILL untuk menghentikan proses yang tidak merespons.",
          },
          instruction:
            "Tulis perintah untuk menghentikan proses dengan PID `5678` secara paksa.",
          starterCode: "# Tulis perintah kill di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "kill\\s+-9\\s+5678$",
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
            "SSH (Secure Shell) adalah protokol standar terenkripsi untuk mengendalikan server remote dari terminal lokal. Kamu terhubung menggunakan format `ssh user@ip_address` (sering dipadukan dengan private key `-i key.pem`). Untuk menyalin berkas dari laptopmu ke server remote secara aman melalui jalur SSH, gunakan perintah `scp` (Secure Copy). Memahami SSH dan SCP sangat krusial saat kamu perlu mengelola server VPS tanpa GUI.",
          example: {
            code: "ssh -i ~/.ssh/id_rsa ubuntu@203.0.113.195\nscp -i ~/.ssh/id_rsa build.zip ubuntu@203.0.113.195:/var/www/",
            output:
              "Welcome to Ubuntu 24.04 LTS (GNU/Linux 6.8.0-generic x86_64)\n" +
              "ubuntu@203.0.113.195:~$\n" +
              "build.zip                     100%  2148KB   2.1MB/s   00:01",
            note: "Kunci SSH private (~/.ssh/id_rsa) tidak boleh dibagikan kepada siapa pun.",
          },
          instruction:
            "Tulis perintah SSH untuk masuk ke server remote sebagai user `root` di alamat IP `192.168.1.1`.",
          starterCode: "# Tulis perintah ssh di sini\n",
          language: "text",
          tests: [
            {
              pattern: "ssh\\s+root@192\\.168\\.1\\.1$",
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
            "Di sistem operasi Ubuntu/Debian, `apt` adalah manajer paket untuk mengunduh dan memperbarui perangkat lunak (seperti Nginx, Node.js, atau PostgreSQL). Setelah terpasang, aplikasi background dikelola oleh **systemd** melalui perintah `systemctl`. Kamu dapat memeriksa status, menyalakan, mematikan, atau mengatur autostart service saat server menyala kembali.",
          example: {
            code: "sudo apt update && sudo apt install -y nginx\nsudo systemctl status nginx",
            output:
              "● nginx.service - A high performance web server\n" +
              "     Loaded: loaded (/lib/systemd/system/nginx.service; enabled)\n" +
              "     Active: active (running) since Mon 2026-07-27 10:05:11 UTC; 2h ago",
            note: "Perintah systemctl enable <service> memastikan service otomatis berjalan saat server reboot.",
          },
          instruction:
            "Tulis perintah systemctl untuk memeriksa status dari service `nginx`.",
          starterCode: "# Tulis perintah systemctl di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(sudo\\s+)?systemctl\\s+status\\s+nginx$",
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
              question:
                "Perintah Linux apa yang digunakan untuk menghentikan proses yang berjalan berdasarkan ID Proses (PID)-nya secara paksa?",
              choices: [
                "A. kill -9 <PID>",
                "B. stop --force <PID>",
                "C. close -f <PID>",
                "D. systemctl terminate <PID>",
              ],
              answerIndex: 0,
              explanation:
                "Perintah `kill -9 <PID>` melempar sinyal SIGKILL yang memaksa kernel Linux langsung menghentikan proses terkait, bahkan jika proses tersebut sedang mengalami unhandled hang.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Simbol apa yang digunakan untuk mengarahkan output perintah dan menambahkan nilainya di akhir berkas (append) tanpa menghapus isi lamanya?",
              choices: ["A. >", "B. |", "C. >>", "D. <"],
              answerIndex: 2,
              explanation:
                "Operator `>>` berfungsi melakukan append (menambahkan teks di akhir file). Sebaliknya, operator `>` tunggal akan menghapus (overwrite) seluruh isi file yang sudah ada sebelumnya.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Apa kepanjangan dan fungsi utama dari perintah `pwd` di terminal Linux?",
              choices: [
                "A. Process Working Directory — memantau CPU",
                "B. Print Working Directory — menampilkan path folder lokasi saat ini",
                "C. Private Web Domain — mengonfigurasi IP",
                "D. Program Windows Data — mengunduh file",
              ],
              answerIndex: 1,
              explanation:
                "`pwd` adalah singkatan dari Print Working Directory. Perintah ini mencetak path absolut lokasi direktori yang sedang aktif di layar terminal.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Perintah apa yang digunakan untuk menyalin berkas dari laptop lokal ke server remote secara terenkripsi melalui koneksi SSH?",
              choices: ["A. scp", "B. ftp", "C. rsync-raw", "D. mv-remote"],
              answerIndex: 0,
              explanation:
                "Perintah `scp` (Secure Copy Protocol) mengamati tata cara penyalinan berkas antar host di jaringan dengan keamanan enkripsi SSH.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apa arti dari nilai hak akses octal `755` pada perintah `chmod 755 script.sh`?",
              choices: [
                "A. Owner (Read, Write, Execute), Group dan Others (Read, Execute)",
                "B. Owner (Read, Write), Group dan Others (Read saja)",
                "C. Semua orang memiliki akses penuh (Read, Write, Execute)",
                "D. Hanya user root yang dapat membaca dan menjalankan berkas",
              ],
              answerIndex: 0,
              explanation:
                "Angka 7 (4+2+1) memberi hak Read, Write, Execute kepada Owner. Angka 5 (4+0+1) memberi hak Read dan Execute kepada Group serta Others.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Mengapa penting menjalankan `sudo ufw allow 22/tcp` sebelum mengeksekusi `sudo ufw enable` di VPS?",
              choices: [
                "A. Agar website bisa diakses lewat port HTTP 80",
                "B. Agar akses SSH tidak tertutup sehingga developer tidak terkunci keluar dari server",
                "C. Untuk mempercepat proses instalasi Nginx",
                "D. Untuk mengaktifkan fitur autostart database PostgreSQL",
              ],
              answerIndex: 1,
              explanation:
                "Port 22 adalah port standar untuk koneksi remote SSH. Jika firewall UFW diaktifkan tanpa membuka port 22 terlebih dahulu, koneksi SSH aktif akan terputus dan kamu tidak bisa masuk lagi ke server.",
            },
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
          kind: "materi",
          id: "deploy-2-m1",
          title: "Kontainerisasi Aplikasi: Mengapa dan Bagaimana Docker Bekerja",
          body:
            "# Pengertian: Masalah 'It Works on My Machine'\n\n" +
            "Salah satu masalah terbesar dalam pengembangan perangkat lunak adalah perbedaan environment antara laptop developer dan server produksi. Versi Node.js yang berbeda, pustaka sistem operasi yang tidak cocok, atau konfigurasi database yang tidak seragam sering kali membuat aplikasi berjalan lancar saat dites di laptop, namun mendadak crash saat di-deploy ke server.\n\n" +
            "**Docker** menyelesaikan masalah ini dengan teknologi **kontainerisasi**. Docker membungkus kode aplikasi, runtime (misal Node.js), dependensi (`node_modules`), dan konfigurasi ke dalam satu paket terisolasi yang disebut **Container**.\n\n" +
            "---\n\n" +
            "## Mental Model: Docker Image vs Docker Container\n\n" +
            "Pahami perbedaan mendasar dua istilah ini:\n\n" +
            "- **Docker Image:** Cetak biru (blueprint) atau template yang bersifat *read-only*. Berisi instruksi langkah demi langkah dan berkas yang dibutuhkan aplikasi. Diibaratkan sebagai **buku resep kue** atau **Class** di Object-Oriented Programming.\n" +
            "- **Docker Container:** Wujud eksekusi nyata (instance) yang berjalan dari sebuah Image. Kontainer memiliki sistem berkas sendiri dan terisolasi dari kontainer lain. Diibaratkan sebagai **kue nyata** yang dipanggang dari resep tersebut atau **Object** hasil instansiasi Class.\n\n" +
            "```text\n" +
            "Dockerfile (Instruksi Teks)\n" +
            "   │  (docker build)\n" +
            "   ▼\n" +
            "Docker Image (Cetak Biru Read-Only)\n" +
            "   │  (docker run)\n" +
            "   ├──► Container 1 (App Instance - Port 3000)\n" +
            "   ├──► Container 2 (App Instance - Port 3001)\n" +
            "   └──► Container 3 (App Instance - Port 3002)\n" +
            "```\n\n" +
            "---\n\n" +
            "## Anatomi Instruksi Dockerfile\n\n" +
            "| Instruksi | Fungsi | Contoh |\n" +
            "|---|---|---|\n" +
            "| `FROM` | Menentukan base image dasar yang dipakai | `FROM node:20-alpine` |\n" +
            "| `WORKDIR` | Menentukan folder kerja utama di dalam container | `WORKDIR /app` |\n" +
            "| `COPY` | Menyalin berkas dari host laptop ke dalam container | `COPY package*.json ./` |\n" +
            "| `RUN` | Mengeksekusi perintah build saat **pembuatan Image** | `RUN npm install` |\n" +
            "| `EXPOSE` | Mendokumentasikan port yang dibuka oleh container | `EXPOSE 3000` |\n" +
            "| `USER` | Mengubah pengguna pelaksana agar tidak memakai root | `USER node` |\n" +
            '| `CMD` | Perintah utama saat **Container dijalankan** | `CMD ["node", "server.js"]` |\n\n' +
            "---\n\n" +
            "## Analogi Dunia Nyata: Kontainer Kargo Kapal Laut\n\n" +
            "Sebelum ada standar kontainer kargo internasional, pengiriman barang di pelabuhan sangat rumit karena ukuran karung, peti kayu, dan drum berbeda-beda. Ketika peti kargo standar diciptakan, kapal kargo, truk, dan derek pelabuhan bisa mengangkut muatan apa saja tanpa peduli isinya (pisang, mobil, atau pakaian). Docker adalah standar kontainer kargo bagi aplikasi komputer.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Merusak Caching Layer Dockerfile:** Menuliskan `COPY . .` *sebelum* `RUN npm install`. Akibatnya, setiap kali kamu mengubah satu baris kode di file source, Docker terpaksa mengulang unduhan `npm install` dari awal selama beberapa menit!\n" +
            "2. **Menyimpan Data di Sistem Berkas Container Tanpa Volume:** Sistem berkas kontainer bersifat sementara (*ephemeral*). Jika container database dihapus, seluruh data di dalamnya ikut musnah kecuali kamu menyambungkannya ke **Docker Volume**.\n" +
            "3. **Tidak Menyiapkan `.dockerignore`:** Lupa mengecualikan folder `node_modules` dan `.env` lokal di `.dockerignore` akan membuat proses `docker build` sangat lambat dan berpotensi membocorkan kunci rahasia ke dalam Docker Image.\n" +
            "4. **Menjalankan Container sebagai Root:** Secara bawaan Docker menjalankan proses sebagai `root`. Di lingkungan produksi, selalu gunakan instruksi `USER node` atau user non-root lainnya demi alasan keamanan.\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di industri software saat ini, Docker telah menjadi standar de-facto. Tim DevOps dan Backend memanfaatkan Docker untuk menyamakan environment lokal, menguji integrasi di CI/CD pipeline, hingga melakukan deployment berskala besar menggunakan Kubernetes atau AWS ECS.",
        },
        {
          kind: "step",
          id: "deploy-2-1",
          title: "Konsep Docker: Image vs Container",
          explanation:
            "Image adalah cetak biru aplikasi yang siap pakai dan bersifat read-only. Container adalah wujud eksekusi aktif yang berjalan terisolasi berdasarkan image tersebut. Dengan perintah `docker pull`, kamu mengunduh image dari registry publik (Docker Hub). Dengan `docker run`, kamu menyalakan container baru dari image yang sudah diunduh.",
          example: {
            code: "docker pull node:20-alpine\ndocker run -d -p 3000:3000 --name myapp node:20-alpine",
            output:
              "20-alpine: Pulling from library/node\na231861b0625: Pull complete\nDigest: sha256:4a38779...\nStatus: Downloaded newer image for node:20-alpine\n8f9a2b1c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a",
            note: "Flag -d menjalankan container di background (detached mode), dan -p memetakan port host:container.",
          },
          instruction:
            "Tuliskan perintah docker untuk mengunduh image `nginx:alpine` dari Docker Hub.",
          starterCode: "# Tulis perintah docker pull di sini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+pull\\s+nginx:alpine$",
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
            "Untuk mengelola container yang sedang berjalan, gunakan perintah `docker ps` (tambahkan flag `-a` untuk melihat container yang sudah mati). Gunakan `docker logs <name>` untuk membaca catatan konsol aplikasi, `docker exec -it <name> sh` untuk masuk ke dalam terminal internal container, dan `docker stop <name>` untuk menghentikan operasional container. Perintah-perintah dasar ini wajib dihafal untuk mendebug container di server produksi.",
          example: {
            code: "docker ps\ndocker logs -f myapp\ndocker exec -it myapp sh",
            output:
              "CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                  NAMES\n" +
              "8f9a2b1c4d5e   node:20-alpine \"docker-entrypoint.s…\"   2 minutes ago   Up 2 minutes   0.0.0.0:3000->3000/tcp myapp\n" +
              "[Server] Listening on port 3000...\n" +
              "/app # ",
            note: "Flag -f (follow) pada docker logs membuat terminal terus memperbarui tampilan log secara real-time.",
          },
          instruction:
            "Tulis perintah docker untuk melihat daftar container yang sedang berjalan.",
          starterCode: "# Tulis perintah melihat container di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+(container\\s+)?ps(\\s+-a)?$",
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
            "Dockerfile adalah berkas teks berisi sekumpulan instruksi untuk membangun Docker Image custom. Perintah `FROM` menentukan base image awal (misal Node.js berbasis Alpine Linux yang sangat ringan). Perintah `WORKDIR` menetapkan lokasi folder kerja di dalam image, `COPY` menyalin berkas, `RUN` mengeksekusi instalasi, dan `CMD` menentukan skrip utama saat container dinyalakan.",
          example: {
            code:
              "FROM node:20-alpine\n" +
              "WORKDIR /app\n" +
              "COPY package*.json ./\n" +
              "RUN npm install\n" +
              "COPY . .\n" +
              'CMD ["npm", "start"]',
            output:
              "[+] Building 4.2s (9/9) FINISHED\n" +
              " => [internal] load build definition from Dockerfile\n" +
              " => => naming to docker.io/library/myapp:latest",
            note: "Sintaks CMD ditulis menggunakan format JSON Array: ['perintah', 'argumen'].",
          },
          instruction:
            "Tentukan base image menggunakan Node.js versi 20 varian alpine pada baris awal Dockerfile.",
          starterCode: "# Tulis baris FROM di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "FROM\\s+node:20-alpine$",
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
            "Docker membangun Image baris demi baris sebagai susunan Layer ter-cache. Jika satu layer berubah, seluruh layer di bawahnya wajib dibangun ulang. Karena dependensi `package.json` jarang berubah dibanding source code harian, salin `package*.json` dan jalankan `npm install` *sebelum* menyalin sisa source code (`COPY . .`). Ini menghemat waktu build dari hitungan menit menjadi beberapa detik.",
          example: {
            code:
              "// ✅ Pola Efisien (Caching Bekerja):\n" +
              "COPY package*.json ./\n" +
              "RUN npm install\n" +
              "COPY . .\n\n" +
              "// ❌ Pola Lambat (Cache Selalu Terbuang):\n" +
              "COPY . .\n" +
              "RUN npm install",
            output:
              " => CACHED [3/5] COPY package*.json ./\n" +
              " => CACHED [4/5] RUN npm install\n" +
              " => [5/5] COPY . .",
            note: "Label CACHED menandakan Docker melompati langkah tersebut karena tidak ada perubahan file manifest.",
          },
          instruction:
            "Salin berkas `package.json` beserta pasangannya ke direktori kerja saat ini menggunakan pola wildcard asterisk.",
          starterCode: "# Tulis perintah COPY package di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "COPY\\s+package.*\\.json\\s+\\./?$",
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
            "Saat mem-build aplikasi (seperti TypeScript atau React/Next.js), kita membutuhkan alat kompilasi berat yang tidak lagi dibutuhkan saat produksi. Dengan **Multi-stage Build**, kamu dapat membuat beberapa tahap `FROM` di satu Dockerfile. Tahap pertama (`builder`) melakukan kompilasi, lalu tahap kedua (`runner`) hanya menyalin folder hasil build (`dist`). Ukuran image akhir bisa memangkas dari 1GB menjadi 80MB!",
          example: {
            code:
              "FROM node:20 AS builder\n" +
              "WORKDIR /app\n" +
              "COPY . .\n" +
              "RUN npm run build\n\n" +
              "FROM node:20-alpine AS runner\n" +
              "WORKDIR /app\n" +
              "COPY --from=builder /app/dist ./dist\n" +
              'CMD ["node", "dist/index.js"]',
            output:
              "REPOSITORY   TAG       IMAGE ID       SIZE\n" +
              "myapp        latest    a1b2c3d4e5f6   78.4MB",
            note: "Flag --from=builder menyalin artefak dari stage sebelumnya tanpa membawa file sampah build.",
          },
          instruction:
            "Pindahkan folder `/app/dist` yang dihasilkan dari stage bernama `builder` ke lokasi `./dist` pada stage final.",
          starterCode: "# Tulis perintah COPY --from di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "COPY\\s+--from=builder\\s+/app/dist\\s+(\\./dist|/app/dist|\\.)$",
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
            "Sistem berkas di dalam container bersifat sementara (*ephemeral*). Jika container di-restart atau dihapus, seluruh data baru di dalamnya akan hilang. **Docker Volume** adalah mekanisme penyimpanan khusus yang dikelola Docker di luar container pada mesin host. Dengan melampirkan volume (`-v nama_volume:/path/di/container`), data database seperti PostgreSQL atau MySQL tetap tersimpan aman.",
          example: {
            code: "docker volume create db_data\ndocker run -d -v db_data:/var/lib/mysql --name my-db mysql:8",
            output:
              "db_data\n" +
              "5c4a3b2e1d0f... (Container DB aktif dengan volume terpasang)",
            note: "Format -v adalah nama_volume:path_folder_dalam_container.",
          },
          instruction:
            "Tuliskan perintah docker run di background (-d) dengan menyambungkan volume `db_data` ke direktori `/var/lib/mysql` pada image `mysql`.",
          starterCode: "# Tulis perintah docker run di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+run\\s+.*-v\\s+db_data:/var/lib/mysql.*",
              message: "Gunakan sintaks: docker run -d -v db_data:/var/lib/mysql mysql",
            },
          ],
          solution: "docker run -d -v db_data:/var/lib/mysql mysql",
        },
        {
          kind: "step",
          id: "deploy-2-7",
          title: "Docker Network & .dockerignore",
          explanation:
            "Berkas `.dockerignore` berfungsi persis seperti `.gitignore` dalam proyek Git. Berkas ini mencatat nama file dan folder lokal (seperti `node_modules`, `.env`, `.git`) yang tidak boleh disalin ke dalam Docker Image saat perintah `COPY . .` berjalan. Hal ini mencegah pembengkakan ukuran image, mempercepat waktu build, dan menghindari kebocoran kredensial rahasia ke dalam Image produksi.",
          example: {
            code: "# .dockerignore\nnode_modules\n.env\n.git\ndist",
            output:
              "Sending build context to Docker daemon  3.2MB\n(Build context menjadi sangat ringan)",
            note: "Tanpa .dockerignore, node_modules laptopmu akan ikut ter-copy dan merusak instalasi di container.",
          },
          instruction:
            "Tuliskan nama direktori dependensi Node.js yang wajib dicantumkan dalam file `.dockerignore`.",
          starterCode: "# Tulis baris abaikan folder di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "^node_modules/?$",
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
            "Secara default, proses di dalam container berjalan sebagai pengguna `root`. Jika aplikasi Web memiliki celah keamanan (seperti Remote Code Execution), penyerang berpotensi menembus isolasi container dan menguasai server host. Untuk mencegahnya, gunakan perintah `USER` pada Dockerfile untuk beralih ke akun biasa (misal `USER node` yang sudah disediakan oleh base image Node Alpine).",
          example: {
            code:
              "FROM node:20-alpine\n" +
              "WORKDIR /app\n" +
              "COPY --chown=node:node . .\n" +
              "USER node\n" +
              'CMD ["node", "server.js"]',
            output:
              "/app $ whoami\nnode",
            note: "Instruksi USER node wajib diletakkan sebelum CMD agar aplikasi dieksekusi tanpa hak privileges root.",
          },
          instruction:
            "Tuliskan instruksi Dockerfile untuk beralih ke pengguna non-root bernama `node`.",
          starterCode: "# Tulis instruksi USER di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "USER\\s+node$",
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
              question:
                "Instruksi Dockerfile apa yang digunakan untuk menentukan perintah eksekusi utama saat sebuah Container pertama kali dinyalakan?",
              choices: [
                "A. RUN — mengeksekusi saat build image",
                "B. CMD — menentukan perintah default saat container berjalan",
                "C. COPY — menyalin file dari host",
                "D. FROM — menentukan base image",
              ],
              answerIndex: 1,
              explanation:
                "`CMD` menentukan perintah utama yang akan dieksekusi ketika kontainer mulai berjalan. Sebaliknya, `RUN` digunakan untuk mengeksekusi perintah sewaktu proses pembuatan (build) image.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Apa tujuan utama dari menerapkan teknik Multi-stage Build pada Dockerfile?",
              choices: [
                "A. Menjalankan beberapa container secara bersamaan",
                "B. Menghasilkan ukuran Image akhir yang jauh lebih kecil dengan membuang alat-alat build",
                "C. Mengunci port jaringan secara otomatis",
                "D. Menggabungkan file .env ke dalam image",
              ],
              answerIndex: 1,
              explanation:
                "Multi-stage build memungkinkan kamu memisahkan lingkungan kompilasi dan runtime, sehingga hasil build (seperti folder `dist`) saja yang disalin ke image akhir tanpa membawa compiler berat.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Mengapa data di dalam database akan hilang jika container dihapus tanpa menyambungkan Docker Volume?",
              choices: [
                "A. Karena sistem berkas container bersifat ephemeral (sementara)",
                "B. Karena Docker otomatis menghapus file .env saat stop",
                "C. Karena port jaringan tertutup",
                "D. Karena Dockerfile menggunakan Alpine Linux",
              ],
              answerIndex: 0,
              explanation:
                "Sistem berkas di dalam kontainer bersifat ephemeral (sementara) dan terikat pada siklus hidup kontainer tersebut. Tanpa Docker Volume di host, semua data baru hilang ketika kontainer dimusnahkan.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Mengapa disarankan menambahkan baris `USER node` pada bagian akhir Dockerfile aplikasi Node.js?",
              choices: [
                "A. Agar proses build gambar berjalan lebih cepat",
                "B. Mencegah aplikasi berjalan sebagai root demi keamanan dari potensi peretasan host",
                "C. Untuk mengaktifkan fitur hot-reloading di produksi",
                "D. Agar file log aplikasi otomatis tersimpan di folder /tmp",
              ],
              answerIndex: 1,
              explanation:
                "Menjalankan aplikasi sebagai pengguna biasa (non-root) membatasi wewenang penyerang jika aplikasi memiliki kerentanan keamanan, sehingga penyerang tidak bisa menguasai sistem operasi host.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Manakah susunan instruksi Dockerfile yang PALING OPTIMAL memanfaatkan Caching Layer?",
              choices: [
                "A. COPY . . -> RUN npm install",
                "B. COPY package*.json ./ -> RUN npm install -> COPY . .",
                "C. RUN npm install -> COPY package*.json ./ -> COPY . .",
                "D. COPY . . -> COPY package*.json ./ -> RUN npm install",
              ],
              answerIndex: 1,
              explanation:
                "Dengan menyalin `package*.json` dan mengeksekusi `RUN npm install` sebelum `COPY . .`, Docker dapat menggunakan cache instalasi npm selama berkas manifest `package.json` tidak mengalami perubahan.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Apa akibatnya jika kamu lupa membuat berkas `.dockerignore` dan tidak memasukkan folder `node_modules` ke dalamnya?",
              choices: [
                "A. Docker build akan gagal melempar SyntaxError",
                "B. Folder node_modules laptop lokal akan disalin ke container, membengkakkan ukuran build dan merusak kompatibilitas OS",
                "C. Port 3000 tidak akan bisa dibuka",
                "D. Container tidak akan bisa terhubung ke database",
              ],
              answerIndex: 1,
              explanation:
                "Tanpa `.dockerignore`, seluruh folder `node_modules` lokal (yang mungkin berisi binary terkompilasi untuk Windows/Mac) ikut ter-copy ke container Linux, menyebabkan ukuran build bengkak dan potensi error binary.",
            },
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
          kind: "materi",
          id: "deploy-3-m1",
          title: "Orkestrasi Multi-Kontainer dengan Docker Compose & Environment Variables",
          body:
            "# Pengertian: Mengapa Membutuhkan Docker Compose?\n\n" +
            "Aplikasi web modern jarang berdiri sendiri. Biasanya aplikasi Node.js/Express membutuhkan **PostgreSQL** sebagai database utama dan **Redis** sebagai in-memory cache/session store. Jika kamu menjalankan ketiga komponen ini menggunakan perintah `docker run` biasa, kamu harus mengetikkan puluhan argumen CLI yang panjang untuk setiap container, menyambungkannya ke network internal manual, dan mengingat urutan menyalakannya.\n\n" +
            "**Docker Compose** adalah alat deklaratif untuk mendefinisikan dan mengoperasikan aplikasi multi-kontainer melalui satu berkas konfigurasi YAML bernama **`compose.yaml`** (atau `docker-compose.yml`). Cukup jalankan `docker compose up -d`, dan seluruh stack aplikasimu akan menyala bersamaan!\n\n" +
            "---\n\n" +
            "## Mental Model: Arsitektur Multi-Service Compose\n\n" +
            "Dalam file `compose.yaml`, setiap container disebut sebagai **service**. Docker Compose otomatis membuatkan **virtual network internal**. Antar service dapat saling berkomunikasi menggunakan **nama service-nya sebagai hostname DNS**.\n\n" +
            "```text\n" +
            "                      [ Laptop Host / Publik ]\n" +
            "                                 │ (Port 3000:3000)\n" +
            "                                 ▼\n" +
            "┌─────────────────────────────────────────────────────────────────┐\n" +
            "│ Docker Internal Network (app_default)                           │\n" +
            "│                                                                 │\n" +
            "│  ┌──────────────────┐   http://postgres:5432   ┌─────────────┐  │\n" +
            "│  │  Service: 'app'  │ ───────────────────────► │ Service:    │  │\n" +
            "│  │  (Node.js API)   │                          │ 'postgres'  │  │\n" +
            "│  └────────┬─────────┘                          └─────────────┘  │\n" +
            "│           │ http://redis:6379                                   │\n" +
            "│           ▼                                                     │\n" +
            "│  ┌──────────────────┐                                           │\n" +
            "│  │  Service: 'redis'│                                           │\n" +
            "│  └──────────────────┘                                           │\n" +
            "└─────────────────────────────────────────────────────────────────┘\n" +
            "```\n\n" +
            "---\n\n" +
            "## Anatomi File `compose.yaml`\n\n" +
            "| Kata Kunci | Fungsi | Contoh |\n" +
            "|---|---|---|\n" +
            "| `services:` | Wadah utama tempat mendaftarkan daftar kontainer | `services:` |\n" +
            "| `build:` | Menentukan lokasi Dockerfile jika ingin mem-build image lokal | `build: .` |\n" +
            "| `image:` | Menggunakan image siap pakai dari Docker Hub | `image: postgres:16-alpine` |\n" +
            "| `ports:` | Mapping port `host:container` | `- '3000:3000'` |\n" +
            "| `environment:` | Menyuntikkan variabel lingkungan ke container | `- DB_HOST=postgres` |\n" +
            "| `env_file:` | Membaca file `.env` lokal otomatis | `env_file: .env` |\n" +
            "| `volumes:` | Melampirkan volume agar data tetap bertahan | `- db_data:/var/lib/postgresql/data` |\n" +
            "| `depends_on:` | Memastikan urutan startup antar service | `depends_on: [postgres]` |\n" +
            "| `restart:` | Kebijakan otomatisasi restart jika container crash | `restart: unless-stopped` |\n\n" +
            "---\n\n" +
            "## Analogi Dunia Nyata: Konduktor Orkestra Musik\n\n" +
            "Bayangkan aplikasi web sebagai grup musik orkestra. Service `app` adalah penyanyi utama, `postgres` adalah pemain piano, dan `redis` adalah pemain drum. Tanpa konduktor, setiap pemain harus datang dan mulai main sendiri-sendiri. Docker Compose adalah **konduktor orkestra** yang memberi aba-aba agar piano dan drum siap di panggung lebih dulu sebelum penyanyi mulai bernyanyi.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Menggunakan `localhost` untuk Mengakses Database Antar Container:** Di dalam container `app`, `localhost` merujuk ke container `app` itu sendiri — bukan ke laptop host atau container database. Gunakan nama service (misal `DATABASE_URL=postgres://user:pass@postgres:5432/mydb`).\n" +
            "2. **Memasukkan File `.env` yang Berisi Secret ke Git:** Berkas `.env` sering kali berisi kredensial database dan API key. Selalu daftarkan `.env` di `.gitignore`. Gunakan `.env.example` sebagai template kosong untuk developer lain.\n" +
            "3. **Mengabaikan Indentasi Spasi YAML:** Format YAML sangat sensitif terhadap spasi. Menggunakan Tab alih-alih Spasi (biasanya 2 spasi per level) akan menyebabkan error *YAML parse failure*.\n" +
            "4. **Ketergantungan Palsu Tanpa Healthcheck:** Menuliskan `depends_on: [postgres]` hanya menunggu container `postgres` *mulai*, bukan menunggu PostgreSQL *siap menerima koneksi database*. Kombinasikan dengan `healthcheck` dan `condition: service_healthy`.\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Setiap tim software profesional menyediakan file `compose.yaml` di root repository. Pengembang baru yang bergabung ke tim cukup melakukan `git clone` lalu `docker compose up -d` untuk memiliki seluruh environment pengembangan lokal (Database, Redis, API) yang identik hanya dalam hitungan detik.",
        },
        {
          kind: "step",
          id: "deploy-3-1",
          title: "Struktur compose.yaml (services, ports, volumes)",
          explanation:
            "File `compose.yaml` ditulis dalam format YAML deklaratif. Properti `services` menampung seluruh daftar kontainer yang ingin dijalankan. Setiap service dapat menentukan cara pembuatan image (`build: .` atau `image: ...`), pemetaan port (`ports: ['3000:3000']`), serta penyambungan penyimpanan (`volumes:`). Untuk menyalakan seluruh service di background, gunakan perintah `docker compose up -d`.",
          example: {
            code:
              "services:\n" +
              "  web:\n" +
              "    build: .\n" +
              "    ports:\n" +
              "      - '3000:3000'\n" +
              "  db:\n" +
              "    image: postgres:16-alpine\n" +
              "    environment:\n" +
              "      POSTGRES_PASSWORD: secret",
            output:
              "[+] Running 3/3\n" +
              " ✔ Network app_default   Created\n" +
              " ✔ Container app-db-1    Started\n" +
              " ✔ Container app-web-1   Started",
            note: "Sub-perintah up -d membuat seluruh layanan berjalan di mode detached (background).",
          },
          instruction:
            "Tulis perintah docker compose untuk menjalankan seluruh layanan di background.",
          starterCode: "# Tulis perintah docker compose di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker[- ]compose\\s+up\\s+-d$",
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
            "Docker Compose secara otomatis membaca variabel yang didefinisikan di berkas `.env` pada folder yang sama. Kamu dapat menyuntikkan nilai variabel tersebut ke dalam properti `environment:` menggunakan sintaks interpolasi shell `${NAMA_VARIABEL}`. Cara ini menjaga kredensial rahasia tetap dinamis dan tidak tertulis langsung (hardcoded) di file konfigurasi.",
          example: {
            code:
              "// .env\n" +
              "DATABASE_URL=postgres://user:pass@db:5432/mydb\n\n" +
              "// compose.yaml\n" +
              "services:\n" +
              "  api:\n" +
              "    environment:\n" +
              "      - DATABASE_URL=${DATABASE_URL}",
            output:
              "Variabel DATABASE_URL berhasil disuntikkan ke dalam container api.",
            note: "Jangan pernah meng-commit file .env yang berisi kredensial asli ke repository Git!",
          },
          instruction:
            "Suntikkan nilai dari variabel lingkungan bernama `DATABASE_URL` menggunakan tanda dolar dan kurung kurawal.",
          starterCode: "# Tulis interpolasi variabel di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$\\{DATABASE_URL\\}$",
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
            "Untuk tingkat keamanan yang lebih tinggi di lingkungan produksi atau Swarm, gunakan fitur **Docker Secrets**. Daripada menyebar file `.env` di server, Secrets membaca berkas rahasia (seperti `./db_password.txt`) dan menyuntikkannya langsung ke memori in-memory container (`/run/secrets/`). Cara ini mencegah password terekspos saat seseorang menjalankan perintah `docker inspect`.",
          example: {
            code:
              "secrets:\n" +
              "  db_password:\n" +
              "    file: ./db_password.txt\n\n" +
              "services:\n" +
              "  db:\n" +
              "    image: postgres:16-alpine\n" +
              "    secrets:\n" +
              "      - db_password",
            output:
              "Kredensial disuntikkan secara aman ke memori container tanpa terekspos di environment log.",
            note: "File db_password.txt dipasang sebagai mount point yang hanya bisa dibaca oleh container.",
          },
          instruction:
            "Konfigurasi secrets di compose untuk password database yang mengarah ke berkas lokal `./db_password.txt`.",
          starterCode: "secrets:\n  db_password:\n    # Tulis properti konfigurasi file di sini\n",
          language: "text",
          tests: [
            {
              pattern: "file:\\s*\\./?db_password\\.txt$",
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
            "Di lingkungan produksi, kontainer bisa mengalami crash akibat kehabisan memori atau error unhandled. Dengan menetapkan `restart: unless-stopped`, Docker daemon akan otomatis menyalakan kembali kontainer yang mati. Dipadukan dengan blok `healthcheck`, Docker dapat memantau apakah aplikasi benar-benar siap merespons HTTP request sebelum mengarahkan trafik.",
          example: {
            code:
              "services:\n" +
              "  app:\n" +
              "    restart: unless-stopped\n" +
              "    healthcheck:\n" +
              "      test: ['CMD', 'curl', '-f', 'http://localhost:3000/health']\n" +
              "      interval: 30s\n" +
              "      retries: 3",
            output:
              "Container app (healthy) - otomatis direstart jika mengalami crash failure.",
            note: "restart: unless-stopped memastikan container bangkit kembali bahkan setelah server fisik di-reboot.",
          },
          instruction:
            "Atur kebijakan mulai ulang sehingga container akan selalu di-restart saat crash, kecuali jika dihentikan manual oleh administrator.",
          starterCode: "# Tulis restart policy di sini\n",
          language: "text",
          tests: [
            {
              pattern: "restart:\\s*['\"]?unless-stopped['\"]?$",
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
            "Salah satu keunggulan utama Docker Compose adalah kemampuan menjalankan stack aplikasi lengkap hanya dengan satu perintah. Kamu dapat menggabungkan service Aplikasi Web (Node/Express), Database relasional (PostgreSQL), dan In-Memory Cache (Redis) di dalam satu file `compose.yaml`. Semua service saling terhubung dalam jaringan internal yang sama dan dapat diakses menggunakan nama servicenya sebagai hostname.",
          example: {
            code:
              "services:\n" +
              "  web:\n" +
              "    build: .\n" +
              "    ports: ['3000:3000']\n" +
              "  postgres:\n" +
              "    image: postgres:16-alpine\n" +
              "  redis:\n" +
              "    image: redis:alpine",
            output:
              "✔ Container stack-redis-1     Started\n" +
              "✔ Container stack-postgres-1  Started\n" +
              "✔ Container stack-web-1       Started",
            note: "Image bertag alpine memiliki ukuran sangat ringan (Redis Alpine hanya berukuran ~30MB).",
          },
          instruction:
            "Konfigurasikan layanan cache agar memakai image redis dengan tag `alpine`.",
          starterCode: "# Tulis image redis di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "image:\\s*['\"]?redis:alpine['\"]?$",
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
            "Pada lingkungan lokal (Development), kita menggunakan **bind mount** (`volumes: ['./:/app']`) agar setiap perubahan kode di editor langsung memicu hot-reloading. Namun pada lingkungan Production, kita mematikan bind mount dan menggunakan image ter-build statis yang aman. Untuk mematikan dan membersihkan seluruh container beserta jaringan compose, gunakan perintah `docker compose down`.",
          example: {
            code:
              "docker compose -f compose.yaml -f compose.prod.yaml up -d\n" +
              "docker compose down",
            output:
              "[+] Running 3/3\n" +
              " ✔ Container app-web-1   Removed\n" +
              " ✔ Container app-db-1    Removed\n" +
              " ✔ Network app_default   Removed",
            note: "Perintah docker compose down menghentikan container sekaligus menghapus virtual network bawaannya.",
          },
          instruction:
            "Jalankan perintah docker compose yang bertugas menghentikan serta menghapus kontainer dan jaringan dari susunan compose.",
          starterCode: "# Tulis penghentian stack di sini\n",
          language: "text",
          tests: [
            {
              pattern: "docker[- ]compose\\s+down$",
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
              question:
                "Perintah Docker Compose apa yang digunakan untuk mengunduh, mem-build, dan menyalakan seluruh multi-container service di background?",
              choices: [
                "A. docker compose start --all",
                "B. docker compose up -d",
                "C. docker compose run --detached",
                "D. docker compose build --exec",
              ],
              answerIndex: 1,
              explanation:
                "`docker compose up -d` membaca file `compose.yaml`, membuat jaringan virtual, mem-build image jika perlu, dan menyalakan seluruh kontainer secara detached (di background).",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara service `app` menghubungkan koneksi database ke service `postgres` di dalam file `compose.yaml` yang sama?",
              choices: [
                "A. Menggunakan hostname IP publik laptop",
                "B. Menggunakan nama service 'postgres' sebagai hostname DNS internal",
                "C. Menggunakan alamat 127.0.0.1",
                "D. Menggunakan alamat MAC address container",
              ],
              answerIndex: 1,
              explanation:
                "Docker Compose secara otomatis menyediakan server DNS internal. Setiap service dapat memanggil service lain hanya dengan menyebutkan nama servicenya (misal `postgres:5432` atau `redis:6379`).",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Dari berkas mana Docker Compose membaca variabel lingkungan (environment variables) secara default jika tidak ditentukan lain?",
              choices: ["A. .env", "B. config.json", "C. docker.env", "D. secrets.yaml"],
              answerIndex: 0,
              explanation:
                "Secara bawaan, Docker Compose akan otomatis mencari berkas bernama `.env` di direktori yang sama dengan berkas `compose.yaml`.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Opsi properti apa yang dapat kita gunakan pada `compose.yaml` untuk memastikan kontainer otomatis menyala kembali jika mengalami crash?",
              choices: [
                "A. auto_heal: true",
                "B. restart: unless-stopped",
                "C. reboot: always",
                "D. healthcheck: auto-restart",
              ],
              answerIndex: 1,
              explanation:
                "Kebijakan `restart: unless-stopped` membuat Docker daemon akan senantiasa menyalakan ulang kontainer saat terjadi kegagalan, kecuali jika dihentikan secara manual oleh administrator.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Mengapa penggunaan bind mount (`volumes: ['./:/app']`) sangat cocok untuk mode Development, namun TIDAK disarankan di Production?",
              choices: [
                "A. Karena bind mount menyebabkan SyntaxError di Linux",
                "B. Karena di Dev kita butuh hot-reloading saat edit kode, sedangkan di Prod kita butuh image ter-build statis yang stabil dan aman",
                "C. Karena bind mount menghapus file package.json",
                "D. Karena Docker Compose tidak mendukung volume di VPS",
              ],
              answerIndex: 1,
              explanation:
                "Bind mount menghubungkan folder laptop lokal ke container sehingga perubahan kode langsung terasa tanpa rebuild. Di produksi, kita ingin image yang immutable (statis dan teruji) agar tidak ada file yang berubah tidak sengaja.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Apa kelemahan utama dari instruksi `depends_on: [postgres]` tanpa dikombinasikan dengan `healthcheck`?",
              choices: [
                "A. Container app tidak akan pernah bisa menyala",
                "B. `depends_on` hanya menunggu container postgres *mulai*, bukan menunggu PostgreSQL *siap menerima koneksi*, sehingga app bisa crash saat startup",
                "C. Container postgres akan otomatis terhapus",
                "D. Port 5432 akan tertutup secara otomatis",
              ],
              answerIndex: 1,
              explanation:
                "Container database membutuhkan waktu beberapa detik untuk menginisialisasi berkas sistemnya. Tanpa healthcheck (`condition: service_healthy`), container app akan menyala terlalu cepat dan mendapati koneksi database menolak sambungan (connection refused).",
            },
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
          kind: "materi",
          id: "deploy-4-m1",
          title: "Panduan Deploy Server VPS: Linux Hardening, Nginx Proxy, dan HTTPS SSL",
          body:
            "# Pengertian: Apa itu VPS dan Mengapa Kita Membutuhkannya?\n\n" +
            "**VPS (Virtual Private Server)** adalah komputer server virtual berkinerja tinggi yang disewa dari penyedia cloud (seperti DigitalOcean, AWS EC2, Hetzner, atau Biznet Gio) yang menyala 24 jam nonstop dengan alamat **IP Publik statis**.\n\n" +
            "Membedakan dengan penyedia PaaS (seperti Vercel), VPS memberi kamu hak akses superuser (`root`) penuh. Kamu bertanggung jawab mengonfigurasi keamanan sistem operasi (firewall), memasang web server (**Nginx**), mengarahkan nama domain (**DNS A Record**), dan mengamankan lalu lintas dengan sertifikat SSL terenkripsi (**HTTPS**).\n\n" +
            "---\n\n" +
            "## Mental Model: Arsitektur Alur Trafik Web Server Produksi\n\n" +
            "Dalam arsitektur deployment VPS modern, pengguna internet tidak pernah mengakses port aplikasi (misal port 3000) secara langsung. **Nginx** bertindak sebagai **Reverse Proxy** di pintu depan (port 80/443), menerima permintaan publik, mengelola enkripsi HTTPS, lalu meneruskannya ke kontainer aplikasi internal.\n\n" +
            "```text\n" +
            "Pengguna Internet (Browser)\n" +
            "       │\n" +
            "       │  HTTPS Request (https://domainku.com:443)\n" +
            "       ▼\n" +
            "┌─────────────────────────────────────────────────────────────┐\n" +
            "│ Server VPS (IP Publik: 203.0.113.195)                        │\n" +
            "│                                                             │\n" +
            "│  UFW Firewall (Membuka Port 22, 80, 443 saja)                │\n" +
            "│       │                                                     │\n" +
            "│       ▼                                                     │\n" +
            "│  Nginx Reverse Proxy (SSL Termination / Certbot)            │\n" +
            "│       │                                                     │\n" +
            "│       │  proxy_pass http://127.0.0.1:3000                   │\n" +
            "│       ▼                                                     │\n" +
            "│  Docker Container (App Node.js Listening di Port 3000)      │\n" +
            "└─────────────────────────────────────────────────────────────┘\n" +
            "```\n\n" +
            "---\n\n" +
            "## Tahapan Deployment VPS dari Nol\n\n" +
            "| Langkah | Komponen | Perintah / Aktivitas Utama |\n" +
            "|---|---|---|\n" +
            "| 1 | **Hardening VPS** | `sudo ufw allow 22,80,443/tcp && sudo ufw enable` |\n" +
            "| 2 | **Clone & Run** | `git clone <repo> && docker compose up -d` |\n" +
            "| 3 | **Nginx Config** | Mengonfigurasi `proxy_pass http://127.0.0.1:3000;` |\n" +
            "| 4 | **DNS Record** | Menambahkan **A Record** nama domain ke IP Publik VPS |\n" +
            "| 5 | **HTTPS SSL** | `sudo certbot --nginx -d domainku.com` |\n" +
            "| 6 | **Zero Downtime**| `sudo systemctl reload nginx` saat pembaruan rilis |\n\n" +
            "---\n\n" +
            "## Analogi Dunia Nyata: Resepsionis Gedung dan Sertifikat Kredensial\n\n" +
            "Bayangkan VPS sebagai gedung perkantoran. **UFW Firewall** adalah satpam di gerbang luar yang memeriksa kartu identitas. **Nginx** adalah **resepsionis gedung** di lobi utama. Ketika tamu datang meminta bertemu 'Departemen Keuangan' (domainku.com), resepsionis memeriksa dokumen sertifikat resmi (**Let's Encrypt SSL**), lalu mengantarkan tamu ke ruang kerja internal nomor 3000 (port kontainer) tanpa perlu tamu tahu nomor rahasia ruangan tersebut.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Mengekspos Port Container Langsung ke Publik:** Membuka port database 5432 atau port aplikasi 3000 langsung ke IP publik tanpa Nginx/Firewall sangat berbahaya. Penyerang dapat melakukan brute-force serangan ke port tersebut.\n" +
            "2. **Lupa Memasang `proxy_set_header` di Nginx:** Tanpa `proxy_set_header Host $host;` dan `X-Forwarded-For`, aplikasi Node.js di dalam container akan menganggap seluruh IP pengunjung adalah `127.0.0.1` (IP Nginx itu sendiri).\n" +
            "3. **Mengabaikan Propagasi DNS:** Setelah memperbarui A Record di dashboard domain (Cloudflare/Namecheap), perubahan butuh waktu (propagation time) dari beberapa menit hingga 24 jam. Jangan terburu-buru menguji Certbot sebelum DNS benar-benar mengarah ke VPS.\n" +
            "4. **Menggunakan `systemctl restart nginx` alih-alih `reload`:** Perintah `restart` mematikan proses Nginx sejenak (menyebabkan downtime bagi pengunjung yang sedang aktif). Perintah `reload` memuat konfigurasi baru secara *graceful* tanpa memutus koneksi aktif.\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Menguasai alur deployment VPS dari server bersih sampai HTTPS aktif adalah pembeda utama antara developer pemula dan senior. Di perusahaan startup dan industri software, kamu diharapkan mampu mengelola infrastruktur mandiri, mengonfigurasi Nginx reverse proxy, serta menangani domain dan keamanan SSL SSL/TLS.",
        },
        {
          kind: "step",
          id: "deploy-4-1",
          title: "Setup Awal VPS & Firewall (ufw)",
          explanation:
            "Saat pertama kali menyewa VPS Linux, langkah pertama adalah melakukan sistem hardening. Gunakan UFW (Uncomplicated Firewall) untuk mengunci seluruh port yang tidak digunakan. Hanya buka port yang benar-benar esensial untuk publik: Port 22 (SSH remote), Port 80 (HTTP), dan Port 443 (HTTPS SSL). Pastikan kamu mengizinkan port 22 *sebelum* mengaktifkan UFW!",
          example: {
            code:
              "sudo ufw allow 22/tcp\n" +
              "sudo ufw allow 80/tcp\n" +
              "sudo ufw allow 443/tcp\n" +
              "sudo ufw enable",
            output:
              "Rules updated\n" +
              "Rules updated (v6)\n" +
              "Firewall is active and enabled on system startup",
            note: "Selalu pastikan port 22/tcp sudah di-allow sebelum mengaktifkan UFW agar koneksi SSH tidak terputus.",
          },
          instruction:
            "Tulis perintah ufw untuk mengizinkan trafik masuk pada port HTTP `80/tcp`.",
          starterCode: "# Tulis perintah ufw allow di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(sudo\\s+)?ufw\\s+allow\\s+80(/tcp)?$",
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
            "Setelah VPS aman dan Docker terpasang, unduh source code aplikasi kamu dari repository Git menggunakan perintah `git clone`. Selanjutnya, persiapkan berkas `.env` khusus lingkungan produksi di VPS, lalu jalankan perintah `docker compose up -d` untuk memicu pembentukan dan eksekusi kontainer di server. Alur ini memastikan aplikasi berjalan identik dengan lingkungan pengujian lokal.",
          example: {
            code:
              "git clone https://github.com/user/app.git\n" +
              "cd app\n" +
              "nano .env\n" +
              "docker compose up -d",
            output:
              "Cloning into 'app'...\n" +
              "[+] Running 2/2\n" +
              " ✔ Container app-db-1   Started\n" +
              " ✔ Container app-web-1  Started",
            note: "Pastikan file .env di VPS berisi kredensial produksi yang aman dan tidak di-commit ke Git.",
          },
          instruction:
            "Unduh salinan repository dari alamat `https://github.com/user/app.git` ke server VPS.",
          starterCode: "# Tulis perintah git clone di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+clone\\s+https://github\\.com/user/app\\.git$",
              message: "Gunakan perintah git clone https://github.com/user/app.git",
            },
          ],
          solution: "git clone https://github.com/user/app.git",
        },
        {
          kind: "step",
          id: "deploy-4-3",
          title: "Nginx sebagai Reverse Proxy",
          explanation:
            "Nginx beroperasi di bagian terdepan server VPS produksi. Nginx menerima permintaan HTTP/HTTPS publik di port 80/443, lalu mengalihkan permintaan tersebut (`proxy_pass`) ke port internal tempat container aplikasi berjalan (misal `http://127.0.0.1:3000`). Nginx juga menangani pembatasan ukuran unggahan file, caching aset statis, SSL termination, dan pemetaan header rujukan IP asli pengguna.",
          example: {
            code:
              "server {\n" +
              "  listen 80;\n" +
              "  server_name domainku.com;\n" +
              "  location / {\n" +
              "    proxy_pass http://127.0.0.1:3000;\n" +
              "    proxy_set_header Host $host;\n" +
              "  }\n" +
              "}",
            output:
              "$ sudo nginx -t\n" +
              "nginx: the configuration file /etc/nginx/sites-enabled/app.conf syntax is ok",
            note: "Instruksi proxy_pass wajib diakhiri dengan titik koma (;) khas sintaks Nginx.",
          },
          instruction:
            "Instruksikan Nginx agar meneruskan setiap permintaan ke alamat loopback lokal di port `3000`.",
          starterCode: "# Tulis baris proxy_pass di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "proxy_pass\\s+http://(127\\.0\\.0\\.1|localhost):3000;?$",
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
            "Agar pengguna dapat mengakses aplikasi via nama domain (misal `example.com`), kamu harus mengonfigurasi DNS Record di penyedia domain milikmu (seperti Cloudflare atau Namecheap). Tambahkan A Record (Address Record) yang memetakan nama domain atau sub-domain tersebut tepat ke alamat IP Publik VPS milikmu. Setelah DNS dipetakan, trafik web dari domain akan otomatis diarahkan ke server VPS.",
          example: {
            code:
              "Type: A Record\n" +
              "Name: example.com (atau @)\n" +
              "IPv4 Address: 203.0.113.195\n" +
              "TTL: Auto (atau 3600)",
            output:
              "$ dig +short example.com\n" +
              "203.0.113.195",
            note: "Perintah dig atau ping digunakan untuk memverifikasi apakah propagasi DNS sudah selesai.",
          },
          instruction:
            "Tuliskan baris konfigurasi zona DNS record bertipe `A` yang memetakan domain `example.com` ke alamat IP server `203.0.113.195`.",
          starterCode: "# Tulis DNS A record di sini\n",
          language: "text",
          tests: [
            {
              pattern: "(example\\.com\\.?|@)\\s+(IN\\s+)?A\\s+203\\.0\\.113\\.195$",
              message: "Gunakan format: example.com. IN A 203.0.113.195",
            },
          ],
          solution: "example.com. IN A 203.0.113.195",
        },
        {
          kind: "step",
          id: "deploy-4-5",
          title: "HTTPS Gratis dengan Let's Encrypt (Certbot)",
          explanation:
            "Enkripsi HTTPS mengamankan komunikasi data antara browser pengguna dan server VPS milikmu. Certbot adalah alat otomatisasi dari EFF yang meminta sertifikat SSL/TLS gratis dari Let's Encrypt. Dengan menjalankan `sudo certbot --nginx -d myapp.com`, Certbot otomatis mengonfigurasi file Nginx, menginstall sertifikat SSL, dan mengatur pengalihan HTTP ke HTTPS.",
          example: {
            code: "sudo certbot --nginx -d domainku.com",
            output:
              "Requesting a certificate for domainku.com\n" +
              "Successfully received certificate.\n" +
              "Deploying certificate to VirtualHost /etc/nginx/sites-enabled/app.conf\n" +
              "Congratulations! You have successfully enabled https://domainku.com",
            note: "Certbot otomatis menambahkan timer systemd untuk memperbarui sertifikat tiap 90 hari.",
          },
          instruction:
            "Tulis perintah certbot untuk mendapatkan dan mengonfigurasi SSL Nginx secara otomatis pada domain `myapp.com`.",
          starterCode: "# Tulis perintah certbot di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(sudo\\s+)?certbot\\s+--nginx\\s+-d\\s+myapp\\.com$",
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
            "Saat melakukan rilis ulang di VPS produksi, kamu tidak ingin pengguna mendapati pesan error 502 Bad Gateway. Untuk menerapkan pembaruan konfigurasi Nginx secara halus (*graceful*), gunakan `sudo systemctl reload nginx`. Perintah `reload` memuat konfigurasi baru di latar belakang tanpa menghentikan atau memutus koneksi pengguna yang sedang aktif di server.",
          example: {
            code:
              "git pull origin main\n" +
              "docker compose up -d --build\n" +
              "sudo systemctl reload nginx",
            output:
              "● nginx.service - A high performance web server\n" +
              "   Reloaded Nginx web server successfully without dropping active connections.",
            note: "Gunakan reload alih-alih restart agar pengguna tidak mengalami layar blank saat deploy.",
          },
          instruction:
            "Muat ulang konfigurasi service web server Nginx secara graceful menggunakan systemctl tanpa memutus koneksi aktif.",
          starterCode: "# Tulis reload Nginx di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(sudo\\s+)?systemctl\\s+reload\\s+nginx$",
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
              question:
                "Alat CLI populer apa yang digunakan untuk menerbitkan dan memperbarui sertifikat SSL/HTTPS gratis dari Let's Encrypt secara otomatis pada Nginx?",
              choices: [
                "A. Certbot",
                "B. Docker-SSL",
                "C. OpenSSL-Auto",
                "D. UFW-Secure",
              ],
              answerIndex: 0,
              explanation:
                "Certbot adalah alat resmi yang mengotomatiskan penerbitan, verifikasi domain, dan pembaruan berkala sertifikat SSL Let's Encrypt pada web server Nginx maupun Apache.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Peran utama Nginx saat dipasang sebagai Reverse Proxy di pintu depan server VPS adalah...",
              choices: [
                "A. Menjadi database penyimpanan file gambar",
                "B. Menerima trafik publik di port 80/443 lalu meneruskannya (proxy_pass) ke port internal aplikasi",
                "C. Mengompilasi kode JavaScript menjadi binary",
                "D. Menggantikan fungsi Docker daemon",
              ],
              answerIndex: 1,
              explanation:
                "Nginx beroperasi di garda terdepan, menangani enkripsi SSL, membatasi ukuran request, lalu memutar (`proxy_pass`) trafik ke port internal tempat container aplikasi berjalan (seperti `127.0.0.1:3000`).",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Mengapa perintah `sudo systemctl reload nginx` lebih disarankan dibanding `sudo systemctl restart nginx` saat melakukan perbaruan di produksi?",
              choices: [
                "A. Karena reload mengunduh versi Nginx terbaru",
                "B. Karena reload memuat konfigurasi baru secara graceful tanpa memutus koneksi pengguna aktif",
                "C. Karena restart membutuhkan izin root tambahan",
                "D. Karena reload otomatis menghapus cache Docker",
              ],
              answerIndex: 1,
              explanation:
                "Perintah `reload` meminta Nginx membaca ulang berkas konfigurasi secara *graceful* di background tanpa menghentikan worker process, sehingga pengguna tidak mengalami koneksi terputus.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Apa jenis DNS Record yang wajib ditambahkan di dashboard penyedia domain untuk mengarahkan nama domain tepat ke IP Publik VPS?",
              choices: [
                "A. CNAME Record",
                "B. MX Record",
                "C. TXT Record",
                "D. A Record",
              ],
              answerIndex: 3,
              explanation:
                "A Record (Address Record) adalah jenis record DNS yang memetakan nama domain (seperti `example.com`) secara langsung ke alamat IP IPv4 publik milik server.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apa fungsi dari perintah UFW `sudo ufw allow 443/tcp`?",
              choices: [
                "A. Mengizinkan koneksi remote SSH",
                "B. Membuka port HTTPS terenkripsi untuk trafik web SSL",
                "C. Membuka port koneksi PostgreSQL",
                "D. Menutup seluruh port jaringan luar",
              ],
              answerIndex: 1,
              explanation:
                "Port 443/tcp adalah port standar internasional yang digunakan oleh protokol HTTPS terenkripsi SSL/TLS.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Mengapa meng-expose port internal database (seperti 5432) langsung ke IP Publik VPS dianggap sebagai tindakan berisiko tinggi?",
              choices: [
                "A. Karena membuat kecepatan query menjadi lambat",
                "B. Karena memberikan celah bagi penyerang luar untuk melakukan serangan brute-force atau injeksi langsung ke database",
                "C. Karena Nginx tidak bisa berjalan jika port 5432 terbuka",
                "D. Karena Docker Compose akan melempar error",
              ],
              answerIndex: 1,
              explanation:
                "Database harus tetap terisolasi di jaringan internal VPS atau Docker Network. Mengeksposnya ke publik mengundang risiko serangan pembobolan data sensitif.",
            },
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
          kind: "materi",
          id: "deploy-5-m1",
          title: "Otomatisasi Deployment & CI/CD Pipeline (GitHub Actions & PaaS)",
          body:
            "# Pengertian: Apa itu CI/CD?\n\n" +
            "Secara tradisional, proses pengujian dan deployment dilakukan secara manual: developer menjalankan tes di laptop, meng-compile build, lalu mengunduh file ke server via FTP atau SSH. Proses manual ini rentan terhadap **human error** (misal lupa menjalankan tes atau salah menimpa file produksi).\n\n" +
            "**CI/CD (Continuous Integration & Continuous Deployment)** mengotomatiskan seluruh alur kerja ini:\n\n" +
            "- **Continuous Integration (CI):** Setiap kali ada pengembang yang mendorong kode (`git push`) atau membuka **Pull Request (PR)**, sistem otomatis mengeksekusi Linter dan Unit Testing untuk memastikan kode baru tidak merusak sistem.\n" +
            "- **Continuous Deployment (CD):** Setelah PR disetujui dan di-merge ke branch utama (`main`), sistem otomatis mem-build Docker Image dan mempublikasikannya langsung ke server produksi tanpa campur tangan manusia.\n\n" +
            "---\n\n" +
            "## Mental Model: Alur Kerja GitHub Actions Pipeline\n\n" +
            "Di GitHub, alur CI/CD dikonfigurasi melalui berkas YAML di folder **`.github/workflows/`**.\n\n" +
            "```text\n" +
            "Developer Push Kode / Buka Pull Request\n" +
            "                │\n" +
            "                ▼\n" +
            "GitHub Actions Runner (Virtual Machine Ubuntu Clean)\n" +
            "  ├── Step 1: Checkout Repository (actions/checkout@v4)\n" +
            "  ├── Step 2: Setup Node.js Environment (actions/setup-node@v4)\n" +
            "  ├── Step 3: Install Dependensi (npm ci)\n" +
            "  ├── Step 4: Run Linter & Test (npm test)   ◄── [Tahap CI]\n" +
            "  └── Step 5: (Jika Merge to Main) Deploy    ◄── [Tahap CD]\n" +
            "```\n\n" +
            "---\n\n" +
            "## Perbandingan PaaS (Vercel/Railway) vs IaaS (VPS)\n\n" +
            "| Fitur / Karakteristik | PaaS (Vercel / Railway / Render) | IaaS (VPS: DigitalOcean / AWS EC2) |\n" +
            "|---|---|---|\n" +
            "| **Pengelolaan Server** | Terkelola Otomatis (Zero Config) | Manual (Install OS, Nginx, Docker) |\n" +
            "| **Preview Deployment**| Otomatis ada per Pull Request | Harus dikonfigurasi sendiri |\n" +
            "| **Skalabilitas** | Otomatis Scaling | Manual Scaling (Tambah RAM/CPU) |\n" +
            "| **Biaya** | Gratis di awal, mahal saat trafik raksasa | Murah & Flat (misal $5/bulan) |\n" +
            "| **Kontrol** | Terbatas pada aturan platform | Kontrol Akar (Root) 100% Bebas |\n\n" +
            "---\n\n" +
            "## Analogi Dunia Nyata: Ban Berjalan Pabrik Otomotif\n\n" +
            "Bayangkan merakit mobil di pabrik modern. **CI** adalah pemindai sensor otomatis di sepanjang ban berjalan yang memeriksa apakah setiap baut terpasang kencang. Jika ada baut longgar, ban berjalan berhenti (build gagal). **CD** adalah robot yang otomatis mengecat dan mengantarkan mobil yang lolos ujian ke truk pengiriman tanpa perlu didorong manual oleh pekerja.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Menuliskan Password/SSH Key Polos di File Workflow YAML:** File `.github/workflows/ci.yml` tersimpan di repository. Memasukkan kredensial polos di sana akan membocorkannya ke publik. Gunakan **GitHub Repository Secrets** (`${{ secrets.SECRET_NAME }}`).\n" +
            "2. **Menjalankan Job Deployment di Setiap Pull Request:** Pastikan tahap CD hanya berjalan ketika event `push` terjadi pada branch `main` atau `master` menggunakan klausa kondisional `if: github.ref == 'refs/heads/main'`.\n" +
            "3. **Menggunakan `npm install` alih-alih `npm ci` di Runner:** Di CI runner, gunakan `npm ci` agar instalasi dependensi strictly mengikuti versi persis di `package-lock.json`.\n" +
            "4. **Lupa Memasang Action Timeout:** Jika sebuah tes menggantung (infinite loop), runner akan terus menyala dan menguras kuota menit gratis GitHub Actions milikmu.\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Kemampuan menyusun pipeline CI/CD dengan GitHub Actions atau Vercel adalah syarat utama dalam budaya kerja DevOps dan Agile modern. Perusahaan tidak lagi menerima rilis manual 'upload via FTP'. Setiap perubahan kode wajib melewati pemeriksaan tes otomatis di PR sebelum bisa masuk ke produksi.",
        },
        {
          kind: "step",
          id: "deploy-5-1",
          title: "PaaS (Vercel/Railway) vs IaaS (VPS)",
          explanation:
            "Platform as a Service (PaaS) seperti Vercel atau Railway mengotomatiskan seluruh urusan infrastruktur: build, SSL, domain, dan deployment terjadi instan begitu kamu melakukan git push. Sebaliknya, Infrastructure as a Service (IaaS/VPS) menuntut pengelolaan manual. Gunakan PaaS untuk kecepatan iterasi dan frontend/Next.js, serta gunakan VPS untuk backend berat yang membutuhkan biaya hemat terprediksi.",
          example: {
            code: "npx vercel --prod",
            output:
              "Vercel CLI 34.2.0\n" +
              "🔍 Inspecting build...\n" +
              "✅ Production deployment live at https://app.vercel.app [2s]",
            note: "Command vercel --prod langsung mempublikasikan aplikasi ke URL produksi tanpa perlu setting Nginx.",
          },
          instruction:
            "Tuliskan perintah CLI Vercel untuk melakukan publikasi aplikasi secara langsung ke lingkungan produksi.",
          starterCode: "# Tulis perintah vercel di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "vercel\\s+--prod$",
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
            "GitHub Actions membaca skrip otomatisasi berbentuk berkas YAML yang diletakkan di direktori `.github/workflows/`. Blok `on:` menentukan pemicu event (seperti `push` atau `pull_request`). Blok `jobs:` menampung sekumpulan langkah (`steps:`) yang akan dieksekusi di dalam virtual machine bersih (misal `runs-on: ubuntu-latest`). Struktur ini memungkinkan otomatisasi CI/CD berjalan otomatis di cloud GitHub.",
          example: {
            code:
              "name: CI Pipeline\n" +
              "on: [push, pull_request]\n" +
              "jobs:\n" +
              "  test:\n" +
              "    runs-on: ubuntu-latest\n" +
              "    steps:\n" +
              "      - uses: actions/checkout@v4\n" +
              "      - run: npm ci\n" +
              "      - run: npm test",
            output:
              "Run actions/checkout@v4\n" +
              "Run npm ci\n" +
              "Run npm test\n" +
              "✓ All tests passed!",
            note: "Event on: [push, pull_request] memastikan skrip otomatis berjalan saat ada commit baru maupun PR.",
          },
          instruction:
            "Konfigurasikan baris pemicu `on:` agar workflow otomatis berjalan apabila terdapat dorongan kode (`push`) maupun usulan perubahan (`pull_request`).",
          starterCode: "# Tulis baris on di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "on:\\s*\\[\\s*push\\s*,\\s*pull_request\\s*\\]$",
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
            "Inti dari Continuous Integration (CI) adalah mendeteksi kesalahan sintaks dan kecacatan logika sedini mungkin di setiap usulan perubahan. Dalam skrip GitHub Actions, kita menambahkan langkah (*step*) yang mengeksekusi linter dan unit testing otomatis (`npm test`). Jika ada satu tes saja yang gagal, status PR di GitHub akan berubah merah dan tombol Merge akan terblokir secara otomatis.",
          example: {
            code:
              "steps:\n" +
              "  - uses: actions/checkout@v4\n" +
              "  - uses: actions/setup-node@v4\n" +
              "    with:\n" +
              "      node-version: 20\n" +
              "  - run: npm ci\n" +
              "  - run: npm test",
            output:
              "RUN npm test\n" +
              " PASS  src/math.test.js\n" +
              " Test Suites: 1 passed, 1 total",
            note: "Menggunakan npm ci di CI runner memastikan versi dependensi persis sama dengan package-lock.json.",
          },
          instruction:
            "Tambahkan satu step khusus yang menjalankan skrip pengujian bawaan Node Package Manager (`npm test`).",
          starterCode: "# Tulis step npm test di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "-\\s+run:\\s+npm\\s+test$",
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
            "Continuous Deployment (CD) bertugas mempublikasikan kode baru ke server produksi setelah tahap CI lulus dan PR di-merge ke branch utama. Untuk memastikan proses deployment ke VPS hanya dipicu oleh branch produksi (bukan dari branch fitur biasa), gunakan klausa kondisional `if: github.ref == 'refs/heads/main'` di dalam skrip workflow GitHub Actions.",
          example: {
            code:
              "jobs:\n" +
              "  deploy:\n" +
              "    if: github.ref == 'refs/heads/main'\n" +
              "    runs-on: ubuntu-latest\n" +
              "    steps:\n" +
              "      - run: echo 'Deploying to Production VPS...'",
            output:
              "Condition 'github.ref == refs/heads/main' evaluated to true.\n" +
              "Deploying to Production VPS...",
            note: "Klausa if mencegah rilis otomatis dari cabang percobaan (feature branch).",
          },
          instruction:
            "Tambahkan blok kondisional (`if:`) agar job deployment ini hanya dijalankan apabila referensi cabang merujuk tepat ke branch `refs/heads/main`.",
          starterCode: "# Tulis klausa if di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "if:\\s*github\\.ref\\s*==\\s*['\"]refs/heads/main['\"]$",
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
            "Jangan pernah menuliskan kredensial rahasia (seperti SSH Private Key, API Token, atau DB Password) langsung di berkas workflow YAML. Simpan variabel sensitif tersebut di menu **Settings > Secrets and variables > Actions** pada repository GitHub. Panggil nilai rahasia tersebut di skrip workflow menggunakan sintaks ekspresi `${{ secrets.NAMA_SECRET }}`.",
          example: {
            code:
              "steps:\n" +
              "  - uses: appleboy/ssh-action@v1\n" +
              "    with:\n" +
              "      host: ${{ secrets.VPS_HOST }}\n" +
              "      key: ${{ secrets.DEPLOY_KEY }}",
            output:
              "Connecting to *** using SSH key...\n" +
              "Successfully executed remote commands.",
            note: "GitHub Actions otomatis menyamarkan (masking) nilai secrets menjadi *** di tampilan log rilis.",
          },
          instruction:
            "Panggil variabel rahasia bernama `DEPLOY_KEY` dari vault repository menggunakan sintaks ekspresi interpolasi rahasia bawaan GitHub.",
          starterCode: "# Tulis interpolasi secrets di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$\\{\\{\\s*secrets\\.DEPLOY_KEY\\s*\\}\\}$",
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
            "Salah satu fitur paling ampuh pada platform PaaS (seperti Vercel atau Railway) adalah Preview Deployment. Setiap kali seorang developer membuat Pull Request baru, platform akan otomatis mem-build versi aplikasi terisolasi dan menyediakan URL unik (misal `https://app-pr-42.vercel.app`). Fitur ini memungkinkan tim QA dan UI/UX me-review tampilan secara langsung sebelum kode di-merge ke branch produksi.",
          example: {
            code: "npx vercel --preview --yes",
            output:
              "🔍 Inspecting build...\n" +
              "✅ Preview deployment live at https://app-git-feature-fix-42.vercel.app\n" +
              "Inspect: https://vercel.com/team/app/builds",
            note: "Preview deployment mempermudah verifikasi tampilan bersama tim tanpa mengganggu server produksi utama.",
          },
          instruction:
            "Tuliskan perintah CLI Vercel untuk mempublikasikan aplikasi ke lingkungan pratinjau (`--preview`).",
          starterCode: "# Tulis perintah vercel preview di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "vercel\\s+--preview$",
              message: "Gunakan: vercel --preview",
            },
          ],
          solution: "vercel --preview",
        },
        {
          kind: "quiz",
          id: "deploy-5-kuis",
          title: "Kuis: Platform Deploy & CI/CD",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Di folder mana berkas skrip otomatisasi workflow GitHub Actions wajib diletakkan di dalam repository?",
              choices: [
                "A. .github/workflows/",
                "B. .ci/actions/",
                "C. .github/scripts/",
                "D. config/pipelines/",
              ],
              answerIndex: 0,
              explanation:
                "GitHub Actions secara otomatis mendeteksi dan mengeksekusi berkas konfigurasi YAML yang diletakkan di direktori `.github/workflows/`.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Tahap mana dalam pipeline CI/CD yang berfokus menjalankan Linter dan Unit Testing otomatis di setiap commit/PR?",
              choices: [
                "A. Continuous Deployment (CD)",
                "B. Continuous Integration (CI)",
                "C. Infrastructure as Code (IaC)",
                "D. Domain Registration",
              ],
              answerIndex: 1,
              explanation:
                "Continuous Integration (CI) berfokus mengintegrasikan kode baru secara berkala sambil memverifikasinya melalui tes otomatis untuk mendeteksi bug sedini mungkin.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Di mana tempat paling aman untuk menyimpan SSH Private Key dan API Token yang digunakan oleh skrip GitHub Actions?",
              choices: [
                "A. Ditulis langsung sebagai teks biasa di file .github/workflows/ci.yml",
                "B. Disimpan di GitHub Repository Secrets",
                "C. Dimasukkan ke dalam berkas README.md",
                "D. Di-commit ke dalam folder public/",
              ],
              answerIndex: 1,
              explanation:
                "GitHub Repository Secrets mengenkripsi kredensial sensitif dan menyamarkannya (`***`) dari log tampilan, sehingga aman dari potensi kebocoran.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Apa keuntungan utama menggunakan platform PaaS (seperti Vercel) untuk aplikasi Frontend dibanding mengurus VPS sendiri?",
              choices: [
                "A. PaaS memberi akses root ke kernel Linux",
                "B. PaaS mengotomatiskan build, SSL, dan Preview Deployment per PR tanpa pusing mengurus Nginx",
                "C. PaaS tidak membutuhkan koneksi internet",
                "D. PaaS selalu gratis tanpa batasan apapun",
              ],
              answerIndex: 1,
              explanation:
                "PaaS memanjakan pengembang dengan otomatisasi infrastruktur penuh: git push langsung ter-build, SSL otomatis aktif, dan URL Preview instan ada untuk setiap Pull Request.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Pada workflow GitHub Actions, apa fungsi dari sintaks `if: github.ref == 'refs/heads/main'`?",
              choices: [
                "A. Menghapus branch main secara otomatis",
                "B. Membatasi agar job (misal deployment) hanya dieksekusi saat workflow berjalan di branch utama (main)",
                "C. Mengubah nama repository menjadi main",
                "D. Menjalankan tes di seluruh branch percobaan",
              ],
              answerIndex: 1,
              explanation:
                "Ekspresi `if: github.ref == 'refs/heads/main'` memastikan job deployment hanya terpicu ketika ada penggabungan kode ke cabang rilis utama `main`.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Mengapa perintah `npm ci` lebih direkomendasikan dibanding `npm install` saat berada di lingkungan runner CI/CD?",
              choices: [
                "A. Karena `npm ci` mengabaikan file package-lock.json",
                "B. Karena `npm ci` mengunduh dependensi strictly sesuai versi persis di `package-lock.json` dan menghapus `node_modules` lama agar build konsisten",
                "C. Karena `npm ci` tidak membutuhkan koneksi internet",
                "D. Karena `npm ci` otomatis mem-build Docker Image",
              ],
              answerIndex: 1,
              explanation:
                "`npm ci` (Clean Install) dirancang khusus untuk lingkungan otomatisasi CI/CD. Perintah ini menginstal dependensi persis sesuai `package-lock.json` tanpa mengubah versi berkas lock.",
            },
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
          kind: "materi",
          id: "deploy-6-m1",
          title: "Pemantauan Server, Tracking Error, Backup, dan Penanganan Insiden",
          body:
            "# Pengertian: Mengapa Monitoring Sangat Penting?\n\n" +
            "Deployment bukanlah akhir dari perjalanan sebuah aplikasi, melainkan awal dari fase operasional. Di lingkungan produksi, server dapat mengalami masalah sewaktu-waktu: memori RAM penuh, harddisk tersumbat log, database terkunci, atau aplikasi mengalami unhandled crash.\n\n" +
            "Tujuan utama dari **Monitoring & Observability** adalah mengetahui bahwa aplikasimu sedang bermasalah **sebelum pengguna komplain di media sosial**. Modul ini membahas 4 pilar utama operasional server produksi:\n\n" +
            "1. **Log Management:** Membaca catatan aktivitas aplikasi dan server.\n" +
            "2. **Uptime & Health Checking:** Pemantauan status aktif/mati secara otomatis.\n" +
            "3. **Error Tracking (Sentry):** Menangkap exception crash lengkap dengan stack trace.\n" +
            "4. **Database Backup & Disaster Recovery:** Menyelamatkan data dari ancaman kehancuran total.\n\n" +
            "---\n\n" +
            "## Mental Model: Ekosistem Pemantauan Server Produksi\n\n" +
            "```text\n" +
            "                                ┌─────────────────────────────────┐\n" +
            "                                │ Uptime Monitoring (UptimeRobot) │\n" +
            "                                │ Ping Endpoint /health (tiap 5m) │\n" +
            "                                └────────────────┬────────────────┘\n" +
            "                                                 │ (Alert jika Down)\n" +
            "                                                 ▼\n" +
            "┌─────────────────────────┐            ┌─────────────────────────┐\n" +
            "│  Pengguna / Client Web  │ ─────────► │  Server VPS / Container │\n" +
            "└─────────────────────────┘            └────────────┬────────────┘\n" +
            "                                                    │\n" +
            "                ┌───────────────────────────────────┼──────────────────────────────────┐\n" +
            "                │ (Crash Exception)                 │ (Log Transaksi)                  │ (Jadwal Backup)\n" +
            "                ▼                                   ▼                                  ▼\n" +
            "┌───────────────────────────────┐ ┌──────────────────────────────────┐ ┌───────────────────────────────┐\n" +
            "│ Error Tracker (Sentry.io)     │ │ Structured Logs (docker logs)    │ │ Scheduled Backup (pg_dump)   │\n" +
            "│ Menangkap Stacktrace & Error  │ │ Mencatat Rekaman HTTP & Debug    │ │ Mengirimkan Backup ke AWS S3  │\n" +
            "└───────────────────────────────┘ └──────────────────────────────────┘ └───────────────────────────────┘\n" +
            "```\n\n" +
            "---\n\n" +
            "## Ringkasan Tools & Perintah Pemantauan\n\n" +
            "| Fitur / Komponen | Tool / Perintah | Kegunaan Utama |\n" +
            "|---|---|---|\n" +
            "| **Log Terminal** | `docker logs -f --tail 100 <container>` | Membaca 100 baris log terakhir kontainer |\n" +
            "| **Uptime Checking**| `/health` endpoint + UptimeRobot | Notifikasi Telegram/Email jika server mati |\n" +
            "| **Error Tracking**| `Sentry.init({ dsn: '...' })` | Menangkap crash unhandled JavaScript/Node |\n" +
            "| **Metrik Disk** | `df -h` | Memeriksa kapasitas ruang sisa di harddisk VPS |\n" +
            "| **Metrik RAM** | `free -m` | Memeriksa ketersediaan memori RAM |\n" +
            "| **Metrik CPU** | `htop` / `top` | Memantau proses yang memakan daya CPU tinggi |\n" +
            "| **DB Backup** | `pg_dump -U user db > backup.sql` | Membuang (*dump*) data PostgreSQL ke berkas SQL |\n" +
            "| **Evaluasi** | Budaya **Post-Mortem** | Laporan analisis insiden tanpa menyalahkan (*blameless*) |\n\n" +
            "---\n\n" +
            "## Analogi Dunia Nyata: Ruang Kontrol Kokpit Pesawat Terbang\n\n" +
            "Bayangkan menjalankan server produksi seperti menerbangkan pesawat komersial. **Log** adalah kotak hitam (*black box*) yang mencatat setiap peristiwa. **Uptime Monitoring** adalah alaram indikator ketinggian. **Sentry** adalah sistem peringatan dini kegagalan mesin, dan **Post-Mortem** adalah investigasi Komite Keselamatan Penerbangan setelah terjadi insiden untuk memastikan kesalahan serupa tidak pernah terulang.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Menyimpan Backup Database di VPS yang Sama:** Jika server VPS milikmu terbakar atau mengalami kerusakan disk total, file backup yang tersimpan di server yang sama akan **ikut hancur**. Selalu kirimkan backup ke penyimpanan luar (*offsite storage* seperti AWS S3 atau Cloudflare R2).\n" +
            "2. **Backup yang Belum Pernah Diuji Restore BUKANLAH Backup:** Banyak developer merasa aman karena memiliki skrip backup harian. Saat bencana terjadi, baru disadari bahwa file backup tersebut korup atau password kuncinya hilang. Selalu lakukan **uji simulasikan restore** secara berkala.\n" +
            "3. **Membiarkan Log Membengkak Tanpa Logrotate:** Log aplikasi dan Docker yang ditulis terus-menerus tanpa rotasi akan memenuhi ruang disk VPS hingga 100%. Disk penuh adalah penyebab nomor satu pembekuan database PostgreSQL/MySQL.\n" +
            "4. **Menyalahkan Individu saat Terjadi Insiden (Blaming Culture):** Saat server down, fokus utama Post-Mortem haruslah memperbaiki **kekurangan sistem atau otomatisasi** (*blameless post-mortem*), bukan mencari kambing hitam siapa yang salah menekan tombol.\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di dunia profesional, peran SRE (Site Reliability Engineer) dan On-Call Engineer bertanggung jawab menjaga persentase SLA (Service Level Agreement, misal 99.9% uptime). Mampu mengonfigurasi Sentry, membaca log Docker, mengatur backup terenkripsi, serta memimpin sesi Post-Mortem adalah nilai plus yang sangat dihargai oleh perusahaan tech modern.",
        },
        {
          kind: "step",
          id: "deploy-6-1",
          title: "Log Terstruktur & Membaca Log Produksi",
          explanation:
            "Log adalah sumber kebenaran utama saat menginvestigasi masalah di produksi. Saat aplikasi berjalan di dalam kontainer Docker, gunakan perintah `docker logs --tail 100 -f <container_name>` untuk membaca 100 baris log terakhir dan terus mengikuti baris log baru secara real-time. Disarankan menggunakan format JSON terstruktur pada log aplikasi agar mempermudah analisis.",
          example: {
            code: "docker logs --tail 100 -f myapp_web",
            output:
              '{"level":"info","time":"2026-07-28T10:00:01Z","msg":"HTTP GET /api/users 200 12ms"}\n' +
              '{"level":"error","time":"2026-07-28T10:00:05Z","msg":"Database connection timeout"}',
            note: "Flag --tail 100 mencegah terminal membeku akibat mencoba membaca ribuan baris log lama.",
          },
          instruction:
            "Tampilkan cuplikan rekaman riwayat log dari kontainer bernama `app`, terbatas hanya pada `100` baris terakhir.",
          starterCode: "# Tulis perintah docker logs di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+logs\\s+--tail\\s+100\\s+app$",
              message: "Gunakan: docker logs --tail 100 app",
            },
          ],
          solution: "docker logs --tail 100 app",
        },
        {
          kind: "step",
          id: "deploy-6-2",
          title: "Uptime Monitoring & Endpoint Health Check",
          explanation:
            "Layanan Uptime Monitoring (seperti UptimeRobot atau Better Stack) secara berkala (misal setiap 5 menit) memanggil endpoint khusus `/health` pada aplikasi web milikmu. Jika server mengembalikan status HTTP `200 OK`, server dianggap sehat. Jika server mati atau mengembalikan status 5xx, sistem monitoring akan otomatis mengirimkan notifikasi peringatan ke Telegram, Slack, atau SMS tim engineer.",
          example: {
            code:
              "// Express.js /health endpoint\n" +
              "app.get('/health', (req, res) => {\n" +
              "  res.status(200).json({ status: 'ok', uptime: process.uptime() });\n" +
              "});",
            output:
              "$ curl -i http://localhost:3000/health\n" +
              "HTTP/1.1 200 OK\n" +
              '{"status":"ok","uptime":3600}',
            note: "Endpoint /health sebaiknya juga mengecek apakah koneksi ke Database dan Redis masih aktif.",
          },
          instruction:
            "Tulis perintah `curl` dengan flag `-f` untuk menguji kesehatan endpoint `/health` pada server lokal port 3000.",
          starterCode: "# Tulis perintah curl di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "curl\\s+-f\\s+http://(localhost|127\\.0\\.0\\.1):3000/health$",
              message: "Gunakan: curl -f http://localhost:3000/health",
            },
          ],
          solution: "curl -f http://localhost:3000/health",
        },
        {
          kind: "step",
          id: "deploy-6-3",
          title: "Error Tracking dengan Sentry",
          explanation:
            "Sentry adalah platform pemantauan error otomatis untuk menangkap unhandled exception di lingkungan produksi. Begitu aplikasi mengalami crash, Sentry langsung menangkap stack trace lengkap, versi rilis, informasi browser/OS pengguna, dan mengirimkannya ke dashboard pengembang. Inisialisasi Sentry dilakukan di file utama aplikasi menggunakan kunci DSN.",
          example: {
            code:
              'import * as Sentry from "@sentry/node";\n\n' +
              'Sentry.init({\n' +
              '  dsn: "https://my-key@sentry.io/12345",\n' +
              '  tracesSampleRate: 1.0,\n' +
              '});',
            output:
              "[Sentry] Initialized successfully. Capturing unhandled errors...",
            note: "Sentry memangkas waktu investigasi bug produksi dari hitungan jam menjadi hitungan menit.",
          },
          instruction:
            "Panggil fungsi inisialisasi dari objek Sentry dan masukkan objek konfigurasi berisi key DSN bernilai string `'my-dsn'`.",
          starterCode: "// Tulis Sentry.init di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "Sentry\\.init\\(\\s*\\{\\s*dsn\\s*:\\s*['\"]my-dsn['\"]\\s*\\}\\s*\\);?$",
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
            "Server VPS memiliki batas kapasitas fisik untuk CPU, RAM, dan penyimpanan disk. Kehabisan ruang disk adalah penyebab nomor satu jatuhnya database di produksi. Gunakan perintah `df -h` (Disk Free dalam format human-readable) untuk memantau kapasitas penyimpanan harddisk, dan gunakan perintah `free -m` untuk memantau sisa kapasitas memori RAM server agar insiden disk penuh dapat dicegah.",
          example: {
            code: "df -h\nfree -m",
            output:
              "Filesystem      Size  Used Avail Use% Mounted on\n" +
              "/dev/sda1        25G   12G   13G  48% /\n" +
              "               total        used        free      shared  buff/cache   available\n" +
              "Mem:            2048         850         420          12         778        1050",
            note: "Flag -h membuat ukuran disk ditampilkan dalam unit GB/MB yang mudah dibaca manusia.",
          },
          instruction:
            "Tulis perintah Linux untuk memeriksa sisa ruang kapasitas disk dalam format human-readable (`df -h`).",
          starterCode: "# Tulis perintah df di sini\n",
          language: "text",
          tests: [
            {
              pattern: "df\\s+-h$",
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
            "Data pelanggan adalah aset paling berharga dalam aplikasi. Untuk database PostgreSQL, gunakan alat `pg_dump` untuk membuang seluruh skema dan isi tabel ke dalam satu berkas skrip SQL. Jadwalkan `pg_dump` secara harian via cron job dan unggah hasilnya ke cloud storage terpisah (seperti AWS S3). Jangan lupa melakukan latihan uji *restore* secara berkala!",
          example: {
            code: "pg_dump -U postgres -d mydb > backup_2026-07-28.sql",
            output:
              "$ ls -lh backup_2026-07-28.sql\n" +
              "-rw-r--r-- 1 ubuntu ubuntu 14M Jul 28 02:00 backup_2026-07-28.sql",
            note: "Selalu kirimkan berkas backup ke tempat penyimpanan luar (offsite storage) di luar VPS utama.",
          },
          instruction:
            "Tulis perintah command-line `pg_dump` untuk mem-backup database PostgreSQL bernama `mydb` milik user `postgres` ke dalam berkas `backup.sql` menggunakan operator redirect `>`.",
          starterCode: "# Tulis perintah pg_dump di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "pg_dump\\s+-U\\s+postgres\\s+(-d\\s+)?mydb\\s*>\\s*backup\\.sql$",
              message: "Gunakan: pg_dump -U postgres mydb > backup.sql",
            },
          ],
          solution: "pg_dump -U postgres mydb > backup.sql",
        },
        {
          kind: "step",
          id: "deploy-6-6",
          title: "Dokumen Post-Mortem Insiden Server",
          explanation:
            "Setiap kali terjadi insiden downtime atau kecelakaan server di produksi, tim perekayasa wajib menyusun dokumen **Post-Mortem**. Sesi Post-Mortem wajib berprinsip **Blameless** (tanpa menyalahkan individu), berfokus mencatat kronologi waktu, akar penyebab masalah (*root cause*), dan daftar tindakan pencegahan (*action items*) agar insiden serupa tidak pernah terulang.",
          example: {
            code:
              "# Post-Mortem: Outage 28 Juli 2026\n" +
              "- Durasi: 45 Menit (10:00 - 10:45 WIB)\n" +
              "- Akar Penyebab: Harddisk VPS penuh akibat berkas log Docker bengkak\n" +
              "- Tindakan Perbaikan: Mengonfigurasi logrotate dan memasang alert disk space di UptimeRobot",
            output:
              "Dokumen Post-Mortem dipublikasikan di wiki internal tim engineering.",
            note: "Post-Mortem yang baik memicu perbaikan otomatisasi dan daya tahan sistem secara jangka panjang.",
          },
          instruction:
            "Tuliskan perintah terminal untuk membaca dokumen catatan analisis evaluasi insiden bernama `postmortem.md` menggunakan `cat`.",
          starterCode: "# Tulis perintah cat postmortem di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "cat\\s+postmortem\\.md$",
              message: "Gunakan: cat postmortem.md",
            },
          ],
          solution: "cat postmortem.md",
        },
        {
          kind: "quiz",
          id: "deploy-6-kuis",
          title: "Kuis: Monitoring & Log",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Prinsip utama apa yang WAJIB dipegang saat menyusun dokumen Post-Mortem pasca terjadinya insiden server mati di produksi?",
              choices: [
                "A. Menghukum pengembang yang terakhir melakukan git commit",
                "B. Bersifat Blameless (tanpa menyalahkan individu) dan berfokus mencari akar masalah sistemik serta langkah pencegahan",
                "C. Menyembunyikan rincian kejadian dari seluruh tim engineering",
                "D. Memusnahkan seluruh berkas log lama",
              ],
              answerIndex: 1,
              explanation:
                "Sesi Post-Mortem yang sehat bersifat Blameless. Tujuannya bukan mencari siapa yang salah, melainkan memperbaiki kelemahan sistem dan proses otomatisasi agar masalah serupa tidak terulang.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Platform atau tool mana yang secara khusus difokuskan untuk menangkap crash exception JavaScript/Node.js di produksi beserta stack trace-nya?",
              choices: ["A. Sentry", "B. UptimeRobot", "C. Nginx", "D. Certbot"],
              answerIndex: 0,
              explanation:
                "Sentry secara otomatis menangkap exception crash yang tidak terduga pada aplikasi di produksi, melengkapinya dengan stack trace dan data environment untuk mempercepat pembenahan bug.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Mengapa menyimpan cadangan (backup) database HANYA di dalam disk VPS yang sama dianggap sebagai praktik yang sangat berbahaya?",
              choices: [
                "A. Karena memperlambat performa query SELECT",
                "B. Jika VPS mengalami kerusakan harddisk total atau terbakar, berkas backup yang ada di dalamnya ikut musnah",
                "C. Karena Docker tidak bisa membaca berkas .sql",
                "D. Karena Nginx memblokir berkas backup",
              ],
              answerIndex: 1,
              explanation:
                "Backup harus dikirimkan ke tempat penyimpanan terpisah (offsite backup, seperti S3 Object Storage) agar data tetap selamat meskipun server VPS utamanya hancur total.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Fungsi utama dari layanan Uptime Monitoring (seperti UptimeRobot) adalah...",
              choices: [
                "A. Mempercepat koneksi internet pelanggan",
                "B. Secara berkala memanggil endpoint `/health` dan mengirim notifikasi jika server tidak merespons (down)",
                "C. Mengedit berkas Dockerfile secara otomatis",
                "D. Menghapus log lama dari server",
              ],
              answerIndex: 1,
              explanation:
                "Uptime monitoring secara rutin mem-ping server atau memanggil rute `/health`. Jika server mati atau mengembalikan error, tim engineer langsung mendapat peringatan otomatis.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Perintah Linux dasar apa yang dipakai untuk memeriksa sisa ruang kapasitas harddisk VPS dalam format unit yang mudah dibaca manusia?",
              choices: ["A. free -m", "B. ps aux", "C. df -h", "D. htop"],
              answerIndex: 2,
              explanation:
                "Perintah `df -h` (Disk Free - Human readable) menampilkan ringkasan penggunaan dan sisa kapasitas penyimpanan di seluruh partisi berkas.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Mengapa petuah 'Backup yang belum pernah diuji coba proses restore-nya BUKANLAH backup yang valid' sangat relevan di dunia produksi?",
              choices: [
                "A. Karena file backup otomatis terhapus dalam 24 jam",
                "B. Karena tanpa uji coba restore secara berkala, kamu tidak tahu apakah file backup tersebut korup, tidak lengkap, atau gagal di-import saat bencana nyata terjadi",
                "C. Karena `pg_dump` hanya bekerja jika ada uji restore",
                "D. Karena Docker Compose melarang pembuatan backup",
              ],
              answerIndex: 1,
              explanation:
                "Banyak insiden tragis terjadi saat bencana server pulih, di mana tim mendapati file backup yang dikumpulkan berbulan-bulan ternyata kosong atau korup. Uji restore berkala memastikan prosedur pemulihan benar-benar bekerja.",
            },
          ],
        },
      ],
    },
  ],
};
