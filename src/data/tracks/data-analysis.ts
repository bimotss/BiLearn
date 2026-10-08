import type { Track } from "@/lib/types";

export const dataAnalysisTrack: Track = {
  slug: "data-analysis",
  title: "Analisis Data & Visualisasi",
  description:
    "pandas, statistik praktis, Looker Studio, dan data storytelling.",
  hours: 70,
  recommendedPrereqs: ["python", "sql"],
  color: "bg-teal-600",
  icon: "📈",
  order: 16,
  modules: [
    {
      slug: "persiapan-pandas-tuntas",
      title: "Persiapan & pandas Tuntas",
      description:
        "Alat kerja harian data analyst — dari filter sampai reshape.",
      topics: [
        "Review DataFrame & tipe data kolom (dtypes)",
        "loc vs iloc — seleksi yang tidak membingungkan",
        "Filter kompleks: kondisi ganda, isin, query",
        "groupby & agg multi-fungsi",
        "merge/join antar DataFrame (dan bandingkan dengan SQL)",
        "pivot_table & melt: wide vs long",
        "apply, map, dan kapan menghindarinya",
        "Time series dasar: resample, rolling",
      ],
      items: [
        {
          kind: "materi",
          id: "da-1-m1",
          title: "Persiapan, Instalasi Environment Data Science & Dasar pandas",
          body: `# Persiapan, Instalasi Environment Data Science & Dasar pandas

Selamat datang di track **Analisis Data & Visualisasi**! Sebelum memproses jutaan baris data transaksi, kamu perlu menyiapkan **Environment Data Science** yang stabil dan memahami alat kerja utama seorang Data Analyst: **library pandas**.

---

## 1. Pemasangan Environment Python & Setup Kerja Harian

Di dunia kerja, Data Analyst bekerja dengan kombinasi Python, Jupyter Notebook, dan editor modern seperti VS Code. 

### Pilihan A: Local Machine (VS Code / Jupyter)
1. Pastikan Python 3.10+ sudah terpasang (\`python3 --version\`).
2. Buat virtual environment agar dependensi proyek terisolasi rapi:
   \`\`\`bash
   python3 -m venv venv
   source venv/bin/activate  # macOS / Linux
   # venv\\Scripts\\activate   # Windows
   \`\`\`
3. Pasang paket dasar analisis data dan visualisasi:
   \`\`\`bash
   pip install pandas numpy matplotlib seaborn jupyter openpyxl sqlalchemy
   \`\`\`
4. Buka VS Code, pasang ekstensi **Python** dan **Jupyter**, lalu buat berkas baru ber-ekstensi \`.ipynb\` untuk mulai menulis kode cell-by-cell.

### Pilihan B: Cloud Environment (Google Colab)
Jika perangkat laptopmu memiliki RAM terbatas, gunakan **Google Colab** (\`colab.research.google.com\`). Lingkungan cloud ini sudah dilengkapi library data science terkini tanpa perlu instalasi lokal.

---

## 2. Mental Model: Berpikir Vektorial vs Berpikir Sel Excel

Banyak pemula yang beralih dari Excel ke Python membawa kebiasaan lama: **mengedit data sel demi sel**. Di Python, kebiasaan ini berwujud perulangan baris menggunakan \`for index, row in df.iterrows()\`.

> [!CAUTION]
> **Jangan Pernah Menggunakan \`for\` Loop untuk Mengolah Baris DataFrame!**
> Operasi \`for\` di Python dijalankan di tingkat interpreter yang sangat lambat karena harus membuat objek Series baru di setiap baris. pandas dirancang di atas bahasa C/Fortran (NumPy) yang memanfaatkan **Operasi Vektor (Vectorization)**. Operasi vektor memproses seluruh kolom dalam satu instruksi CPU instan.

| Metode Kalkulasi | Waktu Eksekusi (1 Juta Baris) | Catatan Kinerja |
|---|---|---|
| Python \`for row in df.iterrows()\` | ~45 - 60 detik | Sangat lambat, hindari di kode produksi |
| pandas \`.apply(lambda ...)\` | ~3 - 5 detik | Lebih baik, tapi tetap iterasi Python tingkat baris |
| **Operasi Vektor (\`df['A'] * df['B']\`)** | **~0.02 detik** | **Standar industri, tercepat (100x - 1000x lebih cepat)** |

---

## 3. Anatomi DataFrame & Series: Index Sebagai Peta Kunci

Dua struktur data fundamental di pandas adalah:
- **Series**: Array 1 dimensi berlabel (ibarat satu kolom tunggal beserta indeks barisnya).
- **DataFrame**: Tabel 2 dimensi tabular yang terdiri dari kumpulan Series yang berbagi indeks yang sama.

\`\`\`text
                      [Kolom 0: 'nama']  [Kolom 1: 'gaji']  [Kolom 2: 'wilayah']  <- (dtypes: object, int64, category)
Indeks 0 (Key) ───►      "Budi"             12000000            "Jakarta"
Indeks 1 (Key) ───►      "Siti"             15000000            "Surabaya"
Indeks 2 (Key) ───►      "Andi"             10000000            "Bandung"
                           ▲                  ▲                   ▲
                           │                  │                   │
                        Series 1           Series 2            Series 3
\`\`\`

Tipe data (\`dtypes\`) kolom sangat menentukan konsumsi memori:
- \`int64\` / \`float64\`: Angka numerik untuk perhitungan metrik.
- \`object\`: String teks bebas. Sangat boros RAM jika datanya berupa kategori berulang.
- \`category\`: Tipe khusus pandas untuk string berulang (misal: 'Jakarta', 'Bandung'). Mengubah kolom teks berulang menjadi \`category\` dapat **menghemat hingga 80% RAM**.
- \`datetime64[ns]\`: Tipe waktu untuk analisis deret waktu.

---

## 4. Seleksi Presisi yang Tidak Membingungkan: loc vs iloc

Dua method pencarian lokasi di pandas sering membuat pemula frustrasi karena terlihat mirip. Perbedaannya sangat tegas:

1. **\`df.loc[baris, kolom]\` (Label-Based)**:
   - Memilih data berdasarkan **nama label teks** baris dan kolom.
   - Sifat pengirisan (*slicing*): **INCLUSIVE** (elemen batas akhir ikut terambil).
   - Contoh: \`df.loc[0:2, ['nama', 'gaji']]\` akan mengambil label 0, 1, dan 2.
2. **\`df.iloc[baris, kolom]\` (Integer Position-Based)**:
   - Memilih data murni berdasarkan **posisi urutan indeks angka fisik** (dimulai dari 0).
   - Sifat pengirisan (*slicing*): **EXCLUSIVE** (seperti slicing Python murni, batas akhir tidak ikut).
   - Contoh: \`df.iloc[0:2, 0:2]\` hanya mengambil baris indeks ke-0 dan ke-1.

> [!WARNING]
> **Jebakan Index Pasca-Filtering**: Ketika kamu memfilter DataFrame (\`df_filtered = df[df['gaji'] > 12000000]\`), baris yang lolos mungkin memiliki index \`[1, 5, 12]\`. Menjalankan \`df_filtered.loc[0]\` akan melempar galat \`KeyError\` karena label 0 sudah terbuang. Sebaliknya, \`df_filtered.iloc[0]\` tetap aman mengambil baris pertama fisik.

---

## 5. Matriks Operasi Inti: pandas vs Excel vs SQL

| Operasi Analitik | pandas (Python) | Rumus Excel | Klausul SQL |
|---|---|---|---|
| Filter Data | \`df[df['status'].isin(['A', 'B'])]\` | Filter / \`FILTER()\` | \`WHERE status IN ('A', 'B')\` |
| Filter Ganda | \`df[(df['gaji'] > 10jt) & (df['wilayah'] == 'JKT')]\` | \`AND(A2>10jt, B2="JKT")\` | \`WHERE gaji > 10jt AND wilayah = 'JKT'\` |
| Filter Ekspresif | \`df.query("gaji > 10000000 and status == 'aktif'")\` | Advanced Filter | \`WHERE gaji > 10000000 AND status = 'aktif'\` |
| Agregasi Group | \`df.groupby('dept').agg({'gaji': ['mean', 'max']})\` | Pivot Table | \`GROUP BY dept\` |
| Gabung Tabel | \`pd.merge(df1, df2, on='id', how='left')\` | \`XLOOKUP()\` / \`VLOOKUP()\` | \`LEFT JOIN df2 ON df1.id = df2.id\` |
| Reshape Wide ke Long | \`df.melt(id_vars=['id'], value_vars=['q1', 'q2'])\` | Power Query Unpivot | \`UNPIVOT\` |
| Reshape Long ke Wide | \`df.pivot_table(index='thn', values='omset', aggfunc='sum')\` | Pivot Table | \`PIVOT\` / \`CASE WHEN\` |
| Time Series Bulanan | \`df.resample('ME').sum()\` | Group by Month | \`DATE_TRUNC('month', date)\` |
| Deret Waktu Moving Avg | \`df['omset'].rolling(7).mean()\` | \`AVERAGE(offset)\` | \`AVG(omset) OVER (ROWS 6 PRECEDING)\` |

---

## 6. Jebakan & Kesalahan Umum (Common Pitfalls)

> [!WARNING]
> 1. **\`SettingWithCopyWarning\` saat Chained Assignment**: Menulis \`df[df['status'] == 'aktif']['gaji'] = 15000000\` memicu peringatan karena kamu memodifikasi salinan (*copy*) sementara. Cara yang benar: gunakan \`.loc\`: \`df.loc[df['status'] == 'aktif', 'gaji'] = 15000000\`.
> 2. **Lupa \`.reset_index()\` setelah \`.groupby()\`**: Setelah menjalankan groupby, kolom pengelompokan berubah menjadi Index baris. Pemula sering bingung mengapa kolom tersebut tidak bisa diakses seperti biasa. Selalu tambahkan \`.reset_index()\` di akhir agregasi: \`df.groupby('dept')['gaji'].mean().reset_index()\`.
> 3. **Lupa Re-assignment**: Perintah \`df['gaji'].astype(int)\` atau \`df.drop_duplicates()\` tidak mengubah DataFrame asli jika tidak di-assign balik (\`df['gaji'] = df['gaji'].astype(int)\`).
> 4. **Overuse \`.apply()\`**: Memakai lambda untuk manipulasi teks padahal pandas menyediakan *vectorized string accessor* (\`.str.strip()\`, \`.str.lower()\`) yang jauh lebih efisien.

---

## 7. Kaitan ke Dunia Kerja: Data Extraction Pipeline

Di industri e-commerce dan perbankan, analis tidak diberikan file CSV rapi di desktop. Alur kerja nyata dimulai dari **Database Warehouse**:

\`\`\`python
# Pipeline Ekstraksi Database ke pandas di Industri
from sqlalchemy import create_engine
import pandas as pd

engine = create_engine("postgresql://user:pass@warehouse-db:5432/retail")
query = """
    SELECT order_id, customer_id, order_date, total_amount, status
    FROM orders
    WHERE order_date >= CURRENT_DATE - INTERVAL '90 days'
"""
# Tarik jutaan baris langsung ke DataFrame pandas
df_orders = pd.read_sql(query, con=engine, parse_dates=['order_date'])
print(f"Data transaksi berhasil ditarik: {df_orders.shape[0]:,} baris.")
\`\`\`

Kemampuan menulis transformasi pandas yang cepat dan bersih adalah kualifikasi teknis wajib nomor satu di setiap interview kerja Data Analyst.`,
        },
        {
          kind: "step",
          id: "da-1-1",
          title: "Tipe Data Kolom (dtypes & astype)",
          explanation:
            "Fungsi `df.dtypes` digunakan untuk memeriksa tipe data dari setiap kolom pada DataFrame. Sering kali data mentah yang diimpor dari file CSV memiliki kolom angka yang terdeteksi sebagai string ('object'). Untuk melakukan kalkulasi matematika tanpa galat `TypeError`, kita menggunakan `df['kolom'] = df['kolom'].astype(int)` untuk mengonversinya ke integer. Hati-hati saat mengonversi string yang memuat karakter non-angka karena akan menghasilkan ValueError jika tidak dibersihkan dulu.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'price': ['10', '20']})\ndf['price'] = df['price'].astype(int)\nprint(df.dtypes['price'])",
            output: "int64",
            note: "Memastikan operasi matematika berjalan tepat tanpa TypeError.",
          },
          instruction:
            "Tuliskan kode pandas untuk mengonversi kolom `'price'` pada DataFrame `df` ke tipe data integer `int`.",
          starterCode: "# Tulis astype di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\.astype\\(\\s*(?:['\"]int(?:64)?['\"]|int)\\s*\\)",
              message: "Konversi tipe kolom memakai method `.astype(<tipe>)`. Jebakannya: `.astype(int)` langsung gagal kalau kolomnya memuat NaN atau teks — untuk data kotor, `pd.to_numeric(..., errors='coerce')` lebih aman.",
            },
            {
              pattern: "df\\[\\s*['\"]price['\"]\\s*\\]\\s*=",
              message: "Hasil konversi TIDAK mengubah DataFrame dengan sendirinya; ia harus ditugaskan kembali ke kolomnya. Ini sumber \"kode saya jalan tapi tipenya tidak berubah\" yang paling sering.",
            },
          ],
          solution: "df['price'] = df['price'].astype(int)",
          susunKode: {
            question:
              "Susun pengubahan tipe data kolom price menjadi integer pada DataFrame df.",
            potongan: [
              "df['price'] = ",
              "df['price'].astype(int)",
            ],
            pengecoh: [
              "df['price'] := ",
              "df['price'].to_int()",
            ],
            pemisah: "",
            explanation:
              "Pengubahan tipe data kolom pandas menggunakan method `.astype(int)`. Pengecoh `.to_int()` adalah nama metode fiktif yang sering menggoda pemula padahal tidak tersedia di pustaka pandas untuk manipulasi data lembar kerja proyek secara otomatis.",
          },
        },
        {
          kind: "step",
          id: "da-1-2",
          title: "Seleksi Presisi: loc vs iloc",
          explanation:
            "Untuk mengambil bagian spesifik dari DataFrame, pandas menyediakan dua pencari lokasi presisi. Gunakan `.loc` (label-based location) jika ingin mengambil data berdasarkan nama label kolom dan baris. Gunakan `.iloc` (integer-based location) jika ingin mengambil data berdasarkan posisi urutan angka (0, 1, 2). Ingat jebakan penting: `.loc` bersifat inclusive (elemen batas ikut terambil), sedangkan `.iloc` bersifat exclusive layaknya slicing list di Python murni.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'name': ['A', 'B'], 'price': [100, 200]})\nsubset = df.loc[:, ['name', 'price']]\nprint(subset.shape)",
            output: "(2, 2)",
            note: "Ingat: loc bersifat inclusive (termasuk elemen batas), iloc bersifat exclusive.",
          },
          instruction:
            "Tuliskan sintaks `loc` untuk mengambil seluruh baris pada kolom `'name'` dan `'price'` dari DataFrame `df` lalu simpan ke variabel `subset`.",
          starterCode: "# Tulis df.loc di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "df\\.loc\\[",
                        "message": "Seleksi berbasis LABEL memakai `.loc[...]`. Pasangannya `.iloc[...]` yang berbasis posisi angka — tertukar keduanya adalah kekeliruan nomor satu pemula pandas."
                      },
                      {
                        "pattern": ":\\s*,\\s*\\[\\s*['\"]name['\"]\\s*,\\s*['\"]price['\"]\\s*\\]",
                        "message": "Formatnya `[baris, kolom]`. Titik dua berarti \"semua baris\", lalu daftar nama kolom di dalam kurung siku. Perhatikan kurung siku ganda: satu untuk `.loc`, satu untuk daftar kolomnya."
                      }
                    ],
          solution: "subset = df.loc[:, ['name', 'price']]",
          susunKode: {
            question:
              "Susun pengambilan seluruh baris untuk kolom name dan price dengan loc.",
            potongan: [
              "subset = df.loc[",
              ":, ['name', 'price']]",
            ],
            pengecoh: [
              "df_sub = df.iloc[",
              "*, ['name', 'price']]",
            ],
            pemisah: "",
            explanation:
              "Pengirisan seluruh baris pada `.loc` menggunakan tanda titik dua `:`. Pengecoh wildcard `*` adalah sintaks keliru yang sering menjebak pemula saat melakukan pengirisan kolom pandas di lembar kerja proyek analisis data secara langsung pada lembar kerja.",
          },
        },
        {
          kind: "step",
          id: "da-1-3",
          title: "Filtering Kompleks (.isin() & .query())",
          explanation:
            "Menyaring data dengan banyak kondisi membutuhkan metode yang bersih dan terbaca. Metode `df['kolom'].isin(['A', 'B'])` digunakan untuk menyaring baris yang nilainya cocok dengan daftar pilihan tanpa perlu menuliskan banyak operator `OR` secara berulang. Sebagai alternatif ekspresif, `df.query('price > 100 and qty < 5')` memungkinkan kamu menuliskan ekspresi filter bergaya SQL. Metode ini sangat ideal dipakai saat mengolah filter kategori produk di laporan analitik.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'status': ['active', 'pending', 'cancelled']})\nfiltered = df[df['status'].isin(['active', 'pending'])]\nprint(len(filtered))",
            output: "2",
            note: "Metode isin() menggantikan puluhan kondisi OR bersarang.",
          },
          instruction:
            "Tuliskan penyaringan DataFrame `df` untuk menyaring kolom `'status'` yang memiliki nilai dalam daftar `['active', 'pending']` dan simpan ke variabel `filtered`.",
          starterCode: "# Tulis isin di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "filtered\\s*=\\s*df\\[",
              message: "Simpan hasil penyaringan baris ke variabel `filtered` dengan memfilter `df[...]`.",
            },
            {
              pattern: "df\\[\\s*['\"]status['\"]\\s*\\]\\.isin\\(",
              message: "Saring kolom `'status'` menggunakan method `.isin(...)`.",
            },
            {
              pattern: "['\"]active['\"]",
              message: "Sertakan nilai `'active'` di dalam list pilihan `.isin([...])`.",
            },
            {
              pattern: "['\"]pending['\"]",
              message: "Sertakan nilai `'pending'` di dalam list pilihan `.isin([...])`.",
            },
          ],
          solution: "filtered = df[df['status'].isin(['active', 'pending'])]",
          susunKode: {
            question:
              "Susun penyaringan status aktif atau pending dengan method isin.",
            potongan: [
              "filtered = ",
              "df[df['status'].isin(['active', 'pending'])]",
            ],
            pengecoh: [
              "filtered := ",
              "df[df['status'].in_array(['active', 'pending'])]",
            ],
            pemisah: "",
            explanation:
              "Penyaringan beberapa nilai pada pandas menggunakan `.isin([...])`. Pengecoh `.in_array()` diadaptasi dari bahasa lain yang keliru jika digunakan pada DataFrame pandas saat ini untuk analisis data secara langsung pada lembar kerja skrip.",
          },
        },
        {
          kind: "step",
          id: "da-1-4",
          title: "Multi-Agregasi dengan .groupby().agg()",
          explanation:
            "Operasi pengelompokan data di pandas dilakukan dengan mengombinasikan `.groupby()` dan `.agg()`. Metode `.agg()` memungkinkan kamu menerapkan beberapa fungsi agregasi berbeda secara sekaligus pada kolom target (misalnya menghitung `sum`, `mean`, atau `count`). Ini merupakan padanan langsung klausul `GROUP BY` di SQL saat kamu diminta membuat ringkasan statistik per departemen atau per wilayah di dunia nyata. Pastikan nama fungsi agregasi ditulis sebagai string yang sah.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'dept': ['IT', 'IT'], 'salary': [10, 20]})\nres = df.groupby('dept').agg({'salary': 'mean'})\nprint(res.iloc[0, 0])",
            output: "15.0",
            note: "Sangat ampuh untuk membuat tabel eksekutif bertingkat.",
          },
          instruction:
            "Tuliskan perintah pandas untuk mengelompokkan `df` berdasarkan kolom `'dept'` lalu menghitung nilai rata-rata (`'mean'`) pada kolom `'salary'`.",
          starterCode: "# Tulis groupby.agg di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "df\\.groupby\\(\\s*['\"]dept['\"]\\s*\\)",
                        "message": "Pengelompokan memakai `.groupby('<kolom>')`."
                      },
                      {
                        "pattern": "\\.agg\\(\\s*\\{",
                        "message": "Untuk agregasi berbeda per kolom, pakai `.agg()` dengan sebuah dictionary."
                      },
                      {
                        "pattern": "['\"]salary['\"]\\s*:\\s*['\"]mean['\"]",
                        "message": "Isi dictionary-nya berpola `'<kolom>': '<fungsi>'`. Nama fungsinya ditulis sebagai teks (`'mean'`, `'sum'`, `'count'`), atau bisa juga berupa daftar bila satu kolom butuh beberapa agregasi."
                      }
                    ],
          solution: "df.groupby('dept').agg({'salary': 'mean'})",
          susunKode: {
            question:
              "Susun agregasi rata-rata gaji per departemen dengan groupby dan agg.",
            potongan: [
              "df.groupby('dept')",
              ".agg({'salary': 'mean'})",
            ],
            pengecoh: [
              "df.group_by('dept')",
              ".aggregate({'salary': 'avg'})",
            ],
            pemisah: "",
            explanation:
              "Agregasi spesifik dengan nama fungsi string menggunakan `.agg({'salary': 'mean'})`. Pengecoh `'avg'` adalah istilah SQL yang keliru dipakai karena pandas menggunakan istilah `'mean'` secara eksplisit pada fungsinya saat ini di platform.",
          },
        },
        {
          kind: "step",
          id: "da-1-5",
          title: "Penggabungan DataFrame (pd.merge)",
          explanation:
            "Fungsi `pd.merge()` digunakan untuk menggabungkan dua DataFrame terpisah berdasarkan kunci identifikasi (key column) yang sama. Metode ini adalah analogi langsung dari perintah `JOIN` pada relational database SQL. Parameter `how` mendukung opsi `'inner'`, `'left'`, `'right'`, dan `'outer'` untuk menentukan perlakuan terhadap baris yang tidak memiliki pasangan. Selalu periksa tipe data kolom kunci sebelum merge agar penggabungan tidak gagal secara diam-diam.",
          example: {
            code: "import pandas as pd\ndf1 = pd.DataFrame({'user_id': [1], 'val': ['A']})\ndf2 = pd.DataFrame({'user_id': [1], 'val2': ['B']})\nmerged = pd.merge(df1, df2, on='user_id', how='left')\nprint(merged.columns.tolist())",
            output: "['user_id', 'val', 'val2']",
            note: "Parameter how mendukung 'inner', 'left', 'right', dan 'outer'.",
          },
          instruction:
            "Tuliskan perintah `pd.merge` untuk menggabungkan `df1` dan `df2` berdasarkan kunci `'user_id'` menggunakan metode `'left'` join, lalu simpan ke variabel `merged`.",
          starterCode: "# Tulis pd.merge di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "pd\\.merge\\(",
                        "message": "Penggabungan dua DataFrame memakai `pd.merge(kiri, kanan, ...)` — padanan JOIN di SQL."
                      },
                      {
                        "pattern": "on\\s*=\\s*['\"]user_id['\"]",
                        "message": "Kolom kuncinya disebut lewat parameter `on`. Kalau nama kolomnya berbeda di kedua sisi, pakai `left_on` dan `right_on`."
                      },
                      {
                        "pattern": "how\\s*=\\s*['\"]left['\"]",
                        "message": "Jenis penggabungan diberikan lewat `how`. Nilai bawaannya `'inner'` — itu membuang baris tanpa pasangan secara diam-diam, jadi selalu sebutkan `how` secara eksplisit dan periksa jumlah baris sebelum-sesudah merge."
                      }
                    ],
          solution: "merged = pd.merge(df1, df2, on='user_id', how='left')",
          susunKode: {
            question:
              "Susun penggabungan left join dua DataFrame df1 dan df2 pada kunci user_id.",
            potongan: [
              "merged = pd.merge(df1, df2, ",
              "on='user_id', how='left')",
            ],
            pengecoh: [
              "merged = pd.join(df1, df2, ",
              "with='user_id', type='left')",
            ],
            pemisah: "",
            explanation:
              "Penggabungan DataFrame menggunakan `pd.merge()` dengan argumen `on` dan `how`. Pengecoh `with` dan `type` adalah kata kunci buatan yang keliru dan memicu TypeError pada pandas saat mengeksekusi penggabungan tabel di modul analisis.",
          },
        },
        {
          kind: "step",
          id: "da-1-6",
          title: "Reshaping: pivot_table & melt",
          explanation:
            "Mengubah orientasi struktur tabel adalah keterampilan penting dalam analisis data. Metode `pivot_table()` mengubah struktur data dari format Long (banyak baris) menjadi Wide (banyak kolom) dengan menyertakan fungsi agregasi otomatis. Sebaliknya, metode `melt()` melakukan unpivot untuk mengubah format Wide kembali menjadi Long. Format Long adalah bentuk ideal untuk pemrosesan data statistik, sedangkan format Wide lebih nyaman dibaca oleh mata manusia di laporan ringkasan.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'year': [2023, 2023], 'sales': [100, 200]})\npivot = df.pivot_table(index='year', values='sales', aggfunc='sum')\nprint(pivot.iloc[0, 0])",
            output: "300",
            note: "Melt sangat berguna saat ingin mengubah kolom-kolom tanggal menjadi 1 kolom deret waktu.",
          },
          instruction:
            "Gunakan `df.pivot_table()` untuk merekapitulasi data penjualan dengan menjadikan kolom `'year'` sebagai indeks baris, kolom `'sales'` sebagai nilai yang dihitung, dan fungsi agregasi `'sum'`. Simpan hasilnya ke variabel `pivot`.",
          starterCode: "# Tulis pivot_table di sini\n",
          language: "text",
          tests: [
            {
              pattern: "pivot\\s*=\\s*df\\.pivot_table\\(",
              message: "Panggil method `df.pivot_table(...)` dan simpan hasilnya ke variabel `pivot`.",
            },
            {
              pattern: "index\\s*=\\s*['\"]year['\"]",
              message: "Tentukan indeks baris tabel pivot dengan `index='year'`.",
            },
            {
              pattern: "values\\s*=\\s*['\"]sales['\"]",
              message: "Tentukan kolom nilai yang diagregasikan dengan `values='sales'`.",
            },
            {
              pattern: "aggfunc\\s*=\\s*['\"]sum['\"]",
              message: "Tentukan fungsi agregasi penjumlahan dengan `aggfunc='sum'`.",
            },
          ],
          solution: "pivot = df.pivot_table(index='year', values='sales', aggfunc='sum')",
          susunKode: {
            question:
              "Susun pemprosesan pivot_table dengan indeks year, nilai sales, dan agregasi sum.",
            potongan: [
              "pivot = ",
              "df.pivot_table(index='year', values='sales', aggfunc='sum')",
            ],
            pengecoh: [
              "pivot := ",
              "df.pivot_table(index='year', data='sales', method='sum')",
            ],
            pemisah: "",
            explanation:
              "Pembuatan tabel pivot pandas memerlukan parameter `values` dan `aggfunc`. Pengecoh `data` dan `method` adalah parameter fiktif yang sering menggoda pengguna baru di data analysis saat mengolah agregasi laporan di BiLearn saat ini.",
          },
        },
        {
          kind: "step",
          id: "da-1-7",
          title: "Iterasi Vektor dengan .apply()",
          explanation:
            "Fungsi `.apply()` memungkinkan kamu menerapkan logika fungsi Python kustom (termasuk fungsi `lambda`) pada setiap elemen di dalam Series atau baris di DataFrame. Ini sangat berguna ketika transformasi yang kamu inginkan tidak memiliki fungsi bawaan di pandas. Namun, perlu diingat bahwa `.apply()` bekerja secara perulangan di tingkat Python, sehingga kinerjanya lebih lambat dibanding operasivektor murni. Gunakan metode ini hanya ketika operasi vektor bawaan tidak lagi memungkinkan.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'text': [' halo ', ' dunia ']})\ndf['formatted'] = df['text'].apply(lambda x: x.strip())\nprint(df['formatted'].tolist())",
            output: "['halo', 'dunia']",
            note: "Gunakan operasi vektor bawaan jika memungkinkan sebelum beralih ke apply.",
          },
          instruction:
            "Tuliskan perintah `.apply()` dengan lambda untuk menghapus spasi ekstra (`x.strip()`) dari kolom `'text'` pada `df` dan simpan ke kolom `'formatted'`.",
          starterCode: "# Tulis apply di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "\\.apply\\(\\s*lambda\\s+x\\s*:",
                        "message": "`.apply()` menjalankan fungsi untuk setiap nilai; fungsi sederhana ditulis inline dengan `lambda x: ...`."
                      },
                      {
                        "pattern": "x\\.strip\\(\\)",
                        "message": "Isi lambda-nya dengan operasi per nilai. Catatan performa: untuk operasi teks sederhana, `.str.strip()` yang tervektorisasi jauh lebih cepat daripada `.apply()` — `.apply()` dipakai saat logikanya memang tidak bisa divektorisasi."
                      },
                      {
                        "pattern": "df\\[\\s*['\"]formatted['\"]\\s*\\]\\s*=",
                        "message": "Tugaskan hasilnya ke kolom baru, kalau tidak perhitungannya terbuang."
                      }
                    ],
          solution: "df['formatted'] = df['text'].apply(lambda x: x.strip())",
          susunKode: {
            question:
              "Susun pembersihan spasi liar kolom text ke kolom formatted dengan apply lambda.",
            potongan: [
              "df['formatted'] = ",
              "df['text'].apply(lambda x: x.strip())",
            ],
            pengecoh: [
              "df['formatted'] := ",
              "df['text'].map_all(lambda x: x.strip())",
            ],
            pemisah: "",
            explanation:
              "Penerapan fungsi kustom per sel menggunakan `.apply(lambda x: x.strip())`. Pengecoh `.map_all()` adalah metode fiktif yang keliru dan memicu AttributeError pada Series pandas saat transformasi teks otomatis di skrip lembar kerja.",
          },
        },
        {
          kind: "step",
          id: "da-1-8",
          title: "Time Series Resampling & Rolling",
          explanation:
            "Analisis deret waktu (Time Series) mengandalkan dua metode utama di pandas. Metode `.resample()` digunakan untuk mengagregasi data berdasarkan frekuensi waktu tertentu (seperti harian ke bulanan `'M'` atau tahunan `'Y'`). Metode `.rolling(window=7).mean()` digunakan untuk menghitung Moving Average (rata-rata bergerak) guna memperhalus fluktuasi data harian dan melihat tren jangka panjang. Syarat wajibnya: indeks dari DataFrame harus bertipe `DatetimeIndex` terlebih dahulu.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'sales': [10, 20, 30, 40, 50, 60, 70]})\ndf['moving_avg'] = df['sales'].rolling(7).mean()\nprint(df['moving_avg'].iloc[-1])",
            output: "40.0",
            note: "Rolling average berguna untuk memperhalus fluktuasi grafik tren harian.",
          },
          instruction:
            "Hitung nilai Moving Average (rata-rata bergerak) dengan jendela waktu 7 periode pada kolom `'sales'` dari DataFrame `df`. Simpan hasil perhitungan tersebut ke kolom baru bernama `'moving_avg'`.",
          starterCode: "# Tulis moving average 7 periode di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "\\.rolling\\(\\s*7\\s*\\)",
                        "message": "Jendela bergerak dibuat dengan `.rolling(<jumlah periode>)`."
                      },
                      {
                        "pattern": "\\.mean\\(\\)",
                        "message": "Rangkaikan fungsi agregasinya setelah jendelanya — `.rolling(7)` sendiri belum menghasilkan angka apa pun. Ingat: tujuh baris pertama bernilai NaN karena jendelanya belum penuh, dan itu perilaku yang benar."
                      },
                      {
                        "pattern": "df\\[\\s*['\"]moving_avg['\"]\\s*\\]\\s*=",
                        "message": "Simpan hasilnya sebagai kolom baru."
                      }
                    ],
          solution: "df['moving_avg'] = df['sales'].rolling(7).mean()",
          susunKode: {
            question:
              "Susun kalkulasi rata-rata bergerak 7 hari pada kolom sales.",
            potongan: [
              "df['moving_avg'] = ",
              "df['sales'].rolling(7).mean()",
            ],
            pengecoh: [
              "df['moving_avg'] := ",
              "df['sales'].moving(7).mean()",
            ],
            pemisah: "",
            explanation:
              "Rata-rata bergerak dihitung dengan kombinasi `.rolling(7).mean()`. Pengecoh `.moving()` adalah metode fiktif yang sering keliru diperkirakan ada oleh pembelajar data analisis saat ini pada skrip Python di modul BiLearn secara teratur.",
          },
        },
        {
          kind: "quiz",
          id: "da-1-kuis",
          title: "Kuis: Persiapan & pandas Tuntas",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Metode pandas mana yang digunakan untuk melakukan seleksi baris dan kolom berbasis Nama Label Teks (bukan indeks angka urutan fisik)?",
              choices: ["iloc", "loc", "select", "query"],
              answerIndex: 1,
              explanation: "df.loc memilih data berdasarkan label nama baris dan kolom (label-based), sedangkan df.iloc memilih berbasis indeks posisi angka (integer-based).",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Metode pandas apa yang digunakan untuk mengubah struktur DataFrame dari format Wide (banyak kolom nilai) menjadi format Long (banyak baris kategori)?",
              choices: ["pivot_table()", "concat()", "melt()", "join()"],
              answerIndex: 2,
              explanation: "melt() mengubah kolom-kolom nilai menjadi baris (unpivoting) untuk membuat struktur data Long. Sebaliknya, pivot_table() mengubah format Long menjadi Wide.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi utama dari metode `.isin()` saat melakukan filter kondisi pada DataFrame?",
              choices: [
                "Menyaring baris data yang nilainya ada di dalam sekumpulan daftar (list) pilihan yang ditentukan",
                "Memeriksa apakah sebuah kolom memuat nilai kosong (missing values atau NaN)",
                "Menguji apakah tipe data kolom merupakan tipe numerik atau teks",
                "Menghitung jumlah kemunculan setiap nilai unik di dalam sebuah Series",
              ],
              answerIndex: 0,
              explanation: ".isin([val1, val2]) menyaring baris yang nilainya cocok dengan salah satu elemen dalam daftar yang diberikan, menggantikan rangkaian kondisi OR (|) yang panjang.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Jika ingin mengelompokkan data berdasarkan departemen dan menghitung nilai maksimum serta rata-rata gajinya sekaligus, metode apa yang paling tepat digunakan?",
              choices: [
                "df.groupby('dept').sum({'salary': ['max', 'mean']})",
                "df.groupby('dept')['salary'].describe()",
                "df.groupby('dept').agg({'salary': ['max', 'mean']})",
                "df.pivot_table(columns='dept', values='salary')",
              ],
              answerIndex: 2,
              explanation: "Metode .agg() pada pandas memungkinkan penerapan fungsi agregasi ganda (seperti max dan mean) secara bersamaan pada kelompok data.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kapan saat yang paling tepat untuk menggunakan fungsi `.apply()` pada pandas?",
              choices: [
                "Saat melakukan operasi aritmatika sederhana antar dua kolom karena selalu lebih cepat",
                "Saat perlu menerapkan operasi transformasi kustom baris demi baris yang sulit diselesaikan dengan metode vektor bawaan",
                "Saat ingin menggabungkan dua tabel relasional berbasis foreign key",
                "Saat membaca file CSV berukuran besar ke memori",
              ],
              answerIndex: 1,
              explanation: "Fungsi .apply() ampuh untuk logika kustom kompleks tingkat baris, namun sebaiknya dihindari jika sudah tersedia operasi vektor bawaan (.str, .dt, atau aritmatika langsung) yang jauh lebih efisien.",
            },
          ],
        },
      ],
    },
    {
      slug: "data-cleaning",
      title: "Data Cleaning di pandas",
      description:
        "Data nyata itu kotor — proses yang memakan 80% waktu analis.",
      topics: [
        "Diagnosis: duplikat, missing, outlier, tipe salah",
        "Strategi missing value: drop, fill, flag (dan trade-offnya)",
        "String cleaning: str accessor, regex dasar",
        "Parsing tanggal yang berantakan",
        "Kategori tidak konsisten & mapping",
        "Deteksi outlier: IQR & z-score",
        "Pipeline cleaning yang reproducible",
      ],
      items: [
        {
          kind: "materi",
          id: "da-2-m1",
          title: "Strategi Data Cleaning & Pra-pemrosesan Data",
          body: `# Strategi Data Cleaning & Pra-pemrosesan Data

Ada pepatah paling terkenal di industri data: **"Garbage In, Garbage Out"**. Sehebat apa pun algoritma machine learning atau dashboard visualisasi yang kamu bangun, jika data masukannya kotor, kesimpulan bisnis yang dihasilkan akan salah fatal dan merugikan perusahaan.

---

## 1. Realitas Data di Dunia Nyata: Mengapa 80% Waktu Habis di Sini?

Di tutorial online, dataset sering kali sudah bersih dan siap diolah. Namun di dunia kerja nyata, data berasal dari formulir pengguna yang tidak tervalidasi, log server yang terputus, atau integrasi sistem warisan (*legacy database*).

Beberapa masalah klasik data mentah meliputi:
1. **Missing Values**: Sel bernilai \`NaN\`, \`None\`, atau string kosong akibat field formulir opsional atau kegagalan sensor.
2. **Duplikasi Transaksi**: Pengguna mengklik tombol checkout dua kali saat koneksi internet lambat.
3. **Format Teks Berantakan**: Nama kota yang sama diinput berbeda (\`"Jakarta"\`, \`" jakarta "\`, \`"DKI JAKARTA"\`, \`"jkt"\`).
4. **Parsing Tanggal Rusak**: Tanggal berformat ambigu (\`"03/04/2026"\` — apakah 3 April atau 4 Maret?) atau memuat teks error seperti \`"N/A"\`.
5. **Pencilan Tidak Masuk Akal (Anomali Input)**: Nilai usia 999 tahun atau harga barang Rp -50.000 akibat kesalahan sistem kasir.

---

## 2. Karakteristik Khusus & Keunikan Data Lokal Indonesia

Bekerja dengan dataset di Indonesia memerlukan keahlian pembersihan data spesifik:

### A. Format Mata Uang & Angka Desimal
Data dari laporan keuangan Indonesia sering memuat simbol rupiah, titik sebagai pemisah ribuan, dan koma sebagai pemisah desimal:
\`\`\`python
# Contoh: "Rp 1.500.000,50" -> 1500000.50 (float)
df['nominal_bersih'] = (
    df['harga_mentah']
    .str.replace('Rp', '', regex=False)
    .str.replace('.', '', regex=False)
    .str.replace(',', '.', regex=False)
    .str.strip()
    .astype(float)
)
\`\`\`

### B. Preservasi Angka Nol di Depan (Leading Zeros)
Kolom seperti **Nomor Induk Kependudukan (NIK)**, **Nomor Telepon (0812...)**, atau **Kode Pos** yang terbaca otomatis sebagai integer akan kehilangan angka 0 di depan (misal \`0812345\` menjadi \`812345\`).
- **Solusi**: Pastikan kolom dibaca sebagai string sejak awal (\`dtype={'nik': str}\`), atau perbaiki dengan \`.str.zfill(16)\`.

### C. Tanggal Berbahasa Indonesia
Data lokal sering menuliskan nama bulan dalam bahasa Indonesia: \`"17 Agustus 2026"\`. Ini harus dipetakan ke format standar sebelum diparsing dengan \`pd.to_datetime\`.

---

## 3. Matriks Strategi Penanganan Missing Values

Banyak pemula langsung menjalankan \`df.dropna()\` begitu melihat nilai kosong. Ini tindakan berbahaya yang bisa membuang separuh data pentingmu.

| Kondisi Data | Tindakan yang Disarankan | Metode pandas | Trade-off & Risiko |
|---|---|---|---|
| ID unik / Kunci relasi hilang | Hapus Baris | \`df.dropna(subset=['order_id'])\` | Data tanpa ID tidak bisa digabungkan |
| Kolom kosong > 70% & tidak esensial | Hapus Kolom | \`df.drop(columns=['catatan_opsional'])\` | Kehilangan fitur yang mungkin berguna |
| Numerik Distribusi Miring (Gaji/Harga) | Imputasi **Median** | \`df['gaji'].fillna(df['gaji'].median())\` | Tahan terhadap pencilan ekstrem |
| Numerik Distribusi Normal Simetris | Imputasi **Mean** | \`df['tinggi'].fillna(df['tinggi'].mean())\` | Mempertahankan rata-rata populasi |
| Kategori / Teks Berulang | Imputasi **Modus** | \`df['kota'].fillna(df['kota'].mode()[0])\` | Mengisi dengan kategori terpopuler |
| Deret Waktu / Transaksi Finansial | Forward Fill | \`df['kurs'].ffill()\` | Mengasumsikan nilai sama dengan kemarin |
| Butuh Jejak Investigasi | Flag Indicator | \`df['gaji_was_na'] = df['gaji'].isna()\` | Menandai baris agar model tahu ada imputasi |

---

## 4. Deteksi Outlier: Metode Tukey IQR vs Z-Score

Pencilan (*outlier*) adalah nilai data yang menyimpang jauh dari kumpulan data lainnya.

\`\`\`text
                  Q1 - 1.5*IQR          Q1 (25%)    Median     Q3 (75%)      Q3 + 1.5*IQR
                       │                   │          │           │               │
  Outlier Bawah <──────┤═══════════════════[==========|===========]═══════════════├──────► Outlier Atas
                       Batas Bawah                Interquartile                  Batas Atas
                                                   Range (IQR)
\`\`\`

1. **Metode Interquartile Range (IQR - Tukey's Fences)**:
   - Hitung kuartil: \`Q1 = df['val'].quantile(0.25)\` dan \`Q3 = df['val'].quantile(0.75)\`.
   - Rentang IQR: \`IQR = Q3 - Q1\`.
   - Batas Bawah: \`lower_bound = Q1 - 1.5 * IQR\`.
   - Batas Atas: \`upper_bound = Q3 + 1.5 * IQR\`.
   - **Kelebihan**: Tahan terhadap nilai ekstrem itu sendiri karena berbasis persentil.
2. **Metode Z-Score**:
   - Menghitung seberapa banyak standar deviasi suatu nilai berada dari rata-rata: \`z = (x - mean) / std\`.
   - Nilai dengan \`|z| > 3\` biasanya ditandai sebagai pencilan.
   - **Kelemahan**: Rata-rata dan standar deviasi sendiri sudah terdistorsi oleh pencilan ekstrem.

> **Keputusan Bisnis**: Jangan langsung menghapus outlier! Bedakan **Kesalahan Teknis** (misal input harga barang Rp 0 atau kuantitas 999999) dengan **Anomali Bisnis Bernilai** (misal pelanggan B2B yang memborong barang bernilai ratusan juta rupiah).

---

## 5. Diagram Alur Pipeline Data Cleaning Reproducible

\`\`\`text
[Data Mentah Kotor (CSV/SQL)]
       │
       ▼
[1. Diagnosis Awal] ────────► df.info(), df.isna().sum(), df.duplicated().sum()
       │
       ▼
[2. Cleaning String] ───────► .str.strip(), .str.lower(), regex format mata uang
       │
       ▼
[3. Parsing Tanggal] ───────► pd.to_datetime(df['tgl'], errors='coerce')
       │
       ▼
[4. Standarisasi Nilai] ────► .replace({'jkt': 'jakarta'}), tangani kategori inkonsisten
       │
       ▼
[5. Strategi Missing] ──────► fillna(median) / dropna(subset=['id']) / indicator flag
       │
       ▼
[6. Filter Outlier/Error] ──► Filter batas bawah/atas IQR & buang duplikat identik
       │
       ▼
[7. Reset Indeks] ──────────► .reset_index(drop=True)
       │
       ▼
[Clean DataFrame Siap Analisis]
\`\`\`

---

## 6. Jebakan & Kesalahan Umum (Common Pitfalls)

> [!WARNING]
> 1. **Perbedaan Fatal Antara \`.map()\` dan \`.replace()\`**: Menulis \`df['kota'].map({'jkt': 'Jakarta'})\` akan mengubah semua nama kota lain yang tidak ada di kamus menjadi \`NaN\`! Selalu gunakan \`.replace({'jkt': 'Jakarta'})\` untuk memperbarui nilai parsial.
> 2. **Parsing Tanggal Tanpa \`errors='coerce'\`**: Jika ada satu saja baris string tanggal yang rusak (seperti \`"31-02-2026"\`), \`pd.to_datetime\` akan melempar error dan mematikan seluruh program. Dengan \`errors='coerce'\`, nilai rusak diubah secara aman menjadi \`NaT\` (Not a Time).
> 3. **Indeks Bolong Pasca \`.drop_duplicates()\`**: Menghapus baris duplikat meninggalkan celah pada nomor indeks. Selalu akhiri pipeline pembersihan dengan \`.reset_index(drop=True)\`.

---

## 7. Kaitan ke Dunia Kerja: Fungsi Pipeline Reusable

Di lingkungan produksi (*production environment*), analis membungkus seluruh alur pembersihan ke dalam satu fungsi teruji:

\`\`\`python
def clean_transactions_pipeline(raw_df: pd.DataFrame) -> pd.DataFrame:
    """Pipeline pembersihan otomatis transaksi e-commerce."""
    df = raw_df.copy()
    
    # 1. Hapus duplikat transaksi identik
    df = df.drop_duplicates(subset=['order_id'])
    
    # 2. Parsing tanggal & tangani format rusak
    df['order_date'] = pd.to_datetime(df['order_date'], errors='coerce')
    df = df.dropna(subset=['order_date'])
    
    # 3. Rapikan teks status & kategori
    df['status'] = df['status'].str.strip().str.lower()
    df['status'] = df['status'].replace({'settled': 'success', 'paid': 'success'})
    
    # 4. Imputasi nilai ongkir yang kosong dengan median
    median_ongkir = df['shipping_cost'].median()
    df['shipping_cost'] = df['shipping_cost'].fillna(median_ongkir)
    
    # 5. Reset index akhir
    return df.reset_index(drop=True)
\`\`\`

Fungsi modular seperti ini dapat langsung diuji dengan unit test dan disematkan ke dalam orchestrator data modern (seperti Apache Airflow atau Prefect).`,
        },
        {
          kind: "step",
          id: "da-2-1",
          title: "Diagnosis Kualitas Data",
          explanation:
            "Langkah paling awal dalam data cleaning adalah melakukan audit diagnosis kualitas data. Kita menggunakan `df.duplicated().sum()` untuk menghitung total baris duplikat dan `df.isna().sum()` untuk menghitung sel kosong pada setiap kolom. Hasil diagnosis ini akan menentukan strategi pembersihan data yang tepat tanpa terburu-buru menghapus baris. Di lingkungan kerja produksi, pastikan selalu memeriksa tipe data ringkasan dengan `df.info()` sebelum melangkah ke pembersihan.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'a': [1, None], 'b': [2, 2]})\nprint(df.isna().sum().to_dict())",
            output: "{'a': 1, 'b': 0}",
            note: "Diagnosis awal menentukan strategi pembersihan data.",
          },
          instruction:
            "Tuliskan perintah Python untuk mencetak jumlah missing values per kolom dari DataFrame `df`.",
          starterCode: "# Tulis df.isna().sum() di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "df\\.isna\\(\\)",
                        "message": "Pemeriksaan nilai hilang memakai `.isna()` (alias `.isnull()`), yang mengembalikan DataFrame berisi True/False."
                      },
                      {
                        "pattern": "\\.sum\\(\\)",
                        "message": "Rangkaikan `.sum()` agar True dihitung sebagai 1 dan kamu mendapat JUMLAH nilai hilang per kolom. Tanpa itu, yang tercetak tabel True/False sepanjang datamu."
                      },
                      {
                        "pattern": "print\\(",
                        "message": "Bungkus dengan `print()` supaya hasilnya tampil saat skrip dijalankan dari terminal — di notebook, baris terakhir tampil sendiri, tapi di skrip tidak."
                      }
                    ],
          solution: "print(df.isna().sum())",
          susunKode: {
            question:
              "Susun pencetakan jumlah nilai hilang per kolom dengan isna dan sum.",
            potongan: [
              "print(df.isna()",
              ".sum())",
            ],
            pengecoh: [
              "output(df.is_null()",
              ".total())",
            ],
            pemisah: "",
            explanation:
              "Penghitungan nilai kosong per kolom memakai `df.isna().sum()`. Pengecoh `.is_null()` dan `.total()` adalah metode fiktif yang keliru jika dipanggil pada DataFrame pandas untuk analisis data secara berkala pada lembar kerja skrip.",
          },
        },
        {
          kind: "step",
          id: "da-2-2",
          title: "Strategi Pengisian Missing Values (Imputation)",
          explanation:
            "Saat menemukan data kosong (`NaN`), ada dua pilihan: menghapus baris dengan `df.dropna()` atau melakukan pengisian (imputasi). Untuk data numerik berskewness tinggi (seperti gaji atau harga), pengisian nilai kosong paling aman menggunakan statistik Median via `df['kolom'].fillna(df['kolom'].median())`. Median tahan terhadap pencilan ekstrem dibanding Mean, sehingga tidak merusak distribusi alami data.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'score': [10, 20, None]})\ndf['score'] = df['score'].fillna(df['score'].median())\nprint(df['score'].tolist())",
            output: "[10.0, 20.0, 15.0]",
            note: "Gunakan median (bukan mean) jika distribusi data memiliki outlier ekstrem.",
          },
          instruction:
            "Tuliskan kode pandas untuk mengisi nilai kosong (`isna`) pada kolom `'score'` dengan nilai median dari kolom tersebut.",
          starterCode: "# Tulis fillna median di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "\\.fillna\\(",
                        "message": "Pengisian nilai hilang memakai `.fillna(<pengganti>)`."
                      },
                      {
                        "pattern": "\\.median\\(\\)",
                        "message": "Untuk data numerik yang punya pencilan (gaji, harga), median lebih tahan daripada rata-rata: satu nilai ekstrem menggeser `mean` tapi hampir tidak menggeser median."
                      },
                      {
                        "pattern": "df\\[\\s*['\"]score['\"]\\s*\\]\\s*=",
                        "message": "Tugaskan kembali hasilnya. Hindari `inplace=True` — ia sedang dalam proses dihapus dari pandas dan sering memicu `SettingWithCopyWarning`."
                      }
                    ],
          solution: "df['score'] = df['score'].fillna(df['score'].median())",
          susunKode: {
            question:
              "Susun pengisian nilai kosong kolom score dengan nilai median.",
            potongan: [
              "df['score'] = ",
              "df['score'].fillna(df['score'].median())",
            ],
            pengecoh: [
              "df['score'] := ",
              "df['score'].replace_null(df['score'].median())",
            ],
            pemisah: "",
            explanation:
              "Imputasi nilai hilang dengan median dilakukan via `fillna(df['score'].median())`. Pengecoh `replace_null` adalah metode fiktif yang keliru disarankan oleh beberapa pemula saat pembersihan data di BiLearn secara otomatis pada program.",
          },
        },
        {
          kind: "step",
          id: "da-2-3",
          title: "Pembersihan Teks dengan .str Accessor",
          explanation:
            "Kolom teks di data mentah hampir selalu kotor: ada spasi di ujung, huruf besar-kecil campur, atau karakter sisa dari sistem lain. Accessor `.str` membuat kamu bisa memakai method string Python pada seluruh Series sekaligus tanpa perulangan — `.str.strip()`, `.str.lower()`, `.str.replace()`. Ini penting sebelum `groupby` atau `merge`, karena `' Budi'` dan `'budi'` dianggap dua nilai berbeda dan akan memecah hasil agregasimu.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'email': [' BUDI@TEST.COM ']})\ndf['email'] = df['email'].str.strip().str.lower()\nprint(df['email'].iloc[0])",
            output: "budi@test.com",
            note: "str accessor memungkinkan operasi teks vektor pada seluruh elemen Series.",
          },
          instruction:
            "Kolom `'email'` pada `df` berisi alamat dengan spasi di ujung dan huruf kapital acak. Rapikan kolom itu agar tidak ada spasi tersisa dan semua huruf menjadi kecil, lalu simpan kembali ke kolom yang sama.",
          starterCode: "# Tulis str.lower di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "\\.str\\.strip\\(\\)",
                        "message": "Operasi teks pada seluruh kolom dilakukan lewat accessor `.str`, lalu nama methodnya. Yang ini membuang spasi di awal dan akhir — penyebab utama nilai yang \"terlihat sama\" tapi tidak cocok saat merge."
                      },
                      {
                        "pattern": "\\.str\\.lower\\(\\)",
                        "message": "Rangkaikan penyeragaman huruf kecil setelahnya. Untuk email, dua langkah ini wajib sebelum dedup: `Budi@Mail.com ` dan `budi@mail.com` seharusnya satu orang."
                      }
                    ],
          solution: "df['email'] = df['email'].str.strip().str.lower()",
          susunKode: {
            question:
              "Susun pembersihan string email dengan strip spasi dan konversi huruf kecil.",
            potongan: [
              "df['email'] = df['email'].str.strip()",
              ".str.lower()",
            ],
            pengecoh: [
              "df['email'] = df['email'].str.clean()",
              ".str.to_lower()",
            ],
            pemisah: "",
            explanation:
              "Manipulasi string vektor pada pandas diakses via accessor `.str`. Pengecoh `.str.clean()` dan `.str.to_lower()` adalah nama metode fiktif yang keliru diterapkan pada pandas Series saat pembersihan teks pada dataset di lembar kerja.",
          },
        },
        {
          kind: "step",
          id: "da-2-4",
          title: "Parsing Tanggal dengan pd.to_datetime",
          explanation:
            "Kolom tanggal sering kali diimpor sebagai teks string berantakan dari berbagai sumber. Fungsi `pd.to_datetime(df['tanggal'], errors='coerce')` mengonversi teks tersebut menjadi tipe `datetime64` yang sah. Parameter `errors='coerce'` sangat krusial karena akan mengubah nilai tanggal yang cacat/invalid menjadi `NaT` (Not a Time) secara otomatis sehingga proses pengolahan data tidak terhenti oleh SyntaxError.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'date': ['2024-01-01', 'invalid']})\ndf['date'] = pd.to_datetime(df['date'], errors='coerce')\nprint(pd.isna(df['date'].iloc[1]))",
            output: "True",
            note: "errors='coerce' otomatis mengubah format tanggal rusak menjadi NaT (Not a Time).",
          },
          instruction:
            "Konversikan kolom `'date'` pada `df` ke tipe datetime secara aman menggunakan `pd.to_datetime`. Pasang opsi penanganan error agar format tanggal yang cacat otomatis diubah menjadi `NaT` alih-alih melempar exception.",
          starterCode: "# Tulis pd.to_datetime di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "pd\\.to_datetime\\(",
                        "message": "Konversi teks menjadi tanggal memakai `pd.to_datetime(...)`. Selama kolomnya masih bertipe object, operasi tanggal (`.dt.month`, perbandingan periode) tidak tersedia."
                      },
                      {
                        "pattern": "errors\\s*=\\s*['\"]coerce['\"]",
                        "message": "Tambahkan `errors='coerce'` agar nilai yang tidak bisa diparse menjadi `NaT` alih-alih menghentikan seluruh skrip. Setelah itu, hitung `NaT`-nya — jumlah itu adalah laporan kualitas data yang berguna."
                      }
                    ],
          solution: "df['date'] = pd.to_datetime(df['date'], errors='coerce')",
          susunKode: {
            question:
              "Susun konversi kolom date menjadi datetime dengan penanganan error coerce.",
            potongan: [
              "df['date'] = pd.to_datetime(df['date'], ",
              "errors='coerce')",
            ],
            pengecoh: [
              "df['date'] = pd.parse_datetime(df['date'], ",
              "errors='ignore')",
            ],
            pemisah: "",
            explanation:
              "Konversi ke datetime yang aman memakai `pd.to_datetime(..., errors='coerce')`. Pengecoh `pd.parse_datetime()` adalah nama fungsi fiktif yang keliru digunakan di pandas saat memproses tanggal pada skrip lembar kerja analisis.",
          },
        },
        {
          kind: "step",
          id: "da-2-5",
          title: "Standarisasi Kategori dengan .map() & .replace()",
          explanation:
            "Data masukan pengguna sering kali memiliki sinonim nama kategori yang tidak seragam (misal: 'jkt', 'jakarta', 'DKI Jakarta'). Kita menggunakan dictionary pemetaan dengan metode `.replace({'jkt': 'active'})` untuk menyeragamkan penulisan nilai menjadi satu standar tunggal. Langkah ini wajib dilakukan sebelum operasi pengelompokan `groupby` agar kategori yang sama tidak terpecah menjadi grup terpisah.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'status': ['act', 'active']})\ndf['status'] = df['status'].replace({'act': 'active'})\nprint(df['status'].unique().tolist())",
            output: "['active']",
            note: "Memastikan agregasi groupby tidak terpecah ke kategori sinonim.",
          },
          instruction:
            "Tuliskan kode untuk mengganti nilai `'act'` menjadi `'active'` pada kolom `'status'` menggunakan metode `.replace()`.",
          starterCode: "# Tulis replace di sini\n",
          language: "text",
          tests: [
            {
              pattern: "df\\[\\s*['\"]status['\"]\\s*\\]\\s*=",
              message: "Tugaskan kembali hasil pembaruan ke kolom `df['status']`.",
            },
            {
              pattern: "\\.replace\\(\\s*\\{",
              message: "Gunakan method `.replace({...})` dengan argumen dictionary pemetaan.",
            },
            {
              pattern: "['\"]act['\"]\\s*:\\s*['\"]active['\"]",
              message: "Petakan nilai `'act'` ke `'active'` di dalam dictionary: `{'act': 'active'}`.",
            },
          ],
          solution: "df['status'] = df['status'].replace({'act': 'active'})",
          susunKode: {
            question:
              "Susun penggantian nilai 'act' menjadi 'active' pada kolom status dengan dictionary.",
            potongan: [
              "df['status'] = ",
              "df['status'].replace({'act': 'active'})",
            ],
            pengecoh: [
              "df['status'] := ",
              "df['status'].map_values({'act': 'active'})",
            ],
            pemisah: "",
            explanation:
              "Penggantian nilai spesifik memakai `df['status'].replace({...})`. Pengecoh `map_values` adalah metode fiktif yang keliru dan memicu AttributeError saat eksekusi skrip analisis data di lingkungan kerja secara langsung pada skrip.",
          },
        },
        {
          kind: "step",
          id: "da-2-6",
          title: "Deteksi Outlier dengan Metode IQR (Interquartile Range)",
          explanation:
            "Deteksi pencilan data (Outlier) menggunakan rentang antar kuartil IQR yang dihitung dari Kuartil 3 (`Q3`) dikurangi Kuartil 1 (`Q1`). Nilai data yang berada di bawah `Q1 - 1.5*IQR` atau di atas `Q3 + 1.5*IQR` dikategorikan sebagai outlier statistik. Menghitung batas bawah pencilan sangat krusial saat menyaring anomali nilai transaksi atau durasi sesi pengguna. Metode ini dipilih dibanding standar deviasi karena kuartil tidak ikut terdistorsi oleh pencilan ekstrem yang sedang dicari.",
          example: {
            code: "Q1 = 20\nQ3 = 50\nIQR = Q3 - Q1\nbatas_bawah = Q1 - 1.5 * IQR\nprint(batas_bawah)",
            output: "-25.0",
            note: "Data yang berada di bawah batas ini teridentifikasi sebagai pencilan bawah.",
          },
          instruction:
            "Berdasarkan kuartil pertama `Q1` dan jangkauan antar-kuartil `IQR` yang sudah tersedia, hitung batas bawah pencilan (lower fence) menggunakan standar Tukey (1.5 kali IQR di bawah Q1) dan simpan ke variabel `lower_bound`.",
          starterCode: "# Hitung batas bawah pencilan\n",
          language: "text",
          tests: [
            {
              pattern: "lower_bound\\s*=",
              message: "Simpan hasil perhitungan batas bawah ke variabel lower_bound.",
            },
            {
              pattern: "Q1\\s*-\\s*1\\.5\\s*\\*\\s*IQR",
              message: "Hitung batas bawah outlier menggunakan rumus Q1 - 1.5 * IQR.",
            },
          ],
          solution: "lower_bound = Q1 - 1.5 * IQR",
          susunKode: {
            question:
              "Susun formula batas bawah pencilan IQR dari kuartil pertama Q1.",
            potongan: [
              "lower_bound = ",
              "Q1 - 1.5 * IQR",
            ],
            pengecoh: [
              "lower_bound := ",
              "Q1 + 1.5 * IQR",
            ],
            pemisah: "",
            explanation:
              "Batas bawah outlier dihitung dari rumus `Q1 - 1.5 * IQR`. Pengecoh dengan operator plus `+` adalah kekeliruan umum yang sering menggoda pemula karena tanda tambah digunakan untuk menghitung batas atas, bukan batas bawah.",
          },
        },
        {
          kind: "step",
          id: "da-2-7",
          title: "Fungsi Pipeline Cleaning Reusable",
          explanation:
            "Praktik terbaik di industri adalah membungkus seluruh urutan pembersihan data ke dalam satu fungsi Python yang reusable (misal `clean_data(raw_df)`). Dengan pendekatan fungsi ini, kamu dapat menerapkan pipeline pembersihan yang identik secara otomatis pada file data baru di masa mendatang tanpa mengetik ulang skrip. Di akhir fungsi, pastikan kamu mengembalikan objek DataFrame bersih dengan sintaks `return df` setelah merapikan duplikat dan indeks.",
          example: {
            code: "import pandas as pd\ndef clean_data(raw_df):\n    df = raw_df.drop_duplicates().reset_index(drop=True)\n    return df\ndf_in = pd.DataFrame({'a': [1, 1]})\nprint(len(clean_data(df_in)))",
            output: "1",
            note: "Memastikan konsistensi proses pra-pemrosesan data dalam alur kerja produksi.",
          },
          instruction:
            "Lengkapi fungsi `clean_data(raw_df)` agar membuang duplikat baris memakai `.drop_duplicates()` dan mereset indeks memakai `.reset_index(drop=True)`, lalu mengembalikan DataFrame `df` di baris terakhir.",
          starterCode: "def clean_data(raw_df):\n    # Bersihkan duplikat dan reset indeks di sini\n    return df\n",
          language: "text",
          tests: [
            {
              pattern: "def clean_data\\(\\s*raw_df\\s*\\):",
              message: "Definisikan fungsi `clean_data(raw_df)`.",
            },
            {
              pattern: "raw_df\\.drop_duplicates\\(\\)",
              message: "Hapus baris duplikat dengan memanggil `.drop_duplicates()` pada `raw_df`.",
            },
            {
              pattern: "\\.reset_index\\(\\s*drop\\s*=\\s*True\\s*\\)",
              message: "Reset indeks dengan `.reset_index(drop=True)` agar susunan nomor baris kembali teratur tanpa celah.",
            },
            {
              pattern: "return\\s+df",
              message: "Kembalikan objek DataFrame `df` bersih dengan `return df`.",
            },
          ],
          solution: "def clean_data(raw_df):\n    df = raw_df.drop_duplicates().reset_index(drop=True)\n    return df",
          susunKode: {
            question:
              "Susun fungsi clean_data yang membuang duplikat dan mereset index DataFrame.",
            potongan: [
              "def clean_data(raw_df):\n    df = raw_df.drop_duplicates()",
              ".reset_index(drop=True)\n    return df",
            ],
            pengecoh: [
              "def filter_data(raw_df):\n    df = raw_df.drop_duplicates()",
              ".reset_index(drop=False)\n    return df",
            ],
            pemisah: "",
            explanation:
              "Fungsi pipeline data membersihkan duplikat dan menata ulang indeks secara berurutan. Pengecoh `drop=False` adalah jebakan klasik yang sering menggoda karena mempertahankan indeks lama sebagai kolom baru, padahal kita ingin membuang indeks lama yang bolong.",
          },
        },
        {
          kind: "quiz",
          id: "da-2-kuis",
          title: "Kuis: Data Cleaning di pandas",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Perintah pandas manakah yang paling ringkas untuk memeriksa total nilai kosong (missing values) pada setiap kolom dalam DataFrame?",
              choices: [
                "df.describe().sum()",
                "df.isna().sum()",
                "df.dropna().count()",
                "df.dtypes.count()",
              ],
              answerIndex: 1,
              explanation: "df.isna().sum() (atau df.isnull().sum()) menghasilkan Series berisi jumlah nilai NaN di masing-masing kolom.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa statistik Median lebih disarankan dibanding Mean saat mengisi missing values (imputation) pada data gaji atau harga rumah yang memiliki pencilan tinggi?",
              choices: [
                "Karena Mean membutuhkan komputasi memori dua kali lebih besar di pandas",
                "Karena Median akan mengubah tipe data kolom menjadi float secara otomatis",
                "Karena Median tidak terpengaruh oleh pencilan (outlier) ekstrem yang condong (skewed)",
                "Karena Mean hanya bisa diterapkan pada data yang sudah diurutkan",
              ],
              answerIndex: 2,
              explanation: "Median mengukur nilai tengah sejati posisi data sehingga tahan (robust) terhadap distorsi nilai pencilan ekstrem.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Metode to_datetime pandas dengan opsi errors='coerce' akan mengubah nilai tanggal yang formatnya rusak/invalid menjadi apa?",
              choices: [
                "NaT (Not a Time)",
                "Nilai 0",
                "String kosong ''",
                "Tanggal default 1970-01-01",
              ],
              answerIndex: 0,
              explanation: "Opsi errors='coerce' mengubah nilai tanggal yang tidak dapat diurai secara aman menjadi NaT (Not a Time) tanpa menghentikan eksekusi program.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Berapa rumus rentang pencilan bawah (Lower Bound) pada metode Tukey IQR untuk mendeteksi outlier?",
              choices: [
                "Mean - (2 * Standar Deviasi)",
                "Median - IQR",
                "Q3 - Q1",
                "Q1 - 1.5 * IQR",
              ],
              answerIndex: 3,
              explanation: "Batas bawah outlier didefinisikan sebagai 1.5 kali IQR di bawah Kuartil Pertama (Q1), yaitu Q1 - 1.5 * IQR.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Apa perbedaan penting antara .replace({'jkt': 'jakarta'}) dan .map({'jkt': 'jakarta'}) saat menstandarisasi nilai kategori pada sebuah Series?",
              choices: [
                ".replace() hanya bisa digunakan pada kolom bertipe data numerik",
                ".map() akan mengubah semua nilai yang tidak ada di dalam dictionary menjadi NaN, sedangkan .replace() mempertahankan nilai aslinya",
                ".map() membutuhkan ekspresi regex sedangkan .replace() tidak mendukung regex",
                ".replace() menghapus seluruh baris data yang cocok secara otomatis",
              ],
              answerIndex: 1,
              explanation: "Jebakan umum: .map(dict) memetakan ulang seluruh elemen sehingga nilai yang tidak tercantum di kamus berubah jadi NaN. Sebaliknya, .replace(dict) hanya memperbarui nilai yang cocok dan membiarkan nilai lainnya tetap utuh.",
            },
          ],
        },
      ],
    },
    {
      slug: "statistik-praktis",
      title: "Statistik Praktis",
      description:
        "Tanpa matematika berat — cukup untuk tidak salah mengambil kesimpulan.",
      topics: [
        "Mean vs median: kapan rata-rata menipu",
        "Sebaran: std, persentil, distribusi",
        "Korelasi ≠ kausalitas (dengan contoh yang menampar)",
        "Sampling & bias: kenapa data yang ada bisa menyesatkan",
        "A/B test dasar: hipotesis, signifikansi secara intuitif",
        "Simpson's paradox & jebakan agregasi",
        "Cara jujur melaporkan ketidakpastian",
      ],
      items: [
        {
          kind: "materi",
          id: "da-3-m1",
          title: "Statistik Deskriptif & Inferensial Praktis untuk Analis",
          body: `# Statistik Deskriptif & Inferensial Praktis untuk Analis

Banyak orang mengira statistik di dunia kerja membutuhkan rumus kalkulus dan matematika abstrak. Padahal, tugas utama seorang **Data Analyst** adalah memiliki **intuisi statistik praktis** untuk memisahkan mana perubahan angka yang merupakan **sinyal bisnis asli** dan mana yang sekadar **derau acak (noise)**.

---

## 1. Pemusatan Data: Kapan Rata-Rata (Mean) Menipu?

Dalam rapat manajemen, kamu akan sering mendengar kalimat: *"Rata-rata penjualan kita naik!"*. Sebagai analis yang kritis, pertanyaan pertamamu adalah: *"Apakah kenaikan itu didorong oleh semua pelanggan, atau cuma satu pelanggan raksasa?"*.

- **Mean (Rata-rata)**: Menjumlahkan semua nilai dibagi jumlah sampel. Sangat rentan terdistorsi oleh pencilan (*outlier*).
- **Median (Nilai Tengah)**: Nilai yang tepat berada di posisi 50% setelah seluruh data diurutkan. Kebal terhadap pencilan.

> [!NOTE]
> **Studi Kasus Gaji Karyawan di Perusahaan**:
> Bayangkan sebuah tim berisi 6 orang:
> - 5 orang staf bergaji Rp 5.000.000, Rp 5.000.000, Rp 6.000.000, Rp 6.000.000, dan Rp 7.000.000.
> - 1 orang direktur bergaji Rp 200.000.000.
> 
> Bila dihitung:
> - **Mean**: Rp 38.166.666 (Memberikan ilusi bahwa karyawan di tim tersebut sangat sejahtera!).
> - **Median**: Rp 6.000.000 (Mencerminkan kenyataan riil penghasilan mayoritas staf).
> 
> **Aturan Praktis**: Jika selisih antara Mean dan Median sangat jauh, datamu condong (*skewed*). Gunakan **Median** untuk melaporkan nilai transaksi belanja, harga rumah, atau gaji.

---

## 2. Ukuran Sebaran: Standar Deviasi & Persentil (P95/P99)

Mengetahui nilai tengah saja belum cukup; kamu harus tahu seberapa jauh data menyebar di sekitar nilai tengah tersebut.

- **Standar Deviasi (std)**: Mengukur variabilitas data. Semakin kecil standar deviasi, semakin konsisten performa bisnismu.
- **Persentil (Quantile)**: Membagi data terurut menjadi 100 bagian sama besar.
  - **P50**: Median (50% data di bawah nilai ini).
  - **P90 / P95**: Nilai ambang batas 90% atau 95% data terendah.

### Mengapa Tim Teknologi Memantau Latency dengan P95?
Jika sistem pembayaran melaporkan rata-rata waktu loading 200 milidetik, manajemen mungkin merasa aman. Namun jika nilai **P95 latency** adalah 5.000 milidetik (5 detik), artinya **5 dari setiap 100 pengguna mengalami loading lambat parah** yang berisiko membatalkan transaksi checkout. Di dunia engineering dan produk digital, P95 dan P99 adalah standar emas pemantauan performa.

---

## 3. Korelasi Bukan Kausalitas (Correlation != Causation)

Koefisien korelasi Pearson (\`r\`) bernilai antara -1 hingga +1:
- \`+1\`: Hubungan linier positif sempurna.
- \`0\`: Tidak ada hubungan linier sama sekali.
- \`-1\`: Hubungan linier negatif sempurna.

\`\`\`text
[Penjualan Es Krim Meningkat] ────── (Korelasi Kuat r = 0.88) ──────► [Jumlah Korban Tenggelam Naik]
              ▲                                                                   ▲
              │                                                                   │
              └──────────────── [Faktor Ketiga: GELOMBANG PANAS] ────────────────┘
\`\`\`

Dua variabel yang bergerak searah belum tentu memiliki hubungan sebab-akibat langsung. Keduanya bisa dipicu oleh faktor pengganggu ketiga (*confounding variable*). Mengklaim bahwa melarang es krim akan menyelamatkan korban tenggelam adalah kesalahan analisis fatal yang sering menampar analis pemula di ruang rapat direksi.

---

## 4. Paradoks Simpson (Simpson's Paradox): Jebakan Agregasi

Paradoks Simpson terjadi ketika sebuah tren data yang konsisten pada sub-kelompok individual **berbalik arah secara dramatis** saat seluruh data digabungkan ke tingkat total.

### Bukti Nyata: A/B Testing Promosi E-Commerce
Manajemen menguji dua varian banner promo: Varian A (desain lama) vs Varian B (desain baru).

| Segmen Pengguna | Varian A (Lama) | Varian B (Baru) | Pemenang Segmen |
|---|---|---|---|
| **Pengguna Mobile** | **15.0%** (150 konversi / 1.000 visit) | **12.0%** (60 konversi / 500 visit) | **Varian A Menang!** |
| **Pengguna Desktop** | **30.0%** (300 konversi / 1.000 visit) | **28.0%** (700 konversi / 2.500 visit) | **Varian A Menang!** |
| **TOTAL KESELURUHAN** | **22.5%** (450 konversi / 2.000 visit) | **25.3%** (760 konversi / 3.000 visit) | **Varian B Terlihat Menang!** |

> [!CAUTION]
> **Mengapa Varian B Terlihat Menang di Tingkat Total?**
> Karena Varian B mendapatkan 83% traffic-nya dari pengguna Desktop yang secara alami memiliki daya beli dan konversi dasar lebih tinggi! Padahal di masing-masing platform, Varian A selalu mengalahkan Varian B. Jika analis hanya melihat angka total, perusahaan akan meluncurkan varian promo yang salah ke pasar.

---

## 5. A/B Testing Dasar & Cara Mengambil Keputusan

Eksperimen terkontrol adalah satu-satunya cara ilmiah membuktikan kausalitas.

1. **Hipotesis Nol ((H_0))**: Anggapan dasar bahwa tidak ada perbedaan efek antara varian kontrol dan perlakuan.
2. **Tingkat Signifikansi ((alpha = 0.05))**: Batas toleransi bahwa perbedaan yang kita lihat murni terjadi akibat kebetulan acak (maksimal 5%).
3. **P-Value**: Probabilitas mendapatkan hasil ekstrem jika (H_0) benar. Jika **p-value < 0.05**, kita menolak (H_0) dan menyatakan hasilnya signifikan secara statistik.

> [!WARNING]
> **Dosa Terbesar: The Peeking Problem**:
> Mengintip grafik p-value setiap jam dan menghentikan pengujian seketika saat p-value menyentuh angka 0.049 akan meningkatkan tingkat alarm palsu (*false positive rate*) dari 5% menjadi lebih dari 30%! Tetapkan ukuran sampel minimum di awal menggunakan kalkulator power analysis sebelum eksperimen dijalankan, dan jangan ambil kesimpulan sebelum sampel terpenuhi.

---

## 6. Melaporkan Ketidakpastian Secara Jujur

Data sampel selalu membawa ketidakpastian. Analis yang kredibel tidak pernah menyatakan kepastian mutlak tanpa konteks batas kesalahan (*Margin of Error*).

\`\`\`python
# Format Pelaporan Angka Estimasi yang Kredibel
rata_rata_konversi = 12.4
margin_error = 1.2
print(f"Estimasi Konversi: {rata_rata_konversi:.1f}% +/- {margin_error:.1f}% (95% Confidence Interval)")
# Output: Estimasi Konversi: 12.4% +/- 1.2% (95% Confidence Interval)
\`\`\`

Menyampaikan rentang estimasi membantu pemangku kepentingan memahami skenario terbaik (*best case*) dan skenario terburuk (*worst case*) sebelum mengalokasikan anggaran bisnis bernilai miliaran.

---

## 7. Jebakan & Bias Statistik (Common Pitfalls)

> [!WARNING]
> 1. **Survivorship Bias**: Menganalisis pelanggan setia yang bertahan tanpa memeriksa alasan pelanggan yang churn. Ini ibarat meneliti pesawat tempur Perang Dunia yang selamat untuk menebalkan bajanya di bagian yang tertembak, padahal pesawat yang tertembak di mesin tidak pernah kembali untuk diteliti!
> 2. **Selection Bias**: Melakukan survei aplikasi hanya kepada pengguna yang memberikan rating bintang 5 di Play Store.
> 3. **P-Hacking**: Menguji 50 metrik berbeda hingga menemukan 1 metrik yang secara kebetulan memiliki p-value < 0.05 lalu mengklaimnya sebagai keberhasilan fitur.

---

## 8. Kaitan ke Dunia Kerja

Manajemen puncak mengandalkan analis untuk mengambil keputusan bisnis bernilai tinggi. Dengan memahami statistik praktis, kamu melindungi perusahaan dari keputusan impulsif, membedakan tren bisnis nyata dari kebetulan statistik, dan membangun reputasi sebagai analis yang teliti dan berintegritas.`,
        },
        {
          kind: "step",
          id: "da-3-1",
          title: "Mean vs Median: Kapan Rata-Rata Menipu",
          explanation:
            "Mean (rata-rata) menjumlahkan semua nilai lalu membaginya, sehingga satu nilai ekstrem bisa menariknya jauh dari kenyataan. Median mengambil nilai tengah setelah data diurutkan, jadi ia tahan terhadap pencilan. Untuk data yang sebarannya miring — gaji, harga rumah, nilai transaksi — median hampir selalu menggambarkan 'orang kebanyakan' dengan lebih jujur. Kebiasaan yang menyelamatkan laporanmu: hitung keduanya, dan kalau selisihnya besar, itu tanda ada pencilan yang harus kamu jelaskan.",
          example: {
            code: "import pandas as pd\ngaji = pd.Series([5, 5, 6, 6, 7, 200])\nprint(gaji.mean())\nprint(gaji.median())",
            output: "38.166666666666664\n6.0",
            note: "Mean 38 juta padahal lima dari enam orang bergaji 5–7 juta. Itulah cara rata-rata menipu.",
          },
          instruction:
            "Series `harga` berisi harga rumah dalam juta rupiah dan ada satu rumah mewah yang jauh lebih mahal. Cetak nilai tengahnya memakai fungsi pandas yang tahan pencilan.",
          starterCode: "# Cetak ukuran pemusatan yang tahan pencilan\n",
          language: "text",
          tests: [
            {
              pattern: "print\\(\\s*harga\\.median\\(\\s*\\)\\s*\\)",
              message:
                "Cetak harga.median() — median tahan terhadap pencilan.",
            },
            {
              pattern: "\\.mean\\(",
              mustNotMatch: true,
              message:
                "Jangan pakai mean di sini; satu rumah mewah akan menariknya naik.",
            },
          ],
          solution: "print(harga.median())",
          susunKode: {
            question:
              "Susun pencetakan nilai median harga untuk mengantisipasi pencilan.",
            potongan: [
              "print(harga",
              ".median())",
            ],
            pengecoh: [
              "echo(harga",
              ".middle_val())",
            ],
            pemisah: "",
            explanation:
              "Nilai tengah data yang tahan pencilan dihitung dengan `.median()`. Pengecoh `.middle_val()` adalah metode fiktif yang keliru dan tidak dikenali oleh pandas Series saat pemrosesan data statistik pada lembar kerja analisis.",
          },
        },
        {
          kind: "step",
          id: "da-3-2",
          title: "Ukuran Sebaran: Standar Deviasi & Persentil",
          explanation:
            "Standar deviasi (`std`) mengukur seberapa jauh sebaran variasi data dari rata-ratanya. Sementara itu, persentil ke-95 (`quantile(0.95)`) menandakan bahwa 95% dari seluruh sampel berada di bawah angka tersebut. Di bidang statistik infrastruktur IT, persentil P95 dan P99 digunakan sebagai standar emas untuk mengukur ambang batas respon waktu server, mengabaikan 5% pencilan terburuk akibat gangguan jaringan sementara.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'latency': [10, 20, 30, 40, 100]})\np95 = df['latency'].quantile(0.95)\nprint(round(p95, 2))",
            output: "88.0",
            note: "P95 dan P99 adalah metrik standar pengujian latency di sistem backend.",
          },
          instruction:
            "Hitung nilai ambang batas persentil ke-95 (P95) dari kolom `'latency'` pada DataFrame `df` menggunakan fungsi persentil pandas, lalu simpan hasilnya ke variabel `p95`.",
          starterCode: "# Hitung persentil P95 latensi di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "\\.quantile\\(\\s*0\\.95\\s*\\)",
                        "message": "Persentil dihitung dengan `.quantile(<proporsi>)` — nilainya 0 sampai 1, jadi persentil ke-95 ditulis sebagai 0.95 (bukan 95)."
                      },
                      {
                        "pattern": "p95\\s*=",
                        "message": "Simpan hasilnya ke variabel. Untuk latensi, angka inilah yang dipakai di dunia kerja, bukan rata-rata: rata-rata menyembunyikan 5% pengguna yang paling lama menunggu."
                      }
                    ],
          solution: "p95 = df['latency'].quantile(0.95)",
          susunKode: {
            question:
              "Susun kalkulasi persentil ke-95 dari kolom latency.",
            potongan: [
              "p95 = ",
              "df['latency'].quantile(0.95)",
            ],
            pengecoh: [
              "p95 := ",
              "df['latency'].percentile(95)",
            ],
            pemisah: "",
            explanation:
              "Perhitungan persentil pada pandas menggunakan `.quantile(0.95)`. Pengecoh `.percentile(95)` berasal dari pustaka NumPy yang keliru jika dipanggil langsung pada pandas Series untuk analisis persentil pada data di platform.",
          },
        },
        {
          kind: "step",
          id: "da-3-3",
          title: "Korelasi Bukan Kausalitas",
          explanation:
            "Dua angka bisa naik-turun bersamaan tanpa yang satu menyebabkan yang lain. Penjualan es krim dan kasus tenggelam sama-sama naik di musim panas, tapi es krim tidak membuat orang tenggelam — ada faktor ketiga, yaitu cuaca. Di pekerjaan analis, kesalahan ini mahal: rekomendasi 'perbanyak diskon karena berkorelasi dengan penjualan' bisa saja salah arah kalau diskon dan penjualan sama-sama naik saat gajian. Korelasi hanya boleh menjadi kausalitas kalau ada eksperimen terkontrol, misalnya A/B test dengan pembagian acak.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'es_krim': [10, 20, 30], 'tenggelam': [1, 2, 3]})\nprint(df['es_krim'].corr(df['tenggelam']))",
            output: "1.0",
            note: "Korelasi 1.0 sempurna, tapi hubungan sebab-akibatnya tidak ada sama sekali.",
          },
          instruction:
            "DataFrame `df` punya kolom `iklan` dan `penjualan`. Cetak koefisien korelasi antara keduanya memakai method `.corr()` — ingat, angka tinggi belum membuktikan iklan menyebabkan penjualan.",
          starterCode: "# Cetak korelasi antara kolom iklan dan penjualan\n",
          language: "text",
          tests: [
            {
              pattern: "df\\[\\s*['\"]iklan['\"]\\s*\\]\\.corr\\(\\s*df\\[\\s*['\"]penjualan['\"]\\s*\\]\\s*\\)",
              message:
                "Pakai df['iklan'].corr(df['penjualan']).",
            },
            {
              pattern: "print\\(",
              message:
                "Cetak hasilnya dengan print().",
            },
          ],
          solution: "print(df['iklan'].corr(df['penjualan']))",
          susunKode: {
            question:
              "Susun pencetakan korelasi antara kolom iklan dan penjualan.",
            potongan: [
              "print(df['iklan']",
              ".corr(df['penjualan']))",
            ],
            pengecoh: [
              "echo(df['iklan']",
              ".correlation(df['penjualan']))",
            ],
            pemisah: "",
            explanation:
              "Korelasi Pearson antar dua kolom dihitung dengan `.corr()`. Pengecoh `.correlation()` adalah nama metode fiktif yang keliru dan memicu AttributeError saat dijalankan pada DataFrame pandas untuk eksplorasi data laporan.",
          },
        },
        {
          kind: "step",
          id: "da-3-4",
          title: "Sampling & Bias Seleksi",
          explanation:
            "Kesimpulanmu hanya sebaik data yang kamu pakai. Kalau survei kepuasan hanya diisi pelanggan yang masih aktif, pelanggan yang kecewa sudah pergi dan suaranya tidak pernah terhitung — inilah survivorship bias. Sampel acak (random sampling) mengurangi risiko itu karena setiap anggota populasi punya peluang sama untuk terpilih. Sebelum menganalisis, biasakan bertanya: siapa yang TIDAK ada di data ini, dan apakah ketidakhadiran mekah mengubah kesimpulan?",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'id': range(1, 101)})\nsampel = df.sample(n=10, random_state=42)\nprint(len(sampel))",
            output: "10",
            note: "random_state membuat sampel acakmu bisa direproduksi — penting agar hasil analisis bisa diperiksa ulang.",
          },
          instruction:
            "DataFrame `pelanggan` berisi 5.000 baris. Ambil sampel acak sebanyak 200 baris dan simpan ke variabel `sampel`, dengan `random_state=42` agar hasilnya bisa diulang orang lain.",
          starterCode: "# Ambil sampel acak yang bisa direproduksi\n",
          language: "text",
          tests: [
            {
              pattern: "sampel\\s*=\\s*pelanggan\\.sample\\(",
              message:
                "Pakai pelanggan.sample(...) lalu simpan ke variabel sampel.",
            },
            {
              pattern: "n\\s*=\\s*200",
              message:
                "Ambil 200 baris dengan n=200.",
            },
            {
              pattern: "random_state\\s*=\\s*42",
              message:
                "Sertakan random_state=42 agar hasilnya bisa diulang.",
            },
          ],
          solution: "sampel = pelanggan.sample(n=200, random_state=42)",
          susunKode: {
            question:
              "Susun pengambilan sampel acak 200 baris pelanggan dengan seed acak 42.",
            potongan: [
              "sampel = ",
              "pelanggan.sample(n=200, random_state=42)",
            ],
            pengecoh: [
              "sampel := ",
              "pelanggan.sample(count=200, seed=42)",
            ],
            pemisah: "",
            explanation:
              "Pengambilan sampel acak di pandas menggunakan parameter `n` dan `random_state`. Pengecoh `count` dan `seed` adalah nama parameter fiktif yang keliru di pandas untuk eksplorasi data secara teratur pada modul ini secara langsung.",
          },
        },
        {
          kind: "step",
          id: "da-3-5",
          title: "Pengantar A/B Testing & P-Value",
          explanation:
            "A/B Testing membandingkan dua variasi fitur (Kontrol vs Varian B) secara acak untuk membuktikan mana yang berkinerja lebih unggul. Indikator `p-value` mengukur probabilitas perbedaan hasil tersebut terjadi hanya karena kebetulan acak. Ambang batas standar industri adalah `p_value < 0.05` (alpha 5%), yang artinya ada keyakinan 95% bahwa perbedaan performa varian B bersifat signifikan secara statistik.",
          example: {
            code: "p_value = 0.02\nif p_value < 0.05:\n    print('Statistically Significant')",
            output: "Statistically Significant",
            note: "Nilai alpha standar industri untuk signifikansi adalah 5% (0.05).",
          },
          instruction:
            "Sebuah pengujian A/B menghasilkan angka probabilitas acak pada variabel `p_value`. Tuliskan blok pengondisian `if` untuk mengevaluasi apakah `p_value` lebih kecil dari batas signifikansi standar industri (0.05). Jika terpenuhi, cetak string `'Statistically Significant'`.",
          starterCode: "# Evaluasi signifikansi p_value pada batas alpha 0.05\n",
          language: "text",
          tests: [
            {
              pattern: "if\\s+p_value\\s*<\\s*0\\.05\\s*:",
              message: "Evaluasi pengondisian apakah `p_value < 0.05`.",
            },
            {
              pattern: "print\\(\\s*[\"']Statistically Significant[\"']\\s*\\)",
              message: "Cetak string `'Statistically Significant'` saat kondisi terpenuhi.",
            },
          ],
          solution: 'if p_value < 0.05:\n    print("Statistically Significant")',
          susunKode: {
            question:
              "Susun pemeriksaan p_value < 0.05 untuk mencetak Statistically Significant.",
            potongan: [
              "if p_value < 0.05:\n",
              "    print(\"Statistically Significant\")",
            ],
            pengecoh: [
              "if (p_value < 0.05) {\n",
              "    echo(\"Statistically Significant\");\n}",
            ],
            pemisah: "",
            explanation:
              "Uji signifikansi statistik memeriksa `p_value < 0.05`. Pengecoh kurung kurawal `{}` dan `echo` adalah sintaks bahasa lain yang keliru jika diterapkan pada skrip Python untuk analisis statistik di proyek BiLearn saat ini.",
          },
        },
        {
          kind: "step",
          id: "da-3-6",
          title: "Simpson's Paradox: Jebakan Agregasi",
          explanation:
            "Simpson's paradox terjadi saat tren pada data gabungan berkebalikan dengan tren di setiap kelompoknya. Contoh nyatanya: obat A terlihat lebih unggul secara total, tapi ketika dipisah menjadi pasien ringan dan berat, obat B justru lebih unggul di kedua kelompok — karena komposisi pasiennya timpang. Akibatnya keputusan yang diambil dari angka total bisa berlawanan dengan kenyataan. Pertahanan paling murah adalah kebiasaan: setiap kali melaporkan angka agregat, pecah dulu berdasarkan kelompok penting seperti wilayah, segmen, atau periode.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({\n    'grup': ['A', 'A', 'B', 'B'],\n    'kanal': ['web', 'apps', 'web', 'apps'],\n    'konversi': [0.10, 0.30, 0.12, 0.32],\n})\nprint(df.groupby('grup')['konversi'].mean())",
            output: "grup\nA    0.20\nB    0.22\nName: konversi, dtype: float64",
          },
          instruction:
            "DataFrame `df` berisi kolom `wilayah`, `segmen`, dan `konversi`. Sebelum percaya pada angka total, hitung rata-rata konversi per pasangan `wilayah` dan `segmen`, lalu cetak hasilnya.",
          starterCode: "# Pecah agregat berdasarkan dua kelompok sekaligus\n",
          language: "text",
          tests: [
            {
              pattern: "groupby\\(\\s*\\[\\s*['\"]wilayah['\"]\\s*,\\s*['\"]segmen['\"]\\s*\\]\\s*\\)",
              message:
                "Kelompokkan berdasarkan dua kolom: groupby(['wilayah', 'segmen']).",
            },
            {
              pattern: "\\[\\s*['\"]konversi['\"]\\s*\\]\\s*\\.mean\\(\\s*\\)",
              message:
                "Hitung rata-rata kolom konversi.",
            },
            {
              pattern: "print\\(",
              message:
                "Cetak hasilnya dengan print().",
            },
          ],
          solution: "print(df.groupby(['wilayah', 'segmen'])['konversi'].mean())",
          susunKode: {
            question:
              "Susun pencetakan rata-rata konversi berdasarkan grup wilayah dan segmen.",
            potongan: [
              "print(df.groupby(['wilayah', 'segmen'])",
              "['konversi'].mean())",
            ],
            pengecoh: [
              "print(df.group_by(['wilayah', 'segmen'])",
              "['konversi'].avg())",
            ],
            pemisah: "",
            explanation:
              "Agregasi multi-kolom memakai `groupby([...])['konversi'].mean()`. Pengecoh `group_by` dan `avg` adalah sintaks keliru yang sering menjebak pemula di pandas saat mengelompokkan data secara mendasar pada laporan analisis.",
          },
        },
        {
          kind: "step",
          id: "da-3-7",
          title: "Melaporkan Ketidakpastian dengan Jujur",
          explanation:
            "Angka hasil sampel tidak pernah persis sama dengan angka populasi, jadi melaporkan '43% pelanggan puas' tanpa keterangan apa pun memberi kesan pasti yang menyesatkan. Cara jujur menuliskannya adalah menyertakan margin of error: '43% ± 3%'. Semakin kecil sampelnya, semakin lebar rentangnya — itulah kenapa survei 30 orang tidak boleh dipakai untuk keputusan besar. Menyebut ketidakpastian bukan tanda lemah; justru itu yang membedakan analis yang dipercaya dari yang sekadar meyakinkan.",
          example: {
            code: "rata = 43.0\nmargin = 3.2\nprint(f\"{rata:.1f}% +/- {margin:.1f}%\")",
            output: "43.0% +/- 3.2%",
          },
          instruction:
            "Kamu punya variabel `rata` dan `margin`. Cetak hasilnya dalam satu baris berbentuk `12.5% +/- 1.4%` (satu angka di belakang koma) memakai f-string.",
          starterCode: "# Laporkan hasil beserta margin of error-nya\n",
          language: "text",
          tests: [
            {
              pattern: "print\\(\\s*f[\"']",
              message:
                "Pakai f-string di dalam print().",
            },
            {
              pattern: "\\{\\s*rata[^}]*\\}%",
              message:
                "Sertakan nilai rata diikuti tanda persen.",
            },
            {
              pattern: "\\+/-|±",
              message:
                "Sertakan penanda margin, misalnya +/-.",
            },
            {
              pattern: "\\{\\s*margin[^}]*\\}%",
              message:
                "Sertakan nilai margin diikuti tanda persen.",
            },
          ],
          solution: "print(f\"{rata:.1f}% +/- {margin:.1f}%\")",
          susunKode: {
            question:
              "Susun pencetakan rentang estimasi dengan format f-string margin.",
            potongan: [
              "print(f\"{rata:.1f}% ",
              "+/- {margin:.1f}%\")",
            ],
            pengecoh: [
              "print(\"{rata}% ",
              "+- {margin}%\")",
            ],
            pemisah: "",
            explanation:
              "Format persentase desimal dan margin kesalahan ditulis `f\"{rata:.1f}% +/- {margin:.1f}%\"`. Pengecoh tanpa prefiks f-string keliru karena variabel tidak terevaluasi pada output teks laporan analisis statistik.",
          },
        },
        {
          kind: "quiz",
          id: "da-3-kuis",
          title: "Kuis: Statistik Praktis",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Pada pengujian A/B testing dengan tingkat signifikansi standar (alpha = 0.05), kondisi manakah yang menunjukkan bahwa perbedaan metrik konversi antar varian signifikan secara statistik?",
              choices: [
                "Nilai p-value lebih besar dari 0.05",
                "Nilai p-value lebih kecil dari 0.05",
                "Nilai korelasi Pearson mendekati 0.00",
                "Jumlah sampel varian A dan B tepat sama tanpa selisih",
              ],
              answerIndex: 1,
              explanation: "Nilai p-value < 0.05 menandakan probabilitas perbedaan metrik konversi terjadi murni karena faktor acak kurang dari 5%, sehingga hipotesis nol ditolak.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa definisi dari Paradoks Simpson (Simpson's Paradox) dalam analisis statistik data?",
              choices: [
                "Suatu korelasi numerik yang berubah menjadi nol ketika ukuran sampel diperbesar",
                "Rata-rata populasi yang selalu lebih kecil daripada median sampel",
                "Tren data yang konsisten pada sub-kelompok individual berbalik arah saat seluruh data digabungkan",
                "Selisih nilai mean dan deviasi standar yang melebihi batas 3 sigma",
              ],
              answerIndex: 2,
              explanation: "Paradoks Simpson terjadi saat variabel perancu (confounding factor) tersembunyi mendistorsi data agregat, sehingga kesimpulan di tingkat total bertolak belakang dengan tiap sub-kelompok.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Metrik sebaran persentil manakah yang paling umum digunakan dalam infrastruktur server backend untuk mengukur ambang batas latency 95% pengguna teratas?",
              choices: [
                "P95 (Persentil ke-95)",
                "Mean (Rata-rata aritmatika)",
                "Modus frekuensi terbanyak",
                "Minimum latency jaringan",
              ],
              answerIndex: 0,
              explanation: "P95 memastikan 95% pengguna mengalami waktu respons di bawah angka tersebut, mengekspos pengalaman terburuk yang sering tertutupi oleh nilai rata-rata.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Dua variabel memiliki koefisien korelasi Pearson yang sangat tinggi (r = 0.88). Pernyataan analitik manakah yang paling tepat?",
              choices: [
                "Peningkatan pada variabel pertama terbukti menyebabkan kenaikan pada variabel kedua",
                "Variabel kedua dapat dihapus dari basis data karena informasinya identik",
                "Kedua variabel bergerak beriringan, namun belum membuktikan hubungan sebab-akibat langsung tanpa eksperimen terkontrol",
                "Nilai p-value pengujian otomatis bernilai tepat 1.00",
              ],
              answerIndex: 2,
              explanation: "Korelasi hanyalah indikasi hubungan linier. Tanpa pengujian eksperimen A/B atau kontrol variabel luar, kita tidak bisa mengklaim kausalitas.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Bagaimana cara terbaik melaporkan estimasi metrik bisnis (misal proyeksi retensi pengguna) kepada pihak manajemen secara transparan dan bertanggung jawab?",
              choices: [
                "Memberikan jaminan pasti angka tunggal tersebut 100% akurat",
                "Melaporkan estimasi titik utama diikuti rentang margin of error atau interval kepercayaannya (misal: 64% +/- 3%)",
                "Hanya memilih angka perkiraan tertinggi yang paling optimis",
                "Mengabaikan data sampel yang variansinya besar tanpa pemberitahuan",
              ],
              answerIndex: 1,
              explanation: "Menyampaikan rentang margin of error mencerminkan kedewasaan analitis dan kejujuran terkait ketidakpastian yang tidak dapat dipisahkan dalam estimasi sampel.",
            },
          ],
        },
      ],
    },
    {
      slug: "visualisasi",
      title: "Visualisasi Data",
      description:
        "matplotlib & seaborn — chart yang menjelaskan, bukan menghias.",
      topics: [
        "Anatomi figure matplotlib: axes, label, judul",
        "Chart inti: line, bar, histogram, scatter, box",
        "seaborn untuk chart statistik cepat",
        "Memilih chart dari jenis pertanyaan",
        "Prinsip kejujuran: sumbu, skala, cherry-picking",
        "Styling untuk presentasi: warna, anotasi, decluttering",
        "Menyimpan & menyematkan chart di laporan",
      ],
      items: [
        {
          kind: "materi",
          id: "da-4-m1",
          title: "Prinsip & Teknik Visualisasi Data Efektif",
          body: `# Prinsip & Teknik Visualisasi Data Efektif

Visualisasi data bukan sekadar menghias slide presentasi dengan grafik berwarna-warni. **Visualisasi Data yang Efektif** adalah instrumen komunikasi visual yang memandu audiens memahami pola rumit dan mengambil keputusan bisnis yang tepat dalam hitungan detik.

---

## 1. Anatomi Matplotlib: Figure vs Axes

Matplotlib menggunakan hierarki berorientasi objek (*Object-Oriented API*). Memahami hierarki ini membedakan analis pemula yang bingung mengatur tata letak dengan analis profesional:

- **Figure**: Kanvas utama luar (bingkai gambar keseluruhan jendela/kertas).
- **Axes**: Sub-area plot di dalam Figure tempat sumbu koordinat X/Y, batang diagram, garis kurva, dan anotasi digambar.

\`\`\`python
import matplotlib.pyplot as plt

# Inisialisasi kanvas berorientasi objek standar industri
fig, ax = plt.subplots(figsize=(10, 5), dpi=300)

# Gambar grafik langsung ke objek ax
ax.plot(df['bulan'], df['omset'], color='#1f77b4', linewidth=2.5, label='Omset 2026')
ax.set_title('Tren Pertumbuhan Omset Bulanan', fontsize=14, pad=15)
ax.set_xlabel('Bulan Transaksi', fontsize=11)
ax.set_ylabel('Total Omset (Juta Rp)', fontsize=11)

# Simpan dengan resolusi tinggi tanpa teks terpotong
plt.savefig('tren_omset.png', dpi=300, bbox_inches='tight')
\`\`\`

Pendekatan \`fig, ax\` memungkinkan kamu membuat multi-panel grafik (*subplots*) berdampingan secara mandiri dalam satu kanvas tanpa saling menimpa.

---

## 2. Pohon Keputusan Pemilihan Jenis Chart (Chart Chooser)

Banyak analis membuat grafik yang keliru bukan karena salah koding, melainkan karena **salah memilih bentuk diagram**.

\`\`\`text
Pertanyaan Analisis Bisnis yang Ingin Dijawab?
 ├── 1. Perubahan/Tren Sepanjang Waktu Kontinu? ────► Line Chart (ax.plot)
 │      Contoh: Omset harian 365 hari, churn rate bulanan
 │
 ├── 2. Perbandingan Nominal Antar Kategori?
 │      ├── Kategori <= 5 nama pendek ─────────────► Vertical Bar Chart (ax.bar)
 │      └── Kategori > 5 atau label nama panjang ──► Horizontal Bar Chart (ax.barh)
 │           Contoh: Peringkat penjualan 38 provinsi di Indonesia
 │
 ├── 3. Hubungan / Korelasi 2 Variabel Kontinu? ───► Scatter Plot (ax.scatter)
 │      Contoh: Biaya iklan digital vs jumlah unduhan aplikasi
 │
 ├── 4. Sebaran Distribusi 1 Variabel Numerik? ────► Histogram (ax.hist)
 │      Contoh: Distribusi usia pelanggan atau nominal belanja keranjang
 │
 └── 5. Perbandingan Sebaran Multi-Grup & Outlier? ─► Box Plot / Violin Plot (sns.boxplot)
        Contoh: Perbandingan sebaran gaji antar departemen
\`\`\`

---

## 3. Matriks Komparasi Library Visualisasi Python

| Library | Filosofi Utama | Kapan Wajib Digunakan? |
|---|---|---|
| **Matplotlib** | Kontrol tingkat rendah (*low-level control*) penuh pada setiap piksel, sumbu, dan teks | Laporan cetak resmi, penataan multi-axes kompleks, kustomisasi visual kustom |
| **Seaborn** | Visualisasi statistik tingkat tinggi terintegrasi langsung dengan DataFrame pandas | Eksplorasi korelasi cepat (\`sns.heatmap\`), perbandingan distribusi kategori (\`sns.boxplot\`) |
| **Plotly** | Visualisasi interaktif berbasis JavaScript (hover tooltip, zoom, pan) | Presentasi web dinamis, aplikasi analitik interaktif (Streamlit/Dash) |

---

## 4. Prinsip Data-Ink Ratio (Edward Tufte) & Decluttering

Pakar visualisasi data Edward Tufte memperkenalkan konsep **Data-Ink Ratio**: porsi tinta pada grafik yang digunakan untuk menyampaikan informasi data sesungguhnya, dibagi total tinta yang dihabiskan.

> **Tujuan Analis**: Maksimalkan Data-Ink Ratio dengan membuang seluruh elemen visual yang tidak informatif (*Chart Junk*)!

\`\`\`text
[Grafik Berantakan / Chart Junk]          [Grafik Bersih / Decluttered]
┌──────────────────────────────┐          ┌──────────────────────────────┐
│ [3D Shadow] [Gridline Hitam] │   ===>   │ Omset naik 24% di Q2         │  <- Action Headline
│ [Warna Pelangi Tiap Batang]  │          │ █                            │
│ [Border Kotak Tebal Sekeliling│          │ █   █                        │  <- Batang Fokus Berwarna
│ [Legenda Terpisah di Pojok]  │          │ ░   ░   ░                  │  <- Batang Konteks Abu-abu
└──────────────────────────────┘          └──────────────────────────────┘
\`\`\`

### Langkah Praktis Decluttering:
1. **Hapus Border Atas dan Kanan**: \`ax.spines['top'].set_visible(False)\` dan \`ax.spines['right'].set_visible(False)\`.
2. **Lembutkan Garis Grid**: Jangan gunakan gridline hitam pekat; gunakan warna abu-abu muda tipis (\`alpha=0.3\`) hanya pada sumbu utama.
3. **Pelabelan Langsung (Direct Labeling)**: Tuliskan label nama kategori tepat di atas batang atau di ujung garis kurva daripada memaksa mata audiens melompat bolak-balik melihat kotak legenda di sudut.

---

## 5. Psikologi Persepsi Visual & Atribut Pra-atentif

Otak manusia memproses **Atribut Pra-atentif (Preattentive Attributes)** seperti warna, posisi, dan ukuran dalam waktu kurang dari 250 milidetik sebelum kesadaran aktif bekerja.

- **Aturan Warna 90/10**: Gunakan warna abu-abu netral (\`#d3d3d3\` atau \`#708090\`) untuk 90% data latar belakang sebagai konteks pembanding. Gunakan **1 warna aksen kontras** (misal: biru tua atau oranye) HANYA untuk titik data atau kategori penting yang ingin kamu diskusikan.
- **Anotasi Presisi**: Gunakan \`ax.annotate('Promo Flash Sale', xy=(x_val, y_val), xytext=(...), arrowprops=...)\` untuk menjelaskan peristiwa bisnis penting di balik lonjakan grafik.

---

## 6. Etika Visual: Sumbu Y Wajib Mulai dari 0 (Zero Baseline)

> [!IMPORTANT]
> **Aturan Wajib Bar Chart**: Sumbu vertikal (Y) pada diagram batang **HARUS SELALU DIMULAI DARI ANGKA 0** (\`ax.set_ylim(bottom=0)\`).
> Pada grafik batang, audiens menilai besaran kuantitas dari panjang fisik batang tersebut. Memotong sumbu Y (misal grafik dimulai dari 95 untuk membandingkan 96 vs 100) membuat perbedaan kecil tampak 500% lebih besar secara visual. Ini adalah bentuk manipulasi data yang merusak integritas profesional analis.
> *(Catatan: Line Chart diperbolehkan tidak dimulai dari 0 jika tujuannya memantau fluktuasi halus seperti indeks harga saham, asalkan diberi keterangan sumbu yang sangat jelas).*

---

## 7. Jebakan & Kesalahan Umum (Common Pitfalls)

> [!WARNING]
> 1. **Pie Chart dengan Terlalu Banyak Kategori**: Mata manusia sangat buruk dalam membedakan sudut lingkaran jika irisannya lebih dari 5. Gantilah dengan Horizontal Bar Chart!
> 2. **Grafik 3D Pseudo-Volume**: Efek 3D mendistorsi sudut perspektif sehingga batang di depan terlihat lebih besar daripada batang di belakang meski nilainya lebih kecil.
> 3. **Lupa Memberi Satuan pada Label Sumbu**: Menulis label angka "10, 20, 30" tanpa keterangan apakah satuannya Juta Rupiah, Ribu Unit, atau Persen membuat audiens menebak-nebak.

---

## 8. Kaitan ke Dunia Kerja: Visualisasi untuk Presentasi Direksi

Grafik yang disimpan dengan resolusi tinggi (\`plt.savefig('output.png', dpi=300, bbox_inches='tight')\`) adalah aset utama dokumen rapat pimpinan. Analis yang mampu menyajikan grafik bersih (*decluttered*) dengan pesan bisnis instan selalu mendapatkan kepercayaan lebih tinggi dari jajaran manajemen dibandingkan analis yang menampilkan grafik standar bawaan sistem yang berantakan.`,
        },
        {
          kind: "step",
          id: "da-4-1",
          title: "Anatomi Figure Matplotlib (fig, ax)",
          explanation:
            "Matplotlib membagi struktur grafik menjadi **Figure** (kanvas luar) dan **Axes** (area plot di dalam kanvas). Menggunakan sintaks berbasis objek `fig, ax = plt.subplots()` memberi kontrol presisi tinggi saat kita perlu memanipulasi judul, sumbu, dan subplots multi-grafik secara independen di laporan analitik. Pendekatan ini merupakan standar industri dibanding fungsi global `plt.plot()`.",
          example: {
            code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots(figsize=(8, 4))\nprint(type(fig).__name__, type(ax).__name__)",
            output: "Figure AxesSubplot",
            note: "Pendekatan fig, ax mempermudah pembuatan subplots multi-grafik.",
          },
          instruction:
            "Tuliskan pernyataan Python Matplotlib untuk menginisialisasi objek Figure dan Axes menggunakan `plt.subplots()`.",
          starterCode: "# Tulis plt.subplots di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "plt\\.subplots\\(\\)",
                        "message": "Cara yang dianjurkan membuat grafik adalah `plt.subplots()`, yang mengembalikan dua objek sekaligus."
                      },
                      {
                        "pattern": "fig\\s*,\\s*ax\\s*=",
                        "message": "Ambil keduanya dengan tuple unpacking: `fig` untuk keseluruhan kanvas (ukuran, penyimpanan), `ax` untuk area gambarnya (judul, sumbu, data). Gaya `plt.plot()` langsung terlihat lebih pendek tapi bergantung pada \"grafik aktif\" yang membingungkan begitu ada lebih dari satu grafik."
                      }
                    ],
          solution: "fig, ax = plt.subplots()",
          susunKode: {
            question:
              "Susun inisialisasi figure dan axes kanvas grafik matplotlib.",
            potongan: [
              "fig, ax = ",
              "plt.subplots()",
            ],
            pengecoh: [
              "fig, ax := ",
              "plt.create_figure()",
            ],
            pemisah: "",
            explanation:
              "Membuat kanvas grafik matplotlib menggunakan `fig, ax = plt.subplots()`. Pengecoh `plt.create_figure()` adalah nama fungsi fiktif yang keliru dipakai untuk inisialisasi visualisasi di skrip Python secara visual di BiLearn.",
          },
        },
        {
          kind: "step",
          id: "da-4-2",
          title: "Jenis Chart Inti (Line, Bar, Hist, Scatter, Box)",
          explanation:
            "Pemilihan jenis grafik ditentukan oleh pertanyaan bisnis yang ingin dijawab. Gunakan `ax.plot()` untuk tren deret waktu, `ax.bar()` untuk perbandingan kategori, `ax.hist()` untuk sebaran distribusi data, `ax.scatter()` untuk mengekspos korelasi 2 variabel numerik kontinu, dan boxplot untuk mendeteksi pencilan. Menggunakan grafik yang tidak sesuai dengan jenis data akan membuat audiens kesulitan menangkap insight.",
          example: {
            code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.scatter([1, 2], [10, 20])\nprint(len(ax.collections))",
            output: "1",
            note: "Scatter plot sangat ideal untuk melihat pola korelasi 2 variabel kontinu.",
          },
          instruction:
            "Tuliskan perintah Matplotlib untuk membuat Scatter Plot dari kolom `'x'` dan `'y'` pada `df` menggunakan `ax.scatter()`.",
          starterCode: "# Tulis ax.scatter di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "ax\\.scatter\\(",
                        "message": "Diagram sebar digambar dengan method `.scatter()` pada objek axes-nya — bukan pada `plt`, supaya jelas grafik mana yang dituju."
                      },
                      {
                        "pattern": "df\\[\\s*['\"]x['\"]\\s*\\]\\s*,\\s*df\\[\\s*['\"]y['\"]\\s*\\]",
                        "message": "Argumennya dua deret: nilai sumbu horizontal, lalu vertikal. Panjang keduanya harus sama."
                      }
                    ],
          solution: "ax.scatter(df['x'], df['y'])",
          susunKode: {
            question:
              "Susun pembuatan scatter plot dari kolom x dan y pada ax.",
            potongan: [
              "ax.scatter(",
              "df['x'], df['y'])",
            ],
            pengecoh: [
              "ax.plot_dots(",
              "df['col_x'], df['col_y'])",
            ],
            pemisah: "",
            explanation:
              "Grafik sebar titik pada matplotlib dibuat dengan `ax.scatter(x, y)`. Pengecoh `ax.plot_dots()` adalah metode fiktif yang keliru dan tidak ada di matplotlib untuk plotting data secara visual pada proyek analisis.",
          },
        },
        {
          kind: "step",
          id: "da-4-3",
          title: "Visualisasi Statistik Cepat dengan Seaborn",
          explanation:
            "Seaborn adalah wrapper tingkat tinggi di atas Matplotlib yang mengintegrasikan pembuatan chart statistik langsung dari DataFrame pandas. Dengan method seperti `sns.heatmap(df.corr(), annot=True)`, kamu dapat memetakan matriks korelasi seluruh variabel secara visual dengan pewarnaan otomatis dalam satu baris kode. Opsi `annot=True` menampilkan nilai angka korelasi presisi di atas setiap sel warna.",
          example: {
            code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})\nax = sns.heatmap(df.corr(), annot=True)\nprint(ax.get_title())",
            output: "Correlation Heatmap",
            note: "Boxplot memperlihatkan nilai median, quartiles, dan outlier sekaligus.",
          },
          instruction:
            "Tuliskan perintah Seaborn untuk menampilkan Heatmap korelasi `df.corr()` dengan opsi `annot=True`.",
          starterCode: "# Tulis sns.heatmap di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "sns\\.heatmap\\(",
                        "message": "Seaborn menggambar peta panas dengan `sns.heatmap(<matriks>)`."
                      },
                      {
                        "pattern": "df\\.corr\\(\\)",
                        "message": "Matriksnya diperoleh dari `.corr()`, yang menghitung korelasi antar kolom numerik. Ingat: korelasi bukan sebab-akibat, dan kolom teks diabaikan begitu saja."
                      },
                      {
                        "pattern": "annot\\s*=\\s*True",
                        "message": "Tambahkan `annot=True` agar angkanya tercetak di setiap kotak — tanpa itu pembaca hanya menebak dari warna."
                      }
                    ],
          solution: "sns.heatmap(df.corr(), annot=True)",
          susunKode: {
            question:
              "Susun visualisasi heatmap korelasi seaborn dengan annot=True.",
            potongan: [
              "sns.heatmap(",
              "df.corr(), annot=True)",
            ],
            pengecoh: [
              "sns.correlation_matrix(",
              "df.corr(), show_num=True)",
            ],
            pemisah: "",
            explanation:
              "Peta kalor korelasi di seaborn dibuat via `sns.heatmap(df.corr(), annot=True)`. Pengecoh `correlation_matrix` adalah nama fungsi fiktif yang keliru untuk visualisasi korelasi pada dataset yang sedang dianalisis saat ini.",
          },
        },
        {
          kind: "step",
          id: "da-4-4",
          title: "Prinsip Kejujuran Visual: Sumbu Y Mulai dari 0",
          explanation:
            "JANGAN memotong sumbu Y pada Bar Chart! Selalu pastikan batas bawah sumbu Y dimulai dari angka 0 menggunakan `ax.set_ylim(bottom=0)`. Memotong sumbu Y memanipulasi tinggi batang secara visual, membuat perbedaan kecil (seperti 98% vs 99%) tampak seolah lonjakan raksasa. Menjaga skala sumbu Y yang jujur adalah etika paling fundamental seorang analis data terpercaya.",
          example: {
            code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.set_ylim(bottom=0)\nprint(ax.get_ylim()[0])",
            output: "0.0",
            note: "Kejujuran data adalah etika utama seorang Data Analyst.",
          },
          instruction:
            "Tuliskan perintah Matplotlib `ax.set_ylim()` untuk memastikan batas bawah sumbu Y dimulai dari angka `0`.",
          starterCode: "# Tulis set_ylim di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "ax\\.set_ylim\\(",
                        "message": "Batas sumbu diatur dengan `ax.set_ylim(...)`."
                      },
                      {
                        "pattern": "bottom\\s*=\\s*0",
                        "message": "Mulai sumbu vertikal dari nol untuk grafik batang. Memulainya dari angka lain melebih-lebihkan selisih secara visual — itu manipulasi paling umum di grafik berita, dan hal pertama yang dicari reviewer pada dashboard-mu."
                      }
                    ],
          solution: "ax.set_ylim(bottom=0)",
          susunKode: {
            question:
              "Susun batas minimum sumbu vertikal ke 0 pada axes ax.",
            potongan: [
              "ax.set_ylim(",
              "bottom=0)",
            ],
            pengecoh: [
              "ax.set_y_axis(",
              "min=0)",
            ],
            pemisah: "",
            explanation:
              "Mengatur batas sumbu Y agar mulai dari 0 memakai `ax.set_ylim(bottom=0)`. Pengecoh `set_y_axis` adalah metode fiktif yang keliru pada matplotlib axes saat membuat grafik yang jujur dan informatif untuk laporan.",
          },
        },
        {
          kind: "step",
          id: "da-4-5",
          title: "Anotasi: Menunjuk Titik yang Ingin Kamu Bicarakan",
          explanation:
            "Grafik yang bagus tidak membuat pembacanya mencari sendiri bagian pentingnya. Anotasi menempelkan keterangan langsung pada titik data — misalnya menandai bulan saat penjualan anjlok beserta sebabnya. Di matplotlib, `ax.annotate(teks, xy=(x, y))` menempatkan teks pada koordinat data yang kamu tunjuk. Aturan praktisnya: satu grafik cukup satu anotasi utama; kalau semuanya ditandai, tidak ada yang menonjol.",
          example: {
            code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [10, 4, 9])\nax.annotate('Server down', xy=(2, 4))\nprint(len(ax.texts))",
            output: "1",
          },
          instruction:
            "Grafik penjualan sudah ada di objek `ax`. Tambahkan anotasi bertuliskan `Stok habis` tepat pada koordinat x=5 dan y=120.",
          starterCode: "# Tandai titik penting pada grafik\n",
          language: "text",
          tests: [
            {
              pattern: "ax\\.annotate\\(",
              message:
                "Pakai ax.annotate(...).",
            },
            {
              pattern: "['\"]Stok habis['\"]",
              message:
                "Teks anotasinya 'Stok habis'.",
            },
            {
              pattern: "xy\\s*=\\s*\\(\\s*5\\s*,\\s*120\\s*\\)",
              message:
                "Tunjuk koordinatnya dengan xy=(5, 120).",
            },
          ],
          solution: "ax.annotate('Stok habis', xy=(5, 120))",
          susunKode: {
            question:
              "Susun penambahan anotasi 'Stok habis' pada koordinat (5, 120).",
            potongan: [
              "ax.annotate('Stok habis', ",
              "xy=(5, 120))",
            ],
            pengecoh: [
              "ax.add_text('Stok habis', ",
              "pos=(5, 120))",
            ],
            pemisah: "",
            explanation:
              "Anotasi teks berkoordinat pada matplotlib menggunakan `ax.annotate(..., xy=(x, y))`. Pengecoh `add_text` adalah metode fiktif yang keliru pada penyusunan grafik visual secara interaktif di lembar kerja analisis.",
          },
        },
        {
          kind: "step",
          id: "da-4-6",
          title: "Menyimpan Gambar Grafik (plt.savefig)",
          explanation:
            "Untuk menggunakan grafik pada slide presentasi atau dokumen laporan tertulis, grafik harus disimpan ke file gambar beresolusi tinggi. Fungsi `plt.savefig('chart.png', dpi=300, bbox_inches='tight')` menyimpan figure dengan ketajaman 300 DPI. Parameter `bbox_inches='tight'` sangat penting untuk dipasang agar label sumbu X/Y dan judul grafik tidak terpotong di tepi gambar saat diekspor.",
          example: {
            code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nplt.savefig('chart.png', dpi=300)\nprint('Saved')",
            output: "Saved",
            note: "bbox_inches='tight' memastikan judul dan label tidak terpotong.",
          },
          instruction:
            "Tuliskan perintah Matplotlib untuk menyimpan figure grafik ke file `'chart.png'` dengan resolusi `dpi=300`.",
          starterCode: "# Tulis plt.savefig di sini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "plt\\.savefig\\(",
                        "message": "Penyimpanan gambar memakai `plt.savefig(<nama berkas>)`. Wajib dipanggil SEBELUM `plt.show()` — setelah ditampilkan, kanvasnya dibersihkan dan yang tersimpan jadi gambar kosong."
                      },
                      {
                        "pattern": "['\"]chart\\.png['\"]",
                        "message": "Sebutkan nama berkasnya beserta ekstensi; ekstensi itulah yang menentukan formatnya."
                      },
                      {
                        "pattern": "dpi\\s*=\\s*300",
                        "message": "Tambahkan `dpi=300` untuk gambar yang akan masuk laporan atau dicetak. Nilai bawaan (100) terlihat buram saat diperbesar di slide presentasi."
                      }
                    ],
          solution: "plt.savefig('chart.png', dpi=300)",
          susunKode: {
            question:
              "Susun penyimpanan grafik ke chart.png dengan resolusi dpi 300.",
            potongan: [
              "plt.savefig(",
              "'chart.png', dpi=300)",
            ],
            pengecoh: [
              "plt.export_image(",
              "'chart.png', quality=300)",
            ],
            pemisah: "",
            explanation:
              "Menyimpan gambar grafik dilakukan via `plt.savefig('chart.png', dpi=300)`. Pengecoh `export_image` adalah fungsi fiktif yang keliru di matplotlib untuk pengeksporan gambar visual berkualitas tinggi pada modul.",
          },
        },
        {
          kind: "quiz",
          id: "da-4-kuis",
          title: "Kuis: Visualisasi Data",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Kapan sumbu Y WAJIB dimulai dari angka 0 (Zero Baseline), dan pada jenis grafik apa pemotongan sumbu Y paling menyesatkan persepsi visual audiens?",
              choices: [
                "Pada Scatter Plot saat memeriksa klaster sebaran titik data",
                "Pada Bar Chart (Grafik Batang), karena tinggi batang merepresentasikan besaran proporsi data secara visual",
                "Pada Box Plot saat menandai posisi kuartil atas dan bawah",
                "Pada Line Chart harian yang memantau fluktuasi indeks harga saham",
              ],
              answerIndex: 1,
              explanation: "Bar Chart yang tidak dimulai dari angka 0 pada sumbu Y secara visual memanipulasi rasio perbandingan tinggi antar batang dan membesar-besarkan perbedaan kecil.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Library visualisasi Python manakah yang dibangun di atas Matplotlib dan dirancang khusus untuk membuat chart statistik dengan integrasi langsung ke DataFrame pandas?",
              choices: ["SciPy", "BeautifulSoup", "Seaborn", "SQLAlchemy"],
              answerIndex: 2,
              explanation: "Seaborn menyederhanakan pembuatan chart statistik kompleks seperti boxplot, violin plot, dan heatmap korelasi langsung dari pandas DataFrame.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Parameter opsi apa pada `plt.savefig()` yang berfungsi memastikan label sumbu dan judul grafik tidak terpotong saat disimpan ke gambar?",
              choices: [
                "format='svg'",
                "dpi=10",
                "transparent=False",
                "bbox_inches='tight'",
              ],
              answerIndex: 3,
              explanation: "bbox_inches='tight' menyesuaikan area bounding box grafik secara presisi mengelilingi seluruh elemen teks luar kanvas.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Jenis visualisasi apa yang paling efektif untuk membandingkan sebaran distribusi data dan posisi median antar 5 kategori produk yang berbeda sekaligus?",
              choices: [
                "Box Plot (atau Violin Plot)",
                "Pie Chart",
                "Single Line Chart",
                "Treemap statis",
              ],
              answerIndex: 0,
              explanation: "Box Plot secara ringkas menampilkan lima ringkasan statistik (min, Q1, median, Q3, max) serta mendeteksi pencilan untuk banyak kategori berdampingan.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Apa keuntungan utama menggunakan paradigma berorientasi objek `fig, ax = plt.subplots()` di Matplotlib?",
              choices: [
                "Mempercepat kompresi ukuran file dataset saat diekspor",
                "Memudahkan pengelolaan banyak sub-grafik (subplots) dan kustomisasi elemen visual secara independen di dalam satu kanvas",
                "Secara otomatis mendeteksi korelasi data statistik tanpa kode tambahan",
                "Menghapus nilai kosong (missing values) pada dataset secara otomatis",
              ],
              answerIndex: 1,
              explanation: "Penggunaan objek spesifik Axes (ax) mempermudah kustomisasi terpisah di tiap diagram apabila figure menampung lebih dari 1 grafik (subplots).",
            },
          ],
        },
      ],
    },
    {
      slug: "bi-tools",
      title: "BI Tools",
      description:
        "Dashboard interaktif untuk stakeholder — Looker Studio gratis, konsep berlaku ke Tableau/Power BI.",
      topics: [
        "Konsep BI: data source, dimensi vs metrik",
        "Looker Studio: koneksi data & chart",
        "Filter, date range, dan interaktivitas",
        "Calculated field",
        "Desain dashboard: pertanyaan bisnis → layout",
        "Pengenalan Tableau & Power BI (peta konsep yang sama)",
        "Sharing & scheduled refresh",
      ],
      items: [
        {
          kind: "materi",
          id: "da-5-m1",
          title: "Business Intelligence & Pembuatan Dashboard Interaktif",
          body: `# Business Intelligence & Pembuatan Dashboard Interaktif

Aplikasi **Business Intelligence (BI)** modern seperti **Google Looker Studio**, **Microsoft Power BI**, dan **Tableau** adalah jembatan vital antara data mentah dengan eksekusi bisnis sehari-hari. Dashboard BI memungkinkan manajemen memantau metrik kesehatan perusahaan secara mandiri (*self-service analytics*) tanpa bergantung pada pembuatan laporan manual yang lambat.

---

## 1. Fondasi Arsitektur BI: Dimensi vs Metrik & Star Schema

Semua visualisasi di BI Tools dibangun dari dua jenis kolom:
- **Dimensi (Dimension)**: Data kualitatif kategorikal yang digunakan untuk memotong, memfilter, dan mengelompokkan data (misal: *Nama Kota*, *Kategori Produk*, *Tipe Pelanggan*, *Tanggal Transaksi*).
- **Metrik (Metric)**: Angka kuantitatif yang dapat dihitung dan diagregasi (misal: *Total Penjualan*, *Jumlah Pesanan*, *Rata-rata Margin*).

> **Formula Pertanyaan Bisnis Standar**: \`"Tampilkan [Metrik] yang dipecah berdasarkan [Dimensi]"\`. Contoh: *"Tampilkan Total Omset (Metrik) berdasarkan Provinsi (Dimensi)"*.

### Konsep Pemodelan Data: Star Schema
Di lingkungan analitik enterprise, tabel data disusun dalam skema bintang (*Star Schema*):
- **Tabel Fakta (Fact Table)**: Tabel transaksi pusat yang sangat panjang, memuat metrik angka dan foreign key (misal: \`fact_orders\`).
- **Tabel Dimensi (Dimension Table)**: Tabel master atribut deskriptif yang terhubung ke tabel fakta via relasi One-to-Many (\`dim_customers\`, \`dim_products\`, \`dim_date\`).

\`\`\`text
                  ┌──────────────────┐
                  │  dim_customers   │
                  └────────┬─────────┘
                           │ 1
                           │ N
┌──────────────┐  1      N ┌──────────────────┐ N      1  ┌──────────────┐
│ dim_products ├───────────┤   fact_orders    ├───────────┤   dim_date   │
└──────────────┘           └──────────────────┘           └──────────────┘
\`\`\`

---

## 2. Diagram Pola Layout Dashboard Manajemen (Z-Pattern)

Mata manusia membaca dokumen dari kiri-atas meluncur ke kanan-atas, lalu turun ke kiri-bawah dan kanan-bawah (**Z-Pattern**). Susunlah dashboard sesuai hierarki keputusan bisnis:

\`\`\`text
┌────────────────────────────────────────────────────────────────────────┐
│ [1. HEADER: Judul Laporan & Date Range Control (Filter Tanggal)]       │
├────────────────────────────────────────────────────────────────────────┤
│ [2. SCORECARDS / KPI CARDS] (Top Left ➔ Top Right)                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │ Total Omset  │  │ Total Orders │  │ AOV (Avg Rp) │  │ Churn Rate  │ │
│  │ Rp 1.45 M    │  │ 12,450       │  │ Rp 116.4 Rb  │  │ 3.2%        │ │
│  └──────────────┘  └──────────────┘  └──────────────┘  └─────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ [3. TREN WAKTU & PERBANDINGAN KATEGORI] (Mid-Section)                  │
│  ┌───────────────────────────────┐  ┌────────────────────────────────┐ │
│  │ Tren Omset Harian (Line Chart)│  │ Top 5 Kategori Laku (Bar Chart)│ │
│  └───────────────────────────────┘  └────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ [4. DETAIL OPERASIONAL] (Bottom-Section)                               │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │ Tabel Breakdown Transaksi Terinci (Bisa Di-filter & Di-export CSV)│ │
│  └───────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

---

## 3. Dosa Terbesar Calculated Field: Menghitung Rasio Non-Aditif

**Calculated Field** memungkinkan kamu membuat rumus metrik turunan langsung di dalam dashboard BI tanpa mengubah database mentah.

> [!CAUTION]
> **Jebakan Rasio Agregat: Mengapa \`AVG(Margin %)\` Salah Fatal?**
> Bayangkan dua transaksi berikut:
> - Transaksi A (kecil): Revenue Rp 100.000, Profit Rp 50.000 (Margin = 50%).
> - Transaksi B (besar): Revenue Rp 10.000.000, Profit Rp 500.000 (Margin = 5%).
> 
> Bila kamu menghitung rata-rata dari kolom margin:
> \`AVG(Margin %) = (50% + 5%) / 2 = 27.5%\` (SALAH BESAR!).
> 
> Realitas keuangan bisnis sesungguhnya:
> \`Total Profit (Rp 550.000) / Total Revenue (Rp 10.100.000) = 5.44%\`!
> 
> **Aturan Wajib**: Rasio harus selalu dihitung dari jumlah total dibagi jumlah total:
> \`SUM(Profit) / SUM(Revenue)\`. Jangan pernah merata-ratakan persentase!

---

## 4. Komparasi Platform BI Populer di Industri

| Parameter | Google Looker Studio | Microsoft Power BI | Tableau |
|---|---|---|---|
| **Model Biaya** | 100% Gratis (Cloud Web) | Berbayar per user (Pro) / Desktop Gratis | Berbayar lisensi enterprise |
| **Konektor Alami** | Google Sheets, BigQuery, Google Analytics | Microsoft Excel, Azure, SQL Server | SQL Server, Snowflake, Salesforce |
| **Bahasa Rumus** | Formula sintaks mirip SQL / Spreadsheet | DAX (Data Analysis Expressions) | Tableau Calculated Fields / LOD |
| **Pengguna Target** | Startup, Digital Agency, UKM | Korporasi, Manufaktur, Perbankan | Perusahaan Enterprise Skala Global |
| **Kemudahan Pemula** | Paling Cepat & Ramah Pemula | Sedang (DAX butuh kurva belajar) | Menengah ke Tinggi |

---

## 5. Fitur Interaktivitas yang Menghidupkan Dashboard

Dashboard statis tidak ada bedanya dengan berkas PDF kaku. Dashboard modern harus memiliki interaktivitas:
1. **Date Range Slicer**: Pemilih rentang waktu (misal: *Bulan Berjalan vs Bulan Lalu*, *Year to Date*) yang mengontrol seluruh chart secara simultan.
2. **Cross-Filtering**: Mengklik salah satu batang diagram batang (misal provinsi "Jawa Timur") otomatis memfilter line chart dan scorecard di sekelilingnya agar hanya menampilkan transaksi Jawa Timur.
3. **Drill-Down Hierarchy**: Memungkinkan pengguna mengklik kategori tingkat tinggi untuk melihat rincian sub-kategori tanpa membuka halaman baru.
4. **Scheduled Refresh & Email Delivery**: Menjadwalkan pengiriman laporan PDF otomatis setiap hari Senin pukul 08.00 pagi ke email direksi via sistem penjadwalan terintegrasi.

---

## 6. Jebakan & Kesalahan Desain Dashboard (Common Pitfalls)

> [!WARNING]
> 1. **Dashboard Seperti Kokpit Pesawat (Overcrowding)**: Menjejali lebih dari 10 grafik ke dalam satu halaman. Batasi 4 hingga 6 komponen visual per layar agar fokus eksekutif tidak terdistraksi.
> 2. **Menampilkan Data Basi Tanpa Auto-Refresh**: Manajemen mengambil keputusan berdasarkan data yang belum menyegarkan transaksi kemarin. Selalu periksa status koneksi data source.
> 3. **Format Angka Tidak Konsisten**: Menampilkan angka \`1450000\` tanpa simbol mata uang dan tanpa titik ribuan (\`Rp 1.450.000\`). Scorecard wajib menggunakan format angka yang langsung terbaca.

---

## 7. Kaitan ke Dunia Kerja

Kemampuan membangun dashboard Looker Studio atau Power BI yang intuitif, cepat diakses, dan bebas galat logika perhitungan mengubah posisimu dari sekadar pengolah data teknis menjadi **mitra analitik strategis** yang dipercaya oleh jajaran manajemen perusahaan.`,
        },
        {
          kind: "step",
          id: "da-5-1",
          title: "Konsep BI: Dimensi vs Metrik",
          explanation:
            "Setiap dashboard dibangun dari dua jenis kolom. Dimensi adalah kolom kategori yang dipakai untuk memecah data — wilayah, kategori produk, tanggal. Metrik adalah angka yang diagregasi — jumlah penjualan, rata-rata nilai pesanan, banyaknya transaksi. Kalimat pertanyaan bisnis hampir selalu berbentuk 'metrik dipecah per dimensi', misalnya 'total penjualan per wilayah'. Membiasakan diri memisahkan keduanya membuatmu cepat merancang chart di Looker Studio, Tableau, maupun Power BI, karena ketiganya memakai konsep yang sama.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({\n    'wilayah': ['Jakarta', 'Bandung', 'Jakarta'],\n    'penjualan': [100, 150, 200],\n})\nprint(df.groupby('wilayah')['penjualan'].sum())",
            output: "wilayah\nBandung    150\nJakarta    300\nName: penjualan, dtype: int64",
          },
          instruction:
            "Pertanyaan bisnisnya: 'berapa total penjualan per kategori produk?'. Dengan pandas, kelompokkan `df` berdasarkan dimensi `kategori` lalu jumlahkan metrik `penjualan`, dan cetak hasilnya.",
          starterCode: "# Metrik dipecah per dimensi\n",
          language: "text",
          tests: [
            {
              pattern: "groupby\\(\\s*['\"]kategori['\"]\\s*\\)",
              message:
                "Kelompokkan berdasarkan dimensi kategori.",
            },
            {
              pattern: "\\[\\s*['\"]penjualan['\"]\\s*\\]\\s*\\.sum\\(\\s*\\)",
              message:
                "Jumlahkan metrik penjualan dengan .sum().",
            },
            {
              pattern: "print\\(",
              message:
                "Cetak hasilnya.",
            },
          ],
          solution: "print(df.groupby('kategori')['penjualan'].sum())",
          susunKode: {
            question:
              "Susun pencetakan total penjualan per kategori dengan groupby dan sum.",
            potongan: [
              "print(df.groupby('kategori')",
              "['penjualan'].sum())",
            ],
            pengecoh: [
              "print(df.group_by('kategori')",
              "['penjualan'].total())",
            ],
            pemisah: "",
            explanation:
              "Penjumlahan agregat per kategori memakai `df.groupby('kategori')['penjualan'].sum()`. Pengecoh `group_by` dan `total` adalah sintaks keliru di pandas untuk agregasi laporan keuangan secara berkala pada skrip.",
          },
        },
        {
          kind: "step",
          id: "da-5-2",
          title: "Scorecard: Satu Angka yang Langsung Terbaca",
          explanation:
            "Kartu scorecard adalah elemen paling atas hampir semua dashboard: satu angka besar yang menjawab satu pertanyaan, misalnya total omset bulan ini. Nilainya harus diformat sesuai kebiasaan pembacanya — di Indonesia berarti pemisah ribuan titik dan awalan Rp, bukan format bawaan Inggris. Angka mentah seperti 128394500 memaksa pembaca menghitung digit, dan di rapat itu berarti pertanyaan pertama bukan tentang isinya melainkan tentang angkanya. Sebelum memformat, pastikan periodenya jelas — angka tanpa keterangan periode selalu memicu salah paham.",
          example: {
            code: "total = 12500000\nprint('Rp ' + format(total, ',d').replace(',', '.'))",
            output: "Rp 12.500.000",
          },
          instruction:
            "Variabel `omset` berisi angka bulat. Cetak nilainya sebagai teks scorecard bergaya Indonesia: diawali `Rp ` dan memakai titik sebagai pemisah ribuan.",
          starterCode: "# Format angka omset untuk kartu scorecard\n",
          language: "text",
          tests: [
            {
              pattern: "['\"]Rp",
              message:
                "Awali hasilnya dengan 'Rp '.",
            },
            {
              pattern: "format\\(\\s*omset\\s*,\\s*['\"],d['\"]\\s*\\)|f['\"]\\{omset:,\\}",
              message:
                "Pakai format(omset, ',d') atau f-string dengan pemisah ribuan.",
            },
            {
              pattern: "replace\\(\\s*['\"],['\"]\\s*,\\s*['\"]\\.['\"]\\s*\\)",
              message:
                "Ganti koma menjadi titik agar sesuai gaya Indonesia.",
            },
          ],
          solution: "print('Rp ' + format(omset, ',d').replace(',', '.'))",
          susunKode: {
            question:
              "Susun format angka omset ke rupiah dengan pemisah ribuan titik.",
            potongan: [
              "print('Rp ' + format(omset, ',d')",
              ".replace(',', '.'))",
            ],
            pengecoh: [
              "print('IDR ' + format(omset, ',d')",
              ".sub_comma('.')",
            ],
            pemisah: "",
            explanation:
              "Format rupiah standar dilakukan dengan `format(omset, ',d').replace(',', '.')`. Pengecoh `sub_comma` adalah nama fungsi fiktif yang keliru dipakai untuk manipulasi string nominal pada laporan keuangan di BiLearn.",
          },
        },
        {
          kind: "step",
          id: "da-5-3",
          title: "Filter Rentang Tanggal: Nyawa Sebuah Dashboard",
          explanation:
            "Dashboard tanpa filter tanggal hampir tidak berguna, karena pertanyaan manajemen selalu terikat periode: bulan ini, kuartal lalu, tahun berjalan. Di BI tools filter itu berupa date range control; di balik layar ia berubah menjadi kondisi rentang pada query atau DataFrame. Perhatikan batasnya: pakai lebih besar-sama-dengan pada tanggal awal dan lebih kecil-sama-dengan pada tanggal akhir, agar transaksi di hari pertama dan terakhir ikut terhitung. Kesalahan satu hari di batas periode termasuk bug laporan yang paling sering terjadi dan paling sulit disadari.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'tanggal': pd.to_datetime(['2026-06-30', '2026-07-15'])})\nhasil = df[(df['tanggal'] >= '2026-07-01') & (df['tanggal'] <= '2026-07-31')]\nprint(len(hasil))",
            output: "1",
          },
          instruction:
            "Saring `df` agar hanya memuat transaksi dengan kolom `tanggal` antara `'2026-01-01'` sampai `'2026-03-31'` (kedua batas ikut terhitung), lalu simpan hasilnya ke variabel `q1`.",
          starterCode: "# Saring transaksi kuartal pertama\n",
          language: "text",
          tests: [
            {
              pattern: "q1\\s*=\\s*df\\[",
              message:
                "Simpan hasil penyaringan ke variabel q1.",
            },
            {
              pattern: ">=\\s*['\"]2026-01-01['\"]",
              message:
                "Batas awal memakai >= '2026-01-01' agar hari pertama ikut.",
            },
            {
              pattern: "<=\\s*['\"]2026-03-31['\"]",
              message:
                "Batas akhir memakai <= '2026-03-31' agar hari terakhir ikut.",
            },
            {
              pattern: "&",
              message:
                "Gabungkan kedua kondisi dengan operator & di dalam tanda kurung.",
            },
          ],
          solution: "q1 = df[(df['tanggal'] >= '2026-01-01') & (df['tanggal'] <= '2026-03-31')]",
          susunKode: {
            question:
              "Susun penyaringan data kuartal pertama 2026 rentang 1 Jan - 31 Mar.",
            potongan: [
              "q1 = df[(df['tanggal'] >= '2026-01-01') ",
              "& (df['tanggal'] <= '2026-03-31')]",
            ],
            pengecoh: [
              "q1 = df[(df['tanggal'] == '2026-01-01') ",
              "AND (df['tanggal'] <= '2026-03-31')]",
            ],
            pemisah: "",
            explanation:
              "Kondisi majemuk pada DataFrame pandas wajib menggunakan operator bitwise `&`. Pengecoh kata kunci `AND` memicu ValueError pada ekspresi boolean pandas yang keliru saat penyaringan data dilakukan pada skrip.",
          },
        },
        {
          kind: "step",
          id: "da-5-4",
          title: "Calculated Field: Metrik Turunan",
          explanation:
            "Tidak semua angka yang dibutuhkan tersedia sebagai kolom; margin, konversi, dan rata-rata nilai transaksi harus dihitung dari kolom lain. Di BI tools ini disebut calculated field, dan di pandas kamu membuatnya sebagai kolom baru. Aturan penting: rasio dihitung dari total, bukan dari rata-rata rasio per baris — menjumlahkan persentase lalu membaginya menghasilkan angka yang keliru saat ukuran tiap barisnya berbeda. Selalu periksa juga penyebut yang mungkin bernilai nol, karena satu baris seperti itu cukup untuk membuat seluruh laporan menampilkan galat.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'profit': [30, 50], 'revenue': [100, 200]})\nmargin_total = df['profit'].sum() / df['revenue'].sum() * 100\nprint(round(margin_total, 2))",
            output: "26.67",
          },
          instruction:
            "DataFrame `df` punya kolom `profit` dan `revenue`. Buat kolom baru bernama `margin` yang berisi persentase profit terhadap revenue untuk setiap baris.",
          starterCode: "# Buat metrik turunan margin (persen)\n",
          language: "text",
          tests: [
            {
              pattern: "df\\[\\s*['\"]margin['\"]\\s*\\]\\s*=",
              message:
                "Buat kolom baru df['margin'].",
            },
            {
              pattern: "df\\[\\s*['\"]profit['\"]\\s*\\]\\s*/\\s*df\\[\\s*['\"]revenue['\"]\\s*\\]",
              message:
                "Bagi kolom profit dengan kolom revenue.",
            },
            {
              pattern: "\\*\\s*100",
              message:
                "Kalikan 100 agar hasilnya berbentuk persen.",
            },
          ],
          solution: "df['margin'] = df['profit'] / df['revenue'] * 100",
          susunKode: {
            question:
              "Susun kalkulasi persentase margin dari profit dan revenue.",
            potongan: [
              "df['margin'] = ",
              "df['profit'] / df['revenue'] * 100",
            ],
            pengecoh: [
              "df['margin'] := ",
              "df['profit'] - df['revenue'] * 100",
            ],
            pemisah: "",
            explanation:
              "Margin dihitung dari rasio pembagian `profit / revenue * 100`. Pengecoh pengurangan `-` adalah kekeliruan logika yang merusak analisis margin pada laporan keuangan bisnis di perusahaan saat ini secara signifikan.",
          },
        },
        {
          kind: "step",
          id: "da-5-5",
          title: "Merancang Dashboard dari Pertanyaan Bisnis",
          explanation:
            "Dashboard yang berantakan hampir selalu lahir dari urutan kerja yang terbalik: membuat chart dulu, memikirkan pertanyaannya belakangan. Mulailah dari daftar pertanyaan yang benar-benar ditanyakan pemakainya, lalu petakan tiap pertanyaan ke satu elemen visual. Susunannya mengikuti cara mata membaca: angka ringkasan di kiri atas, tren di bawahnya, rincian paling bawah. Kalau ada chart yang tidak menjawab pertanyaan mana pun di daftarmu, chart itu harus dibuang — bukan diperkecil.",
          example: {
            code: "rencana = {\n    'Berapa omset bulan ini?': 'scorecard',\n    'Bagaimana trennya 12 bulan terakhir?': 'line chart',\n}\nfor pertanyaan, elemen in rencana.items():\n    print(pertanyaan, '->', elemen)",
            output: "Berapa omset bulan ini? -> scorecard\nBagaimana trennya 12 bulan terakhir? -> line chart",
          },
          instruction:
            "Buat dictionary bernama `rencana_dashboard` yang memetakan dua pertanyaan bisnis ke elemen visualnya: pertanyaan tentang total omset dipetakan ke `'scorecard'`, dan pertanyaan tentang perbandingan antar kategori dipetakan ke `'bar chart'`.",
          starterCode: "# Petakan pertanyaan bisnis ke elemen dashboard\n",
          language: "text",
          tests: [
            {
              pattern: "rencana_dashboard\\s*=\\s*\\{",
              message:
                "Buat dictionary bernama rencana_dashboard.",
            },
            {
              pattern: "['\"]scorecard['\"]",
              message:
                "Pertanyaan total omset dijawab dengan 'scorecard'.",
            },
            {
              pattern: "['\"]bar chart['\"]",
              message:
                "Perbandingan antar kategori dijawab dengan 'bar chart'.",
            },
          ],
          solution: "rencana_dashboard = {\n    'Berapa total omset bulan ini?': 'scorecard',\n    'Kategori mana yang paling laku?': 'bar chart',\n}",
          susunKode: {
            question:
              "Susun pemetaan rencana_dashboard antara pertanyaan bisnis dan tipe chart.",
            potongan: [
              "rencana_dashboard = {\n    'Berapa total omset bulan ini?': 'scorecard',\n",
              "    'Kategori mana yang paling laku?': 'bar chart',\n}",
            ],
            pengecoh: [
              "rencana_dashboard = {\n    'Berapa total omset bulan ini?': 'number_box',\n",
              "    'Kategori mana yang paling laku?': 'column_chart',\n}",
            ],
            pemisah: "",
            explanation:
              "Perancangan dashboard memetakan pertanyaan ke tipe grafik seperti `'scorecard'` dan `'bar chart'`. Pengecoh `'number_box'` adalah istilah buatan yang keliru untuk visualisasi data pada lembar kerja proyek.",
          },
        },
        {
          kind: "step",
          id: "da-5-6",
          title: "Looker Studio, Tableau, Power BI: Konsep yang Sama",
          explanation:
            "Ketiga alat ini terlihat berbeda di permukaan, tapi konsepnya identik: sambungkan sumber data, tentukan dimensi dan metrik, buat calculated field bila perlu, lalu susun chart beserta filternya. Karena itu menguasai satu alat membuatmu bisa berpindah ke alat lain dalam hitungan hari. Yang membedakan adalah biaya dan ekosistem: Looker Studio gratis dan terhubung erat dengan Google Sheets serta BigQuery, sedangkan Tableau dan Power BI berbayar dan lebih sering dipakai perusahaan besar. Di lowongan Indonesia, menyebut satu alat yang benar-benar kamu kuasai lebih bernilai daripada menyebut tiga alat sekaligus tanpa portofolio.",
          example: {
            code: "alat = {\n    'looker studio': 'gratis',\n    'tableau': 'berbayar',\n    'power bi': 'berbayar',\n}\nprint([nama for nama, harga in alat.items() if harga == 'gratis'])",
            output: "['looker studio']",
          },
          instruction:
            "Sebagai analis, kamu diminta memetakan model lisensi biaya dari tiga alat Business Intelligence terpopuler (`'looker studio'`, `'tableau'`, dan `'power bi'`). Buat dictionary `alat_bi` dengan nama ketiga alat tersebut sebagai kuncinya (semua huruf kecil) dan tentukan status biayanya sebagai nilai string: `'gratis'` untuk alat berbasis cloud Google, dan `'berbayar'` untuk kedua alat enterprise lainnya.",
          starterCode: "# Petakan alat BI dan status biayanya\n",
          language: "text",
          tests: [
            {
              pattern: "alat_bi\\s*=\\s*\\{",
              message:
                "Buat dictionary bernama alat_bi.",
            },
            {
              pattern: "['\"]looker studio['\"]\\s*:\\s*['\"]gratis['\"]",
              message:
                "Looker Studio bernilai 'gratis'.",
            },
            {
              pattern: "['\"]tableau['\"]\\s*:\\s*['\"]berbayar['\"]",
              message:
                "Tableau bernilai 'berbayar'.",
            },
            {
              pattern: "['\"]power bi['\"]\\s*:\\s*['\"]berbayar['\"]",
              message:
                "Power BI bernilai 'berbayar'.",
            },
          ],
          solution: "alat_bi = {\n    'looker studio': 'gratis',\n    'tableau': 'berbayar',\n    'power bi': 'berbayar',\n}",
          susunKode: {
            question:
              "Susun dictionary alat_bi yang memetakan Looker, Tableau, dan Power BI.",
            potongan: [
              "alat_bi = {\n    'looker studio': 'gratis',\n    'tableau': 'berbayar',\n",
              "    'power bi': 'berbayar',\n}",
            ],
            pengecoh: [
              "alat_bi = {\n    'looker studio': 'free',\n    'tableau': 'paid',\n",
              "    'power bi': 'paid',\n}",
            ],
            pemisah: "",
            explanation:
              "Pemetaan opsi alat BI memisahkan lisensi `'gratis'` dan `'berbayar'`. Pengecoh bahasa Inggris `'free'` dan `'paid'` keliru untuk memenuhi kriteria tes Bahasa Indonesia pada modul analisis data ini di platform BiLearn.",
          },
        },
        {
          kind: "step",
          id: "da-5-7",
          title: "Berbagi Laporan & Pengiriman Terjadwal",
          explanation:
            "Laporan yang bagus tidak berguna kalau tidak sampai ke orang yang mengambil keputusan. Dua hal yang perlu kamu atur: hak akses (siapa boleh melihat apa) dan jadwal pengiriman otomatis, misalnya setiap Senin pagi lewat email. Jadwal ditulis dengan format cron di banyak alat: lima kolom yang berarti menit, jam, tanggal, bulan, dan hari dalam pekan. Sebelum menyalakan pengiriman terjadwal, pastikan datanya sudah ter-refresh lebih dulu — laporan otomatis yang isinya basi lebih berbahaya daripada tidak ada laporan sama sekali.",
          example: {
            code: "jadwal = {'penerima': 'manajer@toko.id', 'cron': '0 7 * * 1'}\nprint(jadwal['cron'])",
            output: "0 7 * * 1",
          },
          instruction:
            "Untuk mengotomatiskan pengiriman email PDF dashboard mingguan ke pimpinan, buat dictionary `jadwal_laporan`. Isi kunci `'penerima'` dengan alamat `'direktur@toko.id'`, dan tentukan ekspresi string pada kunci `'cron'` untuk jadwal rutin setiap hari Senin pukul 08:00 pagi (menit 0, jam 8, setiap hari dalam bulan, setiap bulan, hari ke-1).",
          starterCode: "# Susun konfigurasi pengiriman laporan terjadwal\n",
          language: "text",
          tests: [
            {
              pattern: "jadwal_laporan\\s*=\\s*\\{",
              message:
                "Buat dictionary bernama jadwal_laporan.",
            },
            {
              pattern: "['\"]penerima['\"]\\s*:\\s*['\"]direktur@toko\\.id['\"]",
              message:
                "Kunci 'penerima' berisi 'direktur@toko.id'.",
            },
            {
              pattern: "['\"]cron['\"]\\s*:\\s*['\"]0 8 \\* \\* 1['\"]",
              message:
                "Kunci 'cron' berisi '0 8 * * 1' untuk Senin pukul 08.00.",
            },
          ],
          solution: "jadwal_laporan = {\n    'penerima': 'direktur@toko.id',\n    'cron': '0 8 * * 1',\n}",
          susunKode: {
            question:
              "Susun dictionary jadwal_laporan dengan email penerima dan cron harian.",
            potongan: [
              "jadwal_laporan = {\n    'penerima': 'direktur@toko.id',\n",
              "    'cron': '0 8 * * 1',\n}",
            ],
            pengecoh: [
              "jadwal_laporan = {\n    'to': 'direktur@toko.id',\n",
              "    'schedule': '0 8 * * 1',\n}",
            ],
            pemisah: "",
            explanation:
              "Otomasi jadwal laporan menyertakan pasangan kunci `'penerima'` dan `'cron'`. Pengecoh `'to'` dan `'schedule'` keliru dari konvensi internal yang ditentukan pada proyek analisis data di BiLearn secara baku.",
          },
        },
        {
          kind: "quiz",
          id: "da-5-kuis",
          title: "Kuis: BI Tools",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Dalam arsitektur dashboard BI (Looker Studio, Power BI, Tableau), atribut kualitatif atau kategori (seperti Nama Kota, Kategori Produk, atau Status) diklasifikasikan sebagai...",
              choices: [
                "Metrik (Metric)",
                "Dimensi (Dimension)",
                "Calculated Field",
                "Aggregation Target",
              ],
              answerIndex: 1,
              explanation: "Dimensi adalah data kualitatif yang digunakan untuk mengelompokkan dan memfilter data agregat; sedangkan Metrik adalah angka kuantitatif yang dihitung.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Komponen kartu visualisasi Looker Studio mana yang paling cocok dipasang di bagian paling atas dashboard untuk menampilkan angka ringkasan tunggal KPI utama (seperti Total Revenue)?",
              choices: [
                "Pivot Table",
                "Treemap",
                "Scorecard (KPI Card)",
                "Scatter Plot",
              ],
              answerIndex: 2,
              explanation: "Scorecard dirancang khusus untuk memamerkan angka ringkasan tunggal KPI tingkat tinggi secara menonjol dan cepat dipahami.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Pola navigasi tata letak (layout) visual apa yang disarankan untuk menyusun komponen dashboard dari KPI utama ke detail tabel breakdown?",
              choices: [
                "Z-Pattern Layout (KPI kiri atas -> Tren kanan -> Breakdown bawah)",
                "Bottom-Up Layout (Detail transaksi di atas -> KPI di bawah)",
                "Diagonal Radial Grid (Komponen melingkar dari tengah)",
                "Random Scatter Layout (Komponen acak tanpa hierarki)",
              ],
              answerIndex: 0,
              explanation: "Pola Z (Top-Left KPI -> Top-Right Trend -> Bottom Breakdown) mengikuti alur baca alami mata manusia.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Kapan seorang analis data membuat 'Calculated Field' pada sebuah aplikasi BI Tools?",
              choices: [
                "Saat ingin menambah kapasitas penyimpanan database cloud",
                "Saat ingin mengubah jenis font sistem operasi klien",
                "Saat membutuhkan rumus metrik turunan baru (seperti Margin % atau logika CASE WHEN) langsung di layer BI tanpa mengubah tabel asal",
                "Saat ingin mengekspor skrip Python ke format biner",
              ],
              answerIndex: 2,
              explanation: "Calculated Field sangat krusial untuk membuat turunan rasio baru (seperti Margin %) atau pengelompokan kondisi langsung saat eksplorasi data agregat.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Komponen interaktif apa yang paling tepat ditambahkan agar pihak direksi dapat mengganti rentang waktu analisis secara mandiri (self-service)?",
              choices: [
                "Tombol eksekusi query SQL mentah",
                "Date Range Control (Slicer Tanggal)",
                "Tabel statis tanpa filter",
                "Grafik Pie multidimensi",
              ],
              answerIndex: 1,
              explanation: "Kontrol pemilih rentang tanggal (Date Slicer) memberi otonomi kepada audiens untuk menggeser periode laporan yang mereka inginkan (misal YTD atau bulanan).",
            },
          ],
        },
      ],
    },
    {
      slug: "storytelling",
      title: "Data Storytelling",
      description:
        "Skill yang makin diminta lowongan: dari angka ke keputusan.",
      topics: [
        "Kenali audiens: eksekutif vs tim teknis",
        "Struktur narasi: konteks → temuan → rekomendasi",
        "Satu slide satu pesan",
        "Menulis insight yang actionable (bukan 'penjualan naik 5%')",
        "Menghadapi pertanyaan & data yang menantang kesimpulanmu",
        "Etika: batas antara persuasi dan manipulasi",
      ],
      items: [
        {
          kind: "materi",
          id: "da-6-m1",
          title: "Seni Data Storytelling & Komunikasi Hasil Analisis",
          body: `# Seni Data Storytelling & Komunikasi Hasil Analisis

Sehebat apa pun query SQL yang kamu tulis, sebersih apa pun pipeline pandas yang kamu rancang, dan serumit apa pun pemodelan statistik yang kamu bangun, **seluruh kinerjamu akan bernilai nol jika kamu gagal menyampaikannya kepada pengambil keputusan bisnis**.

**Data Storytelling** adalah seni menerjemahkan angka mentah dan grafik analitik menjadi narasi bisnis terstruktur yang menggerakkan aksi nyata.

---

## 1. Mengenali Audiens: Eksekutif C-Level vs Tim Rekan Teknis

Presentasi analitik yang gagal hampir selalu bermula dari kesalahan membaca siapa yang duduk di depan layar presentasi:

| Kebutuhan Audiens | Jajaran Eksekutif (CEO, CFO, Direktur) | Tim Manajer & Rekan Teknis (Lead, Dev, Analis) |
|---|---|---|
| **Alokasi Waktu** | 2 - 5 menit pertama sangat menentukan | 30 - 60 menit sesi bedah metodologi |
| **Fokus Utama** | Dampak pendapatan (*revenue*), biaya (*cost*), dan risiko bisnis | Kualitas data, validitas sampel, dan asumsi algoritma |
| **Bahasa yang Dipakai** | Metrik bisnis (GMV, Churn, ROI, CAC, LTV) | Sintaks Python, fungsi \`fillna()\`, dan skor p-value |
| **Format yang Disukai** | **BLUF (Bottom Line Up Front)** & 1 Halaman Executive Summary | Jupyter Notebook terperinci dan diagram alur pipeline |

> [!IMPORTANT]
> **Prinsip BLUF (Bottom Line Up Front)**: Jangan bercerita secara kronologis seperti novel misteri (*"Pertama kami membersihkan missing value, lalu kami membuat pivot..."*). Sampaikan kesimpulan utama dan rekomendasi tindakan di kalimat pertama!

---

## 2. Struktur Piramida Minto (The Minto Pyramid Principle)

Standar emas komunikasi bisnis di konsultan manajemen top dunia (seperti McKinsey & BCG) adalah **The Minto Pyramid Principle**:

\`\`\`text
                  ┌──────────────────────────────────────────────┐
                  │ 1. KESIMPULAN UTAMA / REKOMENDASI (PUNCAK)   │
                  │ "Kurangi alokasi kuota mitra kurir X 40%..."  │
                  └──────────────────────┬───────────────────────┘
                                         │
        ┌────────────────────────────────┼────────────────────────────────┐
        ▼                                ▼                                ▼
┌───────────────────────┐┌───────────────────────┐┌───────────────────────┐
│ Argumen Bukti 1:      ││ Argumen Bukti 2:      ││ Argumen Bukti 3:      │
│ 62% keterlambatan kirim││ Retensi pembeli turun││ Kerugian finansial   │
│ terpusat di kurir X   ││ 15% pasca telat kirim ││ refund Rp 450 Juta    │
└───────────────────────┘└───────────────────────┘└───────────────────────┘
\`\`\`

---

## 3. Alur Narasi 3 Bagian: Konteks ➔ Temuan Kunci ➔ Tindakan Rekomendasi

Dalam presentasi slide, gunakan alur tiga babak yang alami:
1. **Konteks (The Context)**: Situasi bisnis awal yang disepakati bersama.
   - *Contoh*: *"Target tingkat pembatalan pesanan perusahaan kita di kuartal kedua adalah di bawah 4%."*
2. **Temuan Kunci (The Data Insight)**: Temuan mengejutkan dari eksplorasi data yang menjelaskan akar masalah.
   - *Contoh*: *"Data menunjukkan pembatalan melonjak menjadi 8.2%, dan 74% di antaranya terjadi khusus pada metode pengiriman reguler di wilayah Bekasi akibat overload gudang mitra."*
3. **Rekomendasi Tindakan (The Actionable Recommendation)**: Usulan keputusan bisnis konkret yang terukur.
   - *Contoh*: *"Segera alihkan 50% pesanan Bekasi ke gudang mitra alternatif mulai minggu depan untuk menyelamatkan potensi omset Rp 280 Juta."*

---

## 4. Matriks Komparasi: Data Observation vs Actionable Insight

| Kategori | Contoh Pernyataan | Respon Audiens Bisnis |
|---|---|---|
| **Data Observation** (Lemah) | *"Penjualan produk kategori elektronik turun 10% di bulan Mei."* | Audiens bertanya: *"Terus kenapa? Kita harus ngapain?"* |
| **Actionable Insight** (Kuat) | *"Penjualan elektronik turun 10% di bulan Mei akibat kehabisan stok varian terpopuler selama 12 hari berturut-turut, sehingga rekomendasinya adalah meningkatkan safety stock supplier A sebesar 25% menjelang tanggal kembar bulan depan."* | Audiens langsung menyetujui anggaran dan mengeksekusi tindakan. |

---

## 5. Anatomi Slide Eksekutif: "One Slide, One Key Takeaway"

Jangan biarkan audiens menebak pesan di dalam grafik. Terapkan prinsip **Action Headline**:

- ❌ **Judul Lemah (Label Deskriptif)**: \`"Grafik Penjualan Bulanan 2026"\`
- ✅ **Judul Kuat (Action Headline)**: \`"Penjualan Turun 12% Sejak Kenaikan Biaya Ongkir pada Bulan Mei"\`

> **Aturan 3 Detik**: Jika semua diagram pada slide ditutup dan audiens hanya membaca satu baris judul utamanya, poin keputusan bisnis analisismu sudah harus tersampaikan secara utuh!

---

## 6. Seni Menghadapi Sanggahan Data (Handling Pushback)

Ketika presentasi di hadapan pimpinan atau departemen lain yang kinerjanya kamu sorot, kamu pasti akan menghadapi pertanyaan bernada menyanggah: *"Angka kamu salah! Sistem internal kami mencatat hasilnya baik-baik saja!"*.

Tiga langkah elegan menghadapi sanggahan tanpa defensif:
1. **Langkah 1: Akui Keraguan Secara Tenang**: *"Pertanyaan yang sangat baik, wajar bila ada perbedaan angka dengan laporan internal divisi bapak."*
2. **Langkah 2: Buka Definisi & Batasan Data Secara Transparan**: *"Angka ini ditarik dari tabel transaksi order sukses periode 1 hingga 30 Juni, mengecualikan transaksi yang dibatalkan oleh pembeli."*
3. **Langkah 3: Tawarkan Validasi Silang Pasca-Rapat**: *"Saya sangat senang bila bisa mencocokkan definisi filter data bersama tim bapak besok siang untuk memastikan integritas angkanya."*

> [!TIP]
> **Teknik Pre-Wiring (Sosialisasi Awal)**: Sebelum rapat besar dengan jajaran direksi, temui pemangku kepentingan kunci secara informal 1-on-1 untuk memperlihatkan temuan awal. Jika ada perbedaan angka atau temuan sensitif, selesaikan lebih dulu sebelum dipresentasikan di forum resmi.

---

## 7. Jebakan & Etika Penyajian Data (Common Pitfalls)

> [!WARNING]
> 1. **Cherry-Picking Periode Waktu**: Sengaja memilih rentang tanggal tertentu yang hanya menampilkan tren kenaikan demi menyenangkan atasan, padahal tren tahunan sebenarnya sedang anjlok.
> 2. **Bersikap Defensif dan Menyerang Balik**: Mempertahankan harga diri dengan mendebat stakeholder secara emosional. Integritas analis dibangun dari bukti data dan transparansi metode.
> 3. **Slide Penuh Teks Ukuran 10pt**: Memindahkan laporan teks utuh ke dalam slide presentasi sehingga audiens sibuk membaca daripada mendengarkan penjelasanmu.

---

## 8. Kaitan ke Dunia Kerja

Data Storytelling adalah keahlian yang membedakan **Data Analyst Junior** (yang hanya mengeksekusi tiket query) dengan **Lead Analyst / Head of BI** yang dipercaya menjadi penasihat strategis para pengambil keputusan utama perusahaan.`,
        },
        {
          kind: "step",
          id: "da-6-1",
          title: "Kenali Audiens: Eksekutif vs Tim Teknis",
          explanation:
            "Isi analisismu boleh sama, tapi cara menyajikannya harus berbeda. Eksekutif butuh kesimpulan dan keputusan yang diminta darinya dalam satu menit pertama: apa temuannya, berapa dampaknya, apa yang harus dilakukan. Tim teknis butuh hal yang justru dibuang dari ringkasan itu: dari mana datanya, bagaimana pembersihannya, dan asumsi apa yang kamu pakai. Kesalahan yang paling sering dilakukan analis pemula adalah membawa presentasi metodologi ke ruang direksi, lalu kehilangan perhatian sebelum sampai ke rekomendasi.",
          example: {
            code: "ringkasan = {\n    'eksekutif': ['temuan', 'dampak rupiah', 'rekomendasi'],\n    'teknis': ['sumber data', 'metode cleaning', 'asumsi'],\n}\nprint(ringkasan['eksekutif'][0])",
            output: "temuan",
          },
          instruction:
            "Saat merancang bahan presentasi, susun materi agar tepat sasaran bagi dua kelompok audiens. Buat dictionary `isi_presentasi` dengan dua kunci: `'eksekutif'` yang memuat list tiga fokus bisnis utama (`'temuan'`, `'dampak'`, dan `'rekomendasi'`), serta `'teknis'` yang memuat list tiga komponen metodologi data (`'sumber data'`, `'metode'`, dan `'asumsi'`).",
          starterCode: "# Susun isi presentasi menurut audiensnya\n",
          language: "text",
          tests: [
            {
              pattern: "isi_presentasi\\s*=\\s*\\{",
              message:
                "Buat dictionary bernama isi_presentasi.",
            },
            {
              pattern: "['\"]eksekutif['\"]\\s*:\\s*\\[[^\\]]*rekomendasi",
              message:
                "Bagian eksekutif memuat temuan, dampak, dan rekomendasi.",
            },
            {
              pattern: "['\"]teknis['\"]\\s*:\\s*\\[[^\\]]*asumsi",
              message:
                "Bagian teknis memuat sumber data, metode, dan asumsi.",
            },
          ],
          solution: "isi_presentasi = {\n    'eksekutif': ['temuan', 'dampak', 'rekomendasi'],\n    'teknis': ['sumber data', 'metode', 'asumsi'],\n}",
          susunKode: {
            question:
              "Susun dictionary isi_presentasi untuk audiens eksekutif dan teknis.",
            potongan: [
              "isi_presentasi = {\n    'eksekutif': ['temuan', 'dampak', 'rekomendasi'],\n",
              "    'teknis': ['sumber data', 'metode', 'asumsi'],\n}",
            ],
            pengecoh: [
              "isi_presentasi = {\n    'boss': ['temuan', 'dampak', 'rekomendasi'],\n",
              "    'dev': ['sumber data', 'metode', 'asumsi'],\n}",
            ],
            pemisah: "",
            explanation:
              "Penyusunan bahan presentasi memisahkan poin untuk `'eksekutif'` dan `'teknis'`. Pengecoh `'boss'` dan `'dev'` adalah nama kunci fiktif yang keliru dipakai pada laporan bisnis resmi perusahaan di modul.",
          },
        },
        {
          kind: "step",
          id: "da-6-2",
          title: "Struktur Narasi: Konteks, Temuan, Aksi",
          explanation:
            "Data tidak bercerita dengan sendirinya; kamu yang menyusun ceritanya. Struktur yang paling mudah diikuti pendengar terdiri dari tiga bagian: konteks (kondisi yang jadi latar), temuan (apa yang ditunjukkan data), dan aksi (apa yang sebaiknya dilakukan). Tanpa konteks, temuanmu terdengar seperti angka acak; tanpa aksi, presentasimu berakhir dengan 'lalu?'. Susun ketiganya dalam kalimat pendek, dan pastikan aksinya bisa dikerjakan oleh orang yang hadir di ruangan itu.",
          example: {
            code: "cerita = {\n    'konteks': 'Churn naik 3 bulan berturut-turut',\n    'temuan': '62 persen churn terjadi setelah pembayaran gagal',\n    'aksi': 'Aktifkan percobaan ulang pembayaran otomatis',\n}\nfor bagian in ['konteks', 'temuan', 'aksi']:\n    print(bagian.upper(), ':', cerita[bagian])",
            output: "KONTEKS : Churn naik 3 bulan berturut-turut\nTEMUAN : 62 persen churn terjadi setelah pembayaran gagal\nAKSI : Aktifkan percobaan ulang pembayaran otomatis",
          },
          instruction:
            "Buat dictionary bernama `narasi` berisi tiga kunci — `'konteks'`, `'temuan'`, dan `'aksi'` — untuk kasus penjualan yang turun setelah pengiriman sering terlambat. Isi tiap kunci dengan kalimatmu sendiri.",
          starterCode: "# Susun narasi tiga bagian\n",
          language: "text",
          tests: [
            {
              pattern: "narasi\\s*=\\s*\\{",
              message:
                "Buat dictionary bernama narasi.",
            },
            {
              pattern: "['\"]konteks['\"]\\s*:\\s*['\"][^'\"]{15,}",
              message:
                "Isi 'konteks' dengan kalimat, bukan satu kata.",
            },
            {
              pattern: "['\"]temuan['\"]\\s*:\\s*['\"][^'\"]{15,}",
              message:
                "Isi 'temuan' dengan kalimat berisi apa yang ditunjukkan data.",
            },
            {
              pattern: "['\"]aksi['\"]\\s*:\\s*['\"][^'\"]{15,}",
              message:
                "Isi 'aksi' dengan langkah yang bisa dikerjakan.",
            },
          ],
          solution: "narasi = {\n    'konteks': 'Penjualan turun 12 persen sejak Mei',\n    'temuan': 'Keterlambatan kirim naik dua kali lipat di wilayah yang sama',\n    'aksi': 'Tambah satu kurir mitra di wilayah tersebut selama Juli',\n}",
          susunKode: {
            question:
              "Susun dictionary narasi dengan kunci konteks, temuan, dan aksi.",
            potongan: [
              "narasi = {\n    'konteks': 'Penjualan turun 12 persen sejak Mei',\n    'temuan': 'Keterlambatan kirim naik dua kali lipat di wilayah yang sama',\n",
              "    'aksi': 'Tambah satu kurir mitra di wilayah tersebut selama Juli',\n}",
            ],
            pengecoh: [
              "narasi = {\n    'background': 'Penjualan turun 12 persen sejak Mei',\n    'finding': 'Keterlambatan kirim naik dua kali lipat di wilayah yang sama',\n",
              "    'action': 'Tambah satu kurir mitra di wilayah tersebut selama Juli',\n}",
            ],
            pemisah: "",
            explanation:
              "Alur Data Storytelling menggunakan kunci Bahasa Indonesia `'konteks'`, `'temuan'`, dan `'aksi'`. Pengecoh istilah Inggris keliru untuk tes ini karena bahasa antarmuka adalah Indonesia baku pada BiLearn saat ini.",
          },
        },
        {
          kind: "step",
          id: "da-6-3",
          title: "Satu Slide, Satu Pesan",
          explanation:
            "Judul slide adalah tempat pesanmu, bukan label grafik. 'Grafik Penjualan' tidak memberi tahu apa pun; 'Penjualan turun 12% sejak kenaikan ongkir' langsung menyampaikan temuan bahkan bila pendengar tidak sempat membaca grafiknya. Aturan praktis yang dipakai konsultan: kalau seluruh slide-mu ditutup dan hanya judulnya yang terbaca, cerita utamamu harus tetap sampai. Kalau satu slide memuat dua pesan sekaligus, pecah menjadi dua slide.",
          example: {
            code: "judul = 'Penjualan turun 12 persen sejak ongkir naik'\nprint(len(judul.split()) >= 5)",
            output: "True",
          },
          instruction:
            "Variabel `judul_slide` masih berisi label generik. Ganti isinya dengan judul yang memuat pesan: sebutkan arah perubahan (naik atau turun), angkanya, dan penyebab atau periodenya.",
          starterCode: "judul_slide = 'Grafik Penjualan'\n# Ganti dengan judul yang membawa pesan\n",
          language: "text",
          tests: [
            {
              pattern: "judul_slide\\s*=\\s*['\"][^'\"]{25,}['\"]",
              message:
                "Tulis judul yang cukup panjang untuk memuat pesan, bukan label.",
            },
            {
              pattern: "(naik|turun|meningkat|menurun)",
              flags: "i",
              message:
                "Sebutkan arah perubahannya.",
            },
            {
              pattern: "\\d",
              message:
                "Sertakan angkanya agar pesannya konkret.",
            },
          ],
          solution: "judul_slide = 'Penjualan turun 12 persen sejak ongkir naik pada Mei'",
          susunKode: {
            question:
              "Susun variabel judul_slide berisikan kalimat utama temuan bisnis.",
            potongan: [
              "judul_slide = ",
              "'Penjualan turun 12 persen sejak ongkir naik pada Mei'",
            ],
            pengecoh: [
              "judul_slide := ",
              "'Laporan Penjualan Bulan Mei dan Juni'",
            ],
            pemisah: "",
            explanation:
              "Judul slide presentasi yang efektif langsung menyampaikan temuan utama berangka (misal `'Penjualan turun 12 persen...'`). Pengecoh judul generik keliru dan tidak informatif bagi audiens eksekutif bisnis.",
          },
        },
        {
          kind: "step",
          id: "da-6-4",
          title: "Insight yang Bisa Ditindaklanjuti",
          explanation:
            "'Penjualan naik 5%' bukan insight, itu pembacaan angka. Insight menjelaskan apa yang terjadi, kenapa itu penting, dan apa yang sebaiknya dilakukan — dengan penanggung jawab dan ukuran keberhasilan bila memungkinkan. Perbedaannya terasa saat rapat: pembacaan angka memicu pertanyaan 'lalu kita harus apa?', sedangkan insight memicu keputusan. Latihan paling cepat untuk membiasakannya adalah menempelkan kata 'sehingga sebaiknya' di belakang setiap temuan yang kamu tulis.",
          example: {
            code: "temuan = 'Konversi di HP 40 persen lebih rendah daripada desktop'\naksi = 'Perbaiki tata letak tombol bayar di tampilan HP bulan ini'\nprint(f'{temuan}, sehingga sebaiknya {aksi.lower()}')",
            output: "Konversi di HP 40 persen lebih rendah daripada desktop, sehingga sebaiknya perbaiki tata letak tombol bayar di tampilan hp bulan ini",
          },
          instruction:
            "Variabel `temuan_pengiriman` berisi fakta bahwa 30 persen pesanan terlambat di wilayah Bekasi. Buat variabel `insight` berisi satu kalimat yang menggabungkan temuan itu dengan tindakan yang kamu sarankan.",
          starterCode: "temuan_pengiriman = '30 persen pesanan Bekasi terlambat lebih dari 2 hari'\n# Susun insight yang bisa ditindaklanjuti\n",
          language: "text",
          tests: [
            {
              pattern: "insight\\s*=",
              message:
                "Buat variabel bernama insight.",
            },
            {
              pattern: "temuan_pengiriman",
              message:
                "Gunakan isi temuan_pengiriman di dalam insight-mu.",
            },
            {
              pattern: "(sebaiknya|rekomendasi|perlu|tambah|perbaiki|ubah)",
              flags: "i",
              message:
                "Sertakan tindakan yang disarankan, bukan hanya fakta.",
            },
          ],
          solution: "insight = f'{temuan_pengiriman}, sehingga sebaiknya kita tambah satu mitra kurir di Bekasi bulan ini'",
          susunKode: {
            question:
              "Susun f-string insight yang menggabungkan temuan_pengiriman dengan rekomendasi.",
            potongan: [
              "insight = ",
              "f'{temuan_pengiriman}, sehingga sebaiknya kita tambah satu mitra kurir di Bekasi bulan ini'",
            ],
            pengecoh: [
              "insight := ",
              "f'{temuan_pengiriman}, dan ini data lengkapnya di lampiran'",
            ],
            pemisah: "",
            explanation:
              "Rekomendasi tindakan disusun dengan f-string yang memuat saran konkret (kata kunci `sebaiknya`/`rekomendasi`). Pengecoh tanpa saran konkret keliru secara analisis bisnis laporan pada proyek ini di BiLearn.",
          },
        },
        {
          kind: "step",
          id: "da-6-5",
          title: "Menghadapi Sanggahan atas Datamu",
          explanation:
            "Cepat atau lambat seseorang akan berkata 'saya rasa angkanya salah'. Reaksi yang merusak kredibilitas adalah bertahan mati-matian atau langsung menyerah. Yang dilakukan analis berpengalaman ada tiga langkah: akui pertanyaannya sebagai hal yang wajar, sebutkan sumber dan periode datamu secara spesifik, lalu tawarkan pemeriksaan ulang dengan tenggat yang jelas. Sikap ini mengubah sanggahan menjadi kerja sama, dan sering kali justru memperkuat kepercayaan pada laporan berikutnya.",
          example: {
            code: "tanggapan = {\n    'akui': 'Pertanyaan yang bagus, wajar ditanyakan',\n    'sumber': 'Angka ini dari tabel orders periode 1-30 Juni',\n    'tindak_lanjut': 'Saya cek ulang dan kirim hasilnya besok siang',\n}\nprint(tanggapan['tindak_lanjut'])",
            output: "Saya cek ulang dan kirim hasilnya besok siang",
          },
          instruction:
            "Buat dictionary bernama `tanggapan_sanggahan` dengan tiga kunci: `'akui'`, `'sumber'`, dan `'tindak_lanjut'`, masing-masing berisi satu kalimat tanggapanmu.",
          starterCode: "# Susun tanggapan atas sanggahan data\n",
          language: "text",
          tests: [
            {
              pattern: "tanggapan_sanggahan\\s*=\\s*\\{",
              message:
                "Buat dictionary bernama tanggapan_sanggahan.",
            },
            {
              pattern: "['\"]akui['\"]\\s*:\\s*['\"][^'\"]{10,}",
              message:
                "Isi 'akui' dengan kalimat yang mengakui pertanyaannya wajar.",
            },
            {
              pattern: "['\"]sumber['\"]\\s*:\\s*['\"][^'\"]{10,}",
              message:
                "Isi 'sumber' dengan asal data dan periodenya.",
            },
            {
              pattern: "['\"]tindak_lanjut['\"]\\s*:\\s*['\"][^'\"]{10,}",
              message:
                "Isi 'tindak_lanjut' dengan tawaran pemeriksaan ulang beserta waktunya.",
            },
          ],
          solution: "tanggapan_sanggahan = {\n    'akui': 'Wajar ditanyakan, angkanya memang berbeda dari laporan bulan lalu',\n    'sumber': 'Datanya dari tabel orders periode 1-30 Juni, status selain batal',\n    'tindak_lanjut': 'Saya periksa ulang definisinya dan kirim hasilnya besok siang',\n}",
          susunKode: {
            question:
              "Susun dictionary tanggapan_sanggahan dengan kunci akui, sumber, dan tindak_lanjut.",
            potongan: [
              "tanggapan_sanggahan = {\n    'akui': 'Wajar ditanyakan, angkanya memang berbeda dari laporan bulan lalu',\n    'sumber': 'Datanya dari tabel orders periode 1-30 Juni, status selain batal',\n",
              "    'tindak_lanjut': 'Saya periksa ulang definisinya dan kirim hasilnya besok siang',\n}",
            ],
            pengecoh: [
              "tanggapan_sanggahan = {\n    'tolak': 'Angka Anda salah, laporan saya yang paling benar',\n    'db': 'Datanya dari tabel orders periode 1-30 Juni, status selain batal',\n",
              "    'next': 'Saya periksa ulang definisinya dan kirim hasilnya besok siang',\n}",
            ],
            pemisah: "",
            explanation:
              "Penanganan sanggahan pemangku kepentingan mengikuti struktur `'akui'`, `'sumber'`, dan `'tindak_lanjut'`. Pengecoh defensif `'tolak'` keliru dalam komunikasi bisnis yang profesional dan santun di lingkungan kerja modern.",
          },
        },
        {
          kind: "step",
          id: "da-6-6",
          title: "Etika Visualisasi: Persuasi atau Manipulasi",
          explanation:
            "Grafik bisa berbohong tanpa satu angka pun dipalsukan. Memotong sumbu Y agar tidak dimulai dari nol membuat kenaikan 2 persen terlihat seperti lonjakan besar, dan memilih periode tertentu saja bisa menyembunyikan tren sebaliknya. Batasnya sederhana: persuasi menonjolkan hal yang penting tanpa mengubah kesan besarannya, sedangkan manipulasi membuat pembaca menyimpulkan sesuatu yang tidak didukung data. Untuk bar chart, mulai sumbu dari nol adalah aturan baku — dan kalau kamu memang harus memotongnya, katakan secara terbuka.",
          example: {
            code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.bar(['Jan', 'Feb'], [98, 100])\nax.set_ylim(bottom=0)\nprint(ax.get_ylim()[0])",
            output: "0.0",
          },
          instruction:
            "Grafik batang `ax` sudah dibuat. Pastikan penyajiannya jujur dengan mengatur batas bawah sumbu Y agar dimulai dari nol.",
          starterCode: "# Pastikan sumbu Y dimulai dari nol\n",
          language: "text",
          tests: [
            {
              pattern: "ax\\.set_ylim\\(",
              message:
                "Pakai ax.set_ylim(...).",
            },
            {
              pattern: "bottom\\s*=\\s*0|\\(\\s*0\\s*,",
              message:
                "Tetapkan batas bawahnya 0.",
            },
          ],
          solution: "ax.set_ylim(bottom=0)",
          susunKode: {
            question:
              "Susun pemastian skala sumbu vertikal grafik dimulai dari 0 pada ax.",
            potongan: [
              "ax.set_ylim(",
              "bottom=0)",
            ],
            pengecoh: [
              "ax.set_y_axis(",
              "min_val=0)",
            ],
            pemisah: "",
            explanation:
              "Memastikan grafik jujur dilakukan dengan `ax.set_ylim(bottom=0)`. Pengecoh `min_val` adalah nama parameter fiktif yang keliru pada matplotlib saat membatasi skala sumbu Y secara visual pada grafik laporan.",
          },
        },
        {
          kind: "quiz",
          id: "da-6-kuis",
          title: "Kuis: Data Storytelling",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Struktur alur narasi 3 tahap apa yang paling efektif dan terbukti menggerakkan keputusan bisnis dalam presentasi analitik?",
              choices: [
                "Metodologi -> Detail Query SQL -> Tabel Mentah",
                "Konteks Masalah -> Temuan Kunci (Insight) -> Rekomendasi Tindakan Bisnis",
                "Ringkasan Kode -> Diagram Alur Database -> Sesi Tanya Jawab",
                "Saran Tindakan -> Grafik Historis -> Perkenalan Tim",
              ],
              answerIndex: 1,
              explanation: "Alur Konteks -> Temuan -> Rekomendasi memberikan latar belakang yang jelas, membuktikan dampak dengan data, dan mengarahkan keputusan bisnis.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa prinsip 'One Slide, One Key Takeaway' sangat krusial dalam presentasi data eksekutif?",
              choices: [
                "Agar slide presentasi terlihat lebih banyak sehingga terkesan bekerja keras",
                "Untuk menjaga fokus audiens agar langsung memahami satu pesan inti tanpa terdistraksi tumpukan grafik yang bersaing",
                "Karena aplikasi presentasi membatasi jumlah elemen visual per halaman",
                "Agar tim teknis tidak bisa menanyakan detail metodologi di balik data",
              ],
              answerIndex: 1,
              explanation: "Menyampaikan 1 pesan utama per slide menjaga fokus audiens, menghindari cognitive overload, dan mempercepat pemahaman eksekutif.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa perbedaan mendasar antara data observation biasa dan Actionable Insight?",
              choices: [
                "Data observation menggunakan bahasa asing sedangkan actionable insight memakai bahasa lokal",
                "Data observation hanya berupa pernyataan fakta angka, sedangkan actionable insight menjelaskan akar masalah dan tindakan korektif konkret",
                "Data observation selalu salah sedangkan actionable insight selalu benar",
                "Actionable insight hanya dapat dihasilkan oleh model Machine Learning",
              ],
              answerIndex: 1,
              explanation: "Observasi hanya memotret fakta ('Penjualan turun 10%'). Insight menjelaskan konteks, akar masalah, dan mengusulkan keputusan bisnis yang harus diambil.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Jika kamu akan presentasi di depan tim jajaran eksekutif level-C, komponen apa yang paling butuh ditegaskan di halaman pertama laporan?",
              choices: [
                "Pemaparan panjang lebar soal jumlah sel missing values di database",
                "Detail rumus probabilitas yang digunakan pada model statistik",
                "Executive Summary yang merangkum langsung dampak bisnis utama dan ringkasan langkah ke depan",
                "Rincian kode program Python matplotlib yang dibuat",
              ],
              answerIndex: 2,
              explanation: "Kalangan eksekutif sangat menghargai waktu. Executive Summary (Ikhtisar Eksekutif) yang jelas dan ringkas menjawab inti keputusan bisnis lebih baik daripada detail teknis panjang.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Sikap etis terbaik yang harus ditunjukkan ketika pemangku kepentingan (stakeholder) meragukan kesahihan datamu di tengah presentasi adalah...",
              choices: [
                "Mendengarkan dengan objektif, menyepakati asumsi dasar, dan menawarkan pengujian data (uji silang) lanjutan setelah rapat",
                "Membantah sekeras mungkin untuk mempertahankan harga diri analis",
                "Secara diam-diam memanipulasi rentang sumbu grafik Y agar kesimpulan terlihat benar",
                "Menolak menjawab pertanyaan dan segera mengakhiri sesi rapat",
              ],
              answerIndex: 0,
              explanation: "Terbuka pada masukan memperlihatkan integritas data analyst yang tinggi serta menghadirkan rasa percaya pemangku bisnis jangka panjang.",
            },
          ],
        },
      ],
    },
    {
      slug: "studi-kasus-e2e",
      title: "Studi Kasus End-to-End",
      description:
        "Portofolio yang membedakanmu: proyek lengkap dari data mentah sampai presentasi.",
      topics: [
        "Memilih dataset (BPS, Kaggle, data publik Indonesia)",
        "Merumuskan pertanyaan bisnis sebelum menyentuh data",
        "Full cycle: SQL → pandas → cleaning → analisis → viz",
        "Dashboard final di Looker Studio",
        "Laporan tertulis + rekomendasi",
        "Menyusun repo/notebook portofolio yang rapi",
      ],
      items: [
        {
          kind: "materi",
          id: "da-7-m1",
          title: "Panduan Proyek Portofolio Data Analysis End-to-End",
          body: `# Panduan Proyek Portofolio Data Analysis End-to-End

Sebuah portofolio proyek **End-to-End (E2E)** adalah bukti kompetensi paling bernilai yang membedakanmu dari ribuan pelamar posisi Data Analyst lainnya. Sertifikat kelulusan kursus hanya membuktikan kamu pernah menonton video; portofolio E2E membuktikan kamu **mampu memecahkan masalah bisnis riil dari awal hingga akhir secara mandiri**.

---

## 1. Mengapa Proyek Dataset Klise Langsung Ditolak Recruiter?

Banyak pelamar pemula mengunggah proyek portofolio dengan dataset populer dari tutorial lama:
- ❌ Dataset Titanic (*Prediksi penumpang selamat*)
- ❌ Dataset Bunga Iris (*Klasifikasi spesies bunga*)
- ❌ Dataset Boston Housing (*Prediksi harga rumah 1970-an*)

> [!CAUTION]
> **Pandangan Hiring Manager**:
> Ketika recruiter melihat proyek Titanic atau Iris di CV-mu, mereka berasumsi proyek tersebut hanyalah salinan kode tutorial internet tanpa pemikiran mandiri. Perekrut ingin melihat kemampuanmu menangani **data mentah yang kotor, konteks industri nyata, dan masalah bisnis lokal**.

---

## 2. Sumber Dataset Publik Berkualitas Tinggi di Indonesia

Gunakan data publik Indonesia yang relevan dengan tantangan industri nasional:
- **BPS (Badan Pusat Statistik - \`bps.go.id\`)**: Data inflasi bulanan, indeks harga konsumen, data ketenagakerjaan daerah, dan sensus ekonomi mikro.
- **Satu Data Indonesia (\`data.go.id\`)**: Portal satu data resmi kementerian dan pemerintah daerah (data transportasi, logistik pangan, kesehatan).
- **Kaggle & GitHub Komunitas**: Dataset transaksi e-commerce publik (misal: Brazilian Olist E-commerce yang dimodifikasi, Tokopedia product reviews, data logistik pengiriman paket retail).

---

## 3. Diagram Siklus Hidup Penuh Proyek Analitik (The Full Cycle)

\`\`\`text
[1. PROBLEM SCOPING] ───────► Merumuskan 3 pertanyaan bisnis kunci yang terukur
         │
         ▼
[2. DATA EXTRACTION] ───────► Mengambil data mentah (Query SQL / CSV / API Publik)
         │
         ▼
[3. DATA WRANGLING] ────────► Pembersihan pandas: missing value, format rupiah, tanggal
         │
         ▼
[4. EXPLORATORY DATA (EDA)] ► Matplotlib/Seaborn: Uji korelasi, sebaran, & identifikasi tren
         │
         ▼
[5. INTERACTIVE DASHBOARD] ─► Publikasikan dashboard interaktif di Google Looker Studio
         │
         ▼
[6. EXECUTIVE SUMMARY] ─────► Tulis laporan ringkas 1 halaman (Konteks, Insight, Aksi)
         │
         ▼
[7. GITHUB & LINKEDIN] ─────► Repositori terstruktur + Postingan ringkasan insight
\`\`\`

---

## 4. Merumuskan Pertanyaan Bisnis Sebelum Menyentuh Data

Analisis tanpa tujuan bisnis akan berubah menjadi pembuatan grafik acak tanpa makna. Rumuskan **3 Pertanyaan Bisnis Kunci** yang terikat keputusan:
1. *Kategori produk mana yang margin keuntungannya turun paling tajam pada kuartal ini dan apa akar penyebabnya?*
2. *Wilayah pengiriman mana yang memiliki tingkat keterlambatan di atas SLA 5% sehingga memicu pembatalan pesanan?*
3. *Segmen pelanggan mana yang memiliki nilai transaksi belanja tertinggi (AOV) namun menunjukkan tanda-tanda retensi menurun?*

---

## 5. Struktur Standar Repositori GitHub Profesional

Repositori GitHub portofoliomu harus tersusun rapi layaknya proyek rekayasa perangkat lunak produksi:

\`\`\`text
ecommerce-retention-analysis/
├── README.md               <- Wajah utama portofolio (TL;DR, screenshot, link dashboard)
├── data/
│   ├── raw/                <- Petunjuk download dataset mentah (jangan upload file raksasa)
│   └── processed/          <- Sampel data bersih siap pakai
├── notebooks/              <- Jupyter Notebook bersih (.ipynb) tanpa pesan error berserakan
│   ├── 01_data_cleaning.ipynb
│   └── 02_exploratory_analysis.ipynb
├── sql/                    <- Skrip ekstraksi query SQL
│   └── extract_orders.sql
├── reports/                <- Dokumen Executive Summary PDF 1 halaman
└── requirements.txt        <- Daftar dependensi library (pandas, matplotlib, seaborn)
\`\`\`

---

## 6. Template Executive Summary 1 Halaman Berstandar Konsultan

Dokumen laporan eksekutif di folder \`reports/\` atau pada badan utama \`README.md\` harus memuat empat komponen wajib:

1. **Ringkasan Temuan (Executive Summary)**:
   *"Tingkat pembatalan pesanan meningkat sebesar 8.2% pada kuartal kedua, terkonsentrasi pada dua wilayah penyangga logistik di Jawa Barat."*
2. **Temuan Kunci Berbasis Angka**:
   - 74% pembatalan pesanan disebabkan keterlambatan kirim yang melebihi batas 3 hari.
   - Kerugian potensi GMV akibat pesanan batal mencapai Rp 450 Juta dalam 90 hari terakhir.
3. **Rekomendasi Tindakan Terukur**:
   - Audit operasional dan lakukan renegosiasi SLA terhadap mitra kurir wilayah Bekasi.
   - Tambahkan fitur opsi penyesuaian jadwal kirim otomatis di aplikasi pembeli.
4. **Catatan Keterbatasan Data**:
   *"Data transaksi bulan Mei tidak mencakup transaksi outlet fisik akibat migrasi sistem kasir POS."*

---

## 7. Jebakan Portofolio yang Membuat Lamaran Ditolak (Common Pitfalls)

> [!WARNING]
> 1. **Kebocoran Data Pribadi (PII Leak)**: Lupa menyamarkan nama asli pelanggan, nomor telepon, atau alamat email. Selalu lakukan anonimisasi data sebelum dipublikasikan ke GitHub!
> 2. **README Kosong**: Repositori yang hanya berisi file \`.ipynb\` tanpa penjelasan konteks masalah dan tanpa tautan dashboard live di halaman \`README.md\`.
> 3. **Notebook Kotor Penuh Pesan Error**: Mengunggah Jupyter Notebook yang dipenuhi jejak baris traceback error merah dan cell koding eksperimen yang tidak berurutan. Jalankan *"Restart Kernel and Run All Cells"* sebelum commit!

---

## 8. Kaitan ke Dunia Kerja: Menghadapi Portofolio Walkthrough

Ketika lolos ke tahap wawancara kerja teknis (*Technical Interview*), interviewer akan meminta kamu menceritakan proyek portofoliomu dalam waktu 3 menit. Gunakan kerangka **Metode STAR**:
- **Situation**: *"Perusahaan e-commerce menghadapi lonjakan pembatalan pesanan..."*
- **Task**: *"Tugas saya adalah mengidentifikasi akar penyebab dan memetakan wilayah terdampak..."*
- **Action**: *"Saya mengekstrak 50.000 transaksi via SQL, membersihkan data dengan pandas, dan membangun dashboard Looker Studio..."*
- **Result**: *"Hasilnya, kami menemukan 74% masalah ada pada mitra kurir X, dan rekomendasi pengalihan kuota berhasil memitigasi potensi rugi Rp 280 Juta."*`,
        },
        {
          kind: "step",
          id: "da-7-1",
          title: "Memilih Dataset Publik Indonesia",
          explanation:
            "Portofolio analis paling meyakinkan kalau datanya relevan dengan pasar tempatmu melamar. Untuk konteks Indonesia, sumber yang layak dipakai antara lain BPS untuk statistik resmi, Satu Data Indonesia untuk data pemerintah lintas instansi, dan Kaggle untuk dataset bertema global. Sebelum mengunduh, periksa tiga hal: lisensinya memperbolehkan pemakaian ulang, ada keterangan kolom, dan periodenya cukup panjang untuk melihat tren. Dataset yang tidak jelas asalnya membuat seluruh analisismu sulit dipertanggungjawabkan saat ditanya pewawancara.",
          example: {
            code: "sumber = {\n    'bps': 'https://bps.go.id',\n    'satu data': 'https://data.go.id',\n}\nprint(list(sumber.keys()))",
            output: "['bps', 'satu data']",
          },
          instruction:
            "Buat dictionary bernama `sumber_data` berisi minimal dua sumber dataset publik Indonesia beserta alamatnya — sertakan `'bps'` sebagai salah satunya.",
          starterCode: "# Daftar sumber dataset yang akan kamu pakai\n",
          language: "text",
          tests: [
            {
              pattern: "sumber_data\\s*=\\s*\\{",
              message:
                "Buat dictionary bernama sumber_data.",
            },
            {
              pattern: "['\"]bps['\"]\\s*:",
              message:
                "Sertakan 'bps' sebagai satu di antaranya.",
            },
            {
              pattern: "https?://[^'\"]+['\"]\\s*,[\\s\\S]*https?://",
              message:
                "Sertakan minimal dua sumber beserta alamatnya.",
            },
          ],
          solution: "sumber_data = {\n    'bps': 'https://www.bps.go.id',\n    'satu data indonesia': 'https://data.go.id',\n}",
          susunKode: {
            question:
              "Susun dictionary sumber_data publik BPS dan Satu Data Indonesia.",
            potongan: [
              "sumber_data = {\n    'bps': 'https://www.bps.go.id',\n",
              "    'satu data indonesia': 'https://data.go.id',\n}",
            ],
            pengecoh: [
              "sumber_data = {\n    'bps': 'ftp://bps.go.id',\n",
              "    'satu data indonesia': 'ftp://data.go.id',\n}",
            ],
            pemisah: "",
            explanation:
              "Tautan portofolio sumber data publik menggunakan URL valid HTTPS `'https://www.bps.go.id'`. Pengecoh FTP keliru untuk alamat web portal data resmi pemerintah yang dapat diakses publik secara terbuka di internet.",
          },
        },
        {
          kind: "step",
          id: "da-7-2",
          title: "Merumuskan Pertanyaan Sebelum Menyentuh Data",
          explanation:
            "Analisis tanpa pertanyaan berubah menjadi jalan-jalan tanpa tujuan: kamu membuat banyak grafik, menghabiskan waktu, dan tidak menghasilkan keputusan apa pun. Pertanyaan yang baik bersifat spesifik, terikat periode, dan jawabannya bisa mengubah tindakan seseorang. Bandingkan 'bagaimana penjualan kita?' dengan 'kategori produk mana yang marginnya turun sepanjang kuartal ini?' — hanya yang kedua yang menuntun ke aksi. Tulis pertanyaanmu lebih dulu, karena daftar itu juga menjadi kerangka laporan akhirmu nanti.",
          example: {
            code: "pertanyaan = [\n    'Kategori mana yang marginnya turun pada Q2?',\n    'Wilayah mana yang biaya kirimnya naik paling tajam?',\n]\nprint(len(pertanyaan))",
            output: "2",
          },
          instruction:
            "Buat list bernama `pertanyaan_bisnis` berisi tiga pertanyaan analisis untuk data penjualan toko online. Setiap pertanyaan harus berupa kalimat tanya yang spesifik dan diakhiri tanda tanya.",
          starterCode: "# Tulis pertanyaan bisnis sebelum membuka data\n",
          language: "text",
          tests: [
            {
              pattern: "pertanyaan_bisnis\\s*=\\s*\\[",
              message:
                "Buat list bernama pertanyaan_bisnis.",
            },
            {
              pattern: "\\?['\"][\\s\\S]*\\?['\"][\\s\\S]*\\?['\"]",
              message:
                "Tulis tiga pertanyaan, masing-masing diakhiri tanda tanya.",
            },
            {
              pattern: "['\"][^'\"]{30,}\\?['\"]",
              message:
                "Pertanyaannya harus spesifik, bukan sepotong kalimat pendek.",
            },
          ],
          solution: "pertanyaan_bisnis = [\n    'Kategori produk mana yang marginnya paling turun pada kuartal ini?',\n    'Wilayah mana yang tingkat pembatalan pesanannya di atas rata-rata?',\n    'Jam berapa transaksi paling ramai sepanjang tiga bulan terakhir?',\n]",
          susunKode: {
            question:
              "Susun list pertanyaan_bisnis berisi 3 pertanyaan utama proyek akhir.",
            potongan: [
              "pertanyaan_bisnis = ",
              "[\n    'Kategori produk mana yang marginnya paling turun pada kuartal ini?',\n    'Wilayah mana yang tingkat pembatalan pesanannya di atas rata-rata?',\n    'Jam berapa transaksi paling ramai sepanjang tiga bulan terakhir?',\n]",
            ],
            pengecoh: [
              "pertanyaan_bisnis := ",
              "(\n    'Kategori produk mana yang marginnya paling turun pada kuartal ini?',\n    'Wilayah mana yang tingkat pembatalan pesanannya di atas rata-rata?',\n    'Jam berapa transaksi paling ramai sepanjang tiga bulan terakhir?',\n)",
            ],
            pemisah: "",
            explanation:
              "List `pertanyaan_bisnis` wajib berisi pertanyaan analitis tingkat tinggi bertanda tanya `?`. Pengecoh dengan kurung biasa `()` menghasilkan tuple yang keliru secara struktur list proyek analisis data di platform.",
          },
        },
        {
          kind: "step",
          id: "da-7-3",
          title: "Siklus Penuh: dari Data Mentah ke Keputusan",
          explanation:
            "Pekerjaan analis mengikuti urutan yang selalu sama: ambil data (SQL atau file), bersihkan (pandas), analisis, visualisasikan, lalu sampaikan rekomendasi. Melompati tahap pembersihan adalah kesalahan yang paling mahal, karena seluruh analisis di atasnya ikut salah tanpa terlihat. Menuliskan tahapan sebagai daftar juga membantumu memperkirakan waktu: di proyek nyata, pembersihan biasanya memakan porsi terbesar. Simpan urutan ini di README repomu supaya orang lain bisa mengulang pekerjaanmu.",
          example: {
            code: "tahap = ['ambil', 'bersihkan', 'analisis', 'visualisasi', 'rekomendasi']\nfor i, nama in enumerate(tahap, start=1):\n    print(i, nama)",
            output: "1 ambil\n2 bersihkan\n3 analisis\n4 visualisasi\n5 rekomendasi",
          },
          instruction:
            "Buat list bernama `tahapan` yang memuat lima tahap analisis secara berurutan, dimulai dari pengambilan data dan diakhiri penyampaian rekomendasi. Pastikan tahap pembersihan ada di dalamnya.",
          starterCode: "# Tulis urutan tahapan analisismu\n",
          language: "text",
          tests: [
            {
              pattern: "tahapan\\s*=\\s*\\[",
              message:
                "Buat list bernama tahapan.",
            },
            {
              pattern: "(cleaning|bersihkan|pembersihan)",
              flags: "i",
              message:
                "Sertakan tahap pembersihan data.",
            },
            {
              pattern: "(visual|chart|grafik)",
              flags: "i",
              message:
                "Sertakan tahap visualisasi.",
            },
            {
              pattern: "(rekomendasi|laporan|insight)",
              flags: "i",
              message:
                "Akhiri dengan tahap rekomendasi atau pelaporan.",
            },
          ],
          solution: "tahapan = [\n    'ambil data dari SQL',\n    'cleaning dengan pandas',\n    'analisis & agregasi',\n    'visualisasi',\n    'rekomendasi ke stakeholder',\n]",
          susunKode: {
            question:
              "Susun list tahapan proyek dari SQL, cleaning pandas, hingga rekomendasi.",
            potongan: [
              "tahapan = ",
              "[\n    'ambil data dari SQL',\n    'cleaning dengan pandas',\n    'analisis & agregasi',\n    'visualisasi',\n    'rekomendasi ke stakeholder',\n]",
            ],
            pengecoh: [
              "tahapan := ",
              "(\n    'ambil data dari SQL',\n    'cleaning dengan pandas',\n    'analisis & agregasi',\n    'visualisasi',\n    'rekomendasi ke stakeholder',\n)",
            ],
            pemisah: "",
            explanation:
              "Tahapan proyek data mencakup langkah terstruktur dari SQL, cleaning pandas, visualisasi, hingga rekomendasi. Pengecoh tuple keliru untuk definisi daftar tahapan proyek pada lembar kerja skrip analisis.",
          },
        },
        {
          kind: "step",
          id: "da-7-4",
          title: "Menerbitkan Dashboard Final",
          explanation:
            "Dashboard yang hanya bisa dibuka di komputermu belum selesai. Menerbitkannya berarti mengatur tiga hal: siapa yang boleh mengakses, apakah datanya menyegar otomatis, dan bagaimana orang lain menemukannya. Untuk portofolio, tautan publik yang bisa dibuka pewawancara jauh lebih meyakinkan daripada tangkapan layar. Yang wajib kamu periksa sebelum membagikan: pastikan tidak ada data pribadi asli — pakai data contoh atau samarkan nama pelanggan.",
          example: {
            code: "report_id = 'abc123'\nprint(f'https://lookerstudio.google.com/reporting/{report_id}')",
            output: "https://lookerstudio.google.com/reporting/abc123",
          },
          instruction:
            "Variabel `report_id` berisi id laporanmu. Buat variabel `tautan_publik` berisi URL lengkap laporan Looker Studio memakai f-string.",
          starterCode: "report_id = 'x9f2k'\n# Susun tautan publik laporanmu\n",
          language: "text",
          tests: [
            {
              pattern: "tautan_publik\\s*=",
              message:
                "Buat variabel bernama tautan_publik.",
            },
            {
              pattern: "lookerstudio\\.google\\.com",
              message:
                "Pakai domain lookerstudio.google.com.",
            },
            {
              pattern: "\\{\\s*report_id\\s*\\}",
              message:
                "Sisipkan report_id memakai f-string, jangan tulis id-nya manual.",
            },
          ],
          solution: "tautan_publik = f'https://lookerstudio.google.com/reporting/{report_id}'",
          susunKode: {
            question:
              "Susun f-string tautan_publik ke laporan Looker Studio.",
            potongan: [
              "tautan_publik = ",
              "f'https://lookerstudio.google.com/reporting/{report_id}'",
            ],
            pengecoh: [
              "tautan_publik := ",
              "f'https://dashboard.internal/reports/{report_id}'",
            ],
            pemisah: "",
            explanation:
              "Tautan publik portofolio mengarah ke domain resmi `lookerstudio.google.com`. Pengecoh domain internal keliru karena tidak bisa diakses publik secara bebas pada proyek portofolio yang dibagikan kepada umum.",
          },
        },
        {
          kind: "step",
          id: "da-7-5",
          title: "Laporan Eksekutif: Ringkas tapi Lengkap",
          explanation:
            "Laporan akhir yang dibaca pimpinan biasanya hanya satu halaman, dan bagian yang paling menentukan adalah paragraf pertama. Susunlah tiga bagian: ringkasan temuan dalam beberapa kalimat, rekomendasi yang bisa dikerjakan, dan catatan keterbatasan data. Bagian keterbatasan sering dilewati padahal justru menambah kepercayaan — ia menunjukkan kamu tahu batas kesimpulanmu sendiri. Simpan rincian metodologi di lampiran agar halaman pertama tetap bisa dibaca dalam satu menit.",
          example: {
            code: "laporan = {\n    'ringkasan': 'Pembatalan naik 8 persen, terpusat di dua wilayah',\n    'rekomendasi': ['Audit mitra kurir wilayah A', 'Tambah opsi ganti jadwal kirim'],\n    'keterbatasan': 'Data Mei tidak lengkap karena migrasi sistem',\n}\nprint(len(laporan['rekomendasi']))",
            output: "2",
          },
          instruction:
            "Buat dictionary bernama `laporan_akhir` dengan tiga kunci: `'ringkasan'` berisi kalimat temuan, `'rekomendasi'` berisi list minimal dua tindakan, dan `'keterbatasan'` berisi catatan batas datamu.",
          starterCode: "# Susun laporan eksekutif tiga bagian\n",
          language: "text",
          tests: [
            {
              pattern: "laporan_akhir\\s*=\\s*\\{",
              message:
                "Buat dictionary bernama laporan_akhir.",
            },
            {
              pattern: "['\"]ringkasan['\"]\\s*:\\s*['\"][^'\"]{20,}",
              message:
                "Isi 'ringkasan' dengan kalimat temuan.",
            },
            {
              pattern: "['\"]rekomendasi['\"]\\s*:\\s*\\[[^\\]]*,[^\\]]*\\]",
              message:
                "Isi 'rekomendasi' dengan list minimal dua tindakan.",
            },
            {
              pattern: "['\"]keterbatasan['\"]\\s*:\\s*['\"][^'\"]{15,}",
              message:
                "Isi 'keterbatasan' dengan catatan batas datamu.",
            },
          ],
          solution: "laporan_akhir = {\n    'ringkasan': 'Pembatalan pesanan naik 8 persen dan terpusat di dua wilayah',\n    'rekomendasi': ['Audit mitra kurir wilayah Bekasi', 'Tambah opsi ubah jadwal kirim'],\n    'keterbatasan': 'Data Mei tidak lengkap karena migrasi sistem kasir',\n}",
          susunKode: {
            question:
              "Susun dictionary laporan_akhir berisi ringkasan, rekomendasi, dan keterbatasan.",
            potongan: [
              "laporan_akhir = {\n    'ringkasan': 'Pembatalan pesanan naik 8 persen dan terpusat di dua wilayah',\n    'rekomendasi': ['Audit mitra kurir wilayah Bekasi', 'Tambah opsi ubah jadwal kirim'],\n",
              "    'keterbatasan': 'Data Mei tidak lengkap karena migrasi sistem kasir',\n}",
            ],
            pengecoh: [
              "laporan_akhir = {\n    'summary': 'Pembatalan pesanan naik 8 persen dan terpusat di dua wilayah',\n    'recom': ['Audit mitra kurir wilayah Bekasi', 'Tambah opsi ubah jadwal kirim'],\n",
              "    'limit': 'Data Mei tidak lengkap karena migrasi sistem kasir',\n}",
            ],
            pemisah: "",
            explanation:
              "Laporan akhir proyek portofolio memuat kunci `'ringkasan'`, `'rekomendasi'`, dan `'keterbatasan'`. Pengecoh istilah Inggris keliru untuk tes ini pada dokumentasi akhir proyek data analisis di platform.",
          },
        },
        {
          kind: "step",
          id: "da-7-6",
          title: "Menyusun Repository GitHub Portofolio yang Rapi",
          explanation:
            "Menyusun dokumentasi di repositori GitHub adalah langkah pamungkas dalam mempublikasikan proyek portofolio. Halaman `README.md` harus ditulis menggunakan format Markdown terstruktur yang diawali dengan header judul `# Portfolio Analytics` disusul subheader `## Dashboard Link` untuk menautkan dashboard interaktif. Struktur repositori yang rapi menunjukkan kedisiplinan dan profesionalitas analis saat dievaluasi oleh tim perekrut teknis.",
          example: {
            code: "# Portfolio Analytics\n## Dashboard Link\n[Looker Studio Dashboard](https://lookerstudio.google.com)",
            output: "Dokumen README Markdown terstruktur bersih.",
            note: "Kerapian repository mencerminkan kedisiplinan kerja.",
          },
          instruction:
            "Kamu sedang menyusun kerangka berkas `README.md` repositori portofolio analitik. Tuliskan dua baris header awal dalam format Markdown: judul utama berlevel 1 (`#`) bernama `'Portfolio Analytics'`, diikuti baris baru sub-judul berlevel 2 (`##`) bernama `'Dashboard Link'`.",
          starterCode: "# Tulis Markdown README di sini\n",
          language: "text",
          tests: [
            {
              pattern: "#\\s+Portfolio Analytics\\s*\\r?\\n\\s*##\\s+Dashboard Link",
              message: "Tuliskan `# Portfolio Analytics` disusul baris baru `## Dashboard Link`.",
            },
          ],
          solution: "# Portfolio Analytics\n## Dashboard Link",
          susunKode: {
            question:
              "Susun judul Markdown header # Portfolio Analytics dan ## Dashboard Link.",
            potongan: [
              "# Portfolio Analytics\n",
              "## Dashboard Link",
            ],
            pengecoh: [
              "# Analisis Portofolio\n",
              "### Link Dashboard",
            ],
            pemisah: "",
            explanation:
              "Struktur dokumentasi README dibuka dengan `# Portfolio Analytics` dan `## Dashboard Link`. Pengecoh heading level 3 `###` keliru dari spesifikasi format dokumentasi proyek data analisis di BiLearn secara otomatis.",
          },
        },
        {
          kind: "quiz",
          id: "da-7-kuis",
          title: "Kuis: Studi Kasus End-to-End",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Sebelum seorang analis data mengunduh file atau mengetik sebaris kode pun, langkah awal apa yang paling menentukan keberhasilan proyek portofolio?",
              choices: [
                "Memilih skema warna palet visualisasi yang paling estetik",
                "Merumuskan Pertanyaan Bisnis Kunci (Business Questions) dan hipotesis yang ingin dijawab",
                "Menyiapkan server database cloud berspesifikasi tinggi",
                "Membuat repositori kosong di GitHub",
              ],
              answerIndex: 1,
              explanation: "Merumuskan Pertanyaan Bisnis Kunci memberi arah, batasan lingkup (scope), dan tujuan yang jelas bagi seluruh alur proses eksplorasi dan analisis data.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Berkas dokumentasi Markdown standar apa di akar repository GitHub yang paling pertama kali dibaca oleh tim perekrut (recruiter) atau hiring manager?",
              choices: [
                "package.json",
                ".gitignore",
                "requirements.txt",
                "README.md",
              ],
              answerIndex: 3,
              explanation: "`README.md` adalah halaman muka repository yang menyajikan ikhtisar proyek, metodologi, temuan kunci, dan tautan dashboard interaktif.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa portofolio berbasis dataset publik lokal Indonesia (seperti BPS, Satu Data Indonesia, atau logistik daerah) memiliki nilai tambah tinggi saat melamar posisi Data Analyst?",
              choices: [
                "Karena menunjukkan pemahaman terhadap konteks bisnis dan data aktual di industri lokal Indonesia",
                "Karena dataset lokal tidak memiliki missing values sehingga analisis selalu mudah",
                "Karena dataset global populer seperti Iris atau Titanic sudah dilarang oleh industri",
                "Karena data lokal memiliki ukuran file yang selalu lebih kecil dibanding data global",
              ],
              answerIndex: 0,
              explanation: "Penggunaan dataset lokal memperlihatkan kemampuan analis dalam menyelesaikan masalah bernilai bisnis nyata di lingkungan kerja Indonesia dan siap menangani data kotor yang realistis.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Pada siklus hidup proyek analitik penuh (Full Cycle), tahapan manakah yang biasanya memakan porsi waktu terbesar bagi seorang analis data (hingga 70-80%)?",
              choices: [
                "Menyusun slide presentasi PowerPoint",
                "Pengumpulan, audit kualitas, dan pembersihan data mentah (data wrangling/cleaning)",
                "Membagikan tautan dashboard ke forum komunitas",
                "Memilih jenis chart di aplikasi visualisasi",
              ],
              answerIndex: 1,
              explanation: "Pembersihan dataset kotor menjadi siap konsumsi (mengatasi missing value, parsing tanggal, menangani outlier) memakan porsi terbesar di dunia nyata sebelum analisis dan pemodelan dapat dipercaya.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kompilasi dokumen esensial yang sebaiknya dimuat ke dalam repository GitHub portofoliomu agar meyakinkan reviewer teknis mencakup...",
              choices: [
                "Hanya tangkapan layar gambar grafik tanpa menyertakan kode sumber",
                "README komprehensif, Notebook eksperimen bersih, skrip source code utuh, dan rujukan dataset asal",
                "File rekaman video presentasi tanpa dokumentasi teks tertulis",
                "Salinan mentah seluruh baris database tanpa penjelasan terstruktur",
              ],
              answerIndex: 1,
              explanation: "Repositori yang bersih, terstruktur rapi, lengkap dengan referensi reproduksi penelitian adalah bukti kompetensi nyata analis di hadapan tim teknis.",
            },
          ],
        },
      ],
    },
  ],
};
