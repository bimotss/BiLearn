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
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di industri perangkat lunak Indonesia, Laravel adalah *framework* backend paling populer untuk sistem manufaktur, perbankan, *e-commerce*, dan pemerintahan. Pemahaman instalasi lingkungan lokal yang bersih serta penguasaan alat perintah Artisan adalah keahlian mendasar yang diuji saat *technical test* posisi Junior PHP / Laravel Developer.",
        },
        {
          kind: "quiz",
          id: "laravel-0-kuis",
          title: "Kuis: Persiapan & Instalasi Laravel",
          questions: [
            {
              id: "l0-q1",
              type: "pilihan-ganda",
              question: "Apa fungsi utama dari Composer dalam ekosistem pengembangan PHP?",
              choices: [
                "Menjalankan server web HTTP untuk menampilkan halaman HTML di browser",
                "Mengelola dan mengunduh library atau dependensi pihak ketiga untuk proyek PHP",
                "Mengompilasi kode PHP menjadi bahasa mesin binary executable (.exe)",
                "Mengedit berkas kode program secara visual di dalam terminal",
              ],
              answerIndex: 1,
              explanation:
                "Composer adalah dependency manager resmi PHP yang mengunduh dan mengatur pustaka/library luar yang dibutuhkan oleh aplikasi.",
            },
            {
              id: "l0-q2",
              type: "pilihan-ganda",
              question: "Perintah CLI apakah yang digunakan untuk menjalankan server pengembang lokal bawaan Laravel?",
              choices: [
                "php run dev",
                "composer start",
                "php artisan serve",
                "laravel start-server",
              ],
              answerIndex: 2,
              explanation:
                "Perintah `php artisan serve` memanggil skrip Artisan untuk mengaktifkan built-in HTTP server PHP pada port 8000 secara lokal.",
            },
            {
              id: "l0-q3",
              type: "pilihan-ganda",
              question: "Manakah di bawah ini syarat minimum sebelum kamu bisa membuat proyek Laravel baru?",
              choices: [
                "Komputer harus terhubung ke database Oracle secara aktif",
                "Harus memasang PHP CLI dan Composer di sistem operasi",
                "Harus memasang Docker Engine versi Enterprise",
                "Harus mengubah kode PHP menjadi bahasa C++ terlebih dahulu",
              ],
              answerIndex: 1,
              explanation:
                "Laravel membutuhkan runtime PHP CLI beserta Composer untuk mengunduh komponen kerangka kerjanya.",
            },
            {
              id: "l0-q4",
              type: "pilihan-ganda",
              question: "Apa yang terjadi jika kamu menjalankan perintah `php artisan` di luar direktori akar proyek Laravel?",
              choices: [
                "Laravel akan membuat proyek baru secara otomatis di direktori tersebut",
                "Terminal akan menampilkan pesan error bahwa berkas artisan tidak ditemukan",
                "Komputer akan merestart sistem secara otomatis",
                "Composer akan mengunduh ulang seluruh pustaka PHP",
              ],
              answerIndex: 1,
              explanation:
                "Perintah `php artisan` bergantung pada skrip executable `artisan` yang hanya berada di folder utama proyek Laravel.",
            },
            {
              id: "l0-q5",
              type: "pilihan-ganda",
              question: "Di manakah kode PHP dieksekusi saat pengguna mengakses halaman web?",
              choices: [
                "Di dalam peramban web (browser) pengguna menggunakan mesin V8",
                "Di server backend sebelum hasil HTML/JSON dikirimkan ke pengguna",
                "Di router jaringan Wi-Fi pengguna",
                "Di dalam kartu grafis (GPU) komputer pengguna",
              ],
              answerIndex: 1,
              explanation:
                "PHP adalah bahasa server-side; kodenya dieksekusi di server dan mengembalikan hasil olahan (seperti dokumen HTML atau JSON) ke peramban.",
            },
          ],
        },
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
            "Langkah awal dalam pemrograman PHP adalah memahami cara mendefinisikan variabel dan mencetak nilainya ke peramban. Berkas PHP selalu diawali dengan tag pembuka khusus. Semua nama variabel di PHP wajib diawali dengan simbol dolar, dan string digabungkan menggunakan operator titik. Setiap pernyataan di PHP harus diakhiri dengan titik koma agar tidak memicu error parser. Sintaksis dasar ini digunakan secara menyeluruh di seluruh aplikasi Laravel untuk pengolahan data.",
          example: {
            code: "<?php\n$nama = 'Budi';\necho 'Halo ' . $nama;",
            output: "Halo Budi",
            note: "Setiap baris pernyataan di PHP wajib diakhiri dengan titik koma (;).",
          },
          instruction:
            "Tuliskan pencetakan variabel `echo 'Halo ' . $name;` di dalam tag PHP.",
          starterCode: "<?php\n// Tulis kode echo di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "echo\\s+['\"]Halo\\s*['\"]\\s*\\.\\s*\\$name\\s*;",
              message: "Tuliskan: echo 'Halo ' . $name;",
            },
          ],
          solution: "<?php\necho 'Halo ' . $name;",
        },
        {
          kind: "step",
          id: "laravel-1-2",
          title: "Array Asosiatif di PHP",
          explanation:
            "Array asosiatif menyimpan data dalam pasangan kunci (*key*) dan nilai (*value*) menggunakan tanda panah khusus. Di dalam pengembangan aplikasi Laravel, struktur array asosiatif ini paling sering dipakai untuk melemparkan kumpulan data dari Controller ke komponen tampilan Blade atau membentuk struktur objek respon JSON API. Penggunaan key berlabel memudahkan identifikasi bidang data secara jelas dan terstruktur. Hal ini menghindarkan pengembang dari kebingungan membaca indeks angka acak.",
          example: {
            code: "$user = ['nama' => 'Bimo', 'umur' => 25];\necho $user['nama'];",
            output: "Bimo",
            note: "Array asosiatif di PHP sangat mirip dengan JSON / Objek. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Tuliskan deklarasi array `$user = ['name' => 'Bimo'];`.",
          starterCode: "<?php\n// Tulis deklarasi array di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$user\\s*=\\s*\\[\\s*['\"]name['\"]\\s*=>\\s*['\"]Bimo['\"]\\s*\\]\\s*;",
              message: "Gunakan: $user = ['name' => 'Bimo'];",
            },
          ],
          solution: "<?php\n$user = ['name' => 'Bimo'];",
        },
        {
          kind: "step",
          id: "laravel-1-3",
          title: "Loop foreach untuk Array",
          explanation:
            "Perulangan `foreach` adalah konstruksi bahasa PHP yang paling efisien untuk melintasi setiap elemen dalam array. Berbeda dengan perulangan angka biasa yang membutuhkan variabel pencatat indeks manual, `foreach` secara otomatis mengambil setiap elemen satu per satu sampai elemen terakhir habis. Fitur ini meminimalisir bug kesalahan indeks out-of-bounds saat memproses kumpulan data dari database. Pemula sangat disarankan memakai konstruksi ini saat mengolah koleksi data.",
          example: {
            code: "$buah = ['Apel', 'Jeruk'];\nforeach ($buah as $b) {\n  echo $b;\n}",
            output: "ApelJeruk",
            note: "Gunakan foreach ($array as $key => $value) jika butuh membaca indeks key.",
          },
          instruction:
            "Tuliskan sintaks perulangan `foreach ($items as $item) { echo $item; }`.",
          starterCode: "<?php\n// Tulis foreach di sini\n",
          language: "text",
          tests: [
            {
              pattern: "foreach\\s*\\(\\s*\\$items\\s+as\\s+\\$item\\s*\\)\\s*\\{\\s*echo\\s+\\$item\\s*;?\\s*\\}",
              message: "Gunakan perulangan foreach sesuai instruksi",
            },
          ],
          solution: "<?php\nforeach ($items as $item) {\n  echo $item;\n}",
        },
        {
          kind: "step",
          id: "laravel-1-4",
          title: "Membaca Superglobal $_GET dan $_POST",
          explanation:
            "Variabel superglobal disediakan secara otomatis oleh runtime PHP untuk menangkap parameter URL kueri maupun isi data formulir yang dikirimkan oleh peramban pengguna. Di Laravel, variabel superglobal ini dibungkus secara elegan di dalam objek Request untuk memberikan kemudahan sanitasi dan keamanan data masukan. Pemahaman cara kerja variabel superglobal membantu kamu memahami dari mana asal data masukan formulir web. Penggunaan operator pengganti nilai default sangat disarankan untuk mencegah kebocoran warning.",
          example: {
            code: "$keyword = $_GET['search'] ?? 'kosong';\necho $keyword;",
            output: "kosong",
            note: "Gunakan operator null coalescing (??) untuk menghindari warning undefined array key.",
          },
          instruction:
            "Membaca nilai `$_GET['category']` dan simpan ke variabel `$cat`.",
          starterCode: "<?php\n// Simpan $_GET['category'] ke $cat\n",
          language: "text",
          tests: [
            {
              pattern: "\\$cat\\s*=\\s*\\$_GET\\s*\\[\\s*['\"]category['\"]\\s*\\]\\s*;",
              message: "Tuliskan: $cat = $_GET['category'];",
            },
          ],
          solution: "<?php\n$cat = $_GET['category'];",
        },
        {
          kind: "step",
          id: "laravel-1-5",
          title: "Pemisahan Berkas dengan require_once",
          explanation:
            "Fungsi pemanggilan berkas memasukkan dan mengeksekusi isi berkas PHP lain ke dalam skrip utama secara langsung. Fungsi ini menjamin berkas tersebut hanya diikutsertakan tepat satu kali selama eksekusi program berlangsung. Fitur pemisahan berkas mencegah terjadinya konflik deklarasi ganda pada fungsi atau kelas yang sama. Pemisahan berkas adalah pondasi dasar di balik sistem pembacaan otomatis kelas modern.",
          example: {
            code: "require_once 'config.php';\necho DB_NAME;",
            output: "db_laravel",
            note: "Jika file tidak ditemukan, require_once melempar Fatal Error dan menghentikan eksekusi.",
          },
          instruction:
            "Panggil file `helper.php` menggunakan `require_once`.",
          starterCode: "<?php\n// Panggil helper.php di sini\n",
          language: "text",
          tests: [
            {
              pattern: "require_once\\s+['\"]helper\\.php['\"]\\s*;",
              message: "Gunakan: require_once 'helper.php';",
            },
          ],
          solution: "<?php\nrequire_once 'helper.php';",
        },
        {
          kind: "step",
          id: "laravel-1-6",
          title: "Fitur Modern PHP 8: Ekspresi Match",
          explanation:
            "PHP 8 memperkenalkan ekspresi percabangan baru sebagai alternatif modern untuk konstruksi percabangan switch lama. Ekspresi ini melakukan evaluasi kondisi secara ketat dan mengembalikan nilai secara langsung tanpa perlu menuliskan perintah hentikan berulang kali. Hasil kodenya menjadi jauh lebih bersih, ringkas, dan aman dari kesalahan pemetaan tipe data. Fitur modern ini sangat disukai oleh pengembang backend modern.",
          example: {
            code: "$role = 'admin';\n$akses = match($role) {\n  'admin' => 'Full',\n  default => 'Read Only'\n};",
            output: "Full",
            note: "Match melempar UnhandledMatchError jika tidak ada cabang yang cocok dan default tidak disediakan. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Gunakan match untuk variabel `$status` dengan opsi `'active' => 'Aktif'` dan `default => 'Nonaktif'`, simpan ke `$label`.",
          starterCode: "<?php\n$status = 'active';\n// Tulis ekspresi match di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$label\\s*=\\s*match\\s*\\(\\s*\\$status\\s*\\)\\s*\\{\\s*['\"]active['\"]\\s*=>\\s*['\"]Aktif['\"]\\s*,\\s*default\\s*=>\\s*['\"]Nonaktif['\"]\\s*,?\\s*\\}\\s*;",
              message: "Gunakan ekspresi match sesuai instruksi",
            },
          ],
          solution: "<?php\n$status = 'active';\n$label = match ($status) {\n  'active' => 'Aktif',\n  default => 'Nonaktif',\n};",
        },
        {
          kind: "step",
          id: "laravel-1-7",
          title: "Operator Null Coalescing (??)",
          explanation:
            "Operator khusus ini memeriksa apakah nilai variabel di sebelah kirinya terdefinisi dan tidak bernilai kosong atau null. Jika variabel tersebut ada dan valid, nilainya akan diambil secara langsung; jika tidak ada, nilai cadangan di sebelah kanan yang akan dipakai. Operator ini sangat berguna untuk menangani parameter masukan opsional tanpa harus mengecek keberadaan variabel secara manual. Penggunaannya membuat baris kode pengondisian menjadi jauh lebih ringkas.",
          example: {
            code: "$nama = $_POST['nama'] ?? 'Guest';\necho $nama;",
            output: "Guest",
            note: "Operator ini dapat dirantai: $val = $a ?? $b ?? 'default';",
          },
          instruction:
            "Isi variabel `$page` dari `$_GET['page']` atau beri nilai default `1` menggunakan `??`.",
          starterCode: "<?php\n// Tulis ekspresi null coalescing di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$page\\s*=\\s*\\$_GET\\[['\"]page['\"]\\]\\s*\\?\\?\\s*1\\s*;",
              message: "Tuliskan: $page = $_GET['page'] ?? 1;",
            },
          ],
          solution: "<?php\n$page = $_GET['page'] ?? 1;",
        },
        {
          kind: "quiz",
          id: "laravel-1-kuis",
          title: "Kuis: Sintaks & Array PHP Dasar",
          questions: [
            {
              id: "l1-q1",
              type: "pilihan-ganda",
              question: "Manakah aturan penulisan variabel yang BENAR di dalam bahasa PHP?",
              choices: [
                "Variabel harus diawali dengan angka, misal $1user",
                "Semua nama variabel wajib diawali tanda $ dan bersifat case-sensitive",
                "Variabel PHP dibuat menggunakan kata kunci let atau const",
                "Variabel PHP tidak boleh mengandung huruf kapital",
              ],
              answerIndex: 1,
              explanation:
                "Di PHP, variabel selalu dimulai dengan tanda dolar ($) dan membedakan huruf besar/kecil ($nama berbeda dari $Nama).",
            },
            {
              id: "l1-q2",
              type: "pilihan-ganda",
              question: "Apa perbedaan utama antara variabel superglobal $_GET dan $_POST?",
              choices: [
                "$_GET hanya untuk mengambil angka, $_POST untuk mengambil string",
                "$_GET mengirimkan data terlihat di URL parameter, sedangkan $_POST mengirim data di dalam HTTP body request",
                "$_GET otomatis menghapus data setelah 5 detik, $_POST menyimpan data permanen",
                "$_GET digunakan di Linux, $_POST digunakan di Windows",
              ],
              answerIndex: 1,
              explanation:
                "$_GET membaca query string URL publik, sedangkan $_POST membaca muatan body HTTP request yang aman untuk form data sensitif.",
            },
            {
              id: "l1-q3",
              type: "pilihan-ganda",
              question: "Mengapa ekspresi match di PHP 8 lebih disukai daripada perulangan switch lama?",
              choices: [
                "Ekspresi match tidak membutuhkan PHP 8",
                "Match melakukan pemeriksaan tipe ketat (===) dan langsung mengembalikan nilai tanpa kata kunci break",
                "Match otomatis menyimpan hasil perhitungan ke dalam database",
                "Match bisa dijalankan langsung di dalam file HTML tanpa tag PHP",
              ],
              answerIndex: 1,
              explanation:
                "Ekspresi match mengevaluasi nilai secara strict (===) dan merupakan expression yang menghasilkan value secara ringkas.",
            },
            {
              id: "l1-q4",
              type: "pilihan-ganda",
              question: "Apa fungsi dari operator null coalescing (??) di PHP?",
              choices: [
                "Menggabungkan dua buah string menjadi satu",
                "Mengembalikan nilai default jika operand di sebelah kiri bernilai null atau belum terdefinisi",
                "Membagi dua buah bilangan bulat secara otomatis",
                "Menghapus seluruh file PHP di dalam server",
              ],
              answerIndex: 1,
              explanation:
                "Operator ?? menyederhanakan pemeriksaan isset($var) ? $var : 'default' menjadi sintaks ringkas $var ?? 'default'.",
            },
            {
              id: "l1-q5",
              type: "pilihan-ganda",
              question: "Apa akibatnya jika kamu menggunakan `require` untuk menyertakan file yang tidak pernah ada?",
              choices: [
                "PHP hanya akan menampilkan pesan Warning dan melanjutkan eksekusi program",
                "PHP melempar Fatal Error dan langsung menghentikan seluruh eksekusi skrip",
                "PHP otomatis membuat file kosong dengan nama tersebut",
                "Browser akan otomatis mengunduh file dari internet",
              ],
              answerIndex: 1,
              explanation:
                "Berbeda dengan include yang hanya memicu Warning, require menganggap keberadaan file mutlak wajib sehingga melempar Fatal Error saat file hilang.",
            },
          ],
        },
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
            "Di PHP 8, fitur Constructor Property Promotion memungkinkan deklarasi properti dan pengisian nilainya dilakukan langsung di dalam parameter konstruktor kelas. Fitur ini memangkas jumlah baris kode pengulangan secara signifikan saat membuat kelas layanan di Laravel. Dengan menambahkan visibilitas di parameter konstruktor, PHP secara otomatis mendeklarasikan properti tersebut. Hal ini membuat struktur kelas menjadi sangat bersih dan mudah dibaca.",
          example: {
            code: "class User {\n  public function __construct(public string $nama) {}\n}\n$u = new User('Bimo');\necho $u->nama;",
            output: "Bimo",
            note: "Menambahkan kata kunci visibility (public/private/protected) di parameter konstruktor otomatis mendaftarkannya sebagai properti. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Buat class `Product` dengan constructor property promotion `public string $title`.",
          starterCode: "<?php\n// Buat class Product di sini\n",
          language: "text",
          tests: [
            {
              pattern: "class\\s+Product\\s*\\{\\s*public\\s+function\\s+__construct\\s*\\(\\s*public\\s+string\\s+\\$title\\s*\\)\\s*\\{\\s*\\}\\s*\\}",
              message: "Gunakan sintaks constructor property promotion",
            },
          ],
          solution: "<?php\nclass Product {\n  public function __construct(public string $title) {}\n}",
        },
        {
          kind: "step",
          id: "laravel-2-2",
          title: "Hak Akses Visibility: public, protected, private",
          explanation:
            "Visibility menentukan batasan aksesibilitas properti dan metode dari luar instansi kelas. Kata kunci privat membatasi akses hanya untuk kelas itu sendiri, protected memperbolehkan akses untuk kelas turunan, sedangkan publik dapat diakses secara bebas dari mana saja. Konsep enkapsulasi ini menjaga integritas data internal agar tidak diubah secara tidak sah oleh pihak luar. Memahami tingkatan aksesibilitas ini mencegah munculnya bug keamanan data.",
          example: {
            code: "class BankAccount {\n  private int $balance = 1000;\n  public function getBalance(): int {\n    return $this->balance;\n  }\n}",
            output: "1000",
            note: "Membaca properti private langsung dari luar ($account->balance) melempar Error. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Buat properti `protected string $apiKey` dan metode getter public `getApiKey()` yang mengembalikan `$this->apiKey`.",
          starterCode: "<?php\nclass Service {\n  // Deklarasikan properti dan getter di sini\n}",
          language: "text",
          tests: [
            {
              pattern: "protected\\s+string\\s+\\$apiKey\\s*;[\\s\\S]*public\\s+function\\s+getApiKey\\s*\\(\\s*\\)[\\s\\S]*return\\s+\\$this->apiKey\\s*;",
              message: "Deklarasikan properti protected dan getter public",
            },
          ],
          solution: "<?php\nclass Service {\n  protected string $apiKey;\n  public function getApiKey(): string {\n    return $this->apiKey;\n  }\n}",
        },
        {
          kind: "step",
          id: "laravel-2-3",
          title: "Inheritance (Pewarisan Kelas)",
          explanation:
            "Pewarisan memungkinkan sebuah kelas mewarisi semua properti dan metode dari kelas induk menggunakan kata kunci khusus. Di Laravel, semua Model mengekstensikan kelas induk Model untuk mendapatkan kemampuan operasi database secara instan. Konsep ini menghindari duplikasi logika umum di berbagai tempat aplikasi. Kelas anak juga dapat menambahkan fungsi baru yang spesifik sesuai kebutuhan.",
          example: {
            code: "class Animal {\n  public function speak() { return 'Sound'; }\n}\nclass Dog extends Animal {}\n$d = new Dog(); echo $d->speak();",
            output: "Sound",
            note: "Gunakan parent::__construct() jika kelas anak ingin memanggil konstruktor induk. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Buat class `Admin` yang mewarisi class `User` menggunakan kata kunci `extends`.",
          starterCode: "<?php\nclass User {}\n// Buat class Admin yang mengekstensikan User\n",
          language: "text",
          tests: [
            {
              pattern: "class\\s+Admin\\s+extends\\s+User\\s*\\{\\s*\\}",
              message: "Gunakan kata kunci extends untuk pewarisan",
            },
          ],
          solution: "<?php\nclass User {}\nclass Admin extends User {}",
        },
        {
          kind: "step",
          id: "laravel-2-4",
          title: "Penggunaan Interface untuk Kontrak Metode",
          explanation:
            "Interface mendefinisikan rancangan metode tanpa mencantumkan isi implementasinya secara langsung. Kelas yang mengimplementasikan interface wajib menyediakan semua metode yang terdaftar di dalamnya, sehingga menjamin konsistensi antarmuka sistem. Di Laravel, interface menjadi pondasi arsitektur injeksi dependensi yang sangat fleksibel. Pola rancangan ini memungkinkan kamu menukar pustaka backend tanpa mengubah kode utama aplikasi.",
          example: {
            code: "interface PaymentInterface {\n  public function pay(int $amount): bool;\n}\nclass Midtrans implements PaymentInterface {\n  public function pay(int $amount): bool { return true; }\n}",
            output: "true",
            note: "Interface sangat penting untuk arsitektur Dependency Injection di Laravel. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Buat `interface RepositoryInterface` yang memiliki definisi metode `public function find(int $id);`.",
          starterCode: "<?php\n// Buat interface RepositoryInterface di sini\n",
          language: "text",
          tests: [
            {
              pattern: "interface\\s+RepositoryInterface\\s*\\{\\s*public\\s+function\\s+find\\s*\\(\\s*int\\s+\\$id\\s*\\)\\s*;\\s*\\}",
              message: "Definisikan interface dan method find(int $id)",
            },
          ],
          solution: "<?php\ninterface RepositoryInterface {\n  public function find(int $id);\n}",
        },
        {
          kind: "step",
          id: "laravel-2-5",
          title: "Menggunakan Trait untuk Modul Reusabel",
          explanation:
            "Trait memungkinkan pengembang menyuntikkan kumpulan metode reusable ke dalam beberapa kelas terpisah tanpa batasan pewarisan tunggal. Di Laravel, Trait seperti pustaka pabrik data atau notifikasi ditempelkan langsung pada kelas Model pengguna. Pendekatan ini memfasilitasi komposisi fungsi secara fleksibel antar kelas yang tidak sejalur pewarisan. Dengan Trait, kamu bisa membagikan blok kode tanpa perlu membuat hierarki kelas induk yang rumit.",
          example: {
            code: "trait Loggable {\n  public function log(string $msg) { echo $msg; }\n}\nclass Order {\n  use Loggable;\n}",
            output: "Order created",
            note: "Satu kelas bisa menggunakan banyak Trait sekaligus dipisahkan dengan koma. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Terapkan `trait Timestampable` ke dalam `class Invoice` menggunakan kata kunci `use`.",
          starterCode: "<?php\ntrait Timestampable {}\nclass Invoice {\n  // Gunakan trait Timestampable di sini\n}",
          language: "text",
          tests: [
            {
              pattern: "class\\s+Invoice\\s*\\{\\s*use\\s+Timestampable\\s*;\\s*\\}",
              message: "Gunakan kata kunci use Timestampable;",
            },
          ],
          solution: "<?php\ntrait Timestampable {}\nclass Invoice {\n  use Timestampable;\n}",
        },
        {
          kind: "step",
          id: "laravel-2-6",
          title: "Pengorganisasian Kode dengan Namespace",
          explanation:
            "Namespace mencegah terjadinya bentrokan nama kelas ketika dua paket pustaka berbeda menggunakan nama kelas yang persis sama. Namespace mencerminkan struktur folder proyek sesuai standar skema autoloading resmi. Pernyataan namespace wajib ditempatkan di baris paling awal berkas skrip. Penggunaan namespace membuat pengorganisasian ribuan berkas proyek Laravel menjadi rapi dan mudah ditemukan.",
          example: {
            code: "namespace App\\Services;\nclass Mailer {\n  public function send() { return 'ok'; }\n}",
            output: "ok",
            note: "Pernyataan namespace wajib ditulis pada baris paling atas setelah tag <?php. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Tambahkan deklarasi `namespace App\\Controllers;` di baris pertama kelas.",
          starterCode: "<?php\n// Tulis namespace App\\Controllers di sini\nclass HomeController {}",
          language: "text",
          tests: [
            {
              pattern: "namespace\\s+App\\\\Controllers\\s*;",
              message: "Tuliskan: namespace App\\Controllers;",
            },
          ],
          solution: "<?php\nnamespace App\\Controllers;\nclass HomeController {}",
        },
        {
          kind: "step",
          id: "laravel-2-7",
          title: "Menginstal Paket Eksternal dengan Composer",
          explanation:
            "Composer adalah alat bantu utama untuk mengunduh pustaka luar dari repositori resmi dan secara otomatis mendaftarkannya ke folder proyek. Perintah khusus Composer memperbarui manifes konfigurasi dan memasang berkas autoloader secara otomatis. Penggunaan Composer menghilangkan keharusan mengunduh pustaka secara manual dari situs web. Ekosistem pustaka yang luas ini mempercepat pembuatan fitur aplikasi kompleks.",
          example: {
            code: "// Di terminal:\ncomposer require carbonphp/carbon-lang",
            output: "Using version ^2.0 for carbonphp/carbon-lang",
            note: "Jangan pernah mengedit folder vendor/ secara manual karena akan tertimpa saat update.",
          },
          instruction:
            "Tuliskan perintah terminal untuk mengunduh paket `guzzlehttp/guzzle` menggunakan Composer.",
          starterCode: "# Tulis perintah composer require di sini\n",
          language: "text",
          tests: [
            {
              pattern: "composer\\s+require\\s+guzzlehttp/guzzle",
              message: "Gunakan perintah: composer require guzzlehttp/guzzle",
            },
          ],
          solution: "composer require guzzlehttp/guzzle",
        },
        {
          kind: "quiz",
          id: "laravel-2-kuis",
          title: "Kuis: OOP & Autoloading PHP",
          questions: [
            {
              id: "l2-q1",
              type: "pilihan-ganda",
              question: "Apakah keuntungan utama dari fitur Constructor Property Promotion di PHP 8?",
              choices: [
                "Properti kelas dapat diakses langsung tanpa membuat instance objek",
                "Meringkas pengenalan properti dan pengisian nilainya secara langsung di parameter __construct",
                "Membuat kelas PHP berjalan 100 kali lebih cepat di server Linux",
                "Mengubah kode PHP menjadi komponen tampilan HTML secara otomatis",
              ],
              answerIndex: 1,
              explanation:
                "Constructor property promotion menggabungkan definisi properti, tipe data, dan penetapan nilai ke dalam satu baris parameter konstruktor.",
            },
            {
              id: "l2-q2",
              type: "pilihan-ganda",
              question: "Tingkat hak akses (visibility) mana yang memperbolehkan properti diakses oleh kelas induk dan kelas turunannya saja?",
              choices: [
                "public",
                "private",
                "protected",
                "static",
              ],
              answerIndex: 2,
              explanation:
                "Protected memberikan aksesibilitas pada kelas itu sendiri dan seluruh kelas anak turunannya, tapi memblokir akses publik dari luar.",
            },
            {
              id: "l2-q3",
              type: "pilihan-ganda",
              question: "Mengapa standar Namespace PSR-4 sangat penting dalam proyek Laravel?",
              choices: [
                "Agar kode PHP tidak perlu diuji menggunakan pengujian otomatis",
                "Memungkinkan pemuatan berkas kelas secara otomatis (autoloading) berdasarkan struktur folder tanpa banyak require_once",
                "Menghapus seluruh berkas di folder vendor/ saat aplikasi berjalan",
                "Mengubah nama database MySQL secara otomatis",
              ],
              answerIndex: 1,
              explanation:
                "PSR-4 memetakan struktur namespace kelas ke direktori folder secara presisi sehingga Composer dapat melakukan autoloading.",
            },
            {
              id: "l2-q4",
              type: "pilihan-ganda",
              question: "Apa perbedaan mendasar antara Interface dan Trait di PHP?",
              choices: [
                "Interface berisi logika kode fungsi, Trait hanya berisi nama variabel",
                "Interface hanya mendefinisikan rancangan metode tanpa isi, sedangkan Trait berisi implementasi metode reusable yang dapat disuntikkan ke kelas",
                "Interface digunakan di Windows, Trait digunakan di macOS",
                "Tidak ada perbedaan sama sekali",
              ],
              answerIndex: 1,
              explanation:
                "Interface adalah kontrak tanpa logika, sedangkan Trait berisi implementasi fungsi nyata yang bisa digunakan bersama oleh banyak kelas.",
            },
            {
              id: "l2-q5",
              type: "pilihan-ganda",
              question: "Di dalam direktori manakah Composer menyimpan seluruh berkas pustaka eksternal yang diunduh?",
              choices: [
                "app/Http/Controllers/",
                "resources/views/",
                "vendor/",
                "storage/logs/",
              ],
              answerIndex: 2,
              explanation:
                "Composer mengisolasi seluruh dependensi luar beserta berkas autoload.php di dalam folder vendor/.",
            },
          ],
        },
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
            "## Kaitan ke Dunia Kerja\n\n" +
            "Penguasaan struktur folder Laravel dan arsitektur MVC adalah syarat utama saat bekerja dalam tim pengembang software profesional agar setiap pengembang dapat bekerja di area berkas yang terstruktur tanpa saling menimpa kode.",
        },
        {
          kind: "step",
          id: "laravel-3-1",
          title: "Routing Dasar: GET & POST Request",
          explanation:
            "Routing di dalam berkas web berfungsi memetakan alamat URL HTTP yang dimuat peramban ke fungsi penangan atau metode Controller. Metode GET menangani permintaan pembacaan halaman statis maupun dinamis, sedangkan metode POST menangani penerimaan pengiriman data dari formulir. Setiap deklarasi route membentuk peta navigasi utama aplikasi web Laravel secara terstruktur. Hal ini memberikan kejelasan alur data saat aplikasi berkembang.",
          example: {
            code: "use Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/about', function () {\n    return 'Halaman About';\n});",
            output: "Halaman About",
            note: "Semua route web yang mengembalikan tampilan HTML didaftarkan di routes/web.php.",
          },
          instruction:
            "Buat route GET dengan path `/contact` yang mengembalikan string `'Kontak Kami'`.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\n// Tulis route GET /contact di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::get\\s*\\(\\s*['\"]/contact['\"]\\s*,\\s*function\\s*\\(\\s*\\)\\s*\\{\\s*return\\s+['\"]Kontak Kami['\"]\\s*;?\\s*\\}\\s*\\)\\s*;",
              message: "Tuliskan Route::get('/contact', function() { return 'Kontak Kami'; });",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/contact', function () {\n    return 'Kontak Kami';\n});",
        },
        {
          kind: "step",
          id: "laravel-3-2",
          title: "Route Parameter & Named Route",
          explanation:
            "Route parameter menangkap bagian dari segmen URL dinamis seperti ID produk atau slug artikel menggunakan kurung kurawal. Menambahkan metode penamaan memudahkan pembuatan tautan URL di seluruh aplikasi tanpa perlu melakukan hardcode string URL fisik. Jika path URL fisik berubah di kemudian hari, pemanggilan fungsi penamaan route tetap bekerja secara konsisten. Kebiasaan ini sangat membantu saat refactoring struktur navigasi aplikasi web.",
          example: {
            code: "Route::get('/user/{id}', function ($id) {\n    return 'User ID: ' . $id;\n})->name('user.profile');",
            output: "User ID: 10",
            note: "Memanggil route('user.profile', ['id' => 10]) otomatis menghasilkan /user/10.",
          },
          instruction:
            "Buat route GET `/post/{slug}` dengan nama route `'post.show'` yang mengembalikan variabel `$slug`.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\n// Buat route dengan parameter slug dan name 'post.show'\n",
          language: "text",
          tests: [
            {
              pattern: "Route::get\\s*\\(\\s*['\"]/post/\\{slug\\}['\"]\\s*,\\s*function\\s*\\(\\s*\\$slug\\s*\\)\\s*\\{\\s*return\\s+\\$slug\\s*;?\\s*\\}\\s*\\)->name\\s*\\(\\s*['\"]post\\.show['\"]\\s*\\)\\s*;",
              message: "Gunakan Route::get('/post/{slug}', ...)->name('post.show');",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/post/{slug}', function ($slug) {\n    return $slug;\n})->name('post.show');",
        },
        {
          kind: "step",
          id: "laravel-3-3",
          title: "Membuat Controller dengan Artisan",
          explanation:
            "Controller memisahkan logika penanganan HTTP request dari berkas routing agar kode mudah dirawat dan terstruktur. Perintah Artisan terminal membuat berkas controller baru di dalam direktori controller secara otomatis. Penggunaan Controller menjaga file routing tetap ringkas hanya untuk pendaftaran alur navigasi. Pemisahan tanggung jawab ini adalah kunci dari arsitektur perangkat lunak yang baik.",
          example: {
            code: "// Di terminal:\nphp artisan make:controller ProductController",
            output: "INFO Controller [app/Http/Controllers/ProductController.php] created successfully.",
            note: "Gunakan opsi --resource untuk membuat controller lengkap dengan 7 method CRUD standar.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk membuat `UserController`.",
          starterCode: "# Tulis perintah artisan make:controller di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:controller\\s+UserController",
              message: "Gunakan perintah: php artisan make:controller UserController",
            },
          ],
          solution: "php artisan make:controller UserController",
        },
        {
          kind: "step",
          id: "laravel-3-4",
          title: "Menghubungkan Route ke Controller Method",
          explanation:
            "Untuk menghubungkan route ke metode spesifik di dalam Controller, teruskan array berisi nama kelas Controller dan nama metodenya secara presisi. Cara sintaks array ini didukung penuh oleh fitur auto-complete dan validasi tipe pada IDE modern. Pendekatan ini mencegah kesalahan penulisan string nama metode saat pengembangan. Pengelola basis kode dalam tim akan sangat terbantu oleh transparansi sintaksis ini.",
          example: {
            code: "use App\\Http\\Controllers\\ProductController;\n\nRoute::get('/products', [ProductController::class, 'index']);",
            output: "Menampilkan daftar produk dari controller",
            note: "Pastikan mengimpor namespace Controller di bagian atas berkas routes/web.php.",
          },
          instruction:
            "Hubungkan route GET `/profile` ke metode `'show'` pada `UserController::class`.",
          starterCode: "<?php\nuse App\\Http\\Controllers\\UserController;\nuse Illuminate\\Support\\Facades\\Route;\n\n// Tulis route ke UserController@show di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::get\\s*\\(\\s*['\"]/profile['\"]\\s*,\\s*\\[\\s*UserController::class\\s*,\\s*['\"]show['\"]\\s*\\]\\s*\\)\\s*;",
              message: "Gunakan: Route::get('/profile', [UserController::class, 'show']);",
            },
          ],
          solution: "<?php\nuse App\\Http\\Controllers\\UserController;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/profile', [UserController::class, 'show']);",
        },
        {
          kind: "step",
          id: "laravel-3-5",
          title: "Mencetak Data di View Blade {{ }}",
          explanation:
            "Templating engine Blade menggunakan sintaks kurung kurawal ganda untuk mencetak data variabel ke HTML secara aman. Blade secara otomatis menjalankan fungsi sanitasi string pada nilai yang dicetak untuk memblokir ancaman serangan Cross-Site Scripting. Sintaks ini mempermudah integrasi data dinamis yang dikirimkan dari Controller. Pengembang tidak perlu lagi mengetik panggilan fungsi sanitasi manual di setiap baris HTML.",
          example: {
            code: "<!-- resources/views/welcome.blade.php -->\n<h1>Selamat Datang, {{ $username }}!</h1>",
            output: "<h1>Selamat Datang, Bimo!</h1>",
            note: "Jika ingin mencetak HTML mentah tanpa sanitasi (hati-hati!), gunakan sintaks {!! $html !!}.",
          },
          instruction:
            "Tuliskan sintaks Blade untuk mencetak variabel `$title` di dalam tag `<h2>`.",
          starterCode: "<!-- Cetak $title di dalam h2 -->\n",
          language: "text",
          tests: [
            {
              pattern: "<h2>\\s*\\{\\{\\s*\\$title\\s*\\}\\}\\s*</h2>",
              message: "Tuliskan: <h2>{{ $title }}</h2>",
            },
          ],
          solution: "<h2>{{ $title }}</h2>",
        },
        {
          kind: "step",
          id: "laravel-3-6",
          title: "Direktif Perulangan Blade: @foreach",
          explanation:
            "Direktif khusus di Blade menyederhanakan penulisan perulangan array data langsung di dalam struktur kode HTML tanpa perlu membuka tag PHP manual. Berkas tampilan Blade disimpan dengan ekstensi khusus di dalam direktori tampilan aplikasi. Penggunaan direktif ini menghasilkan kode tampilan yang sangat rapi dan mudah dibaca oleh desainer UI. Logika tampilan menjadi terpisah jelas dari logika pengolahan data backend.",
          example: {
            code: "<ul>\n@foreach($items as $item)\n  <li>{{ $item }}</li>\n@endforeach\n</ul>",
            output: "<ul><li>Apel</li><li>Jeruk</li></ul>",
            note: "Blade juga menyediakan variabel khusus $loop (seperti $loop->first, $loop->iteration) di dalam foreach.",
          },
          instruction:
            "Buat perulangan `@foreach($users as $user)` yang mencetak `<span>{{ $user }}</span>` lalu ditutup `@endforeach`.",
          starterCode: "<!-- Tulis perulangan foreach Blade di sini -->\n",
          language: "text",
          tests: [
            {
              pattern: "@foreach\\s*\\(\\s*\\$users\\s+as\\s+\\$user\\s*\\)[\\s\\S]*<span>\\s*\\{\\{\\s*\\$user\\s*\\}\\}\\s*</span>[\\s\\S]*@endforeach",
              message: "Gunakan direktif @foreach dan @endforeach sesuai instruksi",
            },
          ],
          solution: "@foreach($users as $user)\n  <span>{{ $user }}</span>\n@endforeach",
        },
        {
          kind: "step",
          id: "laravel-3-7",
          title: "Membaca Kredensial Environment env()",
          explanation:
            "Fungsi pembantu khusus digunakan untuk mengambil nilai variabel konfigurasi langsung dari berkas konfigurasi lingkungan. Di dalam aplikasi produksi, nilai ini sebaiknya dipanggil melalui berkas konfigurasi di folder config demi mendukung optimasi pembacaan cache saat booting. Mengabaikan praktik ini dapat menyebabkan masalah saat optimasi cache diaktifkan. Pemisahan konfigurasi lingkungan menjaga keamanan kredensial rahasia server.",
          example: {
            code: "$appName = env('APP_NAME', 'Laravel');\necho $appName;",
            output: "BiLearn",
            note: "Jangan gunakan env() di luar folder config/ jika kamu akan menjalankan php artisan config:cache.",
          },
          instruction:
            "Ambil nilai `DB_HOST` dengan nilai default `'127.0.0.1'` menggunakan fungsi `env()`, simpan ke variabel `$host`.",
          starterCode: "<?php\n// Ambil DB_HOST dari env()\n",
          language: "text",
          tests: [
            {
              pattern: "\\$host\\s*=\\s*env\\s*\\(\\s*['\"]DB_HOST['\"]\\s*,\\s*['\"]127\\.0\\.0\\.1['\"]\\s*\\)\\s*;",
              message: "Tuliskan: $host = env('DB_HOST', '127.0.0.1');",
            },
          ],
          solution: "<?php\n$host = env('DB_HOST', '127.0.0.1');",
        },
        {
          kind: "quiz",
          id: "laravel-3-kuis",
          title: "Kuis: Fundamental Laravel & MVC",
          questions: [
            {
              id: "l3-q1",
              type: "pilihan-ganda",
              question: "Apakah komponen MVC di Laravel yang bertugas menangani permintaan masukan HTTP dan menentukan respon tampilan?",
              choices: [
                "Model",
                "View",
                "Controller",
                "Migration",
              ],
              answerIndex: 2,
              explanation:
                "Controller bertindak sebagai pengatur lalu lintas HTTP yang menerima request dan mengoordinasikan interaksi antara Model dan View.",
            },
            {
              id: "l3-q2",
              type: "pilihan-ganda",
              question: "Manakah sintaks Blade yang BENAR untuk mencetak isi variabel secara aman dari serangan Cross-Site Scripting (XSS)?",
              choices: [
                "<?php echo $name; ?>",
                "{{ $name }}",
                "{!! $name !!}",
                "<% $name %>",
              ],
              answerIndex: 1,
              explanation:
                "Sintaks {{ $name }} otomatis membungkus nilai variabel dengan fungsi sanitasi htmlspecialchars().",
            },
            {
              id: "l3-q3",
              type: "pilihan-ganda",
              question: "Mengapa berkas `.env` dilarang keras diunggah ke repositori Git publik?",
              choices: [
                "Karena berkas .env berukuran sangat besar hingga ratusan megabyte",
                "Karena berkas .env menyimpan kredensial rahasia seperti kunci enkripsi, password database, dan token API",
                "Karena Git akan merusak format penulisan berkas .env",
                "Karena berkas .env hanya bisa dibaca di sistem operasi Linux",
              ],
              answerIndex: 1,
              explanation:
                "Berkas .env berisi rahasia kredensial aplikasi yang jika terkespos ke publik dapat memicu kebocoran data dan keamanan server.",
            },
            {
              id: "l3-q4",
              type: "pilihan-ganda",
              question: "Apakah keuntungan utama memberikan nama pada route menggunakan metode `->name('nama.route')`?",
              choices: [
                "Route akan berjalan dua kali lebih cepat",
                "Memudahkan pembuatan URL di tampilan Blade via helper route() tanpa khawatir jika path URL fisik berubah di masa depan",
                "Route otomatis mendapatkan validasi keamanan database",
                "Membuat controller secara otomatis saat aplikasi dijalankan",
              ],
              answerIndex: 1,
              explanation:
                "Named routes mengisolasi referensi tautan di tampilan dari struktur URL fisik; kamu bebas mengubah path URL tanpa merusak panggilan route('nama').",
            },
            {
              id: "l3-q5",
              type: "pilihan-ganda",
              question: "Perintah Artisan apakah yang digunakan untuk membuat kelas Controller baru di Laravel?",
              choices: [
                "php artisan create:controller NamaController",
                "php artisan make:controller NamaController",
                "composer make:controller NamaController",
                "php artisan generate:controller NamaController",
              ],
              answerIndex: 1,
              explanation:
                "Perintah standar Laravel untuk membuat Controller baru di app/Http/Controllers/ adalah php artisan make:controller.",
            },
          ],
        },
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
            "## Kaitan ke Dunia Kerja\n\n" +
            "Pencegahan N+1 Query dan penulisan skema migration yang rapi adalah hal utama yang diperiksa saat *code review* dan evaluasi performa aplikasi backend Laravel di skala industri.",
        },
        {
          kind: "step",
          id: "laravel-4-1",
          title: "Membuat Berkas Migration Tabel",
          explanation:
            "Migration mengelola evolusi skema tabel database melalui kode program PHP secara terstruktur. Perintah Artisan terminal membuat berkas migration ber-stempel waktu di folder direktori database aplikasi. Stempel waktu memastikan urutan eksekusi pembuatan tabel di database berjalan secara konsisten dan urut. Hal ini memungkinkan seluruh pengembang tim memiliki struktur basis data yang identik.",
          example: {
            code: "// Di terminal:\nphp artisan make:migration create_products_table",
            output: "INFO Migration [database/migrations/2026_07_28_000000_create_products_table.php] created successfully.",
            note: "Stempel waktu di nama berkas memastikan migration dijalankan berurutan.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk membuat migration tabel `categories`.",
          starterCode: "# Tulis perintah make:migration di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:migration\\s+create_categories_table",
              message: "Gunakan perintah: php artisan make:migration create_categories_table",
            },
          ],
          solution: "php artisan make:migration create_categories_table",
        },
        {
          kind: "step",
          id: "laravel-4-2",
          title: "Membuat Model Eloquent",
          explanation:
            "Model Eloquent memetakan kelas PHP ke tabel di database secara otomatis tanpa konfigurasi rumit. Secara konvensi standar Laravel, nama Model berbentuk kata tunggal dan akan otomatis dihubungkan ke nama tabel berbentuk jamak di database. Menggunakan opsi khusus mempermudah pembuatan berkas migration secara bersamaan saat pembuatan Model. Praktik ini menghemat waktu pembuatan komponen skema data.",
          example: {
            code: "// Di terminal:\nphp artisan make:model Product",
            output: "INFO Model [app/Models/Product.php] created successfully.",
            note: "Tambahkan bendera -m (php artisan make:model Product -m) untuk membuat berkas migration sekaligus.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk membuat Model `Category` beserta migration-nya (`-m`).",
          starterCode: "# Tulis perintah make:model dengan flag -m\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:model\\s+Category\\s+-m",
              message: "Gunakan perintah: php artisan make:model Category -m",
            },
          ],
          solution: "php artisan make:model Category -m",
        },
        {
          kind: "step",
          id: "laravel-4-3",
          title: "CRUD dengan Eloquent ORM: create() & find()",
          explanation:
            "Eloquent ORM mempermudah mengeksekusi operasi database tanpa perlu mengetik sintaks SQL mentah secara manual. Fungsi pembuatan menyisipkan baris data baru ke dalam tabel, dan fungsi pencarian mengambil objek data spesifik berdasarkan nilai kunci utama. Cara ini melindungi aplikasi dari celah serangan injeksi SQL yang berbahaya. Kode program yang dihasilkan juga menjadi jauh lebih mudah dibaca oleh sesama pengembang.",
          example: {
            code: "use App\\Models\\Product;\n\n$product = Product::create([\n    'name' => 'Kopi Robusta',\n    'price' => 25000\n]);",
            output: "Object Product terbuat dengan ID 1",
            note: "Pastikan properti $fillable sudah diisi di dalam Model sebelum memanggil create().",
          },
          instruction:
            "Cari data `User` dengan ID `5` menggunakan metode `find()` dan simpan ke variabel `$user`.",
          starterCode: "<?php\nuse App\\Models\\User;\n\n// Cari User dengan ID 5\n",
          language: "text",
          tests: [
            {
              pattern: "\\$user\\s*=\\s*User::find\\s*\\(\\s*5\\s*\\)\\s*;",
              message: "Tuliskan: $user = User::find(5);",
            },
          ],
          solution: "<?php\nuse App\\Models\\User;\n\n$user = User::find(5);",
        },
        {
          kind: "step",
          id: "laravel-4-4",
          title: "Query Builder: where & paginate()",
          explanation:
            "Query Builder menyusun klausa penyaringan SQL secara berantai dan fluida. Perintah paginasi memotong hasil pencarian data menjadi beberapa halaman terpisah dan secara otomatis membentuk atribut navigasi yang siap ditampilkan di halaman antarmuka. Metode ini sangat menghemat penggunaan memori server saat menangani ribuan data. Pengalaman pengguna saat membuka daftar data juga menjadi jauh lebih responsif.",
          example: {
            code: "use App\\Models\\Product;\n\n$products = Product::where('stock', '>', 0)\n    ->orderBy('name', 'asc')\n    ->paginate(10);",
            output: "Koleksi paginasi berisi 10 produk",
            note: "Memanggil {{ $products->links() }} di Blade akan menampilkan tombol navigasi halaman HTML.",
          },
          instruction:
            "Ambil data `Product` ber-status `'active'` dipaginasi `15` item per halaman.",
          starterCode: "<?php\nuse App\\Models\\Product;\n\n// Ambil data aktif dipaginasi 15\n",
          language: "text",
          tests: [
            {
              pattern: "\\$products\\s*=\\s*Product::where\\s*\\(\\s*['\"]status['\"]\\s*,\\s*['\"]active['\"]\\s*\\)->paginate\\s*\\(\\s*15\\s*\\)\\s*;",
              message: "Tuliskan: $products = Product::where('status', 'active')->paginate(15);",
            },
          ],
          solution: "<?php\nuse App\\Models\\Product;\n\n$products = Product::where('status', 'active')->paginate(15);",
        },
        {
          kind: "step",
          id: "laravel-4-5",
          title: "Relasi Eloquent: hasMany & belongsTo",
          explanation:
            "Mendefinisikan relasi antar tabel dilakukan cukup dengan mengembalikan metode relasi spesifik di dalam kelas Model. Eloquent secara otomatis mendeteksi nama kunci asing berdasarkan konvensi nama model aplikasi. Penggunaan relasi ini mempermudah pengambilan data terkait tanpa perlu menuliskan perintah penggabungan tabel manual. Logika pemetaan data berelasi menjadi sangat intuitif.",
          example: {
            code: "class User extends Model {\n    public function posts() {\n        return $this->hasMany(Post::class);\n    }\n}",
            output: "$user->posts mengembalikan koleksi Post milik user tersebut",
            note: "Eloquent otomatis mendeteksi foreign key user_id pada tabel posts. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Definisikan relasi `belongsTo(User::class)` pada method `user()` di dalam Model `Post`.",
          starterCode: "<?php\nclass Post extends Model {\n  public function user() {\n    // Return relasi belongsTo User\n  }\n}",
          language: "text",
          tests: [
            {
              pattern: "return\\s+\\$this->belongsTo\\s*\\(\\s*User::class\\s*\\)\\s*;",
              message: "Tuliskan: return $this->belongsTo(User::class);",
            },
          ],
          solution: "<?php\nclass Post extends Model {\n  public function user() {\n    return $this->belongsTo(User::class);\n  }\n}",
        },
        {
          kind: "step",
          id: "laravel-4-6",
          title: "Eager Loading & Mencegah Masalah N+1",
          explanation:
            "Gunakan metode pemuatan awal untuk mengaktifkan fitur Eager Loading saat mengambil data berelasi dari database. Eager Loading menggabungkan kueri relasi menjadi dua query SQL efisien demi menghindari pembengkakan Masalah N+1 Kueri. Langkah optimasi ini sangat berdampak pada kecepatan respon aplikasi saat menangani data dalam jumlah besar. Server database tidak akan terbebani oleh pemanggilan kueri berulang.",
          example: {
            code: "use App\\Models\\Post;\n\n$posts = Post::with('user')->get();",
            output: "2 query dieksekusi alih-alih N+1 query",
            note: "Gunakan Model::with(['relasi1', 'relasi2']) jika ingin memuat banyak relasi sekaligus.",
          },
          instruction:
            "Ambil seluruh data `Product` dengan memuat relasi `category` menggunakan `with()`.",
          starterCode: "<?php\nuse App\\Models\\Product;\n\n// Ambil Product dengan relasi category\n",
          language: "text",
          tests: [
            {
              pattern: "\\$products\\s*=\\s*Product::with\\s*\\(\\s*['\"]category['\"]\\s*\\)->get\\s*\\(\\s*\\)\\s*;",
              message: "Tuliskan: $products = Product::with('category')->get();",
            },
          ],
          solution: "<?php\nuse App\\Models\\Product;\n\n$products = Product::with('category')->get();",
        },
        {
          kind: "step",
          id: "laravel-4-7",
          title: "Seeder & Factory untuk Data Dummy",
          explanation:
            "Model Factory dan Database Seeder mengotomatiskan pengisian ribuan baris data uji cobaan secara konsisten ke dalam database. Dengan mengombinasikan pustaka pembuat data palsu, kamu bisa membuat data uji realistis untuk mempercepat proses pengujian fitur antarmuka tanpa perlu menginput formulir secara manual. Fitur ini sangat menghemat waktu penguji dan pengembang antarmuka. Lingkungan pengembangan lokal dapat diisi data dummy dengan satu perintah.",
          example: {
            code: "// Di DatabaseSeeder.php:\nUser::factory(50)->create();",
            output: "50 user dummy berhasil dibuat di database",
            note: "Jalankan php artisan db:seed di terminal untuk mengeksekusi seeder.",
          },
          instruction:
            "Tuliskan perintah seeder untuk membuat `100` data `Product` menggunakan `factory(100)->create()`.",
          starterCode: "<?php\nuse App\\Models\\Product;\n\n// Buat 100 data Product factory\n",
          language: "text",
          tests: [
            {
              pattern: "Product::factory\\s*\\(\\s*100\\s*\\)->create\\s*\\(\\s*\\)\\s*;",
              message: "Tuliskan: Product::factory(100)->create();",
            },
          ],
          solution: "<?php\nuse App\\Models\\Product;\n\nProduct::factory(100)->create();",
        },
        {
          kind: "quiz",
          id: "laravel-4-kuis",
          title: "Kuis: Eloquent ORM & Relasi Database",
          questions: [
            {
              id: "l4-q1",
              type: "pilihan-ganda",
              question: "Jika kamu memiliki Model bernama `Article`, nama tabel apakah yang secara konvensi dicari oleh Eloquent di database?",
              choices: [
                "article_table",
                "articles",
                "tbl_article",
                "ArticleModel",
              ],
              answerIndex: 1,
              explanation:
                "Eloquent menggunakan konvensi nama tabel berbentuk jamak (plural) snake_case dari nama Model tunggalnya (Article -> articles).",
            },
            {
              id: "l4-q2",
              type: "pilihan-ganda",
              question: "Apakah dampak negatif dari Masalah N+1 Query di dalam aplikasi Laravel?",
              choices: [
                "Aplikasi akan merusak struktur file Blade secara otomatis",
                "Terjadi pembengkakan jumlah query SQL ke database yang menyebabkan aplikasi menjadi sangat lambat",
                "Laravel akan menghapus kolom primary key di tabel database",
                "Browser pengguna tidak bisa lagi menerima file gambar",
              ],
              answerIndex: 1,
              explanation:
                "N+1 query mengeksekusi query database berulang-ulang di dalam loop perulangan sehingga membebani server database secara drastis.",
            },
            {
              id: "l4-q3",
              type: "pilihan-ganda",
              question: "Metode Eloquent apakah yang digunakan untuk mengaktifkan Eager Loading guna mencegah Masalah N+1?",
              choices: [
                "->join()",
                "->with()",
                "->loadFast()",
                "->attach()",
              ],
              answerIndex: 1,
              explanation:
                "Metode ->with('namaRelasi') menginstruksikan Eloquent untuk memuat data relasi secara awal dalam query terpisah yang efisien.",
            },
            {
              id: "l4-q4",
              type: "pilihan-ganda",
              question: "Properti apakah yang wajib didefinisikan di dalam Model untuk mengizinkan penyisipan data melalui `Model::create()`?",
              choices: [
                "protected $table",
                "protected $fillable",
                "public $timestamps",
                "private $primaryKey",
              ],
              answerIndex: 1,
              explanation:
                "Properti $fillable menentukan daftar nama kolom yang diizinkan untuk diisi secara Mass Assignment.",
            },
            {
              id: "l4-q5",
              type: "pilihan-ganda",
              question: "Perintah Artisan apakah yang digunakan untuk mengeksekusi seluruh berkas Migration ke dalam database?",
              choices: [
                "php artisan db:run",
                "php artisan migrate",
                "composer run-migration",
                "php artisan schema:build",
              ],
              answerIndex: 1,
              explanation:
                "Perintah `php artisan migrate` mengeksekusi semua berkas migration yang belum pernah dijalankan sebelumnya.",
            },
          ],
        },
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
            "Setiap form ber-method POST wajib mencantumkan direktif khusus untuk mencegah serangan pemalsuan permintaan antar situs. Tanpa token tersembunyi ini, Laravel akan menolak permintaan masukan dan melempar halaman error status expired. Direktif ini menghasilkan input hidden bertipe token rahasia acak yang diverifikasi otomatis oleh middleware keamanan. Hal ini menjamin bahwa permintaan masukan benar-benar berasal dari pengguna sah.",
          example: {
            code: "<form action=\"/products\" method=\"POST\">\n  @csrf\n  <input type=\"text\" name=\"name\">\n  <button type=\"submit\">Simpan</button>\n</form>",
            output: "Form terender lengkap dengan hidden token CSRF",
            note: "Gunakan direktif @method('PUT') atau @method('DELETE') untuk mensimulasikan method HTTP PUT/DELETE di HTML.",
          },
          instruction:
            "Tuliskan direktif Blade `@csrf` di dalam tag `<form>`.",
          starterCode: "<form action=\"/login\" method=\"POST\">\n  <!-- Tulis direktif csrf di sini -->\n</form>",
          language: "text",
          tests: [
            {
              pattern: "@csrf",
              message: "Tuliskan direktif @csrf di dalam form",
            },
          ],
          solution: "<form action=\"/login\" method=\"POST\">\n  @csrf\n</form>",
        },
        {
          kind: "step",
          id: "laravel-5-2",
          title: "Validasi Request & Old Input",
          explanation:
            "Gunakan metode validasi di dalam controller untuk memvalidasi masukan formulir secara server-side. Jika aturan validasi gagal, Laravel secara otomatis menghentikan alur program, mengembalikan pengguna ke halaman formulir sebelumnya, serta mengisikan kembali data lama. Mekanisme ini mencegah pengguna dari keharusan mengulang pengisian data dari awal. Pengalaman pengguna menjadi jauh lebih nyaman dan efisien.",
          example: {
            code: "$validated = $request->validate([\n    'title' => 'required|max:255',\n    'email' => 'required|email'\n]);",
            output: "Data tervalidasi atau redirect otomatis jika gagal",
            note: "Fungsi helper old('email') di view akan memulihkan isian form sebelum terjadi error. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Validasi request dengan aturan `'name' => 'required'` dan `'age' => 'required|numeric'`.",
          starterCode: "<?php\n// Tulis validasi $request->validate di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$request->validate\\s*\\(\\s*\\[\\s*['\"]name['\"]\\s*=>\\s*['\"]required['\"]\\s*,\\s*['\"]age['\"]\\s*=>\\s*['\"]required\\|numeric['\"]\\s*\\]\\s*\\)\\s*;",
              message: "Gunakan aturan validasi yang diminta",
            },
          ],
          solution: "<?php\n$request->validate([\n  'name' => 'required',\n  'age' => 'required|numeric'\n]);",
        },
        {
          kind: "step",
          id: "laravel-5-3",
          title: "Form Request Class",
          explanation:
            "Pindahkan aturan validasi yang rumit dari Controller ke kelas terpisah khusus Form Request. Cara ini menjaga Controller tetap bersih dan berfokus pada alur pemrosesan data utama aplikasi. Semua aturan validasi dan otorisasi terisolasi dengan rapi di dalam satu berkas terdedikasi. Pemisahan berkas ini sangat membantu saat aplikasi berkembang menjadi sangat besar dan kompleks.",
          example: {
            code: "// Di terminal:\nphp artisan make:request StoreProductRequest",
            output: "INFO Request [app/Http/Requests/StoreProductRequest.php] created successfully.",
            note: "Ubah method authorize() menjadi return true; agar request diizinkan diproses.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk membuat Form Request `StoreUserRequest`.",
          starterCode: "# Tulis perintah make:request di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:request\\s+StoreUserRequest",
              message: "Gunakan perintah: php artisan make:request StoreUserRequest",
            },
          ],
          solution: "php artisan make:request StoreUserRequest",
        },
        {
          kind: "step",
          id: "laravel-5-4",
          title: "File Upload & Storage Facade",
          explanation:
            "Gunakan metode berkas dari request untuk menyimpan berkas yang diunggah pengguna ke sistem penyimpanan disk. Perintah ini secara otomatis mengacak nama berkas demi keamanan dan mengembalikan jalur lokasi relatif penyimpanan berkas. Sistem penyimpanan Laravel memudahkan pemindahan berkas dari disk lokal ke cloud storage tanpa merubah kode aplikasi. Fitur ini sangat mendukung skalabilitas aplikasi di server cloud.",
          example: {
            code: "if ($request->hasFile('photo')) {\n    $path = $request->file('photo')->store('photos', 'public');\n}",
            output: "Path berkas tersimpan: photos/randomname.jpg",
            note: "Jalankan php artisan storage:link agar berkas di storage/app/public dapat diakses via URL publik.",
          },
          instruction:
            "Simpan file dari request `file('document')` ke folder `'docs'` disk `'public'`.",
          starterCode: "<?php\n// Simpan file document ke disk public\n",
          language: "text",
          tests: [
            {
              pattern: "\\$path\\s*=\\s*\\$request->file\\s*\\(\\s*['\"]document['\"]\\s*\\)->store\\s*\\(\\s*['\"]docs['\"]\\s*,\\s*['\"]public['\"]\\s*\\)\\s*;",
              message: "Tuliskan: $path = $request->file('document')->store('docs', 'public');",
            },
          ],
          solution: "<?php\n$path = $request->file('document')->store('docs', 'public');",
        },
        {
          kind: "step",
          id: "laravel-5-5",
          title: "Error Handling & Custom Error View",
          explanation:
            "Buat berkas tampilan khusus di dalam folder errors untuk merancang antarmuka khusus saat kesalahan status HTTP terjadi. Laravel secara otomatis memuat tampilan khusus ini jika aplikasi melempar pengecualian HTTP dengan kode status yang bersesuaian. Fitur ini menjaga estetika antarmuka saat terjadi kesalahan server. Pengguna tidak akan melihat pesan error mentah yang menakutkan.",
          example: {
            code: "<!-- resources/views/errors/404.blade.php -->\n<h1>Halaman Tidak Ditemukan (404)</h1>",
            output: "<h1>Halaman Tidak Ditemukan (404)</h1>",
            note: "Kamu bisa membuat tampilan custom untuk error 500, 403, dan 419 di folder errors/.",
          },
          instruction:
            "Tampilkan pesan status akses ditolak 403 HTTP di dalam tag h1 pada berkas tampilan error.",
          starterCode: "<!-- Buat tampilan custom error 403 -->\n",
          language: "text",
          tests: [
            {
              pattern: "<h1>\\s*403 Forbidden\\s*</h1>",
              message: "Tuliskan: <h1>403 Forbidden</h1>",
            },
          ],
          solution: "<h1>403 Forbidden</h1>",
        },
        {
          kind: "step",
          id: "laravel-5-6",
          title: "Mass Assignment: $fillable vs $guarded",
          explanation:
            "Perlindungan Mass Assignment mencegah peretas menyuntikkan kolom terlarang saat pembuatan data dari request HTTP POST. Properti fillable menentukan daftar nama kolom yang diizinkan untuk diisi secara massal. Penerapan fitur keamanan ini melindungi integritas basis data dari manipulasi data sensitif. Setiap model yang menangani masukan formulir wajib dikonfigurasi properti keamanannya.",
          example: {
            code: "class Product extends Model {\n    protected $fillable = ['name', 'price', 'stock'];\n}",
            output: "Hanya 3 kolom tersebut yang diizinkan diisi via Product::create()",
            note: "Alternatifnya, gunakan protected $guarded = ['id']; untuk melindungi kolom spesifik. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Definisikan properti `protected $fillable = ['title', 'content'];` di dalam kelas Model.",
          starterCode: "<?php\nclass Article extends Model {\n  // Definisikan $fillable di sini\n}",
          language: "text",
          tests: [
            {
              pattern: "protected\\s+\\$fillable\\s*=\\s*\\[\\s*['\"]title['\"]\\s*,\\s*['\"]content['\"]\\s*\\]\\s*;",
              message: "Deklarasikan protected $fillable = ['title', 'content'];",
            },
          ],
          solution: "<?php\nclass Article extends Model {\n  protected $fillable = ['title', 'content'];\n}",
        },
        {
          kind: "quiz",
          id: "laravel-5-kuis",
          title: "Kuis: Form & Validasi Request",
          questions: [
            {
              id: "l5-q1",
              type: "pilihan-ganda",
              question: "Apakah pesan error HTTP yang akan muncul jika kamu lupa mencantumkan direktif `@csrf` pada form POST?",
              choices: [
                "404 Not Found",
                "419 Page Expired",
                "500 Internal Server Error",
                "200 OK",
              ],
              answerIndex: 1,
              explanation:
                "Lupa menyertakan token CSRF membuat permintaan ditolak oleh middleware Laravel dan memicu pesan error 419 Page Expired.",
            },
            {
              id: "l5-q2",
              type: "pilihan-ganda",
              question: "Fungsi helper Blade apakah yang digunakan untuk menampilkan kembali nilai masukan form sebelumnya setelah terjadi kegagalan validasi?",
              choices: [
                "previous()",
                "old('nama_field')",
                "restore()",
                "back()",
              ],
              answerIndex: 1,
              explanation:
                "Helper `old('nama_field')` mengambil masukan lama yang disimpan sementara di dalam session flash.",
            },
            {
              id: "l5-q3",
              type: "pilihan-ganda",
              question: "Perintah Artisan terminal apakah yang wajib dijalankan agar file di `storage/app/public` dapat diakses langsung dari web browser?",
              choices: [
                "php artisan storage:link",
                "php artisan make:storage",
                "composer storage-publish",
                "php artisan file:open",
              ],
              answerIndex: 0,
              explanation:
                "`php artisan storage:link` membuat tautan simbolik (symbolic link) dari public/storage ke storage/app/public.",
            },
            {
              id: "l5-q4",
              type: "pilihan-ganda",
              question: "Atribut HTML apakah yang wajib ditambahkan pada tag `<form>` saat formulir tersebut berisi elemen pengunggahan berkas gambar/file?",
              choices: [
                "type=\"file-upload\"",
                "enctype=\"multipart/form-data\"",
                "method=\"FILE\"",
                "target=\"_blank\"",
              ],
              answerIndex: 1,
              explanation:
                "Atribut `enctype=\"multipart/form-data\"` menginstruksikan peramban untuk membagi isi data formulir menjadi segmen biner yang dapat mengunggah file.",
            },
            {
              id: "l5-q5",
              type: "pilihan-ganda",
              question: "Apakah fungsi utama dari kelas Form Request (`make:request`) di Laravel?",
              choices: [
                "Membuat tabel baru di database MySQL",
                "Memindahkan aturan validasi masukan dari Controller ke kelas terpisah agar Controller tetap ringkas",
                "Menjalankan server web tambahan di port 9000",
                "Mengirim email notifikasi ke administrator secara otomatis",
              ],
              answerIndex: 1,
              explanation:
                "Form Request mengenkapsulasi logika otorisasi dan aturan validasi request sehingga Controller tidak dibebani oleh baris kode validasi.",
            },
          ],
        },
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
          title: "Laravel Breeze Scaffolding",
          explanation:
            "Laravel Breeze adalah starter kit resmi yang menyediakan fitur autentikasi terintegrasi lengkap dengan komponen tampilan. Breeze memangkas waktu pembuatan sistem autentikasi dari hitungan hari menjadi hitungan detik. Menggunakan Breeze menjamin kepatuhan fitur otentikasi terhadap praktik terbaik keamanan web modern. Pengembang baru sangat disarankan memulai proyek dengan starter kit resmi ini.",
          example: {
            code: "// Di terminal:\ncomposer require laravel/breeze --dev\nphp artisan breeze:install blade",
            output: "Breeze berhasil dipasang lengkap dengan route dan tampilan auth",
            note: "Jalankan php artisan migrate setelah breeze:install untuk membuat tabel users bawaan.",
          },
          instruction:
            "Tuliskan perintah terminal untuk mengunduh paket `laravel/breeze` sebagai dev dependency via Composer.",
          starterCode: "# Tulis perintah composer require breeze di sini\n",
          language: "text",
          tests: [
            {
              pattern: "composer\\s+require\\s+laravel/breeze\\s+--dev",
              message: "Gunakan perintah: composer require laravel/breeze --dev",
            },
          ],
          solution: "composer require laravel/breeze --dev",
        },
        {
          kind: "step",
          id: "laravel-6-2",
          title: "Proses Auth Manual (Auth Facade)",
          explanation:
            "Verifikasi kredensial login secara manual dapat dilakukan dengan memanggil metode pembantu autentikasi. Jika alamat email dan kata sandi cocok, Laravel secara otomatis mengaktifkan session pengguna di server backend. Metode ini sangat fleksibel jika kamu merancang form login khusus tanpa bergantung pada starter kit. Keamanan password hash ditangani secara transparan oleh mesin autentikasi.",
          example: {
            code: "use Illuminate\\Support\\Facades\\Auth;\n\nif (Auth::attempt($credentials)) {\n    $request->session()->regenerate();\n    return redirect()->intended('dashboard');\n}",
            output: "Pengguna berhasil login dan diarahkan ke dashboard",
            note: "Fungsi session()->regenerate() mencegah serangan pencurian session (session fixation).",
          },
          instruction:
            "Gunakan `Auth::attempt($credentials)` di dalam kondisi `if` untuk memeriksa kredensial.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Auth;\n\n// Tulis kondisi if Auth::attempt di sini\n",
          language: "text",
          tests: [
            {
              pattern: "if\\s*\\(\\s*Auth::attempt\\s*\\(\\s*\\$credentials\\s*\\)\\s*\\)",
              message: "Tuliskan: if (Auth::attempt($credentials))",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Auth;\n\nif (Auth::attempt($credentials)) {}",
        },
        {
          kind: "step",
          id: "laravel-6-3",
          title: "Proteksi Route dengan Middleware auth",
          explanation:
            "Kelompokkan route-route terproteksi di dalam berkas web routing menggunakan middleware otentikasi. Pengunjung anonim yang belum terautentikasi akan secara otomatis dialihkan kembali ke halaman login. Penerapan middleware ini mengamankan area privat aplikasi dari akses tidak sah pihak luar. Setiap rute sensitif wajib dilindungi oleh lapisan middleware ini.",
          example: {
            code: "Route::middleware(['auth'])->group(function () {\n    Route::get('/dashboard', [DashboardController::class, 'index']);\n});",
            output: "HTTP 302 Redirect to /login if unauthenticated",
            note: "Kamu juga bisa memanggil $this->middleware('auth') langsung di dalam konstruktor Controller.",
          },
          instruction:
            "Bungkus route GET `/profile` di dalam kelompok `Route::middleware(['auth'])`.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\n// Bungkus route profile dengan middleware auth\n",
          language: "text",
          tests: [
            {
              pattern: "Route::middleware\\s*\\(\\s*\\[\\s*['\"]auth['\"]\\s*\\]\\s*\\)->group\\s*\\(\\s*function\\s*\\(\\s*\\)\\s*\\{",
              message: "Gunakan Route::middleware(['auth'])->group(function() { ... });",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::middleware(['auth'])->group(function () {\n    Route::get('/profile', function() {});\n});",
        },
        {
          kind: "step",
          id: "laravel-6-4",
          title: "Otorisasi Hak Akses dengan Policy",
          explanation:
            "Policy mengatur hak akses spesifik terhadap satu entitas resource aplikasi. Perintah Artisan terminal membuat kelas policy baru yang terikat langsung pada Model target. Menggunakan Policy menjaga aturan otorisasi terisolasi di satu tempat terpusat tanpa mengotori kelas Controller. Pola ini sangat disukai dalam aplikasi skala besar.",
          example: {
            code: "class PostPolicy {\n    public function update(User $user, Post $post): bool {\n        return $user->id === $post->user_id;\n    }\n}",
            output: "Return true mengizinkan edit, return false memicu error 403",
            note: "Panggil $this->authorize('update', $post) di controller untuk mengevaluasi Policy.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk membuat Policy `ProductPolicy` yang terikat ke Model `Product`.",
          starterCode: "# Tulis perintah make:policy di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:policy\\s+ProductPolicy\\s+--model=Product",
              message: "Gunakan perintah: php artisan make:policy ProductPolicy --model=Product",
            },
          ],
          solution: "php artisan make:policy ProductPolicy --model=Product",
        },
        {
          kind: "step",
          id: "laravel-6-5",
          title: "Role Sederhana dengan Gate",
          explanation:
            "Gate cocok untuk pemeriksaan izin global sederhana tanpa terikat pada entitas Model tertentu. Gate didaftarkan di dalam berkas penyedia layanan aplikasi secara terpusat. Gate memberikan solusi cepat untuk pemeriksaan otorisasi hak akses umum seperti area administrator. Evaluasi izin ini dapat digunakan langsung di dalam tampilan Blade atau Controller.",
          example: {
            code: "use Illuminate\\Support\\Facades\\Gate;\n\nGate::define('admin-only', function (User $user) {\n    return $user->role === 'admin';\n});",
            output: "Gate admin-only terdefinisi",
            note: "Di tampilan Blade, gunakan direktif @can('admin-only') ... @endcan untuk menyembunyikan tombol admin.",
          },
          instruction:
            "Definisikan `Gate::define('is-admin', ...)` yang mengembalikan nilai boolean `$user->is_admin`.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Gate;\n\n// Definisikan Gate is-admin di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Gate::define\\s*\\(\\s*['\"]is-admin['\"]\\s*,\\s*function\\s*\\(\\s*User\\s+\\$user\\s*\\)\\s*\\{\\s*return\\s+\\$user->is_admin\\s*;?\\s*\\}\\s*\\)\\s*;",
              message: "Gunakan Gate::define('is-admin', function(User $user) { return $user->is_admin; });",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Gate;\n\nGate::define('is-admin', function (User $user) {\n    return $user->is_admin;\n});",
        },
        {
          kind: "step",
          id: "laravel-6-6",
          title: "Verifikasi Email (MustVerifyEmail)",
          explanation:
            "Tambahkan interface khusus pada Model pengguna untuk mewajibkan pengguna mengonfirmasi alamat email sebelum bisa mengakses fitur. Gunakan middleware verifikasi pada route untuk memproteksinya dari pendaftaran akun bot atau spam. Pengaturan ini memastikan validitas alamat email pengguna terdaftar di dalam sistem. Fitur verifikasi ini sudah terintegrasi rapi di Laravel.",
          example: {
            code: "use Illuminate\\Contracts\\Auth\\MustVerifyEmail;\n\nclass User extends Authenticatable implements MustVerifyEmail {\n    // ...\n}",
            output: "User wajib verifikasi email via link konfirmasi",
            note: "Tambahkan middleware 'verified' bersama 'auth': Route::middleware(['auth', 'verified']). Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Tambahkan `implements MustVerifyEmail` pada deklarasi `class User extends Authenticatable`.",
          starterCode: "<?php\n// Lengkapi class User dengan implements MustVerifyEmail\nclass User extends Authenticatable {}",
          language: "text",
          tests: [
            {
              pattern: "class\\s+User\\s+extends\\s+Authenticatable\\s+implements\\s+MustVerifyEmail\\s*\\{\\s*\\}",
              message: "Tuliskan: class User extends Authenticatable implements MustVerifyEmail {}",
            },
          ],
          solution: "<?php\nclass User extends Authenticatable implements MustVerifyEmail {}",
        },
        {
          kind: "quiz",
          id: "laravel-6-kuis",
          title: "Kuis: Autentikasi & Otorisasi",
          questions: [
            {
              id: "l6-q1",
              type: "pilihan-ganda",
              question: "Apakah perbedaan mendasar antara Autentikasi dan Otorisasi?",
              choices: [
                "Autentikasi memverifikasi identitas pengguna (login), sedangkan Otorisasi memeriksa hak akses terhadap tindakan spesifik",
                "Autentikasi digunakan untuk mengunggah gambar, Otorisasi untuk mengunduh PDF",
                "Autentikasi dilakukan di database, Otorisasi dilakukan di file CSS",
                "Tidak ada perbedaan, keduanya adalah kata sinonim",
              ],
              answerIndex: 0,
              explanation:
                "Autentikasi menjawab 'Siapa Anda?' (Identitas), sedangkan Otorisasi menjawab 'Apa yang boleh Anda lakukan?' (Hak Akses).",
            },
            {
              id: "l6-q2",
              type: "pilihan-ganda",
              question: "Paket starter kit resmi apakah dari Laravel yang menyediakan perancangan fitur Login dan Register siap pakai berbasis Blade/Tailwind?",
              choices: [
                "Laravel Sanctum",
                "Laravel Breeze",
                "Laravel Horizon",
                "Laravel Passport",
              ],
              answerIndex: 1,
              explanation:
                "Laravel Breeze adalah starter kit resmi paling ringan untuk menyediakan scaffolding autentikasi lengkap.",
            },
            {
              id: "l6-q3",
              type: "pilihan-ganda",
              question: "Manakah metode otorisasi yang paling tepat digunakan jika kamu ingin membatasi hak akses pengeditan data terikat pada satu Model tertentu?",
              choices: [
                "Gate",
                "Policy",
                "Migration",
                "Seeder",
              ],
              answerIndex: 1,
              explanation:
                "Policy dirancang khusus untuk mengorganisir logika otorisasi yang terikat pada satu Model spesifik.",
            },
            {
              id: "l6-q4",
              type: "pilihan-ganda",
              question: "Direktif Blade apakah yang digunakan untuk menyembunyikan atau menampilkan elemen HTML berdasarkan hasil evaluasi Gate/Policy?",
              choices: [
                "@ifauth ... @endif",
                "@can('action', $model) ... @endcan",
                "@gate('action') ... @endgate",
                "@role('admin') ... @endrole",
              ],
              answerIndex: 1,
              explanation:
                "Direktif Blade `@can('action', $model)` memeriksa izin otorisasi Gate/Policy sebelum merender blok HTML di dalamnya.",
            },
            {
              id: "l6-q5",
              type: "pilihan-ganda",
              question: "Middleware apakah yang otomatis mengalihkan pengunjung anonim yang belum login kembali ke halaman login?",
              choices: [
                "guest",
                "auth",
                "verified",
                "throttle",
              ],
              answerIndex: 1,
              explanation:
                "Middleware `auth` memeriksa status autentikasi session pengguna; jika belum login, pengguna dialihkan ke route login.",
            },
          ],
        },
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
            "## Kaitan ke Dunia Kerja\n\n" +
            "Kemampuan merancang RESTful API yang konsisten dengan otentikasi Sanctum serta pembuatan dokumentasi OpenAPI/Swagger adalah keahlian utama yang paling dicari untuk posisi Backend API Engineer.",
        },
        {
          kind: "step",
          id: "laravel-7-1",
          title: "Route API di routes/api.php",
          explanation:
            "Route API di dalam berkas api secara otomatis memiliki awalan prefix khusus, terbebas dari middleware CSRF token, dan didesain khusus mengembalikan respon berformat JSON. Pemisahan berkas route web dan API ini memudahkan penerapan lapisan middleware yang berbeda untuk aplikasi mobile atau web SPA. Struktur ini memastikan arsitektur headless backend tetap terisolasi dengan rapi. Pengembang frontend dapat dengan mudah mengonsumsi endpoint ini.",
          example: {
            code: "// Di routes/api.php:\nRoute::get('/products', function () {\n    return response()->json(['data' => []]);\n});",
            output: "JSON response diakses via http://127.0.0.1:8000/api/products",
            note: "Mulai Laravel 11, file routes/api.php dapat diaktifkan via php artisan install:api. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Buat route GET API `/users` yang mengembalikan `response()->json(['status' => 'ok'])`.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\n// Tulis route GET API /users di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::get\\s*\\(\\s*['\"]/users['\"]\\s*,\\s*function\\s*\\(\\s*\\)\\s*\\{\\s*return\\s+response\\(\\)->json\\s*\\(\\s*\\[\\s*['\"]status['\"]\\s*=>\\s*['\"]ok['\"]\\s*\\]\\s*\\)\\s*;?\\s*\\}\\s*\\)\\s*;",
              message: "Gunakan response()->json(['status' => 'ok']) di dalam route API",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/users', function () {\n    return response()->json(['status' => 'ok']);\n});",
        },
        {
          kind: "step",
          id: "laravel-7-2",
          title: "API Resource untuk Membentuk Respon JSON",
          explanation:
            "API Resource mengubah data Eloquent Model menjadi bentuk objek JSON yang rapi dan memfilter properti mana saja yang layak ditampilkan ke publik. Penggunaan Resource memastikan konsistensi format serialisasi data di seluruh endpoint aplikasi. Pengembang dapat memformat ulang tampilan angka atau tanggal secara terpusat di dalam Resource ini. Hal ini menghindarkan ekspos langsung kolom internal database ke publik.",
          example: {
            code: "// Di ProductResource.php:\npublic function toArray($request): array {\n    return [\n        'id' => $this->id,\n        'name' => $this->name,\n        'price_formatted' => 'Rp ' . number_format($this->price)\n    ];\n}",
            output: "Payload JSON bertransformasi rapi",
            note: "Gunakan ProductResource::collection($products) untuk mengubah koleksi banyak data sekaligus.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk membuat API Resource `UserResource`.",
          starterCode: "# Tulis perintah make:resource di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:resource\\s+UserResource",
              message: "Gunakan perintah: php artisan make:resource UserResource",
            },
          ],
          solution: "php artisan make:resource UserResource",
        },
        {
          kind: "step",
          id: "laravel-7-3",
          title: "Laravel Sanctum Token Authentication",
          explanation:
            "Laravel Sanctum menerbitkan Personal Access Token untuk autentikasi API pada aplikasi mobile atau SPA frontend. Token baru diterbitkan dengan memanggil metode khusus dari objek pengguna. Klien kemudian menyertakan token ini di header request HTTP pada setiap transaksi berikutnya. Mekanisme token ini tidak memerlukan pengelolaan session di peramban web. Pengguna mobile dapat tetap login tanpa sering terputus.",
          example: {
            code: "$token = $user->createToken('auth_token')->plainTextToken;\nreturn response()->json(['token' => $token]);",
            output: "JSON response mengembalikan string token acak",
            note: "Klien mengirimkan token ini di header HTTP: Authorization: Bearer <token>.",
          },
          instruction:
            "Terbitkan token bernama `'mobile'` dari objek `$user` dan simpan ke variabel `$token`.",
          starterCode: "<?php\n// Terbitkan plainTextToken bernama mobile dari $user\n",
          language: "text",
          tests: [
            {
              pattern: "\\$token\\s*=\\s*\\$user->createToken\\s*\\(\\s*['\"]mobile['\"]\\s*\\)->plainTextToken\\s*;",
              message: "Tuliskan: $token = $user->createToken('mobile')->plainTextToken;",
            },
          ],
          solution: "<?php\n$token = $user->createToken('mobile')->plainTextToken;",
        },
        {
          kind: "step",
          id: "laravel-7-4",
          title: "Status Code HTTP di API Response",
          explanation:
            "Gunakan HTTP status code standar untuk mengindikasikan status transaksi API secara transparan. Kode status 200 OK dan 201 Created digunakan untuk transaksi sukses, sedangkan status error mengindikasikan masalah otorisasi atau validasi. Penggunaan status code yang benar mempermudah penanganan error di sisi aplikasi frontend. Pengembang aplikasi mobile dapat memetakan pesan kesalahan secara presisi.",
          example: {
            code: "return response()->json([\n    'message' => 'Produk berhasil dibuat'\n], 201);",
            output: "HTTP status code 201 Created dikirim ke client",
            note: "Jangan pernah mengembalikan status 200 OK jika transaksi sebenarnya mengalami error. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Kembalikan respon JSON `['message' => 'Created']` dengan HTTP status code `201`.",
          starterCode: "<?php\n// Return response json dengan status 201\n",
          language: "text",
          tests: [
            {
              pattern: "return\\s+response\\(\\)->json\\s*\\(\\s*\\[\\s*['\"]message['\"]\\s*=>\\s*['\"]Created['\"]\\s*\\]\\s*,\\s*201\\s*\\)\\s*;",
              message: "Tuliskan: return response()->json(['message' => 'Created'], 201);",
            },
          ],
          solution: "<?php\nreturn response()->json(['message' => 'Created'], 201);",
        },
        {
          kind: "step",
          id: "laravel-7-5",
          title: "Paginated API Collection Response",
          explanation:
            "Mengembalikan koleksi Resource yang dipaginasi secara otomatis mencantumkan meta pagination di dalam struktur respon JSON. Meta ini berisi informasi total halaman, halaman saat ini, dan tautan ke halaman berikutnya. Fitur ini mempermudah pembuatan navigasi halaman pada aplikasi mobile atau SPA. Beban pengiriman data JSON juga menjadi sangat efisien.",
          example: {
            code: "use App\\Http\\Resources\\ProductResource;\nuse App\\Models\\Product;\n\nreturn ProductResource::collection(Product::paginate(10));",
            output: "JSON response lengkap dengan objek meta dan links pagination",
            note: "Client dapat mengirimkan parameter ?page=2 di URL untuk berpindah halaman data.",
          },
          instruction:
            "Kembalikan koleksi paginasi `UserResource::collection(User::paginate(15))`.",
          starterCode: "<?php\nuse App\\Http\\Resources\\UserResource;\nuse App\\Models\\User;\n\n// Return UserResource collection dipaginasi 15\n",
          language: "text",
          tests: [
            {
              pattern: "return\\s+UserResource::collection\\s*\\(\\s*User::paginate\\s*\\(\\s*15\\s*\\)\\s*\\)\\s*;",
              message: "Tuliskan: return UserResource::collection(User::paginate(15));",
            },
          ],
          solution: "<?php\nuse App\\Http\\Resources\\UserResource;\nuse App\\Models\\User;\n\nreturn UserResource::collection(User::paginate(15));",
        },
        {
          kind: "step",
          id: "laravel-7-6",
          title: "Rate Limiting pada Middleware API",
          explanation:
            "Rate limiting membatasi jumlah request per menit yang boleh dikirimkan oleh satu alamat IP untuk mencegah serangan penolakan layanan. Proteksi ini menjaga stabilitas dan ketersediaan layanan API server dari banjir request jahat. Jika batas terlampaui, server secara otomatis menghentikan request lanjutan. Fitur ini wajib diaktifkan pada semua endpoint publik.",
          example: {
            code: "Route::middleware(['auth:sanctum', 'throttle:60,1'])->group(function () {\n    Route::get('/user', function (Request $request) {\n        return $request->user();\n    });\n});",
            output: "Request dibatasi maksimum 60 kali per menit",
            note: "Jika batas terlampaui, Laravel otomatis mengembalikan status HTTP 429 Too Many Requests.",
          },
          instruction:
            "Terapkan middleware `throttle:60,1` pada grup route API.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\n// Terapkan middleware throttle:60,1 di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::middleware\\s*\\(\\s*\\[\\s*['\"]throttle:60,1['\"]\\s*\\]\\s*\\)->group",
              message: "Gunakan Route::middleware(['throttle:60,1'])->group(...)",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::middleware(['throttle:60,1'])->group(function () {});",
        },
        {
          kind: "step",
          id: "laravel-7-7",
          title: "Dokumentasi API dengan Scramble",
          explanation:
            "Library khusus seperti Scramble secara otomatis menghasilkan dokumentasi OpenAPI atau Swagger UI berdasarkan tipe data dan Form Request aplikasi. Dokumentasi otomatis ini mempermudah kolaborasi antara tim backend dan frontend tanpa perlu menulis file konfigurasi manual. Setiap pembaruan kode API akan langsung memperbarui dokumentasi secara otomatis. Hal ini menghemat waktu pembuatan dokumentasi teknis.",
          example: {
            code: "// Di terminal:\ncomposer require dedoc/scramble",
            output: "OpenAPI 3.0 JSON Schema Generated at /scramble",
            note: "Scramble membaca type hints dan docblock PHP 8 secara otomatis.",
          },
          instruction:
            "Tuliskan perintah terminal composer untuk mengunduh paket `dedoc/scramble`.",
          starterCode: "# Tulis perintah composer require scramble di sini\n",
          language: "text",
          tests: [
            {
              pattern: "composer\\s+require\\s+dedoc/scramble",
              message: "Gunakan perintah: composer require dedoc/scramble",
            },
          ],
          solution: "composer require dedoc/scramble",
        },
        {
          kind: "quiz",
          id: "laravel-7-kuis",
          title: "Kuis: RESTful API & Sanctum",
          questions: [
            {
              id: "l7-q1",
              type: "pilihan-ganda",
              question: "Apakah awalan prefix URL default yang diberikan secara otomatis untuk semua route yang didaftarkan di `routes/api.php`?",
              choices: [
                "/web/",
                "/api/",
                "/v1/",
                "/rest/",
              ],
              answerIndex: 1,
              explanation:
                "Laravel secara otomatis menambahkan prefix URL `/api/` untuk seluruh route yang didaftarkan di berkas routes/api.php.",
            },
            {
              id: "l7-q2",
              type: "pilihan-ganda",
              question: "Apakah fungsi utama dari kelas API Resource di Laravel?",
              choices: [
                "Mengubah struktur data Eloquent Model menjadi payload objek JSON yang rapi dan terfilter",
                "Menjalankan kompilasi CSS Tailwind secara otomatis",
                "Menghapus database MySQL setiap kali ada request masuk",
                "Mengirimkan pesan SMS ke nomor telepon pengembang",
              ],
              answerIndex: 0,
              explanation:
                "API Resource bertindak sebagai layer transformasi yang membentuk keluaran JSON yang konsisten dari Model Eloquent.",
            },
            {
              id: "l7-q3",
              type: "pilihan-ganda",
              question: "Paket bawaan Laravel apakah yang digunakan untuk menyediakan otentikasi API berbasis Personal Access Token (Bearer Token)?",
              choices: [
                "Laravel Breeze",
                "Laravel Sanctum",
                "Laravel Horizon",
                "Laravel Passport",
              ],
              answerIndex: 1,
              explanation:
                "Laravel Sanctum adalah solusi standar yang sangat ringan untuk mengelola Personal Access Token dan session SPA.",
            },
            {
              id: "l7-q4",
              type: "pilihan-ganda",
              question: "HTTP Status Code berapakah yang secara standar dikembalikan saat pembuataan data baru berhasil dilakukan melalui API?",
              choices: [
                "200 OK",
                "201 Created",
                "400 Bad Request",
                "500 Server Error",
              ],
              answerIndex: 1,
              explanation:
                "Status code 201 Created mengindikasikan bahwa transaksi pembuatan data baru di server telah sukses.",
            },
            {
              id: "l7-q5",
              type: "pilihan-ganda",
              question: "Apa yang terjadi jika klien API melebihi batas jumlah request per menit yang diatur oleh middleware Rate Limiting (`throttle`)?",
              choices: [
                "Server mengembalikan status HTTP 429 Too Many Requests",
                "Server otomatis merestart database",
                "Aplikasi akan mengirimkan email ke pengguna",
                "Request akan dialihkan ke halaman Google",
              ],
              answerIndex: 0,
              explanation:
                "Rate limiter yang terlampaui akan menghentikan request berlebihan dan mengembalikan HTTP 429 Too Many Requests.",
            },
          ],
        },
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
          title: "Queue & Job Async",
          explanation:
            "Pindahkan proses lambat seperti kirim email atau generate PDF ke antrean Job latar belakang agar respon HTTP ke pengguna tetap instan tanpa tertahan. Pemrosesan asynchronous ini sangat meningkatkan kapasitas penanganan lalu lintas pada server web. Pengguna tidak perlu menunggu berdetik-detik saat menekan tombol pendaftaran. Sistem antrean Laravel mendukung backend database hingga Redis.",
          example: {
            code: "// Mengirim Job ke antrean:\nSendWelcomeEmailJob::dispatch($user);",
            output: "Job terkirim ke antrean database/redis",
            note: "Jalankan php artisan queue:work di terminal untuk memproses pekerjaan di antrean.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk membuat kelas Job `ProcessPodcast`.",
          starterCode: "# Tulis perintah make:job di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:job\\s+ProcessPodcast",
              message: "Gunakan perintah: php artisan make:job ProcessPodcast",
            },
          ],
          solution: "php artisan make:job ProcessPodcast",
        },
        {
          kind: "step",
          id: "laravel-8-2",
          title: "Task Scheduling (Cron Jobs)",
          explanation:
            "Jadwalkan tugas otomatis seperti backup database harian di dalam berkas konfigurasi menggunakan sintaks fluent tanpa perlu menyusun banyak file cron OS manual. Pengaturan ini memusatkan seluruh jadwal otomatisasi sistem di dalam basis kode aplikasi. Pemeliharaan jadwal otomatisasi menjadi sangat transparan bagi seluruh anggota tim. Kamu bisa mengatur tugas berjalan harian, mingguan, atau setiap menit.",
          example: {
            code: "use Illuminate\\Support\\Facades\\Schedule;\n\nSchedule::command('emails:send')->daily();",
            output: "Perintah emails:send dijadwalkan berjalan sekali setiap hari",
            note: "Jadwal pendukung meliputi ->hourly(), ->weekly(), ->everyMinute(), atau ->cron('0 0 * * *').",
          },
          instruction:
            "Jadwalkan perintah `Schedule::command('backup:run')->daily();`.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Schedule;\n\n// Jadwalkan backup:run harian di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Schedule::command\\s*\\(\\s*['\"]backup:run['\"]\\s*\\)->daily\\s*\\(\\s*\\)\\s*;",
              message: "Tuliskan: Schedule::command('backup:run')->daily();",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Schedule;\n\nSchedule::command('backup:run')->daily();",
        },
        {
          kind: "step",
          id: "laravel-8-3",
          title: "Optimasi Cache Production",
          explanation:
            "Di lingkungan produksi, jalankan perintah caching Artisan untuk mempercepat booting route dan file konfigurasi sehingga meningkatkan throughput aplikasi. Proses caching ini menghilangkan kebutuhan pembacaan berkas disk berulang-ulang di setiap request HTTP yang masuk. Kinerja server backend akan meningkat hingga beberapa kali lipat. Praktik ini wajib diterapkan pada setiap proses rilis aplikasi ke server live.",
          example: {
            code: "// Di terminal server produksi:\nphp artisan config:cache\nphp artisan route:cache",
            output: "Configuration and routes cached successfully.",
            note: "Gunakan php artisan optimize:clear saat ingin menghapus seluruh cache aplikasi.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk melakukan caching konfigurasi `config:cache`.",
          starterCode: "# Tulis perintah config:cache di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+config:cache",
              message: "Gunakan perintah: php artisan config:cache",
            },
          ],
          solution: "php artisan config:cache",
        },
        {
          kind: "step",
          id: "laravel-8-4",
          title: "Mail & Notifications Facade",
          explanation:
            "Kirim email berformat tampilan Blade yang indah menggunakan kelas Mailable terdedikasi. Facade Mail mempermudah pengiriman email secara synchronous maupun asynchronous via sistem antrean Job. Integrasi ini mendukung berbagai penyedia layanan SMTP eksternal tanpa merubah sintaks panggilan utama. Template email juga dapat diuji secara lokal dengan mudah.",
          example: {
            code: "use Illuminate\\Support\\Facades\\Mail;\nuse App\\Mail\\WelcomeMail;\n\nMail::to($user->email)->send(new WelcomeMail());",
            output: "Email terkirim ke alamat pengguna",
            note: "Konfigurasi driver SMTP email diatur pada file .env (MAIL_MAILER, MAIL_HOST).",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk membuat kelas Mailable `InvoiceMail`.",
          starterCode: "# Tulis perintah make:mail di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:mail\\s+InvoiceMail",
              message: "Gunakan perintah: php artisan make:mail InvoiceMail",
            },
          ],
          solution: "php artisan make:mail InvoiceMail",
        },
        {
          kind: "step",
          id: "laravel-8-5",
          title: "Event & Listener Pattern",
          explanation:
            "Event melempar kejadian sistem, dan Listener merespon kejadian tersebut secara independen tanpa menumpuk logika di kelas Controller. Arsitektur berorientasi event ini membuat penambahan fitur baru menjadi sangat modular dan aman dari efek samping. Kode aplikasi menjadi terisolasi sesuai tanggung jawabnya masing-masing. Komponen sistem dapat dikembangkan oleh beberapa pengembang secara bersamaan.",
          example: {
            code: "// Melempar event:\nUserRegistered::dispatch($user);",
            output: "Seluruh listener terhubung otomatis merespon event",
            note: "Buat event & listener dengan php artisan make:event NamaEvent dan php artisan make:listener NamaListener.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk membuat Event `OrderProcessed`.",
          starterCode: "# Tulis perintah make:event di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:event\\s+OrderProcessed",
              message: "Gunakan perintah: php artisan make:event OrderProcessed",
            },
          ],
          solution: "php artisan make:event OrderProcessed",
        },
        {
          kind: "step",
          id: "laravel-8-6",
          title: "Logging & Debugging Produksi (Laravel Telescope)",
          explanation:
            "Laravel Telescope menyediakan dashboard inspeksi visual untuk memantau HTTP request, exception, query database, dan queue job secara real-time di lingkungan pengujian. Telescope mempermudah penelusuran masalah aplikasi secara komprehensif tanpa harus mengurai berkas log mentah. Pengembang dapat mengidentifikasi query database yang lambat secara cepat. Alat observabilitas ini sangat meningkatkan produktivitas tim pengembang.",
          example: {
            code: "// Di terminal:\ncomposer require laravel/telescope --dev\nphp artisan telescope:install",
            output: "Dashboard inspeksi Telescope aktif di URL /telescope",
            note: "Pastikan membatasi akses dashboard Telescope hanya untuk pengguna ber-role admin di lingkungan produksi.",
          },
          instruction:
            "Tuliskan perintah terminal composer untuk mengunduh paket `laravel/telescope` sebagai dev dependency.",
          starterCode: "# Tulis perintah composer require telescope di sini\n",
          language: "text",
          tests: [
            {
              pattern: "composer\\s+require\\s+laravel/telescope\\s+--dev",
              message: "Gunakan perintah: composer require laravel/telescope --dev",
            },
          ],
          solution: "composer require laravel/telescope --dev",
        },
        {
          kind: "quiz",
          id: "laravel-8-kuis",
          title: "Kuis: Fitur Skalabilitas Produksi",
          questions: [
            {
              id: "l8-q1",
              type: "pilihan-ganda",
              question: "Apakah keuntungan utama memindahkan proses pengiriman email ke dalam Queue Job di Laravel?",
              choices: [
                "Email akan sampai dalam hitungan 0.001 milidetik ke penerima",
                "Pengguna mendapatkan respon HTTP secara instan tanpa perlu menunggu proses koneksi server SMTP email selesai",
                "Warna email otomatis berubah menjadi hitam putih",
                "Server tidak memerlukan koneksi internet untuk mengirim email",
              ],
              answerIndex: 1,
              explanation:
                "Queue mengeksekusi tugas berat di latar belakang sehingga pengguna mendapatkan respon langsung tanpa tertahan.",
            },
            {
              id: "l8-q2",
              type: "pilihan-ganda",
              question: "Perintah Artisan apakah yang harus selalu dijalankan di latar belakang server untuk memproses pekerjaan di antrean Queue?",
              choices: [
                "php artisan queue:work",
                "php artisan job:start",
                "composer run-queue",
                "php artisan serve",
              ],
              answerIndex: 0,
              explanation:
                "`php artisan queue:work` memantau antrean dan mengeksekusi Job yang masuk secara kontinyu.",
            },
            {
              id: "l8-q3",
              type: "pilihan-ganda",
              question: "Mengapa kamu harus menjalankan `php artisan queue:restart` setelah melakukan deploy pembaruan kode baru di server?",
              choices: [
                "Agar database MySQL terhapus secara otomatis",
                "Karena worker queue menyimpan kode lama di memori RAM; merestartnya memaksa worker memuat ulang versi kode program terbaru",
                "Agar nama variabel di file .env diperbarui secara publik",
                "Untuk menghapus seluruh berkas gambar pengguna",
              ],
              answerIndex: 1,
              explanation:
                "Proses queue:work mengisolasi kode di memori RAM; merestartnya diperlukan agar perubahan kode baru diterapkan.",
            },
            {
              id: "l8-q4",
              type: "pilihan-ganda",
              question: "Berapa banyak baris cronjob OS yang wajib didaftarkan di server Linux untuk menjalankan seluruh Task Scheduler Laravel?",
              choices: [
                "10 baris cronjob per jam",
                "Tepat 1 baris cronjob utama yang memanggil php artisan schedule:run",
                "1 baris untuk setiap Controller di aplikasi",
                "Tidak membutuhkan cronjob sama sekali",
              ],
              answerIndex: 1,
              explanation:
                "Laravel hanya membutuhkan 1 baris cronjob utama di server yang mengeksekusi schedule:run setiap menit.",
            },
            {
              id: "l8-q5",
              type: "pilihan-ganda",
              question: "Perintah Artisan apakah yang digunakan untuk menggabungkan seluruh berkas konfigurasi menjadi 1 berkas cache cepat di produksi?",
              choices: [
                "php artisan config:cache",
                "php artisan make:config",
                "composer config-optimize",
                "php artisan env:build",
              ],
              answerIndex: 0,
              explanation:
                "Perintah `php artisan config:cache` menyatukan seluruh file opsi konfigurasi ke dalam 1 file tunggal demi booting cepat.",
            },
          ],
        },
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
            "Pest PHP adalah testing framework elegan ber-sintaks expressive yang menjadi standar baru pengujian di ekosistem Laravel modern. Berkas pengujian diletakkan di dalam folder terdedikasi sesuai jenis pengujiannya. Sintaksnya yang alami mempermudah penulisan skenario uji bagi pengembang pemula. Menuliskan test otomatis memberikan jaminan bahwa fitur baru tidak merusak kode lama yang sudah berjalan.",
          example: {
            code: "test('halaman utama dapat diakses', function () {\n    $this->get('/')->assertStatus(200);\n});",
            output: "PASS Tests\\Feature\\ExampleTest > halaman utama dapat diakses status 200 OK",
            note: "Jalankan perintah vendor/bin/pest atau php artisan test di terminal untuk mengeksekusi test. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Tuliskan test Pest `test('halaman about ok', function () { $this->get('/about')->assertOk(); });`.",
          starterCode: "<?php\n// Tulis test Pest sederhana di sini\n",
          language: "text",
          tests: [
            {
              pattern: "test\\s*\\(\\s*['\"]halaman about ok['\"]\\s*,\\s*function\\s*\\(\\s*\\)\\s*\\{\\s*\\$this->get\\s*\\(\\s*['\"]/about['\"]\\s*\\)->assertOk\\s*\\(\\s*\\)\\s*;?\\s*\\}\\s*\\)\\s*;",
              message: "Gunakan sintaks test() Pest sesuai instruksi",
            },
          ],
          solution: "<?php\ntest('halaman about ok', function () {\n    $this->get('/about')->assertOk();\n});",
        },
        {
          kind: "step",
          id: "laravel-9-2",
          title: "Feature Test: HTTP Request & Assert Response",
          explanation:
            "Feature test menguji alur kerja penuh dari request HTTP masuk hingga perubahan di database dan respon balik antarmuka. Buat berkas Feature test dengan opsi khusus menggunakan perintah Artisan terminal. Pengujian fitur memberikan jaminan bahwa seluruh komponen terintegrasi dengan benar dalam skenario nyata. Tim pengembang dapat melakukan refactoring secara aman.",
          example: {
            code: "// Di terminal:\nphp artisan make:test ProductTest --pest",
            output: "INFO Test [tests/Feature/ProductTest.php] created successfully.",
            note: "Tambahkan flag --unit jika ingin membuat Unit Test.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk membuat Feature test `UserTest` berbasis Pest (`--pest`).",
          starterCode: "# Tulis perintah make:test --pest di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:test\\s+UserTest\\s+--pest",
              message: "Gunakan perintah: php artisan make:test UserTest --pest",
            },
          ],
          solution: "php artisan make:test UserTest --pest",
        },
        {
          kind: "step",
          id: "laravel-9-3",
          title: "Database Test: RefreshDatabase Trait",
          explanation:
            "Gunakan trait pembersih database di file test agar database pengujian di-reset otomatis ke kondisi bersih di setiap pengujian. Langkah ini mencegah data uji sebelumnya mengotori test berikutnya yang dapat memicu pengujian gagal. Hasil pengujian menjadi deterministik dan konsisten di setiap lingkungan eksekusi. Fitur ini sangat krusial untuk tes integrasi database.",
          example: {
            code: "uses(Illuminate\\Foundation\\Testing\\RefreshDatabase::class);\n\ntest('dapat membuat produk', function () {\n    Product::factory()->create(['name' => 'Kopi']);\n    $this->assertDatabaseHas('products', ['name' => 'Kopi']);\n});",
            output: "Database di-reset bersih dan data terverifikasi",
            note: "Metode assertDatabaseHas($table, $data) memastikan data benar-benar tersimpan di DB. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Gunakan assertion `$this->assertDatabaseHas('users', ['email' => 'bimo@test.com']);`.",
          starterCode: "<?php\n// Tulis assertion assertDatabaseHas di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$this->assertDatabaseHas\\s*\\(\\s*['\"]users['\"]\\s*,\\s*\\[\\s*['\"]email['\"]\\s*=>\\s*['\"]bimo@test\\.com['\"]\\s*\\]\\s*\\)\\s*;",
              message: "Tuliskan: $this->assertDatabaseHas('users', ['email' => 'bimo@test.com']);",
            },
          ],
          solution: "<?php\n$this->assertDatabaseHas('users', ['email' => 'bimo@test.com']);",
        },
        {
          kind: "step",
          id: "laravel-9-4",
          title: "Menguji Auth & ActingAs",
          explanation:
            "Gunakan metode simulasi identitas untuk mensimulasikan kondisi user yang sudah login saat melakukan request HTTP di dalam berkas pengujian. Fitur ini memungkinkan kamu menguji hak akses otorisasi tanpa melalui alur UI form login secara manual. Pengujian menjadi berjalan sangat cepat dan efisien. Skenario otorisasi hak akses pengguna dapat diverifikasi secara presisi.",
          example: {
            code: "test('user terautentikasi dapat melihat dashboard', function () {\n    $user = User::factory()->create();\n    $this->actingAs($user)->get('/dashboard')->assertOk();\n});",
            output: "Request disimulasikan atas nama $user",
            note: "Menguji tanpa actingAs pada route terproteksi harus menguji pengalihan 302 ke halaman login. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Simulasikan login `$this->actingAs($user)` sebelum melakukan HTTP GET ke `/settings`.",
          starterCode: "<?php\n// Simulasikan actingAs($user) dan get('/settings')\n",
          language: "text",
          tests: [
            {
              pattern: "\\$this->actingAs\\s*\\(\\s*\\$user\\s*\\)->get\\s*\\(\\s*['\"]/settings['\"]\\s*\\)",
              message: "Tuliskan: $this->actingAs($user)->get('/settings');",
            },
          ],
          solution: "<?php\n$this->actingAs($user)->get('/settings');",
        },
        {
          kind: "step",
          id: "laravel-9-5",
          title: "Mocking Service Eksternal (Http::fake)",
          explanation:
            "Gunakan pemalsuan HTTP request untuk memalsukan respon dari API pihak ketiga agar test tidak melakukan request jaringan asli yang lambat dan tidak stabil. Mocking memastikan pengujian berjalan cepat dan dapat dilakukan secara offline tanpa jaringan internet. Biaya panggilan API pihak ketiga juga menjadi terhindar. Pengujian tetap memberikan kepastian logika bisnis.",
          example: {
            code: "use Illuminate\\Support\\Facades\\Http;\n\nHttp::fake([\n    'api.payment.com/*' => Http::response(['status' => 'success'], 200),\n]);",
            output: "Request HTTP luar dipalsukan secara instan",
            note: "Mocking memastikan pengujian berjalan cepat offline tanpa memicu pembayaran sungguhan. Catatan jujur: panel preview tidak menjalankan PHP, jadi kamu tidak akan melihat hasilnya di sini — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Jalankan di proyek Laravel sungguhan untuk melihat keluarannya.",
          },
          instruction:
            "Palsukan request ke `api.github.com/*` menggunakan `Http::fake()`.",
          starterCode: "<?php\nuse Illuminate\\Support\\Facades\\Http;\n\n// Palsukan request ke api.github.com/*\n",
          language: "text",
          tests: [
            {
              pattern: "Http::fake\\s*\\(\\s*\\[\\s*['\"]api\\.github\\.com/\\*['\"]\\s*=>\\s*Http::response",
              message: "Gunakan Http::fake(['api.github.com/*' => Http::response(...)]);",
            },
          ],
          solution: "<?php\nuse Illuminate\\Support\\Facades\\Http;\n\nHttp::fake([\n  'api.github.com/*' => Http::response([], 200),\n]);",
        },
        {
          kind: "step",
          id: "laravel-9-6",
          title: "Strategi Pengujian Berprioritas",
          explanation:
            "Utamakan menguji alur sukses utama terlebih dahulu, disusul oleh kegagalan validasi masukan, dan otorisasi hak akses pengguna. Menulis test berprioritas memberikan perlindungan regresi terbaik dengan investasi waktu minimum dari pengembang. Strategi ini membantu tim pengembang fokus pada area paling kritis dari aplikasi. Persentase cakupan pengujian juga dapat dipantau secara berkala.",
          example: {
            code: "test('pengunjung anonim tidak bisa menghapus produk', function () {\n    $product = Product::factory()->create();\n    $this->delete(\"/products/{$product->id}\")->assertRedirect('/login');\n});",
            output: "Otorisasi pengamatan terverifikasi aman",
            note: "Jalankan php artisan test --coverage untuk melihat persentase baris kode yang teruji.",
          },
          instruction:
            "Tuliskan perintah Artisan terminal untuk mengeksekusi pengujian beserta laporan cakupan kode (`--coverage`).",
          starterCode: "# Tulis perintah test dengan flag --coverage di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+test\\s+--coverage",
              message: "Gunakan perintah: php artisan test --coverage",
            },
          ],
          solution: "php artisan test --coverage",
        },
        {
          kind: "quiz",
          id: "laravel-9-kuis",
          title: "Kuis: Automated Testing dengan Pest",
          questions: [
            {
              id: "l9-q1",
              type: "pilihan-ganda",
              question: "Apakah nama testing framework modern bertata bahasa expressive yang menjadi standar baru pengujian di ekosistem Laravel?",
              choices: [
                "JUnit",
                "Pest PHP",
                "Jest",
                "RSpec",
              ],
              answerIndex: 1,
              explanation:
                "Pest PHP adalah testing framework elegan berbasis PHPUnit yang paling populer di ekosistem Laravel.",
            },
            {
              id: "l9-q2",
              type: "pilihan-ganda",
              question: "Apakah fungsi dari trait `RefreshDatabase` saat digunakan di dalam berkas pengujian?",
              choices: [
                "Menghapus instalasi PHP dari sistem pengembang",
                "Mereset dan membersihkan database pengujian sebelum dan sesudah setiap test dijalankan",
                "Mengubah password database produksi",
                "Membuat 1000 controller secara acak",
              ],
              answerIndex: 1,
              explanation:
                "RefreshDatabase mengisolasi transaksi database di setiap test agar pengujian selalu dimulai dari kondisi bersih.",
            },
            {
              id: "l9-q3",
              type: "pilihan-ganda",
              question: "Metode apakah yang digunakan untuk mensimulasikan login pengguna di dalam test sebelum melakukan HTTP Request?",
              choices: [
                "->$this->loginAs($user)",
                "->$this->actingAs($user)",
                "->$this->authUser($user)",
                "->$this->setSession($user)",
              ],
              answerIndex: 1,
              explanation:
                "Metode `$this->actingAs($user)` mengotentikasi pengguna spesifik untuk pengujian HTTP request berikutnya.",
            },
            {
              id: "l9-q4",
              type: "pilihan-ganda",
              question: "Mengapa kita menggunakan `Http::fake()` saat menguji fitur yang berhubungan dengan API pihak ketiga?",
              choices: [
                "Agar pengujian tidak tergantung jaringan luar, lebih cepat, dan tidak mengikis kuota/biaya API asli",
                "Agar API pihak ketiga bangkrut",
                "Karena Pest PHP tidak mendukung koneksi jaringan internet",
                "Agar password database dapat diubah via API",
              ],
              answerIndex: 0,
              explanation:
                "Mocking dengan Http::fake() memalsukan respon API jaringan sehingga test berjalan instan dan deterministik tanpa ketergantungan internet.",
            },
            {
              id: "l9-q5",
              type: "pilihan-ganda",
              question: "Perintah Artisan terminal apakah yang digunakan untuk mengeksekusi seluruh pengujian aplikasi Laravel?",
              choices: [
                "php artisan test",
                "composer run-tests",
                "php artisan execute:test",
                "laravel test:run",
              ],
              answerIndex: 0,
              explanation:
                "Perintah `php artisan test` menjalankan test runner (Pest / PHPUnit) dan menampilkan hasil pengujian secara visual.",
            },
          ],
        },
      ],
    },
  ],
};
