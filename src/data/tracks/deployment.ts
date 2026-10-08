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
          title: "Persiapan Environment, Instalasi Terminal, dan Sistem Operasi Server",
          body:
            "# Pengertian: Mengapa Server Produksi Menggunakan Linux?\n\n" +
            "Hampir 100% infrastruktur cloud modern (AWS, Google Cloud, DigitalOcean, Hetzner) menjalankan beban kerjanya di atas sistem operasi **Linux** (terutama distribusi Debian dan Ubuntu Server). Berbeda dengan laptop harianmu yang menggunakan antarmuka grafis (GUI) seperti Windows atau macOS dengan jendela klik, server produksi umumnya bersifat **headless** — artinya tidak memiliki monitor desktop, keyboard fisik, atau mouse.\n\n" +
            "Satu-satunya jembatan kendali antara developer dan server adalah **Terminal** (Command Line Interface / CLI). Melalui baris perintah teks, kamu mengunduh dependensi, menyalakan service, memeriksa log crash, mengatur firewall jaringan, hingga merilis versi aplikasi terbaru.\n\n" +
            "---\n\n" +
            "## Panduan Instalasi & Persiapan Environment (Berdasarkan OS)\n\n" +
            "Sebelum kamu mengelola server sungguhan di internet, kamu wajib memiliki lingkungan terminal Linux dan Docker di komputer lokalmu:\n\n" +
            "### 1. Pengguna Windows (Gunakan WSL 2)\n" +
            "- Buka **PowerShell as Administrator**, lalu ketik: `wsl --install -d Ubuntu`\n" +
            "- Restart komputer jika diminta, lalu buka aplikasi **Ubuntu** dari Start Menu dan tentukan username serta password barumu.\n" +
            "- Unduh dan instal **Docker Desktop for Windows**. Pada menu pengaturan (*Settings*), pastikan opsi **Use the WSL 2 based engine** tercentang.\n" +
            "- Verifikasi instalasi di terminal Ubuntu dengan perintah: `uname -a` dan `docker --version`.\n\n" +
            "### 2. Pengguna macOS\n" +
            "- macOS sudah berbasis UNIX (Darwin). Buka aplikasi bawaan **Terminal** atau instal **iTerm2**.\n" +
            "- Pasang Homebrew (package manager Mac) via terminal:\n" +
            "  ```bash\n" +
            '  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n' +
            "  ```\n" +
            "- Instal Docker Desktop for Mac (pilih varian Apple Silicon atau Intel), atau gunakan alternatif ringan berbasis CLI: `brew install colima docker && colima start`.\n\n" +
            "### 3. Pengguna Linux (Ubuntu/Debian)\n" +
            "- Buka terminal dan pasang Docker Engine resmi:\n" +
            "  ```bash\n" +
            "  sudo apt update && sudo apt install -y ca-certificates curl gnupg\n" +
            "  sudo install -m 0755 -d /etc/apt/keyrings\n" +
            "  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n" +
            "  sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n" +
            "  ```\n" +
            "- Tambahkan akun user-mu ke grup docker agar tidak perlu mengetik `sudo` setiap saat: `sudo usermod -aG docker $USER` (lalu relogin sesi).\n\n" +
            "### 4. Alternatif Sandbox Online Gratis (Tanpa Instalasi Laptop)\n" +
            "Jika laptopmu memiliki spesifikasi terbatas (RAM < 8GB), kamu bisa langsung berlatih menggunakan cloud playground gratis:\n" +
            "- **Play with Docker (PWD):** `labs.play-with-docker.com` (gratis environment Docker 4 jam per sesi langsung di browser).\n" +
            "- **GitHub Codespaces:** Menyediakan mesin Linux Ubuntu di cloud gratis 60 jam/bulan per akun GitHub.\n" +
            "- **Killercoda:** Lingkungan Linux headless interaktif untuk simulasi server dan Docker.\n\n" +
            "---\n\n" +
            "## Mental Model: Struktur Filesystem Linux vs Windows\n\n" +
            "Di Windows, partisi penyimpanan dipisahkan menjadi huruf drive terisolasi seperti `C:\\`, `D:\\`. Di Linux, seluruh direktori bermula dari satu akar tunggal yang disebut **root directory (`/`)**.\n\n" +
            "```text\n" +
            "/\n" +
            "├── bin/        ← Eksekutabel perintah sistem dasar (ls, cd, cp, cat)\n" +
            "├── etc/        ← Berkas konfigurasi sistem & service (nginx.conf, sshd_config)\n" +
            "├── home/       ← Direktori personal user biasa (/home/ubuntu, /home/deployer)\n" +
            "├── var/        ← Data dinamis yang sering berubah (/var/log, /var/www/html)\n" +
            "└── tmp/        ← Berkas sementara (otomatis dibersihkan saat server reboot)\n" +
            "```\n\n" +
            "### Jebakan Fatal: Jalur Absolut vs Jalur Relatif\n" +
            "- **Jalur Absolut:** Selalu diawali garis miring `/`. Menunjuk lokasi pasti dari akar sistem, misal `/var/www/html`. Dari direktori mana pun kamu berada, `cd /var/www/html` akan selalu berhasil.\n" +
            "- **Jalur Relatif:** Tidak diawali garis miring. Menunjuk lokasi berdasarkan posisi folder saat ini. Jika kamu berada di `/home/ubuntu`, mengetik `cd var/www` akan gagal dengan pesan eror *No such file or directory* karena sistem mencari `/home/ubuntu/var/www`.\n\n" +
            "---\n\n" +
            "## Editor Berkas di Terminal Headless: nano dan vim\n\n" +
            "Di server tanpa GUI, kamu tidak bisa mengklik dua kali file untuk membukanya di VS Code. Dua editor bawaan yang wajib kamu kuasai:\n\n" +
            "1. **nano (Ramah Pemula):**\n" +
            "   - Buka file: `nano config.env`\n" +
            "   - Simpan perubahan: Tekan `Ctrl + O`, lalu tekan `Enter`.\n" +
            "   - Keluar dari editor: Tekan `Ctrl + X`.\n" +
            "2. **vim (Standar Server):**\n" +
            "   - Buka file: `vim config.env`\n" +
            "   - Masuk mode ketik: Tekan tombol huruf `i` (Insert mode).\n" +
            "   - Simpan dan keluar: Tekan tombol `Esc`, ketik `:wq` (write & quit), lalu tekan `Enter`.\n\n" +
            "---\n\n" +
            "## Otentikasi Remote SSH Berbasis Kunci (Key-Based Authentication)\n\n" +
            "Di lingkungan industri, login ke server menggunakan password teks biasa dilarang karena rentan serangan brute-force. Standar industri menggunakan pasangan kunci kriptografi **SSH Keypair**:\n\n" +
            "```text\n" +
            "Laptop Developer (Private Key: ~/.ssh/id_ed25519) [RAHASIA - JANGAN DIBAGIKAN]\n" +
            "                  │\n" +
            "                  │ Mengirim tantangan enkripsi SSH\n" +
            "                  ▼\n" +
            "Server VPS (Public Key: ~/.ssh/authorized_keys)   [TERPASANG DI SERVER]\n" +
            "```\n\n" +
            "- Buat keypair di laptop: `ssh-keygen -t ed25519 -C \"dev@perusahaan.com\"`\n" +
            "- Kirim public key ke VPS: `ssh-copy-id deployer@203.0.113.195`\n" +
            "- Hubungkan koneksi: `ssh deployer@203.0.113.195`\n\n" +
            "---\n\n" +
            "## Tabel Rujukan Perintah Operasional Linux\n\n" +
            "| Kategori | Perintah | Fungsi Utama | Contoh Kasus Nyata |\n" +
            "|---|---|---|---|\n" +
            "| **Navigasi** | `pwd` | Menampilkan direktori kerja saat ini | `pwd` → `/var/www/html` |\n" +
            "| **Navigasi** | `ls -la` | Menampilkan seluruh isi folder beserta berkas hidden | `ls -la /var/log` |\n" +
            "| **Navigasi** | `cd` | Berpindah lokasi folder | `cd /var/www/html` |\n" +
            "| **Berkas** | `mkdir -p` | Membuat folder bertingkat tanpa eror jika sudah ada | `mkdir -p app/storage/logs` |\n" +
            "| **Berkas** | `cp` / `mv` | Menyalin (`cp`) atau memindahkan/rename (`mv`) berkas | `mv .env.example .env` |\n" +
            "| **Berkas** | `rm -rf` | Menghapus folder dan berkas secara rekursif | `rm -rf dist/` |\n" +
            "| **Berkas** | `cat` / `less` | Membaca isi berkas teks langsung di terminal | `less /var/log/nginx/error.log` |\n" +
            "| **Hak Akses** | `chmod` | Mengubah izin akses berkas (rwx / oktal) | `chmod 755 deploy.sh` |\n" +
            "| **Hak Akses** | `chown` | Mengubah kepemilikan user dan grup berkas | `sudo chown -R www-data:www-data /var/www` |\n" +
            "| **Hak Akses** | `sudo` | Menjalankan perintah dengan izin superuser (root) | `sudo systemctl restart nginx` |\n" +
            "| **Penyaring** | `|` & `grep` | Mengalirkan output perintah dan menyaring pola teks | `ps aux | grep node` |\n" +
            "| **Redirect** | `>` / `>>` | Mengalihkan output: timpa (`>`) vs tambahkan (`>>`) | `echo \"PORT=3000\" >> .env` |\n" +
            "| **Proses** | `ps aux` / `htop` | Memantau daftar proses aktif & konsumsi CPU/RAM | `htop` |\n" +
            "| **Proses** | `kill -9` | Menghentikan proses macet secara paksa berdasarkan PID | `kill -9 5678` |\n" +
            "| **Layanan** | `apt` | Package manager instalasi aplikasi Ubuntu/Debian | `sudo apt update && sudo apt install -y nginx` |\n" +
            "| **Layanan** | `systemctl` | Mengontrol status dan siklus hidup service latar belakang | `sudo systemctl status nginx` |\n\n" +
            "---\n\n" +
            "## Analogi Dunia Nyata: Sistem Operasi sebagai Gedung Perkantoran\n\n" +
            "Bayangkan server Linux sebagai gedung pencakar langit korporat. Root (`/`) adalah lobi utama gedung. Folder `/home` adalah ruangan kubikel karyawan biasa, sedangkan `/etc` adalah ruang kontrol panel listrik dan server gedung. Akun `sudo` adalah **master keycard** milik manajer fasilitas — hanya ditempelkan ke pintu saat perlu merombak instalasi gedung, bukan dipakai saat sekadar duduk mengetik laporan harian.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Tragedi Operator `>` vs `>>`:** Simbol `>` akan **menghapus bersih isi file lama** sebelum menuliskan teks baru, sedangkan `>>` menambahkan baris di akhir file (*append*). Mengetik `echo \"debug=true\" > /etc/nginx/nginx.conf` akan memusnahkan seluruh isi konfigurasi web servermu!\n" +
            "2. **Bahaya `rm -rf` Tanpa Konfirmasi:** Terminal Linux tidak memiliki fitur *Recycle Bin*. Menjalankan perintah hapus di direktori yang salah akan menghapus data secara permanen seketika.\n" +
            "3. **Kebiasaan Buruk Memberi `chmod 777`:** Saat menemui eror *Permission Denied*, pemula sering refleks mengetik `chmod -R 777`. Di server publik, ini adalah celah keamanan fatal karena semua orang dan skrip luar diizinkan menimpa berkas eksekutabel.\n" +
            "4. **Menyalakan UFW Sebelum Membuka Port SSH:** Menjalankan `sudo ufw enable` sebelum mengeksekusi `sudo ufw allow 22/tcp` akan memutuskan koneksi remote-mu dan mengunci akses ke server untuk selamanya!\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja & Technical Interview\n\n" +
            "Dalam technical assessment untuk posisi Backend Engineer, Fullstack, atau DevOps, penguasaan terminal Linux adalah syarat mutlak. Skenario interview yang sangat sering muncul:\n" +
            "- *\"Aplikasi kamu crash di server produksi dan mengembalikan HTTP 502, apa langkah pertamamu?\"* (Jawab: Buka terminal via SSH, baca log `/var/log/nginx/error.log`, periksa proses `ps aux | grep node`, dan cek sisa memori disk `df -h`).\n" +
            "- Menyiapkan VPS baru, mengelola izin folder upload, dan menyusun skrip shell otomasi.",
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
            "Kamu baru saja login ke server VPS dan perlu masuk ke direktori dokumen utama web server Nginx di `/var/www/html`. Tuliskan perintah untuk berpindah ke direktori absolut tersebut.",
          starterCode: "# Pindah ke direktori web server di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "cd\\s+/var/www/html/?$",
              message: "Perpindahan folder memakai `cd` diikuti jalurnya. Karena jalur diawali garis miring, ia bersifat ABSOLUT — berlaku dari mana pun kamu berada. Tanpa garis miring di depan, jalurnya dianggap relatif terhadap posisi sekarang dan biasanya gagal dengan `No such file or directory`.",
            },
          ],
          solution: "cd /var/www/html",
          susunKode: {
            question:
              "Susun perintah cd untuk berpindah ke direktori /var/www/html.",
            potongan: ["cd", "/var/www/html"],
            pengecoh: ["goto", "/usr/share/nginx"],
            pemisah: " ",
            explanation:
              "Perintah navigasi direktori di Linux/Unix menggunakan katakunci `cd` diikuti direktori target `/var/www/html`. Penggunaan kata 'goto' atau jalur lain seperti '/usr/share/nginx' adalah kesalahan perintah shell yang sering menggoda pembelajar.",
          },
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
            "Di dalam home directory server, siapkan sebuah direktori kerja baru bernama `project` untuk menampung kode aplikasi.",
          starterCode: "# Buat folder baru di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "mkdir\\s+(-p\\s+)?(\\./)?project/?$",
              message: "Pembuatan folder memakai `mkdir` diikuti namanya. Untuk folder bertingkat sekaligus, tambahkan flag `-p` — flag itu juga membuat perintahnya tidak error kalau foldernya sudah ada, dan itulah sebabnya skrip deploy selalu memakainya.",
            },
          ],
          solution: "mkdir project",
          susunKode: {
            question:
              "Susun perintah mkdir untuk membuat folder project baru.",
            potongan: ["mkdir", "project"],
            pengecoh: ["makedir", "folder_project"],
            pemisah: " ",
            explanation:
              "Perintah pembuatan direktori baru di lingkungan Linux/Unix adalah `mkdir nama_folder`. Sintaks 'makedir' atau mengganti nama direktori menjadi 'folder_project' adalah kekeliruan istilah shell CLI yang jebakan.",
          },
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
            "Skrip otomasi `script.sh` baru saja diunggah ke server. Berikan hak akses oktal agar pemilik berkas (owner) memiliki izin baca-tulis-eksekusi (rwx), sedangkan grup dan pengguna lainnya hanya memiliki izin baca dan eksekusi (r-x).",
          starterCode: "# Atur hak akses file di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "chmod\\s+755",
              message: "Hak akses diubah dengan `chmod` diikuti tiga angka: pemilik, grup, lainnya. Nilai 755 berarti pemilik boleh baca-tulis-eksekusi (7), sedangkan grup dan publik hanya baca-eksekusi (5) — pola standar untuk skrip yang boleh dijalankan siapa saja tapi hanya diubah pemiliknya.",
            },
            {
              pattern: "(\\./)?script\\.sh$",
              message: "Sebutkan berkas targetnya di akhir perintah. Hindari 777: itu berarti siapa pun di server boleh MENGUBAH berkasmu, dan pada server publik itu celah keamanan nyata.",
            },
          ],
          solution: "chmod 755 script.sh",
          susunKode: {
            question:
              "Susun perintah chmod 755 untuk memberikan izin eksekusi berkas script.sh.",
            potongan: ["chmod 755", "script.sh"],
            pengecoh: ["chmod 777", "script.py"],
            pemisah: " ",
            explanation:
              "Pengubahan hak akses berkas di Linux menggunakan `chmod 755 script.sh` agar berkas dapat dieksekusi tanpa membuka celah berbahaya 777. Keping `chmod 777` sangat menggoda pemula karena sering dianggap jalan pintas praktis untuk menyelesaikan masalah permission, tetapi itu keliru dan menjadi celah keamanan fatal di server produksi. Keping `script.py` adalah jebakan ekstensi file yang keliru karena target berkas kita adalah skrip shell script.sh.",
          },
        },
        {
          kind: "step",
          id: "deploy-1-4",
          title: "Pipe & Redirect (| , >, >>, grep)",
          explanation:
            "Kekuatan utama terminal Linux terletak pada kombinasi perintah. Operator pipe (`|`) mengalirkan output dari satu perintah menjadi input bagi perintah lain. Perintah `grep` menyaring baris teks yang cocok dengan kata kunci. Operator `>` mengalihkan output dan menimpa isi file tujuan, sedangkan `>>` menambahkan teks di baris paling bawah (append) tanpa menghapus isi lama.",
          example: {
            code: "grep '404' access.log",
            output:
              '192.168.1.50 - - [27/Jul/2026:10:00:23] "GET /api/user/99 HTTP/1.1" 404 142\n' +
              '10.0.0.12 - - [27/Jul/2026:10:01:05] "GET /favicon.ico HTTP/1.1" 404 209',
            note: "Perintah grep menyaring baris log HTTP yang memuat status eror 404.",
          },
          instruction:
            "Aplikasi backend mengalami kendala di produksi. Cari dan saring seluruh baris yang memuat teks `ERROR` pada berkas catatan `app.log`.",
          starterCode: "# Saring baris log error di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "grep\\s+['\"]?ERROR['\"]?",
              message: "Penyaringan baris memakai `grep` diikuti kata yang dicari. Bungkus dengan tanda kutip bila kata itu mengandung spasi atau karakter khusus.",
            },
            {
              pattern: "app\\.log$",
              message: "Berkas yang dibaca ditulis setelah pola pencariannya. Ingat `grep` peka huruf besar-kecil — tambahkan `-i` bila ingin `error` dan `ERROR` sama-sama tertangkap.",
            },
          ],
          solution: "grep 'ERROR' app.log",
          susunKode: {
            question:
              "Susun perintah grep untuk mencari teks ERROR di berkas app.log.",
            potongan: ["grep 'ERROR'", "app.log"],
            pengecoh: ["search 'ERROR'", "syslog.log"],
            pemisah: " ",
            explanation:
              "Pencarian pola teks di dalam berkas log Linux menggunakan utilitas `grep 'TEKS' nama_file`. Perintah fiktif 'search' atau menggunakan berkas `syslog.log` merupakan kekeliruan yang sering terjadi saat debugging.",
          },
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
              "ubuntu 1234 98.5 4.1 854320 42100 ? R 10:00 5:05 node server.js\n$ ",
            note: "Flag -9 mengirimkan sinyal SIGKILL untuk menghentikan proses yang tidak merespons.",
          },
          instruction:
            "Proses aplikasi Node.js dengan Process ID `5678` mengalami deadlock dan tidak merespons sinyal terminate biasa. Hentikan proses tersebut secara paksa menggunakan sinyal SIGKILL.",
          starterCode: "# Hentikan proses macet di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "kill\\s+-9",
              message: "Penghentian proses memakai `kill`. Flag `-9` mengirim SIGKILL yang tidak bisa ditolak — pakai ini sebagai jalan terakhir, karena proses tidak diberi kesempatan menutup koneksi database atau menyimpan pekerjaan. Coba `kill <pid>` (SIGTERM) lebih dulu.",
            },
            {
              pattern: "5678$",
              message: "Sebutkan PID prosesnya, yaitu angka yang kamu dapat dari `ps aux` atau `htop`.",
            },
          ],
          solution: "kill -9 5678",
          susunKode: {
            question:
              "Susun perintah kill -9 untuk menghentikan proses PID 5678 secara paksa.",
            potongan: ["kill -9", "5678"],
            pengecoh: ["stop -9", "9999"],
            pemisah: " ",
            explanation:
              "Perintah menghentikan proses secara paksa (SIGKILL) di Linux adalah `kill -9 PID`. Penggunaan kata 'stop' (bukan perintah pembunuh proses) atau nomor PID yang salah adalah kesalahan CLI yang sering keliru dan jebakan.",
          },
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
              "ubuntu@203.0.113.195:~$ \n" +
              "build.zip                     100%  2148KB   2.1MB/s   00:01",
            note: "Kunci SSH private (~/.ssh/id_rsa) tidak boleh dibagikan kepada siapa pun.",
          },
          instruction:
            "Lakukan koneksi remote shell terenkripsi ke server VPS sebagai pengguna `root` pada alamat IP `192.168.1.1`.",
          starterCode: "# Buka sesi SSH remote di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "ssh\\s+root@192\\.168\\.1\\.1$",
              message: "Koneksi remote memakai `ssh` diikuti `pengguna@host`. Untuk port tidak standar, tambahkan `-p <port>`. Catatan keamanan: login langsung sebagai `root` biasanya dimatikan di server produksi — yang dianjurkan membuat pengguna biasa lalu memakai `sudo`.",
            },
          ],
          solution: "ssh root@192.168.1.1",
          susunKode: {
            question:
              "Susun perintah SSH untuk masuk ke server remote root@192.168.1.1.",
            potongan: ["ssh", "root@192.168.1.1"],
            pengecoh: ["connect", "admin@10.0.0.1"],
            pemisah: " ",
            explanation:
              "Koneksi remote shell aman menggunakan protokol `ssh user@ip_address`. Kata 'connect' (bukan perintah CLI SSH) atau nama user 'admin'/'10.0.0.1' adalah bentuk kesalahan sintaksis yang sering membingungkan.",
          },
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
            "Periksa status operasional service web server `nginx` menggunakan controller systemd untuk memastikan layanannya aktif berjalan.",
          starterCode: "# Cek status service nginx di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "systemctl\\s+status",
              message: "Pengelola layanan pada Linux modern adalah `systemctl`, dan subperintah pemeriksa keadaannya `status`. Ia menampilkan aktif/mati sekaligus sepuluh baris log terakhir — tempat pertama yang dilihat saat layanan tidak jalan.",
            },
            {
              pattern: "nginx$",
              message: "Sebutkan nama layanannya di akhir. Perintah ini boleh tanpa `sudo`; yang butuh `sudo` adalah `start`, `stop`, dan `restart`.",
            },
          ],
          solution: "sudo systemctl status nginx",
          susunKode: {
            question:
              "Susun perintah systemctl untuk mengecek status service nginx.",
            potongan: ["sudo systemctl", "status nginx"],
            pengecoh: ["sudo service", "check nginx"],
            pemisah: " ",
            explanation:
              "Pemeriksaan status layanan sistem pada Linux berbasis systemd menggunakan `sudo systemctl status nginx`. Penggunaan klausa fiktif 'check nginx' atau sintaks lama 'service' adalah kekeliruan manajemen layanan.",
          },
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
            "Salah satu friksi terbesar dalam siklus rekayasa perangkat lunak adalah perbedaan environment antara laptop developer dan server produksi. Versi runtime yang berbeda (misal Node.js 18 di laptop vs Node.js 22 di server), pustaka sistem Linux (*glibc*) yang tidak cocok, atau konfigurasi lokal yang tertinggal sering kali membuat aplikasi berjalan mulus saat diuji coba oleh programmer, namun mendadak melempar eror saat dirilis ke server.\n\n" +
            "Sebelum era Docker, solusi yang digunakan adalah **Virtual Machine (VM)** (seperti VirtualBox atau VMware). Namun, VM sangat boros resource: setiap VM membutuhkan satu salinan kernel Guest OS utuh, mengonsumsi gigabytes RAM dan penyimpanan disk, serta membutuhkan waktu booting beberapa menit. **Docker** merevolusi industri dengan **kontainerisasi**: membungkus kode, runtime, dependensi, dan pustaka ke dalam unit terisolasi yang disebut **Container** yang berbagi kernel OS host secara langsung. Hasilnya, kontainer menyala dalam hitungan milidetik dan hanya berukuran megabytes!\n\n" +
            "---\n\n" +
            "## Mental Model: Docker Image vs Container vs Volume\n\n" +
            "Tiga konsep ini wajib dipahami secara tegas agar kamu tidak bingung:\n\n" +
            "- **Docker Image (Cetak Biru):** Template yang bersifat *read-only* (tidak bisa diubah). Berisi snapshot berkas sistem dan instruksi aplikasi. Diibaratkan sebagai **buku resep kue** atau **Class** pada pemrograman OOP.\n" +
            "- **Docker Container (Wujud Nyata):** Wujud eksekusi proses aktif yang diinstansiasi dari sebuah Image. Kontainer memiliki filesystem *ephemeral* (sementara) yang terisolasi. Diibaratkan sebagai **kue nyata** yang dipanggang dari resep tersebut atau **Object** hasil `new Class()`.\n" +
            "- **Docker Volume (Penyimpanan Persisten):** Ruang penyimpanan di luar kontainer pada sistem host. Diibaratkan sebagai **wadah toples kue**: jika kuenya dimakan atau dibuang (kontainer di-stop/dihapus), wadah penyimpanannya tetap utuh.\n\n" +
            "```text\n" +
            "Dockerfile (Resep Teks)\n" +
            "   │  (docker build)\n" +
            "   ▼\n" +
            "Docker Image (Cetak Biru Read-Only)\n" +
            "   │  (docker run -p 8080:3000)\n" +
            "   ├──► Container 1 (Host Port 8080 ──► App Port 3000)\n" +
            "   └──► Container 2 (Host Port 8081 ──► App Port 3000)\n" +
            "```\n\n" +
            "---\n\n" +
            "## Perbedaan Kritis: RUN vs CMD vs ENTRYPOINT\n\n" +
            "Ini adalah pertanyaan technical interview nomor satu seputar Dockerfile:\n\n" +
            "| Instruksi | Kapan Dieksekusi? | Tujuan Utama | Contoh Penggunaan |\n" +
            "|---|---|---|---|\n" +
            "| `RUN` | **Image Build Time** | Menjalankan perintah dan menyimpan hasilnya ke layer Image baru | `RUN npm ci` atau `RUN apt-get update` |\n" +
            '| `CMD` | **Container Runtime** | Perintah default saat kontainer dinyalakan. Bisa di-override mudah via CLI | `CMD ["node", "server.js"]` |\n' +
            '| `ENTRYPOINT` | **Container Runtime** | Perintah mutlak kontainer. Argumen dari `CMD` diteruskan ke sini | `ENTRYPOINT ["python"]` |\n\n' +
            "### Peringatan Keras: Exec Form vs Shell Form\n" +
            "Selalu gunakan format **Exec Form (JSON Array)** untuk `CMD`:\n" +
            '- ✅ **Exec Form:** `CMD ["node", "app.js"]`. Proses dijalankan langsung sebagai **PID 1**, sehingga sinyal shutdown OS (`SIGTERM`) dari `docker stop` langsung diterima aplikasi untuk graceful shutdown.\n' +
            '- ❌ **Shell Form:** `CMD node app.js`. Proses dibungkus oleh `/bin/sh -c`. Akibatnya, sinyal shutdown tertahan di shell, aplikasi tidak sempat menutup koneksi database, dan setelah timeout 10 detik Docker terpaksa membunuhnya secara paksa (`SIGKILL`).\n\n' +
            "---\n\n" +
            "## Pemetaan Port Host vs Container (`-p host:container`)\n\n" +
            "Di laptop, aplikasi di dalam kontainer berjalan di jaringan virtual terisolasi. Agar browser laptopmu bisa mengakses web server kontainer, kamu harus melakukan *port binding*:\n\n" +
            "```text\n" +
            "docker run -d -p 8080:3000 my-node-app\n" +
            "                ▲    ▲\n" +
            "                │    └────── Port internal di dalam container (aplikasi listen di 3000)\n" +
            "                └─────────── Port eksternal di laptop host (dibuka di http://localhost:8080)\n" +
            "```\n\n" +
            "---\n\n" +
            "## Siklus Hidup & Debugging Kontainer (Interactive Exec)\n\n" +
            "Saat aplikasi di dalam kontainer melempar eror atau tidak merespons, jangan menebak-nebak. Gunakan perintah investigasi berikut:\n\n" +
            "1. **Melihat status:** `docker ps` (kontainer aktif) dan `docker ps -a` (termasuk yang mati/exited dengan kode eror).\n" +
            "2. **Membaca log langsung:** `docker logs -f --tail 100 <container_name>` (flag `-f` untuk live streaming).\n" +
            "3. **Masuk ke dalam kontainer:** `docker exec -it <container_name> sh` (atau `bash`). Kamu masuk ke terminal di dalam kontainer untuk memeriksa berkas, koneksi database, atau variabel lingkungan.\n" +
            "4. **Membersihkan sampah disk:** `docker system prune -a` (menghapus kontainer mati dan cache layer tak terpakai agar disk laptop tidak penuh).\n\n" +
            "---\n\n" +
            "## Optimasi Layer Caching & Multi-Stage Build\n\n" +
            "Docker membangun image dari atas ke bawah. Setiap baris instruksi menghasilkan layer cache. Jika ada layer yang berubah, seluruh layer di bawahnya otomatis batal dan dibangun ulang dari awal:\n\n" +
            "```dockerfile\n" +
            "# Pola Efisien (Caching Bekerja Cepat):\n" +
            "COPY package*.json ./     # Layer ini hanya rebuild jika dependensi berubah\n" +
            "RUN npm ci\n" +
            "COPY . .                  # Kode sumber berubah tiap saat, tapi npm ci tidak diulang!\n" +
            "```\n\n" +
            "Dengan **Multi-stage Build**, kita memisahkan stage kompilasi berat (Node compiler, TypeScript) dengan stage akhir produksi (Alpine minimalis). Hasil build disalin dengan `COPY --from=builder /app/dist ./dist`. Ukuran image terpangkas drastis dari 1.2 GB menjadi hanya 65 MB!\n\n" +
            "---\n\n" +
            "## Keamanan Produksi: .dockerignore & User Non-Root\n\n" +
            "1. **Berkas `.dockerignore`:** Wajib mengecualikan `node_modules`, `.env`, `.git`, dan `dist`. Tanpa ini, folder dependensi lokal laptopmu akan ikut terkirim ke daemon build context.\n" +
            "2. **User Non-Root:** Secara default Docker menjalankan proses sebagai `root`. Di Dockerfile produksi, selalu tambahkan instruksi `USER node` (atau user terbatas) sebelum `CMD` agar peretas tidak mendapatkan akses root jika menemukan celah aplikasi.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Mengira Mengedit File di Kontainer Mengubah Image:** Perubahan yang kamu buat di dalam kontainer yang sedang berjalan akan hilang begitu kontainer dihapus. Image bersifat immutable.\n" +
            "2. **Menulis `COPY . .` Sebelum `RUN npm install`:** Kesalahan ini membuang cache Docker. Setiap kali kamu mengedit 1 baris kode CSS/JS, Docker terpaksa mengunduh ulang seluruh pustaka npm selama beberapa menit.\n" +
            "3. **Lupa Memberikan Volume untuk Database:** Menyimpan data database di sistem berkas kontainer biasa berakibat fatal: sekali kontainer dihapus (`docker rm`), seluruh data pelanggan hilang permanen.\n" +
            "4. **Tertukar Menulis Port Host dan Container:** Mengetik `-p 3000:8080` padahal server aplikasi mendengarkan di port 3000 membuat aplikasi tidak bisa dibuka di `localhost:3000`.\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja & Technical Interview\n\n" +
            "Hampir seluruh perusahaan teknologi global maupun startup Indonesia (Gojek, Tokopedia, Traveloka) mensyaratkan Docker. Dalam wawancara kerja, kamu sering diuji:\n" +
            "- *\"Bagaimana caramu mengoptimalkan waktu build Dockerfile di pipeline CI/CD?\"* (Jawab: Manfaatkan layer caching dependensi dan terapkan multi-stage build).\n" +
            "- *\"Kenapa data database di container hilang setelah server restart?\"* (Jawab: Karena tidak dipasang Docker Named Volume).",
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
            "Unduh image resmi web server Nginx dengan tag varian ringan `alpine` dari registry Docker Hub.",
          starterCode: "# Unduh image docker di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+pull",
              message: "Pengunduhan image dari registry memakai subperintah `pull`.",
            },
            {
              pattern: "nginx:alpine$",
              message: "Sebutkan nama image beserta tag-nya, dipisah titik dua. Selalu sebut tag secara eksplisit — tanpa itu Docker memakai `latest`, yang berarti isi image bisa berubah tanpa kamu ubah apa pun. Varian `alpine` dipilih karena ukurannya jauh lebih kecil.",
            },
          ],
          solution: "docker pull nginx:alpine",
          susunKode: {
            question:
              "Susun perintah docker pull untuk mengunduh image nginx:alpine.",
            potongan: ["docker pull", "nginx:alpine"],
            pengecoh: ["docker fetch", "nginx:latest_ver"],
            pemisah: " ",
            explanation:
              "Pengunduhan image Docker dari registri menggunakan perintah `docker pull nama_image:tag`. Penggunaan kata 'fetch' atau tag fiktif 'latest_ver' adalah bentuk kekeliruan CLI Docker yang sering mengelirukan.",
          },
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
            "Periksa dan tampilkan seluruh kontainer Docker yang sedang aktif berjalan di sistem saat ini.",
          starterCode: "# Tampilkan kontainer yang aktif di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+(container\\s+)?ps(\\s+-a)?$",
              message: "Daftar container yang SEDANG berjalan ditampilkan `docker ps`. Untuk melihat yang sudah mati juga (biasanya inilah yang kamu butuhkan saat container gagal menyala), tambahkan flag `-a`.",
            },
          ],
          solution: "docker ps",
          susunKode: {
            question:
              "Susun perintah docker ps untuk melihat kontainer yang aktif.",
            potongan: ["docker", "ps"],
            pengecoh: ["docker-cli", "list"],
            pemisah: " ",
            explanation:
              "Perintah untuk menampilkan daftar kontainer Docker yang sedang aktif berjalan adalah `docker ps`. Penggunaan kata 'list' atau CLI 'docker-cli' adalah bentuk istilah fiktif yang jebakan bagi pembelajar baru.",
          },
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
            "Tetapkan base image resmi Node.js versi 20 varian ringan alpine pada baris pertama berkas Dockerfile.",
          starterCode: "# Tentukan base image di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "FROM\\s+node:20-alpine$",
              message: "Baris pertama Dockerfile selalu instruksi `FROM` yang menyebut base image beserta tag versinya. Sebut versi Node secara eksplisit — memakai `node:latest` berarti build hari ini dan bulan depan bisa memakai versi Node yang berbeda, dan itu sumber \"kok tiba-tiba error di server\".",
            },
          ],
          solution: "FROM node:20-alpine",
          susunKode: {
            question:
              "Susun instruksi FROM node:20-alpine pada Dockerfile.",
            potongan: ["FROM", "node:20-alpine"],
            pengecoh: ["IMPORT", "node:ubuntu-slim"],
            pemisah: " ",
            explanation:
              "Instruksi awal Dockerfile untuk menentukan base image menggunakan katakunci `FROM`. Penggunaan kata 'IMPORT' atau varian image 'node:ubuntu-slim' yang bukan alpine adalah kesalahan sintaksis Dockerfile yang jebakan.",
          },
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
            "Salin berkas manifes `package.json` dan lockfile-nya ke direktori kerja saat ini menggunakan pola wildcard asterisk agar memanfaatkan layer caching secara optimal.",
          starterCode: "# Salin file manifes dependensi di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "COPY\\s+package.*\\.json\\s+\\./?$",
              message: "Kunci layer caching: salin dulu HANYA berkas manifest (`package.json` dan `package-lock.json`, bisa diwakili pola dengan tanda bintang) ke direktori kerja, jalankan `npm ci`, baru salin sisa kodenya. Kalau seluruh folder disalin lebih dulu, setiap perubahan satu baris kode membatalkan cache dan membuat dependency diunduh ulang.",
            },
          ],
          solution: "COPY package*.json ./",
          susunKode: {
            question:
              "Susun instruksi COPY package*.json ./ pada Dockerfile.",
            potongan: ["COPY package*.json", "./"],
            pengecoh: ["ADD package.json", "/tmp/"],
            pemisah: " ",
            explanation:
              "Menyalin file konfigurasi dependensi ke direktori kerja kontainer menggunakan `COPY package*.json ./`. Menyalin ke lokasi acak `/tmp/` atau melupakan wildcard `*` adalah kesalahan Dockerfile yang sering membingungkan.",
          },
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
            "Pada stage final multi-stage build, salin folder hasil kompilasi `/app/dist` dari stage bernama `builder` ke folder `./dist`.",
          starterCode: "# Salin artefak kompilasi dari builder di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "COPY\\s+--from=builder",
              message: "Pada multi-stage build, penyalinan dari tahap sebelumnya memakai flag `--from=` diikuti nama tahapnya (yang diberi lewat `AS builder`).",
            },
            {
              pattern: "/app/dist\\s+(\\./dist|/app/dist|\\.)$",
              message: "Sebutkan jalur sumber di tahap builder, lalu tujuannya di image akhir. Inilah yang membuat image produksi hanya berisi hasil build — tanpa devDependencies dan tanpa kode sumber, sehingga ukurannya bisa turun dari 1,2 GB ke puluhan MB.",
            },
          ],
          solution: "COPY --from=builder /app/dist ./dist",
          susunKode: {
            question:
              "Susun instruksi COPY dari stage builder ke direktori dist pada Dockerfile multi-stage.",
            potongan: ["COPY --from=builder", "/app/dist ./dist"],
            pengecoh: ["COPY --stage=builder", "/build/output ./dist"],
            pemisah: " ",
            explanation:
              "Penyalinan artefak hasil kompilasi dari stage sebelumnya pada multi-stage build Docker menggunakan `COPY --from=nama_stage path_asal path_tujuan`. Bendera `--stage` atau path fiktif adalah jebakan sintaks.",
          },
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
            "Jalankan kontainer MySQL di latar belakang (`-d`) dan pasang named volume `db_data` ke direktori data `/var/lib/mysql`.",
          starterCode: "# Jalankan kontainer dengan volume di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+run\\s.*-v\\s",
              message: "Data yang harus bertahan dipasang lewat flag `-v` (volume) pada `docker run`.",
            },
            {
              pattern: "db_data:/var/lib/mysql",
              message: "Formatnya `<nama-volume>:<jalur-di-dalam-container>`. Jalur di sisi kanan harus tepat folder tempat database menyimpan datanya. Tanpa volume, `docker rm` menghapus seluruh isi database — dan itu kehilangan yang tidak bisa dibatalkan.",
            },
          ],
          solution: "docker run -d -v db_data:/var/lib/mysql mysql",
          susunKode: {
            question:
              "Susun perintah docker run dengan volume db_data:/var/lib/mysql.",
            potongan: ["docker run -d -v", "db_data:/var/lib/mysql mysql"],
            pengecoh: ["docker exec -d -v", "db_data:/var/db/mysql mysql"],
            pemisah: " ",
            explanation:
              "Menjalankan kontainer baru dengan mounting volume persisten menggunakan `docker run -d -v nama_volume:path_tujuan nama_image`. Penggunaan `docker exec` (khusus perintah dalam kontainer aktif) atau path `/var/db/mysql` adalah kekeliruan fatal.",
          },
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
            "Di dalam berkas `.dockerignore`, tentukan nama direktori dependensi lokal Node.js agar tidak ikut tersalin ke dalam Docker image saat proses build.",
          starterCode: "# .dockerignore\n.git\n.env\n# Tuliskan direktori dependensi lokal yang harus diabaikan di bawah ini:\n",
          language: "text",
          tests: [
            {
              pattern: "node_modules/?$",
              message: "Isi `.dockerignore` dengan nama folder dependency yang tidak boleh ikut masuk image. Alasannya dua: ukurannya besar, dan isinya hasil kompilasi di sistem operasimu yang bisa tidak cocok dengan Linux di dalam container. Formatnya satu pola per baris, tanpa tanda kutip.",
            },
          ],
          solution: "node_modules",
          susunKode: {
            question:
              "Susun penulisan node_modules untuk berkas .dockerignore.",
            potongan: ["node_", "modules"],
            pengecoh: ["vendor_", "packages"],
            pemisah: "",
            explanation:
              "Folder dependensi lokal Node.js yang wajib dikecualikan agar tidak terikut dalam build context Docker adalah `node_modules` di berkas `.dockerignore`. Menulis 'vendor_packages' (istilah PHP) adalah jebakan.",
          },
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
            "Tambahkan instruksi pada Dockerfile untuk beralih ke akun pengguna non-root bawaan image bernama `node` demi keamanan.",
          starterCode: "FROM node:20-alpine\nWORKDIR /app\nCOPY --chown=node:node . .\n# Alihkan hak eksekusi ke user non-root di bawah ini sebelum CMD\n",
          language: "text",
          tests: [
            {
              pattern: "USER\\s+node$",
              message: "Instruksi `USER` mengganti pengguna yang menjalankan proses di dalam container. Tanpa itu, aplikasimu berjalan sebagai root — dan kalau ada celah, penyerang mendapat hak penuh di dalam container. Image resmi Node sudah menyediakan pengguna tak-berhak bernama sama dengan nama runtime-nya. Letakkan instruksi ini SETELAH semua operasi yang butuh hak tulis.",
            },
          ],
          solution: "USER node",
          susunKode: {
            question:
              "Susun instruksi USER node pada Dockerfile untuk keamanan non-root.",
            potongan: ["USER", "node"],
            pengecoh: ["SWITCH", "app_user"],
            pemisah: " ",
            explanation:
              "Mengubah konteks pengguna eksekusi di dalam Dockerfile demi keamanan non-root menggunakan instruksi `USER node`. Perintah fiktif 'SWITCH' atau nama pengguna 'app_user' mengelirukan pembelajar secara jebakan.",
          },
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
            "Aplikasi web modern di industri hampir tidak pernah berdiri sebagai satu service tunggal. Arsitektur backend standar biasanya membutuhkan minimal 3 komponen:\n" +
            "1. **Aplikasi Backend (Node.js/Express):** Melayani REST API atau GraphQL.\n" +
            "2. **Database Relasional (PostgreSQL):** Menyimpan data transaksi pelanggan secara persisten.\n" +
            "3. **In-Memory Cache (Redis):** Menyimpan sesi login (*session store*), rate limiting, dan antrean tugas background.\n\n" +
            "Jika kamu menjalankan ketiga service ini menggunakan perintah `docker run` biasa, kamu harus mengetikkan baris perintah terminal yang sangat panjang untuk setiap container, mengingat port mapping, membuat virtual network manual, dan mengingat urutan menyalakannya. Jika laptop di-restart, kamu harus mengulangi semuanya.\n\n" +
            "**Docker Compose** menyelesaikan kerumitan ini secara deklaratif. Cukup definisikan seluruh arsitektur multi-kontainer dalam satu berkas konfigurasi YAML bernama **`compose.yaml`** (atau `docker-compose.yml`). Dengan satu perintah `docker compose up -d`, seluruh stack aplikasimu akan menyala bersamaan!\n\n" +
            "---\n\n" +
            "## Mental Model: Internal DNS Network & 'The Localhost Trap'\n\n" +
            "Docker Compose otomatis membuatkan **Virtual Bridge Network** terisolasi untuk seluruh service yang terdaftar di dalam file. Setiap service secara otomatis didaftarkan ke server DNS internal Docker menggunakan **Nama Service sebagai Hostname**.\n\n" +
            "```text\n" +
            "                      [ Laptop Host / Browser ]\n" +
            "                                 │ (Akses http://localhost:3000)\n" +
            "                                 ▼\n" +
            "┌─────────────────────────────────────────────────────────────────┐\n" +
            "│ Docker Internal Network (app_default)                           │\n" +
            "│                                                                 │\n" +
            "│  ┌──────────────────┐   postgres://postgres:5432 ┌─────────────┐│\n" +
            "│  │  Service: 'app'  │ ─────────────────────────► │ Service:    ││\n" +
            "│  │  (Node.js API)   │                            │ 'postgres'  ││\n" +
            "│  └────────┬─────────┘                            └─────────────┘│\n" +
            "│           │ redis://redis:6379                                  │\n" +
            "│           ▼                                                     │\n" +
            "│  ┌──────────────────┐                                           │\n" +
            "│  │  Service: 'redis'│                                           │\n" +
            "│  └──────────────────┘                                           │\n" +
            "└─────────────────────────────────────────────────────────────────┘\n" +
            "```\n\n" +
            "### Jebakan Terbesar Pemula: Localhost di Dalam Container\n" +
            "- **Miskonsepsi:** Di file `.env` aplikasi, pemula menulis `DATABASE_URL=postgres://user:pass@localhost:5432/mydb`.\n" +
            "- **Fakta:** Di dalam container `app`, kata `localhost` merujuk ke **container app itu sendiri**, bukan ke laptop host dan bukan ke container database! Karena di dalam container app tidak ada engine PostgreSQL yang berjalan di port 5432, aplikasi langsung crash dengan eror `ECONNREFUSED`.\n" +
            "- **Solusi Benar:** Gunakan nama service Compose sebagai hostname: `postgres://user:pass@postgres:5432/mydb`.\n\n" +
            "---\n\n" +
            "## Anatomi File `compose.yaml`\n\n" +
            "| Kata Kunci | Fungsi Utama | Contoh Penggunaan |\n" +
            "|---|---|---|\n" +
            "| `services:` | Wadah utama tempat mendaftarkan seluruh kontainer | `services:` |\n" +
            "| `build:` | Membangun image dari Dockerfile lokal | `build: .` |\n" +
            "| `image:` | Menggunakan image siap pakai dari Docker Hub | `image: postgres:16-alpine` |\n" +
            "| `ports:` | Memetakan port `host:container` | `- '3000:3000'` |\n" +
            "| `environment:` | Menyuntikkan variabel lingkungan secara eksplisit | `- DB_HOST=postgres` |\n" +
            "| `env_file:` | Membaca berkas variabel lingkungan lokal | `env_file: .env` |\n" +
            "| `volumes:` | Melampirkan volume persisten atau bind mount | `- db_data:/var/lib/postgresql/data` |\n" +
            "| `depends_on:` | Mengatur urutan penyalaan antar service | `depends_on: [postgres]` |\n" +
            "| `restart:` | Kebijakan menyalakan ulang saat crash | `restart: unless-stopped` |\n" +
            '| `healthcheck:` | Menguji kesiapan operasional kontainer secara berkala | `test: ["CMD", "pg_isready"]` |\n\n' +
            "---\n\n" +
            "## Startup Order & Healthcheck Sebenarnya\n\n" +
            "Banyak developer pemula mengira menuliskan `depends_on: [postgres]` sudah menjamin aplikasi aman terhubung ke database. Padahal, `depends_on` standar hanya menunggu kontainer `postgres` berstatus *Started* (proses sistem Linux-nya berjalan), padahal engine database PostgreSQL membutuhkan waktu 3–5 detik untuk membaca disk dan membuka socket port 5432.\n\n" +
            "Akibatnya, aplikasi `app` menyala terlalu cepat, mencoba koneksi, dan langsung crash loop. Solusi standar industri adalah menggabungkan dengan **Healthcheck**:\n\n" +
            "```yaml\n" +
            "services:\n" +
            "  postgres:\n" +
            "    image: postgres:16-alpine\n" +
            "    healthcheck:\n" +
            '      test: ["CMD-SHELL", "pg_isready -U postgres"]\n' +
            "      interval: 5s\n" +
            "      retries: 5\n" +
            "  app:\n" +
            "    build: .\n" +
            "    depends_on:\n" +
            "      postgres:\n" +
            "        condition: service_healthy\n" +
            "```\n\n" +
            "---\n\n" +
            "## Perbedaan Setup: Development vs Production\n\n" +
            "1. **Lingkungan Development (`compose.yaml`):**\n" +
            "   - Menggunakan **bind mount** (`volumes: ['./:/app']`) agar saat kamu mengedit file di VS Code laptop, aplikasi di kontainer otomatis memuat ulang (*hot-reload*).\n" +
            "   - Port database (5432) dan Redis (6379) sering di-expose ke host (`ports: ['5432:5432']`) agar developer bisa membuka GUI Database Viewer (seperti DBeaver atau TablePlus).\n" +
            "2. **Lingkungan Production (`compose.prod.yaml`):**\n" +
            "   - **DILARANG memakai bind mount.** Aplikasi harus menggunakan image ter-build statis yang aman dan immutable.\n" +
            "   - **Port database TIDAK BOLEH di-expose ke host.** Database hanya boleh diakses di internal Docker Network oleh service backend.\n\n" +
            "---\n\n" +
            "## Analogi Dunia Nyata: Konduktor Orkestra Musik\n\n" +
            "Bayangkan arsitektur aplikasimu sebagai kelompok orkestra simfoni. Service `app` adalah penyanyi solo, `postgres` adalah pemain piano, dan `redis` adalah pemain drum. Tanpa konduktor, setiap musisi datang dan mulai bernyanyi sembarangan sebelum piano siap ditala. Docker Compose adalah **konduktor orkestra** yang memberi aba-aba agar piano dan drum siap dan berada di posisi yang tepat (`healthcheck`) sebelum penyanyi mulai bernyanyi.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Menuliskan `localhost` untuk Memanggil Container Lain:** Selalu gunakan nama service Compose (misal `postgres:5432` atau `redis:6379`).\n" +
            "2. **Meng-commit Berkas `.env` ke Git:** Berkas `.env` memuat kredensial sensitif. Selalu masukkan `.env` ke dalam `.gitignore`, dan sediakan `.env.example` dengan nilai dummy untuk panduan tim.\n" +
            "3. **Sensitivitas Format Spasi YAML:** Format YAML mengharamkan karakter Tab. Gunakan 2 spasi konsisten per level indentasi.\n" +
            "4. **Menjalankan `docker compose down -v` di Server Produksi:** Flag `-v` akan **menghapus volume persisten database**! Di produksi, cukup jalankan `docker compose down` tanpa flag `-v`.\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja & Standar Tim Modern\n\n" +
            "Di perusahaan teknologi terkemuka, file `compose.yaml` adalah standar emas onboarding tim rekayasa. Ketika seorang software engineer baru bergabung ke tim di hari pertama, ia tidak perlu membuang waktu 2 hari menginstal PostgreSQL, Redis, dan dependensi lokal. Cukup:\n" +
            "```bash\n" +
            "git clone <repo>\n" +
            "cp .env.example .env\n" +
            "docker compose up -d\n" +
            "```\n" +
            "Seluruh lingkungan kerja siap digunakan dalam hitungan menit.",
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
            "Jalankan seluruh service multi-kontainer yang terdefinisi pada compose di latar belakang (detached mode).",
          starterCode: "# Nyalakan seluruh stack di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker[- ]compose\\s+up\\s+-d$",
              message: "Seluruh stack dinyalakan dengan `docker compose up`. Flag `-d` (detached) melepasnya ke latar belakang sehingga terminalmu bebas — tanpa flag itu, menutup terminal ikut mematikan stack. Perhatikan: bentuk modern memakai spasi (`docker compose`), bentuk lama memakai tanda hubung.",
            },
          ],
          solution: "docker compose up -d",
          susunKode: {
            question:
              "Susun perintah docker compose up -d untuk menjalankan layanan di background.",
            potongan: ["docker compose", "up -d"],
            pengecoh: ["docker-stack", "start -d"],
            pemisah: " ",
            explanation:
              "Menjalankan seluruh layanan pada berkas docker-compose.yml secara detached di background menggunakan `docker compose up -d`. Perintah `start` atau `docker-stack` tidak melakukan build atau penyiapan kontainer baru dan jebakan.",
          },
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
            "Suntikkan nilai variabel lingkungan `DATABASE_URL` dari file .env ke dalam konfigurasi compose menggunakan sintaks interpolasi shell.",
          starterCode: "services:\n  api:\n    environment:\n      - DATABASE_URL=# Tulis sintaks interpolasi variabel di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$\\{DATABASE_URL\\}",
              message: "Nilai dari `.env` dirujuk di compose dengan bentuk `${NAMA_VARIABEL}`. Kurung kurawal wajib. Dengan cara ini berkas compose bisa ikut ke repo, sementara nilai rahasianya tinggal di `.env` yang tidak di-commit.",
            },
          ],
          solution: "${DATABASE_URL}",
          susunKode: {
            question:
              "Susun interpolasi variabel lingkungan DATABASE_URL di Docker Compose.",
            potongan: ["${", "DATABASE_URL", "}"],
            pengecoh: ["$(", "DB_CONN_STR", ")"],
            pemisah: "",
            explanation:
              "Interpolasi variabel lingkungan pada file Docker Compose menggunakan sintaks `${NAMA_VARIABEL}`. Penggunaan tanda kurung biasa `$()` (sintaks subshell command execution) adalah kekeliruan sintaksis YAML/Compose.",
          },
        },
        {
          kind: "step",
          id: "deploy-3-3",
          title: "Pengamanan Rahasia (Docker Secrets)",
          explanation:
            "Untuk tingkat keamanan yang lebih tinggi di lingkungan produksi atau Swarm, gunakan fitur **Docker Secrets**. Daripada menyebar file `.env` di server, Secrets membaca berkas rahasia (seperti `./db_password.txt`) dan menyuntikkannya langsung ke memori in-memory container (`/run/secrets/`). Cara ini mencegah password terekspos saat seseorang menjalankan perintah `docker inspect`.",
          example: {
            code:
              "secrets:\n  db_password:\n    file: ./db_password.txt\n\n" +
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
            "Konfigurasikan Docker secret bernama db_password pada file compose agar mengambil nilai dari berkas lokal `./db_password.txt`.",
          starterCode: "secrets:\n  db_password:\n    # Tentukan sumber file secret di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "file:\\s*\\./?db_password\\.txt$",
              message: "Gunakan properti file menunjuk ke ./db_password.txt",
            },
          ],
          solution: "file: ./db_password.txt",
          susunKode: {
            question:
              "Susun pengkonfigurasian secrets file: ./db_password.txt di Docker Compose.",
            potongan: ["file:", "./db_password.txt"],
            pengecoh: ["path:", "/etc/secrets/db_password.txt"],
            pemisah: " ",
            explanation:
              "Mendefinisikan lokasi berkas rahasia di Docker Compose secrets menggunakan properti `file: ./path_file`. Penggunaan properti fiktif `path:` atau lokasi absolut luar adalah kesalahan konfigurasi yang keliru.",
          },
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
            "Tetapkan kebijakan restart pada service aplikasi agar selalu otomatis dinyalakan kembali saat crash atau reboot, kecuali jika sengaja dihentikan oleh admin.",
          starterCode: "services:\n  web:\n    # Tulis kebijakan restart di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "restart:\\s*['\"]?unless-stopped['\"]?$",
              message: "Kebijakan restart diatur lewat kunci `restart`. Nilai yang dipakai di produksi adalah yang membuat container selalu naik lagi setelah crash ATAU setelah server reboot, kecuali kamu sendiri yang menghentikannya. Nilai `always` mirip tapi ia juga menyalakan ulang container yang sengaja kamu stop.",
            },
          ],
          solution: "restart: unless-stopped",
          susunKode: {
            question:
              "Susun kebijakan restart: unless-stopped pada Docker Compose.",
            potongan: ["restart:", "unless-stopped"],
            pengecoh: ["restart_policy:", "always-except-stop"],
            pemisah: " ",
            explanation:
              "Kebijakan restart kontainer di Docker Compose menggunakan `restart: unless-stopped` agar kontainer otomatis menyala kembali kecuali dihentikan manual. Nama opsi 'always-except-stop' adalah kesalahan atribut yang jebakan.",
          },
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
            "Konfigurasikan service in-memory cache pada compose agar menggunakan base image resmi `redis` dengan tag varian `alpine`.",
          starterCode: "services:\n  cache:\n    # Tentukan image redis alpine di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "image:\\s*['\"]?redis:alpine['\"]?$",
              message: "Sebuah service yang memakai image siap pakai cukup menyebut kunci `image` beserta nama dan tag-nya. Untuk cache/session, varian ringan `alpine` sudah cukup. Bandingkan dengan service aplikasimu sendiri yang memakai `build:` karena image-nya dibangun dari Dockerfile.",
            },
          ],
          solution: "image: redis:alpine",
          susunKode: {
            question:
              "Susun pendefinisian image: redis:alpine di Docker Compose.",
            potongan: ["image:", "redis:alpine"],
            pengecoh: ["container:", "redis:latest-build"],
            pemisah: " ",
            explanation:
              "Penetapan image yang digunakan oleh suatu service di Docker Compose menggunakan sintaks `image: nama:tag`. Atribut fiktif 'container' atau tag 'latest-build' adalah bentuk kekeliruan YAML Compose yang jebakan.",
          },
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
            "Hentikan dan bersihkan seluruh kontainer beserta virtual network yang dibuat oleh Docker Compose.",
          starterCode: "# Hentikan dan bersihkan stack di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker[- ]compose\\s+down$",
              message: "Stack dihentikan sekaligus dibersihkan (container dan network-nya) dengan subperintah `down`. Bedanya dengan `stop`: `stop` hanya mematikan, `down` juga menghapus container-nya. Volume TIDAK ikut terhapus kecuali kamu menambahkan `-v` — dan flag itu yang harus kamu hindari di server produksi.",
            },
          ],
          solution: "docker compose down",
          susunKode: {
            question:
              "Susun perintah docker compose down untuk menghentikan seluruh layanan.",
            potongan: ["docker compose", "down"],
            pengecoh: ["docker-down", "stop_all"],
            pemisah: " ",
            explanation:
              "Menghentikan dan menghapus kontainer, network, serta volume sementara yang dibuat Docker Compose dilakukan dengan perintah `docker compose down`. Sintaks 'stop_all' atau 'docker-down' adalah istilah fiktif yang keliru.",
          },
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
            "**VPS (Virtual Private Server)** adalah komputer server virtual berbasis cloud (disediakan oleh penyedia seperti DigitalOcean, AWS EC2, Hetzner, Linode, atau Biznet Gio) yang beroperasi 24 jam nonstop dengan alamat **IP Publik statis**.\n\n" +
            "Berbeda dengan platform PaaS (seperti Vercel atau Render) yang menyembunyikan infrastruktur dasar, menyewa VPS memberi kamu kendali penuh sebagai superuser (`root`). Kamu bertanggung jawab penuh atas keamanan sistem operasi, penataan firewall, konfigurasi web server reverse proxy (**Nginx**), pengalihan nama domain (**DNS A Record**), dan sertifikat keamanan terenkripsi (**HTTPS SSL/TLS**). Biaya VPS umumnya sangat flat dan murah (mulai dari $4–$5 per bulan) untuk beban kerja backend dan database yang berjalan terus-menerus.\n\n" +
            "---\n\n" +
            "## Standar Industri: Linux VPS Hardening dari Nol\n\n" +
            "Saat pertama kali menerima server VPS baru, server tersebut dalam kondisi rentan terhadap serangan otomatis (*bot brute-force*). Lakukan 4 tahapan hardening wajib:\n\n" +
            "1. **Pembaruan Sistem Operasi:**\n" +
            "   ```bash\n" +
            "   sudo apt update && sudo apt upgrade -y\n" +
            "   ```\n" +
            "2. **Membuat User Non-Root Khusus Deploy:**\n" +
            "   Jangan pernah mengoperasikan aplikasi sehari-hari sebagai user `root`:\n" +
            "   ```bash\n" +
            "   adduser deployer\n" +
            "   usermod -aG sudo deployer\n" +
            "   ```\n" +
            "3. **Memasang Kunci SSH & Mematikan Password Login:**\n" +
            "   Salin public key komputermu ke `/home/deployer/.ssh/authorized_keys`. Lalu buka `/etc/ssh/sshd_config` dan ubah:\n" +
            "   ```text\n" +
            "   PasswordAuthentication no\n" +
            "   PermitRootLogin no\n" +
            "   ```\n" +
            "   Muat ulang service SSH: `sudo systemctl restart ssh`. Kini penyerang tidak bisa menebak password servermu!\n" +
            "4. **Mengunci Port dengan UFW Firewall:**\n" +
            "   Hanya buka port yang benar-benar esensial:\n" +
            "   ```bash\n" +
            "   sudo ufw allow 22/tcp   # Port SSH (WAJIB di-allow sebelum enable!)\n" +
            "   sudo ufw allow 80/tcp   # Port HTTP Nginx\n" +
            "   sudo ufw allow 443/tcp  # Port HTTPS SSL Nginx\n" +
            "   sudo ufw enable\n" +
            "   ```\n\n" +
            "---\n\n" +
            "## Mental Model: Arsitektur Nginx Reverse Proxy Produksi\n\n" +
            "Dalam arsitektur produksi, kontainer aplikasi (port 3000) dan database (port 5432) **TIDAK PERNAH terekspos langsung ke internet publik**. **Nginx** dipasang di pintu depan server sebagai **Reverse Proxy**.\n\n" +
            "```text\n" +
            "Pengguna Internet (Browser)\n" +
            "       │\n" +
            "       │  HTTPS Request (https://domainku.com:443)\n" +
            "       ▼\n" +
            "┌─────────────────────────────────────────────────────────────┐\n" +
            "│ Server VPS (IP Publik: 203.0.113.195)                        │\n" +
            "│                                                             │\n" +
            "│  UFW Firewall (Port 22, 80, 443 terbuka)                    │\n" +
            "│       │\n" +
            "│       ▼\n" +
            "│  Nginx Reverse Proxy (SSL Termination / Certbot)            │\n" +
            "│       │\n" +
            "│       │  proxy_pass http://127.0.0.1:3000                   │\n" +
            "│       ▼\n" +
            "│  Docker Container (App Node.js Listening di Port 3000)      │\n" +
            "│       │ (Jaringan Internal Docker)\n" +
            "│       ▼\n" +
            "│  Docker Container (Postgres Database di Port 5432 Terisolasi)│\n" +
            "└─────────────────────────────────────────────────────────────┘\n" +
            "```\n\n" +
            "---\n\n" +
            "## Anatomi Blok Konfigurasi Nginx Server\n\n" +
            "Berkas konfigurasi diletakkan di `/etc/nginx/sites-available/app.conf` dan di-link ke `sites-enabled/`:\n\n" +
            "```nginx\n" +
            "server {\n" +
            "    listen 80;\n" +
            "    server_name myapp.com www.myapp.com;\n" +
            "\n" +
            "    location / {\n" +
            "        proxy_pass http://127.0.0.1:3000;\n" +
            "        proxy_http_version 1.1;\n" +
            "\n" +
            "        # Meneruskan info identitas asli pengunjung ke Node.js:\n" +
            "        proxy_set_header Host $host;\n" +
            "        proxy_set_header X-Real-IP $remote_addr;\n" +
            "        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n" +
            "        proxy_set_header X-Forwarded-Proto $scheme;\n" +
            "\n" +
            "        # Dukungan WebSocket (Realtime Socket.io / Next.js HMR):\n" +
            "        proxy_set_header Upgrade $http_upgrade;\n" +
            '        proxy_set_header Connection "upgrade";\n' +
            "    }\n" +
            "}\n" +
            "```\n" +
            "Uji keabsahan sintaks sebelum menerapkan: `sudo nginx -t`.\n\n" +
            "---\n\n" +
            "## Domain, DNS Propagasi, dan HTTPS SSL Otomatis\n\n" +
            "1. **DNS A Record:** Di dashboard penyedia domain (Cloudflare, Namecheap, Niagahoster), buat record:\n" +
            "   - **Type:** `A`\n" +
            "   - **Name:** `@` (atau subdomain `api`)\n" +
            "   - **Value:** IP Publik VPS (misal `203.0.113.195`)\n" +
            "   - **TTL:** Auto (atau 300 detik)\n" +
            "2. **Cek Propagasi:** Di terminal lokal, ketik `dig +short myapp.com` atau `ping myapp.com`. Pastikan responnya sudah mengembalikan IP VPS milikmu sebelum melangkah ke tahap SSL!\n" +
            "3. **Certbot (Let's Encrypt SSL):** Jalankan satu perintah sakti:\n" +
            "   ```bash\n" +
            "   sudo certbot --nginx -d myapp.com -d www.myapp.com\n" +
            "   ```\n" +
            "   Certbot akan otomatis memverifikasi kepemilikan domain via HTTP ACME challenge, mengunduh sertifikat SSL gratis, memperbarui konfigurasi Nginx menjadi HTTPS port 443, dan mengatur auto-redirect dari HTTP ke HTTPS.\n\n" +
            "---\n\n" +
            "## Zero-Downtime Deployment & Rollback Manual\n\n" +
            "- **Reload vs Restart Nginx:** Selalu gunakan `sudo systemctl reload nginx`. Perintah `reload` memuat konfigurasi baru secara *graceful* di latar belakang tanpa memutus sambungan pengunjung yang sedang aktif bertransaksi di website. Perintah `restart` mematikan proses sejenak sehingga pengunjung mendapat layar putih/eror connection refused.\n" +
            "- **Alur Rilis Ulang Aplikasi:**\n" +
            "  ```bash\n" +
            "  git pull origin main\n" +
            "  docker compose pull\n" +
            "  docker compose up -d --no-deps --build app\n" +
            "  ```\n" +
            "- **Rollback Cepat:** Jika rilis baru memiliki bug kritis yang meloloskan eror di produksi, jangan panik. Rollback ke tag image versi sebelumnya: ubah tag di `compose.yaml` menjadi image lama (misal `app:v1.2.0`), lalu jalankan `docker compose up -d app`.\n\n" +
            "---\n\n" +
            "## Analogi Dunia Nyata: Resepsionis Gedung & Paspor Kredensial\n\n" +
            "Bayangkan server VPS sebagai gedung kantor kedutaan besar. **UFW Firewall** adalah pos satpam gerbang depan. **Nginx** adalah **resepsionis lobi utama**. Tamu luar tidak diizinkan masuk ke ruang brankas (database port 5432). Tamu hanya berbicara dengan resepsionis di lobi (port 80/443). Resepsionis memvalidasi keaslian paspor tamu (**Sertifikat SSL Let's Encrypt**), lalu menyambungkan pembicaraan via interkom internal ke staf divisi aplikasi di lantai 30 (port 3000).\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Mengekspos Port Database ke Publik:** Menulis `ports: ['5432:5432']` di compose VPS membuat port PostgreSQL terbuka ke seluruh dunia. Ribuan bot peretas otomatis mem-brute force password database tiap detiknya.\n" +
            "2. **Menjalankan Certbot Sebelum DNS Selesai Propagasi:** Jika domain belum mengarah ke IP VPS saat Certbot dipanggil, Let's Encrypt gagal memvalidasi domain. Jika dicoba berulang-ulang, IP VPS kamu akan terkena *rate limit penalty* selama 1 minggu!\n" +
            "3. **Lupa `proxy_set_header Host $host`:** Tanpa header ini, aplikasi Express/Next.js di kontainer mengira alamat servernya adalah `127.0.0.1:3000`. Fitur redirect autentikasi dan pembuatan cookie sesi akan rusak total.\n" +
            "4. **Menggunakan `restart` Nginx di Jam Ramai:** Menggunakan restart memutus ribuan sesi HTTP pengunjung yang sedang aktif.\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja & Standar DevOps\n\n" +
            "Mampu menyiapkan server VPS dari kondisi kosongan sampai aplikasi live dengan HTTPS terenkripsi adalah garis pemisah antara developer junior yang hanya bisa 'ngoding di laptop' dan engineer profesional yang siap bertanggung jawab atas rilis produksi perusahaan.",
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
            "Buka port lalu lintas masuk untuk protokol HTTP standar (`80/tcp`) pada firewall UFW server VPS.",
          starterCode: "# Izinkan port HTTP di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "ufw\\s+allow",
              message: "Firewall bawaan Ubuntu diatur dengan `ufw`, dan subperintah pengizinnya `allow`.",
            },
            {
              pattern: "80(/tcp)?$",
              message: "Sebutkan port yang dibuka; boleh ditambah protokolnya setelah garis miring. Urutan aman saat menyalakan firewall: izinkan dulu SSH (22), baru `ufw enable` — kalau terbalik, kamu terkunci di luar servermu sendiri.",
            },
          ],
          solution: "sudo ufw allow 80/tcp",
          susunKode: {
            question:
              "Susun perintah ufw allow 80/tcp untuk membuka port HTTP.",
            potongan: ["sudo ufw allow", "80/tcp"],
            pengecoh: ["sudo firewall-cmd allow", "9090/tcp"],
            pemisah: " ",
            explanation:
              "Membuka port lalu lintas masuk pada firewall Uncomplicated Firewall (UFW) Ubuntu menggunakan `sudo ufw allow 80/tcp`. Penggunaan CLI 'firewall-cmd' atau port '9090/tcp' adalah kekeliruan istilah CLI firewall yang jebakan.",
          },
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
            "Unduh repository kode aplikasi dari alamat `https://github.com/user/app.git` ke server VPS.",
          starterCode: "# Clone repositori di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+clone",
              message: "Kode diambil ke server dengan `git clone` diikuti URL repositorinya.",
            },
            {
              pattern: "https://github\\.com/user/app\\.git$",
              message: "Untuk server, URL HTTPS lebih praktis pada repo publik. Untuk repo privat, siapkan deploy key lalu pakai URL SSH — jangan menyimpan token di riwayat perintah server.",
            },
          ],
          solution: "git clone https://github.com/user/app.git",
          susunKode: {
            question:
              "Susun perintah git clone repositori aplikasi ke VPS.",
            potongan: ["git clone", "https://github.com/user/app.git"],
            pengecoh: ["git pull-repo", "https://github.com/user/repository.git"],
            pemisah: " ",
            explanation:
              "Mengunduh salinan repositori Git awal ke server VPS menggunakan `git clone URL`. Penggunaan perintah fiktif 'git pull-repo' atau pergantian nama repositori adalah jebakan istilah Git CLI yang sering mengelirukan.",
          },
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
            "Di dalam blok `location /` Nginx, teruskan setiap permintaan pengunjung ke alamat internal loopback pada port `3000`.",
          starterCode: "  location / {\n    # Teruskan request ke aplikasi internal di bawah ini\n  }\n",
          language: "text",
          tests: [
            {
              pattern: "proxy_pass\\s+http://(127\\.0\\.0\\.1|localhost):3000;?$",
              message: "Penerusan permintaan di Nginx memakai direktif `proxy_pass` diikuti alamat aplikasimu, dan diakhiri titik koma seperti semua direktif Nginx. Arahkan ke localhost, bukan ke IP publik server — aplikasi Node sebaiknya hanya mendengarkan dari dalam, dan hanya Nginx yang menghadap internet.",
            },
          ],
          solution: "proxy_pass http://127.0.0.1:3000;",
          susunKode: {
            question:
              "Susun arahan proxy_pass Nginx ke server lokal port 3000.",
            potongan: ["proxy_pass", "http://127.0.0.1:3000;"],
            pengecoh: ["reverse_proxy", "tcp://127.0.0.1:3000;"],
            pemisah: " ",
            explanation:
              "Pengarahan lalu lintas HTTP reverse proxy Nginx ke aplikasi lokal menggunakan arahan `proxy_pass http://127.0.0.1:3000;`. Penggunaan 'reverse_proxy' (sintaks server Caddy) atau 'tcp://' adalah kesalahan Nginx yang jebakan.",
          },
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
            "Tuliskan baris konfigurasi DNS record bertipe `A` yang memetakan domain `example.com.` ke alamat IPv4 publik server `203.0.113.195`.",
          starterCode: "; Konfigurasi DNS Zone\n; Tulis A record di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(example\\.com\\.?|@)\\s+(IN\\s+)?A\\s+203\\.0\\.113\\.195$",
              message: "Satu baris DNS berisi nama, jenis record, dan nilainya. Untuk mengarahkan domain ke sebuah alamat IPv4, jenis record-nya `A` (untuk IPv6 namanya `AAAA`). Perubahan DNS tidak instan — ia menyebar mengikuti nilai TTL, jadi jangan menyimpulkan setelan salah dalam lima menit pertama.",
            },
          ],
          solution: "example.com. IN A 203.0.113.195",
          susunKode: {
            question:
              "Susun rekaman DNS A Record untuk memetakan domain ke IP server.",
            potongan: ["example.com.", "IN A", "203.0.113.195"],
            pengecoh: ["site.org.", "TYPE A", "127.0.0.1"],
            pemisah: " ",
            explanation:
              "Penulisan DNS record tipe A untuk mengarahkan nama domain ke IP publik VPS menggunakan format `domain. IN A IP_Address`. Kata 'TYPE A' atau IP loopback '127.0.0.1' adalah kekeliruan konfigurasi DNS yang jebakan.",
          },
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
            "Gunakan Certbot dengan plugin Nginx untuk menerbitkan dan memasang sertifikat SSL Let's Encrypt secara otomatis pada domain `myapp.com`.",
          starterCode: "# Terbitkan sertifikat SSL otomatis di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "certbot\\s+--nginx",
              message: "Sertifikat gratis Let's Encrypt diminta dengan `certbot`. Flag `--nginx` membuatnya sekaligus menyunting konfigurasi Nginx dan memasang pengalihan ke HTTPS.",
            },
            {
              pattern: "-d\\s+myapp\\.com$",
              message: "Domain yang disertifikasi disebut lewat flag `-d` (boleh diulang untuk beberapa domain). Prasyaratnya: DNS domain itu sudah menunjuk ke server ini, karena Let's Encrypt memverifikasi lewat HTTP. Pembaruan otomatis sudah dipasang certbot lewat timer systemd.",
            },
          ],
          solution: "sudo certbot --nginx -d myapp.com",
          susunKode: {
            question:
              "Susun perintah certbot --nginx untuk mengkonfigurasi SSL.",
            potongan: ["sudo certbot --nginx", "-d myapp.com"],
            pengecoh: ["sudo letsencrypt-cli", "--domain myapp.com"],
            pemisah: " ",
            explanation:
              "Pemasangan sertifikat SSL Let's Encrypt secara otomatis untuk Nginx menggunakan client `sudo certbot --nginx -d domain`. Nama CLI 'letsencrypt-cli' atau bendera `--domain` adalah kekeliruan perintah yang sering membingungkan.",
          },
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
            "Muat ulang konfigurasi web server Nginx secara graceful tanpa memutus koneksi pengguna aktif menggunakan controller systemd.",
          starterCode: "# Muat ulang konfigurasi Nginx di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "systemctl\\s+reload\\s+nginx$",
              message: "Setelah mengubah konfigurasi, pakai `reload` — ia memuat ulang konfigurasi tanpa memutus koneksi yang sedang berjalan. `restart` mematikan lalu menyalakan, dan itu berarti beberapa detik pengunjung mendapat error. Biasakan menjalankan `nginx -t` lebih dulu untuk memeriksa sintaksnya.",
            },
          ],
          solution: "sudo systemctl reload nginx",
          susunKode: {
            question:
              "Susun perintah systemctl reload nginx untuk memuat ulang konfigurasi Nginx.",
            potongan: ["sudo systemctl", "reload nginx"],
            pengecoh: ["sudo service", "refresh nginx"],
            pemisah: " ",
            explanation:
              "Menerapkan perubahan file konfigurasi Nginx tanpa memutuskan koneksi pengguna yang sedang aktif menggunakan `sudo systemctl reload nginx`. Penggunaan kata 'refresh' adalah kekeliruan istilah yang sering keliru.",
          },
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
            "# Pengertian: Mengapa CI/CD Menjadi Standar Mutlak Industri?\n\n" +
            "Di masa lalu, proses rilis perangkat lunak dilakukan secara manual dan menegangkan: programmer menguji kode di komputernya, meng-compile build secara lokal, lalu mengunggah berkas zip ke server produksi melalui FTP atau SCP tengah malam. Praktik manual ini sangat berbahaya karena dipenuhi **Human Error** (misal: developer lupa menjalankan tes, dependensi lokal tertinggal, atau salah menimpa file konfigurasi di server).\n\n" +
            "**CI/CD (Continuous Integration & Continuous Deployment)** adalah metodologi rekayasa modern yang mengotomatiskan seluruh alur verifikasi dan pengiriman kode dari repository Git ke server produksi tanpa campur tangan manusia:\n\n" +
            "- **Continuous Integration (CI):** Setiap kali developer melakukan `git push` atau membuka **Pull Request (PR)**, server otomatis (*runner*) akan membuat lingkungan pengujian bersih, menginstal dependensi (`npm ci`), menjalankan linter, dan mengeksekusi rangkaian automated unit/integration test. Jika ada satu tes saja yang gagal, PR ditolak secara otomatis.\n" +
            "- **Continuous Deployment (CD):** Begitu PR disetujui (*merged*) ke cabang utama (`main`), pipeline CD otomatis memicu build Docker Image, mengunggah image ke registry, dan memperbarui kontainer di server produksi tanpa downtime.\n\n" +
            "---\n\n" +
            "## PaaS (Vercel/Railway) vs VPS (IaaS): Kapan Memilih yang Mana?\n\n" +
            "Sebagai software engineer profesional, kamu harus tahu kapan harus memilih PaaS dan kapan harus mengelola VPS sendiri:\n\n" +
            "| Parameter | PaaS (Vercel / Railway / Render) | VPS (DigitalOcean / AWS EC2 / Hetzner) |\n" +
            "|---|---|---||\n" +
            "| **Setup Awal** | Instan (Tinggal klik sambungkan GitHub) | Manual (Install OS, Docker, UFW, Nginx, SSL) |\n" +
            "| **Beban Operasional** | Nol (Serverless / Managed by platform) | Mandiri (Wajib pantau disk, memory, patching security) |\n" +
            "| **Preview URL** | Otomatis ada URL unik per Pull Request | Harus dikonfigurasi sendiri dengan subdomain dinamis |\n" +
            "| **Struktur Biaya** | Berbasis pemakaian (Bisa melonjak saat trafik tinggi) | Flat dan terprediksi ($4–$20/bulan terlepas dari trafik) |\n" +
            "| **Kesesuaian Use Case**| Frontend, Next.js/React, MVP produk baru, prototipe | Backend berat, WebSocket 24/7, Redis cache, database |\n\n" +
            "---\n\n" +
            "## Mental Model: Arsitektur Pipeline GitHub Actions\n\n" +
            "Di GitHub, alur CI/CD dikonfigurasi dalam berkas YAML di folder **`.github/workflows/`** (misal `deploy.yml`):\n\n" +
            "```text\n" +
            "Developer Push Kode / Merge ke Main Branch\n" +
            "                    │\n" +
            "                    ▼\n" +
            "GitHub Actions Runner (VM Ubuntu Bersih di Cloud)\n" +
            "  ├── 1. Checkout Repository (actions/checkout@v4)\n" +
            "  ├── 2. Setup Node.js (actions/setup-node@v4)\n" +
            "  ├── 3. Install Dependensi Bersih (npm ci)              ◄── [Tahap CI]\n" +
            "  ├── 4. Jalankan Linter & Unit Test (npm test)          ◄── [Tahap CI]\n" +
            "  ├── 5. Login ke Container Registry (ghcr.io / Docker Hub)    │\n" +
            "  ├── 6. Build & Push Docker Image Tagged (commit-sha)         │ [Tahap CD]\n" +
            "  └── 7. SSH ke VPS & Eksekusi 'docker compose up -d'    ◄─────┘\n" +
            "```\n\n" +
            "---\n\n" +
            "## Anatomi Berkas Workflow YAML Lengkap\n\n" +
            "```yaml\n" +
            "name: CI/CD Pipeline\n" +
            "on:\n" +
            "  push:\n" +
            "    branches: [main]\n" +
            "  pull_request:\n" +
            "    branches: [main]\n" +
            "\n" +
            "jobs:\n" +
            "  test:\n" +
            "    runs-on: ubuntu-latest\n" +
            "    steps:\n" +
            "      - uses: actions/checkout@v4\n" +
            "      - uses: actions/setup-node@v4\n" +
            "        with:\n" +
            "          node-version: 20\n" +
            "          cache: 'npm'\n" +
            "      - run: npm ci\n" +
            "      - run: npm test\n" +
            "\n" +
            "  deploy:\n" +
            "    needs: test\n" +
            "    if: github.ref == 'refs/heads/main'\n" +
            "    runs-on: ubuntu-latest\n" +
            "    steps:\n" +
            "      - uses: appleboy/ssh-action@v1\n" +
            "        with:\n" +
            "          host: ${{ secrets.VPS_HOST }}\n" +
            "          username: deployer\n" +
            "          key: ${{ secrets.SSH_PRIVATE_KEY }}\n" +
            "          script: |\n" +
            "            cd /var/www/app\n" +
            "            git pull origin main\n" +
            "            docker compose up -d --build\n" +
            "```\n\n" +
            "---\n\n" +
            "## Manajemen Rahasia (Secrets) & Masking Sensor Otomatis\n\n" +
            "Jangan pernah menuliskan SSH Private Key, password database, atau API token secara polos di file YAML workflow. Siapa pun yang memiliki akses baca ke repository dapat mencuri kredensialmu.\n\n" +
            "1. Buka menu **Settings > Secrets and variables > Actions** di repository GitHub milikmu.\n" +
            "2. Buat secret baru (misal `SSH_PRIVATE_KEY`, `VPS_HOST`).\n" +
            "3. Panggil secret di workflow menggunakan sintaks ekspresi: `${{ secrets.NAMA_SECRET }}`.\n" +
            "4. **Masking Otomatis:** GitHub Runner secara cerdas menyamarkan seluruh nilai secret menjadi `***` pada log tampilan rilis, sehingga kredensial aman dari intipan tim luar.\n\n" +
            "---\n\n" +
            "## Mengapa Wajib Memakai `npm ci` di Lingkungan CI Runner?\n\n" +
            "- `npm install` dapat memperbarui file `package-lock.json` secara diam-diam dan mengunduh versi patch minor paket yang berbeda jika terdapat simbol caret (`^`).\n" +
            "- `npm ci` (*Clean Install*) bekerja secara deterministik: ia menghapus folder `node_modules` lama dan mengunduh dependensi **tepat sesuai hash dan versi yang terkunci di package-lock.json**. Jika lockfile tidak sinkron dengan `package.json`, `npm ci` langsung melempar eror.\n\n" +
            "---\n\n" +
            "## Analogi Dunia Nyata: Ban Berjalan Pabrik Otomotif\n\n" +
            "Bayangkan merakit mobil di pabrik modern. **CI** adalah pemindai sensor otomatis di sepanjang ban berjalan yang memeriksa apakah setiap baut terpasang kencang dan rem berfungsi normal. Jika ada satu baut longgar, alarm berbunyi dan ban berjalan berhenti (Pull Request gagal dimerge). **CD** adalah robot otomatis yang mengecat mobil yang telah lolos uji kendali mutu, mengisinya dengan bahan bakar, dan mengirimkannya ke dealer tanpa perlu didorong manual oleh montir.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Menjalankan Job Deployment di Event `pull_request`:** Jangan pernah mendeploy saat PR dibuat! Pasang selalu filter kondisional `if: github.ref == 'refs/heads/main'` agar tahap rilis hanya berjalan saat kode sudah sah dimerge ke cabang utama.\n" +
            "2. **Menyimpan Kredensial Produksi di Git Commit:** Menuliskan secret langsung di file teks repositori adalah penyebab nomor satu pembobolan database dan tagihan cloud AWS membengkak.\n" +
            "3. **Tidak Menetapkan Batas Waktu (`timeout-minutes`):** Jika salah satu unit test mengalami infinite loop, runner GitHub Actions akan terus menyala berjam-jam dan menghabiskan kuota gratis bulanan akunmu.\n" +
            "4. **Menggunakan `npm install` alih-alih `npm ci`:** Mengakibatkan hasil build di CI tidak identik dengan lingkungan komputer lokal developer.\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja & Budaya Agile Modern\n\n" +
            "Di industri software berskala besar, developer melakukan *deploy* puluhan kali dalam sehari. Budaya ini hanya bisa terwujud jika pipeline CI/CD sudah matang. Memahami struktur GitHub Actions, runner caching, dan manajemen secret adalah keterampilan wajib yang dicari oleh setiap tim rekayasa perangkat lunak modern.",
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
            "Publikasikan aplikasi web secara langsung ke lingkungan produksi menggunakan perintah CLI Vercel.",
          starterCode: "# Deploy ke production di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "vercel\\s+--prod$",
              message: "CLI Vercel men-deploy ke lingkungan produksi bila diberi flag `--prod`. Tanpa flag itu, yang dibuat deployment preview dengan URL sendiri. Inilah inti PaaS: kamu tidak mengurus server, hanya menyerahkan kode.",
            },
          ],
          solution: "vercel --prod",
          susunKode: {
            question:
              "Susun perintah Vercel CLI vercel --prod untuk rilis produksi.",
            potongan: ["vercel", "--prod"],
            pengecoh: ["vercel-deploy", "--production"],
            pemisah: " ",
            explanation:
              "Mempublikasikan aplikasi web langsung ke lingkungan produksi pada Vercel CLI menggunakan perintah `vercel --prod`. Penggunaan bendera panjang `--production` atau CLI 'vercel-deploy' adalah kesalahan yang keliru.",
          },
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
            "Konfigurasikan baris pemicu `on:` pada file workflow GitHub Actions agar berjalan otomatis saat ada event `push` maupun `pull_request`.",
          starterCode: "name: CI Workflow\n# Tentukan pemicu event di bawah ini:\n",
          language: "text",
          tests: [
            {
              pattern: "on:\\s*\\[\\s*push\\s*,\\s*pull_request\\s*\\]$",
              message: "Bagian `on:` menentukan kejadian pemicu workflow, dan beberapa pemicu ditulis sebagai array YAML di dalam kurung siku dipisah koma. Dua pemicu paling umum: setiap dorongan commit, dan setiap Pull Request — yang kedua itulah yang membuat test berjalan sebelum kode di-merge.",
            },
          ],
          solution: "on: [push, pull_request]",
          susunKode: {
            question:
              "Susun event pemicu push dan pull_request di GitHub Actions.",
            potongan: ["on:", "[push, pull_request]"],
            pengecoh: ["trigger:", "[commit, merge_request]"],
            pemisah: " ",
            explanation:
              "Penentu event pemicu eksekusi workflow GitHub Actions menggunakan blok `on: [push, pull_request]`. Penggunaan nama event 'commit' atau 'merge_request' (istilah GitLab CI) adalah jebakan antar-CI yang sering keliru.",
          },
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
            "Tambahkan satu item step pada job CI yang mengeksekusi skrip automated test bawaan (`npm test`).",
          starterCode: "    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci\n      # Tambahkan step eksekusi pengujian di bawah ini:\n",
          language: "text",
          tests: [
            {
              pattern: "-\\s+run:",
              message: "Satu langkah yang menjalankan perintah shell ditulis sebagai item daftar YAML dengan kunci `run:`. Perhatikan tanda hubung dan spasi sesudahnya — indentasi YAML tidak boleh memakai tab.",
            },
            {
              pattern: "npm\\s+test$",
              message: "Isi dengan perintah pengujian proyeknya. Di CI, biasanya didahului langkah `npm ci` (bukan `npm install`) supaya versi paket persis mengikuti lockfile.",
            },
          ],
          solution: "- run: npm test",
          susunKode: {
            question:
              "Susun step workflow - run: npm test di GitHub Actions.",
            potongan: ["- run:", "npm test"],
            pengecoh: ["- exec:", "npm run testing"],
            pemisah: " ",
            explanation:
              "Menjalankan perintah terminal di dalam step GitHub Actions workflow menggunakan instruksi `- run: perintah`. Menggantikan kata `run` dengan `exec` adalah kesalahan sintaksis YAML workflow yang sering keliru.",
          },
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
            "Tambahkan klausa kondisional `if:` pada job deployment agar hanya dieksekusi apabila referensi branch merujuk tepat ke `refs/heads/main`.",
          starterCode: "  deploy:\n    needs: test\n    # Tambahkan filter cabang main di bawah ini:\n    runs-on: ubuntu-latest\n",
          language: "text",
          tests: [
            {
              pattern: "if:\\s*github\\.ref",
              message: "Sebuah langkah dijalankan bersyarat lewat kunci `if:`, dan konteks yang berisi referensi git saat ini adalah `github.ref`.",
            },
            {
              pattern: "['\"]refs/heads/main['\"]$",
              message: "Bandingkan dengan referensi branch utama dalam bentuk lengkapnya (`refs/heads/<branch>`), bukan hanya nama branch-nya. Tanpa syarat ini, setiap Pull Request akan ikut men-deploy ke produksi.",
            },
          ],
          solution: "if: github.ref == 'refs/heads/main'",
          susunKode: {
            question:
              "Susun kondisi filter cabang utama refs/heads/main di GitHub Actions.",
            potongan: ["if: github.ref ==", "'refs/heads/main'"],
            pengecoh: ["when: branch ==", "'main_branch'"],
            pemisah: " ",
            explanation:
              "Kondisi eksekusi job GitHub Actions membatasi branch utama menggunakan `if: github.ref == 'refs/heads/main'`. Kata 'when:' atau nama branch 'main_branch' adalah jebakan istilah CI lain yang sering membingungkan pembelajar.",
          },
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
            "Panggil variabel rahasia bernama `DEPLOY_KEY` dari vault repository menggunakan sintaks ekspresi interpolasi rahasia GitHub Actions.",
          starterCode: "      with:\n        key: # Sisipkan ekspresi rahasia DEPLOY_KEY di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$\\{\\{\\s*secrets\\.DEPLOY_KEY\\s*\\}\\}$",
              message: "Nilai rahasia di GitHub Actions dibaca lewat konteks `secrets` di dalam kurung kurawal ganda. Nilainya disimpan di Settings → Secrets, tidak pernah muncul di log (GitHub menyensornya otomatis), dan tidak tersedia untuk Pull Request dari fork — itu sengaja, supaya orang luar tidak bisa mencuri kredensialmu lewat PR.",
            },
          ],
          solution: "${{ secrets.DEPLOY_KEY }}",
          susunKode: {
            question:
              "Susun interpolasi rahasia DEPLOY_KEY di GitHub Actions.",
            potongan: ["${{", "secrets.DEPLOY_KEY", "}}"],
            pengecoh: ["${", "env.DEPLOY_KEY", "}$"],
            pemisah: "",
            explanation:
              "Membaca variabel rahasia (repository secrets) pada GitHub Actions menggunakan ekspresi interpolasi `${{ secrets.NAMA_SECRET }}`. Penggunaan tanda `${` tanpa kurawal ganda adalah kekeliruan sintaks yang sering keliru.",
          },
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
            "Buat deployment pratinjau (preview environment) menggunakan CLI Vercel untuk menguji perubahan tampilan sebelum rilis utama.",
          starterCode: "# Deploy ke preview environment di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "vercel\\s+--preview$",
              message: "Setiap Pull Request idealnya punya URL sendiri agar reviewer bisa mencoba hasilnya, bukan hanya membaca diff. CLI Vercel membuatnya dengan flag `--preview` (dan itu perilaku default-nya tanpa `--prod`).",
            },
          ],
          solution: "vercel --preview",
          susunKode: {
            question:
              "Susun perintah Vercel CLI vercel --preview untuk lingkungan pratinjau.",
            potongan: ["vercel", "--preview"],
            pengecoh: ["vercel-cli", "--staging"],
            pemisah: " ",
            explanation:
              "Mempublikasikan aplikasi ke lingkungan pratinjau (preview environment) menggunakan perintah `vercel --preview`. Penggunaan bendera `--staging` atau nama CLI 'vercel-cli' adalah kekeliruan yang keliru.",
          },
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
            "# Pengertian: Mengapa Monitoring Sangat Penting di Industri?\n\n" +
            "Tahap *deployment* bukanlah akhir dari tanggung jawab seorang software engineer, melainkan awal dari fase operasional produksi (*Day 2 Operations*). Di lingkungan nyata, hal-hal buruk pasti akan terjadi cepat atau lambat: memori server bocor (*memory leak*), harddisk tersumbat catatan log, koneksi database mencapai batas pool, atau API pihak ketiga mati mendadak.\n\n" +
            "Prinsip utama dari **Monitoring & Observability** adalah: **Tim engineering harus mengetahui adanya masalah dan memperbaikinya sebelum pengguna membuat komplain di media sosial.** Modul ini membahas 4 pilar utama operasional server produksi modern:\n\n" +
            "1. **Structured Log Management:** Membaca dan menganalisis rekaman transaksi aplikasi.\n" +
            "2. **Uptime & Health Checking:** Memantau ketersediaan sistem 24/7 dengan notifikasi instan.\n" +
            "3. **Real-time Error Tracking (Sentry):** Menangkap exception crash lengkap dengan stack trace dan konteks pengguna.\n" +
            "4. **Disaster Recovery & Database Backup Drill:** Menyelamatkan data bisnis saat server fisik rusak total.\n\n" +
            "---\n\n" +
            "## Mental Model: Ekosistem Pemantauan Server Produksi\n\n" +
            "```text\n" +
            "                                ┌─────────────────────────────────┐\n" +
            "                                │ Uptime Monitoring (UptimeRobot) │\n" +
            "                                │ Ping Endpoint /health (tiap 1m) │\n" +
            "                                └────────────────┬────────────────┘\n" +
            "                                                 │ (Alert ke Telegram/Slack jika Down)\n" +
            "                                                 ▼\n" +
            "┌─────────────────────────┐            ┌─────────────────────────┐\n" +
            "│  Pengguna / Client Web  │ ─────────► │  Server VPS / Container │\n" +
            "└─────────────────────────┘            └────────────┬────────────┘\n" +
            "                                                    │\n" +
            "                ┌───────────────────────────────────┼──────────────────────────────────┐\n" +
            "                │ (Crash Exception)                 │ (Log Transaksi Terstruktur)      │ (Jadwal Otomasi Backup)\n" +
            "                ▼                                   ▼                                  ▼\n" +
            "┌───────────────────────────────┐ ┌──────────────────────────────────┐ ┌───────────────────────────────┐\n" +
            "│ Error Tracker (Sentry.io)     │ │ Structured Logs (docker logs)    │ │ Scheduled Backup (pg_dump)   │\n" +
            "│ Menangkap Stacktrace & State  │ │ Rotasi Log Max-Size 10MB         │ │ Unggah ke Offsite AWS S3/R2 │\n" +
            "└───────────────────────────────┘ └──────────────────────────────────┘ └───────────────────────────────┘\n" +
            "```\n\n" +
            "---\n\n" +
            "## Log Terstruktur & Bahaya Fatal Log Bloat di Docker\n\n" +
            "Di aplikasi produksi, hindari menggunakan `console.log('error disini')` berupa teks polos acak. Gunakan pustaka logging terstruktur (seperti **Pino** atau **Winston**) yang mencetak format JSON:\n" +
            "```json\n" +
            '{"level":"error","time":"2026-07-28T10:00:05Z","userId":42,"reqId":"abc-123","msg":"Payment gateway timeout"}\n' +
            "```\n\n" +
            "### Jebakan Nomor Satu VPS: Harddisk Penuh Akibat Log Docker!\n" +
            "Secara bawaan, Docker menyimpan log kontainer dalam format JSON di `/var/lib/docker/containers/` **tanpa batasan ukuran**. Setelah beroperasi selama 3–6 bulan, file log ini dapat membengkak hingga 30–50 GB dan menghabiskan 100% sisa ruang harddisk VPS! Ketika disk penuh, PostgreSQL otomatis mogok (*read-only lock*) dan server mati total.\n\n" +
            "**Solusi Wajib Industri:** Tambahkan konfigurasi rotasi log pada `compose.yaml`:\n" +
            "```yaml\n" +
            "services:\n" +
            "  app:\n" +
            "    logging:\n" +
            '      driver: "json-file"\n' +
            "      options:\n" +
            '        max-size: "10m"   # Maksimal 10 Megabytes per file log\n' +
            '        max-file: "3"     # Simpan maksimal 3 file lama, sisanya dihapus otomatis\n' +
            "```\n\n" +
            "---\n\n" +
            "## Uptime Monitoring & Endpoint Health Check yang Benar\n\n" +
            "Jangan membuat endpoint `/health` yang hanya mengembalikan status statis `{ status: 'ok' }`. Endpoint kesehatan yang baik wajib memverifikasi koneksi komponen penting di belakang layar:\n\n" +
            "```javascript\n" +
            "app.get('/health', async (req, res) => {\n" +
            "  try {\n" +
            "    await db.query('SELECT 1');       // Verifikasi database aktif\n" +
            "    await redis.ping();               // Verifikasi redis aktif\n" +
            "    res.status(200).json({ status: 'healthy', uptime: process.uptime() });\n" +
            "  } catch (err) {\n" +
            "    res.status(503).json({ status: 'unhealthy', error: err.message });\n" +
            "  }\n" +
            "});\n" +
            "```\n" +
            "Daftarkan URL `https://myapp.com/health` ke layanan monitoring gratis (seperti **UptimeRobot** atau **Better Stack**). Atur agar notifikasi instan dikirim ke bot Telegram atau webhook channel Slack tim ketika HTTP status bukan 200.\n\n" +
            "---\n\n" +
            "## Backup Database di Lingkungan Docker & Golden Rule of Restore\n\n" +
            "Jika database PostgreSQL kamu berjalan di dalam kontainer Docker, menjalankan `pg_dump` langsung di terminal host VPS akan gagal jika client postgresql tidak terinstal di host. Perintah industri yang benar adalah mengeksekusinya via Docker CLI:\n\n" +
            "```bash\n" +
            "# 1. Ekstrak backup dari container database:\n" +
            "docker exec -t db_container pg_dump -U postgres mydb > backup_$(date +%F).sql\n" +
            "\n" +
            "# 2. Kompresi dan kirim ke Cloud Storage terpisah (Offsite):\n" +
            "gzip backup_*.sql\n" +
            "aws s3 cp backup_*.sql.gz s3://my-backup-bucket/db/\n" +
            "```\n\n" +
            "### The Golden Rule of Backup:\n" +
            '> **"Backup yang belum pernah diuji coba proses restore-nya BUKANLAH backup."**\n' +
            "Banyak tragedi perusahaan terjadi di mana tim merasa tenang karena memiliki skrip backup otomatis harian. Saat server terbakar, baru disadari bahwa file backup selama 6 bulan terakhir kosong (`0 bytes`) karena password database salah! Selalu jadwalkan simulasi restore secara berkala ke database lokal untuk membuktikan file SQL tersebut benar-benar bisa di-import kembali.\n\n" +
            "---\n\n" +
            "## Budaya & Format Post-Mortem Blameless\n\n" +
            "Ketika insiden server mati terjadi di produksi, tim engineering profesional pantang menyalahkan individu (*no blaming individual*). Pendekatan yang benar adalah **Blameless Post-Mortem**: berasumsi bahwa setiap orang berniat baik, dan jika ada kesalahan tombol yang ditekan, itu adalah kegagalan sistem pengaman (*guardrails*).\n\n" +
            "Dokumen Post-Mortem memuat 4 bagian utama:\n" +
            "1. **Ringkasan & Dampak:** Waktu mulai, waktu pulih, total durasi downtime, dan estimasi transaksi yang terhambat.\n" +
            "2. **Timeline Kronologis:** Kejadian menit demi menit dari alarm pertama berbunyi sampai mitigasi selesai.\n" +
            "3. **Root Cause Analysis (5 Whys):** Bertanya *mengapa* 5 kali untuk menemukan akar masalah struktural (bukan sekadar gejala).\n" +
            "4. **Action Items (Pencegahan):** Daftar pekerjaan teknis terstruktur dengan penanggung jawab dan tenggat waktu agar insiden yang sama tidak pernah bisa terulang kembali.\n\n" +
            "---\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Menyimpan Backup Database di VPS yang Sama:** Jika VPS mengalami kerusakan harddisk total atau data center terbakar, file backup yang ada di dalamnya ikut musnah. Backup wajib dikirim ke *Offsite Storage* (AWS S3, Cloudflare R2, Google Cloud Storage).\n" +
            "2. **Mengabaikan `docker stats` dan `df -h`:** Menunggu server mati baru mengecek kapasitas. Jadwalkan alaram jika pemakaian disk mencapai >80%.\n" +
            "3. **Membanjiri Sentry dengan Error Tidak Penting:** Menangkap seluruh error 404 user akan menguras kuota Sentry. Saring hanya unhandled exception 5xx dan critical failure.\n" +
            "4. **Mencari Kambing Hitam Pasca Insiden:** Menghukum developer pembuat bug merusak transparansi tim dan membuat anggota tim takut melaporkan masalah di kemudian hari.\n\n" +
            "---\n\n" +
            "## Kaitan ke Dunia Kerja & Peran Site Reliability Engineering (SRE)\n\n" +
            "Di industri software skala global, stabilitas sistem diukur menggunakan SLA (Service Level Agreement, misal 99.9% = batas toleransi downtime hanya 43 menit per bulan). Engineer yang menguasai observability, logging rotasi, strategi disaster recovery, dan disiplin penanganan insiden adalah talenta berharga tinggi yang menjadi tulang punggung keandalan sistem korporat.",
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
          starterCode: "# Baca riwayat log kontainer di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "docker\\s+logs",
              message: "Log container dibaca dengan `docker logs` diikuti nama atau id container.",
            },
            {
              pattern: "--tail\\s+100\\s+app$",
              message: "Batasi jumlah baris terakhir dengan flag `--tail` agar tidak menunggu ribuan baris tercetak. Untuk memantau log yang terus masuk, tambahkan `-f`. Berhentilah memakai `docker logs` sebagai satu-satunya sumber saat produksi: container yang dihapus membawa log-nya pergi.",
            },
          ],
          solution: "docker logs --tail 100 app",
          susunKode: {
            question:
              "Susun perintah docker logs --tail 100 app untuk membaca log kontainer.",
            potongan: ["docker logs", "--tail 100 app"],
            pengecoh: ["docker read-log", "--last 100 app"],
            pemisah: " ",
            explanation:
              "Membaca cuplikan riwayat log kontainer Docker terbatas pada sekian baris terakhir menggunakan `docker logs --tail N nama_container`. Penggunaan bendera '--last' atau CLI 'read-log' adalah kekeliruan yang keliru.",
          },
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
            "Uji ketersediaan endpoint `/health` pada server lokal port 3000 dengan perintah `curl` berflag `-f` agar mengembalikan exit-code error jika status HTTP gagal.",
          starterCode: "# Lakukan health check di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "curl\\s+-f",
              message: "Pemeriksaan endpoint dari terminal memakai `curl`. Flag `-f` membuatnya mengembalikan status keluar tidak-nol saat HTTP-nya error — itu yang membuat perintah ini bisa dipakai di skrip monitoring dan healthcheck Docker.",
            },
            {
              pattern: "http://(localhost|127\\.0\\.0\\.1):3000/health$",
              message: "Arahkan ke endpoint kesehatan aplikasimu. Endpoint itu sebaiknya juga memeriksa koneksi database, bukan sekadar membalas 200 — kalau tidak, monitoring bilang \"sehat\" sementara aplikasi tidak bisa melayani apa pun.",
            },
          ],
          solution: "curl -f http://localhost:3000/health",
          susunKode: {
            question:
              "Susun perintah curl -f untuk health check endpoint /health.",
            potongan: ["curl -f", "http://localhost:3000/health"],
            pengecoh: ["ping-url -f", "http://localhost:3000/status"],
            pemisah: " ",
            explanation:
              "Pengujian endpoint kesehatan HTTP yang mengembalikan fail-code jika HTTP status >= 400 menggunakan `curl -f URL`. CLI 'ping-url' atau endpoint `/status` adalah bentuk kesalahan testing yang jebakan dalam operasional.",
          },
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
            "Inisialisasi SDK error tracking Sentry pada aplikasi dengan memasukkan objek konfigurasi berisi key DSN bernilai `'my-dsn'`.",
          starterCode: "// Inisialisasi Sentry di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "Sentry\\.init\\(",
              message: "Inisialisasi SDK error tracking dipanggil sekali di titik paling awal aplikasi, sebelum kode lain berjalan — kalau tidak, error yang terjadi lebih dulu tidak terlaporkan.",
            },
            {
              pattern: "dsn\\s*:\\s*['\"]my-dsn['\"]",
              message: "Opsi wajibnya `dsn`, yaitu alamat proyekmu di Sentry. Nilainya diambil dari variabel lingkungan di proyek nyata; DSN memang bukan rahasia besar, tapi menuliskannya langsung di kode berarti tidak bisa dibedakan antar lingkungan.",
            },
          ],
          solution: "Sentry.init({ dsn: 'my-dsn' });",
          susunKode: {
            question:
              "Susun inisialisasi SDK Sentry dengan DSN key my-dsn.",
            potongan: ["Sentry.init({", "dsn: 'my-dsn'", "});"],
            pengecoh: ["Sentry.connect({", "dsn_key: 'my-dsn'"],
            pemisah: " ",
            explanation:
              "Inisialisasi SDK pelacakan eror Sentry pada aplikasi menggunakan metode `Sentry.init({ dsn: 'DSN_KEY' })`. Metode 'Sentry.connect' atau properti 'dsn_key' adalah kesalahan API SDK Sentry yang keliru dan jebakan.",
          },
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
            "Periksa sisa kapasitas ruang penyimpanan harddisk di server Linux dalam format unit yang mudah dibaca manusia.",
          starterCode: "# Periksa kapasitas disk di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "df\\s+-h$",
              message: "Gunakan perintah: df -h",
            },
          ],
          solution: "df -h",
          susunKode: {
            question:
              "Susun perintah df -h untuk mengecek sisa kapasitas disk.",
            potongan: ["df", "-h"],
            pengecoh: ["disk-free", "-human"],
            pemisah: " ",
            explanation:
              "Pemeriksaan sisa kapasitas penyimpanan disk pada Linux dalam format yang mudah dibaca manusia (human-readable) menggunakan perintah `df -h`. Perintah fiktif 'disk-free' mengelirukan pemula secara jebakan.",
          },
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
            "Cadangkan seluruh skema dan data database PostgreSQL `mydb` milik user `postgres` ke dalam berkas `backup.sql` menggunakan alat `pg_dump` dan operator redirect `>`.",
          starterCode: "# Ekstrak backup database di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "pg_dump\\s+-U\\s+postgres",
              message: "Backup PostgreSQL memakai `pg_dump` dengan pengguna disebut lewat flag `-U`.",
            },
            {
              pattern: "mydb\\s*>\\s*backup\\.sql$",
              message: "Sebutkan nama database, lalu alihkan keluarannya ke berkas dengan tanda `>`. Yang paling sering dilupakan: backup tanpa pernah diuji restore itu belum tentu backup — jadwalkan latihan restore secara berkala.",
            },
          ],
          solution: "pg_dump -U postgres mydb > backup.sql",
          susunKode: {
            question:
              "Susun perintah pg_dump untuk membuat backup database PostgreSQL.",
            potongan: ["pg_dump -U postgres", "mydb > backup.sql"],
            pengecoh: ["postgres_dump -u postgres", "mydb < backup.sql"],
            pemisah: " ",
            explanation:
              "Membuat cadangan (backup) database PostgreSQL ke dalam berkas teks SQL menggunakan utilitas CLI `pg_dump -U user dbname > output.sql`. Menggunakan pengarah `<` adalah kesalahan fatal yang jebakan dalam backup.",
          },
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
            "Kaji catatan evaluasi pasca-insiden dengan menampilkan seluruh isi berkas laporan `postmortem.md` ke layar terminal menggunakan perintah `cat`.",
          starterCode: "# Baca dokumen laporan insiden di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "cat\\s+postmortem\\.md$",
              message: "Isi berkas dibaca ke layar dengan `cat` diikuti nama berkasnya. Dokumen post-mortem ditulis tanpa menyalahkan orang (*blameless*) dan berisi empat hal: apa yang terjadi, dampaknya ke pengguna, akar masalahnya, dan tindakan pencegahan yang sudah dijadwalkan.",
            },
          ],
          solution: "cat postmortem.md",
          susunKode: {
            question:
              "Susun perintah cat postmortem.md untuk membaca laporan insiden.",
            potongan: ["cat", "postmortem.md"],
            pengecoh: ["read-file", "incident_report.md"],
            pemisah: " ",
            explanation:
              "Membaca isi berkas teks laporan evaluasi pasca-insiden di terminal Linux menggunakan utilitas standar `cat nama_file.md`. Penggunaan perintah fiktif 'read-file' adalah jebakan istilah CLI yang keliru.",
          },
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
