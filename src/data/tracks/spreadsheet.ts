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
      slug: "persiapan-dasar-spreadsheet",
      title: "Persiapan & Dasar Spreadsheet",
      description:
        "Pengenalan lembar kerja, sel, formula dasar, dan tipe data di Excel & Google Sheets.",
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
          kind: "materi",
          id: "sheet-1-m1",
          title: "Pengenalan Spreadsheet, Sel, Tipe Data, dan Formula Dasar",
          body:
            "# Pengenalan Spreadsheet & Konsep Dasar\n\n" +
            "Spreadsheet (seperti Microsoft Excel dan Google Sheets) adalah perangkat lunak olah data kisi tabel (*grid*) yang menjadi tulang punggung operasional di seluruh dunia bisnis modern. Dari perusahaan teknologi multinasional, perbankan investasi, hingga UMKM ritel, spreadsheet digunakan setiap hari untuk mencatat transaksi, rekonsiliasi keuangan, pembersihan data mentah, dan penyusunan laporan manajemen berkala.\n\n" +
            "Setiap lembar kerja (*worksheet*) tersusun atas **Kolom** berlabel huruf (`A`, `B`, `C`...) dan **Baris** berlabel angka (`1`, `2`, `3`...). Titik temu antara kolom dan baris membentuk sebuah kotak bernama **Sel** (*Cell*), yang dialamati dengan format koordinat `KolomBaris` (misalnya `A1` atau `C15`). Kumpulan dari dua atau lebih sel yang dipilih bersamaan disebut **Range** (ditulis menggunakan tanda titik dua, misalnya `A1:C10` untuk rentang sel dari pojok kiri atas A1 hingga pojok kanan bawah C10).\n\n" +
            "## Anatomi Lembar Kerja & Tipe Data Dasar\n\n" +
            "```text\n" +
            "+------+-------------------+-----------------+-------------------+-------------------+\n" +
            "|      |         A         |        B        |         C         |         D         |\n" +
            "+------+-------------------+-----------------+-------------------+-------------------+\n" +
            "|  1   | Nama Barang (Teks)| Kuantitas (Qty) | Harga Satuan (Rp) | Subtotal (Formula)|\n" +
            "|  2   | Kopi Susu Aren    |       50        |       18000       | =B2 * C2          |\n" +
            "|  3   | Teh Melati Panas  |       30        |       12000       | =B3 * C3          |\n" +
            "+------+-------------------+-----------------+-------------------+-------------------+\n" +
            "Range A1:D3 mencakup baris judul (header) dan baris data transaksi.\n" +
            "Teks rata kiri, Angka rata kanan, dan Sel Formula menampilkan hasil kalkulasi matematis.\n" +
            "```\n\n" +
            "## Karakteristik Tipe Data & Format Sel\n\n" +
            "| Tipe Data | Perilaku Bawaan | Contoh Isi | Catatan Penting di Tempat Kerja |\n" +
            "|---|---|---|---|\n" +
            "| **Teks (String)** | Rata Kiri | `Kopi Arabika`, `INV-001` | Tidak dapat dihitung secara matematis. Tanda petik satu (`'08123`) memaksa angka disimpan sebagai teks agar angka nol di awal tidak hilang. |\n" +
            "| **Angka (Numeric)** | Rata Kanan | `15000`, `0.25`, `-500` | Dapat dihitung dengan SUM, AVERAGE, operator matematika. |\n" +
            "| **Tanggal (Date)** | Rata Kanan | `2026-07-28` | Disimpan sebagai angka serial integer (1 = 1 Jan 1900, 46000 = pertengahan 2025). Selisih hari dihitung langsung dengan pengurangan. |\n" +
            "| **Formula / Rumus** | Menampilkan Hasil | `=SUM(B2:B3)` | Wajib diawali tanda sama dengan (`=`). Menampilkan nilai hasil evaluasi. |\n\n" +
            "Format sel (seperti Percentage `%`, Currency `Rp`, Accounting, Short Date) **hanya mengubah tampilan visual di layar**, bukan nilai asli yang tersimpan di memori komputer. Angka `0.25` yang diformat menjadi Percentage akan tampil sebagai `25%`, namun dalam kalkulasi perkalian nilainya tetaplah `0.25`.\n\n" +
            "## Perbedaan Regional Settings: Koma (,) vs Titik Koma (;)\n\n" +
            "Salah satu kebingungan terbesar bagi pengguna spreadsheet di Indonesia adalah perbedaan pengaturan regional (*Regional Settings*) sistem operasi komputer:\n\n" +
            "| Pengaturan Regional | Pemisah Argumen Rumus | Tanda Desimal | Contoh Rumus IF |\n" +
            "|---|---|---|---|\n" +
            "| **English (United States)** | Koma (`,`) | Titik (`.`) | `=IF(A2>10, \"Lulus\", \"Gagal\")` |\n" +
            "| **Indonesian (Indonesia)** | Titik Koma (`;`) | Koma (`,`) | `=IF(A2>10; \"Lulus\"; \"Gagal\")` |\n\n" +
            "Jika komputermu diatur ke bahasa Indonesia, mengetik koma pada formula akan memicu pesan peringatan *'There's a problem with this formula'*. Biasakan memeriksa petunjuk *tooltip* kecil yang muncul di bawah sel saat kamu mengetik nama fungsi.\n\n" +
            "## Referensi Sel: Relatif vs Absolut ($A$1) vs Campuran\n\n" +
            "Bayangkan simbol dolar (`$`) sebagai jangkar kapal yang mengunci koordinat sel:\n\n" +
            "1. **Referensi Relatif (`A1`):** Tidak ada jangkar. Posisi sel acuan otomatis bergeser mengikuti arah salinan saat formula di-autofill ke bawah atau ke samping.\n" +
            "2. **Referensi Absolut Penuh (`$A$1`):** Mengunci kolom A dan baris 1 sekaligus. Titik acuan tidak akan pernah bergeser ke mana pun saat formula disalin. Tekan tombol `F4` pada Windows (atau `Cmd + T` pada macOS) untuk mengunci sel secara cepat.\n" +
            "3. **Referensi Campuran (`$A1` atau `A$1`):** Mengunci kolom saja (`$A1`) atau mengunci baris saja (`A$1`), sangat krusial saat menyusun tabel matriks dua dimensi.\n\n" +
            "## Autofill, Flash Fill, dan Navigasi Efisien\n\n" +
            "- **Fill Handle:** Kotak kecil hitam di pojok kanan bawah sel aktif. Klik ganda (*double-click*) fill handle untuk menyalin formula ke bawah secara otomatis hingga baris data terakhir di kolom sebelah kiri.\n" +
            "- **Flash Fill (`Ctrl + E` di Excel):** Fitur cerdas yang otomatis mendeteksi pola pemisahan teks (misalnya memisahkan nama depan dan nama belakang) tanpa perlu menulis rumus.\n" +
            "- **Status Bar di Bawah Layar:** Saat kamu memblok deretan angka, perhatikan pojok kanan bawah layar: spreadsheet otomatis menampilkan total `SUM`, rata-rata `AVERAGE`, dan jumlah sel `COUNT` secara instan tanpa perlu mengetik rumus.\n\n" +
            "## Sort, Filter, dan Freeze Panes\n\n" +
            "- **AutoFilter (`Data > Filter` atau shortcut `Ctrl+Shift+L`):** Menambahkan tombol dropdown di setiap kepala kolom untuk menyortir abjad A-Z atau menyaring kriteria tertentu.\n" +
            "- **Freeze Panes (`View > Freeze Panes`):** Membekukan baris judul pertama agar tetap terlihat di layar saat kamu menggulir ribuan baris data ke bawah.\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Angka Tersimpan sebagai Teks:** Mengunduh data ekspor dari sistem web sering menghasilkan angka yang berformat teks (rata kiri, terkadang ditandai segitiga hijau kecil di sudut sel). Fungsi `=SUM()` akan mengabaikan sel tersebut secara diam-diam sehingga total laporanmu keliru tanpa ada pesan error.\n" +
            "- **Muncul Simbol Tanda Pagar Beruntun (`###`):** Tampilan `###` bukan error rumus, melainkan tanda bahwa lebar kolom terlalu sempit untuk menampilkan angka nominal. Solusinya: klik ganda garis batas kolom pada header kolom untuk *Auto-fit*.\n" +
            "- **Lupa Mengunci Sel Parameter ($):** Saat mengalikan ratusan baris transaksi dengan satu sel persentase pajak atau kurs mata uang, lupa menekan `F4` membuat sel acuan meleset ke sel kosong di bawahnya saat formula ditarik ke bawah.\n" +
            "- **Mengetik Angka Statis di Dalam Formula:** Menulis `=A2 * 0.11` di ratusan sel alih-alih merujuk ke satu sel tarif pajak terpusat `=A2 * $B$1` membuat revisi rumus memakan waktu lama saat kebijakan pajak berubah.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Dalam dunia kerja profesional (baik posisi Data Analyst, Financial Analyst, Staff Operasional, maupun Management Trainee), kemampuan menyajikan data dalam tabel yang rapi, memasang Freeze Panes agar laporan nyaman dibaca, dan memastikan tidak ada formula yang salah kunci adalah standar minimum profesionalisme dalam penyusunan laporan berkala.",
        },
        {
          kind: "step",
          id: "sheet-1-1",
          title: "Sel, Range & Tipe Data",
          explanation:
            "Setiap kotak di spreadsheet disebut Sel dan dialamati dengan huruf kolom serta nomor baris (misalnya `A1`). Kumpulan sel berdampingan disebut Range, ditulis menggunakan titik dua (misalnya `A1:B10`). Tipe data pada sel — Teks, Angka, atau Tanggal — menentukan apakah sel tersebut bisa dihitung secara matematis. Jebakan pemula yang sangat sering terjadi adalah angka yang tersimpan sebagai teks (biasanya berposisi rata kiri), di mana fungsi SUM akan mengabaikan sel tersebut sehingga total laporanmu salah tanpa memunculkan peringatan error apa pun.",
          example: {
            code: "=B2 + C2",
            output: "Jika B2 bernilai 25000 dan C2 bernilai 9000, sel formula menampilkan 34000.",
            note: "Formula di Excel/Sheets selalu diawali tanda sama dengan (=), lalu alamat selnya, bukan angkanya langsung.",
          },
          instruction:
            "Pada tabel transaksi kasir di baris 2, sel A2 mencatat harga menu kopi dan sel B2 mencatat ongkos kirim. Tulis formula penjumlahan untuk menghitung total tagihan pelanggan pada baris transaksi tersebut.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*A2\\s*\\+\\s*B2",
              flags: "i",
              message: "Tuliskan formula penjumlahan dua sel di baris 2: =A2 + B2",
            },
          ],
          solution: "=A2 + B2",
          susunKode: {
            question: "Susun formula penjumlahan sel A2 dan B2.",
            potongan: ["=A2 +", " B2"],
            pengecoh: ["=A2 *", " C2"],
            pemisah: "",
            explanation:
              "Formula penjumlahan dua sel diawali tanda sama dengan `=A2 + B2`. Pengecoh operator perkalian `*` atau sel `C2` adalah kesalahan menggoda yang sering keliru dipakai pemula saat menyusun kalkulasi dasar.",
          },
        },
        {
          kind: "step",
          id: "sheet-1-2",
          title: "Fungsi Agregasi Dasar (AVERAGE)",
          explanation:
            "Fungsi agregasi digunakan untuk mengolah deretan angka sekaligus tanpa perlu menjumlahkan satu per satu secara manual. `=SUM(B2:B31)` menjumlahkan seluruh angka, `=AVERAGE(B2:B31)` menghitung nilai rata-rata aritmetika, dan `=COUNT(B2:B31)` menghitung banyaknya sel yang memuat data angka. Fungsi ini digunakan setiap hari dalam menyusun ringkasan laporan transaksi bulanan. Jebakan pemula: memakai `COUNT` untuk menghitung nama pelanggan — gunakan `COUNTA` jika sel acuanmu berisi teks non-angka.",
          example: {
            code: "=AVERAGE(C2:C10)",
            output: "Menghasilkan angka rata-rata aritmetika dari 9 baris nilai di rentang C2:C10.",
            note: "Gunakan AVERAGE untuk menghitung nilai tengah rata-rata dari rentang angka.",
          },
          instruction:
            "Kolom B (rentang B2:B31) mencatat omset harian toko selama 30 hari terakhir. Hitung rata-rata omset harian tersebut menggunakan fungsi agregasi yang tepat.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*AVERAGE\\(",
              message:
                "Setiap formula dimulai tanda sama dengan, lalu fungsi AVERAGE.",
            },
            {
              pattern: "B2:B31",
              message:
                "Sebutkan rentang selnya di dalam tanda kurung: B2:B31.",
            },
          ],
          solution: "=AVERAGE(B2:B31)",
          susunKode: {
            question:
              "Susun formula AVERAGE untuk menghitung rata-rata sel B2 sampai B31.",
            potongan: ["=AVERAGE(", "B2:B31)"],
            pengecoh: ["=RATA2(", "C2..C31)"],
            pemisah: "",
            explanation:
              "Perhitungan nilai rata-rata menggunakan fungsi `=AVERAGE(B2:B31)`. Pengecoh `=RATA2()` adalah nama fiktif bahasa Indonesia yang sering keliru dikira valid, dan titik dua ganda `..` menjebak pengguna dari bahasa pemrograman lain.",
          },
        },
        {
          kind: "step",
          id: "sheet-1-3",
          title: "Referensi Relatif vs Absolut ($A$1)",
          explanation:
            "Referensi relatif (`B2`) otomatis menyesuaikan alamat sel saat formula disalin ke baris di bawahnya. Sebaliknya, Referensi Absolut (`$D$1`) mengunci kolom dan baris menggunakan simbol dolar `$`, seperti memasang jangkar agar titik koordinat acuan tidak bergeser sama sekali. Konsep ini wajib dipakai ketika kamu mengalikan baris transaksi dengan sel persentase komisi atau tarif pajak tunggal. Jebakan pemula: lupa menekan tombol `F4` untuk mengunci sel acuan sehingga hasil autofill di baris-baris bawahnya bernilai nol atau error.",
          example: {
            code: "=A2 * $C$1",
            output: "Menghitung nilai perkalian A2 dengan sel parameter C1 yang terkunci absolut.",
            note: "Tekan F4 pada keyboard untuk mengubah alamat sel menjadi absolut ($) secara instan.",
          },
          instruction:
            "Pada tabel penjualan, sel B2 memuat omset staf sales dan sel D1 menyimpan tarif komisi tunggal (5%). Kalikan omset B2 dengan sel tarif komisi, dan pastikan sel D1 dikunci absolut (baris dan kolom dengan simbol $) agar tidak bergeser saat formula di-autofill ke baris bawahnya.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*B2\\s*\\*",
              message:
                "Ambil nilai omset baris 2 dari kolom B dengan referensi relatif (B2).",
            },
            {
              pattern: "\\$D\\$1",
              message:
                "Kunci sel D1 secara absolut dengan tanda dolar: $D$1.",
            },
          ],
          solution: "=B2 * $D$1",
          susunKode: {
            question:
              "Susun formula perkalian B2 dengan referensi absolut sel D1 ($D$1).",
            potongan: ["=B2 *", " $D$1"],
            pengecoh: ["=B2 /", " D1"],
            pemisah: "",
            explanation:
              "Membekukan sel D1 menggunakan tanda dolar `=$D$1` agar nilainya tidak bergeser saat formula ditarik ke bawah. Pengecoh tanpa tanda dolar `D1` adalah jebakan klasik yang membuat hasil kalkulasi baris berikutnya meleset ke sel kosong.",
          },
        },
        {
          kind: "step",
          id: "sheet-1-4",
          title: "Format Tanggal Menjadi Nama Hari",
          explanation:
            "Fungsi `=TEXT(A2, \"dddd\")` mengonversi nilai angka serial tanggal pada sel `A2` menjadi string teks nama hari lengkap (misalnya 'Senin' atau 'Monday'). Fungsi ini digunakan saat kamu perlu menganalisis tren pola perilaku belanja pelanggan berdasarkan hari dalam seminggu. Perhatikan bahwa hasil dari fungsi `TEXT` berubah menjadi tipe data Teks murni, sehingga sel tersebut tidak bisa lagi dihitung langsung dengan formula tanggal matematis seperti selisih hari.",
          example: {
            code: '=TEXT(B2, "dddd")',
            output: "Menghasilkan string nama hari lengkap, misalnya 'Selasa'.",
            note: "Format 'dddd' menampilkan nama hari lengkap, sedangkan 'ddd' menampilkan singkatan 3 huruf.",
          },
          instruction:
            "Untuk menganalisis pola penjualan kafe per hari kerja, konversikan nilai serial tanggal pada sel A2 menjadi nama hari lengkap menggunakan fungsi teks dan format kode 4 huruf 'dddd'.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TEXT\\(",
              message:
                "Pengubahan angka/tanggal menjadi teks berformat memakai fungsi TEXT.",
            },
            {
              pattern: "A2\\s*,\\s*[\"']dddd[\"']",
              message:
                "Argumennya: sel sumber A2 dan kode format \"dddd\" dalam tanda kutip.",
            },
          ],
          solution: '=TEXT(A2, "dddd")',
          susunKode: {
            question:
              "Susun fungsi TEXT untuk mengonversi tanggal di A2 menjadi nama hari dddd.",
            potongan: ["=TEXT(A2, ", '"dddd")'],
            pengecoh: ["=FORMAT(B2, ", '"hari")'],
            pemisah: "",
            explanation:
              "Pengubahan tanggal menjadi nama hari menggunakan `=TEXT(A2, \"dddd\")`. Pengecoh `=FORMAT()` adalah nama fungsi fiktif yang keliru dan jebakan umum pengembang yang terbiasa dengan pustaka pemrograman lain.",
          },
        },
        {
          kind: "step",
          id: "sheet-1-5",
          title: "Kalkulasi Persentase Pencapaian",
          explanation:
            "Kalkulasi persentase pencapaian target dilakukan dengan membagi nilai realisasi pencapaian (sel `B2`) dengan nilai target yang ditetapkan (sel `C2`). Hasil pembagian berupa angka desimal (misalnya `0.85`), yang kemudian diformat menjadi Percentage (`85%`) lewat menu format angka pada ribbon. Formula ini digunakan dalam evaluasi KPI tim penjualan dan serapan anggaran operasional. Jebakan umum: membalik posisi pembagian menjadi target dibagi realisasi sehingga menghasilkan angka persentase yang keliru.",
          example: {
            code: "=C2 / D2",
            output: "Menghasilkan nilai desimal 0.85 (tampil sebagai 85% setelah diformat Percentage).",
            note: "Format sel ke Percentage setelah memasukkan formula pembagian.",
          },
          instruction:
            "Dalam evaluasi target penjualan bulanan, sel B2 mencatat realisasi omset yang dicapai dan sel C2 mencatat target omset yang ditetapkan manajemen. Hitung persentase rasio realisasi terhadap target pada baris 2 tersebut.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*B2\\s*/\\s*C2",
              flags: "i",
              message: "Tuliskan formula pembagian realisasi per target: =B2 / C2",
            },
          ],
          solution: "=B2 / C2",
          susunKode: {
            question: "Susun formula pembagian nilai sel B2 dengan C2.",
            potongan: ["=B2 /", " C2"],
            pengecoh: ["=B2 :", " D2"],
            pemisah: "",
            explanation:
              "Perhitungan persentase pencapaian diawali `=B2 / C2`. Penggunaan tanda titik dua `:` sebagai pembagi adalah kekeliruan sintaks yang sering menjebak karena titik dua khusus untuk penentuan rentang sel pada spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-1-6",
          title: "Mengaktifkan Filter Otomatis (Filter & Sort)",
          explanation:
            "Fitur AutoFilter menambahkan tombol panah penyaring pada setiap judul kolom tabel. Lewat tombol ini, pengguna dapat mengurutkan data (*Sort A to Z* atau *Largest to Smallest*) dan menyaring baris berdasarkan kriteria tertentu tanpa merusak susunan data asli. Di Excel shortcut-nya adalah \"Ctrl + Shift + L\", sedangkan di Google Sheets jalurnya melalui menu \"Data > Create a filter\". Jebakan pemula: mengaktifkan filter saat ada baris kosong di tengah tabel, yang membuat spreadsheet hanya memfilter data sebelum baris kosong tersebut.",
          example: {
            code: "Data > Sort sheet by column A",
            output: "Seluruh baris tabel terurut dari A ke Z berdasarkan nilai pada kolom A.",
            note: "Fitur pengurutan dan filter dasar ada di menu Data atau shortcut Ctrl+Shift+L.",
          },
          instruction:
            "Aktifkan tombol filter otomatis di baris judul tabel data agar tim operasional dapat menyortir dan menyaring transaksi, melalui menu Data pada lembar kerja.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "data\\s*>\\s*(create\\s*a\\s*)?filter|ctrl\\s*\\+\\s*shift\\s*\\+\\s*l",
              flags: "i",
              message:
                "Tuliskan jalur menunya: Data > Create a filter (atau Data > Filter).",
            },
          ],
          solution: "Data > Create a filter",
          susunKode: {
            question:
              "Susun perintah mengaktifkan filter otomatis dari menu Data.",
            potongan: ["Data > ", "Create a filter"],
            pengecoh: ["Tools > ", "Filter Manual"],
            pemisah: "",
            explanation:
              "Mengaktifkan tombol penyaring data dilakukan melalui `Data > Create a filter`. Pengecoh menu Tools adalah penamaan keliru yang sering menggoda pemula saat mencari fitur filter pada lembar kerja spreadsheet, padahal menu Tools tidak menyediakan fungsionalitas AutoFilter tabel.",
          },
        },
        {
          kind: "step",
          id: "sheet-1-7",
          title: "Membekukan Baris Judul (Freeze Panes)",
          explanation:
            "Fitur Freeze Panes membekukan baris teratas (header) atau kolom pertama agar tetap terlihat di layar saat lembar kerja digulir (*scrolling*) ke bawah atau ke samping. Tanpa freeze panes, membaca tabel ratusan baris akan sangat melelahkan karena kamu kehilangan konteks nama kolom. Di Google Sheets jalurnya adalah \"View > Freeze > 1 row\", sedangkan di Excel jalurnya \"View > Freeze Panes > Freeze Top Row\". Ini adalah etika penyusunan laporan paling dasar sebelum berkas diserahkan ke atasan.",
          example: {
            code: "View > Freeze > 2 rows",
            output: "Dua baris teratas terkunci dan tetap terlihat saat lembar kerja di-scroll ke bawah.",
            note: "Pastikan sel aktif berada di tempat yang benar sebelum mengaktifkan Freeze Panes.",
          },
          instruction:
            "Kunci baris judul pertama tabel agar tetap terlihat di layar saat pengguna menggulir ratusan baris data ke bawah, melalui menu View dengan opsi pembekuan satu baris.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "view\\s*>\\s*freeze[^\\n]*(1\\s*row|top\\s*row|1\\s*baris|baris\\s*pertama)",
              flags: "i",
              message:
                "Tuliskan jalur menunya: View > Freeze > 1 row (atau Freeze Panes).",
            },
          ],
          solution: "View > Freeze > 1 row",
          susunKode: {
            question:
              "Susun perintah membekukan baris judul pertama pada menu View.",
            potongan: ["View > Freeze > ", "1 row"],
            pengecoh: ["Edit > Kunci > ", "Baris Judul"],
            pemisah: "",
            explanation:
              "Fitur membekukan baris judul agar tidak bergeser saat scrolling adalah `View > Freeze > 1 row`. Pengecoh menu Edit adalah jebakan umum yang sering keliru dicari pengguna baru spreadsheet, karena pengaturan tata letak tampilan lembar kerja selalu berada di menu View.",
          },
        },
        {
          kind: "step",
          id: "sheet-1-8",
          title: "Penghitungan Jumlah Baris Data (COUNTA)",
          explanation:
            "Fungsi `=COUNTA(A2:A100)` menghitung banyaknya sel yang terisi data (baik berupa teks, angka, maupun simbol) pada rentang tertentu di bawah header tabel. Fungsi ini digunakan untuk memeriksa volume entri transaksi atau menghitung jumlah pelanggan yang terdaftar tanpa perlu menghitung baris secara manual. Jebakan pemula: menggunakan `COUNT` biasa yang secara eksklusif hanya menghitung tipe data angka, sehingga kolom yang berisi nama orang atau ID teks akan mengembalikan hasil nol.",
          example: {
            code: "=COUNTA(B2:B50)",
            output: "Menghasilkan angka 49 jika seluruh sel B2 sampai B50 terisi teks nama pelanggan.",
            note: "COUNTA menghitung sel non-kosong baik berupa teks maupun angka.",
          },
          instruction:
            "Hitung banyaknya baris terisi yang memuat nama pelanggan (tipe data teks) pada rentang A2:A100 di bawah baris judul menggunakan fungsi agregasi penghitung sel non-kosong.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*COUNTA\\(",
              message:
                "Untuk menghitung jumlah sel terisi (angka maupun teks), gunakan COUNTA.",
            },
            {
              pattern: "A2:A100",
              message:
                "Sebutkan rentang selnya mulai dari baris data pertama: A2:A100.",
            },
          ],
          solution: "=COUNTA(A2:A100)",
          susunKode: {
            question:
              "Susun fungsi COUNTA untuk menghitung sel terisi pada rentang A2:A100.",
            potongan: ["=COUNTA(", "A2:A100)"],
            pengecoh: ["=COUNT(", "B2:B100)"],
            pemisah: "",
            explanation:
              "Fungsi `=COUNTA()` menghitung sel berisi teks maupun angka. Pengecoh `=COUNT()` hanya menghitung angka sehingga sel berisi teks akan menghasilkan 0, yang merupakan jebakan umum dalam pencatatan data laporan.",
          },
        },
        {
          kind: "step",
          id: "sheet-1-9",
          title: "Autofill Cepat dengan Double-Click Fill Handle",
          explanation:
            "Setelah menulis formula pada baris pertama tabel, kamu tidak perlu menyeret mouse (*drag-and-drop*) melewati ribuan baris data ke bawah yang melelahkan. Cukup lakukan klik ganda (*double-click*) pada kotak kecil hitam di pojok kanan bawah sel aktif yang disebut **fill handle**. Spreadsheet akan otomatis menduplikasi formula tersebut ke bawah secara instan tepat hingga baris terakhir yang terisi pada kolom di sebelah kirinya. Tindakan ini menghemat waktu analis secara drastis saat mengolah data puluhan ribu baris.",
          example: {
            code: "Ctrl + D",
            output: "Menduplikasi formula atau nilai dari sel tepat di atasnya ke sel yang sedang aktif.",
            note: "Klik ganda fill handle bekerja mengikuti tinggi baris data kolom di sebelahnya.",
          },
          instruction:
            "Setelah selesai menulis formula di sel teratas, kamu ingin menyalin formula tersebut ke ribuan baris di bawahnya secara instan tanpa perlu menggeser mouse berlama-lama. Tulis aksi cepat pada kotak kecil pojok kanan bawah sel aktif tersebut.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(double\\s*click|klik\\s*ganda)[^\\n]*(fill\\s*handle|kotak\\s*sudut|titik\\s*sel)|ctrl\\s*\\+\\s*e",
              flags: "i",
              message:
                "Tuliskan tindakan klik ganda pada fill handle: Double click fill handle.",
            },
          ],
          solution: "Double click fill handle",
          susunKode: {
            question:
              "Susun aksi menduplikasi formula secara cepat ke bawah tabel.",
            potongan: ["Double click ", "fill handle"],
            pengecoh: ["Tarik manual ", "scroll mouse"],
            pemisah: "",
            explanation:
              "Klik ganda pada fill handle (`Double click fill handle`) menduplikasi formula ke bawah seketika. Pengecoh menarik manual adalah tindakan keliru yang sering menjebak pemula dan memakan waktu lama saat baris data transaksi berjumlah ribuan di lembar kerja.",
          },
        },
        {
          kind: "quiz",
          id: "sheet-1-kuis",
          title: "Kuis: Dasar Spreadsheet",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Simbol apa yang digunakan untuk mengunci referensi sel menjadi Absolut (seperti $A$1) di Excel dan Google Sheets?",
              choices: ["$", "#", "@", "%"],
              answerIndex: 0,
              explanation:
                "Simbol Dolar ($) mengunci referensi kolom dan baris agar tidak bergeser saat formula disalin atau di-autofill ke sel lain.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Jika komputermu diatur dengan Regional Setting Indonesia, pemisah argumen formula manakah yang wajib digunakan alih-alih tanda koma?",
              choices: [
                "Titik koma (;)",
                "Titik dua (:)",
                "Garis miring (/)",
                "Tanda strip (-)",
              ],
              answerIndex: 0,
              explanation:
                "Pada Regional Setting Indonesia, koma dipakai sebagai penanda desimal sehingga pemisah antar-argumen formula berganti menjadi titik koma (;).",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Sel A1 berisi angka 0,25. Kamu mengubah formatnya menjadi Percentage sehingga tampil 25%. Apa yang terjadi pada nilai yang dipakai formula lain?",
              choices: [
                "Nilainya tetap 0,25 — format hanya mengubah tampilan, bukan isi memori sel",
                "Nilainya ikut berubah menjadi 25",
                "Sel berubah menjadi teks dan tidak bisa dihitung",
                "Formula lain otomatis menghasilkan error",
              ],
              answerIndex: 0,
              explanation:
                "Format sel hanya lapisan tampilan visual di layar; nilai asli di memori tetap 0,25 sehingga kalkulasi lain tidak terdistorsi.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Fitur apa yang digunakan agar baris judul tabel paling atas tetap terlihat di layar saat ribuan baris digulir ke bawah?",
              choices: [
                "Freeze Panes (Bekukan Baris)",
                "AutoSum",
                "Conditional Formatting",
                "Text to Columns",
              ],
              answerIndex: 0,
              explanation:
                "Freeze Panes mengunci baris header tabel agar tetap melayang di posisi atas saat pengguna melakukan scrolling lembar kerja.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Fungsi apakah yang digunakan untuk menghitung banyaknya sel yang berisi teks nama orang (non-angka) asalkan tidak kosong?",
              choices: ["COUNTA", "COUNT", "SUM", "AVERAGE"],
              answerIndex: 0,
              explanation:
                "Fungsi COUNTA menghitung seluruh sel yang terisi data apa pun, sedangkan COUNT biasa hanya menghitung sel yang bertipe data angka.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Apa arti kemunculan simbol pagar beruntun (###) pada sel spreadsheet yang memuat angka nominal?",
              choices: [
                "Kolom kurang lebar untuk menampilkan angka tersebut, lakukan auto-fit lebar kolom",
                "Rumus salah dan terjadi pembagian dengan angka nol",
                "Data di dalam sel telah terhapus oleh sistem",
                "Komputer mendeteksi adanya macro berbahaya",
              ],
              answerIndex: 0,
              explanation:
                "Simbol ### bukan error formula, melainkan pertanda visual bahwa lebar kolom sel tersebut terlalu sempit untuk memuat digit angka.",
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
          kind: "materi",
          id: "sheet-2-m1",
          title: "Fungsi Logika, Agregasi Bersyarat, dan Lookup Modern (XLOOKUP)",
          body:
            "# Fungsi Analisis & Logika Bisnis\n\n" +
            "Pekerjaan analisis data di spreadsheet bergeser dari sekadar perhitungan matematika dasar ke otomatisasi logika bisnis. Menggunakan fungsi logika (`IF`, `IFS`), pencarian acuan (`VLOOKUP`, `XLOOKUP`, `INDEX-MATCH`), manipulasi teks (`LEFT`, `MID`), dan agregasi bersyarat (`SUMIFS`, `COUNTIFS`, `AVERAGEIFS`), seorang analis mampu mengolah puluhan ribu baris transaksi mentah menjadi wawasan bisnis strategis dalam hitungan detik.\n\n" +
            "## Evolusi Pencarian Data: VLOOKUP vs INDEX-MATCH vs XLOOKUP\n\n" +
            "Selama puluhan tahun, `VLOOKUP` (Vertical Lookup) menjadi fungsi standar untuk mencocokkan data antar-tabel. Namun di dunia kerja nyata, `VLOOKUP` memiliki dua kelemahan struktural fatal:\n" +
            "1. **Hanya Bisa Mencari ke Kanan:** Kolom kunci pencarian (`lookup_value`) wajib berada di kolom paling kiri dari rentang tabel. Jika kolom ID berada di sebelah kanan nama karyawan, VLOOKUP gagal total.\n" +
            "2. **Patah Saat Disisipi Kolom Baru:** Karena mengandalkan nomor indeks kolom statis (misalnya kolom ke-3), menyisipkan satu kolom baru di tengah tabel master akan membuat formula langsung mengembalikan data yang keliru tanpa memicu error.\n" +
            "3. **Lupa Exact Match (FALSE / 0):** Parameter ke-4 yang terlupakan akan mengaktifkan *approximate match*, yang secara diam-diam mencocokkan data ke baris tetangga yang salah.\n\n" +
            "| Fitur Komparasi | VLOOKUP | INDEX & MATCH | XLOOKUP |\n" +
            "|---|---|---|---|\n" +
            "| **Arah Pencarian** | Hanya ke kanan | Kiri dan Kanan | Bebas ke mana saja |\n" +
            "| **Tahan Sisipan Kolom** | Tidak (Patah) | Ya (Dinamis) | Ya (Dinamis) |\n" +
            "| **Default Pencocokan** | Approximate (Wajib ketik FALSE) | Exact match (Wajib ketik 0) | Exact Match otomatis |\n" +
            "| **Kompatibilitas Versi** | Semua versi Excel | Semua versi Excel | Excel 365 & Google Sheets |\n\n" +
            "```text\n" +
            "ALUR KERJA XLOOKUP(lookup_val, lookup_array, return_array):\n" +
            "[Cari ID: 102] ---> [Kolom B: ID Pelanggan] ---> [Cocok di Baris 3]\n" +
            "                                                        |\n" +
            "                                                        v\n" +
            "[Kembalikan Nilai dari Kolom A: Nama Pelanggan (Bisa di sebelah kiri!)]\n" +
            "```\n\n" +
            "## Agregasi Bersyarat Modern: SUMIF(S), COUNTIF(S), AVERAGEIF(S)\n\n" +
            "Keluarga fungsi agregasi bersyarat memungkinkan perhitungan metrik berdasarkan syarat tertentu:\n" +
            "- **`SUMIF` & `SUMIFS`:** Menjumlahkan angka berdasarkan kriteria cabang, kategori, atau status.\n" +
            "- **`COUNTIF` & `COUNTIFS`:** Menghitung banyaknya frekuensi transaksi yang memenuhi kriteria.\n" +
            "- **`AVERAGEIF` & `AVERAGEIFS`:** Menghitung rata-rata nilai transaksi yang memenuhi syarat.\n\n" +
            "Pada fungsi lama `SUMIF` tunggal, urutan argumennya adalah `(rentang_kriteria, kriteria, rentang_jumlah)`. Namun pada `SUMIFS`, `COUNTIFS`, dan `AVERAGEIFS` modern yang mendukung banyak kriteria, rentang yang dijumlahkan (`sum_range` / `average_range`) diletakkan **di urutan paling depan**:\n\n" +
            "```text\n" +
            "=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)\n" +
            "=COUNTIFS(criteria_range1, criteria1, criteria_range2, criteria2)\n" +
            "=AVERAGEIFS(average_range, criteria_range1, criteria1, criteria_range2, criteria2)\n" +
            "```\n\n" +
            "Praktisi data korporat selalu menggunakan `SUMIFS` bahkan saat hanya membutuhkan 1 syarat saja, agar konsistensi struktur rumus tidak tertukar saat kriteria tambahan ditambahkan di kemudian hari.\n\n" +
            "## Fungsi Tanggal Esensial di Bidang Finance & HR\n\n" +
            "- **`TODAY()`:** Mengembalikan tanggal hari ini secara dinamis setiap kali lembar kerja dibuka.\n" +
            "- **Aging Piutang / Overdue:** `=TODAY() - A2` menghitung berapa hari keterlambatan pembayaran invoice pelanggan.\n" +
            "- **`EOMONTH(tanggal, 0)`:** Menghitung tanggal akhir bulan penutupan buku (*cut-off financial period*).\n" +
            "- **`DATEDIF(start, end, \"Y\")`:** Menghitung selisih tahun penuh (masa kerja karyawan atau usia aset).\n\n" +
            "## Kamus Pesan Error Spreadsheet & Cara Melacaknya\n\n" +
            "- **`#N/A` (Not Available):** Kunci pencarian tidak ditemukan di tabel master. Periksa apakah ada spasi liar di ujung teks atau tipe data angka vs teks yang tidak cocok.\n" +
            "- **`#REF!` (Reference Error):** Koordinat sel atau kolom yang dirujuk formula telah terhapus (*Deleted*).\n" +
            "- **`#VALUE!`:** Tipe data tidak cocok, misalnya mencoba mengalikan teks dengan angka.\n" +
            "- **`#DIV/0!`:** Terjadi pembagian dengan angka nol atau sel kosong.\n" +
            "- **`#NAME?`:** Salah mengetik nama fungsi (misal `VLOKUP`) atau lupa tanda kutip pada teks string.\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Lupa Tanda Dollar ($) pada VLOOKUP:** Menulis `=VLOOKUP(A2, C1:D50, 2, FALSE)` tanpa tanda dolar membuat rentang acuan meleset menjadi `C2:D51`, `C3:D52` saat disalin ke bawah, menyebabkan baris-baris bawah menghasilkan error `#N/A` palsu.\n" +
            "- **Membungkus IFERROR Terlalu Cepat:** Memasang `=IFERROR(rumus, 0)` saat masih merancang formula akan menyembunyikan kesalahan ketik nama fungsi sehingga kamu mengira rumusnya berhasil padahal selalu mengembalikan angka nol.\n" +
            "- **Tipe Data Kunci Lookup Mismatch:** Angka ID `101` (numerik) dicari pada tabel yang menyimpan `'101` (teks) akan selalu menghasilkan error `#N/A` karena spreadsheet menganggap keduanya entitas berbeda.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Menguasai `XLOOKUP`, `INDEX-MATCH`, dan `SUMIFS` adalah materi wajib saat menjalani tes teknis spreadsheet untuk posisi Financial Analyst, Supply Chain Planner, dan Business Intelligence di industri perbankan maupun startup teknologi.",
        },
        {
          kind: "step",
          id: "sheet-2-1",
          title: "Fungsi Logika IF & IFS",
          explanation:
            "Fungsi `=IF(kondisi, nilai_jika_benar, nilai_jika_salah)` melakukan pengujian logika untuk mengembalikan hasil yang berbeda berdasarkan terpenuhinya suatu syarat. Untuk mengevaluasi lebih dari dua kondisi bertingkat (misalnya penentuan kategori status pembayaran atau tier komisi penjualan), fungsi modern `=IFS()` jauh lebih ringkas dibanding menumpuk fungsi IF di dalam IF (nested IF). Digunakan setiap hari untuk klasifikasi otomatis status transaksi. Jebakan umum pemula: lupa membungkus teks output dengan tanda petik ganda sehingga memicu error `#NAME?`.",
          example: {
            code: '=IF(A1>=75, "Lulus", "Gagal")',
            output: "Mengembalikan teks 'Lulus' jika sel A1 bernilai 75 ke atas, dan 'Gagal' jika di bawahnya.",
            note: "Fungsi IFS menggantikan nested IF yang rumit jika ada lebih dari dua kriteria.",
          },
          instruction:
            "Bandingkan nilai penjualan di sel B2. Bila melebihi angka 1000, tetapkan status \"Bonus\". Sebaliknya, tetapkan status \"Standar\". Susun fungsi logika IF untuk kondisi bisnis ini.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*IF\\(",
              message:
                "Percabangan memakai fungsi IF dengan tiga argumen.",
            },
            {
              pattern: "B2\\s*>\\s*1000",
              message: "Argumen pertama kondisinya: B2 > 1000.",
            },
            {
              pattern: "[\"']Bonus[\"']\\s*,\\s*[\"']Standar[\"']",
              message:
                "Argumen hasil teks wajib dibungkus tanda petik ganda: \"Bonus\", \"Standar\".",
            },
          ],
          solution: '=IF(B2>1000, "Bonus", "Standar")',
          susunKode: {
            question:
              "Susun fungsi IF untuk penjualan B2 di atas 1000 bernilai Bonus atau Standar.",
            potongan: ["=IF(B2>1000, ", '"Bonus", "Standar")'],
            pengecoh: ["=JIKA(B2>1000, ", "Bonus, Standar)"],
            pemisah: "",
            explanation:
              "Fungsi `=IF()` membutuhkan tanda kutip untuk mengembalikan teks 'Bonus' atau 'Standar'. Tanpa tanda kutip adalah kesalahan menggoda yang menyebabkan error `#NAME?` karena dianggap nama variabel fiktif.",
          },
        },
        {
          kind: "step",
          id: "sheet-2-2",
          title: "Agregasi Bersyarat (SUMIFS & COUNTIFS)",
          explanation:
            "Fungsi `=SUMIFS(sum_range, criteria_range1, criteria1)` menjumlahkan nilai angka hanya pada baris yang memenuhi kriteria tertentu. Berbeda dengan fungsi lama `SUMIF`, fungsi `SUMIFS` menaruh rentang angka yang dijumlahkan (`sum_range`) di urutan paling pertama dan mendukung penambahan banyak kriteria penyaringan sekaligus. Fungsi ini dipakai untuk menghitung omset per cabang toko, total penjualan per kategori produk, atau rekap gaji per departemen. Jebakan pemula: tertukar antara urutan argumen `SUMIF` tunggal dan `SUMIFS` jamak.",
          example: {
            code: '=SUMIFS(C1:C100, A1:A100, "Elektronik")',
            output: "Menghitung total penjualan di kolom C khusus untuk baris yang kolom A-nya bernilai 'Elektronik'.",
            note: "SUMIFS mendukung banyak kriteria penyaringan secara bersamaan.",
          },
          instruction:
            "Hitung total nilai penjualan pada kolom C (C:C) khusus untuk baris transaksi yang statusnya tercatat \"Lunas\" pada kolom A (A:A) menggunakan fungsi agregasi bersyarat yang tepat.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUMIFS\\(",
              message: "Gunakan fungsi agregasi bersyarat SUMIFS.",
            },
            {
              pattern: "C:C\\s*,\\s*A:A\\s*,\\s*[\"']Lunas[\"']",
              message:
                "Urutannya: rentang yang dijumlahkan (C:C), rentang kriteria (A:A), lalu teks kriteria (\"Lunas\").",
            },
          ],
          solution: '=SUMIFS(C:C, A:A, "Lunas")',
          susunKode: {
            question:
              "Susun SUMIFS untuk menjumlahkan kolom C berdasarkan kolom A bernilai Lunas.",
            potongan: ["=SUMIFS(C:C, ", 'A:A, "Lunas")'],
            pengecoh: ["=SUMIF(C:C, ", '"Lunas", A:A)'],
            pemisah: "",
            explanation:
              "Pada `=SUMIFS()`, rentang yang dijumlahkan (`C:C`) ditaruh di awal. Pengecoh `=SUMIF()` menaruh rentang kriteria di awal yang keliru dan sering menjebak pengembang yang tertukar sintaks lama dan baru.",
          },
        },
        {
          kind: "step",
          id: "sheet-2-3",
          title: "Pencarian VLOOKUP & Kelemahannya",
          explanation:
            "Fungsi VLOOKUP (Vertical Lookup) mencari kata kunci secara vertikal di kolom paling kiri dari sebuah tabel referensi, lalu mengambil nilai pada kolom ke-n di baris yang sama. Parameter ke-4 wajib diisi `FALSE` (atau angka `0`) untuk memastikan pencarian persis (*exact match*). Dipakai untuk menarik nama produk atau harga berdasarkan kode SKU barang. Kelemahan fatal VLOOKUP: tidak bisa mengambil data di sebelah kiri kolom kunci, dan formulanya akan rusak mengembalikan data salah jika ada kolom baru disisipkan di tengah tabel master.",
          example: {
            code: "=VLOOKUP(101, A1:D100, 2, FALSE)",
            output: "Mencari ID 101 di kolom A lalu mengambil nilai dari kolom B (kolom ke-2).",
            note: "Selalu gunakan FALSE pada argumen ke-4 agar tidak terjadi salah cocok.",
          },
          instruction:
            "Tarik data harga produk dengan mencari kode barang sel A2 pada tabel master referensi C1:D50 kolom ke-2 dengan pencocokan persis (exact match FALSE).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*VLOOKUP\\(",
              message: "Pencarian vertikal klasik memakai fungsi VLOOKUP.",
            },
            {
              pattern: "A2\\s*,\\s*(\\$C\\$1:\\$D\\$50|C1:D50)\\s*,\\s*2",
              message:
                "Argumennya: nilai dicari (A2), tabel acuan (C1:D50 atau $C$1:$D$50), dan nomor indeks kolom (2).",
            },
            {
              pattern: "FALSE|0\\s*\\)",
              message:
                "Argumen keempat wajib bernilai FALSE atau 0 untuk pencocokan persis.",
            },
          ],
          solution: "=VLOOKUP(A2, C1:D50, 2, FALSE)",
          susunKode: {
            question:
              "Susun VLOOKUP pencocokan persis sel A2 pada rentang C1:D50 kolom ke-2.",
            potongan: ["=VLOOKUP(A2, C1:D50, ", "2, FALSE)"],
            pengecoh: ["=LOOKUP_PERSIS(A2, C1:D50, ", "2, TRUE)"],
            pemisah: "",
            explanation:
              "Argumen ke-4 `=VLOOKUP` wajib bernilai `FALSE` untuk pencocokan persis. Pengecoh `TRUE` adalah jebakan berbahaya yang mengasumsikan data terurut dan sering mengembalikan angka yang keliru tanpa error.",
          },
        },
        {
          kind: "step",
          id: "sheet-2-4",
          title: "Pengganti Modern: XLOOKUP",
          explanation:
            "Fungsi `=XLOOKUP(lookup_value, lookup_array, return_array)` adalah pengganti modern VLOOKUP yang jauh lebih tangguh di Excel 365 dan Google Sheets. XLOOKUP dapat mencari ke arah kiri maupun kanan secara bebas, tidak terpengaruh oleh penambahan kolom baru di tabel sumber, dan secara default melakukan pencarian persis tanpa perlu mengetik parameter `FALSE`. Dipakai di hampir seluruh proyek analisis spreadsheet modern untuk menggabungkan tabel transaksi dengan master data pelanggan. Jebakan pemula: jumlah baris pada `lookup_array` dan `return_array` harus sama persis.",
          example: {
            code: "=XLOOKUP(A2, C1:C100, B1:B100)",
            output: "Mencari nilai A2 di kolom C dan mengembalikan hasil dari kolom B di baris yang cocok.",
            note: "XLOOKUP secara default melakukan exact match tanpa perlu mengetik FALSE.",
          },
          instruction:
            "Gunakan fungsi pencarian modern fleksibel untuk mencari ID di sel A2 pada kolom kunci B (B:B), dan mengembalikan nama kontak dari kolom C (C:C).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*XLOOKUP\\(",
              message: "Gunakan fungsi pencarian modern XLOOKUP.",
            },
            {
              pattern: "A2\\s*,\\s*B:B\\s*,\\s*C:C",
              message:
                "Urutan argumennya: nilai yang dicari (A2), kolom pencarian (B:B), dan kolom hasil (C:C).",
            },
          ],
          solution: "=XLOOKUP(A2, B:B, C:C)",
          susunKode: {
            question:
              "Susun XLOOKUP untuk mencari nilai A2 di kolom B:B dan mengambil hasil dari C:C.",
            potongan: ["=XLOOKUP(A2, ", "B:B, C:C)"],
            pengecoh: ["=CARIDATA(A2, ", "B:B..C:C)"],
            pemisah: "",
            explanation:
              "Fungsi modern `=XLOOKUP(A2, B:B, C:C)` menerima rentang pencarian dan hasil secara terpisah. Pengecoh `=CARIDATA()` kuno memiliki batasan urutan data yang sering keliru dipakai pemula di lembar kerja spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-2-5",
          title: "Pencarian Fleksibel Dua Arah: INDEX & MATCH",
          explanation:
            "Kombinasi fungsi `=INDEX(return_range, MATCH(lookup_val, lookup_range, 0))` adalah standar industri klasik untuk pencarian data dua arah yang kompatibel di semua versi Microsoft Excel (termasuk versi lama yang belum memiliki XLOOKUP). Fungsi `MATCH` bertugas mencari posisi nomor baris dari kata kunci, lalu fungsi `INDEX` mengambil nilai pada nomor baris tersebut dari kolom tujuan. Keunggulannya: mampu mengambil data di sebelah kiri kolom kunci dan tidak patah saat kolom baru disisipkan. Jebakan pemula: lupa menyertakan angka 0 pada parameter ke-3 fungsi MATCH untuk memastikan pencarian exact match.",
          example: {
            code: "=INDEX(A:A, MATCH(101, B:B, 0))",
            output: "Mencari ID 101 di kolom B lalu mengambil nama pelanggan dari kolom A di sebelah kirinya.",
            note: "Kombinasi ini bekerja di semua versi Excel lama yang tidak punya XLOOKUP.",
          },
          instruction:
            "Lakukan pencarian dua arah untuk mencari nilai A2 pada kolom acuan C:C (exact match angka 0), lalu mengembalikan nilai dari kolom target B:B di sebelah kirinya.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*INDEX\\(\\s*B:B\\s*,\\s*MATCH\\(",
              message:
                "Gunakan fungsi INDEX dengan rentang hasil B:B, lalu masukkan MATCH sebagai argumen barisnya.",
            },
            {
              pattern: "A2\\s*,\\s*C:C\\s*,\\s*0\\s*\\)\\s*\\)",
              message:
                "Argumen MATCH: nilai dicari A2, rentang acuan C:C, dan angka 0 untuk exact match.",
            },
          ],
          solution: "=INDEX(B:B, MATCH(A2, C:C, 0))",
          susunKode: {
            question:
              "Susun formula INDEX-MATCH untuk mencari A2 di C:C dan mengambil hasil dari B:B.",
            potongan: ["=INDEX(B:B, ", "MATCH(A2, C:C, 0))"],
            pengecoh: ["=LOOKUP(B:B, ", "SEARCH(A2, C:C, 1))"],
            pemisah: "",
            explanation:
              "Kombinasi dua arah standar industri adalah `=INDEX(B:B, MATCH(A2, C:C, 0))`. Pengecoh `=LOOKUP()` dan `=SEARCH()` adalah nama fungsi yang keliru dan sering menjebak pemula yang tertukar dengan fungsi pencarian teks parsial.",
          },
        },
        {
          kind: "step",
          id: "sheet-2-6",
          title: "Mengekstrak Kode Teks dengan LEFT",
          explanation:
            "Fungsi manipulasi teks `=LEFT(teks, jumlah_karakter)` memotong dan mengambil sejumlah n karakter dari posisi paling depan (sisi kiri) sebuah string. Di dunia kerja, fungsi ini sering dipakai bersama `=RIGHT()` dan `=MID()` untuk mengekstrak kode kategori cabang, kode divisi, atau tahun dari sebuah string kode transaksi atau SKU barang (misal mengambil 'JKT' dari 'JKT-2026-001'). Jebakan pemula: hasil dari fungsi LEFT selalu bertipe data Teks meskipun karakter yang dipotong seluruhnya berupa angka, sehingga harus dikonversi jika ingin dihitung matematis.",
          example: {
            code: '=LEFT("SKU-9921", 3)',
            output: '"SKU"',
            note: "Gunakan RIGHT untuk memotong dari sisi kanan dan MID untuk memotong dari posisi tengah.",
          },
          instruction:
            "Ekstrak 3 karakter kode cabang paling depan dari kode transaksi barang di sel A2 menggunakan fungsi manipulasi teks sisi kiri.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*LEFT\\(",
              message: "Gunakan fungsi LEFT untuk mengambil karakter dari sisi kiri.",
            },
            {
              pattern: "A2\\s*,\\s*3\\s*\\)",
              message: "Argumennya: sel sumber A2 dan jumlah karakter yang diambil yaitu 3.",
            },
          ],
          solution: "=LEFT(A2, 3)",
          susunKode: {
            question:
              "Susun fungsi LEFT untuk mengekstrak 3 karakter awal dari sel A2.",
            potongan: ["=LEFT(", "A2, 3)"],
            pengecoh: ["=POTONG(", "B2, 3)"],
            pemisah: "",
            explanation:
              "Mengekstrak karakter dari sebelah kiri menggunakan `=LEFT(A2, 3)`. Pengecoh `=POTONG()` adalah istilah fiktif yang sering keliru dipakai pemula yang mengira nama fungsi spreadsheet diterjemahkan bebas.",
          },
        },
        {
          kind: "step",
          id: "sheet-2-7",
          title: "Menentukan Tanggal Akhir Bulan (EOMONTH)",
          explanation:
            "Fungsi `=EOMONTH(start_date, months)` (End of Month) mengembalikan tanggal hari terakhir dari bulan yang ditentukan. Argumen kedua bernilai `0` untuk bulan berjalan, `1` untuk akhir bulan depan, atau `-1` untuk akhir bulan lalu. Fungsi ini sangat krusial dalam akuntansi dan pemodelan keuangan saat menentukan tanggal penutupan buku (*cut-off period*), jatuh tempo pembayaran invoice, atau menghitung batas amortisasi aset. Jebakan pemula: mengetik tanggal secara manual alih-alih menggunakan EOMONTH sehingga laporan keuangan tidak otomatis bergeser saat berganti bulan.",
          example: {
            code: "=EOMONTH(DATE(2026, 2, 1), 0)",
            output: "2026-02-28 (otomatis memperhitungkan jumlah hari pada bulan tersebut).",
            note: "Sangat berguna untuk menentukan tanggal jatuh tempo invoice tagihan.",
          },
          instruction:
            "Tentukan tanggal penutupan buku akhir bulan berjalan dari tanggal invoice di sel A2 menggunakan fungsi tanggal akhir bulan dengan offset 0.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*EOMONTH\\(",
              message: "Gunakan fungsi EOMONTH untuk menentukan tanggal akhir bulan.",
            },
            {
              pattern: "A2\\s*,\\s*0\\s*\\)",
              message: "Argumennya: sel tanggal A2 dan angka offset 0 untuk bulan berjalan.",
            },
          ],
          solution: "=EOMONTH(A2, 0)",
          susunKode: {
            question:
              "Susun fungsi EOMONTH untuk tanggal akhir bulan berjalan dari sel A2.",
            potongan: ["=EOMONTH(", "A2, 0)"],
            pengecoh: ["=AKHIR_BULAN(", "B2, 1)"],
            pemisah: "",
            explanation:
              "Tanggal akhir bulan dihitung dengan `=EOMONTH(A2, 0)`. Pengecoh `=AKHIR_BULAN()` adalah nama fungsi fiktif yang sering keliru disangka valid oleh pengguna baru yang mengira nama rumus spreadsheet diterjemahkan bebas, padahal EOMONTH adalah fungsi standar global.",
          },
        },
        {
          kind: "step",
          id: "sheet-2-8",
          title: "Penanganan Error dengan IFERROR",
          explanation:
            "Fungsi `=IFERROR(formula, nilai_fallback)` menangkap pesan error matematika atau pencarian (seperti `#N/A`, `#VALUE!`, `#DIV/0!`) dan menggantinya dengan nilai alternatif yang lebih ramah (misalnya angka `0` atau teks `\"Tidak Ditemukan\"`). Fungsi ini dipakai untuk membungkus formula `VLOOKUP` atau `XLOOKUP` agar dashboard eksekutif terlihat bersih dan profesional tanpa sel yang dipenuhi pesan error merah. Jebakan pemula: membungkus formula dengan IFERROR terlalu dini sebelum memastikan bahwa formula intinya sudah bebas dari bug logika.",
          example: {
            code: '=IFERROR(XLOOKUP(A1, D:D, E:E), "Tidak Ada")',
            output: "Menampilkan teks 'Tidak Ada' jika data tidak ditemukan, alih-alih menampilkan pesan error #N/A.",
            note: "Menjaga tampilan laporan bisnis tetap rapi dan bebas dari pesan error teknis.",
          },
          instruction:
            "Bungkus formula pencarian VLOOKUP exact match yang mencari A2 di rentang B:C kolom 2 dengan penanganan error agar mengembalikan angka 0 jika data tidak ditemukan.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*IFERROR\\(",
              message: "Gunakan fungsi pembungkus error IFERROR.",
            },
            {
              pattern: "VLOOKUP\\(",
              message: "Taruh formula pencarian VLOOKUP di argumen pertama.",
            },
            {
              pattern: ",\\s*0\\s*\\)\\s*$",
              message: "Sertakan nilai fallback angka 0 pada argumen kedua.",
            },
          ],
          solution: "=IFERROR(VLOOKUP(A2, B:C, 2, FALSE), 0)",
          susunKode: {
            question:
              "Susun IFERROR untuk membungkus VLOOKUP dengan nilai pengganti 0.",
            potongan: ["=IFERROR(VLOOKUP(A2, B:C, 2, FALSE), ", "0)"],
            pengecoh: ["=CEKERROR(VLOOKUP(A2, B:C, 2, FALSE), ", '"KOSONG")'],
            pemisah: "",
            explanation:
              "Penanganan kondisi error di spreadsheet menggunakan fungsi resmi `=IFERROR()`. Pengecoh `=CEKERROR()` adalah sintaks fiktif yang sering keliru dipakai di lembar kerja oleh pemula, yang merupakan jebakan umum bagi pengguna baru saat merancang formula pembungkus.",
          },
        },
        {
          kind: "step",
          id: "sheet-2-9",
          title: "Menghitung Selisih Hari Jatuh Tempo (Aging Piutang)",
          explanation:
            "Dalam manajemen keuangan dan piutang usaha (Accounts Receivable), analis menghitung berapa hari keterlambatan pembayaran invoice sejak tanggal jatuh tempo (*overdue aging*) terhadap hari ini. Menggunakan fungsi dinamis `=TODAY() - A2`, selisih hari akan dihitung secara otomatis dan selalu terbarukan setiap kali berkas dibuka. Angka selisih hari ini menjadi dasar pengelompokan penagihan (0-30 hari, 31-60 hari, >90 hari). Jebakan pemula: mengetik tanggal hari ini secara statis sehingga analisis keterlambatan menjadi basi pada keesokan harinya.",
          example: {
            code: "=TODAY() - B2",
            output: "14 (menghitung bahwa pembayaran invoice di sel B2 telah terlambat 14 hari per hari ini).",
            note: "Fungsi TODAY() tidak membutuhkan argumen di dalam tanda kurungnya.",
          },
          instruction:
            "Sel A2 memuat tanggal jatuh tempo invoice tagihan pelanggan. Hitung jumlah hari keterlambatan pembayaran tersebut terhadap tanggal hari ini secara dinamis menggunakan pengurangan dengan fungsi TODAY.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TODAY\\(\\)\\s*-\\s*A2",
              flags: "i",
              message: "Tuliskan formula selisih hari ini terhadap tanggal jatuh tempo: =TODAY() - A2",
            },
          ],
          solution: "=TODAY() - A2",
          susunKode: {
            question:
              "Susun formula selisih tanggal hari ini dinamis dengan sel jatuh tempo A2.",
            potongan: ["=TODAY() -", " A2"],
            pengecoh: ["=HARI_INI() -", " B2"],
            pemisah: "",
            explanation:
              "Formula selisih tanggal terhadap hari ini memakai `=TODAY() - A2`. Pengecoh `=HARI_INI()` adalah nama fungsi fiktif yang keliru dan sering menjebak pemula, serta sel B2 bukan merupakan sel acuan tanggal jatuh tempo yang diminta pada instruksi soal.",
          },
        },
        {
          kind: "quiz",
          id: "sheet-2-kuis",
          title: "Kuis: Fungsi untuk Analisis",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Kombinasi fungsi klasik apa di Excel yang direkomendasikan untuk pencarian dua arah dan kompatibel di SEMUA versi Excel lama tanpa batasan arah kolom?",
              choices: ["INDEX & MATCH", "VLOOKUP & HLOOKUP", "IF & OR", "SEARCH & FIND"],
              answerIndex: 0,
              explanation:
                "Kombinasi INDEX dan MATCH adalah solusi pencarian dua arah universal yang didukung oleh semua versi Microsoft Excel dari dulu hingga sekarang.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Pesan error manakah di Spreadsheet yang menandakan bahwa sel acuan atau kolom yang dirujuk oleh formula telah terhapus dari lembar kerja?",
              choices: ["#REF!", "#N/A", "#VALUE!", "#DIV/0!"],
              answerIndex: 0,
              explanation:
                "Pesan #REF! (Reference Error) muncul ketika koordinat sel atau rentang yang dirujuk oleh formula telah terhapus dari spreadsheet.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Fungsi tanggal apa yang paling praktis untuk mendapatkan tanggal akhir bulan penutupan buku (*cut-off*) secara dinamis pada laporan keuangan?",
              choices: ["EOMONTH", "TODAY", "DATEVALUE", "DAY"],
              answerIndex: 0,
              explanation:
                "Fungsi EOMONTH (End of Month) secara otomatis menghitung dan mengembalikan tanggal terakhir dari bulan yang ditentukan.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Pada fungsi SUMIFS, di manakah posisi rentang kolom angka yang akan dijumlahkan (*sum_range*)?",
              choices: [
                "Di urutan paling pertama sebelum rentang-rentang kriteria",
                "Di urutan paling terakhir setelah seluruh kriteria",
                "Di tengah-tengah antara kriteria pertama dan kedua",
                "Boleh ditaruh di mana saja secara bebas",
              ],
              answerIndex: 0,
              explanation:
                "Pada SUMIFS, rentang yang dijumlahkan ditaruh di urutan paling awal, berbeda dengan SUMIF tunggal lama yang menaruhnya di akhir.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Untuk memotong dan mengambil tepat 3 karakter pertama dari sebelah kiri pada kode barang di sel A1, fungsi apa yang harus dipakai?",
              choices: ["=LEFT(A1, 3)", "=RIGHT(A1, 3)", "=MID(A1, 3)", "=TRIM(A1, 3)"],
              answerIndex: 0,
              explanation:
                "Fungsi LEFT mengambil sejumlah n karakter dari posisi paling awal (sisi kiri) sebuah string teks.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Mengapa formula VLOOKUP yang disalin ke bawah sering kali menghasilkan error #N/A pada baris-baris bawahnya padahal kuncinya ada di tabel acuan?",
              choices: [
                "Karena rentang tabel acuan tidak dikunci dengan tanda dolar ($) sehingga bergeser ke bawah saat di-copy",
                "Karena Excel hanya bisa mencari maksimal 10 baris data saja",
                "Karena VLOOKUP otomatis kadaluarsa setelah 5 kali pemanggilan",
                "Karena kolom acuan harus diubah menjadi format mata uang",
              ],
              answerIndex: 0,
              explanation:
                "Lupa mengunci tabel master dengan referensi absolut ($) membuat rentang acuan ikut bergeser ke bawah saat formula disalin, menyebabkan data master terpotong.",
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
          kind: "materi",
          id: "sheet-3-m1",
          title: "Teknik Pembersihan Data (Data Cleaning) & Standarisasi",
          body:
            "# Pembersihan Data (Data Cleaning)\n\n" +
            "Di industri nyata, data mentah yang diunduh dari database SQL, formulir survei online, mesin kasir POS, atau sistem ERP **hampir tidak pernah bersih**. Adanya spasi tak terlihat di ujung kata, penulisan nama kota yang tidak seragam (`Jakarta` vs `JAKARTA` vs `jkt`), baris transaksi duplikat, dan karakter strip pada nomor telepon dapat merusak seluruh analisis.\n\n" +
            "Prinsip utama analisis data adalah **Garbage In, Garbage Out (GIGO)**: jika data yang dimasukkan kotor, hasil kalkulasi dan grafik dashboard yang dihasilkan pun akan keliru. Praktisi data profesional menghabiskan hingga 80% total waktu proyek hanya untuk pembersihan data sebelum tahap visualisasi dimulai.\n\n" +
            "## 7 Langkah SOP Pembersihan Data Profesional\n\n" +
            "1. **Duplikat Sheet Cadangan (Raw Backup):** Jangan pernah menyentuh data asli sebelum membuat tab sheet cadangan.\n" +
            "2. **Pembersihan Spasi Liar (`TRIM` & `CLEAN`):** Menghapus spasi di depan, belakang, dan karakter non-cetak.\n" +
            "3. **Standarisasi Huruf (`PROPER` / `UPPER`):** Menyeragamkan huruf besar-kecil agar Pivot Table tidak memecah kategori yang sama.\n" +
            "4. **Pembersihan Tanda Pemisah (`SUBSTITUTE` / `Text to Columns`):** Membuang simbol atau memecah teks CSV terpadu.\n" +
            "5. **Audit Duplikasi (`UNIQUE` / Remove Duplicates):** Mengidentifikasi baris transaksi yang terinput ganda.\n" +
            "6. **Kunci Nilai Statis (Paste Special as Values):** Memutus ketergantungan kolom bantu sebelum kolom asal dihapus.\n" +
            "7. **Pasang Batasan Input (Data Validation):** Mencegah kesalahan ketik pada entri baru dengan menu dropdown.\n\n" +
            "```text\n" +
            "+------------------+      +-------------------+      +-------------------+\n" +
            "|   Data Mentah    | ---> |  Hapus Spasi Liar | ---> | Standardisasi Text|\n" +
            "|  \"  jkt   dps \"  |      |   TRIM / CLEAN    |      |  PROPER / UPPER   |\n" +
            "+------------------+      +-------------------+      +-------------------+\n" +
            "                                                               |\n" +
            "                                                               v\n" +
            "+------------------+      +-------------------+      +-------------------+\n" +
            "|  Data Siap Olah  | <--- | Validasi Dropdown | <--- | Hapus Duplikat    |\n" +
            "|  \"Jakarta\"       |      | Data Validation   |      | UNIQUE / Remove   |\n" +
            "+------------------+      +-------------------+      +-------------------+\n" +
            "```\n\n" +
            "## Pola Pencarian Lanjutan (Wildcard Find & Replace)\n\n" +
            "Fitur Find and Replace (`Ctrl + H`) di spreadsheet mendukung karakter wildcard:\n" +
            "- **Tanda Bintang (`*`):** Mewakili nol atau banyak karakter sembarang. Mengetik ` (*)` di kotak Find dan mengosongkan Replace akan menghapus seluruh teks dalam tanda kurung seperti `Kopi Susu (Promo)` menjadi `Kopi Susu`.\n" +
            "- **Tanda Tanya (`?`):** Mewakili tepat satu karakter sembarang.\n" +
            "- **Karakter Tilde (`~*` atau `~?`):** Digunakan untuk mencari simbol bintang atau tanda tanya yang sebenarnya.\n\n" +
            "## Toolkit Pembersihan Data di Spreadsheet\n\n" +
            "| Alat / Fitur | Kegunaan Utama | Jalur Menu / Formula | Hasil Nyata |\n" +
            "|---|---|---|---|\n" +
            "| **`TRIM()`** | Hapus spasi ganda & spasi ujung | `=TRIM(A2)` | `\" Budi \"` -> `\"Budi\"` |\n" +
            "| **`PROPER()`** | Format Huruf Kapital Tiap Kata | `=PROPER(A2)` | `\"kopi gayo\"` -> `\"Kopi Gayo\"` |\n" +
            "| **`SUBSTITUTE()`** | Ganti karakter spesifik | `=SUBSTITUTE(A2, \"-\", \"\")` | `\"0812-345\"` -> `\"0812345\"` |\n" +
            "| **`Text to Columns` / `SPLIT`** | Memecah teks satu sel | Data > Text to Columns / `=SPLIT(A2, \",\")` | `\"Budi,Jakarta\"` terpecah ke 2 kolom |\n" +
            "| **`UNIQUE()`** | Ekstrak daftar unik dinamis | `=UNIQUE(A2:A100)` | Menghasilkan master list tanpa duplikat |\n" +
            "| **Data Validation** | Buat dropdown pembatas input | Data > Data validation | Mencegah salah ketik entri baru |\n" +
            "| **Paste Special Values** | Kunci hasil formula jadi nilai statis | `Ctrl + Alt + V > Values` | Melepaskan ketergantungan kolom bantu |\n\n" +
            "## Praktik Terbaik: Paste Special as Values\n\n" +
            "Setelah kamu merapikan teks di kolom bantu menggunakan `=TRIM(PROPER(A2))`, jangan langsung menghapus kolom sumber aslinya! Formula akan menghasilkan error `#REF!`. Salin kolom hasilmu, lalu tempelkan kembali menggunakan **Paste Special > Values** (`Ctrl + Alt + V` di Windows atau `Cmd + Opt + V` di Mac) agar formulanya berubah menjadi data teks permanen.\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Melakukan Remove Duplicates Tanpa Salinan Cadangan:** Menjalankan menu `Data > Remove Duplicates` menghapus baris tabel secara permanen dari file. Selalu duplikat tab sheet cadangan (*backup sheet*) sebelum membersihkan data mentah.\n" +
            "- **Mengira TRIM Menghapus Seluruh Spasi:** `TRIM` menyisakan **satu spasi tunggal** di antara dua kata karena spasi antar-kata memang diperlukan dalam bahasa baku. Jika ingin membuang semua spasi tanpa sisa (misalnya merapikan nomor rekening bank), gunakan `=SUBSTITUTE(A2, \" \", \"\")`.\n" +
            "- **Pivot Table Membedakan Kapitalisasi Teks:** Huruf besar-kecil yang tidak konsisten membuat Pivot Table menganggap `\"Jakarta\"` dan `\"JAKARTA\"` sebagai dua cabang yang berbeda. Selalu standarisasi teks dengan `PROPER()` atau `UPPER()` sebelum pivot dibuat.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di dunia kerja nyata, memasang **Data Validation Dropdown** pada lembar kerja operasional kantor terbukti mencegah kesalahan input administratif hingga 95%. Praktisi data profesional juga memanfaatkan Power Query (*Get & Transform*) di Excel untuk mengotomatisasi proses pembersihan data bulanan yang berulang.",
        },
        {
          kind: "step",
          id: "sheet-3-1",
          title: "Membersihkan Spasi Liar dengan TRIM",
          explanation:
            "Fungsi `=TRIM(A2)` secara otomatis menghapus spasi di awal string, spasi berlebih di akhir string, dan merapikan spasi ganda di antara kata menjadi spasi tunggal. Langkah ini adalah tindakan wajib pertama dalam pembersihan data mentah hasil unduhan sistem web sebelum diproses dengan `XLOOKUP` atau Pivot Table. Mengapa krusial: `\"Budi \"` dengan spasi di ujung dan `\"Budi\"` tanpa spasi dianggap sebagai dua entitas yang sama sekali berbeda oleh formula pencarian. Jebakan pemula: menyertakan sel angka sebagai input TRIM yang dapat mengubah formatnya menjadi teks.",
          example: {
            code: '=TRIM("  Budi  Sudarsono  ")',
            output: '"Budi Sudarsono" (spasi depan, belakang, dan ganda di tengah dibersihkan).',
            note: "TRIM sangat krusial dipanggil sebelum pemrosesan VLOOKUP atau Pivot Table.",
          },
          instruction:
            "Data ekspor pelanggan mencatat nama dengan spasi liar di awal dan akhir teks. Bersihkan seluruh spasi berlebih pada sel A2 menggunakan fungsi pembersihan spasi standar.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TRIM\\(",
              message: "Gunakan fungsi pembersih spasi TRIM.",
            },
            {
              pattern: "A2",
              message: "Arahkan argumennya ke sel sumber data: A2.",
            },
          ],
          solution: "=TRIM(A2)",
          susunKode: {
            question: "Susun pembersihan spasi liar sel A2 dengan fungsi TRIM.",
            potongan: ["=TRIM(", "A2)"],
            pengecoh: ["=POTONG_SPASI(", "B2)"],
            pemisah: "",
            explanation:
              "Fungsi `=TRIM(A2)` membuang spasi ganda dan spasi di ujung teks. Pengecoh `=POTONG_SPASI()` diadaptasi dari istilah Bahasa Indonesia dan keliru jika diterapkan pada rumus kalkulasi lembar kerja spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-3-2",
          title: "Menghapus Duplikat & Mengekstrak Nilai Unik",
          explanation:
            "Mengekstrak daftar unik dari data transaksi yang berulang dilakukan menggunakan formula dinamis `=UNIQUE(range)`. Berbeda dengan fitur menu `Data > Remove Duplicates` yang menghapus baris tabel secara permanen, fungsi `UNIQUE` menghasilkan daftar baru yang otomatis ter-update tanpa merusak tabel data mentah aslinya. Fungsi ini dipakai untuk mengekstrak master pelanggan, daftar SKU produk unik, atau daftar wilayah cabang dari ribuan baris log transaksi. Jebakan pemula: menyertakan baris judul ke dalam rentang UNIQUE sehingga kata judul ikut tercantum sebagai data unik.",
          example: {
            code: "=UNIQUE(A1:A100)",
            output: "Daftar nilai unik satu kolom tanpa baris yang berulang.",
            note: "Gunakan UNIQUE untuk membuat daftar master secara dinamis.",
          },
          instruction:
            "Hasilkan daftar master nilai unik tanpa baris yang berulang dari rentang log transaksi A1 hingga A50 menggunakan fungsi ekstraksi nilai unik dinamis.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*UNIQUE\\(",
              message: "Gunakan fungsi ekstraksi nilai unik UNIQUE.",
            },
            {
              pattern: "A1:A50",
              message: "Sebutkan rentang sumbernya: A1:A50.",
            },
          ],
          solution: "=UNIQUE(A1:A50)",
          susunKode: {
            question:
              "Susun fungsi UNIQUE untuk mengambil daftar nilai unik dari rentang A1:A50.",
            potongan: ["=UNIQUE(", "A1:A50)"],
            pengecoh: ["=DISTINCT(", "B1:B50)"],
            pemisah: "",
            explanation:
              "Fungsi mengambil data unik pada spreadsheet adalah `=UNIQUE()`. Pengecoh `=DISTINCT()` berasal dari kata kunci SQL yang sering keliru diketik oleh pengembang database saat mengolah lembar kerja spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-3-3",
          title: "Memecah Teks dengan Text to Columns / SPLIT",
          explanation:
            "Memecah teks dilakukan menggunakan fitur `Data > Text to Columns` di Excel atau fungsi dinamis `=SPLIT(teks, pemisah)` di Google Sheets (dan `=TEXTSPLIT()` di Excel 365). Fitur ini membagi string teks panjang yang tergabung di dalam satu sel (seperti format CSV `\"Budi,Jakarta,0812\"`) menjadi beberapa kolom terpisah berdasarkan karakter pemisah (*delimiter*) seperti tanda koma atau spasi. Dipakai saat merapikan data identitas atau mengekstrak atribut barang. Jebakan pemula: sel di sebelah kanan yang akan terisi pecahan teks tidak boleh memiliki isi data lain agar tidak tertimpa atau memicu error `#SPILL!`.",
          example: {
            code: '=SPLIT(A1, " ")',
            output: "Nama 'Budi Sudarsono' terpisah ke 2 sel berdampingan: 'Budi' dan 'Sudarsono'.",
            note: "Karakter pemisah (delimiter) bisa berupa koma, spasi, atau titik koma.",
          },
          instruction:
            "Data ekspor memuat gabungan nama dan kota yang dipisahkan koma di sel A2. Pecah string teks tersebut ke dalam kolom-kolom terpisah berdasarkan delimiter tanda koma (,).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*(TEXT)?SPLIT\\(",
              message: "Gunakan fungsi pemecah string SPLIT (atau TEXTSPLIT).",
            },
            {
              pattern: "A2\\s*,\\s*[\"'],[\"']",
              message: "Argumennya: sel sumber A2 dan tanda pemisah koma dalam kutip (\",\").",
            },
          ],
          solution: '=SPLIT(A2, ",")',
          susunKode: {
            question:
              "Susun fungsi SPLIT untuk memecah teks sel A2 berdasarkan koma.",
            potongan: ["=SPLIT(A2, ", '",")'],
            pengecoh: ["=PECAH_TEKS(A2, ", '";")'],
            pemisah: "",
            explanation:
              "Fungsi `=SPLIT(A2, \",\")` memecah string berdasarkan delimiter koma. Pengecoh `=PECAH_TEKS()` adalah nama fungsi fiktif yang sering menggoda tetapi keliru dan menjadi jebakan umum, karena bukan merupakan nama fungsi resmi pada ekosistem spreadsheet modern.",
          },
        },
        {
          kind: "step",
          id: "sheet-3-4",
          title: "Find & Replace Karakter Khusus (SUBSTITUTE)",
          explanation:
            "Penggantian karakter teks secara presisi di dalam formula dilakukan menggunakan fungsi `=SUBSTITUTE(teks, teks_lama, teks_baru)`. Berbeda dengan Find & Replace manual (`Ctrl + H`) yang mengubah data asal secara permanen, fungsi `SUBSTITUTE` secara fleksibel mengganti kemunculan karakter tertentu (seperti simbol mata uang `\"Rp \"` atau tanda strip `\"-\"`) menjadi string kosong `\"\"`. Fungsi ini dipakai untuk membersihkan deretan nomor telepon atau teks angka kotor agar bisa dihitung kembali. Jebakan pemula: fungsi SUBSTITUTE peka huruf besar-kecil (*case-sensitive*).",
          example: {
            code: '=SUBSTITUTE(A1, "Rp ", "")',
            output: "Menghapus teks 'Rp ' dari string harga sehingga menyisakan digit angka saja.",
            note: "Gunakan string kosong \"\" sebagai pengganti jika ingin menghapus karakter.",
          },
          instruction:
            "Nomor kontak pelanggan di sel A2 memuat tanda pemisah strip (misal 0812-3456-7890). Bersihkan setiap karakter tanda strip (-) tersebut menjadi string kosong tanpa spasi menggunakan fungsi pengganti teks formula.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUBSTITUTE\\(",
              message: "Gunakan fungsi pengganti karakter teks SUBSTITUTE.",
            },
            {
              pattern: "A2\\s*,\\s*[\"']-[\"']\\s*,\\s*[\"'][\"']",
              message:
                "Tiga argumennya: sel sumber A2, tanda strip (\"-\"), dan string kosong (\"\").",
            },
          ],
          solution: '=SUBSTITUTE(A2, "-", "")',
          susunKode: {
            question:
              "Susun fungsi SUBSTITUTE untuk mengganti tanda strip '-' dengan string kosong di A2.",
            potongan: ["=SUBSTITUTE(A2, ", '"-", "")'],
            pengecoh: ["=GANTI_TEKS(A2, ", '"-", " ")'],
            pemisah: "",
            explanation:
              "Penggantian karakter dalam teks spreadsheet menggunakan fungsi resmi `=SUBSTITUTE()`. Pengecoh `=GANTI_TEKS()` adalah fungsi fiktif yang sering menjebak pemula yang keliru mengira nama fungsi dapat diterjemahkan bebas tanpa mengikuti standar fungsi rumus internasional.",
          },
        },
        {
          kind: "step",
          id: "sheet-3-5",
          title: "Membuat Dropdown List dengan Data Validation",
          explanation:
            "Fitur Data Validation digunakan untuk memasang batasan input data pada sel, salah satunya dengan menampilkan menu pilihan dropdown (*List*). Melalui menu `Data > Data validation`, pengguna dipaksa memilih opsi standar yang telah ditentukan (misalnya hanya boleh memilih antara status 'Lunas' atau 'Pending') alih-alih mengetik manual. Fitur ini sangat krusial dalam pembuatan template formulir entri data di kantor agar terbebas dari kesalahan ketik (*typo*). Jebakan pemula: mengizinkan pengetikan teks bebas pada kolom kategori laporan.",
          example: {
            code: "Data > Data validation\nKriteria: List (Ya, Tidak)",
            output: "Dropdown pilihan Ya dan Tidak muncul di sel yang dipilih, membatasi input pengguna.",
            note: "Mencegah inkonsistensi input data sejak tahap pencatatan awal di lembar kerja.",
          },
          instruction:
            "Pasang aturan validasi data dropdown pada sel agar pengguna hanya dapat memilih opsi status 'Lunas' atau 'Pending' melalui menu Data validation dengan kriteria List.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "data\\s*>\\s*data\\s*validation",
              flags: "i",
              message: "Tuliskan jalur menunya: Data > Data validation.",
            },
            {
              pattern: "(list|daftar)[^\\n]*(lunas\\s*,\\s*pending|pending\\s*,\\s*lunas)",
              flags: "i",
              message: "Tentukan kriterianya berupa List berisi Lunas, Pending.",
            },
          ],
          solution: "Data > Data validation\nKriteria: List (Lunas, Pending)",
          susunKode: {
            question:
              "Susun pembuatan dropdown List Lunas dan Pending lewat Data Validation.",
            potongan: ["Data > Data validation\n", "Kriteria: List (Lunas, Pending)"],
            pengecoh: ["Menu > Dropdown List\n", "Pilihan: Lunas ATAU Pending"],
            pemisah: "",
            explanation:
              "Membuat pilihan dropdown dilakukan lewat `Data > Data validation` dengan opsi List. Pengecoh `Menu > Dropdown List` adalah penamaan fiktif yang sering keliru dicari oleh pemula dan merupakan jebakan menggoda bagi pengguna yang belum terbiasa dengan menu Data.",
          },
        },
        {
          kind: "step",
          id: "sheet-3-6",
          title: "Standarisasi Casing Teks (PROPER, UPPER, LOWER)",
          explanation:
            "Fungsi standarisasi kapitalisasi teks digunakan untuk menyeragamkan format penulisan huruf pada lembar kerja. `=PROPER(A1)` mengubah teks menjadi huruf kapital di awal setiap kata (Title Case), `=UPPER(A1)` mengubah seluruh teks menjadi huruf besar, dan `=LOWER(A1)` mengubah menjadi huruf kecil semua. Dipakai saat merapikan entri nama pelanggan, alamat kota, atau nama produk sebelum dikelompokkan ke dalam Pivot Table. Jebakan pemula: kata singkatan badan usaha (seperti `PT` atau `CV`) akan ikut diubah menjadi `Pt` atau `Cv` saat diformat dengan PROPER.",
          example: {
            code: '=PROPER("budi sudarsono")',
            output: '"Budi Sudarsono" (setiap awal kata diawali huruf kapital).',
            note: "Gunakan UPPER() untuk kapital semua dan LOWER() untuk huruf kecil semua.",
          },
          instruction:
            "Nama kota pelanggan tercatat dengan huruf kecil semua di sel A2. Ubah format teks tersebut menjadi berawalan huruf kapital pada setiap awal kata (Title Case) menggunakan fungsi teks standar.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*PROPER\\(",
              message: "Gunakan fungsi kapitalisasi kata PROPER.",
            },
            {
              pattern: "A2",
              message: "Sebutkan sel sumber datanya: A2.",
            },
          ],
          solution: "=PROPER(A2)",
          susunKode: {
            question:
              "Susun fungsi PROPER untuk mengubah sel A2 menjadi huruf kapital tiap kata.",
            potongan: ["=PROPER(", "A2)"],
            pengecoh: ["=KAPITAL_KATA(", "B2)"],
            pemisah: "",
            explanation:
              "Fungsi kapitalisasi huruf pertama tiap kata adalah `=PROPER(A2)`. Pengecoh `=KAPITAL_KATA()` adalah nama fungsi fiktif yang sering menggoda pemula yang keliru dan belum menghafal fungsi teks standar pada spreadsheet, sehingga menjadi jebakan umum dalam olah data.",
          },
        },
        {
          kind: "step",
          id: "sheet-3-7",
          title: "Menghitung Jumlah Duplikat Data",
          explanation:
            "Menghitung banyaknya baris duplikat dilakukan dengan mengurangkan total baris data asli dengan total baris data unik: `=COUNTA(A1:A50) - COUNTA(UNIQUE(A1:A50))`. Jika angka selisihnya lebih besar dari nol, berarti terdapat entri transaksi yang terinput lebih dari satu kali di dalam tabel tersebut. Formula gabungan ini dipakai dalam *checklist sanity check* audit kualitas data sebelum melakukan rekapitulasi keuangan. Jebakan pemula: lupa menyertakan rentang sel acuan yang identik pada kedua fungsi COUNTA.",
          example: {
            code: "=COUNTA(B1:B20) - COUNTA(UNIQUE(B1:B20))",
            output: "2 (menandakan ada 2 baris data yang merupakan duplikasi entri sebelumnya).",
            note: "Mengevaluasi kebersihan data sebelum dilakukan agregasi.",
          },
          instruction:
            "Lakukan audit kualitas data pada rentang A1:A50 dengan menyusun formula yang mengurangkan jumlah total seluruh baris dengan jumlah baris yang bernilai unik.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*COUNTA\\(\\s*A1:A50\\s*\\)\\s*-",
              message: "Mulai dengan menghitung total baris asli: COUNTA(A1:A50) -",
            },
            {
              pattern: "COUNTA\\(\\s*UNIQUE\\(",
              message: "Lalu kurangkan dengan jumlah baris uniknya: COUNTA(UNIQUE(A1:A50)).",
            },
          ],
          solution: "=COUNTA(A1:A50) - COUNTA(UNIQUE(A1:A50))",
          susunKode: {
            question:
              "Susun formula penghitungan selisih total baris dengan total unik rentang A1:A50.",
            potongan: ["=COUNTA(A1:A50) - ", "COUNTA(UNIQUE(A1:A50))"],
            pengecoh: ["=COUNT(A1:A50) - ", "COUNT(DISTINCT(A1:A50))"],
            pemisah: "",
            explanation:
              "Selisih baris duplikat dihitung dari `=COUNTA(A1:A50) - COUNTA(UNIQUE(A1:A50))`. Pengecoh `=COUNT()` dan `=DISTINCT()` adalah kombinasi kesalahan umum yang keliru dipakai untuk sel berisi data teks pada spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-3-8",
          title: "Pembersihan Pola Teks dengan Wildcard Find & Replace",
          explanation:
            "Saat membersihkan ribuan nama produk yang ditempeli teks keterangan dalam tanda kurung (seperti 'Kopi Susu (Promo)' atau 'Donat Coklat (Diskon 50%)'), menghapus manual satu per satu akan memakan waktu berjam-jam. Fitur Find and Replace (`Ctrl + H`) menyediakan karakter wildcard tanda bintang (`*`) yang mewakili deretan karakter sembarang. Dengan mencari pola ` (*)` dan mengosongkan kotak Replace, spreadsheet akan secara serentak menghapus semua teks dalam kurung tanpa merusak nama produk intinya. Ini adalah trik efisiensi tingkat tinggi para praktisi olah data.",
          example: {
            code: "Find: Rp * > Replace with: ",
            output: "Menghapus teks awalan 'Rp ' beserta nominal di belakangnya dari deretan deskripsi transaksi.",
            note: "Gunakan tanda tilde (~*) jika ingin mencari simbol bintang literal.",
          },
          instruction:
            "Pada kotak dialog Find and Replace (Ctrl+H), bersihkan semua keterangan dalam tanda kurung pada kolom produk. Masukkan pola wildcard tanda kurung pada kotak pencarian dan kosongkan bagian pengganti teksnya.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "find[^\\n]*\\(\\*\\)[^\\n]*replace",
              flags: "i",
              message: "Tuliskan polanya: Find: (*) > Replace with: ",
            },
          ],
          solution: "Find: (*) > Replace with: ",
          susunKode: {
            question:
              "Susun parameter Find and Replace untuk menghapus seluruh teks dalam kurung.",
            potongan: ["Find: (*) > ", "Replace with: "],
            pengecoh: ["Cari: (?) > ", "Ganti: Hapus"],
            pemisah: "",
            explanation:
              "Menghapus seluruh teks di dalam kurung menggunakan wildcard `Find: (*) > Replace with: `. Pengecoh `(?)` adalah kesalahan keliru yang sering menjebak pemula karena tanda tanya hanya menyasar tepat satu karakter saja, bukan seluruh teks di dalam kurung.",
          },
        },
        {
          kind: "quiz",
          id: "sheet-3-kuis",
          title: "Kuis: Pembersihan Data",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Fungsi teks apa di Spreadsheet yang digunakan untuk mengubah string teks menjadi format kapital pada setiap awal kata (Title Case)?",
              choices: ["PROPER", "UPPER", "CAPITAL", "TITLE"],
              answerIndex: 0,
              explanation:
                "Fungsi PROPER mengubah karakter pertama setiap kata menjadi huruf besar dan huruf sisanya menjadi huruf kecil.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Apa tindakan yang wajib dilakukan setelah merapikan data dengan formula di kolom bantu sebelum menghapus kolom data mentah aslinya?",
              choices: [
                "Menyalin dan menempelkan sebagai Paste Special > Values",
                "Langsung menghapus kolom asli tanpa menyalin",
                "Menyimpan file sebagai format PDF",
                "Mengubah warna font menjadi putih",
              ],
              answerIndex: 0,
              explanation:
                "Paste Special as Values mengunci hasil formula menjadi teks/angka permanen sehingga tidak memicu error #REF! saat kolom asal dihapus.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Fungsi spreadsheet apa yang menghapus semua ruang spasi kosong liar di awal dan akhir teks serta merapikan spasi ganda di tengah?",
              choices: ["TRIM", "CLEAN", "STRIP", "SPLIT"],
              answerIndex: 0,
              explanation:
                "TRIM sangat ampuh untuk membersihkan spasi tersembunyi hasil copy-paste dari sistem luar.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Apa kegunaan utama dari fitur 'Data Validation' > 'List' pada sel lembar kerja?",
              choices: [
                "Membuat pilihan dropdown di sel untuk mencegah salah ketik input user",
                "Mencegah file spreadsheet terkena macro virus",
                "Memeriksa apakah data tersebut terhubung ke internet",
                "Mengenkripsi kolom agar tidak dapat dibaca orang lain",
              ],
              answerIndex: 0,
              explanation:
                "Data Validation List membuat pilihan dropdown di sel untuk memastikan pengguna memasukkan data sesuai opsi standar tanpa typo.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Untuk menghasilkan daftar nama unik klien secara dinamis dari kolom yang berisi ribuan baris transaksi berulang, fungsi mana yang paling praktis?",
              choices: ["=UNIQUE(range)", "=FILTER(range)", "=SUMIF(range)", "=VLOOKUP(range)"],
              answerIndex: 0,
              explanation:
                "Fungsi UNIQUE mengekstrak data dan hanya mengembalikan satu entri unik dari setiap nilai, membuang baris duplikat.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Pada fitur Find and Replace (Ctrl+H), simbol wildcard apa yang digunakan untuk mewakili sembarang rangkaian karakter dengan panjang berapa pun?",
              choices: ["Tanda bintang (*)", "Tanda tanya (?)", "Tanda pagar (#)", "Tanda seru (!)"],
              answerIndex: 0,
              explanation:
                "Tanda bintang (*) adalah karakter wildcard yang mewakili nol atau banyak karakter sembarang dalam operasi pencarian teks.",
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
          kind: "materi",
          id: "sheet-4-m1",
          title: "Pivot Table: Ringkasan Analisis Multidimensi Tanpa Rumus",
          body:
            "# Pivot Table & Ringkasan Data Multidimensi\n\n" +
            "**Pivot Table** adalah alat analisis paling powerful di spreadsheet yang memungkinkan kamu meringkas, mengiris (*slice-and-dice*), dan menganalisis puluhan ribu baris data transaksi mentah hanya dengan tindakan *drag-and-drop* nama kolom — tanpa perlu menulis satu baris rumus formula yang rumit.\n\n" +
            "Syarat mutlak membuat Pivot Table adalah data mentah harus dalam format **Tabel Rapi (Tabular Data)**:\n" +
            "1. Memiliki tepat satu baris judul (*header*) unik di baris paling atas.\n" +
            "2. Setiap baris mewakili tepat satu transaksi atau entri data.\n" +
            "3. **Dilarang keras ada sel yang di-merge (Merge Cells)** pada area data.\n" +
            "4. Tidak ada baris kosong di tengah-tengah data transaksi.\n\n" +
            "## Anatomi 4 Area Utama Pivot Table\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                          PIVOT TABLE EDITOR                             |\n" +
            "+------------------------------------+------------------------------------+\n" +
            "|  1. FILTERS (Penyaring Tabel)      |  2. COLUMNS (Label Menyamping)     |\n" +
            "|     Contoh: Status = Lunas         |     Contoh: Wilayah Cabang Toko    |\n" +
            "+------------------------------------+------------------------------------+\n" +
            "|  3. ROWS (Label Berjejer ke Bawah) |  4. VALUES (Angka Agregasi)        |\n" +
            "|     Contoh: Kategori Produk        |     Contoh: SUM of Penjualan       |\n" +
            "+------------------------------------+------------------------------------+\n" +
            "```\n\n" +
            "## Kekuatan Cross-Tabulation 2 Dimensi (Matriks Silang)\n\n" +
            "Kekuatan terbesar Pivot Table muncul saat kamu menyilangkan dimensi pada **Rows** dan **Columns** secara bersamaan. Contohnya:\n\n" +
            "```text\n" +
            "+--------------------+---------------+---------------+---------------+\n" +
            "| Kategori (Rows)    | Jakarta (Col) | Bandung (Col) |  Grand Total  |\n" +
            "+--------------------+---------------+---------------+---------------+\n" +
            "| Makanan Minuman    | Rp 45.000.000 | Rp 28.000.000 | Rp 73.000.000 |\n" +
            "| Elektronik         | Rp 82.000.000 | Rp 51.000.000 | Rp 133.000.000|\n" +
            "+--------------------+---------------+---------------+---------------+\n" +
            "| Grand Total        | Rp 127.000.000| Rp 79.000.000 | Rp 206.000.000|\n" +
            "+--------------------+---------------+---------------+---------------+\n" +
            "```\n\n" +
            "Dalam hitungan detik, manajemen dapat membaca performa per kategori produk, performa per wilayah, serta total keseluruhan tanpa membuat puluhan rumus `SUMIFS` yang rawan salah.\n\n" +
            "## Layout Standar Korporat: Tabular Form\n\n" +
            "Secara default, Excel menampilkan Pivot Table dalam format *Compact Form* yang menumpuk hierarki baris dalam satu kolom berlekuk. Di dunia profesional (finance & BI), format ini menyulitkan saat tabel ingin disalin ke model keuangan lain. Biasakan mengubah layout melalui menu pita ribbon:\n\n" +
            "- **`Design > Report Layout > Show in Tabular Form`:** Memecah setiap field ke dalam kolomnya masing-masing.\n" +
            "- **`Design > Report Layout > Repeat All Item Labels`:** Mengisi sel kosong yang dihasilkan oleh pengelompokan hierarki.\n\n" +
            "## Operasi Esensial Pivot Table di Dunia Kerja\n\n" +
            "| Fitur | Fungsi Utama | Contoh Penggunaan Bisnis |\n" +
            "|---|---|---|---|\n" +
            "| **Summarize Values** | Menentukan jenis agregasi | Mengubah SUM (Total Omset) menjadi AVERAGE atau COUNT. |\n" +
            "| **Show Values As** | Mengubah angka jadi persentase | `% of Grand Total` untuk melihat kontribusi omset per produk. |\n" +
            "| **Group by Tanggal** | Mengelompokkan transaksi harian | Klik kanan tanggal > `Group: Months, Years` untuk rekap bulanan. |\n" +
            "| **Calculated Field** | Membuat metrik hitungan di memori | Menghitung rasio Profit Margin (`=Profit / Penjualan`). |\n" +
            "| **Slicer** | Tombol filter visual interaktif | Tombol penyaring Bulan/Wilayah yang elegan untuk eksekutif. |\n" +
            "| **Refresh Data** | Memperbarui cache pivot | Memperbarui angka saat data mentah bertambah baris. |\n\n" +
            "## Praktik Terbaik: Ubah Menjadi Format Excel Table (Ctrl + T)\n\n" +
            "Masalah paling sering terjadi saat data transaksi baru bertambah adalah angka tersebut tidak ikut terhitung ke dalam Pivot Table karena rentang sumber awalnya statis (misal `A1:D500`). Biasakan mengubah data sumber menjadi **Excel Table (`Ctrl + T`)** terlebih dahulu sebelum membuat Pivot Table. Dengan demikian, setiap ada baris baru, rentang Pivot Table otomatis memanjang secara dinamis.\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Data Sumber Diubah Tapi Lupa REFRESH:** Pivot Table menyimpan data di dalam memori cache terpisah (*Pivot Cache*). Mengubah angka di lembar data mentah **tidak otomatis mengubah Pivot Table**. Kamu wajib mengeklik `PivotTable Analyze > Refresh` di Excel.\n" +
            "- **Menaruh Kolom Angka di Area Rows:** Menaruh kolom harga nominal ke area Rows akan membuat tabel pivot sangat panjang berjejer ke bawah alih-alih meringkas data.\n" +
            "- **Muncul Error Saat Grouping Tanggal:** Jika ada satu saja sel kosong atau teks pada kolom tanggal di data mentah, Excel akan menolak perintah grouping dengan pesan *'Cannot group that selection'*.\n" +
            "- **Adanya Kolom Tanpa Judul Header:** Jika ada satu saja kolom yang header-nya kosong, spreadsheet akan menolak pembuatan Pivot Table dengan pesan error *'The PivotTable field name is not valid'*.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Kemampuan membuat Pivot Table dalam waktu kurang dari 60 detik untuk menjawab pertanyaan pimpinan (seperti *'Produk apa yang menyumbang 80% omset di Jakarta kuartal ini?'*) adalah tes kemampuan teknis paling standar untuk posisi Business Analyst, Finance Officer, dan Commercial Planner.",
        },
        {
          kind: "step",
          id: "sheet-4-1",
          title: "Membuat Pivot Table Pertamamu",
          explanation:
            "Pivot table adalah alat peringkas: ribuan baris transaksi mentah diubah menjadi tabel ringkasan hanya dengan menyeret nama kolom, tanpa perlu menulis satu formula pun. Ia dibuat dari sebuah rentang data yang rapi — satu baris header di atas, satu baris berisi satu transaksi, tanpa sel yang di-merge. Di Excel jalurnya `Insert > PivotTable`, sedangkan di Google Sheets jalurnya `Insert > Pivot table`, lalu kamu menentukan rentang sumber datanya. Kesalahan paling sering di langkah ini adalah memilih rentang yang terpotong sehingga baris transaksi terbaru tidak pernah ikut terhitung.",
          example: {
            code: "Insert > Pivot table\nSumber data: Sheet1!A1:D2000",
            output: "Sheet baru terbuka berisi panel editor dengan daftar kolom: Tanggal, Wilayah, Kategori, Penjualan.",
            note: "Sertakan baris header di dalam rentang — nama kolomnya yang akan muncul sebagai field di editor.",
          },
          instruction:
            "Data transaksimu ada di Sheet1 mulai sel A1 (header) sampai D5000. Tulis dua baris: jalur menu untuk menyisipkan pivot table, lalu tentukan rentang sumber datanya lengkap dengan nama sheet.",
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
          susunKode: {
            question:
              "Susun langkah pembuatan Pivot Table dengan sumber Sheet1!A1:D5000.",
            potongan: ["Insert > Pivot table\n", "Sumber data: Sheet1!A1:D5000"],
            pengecoh: ["Menu > Tabel Pivot\n", "Sumber data: Sheet1!A1..D5000"],
            pemisah: "",
            explanation:
              "Jalur menu pembuatan pivot table diawali `Insert > Pivot table` dan menyertakan rentang data `Sheet1!A1:D5000`. Pengecoh `Menu > Tabel Pivot` keliru dan menjebak penamaan menu visual pada spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-4-2",
          title: "Empat Area: Rows, Columns, Values, Filters",
          explanation:
            "Isi tabel pivot ditentukan oleh penempatan kolom pada empat area. Area **Rows** menyajikan setiap nilai unik sebagai baris vertikal ke bawah; **Columns** melakukan hal serupa tetapi melebar horizontal ke samping; **Values** memuat angka metrik yang diagregasi; dan **Filters** menyaring seluruh tabel sekaligus. Pertanyaan bisnis langsung memandu penempatannya: 'total penjualan per kategori' berarti field Kategori ditaruh di Rows dan field Penjualan di Values. Jebakan pemula: menaruh kolom numerik di Rows sehingga tabel menjadi sepanjang data mentahnya.",
          example: {
            code: "Rows: Wilayah\nValues: SUM of Penjualan",
            output: "Tabel ringkasan 2 kolom: Jakarta 12.400.000 | Bandung 8.150.000 | Grand Total 20.550.000",
          },
          instruction:
            "Susun konfigurasi pivot untuk menjawab 'berapa total penjualan tiap kategori produk?'. Tulis dua baris: satu untuk area yang memuat field Kategori, satu lagi untuk area yang memuat agregasi jumlah dari field Penjualan.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "rows\\s*:\\s*kategori",
              flags: "i",
              message: "Taruh Kategori di area Rows.",
            },
            {
              pattern: "values\\s*:\\s*(sum|jumlah)[^\\n]*penjualan",
              flags: "i",
              message: "Taruh SUM of Penjualan di area Values.",
            },
          ],
          solution: "Rows: Kategori\nValues: SUM of Penjualan",
          susunKode: {
            question:
              "Susun penempatan field Kategori di Rows dan SUM Penjualan di Values.",
            potongan: ["Rows: Kategori\n", "Values: SUM of Penjualan"],
            pengecoh: ["Baris: Kategori\n", "Values: HITUNG of Penjualan"],
            pemisah: "",
            explanation:
              "Untuk menjumlahkan total nominal penjualan, agregasi yang digunakan adalah `SUM of Penjualan`. Pengecoh `HITUNG of Penjualan` keliru karena hanya menghitung jumlah baris transaksi pada laporan spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-4-3",
          title: "Mengganti Jenis Agregasi di Area Values",
          explanation:
            "Secara bawaan Pivot Table menjumlahkan angka (`SUM`) yang kamu tempatkan di Values, padahal kebutuhan analisis sering kali menuntut metrik lain. 'Berapa rata-rata transaksi?' membutuhkan agregasi AVERAGE, 'berapa volume pesanan?' membutuhkan COUNT, dan 'berapa nilai transaksi tertinggi?' membutuhkan MAX. Mengganti jenis agregasi dilakukan lewat menu `Summarize by` di Excel atau `Summarise by` di Google Sheets. Perhatikan satu jebakan: COUNT hanya menghitung sel berangka, jadi memakai kolom teks akan menghasilkan nol jika tidak diubah ke COUNTA.",
          example: {
            code: "Values: Penjualan\nSummarize by: AVERAGE",
            output: "Kolom nilai berubah dari total 20.550.000 menjadi rata-rata 342.500 per transaksi.",
          },
          instruction:
            "Manajemen ingin mengetahui nilai transaksi rata-rata per wilayah kerja, bukan total nominalnya. Tulis tiga baris konfigurasi: field di area Rows (Wilayah), field di area Values (Penjualan), dan tetapkan jenis agregasi rata-rata (Summarize by: AVERAGE).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "rows\\s*:\\s*wilayah",
              flags: "i",
              message: "Taruh Wilayah di area Rows.",
            },
            {
              pattern: "values\\s*:[^\\n]*penjualan",
              flags: "i",
              message: "Taruh Penjualan di area Values.",
            },
            {
              pattern: "(summari[sz]e\\s*by|agregasi)\\s*:\\s*average",
              flags: "i",
              message: "Ganti agregasinya menjadi AVERAGE.",
            },
          ],
          solution: "Rows: Wilayah\nValues: Penjualan\nSummarize by: AVERAGE",
          susunKode: {
            question:
              "Susun konfigurasi Pivot Table untuk rata-rata penjualan per Wilayah.",
            potongan: ["Rows: Wilayah\nValues: Penjualan\n", "Summarize by: AVERAGE"],
            pengecoh: ["Baris: Wilayah\nValues: Penjualan\n", "Summarize by: RATA_RATA"],
            pemisah: "",
            explanation:
              "Jenis agregasi rata-rata pada Pivot Table dinamakan `AVERAGE`. Pengecoh `RATA_RATA` tidak ada pada opsi bawaan tabel pivot dan sering keliru dipilih oleh pemula dalam mengolah data laporan spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-4-4",
          title: "Pengelompokan Tanggal (Group by Bulan & Tahun)",
          explanation:
            "Data mentah transaksi selalu tercatat harian, tetapi laporan manajemen membutuhkan ringkasan berkala per Bulan, Kuartal, atau Tahun. Fitur **Grouping** pada Pivot Table memungkinkan kamu mengelompokkan ribuan tanggal transaksi harian secara instan tanpa perlu membuat kolom rumus tambahan di tabel data mentah. Caranya: klik kanan salah satu sel tanggal pada Pivot Table, pilih menu `Group`, lalu centang opsi periode yang diinginkan (misalnya `Months` dan `Years`). Jebakan pemula: fitur Group akan dinonaktifkan oleh Excel jika terdapat satu saja sel kosong atau teks pada kolom tanggal di data mentah.",
          example: {
            code: "Right click Tanggal > Group: Quarters",
            output: "Data tanggal harian langsung diringkas menjadi kelompok kuartal Q1, Q2, Q3, dan Q4.",
            note: "Pastikan seluruh sel di kolom tanggal data mentah terisi format tanggal valid.",
          },
          instruction:
            "Kelompokkan ribuan transaksi harian pada Pivot Table menjadi ringkasan bulanan dan tahunan. Tulis perintah aksinya: klik kanan sel field Tanggal lalu pilih Group dengan opsi Months, Years.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(right\\s*click|klik\\s*kanan)[^\\n]*tanggal",
              flags: "i",
              message: "Klik kanan pada sel field Tanggal di tabel pivot.",
            },
            {
              pattern: "group[^\\n]*(month|year|bulan|tahun)",
              flags: "i",
              message: "Pilih perintah Group dengan periode Months dan Years.",
            },
          ],
          solution: "Right click Tanggal > Group: Months, Years",
          susunKode: {
            question:
              "Susun tindakan grouping tanggal menjadi bulanan dan tahunan pada Pivot Table.",
            potongan: ["Right click Tanggal > ", "Group: Months, Years"],
            pengecoh: ["Double click Tanggal > ", "Format: Tanggal Bulanan"],
            pemisah: "",
            explanation:
              "Pengelompokan tanggal di Pivot Table dilakukan dengan `Right click Tanggal > Group: Months, Years`. Pengecoh double-click adalah aksi keliru yang sering menjebak pemula karena justru membuka rincian baris data mentah (drill-down) alih-alih menampilkan menu grouping.",
          },
        },
        {
          kind: "step",
          id: "sheet-4-5",
          title: "Menampilkan Proporsi: % of Grand Total",
          explanation:
            "Angka nominal menjawab 'berapa', tetapi tidak menjawab 'seberapa besar kontribusinya terhadap keseluruhan'. Pivot table dapat mengubah tampilan nilai agregasi menjadi persentase kontribusi tanpa menulis formula tambahan lewat opsi `Show values as` di Excel atau `Show as` di Google Sheets. Fitur ini sangat sering dipakai dalam analisis portofolio produk untuk menemukan kontributor omset terbesar. Perhatikan basis persentasenya saat presentasi, karena `% of Grand Total`, `% of Row Total`, dan `% of Column Total` memiliki arti pembagian yang berbeda.",
          example: {
            code: "Values: Jumlah Transaksi\nShow as: % of Row Total",
            output: "Setiap baris wilayah menampilkan persentase transaksinya sendiri terhadap total baris tersebut.",
          },
          instruction:
            "Ubah kolom nilai penjualan per kategori agar menampilkan proporsi kontribusi persentase terhadap keseluruhan total. Tulis dua baris: field di area Values (Penjualan), dan tetapkan opsi tampilan persentase total (Show as: % of Grand Total).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "values\\s*:[^\\n]*penjualan",
              flags: "i",
              message: "Sebutkan field Penjualan di area Values.",
            },
            {
              pattern: "show\\s*(values\\s*)?as\\s*:\\s*%\\s*of\\s*grand\\s*total",
              flags: "i",
              message: "Pilih Show as: % of Grand Total.",
            },
          ],
          solution: "Values: Penjualan\nShow as: % of Grand Total",
          susunKode: {
            question:
              "Susun konfigurasi proporsi penjualan sebagai persentase total.",
            potongan: ["Values: Penjualan\n", "Show as: % of Grand Total"],
            pengecoh: ["Nilai: Penjualan\n", "Show as: Persen Total"],
            pemisah: "",
            explanation:
              "Opsi persentase total di Pivot Table bernama `Show as: % of Grand Total`. Pengecoh `Persen Total` adalah istilah buatan yang keliru dan tidak dikenali oleh sistem spreadsheet untuk analisis data laporan.",
          },
        },
        {
          kind: "step",
          id: "sheet-4-6",
          title: "Calculated Field: Metrik yang Tidak Ada di Data Mentah",
          explanation:
            "Margin keuntungan, harga rata-rata per unit, dan rasio komisi sering kali tidak tersedia sebagai kolom di tabel data mentah. **Calculated Field** memungkinkan kamu membuat kolom formula hitungan baru langsung di dalam memori Pivot Table tanpa perlu mengotori data sumber dengan kolom bantu. Formulanya menggunakan nama field, misalnya `=Profit / Penjualan`. Keuntungan terbesarnya: rasio pada baris grand total dihitung dari total profit dibagi total penjualan secara akurat, bukan rata-rata dari persentase tiap baris.",
          example: {
            code: "Calculated field\nNama: Rata-rata Unit\nFormula: =Penjualan / Qty",
            output: "Kolom Rata-rata Unit muncul di pivot: Elektronik 2.450.000 | Makanan 185.000.",
          },
          instruction:
            "Tabel pivot memiliki field Profit dan Penjualan. Buat kolom hitungan baru (Calculated field) bernama Margin yang membagi nilai field Profit dengan Penjualan.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(nama|name)\\s*:\\s*margin",
              flags: "i",
              message: "Beri nama field-nya: Margin.",
            },
            {
              pattern: "=\\s*Profit\\s*/\\s*Penjualan",
              flags: "i",
              message: "Formulanya =Profit / Penjualan.",
            },
          ],
          solution: "Calculated field\nNama: Margin\nFormula: =Profit / Penjualan",
          susunKode: {
            question:
              "Susun Calculated Field Margin dengan formula Profit dibagi Penjualan.",
            potongan: ["Calculated field\nNama: Margin\n", "Formula: =Profit / Penjualan"],
            pengecoh: ["Opsi Hitung\nNama: ProfitMargin\n", "Formula: =Profit - Penjualan"],
            pemisah: "",
            explanation:
              "Margin dihitung dari pembagian `=Profit / Penjualan`. Operator pengurangan `-` adalah kesalahan logika rumus yang keliru dan sering menjebak pemula dalam analisis keuangan lembar kerja spreadsheet, karena margin mengukur persentase rasio, bukan nominal laba kotor.",
          },
        },
        {
          kind: "step",
          id: "sheet-4-7",
          title: "Slicer: Filter yang Bisa Diklik Atasanmu",
          explanation:
            "Filter bawaan tabel pivot berfungsi baik untuk analis, tetapi eksekutif non-teknis jarang mau membuka dropdown bertingkat. **Slicer** menyediakan tombol-tombol filter visual interaktif yang diletakkan langsung di samping tabel atau dashboard, sehingga siapa pun bisa mengklik tombol 'Jakarta' lalu melihat seluruh angka laporan menyesuaikan seketika. Di Excel jalurnya `Insert > Slicer`, sedangkan di Google Sheets jalurnya `Data > Add a slicer`. Satu slicer bahkan dapat dihubungkan ke beberapa tabel pivot sekaligus.",
          example: {
            code: "Insert > Slicer\nField: Wilayah",
            output: "Panel tombol Jakarta, Bandung, Surabaya muncul di atas pivot; mengklik salah satunya menyaring seluruh tabel.",
          },
          instruction:
            "Dashboard penjualanmu membutuhkan panel tombol penyaring visual agar manajemen dapat memilih periode waktu. Tulis jalur menu untuk menyisipkan slicer, lalu tentukan field Bulan sebagai tombol filternya.",
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
              message: "Pilih field Bulan sebagai tombol filternya.",
            },
          ],
          solution: "Insert > Slicer\nField: Bulan",
          susunKode: {
            question:
              "Susun penambahan Slicer dengan field Bulan untuk filter interaktif.",
            potongan: ["Insert > Slicer\n", "Field: Bulan"],
            pengecoh: ["Menu > Pemotong Data\n", "Pilih: Bulan_Tahun"],
            pemisah: "",
            explanation:
              "Fitur tombol filter interaktif dibuat melalui `Insert > Slicer`. Pengecoh `Menu > Pemotong Data` adalah istilah fiktif yang keliru dan bukan merupakan perintah menu standar pada lembar kerja spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-4-8",
          title: "Refresh: Kenapa Angka Pivot Tidak Ikut Berubah",
          explanation:
            "Berbeda dari formula biasa yang langsung menghitung ulang seketika, Pivot Table membaca salinan data di dalam memori cache (*Pivot Cache*) agar performa spreadsheet tetap ringan saat mengolah puluhan ribu baris. Akibatnya, mengubah angka di data sumber tidak otomatis memperbarui tabel pivot. Di Excel kamu wajib me-refresh secara eksplisit melalui tab `PivotTable Analyze > Refresh` (atau klik kanan tabel pivot > Refresh). Jika lupa me-refresh, seluruh laporan manajemen akan menyajikan angka usang tanpa memunculkan pesan error apa pun.",
          example: {
            code: "Data > Refresh all",
            output: "Seluruh pivot table dan koneksi data di seluruh workbook langsung diperbarui serentak.",
            note: "Jadikan data sumber sebagai Excel Table (Ctrl+T) agar baris baru otomatis ikut terhitung.",
          },
          instruction:
            "Kamu telah memperbaiki data penjualan yang salah di lembar data mentah, namun angka di Pivot Table masih menampilkan angka lama. Tulis jalur menu di Excel untuk memperbarui memori cache tabel tersebut.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(pivottable\\s*analyze|analyze|data)\\s*>\\s*refresh",
              message:
                "Tulis jalur menunya di Excel: PivotTable Analyze > Refresh.",
            },
          ],
          solution: "PivotTable Analyze > Refresh",
          susunKode: {
            question:
              "Susun penyegaran data Pivot Table dari menu kontekstual.",
            potongan: ["PivotTable Analyze >", " Refresh"],
            pengecoh: ["Menu Utama >", " Muat Ulang"],
            pemisah: " ",
            explanation:
              "Memperbarui cache data pivot table dilakukan lewat `PivotTable Analyze > Refresh`. Pengecoh `Muat Ulang` adalah nama perintah fiktif yang sering keliru dicari saat data baru ditambahkan ke spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-4-9",
          title: "Cross-Tabulation 2 Dimensi (Pivot Bertingkat)",
          explanation:
            "Analisis bisnis bertingkat sering kali menuntut perbandingan matriks silang dua dimensi: melihat kontribusi produk di setiap wilayah cabang. Dengan menaruh satu dimensi pada area **Rows** dan dimensi kedua pada area **Columns**, Pivot Table akan menyilangkan data transaksi menjadi kisi tabel ringkasan yang memperlihatkan subtotal baris, subtotal kolom, dan Grand Total di pojok kanan bawah. Konfigurasi ini menjawab dua pertanyaan bisnis sekaligus dalam satu tampilan layar.",
          example: {
            code: "Rows: Departemen\nColumns: Tahun\nValues: COUNT of Karyawan",
            output: "Tabel matriks silang menampilkan jumlah staf per departemen dari tahun ke tahun.",
            note: "Menyilangkan Rows dan Columns adalah kekuatan utama analisis tabular.",
          },
          instruction:
            "Direktur meminta laporan matriks silang penjualan produk per wilayah cabang. Susun konfigurasi Pivot Table 2 dimensi: tempatkan field Kategori pada Rows, field Wilayah pada Columns, dan jumlahkan omset dengan field Penjualan pada Values.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "rows\\s*:[^\\n]*kategori",
              flags: "i",
              message: "Taruh Kategori di area Rows.",
            },
            {
              pattern: "columns\\s*:[^\\n]*wilayah",
              flags: "i",
              message: "Taruh Wilayah di area Columns.",
            },
            {
              pattern: "values\\s*:[^\\n]*(sum|jumlah)[^\\n]*penjualan",
              flags: "i",
              message: "Taruh SUM of Penjualan di area Values.",
            },
          ],
          solution: "Rows: Kategori\nColumns: Wilayah\nValues: SUM of Penjualan",
          susunKode: {
            question:
              "Susun Pivot Table 2 dimensi Kategori di Rows, Wilayah di Columns, dan SUM Penjualan di Values.",
            potongan: ["Rows: Kategori\nColumns: Wilayah\n", "Values: SUM of Penjualan"],
            pengecoh: ["Baris: Kategori\nKolom: Wilayah\n", "Values: COUNT of Penjualan"],
            pemisah: "",
            explanation:
              "Matriks silang 2 dimensi menyilangkan baris dan kolom dengan agregasi `Values: SUM of Penjualan`. Pengecoh `COUNT` adalah pilihan keliru yang sering menjebak pemula karena hanya menghitung jumlah baris transaksi tanpa menjumlahkan akumulasi omset nominal yang diminta.",
          },
        },
        {
          kind: "quiz",
          id: "sheet-4-kuis",
          title: "Kuis: Pivot Table",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Fitur visual apa di Excel/Sheets yang menyediakan tombol filter interaktif di atas Pivot Table untuk mempermudah eksekutif menyaring data?",
              choices: ["Slicer", "Calculated Field", "Sparkline", "VLOOKUP"],
              answerIndex: 0,
              explanation:
                "Slicer adalah tombol filter visual interaktif yang memudahkan penyaringan data di Pivot Table dan Dashboard.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Mengapa mengubah angka pada tabel data mentah tidak langsung mengubah angka pada Pivot Table di Microsoft Excel?",
              choices: [
                "Karena Pivot Table memuat datanya di memori terpisah (Pivot Cache) dan memerlukan perintah Refresh",
                "Karena Pivot Table bersifat permanen dan tidak bisa diperbarui lagi",
                "Karena Excel hanya memperbarui data setiap 24 jam sekali",
                "Karena Pivot Table hanya bisa membaca data dari file CSV eksternal",
              ],
              answerIndex: 0,
              explanation:
                "Pivot Table memuat data di memori terpisah (Pivot Cache) demi kecepatan kalkulasi, sehingga kita wajib mengeklik tombol Refresh setelah data sumber diubah.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Fitur Pivot Table yang memungkinkan analis membuat formula kalkulasi metrik baru (seperti Profit Margin) tanpa menambah kolom di data mentah disebut...",
              choices: ["Calculated Field", "Custom Column", "Pivot Formula", "Slicer Metric"],
              answerIndex: 0,
              explanation:
                "Calculated Field membuat metrik turunan baru langsung di dalam tabel pivot tanpa menambah beban ukuran data mentah.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Format tabel seperti apa yang direkomendasikan untuk membungkus data mentah sebelum membuat Pivot Table agar baris baru otomatis ikut terhitung?",
              choices: [
                "Excel Table resmi (menggunakan shortcut Ctrl + T)",
                "Tabel dengan banyak sel yang di-merge",
                "Tabel yang memiliki baris kosong di tengah-tengah",
                "Tabel tanpa baris judul di kolom paling atas",
              ],
              answerIndex: 0,
              explanation:
                "Format Excel Table (Ctrl + T) memiliki structured reference dinamis sehingga penambahan transaksi baru otomatis terhubung ke Pivot Table.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara paling cepat meringkas ribuan transaksi tanggal harian menjadi laporan bulanan dan tahunan di Pivot Table?",
              choices: [
                "Klik kanan salah satu tanggal pada Pivot Table lalu pilih perintah Group (Months, Years)",
                "Membuat 12 sheet terpisah untuk masing-masing bulan secara manual",
                "Mengubah format font sel menjadi tebal satu per satu",
                "Menghapus seluruh tanggal dan menggantinya dengan teks bulan",
              ],
              answerIndex: 0,
              explanation:
                "Fitur Grouping pada tanggal secara otomatis mengelompokkan ribuan entri harian menjadi periode bulanan atau kuartalan.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Opsi layout Pivot Table manakah pada tab Design yang memecah hierarki data ke dalam kolom-kolom terpisah agar mudah dikutip dan disalin ke lembar kerja lain?",
              choices: [
                "Report Layout > Show in Tabular Form",
                "Report Layout > Show in Compact Form",
                "Grand Totals > Off for Rows and Columns",
                "Subtotals > Do Not Show Subtotals",
              ],
              answerIndex: 0,
              explanation:
                "Tabular Form menyajikan setiap dimensi field dalam kolom terpisah dengan format kisi klasik, sangat ideal untuk diekspor atau dikutip.",
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
          kind: "materi",
          id: "sheet-5-m1",
          title: "Visualisasi Data, Prinsip Decluttering, dan Desain Dashboard",
          body:
            "# Visualisasi Data & Desain Dashboard\n\n" +
            "Visualisasi data di dunia bisnis bukan sekadar mempercantik laporan, melainkan tentang **Data Storytelling** — menyajikan temuan angka secara cepat, jujur, dan mudah dipahami oleh eksekutif tanpa memerlukan penjelasan lisan yang berbelit-belit. Seorang analis yang baik memahami bahwa audiens eksekutif hanya memiliki waktu 10 hingga 30 detik untuk menyerap inti pesan dari sebuah laporan.\n\n" +
            "## Panduan Memilih Jenis Grafik yang Tepat\n\n" +
            "| Jenis Chart | Kapan Wajib Dipakai | Kapan Dilarang Keras | Contoh Kasus Bisnis |\n" +
            "|---|---|---|---|\n" +
            "| **Line Chart (Garis)** | Data deret waktu (*time-series*) berurutan. | Membandingkan kategori diskrit tanpa urutan waktu. | Tren Omset Penjualan Bulanan (Jan-Des). |\n" +
            "| **Bar / Column Chart (Batang)** | Membandingkan volume antar-kategori diskrit. | Terlalu banyak kategori (>20 batang berdesakan). | Perbandingan Penjualan per Cabang Kota. |\n" +
            "| **Pie Chart (Lingkaran)** | Proporsi bagian dari total untuk 2–3 segmen saja. | Lebih dari 4 segmen atau selisih persentase sangat tipis. | Komposisi Pelanggan: Member (65%) vs Non-Member (35%). |\n" +
            "| **Combo Chart (Batang + Garis)** | Menampilkan dua metrik berskala beda dengan sumbu Y kedua (*Secondary Axis*). | Dua metrik dengan skala satuan yang sama persis. | Omset dalam Miliar (Batang) vs Profit Margin dalam % (Garis). |\n" +
            "| **Sparkline** | Grafik tren mini di dalam satu sel untuk tabel padat. | Memerlukan pembacaan koordinat angka presisi. | Tren 12 Bulan di samping tabel KPI ringkas. |\n\n" +
            "## Anatomi Dashboard Satu Layar (One-Page Executive Dashboard)\n\n" +
            "Pola membaca mata manusia mengikuti **Z-Pattern**: dari kiri atas ke kanan atas, lalu meluncur ke kiri bawah dan kanan bawah.\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|  KARTU KPI UTAMA (Font Besar 24pt, Label Abu-abu 10pt)                  |\n" +
            "|  [ Total Omset: Rp 1.2M ]  [ Total Transaksi: 4,520 ]  [ Margin: 24% ]   |\n" +
            "+------------------------------------+------------------------------------+\n" +
            "|  CHART TREN UTAMA (Line Chart)     |  BREAKDOWN KATEGORI (Bar Chart)    |\n" +
            "|  Tren Bulanan Sepanjang Tahun      |  Top 5 Produk Paling Laris         |\n" +
            "+------------------------------------+------------------------------------+\n" +
            "|  TOMBOL SLICER FILTER INTERAKTIF: [ 2026 ] [ Q1 ] [ Wilayah: Jakarta ]  |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Prinsip Decluttering & Sumbu Vertikal yang Jujur\n\n" +
            "**Decluttering** (dipopulerkan oleh Edward Tufte melalui rasio *Data-to-Ink*) adalah prinsip membuang seluruh elemen visual grafik yang tidak memberi nilai tambah informasi:\n\n" +
            "1. **Matikan Major Gridlines yang Terlalu Gelap:** Garis kisi abu-abu tebal hanya membuat mata lelah.\n" +
            "2. **Hapus Legenda jika Tidak Diperlukan:** Jika grafik hanya memiliki 1 seri data, hapus legenda dan taruh keterangan langsung pada judul grafik.\n" +
            "3. **Hilangkan Border Luar:** Kotak bingkai tebal membuat grafik terasa sempit dan terisolasi.\n" +
            "4. **Aturan Sumbu Y Wajib Mulai dari 0:** Pada Bar Chart, tinggi batang mewakili kuantitas absolut. Memotong sumbu Y (misalnya memulai dari angka 90 alih-alih 0) membuat selisih kecil tampak seperti jurang raksasa secara visual, yang dianggap sebagai manipulasi data di korporasi.\n\n" +
            "## Slicer Report Connections: Kunci Dashboard Interaktif\n\n" +
            "Di dashboard eksekutif, mengeklik satu tombol Slicer (misalnya memilih cabang 'Surabaya') seharusnya otomatis menyaring **seluruh tabel dan grafik di layar**. Untuk mengaktifkannya di Excel, klik kanan kotak Slicer lalu pilih menu **`Report Connections`** (atau `Slicer Connections`), kemudian centang seluruh Pivot Table yang ingin kamu sinkronkan.\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Penggunaan Pie Chart 3D dengan Banyak Potongan:** Efek perspektif 3D membuat potongan juring depan terlihat jauh lebih besar daripada juring belakang meskipun nilai aslinya lebih kecil.\n" +
            "- **Warna Pelangi Tanpa Makna:** Memberi warna berbeda untuk setiap batang grafik hanya membuat visual berisik. Gunakan aturan 60-30-10: warna netral untuk sebagian besar elemen, dan warna aksen kontras hanya untuk menyorot anomali penting.\n" +
            "- **Lupa Report Connections pada Slicer:** Menaruh Slicer di dashboard tetapi lupa mengaktifkan *Report Connections* membuat hanya satu grafik yang berubah saat tombol diklik, membingungkan pembaca laporan.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Menyusun dashboard satu layar yang bersih, memuat kartu ringkasan KPI, grafik tren bebas decluttering, dan tombol Slicer yang terhubung sempurna adalah portofolio terbaik saat melamar posisi Data Analyst, BI Specialist, atau Finance Manager.",
        },
        {
          kind: "step",
          id: "sheet-5-1",
          title: "Memilih Jenis Chart dari Bentuk Pertanyaan",
          explanation:
            "Pemilihan jenis grafik wajib disesuaikan dengan jenis pertanyaan bisnis yang ingin dijawab. Pertanyaan mengenai perubahan angka sepanjang waktu (time-series) paling tepat disajikan dengan Line Chart (grafik garis), sedangkan perbandingan nilai antar kategori diskrit paling jelas divisualisasikan dengan Column atau Bar Chart (grafik batang). Pemilihan visualisasi yang tepat mencegah salah tafsir oleh jajaran pimpinan rapat. Jebakan pemula: menggunakan Pie Chart untuk membandingkan 10 kategori produk, yang membuat audiens kesulitan membedakan luas juring.",
          example: {
            code: "Insert > Chart\nChart type: Column chart\nData: Kategori (X), Penjualan (Y)",
            output: "Grafik batang muncul memperlihatkan perbandingan omset 4 kategori produk secara tegas.",
          },
          instruction:
            "Kamu diminta menampilkan tren pergerakan penjualan bulanan kafe sepanjang tahun 2026. Tulis dua baris: jalur menu untuk menyisipkan grafik, dan jenis chart yang paling tepat untuk visualisasi deret waktu tersebut.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "insert\\s*>\\s*chart",
              flags: "i",
              message: "Tulis jalur menunya: Insert > Chart.",
            },
            {
              pattern: "(chart\\s*type|jenis)\\s*:\\s*line",
              flags: "i",
              message: "Data tren sepanjang waktu paling tepat memakai Line chart.",
            },
          ],
          solution: "Insert > Chart\nChart type: Line chart",
          susunKode: {
            question:
              "Susun pembuatan Line chart untuk tren data sepanjang waktu.",
            potongan: ["Insert > Chart\n", "Chart type: Line chart"],
            pengecoh: ["Grafik > Buat Diagram\n", "Chart type: Bar chart"],
            pemisah: "",
            explanation:
              "Visualisasi tren sepanjang waktu paling tepat menggunakan `Line chart`. Visualisasi Bar chart keliru untuk menampilkan kontinuitas waktu dan sering menjebak pemula pada pembuatan dashboard spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-5-2",
          title: "Sumbu yang Jujur: Mulai dari Nol",
          explanation:
            "Grafik batang (Bar/Column Chart) yang sumbu vertikalnya (sumbu Y) tidak dimulai dari angka 0 akan memperbesar selisih visual secara tidak proporsional dan menyesatkan pembaca laporan. Memastikan skala sumbu Y dimulai dari nol adalah aturan baku visualisasi data yang jujur karena tinggi batang mewakili kuantitas absolut nilai tersebut. Di editor grafik, pengaturannya diakses lewat menu `Vertical axis` dengan opsi nilai minimum diset ke angka 0. Menghindari sumbu terpotong menjaga integritas analis di hadapan jajaran dewan direksi.",
          example: {
            code: "Chart editor > Vertical axis > Max: 120",
            output: "Batas atas sumbu Y terkunci di angka 120 sehingga batang tertinggi tidak menyentuh ujung grafik.",
          },
          instruction:
            "Grafik batang perbandingan omset antarcabang terlihat menyesatkan karena sumbunya terpotong otomatis. Tulis satu baris pengaturan chart editor yang mengunci nilai minimum sumbu vertikal menjadi 0.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(vertical\\s*axis|sumbu\\s*(vertikal|y))",
              flags: "i",
              message: "Sebutkan bagian sumbu vertikal di chart editor.",
            },
            {
              pattern: "min[^\\n]*:?\\s*0\\b",
              flags: "i",
              message: "Tetapkan nilai minimumnya 0: Min: 0.",
            },
          ],
          solution: "Chart editor > Vertical axis > Min: 0",
          susunKode: {
            question:
              "Susun pengaturan sumbu vertikal agar dimulai dari nol.",
            potongan: ["Chart editor > Vertical axis >", " Min: 0"],
            pengecoh: ["Pengatur Grafik > Sumbu Y >", " Mulai: Otomatis"],
            pemisah: "",
            explanation:
              "Menjaga kejujuran grafik dilakukan dengan mengatur nilai minimum sumbu ke `Min: 0`. Pengaturan otomatis sering memotong skala sumbu secara keliru dan menyesatkan pembaca laporan spreadsheet secara signifikan.",
          },
        },
        {
          kind: "step",
          id: "sheet-5-3",
          title: "Decluttering: Membuang Tinta yang Tidak Bermakna",
          explanation:
            "Prinsip decluttering adalah membuang elemen visual grafik yang tidak menambah pemahaman data, seperti garis kisi (*gridlines*) yang terlalu gelap, bingkai kotak tebal, dan latar belakang berwarna. Menghilangkan elemen non-esensial membantu fokus mata pembaca langsung tertuju pada pergerakan garis data utama. Prinsip ini wajib diterapkan saat menyusun slide laporan eksekutif bulanan. Jebakan pemula: membiarkan garis bantu minor dan label angka berdesakan di layar sehingga grafik terasa sesak dan sulit dicerna.",
          example: {
            code: "Chart editor > Legend > Position: None",
            output: "Legenda di samping grafik disembunyikan agar area visual grafik menjadi lebih luas dan bersih.",
          },
          instruction:
            "Grafik tren penjualan bulananmu dipenuhi garis kisi abu-abu yang mengganggu pandangan mata. Tulis satu baris pengaturan chart editor untuk mematikan gridline utama (Major gridlines) pada grafik tersebut.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "chart\\s*editor\\s*>\\s*gridlines",
              flags: "i",
              message: "Sebutkan jalur pengaturannya: Chart editor > Gridlines.",
            },
            {
              pattern: "(hapus|matikan|hilangkan|none|off|uncheck)[^\\n]*major\\s*gridlines",
              flags: "i",
              message: "Nyatakan bahwa Major gridlines dihapus atau dimatikan.",
            },
          ],
          solution: "Chart editor > Gridlines > Hapus centang Major gridlines",
          susunKode: {
            question:
              "Susun pembersihan garis kisi pada grafik untuk decluttering.",
            potongan: ["Chart editor > Gridlines >", " Hapus centang Major gridlines"],
            pengecoh: ["Pengatur Grafik > Garis Kisi >", " Tampilkan Minor gridlines"],
            pemisah: "",
            explanation:
              "Prinsip decluttering menyarankan `Hapus centang Major gridlines` untuk mengurangi tinta yang tidak perlu pada grafik dan menghindari visual keliru yang sering menjebak fokus audiens dari membaca pergerakan tren data utama laporan keuangan proyek.",
          },
        },
        {
          kind: "step",
          id: "sheet-5-4",
          title: "Conditional Formatting: Warna yang Bekerja Otomatis",
          explanation:
            "Fitur Conditional Formatting menerapkan aturan pewarnaan otomatis pada sel berdasarkan kondisi angka di dalamnya (misalnya mewarnai latar sel menjadi merah muda jika nilainya di bawah target atau bernilai negatif). Fitur ini dipakai dalam tabel KPI dan pemantauan stok agar anomali data langsung terlihat tanpa perlu membaca angka satu per satu. Pengaturannya diakses lewat menu `Format > Conditional formatting`. Jebakan pemula: memasang terlalu banyak kombinasi warna pelangi yang justru mengacaukan hierarki visual tabel.",
          example: {
            code: "Format > Conditional formatting\nRentang: C2:C100\nAturan: Greater than 1000 (latar hijau)",
            output: "Sel yang bernilai di atas 1000 otomatis berlatar hijau cerah, memudahkan identifikasi transaksi besar.",
          },
          instruction:
            "Kolom D2:D200 memuat selisih target dan realisasi penjualan. Tulis aturan conditional formatting tiga baris agar sel bernilai negatif (< 0) otomatis berlatar merah: sebutkan jalur menu, rentang sel, dan kondisinya.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "conditional\\s*formatting",
              flags: "i",
              message: "Sebutkan jalur menunya: Format > Conditional formatting.",
            },
            {
              pattern: "D2:D200",
              flags: "i",
              message: "Sebutkan rentang yang diberi aturan: D2:D200.",
            },
            {
              pattern: "(less\\s*than|kurang\\s*dari|<)\\s*0",
              flags: "i",
              message: "Kondisinya: Less than 0.",
            },
          ],
          solution: "Format > Conditional formatting\nRentang: D2:D200\nAturan: Less than 0 (latar merah)",
          susunKode: {
            question:
              "Susun aturan Conditional Formatting untuk memberi warna sel kurang dari 0.",
            potongan: ["Format > Conditional formatting\nRentang: D2:D200\n", "Aturan: Less than 0 (latar merah)"],
            pengecoh: ["Format > Pewarnaan Otomatis\nRentang: D2:D200\n", "Aturan: Greater than 0 (latar merah)"],
            pemisah: "",
            explanation:
              "Pewarnaan otomatis angka negatif memakai syarat `Less than 0`. Menggunakan `Greater than 0` untuk latar merah adalah logika keliru yang sering menjebak pemula dalam pencermatan laporan keuangan spreadsheet, karena justru memberi highlight merah pada kinerja yang positif.",
          },
        },
        {
          kind: "step",
          id: "sheet-5-5",
          title: "Sparkline: Grafik Mini di Dalam Satu Sel",
          explanation:
            "Fungsi `=SPARKLINE(rentang_data)` menggambar grafik tren mini langsung di dalam satu sel individu tanpa memakan ruang lembar kerja yang besar. Fungsi ini sangat berguna dalam menyusun ringkasan dashboard eksekutif untuk memperlihatkan tren naik-turun penjualan 12 bulan di samping masing-masing nama produk atau cabang kota. Sparkline sangat hemat ruang dan cocok disandingkan dengan tabel KPI. Jebakan pemula: mengandalkan sparkline untuk membaca angka koordinat presisi padahal fungsinya murni untuk membaca arah pergerakan tren.",
          example: {
            code: '=SPARKLINE(B2:M2, {"charttype", "column"})',
            output: "Deretan batang mini muncul di dalam satu sel memperlihatkan bulan mana yang memiliki angka tertinggi.",
            note: "Dapat dikonfigurasi menjadi grafik batang mini lewat opsi charttype.",
          },
          instruction:
            "Deret data penjualan bulanan Januari hingga Desember tersimpan di baris sel C2:N2. Tulis formula yang menggambar grafik tren mini di dalam sel untuk deret transaksi tersebut.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SPARKLINE\\(",
              flags: "i",
              message: "Gunakan fungsi =SPARKLINE(...).",
            },
            {
              pattern: "C2:N2",
              flags: "i",
              message: "Rentang datanya C2:N2.",
            },
          ],
          solution: "=SPARKLINE(C2:N2)",
          susunKode: {
            question:
              "Susun grafik mini Sparkline dalam sel untuk rentang C2:N2.",
            potongan: ["=SPARKLINE(", "C2:N2)"],
            pengecoh: ["=GRAFIK_MINI(", "D2:O2)"],
            pemisah: "",
            explanation:
              "Grafik mini dalam satu sel menggunakan fungsi `=SPARKLINE()`. Pengecoh `=GRAFIK_MINI()` adalah fungsi fiktif yang sering keliru dianggap sebagai nama resmi Bahasa Indonesia dalam lembar kerja spreadsheet.",
          },
        },
        {
          kind: "step",
          id: "sheet-5-6",
          title: "Kartu KPI: Angka Utama di Kepala Dashboard",
          explanation:
            "Kartu KPI (Key Performance Indicator Card) menyajikan metrik bisnis terpenting dalam ukuran font besar di bagian kepala (*header*) dashboard satu layar. Menggunakan formula agregasi seperti `=SUM(E2:E5000)`, kartu KPI langsung memberi tahu pencapaian angka terpenting (seperti Total Omset Penjualan atau Total Laba Kotor) saat dashboard pertama kali dibuka oleh jajaran direksi. Dipakai di seluruh dashboard eksekutif profesional. Jebakan pemula: menampilkan angka KPI tanpa memberi label periode waktu dan satuan mata uang yang jelas.",
          example: {
            code: "=SUM(D2:D5000)",
            output: "Menampilkan total akumulasi nilai 128.394.500 di dalam kotak KPI utama.",
          },
          instruction:
            "Kolom E (rentang E2:E5000) mencatat nominal setiap transaksi kasir. Tulis formula agregasi penjumlahan untuk mengisi kartu KPI total omset keseluruhan pada bagian atas dashboard.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUM\\(",
              message: "Gunakan fungsi agregasi SUM.",
            },
            {
              pattern: "E2:E5000",
              message: "Sebutkan rentang datanya: E2:E5000.",
            },
          ],
          solution: "=SUM(E2:E5000)",
          susunKode: {
            question:
              "Susun agregasi SUM pada kartu KPI untuk rentang E2:E5000.",
            potongan: ["=SUM(", "E2:E5000)"],
            pengecoh: ["=JUMLAH_TOTAL(", "F2:F5000)"],
            pemisah: "",
            explanation:
              "Agregasi kartu KPI memakai fungsi resmi `=SUM(E2:E5000)`. Menggunakan nama fiktif `=JUMLAH_TOTAL()` adalah kesalahan keliru yang sering menjebak pemula dan membuat rumus memicu error `#NAME?` pada lembar kerja spreadsheet karena nama fungsi tidak dikenali sistem.",
          },
        },
        {
          kind: "step",
          id: "sheet-5-7",
          title: "Koneksi Slicer Multi-Pivot (Report Connections)",
          explanation:
            "Di sebuah dashboard satu layar terpadu, mengeklik satu tombol filter Slicer (misalnya memilih Wilayah 'Jakarta') seharusnya otomatis menyaring semua grafik tren dan tabel KPI di layar secara sinkron. Agar satu Slicer dapat mengendalikan beberapa Pivot Table sekaligus, kamu harus menghubungkannya lewat fitur **Report Connections** (di Excel klik kanan Slicer lalu pilih `Report Connections` atau `Slicer Connections`, lalu centang tabel pivot yang ada). Tanpa langkah ini, Slicer hanya mengontrol satu tabel asalnya saja.",
          example: {
            code: "Right click Slicer > Slicer Settings",
            output: "Kotak pengaturan nama slicer dan opsi pengurutan tombol terbuka di layar.",
            note: "Kunci utama menciptakan dashboard interaktif profesional.",
          },
          instruction:
            "Agar satu tombol Slicer dapat menyaring beberapa Pivot Table dan grafik sekaligus di dashboard, buka pengaturannya melalui klik kanan Slicer lalu pilih menu Report Connections.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "(right\\s*click|klik\\s*kanan)[^\\n]*slicer",
              flags: "i",
              message: "Klik kanan pada kotak tombol Slicer di dashboard.",
            },
            {
              pattern: "(report|slicer)\\s*connections?",
              flags: "i",
              message: "Pilih menu Report Connections (atau Slicer Connections).",
            },
          ],
          solution: "Right click Slicer > Report Connections",
          susunKode: {
            question:
              "Susun langkah menghubungkan Slicer ke beberapa tabel pivot sekaligus.",
            potongan: ["Right click ", "Slicer > ", "Report Connections"],
            pengecoh: ["Double click ", "Tabel > ", "Filter Terhubung"],
            pemisah: "",
            explanation:
              "Menghubungkan satu slicer ke banyak pivot table dilakukan melalui `Right click Slicer > Report Connections`. Pengecoh menu 'Filter Terhubung' adalah nama fiktif yang keliru dan sering menjebak pemula yang belum mengenal arsitektur dashboard spreadsheet.",
          },
        },
        {
          kind: "quiz",
          id: "sheet-5-kuis",
          title: "Kuis: Chart & Dashboard",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Jenis grafik apa di Spreadsheet yang paling tepat digunakan untuk menggambarkan tren perubahan data sepanjang waktu (*time-series*)?",
              choices: [
                "Line Chart (Grafik Garis)",
                "Pie Chart",
                "Scatter Plot",
                "Radar Chart",
              ],
              answerIndex: 0,
              explanation:
                "Line Chart paling tepat untuk memperlihatkan kontinuitas pergerakan tren data dari waktu ke waktu secara alami.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Mengapa sumbu vertikal (sumbu Y) pada grafik batang (Bar/Column Chart) wajib dimulai dari angka 0?",
              choices: [
                "Agar tinggi batang mencerminkan proporsi kuantitas angka yang jujur tanpa membesar-besarkan selisih",
                "Agar grafik terlihat lebih penuh di layar komputer",
                "Karena Excel tidak mengizinkan angka minimum selain 0",
                "Supaya warna batang otomatis berubah menjadi biru",
              ],
              answerIndex: 0,
              explanation:
                "Memulai sumbu Y dari angka 0 adalah aturan baku kejujuran visualisasi data agar selisih angka tidak terdistorsi secara visual.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Bagaimana cara membuat satu tombol Slicer di dashboard bisa menyaring 3 Pivot Table dan grafik yang berbeda sekaligus?",
              choices: [
                "Klik kanan Slicer lalu pilih menu 'Report Connections' dan centang tabel-tabel tersebut",
                "Membuat 3 Slicer terpisah yang ditaruh bertumpuk di layar",
                "Mengunci sel Slicer dengan fungsi PROTECT",
                "Mengetikkan formula VLOOKUP di dalam kotak Slicer",
              ],
              answerIndex: 0,
              explanation:
                "Report Connections (atau Slicer Connections) menghubungkan satu slicer ke beberapa tabel pivot secara simultan.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Grafik mini yang diletakkan langsung di dalam satu sel individu untuk memperlihatkan tren hemat ruang di samping kartu KPI disebut...",
              choices: ["Sparkline", "Microchart", "Cellchart", "Linechart"],
              answerIndex: 0,
              explanation:
                "Sparklines sangat hemat ruang sehingga pas ditempatkan pada sel-sel ringkasan di samping metrik KPI.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Fitur apakah di Spreadsheet yang sangat berguna untuk otomatis mewarnai sel menjadi merah ketika nilainya negatif, dan hijau ketika positif?",
              choices: [
                "Conditional Formatting",
                "Cell Styles",
                "Data Validation",
                "Find and Replace",
              ],
              answerIndex: 0,
              explanation:
                "Conditional Formatting mengubah warna latar atau teks pada sel secara dinamis berdasarkan aturan logika tertentu.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kapan penggunaan Pie Chart dianggap sebagai kesalahan visualisasi data (*anti-pattern*) di tempat kerja?",
              choices: [
                "Ketika membandingkan lebih dari 4-5 segmen atau potongan memiliki selisih nilai yang sangat tipis",
                "Ketika data hanya terdiri atas 2 kategori saja",
                "Ketika data berjumlah total tepat 100%",
                "Ketika digunakan dalam presentasi internal tim",
              ],
              answerIndex: 0,
              explanation:
                "Mata manusia kesulitan membedakan sudut dan luas juring saat kategori berjumlah banyak; Column/Bar chart jauh lebih mudah dicerna.",
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
          kind: "materi",
          id: "sheet-6-m1",
          title: "Studi Kasus End-to-End: Dari Data Mentah Hingga Executive Summary",
          body:
            "# Studi Kasus Analisis Bisnis End-to-End\n\n" +
            "Modul ini mengikat seluruh keahlian spreadsheet yang telah kamu pelajari menjadi satu alur proyek analisis utuh (*end-to-end*). Kita akan mensimulasikan tugas nyata seorang Business & Finance Analyst di **PT Kenangan Kopi Indonesia (Jaringan Coffee Shop 5 Cabang)** untuk periode Q1–Q2 2026. Direktur Operasional meminta evaluasi mendalam karena meskipun omset penjualan naik, saldo kas operasional menipis dan tingkat pergantian (*turnover*) staf barista di cabang meningkat.\n\n" +
            "## Pipeline Proyek Analisis Bisnis Nyata\n\n" +
            "```text\n" +
            "+-----------------------+     +-----------------------+     +-----------------------+\n" +
            "| 1. Data Cleaning      | --> | 2. Calculated Metrics | --> | 3. Pivot & Dashboard  |\n" +
            "| TRIM, PROPER, UNIQUE  |     | Gross Margin, MoM     |     | Pivot Table + Slicer  |\n" +
            "+-----------------------+     +-----------------------+     +-----------------------+\n" +
            "                                                                        |\n" +
            "                                                                        v\n" +
            "+-----------------------+     +-----------------------+     +-----------------------+\n" +
            "| 6. Pembagian Berkas   | <-- | 5. Proteksi Formula   | <-- | 4. Executive Summary  |\n" +
            "| Share with Access     |     | Review > Protect      |     | Temuan & Rekomendasi  |\n" +
            "+-----------------------+     +-----------------------+     +-----------------------+\n" +
            "```\n\n" +
            "## Studi Kasus Nyata: PT Kenangan Kopi Indonesia\n\n" +
            "1. **Pembersihan Log POS Kasir:** 10.000 baris transaksi cabang memuat nama produk berantakan (`  kopi susu gula aren  `). Formula `=TRIM(PROPER(A2))` membersihkan spasi liar dan menyamakan kapitalisasi agar rekapitulasi penjualan akurat.\n" +
            "2. **Analisis Profitabilitas Menu (Gross Margin):** Menghitung margin laba kotor per cup menu minuman `=(Penjualan - HPP) / Penjualan`. Ditemukan bahwa menu promo diskon besar menghasilkan margin tipis di bawah 15%.\n" +
            "3. **Analisis Pertumbuhan Penjualan MoM (Month-over-Month):** Menghitung laju pertumbuhan omset bulanan `=(Bulan_Ini - Bulan_Lalu) / Bulan_Lalu` untuk mengevaluasi tren akselerasi penjualan.\n" +
            "4. **Analisis SDM & Turnover Barista:** Menggunakan `COUNTIF` untuk menghitung frekuensi karyawan resign per cabang. Cabang Bandung mencatat tingkat resign tertinggi (35%) akibat beban shift lembur berlebih.\n" +
            "5. **Rekonsiliasi Arus Kas UMKM (Cash Flow):** Menghitung Arus Kas Bersih (*Net Cash Flow*) bulanan (`Kas Masuk - Kas Keluar`) dan Saldo Akhir (`Saldo Awal + Net Cash Flow`) untuk mendiagnosis kebocoran kas.\n\n" +
            "## 3 Bagian Wajib Executive Summary Laporan Bisnis\n\n" +
            "Angka kalkulasi di spreadsheet tidak memiliki nilai bisnis jika manajemen tidak memahami apa artinya. Laporan analisis profesional wajib dibuka dengan **Executive Summary** 3 komponen di bagian paling atas dokumen:\n\n" +
            "1. **Key Findings (Temuan Kunci):** Fakta angka terpenting tanpa basa-basi (misalnya: *'Omset Q2 naik 15% MoM menjadi Rp 1.2 Milyar, namun Gross Profit Margin turun dari 28% menjadi 21%'*).\n" +
            "2. **Root Cause (Akar Masalah):** Penjelasan alasan mengapa angka tersebut terjadi berdasarkan breakdown data (misalnya: *'Penurunan margin disebabkan oleh kenaikan biaya HPP bahan baku kopi sebesar 18% dan diskon promosi berlebih di Cabang Surabaya'*).\n" +
            "3. **Actionable Recommendations (Rekomendasi Tindakan):** Usulan solusi konkret yang bisa dieksekusi tim bisnis (misalnya: *'1. Negosiasi ulang harga kontrak supplier kopi; 2. Batasi diskon promosi maksimal 10% per transaksi; 3. Tata ulang jadwal shift barista di Cabang Bandung'*).\n\n" +
            "## Checklist Sebelum Membagikan File ke Pengguna Lain\n\n" +
            "- **Audit Error:** Pastikan tidak ada sel yang menampilkan `#N/A` atau `#REF!`. Bungkus formula dengan `IFERROR()` jika diperlukan.\n" +
            "- **Paste Values Kolom Bantu:** Lepaskan formula di kolom pembersihan data agar file lebih ringan dan tidak patah.\n" +
            "- **Buka Kunci Sel Input & Kunci Formula:** Buka opsi *Locked* pada sel input data mentah lewat Format Cells, lalu aktifkan **`Review > Protect Sheet`** agar formula kalkulasi aman dari salah pencet tim lain.\n" +
            "- **Sembunyikan Sheet Pendukung:** Sembunyikan (*Hide*) tab sheet berisi tabel referensi master yang tidak perlu dilihat langsung oleh pembaca.\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Menyerahkan File Berisi Pesan Error Merah:** Mengirimkan berkas laporan ke klien yang masih dipenuhi pesan `#DIV/0!` membuat pekerjaan analis terlihat tidak cermat dan amatir.\n" +
            "- **Menyajikan Dashboard Angka Tanpa Narasi Kesimpulan:** Manajer tidak punya waktu membaca ratusan baris data mentah (*'So What?'*). Selalu sertakan ringkasan temuan tertulis.\n" +
            "- **Lupa Mengunci Sheet (Protect Sheet):** Membagikan template kalkulasi tanpa proteksi berisiko tinggi merusak sistem perhitungan ketika file diisi oleh pengguna non-teknis.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Penyusunan proyek terintegrasi dari data mentah hingga rekomendasi tertulis adalah simulasi nyata tugas harian seorang Business Analyst, Finance Officer, maupun Management Trainee saat menyusun laporan pertanggungjawaban kinerja kuartalan di hadapan pimpinan perusahaan.",
        },
        {
          kind: "step",
          id: "sheet-6-1",
          title: "Pembersihan & Standarisasi Teks Gabungan",
          explanation:
            "Kombinasi formula `=TRIM(PROPER(A2))` melakukan dua proses pembersihan sekaligus dalam satu langkah efisien: menghapus seluruh spasi liar di awal dan akhir teks sekaligus mengubah format huruf menjadi Title Case (kapital di setiap awal kata). Formula bersarang (*nested formula*) ini adalah langkah standar industri saat membersihkan data mentah nama pelanggan atau alamat kota sebelum diolah ke tahap Pivot Table. Jebakan pemula: jumlah tanda kurung penutup tidak seimbang dengan tanda kurung pembuka sehingga formula ditolak spreadsheet.",
          example: {
            code: '=TRIM(PROPER("  kopi susu aren  "))',
            output: '"Kopi Susu Aren" (spasi dibersihkan dan huruf awal setiap kata menjadi kapital).',
            note: "Formula kombinasi paling sering dipakai pada pipeline data cleaning awal.",
          },
          instruction:
            "Pada log POS kafe di sel A2, nama menu tercatat kotor dengan spasi berlebih dan huruf kecil semua. Bersihkan spasi liar sekaligus ubah menjadi huruf kapital tiap kata menggunakan kombinasi fungsi TRIM dan PROPER secara bersarang.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TRIM\\(\\s*PROPER\\(",
              message:
                "Gunakan kombinasi fungsi TRIM dan PROPER secara bersarang.",
            },
            {
              pattern: "A2\\s*\\)\\s*\\)",
              message:
                "Tutup kedua fungsi dengan seimbang setelah sel sumber A2: A2)).",
            },
          ],
          solution: "=TRIM(PROPER(A2))",
          susunKode: {
            question:
              "Susun penggabungan fungsi TRIM dan PROPER untuk pembersihan teks di sel A2.",
            potongan: ["=TRIM(PROPER(", "A2))"],
            pengecoh: ["=BERSIH_KAPITAL(", "B2))"],
            pemisah: "",
            explanation:
              "Penggabungan fungsi `=TRIM(PROPER(A2))` merapikan kapitalisasi sekaligus membuang spasi liar. Pengecoh `=BERSIH_KAPITAL()` adalah nama fungsi fiktif yang keliru disarankan oleh pemula di lembar kerja.",
          },
        },
        {
          kind: "step",
          id: "sheet-6-2",
          title: "Analisis Arus Kas & Margin Keuangan UMKM",
          explanation:
            "Menghitung rasio **Gross Profit Margin** keuangan dilakukan menggunakan formula `=(Pendapatan - HPP) / Pendapatan`. Rasio ini mengukur efisiensi operasional bisnis dalam menghasilkan keuntungan kotor dari setiap rupiah omset yang masuk. Formula ini digunakan dalam evaluasi kesehatan keuangan usaha UMKM maupun audit kinerja keuangan perusahaan. Jebakan pemula: lupa membungkus operasi pengurangan dengan tanda kurung `(C2 - D2)` sehingga aturan hierarki operator matematika mengeksekusi pembagian terlebih dahulu dan menghasilkan angka yang salah fatal.",
          example: {
            code: "=(B2 - A2) / B2",
            output: "0.35 (menghasilkan persentase margin keuntungan kotor 35% setelah diformat Percentage).",
            note: "Format sel hasil perhitungan ke dalam bentuk persentase (%).",
          },
          instruction:
            "Hitung rasio Gross Profit Margin menu minuman di baris 2: sel C2 adalah Pendapatan (Penjualan) dan sel D2 adalah Harga Pokok Penjualan (HPP). Pastikan pengurangan laba kotor dibungkus tanda kurung sebelum dibagi pendapatan.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*\\(\\s*C2\\s*-\\s*D2\\s*\\)",
              message:
                "Bungkus pengurangan omset (C2) dan HPP (D2) dengan tanda kurung: (C2 - D2).",
            },
            {
              pattern: "/\\s*C2",
              message: "Bagi hasil laba kotor dengan pendapatan C2: / C2.",
            },
          ],
          solution: "=(C2 - D2) / C2",
          susunKode: {
            question:
              "Susun formula persentase margin dari pendapatan (C2) dan beban (D2).",
            potongan: ["=(C2 - D2) /", " C2"],
            pengecoh: ["=C2 - D2 /", " D2"],
            pemisah: "",
            explanation:
              "Perhitungan margin membutuhkan tanda kurung `=(C2 - D2) / C2` agar pengurangan dihitung lebih dulu sebelum pembagian. Tanpa kurung adalah jebakan hirarki operator yang keliru dalam spreadsheet saat ini.",
          },
        },
        {
          kind: "step",
          id: "sheet-6-3",
          title: "Analisis HR: Menghitung Frekuensi Resign Barista",
          explanation:
            "Fungsi `=COUNTIF(A1:A100, \"Resign\")` menghitung banyaknya kemunculan baris karyawan yang berstatus keluar (resign) pada rentang data HR. Angka ini kemudian dibagi dengan total rata-rata staf untuk mengukur persentase tingkat turnover karyawan secara kuantitatif dalam satu periode kerja. Metrik ini dipantau secara berkala oleh manajemen SDM untuk mengevaluasi retensi talenta perusahaan. Jebakan pemula: kesalahan ejaan teks kriteria atau adanya spasi ekstra pada data mentah yang membuat baris tidak terhitung.",
          example: {
            code: '=COUNTIF(StatusRange, "Resign")',
            output: "Menghasilkan angka total karyawan yang berstatus Resign pada rentang tersebut.",
            note: "Bungkus kriteria teks dengan tanda petik ganda.",
          },
          instruction:
            "Pada tabel audit SDM kafe di rentang A1 hingga A100, hitung berapa banyak baris barista yang berstatus keluar dengan kriteria teks persis \"Resign\" menggunakan fungsi hitung bersyarat.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*COUNTIF\\(",
              message: "Gunakan fungsi hitung bersyarat COUNTIF.",
            },
            {
              pattern: "A1:A100\\s*,\\s*[\"']Resign[\"']",
              message:
                "Sebutkan rentang status (A1:A100) dan teks kriteria dalam kutip (\"Resign\").",
            },
          ],
          solution: '=COUNTIF(A1:A100, "Resign")',
          susunKode: {
            question:
              "Susun fungsi COUNTIF untuk menghitung jumlah karyawan bernilai Resign di A1:A100.",
            potongan: ["=COUNTIF(A1:A100, ", '"Resign")'],
            pengecoh: ["=HITUNGIF(A1:A100, ", "Resign)"],
            pemisah: "",
            explanation:
              "Kriteria teks pada `=COUNTIF()` wajib dibungkus tanda kutip `\"Resign\"`. Menulis kriteria teks tanpa tanda kutip adalah kesalahan sintaks yang keliru dan sering menjebak pemula, sehingga pencarian data teks pada lembar kerja spreadsheet menghasilkan nilai nol.",
          },
        },
        {
          kind: "step",
          id: "sheet-6-4",
          title: "Analisis Pertumbuhan Penjualan MoM (Month-over-Month)",
          explanation:
            "Dalam analisis penjualan retail, menyusun insight tertulis untuk manajemen selalu diawali dengan menghitung laju pertumbuhan bulanan (*Month-over-Month / MoM Growth*). Formulanya adalah selisih omset bulan ini dikurangi bulan lalu, dibagi dengan omset bulan lalu: `=(Bulan_Ini - Bulan_Lalu) / Bulan_Lalu`. Angka persentase pertumbuhan inilah yang menjadi dasar penulisan narasi Executive Summary untuk menjawab apakah bisnis mengalami akselerasi atau perlambatan. Jebakan pemula: lupa membungkus pengurangan dengan tanda kurung sehingga pembagian dieksekusi lebih dulu oleh sistem.",
          example: {
            code: "=(D2 - C2) / C2",
            output: "0.15 (menghitung laju pertumbuhan omset 15% dari sel C2 ke sel D2).",
            note: "Format sel hasil perhitungan ke Percentage dengan 1 angka desimal.",
          },
          instruction:
            "Di tabel ringkasan penjualan, sel B2 mencatat omset bulan lalu dan sel C2 mencatat omset bulan berjalan. Hitung laju persentase pertumbuhan omset MoM dengan membagi selisih pertumbuhan terhadap omset bulan lalu.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*\\(\\s*C2\\s*-\\s*B2\\s*\\)",
              message:
                "Bungkus pengurangan omset bulan ini (C2) dan bulan lalu (B2) dengan tanda kurung agar dihitung lebih dulu.",
            },
            {
              pattern: "/\\s*B2",
              message:
                "Bagi hasil selisih dengan nilai penjualan bulan lalu (B2).",
            },
          ],
          solution: "=(C2 - B2) / B2",
          susunKode: {
            question:
              "Susun formula persentase pertumbuhan omset MoM dari penjualan C2 dan B2.",
            potongan: ["=(C2 - B2) / ", "B2"],
            pengecoh: ["=C2 - B2 / ", "C2"],
            pemisah: "",
            explanation:
              "Perhitungan laju pertumbuhan MoM memerlukan tanda kurung `=(C2 - B2) / B2` agar pengurangan dihitung sebelum pembagian. Pengecoh tanpa kurung adalah kesalahan keliru yang sering menjebak pemula akibat hierarki operator matematika yang membagi nilai lebih dulu.",
          },
        },
        {
          kind: "step",
          id: "sheet-6-5",
          title: "Rekonsiliasi Arus Kas Bersih UMKM (Net Cash Flow)",
          explanation:
            "Dalam pemodelan laporan arus kas (*Cash Flow Statement*) UMKM, **Net Cash Flow** (Arus Kas Bersih) dihitung dengan mengurangkan total kas masuk operasional dengan total kas keluar beban usaha: `=Kas_Masuk - Kas_Keluar`. Nilai kas bersih yang positif menandakan bisnis menghasilkan surplus likuiditas, sedangkan angka negatif menunjukkan defisit kas yang berbahaya. Metrik ini krusial untuk memastikan bahwa kafe tidak mengalami kebangkrutan likuiditas meskipun catatan laba kotor di atas kertas terlihat positif. Jebakan pemula: tertukar antara perhitungan laba akuntansi (*accrual*) dengan pergerakan kas nyata (*cash-basis*).",
          example: {
            code: "=C2 - D2",
            output: "Menghasilkan selisih surplus kas masuk C2 dikurangi kas keluar D2.",
            note: "Net Cash Flow positif menandakan operasional menghasilkan likuiditas sehat.",
          },
          instruction:
            "Pada tabel buku kas harian kafe di baris 2, sel B2 mencatat total kas masuk dan sel C2 mencatat total kas keluar. Tulis formula pengurangan untuk menghitung nilai arus kas bersih (Net Cash Flow) pada baris tersebut.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*B2\\s*-\\s*C2",
              flags: "i",
              message: "Tuliskan formula arus kas bersih kas masuk minus kas keluar: =B2 - C2",
            },
          ],
          solution: "=B2 - C2",
          susunKode: {
            question:
              "Susun formula pengurangan kas masuk (B2) dengan kas keluar (C2).",
            potongan: ["=B2 -", " C2"],
            pengecoh: ["=B2 +", " D2"],
            pemisah: "",
            explanation:
              "Arus kas bersih dihitung dari selisih kas masuk dikurangi kas keluar `=B2 - C2`. Operator penjumlahan `+` adalah kekeliruan perhitungan yang sering menjebak pemula dalam rekonsiliasi kas UMKM, karena beban kas keluar seharusnya mengurangi saldo likuiditas bisnis.",
          },
        },
        {
          kind: "step",
          id: "sheet-6-6",
          title: "Proteksi Lembar Kerja (Protect Sheet)",
          explanation:
            "Sebelum berkas analisis dan dashboard dibagikan ke jajaran manajemen atau tim operasional, kamu wajib mengunci sel-sel formula agar tidak sengaja tertimpa atau terhapus oleh pengguna lain. Di Microsoft Excel, fitur proteksi ini diakses melalui tab pita `Review > Protect Sheet`. Setelah kotak dialog terbuka, kamu dapat menetapkan kata sandi opsional dan membatasi izin akses hanya untuk memilih sel-sel yang tidak terkunci (*Unlocked Cells*). Jebakan pemula: lupa membuka kunci sel entri data mentah (lewat Format Cells > Protection > uncheck Locked) sebelum mengaktifkan Protect Sheet sehingga seluruh lembar kerja terkunci total.",
          example: {
            code: "Review > Protect Workbook",
            output: "Struktur workbook terkunci sehingga pengguna lain tidak bisa menambah atau menghapus sheet.",
            note: "Pastikan sel input data mentah sudah dibuka kuncinya sebelum sheet dilindungi.",
          },
          instruction:
            "Kunci seluruh formula lembar kerja agar aman sebelum dibagikan ke tim operasional cabang melalui menu tab Review dan perintah proteksi sheet di Excel.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "review\\s*>\\s*protect\\s*sheet",
              flags: "i",
              message:
                "Tuliskan jalur menunya: Review > Protect Sheet.",
            },
          ],
          solution: "Review > Protect Sheet",
          susunKode: {
            question:
              "Susun jalur menu Review untuk mengunci lembar kerja sebelum dibagikan.",
            potongan: ["Review > ", "Protect Sheet"],
            pengecoh: ["Keamanan > ", "Kunci Formula"],
            pemisah: "",
            explanation:
              "Jalur resmi penguncian formula di Excel adalah `Review > Protect Sheet`. Pengecoh menu Keamanan adalah istilah fiktif yang sering keliru dicari oleh pemula yang belum mengenal letak tab pita perkantoran standar.",
          },
        },
        {
          kind: "quiz",
          id: "sheet-6-kuis",
          title: "Kuis: Studi Kasus Bisnis",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Tiga bagian wajib apa yang harus ada di dalam Executive Summary laporan analisis bisnis agar bermakna bagi pimpinan?",
              choices: [
                "Key Findings (Temuan Angka), Root Cause (Akar Masalah), dan Actionable Recommendations (Rekomendasi Aksi)",
                "Daftar rumus, daftar shortcut keyboard, dan nomor kontak admin",
                "Screenshot seluruh layar, daftar software, dan waktu pengerjaan",
                "Riwayat revisi, tanda tangan notaris, dan daftar pustaka",
              ],
              answerIndex: 0,
              explanation:
                "Executive Summary profesional wajib menyajikan apa temuannya (What), kenapa itu terjadi (Why), dan apa solusi konkret berikutnya (What Next).",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Untuk menjaga formula kalkulasi laporan keuangan agar tidak sengaja tertimpa oleh tim cabang saat mengisi data, fitur apa yang harus dipasang?",
              choices: [
                "Review > Protect Sheet (setelah membuka kunci sel input data mentah)",
                "Freeze Panes di baris pertama",
                "Mengubah warna font menjadi putih transparan",
                "Mengaktifkan filter otomatis di baris judul",
              ],
              answerIndex: 0,
              explanation:
                "Fitur Protect Sheet mengunci sel berformula sehingga hanya sel input data mentah yang dapat diisi oleh pengguna lain.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Di dalam alur proyek analisis data bisnis (Cleaning > Pivot > Dashboard > Reporting), tahap manakah yang di industri nyata paling banyak memakan waktu dan ketelitian analis?",
              choices: [
                "Pembersihan Data Mentah (Data Cleaning)",
                "Memilih warna tema dashboard",
                "Membuat Pivot Table",
                "Menyimpan file ke folder kerja",
              ],
              answerIndex: 0,
              explanation:
                "Pembersihan data mentah (Data Cleaning) memakan hingga 80% total waktu proyek analisis karena data mentah hampir selalu kotor dan tidak terstandarisasi.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Bagaimana formula yang benar untuk menghitung persentase pertumbuhan penjualan bulanan (Month-over-Month Growth) jika B2 omset bulan lalu dan C2 omset bulan ini?",
              choices: [
                "=(C2 - B2) / B2",
                "=C2 - B2 / B2",
                "=(C2 - B2) / C2",
                "=C2 / B2 - B2",
              ],
              answerIndex: 0,
              explanation:
                "Pertumbuhan MoM dihitung dari selisih bulan ini dikurangi bulan lalu yang dibungkus tanda kurung, lalu dibagi penjualan bulan lalu: =(C2 - B2) / B2.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Sebelum membagikan file laporan akhir ke jajaran manajemen, langkah pemeriksaan kualitas (*sanity check*) apa yang wajib dilakukan?",
              choices: [
                "Memastikan tidak ada pesan error #N/A atau #REF!, me-refresh seluruh Pivot Table, dan menguji interaktivitas Slicer",
                "Menghapus seluruh grafik agar ukuran file menjadi kecil",
                "Mengubah semua angka menjadi teks manual",
                "Menghilangkan semua baris header tabel",
              ],
              answerIndex: 0,
              explanation:
                "Sanity check meliputi pembersihan pesan error, pembaruan cache Pivot Table, dan verifikasi bahwa seluruh tombol Slicer berfungsi normal.",
            },
            {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Mengapa sebuah bisnis ritel yang mencatat laba operasional positif di atas kertas tetap bisa mengalami krisis kebangkrutan likuiditas?",
              choices: [
                "Karena arus kas bersih (Net Cash Flow) bernilai negatif akibat piutang tak tertagih dan kas tertahan di stok barang",
                "Karena rumus SUMIFS yang digunakan menghitung mundur",
                "Karena grafik dashboard menggunakan warna biru alih-alih hijau",
                "Karena file spreadsheet tidak dikonversi ke format PDF",
              ],
              answerIndex: 0,
              explanation:
                "Laba akuntansi (akrual) tidak sama dengan ketersediaan uang tunai; kas keluar yang lebih besar dari kas masuk memicu krisis likuiditas.",
            },
          ],
        },
      ],
    },
  ],
};
