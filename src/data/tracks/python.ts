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
      slug: "dasar-python",
      title: "Dasar Python",
      description:
        "Bahasa paling ramah pemula — dan paling diminta di lowongan data.",
      topics: [
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
          kind: "step",
          id: "python-1-1",
          title: "Menjalankan Script Python & print()",
          explanation:
            "File Python ber-ekstensi `.py` dieksekusi menggunakan perintah `python script.py`. Cetak output ke layar dengan fungsi `print()`.",
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
              message: 'Gunakan fungsi print() untuk mencetak sapaan persis seperti yang diminta.',
            },
          ],
          solution: 'print("Selamat Datang di BiLearn")',
        },
        {
          kind: "step",
          id: "python-1-2",
          title: "Variabel & Tipe Data Dasar",
          explanation:
            "Tipe data dasar Python: `int` (bulat), `float` (desimal), `str` (teks), dan `bool` (`True`/`False`).",
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
        },
        {
          kind: "step",
          id: "python-1-3",
          title: "Formatting String dengan f-string",
          explanation:
            "Sematkan variabel langsung di dalam string menggunakan awalan `f\"... {variabel}\"` (f-string).",
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
              message: 'Gunakan f-string di dalam fungsi print() sesuai format.',
            },
          ],
          solution: 'print(f"Umur: {age}")',
        },
        {
          kind: "step",
          id: "python-1-4",
          title: "Input Pengguna & Konversi Tipe Data",
          explanation:
            "Fungsi `input()` membaca masukan berupa `str`. Konversikan ke angka dengan `int()` atau `float()`.",
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
        },
        {
          kind: "step",
          id: "python-1-5",
          title: "Pengondisian if, elif, dan else",
          explanation:
            "Evaluasi kondisi menggunakan `if`, `elif`, dan `else`. Perhatikan penggunaan titik dua (`:`) di akhir baris kondisi.",
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
              pattern: "if\\s+score\\s*>=\\s*75\\s*:\\s*\\n?\\s*print\\(\\s*[\"']Lulus[\"']\\s*\\)",
              message: "Gunakan if dan periksa apakah score >= 75, lalu panggil print.",
            },
          ],
          solution: 'if score >= 75:\n    print("Lulus")',
        },
        {
          kind: "step",
          id: "python-1-6",
          title: "Perulangan for, range(), dan while",
          explanation:
            "`for i in range(5):` mengulang sebanyak 5 kali (dari 0 hingga 4).",
          example: {
            code: "for i in range(1, 4):\n  print(f\"Angka {i}\")",
            output: "Angka 1\nAngka 2\nAngka 3",
            note: "Gunakan break untuk keluar dari perulangan lebih awal.",
          },
          instruction:
            "Tulis perulangan `for i in range(5):`.",
          starterCode: "# Tulis perulangan for di sini\n",
          language: "text",
          tests: [
            {
              pattern: "for\\s+i\\s+in\\s+range\\(\\s*5\\s*\\)\\s*:",
              message: "Tuliskan: for i in range(5):",
            },
          ],
          solution: "for i in range(5):\n    print(i)",
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
              message:
                "Buat variabel angka bernilai 1.",
            },
            {
              pattern: "for\\s+\\w+\\s+in\\s+range\\(\\s*2\\s*\\)\\s*:",
              message:
                "Tulis perulangan for ... in range(2):",
            },
            {
              pattern: "\\n[ \\t]+print\\(\\s*angka\\s*\\)",
              message:
                "Baris print(angka) harus menjorok ke dalam sebagai isi perulangan.",
            },
          ],
          solution: "angka = 1\nfor i in range(2):\n    print(angka)",
        },
        {
          kind: "quiz",
          id: "python-1-kuis",
          title: "Kuis: Dasar Python",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Bagaimana cara Python mendefinisikan sebuah cakupan blok kode (seperti isi fungsi atau kondisi if)?",
              choices: [
                "Menggunakan kurung kurawal {}",
                "Menggunakan Indentasi (spasi/tab) di awal baris",
                "Menggunakan kata kunci BEGIN dan END",
                "Menggunakan tanda kurung siku []",
              ],
              answerIndex: 1,
              explanation: "Python menggunakan Indentasi bersih di awal baris untuk menandai blok cakupan kode, alih-alih kurung kurawal seperti bahasa pemrograman lainnya.",
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
              explanation: "F-string (format string) memungkinkan kita menggunakan {} untuk menyisipkan nilai variabel langsung di dalam string tanpa harus menggabungkan dengan operator +.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa yang akan terjadi jika kamu mencoba menjumlahkan tipe data `str` dengan `int` secara langsung di Python, misal `\"Tahun \" + 2026`?",
              choices: [
                "Python akan otomatis mengubah angka menjadi teks",
                "Kode akan menghasilkan TypeError",
                "Hasilnya adalah 'Tahun 2026'",
                "Python akan mengubah teks menjadi angka",
              ],
              answerIndex: 1,
              explanation: "Python memiliki strong typing, ia tidak akan otomatis mengubah integer menjadi string, sehingga akan melemparkan TypeError jika kamu tidak mengonversi angkanya menggunakan str() terlebih dulu.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa fungsi dari keyword `break` dalam sebuah perulangan (looping)?",
              choices: [
                "Menghentikan program seutuhnya",
                "Menghentikan iterasi dan keluar dari perulangan",
                "Melanjutkan ke iterasi berikutnya",
                "Menghapus variabel di dalam loop"
              ],
              answerIndex: 1,
              explanation: "Keyword `break` menghentikan eksekusi perulangan saat ini secara langsung, sehingga kode akan berlanjut ke baris setelah blok perulangan tersebut."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Di antara tipe data berikut, mana yang digunakan untuk merepresentasikan nilai desimal di Python?",
              choices: ["int", "str", "bool", "float"],
              answerIndex: 3,
              explanation: "Tipe data `float` digunakan untuk menyimpan angka desimal/pecahan, sedangkan `int` digunakan untuk bilangan bulat."
            }

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
          kind: "step",
          id: "python-2-1",
          title: "List & Slicing di Python",
          explanation:
            "List adalah urutan elemen yang **mutable** — isinya bisa berubah setelah dibuat, misalnya `[1, 2, 3]`. Tambah elemen di ujung dengan `.append()`, dan ambil sebagian isinya dengan slicing `list[start:end]`. Yang sering menjebak pemula: batas akhir slicing bersifat **eksklusif**, jadi `buah[0:2]` memberi elemen indeks 0 dan 1 saja — indeks 2 tidak ikut. Karena itu jumlah elemen hasil slicing selalu `end - start`.",
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
              message: 'Gunakan fungsi .append() pada list items.',
            },
          ],
          solution: 'items.append("Baru")',
        },
        {
          kind: "step",
          id: "python-2-2",
          title: "Dictionary (Kamus Key-Value)",
          explanation:
            "Dictionary menyimpan pasangan kunci-nilai `{'nama': 'Budi'}`. Gunakan `.get('key', default)` agar tidak crash saat key tidak ada.",
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
              pattern: "role\\s*=\\s*user\\.get\\(\\s*[\"']role[\"']\\s*,\\s*[\"']user[\"']\\s*\\)",
              message: 'Gunakan metode .get() dari dictionary dengan default value.',
            },
          ],
          solution: 'role = user.get("role", "user")',
        },
        {
          kind: "step",
          id: "python-2-3",
          title: "Tuple & Unpacking",
          explanation:
            "Tuple bersifat **immutable** (tidak dapat diubah setelah dibuat) `(10, 20)`. Fitur Unpacking memecah isi tuple ke variabel terpisah.",
          example: {
            code: 'point = (10, 20)\nx, y = point',
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
              message: "Gunakan assignment ke banyak variabel sekaligus untuk membongkar isi tuple.",
            },
          ],
          solution: "x, y = coordinates",
        },
        {
          kind: "step",
          id: "python-2-4",
          title: "Set: Nilai Unik & Operasi Himpunan",
          explanation:
            "Set `{1, 2, 3}` menyimpan nilai unik tanpa duplikat. Mendukung operasi himpunan seperti irisan (`&`) dan gabungan (`|`).",
          example: {
            code: 'angka = {1, 2, 2, 3}\nprint(angka)',
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
              message: "Gunakan fungsi konstruktor set() dan simpan di unique_items.",
            },
          ],
          solution: "unique_items = set(my_list)",
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
              pattern: "squares\\s*=\\s*\\[\\s*x\\s*\\*\\*\\s*2\\s+for\\s+x\\s+in\\s+numbers\\s*\\]",
              message: "Deklarasikan list comprehension untuk memangkatkan angka-angka dari numbers.",
            },
          ],
          solution: "squares = [x ** 2 for x in numbers]",
        },
        {
          kind: "step",
          id: "python-2-6",
          title: "Iterasi Gabungan dengan enumerate() dan zip()",
          explanation:
            "`enumerate(list)` memberikan pasangan (indeks, item), sedangkan `zip(list1, list2)` menggabungkan dua list secara berdampingan.",
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
            "Tuliskan perulangan enumerate `for i, item in enumerate(items):`.",
          starterCode: "# Tulis enumerate di sini\n",
          language: "text",
          tests: [
            {
              pattern: "for\\s+i\\s*,\\s*item\\s+in\\s+enumerate\\(\\s*items\\s*\\)\\s*:",
              message: "Gunakan: for i, item in enumerate(items):",
            },
          ],
          solution: "for i, item in enumerate(items):\n    print(i, item)",
        },
        {
          kind: "step",
          id: "python-2-7",
          title: "Memilih Struktur Data yang Tepat",
          explanation:
            "List ➔ Urutan berurut. Dict ➔ Pencarian kunci instan $O(1)$. Set ➔ Nilai unik tanpa duplikat. Tuple ➔ Data tetap tak dapat diubah.",
          example: {
            code: "# dict: pencarian instan lewat kunci\nharga = {'kopi': 25000}\nprint(harga['kopi'])",
            output: "Optimasi algoritma dan efisiensi memori program.",
            note: "Memilih struktur data yang tepat mempermudah penulisan kode.",
          },
          instruction:
            "Sebagai uji pemahaman, bayangkan kamu mempunyai daftar data absensi karyawan yang butuh pencarian sangat cepat (instan). Buatlah variabel `struktur_pencarian` dan inisialisasi dengan struktur data dictionary kosong.",
          starterCode: "# Buat variabel struktur_pencarian dengan tipe dictionary\n",
          language: "text",
          tests: [
            {
              pattern: "struktur_pencarian\\s*=\\s*\\{\\s*\\}",
              message: "Gunakan kurung kurawal {} atau dict() untuk membuat dictionary kosong.",
            },
          ],
          solution: "struktur_pencarian = {}",
        },
        {
          kind: "quiz",
          id: "python-2-kuis",
          title: "Kuis: Struktur Data Python",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Struktur data Python mana yang bersifat **Immutable** (tidak dapat diubah/ditambah setelah dibuat)?",
              choices: ["List", "Tuple", "Dictionary", "Set"],
              answerIndex: 1,
              explanation: "Tuple adalah struktur data berurut yang bersifat immutable (elemennya tidak dapat diubah pasca instansiasi). Ini membuatnya lebih cepat dan hemat memori.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Manakah struktur data yang tepat jika kamu ingin menyimpan data yang TIDAK ADA DUPLIKAT?",
              choices: ["List", "Set", "Tuple", "Dictionary"],
              answerIndex: 1,
              explanation: "Set bekerja berdasarkan konsep himpunan dalam matematika sehingga otomatis mengeliminasi elemen ganda saat disimpan.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara mengambil elemen pada List dengan posisi terakhir menggunakan indeks?",
              choices: ["list[-1]", "list[last]", "list.get_last()", "list.end()"],
              answerIndex: 0,
              explanation: "Di Python, kita dapat melakukan negative indexing di mana -1 merepresentasikan urutan terakhir pada List/String.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Jika kita memiliki `users = {'admin': 1}`, apa yang terjadi bila kita menjalankan `users['guest']` untuk mengakses data yang kuncinya belum ada?",
              choices: [
                "Python akan me-return None",
                "Python akan me-return False",
                "Python akan melemparkan KeyError",
                "Python akan otomatis membuat kunci 'guest'"
              ],
              answerIndex: 2,
              explanation: "Mengakses kunci yang tidak ada langsung dengan kurung siku `[]` akan memicu `KeyError`. Untuk menghindarinya, gunakan metode `.get()`."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Apa sintaks yang benar untuk menggabungkan dua dictionary di Python (versi 3.9+)?",
              choices: ["dict1 + dict2", "dict1.concat(dict2)", "dict1 | dict2", "dict1.append(dict2)"],
              answerIndex: 2,
              explanation: "Python 3.9+ memperkenalkan operator `|` (merge operator) yang sangat bersih dan rapi untuk menggabungkan dua dictionary."
            }

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
          kind: "step",
          id: "python-3-1",
          title: "Pendefinisian Fungsi def & Default Argument",
          explanation:
            "Fungsi didefinisikan dengan `def nama_fungsi(param=default):`. Kembalikan hasil menggunakan `return`.",
          example: {
            code: 'def sapa(nama="User"):\n    return f"Halo {nama}"',
            output: "Mengembalikan 'Halo User' jika parameter nama tidak diisi.",
            note: "Jika fungsi tidak memiliki return, secara default mengembalikan None.",
          },
          instruction:
            'Definisikan fungsi `def hitung(a, b=10): return a + b`.',
          starterCode: "# Definisikan fungsi hitung di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "def\\s+hitung\\(\\s*a\\s*,\\s*b\\s*=\\s*10\\s*\\)\\s*:\\s*\\n?\\s*return\\s+a\\s*\\+\\s*b",
              message: "Definisikan fungsi hitung sesuai instruksi",
            },
          ],
          solution: "def hitung(a, b=10):\n    return a + b",
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
            "Tuliskan parameter fungsi `def process(*args, **kwargs):`.",
          starterCode: "# Tulis def process di sini\n",
          language: "text",
          tests: [
            {
              pattern: "def\\s+process\\(\\s*\\*args\\s*,\\s*\\*\\*kwargs\\s*\\)\\s*:",
              message: "Definisikan: def process(*args, **kwargs):",
            },
          ],
          solution: "def process(*args, **kwargs):\n    pass",
        },
        {
          kind: "step",
          id: "python-3-3",
          title: "Scope Variabel (Local vs Global)",
          explanation:
            "Variabel yang dideklarasikan di dalam fungsi bersifat Lokal. Hindari menggunakan kata kunci `global` demi mencegah bug pencemaran state.",
          example: {
            code: "x = 10\ndef test():\n    x = 5 # Variabel lokal x yang berbeda dari global x",
            output: "Variabel lokal terisolasi dari lingkup luar.",
            note: "Operkan variabel via parameter fungsi daripada mengandalkan variabel global.",
          },
          instruction:
            "Hindari pencemaran state global! Buatlah sebuah fungsi bernama `set_status()` yang mendeklarasikan sebuah variabel LOKAL bernama `status` dan mengisinya dengan string \"aktif\".",
          starterCode: "# Buat fungsi set_status di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "def\\s+set_status\\(\\s*\\)\\s*:\\s*\\n?\\s*status\\s*=\\s*[\"']aktif[\"']",
              message: "Fungsi set_status() harus memiliki variabel lokal status bernilai 'aktif'.",
            },
          ],
          solution: "def set_status():\n    status = 'aktif'",
        },
        {
          kind: "step",
          id: "python-3-4",
          title: "Lambda (Fungsi Anonim)",
          explanation:
            "Lambda `lambda x: x * 2` adalah fungsi anonim 1 baris yang sering digunakan sebagai argumen pengurutan (sorting key).",
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
              pattern: "square\\s*=\\s*lambda\\s+x\\s*:\\s*x\\s*\\*\\*\\s*2",
              message: "Gunakan sintaks lambda untuk variabel square.",
            },
          ],
          solution: "square = lambda x: x ** 2",
        },
        {
          kind: "step",
          id: "python-3-5",
          title: "Penjaga Eksekusi Script: __name__ == '__main__'",
          explanation:
            "Pemeriksaan `if __name__ == '__main__':` memastikan kode di dalamnya HANYA dieksekusi saat berkas dijalankan langsung (bukan saat di-import).",
          example: {
            code: 'def main():\n    print("Jalan")\n\nif __name__ == "__main__":\n    main()',
            output: "Jalan",
            note: "Pola standar di seluruh modul dan script Python.",
          },
          instruction:
            'Tuliskan blok penjaga `if __name__ == "__main__":`.',
          starterCode: "# Tulis if __name__ di sini\n",
          language: "text",
          tests: [
            {
              pattern: "if\\s+__name__\\s*==\\s*[\"']__main__[\"']\\s*:",
              message: 'Tuliskan: if __name__ == "__main__":',
            },
          ],
          solution: 'if __name__ == "__main__":\n    main()',
        },
        {
          kind: "step",
          id: "python-3-6",
          title: "Standard Library (datetime & math)",
          explanation:
            "Python kaya akan modul bawaan: `math` untuk operasi matematika, `datetime` untuk tanggal, dan `random` untuk angka acak.",
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
        },
        {
          kind: "step",
          id: "python-3-7",
          title: "Type Hinting Dasar & Docstrings",
          explanation:
            "Gunakan Type Hint `def hitung(a: int, b: int) -> int:` dan Docstring `\"\"\"...\"\"\"` untuk dokumentasi tipe data.",
          example: {
            code:
              'def tambah(a: int, b: int) -> int:\n' +
              '    """Menjumlahkan dua angka integer."""\n' +
              "    return a + b",
            output: "Petunjuk tipe data terlihat jelas di IDE.",
            note: "Type hint meningkatkan keamanan kode tanpa mengorbankan sifat dinamis Python.",
          },
          instruction:
            "Tuliskan fungsi dengan type hint `def greet(name: str) -> str:`.",
          starterCode: "# Tulis fungsi dengan type hint di sini\n",
          language: "text",
          tests: [
            {
              pattern: "def\\s+greet\\(\\s*name\\s*:\\s*str\\s*\\)\\s*->\\s*str\\s*:",
              message: "Definisikan: def greet(name: str) -> str:",
            },
          ],
          solution: "def greet(name: str) -> str:\n    return f\"Halo {name}\"",
        },
        {
          kind: "quiz",
          id: "python-3-kuis",
          title: "Kuis: Fungsi & Module Python",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Pemeriksaan kondisi apa yang digunakan di Python untuk memastikan kode tertentu HANYA dieksekusi jika file tersebut dijalankan langsung sebagai script utama?",
              choices: [
                "if __name__ == '__main__':",
                "if __script__ == 'run':",
                "if process.env == 'main':",
                "if is_main_file():",
              ],
              answerIndex: 0,
              explanation: "Variabel `__name__` bernilai `'__main__'` hanya saat berkas tersebut dieksekusi secara langsung oleh interpreter Python.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Jika fungsi tidak menuliskan statement `return`, apa nilai yang dikembalikan secara default oleh Python?",
              choices: [
                "0",
                "False",
                "None",
                "Error",
              ],
              answerIndex: 2,
              explanation: "Secara default, fungsi yang tidak memanggil return akan mengembalikan None.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa tujuan utama menggunakan Type Hinting seperti `def sapa(nama: str) -> str:` di Python?",
              choices: [
                "Meningkatkan performa program menjadi 2x lipat",
                "Membuat dokumentasi yang dapat dibaca oleh IDE dan pengecek tipe (seperti mypy)",
                "Mencegah Python berjalan jika tipe data salah saat runtime",
                "Membuat variabel menjadi konstanta tak bisa diubah",
              ],
              answerIndex: 1,
              explanation: "Type Hinting di Python (secara default) tidak mengubah cara kode dieksekusi saat runtime. Fungsinya murni untuk membantu IDE memberi auto-complete dan static analysis.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa kegunaan dari sintaks `**kwargs` pada deklarasi parameter fungsi?",
              choices: [
                "Menangkap sisa argumen posisional (tanpa nama) menjadi Tuple",
                "Menangkap pasangan argumen bernama (keyword arguments) yang berlebih menjadi Dictionary",
                "Memaksa pengguna mengisi argumen",
                "Mengalikan variabel dengan dua"
              ],
              answerIndex: 1,
              explanation: "`**kwargs` digunakan untuk menangkap *keyword arguments* ekstra ke dalam bentuk dictionary, membuat fungsi sangat fleksibel menerima opsi konfigurasi."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Jika ada variabel `x = 5` di luar fungsi, lalu di dalam fungsi kita mendeklarasikan `x = 10`. Apa yang terjadi pada nilai `x` di luar fungsi?",
              choices: [
                "Berubah menjadi 10 karena tertimpa",
                "Tetap 5 karena variabel lokal di fungsi berbeda dari variabel global",
                "Terjadi error karena nama sama",
                "Berubah menjadi None"
              ],
              answerIndex: 1,
              explanation: "Di Python, variabel yang didefinisikan di dalam fungsi bersifat LOKAL dan terisolasi, sehingga tidak mengubah variabel di lingkup global kecuali dideklarasikan dengan `global x`."
            }

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
            'Tuliskan pembuka file `with open("app.log", "r", encoding="utf-8") as f:`.',
          starterCode: "# Tulis with open di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "with\\s+open\\(\\s*[\"']app\\.log[\"']\\s*,\\s*[\"']r[\"']\\s*,\\s*encoding=[\"']utf-8[\"']\\s*\\)\\s+as\\s+f\\s*:",
              message: "Gunakan: with open(\"app.log\", \"r\", encoding=\"utf-8\") as f:",
            },
          ],
          solution: 'with open("app.log", "r", encoding="utf-8") as f:\n    content = f.read()',
        },
        {
          kind: "step",
          id: "python-4-2",
          title: "Membaca & Menulis Berkas CSV (modul csv)",
          explanation:
            "Modul bawaan `csv.DictReader` membaca baris CSV langsung menjadi objek Dictionary.",
          example: {
            code:
              'import csv\n' +
              'with open("data.csv", "r", encoding="utf-8") as f:\n' +
              "    reader = csv.DictReader(f)\n" +
              "    for row in reader:\n" +
              '        print(row["nama"])',
            output: "Mencetak kolom 'nama' dari setiap baris CSV.",
            note: "DictReader otomatis menggunakan baris pertama CSV sebagai nama key.",
          },
          instruction:
            "Berkas CSV `data.csv` telah dibuka pada variabel `f`. Gunakan fitur `csv.DictReader()` untuk memproses file `f` tersebut, dan simpan objek pembacanya ke dalam variabel bernama `reader`.",
          starterCode: "# Buat DictReader di sini\n",
          language: "text",
          tests: [
            {
              pattern: "reader\\s*=\\s*csv\\.DictReader\\(\\s*f\\s*\\)",
              message: "Panggil csv.DictReader dengan mengoper f, lalu simpan ke variabel reader.",
            },
          ],
          solution: "reader = csv.DictReader(f)",
        },
        {
          kind: "step",
          id: "python-4-3",
          title: "Modul JSON (json.loads & json.dumps)",
          explanation:
            "Gunakan `json.loads(json_str)` untuk mengubah string JSON ke Dict, dan `json.dumps(dict)` untuk mengubah Dict ke string JSON.",
          example: {
            code:
              'import json\n' +
              'data = json.loads(\'{"name": "Budi"}\')\n' +
              "print(data[\"name\"])",
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
        },
        {
          kind: "step",
          id: "python-4-4",
          title: "Manajemen Path Modern dengan pathlib",
          explanation:
            "Gunakan `pathlib.Path` daripada manipulasi string manual untuk pengoperasian path berkas lintas OS.",
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
              pattern: "file_path\\s*=\\s*Path\\(\\s*[\"']data/file\\.txt[\"']\\s*\\)",
              message: 'Gunakan Path("data/file.txt") dan simpan ke file_path.',
            },
          ],
          solution: 'file_path = Path("data/file.txt")',
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
          starterCode: "input_str = \"dua puluh\"\n# Tulis blok try/except di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "try\\s*:",
              message:
                "Mulai dengan blok try:",
            },
            {
              pattern: "int\\(\\s*input_str\\s*\\)",
              message:
                "Coba ubah input_str menjadi int di dalam try.",
            },
            {
              pattern: "except\\s+ValueError\\s+as\\s+\\w+\\s*:",
              message:
                "Tangkap ValueError beserta objek error-nya (as e).",
            },
            {
              pattern: "print\\(",
              message:
                "Cetak pesan error di dalam blok except.",
            },
          ],
          solution: "input_str = \"dua puluh\"\ntry:\n    angka = int(input_str)\nexcept ValueError as e:\n    print('Bukan angka:', e)",
        },
        {
          kind: "step",
          id: "python-4-6",
          title: "Melempar Exception (raise)",
          explanation:
            "Gunakan `raise ValueError('Pesan error')` untuk melempar exception secara sengaja saat terjadi pelanggaran kondisi.",
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
              pattern: "raise\\s+ValueError\\(\\s*[\"']Invalid age[\"']\\s*\\)",
              message: 'Gunakan kata kunci raise diikuti dengan ValueError("Invalid age").',
            },
          ],
          solution: 'raise ValueError("Invalid age")',
        },
        {
          kind: "step",
          id: "python-4-7",
          title: "Jebakan File Encoding UTF-8",
          explanation:
            "Selalu cantumkan `encoding='utf-8'` saat membuka file teks agar karakter spesial tidak berubah menjadi simbol aneh di OS Windows.",
          example: {
            code: 'with open("file.txt", "w", encoding="utf-8") as f:\n    f.write("Kopi ☕")',
            output: "Karakter emoji dan simbol internasional tersimpan sempurna.",
            note: "Default encoding di Windows adalah CP1252 yang sering merusak teks.",
          },
          instruction:
            "Kita butuh menulis teks Bahasa Indonesia beserta emoji ke file `pesan.txt`. Gunakan `with open()` dalam mode tulis ('w') dan wajib tentukan parameter `encoding` agar tidak rusak di Windows.",
          starterCode: "# Buka pesan.txt dengan mode tulis dan encoding yang aman\n",
          language: "text",
          tests: [
            {
              pattern: "with\\s+open\\(\\s*['\"]pesan\\.txt['\"]\\s*,\\s*['\"]w['\"]\\s*,\\s*encoding=['\"]utf-8['\"]\\s*\\)\\s+as\\s+",
              message: "Gunakan with open('pesan.txt', 'w', encoding='utf-8') as f:",
            },
          ],
          solution: "with open('pesan.txt', 'w', encoding='utf-8') as f:\n    pass",
        },
        {
          kind: "quiz",
          id: "python-4-kuis",
          title: "Kuis: File & Error Handling",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa sangat direkomendasikan membuka file menggunakan perintah `with open(...) as f:` di Python?",
              choices: [
                "Karena berkas otomatis ditutup (closed) secara aman setelah selesai eksekusi, bahkan jika terjadi error",
                "Karena file otomatis ter-kompresi menjadi ZIP",
                "Karena dengan 'with' file tidak memakan memori",
                "Karena 'with' menghapus file otomatis",
              ],
              answerIndex: 0,
              explanation: "Context manager `with` menjamin pembersihan resource (penutupan file) dilakukan otomatis saat blok selesai.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa fungsi dari blok `finally` di dalam sebuah penanganan exception try/except?",
              choices: [
                "Dijalankan hanya jika exception terjadi",
                "Menggantikan blok try jika gagal",
                "Selalu dijalankan di akhir, tidak peduli error terjadi atau tidak",
                "Menangani jenis error baru",
              ],
              answerIndex: 2,
              explanation: "Blok finally selalu dijalankan sebelum keluar dari struktur try, sering digunakan untuk pembersihan sumber daya (seperti menutup koneksi database).",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa disarankan menspesifikasikan jenis Exception spesifik (misal `except ValueError:`) daripada hanya menggunakan `except:` kosong?",
              choices: [
                "Except spesifik menghemat RAM komputer",
                "Except kosong (bare except) akan menangkap semua error termasuk SystemExit atau KeyboardInterrupt, menyembunyikan bug yang tidak terduga",
                "Python tidak mendukung bare except mulai versi 3",
                "Agar sintaks kode lebih panjang",
              ],
              answerIndex: 1,
              explanation: "Menangkap semua error dengan except: sangat berbahaya karena bisa membungkam indikasi bug sistematis atau upaya penghentian program dari user (Ctrl+C).",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Bagaimana cara paling tepat menguraikan string teks berformat JSON ke dalam dictionary (objek Python)?",
              choices: ["json.parse(teks)", "json.load(teks)", "json.loads(teks)", "json.dump(teks)"],
              answerIndex: 2,
              explanation: "Metode `json.loads()` singkatan dari 'load string', khusus mengubah string JSON menjadi dictionary, sedangkan `json.load()` membaca dari file handler."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Di mana tempat yang paling benar meletakkan argumen penentu format karakter (`encoding='utf-8'`) saat membaca file teks di Python?",
              choices: [
                "Di dalam method .read()",
                "Di dalam dekorator fungsi",
                "Di dalam argumen fungsi open()",
                "Pada setting sistem operasi"
              ],
              answerIndex: 2,
              explanation: "Parameter `encoding='utf-8'` disematkan saat memanggil `open(file, mode, encoding)` agar Python mengetahui sejak awal bagaimana menterjemahkan bit di file teks tersebut."
            }

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
          kind: "step",
          id: "python-5-1",
          title: "Kelas, __init__, dan self",
          explanation:
            "Class didefinisikan dengan `class NamaKelas:`. Method `__init__(self, ...)` adalah constructor untuk menginisialisasi atribut instansi.",
          example: {
            code:
              "class User:\n" +
              "    def __init__(self, name):\n" +
              "        self.name = name\n" +
              "user = User('Budi')",
            output: "Objek user dibuat dengan atribut name 'Budi'.",
            note: "Parameter self merujuk pada instansi objek itu sendiri.",
          },
          instruction:
            "Tuliskan method __init__ `def __init__(self, title): self.title = title`.",
          starterCode: "# Tulis __init__ di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "def\\s+__init__\\(\\s*self\\s*,\\s*title\\s*\\)\\s*:\\s*\\n?\\s*self\\.title\\s*=\\s*title",
              message: "Definisikan method __init__ sesuai instruksi",
            },
          ],
          solution: "def __init__(self, title):\n    self.title = title",
        },
        {
          kind: "step",
          id: "python-5-2",
          title: "Atribut Instansi vs Atribut Kelas",
          explanation:
            "Atribut Kelas dimiliki bersama oleh seluruh instansi, sedangkan Atribut Instansi (`self.name`) bersifat unik untuk setiap objek.",
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
              pattern: "species\\s*=\\s*['\"]Human['\"]",
              message: "Gunakan species = 'Human' sebagai atribut kelas (tanpa self).",
            },
          ],
          solution: "species = 'Human'",
        },
        {
          kind: "step",
          id: "python-5-3",
          title: "Pewarisan (Inheritance) & super()",
          explanation:
            "Kelas anak dapat mewarisi properti kelas induk `class Child(Parent):` dan memanggil constructor induk via `super().__init__()`.",
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
              pattern: "super\\(\\)\\.__init__\\(\\s*name\\s*\\)",
              message: "Gunakan super().__init__(name) untuk memanggil induk.",
            },
          ],
          solution: "super().__init__(name)",
        },
        {
          kind: "step",
          id: "python-5-4",
          title: "Dunder Methods (__str__ & __repr__)",
          explanation:
            "Method khusus (Dunder) seperti `__str__` mendefinisikan tampilan teks saat objek di-print (`print(obj)`).",
          example: {
            code:
              "class Book:\n" +
              "    def __init__(self, title):\n" +
              "        self.title = title\n" +
              "    def __str__(self):\n" +
              '        return f"Buku: {self.title}"',
            output: "print(book) mencetak 'Buku: Python 101'.",
            note: "Dunder method diawali dan diakhiri dua garis bawah (double underscore).",
          },
          instruction:
            "Tuliskan method __str__ `def __str__(self): return self.name`.",
          starterCode: "# Tulis __str__ di sini\n",
          language: "text",
          tests: [
            {
              pattern: "def\\s+__str__\\(\\s*self\\s*\\)\\s*:\\s*\\n?\\s*return\\s+self\\.name",
              message: "Definisikan method __str__ sesuai instruksi",
            },
          ],
          solution: "def __str__(self):\n    return self.name",
        },
        {
          kind: "step",
          id: "python-5-5",
          title: "Data Class (@dataclass)",
          explanation:
            "Class yang tugasnya sekadar menampung data biasanya butuh `__init__` panjang berisi penugasan berulang. Dekorator `@dataclass` dari modul `dataclasses` membuat Python menuliskannya untukmu: cukup deklarasikan nama field beserta tipenya, dan `__init__`, `__repr__`, serta perbandingan antar objek dibuat otomatis. Hasilnya kode jadi jauh lebih pendek dan bebas dari salah ketik saat menyalin parameter. Pakai dataclass untuk objek data seperti Produk atau Transaksi; class biasa tetap lebih tepat kalau perilakunya rumit dan bukan sekadar menyimpan nilai.",
          example: {
            code: "from dataclasses import dataclass\n\n@dataclass\nclass Buku:\n    judul: str\n    harga: int\n\nprint(Buku('Atomic Habits', 95000))",
            output: "Buku(judul='Atomic Habits', harga=95000)",
          },
          instruction:
            "Buat class penampung data `Product` dengan dua field: `name` bertipe `str` dan `price` bertipe `float`. Pakai dekorator dari modul `dataclasses` supaya kamu tidak perlu menulis `__init__` sendiri.",
          starterCode: "from dataclasses import dataclass\n\n# Tulis class Product di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "@dataclass",
              message:
                "Pasang dekorator @dataclass tepat di atas class.",
            },
            {
              pattern: "class\\s+Product\\s*:",
              message:
                "Buat class Product.",
            },
            {
              pattern: "name\\s*:\\s*str",
              message:
                "Field name bertipe str.",
            },
            {
              pattern: "price\\s*:\\s*float",
              message:
                "Field price bertipe float.",
            },
          ],
          solution: "from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float",
        },
        {
          kind: "step",
          id: "python-5-6",
          title: "Kapan OOP & Kapan Cukup Fungsi",
          explanation:
            "Di Python, jangan paksakan membuat Class jika sebuah masalah cukup diselesaikan dengan Fungsi sederhana! Kombinasikan paradigma fungsional dan OOP secara seimbang.",
          example: {
            code: "# cukup fungsi: transformasi sederhana tanpa state\ndef diskon(harga):\n    return harga * 0.9\n\nprint(diskon(100000))",
            output: "Struktur kode pragmatis khas pengembang Python profesional.",
            note: "Python mendukung multiparadigma (Procedural, Functional, OOP).",
          },
          instruction:
            "Mari berlatih merancang struktur. Sebuah skrip data sains sederhana butuh membaca CSV, merubah satu kolom (data transformation), lalu me-return list baru. Apakah kamu perlu membuat sebuah Class penuh untuk ini, atau cukup membuat sebuah fungsi sederhana (Function)? Deklarasikan kerangkanya sesuai pilihan yang tepat (cukup kata kuncinya saja).",
          starterCode: "# Buat kerangka dengan nama proses_data\n",
          language: "text",
          tests: [
            {
              pattern: "def\\s+proses_data\\(\\s*.*\\s*\\)\\s*:",
              message: "Untuk proses transformasi sederhana, gunakan fungsi (def) alih-alih Class.",
            },
          ],
          solution: "def proses_data():\n    pass",
        },
        {
          kind: "quiz",
          id: "python-5-kuis",
          title: "Kuis: OOP Python",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Dekorator bawaan Python 3.7+ apa yang digunakan untuk membuat kelas penampung data tanpa perlu menuliskan method `__init__` secara manual?",
              choices: ["@dataclass", "@property", "@staticmethod", "@classmethod"],
              answerIndex: 0,
              explanation: "Dekorator `@dataclass` mengotomatiskan pembentukan method constructor dan perbandingan objek.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa tujuan utama dari method Dunder seperti `__str__` atau `__repr__` dalam sebuah kelas Python?",
              choices: [
                "Untuk mengenkripsi data di dalam kelas",
                "Untuk memberikan representasi teks (string) yang ramah dibaca manusia ketika objek dicetak menggunakan print()",
                "Untuk menghapus objek dari memori secara permanen",
                "Untuk menduplikasi objek menjadi dua",
              ],
              answerIndex: 1,
              explanation: "Method __str__ memberikan representasi string ramah pengguna (human-readable), sementara __repr__ memberikan representasi resmi yang ditujukan bagi developer.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Kapan saat yang paling tepat untuk TIDAK menggunakan pendekatan Class (OOP) dalam menulis kode Python?",
              choices: [
                "Saat membuat game berbasis tampilan dengan banyak interaksi antar objek stateful (memiliki kondisi tertentu)",
                "Saat kamu hanya ingin memanipulasi data masuk menjadi data keluar (fungsi murni/pipeline sederhana) tanpa perlu menyimpan state persisten antar eksekusi",
                "Saat memanajemen ribuan entitas unik",
                "OOP wajib digunakan 100% di semua skrip Python",
              ],
              answerIndex: 1,
              explanation: "Sangat disarankan memakai Fungsi biasa (Functional approach) jika kita tidak membutuhkan state berkelanjutan, demi menghindari kompleksitas class berlebihan.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Mengapa parameter pertama di setiap method dalam class Python biasanya bernama `self`?",
              choices: [
                "Karena itu adalah nama resmi dari Python",
                "Untuk merujuk kepada instance (objek) yang memanggil method tersebut agar bisa mengakses atributnya",
                "Agar fungsi bisa diakses publik",
                "Untuk mengubah nilai global"
              ],
              answerIndex: 1,
              explanation: "Parameter `self` berfungsi layaknya pointer `this` di bahasa lain, menghubungkan aksi dengan instance objek spesifik di memori."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Cara paling sederhana untuk membuat sebuah properti/method milik Class (dapat dipanggil langsung tanpa instansiasi objek) adalah menggunakan:",
              choices: ["@classmethod atau @staticmethod", "@property", "@dataclass", "super()"],
              answerIndex: 0,
              explanation: "`@classmethod` dan `@staticmethod` membuat method menjadi milik kelas itu sendiri dan dapat dipanggil menggunakan `NamaKelas.metode()`, tanpa perlu inisialisasi `NamaKelas()`."
            }

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
          kind: "step",
          id: "python-6-1",
          title: "Manajer Paket pip & PyPI",
          explanation:
            "`pip` adalah manajer paket resmi Python untuk mengunduh library dari PyPI (Python Package Index).",
          example: {
            code: "pip install requests pandas",
            output: "Collecting requests\n  Downloading requests-2.32.3-py3-none-any.whl (64 kB)\nSuccessfully installed pandas-2.2.3 requests-2.32.3",
            note: "Selalu gunakan virtual environment saat menginstal paket pip.",
          },
          instruction:
            "Tulis perintah pip untuk mengunduh `requests`.",
          starterCode: "# Tulis perintah pip di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "pip\\s+install\\s+requests",
              message: "Gunakan: pip install requests",
            },
          ],
          solution: "pip install requests",
        },
        {
          kind: "step",
          id: "python-6-2",
          title: "Virtual Environment (python -m venv .venv)",
          explanation:
            "Virtual Environment mengisolasi dependensi antar proyek agar versi library tidak bentrok di sistem operasi.",
          example: {
            code: "python -m venv .venv\nsource .venv/bin/activate # Linux/Mac\n.venv\\Scripts\\activate # Windows",
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
              message: "Gunakan python -m venv diikuti dengan nama direktori .venv",
            },
          ],
          solution: "python -m venv .venv",
        },
        {
          kind: "step",
          id: "python-6-3",
          title: "Mengelola Dependensi dengan requirements.txt",
          explanation:
            "Catat seluruh paket yang terinstal dengan `pip freeze > requirements.txt`, dan reka ulang di server dengan `pip install -r requirements.txt`.",
          example: {
            code: "pip freeze > requirements.txt\npip install -r requirements.txt",
            output: "Seluruh tim menginstal versi library yang identik.",
            note: "Sangat krusial agar tidak ada bug 'di laptopku bisa'.",
          },
          instruction:
            "Rekan timmu baru saja menambahkan library baru ke proyek dan mencatatnya. Jalankan perintah instalasi paket secara masif dengan membaca file `requirements.txt` dari direktori saat ini.",
          starterCode: "# Tulis perintah pip untuk membaca file requirement di sini\n",
          language: "text",
          tests: [
            {
              pattern: "pip\\s+install\\s+-r\\s+requirements\\.txt",
              message: "Gunakan argumen -r saat memanggil pip install.",
            },
          ],
          solution: "pip install -r requirements.txt",
        },
        {
          kind: "step",
          id: "python-6-4",
          title: "Struktur Folder Proyek Python Standar",
          explanation:
            "Struktur rapi: `src/` (source code), `tests/` (unit test), `requirements.txt`, `.gitignore`, dan `README.md`.",
          example: {
            code: "my_project/\n  .venv/\n  src/\n    app.py\n  tests/\n  requirements.txt",
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
        },
        {
          kind: "step",
          id: "python-6-5",
          title: "Jupyter Notebook vs Script (.py)",
          explanation:
            "Gunakan **Jupyter Notebook** (`.ipynb`) untuk Eksplorasi Data & Visualisasi Interaktif. Gunakan **Script** (`.py`) untuk Kode Produksi & Otomasi.",
          example: {
            code: "# notebook: eksplorasi bertahap, sel per sel\n# script .py: dijalankan sekali lewat terminal\npython src/laporan.py",
            output: "Pemilihan lingkungan eksekusi yang tepat.",
            note: "Ubah notebook menjadi script .py jika ingin di-deploy ke server.",
          },
          instruction:
            "Kita akan mencoba memanggil Python via terminal untuk dua jenis tugas berbeda. Pertama, tulis perintah untuk meluncurkan layanan Jupyter Notebook. Di baris kedua, tulis perintah untuk menjalankan secara headless file produksi kita `src/app.py`.",
          starterCode: "# Tulis perintah terminal untuk meluncurkan jupyter dan menjalankan script\n",
          language: "text",
          tests: [
            {
              pattern: "jupyter\\s+notebook\\s*\\n\\s*python\\s+src/app\\.py",
              message: "Tulis perintah 'jupyter notebook' lalu di baris bawahnya 'python src/app.py'.",
            },
          ],
          solution: "jupyter notebook\npython src/app.py",
        },
        {
          kind: "step",
          id: "python-6-6",
          title: "Linting & Formatting Otomatis dengan Ruff",
          explanation:
            "Gunakan `ruff` untuk memformat dan mengecek kesalahan sintaks kode Python secara sangat cepat (100x lebih cepat dibanding Flake8/Black).",
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
        },
        {
          kind: "quiz",
          id: "python-6-kuis",
          title: "Kuis: Environment & Package",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa kita Wajib menggunakan Virtual Environment (`python -m venv .venv`) saat membuat proyek Python baru?",
              choices: [
                "Untuk mengisolasi versi library antar proyek agar tidak saling bentrok di komputer local",
                "Agar script Python berjalan 100x lebih cepat",
                "Untuk menghapus virus komputer",
                "Virtual environment diwajibkan oleh Windows",
              ],
              answerIndex: 0,
              explanation: "Virtual environment menciptakan lingkungan terisolasi agar dependensi proyek A tidak merusak dependensi proyek B.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "File apa yang secara de facto di ekosistem Python digunakan untuk mencatat versi seluruh dependensi library yang dibutuhkan sebuah proyek?",
              choices: [
                "package.json",
                "dependencies.xml",
                "requirements.txt",
                "env.config",
              ],
              answerIndex: 2,
              explanation: "File requirements.txt digunakan oleh pip untuk merekonstruksi lingkungan yang identik di perangkat rekan satu tim atau mesin production.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Dalam pengembangan data analitik, kapan sebaiknya kita mengeksekusi kode Python menggunakan Jupyter Notebook (.ipynb) dibanding script biasa (.py)?",
              choices: [
                "Saat menjalankan server backend (seperti FastAPI atau Flask) untuk traffic production",
                "Saat melakukan cron job otomatis jam 3 pagi",
                "Saat melakukan Eksplorasi Data secara iteratif dan butuh menampilkan grafik/plot visual langkah demi langkah",
                "Saat ukuran file kode melebihi 1000 baris kode",
              ],
              answerIndex: 2,
              explanation: "Jupyter Notebook didesain untuk komputasi interaktif, sangat cocok untuk eksplorasi data secara visual yang tak butuh otomatisasi jangka panjang.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa yang dimaksud dengan `.whl` (Wheel) di ekosistem PyPI?",
              choices: [
                "Sebuah virus",
                "Format paket distribusi library Python pra-kompilasi agar instalasi lebih cepat",
                "Logo manajer paket",
                "Mesin virtual Python"
              ],
              answerIndex: 1,
              explanation: "Wheel adalah standar format distribusi paket modern di Python yang membungkus kode (dan ekstensi C) siap pasang agar tidak perlu dikompilasi ulang oleh mesin penginstal."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Manakah penamaan variabel (variable case) yang direkomendasikan standar PEP-8 untuk kode Python?",
              choices: ["camelCase", "PascalCase", "snake_case", "kebab-case"],
              answerIndex: 2,
              explanation: "Standar resmi PEP-8 sangat merekomendasikan `snake_case` (huruf kecil dipisah underscore) untuk nama variabel dan fungsi, sedangkan Class menggunakan `PascalCase`."
            }

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
          kind: "step",
          id: "python-7-1",
          title: "Membaca Banyak Berkas Sekaligus (modul glob)",
          explanation:
            "Gunakan `glob.glob('data/*.csv')` untuk mengambil seluruh daftar file yang cocok dengan pola karakter (wildcard).",
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
              pattern: "files\\s*=\\s*glob\\.glob\\(\\s*[\"']data/\\*\\.txt[\"']\\s*\\)",
              message: 'Gunakan glob.glob dengan wildcard ("data/*.txt") lalu simpan ke variabel files.',
            },
          ],
          solution: 'files = glob.glob("data/*.txt")',
        },
        {
          kind: "step",
          id: "python-7-2",
          title: "Otomasi Berkas Excel dengan openpyxl",
          explanation:
            "Library `openpyxl` membaca dan menulis berkas Excel `.xlsx` langsung dari script Python.",
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
              pattern: "wb\\s*=\\s*openpyxl\\.load_workbook\\(\\s*[\"']file\\.xlsx[\"']\\s*\\)",
              message: 'Panggil openpyxl.load_workbook() untuk memuat file dan simpan ke wb.',
            },
          ],
          solution: 'wb = openpyxl.load_workbook("file.xlsx")',
        },
        {
          kind: "step",
          id: "python-7-3",
          title: "HTTP Requests API (requests)",
          explanation:
            "Library `requests` mengunduh data dari REST API publik dengan sangat mudah (`requests.get(url).json()`).",
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
              pattern: "res\\s*=\\s*requests\\.get\\(\\s*url\\s*\\)",
              message: "Panggil requests.get() dan berikan url, simpan hasilnya pada res.",
            },
          ],
          solution: "res = requests.get(url)",
        },
        {
          kind: "step",
          id: "python-7-4",
          title: "Web Scraping Etis (BeautifulSoup)",
          explanation:
            "Gunakan `BeautifulSoup` untuk mengekstrak elemen HTML dari halaman web. Selalu patuhi file `robots.txt` dan jangan membombardir server dengan request masif.",
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
              pattern: "soup\\s*=\\s*BeautifulSoup\\(\\s*html\\s*,\\s*[\"']html\\.parser[\"']\\s*\\)",
              message: 'Instansiasi BeautifulSoup dengan html dan parser "html.parser".',
            },
          ],
          solution: 'soup = BeautifulSoup(html, "html.parser")',
        },
        {
          kind: "step",
          id: "python-7-5",
          title: "Mengirim Email Otomatis (smtplib)",
          explanation:
            "Gunakan `smtplib` dan `email.message.EmailMessage` untuk mengalirkan notifikasi laporan ke inbox email.",
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
            "Sebuah objek email `msg` (EmailMessage) sudah tersedia. Tetapkan judul email tersebut dengan menargetkan properti (key) `'Subject'` dan isikan nilai string `'Laporan'`.",
          starterCode: "# Atur subject email di sini\n",
          language: "text",
          tests: [
            {
              pattern: "msg\\[\\s*['\"]Subject['\"]\\s*\\]\\s*=\\s*['\"]Laporan['\"]",
              message: "Gunakan sintaks dictionary untuk mengatur nilai 'Subject' pada msg.",
            },
          ],
          solution: "msg['Subject'] = 'Laporan'",
        },
        {
          kind: "step",
          id: "python-7-6",
          title: "Penjadwalan Script Otomatis (Schedule / Cron)",
          explanation:
            "Gunakan library `schedule` atau Cron Job OS untuk mengeksekusi script otomatis setiap jam 8 pagi secara rutin.",
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
              pattern: "schedule\\.every\\(\\)\\.day\\.at\\(\\s*[\"']08:00[\"']\\s*\\)\\.do\\(\\s*run_job\\s*\\)",
              message: "Panggil schedule.every().day.at('08:00').do() dan teruskan fungsi target.",
            },
          ],
          solution: 'schedule.every().day.at("08:00").do(run_job)',
        },
        {
          kind: "step",
          id: "python-7-7",
          title: "Proyek Otomasi Laporan CSV Multi-File",
          explanation:
            "Proyek Otomasi: 1. Ambil seluruh CSV dari folder `reports/`, 2. Gabungkan data, 3. Hitung total omset, 4. Kirim laporan ringkasan ke email.",
          example: {
            code: "import glob, smtplib\n# ...\nprint('Total omset minggu ini: Rp 150M. Laporan terkirim ke CEO.')",
            output: "Total omset minggu ini: Rp 150M. Laporan terkirim ke CEO.",
            note: "Penghematan waktu kerja nyata yang meningkatkan nilai diri sebagai engineer.",
          },
          instruction:
            "Terapkan apa yang kamu ketahui dengan memanggil sebuah fungsi `send_report()` apabila panjang file list `files` lebih dari 0. Ini adalah cara mencegah email kosong.",
          starterCode: "# Jika files tidak kosong, jalankan send_report()\n",
          language: "text",
          tests: [
            {
              pattern: "if\\s+len\\(\\s*files\\s*\\)\\s*>\\s*0\\s*:\\s*\\n?\\s*send_report\\(\\s*\\)",
              message: "Periksa apakah len(files) > 0, lalu panggil fungsi pengirim laporan.",
            },
          ],
          solution: "if len(files) > 0:\n    send_report()",
        },
        {
          kind: "quiz",
          id: "python-7-kuis",
          title: "Kuis: Python untuk Otomasi",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Library Python populer apa yang digunakan untuk mengirimkan HTTP request ke REST API (seperti mengambil data JSON dari URL)?",
              choices: ["requests", "openpyxl", "beautifulsoup", "glob"],
              answerIndex: 0,
              explanation: "Library `requests` adalah standar de-facto di Python untuk melakukan operasi HTTP GET/POST ke API.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Jika kamu ingin mengumpulkan seluruh daftar file CSV dari sebuah direktori, modul bawaan Python apa yang paling praktis digunakan?",
              choices: [
                "csv",
                "json",
                "glob",
                "smtplib",
              ],
              answerIndex: 2,
              explanation: "Modul `glob` memudahkan pencocokan pattern (wildcard) seperti '*.csv' untuk mendapat daftar file dalam direktori.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Saat melakukan Web Scraping, mengapa kita perlu memperhatikan file 'robots.txt' dan menambah delay waktu jeda antar request?",
              choices: [
                "Karena web server tidak mendukung Python",
                "Sebagai etika agar tidak membebani server tujuan (mencegah serangan DDoS tidak sengaja) dan mematuhi hukum privasi",
                "Agar script Python tidak memakan kuota internet",
                "Sistem operasi menolak ping terlalu cepat",
              ],
              answerIndex: 1,
              explanation: "Scraping etis adalah hal krusial; menghargai resource pihak ketiga mencegah IP address kita diblokir dan potensi masalah hukum.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Manakah struktur cron expression standar yang berarti 'setiap menit' dalam sistem penjadwalan?",
              choices: ["0 * * * *", "* * * * *", "* * 0 0 0", "1 * * * *"],
              answerIndex: 1,
              explanation: "Format 5 bintang `* * * * *` secara berurutan mewakili menit, jam, hari (bulan), bulan, hari (minggu) dan asteris (*) bermakna 'tiap interval'."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Saat menulis string yang berisi nama path direktori di sistem Windows `C:\\Users\\Data`, kita harus berhati-hati karena backslash (`\\`) akan dianggap sebagai escape character oleh Python. Cara paling rapi untuk menyelesaikannya adalah?",
              choices: [
                "Menggunakan Raw String literal `r'C:\\Users\\Data'`",
                "Menggunakan modul requests",
                "Mengganti ke Linux",
                "Menggunakan file JSON"
              ],
              answerIndex: 0,
              explanation: "Memberikan prefiks `r` (raw string) akan mencegah Python menginterpretasi backslash sebagai kode pemformatan (seperti `\\n` atau `\\U`), menjadikannya ideal untuk path Windows."
            }

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
          kind: "step",
          id: "python-8-1",
          title: "Mental Model pandas: Series vs DataFrame",
          explanation:
            "**Series** adalah array 1 dimensi (1 kolom). **DataFrame** adalah struktur tabel 2 dimensi (banyak baris dan kolom).",
          example: {
            code:
              'import pandas as pd\n' +
              'df = pd.DataFrame({"nama": ["Budi", "Asep"], "umur": [25, 30]})\n' +
              'print(df)',
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
        },
        {
          kind: "step",
          id: "python-8-2",
          title: "Membaca Berkas CSV ke DataFrame (read_csv)",
          explanation:
            "Gunakan `pd.read_csv('data.csv')` untuk membaca file CSV langsung menjadi objek DataFrame.",
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
              pattern: "df\\s*=\\s*pd\\.read_csv\\(\\s*['\"]data\\.csv['\"]\\s*\\)",
              message: "Gunakan fungsi read_csv() dan panggil dari objek pd.",
            },
          ],
          solution: "df = pd.read_csv('data.csv')",
        },
        {
          kind: "step",
          id: "python-8-3",
          title: "Inspeksi Awal Data (head, info, describe)",
          explanation:
            "`df.head(5)` melihat 5 baris pertama, `df.info()` melihat tipe data & missing values, `df.describe()` melihat statistik deskriptif.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'nama': ['Ani', 'Budi'], 'skor': [90, 75]})\nprint(df.head(1))\nprint(df['skor'].describe()['mean'])",
            output: "  nama  skor\n0  Ani    90\n82.5",
            note: "Langkah wajib pertama saat menerima dataset baru.",
          },
          instruction:
            "Tampilkan cuplikan struktur dari `df` ke layar dengan memanggil dan mencetak fungsi yang mengembalikan 5 baris pertama.",
          starterCode: "# Cetak 5 baris awal DataFrame df di sini\n",
          language: "text",
          tests: [
            {
              pattern: "print\\(\\s*df\\.head\\(\\s*\\)\\s*\\)",
              message: "Panggil fungsi .head() dan gunakan print().",
            },
          ],
          solution: "print(df.head())",
        },
        {
          kind: "step",
          id: "python-8-4",
          title: "Seleksi Kolom & Filter Baris",
          explanation:
            "Ambil kolom dengan `df['kolom']`. Filter baris dengan kondisi boolean `df[df['umur'] > 20]`.",
          example: {
            code: "adults = df[df['age'] >= 18]",
            output: "DataFrame baru berisi baris pengguna berumur 18 tahun ke atas.",
            note: "Kondisi boolean menyaring baris secara vektor.",
          },
          instruction:
            "Lakukan pemfilteran untuk mencari barang mahal. Saring DataFrame `df` agar hanya menyisakan baris-baris di mana kolom `'price'` bernilai lebih besar dari 1000. Simpan ke variabel `filtered`.",
          starterCode: "# Tulis logika penyaringan di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "filtered\\s*=\\s*df\\[\\s*df\\[\\s*['\"]price['\"]\\s*\\]\\s*>\\s*1000\\s*\\]",
              message: "Gunakan kondisi df['price'] > 1000 di dalam kurung siku df[].",
            },
          ],
          solution: "filtered = df[df['price'] > 1000]",
        },
        {
          kind: "step",
          id: "python-8-5",
          title: "Membuat Kolom Baru & Operasi Vektor",
          explanation:
            "Operasi matematika di pandas secara otomatis berlaku ke seluruh baris (Vectorized Operation).",
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
              pattern: "df\\[\\s*['\"]total['\"]\\s*\\]\\s*=\\s*df\\[\\s*['\"]price['\"]\\s*\\]\\s*\\*\\s*df\\[\\s*['\"]qty['\"]\\s*\\]",
              message: "Gunakan assignment pada kolom baru dan kalikan dua deret (Series).",
            },
          ],
          solution: "df['total'] = df['price'] * df['qty']",
        },
        {
          kind: "step",
          id: "python-8-6",
          title: "Penanganan Missing Values (fillna & dropna)",
          explanation:
            "Periksa nilai kosong dengan `df.isna().sum()`. Isi nilai kosong dengan `df.fillna(val)` atau hapus baris kosong dengan `df.dropna()`.",
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
              pattern: "df\\[\\s*['\"]age['\"]\\s*\\]\\s*=\\s*df\\[\\s*['\"]age['\"]\\s*\\]\\.fillna\\(\\s*0\\s*\\)",
              message: "Terapkan metode .fillna(0) pada kolom umur tersebut dan re-assign (timpa) kembali.",
            },
          ],
          solution: "df['age'] = df['age'].fillna(0)",
        },
        {
          kind: "step",
          id: "python-8-7",
          title: "Pengelompokan Data Pertama (groupby)",
          explanation:
            "Gunakan `df.groupby('kategori')['omset'].sum()` untuk mengelompokkan data layaknya SQL GROUP BY / Pivot Table.",
          example: {
            code: "result = df.groupby('kategori')['total'].sum()",
            output: "Ringkasan total omset per kategori produk.",
            note: "Metode paling sering digunakan untuk agregasi analisis bisnis.",
          },
          instruction:
            "Buat rekapitulasi rata-rata harga produk per kategori. Lakukan pengelompokan (groupby) menggunakan kunci `'category'`, ambil nilai `'price'`, hitung nilai rerata matematisnya, dan simpan hasilnya di variabel `summary`.",
          starterCode: "# Hitung agregasi statistik rata-rata harga berdasarkan kategori\n",
          language: "text",
          tests: [
            {
              pattern: "summary\\s*=\\s*df\\.groupby\\(\\s*['\"]category['\"]\\s*\\)\\[\\s*['\"]price['\"]\\s*\\]\\.mean\\(\\)",
              message: "Gunakan method df.groupby(), akses kolom 'price', dan panggil fungsi statistik rata-rata.",
            },
          ],
          solution: "summary = df.groupby('category')['price'].mean()",
        },
        {
          kind: "quiz",
          id: "python-8-kuis",
          title: "Kuis: Pengantar pandas",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Fungsi pandas apa yang digunakan untuk membaca berkas CSV dan menguraikannya langsung menjadi objek DataFrame?",
              choices: ["pd.read_csv()", "pd.open_csv()", "pd.load_csv()", "pd.parse_csv()"],
              answerIndex: 0,
              explanation: "pd.read_csv('filename.csv') adalah fungsi standar pandas untuk membaca dan menguraikan file CSV secara efisien dengan C-engine backend.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Perbedaan mendasar antara Series dan DataFrame pada library pandas adalah?",
              choices: [
                "Series dapat diolah pandas, DataFrame tidak",
                "Series adalah struktur data 1 dimensi (mirip satu kolom atau array), sementara DataFrame adalah struktur tabel 2 dimensi baris dan kolom",
                "Series dan DataFrame sama persis tanpa beda",
                "DataFrame tidak mendukung baris string"
              ],
              answerIndex: 1,
              explanation: "Tabel DataFrame sebenarnya merupakan kumpulan dari beberapa objek Series yang dirangkai sejajar dan berbagi indeks.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Kamu baru saja membaca file berisi sejuta baris menjadi variabel `df`. Bagaimana cara paling ringkas untuk melihat dan memastikan data termuat baik tanpa mencetak jutaan baris di terminal?",
              choices: [
                "print(df)",
                "df.display()",
                "df.head()",
                "df.first_row()"
              ],
              answerIndex: 2,
              explanation: "Method `.head(n)` (default 5 baris) memungkinkan kita mengintip kilasan isi dan header kolom tanpa resiko crash console yang sering terjadi akibat merender terlalu banyak baris (meski pandas punya pengaman cetak, tapi head lebih ringkas).",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Untuk mengetahui ada berapa jumlah baris data yang mengandung `NaN` atau data kosong di setiap kolom DataFrame, perintah apa yang dipakai?",
              choices: ["df.empty()", "df.count_null()", "df.isna().sum()", "df.describe()"],
              answerIndex: 2,
              explanation: "Method `.isna()` akan menghasilkan dataframe boolean, kemudian metode `.sum()` menjumlahkan nilai True (yang terhitung sebagai 1) secara vertikal di tiap kolom."
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Apabila ada kolom harga barang yang masih berupa teks kotor seperti `'Rp1.000'`, bagaimana logika pembersihan data (data cleaning) di pandas sebelum mengonversinya jadi integer?",
              choices: [
                "Menggunakan regex atau `.str.replace()` untuk menghapus 'Rp' dan titik terlebih dahulu",
                "Menjumlahkannya langsung",
                "Membuang baris tersebut seutuhnya",
                "Menyuruh pandas menebak dan mengonversi"
              ],
              answerIndex: 0,
              explanation: "Method spesifik string di pandas seperti `df['harga'].str.replace(...)` memungkinkan kita membersihkan karakter tak relevan sebelum membuang (cast) tipe string menjadi tipe numerik."
            }

          ],
        },
      ],
    },
  ],
};
