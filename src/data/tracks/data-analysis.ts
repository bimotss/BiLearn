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
      slug: "pandas-tuntas",
      title: "pandas Tuntas",
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
          kind: "step",
          id: "da-1-1",
          title: "Tipe Data Kolom (dtypes & astype)",
          explanation:
            "Periksa tipe data kolom dengan `df.dtypes`. Ubah tipe data kolom menggunakan `df['kolom'].astype(int)`.",
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
              pattern: "df\\[\\s*['\"]price['\"]\\s*\\]\\s*=\\s*df\\[\\s*['\"]price['\"]\\s*\\]\\.astype\\(\\s*int\\s*\\)",
              message: "Gunakan: df['price'] = df['price'].astype(int)",
            },
          ],
          solution: "df['price'] = df['price'].astype(int)",
        },
        {
          kind: "step",
          id: "da-1-2",
          title: "Seleksi Presisi: loc vs iloc",
          explanation:
            "Untuk mengambil data spesifik di pandas, ada dua cara. Gunakan `.loc` (location) ibarat mencari rumah berdasarkan alamat namanya (misal: baris 'Januari', kolom 'Pendapatan'). Gunakan `.iloc` (integer location) ibarat mencari berdasarkan urutan posisi (misal: baris ke-0, kolom ke-2). Trik mengingat: huruf 'i' pada `iloc` berarti integer (urutan angka)!",
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
              pattern: "subset\\s*=\\s*df\\.loc\\[\\s*:\\s*,\\s*\\[\\s*['\"]name['\"]\\s*,\\s*['\"]price['\"]\\s*\\]\\s*\\]",
              message: "Gunakan: subset = df.loc[:, ['name', 'price']]",
            },
          ],
          solution: "subset = df.loc[:, ['name', 'price']]",
        },
        {
          kind: "step",
          id: "da-1-3",
          title: "Filtering Kompleks (.isin() & .query())",
          explanation:
            "Gunakan `df['kat'].isin(['A', 'B'])` untuk menyaring daftar pilihan, atau `df.query('price > 100 and qty < 5')` untuk sintaks query yang mudah dibaca.",
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
              pattern: "filtered\\s*=\\s*df\\[\\s*df\\[\\s*['\"]status['\"]\\s*\\]\\.isin\\(\\s*\\[\\s*['\"]active['\"]\\s*,\\s*['\"]pending['\"]\\s*\\]\\s*\\)\\s*\\]",
              message: "Gunakan metode .isin(['active', 'pending'])",
            },
          ],
          solution: "filtered = df[df['status'].isin(['active', 'pending'])]",
        },
        {
          kind: "step",
          id: "da-1-4",
          title: "Multi-Agregasi dengan .groupby().agg()",
          explanation:
            "Gunakan `.agg({'kolom1': 'sum', 'kolom2': ['mean', 'max']})` untuk menerapkan beberapa fungsi agregasi sekaligus pada kelompok groupby.",
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
              pattern: "df\\.groupby\\(\\s*['\"]dept['\"]\\s*\\)\\.agg\\(\\s*\\{\\s*['\"]salary['\"]\\s*:\\s*['\"]mean['\"]\\s*\\}\\s*\\)",
              message: "Gunakan: df.groupby('dept').agg({'salary': 'mean'})",
            },
          ],
          solution: "df.groupby('dept').agg({'salary': 'mean'})",
        },
        {
          kind: "step",
          id: "da-1-5",
          title: "Penggabungan DataFrame (pd.merge)",
          explanation:
            "`pd.merge(df1, df2, on='id', how='inner')` menggabungkan dua DataFrame berdasarkan kunci penghubung layaknya SQL JOIN.",
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
              pattern: "merged\\s*=\\s*pd\\.merge\\(\\s*df1\\s*,\\s*df2\\s*,\\s*on\\s*=\\s*['\"]user_id['\"]\\s*,\\s*how\\s*=\\s*['\"]left['\"]\\s*\\)",
              message: "Gunakan: merged = pd.merge(df1, df2, on='user_id', how='left')",
            },
          ],
          solution: "merged = pd.merge(df1, df2, on='user_id', how='left')",
        },
        {
          kind: "step",
          id: "da-1-6",
          title: "Reshaping: pivot_table & melt",
          explanation:
            "`pivot_table()` mengubah bentuk data dari Long ke Wide. Sebaliknya, `melt()` mengubah bentuk data dari Wide ke Long.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'year': [2023, 2023], 'sales': [100, 200]})\npivot = df.pivot_table(index='year', values='sales', aggfunc='sum')\nprint(pivot.iloc[0, 0])",
            output: "300",
            note: "Melt sangat berguna saat ingin mengubah kolom-kolom tanggal menjadi 1 kolom deret waktu.",
          },
          instruction:
            "Tuliskan sintaks `df.pivot_table()` dengan `index='year'`, `values='sales'`, dan fungsi agregasi `'sum'`, lalu simpan ke variabel `pivot`.",
          starterCode: "# Tulis pivot_table di sini\n",
          language: "text",
          tests: [
            {
              pattern: "pivot\\s*=\\s*df\\.pivot_table\\(\\s*index\\s*=\\s*['\"]year['\"]\\s*,\\s*values\\s*=\\s*['\"]sales['\"]\\s*,\\s*aggfunc\\s*=\\s*['\"]sum['\"]\\s*\\)",
              message: "Gunakan sintaks df.pivot_table sesuai instruksi",
            },
          ],
          solution: "pivot = df.pivot_table(index='year', values='sales', aggfunc='sum')",
        },
        {
          kind: "step",
          id: "da-1-7",
          title: "Iterasi Vektor dengan .apply()",
          explanation:
            "Gunakan `df['kolom'].apply(fungsi)` untuk menerapkan fungsi kustom pada setiap baris kolom secara efisien.",
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
              pattern: "df\\[\\s*['\"]formatted['\"]\\s*\\]\\s*=\\s*df\\[\\s*['\"]text['\"]\\s*\\]\\.apply\\(\\s*lambda\\s+x\\s*:\\s*x\\.strip\\(\\)\\s*\\)",
              message: "Gunakan: df['formatted'] = df['text'].apply(lambda x: x.strip())",
            },
          ],
          solution: "df['formatted'] = df['text'].apply(lambda x: x.strip())",
        },
        {
          kind: "step",
          id: "da-1-8",
          title: "Time Series Resampling & Rolling",
          explanation:
            "Ubah kolom tanggal menjadi DatetimeIndex, lalu gunakan `.resample('M').sum()` untuk mengagregasi omset ke skala bulanan, atau `.rolling(7).mean()` untuk Moving Average 7 hari.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'sales': [10, 20, 30, 40, 50, 60, 70]})\ndf['moving_avg'] = df['sales'].rolling(7).mean()\nprint(df['moving_avg'].iloc[-1])",
            output: "40.0",
            note: "Rolling average berguna untuk memperhalus fluktuasi grafik tren harian.",
          },
          instruction:
            "Tuliskan perintah pandas untuk menghitung Moving Average 7 hari pada kolom `'sales'` dari `df` menggunakan `.rolling(7).mean()` dan simpan ke kolom `'moving_avg'`.",
          starterCode: "# Tulis rolling mean di sini\n",
          language: "text",
          tests: [
            {
              pattern: "df\\[\\s*['\"]moving_avg['\"]\\s*\\]\\s*=\\s*df\\[\\s*['\"]sales['\"]\\s*\\]\\.rolling\\(\\s*7\\s*\\)\\.mean\\(\\)",
              message: "Gunakan: df['moving_avg'] = df['sales'].rolling(7).mean()",
            },
          ],
          solution: "df['moving_avg'] = df['sales'].rolling(7).mean()",
        },
        {
          kind: "quiz",
          id: "da-1-kuis",
          title: "Kuis: pandas Tuntas",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Metode pandas mana yang digunakan untuk melakukan seleksi baris dan kolom berbasis **Nama Label Teks** (bukan indeks angka)?",
              choices: ["loc", "iloc", "select", "query"],
              answerIndex: 0,
              explanation: "df.loc memilih data berdasarkan label nama baris dan kolom, sedangkan df.iloc memilih berbasis indeks posisi angka.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Metode pandas apa yang digunakan untuk mengubah struktur DataFrame dari format Wide (banyak kolom) menjadi format Long (banyak baris)?",
              choices: ["melt()", "pivot_table()", "concat()", "join()"],
              answerIndex: 0,
              explanation: "`melt()` mengubah kolom-kolom berjarak menjadi baris (unpivoting) untuk membuat struktur data Long.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi utama dari metode `.isin()` saat melakukan filter kondisi pada DataFrame?",
              choices: [
                "Menyaring baris data yang nilainya ada di dalam daftar (list) pilihan yang ditentukan",
                "Menghitung jumlah karakter di tiap sel string",
                "Mengubah tipe data string menjadi integer",
                "Menghapus baris yang memiliki nilai duplikat",
              ],
              answerIndex: 0,
              explanation: "`.isin([val1, val2])` memeriksa keberadaan nilai sel di dalam kumpulan array/list yang diberikan secara presisi.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Jika ingin mengelompokkan data berdasarkan departemen dan menghitung nilai maksimum serta rata-rata gajinya sekaligus, metode apa yang paling tepat digunakan?",
              choices: [
                "df.groupby('dept').agg({'salary': ['max', 'mean']})",
                "df.groupby('dept').sum()",
                "df.sort_values('salary')",
                "df.pivot_table(columns='dept')"
              ],
              answerIndex: 0,
              explanation: "Metode `.agg()` pada pandas memungkinkan penerapan fungsi agregasi ganda (seperti max dan mean) secara bersamaan pada kelompok data.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kapan saat yang paling tepat untuk menggunakan fungsi `.apply()` pada pandas?",
              choices: [
                "Saat perlu menerapkan operasi transformasi kustom baris demi baris yang sulit diselesaikan dengan metode bawaan",
                "Saat ingin menampilkan data dari database relasional",
                "Saat membuat visualisasi grafik lingkaran",
                "Saat ingin mengganti nama kolom"
              ],
              answerIndex: 0,
              explanation: "Fungsi `.apply()` ampuh untuk logika kustom kompleks tingkat baris, namun sebaiknya hindari jika ada operasi vektor bawaan yang lebih efisien.",
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
          kind: "step",
          id: "da-2-1",
          title: "Diagnosis Kualitas Data",
          explanation:
            "Lakukan diagnosis awal: `df.duplicated().sum()` (jumlah duplikat), `df.isna().sum()` (jumlah missing values per kolom).",
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
              pattern: "print\\(\\s*df\\.isna\\(\\)\\.sum\\(\\)\\s*\\)",
              message: "Tuliskan: print(df.isna().sum())",
            },
          ],
          solution: "print(df.isna().sum())",
        },
        {
          kind: "step",
          id: "da-2-2",
          title: "Strategi Pengisian Missing Values (Imputation)",
          explanation:
            "Hapus baris kosong dengan `df.dropna()`, atau isi nilai kosong dengan nilai rata-rata/median `df['kolom'].fillna(df['kolom'].median())`.",
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
              pattern: "df\\[\\s*['\"]score['\"]\\s*\\]\\s*=\\s*df\\[\\s*['\"]score['\"]\\s*\\]\\.fillna\\(\\s*df\\[\\s*['\"]score['\"]\\s*\\]\\.median\\(\\)\\s*\\)",
              message: "Gunakan: df['score'] = df['score'].fillna(df['score'].median())",
            },
          ],
          solution: "df['score'] = df['score'].fillna(df['score'].median())",
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
              pattern: "df\\[\\s*['\"]email['\"]\\s*\\]\\s*=\\s*df\\[\\s*['\"]email['\"]\\s*\\]\\.str\\.strip\\(\\)\\.str\\.lower\\(\\)",
              message: "Gunakan: df['email'] = df['email'].str.strip().str.lower()",
            },
          ],
          solution: "df['email'] = df['email'].str.strip().str.lower()",
        },
        {
          kind: "step",
          id: "da-2-4",
          title: "Parsing Tanggal dengan pd.to_datetime",
          explanation:
            "Konversikan string tanggal yang berantakan ke tipe Datetime asli dengan `pd.to_datetime(df['tanggal'], errors='coerce')`.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'date': ['2024-01-01', 'invalid']})\ndf['date'] = pd.to_datetime(df['date'], errors='coerce')\nprint(pd.isna(df['date'].iloc[1]))",
            output: "True",
            note: "errors='coerce' otomatis mengubah format tanggal rusak menjadi NaT (Not a Time).",
          },
          instruction:
            "Tuliskan konversi kolom `'date'` ke Datetime menggunakan `pd.to_datetime` dengan opsi `errors='coerce'`.",
          starterCode: "# Tulis pd.to_datetime di sini\n",
          language: "text",
          tests: [
            {
              pattern: "df\\[\\s*['\"]date['\"]\\s*\\]\\s*=\\s*pd\\.to_datetime\\(\\s*df\\[\\s*['\"]date['\"]\\s*\\]\\s*,\\s*errors\\s*=\\s*['\"]coerce['\"]\\s*\\)",
              message: "Gunakan: df['date'] = pd.to_datetime(df['date'], errors='coerce')",
            },
          ],
          solution: "df['date'] = pd.to_datetime(df['date'], errors='coerce')",
        },
        {
          kind: "step",
          id: "da-2-5",
          title: "Standarisasi Kategori dengan .map() & .replace()",
          explanation:
            "Gunakan kamus pemetaan `.replace({'jkt': 'Jakarta', 'jkt selatan': 'Jakarta'})` untuk menstandarkan sinonim nama kategori.",
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
              pattern: "df\\[\\s*['\"]status['\"]\\s*\\]\\s*=\\s*df\\[\\s*['\"]status['\"]\\s*\\]\\.replace\\(\\s*\\{\\s*['\"]act['\"]\\s*:\\s*['\"]active['\"]\\s*\\}\\s*\\)",
              message: "Gunakan replace dictionary sesuai instruksi",
            },
          ],
          solution: "df['status'] = df['status'].replace({'act': 'active'})",
        },
        {
          kind: "step",
          id: "da-2-6",
          title: "Deteksi Outlier dengan Metode IQR (Interquartile Range)",
          explanation:
            "Deteksi pencilan data (Outlier) menggunakan rentang IQR `Q3 - Q1`. Nilai di luar `[Q1 - 1.5*IQR, Q3 + 1.5*IQR]` dikategorikan sebagai Outlier.",
          example: {
            code: "Q1 = 20\nQ3 = 50\nIQR = Q3 - Q1\nprint(IQR)",
            output: "30",
            note: "Outlier dapat merusak perhitungan rata-rata (mean) secara dramatis.",
          },
          instruction:
            "Tuliskan rumus perhitungan Interquartile Range (`IQR`) berdasarkan kuartil ketiga (`Q3`) dikurangi kuartil pertama (`Q1`).",
          starterCode: "# Tulis perhitungan IQR di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "IQR\\s*=\\s*Q3\\s*-\\s*Q1",
              message: "Tuliskan: IQR = Q3 - Q1",
            },
          ],
          solution: "IQR = Q3 - Q1",
        },
        {
          kind: "step",
          id: "da-2-7",
          title: "Fungsi Pipeline Cleaning Reusable",
          explanation:
            "Bungkus seluruh urutan pembersihan data ke dalam 1 fungsi `clean_data(df)` agar proses cleaning dapat diterapkan ulang pada file baru secara konsisten.",
          example: {
            code: "import pandas as pd\ndef clean_data(raw_df):\n    df = raw_df.drop_duplicates()\n    return df\ndf_in = pd.DataFrame({'a': [1, 1]})\nprint(len(clean_data(df_in)))",
            output: "1",
            note: "Memastikan konsistensi proses pra-pemrosesan data.",
          },
          instruction:
            "Lengkapi fungsi `clean_data(raw_df)` agar mengembalikan DataFrame `df` di baris terakhir.",
          starterCode: "# Tulis pengembalian dataframe di sini\n",
          language: "text",
          tests: [
            {
              pattern: "return\\s+df",
              message: "Tuliskan: return df",
            },
          ],
          solution: "def clean_data(raw_df):\n    df = raw_df.drop_duplicates()\n    return df",
        },
        {
          kind: "quiz",
          id: "da-2-kuis",
          title: "Kuis: Data Cleaning di pandas",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Metode `to_datetime` pandas dengan opsi `errors='coerce'` akan mengubah nilai tanggal yang formatnya rusak/invalid menjadi apa?",
              choices: ["NaT (Not a Time)", "0", "String kosong ''", "Tanggal hari ini"],
              answerIndex: 0,
              explanation: "Opsi `errors='coerce'` mengubah nilai tanggal yang tidak dapat diuraikan secara aman menjadi NaT (Not a Time).",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa statistik Median lebih disarankan dibanding Mean saat mengisi missing values (imputation) pada data bergaji atau pendapatan?",
              choices: [
                "Karena Median tidak terpengaruh oleh pencilan (outlier) ekstrem yang miring",
                "Karena Median selalu bernilai nol",
                "Karena Mean membutuhkan memori RAM lebih besar",
                "Karena pandas tidak mendukung perhitungan Mean",
              ],
              answerIndex: 0,
              explanation: "Median mengukur nilai tengah posisi data sehingga tahan terhadap distorsi pencilan bernilai tinggi.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Berapa rumus rentang pencilan bawah (Lower Bound) pada metode IQR untuk mendeteksi outlier?",
              choices: ["Q1 - 1.5 * IQR", "Q3 + 1.5 * IQR", "Q1 / IQR", "Q3 - Q1"],
              answerIndex: 0,
              explanation: "Batas bawah outlier didefinisikan sebagai 1.5 kali IQR di bawah Kuartil Pertama (Q1).",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Metode pandas apa yang sangat efektif untuk merapikan karakter string pada kolom, seperti mengubah teks menjadi huruf kecil semua dan menghapus spasi awal/akhir?",
              choices: [
                ".str.strip().str.lower()",
                ".replace_all()",
                ".format_string()",
                ".clean_text()"
              ],
              answerIndex: 0,
              explanation: "Accessor `.str` di pandas memungkinkan operasi manipulasi string secara tervektorisasi pada seluruh elemen series DataFrame sekaligus.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Metode apa yang digunakan untuk menyeragamkan penulisan kategori yang berbeda-beda maknanya (misal: 'jkt' dan 'jakarta')?",
              choices: [
                ".replace({'jkt': 'jakarta'})",
                ".join()",
                ".drop_duplicates()",
                ".sort_values()"
              ],
              answerIndex: 0,
              explanation: "Dengan melewatkan dictionary ke `.replace()`, pandas dapat menstandarisasi sinonim penulisan ke format baku tunggal.",
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
        },
        {
          kind: "step",
          id: "da-3-2",
          title: "Ukuran Sebaran: Standar Deviasi & Persentil",
          explanation:
            "**Standar Deviasi (std)** mengukur seberapa jauh variasi data dari rata-rata. **Persentil ke-90** (P90) berarti 90% data berada di bawah nilai tersebut.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'latency': [10, 20, 30, 40, 100]})\np95 = df['latency'].quantile(0.95)\nprint(round(p95, 2))",
            output: "88.0",
            note: "P95 dan P99 adalah metrik standar pengujian latency di sistem backend.",
          },
          instruction:
            "Tuliskan perintah pandas untuk menghitung persentil ke-95 (`quantile(0.95)`) dari kolom `'latency'` pada DataFrame `df` dan simpan ke variabel `p95`.",
          starterCode: "# Tulis quantile 0.95 di sini\n",
          language: "text",
          tests: [
            {
              pattern: "p95\\s*=\\s*df\\[\\s*['\"]latency['\"]\\s*\\]\\.quantile\\(\\s*0\\.95\\s*\\)",
              message: "Gunakan: p95 = df['latency'].quantile(0.95)",
            },
          ],
          solution: "p95 = df['latency'].quantile(0.95)",
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
        },
        {
          kind: "step",
          id: "da-3-4",
          title: "Sampling & Bias Seleksi",
          explanation:
            "Kesimpulanmu hanya sebaik data yang kamu pakai. Kalau survei kepuasan hanya diisi pelanggan yang masih aktif, pelanggan yang kecewa sudah pergi dan suaranya tidak pernah terhitung — inilah survivorship bias. Sampel acak (random sampling) mengurangi risiko itu karena setiap anggota populasi punya peluang sama untuk terpilih. Sebelum menganalisis, biasakan bertanya: siapa yang TIDAK ada di data ini, dan apakah ketidakhadiran mereka mengubah kesimpulan?",
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
        },
        {
          kind: "step",
          id: "da-3-5",
          title: "Pengantar A/B Testing & P-Value",
          explanation:
            "A/B Testing membandingkan versi A (Kontrol) dan versi B (Varian). Nilai **p-value < 0.05** menunjukkan bahwa perbedaan hasil perlakuan signifikan secara statistik.",
          example: {
            code: "p_value = 0.02\nif p_value < 0.05:\n    print('Statistically Significant')",
            output: "Statistically Significant",
            note: "Nilai alpha standar industri untuk signifikansi adalah 5% (0.05).",
          },
          instruction:
            "Tuliskan pengondisian Python `if p_value < 0.05:` yang mencetak string `'Statistically Significant'`.",
          starterCode: "# Tulis if p_value di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "if\\s+p_value\\s*<\\s*0\\.05\\s*:\\s*\\n?\\s*print\\(\\s*[\"']Statistically Significant[\"']\\s*\\)",
              message: "Gunakan pengondisian p_value < 0.05",
            },
          ],
          solution: 'if p_value < 0.05:\n    print("Statistically Significant")',
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
        },
        {
          kind: "quiz",
          id: "da-3-kuis",
          title: "Kuis: Statistik Praktis",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Nilai ambang p-value standar industri berapa yang umumnya digunakan pada A/B Testing untuk menyatakan bahwa perbedaan varian signifikan secara statistik?",
              choices: ["p-value < 0.05", "p-value > 0.50", "p-value == 1.00", "p-value == 0.00"],
              answerIndex: 0,
              explanation: "Nilai p-value < 0.05 (tingkat signifikansi 5%) menandakan bahwa hasil eksperimen memiliki kemungkinan kurang dari 5% terjadi akibat kebetulan belaka.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa definisi dari Paradoks Simpson dalam analisis statistik data?",
              choices: [
                "Tren data yang konsisten pada sub-kelompok individual mengalami perubahan arah atau terbalik saat data digabungkan",
                "Korelasi yang selalu bernilai 1.00",
                "Perhitungan rata-rata yang membutuhkan memori besar",
                "Penyimpanan data yang melebihi batas 16MB",
              ],
              answerIndex: 0,
              explanation: "Paradoks Simpson terjadi karena adanya faktor pengganggu (confounding factor) dan ketidakseimbangan proporsi sampel di sub-kelompok.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Metrik sebaran persentil manakah yang paling umum digunakan dalam infrastruktur server backend untuk mengukur ambang batas latency 95% pengguna teratas?",
              choices: ["P95 (Persentil ke-95)", "Mean (Rata-rata)", "Modus", "IQR"],
              answerIndex: 0,
              explanation: "P95 memastikan 95% pengguna mengalami waktu respon di bawah angka tersebut, mengabaikan 5% outlier paling ekstrem.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Meskipun dua variabel memiliki nilai korelasi statistik yang sangat tinggi, hal itu belum tentu membuktikan adanya...",
              choices: [
                "Kausalitas (hubungan sebab-akibat langsung)",
                "Kesalahan perhitungan pada dataset",
                "Kebutuhan visualisasi scatter plot",
                "Keberadaan nilai negatif di dalam data"
              ],
              answerIndex: 0,
              explanation: "Korelasi hanyalah indikasi dua tren yang sejalan. Tanpa pengujian eksperimen yang terkontrol, kita tidak bisa memastikan yang satu menyebabkan yang lain.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Bagaimana cara terbaik melaporkan nilai perkiraan metrik bisnis (misal prediksi omset) kepada pihak manajemen secara transparan dan jujur?",
              choices: [
                "Melaporkan estimasi utama diikuti margin error atau interval kepercayaannya (misal: ± 2%)",
                "Memberikan jaminan pasti angka tersebut 100% akurat",
                "Mengabaikan data pencilan secara acak",
                "Hanya memberikan angka rata-rata tanpa konteks lain"
              ],
              answerIndex: 0,
              explanation: "Menyampaikan rentang margin of error mencerminkan kejujuran terkait ketidakpastian yang tidak dapat dipisahkan dalam prediksi statistik apa pun.",
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
          kind: "step",
          id: "da-4-1",
          title: "Anatomi Figure Matplotlib (fig, ax)",
          explanation:
            "Matplotlib membagi grafik menjadi **Figure** (kanvas luar) dan **Axes** (area plot). Gunakan sintaks berbasis objek `fig, ax = plt.subplots()`.",
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
              pattern: "fig\\s*,\\s*ax\\s*=\\s*plt\\.subplots\\(\\)",
              message: "Gunakan: fig, ax = plt.subplots()",
            },
          ],
          solution: "fig, ax = plt.subplots()",
        },
        {
          kind: "step",
          id: "da-4-2",
          title: "Jenis Chart Inti (Line, Bar, Hist, Scatter, Box)",
          explanation:
            "`ax.plot()` untuk Tren Garis, `ax.bar()` untuk Bar Chart, `ax.hist()` untuk Distribusi, `ax.scatter()` untuk Sebaran Korelasi.",
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
              pattern: "ax\\.scatter\\(\\s*df\\[\\s*['\"]x['\"]\\s*\\]\\s*,\\s*df\\[\\s*['\"]y['\"]\\s*\\]\\s*\\)",
              message: "Gunakan: ax.scatter(df['x'], df['y'])",
            },
          ],
          solution: "ax.scatter(df['x'], df['y'])",
        },
        {
          kind: "step",
          id: "da-4-3",
          title: "Visualisasi Statistik Cepat dengan Seaborn",
          explanation:
            "Seaborn adalah wrapper tinggi di atas Matplotlib untuk membuat chart statistik indah (seperti `sns.boxplot()`, `sns.heatmap()`) secara langsung dari DataFrame.",
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
              pattern: "sns\\.heatmap\\(\\s*df\\.corr\\(\\)\\s*,\\s*annot\\s*=\\s*True\\s*\\)",
              message: "Gunakan: sns.heatmap(df.corr(), annot=True)",
            },
          ],
          solution: "sns.heatmap(df.corr(), annot=True)",
        },
        {
          kind: "step",
          id: "da-4-4",
          title: "Prinsip Kejujuran Visual: Sumbu Y Mulai dari 0",
          explanation:
            "JANGAN memotong sumbu Y pada Bar Chart (wajib mulai dari 0)! Memotong sumbu Y memperlihatkan perbedaan kecil seolah-olah bernilai raksasa.",
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
              pattern: "ax\\.set_ylim\\(\\s*bottom\\s*=\\s*0\\s*\\)",
              message: "Tuliskan: ax.set_ylim(bottom=0)",
            },
          ],
          solution: "ax.set_ylim(bottom=0)",
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
        },
        {
          kind: "step",
          id: "da-4-6",
          title: "Menyimpan Gambar Grafik (plt.savefig)",
          explanation:
            "Simpan grafik ke berkas gambar beresolusi tinggi dengan `plt.savefig('chart.png', dpi=300, bbox_inches='tight')`.",
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
              pattern: "plt\\.savefig\\(\\s*['\"]chart\\.png['\"]\\s*,\\s*dpi\\s*=\\s*300\\s*\\)",
              message: "Gunakan: plt.savefig('chart.png', dpi=300)",
            },
          ],
          solution: "plt.savefig('chart.png', dpi=300)",
        },
        {
          kind: "quiz",
          id: "da-4-kuis",
          title: "Kuis: Visualisasi Data",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Prinsip etika utama apa yang HARUS dipatuhi saat membuat Bar Chart (Grafik Batang) agar tidak memanipulasi persepsi pembaca?",
              choices: [
                "Sumbu Y wajib dimulai dari angka 0 (Zero Baseline)",
                "Grafik harus selalu berwarna merah",
                "Semua judul harus menggunakan huruf kecil",
                "Membuat grafik 3D",
              ],
              answerIndex: 0,
              explanation: "Bar Chart yang tidak dimulai dari angka 0 pada sumbu Y secara visual memanipulasi rasio perbandingan tinggi antar batang.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Library visualisasi Python manakah yang dibangun di atas Matplotlib dan dirancang khusus untuk membuat chart statistik dengan tema default yang indah?",
              choices: ["Seaborn", "NumPy", "Flask", "SQLAlchemy"],
              answerIndex: 0,
              explanation: "Seaborn menyederhanakan pembuatan chart statistik kompleks seperti boxplot dan heatmap langsung dari pandas DataFrame.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Parameter opsi apa pada `plt.savefig()` yang berfungsi memastikan label sumbu dan judul grafik tidak terpotong saat disimpan ke gambar?",
              choices: ["bbox_inches='tight'", "dpi=10", "format='raw'", "transparent=False"],
              answerIndex: 0,
              explanation: "`bbox_inches='tight'` menyesuaikan area bounding box grafik secara presisi mengelilingi seluruh elemen teks.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Fungsi Matplotlib mana yang paling ideal digunakan untuk menunjukkan sebaran dua variabel kontinu sekaligus guna mendeteksi pola korelasinya?",
              choices: [
                "ax.scatter()",
                "ax.pie()",
                "ax.bar()",
                "ax.hist()"
              ],
              answerIndex: 0,
              explanation: "Scatter plot sangat efektif dalam mengekspos persebaran data individual antar dua sumbu numerik yang berkorelasi.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Apa keuntungan utama menggunakan pemisahan anatomi `fig, ax = plt.subplots()` di Matplotlib?",
              choices: [
                "Memudahkan pengelolaan banyak sub-grafik (subplots) secara independen di dalam satu kanvas",
                "Secara otomatis mendeteksi korelasi data statistik",
                "Mempercepat waktu unduh file CSV dari internet",
                "Menghapus nilai kosong (missing values) pada dataset"
              ],
              answerIndex: 0,
              explanation: "Penggunaan objek spesifik Axes (`ax`) mempermudah kostumisasi terpisah di tiap diagram apabila figure menampung lebih dari 1 grafik (subplots).",
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
            "Buat dictionary bernama `alat_bi` berisi tiga alat: `'looker studio'` bernilai `'gratis'`, `'tableau'` bernilai `'berbayar'`, dan `'power bi'` bernilai `'berbayar'`.",
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
            "Buat dictionary bernama `jadwal_laporan` dengan kunci `'penerima'` berisi `'direktur@toko.id'` dan kunci `'cron'` berisi jadwal setiap hari Senin pukul 08.00 (`'0 8 * * 1'`).",
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
        },
        {
          kind: "quiz",
          id: "da-5-kuis",
          title: "Kuis: BI Tools",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Dalam terminologi BI Tools (seperti Looker Studio / Tableau), atribut kualitatif yang digunakan untuk mengelompokkan data (seperti Nama Kota atau Kategori) disebut?",
              choices: ["Dimensi (Dimension)", "Metrik (Metric)", "Scorecard", "Calculated Field"],
              answerIndex: 0,
              explanation: "Dimensi adalah data kualitatif yang digunakan untuk mengelompokkan dan memfilter metrik angka.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Komponen kartu visualisasi Looker Studio mana yang paling cocok dipasang di bagian paling atas dashboard untuk menampilkan angka tunggal KPI utama (seperti Total Revenue)?",
              choices: ["Scorecard", "Pie Chart", "Scatter Plot", "Pivot Table"],
              answerIndex: 0,
              explanation: "Scorecard dirancang khusus untuk memamerkan angka ringkasan tunggal KPI tingkat tinggi secara menonjol.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Pola navigasi tata letak (layout) visual apa yang disarankan untuk menyusun komponen dashboard dari KPI utama ke detail tabel breakdown?",
              choices: ["Z-Pattern Layout", "Random Grid", "Circle Scatter", "Bottom-Up Layout"],
              answerIndex: 0,
              explanation: "Pola Z (Top-Left KPI ➔ Top-Right Trend ➔ Bottom Breakdown) mengikuti alur baca alami mata manusia.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa fungsi utama fitur 'Calculated Field' pada sebuah aplikasi BI Tools?",
              choices: [
                "Membuat metrik rumusan baru berbasis rasio/agregasi langsung di dalam level BI tanpa mengubah database mentah",
                "Menghubungkan aplikasi BI dengan perangkat mobile",
                "Menjadwalkan pengiriman email PDF ke manajemen",
                "Mencetak file laporan ke mesin printer lokal"
              ],
              answerIndex: 0,
              explanation: "Calculated Field sangat krusial untuk membuat turunan rasio baru (seperti Margin %) saat melakukan eksplorasi data agregat.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Komponen interaktif apa yang paling tepat ditambahkan agar pihak direksi dapat mengganti rentang waktu analisis tanpa perlu merepotkan tim analis data?",
              choices: [
                "Date Range Control (Slicer Tanggal)",
                "Tombol Delete Database",
                "Grafik Pie 3 Dimensi",
                "Tabel relasional statis"
              ],
              answerIndex: 0,
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
            "Buat dictionary bernama `isi_presentasi` dengan dua kunci: `'eksekutif'` berisi list `['temuan', 'dampak', 'rekomendasi']`, dan `'teknis'` berisi list `['sumber data', 'metode', 'asumsi']`.",
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
        },
        {
          kind: "quiz",
          id: "da-6-kuis",
          title: "Kuis: Data Storytelling",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Struktur narasi 3 tahap apa yang paling efektif dalam menyusun presentasi Data Storytelling?",
              choices: [
                "Konteks -> Temuan Data (Insight) -> Rekomendasi Aksi",
                "Judul -> Grafik -> Terima Kasih",
                "Tabel Mentah -> Rumus -> Kesimpulan",
                "Saran -> Pertanyaan -> Grafik",
              ],
              answerIndex: 0,
              explanation: "Alur Konteks -> Temuan -> Rekomendasi memberikan latar belakang yang jelas dan mengarahkan keputusan bisnis.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Prinsip utama apa yang harus diterapkan pada tiap slide presentasi data eksekutif?",
              choices: [
                "Setiap slide hanya menyampaikan SATU pesan utama (One slide, one key takeaway)",
                "Memuat minimal 10 grafik sekaligus di 1 slide",
                "Menggunakan font berukuran 8pt agar muat banyak",
                "Sengaja menyembunyikan legenda warna",
              ],
              answerIndex: 0,
              explanation: "Menyampaikan 1 pesan utama per slide menjaga fokus audiens dan mempercepat pemahaman eksekutif.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa perbedaan mendasar antara data observation biasa dan Actionable Insight?",
              choices: [
                "Actionable Insight memberikan rekomendasi aksi bisnis konkret berdasarkan interpretasi temuan data",
                "Data observation menggunakan bahasa asing",
                "Actionable Insight hanya dibuat di Microsoft Excel",
                "Data observation tidak memiliki angka",
              ],
              answerIndex: 0,
              explanation: "Actionable Insight melangkah lebih jauh dari sekadar melihat tren angka dengan mengusulkan keputusan bisnis yang harus diambil.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Jika kamu akan presentasi di depan tim jajaran eksekutif level-C, komponen apa yang paling butuh ditegaskan di halaman pertama laporan?",
              choices: [
                "Executive Summary yang merangkum langsung dampak bisnis utama dan ringkasan langkah ke depan",
                "Pemaparan panjang lebar soal jumlah sel missing values",
                "Detail rumus probabilitas yang digunakan pada model statistik",
                "Rincian kode program Python matplotlib yang dibuat"
              ],
              answerIndex: 0,
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
                "Berhenti bekerja di perusahaan tersebut keesokan harinya"
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
        },
        {
          kind: "step",
          id: "da-7-6",
          title: "Menyusun Repository GitHub Portofolio yang Rapi",
          explanation:
            "Struktur Repo Portofolio: 1. `README.md` (Gambaran Proyek & Tautan Dashboard), 2. `notebooks/` (Jupyter Notebook bersih), 3. `data/` (Dataset / Link sumber).",
          example: {
            code: "# Portfolio Analytics\n## Dashboard Link\n[Looker Studio Dashboard](https://lookerstudio.google.com)",
            output: "Dokumen README Markdown terstruktur bersih.",
            note: "Kerapian repository mencerminkan kedisiplinan kerja.",
          },
          instruction:
            "Tuliskan struktur file README markdown yang memuat header `# Portfolio Analytics` dan subheader `## Dashboard Link`.",
          starterCode: "# Tulis Markdown README di sini\n",
          language: "text",
          tests: [
            {
              pattern: "#\\s+Portfolio Analytics\\s*\\n\\s*##\\s+Dashboard Link",
              message: "Tuliskan `# Portfolio Analytics` disusul `## Dashboard Link`",
            },
          ],
          solution: "# Portfolio Analytics\n## Dashboard Link",
        },
        {
          kind: "quiz",
          id: "da-7-kuis",
          title: "Kuis: Studi Kasus End-to-End",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Langkah pertama apa yang HARUS dilakukan oleh seorang Data Analyst sebelum mulai mengunduh atau mengetik kode pembersihan data?",
              choices: [
                "Merumuskan Pertanyaan Bisnis Kunci (Business Questions) yang ingin dijawab",
                "Langsung membuat grafik 3D",
                "Menghapus seluruh dataset",
                "Membeli server baru",
              ],
              answerIndex: 0,
              explanation: "Merumuskan Pertanyaan Bisnis Kunci memberi arah dan tujuan yang jelas bagi seluruh alur proses eksplorasi dan analisis data.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Berkas dokumentasi Markdown standar apa di akar repository GitHub yang paling pertama kali dibaca oleh tim perekrut (recruiter)?",
              choices: ["README.md", "package.json", ".gitignore", "docker-compose.yml"],
              answerIndex: 0,
              explanation: "`README.md` adalah halaman muka repository yang menyajikan ikhtisar proyek, metodologi, dan tautan dashboard interaktif.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa portofolio berbasis dataset publik lokal Indonesia (seperti BPS atau Data.go.id) memiliki nilai tambah tinggi saat melamar posisi Data Analyst?",
              choices: [
                "Karena menunjukkan pemahaman terhadap konteks bisnis dan data aktual di industri lokal",
                "Karena dataset lokal tidak memiliki angka",
                "Karena dataset lokal hanya boleh dibuka di malam hari",
                "Karena dataset lokal tidak memerlukan variabel",
              ],
              answerIndex: 0,
              explanation: "Penggunaan dataset lokal memperlihatkan kemampuan analis dalam menyelesaikan masalah bernilai bisnis nyata di lingkungan kerja Indonesia.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Pada siklus hidup proyek analitik penuh (Full Cycle), tahapan pembersihan dan transformasi rumit biasanya dilakukan menggunakan alat apa (sebelum masuk tahap visualisasi akhir)?",
              choices: [
                "Library Python pandas (atau dbt/SQL tingkat mahir)",
                "Microsoft Word",
                "Aplikasi Editor Gambar Photoshop",
                "Formulir survei pendaftaran akun"
              ],
              answerIndex: 0,
              explanation: "Pembersihan dataset kotor menjadi siap konsumsi umumnya mengandalkan kekuatan manipulasi transformasional di library pandas.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Kompilasi dokumen esensial yang sebaiknya dimuat ke dalam repository GitHub portofoliomu mencakup...",
              choices: [
                "README, Notebook eksperimen bersih, skrip source code utuh, dan rujukan dataset asal",
                "File instalasi sistem operasi sebesar 2 GB",
                "Video rekaman bermain game selama 10 jam",
                "Kata sandi akun server pangkalan data internal perusahaan"
              ],
              answerIndex: 0,
              explanation: "Repositori yang bersih, terstruktur rapi, lengkap dengan referensi reproduksi penelitian adalah bukti kompetensi nyata analis di hadapan tim teknis.",
            },
          ],
        },
      ],
    },
  ],
};
