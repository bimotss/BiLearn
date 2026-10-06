import type { Track } from "@/lib/types";

export const laravelTrack: Track = {
  slug: "laravel",
  title: "PHP & Laravel",
  description:
    "Jalur tercepat ke pekerjaan backend lokal — dari PHP nol sampai API production.",
  hours: 100,
  recommendedPrereqs: ["html", "git", "sql"],
  color: "bg-rose-600",
  icon: "🐘",
  order: 8,
  modules: [
    {
      slug: "persiapan-instalasi",
      title: "Persiapan & Instalasi",
      description:
        "Sebelum menulis kode PHP & Laravel: pasang PHP CLI, Composer, dan pelajari cara membuat proyek Laravel.",
      topics: [
        "Kebutuhan environment: PHP CLI, Composer, Web Server (Apache/Nginx/Artisan Serve)",
        "Memasang PHP per OS (Windows via XAMPP/Herd, macOS via Homebrew/Herd, Linux)",
        "Memasang Composer (Dependency Manager PHP)",
        "Membuat proyek Laravel baru via composer create-project / laravel installer",
        "Struktur folder Laravel & perintah php artisan serve",
        "Verifikasi instalasi lewat terminal (php -v, composer -v, artisan)",
      ],
      items: [
        {
          kind: "materi",
          id: "laravel-0-m1",
          title: "Menyiapkan Lingkungan Kerja PHP & Laravel",
          body:
            "# Pengertian & Ekosistem PHP-Laravel\n\n" +
            "PHP (*Hypertext Preprocessor*) adalah bahasa pemrograman *server-side* yang berjalan di server web untuk menghasilkan HTML dinamis atau respon JSON API. Berbeda dengan JavaScript di browser yang dieksekusi di perangkat pengguna, kode PHP dieksekusi sepenuhnya di server sebelum hasilnya dikirimkan ke peramban pengguna.\n\n" +
            "**Laravel** adalah kerangka kerja (*framework*) PHP modern berarsitektur MVC (Model-View-Controller) yang menyediakan pondasi siap pakai untuk menangani *routing*, autentikasi, ORM database (*Eloquent*), hingga skedul antrean (*queues*). Dengan Laravel, kamu tidak perlu membangun mekanisme keamanan dan koneksi database dari nol.\n\n" +
            "## Gambaran Arsitektur Lingkungan Pengembangan\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                         PERANGKAT LOKAL KAMU                             |\n" +
            "|                                                                         |\n" +
            "|  +-------------------+     +------------------+     +----------------+  |\n" +
            "|  |  PHP CLI Engine   | <-> |    Composer      | <-> |     MySQL      |  |\n" +
            "|  | (Menjalankan Kode)|     | (Manajer Paket)  |     |   (Database)   |  |\n" +
            "|  +-------------------+     +------------------+     +----------------+  |\n" +
            "|            ^                                                             |\n" +
            "|            v                                                             |\n" +
            "|  +-------------------------------------------------------------------+  |\n" +
            "|  |                      php artisan serve                             |  |\n" +
            "|  |            (Development Server HTTP pada http://127.0.0.1:8000)   |  |\n" +
            "|  +-------------------------------------------------------------------+  |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Perbandingan Alat Utama Ekosistem PHP\n\n" +
            "| Alat / Tool | Fungsi Utama | Perintah Verifikasi Terminal |\n" +
            "|---|---|---|\n" +
            "| **PHP CLI** | Interpreter untuk eksekusi skrip PHP di terminal dan server. | `php -v` |\n" +
            "| **Composer** | Manajer dependensi (*package manager*) untuk PHP, seperti `npm` di Node.js. | `composer -v` |\n" +
            "| **Laravel Installer** | CLI helper untuk membuat kerangka proyek Laravel baru dengan cepat. | `laravel --version` |\n" +
            "| **Laravel Herd / XAMPP** | Paket lingkungan lokal siap pakai (PHP, Nginx/Apache, MySQL). | `php -v` & `mysql --version` |\n\n" +
            "## Panduan Instalasi Langkah-demi-Langkah\n\n" +
            "### 1. Instalasi di Windows\n" +
            "- **Cara Rekomendasi Modern:** Unduh dan pasang **Laravel Herd for Windows** (herd.laravel.com). Herd mengisolasi PHP, Nginx, dan Composer tanpa perlu mengatur *environment variable* `PATH` secara manual.\n" +
            "- **Cara Klasik:** Unduh **XAMPP** (installer PHP 8.2+), centang komponen PHP & MySQL. Setelah instalasi, tambahkan jalur `C:\\xampp\\php` ke System Environment Variables `PATH` agar perintah `php` dikenali di Command Prompt / PowerShell.\n" +
            "- Unduh dan pasang **Composer** dari `getcomposer.org` memilih installer Windows (`Composer-Setup.exe`).\n\n" +
            "### 2. Instalasi di macOS\n" +
            "- **Cara Rekomendasi:** Unduh **Laravel Herd for Mac** (herd.laravel.com) yang menyertakan PHP CLI, Node.js, Composer, dan Nginx yang terkonfigurasi sangat cepat.\n" +
            "- **Cara Terminal (Homebrew):**\n" +
            "  ```bash\n" +
            "  brew install php composer mysql\n" +
            "  ```\n\n" +
            "### 3. Instalasi di Linux (Ubuntu / Debian)\n" +
            "- Jalankan perintah terminal berikut:\n" +
            "  ```bash\n" +
            "  sudo apt update\n" +
            "  sudo apt install php-cli php-mbstring php-xml php-bcmath php-curl php-sqlite3 composer\n" +
            "  ```\n\n" +
            "## Membuat dan Menjalankan Proyek Laravel Pertama\n\n" +
            "Buka terminal atau command prompt, lalu jalankan perintah pembuat proyek:\n" +
            "```bash\n" +
            "composer create-project laravel/laravel toko-online\n" +
            "cd toko-online\n" +
            "php artisan serve\n" +
            "```\n\n" +
            "Terminal akan menampilkan pesan bahwa server pengembang berjalan di `http://127.0.0.1:8000`. Buka alamat tersebut di peramban untuk melihat halaman selamat datang Laravel.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan kamu mendirikan restoran cepat saji. **PHP** adalah koki berpengalaman di dapur yang memasak berdasarkan resep. **Composer** adalah pemasok bahan makanan yang mendatangkan bumbu dan bahan jadi dari luar tanpa harus kamu buat sendiri. **Laravel** adalah rancangan tata letak standar restoran (SOP dapur, meja kasir, sistem pemesanan) yang membuat tokomu bisa langsung buka tanpa mendesain arsitektur bangunan dari nol.\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Ekstensi PHP Belum Aktif:** Laravel membutuhkan ekstensi seperti `pdo_mysql`, `mbstring`, `openssl`, dan `curl`. Jika perintah artisan melempar error *missing extension*, pastikan ekstensi tersebut diaktifkan pada file `php.ini` (hapus tanda titik koma `;` di depan nama ekstensi).\n" +
            "2. **Menjalankan `php artisan` di Luar Folder Proyek:** Perintah `php artisan` hanya dapat dijalankan di dalam direktori akar (*root*) proyek Laravel yang berisi berkas `artisan`.\n" +
            "3. **Masalah Izin Folder `storage` dan `bootstrap/cache`:** Di Linux/macOS, pastikan folder `storage` dan `bootstrap/cache` memiliki izin tulis (*write permission*) agar Laravel bisa menulis log dan file cache.\n\n" +
            "## Standar Modern Laravel 11: SQLite Default & Vite\n\n" +
            "Sejak Laravel 11, kerangka kerja ini memperkenalkan perubahan besar yang mempermudah pemula:\n" +
            "1. **Database Default SQLite:** Saat proyek baru dibuat, Laravel 11 otomatis mengonfigurasi basis data SQLite (`database/database.sqlite`). Kamu bisa langsung menjalankan `php artisan migrate` tanpa perlu menyalakan MySQL server atau XAMPP terlebih dahulu.\n" +
            "2. **Frontend Tooling Berbasis Vite:** Untuk mengompilasi aset CSS dan JavaScript, Laravel 11 menggunakan **Vite** secara bawaan (dijalankan via `npm run dev`), menggantikan pustaka Laravel Mix terdahulu.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di industri perangkat lunak Indonesia, Laravel adalah *framework* backend paling populer untuk sistem manufaktur, perbankan, *e-commerce*, dan pemerintahan. Pemahaman instalasi lingkungan lokal yang bersih serta penguasaan alat perintah Artisan adalah keahlian mendasar yang diuji saat *technical test* posisi Junior PHP / Laravel Developer.",
        },
        {
  kind: "step",
  id: "laravel-0-1",
  title: "Memeriksa Versi PHP CLI & Ekstensi",
  explanation: "Perintah `php -v` adalah langkah diagnosa paling awal untuk memastikan PHP CLI terpasang dan dapat dieksekusi dari terminal. Informasi yang ditampilkan mencakup versi rilis utama, jenis thread safety, dan konfigurasi Zend Engine. Kenapa ini wajib diperiksa: Laravel 11 membutuhkan PHP versi 8.2 ke atas, sehingga mengetahui versi aktif di terminal mencegah kegagalan eksekusi skrip sejak awal. Kapan dipakai: setiap kali kamu selesai memasang PHP, mengganti versi PHP di OS, atau memecahkan masalah dependensi. Jebakan klasik pemula: versi PHP di antarmuka web (seperti phpMyAdmin pada XAMPP) bisa berbeda dengan versi PHP yang terpanggil di terminal jika variabel lingkungan PATH menunjuk ke folder instalasi lain.",
  example: {
    code: "node -v",
    output: "v20.15.1",
    note: "Perintah versi dengan opsi singkat mencetak baris versi langsung ke stdout."
  },
  instruction: "Buka terminal sistem operasimu. Periksa nomor versi PHP yang terpasang menggunakan flag singkat satu huruf.",
  starterCode: "# Periksa versi PHP di terminal\n",
  language: "text",
  tests: [
    {
      pattern: "^php\\s+(-v|--version)$",
      message: "Gunakan perintah php diikuti flag versi seperti -v untuk memeriksa versi mesin PHP."
    }
  ],
  solution: "php -v",
  susunKode: {
    question: "Susun perintah terminal untuk memeriksa nomor versi PHP CLI yang aktif di sistem.",
    potongan: [
      "php",
      "-v"
    ],
    pengecoh: [
      "--check",
      "-version"
    ],
    pemisah: " ",
    explanation: "Perintah php dengan flag singkat -v menampilkan versi mesin PHP yang aktif di terminal. Keping --check keliru karena bukan flag resmi PHP CLI untuk memeriksa versi. Keping -version menggoda bagi pemula tetapi sintaks flag panjang di PHP memakai tanda hubung ganda."
  }
},
{
  kind: "step",
  id: "laravel-0-2",
  title: "Membuat Proyek Baru dengan Composer",
  explanation: "`composer create-project` adalah perintah resmi untuk menduplikasi kerangka kerjanya langsung dari repositori Packagist ke direktori baru. Perintah ini mengunduh kerangka dasar `laravel/laravel`, memasang seluruh paket dependensi di folder `vendor/`, membuat salinan `.env` dari `.env.example`, dan otomatis membangkitkan `APP_KEY`. Kenapa penting dipahami: proses ini mengisolasi seluruh pustaka di dalam folder proyek tanpa mengotori instalasi global sistem operasi. Kapan dipakai: setiap kali kamu memulai inisiasi aplikasi baru dari nol. Jebakan umum: menjalankan perintah ini di dalam folder yang sudah berisi berkas dengan nama yang sama, atau jaringan internet terputus saat composer sedang mengunduh pustaka sehingga vendor tidak lengkap.",
  example: {
    code: "composer create-project laravel/laravel blog-pribadi",
    output: "Creating a \"laravel/laravel\" project at \"./blog-pribadi\"\nInstalling laravel/laravel (v11.x)\nGenerating optimized autoload files\nApplication key set successfully.",
    note: "Composer otomatis menyiapkan autoloader dan kunci aplikasi unik di berkas .env."
  },
  instruction: "Buat sebuah proyek Laravel baru bernama `toko-buku` menggunakan perintah resmi manajer paket Composer.",
  starterCode: "# Buat proyek Laravel baru di sini\n",
  language: "text",
  tests: [
    {
      pattern: "composer\\s+create-project\\s+laravel/laravel\\s+toko-buku",
      message: "Gunakan composer create-project laravel/laravel diikuti nama folder proyek tujuan."
    }
  ],
  solution: "composer create-project laravel/laravel toko-buku",
  susunKode: {
    question: "Susun perintah Composer untuk menginisialisasi proyek Laravel baru bernama toko-buku.",
    potongan: [
      "composer",
      "create-project",
      "laravel/laravel",
      "toko-buku"
    ],
    pengecoh: [
      "new-project",
      "laravel/installer"
    ],
    pemisah: " ",
    explanation: "Perintah create-project pada Composer menduplikasi skeleton paket laravel/laravel ke direktori tujuan. Keping new-project keliru karena bukan perintah yang disediakan oleh Composer. Keping laravel/installer menggoda bagi yang pernah membaca dokumentasi CLI alternatif tetapi memerlukan alat terpisah."
  }
},
{
  kind: "step",
  id: "laravel-0-3",
  title: "Menjalankan Server Pengembang Lokal Artisan",
  explanation: "`php artisan serve` menyalakan server web bawaan PHP (*built-in web server*) yang dioptimalkan untuk pengujian lokal di alamat `http://127.0.0.1:8000`. Perintah ini memetakan dokumen akar langsung ke folder `public/index.php`, sehingga aset dan rute aplikasi dapat dibuka di peramban tanpa perlu mengonfigurasi Apache atau Nginx. Kenapa cara ini disukai: prosesnya cepat, bersih, dan tidak memerlukan hak akses administrator root. Kapan dipakai: saat proses pengembangan sehari-hari di komputer lokal. Jebakan yang sangat sering terjadi pada pemula: menutup jendela terminal atau menekan `Ctrl+C` saat aplikasi masih dibuka di browser — akibatnya server langsung mati dan browser menampilkan pesan *Unable to connect*.",
  example: {
    code: "npm run dev",
    output: "  VITE v5.3.4  ready in 240 ms\n  ➜  Local:   http://localhost:5173/\n  ➜  press h + enter to show help",
    note: "Server lokal harus dibiarkan tetap menyala di satu tab terminal selama sesi pengembangan berlangsung."
  },
  instruction: "Nyalakan server pengembang lokal aplikasi Laravel menggunakan perintah bawaan antarmuka Artisan.",
  starterCode: "# Nyalakan server pengembang lokal di sini\n",
  language: "text",
  tests: [
    {
      pattern: "php\\s+artisan\\s+serve",
      message: "Panggil perintah serve melalui berkas php artisan untuk memulai development server."
    }
  ],
  solution: "php artisan serve",
  susunKode: {
    question: "Susun perintah Artisan untuk menyalakan development server lokal Laravel.",
    potongan: [
      "php",
      "artisan",
      "serve"
    ],
    pengecoh: [
      "run",
      "start"
    ],
    pemisah: " ",
    explanation: "Perintah php artisan serve menyalakan web server lokal bawaan PHP untuk proyek Laravel. Keping run keliru karena meniru perintah npm run dari JavaScript. Keping start menggoda karena terbiasa dengan skrip lain tetapi bukan subperintah resmi yang dikenali oleh kernel Artisan."
  }
},
        {
          kind: "quiz",
          id: "laravel-0-kuis",
          title: "Kuis: Persiapan & Instalasi Lingkungan Kerja",
          questions: [
            {
              id: "l0-q1",
              type: "pilihan-ganda",
              question: "Apa fungsi utama dari Composer dalam ekosistem pengembangan PHP modern?",
              choices: [
                "Menjalankan server web HTTP lokal untuk menampilkan HTML di browser",
                "Mengompilasi kode PHP menjadi bahasa mesin binary biner (.exe)",
                "Mengelola dan mengunduh pustaka atau dependensi pihak ketiga untuk proyek PHP",
                "Menyediakan antarmuka grafis (GUI) untuk merancang struktur database MySQL"
              ],
              answerIndex: 2,
              explanation: "Composer adalah dependency manager resmi PHP: ia mengunduh paket dari packagist.org, mengunci versinya di composer.lock, dan menghasilkan autoloader PSR-4 otomatis. Pilihan menjalankan server keliru karena itu tugas php artisan serve atau Nginx. Pilihan kompilasi biner keliru karena PHP adalah bahasa interpretasi dinamis."
            },
            {
              id: "l0-q2",
              type: "pilihan-ganda",
              question: "Perintah CLI apakah yang digunakan untuk menjalankan server pengembang lokal bawaan Laravel?",
              choices: [
                "php artisan serve",
                "composer start",
                "php run server",
                "php artisan up"
              ],
              answerIndex: 0,
              explanation: "`php artisan serve` menyalakan server pengembangan lokal bawaan PHP di port 8000. Pilihan `php artisan up` menggoda karena berpasangan dengan `down`, tetapi fungsinya mematikan mode maintenance, bukan menyalakan server web. Pilihan `composer start` adalah skrip custom, bukan perintah default."
            },
            {
              id: "l0-q3",
              type: "pilihan-ganda",
              question: "Manakah di bawah ini syarat minimum sebelum kamu bisa membuat dan menjalankan proyek Laravel baru?",
              choices: [
                "Wajib memasang Docker Container dan Kubernetes di sistem operasi",
                "Harus memasang PHP CLI dan Composer di sistem pengembang",
                "Mengonfigurasi Apache HTTP Server dan sertifikat SSL terlebih dahulu",
                "Mengunduh MySQL Workbench dan phpMyAdmin secara manual"
              ],
              answerIndex: 1,
              explanation: "Syarat mutlak untuk menjalankan Laravel adalah tersedianya PHP CLI dengan ekstensi yang sesuai serta Composer sebagai pengelola dependensi. Docker (Sail) atau web server Apache/Nginx adalah opsi lingkungan tingkat lanjut, bukan prasyarat awal yang wajib untuk memulai."
            },
            {
              id: "l0-q4",
              type: "pilihan-ganda",
              question: "Apa yang terjadi jika kamu menjalankan perintah `php artisan` di terminal saat berada di luar folder proyek Laravel?",
              choices: [
                "Artisan otomatis menginisialisasi proyek Laravel baru di direktori aktif",
                "Perintah dialihkan ke Composer secara otomatis untuk mencari proyek terdekat",
                "Artisan akan mencari file konfigurasi global di direktori user home",
                "Terminal akan menampilkan pesan error bahwa file artisan tidak ditemukan"
              ],
              answerIndex: 3,
              explanation: "File `artisan` adalah berkas skrip PHP fisik yang berada di direktori akar (*root*) proyek Laravel. Jika kamu menjalankannya di luar folder proyek, PHP melempar pesan error `Could not open input file: artisan` karena berkas tersebut tidak ada di folder aktif."
            },
            {
              id: "l0-q5",
              type: "pilihan-ganda",
              question: "Di manakah kode PHP dieksekusi saat pengguna mengakses halaman web?",
              choices: [
                "Di peramban (browser) pengguna menggunakan JavaScript V8 engine",
                "Di dalam cache memori lokal perangkat klien setelah halaman selesai diunduh",
                "Di jaringan DNS internet saat proses lookup domain berlangsung",
                "Di server backend sebelum hasil HTML/JSON dikirimkan ke peramban pengguna"
              ],
              answerIndex: 3,
              explanation: "PHP adalah bahasa pemrograman sisi server (*server-side*). Seluruh kode PHP dieksekusi di server web sebelum hasilnya berupa teks HTML atau respons JSON dikirimkan melalui protokol HTTP ke browser pengguna."
            }
          ]
        }
      ],
    },
    {
      slug: "php-dasar",
      title: "PHP Dasar",
      description:
        "PHP dari nol — bahasa yang masih menggerakkan sebagian besar web Indonesia.",
      topics: [
        "Sintaks dasar: variabel, tipe, echo",
        "String & array (indexed, associative, multidimensional)",
        "Kondisi & loop, foreach untuk array",
        "Fungsi: parameter, return, arrow function",
        "Superglobal: $_GET, $_POST — cara kerja request",
        "Include/require & pemisahan file",
        "PHP 8 modern: match, null coalescing, named argument",
      ],
      items: [
        {
          kind: "materi",
          id: "laravel-1-m1",
          title: "Sintaks Dasar, Array, dan Superglobal PHP",
          body:
            "# Dasar-Dasar Bahasa PHP\n\n" +
            "Setiap kode PHP di dalam dokumen web diawali dengan tag pembuka `<?php` dan diakhiri dengan tag penutup `?>` (tag penutup opsional jika berkas hanya berisi kode PHP murni). Di dalam PHP, semua nama variabel **wajib diawali dengan tanda dolar (`$`)**, bersifat *case-sensitive*, dan setiap pernyataan perintah (*statement*) **harus diakhiri dengan titik koma (`;`)**.\n\n" +
            "## Superglobal & Alur HTTP Request PHP\n\n" +
            "Salah satu kekuatan terbesar PHP adalah variabel **Superglobal** bawaan yang selalu dapat diakses di mana saja dalam skrip tanpa deklarasi khusus. Variabel superglobal ini menangkap semua data yang dikirimkan oleh peramban pengguna.\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                            HTTP REQUEST (CLIENT)                        |\n" +
            "|   GET /search?q=laravel   |   POST /login (form data: email, password)  |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "                                    |\n" +
            "                                    v\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                        PHP SUPERGLOBAL ENGINE                           |\n" +
            "|  $_GET['q'] = 'laravel'   |   $_POST['email'] = 'bimo@example.com'      |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Rujukan Tipe Data & Struktur Array\n\n" +
            "| Jenis / Tipe | Sintaks & Contoh Kode | Penjelasan Singkat |\n" +
            "|---|---|---|\n" +
            "| **Variabel & Echo** | `$nama = 'Bimo'; echo $nama;` | Mengisi variabel dan mencetak teks ke keluaran HTTP. |\n" +
            "| **Indexed Array** | `$item = ['Kopi', 'Teh'];` | Array berindeks angka dimulai dari index `0`. |\n" +
            "| **Associative Array** | `$user = ['nama' => 'Bimo', 'role' => 'Admin'];` | Array berpasangan *key => value*, sangat mirip objek JSON. |\n" +
            "| **Superglobal `$_GET`** | `$keyword = $_GET['q'];` | Membaca parameter URL kueri (*query string*). |\n" +
            "| **Superglobal `$_POST`** | `$pass = $_POST['password'];` | Membaca data yang dikirim melalui formulir metode POST. |\n" +
            "| **PHP 8 Null Coalescing** | `$name = $_GET['name'] ?? 'Tamu';` | Nilai default jika key bernilai null atau belum didefinisikan. |\n\n" +
            "## Fitur Modern PHP 8\n\n" +
            "PHP 8 mengenalkan ekspresi `match` yang jauh lebih ringkas dan aman dibandingkan blok `switch` lama karena melakukan pemeriksaan tipe ketat (*strict comparison* `===`) serta mengembalikan nilai secara langsung:\n\n" +
            "```php\n" +
            "$status = 200;\n" +
            "$pesan = match ($status) {\n" +
            "    200, 201 => 'Sukses',\n" +
            "    404 => 'Tidak Ditemukan',\n" +
            "    default => 'Error Server',\n" +
            "};\n" +
            "```\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan **Array Asosiatif** seperti kotak loker deposit box berlabel nama: alih-alih mengambil barang berdasarkan urutan nomor 1 atau 2, kamu membuka loker berlabel `'nama'` atau `'role'`. Sedangkan **`$_GET` dan `$_POST`** seperti dua jenis amplop surat yang diterima petugas penerima tamu: `$_GET` adalah amplop berplastik transparan di mana isinya terlihat di URL, dan `$_POST` adalah amplop tertutup rapat yang menjaga kerahasiaan isinya.\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Lupa Titik Koma (`;`):** PHP sangat ketat terhadap sintaksis. Lupa mencantumkan titik koma di akhir baris akan menyebabkan `Parse error: syntax error, unexpected...`.\n" +
            "2. **Mengakses Key Array yang Tidak Ada:** Membaca `$user['alamat']` ketika key `'alamat'` belum diinisialisasi akan menghasilkan *Warning: Undefined array key*. Gunakan operator null coalescing `??` untuk memberikan nilai aman.\n" +
            "3. **Pemesanan Argumen `include` vs `require`:** Perintah `include` hanya memberikan *warning* jika file tidak ditemukan dan skrip tetap berjalan, sedangkan `require` melempar *fatal error* dan langsung menghentikan skrip.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Pemahaman mendalam mengenai array asosiatif dan pengolahan variabel superglobal di PHP murni adalah syarat mutlak sebelum menggunakan fitur pembuatan respon request di Laravel.",
        },
        {
          kind: "step",
          id: "laravel-1-1",
          title: "Sintaks Dasar PHP: Variabel & Echo",
          explanation:
            "Variabel PHP adalah wadah bernama yang namanya **wajib** diawali `$`, dan `echo` adalah perintah untuk mengirim teks ke keluaran halaman. Kenapa keduanya dipelajari bersama? Karena inti pekerjaan PHP adalah menyusun teks (HTML atau JSON) dari data — jadi hampir setiap baris yang kamu tulis nanti adalah gabungan variabel dan teks tetap. Penggabungan teks di PHP memakai operator titik (`.`), **bukan** `+` seperti di JavaScript: `'Halo ' + $nama` di PHP 8 melempar `TypeError` karena `+` berarti penjumlahan angka. Alternatifnya, teks dalam petik ganda menyisipkan variabel secara otomatis (`\"Halo $nama\"`), sedangkan petik tunggal tidak — `'Halo $nama'` tercetak apa adanya sebagai `Halo $nama`, dan ini jebakan pemula yang paling sering muncul di hari pertama.",
          example: {
            code:
              "<?php\n" +
              "$harga = 15000;\n" +
              "echo 'Harga: ' . $harga;   // gabung dengan titik\n" +
              "echo \"\\n\";\n" +
              "echo \"Harga: $harga\";     // petik ganda menyisipkan nilai\n" +
              "echo \"\\n\";\n" +
              "echo 'Harga: $harga';      // petik tunggal TIDAK menyisipkan",
            output: "Harga: 15000\nHarga: 15000\nHarga: $harga",
            note: "Baris ketiga adalah jebakannya: petik tunggal mencetak nama variabelnya, bukan isinya. Catatan jujur: panel latihan tidak menjalankan PHP, jadi kamu tidak akan melihat keluaran ini di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus.",
          },
          instruction:
            "Halaman sapaan menyimpan nama pengunjung. Buat variabel bernama `$name` berisi teks `Bimo`, lalu cetak kalimat `Halo Bimo` ke keluaran — teks `Halo ` ditulis tetap, nama diambil dari variabel tadi (cara menggabungkannya bebas, asal hasil cetaknya benar).",
          starterCode:
            "<?php\n// 1. buat variabel penampung nama\n// 2. cetak sapaan yang memakai isi variabel itu\n",
          language: "text",
          tests: [
            {
              pattern: "\\$name\\s*=\\s*['\"]Bimo['\"]\\s*;",
              message:
                "Buat dulu wadah datanya: nama variabel di PHP selalu diawali `$`, diisi dengan `=`, dan barisnya ditutup titik koma. Lupa titik koma memunculkan `Parse error: syntax error, unexpected ...` yang menunjuk baris SESUDAHNYA — itu sebabnya pesan errornya sering terasa membingungkan.",
            },
            {
              pattern: "echo\\s+[^;\\n]*Halo[^;\\n]*\\$name",
              message:
                "Sekarang cetak sapaannya dengan `echo`, dan pastikan teks `Halo` dan isi variabelnya sama-sama ikut tercetak. Menggabungkannya boleh dengan titik (`'Halo ' . $name`) atau dengan petik ganda (`\"Halo $name\"`) — yang tidak bekerja adalah petik tunggal, karena isinya tidak disisipkan.",
            },
          ],
          solution: "<?php\n$name = 'Bimo';\necho 'Halo ' . $name;",
          susunKode: {
            question:
              "Rangkai kode PHP sederhana untuk mendeklarasikan variabel $name dan mencetak salam Halo.",
            potongan: [
              "<?php",
              "$name = 'Bimo';",
              "echo 'Halo ' . $name;",
            ],
            pengecoh: [
              "$name = Bimo;",
              "print 'Halo ' . name;",
            ],
            pemisah: "\n",
            explanation:
              "Variabel di PHP dideklarasikan dengan tanda dollar $ dan string 'Bimo' wajib dibungkus tanda kutip. Keping $name = Bimo; sangat keliru karena tanpa tanda kutip Bimo dianggap sebagai konstanta yang belum didefinisikan. Keping print 'Halo ' . name; menggoda tetapi salah karena variabel name lupa menggunakan karakter $.",
          },
        },
        {
          kind: "step",
          id: "laravel-1-2",
          title: "Array Asosiatif di PHP",
          explanation:
            "Array asosiatif menyimpan data sebagai pasangan kunci–nilai yang dihubungkan tanda panah `=>`, dan dibaca kembali dengan kurung siku berisi nama kuncinya (`$user['name']`). Kenapa bentuk ini yang mendominasi kode PHP? Karena ia adalah padanan langsung objek JSON: data yang masuk dari form, keluar sebagai respons API, atau dikirim dari Controller ke tampilan Blade semuanya berbentuk array asosiatif. Kapan dipakai: setiap kali datanya punya nama bidang (`name`, `email`, `price`) — array berindeks angka hanya cocok untuk daftar yang urutannya bermakna. Dua jebakan yang perlu kamu ingat: kunci bersifat peka huruf besar-kecil, dan membaca kunci yang tidak ada **tidak** menghentikan program, melainkan hanya memunculkan `Warning: Undefined array key` lalu melanjutkan dengan nilai kosong — sehingga bug-nya muncul jauh dari sumbernya.",
          example: {
            code:
              "<?php\n" +
              "$produk = ['nama' => 'Kopi Gayo', 'harga' => 25000];\n\n" +
              "echo $produk['nama'];\n" +
              "echo \"\\n\";\n" +
              "echo $produk['stok'];   // key ini tidak ada",
            output:
              "Kopi Gayo\n" +
              "PHP Warning:  Undefined array key \"stok\" in /app/contoh.php on line 6\n",
            note: "Perhatikan baris kedua keluarannya: membaca key yang tidak ada BUKAN error fatal — PHP hanya memberi warning lalu meneruskan dengan nilai kosong. Di server produksi warning sering disembunyikan, sehingga bug ini muncul sebagai \"kok datanya kosong\" tanpa petunjuk apa pun. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Endpoint profil mengembalikan satu pengguna. Buat array berlabel bernama `$user` dengan satu pasangan: kunci `name` bernilai `Bimo`. Lalu cetak nilai yang tersimpan di kunci itu ke keluaran.",
          starterCode:
            "<?php\n// 1. buat array berlabel $user dengan kunci name\n// 2. cetak isi kunci name\n",
          language: "text",
          tests: [
            {
              pattern: "\\$user\\s*=\\s*(\\[|array\\s*\\()",
              message:
                "Mulai dari wadahnya: array di PHP modern ditulis dengan kurung siku (bentuk lama `array(...)` juga masih sah). Isinya nanti berupa pasangan kunci dan nilai.",
            },
            {
              pattern: "['\"]name['\"]\\s*=>\\s*['\"]Bimo['\"]",
              message:
                "Pasangan kunci–nilai dihubungkan dengan tanda panah `=>` (bukan `:` seperti JSON, dan bukan `=`). Kunci ditulis di kiri sebagai teks, nilainya di kanan.",
            },
            {
              pattern: "echo\\s+[^;\\n]*\\$user\\s*\\[\\s*['\"]name['\"]\\s*\\]",
              message:
                "Membaca satu nilai dari array berlabel memakai kurung siku berisi nama kuncinya. Kunci di PHP peka huruf besar-kecil: `'Name'` dan `'name'` adalah dua kunci berbeda, dan salah satunya akan memberi warning \"Undefined array key\".",
            },
          ],
          solution: "<?php\n$user = ['name' => 'Bimo'];\necho $user['name'];",
          susunKode: {
            question:
              "Susun array asosiatif $user dengan kunci 'name' dan tampilkan nilainya dengan echo.",
            potongan: [
              "<?php",
              "$user = ['name' => 'Bimo'];",
              "echo $user['name'];",
            ],
            pengecoh: [
              "$user = ['name' = 'Bimo'];",
              "echo $user->name;",
            ],
            pemisah: "\n",
            explanation:
              "Array asosiatif PHP menggunakan operator panah ganda => untuk memetakan kunci ke nilai, dan diakses menggunakan tanda kurung siku. Keping = 'Bimo' keliru karena menggunakan operator penugasan tunggal. Keping $user->name menggoda bagi pengembang Object Oriented, tetapi ini adalah array biasa bukan objek.",
          },
        },
        {
          kind: "step",
          id: "laravel-1-3",
          title: "Loop foreach untuk Array",
          explanation:
            "`foreach` adalah perulangan khusus array di PHP: kamu menyebut array yang dilintasi, lalu memberi nama untuk elemen yang sedang dipegang (`foreach ($daftar as $satu)`). Kenapa bukan `for` berbasis indeks? Karena array PHP tidak selalu berindeks `0,1,2` — array asosiatif berkunci teks tidak punya indeks angka sama sekali, sehingga `for ($i = 0; ...)` langsung gagal di sana. Kapan dipakai: praktis di semua tempat kamu memproses koleksi — hasil query database, daftar produk di halaman, baris CSV. Jebakan yang paling sering: variabel elemen tetap hidup setelah perulangan selesai (nilainya elemen terakhir), dan bila kamu memakai `foreach ($arr as &$x)` dengan tanda `&`, variabel itu tetap menjadi referensi ke elemen terakhir — perulangan berikutnya yang memakai nama variabel sama akan diam-diam menimpa isi array aslinya.",
          example: {
            code:
              "<?php\n" +
              "$buah = ['Apel', 'Jeruk'];\n" +
              "foreach ($buah as $b) {\n" +
              "    echo $b . \"\\n\";\n" +
              "}\n\n" +
              "// bentuk kedua: ikut mengambil kuncinya\n" +
              "$harga = ['apel' => 5000, 'jeruk' => 7000];\n" +
              "foreach ($harga as $nama => $nilai) {\n" +
              "    echo $nama . ' = ' . $nilai . \"\\n\";\n" +
              "}",
            output: "Apel\nJeruk\napel = 5000\njeruk = 7000",
            note: "Bentuk kedua (`as $kunci => $nilai`) yang dipakai kalau kuncinya ikut dibutuhkan. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Editor sudah berisi array `$items` yang menampung tiga nama menu. Tampilkan setiap isinya ke keluaran memakai perulangan yang memang dirancang untuk array. Nama variabel penampung elemennya bebas kamu tentukan sendiri.",
          starterCode:
            "<?php\n$items = ['Kopi', 'Teh', 'Susu'];\n\n// Cetak setiap elemen $items di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "foreach\\s*\\(\\s*\\$items\\s+as\\s+(?:\\$\\w+\\s*=>\\s*)?\\$\\w+\\s*\\)",
              message:
                "Perulangan array di PHP berbentuk `foreach (<array> as <penampung>)`. Yang dilintasi adalah `$items`; penampungnya kamu namai sendiri. Menuliskan `as` terbalik (`foreach ($item as $items)`) adalah salah ketik yang sering terjadi dan menghasilkan array kosong tanpa error.",
            },
            {
              pattern:
                "foreach\\s*\\(\\s*\\$items\\s+as\\s+(?:\\$\\w+\\s*=>\\s*)?\\$(\\w+)\\s*\\)\\s*[:{][\\s\\S]*?echo[^;]*\\$\\1",
              message:
                "Di dalam badan perulangan, cetak variabel penampung yang tadi kamu namai — bukan `$items` itu sendiri. Meng-echo seluruh array akan memunculkan `Array to string conversion` dan hanya tercetak kata `Array`.",
            },
          ],
          solution: "<?php\n$items = ['Kopi', 'Teh', 'Susu'];\n\nforeach ($items as $item) {\n    echo $item . \"\\n\";\n}",
          susunKode: {
            question:
              "Rangkai perulangan foreach untuk iterasi array $items dan mencetak setiap elemen.",
            potongan: [
              "<?php",
              "$items = ['Kopi', 'Teh', 'Susu'];",
              "foreach ($items as $item) {",
              "    echo $item . \"\\n\";",
              "}",
            ],
            pengecoh: [
              "foreach ($items : $item) {",
              "    echo item . \"\\n\";",
            ],
            pemisah: "\n",
            explanation:
              "Sintaks perulangan foreach di PHP menggunakan kata kunci as untuk memisahkan array sumber dan variabel iterasi. Keping titik dua : menggoda bagi pemula yang terbiasa dengan sintaks JavaScript for...of, tetapi salah di PHP. Keping echo item keliru karena variabel iterasi wajib memakai tanda dollar $item.",
          },
        },
        {
          kind: "step",
          id: "laravel-1-4",
          title: "Membaca Superglobal $_GET dan $_POST",
          explanation:
            "`$_GET` dan `$_POST` adalah array asosiatif yang diisi PHP sendiri sebelum kodemu jalan: `$_GET` berisi parameter yang menempel di URL setelah tanda `?`, `$_POST` berisi isian formulir yang dikirim di badan permintaan. Keduanya disebut *superglobal* karena bisa dibaca dari mana saja tanpa `global` atau parameter — dan justru itu bahayanya. Kapan kamu memakainya langsung? Di PHP murni; begitu masuk Laravel, keduanya dibungkus objek `Request` (`$request->input('category')`) yang menambahkan validasi dan pembersihan. Dua jebakan wajib: **pertama**, isinya sepenuhnya dikendalikan pengunjung, jadi nilai apa pun bisa masuk — memakainya langsung di query SQL adalah celah SQL injection klasik. **Kedua**, membaca kunci yang tidak dikirim hanya memicu `Warning: Undefined array key` lalu program tetap lanjut dengan nilai kosong, sehingga gejalanya terlihat sebagai \"halaman kosong\" alih-alih error yang jelas.",
          example: {
            code:
              "<?php\n" +
              "// URL yang dibuka: /cari.php?search=kopi\n" +
              "$keyword = $_GET['search'];\n" +
              "echo 'Mencari: ' . $keyword;\n\n" +
              "// URL yang dibuka: /cari.php  (tanpa ?search=)\n" +
              "$kosong = $_GET['search'];\n" +
              "echo 'Mencari: ' . $kosong;",
            output:
              "Mencari: kopi\n" +
              "PHP Warning:  Undefined array key \"search\" in /app/cari.php on line 7\n" +
              "Mencari: ",
            note: "Baris terakhir memperlihatkan akibatnya: parameter yang tidak dikirim membuat pencarian berjalan dengan kata kunci kosong. Cara amannya dipelajari di step terakhir modul ini. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Halaman katalog dibuka dengan URL `/produk.php?category=kopi`. Ambil nilai parameter `category` dari superglobal yang menampung isi query string, lalu simpan ke variabel `$cat`.",
          starterCode:
            "<?php\n// Ambil parameter category dari URL, simpan ke $cat\n",
          language: "text",
          tests: [
            {
              pattern: "\\$cat\\s*=\\s*\\$_GET\\s*\\[",
              message:
                "Parameter yang menempel di URL setelah tanda `?` ditampung superglobal khusus query string — namanya sama dengan metode HTTP-nya, ditulis huruf besar dan diawali garis bawah. Isian formulir POST ada di superglobal yang berbeda.",
            },
            {
              pattern: "\\$_GET\\s*\\[\\s*['\"]category['\"]\\s*\\]",
              message:
                "Nama kuncinya harus persis sama dengan nama parameter di URL, termasuk huruf besar-kecilnya. `?category=kopi` berarti kuncinya `category`, bukan `kategori` — salah satu huruf saja membuat nilainya kosong tanpa error yang menghentikan program.",
            },
          ],
          solution: "<?php\n$cat = $_GET['category'];",
          susunKode: {
            question:
              "Susun kode yang membaca parameter query string bernama category dari superglobal bawaan PHP, lalu menyimpannya ke variabel penampung.",
            potongan: [
              "<?php",
              "$cat =",
              "$_GET",
              "['category'];",
            ],
            pengecoh: [
              "$GET",
              "['kategori'];",
            ],
            pemisah: "\n",
            explanation:
              "Superglobal untuk query string ditulis dengan tanda dolar DAN garis bawah di depan namanya, lalu isinya dibaca memakai kurung siku berisi nama kunci. Keping $GET menggoda karena terlihat wajar sebagai nama variabel biasa, padahal garis bawah itu bagian dari nama resminya \u2014 tanpa garis bawah PHP membaca variabel kosong yang tidak pernah diisi siapa pun. Keping ['kategori'] keliru karena nama kunci harus sama persis dengan parameter di URL (?category=), dan salah satu huruf saja membuat nilainya kosong tanpa menghentikan program.",
          },
        },
        {
          kind: "step",
          id: "laravel-1-5",
          title: "Pemisahan Berkas dengan require_once",
          explanation:
            "PHP punya empat cara menyisipkan isi berkas lain, dan perbedaannya cuma dua sumbu: `include` vs `require` menentukan **seberapa fatal** kalau berkasnya hilang, sedangkan akhiran `_once` menentukan **boleh dimuat berulang atau tidak**. `include` yang gagal hanya memunculkan warning dan program lanjut dengan fungsi yang tidak ada — biasanya berujung `Call to undefined function` beberapa baris kemudian, jauh dari penyebabnya. `require` yang gagal langsung menghentikan skrip dengan `Fatal error`, dan justru itu yang kamu inginkan untuk berkas yang wajib ada seperti konfigurasi. Kapan `require_once` dipakai: untuk berkas yang mendeklarasikan fungsi, kelas, atau konstanta, karena memuatnya dua kali berarti `Cannot redeclare` dan skrip mati. Di Laravel kamu hampir tidak pernah menulisnya lagi — Composer memuat kelas otomatis lewat PSR-4 — tetapi berkas `vendor/autoload.php` yang memulai semuanya tetap disertakan dengan cara ini.",
          example: {
            code:
              "// ---- config.php ----\n" +
              "<?php\n" +
              "define('DB_NAME', 'db_laravel');\n\n" +
              "// ---- index.php ----\n" +
              "<?php\n" +
              "require_once 'config.php';\n" +
              "echo DB_NAME;\n\n" +
              "require_once 'config.php';   // dilewati: sudah pernah dimuat\n" +
              "include 'tidak-ada.php';     // hanya warning, program lanjut\n" +
              "echo ' selesai';",
            output:
              "db_laravel\n" +
              "PHP Warning:  include(tidak-ada.php): Failed to open stream: No such file or directory in /app/index.php on line 6\n" +
              " selesai",
            note: "Kalau baris terakhir memakai `require` alih-alih `include`, kata ` selesai` TIDAK akan pernah tercetak — skrip berhenti di situ. Baca pesannya bertahap: *Warning* = peringatan (program tetap lanjut), beda dengan *Fatal error* = kesalahan mematikan (program berhenti). Lalu *Failed to open stream* = gagal membuka aliran berkas, dan *No such file or directory* = tidak ada berkas atau direktori semacam itu. Frasa `No such file or directory` adalah salah satu kalimat paling sering muncul di seluruh dunia pemrograman — artinya selalu sama: **alamat yang kamu sebut tidak ditemukan**, biasanya karena salah ketik nama atau salah letak folder. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Skripmu memanggil beberapa fungsi bantu yang tinggal di berkas `helper.php`. Sisipkan berkas itu dengan bentuk yang memenuhi dua syarat sekaligus: skrip harus **berhenti** kalau berkasnya tidak ditemukan, dan berkasnya **tidak boleh** dimuat dua kali walau dipanggil dari banyak tempat.",
          starterCode:
            "<?php\n// Sisipkan helper.php dengan bentuk yang tepat\n",
          language: "text",
          tests: [
            {
              pattern: "require_once\\s*\\(?\\s*['\"]",
              message:
                "Dua syarat di soal menentukan pilihannya. \"Harus berhenti kalau berkasnya hilang\" mengarah ke `require`, bukan `include`. \"Tidak boleh dimuat dua kali\" menambahkan akhiran `_once`. Gabungkan keduanya menjadi satu kata kunci.",
            },
            {
              pattern: "require_once\\s*\\(?\\s*['\"][^'\"]*helper\\.php['\"]",
              message:
                "Sebutkan nama berkasnya sebagai teks dalam tanda kutip. Jalur relatif dihitung dari berkas yang sedang berjalan, jadi `helper.php` berarti berkas di folder yang sama — kalau berkasnya ada di subfolder, jalurnya ikut ditulis (`lib/helper.php`).",
            },
          ],
          solution: "<?php\nrequire_once 'helper.php';",
          susunKode: {
            question:
              "Rangkai satu pernyataan yang menyisipkan berkas helper.php, menghentikan skrip bila berkasnya tidak ada, dan tidak memuatnya dua kali.",
            potongan: [
              "<?php",
              "require_once",
              "'helper.php';",
            ],
            pengecoh: [
              "include_once",
              "helper.php;",
            ],
            pemisah: "\n",
            explanation:
              "Dua syarat soal menentukan kata kuncinya: 'berhenti kalau berkasnya hilang' memilih require, dan 'tidak boleh dimuat dua kali' menambahkan akhiran _once. Keping include_once menggoda karena juga memuat sekali saja, tetapi ia hanya memberi warning saat berkasnya hilang sehingga skrip lanjut tanpa fungsi yang dibutuhkan dan meledak beberapa baris kemudian. Keping helper.php tanpa tanda kutip keliru karena nama berkas wajib berupa string; tanpa kutip PHP membacanya sebagai konstanta yang belum didefinisikan.",
          },
        },
        {
          kind: "step",
          id: "laravel-1-6",
          title: "Fitur Modern PHP 8: Ekspresi Match",
          explanation:
            "`match` adalah percabangan PHP 8 yang **mengembalikan nilai**, jadi hasilnya bisa langsung disimpan ke variabel — berbeda dari `switch` yang hanya menjalankan blok perintah. Kenapa ini lebih aman? `switch` membandingkan dengan `==` yang longgar, sehingga `switch (0)` ikut cocok dengan `case 'admin'` di PHP versi lama; `match` memakai `===` sehingga tipe datanya harus sama persis. Kamu juga tidak perlu menulis `break` sama sekali, dan lupa `break` adalah sumber bug klasik di `switch` karena eksekusi bocor ke cabang berikutnya. Kapan dipakai: memetakan satu nilai ke nilai lain — kode status ke pesan, peran ke hak akses, kode negara ke mata uang. Jebakannya satu dan cukup galak: kalau tidak ada cabang yang cocok dan kamu tidak menyediakan `default`, PHP melempar `UnhandledMatchError` dan permintaan berakhir dengan error 500.",
          example: {
            code:
              "<?php\n" +
              "$role = 'editor';\n" +
              "$akses = match ($role) {\n" +
              "    'admin' => 'Full',\n" +
              "    'editor', 'writer' => 'Tulis',   // satu cabang, beberapa nilai\n" +
              "    default => 'Read Only',\n" +
              "};\n" +
              "echo $akses;\n\n" +
              "// tanpa default, nilai tak dikenal MELEDAK:\n" +
              "$x = match ('tamu') { 'admin' => 'Full' };",
            output:
              "Tulis\n" +
              "PHP Fatal error:  Uncaught UnhandledMatchError: Unhandled match case 'tamu' in /app/contoh.php:11",
            note: "Satu cabang boleh menampung beberapa nilai sekaligus, dipisah koma. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Editor sudah berisi variabel `$status`. Petakan nilainya menjadi label berbahasa Indonesia memakai percabangan PHP 8 yang langsung mengembalikan nilai: `active` menjadi `Aktif`, dan nilai lain apa pun menjadi `Nonaktif`. Simpan hasilnya ke variabel `$label`.",
          starterCode: "<?php\n$status = 'active';\n// Petakan $status menjadi $label di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$label\\s*=\\s*match\\s*\\(\\s*\\$status\\s*\\)",
              message:
                "Yang diminta adalah percabangan yang menghasilkan nilai, jadi bentuknya `$label = <percabangan>(...)` dan diakhiri titik koma setelah kurung kurawal penutup — titik koma ini sering lupa ditulis karena `switch` tidak membutuhkannya.",
            },
            {
              pattern: "['\"]active['\"]\\s*=>\\s*['\"]Aktif['\"]",
              message:
                "Setiap cabang berbentuk `nilai => hasil`, dipisahkan koma. Perbandingannya ketat (`===`), jadi teks `'active'` tidak akan cocok dengan `'Active'` maupun angka.",
            },
            {
              pattern: "default\\s*=>\\s*['\"]Nonaktif['\"]",
              message:
                "Sediakan juga cabang penampung untuk nilai yang tidak disebutkan. Tanpa itu, status di luar daftar tidak menghasilkan label kosong — melainkan `UnhandledMatchError` yang membuat halaman error 500.",
            },
          ],
          solution: "<?php\n$status = 'active';\n$label = match ($status) {\n    'active' => 'Aktif',\n    default => 'Nonaktif',\n};",
          susunKode: {
            question:
              "Susun ekspresi match modern PHP 8 untuk mencocokkan status 'active' menjadi 'Aktif'.",
            potongan: [
              "<?php",
              "$status = 'active';",
              "$label = match ($status) {",
              "    'active' => 'Aktif',",
              "    default => 'Nonaktif',",
              "};",
            ],
            pengecoh: [
              "$label = switch ($status) {",
              "    default: 'Nonaktif',",
            ],
            pemisah: "\n",
            explanation:
              "Ekspresi match di PHP 8 mengembalikan nilai langsung dan menggunakan sintaks panah => serta ditutup dengan titik koma. Keping switch keliru karena switch adalah struktur kontrol statement, bukan ekspresi yang bisa ditugaskan ke variabel. Keping default: keliru karena match menggunakan sintaks default =>, bukan titik dua.",
          },
        },
        {
          kind: "step",
          id: "laravel-1-7",
          title: "Operator Null Coalescing (??)",
          explanation:
            "Operator `??` (*null coalescing*) mengambil nilai di kirinya bila nilai itu **ada dan bukan null**, dan jatuh ke nilai di kanannya bila tidak. Kenapa ia ada padahal sudah ada `?:`? Karena `??` sekaligus meredam `Warning: Undefined array key` — ia memeriksa keberadaan kunci, bukan cuma isinya; itulah sebabnya ia menggantikan tulisan panjang `isset($_GET['page']) ? $_GET['page'] : 1`. Kapan dipakai: setiap kali membaca data yang mungkin tidak dikirim — parameter URL, isian formulir opsional, kolom database yang boleh `NULL`, kunci konfigurasi. Jebakan yang perlu kamu sadari: `??` hanya peduli pada `null`, jadi teks kosong `''` dan angka `0` dianggap nilai yang sah dan **tidak** diganti — kalau `?page=` dikirim kosong, `$page` bernilai `''`, bukan `1`. Untuk kasus \"kosong juga dianggap tidak ada\", yang dipakai adalah `?:`.",
          example: {
            code:
              "<?php\n" +
              "// URL: /profil.php   (tanpa parameter apa pun)\n" +
              "$nama = $_GET['nama'] ?? 'Guest';\n" +
              "echo $nama . \"\\n\";\n\n" +
              "// URL: /profil.php?nama=   (parameter dikirim, tapi kosong)\n" +
              "$nama2 = $_GET['nama'] ?? 'Guest';\n" +
              "echo '[' . $nama2 . ']' . \"\\n\";\n\n" +
              "// kalau teks kosong juga ingin diganti, pakai ?: bukan ??\n" +
              "$nama3 = ($_GET['nama'] ?? '') ?: 'Guest';\n" +
              "echo $nama3;",
            output: "Guest\n[]\nGuest",
            note: "Baris kedua adalah jebakannya: `??` tidak menolong saat nilainya kosong, hanya saat nilainya tidak ada. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Daftar produk memakai nomor halaman dari URL `?page=3`. Simpan nomor halaman itu ke variabel `$page`. Kalau pengunjung membuka halaman tanpa parameter tersebut, `$page` harus bernilai `1` — dan tidak boleh memunculkan warning apa pun.",
          starterCode: "<?php\n// Ambil nomor halaman dari URL dengan nilai cadangan yang aman\n",
          language: "text",
          tests: [
            {
              pattern: "\\$page\\s*=\\s*(\\(\\s*int\\s*\\)\\s*)?\\$_GET\\s*\\[\\s*['\"]page['\"]\\s*\\]",
              message:
                "Mulai dari sumbernya: nomor halaman datang dari query string, jadi dibaca dari superglobal `$_GET` dengan kunci `page`.",
            },
            {
              pattern: "\\?\\?\\s*1\\b",
              message:
                "Syarat \"tidak boleh memunculkan warning\" yang menentukan bentuknya. Operator `?:` maupun `if (isset(...))` bisa saja bekerja, tetapi yang dirancang khusus untuk ini adalah operator dua tanda tanya — tempelkan setelah pembacaan array, lalu tulis nilai cadangannya.",
            },
          ],
          solution: "<?php\n$page = $_GET['page'] ?? 1;",
          susunKode: {
            potongan: [
              "<?php",
              "$page =",
              "$_GET['page']",
              "?? 1;",
            ],
            pengecoh: [
              "?: 1;",
              "$_POST['page']",
            ],
            pemisah: "\n",
            explanation:
              "Operator ?? (null coalescing) memeriksa keberadaan kunci sekaligus nilainya, jadi ia memberi nilai cadangan tanpa memunculkan warning Undefined array key. Keping ?: menggoda karena hasil akhirnya terlihat sama, padahal Elvis operator membaca dulu nilainya sehingga kunci yang tidak dikirim tetap memicu warning. Keping $_POST['page'] keliru karena nomor halaman datang dari query string di URL, bukan dari badan permintaan formulir.",
          },
        },
        {
  kind: "step",
  id: "laravel-1-8",
  title: "Fungsi Singkat: Arrow Function & Type Hinting",
  explanation: "Arrow Function di PHP (`fn() => ...`) adalah sintaks ringkas untuk closure satu baris yang secara otomatis menangkap variabel dari cakupan induk (*by-value scoping*) tanpa perlu menulis klausa `use (...)`. Penambahan tipe data pada parameter dan nilai kembalian (*type declarations*) memastikan fungsi menolak input yang salah sebelum bug merambat jauh. Kenapa ini penting: di Laravel modern, arrow function digunakan di mana-mana mulai dari pemetaan koleksi (`$collection->map(fn($x) => ...)`), closure rute, hingga pengujian Pest. Kapan dipakai: ketika kamu butuh fungsi anonim ringkas yang hanya mengembalikan satu ekspresi. Jebakan umum: mencoba menulis banyak baris atau blok kurung kurawal `{}` di dalam arrow function — di PHP, arrow function hanya menerima satu ekspresi tunggal.",
  example: {
    code: "<?php\n$kaliDua = fn(int $angka): int => $angka * 2;\necho $kaliDua(7);",
    output: "14",
    note: "Arrow function otomatis mengembalikan hasil evaluasi ekspresi tanpa kata kunci return."
  },
  instruction: "Buat fungsi panah ringkas yang menerima satu parameter `$harga` bertipe `int` dan mengembalikan nilai harga setelah diskon sepuluh persen (dikalikan `0.9`). Simpan fungsi tersebut ke variabel `$hitungDiskon`.",
  starterCode: "<?php\n// Buat arrow function penghitung diskon di sini\n",
  language: "text",
  tests: [
    {
      pattern: "\\$hitungDiskon\\s*=\\s*fn\\s*\\(",
      message: "Deklarasikan arrow function diawali kata kunci fn dan tampung ke variabel $hitungDiskon."
    },
    {
      pattern: "fn\\s*\\(\\s*int\\s*\\$harga\\s*\\)",
      message: "Sertakan type hint int pada parameter $harga di dalam tanda kurung fungsi."
    },
    {
      pattern: "=>\\s*\\$harga\\s*\\*\\s*0\\.9",
      message: "Kembalikan nilai perkalian $harga dengan 0.9 setelah tanda panah =>."
    }
  ],
  solution: "<?php\n$hitungDiskon = fn(int $harga): float => $harga * 0.9;",
  susunKode: {
    question: "Susun deklarasi arrow function PHP dengan type hint yang menghitung diskon harga.",
    potongan: [
      "<?php",
      "$hitungDiskon =",
      "fn(int $harga): float",
      "=> $harga * 0.9;"
    ],
    pengecoh: [
      "function(int $harga)",
      "return $harga * 0.9;"
    ],
    pemisah: "\n",
    explanation: "Arrow function di PHP menggunakan kata kunci fn diikuti deklarasi parameter dan tanda panah ekspresi => tanpa blok kurung kurawal. Keping function(int $harga) keliru karena memerlukan blok fungsi penuh dan kata kunci return. Keping return $harga * 0.9; menggoda tetapi tidak sah di dalam arrow function."
  }
},
        {
          kind: "quiz",
          id: "laravel-1-kuis",
          title: "Kuis: Sintaks Dasar & Fitur Modern PHP",
          questions: [
            {
              id: "l1-q1",
              type: "pilihan-ganda",
              question: "Manakah aturan penulisan variabel yang BENAR di dalam bahasa PHP?",
              choices: [
                "Semua nama variabel wajib diawali tanda dollar $, peka huruf besar-kecil (case-sensitive), dan tidak boleh diawali angka",
                "Variabel dideklarasikan menggunakan kata kunci var atau let seperti JavaScript",
                "Nama variabel di PHP tidak boleh mengandung garis bawah (underscore)",
                "Huruf besar dan kecil dianggap sama pada semua variabel di PHP"
              ],
              answerIndex: 0,
              explanation: "Variabel PHP wajib diawali `$`, dilanjutkan huruf atau garis bawah, dan bersifat case-sensitive (`$total` berbeda dari `$Total`). Kata kunci `var` sudah usang dan `let` tidak ada di PHP."
            },
            {
              id: "l1-q2",
              type: "pilihan-ganda",
              question: "Apa perbedaan utama antara variabel superglobal $_GET dan $_POST?",
              choices: [
                "$_GET hanya menerima file biner gambar, sedangkan $_POST menerima string teks",
                "$_GET secara otomatis mengenkripsi data, sedangkan $_POST mengirim teks polos",
                "$_GET menyimpan data ke basis data, sedangkan $_POST menyimpan ke sesi pengguna",
                "$_GET membaca data yang terlihat di URL query string, sedangkan $_POST membaca data di badan permintaan HTTP"
              ],
              answerIndex: 3,
              explanation: "$_GET mengambil parameter dari query string URL (?key=val), cocok untuk pencarian dan filter yang bisa di-bookmark. $_POST mengambil data dari badan request HTTP, wajib untuk data sensitif atau mutasi data seperti formulir login dan checkout."
            },
            {
              id: "l1-q3",
              type: "pilihan-ganda",
              question: "Mengapa ekspresi match di PHP 8 lebih disukai daripada percabangan switch konvensional?",
              choices: [
                "Match mengeksekusi semua blok tanpa perlu memeriksa kecocokan kondisi",
                "Match mengonversi semua tipe data string ke integer secara otomatis",
                "Match melakukan perbandingan identik ketat (===), mengembalikan nilai langsung, dan tidak rawan fall-through karena tidak memerlukan break",
                "Match dapat berjalan di versi PHP 7.4 tanpa membutuhkan pembaruan interpreter"
              ],
              answerIndex: 2,
              explanation: "Ekspresi `match` menggunakan perbandingan ketat `===` sehingga aman dari bug *type coercion* yang sering terjadi di `switch` (`==`), mengembalikan nilai langsung sebagai ekspresi, dan tidak memerlukan `break` yang sering lupa ditulis."
            },
            {
              id: "l1-q4",
              type: "pilihan-ganda",
              question: "Apa fungsi dari operator null coalescing (??) di PHP?",
              choices: [
                "Mengalikan dua operan jika keduanya bernilai null",
                "Mengembalikan nilai default di sebelah kanan jika operan di sebelah kiri bernilai null atau belum terdefinisi",
                "Mengubah nilai variabel menjadi boolean true atau false",
                "Menghapus variabel dari memori server jika nilainya kosong"
              ],
              answerIndex: 1,
              explanation: "Operator null coalescing `??` mengembalikan operan kanan jika operan kiri `null` atau kuncinya belum ada di array asosiatif, tanpa memicu peringatan *Undefined array key* di PHP."
            },
            {
              id: "l1-q5",
              type: "pilihan-ganda",
              question: "Apa akibatnya jika kamu menggunakan `require` untuk menyertakan file yang ternyata tidak ada di server?",
              choices: [
                "PHP hanya memunculkan Notice ringan dan kode berikutnya tetap berjalan normal",
                "PHP otomatis mengunduh berkas yang hilang dari repositori Composer",
                "PHP melempar Fatal Error dan langsung menghentikan eksekusi seluruh skrip saat itu juga",
                "PHP mengganti isi file yang hilang dengan string kosong tanpa memicu pesan kesalahan"
              ],
              answerIndex: 2,
              explanation: "Pernyataan `require` mewajibkan keberadaan berkas secara mutlak. Jika berkas tidak ditemukan di path yang ditentukan, PHP melempar `Fatal error` dan langsung menghentikan eksekusi. Berbeda dengan `include` yang hanya memunculkan `Warning` dan membiarkan skrip lanjut."
            }
          ]
        }
      ],
    },
    {
      slug: "php-oop",
      title: "PHP OOP & Composer",
      description:
        "Konsep Objek, Namespace, dan Manajer Paket Composer — pondasi utama Laravel.",
      topics: [
        "Class, property, method, constructor",
        "Visibility: public, private, protected",
        "Inheritance, abstract class, interface",
        "Trait — cara PHP berbagi perilaku",
        "Namespace & autoloading (PSR-4)",
        "Composer: install, require, vendor/",
        "Constructor property promotion & typed property",
      ],
      items: [
        {
          kind: "materi",
          id: "laravel-2-m1",
          title: "Pemrograman Berorientasi Objek (OOP) & Autoloading di PHP",
          body:
            "# Konsep Pemrograman Berorientasi Objek (OOP)\n\n" +
            "Pemrograman Berorientasi Objek (*Object-Oriented Programming*) mendasari seluruh arsitektur Laravel. Dalam paradigma ini, program dibagi menjadi unit-unit independen bernama **Class** (cetak biru) dan **Object** (instansiasi nyata dari cetak biru tersebut).\n\n" +
            "## Namespace & Autoloading PSR-4\n\n" +
            "Sebelum adanya standar PSR-4, pengembang PHP harus menuliskan puluhan baris `require_once` di awal berkas. Dengan **Namespace** dan **Composer PSR-4 Autoloading**, PHP akan otomatis memuat file kelas yang dibutuhkan berdasarkan struktur nama foldernya.\n\n" +
            "```text\n" +
            "Struktur Berkas:  app/Services/PaymentService.php\n" +
            "Namespace Class:  namespace App\\Services;\n" +
            "                  class PaymentService {}\n" +
            "\n" +
            "Pemanggilan Kode: use App\\Services\\PaymentService;\n" +
            "                  $payment = new PaymentService();  <-- Otomatis di-load Composer!\n" +
            "```\n\n" +
            "## Rujukan Dasar OOP & Fitur Modern PHP 8\n\n" +
            "| Konsep OOP | Deskripsi & Contoh Sintaks | Kegunaan Utama |\n" +
            "|---|---|---|\n" +
            "| **Encapsulation (Visibility)** | `public`, `protected`, `private` | Membatasi akses properti/method dari luar kelas. |\n" +
            "| **Inheritance (Pewarisan)** | `class Car extends Vehicle` | Mewarisi properti & method dari kelas induk. |\n" +
            "| **Interface** | `interface Authenticatable` | Kontrak metode wajib yang harus diimplementasikan kelas. |\n" +
            "| **Trait** | `use HasFactory, Notifiable;` | Menyuntikkan kode fungsi reusabel ke banyak kelas berbeda. |\n" +
            "| **Constructor Property Promotion** | `public function __construct(public string $name) {}` | Meringkas pembentukan properti dan konstruktor di PHP 8. |\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan **Class** sebagai rancangan skematik mobil cetakan pabrik. **Object** adalah mobil nyata berwarna merah yang keluar dari garis perakitan. **Interface** adalah standar setir dan pedal gas: mobil listrik maupun mobil bensin memiliki mekanisme setir dan pedal yang sama persis sehingga pengemudi tidak perlu belajar cara mengemudikan instrumen baru. **Trait** seperti sistem fitur GPS portabel yang bisa dipasangkan di mobil mana saja tanpa peduli kelas induk mobil tersebut.\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Salah Akses Properti `private`:** Mencoba membaca properti ber-visibility `private` dari luar kelas atau dari kelas anak (*subclass*) akan menghasilkan *Fatal Error*. Gunakan `protected` jika properti ingin diakses oleh kelas turunan.\n" +
            "2. **Lupa Perintah `composer dump-autoload`:** Ketika membuat namespace atau lokasi folder baru secara manual di file `composer.json`, Composer belum mengenali peta kelas baru tersebut sampai kamu menjalankan `composer dump-autoload` di terminal.\n" +
            "3. **Mengabaikan Typed Properties:** Di PHP 8, jika kamu mendeklarasikan `public string $name;` lalu mencoba mengaksesnya sebelum diisi nilai, PHP melempar error *Typed property must not be accessed before initialization*.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Hampir seluruh komponen di Laravel (Controller, Model, Middleware, Request) dibuat dalam bentuk kelas yang mengekstensikan kelas induk Laravel. Penguasaan OOP dan Composer adalah pembeda utama antara pemula yang sekadar menyalin kode dengan *engineer* backend profesional.",
        },
        {
          kind: "step",
          id: "laravel-2-1",
          title: "Deklarasi Class & Constructor Property Promotion",
          explanation:
            "Kelas adalah cetak biru, objek adalah barang jadinya, dan `__construct` adalah fungsi yang otomatis dijalankan tepat saat objek dibuat dengan `new` — di situlah nilai awal dipasang. Sebelum PHP 8, satu properti butuh tiga baris: deklarasi properti, parameter konstruktor, lalu `$this->nama = $nama;`. *Constructor property promotion* memampatkan ketiganya menjadi satu, cukup dengan menambahkan kata kunci visibilitas (`public`/`private`/`protected`) di depan parameter. Kapan dipakai: hampir semua kelas layanan, DTO, dan Form Request di proyek Laravel modern ditulis begini; kamu akan sering melihatnya di kode rekan setim. Jebakannya: kata kunci visibilitas itu **wajib** — tanpanya `$title` hanyalah parameter biasa yang hilang setelah konstruktor selesai, sehingga `$produk->title` melempar `Undefined property`. Jebakan kedua: properti bertipe (`public string $title`) yang belum pernah diisi memicu `Typed property must not be accessed before initialization`, bukan sekadar bernilai kosong.",
          example: {
            code:
              "<?php\n" +
              "class User {\n" +
              "    public function __construct(\n" +
              "        public string $nama,\n" +
              "        private int $umur = 0,     // boleh punya nilai bawaan\n" +
              "    ) {}\n" +
              "}\n\n" +
              "$u = new User('Bimo', 25);\n" +
              "echo $u->nama;\n" +
              "echo \"\\n\";\n" +
              "echo $u->umur;   // private: tidak boleh dibaca dari luar",
            output:
              "Bimo\n" +
              "PHP Fatal error:  Uncaught Error: Cannot access private property User::$umur in /app/contoh.php:12",
            note: "Properti dibaca dengan tanda panah `->`, bukan titik seperti JavaScript. Baris terakhir memperlihatkan `private` benar-benar memblokir akses dari luar kelas. Arti pesannya: *Uncaught* = tidak tertangkap (tidak ada kode yang menangani kesalahan ini), *Cannot access* = tidak bisa mengakses, *private property* = properti privat. Ingat pola `Cannot <kata kerja>` — sudah kamu temui sebagai `Cannot read` di JavaScript, dan akan muncul lagi sebagai `Cannot redeclare`. Semuanya berarti hal yang sama: **komputer menolak melakukan tindakan itu**, dan kata setelah *Cannot* memberi tahu tindakan apa yang ditolak. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Buat kelas `Product` yang setiap objeknya wajib dibuat dengan sebuah judul. Judul itu harus tersimpan sebagai properti publik bernama `title` bertipe `string`, dan deklarasinya ditulis langsung di parameter konstruktor (gaya ringkas PHP 8), bukan dipisah menjadi properti terpisah.",
          starterCode: "<?php\n// Buat kelas Product beserta konstruktornya\n",
          language: "text",
          tests: [
            {
              pattern: "class\\s+Product\\b",
              message:
                "Nama kelas ditulis PascalCase dan tunggal (`Product`, bukan `products`). Konvensi ini yang nanti dipakai Eloquent untuk menebak nama tabelnya.",
            },
            {
              pattern: "function\\s+__construct\\s*\\(",
              message:
                "Fungsi yang otomatis berjalan saat objek dibuat namanya diawali dua garis bawah. Salah tulis satu garis bawah membuat PHP menganggapnya method biasa — objek tetap terbentuk, tapi tanpa nilai awal.",
            },
            {
              pattern: "__construct\\s*\\([^)]*\\bpublic\\s+string\\s+\\$title\\b",
              message:
                "Gaya ringkas PHP 8 mensyaratkan kata kunci visibilitas berada di depan parameter, diikuti tipenya lalu nama variabelnya. Tanpa kata kunci itu, nilainya tidak pernah menjadi properti dan `$produk->title` melempar `Undefined property`.",
            },
          ],
          solution: "<?php\nclass Product {\n    public function __construct(public string $title) {}\n}",
          susunKode: {
            question:
              "Susun kelas Product memanfaatkan fitur Constructor Property Promotion PHP 8.",
            potongan: [
              "<?php",
              "class Product {",
              "    public function __construct(",
              "public string $title",
              ") {}",
              "}",
            ],
            pengecoh: [
              "public $title",
              "    public function Product(",
            ],
            pemisah: "\n",
            explanation:
              "Constructor property promotion menyatukan deklarasi properti dan parameter konstruktor: kata kunci visibilitas ditulis lebih dulu, lalu tipe datanya, baru nama variabelnya. Keping public $title keliru karena tipe string yang diminta soal hilang, dan tanpa tipe PHP menerima nilai apa pun termasuk angka. Keping public function Product( menggoda karena di PHP versi sangat lama konstruktor memang bernama sama dengan kelasnya, padahal sejak PHP 5 namanya wajib __construct \u2014 dengan nama lama, method itu tidak pernah dijalankan saat objek dibuat.",
          },
        },
        {
          kind: "step",
          id: "laravel-2-2",
          title: "Hak Akses Visibility: public, protected, private",
          explanation:
            "Visibilitas menjawab satu pertanyaan: *siapa yang boleh menyentuh ini?* — `public` siapa saja, `protected` kelas ini dan turunannya, `private` hanya kelas ini sendiri. Kenapa tidak semuanya `public` saja? Karena begitu sebuah properti publik dipakai di seratus tempat, kamu tidak bisa lagi mengubah cara penyimpanannya tanpa merusak semuanya; menutupnya dan menyediakan method pembaca (*getter*) membuat kamu bebas mengganti isinya kapan saja. Kapan pilih yang mana: `private` sebagai kebiasaan awal, naikkan ke `protected` hanya ketika kelas turunan benar-benar membutuhkannya, dan `public` untuk hal yang memang bagian dari kontrak kelas. Di dalam kelas, propertinya dibaca lewat `$this->nama` — **tanpa** tanda dolar kedua; menulis `$this->$apiKey` justru berarti \"properti yang namanya tersimpan di variabel `$apiKey`\" dan hampir selalu menghasilkan properti tidak dikenal. Jebakan lain: `private` benar-benar menutup pintu bahkan untuk kelas anak, dan itu penyebab error `Cannot access private property` yang membingungkan saat kamu mewarisi kelas orang lain.",
          example: {
            code:
              "<?php\n" +
              "class BankAccount {\n" +
              "    private int $balance = 1000;\n\n" +
              "    public function getBalance(): int {\n" +
              "        return $this->balance;\n" +
              "    }\n" +
              "}\n\n" +
              "$akun = new BankAccount();\n" +
              "echo $akun->getBalance();   // lewat pintu resmi\n" +
              "echo \"\\n\";\n" +
              "echo $akun->balance;        // menerobos langsung",
            output:
              "1000\n" +
              "PHP Fatal error:  Uncaught Error: Cannot access private property BankAccount::$balance in /app/contoh.php:13",
            note: "Perhatikan bedanya: lewat method nilainya keluar, lewat properti langsung program mati. Itulah gunanya enkapsulasi — saldo hanya bisa dibaca, tidak bisa ditimpa dari luar. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Kelas `Service` di editor menyimpan kunci API. Simpan kunci itu pada properti bernama `apiKey` bertipe `string` yang **tidak** bisa dibaca dari luar kelas tetapi **masih** bisa diakses kelas turunannya. Lalu sediakan satu method publik `getApiKey()` sebagai satu-satunya pintu untuk membacanya.",
          starterCode: "<?php\nclass Service {\n    // Deklarasikan properti dan pintu bacanya di sini\n}",
          language: "text",
          tests: [
            {
              pattern: "\\bprotected\\s+string\\s+\\$apiKey\\b",
              message:
                "Dua syarat di soal menentukan tingkat visibilitasnya: \"tidak bisa dari luar\" mencoret `public`, sedangkan \"masih bisa oleh kelas turunan\" mencoret `private`. Tersisa satu kata kunci di antara keduanya. Sertakan juga tipe datanya sebelum nama variabel.",
            },
            {
              pattern: "public\\s+function\\s+getApiKey\\s*\\(",
              message:
                "Pintu bacanya harus `public` — kalau method-nya ikut tertutup, tidak ada yang bisa memakainya sama sekali. Konvensi penamaan getter di PHP adalah `get` + nama properti dalam camelCase.",
            },
            {
              pattern: "return\\s+\\$this\\s*->\\s*apiKey\\b",
              message:
                "Di dalam kelas, properti diakses lewat `$this->` diikuti nama propertinya **tanpa** tanda dolar. Menulis `$this->$apiKey` berarti hal yang sangat berbeda: PHP akan mencari properti yang namanya tersimpan di dalam variabel `$apiKey`.",
            },
          ],
          solution: "<?php\nclass Service {\n    protected string $apiKey;\n\n    public function getApiKey(): string {\n        return $this->apiKey;\n    }\n}",
          susunKode: {
            question:
              "Rangkai kelas Service dengan properti terproteksi $apiKey dan metode getter publik.",
            potongan: [
              "<?php",
              "class Service {",
              "    protected string $apiKey;",
              "    public function getApiKey(): string {",
              "        return $this->apiKey;",
              "    }",
              "}",
            ],
            pengecoh: [
              "    private string $apiKey;",
              "        return apiKey;",
            ],
            pemisah: "\n",
            explanation:
              "Properti protected hanya dapat diakses di dalam kelas tersebut dan turunan kelasnya. Keping private keliru visibilitas yang diminta. Keping return apiKey menggoda tetapi salah karena pengaksesan atribut kelas di dalam metode wajib menggunakan pseudo-variable $this->apiKey.",
          },
        },
        {
          kind: "step",
          id: "laravel-2-3",
          title: "Inheritance (Pewarisan Kelas)",
          explanation:
            "Kata kunci `extends` membuat sebuah kelas mewarisi seluruh properti dan method kelas induknya, sehingga kelas anak langsung bisa dipakai seolah punya semua itu sendiri. Kenapa ini penting di Laravel? Karena hampir setiap berkas yang kamu buat nanti berbentuk turunan: `class Product extends Model` mendapat puluhan kemampuan database tanpa satu baris pun kamu tulis, dan `class HomeController extends Controller` mendapat helper otorisasi serta validasi. Kapan dipakai: hanya ketika hubungannya benar-benar \"adalah sejenis\" — `Admin` **adalah** `User`, tetapi `Order` bukan `Invoice` meski keduanya mirip. Jebakan pertama: PHP hanya mengizinkan **satu** kelas induk, jadi kebutuhan berbagi perilaku ke banyak kelas yang tidak sejalur diselesaikan dengan Trait, bukan pewarisan bertingkat. Jebakan kedua: begitu kelas anak menulis `__construct` sendiri, konstruktor induk **tidak** ikut berjalan — kamu harus memanggilnya sendiri dengan `parent::__construct()`, dan lupa melakukannya membuat properti bawaan induk kosong tanpa pesan error apa pun.",
          example: {
            code:
              "<?php\n" +
              "class Animal {\n" +
              "    public function speak(): string { return 'Sound'; }\n" +
              "}\n\n" +
              "class Dog extends Animal {\n" +
              "    public function speak(): string { return 'Guk'; }   // menimpa versi induk\n" +
              "    public function fetch(): string { return 'Mengambil bola'; }\n" +
              "}\n\n" +
              "$d = new Dog();\n" +
              "echo $d->speak() . \"\\n\";   // versi anak yang dipakai\n" +
              "echo $d->fetch() . \"\\n\";\n" +
              "echo (new Animal())->fetch();   // induk tidak mewarisi ke atas",
            output:
              "Guk\n" +
              "Mengambil bola\n" +
              "PHP Fatal error:  Uncaught Error: Call to undefined method Animal::fetch() in /app/contoh.php:14",
            note: "Pewarisan hanya mengalir satu arah, dari induk ke anak. Method anak yang bernama sama akan menimpa milik induk (*override* — dalam bahasa Inggris sehari-hari berarti \"membatalkan lalu menggantikan\"). Arti pesan errornya: *Call to undefined method* = panggilan ke method yang tidak terdefinisi. Kata *undefined* akan terus mengikutimu di semua bahasa pemrograman — di JavaScript sebagai `is not defined`, di PHP sebagai `undefined method`. Akar katanya sama: *define* = mendefinisikan/menetapkan, awalan *un-* membalik artinya jadi \"belum ditetapkan\". Jadi setiap kali kamu melihat *undefined*, tanyakan satu hal: **apakah aku memang pernah membuat yang ini?** Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Editor sudah berisi kelas `User`. Buat kelas `Admin` yang otomatis mendapat seluruh properti dan method `User` tanpa menyalin satu barisnya pun. Badan kelas `Admin` boleh kamu biarkan kosong.",
          starterCode: "<?php\nclass User {}\n\n// Buat kelas Admin di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "class\\s+Admin\\b",
              message:
                "Deklarasikan dulu kelas barunya dengan nama `Admin` (PascalCase, tunggal).",
            },
            {
              pattern: "class\\s+Admin\\s+extends\\s+User\\b",
              message:
                "Pewarisan ditulis dengan satu kata kunci antara nama kelas anak dan nama kelas induk — urutannya `class <anak> <kata kunci> <induk>`. Menulisnya terbalik (`class User extends Admin`) tetap sah secara sintaks tetapi membalik arah pewarisannya.",
            },
          ],
          solution: "<?php\nclass User {}\n\nclass Admin extends User {}",
          susunKode: {
            question:
              "Susun kelas Admin yang mewarisi (extends) dari kelas induk User.",
            potongan: [
              "<?php",
              "class User {}",
              "class Admin",
              "extends User",
              "{}",
            ],
            pengecoh: [
              "implements User",
              "inherits User",
            ],
            pemisah: "\n",
            explanation:
              "Pewarisan kelas di PHP memakai kata kunci extends yang ditulis di antara nama kelas anak dan nama kelas induknya. Keping implements keliru karena kata kunci itu hanya untuk antarmuka (interface), dan memakainya pada kelas biasa membuat PHP menolak berkasnya. Keping inherits menggoda bagi yang mengira kata kuncinya mengikuti istilah bahasa Inggris untuk pewarisan, tetapi inherits sama sekali bukan kata kunci PHP.",
          },
        },
        {
          kind: "step",
          id: "laravel-2-4",
          title: "Penggunaan Interface untuk Kontrak Metode",
          explanation:
            "`interface` adalah daftar tanda tangan method tanpa isi — sebuah janji bahwa siapa pun yang menuliskan `implements` akan menyediakan method-method itu. Kenapa berguna kalau tidak berisi kode apa pun? Karena ia memindahkan kesalahan dari waktu berjalan ke waktu memuat berkas: kelas yang lupa melengkapi kontraknya gagal seketika dengan pesan yang menyebut method mana yang kurang, bukan `Call to undefined method` saat pengguna sedang bertransaksi. Kapan dipakai: ketika satu peran punya beberapa pelaksana yang bisa ditukar — `PaymentInterface` untuk Midtrans dan Xendit, `RepositoryInterface` untuk MySQL dan API. Di Laravel, interface-lah yang membuat Service Container bisa \"menyuntik\" implementasi berbeda antara lingkungan pengujian dan produksi tanpa satu baris pun Controller berubah. Jebakan pemula: berbeda dari kelas induk, sebuah kelas boleh `implements` banyak interface sekaligus — dan semua method di dalamnya harus `public`, karena kontrak menurut definisinya bersifat terbuka.",
          example: {
            code:
              "<?php\n" +
              "interface PaymentInterface {\n" +
              "    public function pay(int $amount): bool;   // hanya kontrak, tanpa badan\n" +
              "}\n\n" +
              "class Midtrans implements PaymentInterface {\n" +
              "    public function pay(int $amount): bool { return $amount > 0; }\n" +
              "}\n\n" +
              "$gateway = new Midtrans();\n" +
              "var_dump($gateway->pay(50000));\n" +
              "var_dump($gateway instanceof PaymentInterface);",
            output:
              "bool(true)\n" +
              "bool(true)\n\n" +
              "# berkas lain (xendit.php) yang mengaku ikut kontrak tapi tidak melengkapinya:\n" +
              "#   <?php\n" +
              "#   require 'kontrak.php';\n" +
              "#   class Xendit implements PaymentInterface {}\n" +
              "# berkasnya ditolak saat dimuat — belum satu baris pun dijalankan:\n" +
              "PHP Fatal error:  Class Xendit contains 1 abstract method and must therefore be declared abstract or implement the remaining method (PaymentInterface::pay) in /app/xendit.php on line 3",
            note: "Blok kedua adalah nilai jual interface: pelanggarannya ketahuan saat berkas dimuat, bukan saat pengguna menekan tombol bayar. `var_dump` dipakai di sini karena `echo true` hanya mencetak `1` dan `echo false` tidak mencetak apa-apa. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Timmu ingin bisa menukar sumber data (MySQL hari ini, API pihak ketiga besok) tanpa mengubah Controller. Buat sebuah kontrak bernama `RepositoryInterface` yang mewajibkan setiap kelas pelaksananya menyediakan method publik `find` dengan satu parameter `$id` bertipe `int`. Kontrak ini hanya berisi tanda tangan method-nya, tanpa badan fungsi.",
          starterCode: "<?php\n// Buat kontraknya di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\binterface\\s+RepositoryInterface\\b",
              message:
                "Yang mendeklarasikan kontrak bukan `class` melainkan kata kunci lain. Konvensi Laravel menamainya berakhiran `Interface` (atau meletakkannya di folder `Contracts`) supaya jelas ia bukan kelas biasa.",
            },
            {
              pattern:
                "interface\\s+RepositoryInterface[\\s\\S]*?function\\s+find\\s*\\(\\s*int\\s+\\$id\\s*\\)",
              message:
                "Sebutkan tanda tangan method-nya lengkap dengan tipe parameternya: `find` menerima satu `int $id`. Tipe di kontrak inilah yang nanti dipaksakan ke semua kelas pelaksana.",
            },
            {
              pattern:
                "function\\s+find\\s*\\([^)]*\\)\\s*(:\\s*[\\w\\\\|?]+\\s*)?;",
              message:
                "Method di dalam interface diakhiri titik koma, bukan kurung kurawal. Menuliskan badan fungsi — sekalipun kosong `{}` — membuat PHP melempar `Interface function find() cannot contain body`.",
            },
          ],
          solution: "<?php\ninterface RepositoryInterface {\n    public function find(int $id);\n}",
          susunKode: {
            question:
              "Rangkai antarmuka RepositoryInterface yang memuat kontrak metode find(int $id).",
            potongan: [
              "<?php",
              "interface RepositoryInterface {",
              "    public function find(int $id);",
              "}",
            ],
            pengecoh: [
              "class RepositoryInterface {",
              "    public function find(int $id) {}",
            ],
            pemisah: "\n",
            explanation:
              "Antarmuka dideklarasikan dengan kata kunci interface dan metodenya tidak boleh memiliki body fungsi {}. Keping class keliru karena antarmuka bukan kelas. Keping fungsi dengan body {} keliru karena metode dalam interface hanya berupa deklarasi tanda tangan (signature).",
          },
        },
        {
          kind: "step",
          id: "laravel-2-5",
          title: "Menggunakan Trait untuk Modul Reusabel",
          explanation:
            "Trait adalah kumpulan method **beserta isinya** yang bisa disalin-tempel oleh compiler ke dalam kelas mana pun lewat kata kunci `use` di dalam badan kelas. Kenapa ia ada? Karena PHP hanya mengizinkan satu kelas induk, sementara kebutuhan berbagi perilaku sering melintasi hierarki: `Order`, `Invoice`, dan `Ticket` sama-sama perlu dicatat waktunya meski tidak punya induk yang sama. Bedanya dengan interface: interface hanya berisi janji, trait berisi kode nyata — jadi trait menjawab \"bagaimana\", interface menjawab \"apa\". Kapan dipakai: kamu akan langsung melihatnya di Model Laravel bawaan (`use HasFactory, Notifiable;`). Jebakan yang penting: `use` di dalam badan kelas (menyisipkan trait) sama sekali berbeda dari `use` di baris atas berkas (mengimpor namespace) — dua hal berbeda dengan kata kunci sama, dan pemula sering menaruhnya di tempat yang salah. Jebakan kedua: dua trait yang punya method bernama sama menyebabkan `Fatal error: trait method collision`, yang harus diselesaikan manual dengan klausa `insteadof`.",
          example: {
            code:
              "<?php\n" +
              "trait Loggable {\n" +
              "    public function log(string $msg): void { echo '[LOG] ' . $msg . \"\\n\"; }\n" +
              "}\n\n" +
              "class Order {\n" +
              "    use Loggable;   // menyisipkan method log() ke dalam kelas ini\n" +
              "}\n" +
              "class Ticket {\n" +
              "    use Loggable;   // kelas lain, tanpa induk yang sama\n" +
              "}\n\n" +
              "(new Order())->log('Order dibuat');\n" +
              "(new Ticket())->log('Tiket dibuka');",
            output: "[LOG] Order dibuat\n[LOG] Tiket dibuka",
            note: "`Order` dan `Ticket` tidak punya kelas induk bersama, tetapi keduanya mendapat method yang sama — itulah yang tidak bisa dilakukan `extends`. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Editor sudah berisi trait `Timestampable` dan kelas `Invoice` yang masih kosong. Sisipkan seluruh perilaku trait itu ke dalam `Invoice`. Perhatikan letaknya: penyisipan trait ditulis di dalam badan kelas, bukan di baris atas berkas.",
          starterCode:
            "<?php\ntrait Timestampable {}\n\nclass Invoice {\n    // Sisipkan trait di sini\n}",
          language: "text",
          tests: [
            {
              pattern: "class\\s+Invoice\\s*\\{[^}]*\\buse\\s+Timestampable\\b",
              message:
                "Penyisipan trait memakai kata kunci `use` diikuti nama trait, dan harus berada DI DALAM kurung kurawal kelas. Kalau kamu menaruhnya di atas berkas (sebaris dengan `<?php`), PHP membacanya sebagai impor namespace dan method-nya tidak pernah masuk ke kelas.",
            },
            {
              pattern: "use\\s+Timestampable\\s*(,\\s*\\w+\\s*)*;",
              message:
                "Barisnya diakhiri titik koma. Kalau nanti butuh lebih dari satu trait, namanya cukup dipisah koma dalam satu baris `use` — bukan ditulis sebagai daftar `extends`.",
            },
          ],
          solution: "<?php\ntrait Timestampable {}\n\nclass Invoice {\n    use Timestampable;\n}",
          susunKode: {
            question:
              "Rangkai trait Timestampable dan gunakan trait tersebut di dalam kelas Invoice.",
            potongan: [
              "<?php",
              "trait Timestampable {}",
              "class Invoice {",
              "    use Timestampable;",
              "}",
            ],
            pengecoh: [
              "    use HasTimestamps;",
              "    use TimestampableTrait;",
            ],
            pemisah: "\n",
            explanation:
              "Trait dideklarasikan dengan kata kunci trait dan diimpor di dalam tubuh kelas menggunakan kata kunci use. Keping use HasTimestamps keliru nama trait yang diminta. Keping use TimestampableTrait menggoda tetapi menyalahi nama trait Timestampable yang dipersyaratkan.",
          },
        },
        {
          kind: "step",
          id: "laravel-2-6",
          title: "Pengorganisasian Kode dengan Namespace",
          explanation:
            "Namespace adalah nama depan sebuah kelas: `App\\Services\\Mailer` dan `Vendor\\Mail\\Mailer` boleh hidup berdampingan karena nama lengkapnya berbeda, meski nama pendeknya sama. Kenapa wajib dipahami sekarang? Karena Composer memakai namespace untuk **menemukan berkasnya**: aturan PSR-4 memetakan `App\\` ke folder `app/`, sehingga `App\\Services\\Mailer` dicari di `app/Services/Mailer.php`. Konsekuensinya, salah satu huruf di namespace membuat kelas \"tidak ditemukan\" walaupun berkasnya jelas ada — dan pesan errornya `Class not found`, bukan `namespace salah`. Kapan ditulis: baris pertama setelah `<?php`, sebelum semua `use` dan sebelum deklarasi kelas; satu berkas hanya boleh punya satu namespace. Jebakan berikutnya: pemisahnya adalah garis miring terbalik `\\`, bukan `/` seperti jalur berkas, dan pemakaian kelas dari namespace lain butuh baris `use` di atas — tanpa itu PHP mencarinya di namespace berkas saat ini dan gagal. Setelah menambah folder baru, jalankan `composer dump-autoload` agar peta kelasnya diperbarui.",
          example: {
            code:
              "// ---- app/Services/Mailer.php ----\n" +
              "<?php\n" +
              "namespace App\\Services;\n\n" +
              "class Mailer {\n" +
              "    public function send(): string { return 'terkirim'; }\n" +
              "}\n\n" +
              "// ---- app/Http/Controllers/HomeController.php ----\n" +
              "<?php\n" +
              "namespace App\\Http\\Controllers;\n\n" +
              "use App\\Services\\Mailer;   // impor: tanpa baris ini, kelasnya tidak ketemu\n\n" +
              "class HomeController {\n" +
              "    public function index(): string {\n" +
              "        return (new Mailer())->send();\n" +
              "    }\n" +
              "}\n\n" +
              "echo (new HomeController())->index();",
            output: "terkirim",
            note: "Kalau baris `use App\\Services\\Mailer;` dihapus, PHP mencari `App\\Http\\Controllers\\Mailer` dan gagal dengan `Class \"App\\Http\\Controllers\\Mailer\" not found` — pesan yang menyebut folder controller, padahal berkasnya ada di folder services. Catatan jujur: panel latihan tidak menjalankan PHP, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Berkas di editor akan disimpan sebagai `app/Controllers/HomeController.php`. Beri berkas ini penanda namespace yang sesuai jalur foldernya menurut aturan PSR-4, dan letakkan di posisi yang benar (sebelum deklarasi kelas).",
          starterCode:
            "<?php\n// Beri penanda namespace di sini\n\nclass HomeController {}",
          language: "text",
          tests: [
            {
              pattern: "^\\s*(<\\?php\\s*)?namespace\\s+",
              flags: "im",
              message:
                "Penandanya ditulis dengan kata kunci `namespace` dan harus berada di pernyataan pertama berkas — setelah `<?php`, tetapi sebelum `use` maupun `class`. Menaruhnya setelah deklarasi kelas memicu `Namespace declaration statement has to be the very first statement`.",
            },
            {
              pattern: "namespace\\s+App\\\\Controllers\\s*;",
              message:
                "Isinya mengikuti jalur foldernya: `app/Controllers/` menjadi `App\\Controllers`. Perhatikan dua hal — huruf pertama tiap segmen kapital, dan pemisahnya garis miring TERBALIK (`\\`), bukan `/` seperti jalur berkas.",
            },
          ],
          solution: "<?php\nnamespace App\\Controllers;\n\nclass HomeController {}",
          susunKode: {
            question:
              "Susun deklarasi namespace App\\Controllers untuk kelas HomeController.",
            potongan: [
              "<?php",
              "namespace App\\Controllers;",
              "class HomeController {}",
            ],
            pengecoh: [
              "package App\\Controllers;",
              "namespace App/Controllers;",
            ],
            pemisah: "\n",
            explanation:
              "Deklarasi namespace diawali kata kunci namespace di awal berkas dengan pemisah garis miring terbalik (backslash \\). Keping package menggoda bagi pengembang Java. Keping garis miring biasa / keliru karena PHP hanya mengenali backslash untuk hierarki namespace.",
          },
        },
        {
          kind: "step",
          id: "laravel-2-7",
          title: "Menginstal Paket Eksternal dengan Composer",
          explanation:
            "`composer require <vendor>/<paket>` mengunduh sebuah pustaka dari packagist.org, mencatatnya di `composer.json`, mengunci versi persisnya di `composer.lock`, lalu memperbarui autoloader supaya kelas-kelasnya langsung bisa dipakai tanpa satu pun `require_once`. Kenapa dua berkas? `composer.json` menyimpan rentang versi yang kamu izinkan (`^7.8`), sedangkan `composer.lock` menyimpan versi yang benar-benar terpasang — dan berkas kunci inilah yang membuat komputermu, komputer rekan setim, dan server produksi memasang versi yang sama persis. Kapan pakai `require` dan kapan `install`: `require` untuk menambah paket baru, `install` untuk memasang ulang apa yang sudah tercatat di berkas kunci (itulah yang dijalankan di server). Jebakan yang mahal: folder `vendor/` **tidak** ikut di-commit ke Git (ia dibuat ulang dari `composer.lock`), sementara `composer.lock` **wajib** di-commit — banyak tim pemula melakukan kebalikannya lalu bingung kenapa versi paket di server berbeda. Jangan pernah menyunting isi `vendor/` secara manual: perubahanmu hilang pada `composer update` berikutnya.",
          example: {
            code: "# Di terminal, di dalam folder proyek:\ncomposer require nesbot/carbon",
            output:
              "./composer.json has been updated\n" +
              "Running composer update nesbot/carbon\n" +
              "Loading composer repositories with package information\n" +
              "Updating dependencies\n" +
              "Lock file operations: 1 install, 0 updates, 0 removals\n" +
              "  - Locking nesbot/carbon (3.8.4)\n" +
              "Writing lock file\n" +
              "Installing dependencies from lock file (including require-dev)\n" +
              "  - Installing nesbot/carbon (3.8.4): Extracting archive\n" +
              "Generating optimized autoload files",
            note: "Tiga baris terakhir menunjukkan tiga hal yang terjadi sekaligus: berkas kunci ditulis, paket diekstrak ke `vendor/`, dan peta autoload dibuat ulang. Catatan jujur: panel latihan tidak menjalankan terminal, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah perintah yang kamu tulis.",
          },
          instruction:
            "Tuliskan perintah terminal untuk mengunduh paket `guzzlehttp/guzzle` menggunakan Composer.",
          starterCode: "# Tulis perintah composer require di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "composer\\s+require",
                        "message": "Paket PHP dipasang dengan `composer require` (bukan `composer install`, yang hanya memasang ulang apa yang sudah tercatat di `composer.json`)."
                      },
                      {
                        "pattern": "guzzlehttp/guzzle",
                        "message": "Nama paket Composer selalu berbentuk `vendor/nama`. Untuk HTTP client, vendornya sama dengan nama paketnya. Paket masuk ke `require` — tambahkan `--dev` hanya untuk alat bantu pengembangan."
                      }
                    ],
          solution: "composer require guzzlehttp/guzzle",
          susunKode: {
            question:
              "Rangkai perintah terminal Composer untuk menginstal paket guzzlehttp/guzzle.",
            potongan: [
              "composer",
              "require",
              "guzzlehttp/guzzle",
            ],
            pengecoh: [
              "composer install",
              "guzzle/guzzle",
            ],
            pemisah: " ",
            explanation:
              "Perintah composer require digunakan untuk menambahkan dependency paket baru ke proyek PHP. Keping composer install keliru karena install digunakan untuk mengunduh dependensi dari lockfile yang sudah ada. Keping guzzle/guzzle menggoda tetapi nama vendor resmi di Packagist adalah guzzlehttp.",
          },
        },
        {
  kind: "step",
  id: "laravel-2-8",
  title: "Mendefinisikan Status dengan PHP Backed Enum",
  explanation: "PHP 8.1 memperkenalkan Backed Enum yang mengikat kasus enumerasi ke nilai primitif skalar berupa string atau integer. Dalam arsitektur Laravel modern, enum menggantikan konstanta kelas kuno untuk merepresentasikan status pesanan, jenis pengguna, atau tahapan alur kerja. Kenapa ini menjadi standar industri: enum memberikan keamanan tipe (*type safety*) penuh di level PHP dan dapat dicasting otomatis oleh Model Eloquent melalui properti `$casts`. Kapan dipakai: setiap kali suatu kolom database hanya boleh bernilai salah satu dari kumpulan pilihan yang tetap. Jebakan umum: lupa memberi tanda `: string` atau `: int` setelah nama enum saat kamu butuh enum yang nilainya tersimpan di database — enum murni tanpa tipe pendukung tidak memiliki properti `->value`.",
  example: {
    code: "<?php\nenum UserRole: string {\n    case ADMIN = 'admin';\n    case MEMBER = 'member';\n}\n\necho UserRole::ADMIN->value;",
    output: "admin",
    note: "Akses properti ->value menghasilkan nilai string yang siap disimpan ke database."
  },
  instruction: "Definisikan Backed Enum bernama `OrderStatus` bertipe string dengan dua kasus status: `PENDING` bernilai `'pending'`, dan `PAID` bernilai `'paid'`.",
  starterCode: "<?php\n// Definisikan Backed Enum OrderStatus di sini\n",
  language: "text",
  tests: [
    {
      pattern: "enum\\s+OrderStatus\\s*:\\s*string\\s*\\{",
      message: "Gunakan kata kunci enum OrderStatus : string untuk mendeklarasikan Backed Enum berbasis string."
    },
    {
      pattern: "case\\s+PENDING\\s*=\\s*['\"]pending['\"];",
      message: "Definisikan kasus PENDING dengan nilai string 'pending'."
    },
    {
      pattern: "case\\s+PAID\\s*=\\s*['\"]paid['\"];",
      message: "Definisikan kasus PAID dengan nilai string 'paid'."
    }
  ],
  solution: "<?php\nenum OrderStatus: string {\n    case PENDING = 'pending';\n    case PAID = 'paid';\n}",
  susunKode: {
    question: "Susun deklarasi PHP Backed Enum untuk mengelola status pesanan.",
    potongan: [
      "<?php",
      "enum OrderStatus: string {",
      "    case PENDING = 'pending';",
      "    case PAID = 'paid';",
      "}"
    ],
    pengecoh: [
      "enum OrderStatus {",
      "    const PENDING = 'pending';"
    ],
    pemisah: "\n",
    explanation: "Backed Enum PHP membutuhkan deklarasi tipe dasar seperti : string agar setiap varian case dapat memiliki nilai primitif. Keping enum OrderStatus { keliru karena menjadikannya pure enum tanpa nilai pendukung. Keping const PENDING = 'pending'; menggoda karena merupakan kebiasaan lama sebelum enum ada."
  }
},
        {
          kind: "quiz",
          id: "laravel-2-kuis",
          title: "Kuis: PHP OOP & Arsitektur Modern",
          questions: [
            {
              id: "l2-q1",
              type: "pilihan-ganda",
              question: "Apakah keuntungan utama dari fitur Constructor Property Promotion di PHP 8?",
              choices: [
                "Membuat objek baru tanpa perlu mendeklarasikan method __construct",
                "Meringkas pengenalan properti dan pengisian nilainya secara langsung di parameter __construct tanpa deklarasi berulang",
                "Mengizinkan sebuah kelas mewarisi lebih dari sepuluh kelas induk sekaligus",
                "Menjamin seluruh properti kelas otomatis tersimpan ke tabel basis data"
              ],
              answerIndex: 1,
              explanation: "Constructor Property Promotion menggabungkan deklarasi properti, tipe data, parameter konstruktor, dan assignment `$this->prop = $prop` menjadi satu baris deklarasi di signature `__construct`, memangkas *boilerplate* kelas secara signifikan."
            },
            {
              id: "l2-q2",
              type: "pilihan-ganda",
              question: "Tingkat hak akses (visibility) mana yang memperbolehkan properti diakses di dalam kelas sendiri dan kelas turunannya, namun tertutup dari luar?",
              choices: [
                "public",
                "private",
                "protected",
                "static"
              ],
              answerIndex: 2,
              explanation: "Hak akses `protected` membatasi visibilitas hanya untuk kelas itu sendiri dan kelas anak yang mewarisinya. `private` hanya mengizinkan kelas pemilik asli, sedangkan `public` terbuka bebas untuk diakses dari mana saja."
            },
            {
              id: "l2-q3",
              type: "pilihan-ganda",
              question: "Mengapa standar Namespace PSR-4 sangat penting dalam proyek Laravel dan PHP modern?",
              choices: [
                "Memungkinkan pemuatan berkas kelas secara otomatis (autoloading) berdasarkan struktur folder tanpa banyak require_once",
                "Mencegah peretas membaca kode sumber PHP yang disimpan di server hosting",
                "Menggantikan fungsi database relasional dengan sistem file terenkripsi",
                "Mengompresi seluruh berkas kelas PHP menjadi berkas archive zip saat dijalankan"
              ],
              answerIndex: 0,
              explanation: "PSR-4 memetakan namespace kelas (seperti `App\\Services\\BillingService`) langsung ke struktur direktori fisik (`app/Services/BillingService.php`). Autoloader Composer memuat berkas kelas secara otomatis saat kelas dipanggil tanpa perlu `require_once` manual."
            },
            {
              id: "l2-q4",
              type: "pilihan-ganda",
              question: "Apa perbedaan mendasar antara Interface dan Trait di PHP?",
              choices: [
                "Interface dapat diinstansiasi langsung, sedangkan Trait memerlukan kata kunci new",
                "Trait hanya boleh berisi properti statis, sedangkan Interface memiliki method dinamis",
                "Interface khusus untuk query database, sedangkan Trait khusus untuk tampilan HTML",
                "Interface hanya mendefinisikan kontrak metode tanpa isi, sedangkan Trait berisi implementasi metode reusable yang dapat disuntikkan ke kelas"
              ],
              answerIndex: 3,
              explanation: "Interface adalah kontrak murni: hanya mendeklarasikan signature method yang wajib dibuat oleh kelas yang mengimplementasikannya. Trait adalah sarana *horizontal code reuse* yang menyuntikkan logika kode nyata ke banyak kelas tanpa hierarki pewarisan bertingkat."
            },
            {
              id: "l2-q5",
              type: "pilihan-ganda",
              question: "Di dalam direktori manakah Composer menyimpan seluruh berkas pustaka eksternal yang diunduh?",
              choices: [
                "app/Http/Controllers/",
                "resources/views/",
                "vendor/",
                "storage/logs/"
              ],
              answerIndex: 2,
              explanation: "Composer mengunduh semua pustaka dari Packagist ke direktori `vendor/` dan menaruh `vendor/autoload.php` di dalamnya. Folder ini umumnya dimasukkan ke `.gitignore` karena dapat dibangun ulang dengan `composer install`."
            }
          ]
        }
      ],
    },
    {
      slug: "laravel-fundamental",
      title: "Laravel Fundamental",
      description:
        "Arsitektur MVC, Routing, Controller, dan Templating Engine Blade.",
      topics: [
        "Instalasi, struktur folder, artisan",
        "Routing: get/post, parameter, named route",
        "Controller & resource controller",
        "Blade: layout, section, komponen, direktif",
        "Request & Response: input, redirect, session flash",
        "Konfigurasi & .env",
        "Middleware: konsep pipeline",
      ],
      items: [
        {
          kind: "materi",
          id: "laravel-3-m1",
          title: "Arsitektur MVC, Request Lifecycle, dan Blade Templating",
          body:
            "# Arsitektur Model-View-Controller (MVC)\n\n" +
            "Laravel menggunakan pola arsitektur **MVC** untuk memisahkan tanggung jawab kode aplikasi:\n\n" +
            "- **Model (`app/Models`):** Mengelola data, logika bisnis, dan hubungan database.\n" +
            "- **View (`resources/views`):** Menangani tampilan antarmuka pengguna menggunakan Templating Engine Blade.\n" +
            "- **Controller (`app/Http/Controllers`):** Menerima permintaan (*request*), memproses logika melalui Model, dan mengembalikan tampilan View atau JSON.\n\n" +
            "## Siklus Hidup Request (Request Lifecycle)\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 1. HTTP Request dikirim pengguna (contoh: GET /produk/12)               |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "                                    |\n" +
            "                                    v\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 2. public/index.php -> Memuat Autoloader & Bootstrap App                |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "                                    |\n" +
            "                                    v\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 3. Routing (routes/web.php) -> Pencocokan URL & Jalur Middleware        |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "                                    |\n" +
            "                                    v\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 4. Controller (ProdukController@show) -> Mengambil data dari Model      |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "                                    |\n" +
            "                                    v\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 5. View (resources/views/produk/show.blade.php) -> Mengembalikan HTML   |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Sintaks Direktif Utama Blade Templating\n\n" +
            "| Direktif Blade | Contoh Sintaks | Fungsi Utama |\n" +
            "|---|---|---|\n" +
            "| **Cetak Nilai** | `{{ $nama }}` | Mencetak data dengan sanitasi otomatis `htmlspecialchars` (aman XSS). |\n" +
            "| **Kondisional** | `@if($stok > 0) ... @else ... @endif` | Menampilkan blok HTML berdasarkan kondisi logika. |\n" +
            "| **Perulangan** | `@foreach($users as $u) ... @endforeach` | Melakukan iterasi array data di tampilan. |\n" +
            "| **Layout Inheritance** | `@extends('layouts.app')` & `@yield('content')` | Menyusun tata letak utama reusabel di seluruh halaman. |\n" +
            "| **Form Token Security** | `@csrf` | Menyuntikkan input hidden CSRF token di setiap formulir HTML. |\n\n" +
            "## Konfigurasi Lingkungan (`.env`)\n\n" +
            "Berkas `.env` di akar proyek menyimpan kredensial sensitif seperti pengaturan database, SMTP email, dan Kunci Enkripsi Aplikasi (`APP_KEY`). **Jangan pernah mengunggah berkas `.env` ke Git publik.** Gunakan `.env.example` sebagai rujukan kredensial kosong.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan alur MVC di restoran berkelas. **Routing** adalah penerima tamu di pintu depan yang mengarahkan pelanggan ke meja yang tepat. **Controller** adalah pelayan restoran yang mencatat pesanan dari pelanggan, membawanya ke dapur, lalu mengantarkan hidangan jadi kembali ke meja. **Model** adalah koki di dapur yang mengolah bahan makanan dari lemari pendingin (database). **View (Blade)** adalah piring dan hiasan makanan yang mempercantik tampilan hidangan saat disajikan ke pelanggan.\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Lupa Menjalankan `php artisan config:clear`:** Setelah mengubah nilai variabel di berkas `.env`, Laravel terkadang masih menggunakan nilai cache lama jika konfigurasi telah di-cache. Jalankan `php artisan config:clear` untuk memperbarui cache.\n" +
            "2. **Menuliskan Logika Query Database di View:** Mengetik query database langsung di file `.blade.php` melanggar prinsip MVC dan membuat aplikasi sangat sulit dirawat.\n" +
            "3. **Urutan Route yang Bentrok:** Menempatkan route berparameter dinamis seperti `Route::get('/users/{id}')` **di atas** route statis `Route::get('/users/create')` akan menyebabkan URL `/users/create` dianggap mencari user dengan ID bernilai `'create'`.\n\n" +
            "## Arsitektur Modern Laravel 11: bootstrap/app.php\n\n" +
            "Pada Laravel versi lama (Laravel 10 ke bawah), middleware dan routing didaftarkan di dalam berkas `app/Http/Kernel.php`. Namun di **Laravel 11**, arsitektur disederhanakan secara radikal:\n" +
            "1. Berkas `Kernel.php` dihapus sepenuhnya.\n" +
            "2. Seluruh konfigurasi middleware, routing, dan penanganan exception kini dipusatkan di berkas `bootstrap/app.php` menggunakan pola fluent builder (`withMiddleware()`, `withExceptions()`, `withRouting()`).\n" +
            "3. Pemula tidak perlu lagi bingung mencari di mana mendaftarkan alias middleware global, karena semuanya didefinisikan secara deklaratif di satu tempat yang ringkas.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Penguasaan struktur folder Laravel dan arsitektur MVC adalah syarat utama saat bekerja dalam tim pengembang software profesional agar setiap pengembang dapat bekerja di area berkas yang terstruktur tanpa saling menimpa kode.",
        },
        {
          kind: "step",
          id: "laravel-3-1",
          title: "Routing Dasar: GET & POST Request",
          explanation:
            "Satu baris route menjawab dua hal sekaligus: **metode HTTP apa** dan **alamat apa** yang ditangani, lalu **siapa** yang menanganinya. `Route::get('/contact', ...)` berarti \"kalau ada permintaan GET ke /contact, jalankan ini\"; penanganya boleh berupa fungsi anonim (untuk halaman sederhana) atau method Controller (untuk logika sungguhan). Kenapa metodenya dibedakan? Karena GET dianggap aman dan boleh diulang/di-bookmark, sedangkan POST mengubah data — memakai GET untuk menghapus produk berarti crawler mesin pencari bisa menghapus isi databasemu hanya dengan menelusuri tautan. Kapan ditulis di mana: route yang menghasilkan halaman ada di `routes/web.php`, route yang menghasilkan JSON ada di `routes/api.php`. Jebakan yang paling sering menghabiskan waktu pemula: urutan route berpengaruh — Laravel memakai yang **cocok pertama**, jadi `/users/{id}` yang ditulis di atas `/users/create` membuat kata `create` dibaca sebagai id, dan halaman formulirnya tidak pernah muncul. Jebakan kedua: setelah menjalankan `php artisan route:cache`, route baru tidak akan terbaca sampai cache-nya dibersihkan.",
          example: {
            code:
              "// routes/web.php\n" +
              "use Illuminate\\Support\\Facades\\Route;\n\n" +
              "Route::get('/about', function () {\n" +
              "    return 'Halaman About';\n" +
              "});",
            output:
              "$ curl -i http://127.0.0.1:8000/about\n" +
              "HTTP/1.1 200 OK\n" +
              "Content-Type: text/html; charset=UTF-8\n\n" +
              "Halaman About\n\n" +
              "$ curl -i http://127.0.0.1:8000/tentang\n" +
              "HTTP/1.1 404 Not Found",
            note: "Nilai yang di-`return` menjadi badan responsnya. Alamat yang tidak terdaftar tidak menghasilkan halaman kosong, melainkan 404 — itu cara tercepat memastikan route-mu benar-benar terbaca. Catatan jujur: panel latihan tidak menjalankan PHP maupun server Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Situs profil butuh halaman kontak. Daftarkan penanganan permintaan baca (bukan pengiriman data) untuk alamat `/contact`, dan buat penanganya mengembalikan teks `Kontak Kami`. Bentuk penanganya bebas — fungsi anonim biasa maupun arrow function sama-sama diterima.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\n// Daftarkan route-nya di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::get\\s*\\(",
              message:
                "Pilih metode HTTP-nya lebih dulu. \"Permintaan baca\" adalah metode yang dipakai browser saat kamu mengetik alamat di address bar — bukan metode yang dipakai formulir saat menyimpan data.",
            },
            {
              pattern: "Route::get\\s*\\(\\s*['\"]/?contact['\"]\\s*,",
              message:
                "Argumen pertama adalah jalurnya, ditulis sebagai teks lengkap dengan garis miring pembuka. Menulis `'contact'` tanpa garis miring memang masih dikenali Laravel, tetapi menuliskannya konsisten membuat `route:list` jauh lebih mudah dibaca.",
            },
            {
              pattern: "(function\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*return\\s+['\"]Kontak Kami['\"]|fn\\s*\\(\\s*\\)\\s*=>\\s*['\"]Kontak Kami['\"])",
              message:
                "Argumen kedua adalah penanganya, dan isinya harus MENGEMBALIKAN teksnya — bukan mencetaknya dengan `echo`. Nilai yang di-`return` itulah yang dijadikan badan respons HTTP; `echo` bocor keluar sebelum header respons dibentuk dan bisa merusak respons JSON di kemudian hari.",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/contact', function () {\n    return 'Kontak Kami';\n});",
          susunKode: {
            question:
              "Susun penanganan rute GET /contact pada Laravel yang mengembalikan string 'Kontak Kami'.",
            potongan: [
              "<?php",
              "use Illuminate\\Support\\Facades\\Route;",
              "Route::get('/contact', function () {",
              "    return 'Kontak Kami';",
              "});",
            ],
            pengecoh: [
              "Route::post('/contact', function () {",
              "    echo 'Kontak Kami';",
            ],
            pemisah: "\n",
            explanation:
              "Rute Laravel menggunakan Facade Route::get untuk menangani HTTP GET request dan mengembalikan nilai dengan return. Keping Route::post keliru metode HTTP yang dipersyaratkan. Keping echo menggoda bagi pengguna PHP native, tetapi handler rute Laravel wajib mengembalikan nilai (return).",
          },
        },
        {
          kind: "step",
          id: "laravel-3-2",
          title: "Route Parameter & Named Route",
          explanation:
            "Bagian URL yang dibungkus kurung kurawal (`/post/{slug}`) adalah **route parameter**: nilainya berubah-ubah dan Laravel mengoperkannya sebagai argumen ke penanganmu, berurutan sesuai posisinya. Sementara `->name('post.show')` memberi route itu sebuah nama panggilan, sehingga di Blade kamu menulis `route('post.show', $post->slug)` alih-alih menempelkan `/post/...` di puluhan berkas. Kenapa itu penting? Karena URL berubah — hari ini `/post/{slug}`, enam bulan lagi `/artikel/{slug}` — dan tautan bernama tetap bekerja tanpa satu pun berkas tampilan disunting. Kapan dipakai: setiap route yang pernah kamu tautkan dari tempat lain sebaiknya punya nama. Jebakan pertama: nama variabel penerima tidak harus sama dengan nama parameter, tetapi **urutannya** yang menentukan — dua parameter yang tertukar tidak memunculkan error, hanya data yang salah. Jebakan kedua: nama route harus unik satu proyek; dua route dengan nama sama membuat yang belakangan diam-diam menimpa yang pertama, dan `route()` mengarah ke tempat yang tidak kamu duga.",
          example: {
            code:
              "// routes/web.php\n" +
              "Route::get('/user/{id}', function ($id) {\n" +
              "    return 'User ID: ' . $id;\n" +
              "})->name('user.profile');\n\n" +
              "// parameter opsional diberi tanda tanya + nilai bawaan\n" +
              "Route::get('/arsip/{tahun?}', fn ($tahun = 2026) => 'Arsip ' . $tahun);",
            output:
              "$ curl http://127.0.0.1:8000/user/10\n" +
              "User ID: 10\n\n" +
              "$ curl http://127.0.0.1:8000/arsip\n" +
              "Arsip 2026\n\n" +
              "$ php artisan route:list --name=user\n" +
              "  GET|HEAD   user/{id} ....................... user.profile",
            note: "`php artisan route:list` adalah cara tercepat memastikan route-mu benar-benar terdaftar beserta namanya — jalankan ini lebih dulu setiap kali sebuah halaman balas 404. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Blog kamu membuka artikel lewat alamat seperti `/post/tips-belajar-php`. Daftarkan satu route GET dengan bagian akhir alamatnya bersifat dinamis dan diberi nama parameter `slug`, penanganya cukup mengembalikan nilai parameter itu apa adanya, lalu beri route tersebut nama panggilan `post.show` supaya bisa ditautkan dari Blade. Nama variabel penerima di penanganya bebas.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\n// Daftarkan route artikel di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::get\\s*\\(\\s*['\"]/?post/\\{\\s*slug\\s*\\}['\"]",
              message:
                "Bagian alamat yang berubah-ubah ditulis di dalam kurung kurawal, bukan tanda titik dua seperti di framework lain. Jadi bentuknya `/post/` diikuti nama parameter dalam kurawal.",
            },
            {
              pattern:
                "(function\\s*\\(\\s*\\$(\\w+)\\s*\\)\\s*\\{[\\s\\S]*?return\\s+\\$\\2|fn\\s*\\(\\s*\\$(\\w+)\\s*\\)\\s*=>\\s*\\$\\3)",
              message:
                "Penanganya harus menerima satu parameter dan mengembalikannya. Nilai dari URL dioper berdasarkan URUTAN, bukan nama — jadi variabelmu boleh dinamai apa saja, asalkan yang kamu kembalikan adalah variabel yang sama.",
            },
            {
              pattern: "->name\\s*\\(\\s*['\"]post\\.show['\"]\\s*\\)",
              message:
                "Nama panggilan dirantai setelah pendaftaran route-nya, sebelum titik koma penutup. Konvensi penamaannya `<resource>.<aksi>` dengan titik sebagai pemisah — itulah yang nanti kamu tulis di `route('post.show', ...)`.",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/post/{slug}', function ($slug) {\n    return $slug;\n})->name('post.show');",
          susunKode: {
            potongan: [
              "<?php",
              "use Illuminate\\Support\\Facades\\Route;",
              "Route::get('/post/{slug}', function ($slug) {",
              "    return $slug;",
              "})->name('post.show');",
            ],
            pengecoh: [
              "Route::get('/post/:slug', function ($slug) {",
              "})->routeName('post.show');",
            ],
            pemisah: "\n",
            explanation:
              "Parameter rute Laravel dibungkus dengan kurung kurawal {slug} dan penamaan rute menggunakan metode ->name(). Keping titik dua :slug menggoda pengembang Express/Vue Router tetapi salah di Laravel. Keping ->routeName() keliru nama metode Fluent Router.",
          },
        },
        {
  kind: "step",
  id: "laravel-3-3",
  title: "Membuat Controller & Action Method",
  explanation: "Controller mengelompokkan logika penanganan rute ke dalam metode kelas (*action methods*) yang terstruktur rapi. Method `index()` secara konvensi bertugas menampilkan daftar data dan mengembalikan tampilan (*view*) ke peramban menggunakan helper `view('nama.view')`. Kenapa Controller penting: memisahkan logika HTTP dari berkas `routes/web.php` mencegah berkas rute membengkak menjadi ribuan baris dan memungkinkan injeksi dependensi layanan secara otomatis. Kapan dipakai: setiap kali kamu menangani logika aplikasi web sebelum data disajikan ke antarmuka pengguna. Jebakan umum pemula: menulis titik koma `;` setelah deklarasi nama method atau lupa menggunakan kata kunci `return` sehingga halaman menghasilkan layar putih kosong tanpa respon.",
  example: {
    code: "class ProductController extends Controller {\n    public function index() {\n        return view('products.index');\n    }\n}",
    output: "# Respon saat route GET /products dipanggil:\nHTTP/1.1 200 OK\nContent-Type: text/html\n(Menampilkan isi file resources/views/products/index.blade.php)",
    note: "Helper view() mencari berkas Blade berdasarkan notasi titik di dalam folder resources/views."
  },
  instruction: "Di dalam kelas `UserController`, buat method publik `index()` yang mengembalikan tampilan berlabel `'users.index'` menggunakan helper `view()`.",
  starterCode: "<?php\nnamespace App\\Http\\Controllers;\n\nclass UserController extends Controller {\n    // Buat method index di sini\n}",
  language: "text",
  tests: [
    {
      pattern: "public\\s+function\\s+index\\s*\\(\\s*\\)\\s*\\{",
      message: "Deklarasikan method publik index tanpa parameter dengan blok pembuka di dalam UserController."
    },
    {
      pattern: "return\\s+view\\s*\\(\\s*['\"]users\\.index['\"]\\s*\\);",
      message: "Kembalikan view('users.index') dari dalam method index."
    }
  ],
  solution: "<?php\nnamespace App\\Http\\Controllers;\n\nclass UserController extends Controller {\n    public function index() {\n        return view('users.index');\n    }\n}",
  susunKode: {
    question: "Susun method index pada UserController yang mengembalikan view users.index.",
    potongan: [
      "    public function index() {",
      "        return view('users.index');",
      "    }"
    ],
    pengecoh: [
      "    public function index();",
      "        return 'users.index';"
    ],
    pemisah: "\n",
    explanation: "Method Controller memerlukan blok kurung kurawal dan helper view() untuk memuat template Blade. Keping titik koma keliru karena mengakhiri definisi tanpa badan fungsi. Keping return string menggoda tetapi hanya mengembalikan teks mentah alih-alih merender tampilan HTML."
  }
},
        {
          kind: "step",
          id: "laravel-3-4",
          title: "Menghubungkan Route ke Controller Method",
          explanation:
            "Argumen kedua sebuah route boleh diganti dari fungsi anonim menjadi array dua elemen: kelas Controller-nya dan nama method-nya — `[UserController::class, 'show']`. Kenapa bentuk array, bukan teks `'UserController@show'` seperti tutorial lama? Karena `::class` adalah referensi kelas sungguhan: editor bisa melompat ke berkasnya, alat refactor ikut mengganti namanya saat kelas itu di-rename, dan salah ketik ketahuan sebagai `Class not found` di berkas route — bukan sebagai 404 misterius saat pengguna membuka halaman. Kapan dipakai: begitu penanganmu lebih dari beberapa baris, atau begitu logikanya perlu diuji. Jebakannya dua dan keduanya sering makan waktu: **pertama**, `UserController::class` hanya menghasilkan nama lengkap berdasarkan namespace berkas ini, jadi tanpa baris `use App\\Http\\Controllers\\UserController;` di atas, Laravel mencari kelas itu di namespace yang salah. **Kedua**, nama method ditulis sebagai teks dan tidak diperiksa siapa pun sampai route-nya benar-benar dibuka — salah ketik `'shows'` baru ketahuan saat halaman diakses.",
          example: {
            code:
              "// routes/web.php\n" +
              "use App\\Http\\Controllers\\ProductController;\n\n" +
              "Route::get('/products', [ProductController::class, 'index']);\n\n" +
              "// app/Http/Controllers/ProductController.php\n" +
              "class ProductController extends Controller {\n" +
              "    public function index() { return 'Daftar produk'; }\n" +
              "}",
            output:
              "$ php artisan route:list --path=products\n" +
              "  GET|HEAD   products .... ProductController@index\n\n" +
              "$ curl http://127.0.0.1:8000/products\n" +
              "Daftar produk\n\n" +
              "# kalau nama method-nya salah ketik jadi 'indexs':\n" +
              "$ curl http://127.0.0.1:8000/products\n" +
              "Method App\\Http\\Controllers\\ProductController::indexs does not exist.",
            note: "Kolom kanan `route:list` menampilkan pasangan controller@method yang benar-benar terhubung — itu pemeriksaan tercepat sebelum menebak-nebak di browser. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Berkas `UserController` sudah diimpor di editor dan punya method `show`. Daftarkan route GET untuk alamat `/profile` yang penanganya bukan fungsi anonim, melainkan method itu di dalam Controller tersebut.",
          starterCode: "<?php\nuse App\\Http\\Controllers\\UserController;\nuse Illuminate\\Support\\Facades\\Route;\n\n// Daftarkan route /profile di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::get\\s*\\(\\s*['\"]/?profile['\"]\\s*,",
              message:
                "Bagian pertamanya sama seperti route biasa: metode `get` dan jalur `/profile`. Yang berubah hanya argumen keduanya.",
            },
            {
              pattern: "\\[\\s*UserController::class\\s*,\\s*['\"]show['\"]\\s*\\]",
              message:
                "Penanganya ditulis sebagai array dua elemen di dalam kurung siku: elemen pertama kelasnya diikuti `::class` (tanpa tanda kutip), elemen kedua nama method-nya sebagai teks dalam tanda kutip. Membungkus kelasnya dengan tanda kutip menghilangkan seluruh manfaat bentuk ini — editor tidak lagi bisa melacaknya.",
            },
          ],
          solution: "<?php\nuse App\\Http\\Controllers\\UserController;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/profile', [UserController::class, 'show']);",
          susunKode: {
            question:
              "Hubungkan rute GET /profile ke metode 'show' milik UserController menggunakan sintaks array.",
            potongan: [
              "<?php",
              "use App\\Http\\Controllers\\UserController;",
              "use Illuminate\\Support\\Facades\\Route;",
              "Route::get('/profile', [UserController::class, 'show']);",
            ],
            pengecoh: [
              "Route::get('/profile', 'UserController@show');",
              "Route::get('/profile', [UserController::class => 'show']);",
            ],
            pemisah: "\n",
            explanation:
              "Sintaks rute controller modern Laravel 8+ menggunakan array tuple [UserController::class, 'show']. Keping string 'UserController@show' adalah sintaks lama yang sudah tidak direkomendasikan. Keping panah asosiatif => keliru sintaks penulisan tuple.",
          },
        },
        {
          kind: "step",
          id: "laravel-3-5",
          title: "Mencetak Data di View Blade {{ }}",
          explanation:
            "`{{ $nama }}` adalah cara Blade mencetak nilai, dan bedanya dengan `echo` biasa terletak pada satu hal yang tidak terlihat: Blade membungkusnya dengan `htmlspecialchars()` secara otomatis. Kenapa itu penting? Karena nilai yang kamu cetak sering berasal dari pengguna, dan komentar berisi `<script>alert(1)</script>` yang dicetak mentah akan benar-benar dijalankan di browser pengunjung lain — itulah serangan XSS. Dengan `{{ }}`, tanda `<` berubah menjadi `&lt;` sehingga tampil sebagai teks, bukan sebagai kode. Kapan memakai `{!! $html !!}`: hanya untuk HTML yang kamu sendiri hasilkan, misalnya keluaran editor Markdown milikmu — dan itu pun sesudah dibersihkan pustaka sanitizer. Jebakan yang perlu diingat: variabelnya harus benar-benar dikirim dari Controller (`return view('produk', ['title' => $t])`), karena variabel yang tidak dikirim memunculkan `Undefined variable $title` di tengah halaman; untuk nilai yang memang opsional, tulis `{{ $title ?? 'Tanpa Judul' }}`.",
          example: {
            code:
              "{{-- resources/views/komentar.blade.php --}}\n" +
              "<p>{{ $isi }}</p>\n" +
              "<p>{!! $isi !!}</p>",
            output:
              "# jika $isi = '<b>halo</b> <script>alert(1)</script>'\n\n" +
              "HTML yang dikirim ke browser:\n" +
              "<p>&lt;b&gt;halo&lt;/b&gt; &lt;script&gt;alert(1)&lt;/script&gt;</p>\n" +
              "<p><b>halo</b> <script>alert(1)</script></p>\n\n" +
              "Yang terlihat di layar:\n" +
              "baris 1 : <b>halo</b> <script>alert(1)</script>   (tampil apa adanya sebagai teks)\n" +
              "baris 2 : halo                                    (tebal, dan alert benar-benar muncul)",
            note: "Baris kedua itulah lubang XSS-nya: `{!! !!}` menjalankan apa pun yang dikirim pengguna. Catatan jujur: panel latihan tidak merender Blade, jadi hasil ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Sebuah halaman menerima variabel `$title` dari Controller. Tampilkan isinya sebagai judul tingkat dua di halaman, memakai bentuk pencetakan Blade yang otomatis aman dari XSS.",
          starterCode: "{{-- Tampilkan judul halaman di sini --}}\n",
          language: "text",
          tests: [
                      {
                        "pattern": "\\{\\{\\s*\\$title\\s*\\}\\}",
                        "message": "Blade mencetak nilai dengan kurung kurawal ganda. Bentuk ini otomatis meng-escape HTML sehingga aman dari XSS — `{!! !!}` mencetak mentah dan hanya dipakai kalau kamu benar-benar mempercayai isinya."
                      },
                      {
                        "pattern": "<h2>[\\s\\S]*</h2>",
                        "message": "Bungkus dengan elemen judul tingkat dua seperti yang diminta, lengkap dengan tag penutupnya."
                      }
                    ],
          solution: "<h2>{{ $title }}</h2>",
          susunKode: {
            question:
              "Rangkai sintaks Templating Blade {{ }} untuk menampilkan variabel $title di dalam elemen h2.",
            potongan: [
              "<h2>{{ ",
              "$title",
              " }}</h2>",
            ],
            pengecoh: [
              "{$title}",
              "<h3>{{ ",
            ],
            pemisah: "",
            explanation:
              "Mesin template Blade menggunakan kurung kurawal ganda {{ $title }} untuk mencetak data dengan sanitasi XSS otomatis. Keping kurung tunggal {$title} keliru sintaks Blade. Keping <h3>{{ menggoda tetapi menyalahi spesifikasi tag elemen <h2>.",
          },
        },
        {
          kind: "step",
          id: "laravel-3-6",
          title: "Direktif Perulangan Blade: @foreach",
          explanation:
            "Direktif `@foreach ... @endforeach` adalah `foreach` PHP yang ditulis tanpa membuka-tutup tag `<?php ?>` di tengah HTML — Blade menerjemahkannya menjadi PHP biasa saat berkas dikompilasi. Kenapa versi direktif yang dipakai? Karena tampilan berisi `<?php foreach (...): ?>` di setiap beberapa baris nyaris tidak bisa dibaca oleh orang yang mengerjakan HTML-nya, dan itulah alasan Blade ada. Kapan dipakai: setiap kali Controller mengirim koleksi — daftar produk, komentar, hasil pencarian. Blade juga menyuntikkan variabel `$loop` di dalamnya (`$loop->first`, `$loop->last`, `$loop->iteration`), yang menghemat variabel penghitung manual. Dua jebakan: **pertama**, setiap `@foreach` wajib punya `@endforeach` — lupa menutupnya menghasilkan pesan `syntax error, unexpected end of file` yang menunjuk baris terakhir berkas, jauh dari kesalahannya. **Kedua**, memanggil relasi di dalam perulangan (`{{ $post->user->name }}`) memicu satu query per baris — masalah N+1 yang dibahas di modul Eloquent; solusinya menyiapkan datanya di Controller dengan `with()`, bukan mengubah tampilannya.",
          example: {
            code:
              "{{-- resources/views/buah.blade.php --}}\n" +
              "<ul>\n" +
              "@foreach ($items as $item)\n" +
              "    <li>{{ $loop->iteration }}. {{ $item }}</li>\n" +
              "@endforeach\n" +
              "</ul>",
            output:
              "# dengan $items = ['Apel', 'Jeruk']\n\n" +
              "HTML yang dihasilkan:\n" +
              "<ul>\n" +
              "    <li>1. Apel</li>\n" +
              "    <li>2. Jeruk</li>\n" +
              "</ul>",
            note: "`$loop->iteration` mulai dari 1 (berbeda dari `$loop->index` yang mulai dari 0) — variabel ini disediakan Blade, tidak perlu kamu kirim dari Controller. Catatan jujur: panel latihan tidak merender Blade, jadi hasil ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Controller mengirim koleksi bernama `$users` ke tampilan. Tampilkan setiap namanya masing-masing di dalam elemen `<span>`, memakai direktif perulangan Blade beserta penutupnya. Nama variabel penampung elemennya bebas kamu tentukan.",
          starterCode: "{{-- Tampilkan daftar user di sini --}}\n",
          language: "text",
          tests: [
            {
              pattern: "@foreach\\s*\\(\\s*\\$users\\s+as\\s+\\$\\w+\\s*\\)",
              message:
                "Perulangan di Blade diawali tanda `@` diikuti nama perulangannya, lalu kurung berisi `<koleksi> as <penampung>`. Yang dilintasi adalah `$users`; penampungnya kamu namai sendiri.",
            },
            {
              pattern:
                "@foreach\\s*\\(\\s*\\$users\\s+as\\s+\\$(\\w+)\\s*\\)[\\s\\S]*?<span>\\s*\\{\\{\\s*\\$\\1\\s*\\}\\}\\s*</span>",
              message:
                "Di dalam perulangan, cetak variabel penampung yang tadi kamu namai — dengan kurung kurawal ganda supaya nilainya aman dari XSS — dan bungkus dengan elemen `<span>` beserta tag penutupnya.",
            },
            {
              pattern: "@endforeach",
              message:
                "Direktif perulangan Blade wajib ditutup dengan pasangannya (`@end` + nama perulangannya). Tanpa penutup, kesalahan baru muncul sebagai `syntax error, unexpected end of file` yang menunjuk baris terakhir berkas.",
            },
          ],
          solution: "@foreach ($users as $user)\n    <span>{{ $user }}</span>\n@endforeach",
          susunKode: {
            question:
              "Susun perulangan @foreach pada Blade untuk menampilkan array $users ke dalam tag span.",
            potongan: [
              "@foreach ($users as $user)",
              "    <span>{{ $user }}</span>",
              "@endforeach",
            ],
            pengecoh: [
              "@foreach ($users in $user)",
              "@endloop",
            ],
            pemisah: "\n",
            explanation:
              "Direktif perulangan Blade diawali @foreach ($users as $user) dan ditutup wajib dengan @endforeach. Keping kata kunci in keliru sintaks PHP. Keping @endloop keliru karena nama direktif penutup perulangan foreach yang valid pada Blade adalah @endforeach.",
          },
        },
        {
          kind: "step",
          id: "laravel-3-7",
          title: "Membaca Kredensial Environment env()",
          explanation:
            "Fungsi `env('KUNCI', 'cadangan')` membaca satu baris dari berkas `.env` di akar proyek, dan argumen keduanya dipakai kalau kunci itu tidak ada. Kenapa nilai-nilai ini tidak ditulis langsung di kode? Karena password database dan kunci API berbeda antara laptopmu dan server, dan yang paling penting: `.env` tidak ikut masuk Git (`.gitignore` sudah menyiapkannya), sehingga rahasia tidak pernah bocor ke repositori. Rekan setim menyalin `.env.example` lalu mengisinya sendiri. Kapan dipakai: **hanya** di dalam berkas `config/*.php`; di Controller dan Model kamu memanggil `config('database.connections.mysql.host')` yang membaca hasil konfigurasi itu. Ini bukan gaya-gayaan, melainkan jebakan produksi terkenal: begitu `php artisan config:cache` dijalankan, Laravel berhenti membaca `.env` sama sekali, sehingga setiap `env()` di luar folder `config/` mengembalikan `null` — dan gejalanya adalah aplikasi yang jalan sempurna di lokal lalu meledak di server tanpa satu pun baris kode berubah. Jebakan kecil lainnya: setelah menyunting `.env`, server pengembang perlu dihidupkan ulang agar nilainya terbaca.",
          example: {
            code:
              "# ---- .env ----\n" +
              "APP_NAME=BiLearn\n" +
              "DB_HOST=127.0.0.1\n\n" +
              "// ---- config/app.php ----\n" +
              "return [\n" +
              "    'name' => env('APP_NAME', 'Laravel'),\n" +
              "];\n\n" +
              "// ---- di Controller: ambil dari config(), bukan env() ----\n" +
              "echo config('app.name');",
            output:
              "BiLearn\n\n" +
              "# setelah `php artisan config:cache` dijalankan:\n" +
              "config('app.name')  ->  BiLearn      (tetap benar, dibaca dari cache)\n" +
              "env('APP_NAME')     ->  NULL         (.env tidak dibaca lagi)",
            note: "Dua baris terakhir adalah inti step ini: `env()` di luar folder `config/` menjadi `null` begitu konfigurasi di-cache. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Kamu sedang menyunting sebuah berkas di dalam folder `config/`. Baca alamat server database dari kunci `DB_HOST` di berkas `.env`, dengan ketentuan: bila kunci itu belum diisi, nilainya harus jatuh ke `127.0.0.1`. Simpan hasilnya ke variabel `$host`.",
          starterCode: "<?php\n// Baca alamat server database dari environment\n",
          language: "text",
          tests: [
            {
              pattern: "\\$host\\s*=\\s*env\\s*\\(",
              message:
                "Berkas `.env` dibaca dengan sebuah fungsi helper pendek bernama sama dengan nama berkasnya (tiga huruf). Ingat batasnya: fungsi ini hanya aman dipanggil dari dalam folder `config/`.",
            },
            {
              pattern: "env\\s*\\(\\s*['\"]DB_HOST['\"]",
              message:
                "Argumen pertamanya adalah nama kunci persis seperti tertulis di `.env` — huruf besar semua dengan garis bawah sebagai pemisah, dan tanpa tanda `$`.",
            },
            {
              pattern: "env\\s*\\([^)]*,\\s*['\"]127\\.0\\.0\\.1['\"]\\s*\\)",
              message:
                "Nilai cadangan ditulis sebagai argumen kedua, dipisah koma. Tanpa argumen kedua, kunci yang belum diisi menghasilkan `null` dan koneksi database gagal dengan pesan yang tidak menyebut `.env` sama sekali.",
            },
          ],
          solution: "<?php\n$host = env('DB_HOST', '127.0.0.1');",
          susunKode: {
            question:
              "Susun satu baris di berkas config yang membaca kunci DB_HOST dari berkas .env dan memakai 127.0.0.1 bila kunci itu belum diisi.",
            potongan: [
              "<?php",
              "$host = env(",
              "'DB_HOST',",
              "'127.0.0.1'",
              ");",
            ],
            pengecoh: [
              "$host = getenv(",
              "'DB_HOSTNAME',",
            ],
            pemisah: "\n",
            explanation:
              "Helper env() membaca satu baris dari berkas .env dan menerima nilai cadangan sebagai argumen kedua. Keping getenv() menggoda karena fungsi bawaan PHP itu juga membaca environment, tetapi ia tidak menerima nilai cadangan di argumen kedua dan melewati lapisan konfigurasi Laravel. Keping 'DB_HOSTNAME' keliru karena nama kunci wajib sama persis dengan yang tertulis di .env \u2014 kunci yang tidak ditemukan membuat nilainya jatuh ke cadangan tanpa satu pun peringatan bahwa namanya salah ketik.",
          },
        },
        {
  kind: "step",
  id: "laravel-3-8",
  title: "Mendaftarkan Resource Controller Lengkap",
  explanation: "`Route::resource` memetakan tujuh aksi CRUD konvensional (index, create, store, show, edit, update, destroy) ke Controller dalam satu baris deklarasi yang bersih. Pola ini mematuhi prinsip arsitektur RESTful murni dan otomatis memberi nama pada setiap rute sesuai konvensi standar Laravel (`products.index`, `products.show`, dll.). Kenapa cara ini penting: kamu tidak perlu lagi mendaftarkan tujuh baris `Route::get` dan `Route::post` secara manual yang rentan salah ketik dan inkonsistensi nama rute. Kapan dipakai: saat membangun modul manajemen entitas standar di aplikasi web. Jebakan umum: mendaftarkan `Route::resource` di bawah rute dinamis lain sehingga URL bentrok, atau lupa bahwa method form edit dan hapus di browser tetap membutuhkan spoofing `@method('PUT')` dan `@method('DELETE')`.",
  example: {
    code: "<?php\nuse App\\Http\\Controllers\\ArticleController;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::resource('articles', ArticleController::class);",
    output: "# Hasil php artisan route:list:\nGET|HEAD   articles ................ articles.index\nPOST       articles ................ articles.store\nGET|HEAD   articles/create ......... articles.create\nGET|HEAD   articles/{article} ...... articles.show\nPUT|PATCH  articles/{article} ...... articles.update\nDELETE     articles/{article} ...... articles.destroy\nGET|HEAD   articles/{article}/edit . articles.edit",
    note: "Tujuh rute terpasang otomatis lengkap dengan nama rute baku standar industri."
  },
  instruction: "Daftarkan rute resource untuk entitas `products` yang menghubungkan seluruh aksi CRUD standar ke `ProductController`.",
  starterCode: "<?php\nuse App\\Http\\Controllers\\ProductController;\nuse Illuminate\\Support\\Facades\\Route;\n\n// Daftarkan route resource di sini\n",
  language: "text",
  tests: [
    {
      pattern: "Route::resource\\s*\\(\\s*['\"]/?products['\"]\\s*,\\s*ProductController::class\\s*\\);",
      message: "Panggil Route::resource dengan argumen nama resource 'products' dan ProductController::class."
    }
  ],
  solution: "<?php\nuse App\\Http\\Controllers\\ProductController;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::resource('products', ProductController::class);",
  susunKode: {
    question: "Susun pendaftaran rute resource Laravel untuk ProductController.",
    potongan: [
      "<?php",
      "use App\\Http\\Controllers\\ProductController;",
      "use Illuminate\\Support\\Facades\\Route;",
      "Route::resource('products', ProductController::class);"
    ],
    pengecoh: [
      "Route::apiResource('products', ProductController::class);",
      "Route::controller('products', ProductController::class);"
    ],
    pemisah: "\n",
    explanation: "Route::resource mendaftarkan tujuh rute standar aplikasi web lengkap dengan form HTML create dan edit. Keping Route::apiResource keliru karena hanya mendaftarkan lima endpoint API tanpa tampilan form. Keping Route::controller menggoda karena mengelompokkan controller tetapi membutuhkan definisi rute terpisah."
  }
},
{
  kind: "step",
  id: "laravel-3-9",
  title: "Memanggil Komponen Tampilan Blade (<x-...>)",
  explanation: "Komponen Blade (`<x-nama-komponen>`) adalah standar modern penyusunan antarmuka di Laravel yang menggantikan pola lama `@include` dan `@component`. Komponen memungkinkan kamu membuat elemen antarmuka yang modular, dapat dipakai ulang, dan menerima data props serta konten slot. Kenapa komponen disukai di tempat kerja: tampilan aplikasi web modern menjadi sangat bersih dan mirip tata letak berbasis komponen seperti React/Vue tanpa overhead JavaScript. Kapan dipakai: untuk kartu informasi, tombol, modal dialog, formulir input, dan notifikasi peringatan. Jebakan umum: lupa bahwa atribut biasa dioper sebagai string literal (`type=\"warning\"`), sedangkan jika ingin mengoper variabel PHP atau ekspresi harus diawali tanda titik dua (`:user=\"$user\"`).",
  example: {
    code: "<x-badge color=\"green\">\n    Aktif\n</x-badge>",
    output: "<span class=\"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800\">\n    Aktif\n</span>",
    note: "Tag kustom <x-badge> dirender menjadi elemen HTML lengkap oleh template engine Blade."
  },
  instruction: "Panggil komponen `<x-alert>` dengan mengoper atribut prop `type` bernilai `warning`, dan isi teks di dalam slotnya berupa pesan peringatan 'Stok barang menipis!'.",
  starterCode: "{{-- Tampilkan komponen x-alert di sini --}}\n",
  language: "text",
  tests: [
    {
      pattern: "<x-alert\\s+type=[\"']warning[\"']>",
      message: "Buka tag komponen <x-alert type=\"warning\"> dengan atribut type yang tepat."
    },
    {
      pattern: "Stok barang menipis!",
      message: "Tuliskan isi pesan peringatan di dalam slot komponen."
    },
    {
      pattern: "</x-alert>",
      message: "Tutup tag komponen dengan penutup </x-alert>."
    }
  ],
  solution: "<x-alert type=\"warning\">\n    Stok barang menipis!\n</x-alert>",
  susunKode: {
    question: "Susun pemanggilan komponen Blade modern x-alert dengan atribut prop type.",
    potongan: [
      "<x-alert type=\"warning\">",
      "    Stok barang menipis!",
      "</x-alert>"
    ],
    pengecoh: [
      "<x-alert :type=\"warning\">",
      "<x-alert type=\"danger\">"
    ],
    pemisah: "\n",
    explanation: "Komponen Blade dipanggil dengan awalan tag kustom <x-nama-komponen> dan atribut teks literal tanpa titik dua. Keping :type=\"warning\" keliru karena tanda titik dua mengevaluasi nilai sebagai kode PHP sehingga mencari konstanta tak terdefinisi. Keping type=\"danger\" menggoda tetapi nilai tipe yang diminta adalah warning."
  }
},
        {
          kind: "quiz",
          id: "laravel-3-kuis",
          title: "Kuis: Laravel Fundamental & Routing",
          questions: [
            {
              id: "l3-q1",
              type: "pilihan-ganda",
              question: "Apakah komponen MVC di Laravel yang bertugas menangani permintaan masukan HTTP dan menentukan respon tampilan?",
              choices: [
                "Model",
                "View",
                "Controller",
                "Migration"
              ],
              answerIndex: 2,
              explanation: "Controller bertindak sebagai pengatur lalu lintas: ia menerima input request dari pengguna, berkoordinasi dengan Model untuk mengambil atau mengolah data, lalu mengembalikan respon (View Blade atau respons JSON)."
            },
            {
              id: "l3-q2",
              type: "pilihan-ganda",
              question: "Manakah sintaks Blade yang BENAR untuk mencetak isi variabel secara aman dari serangan Cross-Site Scripting (XSS)?",
              choices: [
                "<?php echo $name; ?>",
                "{{ $name }}",
                "{!! $name !!}",
                "<% $name %>"
              ],
              answerIndex: 1,
              explanation: "Sintaks `{{ $name }}` di Blade otomatis melewatkan nilai melalui `htmlspecialchars()` untuk menetralkan karakter berbahaya (`<script>`, dll.). Sintaks `{!! $name !!}` merender teks tanpa proteksi escape dan hanya dipakai jika konten HTML dijamin aman."
            },
            {
              id: "l3-q3",
              type: "pilihan-ganda",
              question: "Mengapa berkas konfigurasi `.env` dilarang keras diunggah ke repositori Git publik?",
              choices: [
                "Karena format penulisan berkas .env tidak didukung oleh sistem version control Git",
                "Karena ukuran berkas .env terlalu besar dan memperlambat proses clone repositori",
                "Karena berkas .env otomatis dihapus oleh server saat proses deployment berlangsung",
                "Karena berkas .env menyimpan kredensial rahasia seperti kunci enkripsi APP_KEY, password database, dan kredensial API"
              ],
              answerIndex: 3,
              explanation: "Berkas `.env` menyimpan kredensial paling sensitif: rahasia koneksi basis data, kunci enkripsi aplikasi (APP_KEY), kredensial SMTP, dan token API pihak ketiga. Mengunggahnya ke repositori publik membocorkan seluruh infrastruktur aplikasi."
            },
            {
              id: "l3-q4",
              type: "pilihan-ganda",
              question: "Apakah keuntungan utama memberikan nama pada route menggunakan metode `->name('nama.route')`?",
              choices: [
                "Memudahkan pembuatan URL di tampilan Blade via helper route() tanpa khawatir jika path URL fisik berubah di masa depan",
                "Route otomatis mendapatkan proteksi firewall tambahan dari framework Laravel",
                "Meningkatkan kecepatan eksekusi rute hingga sepuluh kali lipat di server produksi",
                "Menginstansiasi Controller terkait ke dalam memori RAM saat aplikasi pertama kali booting"
              ],
              answerIndex: 0,
              explanation: "Penamaan route memisahkan URL fisik dari referensi kode. Jika di kemudian hari path URL `/produk-unggulan` diubah menjadi `/featured-products`, kamu cukup mengganti rutenya sekali di berkas route tanpa perlu menyisir dan mengganti ratusan tautan di template Blade."
            },
            {
              id: "l3-q5",
              type: "pilihan-ganda",
              question: "Perintah Artisan apakah yang digunakan untuk membuat kelas Controller baru di Laravel?",
              choices: [
                "php artisan create:controller NamaController",
                "php artisan make:controller NamaController",
                "composer make:controller NamaController",
                "php artisan generate:controller NamaController"
              ],
              answerIndex: 1,
              explanation: "Semua generator kode di Laravel menggunakan awalan `make:`, sehingga pembuatan controller dilakukan dengan `php artisan make:controller NamaController`. Perintah `create:` atau `generate:` bukan perintah resmi Artisan."
            }
          ]
        }
      ],
    },
    {
      slug: "eloquent",
      title: "Eloquent & Database",
      description:
        "Migration, Model Eloquent, Query Builder, dan Pengelolaan Relasi Database.",
      topics: [
        "Migration: membuat & mengubah tabel lewat kode",
        "Model & konvensi penamaan",
        "CRUD: create, find, update, delete",
        "Query builder: where, orderBy, pagination",
        "Relasi: hasMany, belongsTo, belongsToMany",
        "Eager loading & masalah N+1",
        "Seeder & factory untuk data dummy",
      ],
      items: [
        {
          kind: "materi",
          id: "laravel-4-m1",
          title: "Eloquent ORM, Migration, dan Query Database di Laravel",
          body:
            "# Fitur Eloquent ORM & Migration\n\n" +
            "**Eloquent ORM** (*Object-Relational Mapping*) adalah implementasi pola *Active Record* di Laravel. Setiap tabel di database diwakili oleh sebuah **Model** (kelas PHP), dan setiap baris data di tabel diwakili oleh sebuah instansi dari objek Model tersebut.\n\n" +
            "**Migration** berfungsi sebagai sistem kontrol versi (*version control*) untuk struktur tabel database aplikasi. Dengan Migration, kamu mendefinisikan perubahan skema database melalui kode PHP tanpa mengetik sintaks DDL SQL manual.\n\n" +
            "## Konvensi Penamaan Standard Laravel\n\n" +
            "Laravel sangat mengandalkan prinsip *Convention over Configuration* (Konvensi di atas Konfigurasi):\n\n" +
            "```text\n" +
            "Nama Tabel Database (Plural/Jamak, Snake Case):  products\n" +
            "Nama Kelas Model    (Singular/Tunggal, PascalCase): Product\n" +
            "Nama Primary Key    (Default):                      id\n" +
            "Nama Foreign Key    (Default Model_id):             user_id\n" +
            "```\n\n" +
            "## Ringkasan Metode Query Eloquent Utama\n\n" +
            "| Metode Eloquent | Perintah SQL yang Dihasilkan | Keterangan Fungsi |\n" +
            "|---|---|---|\n" +
            "| `Product::all()` | `SELECT * FROM products` | Mengambil seluruh baris data dalam bentuk koleksi (*Collection*). |\n" +
            "| `Product::find(1)` | `SELECT * FROM products WHERE id = 1` | Mencari data berdasarkan nilai primary key `id`. |\n" +
            "| `Product::where('status', 'active')->get()` | `SELECT * FROM products WHERE status = 'active'` | Menyaring data dengan klausa WHERE. |\n" +
            "| `Product::create([...])` | `INSERT INTO products ...` | Menambahkan baris data baru ke tabel. |\n" +
            "| `Product::with('category')->get()` | `SELECT * FROM products; SELECT * FROM categories WHERE id IN (...)` | **Eager Loading** untuk menghindari Masalah N+1 Query. |\n\n" +
            "## Masalah N+1 Query & Solusi Eager Loading\n\n" +
            "Masalah N+1 terjadi saat kamu melakukan iterasi 100 data Produk dan memanggil `$product->category->name` di dalam loop perulangan. Tanpa Eager Loading, Laravel akan mengeksekusi **1 query utama + 100 query tambahan ke tabel kategori (total 101 query)**.\n\n" +
            "Dengan menambahkan Eager Loading `Product::with('category')->get()`, Laravel hanya mengeksekusi **2 query gabungan yang sangat cepat**.\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan **Migration** seperti cetak biru arsitektur gedung yang bisa diperbarui dari versi 1 ke versi 2 secara rapi. **Model Eloquent** adalah penerjemah bahasa gaul yang mengubah perintah PHP yang santai (`User::find(5)`) menjadi bahasa resmi SQL yang kaku. **Eager Loading** seperti memesan makanan untuk seluruh rombongan bus dalam 1 kali pemesanan di kasir, alih-alih 50 penumpang turun satu per satu secara bergantian untuk memesan makanan yang sama (Masalah N+1).\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Bencana Mass Assignment Protection:** Memanggil `Product::create($request->all())` tanpa mendefinisikan properti `protected $fillable = ['name', 'price'];` di dalam Model akan melempar *MassAssignmentException*.\n" +
            "2. **Menjalankan `migrate:fresh` di Produksi:** Perintah `php artisan migrate:fresh` akan **menghapus seluruh tabel dan data** di database lalu menjalankan ulang migration dari awal. Jangan pernah jalankan perintah ini di database produksi!\n" +
            "3. **Metode `get()` vs `first()`:** Metode `where()` mengembalikan *Query Builder*. Kamu harus memanggil `->get()` untuk mendapatkan Koleksi banyak data, atau `->first()` untuk mendapatkan 1 objek data saja.\n\n" +
            "## Pembaruan Eloquent Modern: Method casts() & Anonymous Migration\n\n" +
            "Dua konvensi modern yang wajib dipahami di Laravel 11:\n" +
            "1. **Metode casts(): array di Model:** Alih-alih mendefinisikan array statis `protected $casts = [...]`, Laravel 11 merekomendasikan penulisan method `protected function casts(): array`. Pola method ini memungkinkan penggunaan kelas enum terdefinisi atau closure konversi dinamis yang jauh lebih fleksibel.\n" +
            "2. **Anonymous Class Migration:** Semua berkas migrasi modern ditulis dalam bentuk kelas anonim (`return new class extends Migration { ... };`). Pola ini mencegah terjadinya bentrok nama kelas (*class name collision*) jika di masa depan kamu membuat dua tabel dengan nama migrasi yang serupa.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Pencegahan N+1 Query dan penulisan skema migration yang rapi adalah hal utama yang diperiksa saat *code review* dan evaluasi performa aplikasi backend Laravel di skala industri.",
        },
        {
  kind: "step",
  id: "laravel-4-1",
  title: "Mendefinisikan Skema Kolom Tabel di Migrasi",
  explanation: "Method `up()` pada berkas migrasi menggunakan objek Blueprint `$table` untuk merancang struktur kolom tabel secara deklaratif. Kolom string `$table->string('name')->unique()` membuat kolom `VARCHAR(255)` dengan indeks unik yang mencegah duplikasi nilai di database, sedangkan `$table->text('description')->nullable()` membuat kolom teks panjang yang boleh bernilai `NULL`. Kenapa menulis skema lewat migrasi sangat penting: seluruh anggota tim pengembang dan server produksi memiliki struktur database yang identik tanpa perlu mengekspor berkas SQL manual. Kapan dipakai: setiap kali membuat tabel baru atau menambahkan kolom ke tabel yang sudah ada. Jebakan umum: lupa menambahkan `->nullable()` pada kolom profil opsional — akibatnya proses simpan data gagal dengan error database *Field doesn't have a default value*.",
  example: {
    code: "Schema::create('tags', function (Blueprint $table) {\n    $table->id();\n    $table->string('slug')->unique();\n    $table->timestamps();\n});",
    output: "# DDL SQL MySQL yang dieksekusi:\nCREATE TABLE `tags` (\n  `id` bigint unsigned NOT NULL AUTO_INCREMENT,\n  `slug` varchar(255) NOT NULL UNIQUE,\n  `created_at` timestamp NULL DEFAULT NULL,\n  `updated_at` timestamp NULL DEFAULT NULL,\n  PRIMARY KEY (`id`)\n);",
    note: "Modifier ->unique() menambahkan constraint unik langsung di level engine database."
  },
  instruction: "Di dalam closure `Schema::create('categories', ...)` pada migrasi, tambahkan kolom teks `name` berindeks unik dan kolom teks panjang `description` yang boleh kosong (*nullable*).",
  starterCode: "<?php\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nSchema::create('categories', function (Blueprint $table) {\n    $table->id();\n    // Definisikan kolom name unik dan description nullable di sini\n    $table->timestamps();\n});",
  language: "text",
  tests: [
    {
      pattern: "\\$table->string\\s*\\(\\s*['\"]name['\"]\\s*\\)->unique\\s*\\(\\s*\\);",
      message: "Definisikan kolom teks unik dengan $table->string('name')->unique();."
    },
    {
      pattern: "\\$table->text\\s*\\(\\s*['\"]description['\"]\\s*\\)->nullable\\s*\\(\\s*\\);",
      message: "Definisikan kolom teks panjang opsional dengan $table->text('description')->nullable();."
    }
  ],
  solution: "<?php\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nSchema::create('categories', function (Blueprint $table) {\n    $table->id();\n    $table->string('name')->unique();\n    $table->text('description')->nullable();\n    $table->timestamps();\n});",
  susunKode: {
    question: "Susun pembuatan kolom name berindeks unik dan description opsional pada migrasi tabel.",
    potongan: [
      "    $table->id();",
      "    $table->string('name')->unique();",
      "    $table->text('description')->nullable();",
      "    $table->timestamps();"
    ],
    pengecoh: [
      "    $table->string('name');",
      "    $table->text('description');"
    ],
    pemisah: "\n",
    explanation: "Modifier ->unique() dan ->nullable() mengatur batasan data langsung di tingkat mesin SQL. Keping string('name') tanpa unique keliru karena mengizinkan nama kategori kembar. Keping text('description') tanpa nullable menggoda tetapi mewajibkan kolom diisi sehingga form gagal jika dikosongkan."
  }
},
        {
  kind: "step",
  id: "laravel-4-2",
  title: "Deklarasi Model & Properti Tabel Kustom",
  explanation: "Secara baku, Eloquent menebak nama tabel dari bentuk jamak nama Model (`Category` menjadi `categories`) dan primary key sebagai kolom `id`. Saat bekerja di proyek warisan (*legacy database*) atau integrasi sistem luar, nama tabel dan kunci utama sering kali tidak mengikuti konvensi tersebut. Menimpa properti `protected $table = 'tbl_categories'` dan `protected $primaryKey = 'category_id'` menginstruksikan Eloquent untuk memetakan model ke skema yang ada tanpa perlu merombak database. Kenapa ini wajib dikuasai: di dunia kerja nyata, developer sering kali harus menghubungkan aplikasi baru ke database lama perusahaan. Kapan dipakai: setiap kali tabel database memiliki awalan (*prefix*) atau nama kolom ID kustom. Jebakan umum: lupa mendeklarasikan `$incrementing = false` atau `$keyType = 'string'` jika primary key kustom berupa UUID atau string alih-alih integer auto-increment.",
  example: {
    code: "class Member extends Model {\n    protected $table = 'tbl_members';\n    protected $primaryKey = 'member_code';\n}",
    output: "# Kueri yang dijalankan saat Member::find('MB01'):\nselect * from `tbl_members` where `member_code` = 'MB01' limit 1",
    note: "Eloquent menggunakan nama tabel dan kolom kunci primer yang dideklarasikan secara eksplisit."
  },
  instruction: "Di dalam kelas Model `Category`, tentukan nama tabel database menjadi `'tbl_categories'` dan primary key menjadi `'category_id'` menggunakan properti bawaan Eloquent.",
  starterCode: "<?php\nnamespace App\\Models;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Category extends Model {\n    // Tentukan properti table dan primaryKey di sini\n}",
  language: "text",
  tests: [
    {
      pattern: "protected\\s+\\$table\\s*=\\s*['\"]tbl_categories['\"];",
      message: "Deklarasikan properti protected $table = 'tbl_categories';."
    },
    {
      pattern: "protected\\s+\\$primaryKey\\s*=\\s*['\"]category_id['\"];",
      message: "Deklarasikan properti protected $primaryKey = 'category_id';."
    }
  ],
  solution: "<?php\nnamespace App\\Models;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Category extends Model {\n    protected $table = 'tbl_categories';\n    protected $primaryKey = 'category_id';\n}",
  susunKode: {
    question: "Susun konfigurasi Model Eloquent untuk menghubungkan ke tabel dan primary key non-standar.",
    potongan: [
      "class Category extends Model {",
      "    protected $table = 'tbl_categories';",
      "    protected $primaryKey = 'category_id';",
      "}"
    ],
    pengecoh: [
      "    public $tableName = 'tbl_categories';",
      "    private $id = 'category_id';"
    ],
    pemisah: "\n",
    explanation: "Eloquent membaca konfigurasi penimpaan skema dari properti terlindung $table dan $primaryKey. Keping tableName keliru karena Eloquent tidak mengenali properti tersebut. Keping private $id menggoda bagi pemula tetapi hak akses private menyembunyikan properti dari kelas induk Model."
  }
},
        {
          kind: "step",
          id: "laravel-4-3",
          title: "CRUD dengan Eloquent ORM: create() & find()",
          explanation:
            "`Model::create([...])` menyisipkan satu baris baru dan mengembalikan objeknya, sementara `Model::find($id)` mengambil satu baris berdasarkan kunci utama. Keduanya menghasilkan SQL yang parameternya di-*bind* secara terpisah, sehingga nilai dari pengguna tidak pernah menyatu ke dalam teks query — itulah sebabnya Eloquent kebal SQL injection selama kamu tidak menyambung string sendiri di `whereRaw()`. Kapan `find()` dan kapan `findOrFail()`: `find()` mengembalikan `null` bila datanya tidak ada, dan itu berujung `Attempt to read property on null` beberapa baris kemudian — pesan yang tidak menyebut ID maupun tabel; `findOrFail()` langsung melempar `ModelNotFoundException` yang otomatis menjadi halaman 404 yang benar. Jebakan yang menghentikan hampir semua pemula pada percobaan pertama: `create()` menolak semua kolom yang belum terdaftar di `protected $fillable` dan melempar `MassAssignmentException`. Itu bukan gangguan, melainkan pengaman — tanpanya, seseorang bisa menambahkan `is_admin=1` ke formulir pendaftaran dan mengangkat dirinya jadi admin.",
          example: {
            code:
              "use App\\Models\\Product;\n\n" +
              "$product = Product::create([\n" +
              "    'name' => 'Kopi Robusta',\n" +
              "    'price' => 25000,\n" +
              "]);\n\n" +
              "echo $product->id;",
            output:
              "# SQL yang benar-benar dijalankan (dilihat lewat Telescope / query log):\n" +
              "insert into `products` (`name`, `price`, `updated_at`, `created_at`)\n" +
              "  values ('Kopi Robusta', 25000, '2026-07-28 04:31:02', '2026-07-28 04:31:02')\n\n" +
              "# nilai $product->id setelah insert:\n" +
              "7\n\n" +
              "# kalau 'price' belum terdaftar di $fillable:\n" +
              "Illuminate\\Database\\Eloquent\\MassAssignmentException:\n" +
              "  Add [price] to fillable property to allow mass assignment on [App\\Models\\Product].",
            note: "Perhatikan `id` yang langsung terisi setelah `create()` — objeknya sudah membawa nilai dari database, jadi tidak perlu query ulang. Catatan jujur: panel latihan tidak menjalankan PHP maupun database, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Halaman profil perlu mengambil satu pengguna berdasarkan kunci utamanya, dan pengguna dengan id `5` dipastikan ada. Ambil baris itu dari Model `User` memakai method pencarian berbasis primary key, lalu simpan ke variabel `$user`.",
          starterCode: "<?php\nuse App\\Models\\User;\n\n// Ambil satu user berdasarkan kunci utamanya\n",
          language: "text",
          tests: [
            {
              pattern: "\\$user\\s*=\\s*User::",
              message:
                "Method Eloquent dipanggil langsung pada kelas Model-nya dengan tanda `::` (bukan `->`), karena kamu belum punya objeknya — objek itulah yang sedang dicari.",
            },
            {
              pattern: "User::(find|findOrFail)\\s*\\(\\s*5\\s*\\)",
              message:
                "Pencarian berbasis kunci utama punya method khususnya sendiri, dan argumennya cukup nilai id-nya saja — tidak perlu `where('id', 5)->first()`. Untuk data yang belum tentu ada, varian berakhiran `OrFail` lebih aman karena langsung menghasilkan 404 alih-alih `null` yang meledak belakangan.",
            },
          ],
          solution: "<?php\nuse App\\Models\\User;\n\n$user = User::find(5);",
          susunKode: {
            question:
              "Susun kueri Eloquent untuk mencari data User berdasarkan kunci utama ID 5 menggunakan metode find().",
            potongan: [
              "<?php",
              "use App\\Models\\User;",
              "$user = User::find(5);",
            ],
            pengecoh: [
              "$user = User::get(5);",
              "$user = User::whereId(5);",
            ],
            pemisah: "\n",
            explanation:
              "Metode find($id) pada Eloquent secara instan mengambil satu model berdasarkan primary key. Keping get(5) keliru karena get() mengambil koleksi dan tidak menerima id langsung. Keping whereId(5) menggoda tetapi memerlukan pemanggilan ->first() untuk mendapatkan instans tunggal.",
          },
        },
        {
          kind: "step",
          id: "laravel-4-4",
          title: "Query Builder: where & paginate()",
          explanation:
            "Query Builder membangun query bertahap: `where()` menambahkan syarat, `orderBy()` menambahkan urutan, dan tidak satu pun dari itu menyentuh database — SQL-nya baru dikirim ketika kamu memanggil method penutup seperti `get()`, `first()`, `count()`, atau `paginate()`. Kenapa perlu tahu ini? Karena lupa memanggil penutupnya adalah kebingungan pemula nomor satu: `$produk = Product::where('status','active');` menghasilkan objek Builder, bukan data, dan `foreach` di atasnya melempar error yang tidak menyebut apa pun soal query. `paginate(15)` sekaligus melakukan tiga hal: menghitung total baris, menjalankan `limit 15 offset ...` sesuai `?page=` di URL, dan membungkus hasilnya sehingga `{{ $products->links() }}` di Blade langsung menghasilkan navigasi halaman. Kapan ini menyelamatkanmu: begitu tabelnya berisi puluhan ribu baris, `all()` menarik semuanya ke memori dan permintaan berakhir `Allowed memory size exhausted`. Jebakan halus: `paginate()` tanpa `orderBy()` memberi urutan yang tidak dijamin database, sehingga satu baris bisa muncul dua kali di halaman berbeda.",
          example: {
            code:
              "use App\\Models\\Product;\n\n" +
              "$products = Product::where('stock', '>', 0)\n" +
              "    ->orderBy('name')\n" +
              "    ->paginate(10);",
            output:
              "# SQL yang dijalankan saat pengguna membuka /produk?page=2\n" +
              "select count(*) as aggregate from `products` where `stock` > 0\n" +
              "select * from `products` where `stock` > 0 order by `name` asc limit 10 offset 10\n\n" +
              "# isi objek paginator:\n" +
              "total()        : 43\n" +
              "currentPage()  : 2\n" +
              "lastPage()     : 5\n" +
              "count()        : 10   (jumlah baris di halaman ini)",
            note: "Dua query itu wajar: satu untuk menghitung total (agar tahu ada berapa halaman), satu untuk mengambil isinya. Kalau totalnya tidak dibutuhkan, `simplePaginate()` melewatkan query hitung dan jauh lebih murah di tabel besar. Catatan jujur: panel latihan tidak menjalankan Laravel maupun database, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Halaman katalog hanya boleh menampilkan produk yang kolom `status`-nya bernilai `active`, dan dipecah `15` produk per halaman. Susun query-nya dari Model `Product` lalu simpan hasilnya ke sebuah variabel — nama variabelnya bebas.",
          starterCode: "<?php\nuse App\\Models\\Product;\n\n// Susun query katalog di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Product::where\\s*\\(\\s*['\"]status['\"]\\s*,\\s*['\"]active['\"]\\s*\\)",
              message:
                "Penyaringan baris memakai `where()`. Bentuk dua argumen (`kolom, nilai`) sudah berarti sama dengan; bentuk tiga argumen (`kolom, operator, nilai`) dipakai kalau operatornya bukan `=`.",
            },
            {
              pattern: "->paginate\\s*\\(\\s*15\\s*\\)",
              message:
                "Query belum menyentuh database sampai kamu memanggil method penutupnya. Karena hasilnya harus terpecah per halaman, penutupnya bukan `get()` melainkan method paginasi, dengan jumlah baris per halaman sebagai argumennya.",
            },
            {
              pattern: "\\$\\w+\\s*=\\s*Product::",
              message:
                "Simpan hasil query ke sebuah variabel supaya bisa dioper ke tampilan. Namanya bebas, tetapi konvensi Laravel memakai bentuk jamak untuk koleksi (`$products`) dan tunggal untuk satu baris (`$product`) — kebiasaan kecil yang sangat membantu saat membaca kode orang lain.",
            },
          ],
          solution: "<?php\nuse App\\Models\\Product;\n\n$products = Product::where('status', 'active')->paginate(15);",
          susunKode: {
            potongan: [
              "<?php",
              "use App\\Models\\Product;",
              "$products =",
              "Product::where('status', 'active')",
              "->paginate(15);",
            ],
            pengecoh: [
              "Product::filter('status', 'active')",
              "->limit(15);",
            ],
            pemisah: "\n",
            explanation:
              "Penyaringan baris memakai where(), dan query baru benar-benar dijalankan oleh method penutupnya \u2014 di sini paginate(15) yang sekaligus memecah hasilnya per halaman. Keping filter() keliru karena filter adalah method Collection yang bekerja pada data yang sudah ditarik ke memori, bukan klausa SQL. Keping ->limit(15) menggoda karena juga membatasi jumlah baris, tetapi ia tidak menghasilkan objek Paginator sehingga navigasi halaman lewat links() tidak pernah muncul.",
          },
        },
        {
          kind: "step",
          id: "laravel-4-5",
          title: "Relasi Eloquent: hasMany & belongsTo",
          explanation:
            "Relasi dideklarasikan sebagai method di dalam Model yang mengembalikan `$this->hasMany(...)` atau `$this->belongsTo(...)`. Cara memilihnya sederhana: **kolom kunci asing ada di tabel yang mana?** Kalau tabel `posts` punya kolom `user_id`, maka `Post` yang `belongsTo(User::class)` dan `User` yang `hasMany(Post::class)` — sisi yang menyimpan kunci asing selalu memakai `belongsTo`. Setelah itu, `$post->user` langsung memberi objek `User`-nya tanpa satu pun `JOIN` kamu tulis. Konvensinya: nama kunci asing ditebak dari nama method plus `_id`, jadi method `user()` mencari kolom `user_id`; kalau kolommu bernama lain, sebutkan sebagai argumen kedua (`belongsTo(User::class, 'penulis_id')`). Jebakan yang paling membingungkan: `$post->user` (tanpa kurung) memberi **objek hasil relasi**, sedangkan `$post->user()` (dengan kurung) memberi objek Query Builder yang belum dijalankan — memakai yang salah menghasilkan error `Property [name] does not exist on this collection instance` yang tidak menyinggung soal kurung sama sekali.",
          example: {
            code:
              "// app/Models/User.php — sisi 'satu'\n" +
              "class User extends Model {\n" +
              "    public function posts() {\n" +
              "        return $this->hasMany(Post::class);\n" +
              "    }\n" +
              "}\n\n" +
              "// pemakaian:\n" +
              "$user = User::find(1);\n" +
              "echo $user->posts->count();\n" +
              "echo $user->posts->first()->title;",
            output:
              "# SQL yang dijalankan saat $user->posts pertama kali disentuh:\n" +
              "select * from `posts` where `posts`.`user_id` = 1 and `posts`.`user_id` is not null\n\n" +
              "3\n" +
              "Belajar Eloquent dari Nol",
            note: "Perhatikan kolom `user_id` di query itu: tidak pernah kamu sebutkan, Eloquent menebaknya dari nama Model `User`. Kalau kolommu bernama `penulis_id`, query ini akan gagal dengan `Column not found: user_id`. Catatan jujur: panel latihan tidak menjalankan Laravel maupun database, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Tabel `posts` menyimpan kolom `user_id` yang menunjuk ke pemiliknya. Lengkapi method `user()` di Model `Post` agar mengembalikan relasi ke Model `User` — pilih jenis relasi yang benar untuk sisi yang **menyimpan** kunci asing.",
          starterCode: "<?php\nclass Post extends Model {\n    public function user() {\n        // Kembalikan relasinya di sini\n    }\n}",
          language: "text",
          tests: [
            {
              pattern: "return\\s+\\$this\\s*->\\s*belongsTo\\s*\\(",
              message:
                "Sisi yang menyimpan kolom kunci asing (`posts.user_id`) selalu memakai relasi \"milik\". Kalau kamu memilih `hasMany` di sini, Eloquent akan mencari kolom `post_id` di tabel `users` dan gagal dengan `Column not found`.",
            },
            {
              pattern: "belongsTo\\s*\\(\\s*User::class",
              message:
                "Argumen pertamanya adalah Model tujuan, ditulis dengan `::class` — bukan teks `'User'`. Bentuk `::class` membuat editor bisa melacaknya dan salah ketik ketahuan lebih awal.",
            },
          ],
          solution: "<?php\nclass Post extends Model {\n    public function user() {\n        return $this->belongsTo(User::class);\n    }\n}",
          susunKode: {
            question:
              "Susun relasi Eloquent belongsTo pada kelas Post yang menghubungkan artikel ke pemiliknya (User).",
            potongan: [
              "<?php",
              "class Post extends Model {",
              "    public function user() {",
              "        return $this->belongsTo(User::class);",
              "    }",
              "}",
            ],
            pengecoh: [
              "        return $this->hasOne(User::class);",
              "        return $this->belongsTo('User');",
            ],
            pemisah: "\n",
            explanation:
              "Relasi belongsTo digunakan pada model anak yang menyimpan foreign key untuk merujuk ke induk (User). Keping hasOne keliru karena mendefinisikan relasi dari sisi induk ke anak. Keping string 'User' menggoda tetapi menyalahi rekomendasi penggunaan User::class.",
          },
        },
        {
          kind: "step",
          id: "laravel-4-6",
          title: "Eager Loading & Mencegah Masalah N+1",
          explanation:
            "Masalah N+1 lahir dari kombinasi yang terlihat wajar: kamu mengambil 50 produk (1 query), lalu di dalam perulangan tampilan menyentuh `$produk->category->name` — dan setiap sentuhan itu memicu satu query baru, total 51. Halamannya tetap benar, hanya lambat; itu sebabnya bug ini lolos sampai produksi dan baru terasa saat datanya banyak. `Model::with('relasi')` memperbaikinya dengan **memuat di awal**: Laravel mengambil semua produk, mengumpulkan seluruh `category_id`-nya, lalu mengambil kategorinya dalam satu query `where id in (...)` — dua query, berapa pun jumlah barisnya. Kapan dipakai: setiap kali kamu tahu relasinya akan disentuh di tampilan. Kapan **tidak**: kalau relasinya belum tentu dipakai, `with()` justru menarik data sia-sia — untuk itu ada `load()` yang dipanggil belakangan. Jebakan yang khas: nama di dalam `with()` harus persis nama **method relasinya** di Model, bukan nama tabel — salah nama menghasilkan `Call to undefined relationship`. Deteksi paling praktis di kerja nyata: pasang Laravel Telescope atau Debugbar dan lihat jumlah query per halaman; angka yang naik seiring jumlah baris adalah tanda pasti N+1.",
          example: {
            code:
              "use App\\Models\\Post;\n\n" +
              "// ❌ tanpa eager loading\n" +
              "$posts = Post::all();\n" +
              "foreach ($posts as $post) { echo $post->user->name; }\n\n" +
              "// ✅ dengan eager loading\n" +
              "$posts = Post::with('user')->get();\n" +
              "foreach ($posts as $post) { echo $post->user->name; }",
            output:
              "# versi ❌ — log query untuk 3 post:\n" +
              "select * from `posts`\n" +
              "select * from `users` where `users`.`id` = 1 limit 1\n" +
              "select * from `users` where `users`.`id` = 2 limit 1\n" +
              "select * from `users` where `users`.`id` = 1 limit 1\n" +
              "→ 4 query (1 + 3). Dengan 100 post: 101 query.\n\n" +
              "# versi ✅ — log query untuk 3 post:\n" +
              "select * from `posts`\n" +
              "select * from `users` where `users`.`id` in (1, 2)\n" +
              "→ 2 query. Dengan 100 post: tetap 2 query.",
            note: "Perhatikan baris keempat versi ❌: user id 1 diambil dua kali karena dua post punya penulis sama. Versi ✅ mengambilnya sekali lewat `in (...)`. Catatan jujur: panel latihan tidak menjalankan Laravel maupun database, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Halaman daftar produk menampilkan nama kategori di setiap barisnya, dan Model `Product` sudah punya method relasi bernama `category`. Ambil seluruh produk sekaligus kategorinya dalam jumlah query yang tetap — jangan biarkan tampilan yang memanggil relasinya satu per satu. Nama variabel penampung hasilnya bebas.",
          starterCode: "<?php\nuse App\\Models\\Product;\n\n// Ambil produk beserta kategorinya di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Product::with\\s*\\(\\s*['\"]category['\"]",
              message:
                "Pemuatan awal relasi memakai method `with()` yang diberi nama method relasinya sebagai teks — `category`, bukan `categories` (nama tabel) dan bukan `Category` (nama kelas). Untuk beberapa relasi sekaligus, argumennya berupa array.",
            },
            {
              pattern: "->get\\s*\\(\\s*\\)",
              message:
                "`with()` hanya menyusun rencana query. Tambahkan method penutup yang benar-benar menjalankannya dan mengembalikan koleksi. Tanpa itu yang tersimpan di variabelmu adalah objek Builder, dan perulangan di tampilan langsung gagal.",
            },
            {
              pattern: "\\$\\w+\\s*=\\s*Product::",
              message:
                "Simpan hasilnya ke sebuah variabel agar bisa dioper ke tampilan lewat `return view('produk', compact('products'));`.",
            },
          ],
          solution: "<?php\nuse App\\Models\\Product;\n\n$products = Product::with('category')->get();",
          susunKode: {
            potongan: [
              "<?php",
              "use App\\Models\\Product;",
              "$products =",
              "Product::with('category')",
              "->get();",
            ],
            pengecoh: [
              "Product::load('category')",
              "->all();",
            ],
            pemisah: "\n",
            explanation:
              "Eager loading dipasang dengan with() sebelum query dijalankan, lalu get() yang benar-benar mengeksekusinya. Keping load() keliru karena load() dipakai pada model atau koleksi yang sudah diambil dari database, bukan sebagai method statis pada kelas Model. Keping ->all() menggoda karena Product::all() memang ada dan terasa serupa, tetapi all() bukan method Builder \u2014 merantaikannya setelah with() membuat PHP melempar error method tidak ditemukan.",
          },
        },
        {
          kind: "step",
          id: "laravel-4-7",
          title: "Seeder & Factory untuk Data Dummy",
          explanation:
            "Factory adalah cetakan data palsu untuk satu Model (`database/factories/ProductFactory.php`), sedangkan Seeder adalah skrip yang menjalankan cetakan itu untuk mengisi database (`database/seeders/`). Kenapa keduanya penting sejak awal? Karena tanpa data, kamu tidak bisa melihat apakah paginasi, pengurutan, atau tampilan daftar benar-benar bekerja — dan mengisi seratus baris lewat formulir satu per satu bukan pekerjaan yang layak diulang. `Product::factory(100)->create()` menulis 100 baris ke database; varian `->make()` hanya membuat objeknya di memori tanpa menyimpan — itu yang dipakai di unit test yang tidak menyentuh database. Nilai bawaan cetakannya bisa ditimpa per pemanggilan: `Product::factory(5)->create(['status' => 'draft'])`. Jebakan yang mahal: `php artisan db:seed` berjalan di koneksi database mana pun yang aktif di `.env` — menjalankannya sementara `.env`-mu masih menunjuk server produksi berarti menyuntikkan ratusan produk palsu ke data sungguhan. Jebakan kedua: seeder tidak dijalankan otomatis oleh `php artisan migrate`; harus `migrate --seed` atau `db:seed` terpisah.",
          example: {
            code:
              "// database/seeders/DatabaseSeeder.php\n" +
              "public function run(): void\n" +
              "{\n" +
              "    User::factory(50)->create();\n" +
              "    User::factory()->create(['email' => 'admin@bilearn.id']);\n" +
              "}",
            output:
              "$ php artisan db:seed\n\n" +
              "   INFO  Seeding database.\n\n" +
              "  Database\\Seeders\\DatabaseSeeder ..................... 812ms DONE\n\n" +
              "$ php artisan tinker\n" +
              "> User::count();\n" +
              "= 51\n" +
              "> User::latest()->first()->email;\n" +
              "= \"admin@bilearn.id\"",
            note: "Baris kedua contoh memperlihatkan cara menimpa satu kolom: sisanya tetap acak, hanya email yang ditentukan — pola yang selalu dipakai untuk membuat akun uji yang bisa kamu login-i. Catatan jujur: panel latihan tidak menjalankan terminal maupun database, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Kamu sedang menyunting berkas seeder dan butuh `100` baris produk palsu yang benar-benar **tersimpan** ke database untuk menguji paginasi. Tulis satu baris yang memanggil cetakan data Model `Product` sebanyak itu lalu menyimpannya.",
          starterCode: "<?php\nuse App\\Models\\Product;\n\n// Isi database dengan 100 produk palsu\n",
          language: "text",
          tests: [
            {
              pattern: "Product::factory\\s*\\(\\s*100\\s*\\)",
              message:
                "Cetakan data palsu dipanggil sebagai method statis pada Model-nya, dan jumlah baris yang diinginkan ditulis sebagai argumen. Tanpa argumen, yang dibuat hanya satu baris.",
            },
            {
              pattern: "->create\\s*\\(",
              message:
                "Ada dua penutup yang mirip namun berbeda akibat: satu benar-benar menulis ke database, satunya lagi (`make()`) hanya membentuk objek di memori. Karena data ini harus ada saat halaman dibuka, pilih yang menyimpan.",
            },
          ],
          solution: "<?php\nuse App\\Models\\Product;\n\nProduct::factory(100)->create();",
          susunKode: {
            question:
              "Rangkai eksekusi Factory untuk menghasilkan dan menyimpan 100 data dummy Product ke basis data.",
            potongan: [
              "<?php",
              "use App\\Models\\Product;",
              "Product::factory(100)",
              "->create();",
            ],
            pengecoh: [
              "Product::generate(100)",
              "->make();",
            ],
            pemisah: "\n",
            explanation:
              "Cetakan data palsu dipanggil sebagai method statis factory() pada Model-nya, lalu create() yang menuliskan barisnya ke database. Keping generate() keliru nama method \u2014 Eloquent tidak punya method itu, dan pesan errornya tidak menyinggung factory sama sekali. Keping ->make() sangat menggoda karena kodenya berjalan tanpa error apa pun, tetapi ia hanya membentuk objek di memori: databasenya tetap kosong dan paginasi yang ingin kamu uji tidak pernah punya data.",
          },
        },
        {
  kind: "step",
  id: "laravel-4-8",
  title: "Mendefinisikan Kunci Asing di Berkas Migrasi",
  explanation: "Metode `$table->foreignId('user_id')->constrained()->cascadeOnDelete()` adalah konvensi ringkas di Laravel untuk membangun relasi kunci asing antartabel secara aman di tingkat mesin basis data. `foreignId` membuat kolom integer tak bertanda, `constrained()` secara otomatis menebak tabel induknya dari nama kolom (`user_id` merujuk ke tabel `users` kolom `id`), dan `cascadeOnDelete()` memastikan data anak otomatis terhapus jika baris induknya dihapus. Kenapa ini esensial: integritas data terjaga langsung di database sehingga tidak meninggalkan baris yatim (*orphan records*) saat ada data pengguna yang dihapus. Kapan dipakai: setiap kali kamu mendesain tabel anak yang bergantung pada tabel induk. Jebakan yang sering merusak migrasi: urutan eksekusi berkas migrasi yang salah — jika tabel `posts` dimigrasi sebelum tabel `users` dibuat, database melempar error *Foreign key constraint is incorrectly formed*.",
  example: {
    code: "$table->foreignId('category_id')->constrained()->nullOnDelete();",
    output: "# DDL SQL yang dihasilkan di MySQL:\nALTER TABLE `posts` ADD CONSTRAINT `posts_category_id_foreign`\nFOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;",
    note: "Satu rantai metode ringkas menghasilkan perintah DDL constraint lengkap di database."
  },
  instruction: "Di dalam method `up()` migrasi tabel `posts`, tambahkan definisi kolom foreign key `user_id` yang terikat ke tabel `users` dan otomatis menghapus artikel jika pengguna induknya dihapus (*cascade on delete*).",
  starterCode: "<?php\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nSchema::create('posts', function (Blueprint $table) {\n    $table->id();\n    // Tambahkan kolom foreign key user_id di sini\n    $table->timestamps();\n});",
  language: "text",
  tests: [
    {
      pattern: "\\$table->foreignId\\s*\\(\\s*['\"]user_id['\"]\\s*\\)",
      message: "Gunakan method $table->foreignId('user_id') untuk membuat kolom foreign key."
    },
    {
      pattern: "->constrained\\s*\\(\\s*\\)",
      message: "Rantaikan metode ->constrained() untuk mengikat constraint ke tabel induk secara otomatis."
    },
    {
      pattern: "->cascadeOnDelete\\s*\\(\\s*\\);",
      message: "Rantaikan metode ->cascadeOnDelete() untuk menghapus baris anak jika induk dihapus."
    }
  ],
  solution: "<?php\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nSchema::create('posts', function (Blueprint $table) {\n    $table->id();\n    $table->foreignId('user_id')->constrained()->cascadeOnDelete();\n    $table->timestamps();\n});",
  susunKode: {
    question: "Susun pembuatan kolom kunci asing dengan constraint cascade on delete di berkas migrasi.",
    potongan: [
      "    $table->id();",
      "    $table->foreignId('user_id')",
      "        ->constrained()",
      "        ->cascadeOnDelete();",
      "    $table->timestamps();"
    ],
    pengecoh: [
      "    $table->unsignedBigInteger('user_id');",
      "        ->onDelete('cascade');"
    ],
    pemisah: "\n",
    explanation: "foreignId('user_id') bersama constrained() dan cascadeOnDelete() adalah sintaks deklarasi relasi kunci asing modern di Laravel. Keping unsignedBigInteger keliru karena membutuhkan deklarasi foreign() terpisah yang panjang. Keping ->onDelete('cascade') menggoda gaya lama tetapi cascadeOnDelete() lebih ringkas dan idiomatis."
  }
},
{
  kind: "step",
  id: "laravel-4-9",
  title: "Mendefinisikan Relasi Many-to-Many (belongsToMany)",
  explanation: "Relasi banyak-ke-banyak (*many-to-many*) terjadi saat satu rekaman di tabel A dapat terhubung ke banyak rekaman di tabel B, dan sebaliknya — misalnya seorang `User` dapat memiliki banyak `Role`, dan satu `Role` dapat dimiliki oleh banyak `User`. Di Eloquent, relasi ini dideklarasikan dengan `$this->belongsToMany(Role::class)`. Laravel secara cerdas menebak tabel perantara (*pivot table*) dengan menggabungkan nama kedua model dalam urutan alfabet dan huruf kecil tunggal (`role_user`). Kenapa penting dipahami: tanpa relasi ini kamu terpaksa mengelola tabel pivot secara manual melalui query join yang panjang dan rumit. Kapan dipakai: sistem hak akses, penandaan artikel (*tags*), dan keranjang belanja produk. Jebakan umum: membuat tabel pivot dengan nama jamak (`roles_users`) tanpa mendeklarasikannya di parameter kedua `belongsToMany(Role::class, 'roles_users')`.",
  example: {
    code: "class Post extends Model {\n    public function tags() {\n        return $this->belongsToMany(Tag::class);\n    }\n}",
    output: "# SQL saat menyentuh $post->tags:\nselect `tags`.*, `post_tag`.`post_id` as `pivot_post_id`\nfrom `tags` inner join `post_tag` on `tags`.`id` = `post_tag`.`tag_id`\nwhere `post_tag`.`post_id` = 5",
    note: "Eloquent otomatis mengeksekusi inner join ke tabel pivot tanpa perlu query manual."
  },
  instruction: "Di dalam Model `User`, definisikan method relasi `roles()` yang mengembalikan relasi many-to-many ke Model `Role` melalui tabel pivot.",
  starterCode: "<?php\nclass User extends Model {\n    public function roles() {\n        // Kembalikan relasi many-to-many di sini\n    }\n}",
  language: "text",
  tests: [
    {
      pattern: "return\\s+\\$this->belongsToMany\\s*\\(\\s*Role::class\\s*\\);",
      message: "Kembalikan relasi dengan memanggil $this->belongsToMany(Role::class)."
    }
  ],
  solution: "<?php\nclass User extends Model {\n    public function roles() {\n        return $this->belongsToMany(Role::class);\n    }\n}",
  susunKode: {
    question: "Susun method relasi many-to-many pada Model User ke Model Role.",
    potongan: [
      "<?php",
      "class User extends Model {",
      "    public function roles() {",
      "        return $this->belongsToMany(Role::class);",
      "    }",
      "}"
    ],
    pengecoh: [
      "        return $this->hasMany(Role::class);",
      "        return $this->hasManyThrough(Role::class);"
    ],
    pemisah: "\n",
    explanation: "Relasi many-to-many pada Eloquent dihubungkan melalui method belongsToMany yang otomatis mencari tabel pivot perantara. Keping hasMany keliru karena hanya mendefinisikan relasi satu-ke-banyak. Keping hasManyThrough menggoda karena terdengar mirip melewati tabel lain tetapi membutuhkan model perantara terpisah."
  }
},
{
  kind: "step",
  id: "laravel-4-10",
  title: "Menjaga Konsistensi Data dengan DB::transaction",
  explanation: "`DB::transaction(function () { ... })` membungkus sekumpulan operasi database ke dalam satu unit transaksi atomik (*ACID*). Jika seluruh pernyataan di dalam closure berhasil dieksekusi tanpa galat, transaksi otomatis di-*commit*; namun jika terjadi satu saja `Exception`, seluruh perubahan dibatalkan (*rollback*) secara otomatis seolah tidak pernah terjadi. Kenapa ini wajib di dunia kerja: transaksi mencegah inkonsistensi fatal pada alur pembayaran — bayangkan saldo pengguna sudah berkurang tetapi pencatatan pesanan gagal akibat server terputus. Kapan dipakai: setiap kali sebuah aksi bisnis mengubah lebih dari satu baris atau lebih dari satu tabel yang saling berkaitan. Jebakan umum: membungkus panggilan API eksternal di dalam database transaction — jika API luar lambat, koneksi database terkunci (*lock wait timeout*) dan melumpuhkan sistem.",
  example: {
    code: "<?php\nuse Illuminate\\Support\\Facades\\DB;\n\nDB::transaction(function () use ($wallet, $amount) {\n    $wallet->decrement('balance', $amount);\n    Transaction::create(['amount' => $amount]);\n});",
    output: "# Log database query:\nSTART TRANSACTION;\nUPDATE `wallets` SET `balance` = `balance` - 50000 WHERE `id` = 2;\nINSERT INTO `transactions` (`amount`) VALUES (50000);\nCOMMIT;",
    note: "Kedua perintah dieksekusi sebagai satu kesatuan utuh dengan mekanisme rollback otomatis bila ada error."
  },
  instruction: "Bungkus aksi pembuatan pesanan `$order = Order::create(['total' => 50000]);` dan pemotongan stok `$product->decrement('stock', 1);` di dalam transaksi basis data `DB::transaction()`.",
  starterCode: "<?php\nuse App\\Models\\Order;\nuse Illuminate\\Support\\Facades\\DB;\n\n// Bungkus aksi di dalam transaksi database di sini\n",
  language: "text",
  tests: [
    {
      pattern: "DB::transaction\\s*\\(",
      message: "Panggil metode transaksi atomik melalui Facade DB::transaction."
    },
    {
      pattern: "Order::create\\s*\\(\\s*\\[\\s*['\"]total['\"]\\s*=>\\s*50000\\s*\\]\\s*\\);",
      message: "Eksekusi pembuatan pesanan Order::create di dalam closure transaksi."
    },
    {
      pattern: "\\$product->decrement\\s*\\(\\s*['\"]stock['\"]\\s*,\\s*1\\s*\\);",
      message: "Kurangi stok produk menggunakan metode decrement di dalam closure transaksi."
    }
  ],
  solution: "<?php\nuse App\\Models\\Order;\nuse Illuminate\\Support\\Facades\\DB;\n\nDB::transaction(function () use ($product) {\n    $order = Order::create(['total' => 50000]);\n    $product->decrement('stock', 1);\n});",
  susunKode: {
    question: "Susun pembungkusan operasi mutasi ganda database ke dalam DB::transaction.",
    potongan: [
      "DB::transaction(function () use ($product) {",
      "    $order = Order::create(['total' => 50000]);",
      "    $product->decrement('stock', 1);",
      "});"
    ],
    pengecoh: [
      "DB::afterCommit(function () use ($product) {",
      "    $order = Order::make(['total' => 50000]);"
    ],
    pemisah: "\n",
    explanation: "DB::transaction membungkus sekumpulan mutasi basis data dalam satu unit atomik yang otomatis di-rollback jika terjadi error. Keping DB::afterCommit keliru karena hanya menunda eksekusi setelah transaksi induk selesai. Keping Order::make menggoda karena tampak mirip create tetapi hanya membuat instans memori tanpa menyimpan ke database."
  }
},
        {
          kind: "quiz",
          id: "laravel-4-kuis",
          title: "Kuis: Eloquent ORM & Basis Data",
          questions: [
            {
              id: "l4-q1",
              type: "pilihan-ganda",
              question: "Jika kamu memiliki Model bernama `Article`, nama tabel apakah yang secara konvensi dicari oleh Eloquent di database?",
              choices: [
                "article_table",
                "articles",
                "tbl_article",
                "article"
              ],
              answerIndex: 1,
              explanation: "Eloquent menggunakan konvensi bentuk jamak bahasa Inggris (*plural snake_case*): model `Article` dipetakan ke tabel `articles`, model `User` ke `users`, dan model `ProductCategory` ke `product_categories`."
            },
            {
              id: "l4-q2",
              type: "pilihan-ganda",
              question: "Apakah dampak negatif dari Masalah N+1 Query di dalam aplikasi Laravel?",
              choices: [
                "Terjadi korupsi data pada transaksi database yang sedang berlangsung di server",
                "Model Eloquent otomatis mematikan fitur query builder secara permanen",
                "Kunci foreign key database terlepas dari tabel induk saat relasi dipanggil",
                "Terjadi pembengkakan ratusan hingga ribuan query SQL berulang ke database yang menyebabkan aplikasi menjadi sangat lambat"
              ],
              answerIndex: 3,
              explanation: "N+1 Query terjadi ketika kamu mengambil N record (1 query), lalu di dalam loop memanggil data relasinya (N query tambahan). Akibatnya ada 1+N query terpisah ke basis data yang membebani CPU database dan melambatkan respon web secara drastis."
            },
            {
              id: "l4-q3",
              type: "pilihan-ganda",
              question: "Metode Eloquent apakah yang digunakan untuk mengaktifkan Eager Loading guna mencegah Masalah N+1?",
              choices: [
                "->join()",
                "->with()",
                "->loadFast()",
                "->include()"
              ],
              answerIndex: 1,
              explanation: "`Post::with('author')->get()` memuat seluruh data relasi `author` di muka hanya dalam 2 query SQL teroptimasi (`SELECT * FROM posts` dan `SELECT * FROM authors WHERE id IN (...)`), memangkas puluhan query N+1."
            },
            {
              id: "l4-q4",
              type: "pilihan-ganda",
              question: "Properti apakah yang wajib didefinisikan di dalam Model untuk menentukan kolom mana saja yang aman diisi pada operasi `Model::create()`?",
              choices: [
                "protected $table",
                "public $timestamps",
                "protected $fillable",
                "private $primaryKey"
              ],
              answerIndex: 2,
              explanation: "Properti `protected $fillable = ['nama', 'harga']` menentukan daftar putih (*whitelist*) atribut yang boleh diisi secara mass assignment melalui `Model::create($request->all())` guna melindungi aplikasi dari injeksi kolom tak berizin."
            },
            {
              id: "l4-q5",
              type: "pilihan-ganda",
              question: "Perintah Artisan apakah yang digunakan untuk mengeksekusi seluruh berkas Migration yang belum berjalan ke dalam database?",
              choices: [
                "php artisan migrate",
                "php artisan db:run",
                "composer run-migration",
                "php artisan schema:build"
              ],
              answerIndex: 0,
              explanation: "`php artisan migrate` membaca seluruh berkas di direktori `database/migrations` dan mengeksekusi method `up()` untuk migrasi yang belum tercatat di tabel `migrations` basis data."
            }
          ]
        }
      ],
    },
    {
      slug: "form-validasi",
      title: "Form & Validasi",
      description:
        "Penanganan Form, Validasi Server-Side, Old Input, dan Upload Berkas.",
      topics: [
        "Form Blade + CSRF token",
        "Validasi: rules, pesan custom, old input",
        "Form Request class untuk validasi kompleks",
        "File upload & storage",
        "Error handling & halaman error custom",
        "Mass assignment: fillable vs guarded",
      ],
      items: [
        {
          kind: "materi",
          id: "laravel-5-m1",
          title: "Penanganan Form, Keamanan CSRF, dan Validasi Request",
          body:
            "# Keamanan Form & Validasi Server-Side\n\n" +
            "Pengelolaan formulir web adalah pintu masuk utama masukan pengguna. Laravel menyediakan sistem proteksi serangan **CSRF** (*Cross-Site Request Forgery*) secara *out-of-the-box* dan mesin validasi yang sangat fleksibel.\n\n" +
            "## Proteksi CSRF (@csrf)\n\n" +
            "Setiap formulir HTML dengan metode `POST`, `PUT`, `PATCH`, atau `DELETE` **WAJIB** menyertakan direktif `@csrf`. Direktif ini menyuntikkan elemen input tersembunyi berisi token rahasia acak yang diverifikasi oleh middleware `ValidateCsrfToken`.\n\n" +
            "```html\n" +
            "<!-- Form HTML di Blade -->\n" +
            "<form action=\"/produk\" method=\"POST\">\n" +
            "    @csrf  <!-- Menghasilkan <input type=\"hidden\" name=\"_token\" value=\"...\"> -->\n" +
            "    <input type=\"text\" name=\"nama\">\n" +
            "    <button type=\"submit\">Simpan</button>\n" +
            "</form>\n" +
            "```\n\n" +
            "## Rujukan Aturan Validasi Utama (Validation Rules)\n\n" +
            "| Aturan Validasi | Contoh Penggunaan | Deskripsi Fungsi |\n" +
            "|---|---|---|\n" +
            "| `required` | `'nama' => 'required'` | Bidang masukan wajib diisi dan tidak boleh kosong. |\n" +
            "| `email` | `'email' => 'required\|email'` | Harus berformat alamat email yang valid. |\n" +
            "| `min` / `max` | `'password' => 'min:8'` | Membatasi panjang minimum/maksimum karakter atau nilai angka. |\n" +
            "| `unique` | `'email' => 'unique:users,email'` | Nilai harus unik (belum ada di tabel `users` kolom `email`). |\n" +
            "| `image` / `mimes` | `'foto' => 'image\|mimes:jpeg,png\|max:2048'` | Memvalidasi ekstensi dan ukuran maksimum berkas gambar (dalam KB). |\n\n" +
            "## Alur Penanganan Error & Old Input\n\n" +
            "Jika validasi `$request->validate([...])` gagal, Laravel otomatis membatalkan eksekusi, mengembalikan pengguna ke halaman formulir sebelumnya, serta mengirimkan variabel pesan error `$errors` dan masukan lama `old('nama_field')` agar pengguna tidak perlu mengetik ulang seluruh isian.\n\n" +
            "## Mass Assignment Protection ($fillable vs $guarded)\n\n" +
            "- **`$fillable` (Whitelisting):** Daftar nama kolom yang **diizinkan** diisi via Mass Assignment.\n" +
            "- **`$guarded` (Blacklisting):** Daftar nama kolom yang **dilarang** diisi via Mass Assignment (misal `protected $guarded = ['is_admin'];`).\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan **Direktif `@csrf`** seperti cap stempel resmi bertinta khusus pada surat permohonan; tanpa stempel sah dari lokasi kantor, petugas akan langsung menolak surat tersebut karena curiga dipalsukan oleh pihak ketiga. **Validasi Request** seperti petugas pemeriksaan keamanan di bandara yang memeriksa apakah barang bawaanmu memenuhi syarat sebelum diizinkan masuk ke dalam pesawat (database).\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Error HTTP 419 Page Expired:** Disebabkan karena lupa mencantumkan `@csrf` di dalam form POST, atau token session CSRF sudah kadaluarsa.\n" +
            "2. **Storage Link Belum Dibuat (`storage:link`):** File yang diunggah pengguna disimpan di folder `storage/app/public/` yang privat. Agar berkas gambar tersebut dapat diakses oleh publik via URL browser (`/storage/avatars/file.png`), kamu wajib menjalankan `php artisan storage:link` di terminal.\n" +
            "3. **Lupa `enctype=\"multipart/form-data\"`:** Saat membuat form unggah berkas file/gambar, tag `<form>` wajib menyertakan atribut `enctype=\"multipart/form-data\"`. Tanpa atribut ini, file tidak akan pernah terunggah ke server.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Pemisahan logika validasi rumit ke dalam kelas **Form Request** (`php artisan make:request StoreProductRequest`) adalah standar arsitektur industri untuk menjaga Controller tetap bersih (*Thin Controller, Fat Model/Request*).",
        },
        {
          kind: "step",
          id: "laravel-5-1",
          title: "Form Blade + CSRF Token (@csrf)",
          explanation:
            "CSRF (*Cross-Site Request Forgery*) adalah serangan di mana situs jahat diam-diam mengirim formulir ke situsmu memakai sesi login korban yang masih aktif — korban cukup membuka satu halaman, dan uangnya berpindah. Pertahanannya: setiap formulir harus membawa token acak yang hanya diketahui sesi itu, dan `@csrf` menghasilkan `<input type=\"hidden\" name=\"_token\" value=\"...\">` yang berisi token tersebut. Situs penyerang tidak bisa membaca nilainya (kebijakan same-origin browser), jadi permintaan palsunya ditolak middleware sebelum menyentuh Controller. Kapan wajib dipasang: semua formulir `POST`, `PUT`, `PATCH`, dan `DELETE` — `GET` tidak butuh karena seharusnya tidak mengubah data. Jebakan yang paling sering ditanyakan pemula: halaman **419 Page Expired**. Penyebabnya hampir selalu satu dari dua hal — `@csrf` lupa ditulis, atau tab dibiarkan terbuka berjam-jam sehingga sesinya kedaluwarsa. Untuk permintaan AJAX, tokennya dikirim lewat header `X-CSRF-TOKEN` yang biasanya diambil dari `<meta name=\"csrf-token\">` di layout.",
          example: {
            code:
              "{{-- resources/views/produk/create.blade.php --}}\n" +
              "<form action=\"/products\" method=\"POST\">\n" +
              "    @csrf\n" +
              "    <input type=\"text\" name=\"name\">\n" +
              "    <button type=\"submit\">Simpan</button>\n" +
              "</form>",
            output:
              "HTML yang benar-benar dikirim ke browser:\n\n" +
              "<form action=\"/products\" method=\"POST\">\n" +
              "    <input type=\"hidden\" name=\"_token\" value=\"kQ2fY8xL1pOaB7ZmT4wR9sVnC3dEjHgU6i0K\" autocomplete=\"off\">\n" +
              "    <input type=\"text\" name=\"name\">\n" +
              "    <button type=\"submit\">Simpan</button>\n" +
              "</form>\n\n" +
              "# jika baris @csrf dihapus, submit menghasilkan:\n" +
              "419 | Page Expired",
            note: "Nilai token berubah setiap sesi. Kalau kamu pernah menemui 419 tanpa sebab jelas, buka Inspect Element dan cari `name=\"_token\"` — kalau tidak ada, itu jawabannya. Catatan jujur: panel latihan tidak merender Blade, jadi hasil ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Formulir login di editor mengirim data dengan metode POST, tetapi saat disubmit halaman balas `419 Page Expired`. Tambahkan satu direktif Blade di dalam formulir itu yang menyuntikkan token pengaman antar-situs sehingga permintaannya diterima.",
          starterCode:
            "<form action=\"/login\" method=\"POST\">\n    {{-- Perbaiki penyebab 419 di sini --}}\n    <input type=\"email\" name=\"email\">\n    <button type=\"submit\">Masuk</button>\n</form>",
          language: "text",
          tests: [
            {
              pattern: "<form[\\s\\S]*@csrf[\\s\\S]*</form>",
              message:
                "Direktifnya diawali tanda `@` diikuti singkatan nama serangannya (empat huruf, huruf kecil), dan harus berada DI DALAM tag `<form>` — kalau ditulis di luar, input tersembunyinya tidak ikut terkirim dan 419 tetap muncul.",
            },
          ],
          solution:
            "<form action=\"/login\" method=\"POST\">\n    @csrf\n    <input type=\"email\" name=\"email\">\n    <button type=\"submit\">Masuk</button>\n</form>",
          susunKode: {
            question:
              "Susun formulir login POST yang membawa token pengaman antar-situs sehingga permintaannya tidak lagi dijawab 419.",
            potongan: [
              "<form action=\"/login\" method=\"POST\">",
              "    @csrf",
              "    <input type=\"email\" name=\"email\">",
              "    <button type=\"submit\">Masuk</button>",
              "</form>",
            ],
            pengecoh: [
              "    @crsf",
              "    @token",
            ],
            pemisah: "\n",
            explanation:
              "Direktif @csrf menyuntikkan input tersembunyi bernama _token ke dalam formulir, dan tanpa input itu middleware menolak permintaannya dengan 419 Page Expired. Keping @crsf adalah salah ketik yang sangat sering terjadi dan sulit terlihat mata; Blade tidak mengenalinya sebagai direktif sehingga teksnya tercetak apa adanya ke halaman tanpa satu pun pesan error. Keping @token menggoda karena namanya terdengar masuk akal, padahal direktif itu tidak ada di Blade.",
          },
        },
        {
          kind: "step",
          id: "laravel-5-2",
          title: "Validasi Request & Old Input",
          explanation:
            "`$request->validate([...])` memeriksa masukan di sisi server dan punya perilaku yang perlu kamu pahami: kalau gagal, ia **melempar exception** yang ditangkap Laravel menjadi redirect kembali ke formulir — jadi baris-baris di bawahnya tidak pernah berjalan, dan kamu tidak perlu menulis `if` sama sekali. Kembaliannya hanya berisi kolom yang lolos aturan, sehingga `Product::create($validated)` lebih aman daripada `$request->all()` yang ikut membawa kolom tak terduga. Kenapa validasi sisi klien saja tidak cukup: atribut `required` di HTML dan pemeriksaan JavaScript bisa dilewati siapa pun dengan satu perintah `curl` — pemeriksaan yang benar-benar melindungi database adalah yang berjalan di server. Aturan ditulis sebagai teks berpemisah `|` (`'required|numeric|max:100'`) atau sebagai array (`['required', 'numeric']`); keduanya sah, dan bentuk array wajib dipakai kalau salah satu aturanmu mengandung karakter `|` seperti regex. Saat gagal, Laravel mengirim `$errors` dan menyimpan isian lama ke session — tampilkan dengan `@error('name')` dan isi ulang input dengan `value=\"{{ old('name') }}\"`, karena tanpa `old()` pengguna harus mengetik ulang seluruh formulir hanya karena satu kolom salah.",
          example: {
            code:
              "// app/Http/Controllers/PostController.php\n" +
              "public function store(Request $request)\n" +
              "{\n" +
              "    $validated = $request->validate([\n" +
              "        'title' => 'required|max:255',\n" +
              "        'email' => 'required|email',\n" +
              "    ]);\n\n" +
              "    Post::create($validated);   // hanya berjalan kalau semua lolos\n" +
              "    return redirect('/posts');\n" +
              "}",
            output:
              "# permintaan valid:\n" +
              "POST /posts  title=Belajar&email=bimo@example.com\n" +
              "→ HTTP/1.1 302 Found   Location: /posts\n\n" +
              "# permintaan tidak valid (email kosong):\n" +
              "POST /posts  title=Belajar&email=\n" +
              "→ HTTP/1.1 302 Found   Location: /posts/create   (kembali ke formulir)\n" +
              "  session errors: {\"email\":[\"The email field is required.\"]}\n" +
              "  session _old_input: {\"title\":\"Belajar\"}\n\n" +
              "# permintaan yang sama dengan header Accept: application/json:\n" +
              "→ HTTP/1.1 422 Unprocessable Content\n" +
              "  {\"message\":\"The email field is required.\",\"errors\":{\"email\":[\"The email field is required.\"]}}",
            note: "Perhatikan blok terakhir: respons validasi berbeda antara permintaan biasa (302 kembali ke form) dan permintaan API (422 berisi JSON). Lupa mengirim header `Accept: application/json` saat menguji API di Postman adalah alasan tersering orang mengira validasinya \"tidak jalan\". Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Method `store()` menerima objek `$request` dari formulir pendaftaran. Periksa masukannya di sisi server dengan dua ketentuan: kolom `name` wajib diisi, dan kolom `age` wajib diisi **serta** harus berupa angka. Susun aturannya dalam bentuk yang kamu suka (teks berpemisah `|` maupun array sama-sama diterima).",
          starterCode: "<?php\n// Periksa masukan formulir di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$request\\s*->\\s*validate\\s*\\(\\s*\\[",
              message:
                "Pemeriksaan dipanggil sebagai method pada objek request, dan argumennya berupa array pemetaan `nama kolom => aturan`. Tidak perlu membungkusnya dengan `if` — kalau gagal, Laravel sendiri yang menghentikan alurnya dan mengembalikan pengguna ke formulir.",
            },
            {
              pattern: "['\"]name['\"]\\s*=>\\s*(['\"][^'\"]*required|\\[[^\\]]*required)",
              message:
                "Kolom `name` butuh aturan \"wajib diisi\" — satu kata dalam bahasa Inggris yang juga kamu kenal dari atribut HTML.",
            },
            {
              pattern:
                "['\"]age['\"]\\s*=>\\s*(['\"][^'\"]*required[^'\"]*numeric|['\"][^'\"]*numeric[^'\"]*required|\\[[^\\]]*numeric[^\\]]*\\])",
              message:
                "Kolom `age` butuh DUA aturan sekaligus: wajib diisi dan harus angka. Beberapa aturan digabung dengan tanda `|` di dalam satu teks, atau ditulis sebagai elemen array terpisah. Urutannya bebas.",
            },
          ],
          solution:
            "<?php\n$validated = $request->validate([\n    'name' => 'required',\n    'age' => 'required|numeric',\n]);",
          susunKode: {
            question:
              "Rangkai validasi masukan request wajib (required) untuk name dan numeric untuk age.",
            potongan: [
              "<?php",
              "$request->validate([",
              "    'name' => 'required',",
              "    'age' => 'required|numeric',",
              "]);",
            ],
            pengecoh: [
              "$request->check([",
              "    'age' => 'required|integer',",
            ],
            pemisah: "\n",
            explanation:
              "Metode $request->validate() menerima array aturan di mana beberapa aturan dipisahkan dengan garis tegak (pipe |). Keping $request->check() keliru nama metode. Keping 'required|integer' menggoda tetapi menyalahi spesifikasi aturan numeric.",
          },
        },
        {
  kind: "step",
  id: "laravel-5-3",
  title: "Menggunakan Form Request di Controller",
  explanation: "Alih-alih menyuntikkan `Request` standar dan memanggil `$request->validate([...])` di dalam Controller, menyuntikkan kelas `StoreUserRequest` ke parameter method Controller mendelegasikan seluruh verifikasi masukan ke lapisan khusus. Di dalam method, memanggil `$request->validated()` mengembalikan array yang **hanya** berisi data yang telah lolos validasi — secara otomatis menepis field tak dikenal atau berbahaya yang coba diselundupkan penyerang. Kenapa pola ini menjadi standar perusahaan: Controller tetap tipis (*Thin Controller*), aturan validasi dapat diuji terpisah (*isolated unit testing*), dan keamanan Mass Assignment terlindungi ganda. Kapan dipakai: pada seluruh aksi mutasi penyimpanan dan pembaruan data formulir. Jebakan umum: memanggil `$request->all()` alih-alih `$request->validated()` saat `User::create()` — data kotor yang tidak didefinisikan aturannya tetap ikut tersimpan.",
  example: {
    code: "public function store(StoreArticleRequest $request) {\n    $data = $request->validated();\n    Article::create($data);\n    return redirect()->route('articles.index');\n}",
    output: "# Alur eksekusi saat form disubmit:\n1. StoreArticleRequest memvalidasi input\n2. Jika valid, Controller menerima $request\n3. $data hanya memuat field yang lolos aturan",
    note: "validated() bertindak sebagai filter pembersih sebelum data disentuh oleh Eloquent."
  },
  instruction: "Di dalam `UserController`, buat method `store` yang menerima injeksi `StoreUserRequest $request`, lalu ambil data yang sudah tervalidasi menggunakan `$request->validated()` dan simpan ke variabel `$data`.",
  starterCode: "<?php\nnamespace App\\Http\\Controllers;\nuse App\\Http\\Requests\\StoreUserRequest;\n\nclass UserController extends Controller {\n    // Lengkapi method store dengan Form Request dan validated() di sini\n}",
  language: "text",
  tests: [
    {
      pattern: "public\\s+function\\s+store\\s*\\(\\s*StoreUserRequest\\s+\\$request\\s*\\)",
      message: "Injeksi StoreUserRequest $request ke dalam parameter method publik store."
    },
    {
      pattern: "\\$data\\s*=\\s*\\$request->validated\\s*\\(\\s*\\);",
      message: "Tampung data terverifikasi ke variabel $data menggunakan $request->validated()."
    }
  ],
  solution: "<?php\nnamespace App\\Http\\Controllers;\nuse App\\Http\\Requests\\StoreUserRequest;\n\nclass UserController extends Controller {\n    public function store(StoreUserRequest $request) {\n        $data = $request->validated();\n    }\n}",
  susunKode: {
    question: "Susun injeksi Form Request pada method store Controller dan pengambilan data tervalidasi.",
    potongan: [
      "class UserController extends Controller {",
      "    public function store(StoreUserRequest $request) {",
      "        $data = $request->validated();",
      "    }",
      "}"
    ],
    pengecoh: [
      "    public function store(Request $request) {",
      "        $data = $request->all();"
    ],
    pemisah: "\n",
    explanation: "Injeksi StoreUserRequest memicu validasi otomatis sebelum kode controller dijalankan, dan method validated() memfilter input bersih. Keping Request biasa keliru karena tidak memicu aturan StoreUserRequest. Keping $request->all() menggoda tetapi mengambil seluruh masukan kotor tanpa filter validasi."
  }
},
        {
          kind: "step",
          id: "laravel-5-4",
          title: "File Upload & Storage Facade",
          explanation:
            "`$request->file('nama')` mengambil berkas yang diunggah, dan `->store('folder', 'disk')` menyimpannya lalu mengembalikan jalur relatifnya (`docs/8xKq2....pdf`) — jalur itulah yang kamu simpan ke database, **bukan** isi berkasnya. Nama berkasnya sengaja diacak: mempertahankan nama asli dari pengguna membuka dua masalah sekaligus, yaitu dua orang mengunggah `foto.jpg` dan saling menimpa, serta nama berbahaya seperti `../../.env` yang mencoba keluar dari foldernya. Argumen kedua adalah *disk*, yaitu tujuan penyimpanan yang didefinisikan di `config/filesystems.php` — `local` (privat), `public` (bisa diakses browser), atau `s3` (cloud). Karena tujuannya cuma nama, memindahkan seluruh unggahan ke S3 nanti cukup mengganti satu baris di `.env`. Tiga jebakan yang selalu muncul di unggahan pertama seseorang: tag `<form>` wajib punya `enctype=\"multipart/form-data\"` — tanpanya berkas tidak pernah sampai ke server dan `$request->file()` bernilai `null`; berkas di disk `public` baru bisa dibuka lewat URL setelah `php artisan storage:link` dijalankan; dan batas ukuran unggahan sebenarnya ditentukan `upload_max_filesize` serta `post_max_size` di `php.ini`, sehingga berkas 20 MB bisa gagal diam-diam meski aturan validasimu mengizinkannya.",
          example: {
            code:
              "// app/Http/Controllers/ProfileController.php\n" +
              "if ($request->hasFile('photo')) {\n" +
              "    $path = $request->file('photo')->store('photos', 'public');\n" +
              "    $user->update(['photo_path' => $path]);\n" +
              "}",
            output:
              "# nilai $path setelah unggahan berhasil:\n" +
              "photos/9bQ1xKp7mZa4LtR2.jpg\n\n" +
              "# lokasi fisiknya di server:\n" +
              "storage/app/public/photos/9bQ1xKp7mZa4LtR2.jpg\n\n" +
              "# URL yang bisa dibuka browser (setelah `php artisan storage:link`):\n" +
              "http://127.0.0.1:8000/storage/photos/9bQ1xKp7mZa4LtR2.jpg\n\n" +
              "# tanpa storage:link, URL yang sama menjawab:\n" +
              "404 | NOT FOUND",
            note: "Perhatikan tiga bentuk yang berbeda untuk satu berkas: jalur di database, jalur fisik, dan URL publik. Menyimpan URL lengkap ke database adalah kesalahan umum — begitu domainmu berubah, semua tautan mati. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Formulir pengajuan mengunggah berkas lewat input bernama `document`. Simpan berkas itu ke folder `docs` pada disk `public`, lalu tampung jalur hasil penyimpanannya ke sebuah variabel supaya bisa dicatat ke database. Nama variabelnya bebas.",
          starterCode: "<?php\n// Simpan berkas unggahan dan tampung jalurnya\n",
          language: "text",
          tests: [
            {
              pattern: "\\$\\w+\\s*=\\s*\\$request\\s*->\\s*file\\s*\\(\\s*['\"]document['\"]\\s*\\)",
              message:
                "Berkas unggahan diambil dari request dengan method `file()` berisi nama input-nya — bukan `input()`, karena yang dikembalikan bukan teks melainkan objek berkas. Tampung hasil akhirnya ke sebuah variabel; jalur inilah yang nanti masuk ke kolom database.",
            },
            {
              pattern: "->store\\s*\\(\\s*['\"]docs['\"]\\s*,\\s*['\"]public['\"]\\s*\\)",
              message:
                "Penyimpanannya dirantai dengan method `store()`: argumen pertama nama folder tujuan, argumen kedua nama disk seperti yang terdaftar di `config/filesystems.php`. Melewatkan argumen kedua membuat berkas mendarat di disk `local` yang tidak bisa diakses browser sama sekali.",
            },
          ],
          solution: "<?php\n$path = $request->file('document')->store('docs', 'public');",
          susunKode: {
            question:
              "Rangkai kode pengunggahan berkas 'document' dari request dan menyimpannya ke disk 'public' folder 'docs'.",
            potongan: [
              "<?php",
              "$path = $request->file('document')",
              "->store('docs', 'public');",
            ],
            pengecoh: [
              "$path = $request->input('document')",
              "->save('docs', 'public');",
            ],
            pemisah: "\n",
            explanation:
              "Berkas unggahan diambil dengan file() yang mengembalikan objek UploadedFile, lalu store() menyimpannya dan mengembalikan jalur relatifnya. Keping input() keliru karena input() membaca data teks; untuk berkas ia mengembalikan nilai yang tidak punya method penyimpanan sehingga programnya mati. Keping ->save() menggoda karena namanya paling terdengar seperti 'simpan', padahal method penyimpanan pada UploadedFile bernama store() atau storeAs().",
          },
        },
        {
          kind: "step",
          id: "laravel-5-5",
          title: "Error Handling & Custom Error View",
          explanation:
            "Laravel memilih halaman error berdasarkan **nama berkas**: begitu ada `resources/views/errors/403.blade.php`, setiap respons berstatus 403 akan memakainya, tanpa satu baris pun kamu daftarkan. Aturan penamaannya persis kode HTTP-nya — `404.blade.php`, `500.blade.php`, `419.blade.php`. Kenapa ini layak dikerjakan: halaman error bawaan Laravel tidak bergaya seperti situsmu dan tidak memberi jalan keluar, sementara halaman kustom bisa memuat menu, kotak pencarian, dan tautan kembali — pada 404 itu perbedaan antara pengunjung yang pergi dan pengunjung yang tetap tinggal. Kapan halaman ini muncul: `abort(403)`, kegagalan otorisasi Gate/Policy, atau `ModelNotFoundException` yang otomatis menjadi 404. Jebakan yang perlu kamu tahu: di mode `APP_DEBUG=true` kamu tidak akan pernah melihat halaman 500 kustom — yang tampil adalah layar debug Ignition yang menampilkan jejak kesalahan; halaman kustommu baru muncul setelah `APP_DEBUG=false`, dan **itulah** yang wajib dipasang di produksi karena layar debug membocorkan isi `.env` ke siapa pun yang memicu error.",
          example: {
            code:
              "{{-- resources/views/errors/404.blade.php --}}\n" +
              "@extends('layouts.app')\n\n" +
              "@section('content')\n" +
              "    <h1>404 Not Found</h1>\n" +
              "    <p>Halaman yang kamu cari sudah pindah atau tidak pernah ada.</p>\n" +
              "    <a href=\"{{ route('home') }}\">Kembali ke beranda</a>\n" +
              "@endsection",
            output:
              "$ curl -i http://127.0.0.1:8000/halaman-yang-tidak-ada\n" +
              "HTTP/1.1 404 Not Found\n" +
              "Content-Type: text/html; charset=UTF-8\n\n" +
              "<h1>404 Not Found</h1>\n" +
              "<p>Halaman yang kamu cari sudah pindah atau tidak pernah ada.</p>\n" +
              "<a href=\"http://127.0.0.1:8000/\">Kembali ke beranda</a>",
            note: "Perhatikan baris pertama: status HTTP-nya tetap 404. Halaman kustom hanya mengganti tampilannya, bukan status responsnya — kalau statusnya berubah jadi 200, mesin pencari akan mengira halaman itu ada. Catatan jujur: panel latihan tidak merender Blade, jadi hasil ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Kamu sedang menulis isi berkas `resources/views/errors/403.blade.php`. Tampilkan sebuah judul utama halaman (heading tingkat satu) yang memuat kode status HTTP-nya dan keterangan singkat bahwa aksesnya ditolak. Kata-katanya bebas, bahasa Indonesia maupun Inggris sama-sama diterima — yang wajib muncul adalah angka kode statusnya.",
          starterCode: "{{-- Isi halaman error 403 di sini --}}\n",
          language: "text",
          tests: [
            {
              pattern: "<h1[^>]*>[\\s\\S]*</h1>",
              message:
                "Halaman error tetap Blade biasa. Beri judul utamanya dengan elemen heading tingkat satu, lengkap dengan tag penutup `</h1>`.",
            },
            {
              pattern: "<h1[^>]*>[^<]*\\b403\\b",
              message:
                "Cantumkan angka kode statusnya di dalam judul supaya pengunjung — dan kamu sendiri saat membaca laporan bug — langsung tahu jenis penolakannya. Nama berkasnya juga harus persis angka itu (`errors/403.blade.php`); salah nama berarti halaman bawaan Laravel yang tetap muncul.",
            },
          ],
          solution: "<h1>403 Akses Ditolak</h1>\n<p>Kamu tidak punya izin untuk membuka halaman ini.</p>",
          susunKode: {
            question:
              "Susun tampilan pesan error kustom untuk HTTP status code 403 Akses Ditolak.",
            potongan: [
              "<h1>403 Akses Ditolak</h1>",
              "<p>Kamu tidak punya izin untuk membuka halaman ini.</p>",
            ],
            pengecoh: [
              "<h1>404 Halaman Tidak Ditemukan</h1>",
              "<h2>403 Akses Ditolak</h2>",
            ],
            pemisah: "\n",
            explanation:
              "Tampilan error 403 menampilkan heading h1 yang memuat status code 403 Akses Ditolak. Keping 404 keliru status code karena 404 adalah Not Found. Keping h2 menggoda tetapi menyalahi spesifikasi tag elemen h1.",
          },
        },
        {
          kind: "step",
          id: "laravel-5-6",
          title: "Mass Assignment: $fillable vs $guarded",
          explanation:
            "*Mass assignment* adalah mengisi banyak kolom sekaligus dari satu array — `User::create($request->all())`. Praktis, sekaligus berbahaya: array itu berisi apa pun yang dikirim peramban, jadi penyerang cukup menambahkan satu field `is_admin=1` ke formulir pendaftaran dan ia mendaftar sebagai administrator. Karena itu Eloquent menutup pintunya secara bawaan dan meminta kamu menyatakan kolom mana yang boleh diisi lewat `protected $fillable = [...]` (daftar putih) atau kolom mana yang dilarang lewat `protected $guarded = [...]` (daftar hitam). Mana yang dipilih? Pakai `$fillable` sebagai kebiasaan: menyebutkan yang diizinkan berarti kolom sensitif yang **kamu tambahkan bulan depan** otomatis ikut terlindungi, sedangkan `$guarded` menuntut kamu mengingat memperbaruinya — dan `protected $guarded = [];` yang kadang beredar di tutorial sebenarnya berarti \"buka semua kolom\". Yang perlu diingat: pembatasan ini hanya berlaku untuk pengisian massal; menyetel satu per satu (`$user->is_admin = true; $user->save();`) tetap diizinkan, karena di situ kamu sendiri yang memutuskan. Gejala saat kamu lupa mengisinya adalah `MassAssignmentException: Add [price] to fillable property`, yang untungnya menyebutkan kolom mana yang kurang.",
          example: {
            code:
              "// app/Models/Product.php\n" +
              "class Product extends Model {\n" +
              "    protected $fillable = ['name', 'price'];   // 'is_featured' sengaja TIDAK ada\n" +
              "}\n\n" +
              "// Controller yang meneruskan seluruh isi formulir:\n" +
              "$product = Product::create($request->all());",
            output:
              "# formulir jujur: name=Kopi&price=25000\n" +
              "insert into `products` (`name`, `price`, ...) values ('Kopi', 25000, ...)\n\n" +
              "# formulir yang disisipi field tambahan: name=Kopi&price=25000&is_featured=1\n" +
              "insert into `products` (`name`, `price`, ...) values ('Kopi', 25000, ...)\n" +
              "→ kolom is_featured DIABAIKAN, tetap bernilai 0\n\n" +
              "# jika $fillable dihapus seluruhnya dari Model:\n" +
              "Illuminate\\Database\\Eloquent\\MassAssignmentException:\n" +
              "  Add [name] to fillable property to allow mass assignment on [App\\Models\\Product].",
            note: "Blok kedua adalah nilai jual fitur ini: field selundupan tidak menghasilkan error, ia hanya diabaikan diam-diam — sehingga penyerang tidak mendapat petunjuk apa pun. Catatan jujur: panel latihan tidak menjalankan Laravel maupun database, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Model `Article` di editor menerima data dari formulir editor artikel, tetapi `Article::create()` selalu gagal dengan `MassAssignmentException`. Buka izin pengisian massal **hanya** untuk kolom `title` dan `content` dengan mendeklarasikan properti daftar-putihnya di dalam kelas.",
          starterCode: "<?php\nclass Article extends Model {\n    // Perbaiki penyebab MassAssignmentException di sini\n}",
          language: "text",
          tests: [
            {
              pattern: "protected\\s+\\$fillable\\s*=",
              message:
                "Yang diminta adalah daftar PUTIH (kolom yang diizinkan), bukan daftar hitam `$guarded`. Nama propertinya satu kata bahasa Inggris yang berarti \"boleh diisi\", dan visibilitasnya `protected` sesuai konvensi Eloquent.",
            },
            {
              pattern:
                "\\$fillable\\s*=\\s*\\[[^\\]]*['\"]title['\"][^\\]]*['\"]content['\"][^\\]]*\\]|\\$fillable\\s*=\\s*\\[[^\\]]*['\"]content['\"][^\\]]*['\"]title['\"][^\\]]*\\]",
              message:
                "Isinya array berisi nama-nama kolom sebagai teks. Urutannya bebas, tetapi hanya dua kolom itu yang boleh masuk — menambahkan kolom lain berarti membuka pintu yang sedang kita tutup.",
            },
          ],
          solution: "<?php\nclass Article extends Model {\n    protected $fillable = ['title', 'content'];\n}",
          susunKode: {
            question:
              "Susun properti terproteksi $fillable pada model Article untuk mengizinkan mass assignment pada kolom title dan content.",
            potongan: [
              "<?php",
              "class Article extends Model {",
              "    protected $fillable = [",
              "'title', 'content'",
              "];",
              "}",
            ],
            pengecoh: [
              "    public $fillable = [",
              "'title', 'is_admin'",
            ],
            pemisah: "\n",
            explanation:
              "Daftar putih kolom yang boleh diisi massal dideklarasikan sebagai properti protected bernama $fillable berisi array nama kolom. Keping public menggoda karena kodenya tetap berjalan, tetapi konvensi Eloquent memakai protected dan properti publik membuka isi daftar itu untuk diubah dari luar model. Keping 'title', 'is_admin' keliru dan justru berbahaya: memasukkan kolom sensitif ke daftar putih membuka kembali pintu yang sedang kita tutup, sehingga siapa pun bisa menyisipkan is_admin=1 lewat formulir.",
          },
        },
        {
  kind: "step",
  id: "laravel-5-7",
  title: "Menyusun Aturan Validasi pada Kelas Form Request",
  explanation: "Kelas `FormRequest` memisahkan logika otorisasi dan validasi formulir dari Controller agar kode Controller tetap ramping (*Thin Controller*). Method `rules(): array` mengembalikan daftar bidang masukan beserta aturan pemeriksaannya. Ketika diinjeksi ke metode Controller (`public function store(StoreUserRequest $request)`), Laravel secara otomatis mengeksekusi validasi sebelum badan Controller disentuh. Kenapa ini standar industri: Controller menjadi bersih, logika validasi dapat diuji secara terisolasi, dan aturan validasi yang sama dapat digunakan ulang di beberapa endpoint. Kapan dipakai: pada seluruh formulir kompleks atau endpoint API produksi. Jebakan pemula yang sangat umum: method `authorize()` di Form Request secara default mengembalikan `false` saat digenerate oleh Artisan — jika tidak diubah menjadi `true`, form akan selalu ditolak dengan respon HTTP 403 Forbidden.",
  example: {
    code: "public function rules(): array {\n    return [\n        'sku' => 'required|string|unique:products,sku',\n        'price' => 'required|numeric|min:1000',\n    ];\n}",
    output: "# Respon otomatis saat input tidak valid:\nHTTP/1.1 422 Unprocessable Content\n{\n  \"message\": \"The sku has already been taken.\",\n  \"errors\": { \"sku\": [\"The sku has already been taken.\"] }\n}",
    note: "Laravel otomatis merespon dengan status 422 JSON jika permintaan datang dari klien API."
  },
  instruction: "Di dalam kelas `StoreUserRequest`, lengkapi method `rules()` agar mengembalikan array aturan validasi: field `name` wajib diisi bertipe string dengan batas maksimal `255` karakter, dan field `email` wajib diisi serta harus berformat email yang valid.",
  starterCode: "<?php\nnamespace App\\Http\\Requests;\nuse Illuminate\\Foundation\\Http\\FormRequest;\n\nclass StoreUserRequest extends FormRequest {\n    public function rules(): array {\n        // Kembalikan aturan validasi di sini\n    }\n}",
  language: "text",
  tests: [
    {
      pattern: "return\\s*\\[",
      message: "Kembalikan array asosiatif berisi aturan validasi dari method rules()."
    },
    {
      pattern: "['\"]name['\"]\\s*=>\\s*['\"]required\\|string\\|max:255['\"]",
      message: "Tentukan aturan untuk field 'name': required|string|max:255."
    },
    {
      pattern: "['\"]email['\"]\\s*=>\\s*['\"]required\\|email['\"]",
      message: "Tentukan aturan untuk field 'email': required|email."
    }
  ],
  solution: "<?php\nnamespace App\\Http\\Requests;\nuse Illuminate\\Foundation\\Http\\FormRequest;\n\nclass StoreUserRequest extends FormRequest {\n    public function rules(): array {\n        return [\n            'name' => 'required|string|max:255',\n            'email' => 'required|email',\n        ];\n    }\n}",
  susunKode: {
    question: "Susun method rules() di dalam Form Request dengan aturan validasi name dan email.",
    potongan: [
      "    public function rules(): array {",
      "        return [",
      "            'name' => 'required|string|max:255',",
      "            'email' => 'required|email',",
      "        ];",
      "    }"
    ],
    pengecoh: [
      "            'name' => 'required|string|min:255',",
      "            'email' => 'required|string',"
    ],
    pemisah: "\n",
    explanation: "Method rules() di kelas Form Request wajib mengembalikan array berisi nama bidang dan aturan validasinya. Keping min:255 keliru karena membatasi panjang minimum alih-alih batas maksimum karakter. Keping required|string menggoda untuk email tetapi tidak memeriksa format alamat email yang valid."
  }
},
{
  kind: "step",
  id: "laravel-5-8",
  title: "Menampilkan Pesan Validasi @error & Helper old()",
  explanation: "Kombinasi helper `old('nama_field')` dan direktif `@error('nama_field')` adalah fondasi kenyamanan pengguna (*UX*) pada formulir web. Helper `old()` mengisi kembali elemen input dengan data yang sebelumnya diketik pengunjung agar mereka tidak perlu mengetik ulang saat form gagal diverifikasi. Sementara direktif `@error` memeriksa apakah ada pesan kegagalan untuk kolom tersebut dan menyediakan variabel `$message` yang siap dicetak di dalam tag tampilan. Kenapa wajib dipasang: formulir tanpa `old()` dan `@error` membuat pengguna frustrasi karena formulir kosong kembali dan pengguna tidak tahu letak kesalahannya. Kapan dipakai: pada setiap formulir input di file tampilan Blade. Jebakan umum: salah menulis nama field di `@error` sehingga pesan galat tidak pernah muncul padahal validasi di backend sebenarnya gagal.",
  example: {
    code: "<input type=\"email\" name=\"email\" value=\"{{ old('email') }}\">\n@error('email')\n    <span class=\"error-text\">{{ $message }}</span>\n@enderror",
    output: "<input type=\"email\" name=\"email\" value=\"bimo@tidakvalid\">\n<span class=\"error-text\">The email field must be a valid email address.</span>",
    note: "Nilai input lama dipertahankan dan pesan error spesifik ditampilkan tepat di bawah kolom."
  },
  instruction: "Buat satu elemen `<input>` teks untuk field `title` yang mempertahankan input sebelumnya dengan `value=\"{{ old('title') }}\"`, lalu tepat di bawahnya tampilkan pesan error menggunakan direktif `@error('title')` yang mencetak `$message` di dalam tag `<p>` berkelas `text-red-500`.",
  starterCode: "{{-- Tulis input title dan pesan error validasinya di sini --}}\n",
  language: "text",
  tests: [
    {
      pattern: "<input\\s+type=[\"']text[\"']\\s+name=[\"']title[\"']\\s+value=[\"']{{\\s*old\\(['\"]title['\"]\\)\\s*}}[\"']>",
      message: "Tuliskan tag input teks dengan atribut name='title' dan value yang memanggil old('title')."
    },
    {
      pattern: "@error\\(['\"]title['\"]\\)",
      message: "Buka blok pemeriksaan error menggunakan direktif @error('title')."
    },
    {
      pattern: "<p\\s+class=[\"']text-red-500[\"']>{{\\s*\\$message\\s*}}</p>",
      message: "Cetak variabel $message di dalam elemen p berkelas text-red-500."
    },
    {
      pattern: "@enderror",
      message: "Tutup blok penanganan error dengan direktif @enderror."
    }
  ],
  solution: "<input type=\"text\" name=\"title\" value=\"{{ old('title') }}\">\n@error('title')\n    <p class=\"text-red-500\">{{ $message }}</p>\n@enderror",
  susunKode: {
    question: "Susun formulir Blade dengan input ber-old value dan pesan galat validasi @error.",
    potongan: [
      "<input type=\"text\" name=\"title\" value=\"{{ old('title') }}\">",
      "@error('title')",
      "    <p class=\"text-red-500\">{{ $message }}</p>",
      "@enderror"
    ],
    pengecoh: [
      "<input type=\"text\" name=\"title\" value=\"{{ $title }}\">",
      "@error('name')"
    ],
    pemisah: "\n",
    explanation: "Helper old() mempertahankan masukan sebelumnya dan direktif @error menampilkan pesan galat validasi khusus field title. Keping value=\"{{ $title }}\" keliru karena melempar error variabel tak terdefinisi saat form pertama dibuka. Keping @error('name') menggoda tetapi menyaring pesan untuk field yang salah."
  }
},
        {
          kind: "quiz",
          id: "laravel-5-kuis",
          title: "Kuis: Form, Keamanan CSRF, & Validasi",
          questions: [
            {
              id: "l5-q1",
              type: "pilihan-ganda",
              question: "Apakah pesan status HTTP yang akan dikembalikan oleh Laravel jika form POST dikirim tanpa token CSRF yang valid?",
              choices: [
                "404 Not Found",
                "419 Page Expired",
                "500 Internal Server Error",
                "403 Forbidden"
              ],
              answerIndex: 1,
              explanation: "Laravel melempar error status HTTP 419 (Page Expired) jika token CSRF yang dikirimkan hilang, tidak cocok, atau sesi pengguna telah kedaluwarsa, guna melindungi pengguna dari serangan pemalsuan permintaan antar-situs (*Cross-Site Request Forgery*)."
            },
            {
              id: "l5-q2",
              type: "pilihan-ganda",
              question: "Fungsi helper Blade apakah yang digunakan untuk menampilkan kembali nilai masukan form sebelumnya setelah terjadi kegagalan validasi?",
              choices: [
                "previous('nama_field')",
                "restore('nama_field')",
                "old('nama_field')",
                "flash('nama_field')"
              ],
              answerIndex: 2,
              explanation: "Helper `old('email')` mengambil masukan lama dari data sesi kilat (*flashed session data*) yang otomatis disimpan Laravel saat validasi gagal, sehingga pengguna tidak perlu mengisi ulang formulir dari awal."
            },
            {
              id: "l5-q3",
              type: "pilihan-ganda",
              question: "Perintah Artisan terminal apakah yang wajib dijalankan agar file di `storage/app/public` dapat diakses langsung dari web browser?",
              choices: [
                "php artisan storage:link",
                "php artisan make:storage",
                "composer storage-publish",
                "php artisan file:open"
              ],
              answerIndex: 0,
              explanation: "`php artisan storage:link` membuat symbolic link (*symlink*) dari direktori publik `public/storage` mengarah ke folder internal `storage/app/public`, memungkinkan berkas unggahan diakses melalui URL web."
            },
            {
              id: "l5-q4",
              type: "pilihan-ganda",
              question: "Atribut HTML apakah yang wajib ditambahkan pada tag `<form>` saat formulir tersebut berisi elemen pengunggahan berkas file atau gambar?",
              choices: [
                "type=\"file-upload\"",
                "enctype=\"multipart/form-data\"",
                "method=\"FILE\"",
                "data-upload=\"binary\""
              ],
              answerIndex: 1,
              explanation: "Atribut `enctype=\"multipart/form-data\"` memberitahukan browser agar mengirim isi file dalam bentuk stream biner terpisah. Tanpa atribut ini, browser hanya mengirimkan teks nama filenya saja sehingga `$request->file('avatar')` bernilai null."
            },
            {
              id: "l5-q5",
              type: "pilihan-ganda",
              question: "Apakah fungsi utama dari kelas Form Request (`make:request`) di Laravel?",
              choices: [
                "Mengirim permintaan HTTP ke server eksternal seperti cURL",
                "Menyimpan data masukan form langsung ke tabel basis data tanpa controller",
                "Memisahkan aturan validasi dan otorisasi ke kelas mandiri agar Controller tetap ramping dan mudah diuji",
                "Mengompresi ukuran file gambar yang diunggah secara otomatis sebelum disimpan"
              ],
              answerIndex: 2,
              explanation: "Kelas Form Request mengisolasi aturan validasi (`rules()`) dan izin akses (`authorize()`) ke kelas mandiri, menjaga Controller tetap bersih, ramping, dan memenuhi prinsip *Single Responsibility*."
            }
          ]
        }
      ],
    },
    {
      slug: "auth-otorisasi",
      title: "Auth & Otorisasi",
      description:
        "Sistem Login Laravel Breeze, Middleware Guard, Gate, dan Policy.",
      topics: [
        "Laravel Breeze: scaffolding auth",
        "Session, remember me, logout semua device",
        "Middleware auth & redirect",
        "Gate & Policy: otorisasi per-model",
        "Role sederhana tanpa package",
        "Password reset & email verification",
      ],
      items: [
        {
          kind: "materi",
          id: "laravel-6-m1",
          title: "Autentikasi, Guard Session, serta Otorisasi Gate & Policy",
          body:
            "# Perbedaan Autentikasi dan Otorisasi\n\n" +
            "Dalam keamanan aplikasi web, dua istilah ini sering kali disalahpahami:\n\n" +
            "- **Autentikasi (Authentication - *Who are you?*):** Memverifikasi **identitas** pengguna (proses Login dengan Email & Password).\n" +
            "- **Otorisasi (Authorization - *What can you do?*):** Memeriksa apakah pengguna yang telah terautentikasi memiliki **hak akses** untuk melakukan suatu tindakan spesifik (misal: Apakah User A boleh menghapus Post B?).\n\n" +
            "## Starter Kit Autentikasi: Laravel Breeze\n\n" +
            "**Laravel Breeze** adalah *starter kit* resmi buatan tim Laravel yang menyediakan perancangan autentikasi lengkap (Login, Register, Password Reset, Email Verification, Profile Management) siap pakai berbasis Blade + Tailwind CSS atau Inertia (Vue/React).\n\n" +
            "## Perbandingan Gate vs Policy\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                        SISTEM OTORISASI LARAVEL                         |\n" +
            "|                                                                         |\n" +
            "|  +---------------------------------+  +------------------------------+  |\n" +
            "|  |             GATE                |  |           POLICY             |  |\n" +
            "|  |  Otorisasi aksi global bebas    |  | Otorisasi terikat 1 Model    |  |\n" +
            "|  |  (Contoh: Gate::define('admin'))|  | (Contoh: PostPolicy@update)  |  |\n" +
            "|  +---------------------------------+  +------------------------------+  |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "| Fitur Otorisasi | Lokasi Definisi Kode | Contoh Penggunaan Utama |\n" +
            "|---|---|---|\n" +
            "| **Middleware Auth** | `routes/web.php` | `Route::middleware(['auth'])->group(...)` memblokir akses pengunjung anonim. |\n" +
            "| **Gate** | `AppServiceProvider` | `Gate::define('access-dashboard', fn($user) => $user->is_admin);` |\n" +
            "| **Policy** | `app/Policies/PostPolicy.php` | `public function update(User $user, Post $post) { return $user->id === $post->user_id; }` |\n" +
            "| **Blade Directive** | Berkas `.blade.php` | `@can('update', $post) <button>Edit</button> @endcan` |\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan sebuah gedung perkantoran mewah. **Autentikasi (Breeze/Login)** adalah pemeriksaan kartu identitas (KTP/Passport) di pos satpam depan untuk mendapatkan kartu akses *visitor*. **Middleware Auth** adalah pintu kaca otomatis yang hanya akan terbuka jika kamu menempelkan kartu akses sah. **Gate** seperti hak akses umum yang tertulis di kartu (misal: Kartu Merah boleh masuk lift eksekutif). **Policy** adalah kunci fisik ruangan kantor spesifik: meskipun kamu boleh naik ke lantai 3, kamu hanya bisa membuka pintu ruangan kerja yang terdaftar atas nama manajermu sendiri.\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Bisa Melakukan Login tapi Lupa `Auth::logout()`:** Saat memproses logout, kamu tidak cukup hanya menghapus session. Kamu wajib memanggil `Auth::logout()`, `request()->session()->invalidate()`, dan `request()->session()->regenerateToken()` untuk mengamankan session.\n" +
            "2. **Gate vs Policy Confusion:** Membuat puluhan Gate terpisah di `AppServiceProvider` hingga file tersebut menjadi sangat gemuk. Gunakan **Policy** untuk semua otorisasi yang berhubungan dengan resource Eloquent Model.\n" +
            "3. **Lupa Memasang Middleware Auth di Route Terproteksi:** Menuliskan fitur profil user tetapi lupa membungkus routenya di `Route::middleware('auth')`. Akibatnya pengunjung anonim yang belum login memicu *Error Attempt to read property on null*.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di skala enterprise, keamanan otorisasi bertingkat (*Role-Based Access Control / RBAC*) dan penggunaan Policy adalah syarat wajib sertifikasi audit keamanan sistem backend.",
        },
        {
  kind: "step",
  id: "laravel-6-1",
  title: "Hashing Password Aman dengan Facade Hash",
  explanation: "Menyimpan kata sandi dalam bentuk teks polos (*plaintext*) adalah pelanggaran keamanan fatal yang membahayakan seluruh kredensial pengguna jika basis data bocor. Facade `Hash::make('teks')` di Laravel menggunakan algoritma hashing satu arah yang sangat kuat seperti Bcrypt atau Argon2id yang dilengkapi salt acak. Kenapa hashing satu arah wajib: nilai hash tidak dapat didekripsi kembali menjadi teks asli; sistem hanya memverifikasi kecocokannya saat login menggunakan `Hash::check($input, $hash)`. Kapan dipakai: saat proses registrasi akun baru, perubahan kata sandi, atau verifikasi ulang kredensial sensitif. Jebakan klasik pemula: menggunakan fungsi `md5()` atau `sha1()` kuno bawaan PHP — algoritma tersebut sudah lama dianggap tidak aman dan dapat dijebol dalam hitungan detik menggunakan tabel pelangi (*rainbow table*).",
  example: {
    code: "use Illuminate\\Support\\Facades\\Hash;\n\n$hash = Hash::make('secret');\necho Hash::check('secret', $hash) ? 'Cocok' : 'Salah';",
    output: "Cocok",
    note: "Nilai hash string Bcrypt selalu memiliki panjang 60 karakter dan diawali $2y$."
  },
  instruction: "Enkripsi kata sandi `'rahasia123'` menggunakan Facade `Hash::make()` dan simpan string hasil hashing tersebut ke variabel `$hashedPassword`.",
  starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Hash;\n\n// Hash kata sandi rahasia123 di sini\n",
  language: "text",
  tests: [
    {
      pattern: "\\$hashedPassword\\s*=\\s*Hash::make\\s*\\(\\s*['\"]rahasia123['\"]\\s*\\);",
      message: "Panggil Hash::make('rahasia123') dan simpan hasilnya ke variabel $hashedPassword."
    }
  ],
  solution: "<?php\nuse Illuminate\\Support\\Facades\\Hash;\n\n$hashedPassword = Hash::make('rahasia123');",
  susunKode: {
    question: "Susun pembentukan hash kata sandi yang aman menggunakan Facade Hash di Laravel.",
    potongan: [
      "$hashedPassword =",
      " Hash::make('rahasia123');"
    ],
    pengecoh: [
      "$plainPassword =",
      " md5('rahasia123');"
    ],
    pemisah: "",
    explanation: "Facade Hash::make mengimplementasikan algoritma Bcrypt atau Argon2 berstandar industri dengan pengacakan salt otomatis. Keping md5 keliru karena algoritma tersebut rentan dan tidak layak untuk menyimpan password. Keping $plainPassword menggoda tetapi tidak menyimpan ke nama variabel yang diminta."
  }
},
        {
          kind: "step",
          id: "laravel-6-2",
          title: "Proses Auth Manual (Auth Facade)",
          explanation:
            "`Auth::attempt(['email' => ..., 'password' => ...])` melakukan tiga hal sekaligus: mencari pengguna berdasarkan kolom selain `password`, membandingkan kata sandi yang dikirim dengan hash yang tersimpan memakai `Hash::check()`, dan — bila cocok — menaruh pengguna itu ke dalam session sehingga `Auth::user()` bernilai di permintaan berikutnya. Kembaliannya `true` atau `false`, jadi ia memang dirancang untuk dipakai di dalam `if`. Kenapa perbandingannya tidak boleh kamu tulis sendiri: kata sandi disimpan sebagai hash bcrypt yang berbeda setiap kali dibuat, jadi `where('password', $input)` **tidak akan pernah** cocok; dan `Hash::check()` memakai perbandingan waktu-tetap yang tidak bocor informasi lewat lamanya proses. Satu baris yang wajib menyertainya adalah `$request->session()->regenerate();` — tanpa itu, ID session sebelum dan sesudah login sama, dan penyerang yang sempat menanamkan ID session di peramban korban ikut terbawa masuk sebagai pengguna yang sudah login (*session fixation*). Jebakan berikutnya: pesan kesalahan login sebaiknya seragam (\"email atau kata sandi salah\"), karena membedakan \"email tidak terdaftar\" dan \"kata sandi salah\" memberi tahu penyerang alamat mana yang benar-benar ada di sistemmu.",
          example: {
            code:
              "use Illuminate\\Support\\Facades\\Auth;\n\n" +
              "$credentials = $request->validate([\n" +
              "    'email' => 'required|email',\n" +
              "    'password' => 'required',\n" +
              "]);\n\n" +
              "if (Auth::attempt($credentials)) {\n" +
              "    $request->session()->regenerate();\n" +
              "    return redirect()->intended('dashboard');\n" +
              "}\n\n" +
              "return back()->withErrors(['email' => 'Email atau kata sandi salah.']);",
            output:
              "# kredensial benar:\n" +
              "select * from `users` where `email` = 'bimo@example.com' limit 1\n" +
              "Auth::attempt()  ->  true\n" +
              "session id sebelum : Ax91Kq...   sesudah regenerate(): 7Zt3Mp...\n" +
              "HTTP/1.1 302 Found   Location: /dashboard\n\n" +
              "# kata sandi salah:\n" +
              "Auth::attempt()  ->  false\n" +
              "HTTP/1.1 302 Found   Location: /login\n" +
              "  session errors: {\"email\":[\"Email atau kata sandi salah.\"]}",
            note: "Perhatikan query-nya: kolom `password` TIDAK ikut di `where`. Ia sengaja dikeluarkan lalu dibandingkan terpisah dengan `Hash::check()`, karena hash bcrypt tidak pernah sama dua kali. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Variabel `$credentials` di editor sudah berisi email dan password hasil validasi. Periksa apakah pasangan itu cocok dengan data pengguna, dan bila cocok, lakukan pengamanan session yang mencegah session fixation di dalam blok kondisinya.",
          starterCode:
            "<?php\nuse Illuminate\\Support\\Facades\\Auth;\n\n$credentials = $request->validate([\n    'email' => 'required|email',\n    'password' => 'required',\n]);\n\n// Periksa kredensialnya di sini\n",
          language: "text",
          tests: [
            {
              pattern: "if\\s*\\(\\s*Auth::attempt\\s*\\(\\s*\\$credentials\\s*\\)\\s*\\)",
              message:
                "Pemeriksaan kredensial memakai facade `Auth` dengan method yang berarti \"mencoba\". Kembaliannya boolean, jadi taruh langsung sebagai syarat `if` — jangan membandingkan password secara manual dengan `where('password', ...)`, karena yang tersimpan di database adalah hash, bukan teks aslinya.",
            },
            {
              pattern: "session\\s*\\(\\s*\\)\\s*->\\s*regenerate\\s*\\(",
              message:
                "Di dalam blok berhasil, ID session harus diperbarui. Tanpa langkah ini, ID session sebelum dan sesudah login sama — dan penyerang yang sempat menanamkan ID itu di peramban korban ikut masuk sebagai pengguna yang sudah login.",
            },
          ],
          solution:
            "<?php\nuse Illuminate\\Support\\Facades\\Auth;\n\n$credentials = $request->validate([\n    'email' => 'required|email',\n    'password' => 'required',\n]);\n\nif (Auth::attempt($credentials)) {\n    $request->session()->regenerate();\n    return redirect()->intended('dashboard');\n}",
          susunKode: {
            question:
              "Susun proses autentikasi manual menggunakan Facade Auth::attempt dan regenerasi sesi.",
            potongan: [
              "<?php",
              "use Illuminate\\Support\\Facades\\Auth;",
              "if (Auth::attempt($credentials)) {",
              "    $request->session()->regenerate();",
              "    return redirect()->intended('dashboard');",
              "}",
            ],
            pengecoh: [
              "if (Auth::login($credentials)) {",
              "    $request->session()->reset();",
            ],
            pemisah: "\n",
            explanation:
              "Fungsi Auth::attempt($credentials) memverifikasi kredensial pengguna dan $request->session()->regenerate() mencegah serangan Session Fixation. Keping Auth::login keliru karena login() menerima instansiasi Model User, bukan array kredensial. Keping session()->reset() keliru nama metode.",
          },
        },
        {
          kind: "step",
          id: "laravel-6-3",
          title: "Proteksi Route dengan Middleware auth",
          explanation:
            "Middleware adalah lapisan yang dilewati setiap permintaan **sebelum** sampai ke Controller — tempat memeriksa syarat masuk, seperti satpam di pintu. Middleware `auth` memeriksa apakah ada pengguna yang login; kalau tidak, permintaannya dihentikan di situ dan pengunjung dialihkan ke `/login` (atau dijawab `401` bila permintaannya bertipe JSON). Karena hampir semua halaman privat butuh syarat yang sama, `Route::middleware(['auth'])->group(function () { ... })` memasangnya sekali untuk banyak route sekaligus. Kenapa ini bukan sekadar kerapian: syarat yang ditulis berulang adalah syarat yang suatu hari terlupa di satu route, dan satu route terlupa sudah cukup untuk membocorkan seluruh data. Kapan pakai apa: `auth` untuk \"harus login\", `guest` untuk halaman yang justru **tidak** boleh dibuka orang yang sudah login (login/register), `verified` untuk yang emailnya harus terverifikasi lebih dulu. Jebakan yang khas: mengandalkan penyembunyian tombol di Blade sebagai pengaman — menyembunyikan tautan tidak menghalangi siapa pun mengetik URL-nya langsung, jadi penjagaan yang sesungguhnya harus ada di route atau Controller.",
          example: {
            code:
              "// routes/web.php\n" +
              "Route::middleware(['auth'])->group(function () {\n" +
              "    Route::get('/dashboard', [DashboardController::class, 'index']);\n" +
              "    Route::get('/settings', [SettingController::class, 'edit']);\n" +
              "});",
            output:
              "# pengunjung yang BELUM login:\n" +
              "$ curl -i http://127.0.0.1:8000/dashboard\n" +
              "HTTP/1.1 302 Found\n" +
              "Location: http://127.0.0.1:8000/login\n\n" +
              "# pengunjung yang SUDAH login (membawa cookie session):\n" +
              "HTTP/1.1 200 OK\n\n" +
              "$ php artisan route:list --path=dashboard\n" +
              "  GET|HEAD   dashboard ... DashboardController@index ... auth, web",
            note: "Kolom paling kanan `route:list` menampilkan middleware yang benar-benar menempel pada route itu — cara tercepat membuktikan penjagaannya terpasang, tanpa menebak dari membaca berkas. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Halaman `/profile` saat ini bisa dibuka siapa saja, termasuk pengunjung yang belum login. Daftarkan route GET itu di dalam sebuah kelompok route yang memasang penjaga autentikasi, sehingga pengunjung anonim otomatis dialihkan ke halaman login.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\n// Daftarkan route /profile yang terlindungi di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::middleware\\s*\\(\\s*(\\[\\s*)?['\"]auth['\"]",
              message:
                "Penjaganya dipasang lewat `Route::middleware(...)`, dan nama middleware bawaan Laravel untuk \"harus sudah login\" adalah satu kata pendek berhuruf kecil. Argumennya boleh berupa teks tunggal maupun array bila nanti kamu memasang beberapa penjaga sekaligus.",
            },
            {
              pattern: "->group\\s*\\(\\s*(function\\s*\\(\\s*\\)|fn\\s*\\(\\s*\\))",
              message:
                "Route yang dilindungi diletakkan di dalam `->group(function () { ... })`. Fungsi inilah yang menampung daftar route-nya — perhatikan kurung dan titik koma penutupnya di akhir, karena `});` yang kurang satu karakter menghasilkan error parse yang menunjuk baris terakhir berkas.",
            },
            {
              pattern: "Route::get\\s*\\(\\s*['\"]/?profile['\"]",
              message:
                "Route `/profile` harus berada DI DALAM badan grup itu. Menuliskannya di luar kurung kurawal grup membuatnya tetap terbuka untuk umum, dan tidak ada peringatan apa pun yang memberitahumu.",
            },
          ],
          solution:
            "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::middleware(['auth'])->group(function () {\n    Route::get('/profile', [ProfileController::class, 'show']);\n});",
          susunKode: {
            question:
              "Susun proteksi grup rute menggunakan middleware 'auth' untuk rute GET /profile.",
            potongan: [
              "<?php",
              "use Illuminate\\Support\\Facades\\Route;",
              "Route::middleware(['auth'])->group(function () {",
              "    Route::get('/profile', [ProfileController::class, 'show']);",
              "});",
            ],
            pengecoh: [
              "Route::guard(['auth'])->group(function () {",
              "    Route::route('/profile', [ProfileController::class, 'show']);",
            ],
            pemisah: "\n",
            explanation:
              "Middleware dibungkus dengan Route::middleware(['auth'])->group(...) untuk mengamankan seluruh rute di dalamnya. Keping Route::guard keliru karena guard adalah mekanisme penyimpan status auth, bukan metode pendaftaran rute. Keping Route::route keliru nama metode rute.",
          },
        },
        {
  kind: "step",
  id: "laravel-6-4",
  title: "Pengecekan Izin di Blade Menggunakan Direktif @can",
  explanation: "Direktif Blade `@can('kemampuan', $model)` mengevaluasi Policy model dan hanya merender blok HTML di dalamnya jika pengguna yang sedang aktif memiliki izin sah. Dengan menyembunyikan tombol aksi seperti tombol edit atau hapus dari pengguna yang tidak berhak, antarmuka aplikasi menjadi bersih dan mencegah pengunjung biasa mengalami layar 403 saat mengeklik tombol. Kenapa ini standar antarmuka aplikasi: memberikan pengalaman pengguna yang intuitif (*clean UX*) sekaligus menyelaraskan izin visual di sisi klien dengan aturan keamanan backend. Kapan dipakai: pada seluruh menu navigasi, tombol tindakan tabel, dan tautan administratif di template Blade. Jebakan umum: mengira bahwa menyembunyikan tombol dengan `@can` sudah cukup aman — penyerang tetap bisa mengirim permintaan HTTP langsung, sehingga proteksi Controller `$this->authorize()` di backend tetap mutlak wajib terpasang.",
  example: {
    code: "@can('delete', $post)\n    <button class=\"btn-danger\">Hapus Artikel</button>\n@endcan",
    output: "# Jika user adalah penulis artikel:\n<button class=\"btn-danger\">Hapus Artikel</button>\n# Jika user adalah pengunjung lain:\n(Elemen tombol tidak dirender ke HTML)",
    note: "Blade otomatis memeriksa autentikasi user saat ini terhadap metode delete pada PostPolicy."
  },
  instruction: "Gunakan direktif Blade `@can` untuk menampilkan elemen tombol `<button>Edit Produk</button>` hanya jika pengguna memiliki izin `'update'` terhadap objek `$product`.",
  starterCode: "{{-- Tampilkan tombol edit hanya jika diizinkan @can di sini --}}\n",
  language: "text",
  tests: [
    {
      pattern: "@can\\s*\\(\\s*['\"]update['\"]\\s*,\\s*\\$product\\s*\\)",
      message: "Buka pemeriksaan izin dengan direktif @can('update', $product)."
    },
    {
      pattern: "<button>Edit Produk</button>",
      message: "Tampilkan tombol <button>Edit Produk</button> di dalam blok otorisasi."
    },
    {
      pattern: "@endcan",
      message: "Tutup blok otorisasi Blade dengan direktif @endcan."
    }
  ],
  solution: "@can('update', $product)\n    <button>Edit Produk</button>\n@endcan",
  susunKode: {
    question: "Susun kondisional tampilan tombol edit produk berbasis evaluasi izin Policy @can.",
    potongan: [
      "@can('update', $product)",
      "    <button>Edit Produk</button>",
      "@endcan"
    ],
    pengecoh: [
      "@if(Auth::check())",
      "@endif"
    ],
    pemisah: "\n",
    explanation: "Direktif @can dipasangkan dengan @endcan untuk mengevaluasi hak akses spesifik terhadap instans model. Keping @if(Auth::check()) keliru karena hanya memeriksa status sudah login tanpa memastikan apakah user adalah pemilik produk yang berhak mengedit. Keping @endif adalah penutup percabangan if biasa."
  }
},
        {
          kind: "step",
          id: "laravel-6-5",
          title: "Role Sederhana dengan Gate",
          explanation:
            "Gate adalah izin bernama yang tidak terikat pada satu baris data: kamu mendaftarkannya sekali di `AppServiceProvider` dengan `Gate::define('nama-izin', fn (User $user) => ...)`, lalu memakainya di mana pun lewat `Gate::allows('nama-izin')`, `Gate::authorize('nama-izin')`, atau `@can('nama-izin')` di Blade. Kenapa dipusatkan, bukan ditulis `if ($user->role === 'admin')` di setiap tempat? Karena definisi \"admin\" berubah — nanti ada peran `super-admin`, atau perannya pindah ke tabel terpisah — dan pemeriksaan yang tersebar di lima puluh berkas harus dicari satu per satu. Dengan Gate, aturannya diubah di satu baris. Kapan pilih Gate dan kapan Policy: Gate untuk izin tanpa objek (\"boleh melihat laporan keuangan\"), Policy begitu izinnya bergantung pada baris tertentu (\"boleh menyunting **artikel ini**\"). Jebakan yang perlu kamu hindari: menumpuk puluhan Gate hingga `AppServiceProvider` menjadi berkas raksasa — itu tanda sebagian di antaranya seharusnya Policy. Dan ingat, fungsi Gate menerima objek pengguna yang sedang login secara otomatis; ia tidak pernah dipanggil untuk pengunjung anonim kecuali parameternya kamu tandai boleh `null`.",
          example: {
            code:
              "// app/Providers/AppServiceProvider.php — di dalam method boot()\n" +
              "use Illuminate\\Support\\Facades\\Gate;\n\n" +
              "Gate::define('admin-only', function (User $user) {\n" +
              "    return $user->role === 'admin';\n" +
              "});\n\n" +
              "// pemakaiannya di Controller:\n" +
              "if (Gate::allows('admin-only')) { /* ... */ }\n\n" +
              "// pemakaiannya di Blade:\n" +
              "@can('admin-only')\n" +
              "    <a href=\"/admin\">Panel Admin</a>\n" +
              "@endcan",
            output:
              "# pengguna dengan role = 'admin':\n" +
              "Gate::allows('admin-only')  ->  true\n" +
              "HTML yang dirender: <a href=\"/admin\">Panel Admin</a>\n\n" +
              "# pengguna dengan role = 'member':\n" +
              "Gate::allows('admin-only')  ->  false\n" +
              "HTML yang dirender: (kosong — tautannya tidak ada di sumber halaman)\n\n" +
              "# member yang tetap memaksa membuka /admin, sementara route-nya dijaga:\n" +
              "GET /admin  ->  HTTP/1.1 403 Forbidden",
            note: "Perhatikan bahwa tautannya bukan disembunyikan dengan CSS melainkan benar-benar tidak ikut dirender — tetapi tetap butuh penjagaan di route, karena URL bisa diketik langsung. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Tabel `users` punya kolom boolean `is_admin`. Daftarkan sebuah izin bernama `is-admin` yang bernilai benar hanya untuk pengguna yang kolom itu bernilai true, sehingga izinnya bisa dipakai dari Controller maupun Blade. Bentuk fungsinya bebas — fungsi anonim biasa maupun arrow function sama-sama diterima.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Gate;\n\n// Daftarkan izinnya di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Gate::define\\s*\\(\\s*['\"]is-admin['\"]\\s*,",
              message:
                "Pendaftaran izin memakai facade `Gate` dengan method `define`. Argumen pertamanya nama izin sebagai teks — nama inilah yang nanti kamu tulis di `@can('...')`, jadi ejaannya harus persis sama di kedua tempat.",
            },
            {
              pattern:
                "(function\\s*\\([^)]*\\$(\\w+)\\s*\\)\\s*\\{[\\s\\S]*?return\\s+\\$\\2\\s*->\\s*is_admin|fn\\s*\\([^)]*\\$(\\w+)\\s*\\)\\s*=>\\s*\\$\\3\\s*->\\s*is_admin)",
              message:
                "Argumen keduanya adalah fungsi yang menerima pengguna yang sedang login dan MENGEMBALIKAN nilai boolean. Kembalikan isi kolom `is_admin` dari objek itu — bukan mencetaknya, dan bukan membandingkannya dengan teks.",
            },
          ],
          solution:
            "<?php\nuse Illuminate\\Support\\Facades\\Gate;\n\nGate::define('is-admin', function (User $user) {\n    return $user->is_admin;\n});",
          susunKode: {
            potongan: [
              "<?php",
              "use Illuminate\\Support\\Facades\\Gate;",
              "Gate::define('is-admin', function (User $user) {",
              "    return $user->is_admin;",
              "});",
            ],
            pengecoh: [
              "Gate::create('is-admin', function (User $user) {",
              "    return $user->role == 'admin';",
            ],
            pemisah: "\n",
            explanation:
              "Gate didefinisikan dengan Gate::define('nama-gate', callback) dan mengembalikan nilai boolean. Keping Gate::create keliru nama metode. Keping $user->role == 'admin' menggoda tetapi menyalahi spesifikasi atribut boolean $user->is_admin.",
          },
        },
        {
          kind: "step",
          id: "laravel-6-6",
          title: "Verifikasi Email (MustVerifyEmail)",
          explanation:
            "Verifikasi email di Laravel dinyalakan dengan satu penanda: Model `User` cukup `implements MustVerifyEmail`. Interface itu tidak memaksamu menulis method apa pun — implementasinya sudah tersedia lewat trait `MustVerifyEmail` yang dipakai kelas `Authenticatable` — ia berfungsi sebagai **saklar** yang dibaca Laravel: begitu ada, email berisi tautan bertanda tangan otomatis dikirim setelah registrasi, dan kolom `email_verified_at` diisi saat tautannya diklik. Penanda itu baru berarti kalau route-nya dijaga: `Route::middleware(['auth', 'verified'])` — `auth` memastikan sudah login, `verified` memastikan emailnya sudah dikonfirmasi. Kenapa fiturnya layak dipakai: alamat email yang salah ketik berarti pengguna tidak akan pernah bisa mereset kata sandinya, dan pendaftaran massal oleh bot menjadi jauh lebih mahal. Jebakan yang menghabiskan waktu: di lingkungan lokal `MAIL_MAILER` biasanya masih `log`, sehingga emailnya tidak benar-benar terkirim — tautannya tetap ada, tetapi tersimpan di `storage/logs/laravel.log`, dan orang sering menyimpulkan fiturnya rusak padahal hanya salah tempat mencari.",
          example: {
            code:
              "// app/Models/User.php\n" +
              "use Illuminate\\Contracts\\Auth\\MustVerifyEmail;\n\n" +
              "class User extends Authenticatable implements MustVerifyEmail\n" +
              "{\n" +
              "    protected $fillable = ['name', 'email', 'password'];\n" +
              "}\n\n" +
              "// routes/web.php\n" +
              "Route::middleware(['auth', 'verified'])->group(function () {\n" +
              "    Route::get('/dashboard', [DashboardController::class, 'index']);\n" +
              "});",
            output:
              "# pengguna baru yang belum mengeklik tautan verifikasi:\n" +
              "GET /dashboard  ->  HTTP/1.1 302 Found   Location: /verify-email\n" +
              "users.email_verified_at  ->  NULL\n\n" +
              "# setelah tautan di email diklik:\n" +
              "GET /verify-email/3/9a1f...  ->  HTTP/1.1 302 Found   Location: /dashboard\n" +
              "users.email_verified_at  ->  2026-07-28 05:12:44\n\n" +
              "# di lokal dengan MAIL_MAILER=log, emailnya ada di storage/logs/laravel.log:\n" +
              "Subject: Verify Email Address\n" +
              "http://127.0.0.1:8000/verify-email/3/9a1f...?signature=e77c...",
            note: "Blok terakhir adalah yang paling sering dicari orang: di lokal, tautan verifikasi bukan tidak terkirim — ia tercatat di berkas log. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Model `User` di editor sudah mewarisi `Authenticatable`, tetapi email pendaftar tidak pernah diminta konfirmasi. Nyalakan fitur verifikasi email dengan menambahkan kontrak yang menjadi penandanya pada deklarasi kelas — tanpa menghapus pewarisan yang sudah ada.",
          starterCode:
            "<?php\nuse Illuminate\\Contracts\\Auth\\MustVerifyEmail;\n\n// Nyalakan verifikasi email pada kelas di bawah ini\nclass User extends Authenticatable {}",
          language: "text",
          tests: [
            {
              pattern: "class\\s+User\\s+extends\\s+Authenticatable\\b",
              message:
                "Pewarisan dari `Authenticatable` harus tetap ada — di situlah seluruh kemampuan login berada. Yang ditambahkan adalah kontrak baru, bukan pengganti.",
            },
            {
              pattern:
                "class\\s+User\\s+extends\\s+Authenticatable\\s+implements\\s+[\\w\\\\, ]*\\bMustVerifyEmail\\b",
              message:
                "Kontrak dipasang dengan kata kunci `implements` (bukan `extends` kedua, yang tidak diizinkan PHP), ditulis setelah nama kelas induk. Namanya `MustVerifyEmail`, dan pastikan kelasnya sudah diimpor lewat baris `use` di atas berkas.",
            },
          ],
          solution:
            "<?php\nuse Illuminate\\Contracts\\Auth\\MustVerifyEmail;\n\nclass User extends Authenticatable implements MustVerifyEmail {}",
          susunKode: {
            question:
              "Rangkai deklarasi kelas User yang mengimplementasikan antarmuka MustVerifyEmail.",
            potongan: [
              "<?php",
              "use Illuminate\\Contracts\\Auth\\MustVerifyEmail;",
              "class User extends Authenticatable",
              "implements MustVerifyEmail",
              "{}",
            ],
            pengecoh: [
              "extends MustVerifyEmail",
              "implements VerifyEmailContract",
            ],
            pemisah: "\n",
            explanation:
              "Verifikasi email dinyalakan dengan memasang kontrak MustVerifyEmail memakai kata kunci implements, tanpa membuang pewarisan Authenticatable yang membawa seluruh kemampuan login. Keping extends MustVerifyEmail keliru karena MustVerifyEmail adalah interface, dan PHP hanya mengizinkan satu kelas induk sehingga berkasnya langsung ditolak. Keping implements VerifyEmailContract menggoda karena banyak kontrak Laravel memang berakhiran Contract, padahal nama antarmuka ini tidak memakai akhiran itu.",
          },
        },
        {
  kind: "step",
  id: "laravel-6-7",
  title: "Menulis Aturan Izin Akses pada Method Policy",
  explanation: "Policy di Laravel mengorganisasikan logika otorisasi seputar model tertentu. Setiap method di dalam Policy (seperti `view`, `create`, `update`, `delete`) menerima instans `User` yang sedang login sebagai argumen pertama dan instans model yang hendak diakses sebagai argumen kedua. Aturan otorisasi mengembalikan nilai boolean: `true` jika diizinkan, dan `false` jika ditolak. Kenapa Policy sangat disukai tim pengembang: logika hak akses terpusat di satu tempat dan tidak berceceran di berbagai Controller maupun view. Kapan dipakai: saat aplikasi memiliki data milik pengguna (*multi-tenant* atau *user-owned resources*) yang tidak boleh diubah sembarangan oleh pengguna lain. Jebakan umum: pemula lupa bahwa Laravel otomatis menyuntikkan user yang sedang login — jika aksi boleh dilakukan oleh tamu yang belum login, tipe parameter User harus dideklarasikan opsional (`?User $user`).",
  example: {
    code: "public function delete(User $user, Article $article): bool {\n    return $user->id === $article->user_id;\n}",
    output: "# Saat user id 2 mencoba menghapus artikel milik user id 1:\nHTTP/1.1 403 Forbidden\nThis action is unauthorized.",
    note: "Policy otomatis menolak permintaan dan melempar AuthorizationException dengan status 403."
  },
  instruction: "Di dalam kelas `ProductPolicy`, lengkapi method `update` agar mengembalikan `true` hanya jika `id` milik `$user` sama persis dengan kolom `user_id` milik `$product`.",
  starterCode: "<?php\nnamespace App\\Policies;\nuse App\\Models\\Product;\nuse App\\Models\\User;\n\nclass ProductPolicy {\n    public function update(User $user, Product $product): bool {\n        // Kembalikan perbandingan kepemilikan di sini\n    }\n}",
  language: "text",
  tests: [
    {
      pattern: "public\\s+function\\s+update\\s*\\(\\s*User\\s+\\$user\\s*,\\s*Product\\s+\\$product\\s*\\)\\s*:\\s*bool",
      message: "Tuliskan deklarasi signature method update dengan return type bool."
    },
    {
      pattern: "return\\s+\\$user->id\\s*===\\s*\\$product->user_id;",
      message: "Bandingkan kesamaan kepemilikan: $user->id === $product->user_id dan kembalikan hasilnya."
    }
  ],
  solution: "<?php\nnamespace App\\Policies;\nuse App\\Models\\Product;\nuse App\\Models\\User;\n\nclass ProductPolicy {\n    public function update(User $user, Product $product): bool {\n        return $user->id === $product->user_id;\n    }\n}",
  susunKode: {
    question: "Susun method policy update yang memeriksa apakah pengguna adalah pemilik produk.",
    potongan: [
      "    public function update(User $user, Product $product): bool {",
      "        return $user->id === $product->user_id;",
      "    }"
    ],
    pengecoh: [
      "    public function update(User $user, Product $product): void {",
      "        return $user->id !== $product->user_id;"
    ],
    pemisah: "\n",
    explanation: "Method Policy mengembalikan nilai boolean untuk menentukan izin aksi pembaruan data berdasarkan id pemilik. Keping void keliru karena Policy wajib mengembalikan nilai boolean true atau false. Keping !== menggoda karena menggunakan operator ketat tetapi membalikkan logika sehingga orang lain yang diberi akses."
  }
},
{
  kind: "step",
  id: "laravel-6-8",
  title: "Memproteksi Aksi Controller dengan $this->authorize()",
  explanation: "Metode `$this->authorize('kemampuan', $model)` pada Controller adalah jembatan pemanggil Policy. Jika pemeriksaan Policy menghasilkan `true`, Controller melanjutkan eksekusi baris berikutnya secara normal; namun jika menghasilkan `false`, Laravel langsung melempar `AuthorizationException` yang diterjemahkan menjadi respon HTTP 403 Forbidden tanpa menjalankan kode bisnis di bawahnya. Kenapa metode ini wajib dipakai: ini adalah gerbang pertahanan lapis kedua setelah autentikasi untuk memastikan pengguna hanya memanipulasi data miliknya sendiri. Kapan dipakai: di awal metode `edit`, `update`, dan `destroy` pada Controller sebelum eksekusi mutasi data dimulai. Jebakan umum: lupa memanggil otorisasi di method `update` karena merasa method `edit` sudah diproteksi — penyerang bisa langsung menembak permintaan HTTP PUT tanpa membuka halaman form edit.",
  example: {
    code: "public function destroy(Post $post) {\n    $this->authorize('delete', $post);\n    $post->delete();\n    return redirect()->route('posts.index');\n}",
    output: "# Akses sah:\nArtikel berhasil dihapus dan diarahkan ke index.\n# Akses ilegal:\n403 | THIS ACTION IS UNAUTHORIZED.",
    note: "Otorisasi menghentikan eksekusi sebelum baris penghapusan data sempat dijalankan."
  },
  instruction: "Di dalam method `edit(Product $product)` pada Controller, panggil pemeriksaan otorisasi untuk kemampuan `'update'` terhadap objek `$product` tersebut sebelum merender tampilan edit.",
  starterCode: "<?php\npublic function edit(Product $product) {\n    // Periksa otorisasi update di sini\n    return view('products.edit', compact('product'));\n}",
  language: "text",
  tests: [
    {
      pattern: "public\\s+function\\s+edit\\s*\\(\\s*Product\\s+\\$product\\s*\\)",
      message: "Deklarasikan method edit yang menerima parameter model Product $product."
    },
    {
      pattern: "\\$this->authorize\\s*\\(\\s*['\"]update['\"]\\s*,\\s*\\$product\\s*\\);",
      message: "Panggil $this->authorize('update', $product) di baris pertama method Controller."
    }
  ],
  solution: "<?php\npublic function edit(Product $product) {\n    $this->authorize('update', $product);\n    return view('products.edit', compact('product'));\n}",
  susunKode: {
    question: "Susun pemanggilan otorisasi Policy di dalam method edit Controller.",
    potongan: [
      "public function edit(Product $product) {",
      "    $this->authorize('update', $product);",
      "    return view('products.edit', compact('product'));",
      "}"
    ],
    pengecoh: [
      "public function edit(Product $item) {",
      "    $this->authorize('view', $product);"
    ],
    pemisah: "\n",
    explanation: "Metode $this->authorize('update', $product) di Controller memicu evaluasi Policy dan langsung melempar 403 Forbidden bila otorisasi gagal. Keping Product $item keliru karena mengubah nama variabel parameter yang dipakai di baris bawah. Keping 'view' menggoda tetapi izin yang diuji pada halaman edit adalah hak pembaruan update."
  }
},
        {
          kind: "quiz",
          id: "laravel-6-kuis",
          title: "Kuis: Autentikasi, Middleware, & Otorisasi",
          questions: [
            {
              id: "l6-q1",
              type: "pilihan-ganda",
              question: "Apakah perbedaan mendasar antara Autentikasi dan Otorisasi dalam keamanan sistem aplikasi?",
              choices: [
                "Autentikasi memverifikasi identitas pengguna (siapa kamu), sedangkan Otorisasi memeriksa izin terhadap tindakan tertentu (apa yang boleh kamu lakukan)",
                "Autentikasi dijalankan di browser, sedangkan Otorisasi dijalankan di server database",
                "Autentikasi memeriksa tipe data masukan form, sedangkan Otorisasi mengenkripsi password",
                "Autentikasi khusus untuk API, sedangkan Otorisasi khusus untuk aplikasi web berbasis Blade"
              ],
              answerIndex: 0,
              explanation: "Autentikasi menjawab 'Siapa kamu?' (misal login dengan kredensial email & password). Otorisasi menjawab 'Apakah kamu berhak melakukan tindakan ini?' (misal: apakah user yang sedang login berhak menghapus artikel ID 42)."
            },
            {
              id: "l6-q2",
              type: "pilihan-ganda",
              question: "Paket starter kit resmi apakah dari Laravel yang menyediakan perancangan fitur Login, Register, dan Reset Password berbasis Blade atau Tailwind?",
              choices: [
                "Laravel Horizon",
                "Laravel Passport",
                "Laravel Cashier",
                "Laravel Breeze"
              ],
              answerIndex: 3,
              explanation: "Laravel Breeze adalah starter kit autentikasi resmi yang minimalis dan elegan, menyediakan scaffolding auth siap pakai berbasis Blade, Inertia React, atau Inertia Vue."
            },
            {
              id: "l6-q3",
              type: "pilihan-ganda",
              question: "Manakah komponen otorisasi Laravel yang paling tepat digunakan jika kamu ingin mengatur aturan izin hak akses yang terpusat pada satu Model tertentu?",
              choices: [
                "Gate",
                "Policy",
                "Middleware",
                "Form Request"
              ],
              answerIndex: 1,
              explanation: "Policy diorganisir mengelilingi model tertentu (seperti `PostPolicy` untuk model `Post`), menyediakan metode `view`, `create`, `update`, dan `delete` yang terstruktur rapi. Gate lebih cocok untuk aksi umum yang tidak terikat pada model tunggal."
            },
            {
              id: "l6-q4",
              type: "pilihan-ganda",
              question: "Direktif Blade apakah yang digunakan untuk menyembunyikan atau menampilkan elemen antarmuka berdasarkan evaluasi izin Policy atau Gate?",
              choices: [
                "@ifauth ... @endif",
                "@role('admin') ... @endrole",
                "@can('action', $model) ... @endcan",
                "@gate('action') ... @endgate"
              ],
              answerIndex: 2,
              explanation: "`@can('update', $post)` mengevaluasi policy secara deklaratif di template Blade dan hanya merender konten di dalamnya jika pengguna yang sedang aktif memiliki izin sah terhadap model tersebut."
            },
            {
              id: "l6-q5",
              type: "pilihan-ganda",
              question: "Middleware bawaan apakah yang otomatis mengalihkan pengunjung anonim yang belum login ke halaman login saat mencoba mengakses halaman privat?",
              choices: [
                "auth",
                "guest",
                "verified",
                "throttle"
              ],
              answerIndex: 0,
              explanation: "Middleware `auth` memeriksa apakah permintaan dikirimkan oleh pengguna yang sudah terotentikasi. Jika belum login, middleware otomatis mengalihkan pengguna ke route bernilai nama `login`."
            }
          ]
        }
      ],
    },
    {
      slug: "api",
      title: "REST API dengan Laravel",
      description:
        "Routing API, JSON Serialization, Laravel Sanctum, dan Throttling.",
      topics: [
        "Route API & perbedaannya dengan web",
        "API Resource: membentuk JSON response",
        "Sanctum: token auth untuk SPA & mobile",
        "Status code & struktur error yang konsisten",
        "Pagination, filter, sort di API",
        "Rate limiting & CORS",
        "Dokumentasi API sederhana",
      ],
      items: [
        {
          kind: "materi",
          id: "laravel-7-m1",
          title: "Membangun RESTful API Modern dengan Laravel Sanctum & Resource",
          body:
            "# Arsitektur RESTful API & Laravel Sanctum\n\n" +
            "Dalam era pengembang perangkat lunak modern, backend Laravel tidak hanya menyajikan halaman HTML melalui Blade, tetapi juga bertindak sebagai **Headless REST API Engine** untuk dikonsumsi oleh aplikasi mobile (iOS/Android) atau aplikasi SPA (*Single Page Application*) seperti React, Next.js, dan Vue.\n\n" +
            "## Perbedaan Route Web vs API\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                          REQUEST KE SERVER LARAVEL                      |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "                                    |\n" +
            "         +--------------------------+--------------------------+\n" +
            "         |                                                     |\n" +
            "         v                                                     v\n" +
            "+-------------------------------+     +----------------------------------+\n" +
            "|      routes/web.php           |     |         routes/api.php           |\n" +
            "|  - Prefix: /                  |     |  - Prefix: /api/                 |\n" +
            "|  - State: Stateful (Session)  |     |  - State: Stateless (Bearer Token|\n" +
            "|  - Security: CSRF Protection  |     |  - Security: Rate Limit (Throttle|\n" +
            "|  - Return: HTML View (Blade)  |     |  - Return: JSON Data Payload     |\n" +
            "+-------------------------------+     +----------------------------------+\n" +
            "```\n\n" +
            "## Rujukan Komponen Utama REST API Laravel\n\n" +
            "| Komponen API | Cara Pembuatan & Perintah | Deskripsi Fungsi |\n" +
            "|---|---|---|\n" +
            "| **API Resource** | `php artisan make:resource ProductResource` | Membentuk struktur payload JSON transformasi data Eloquent. |\n" +
            "| **Laravel Sanctum** | `composer require laravel/sanctum` | Sistem otentikasi lightweight berbasis Personal Access Token (Bearer Token). |\n" +
            "| **HTTP Status Code** | `response()->json($data, 201)` | Mengembalikan status HTTP terstandar (200 OK, 201 Created, 401 Unauthorized, 422 Validation Error). |\n" +
            "| **Rate Limiting** | `Route::middleware('throttle:api')` | Membatasi jumlah request per menit untuk mencegah DoS attack. |\n\n" +
            "## Format Respon JSON Standar Industri\n\n" +
            "Pengembalian respon API yang konsisten mempermudah tim frontend dalam mengonsumsi data:\n\n" +
            "```json\n" +
            "{\n" +
            "    \"success\": true,\n" +
            "    \"message\": \"Detail produk berhasil diambil\",\n" +
            "    \"data\": {\n" +
            "        \"id\": 10,\n" +
            "        \"nama_produk\": \"Kopi Robusta\",\n" +
            "        \"harga_formatted\": \"Rp 25.000\"\n" +
            "    }\n" +
            "}\n" +
            "```\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan **API Resource** seperti mesin cetakan biskuit di pabrik: apapun bentuk bahan adonan Eloquent yang masuk, mesin cetakan akan menghasilkan biskuit JSON bertata letak seragam yang rapi. **Laravel Sanctum** seperti paspor diplomatik stempel elektronik: setiap kali aplikasi mobile melakukan request ke server API, paspor tersebut ditunjukkan di header (`Authorization: Bearer <token>`) sebagai bukti autentikasi tanpa memerlukan session peramban web.\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Lupa Header `Accept: application/json`:** Saat menguji API menggunakan Postman atau Bruno, jika kamu lupa menambahkan header `Accept: application/json`, saat terjadi error validasi Laravel akan mengembalikan halaman HTML 302 redirect alih-alih respon JSON 422.\n" +
            "2. **Memaparkan Password Hash di JSON:** Lupa menyembunyikan kolom sensitif (`password`, `remember_token`) di Model atau API Resource. Pastikan kolom sensitif terdaftar di `$hidden` pada Model.\n" +
            "3. **Token Sanctum Tidak Pernah Expire:** Menerbitkan token Sanctum tanpa mengatur batas kadaluarsa (*expiration time*) di `config/sanctum.php` dapat menjadi celah keamanan jika token pengguna tercuri.\n\n" +
            "## Inisialisasi API di Laravel 11 (php artisan install:api)\n\n" +
            "Di Laravel 11, untuk membuat ukuran proyek tetap ringan, berkas `routes/api.php` tidak disertakan secara default jika proyek hanya ditujukan sebagai web aplikasi biasa. Untuk mulai membangun REST API:\n" +
            "Jalankan perintah `php artisan install:api`. Perintah ini akan secara otomatis membuat berkas `routes/api.php`, mengonfigurasi middleware API di `bootstrap/app.php`, serta memasang migrasi Personal Access Token dari paket Laravel Sanctum.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Kemampuan merancang RESTful API yang konsisten dengan otentikasi Sanctum serta pembuatan dokumentasi OpenAPI/Swagger adalah keahlian utama yang paling dicari untuk posisi Backend API Engineer.",
        },
        {
          kind: "step",
          id: "laravel-7-1",
          title: "Route API di routes/api.php",
          explanation:
            "Route yang ditulis di `routes/api.php` mendapat perlakuan berbeda dari yang di `routes/web.php`, dan bedanya bukan kosmetik. **Pertama**, seluruhnya otomatis berawalan `/api/`, jadi `Route::get('/users', ...)` di berkas itu benar-benar melayani `/api/users` — menuliskan `/api/users` di sana menghasilkan `/api/api/users`, dan ini kesalahan pertama hampir semua orang. **Kedua**, tidak ada session dan tidak ada pemeriksaan CSRF, karena klien API (aplikasi mobile, SPA) membawa identitasnya lewat token di header, bukan lewat cookie. **Ketiga**, jawabannya berupa data, bukan halaman — `response()->json([...])` menyetel header `Content-Type: application/json` sekaligus mengubah array PHP menjadi JSON. Kapan mana yang dipakai: halaman yang dirender server ke `web.php`, endpoint yang dikonsumsi kode ke `api.php`. Jebakan versi baru: sejak Laravel 11, berkas `routes/api.php` **tidak ada** di proyek baru sampai kamu menjalankan `php artisan install:api` — jadi kalau route-mu terus 404 padahal ejaannya benar, periksa apakah berkasnya benar-benar terdaftar (`php artisan route:list`).",
          example: {
            code:
              "// routes/api.php\n" +
              "Route::get('/products', function () {\n" +
              "    return response()->json([\n" +
              "        'data' => [['id' => 1, 'name' => 'Kopi Gayo']],\n" +
              "    ]);\n" +
              "});",
            output:
              "$ curl -i http://127.0.0.1:8000/api/products\n" +
              "HTTP/1.1 200 OK\n" +
              "Content-Type: application/json\n\n" +
              '{"data":[{"id":1,"name":"Kopi Gayo"}]}\n\n' +
              "# alamat TANPA awalan /api — tidak terdaftar:\n" +
              "$ curl -i http://127.0.0.1:8000/products\n" +
              "HTTP/1.1 404 Not Found",
            note: "Perhatikan alamatnya: di berkas hanya tertulis `/products`, tetapi yang dilayani `/api/products`. Awalan itu ditambahkan Laravel, bukan olehmu. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Kamu sedang menyunting `routes/api.php`. Daftarkan sebuah endpoint pemeriksa kesehatan yang bisa diakses klien di `http://127.0.0.1:8000/api/users` dan menjawab dengan data JSON `['status' => 'ok']`. Ingat bagaimana awalan alamatnya terbentuk.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\n// Daftarkan endpoint-nya di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::get\\s*\\(\\s*['\"]/?users['\"]",
              message:
                "Jalur yang kamu tulis di `routes/api.php` TIDAK perlu memuat awalan `/api` — Laravel menambahkannya sendiri. Menuliskannya membuat alamat sesungguhnya menjadi `/api/api/users`.",
            },
            {
              pattern: "(return|=>)\\s*response\\s*\\(\\s*\\)\\s*->\\s*json\\s*\\(",
              message:
                "Jawaban API dibentuk dengan helper `response()` lalu method `json()`, dan hasilnya dikembalikan — lewat `return` di fungsi anonim biasa, atau lewat `=>` bila kamu memakai arrow function. Bentuk ini yang menyetel header `Content-Type: application/json`; mengembalikan array polos memang ikut menjadi JSON, tetapi kamu kehilangan kendali atas status code-nya.",
            },
            {
              pattern: "['\"]status['\"]\\s*=>\\s*['\"]ok['\"]",
              message:
                "Isi datanya berupa array asosiatif dengan kunci `status` bernilai `ok` — pasangan kunci-nilai di PHP dihubungkan `=>`, bukan `:` seperti penulisan JSON.",
            },
          ],
          solution:
            "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/users', function () {\n    return response()->json(['status' => 'ok']);\n});",
          susunKode: {
            question:
              "Susun rute API GET /users di routes/api.php yang mengembalikan respons JSON status ok.",
            potongan: [
              "<?php",
              "use Illuminate\\Support\\Facades\\Route;",
              "Route::get('/users', function () {",
              "    return response()->json(['status' => 'ok']);",
              "});",
            ],
            pengecoh: [
              "    return json_encode(['status' => 'ok']);",
              "Route::api('/users', function () {",
            ],
            pemisah: "\n",
            explanation:
              "Respons API standar pada Laravel dikembalikan menggunakan helper response()->json(...). Keping json_encode menggoda bagi pengguna PHP native, tetapi tidak memasang header Content-Type: application/json secara otomatis. Keping Route::api keliru nama metode HTTP.",
          },
        },
        {
  kind: "step",
  id: "laravel-7-2",
  title: "Mengembalikan Single Resource di Controller",
  explanation: "Untuk membungkus satu rekaman Model tunggal sebelum dikembalikan ke klien API, instansiasi kelas Resource secara langsung menggunakan `return new UserResource($user)`. Laravel akan secara otomatis mengeksekusi metode transformasi `toArray()` pada resource tersebut, membungkus payload ke dalam struktur standar `{\"data\": { ... }}`, menyetel header HTTP `Content-Type: application/json`, dan mengembalikan status 200 OK. Kenapa cara ini penting: kamu membedakan dengan jelas penanganan rekaman tunggal (`new UserResource($user)`) dan koleksi banyak rekaman (`UserResource::collection($users)`). Kapan dipakai: pada endpoint detail entitas seperti `GET /api/users/{id}`. Jebakan umum pemula: menulis `UserResource::collection($user)` untuk satu rekaman model tunggal — ini melempar error *Attempt to read property on non-collection* karena method `collection()` mengharapkan iterable/array.",
  example: {
    code: "public function show(Product $product) {\n    return new ProductResource($product);\n}",
    output: "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  \"data\": {\n    \"id\": 42,\n    \"name\": \"Espresso\"\n  }\n}",
    note: "Model tunggal dibungkus rapi ke dalam envelope properti data secara otomatis."
  },
  instruction: "Di dalam method `show(User $user)` pada `UserController`, kembalikan respon satu objek pengguna yang dibungkus oleh kelas `UserResource`.",
  starterCode: "<?php\nnamespace App\\Http\\Controllers;\nuse App\\Http\\Resources\\UserResource;\nuse App\\Models\\User;\n\nclass UserController extends Controller {\n    public function show(User $user) {\n        // Kembalikan UserResource di sini\n    }\n}",
  language: "text",
  tests: [
    {
      pattern: "return\\s+new\\s+UserResource\\s*\\(\\s*\\$user\\s*\\);",
      message: "Kembalikan instansiasi baru UserResource: return new UserResource($user);."
    }
  ],
  solution: "<?php\nnamespace App\\Http\\Controllers;\nuse App\\Http\\Resources\\UserResource;\nuse App\\Models\\User;\n\nclass UserController extends Controller {\n    public function show(User $user) {\n        return new UserResource($user);\n    }\n}",
  susunKode: {
    question: "Susun pengembalian model tunggal yang dibungkus UserResource pada method show Controller.",
    potongan: [
      "class UserController extends Controller {",
      "    public function show(User $user) {",
      "        return new UserResource($user);",
      "    }",
      "}"
    ],
    pengecoh: [
      "        return UserResource::collection($user);",
      "        return response($user);"
    ],
    pemisah: "\n",
    explanation: "Model tunggal dibungkus dengan instansiasi new UserResource($user). Keping UserResource::collection keliru karena metode collection khusus untuk banyak baris data koleksi. Keping response($user) menggoda tetapi memotong lapisan transformasi resource sehingga seluruh kolom mentah bocor."
  }
},
        {
          kind: "step",
          id: "laravel-7-3",
          title: "Laravel Sanctum Token Authentication",
          explanation:
            "API tidak bisa mengandalkan session peramban, jadi identitas klien dibawa sebagai **token** di header `Authorization: Bearer <token>` pada setiap permintaan. Sanctum menerbitkannya lewat `$user->createToken('nama')`, dan bagian yang wajib kamu pahami ada pada `->plainTextToken`: nilai itulah satu-satunya kesempatan kamu melihat token aslinya, karena yang disimpan di tabel `personal_access_tokens` hanyalah hash-nya. Kalau kamu lupa mengirimkannya ke klien saat itu juga, token itu hilang selamanya dan harus diterbitkan ulang — persis seperti kunci API layanan mana pun yang hanya tampil sekali. Nama token (`'mobile'`, `'web'`) tidak memengaruhi keamanan; ia label agar pengguna bisa mencabut perangkat tertentu dari halaman pengaturan. Kapan pakai Sanctum dan kapan Passport: Sanctum untuk aplikasi milikmu sendiri (mobile, SPA), Passport untuk OAuth2 penuh saat pihak ketiga perlu meminta izin atas nama penggunamu. Jebakan keamanan yang wajib diingat: token bawaan **tidak punya masa berlaku** kecuali kamu mengaturnya di `config/sanctum.php` — token yang bocor dari perangkat hilang akan berlaku selamanya. Jangan pula mengirim token lewat query string URL, karena URL tercatat di log server dan riwayat peramban.",
          example: {
            code:
              "// app/Http/Controllers/Api/AuthController.php\n" +
              "$user = User::where('email', $request->email)->first();\n\n" +
              "if (! $user || ! Hash::check($request->password, $user->password)) {\n" +
              "    return response()->json(['message' => 'Kredensial salah'], 401);\n" +
              "}\n\n" +
              "$token = $user->createToken('mobile')->plainTextToken;\n\n" +
              "return response()->json(['token' => $token]);",
            output:
              "$ curl -X POST http://127.0.0.1:8000/api/login \\\n" +
              "    -H 'Accept: application/json' -d 'email=bimo@example.com&password=rahasia'\n" +
              '{"token":"7|kQ2fY8xL1pOaB7ZmT4wR9sVnC3dEjHgU6i0KaPqW"}\n\n' +
              "# baris di tabel personal_access_tokens (yang tersimpan hanya HASH-nya):\n" +
              "id | name   | token (sha256)                    | last_used_at\n" +
              "7  | mobile | 4f9c2a...e17b                     | NULL\n\n" +
              "# memakai token itu di permintaan berikutnya:\n" +
              "$ curl http://127.0.0.1:8000/api/user -H 'Authorization: Bearer 7|kQ2fY8...'\n" +
              '{"id":3,"name":"Bimo"}',
            note: "Bandingkan nilai di respons dengan isi kolom di tabel: keduanya berbeda karena yang disimpan sudah di-hash. Itu sebabnya token tidak bisa ditampilkan ulang di kemudian hari. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Objek `$user` di editor sudah berisi pengguna yang kredensialnya terbukti benar. Terbitkan sebuah token akses berlabel `mobile` untuknya, lalu tampung **nilai teks asli** token itu ke variabel `$token` supaya bisa dikirim ke aplikasi klien — ingat bahwa yang tersimpan di database hanyalah hash-nya.",
          starterCode:
            "<?php\n// $user sudah berisi pengguna yang lolos pemeriksaan kredensial\n\n// Terbitkan token aksesnya di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$user\\s*->\\s*createToken\\s*\\(\\s*['\"]mobile['\"]\\s*\\)",
              message:
                "Penerbitan token adalah method pada objek pengguna, bukan pada facade. Argumennya label perangkat sebagai teks — label ini yang nanti muncul di daftar \"perangkat aktif\" milik pengguna.",
            },
            {
              pattern: "\\$token\\s*=\\s*[\\s\\S]*->\\s*plainTextToken\\b",
              message:
                "Method penerbitan mengembalikan objek `NewAccessToken`, bukan teksnya. Ambil properti yang berisi nilai mentahnya dan simpan ke `$token`. Melupakan properti ini membuat responsmu berisi representasi objek, bukan token yang bisa dipakai klien.",
            },
          ],
          solution: "<?php\n$token = $user->createToken('mobile')->plainTextToken;",
          susunKode: {
            question:
              "Rangkai kode pembentukan Sanctum API token bernama 'mobile' dan mengambil nilai plainTextToken.",
            potongan: [
              "<?php",
              "$token = $user",
              "->createToken('mobile')",
              "->plainTextToken;",
            ],
            pengecoh: [
              "->generateToken('mobile')",
              "->accessToken;",
            ],
            pemisah: "\n",
            explanation:
              "Sanctum menerbitkan token lewat createToken() pada objek pengguna, dan nilai mentahnya hanya bisa dibaca sekali dari properti plainTextToken. Keping generateToken() keliru nama method sehingga PHP langsung berhenti dengan Call to undefined method. Keping ->accessToken menggoda karena Laravel Passport memang memakai nama itu, tetapi pada Sanctum properti accessToken berisi objek baris databasenya \u2014 yang terkirim ke klien menjadi representasi objek, bukan token yang bisa dipakai.",
          },
        },
        {
          kind: "step",
          id: "laravel-7-4",
          title: "Status Code HTTP di API Response",
          explanation:
            "Status code adalah cara API memberi tahu klien apa yang terjadi **sebelum** klien membaca isi responsnya, dan argumen kedua `response()->json($data, 201)` itulah yang menyetelnya. Kenapa penting: kode frontend menuliskan `if (response.ok)` atau `catch` berdasarkan status, bukan berdasarkan isi JSON — sehingga API yang selalu menjawab `200 OK` sambil menaruh `{\"success\": false}` di dalamnya memaksa setiap klien menulis penanganan khusus, dan alat pemantauan tidak akan pernah melihat kegagalanmu. Yang perlu kamu hafal secukupnya: `200` berhasil, `201` data baru terbentuk, `204` berhasil tanpa isi (cocok untuk `DELETE`), `401` belum login, `403` sudah login tetapi tidak berhak, `404` tidak ditemukan, `422` masukan gagal validasi, `500` aplikasimu yang rusak. Perbedaan `401` dan `403` sering tertukar padahal maknanya berbeda bagi klien: yang pertama berarti \"silakan login\", yang kedua berarti \"jangan coba lagi\". Jebakan yang halus: `response()->json($data, 201)` menyetel status, sedangkan `return $data` polos selalu `200` — jadi endpoint pembuatan data yang lupa argumen kedua tetap bekerja tetapi memberi sinyal yang salah, dan itu jenis cacat yang baru ketahuan saat integrasi dengan tim mobile.",
          example: {
            code:
              "// app/Http/Controllers/Api/ProductController.php\n" +
              "$product = Product::create($request->validated());\n\n" +
              "return response()->json([\n" +
              "    'message' => 'Produk berhasil dibuat',\n" +
              "    'data' => $product,\n" +
              "], 201);",
            output:
              "$ curl -i -X POST http://127.0.0.1:8000/api/products \\\n" +
              "    -H 'Accept: application/json' -d 'name=Kopi&price=25000'\n" +
              "HTTP/1.1 201 Created\n" +
              "Content-Type: application/json\n\n" +
              '{"message":"Produk berhasil dibuat","data":{"id":8,"name":"Kopi","price":25000}}\n\n' +
              "# tanpa argumen kedua, respons yang sama menjadi:\n" +
              "HTTP/1.1 200 OK",
            note: "Dua baris terakhir adalah inti step ini: isi JSON-nya identik, hanya sinyal statusnya yang berbeda — dan sinyal itulah yang dibaca kode klien. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Endpoint pembuatan data baru sudah selesai menyimpan produknya. Kembalikan respons JSON berisi `['message' => 'Created']` dengan status HTTP yang tepat untuk \"sumber daya baru berhasil dibuat\" — bukan status sukses umum.",
          starterCode: "<?php\n// Kembalikan responsnya di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "return\\s+response\\s*\\(\\s*\\)\\s*->\\s*json\\s*\\(\\s*\\[[^\\]]*['\"]message['\"]\\s*=>\\s*['\"]Created['\"]",
              message:
                "Respons dibentuk dengan `response()->json([...])` lalu di-`return`. Isi datanya array asosiatif berkunci `message`.",
            },
            {
              pattern: "\\]\\s*,\\s*201\\s*\\)",
              message:
                "Status code ditulis sebagai argumen KEDUA method `json()`, setelah tanda kurung siku penutup array. Kode untuk \"sumber daya baru terbentuk\" bukan 200 — ia satu angka di atasnya, dan itulah yang membedakan `POST` yang membuat data dari `GET` yang sekadar membaca.",
            },
          ],
          solution: "<?php\nreturn response()->json(['message' => 'Created'], 201);",
          susunKode: {
            question:
              "Rangkai pengembalian respons JSON dengan pesan 'Created' dan HTTP status code 201 Created.",
            potongan: [
              "<?php",
              "return response()->json(",
              "['message' => 'Created'],",
              "201);",
            ],
            pengecoh: [
              "return response()->created(",
              "200);",
            ],
            pemisah: "\n",
            explanation:
              "Status code ditulis sebagai argumen kedua method json(), setelah array datanya. Keping 200 menggoda karena responsnya tetap dianggap berhasil dan tidak ada error apa pun yang muncul, padahal klien kehilangan informasi bahwa ada sumber daya baru terbentuk \u2014 cacat yang baru ketahuan saat integrasi dengan tim mobile. Keping response()->created( keliru karena helper response() tidak menyediakan method created(); yang ada hanya json(), view(), dan download().",
          },
        },
        {
          kind: "step",
          id: "laravel-7-5",
          title: "Paginated API Collection Response",
          explanation:
            "`Resource::collection($paginator)` menggabungkan dua hal yang sudah kamu pelajari: paginasi dari Eloquent dan pembentukan JSON dari API Resource. Hasilnya bukan sekadar array data — Laravel ikut menyisipkan blok `links` dan `meta` berisi halaman saat ini, halaman terakhir, total baris, dan URL halaman berikutnya. Kenapa itu berarti banyak: aplikasi mobile butuh tahu apakah masih ada halaman lain untuk memutuskan menampilkan *infinite scroll* atau berhenti; tanpa metadata itu, klien terpaksa menebak dengan membandingkan jumlah baris yang diterima. Kapan endpoint daftar **wajib** dipaginasi: selalu, begitu tabelnya bisa tumbuh. Endpoint yang mengembalikan seluruh baris akan bekerja mulus di data uji lalu menghabiskan memori server saat produksi mencapai puluhan ribu baris — dan kegagalannya berbentuk `Allowed memory size exhausted` yang tidak menyebut nama endpoint mana pun. Jebakan urutan penulisan: paginasi dijalankan lebih dulu (`User::paginate(15)`), hasilnya baru dibungkus Resource — membungkus dulu lalu memaginasi tidak akan bekerja karena Resource bukan Query Builder. Untuk klien yang tidak butuh total, `simplePaginate()` melewatkan query penghitungan dan lebih murah.",
          example: {
            code:
              "use App\\Http\\Resources\\ProductResource;\n" +
              "use App\\Models\\Product;\n\n" +
              "return ProductResource::collection(Product::paginate(10));",
            output:
              "$ curl http://127.0.0.1:8000/api/products?page=2 -H 'Accept: application/json'\n" +
              "{\n" +
              '  "data": [\n' +
              '    {"id": 11, "name": "Teh Hijau", "price_formatted": "Rp 18.000"},\n' +
              '    {"id": 12, "name": "Gula Aren", "price_formatted": "Rp 12.000"}\n' +
              "  ],\n" +
              '  "links": {\n' +
              '    "first": "http://127.0.0.1:8000/api/products?page=1",\n' +
              '    "next":  "http://127.0.0.1:8000/api/products?page=3",\n' +
              '    "prev":  "http://127.0.0.1:8000/api/products?page=1"\n' +
              "  },\n" +
              '  "meta": { "current_page": 2, "last_page": 5, "per_page": 10, "total": 43 }\n' +
              "}",
            note: "Blok `meta` dan `links` itu ditambahkan Laravel sendiri — kamu tidak menulisnya. Klien mobile cukup membaca `links.next`: bila `null`, berarti sudah halaman terakhir. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Endpoint daftar pengguna harus mengembalikan `15` baris per halaman dalam bentuk JSON yang sudah dibentuk oleh `UserResource`, lengkap dengan metadata paginasinya. Keduanya sudah diimpor di editor — susun urutannya dengan benar.",
          starterCode:
            "<?php\nuse App\\Http\\Resources\\UserResource;\nuse App\\Models\\User;\n\n// Kembalikan daftar pengguna terpaginasi di sini\n",
          language: "text",
          tests: [
            {
              pattern: "return\\s+UserResource::collection\\s*\\(",
              message:
                "Untuk membungkus BANYAK baris sekaligus dipakai method statis `collection()` pada Resource-nya — bukan `new UserResource(...)` yang hanya untuk satu baris.",
            },
            {
              pattern: "User::(paginate|simplePaginate)\\s*\\(\\s*15\\s*\\)",
              message:
                "Paginasi dijalankan pada Model-nya, DI DALAM pemanggilan `collection()`, dengan jumlah baris per halaman sebagai argumen. Urutannya penting: pagination dulu, pembungkusan Resource belakangan — Resource bukan Query Builder, jadi `->paginate()` tidak bisa dirantai setelahnya.",
            },
          ],
          solution:
            "<?php\nuse App\\Http\\Resources\\UserResource;\nuse App\\Models\\User;\n\nreturn UserResource::collection(User::paginate(15));",
          susunKode: {
            question:
              "Rangkai pengembalian koleksi UserResource yang dipaginasi 15 data per halaman.",
            potongan: [
              "<?php",
              "use App\\Http\\Resources\\UserResource;",
              "use App\\Models\\User;",
              "return UserResource::collection(User::paginate(15));",
            ],
            pengecoh: [
              "return new UserResource(User::paginate(15));",
              "return UserResource::paginate(User::all(), 15);",
            ],
            pemisah: "\n",
            explanation:
              "Metode static UserResource::collection(...) memformat daftar/koleksi model yang terpaginasi ke dalam struktur data API Resource. Keping new UserResource(...) keliru karena konstruktor tunggal diperuntukkan bagi satu instans model. Keping UserResource::paginate keliru nama metode.",
          },
        },
        {
          kind: "step",
          id: "laravel-7-6",
          title: "Rate Limiting pada Middleware API",
          explanation:
            "Middleware `throttle:60,1` berarti \"maksimal 60 permintaan per 1 menit\" — angka pertama jumlah, angka kedua rentang menitnya. Laravel menghitungnya per pengguna yang login, atau per alamat IP untuk pengunjung anonim, lalu menjawab `429 Too Many Requests` beserta header `Retry-After` begitu batasnya terlampaui. Kenapa ini bukan fitur opsional: endpoint login tanpa pembatas mengizinkan penebakan kata sandi ribuan kali per menit, dan endpoint pencarian yang mahal bisa membuat databasemu tumbang hanya dengan satu skrip sederhana. Kapan angkanya diturunkan drastis: login, reset password, dan pengiriman OTP layak dibatasi sekitar lima percobaan per menit, jauh lebih ketat daripada endpoint baca biasa. Yang perlu diperhatikan: batas ini disimpan di *cache*, jadi dengan driver `array` di lingkungan lokal hitungannya ikut hilang setiap permintaan — pembatasnya baru benar-benar terasa memakai `redis` atau `database`. Jebakan yang muncul saat aplikasi naik ke produksi: bila server berada di belakang proxy atau CDN, semua permintaan terlihat berasal dari satu IP yang sama, sehingga seluruh pengguna berbagi satu jatah. Konfigurasi `TrustProxies` yang benar yang membuat pembatas ini kembali menghitung per pengguna sesungguhnya.",
          example: {
            code:
              "// routes/api.php\n" +
              "Route::middleware(['auth:sanctum', 'throttle:60,1'])->group(function () {\n" +
              "    Route::get('/user', fn (Request $request) => $request->user());\n" +
              "});",
            output:
              "# permintaan ke-1 sampai ke-60 dalam satu menit:\n" +
              "HTTP/1.1 200 OK\n" +
              "X-RateLimit-Limit: 60\n" +
              "X-RateLimit-Remaining: 41\n\n" +
              "# permintaan ke-61:\n" +
              "HTTP/1.1 429 Too Many Requests\n" +
              "Retry-After: 37\n" +
              "X-RateLimit-Remaining: 0\n\n" +
              '{"message":"Too Many Attempts."}',
            note: "Header `X-RateLimit-Remaining` dikirim di setiap respons, jadi klien yang baik bisa memperlambat dirinya sendiri sebelum kena 429. Catatan jujur: panel latihan tidak menjalankan Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Endpoint API publikmu mulai dibanjiri skrip otomatis. Bungkus route-route API di dalam satu kelompok yang memasang pembatas laju permintaan sebanyak `60` permintaan per `1` menit.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\n// Pasang pembatas laju di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::middleware\\s*\\(\\s*(\\[[^\\]]*)?['\"]throttle:\\s*60\\s*,\\s*1['\"]",
              message:
                "Nama middleware pembatasnya satu kata bahasa Inggris yang berarti \"mencekik\", diikuti titik dua lalu dua angka: jumlah permintaan dan rentang menitnya, dipisah koma — semuanya di dalam satu teks.",
            },
            {
              pattern: "->group\\s*\\(\\s*(function\\s*\\(\\s*\\)|fn\\s*\\(\\s*\\))",
              message:
                "Pasang middleware-nya pada sebuah kelompok route dengan `->group(function () { ... })`, supaya seluruh endpoint di dalamnya terlindungi sekaligus dan tidak ada yang terlewat saat kamu menambah route baru.",
            },
          ],
          solution:
            "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::middleware(['throttle:60,1'])->group(function () {\n    Route::get('/products', [ProductController::class, 'index']);\n});",
          susunKode: {
            question:
              "Susun rute API dengan proteksi pembatasan laju akses Rate Limiting 60 kali per menit (throttle:60,1).",
            potongan: [
              "<?php",
              "use Illuminate\\Support\\Facades\\Route;",
              "Route::middleware(['throttle:60,1'])->group(function () {",
              "    Route::get('/products', [ProductController::class, 'index']);",
              "});",
            ],
            pengecoh: [
              "Route::middleware(['rate_limit:60'])->group(function () {",
              "Route::middleware(['throttle:60'])->group(function () {",
            ],
            pemisah: "\n",
            explanation:
              "Middleware pembatas laju akses di Laravel ditulis dengan format 'throttle:maksimal_request,menit'. Keping rate_limit keliru nama middleware. Keping 'throttle:60' menggoda tetapi tanpa argumen kedua durasi menit tidak terspesifikasi dengan jelas.",
          },
        },
        {
  kind: "step",
  id: "laravel-7-7",
  title: "Format Respon JSON API Konsisten (Envelope Pattern)",
  explanation: "Pola amplop respon (*Response Envelope Pattern*) adalah arsitektur respon API standar di mana setiap respon HTTP JSON memiliki struktur seragam: status boolean `success`, string keterangan `message`, dan payload data `data`. Dengan kontrak yang konsisten ini, tim pengembang front-end (React, Vue, iOS, Android) dapat membangun satu interceptor jaringan universal yang menangani seluruh respon API tanpa perlu menebak-nebak format data yang berbeda antar-endpoint. Kenapa ini standar industri: mempermudah standardisasi error handling, pesan notifikasi popup aplikasi, dan status keberhasilan transaksi. Kapan dipakai: pada seluruh endpoint API kustom atau service response backend. Jebakan umum: mengembalikan array datar tanpa status — klien tidak dapat membedakan dengan cepat apakah permintaan berhasil atau gagal sebelum membaca status HTTP header.",
  example: {
    code: "return response()->json([\n    'success' => true,\n    'message' => 'Profil berhasil diperbarui',\n    'data' => $profile,\n]);",
    output: "{\n  \"success\": true,\n  \"message\": \"Profil berhasil diperbarui\",\n  \"data\": { \"id\": 1, \"name\": \"Bimo\" }\n}",
    note: "Format amplop menyajikan status, pesan notifikasi, dan data dalam satu struktur seragam."
  },
  instruction: "Kembalikan respon JSON dengan tiga properti standar: `'success'` bernilai `true`, `'message'` bernilai `'Data berhasil diambil'`, dan `'data'` berisi variabel `$users`.",
  starterCode: "<?php\n// Kembalikan response json dengan envelope standar di sini\n",
  language: "text",
  tests: [
    {
      pattern: "return\\s+response\\s*\\(\\s*\\)->json\\s*\\(",
      message: "Gunakan helper response()->json(...) untuk mengembalikan respon JSON."
    },
    {
      pattern: "['\"]success['\"]\\s*=>\\s*true",
      message: "Sertakan properti 'success' => true di dalam array respon."
    },
    {
      pattern: "['\"]message['\"]\\s*=>\\s*['\"]Data berhasil diambil['\"]",
      message: "Sertakan properti 'message' => 'Data berhasil diambil'."
    },
    {
      pattern: "['\"]data['\"]\\s*=>\\s*\\$users",
      message: "Sertakan properti 'data' => $users di dalam array respon."
    }
  ],
  solution: "<?php\nreturn response()->json([\n    'success' => true,\n    'message' => 'Data berhasil diambil',\n    'data' => $users,\n]);",
  susunKode: {
    question: "Susun respon JSON API berformat amplop standar industri dengan properti success, message, dan data.",
    potongan: [
      "return response()->json([",
      "    'success' => true,",
      "    'message' => 'Data berhasil diambil',",
      "    'data' => $users,",
      "]);"
    ],
    pengecoh: [
      "return response([",
      "    'status' => 200,"
    ],
    pemisah: "\n",
    explanation: "Helper response()->json() memastikan header Content-Type diatur ke application/json. Keping response() biasa keliru karena mengembalikan teks polos tanpa format JSON otomatis. Keping 'status' => 200 menggoda tetapi kode status HTTP berada di argumen respon terpisah, bukan di dalam payload amplop."
  }
},
        {
  kind: "step",
  id: "laravel-7-8",
  title: "Menyusun Transformasi Payload JSON di API Resource",
  explanation: "Method `toArray($request): array` di dalam kelas `JsonResource` bertindak sebagai lapisan transformasi data (*Data Transformation Layer*) antara Model database dan respon JSON yang diterima klien. Di sini kamu menentukan kolom apa saja yang dipublikasikan, mengganti nama kunci properti, melakukan *type-casting* (misalnya memastikan harga bertipe integer murni), dan menyembunyikan kolom sensitif internal seperti `password` atau `deleted_at`. Kenapa ini standar industri: struktur tabel database tidak boleh bocor langsung ke konsumen API; perubahan nama kolom di database tidak akan merusak kontrak API publik. Kapan dipakai: pada seluruh endpoint RESTful API di lingkungan kerja. Jebakan umum: memanggil properti relasi di `toArray()` tanpa eager loading yang memicu Masalah N+1 di endpoint API — gunakan `$this->whenLoaded('relasi')` untuk menyertakan relasi secara aman.",
  example: {
    code: "public function toArray($request): array {\n    return [\n        'id' => $this->id,\n        'title' => $this->title,\n        'category' => $this->whenLoaded('category', fn() => $this->category->name),\n    ];\n}",
    output: "{\n  \"data\": {\n    \"id\": 1,\n    \"title\": \"Belajar Laravel Modern\",\n    \"category\": \"Backend\"\n  }\n}",
    note: "Data dibungkus rapi dalam properti data standar JSON:API."
  },
  instruction: "Di dalam kelas `ProductResource`, lengkapi method `toArray($request)` agar mengembalikan array dengan format JSON yang rapi: kolom `id`, `name`, dan `price` yang dicasting ke tipe `(int)` dari properti model.",
  starterCode: "<?php\nnamespace App\\Http\\Resources;\nuse Illuminate\\Http\\Resources\\Json\\JsonResource;\n\nclass ProductResource extends JsonResource {\n    public function toArray($request): array {\n        // Kembalikan pemetaan atribut JSON di sini\n    }\n}",
  language: "text",
  tests: [
    {
      pattern: "public\\s+function\\s+toArray\\s*\\([^)]*\\)\\s*:\\s*array",
      message: "Deklarasikan method toArray dengan return type array."
    },
    {
      pattern: "['\"]id['\"]\\s*=>\\s*\\$this->id",
      message: "Petakan kunci 'id' ke properti $this->id."
    },
    {
      pattern: "['\"]name['\"]\\s*=>\\s*\\$this->name",
      message: "Petakan kunci 'name' ke properti $this->name."
    },
    {
      pattern: "['\"]price['\"]\\s*=>\\s*\\(int\\)\\s*\\$this->price",
      message: "Petakan kunci 'price' dengan casting integer: (int) $this->price."
    }
  ],
  solution: "<?php\nnamespace App\\Http\\Resources;\nuse Illuminate\\Http\\Resources\\Json\\JsonResource;\n\nclass ProductResource extends JsonResource {\n    public function toArray($request): array {\n        return [\n            'id' => $this->id,\n            'name' => $this->name,\n            'price' => (int) $this->price,\n        ];\n    }\n}",
  susunKode: {
    question: "Susun method toArray pada API Resource untuk memformat respon produk.",
    potongan: [
      "    public function toArray($request): array {",
      "        return [",
      "            'id' => $this->id,",
      "            'name' => $this->name,",
      "            'price' => (int) $this->price,",
      "        ];",
      "    }"
    ],
    pengecoh: [
      "    public function toResponse($request): array {",
      "            'price' => (string) $this->price,"
    ],
    pemisah: "\n",
    explanation: "Method toArray pada API Resource memetakan properti model menjadi pasangan kunci nilai JSON terstruktur. Keping toResponse keliru karena metode transformasi data di JsonResource bernama toArray. Keping (string) $this->price menggoda bagi pemula tetapi instruksi mewajibkan casting ke integer murni."
  }
},
{
  kind: "step",
  id: "laravel-7-9",
  title: "Memproteksi Endpoint API Menggunakan auth:sanctum",
  explanation: "Middleware `auth:sanctum` memvalidasi keberadaan dan keabsahan Bearer Token yang dikirimkan oleh klien API di dalam header HTTP `Authorization: Bearer <token>`. Jika token valid dan belum dicabut, Laravel mengidentifikasi pemilik token dan menyuntikkannya ke objek permintaan (`$request->user()`); jika token salah atau tidak disertakan, server otomatis menolak permintaan dengan status HTTP 401 Unauthorized. Kenapa Sanctum menjadi standar: ia sangat ringan, tidak membutuhkan konfigurasi server OAuth2 yang rumit, dan dapat mengamankan Single Page Application (SPA) maupun aplikasi mobile. Kapan dipakai: pada seluruh rute API yang membutuhkan otentikasi pengguna. Jebakan klasik pemula: klien mengirim permintaan tanpa header `Accept: application/json` — akibatnya saat token tidak ada, Laravel mencoba mengarahkan pengguna ke halaman HTML `/login` (302 redirect) alih-alih mengembalikan JSON 401.",
  example: {
    code: "Route::middleware('auth:sanctum')->get('/cart', function (Request $request) {\n    return $request->user()->cartItems;\n});",
    output: "# Permintaan tanpa header Authorization:\nHTTP/1.1 401 Unauthorized\n{\n  \"message\": \"Unauthenticated.\"\n}\n\n# Permintaan dengan Bearer Token sah:\nHTTP/1.1 200 OK\n[{\"id\": 10, \"item\": \"Kopi Arabika\"}]",
    note: "Middleware otomatis mencegat permintaan tanpa token sebelum menyentuh closure penangan."
  },
  instruction: "Di dalam berkas `routes/api.php`, bungkus route GET `/me` yang mengembalikan `$request->user()` di dalam middleware pengawal token `auth:sanctum`.",
  starterCode: "<?php\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Route;\n\n// Lindungi route /me dengan middleware auth:sanctum di sini\n",
  language: "text",
  tests: [
    {
      pattern: "Route::middleware\\s*\\(\\s*['\"]auth:sanctum['\"]\\s*\\)",
      message: "Gunakan Route::middleware('auth:sanctum') untuk melindungi rute API."
    },
    {
      pattern: "->get\\s*\\(\\s*['\"]/me['\"]",
      message: "Daftarkan endpoint GET '/me' yang dilindungi middleware."
    },
    {
      pattern: "return\\s+\\$request->user\\(\\);",
      message: "Kembalikan data pengguna terotentikasi via $request->user()."
    }
  ],
  solution: "<?php\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::middleware('auth:sanctum')->get('/me', function (Request $request) {\n    return $request->user();\n});",
  susunKode: {
    question: "Susun rute API terproteksi token Sanctum yang mengembalikan pengguna aktif.",
    potongan: [
      "Route::middleware('auth:sanctum')",
      "    ->get('/me', function (Request $request) {",
      "        return $request->user();",
      "    });"
    ],
    pengecoh: [
      "Route::middleware('auth:web')",
      "        return Auth::guest();"
    ],
    pemisah: "\n",
    explanation: "Middleware auth:sanctum memvalidasi Bearer Token API dan menyuntikkan pengguna aktif ke objek Request. Keping auth:web keliru karena menggunakan guard session berbasis cookie peramban, bukan token API. Keping Auth::guest() menggoda karena sama-sama helper autentikasi tetapi hanya memeriksa status anonim."
  }
},
        {
          kind: "quiz",
          id: "laravel-7-kuis",
          title: "Kuis: REST API & API Resource",
          questions: [
            {
              id: "l7-q1",
              type: "pilihan-ganda",
              question: "Apakah awalan prefix URL default yang diberikan oleh Laravel untuk semua route yang didaftarkan di dalam berkas `routes/api.php`?",
              choices: [
                "/web/",
                "/api/",
                "/v1/",
                "/rest/"
              ],
              answerIndex: 1,
              explanation: "Semua rute di `routes/api.php` secara otomatis diberi prefix `/api` dan disematkan middleware group `api` (stateless, throttle, dan tanpa verifikasi session CSRF cookie)."
            },
            {
              id: "l7-q2",
              type: "pilihan-ganda",
              question: "Apakah fungsi utama dari kelas Eloquent API Resource di Laravel?",
              choices: [
                "Mengubah struktur data model Eloquent menjadi format respon JSON terstruktur dan terfilter sebelum dikirim ke klien",
                "Mengatur rute URL endpoint API dan membatasi kuota request pengguna per menit",
                "Menjalankan migrasi tabel database secara otomatis saat endpoint API diakses",
                "Menyimpan cache respon API ke dalam memori Redis server"
              ],
              answerIndex: 0,
              explanation: "API Resource bertindak sebagai transformer layer antara model database dan klien API, mencegah bocornya kolom sensitif (seperti password hash) dan menyelaraskan format properti JSON respon."
            },
            {
              id: "l7-q3",
              type: "pilihan-ganda",
              question: "Paket bawaan Laravel apakah yang menyediakan otentikasi API ringan berbasis Personal Access Token (Bearer Token) untuk SPA dan mobile?",
              choices: [
                "Laravel Horizon",
                "Laravel Passport",
                "Laravel Sanctum",
                "Laravel Socialite"
              ],
              answerIndex: 2,
              explanation: "Laravel Sanctum menyediakan sistem otentikasi token sederhana namun kuat untuk SPA, aplikasi mobile, dan API token sederhana. Laravel Passport digunakan untuk arsitektur server OAuth2 lengkap."
            },
            {
              id: "l7-q4",
              type: "pilihan-ganda",
              question: "HTTP Status Code berapakah yang secara standar industri dikembalikan saat operasi pembuatan entitas data baru berhasil di API?",
              choices: [
                "200 OK",
                "204 No Content",
                "301 Moved Permanently",
                "201 Created"
              ],
              answerIndex: 3,
              explanation: "Status `201 Created` menandakan bahwa permintaan berhasil dan entitas sumber daya baru berhasil diciptakan di server. Status `200 OK` umumnya untuk pengambilan atau modifikasi data biasa."
            },
            {
              id: "l7-q5",
              type: "pilihan-ganda",
              question: "Apa yang terjadi jika klien API melebihi batas jumlah request per menit yang diatur oleh middleware Rate Limiting (`throttle:60,1`)?",
              choices: [
                "Server mengembalikan respon 500 Server Error dan memblokir alamat IP pengguna",
                "Server mengabaikan request berlebih tanpa mengirimkan respon apa pun ke klien",
                "Server mengalihkan request secara otomatis ke halaman login utama aplikasi",
                "Server mengembalikan status HTTP 429 Too Many Requests disertai header Retry-After"
              ],
              answerIndex: 3,
              explanation: "Rate Limiting melindungi API dari serangan flooding dan spamming dengan mengembalikan respon status `429 Too Many Requests` jika jumlah permintaan melebihi kuota per menit yang ditentukan."
            }
          ]
        }
      ],
    },
    {
      slug: "fitur-produksi",
      title: "Fitur Produksi",
      description:
        "Queue Async, Task Scheduling, Caching, Notification, dan Observability.",
      topics: [
        "Queue & job: kirim email tanpa bikin user menunggu",
        "Task scheduling (cron)",
        "Cache: config, route, dan data",
        "Mail & notifikasi",
        "Event & listener",
        "Log & debugging production (telescope, pail)",
      ],
      items: [
        {
          kind: "materi",
          id: "laravel-8-m1",
          title: "Skalabilitas Aplikasi: Queue, Task Scheduler, Cache, dan Events",
          body:
            "# Skalabilitas & Fitur Level Produksi\n\n" +
            "Saat aplikasi web berkembang dari ratusan menjadi jutaan pengguna, mengeksekusi seluruh proses secara serempak (*synchronous*) pada saat HTTP request terjadi akan membuat server tidak responsif. Laravel menyediakan alat siap pakai untuk menangani pemrosesan latar belakang (*background jobs*), penjadwalan tugas (*cronjobs*), serta penjelajahan memori (*caching*).\n\n" +
            "## Arsitektur Pemrosesan Latar Belakang (Queue Worker)\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 1. User mendaftar (POST /register) -> Controller memproses data         |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "                                    |\n" +
            "                                    v  (SendEmailJob di-dispatch ke antrean!)\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 2. Controller langsung mengembalikan respon instan \"Registrasi Sukses\" |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "                                    |\n" +
            "                                    v  (Proses Async di Latar Belakang)\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 3. Queue Worker (php artisan queue:work) mengambil SendEmailJob         |\n" +
            "|    dan mengirimkan email konfirmasi tanpa membuat user menunggu.       |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Rujukan Perintah Optimasi & Artisan Produksi\n\n" +
            "| Fitur Produksi | Perintah Artisan Terminal | Keterangan Fungsi |\n" +
            "|---|---|---|\n" +
            "| **Queue Worker** | `php artisan queue:work` | Menjalankan pemroses latar belakang antrean Job. |\n" +
            "| **Task Scheduler** | `php artisan schedule:run` | Mengeksekusi jadwal cronjob otomatis (misal: backup harian). |\n" +
            "| **Optimasi Route Cache** | `php artisan route:cache` | Mengompilasi seluruh route menjadi 1 file cepat. |\n" +
            "| **Optimasi Config Cache** | `php artisan config:cache` | Menggabungkan seluruh file config menjadi 1 file cepat. |\n" +
            "| **Clear All Cache** | `php artisan optimize:clear` | Menghapus seluruh file cache saat terjadi perubahan kode di produksi. |\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan pemesanan di kedai kopi modern. **Proses Synchronous (Tanpa Queue)** seperti kasir yang setelah menerima pembayaranmu, langsung berjalan ke belakang untuk menggiling biji kopi dan menyeduhnya sendiri sementara antrean pembeli di belakangmu mengular panjang. **Proses Asynchronous (Dengan Queue)** seperti kasir yang setelah menerimamu, memberikan kertas nomor antrean (respon instan) lalu mengirimkan tiket pesanan ke bagian baristas di belakang (Queue Worker) untuk diproses tanpa menghentikan pelayanan kasir.\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Lupa Merestart `queue:work` Setelah Deploy:** Pekerja antrean (`php artisan queue:work`) menyimpan kode program di dalam memori RAM. Jika kamu memperbarui kode aplikasi di server tanpa menjalankan `php artisan queue:restart`, pekerja antrean akan tetap mengeksekusi versi kode lama yang usang!\n" +
            "2. **Menggunakan Driver `sync` di Produksi:** Secara default di `.env`, `QUEUE_CONNECTION=sync` yang berarti Job tetap dieksekusi secara synchronous. Di server produksi, ubah ke `database`, `redis`, atau `sqs`.\n" +
            "3. **Lupa Memasang 1 Cronjob Utama di Server OS:** Task Scheduler Laravel (`schedule:run`) membutuhkan tepat **1 baris cronjob utama** di server Linux (`* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1`). Tanpa baris ini, semua jadwal otomatis tidak akan pernah berjalan.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Penguasaan antrean Redis Queue, penanganan pesan Mail/Notification, serta optimasi caching adalah kriteria utama untuk posisi Senior Laravel Developer dan DevOps Engineer.",
        },
        {
  kind: "step",
  id: "laravel-8-1",
  title: "Menulis Logika Pemrosesan di Method Job handle()",
  explanation: "Method `handle(): void` adalah jantung dari sebuah kelas Job yang dieksekusi secara otomatis oleh *queue worker* ketika tugas tersebut diambil dari antrean. Di dalam method ini, seluruh logika intensif — seperti manipulasi file, pemanggilan webhook, atau kalkulasi analitik — dijalankan di proses terpisah di server. Objek Model yang disimpan ke properti publik konstruktor secara otomatis dimuat ulang dari database saat `handle()` berjalan berkat trait `SerializesModels`. Kenapa pemisahan ini penting: jika tugas memakan waktu 10 detik, proses tersebut berjalan di latar belakang tanpa membuat pengguna menunggu di browser. Kapan dipakai: setiap kali membuat tugas latar belakang yang dapat diantrekan (*queueable job*). Jebakan umum: lupa menangani kemungkinan kegagalan di dalam `handle()` — jika model yang sedang diproses ternyata sudah dihapus oleh pengguna lain sebelum job sempat dieksekusi, gunakan `$this->podcast->exists` atau trait `deleteWhenMissingModels`.",
  example: {
    code: "public function handle(): void {\n    $this->order->update(['status' => 'settled']);\n    Log::info('Order settled: ' . $this->order->id);\n}",
    output: "# Log worker antrean di terminal:\n[2026-10-06 09:00:01] Processing: App\\Jobs\\SettleOrder\n[2026-10-06 09:00:02] Processed:  App\\Jobs\\SettleOrder",
    note: "Worker terminal mengeksekusi method handle() secara independen dari siklus web request."
  },
  instruction: "Di dalam kelas Job `ProcessPodcast`, lengkapi method `handle(): void` untuk memperbarui status podcast dengan memanggil `$this->podcast->update(['status' => 'processed']);`.",
  starterCode: "<?php\nnamespace App\\Jobs;\n\nclass ProcessPodcast implements ShouldQueue {\n    public function __construct(public Podcast $podcast) {}\n\n    public function handle(): void {\n        // Proses pembaruan status podcast di sini\n    }\n}",
  language: "text",
  tests: [
    {
      pattern: "public\\s+function\\s+handle\\s*\\(\\s*\\)\\s*:\\s*void",
      message: "Deklarasikan method publik handle dengan tipe balik void."
    },
    {
      pattern: "\\$this->podcast->update\\s*\\(\\s*\\[\\s*['\"]status['\"]\\s*=>\\s*['\"]processed['\"]\\s*\\]\\s*\\);",
      message: "Panggil $this->podcast->update(['status' => 'processed']); di dalam method handle."
    }
  ],
  solution: "<?php\nnamespace App\\Jobs;\n\nclass ProcessPodcast implements ShouldQueue {\n    public function __construct(public Podcast $podcast) {}\n\n    public function handle(): void {\n        $this->podcast->update(['status' => 'processed']);\n    }\n}",
  susunKode: {
    question: "Susun method handle pada kelas Job untuk mengeksekusi pembaruan status podcast di antrean.",
    potongan: [
      "class ProcessPodcast implements ShouldQueue {",
      "    public function handle(): void {",
      "        $this->podcast->update(['status' => 'processed']);",
      "    }",
      "}"
    ],
    pengecoh: [
      "    public function execute(): void {",
      "        $this->podcast->update(['status' => 'pending']);"
    ],
    pemisah: "\n",
    explanation: "Kernel antrean Laravel secara khusus memanggil method bernama handle() saat mengeksekusi job. Keping execute() keliru karena nama method tersebut bukan standar eksekusi Job di Laravel. Keping status pending menggoda tetapi skenario instruksi meminta status processed."
  }
},
        {
          kind: "step",
          id: "laravel-8-2",
          title: "Task Scheduling (Cron Jobs)",
          explanation:
            "Task scheduler memindahkan jadwal tugas berulang dari crontab server ke dalam kodemu: `Schedule::command('backup:run')->daily();` dibaca sebagai satu kalimat, dan seluruh jadwal aplikasi terkumpul di satu berkas yang ikut masuk Git. Kenapa itu jauh lebih baik daripada menulis lima baris crontab: jadwal di crontab tidak terlihat oleh siapa pun yang membaca kode, tidak ikut ter-review, dan hilang saat server diganti. Pilihan iramanya banyak dan terbaca sendiri — `->hourly()`, `->weekly()`, `->everyFiveMinutes()`, `->dailyAt('02:00')`, atau `->cron('0 0 * * *')` bila kamu memang butuh sintaks cron. Bagian yang wajib kamu pahami: Laravel tetap membutuhkan **tepat satu** baris cron di server yang memanggil `php artisan schedule:run` setiap menit; baris itulah yang membangunkan penjadwalnya, lalu Laravel sendiri yang memutuskan tugas mana yang jatuh temponya sekarang. Melewatkan satu baris itu membuat semua jadwalmu tidak pernah berjalan tanpa satu pun pesan kesalahan — gejala paling membingungkan di modul ini. Jebakan berikutnya: tugas yang berjalan lebih lama dari jaraknya sendiri bisa saling tumpang tindih; `->withoutOverlapping()` mencegahnya, dan `->onOneServer()` mencegah tugas yang sama berjalan di beberapa server sekaligus.",
          example: {
            code:
              "// routes/console.php\n" +
              "use Illuminate\\Support\\Facades\\Schedule;\n\n" +
              "Schedule::command('emails:send')->daily();\n" +
              "Schedule::command('reports:build')->hourly()->withoutOverlapping();\n\n" +
              "# satu-satunya baris di crontab server:\n" +
              "* * * * * cd /var/www/toko && php artisan schedule:run >> /dev/null 2>&1",
            output:
              "$ php artisan schedule:list\n" +
              "  0 0 * * *  php artisan emails:send ..... Next Due: 8 hours from now\n" +
              "  0 * * * *  php artisan reports:build ... Next Due: 23 minutes from now\n\n" +
              "$ php artisan schedule:run     # dijalankan pukul 09:15\n" +
              "   INFO  Running scheduled tasks.\n" +
              "  reports:build .................................. RUNNING\n" +
              "  reports:build .............................. 1s DONE\n" +
              "  (emails:send dilewati — belum jatuh tempo)",
            note: "`php artisan schedule:list` menunjukkan kapan setiap tugas akan berjalan berikutnya — pemeriksaan pertama saat sebuah jadwal terasa \"tidak jalan\", sebelum mencurigai server. Catatan jujur: panel latihan tidak menjalankan terminal maupun Laravel, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Perintah artisan kustom bernama `backup:run` sudah tersedia di proyekmu. Daftarkan jadwal agar perintah itu dijalankan otomatis sekali setiap hari, memakai facade penjadwal Laravel.",
          starterCode:
            "<?php\nuse Illuminate\\Support\\Facades\\Schedule;\n\n// Daftarkan jadwalnya di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Schedule::command\\s*\\(\\s*['\"]backup:run['\"]\\s*\\)",
              message:
                "Penjadwalan perintah artisan memakai `Schedule::command()` dengan nama perintahnya sebagai teks — ditulis tanpa awalan `php artisan`, karena Laravel yang menjalankannya sendiri. Untuk menjadwalkan fungsi (bukan perintah artisan) ada `Schedule::call()`.",
            },
            {
              pattern: "->\\s*(daily|dailyAt)\\s*\\(",
              message:
                "Iramanya dirantai setelah pemanggilan perintahnya. Untuk sekali sehari, namanya satu kata bahasa Inggris yang berarti \"harian\" — varian `dailyAt('02:00')` dipakai bila jamnya perlu ditentukan. Tanpa irama apa pun, jadwalnya tidak pernah jatuh tempo.",
            },
          ],
          solution:
            "<?php\nuse Illuminate\\Support\\Facades\\Schedule;\n\nSchedule::command('backup:run')->daily();",
          susunKode: {
            question:
              "Susun penjadwalan perintah backup:run yang dijalankan otomatis setiap hari menggunakan Facade Schedule.",
            potongan: [
              "<?php",
              "use Illuminate\\Support\\Facades\\Schedule;",
              "Schedule::command('backup:run')->daily();",
            ],
            pengecoh: [
              "Schedule::call('backup:run')->everyDay();",
              "Schedule::run('backup:run')->daily();",
            ],
            pemisah: "\n",
            explanation:
              "Schedule::command('backup:run')->daily() menjadwalkan perintah terminal Artisan untuk berjalan sekali sehari. Keping Schedule::call keliru karena call() digunakan untuk mengeksekusi closure PHP. Keping everyDay() keliru nama metode frekuensi.",
          },
        },
        {
          kind: "step",
          id: "laravel-8-3",
          title: "Optimasi Cache Production",
          explanation:
            "Di setiap permintaan, Laravel biasanya membaca puluhan berkas konfigurasi dan seluruh berkas route dari disk. `php artisan config:cache` dan `route:cache` memampatkan semuanya menjadi satu berkas PHP terkompilasi, sehingga pekerjaan itu dilakukan sekali saat deploy — bukan berulang setiap kali ada pengunjung. Kenapa perintahnya tidak dijalankan di lokal: begitu cache terbentuk, perubahan pada `.env` dan berkas route **tidak terbaca lagi** sampai cache-nya dibersihkan, dan itu membuat pengembangan terasa seperti kodemu tidak berpengaruh apa-apa. Konsekuensi terpenting dari `config:cache` sudah kamu temui di modul Fundamental: `.env` berhenti dibaca sama sekali, sehingga setiap `env()` di luar folder `config/` mengembalikan `null`. Itulah asal-usul keluhan klasik \"jalan sempurna di laptop, rusak di server\" — dan penyebabnya bukan servernya, melainkan satu pemanggilan `env()` yang tertinggal di Controller. Kapan dijalankan: sebagai bagian dari skrip deploy, sesudah kode baru masuk. Kalau ragu atau ada yang aneh setelah deploy, `php artisan optimize:clear` menghapus seluruh cache sekaligus.",
          example: {
            code: "# Di terminal server produksi, sebagai bagian dari skrip deploy:\nphp artisan config:cache\nphp artisan route:cache",
            output:
              "   INFO  Configuration cached successfully.\n" +
              "   INFO  Routes cached successfully.\n\n" +
              "# berkas yang terbentuk:\n" +
              "bootstrap/cache/config.php\n" +
              "bootstrap/cache/routes-v7.php\n\n" +
              "# efeknya pada waktu booting (diukur dengan `php artisan route:list --json`):\n" +
              "sebelum : 187 ms\n" +
              "sesudah :  41 ms\n\n" +
              "# efek samping yang wajib diingat, di dalam Controller:\n" +
              "env('APP_NAME')      ->  NULL\n" +
              "config('app.name')   ->  \"BiLearn\"",
            note: "Dua baris terakhir adalah alasan aturan \"env() hanya di dalam folder config/\" itu ada. Catatan jujur: panel latihan tidak menjalankan terminal, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah perintah yang kamu tulis.",
          },
          instruction:
            "Kamu sedang menyusun langkah deploy ke server produksi. Tulis satu perintah Artisan yang memampatkan seluruh berkas konfigurasi menjadi satu berkas cache supaya booting aplikasi lebih cepat.",
          starterCode: "# Tulis satu perintah deploy di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+\\w+:cache",
              message:
                "Perintah optimasi produksi berpola `php artisan <bagian>:cache`. Jalankan lewat artisan, bukan lewat composer maupun npm.",
            },
            {
              pattern: "\\bconfig:cache\\b",
              message:
                "Bagian yang dimampatkan di sini adalah berkas-berkas di folder `config/`, jadi nama bagiannya sama dengan nama folder itu. Perintah saudaranya `route:cache` mengurus berkas route, dan `view:cache` mengurus Blade — ketiganya biasa dijalankan berurutan saat deploy.",
            },
          ],
          solution: "php artisan config:cache",
          susunKode: {
            question:
              "Rangkai perintah Artisan untuk menggabungkan seluruh file konfigurasi ke dalam satu berkas cache produksi.",
            potongan: [
              "php",
              "artisan",
              "config:cache",
            ],
            pengecoh: [
              "cache:config",
              "config:clear-cache",
            ],
            pemisah: " ",
            explanation:
              "Perintah config:cache memuat seluruh opsi konfigurasi aplikasi ke dalam satu file terkompilasi demi kecepatan akses produksi. Keping cache:config keliru susunan kata perintah Artisan. Keping config:clear-cache keliru sub-perintah.",
          },
        },
        {
  kind: "step",
  id: "laravel-8-4",
  title: "Mendefinisikan Envelope & Subject di Mailable",
  explanation: "Sejak Laravel 9 dan 10, arsitektur kelas Mailable diperbarui menggunakan metode deklaratif modern: `envelope()` untuk mengonfigurasi metadata email (subjek, pengirim, tag), `content()` untuk menentukan template tampilan Blade, dan `attachments()` untuk berkas lampiran. Method `envelope(): Envelope` mengembalikan instansiasi kelas `Envelope` yang membawa argumen bernama (*named argument*) `subject: '...'`. Kenapa pendekatan baru ini disukai: kode menjadi sangat bersih, tidak lagi mencampuradukkan konfigurasi SMTP header dengan perenderan HTML, dan sepenuhnya mematuhi prinsip tanggung jawab tunggal (*Single Responsibility*). Kapan dipakai: pada seluruh pembuatan kelas email transaksional modern. Jebakan umum: masih menggunakan method `build()` kuno gaya Laravel 8 — meskipun masih didukung demi kompatibilitas lama, template Mailable modern bawaan Artisan kini sepenuhnya menggunakan `envelope()` dan `content()`.",
  example: {
    code: "public function envelope(): Envelope {\n    return new Envelope(\n        subject: 'Selamat Datang di Layanan Kami',\n    );\n}",
    output: "# Metadata email yang dihasilkan di header SMTP:\nSubject: Selamat Datang di Layanan Kami\nFrom: halo@bilearn.id",
    note: "Kelas Envelope menyusun header subjek dan pengirim secara terpisah dari konten isi pesan."
  },
  instruction: "Di dalam kelas Mailable `InvoiceMail`, lengkapi method `envelope(): Envelope` agar mengembalikan objek `Envelope` baru dengan subjek `'Tagihan Pembayaran Pesanan'`.",
  starterCode: "<?php\nnamespace App\\Mail;\nuse Illuminate\\Mail\\Mailables\\Envelope;\n\nclass InvoiceMail extends Mailable {\n    public function envelope(): Envelope {\n        // Kembalikan Envelope baru dengan subjek di sini\n    }\n}",
  language: "text",
  tests: [
    {
      pattern: "public\\s+function\\s+envelope\\s*\\(\\s*\\)\\s*:\\s*Envelope",
      message: "Deklarasikan method envelope dengan return type Envelope."
    },
    {
      pattern: "return\\s+new\\s+Envelope\\s*\\(\\s*subject:\\s*['\"]Tagihan Pembayaran Pesanan['\"]",
      message: "Kembalikan new Envelope(subject: 'Tagihan Pembayaran Pesanan')."
    }
  ],
  solution: "<?php\nnamespace App\\Mail;\nuse Illuminate\\Mail\\Mailables\\Envelope;\n\nclass InvoiceMail extends Mailable {\n    public function envelope(): Envelope {\n        return new Envelope(\n            subject: 'Tagihan Pembayaran Pesanan',\n        );\n    }\n}",
  susunKode: {
    question: "Susun method envelope pada Mailable InvoiceMail untuk menentukan subjek pesan.",
    potongan: [
      "    public function envelope(): Envelope {",
      "        return new Envelope(",
      "            subject: 'Tagihan Pembayaran Pesanan',",
      "        );",
      "    }"
    ],
    pengecoh: [
      "    public function build() {",
      "            title: 'Tagihan Pembayaran Pesanan',"
    ],
    pemisah: "\n",
    explanation: "Arsitektur Mailable modern di Laravel menggunakan method envelope() untuk mengonfigurasi subjek. Keping build() keliru karena itu adalah sintaks lawas Laravel 8. Keping title menggoda karena terdengar sinonim dengan subjek, tetapi nama parameter resmi pada konstruktor Envelope adalah subject."
  }
},
        {
  kind: "step",
  id: "laravel-8-5",
  title: "Mentrigger Event di Logika Bisnis (Event::dispatch)",
  explanation: "Arsitektur berbasis kejadian (*Event-Driven Architecture*) memisahkan aksi inti dari dampak ikutannya. Saat pesanan berhasil diproses, alih-alih memanggil pengiriman email, pemotongan stok, dan pembuatan invoice langsung di Controller secara beruntun, kamu cukup memicu kejadian `OrderProcessed::dispatch($order)`. Berbagai Listener independen dapat didaftarkan untuk mendengarkan kejadian tersebut dan berjalan secara asinkron di antrean tanpa memperlambat alur utama. Kenapa ini standar arsitektur tingkat lanjut: sistem menjadi sangat fleksibel dan modular — kamu bisa menambah fitur baru (seperti kirim notifikasi WhatsApp) hanya dengan membuat Listener baru tanpa menyentuh satu baris pun kode Controller yang sudah ada. Kapan dipakai: pada peristiwa penting aplikasi seperti `UserRegistered`, `OrderProcessed`, atau `PaymentFailed`. Jebakan umum: menaruh logika berat langsung di dalam konstruktor Event — kelas Event harus murni berfungsi sebagai kurir data pembawa instans model.",
  example: {
    code: "use App\\Events\\UserRegistered;\n\n$user = User::create($data);\nUserRegistered::dispatch($user);",
    output: "# Listener yang otomatis aktif saat event dipicu:\n1. SendWelcomeNotification -> dikirim\n2. CreateDefaultProfile    -> dibuat\n3. NotifyAdminSlack        -> terkirim",
    note: "Event mendistribusikan satu aksi ke banyak listener secara terpisah."
  },
  instruction: "Picu event `OrderProcessed` dengan membawa objek `$order` menggunakan metode dispatching statis pada kelas Event.",
  starterCode: "<?php\nuse App\\Events\\OrderProcessed;\n\n// Picu event OrderProcessed di sini\n",
  language: "text",
  tests: [
    {
      pattern: "OrderProcessed::dispatch\\s*\\(\\s*\\$order\\s*\\);",
      message: "Panggil metode statis OrderProcessed::dispatch($order) untuk memicu event."
    }
  ],
  solution: "<?php\nuse App\\Events\\OrderProcessed;\n\nOrderProcessed::dispatch($order);",
  susunKode: {
    question: "Susun pemanggilan event OrderProcessed menggunakan metode dispatch.",
    potongan: [
      "OrderProcessed::",
      "dispatch($order);"
    ],
    pengecoh: [
      "OrderEvent::",
      "fire($order);"
    ],
    pemisah: "",
    explanation: "Metode statis ::dispatch($order) adalah sintaks modern untuk memicu event di Laravel. Keping OrderEvent keliru karena nama kelas event adalah OrderProcessed. Keping ::fire menggoda karena merupakan sintaks usang Laravel lawas yang sudah ditinggalkan."
  }
},
        {
  kind: "step",
  id: "laravel-8-6",
  title: "Mencatat Log Aplikasi dengan Konteks Data (Facade Log)",
  explanation: "Mencatat aktivitas dan kegagalan aplikasi menggunakan Facade `Log::warning('pesan', ['konteks' => $data])` adalah standar observabilitas sistem di lingkungan produksi. Berbeda dari fungsi `error_log()` biasa, sistem logging Laravel berbasis pustaka Monolog yang mendukung level keparahan standar RFC 5424 (debug, info, notice, warning, error, critical, alert, emergency) dan saluran penyimpanan beragam (file harian, Slack, Papertrail, Sentry). Mengoper array asosiatif sebagai argumen kedua menambahkan metadata berharga sehingga developer dapat melacak pengguna atau transaksi mana yang mengalami masalah tanpa menebak-nebak. Kenapa ini wajib di dunia kerja: aplikasi tanpa log terstruktur ibarat mengemudi mobil di malam hari dengan lampu mati saat terjadi insiden di server. Kapan dipakai: saat terjadi pengecualian (*exception catch*), kegagalan pembayaran, atau peristiwa audit penting. Jebakan umum: memasukkan data sensitif seperti nomor kartu kredit atau password plaintext ke dalam konteks log.",
  example: {
    code: "use Illuminate\\Support\\Facades\\Log;\n\nLog::error('Koneksi payment gateway timeout', [\n    'gateway' => 'midtrans',\n    'invoice' => 'INV-2026-001',\n]);",
    output: "# Catatan di storage/logs/laravel-2026-10-06.log:\n[2026-10-06 09:15:00] local.ERROR: Koneksi payment gateway timeout {\"gateway\":\"midtrans\",\"invoice\":\"INV-2026-001\"}",
    note: "Array konteks otomatis diformat menjadi JSON terstruktur oleh formatter Monolog."
  },
  instruction: "Catat sebuah log tingkat peringatan (`warning`) dengan pesan `'Percobaan pembayaran gagal'` beserta konteks array `['order_id' => $order->id]` menggunakan Facade `Log`.",
  starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Log;\n\n// Catat log warning dengan context order_id di sini\n",
  language: "text",
  tests: [
    {
      pattern: "Log::warning\\s*\\(\\s*['\"]Percobaan pembayaran gagal['\"]\\s*,\\s*\\[\\s*['\"]order_id['\"]\\s*=>\\s*\\$order->id\\s*\\]\\s*\\);",
      message: "Panggil Log::warning('Percobaan pembayaran gagal', ['order_id' => $order->id]);."
    }
  ],
  solution: "<?php\nuse Illuminate\\Support\\Facades\\Log;\n\nLog::warning('Percobaan pembayaran gagal', ['order_id' => $order->id]);",
  susunKode: {
    question: "Susun pencatatan log tingkat warning dengan data konteks order_id menggunakan Facade Log.",
    potongan: [
      "Log::warning(",
      "'Percobaan pembayaran gagal', ['order_id' => $order->id]);"
    ],
    pengecoh: [
      "Log::info(",
      "'Percobaan pembayaran gagal');"
    ],
    pemisah: "",
    explanation: "Log::warning mencatat peristiwa bermasalah dengan tingkat keparahan peringatan dan mendukung array konteks pelengkap. Keping Log::info keliru karena tingkat info hanya untuk kejadian normal. Keping tanpa konteks array menggoda tetapi melewatkan metadata order_id yang diminta instruksi."
  }
},
        {
  kind: "step",
  id: "laravel-8-7",
  title: "Mendispatch Antrean Job Asinkron (dispatch)",
  explanation: "Metode statis `JobClass::dispatch($data)` mendorong tugas pemrosesan berat ke dalam antrean (*queue*) di latar belakang, sehingga siklus respon HTTP kepada pengguna selesai seketika tanpa terhambat. Data objek yang dioper ke method `dispatch()` akan diserialisasi ke dalam tabel basis data atau antrean Redis, untuk kemudian dieksekusi secara asinkron oleh proses pekerja (*queue worker*). Kenapa ini krusial di dunia kerja: operasi lambat seperti konversi video, ekspor spreadsheet ribuan baris, atau integrasi pihak ketiga tidak boleh membuat peramban pengguna menunggu berputar (*loading*). Kapan dipakai: pada seluruh proses latar belakang yang memakan waktu lebih dari beberapa ratus milidetik. Jebakan umum: mengoper objek Model Eloquent yang sangat besar ke constructor Job — sebaiknya oper hanya instans Model biasa karena Laravel otomatis merampingkannya menjadi ID lewat trait `SerializesModels`.",
  example: {
    code: "use App\\Jobs\\SendWelcomeEmail;\n\nSendWelcomeEmail::dispatch($user);\nreturn response()->json(['message' => 'Registrasi berhasil']);",
    output: "# Respon HTTP ke browser pengguna:\nSelesai dalam 14ms (user tidak merasakan jeda pengiriman email)\n\n# Terminal worker queue:\n[2026-10-06 08:10:00][Job-42] Processing: App\\Jobs\\SendWelcomeEmail\n[2026-10-06 08:10:03][Job-42] Processed:  App\\Jobs\\SendWelcomeEmail",
    note: "Job langsung masuk antrean dan dieksekusi di proses terminal terpisah."
  },
  instruction: "Kirimkan job `ProcessPodcast` ke dalam sistem antrean latar belakang dengan membawa objek `$podcast` menggunakan metode dispatching statis.",
  starterCode: "<?php\nuse App\\Jobs\\ProcessPodcast;\n\n// Kirim job ke antrean di sini\n",
  language: "text",
  tests: [
    {
      pattern: "use\\s+App\\\\Jobs\\\\ProcessPodcast;",
      message: "Impor kelas Job dengan deklarasi use App\\Jobs\\ProcessPodcast;."
    },
    {
      pattern: "ProcessPodcast::\\s*dispatch\\s*\\(\\s*\\$podcast\\s*\\);",
      message: "Panggil metode statis ProcessPodcast::dispatch($podcast) untuk mengirim job ke antrean."
    }
  ],
  solution: "<?php\nuse App\\Jobs\\ProcessPodcast;\n\nProcessPodcast::dispatch($podcast);",
  susunKode: {
    question: "Susun pengiriman job ProcessPodcast ke antrean asinkron.",
    potongan: [
      "use App\\Jobs\\ProcessPodcast;",
      "ProcessPodcast::",
      "dispatch($podcast);"
    ],
    pengecoh: [
      "use App\\Events\\ProcessPodcast;",
      "handle($podcast);"
    ],
    pemisah: "\n",
    explanation: "Metode statis dispatch pada kelas Job mengirim tugas ke antrean pemrosesan asinkron di latar belakang. Keping App\\Events keliru karena namespace Events untuk pola kejadian, bukan antrean pekerjaan. Keping handle($podcast) menggoda karena itu nama method pelaksananya, tetapi memanggilnya langsung akan mengeksekusi secara sinkron."
  }
},
{
  kind: "step",
  id: "laravel-8-8",
  title: "Menyimpan Cache Data Kueri dengan Cache::remember",
  explanation: "`Cache::remember('kunci', $durasi, closure)` adalah metode serbaguna untuk mengambil data dari memori cache berkecepatan tinggi (seperti Redis atau Memcached). Jika kunci cache sudah tersedia, datanya langsung dikembalikan tanpa menyentuh database; namun jika kuncinya belum ada (*cache miss*), closure akan dieksekusi untuk mengambil data dari database, hasilnya otomatis disimpan ke cache selama durasi yang ditentukan dalam satuan detik, lalu dikembalikan ke aplikasi. Kenapa fitur ini wajib di produksi: kueri berat yang diakses ribuan pengguna bersamaan (seperti katalog beranda) akan membebani database jika tidak dicache. Kapan dipakai: untuk data kueri yang sering dibaca tetapi jarang berubah. Jebakan umum: lupa menghapus cache dengan `Cache::forget('kunci')` saat ada perubahan data di tabel terkait, sehingga pengguna tetap melihat data usang (*stale data*).",
  example: {
    code: "use App\\Models\\Category;\nuse Illuminate\\Support\\Facades\\Cache;\n\n$categories = Cache::remember('all_categories', 86400, fn() => Category::all());",
    output: "# Akses pertama (Cache MISS):\nDatabase query dieksekusi -> waktu respon 65ms\n\n# Akses kedua dan seterusnya (Cache HIT):\nData dibaca instan dari Redis memori -> waktu respon 1.5ms",
    note: "Beban query ke database berkurang drastis dengan adanya lapisan cache memori."
  },
  instruction: "Gunakan `Cache::remember` untuk menyimpan hasil query produk terlaris dengan kunci `'top_products'` selama `3600` detik. Jika cache belum ada, jalankan closure yang mengambil `Product::popular()->get()`.",
  starterCode: "<?php\nuse App\\Models\\Product;\nuse Illuminate\\Support\\Facades\\Cache;\n\n// Ambil atau simpan cache produk terlaris di sini\n",
  language: "text",
  tests: [
    {
      pattern: "Cache::remember\\s*\\(\\s*['\"]top_products['\"]\\s*,\\s*3600\\s*,\\s*(function|fn)",
      message: "Panggil Cache::remember dengan kunci 'top_products', durasi 3600 detik, dan closure kueri."
    },
    {
      pattern: "Product::popular\\(\\)->get\\(\\)",
      message: "Jalankan Product::popular()->get() di dalam closure cadangan cache."
    }
  ],
  solution: "<?php\nuse App\\Models\\Product;\nuse Illuminate\\Support\\Facades\\Cache;\n\n$products = Cache::remember('top_products', 3600, function () {\n    return Product::popular()->get();\n});",
  susunKode: {
    question: "Susun query caching data produk populer selama satu jam menggunakan Cache::remember.",
    potongan: [
      "$products = Cache::remember(",
      "    'top_products',",
      "    3600,",
      "    function () {",
      "        return Product::popular()->get();",
      "    }",
      ");"
    ],
    pengecoh: [
      "$products = Cache::forever(",
      "        return Product::all();"
    ],
    pemisah: "\n",
    explanation: "Cache::remember membaca data dari cache atau mengeksekusi closure kueri selama durasi waktu dalam detik. Keping Cache::forever keliru karena menyimpan data secara permanen tanpa durasi kedaluwarsa. Keping Product::all() menggoda karena mengambil data produk tetapi mengabaikan scope popular yang diminta."
  }
},
{
  kind: "step",
  id: "laravel-8-9",
  title: "Mengirim Email Transaksional via Facade Mail",
  explanation: "Facade `Mail::to($penerima)->send(new MailableClass($data))` adalah antarmuka resmi Laravel untuk mengirimkan email HTML dan notifikasi transaksional melalui driver SMTP, Mailgun, Postmark, atau Amazon SES. Kelas Mailable merangkum data dan tampilan Blade email, sedangkan Facade Mail mengelola koneksi soket jaringan ke penyedia pengirim email. Kenapa ini standar industri: template email terpisah dari logika bisnis Controller, pengujian dapat dimock tanpa mengirim email sungguhan, dan pengiriman dapat dialihkan ke antrean asinkron hanya dengan mengganti method `->send()` menjadi `->queue()`. Kapan dipakai: pada notifikasi registrasi, tagihan faktur, konfirmasi pesanan, dan tautan reset kata sandi. Jebakan umum: mencoba mengirim email langsung di thread web sinkron pada server yang koneksi SMTP-nya lambat — halaman web pengguna akan membeku selama 3–5 detik menunggu respon dari server mail.",
  example: {
    code: "use App\\Mail\\WelcomeMail;\nuse Illuminate\\Support\\Facades\\Mail;\n\nMail::to('member@bilearn.id')->send(new WelcomeMail());",
    output: "# Log pengiriman email di storage/logs/laravel.log (driver: log):\n[2026-10-06 08:20:00] local.INFO: Sent message: Welcome to BiLearn to member@bilearn.id",
    note: "Seluruh konfigurasi kredensial SMTP dikelola terpusat di berkas .env dan config/mail.php."
  },
  instruction: "Kirim email tagihan kepada penerima `$user` menggunakan Facade `Mail` dengan menginstansiasi Mailable `InvoiceMail` yang membawa objek `$order`.",
  starterCode: "<?php\nuse App\\Mail\\InvoiceMail;\nuse Illuminate\\Support\\Facades\\Mail;\n\n// Kirim email tagihan ke pengguna di sini\n",
  language: "text",
  tests: [
    {
      pattern: "use\\s+App\\\\Mail\\\\InvoiceMail;",
      message: "Impor kelas Mailable dengan deklarasi use App\\Mail\\InvoiceMail;."
    },
    {
      pattern: "Mail::to\\s*\\(\\s*\\$user\\s*\\)",
      message: "Tentukan penerima email dengan memanggil Mail::to($user)."
    },
    {
      pattern: "->send\\s*\\(\\s*new\\s+InvoiceMail\\s*\\(\\s*\\$order\\s*\\)\\s*\\);",
      message: "Rantaikan metode ->send(new InvoiceMail($order)) untuk mengeksekusi pengiriman email."
    }
  ],
  solution: "<?php\nuse App\\Mail\\InvoiceMail;\nuse Illuminate\\Support\\Facades\\Mail;\n\nMail::to($user)->send(new InvoiceMail($order));",
  susunKode: {
    question: "Susun perintah pengiriman email tagihan menggunakan Mail::to dan Mailable InvoiceMail.",
    potongan: [
      "use App\\Mail\\InvoiceMail;",
      "Mail::to($user)",
      "    ->send(new InvoiceMail($order));"
    ],
    pengecoh: [
      "use App\\Notifications\\InvoiceMail;",
      "    ->queue(new InvoiceMail());"
    ],
    pemisah: "\n",
    explanation: "Facade Mail::to mengarahkan pengiriman email ke pengguna dan method send mengeksekusi pengiriman Mailable. Keping App\\Notifications keliru karena Mailable berada di namespace App\\Mail. Keping tanpa argumen order menggoda tetapi objek pesanan wajib dioper ke konstruktor mailable agar invoice memiliki data."
  }
},
        {
          kind: "quiz",
          id: "laravel-8-kuis",
          title: "Kuis: Queue, Task Scheduler, & Performa Produksi",
          questions: [
            {
              id: "l8-q1",
              type: "pilihan-ganda",
              question: "Apakah keuntungan utama memindahkan proses pengiriman email ke dalam Queue Job di Laravel?",
              choices: [
                "Menghindari biaya kuota pengiriman email dari penyedia layanan SMTP",
                "Pengguna mendapatkan respon HTTP secara instan tanpa terhambat oleh proses koneksi lambat ke server SMTP email",
                "Memastikan email otomatis tersimpan di tabel log tanpa benar-benar dikirimkan",
                "Menghapus antrean tugas yang gagal secara otomatis tanpa notifikasi"
              ],
              answerIndex: 1,
              explanation: "Koneksi ke server SMTP email dapat memakan waktu 1–3 detik. Memindahkannya ke antrean (Queue) memungkinkan respon HTTP kembali ke pengguna seketika, sementara pengiriman email diproses di latar belakang oleh queue worker."
            },
            {
              id: "l8-q2",
              type: "pilihan-ganda",
              question: "Perintah Artisan apakah yang harus selalu berjalan sebagai daemon di latar belakang server untuk memproses pekerjaan di antrean Queue?",
              choices: [
                "php artisan queue:work",
                "php artisan job:dispatch",
                "php artisan schedule:run",
                "php artisan queue:listen --once"
              ],
              answerIndex: 0,
              explanation: "`php artisan queue:work` adalah proses worker daemon yang terus berjalan mengambil dan mengeksekusi job dari antrean. Di lingkungan server produksi, proses ini umumnya diawasi oleh process manager seperti Supervisor."
            },
            {
              id: "l8-q3",
              type: "pilihan-ganda",
              question: "Mengapa kamu harus menjalankan `php artisan queue:restart` setelah melakukan deploy pembaruan kode baru di server produksi?",
              choices: [
                "Untuk menghapus seluruh riwayat data job yang tersimpan di basis data",
                "Untuk mengaktifkan mode pemeliharaan (maintenance mode) secara otomatis",
                "Untuk mereset password koneksi database driver antrean aplikasi",
                "Karena queue worker menyimpan kode lama di memori RAM, sehingga worker perlu diinstruksikan berhenti agar dimuat ulang dengan versi kode terbaru"
              ],
              answerIndex: 3,
              explanation: "`queue:work` adalah proses jangka panjang yang menyimpan kode aplikasi di RAM. Tanpa `queue:restart`, worker akan terus mengeksekusi versi kode lama meskipun file di server sudah diperbarui via git pull."
            },
            {
              id: "l8-q4",
              type: "pilihan-ganda",
              question: "Berapa banyak baris entri cronjob sistem operasi Linux yang wajib didaftarkan di server untuk menjalankan seluruh Task Scheduler Laravel?",
              choices: [
                "Satu baris per jam untuk setiap perintah Artisan yang ingin dijadwalkan",
                "Satu baris terpisah untuk setiap Controller dan Model di aplikasi",
                "Tepat 1 baris cronjob utama yang memanggil php artisan schedule:run setiap menit",
                "Tidak memerlukan entri cronjob sama sekali karena PHP berjalan otomatis di background"
              ],
              answerIndex: 2,
              explanation: "Laravel mengonsolidasikan seluruh penjadwalan ke dalam tepat 1 entri cron OS Linux: `* * * * * cd /path-to-project && php artisan schedule:run >> /dev/null 2>&1`. Framework yang akan mengevaluasi tugas mana yang jatuh tempo."
            },
            {
              id: "l8-q5",
              type: "pilihan-ganda",
              question: "Perintah Artisan apakah yang digunakan untuk menggabungkan seluruh berkas konfigurasi menjadi 1 berkas cache cepat di lingkungan produksi?",
              choices: [
                "php artisan config:cache",
                "php artisan make:config",
                "composer config-optimize",
                "php artisan optimize:env"
              ],
              answerIndex: 0,
              explanation: "`php artisan config:cache` menggabungkan seluruh berkas di folder `config/` menjadi satu berkas cache terkompilasi, mempercepat proses booting aplikasi di server produksi secara signifikan."
            }
          ]
        }
      ],
    },
    {
      slug: "testing-laravel",
      title: "Testing dengan Pest",
      description:
        "Automated Testing Modern dengan Pest PHP, Feature Test, dan Mocking.",
      topics: [
        "Pest: sintaks & struktur test",
        "Feature test: HTTP request & assert response",
        "Database test: RefreshDatabase & factory",
        "Menguji auth & otorisasi",
        "Mock service eksternal",
        "Test apa yang penting duluan (happy path + validasi)",
      ],
      items: [
        {
          kind: "materi",
          id: "laravel-9-m1",
          title: "Automated Testing Modern di Laravel Menggunakan Pest PHP",
          body:
            "# Pengujian Otomatis (*Automated Testing*) di Laravel\n\n" +
            "**Automated Testing** adalah praktik menuliskan kode program khusus yang bertugas menguji apakah kode aplikasi kamu berjalan sesuai spesifikasi tanpa perlu melakukan pengujian manual klik-tombol berulang kali di browser.\n\n" +
            "**Pest PHP** adalah *testing framework* modern yang dibangun di atas PHPUnit dengan sintaks *expressive*, bersih, dan sangat menyenangkan untuk dibaca. Pest kini menjadi pilihan standar utama di ekosistem Laravel.\n\n" +
            "## Jenis Pengujian Utama\n\n" +
            "- **Unit Test:** Menguji 1 fungsi atau metode kecil secara terisolasi tanpa menyentuh database atau jaringan.\n" +
            "- **Feature Test (Integration Test):** Menguji alur kerja penuh dari request HTTP masuk, pemeriksaan validasi, interaksi database, hingga respon balik HTML/JSON.\n\n" +
            "## Siklus Pengujian Database & Mocking\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 1. Pest menjalankan file test (contoh: tests/Feature/ProductTest.php)   |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "                                    |\n" +
            "                                    v  (uses(RefreshDatabase::class))\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 2. Database pengujian (SQLite in-memory) di-reset ke kondisi bersih     |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "                                    |\n" +
            "                                    v  (Http::fake() memalsukan API luar)\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 3. Simulasikan HTTP Request -> $this->get('/products')->assertOk();     |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Rujukan Sintaks Pest PHP Utama\n\n" +
            "| Metode Assert / Test | Contoh Kode Pest | Keterangan Fungsi |\n" +
            "|---|---|---|\n" +
            "| **Uji GET Request** | `$this->get('/about')->assertStatus(200);` | Menguji apakah URL /about mengembalikan status HTTP 200 OK. |\n" +
            "| **Uji POST Request** | `$this->post('/login', $data)->assertRedirect('/dashboard');` | Menguji pengiriman form POST dan verifikasi pengalihan URL. |\n" +
            "| **Uji Simpan Database** | `$this->assertDatabaseHas('users', ['email' => 'bimo@example.com']);` | Memeriksa apakah baris data benar-benar tersimpan di tabel. |\n" +
            "| **Simulasi Auth User** | `$this->actingAs($user)->get('/profile');` | Mensimulasikan kondisi pengguna yang sudah terautentikasi (login). |\n" +
            "| **Mocking API Luar** | `Http::fake(['api.payment.com/*' => Http::response([], 200)]);` | Memalsukan respon API pihak ketiga agar test tidak melakukan request jaringan asli. |\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Bayangkan **Pest Testing** seperti robot penguji keselamatan tabrakan (*crash test dummy*) di pabrik otomotif: sebelum mobil baru dijual ke pengguna umum, robot akan menyimulasikan ratusan benturan dan mengukur kekuatan rem secara otomatis dalam hitungan detik. **`RefreshDatabase`** seperti menekan tombol *reset* simulasi komputer agar setiap pengujian mobil baru dimulai di jalanan yang benar-benar bersih tanpa ada puing bekas tabrakan sebelumnya. **`Http::fake()`** seperti simulator penerbangan pilot: penerbang berlatih menangani cuaca buruk di ruangan simulator tanpa perlu menaruh pesawat sungguhan dalam bahaya.\n\n" +
            "## Jebakan & Kesalahan Umum Pemula\n\n" +
            "1. **Menguji di Database Produksi:** Lupa mengonfigurasi berkas `phpunit.xml` atau `.env.testing`. Pastikan variabel `DB_CONNECTION=sqlite` dan `DB_DATABASE=:memory:` aktif di `phpunit.xml` agar pengujian berjalan di memori tanpa merusak database pengembangan lokal.\n" +
            "2. **Lupa `uses(RefreshDatabase::class)`:** Jika tidak menggunakan trait `RefreshDatabase`, data dummy hasil pengujian pertama akan tertinggal di database dan menyebabkan pengujian kedua gagal (*test pollution*).\n" +
            "3. **Menguji Semua Detail Kecil:** Terjebak menguji kode bawaan framework (seperti menguji apakah router Laravel bekerja). Berfokuslah menguji **Happy Path logika bisnismu sendiri**, validasi masukan, dan otorisasi hak akses.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Penerapan *Test-Driven Development* (TDD) dan tersedianya pengujian otomatis (*CI/CD Pipeline*) yang hijau adalah syarat mutlak saat bekerja di perusahaan teknologi berskala global.",
        },
        {
          kind: "step",
          id: "laravel-9-1",
          title: "Testing Modern dengan Pest PHP",
          explanation:
            "Pest menulis test sebagai pemanggilan fungsi biasa: `test('judulnya', function () { ... })` — tanpa kelas dan tanpa method, dengan judul berupa kalimat bahasa manusia. Kenapa gaya ini yang menang di ekosistem Laravel: laporan kegagalan yang berbunyi `halaman about ok` langsung memberi tahu perilaku apa yang rusak, sementara nama method `test_about_page_returns_200` harus diterjemahkan dulu di kepala. Kapan test pertama ditulis: sebelum sebuah fitur dianggap selesai — dan untuk aplikasi web, mulailah dari feature test yang membuka satu halaman, karena di situ route, middleware, dan Controller teruji sekaligus. Fungsi `it()` adalah alias resmi `test()`, jadi keduanya sah; yang menyulitkan justru mencampur gaya PHPUnit (`class ... extends TestCase`) di berkas yang sama. Jebakan yang paling sering: test tanpa satu pun assertion selalu \"lulus\" sehingga tidak menjaga apa pun — Pest menandainya *risky*, tetapi peringatan itu mudah terlewat.",
          example: {
            code: "test('halaman utama dapat diakses', function () {\n    $this->get('/')->assertStatus(200);\n});",
            output:
              "   PASS  Tests\\Feature\\HomeTest\n" +
              "  ✓ halaman utama dapat diakses                        0.42s\n\n" +
              "  Tests:    1 passed (1 assertions)\n" +
              "  Duration: 0.51s",
            note: "Jalankan perintah vendor/bin/pest atau php artisan test di terminal untuk mengeksekusi test. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Berkas `tests/Feature/AboutTest.php` masih kosong. Tulis satu test bergaya Pest berjudul `halaman about ok` yang membuka alamat `/about` lewat permintaan GET dan memastikan responsnya berstatus sukses. Cara memastikannya bebas — assertion khusus status 200 maupun `assertStatus(200)` sama-sama diterima, begitu pula fungsi `test()` dan aliasnya `it()`.",
          starterCode: "<?php\n// Tulis test pertamamu di sini\n",
          language: "text",
          tests: [
            {
              pattern: "(?:test|it)\\s*\\(\\s*['\"]halaman about ok['\"]\\s*,",
              message:
                "Test bergaya Pest ditulis sebagai pemanggilan fungsi `test()` — tanpa kelas dan tanpa method. Argumen pertamanya judul dalam bahasa manusia; judul inilah yang muncul di laporan runner saat test gagal, jadi tulislah kalimat yang menjelaskan perilakunya. Alias `it()` juga diterima, karena Pest menyediakan keduanya.",
            },
            {
              pattern:
                "(?:test|it)\\s*\\([^,]*,\\s*(?:function\\s*\\(\\s*\\)\\s*\\{|fn\\s*\\(\\s*\\)\\s*=>)[\\s\\S]*\\$this\\s*->\\s*get\\s*\\(\\s*['\"]/about['\"]\\s*\\)",
              message:
                "Argumen keduanya fungsi berisi langkah pengujiannya. Permintaan HTTP disimulasikan dengan `$this->get('/alamat')` — tidak ada server sungguhan yang dijalankan, Laravel memproses permintaannya di dalam proses yang sama.",
            },
            {
              pattern: "->\\s*(assertOk|assertStatus\\s*\\(\\s*200\\s*\\)|assertSuccessful)",
              message:
                "Sebuah test tanpa assertion selalu \"lulus\" dan karena itu tidak menjaga apa pun. Rantaikan pemeriksaan status pada hasil permintaannya — Pest menandai test tanpa assertion sebagai *risky*, tetapi banyak orang tetap melewatkannya.",
            },
          ],
          solution: "<?php\ntest('halaman about ok', function () {\n    $this->get('/about')->assertOk();\n});",
          susunKode: {
            question:
              "Susun pengujian Pest PHP sederhana yang memastikan rute GET /about mengembalikan HTTP status 200 OK.",
            potongan: [
              "<?php",
              "test('halaman about ok', function () {",
              "    $this->get('/about')->assertOk();",
              "});",
            ],
            pengecoh: [
              "    $this->visit('/about')->assertOk();",
              "    $this->get('/about')->assertIsOk();",
            ],
            pemisah: "\n",
            explanation:
              "Pest menuliskan test sebagai pemanggilan fungsi test() berisi judul dan closure, lalu assertion dirantai pada hasil permintaannya. Keping $this->visit('/about') menggoda karena kata visit terdengar persis seperti membuka halaman, padahal method permintaan HTTP di test Laravel bernama get(), post(), put(), dan delete(). Keping assertIsOk() keliru nama assertion: yang tersedia assertOk() atau assertStatus(200), dan salah nama membuat test gagal dengan Call to undefined method — kegagalan yang tidak menjelaskan apa pun tentang halamannya. Catatan: it() adalah alias sah test() di Pest, jadi keduanya benar dan tes step ini menerima dua-duanya.",
          },
        },
        {
  kind: "step",
  id: "laravel-9-2",
  title: "Feature Test: Menguji Status & Respon JSON API",
  explanation: "Pengujian endpoint API pada Pest menggunakan metode `$this->getJson('/url')` atau `$this->postJson('/url', $data)` yang secara otomatis menyertakan header HTTP `Accept: application/json`. Hal ini memastikan server memperlakukan permintaan sebagai klien API murni tanpa melakukan pengalihan browser 302 jika terjadi kegagalan. Asersi `$response->assertOk()` memverifikasi status HTTP 200, dan asersi ini dapat dirantai dengan pemeriksaan struktur atau isi data JSON. Kenapa pengujian API wajib: API adalah antarmuka yang dikonsumsi oleh aplikasi mobile dan frontend web; kerusakan pada format respon dapat melumpuhkan seluruh platform klien secara bersamaan. Kapan dipakai: pada setiap endpoint RESTful API sebelum fitur diluncurkan ke produksi. Jebakan umum: menggunakan `$this->get('/api/...')` alih-alih `getJson()` — jika route membutuhkan autentikasi dan token belum disertakan, `$this->get()` menerima redirect HTML login alih-alih respon JSON 401.",
  example: {
    code: "test('katalog artikel mengembalikan status 200', function () {\n    $this->getJson('/api/articles')->assertOk();\n});",
    output: "   PASS  Tests\\Feature\\Api\\ArticleApiTest\n  ✓ katalog artikel mengembalikan status 200              0.35s\n\n  Tests:    1 passed (1 assertions)",
    note: "getJson() otomatis mengirim header Accept: application/json sehingga respon dijamin JSON murni."
  },
  instruction: "Tulis pengujian Pest berjudul `'daftar produk mengembalikan json sukses'` yang mengirim permintaan GET berformat JSON ke `/api/products` dan memastikan responnya sukses berstatus 200 menggunakan `assertOk()`.",
  starterCode: "<?php\n// Tulis pengujian endpoint API di sini\n",
  language: "text",
  tests: [
    {
      pattern: "test\\s*\\(\\s*['\"]daftar produk mengembalikan json sukses['\"]",
      message: "Tulis deklarasi test Pest dengan judul 'daftar produk mengembalikan json sukses'."
    },
    {
      pattern: "\\$this->getJson\\s*\\(\\s*['\"]/?api/products['\"]\\s*\\)",
      message: "Kirim permintaan JSON menggunakan $this->getJson('/api/products')."
    },
    {
      pattern: "->assertOk\\s*\\(\\s*\\);",
      message: "Verifikasi status sukses 200 dengan asersi ->assertOk()."
    }
  ],
  solution: "<?php\ntest('daftar produk mengembalikan json sukses', function () {\n    $this->getJson('/api/products')->assertOk();\n});",
  susunKode: {
    question: "Susun pengujian Pest yang memverifikasi endpoint API produk merespon status 200 OK.",
    potongan: [
      "test('daftar produk mengembalikan json sukses', function () {",
      "    $this->getJson('/api/products')",
      "        ->assertOk();",
      "});"
    ],
    pengecoh: [
      "test('daftar produk gagal diakses', function () {",
      "        ->assertStatus(404);"
    ],
    pemisah: "\n",
    explanation: "Helper getJson('/api/products') mengirim permintaan API dengan header JSON dan assertOk() memverifikasi status 200. Keping 'daftar produk gagal diakses' keliru karena membalik maksud pengujian. Keping assertStatus(404) menggoda jika ingin menguji endpoint tidak ditemukan, tetapi kita menguji jalur sukses produk."
  }
},
        {
          kind: "step",
          id: "laravel-9-3",
          title: "Database Test: RefreshDatabase Trait",
          explanation:
            "Test yang menyentuh database punya satu masalah khas: data yang ditinggalkan test pertama membuat test kedua gagal — atau lebih buruk, membuatnya *lulus* padahal seharusnya tidak. Trait `RefreshDatabase` menyelesaikannya dengan membungkus setiap test dalam transaksi database yang dibatalkan setelah test selesai, sehingga setiap test mulai dari keadaan yang sama persis. Di berkas Pest, trait dipasang lewat `uses(RefreshDatabase::class);` di bagian atas berkas — bukan `use` seperti di dalam kelas. Pemeriksaan hasilnya memakai `$this->assertDatabaseHas('tabel', ['kolom' => 'nilai'])` yang menyatakan \"harus ada baris yang cocok\", beserta pasangannya `assertDatabaseMissing()` yang menyatakan sebaliknya — yang kedua itulah cara menguji fitur hapus. Kenapa memeriksa database, bukan sekadar status respons: halaman bisa saja menjawab 302 dengan sukses sementara datanya tidak pernah tersimpan karena kolomnya tidak ada di `$fillable`, dan hanya pemeriksaan ke database yang menangkapnya. Jebakan yang menyita waktu: urutan test yang saling bergantung. Kalau test-mu hanya lulus ketika dijalankan bersama test lain, itu tanda `RefreshDatabase` belum terpasang atau ada data yang bocor antar-test.",
          example: {
            code:
              "// tests/Feature/ProductTest.php\n" +
              "uses(Illuminate\\Foundation\\Testing\\RefreshDatabase::class);\n\n" +
              "test('produk tersimpan setelah form dikirim', function () {\n" +
              "    $this->post('/products', ['name' => 'Kopi', 'price' => 25000]);\n\n" +
              "    $this->assertDatabaseHas('products', ['name' => 'Kopi']);\n" +
              "});",
            output:
              "$ php artisan test\n" +
              "   PASS  Tests\\Feature\\ProductTest\n" +
              "  ✓ produk tersimpan setelah form dikirim                0.44s\n\n" +
              "# bila kolom 'name' lupa didaftarkan di $fillable Model:\n" +
              "   FAIL  Tests\\Feature\\ProductTest\n" +
              "  ⨯ produk tersimpan setelah form dikirim\n\n" +
              "  Failed asserting that a row in the table [products] matches the attributes {\n" +
              '      \"name\": \"Kopi\"\n' +
              "  }.\n" +
              "  Found similar results: [ { \"name\": null } ]\n\n" +
              "  Tests:  1 failed (1 assertions)",
            note: "Perhatikan kegagalannya: statusnya tetap 302 sukses, tetapi barisnya tersimpan dengan `name` kosong. Test yang hanya memeriksa status respons akan menyatakan semuanya baik-baik saja. Catatan jujur: panel latihan tidak menjalankan Laravel maupun test runner, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Di dalam sebuah test Pest, kamu baru saja mengirim formulir pendaftaran dengan email `bimo@test.com`. Tambahkan pemeriksaan yang membuktikan barisnya benar-benar masuk ke tabel `users` — bukan sekadar memeriksa status responsnya.",
          starterCode:
            "<?php\nuses(Illuminate\\Foundation\\Testing\\RefreshDatabase::class);\n\ntest('user tersimpan setelah registrasi', function () {\n    $this->post('/register', [\n        'name' => 'Bimo',\n        'email' => 'bimo@test.com',\n        'password' => 'rahasia123',\n    ]);\n\n    // Tambahkan pemeriksaannya di sini\n});",
          language: "text",
          tests: [
            {
              pattern: "\\$this\\s*->\\s*assertDatabaseHas\\s*\\(\\s*['\"]users['\"]\\s*,",
              message:
                "Pemeriksaan isi database memakai assertion yang namanya berbunyi \"database punya\". Argumen pertamanya nama TABEL (jamak, huruf kecil) — bukan nama Model.",
            },
            {
              pattern: "['\"]email['\"]\\s*=>\\s*['\"]bimo@test\\.com['\"]",
              message:
                "Argumen keduanya array berisi kolom dan nilai yang harus cocok. Cukup sebutkan kolom yang membedakan barisnya — tidak perlu seluruh kolom, dan jangan sertakan `password` karena yang tersimpan di sana adalah hash yang berbeda setiap kali dibuat.",
            },
          ],
          solution:
            "<?php\nuses(Illuminate\\Foundation\\Testing\\RefreshDatabase::class);\n\ntest('user tersimpan setelah registrasi', function () {\n    $this->post('/register', [\n        'name' => 'Bimo',\n        'email' => 'bimo@test.com',\n        'password' => 'rahasia123',\n    ]);\n\n    $this->assertDatabaseHas('users', ['email' => 'bimo@test.com']);\n});",
          susunKode: {
            question:
              "Susun pengujian registrasi pengguna yang memastikan data email 'bimo@test.com' tersimpan di tabel 'users'.",
            potongan: [
              "<?php",
              "uses(Illuminate\\Foundation\\Testing\\RefreshDatabase::class);",
              "test('user tersimpan setelah registrasi', function () {",
              "    $this->post('/register', [",
              "        'name' => 'Bimo',",
              "        'email' => 'bimo@test.com',",
              "        'password' => 'rahasia123',",
              "    ]);",
              "    $this->assertDatabaseHas('users', ['email' => 'bimo@test.com']);",
              "});",
            ],
            pengecoh: [
              "    $this->assertDatabaseMissing('users', ['email' => 'bimo@test.com']);",
              "    $this->assertDatabaseSee('users', ['email' => 'bimo@test.com']);",
            ],
            pemisah: "\n",
            explanation:
              "Metode assertDatabaseHas('tabel', array) memastikan baris data yang cocok benar-benar tersimpan di basis data. Keping assertDatabaseMissing sangat keliru karena memeriksa ketidakadaannya data. Keping assertDatabaseSee keliru nama metode penegasan (assertion).",
          },
        },
        {
          kind: "step",
          id: "laravel-9-4",
          title: "Menguji Auth & ActingAs",
          explanation:
            "`$this->actingAs($user)` menyatakan \"permintaan berikutnya dikirim atas nama pengguna ini\", tanpa melewati formulir login sama sekali. Kenapa tidak menguji lewat form login saja? Karena setiap test yang butuh pengguna terautentikasi — dan itu sebagian besar test aplikasi — akan mengulang tiga langkah yang sama, membuat rangkaian test-mu lambat dan rapuh terhadap perubahan tampilan login. Pasangan yang biasa dipakai adalah `User::factory()->create()` untuk membuat penggunanya, lalu `actingAs()` untuk memakainya. Yang lebih penting: dengan ini kamu bisa menguji **otorisasi**, bukan hanya autentikasi — buat dua pengguna, lalu buktikan bahwa pengguna B mendapat 403 saat menyunting milik pengguna A. Itu jenis test yang benar-benar melindungi data, dan justru yang paling sering absen. Jangan lupakan sisi negatifnya: test \"pengunjung anonim dialihkan ke login\" sama pentingnya, dan test itu ditulis **tanpa** `actingAs`. Jebakan yang menyesatkan: `actingAs` hanya menyetel pengguna, ia tidak mengubah perannya — kalau route-mu dijaga Gate berbasis kolom `is_admin`, penggunanya harus dibuat dengan kolom itu (`User::factory()->create(['is_admin' => true])`), kalau tidak test-mu gagal karena alasan yang berbeda dari dugaanmu.",
          example: {
            code:
              "// tests/Feature/DashboardTest.php\n" +
              "test('user terautentikasi dapat melihat dashboard', function () {\n" +
              "    $user = User::factory()->create();\n\n" +
              "    $this->actingAs($user)->get('/dashboard')->assertOk();\n" +
              "});\n\n" +
              "test('pengunjung anonim dialihkan ke login', function () {\n" +
              "    $this->get('/dashboard')->assertRedirect('/login');\n" +
              "});",
            output:
              "$ php artisan test --filter=DashboardTest\n" +
              "   PASS  Tests\\Feature\\DashboardTest\n" +
              "  ✓ user terautentikasi dapat melihat dashboard          0.51s\n" +
              "  ✓ pengunjung anonim dialihkan ke login                 0.09s\n\n" +
              "  Tests:    2 passed (2 assertions)\n\n" +
              "# bila middleware 'auth' lupa dipasang pada route /dashboard:\n" +
              "  ✓ user terautentikasi dapat melihat dashboard          0.49s\n" +
              "  ⨯ pengunjung anonim dialihkan ke login\n" +
              "    Response status code [200] is not a redirect status code.",
            note: "Blok terakhir memperlihatkan kenapa test negatif itu wajib: test pertama tetap hijau meski penjagaannya hilang sama sekali. Catatan jujur: panel latihan tidak menjalankan Laravel maupun test runner, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Halaman `/settings` hanya boleh dibuka pengguna yang sudah login. Di dalam test yang sudah membuat `$user`, kirim permintaan GET ke alamat itu **atas nama pengguna tersebut** lalu pastikan responsnya sukses.",
          starterCode:
            "<?php\ntest('user bisa membuka halaman pengaturan', function () {\n    $user = User::factory()->create();\n\n    // Kirim permintaannya atas nama $user di sini\n});",
          language: "text",
          tests: [
            {
              pattern: "\\$this\\s*->\\s*actingAs\\s*\\(\\s*\\$user\\s*\\)",
              message:
                "Simulasi pengguna login memakai method yang berarti \"bertindak sebagai\", dengan objek penggunanya sebagai argumen. Ini menggantikan seluruh alur mengisi dan mengirim formulir login.",
            },
            {
              pattern: "->\\s*get\\s*\\(\\s*['\"]/settings['\"]\\s*\\)",
              message:
                "Permintaannya dirantai SETELAH simulasi penggunanya. Menulis `$this->get(...)` lebih dulu lalu `actingAs()` belakangan membuat permintaannya terkirim sebagai pengunjung anonim, dan test-mu gagal dengan 302 alih-alih 200.",
            },
            {
              pattern: "->\\s*(assertOk|assertStatus\\s*\\(\\s*200\\s*\\)|assertSuccessful)",
              message:
                "Tutup dengan assertion status supaya test ini benar-benar menjaga sesuatu. Tanpanya, test akan tetap hijau bahkan ketika halaman itu balas 500.",
            },
          ],
          solution:
            "<?php\ntest('user bisa membuka halaman pengaturan', function () {\n    $user = User::factory()->create();\n\n    $this->actingAs($user)->get('/settings')->assertOk();\n});",
          susunKode: {
            potongan: [
              "<?php",
              "test('user bisa membuka halaman pengaturan', function () {",
              "    $user = User::factory()->create();",
              "    $this->actingAs($user)->get('/settings')->assertOk();",
              "});",
            ],
            pengecoh: [
              "    $this->loginAs($user)->get('/settings')->assertOk();",
              "    $this->authUser($user)->get('/settings')->assertOk();",
            ],
            pemisah: "\n",
            explanation:
              "Metode actingAs($user) mensimulasikan pengguna yang telah terautentikasi untuk sesi pengujian HTTP berikutnya. Keping loginAs dan authUser menggoda tetapi merupakan nama metode fiktif yang tidak ada di Laravel TestResponse.",
          },
        },
        {
          kind: "step",
          id: "laravel-9-5",
          title: "Mocking Service Eksternal (Http::fake)",
          explanation:
            "`Http::fake([...])` mencegat setiap panggilan keluar yang dibuat lewat HTTP client Laravel dan menjawabnya dengan respons yang kamu tentukan — jaringan tidak pernah tersentuh. Kenapa ini bukan sekadar soal kecepatan: test yang benar-benar memanggil API pihak ketiga akan gagal saat internet mati, gagal saat layanan itu sedang gangguan, menghabiskan kuota panggilan berbayar, dan — pada API pembayaran — benar-benar membuat transaksi. Selain itu, memalsukan responsnya adalah satu-satunya cara praktis menguji jalur kegagalan: bagaimana aplikasimu berperilaku saat API menjawab `500`, atau saat jawabannya kosong. Polanya bisa memakai wildcard (`'api.github.com/*'`), dan `Http::response($body, $status)` menentukan isi serta status palsunya. Pasangannya adalah `Http::assertSent(...)` untuk membuktikan permintaan yang kamu kirim memang berbentuk benar. Jebakan yang perlu dijaga: mock yang tidak pernah diperbarui membuat test tetap hijau meski API sungguhannya sudah mengubah bentuk respons — karena itu tim yang serius menambahkan sedikit *contract test* terpisah yang sesekali memanggil API asli, di luar rangkaian test harian.",
          example: {
            code:
              "use Illuminate\\Support\\Facades\\Http;\n\n" +
              "test('gagal bayar ditangani dengan benar', function () {\n" +
              "    Http::fake([\n" +
              "        'api.payment.com/*' => Http::response(['message' => 'insufficient funds'], 402),\n" +
              "    ]);\n\n" +
              "    $this->post('/checkout', ['order_id' => 1])\n" +
              "        ->assertSessionHas('error');\n" +
              "});",
            output:
              "$ php artisan test --filter=checkout\n" +
              "   PASS  Tests\\Feature\\CheckoutTest\n" +
              "  ✓ gagal bayar ditangani dengan benar                   0.21s\n\n" +
              "# waktu eksekusi dengan dan tanpa Http::fake():\n" +
              "tanpa fake : 3.9 s   (dan benar-benar memanggil server pembayaran)\n" +
              "dengan fake: 0.21 s\n\n" +
              "# tanpa fake, saat internet mati:\n" +
              "  ⨯ gagal bayar ditangani dengan benar\n" +
              "    cURL error 6: Could not resolve host: api.payment.com",
            note: "Blok terakhir menunjukkan kenapa mock bukan sekadar optimasi: tanpanya, kegagalan test tidak lagi memberitahumu apa pun tentang kodemu sendiri. Catatan jujur: panel latihan tidak menjalankan Laravel maupun test runner, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah kode yang kamu tulis.",
          },
          instruction:
            "Test-mu memanggil API GitHub dan jadi lambat serta gagal saat offline. Cegat semua panggilan ke alamat berpola `api.github.com/*` dan jawab dengan respons palsu berstatus `200` — supaya test berjalan tanpa jaringan sama sekali.",
          starterCode:
            "<?php\nuse Illuminate\\Support\\Facades\\Http;\n\n// Cegat panggilan ke GitHub di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Http::fake\\s*\\(\\s*\\[",
              message:
                "Pencegatan dipasang lewat facade `Http` dengan method yang berarti \"palsu\". Argumennya array pemetaan `pola alamat => respons palsunya`.",
            },
            {
              pattern: "['\"]api\\.github\\.com/\\*['\"]\\s*=>",
              message:
                "Kuncinya berupa pola alamat, dengan tanda bintang sebagai wildcard supaya seluruh endpoint di host itu ikut tercegat. Menulis alamat lengkap tanpa wildcard hanya mencegat satu endpoint — panggilan lain tetap keluar ke internet.",
            },
            {
              pattern: "Http::response\\s*\\(",
              message:
                "Nilainya dibentuk dengan `Http::response($isi, $status)`. Isinya boleh array kosong bila yang diuji hanya alurnya, tetapi status HTTP-nya perlu kamu tentukan — di situlah kamu bisa menyimulasikan kegagalan seperti 500 atau 402.",
            },
          ],
          solution:
            "<?php\nuse Illuminate\\Support\\Facades\\Http;\n\nHttp::fake([\n    'api.github.com/*' => Http::response([], 200),\n]);",
          susunKode: {
            question:
              "Susun pemalsuan HTTP Client menggunakan Http::fake untuk rute GitHub API mengembalikan array kosong status 200.",
            potongan: [
              "<?php",
              "use Illuminate\\Support\\Facades\\Http;",
              "Http::fake([",
              "    'api.github.com/*' => Http::response([], 200),",
              "]);",
            ],
            pengecoh: [
              "Http::mock([",
              "    'api.github.com/*' => Http::json([], 200),",
            ],
            pemisah: "\n",
            explanation:
              "Http::fake(...) mencegat permintaan HTTP ke luar dan mengembalikan respons buatan Http::response([], 200). Keping Http::mock keliru nama Facade helper. Keping Http::json keliru karena pembuatan respons tiruan menggunakan Http::response().",
          },
        },
        {
          kind: "step",
          id: "laravel-9-6",
          title: "Strategi Pengujian Berprioritas",
          explanation:
            "Kamu tidak akan pernah punya waktu menguji semuanya, jadi pertanyaan sesungguhnya adalah apa yang diuji lebih dulu. Urutan yang terbukti berguna: **(1)** alur sukses utama — pengguna mendaftar, memesan, membayar; **(2)** kegagalan validasi — masukan kosong atau salah format tidak boleh tersimpan; **(3)** otorisasi — pengguna B tidak boleh menyentuh data pengguna A. Tiga lapis itu menangkap hampir semua kerusakan yang benar-benar merugikan. Yang **tidak** perlu kamu uji: kode framework itu sendiri (apakah `Route::get` bekerja), getter sederhana, dan tampilan yang tidak punya logika. Angka *coverage* (`php artisan test --coverage`) berguna untuk menemukan berkas yang belum tersentuh sama sekali, tetapi ia gampang menyesatkan: cakupan 90% yang mengabaikan alur pembayaran jauh lebih berbahaya daripada 45% yang melindungi alur uang dan autentikasi. Yang membuat rangkaian test benar-benar terpakai adalah kecepatannya — test yang butuh lima menit akan dilewati orang saat terburu-buru, dan test yang dilewati sama saja dengan tidak ada. Kebiasaan penutup yang layak dibangun sejak sekarang: setiap kali sebuah bug ditemukan, tulis dulu test yang gagal karena bug itu, baru perbaiki kodenya — dengan begitu bug yang sama tidak pernah kembali dua kali.",
          example: {
            code:
              "// tiga lapis prioritas dalam satu berkas\n" +
              "test('user bisa membuat produk', function () {                       // 1. happy path\n" +
              "    $this->actingAs(User::factory()->create())\n" +
              "        ->post('/products', ['name' => 'Kopi', 'price' => 25000])\n" +
              "        ->assertRedirect('/products');\n" +
              "});\n\n" +
              "test('nama produk wajib diisi', function () {                        // 2. validasi\n" +
              "    $this->actingAs(User::factory()->create())\n" +
              "        ->post('/products', ['price' => 25000])\n" +
              "        ->assertSessionHasErrors('name');\n" +
              "});\n\n" +
              "test('pengunjung anonim tidak bisa menghapus produk', function () {  // 3. otorisasi\n" +
              "    $product = Product::factory()->create();\n" +
              "    $this->delete(\"/products/{$product->id}\")->assertRedirect('/login');\n" +
              "    $this->assertDatabaseHas('products', ['id' => $product->id]);\n" +
              "});",
            output:
              "$ php artisan test --coverage\n" +
              "   PASS  Tests\\Feature\\ProductTest\n" +
              "  ✓ user bisa membuat produk                             0.62s\n" +
              "  ✓ nama produk wajib diisi                              0.11s\n" +
              "  ✓ pengunjung anonim tidak bisa menghapus produk        0.14s\n\n" +
              "  app/Http/Controllers/ProductController .................. 91.7%\n" +
              "  app/Models/Product ..................................... 100.0%\n" +
              "  app/Policies/ProductPolicy .............................. 40.0%\n" +
              "  ────────────────────────────────────────────────────────────\n" +
              "  Total: 78.3%\n\n" +
              "  Tests:    3 passed (4 assertions)\n" +
              "  Duration: 1.09s",
            note: "Baris `ProductPolicy 40.0%` justru yang paling menarik di laporan itu: aturan otorisasi adalah bagian yang paling merugikan bila salah, tetapi paling jarang teruji. Angka total 78,3% tidak memberitahumu hal itu. Catatan jujur: panel latihan tidak menjalankan test runner, jadi keluaran ini tidak akan muncul di sini; yang diperiksa adalah perintah yang kamu tulis.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk mengeksekusi pengujian beserta laporan cakupan kode (`--coverage`).",
          starterCode: "# Tulis perintah test dengan flag --coverage di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "php\\s+artisan\\s+test",
                        "message": "Seluruh test dijalankan lewat `php artisan test`."
                      },
                      {
                        "pattern": "--coverage",
                        "message": "Tambahkan flag laporan cakupan (butuh Xdebug atau PCOV terpasang). Angka cakupan bukan tujuan: yang penting alur uang dan autentikasi terlingkupi, bukan totalnya mendekati 100%."
                      }
                    ],
          solution: "php artisan test --coverage",
          susunKode: {
            question:
              "Rangkai perintah Artisan untuk menjalankan seluruh suite pengujian sekaligus menghitung persentase cakupan kode (coverage).",
            potongan: [
              "php",
              "artisan",
              "test",
              "--coverage",
            ],
            pengecoh: [
              "test:coverage",
              "--with-coverage",
            ],
            pemisah: " ",
            explanation:
              "Perintah php artisan test dengan opsi --coverage menjalankan seluruh pengujian dan menampilkan analisis cakupan kode. Keping test:coverage keliru sub-perintah Artisan. Keping --with-coverage adalah nama flag fiktif.",
          },
        },
        {
  kind: "step",
  id: "laravel-9-7",
  title: "Menguji Kegagalan Validasi Form dengan assertSessionHasErrors",
  explanation: "`$response->assertSessionHasErrors(['field'])` memeriksa apakah pengiriman formulir dengan data tidak lengkap atau cacat berhasil dicegat oleh lapisan validasi Laravel dan menghasilkan pesan kesalahan di sesi pengguna. Pengujian tidak hanya memastikan alur berhasil (*happy path*), melainkan juga menjamin bahwa data rusak tidak akan pernah lolos masuk ke basis data. Kenapa pengujian validasi sama pentingnya dengan fitur utama: jika aturan validasi diubah tanpa sengaja di masa depan, test ini akan langsung gagal di pipeline CI/CD sebelum bug bocor ke produksi. Kapan dipakai: pada seluruh Feature test yang menguji aksi pengiriman formulir POST/PUT. Jebakan umum: hanya memeriksa status respon `assertStatus(302)` tanpa memeriksa `assertSessionHasErrors()` — pengalihan 302 juga bisa terjadi jika otentikasi ditolak atau terjadi error server lain.",
  example: {
    code: "test('email wajib diisi saat login', function () {\n    $this->post('/login', [])->assertSessionHasErrors('email');\n});",
    output: "   PASS  Tests\\Feature\\Auth\\LoginTest\n  ✓ email wajib diisi saat login                         0.28s\n\n  Tests:    1 passed (1 assertions)",
    note: "Pengujian memvalidasi bahwa sesi benar-benar membawa galat untuk atribut email."
  },
  instruction: "Tulis pengujian Pest berjudul `nama wajib diisi saat registrasi` yang mengirim permintaan POST ke `/register` dengan array kosong `[]`, lalu pastikan sesi menyimpan pesan error validasi untuk field `'name'`.",
  starterCode: "<?php\n// Tulis pengujian validasi Pest di sini\n",
  language: "text",
  tests: [
    {
      pattern: "test\\s*\\(\\s*['\"]nama wajib diisi saat registrasi['\"]",
      message: "Tulis deklarasi test Pest dengan judul 'nama wajib diisi saat registrasi'."
    },
    {
      pattern: "\\$this->post\\s*\\(\\s*['\"]/register['\"]\\s*,\\s*\\[\\]\\s*\\)",
      message: "Kirimkan permintaan $this->post('/register', [])."
    },
    {
      pattern: "->assertSessionHasErrors\\s*\\(\\s*['\"]name['\"]\\s*\\);",
      message: "Rantaikan asersi penjamin error validasi ->assertSessionHasErrors('name')."
    }
  ],
  solution: "<?php\ntest('nama wajib diisi saat registrasi', function () {\n    $this->post('/register', [])\n        ->assertSessionHasErrors('name');\n});",
  susunKode: {
    question: "Susun pengujian Pest yang memverifikasi kegagalan validasi nama kosong pada registrasi.",
    potongan: [
      "test('nama wajib diisi saat registrasi', function () {",
      "    $this->post('/register', [])",
      "        ->assertSessionHasErrors('name');",
      "});"
    ],
    pengecoh: [
      "test('nama boleh kosong saat registrasi', function () {",
      "        ->assertSessionHasNoErrors();"
    ],
    pemisah: "\n",
    explanation: "assertSessionHasErrors('name') memverifikasi bahwa pengiriman data formulir kosong menghasilkan galat validasi pada sesi. Keping 'nama boleh kosong' keliru karena membalik judul skenario uji. Keping assertSessionHasNoErrors menggoda jika salah membaca maksud tes, tetapi akan langsung gagal karena data kosong pasti ditolak validasi."
  }
},
{
  kind: "step",
  id: "laravel-9-8",
  title: "Menguji Pengiriman Email via Mail::fake & assertSent",
  explanation: "`Mail::fake()` mengganti layanan pengiriman email dengan mock tiruan di memori selama sesi pengujian berlangsung. Dengan demikian, tidak ada email sungguhan yang terkirim ke internet, pengujian berjalan super cepat, dan kamu dapat memverifikasi secara presisi apakah kelas Mailable tertentu benar-benar dieksekusi menggunakan `Mail::assertSent(MailableClass::class)`. Kenapa teknik faking ini standar industri: menguji pengiriman email nyata akan menghabiskan kuota penyedia SMTP, memperlambat automated test, dan berisiko mengirim email spam uji ke alamat pengguna sungguhan jika database pengujian bocor. Kapan dipakai: pada seluruh test registrasi, pemesanan faktur, dan reset kata sandi. Jebakan umum: memanggil `Mail::fake()` setelah aksi Controller dipicu — faking harus dideklarasikan di awal test sebelum aksi yang memicu email dijalankan.",
  example: {
    code: "test('email verifikasi terkirim setelah registrasi', function () {\n    Mail::fake();\n    $this->post('/register', ['email' => 'member@test.com']);\n    Mail::assertSent(VerifyEmail::class);\n});",
    output: "   PASS  Tests\\Feature\\RegistrationTest\n  ✓ email verifikasi terkirim setelah registrasi         0.24s\n\n  Tests:    1 passed (1 assertions)",
    note: "Pengujian membuktikan email terkirim tanpa menyentuh server SMTP eksternal."
  },
  instruction: "Gunakan `Mail::fake()` untuk memalsukan pengirim email, lakukan permintaan `$this->post('/orders', ['item_id' => 1]);`, lalu pastikan mailable `InvoiceMail` benar-benar terkirim menggunakan `Mail::assertSent()`.",
  starterCode: "<?php\nuse App\\Mail\\InvoiceMail;\nuse Illuminate\\Support\\Facades\\Mail;\n\ntest('email invoice terkirim setelah order', function () {\n    // Pasang Mail fake, kirim post, dan periksa assertSent di sini\n});",
  language: "text",
  tests: [
    {
      pattern: "Mail::fake\\s*\\(\\s*\\);",
      message: "Pasang Mail::fake() di baris awal test untuk mencegah pengiriman email nyata."
    },
    {
      pattern: "\\$this->post\\s*\\(\\s*['\"]/orders['\"]\\s*,\\s*\\[\\s*['\"]item_id['\"]\\s*=>\\s*1\\s*\\]\\s*\\);",
      message: "Eksekusi permintaan $this->post('/orders', ['item_id' => 1])."
    },
    {
      pattern: "Mail::assertSent\\s*\\(\\s*InvoiceMail::class\\s*\\);",
      message: "Pastikan email terkirim dengan memanggil Mail::assertSent(InvoiceMail::class)."
    }
  ],
  solution: "<?php\nuse App\\Mail\\InvoiceMail;\nuse Illuminate\\Support\\Facades\\Mail;\n\ntest('email invoice terkirim setelah order', function () {\n    Mail::fake();\n    $this->post('/orders', ['item_id' => 1]);\n    Mail::assertSent(InvoiceMail::class);\n});",
  susunKode: {
    question: "Susun pengujian pengiriman email InvoiceMail menggunakan Mail::fake dan assertSent.",
    potongan: [
      "    Mail::fake();",
      "    $this->post('/orders', ['item_id' => 1]);",
      "    Mail::assertSent(InvoiceMail::class);"
    ],
    pengecoh: [
      "    Queue::fake();",
      "    Mail::assertNotSent(InvoiceMail::class);"
    ],
    pemisah: "\n",
    explanation: "Mail::fake memalsukan sistem pengiriman email di memori dan Mail::assertSent membuktikan mailable terkirim. Keping Queue::fake keliru karena memalsukan antrean umum alih-alih pengirim surat Mail. Keping assertNotSent menggoda karena memiliki struktur serupa tetapi justru memastikan email tidak terkirim."
  }
},
        {
          kind: "quiz",
          id: "laravel-9-kuis",
          title: "Kuis: Testing Modern dengan Pest PHP",
          questions: [
            {
              id: "l9-q1",
              type: "pilihan-ganda",
              question: "Apakah nama framework pengujian modern bertata bahasa ekspresif yang menjadi standar default pengujian di ekosistem Laravel?",
              choices: [
                "Jest",
                "Pest PHP",
                "Mocha",
                "PHPUnit Standard Class"
              ],
              answerIndex: 1,
              explanation: "Pest PHP adalah framework testing modern untuk PHP dengan sintaks ringkas berbasis fungsi (`test('...', function () { ... })`), dibangun di atas PHPUnit dan menjadi standar baru di proyek Laravel modern."
            },
            {
              id: "l9-q2",
              type: "pilihan-ganda",
              question: "Apakah fungsi dari trait `RefreshDatabase` saat digunakan di dalam berkas pengujian aplikasi Laravel?",
              choices: [
                "Menghapus seluruh tabel dan membuat ulang database dari nol untuk setiap pengujian tanpa transaksi",
                "Mengisi database pengujian dengan data dummy dari semua Seeder yang terdaftar",
                "Mencegah eksekusi query penulisan ke database agar status database tetap bersih",
                "Membungkus setiap pengujian di dalam transaksi database yang otomatis di-rollback setelah pengujian selesai agar status database selalu bersih"
              ],
              answerIndex: 3,
              explanation: "`RefreshDatabase` mengisolasi perubahan data per-test: ia menjalankan migrasi di awal, lalu membungkus setiap pengujian dalam transaksi database (`begin` & `rollback`), sehingga data uji tidak mencemari pengujian lainnya."
            },
            {
              id: "l9-q3",
              type: "pilihan-ganda",
              question: "Metode apakah yang digunakan di dalam Feature Test untuk mensimulasikan login pengguna sebelum mengirimkan permintaan HTTP?",
              choices: [
                "$this->loginAs($user)",
                "$this->actingAs($user)",
                "$this->authenticate($user)",
                "$this->withSessionUser($user)"
              ],
              answerIndex: 1,
              explanation: "`$this->actingAs($user)` mensimulasikan sesi pengguna yang sedang login untuk HTTP request berikutnya di lingkungan testing tanpa perlu mengirim kredensial login manual melalui formulir."
            },
            {
              id: "l9-q4",
              type: "pilihan-ganda",
              question: "Mengapa pengembang menggunakan `Http::fake()` saat menguji fitur yang berinteraksi dengan API eksternal pihak ketiga (misalnya Payment Gateway)?",
              choices: [
                "Agar pengujian tidak bergantung pada koneksi internet luar, berjalan instan, deterministik, dan tidak menghabiskan kuota transaksi nyata",
                "Untuk mengunduh respon API asli dan menyimpannya secara permanen ke file konfigurasi",
                "Karena framework testing Laravel menolak segala bentuk koneksi HTTP eksternal secara sepihak",
                "Agar API eksternal otomatis melakukan transfer dana di lingkungan sandbox"
              ],
              answerIndex: 0,
              explanation: "`Http::fake()` mencegat request HTTP keluar dan mengembalikan respons tiruan yang kita definisikan. Pengujian menjadi cepat, dapat diandalkan tanpa koneksi internet, dan terhindar dari pemotongan saldo atau efek samping di server eksternal."
            },
            {
              id: "l9-q5",
              type: "pilihan-ganda",
              question: "Perintah Artisan terminal apakah yang digunakan untuk mengeksekusi seluruh pengujian otomatis di proyek Laravel?",
              choices: [
                "composer run-test",
                "laravel test:run",
                "php artisan test",
                "php artisan test:all"
              ],
              answerIndex: 2,
              explanation: "`php artisan test` mengeksekusi runner Pest atau PHPUnit dengan antarmuka terminal yang rapi, ringkasan durasi, dan pelaporan status per-pengujian yang jelas."
            }
          ]
        }
      ],
    },
  ],
};
