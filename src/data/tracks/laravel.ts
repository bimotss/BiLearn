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
          kind: "step",
          id: "laravel-1-1",
          title: "Sintaks Dasar PHP: Variabel & Echo",
          explanation:
            "File PHP diawali dengan tag `<?php`. Variabel diawali simbol `$` dan perintah mencetak ke layar menggunakan `echo`.",
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
            "Array asosiatif menggunakan kunci berpasangan (key-value) dengan sintaks `=>`.",
          example: {
            code: "$user = ['nama' => 'Bimo', 'umur' => 25];\necho $user['nama'];",
            output: "Bimo",
            note: "Array asosiatif di PHP sangat mirip dengan JSON / Objek.",
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
            "Perulangan `foreach` adalah cara paling alami untuk melintasi elemen array di PHP.",
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
          title: "Fungsi & Arrow Function di PHP",
          explanation:
            "Fungsi didefinisikan dengan kata kunci `function`. PHP 7.4+ juga mendukung Arrow Function ringkas `fn($x) => $x * 2`.",
          example: {
            code: "$double = fn($x) => $x * 2;\necho $double(5);",
            output: "10",
            note: "Arrow function otomatis mewarisi variabel dari scope luar.",
          },
          instruction:
            "Tuliskan arrow function `$tambah = fn($a, $b) => $a + $b;`.",
          starterCode: "<?php\n// Tulis arrow function di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$tambah\\s*=\\s*fn\\s*\\(\\s*\\$a\\s*,\\s*\\$b\\s*\\)\\s*=>\\s*\\$a\\s*\\+\\s*\\$b\\s*;",
              message: "Gunakan: $tambah = fn($a, $b) => $a + $b;",
            },
          ],
          solution: "<?php\n$tambah = fn($a, $b) => $a + $b;",
        },
        {
          kind: "step",
          id: "laravel-1-5",
          title: "Superglobal $_GET & $_POST",
          explanation:
            "Saat user mengisi formulir atau melakukan pencarian, bagaimana cara PHP menangkap data tersebut? Jawabannya: Superglobal! Gunakan `$_GET` untuk menangkap data yang terbuka di URL (cocok untuk pencarian, misal `?search=kopi`). Gunakan `$_POST` untuk menangkap data tersembunyi dari form (seperti password saat login). Data POST lebih aman dan bisa menampung teks panjang. Jebakan mematikan: jangan langsung masukkan nilai `$_POST` ke database tanpa disaring (sanitize) — ini celah keamanan (SQL Injection) yang paling sering diretas.",
          example: {
            code: "$nama = $_POST['nama'] ?? 'Anonim';",
            output: "Membaca data input 'nama' dari request POST form.",
            note: "Selalu sanitasi data input superglobal untuk keamanan.",
          },
          instruction:
            "Tulis pembacaan input `$_POST['email'] ?? '';`.",
          starterCode: "<?php\n// Tulis pembacaan POST di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$_POST\\[\\s*['\"]email['\"]\\s*\\]\\s*\\?\\?\\s*['\"]['\"]\\s*;",
              message: "Gunakan: $_POST['email'] ?? '';",
            },
          ],
          solution: "<?php\n$email = $_POST['email'] ?? '';",
        },
        {
          kind: "step",
          id: "laravel-1-6",
          title: "Pemisahan Berkas: require_once",
          explanation:
            "Perintah `require_once 'file.php'` mengimpor file PHP lain dan akan menghentikan eksekusi script jika file tidak ditemukan.",
          example: {
            code: "require_once 'config.php';",
            output: "Mengimpor dan mengeksekusi file config.php.",
            note: "require_once mencegah pengimporan ganda yang menyebabkan redeclaration error.",
          },
          instruction:
            "Tuliskan perintah impor `require_once 'db.php';`.",
          starterCode: "<?php\n// Tulis require_once di sini\n",
          language: "text",
          tests: [
            {
              pattern: "require_once\\s+['\"]db\\.php['\"]\\s*;",
              message: "Tuliskan: require_once 'db.php';",
            },
          ],
          solution: "<?php\nrequire_once 'db.php';",
        },
        {
          kind: "step",
          id: "laravel-1-7",
          title: "PHP 8 Modern: Match Expression & Null Coalescing Operator",
          explanation:
            "PHP 8 mengenalkan ekspresi `match` yang lebih bersih daripada `switch`, serta operator null coalescing `??=`.",
          example: {
            code:
              "$status = match($code) {\n" +
              "  200 => 'OK',\n" +
              "  404 => 'Not Found',\n" +
              "  default => 'Unknown',\n" +
              "};",
            output: "Mengembalikan string 'OK' jika $code bernilai 200.",
            note: "Ekspresi match melakukan perbandingan ketat (===).",
          },
          instruction:
            "Tuliskan penetapan variabel `$role = $user['role'] ?? 'guest';`.",
          starterCode: "<?php\n// Tulis null coalescing di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$role\\s*=\\s*\\$user\\[\\s*['\"]role['\"]\\s*\\]\\s*\\?\\?\\s*['\"]guest['\"]\\s*;",
              message: "Gunakan: $role = $user['role'] ?? 'guest';",
            },
          ],
          solution: "<?php\n$role = $user['role'] ?? 'guest';",
        },
        {
          kind: "quiz",
          id: "laravel-1-kuis",
          title: "Kuis: PHP Dasar",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Saat pengguna mencari produk menggunakan form pencarian, data dikirim melalui URL (contoh: /search?q=sepatu). Variabel superglobal PHP mana yang tepat untuk mengambil nilai pencarian tersebut?",
              choices: ["$_POST","$_GET","$_SERVER","$_SESSION"],
              answerIndex: 1,
              explanation: "$_GET menyimpan data dari URL query string, yang biasa digunakan untuk operasi aman seperti pencarian."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Kamu ingin menampilkan daftar nama barang dari array menggunakan perulangan. Sintaks mana yang paling disarankan dan natural di PHP untuk mengiterasi array tanpa perlu menghitung indeks secara manual?",
              choices: ["for ($i=0; $i<count($items); $i++)","while ($item = current($items))","foreach ($items as $item)","loop ($items)"],
              answerIndex: 2,
              explanation: "Perulangan foreach dirancang khusus untuk melintasi elemen array di PHP dengan sintaks yang bersih dan mudah dibaca."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Dalam sebuah aplikasi, kamu harus menghentikan proses eksekusi kode jika file konfigurasi utama tidak ditemukan. Fungsi impor mana yang paling tepat untuk digunakan?",
              choices: ["include_once","require_once","import","load"],
              answerIndex: 1,
              explanation: "require_once akan menghentikan eksekusi script dengan fatal error jika file tidak ditemukan, sangat cocok untuk file esensial seperti konfigurasi."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Seorang pengguna menginputkan data sensitif melalui form login. Mengapa sangat dianjurkan untuk menggunakan metode POST daripada GET?",
              choices: ["POST lebih cepat dieksekusi oleh server","POST tidak menampilkan data di URL sehingga lebih aman dari rekaman riwayat browser","POST otomatis mengenkripsi password menggunakan SSL","GET hanya bisa mengirim tipe data angka"],
              answerIndex: 1,
              explanation: "Data POST dikirim dalam body request dan tidak terlihat di URL, sehingga lebih aman untuk data sensitif seperti password."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kamu ingin memberikan nilai default 'Guest' jika variabel peran ($role) tidak terdefinisi di array $user. Fitur modern PHP 8 mana yang menyediakan sintaks paling ringkas untuk hal ini?",
              choices: ["Ternary operator ($user['role'] ? $user['role'] : 'Guest')","Null coalescing operator ($user['role'] ?? 'Guest')","Fungsi isset()","Operator or (||)"],
              answerIndex: 1,
              explanation: "Null coalescing operator (??) adalah cara paling ringkas untuk memberikan nilai fallback jika sebuah variabel bernilai null atau belum terdefinisi."
            }
          ],
        },
      ],
    },
    {
      slug: "php-oop",
      title: "PHP OOP & Composer",
      description:
        "Fondasi yang Laravel bangun di atasnya — wajib sebelum menyentuh framework.",
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
          kind: "step",
          id: "laravel-2-1",
          title: "Class, Property, Method & Constructor",
          explanation:
            "Class adalah cetak biru objek. Method `__construct()` dipanggil otomatis saat objek baru dibuat dengan kata kunci `new`.",
          example: {
            code:
              "class User {\n" +
              "  public function __construct(public string $name) {}\n" +
              "}\n" +
              "$user = new User('Budi');",
            output: "Objek $user dibuat dengan properti name 'Budi'.",
            note: "PHP 8 mendukung Constructor Property Promotion untuk deklarasi ringkas.",
          },
          instruction:
            "Tuliskan instansiasi kelas `$product = new Product('Laptop');`.",
          starterCode: "<?php\n// Tulis instansiasi di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$product\\s*=\\s*new\\s+Product\\(\\s*['\"]Laptop['\"]\\s*\\)\\s*;",
              message: "Gunakan: $product = new Product('Laptop');",
            },
          ],
          solution: "<?php\n$product = new Product('Laptop');",
        },
        {
          kind: "step",
          id: "laravel-2-2",
          title: "Visibility: public, private, protected",
          explanation:
            "`public` dapat diakses dari mana saja, `private` hanya dari dalam class itu sendiri, dan `protected` bisa diakses dari class turunan.",
          example: {
            code: "class BankAccount {\n  private float $balance = 0.0;\n}",
            output: "Properti $balance aman dari mutasi langsung pihak luar.",
            note: "Terapkan prinsip enkapsulasi dengan menyembunyikan properti sensitif di private.",
          },
          instruction:
            "Tulis deklarasi properti private `private string $password;` di dalam kelas.",
          starterCode: "<?php\n// Tulis properti private di sini\n",
          language: "text",
          tests: [
            {
              pattern: "private\\s+string\\s+\\$password\\s*;",
              message: "Tuliskan: private string $password;",
            },
          ],
          solution: "<?php\nprivate string $password;",
        },
        {
          kind: "step",
          id: "laravel-2-3",
          title: "Inheritance & Interface",
          explanation:
            "`extends` digunakan untuk mewarisi kelas lain, dan `interface` mendefinisikan kontrak method yang **WAJIB** diimplementasikan oleh kelas turunan.",
          example: {
            code:
              "interface PaymentGateway {\n" +
              "  public function pay(int $amount): bool;\n" +
              "}\n" +
              "class Midtrans implements PaymentGateway {\n" +
              "  public function pay(int $amount): bool { return true; }\n" +
              "}",
            output: "Kelas Midtrans memenuhi kontrak interface PaymentGateway.",
            note: "Interface menjamin fleksibilitas penggantian implementasi payment gateway.",
          },
          instruction:
            "Tulis deklarasi kelas `class Paypal implements PaymentGateway`.",
          starterCode: "<?php\n// Tulis kelas Paypal di sini\n",
          language: "text",
          tests: [
            {
              pattern: "class\\s+Paypal\\s+implements\\s+PaymentGateway",
              message: "Gunakan: class Paypal implements PaymentGateway",
            },
          ],
          solution: "<?php\nclass Paypal implements PaymentGateway {\n  public function pay(int $amount): bool { return true; }\n}",
        },
        {
          kind: "step",
          id: "laravel-2-4",
          title: "PHP Trait untuk Reusability",
          explanation:
            "Di PHP, sebuah kelas biasanya hanya bisa mewarisi dari satu kelas induk (Inheritance). Lalu bagaimana jika dua kelas berbeda (misal Mobil dan Burung) sama-sama butuh kemampuan BisaTerbang? Di sinilah Trait berperan! Trait ibarat ransel berisi kemampuan khusus (kumpulan method) yang bisa dipasangkan ke kelas mana saja tanpa merombak silsilah pewarisannya. Cukup ketikkan `use NamaTrait;` di dalam kelasmu. Jebakan: memasang terlalu banyak Trait dalam satu kelas bisa membuat kode berantakan dan sulit dilacak asal-usul method-nya.",
          example: {
            code:
              "trait HasUuid {\n" +
              "  public function generateUuid() { return 'uuid-123'; }\n" +
              "}\n" +
              "class Order {\n" +
              "  use HasUuid;\n" +
              "}",
            output: "Kelas Order memiliki method generateUuid() dari HasUuid trait.",
            note: "Laravel menggunakan Trait untuk fitur seperti SoftDeletes dan HasFactory.",
          },
          instruction:
            "Tuliskan penggunaan trait `use HasUuid;` di dalam kelas.",
          starterCode: "<?php\n// Tulis use Trait di sini\n",
          language: "text",
          tests: [
            {
              pattern: "use\\s+HasUuid\\s*;",
              message: "Tuliskan: use HasUuid;",
            },
          ],
          solution: "<?php\nuse HasUuid;",
        },
        {
          kind: "step",
          id: "laravel-2-5",
          title: "Namespace & PSR-4 Autoloading",
          explanation:
            "Namespace mengelompokkan kelas agar nama kelas tidak berbenturan. PSR-4 memetakan struktur namespace ke folder fisik secara otomatis.",
          example: {
            code: "namespace App\\Models;\nclass User {}",
            output: "Kelas User dikenali sebagai App\\Models\\User secara global.",
            note: "Autoloading PSR-4 menghilangkan kebutuhan menulis ratusan require_once manual.",
          },
          instruction:
            "File ini akan berisi class layanan di folder `app/Services`. Tulis deklarasi namespace yang sesuai dengan lokasi folder itu (ingat aturan PSR-4: nama folder = nama namespace).",
          starterCode: "<?php\n// Tulis namespace di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "namespace\\s+App\\\\Services\\s*;",
              message:
                "Deklarasikan namespace App\\Services diakhiri titik koma.",
            },
          ],
          solution: "<?php\nnamespace App\\Services;",
        },
        {
          kind: "step",
          id: "laravel-2-6",
          title: "Manajer Paket Composer: vendor/ & composer.json",
          explanation:
            "Composer adalah Package Manager resmi PHP. File `composer.json` mencatat dependensi, dan `vendor/autoload.php` memuat seluruh library otomatis.",
          example: {
            code: "composer require ramsey/uuid",
            output: "  - Locking ramsey/uuid (4.7.6)\n  - Downloading ramsey/uuid (4.7.6)\nGenerating optimized autoload files",
            note: "Laravel diinstal dan dikelola sepenuhnya menggunakan Composer.",
          },
          instruction:
            "Tulis perintah composer untuk memasang dependensi `guzzlehttp/guzzle`.",
          starterCode: "# Tulis perintah composer di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "composer\\s+require\\s+guzzlehttp/guzzle",
              message: "Gunakan: composer require guzzlehttp/guzzle",
            },
          ],
          solution: "composer require guzzlehttp/guzzle",
        },
        {
          kind: "step",
          id: "laravel-2-7",
          title: "Typed Property & Constructor Promotion (PHP 8)",
          explanation:
            "PHP 8 mempermudah pendeklarasian properti langsung di dalam parameter constructor.",
          example: {
            code: "class User {\n  public function __construct(\n    public string $name,\n    public string $email\n  ) {}\n}",
            output: "Properti $name dan $email otomatis dideklarasikan dan diisi.",
            note: "Sintaks modern ini menghemat banyak baris kode boilerplate di Laravel.",
          },
          instruction:
            "Tuliskan parameter constructor `public function __construct(public string $title) {}`.",
          starterCode: "<?php\n// Tulis constructor promotion di sini\n",
          language: "text",
          tests: [
            {
              pattern: "public\\s+function\\s+__construct\\(\\s*public\\s+string\\s+\\$title\\s*\\)",
              message: "Gunakan constructor property promotion",
            },
          ],
          solution: "<?php\npublic function __construct(public string $title) {}",
        },
        {
          kind: "quiz",
          id: "laravel-2-kuis",
          title: "Kuis: PHP OOP & Composer",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Sebuah aplikasi memiliki kelas 'Bird' dan 'Airplane' yang sama-sama membutuhkan kemampuan terbang (fly), tetapi mereka tidak memiliki kelas induk yang sama. Fitur PHP apa yang sebaiknya kamu gunakan untuk berbagi method 'fly' ini?",
              choices: ["Interface","Abstract Class","Trait","Namespace"],
              answerIndex: 2,
              explanation: "Trait memungkinkan berbagi method (kemampuan) secara horizontal ke kelas-kelas berbeda tanpa memerlukan pewarisan."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Kamu sedang mengembangkan library pembayaran yang mengharuskan setiap payment gateway memiliki method 'pay'. Fitur apa yang sebaiknya dipakai untuk memaksakan kontrak ini ke setiap kelas gateway?",
              choices: ["Trait","Interface","Private methods","Composer"],
              answerIndex: 1,
              explanation: "Interface mendefinisikan kontrak method yang WAJIB diimplementasikan oleh kelas turunannya."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Saat mendefinisikan properti sensitif seperti saldo akun ($balance), praktik enkapsulasi terbaik apa yang harus dilakukan?",
              choices: ["Menggunakan visibility 'public' agar mudah diakses","Menggunakan visibility 'private' dan membuat method getter/setter","Menjadikannya variabel global","Menghapus visibility agar menjadi default"],
              answerIndex: 1,
              explanation: "Visibility 'private' mencegah perubahan langsung dari luar kelas, menjaga keamanan dan validitas data."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Dalam proyek besar, banyak kelas yang mungkin memiliki nama yang sama (misal kelas User dari library A dan library B). Fitur PHP apa yang memecahkan masalah bentrokan nama ini?",
              choices: ["Composer","Trait","Namespace","Constructor Property Promotion"],
              answerIndex: 2,
              explanation: "Namespace mengelompokkan kelas ke dalam 'ruang nama' yang berbeda, mencegah bentrokan nama."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kamu baru saja membuat project PHP baru dan ingin memasang library pihak ketiga. File manakah yang akan mencatat daftar library (dependensi) tersebut saat kamu menjalankan 'composer require'?",
              choices: ["composer.lock","vendor/autoload.php","composer.json","index.php"],
              answerIndex: 2,
              explanation: "composer.json adalah file konfigurasi yang mencatat seluruh dependensi proyek beserta versinya."
            }
          ],
        },
      ],
    },
    {
      slug: "laravel-fundamental",
      title: "Laravel Fundamental",
      description:
        "Request masuk → route → controller → view keluar. Siklus yang harus otomatis di kepala.",
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
          kind: "step",
          id: "laravel-3-1",
          title: "Artisan CLI & Inisialisasi Proyek",
          explanation:
            "Artisan adalah CLI bawaan Laravel yang mempermudah generasi file kode dan pengoperasian server lokal (`php artisan serve`).",
          example: {
            code: "composer create-project laravel/laravel my-app\ncd my-app\nphp artisan serve",
            output: "Server pengembangan Laravel berjalan di http://127.0.0.1:8000.",
            note: "php artisan list menampilkan seluruh daftar perintah yang tersedia.",
          },
          instruction:
            "Tulis perintah artisan untuk menjalankan server lokal.",
          starterCode: "# Tulis perintah artisan di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+serve",
              message: "Gunakan perintah: php artisan serve",
            },
          ],
          solution: "php artisan serve",
        },
        {
          kind: "step",
          id: "laravel-3-2",
          title: "Routing: GET, POST, Parameter & Named Routes",
          explanation:
            "Route didefinisikan di `routes/web.php`. Berikan nama route dengan `->name('nama.route')` untuk mempermudah referensi URL.",
          example: {
            code:
              "Route::get('/user/{id}', function ($id) {\n" +
              "  return 'User ID: ' . $id;\n" +
              "})->name('user.profile');",
            output: "Mengakses /user/5 mengembalikan teks 'User ID: 5'.",
            note: "Named route memfasilitasi refactoring URL path tanpa merusak tautan UI.",
          },
          instruction:
            "Buatlah sebuah route GET untuk '/about' yang mengarah ke method 'index' pada AboutController dan berikan nama route 'about'.",
          starterCode: "// Tulis Route GET di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::get\\(\\s*['\"]/about['\"]\\s*,\\s*\\[\\s*AboutController::class\\s*,\\s*['\"]index['\"]\\s*\\]\\s*\\)->name\\(\\s*['\"]about['\"]\\s*\\)\\s*;",
              message: "Definisikan route named GET untuk /about",
            },
          ],
          solution: "Route::get('/about', [AboutController::class, 'index'])->name('about');",
        },
        {
          kind: "step",
          id: "laravel-3-3",
          title: "Resource Controller",
          explanation:
            "Artisan dapat menghasilkan Resource Controller dengan 7 action CRUD standar (index, create, store, show, edit, update, destroy).",
          example: {
            code: "php artisan make:controller ProductController --resource",
            output: "   INFO  Controller [app/Http/Controllers/ProductController.php] created successfully.",
            note: "Daftarkan di web.php dengan Route::resource('products', ProductController::class).",
          },
          instruction:
            "Tulis perintah artisan untuk membuat Resource Controller bernama `UserController`.",
          starterCode: "# Tulis perintah artisan di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:controller\\s+UserController\\s+--resource",
              message: "Gunakan: php artisan make:controller UserController --resource",
            },
          ],
          solution: "php artisan make:controller UserController --resource",
        },
        {
          kind: "step",
          id: "laravel-3-4",
          title: "Templating Engine Blade",
          explanation:
            "Blade adalah template engine serbaguna Laravel. Gunakan `@extends`, `@section`, dan `@yield` untuk pewarisan layout HTML.",
          example: {
            code:
              "<!-- resources/views/home.blade.php -->\n" +
              "@extends('layouts.app')\n" +
              "@section('content')\n" +
              "  <h1>Selamat Datang</h1>\n" +
              "@endsection",
            output: "Halaman home menyuntikkan isi h1 ke dalam layout app.",
            note: "File Blade wajib ber-ekstensi .blade.php.",
          },
          instruction:
            "Terapkan pewarisan layout Blade dengan memanggil layout utama yang bernama 'layouts.app'.",
          starterCode: "<!-- Tulis direktif blade di bawah ini -->\n",
          language: "text",
          tests: [
            {
              pattern: "@extends\\(\\s*['\"]layouts\\.app['\"]\\s*\\)",
              message: "Tuliskan: @extends('layouts.app')",
            },
          ],
          solution: "@extends('layouts.app')",
        },
        {
          kind: "step",
          id: "laravel-3-5",
          title: "Request, Response & Session Flash Message",
          explanation:
            "Kembalikan respon redirect lengkap dengan pesan kilat (flash message) mengalir ke view menggunakan `->with('success', 'Pesan')`.",
          example: {
            code: "return redirect()->route('posts.index')->with('success', 'Post berhasil dibuat!');",
            output: "User di-redirect ke halaman daftar post beserta pesan sukses.",
            note: "Flash message session otomatis terhapus setelah 1x dibaca oleh view.",
          },
          instruction:
            "Lakukan redirect ke route bernama 'home' sekaligus membawa pesan kilat (flash message) pada session dengan key 'success' berisi 'Berhasil'.",
          starterCode: "// Tulis return redirect di sini\n",
          language: "text",
          tests: [
            {
              pattern: "return\\s+redirect\\(\\)->route\\(\\s*['\"]home['\"]\\s*\\)->with\\(\\s*['\"]success['\"]\\s*,\\s*['\"]Berhasil['\"]\\s*\\)\\s*;",
              message: "Gunakan: return redirect()->route('home')->with('success', 'Berhasil');",
            },
          ],
          solution: "return redirect()->route('home')->with('success', 'Berhasil');",
        },
        {
          kind: "step",
          id: "laravel-3-6",
          title: "Konfigurasi & Berkas .env",
          explanation:
            "Kredensial rahasia disimpan di `.env` dan diakses melalui fungsi pembantu `env('DATABASE_URL')` atau via file `config/`.",
          example: {
            code: "DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_DATABASE=bilearn_db",
            output: "Konfigurasi database dibaca otomatis oleh Laravel.",
            note: "Jangan simpan kredensial asli di file config/, gunakan helper env().",
          },
          instruction:
            "Gunakan fungsi helper pembaca variabel lingkungan untuk mengambil nilai 'APP_NAME', dengan nilai fallback 'Laravel'.",
          starterCode: "// Tulis helper env di sini\n",
          language: "text",
          tests: [
            {
              pattern: "env\\(\\s*['\"]APP_NAME['\"]\\s*,\\s*['\"]Laravel['\"]\\s*\\)",
              message: "Gunakan: env('APP_NAME', 'Laravel');",
            },
          ],
          solution: "env('APP_NAME', 'Laravel');",
        },
        {
          kind: "step",
          id: "laravel-3-7",
          title: "Middleware: Konsep Pipeline Request",
          explanation:
            "Bayangkan Middleware sebagai pos penjagaan sebelum masuk ke rumah Laravel-mu. Sebelum request (tamu) diizinkan menemui Controller (tuan rumah), ia harus melewati pos ini. Contoh paling umum: `auth` middleware mengecek apakah user sudah login. Jika sudah, request dipersilakan lewat. Jika belum, user langsung diadang dan dilempar ke halaman login. Kenapa brilian? Karena kamu tidak perlu menulis kode pengecekan login berulang-ulang di puluhan fungsi Controller. Cukup pasang satu middleware di Route.",
          example: {
            code:
              "Route::get('/dashboard', [DashboardController::class, 'index'])\n" +
              "  ->middleware('auth');",
            output: "Halaman /dashboard dilindungi oleh middleware auth.",
            note: "Jika belum login, middleware auth melempar user ke halaman login.",
          },
          instruction:
            "Terapkan perlindungan middleware 'auth' pada definisi route yang ada sehingga hanya pengguna login yang bisa mengaksesnya.",
          starterCode: "// Tulis middleware di sini\n",
          language: "text",
          tests: [
            {
              pattern: "->middleware\\(\\s*['\"]auth['\"]\\s*\\)",
              message: "Tuliskan: ->middleware('auth');",
            },
          ],
          solution: "->middleware('auth');",
        },
        {
          kind: "quiz",
          id: "laravel-3-kuis",
          title: "Kuis: Laravel Fundamental",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Kamu ingin membuat sistem routing yang efisien. Mengapa memberikan nama pada route menggunakan '->name()' dianggap sebagai praktik terbaik di Laravel?",
              choices: ["Agar URL terlihat lebih menarik bagi pengguna","Untuk memudahkan perubahan path URL di masa depan tanpa harus merusak link di seluruh view","Agar Laravel berjalan lebih cepat","Karena itu diwajibkan oleh server"],
              answerIndex: 1,
              explanation: "Named route memungkinkan kamu memanggil URL berdasarkan namanya (misal route('login')). Jika path-nya berubah, link di view tidak akan rusak."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Sebuah aplikasi membutuhkan 7 endpoint standar CRUD untuk fitur Artikel. Perintah Artisan manakah yang paling tepat untuk membuat controller lengkap dengan semua method tersebut?",
              choices: ["php artisan make:controller ArticleController --resource","php artisan make:controller ArticleController --crud","php artisan create:resource ArticleController","php artisan generate:controller Article"],
              answerIndex: 0,
              explanation: "Flag --resource otomatis membuat controller beserta method index, create, store, show, edit, update, dan destroy."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Kamu ingin memastikan bahwa sebuah halaman hanya dapat diakses oleh pengguna yang sudah login. Komponen Laravel apa yang bertugas sebagai pos penjagaan sebelum request mencapai controller?",
              choices: ["Blade Template","Middleware","Eloquent","Artisan"],
              answerIndex: 1,
              explanation: "Middleware bertindak sebagai perantara yang dapat memeriksa, memodifikasi, atau menolak request (misal memeriksa status login) sebelum masuk ke Controller."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Dalam pengembangan web, kita sering butuh menyimpan pesan notifikasi (seperti 'Data berhasil disimpan') yang hanya muncul sekali di halaman berikutnya. Fitur apa yang sebaiknya dipakai?",
              choices: ["Database Table","Session Flash Message","Global Variable","Cookie permanen"],
              answerIndex: 1,
              explanation: "Session Flash Message menyimpan data di session khusus yang akan otomatis terhapus setelah dibaca satu kali pada request berikutnya."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Di mana tempat yang paling aman dan disarankan untuk menyimpan rahasia seperti kata sandi database pada proyek Laravel?",
              choices: ["Di dalam file config/database.php langsung","Di dalam file routes/web.php","Di dalam file .env","Di dalam public/index.php"],
              answerIndex: 2,
              explanation: "File .env menyimpan variabel lingkungan spesifik yang bersifat rahasia dan tidak boleh di-commit ke version control."
            }
          ],
        },
      ],
    },
    {
      slug: "eloquent",
      title: "Eloquent & Database",
      description:
        "ORM Laravel: model, relasi, dan migration — jantung setiap aplikasi Laravel.",
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
          kind: "step",
          id: "laravel-4-1",
          title: "Database Migration",
          explanation:
            "Migration adalah Version Control untuk struktur skema database-mu (`php artisan make:migration create_products_table`).",
          example: {
            code:
              "Schema::create('products', function (Blueprint $table) {\n" +
              "  $table->id();\n" +
              "  $table->string('name');\n" +
              "  $table->integer('price');\n" +
              "  $table->timestamps();\n" +
              "});",
            output: "Tabel products dibuat di database lewat perintah `php artisan migrate`.",
            note: "Menjamin struktur database selalu identik antar anggota tim.",
          },
          instruction:
            "Tambahkan sebuah kolom bertipe string dengan nama 'title' ke dalam definisi skema tabel.",
          starterCode: "// Tulis $table->string di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$table->string\\(\\s*['\"]title['\"]\\s*\\)\\s*;",
              message: "Tuliskan: $table->string('title');",
            },
          ],
          solution: "$table->string('title');",
        },
        {
          kind: "step",
          id: "laravel-4-2",
          title: "Eloquent Model & Konvensi Penamaan",
          explanation:
            "Dalam arsitektur Laravel, 'Model' bertugas sebagai perwakilan langsung dari sebuah tabel di database. Alih-alih menulis query SQL manual, kamu bisa berinteraksi dengan data menggunakan kode PHP yang bersih (berkat Eloquent ORM). Laravel sangat menyukai konvensi penamaan: jika nama Model-mu tunggal dengan huruf kapital (misal: `Product`), Laravel otomatis mencarikan tabel jamak di database (yaitu `products`). Jebakan: jika tabelmu pakai bahasa Indonesia (misal `produk`), konvensi otomatis ini gagal — kamu harus mendefinisikan nama tabel secara manual di Model.",
          example: {
            code: "namespace App\\Models;\nuse Illuminate\\Database\\Eloquent\\Model;\nclass Product extends Model {}",
            output: "Model Product otomatis memetakan ke tabel 'products'.",
            note: "Gunakan $fillable untuk mendaftarkan kolom yang aman diisi via mass assignment.",
          },
          instruction:
            "Tuliskan deklarasi properti `$fillable = ['name', 'price'];` di model.",
          starterCode: "// Tulis $fillable di sini\n",
          language: "text",
          tests: [
            {
              pattern: "protected\\s+\\$fillable\\s*=\\s*\\[\\s*['\"]name['\"]\\s*,\\s*['\"]price['\"]\\s*\\]\\s*;",
              message: "Definisikan: protected $fillable = ['name', 'price'];",
            },
          ],
          solution: "protected $fillable = ['name', 'price'];",
        },
        {
          kind: "step",
          id: "laravel-4-3",
          title: "CRUD dengan Eloquent ORM",
          explanation:
            "Eloquent mempermudah eksekusi query database tanpa mengetik SQL mentah.",
          example: {
            code:
              "// Create\n$product = Product::create(['name' => 'Kopi', 'price' => 15000]);\n" +
              "// Read\n$item = Product::findOrFail(1);\n" +
              "// Delete\n$item->delete();",
            output: "Operasi CRUD dieksekusi bersih via objek PHP.",
            note: "findOrFail() otomatis melempar HTTP 404 jika ID tidak ditemukan.",
          },
          instruction:
            "Gunakan metode bawaan Eloquent untuk mencari data User berdasarkan variabel $id, yang akan otomatis melempar error 404 jika tidak ditemukan.",
          starterCode: "// Tulis findOrFail di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$user\\s*=\\s*User::findOrFail\\(\\s*\\$id\\s*\\)\\s*;",
              message: "Gunakan: $user = User::findOrFail($id);",
            },
          ],
          solution: "$user = User::findOrFail($id);",
        },
        {
          kind: "step",
          id: "laravel-4-4",
          title: "Query Builder: where & paginate()",
          explanation:
            "Perintah `paginate(15)` otomatis memotong data ke halaman dan menyusun HTML tautan navigasi di Blade.",
          example: {
            code: "$products = Product::where('price', '>', 10000)->orderBy('created_at', 'desc')->paginate(10);",
            output: "Mengambil 10 produk termahal per halaman secara paginated.",
            note: "Di Blade, tinggal panggil {{ $products->links() }} untuk tombol halaman.",
          },
          instruction:
            "Ambil data dari model User dengan membaginya menjadi 10 baris per halaman menggunakan fungsi bawaan untuk paginasi.",
          starterCode: "// Tulis query paginate di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$users\\s*=\\s*User::paginate\\(\\s*10\\s*\\)\\s*;",
              message: "Gunakan: $users = User::paginate(10);",
            },
          ],
          solution: "$users = User::paginate(10);",
        },
        {
          kind: "step",
          id: "laravel-4-5",
          title: "Relasi Eloquent: hasMany & belongsTo",
          explanation:
            "Mendefinisikan relasi antar tabel (seperti 1 User memiliki Banyak Post) cukup dengan mengembalikan method `hasMany` / `belongsTo`.",
          example: {
            code:
              "// App/Models/User.php\n" +
              "public function posts() {\n" +
              "  return $this->hasMany(Post::class);\n" +
              "}",
            output: "$user->posts mengambil seluruh daftar post milik pengguna tersebut.",
            note: "BelongsTo digunakan pada model anak yang menyimpan foreign key.",
          },
          instruction:
            "Tuliskan relasi belongsTo `public function user() { return $this->belongsTo(User::class); }`.",
          starterCode: "// Tulis relasi belongsTo di sini\n",
          language: "text",
          tests: [
            {
              pattern: "public\\s+function\\s+user\\(\\s*\\)\\s*\\{\\s*return\\s+\\$this->belongsTo\\(\\s*User::class\\s*\\)\\s*;?\\s*\\}",
              message: "Definisikan relasi belongsTo ke User::class",
            },
          ],
          solution: "public function user() {\n  return $this->belongsTo(User::class);\n}",
        },
        {
          kind: "step",
          id: "laravel-4-6",
          title: "Eager Loading & Mencegah Masalah N+1",
          explanation:
            "Gunakan `with(['relasi'])` untuk Eager Loading. Ini menggabungkan query relasi menjadi 1 query gabungan demi menghindari pembengkakan query (N+1 Problem).",
          example: {
            code: "// ✅ Eager loading: HANYA 2 Query SQL!\n$posts = Post::with('user')->get();",
            output: "Performa query database naik puluhan kali lipat.",
            note: "Jangan memanggil $post->user di dalam loop foreach tanpa Eager Loading!",
          },
          instruction:
            "Hindari masalah N+1 dengan memuat relasi 'user' secara eager bersamaan saat mengambil seluruh data Post.",
          starterCode: "// Tulis Eager Loading di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Post::with\\(\\s*['\"]user['\"]\\s*\\)->get\\(\\)",
              message: "Gunakan: Post::with('user')->get();",
            },
          ],
          solution: "Post::with('user')->get();",
        },
        {
          kind: "step",
          id: "laravel-4-7",
          title: "Seeder & Factory untuk Data Dummy",
          explanation:
            "Model Factory dan Database Seeder mengotomatiskan pengisian ribuan data dummy untuk pengujian.",
          example: {
            code: "User::factory()->count(50)->create();",
            output: "50 akun user palsu dibuat instan di database.",
            note: "Jalankan seeder dengan php artisan db:seed.",
          },
          instruction:
            "Buat 5 baris data dummy otomatis menggunakan factory bawaan dari model User.",
          starterCode: "// Tulis pemanggilan factory di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "User::factory\\(\\)->count\\(\\s*10\\s*\\)->create\\(\\)",
              message: "Gunakan: User::factory()->count(10)->create();",
            },
          ],
          solution: "User::factory()->count(10)->create();",
        },
        {
          kind: "quiz",
          id: "laravel-4-kuis",
          title: "Kuis: Eloquent & Database",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Tim kamu akan merombak struktur tabel database. Untuk memastikan seluruh anggota tim memiliki struktur database yang sama, fitur Laravel apa yang harus kalian andalkan?",
              choices: ["Eloquent ORM","Database Seeder","Database Migrations","Artisan Tinker"],
              answerIndex: 2,
              explanation: "Migrations berfungsi sebagai version control untuk database, memastikan skema tersinkronisasi di setiap environment."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Kamu ingin menampilkan daftar Artikel di halaman utama, namun kamu tidak ingin query mengambil seluruh data sekaligus yang bisa memberatkan server. Solusi apa yang paling tepat?",
              choices: ["Menggunakan loop foreach dengan batasan indeks","Menggunakan metode paginate() dari Eloquent","Menghapus sebagian data di database","Menggunakan middleware khusus"],
              answerIndex: 1,
              explanation: "Metode paginate() memotong data secara efisien langsung di query database dan menyediakan tautan navigasi halaman untuk UI."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Sebuah aplikasi menampilkan daftar Pengguna beserta Postingan terakhir mereka. Jika tidak hati-hati, aplikasi akan menjalankan satu query untuk pengguna, lalu puluhan query tambahan untuk setiap postingan. Apa nama masalah ini dan bagaimana Eloquent mengatasinya?",
              choices: ["Mass Assignment / menggunakan $fillable","N+1 Problem / menggunakan Eager Loading (with())","Memory Leak / menggunakan pagination","SQL Injection / menggunakan PDO"],
              answerIndex: 1,
              explanation: "Masalah N+1 terjadi saat meload relasi di dalam perulangan. Eager loading (menggunakan with) mengatasinya dengan mengambil semua relasi dalam satu atau dua query saja."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Kamu sedang membuat fitur pendaftaran pengguna yang otomatis menambahkan poin. Jika penambahan poin gagal, maka pembuatan akun juga harus dibatalkan. Fitur apa yang menjamin operasi 'berhasil semua atau gagal semua'?",
              choices: ["Eager Loading","Database Transactions (DB::transaction)","Model Factory","Soft Deletes"],
              answerIndex: 1,
              explanation: "Transaksi database (ACID) memastikan bahwa jika salah satu langkah operasi gagal, seluruh perubahan sebelumnya akan di-rollback."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Seorang peretas mencoba menyuntikkan field 'is_admin = 1' saat memperbarui profil melalui form request mass assignment. Properti apa pada Model yang melindungi data dari serangan ini?",
              choices: ["$hidden","$casts","$fillable atau $guarded","$table"],
              answerIndex: 2,
              explanation: "Properti $fillable mendefinisikan kolom mana saja yang diizinkan untuk diisi secara massal, mencegah perubahan kolom sensitif yang tidak terdaftar."
            }
          ],
        },
      ],
    },
    {
      slug: "form-validasi",
      title: "Form & Validasi",
      description:
        "Menangani input user dengan aman — tempat sebagian besar bug keamanan lahir.",
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
          kind: "step",
          id: "laravel-5-1",
          title: "Form Blade + CSRF Token (@csrf)",
          explanation:
            "Setiap form ber-method POST **WAJIB** mencantumkan direktif `@csrf` untuk mencegah serangan Cross-Site Request Forgery.",
          example: {
            code: "<form method=\"POST\" action=\"/register\">\n  @csrf\n  <input name=\"name\">\n</form>",
            output: "Injeksi input tersembunyi berisi _token validasi CSRF.",
            note: "Jika @csrf lupa dicantumkan, Laravel akan mengembalikan HTTP status 419 Page Expired.",
          },
          instruction:
            "Tuliskan direktif `@csrf` di dalam form Blade.",
          starterCode: "<!-- Tulis direktif CSRF di sini -->\n",
          language: "text",
          tests: [
            {
              pattern: "@csrf",
              message: "Tuliskan: @csrf",
            },
          ],
          solution: "@csrf",
        },
        {
          kind: "step",
          id: "laravel-5-2",
          title: "Validasi Request & Old Input",
          explanation:
            "Gunakan `$request->validate([...])` untuk memvalidasi masukan form. Jika gagal, Laravel otomatis kembali ke halaman sebelumnya membawa pesan error dan `old()` input.",
          example: {
            code:
              "$request->validate([\n" +
              "  'email' => 'required|email|unique:users',\n" +
              "  'password' => 'required|min:8',\n" +
              "]);",
            output: "Validasi ketat input email dan password.",
            note: "Nilai lama input bisa dipanggil di Blade dengan value=\"{{ old('email') }}\".",
          },
          instruction:
            "Ambil nilai yang dikirim dari input form bernama 'title' melalui objek request yang disediakan oleh framework.",
          starterCode: "// Tulis validasi di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$request->validate\\(\\s*\\[\\s*['\"]name['\"]\\s*=>\\s*['\"]required\\|string['\"]\\s*\\]\\s*\\)\\s*;",
              message: "Gunakan: $request->validate(['name' => 'required|string']);",
            },
          ],
          solution: "$request->validate(['name' => 'required|string']);",
        },
        {
          kind: "step",
          id: "laravel-5-3",
          title: "Form Request Class",
          explanation:
            "Pindahkan aturan validasi yang rumit dari Controller ke kelas terpisah **Form Request** (`php artisan make:request StoreProductRequest`).",
          example: {
            code:
              "public function rules(): array {\n" +
              "  return ['title' => 'required|max:255'];\n" +
              "}",
            output: "   INFO  Request [app/Http/Requests/StoreProductRequest.php] created successfully.",
            note: "Form Request juga memiliki method authorize() untuk otorisasi akses.",
          },
          instruction:
            "Tulis perintah artisan untuk membuat Form Request bernama `StoreUserRequest`.",
          starterCode: "# Tulis perintah artisan di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:request\\s+StoreUserRequest",
              message: "Gunakan: php artisan make:request StoreUserRequest",
            },
          ],
          solution: "php artisan make:request StoreUserRequest",
        },
        {
          kind: "step",
          id: "laravel-5-4",
          title: "File Upload & Storage Facade",
          explanation:
            "Gunakan `$request->file('avatar')->store('avatars', 'public')` untuk menyimpan berkas yang diunggah pengguna ke sistem penyimpanan.",
          example: {
            code: "$path = $request->file('avatar')->store('avatars', 'public');",
            output: "File terunggah ke storage/app/public/avatars dengan nama unik.",
            note: "Jalankan php artisan storage:link agar file di storage/ bisa diakses publik dari web.",
          },
          instruction:
            "Simpan berkas foto yang diunggah pengguna ('photo') ke dalam folder 'photos' pada penyimpanan publik, lalu assign path-nya ke variabel `$path`.",
          starterCode: "// Tulis kode upload file di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$path\\s*=\\s*\\$request->file\\(\\s*['\"]photo['\"]\\s*\\)->store\\(\\s*['\"]photos['\"]\\s*,\\s*['\"]public['\"]\\s*\\)\\s*;",
              message: "Gunakan: $path = $request->file('photo')->store('photos', 'public');",
            },
          ],
          solution: "$path = $request->file('photo')->store('photos', 'public');",
        },
        {
          kind: "step",
          id: "laravel-5-5",
          title: "Error Handling & Custom Error View",
          explanation:
            "Buat berkas Blade di `resources/views/errors/404.blade.php` untuk merancang tampilan khusus saat error HTTP 404 terjadi.",
          example: {
            code: "<!-- resources/views/errors/404.blade.php -->\n<h1>Halaman Tidak Ditemukan (404)</h1>",
            output: "Laravel otomatis merender view ini saat terjadi Error 404.",
            note: "Bisa juga membuat tampilan custom untuk error 500, 403, dan 419.",
          },
          instruction:
            "Berikan komentar yang menuliskan lokasi file kustom untuk halaman error 404.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "//\\s*Custom\\s+404\\s+page\\s+in\\s+resources/views/errors/404\\.blade\\.php",
              message: "Tuliskan komentar yang diminta",
            },
          ],
          solution: "// Custom 404 page in resources/views/errors/404.blade.php",
        },
        {
          kind: "step",
          id: "laravel-5-6",
          title: "Mass Assignment: $fillable vs $guarded",
          explanation:
            "Mass Assignment Protection mencegah peretas menyuntikkan kolom terlarang (seperti `is_admin`) saat pembuatan data dari request POST.",
          example: {
            code: "// Di Model Product:\nprotected $fillable = ['title', 'price']; // Hanya 2 kolom ini yang bisa di-insert!",
            output: "Menjamin keamanan database dari injeksi mass assignment.",
            note: "Atau gunakan $guarded = [] jika ingin mengizinkan semua kolom (gunakan dengan hati-hati).",
          },
          instruction:
            "Tuliskan deklarasi `$fillable = ['title', 'content'];`.",
          starterCode: "// Tulis $fillable di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "protected\\s+\\$fillable\\s*=\\s*\\[\\s*['\"]title['\"]\\s*,\\s*['\"]content['\"]\\s*\\]\\s*;",
              message: "Definisikan $fillable sesuai instruksi",
            },
          ],
          solution: "protected $fillable = ['title', 'content'];",
        },
        {
          kind: "quiz",
          id: "laravel-5-kuis",
          title: "Kuis: Form & Validasi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Setiap kali pengguna mengirim form dengan metode POST di Laravel, aplikasi akan menolak permintaan dengan status 419 Page Expired jika kamu melupakan satu hal penting. Apa itu?",
              choices: ["Fungsi dd()","Direktif @csrf","Tag <meta>","Fungsi session()"],
              answerIndex: 1,
              explanation: "Direktif @csrf menyuntikkan token keamanan yang wajib ada untuk memverifikasi bahwa form benar-benar dikirim dari aplikasi kita (mencegah eksploitasi CSRF)."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Formulir pendaftaran pengguna memiliki puluhan validasi aturan. Agar Controller tetap bersih, di mana praktik terbaik untuk meletakkan aturan validasi ini di Laravel?",
              choices: ["Di dalam file Route","Di dalam kelas Model","Di dalam Form Request Class terpisah","Di dalam Blade view"],
              answerIndex: 2,
              explanation: "Form Request class memisahkan logika validasi dan otorisasi dari Controller, membuat kode lebih bersih dan terorganisir."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Saat validasi form gagal, Laravel akan meredirect kembali ke halaman form. Bagaimana cara menampilkan nilai input sebelumnya agar pengguna tidak perlu mengetik ulang dari awal?",
              choices: ["Menggunakan fungsi $_POST","Menggunakan helper fungsi old()","Menyimpan data di database sementara","Menyematkannya di URL parameter"],
              answerIndex: 1,
              explanation: "Helper old('nama_field') mengambil nilai input dari session flash sebelumnya yang disimpan saat validasi gagal."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Saat mengunggah foto profil, di direktori manakah (disk storage) sebaiknya file disimpan agar aman dan dapat diatur akses publiknya melalui symlink?",
              choices: ["Di folder public/images langsung","Di dalam disk 'public' pada storage/app/public","Di root direktori aplikasi","Di dalam database sebagai BLOB"],
              answerIndex: 1,
              explanation: "Menyimpan di storage/app/public dengan disk 'public' merupakan praktik standar. Setelah itu, buat symbolic link agar file bisa diakses web."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kamu ingin menampilkan halaman 'Halaman Tidak Ditemukan' dengan desain kustom yang elegan. Apa yang harus kamu buat?",
              choices: ["File view resources/views/errors/404.blade.php","Route kustom untuk path '/404'","Mengubah kode sumber framework","Sebuah Controller khusus 404"],
              answerIndex: 0,
              explanation: "Laravel secara otomatis mencari tampilan di direktori resources/views/errors/ berdasarkan kode status HTTP (misal 404.blade.php)."
            }
          ],
        },
      ],
    },
    {
      slug: "auth-otorisasi",
      title: "Auth & Otorisasi",
      description:
        "Login, register, dan 'siapa boleh apa' — requirement setiap aplikasi bisnis.",
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
          kind: "step",
          id: "laravel-6-1",
          title: "Laravel Breeze Scaffolding",
          explanation:
            "Laravel Breeze adalah starter kit resmi yang menyediakan fitur Login, Register, Password Reset, dan Profil terintegrasi dengan Blade atau Inertia.",
          example: {
            code: "composer require laravel/breeze --dev\nphp artisan breeze:install blade",
            output: "   INFO  Breeze scaffolding installed successfully.\n\nnpm run build\n  vite v6.0.5 building for production...",
            note: "Sangat direkomendasikan untuk memulai proyek Laravel baru.",
          },
          instruction:
            "Tulis perintah artisan untuk menginstal Breeze.",
          starterCode: "# Tulis perintah artisan di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+breeze:install\\s+blade",
              message: "Gunakan: php artisan breeze:install blade",
            },
          ],
          solution: "php artisan breeze:install blade",
        },
        {
          kind: "step",
          id: "laravel-6-2",
          title: "Proses Auth Manual (Auth Facade)",
          explanation:
            "Verifikasi kredensial login secara manual dapat dilakukan dengan `Auth::attempt(['email' => $email, 'password' => $password])`.",
          example: {
            code:
              "if (Auth::attempt($credentials)) {\n" +
              "  $request->session()->regenerate();\n" +
              "  return redirect()->intended('dashboard');\n" +
              "}",
            output: "User berhasil dikonfirmasi dan sesi dilindungi dari session fixation.",
            note: "session()->regenerate() wajib dipanggil setelah login sukses.",
          },
          instruction:
            "Panggil metode dari request session untuk meregenerasi (regenerate) ID sesi saat ini demi keamanan pengguna.",
          starterCode: "// Tulis regenerate session di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$request->session\\(\\)->regenerate\\(\\)\\s*;",
              message: "Tuliskan: $request->session()->regenerate();",
            },
          ],
          solution: "$request->session()->regenerate();",
        },
        {
          kind: "step",
          id: "laravel-6-3",
          title: "Proteksi Route dengan Middleware auth",
          explanation:
            "Kelompokkan route-route terproteksi di `routes/web.php` menggunakan `Route::middleware(['auth'])->group(...)`.",
          example: {
            code:
              "Route::middleware(['auth'])->group(function () {\n" +
              "  Route::get('/dashboard', [DashboardController::class, 'index']);\n" +
              "});",
            output: "Seluruh route di dalam grup hanya bisa dibuka jika user sudah login.",
            note: "User anonim yang mencoba mengakses route ini otomatis dilempar ke /login.",
          },
          instruction:
            "Tuliskan grup route terproteksi `Route::middleware(['auth'])->group(function () {});`.",
          starterCode: "// Tulis grup middleware auth di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::middleware\\(\\s*\\[\\s*['\"]auth['\"]\\s*\\]\\s*\\)->group\\(\\s*function\\s*\\(\\s*\\)",
              message: "Definisikan grup middleware auth",
            },
          ],
          solution: "Route::middleware(['auth'])->group(function () {\n  // Routes\n});",
        },
        {
          kind: "step",
          id: "laravel-6-4",
          title: "Otorisasi Hak Akses dengan Policy",
          explanation:
            "Policy mengatur hak akses spesifik terhadap satu resource (contoh: Apakah user A boleh mengedit Post B?).",
          example: {
            code:
              "// PostPolicy.php\n" +
              "public function update(User $user, Post $post): bool {\n" +
              "  return $user->id === $post->user_id;\n" +
              "}",
            output: "Hanya pemilik asli post yang diizinkan mengedit.",
            note: "Di Controller, panggil $this->authorize('update', $post);.",
          },
          instruction:
            "Tuliskan perintah artisan untuk membuat Policy `PostPolicy` untuk model `Post`.",
          starterCode: "# Tulis perintah artisan di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:policy\\s+PostPolicy\\s+--model=Post",
              message: "Gunakan: php artisan make:policy PostPolicy --model=Post",
            },
          ],
          solution: "php artisan make:policy PostPolicy --model=Post",
        },
        {
          kind: "step",
          id: "laravel-6-5",
          title: "Role Sederhana dengan Gate",
          explanation:
            "Gate cocok untuk pemeriksaan izin global sederhana (misal: `Gate::define('access-admin', ...)`).",
          example: {
            code:
              "Gate::define('admin-only', function (User $user) {\n" +
              "  return $user->is_admin === true;\n" +
              "});",
            output: "Gate 'admin-only' siap diperiksa di mana saja di aplikasi.",
            note: "Di Blade, periksa dengan direktif @can('admin-only')...@endcan.",
          },
          instruction:
            "Kelilingi link HTML `<a href=\"/admin\">Admin</a>` dengan direktif Blade `@can` agar hanya muncul jika pengguna memiliki izin 'admin-only'.",
          starterCode: "<!-- Tulis direktif @can di sini -->\n",
          language: "text",
          tests: [
            {
              pattern: "@can\\(\\s*['\"]admin-only['\"]\\s*\\)",
              message: "Gunakan direktif @can('admin-only')",
            },
          ],
          solution: "@can('admin-only') <a href=\"/admin\">Admin</a> @endcan",
        },
        {
          kind: "step",
          id: "laravel-6-6",
          title: "Verifikasi Email (MustVerifyEmail)",
          explanation:
            "Tambahkan interface `MustVerifyEmail` pada Model `User` untuk mewajibkan pengguna mengonfirmasi email sebelum bisa mengakses fitur.",
          example: {
            code:
              "class User extends Authenticatable implements MustVerifyEmail {\n" +
              "  use HasApiTokens, HasFactory, Notifiable;\n" +
              "}",
            output: "Laravel otomatis mengirimkan email verifikasi dan mengunci route terproteksi.",
            note: "Gunakan middleware 'verified' pada route yang butuh verifikasi email.",
          },
          instruction:
            "Tulis deklarasi kelas `class User extends Authenticatable implements MustVerifyEmail`.",
          starterCode: "<?php\n// Tulis deklarasi User di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "class\\s+User\\s+extends\\s+Authenticatable\\s+implements\\s+MustVerifyEmail",
              message: "Gunakan interface MustVerifyEmail pada kelas User",
            },
          ],
          solution: "class User extends Authenticatable implements MustVerifyEmail {}",
        },
        {
          kind: "quiz",
          id: "laravel-6-kuis",
          title: "Kuis: Auth & Otorisasi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Kamu ingin membatasi bahwa aksi 'Edit Artikel' hanya boleh dilakukan oleh penulis asli dari artikel tersebut. Fitur otorisasi Laravel manakah yang dirancang khusus untuk menangani hak akses per-model ini?",
              choices: ["Middleware Auth","Policy","Model Events","Form Requests"],
              answerIndex: 1,
              explanation: "Policy adalah kelas yang mengatur logika otorisasi spesifik untuk operasi CRUD terhadap model tertentu."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Setelah pengguna berhasil divalidasi login menggunakan `Auth::attempt()`, metode krusial apa yang harus segera dipanggil pada session untuk mencegah serangan 'Session Fixation'?",
              choices: ["session()->flush()","session()->regenerate()","session()->put()","session()->forget()"],
              answerIndex: 1,
              explanation: "Regenerasi session ID mengamankan sesi pengguna dengan memberikan identifier baru setelah otentikasi berhasil."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa starter kit resmi Laravel yang paling cepat untuk membuat sistem Login, Register, dan Profil lengkap dengan tampilan Blade yang minimalis?",
              choices: ["Laravel Telescope","Laravel Sanctum","Laravel Breeze","Laravel Horizon"],
              answerIndex: 2,
              explanation: "Laravel Breeze adalah starter kit implementasi autentikasi ringan dengan scaffolding views dasar."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Untuk pengecekan hak akses global (seperti memastikan pengguna adalah Super Admin) tanpa memandang Model tertentu, apa metode yang tepat?",
              choices: ["Gate::define()","Blade @auth","Database Role Table","Auth::user()"],
              answerIndex: 0,
              explanation: "Gate sangat cocok untuk izin umum yang tidak terkait langsung dengan instansi model tertentu."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Di antarmuka Blade, kamu memiliki tombol 'Hapus' yang hanya boleh dirender (ditampilkan) untuk pengguna dengan izin 'delete-post'. Direktif Blade manakah yang digunakan untuk ini?",
              choices: ["@ifAuth","@can('delete-post')","@allow","@hasRole"],
              answerIndex: 1,
              explanation: "Direktif @can terintegrasi langsung dengan Gate dan Policy untuk merender elemen HTML secara kondisional berdasarkan hak akses."
            }
          ],
        },
      ],
    },
    {
      slug: "api",
      title: "REST API dengan Laravel",
      description:
        "Laravel sebagai backend untuk frontend React/Next atau mobile.",
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
          kind: "step",
          id: "laravel-7-1",
          title: "Route API di routes/api.php",
          explanation:
            "Route API di `routes/api.php` otomatis memiliki prefix `/api/`, bebas dari CSRF token, dan mengembalikan respon berformat JSON.",
          example: {
            code: "// routes/api.php\nRoute::get('/products', [ProductController::class, 'index']);",
            output: "Endpoint tersedia di URL http://domain.com/api/products.",
            note: "Laravel 11 menggunakan php artisan install:api untuk mengaktifkan routes/api.php.",
          },
          instruction:
            "Definisikan sebuah route HTTP GET untuk endpoint `/users` yang memanggil method `index` pada `UserController`.",
          starterCode: "// Tulis route API di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Route::get\\(\\s*['\"]/users['\"]\\s*,\\s*\\[\\s*UserController::class\\s*,\\s*['\"]index['\"]\\s*\\]\\s*\\)\\s*;",
              message: "Gunakan: Route::get('/users', [UserController::class, 'index']);",
            },
          ],
          solution: "Route::get('/users', [UserController::class, 'index']);",
        },
        {
          kind: "step",
          id: "laravel-7-2",
          title: "API Resource untuk Membentuk Respon JSON",
          explanation:
            "API Resource (`php artisan make:resource ProductResource`) mengubah data Eloquent Model menjadi bentuk objek JSON yang rapi.",
          example: {
            code:
              "public function toArray(Request $request): array {\n" +
              "  return [\n" +
              "    'id' => $this->id,\n" +
              "    'name' => $this->name,\n" +
              "    'formatted_price' => 'Rp ' . number_format($this->price),\n" +
              "  ];\n" +
              "}",
            output: "Format JSON yang dikirimkan ke frontend sangat rapi dan konsisten.",
            note: "Memastikan data internal sensitif (seperti password_hash) tidak bocor ke API.",
          },
          instruction:
            "Tulis perintah artisan untuk membuat API Resource `ProductResource`.",
          starterCode: "# Tulis perintah artisan di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+make:resource\\s+ProductResource",
              message: "Gunakan: php artisan make:resource ProductResource",
            },
          ],
          solution: "php artisan make:resource ProductResource",
        },
        {
          kind: "step",
          id: "laravel-7-3",
          title: "Laravel Sanctum Token Authentication",
          explanation:
            "Laravel Sanctum menerbitkan Personal Access Token untuk autentikasi API pada aplikasi mobile atau SPA frontend.",
          example: {
            code: "$token = $user->createToken('auth_token')->plainTextToken;",
            output: "Mengembalikan string bearer token (seperti '1|aB3cD4...').",
            note: "Client menyertakan token ini di header Authorization: Bearer <token>.",
          },
          instruction:
            "Buatlah token autentikasi API baru dengan nama 'token-name' untuk entitas user, kemudian simpan nilai token plain-text tersebut ke dalam variabel `$token`.",
          starterCode: "// Tulis pembuatan token di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$token\\s*=\\s*\\$user->createToken\\(\\s*['\"]token-name['\"]\\s*\\)->plainTextToken\\s*;",
              message: "Gunakan: $token = $user->createToken('token-name')->plainTextToken;",
            },
          ],
          solution: "$token = $user->createToken('token-name')->plainTextToken;",
        },
        {
          kind: "step",
          id: "laravel-7-4",
          title: "Status Code HTTP di API Response",
          explanation:
            "Gunakan HTTP status code standar: `200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`.",
          example: {
            code: "return response()->json(['message' => 'Created'], 201);",
            output: "Respon JSON dikembalikan dengan HTTP Status 201 Created.",
            note: "Status code yang tepat mempermudah error handling di frontend React/Flutter.",
          },
          instruction:
            "Kembalikan respon HTTP berformat JSON dengan array asosiatif berisi pesan 'Sukses', lengkap dengan HTTP status code 201.",
          starterCode: "// Tulis return response di sini\n",
          language: "text",
          tests: [
            {
              pattern: "return\\s+response\\(\\)->json\\(\\s*\\[\\s*['\"]message['\"]\\s*=>\\s*['\"]Sukses['\"]\\s*\\]\\s*,\\s*201\\s*\\)\\s*;",
              message: "Gunakan: return response()->json(['message' => 'Sukses'], 201);",
            },
          ],
          solution: "return response()->json(['message' => 'Sukses'], 201);",
        },
        {
          kind: "step",
          id: "laravel-7-5",
          title: "Paginated API Collection Response",
          explanation:
            "Mengembalikan `ProductResource::collection(Product::paginate(10))` otomatis mencantumkan meta pagination di respon JSON.",
          example: {
            code: "return ProductResource::collection(Product::paginate(10));",
            output: "JSON memuat properti 'data', 'links', dan 'meta' halaman.",
            note: "Memudahkan komponen pagination di frontend.",
          },
          instruction:
            "Gunakan `UserResource` untuk menyusun ulang format kumpulan objek (collection) pengguna yang diambil melalui paginasi sebanyak 10 per halaman.",
          starterCode: "// Tulis return collection di sini\n",
          language: "text",
          tests: [
            {
              pattern: "return\\s+UserResource::collection\\(\\s*User::paginate\\(\\s*10\\s*\\)\\s*\\)\\s*;",
              message: "Gunakan: return UserResource::collection(User::paginate(10));",
            },
          ],
          solution: "return UserResource::collection(User::paginate(10));",
        },
        {
          kind: "step",
          id: "laravel-7-6",
          title: "Rate Limiting pada Middleware API",
          explanation:
            "Rate limiting (`throttle:api`) membatasi jumlah request per menit yang boleh dikirimkan oleh satu IP untuk mencegah serangan DoS.",
          example: {
            code: "Route::middleware('throttle:60,1')->group(function () { ... });",
            output: "Membatasi maksimum 60 request per 1 menit per user/IP.",
            note: "Laravel melempar HTTP status 429 Too Many Requests jika limit terlampaui.",
          },
          instruction:
            "Pasang pembatas laju pengaksesan API (rate limiting) pada definisi route dengan middleware 'throttle' yang diatur sebanyak 60 request per 1 menit.",
          starterCode: "// Tulis throttle middleware di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "->middleware\\(\\s*['\"]throttle:60,1['\"]\\s*\\)",
              message: "Tuliskan: ->middleware('throttle:60,1');",
            },
          ],
          solution: "->middleware('throttle:60,1');",
        },
        {
          kind: "step",
          id: "laravel-7-7",
          title: "Dokumentasi API dengan Swagger / Scramble",
          explanation:
            "Library seperti Scramble otomatis menghasilkan dokumentasi OpenAPI / Swagger UI tanpa perlu mengetik komentar dokumentasi manual.",
          example: {
            code: "// Mengakses /docs untuk melihat OpenAPI UI yang dibuat otomatis",
            output: "Job created successfully.",
            note: "Meningkatkan produktivitas kolaborasi tim backend & frontend.",
          },
          instruction:
            "Tuliskan sebuah komentar berbahasa Inggris yang menyatakan untuk meng-generate dokumentasi API secara otomatis menggunakan Scramble.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "//\\s*Auto-generate\\s+API\\s+docs\\s+with\\s+Scramble",
              message: "Tuliskan komentar yang diminta",
            },
          ],
          solution: "// Auto-generate API docs with Scramble",
        },
        {
          kind: "quiz",
          id: "laravel-7-kuis",
          title: "Kuis: REST API Laravel",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Dalam membangun REST API dengan Laravel, kita mengubah model Eloquent menjadi format JSON khusus agar data yang disajikan konsisten. Kelas apa yang bertugas melakukan transformasi ini?",
              choices: ["JSON Helper","API Resource / Eloquent Resource","Resource Controller","Route Middleware"],
              answerIndex: 1,
              explanation: "API Resource menyediakan layer transformasi elegan antara model Eloquent dan respon JSON yang dikirimkan ke pengguna."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Paket bawaan Laravel apakah yang difokuskan untuk menerbitkan API Token (Personal Access Tokens) yang cocok digunakan untuk autentikasi SPA dan aplikasi mobile?",
              choices: ["Laravel Passport","Laravel Sanctum","Laravel Octane","Laravel Breeze"],
              answerIndex: 1,
              explanation: "Laravel Sanctum merupakam sistem autentikasi ringan khusus SPA, aplikasi mobile, dan token API sederhana."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Kamu mendaftarkan route API pada file `routes/api.php`. Apa dua perbedaan utama route tersebut dibandingkan file `routes/web.php`?",
              choices: ["Tidak butuh controller dan lebih cepat","Mendapat prefix otomatis '/api/' dan tidak terlindungi CSRF protection","Harus menggunakan XML dan XML-RPC","Tidak mendukung metode POST"],
              answerIndex: 1,
              explanation: "Route di api.php otomatis dikelompokkan dengan prefix '/api' dan middleware grup 'api' yang stateless (tanpa session/CSRF)."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "API publikmu diserang dengan ribuan request per detik secara acak. Middleware standar apa di Laravel yang bisa kamu pasang di rute tersebut untuk membatasi frekuensi request dari satu IP (Rate Limiting)?",
              choices: ["throttle:api","auth:sanctum","cors","cache:clear"],
              answerIndex: 0,
              explanation: "Middleware throttle digunakan untuk mengaplikasikan Rate Limiting (misal maksimal 60 request per menit)."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Dalam desain API, kamu berhasil menyimpan data pendaftaran anggota baru ke dalam database. Status HTTP apa yang paling semantik untuk disertakan dalam respon JSON?",
              choices: ["200 OK","201 Created","400 Bad Request","204 No Content"],
              answerIndex: 1,
              explanation: "Status 201 Created secara spesifik mengisyaratkan keberhasilan eksekusi permintaan yang menghasilkan sumber daya baru di server."
            }
          ],
        },
      ],
    },
    {
      slug: "fitur-produksi",
      title: "Fitur Produksi",
      description:
        "Yang membedakan aplikasi tutorial dan aplikasi yang dipakai orang.",
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
          kind: "step",
          id: "laravel-8-1",
          title: "Queue & Job Async",
          explanation:
            "Pindahkan proses lambat (seperti kirim email atau generate PDF) ke Queue/Job (`php artisan make:job SendEmailJob`) agar respon ke user tetap instan.",
          example: {
            code: "SendWelcomeEmail::dispatch($user);",
            output: "Job didaftarkan ke antrean queue dan diproses oleh worker di background.",
            note: "Jalankan worker antrean di server dengan php artisan queue:work.",
          },
          instruction:
            "Lakukan delegasi (dispatch) antrean pekerjaan bernama `SendEmailJob` ke latar belakang dengan membawa parameter instance pengguna.",
          starterCode: "// Tulis dispatch job di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "SendEmailJob::dispatch\\(\\s*\\$user\\s*\\)\\s*;",
              message: "Gunakan: SendEmailJob::dispatch($user);",
            },
          ],
          solution: "SendEmailJob::dispatch($user);",
        },
        {
          kind: "step",
          id: "laravel-8-2",
          title: "Task Scheduling (Cron Jobs)",
          explanation:
            "Jadwalkan tugas otomatis (seperti backup database harian) di `routes/console.php` tanpa perlu menyusun banyak file cron OS manual.",
          example: {
            code: "Schedule::command('emails:send')->daily();",
            output: "Perintah emails:send otomatis dijalankan server setiap tengah malam.",
            note: "Server cukup menjalankan 1 perintah cron: * * * * * php artisan schedule:run.",
          },
          instruction:
            "Atur penjadwalan fungsi artisan secara periodik menggunakan objek fasad `Schedule` untuk mengeksekusi perintah 'backup:run' setiap hari.",
          starterCode: "// Tulis schedule daily di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Schedule::command\\(\\s*['\"]backup:run['\"]\\s*\\)->daily\\(\\)\\s*;",
              message: "Gunakan: Schedule::command('backup:run')->daily();",
            },
          ],
          solution: "Schedule::command('backup:run')->daily();",
        },
        {
          kind: "step",
          id: "laravel-8-3",
          title: "Optimasi Cache Production",
          explanation:
            "Di lingkungan produksi, jalankan perintah caching Artisan untuk mempercepat booting route dan file konfigurasi.",
          example: {
            code: "php artisan config:cache\nphp artisan route:cache\nphp artisan view:cache",
            output: "Waktu eksekusi halaman meningkat pesat.",
            note: "Jalankan php artisan optimize:clear jika ingin menghapus seluruh cache tersebut.",
          },
          instruction:
            "Tulis perintah artisan untuk meng-cache konfigurasi.",
          starterCode: "# Tulis perintah artisan di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+config:cache",
              message: "Gunakan: php artisan config:cache",
            },
          ],
          solution: "php artisan config:cache",
        },
        {
          kind: "step",
          id: "laravel-8-4",
          title: "Mail & Notifications Facade",
          explanation:
            "Kirim email berformat Blade yang indah menggunakan Mailable (`php artisan make:mail WelcomeMail`).",
          example: {
            code: "Mail::to($user->email)->send(new WelcomeMail($user));",
            output: "Email sambutan dikirimkan ke alamat inbox pengguna.",
            note: "Gunakan Mailtrap di dev mode untuk menguji pengiriman email secara aman.",
          },
          instruction:
            "Gunakan fasad layanan persuratan untuk menargetkan pengguna secara spesifik, kemudian kirimkan kelas pengiriman (mailable) `OrderShipped` kepadanya.",
          starterCode: "// Tulis pengiriman Mail di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Mail::to\\(\\s*\\$user\\s*\\)->send\\(\\s*new\\s+OrderShipped\\(\\)\\s*\\)\\s*;",
              message: "Gunakan: Mail::to($user)->send(new OrderShipped());",
            },
          ],
          solution: "Mail::to($user)->send(new OrderShipped());",
        },
        {
          kind: "step",
          id: "laravel-8-5",
          title: "Event & Listener Pattern",
          explanation:
            "Event melempar kejadian (misal: `UserRegistered`), dan Listener merespon kejadian tersebut secara decoupled.",
          example: {
            code: "UserRegistered::dispatch($user);",
            output: "Memisahkan logika pendaftaran akun dari logika pengiriman voucher diskon.",
            note: "Menciptakan arsitektur kode yang modular dan mudah dikembangkan.",
          },
          instruction:
            "Picukan kejadian (dispatch) sebuah sistem event pada Laravel menggunakan kelas `OrderPlaced` dengan muatan data berupa objek pesanan.",
          starterCode: "// Tulis dispatch event di sini\n",
          language: "text",
          tests: [
            {
              pattern: "OrderPlaced::dispatch\\(\\s*\\$order\\s*\\)\\s*;",
              message: "Gunakan: OrderPlaced::dispatch($order);",
            },
          ],
          solution: "OrderPlaced::dispatch($order);",
        },
        {
          kind: "step",
          id: "laravel-8-6",
          title: "Logging & Debugging Produksi (Laravel Telescope)",
          explanation:
            "Laravel Telescope menyediakan dashboard inspeksi untuk memantau HTTP request, exception, query database, dan queue job di dev/staging.",
          example: {
            code: "Log::error('Gagal memproses pembayaran: ' . $e->getMessage());",
            output: "Pesan error dicatat ke file storage/logs/laravel.log secara terstruktur.",
            note: "Selalu periksa file log saat menangani error 500 di server.",
          },
          instruction:
            "Catat pesan kesalahan gagal server 'Error sistem internal' ke dalam log Laravel menggunakan Facade Log bawaan.",
          starterCode: "// Tulis Log error di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Log::error\\(\\s*['\"]Error sistem internal['\"]\\s*\\)\\s*;",
              message: "Gunakan: Log::error('Error sistem internal');",
            },
          ],
          solution: "Log::error('Error sistem internal');",
        },
        {
          kind: "quiz",
          id: "laravel-8-kuis",
          title: "Kuis: Fitur Produksi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Kamu sedang mengembangkan fitur checkout e-commerce. Proses pengiriman email tanda terima membutuhkan waktu 3 detik, membuat pengguna harus menunggu loading. Bagaimana cara terbaik menyelesaikannya di Laravel?",
              choices: ["Menggunakan AJAX di frontend","Mengirim email menggunakan Queue & Job agar diproses di background","Mengurangi ukuran font pada email","Mengabaikan pengiriman email"],
              answerIndex: 1,
              explanation: "Job dan Queue menunda proses eksekusi berat ke latar belakang sehingga respon HTTP kembali ke pengguna secara instan."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Kamu harus memastikan sebuah program pembersihan database dieksekusi secara otomatis setiap tengah malam. Daripada menambahkan cron job terpisah di OS Linux, fitur Laravel apa yang bisa digunakan?",
              choices: ["Task Scheduling (di routes/console.php)","Event Listeners","Laravel Horizon","Job Queues"],
              answerIndex: 0,
              explanation: "Task Scheduling memungkinkan penjadwalan secara ekspresif (seperti ->daily()) langsung di dalam kode Laravel, hanya membutuhkan satu entry Cron di OS."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Aplikasi Laravelmu sudah di-deploy ke server produksi, namun waktu pemuatan rutenya terasa lambat. Perintah Artisan manakah yang wajib dijalankan untuk mempercepat kinerja di lingkungan produksi?",
              choices: ["php artisan serve","php artisan optimize","php artisan migrate","php artisan route:cache dan config:cache"],
              answerIndex: 3,
              explanation: "Proses cache konfigurasi dan rute akan mengompilasi semuanya ke file flat yang sangat cepat dibaca oleh framework."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Kamu menghadapi error 500 di server staging dan butuh alat untuk memantau request, error exception, dan query database secara visual. Paket Laravel mana yang khusus dibuat untuk debugging ini?",
              choices: ["Laravel Sanctum","Laravel Horizon","Laravel Telescope","Laravel Sail"],
              answerIndex: 2,
              explanation: "Telescope menyediakan antarmuka indah yang mencatat setiap detail aktivitas aplikasi untuk kebutuhan debugging di environment lokal/staging."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Di dalam struktur aplikasi, ketika pengguna baru mendaftar, kamu ingin mengirimkan email salam, mencatat ke log, dan memberikan poin loyalitas. Pola desain apa yang memisahkan logika-logika tersebut dari Controller utama?",
              choices: ["Pola Repository","Pola Event dan Listener","Pola MVC","Pola Dependency Injection"],
              answerIndex: 1,
              explanation: "Event (misal UserRegistered) dilemparkan, lalu berbagai Listener terpisah bereaksi pada event tersebut tanpa membuat Controller bengkak."
            }
          ],
        },
      ],
    },
    {
      slug: "testing-laravel",
      title: "Testing dengan Pest",
      description:
        "Feature test yang memberi rasa aman deploy hari Jumat.",
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
          kind: "step",
          id: "laravel-9-1",
          title: "Testing Modern dengan Pest PHP",
          explanation:
            "Pest PHP adalah testing framework elegan ber-sintaks expressive yang menjadi standar baru pengujian di ekosistem Laravel.",
          example: {
            code:
              "test('halaman utama dapat diakses', function () {\n" +
              "  $response = $this->get('/');\n" +
              "  $response->assertStatus(200);\n" +
              "});",
            output: "PASS Tests\\Feature\\ExampleTest",
            note: "Jalankan pengujian dengan perintah php artisan test atau ./vendor/bin/pest.",
          },
          instruction:
            "Berikan pernyataan asersi pada objek respon permintaan agar sistem memvalidasi bahwa nilai kembaliannya mempunyai HTTP status OK (200).",
          starterCode: "// Tulis assertStatus di sini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$response->assertStatus\\(\\s*200\\s*\\)\\s*;",
              message: "Gunakan: $response->assertStatus(200);",
            },
          ],
          solution: "$response->assertStatus(200);",
        },
        {
          kind: "step",
          id: "laravel-9-2",
          title: "Feature Test: HTTP Request & Assert Response",
          explanation:
            "Feature test menguji alur kerja penuh dari request HTTP masuk hingga perubahan di database dan respon balik.",
          example: {
            code:
              "$this->post('/login', ['email' => 'user@test.com', 'password' => 'secret'])\n" +
              "  ->assertRedirect('/dashboard');",
            output: "Memastikan alur login mengarahkan user ke /dashboard.",
            note: "Gunakan assertDatabaseHas untuk memverifikasi isi tabel.",
          },
          instruction:
            "Lakukan verifikasi otomatis dengan cara mengecek bahwa di dalam tabel 'users' yang ada di basis data memuat email bernilai 'a@b.com'.",
          starterCode: "// Tulis assertDatabaseHas di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$this->assertDatabaseHas\\(\\s*['\"]users['\"]\\s*,\\s*\\[\\s*['\"]email['\"]\\s*=>\\s*['\"]a@b\\.com['\"]\\s*\\]\\s*\\)\\s*;",
              message: "Gunakan: $this->assertDatabaseHas('users', ['email' => 'a@b.com']);",
            },
          ],
          solution: "$this->assertDatabaseHas('users', ['email' => 'a@b.com']);",
        },
        {
          kind: "step",
          id: "laravel-9-3",
          title: "Database Test: RefreshDatabase Trait",
          explanation:
            "Gunakan trait `RefreshDatabase` di file test agar database pengujian di-reset otomatis ke kondisi bersih di setiap pengujian.",
          example: {
            code: "uses(Illuminate\\Foundation\\Testing\\RefreshDatabase::class);",
            output: "Database di-migrate dan di-rollback otomatis di setiap fungsi test.",
            note: "Mencegah pencemaran data antar pengujian.",
          },
          instruction:
            "Panggil fitur penyegaran basis data yang merupakan bawaan core Laravel (`RefreshDatabase`) pada file test agar memori kembali bersih di tiap blok ujian.",
          starterCode: "// Tulis uses RefreshDatabase di sini\n",
          language: "text",
          tests: [
            {
              pattern: "uses\\(\\s*RefreshDatabase::class\\s*\\)\\s*;",
              message: "Tuliskan: uses(RefreshDatabase::class);",
            },
          ],
          solution: "uses(RefreshDatabase::class);",
        },
        {
          kind: "step",
          id: "laravel-9-4",
          title: "Menguji Auth & ActingAs",
          explanation:
            "Gunakan `$this->actingAs($user)` untuk mensimulasikan kondisi user yang sudah login saat melakukan request.",
          example: {
            code:
              "$user = User::factory()->create();\n" +
              "$response = $this->actingAs($user)->get('/dashboard');\n" +
              "$response->assertStatus(200);",
            output: "Request dieksekusi dengan identitas akun $user.",
            note: "Sangat penting untuk menguji route terproteksi middleware auth.",
          },
          instruction:
            "Palsukan sesi otentikasi (acting as) pada request agar sistem pengujian menganggap akun `$user` sedang login di aplikasi.",
          starterCode: "// Tulis actingAs di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\$this->actingAs\\(\\s*\\$user\\s*\\)\\s*;",
              message: "Gunakan: $this->actingAs($user);",
            },
          ],
          solution: "$this->actingAs($user);",
        },
        {
          kind: "step",
          id: "laravel-9-5",
          title: "Mocking Service Eksternal (Http::fake)",
          explanation:
            "Gunakan `Http::fake()` untuk memalsukan respon dari API pihak ketiga (seperti Payment Gateway / Fazz) agar test tidak melakukan request jaringan asli.",
          example: {
            code:
              "Http::fake([\n" +
              "  'api.payment.com/*' => Http::response(['status' => 'success'], 200),\n" +
              "]);",
            output: "Panggilan HTTP ke api.payment.com mengembalikan data palsu secara instan.",
            note: "Mencegah tagihan API asli & mempercepat durasi test suite.",
          },
          instruction:
            "Gunakan fasad HTTP untuk mencegat dan memalsukan (fake) setiap request internet keluar yang dipanggil selama berlangsungnya proses pengujian.",
          starterCode: "// Tulis Http::fake di sini\n",
          language: "text",
          tests: [
            {
              pattern: "Http::fake\\(\\)\\s*;",
              message: "Tuliskan: Http::fake();",
            },
          ],
          solution: "Http::fake();",
        },
        {
          kind: "step",
          id: "laravel-9-6",
          title: "Strategi Pengujian Berprioritas",
          explanation:
            "Utamakan menguji 1. Alur sukses utama (Happy Path), 2. Kegagalan validasi, 3. Otorisasi hak akses.",
          example: {
            code: "// Prioritas Test: Happy Path -> Validasi Error -> Authorization Denied",
            output: "Memberikan rasa aman maksimum dengan jumlah baris kode test minimal.",
            note: "Fokus pada alur bisnis yang paling krusial bagi aplikasi.",
          },
          instruction:
            "Tuliskan eksekusi baris perintah terminal artisan untuk menyalakan mesin pengetesan agar keseluruhan skenario terjalani secara luring.",
          starterCode: "# Tulis perintah artisan di sini\n",
          language: "text",
          tests: [
            {
              pattern: "php\\s+artisan\\s+test",
              message: "Gunakan perintah: php artisan test",
            },
          ],
          solution: "php artisan test",
        },
        {
          kind: "quiz",
          id: "laravel-9-kuis",
          title: "Kuis: Testing dengan Pest",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Dalam pengujian menggunakan framework Pest di Laravel, apa tujuan utama menggunakan trait 'RefreshDatabase'?",
              choices: ["Untuk menghapus database secara permanen","Untuk memastikan setiap fungsi test berjalan di atas struktur database bersih yang selalu di-reset","Untuk memperbarui versi MySQL","Untuk mempercepat eksekusi kueri tabel"],
              answerIndex: 1,
              explanation: "RefreshDatabase secara otomatis me-rollback setiap transaksi atau memigrasi ulang setelah setiap pengujian agar state database terisolasi."
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Kamu sedang menulis Feature Test untuk rute dashboard yang diproteksi otentikasi. Metode apa yang digunakan untuk mensimulasikan sesi pengguna yang telah berhasil login di dalam test?",
              choices: ["$this->login($user)","$this->actingAs($user)","$this->auth()","$this->post('/login')"],
              answerIndex: 1,
              explanation: "Metode actingAs($user) mensimulasikan otentikasi bahwa user yang diberikan saat ini adalah user aktif."
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Kamu menguji fitur checkout yang berinteraksi dengan API pihak ketiga (Payment Gateway X). Agar tes tidak bergantung pada koneksi internet asli atau mengeluarkan biaya, fitur Laravel apa yang dipakai?",
              choices: ["Artisan Tinker","Database Seeders","Http::fake()","Mocking Event"],
              answerIndex: 2,
              explanation: "Http::fake() mensimulasikan respon dari HTTP Client Laravel agar permintaan jaringan ke layanan eksternal palsu tidak benar-benar dilakukan."
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Saat mendesain strategi pengujian aplikasi, aspek apa yang sebaiknya diutamakan terlebih dahulu untuk memberikan rasa aman paling signifikan saat deploy?",
              choices: ["Menguji 100% kode controller secara unit test","Menguji happy path dari fitur utama bisnis secara Feature/Integration test","Menguji file konfigurasi","Menguji tata letak desain CSS frontend"],
              answerIndex: 1,
              explanation: "Menguji happy path (alur sukses) pada fitur inti memastikan fungsi bisnis terpenting tidak rusak, memberikan dampak proteksi maksimal dengan cepat."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kamu mengirim permintaan HTTP POST dalam file pengujian menggunakan `$this->post('/submit', $data)`. Apa metode (assertion) selanjutnya yang umum dipanggil untuk memastikan request sukses dan dialihkan?",
              choices: ["->assertRedirect()","->assertTrue()","->assertSessionHasErrors()","->assertDatabaseMissing()"],
              answerIndex: 0,
              explanation: "Method assertRedirect() memverifikasi bahwa respons HTTP yang diterima adalah pengalihan ke rute yang benar, perilaku umum setelah operasi POST."
            }
          ],
        },
      ],
    },
  ],
};
