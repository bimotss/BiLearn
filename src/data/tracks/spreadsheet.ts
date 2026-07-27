import type { Track } from "@/lib/types";

export const spreadsheetTrack: Track = {
  slug: "spreadsheet",
  title: "Spreadsheet & Excel",
  description:
    "Pintu masuk jalur data: formula, pivot table, dashboard bisnis.",
  hours: 25,
  recommendedPrereqs: [],
  color: "bg-lime-600",
  icon: "📊",
  order: 14,
  modules: [
    {
      slug: "dasar-spreadsheet",
      title: "Dasar Spreadsheet",
      description:
        "Sel, formula, dan referensi — fondasi semua analisis di Excel/Sheets.",
      topics: [
        "Sel, range, dan tipe data (teks vs angka vs tanggal)",
        "Formula dasar: aritmetika, SUM, AVERAGE, COUNT",
        "Referensi relatif vs absolut ($A$1) — konsep kunci",
        "Autofill & pola",
        "Format angka, persen, mata uang, tanggal",
        "Sort & filter dasar",
        "Freeze pane & praktik tabel yang rapi",
      ],
      items: [
        {
          kind: "step",
          id: "sheet-1-1",
          title: "Sel, Range & Tipe Data",
          explanation:
            "Setiap kotak di spreadsheet disebut **Sel** (misal A1). Kumpulan beberapa sel disebut **Range** (misal A1:B10). Tipe data meliputi Teks, Angka, dan Tanggal.",
          example: {
            code: "=B1 + C1",
            output: "Menjumlahkan nilai sel A1 dan B1.",
            note: "Formula di Excel/Sheets selalu diawali dengan tanda sama dengan (=).",
          },
          instruction:
            "Hitung total penjumlahan dari sel A1 dan B1.",
          starterCode: "// Tulis formula di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*A1\\s*\\+\\s*B1",
              message: "Tuliskan: =A1 + B1",
            },
          ],
          solution: "=A1 + B1",
        },
        {
          kind: "step",
          id: "sheet-1-2",
          title: "Fungsi Agregasi Dasar (SUM, AVERAGE, COUNT)",
          explanation:
            "`=SUM(A1:A10)` menghitung total, `=AVERAGE(A1:A10)` menghitung rata-rata, dan `=COUNT(A1:A10)` menghitung jumlah sel ber-angka.",
          example: {
            code: "=SUM(A1:A10)",
            output: "Total jumlah angka dari rentang A1 hingga A10.",
            note: "Gunakan COUNTA jika ingin menghitung sel ber-isikan teks.",
          },
          instruction:
            "Hitung nilai rata-rata dari rentang sel B1 hingga B10.",
          starterCode: "// Tulis formula AVERAGE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*AVERAGE\\(\\s*B1:B10\\s*\\)",
              message: "Gunakan: =AVERAGE(B1:B10)",
            },
          ],
          solution: "=AVERAGE(B1:B10)",
        },
        {
          kind: "step",
          id: "sheet-1-3",
          title: "Referensi Relatif vs Absolut ($A$1)",
          explanation:
            "Bayangkan kamu memberi petunjuk arah. Referensi relatif (A1) seperti berkata 'maju dua langkah' — jika kamu mulai dari tempat berbeda, titik akhirnya ikut bergeser. Inilah mengapa formula A1 otomatis berubah saat di-copy ke bawah. Sebaliknya, Referensi Absolut (`$A$1`) seperti koordinat GPS yang terkunci mati. Tambahkan simbol `$` agar sel acuan (misalnya sel tarif pajak) tidak ikut bergeser saat kamu melakukan autofill ke sel lainnya.",
          example: {
            code: "=A2 * $B$1",
            output: "Perkalian harga A2 dengan nilai komisi absolut B1.",
            note: "Tekan F4 pada keyboard untuk mengubah A1 menjadi $A$1 secara cepat.",
          },
          instruction:
            "Kalikan nilai pada sel A2 dengan sel C1, dan pastikan referensi C1 terkunci secara absolut (baris dan kolom).",
          starterCode: "// Tulis formula absolut di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*A2\\s*\\*\\s*\\$C\\$1",
              message: "Gunakan: =A2 * $C$1",
            },
          ],
          solution: "=A2 * $C$1",
        },
        {
          kind: "step",
          id: "sheet-1-4",
          title: "Format Tanggal Menjadi Nama Hari",
          explanation:
            "Gunakan `=TEXT(A1, \"dddd\")` untuk mengubah data tanggal pada sel A1 menjadi nama hari lengkap.",
          example: {
            code: '=TEXT(B2, "dddd")',
            output: "Selasa",
            note: "Format 'dddd' menampilkan nama hari lengkap dalam bahasa lokal.",
          },
          instruction:
            "Konversikan data tanggal pada sel A1 menjadi nama hari lengkap menggunakan fungsi TEXT.",
          starterCode: "// Tulis formula TEXT di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TEXT\\(\\s*A1\\s*,\\s*[\"']dddd[\"']\\s*\\)",
              message: "Gunakan: =TEXT(A1, \"dddd\")",
            },
          ],
          solution: '=TEXT(A1, "dddd")',
        },
        {
          kind: "step",
          id: "sheet-1-5",
          title: "Kalkulasi Persentase Pencapaian",
          explanation:
            "Hitung persentase realisasi penjualan terhadap target dengan membagi sel penjualan (A2) dengan sel target (B2).",
          example: {
            code: "=C2 / D2",
            output: "0.50 (tampilan 50%)",
            note: "Ubah format tampilan sel ke Percentage setelah memasukkan formula.",
          },
          instruction:
            "Hitung persentase rasio realisasi penjualan pada sel A2 terhadap target pada sel B2.",
          starterCode: "// Tulis formula persentase di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*A2\\s*/\\s*B2",
              message: "Tuliskan: =A2 / B2",
            },
          ],
          solution: "=A2 / B2",
        },
        {
          kind: "step",
          id: "sheet-1-6",
          title: "Fungsi FILTER Dinamis",
          explanation:
            "Gunakan `=FILTER(A2:B20, B2:B20 > 100)` untuk menyaring rentang data secara dinamis berdasarkan kondisi tertentu.",
          example: {
            code: "=FILTER(A2:B10, B2:B10 > 50)",
            output: "Daftar baris yang kolom B-nya bernilai lebih besar dari 50.",
            note: "Filter tidak menghapus data asal, hanya menyajikan baris yang memenuhi syarat.",
          },
          instruction:
            "Gunakan fungsi FILTER untuk menyaring data rentang A2:B20 di mana nilai pada kolom B (B2:B20) lebih besar dari 100.",
          starterCode: "// Tulis formula FILTER di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*FILTER\\(\\s*A2:B20\\s*,\\s*B2:B20\\s*>\\s*100\\s*\\)",
              message: "Gunakan: =FILTER(A2:B20, B2:B20 > 100)",
            },
          ],
          solution: "=FILTER(A2:B20, B2:B20 > 100)",
        },
        {
          kind: "step",
          id: "sheet-1-7",
          title: "Penghitungan Jumlah Baris Data",
          explanation:
            "Gunakan `=COUNTA(A2:A100)` untuk menghitung total baris data yang terisi di bawah header.",
          example: {
            code: "=COUNTA(B2:B50)",
            output: "49",
            note: "COUNTA menghitung sel non-kosong baik berupa teks maupun angka.",
          },
          instruction:
            "Hitung banyaknya baris data yang terisi pada rentang A2:A100 di bawah baris judul menggunakan fungsi COUNTA.",
          starterCode: "// Tulis formula COUNTA di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*COUNTA\\(\\s*A2:A100\\s*\\)",
              message: "Gunakan: =COUNTA(A2:A100)",
            },
          ],
          solution: "=COUNTA(A2:A100)",
        },
        {
          kind: "quiz",
          id: "sheet-1-kuis",
          title: "Kuis: Dasar Spreadsheet",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Simbol apa yang digunakan untuk mengunci referensi sel menjadi Absolut (seperti $A$1) di Excel/Google Sheets?",
              choices: ["$", "#", "@", "%"],
              answerIndex: 0,
                            explanation: "Simbol Dolar ($) mengunci referensi kolom dan baris agar tidak bergeser saat formula di-copy ke sel lain.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa fungsi dari fitur Fill Handle di Spreadsheet?",
              choices: ["Meneruskan pola deret secara otomatis", "Menghapus seluruh sel", "Membuat baris menjadi tebal (Bold)", "Menghitung total baris dan kolom"],
              answerIndex: 0,
              explanation: "Fill Handle (titik kecil di sudut kanan bawah sel) berguna untuk menyalin formula atau meneruskan pola deret data.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Manakah format tampilan yang TIDAK merubah nilai asli pada sel?",
              choices: ["Semua benar", "Percentage", "Currency", "Accounting"],
              answerIndex: 0,
              explanation: "Format sel (Percentage, Currency, Date, dsb.) hanya mengubah tampilan visual tanpa merubah nilai matematis asli di latar belakang.",
            },
          ],
        },
      ],
    },
    {
      slug: "fungsi-analisis",
      title: "Fungsi untuk Analisis",
      description:
        "Fungsi yang dipakai analis setiap hari — dari IF sampai XLOOKUP.",
      topics: [
        "IF & nested IF / IFS",
        "SUMIF(S), COUNTIF(S), AVERAGEIF(S)",
        "VLOOKUP & kelemahannya",
        "XLOOKUP / INDEX-MATCH: pengganti yang benar",
        "Fungsi teks: LEFT, RIGHT, MID, TRIM, SUBSTITUTE",
        "Fungsi tanggal: TODAY, DATEDIF, EOMONTH",
        "Error handling: IFERROR & melacak #N/A",
      ],
      items: [
        {
          kind: "step",
          id: "sheet-2-1",
          title: "Fungsi Logika IF & IFS",
          explanation:
            "`=IF(kondisi, jika_true, jika_false)` mengembalikan nilai berbeda berdasarkan kondisi. Gunakan `IFS` untuk banyak kondisi bertingkat.",
          example: {
            code: '=IF(A1>=75, "Lulus", "Gagal")',
            output: "Mengembalikan string 'Lulus' jika nilai A1 >= 75.",
            note: "Fungsi IFS menggantikan nested IF yang bertingkat-tingkat.",
          },
          instruction:
            'Bandingkan nilai di sel sebelah (B2). Bila melebihi angka seribu, nyatakan sebagai Bonus. Sebaliknya, nyatakan Standar. Susun fungsi logika untuk kondisi ini.',
          starterCode: "// Tulis formula IF di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*IF\\(\\s*B2\\s*>\\s*1000\\s*,\\s*[\"']Bonus['\"]\\s*,\\s*[\"']Standar['\"]\\s*\\)",
              message: "Gunakan: =IF(B2>1000, \"Bonus\", \"Standar\")",
            },
          ],
          solution: '=IF(B2>1000, "Bonus", "Standar")',
        },
        {
          kind: "step",
          id: "sheet-2-2",
          title: "Agregasi Bersyarat (SUMIFS & COUNTIFS)",
          explanation:
            "`=SUMIFS(sum_range, criteria_range1, criteria1)` menghitung total nilai hanya pada baris yang memenuhi kriteria.",
          example: {
            code: '=SUMIFS(C1:C100, A1:A100, "Elektronik")',
            output: "Menghitung total penjualan khusus untuk kategori Elektronik.",
            note: "SUMIFS mendukung banyak kriteria penyaringan sekaligus.",
          },
          instruction:
            'Hitung total nilai di kolom C khusus untuk baris yang statusnya "Lunas" di kolom A. Susun fungsi SUMIFS-nya.',
          starterCode: "// Tulis formula SUMIFS di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUMIFS\\(\\s*C:C\\s*,\\s*A:A\\s*,\\s*[\"']Lunas['\"]\\s*\\)",
              message: "Gunakan: =SUMIFS(C:C, A:A, \"Lunas\")",
            },
          ],
          solution: '=SUMIFS(C:C, A:A, "Lunas")',
        },
        {
          kind: "step",
          id: "sheet-2-3",
          title: "Pencarian VLOOKUP & Kelemahannya",
          explanation:
            "VLOOKUP (Vertical Lookup) bekerja persis seperti mencari nomor telepon di buku telepon: kamu cari nama orang secara vertikal dari atas ke bawah, lalu setelah ketemu, melirik ke kanan untuk mencatat nomornya. VLOOKUP selalu mencari kunci pencarianmu (key) di kolom paling kiri dari rentang data (range), lalu mengambil data dari kolom ke-sekian (col_index) di baris yang sama. Parameter FALSE memastikan pencarian mencari kecocokan persis — bukan perkiraan.",
          example: {
            code: '=VLOOKUP(101, A1:D100, 2, FALSE)',
            output: "Mencari ID 101 dan mengambil nilai dari kolom ke-2.",
            note: "Kelemahan VLOOKUP: tidak bisa mencari ke arah kiri dan rawan rusak jika ada kolom disisipkan.",
          },
          instruction:
            'Gunakan VLOOKUP untuk mencari nilai tepat (exact match) A2 di rentang C1:D50, dan kembalikan nilai dari kolom ke-2.',
          starterCode: "// Tulis VLOOKUP di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*VLOOKUP\\(\\s*A2\\s*,\\s*C1:D50\\s*,\\s*2\\s*,\\s*FALSE\\s*\\)",
              message: "Gunakan: =VLOOKUP(A2, C1:D50, 2, FALSE)",
            },
          ],
          solution: "=VLOOKUP(A2, C1:D50, 2, FALSE)",
        },
        {
          kind: "step",
          id: "sheet-2-4",
          title: "Pengganti Modern: XLOOKUP",
          explanation:
            "`=XLOOKUP(lookup_val, lookup_array, return_array)` adalah pengganti modern VLOOKUP yang bisa mencari ke kiri & kanan secara tangguh.",
          example: {
            code: "=XLOOKUP(A2, C1:C100, B1:B100)",
            output: "Mencari nilai A2 di kolom C dan mengambil hasil dari kolom B.",
            note: "XLOOKUP secara default melakukan exact match (tanpa butuh parameter FALSE).",
          },
          instruction:
            "Gunakan fungsi pencarian modern XLOOKUP untuk mencari nilai A2 pada kolom B, dan mengembalikan hasil dari kolom C.",
          starterCode: "// Tulis XLOOKUP di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*XLOOKUP\\(\\s*A2\\s*,\\s*B:B\\s*,\\s*C:C\\s*\\)",
              message: "Gunakan: =XLOOKUP(A2, B:B, C:C)",
            },
          ],
          solution: "=XLOOKUP(A2, B:B, C:C)",
        },
        {
          kind: "step",
          id: "sheet-2-5",
          title: "Fungsi Manipulasi Teks (TRIM, LEFT, MID, RIGHT)",
          explanation:
            "`=TRIM(A1)` menghapus spasi ganda ekstra, `=LEFT(A1, 3)` mengambil 3 karakter dari kiri.",
          example: {
            code: '=TRIM("  Budi Sudarsono  ")',
            output: '"Budi Sudarsono"',
            note: "Sangat krusial untuk pembersihan data mentah.",
          },
          instruction:
            "Hapus semua spasi ekstra di awal, akhir, maupun antar kata pada sel A2.",
          starterCode: "// Tulis formula TRIM di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TRIM\\(\\s*A2\\s*\\)",
              message: "Tuliskan: =TRIM(A2)",
            },
          ],
          solution: "=TRIM(A2)",
        },
        {
          kind: "step",
          id: "sheet-2-6",
          title: "Fungsi Manipulasi Tanggal (TODAY, EOMONTH)",
          explanation:
            "`=TODAY()` mengembalikan tanggal hari ini, `=EOMONTH(A1, 0)` mengembalikan tanggal hari terakhir di bulan tersebut.",
          example: {
            code: "=EOMONTH(TODAY(), 0)",
            output: "Tanggal akhir bulan berjalan.",
            note: "Berguna untuk membuat laporan keuangan bulanan.",
          },
          instruction:
            "Gunakan fungsi yang bisa memanggil tanggal hari ini secara dinamis setiap kali lembar kerja dibuka.",
          starterCode: "// Tulis formula TODAY di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TODAY\\(\\)",
              message: "Tuliskan: =TODAY()",
            },
          ],
          solution: "=TODAY()",
        },
        {
          kind: "step",
          id: "sheet-2-7",
          title: "Penanganan Error dengan IFERROR",
          explanation:
            "Bungkus formula dengan `=IFERROR(formula, fallback)` agar tampilan tidak dipenuhi error `#N/A` atau `#VALUE!` saat data tak ditemukan.",
          example: {
            code: '=IFERROR(XLOOKUP(A2, B:B, C:C), "Tidak Ditemukan")',
            output: "Menampilkan 'Tidak Ditemukan' alih-alih error #N/A.",
            note: "Menjaga tampilan laporan bisnis tetap rapi.",
          },
          instruction:
            'Ketikkan fungsi VLOOKUP exact match untuk mencari A2 di B:C kolom 2, lalu bungkus fungsi tersebut dengan IFERROR agar menampilkan angka 0 jika error.',
          starterCode: "// Tulis IFERROR di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*IFERROR\\(\\s*VLOOKUP\\(\\s*A2\\s*,\\s*B:C\\s*,\\s*2\\s*,\\s*FALSE\\s*\\)\\s*,\\s*0\\s*\\)",
              message: "Gunakan: =IFERROR(VLOOKUP(A2, B:C, 2, FALSE), 0)",
            },
          ],
          solution: "=IFERROR(VLOOKUP(A2, B:C, 2, FALSE), 0)",
        },
        {
          kind: "quiz",
          id: "sheet-2-kuis",
          title: "Kuis: Fungsi untuk Analisis",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Fungsi pencarian modern apa di Excel/Google Sheets yang direkomendasikan menggantikan VLOOKUP karena bisa mencari ke arah kiri dan tidak rawan rusak saat disisipi kolom?",
              choices: ["XLOOKUP", "HLOOKUP", "SUMIF", "LOOKUP_LEFT"],
              answerIndex: 0,
                            explanation: "XLOOKUP adalah pengganti modern VLOOKUP yang lebih fleksibel, cepat, dan tangguh.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Fungsi apa yang dapat membungkus rumus lain agar mencegah error #N/A muncul di layar, lalu menampilkannya sebagai teks alternatif?",
              choices: ["IFERROR", "ERRORIF", "NATCHECK", "IFNA"],
              answerIndex: 0,
              explanation: "IFERROR berguna untuk menjebak error apa saja, lalu menggantinya dengan nilai kosong (\" \") atau fallback yang kita inginkan.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Jika ingin menghitung JUMLAH BARIS dari pegawai berstatus 'Lulus', kamu harus menggunakan fungsi...",
              choices: ["COUNTIF", "SUMIF", "AVERAGEIF", "COUNT"],
              answerIndex: 0,
              explanation: "COUNTIF bertugas menghitung BANYAKNYA kemunculan sel, sedangkan SUMIF menghitung TOTAL nilainya.",
            },
          ],
        },
      ],
    },
    {
      slug: "pembersihan-data",
      title: "Pembersihan Data",
      description:
        "80% pekerjaan data adalah membersihkan — mulai biasakan di sini.",
      topics: [
        "Data berantakan: spasi, duplikat, format campur",
        "Remove duplicates & TRIM/CLEAN",
        "Text to columns & split",
        "Find & replace dengan pola",
        "Validasi data & dropdown",
        "Standarisasi kategori (Jakarta vs JAKARTA vs jkt)",
        "Checklist kualitas data sebelum analisis",
      ],
      items: [
        {
          kind: "step",
          id: "sheet-3-1",
          title: "Membersihkan Spasi Liar dengan TRIM",
          explanation:
            "Fungsi `=TRIM(A2)` menghapus spasi awal, spasi akhir, dan spasi ganda yang tidak terlihat di teks.",
          example: {
            code: '=TRIM("  Budi  Sudarsono  ")',
            output: "Budi Sudarsono",
            note: "TRIM sangat penting dipanggil sebelum analisis atau pemrosesan VLOOKUP.",
          },
          instruction:
            "Hapus seluruh spasi berlebih pada teks sel A2 menggunakan fungsi TRIM.",
          starterCode: "// Tulis formula TRIM di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TRIM\\(\\s*A2\\s*\\)",
              message: "Gunakan: =TRIM(A2)",
            },
          ],
          solution: "=TRIM(A2)",
        },
        {
          kind: "step",
          id: "sheet-3-2",
          title: "Menghapus Duplikat (Remove Duplicates)",
          explanation:
            "Gunakan fitur `Data > Remove Duplicates` atau fungsi `=UNIQUE(range)` untuk menyaring data duplikat secara otomatis.",
          example: {
            code: "=UNIQUE(A1:A100)",
            output: "Daftar unik tanpa ada pengulangan baris.",
            note: "Sangat berguna untuk mengekstrak daftar master pelanggan/produk.",
          },
          instruction:
            "Hasilkan daftar nilai yang unik saja (tanpa pengulangan) dari rentang sel A1 hingga A50.",
          starterCode: "// Tulis formula UNIQUE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*UNIQUE\\(\\s*A1:A50\\s*\\)",
              message: "Tuliskan: =UNIQUE(A1:A50)",
            },
          ],
          solution: "=UNIQUE(A1:A50)",
        },
        {
          kind: "step",
          id: "sheet-3-3",
          title: "Memecah Teks dengan Text to Columns / SPLIT",
          explanation:
            "Gunakan `Text to Columns` atau fungsi `=SPLIT(text, delimiter)` untuk memisahkan teks gabungan (seperti Nama Depan & Belakang).",
          example: {
            code: '=SPLIT(A1, " ")',
            output: "Nama 'Budi Sudarsono' terpisah ke 2 sel: 'Budi' dan 'Sudarsono'.",
            note: "Karakter pemisah (delimiter) bisa berupa koma, spasi, atau titik koma.",
          },
          instruction:
            'Pisahkan teks pada sel A2 ke dalam beberapa kolom berdasarkan karakter koma (,).',
          starterCode: "// Tulis formula SPLIT di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SPLIT\\(\\s*A2\\s*,\\s*[\"'],[\"']\\s*\\)",
              message: 'Gunakan: =SPLIT(A2, ",")',
            },
          ],
          solution: '=SPLIT(A2, ",")',
        },
        {
          kind: "step",
          id: "sheet-3-4",
          title: "Find & Replace Karakter Khusus",
          explanation:
            "Gunakan `Ctrl+H` (Find & Replace) atau `=SUBSTITUTE(text, old, new)` untuk merapikan karakter tidak standar.",
          example: {
            code: '=SUBSTITUTE(A1, "Rp ", "")',
            output: "Menghapus awalan teks 'Rp ' dari string harga.",
            note: "Mengubah kolom teks angka menjadi nilai numerik sejati.",
          },
          instruction:
            'Gantikan setiap karakter strip (-) yang ada pada teks di sel A2 menjadi kosong (tanpa spasi/tidak ada karakter).',
          starterCode: "// Tulis formula SUBSTITUTE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUBSTITUTE\\(\\s*A2\\s*,\\s*[\"']-[\"']\\s*,\\s*[\"'][\"']\\s*\\)",
              message: 'Gunakan: =SUBSTITUTE(A2, "-", "")',
            },
          ],
          solution: '=SUBSTITUTE(A2, "-", "")',
        },
        {
          kind: "step",
          id: "sheet-3-5",
          title: "Validasi Teks dengan IF & OR",
          explanation:
            "Gunakan `=IF(OR(A2=\"Lunas\", A2=\"Pending\"), A2, \"Invalid\")` untuk mengecek validitas status data secara otomatis.",
          example: {
            code: '=IF(OR(B2="Aktif", B2="Nonaktif"), B2, "Salah")',
            output: "Aktif",
            note: "Memastikan data memenuhi opsi status yang diperbolehkan.",
          },
          instruction:
            "Periksa apakah teks sel A2 bernilai 'Lunas' atau 'Pending' menggunakan kombinasi IF dan OR. Jika valid kembalikan A2, jika salah kembalikan 'Invalid'.",
          starterCode: "// Tulis formula validasi di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*IF\\(\\s*OR\\(\\s*A2\\s*=\\s*[\"']Lunas[\"']\\s*,\\s*A2\\s*=\\s*[\"']Pending[\"']\\s*\\)\\s*,\\s*A2\\s*,\\s*[\"']Invalid[\"']\\s*\\)",
              message: 'Gunakan: =IF(OR(A2="Lunas", A2="Pending"), A2, "Invalid")',
            },
          ],
          solution: '=IF(OR(A2="Lunas", A2="Pending"), A2, "Invalid")',
        },
        {
          kind: "step",
          id: "sheet-3-6",
          title: "Standarisasi Casing Teks (PROPER, UPPER, LOWER)",
          explanation:
            "`=PROPER(A1)` mengubah format teks menjadi Huruf Kapital Awal Kata (Title Case).",
          example: {
            code: '=PROPER("budi sudarsono")',
            output: '"Budi Sudarsono"',
            note: "Gunakan UPPER() untuk huruf kapital semua dan LOWER() untuk huruf kecil semua.",
          },
          instruction:
            "Ubah format teks pada sel A2 menjadi berawalan huruf kapital pada setiap kata (Title Case).",
          starterCode: "// Tulis formula PROPER di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*PROPER\\(\\s*A2\\s*\\)",
              message: "Tuliskan: =PROPER(A2)",
            },
          ],
          solution: "=PROPER(A2)",
        },
        {
          kind: "step",
          id: "sheet-3-7",
          title: "Menghitung Jumlah Duplikat Data",
          explanation:
            "Hitung selisih total baris dengan total baris unik `=COUNTA(A1:A50) - COUNTA(UNIQUE(A1:A50))` untuk menemukan jumlah duplikat.",
          example: {
            code: "=COUNTA(B1:B20) - COUNTA(UNIQUE(B1:B20))",
            output: "2",
            note: "Mengevaluasi kebersihan data sebelum dilakukan agregasi.",
          },
          instruction:
            "Hitung berapa banyak baris duplikat di rentang A1:A50 dengan mengurangkan COUNTA(A1:A50) dan COUNTA(UNIQUE(A1:A50)).",
          starterCode: "// Tulis formula hitung duplikat di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*COUNTA\\(\\s*A1:A50\\s*\\)\\s*-\\s*COUNTA\\(\\s*UNIQUE\\(\\s*A1:A50\\s*\\)\\s*\\)",
              message: "Gunakan: =COUNTA(A1:A50) - COUNTA(UNIQUE(A1:A50))",
            },
          ],
          solution: "=COUNTA(A1:A50) - COUNTA(UNIQUE(A1:A50))",
        },
        {
          kind: "quiz",
          id: "sheet-3-kuis",
          title: "Kuis: Pembersihan Data",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Fungsi teks apa di Spreadsheet yang digunakan untuk mengubah string teks menjadi format kapital pada setiap awal kata (Title Case)?",
              choices: ["PROPER", "UPPER", "CAPITAL", "TITLE"],
              answerIndex: 0,
                            explanation: "Fungsi PROPER mengubah karakter pertama setiap kata menjadi huruf besar dan huruf sisanya menjadi kecil.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa kegunaan utama dari fitur 'Data Validation' > 'List' pada sel lembar kerja?",
              choices: ["Memaksa pengguna memilih opsi dari dropdown yang ada untuk menjaga konsistensi", "Mencegah virus Excel berjalan", "Memeriksa apakah data tersebut ada di database online", "Mengenkripsi kolom agar tidak bisa dibaca"],
              answerIndex: 0,
              explanation: "Membuat dropdown di sel memastikan pengguna mengisi teks dengan ejaan dan spasi yang persis seperti yang kamu mau.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Fungsi spreadsheet apa yang menghapus semua ruang spasi kosong ganda di antara kata, serta menghapus spasi awal dan akhir (kecuali spasi tunggal di antara kata)?",
              choices: ["TRIM", "CLEAN", "STRIP", "SPLIT"],
              answerIndex: 0,
              explanation: "TRIM secara otomatis sangat membantu ketika kita mengopi data yang kotor dari situs web atau sistem lain ke spreadsheet.",
            },
          ],
        },
      ],
    },
    {
      slug: "pivot-table",
      title: "Pivot Table",
      description:
        "Alat analisis paling powerful di spreadsheet — ringkas jutaan baris tanpa formula.",
      topics: [
        "Konsep pivot: rows, columns, values, filters",
        "Agregasi: sum, count, average, % of total",
        "Group by tanggal (bulan, kuartal, tahun)",
        "Calculated field",
        "Pivot untuk menjawab pertanyaan bisnis bertingkat",
        "Slicer untuk dashboard interaktif",
        "Refresh & sumber data yang berubah",
      ],
      items: [
        {
          kind: "step",
          id: "sheet-4-1",
          title: "Agregasi Total per Kategori (SUMIF)",
          explanation:
            "Formula `=SUMIF(A2:A100, \"Elektronik\", B2:B100)` mereplikasi agregasi Pivot Table untuk total nilai kategori tertentu.",
          example: {
            code: '=SUMIF(A2:A50, "Pakaian", B2:B50)',
            output: "7500000",
            note: "Alat agregasi cepat tanpa harus mengubah tata letak sheet.",
          },
          instruction:
            "Hitung total nilai penjualan untuk kategori 'Elektronik' pada rentang Kategori A2:A100 dan Nilai B2:B100 menggunakan fungsi SUMIF.",
          starterCode: "// Tulis SUMIF di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUMIF\\(\\s*A2:A100\\s*,\\s*[\"']Elektronik[\"']\\s*,\\s*B2:B100\\s*\\)",
              message: "Gunakan: =SUMIF(A2:A100, \"Elektronik\", B2:B100)",
            },
          ],
          solution: '=SUMIF(A2:A100, "Elektronik", B2:B100)',
        },
        {
          kind: "step",
          id: "sheet-4-2",
          title: "Hitung Proporsi Kategori terhadap Total",
          explanation:
            "Hitung kontribusi persentase kategori terhadap total keseluruhan dengan formula `=SUMIF(A2:A100, \"Elektronik\", B2:B100) / SUM(B2:B100)`.",
          example: {
            code: '=SUMIF(A2:A50, "Pakaian", B2:B50) / SUM(B2:B50)',
            output: "0.20 (tampilan 20%)",
            note: "Sangat berguna untuk analisis kontribusi penjualan (Pareto).",
          },
          instruction:
            "Hitung proporsi persentase penjualan kategori 'Elektronik' (A2:A100, B2:B100) terhadap total seluruh penjualan SUM(B2:B100).",
          starterCode: "// Tulis formula proporsi di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUMIF\\(\\s*A2:A100\\s*,\\s*[\"']Elektronik[\"']\\s*,\\s*B2:B100\\s*\\)\\s*/\\s*SUM\\(\\s*B2:B100\\s*\\)",
              message: "Gunakan: =SUMIF(A2:A100, \"Elektronik\", B2:B100) / SUM(B2:B100)",
            },
          ],
          solution: '=SUMIF(A2:A100, "Elektronik", B2:B100) / SUM(B2:B100)',
        },
        {
          kind: "step",
          id: "sheet-4-3",
          title: "Pengelompokan Bulan dan Tahun",
          explanation:
            "Konversi tanggal pada sel A2 menjadi format tahun-bulan (`\"yyyy-mm\"`) menggunakan fungsi `=TEXT(A2, \"yyyy-mm\")`.",
          example: {
            code: '=TEXT(B2, "yyyy-mm")',
            output: "2026-07",
            note: "Memudahkan pengelompokan laporan berkala bulanan.",
          },
          instruction:
            "Ekstrak kelompok tahun dan bulan dari tanggal sel A2 menjadi format \"yyyy-mm\" menggunakan fungsi TEXT.",
          starterCode: "// Tulis formula TEXT tanggal di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TEXT\\(\\s*A2\\s*,\\s*[\"']yyyy-mm[\"']\\s*\\)",
              message: "Gunakan: =TEXT(A2, \"yyyy-mm\")",
            },
          ],
          solution: '=TEXT(A2, "yyyy-mm")',
        },
        {
          kind: "step",
          id: "sheet-4-4",
          title: "Kalkulasi Profit Margin",
          explanation:
            "Hitung nilai keuntungan (Profit) dengan mengurangkan Omset di sel B2 dengan Modal di sel C2 (`=B2 - C2`).",
          example: {
            code: "=D2 - E2",
            output: "250000",
            note: "Dapat dijadikan calculated field atau kolom kalkulasi mandiri.",
          },
          instruction:
            "Hitung nilai keuntungan bersih pada sel B2 (Omset) dikurangi sel C2 (Modal).",
          starterCode: "// Tulis formula pengurangan di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*B2\\s*-\\s*C2",
              message: "Tuliskan: =B2 - C2",
            },
          ],
          solution: "=B2 - C2",
        },
        {
          kind: "step",
          id: "sheet-4-5",
          title: "Multi-Kriteria Agregasi (SUMIFS)",
          explanation:
            "Gunakan `=SUMIFS(C2:C100, A2:A100, \"Jakarta\", B2:B100, \"Budi\")` untuk menghitung total penjualan bertingkat berdasarkan Wilayah dan Salesman.",
          example: {
            code: '=SUMIFS(C2:C50, A2:A50, "Bandung", B2:B50, "Siti")',
            output: "4200000",
            note: "SUMIFS menerima banyak pasangan kondisi (rentang_kriteria, kriteria).",
          },
          instruction:
            "Hitung total nilai C2:C100 untuk Wilayah 'Jakarta' (A2:A100) dan Salesman 'Budi' (B2:B100) menggunakan fungsi SUMIFS.",
          starterCode: "// Tulis SUMIFS multi-kriteria di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUMIFS\\(\\s*C2:C100\\s*,\\s*A2:A100\\s*,\\s*[\"']Jakarta[\"']\\s*,\\s*B2:B100\\s*,\\s*[\"']Budi[\"']\\s*\\)",
              message: "Gunakan: =SUMIFS(C2:C100, A2:A100, \"Jakarta\", B2:B100, \"Budi\")",
            },
          ],
          solution: '=SUMIFS(C2:C100, A2:A100, "Jakarta", B2:B100, "Budi")',
        },
        {
          kind: "step",
          id: "sheet-4-6",
          title: "Penyaringan Data Berstatus Lunas",
          explanation:
            "Gunakan `=FILTER(A2:C100, C2:C100 = \"Lunas\")` untuk mengambil seluruh baris data berstatus Lunas.",
          example: {
            code: '=FILTER(A2:C50, C2:C50 = "Proses")',
            output: "Baris data yang statusnya Proses.",
            note: "Menyediakan data dinamis untuk dashboard tanpa membuat pivot baru.",
          },
          instruction:
            "Saring seluruh baris data dari rentang A2:C100 di mana nilai kolom C (C2:C100) bernilai 'Lunas' menggunakan FILTER.",
          starterCode: "// Tulis FILTER status Lunas di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*FILTER\\(\\s*A2:C100\\s*,\\s*C2:C100\\s*=\\s*[\"']Lunas[\"']\\s*\\)",
              message: "Gunakan: =FILTER(A2:C100, C2:C100 = \"Lunas\")",
            },
          ],
          solution: '=FILTER(A2:C100, C2:C100 = "Lunas")',
        },
        {
          kind: "step",
          id: "sheet-4-7",
          title: "Tabel Agregasi Otomatis dengan QUERY",
          explanation:
            "Gunakan `=QUERY(A1:B100, \"SELECT A, SUM(B) GROUP BY A\")` untuk membuat tabel ringkasan dinamis yang otomatis ter-update.",
          example: {
            code: '=QUERY(A1:B50, "SELECT A, AVERAGE(B) GROUP BY A")',
            output: "Tabel 2 kolom berisi Kategori dan Rata-rata Penjualan.",
            note: "Fungsi QUERY sangat powerful di Google Sheets menggunakan sintaks mirip SQL.",
          },
          instruction:
            "Buat agregasi total penjualan (SUM(B)) per kategori (GROUP BY A) dari rentang data A1:B100 menggunakan fungsi QUERY.",
          starterCode: "// Tulis QUERY agregasi di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*QUERY\\(\\s*A1:B100\\s*,\\s*[\"']SELECT A, SUM\\(B\\) GROUP BY A[\"']\\s*\\)",
              message: "Gunakan: =QUERY(A1:B100, \"SELECT A, SUM(B) GROUP BY A\")",
            },
          ],
          solution: '=QUERY(A1:B100, "SELECT A, SUM(B) GROUP BY A")',
        },
        {
          kind: "quiz",
          id: "sheet-4-kuis",
          title: "Kuis: Pivot Table",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Fitur visual apa di Excel/Sheets yang menyediakan tombol filter interaktif di atas Pivot Table untuk mempermudah eksekutif menyaring data?",
              choices: ["Slicer", "Calculated Field", "Sparkline", "VLOOKUP"],
              answerIndex: 0,
                            explanation: "Slicer adalah tombol filter visual interaktif yang memudahkan penyaringan data di Pivot Table dan Dashboard.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apakah Pivot Table akan langsung berubah seketika itu juga (1 detik) bila kita mengganti satu angka di Data Sumber-nya?",
              choices: ["Tidak, kita harus mengklik 'Refresh' Pivot Table tersebut", "Ya, akan otomatis berubah seperti halnya fungsi SUM", "Tidak, Pivot Table hanya sekali pakai", "Ya, tetapi butuh waktu 1 menit untuk sinkronisasi"],
              answerIndex: 0,
              explanation: "Pivot Table memuat datanya di memori terpisah (cache) agar analisis bisa berjalan cepat. Karena itu kita perlu klik 'Refresh' tiap ada pergantian data asal.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagian dari menu Pivot Table yang memungkinkan kita membuat formula perhitungan metrik baru tanpa menyentuh tabel data mentah disebut...",
              choices: ["Calculated Field", "Pivot Formula", "Custom Metrics", "Slicer Formula"],
              answerIndex: 0,
              explanation: "Calculated Field sangat membantu membuat metrik seperti 'Laba Bersih' atau rasio-rasio tanpa harus memberatkan file data sumber aslinya.",
            },
          ],
        },
      ],
    },
    {
      slug: "chart-dashboard",
      title: "Chart & Dashboard",
      description:
        "Visualisasi yang jujur dan dashboard yang dipakai bos setiap Senin.",
      topics: [
        "Memilih chart: bar vs line vs pie (dan kapan pie itu dosa)",
        "Membuat & memformat chart yang bersih",
        "Conditional formatting untuk insight cepat",
        "Sparkline",
        "Menyusun dashboard satu layar: KPI, tren, breakdown",
        "Prinsip desain: hierarki, warna, decluttering",
      ],
      items: [
        {
          kind: "step",
          id: "sheet-5-1",
          title: "Menghitung Rata-rata Bergerak (Moving Average)",
          explanation:
            "Hitung rata-rata 3 periode terakhir `=AVERAGE(B2:B4)` untuk memperhalus grafik tren penjualan.",
          example: {
            code: "=AVERAGE(C2:C5)",
            output: "18500000",
            note: "Digunakan untuk menghaluskan fluktuasi grafik garis tren.",
          },
          instruction:
            "Hitung rata-rata penjualan 3 bulan pertama (sel B2 hingga B4) menggunakan fungsi AVERAGE.",
          starterCode: "// Tulis AVERAGE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*AVERAGE\\(\\s*B2:B4\\s*\\)",
              message: "Gunakan: =AVERAGE(B2:B4)",
            },
          ],
          solution: "=AVERAGE(B2:B4)",
        },
        {
          kind: "step",
          id: "sheet-5-2",
          title: "Kalkulasi Rentang Variasi Data",
          explanation:
            "Hitung rentang selisih antara nilai tertinggi dan terendah pada kolom data B2:B30 (`=MAX(B2:B30) - MIN(B2:B30)`).",
          example: {
            code: "=MAX(C2:C10) - MIN(C2:C10)",
            output: "1200000",
            note: "Menilai skala sebaran data sebelum menentukan batas sumbu grafik.",
          },
          instruction:
            "Hitung selisih antara nilai tertinggi MAX(B2:B30) dan terendah MIN(B2:B30) dari rentang sel B2:B30.",
          starterCode: "// Tulis formula rentang di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*MAX\\(\\s*B2:B30\\s*\\)\\s*-\\s*MIN\\(\\s*B2:B30\\s*\\)",
              message: "Gunakan: =MAX(B2:B30) - MIN(B2:B30)",
            },
          ],
          solution: "=MAX(B2:B30) - MIN(B2:B30)",
        },
        {
          kind: "step",
          id: "sheet-5-3",
          title: "Formula Pengondisian Sel Negatif",
          explanation:
            "Evaluasi apakah nilai sel B2 kurang dari 0 dengan `=B2 < 0` yang mengembalikan `TRUE` atau `FALSE`.",
          example: {
            code: "=C2 < 0",
            output: "FALSE",
            note: "Digunakan sebagai dasar aturan Conditional Formatting.",
          },
          instruction:
            "Tuliskan formula evaluasi logika untuk mengecek apakah nilai di sel B2 bernilai negatif (kurang dari 0).",
          starterCode: "// Tulis logika B2 kurang dari 0 di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*B2\\s*<\\s*0",
              message: "Gunakan: =B2 < 0",
            },
          ],
          solution: "=B2 < 0",
        },
        {
          kind: "step",
          id: "sheet-5-4",
          title: "Grafik Mini di Dalam Sel (Sparklines)",
          explanation:
            "Gunakan fungsi `=SPARKLINE(A1:L1)` untuk menggambar grafik tren mini di dalam 1 sel tabel.",
          example: {
            code: '=SPARKLINE(A1:L1, {"charttype", "line"})',
            output: "Grafik garis mini muncul di dalam sel.",
            note: "Sangat menghemat ruang pada lembar kerja KPI executive summary.",
          },
          instruction:
            "Gambarkan grafik mini tunggal di dalam sel berdasarkan deretan nilai dari A1 hingga A12.",
          starterCode: "// Tulis formula SPARKLINE di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SPARKLINE\\(\\s*A1:A12\\s*\\)",
              message: "Tuliskan: =SPARKLINE(A1:A12)",
            },
          ],
          solution: "=SPARKLINE(A1:A12)",
        },
        {
          kind: "step",
          id: "sheet-5-5",
          title: "Hitung Metrik KPI Utama",
          explanation:
            "Hitung akumulasi total omset pada rentang B2:B100 dengan `=SUM(B2:B100)` untuk kartu KPI utama dashboard.",
          example: {
            code: "=SUM(C2:C50)",
            output: "120000000",
            note: "Angka KPI utama diletakkan di posisi paling atas dashboard.",
          },
          instruction:
            "Hitung total akumulasi angka penjualan di seluruh kolom B (B2:B100) menggunakan fungsi SUM.",
          starterCode: "// Tulis SUM KPI di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUM\\(\\s*B2:B100\\s*\\)",
              message: "Gunakan: =SUM(B2:B100)",
            },
          ],
          solution: "=SUM(B2:B100)",
        },
        {
          kind: "step",
          id: "sheet-5-6",
          title: "Penentuan Status Poin Sorotan",
          explanation:
            "Gunakan `=IF(B2 = MAX($B$2:$B$12), \"Highlight\", \"Normal\")` untuk menandai titik tertinggi pada chart.",
          example: {
            code: '=IF(C2 = MAX($C$2:$C$10), "Top", "Other")',
            output: "Top",
            note: "Memberikan penanda visual otomatis pada titik data maksimum.",
          },
          instruction:
            "Buat pengondisian logika IF: jika nilai B2 sama dengan nilai tertinggi MAX($B$2:$B$12), kembalikan 'Highlight', jika tidak kembalikan 'Normal'.",
          starterCode: "// Tulis IF highlight di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*IF\\(\\s*B2\\s*=\\s*MAX\\(\\s*\\$B\\$2:\\$B\\$12\\s*\\)\\s*,\\s*[\"']Highlight[\"']\\s*,\\s*[\"']Normal[\"']\\s*\\)",
              message: 'Gunakan: =IF(B2 = MAX($B$2:$B$12), "Highlight", "Normal")',
            },
          ],
          solution: '=IF(B2 = MAX($B$2:$B$12), "Highlight", "Normal")',
        },
        {
          kind: "quiz",
          id: "sheet-5-kuis",
          title: "Kuis: Chart & Dashboard",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Jenis grafik apa di Spreadsheet yang paling tepat digunakan untuk menggambarkan Tren perubahan data dari waktu ke waktu (time-series)?",
              choices: ["Line Chart (Grafik Garis)", "Pie Chart", "Scatter Plot", "Radar Chart"],
              answerIndex: 0,
                            explanation: "Line Chart (Grafik Garis) adalah pilihan paling tepat untuk menggambarkan tren kontinuitas data seiring berjalannya waktu.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Grafik apakah yang digambar berbentuk mini, letaknya masuk di dalam satu sel individu, dan sangat ampuh untuk Dashboard?",
              choices: ["Sparkline", "Microchart", "Cellchart", "Linechart"],
              answerIndex: 0,
              explanation: "Sparklines sangat hemat ruang sehingga pas ditempatkan pada sel-sel KPI yang ringkas.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Aturan decluttering terbaik terhadap elemen 'Gridlines' (garis pembantu latar belakang grafik) adalah...",
              choices: ["Membuatnya transparan/menghapusnya agar fokus tertuju ke data grafik", "Mewarnainya merah supaya jelas pembacaan sumbu Y-nya", "Mempertebal garisnya supaya angka presisi", "Diubah bentuknya ke garis putus-putus berwarna emas"],
              answerIndex: 0,
              explanation: "Semakin bersih sebuah grafik dari tinta/elemen yang kurang bermakna, semakin tajam dan jelas pesan datanya.",
            },
          ],
        },
      ],
    },
    {
      slug: "studi-kasus",
      title: "Studi Kasus Bisnis",
      description:
        "Mengikat semuanya: dari data mentah sampai rekomendasi.",
      topics: [
        "Kasus penjualan retail: cleaning → pivot → dashboard",
        "Kasus keuangan UMKM: arus kas & margin",
        "Kasus HR: absensi & turnover",
        "Menyusun insight tertulis dari angka",
        "Menyiapkan file untuk dibagikan (proteksi, komentar)",
      ],
      items: [
        {
          kind: "step",
          id: "sheet-6-1",
          title: "Pembersihan & Standarisasi Teks Gabungan",
          explanation:
            "Gabungkan `=TRIM(PROPER(A2))` untuk menghapus spasi liar sekaligus mengubah format kapital awal kata.",
          example: {
            code: '=TRIM(PROPER("  budi sudarsono  "))',
            output: "Budi Sudarsono",
            note: "Formula kombinasi paling sering dipakai pada pipeline data cleaning awal.",
          },
          instruction:
            "Bersihkan spasi berlebih dan format huruf kapital awal kata pada teks sel A2 menggunakan kombinasi TRIM dan PROPER.",
          starterCode: "// Tulis TRIM PROPER di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TRIM\\(\\s*PROPER\\(\\s*A2\\s*\\)\\s*\\)",
              message: "Gunakan: =TRIM(PROPER(A2))",
            },
          ],
          solution: "=TRIM(PROPER(A2))",
        },
        {
          kind: "step",
          id: "sheet-6-2",
          title: "Analisis Arus Kas & Margin Keuangan UMKM",
          explanation:
            "Hitung **Gross Profit Margin** dengan formula `=(Penjualan - HPP) / Penjualan` untuk mengevaluasi kesehatan bisnis.",
          example: {
            code: "=(B2 - A2) / B2",
            output: "Menghasilkan persentase margin keuntungan kotor 35%.",
            note: "Format sel hasil perhitungan ke dalam bentuk persentase (%).",
          },
          instruction:
            "Hitung rasio Gross Margin jika sel C2 adalah Pendapatan (Penjualan) dan sel D2 adalah Harga Pokok Penjualan (HPP).",
          starterCode: "// Tulis formula Gross Margin di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*\\(\\s*C2\\s*-\\s*D2\\s*\\)\\s*/\\s*C2",
              message: "Gunakan: =(C2 - D2) / C2",
            },
          ],
          solution: "=(C2 - D2) / C2",
        },
        {
          kind: "step",
          id: "sheet-6-3",
          title: "Analisis HR: Menghitung Tingkat Turnover Karyawan",
          explanation:
            "Hitung **Turnover Rate** `= (Jumlah Karyawan Resign / Rata-rata Karyawan) * 100` menggunakan kombinasi `COUNTIF`.",
          example: {
            code: '=COUNTIF(StatusRange, "Resign") / AVERAGE(TotalStaffRange)',
            output: "Persentase tingkat turnover karyawan periode tahunan.",
            note: "Menyediakan metrik objektif bagi divisi HR.",
          },
          instruction:
            'Hitung ada berapa banyak baris di rentang A1 hingga A100 yang memiliki teks persis "Resign".',
          starterCode: "// Tulis COUNTIF Resign di sini\n",
          language: "text",
          tests: [
            {
              pattern: "=\\s*COUNTIF\\(\\s*A1:A100\\s*,\\s*[\"']Resign['\"]\\s*\\)",
              message: "Gunakan: =COUNTIF(A1:A100, \"Resign\")",
            },
          ],
          solution: '=COUNTIF(A1:A100, "Resign")',
        },
        {
          kind: "step",
          id: "sheet-6-4",
          title: "Menyusun Insight Tertulis dari Angka",
          explanation:
            "Angka tanpa cerita tidak berguna bagi manajemen! Sertakan **Executive Summary** 3 baris: 1. Temuan Utama, 2. Penyebab, 3. Rekomendasi Aksi.",
          example: {
            code: "Summary: 'Penjualan Kopi turun 12% akibat kehabisan stok di Cabang A. Rekomendasi: Restock otomatis tiap Selasa.'",
            output: "Teks ringkasan tiga baris siap disalin ke email.",
            note: "Fokus pada 'So What?' dan 'What Next?' dari data.",
          },
          instruction:
            "Bagian paling krusial yang wajib dibaca oleh manajemen (sering ditaruh paling depan/atas dokumen) berisi temuan, penyebab, dan usulan solusi disebut apa? (2 kata dalam bahasa Inggris, berawalan E dan S).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(Executive Summary|executive summary)",
              message: "Tulis Executive Summary",
            },
          ],
          solution: "Executive Summary",
        },
        {
          kind: "step",
          id: "sheet-6-5",
          title: "Proteksi File & Hak Akses Berbagi",
          explanation:
            "Kunci sel formula menggunakan **Protect Sheet / Protect Range** agar rekan tim tidak secara tidak sengaja merusak formula hitungan.",
          example: {
            code: "Review > Protect Sheet > Allow Users to Edit: Unlocked Cells Only",
            output: "Muncul pesan error saat pengguna mencoba mengubah isi sel formula.",
            note: "Langkah penting sebelum membagikan berkas ke tim operasional.",
          },
          instruction:
            "Fitur apa yang bisa mengunci rentang sel di Excel agar tidak bisa diedit oleh orang lain?",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(Protect Sheet|protect sheet)",
              message: "Tulis Protect Sheet",
            },
          ],
          solution: "Protect Sheet",
        },
        {
          kind: "quiz",
          id: "sheet-6-kuis",
          title: "Kuis: Studi Kasus Bisnis",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Komponen apa yang wajib disertakan pada akhir laporan analisis data agar hasil angka bermanfaat bagi jajaran manajemen?",
              choices: [
                "Executive Summary berisi temuan utama dan Rekomendasi Aksi Nyata (Actionable Insights)",
                "Menghapus seluruh grafik",
                "Mengubah warna font menjadi putih",
                "Menyimpan file sebagai PDF saja",
              ],
              answerIndex: 0,
                            explanation: "Angka analisis baru memberikan nilai bisnis nyata ketika disertai Executive Summary dan Rekomendasi Aksi yang jelas.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Untuk menjaga kerahasiaan formula kalkulasi gaji pegawai saat mengirimkan ke divisi lain, alat Excel/Sheets apa yang harus kamu pasang?",
              choices: ["Protect Sheet / Protect Range", "Freeze Panes", "Hide Columns", "Conditional Formatting"],
              answerIndex: 0,
              explanation: "Protect Sheet (Lock) menjamin formula atau tabel sumber tidak bisa secara sengaja/tak sengaja ditimpa orang lain.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Di tahapan alur Pipeline analisis (Cleaning > Pivot > Dashboard), tahap manakah yang secara praktik di industri paling memakan waktu, tenaga, dan ketelitian?",
              choices: ["Cleaning (Pembersihan dan Merapikan Data)", "Pivot Table", "Mempercantik Dashboard", "Menulis Rekomendasi"],
              answerIndex: 0,
              explanation: "Pembersihan (Data Cleaning) konon menghabiskan hingga 80% dari total pengerjaan sebuah project analisis bisnis nyata.",
            },
          ],
        },
      ],
    },
  ],
};
