import type { Track } from "@/lib/types";

export const pythonTrack: Track = {
  slug: "python",
  title: "Python",
  description: "Dari nol sampai otomasi & pengantar pandas untuk jalur data.",
  hours: 80,
  recommendedPrereqs: [],
  color: "bg-amber-600",
  icon: "🐍",
  order: 15,
  modules: [
    {
      slug: "persiapan-dasar-python",
      title: "Persiapan & Dasar Python",
      description:
        "Pasang Python, jalankan berkas pertamamu, lalu kuasai fondasinya — bahasa paling ramah pemula dan paling diminta di lowongan data.",
      topics: [
        "Memasang Python di Windows, macOS, Linux (python vs python3, PATH)",
        "Instalasi & menjalankan script (python, REPL)",
        "Variabel & tipe: int, float, str, bool",
        "f-string & operasi string",
        "Input/output & konversi tipe",
        "Kondisi: if/elif/else & operator perbandingan",
        "Loop: for, while, range, break/continue",
        "Indentasi: kenapa Python memaksamu rapi",
      ],
      items: [
        {
          kind: "materi",
          id: "python-1-m0",
          title: "Persiapan: Memasang Python dan Menjalankan Berkas Pertama",
          body:
            "# Pengertian\n\n" +
            "Sebelum belajar sintaks, satu hal harus beres dulu: **Python harus terpasang, dan kamu harus tahu di mana kodenya ditulis serta bagaimana menjalankannya.** Bagian ini yang paling sering dilewati tutorial, dan justru di sinilah pemula berhenti — bukan di konsep loop.\n\n" +
            "Python adalah program yang membaca berkas berisi teks (`.py`) lalu menjalankan isinya baris per baris. Program pembaca itu disebut **interpreter**. Jadi ada dua benda berbeda yang perlu kamu bedakan sejak awal: **editor** tempat kamu menulis, dan **terminal** tempat kamu menjalankan.\n\n" +
            "## Memasang Python\n\n" +
            "| Sistem operasi | Cara memasang | Perintah yang dipakai setelahnya |\n" +
            "|---|---|---|\n" +
            "| Windows | unduh installer dari python.org, **centang \"Add python.exe to PATH\"** saat memasang | `python` |\n" +
            "| macOS | `brew install python` (Python bawaan macOS sudah lama dan tidak untuk dipakai) | `python3` |\n" +
            "| Linux (Ubuntu/Debian) | `sudo apt install python3 python3-pip python3-venv` | `python3` |\n\n" +
            "Perbedaan `python` dan `python3` itu penyebab kebingungan nomor satu: di macOS dan Linux, `python` sering tidak ada atau menunjuk versi lama, sedangkan `python3` adalah yang benar. Cara memastikan hanya satu:\n\n" +
            "```text\n" +
            "$ python3 --version\n" +
            "Python 3.12.4\n" +
            "\n" +
            "$ pip3 --version\n" +
            "pip 24.0 from /usr/lib/python3/dist-packages/pip (python 3.12)\n" +
            "```\n\n" +
            "Kalau yang muncul `command not found`, Python belum terpasang atau (di Windows) kotak **Add to PATH** tadi tidak dicentang — dan jalan keluarnya memasang ulang sambil mencentangnya, bukan mengetik ulang perintahnya lebih keras.\n\n" +
            "## Dua Cara Menjalankan Kode\n\n" +
            "```text\n" +
            "1. REPL (mode percakapan) — untuk mencoba satu-dua baris\n" +
            "   $ python3\n" +
            "   >>> 2 + 3\n" +
            "   5\n" +
            "   >>> exit()          <-- keluar (atau Ctrl+D)\n" +
            "   kodenya TIDAK tersimpan\n" +
            "\n" +
            "2. BERKAS .py — cara yang dipakai untuk pekerjaan nyata\n" +
            "   editor:   halo.py   ->   print(\"Halo\")\n" +
            "   terminal: $ python3 halo.py\n" +
            "             Halo\n" +
            "```\n\n" +
            "Tanda `>>>` adalah penanda REPL, dan **tidak pernah ikut diketik** ke dalam berkas. Menyalin contoh dari internet beserta `>>>`-nya adalah kesalahan klasik yang langsung menghasilkan `SyntaxError`.\n\n" +
            "## Alur Kerja Sehari-hari\n\n" +
            "```text\n" +
            "  EDITOR (VS Code)              TERMINAL\n" +
            "  ----------------              ------------------------\n" +
            "  latihan/halo.py               $ cd ~/Documents/latihan\n" +
            "     print(\"Halo\")     tulis    $ python3 halo.py\n" +
            "     ^ simpan Ctrl+S            Halo\n" +
            "                                ^ jalankan ulang tiap kali\n" +
            "                                  berkas berubah\n" +
            "```\n\n" +
            "Terminal harus berada di folder yang sama dengan berkasmu. Kalau muncul `can't open file 'halo.py': No such file or directory`, itu bukan berarti kodenya salah — kamu sedang berada di folder lain. Periksa dengan `pwd` (macOS/Linux) atau `cd` (Windows).\n\n" +
            "## Analogi Dunia Nyata\n\n" +
            "Interpreter Python seperti **penerjemah lisan**: ia membaca satu baris, langsung menerjemahkan dan mengerjakannya, lalu lanjut ke baris berikutnya. Bahasa seperti Go atau C++ lebih mirip **penerjemah dokumen**: seluruh naskah diterjemahkan lebih dulu jadi satu berkas jadi, baru dijalankan.\n\n" +
            "Konsekuensinya penting: Python **tidak memeriksa seluruh berkasmu sebelum mulai**. Baris 1 sampai 9 bisa berjalan mulus, lalu program berhenti di baris 10 karena salah tulis — jadi \"programku jalan separuh\" adalah perilaku normal, bukan keanehan.\n\n" +
            "## Jebakan yang Menjatuhkan Hampir Semua Pemula\n\n" +
            "1. **Mengetik `python3 halo.py` di dalam REPL.** Kalau prompt-mu masih `>>>`, kamu berada di dalam Python, bukan di terminal. Keluar dulu dengan `exit()`.\n" +
            "2. **Menyimpan berkas tanpa akhiran `.py`.** Berkas `halo` atau `halo.py.txt` tidak dikenali sebagai program Python.\n" +
            "3. **Menamai berkas dengan nama modul bawaan**, misalnya `random.py` atau `json.py`. Impor di kode lain akan mengambil berkasmu, bukan modul aslinya, dan pesan errornya sangat membingungkan.\n" +
            "4. **Menyalin `>>>` dari contoh internet.** Ini langsung `SyntaxError`.\n" +
            "5. **Mengira `pip install` memasang paket untuk semua proyek dengan aman.** Nanti kamu akan pakai *virtual environment* (`python3 -m venv .venv`) supaya paket satu proyek tidak menabrak proyek lain — dibahas lengkap di modul lingkungan kerja.\n" +
            "6. **Menutup terminal lalu bingung outputnya hilang.** Keluaran `print()` tampil di terminal, bukan tersimpan di berkas.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "- Perintah `python3 nama_berkas.py` adalah cara paling umum menjalankan skrip otomasi di server, dan biasanya dibungkus **cron** untuk berjalan tiap hari.\n" +
            "- Di **code review** proyek Python, dua hal pertama yang dilihat adalah apakah dependensi tercatat (`requirements.txt`) dan apakah skrip bisa dijalankan orang lain tanpa penjelasan lisan.\n" +
            "- Pada **interview** untuk peran data, pertanyaan pembuka sering sesederhana \"bagaimana kamu menyiapkan lingkungan Python untuk proyek baru?\" — dan jawaban yang menyebut versi Python serta virtual environment langsung terdengar seperti orang yang pernah bekerja.\n\n" +
            "> **Kapan dipakai:** setiap kali membuka proyek Python baru, tiga langkah ini dulu — periksa `python3 --version`, buat folder proyek, jalankan satu berkas `print()` sederhana. Setelah itu barulah menulis logika sungguhan.\n\n" +
            "> **Catatan tentang latihan di BiLearn:** panel latihan track ini **tidak menjalankan Python** (browser tidak punya interpreter Python), jadi tidak ada keluaran yang muncul di sana. Yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus. Keluaran nyata selalu ditampilkan di bagian **Contoh** setiap latihan supaya kamu tahu bentuk aslinya.",
        },
        {
          kind: "step",
          id: "python-1-0",
          title: "Memastikan Python Terpasang",
          explanation:
            "Sebelum menulis satu baris kode, pastikan interpreter-nya benar-benar ada dan versinya modern (3.10 ke atas untuk mengikuti track ini). Polanya sama seperti hampir semua program baris perintah: nama program diikuti flag versi. Di macOS dan Linux, nama programnya `python3` — bukan `python`, yang sering menunjuk versi lama atau tidak ada sama sekali; di Windows biasanya `python` sudah cukup. Kamu menjalankan pemeriksaan ini setiap kali berpindah komputer atau setelah memasang ulang, dan jawabannya menentukan langkah berikutnya. Jebakan yang paling sering: `command not found` disimpulkan sebagai \"Python-nya rusak\", padahal artinya PATH belum berisi Python — di Windows itu efek dari tidak mencentang \"Add python.exe to PATH\" saat memasang.",
          example: {
            code: "pip3 --version",
            output:
              "pip 24.0 from /usr/lib/python3/dist-packages/pip (python 3.12)",
            note: "Perhatikan `pip` menyebutkan versi Python yang menaunginya di dalam tanda kurung. Itu cara cepat memastikan `pip` yang kamu pakai memang milik interpreter yang sama — sumber kebingungan besar di komputer yang punya dua versi Python.",
          },
          instruction:
            "Kamu baru memasang Python di macOS. Tulis perintah terminal yang menampilkan versi interpreter Python yang terpasang — perhatikan nama program yang benar di sistem itu, dan polanya sama dengan contoh di atas.",
          starterCode: "# tulis perintahnya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(python3?|py)\\s+(--version|-V)",
              message:
                "Gunakan perintah Python (`python3`, `python`, atau `py`) diikuti dengan flag versi `--version` atau `-V`.",
            },
          ],
          solution: "python3 --version",
          susunKode: {
            question:
              "Susun perintah CLI untuk memeriksa versi Python 3 yang terpasang.",
            potongan: [
              "python3 ",
              "--version",
            ],
            pengecoh: [
              "py3 ",
              "--show-ver",
            ],
            pemisah: "",
            explanation:
              "Pemeriksaan versi Python di terminal dilakukan dengan perintah `python3 --version`. Pengecoh `py3 --show-ver` adalah nama perintah fiktif yang sering menggoda pemula padahal perintah tersebut tidak ada di CLI resmi.",
          },
        },
        {
          kind: "materi",
          id: "python-1-m1",
          title: "Pengenalan Python & Model Mental Interpreter",
          body:
            "# Pengenalan Python & Model Mental Interpreter\n\n" +
            "Selamat datang di track **Python**! Python adalah bahasa pemrograman tingkat tinggi yang paling ramah pemula, namun sekaligus menjadi bahasa paling diminta di dunia kerja modern — mulai dari **Data Science**, **Machine Learning**, **Web Backend (FastAPI/Django)**, hingga **Otomasi Scripting**.\n\n" +
            "## Model Mental: Bagaimana Kode Python Dieksekusi?\n\n" +
            "Berbeda dari bahasa seperti C++ atau Go yang dikompilasi langsung menjadi kode mesin biner, Python menggunakan pendekatan **interpreter**. Saat kamu menjalankan berkas `script.py`, interpreter Python melakukan dua tahap:\n" +
            "1. **Kompilasi ke Bytecode**: Kode program diterjemahkan menjadi instruksi tingkat rendah ber-ekstensi `.pyc` (Bytecode).\n" +
            "2. **Eksekusi oleh PVM**: Virtual Machine Python (PVM - Python Virtual Machine) membaca Bytecode tersebut dan mengeksekusinya baris demi baris di memori komputer.\n\n" +
            "```text\n" +
            "+------------------+      +-------------------+      +-------------------------+\n" +
            "| Source Code      | ---> | Bytecode (.pyc)   | ---> | Python Virtual Machine  |\n" +
            "| (script.py)      |      | (Kompilasi Cepat) |      | (PVM - Eksekusi Baris)  |\n" +
            "+------------------+      +-------------------+      +-------------------------+\n" +
            "```\n\n" +
            "## Eksekusi Script vs REPL Interaktif\n\n" +
            "Ada dua cara utama kamu menjalankan Python:\n" +
            "- **REPL (Read-Eval-Print Loop)**: Ketik `python3` di terminal untuk membuka konsol interaktif. Sangat cocok untuk menguji 1–2 baris kode dengan cepat.\n" +
            "- **Berkas Script (`.py`)**: Tulis seluruh logika program di dalam berkas teks `.py`, lalu jalankan dari terminal dengan perintah `python3 nama_file.py`.\n\n" +
            "## Rujukan Tipe Data Dasar Python\n\n" +
            "| Tipe Data | Kode | Contoh Nilai | Penjelasan Ringkas |\n" +
            "|---|---|---|---|\n" +
            "| **Integer** | `int` | `42`, `-7` | Bilangan bulat tanpa koma/desimal. |\n" +
            "| **Float** | `float` | `3.14`, `-0.001` | Bilangan desimal/pecahan. |\n" +
            "| **String** | `str` | `\"Halo\"`, `'BiLearn'` | Teks yang dibungkus petik tunggal atau ganda. |\n" +
            "| **Boolean** | `bool` | `True`, `False` | Nilai kebenaran logika (wajib kapital awal). |\n" +
            "| **NoneType** | `NoneType` | `None` | Merepresentasikan ketiadaan nilai (spesial di Python). |\n\n" +
            "## Operasi String & f-string Esensial\n\n" +
            "Manipulasi teks adalah tugas harian pengembang Python. Python menyediakan metode bawaan yang sangat kaya:\n\n" +
            "| Operasi / Method | Contoh Kode | Hasil | Kasus Dunia Kerja |\n" +
            "|---|---|---|---|\n" +
            "| `f-string` | `f\"User: {nama.upper()}\"` | `\"User: BUDI\"` | Templating pesan log dan query dinamis |\n" +
            "| `.strip()` | `\"  halo@mail.com  \".strip()` | `\"halo@mail.com\"` | Sanitasi spasi liar dari data input user |\n" +
            "| `.lower()` / `.upper()` | `\"Admin\".lower()` | `\"admin\"` | Normalisasi teks sebelum pencarian / perbandingan |\n" +
            "| `.split(sep)` | `\"apel,jeruk,mangga\".split(\",\")` | `['apel', 'jeruk', 'mangga']` | Mengurai baris data teks menjadi list |\n" +
            "| `.replace(old, new)` | `\"Rp 10.000\".replace(\"Rp \", \"\")` | `\"10.000\"` | Pembersihan simbol mata uang dari scraping |\n\n" +
            "## Alur Kendali: Percabangan & Perulangan (while, for, break, continue)\n\n" +
            "Python membedakan perulangan terhitung (`for` dengan `range`) dan perulangan berbasis kondisi (`while`):\n\n" +
            "```text\n" +
            "+-----------------------------------+    +-----------------------------------+\n" +
            "| for item in koleksi:              |    | while kondisi_benar:              |\n" +
            "|   # Berulang untuk tiap elemen    |    |   # Berulang sampai kondisi False |\n" +
            "|   # Gunakan 'continue' utk lewati |    |   # Hati-hati infinite loop!      |\n" +
            "|   # Gunakan 'break' utk berhenti  |    |   # Gunakan 'break' utk interupsi |\n" +
            "+-----------------------------------+    +-----------------------------------+\n" +
            "```\n\n" +
            "- **`break`**: Menghentikan perulangan secara paksa dan langsung melompat keluar dari blok loop.\n" +
            "- **`continue`**: Menghentikan iterasi saat ini dan langsung melompat ke iterasi berikutnya tanpa mengeksekusi sisa baris di bawahnya.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "- **String Bersifat Immutable**: Memanggil `teks.strip()` tidak mengubah isi variabel `teks` asli. Kamu wajib menampung hasilnya kembali: `teks = teks.strip()`.\n" +
            "- **Infinite Loop pada `while`**: Lupa memperbarui variabel counter/status di dalam loop `while` akan membuat program macet dan memakan 100% CPU server.\n" +
            "- **Error Tipe saat Penggabungan Teks (TypeError)**: Di Python, kamu tidak bisa menggabungkan string dengan angka secara langsung menggunakan operator `+` (`\"Tahun \" + 2026` memicu `TypeError`). Kamu harus mengonversi angka ke string dengan `str(2026)` atau menggunakan **f-string** (`f\"Tahun {2026}\"`).\n" +
            "- **Kesalahan Indentasi (IndentationError)**: Python tidak memakai kurung kurawal `{}` untuk penanda blok kode. Python memaksamu menggunakan indentasi (4 spasi). Mencampur Tab dan Spasi akan membuat kode gagal berjalan!\n" +
            "- **Kapitalisasi Kata Kunci**: Kata kunci seperti `True`, `False`, dan `None` wajib menggunakan huruf kapital di awal. Menggunakan `true` atau `false` akan memicu `NameError`.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di industri software engineering dan analisis data, Python adalah bahasa standar untuk membuat saluran otomasi data (data pipeline), skrip pengolahan otomatis, dan API mikro. Kerapian sintaks Python mempercepat proses prototyping dari ide menjadi produk siap pakai di dunia kerja.",
        },
        {
          kind: "step",
          id: "python-1-1",
          title: "Menjalankan Script Python & print()",
          explanation:
            "Fungsi `print()` adalah cara utama di Python untuk menampilkan data atau pesan teks ke panel layar konsol terminal. Berkas Python disimpan dengan ekstensi `.py` dan dieksekusi oleh interpreter menggunakan perintah `python nama_script.py`. Python tidak membutuhkan tanda titik koma (`;`) di akhir setiap baris kode seperti JavaScript atau C, sehingga kodenya terlihat bersih dan mudah dibaca. Jebakan pemula adalah lupa membungkus teks dengan tanda petik ganda (`\"...\"`) atau tunggal (`'...'`), yang memicu `SyntaxError`.",
          example: {
            code: 'print("Halo Dunia")',
            output: "Halo Dunia",
            note: "Python tidak membutuhkan tanda titik koma (;) di akhir baris.",
          },
          instruction:
            'Kamu sedang membuat program sapaan. Cetaklah teks "Selamat Datang di BiLearn" ke layar.',
          starterCode: "# Tulis kodemu di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "print\\(\\s*[\"']Selamat Datang di BiLearn[\"']\\s*\\)",
              message:
                "Gunakan fungsi print() untuk mencetak sapaan persis seperti yang diminta.",
            },
          ],
          solution: 'print("Selamat Datang di BiLearn")',
          susunKode: {
            question:
              "Susun pencetakan pesan Selamat Datang di BiLearn dengan fungsi print.",
            potongan: [
              "print(\"Selamat Datang ",
              "di BiLearn\")",
            ],
            pengecoh: [
              "echo(\"Selamat Datang ",
              "ke BiLearn\")",
            ],
            pemisah: "",
            explanation:
              "Pencetakan output teks di Python menggunakan fungsi `print()`. Pengecoh `echo()` diadaptasi dari bahasa PHP atau Bash yang sering keliru dipakai oleh pemula saat pertama kali belajar skrip Python di lingkungan kerja interaktif.",
          },
        },
        {
          kind: "step",
          id: "python-1-2",
          title: "Variabel & Tipe Data Dasar",
          explanation:
            "Python menerapkan sistem Dynamic Typing, artinya kamu cukup menuliskan nama variabel dan mengisikan nilainya tanpa perlu mendeklarasikan tipe datanya secara manual. Tipe data dasar yang paling sering digunakan meliputi `int` (bilangan bulat), `float` (bilangan desimal), `str` (teks), dan `bool` (`True` atau `False`). Nama variabel bersifat case-sensitive (membedakan huruf besar dan kecil) dan disarankan menggunakan konvensi snake_case sesuai standar PEP 8. Jebakan umum terjadi ketika variabel dipanggil sebelum dideklarasikan, yang akan memicu `NameError` saat program dijalankan.",
          example: {
            code: 'nama = "Budi"\numur = 25\ntinggi = 175.5\nis_active = True',
            output: "Empat variabel ber-tipe data berbeda dibuat.",
            note: "Tipe data di Python bersifat dinamik (Dynamic Typing).",
          },
          instruction:
            'Programmu membutuhkan data umur pengguna. Buatlah sebuah variabel bernama `age` dan isikan dengan angka 20.',
          starterCode: "# Deklarasikan variabel age di sini\n",
          language: "text",
          tests: [
            {
              pattern: "age\\s*=\\s*20",
              message: "Variabel harus bernama age dan bernilai 20.",
            },
          ],
          solution: "age = 20",
          susunKode: {
            question:
              "Susun inisialisasi variabel umur age dengan angka 20.",
            potongan: [
              "age",
              " = 20",
            ],
            pengecoh: [
              "tahun",
              " == 20",
            ],
            pemisah: "",
            explanation:
              "Deklarasi variabel di Python menggunakan operator sama dengan tunggal `age = 20`. Pengecoh operator pembanding `==` atau variabel `tahun` adalah kesalahan umum yang sering menjebak pemula saat menginisialisasi angka dalam skrip.",
          },
        },
        {
          kind: "step",
          id: "python-1-3",
          title: "Formatting String dengan f-string",
          explanation:
            "Fitur f-string (Formatted String Literals) diawali dengan huruf `f` sebelum tanda petik, misalnya `f\"Halo {nama}\"`, yang memungkinkan kamu menyisipkan nilai variabel atau ekspresi Python langsung di dalam kurung kurawal `{}`. Pendekatan ini merupakan cara paling modern, bersih, dan cepat untuk menggabungkan teks dibanding gabungan operator `+` atau `.format()`. Fitur ini juga mendukung ekspresi matematika langsung di dalam kurung kurawal, seperti `f\"Total: {harga * jumlah}\"`. Jebakan yang sering dialami pemula adalah lupa menambahkan huruf `f` di depan string, sehingga kurung kurawal `{variabel}` hanya tercetak sebagai teks mentah.",
          example: {
            code: 'nama = "Bimo"\nprint(f"Halo, nama saya {nama}")',
            output: "Halo, nama saya Bimo",
            note: "f-string adalah cara paling modern dan bersih untuk menggabungkan string di Python 3.6+.",
          },
          instruction:
            'Dengan menggunakan variabel `age` yang berisi umur, gunakan f-string untuk mencetak teks persis seperti ini: "Umur: {age}".',
          starterCode: "# Cetak menggunakan f-string di sini\n",
          language: "text",
          tests: [
            {
              pattern: "print\\(\\s*f[\"']Umur:\\s*\\{\\s*age\\s*\\}[\"']\\s*\\)",
              message: "Gunakan f-string di dalam fungsi print() sesuai format.",
            },
          ],
          solution: 'print(f"Umur: {age}")',
          susunKode: {
            question:
              "Susun f-string untuk mencetak variabel age dengan format Umur.",
            potongan: [
              "print(f\"Umur: ",
              "{age}\")",
            ],
            pengecoh: [
              "print(\"Umur: ",
              "$age\")",
            ],
            pemisah: "",
            explanation:
              "Format string Python modern menggunakan f-string `f\"Umur: {age}\"`. Pengecoh `$age` berasal dari bahasa PHP yang keliru jika digunakan di Python dan sering membuat pemula bingung dalam format teks laporan yang rapi.",
          },
        },
        {
          kind: "step",
          id: "python-1-4",
          title: "Input Pengguna & Konversi Tipe Data",
          explanation:
            "Fungsi `input()` digunakan untuk menerima masukan teks dari pengguna via terminal keyboard. Hal paling krusial yang harus diingat adalah bahwa fungsi `input()` selalu mengembalikan data ber-tipe string (`str`), meskipun pengguna mengetikkan angka. Jika kamu ingin melakukan perhitungan aritmetika pada masukan tersebut, kamu wajib mengonversinya secara eksplisit ke bilangan bulat menggunakan `int()` atau desimal menggunakan `float()`. Lupa melakukan konversi tipe data akan memicu `TypeError` atau penggabungan teks yang salah (misalnya `'20' + '5'` menjadi `'205'`).",
          example: {
            code: 'umur_str = input("Masukkan umur: ")\numur = int(umur_str)',
            output: "Variabel umur dikonversi menjadi integer.",
            note: "Lupa mengonversi string ke int akan menyebabkan TypeError saat operasi aritmetika.",
          },
          instruction:
            "Kita menerima input umur dalam bentuk string pada variabel `input_str`. Konversikan nilainya menjadi bilangan bulat (integer) lalu simpan ke variabel bernama `score`.",
          starterCode: "# Konversikan input_str ke int di sini\n",
          language: "text",
          tests: [
            {
              pattern: "score\\s*=\\s*int\\(\\s*input_str\\s*\\)",
              message: "Simpan hasil konversi ke dalam variabel score.",
            },
          ],
          solution: "score = int(input_str)",
          susunKode: {
            question:
              "Susun konversi string input_str menjadi integer pada variabel score.",
            potongan: [
              "score = ",
              "int(input_str)",
            ],
            pengecoh: [
              "score := ",
              "parse_int(input_str)",
            ],
            pemisah: "",
            explanation:
              "Konversi tipe data ke integer di Python menggunakan fungsi bawaan `int()`. Pengecoh `parse_int()` adalah nama fungsi fiktif yang sering menggoda karena mirip dengan fungsi di JavaScript modern saat ini di lembar kerja.",
          },
        },
        {
          kind: "step",
          id: "python-1-5",
          title: "Pengondisian if, elif, dan else",
          explanation:
            "Struktur percabangan keputusan di Python menggunakan kata kunci `if`, `elif` (singkatan dari else if), dan `else` untuk mengevaluasi kondisi boolean. Setiap pernyataan kondisi wajib diakhiri dengan tanda titik dua (`:`) dan baris kode di dalamnya harus diberi indentasi 4 spasi menjorok ke dalam. Python mengevaluasi kondisi dari atas ke bawah dan hanya mengeksekusi blok pertama yang bernilai `True`. Jebakan klasik pemula adalah tertukar antara operator penugasan nilai `=` dengan operator pembanding kesamaan `==` di dalam kondisi `if`.",
          example: {
            code: 'nilai = 85\nif nilai >= 80:\n  print("A")\nelif nilai >= 70:\n  print("B")\nelse:\n  print("C")',
            output: "A",
            note: "Blok kode di dalam kondisi wajib memiliki indentasi 4 spasi.",
          },
          instruction:
            'Cek apakah nilai variabel `score` mencapai 75 atau lebih. Jika iya, cetaklah kata "Lulus".',
          starterCode: "# Tulis logika pengondisianmu di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "if\\s*\\(?\\s*score\\s*>=\\s*75\\s*\\)?\\s*:\\s*\\n?[ \\t]*print\\(\\s*[\"']Lulus[\"']\\s*\\)",
              message:
                "Gunakan if dan periksa apakah score >= 75, lalu panggil print(\"Lulus\").",
            },
          ],
          solution: 'if score >= 75:\n    print("Lulus")',
          susunKode: {
            question:
              "Susun percabangan if score >= 75 untuk mencetak Lulus.",
            potongan: [
              "if score >= 75:\n",
              "    print(\"Lulus\")",
            ],
            pengecoh: [
              "if (score >= 75) {\n",
              "    echo(\"Lulus\");\n}",
            ],
            pemisah: "",
            explanation:
              "Pengkondisian Python diakhiri titik dua `:` tanpa kurung kurawal. Pengecoh kurung kurawal `{}` adalah jebakan sintaks C-style yang sering keliru ditulis oleh pengguna baru saat pertama belajar Python di platform BiLearn.",
          },
        },
        {
          kind: "step",
          id: "python-1-6",
          title: "Perulangan for, range(), dan while",
          explanation:
            "Perulangan `for` di Python digunakan untuk melakukan iterasi pada urutan elemen, seperti rentang angka yang dihasilkan oleh fungsi `range(start, stop)`. Perlu diingat bahwa fungsi `range(0, 5)` menghasilkan urutan 0, 1, 2, 3, 4 (batas akhir bersifat eksklusif tidak termasuk). Kamu juga bisa menggunakan perulangan `while` yang terus berjalan selama kondisi bernilai `True`, serta kata kunci `break` untuk keluar dari loop lebih awal. Jebakan utama pada `while` loop adalah lupa memperbarui variabel penghitung sehingga menyebabkan infinite loop yang membekukan program.",
          example: {
            code: 'for i in range(1, 4):\n  print(f"Angka {i}")',
            output: "Angka 1\nAngka 2\nAngka 3",
            note: "Gunakan break untuk keluar dari perulangan lebih awal.",
          },
          instruction:
            "Buat perulangan `for` yang mengiterasi angka dari urutan `range(5)` (dari 0 hingga 4), lalu cetak masing-masing angka tersebut ke layar menggunakan fungsi `print()`.",
          starterCode: "# Tulis perulangan for di sini\n",
          language: "text",
          tests: [
            {
              pattern: "for\\s+\\w+\\s+in\\s+range\\(\\s*5\\s*\\)\\s*:",
              message: "Tuliskan perulangan for dengan range(5), misalnya: for i in range(5):",
            },
          ],
          solution: "for i in range(5):\n    print(i)",
          susunKode: {
            question:
              "Susun perulangan 5 kali untuk mencetak nilai variabel i.",
            potongan: [
              "for i in ",
              "range(5):\n    print(i)",
            ],
            pengecoh: [
              "foreach i in ",
              "loop(5):\n    print(i)",
            ],
            pemisah: "",
            explanation:
              "Perulangan di Python menggunakan `for i in range(5):`. Pengecoh `foreach` dan `loop(5)` adalah kesalahan keliru dari bahasa lain yang memicu SyntaxError di Python saat dieksekusi oleh sistem interpreter Python secara otomatis.",
          },
        },
        {
          kind: "step",
          id: "python-1-7",
          title: "Aturan Indentasi Python (4 Spasi)",
          explanation:
            "Berbeda dari bahasa lain yang mengelompokkan blok kode dengan kurung kurawal, Python memakai indentasi — spasi menjorok ke dalam, standarnya 4 spasi — sebagai penanda isi sebuah blok. Indentasi di Python bukan soal kerapian, melainkan bagian dari sintaks: baris yang menjorok berarti 'ini isi dari for/if/def di atasnya'. Kalau baris setelah tanda titik dua tidak menjorok, Python langsung berhenti dengan `IndentationError: expected an indented block`. Jebakan yang paling sering menimpa pemula adalah mencampur Tab dan Spasi dalam satu file — tampilannya terlihat lurus, tapi Python tetap menolaknya.",
          example: {
            code: "# ❌ baris di bawah for tidak menjorok\n# for i in range(2):\n# print('halo')      -> IndentationError\n\n# ✅ menjorok 4 spasi\nfor i in range(2):\n    print('halo')",
            output: "halo\nhalo",
            note: "Empat spasi adalah standar PEP 8. Editor seperti VS Code bisa diatur agar tombol Tab otomatis menghasilkan spasi.",
          },
          instruction:
            "Buat variabel `angka` bernilai 1, lalu tulis perulangan `for` yang mencetak isi variabel itu sebanyak dua kali. Perhatikan indentasi baris di dalam perulangannya.",
          starterCode: "angka = 1\n# Tulis perulangan for di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "angka\\s*=\\s*1",
              message: "Buat variabel angka bernilai 1.",
            },
            {
              pattern: "for\\s+\\w+\\s+in\\s+range\\(\\s*2\\s*\\)\\s*:",
              message: "Tulis perulangan for ... in range(2):",
            },
            {
              pattern: "\\n[ \\t]+print\\(\\s*angka\\s*\\)",
              message:
                "Baris print(angka) harus menjorok ke dalam sebagai isi perulangan.",
            },
          ],
          solution: "angka = 1\nfor i in range(2):\n    print(angka)",
          susunKode: {
            question:
              "Susun perulangan 2 kali untuk mencetak variabel angka.",
            potongan: [
              "angka = 1\nfor i in ",
              "range(2):\n    print(angka)",
            ],
            pengecoh: [
              "angka = 1\nloop 2 ",
              "times():\n    print(angka)",
            ],
            pemisah: "",
            explanation:
              "Inisialisasi `angka = 1` dan perulangan `range(2)` mencetak nilai angka dua kali. Pengecoh `loop 2 times` adalah instruksi fiktif yang keliru dan menggoda pemula yang belum paham perulangan Python standar pada skrip program.",
          },
        },
        {
          kind: "quiz",
          id: "python-1-kuis",
          title: "Kuis: Dasar Python",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara Python mendefinisikan sebuah cakupan blok kode (seperti isi fungsi atau kondisi if)?",
              choices: [
                "Menggunakan kurung kurawal {}",
                "Menggunakan Indentasi (spasi/tab) di awal baris",
                "Menggunakan kata kunci BEGIN dan END",
                "Menggunakan tanda kurung siku []",
              ],
              answerIndex: 1,
              explanation:
                "Python menggunakan Indentasi bersih di awal baris untuk menandai blok cakupan kode, alih-alih kurung kurawal seperti bahasa pemrograman lainnya.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa fungsi dari f-string di Python?",
              choices: [
                "Menjalankan perulangan lebih cepat",
                "Menyelipkan nilai variabel langsung ke dalam teks (string)",
                "Mengonversi teks menjadi huruf kapital",
                "Mencetak file ke printer",
              ],
              answerIndex: 1,
              explanation:
                "F-string (format string) memungkinkan kita menggunakan {} untuk menyisipkan nilai variabel langsung di dalam string tanpa harus menggabungkan dengan operator +.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                'Apa yang akan terjadi jika kamu mencoba menjumlahkan tipe data `str` dengan `int` secara langsung di Python, misal `"Tahun " + 2026`?',
              choices: [
                "Python akan otomatis mengubah angka menjadi teks",
                "Kode akan menghasilkan TypeError",
                "Hasilnya adalah 'Tahun 2026'",
                "Python akan mengubah teks menjadi angka",
              ],
              answerIndex: 1,
              explanation:
                "Python memiliki strong typing, ia tidak akan otomatis mengubah integer menjadi string, sehingga akan melemparkan TypeError jika kamu tidak mengonversi angkanya menggunakan str() terlebih dulu.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Apa fungsi dari keyword `break` dalam sebuah perulangan (looping)?",
              choices: [
                "Menghentikan program seutuhnya",
                "Menghentikan iterasi dan keluar dari perulangan",
                "Melanjutkan ke iterasi berikutnya",
                "Menghapus variabel di dalam loop",
              ],
              answerIndex: 1,
              explanation:
                "Keyword `break` menghentikan eksekusi perulangan saat ini secara langsung, sehingga kode akan berlanjut ke baris setelah blok perulangan tersebut.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Di antara tipe data berikut, mana yang digunakan untuk merepresentasikan nilai desimal di Python?",
              choices: ["int", "str", "bool", "float"],
              answerIndex: 3,
              explanation:
                "Tipe data `float` digunakan untuk menyimpan angka desimal/pecahan, sedangkan `int` digunakan untuk bilangan bulat.",
            },
          ],
        },
      ],
    },
    {
      slug: "struktur-data-python",
      title: "Struktur Data",
      description:
        "List, dict, tuple, set — pilih yang tepat untuk tiap masalah.",
      topics: [
        "List: index, slice, append, method penting",
        "Dict: key-value, get, items, nested dict",
        "Tuple & unpacking",
        "Set & operasi himpunan",
        "List/dict comprehension — idiom Python yang wajib",
        "Iterasi gabungan: enumerate, zip, sorted dengan key",
        "Memilih struktur: kapan list vs dict vs set",
      ],
      items: [
        {
          kind: "materi",
          id: "python-2-m1",
          title: "Struktur Data Bawaan: List, Dict, Tuple, Set",
          body:
            "# Struktur Data Bawaan Python\n\n" +
            "Pemilihan struktur data yang tepat adalah perbedaan utama antara kode pemula dan kode developer berpengalaman. Python menyediakan empat struktur data bawaan utama yang sangat fleksibel: **List**, **Tuple**, **Set**, dan **Dictionary**.\n\n" +
            "## Tabel Perbandingan Struktur Data Bawaan\n\n" +
            "| Struktur Data | Sintaks | Sifat Unik (Unique) | Pengurutan (Ordered) | Dapat Diubah (Mutable) | Kecepatan Pencarian (Search Time) |\n" +
            "|---|---|---|---|---|---|\n" +
            "| **List** | `[1, 2, 3]` | Duplikat diizinkan | Berurut (Indeks 0, 1, ..) | Ya | $O(n)$ (Lambat untuk juta data) |\n" +
            "| **Tuple** | `(1, 2, 3)` | Duplikat diizinkan | Berurut | **Tidak (Immutable)** | $O(n)$ (Hemat memori) |\n" +
            "| **Set** | `{1, 2, 3}` | **Nilai Harus Unik** | Tidak Berurut | Ya | **$O(1)$ Instan (Hash Table)** |\n" +
            "| **Dict** | `{\"a\": 1}` | **Kunci Harus Unik** | Berurut (Python 3.7+) | Ya | **$O(1)$ Instan (Key Lookup)** |\n\n" +
            "## Model Mental Slicing & Indeks Negatif\n\n" +
            "List dan Tuple mendukung fitur **slicing** dengan sintaks `[start:end:step]`. Yang paling wajib diingat: indeks `end` bersifat **eksklusif** (tidak termasuk dalam hasil).\n\n" +
            "```text\n" +
            "Indeks Positif:   0     1     2     3     4\n" +
            "Data List:      ['A', 'B', 'C', 'D', 'E']\n" +
            "Indeks Negatif:  -5    -4    -3    -2    -1\n" +
            "\n" +
            "Contoh data[1:4]  --> ['B', 'C', 'D'] (Indeks 4 'E' TIDAK ikut!)\n" +
            "Contoh data[-1]   --> 'E' (Elemen paling akhir)\n" +
            "```\n\n" +
            "## Operasi Himpunan (Set Operations)\n\n" +
            "Set sangat ampuh untuk logika himpunan matematika dan deduplikasi data secara instan:\n\n" +
            "| Operasi | Operator | Metode | Contoh (`a = {1, 2}`, `b = {2, 3}`) | Hasil |\n" +
            "|---|---|---|---|---|\n" +
            "| **Irisan** (*Intersection*) | `&` | `a.intersection(b)` | `a & b` | `{2}` (Elemen yang ada di kedua set) |\n" +
            "| **Gabungan** (*Union*) | `\\|` | `a.union(b)` | `a \\| b` | `{1, 2, 3}` (Semua elemen tanpa duplikat) |\n" +
            "| **Selisih** (*Difference*) | `-` | `a.difference(b)` | `a - b` | `{1}` (Elemen di a tapi bukan di b) |\n" +
            "| **Selisih Simetris** | `^` | `a.symmetric_difference(b)` | `a ^ b` | `{1, 3}` (Elemen unik di salah satu set) |\n\n" +
            "## List/Dict Comprehension & Iterasi Gabungan (`zip`, `sorted`)\n\n" +
            "Comprehension dan fungsi iterasi bawaan memungkinkan transformasi data tanpa loop manual berbaris-baris:\n\n" +
            "```python\n" +
            "# Comprehension: cepat, ringkas, deklaratif\n" +
            "kuadrat = [x**2 for x in range(5) if x % 2 == 0]  # [0, 4, 16]\n" +
            "harga_pajak = {item: harga * 1.1 for item, harga in barang.items()}\n\n" +
            "# zip: pasangkan dua koleksi paralel\n" +
            "nama = [\"Ani\", \"Budi\"]\n" +
            "nilai = [90, 85]\n" +
            "rekap = dict(zip(nama, nilai))  # {'Ani': 90, 'Budi': 85}\n\n" +
            "# sorted dengan key lambda: urutkan data kompleks\n" +
            "siswa = [{\"nama\": \"Budi\", \"skor\": 80}, {\"nama\": \"Ani\", \"skor\": 95}]\n" +
            "peringkat = sorted(siswa, key=lambda s: s[\"skor\"], reverse=True)\n" +
            "```\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "- **Set Tidak Memiliki Indeks**: Menulis `my_set[0]` akan memicu `TypeError: 'set' object is not subscriptable`. Jika urutan posisi penting, gunakan List atau Tuple.\n" +
            "- **`KeyError` saat Akses Dictionary**: Mengakses kunci dengan `dict['key']` akan membuat program crash jika kunci tidak ada. Selalu gunakan `dict.get('key', default)`.\n" +
            "- **Menyalin List secara Salah (Reference Copy)**: `b = a` tidak membuat list baru, melainkan hanya membuat dua nama merujuk ke lokasi memori yang sama. Mengubah `b` akan ikut mengubah `a`! Gunakan `b = a.copy()` atau `b = a[:]`.\n" +
            "- **Mengubah List saat Sedang Di-looping**: Menghapus elemen list di dalam perulangan `for x in my_list:` akan mengacaukan indeks perulangan. Buat list baru via comprehension alih-alih merusak list asli.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Saat memproses data jutaan pengguna, mengubah pencarian keberadaan elemen dari `List` ke `Set` dapat memangkas waktu eksekusi skrip dari **10 menit menjadi 0.1 detik** karena perbedaan kompleksitas algoritma pencarian dari $O(n)$ menjadi $O(1)$.",
        },
        {
          kind: "step",
          id: "python-2-1",
          title: "List & Slicing di Python",
          explanation:
            "List adalah urutan elemen yang mutable — isinya bisa diubah, ditambah, atau dihapus setelah dibuat, misalnya `[1, 2, 3]`. Tambah elemen baru di posisi paling akhir dengan `.append()`, dan ambil sebagian isinya dengan sintaks slicing `list[start:end]`. Yang sering menjebak pemula: batas akhir slicing bersifat eksklusif, jadi `buah[0:2]` memberi elemen indeks 0 dan 1 saja — indeks 2 tidak ikut terambil. Karena itu jumlah elemen hasil slicing selalu bernilai `end - start`.",
          example: {
            code: 'buah = ["Apel", "Jeruk", "Mangga"]\nbuah.append("Pisang")\nprint(buah)\nprint(buah[0:2])',
            output: "['Apel', 'Jeruk', 'Mangga', 'Pisang']\n['Apel', 'Jeruk']",
            note: "Indeks Python dimulai dari 0, dan batas akhir slicing tidak ikut terambil. Indeks negatif [-1] mengambil elemen paling akhir.",
          },
          instruction:
            'Kamu memiliki sebuah list daftar barang pada variabel `items`. Tambahkan barang "Baru" ke akhir urutan daftar tersebut menggunakan fungsi yang tepat.',
          starterCode: "# Tambahkan elemen ke list items di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "items\\.append\\(\\s*[\"']Baru[\"']\\s*\\)",
              message: "Gunakan fungsi .append() pada list items.",
            },
          ],
          solution: 'items.append("Baru")',
          susunKode: {
            question:
              "Susun penambahan elemen baru 'Baru' ke list items.",
            potongan: [
              "items.",
              "append(\"Baru\")",
            ],
            pengecoh: [
              "items -> ",
              "push(\"Baru\")",
            ],
            pemisah: "",
            explanation:
              "Penambahan elemen ke list Python menggunakan method `.append()`. Pengecoh `.push()` adalah method dari JavaScript yang sering keliru digunakan dan menyebabkan AttributeError di Python secara mendadak saat dieksekusi program.",
          },
        },
        {
          kind: "step",
          id: "python-2-2",
          title: "Dictionary (Kamus Key-Value)",
          explanation:
            "Dictionary menyimpan pasangan kunci-nilai (key-value) dengan sintaks `{'nama': 'Budi', 'umur': 25}`. Kunci pada dictionary bersifat unik dan memungkinkan akses data instan dalam waktu konstan. Sangat disarankan menggunakan metode `.get('key', default_val)` alih-alih kurung siku `dict['key']`. Menggunakan kurung siku pada kunci yang tidak ada akan melempar `KeyError` yang menghentikan program, sedangkan `.get()` mengembalikan nilai default secara aman tanpa crash.",
          example: {
            code: 'user = {"name": "Budi", "age": 25}\nprint(user.get("role", "guest"))',
            output: "guest",
            note: "Metode .get() aman dari KeyError.",
          },
          instruction:
            'Ambil nilai untuk kunci `"role"` dari dictionary `user`. Gunakan metode yang tidak akan menghasilkan error meskipun kuncinya tidak ada, dan kembalikan `"user"` sebagai nilai bawaan. Simpan hasilnya di variabel `role`.',
          starterCode: "# Ambil nilai dari user di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "role\\s*=\\s*user\\.get\\(\\s*[\"']role[\"']\\s*,\\s*[\"']user[\"']\\s*\\)",
              message:
                "Gunakan metode .get() dari dictionary dengan default value.",
            },
          ],
          solution: 'role = user.get("role", "user")',
          susunKode: {
            question:
              "Susun pengambilan nilai kunci 'role' dari dictionary user dengan default 'user'.",
            potongan: [
              "role = ",
              "user.get(\"role\", \"user\")",
            ],
            pengecoh: [
              "role := ",
              "user.fetch(\"role\", \"user\")",
            ],
            pemisah: "",
            explanation:
              "Pengambilan aman dari dictionary menggunakan `.get('role', 'user')`. Pengecoh `.fetch()` adalah method fiktif yang keliru dan sering menjebak pemula yang terbiasa dengan API JavaScript pada pemrograman web interaktif.",
          },
        },
        {
          kind: "step",
          id: "python-2-3",
          title: "Tuple & Unpacking",
          explanation:
            "Tuple adalah struktur data berurut yang bersifat immutable (tidak dapat diubah, ditambah, atau dihapus setelah dibuat) dengan sintaks `(10, 20)`. Fitur Unpacking memungkinkan kamu mengekstrak isi elemen tuple secara langsung ke beberapa variabel terpisah dalam satu baris kode, seperti `x, y = point`. Tuple mengeksekusi operasi lebih cepat dan hemat memori dibanding List. Jebakan umum terjadi jika jumlah variabel di sebelah kiri tidak sama dengan jumlah elemen tuple di sebelah kanan, yang memicu `ValueError: too many values to unpack`.",
          example: {
            code: "point = (10, 20)\nx, y = point",
            output: "x bernilai 10 dan y bernilai 20.",
            note: "Tuple sangat cepat dan hemat memori dibanding List.",
          },
          instruction:
            "Terdapat sebuah tuple `coordinates` yang berisi dua buah nilai. Ekstrak isi tuple tersebut ke dalam dua variabel terpisah, yaitu `x` dan `y` menggunakan teknik unpacking.",
          starterCode: "# Ekstrak nilai dari tuple coordinates di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "x\\s*,\\s*y\\s*=\\s*coordinates",
              message:
                "Gunakan assignment ke banyak variabel sekaligus untuk membongkar isi tuple.",
            },
          ],
          solution: "x, y = coordinates",
          susunKode: {
            question:
              "Susun pembongkaran tuple coordinates ke variabel x dan y.",
            potongan: [
              "x, y = ",
              "coordinates",
            ],
            pengecoh: [
              "x + y = ",
              "coords_tuple",
            ],
            pemisah: "",
            explanation:
              "Unpacking tuple di Python menggunakan penetapan langsung `x, y = coordinates`. Pengecoh penjumlahan `x + y` keliru ditaruh di sini dan sering membingungkan pemula saat mengolah struktur data tuple pada kode program Python.",
          },
        },
        {
          kind: "step",
          id: "python-2-4",
          title: "Set: Nilai Unik & Operasi Himpunan",
          explanation:
            "Set adalah kumpulan data yang tidak berurut dan secara otomatis mengeliminasi elemen duplikat, ditulis dengan `{1, 2, 3}` atau `set(list)`. Set sangat ampuh untuk operasi himpunan matematika seperti irisan (`&`), gabungan (`|`), dan selisih (`-`). Karena menggunakan implementasi Hash Table di belakang layar, pencarian elemen `x in my_set` berjalan sangat cepat dalam waktu konstan $O(1)$. Jebakan utama pemula adalah mencoba mengambil elemen set memakai indeks kurung siku `my_set[0]`, yang akan memicu `TypeError: 'set' object is not subscriptable`.",
          example: {
            code: "angka = {1, 2, 2, 3}\nprint(angka)",
            output: "{1, 2, 3}",
            note: "Sangat ampuh untuk menghilangkan duplikat dari sebuah List: list(set(my_list)).",
          },
          instruction:
            "Kamu ingin membuang semua elemen yang duplikat di dalam variabel `my_list`. Konversikan variabel tersebut ke struktur himpunan dan simpan ke variabel `unique_items`.",
          starterCode: "# Simpan himpunan unik di sini\n",
          language: "text",
          tests: [
            {
              pattern: "unique_items\\s*=\\s*set\\(\\s*my_list\\s*\\)",
              message:
                "Gunakan fungsi konstruktor set() dan simpan di unique_items.",
            },
          ],
          solution: "unique_items = set(my_list)",
          susunKode: {
            question:
              "Susun pengubahan my_list menjadi set unik pada unique_items.",
            potongan: [
              "unique_items = ",
              "set(my_list)",
            ],
            pengecoh: [
              "unique_items := ",
              "unique(my_list)",
            ],
            pemisah: "",
            explanation:
              "Pengubahan list menjadi himpunan elemen unik memakai `set(my_list)`. Pengecoh `unique()` adalah fungsi fiktif yang sering keliru diperkirakan ada di Python bawaan oleh para pembelajar baru di platform BiLearn.",
          },
        },
        {
          kind: "step",
          id: "python-2-5",
          title: "List Comprehension",
          explanation:
            "Terkadang kamu perlu membuat list baru berdasarkan list yang sudah ada (misalnya menggandakan daftar harga). Daripada menulis perulangan `for` biasa yang memakan 3–4 baris, Python punya fitur ajaib bernama List Comprehension. Fitur ini memungkinkanmu melakukan perulangan sekaligus mencetak list baru hanya dalam 1 baris: `[hasil_operasi for item in list_awal]`. Pendekatan ini membuat kode terlihat lebih profesional dan dieksekusi lebih cepat. Jebakan: jangan paksakan logika yang terlalu rumit ke satu baris — justru membuat kode mustahil dibaca.",
          example: {
            code: "angka = [1, 2, 3]\ngenap = [x * 2 for x in angka]",
            output: "[2, 4, 6]",
            note: "Sangat populer di kalangan pengembang Python profesional.",
          },
          instruction:
            "Buatlah sebuah list baru bernama `squares` dari sebuah list `numbers` dengan memangkatkan dua (`** 2`) setiap elemennya. Selesaikan dalam satu baris ekspresi menggunakan List Comprehension.",
          starterCode: "# Tulis list comprehension di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "squares\\s*=\\s*\\[\\s*(\\w+\\s*\\*\\*\\s*2|\\w+\\s*\\*\\s*\\w+)\\s+for\\s+\\w+\\s+in\\s+numbers\\s*\\]",
              message:
                "Deklarasikan list comprehension untuk memangkatkan angka-angka dari numbers (misalnya x ** 2 atau x * x).",
            },
          ],
          solution: "squares = [x ** 2 for x in numbers]",
          susunKode: {
            question:
              "Susun list comprehension kuadrat angka dari numbers.",
            potongan: [
              "squares = ",
              "[x ** 2 for x in numbers]",
            ],
            pengecoh: [
              "squares := ",
              "[x ^ 2 for x in numbers]",
            ],
            pemisah: "",
            explanation:
              "Operator perpangkatan Python adalah `**`. Pengecoh `^` adalah operator XOR bitwise yang sering keliru dikira pangkat oleh pemula saat membuat ekspresi matematika list comprehension pada skrip data Python modern.",
          },
        },
        {
          kind: "step",
          id: "python-2-6",
          title: "Iterasi Gabungan dengan enumerate() dan zip()",
          explanation:
            "Saat melakukan perulangan pada list, fungsi `enumerate(list)` memberikan pasangan (indeks, elemen) secara bersamaan sehingga kamu tidak perlu membuat variabel counter manual secara terpisah. Sementara itu, fungsi `zip(list1, list2)` menggabungkan elemen-elemen dari dua atau lebih list secara sejajar menjadi pasangan tuple. Kedua fungsi ini adalah idiom standar Python untuk perulangan yang bersih dan efisien. Jebakan yang perlu diperhatikan adalah bahwa `zip()` akan berhenti sesuai dengan panjang list yang paling pendek jika ukuran kedua list tidak sama.",
          example: {
            code:
              'nama = ["A", "B"]\n' +
              "skor = [90, 80]\n" +
              "for n, s in zip(nama, skor):\n" +
              '    print(f"{n}: {s}")',
            output: "A: 90\nB: 80",
            note: "Menghindari perulangan manual berbasis indeks counter.",
          },
          instruction:
            "Gunakan fungsi `enumerate()` pada list `items` untuk mengiterasi indeks (`i`) dan elemennya (`item`) secara bersamaan, lalu cetak pasangan nilai tersebut (`print(i, item)`).",
          starterCode: "# Tulis enumerate di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "for\\s+\\w+\\s*,\\s*\\w+\\s+in\\s+enumerate\\(\\s*items\\s*\\)\\s*:",
              message: "Gunakan pola perulangan enumerate: for i, item in enumerate(items):",
            },
          ],
          solution: "for i, item in enumerate(items):\n    print(i, item)",
          susunKode: {
            question:
              "Susun perulangan enumerate pada items untuk mendapatkan indeks i dan item.",
            potongan: [
              "for i, item in ",
              "enumerate(items):\n    print(i, item)",
            ],
            pengecoh: [
              "foreach i, item in ",
              "with_index(items):\n    print(i, item)",
            ],
            pemisah: "",
            explanation:
              "Perulangan dengan indeks memakai `enumerate(items)`. Pengecoh `with_index()` adalah fungsi fiktif yang keliru digantikan dari bahasa lain dan sering menjebak dalam perulangan skrip Python modern saat ini secara berulang.",
          },
        },
        {
          kind: "step",
          id: "python-2-7",
          title: "Memilih Struktur Data yang Tepat",
          explanation:
            "Memilih struktur data yang tepat menentukan efisiensi dan kerapian kode aplikasi. Gunakan **List** untuk urutan data fleksibel yang bisa berubah, **Tuple** untuk kumpulan data tetap seperti koordinat, **Dictionary** untuk pencarian data berpasangan berbasis kunci unik, dan **Set** untuk pengujian keberadaan nilai unik tanpa duplikat. Keputusan yang salah — misalnya menggunakan List untuk pencarian jutaan record — akan membuat aplikasi melambat drastis karena pencarian list membutuhkan iterasi $O(n)$, sedangkan Dictionary/Set hanya butuh $O(1)$.",
          example: {
            code: "# dict: pencarian instan lewat kunci\nharga = {'kopi': 25000}\nprint(harga['kopi'])",
            output: "Optimasi algoritma dan efisiensi memori program.",
            note: "Memilih struktur data yang tepat mempermudah penulisan kode.",
          },
          instruction:
            "Kamu membutuhkan struktur data untuk memetakan ID karyawan agar pencarian berjalan instan dalam kompleksitas $O(1)$. Buatlah variabel bernama `struktur_pencarian` dan inisialisasikan sebagai dictionary kosong.",
          starterCode: "# Buat variabel struktur_pencarian dengan tipe dictionary\n",
          language: "text",
          tests: [
            {
              pattern: "struktur_pencarian\\s*=\\s*(\\{\\s*\\}|dict\\(\\s*\\))",
              message:
                "Gunakan kurung kurawal {} atau dict() untuk membuat dictionary kosong.",
            },
          ],
          solution: "struktur_pencarian = {}",
          susunKode: {
            question:
              "Susun inisialisasi dictionary kosong struktur_pencarian.",
            potongan: [
              "struktur_pencarian = ",
              "{}",
            ],
            pengecoh: [
              "struktur_pencarian := ",
              "HashMap()",
            ],
            pemisah: "",
            explanation:
              "Inisialisasi dictionary kosong menggunakan `{}`. Pengecoh `HashMap()` berasal dari Java yang keliru jika digunakan di skrip Python dan menggoda pemula yang memiliki latar belakang Java sebelumnya pada pemrograman komputer.",
          },
        },
        {
          kind: "quiz",
          id: "python-2-kuis",
          title: "Kuis: Struktur Data Python",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Struktur data Python mana yang bersifat **Immutable** (tidak dapat diubah/ditambah setelah dibuat)?",
              choices: ["List", "Tuple", "Dictionary", "Set"],
              answerIndex: 1,
              explanation:
                "Tuple adalah struktur data berurut yang bersifat immutable (elemennya tidak dapat diubah pasca instansiasi). Ini membuatnya lebih cepat dan hemat memori.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Manakah struktur data yang tepat jika kamu ingin menyimpan data yang TIDAK ADA DUPLIKAT?",
              choices: ["List", "Set", "Tuple", "Dictionary"],
              answerIndex: 1,
              explanation:
                "Set bekerja berdasarkan konsep himpunan dalam matematika sehingga otomatis mengeliminasi elemen ganda saat disimpan.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara mengambil elemen pada List dengan posisi terakhir menggunakan indeks?",
              choices: [
                "list[-1]",
                "list[last]",
                "list.get_last()",
                "list.end()",
              ],
              answerIndex: 0,
              explanation:
                "Di Python, kita dapat melakukan negative indexing di mana -1 merepresentasikan urutan terakhir pada List/String.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Jika kita memiliki `users = {'admin': 1}`, apa yang terjadi bila kita menjalankan `users['guest']` untuk mengakses data yang kuncinya belum ada?",
              choices: [
                "Python akan me-return None",
                "Python akan me-return False",
                "Python akan melemparkan KeyError",
                "Python akan otomatis membuat kunci 'guest'",
              ],
              answerIndex: 2,
              explanation:
                "Mengakses kunci yang tidak ada langsung dengan kurung siku `[]` akan memicu `KeyError`. Untuk menghindarinya, gunakan metode `.get()`.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apa sintaks yang benar untuk menggabungkan dua dictionary di Python (versi 3.9+)?",
              choices: [
                "dict1 + dict2",
                "dict1.concat(dict2)",
                "dict1 | dict2",
                "dict1.append(dict2)",
              ],
              answerIndex: 2,
              explanation:
                "Python 3.9+ memperkenalkan operator `|` (merge operator) yang sangat bersih dan rapi untuk menggabungkan dua dictionary.",
            },
          ],
        },
      ],
    },
    {
      slug: "fungsi-module",
      title: "Fungsi & Module",
      description: "Menyusun kode yang bisa dipakai ulang dan diuji.",
      topics: [
        "def, parameter, return, default & keyword argument",
        "*args & **kwargs",
        "Scope & variabel global (dan kenapa dihindari)",
        "Lambda & fungsi sebagai nilai",
        "Module & import, __name__ == '__main__'",
        "Standard library tour: math, random, datetime, collections",
        "Docstring & type hint dasar",
      ],
      items: [
        {
          kind: "materi",
          id: "python-3-m1",
          title: "Modularisasi Kode dengan Fungsi & Modul",
          body:
            "# Modularisasi Kode dengan Fungsi & Modul\n\n" +
            "Fungsi dan Modul adalah alat utama untuk menerapkan prinsip **DRY (Don't Repeat Yourself)** dalam pemrograman. Dengan membungkus kode ke dalam fungsi yang terisolasi, aplikasi menjadi mudah dibaca, dikembangkan, dan diuji secara independen.\n\n" +
            "## Model Mental Scope LEGB di Python\n\n" +
            "Saat Python mencari nilai sebuah variabel di dalam fungsi, Python menggunakan aturan penelusuran hierarki **LEGB**:\n" +
            "1. **L (Local)**: Variabel yang didaftarkan di dalam fungsi saat ini.\n" +
            "2. **E (Enclosing)**: Variabel pada fungsi pembungkus luar (jika ada nested function).\n" +
            "3. **G (Global)**: Variabel di tingkat teratas berkas script (`.py`).\n" +
            "4. **B (Built-in)**: Fungsi bawaan sistem Python seperti `len()`, `print()`, `range()`.\n\n" +
            "```text\n" +
            "+-------------------------------------------------------+\n" +
            "| Built-in (B): len, print, range                       |\n" +
            "|  +-------------------------------------------------+  |\n" +
            "|  | Global (G): Variabel di tingkat file script.py  |  |\n" +
            "|  |  +-------------------------------------------+  |  |\n" +
            "|  |  | Enclosing (E): Fungsi Pembungkus Luar |  |  |\n" +
            "|  |  |  +-------------------------------------+  |  |  |\n" +
            "|  |  |  | Local (L): Variabel di dalam fungsi |  |  |  |\n" +
            "|  |  |  +-------------------------------------+  |  |  |\n" +
            "|  |  +-------------------------------------------+  |  |\n" +
            "|  +-------------------------------------------------+  |\n" +
            "+-------------------------------------------------------+\n" +
            "```\n\n" +
            "## Penjaga Berkas Script: `if __name__ == '__main__':`\n\n" +
            "Setiap berkas Python memiliki variabel bawaan `__name__`:\n" +
            "- Jika file dijalankan **langsung**: `__name__` diisi string `'__main__'`. Program akan mengeksekusi blok di dalamnya.\n" +
            "- Jika file di-**import** sebagai modul oleh berkas lain: `__name__` diisi nama file itu sendiri, sehingga kode uji di dalam blok tidak akan ikut berjalan secara otomatis.\n\n" +
            "## Tour Pustaka Standar (Standard Library)\n\n" +
            "Python menyertakan *'batteries included'* — pustaka bawaan siap pakai tanpa perlu instalasi tambahan:\n" +
            "| Modul | Kegunaan Utama | Contoh Fungsi |\n" +
            "|---|---|---|\n" +
            "| **`datetime`** | Manipulasi Tanggal & Waktu | `datetime.now()`, `strftime()` |\n" +
            "| **`math`** | Perhitungan Matematika Lanjutan | `math.sqrt()`, `math.ceil()`, `math.pi` |\n" +
            "| **`random`** | Acak Angka & Elemen | `random.choice()`, `random.randint()` |\n" +
            "| **`collections`** | Struktur Data Lanjutan | `Counter()`, `defaultdict()` |\n\n" +
            "## Contoh Praktis `collections` & Fleksibilitas Argumen\n\n" +
            "Dua fitur pustaka standar yang sangat sering dipakai di proyek profesional:\n\n" +
            "```python\n" +
            "from collections import Counter, defaultdict\n\n" +
            "# 1. Counter: hitung frekuensi data tanpa loop manual\n" +
            "suara = [\"A\", \"B\", \"A\", \"A\", \"B\"]\n" +
            "hasil = Counter(suara)  # {'A': 3, 'B': 2}\n\n" +
            "# 2. *args & **kwargs: fungsi fleksibel serbaguna\n" +
            "def buat_log(pesan, *tags, **metadata):\n" +
            "    # tags ditampung sebagai tuple: ('auth', 'warn')\n" +
            "    # metadata ditampung sebagai dict: {'ip': '127.0.0.1', 'user': 'admin'}\n" +
            "    pass\n\n" +
            "# 3. Type Hint Modern (Python 3.10+): gunakan pipa '|' untuk None/Union\n" +
            "def ambil_profil(user_id: int) -> dict[str, str] | None:\n" +
            "    return None\n" +
            "```\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "- **Urutan Parameter Default Terbalik**: Parameter ber-default wajib diletakkan SETELAH parameter biasa. `def coba(a=1, b)` memicu `SyntaxError: non-default argument follows default argument`.\n" +
            "- **Mutable Default Argument**: Mendefinisikan fungsi dengan default list `def func(items=[]):` akan membagikan list yang SAMA di setiap pemanggilan fungsi! Gunakan `def func(items=None): if items is None: items = []`.\n" +
            "- **Mengubah Variabel Global (Global Pollution)**: Menggunakan kata kunci `global x` di dalam fungsi membuat state aplikasi sulit dilacak dan rentan terhadap bug. Kirimkan data melalui parameter dan kembalikan via `return`.\n" +
            "- **Lupa Statement Return**: Fungsi yang tidak menuliskan `return` secara eksplisit akan otomatis mengembalikan nilai `None`.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Penulisan fungsi modular dengan penamaan yang jelas dan dilengkapi **Type Hinting** (`a: int -> int`) adalah standar utama di industri modern agar kode mudah dibaca oleh anggota tim dan didukung auto-complete IDE.",
        },
        {
          kind: "step",
          id: "python-3-1",
          title: "Pendefinisian Fungsi def & Default Argument",
          explanation:
            "Fungsi di Python didefinisikan menggunakan kata kunci `def nama_fungsi(param=default):`. Kamu dapat menetapkan nilai default pada parameter agar argumen tersebut menjadi opsional saat dipanggil. Hasil akhir pemrosesan dikembalikan ke pemanggil fungsi menggunakan kata kunci `return`. Jebakan utama pemula adalah lupa bahwa fungsi tanpa kata kunci `return` akan mengembalikan nilai `None` secara implisit, yang sering memicu error ketika hasilnya diolah lebih lanjut.",
          example: {
            code:
              'def sapa(nama="User"):\n' +
              '    return f"Halo {nama}"\n\n' +
              "print(sapa())\n" +
              'print(sapa("Bimo"))',
            output: "Halo User\nHalo Bimo",
            note: "Parameter ber-default harus diletakkan SETELAH parameter biasa. `def sapa(nama=\"User\", umur)` langsung ditolak dengan SyntaxError: non-default argument follows default argument.",
          },
          instruction:
            "Buat fungsi bernama `hitung` yang menerima dua angka lalu mengembalikan hasil penjumlahannya. Angka kedua bersifat opsional: kalau pemanggil tidak mengisinya, nilainya dianggap 10. Beri nama parameternya `a` dan `b`.",
          starterCode: "# Definisikan fungsi hitung di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "def\\s+hitung\\(\\s*a(?:\\s*:\\s*\\w+)?\\s*,\\s*b(?:\\s*:\\s*\\w+)?\\s*=\\s*10\\s*\\)(?:\\s*->\\s*\\w+)?\\s*:\\s*\\n?[ \\t]*return\\s+(a\\s*\\+\\s*b|b\\s*\\+\\s*a)",
              message:
                "Belum cocok. Pastikan tiga hal: nama parameternya `a` dan `b`, parameter kedua punya nilai default (`b=10`), dan baris `return` menjumlahkan keduanya. Ingat titik dua di akhir baris `def` serta indentasi 4 spasi pada baris berikutnya.",
            },
          ],
          solution: "def hitung(a, b=10):\n    return a + b",
          susunKode: {
            question:
              "Susun fungsi hitung dengan nilai default b=10 yang mengembalikan a + b.",
            potongan: [
              "def hitung(a, b=10):\n",
              "    return a + b",
            ],
            pengecoh: [
              "function hitung(a, b=10) {\n",
              "    return a - b\n}",
            ],
            pemisah: "",
            explanation:
              "Pendefinisian fungsi diawali kata kunci `def` dan titik dua `:`. Pengecoh `function` adalah kata kunci JavaScript yang keliru dipasang di Python sehingga memicu SyntaxError saat skrip dijalankan oleh sistem BiLearn.",
          },
        },
        {
          kind: "step",
          id: "python-3-2",
          title: "Fleksibilitas Parameter: *args dan **kwargs",
          explanation:
            "Pernahkah kamu memperhatikan fungsi bawaan `print()` yang bisa menerima berapapun jumlah data? Bagaimana cara kerjanya? Jawabannya: `*args` dan `**kwargs`. Tanda bintang satu `*args` ibarat karung kosong yang menangkap semua nilai berlebih dan mengikatnya jadi Tuple. Sementara bintang dua `**kwargs` menampung argumen berpasangan (seperti `nama='Budi'`) dan menyimpannya sebagai Dictionary. Fitur ini sangat berguna ketika kamu merancang fungsi yang belum tahu pasti berapa banyak data yang akan dikirimkan pengguna.",
          example: {
            code:
              "def cetak_semua(*args, **kwargs):\n" +
              "    print(args)    # (1, 2)\n" +
              "    print(kwargs)  # {'nama': 'Budi'}\n" +
              "cetak_semua(1, 2, nama='Budi')",
            output: "(1, 2)\n{'nama': 'Budi'}",
            note: "Sangat umum ditemukan pada pembungkusan fungsi (decorator).",
          },
          instruction:
            "Definisikan fungsi bernama `process` yang mampu menerima sembarang argumen posisi (`*args`) dan argumen kata kunci (`**kwargs`) sekaligus. Di dalam tubuh fungsi, gunakan pernyataan penahan tempat `pass`.",
          starterCode: "# Tulis def process di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "def\\s+process\\(\\s*\\*args\\s*,\\s*\\*\\*kwargs\\s*\\)\\s*:",
              message: "Definisikan: def process(*args, **kwargs):",
            },
          ],
          solution: "def process(*args, **kwargs):\n    pass",
          susunKode: {
            question:
              "Susun fungsi process yang menerima *args dan **kwargs.",
            potongan: [
              "def process(*args, ",
              "**kwargs):\n    pass",
            ],
            pengecoh: [
              "def process(...args, ",
              "...kwargs):\n    pass",
            ],
            pemisah: "",
            explanation:
              "Argumen posisi dan kata kunci dinamis ditulis `*args, **kwargs`. Pengecoh `...args` adalah sintaks spread operator JavaScript yang keliru jika dipasang pada definisi fungsi skrip Python saat ini di lembar kerja BiLearn.",
          },
        },
        {
          kind: "step",
          id: "python-3-3",
          title: "Scope Variabel (Local vs Global)",
          explanation:
            "Cakupan variabel (scope) menentukan di mana sebuah variabel dapat diakses di dalam program. Variabel yang dibuat di dalam fungsi bersifat Lokal dan akan dihapus dari memori begitu eksekusi fungsi selesai. Sebaliknya, variabel di tingkat luar berstatus Global. Hindari menggunakan kata kunci `global` untuk mengubah variabel luar dari dalam fungsi, karena praktik ini merusak isolasi data dan membuat pencarian bug menjadi sangat sulit di aplikasi besar.",
          example: {
            code: "x = 10\ndef test():\n    x = 5 # Variabel lokal x yang berbeda dari global x",
            output: "Variabel lokal terisolasi dari lingkup luar.",
            note: "Operkan variabel via parameter fungsi daripada mengandalkan variabel global.",
          },
          instruction:
            'Hindari pencemaran state global! Buatlah sebuah fungsi bernama `set_status()` yang mendeklarasikan sebuah variabel LOKAL bernama `status` dan mengisinya dengan string "aktif".',
          starterCode: "# Buat fungsi set_status di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "def\\s+set_status\\(\\s*\\)\\s*:\\s*\\n?\\s*status\\s*=\\s*[\"']aktif[\"']",
              message:
                "Fungsi set_status() harus memiliki variabel lokal status bernilai 'aktif'.",
            },
          ],
          solution: "def set_status():\n    status = 'aktif'",
          susunKode: {
            question:
              "Susun fungsi set_status yang menetapkan variabel lokal status bernilai aktif.",
            potongan: [
              "def set_status():\n",
              "    status = 'aktif'",
            ],
            pengecoh: [
              "def update_status():\n",
              "    let status = 'nonaktif'",
            ],
            pemisah: "",
            explanation:
              "Penetapan variabel lokal di dalam fungsi tidak memerlukan kata kunci `let`. Pengecoh `let status` adalah jebakan sintaks yang keliru bagi pembelajar yang biasa memakai bahasa JavaScript sebelumnya pada proyek web digital.",
          },
        },
        {
          kind: "step",
          id: "python-3-4",
          title: "Lambda (Fungsi Anonim)",
          explanation:
            "Fungsi Lambda adalah fungsi anonim (tanpa nama) ringkas yang ditulis dalam satu baris ekspresi dengan sintaks `lambda param: ekspresi`. Lambda umumnya digunakan sebagai argumen sementara fungsi lain, seperti Kunci Pengurutan pada `sort(key=lambda x: x[1])` atau transformasi data pendek. Karena keterbatasan hanya mendukung 1 baris ekspresi, jangan paksakan logika kompleks ke dalam lambda — gunakan fungsi `def` biasa agar kode tetap mudah dibaca.",
          example: {
            code: 'users = [("Budi", 25), ("Asep", 20)]\nusers.sort(key=lambda x: x[1])',
            output: "Mengurutkan daftar user berdasarkan umur (elemen indeks ke-1).",
            note: "Lambda hanya bisa memuat 1 baris ekspresi.",
          },
          instruction:
            "Buatlah sebuah fungsi anonim (lambda) yang menerima parameter `x` dan mengembalikan nilai pangkat duanya. Simpan fungsi tersebut ke dalam variabel bernama `square`.",
          starterCode: "# Buat fungsi lambda di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "square\\s*=\\s*lambda\\s+\\w+\\s*:\\s*\\w+\\s*\\*\\*\\s*2",
              message: "Gunakan sintaks lambda untuk variabel square, misalnya: lambda x: x ** 2",
            },
          ],
          solution: "square = lambda x: x ** 2",
          susunKode: {
            question:
              "Susun fungsi anonim lambda untuk menghitung kuadrat x.",
            potongan: [
              "square = ",
              "lambda x: x ** 2",
            ],
            pengecoh: [
              "square := ",
              "fn(x) => x ** 2",
            ],
            pemisah: "",
            explanation:
              "Fungsi anonim satu baris dibuat dengan `lambda x: x ** 2`. Pengecoh `fn(x) =>` adalah sintaks arrow function yang keliru di Python dan sering menggoda pengguna pemula dari web development modern saat ini di platform.",
          },
        },
        {
          kind: "step",
          id: "python-3-5",
          title: "Penjaga Eksekusi Script: __name__ == '__main__'",
          explanation:
            "Pemeriksaan `if __name__ == '__main__':` adalah idiom wajib di Python untuk memisahkan kode utama yang dieksekusi dengan kode modul yang di-import. Saat berkas dijalankan langsung via terminal (`python app.py`), variabel `__name__` bernilai `'__main__'`. Namun jika berkas tersebut di-import oleh berkas lain, `__name__` diisi nama modulnya sehingga blok utama di dalamnya tidak akan terkesekusi tanpa sengaja saat di-import.",
          example: {
            code: 'def main():\n    print("Jalan")\n\nif __name__ == "__main__":\n    main()',
            output: "Jalan",
            note: "Pola standar di seluruh modul dan script Python.",
          },
          instruction:
            'Buat blok pengondisian penjaga `__name__` agar pemanggilan fungsi `main()` hanya dijalankan saat berkas ini dieksekusi langsung sebagai program utama via terminal, bukan saat diimpor oleh modul lain.',
          starterCode: "# Tulis if __name__ di sini\n",
          language: "text",
          tests: [
            {
              pattern: "if\\s+__name__\\s*==\\s*[\"']__main__[\"']\\s*:",
              message: 'Tuliskan: if __name__ == "__main__":',
            },
          ],
          solution: 'if __name__ == "__main__":\n    main()',
          susunKode: {
            question:
              "Susun pemeriksaan blok utama __name__ == '__main__' untuk memanggil main().",
            potongan: [
              "if __name__ == ",
              "\"__main__\":\n    main()",
            ],
            pengecoh: [
              "if __file__ == ",
              "\"__script__\":\n    main()",
            ],
            pemisah: "",
            explanation:
              "Pemeriksaan berkas utama menggunakan `__name__ == '__main__'`. Pengecoh `__file__` berisi jalur berkas yang keliru jika dibandingkan dengan string nama utama pada modul eksekusi Python proyek yang sedang berjalan saat ini.",
          },
        },
        {
          kind: "step",
          id: "python-3-6",
          title: "Standard Library (datetime & math)",
          explanation:
            "Python kaya akan pustaka bawaan (Standard Library) yang siap pakai tanpa perlu mengunduh apa pun. Modul `math` menyediakan operasi matematika tingkat lanjut seperti akar dan trigonometri, `datetime` menangani kalkulasi tanggal dan waktu, sementara `random` menghasilkan angka acak. Menguasai modul bawaan ini menghemat waktu pengembangan dan mencegah ketergantungan berlebih pada library pihak ketiga.",
          example: {
            code:
              'import math\nimport datetime\n\n' +
              "print(math.sqrt(16)) # 4.0\n" +
              "print(datetime.date.today())",
            output: "4.0\n2026-07-27",
            note: "Periksa pustaka standar Python sebelum memasang library pihak ketiga.",
          },
          instruction:
            "Kita akan mencetak tanggal hari ini. Lakukan impor hanya untuk kelas `datetime` dari dalam modul bawahan `datetime` (bukan seluruh modulnya).",
          starterCode: "# Impor datetime dari modul datetime di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "from\\s+datetime\\s+import\\s+datetime",
              message: "Gunakan format 'from module import object'.",
            },
          ],
          solution: "from datetime import datetime",
          susunKode: {
            question:
              "Susun pengimporan datetime dari modul datetime.",
            potongan: [
              "from datetime ",
              "import datetime",
            ],
            pengecoh: [
              "from date_time ",
              "import date_time",
            ],
            pemisah: "",
            explanation:
              "Pengimporan kelas spesifik menggunakan `from datetime import datetime`. Pengecoh `date_time` adalah kesalahan penulisan yang sering menjebak pengembang saat mengimpor modul bawaan di Python secara langsung.",
          },
        },
        {
          kind: "step",
          id: "python-3-7",
          title: "Type Hinting Dasar & Docstrings",
          explanation:
            "Type Hinting seperti `def hitung(a: int, b: int) -> int:` dan Docstring `\"\"\"...\"\"\"` digunakan untuk mendokumentasikan tipe data serta penjelasan fungsi di Python. Meskipun Python tidak membatasi tipe data secara ketat saat runtime (Dynamic Typing), Type Hinting sangat membantu editor IDE seperti VS Code untuk memberikan auto-complete yang akurat dan deteksi bug lebih awal via static analyzer (seperti mypy).",
          example: {
            code:
              'def tambah(a: int, b: int) -> int:\n' +
              '    """Menjumlahkan dua angka integer."""\n' +
              "    return a + b",
            output: "Petunjuk tipe data terlihat jelas di IDE.",
            note: "Type hint meningkatkan keamanan kode tanpa mengorbankan sifat dinamis Python.",
          },
          instruction:
            'Buat fungsi `greet` yang menerima satu parameter teks `name` bertipe `str` dan mengembalikan string sapaan bertipe `str` (seperti format `f"Halo {name}"`). Lengkapi deklarasi fungsi dengan anotasi type hint.',
          starterCode: "# Tulis fungsi dengan type hint di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "def\\s+greet\\(\\s*name\\s*:\\s*str\\s*\\)\\s*->\\s*str\\s*:",
              message: "Definisikan: def greet(name: str) -> str:",
            },
          ],
          solution: 'def greet(name: str) -> str:\n    return f"Halo {name}"',
          susunKode: {
            question:
              "Susun type hint pada fungsi greet dengan parameter string name dan return string.",
            potongan: [
              "def greet(name: str) ",
              "-> str:\n    return f\"Halo {name}\"",
            ],
            pengecoh: [
              "def greet(name = str) ",
              ": str:\n    return f\"Halo {name}\"",
            ],
            pemisah: "",
            explanation:
              "Type hint Python ditulis setelah nama parameter dengan titik dua `name: str` dan panah `-> str`. Pengecoh `str name` adalah sintaks Java yang keliru pada penulisan tipe data Python terkini dalam pembuatan fungsi modular.",
          },
        },
        {
          kind: "quiz",
          id: "python-3-kuis",
          title: "Kuis: Fungsi & Module Python",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Pemeriksaan kondisi apa yang digunakan di Python untuk memastikan kode tertentu HANYA dieksekusi jika file tersebut dijalankan langsung sebagai script utama?",
              choices: [
                "if __name__ == '__main__':",
                "if __script__ == 'run':",
                "if process.env == 'main':",
                "if is_main_file():",
              ],
              answerIndex: 0,
              explanation:
                "Variabel `__name__` bernilai `'__main__'` hanya saat berkas tersebut dieksekusi secara langsung oleh interpreter Python.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Jika fungsi tidak menuliskan statement `return`, apa nilai yang dikembalikan secara default oleh Python?",
              choices: ["0", "False", "None", "Error"],
              answerIndex: 2,
              explanation:
                "Secara default, fungsi yang tidak memanggil return akan mengembalikan None.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Apa tujuan utama menggunakan Type Hinting seperti `def sapa(nama: str) -> str:` di Python?",
              choices: [
                "Meningkatkan performa program menjadi 2x lipat",
                "Membuat dokumentasi yang dapat dibaca oleh IDE dan pengecek tipe (seperti mypy)",
                "Mencegah Python berjalan jika tipe data salah saat runtime",
                "Membuat variabel menjadi konstanta tak bisa diubah",
              ],
              answerIndex: 1,
              explanation:
                "Type Hinting di Python (secara default) tidak mengubah cara kode dieksekusi saat runtime. Fungsinya murni untuk membantu IDE memberi auto-complete dan static analysis.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Apa kegunaan dari sintaks `**kwargs` pada deklarasi parameter fungsi?",
              choices: [
                "Menangkap sisa argumen posisional (tanpa nama) menjadi Tuple",
                "Menangkap pasangan argumen bernama (keyword arguments) yang berlebih menjadi Dictionary",
                "Memaksa pengguna mengisi argumen",
                "Mengalikan variabel dengan dua",
              ],
              answerIndex: 1,
              explanation:
                "`**kwargs` digunakan untuk menangkap *keyword arguments* ekstra ke dalam bentuk dictionary, membuat fungsi sangat fleksibel menerima opsi konfigurasi.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Jika ada variabel `x = 5` di luar fungsi, lalu di dalam fungsi kita mendeklarasikan `x = 10`. Apa yang terjadi pada nilai `x` di luar fungsi?",
              choices: [
                "Berubah menjadi 10 karena tertimpa",
                "Tetap 5 karena variabel lokal di fungsi berbeda dari variabel global",
                "Terjadi error karena nama sama",
                "Berubah menjadi None",
              ],
              answerIndex: 1,
              explanation:
                "Di Python, variabel yang didefinisikan di dalam fungsi bersifat LOKAL dan terisolasi, sehingga tidak mengubah variabel di lingkup global kecuali dideklarasikan dengan `global x`.",
            },
          ],
        },
      ],
    },
    {
      slug: "file-error",
      title: "File & Error Handling",
      description:
        "Membaca file dunia nyata tanpa crash di baris ke-1000.",
      topics: [
        "open & with (context manager)",
        "Membaca/menulis teks & CSV (modul csv)",
        "JSON: load & dump",
        "Path dengan pathlib",
        "try/except/else/finally & jenis exception",
        "raise & custom exception",
        "Encoding: UTF-8 & jebakan karakter Indonesia",
      ],
      items: [
        {
          kind: "materi",
          id: "python-4-m1",
          title: "Pengolahan File & Robust Error Handling",
          body:
            "# Pengolahan File & Robust Error Handling\n\n" +
            "Aplikasi dunia nyata harus berinteraksi dengan sumber data luar — membaca dokumen CSV, mengurai data API JSON, dan menuliskan log. Aplikasi profesional harus tahan banting (*robust*) dan tidak boleh runtuh (*crash*) hanya karena ada satu baris data yang corrupt atau file tidak ditemukan.\n\n" +
            "## Context Manager (`with open`): Penutup File Otomatis\n\n" +
            "Saat aplikasi membuka file, sistem operasi memberikan handle berkas (*file descriptor*). Jika kamu lupa menutup file dengan `f.close()`, file akan terkunci dan memicu kebocoran memori (*memory leak*).\n\n" +
            "Fitur **Context Manager** (`with open(...) as f:`) menjamin bahwa berkas pasti ditutup secara otomatis saat keluar dari blok `with`, bahkan jika terjadi error di tengah-tengah eksekusi.\n\n" +
            "## Anatomi Penanganan Error: `try ... except ... else ... finally`\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------+\n" +
            "| try:                                                        |\n" +
            "|   Coba jalankan kode yang berisiko (misal: baca file/int)   |\n" +
            "+-------------------------------------------------------------+\n" +
            "        |                                        |\n" +
            "   (Jika Error)                           (Jika Sukses)\n" +
            "        v                                        v\n" +
            "+-------------------------------+   +-------------------------+\n" +
            "| except ValueError as e:       |   | else:                   |\n" +
            "|   Tangkap & tangani error     |   |   Jalan jika TANPA error|\n" +
            "+-------------------------------+   +-------------------------+\n" +
            "        |                                        |\n" +
            "        +-------------------+--------------------+\n" +
            "                            |\n" +
            "                            v\n" +
            "+-------------------------------------------------------------+\n" +
            "| finally:                                                    |\n" +
            "|   SELALU dijalankan di akhir (Pembersihan Resource/Koneksi) |\n" +
            "+-------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Format Berkas Standar di Python\n\n" +
            "| Format | Modul Bawaan | Fungsi Utama | Gunakan Saat |\n" +
            "|---|---|---|---|\n" +
            "| **Teks Polos** | Bawaan `open()` | `read()`, `write()`, `readline()` | Membaca file `.txt` atau log sederhana. |\n" +
            "| **CSV** | `import csv` | `csv.DictReader()`, `csv.DictWriter()` | Memproses baris tabel spreadsheet `.csv`. |\n" +
            "| **JSON** | `import json` | `json.loads()`, `json.dump()` (ke berkas) | Mengurai payload respons REST API & konfigurasi. |\n" +
            "| **Path OS** | `from pathlib import Path` | `Path(\"data\") / \"file.txt\"` | Penanganan path berkas lintas Windows/Mac/Linux. |\n\n" +
            "## Contoh Menulis Berkas & Custom Exception\n\n" +
            "Praktik menulis data terstruktur dan merancang exception kustom untuk logika bisnis:\n\n" +
            "```python\n" +
            "import csv, json\n" +
            "from pathlib import Path\n\n" +
            "# 1. Tulis CSV dengan DictWriter (wajib newline='' di Windows)\n" +
            "with open(\"output.csv\", \"w\", newline=\"\", encoding=\"utf-8\") as f:\n" +
            "    writer = csv.DictWriter(f, fieldnames=[\"nama\", \"skor\"])\n" +
            "    writer.writeheader()\n" +
            "    writer.writerow({\"nama\": \"Ani\", \"skor\": 100})\n\n" +
            "# 2. Tulis JSON terformat rapi (indentasi 2 spasi)\n" +
            "with open(\"app.json\", \"w\", encoding=\"utf-8\") as f:\n" +
            "    json.dump({\"status\": \"ok\", \"kode\": 200}, f, indent=2)\n\n" +
            "# 3. Custom Exception: warisi dari Exception standar\n" +
            "class SaldoKurangError(Exception):\n" +
            "    \"\"\"Dilempar saat saldo rekening tidak mencukupi.\"\"\"\n" +
            "    pass\n\n" +
            "def potong_saldo(saldo, biaya):\n" +
            "    if biaya > saldo:\n" +
            "        raise SaldoKurangError(\"Saldo tidak cukup!\")\n" +
            "```\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "- **Lupa `newline=''` saat Menulis CSV**: Pada Windows, membuka file mode `w` tanpa `newline=''` akan menghasilkan baris kosong ganda (blank lines) di antara tiap baris data CSV.\n" +
            "- **`except:` Polos (Bare Except)**: Menulis `except:` tanpa menentukan jenis error akan menangkap semua hal termasuk `KeyboardInterrupt` (Ctrl+C) dan `SystemExit`. Ini menyembunyikan bug asli dan membuat program tidak bisa dihentikan. Selalu tangkap error spesifik seperti `except (FileNotFoundError, ValueError):`.\n" +
            "- **Lupa Parameter `encoding='utf-8'`**: Sistem operasi Windows menggunakan default encoding CP1252. Membaca teks bertulisan bahasa Indonesia yang memuat simbol/emoji tanpa `encoding='utf-8'` akan memicu `UnicodeDecodeError`.\n" +
            "- **Mengabaikan Path Relatif**: Menulis path kaku seperti `C:\\Users\\Budi\\file.txt` membuat skrip gagal saat dijalankan di komputer rekan kerja atau server Linux. Gunakan `pathlib.Path`.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di dunia kerja Data Engineering (ETL Pipelines), penanganan error yang baik mencegah proses pencernaan data malam hari (*overnight batch processing*) berhenti di tengah jalan saat menemui baris data rusak dari juta rekaman transaksi.",
        },
        {
          kind: "step",
          id: "python-4-1",
          title: "Membaca File dengan Context Manager (with open)",
          explanation:
            "Saat programmu membuka file, sistem operasi akan 'mengunci' file tersebut. Jika lupa menutupnya, file bisa rusak (corrupt) atau terkunci. Python punya fitur brilian bernama Context Manager lewat blok `with open('data.txt') as f:`. Bayangkan ini seperti pintu otomatis: ia membukakan file, lalu otomatis menutupnya setelah blok kode selesai — bahkan jika terjadi error di tengah jalan! Jebakan pengguna Windows: selalu tambahkan `encoding='utf-8'` agar karakter khusus tidak berubah jadi simbol aneh.",
          example: {
            code:
              'with open("data.txt", "r", encoding="utf-8") as f:\n' +
              "    content = f.read()",
            output: "Isi berkas data.txt dibaca aman.",
            note: "Selalu tentukan encoding='utf-8' untuk mencegah korupsi karakter di Windows.",
          },
          instruction:
            'Buka berkas log bernama `"app.log"` dalam mode baca (`"r"`) dengan pengkodean karakter `"utf-8"` menggunakan context manager `with open` dan alias variabel `f`. Di dalam tubuh blok, cukup gunakan pernyataan `pass`.',
          starterCode: "# Tulis with open di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "with\\s+open\\(\\s*[\"']app\\.log[\"']\\s*,\\s*(?:mode\\s*=\\s*)?[\"']r[\"']\\s*,\\s*encoding\\s*=\\s*[\"']utf-8[\"']\\s*\\)\\s+as\\s+f\\s*:",
              message:
                'Gunakan: with open("app.log", "r", encoding="utf-8") as f:',
            },
          ],
          solution: 'with open("app.log", "r", encoding="utf-8") as f:\n    pass',
          susunKode: {
            question:
              "Susun pembacaan file app.log dengan encoding utf-8 menggunakan context manager with.",
            potongan: [
              "with open(\"app.log\", ",
              "\"r\", encoding=\"utf-8\") as f:\n    pass",
            ],
            pengecoh: [
              "with File.open(\"app.log\", ",
              "\"r\", charset=\"utf-8\") as f:\n    pass_block",
            ],
            pemisah: "",
            explanation:
              "Membuka berkas secara aman memakai `with open(...) as f:`. Pengecoh `File.open` adalah metode dari Ruby yang keliru digunakan di Python dan menjebak pemula yang sedang mempelajari I/O berkas lembar skrip Python.",
          },
        },
        {
          kind: "step",
          id: "python-4-2",
          title: "Membaca File CSV dengan csv.DictReader",
          explanation:
            "Modul `csv` menyediakan kelas `csv.DictReader(file)` untuk membaca tabel CSV dan mengonversi setiap barisnya menjadi objek Dictionary secara otomatis, di mana nama header kolom digunakan sebagai kunci dictionary. Pendekatan ini jauh lebih aman dibanding `csv.reader()` biasa berbasis indeks angka, karena kode kamu tidak akan patah jika urutan kolom pada file CSV berubah. Jebakan utama pemula adalah lupa bahwa seluruh nilai yang dibaca dari CSV ber-tipe string, sehingga angka harus dikonversi manual.",
          example: {
            code:
              'import csv\n' +
              'with open("users.csv", "r", encoding="utf-8") as f:\n' +
              "    reader = csv.DictReader(f)\n" +
              "    for row in reader:\n" +
              '        print(row["nama"])',
            output: "Budi\nAni",
            note: "DictReader otomatis menggunakan baris pertama CSV sebagai nama key.",
          },
          instruction:
            "Berkas CSV `data.csv` telah dibuka pada variabel `f`. Gunakan fitur `csv.DictReader()` untuk memproses file `f` tersebut, dan simpan objek pembacanya ke dalam variabel bernama `reader`.",
          starterCode: "# Buat DictReader di sini\n",
          language: "text",
          tests: [
            {
              pattern: "reader\\s*=\\s*csv\\.DictReader\\(\\s*f\\s*\\)",
              message:
                "Panggil csv.DictReader dengan mengoper f, lalu simpan ke variabel reader.",
            },
          ],
          solution: "reader = csv.DictReader(f)",
          susunKode: {
            question:
              "Susun pembentukan pembaca CSV DictReader dari berkas f.",
            potongan: [
              "reader = ",
              "csv.DictReader(f)",
            ],
            pengecoh: [
              "reader := ",
              "csv.create_reader(f)",
            ],
            pemisah: "",
            explanation:
              "Pembaca CSV berbasis dictionary adalah `csv.DictReader(f)`. Pengecoh `csv.create_reader()` adalah nama fungsi fiktif yang menggoda dan keliru digunakan saat membaca berkas CSV di Python secara otomatis pada program.",
          },
        },
        {
          kind: "step",
          id: "python-4-3",
          title: "Modul JSON (json.loads & json.dumps)",
          explanation:
            "Modul bawaan `json` menyediakan fungsi `json.loads(json_str)` untuk menguraikan teks string berformat JSON menjadi objek Dictionary/List Python (Load String). Sebaliknya, fungsi `json.dumps(dict)` mengonversi objek Python menjadi string teks JSON (Dump String). Jika kamu berinteraksi langsung dengan berkas `.json`, gunakan `json.load(file)` dan `json.dump(obj, file)`. Jebakan umum adalah tertukar antara metode dengan akhiran `s` (untuk string) dan tanpa `s` (untuk file handler).",
          example: {
            code:
              'import json\n' +
              'data = json.loads(\'{"name": "Budi"}\')\n' +
              'print(data["name"])',
            output: "Budi",
            note: "Gunakan json.load(f) dan json.dump(data, f) untuk interaksi berkas langsung.",
          },
          instruction:
            'Kamu menerima sebuah teks respons dari API berformat JSON dalam variabel `json_string`. Gunakan modul `json` untuk menguraikannya menjadi Dictionary (objek Python) dan simpan hasilnya di variabel bernama `data`.',
          starterCode: "# Uraikan json_string di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "data\\s*=\\s*json\\.loads\\(\\s*json_string\\s*\\)",
              message: "Gunakan json.loads() dan simpan hasilnya di variabel data.",
            },
          ],
          solution: "data = json.loads(json_string)",
          susunKode: {
            question:
              "Susun pemrosesan string JSON json_string menjadi objek Python dengan json.loads.",
            potongan: [
              "data = ",
              "json.loads(json_string)",
            ],
            pengecoh: [
              "data := ",
              "json.parse(json_string)",
            ],
            pemisah: "",
            explanation:
              "Penguraian string JSON di Python menggunakan `json.loads()`. Pengecoh `json.parse()` berasal dari JavaScript yang keliru dipakai dan sering membingungkan pengembang web frontend di awal belajar Python diBiLearn.",
          },
        },
        {
          kind: "step",
          id: "python-4-4",
          title: "Manajemen Path Modern dengan pathlib",
          explanation:
            "Modul `pathlib` menyediakan kelas `Path` yang merupakan pendekatan berorientasi objek modern untuk mengelola lokasi direktori dan berkas secara lintas platform (OS-agnostic). Menggunakan `Path(\"folder\") / \"file.txt\"` memanfaatkan operator `/` yang otomatis menyesuaikan backslash (`\\`) di Windows atau forward slash (`/`) di Linux/Mac. Pendekatan ini jauh lebih bersih dan minim error dibanding manipulasi string `os.path.join()` lama.",
          example: {
            code:
              'from pathlib import Path\n' +
              'file_path = Path("data") / "users.csv"\n' +
              "if file_path.exists(): print(file_path.read_text())",
            output: "Operator / otomatis menangani slash '/' atau '\\' di Windows/Linux.",
            note: "pathlib adalah standar penanganan path di Python modern.",
          },
          instruction:
            'Kita perlu mengakses berkas `file.txt` di dalam folder `data`. Gunakan class `Path` dari pathlib untuk membungkus path `"data/file.txt"` lalu simpan objeknya di variabel `file_path`.',
          starterCode: "# Inisialisasi objek Path di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "file_path\\s*=\\s*Path\\(\\s*[\"']data/file\\.txt[\"']\\s*\\)",
              message: 'Gunakan Path("data/file.txt") dan simpan ke file_path.',
            },
          ],
          solution: 'file_path = Path("data/file.txt")',
          susunKode: {
            question:
              "Susun pembentukan objek Path untuk berkas data/file.txt.",
            potongan: [
              "file_path = ",
              "Path(\"data/file.txt\")",
            ],
            pengecoh: [
              "file_path := ",
              "new Path(\"data/file.txt\")",
            ],
            pemisah: "",
            explanation:
              "Instansiasi objek Path dilakukan dengan `Path('data/file.txt')`. Pengecoh `new Path()` menggunakan kata kunci `new` yang keliru di Python karena Python tidak memiliki operator `new` bawaan dalam sistemnya saat ini.",
          },
        },
        {
          kind: "step",
          id: "python-4-5",
          title: "Penanganan Error dengan try/except/finally",
          explanation:
            "Program yang menerima masukan dari luar pasti suatu saat menemui data yang tidak sesuai harapan. Blok `try` menampung kode yang berisiko gagal, `except` menangkap jenis error tertentu agar program tidak berhenti mendadak, dan `finally` selalu dijalankan baik gagal maupun berhasil — biasanya untuk menutup file atau koneksi. Tangkap exception yang spesifik seperti `ValueError`, jangan `except:` polos, karena menangkap semuanya akan ikut menyembunyikan bug yang sebenarnya perlu kamu perbaiki. Menuliskan `as e` memberimu objek error-nya sehingga pesannya bisa dicatat ke log.",
          example: {
            code: "try:\n    hasil = 10 / 0\nexcept ZeroDivisionError as e:\n    print('Gagal:', e)\nfinally:\n    print('Selesai')",
            output: "Gagal: division by zero\nSelesai",
          },
          instruction:
            "Variabel `input_str` berisi teks dari pengguna yang belum tentu berupa angka. Tulis blok yang mencoba mengubahnya menjadi `int`, menangkap `ValueError` beserta objek error-nya, lalu mencetak pesan error itu.",
          starterCode:
            'input_str = "dua puluh"\n# Tulis blok try/except di bawah ini\n',
          language: "text",
          tests: [
            {
              pattern: "try\\s*:",
              message: "Mulai dengan blok try:",
            },
            {
              pattern: "int\\(\\s*input_str\\s*\\)",
              message: "Coba ubah input_str menjadi int di dalam try.",
            },
            {
              pattern: "except\\s+ValueError\\s+as\\s+\\w+\\s*:",
              message: "Tangkap ValueError beserta objek error-nya (as e).",
            },
            {
              pattern: "print\\(",
              message: "Cetak pesan error di dalam blok except.",
            },
          ],
          solution:
            'input_str = "dua puluh"\ntry:\n    angka = int(input_str)\nexcept ValueError as e:\n    print(\'Bukan angka:\', e)',
          susunKode: {
            question:
              "Susun penanganan exception ValueError saat konversi string input_str.",
            potongan: [
              "input_str = \"dua puluh\"\ntry:\n ",
              "angka = int(input_str)\nexcept ValueError as e:\n    print('Bukan angka:', e)",
            ],
            pengecoh: [
              "input_str = \"dua puluh\"\nwhile True:\n ",
              "angka = parse_int(input_str)\ncatch ValueError as e:\n    print('Bukan angka:', e)",
            ],
            pemisah: "",
            explanation:
              "Penangkapan exception di Python memakai `except ValueError as e:`. Pengecoh `catch` adalah kata kunci dari bahasa lain yang keliru di Python dan menjebak pemula dalam penanganan eksepsi program di BiLearn secara mendasar.",
          },
        },
        {
          kind: "step",
          id: "python-4-6",
          title: "Melempar Exception (raise)",
          explanation:
            "Selain menangkap error, kamu juga bisa sengaja melempar error menggunakan kata kunci `raise ValueError(\"pesan\")` ketika terjadi pelanggaran aturan bisnis atau masukan data yang invalid. Melempar exception adalah cara standar untuk menghentikan alur program abnormal dan memberi tahu pemanggil fungsi bahwa terjadi masalah. Kamu juga bisa membuat kelas Exception kustom sendiri dengan membuat subclass turunan dari kelas bawaan `Exception`.",
          example: {
            code:
              "def set_age(age):\n" +
              "    if age < 0:\n" +
              '        raise ValueError("Umur tidak boleh negatif")\n' +
              "    return age",
            output: "Exception ValueError dilempar jika umur < 0.",
            note: "Dapat membuat custom Exception class turunan dari Exception.",
          },
          instruction:
            'Programmu mengecek umur pelanggan. Jika nilai variabel umur tidak masuk akal, tolak eksekusi dengan cara melempar (raise) eksepsi `ValueError` dengan pesan spesifik `"Invalid age"`.',
          starterCode: "# Lempar eksepsi ValueError di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "raise\\s+ValueError\\(\\s*[\"']Invalid age[\"']\\s*\\)",
              message:
                'Gunakan kata kunci raise diikuti dengan ValueError("Invalid age").',
            },
          ],
          solution: 'raise ValueError("Invalid age")',
          susunKode: {
            question:
              "Susun pelemparan exception ValueError dengan pesan Invalid age.",
            potongan: [
              "raise ",
              "ValueError(\"Invalid age\")",
            ],
            pengecoh: [
              "throw ",
              "Exception(\"Age error\")",
            ],
            pemisah: "",
            explanation:
              "Pelemparan eksepsi di Python menggunakan kata kunci `raise`. Pengecoh `throw` adalah kata kunci dari Java/JS yang keliru dipakai dan sering membingungkan pembelajar baru di Python modern saat membuat fungsi penanganan error.",
          },
        },
        {
          kind: "step",
          id: "python-4-7",
          title: "Jebakan File Encoding UTF-8",
          explanation:
            "Pengkodean Karakter (Character Encoding) menterjemahkan bit biner komputer menjadi huruf teks. Sistem operasi Windows sering menggunakan default encoding lama seperti CP1252 yang akan merusak tulisan ber-karakter bahasa Indonesia, aksen, atau emoji. Karena itu, selalu cantumkan argumen eksplisit `encoding='utf-8'` saat memanggil fungsi `open()` baik mode baca maupun tulis agar data tersimpan sempurna di semua sistem operasi.",
          example: {
            code:
              'with open("file.txt", "w", encoding="utf-8") as f:\n    f.write("Kopi ☕")',
            output: "Karakter emoji dan simbol internasional tersimpan sempurna.",
            note: "Default encoding di Windows adalah CP1252 yang sering merusak teks.",
          },
          instruction:
            "Kita butuh menulis teks Bahasa Indonesia beserta emoji ke file `pesan.txt`. Gunakan `with open()` dalam mode tulis ('w') dan wajib tentukan parameter `encoding` agar tidak rusak di Windows.",
          starterCode:
            "# Buka pesan.txt dengan mode tulis dan encoding yang aman\n",
          language: "text",
          tests: [
            {
              pattern:
                "with\\s+open\\(\\s*['\"]pesan\\.txt['\"]\\s*,\\s*(?:mode\\s*=\\s*)?['\"]w['\"]\\s*,\\s*encoding\\s*=\\s*['\"]utf-8['\"]\\s*\\)\\s+as\\s+",
              message:
                "Gunakan with open('pesan.txt', 'w', encoding='utf-8') as f:",
            },
          ],
          solution:
            "with open('pesan.txt', 'w', encoding='utf-8') as f:\n    pass",
          susunKode: {
            question:
              "Susun penulisan berkas pesan.txt dalam mode write dengan encoding utf-8.",
            potongan: [
              "with open('pesan.txt', 'w', ",
              "encoding='utf-8') as f:\n    pass",
            ],
            pengecoh: [
              "with File.create('pesan.txt', 'w', ",
              "charset='utf-8') as f:\n    pass_block",
            ],
            pemisah: "",
            explanation:
              "Menulis berkas baru dilakukan dengan `open('pesan.txt', 'w', encoding='utf-8')`. Pengecoh `File.create` adalah metode fiktif yang keliru dan sering menjebak pemula yang mengira ada API tersebut di Python saat ini.",
          },
        },
        {
          kind: "quiz",
          id: "python-4-kuis",
          title: "Kuis: File & Error Handling",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Mengapa sangat direkomendasikan membuka file menggunakan perintah `with open(...) as f:` di Python?",
              choices: [
                "Karena berkas otomatis ditutup (closed) secara aman setelah selesai eksekusi, bahkan jika terjadi error",
                "Karena file otomatis ter-kompresi menjadi ZIP",
                "Karena dengan 'with' file tidak memakan memori",
                "Karena 'with' menghapus file otomatis",
              ],
              answerIndex: 0,
              explanation:
                "Context manager `with` menjamin pembersihan resource (penutupan file) dilakukan otomatis saat blok selesai.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Apa fungsi dari blok `finally` di dalam sebuah penanganan exception try/except?",
              choices: [
                "Dijalankan hanya jika exception terjadi",
                "Menggantikan blok try jika gagal",
                "Selalu dijalankan di akhir, tidak peduli error terjadi atau tidak",
                "Menangani jenis error baru",
              ],
              answerIndex: 2,
              explanation:
                "Blok finally selalu dijalankan sebelum keluar dari struktur try, sering digunakan untuk pembersihan sumber daya (seperti menutup koneksi database).",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Mengapa disarankan menspesifikasikan jenis Exception spesifik (misal `except ValueError:`) daripada hanya menggunakan `except:` kosong?",
              choices: [
                "Except spesifik menghemat RAM komputer",
                "Except kosong (bare except) akan menangkap semua error termasuk SystemExit atau KeyboardInterrupt, menyembunyikan bug yang tidak terduga",
                "Python tidak mendukung bare except mulai versi 3",
                "Agar sintaks kode lebih panjang",
              ],
              answerIndex: 1,
              explanation:
                "Menangkap semua error dengan except: sangat berbahaya karena bisa membungkam indikasi bug sistematis atau upaya penghentian program dari user (Ctrl+C).",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara paling tepat menguraikan string teks berformat JSON ke dalam dictionary (objek Python)?",
              choices: [
                "json.parse(teks)",
                "json.load(teks)",
                "json.loads(teks)",
                "json.dump(teks)",
              ],
              answerIndex: 2,
              explanation:
                "Metode `json.loads()` singkatan dari 'load string', khusus mengubah string JSON menjadi dictionary, sedangkan `json.load()` membaca dari file handler.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Di mana tempat yang paling benar meletakkan argumen penentu format karakter (`encoding='utf-8'`) saat membaca file teks di Python?",
              choices: [
                "Di dalam method .read()",
                "Di dalam dekorator fungsi",
                "Di dalam argumen fungsi open()",
                "Pada setting sistem operasi",
              ],
              answerIndex: 2,
              explanation:
                "Parameter `encoding='utf-8'` disematkan saat memanggil `open(file, mode, encoding)` agar Python mengetahui sejak awal bagaimana menterjemahkan bit di file teks tersebut.",
            },
          ],
        },
      ],
    },
    {
      slug: "oop-python",
      title: "OOP Python",
      description:
        "Class secukupnya — untuk membaca library dan menstrukturkan program sedang.",
      topics: [
        "class, __init__, self, method",
        "Attribute instance vs class",
        "Inheritance & super()",
        "Dunder method: __str__, __repr__, __eq__",
        "dataclass: class data tanpa boilerplate",
        "Kapan OOP & kapan cukup fungsi",
      ],
      items: [
        {
          kind: "materi",
          id: "python-5-m1",
          title: "Pemrograman Berbasis Objek (OOP) & Dataclasses",
          body:
            "# Pemrograman Berbasis Objek (OOP) & Dataclasses\n\n" +
            "Pemrograman Berbasis Objek (OOP - Object-Oriented Programming) di Python membantu menggabungkan data (*atribut*) dan perilaku (*method*) ke dalam satu wadah yang disebut **Class**. Namun di Python, kamu tidak dipaksa memakai Class untuk segala hal — pakailah Class jika ada kebutuhan menyimpan state internal secara berkelanjutan.\n\n" +
            "## Anatomi Class di Python\n\n" +
            "```text\n" +
            "class User:                        <-- Blueprint Kelas\n" +
            "    species = \"Homo Sapiens\"        <-- Atribut Kelas (Berbagi untuk semua objek)\n" +
            "\n" +
            "    def __init__(self, name):      <-- Constructor (Metode Inisialisasi)\n" +
            "        self.name = name           <-- Atribut Instansi (Unik per objek)\n" +
            "\n" +
            "    def sapa(self):                <-- Method (Perilaku Objek)\n" +
            "        return f\"Halo {self.name}\"\n" +
            "```\n\n" +
            "## Pewarisan (Inheritance) & Pemanggilan `super()`\n\n" +
            "Kelas anak dapat mewarisi atribut dan metode kelas induk, lalu menambahkan fungsionalitas baru dengan memanggil `super().__init__()`:\n\n" +
            "```python\n" +
            "class Karyawan:\n" +
            "    def __init__(self, nama: str, gaji: int):\n" +
            "        self.nama = nama\n" +
            "        self.gaji = gaji\n\n" +
            "class Manajer(Karyawan):\n" +
            "    def __init__(self, nama: str, gaji: int, departemen: str):\n" +
            "        super().__init__(nama, gaji)  # Inisialisasi atribut kelas induk\n" +
            "        self.departemen = departemen\n" +
            "```\n\n" +
            "## Parameter `self` dan Metode Khusus (Dunder Methods)\n\n" +
            "Parameter `self` merujuk pada instansi objek spesifik yang sedang dipanggil di memori.\n\n" +
            "Python memiliki metode khusus dengan awalan dan akhiran dua garis bawah (`__dunder__`):\n" +
            "| Method Dunder | Kegunaan Utama | Contoh Hasil |\n" +
            "|---|---|---|\n" +
            "| **`__init__(self, ...)`** | Constructor untuk inisialisasi atribut saat objek dibuat | Dipanggil otomatis `User('Ani')` |\n" +
            "| **`__str__(self)`** | Representasi teks ramah pengguna untuk `print()` dan UI | `print(u)` -> `\"Pengguna: Ani\"` |\n" +
            "| **`__repr__(self)`** | Representasi formal bagi developer / debugger | `repr(u)` -> `\"User(name='Ani')\"` |\n" +
            "| **`__eq__(self, other)`** | Aturan pembandingan kesamaan nilai objek (`==`) | Membandingkan isi field, bukan ID memori |\n\n" +
            "## Menghapus Boilerplate dengan `@dataclass` (Python 3.7+)\n\n" +
            "Untuk membuat class penampung data tanpa perlu menulis `__init__`, `__repr__`, dan `__eq__` secara manual:\n" +
            "```python\n" +
            "from dataclasses import dataclass\n\n" +
            "@dataclass\n" +
            "class Produk:\n" +
            "    nama: str\n" +
            "    harga: float\n" +
            "    stok: int = 0\n" +
            "```\n" +
            "Dekorator `@dataclass` otomatis menghasilkan `__init__`, `__repr__`, dan `__eq__` secara bersih di belakang layar.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "- **Tertukar antara Atribut Kelas vs Instansi**: Mendefinisikan list mutable sebagai atribut kelas (`class Keranjang: items = []`) akan membuat SEMUA objek pelanggan berbagi keranjang belanja yang sama! Selalu inisialisasi list di dalam `__init__` via `self.items = []`.\n" +
            "- **Lupa Memanggil `super().__init__()`**: Di dalam class turunan, lupa memanggil constructor induk membuat atribut yang dimiliki parent tidak terinisialisasi dan memicu `AttributeError` saat diakses.\n" +
            "- **Over-Engineering OOP**: Membungkus fungsi murni yang tidak memiliki state ke dalam class statis. Di Python, cukup gunakan fungsi `def` sederhana.\n" +
            "- **Lupa Parameter `self`**: Mendefinisikan method tanpa parameter pertama `self` akan memicu `TypeError: method takes 0 positional arguments but 1 was given` saat dipanggil dari instance.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Memahami arsitektur OOP sangat krusial saat membaca pustaka populer seperti **FastAPI**, **Django ORM**, atau **scikit-learn** di mana model, view, dan estimator dirancang menggunakan hirarki class.",
        },
        {
          kind: "step",
          id: "python-5-1",
          title: "Kelas, __init__, dan self",
          explanation:
            "Class didefinisikan dengan kata kunci `class NamaKelas:`. Method khusus `__init__(self, ...)` bekerja sebagai constructor yang dipanggil otomatis saat objek diinstansiasi untuk menginisialisasi atribut awal. Parameter `self` wajib dituliskan sebagai parameter pertama pada setiap method instance untuk merujuk pada objek itu sendiri di memori. Lupa menyertakan `self` pada definisi method akan membuat Python melempar `TypeError` saat method tersebut dipanggil.",
          example: {
            code:
              "class User:\n" +
              "    def __init__(self, name):\n" +
              "        self.name = name\n" +
              "user = User('Budi')\n" +
              "print(user.name)\n" +
              "print(type(user))",
            output: "Budi\n<class '__main__.User'>",
            note: "Perhatikan `self.name = name`: sisi kiri adalah atribut yang menempel pada objek, sisi kanan adalah parameter yang cuma hidup selama __init__ berjalan. Menulis `name = name` saja membuat atributnya tidak pernah tersimpan.",
          },
          instruction:
            "Kamu sedang menulis class `Book`. Tambahkan constructor-nya: method khusus yang otomatis dijalankan saat objek dibuat, menerima satu data judul bernama `title`, lalu menyimpannya sebagai atribut objek dengan nama yang sama. Jangan lupa parameter pertama yang mewakili objek itu sendiri.",
          starterCode: "# Tulis __init__ di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "def\\s+__init__\\(\\s*self\\s*,\\s*title\\s*\\)\\s*:\\s*\\n?\\s*self\\.title\\s*=\\s*title",
              message:
                "Belum cocok. Constructor di Python bernama `__init__` (dua garis bawah di depan dan belakang), parameter pertamanya `self`, parameter keduanya `title`, dan isinya menyimpan nilai itu ke `self.title`.",
            },
          ],
          solution: "def __init__(self, title):\n    self.title = title",
          susunKode: {
            question:
              "Susun konstruktor __init__ untuk menginisialisasi atribut self.title.",
            potongan: [
              "def __init__(self, title):\n",
              "    self.title = title",
            ],
            pengecoh: [
              "def constructor(self, title):\n",
              "    this.title = title",
            ],
            pemisah: "",
            explanation:
              "Metode konstruktor kelas Python dinamakan `__init__`. Pengecoh `constructor` berasal dari JavaScript yang keliru dipakai di OOP Python dan sering menggoda pengembang berlatar JS sebelumnya pada pemrograman skrip.",
          },
        },
        {
          kind: "step",
          id: "python-5-2",
          title: "Atribut Instansi vs Atribut Kelas",
          explanation:
            "Di Python, Atribut Instansi (`self.nama`) bersifat unik untuk tiap objek dan didaftarkan di dalam constructor `__init__`. Sebaliknya, Atribut Kelas dideklarasikan langsung di badan kelas di luar method, dan nilainya dibagikan bersama oleh seluruh instansi objek. Mengubah nilai atribut kelas secara langsung (`User.species = 'Alien'`) akan memengaruhi nilai spesies di seluruh objek turunan, sedangkan mengubah `self.species` hanya memengaruhi objek itu sendiri.",
          example: {
            code:
              "class User:\n" +
              "    species = 'Homo Sapiens' # Atribut Kelas\n" +
              "    def __init__(self, name):\n" +
              "        self.name = name    # Atribut Instansi",
            output: "Atribut species bernilai sama bagi seluruh objek User.",
            note: "Perubahan atribut kelas akan mempengaruhi seluruh instansi objek.",
          },
          instruction:
            "Kita membuat kelas User dan ingin mendefinisikan spesies semua pengguna. Deklarasikan atribut kelas bernama `species` dan beri nilai string `'Human'` di dalam definisi kelas.",
          starterCode: "# Deklarasikan atribut kelas di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "species\\s*=\\s*['\"]Human['\"]",
                        "message": "Atribut KELAS ditulis langsung di dalam badan class, sejajar dengan definisi method dan TANPA `self`. Nilainya dibagikan semua instance — beda dari atribut instance (`self.nama`) yang dibuat di dalam `__init__` dan berbeda untuk setiap objek. Jebakan besarnya: atribut kelas bertipe list atau dict akan dibagi bersama, sehingga `append` dari satu objek ikut terlihat di semua objek lain."
                      }
                    ],
          solution: "species = 'Human'",
          susunKode: {
            question:
              "Susun atribut kelas species berisikan nilai string Human.",
            potongan: [
              "species = ",
              "'Human'",
            ],
            pengecoh: [
              "species == ",
              "'Person'",
            ],
            pemisah: "",
            explanation:
              "Atribut kelas di Python dideklarasikan langsung di dalam badan kelas tanpa kata kunci `var` atau `static`. Pengecoh operator pembanding `==` adalah sintaks keliru yang menjebak pengembang Java atau C++ di Python saat ini.",
          },
        },
        {
          kind: "step",
          id: "python-5-3",
          title: "Pewarisan (Inheritance) & super()",
          explanation:
            "Pewarisan (Inheritance) memungkinkan kelas anak (*subclass*) mengambil atribut dan method dari kelas induk (*parent class*) dengan sintaks `class Child(Parent):`. Fungsi bawaan `super()` digunakan di dalam constructor kelas anak untuk memanggil constructor kelas induk `super().__init__(...)`. Teknik ini mencegah duplikasi kode inisialisasi dan memastikan bahwa logika dasar kelas induk tetap tereksekusi sempurna.",
          example: {
            code:
              "class Admin(User):\n" +
              "    def __init__(self, name, role):\n" +
              "        super().__init__(name)\n" +
              "        self.role = role",
            output: "Kelas Admin mewarisi nama dari kelas User.",
            note: "super() memanggil method dari kelas induk.",
          },
          instruction:
            "Kamu sedang membuat kelas Admin turunan dari kelas User. Panggil method constructor dari kelas induk (parent) menggunakan fungsi bawaan Python dan oper variabel `name` ke dalamnya.",
          starterCode: "# Panggil constructor parent class di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "super\\(\\s*\\)\\.__init__\\(",
                        "message": "Constructor kelas induk dipanggil lewat `super().__init__(...)`. Tanpa pemanggilan ini, atribut yang seharusnya disiapkan induk tidak pernah ada, dan pemakaiannya nanti memicu `AttributeError` yang jauh dari sumber masalahnya."
                      },
                      {
                        "pattern": "__init__\\(\\s*name\\s*\\)",
                        "message": "Teruskan argumen yang dibutuhkan induk. Letakkan pemanggilan ini di BARIS PERTAMA `__init__` anak, sebelum atribut tambahan milik anak diisi."
                      }
                    ],
          solution: "super().__init__(name)",
          susunKode: {
            question:
              "Susun pemanggilan konstruktor kelas induk dengan parameter name.",
            potongan: [
              "super().__init__(",
              "name)",
            ],
            pengecoh: [
              "parent.__init__(",
              "name_arg)",
            ],
            pemisah: "",
            explanation:
              "Pemanggilan metode kelas induk menggunakan `super().__init__(name)`. Pengecoh `parent` adalah kata kunci fiktif yang keliru dan sering membingungkan pemula saat belajar pewarisan OOP di Python secara bertahap dan terstruktur.",
          },
        },
        {
          kind: "step",
          id: "python-5-4",
          title: "Dunder Methods (__str__ & __repr__)",
          explanation:
            "Dunder Methods (Double Underscore Methods) adalah metode khusus Python yang mengontrol perilaku bawaan objek. Method `__str__(self)` mengembalikan string representasi yang ramah pengguna saat objek dicetak dengan `print(obj)`. Sementara itu, `__repr__(self)` memberikan teks spesifik bagi pengembang saat debugging di konsol REPL. Mendefinisikan method dunder ini membuat objek kustom kamu lebih mudah diuji dan nyaman dibaca saat logging.",
          example: {
            code:
              "class Book:\n" +
              "    def __init__(self, title):\n" +
              "        self.title = title\n" +
              "    def __str__(self):\n" +
              '        return f"Buku: {self.title}"',
            output:
              "book = Book('Python 101')\n" +
              "print(book)\n" +
              "→ Buku: Python 101\n\n" +
              "book        # di REPL, tanpa __repr__\n" +
              "→ <__main__.Book object at 0x7f3c1a2b40>",
            note: "Baris terakhir itu penyebab kebingungan yang sering terjadi: `print(obj)` sudah rapi, tapi menampilkan objek di dalam list (`print([book])`) tetap memunculkan alamat memori — karena list memakai __repr__, bukan __str__.",
          },
          instruction:
            "Class `Pengguna` menyimpan nama pemakai di atribut `self.name`, dan saat ini `print(user)` mencetak alamat memori. Tambahkan method dunder yang dipakai `print()` untuk mewakili objek sebagai teks, dan kembalikan nilai atribut `name` apa adanya.",
          starterCode: "# Tulis __str__ di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "def\\s+__str__\\(\\s*self\\s*\\)\\s*:\\s*\\n?\\s*return\\s+self\\.name",
              message:
                "Belum cocok. Method yang dipakai `print()` bernama `__str__` (dua garis bawah di kedua sisi), parameternya hanya `self`, dan isinya `return self.name`. Mengembalikan `name` saja (tanpa `self.`) memicu NameError.",
            },
          ],
          solution: "def __str__(self):\n    return self.name",
          susunKode: {
            question:
              "Susun metode __str__ untuk mengembalikan nama objek self.name.",
            potongan: [
              "def __str__(self):\n",
              "    return self.name",
            ],
            pengecoh: [
              "def toString(self):\n",
              "    return this.name",
            ],
            pemisah: "",
            explanation:
              "Metode representasi string objek menggunakan dunder method `__str__`. Pengecoh `toString` dari Java/JS adalah kekeliruan yang menggoda dan sering memicu AttributeError pada objek Python saat dipanggil dalam cetakan.",
          },
        },
        {
          kind: "step",
          id: "python-5-5",
          title: "Data Class (@dataclass)",
          explanation:
            "Class yang tugasnya sekadar menampung data biasanya butuh `__init__` panjang berisi penugasan berulang. Dekorator `@dataclass` dari modul `dataclasses` membuat Python menuliskannya untukmu: cukup deklarasikan nama field beserta tipenya, dan `__init__`, `__repr__`, serta perbandingan antar objek dibuat otomatis. Hasilnya kode jadi jauh lebih pendek dan bebas dari salah ketik saat menyalin parameter. Pakai dataclass untuk objek data seperti Produk atau Transaksi; class biasa tetap lebih tepat kalau perilakunya rumit dan bukan sekadar menyimpan nilai.",
          example: {
            code:
              "from dataclasses import dataclass\n\n@dataclass\nclass Buku:\n    judul: str\n    harga: int\n\nprint(Buku('Atomic Habits', 95000))",
            output: "Buku(judul='Atomic Habits', harga=95000)",
          },
          instruction:
            "Buat class penampung data `Product` dengan dua field: `name` bertipe `str` dan `price` bertipe `float`. Pakai dekorator dari modul `dataclasses` supaya kamu tidak perlu menulis `__init__` sendiri.",
          starterCode:
            "from dataclasses import dataclass\n\n# Tulis class Product di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "@dataclass",
              message: "Pasang dekorator @dataclass tepat di atas class.",
            },
            {
              pattern: "class\\s+Product\\s*:",
              message: "Buat class Product.",
            },
            {
              pattern: "name\\s*:\\s*str",
              message: "Field name bertipe str.",
            },
            {
              pattern: "price\\s*:\\s*float",
              message: "Field price bertipe float.",
            },
          ],
          solution:
            "from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float",
          susunKode: {
            question:
              "Susun dekorator @dataclass pada kelas Product dengan name: str dan price: float.",
            potongan: [
              "from dataclasses import dataclass\n\n@dataclass\nclass Product:\n",
              "    name: str\n    price: float",
            ],
            pengecoh: [
              "from dataclasses import dataclass\n\n@struct\nclass Product:\n",
              "    str name\n    float price",
            ],
            pemisah: "",
            explanation:
              "Dekorator pembuatan kelas data otomatis adalah `@dataclass`. Pengecoh `@struct` adalah istilah dari bahasa lain yang keliru di Python dan sering menjebak pembelajar baru kelas data di lembar kerja BiLearn saat ini.",
          },
        },
        {
          kind: "step",
          id: "python-5-6",
          title: "Kapan OOP & Kapan Cukup Fungsi",
          explanation:
            "Python adalah bahasa berparadigma ganda (*multiparadigm*) yang tidak memaksamu menggunakan OOP untuk semua hal. Jika tugas kamu murni berupa fungsi transformasi data tanpa perlu menyimpan state (seperti fungsi perhitungan diskon), gunakan Fungsi biasa `def`. Buatlah Class jika kamu perlu membungkus state yang berubah-ubah secara persisten beserta method yang mengelolanya. Menghindari Class yang tidak perlu membuat basis kode aplikasi jauh lebih sederhana dan ringan dipelihara.",
          example: {
            code:
              "# cukup fungsi: transformasi sederhana tanpa state\ndef diskon(harga):\n    return harga * 0.9\n\nprint(diskon(100000))",
            output: "Struktur kode pragmatis khas pengembang Python profesional.",
            note: "Python mendukung multiparadigma (Procedural, Functional, OOP).",
          },
          instruction:
            "Sebuah skrip manipulasi data hanya butuh membaca baris, mengubah satu kolom, lalu mengembalikan data baru tanpa menyimpan state jangka panjang. Berdasarkan prinsip arsitektur Python, buatlah fungsi sederhana bernama `proses_data()` yang berisi pernyataan penahan tempat `pass`.",
          starterCode: "# Buat kerangka dengan nama proses_data\n",
          language: "text",
          tests: [
            {
              pattern: "def\\s+proses_data\\(\\s*.*\\s*\\)\\s*:",
              message:
                "Untuk proses transformasi sederhana, gunakan fungsi (def) alih-alih Class.",
            },
          ],
          solution: "def proses_data():\n    pass",
          susunKode: {
            question:
              "Susun pendefinisian fungsi proses_data dengan pernyataan pass.",
            potongan: [
              "def proses_data()",
              ":\n    pass",
            ],
            pengecoh: [
              "def olah_data()",
              " {\n    pass\n}",
            ],
            pemisah: "",
            explanation:
              "Pernyataan penahan tempat di Python menggunakan `pass`. Pengecoh `olah_data` dan kurung kurawal `{}` adalah kesalahan sintaks yang keliru dan membuat interpreter Python menolak eksekusi fungsi secara langsung.",
          },
        },
        {
          kind: "quiz",
          id: "python-5-kuis",
          title: "Kuis: OOP Python",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Dekorator bawaan Python 3.7+ apa yang digunakan untuk membuat kelas penampung data tanpa perlu menuliskan method `__init__` secara manual?",
              choices: [
                "@dataclass",
                "@property",
                "@staticmethod",
                "@classmethod",
              ],
              answerIndex: 0,
              explanation:
                "Dekorator `@dataclass` mengotomatiskan pembentukan method constructor dan perbandingan objek.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Apa tujuan utama dari method Dunder seperti `__str__` atau `__repr__` dalam sebuah kelas Python?",
              choices: [
                "Untuk mengenkripsi data di dalam kelas",
                "Untuk memberikan representasi teks (string) yang ramah dibaca manusia ketika objek dicetak menggunakan print()",
                "Untuk menghapus objek dari memori secara permanen",
                "Untuk menduplikasi objek menjadi dua",
              ],
              answerIndex: 1,
              explanation:
                "Method __str__ memberikan representasi string ramah pengguna (human-readable), sementara __repr__ memberikan representasi resmi yang ditujukan bagi developer.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kapan saat yang paling tepat untuk TIDAK menggunakan pendekatan Class (OOP) dalam menulis kode Python?",
              choices: [
                "Saat membuat game berbasis tampilan dengan banyak interaksi antar objek stateful (memiliki kondisi tertentu)",
                "Saat kamu hanya ingin memanipulasi data masuk menjadi data keluar (fungsi murni/pipeline sederhana) tanpa perlu menyimpan state persisten antar eksekusi",
                "Saat memanajemen ribuan entitas unik",
                "OOP wajib digunakan 100% di semua skrip Python",
              ],
              answerIndex: 1,
              explanation:
                "Sangat disarankan memakai Fungsi biasa (Functional approach) jika kita tidak membutuhkan state berkelanjutan, demi menghindari kompleksitas class berlebihan.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Mengapa parameter pertama di setiap method dalam class Python biasanya bernama `self`?",
              choices: [
                "Karena itu adalah nama resmi dari Python",
                "Untuk merujuk kepada instance (objek) yang memanggil method tersebut agar bisa mengakses atributnya",
                "Agar fungsi bisa diakses publik",
                "Untuk mengubah nilai global",
              ],
              answerIndex: 1,
              explanation:
                "Parameter `self` berfungsi layaknya pointer `this` di bahasa lain, menghubungkan aksi dengan instance objek spesifik di memori.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Cara paling sederhana untuk membuat sebuah properti/method milik Class (dapat dipanggil langsung tanpa instansiasi objek) adalah menggunakan:",
              choices: [
                "@classmethod atau @staticmethod",
                "@property",
                "@dataclass",
                "super()",
              ],
              answerIndex: 0,
              explanation:
                "`@classmethod` dan `@staticmethod` membuat method menjadi milik kelas itu sendiri dan dapat dipanggil menggunakan `NamaKelas.metode()`, tanpa perlu inisialisasi `NamaKelas()`.",
            },
          ],
        },
      ],
    },
    {
      slug: "env-pip",
      title: "Environment & Package",
      description:
        "Setup proyek yang benar — penyelamat dari 'kok di laptopku beda'.",
      topics: [
        "pip & PyPI",
        "Virtual environment (venv) & kenapa wajib",
        "requirements.txt & reproduksi environment",
        "Struktur folder proyek Python",
        "Jupyter Notebook vs script: kapan masing-masing",
        "Linter & formatter (ruff) — kode rapi otomatis",
      ],
      items: [
        {
          kind: "materi",
          id: "python-6-m1",
          title: "Manajemen Environment, Pip, & Standar Proyek",
          body:
            "# Manajemen Environment, Pip, & Standar Proyek\n\n" +
            "Masalah terbesar pengembang pemula adalah sindrom **'di laptopku bisa, kok di server/komputer lain error?'**. Hal ini terjadi karena perbedaan versi pustaka (library) yang terpasang. Di modul ini, kamu akan mempelajari cara mengisolasi lingkungan proyek menggunakan **Virtual Environment** dan manajer paket **pip**.\n\n" +
            "## Model Mental: Virtual Environment (.venv)\n\n" +
            "Secara default, `pip install` akan memasang library ke direktori global sistem operasi. Ini berbahaya jika Proyek A butuh `pandas 1.5` dan Proyek B butuh `pandas 2.2`.\n\n" +
            "Dengan Virtual Environment, setiap proyek memiliki 'sandbox' pustakanya sendiri yang terisolasi:\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------+\n" +
            "| Python System Global                                        |\n" +
            "|  +-----------------------+     +-------------------------+  |\n" +
            "|  | Proyek A (.venv)      |     | Proyek B (.venv)        |  |\n" +
            "|  |  - requests==2.25.0   |     |  - requests==2.32.0    |  |\n" +
            "|  |  - pandas==1.5.0      |     |  - pandas==2.2.0        |  |\n" +
            "|  +-----------------------+     +-------------------------+  |\n" +
            "+-------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Alur Kerja Dependensi `requirements.txt` & Tooling Modern (`uv`)\n\n" +
            "Alur standar mereproduksi dependensi proyek:\n" +
            "1. **Buat Environment**: `python3 -m venv .venv`\n" +
            "2. **Aktifkan**: `source .venv/bin/activate` (Mac/Linux) atau `.venv\\Scripts\\activate` (Windows)\n" +
            "3. **Simpan Daftar Library**: `pip freeze > requirements.txt`\n" +
            "4. **Rekonstruksi di Mesin Lain**: `pip install -r requirements.txt`\n\n" +
            "Di ekosistem modern (2024–2026), banyak tim beralih ke **`uv`** (dibuat oleh Astral dengan Rust) dan format standar **`pyproject.toml`**. `uv` dapat menggantikan `venv` dan `pip` dengan kecepatan 10–100x lebih cepat (`uv venv` dan `uv pip install`).\n\n" +
            "## Struktur Folder Proyek Standar PEP 8\n\n" +
            "```text\n" +
            "my_project/\n" +
            "├── .venv/               <-- Virtual Environment (JANGAN di-commit ke Git!)\n" +
            "├── src/                 <-- Source code utama aplikasi (.py)\n" +
            "│   └── app.py\n" +
            "├── tests/               <-- Berkas Unit Testing (pytest)\n" +
            "├── .gitignore           <-- Mengabaikan .venv/, __pycache__/, .env\n" +
            "├── pyproject.toml       <-- Konfigurasi modern & metadata proyek\n" +
            "├── requirements.txt     <-- Daftar dependensi library versi terunci\n" +
            "└── README.md            <-- Dokumentasi petunjuk proyek\n" +
            "```\n\n" +
            "## Notebook (.ipynb) vs Script (.py)\n\n" +
            "- **Jupyter Notebook (`.ipynb`)**: Cocok untuk **Eksplorasi Data**, analisis visual sel per sel, dan pembuatan laporan interaktif.\n" +
            "- **Script Python (`.py`)**: Wajib digunakan untuk **Aplikasi Produksi**, otomatisasi background job, REST API server, dan CI/CD pipeline.\n\n" +
            "## Linter & Formatter Cepat: Ruff\n\n" +
            "Daripada menginstal linter terpisah (Flake8, Black, isort), gunakan **Ruff** untuk memindai ribuan baris kode dalam hitungan milidetik:\n" +
            "- Pindai error: `ruff check .`\n" +
            "- Format otomatis: `ruff format .`\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "- **Windows PowerShell ExecutionPolicy Error**: Di Windows, menjalankan `activate` sering ditolak dengan pesan `cannot be loaded because running scripts is disabled`. Solusinya jalankan: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`.\n" +
            "- **Meng-commit Folder `.venv/` ke Git**: Folder `.venv` berisi ribuan file biner library lokal dan berukuran ratusan MB. Selalu masukkan `.venv/` ke dalam `.gitignore`!\n" +
            "- **Lupa Mengaktifkan Environment**: Menginstall library tanpa mengaktifkan `.venv` akan memasang library ke Python global secara tidak disadari.\n" +
            "- **Tidak Mengunci Versi Library**: Menulis `pandas` tanpa versi di `requirements.txt` bisa memicu error di kemudian hari saat ada breaking changes di versi terbaru.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Menguasai alur kerja virtual environment dan linters modern (seperti **Ruff**) adalah kualifikasi wajib dalam tim engineering profesional agar seluruh anggota tim dapat mereproduksi lingkungan kerja yang identik tanpa masalah dependensi.",
        },
        {
          kind: "step",
          id: "python-6-1",
          title: "Manajer Paket pip & PyPI",
          explanation:
            "`pip` adalah manajer paket resmi bawaan Python yang digunakan untuk mengunduh, menginstal, dan mengelola pustaka pihak ketiga dari PyPI (Python Package Index). Menggunakan perintah `pip install nama_paket` akan mengunduh file pustaka pra-kompilasi (.whl) beserta dependensinya secara otomatis. Selalu pastikan kamu menjalankan perintah pip di dalam Virtual Environment terisolasi agar tidak mengotori paket bawaan sistem operasi komputer.",
          example: {
            code: "pip install requests pandas",
            output:
              "Collecting requests\n  Downloading requests-2.32.3-py3-none-any.whl (64 kB)\nSuccessfully installed pandas-2.2.3 requests-2.32.3",
            note: "Selalu gunakan virtual environment saat menginstal paket pip.",
          },
          instruction:
            "Kamu membutuhkan pustaka pihak ketiga untuk mengirimkan permintaan HTTP ke API. Tulis perintah terminal pip untuk mengunduh dan memasang paket `requests` ke lingkungan proyek.",
          starterCode: "# Tulis perintah pip di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "pip\\s+install\\s+requests",
                        "message": "Pemasangan paket dari PyPI memakai `pip install <nama-paket>`. Nama paket HTTP paling populer di Python ditulis huruf kecil dan berbentuk jamak. Praktik yang wajib menyertainya: aktifkan virtual environment lebih dulu, lalu catat hasilnya ke `requirements.txt` (`pip freeze > requirements.txt`) — tanpa itu, proyekmu tidak bisa dijalankan orang lain."
                      }
                    ],
          solution: "pip install requests",
          susunKode: {
            question:
              "Susun perintah pip untuk menginstal pustaka requests.",
            potongan: [
              "pip install ",
              "requests",
            ],
            pengecoh: [
              "pip get ",
              "req-package",
            ],
            pemisah: "",
            explanation:
              "Manajer paket standar Python adalah `pip install`. Pengecoh `pip get` adalah sub-perintah fiktif yang keliru dipakai dan sering membuat bingung pengembang pemula pada lingkungan terminal saat menginstal pustaka di BiLearn.",
          },
        },
        {
          kind: "step",
          id: "python-6-2",
          title: "Virtual Environment (python -m venv .venv)",
          explanation:
            "Virtual Environment membuat lingkungan terisolasi untuk tiap proyek Python kamu. Perintah `python -m venv .venv` akan membuat folder `.venv` yang memuat salinan interpreter Python dan direktori pustaka mandiri. Setelah dibuat, lingkungan tersebut wajib diaktifkan via terminal (`source .venv/bin/activate` di Linux/Mac atau `.venv\\Scripts\\activate` di Windows) sebelum menginstal paket pip agar versi pustaka antar proyek tidak bentrok.",
          example: {
            code:
              "python -m venv .venv\n" +
              "source .venv/bin/activate # Linux/Mac\n" +
              ".venv\\Scripts\\activate # Windows",
            output: "Virtual environment terisolasi di folder .venv.",
            note: "Jangan lupa mengaktifkan venv sebelum menginstal dependensi.",
          },
          instruction:
            "Kita akan menginisialisasi lingkungan virtual baru untuk proyek ini. Eksekusi modul `venv` secara native untuk membuat sebuah folder environment bernama `.venv` di tempat eksekusi saat ini.",
          starterCode: "# Tulis perintah shell di sini\n",
          language: "text",
          tests: [
            {
              pattern: "python\\s+-m\\s+venv\\s+\\.\\s*venv",
              message:
                "Gunakan python -m venv diikuti dengan nama direktori .venv",
            },
          ],
          solution: "python -m venv .venv",
          susunKode: {
            question:
              "Susun perintah venv untuk membuat lingkungan virtual .venv.",
            potongan: [
              "python -m venv ",
              ".venv",
            ],
            pengecoh: [
              "python create-env ",
              "my_venv",
            ],
            pemisah: "",
            explanation:
              "Pembuatan virtual environment bawaan memakai `python -m venv .venv`. Pengecoh `create-env` adalah opsi fiktif yang keliru dan sering menjebak pemula saat menyiapkan proyek Python dari awal pada sistem lokal pengguna.",
          },
        },
        {
          kind: "step",
          id: "python-6-3",
          title: "Mengelola Dependensi dengan requirements.txt",
          explanation:
            "File `requirements.txt` berfungsi sebagai manifes pencatat seluruh nama dan versi spesifik pustaka yang dibutuhkan oleh proyek Python. Perintah `pip freeze > requirements.txt` mengekspor seluruh pustaka yang aktif saat ini, sedangkan `pip install -r requirements.txt` memungkinkan rekan satu tim atau server produksi memasang seluruh dependensi identik hanya dalam satu perintah. Praktik ini menjamin reproduksibilitas lingkungan aplikasi secara sempurna.",
          example: {
            code:
              "pip freeze > requirements.txt\n" +
              "pip install -r requirements.txt",
            output: "Seluruh tim menginstal versi library yang identik.",
            note: "Sangat krusial agar tidak ada bug 'di laptopku bisa'.",
          },
          instruction:
            "Rekan timmu baru saja menambahkan library baru ke proyek dan mencatatnya. Jalankan perintah instalasi paket secara masif dengan membaca file `requirements.txt` dari direktori saat ini.",
          starterCode:
            "# Tulis perintah pip untuk membaca file requirement di sini\n",
          language: "text",
          tests: [
            {
              pattern: "pip\\s+install\\s+-r\\s+requirements\\.txt",
              message: "Gunakan argumen -r saat memanggil pip install.",
            },
          ],
          solution: "pip install -r requirements.txt",
          susunKode: {
            question:
              "Susun perintah pip untuk menginstal ketergantungan dari requirements.txt.",
            potongan: [
              "pip install ",
              "-r requirements.txt",
            ],
            pengecoh: [
              "pip get ",
              "-file reqs.txt",
            ],
            pemisah: "",
            explanation:
              "Penginstalan ketergantungan berkas menggunakan flag `-r requirements.txt`. Pengecoh `pip get` adalah opsi fiktif yang keliru dan sering menggoda pengguna baru di lingkungan terminal perintah skrip Python secara langsung.",
          },
        },
        {
          kind: "step",
          id: "python-6-4",
          title: "Struktur Folder Proyek Python Standar",
          explanation:
            "Mengorganisir direktori proyek sesuai standar industri memudahkan navigasi kode dan kolaborasi tim. Struktur standar umumnya terdiri dari folder `src/` (untuk seluruh source code utama), `tests/` (untuk berkas unit test), file `requirements.txt` (daftar dependensi), `.gitignore` (mencegah folder `.venv` ter-commit), dan `README.md` (dokumentasi). Menjaga struktur yang rapi sejak awal mencegah kekacauan impor modul saat aplikasi membesar.",
          example: {
            code:
              "my_project/\n" +
              "  .venv/\n" +
              "  src/\n" +
              "    app.py\n" +
              "  tests/\n" +
              "  requirements.txt",
            output: "Struktur proyek terorganisir bersih.",
            note: "Pastikan folder .venv dicantumkan di .gitignore.",
          },
          instruction:
            "Berlatih membuat kerangka file sistem. Tulislah perintah linux (`mkdir` dan `touch`) untuk membuat folder `src/` lalu membuat file `app.py` di dalam folder tersebut.",
          starterCode: "# Tulis perintah linux/shell di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "mkdir\\s+src\\s*(&&|;)?\\s*touch\\s+src/app\\.py",
              message: "Gunakan mkdir src lalu touch src/app.py.",
            },
          ],
          solution: "mkdir src && touch src/app.py",
          susunKode: {
            question:
              "Susun perintah pembuatan folder src dan berkas src/app.py.",
            potongan: [
              "mkdir src && ",
              "touch src/app.py",
            ],
            pengecoh: [
              "make dir src && ",
              "create src/app.py",
            ],
            pemisah: "",
            explanation:
              "Perintah CLI pembuat folder dan file adalah `mkdir` dan `touch`. Pengecoh `make dir` adalah perintah fiktif yang keliru dan tidak dapat dieksekusi pada shell Linux/macOS standar saat proyek dibuat oleh pengguna BiLearn.",
          },
        },
        {
          kind: "step",
          id: "python-6-5",
          title: "Jupyter Notebook vs Script (.py)",
          explanation:
            "Pilihlah lingkungan eksekusi yang sesuai dengan tujuan pekerjaan kamu. Gunakan **Jupyter Notebook** (`.ipynb`) saat melakukan eksplorasi data, eksperimen model Machine Learning, dan pemrosesan visual sel demi sel karena tampilannya kaya grafik. Namun saat kode siap dijalankan secara otomatis di lingkungan produksi, backend API, atau cron job, wajib konversikan kode tersebut menjadi **Script Python** (`.py`) agar dapat dieksekusi secara headless tanpa UI browser.",
          example: {
            code:
              "# notebook: eksplorasi bertahap, sel per sel\n" +
              "# script .py: dijalankan sekali lewat terminal\n" +
              "python src/laporan.py",
            output: "Pemilihan lingkungan eksekusi yang tepat.",
            note: "Ubah notebook menjadi script .py jika ingin di-deploy ke server.",
          },
          instruction:
            "Kita akan mencoba memanggil Python via terminal untuk dua jenis tugas berbeda. Pertama, tulis perintah untuk meluncurkan layanan Jupyter Notebook. Di baris kedua, tulis perintah untuk menjalankan secara headless file produksi kita `src/app.py`.",
          starterCode:
            "# Tulis perintah terminal untuk meluncurkan jupyter dan menjalankan script\n",
          language: "text",
          tests: [
            {
              pattern: "jupyter\\s+notebook\\s*\\n\\s*python\\s+src/app\\.py",
              message:
                "Tulis perintah 'jupyter notebook' lalu di baris bawahnya 'python src/app.py'.",
            },
          ],
          solution: "jupyter notebook\npython src/app.py",
          susunKode: {
            question:
              "Susun dua perintah menjalankan jupyter notebook dan python src/app.py.",
            potongan: [
              "jupyter ",
              "notebook\npython src/app.py",
            ],
            pengecoh: [
              "jupyter-notebook-server ",
              "\npy-exec src/app.py",
            ],
            pemisah: "",
            explanation:
              "Menjalankan notebook dan skrip Python menggunakan perintah `jupyter notebook` dan `python`. Pengecoh `py-exec` adalah perintah fiktif yang keliru disarankan oleh beberapa pengembang secara tidak resmi saat ini.",
          },
        },
        {
          kind: "step",
          id: "python-6-6",
          title: "Linting & Formatting Otomatis dengan Ruff",
          explanation:
            "Menjaga konsistensi gaya penulisan kode sesuai standar PEP 8 kini sangat mudah dengan alat linter modern seperti `Ruff`. Perintah `ruff check .` memindai seluruh berkas Python secara rekursif untuk menemukan potensi bug dan kesalahan sintaks, sedangkan `ruff format .` merapikan indentasi dan spasi secara otomatis hingga 100x lebih cepat dibanding linter tradisional berbasis Python murni (seperti Flake8 atau Black).",
          example: {
            code: "ruff check .\nruff format .",
            output: "Kode terformat rapi sesuai standar PEP 8.",
            note: "Standar formatter Python paling cepat di ekosistem modern.",
          },
          instruction:
            "Sebelum kita simpan dan commit kode kita, pastikan kita memindainya. Jalankan linter dan checker populer `ruff` untuk mendeteksi error pada seluruh direktori proyek ini secara rekursif (`.`).",
          starterCode: "# Tulis perintah terminal ruff di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "ruff\\s+check\\s+\\.",
              message: "Gunakan ruff check diikuti dengan path saat ini (titik).",
            },
          ],
          solution: "ruff check .",
          susunKode: {
            question:
              "Susun perintah linter ruff untuk memeriksa direktori saat ini.",
            potongan: [
              "ruff ",
              "check .",
            ],
            pengecoh: [
              "flake8 ",
              "lint .",
            ],
            pemisah: "",
            explanation:
              "Pemeriksaan linter ruff dilakukan dengan `ruff check .`. Pengecoh `ruff lint` adalah sub-perintah yang keliru pada CLI ruff modern yang sering menjebak pengguna linter Python dalam verifikasi kode otomatis di server.",
          },
        },
        {
          kind: "quiz",
          id: "python-6-kuis",
          title: "Kuis: Environment & Package",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Mengapa kita Wajib menggunakan Virtual Environment (`python -m venv .venv`) saat membuat proyek Python baru?",
              choices: [
                "Untuk mengisolasi versi library antar proyek agar tidak saling bentrok di komputer local",
                "Agar script Python berjalan 100x lebih cepat",
                "Untuk menghapus virus komputer",
                "Virtual environment diwajibkan oleh Windows",
              ],
              answerIndex: 0,
              explanation:
                "Virtual environment menciptakan lingkungan terisolasi agar dependensi proyek A tidak merusak dependensi proyek B.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "File apa yang secara de facto di ekosistem Python digunakan untuk mencatat versi seluruh dependensi library yang dibutuhkan sebuah proyek?",
              choices: [
                "package.json",
                "dependencies.xml",
                "requirements.txt",
                "env.config",
              ],
              answerIndex: 2,
              explanation:
                "File requirements.txt digunakan oleh pip untuk merekonstruksi lingkungan yang identik di perangkat rekan satu tim atau mesin production.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Dalam pengembangan data analitik, kapan sebaiknya kita mengeksekusi kode Python menggunakan Jupyter Notebook (.ipynb) dibanding script biasa (.py)?",
              choices: [
                "Saat menjalankan server backend (seperti FastAPI atau Flask) untuk traffic production",
                "Saat melakukan cron job otomatis jam 3 pagi",
                "Saat melakukan Eksplorasi Data secara iteratif dan butuh menampilkan grafik/plot visual langkah demi langkah",
                "Saat ukuran file kode melebihi 1000 baris kode",
              ],
              answerIndex: 2,
              explanation:
                "Jupyter Notebook didesain untuk komputasi interaktif, sangat cocok untuk eksplorasi data secara visual yang tak butuh otomatisasi jangka panjang.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa yang dimaksud dengan `.whl` (Wheel) di ekosistem PyPI?",
              choices: [
                "Sebuah virus",
                "Format paket distribusi library Python pra-kompilasi agar instalasi lebih cepat",
                "Logo manajer paket",
                "Mesin virtual Python",
              ],
              answerIndex: 1,
              explanation:
                "Wheel adalah standar format distribusi paket modern di Python yang membungkus kode (dan ekstensi C) siap pasang agar tidak perlu dikompilasi ulang oleh mesin penginstal.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Manakah penamaan variabel (variable case) yang direkomendasikan standar PEP-8 untuk kode Python?",
              choices: ["camelCase", "PascalCase", "snake_case", "kebab-case"],
              answerIndex: 2,
              explanation:
                "Standar resmi PEP-8 sangat merekomendasikan `snake_case` (huruf kecil dipisah underscore) untuk nama variabel dan fungsi, sedangkan Class menggunakan `PascalCase`.",
            },
          ],
        },
      ],
    },
    {
      slug: "otomasi",
      title: "Python untuk Otomasi",
      description:
        "Skill yang langsung terasa: otomatiskan pekerjaan membosankan.",
      topics: [
        "Membaca banyak file sekaligus (glob)",
        "Excel dengan openpyxl: baca, tulis, format",
        "Requests: mengambil data dari API",
        "Scraping dasar dengan BeautifulSoup (dan etikanya)",
        "Mengirim email otomatis",
        "Menjadwalkan script (cron/Task Scheduler)",
        "Proyek: laporan mingguan otomatis dari banyak CSV",
      ],
      items: [
        {
          kind: "materi",
          id: "python-7-m1",
          title: "Otomasi Tugas Rutin & Scripting Kepraktisan",
          body:
            "# Otomasi Tugas Rutin & Scripting Kepraktisan\n\n" +
            "Salah satu kekuatan terbesar Python adalah kemampuannya mengotomatiskan pekerjaan berulang yang membosankan (Robotic Process Automation / RPA). Pekerjaan manual menyalin puluhan berkas Excel, mengambil data dari web, hingga mengoperkan laporan mingguan via email dapat diselesaikan oleh script Python dalam beberapa detik saja.\n\n" +
            "## Pipeline Otomasi Pemrosesan Laporan & Email\n\n" +
            "```text\n" +
            "+--------------------+     +---------------------+     +----------------------+\n" +
            "| 1. Modul glob      | --> | 2. Library openpyxl | --> | 3. Library requests  |\n" +
            "| (Cari Puluhan CSV) |     | (Olah Data Excel)   |     | (Ambil Kurs/Data API)|\n" +
            "+--------------------+     +---------------------+     +----------------------+\n" +
            "                                                                  |\n" +
            "                                                                  v\n" +
            "+--------------------+     +---------------------+     +----------------------+\n" +
            "| Task Scheduler     | <-- | 5. Modul smtplib    | <-- | 4. pandas            |\n" +
            "| (Eksekusi Rutin)   |     | (Kirim Email Notif) |     | (Agregasi Rekap)     |\n" +
            "+--------------------+     +---------------------+     +----------------------+\n" +
            "```\n\n" +
            "## Pustaka Utama Ekosistem Otomasi Python\n\n" +
            "| Modul / Library | Fungsi Otomasi Utama | Contoh Kasus Penggunaan |\n" +
            "|---|---|---|\n" +
            "| **`glob`** | Pencocokan Wildcard Berkas | Mengumpulkan daftar seluruh file `reports/*.csv`. |\n" +
            "| **`openpyxl`** | Membaca & Menulis Berkas Excel | Mengisi template `.xlsx` dan memformat sel otomatis. |\n" +
            "| **`requests`** | Klien HTTP REST API | Mengambil data JSON dari endpoint Web Service API. |\n" +
            "| **`beautifulsoup4`** | Web Scraping (Parsing HTML) | Mengekstrak teks berita atau harga barang dari halaman web. |\n" +
            "| **`smtplib`** | Pengiriman Email SMTP | Mengirimkan laporan rekap email otomatis ke manajer. |\n" +
            "| **`schedule`** | Penjadwalan Tugas (Scheduler) | Mengeksekusi fungsi otomasi setiap jam 8 pagi secara rutin. |\n\n" +
            "## Etika Web Scraping (Web Scraping Code of Conduct)\n\n" +
            "Saat mengekstrak data dari situs web milik pihak ketiga:\n" +
            "1. **Periksa `robots.txt`**: Selalu buka `domain.com/robots.txt` untuk memastikan jalur URL diizinkan di-scrape.\n" +
            "2. **Rate Limiting (Jeda Waktu)**: Gunakan `time.sleep(1)` di antara setiap request HTTP agar tidak membebani server target.\n" +
            "3. **Gunakan Headers User-Agent**: Identifikasi script kamu secara jujur melalui header `User-Agent`.\n\n" +
            "## Keamanan & Pengelolaan Rahasia (.env & os.environ)\n\n" +
            "Kredensial email, token bot, dan API Key **JANGAN PERNAH** ditulis langsung (*hardcoded*) di dalam berkas skrip Python! Simpan ke berkas `.env` (yang diabaikan oleh `.gitignore`) dan baca menggunakan pustaka `python-dotenv` atau `os.environ`:\n\n" +
            "```python\n" +
            "import os\n" +
            "from dotenv import load_dotenv\n\n" +
            "load_dotenv()  # Membaca pasangan KEY=VALUE dari berkas .env lokal\n" +
            "API_KEY = os.environ.get(\"API_SECRET_KEY\")\n" +
            "EMAIL_PASS = os.environ.get(\"SMTP_PASSWORD\")\n" +
            "```\n\n" +
            "## Resiliensi HTTP di Produksi (`timeout` & `raise_for_status`)\n\n" +
            "Request HTTP tanpa batas waktu (*timeout*) dapat menggantung selamanya jika server tujuan down:\n\n" +
            "```python\n" +
            "import requests\n\n" +
            "try:\n" +
            "    res = requests.get(\"https://api.contoh.com/data\", timeout=10)\n" +
            "    res.raise_for_status()  # Lempar error otomatis jika HTTP 404/500\n" +
            "    data = res.json()\n" +
            "except requests.exceptions.Timeout:\n" +
            "    print(\"Server lambat, waktu tunggu 10 detik habis!\")\n" +
            "except requests.exceptions.RequestException as err:\n" +
            "    print(f\"Gangguan jaringan API: {err}\")\n" +
            "```\n\n" +
            "## Penjadwalan: `schedule` vs Cron / Task Scheduler\n\n" +
            "- **Modul `schedule`**: Bagus untuk script daemon yang selalu berjalan terus di latar belakang dalam satu sesi terminal.\n" +
            "- **OS Cron (Linux/macOS) & Windows Task Scheduler**: Standar industri server sesungguhnya. Menjalankan skrip secara mandiri pada jadwal tertentu (misal tiap jam 8 pagi: `0 8 * * * /app/.venv/bin/python /app/laporan.py`) tanpa perlu proses terminal dibiarkan menggantung.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "- **Hardcoding Kredensial Email/Password**: Menyimpan password email langsung di dalam kode script Python. Jika kode ini ter-push ke GitHub publik, akun email akan diretas! Selalu gunakan variabel lingkungan (*environment variable*) atau App Password.\n" +
            "- **Request Tanpa Timeout**: `requests.get(url)` tanpa argumen `timeout=10` bisa membuat proses otomasi membeku selamanya jika server tujuan lambat merespons.\n" +
            "- **Tidak Memeriksa HTTP Status Code**: Mengasumsikan request API pasti sukses tanpa mengecek `response.raise_for_status()`. Kode akan error di langkah berikutnya jika API return 404/500.\n" +
            "- **Path Windows Backslash Escape Error**: Menulis path `C:\\users\\nama` tanpa awalan raw string `r'...'` akan membuat `\\n` atau `\\t` diartikan sebagai baris baru/tab.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di dunia bisnis, memiliki keahlian menulis skrip otomasi Python dapat menghemat ratusan jam kerja tim admin operasional, menjadikan kamu karyawan yang sangat bernilai karena mampu menyederhanakan alur kerja organisasi.",
        },
        {
          kind: "step",
          id: "python-7-1",
          title: "Membaca Banyak Berkas Sekaligus (modul glob)",
          explanation:
            "Modul bawaan `glob` mempermudah pencarian berkas di dalam sistem direktori menggunakan pencocokan pola karakter liar (*wildcard*). Misalnya, `glob.glob('data/*.csv')` mengembalikan daftar seluruh nama file ber-ekstensi `.csv` yang ada di folder `data/`. Fitur ini adalah langkah pertama yang sangat penting dalam pipeline otomasi untuk mengumpulkan puluhan berkas laporan bulanan sebelum digabungkan secara otomatis.",
          example: {
            code:
              'import glob\n' +
              'files = glob.glob("reports/*.csv")\n' +
              "print(files)",
            output: "['reports/jan.csv', 'reports/feb.csv']  (jika folder reports berisi kedua file itu)",
            note: "Memudahkan pemrosesan otomatis puluhan berkas laporan sekaligus.",
          },
          instruction:
            'Terdapat banyak berkas laporan teks (berakhiran .txt) di dalam folder data. Gunakan fungsi dari modul `glob` untuk membaca daftar lokasinya sekaligus dan simpan hasilnya di variabel bernama `files`.',
          starterCode: "# Tulis kode pencarian file di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "files\\s*=\\s*glob\\.glob\\(\\s*[\"']data/\\*\\.txt[\"']\\s*\\)",
              message:
                'Gunakan glob.glob dengan wildcard ("data/*.txt") lalu simpan ke variabel files.',
            },
          ],
          solution: 'files = glob.glob("data/*.txt")',
          susunKode: {
            question:
              "Susun pencarian berkas data/*.txt menggunakan modul glob.",
            potongan: [
              "files = ",
              "glob.glob(\"data/*.txt\")",
            ],
            pengecoh: [
              "files := ",
              "glob.find_all(\"data/*.txt\")",
            ],
            pemisah: "",
            explanation:
              "Pencarian pola berkas menggunakan fungsi `glob.glob()`. Pengecoh `glob.find_all()` adalah nama fungsi fiktif yang keliru dan sering membuat pemula kebingungan mencari modul berkas di Python saat ini pada proyek.",
          },
        },
        {
          kind: "step",
          id: "python-7-2",
          title: "Otomasi Berkas Excel dengan openpyxl",
          explanation:
            "Pustaka pihak ketiga `openpyxl` memungkinkan script Python kamu membaca, mengedit, memformat sel, hingga membuat berkas spreadsheet Microsoft Excel (`.xlsx`) secara otomatis tanpa perlu membuka aplikasi Excel. Fungsi `openpyxl.load_workbook('file.xlsx')` memuat seluruh struktur workbook ke dalam memori, lalu kamu dapat mengakses lembar kerja aktif via `wb.active` dan mengubah nilai sel seperti `sheet['A1'] = 'Nilai Baru'`. Selalu panggil `.save()` di akhir script untuk menyimpan perubahan.",
          example: {
            code:
              'import openpyxl\n' +
              'wb = openpyxl.load_workbook("data.xlsx")\n' +
              "sheet = wb.active\n" +
              'sheet["A1"] = "Hasil Otomasi"\n' +
              'wb.save("data.xlsx")',
            output: "Sel A1 di berkas Excel terupdate otomatis.",
            note: "Otomatiskan pengisian formulir Excel yang berulang.",
          },
          instruction:
            'Buka dan muat berkas Excel `file.xlsx` ke dalam memori aplikasi kita menggunakan pustaka openpyxl. Simpan objek workbook tersebut ke dalam variabel `wb`.',
          starterCode: "# Tulis load_workbook di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "wb\\s*=\\s*openpyxl\\.load_workbook\\(\\s*[\"']file\\.xlsx[\"']\\s*\\)",
              message:
                'Panggil openpyxl.load_workbook() untuk memuat file dan simpan ke wb.',
            },
          ],
          solution: 'wb = openpyxl.load_workbook("file.xlsx")',
          susunKode: {
            question:
              "Susun pembacaan workbook file.xlsx dengan openpyxl.load_workbook.",
            potongan: [
              "wb = ",
              "openpyxl.load_workbook(\"file.xlsx\")",
            ],
            pengecoh: [
              "wb := ",
              "openpyxl.read_excel(\"file.xlsx\")",
            ],
            pemisah: "",
            explanation:
              "Membuka workbook Excel dengan openpyxl memakai `load_workbook()`. Pengecoh `read_excel` berasal dari pandas yang keliru jika digunakan langsung pada modul openpyxl di Python oleh pemula saat ini di lembar kerja.",
          },
        },
        {
          kind: "step",
          id: "python-7-3",
          title: "HTTP Requests API (requests)",
          explanation:
            "Library `requests` adalah standar de-facto paling populer di Python untuk melakukan komunikasi HTTP ke REST API web. Dengan memanggil `requests.get(url)`, script kamu mengirimkan permintaan data dan mendapatkan objek respons. Metode `response.json()` otomatis mengubah balasan teks JSON dari server API menjadi Dictionary/List Python. Selalu biasakan memanggil `response.raise_for_status()` untuk mendeteksi jika koneksi API menghasilkan kode error HTTP (seperti 404 Not Found atau 500 Server Error).",
          example: {
            code:
              'import requests\n' +
              'res = requests.get("https://api.github.com/users/octocat")\n' +
              "data = res.json()\n" +
              'print(data["name"])',
            output: "The Octocat",
            note: "Gunakan res.raise_for_status() untuk menangkap error HTTP 404/500.",
          },
          instruction:
            'Lakukan request HTTP metode GET ke target `url` (yang telah dideklarasikan sebelumnya) menggunakan fungsi dari library requests, lalu simpan respons tersebut ke variabel `res`.',
          starterCode: "# Lakukan request GET di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "res\\s*=\\s*requests\\.get\\(\\s*url(?:\\s*,\\s*timeout\\s*=\\s*\\d+)?\\s*\\)",
              message: "Panggil requests.get(url) lalu simpan ke variabel res.",
            },
          ],
          solution: "res = requests.get(url)",
          susunKode: {
            question:
              "Susun permintaan HTTP GET ke url dengan pustaka requests.",
            potongan: [
              "res = ",
              "requests.get(url)",
            ],
            pengecoh: [
              "res := ",
              "requests.fetch(url)",
            ],
            pemisah: "",
            explanation:
              "Permintaan GET HTTP pada pustaka requests memakai `requests.get(url)`. Pengecoh `fetch` berasal dari API browser JavaScript yang keliru dipakai pada pustaka HTTP Python secara langsung dalam proyek web skrip.",
          },
        },
        {
          kind: "step",
          id: "python-7-4",
          title: "Web Scraping Dasar dengan BeautifulSoup",
          explanation:
            "Pustaka `BeautifulSoup` (dari paket `bs4`) digunakan untuk memparsing struktur dokumen dokumen HTML dan mengekstrak informasi elemen web tertentu secara otomatis. Dengan meneruskan string teks HTML dan nama parser `html.parser`, kamu dapat mencari tag HTML tertentu menggunakan metode `.find('h1')` atau `.find_all('a')` serta mengambil isi teksnya via `.text`. Ingatlah untuk selalu mematuhi etika web scraping dengan tidak membebani server target secara berlebihan.",
          example: {
            code:
              'from bs4 import BeautifulSoup\n' +
              'soup = BeautifulSoup(html_doc, "html.parser")\n' +
              'title = soup.find("h1").text',
            output: "Mengekstrak teks dari elemen tag h1.",
            note: "Hormati aturan etika web scraping.",
          },
          instruction:
            'Kode HTML tersimpan di variabel `html`. Parsing struktur dokumen tersebut menjadi objek BeautifulSoup menggunakan pemroses (parser) bawaan `"html.parser"`. Simpan hasilnya di variabel `soup`.',
          starterCode: "# Buat objek BeautifulSoup di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "soup\\s*=\\s*BeautifulSoup\\(\\s*html\\s*,\\s*[\"']html\\.parser[\"']\\s*\\)",
              message:
                'Instansiasi BeautifulSoup dengan html dan parser "html.parser".',
            },
          ],
          solution: 'soup = BeautifulSoup(html, "html.parser")',
          susunKode: {
            question:
              "Susun penguraian dokumen HTML dengan BeautifulSoup dan parser html.parser.",
            potongan: [
              "soup = ",
              "BeautifulSoup(html, \"html.parser\")",
            ],
            pengecoh: [
              "soup := ",
              "BeautifulSoup.parse(html, \"html.parser\")",
            ],
            pemisah: "",
            explanation:
              "Instansiasi pengurai BeautifulSoup dilakukan dengan `BeautifulSoup(html, 'html.parser')`. Pengecoh `.parse()` adalah metode fiktif yang sering keliru disangka ada oleh pemula di web scraping modern saat mengolah HTML.",
          },
        },
        {
          kind: "step",
          id: "python-7-5",
          title: "Mengirim Email Otomatis (smtplib)",
          explanation:
            "Modul bawaan `smtplib` bersama `email.message.EmailMessage` memungkinkan skrip Python kamu mengirimkan laporan notifikasi email secara otomatis via protokol SMTP. Kamu dapat mengatur pengirim, penerima, subjek email via `msg['Subject'] = ...`, serta isi teks pesan melalui `msg.set_content(...)`. Saat menghubungkan ke penyedia email seperti Gmail, gunakan App Password alih-alih password utama akun demi menjaga keamanan kredensial.",
          example: {
            code:
              'from email.message import EmailMessage\n' +
              "msg = EmailMessage()\n" +
              'msg["Subject"] = "Laporan Harian"\n' +
              'msg.set_content("Terlampir laporan harian")',
            output: "Pesan email terformat siap dikirim via SMTP.",
            note: "Gunakan App Password saat menghubungkan akun Gmail.",
          },
          instruction:
            "Sebuah objek email `msg` (EmailMessage) sudah tersedia. Tetapkan judul email tersebut dengan menargetkan properti (key) `'Subject'` dan isikan nilai string `'Laporan'`. ",
          starterCode: "# Atur subject email di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "msg\\[\\s*['\"]Subject['\"]\\s*\\]\\s*=\\s*['\"]Laporan['\"]",
              message:
                "Gunakan sintaks dictionary untuk mengatur nilai 'Subject' pada msg.",
            },
          ],
          solution: "msg['Subject'] = 'Laporan'",
          susunKode: {
            question:
              "Susun penetapan header subjek email pada objek msg.",
            potongan: [
              "msg['Subject'] = ",
              "'Laporan'",
            ],
            pengecoh: [
              "msg['Subject'] == ",
              "'Laporan_Internal'",
            ],
            pemisah: "",
            explanation:
              "Penetapan header pesan email Python menggunakan sintaks indeks `msg['Subject'] = 'Laporan'`. Pengecoh operator pembanding `==` keliru jika digunakan untuk menginisialisasi subjek email pada skrip Python.",
          },
        },
        {
          kind: "step",
          id: "python-7-6",
          title: "Penjadwalan Script Otomatis (Schedule / Cron)",
          explanation:
            "Script otomasi tidak akan maksimal jika masih harus dipicu secara manual setiap hari. Kamu dapat menggunakan library `schedule` untuk menjadwalkan eksekusi fungsi Python pada waktu spesifik dengan sintaks yang ramah dibaca manusia: `schedule.every().day.at(\"08:00\").do(job)`. Di lingkungan server produksi Linux, kamu juga bisa memanfaatkan alat penjadwal OS native seperti Cron Job (`crontab -e`) untuk mengeksekusi script secara background.",
          example: {
            code:
              'import schedule\n' +
              'schedule.every().day.at("08:00").do(job)',
            output: "Fungsi job otomatis dijalankan setiap jam 8 pagi.",
            note: "Menghilangkan kebutuhan memicu script secara manual.",
          },
          instruction:
            'Atur agar fungsi `run_job` dipanggil secara rutin menggunakan modul `schedule` setiap hari pada pukul 08:00.',
          starterCode: "# Buat jadwal rutin harian di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "schedule\\.every\\(\\)\\.day\\.at\\(\\s*[\"']08:00[\"']\\s*\\)\\.do\\(\\s*run_job\\s*\\)",
              message:
                "Panggil schedule.every().day.at('08:00').do() dan teruskan fungsi target.",
            },
          ],
          solution: 'schedule.every().day.at("08:00").do(run_job)',
          susunKode: {
            question:
              "Susun penjadwalan fungsi run_job setiap hari pukul 08:00 dengan schedule.",
            potongan: [
              "schedule.every().day.at(",
              "\"08:00\").do(run_job)",
            ],
            pengecoh: [
              "schedule.daily.at(",
              "\"08:00\").run(run_job)",
            ],
            pemisah: "",
            explanation:
              "Penjadwalan harian dengan pustaka schedule ditulis `schedule.every().day.at(\"08:00\").do(run_job)`. Pengecoh `daily.run` keliru dan sering menjebak dalam otomasi skrip Python di server aplikasi secara rutin.",
          },
        },
        {
          kind: "step",
          id: "python-7-7",
          title: "Proyek Otomasi Laporan CSV Multi-File",
          explanation:
            "Langkah integrasi otomasi: 1. Gunakan `glob` untuk mengumpulkan seluruh berkas CSV di folder laporan, 2. Periksa apakah daftar file tidak kosong sebelum memproses data, 3. Gabungkan seluruh data dan hitung agregasi omset, 4. Picu fungsi pengirim email `send_report()` untuk membagikan hasil ke pemangku kepentingan. Memeriksa `len(files) > 0` atau `if files:` adalah pencegah bug klasik agar skrip tidak mengirimkan laporan kosong saat berkas belum siap.",
          example: {
            code:
              "import glob, smtplib\n" +
              "# ...\n" +
              "print('Total omset minggu ini: Rp 150M. Laporan terkirim ke CEO.')",
            output:
              "Total omset minggu ini: Rp 150M. Laporan terkirim ke CEO.",
            note: "Penghematan waktu kerja nyata yang meningkatkan nilai diri sebagai engineer.",
          },
          instruction:
            "Terapkan apa yang kamu ketahui dengan memanggil sebuah fungsi `send_report()` apabila panjang file list `files` lebih dari 0. Ini adalah cara mencegah email kosong.",
          starterCode: "# Jika files tidak kosong, jalankan send_report()\n",
          language: "text",
          tests: [
            {
              pattern:
                "if\\s+(len\\(\\s*files\\s*\\)\\s*(>\\s*0|!=\\s*0)|files)\\s*:\\s*\\n?\\s*send_report\\(\\s*\\)",
              message:
                "Periksa apakah len(files) > 0 atau if files:, lalu panggil fungsi pengirim laporan send_report().",
            },
          ],
          solution: "if len(files) > 0:\n    send_report()",
          susunKode: {
            question:
              "Susun pengkondisian jika daftar files tidak kosong untuk memanggil fungsi pengiriman laporan.",
            potongan: [
              "if len(files) > 0:\n",
              "    send_report()",
            ],
            pengecoh: [
              "if count(files) > 0:\n",
              "    send_mail()",
            ],
            pemisah: "",
            explanation:
              "Pemeriksaan jumlah elemen list menggunakan `len(files) > 0`. Pengecoh `count()` di sini adalah fungsi fiktif yang keliru dipakai dan sering menjebak pemula dalam penulisan kondisi pada skrip Python secara umum.",
          },
        },
        {
          kind: "quiz",
          id: "python-7-kuis",
          title: "Kuis: Python untuk Otomasi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Library Python populer apa yang digunakan untuk mengirimkan HTTP request ke REST API (seperti mengambil data JSON dari URL)?",
              choices: ["requests", "openpyxl", "beautifulsoup", "glob"],
              answerIndex: 0,
              explanation:
                "Library `requests` adalah standar de-facto di Python untuk melakukan operasi HTTP GET/POST ke API.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Jika kamu ingin mengumpulkan seluruh daftar file CSV dari sebuah direktori, modul bawaan Python apa yang paling praktis digunakan?",
              choices: ["csv", "json", "glob", "smtplib"],
              answerIndex: 2,
              explanation:
                "Modul `glob` memudahkan pencocokan pattern (wildcard) seperti '*.csv' untuk mendapat daftar file dalam direktori.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Saat melakukan Web Scraping, mengapa kita perlu memperhatikan file 'robots.txt' dan menambah delay waktu jeda antar request?",
              choices: [
                "Karena web server tidak mendukung Python",
                "Sebagai etika agar tidak membebani server tujuan (mencegah serangan DDoS tidak sengaja) dan mematuhi hukum privasi",
                "Agar script Python tidak memakan kuota internet",
                "Sistem operasi menolak ping terlalu cepat",
              ],
              answerIndex: 1,
              explanation:
                "Scraping etis adalah hal krusial; menghargai resource pihak ketiga mencegah IP address kita diblokir dan potensi masalah hukum.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Manakah struktur cron expression standar yang berarti 'setiap menit' dalam sistem penjadwalan?",
              choices: ["0 * * * *", "* * * * *", "* * 0 0 0", "1 * * * *"],
              answerIndex: 1,
              explanation:
                "Format 5 bintang `* * * * *` secara berurutan mewakili menit, jam, hari (bulan), bulan, hari (minggu) dan asteris (*) bermakna 'tiap interval'.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Saat menulis string yang berisi nama path direktori di sistem Windows `C:\\Users\\Data`, kita harus berhati-hati karena backslash (`\\`) akan dianggap sebagai escape character oleh Python. Cara paling rapi untuk menyelesaikannya adalah?",
              choices: [
                "Menggunakan Raw String literal `r'C:\\Users\\Data'`",
                "Menggunakan modul requests",
                "Mengganti ke Linux",
                "Menggunakan file JSON",
              ],
              answerIndex: 0,
              explanation:
                "Memberikan prefiks `r` (raw string) akan mencegah Python menginterpretasi backslash sebagai kode pemformatan (seperti `\\n` atau `\\U`), menjadikannya ideal untuk path Windows.",
            },
          ],
        },
      ],
    },
    {
      slug: "pengantar-pandas",
      title: "Pengantar pandas",
      description:
        "Jembatan ke track Analisis Data — DataFrame pertamamu.",
      topics: [
        "Series & DataFrame: mental model",
        "Membaca CSV/Excel ke DataFrame",
        "head, info, describe — kenalan dengan data",
        "Seleksi kolom & filter baris",
        "Kolom baru & operasi vektor",
        "Missing value: isna, fillna, dropna",
        "groupby pertamamu",
      ],
      items: [
        {
          kind: "materi",
          id: "python-8-m1",
          title: "Pengantar Library pandas untuk Manipulasi Data",
          body:
            "# Pengantar Library pandas untuk Manipulasi Data\n\n" +
            "Selamat datang di modul jembatan menuju **Analisis Data**! Library **pandas** (Python Data Analysis Library) adalah pustaka nomor satu paling populer di ekosistem Python untuk pemrosesan, pembersihan, dan analisis data terstruktur.\n\n" +
            "## Mental Model: Series vs DataFrame\n\n" +
            "Ada dua struktur data utama di dalam pandas:\n" +
            "1. **Series (1 Dimensi)**: Array satu dimensi berlabel yang menampung satu kolom data beserta indeksnya.\n" +
            "2. **DataFrame (2 Dimensi)**: Struktur data berbentuk tabel dua dimensi yang terdiri dari banyak baris (*rows*) dan banyak kolom (*columns*). Setiap kolom pada DataFrame sebenarnya adalah sebuah Series.\n\n" +
            "```text\n" +
            "               DataFrame (Tabel 2D)\n" +
            "         Index   | Kolom 'nama' (Series) | Kolom 'umur' (Series)\n" +
            "        ---------+-----------------------+----------------------\n" +
            "           0     | Budi                  | 25\n" +
            "           1     | Ani                   | 30\n" +
            "           2     | Cici                  | 22\n" +
            "```\n\n" +
            "## Membaca & Menyimpan Data (CSV & Excel)\n\n" +
            "pandas mendukung berbagai format berkas input/output untuk analisis bisnis:\n\n" +
            "```python\n" +
            "import pandas as pd\n\n" +
            "# Membaca dataset CSV dan Excel\n" +
            "df_csv = pd.read_csv('transaksi.csv')\n" +
            "df_excel = pd.read_excel('rekap.xlsx', sheet_name='Penjualan')\n\n" +
            "# Menyimpan hasil olahan bersih (Wajib index=False!)\n" +
            "df_csv.to_csv('transaksi_bersih.csv', index=False)\n" +
            "```\n\n" +
            "## Metode Inspeksi Awal Dataset Wajib\n\n" +
            "Saat pertama kali memuat dataset baru, selalu jalankan 3 metode inspeksi awal ini:\n" +
            "| Metode | Kegunaan Utama |\n" +
            "|---|---|\n" +
            "| **`df.head(5)`** | Mengintip 5 baris pertama data untuk melihat nama kolom dan contoh isi. |\n" +
            "| **`df.info()`** | Memeriksa tipe data tiap kolom (`int64`, `float64`, `object`) dan jumlah nilai kosong. |\n" +
            "| **`df.describe()`** | Menghasilkan ringkasan statistik deskriptif (mean, median, min, max, std). |\n\n" +
            "## Kekuatan Operasi Vektorized & Filter Multi-Kondisi\n\n" +
            "Operasi baris di pandas dieksekusi secara vektorized serentak tanpa loop manual:\n\n" +
            "```python\n" +
            "# 1. Kolom baru via operasi vektor C-backend super cepat\n" +
            "df['total'] = df['harga'] * df['jumlah']\n\n" +
            "# 2. Filter multi-kondisi: WAJIB gunakan & (AND) atau | (OR) dan bungkus kurung ()\n" +
            "saring = df[(df['harga'] > 50000) & (df['kategori'] == 'Elektronik')]\n" +
            "```\n\n" +
            "## Penanganan Nilai Kosong (Missing Values)\n\n" +
            "- Detect: `df.isna().sum()` (Menghitung jumlah data kosong per kolom)\n" +
            "- Fill: `df['kolom'].fillna(nilai)` (Mengisi data kosong dengan nilai default/rata-rata)\n" +
            "- Drop: `df.dropna()` (Menghapus baris yang mengandung data kosong)\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "- **Filter Multi-Kondisi Tanpa Tanda Kurung**: Menulis `df[df['A'] > 10 & df['B'] == 5]` akan memicu error karena presedensi operator bitwise `&`. Kamu WAJIB membungkus tiap kondisi dengan tanda kurung: `df[(df['A'] > 10) & (df['B'] == 5)]` dan gunakan `&`/`|`, bukan kata kunci Python `and`/`or`.\n" +
            "- **Menyimpan CSV Tanpa `index=False`**: Menyimpan dengan `df.to_csv('hasil.csv')` menyertakan nomor indeks baris ke file. Saat file dibuka ulang di kemudian hari, akan muncul kolom duplikat tak bernama (`Unnamed: 0`).\n" +
            "- **Melakukan Loop Manual (`for index, row in df.iterrows()`)**: Mengiterasi baris DataFrame dengan loop Python biasa sangat lambat (bisa 100x lebih lambat!). Selalu gunakan operasi vektorized pandas.\n" +
            "- **Bahaya `SettingWithCopyWarning`**: Mengubah nilai subset DataFrame tanpa `.copy()` dapat memicu peringatan manipulasi memori bayangan. Gunakan `df.loc[kondisi, 'kolom'] = nilai`.\n" +
            "- **Lupa Re-assign Hasil**: Metode pandas seperti `fillna()` atau `drop()` secara default mengembalikan DataFrame BARU (tidak mengubah yang asli). Kamu harus menimpanya `df = df.fillna(0)` atau gunakan `inplace=True`.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Menguasai pandas adalah fondasi mutlak untuk profesi **Data Analyst**, **Data Engineer**, dan **Data Scientist**. pandas digunakan sehari-hari untuk membersihkan data mentah perusahaan sebelum disajikan ke dashboard BI atau dimasukkan ke model Machine Learning.",
        },
        {
          kind: "step",
          id: "python-8-1",
          title: "Mental Model pandas: Series vs DataFrame",
          explanation:
            "Library `pandas` diimpor dengan konvensi nama singkatan `import pandas as pd`. Dua struktur data utamanya adalah **Series** (array 1 dimensi untuk satu kolom data) dan **DataFrame** (tabel 2 dimensi yang terdiri dari kumpulan Series sejajar yang berbagi indeks sama). Memahami mental model tabel ini mempermudah manipulasi data skala besar secara deklaratif tanpa perlu perulangan manual.",
          example: {
            code:
              'import pandas as pd\n' +
              'df = pd.DataFrame({"nama": ["Budi", "Asep"], "umur": [25, 30]})\n' +
              "print(df)",
            output: "  nama  umur\n0 Budi    25\n1 Asep    30",
            note: "Pandas adalah library utama untuk analisis data di Python.",
          },
          instruction:
            "Kita akan menggunakan pustaka analisis data pandas. Impor modul tersebut dan gunakan alias (nama singkatan) standar `pd` yang selalu digunakan oleh analis data.",
          starterCode: "# Tulis import pandas di sini\n",
          language: "text",
          tests: [
            {
              pattern: "import\\s+pandas\\s+as\\s+pd",
              message: "Gunakan alias yang tepat untuk pandas.",
            },
          ],
          solution: "import pandas as pd",
          susunKode: {
            question:
              "Susun pengimporan pustaka pandas dengan alias pd.",
            potongan: [
              "import pandas ",
              "as pd",
            ],
            pengecoh: [
              "include pandas ",
              "using pd",
            ],
            pemisah: "",
            explanation:
              "Pengimporan pandas dengan alias standar ditulis `import pandas as pd`. Pengecoh `using pd` adalah sintaks C# yang keliru di Python dan sering membingungkan pembelajar baru data science di BiLearn saat ini secara langsung.",
          },
        },
        {
          kind: "step",
          id: "python-8-2",
          title: "Membaca Berkas CSV ke DataFrame (read_csv)",
          explanation:
            "Fungsi `pd.read_csv('file.csv')` mengurai berkas teks tabel CSV dan mengonversinya langsung menjadi objek DataFrame di memori. pandas secara otomatis mendeteksi baris pertama sebagai nama header kolom dan mengasumsikan tipe data tiap kolom (seperti integer atau float). Untuk membaca berkas Excel, gunakan `pd.read_excel('file.xlsx')`. Jebakan umum adalah FileNotFoundError jika path nama berkas salah.",
          example: {
            code: "df = pd.read_csv('penjualan.csv')",
            output: "Berkas CSV terurai otomatis ke dalam DataFrame.",
            note: "Gunakan pd.read_excel('file.xlsx') untuk berkas Excel.",
          },
          instruction:
            "Bacalah set data dari file bernama `data.csv` menjadi sebuah DataFrame dan simpan ke variabel bernama `df`.",
          starterCode: "# Baca file CSV menggunakan pandas di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "df\\s*=\\s*pd\\.read_csv\\(\\s*['\"]data\\.csv['\"]\\s*\\)",
              message: "Gunakan fungsi read_csv() dan panggil dari objek pd.",
            },
          ],
          solution: "df = pd.read_csv('data.csv')",
          susunKode: {
            question:
              "Susun pembacaan data CSV data.csv ke DataFrame df dengan pandas.",
            potongan: [
              "df = ",
              "pd.read_csv('data.csv')",
            ],
            pengecoh: [
              "df := ",
              "pd.load_csv('data.csv')",
            ],
            pemisah: "",
            explanation:
              "Membaca file CSV di pandas menggunakan `pd.read_csv()`. Pengecoh `load_csv()` adalah nama fungsi fiktif yang sering keliru diduga ada oleh pemula saat belajar manipulasi data pada modul pandas di Python modern.",
          },
        },
        {
          kind: "step",
          id: "python-8-3",
          title: "Inspeksi Awal Data (head, info, describe)",
          explanation:
            "Langkah pertama yang wajib dilakukan saat menerima dataset baru adalah menginspeksi strukturnya. Metode `df.head(5)` mencetak 5 baris pertama untuk mengintip sampel data, `df.info()` menampilkan tipe data tiap kolom beserta jumlah nilai non-null, dan `df.describe()` menghitung statistik deskriptif (seperti rerata, nilai minimum, dan maksimum) untuk seluruh kolom angka. Inspeksi ini membantu menemukan data kosong atau format yang salah sejak awal.",
          example: {
            code:
              "import pandas as pd\n" +
              "df = pd.DataFrame({'nama': ['Ani', 'Budi'], 'skor': [90, 75]})\n" +
              "print(df.head(1))\n" +
              "print(df['skor'].describe()['mean'])",
            output: "  nama  skor\n0  Ani    90\n82.5",
            note: "Langkah wajib pertama saat menerima dataset baru.",
          },
          instruction:
            "Tampilkan cuplikan struktur dari `df` ke layar dengan memanggil dan mencetak fungsi yang mengembalikan 5 baris pertama.",
          starterCode: "# Cetak 5 baris awal DataFrame df di sini\n",
          language: "text",
          tests: [
            {
              pattern: "print\\(\\s*df\\.head\\(\\s*5?\\s*\\)\\s*\\)",
              message: "Panggil fungsi .head() dan gunakan print().",
            },
          ],
          solution: "print(df.head())",
          susunKode: {
            question:
              "Susun pencetakan lima baris awal DataFrame df.",
            potongan: [
              "print(",
              "df.head())",
            ],
            pengecoh: [
              "echo(",
              "df.first())",
            ],
            pemisah: "",
            explanation:
              "Menampilkan sampel baris teratas DataFrame memakai `df.head()`. Pengecoh `df.first()` adalah nama metode fiktif yang keliru dan sering menggoda pengembang dari platform analitik lain pada skrip data Python.",
          },
        },
        {
          kind: "step",
          id: "python-8-4",
          title: "Seleksi Kolom & Filter Baris",
          explanation:
            "Mengakses satu kolom dilakukan dengan sintaks `df['nama_kolom']` yang mengembalikan objek Series. Untuk menyaring baris berdasarkan kondisi tertentu (*boolean indexing*), bungkus ekspresi kondisi logika di dalam kurung siku DataFrame, contohnya `df[df['harga'] > 1000]`. Ekspresi `df['harga'] > 1000` menghasilkan Series boolean (`True`/`False`), dan DataFrame hanya akan menampilkan baris yang bernilai `True`.",
          example: {
            code: "adults = df[df['age'] >= 18]",
            output:
              "DataFrame baru berisi baris pengguna berumur 18 tahun ke atas.",
            note: "Kondisi boolean menyaring baris secara vektor.",
          },
          instruction:
            "Lakukan pemfilteran untuk mencari barang mahal. Saring DataFrame `df` agar hanya menyisakan baris-baris di mana kolom `'price'` bernilai lebih besar dari 1000. Simpan ke variabel `filtered`.",
          starterCode: "# Tulis logika penyaringan di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern:
                "filtered\\s*=\\s*df\\[\\s*df\\[\\s*['\"]price['\"]\\s*\\]\\s*>\\s*1000\\s*\\]",
              message:
                "Gunakan kondisi df['price'] > 1000 di dalam kurung siku df[].",
            },
          ],
          solution: "filtered = df[df['price'] > 1000]",
          susunKode: {
            question:
              "Susun penyaringan DataFrame df untuk harga price > 1000.",
            potongan: [
              "filtered = ",
              "df[df['price'] > 1000]",
            ],
            pengecoh: [
              "filtered := ",
              "df.where('price > 1000')",
            ],
            pemisah: "",
            explanation:
              "Penyaringan boolean di pandas menggunakan `df[df['price'] > 1000]`. Pengecoh `where('price > 1000')` adalah sintaks SQL/Spark keliru yang sering menjebak pemula saat mengurai data tabel di pandas secara langsung.",
          },
        },
        {
          kind: "step",
          id: "python-8-5",
          title: "Membuat Kolom Baru & Operasi Vektor",
          explanation:
            "Perhitungan matematika di pandas dieksekusi secara vektorized (serentak pada seluruh baris) di C-backend yang sangat cepat tanpa perlu menulis loop `for` manual. Kamu cukup membuat nama kolom baru di sebelah kiri penugasan `=` dan mengalikan dua Series di sebelah kanan: `df['total'] = df['harga'] * df['qty']`. Hasil perkalian tiap baris akan langsung terisi otomatis ke kolom baru.",
          example: {
            code: "df['total'] = df['harga'] * df['jumlah']",
            output: "Kolom baru 'total' dibuat dengan hasil perkalian tiap baris.",
            note: "Operasi vektor di pandas dieksekusi sangat cepat di C backend.",
          },
          instruction:
            "Bikin kolom baru bernama `'total'` di DataFrame `df`, yang mana nilainya adalah hasil perkalian antara kolom `'price'` (harga) dan `'qty'` (kuantitas).",
          starterCode: "# Hitung total harga pada level baris di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "df\\[\\s*['\"]total['\"]\\s*\\]\\s*=\\s*(df\\[\\s*['\"]price['\"]\\s*\\]\\s*\\*\\s*df\\[\\s*['\"]qty['\"]\\s*\\]|df\\[\\s*['\"]qty['\"]\\s*\\]\\s*\\*\\s*df\\[\\s*['\"]price['\"]\\s*\\])",
              message:
                "Gunakan assignment pada kolom baru dan kalikan dua deret (Series): df['price'] * df['qty'].",
            },
          ],
          solution: "df['total'] = df['price'] * df['qty']",
          susunKode: {
            question:
              "Susun pembuatan kolom total dari perkalian kolom price dan qty.",
            potongan: [
              "df['total'] = ",
              "df['price'] * df['qty']",
            ],
            pengecoh: [
              "df['total'] := ",
              "df['price'] .multiply(df['qty'])",
            ],
            pemisah: "",
            explanation:
              "Operasi vektor antar kolom pandas ditulis `df['price'] * df['qty']`. Pengecoh dengan spasi sebelum `.multiply` keliru dan menjebak pemula dalam penulisan ekspresi aritmatika DataFrame di Python saat mengolah data.",
          },
        },
        {
          kind: "step",
          id: "python-8-6",
          title: "Penanganan Missing Values (fillna & dropna)",
          explanation:
            "Nilai kosong pada DataFrame diwakili oleh simbol `NaN` (Not a Number). Kamu dapat menghitung jumlah data kosong per kolom dengan `df.isna().sum()`. Untuk membersihkannya, kamu bisa mengisi nilai kosong dengan nilai default atau rata-rata memakai `df['kolom'].fillna(nilai)`, atau membuang seluruh baris yang mengandung data kosong menggunakan `df.dropna()`. Ingatlah untuk menimpa kembali variabel kolom atau DataFrame agar perubahan tersimpan.",
          example: {
            code: "df['umur'] = df['umur'].fillna(df['umur'].mean())",
            output: "Nilai umur yang kosong diisi dengan angka rata-rata umur.",
            note: "Pembersihan missing value sangat krusial sebelum analisis statistik.",
          },
          instruction:
            "Terdapat banyak pengguna yang lupa mengisi umur mereka di kolom `'age'`. Isi data yang kosong (NaN) dengan angka 0 langsung pada kolom tersebut.",
          starterCode: "# Ganti nilai umur yang kosong di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "df\\[\\s*['\"]age['\"]\\s*\\]\\s*=\\s*df\\[\\s*['\"]age['\"]\\s*\\]\\.fillna\\(\\s*0\\s*\\)",
              message:
                "Terapkan metode .fillna(0) pada kolom umur tersebut dan re-assign (timpa) kembali.",
            },
          ],
          solution: "df['age'] = df['age'].fillna(0)",
          susunKode: {
            question:
              "Susun pengisian nilai hilang kolom age dengan 0 memakai fillna.",
            potongan: [
              "df['age'] = ",
              "df['age'].fillna(0)",
            ],
            pengecoh: [
              "df['age'] := ",
              "df['age'].replace_null(0)",
            ],
            pemisah: "",
            explanation:
              "Pengisian nilai NaN di pandas memakai `df['age'].fillna(0)`. Pengecoh `replace_null` adalah metode fiktif yang keliru dan sering menggoda pengembang yang terbiasa dengan SQL saat ini pada pandas secara otomatis.",
          },
        },
        {
          kind: "step",
          id: "python-8-7",
          title: "Pengelompokan Data Pertama (groupby)",
          explanation:
            "Metode `df.groupby('kategori')` mengelompokkan baris-baris data berdasarkan nilai unik pada kolom tertentu, mirip dengan fungsi `GROUP BY` di SQL atau Pivot Table di Excel. Setelah dikelompokkan, panggil fungsi agregasi statistik seperti `.sum()`, `.mean()`, atau `.count()` pada kolom target, contohnya `df.groupby('kategori')['omset'].sum()`. Ini adalah teknik paling mendasar dalam analisis data bisnis untuk membuat ringkasan per segmen.",
          example: {
            code: "result = df.groupby('kategori')['total'].sum()",
            output: "Ringkasan total omset per kategori produk.",
            note: "Metode paling sering digunakan untuk agregasi analisis bisnis.",
          },
          instruction:
            "Buat rekapitulasi rata-rata harga produk per kategori. Lakukan pengelompokan (groupby) menggunakan kunci `'category'`, ambil nilai `'price'`, hitung nilai rerata matematisnya, dan simpan hasilnya di variabel `summary`.",
          starterCode:
            "# Hitung agregasi statistik rata-rata harga berdasarkan kategori\n",
          language: "text",
          tests: [
            {
              pattern:
                "summary\\s*=\\s*df\\.groupby\\(\\s*['\"]category['\"]\\s*\\)\\[\\s*['\"]price['\"]\\s*\\]\\.mean\\(\\)",
              message:
                "Gunakan method df.groupby(), akses kolom 'price', dan panggil fungsi statistik rata-rata.",
            },
          ],
          solution: "summary = df.groupby('category')['price'].mean()",
          susunKode: {
            question:
              "Susun agregasi rata-rata harga per kategori dengan groupby dan mean.",
            potongan: [
              "summary = ",
              "df.groupby('category')['price'].mean()",
            ],
            pengecoh: [
              "summary := ",
              "df.group_by('category')['price'].average()",
            ],
            pemisah: "",
            explanation:
              "Pengelompokan data di pandas menggunakan `df.groupby('category')['price'].mean()`. Pengecoh `group_by` dengan garis bawah keliru dan sering menjebak dalam manipulasi DataFrame otomatis pada Python saat analisis.",
          },
        },
        {
          kind: "quiz",
          id: "python-8-kuis",
          title: "Kuis: Pengantar pandas",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Fungsi pandas apa yang digunakan untuk membaca berkas CSV dan menguraikannya langsung menjadi objek DataFrame?",
              choices: [
                "pd.read_csv()",
                "pd.open_csv()",
                "pd.load_csv()",
                "pd.parse_csv()",
              ],
              answerIndex: 0,
              explanation:
                "pd.read_csv('filename.csv') adalah fungsi standar pandas untuk membaca dan menguraikan file CSV secara efisien dengan C-engine backend.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Perbedaan mendasar antara Series dan DataFrame pada library pandas adalah?",
              choices: [
                "Series dapat diolah pandas, DataFrame tidak",
                "Series adalah struktur data 1 dimensi (mirip satu kolom atau array), sementara DataFrame adalah struktur tabel 2 dimensi baris dan kolom",
                "Series dan DataFrame sama persis tanpa beda",
                "DataFrame tidak mendukung baris string",
              ],
              answerIndex: 1,
              explanation:
                "Tabel DataFrame sebenarnya merupakan kumpulan dari beberapa objek Series yang dirangkai sejajar dan berbagi indeks.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kamu baru saja membaca file berisi sejuta baris menjadi variabel `df`. Bagaimana cara paling ringkas untuk melihat dan memastikan data termuat baik tanpa mencetak jutaan baris di terminal?",
              choices: [
                "print(df)",
                "df.display()",
                "df.head()",
                "df.first_row()",
              ],
              answerIndex: 2,
              explanation:
                "Method `.head(n)` (default 5 baris) memungkinkan kita mengintip kilasan isi dan header kolom tanpa resiko crash console yang sering terjadi akibat merender terlalu banyak baris.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Untuk mengetahui ada berapa jumlah baris data yang mengandung `NaN` atau data kosong di setiap kolom DataFrame, perintah apa yang dipakai?",
              choices: [
                "df.empty()",
                "df.count_null()",
                "df.isna().sum()",
                "df.describe()",
              ],
              answerIndex: 2,
              explanation:
                "Method `.isna()` akan menghasilkan dataframe boolean, kemudian metode `.sum()` menjumlahkan nilai True (yang terhitung sebagai 1) secara vertikal di tiap kolom.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apabila ada kolom harga barang yang masih berupa teks kotor seperti `'Rp1.000'`, bagaimana logika pembersihan data (data cleaning) di pandas sebelum mengonversinya jadi integer?",
              choices: [
                "Menggunakan regex atau `.str.replace()` untuk menghapus 'Rp' dan titik terlebih dahulu",
                "Menjumlahkannya langsung",
                "Membuang baris tersebut seutuhnya",
                "Menyuruh pandas menebak dan mengonversi",
              ],
              answerIndex: 0,
              explanation:
                "Method spesifik string di pandas seperti `df['harga'].str.replace(...)` memungkinkan kita membersihkan karakter tak relevan sebelum membuang (cast) tipe string menjadi tipe numerik.",
            },
          ],
        },
      ],
    },
  ],
};
