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
            "Spreadsheet (seperti Microsoft Excel atau Google Sheets) adalah alat olah data berbasis tabel grid yang paling luas digunakan di dunia bisnis. Dari startup teknologi, lembaga perbankan, hingga UMKM ritel, spreadsheet merupakan fondasi utama untuk pencatatan transaksi, analisis angka, dan pembuatan laporan keuangan.\n\n" +
            "Setiap lembar kerja terdiri dari **Kolom** yang ditandai dengan huruf (`A`, `B`, `C`...) dan **Baris** yang ditandai dengan angka (`1`, `2`, `3`...). Perpotongan antara kolom dan baris membentuk kotak bernama **Sel** (`Cell`), yang dialamati dengan format `KolomBaris` (misalnya `A1` atau `B10`). Kumpulan sel berdampingan yang dipilih bersamaan disebut **Range** (ditulis dengan tanda titik dua, seperti `A1:C10`).\n\n" +
            "## Anatomi Grid & Tipe Data\n\n" +
            "```text\n" +
            "+------+-------------------+-----------------+-------------------+\n" +
            "|      |         A         |        B        |         C         |\n" +
            "+------+-------------------+-----------------+-------------------+\n" +
            "|  1   | Nama Barang (Teks)|  Jumlah (Angka) |  Tanggal (Date)   |\n" +
            "|  2   | Kopi Arabika      |       50        |    2026-07-28     |\n" +
            "|  3   | Teh Hijau         |       30        |    2026-07-29     |\n" +
            "+------+-------------------+-----------------+-------------------+\n" +
            "Range A1:C3 mencakup 9 sel berisi Teks, Angka, dan Tanggal.\n" +
            "```\n\n" +
            "## Tipe Data & Format Sel\n\n" +
            "| Tipe Data | Ciri Tampilan bawaan | Contoh Isi Sel | Catatan Penting |\n" +
            "|---|---|---|---|\n" +
            "| **Teks (String)** | Rata Kiri | `Kopi Gayo`, `SKU-102` | Tidak bisa dihitung dengan operasi matematika. |\n" +
            "| **Angka (Numeric)** | Rata Kanan | `15000`, `0.25` | Dapat dihitung dengan SUM, AVERAGE, dan operator aritmetika. |\n" +
            "| **Tanggal (Date)** | Rata Kanan | `2026-07-28` | Sebenarnya angka serial (mis. 1 Jan 1900 = 1). |\n" +
            "| **Boolean / Formula** | Rata Tengah / Hasil | `=SUM(B2:B3)` | Selalu diawali tanda sama dengan (`=`). |\n\n" +
            "Format sel (seperti Percentage %, Currency Rp, Date) **hanya mengubah tampilan visual**, bukan nilai asli di dalam memori sel. Misalnya angka `0.25` yang diformat sebagai Percent akan tampil sebagai `25%`, tetapi dalam perhitungan matematika nilainya tetap `0.25`.\n\n" +
            "## Formula & Referensi Relatif vs Absolut ($A$1)\n\n" +
            "Formula di spreadsheet selalu diawali dengan tanda `=`. Ada dua cara mengacu pada sel lain:\n" +
            "1. **Referensi Relatif (`A1`)**: Mengikuti posisi sel saat formula disalin/di-autofill ke bawah atau ke samping.\n" +
            "2. **Referensi Absolut (`$A$1`)**: Dikunci menggunakan simbol dolar (`$`), sehingga posisi acuan tidak pernah berubah saat formula disalin. Tombol pintas untuk mengunci sel adalah `F4`.\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Angka Tersimpan sebagai Teks**: Mengimpor data dari sistem lain sering kali membuat angka berubah menjadi teks (ditandai tanda petik tunggal `'100` atau rata kiri). Fungsi `=SUM()` akan **diabaikan secara diam-diam** sehingga total laporanmu salah tanpa menampilkan error.\n" +
            "- **Lupa Mengunci Sel Pajak/Kurs ($)**: Saat menghitung total komisi atau diskon dengan acuan sel tunggal (misal `B1`), lupa memakai `$B$1` akan membuat sel acuan bergeser menjadi `B2`, `B3` (kosong) saat di-autofill ke bawah.\n" +
            "- **Mengetik Angka Langsung di Formula**: Menulis `=10000 + 5000` di dalam sel alih-alih `=A2 + B2` merusak fleksibilitas spreadsheet saat data mentah diperbarui.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di dunia kerja (baik posisi Data Analyst, Financial Analyst, maupun Admin Operasional), kemampuan merapikan data lembar kerja, memakai Freeze Panes agar header tidak hilang saat di-scroll, dan memastikan format angka konsisten adalah syarat minimal dalam penyusunan laporan mingguan yang dibaca oleh manajer.",
        },
        {
          kind: "step",
          id: "sheet-1-1",
          title: "Sel, Range & Tipe Data",
          explanation:
            "Setiap kotak di spreadsheet disebut **Sel**, dialamati dengan huruf kolom dan nomor baris (misalnya `A1`). Kumpulan sel yang berdampingan disebut **Range**, ditulis menggunakan titik dua (misalnya `A1:B10`). Tipe data pada sel — Teks, Angka, atau Tanggal — menentukan apakah sel tersebut bisa dihitung secara matematis. Jebakan pemula yang sangat sering terjadi adalah angka yang tersimpan sebagai teks (biasanya rata kiri), di mana fungsi SUM akan mengabaikan sel tersebut sehingga total laporanmu salah tanpa ada peringatan error.",
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
              flags: "i",
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
            "Fungsi agregasi digunakan untuk mengolah deretan angka sekaligus tanpa perlu menjumlahkan satu per satu. `=SUM(A1:A10)` menjumlahkan total seluruh angka, `=AVERAGE(A1:A10)` menghitung nilai rata-rata aritmetika, dan `=COUNT(A1:A10)` menghitung berapa banyak sel yang berisi tipe data angka. Dipakai setiap kali kamu menyusun ringkasan data transaksi bulanan. Jebakan pemula: memakai `COUNT` untuk menghitung sel berisikan teks — gunakan `COUNTA` jika sel acuanmu berupa teks.",
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
              flags: "i",
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
            "Referensi relatif (`A1`) otomatis menyesuaikan alamat sel saat formula disalin ke baris di bawahnya, seperti instruksi 'maju satu langkah'. Sebaliknya, Referensi Absolut (`$A$1`) mengunci kolom dan baris menggunakan simbol `$`, seperti mengunci titik koordinat GPS agar tidak bergeser. Konsep ini dipakai ketika kamu mengalikan baris transaksi dengan sel persentase komisi atau tarif pajak tunggal. Jebakan pemula: lupa menekan `F4` untuk mengunci sel acuan sehingga hasil autofill di baris bawahnya bernilai nol atau error.",
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
              flags: "i",
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
            "Fungsi `=TEXT(A1, \"dddd\")` mengonversi nilai angka tanggal pada sel `A1` menjadi string teks nama hari lengkap (misalnya 'Senin' atau 'Monday'). Digunakan saat kamu perlu menganalisis tren pola perilaku pelanggan berdasarkan hari dalam seminggu. Hasil dari fungsi `TEXT` berubah menjadi tipe data Teks, sehingga sel tersebut tidak bisa lagi dihitung dengan formula tanggal matematis seperti `DATEDIF`.",
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
              flags: "i",
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
            "Kalkulasi persentase pencapaian target dilakukan dengan membagi nilai realisasi pencapaian (sel `A2`) dengan nilai target yang ditetapkan (sel `B2`). Hasil pembagian berupa angka desimal (misalnya `0.85`), yang kemudian dapat diformat menjadi Percentage (`85%`) lewat menu format sel. Dipakai untuk mengevaluasi KPI tim penjualan atau efisiensi anggaran operasional. Jebakan umum: membalik posisi pembagian menjadi target dibagi realisasi sehingga menghasilkan persentase keliru.",
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
              flags: "i",
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
            "Fungsi `=FILTER(range_data, kondisi)` menyaring deretan data mentah dan menampilkan baris yang memenuhi syarat secara dinamis tanpa mengubah data aslinya. Digunakan saat kamu perlu mengekstrak daftar transaksi bernilai besar atau pelanggan dari wilayah tertentu ke dalam area kerja baru. Berbeda dengan menu Sort & Filter manual, fungsi `FILTER` otomatis memperbarui daftar output jika data mentah asal mengalami perubahan.",
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
              flags: "i",
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
            "Fungsi `=COUNTA(A2:A100)` menghitung banyaknya sel ber-isikan data (baik berupa teks maupun angka) pada rentang di bawah header tabel. Dipakai untuk mengecek total volume entri transaksi atau menghitung jumlah pelanggan yang terdaftar tanpa perlu menghitung baris secara manual. Jebakan pemula: menggunakan `COUNT` biasa yang hanya menghitung angka, sehingga kolom berisi nama pelanggan atau ID string akan mengembalikan hasil nol.",
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
              flags: "i",
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
              question:
                "Simbol apa yang digunakan untuk mengunci referensi sel menjadi Absolut (seperti $A$1) di Excel/Google Sheets?",
              choices: ["$", "#", "@", "%"],
              answerIndex: 0,
              explanation:
                "Simbol Dolar ($) mengunci referensi kolom dan baris agar tidak bergeser saat formula disalin atau di-autofill ke sel lain.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa fungsi dari fitur Fill Handle di Spreadsheet?",
              choices: [
                "Meneruskan pola deret data atau menyalin formula secara otomatis",
                "Menghapus seluruh sel yang dipilih secara permanen",
                "Membuat format teks menjadi tebal (Bold)",
                "Menghitung total otomatis baris dan kolom",
              ],
              answerIndex: 0,
              explanation:
                "Fill Handle (titik kecil di sudut kanan bawah sel aktif) berguna untuk menyalin formula atau meneruskan pola deret tanggal/angka.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Sel A1 berisi angka 0,25. Kamu mengubah formatnya menjadi Percentage sehingga tampil 25%. Apa yang terjadi pada nilai yang dipakai formula lain?",
              choices: [
                "Nilainya ikut berubah menjadi 25",
                "Nilainya tetap 0,25 — format hanya mengubah tampilan, bukan isi sel",
                "Sel berubah menjadi teks dan tidak bisa dihitung",
                "Formula lain otomatis menghasilkan error",
              ],
              answerIndex: 1,
              explanation:
                "Format (Percentage, Currency, Date) hanya lapisan tampilan visual; nilai asli di memori tetap 0,25 sehingga kalkulasi lain tidak terganggu.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Jika kamu ingin menjumlahkan angka secara cepat tanpa mengetik satu per satu dari rentang sel A1 hingga A20, fungsi apa yang paling tepat digunakan?",
              choices: ["SUM(A1:A20)", "ADD(A1:A20)", "COUNT(A1:A20)", "TOTAL(A1:A20)"],
              answerIndex: 0,
              explanation:
                "Fungsi SUM digunakan untuk menjumlahkan seluruh rentang sel numerik secara efisien.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Fungsi apakah yang digunakan untuk menghitung banyaknya sel yang berisikan teks atau angka, asalkan tidak kosong?",
              choices: ["COUNTA", "COUNT", "SUM", "AVERAGE"],
              answerIndex: 0,
              explanation:
                "Fungsi COUNTA menghitung jumlah sel yang berisi data apa pun (non-empty), sedangkan COUNT hanya menghitung sel ber-isikan angka.",
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
            "Pekerjaan analisis data di spreadsheet bergeser dari sekadar perhitungan matematika dasar ke otomatisasi logika bisnis. Menggunakan fungsi logika (`IF`, `IFS`), pencarian acuan (`XLOOKUP`), dan agregasi bersyarat (`SUMIFS`, `COUNTIFS`), seorang analis mampu mengolah ribuan transaksi mentah menjadi keputusan bisnis secara efisien.\n\n" +
            "## Evolusi Pencarian Data: VLOOKUP vs XLOOKUP\n\n" +
            "Selama puluhan tahun, `VLOOKUP` (Vertical Lookup) menjadi fungsi standar untuk mencocokkan data antar tabel. Namun `VLOOKUP` memiliki dua kelemahan struktural utama:\n" +
            "1. **Hanya Bisa Mencari ke Kanan**: Kolom kunci pencarian (`lookup_value`) wajib berada di kolom paling kiri dari rentang tabel.\n" +
            "2. **Patah Saat Disisipi Kolom**: Menggunakan indeks nomor kolom (`col_index`) membuat formula langsung mengembalikan data yang salah jika seseorang menyisipkan kolom baru di tabel sumber.\n\n" +
            "Fungsi modern **`XLOOKUP`** menyelesaikan kedua masalah tersebut karena memisahkan rentang pencarian dan rentang hasil secara independen.\n\n" +
            "```text\n" +
            "ALUR XLOOKUP(lookup_val, lookup_array, return_array):\n" +
            "[Cari ID: 102] ---> [Kolom B: ID Pelanggan] ---> [Cocok di Baris 3]\n" +
            "                                                        |\n" +
            "                                                        v\n" +
            "[Kembalikan Nilai dari Kolom A: Nama Pelanggan (Bisa di sebelah kiri!)]\n" +
            "```\n\n" +
            "## Tabel Perbandingan Fungsi Pencarian & Agregasi\n\n" +
            "| Fungsi | Kegunaan Utama | Sintaks Dasar | Keunggulan / Catatan |\n" +
            "|---|---|---|---|\n" +
            "| **`IF`** | Evaluasi 1 Kondisi Logika | `=IF(A2>=75, \"Lulus\", \"Gagal\")` | Dasar percabangan keputusan. |\n" +
            "| **`IFS`** | Evaluasi Multi Kondisi Bertingkat | `=IFS(A2>=85, \"A\", A2>=70, \"B\", TRUE, \"C\")` | Menggantikan nested IF yang rumit. |\n" +
            "| **`SUMIF(S)`** | Jumlahkan Angka dengan N Kriteria | `=SUMIFS(sum_range, crit_range1, crit1)` | Memiliki varian `SUMIF(S)`, `COUNTIF(S)`, dan `AVERAGEIF(S)`. |\n" +
            "| **`VLOOKUP`** | Cari Data Vertikal (Klasik) | `=VLOOKUP(key, range, col_num, FALSE)` | Wajib sertakan `FALSE` untuk exact match. |\n" +
            "| **`XLOOKUP`** | Cari Data Modern (Kiri & Kanan) | `=XLOOKUP(key, lookup_arr, return_arr)` | Default exact match & tahan perubahan kolom. |\n" +
            "| **`IFERROR`** | Bungkus Formula agar Mencegah Error | `=IFERROR(formula, fallback)` | Mencegah tampilan `#N/A` atau `#DIV/0!`. |\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Lupa Parameter EXACT MATCH pada VLOOKUP**: Jika parameter ke-4 VLOOKUP dilupakan atau diisi `TRUE`, Excel akan melakukan *approximate match* yang mengembalikan nilai salah tanpa disadari.\n" +
            "- **Urutan Parameter SUMIFS vs SUMIF**: Pada `SUMIF` tunggal, `sum_range` ada di akhir. Namun pada `SUMIFS` (jamak), `sum_range` berada **di awal sintaks**. Ini sering memicu error saat berpindah fungsi.\n" +
            "- **Pencarian Angka vs Teks pada Lookup**: Jika ID di sel pencarian bertipe Angka (`101`), tetapi ID di tabel acuan bertipe Teks (`\"101\"`), `XLOOKUP` atau `VLOOKUP` akan mengembalikan `#N/A` (data tidak ditemukan).\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Menguasai `XLOOKUP` dan `SUMIFS` adalah standar industri saat membuat laporan analisis penjualan bulanan, memadukan data transaksi toko dengan master pelanggan, dan menyusun dashboard laporan keuangan perusahaan.",
        },
        {
          kind: "step",
          id: "sheet-2-1",
          title: "Fungsi Logika IF & IFS",
          explanation:
            "Fungsi `=IF(kondisi, nilai_jika_benar, nilai_jika_salah)` melakukan pengujian logika untuk mengembalikan hasil yang berbeda berdasarkan syarat tertentu. Untuk mengevaluasi lebih dari dua kondisi bertingkat (misalnya penentuan grade nilai A/B/C/D), gunakan fungsi modern `=IFS()` yang jauh lebih rapi dibanding menumpuk fungsi IF di dalam IF (nested IF). Dipakai untuk kategorisasi otomatis status pembayaran, bonus penjualan, atau kondisi stok barang. Jebakan umum: lupa membungkus teks output dengan tanda petik ganda.",
          example: {
            code: '=IF(A1>=75, "Lulus", "Gagal")',
            output: "Mengembalikan string 'Lulus' jika nilai A1 >= 75.",
            note: "Fungsi IFS menggantikan nested IF yang bertingkat-tingkat.",
          },
          instruction:
            "Bandingkan nilai di sel B2. Bila melebihi angka 1000, nyatakan sebagai \"Bonus\". Sebaliknya, nyatakan \"Standar\". Susun fungsi logika IF untuk kondisi ini.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*IF\\(\\s*B2\\s*>\\s*1000\\s*,\\s*[\"']Bonus['\"]\\s*,\\s*[\"']Standar['\"]\\s*\\)",
              flags: "i",
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
            "Fungsi `=SUMIFS(sum_range, criteria_range1, criteria1)` menjumlahkan nilai angka hanya pada baris yang memenuhi kriteria tertentu. Berbeda dengan `SUMIF` lama, `SUMIFS` menaruh rentang angka yang dijumlahkan (`sum_range`) di urutan pertama dan mendukung banyak kriteria penyaringan sekaligus. Dipakai untuk menghitung omset per wilayah, total penjualan per kategori produk, atau rekap gaji per divisi. Jebakan pemula: tertukar antara urutan parameter `SUMIF` dan `SUMIFS`.",
          example: {
            code: '=SUMIFS(C1:C100, A1:A100, "Elektronik")',
            output: "Menghitung total penjualan khusus untuk kategori Elektronik.",
            note: "SUMIFS mendukung banyak kriteria penyaringan sekaligus.",
          },
          instruction:
            "Hitung total nilai di kolom C khusus untuk baris yang statusnya \"Lunas\" di kolom A (gunakan rentang kolom utuh C:C dan A:A). Susun fungsi SUMIFS-nya.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUMIFS\\(\\s*C:C\\s*,\\s*A:A\\s*,\\s*[\"']Lunas['\"]\\s*\\)",
              flags: "i",
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
            "VLOOKUP (Vertical Lookup) mencari kata kunci secara vertikal di kolom paling kiri dari sebuah tabel referensi, lalu mengambil nilai pada kolom ke-n di baris yang sama. Parameter ke-4 wajib diisi `FALSE` untuk memastikan pencarian persis (exact match). Dipakai untuk menarik nama produk berdasarkan kode barang dari tabel master. Kelemahan utama VLOOKUP: tidak bisa mengambil kolom di sebelah kiri kunci pencarian, dan akan rusak jika ada kolom baru disisipkan di tengah tabel master.",
          example: {
            code: '=VLOOKUP(101, A1:D100, 2, FALSE)',
            output: "Mencari ID 101 dan mengambil nilai dari kolom ke-2.",
            note: "Kelemahan VLOOKUP: tidak bisa mencari ke arah kiri dan rawan rusak jika ada kolom disisipkan.",
          },
          instruction:
            "Gunakan VLOOKUP untuk mencari nilai tepat (exact match) A2 di rentang C1:D50, dan kembalikan nilai dari kolom ke-2.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*VLOOKUP\\(\\s*A2\\s*,\\s*C1:D50\\s*,\\s*2\\s*,\\s*FALSE\\s*\\)",
              flags: "i",
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
            "Fungsi `=XLOOKUP(lookup_value, lookup_array, return_array)` adalah pengganti modern VLOOKUP yang jauh lebih fleksibel. XLOOKUP dapat mencari ke arah kiri maupun kanan, tidak terpengaruh oleh penyisipan kolom baru, dan secara default melakukan pencarian tepat (exact match) tanpa perlu mengetik `FALSE`. Dipakai di seluruh pengolahan data profesional saat mengombinasikan lembar kerja transaksi dengan tabel master acuan. Jebakan pemula: memilih rentang `lookup_array` dan `return_array` dengan jumlah baris yang tidak sama.",
          example: {
            code: "=XLOOKUP(A2, C1:C100, B1:B100)",
            output: "Mencari nilai A2 di kolom C dan mengambil hasil dari kolom B.",
            note: "XLOOKUP secara default melakukan exact match (tanpa butuh parameter FALSE).",
          },
          instruction:
            "Gunakan fungsi pencarian modern XLOOKUP untuk mencari nilai A2 pada kolom B (B:B), dan mengembalikan hasil dari kolom C (C:C).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*XLOOKUP\\(\\s*A2\\s*,\\s*B:B\\s*,\\s*C:C\\s*\\)",
              flags: "i",
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
            "Fungsi manipulasi teks digunakan untuk mengolah kata dan kode string. `=TRIM(A1)` menghapus spasi liar di awal, akhir, dan spasi ganda. `=LEFT(A1, n)` mengambil n karakter dari sisi kiri, `=RIGHT(A1, n)` dari sisi kanan, dan `=MID(A1, start, n)` dari posisi tengah. Dipakai saat merapikan data kotor hasil penarikan sistem e-commerce atau mengekstrak kode kategori dari SKU barang. Jebakan: lupa bahwa hasil potong teks selalu bertipe Teks meski isinya deretan angka.",
          example: {
            code: '=TRIM("  Budi Sudarsono  ")',
            output: '"Budi Sudarsono"',
            note: "Sangat krusial untuk pembersihan data mentah.",
          },
          instruction:
            "Hapus semua spasi ekstra di awal, akhir, maupun antar kata pada sel A2 menggunakan fungsi TRIM.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TRIM\\(\\s*A2\\s*\\)",
              flags: "i",
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
            "Fungsi tanggal digunakan untuk mengalkulasi durasi dan jatuh tempo secara dinamis. `=TODAY()` mengembalikan tanggal hari ini yang otomatis ter-update setiap kali file dibuka. `=EOMONTH(A1, 0)` mengembalikan tanggal akhir bulan dari tanggal di sel A1. Dipakai dalam laporan keuangan bulanan, pemantauan tanggal kedaluwarsa produk, atau perhitungan umur piutang pelanggan. Jebakan: menggunakan tanggal manual yang diketik teks sehingga laporan tidak dinamis saat berganti bulan.",
          example: {
            code: "=EOMONTH(TODAY(), 0)",
            output: "Tanggal akhir bulan berjalan.",
            note: "Berguna untuk membuat laporan keuangan bulanan.",
          },
          instruction:
            "Gunakan fungsi yang dapat memanggil tanggal hari ini secara dinamis setiap kali lembar kerja dibuka.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*TODAY\\(\\)",
              flags: "i",
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
            "Fungsi `=IFERROR(formula, nilai_fallback)` menangkap error matematika atau pencarian (seperti `#N/A`, `#VALUE!`, `#DIV/0!`) dan menggantinya dengan nilai alternatif yang lebih ramah (misalnya angka `0` atau teks `\"Tidak Ditemukan\"`). Dipakai untuk membungkus `VLOOKUP` atau `XLOOKUP` agar laporan dashboard eksekutif terlihat bersih dan profesional tanpa baris berisi pesan error merah. Jebakan: membungkus seluruh formula dengan IFERROR tanpa sengaja menyembunyikan bug logika asli.",
          example: {
            code: '=IFERROR(XLOOKUP(A2, B:B, C:C), "Tidak Ditemukan")',
            output: "Menampilkan 'Tidak Ditemukan' alih-alih error #N/A.",
            note: "Menjaga tampilan laporan bisnis tetap rapi.",
          },
          instruction:
            "Ketikkan fungsi VLOOKUP exact match untuk mencari A2 di B:C kolom 2, lalu bungkus fungsi tersebut dengan IFERROR agar menampilkan angka 0 jika error.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*IFERROR\\(\\s*VLOOKUP\\(\\s*A2\\s*,\\s*B:C\\s*,\\s*2\\s*,\\s*FALSE\\s*\\)\\s*,\\s*0\\s*\\)",
              flags: "i",
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
              question:
                "Fungsi pencarian modern apa di Excel/Google Sheets yang direkomendasikan menggantikan VLOOKUP karena bisa mencari ke arah kiri dan tidak rawan rusak saat disisipi kolom?",
              choices: ["XLOOKUP", "HLOOKUP", "SUMIF", "LOOKUP_LEFT"],
              answerIndex: 0,
              explanation:
                "XLOOKUP adalah pengganti modern VLOOKUP yang fleksibel, mendukung pencarian dua arah, dan tahan terhadap perubahan struktur kolom.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Fungsi apa yang dapat membungkus rumus lain agar mencegah error #N/A atau #DIV/0! muncul di layar, lalu menampilkannya sebagai nilai alternatif?",
              choices: ["IFERROR", "ERRORIF", "NATCHECK", "IFNA"],
              answerIndex: 0,
              explanation:
                "IFERROR berguna untuk menangkap pesan error pada formula dan menggantinya dengan nilai fallback seperti 0 atau teks rapi.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Jika ingin menghitung JUMLAH BARIS transaksi dari pegawai berstatus 'Lulus', kamu harus menggunakan fungsi...",
              choices: ["COUNTIF", "SUMIF", "AVERAGEIF", "COUNT"],
              answerIndex: 0,
              explanation:
                "COUNTIF bertugas menghitung banyaknya kemunculan baris yang memenuhi kriteria, sedangkan SUMIF menghitung total penjumlahannya.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Jika kamu ingin menampilkan kata 'Berhasil' jika nilai penjualan di B2 lebih dari 1000, dan 'Gagal' jika kurang, formula mana yang tepat?",
              choices: [
                "=IF(B2>1000, \"Berhasil\", \"Gagal\")",
                "=IF(B2>1000, \"Gagal\", \"Berhasil\")",
                "=IF(B2<1000, \"Berhasil\", \"Gagal\")",
                "=IF(B2=1000, \"Berhasil\", \"Gagal\")",
              ],
              answerIndex: 0,
              explanation:
                "Fungsi IF menguji kondisi pertama (B2>1000), mengembalikan nilai kedua (\"Berhasil\") jika TRUE, dan nilai ketiga (\"Gagal\") jika FALSE.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Untuk memotong dan mengambil tepat 4 karakter huruf dari sebelah kiri pada teks di sel A1, fungsi apa yang harus dipakai?",
              choices: ["=LEFT(A1, 4)", "=RIGHT(A1, 4)", "=MID(A1, 4)", "=TRIM(A1, 4)"],
              answerIndex: 0,
              explanation:
                "Fungsi LEFT mengambil sejumlah n karakter dari posisi paling awal (sisi kiri) sebuah teks.",
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
            "Di industri nyata, data mentah yang diunduh dari database, formulir survei, atau sistem POS e-commerce **hampir tidak pernah bersih**. Adanya spasi tak terlihat, penulisan huruf besar/kecil tidak konsisten (`Jakarta` vs `JAKARTA` vs `jkt`), baris duplikat, dan karakter aneh dapat merusak seluruh analisis.\n\n" +
            "Prinsip utama analisis data adalah **Garbage In, Garbage Out (GIGO)**: jika data yang dimasukkan kotor, hasil kalkulasi dan grafik dashboard yang dihasilkan pun akan salah. Praktisi data menghabiskan hingga 80% waktu proyek hanya untuk pembersihan data sebelum analisis dimulai.\n\n" +
            "## Pipeline Pembersihan Data Mentah\n\n" +
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
            "## Tabel Fitur & Fungsi Pembersihan Data\n\n" +
            "| Alat / Fungsi | Kegunaan | Contoh Sintaks / Jalur Menu | Hasil |\n" +
            "|---|---|---|---|\n" +
            "| **`TRIM()`** | Hapus spasi ganda & spasi di awal/akhir | `=TRIM(A2)` | `\"  Budi  \"` -> `\"Budi\"` |\n" +
            "| **`PROPER()`** | Format Kapital Awal Kata (Title Case) | `=PROPER(A2)` | `\"budi sudarsono\"` -> `\"Budi Sudarsono\"` |\n" +
            "| **`SUBSTITUTE()`** | Ganti karakter spesifik dengan teks baru | `=SUBSTITUTE(A2, \"-\", \"\")` | `\"0812-3456\"` -> `\"08123456\"` |\n" +
            "| **`SPLIT()` / Text to Cols** | Memecah 1 sel teks menjadi beberapa kolom | `=SPLIT(A2, \",\")` / Data > Text to Columns | `\"Budi,Jakarta\"` -> `\"Budi\" \\| \"Jakarta\"` |\n" +
            "| **`UNIQUE()`** | Ekstrak daftar unik tanpa baris duplikat | `=UNIQUE(A2:A100)` | Menghilangkan entri berulang. |\n" +
            "| **Data Validation** | Buat constraint dropdown pada sel | Data > Data validation | Mencegah salah ketik input user. |\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Melakukan Remove Duplicates Tanpa Backup**: Fitur `Data > Remove Duplicates` menghapus baris secara permanen dari tabel. Selalu buat salinan cadangan (*backup sheet*) sebelum menjalankan perintah ini.\n" +
            "- **Mengira TRIM Menghapus Semua Spasi**: `TRIM` menyisakan **satu spasi tunggal** di antara kata (karena spasi antar kata memang dibutuhkan). Jika ingin menghapus seluruh spasi tanpa sisa, gunakan `=SUBSTITUTE(A2, \" \", \"\")`.\n" +
            "- **Mengabaikan Perbedaan Kapitalisasi saat Grouping**: Pivot Table memperlakukan `\"JAKARTA\"` dan `\"Jakarta\"` sebagai dua kategori berbeda jika belum distandarisasi dengan `PROPER()` atau `UPPER()`.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Setiap Data Analyst di e-commerce atau perbankan wajib melakukan audit kualitas data (data sanity check) sebelum mengirimkan laporan bulanan kepada manajemen. Memasang Data Validation pada template spreadsheet operasional terbukti menghemat ratusan jam kerja tim admin dari kesalahan entri data.",
        },
        {
          kind: "step",
          id: "sheet-3-1",
          title: "Membersihkan Spasi Liar dengan TRIM",
          explanation:
            "Fungsi `=TRIM(A2)` secara otomatis menghapus spasi di awal string, spasi berlebih di akhir string, dan merapikan spasi ganda di antara kata menjadi spasi tunggal. Dipakai sebagai langkah pertama pembersihan data mentah hasil unduhan sistem web sebelum dilakukan pencarian `XLOOKUP` atau pembuatan Pivot Table. Jebakan pemula: menyertakan sel yang berisi format angka sebagai input `TRIM`, yang dapat mengonversi angka tersebut menjadi tipe data Teks.",
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
              flags: "i",
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
            "Menghapus duplikat dapat dilakukan dengan fitur menu `Data > Remove Duplicates` (permanen pada tabel) atau fungsi dinamis `=UNIQUE(range)`. Fungsi `UNIQUE` menyaring rentang data dan mengembalikan daftar entri unik tanpa mengubah tabel aslinya. Dipakai untuk mengekstrak master pelanggan, daftar produk unik, atau kategori dari ribuan baris log transaksi. Jebakan pemula: menghapus duplikat berbasis satu kolom padahal baris tersebut memiliki informasi unik di kolom lainnya.",
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
              flags: "i",
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
            "Memecah teks dilakukan menggunakan fitur `Data > Text to Columns` atau fungsi `=SPLIT(teks, pemisah)`. Fitur ini membagi string teks panjang yang tergabung di satu sel (seperti nama lengkap atau alamat CSV `\"Budi,Jakarta,0812\"`) menjadi beberapa kolom terpisah berdasarkan karakter delimiter seperti koma atau spasi. Dipakai saat merapikan data identitas atau memisahkan kode SKU barang. Jebakan: sel di sebelah kanan yang akan terisi data pecahan tidak boleh berisi data lain agar tidak tertimpa.",
          example: {
            code: '=SPLIT(A1, " ")',
            output: "Nama 'Budi Sudarsono' terpisah ke 2 sel: 'Budi' dan 'Sudarsono'.",
            note: "Karakter pemisah (delimiter) bisa berupa koma, spasi, atau titik koma.",
          },
          instruction:
            "Pisahkan teks pada sel A2 ke dalam beberapa kolom berdasarkan karakter koma (,).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SPLIT\\(\\s*A2\\s*,\\s*[\"'],[\"']\\s*\\)",
              flags: "i",
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
            "Penggantian karakter teks dilakukan menggunakan fitur `Ctrl+H` (Find & Replace) atau fungsi `=SUBSTITUTE(teks, teks_lama, teks_baru)`. Fungsi `SUBSTITUTE` secara spesifik mengganti kemunculan karakter tertentu (seperti simbol mata uang `\"Rp \"` atau tanda strip `\"-\"`) menjadi string kosong `\"\"` atau karakter lain. Dipakai untuk membersihkan teks angka kotor agar dapat diubah kembali menjadi tipe data numerik sejati. Jebakan pemula: tidak membedakan huruf besar dan kecil pada parameter `teks_lama`.",
          example: {
            code: '=SUBSTITUTE(A1, "Rp ", "")',
            output: "Menghapus awalan teks 'Rp ' dari string harga.",
            note: "Mengubah kolom teks angka menjadi nilai numerik sejati.",
          },
          instruction:
            "Gantikan setiap karakter strip (-) yang ada pada teks di sel A2 menjadi kosong (tanpa spasi/tidak ada karakter).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*SUBSTITUTE\\(\\s*A2\\s*,\\s*[\"']-[\"']\\s*,\\s*[\"'][\"']\\s*\\)",
              flags: "i",
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
            "Kombinasi `=IF(OR(A2=\"Lunas\", A2=\"Pending\"), A2, \"Invalid\")` digunakan untuk mengecek apakah isi sel teks memenuhi salah satu dari beberapa opsi status yang valid. Fungsi `OR()` mengembalikan nilai `TRUE` jika salah satu syarat terpenuhi. Dipakai dalam pembersihan audit data untuk menandai baris transaksi yang mengandung status tidak standar sebelum diproses ke tahap agregasi. Jebakan pemula: lupa menutup kurung fungsi OR sebelum memasukkan parameter output IF.",
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
              flags: "i",
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
            "Fungsi standarisasi kapitalisasi teks digunakan untuk menyamakan format penulisan huruf. `=PROPER(A1)` mengubah teks menjadi kapital awal kata (Title Case), `=UPPER(A1)` mengubah menjadi huruf kapital semua, dan `=LOWER(A1)` menjadi huruf kecil semua. Dipakai saat merapikan entri nama pelanggan atau alamat kota agar seragam di seluruh lembar kerja. Jebakan: kata sandang atau singkatan (seperti `PT` atau `CV`) akan ikut diubah menjadi `Pt` jika menggunakan `PROPER`.",
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
              flags: "i",
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
            "Menghitung jumlah duplikat dilakukan dengan mengurangkan total baris data asli dengan jumlah baris data unik: `=COUNTA(A1:A50) - COUNTA(UNIQUE(A1:A50))`. Jika hasilnya lebih dari nol, artinya terdapat baris yang terinput lebih dari satu kali di dalam tabel. Dipakai dalam checklist audit kebersihan data sebelum melakukan agregasi penjualan atau pelaporan stok barang. Jebakan pemula: lupa menyertakan rentang sel yang identik pada kedua fungsi COUNTA.",
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
              flags: "i",
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
                "Apa kegunaan utama dari fitur 'Data Validation' > 'List' pada sel lembar kerja?",
              choices: [
                "Memaksa pengguna memilih opsi dari dropdown yang ada untuk menjaga konsistensi data",
                "Mencegah file spreadsheet terkena macro virus",
                "Memeriksa apakah data tersebut terhubung ke internet",
                "Mengenkripsi kolom agar tidak dapat dibaca orang lain",
              ],
              answerIndex: 0,
              explanation:
                "Data Validation List membuat pilihan dropdown di sel untuk memastikan pengguna memasukkan data sesuai opsi standar tanpa typo.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Fungsi spreadsheet apa yang menghapus semua ruang spasi kosong di awal/akhir teks serta merapikan spasi ganda menjadi spasi tunggal?",
              choices: ["TRIM", "CLEAN", "STRIP", "SPLIT"],
              answerIndex: 0,
              explanation:
                "TRIM sangat ampuh untuk membersihkan spasi tersembunyi hasil copy-paste dari sistem luar.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Saat data yang kamu terima berisi teks nama depan dan belakang yang menyatu (contoh 'Budi,Sudarsono') dan kamu ingin memisahkan mereka ke kolom berbeda, fitur apa yang paling efisien digunakan?",
              choices: [
                "Text to Columns (atau fungsi SPLIT)",
                "Remove Duplicates",
                "Conditional Formatting",
                "Find and Replace",
              ],
              answerIndex: 0,
              explanation:
                "Text to Columns dan fungsi SPLIT membagi string teks dalam satu sel menjadi beberapa kolom berdasarkan karakter pemisah (delimiter).",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Untuk menghasilkan daftar nama unik klien dari kolom yang berisi ribuan baris namun banyak terjadi duplikasi entri, fungsi mana yang paling praktis?",
              choices: ["=UNIQUE(range)", "=FILTER(range)", "=SUMIF(range)", "=VLOOKUP(range)"],
              answerIndex: 0,
              explanation:
                "Fungsi UNIQUE mengekstrak data dan hanya mengembalikan satu entri unik dari setiap nilai, membuang baris duplikat.",
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
            "**Pivot Table** adalah alat analisis paling powerful di spreadsheet yang memungkinkan kamu meringkas, mengelompokkan, dan menganalisis ribuan baris data transaksi mentah hanya dengan tindakan *drag-and-drop* — tanpa perlu menulis rumus agregasi yang rumit.\n\n" +
            "Syarat utama membuat Pivot Table adalah data mentah harus dalam bentuk **Tabel Rapi (Tabular Data)**: memiliki baris judul (header) di paling atas, setiap kolom mewakili satu variabel, tidak ada sel yang di-merge, dan tidak ada baris kosong di tengah data.\n\n" +
            "## Anatomi 4 Area Utama Pivot Table\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                          PIVOT TABLE EDITOR                             |\n" +
            "+------------------------------------+------------------------------------+\n" +
            "|  1. FILTERS (Penyaring Tabel)      |  2. COLUMNS (Label Menyamping)     |\n" +
            "|     Contoh: Tahun = 2026           |     Contoh: Metode Pembayaran      |\n" +
            "+------------------------------------+------------------------------------+\n" +
            "|  3. ROWS (Label Berjejer ke Bawah) |  4. VALUES (Angka Agregasi)        |\n" +
            "|     Contoh: Kategori Produk        |     Contoh: SUM of Penjualan       |\n" +
            "+------------------------------------+------------------------------------+\n" +
            "```\n\n" +
            "## Tabel Fitur & Area Pivot Table\n\n" +
            "| Area / Fitur | Fungsi Utama | Contoh Penggunaan Bisnis |\n" +
            "|---|---|---|\n" +
            "| **Rows** | Menampilkan nilai unik sebagai baris vertikal | Daftar Wilayah, Nama Sales, Kategori. |\n" +
            "| **Columns** | Menampilkan nilai unik sebagai kolom horizontal | Kanal Penjualan (Online vs Offline), Tahun. |\n" +
            "| **Values** | Berisi angka yang diagregasi (SUM, COUNT, AVG) | Total Omset Penjualan, Rata-rata Transaksi. |\n" +
            "| **Filters** | Menyaring seluruh tabel Pivot berdasarkan syarat | Filter Laporan per Cabang tertentu. |\n" +
            "| **Calculated Field** | Membuat kolom perhitungan baru di dalam Pivot | Menghitung Profit Margin (`=Profit / Omset`). |\n" +
            "| **Slicer** | Tombol filter visual yang interaktif | Tombol penyaring Bulan/Tahun pada Dashboard. |\n\n" +
            "## Opsi Tampilan Angka (% of Grand Total)\n\n" +
            "Selain nilai nominal angka (`SUM`), area **Values** dapat diubah opsinya lewat `Show values as` menjadi persentase kontribusi (seperti `% of Grand Total` atau `% of Row Total`). Opsi ini sangat berguna untuk melihat produk mana yang menyumbang persentase omset terbesar tanpa perlu kalkulasi manual.\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Data Sumber Berubah Tapi Lupa REFRESH**: Pivot Table menyimpan data di dalam memori cache terpisah (*Pivot Cache*). Jika kamu mengubah angka di data mentah, Pivot Table **tidak otomatis ter-update**. Kamu wajib mengeklik `PivotTable Analyze > Refresh` (atau `Data > Refresh`).\n" +
            "- **Menaruh Kolom Angka di Area Rows**: Menaruh kolom berisi nilai nominal (seperti harga barang) ke area Rows akan membuat tabel pivot sangat panjang berjejer ke bawah alih-alih meringkas data.\n" +
            "- **Penambahan Baris Baru Terpotong Rentang**: Jika rentang sumber awal diset ke `A1:D100`, saat transaksi bertambah ke baris `101`, transaksi baru tidak ikut terhitung. Solusi terbaik adalah mengubah data sumber menjadi format **Excel Table (Ctrl+T)** terlebih dahulu.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Kemampuan membuat Pivot Table dalam 60 detik adalah tes kemampuan spreadsheet yang paling sering diuji saat proses interview kerja posisi Business Analyst, Financial Controller, dan Category Management di industri retail maupun teknologi.",
        },
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
                "Apakah Pivot Table akan langsung berubah seketika itu juga bila kita mengganti satu angka di Data Sumber-nya?",
              choices: [
                "Tidak, kita harus mengklik 'Refresh' Pivot Table tersebut",
                "Ya, akan otomatis berubah seketika seperti halnya fungsi SUM biasa",
                "Tidak, Pivot Table hanya sekali pakai dan harus dibuat ulang",
                "Ya, tetapi membutuhkan waktu 10 menit untuk sinkronisasi otomatis",
              ],
              answerIndex: 0,
              explanation:
                "Pivot Table memuat datanya di memori terpisah (Pivot Cache) agar analisis berjalan cepat. Karena itu kita perlu mengklik 'Refresh' saat data sumber diperbarui.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Fitur Pivot Table yang memungkinkan kita membuat formula kalkulasi metrik baru tanpa menyentuh tabel data mentah disebut...",
              choices: ["Calculated Field", "Pivot Formula", "Custom Metrics", "Slicer Formula"],
              answerIndex: 0,
              explanation:
                "Calculated Field sangat membantu membuat metrik turunan (seperti Profit Margin) tanpa memberatkan atau merubah struktur data sumber asli.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Di dalam panel menu Pivot Table, ke area manakah kamu menaruh field 'Kategori Produk' jika kamu menginginkan data itu menjadi baris label berjejer ke bawah?",
              choices: ["Rows", "Values", "Columns", "Filters"],
              answerIndex: 0,
              explanation:
                "Area Rows menempatkan item data secara vertikal dari atas ke bawah pada baris-baris berurutan Pivot Table.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Apabila kamu menginginkan analisis total penjualan Pivot Table menampilkan persentase tiap produk terhadap grand total, opsi perhitungan apakah di 'Values' yang kamu butuhkan?",
              choices: ["% of Grand Total", "Average", "Count", "Max"],
              answerIndex: 0,
              explanation:
                "Opsi '% of Grand Total' otomatis membagi setiap nilai sel dengan total keseluruhan untuk mengukur kontribusi omset.",
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
            "Visualisasi data bukan sekadar mempercantik laporan, melainkan tentang **Data Storytelling** — menyajikan insight utama secara cepat, jujur, dan mudah dipahami oleh eksekutif atau pemangku kepentingan tanpa memerlukan penjelasan lisan yang panjang.\n\n" +
            "## Panduan Memilih Jenis Chart\n\n" +
            "| Jenis Chart | Kapan Harus Dipakai | Kapan Harus Dihindari | Contoh Use Case |\n" +
            "|---|---|---|---|\n" +
            "| **Line Chart** | Data deret waktu (*time-series*) & melihat tren. | Membandingkan kategori diskrit tanpa urutan waktu. | Tren Penjualan Bulanan (Jan-Des). |\n" +
            "| **Bar / Column Chart** | Membandingkan nilai antar kategori diskrit. | Terlalu banyak kategori (>20 batang). | Perbandingan Penjualan per Cabang Kota. |\n" +
            "| **Pie Chart** | Proporsi bagian dari total untuk 2–3 segmen. | Kategori > 4 segmen atau selisih persen sangat tipis. | Komposisi Pelanggan Pria vs Wanita. |\n" +
            "| **Sparkline** | Grafik mini di dalam sel untuk ruang terbatas. | Membutuhkan nilai angka presisi pada sumbu. | Tren 12 Bulan di samping tabel KPI. |\n\n" +
            "## Prinsip Decluttering & Sumbu Vertikal Jujur\n\n" +
            "```text\n" +
            "LAYOUT DASHBOARD EKSEKUTIF SATU LAYAR:\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|  KARTU KPI UTAMA (Angka Ringkas Teks Besar)                              |\n" +
            "|  [ Total Omset: Rp 1.2M ]  [ Total Transaksi: 4,520 ]  [ Margin: 24% ]   |\n" +
            "+------------------------------------+------------------------------------+\n" +
            "|  CHART TREN UTAMA (Line Chart)     |  BREAKDOWN KATEGORI (Bar Chart)    |\n" +
            "|  Tren Bulanan Sepanjang Tahun      |  Top 5 Produk Paling Laris         |\n" +
            "+------------------------------------+------------------------------------+\n" +
            "|  TOMBOL SLICER FILTER INTERAKTIF: [ 2026 ] [ Q1 ] [ Wilayah: Jakarta ]  |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "**Prinsip Decluttering**: Hapus elemen grafik yang tidak menambah pemahaman (seperti garis kisi gridline yang tebal, bingkai kotak, dan latar belakang berwarna). Pastikan sumbu Y pada Grafik Batang (Bar/Column Chart) **selalu dimulai dari angka 0** agar tidak memicu penyampaian tren yang misleading.\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Penggunaan Pie Chart 3D dengan Banyak Segmen**: Pie chart 3D mengubah perspektif visual sehingga juring depan terlihat lebih besar daripada juring belakang meskipun angkanya lebih kecil. Lebih dari 4 segmen pada pie chart membuat audiens kesulitan membandingkan luas juring.\n" +
            "- **Memotong Sumbu Y Grafik Batang (Truncated Axis)**: Memulai sumbu Y dari angka 90 alih-alih 0 membuat selisih angka yang kecil (mis. 95 vs 100) terlihat seperti perbedaan raksasa 500%.\n" +
            "- **Warna Pelangi Tanpa Makna**: Menggunakan warna berbeda untuk setiap batang grafik hanya akan membuat visual riuh. Gunakan warna netral (abu-abu) dan berikan penekanan warna menonjol (biru/merah) hanya pada data yang ingin disorot.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Menyusun dashboard satu layar (*One-Page Executive Dashboard*) yang menggabungkan Kartu KPI, Line Chart Tren, dan Slicer interaktif adalah keterampilan utama analis saat menyiapkan materi presentasi laporan bulanan di hadapan Dewan Direksi.",
        },
        {
          kind: "step",
          id: "sheet-5-1",
          title: "Memilih Jenis Chart dari Bentuk Pertanyaan",
          explanation:
            "Pemilihan jenis grafik harus disesuaikan dengan jenis pertanyaan bisnis yang ingin dijawab. Pertanyaan perubahan data sepanjang waktu diwakili oleh Line Chart (grafik garis), sedangkan perbandingan nilai antar kategori paling baik disajikan dengan Bar atau Column Chart (grafik batang). Dipakai saat menyusun laporan presentasi bisnis agar data mudah dipahami audiens. Jebakan pemula: menggunakan Pie Chart untuk membandingkan lebih dari 5 kategori, yang membuat audiens kesulitan menilai luas juring.",
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
              message: "Tulis jalur menunya: Insert > Chart.",
            },
            {
              pattern: "(chart\\s*type|jenis)\\s*:\\s*line",
              flags: "i",
              message: "Data sepanjang waktu paling tepat memakai Line chart.",
            },
          ],
          solution: "Insert > Chart\nChart type: Line chart",
        },
        {
          kind: "step",
          id: "sheet-5-2",
          title: "Sumbu yang Jujur: Mulai dari Nol",
          explanation:
            "Grafik batang (Bar/Column Chart) yang sumbu vertikalnya (sumbu Y) tidak dimulai dari angka 0 akan memperbesar selisih angka secara visual dan menyesatkan audiens. Memastikan skala sumbu Y dimulai dari nol adalah aturan baku visualisasi data yang jujur karena tinggi batang mewakili nilai kuantitatifnya. Dipakai dalam pembuatan grafik laporan resmi perusahaan. Pengaturannya berada pada bagian chart editor menu `Vertical axis` dengan opsi nilai minimum diset ke 0.",
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
              message: "Sebutkan bagian sumbu vertikal di chart editor.",
            },
            {
              pattern: "min[^\\n]*:?\\s*0\\b",
              flags: "i",
              message: "Tetapkan nilai minimumnya 0.",
            },
          ],
          solution: "Chart editor > Vertical axis > Min: 0",
        },
        {
          kind: "step",
          id: "sheet-5-3",
          title: "Decluttering: Membuang Tinta yang Tidak Bermakna",
          explanation:
            "Prinsip decluttering adalah membuang elemen visual grafik yang tidak menambah pemahaman data, seperti garis bantuan (gridlines) yang terlalu tebal, bingkai kotak, dan latar belakang berwarna. Menghapus elemen non-esensial membantu fokus mata pembaca langsung tertuju pada tren data utama. Dipakai saat menyederhanakan grafik rumit untuk keperluan slide presentasi eksekutif. Jebakan: menyisakan terlalu banyak garis kisi sehingga grafik terlihat semak dan padat.",
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
              message: "Sebutkan pengaturan gridline di chart editor.",
            },
            {
              pattern: "(hapus|matikan|hilangkan|none|off|uncheck)",
              flags: "i",
              message: "Nyatakan bahwa gridline-nya dihapus atau dimatikan.",
            },
          ],
          solution: "Chart editor > Gridlines > Hapus centang Major gridlines",
        },
        {
          kind: "step",
          id: "sheet-5-4",
          title: "Conditional Formatting: Warna yang Bekerja Otomatis",
          explanation:
            "Fitur `Conditional Formatting` memasang aturan pewarnaan otomatis pada sel berdasarkan nilai di dalamnya (misalnya mewarnai sel ber-nilai negatif menjadi latar merah). Dipakai dalam pembuatan tabel KPI atau pemantauan stok agar anomali data langsung terlihat tanpa perlu mengecek satu per satu. Pengaturannya diakses lewat menu `Format > Conditional formatting`. Jebakan pemula: memberikan terlalu banyak aturan warna berbeda pada satu tabel yang justru membingungkan pembaca.",
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
              message: "Kondisinya: nilai kurang dari 0.",
            },
          ],
          solution: "Format > Conditional formatting\nRentang: D2:D200\nAturan: Less than 0 (latar merah)",
        },
        {
          kind: "step",
          id: "sheet-5-5",
          title: "Sparkline: Grafik Mini di Dalam Satu Sel",
          explanation:
            "Fungsi `=SPARKLINE(rentang_data)` menggambar grafik tren mini di dalam sel individu tanpa memakan ruang area kerja yang besar. Dipakai dalam lembar kerja dashboard ringkas untuk menampilkan tren 12 bulan di samping nama cabang atau produk. Sparkline sangat hemat ruang dan cocok disandingkan dengan tabel KPI. Jebakan pemula: mengandalkan sparkline untuk membaca nilai persis angka padahal grafik mini ini hanya ditujukan menunjukkan arah tren.",
          example: {
            code: '=SPARKLINE(B2:M2, {"charttype", "column"})',
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
              message: "Pakai fungsi =SPARKLINE(...).",
            },
            {
              pattern: "C2:N2",
              flags: "i",
              message: "Rentang datanya C2:N2.",
            },
          ],
          solution: "=SPARKLINE(C2:N2)",
        },
        {
          kind: "step",
          id: "sheet-5-6",
          title: "Kartu KPI: Angka Utama di Kepala Dashboard",
          explanation:
            "Kartu KPI (Key Performance Indicator) menyajikan angka ringkasan utama dalam ukuran font besar di bagian teratas dashboard satu layar. Menggunakan formula agregasi seperti `=SUM(E2:E5000)`, kartu KPI langsung memberi tahu pencapaian angka terpenting (seperti Total Omset atau Total Pelanggan Baru) saat dashboard pertama kali dibuka. Dipakai dalam penyusunan dashboard laporan eksekutif. Jebakan: menampilkan angka KPI tanpa memberi label keterangan periode waktu yang jelas.",
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
              message: "Pakai =SUM(E2:E5000) untuk menjumlahkan seluruh rentang.",
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
              question:
                "Jenis grafik apa di Spreadsheet yang paling tepat digunakan untuk menggambarkan Tren perubahan data dari waktu ke waktu (time-series)?",
              choices: [
                "Line Chart (Grafik Garis)",
                "Pie Chart",
                "Scatter Plot",
                "Radar Chart",
              ],
              answerIndex: 0,
              explanation:
                "Line Chart (Grafik Garis) paling tepat untuk memperlihatkan kontinuitas pergerakan tren data dari waktu ke waktu.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Grafik apakah yang digambar berbentuk mini, letaknya masuk di dalam satu sel individu, dan sangat ampuh untuk Dashboard?",
              choices: ["Sparkline", "Microchart", "Cellchart", "Linechart"],
              answerIndex: 0,
              explanation:
                "Sparklines sangat hemat ruang sehingga pas ditempatkan pada sel-sel KPI yang ringkas.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Aturan decluttering terbaik terhadap elemen 'Gridlines' (garis pembantu latar belakang grafik) adalah...",
              choices: [
                "Membuatnya transparan/menghapusnya agar fokus tertuju ke data grafik",
                "Mewarnainya merah supaya jelas pembacaan sumbu Y-nya",
                "Mempertebal garisnya supaya angka presisi",
                "Diubah bentuknya ke garis putus-putus berwarna emas",
              ],
              answerIndex: 0,
              explanation:
                "Semakin bersih grafik dari elemen yang tidak bermakna, semakin tajam dan jelas pesan data yang disampaikan.",
            },
            {
              id: "q4",
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
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Jika kita perlu membandingkan nilai ukuran 5 divisi berbeda secara proporsional dalam sebuah laporan tertulis, jenis chart apakah yang mudah dibaca selain Pie chart?",
              choices: [
                "Bar Chart (Grafik Batang)",
                "Line Chart",
                "Radar Chart",
                "Area Chart",
              ],
              answerIndex: 0,
              explanation:
                "Bar/Column Chart sangat baik untuk membandingkan jumlah kuantitatif antar kategori/divisi tanpa membingungkan audiens.",
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
            "Studi kasus bisnis mengikat seluruh keahlian spreadsheet yang telah dipelajari — mulai dari pembersihan data mentah (*Data Cleaning*), pembuatan kalkulasi rasio bisnis, penyusunan Pivot Table dan Dashboard, hingga tahap akhir penulisan **Executive Summary** untuk pemangku kepentingan.\n\n" +
            "## Pipeline Proyek Analisis Bisnis\n\n" +
            "```text\n" +
            "+-----------------------+     +-----------------------+     +-----------------------+\n" +
            "| 1. Data Cleaning      | --> | 2. Calculated Metrics | --> | 3. Pivot & Dashboard  |\n" +
            "| TRIM, PROPER, UNIQUE  |     | Gross Margin, Turnover|     | Pivot Table + Slicer  |\n" +
            "+-----------------------+     +-----------------------+     +-----------------------+\n" +
            "                                                                        |\n" +
            "                                                                        v\n" +
            "+-----------------------+     +-----------------------+     +-----------------------+\n" +
            "| 6. Pembagian Berkas   | <-- | 5. Proteksi Formula   | <-- | 4. Executive Summary  |\n" +
            "| Share with Access     |     | Protect Sheet         |     | Key Findings & Action |\n" +
            "+-----------------------+     +-----------------------+     +-----------------------+\n" +
            "```\n\n" +
            "## Struktur Executive Summary Profesional\n\n" +
            "Laporan analisis bisnis yang baik wajib dilengkapi **Executive Summary** 3 bagian di halaman utama:\n" +
            "1. **Key Findings (Temuan Utama)**: Fakta angka terpenting (misalnya: *Omset Q2 naik 15%, namun margin laba kotor turun 4%*).\n" +
            "2. **Root Cause (Akar Penyebab)**: Penjelasan penyebab dibalik angka (*Disebabkan oleh kenaikan biaya HPP bahan baku kopi sebesar 12%*).\n" +
            "3. **Actionable Recommendations (Rekomendasi Aksi)**: Usulan langkah konkret bagi manajemen (*Negosiasi ulang harga dengan pemasok atau naikkan harga jual eceran Rp 2.000*).\n\n" +
            "## Proteksi Berkas & Kolaboratif\n\n" +
            "Sebelum membagikan file spreadsheet hasil analisis ke tim operasional, kunci sel yang mengandung formula menggunakan fitur **`Protect Sheet`** (`Review > Protect Sheet`). Berikan hak akses edit hanya pada sel entri data mentah agar rumus kalkulasi tidak terhapus secara tidak sengaja.\n\n" +
            "## Jebakan / Kesalahan Umum\n\n" +
            "- **Mengirimkan File Berisi Error `#N/A`**: Menyerahkan berkas laporan bisnis yang masih dipenuhi pesan error membuat laporan terlihat amatir. Bungkus seluruh rumus pencarian dengan `IFERROR()`.\n" +
            "- **Laporan Tanpa Kesimpulan Tertulis**: Menyajikan dashboard angka tanpa penafsiran cerita membuat manajer kebingungan mengambil keputusan (*So What?*).\n" +
            "- **Lupa Mengunci Sheet (Protect Sheet)**: Membagikan file yang sel formulanya tidak dikunci berisiko tinggi merusak sistem perhitungan saat diisi oleh pengguna lain.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Pengerjaan proyek studi kasus end-to-end ini adalah simulasi nyata dari tugas harian seorang Business Analyst, Finance Executive, maupun Management Trainee saat menyusun laporan kinerja kuartalan perusahaan.",
        },
        {
          kind: "step",
          id: "sheet-6-1",
          title: "Pembersihan & Standarisasi Teks Gabungan",
          explanation:
            "Kombinasi fungsi `=TRIM(PROPER(A2))` menghapus spasi liar di awal dan akhir teks sekaligus mengubah format huruf menjadi kapital awal kata (Title Case). Dipakai dalam tahap awal pembersihan data mentah transaksi e-commerce sebelum diolah lebih lanjut ke dalam Pivot Table. Jebakan pemula: lupa menutup kurung fungsi bagian dalam sebelum memasukkan argumen fungsi luar.",
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
              flags: "i",
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
            "Menghitung rasio **Gross Profit Margin** keuangan dilakukan menggunakan formula `=(Pendapatan - HPP) / Pendapatan`. Rasio ini mengukur efisiensi bisnis dalam menghasilkan keuntungan kotor dari setiap rupiah omset yang masuk. Dipakai dalam analisis kesehatan keuangan UMKM maupun laporan bisnis perusahaan. Jebakan pemula: lupa memberikan tanda kurung pada operasi pengurangan sehingga pembagian dieksekusi lebih dulu.",
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
              flags: "i",
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
            "Fungsi `=COUNTIF(A1:A100, \"Resign\")` menghitung banyaknya karyawan yang berstatus keluar (resign) pada rentang data HR. Angka ini kemudian dibanding dengan total rata-rata staf untuk mengukur tingkat turnover karyawan secara kuantitatif. Dipakai oleh tim HR untuk memantau retensi talenta perusahaan. Jebakan pemula: kesalahan ejaan kriteria teks yang tidak persis dengan isi data di kolom.",
          example: {
            code: '=COUNTIF(StatusRange, "Resign") / AVERAGE(TotalStaffRange)',
            output: "Persentase tingkat turnover karyawan periode tahunan.",
            note: "Menyediakan metrik objektif bagi divisi HR.",
          },
          instruction:
            "Hitung ada berapa banyak baris di rentang A1 hingga A100 yang memiliki teks persis \"Resign\".",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "=\\s*COUNTIF\\(\\s*A1:A100\\s*,\\s*[\"']Resign['\"]\\s*\\)",
              flags: "i",
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
            "Ringkasan eksekutif (**Executive Summary**) adalah bagian tertulis 3 paragraf di bagian depan laporan yang merangkum temuan utama, akar penyebab, dan rekomendasi aksi bagi jajaran manajemen. Menyajikan angka tanpa narasi insight membuat laporan kurang bernilai bisnis. Dipakai setiap kali menyerahkan file hasil analisis data kepada atasan atau klien. Jebakan: menulis ringkasan yang terlalu panjang tanpa usulan solusi konkret.",
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
              flags: "i",
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
            "Fitur **Protect Sheet** (`Review > Protect Sheet`) digunakan untuk mengunci sel yang mengandung rumus agar tidak bisa diedit atau dihapus secara tidak sengaja oleh pengguna lain. Sebelum membagikan berkas laporan ke tim operasional, kunci seluruh sel formula dan sisakan hak edit hanya pada sel entri data mentah. Dipakai untuk menjaga integritas file spreadsheet perusahaan.",
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
              flags: "i",
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
              question:
                "Komponen apa yang wajib disertakan pada akhir laporan analisis data agar hasil angka bermanfaat bagi jajaran manajemen?",
              choices: [
                "Executive Summary berisi temuan utama dan Rekomendasi Aksi Nyata (Actionable Insights)",
                "Menghapus seluruh grafik dari lembar kerja",
                "Mengubah warna font menjadi putih agar tidak terlihat",
                "Menyimpan file sebagai PDF saja tanpa menyertakan spreadsheet",
              ],
              answerIndex: 0,
              explanation:
                "Angka analisis memberikan nilai bisnis nyata jika disertai Executive Summary dan Rekomendasi Aksi yang jelas.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "Untuk menjaga kerahasiaan formula kalkulasi gaji pegawai saat mengirimkan berkas ke divisi lain, alat Excel/Sheets apa yang harus dipasang?",
              choices: [
                "Protect Sheet / Protect Range",
                "Freeze Panes",
                "Hide Columns",
                "Conditional Formatting",
              ],
              answerIndex: 0,
              explanation:
                "Protect Sheet (Lock) menjamin formula atau tabel sumber tidak dapat diubah atau ditimpa oleh pengguna lain.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Di tahapan alur Pipeline analisis (Cleaning > Pivot > Dashboard), tahap manakah yang di industri paling banyak memakan waktu dan ketelitian?",
              choices: [
                "Cleaning (Pembersihan dan Merapikan Data)",
                "Pivot Table",
                "Mempercantik Dashboard",
                "Menulis Rekomendasi",
              ],
              answerIndex: 0,
              explanation:
                "Pembersihan Data (Data Cleaning) menghabiskan hingga 80% dari total waktu pengerjaan sebuah proyek analisis bisnis nyata.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Saat menghadapi kasus ribuan data transaksi berantakan, langkah pertama yang paling wajib dilakukan analis sebelum membuat Pivot Table atau Dashboard adalah...",
              choices: [
                "Membersihkan, menstandarisasi, dan mengecek duplikat data (Data Cleaning)",
                "Langsung membuat grafik Pie 3D",
                "Memberi warna-warni pada tabel mentah",
                "Menambahkan baris rata-rata di bawah tabel asli",
              ],
              answerIndex: 0,
              explanation:
                "Data kotor akan menghasilkan analisis yang salah (Garbage In, Garbage Out), sehingga pembersihan data adalah fondasi terpenting.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Rumus perhitungan manakah yang paling mendasar untuk mengkalkulasikan Net Profit atau Keuntungan Bersih suatu usaha dari tabel laporan?",
              choices: [
                "Pendapatan Total dikurangi seluruh Biaya (HPP dan Operasional)",
                "Harga Pokok Penjualan (HPP) dibagi Penjualan",
                "Total Aset dikurangi Hutang",
                "Rata-rata penjualan harian dikali jumlah karyawan",
              ],
              answerIndex: 0,
              explanation:
                "Keuntungan bersih (Net Profit) dihitung dengan mengurangkan seluruh total biaya dan pengeluaran operasional dari pendapatan kotor.",
            },
          ],
        },
      ],
    },
  ],
};
