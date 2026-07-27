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
            "Setiap kotak di spreadsheet disebut **Sel**, dialamati dengan huruf kolom + nomor baris (misal `A1`). Kumpulan sel yang berdampingan disebut **Range**, ditulis dengan titik dua (`A1:B10`). Setiap sel punya tipe data — Teks, Angka, atau Tanggal — dan tipe inilah yang menentukan apakah sel bisa dihitung. Jebakan pemula: angka yang tersimpan sebagai teks (biasanya rata kiri) akan diabaikan SUM sehingga totalmu diam-diam salah.",
          example: {
            code: "=B1 + C1",
            output: "Jika B1 berisi 3000 dan C1 berisi 4500, sel formula menampilkan 7500.",
            note: "Formula di Excel/Sheets selalu diawali dengan tanda sama dengan (=), lalu alamat selnya, bukan angkanya.",
          },
          instruction:
            "Sel A1 berisi harga barang dan sel B1 berisi ongkos kirim. Tulis formula yang menampilkan total yang harus dibayar pembeli.",
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
              question:
                "Sel A1 berisi angka 0,25. Kamu mengubah formatnya menjadi Percentage sehingga tampil 25%. Apa yang terjadi pada nilai yang dipakai formula lain?",
              choices: [
                "Nilainya ikut berubah menjadi 25",
                "Nilainya tetap 0,25 — format hanya mengubah tampilan, bukan isi sel",
                "Sel menjadi teks dan tidak bisa dihitung",
                "Formula lain otomatis error",
              ],
              answerIndex: 1,
              explanation:
                "Format (Percentage, Currency, Date) hanya lapisan tampilan; nilai yang tersimpan tetap 0,25 sehingga perhitungan lain tidak berubah. Yang benar-benar mengubah isi sel adalah formula seperti =A1*100. Kebalikannya juga penting diingat: angka yang tersimpan sebagai TEKS akan terlihat normal tapi diabaikan oleh SUM.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Jika kamu ingin menjumlahkan angka secara cepat tanpa mengetik satu per satu dari rentang sel A1 hingga A20, fungsi apa yang paling tepat digunakan?",
              choices: ["SUM(A1:A20)", "ADD(A1:A20)", "COUNT(A1:A20)", "TOTAL(A1:A20)"],
              answerIndex: 0,
              explanation: "Fungsi SUM digunakan untuk menjumlahkan semua angka dalam rentang sel yang dipilih secara otomatis.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Fungsi apakah yang digunakan untuk menghitung banyaknya sel yang berisikan teks atau angka, asalkan tidak kosong?",
              choices: ["COUNTA", "COUNT", "SUM", "AVERAGE"],
              answerIndex: 0,
              explanation: "Fungsi COUNTA menghitung jumlah sel yang berisi data apa pun (termasuk teks), berbeda dengan COUNT yang hanya menghitung sel berisikan angka.",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Jika kita ingin menampilkan kata 'Berhasil' jika nilai penjualan di B2 lebih dari 1000, dan 'Gagal' jika kurang, formula mana yang tepat?",
              choices: ["=IF(B2>1000, \"Berhasil\", \"Gagal\")", "=IF(B2>1000, \"Gagal\", \"Berhasil\")", "=IF(B2<1000, \"Berhasil\", \"Gagal\")", "=IF(B2=1000, \"Berhasil\", \"Gagal\")"],
              answerIndex: 0,
              explanation: "Fungsi IF menguji kondisi pertama, lalu menampilkan argumen kedua jika kondisi bernilai TRUE, dan argumen ketiga jika bernilai FALSE.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Untuk memotong dan mengambil tepat 4 karakter huruf dari sebelah kiri pada teks di sel A1, fungsi apa yang harus dipakai?",
              choices: ["=LEFT(A1, 4)", "=RIGHT(A1, 4)", "=MID(A1, 4)", "=TRIM(A1, 4)"],
              answerIndex: 0,
              explanation: "Fungsi LEFT mengambil sejumlah karakter tertentu yang dimulai dari sisi paling kiri sebuah teks atau string.",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Saat data yang kamu terima berisi teks nama depan dan belakang yang menyatu (contoh 'Budi,Sudarsono') dan kamu ingin memisahkan mereka ke kolom berbeda, fitur apa yang paling efisien digunakan?",
              choices: ["Text to Columns (atau fungsi SPLIT)", "Remove Duplicates", "Conditional Formatting", "Find and Replace"],
              answerIndex: 0,
              explanation: "Text to Columns dan fungsi SPLIT dapat membagi teks dalam satu sel menjadi beberapa kolom berdasarkan karakter pemisah (delimiter) tertentu.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Untuk menghasilkan daftar nama unik klien dari kolom yang berisi ribuan baris namun banyak terjadi duplikasi penginputan, fungsi mana yang paling praktis?",
              choices: ["=UNIQUE(range)", "=FILTER(range)", "=SUMIF(range)", "=VLOOKUP(range)"],
              answerIndex: 0,
              explanation: "Fungsi UNIQUE mengekstrak data dan hanya menampilkan satu entri unik dari setiap nilai, membuang semua duplikat.",
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
          title: "Membuat Pivot Table Pertamamu",
          explanation:
            "Pivot table adalah alat peringkas: ribuan baris transaksi mentah diubah menjadi tabel ringkasan hanya dengan menyeret nama kolom, tanpa menulis satu formula pun. Ia dibuat dari sebuah rentang data yang rapi — satu baris header di atas, satu baris berisi satu transaksi, tanpa baris kosong di tengah. Di Excel jalurnya `Insert > PivotTable`, di Google Sheets `Insert > Pivot table`, lalu kamu menentukan rentang sumbernya. Kesalahan paling sering di langkah ini adalah memilih rentang yang tidak mencakup seluruh baris data, sehingga transaksi terbaru tidak pernah ikut terhitung.",
          example: {
            code: "Insert > Pivot table\nSumber data: Sheet1!A1:D2000",
            output: "Sheet baru terbuka berisi panel Pivot table editor dengan daftar kolom: Tanggal, Wilayah, Kategori, Penjualan.",
            note: "Sertakan baris header di dalam rentang — nama kolomnya yang akan muncul sebagai field di editor.",
          },
          instruction:
            "Data transaksimu ada di `Sheet1` mulai sel A1 (header) sampai D5000. Tulis dua baris: jalur menu untuk menyisipkan pivot table, lalu rentang sumber datanya lengkap dengan nama sheet.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "insert\\s*>\\s*pivot",
              flags: "i",
              message:
                "Tulis jalur menunya: Insert > Pivot table (atau Insert > PivotTable).",
            },
            {
              pattern: "Sheet1!\\s*A1:D5000",
              flags: "i",
              message:
                "Sebutkan rentang sumbernya: Sheet1!A1:D5000.",
            },
          ],
          solution: "Insert > Pivot table\nSumber data: Sheet1!A1:D5000",
        },
        {
          kind: "step",
          id: "sheet-4-2",
          title: "Empat Area: Rows, Columns, Values, Filters",
          explanation:
            "Isi pivot table ditentukan oleh penempatan field pada empat area. Area **Rows** membuat setiap nilai unik menjadi satu baris ke bawah; **Columns** melakukan hal serupa tapi melebar ke samping; **Values** berisi angka yang diagregasi; dan **Filters** menyaring seluruh tabel sekaligus. Pertanyaan bisnis biasanya langsung memberi tahu penempatannya: 'total penjualan per kategori' berarti Kategori di Rows dan Penjualan di Values. Jebakan pemula: menaruh kolom angka di Rows sehingga setiap nominal menjadi barisnya sendiri dan tabel jadi sepanjang data mentahnya.",
          example: {
            code: "Rows: Wilayah\nValues: SUM of Penjualan",
            output: "Tabel ringkasan 2 kolom: Jakarta 12.400.000 | Bandung 8.150.000 | Grand Total 20.550.000",
          },
          instruction:
            "Susun konfigurasi pivot untuk menjawab 'berapa total penjualan tiap kategori produk?'. Tulis dua baris: satu untuk area yang memuat field `Kategori`, satu lagi untuk area yang memuat agregasi jumlah dari field `Penjualan`.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "rows\\s*:\\s*kategori",
              flags: "i",
              message:
                "Taruh Kategori di area Rows.",
            },
            {
              pattern: "values\\s*:\\s*(sum|jumlah)[^\\n]*penjualan",
              flags: "i",
              message:
                "Taruh SUM of Penjualan di area Values.",
            },
          ],
          solution: "Rows: Kategori\nValues: SUM of Penjualan",
        },
        {
          kind: "step",
          id: "sheet-4-3",
          title: "Mengganti Jenis Agregasi di Area Values",
          explanation:
            "Secara bawaan pivot table menjumlahkan angka yang kamu taruh di Values, padahal pertanyaannya belum tentu soal total. 'Berapa rata-rata nilai transaksi?' butuh AVERAGE, 'berapa banyak transaksi?' butuh COUNT (atau COUNTA untuk kolom teks), dan 'berapa transaksi terbesar?' butuh MAX. Menggantinya dilakukan lewat opsi `Summarize by` di Excel atau `Summarise by` di Google Sheets. Perhatikan satu jebakan: COUNT hanya menghitung sel berisi angka, jadi memakai kolom yang berisi teks akan menghasilkan nol dan membuatmu mengira datanya kosong.",
          example: {
            code: "Values: Penjualan\nSummarize by: AVERAGE",
            output: "Kolom nilai berubah dari total 20.550.000 menjadi rata-rata 342.500 per transaksi.",
          },
          instruction:
            "Manajemen ingin tahu **rata-rata** nilai transaksi per wilayah, bukan totalnya. Tulis tiga baris konfigurasi: field di area Rows, field di area Values, dan jenis agregasi yang kamu pilih.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "rows\\s*:\\s*wilayah",
              flags: "i",
              message:
                "Taruh Wilayah di area Rows.",
            },
            {
              pattern: "values\\s*:[^\\n]*penjualan",
              flags: "i",
              message:
                "Taruh Penjualan di area Values.",
            },
            {
              pattern: "(summari[sz]e\\s*by|agregasi)\\s*:\\s*average",
              flags: "i",
              message:
                "Ganti agregasinya menjadi AVERAGE.",
            },
          ],
          solution: "Rows: Wilayah\nValues: Penjualan\nSummarize by: AVERAGE",
        },
        {
          kind: "step",
          id: "sheet-4-4",
          title: "Menampilkan Proporsi: % of Grand Total",
          explanation:
            "Angka total menjawab 'berapa', tapi tidak menjawab 'seberapa besar dibanding keseluruhan'. Pivot table bisa mengubah tampilan nilai menjadi persentase terhadap grand total tanpa formula tambahan, lewat opsi `Show values as` di Excel atau `Show as` di Google Sheets. Ini yang dipakai untuk analisis kontribusi — misalnya menemukan bahwa dua kategori menyumbang 80 persen omset. Selalu sebutkan basis persentasenya saat melaporkan, karena persen terhadap total keseluruhan, terhadap total baris, dan terhadap total kolom menghasilkan angka yang berbeda.",
          example: {
            code: "Values: Jumlah Transaksi\nShow as: % of Row Total",
            output: "Tiap baris wilayah menampilkan proporsi transaksinya sendiri: Jakarta 62% online, 38% offline.",
          },
          instruction:
            "Ubah kolom nilai pada pivot penjualan per kategori agar menampilkan kontribusi tiap kategori terhadap keseluruhan. Tulis dua baris: field yang ada di area Values, dan opsi tampilan yang kamu pilih.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "values\\s*:[^\\n]*penjualan",
              flags: "i",
              message:
                "Sebutkan field Penjualan di area Values.",
            },
            {
              pattern: "show\\s*(values\\s*)?as\\s*:\\s*%\\s*of\\s*grand\\s*total",
              flags: "i",
              message:
                "Pilih Show as: % of Grand Total.",
            },
          ],
          solution: "Values: Penjualan\nShow as: % of Grand Total",
        },
        {
          kind: "step",
          id: "sheet-4-5",
          title: "Calculated Field: Metrik yang Tidak Ada di Data Mentah",
          explanation:
            "Margin, harga rata-rata per unit, dan rasio lain sering tidak tersedia sebagai kolom di data mentah. Calculated field membuat kolom hitungan **di dalam** pivot table, jadi kamu tidak perlu menambah kolom bantu di data sumber yang bisa mengacaukan rentang atau memberatkan file. Formulanya memakai nama field, misalnya `=Profit / Penjualan`. Yang perlu kamu pahami: hasilnya dihitung dari nilai yang sudah diagregasi, sehingga rasio pada baris total mengikuti total profit dibagi total penjualan — bukan rata-rata rasio tiap baris.",
          example: {
            code: "Calculated field\nNama: Harga Rata-rata\nFormula: =Penjualan / Qty",
            output: "Kolom Harga Rata-rata muncul di pivot: Elektronik 2.450.000 | Pakaian 185.000",
          },
          instruction:
            "Data pivot punya field `Profit` dan `Penjualan`. Buat calculated field bernama `Margin` yang menghitung profit dibagi penjualan. Tulis nama field-nya dan formulanya (diawali tanda `=`).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(nama|name)\\s*:\\s*margin",
              flags: "i",
              message:
                "Beri nama field-nya: Margin.",
            },
            {
              pattern: "=\\s*Profit\\s*/\\s*Penjualan",
              flags: "i",
              message:
                "Formulanya =Profit / Penjualan.",
            },
          ],
          solution: "Calculated field\nNama: Margin\nFormula: =Profit / Penjualan",
        },
        {
          kind: "step",
          id: "sheet-4-6",
          title: "Slicer: Filter yang Bisa Diklik Atasanmu",
          explanation:
            "Filter bawaan pivot table berfungsi baik untukmu sendiri, tapi orang non-teknis jarang mau membuka menu dropdown bertingkat. Slicer menyediakan tombol-tombol filter yang terlihat langsung di atas tabel atau dashboard, sehingga siapa pun bisa mengklik 'Jakarta' lalu melihat seluruh angka menyesuaikan. Di Excel jalurnya `Insert > Slicer`, di Google Sheets `Data > Add a slicer`, lalu kamu memilih field yang jadi tombolnya. Satu slicer bisa dikaitkan ke beberapa pivot sekaligus — itulah cara membuat dashboard terasa satu kesatuan.",
          example: {
            code: "Insert > Slicer\nField: Wilayah",
            output: "Kotak berisi tombol Jakarta, Bandung, Surabaya muncul di atas pivot; mengklik salah satunya menyaring seluruh tabel.",
          },
          instruction:
            "Dashboard penjualanmu perlu tombol filter agar manajer bisa memilih periode. Tulis dua baris: jalur menu untuk menambahkan slicer, dan field yang kamu jadikan tombolnya (`Bulan`).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(insert\\s*>\\s*slicer|data\\s*>\\s*add\\s*a\\s*slicer)",
              flags: "i",
              message:
                "Tulis jalur menunya: Insert > Slicer (Excel) atau Data > Add a slicer (Sheets).",
            },
            {
              pattern: "(field|kolom)\\s*:\\s*bulan",
              flags: "i",
              message:
                "Pilih field Bulan sebagai tombol filternya.",
            },
          ],
          solution: "Insert > Slicer\nField: Bulan",
        },
        {
          kind: "step",
          id: "sheet-4-7",
          title: "Refresh: Kenapa Angka Pivot Tidak Ikut Berubah",
          explanation:
            "Berbeda dari formula biasa yang langsung menghitung ulang, pivot table membaca salinan data di memori (pivot cache) agar tetap ringan meski datanya puluhan ribu baris. Akibatnya, mengubah angka di data sumber tidak otomatis mengubah pivot — kamu harus me-refresh lewat `PivotTable Analyze > Refresh` di Excel, sementara Google Sheets memperbaruinya otomatis saat rentangnya berubah. Ini penyebab paling umum laporan yang 'angkanya beda' padahal datanya sudah diperbaiki. Kalau baris baru terus bertambah, jadikan sumbernya sebuah Table (Ctrl+T) agar rentangnya ikut memanjang sendiri.",
          example: {
            code: "Data > Refresh all",
            output: "Seluruh pivot di workbook ikut diperbarui; total Elektronik berubah dari 9.500.000 menjadi 9.800.000.",
            note: "Kalau lupa refresh, seluruh laporanmu menampilkan angka basi tanpa satu pun pesan error.",
          },
          instruction:
            "Kamu memperbaiki dua angka penjualan di data sumber, tapi pivot masih menampilkan angka lama. Tulis jalur menu yang kamu tempuh di Excel untuk memperbaruinya.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(pivottable\\s*analyze|analyze|data)\\s*>\\s*refresh",
              flags: "i",
              message:
                "Tulis jalur menu refresh-nya, misalnya PivotTable Analyze > Refresh.",
            },
          ],
          solution: "PivotTable Analyze > Refresh",
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
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Di dalam panel menu pembuat Pivot Table, ke kotak bagian manakah (area/field) kamu biasanya menaruh 'Kategori Produk' jika kamu menginginkan data itu menjadi label berjejer ke bawah?",
              choices: ["Rows", "Values", "Columns", "Filters"],
              answerIndex: 0,
              explanation: "Area Rows menempatkan item data secara vertikal dari atas ke bawah pada baris-baris berurutan Pivot Table.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Apabila kamu menginginkan analisis total penjualan Pivot Table-mu agar menampilkan persentase tiap produk terhadap grand total, opsi perhitungan apakah di 'Values' yang kamu butuhkan?",
              choices: ["% of Grand Total", "Average", "Count", "Max"],
              answerIndex: 0,
              explanation: "Opsi '% of Grand Total' otomatis membagi setiap nilai dengan total keseluruhan, menghemat banyak waktu kalkulasi proporsi.",
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
          title: "Memilih Jenis Chart dari Bentuk Pertanyaan",
          explanation:
            "Jenis chart bukan soal selera, melainkan mengikuti pertanyaan yang ingin dijawab. Pertanyaan tentang perubahan sepanjang waktu dijawab line chart, karena garis menekankan arah dan kecepatan perubahan. Perbandingan antar kategori dijawab bar atau column chart, sebab mata manusia membandingkan panjang batang jauh lebih akurat daripada luas juring. Pie chart hanya layak dipakai untuk dua sampai tiga bagian dari satu keseluruhan; lebih dari itu pembaca menyerah membandingkannya. Untuk hubungan antara dua angka, gunakan scatter plot.",
          example: {
            code: "Insert > Chart\nChart type: Column chart\nData: Kategori (X), Penjualan (Y)",
            output: "Grafik batang berisi 4 kategori muncul; batang tertinggi terlihat jelas tanpa perlu membaca angkanya.",
          },
          instruction:
            "Kamu diminta menampilkan **tren penjualan bulanan sepanjang 2026**. Tulis dua baris: jalur menu untuk menyisipkan grafik, dan jenis chart yang paling tepat untuk pertanyaan itu.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "insert\\s*>\\s*chart",
              flags: "i",
              message:
                "Tulis jalur menunya: Insert > Chart.",
            },
            {
              pattern: "(chart\\s*type|jenis)\\s*:\\s*line",
              flags: "i",
              message:
                "Data sepanjang waktu paling tepat memakai Line chart.",
            },
          ],
          solution: "Insert > Chart\nChart type: Line chart",
        },
        {
          kind: "step",
          id: "sheet-5-2",
          title: "Sumbu yang Jujur: Mulai dari Nol",
          explanation:
            "Grafik batang yang sumbu Y-nya tidak dimulai dari nol membuat selisih kecil terlihat seperti lonjakan besar — dan itu tetap menyesatkan meski setiap angkanya benar. Untuk bar dan column chart, memulai dari nol adalah aturan baku karena panjang batang mewakili besarannya. Line chart untuk data yang bergerak di rentang sempit boleh dipotong, asalkan kamu menyebutkannya secara terbuka pada judul atau catatan kaki. Pengaturannya ada di chart editor bagian sumbu vertikal, lewat isian nilai minimum.",
          example: {
            code: "Chart editor > Vertical axis > Max: 120",
            output: "Batas atas sumbu terkunci di 120 sehingga batang tertinggi tidak menyentuh tepi grafik.",
          },
          instruction:
            "Grafik batang perbandingan omset dua cabangmu terlihat berlebihan karena sumbunya terpotong. Tulis satu baris pengaturan chart editor yang menetapkan nilai minimum sumbu vertikal menjadi 0.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(vertical\\s*axis|sumbu\\s*(vertikal|y))",
              flags: "i",
              message:
                "Sebutkan bagian sumbu vertikal di chart editor.",
            },
            {
              pattern: "min[^\\n]*:?\\s*0\\b",
              flags: "i",
              message:
                "Tetapkan nilai minimumnya 0.",
            },
          ],
          solution: "Chart editor > Vertical axis > Min: 0",
        },
        {
          kind: "step",
          id: "sheet-5-3",
          title: "Decluttering: Membuang Tinta yang Tidak Bermakna",
          explanation:
            "Setiap elemen di grafik menghabiskan perhatian pembaca, dan perhatian itu terbatas. Gridline tebal, bingkai kotak, latar berwarna, dan legenda yang mengulang informasi judul tidak menambah pemahaman apa pun — mereka justru mengaburkan garis datamu sendiri. Karena itu praktik standar adalah menyamarkan atau menghapus gridline, membuang bingkai, dan memberi label langsung pada garis alih-alih memakai legenda. Ukuran keberhasilannya sederhana: kalau elemen itu dihapus dan pemahaman pembaca tidak berkurang, memang seharusnya dihapus.",
          example: {
            code: "Chart editor > Legend > Position: None",
            output: "Legenda hilang dan judul seri dipindah sebagai label langsung di ujung garis.",
          },
          instruction:
            "Grafik trenmu penuh garis bantu abu-abu yang mengganggu. Tulis satu baris pengaturan chart editor untuk mematikan gridline utama pada grafik itu.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "gridlines?\\s*>|>\\s*gridlines?",
              flags: "i",
              message:
                "Sebutkan pengaturan gridline di chart editor.",
            },
            {
              pattern: "(hapus|matikan|hilangkan|none|off|uncheck)",
              flags: "i",
              message:
                "Nyatakan bahwa gridline-nya dihapus atau dimatikan.",
            },
          ],
          solution: "Chart editor > Gridlines > Hapus centang Major gridlines",
        },
        {
          kind: "step",
          id: "sheet-5-4",
          title: "Conditional Formatting: Warna yang Bekerja Otomatis",
          explanation:
            "Mewarnai sel secara manual selalu berakhir sama: begitu datanya diperbarui, warnanya tertinggal di sel yang salah dan justru menyesatkan. Conditional formatting memasang aturan, bukan warna — misalnya 'kalau nilainya kurang dari 0, beri latar merah' — sehingga tampilannya menyesuaikan sendiri setiap kali angkanya berubah. Ini yang membuat dashboard bisa dipakai berulang tanpa perawatan. Batasi jumlah aturannya: kalau semua sel berwarna, tidak ada yang menonjol dan pembaca kembali harus membaca satu per satu.",
          example: {
            code: "Format > Conditional formatting\nRentang: C2:C100\nAturan: Less than 0\nWarna: latar merah",
            output: "Sel bernilai -250.000 langsung berlatar merah, sedangkan sel positif tetap putih.",
          },
          instruction:
            "Kolom `D2:D200` berisi selisih target dan realisasi. Tulis tiga baris aturan conditional formatting agar sel bernilai negatif otomatis diberi latar merah: sebutkan jalur menunya, rentangnya, dan kondisinya.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "conditional\\s*formatting",
              flags: "i",
              message:
                "Sebutkan jalur menunya: Format > Conditional formatting.",
            },
            {
              pattern: "D2:D200",
              flags: "i",
              message:
                "Sebutkan rentang yang diberi aturan: D2:D200.",
            },
            {
              pattern: "(less\\s*than|kurang\\s*dari|<)\\s*0",
              flags: "i",
              message:
                "Kondisinya: nilai kurang dari 0.",
            },
          ],
          solution: "Format > Conditional formatting\nRentang: D2:D200\nAturan: Less than 0 (latar merah)",
        },
        {
          kind: "step",
          id: "sheet-5-5",
          title: "Sparkline: Grafik Mini di Dalam Satu Sel",
          explanation:
            "Kadang kamu butuh menunjukkan tren tanpa memberi ruang sebesar grafik penuh — misalnya satu kolom kecil di samping nama tiap cabang. Sparkline menggambar grafik mini di dalam satu sel, sehingga tabel ringkasanmu sekaligus menampilkan arah pergerakan. Di Google Sheets fungsinya `=SPARKLINE(rentang)`, dan jenisnya bisa diatur menjadi garis, batang, atau kolom lewat opsi tambahan. Karena ukurannya kecil, sparkline hanya menyampaikan arah — jangan berharap pembaca bisa membaca nilai persisnya dari situ.",
          example: {
            code: "=SPARKLINE(B2:M2, {\"charttype\", \"column\"})",
            output: "Deretan batang mini muncul di dalam satu sel, memperlihatkan bulan mana yang paling tinggi.",
          },
          instruction:
            "Baris data penjualan 12 bulan berada di rentang `C2:N2`. Tulis formula yang menggambar grafik mini di dalam sel untuk deret itu.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SPARKLINE\\(",
              flags: "i",
              message:
                "Pakai fungsi =SPARKLINE(...).",
            },
            {
              pattern: "C2:N2",
              flags: "i",
              message:
                "Rentang datanya C2:N2.",
            },
          ],
          solution: "=SPARKLINE(C2:N2)",
        },
        {
          kind: "step",
          id: "sheet-5-6",
          title: "Kartu KPI: Angka Utama di Kepala Dashboard",
          explanation:
            "Bagian paling atas dashboard sebaiknya menjawab pertanyaan terpenting dalam satu angka besar, karena di situlah mata pembaca mendarat lebih dulu. Angka ini biasanya berupa agregat sederhana — total omset, jumlah transaksi, rata-rata nilai pesanan — yang dihitung dari seluruh rentang data. Rapikan tampilannya dengan format angka dan beri label periode yang jelas, misalnya 'Omset Juli 2026'. Angka KPI tanpa keterangan periode adalah salah satu penyebab paling sering rapat berubah menjadi perdebatan soal angka, bukan soal keputusan.",
          example: {
            code: "=SUM(D2:D5000)",
            output: "Menampilkan 128.394.500 sebagai total omset seluruh transaksi pada rentang tersebut.",
          },
          instruction:
            "Kolom `E2:E5000` berisi nilai tiap transaksi. Tulis formula untuk kartu KPI yang menampilkan total seluruh transaksi di rentang itu.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUM\\(\\s*E2:E5000\\s*\\)",
              flags: "i",
              message:
                "Pakai =SUM(E2:E5000) untuk menjumlahkan seluruh rentang.",
            },
          ],
          solution: "=SUM(E2:E5000)",
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
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Fitur apakah di Spreadsheet yang sangat berguna untuk otomatis mewarnai sel menjadi merah ketika nilainya negatif, dan hijau ketika positif?",
              choices: ["Conditional Formatting", "Cell Styles", "Data Validation", "Find and Replace"],
              answerIndex: 0,
              explanation: "Conditional Formatting mengubah warna latar atau teks pada sel secara dinamis berdasarkan nilai atau kondisi logika tertentu.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Jika kita perlu membandingkan nilai ukuran 5 divisi berbeda secara proporsional dalam sebuah laporan tertulis, jenis chart apakah yang mudah dibaca selain Pie chart?",
              choices: ["Bar Chart (Grafik Batang)", "Line Chart", "Radar Chart", "Area Chart"],
              answerIndex: 0,
              explanation: "Bar/Column Chart sangat baik untuk membandingkan jumlah kuantitatif antar kategori/divisi tanpa membingungkan audiens dibandingkan Pie Chart bersegmen banyak.",
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
          starterCode: "",
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
          starterCode: "",
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
          starterCode: "",
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
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Saat menghadapi kasus ribuan data transaksi berantakan, langkah pertama yang paling wajib dilakukan analis sebelum membuat Pivot Table atau Dashboard adalah...",
              choices: ["Membersihkan, menstandarisasi, dan mengecek duplikat data (Data Cleaning)", "Langsung membuat grafik Pie", "Memberi warna-warni pada tabel mentah", "Menambahkan baris untuk rata-rata di bawah tabel asli"],
              answerIndex: 0,
              explanation: "Data yang kotor akan menghasilkan analisis yang salah (Garbage In, Garbage Out), sehingga pembersihan adalah tahap fondasi terpenting.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Rumus perhitungan manakah yang paling mendasar untuk mengkalkulasikan Net Profit atau Keuntungan Bersih suatu usaha dari tabel laporan?",
              choices: ["Pendapatan Total dikurangi seluruh Biaya (HPP dan Operasional)", "Hanya Harga Pokok Penjualan (HPP) dibagi Penjualan", "Total Aset dikurangi Hutang", "Rata-rata penjualan harian dikali jumlah karyawan"],
              answerIndex: 0,
              explanation: "Keuntungan bersih (Net Profit) dihitung dengan mengurangkan seluruh total biaya dan pengeluaran operasional dari pendapatan kotor.",
            },
          ],
        },
      ],
    },
  ],
};
