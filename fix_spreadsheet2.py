import re

with open('src/data/tracks/spreadsheet.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix (?i) in patterns by replacing it with a case-insensitive alternative
# For simplicity, just remove (?i) and use the exact solution in the pattern, since the tests just test regex.
# Actually, I can just use `[a-zA-Z]` forms but let's just use exact match or (A|a) forms.
# Since it's easier, let's just remove (?i) and replace the pattern with the exact string.
content = content.replace('(?i)filter', '(Filter|filter)')
content = content.replace('(?i)row', '(Row|row)')
content = content.replace('(?i)B', '(B|b)')
content = content.replace('(?i)data validation', '(Data Validation|data validation)')
content = content.replace('(?i)(Ya|ya)', '(Ya|ya)')
content = content.replace('(?i)rows?', '(Rows|rows|Row|row)')
content = content.replace('(?i)grand total', '(Grand Total|grand total|Grand total)')
content = content.replace('(?i)group(ing)?', '(Group|group|Grouping|grouping)')
content = content.replace('(?i)calculated fields?', '(Calculated Field|calculated field|Calculated Fields)')
content = content.replace('(?i)slicers?', '(Slicer|slicer|Slicers)')
content = content.replace('(?i)tidak', '(Tidak|tidak)')
content = content.replace('(?i)line chart', '(Line Chart|line chart|Line chart)')
content = content.replace('(?i)dihapus', '(Dihapus|dihapus)')
content = content.replace('(?i)conditional formatting', '(Conditional Formatting|conditional formatting)')
content = content.replace('(?i)di atas', '(Di atas|di atas|Di Atas)')
content = content.replace('(?i)abu(-| )?abu', '(Abu-abu|abu-abu|Abu abu|abu abu)')
content = content.replace('(?i)cleaning', '(Cleaning|cleaning)')
content = content.replace('(?i)executive summary', '(Executive Summary|executive summary)')
content = content.replace('(?i)protect sheet', '(Protect Sheet|protect sheet)')

# Fix "instruksi memuat jawaban utuh" (the solution string is literally in the instruction)
content = content.replace(
    'Jika sel B2 lebih besar dari 1000, berikan status "Bonus", jika tidak berikan status "Standar". Susun fungsi IF yang sesuai.',
    'Bandingkan nilai di sel sebelah (B2). Bila melebih angka seribu, nyatakan sebagai Bonus. Sebaliknya, nyatakan Standar. Susun fungsi logika untuk kondisi ini.'
)
content = content.replace(
    'Tuliskan formula IF `=IF(B2>1000, "Bonus", "Standar")`.',
    'Bandingkan nilai di sel sebelah (B2). Bila melebihi angka seribu, nyatakan sebagai Bonus. Sebaliknya, nyatakan Standar. Susun fungsi logika untuk kondisi ini.'
)

content = content.replace(
    "Untuk menampilkan kontribusi penjualan tiap wilayah dalam persentase, kamu mengubah 'Show Values As' menjadi persentase dari apa? (Tulis 2 kata: Grand Total).",
    "Untuk menampilkan kontribusi persentase, opsi 'Show Values As' diubah menjadi % of ... (tuliskan dua kata bahasa Inggris tambahannya)."
)

content = content.replace(
    "Grafik jenis apa yang PALING COCOK untuk melihat pergerakan/tren laba rugi dari bulan Januari sampai Desember secara bersambung? Tulis nama grafiknya (misal: Bar Chart, Line Chart, Pie Chart).",
    "Grafik jenis apa yang PALING COCOK untuk melihat pergerakan atau tren nilai dari waktu ke waktu? (Misalnya grafik berupa garis yang bersambung)."
)

content = content.replace(
    "Menurut prinsip decluttering, apakah sebaiknya Gridlines (garis panduan tipis di latar) yang terlalu tebal dan banyak itu dibiarkan atau dihapus/disamarkan? (Tulis: Dihapus / Dibiarkan).",
    "Menurut prinsip visualisasi data yang bersih, apakah garis-garis grid (gridlines) sebaiknya dibiarkan atau dihilangkan?"
)
content = content.replace('solution: "Dihapus"', 'solution: "dihilangkan"')
content = content.replace('pattern: "(Dihapus|dihapus)"', 'pattern: "(Dihilangkan|dihilangkan|hilangkan)"')

content = content.replace(
    "Pada penataan dashboard eksekutif, di manakah posisi terbaik untuk meletakkan angka-angka metrik utama (KPI Cards)? (Tulis: Di atas / Di bawah / Di samping).",
    "Pada layar dashboard untuk eksekutif, di bagian manakah sebaiknya angka metrik utama diletakkan agar langsung terlihat?"
)
content = content.replace('solution: "Di atas"', 'solution: "Atas"')
content = content.replace('pattern: "(Di atas|di atas|Di Atas)"', 'pattern: "(Atas|atas)"')


content = content.replace(
    "Dalam membuat chart profesional, apa yang sebaiknya kita gunakan untuk baris data pembanding biasa agar satu elemen fokal utama (warna merah) bisa terlihat mencolok? (Tulis satu jenis warna yang disarankan: Biru terang / Abu-abu pudar).",
    "Warna apa yang paling aman dipakai sebagai warna dasar diagram agar satu titik fokus bisa disorot secara kontras?"
)
content = content.replace('solution: "Abu-abu pudar"', 'solution: "Abu-abu"')
content = content.replace('pattern: "(Abu-abu|abu-abu|Abu abu|abu abu) pudar"', 'pattern: "(Abu-abu|abu-abu|Abu abu|abu abu)"')


content = content.replace(
    "Dalam siklus analisis data, tahapan mana yang biasanya menghabiskan 80% waktu seorang analis? (Tulis: Pivot / Cleaning / Visualisasi).",
    "Proses apa yang bertujuan merapikan data kotor dan memakan porsi waktu paling besar dari seorang data analyst?"
)


content = content.replace(
    "Untuk mencegah teman satu tim yang gaptek secara tak sengaja menghapus formula pentingmu, apa yang harus kamu lakukan pada lembar kerjamu? (Tulis 2 kata: Protect Sheet).",
    "Fitur apa yang bisa mengunci rentang sel di Excel agar tidak bisa diedit oleh orang lain?"
)

with open('src/data/tracks/spreadsheet.ts', 'w', encoding='utf-8') as f:
    f.write(content)

