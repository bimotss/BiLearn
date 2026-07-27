import re

with open('src/data/tracks/spreadsheet.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix languages
content = content.replace('language: "js"', 'language: "text"')

# Fix example.outputs (Concrete instead of benefit claims)
content = content.replace('output: "Menghemat waktu mengisikan deret secara manual."', 'output: "Teks \'Rabu\', \'Kamis\', dan \'Jumat\' muncul di sel-sel bawahnya."')
content = content.replace('output: "Tampilan tabel lebih profesional dan mudah dibaca."', 'output: "Angka 50000 berubah tampilan menjadi Rp 50.000,00."')
content = content.replace('output: "Hanya baris kategori Elektronik yang ditampilkan di lembar kerja."', 'output: "Baris dengan kategori Pakaian dan Makanan menghilang sementara dari tampilan."')
content = content.replace('output: "Menghemat waktu mengisikan deret secara manual."', 'output: "Rabu, Kamis, Jumat."')
content = content.replace('output: "Sangat krusial untuk pembersihan data mentah."', 'output: "Spasi ekstra hilang."')
content = content.replace('output: "Mencegah kesalahan pengetikan nama status oleh pengguna."', 'output: "Muncul tombol panah ke bawah berisi daftar pilihan di dalam sel."')
content = content.replace('output: "Dataset bersih dan siap masuk ke proses analisis bisnis."', 'output: "Semua spasi berlebih hilang dan tidak ada duplikat tersisa."')
content = content.replace('output: "Ringkasan total penjualan per kategori dibuat instan tanpa mengetik formula."', 'output: "Tabel ringkasan baru muncul berisi total omset per kategori."')
content = content.replace('output: "Kategori Elektronik menyumbang 45% dari total seluruh omset."', 'output: "Angka Rp 50.000 berubah menjadi persentase 45% dari Grand Total."')
content = content.replace('output: "Laporan tren omset bulanan otomatis terbentuk."', 'output: "Tanggal harian bergabung menjadi grup nama bulan (Jan, Feb, Mar)."')
content = content.replace('output: "Kolom Profit terhitung otomatis tanpa perlu mengubah tabel data mentah."', 'output: "Muncul kolom baru bernama Profit dengan hasil kalkulasi di tabel pivot."')
content = content.replace('output: "Tabel menyajikan hierarki bertingkat dari level wilayah hingga salesmen."', 'output: "Muncul tombol [+] untuk membuka rincian cabang di bawah nama region."')
content = content.replace('output: "Tombol pilihan visual Region muncul di atas dashboard."', 'output: "Muncul panel interaktif berisi tombol-tombol pilihan wilayah."')
content = content.replace('output: "Pivot Table memperbarui angka hasil agregasi sesuai data mentah terbaru."', 'output: "Angka total di Pivot Table berubah seketika menyesuaikan data baru."')
content = content.replace('output: "Penyampaian visual pesan data secara akurat."', 'output: "Grafik garis meliuk sesuai dengan data historis bulanan."')
content = content.replace('output: "Grafik tampil sangat bersih dan mudah dicerna direksi."', 'output: "Garis-garis grid di latar belakang grafik menghilang."')
content = content.replace('output: "Kerugian dan performa buruk langsung terlihat dalam 1 detik."', 'output: "Sel yang berisi angka negatif seketika berwarna merah latar belakangnya."')
content = content.replace('output: "Pengalaman membaca informasi eksekutif yang sempurna."', 'output: "Angka KPI besar berada di bagian atas layar dashboard."')
content = content.replace('output: "Mata pembaca langsung mengarah ke poin informasi yang paling penting."', 'output: "Satu batang grafik berwarna biru tua, sisanya abu-abu pudar."')
content = content.replace('output: "Solusi analisis bisnis berbasis data utuh."', 'output: "Tabel hasil agregasi beserta grafik siap dilihat."')
content = content.replace('output: "Rekomendasi nyata yang dapat langsung dieksekusi direksi."', 'output: "Teks ringkasan tiga baris siap disalin ke email."')
content = content.replace('output: "Sel formula terkunci aman dari pengeditan pihak luar."', 'output: "Muncul pesan error saat pengguna mencoba mengubah isi sel formula."')


# Instructions and comments replacements
replacements = [
    (
        'instruction:\n            "Tuliskan formula penjumlahan `=A1 + B1`."',
        'instruction:\n            "Hitung total penjumlahan dari sel A1 dan B1."'
    ),
    (
        'instruction:\n            "Tuliskan formula rata-rata `=AVERAGE(B1:B10)`."',
        'instruction:\n            "Hitung nilai rata-rata dari rentang sel B1 hingga B10."'
    ),
    (
        'instruction:\n            "Tuliskan formula perkalian dengan kunci absolut `=A2 * $C$1`."',
        'instruction:\n            "Kalikan nilai pada sel A2 dengan sel C1, dan pastikan referensi C1 terkunci secara absolut (baris dan kolom)."'
    ),
    (
        'instruction:\n            "Tuliskan formula IF `=IF(B2>1000, \\"Bonus\\", \\"Standar\\")`."',
        'instruction:\n            "Jika sel B2 lebih besar dari 1000, berikan status \\"Bonus\\", jika tidak berikan status \\"Standar\\". Susun fungsi IF yang sesuai."'
    ),
    (
        'instruction:\n            \'Tuliskan formula SUMIFS `=SUMIFS(C:C, A:A, "Lunas")`.\'',
        'instruction:\n            \'Hitung total nilai di kolom C khusus untuk baris yang statusnya "Lunas" di kolom A. Susun fungsi SUMIFS-nya.\''
    ),
    (
        'instruction:\n            \'Tuliskan formula VLOOKUP `=VLOOKUP(A2, C1:D50, 2, FALSE)`.\'',
        'instruction:\n            \'Gunakan VLOOKUP untuk mencari nilai tepat (exact match) A2 di rentang C1:D50, dan kembalikan nilai dari kolom ke-2.\''
    ),
    (
        'instruction:\n            "Tuliskan formula XLOOKUP `=XLOOKUP(A2, B:B, C:C)`."',
        'instruction:\n            "Gunakan fungsi pencarian modern XLOOKUP untuk mencari nilai A2 pada kolom B, dan mengembalikan hasil dari kolom C."'
    ),
    (
        'instruction:\n            "Tuliskan formula TRIM `=TRIM(A2)`."',
        'instruction:\n            "Hapus semua spasi ekstra di awal, akhir, maupun antar kata pada sel A2."'
    ),
    (
        'instruction:\n            "Tuliskan formula tanggal hari ini `=TODAY()`."',
        'instruction:\n            "Gunakan fungsi yang bisa memanggil tanggal hari ini secara dinamis setiap kali lembar kerja dibuka."'
    ),
    (
        'instruction:\n            \'Tuliskan formula pembungkus IFERROR `=IFERROR(VLOOKUP(A2, B:C, 2, FALSE), 0)`.\'',
        'instruction:\n            \'Ketikkan fungsi VLOOKUP exact match untuk mencari A2 di B:C kolom 2, lalu bungkus fungsi tersebut dengan IFERROR agar menampilkan angka 0 jika error.\''
    ),
    (
        'instruction:\n            "Tuliskan formula UNIQUE `=UNIQUE(A1:A50)`."',
        'instruction:\n            "Hasilkan daftar nilai yang unik saja (tanpa pengulangan) dari rentang sel A1 hingga A50."'
    ),
    (
        'instruction:\n            \'Tuliskan formula SPLIT `=SPLIT(A2, ",")`.\'',
        'instruction:\n            \'Pisahkan teks pada sel A2 ke dalam beberapa kolom berdasarkan karakter koma (,).\''
    ),
    (
        'instruction:\n            \'Tuliskan formula SUBSTITUTE `=SUBSTITUTE(A2, "-", "")`.\'',
        'instruction:\n            \'Gantikan setiap karakter strip (-) yang ada pada teks di sel A2 menjadi kosong (tanpa spasi/tidak ada karakter).\''
    ),
    (
        'instruction:\n            "Tuliskan formula PROPER `=PROPER(A2)`."',
        'instruction:\n            "Ubah format teks pada sel A2 menjadi berawalan huruf kapital pada setiap kata (Title Case)."'
    ),
    (
        'instruction:\n            "Tuliskan formula SPARKLINE `=SPARKLINE(A1:A12)`."',
        'instruction:\n            "Gambarkan grafik mini tunggal di dalam sel berdasarkan deretan nilai dari A1 hingga A12."'
    ),
    (
        'instruction:\n            "Tuliskan formula Gross Margin `=(C2 - D2) / C2`."',
        'instruction:\n            "Hitung rasio Gross Margin jika sel C2 adalah Pendapatan (Penjualan) dan sel D2 adalah Harga Pokok Penjualan (HPP)."'
    ),
    (
        'instruction:\n            \'Tuliskan fungsi COUNTIF resign `=COUNTIF(A1:A100, "Resign")`.\'',
        'instruction:\n            \'Hitung ada berapa banyak baris di rentang A1 hingga A100 yang memiliki teks persis "Resign".\''
    ),
    # Fixing all the "Tuliskan komentar ..." to actual logic questions.
    (
        'instruction:\n            "Tuliskan komentar `// Use fill handle to auto-complete date and number series`."',
        'instruction:\n            "Sel A1 berisi \'Senin\', A2 berisi \'Selasa\'. Bila kedua sel diblok dan titik di kanan bawah (fill handle) diseret sampai sel A3, tulisan apa yang akan muncul? Tulis nilainya saja (awal huruf besar)."'
    ),
    (
        'pattern: "//\\\\s*Use\\\\s+fill\\\\s+handle\\\\s+to\\\\s+auto-complete\\\\s+date\\\\s+and\\\\s+number\\\\s+series",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Use fill handle to auto-complete date and number series"',
        'pattern: "(Rabu|rabu)",\n              message: "Pola akan menghasilkan Rabu",\n            },\n          ],\n          solution: "Rabu"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Format numbers as Currency or Percentage for executive reports`."',
        'instruction:\n            "Jika sel memiliki angka 0.25 dan diformat sebagai Persentase (Percentage) tanpa desimal, apa yang tampil di layar? Tulis angkanya beserta simbol persentasenya."'
    ),
    (
        'pattern: "//\\\\s*Format\\\\s+numbers\\\\s+as\\\\s+Currency\\\\s+or\\\\s+Percentage\\\\s+for\\\\s+executive\\\\s+reports",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Format numbers as Currency or Percentage for executive reports"',
        'pattern: "25%",\n              message: "Tuliskan 25%",\n            },\n          ],\n          solution: "25%"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Apply Data Filters to isolate specific category records`."',
        'instruction:\n            "Apa sebutan fitur di Spreadsheet yang digunakan untuk menyembunyikan baris-baris sementara berdasarkan kriteria tertentu? Tulis 1 kata (bahasa Inggris)."'
    ),
    (
        'pattern: "//\\\\s*Apply\\\\s+Data\\\\s+Filters\\\\s+to\\\\s+isolate\\\\s+specific\\\\s+category\\\\s+records",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Apply Data Filters to isolate specific category records"',
        'pattern: "(?i)filter",\n              message: "Gunakan kata Filter",\n            },\n          ],\n          solution: "Filter"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Freeze header rows to keep context visible while scrolling`."',
        'instruction:\n            "Untuk membekukan baris pertama agar selalu muncul saat scroll ke bawah, nama fitur yang dipakai di Google Sheets adalah \'Freeze X\'. Apakah X itu? (Sebutkan 1 kata: Row, Column, atau Cell)."'
    ),
    (
        'pattern: "//\\\\s*Freeze\\\\s+header\\\\s+rows\\\\s+to\\\\s+keep\\\\s+context\\\\s+visible\\\\s+while\\\\s+scrolling",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Freeze header rows to keep context visible while scrolling"',
        'pattern: "(?i)row",\n              message: "Tulis Row",\n            },\n          ],\n          solution: "Row"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Clean data before running analysis and pivot tables`."',
        'instruction:\n            "Manakah langkah yang harus HAMPIR SELALU dilakukan SEBELUM membuat Pivot Table: (A) Bikin chart atau (B) Membersihkan data? Tulis A atau B saja."'
    ),
    (
        'pattern: "//\\\\s*Clean\\\\s+data\\\\s+before\\\\s+running\\\\s+analysis\\\\s+and\\\\s+pivot\\\\s+tables",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Clean data before running analysis and pivot tables"',
        'pattern: "(?i)B",\n              message: "Tulis B",\n            },\n          ],\n          solution: "B"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Apply Data Validation dropdowns to enforce input consistency`."',
        'instruction:\n            "Fitur apa yang bisa membuat tombol \'dropdown\' berisi daftar pilihan \'Lunas/Pending\' di dalam sel? (2 kata dalam bahasa Inggris, berawalan D dan V)."'
    ),
    (
        'pattern: "//\\\\s*Apply\\\\s+Data\\\\s+Validation\\\\s+dropdowns\\\\s+to\\\\s+enforce\\\\s+input\\\\s+consistency",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Apply Data Validation dropdowns to enforce input consistency"',
        'pattern: "(?i)data validation",\n              message: "Tulis Data Validation",\n            },\n          ],\n          solution: "Data Validation"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Verify Data Quality Checklist before running analysis`."',
        'instruction:\n            "Apakah spasi awal/akhir (trailing spaces) dan nilai duplikat dapat mengacaukan hasil perhitungan total penjualan? Tulis \\"Ya\\" atau \\"Tidak\\"."'
    ),
    (
        'pattern: "//\\\\s*Verify\\\\s+Data\\\\s+Quality\\\\s+Checklist\\\\s+before\\\\s+running\\\\s+analysis",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Verify Data Quality Checklist before running analysis"',
        'pattern: "(?i)(Ya|ya)",\n              message: "Tulis Ya",\n            },\n          ],\n          solution: "Ya"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Pivot table area: Rows, Columns, Values, Filters`."',
        'instruction:\n            "Jika kamu ingin menghitung total jumlah penjualan per kategori, area manakah dari Pivot Table tempat kamu menaruh field \'Kategori\'? (Pilih satu: Rows, Columns, Values, Filters)."'
    ),
    (
        'pattern: "//\\\\s*Pivot\\\\s+table\\\\s+area:\\\\s*Rows,\\\\s*Columns,\\\\s*Values,\\\\s*Filters",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Pivot table area: Rows, Columns, Values, Filters"',
        'pattern: "(?i)rows?",\n              message: "Tulis Rows",\n            },\n          ],\n          solution: "Rows"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Display Values As % of Grand Total for contribution analysis`."',
        'instruction:\n            "Untuk menampilkan kontribusi penjualan tiap wilayah dalam persentase, kamu mengubah \'Show Values As\' menjadi persentase dari apa? (Tulis 2 kata: Grand Total)."'
    ),
    (
        'pattern: "//\\\\s*Display\\\\s+Values\\\\s+As\\\\s+%\\\\s+of\\\\s+Grand\\\\s+Total\\\\s+for\\\\s+contribution\\\\s+analysis",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Display Values As % of Grand Total for contribution analysis"',
        'pattern: "(?i)grand total",\n              message: "Tulis Grand Total",\n            },\n          ],\n          solution: "Grand Total"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Group date fields by Month and Year in Pivot Table`."',
        'instruction:\n            "Fitur Pivot Table apa yang memungkinkan kamu menyatukan tanggal-tanggal transaksi harian menjadi satuan \'Bulan\' atau \'Tahun\'? (1 kata dalam bahasa Inggris)."'
    ),
    (
        'pattern: "//\\\\s*Group\\\\s+date\\\\s+fields\\\\s+by\\\\s+Month\\\\s+and\\\\s+Year\\\\s+in\\\\s+Pivot\\\\s+Table",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Group date fields by Month and Year in Pivot Table"',
        'pattern: "(?i)group(ing)?",\n              message: "Tulis Group",\n            },\n          ],\n          solution: "Group"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Use Calculated Fields for custom metrics like Profit = Sales - Cost`."',
        'instruction:\n            "Jika ingin membuat rumus \'Profit = Sales - Cost\' LANGSUNG di dalam Pivot Table tanpa menambah kolom baru di data sumber, fitur apa yang dipakai? (2 kata dalam bahasa Inggris, berawalan C dan F)."'
    ),
    (
        'pattern: "//\\\\s*Use\\\\s+Calculated\\\\s+Fields\\\\s+for\\\\s+custom\\\\s+metrics\\\\s+like\\\\s+Profit\\\\s+=\\\\s+Sales\\\\s+-\\\\s+Cost",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Use Calculated Fields for custom metrics like Profit = Sales - Cost"',
        'pattern: "(?i)calculated fields?",\n              message: "Tulis Calculated Field",\n            },\n          ],\n          solution: "Calculated Field"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Nest multiple fields in Rows for hierarchical drill-down`."',
        'instruction:\n            "Bila kamu menempatkan \'Wilayah\' lalu di bawahnya \'Salesman\' pada area Rows Pivot Table, simbol apa yang biasanya diklik untuk membuka rincian wilayah tersebut (drill down)? Tulis lambangnya saja (satu karakter)."'
    ),
    (
        'pattern: "//\\\\s*Nest\\\\s+multiple\\\\s+fields\\\\s+in\\\\s+Rows\\\\s+for\\\\s+hierarchical\\\\s+drill-down",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Nest multiple fields in Rows for hierarchical drill-down"',
        'pattern: "\\\\+",\n              message: "Tulis tanda +",\n            },\n          ],\n          solution: "+"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Insert Slicers to provide interactive visual filtering`."',
        'instruction:\n            "Tombol filter visual interaktif yang mengambang di atas dashboard Excel dinamakan apa? (1 kata, diawali huruf S)."'
    ),
    (
        'pattern: "//\\\\s*Insert\\\\s+Slicers\\\\s+to\\\\s+provide\\\\s+interactive\\\\s+visual\\\\s+filtering",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Insert Slicers to provide interactive visual filtering"',
        'pattern: "(?i)slicers?",\n              message: "Tulis Slicer",\n            },\n          ],\n          solution: "Slicer"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Format source data as Excel Table (Ctrl+T) for dynamic auto-refresh`."',
        'instruction:\n            "Apakah Pivot Table otomatis seketika menyesuaikan angkanya setiap kali kita mengganti satu angka kecil di lembar data mentahnya tanpa kita pencet apa-apa? Jawab \'Ya\' atau \'Tidak\'."'
    ),
    (
        'pattern: "//\\\\s*Format\\\\s+source\\\\s+data\\\\s+as\\\\s+Excel\\\\s+Table\\\\s+\\\\(Ctrl\\\\+T\\\\)\\\\s+for\\\\s+dynamic\\\\s+auto-refresh",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Format source data as Excel Table (Ctrl+T) for dynamic auto-refresh"',
        'pattern: "(?i)tidak",\n              message: "Tulis Tidak",\n            },\n          ],\n          solution: "Tidak"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Use Line Charts for time trends, Bar Charts for category comparison`."',
        'instruction:\n            "Grafik jenis apa yang PALING COCOK untuk melihat pergerakan/tren laba rugi dari bulan Januari sampai Desember secara bersambung? Tulis nama grafiknya (misal: Bar Chart, Line Chart, Pie Chart)."'
    ),
    (
        'pattern: "//\\\\s*Use\\\\s+Line\\\\s+Charts\\\\s+for\\\\s+time\\\\s+trends,\\\\s*Bar\\\\s+Charts\\\\s+for\\\\s+category\\\\s+comparison",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Use Line Charts for time trends, Bar Charts for category comparison"',
        'pattern: "(?i)line chart",\n              message: "Tulis Line Chart",\n            },\n          ],\n          solution: "Line Chart"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Remove gridlines and write action-oriented chart titles`."',
        'instruction:\n            "Menurut prinsip decluttering, apakah sebaiknya Gridlines (garis panduan tipis di latar) yang terlalu tebal dan banyak itu dibiarkan atau dihapus/disamarkan? (Tulis: Dihapus / Dibiarkan)."'
    ),
    (
        'pattern: "//\\\\s*Remove\\\\s+gridlines\\\\s+and\\\\s+write\\\\s+action-oriented\\\\s+chart\\\\s+titles",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Remove gridlines and write action-oriented chart titles"',
        'pattern: "(?i)dihapus",\n              message: "Tulis Dihapus",\n            },\n          ],\n          solution: "Dihapus"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Apply Conditional Formatting to highlight anomalies and targets`."',
        'instruction:\n            "Fitur apa yang dapat membuat latar belakang sel otomatis berubah menjadi merah ketika nilai penagihan kurang dari nol (rugi)? (2 kata dalam bahasa Inggris)."'
    ),
    (
        'pattern: "//\\\\s*Apply\\\\s+Conditional\\\\s+Formatting\\\\s+to\\\\s+highlight\\\\s+anomalies\\\\s+and\\\\s+targets",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Apply Conditional Formatting to highlight anomalies and targets"',
        'pattern: "(?i)conditional formatting",\n              message: "Tulis Conditional Formatting",\n            },\n          ],\n          solution: "Conditional Formatting"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Design single-screen dashboards with KPI cards at the top`."',
        'instruction:\n            "Pada penataan dashboard eksekutif, di manakah posisi terbaik untuk meletakkan angka-angka metrik utama (KPI Cards)? (Tulis: Di atas / Di bawah / Di samping)."'
    ),
    (
        'pattern: "//\\\\s*Design\\\\s+single-screen\\\\s+dashboards\\\\s+with\\\\s+KPI\\\\s+cards\\\\s+at\\\\s+the\\\\s+top",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Design single-screen dashboards with KPI cards at the top"',
        'pattern: "(?i)di atas",\n              message: "Tulis Di atas",\n            },\n          ],\n          solution: "Di atas"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Use neutral colors for base data and accent colors for focal points`."',
        'instruction:\n            "Dalam membuat chart profesional, apa yang sebaiknya kita gunakan untuk baris data pembanding biasa agar satu elemen fokal utama (warna merah) bisa terlihat mencolok? (Tulis satu jenis warna yang disarankan: Biru terang / Abu-abu pudar)."'
    ),
    (
        'pattern: "//\\\\s*Use\\\\s+neutral\\\\s+colors\\\\s+for\\\\s+base\\\\s+data\\\\s+and\\\\s+accent\\\\s+colors\\\\s+for\\\\s+focal\\\\s+points",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Use neutral colors for base data and accent colors for focal points"',
        'pattern: "(?i)abu(-| )?abu",\n              message: "Gunakan Abu-abu pudar",\n            },\n          ],\n          solution: "Abu-abu pudar"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Pipeline: Raw Data -> Cleaning -> Pivot -> Dashboard`."',
        'instruction:\n            "Dalam siklus analisis data, tahapan mana yang biasanya menghabiskan 80% waktu seorang analis? (Tulis: Pivot / Cleaning / Visualisasi)."'
    ),
    (
        'pattern: "//\\\\s*Pipeline:\\\\s*Raw\\\\s+Data\\\\s+->\\\\s*Cleaning\\\\s+->\\\\s*Pivot\\\\s+->\\\\s*Dashboard",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Pipeline: Raw Data -> Cleaning -> Pivot -> Dashboard"',
        'pattern: "(?i)cleaning",\n              message: "Tulis Cleaning",\n            },\n          ],\n          solution: "Cleaning"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Executive Summary: Key Finding -> Root Cause -> Actionable Recommendation`."',
        'instruction:\n            "Bagian paling krusial yang wajib dibaca oleh manajemen (sering ditaruh paling depan/atas dokumen) berisi temuan, penyebab, dan usulan solusi disebut apa? (2 kata dalam bahasa Inggris, berawalan E dan S)."'
    ),
    (
        'pattern: "//\\\\s*Executive\\\\s+Summary:\\\\s*Key\\\\s+Finding\\\\s+->\\\\s*Root\\\\s+Cause\\\\s+->\\\\s*Actionable\\\\s+Recommendation",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Executive Summary: Key Finding -> Root Cause -> Actionable Recommendation"',
        'pattern: "(?i)executive summary",\n              message: "Tulis Executive Summary",\n            },\n          ],\n          solution: "Executive Summary"'
    ),
    (
        'instruction:\n            "Tuliskan komentar `// Protect formula cells before sharing workbook with team members`."',
        'instruction:\n            "Untuk mencegah teman satu tim yang gaptek secara tak sengaja menghapus formula pentingmu, apa yang harus kamu lakukan pada lembar kerjamu? (Tulis 2 kata: Protect Sheet)."'
    ),
    (
        'pattern: "//\\\\s*Protect\\\\s+formula\\\\s+cells\\\\s+before\\\\s+sharing\\\\s+workbook\\\\s+with\\\\s+team\\\\s+members",\n              message: "Tuliskan komentar yang diminta",\n            },\n          ],\n          solution: "// Protect formula cells before sharing workbook with team members"',
        'pattern: "(?i)protect sheet",\n              message: "Tulis Protect Sheet",\n            },\n          ],\n          solution: "Protect Sheet"'
    ),
]

for r in replacements:
    content = content.replace(r[0], r[1])


# Now let\'s add questions to quizzes
q_add1 = """              explanation: "Simbol Dolar ($) mengunci referensi kolom dan baris agar tidak bergeser saat formula di-copy ke sel lain.",
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
            },"""
content = re.sub(r'explanation: "Simbol Dolar \(\$\)[^"]*",\s*\},', q_add1, content)

q_add2 = """              explanation: "XLOOKUP adalah pengganti modern VLOOKUP yang lebih fleksibel, cepat, dan tangguh.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Fungsi apa yang dapat membungkus rumus lain agar mencegah error #N/A muncul di layar, lalu menampilkannya sebagai teks alternatif?",
              choices: ["IFERROR", "ERRORIF", "NATCHECK", "IFNA"],
              answerIndex: 0,
              explanation: "IFERROR berguna untuk menjebak error apa saja, lalu menggantinya dengan nilai kosong (\"\") atau fallback yang kita inginkan.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Jika ingin menghitung JUMLAH BARIS dari pegawai berstatus 'Lulus', kamu harus menggunakan fungsi...",
              choices: ["COUNTIF", "SUMIF", "AVERAGEIF", "COUNT"],
              answerIndex: 0,
              explanation: "COUNTIF bertugas menghitung BANYAKNYA kemunculan sel, sedangkan SUMIF menghitung TOTAL nilainya.",
            },"""
content = re.sub(r'explanation: "XLOOKUP adalah pengganti modern VLOOKUP[^"]*",\s*\},', q_add2, content)


q_add3 = """              explanation: "Fungsi PROPER mengubah karakter pertama setiap kata menjadi huruf besar dan huruf sisanya menjadi kecil.",
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
            },"""
content = re.sub(r'explanation: "Fungsi PROPER mengubah karakter pertama[^"]*",\s*\},', q_add3, content)

q_add4 = """              explanation: "Slicer adalah tombol filter visual interaktif yang memudahkan penyaringan data di Pivot Table dan Dashboard.",
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
            },"""
content = re.sub(r'explanation: "Slicer adalah tombol filter visual[^"]*",\s*\},', q_add4, content)


q_add5 = """              explanation: "Line Chart (Grafik Garis) adalah pilihan paling tepat untuk menggambarkan tren kontinuitas data seiring berjalannya waktu.",
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
            },"""
content = re.sub(r'explanation: "Line Chart \(Grafik Garis\) adalah pilihan[^"]*",\s*\},', q_add5, content)


q_add6 = """              explanation: "Angka analisis baru memberikan nilai bisnis nyata ketika disertai Executive Summary dan Rekomendasi Aksi yang jelas.",
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
            },"""
content = re.sub(r'explanation: "Angka analisis baru memberikan nilai bisnis[^"]*",\s*\},', q_add6, content)

with open('src/data/tracks/spreadsheet.ts', 'w', encoding='utf-8') as f:
    f.write(content)
