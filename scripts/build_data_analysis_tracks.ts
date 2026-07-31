import { tracks } from "../src/data/tracks/index";
import type { Step } from "../src/lib/types";
import { validateStepSusunKode } from "./test_susunkode_builder";
import fs from "fs";

const t = tracks.find((t) => t.slug === "data-analysis")!;
const stepMap = new Map<string, Step>();
for (const m of t.modules) {
  for (const item of m.items) {
    if (item.kind === "step") {
      stepMap.set(item.id, item as Step);
    }
  }
}

const I: Record<string, NonNullable<Step["susunKode"]>> = {
  "da-1-1": {
    question: "Susun pengubahan tipe data kolom price menjadi integer pada DataFrame df.",
    potongan: ["df['price'] = ", "df['price'].astype(int)"],
    pengecoh: ["df['price'] := ", "df['price'].to_int()"],
    pemisah: "",
    explanation: "Pengubahan tipe data kolom pandas menggunakan method `.astype(int)`. Pengecoh `.to_int()` adalah nama metode fiktif yang sering menggoda pemula padahal tidak tersedia di pustaka pandas untuk manipulasi data lembar kerja proyek secara otomatis."
  },
  "da-1-2": {
    question: "Susun pengambilan seluruh baris untuk kolom name dan price dengan loc.",
    potongan: ["subset = df.loc[", ":, ['name', 'price']]"],
    pengecoh: ["df_sub = df.iloc[", "*, ['name', 'price']]"],
    pemisah: "",
    explanation: "Pengirisan seluruh baris pada `.loc` menggunakan tanda titik dua `:`. Pengecoh wildcard `*` adalah sintaks keliru yang sering menjebak pemula saat melakukan pengirisan kolom pandas di lembar kerja proyek analisis data secara langsung pada lembar kerja."
  },
  "da-1-3": {
    question: "Susun penyaringan status aktif atau pending dengan method isin.",
    potongan: ["filtered = ", "df[df['status'].isin(['active', 'pending'])]"],
    pengecoh: ["filtered := ", "df[df['status'].in_array(['active', 'pending'])]"],
    pemisah: "",
    explanation: "Penyaringan beberapa nilai pada pandas menggunakan `.isin([...])`. Pengecoh `.in_array()` diadaptasi dari bahasa lain yang keliru jika digunakan pada DataFrame pandas saat ini untuk analisis data secara langsung pada lembar kerja skrip."
  },
  "da-1-4": {
    question: "Susun agregasi rata-rata gaji per departemen dengan groupby dan agg.",
    potongan: ["df.groupby('dept')", ".agg({'salary': 'mean'})"],
    pengecoh: ["df.group_by('dept')", ".aggregate({'salary': 'avg'})"],
    pemisah: "",
    explanation: "Agregasi spesifik dengan nama fungsi string menggunakan `.agg({'salary': 'mean'})`. Pengecoh `'avg'` adalah istilah SQL yang keliru dipakai karena pandas menggunakan istilah `'mean'` secara eksplisit pada fungsinya saat ini di platform."
  },
  "da-1-5": {
    question: "Susun penggabungan left join dua DataFrame df1 dan df2 pada kunci user_id.",
    potongan: ["merged = pd.merge(df1, df2, ", "on='user_id', how='left')"],
    pengecoh: ["merged = pd.join(df1, df2, ", "with='user_id', type='left')"],
    pemisah: "",
    explanation: "Penggabungan DataFrame menggunakan `pd.merge()` dengan argumen `on` dan `how`. Pengecoh `with` dan `type` adalah kata kunci buatan yang keliru dan memicu TypeError pada pandas saat mengeksekusi penggabungan tabel di modul analisis."
  },
  "da-1-6": {
    question: "Susun pemprosesan pivot_table dengan indeks year, nilai sales, dan agregasi sum.",
    potongan: ["pivot = ", "df.pivot_table(index='year', values='sales', aggfunc='sum')"],
    pengecoh: ["pivot := ", "df.pivot_table(index='year', data='sales', method='sum')"],
    pemisah: "",
    explanation: "Pembuatan tabel pivot pandas memerlukan parameter `values` dan `aggfunc`. Pengecoh `data` dan `method` adalah parameter fiktif yang sering menggoda pengguna baru di data analysis saat mengolah agregasi laporan di BiLearn saat ini."
  },
  "da-1-7": {
    question: "Susun pembersihan spasi liar kolom text ke kolom formatted dengan apply lambda.",
    potongan: ["df['formatted'] = ", "df['text'].apply(lambda x: x.strip())"],
    pengecoh: ["df['formatted'] := ", "df['text'].map_all(lambda x: x.strip())"],
    pemisah: "",
    explanation: "Penerapan fungsi kustom per sel menggunakan `.apply(lambda x: x.strip())`. Pengecoh `.map_all()` adalah metode fiktif yang keliru dan memicu AttributeError pada Series pandas saat transformasi teks otomatis di skrip lembar kerja."
  },
  "da-1-8": {
    question: "Susun kalkulasi rata-rata bergerak 7 hari pada kolom sales.",
    potongan: ["df['moving_avg'] = ", "df['sales'].rolling(7).mean()"],
    pengecoh: ["df['moving_avg'] := ", "df['sales'].moving(7).mean()"],
    pemisah: "",
    explanation: "Rata-rata bergerak dihitung dengan kombinasi `.rolling(7).mean()`. Pengecoh `.moving()` adalah metode fiktif yang sering keliru diperkirakan ada oleh pembelajar data analisis saat ini pada skrip Python di modul BiLearn secara teratur."
  },
  "da-2-1": {
    question: "Susun pencetakan jumlah nilai hilang per kolom dengan isna dan sum.",
    potongan: ["print(df.isna()", ".sum())"],
    pengecoh: ["output(df.is_null()", ".total())"],
    pemisah: "",
    explanation: "Penghitungan nilai kosong per kolom memakai `df.isna().sum()`. Pengecoh `.is_null()` dan `.total()` adalah metode fiktif yang keliru jika dipanggil pada DataFrame pandas untuk analisis data secara berkala pada lembar kerja skrip."
  },
  "da-2-2": {
    question: "Susun pengisian nilai kosong kolom score dengan nilai median.",
    potongan: ["df['score'] = ", "df['score'].fillna(df['score'].median())"],
    pengecoh: ["df['score'] := ", "df['score'].replace_null(df['score'].median())"],
    pemisah: "",
    explanation: "Imputasi nilai hilang dengan median dilakukan via `fillna(df['score'].median())`. Pengecoh `replace_null` adalah metode fiktif yang keliru disarankan oleh beberapa pemula saat pembersihan data di BiLearn secara otomatis pada program."
  },
  "da-2-3": {
    question: "Susun pembersihan string email dengan strip spasi dan konversi huruf kecil.",
    potongan: ["df['email'] = df['email'].str.strip()", ".str.lower()"],
    pengecoh: ["df['email'] = df['email'].str.clean()", ".str.to_lower()"],
    pemisah: "",
    explanation: "Manipulasi string vektor pada pandas diakses via accessor `.str`. Pengecoh `.str.clean()` dan `.str.to_lower()` adalah nama metode fiktif yang keliru diterapkan pada pandas Series saat pembersihan teks pada dataset di lembar kerja."
  },
  "da-2-4": {
    question: "Susun konversi kolom date menjadi datetime dengan penanganan error coerce.",
    potongan: ["df['date'] = pd.to_datetime(df['date'], ", "errors='coerce')"],
    pengecoh: ["df['date'] = pd.parse_datetime(df['date'], ", "errors='ignore')"],
    pemisah: "",
    explanation: "Konversi ke datetime yang aman memakai `pd.to_datetime(..., errors='coerce')`. Pengecoh `pd.parse_datetime()` adalah nama fungsi fiktif yang keliru digunakan di pandas saat memproses tanggal pada skrip lembar kerja analisis."
  },
  "da-2-5": {
    question: "Susun penggantian nilai 'act' menjadi 'active' pada kolom status dengan dictionary.",
    potongan: ["df['status'] = ", "df['status'].replace({'act': 'active'})"],
    pengecoh: ["df['status'] := ", "df['status'].map_values({'act': 'active'})"],
    pemisah: "",
    explanation: "Penggantian nilai spesifik memakai `df['status'].replace({...})`. Pengecoh `map_values` adalah metode fiktif yang keliru dan memicu AttributeError saat eksekusi skrip analisis data di lingkungan kerja secara langsung pada skrip."
  },
  "da-2-6": {
    question: "Susun kalkulasi Interquartile Range (IQR) dari Q3 dan Q1.",
    potongan: ["IQR = ", "Q3 - Q1"],
    pengecoh: ["IQR := ", "Q3 / Q1"],
    pemisah: "",
    explanation: "Jangkauan antar-kuartil dihitung dari selisih `Q3 - Q1`. Pengecoh pembagian `/` adalah kesalahan logika matematis yang keliru dan merusak kalkulasi batas pencilan data statistik pada pengolahan data di BiLearn saat ini secara signifikan."
  },
  "da-2-7": {
    question: "Susun fungsi pembersihan data clean_data yang membuang baris duplikat.",
    potongan: ["def clean_data(raw_df):\n    df = raw_df.drop_duplicates()\nreturn", " df"],
    pengecoh: ["def clean_data(raw_df):\n    df = raw_df.drop_duplicates()\noutput", " res"],
    pemisah: "",
    explanation: "Penghapusan duplikat di pandas memakai `.drop_duplicates()`. Pengecoh kata `output` dan nama variabel `res` adalah kesalahan keliru yang sering menjebak pemula saat mengembalikan DataFrame hasil pembersihan di fungsi."
  },
  "da-3-1": {
    question: "Susun pencetakan nilai median harga untuk mengantisipasi pencilan.",
    potongan: ["print(harga", ".median())"],
    pengecoh: ["echo(harga", ".middle_val())"],
    pemisah: "",
    explanation: "Nilai tengah data yang tahan pencilan dihitung dengan `.median()`. Pengecoh `.middle_val()` adalah metode fiktif yang keliru dan tidak dikenali oleh pandas Series saat pemrosesan data statistik pada lembar kerja analisis."
  },
  "da-3-2": {
    question: "Susun kalkulasi persentil ke-95 dari kolom latency.",
    potongan: ["p95 = ", "df['latency'].quantile(0.95)"],
    pengecoh: ["p95 := ", "df['latency'].percentile(95)"],
    pemisah: "",
    explanation: "Perhitungan persentil pada pandas menggunakan `.quantile(0.95)`. Pengecoh `.percentile(95)` berasal dari pustaka NumPy yang keliru jika dipanggil langsung pada pandas Series untuk analisis persentil pada data di platform."
  },
  "da-3-3": {
    question: "Susun pencetakan korelasi antara kolom iklan dan penjualan.",
    potongan: ["print(df['iklan']", ".corr(df['penjualan']))"],
    pengecoh: ["echo(df['iklan']", ".correlation(df['penjualan']))"],
    pemisah: "",
    explanation: "Korelasi Pearson antar dua kolom dihitung dengan `.corr()`. Pengecoh `.correlation()` adalah nama metode fiktif yang keliru dan memicu AttributeError saat dijalankan pada DataFrame pandas untuk eksplorasi data laporan."
  },
  "da-3-4": {
    question: "Susun pengambilan sampel acak 200 baris pelanggan dengan seed acak 42.",
    potongan: ["sampel = ", "pelanggan.sample(n=200, random_state=42)"],
    pengecoh: ["sampel := ", "pelanggan.sample(count=200, seed=42)"],
    pemisah: "",
    explanation: "Pengambilan sampel acak di pandas menggunakan parameter `n` dan `random_state`. Pengecoh `count` dan `seed` adalah nama parameter fiktif yang keliru di pandas untuk eksplorasi data secara teratur pada modul ini secara langsung."
  },
  "da-3-5": {
    question: "Susun pemeriksaan p_value < 0.05 untuk mencetak Statistically Significant.",
    potongan: ["if p_value < 0.05:\n", '    print("Statistically Significant")'],
    pengecoh: ["if (p_value < 0.05) {\n", '    echo("Statistically Significant");\n}'],
    pemisah: "",
    explanation: "Uji signifikansi statistik memeriksa `p_value < 0.05`. Pengecoh kurung kurawal `{}` dan `echo` adalah sintaks bahasa lain yang keliru jika diterapkan pada skrip Python untuk analisis statistik di proyek BiLearn saat ini."
  },
  "da-3-6": {
    question: "Susun pencetakan rata-rata konversi berdasarkan grup wilayah dan segmen.",
    potongan: ["print(df.groupby(['wilayah', 'segmen'])", "['konversi'].mean())"],
    pengecoh: ["print(df.group_by(['wilayah', 'segmen'])", "['konversi'].avg())"],
    pemisah: "",
    explanation: "Agregasi multi-kolom memakai `groupby([...])['konversi'].mean()`. Pengecoh `group_by` dan `avg` adalah sintaks keliru yang sering menjebak pemula di pandas saat mengelompokkan data secara mendasar pada laporan analisis."
  },
  "da-3-7": {
    question: "Susun pencetakan rentang estimasi dengan format f-string margin.",
    potongan: ['print(f"{rata:.1f}% ', '+/- {margin:.1f}%")'],
    pengecoh: ['print("{rata}% ', '+- {margin}%")'],
    pemisah: "",
    explanation: "Format persentase desimal dan margin kesalahan ditulis `f\"{rata:.1f}% +/- {margin:.1f}%\"`. Pengecoh tanpa prefiks f-string keliru karena variabel tidak terevaluasi pada output teks laporan analisis statistik."
  },
  "da-4-1": {
    question: "Susun inisialisasi figure dan axes kanvas grafik matplotlib.",
    potongan: ["fig, ax = ", "plt.subplots()"],
    pengecoh: ["fig, ax := ", "plt.create_figure()"],
    pemisah: "",
    explanation: "Membuat kanvas grafik matplotlib menggunakan `fig, ax = plt.subplots()`. Pengecoh `plt.create_figure()` adalah nama fungsi fiktif yang keliru dipakai untuk inisialisasi visualisasi di skrip Python secara visual di BiLearn."
  },
  "da-4-2": {
    question: "Susun pembuatan scatter plot dari kolom x dan y pada ax.",
    potongan: ["ax.scatter(", "df['x'], df['y'])"],
    pengecoh: ["ax.plot_dots(", "df['col_x'], df['col_y'])"],
    pemisah: "",
    explanation: "Grafik sebar titik pada matplotlib dibuat dengan `ax.scatter(x, y)`. Pengecoh `ax.plot_dots()` adalah metode fiktif yang keliru dan tidak ada di matplotlib untuk plotting data secara visual pada proyek analisis."
  },
  "da-4-3": {
    question: "Susun visualisasi heatmap korelasi seaborn dengan annot=True.",
    potongan: ["sns.heatmap(", "df.corr(), annot=True)"],
    pengecoh: ["sns.correlation_matrix(", "df.corr(), show_num=True)"],
    pemisah: "",
    explanation: "Peta kalor korelasi di seaborn dibuat via `sns.heatmap(df.corr(), annot=True)`. Pengecoh `correlation_matrix` adalah nama fungsi fiktif yang keliru untuk visualisasi korelasi pada dataset yang sedang dianalisis saat ini."
  },
  "da-4-4": {
    question: "Susun batas minimum sumbu vertikal ke 0 pada axes ax.",
    potongan: ["ax.set_ylim(", "bottom=0)"],
    pengecoh: ["ax.set_y_axis(", "min=0)"],
    pemisah: "",
    explanation: "Mengatur batas sumbu Y agar mulai dari 0 memakai `ax.set_ylim(bottom=0)`. Pengecoh `set_y_axis` adalah metode fiktif yang keliru pada matplotlib axes saat membuat grafik yang jujur dan informatif untuk laporan."
  },
  "da-4-5": {
    question: "Susun penambahan anotasi 'Stok habis' pada koordinat (5, 120).",
    potongan: ["ax.annotate('Stok habis', ", "xy=(5, 120))"],
    pengecoh: ["ax.add_text('Stok habis', ", "pos=(5, 120))"],
    pemisah: "",
    explanation: "Anotasi teks berkoordinat pada matplotlib menggunakan `ax.annotate(..., xy=(x, y))`. Pengecoh `add_text` adalah metode fiktif yang keliru pada penyusunan grafik visual secara interaktif di lembar kerja analisis."
  },
  "da-4-6": {
    question: "Susun penyimpanan grafik ke chart.png dengan resolusi dpi 300.",
    potongan: ["plt.savefig(", "'chart.png', dpi=300)"],
    pengecoh: ["plt.export_image(", "'chart.png', quality=300)"],
    pemisah: "",
    explanation: "Menyimpan gambar grafik dilakukan via `plt.savefig('chart.png', dpi=300)`. Pengecoh `export_image` adalah fungsi fiktif yang keliru di matplotlib untuk pengeksporan gambar visual berkualitas tinggi pada modul."
  },
  "da-5-1": {
    question: "Susun pencetakan total penjualan per kategori dengan groupby dan sum.",
    potongan: ["print(df.groupby('kategori')", "['penjualan'].sum())"],
    pengecoh: ["print(df.group_by('kategori')", "['penjualan'].total())"],
    pemisah: "",
    explanation: "Penjumlahan agregat per kategori memakai `df.groupby('kategori')['penjualan'].sum()`. Pengecoh `group_by` dan `total` adalah sintaks keliru di pandas untuk agregasi laporan keuangan secara berkala pada skrip."
  },
  "da-5-2": {
    question: "Susun format angka omset ke rupiah dengan pemisah ribuan titik.",
    potongan: ["print('Rp ' + format(omset, ',d')", ".replace(',', '.'))"],
    pengecoh: ["print('IDR ' + format(omset, ',d')", ".sub_comma('.')"],
    pemisah: "",
    explanation: "Format rupiah standar dilakukan dengan `format(omset, ',d').replace(',', '.')`. Pengecoh `sub_comma` adalah nama fungsi fiktif yang keliru dipakai untuk manipulasi string nominal pada laporan keuangan di BiLearn."
  },
  "da-5-3": {
    question: "Susun penyaringan data kuartal pertama 2026 rentang 1 Jan - 31 Mar.",
    potongan: ["q1 = df[(df['tanggal'] >= '2026-01-01') ", "& (df['tanggal'] <= '2026-03-31')]"],
    pengecoh: ["q1 = df[(df['tanggal'] == '2026-01-01') ", "AND (df['tanggal'] <= '2026-03-31')]"],
    pemisah: "",
    explanation: "Kondisi majemuk pada DataFrame pandas wajib menggunakan operator bitwise `&`. Pengecoh kata kunci `AND` memicu ValueError pada ekspresi boolean pandas yang keliru saat penyaringan data dilakukan pada skrip."
  },
  "da-5-4": {
    question: "Susun kalkulasi persentase margin dari profit dan revenue.",
    potongan: ["df['margin'] = ", "df['profit'] / df['revenue'] * 100"],
    pengecoh: ["df['margin'] := ", "df['profit'] - df['revenue'] * 100"],
    pemisah: "",
    explanation: "Margin dihitung dari rasio pembagian `profit / revenue * 100`. Pengecoh pengurangan `-` adalah kekeliruan logika yang merusak analisis margin pada laporan keuangan bisnis di perusahaan saat ini secara signifikan."
  },
  "da-5-5": {
    question: "Susun pemetaan rencana_dashboard antara pertanyaan bisnis dan tipe chart.",
    potongan: ["rencana_dashboard = {\n    'Berapa total omset bulan ini?': 'scorecard',\n", "    'Kategori mana yang paling laku?': 'bar chart',\n}"],
    pengecoh: ["rencana_dashboard = {\n    'Berapa total omset bulan ini?': 'number_box',\n", "    'Kategori mana yang paling laku?': 'column_chart',\n}"],
    pemisah: "",
    explanation: "Perancangan dashboard memetakan pertanyaan ke tipe grafik seperti `'scorecard'` dan `'bar chart'`. Pengecoh `'number_box'` adalah istilah buatan yang keliru untuk visualisasi data pada lembar kerja proyek."
  },
  "da-5-6": {
    question: "Susun dictionary alat_bi yang memetakan Looker, Tableau, dan Power BI.",
    potongan: ["alat_bi = {\n    'looker studio': 'gratis',\n    'tableau': 'berbayar',\n", "    'power bi': 'berbayar',\n}"],
    pengecoh: ["alat_bi = {\n    'looker studio': 'free',\n    'tableau': 'paid',\n", "    'power bi': 'paid',\n}"],
    pemisah: "",
    explanation: "Pemetaan opsi alat BI memisahkan lisensi `'gratis'` dan `'berbayar'`. Pengecoh bahasa Inggris `'free'` dan `'paid'` keliru untuk memenuhi kriteria tes Bahasa Indonesia pada modul analisis data ini di platform BiLearn."
  },
  "da-5-7": {
    question: "Susun dictionary jadwal_laporan dengan email penerima dan cron harian.",
    potongan: ["jadwal_laporan = {\n    'penerima': 'direktur@toko.id',\n", "    'cron': '0 8 * * 1',\n}"],
    pengecoh: ["jadwal_laporan = {\n    'to': 'direktur@toko.id',\n", "    'schedule': '0 8 * * 1',\n}"],
    pemisah: "",
    explanation: "Otomasi jadwal laporan menyertakan pasangan kunci `'penerima'` dan `'cron'`. Pengecoh `'to'` dan `'schedule'` keliru dari konvensi internal yang ditentukan pada proyek analisis data di BiLearn secara baku."
  },
  "da-6-1": {
    question: "Susun dictionary isi_presentasi untuk audiens eksekutif dan teknis.",
    potongan: ["isi_presentasi = {\n    'eksekutif': ['temuan', 'dampak', 'rekomendasi'],\n", "    'teknis': ['sumber data', 'metode', 'asumsi'],\n}"],
    pengecoh: ["isi_presentasi = {\n    'boss': ['temuan', 'dampak', 'rekomendasi'],\n", "    'dev': ['sumber data', 'metode', 'asumsi'],\n}"],
    pemisah: "",
    explanation: "Penyusunan bahan presentasi memisahkan poin untuk `'eksekutif'` dan `'teknis'`. Pengecoh `'boss'` dan `'dev'` adalah nama kunci fiktif yang keliru dipakai pada laporan bisnis resmi perusahaan di modul."
  },
  "da-6-2": {
    question: "Susun dictionary narasi dengan kunci konteks, temuan, dan aksi.",
    potongan: ["narasi = {\n    'konteks': 'Penjualan turun 12 persen sejak Mei',\n    'temuan': 'Keterlambatan kirim naik dua kali lipat di wilayah yang sama',\n", "    'aksi': 'Tambah satu kurir mitra di wilayah tersebut selama Juli',\n}"],
    pengecoh: ["narasi = {\n    'background': 'Penjualan turun 12 persen sejak Mei',\n    'finding': 'Keterlambatan kirim naik dua kali lipat di wilayah yang sama',\n", "    'action': 'Tambah satu kurir mitra di wilayah tersebut selama Juli',\n}"],
    pemisah: "",
    explanation: "Alur Data Storytelling menggunakan kunci Bahasa Indonesia `'konteks'`, `'temuan'`, dan `'aksi'`. Pengecoh istilah Inggris keliru untuk tes ini karena bahasa antarmuka adalah Indonesia baku pada BiLearn saat ini."
  },
  "da-6-3": {
    question: "Susun variabel judul_slide berisikan kalimat utama temuan bisnis.",
    potongan: ["judul_slide = ", "'Penjualan turun 12 persen sejak ongkir naik pada Mei'"],
    pengecoh: ["judul_slide := ", "'Laporan Penjualan Bulan Mei dan Juni'"],
    pemisah: "",
    explanation: "Judul slide presentasi yang efektif langsung menyampaikan temuan utama berangka (misal `'Penjualan turun 12 persen...'`). Pengecoh judul generik keliru dan tidak informatif bagi audiens eksekutif bisnis."
  },
  "da-6-4": {
    question: "Susun f-string insight yang menggabungkan temuan_pengiriman dengan rekomendasi.",
    potongan: ["insight = ", "f'{temuan_pengiriman}, sehingga sebaiknya kita tambah satu mitra kurir di Bekasi bulan ini'"],
    pengecoh: ["insight := ", "f'{temuan_pengiriman}, dan ini data lengkapnya di lampiran'"],
    pemisah: "",
    explanation: "Rekomendasi tindakan disusun dengan f-string yang memuat saran konkret (kata kunci `sebaiknya`/`rekomendasi`). Pengecoh tanpa saran konkret keliru secara analisis bisnis laporan pada proyek ini di BiLearn."
  },
  "da-6-5": {
    question: "Susun dictionary tanggapan_sanggahan dengan kunci akui, sumber, dan tindak_lanjut.",
    potongan: ["tanggapan_sanggahan = {\n    'akui': 'Wajar ditanyakan, angkanya memang berbeda dari laporan bulan lalu',\n    'sumber': 'Datanya dari tabel orders periode 1-30 Juni, status selain batal',\n", "    'tindak_lanjut': 'Saya periksa ulang definisinya dan kirim hasilnya besok siang',\n}"],
    pengecoh: ["tanggapan_sanggahan = {\n    'tolak': 'Angka Anda salah, laporan saya yang paling benar',\n    'db': 'Datanya dari tabel orders periode 1-30 Juni, status selain batal',\n", "    'next': 'Saya periksa ulang definisinya dan kirim hasilnya besok siang',\n}"],
    pemisah: "",
    explanation: "Penanganan sanggahan pemangku kepentingan mengikuti struktur `'akui'`, `'sumber'`, dan `'tindak_lanjut'`. Pengecoh defensif `'tolak'` keliru dalam komunikasi bisnis yang profesional dan santun di lingkungan kerja modern."
  },
  "da-6-6": {
    question: "Susun pemastian skala sumbu vertikal grafik dimulai dari 0 pada ax.",
    potongan: ["ax.set_ylim(", "bottom=0)"],
    pengecoh: ["ax.set_y_axis(", "min_val=0)"],
    pemisah: "",
    explanation: "Memastikan grafik jujur dilakukan dengan `ax.set_ylim(bottom=0)`. Pengecoh `min_val` adalah nama parameter fiktif yang keliru pada matplotlib saat membatasi skala sumbu Y secara visual pada grafik laporan."
  },
  "da-7-1": {
    question: "Susun dictionary sumber_data publik BPS dan Satu Data Indonesia.",
    potongan: ["sumber_data = {\n    'bps': 'https://www.bps.go.id',\n", "    'satu data indonesia': 'https://data.go.id',\n}"],
    pengecoh: ["sumber_data = {\n    'bps': 'ftp://bps.go.id',\n", "    'satu data indonesia': 'ftp://data.go.id',\n}"],
    pemisah: "",
    explanation: "Tautan portofolio sumber data publik menggunakan URL valid HTTPS `'https://www.bps.go.id'`. Pengecoh FTP keliru untuk alamat web portal data resmi pemerintah yang dapat diakses publik secara terbuka di internet."
  },
  "da-7-2": {
    question: "Susun list pertanyaan_bisnis berisi 3 pertanyaan utama proyek akhir.",
    potongan: ["pertanyaan_bisnis = ", "[\n    'Kategori produk mana yang marginnya paling turun pada kuartal ini?',\n    'Wilayah mana yang tingkat pembatalan pesanannya di atas rata-rata?',\n    'Jam berapa transaksi paling ramai sepanjang tiga bulan terakhir?',\n]"],
    pengecoh: ["pertanyaan_bisnis := ", "(\n    'Kategori produk mana yang marginnya paling turun pada kuartal ini?',\n    'Wilayah mana yang tingkat pembatalan pesanannya di atas rata-rata?',\n    'Jam berapa transaksi paling ramai sepanjang tiga bulan terakhir?',\n)"],
    pemisah: "",
    explanation: "List `pertanyaan_bisnis` wajib berisi pertanyaan analitis tingkat tinggi bertanda tanya `?`. Pengecoh dengan kurung biasa `()` menghasilkan tuple yang keliru secara struktur list proyek analisis data di platform."
  },
  "da-7-3": {
    question: "Susun list tahapan proyek dari SQL, cleaning pandas, hingga rekomendasi.",
    potongan: ["tahapan = ", "[\n    'ambil data dari SQL',\n    'cleaning dengan pandas',\n    'analisis & agregasi',\n    'visualisasi',\n    'rekomendasi ke stakeholder',\n]"],
    pengecoh: ["tahapan := ", "(\n    'ambil data dari SQL',\n    'cleaning dengan pandas',\n    'analisis & agregasi',\n    'visualisasi',\n    'rekomendasi ke stakeholder',\n)"],
    pemisah: "",
    explanation: "Tahapan proyek data mencakup langkah terstruktur dari SQL, cleaning pandas, visualisasi, hingga rekomendasi. Pengecoh tuple keliru untuk definisi daftar tahapan proyek pada lembar kerja skrip analisis."
  },
  "da-7-4": {
    question: "Susun f-string tautan_publik ke laporan Looker Studio.",
    potongan: ["tautan_publik = ", "f'https://lookerstudio.google.com/reporting/{report_id}'"],
    pengecoh: ["tautan_publik := ", "f'https://dashboard.internal/reports/{report_id}'"],
    pemisah: "",
    explanation: "Tautan publik portofolio mengarah ke domain resmi `lookerstudio.google.com`. Pengecoh domain internal keliru karena tidak bisa diakses publik secara bebas pada proyek portofolio yang dibagikan kepada umum."
  },
  "da-7-5": {
    question: "Susun dictionary laporan_akhir berisi ringkasan, rekomendasi, dan keterbatasan.",
    potongan: ["laporan_akhir = {\n    'ringkasan': 'Pembatalan pesanan naik 8 persen dan terpusat di dua wilayah',\n    'rekomendasi': ['Audit mitra kurir wilayah Bekasi', 'Tambah opsi ubah jadwal kirim'],\n", "    'keterbatasan': 'Data Mei tidak lengkap karena migrasi sistem kasir',\n}"],
    pengecoh: ["laporan_akhir = {\n    'summary': 'Pembatalan pesanan naik 8 persen dan terpusat di dua wilayah',\n    'recom': ['Audit mitra kurir wilayah Bekasi', 'Tambah opsi ubah jadwal kirim'],\n", "    'limit': 'Data Mei tidak lengkap karena migrasi sistem kasir',\n}"],
    pemisah: "",
    explanation: "Laporan akhir proyek portofolio memuat kunci `'ringkasan'`, `'rekomendasi'`, dan `'keterbatasan'`. Pengecoh istilah Inggris keliru untuk tes ini pada dokumentasi akhir proyek data analisis di platform."
  },
  "da-7-6": {
    question: "Susun judul Markdown header # Portfolio Analytics dan ## Dashboard Link.",
    potongan: ["# Portfolio Analytics\n", "## Dashboard Link"],
    pengecoh: ["# Analisis Portofolio\n", "### Link Dashboard"],
    pemisah: "",
    explanation: "Struktur dokumentasi README dibuka dengan `# Portfolio Analytics` dan `## Dashboard Link`. Pengecoh heading level 3 `###` keliru dari spesifikasi format dokumentasi proyek data analisis di BiLearn secara otomatis."
  }
};

let hasErrors = false;
for (const [id, sk] of Object.entries(I)) {
  const st = stepMap.get(id);
  if (!st) {
    console.error(`❌ Step ${id} not found!`);
    hasErrors = true;
    continue;
  }
  const errs = validateStepSusunKode(st, sk);
  if (errs.length > 0) {
    console.error(`❌ Step ${id} failed validation:`);
    for (const e of errs) {
      console.error(`   - ${e}`);
    }
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error("Fix validation errors before injecting!");
  process.exit(1);
} else {
  console.log("✅ All 47 steps for data-analysis passed internal validation!");
  fs.writeFileSync("scripts/data_analysis_data.json", JSON.stringify(I, null, 2));
}
