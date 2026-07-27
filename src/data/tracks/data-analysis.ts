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
            "Gunakan `.str.lower()`, `.str.strip()`, dan `.str.replace()` untuk merapikan karakter string pada kolom DataFrame.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'email': [' BUDI@TEST.COM ']}\ndf['email'] = df['email'].str.strip().str.lower()\nprint(df['email'].iloc[0])",
            output: "budi@test.com",
            note: "str accessor memungkinkan operasi teks vektor pada seluruh elemen Series.",
          },
          instruction:
            "Tuliskan pembersihan kolom `'email'` pada `df` dengan menghapus spasi dan mengubah huruf menjadi kecil (`.str.strip().str.lower()`).",
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
          title: "Mean vs Median: Kapan Rata-Rata Menipu?",
          explanation:
            "Bayangkan ada 9 orang biasa di sebuah bar dengan gaji rata-rata 5 juta. Tiba-tiba Bill Gates masuk. Secara rata-rata (Mean), kini semua orang di bar itu menjadi miliarder! Inilah kelemahan Mean — ia sangat mudah ditipu oleh nilai ekstrem (pencilan / outlier). Untuk data yang rentangnya jomplang seperti gaji, gunakan Median (nilai posisi tengah setelah data diurutkan) karena ia memberikan gambaran realitas yang jauh lebih jujur.",
          example: {
            code:
              "function getBestCentralTendency(isSkewed) {\n" +
              "  return isSkewed ? 'median' : 'mean';\n" +
              "}\n" +
              "console.log(getBestCentralTendency(true));",
            output: "median",
            note: "Selalu bandingkan Mean dan Median sebelum menarik kesimpulan.",
          },
          instruction:
            "Buat fungsi `getBestCentralTendency(isSkewed)` yang mengembalikan string `'median'` jika `isSkewed` bernilai `true`, dan `'mean'` jika `false`.",
          starterCode: "// Tulis fungsi getBestCentralTendency di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "return\\s+isSkewed\\s*\\?\\s*['\"]median['\"]\\s*:\\s*['\"]mean['\"]",
              message: "Gunakan pengondisian: isSkewed ? 'median' : 'mean'",
            },
          ],
          solution:
            "function getBestCentralTendency(isSkewed) {\n  return isSkewed ? 'median' : 'mean';\n}",
        },
        {
          kind: "step",
          id: "da-3-2",
          title: "Ukuran Sebaran: Standar Deviasi & Persentil",
          explanation:
            "**Standar Deviasi (std)** mengukur seberapa jauh variasi data dari rata-rata. **Persentil ke-90** (P90) berarti 90% data berada di bawah nilai tersebut.",
          example: {
            code: "import pandas as pd\ndf = pd.DataFrame({'latency': [10, 20, 30, 40, 100]})\np95 = df['latency'].quantile(0.95)\nprint(p95)",
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
          title: "Korelasi ≠ Kausalitas",
          explanation:
            "Dua variabel yang saling berkorelasi erat TIDAK BERARTI yang satu menyebabkan yang lain (Correlation does not imply Causation).",
          example: {
            code:
              "function validateCausality(hasCorrelation, hasControlledExperiment) {\n" +
              "  return Boolean(hasCorrelation && hasControlledExperiment);\n" +
              "}\n" +
              "console.log(validateCausality(true, false));",
            output: "false",
            note: "Variabel pengganggu yang tidak terukur disebut Confounding Variable.",
          },
          instruction:
            "Buat fungsi `validateCausality(hasCorrelation, hasControlledExperiment)` yang mengembalikan `true` hanya jika terdapat korelasi DAN eksperimen terkontrol.",
          starterCode: "// Tulis fungsi validateCausality di sini\n",
          language: "js",
          tests: [
            {
              pattern: "Boolean\\s*\\(\\s*hasCorrelation\\s*&&\\s*hasControlledExperiment\\s*\\)",
              message: "Periksa: hasCorrelation && hasControlledExperiment",
            },
          ],
          solution:
            "function validateCausality(hasCorrelation, hasControlledExperiment) {\n  return Boolean(hasCorrelation && hasControlledExperiment);\n}",
        },
        {
          kind: "step",
          id: "da-3-4",
          title: "Sampling & Bias Seleksi Data",
          explanation:
            "Bias Seleksi terjadi jika sampel data yang dikumpulkan tidak mewakili keseluruhan populasi sejati (misal: hanya mensurvei pengguna iPhone saat mengukur pendapatan masyarakat).",
          example: {
            code:
              "function checkSamplingBias(sampleType) {\n" +
              "  return sampleType === 'random_stratified' ? 'unbiased' : 'biased';\n" +
              "}\n" +
              "console.log(checkSamplingBias('random_stratified'));",
            output: "unbiased",
            note: "Pastikan metode pengambilan sampel bersifat acak dan representatif.",
          },
          instruction:
            "Buat fungsi `checkSamplingBias(sampleType)` yang mengembalikan `'unbiased'` jika `sampleType === 'random_stratified'` dan `'biased'` jika sebaliknya.",
          starterCode: "// Tulis fungsi checkSamplingBias di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "sampleType\\s*===\\s*['\"]random_stratified['\"]\\s*\\?\\s*['\"]unbiased['\"]\\s*:\\s*['\"]biased['\"]",
              message: "Gunakan: sampleType === 'random_stratified' ? 'unbiased' : 'biased'",
            },
          ],
          solution:
            "function checkSamplingBias(sampleType) {\n  return sampleType === 'random_stratified' ? 'unbiased' : 'biased';\n}",
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
          title: "Jebakan Agregasi: Simpson's Paradox",
          explanation:
            "Paradoks Simpson adalah fenomena di mana sebuah tren terlihat pada beberapa kelompok terpisah, namun HILANG atau TERBALIK saat kelompok-kelompok tersebut digabungkan.",
          example: {
            code:
              "function detectSimpsonParadox(overall, sub) {\n" +
              "  return sub.some(t => t !== overall);\n" +
              "}\n" +
              "console.log(detectSimpsonParadox('up', ['down', 'down']));",
            output: "true",
            note: "Menghindari jebakan salah interpretasi data agregat.",
          },
          instruction:
            "Buat fungsi `detectSimpsonParadox(overallTrend, subgroupTrends)` yang mengembalikan `true` jika setidaknya ada elemen `subgroupTrends` yang berbeda dari `overallTrend`.",
          starterCode: "// Tulis fungsi detectSimpsonParadox di sini\n",
          language: "js",
          tests: [
            {
              pattern: "subgroupTrends\\.some\\(\\s*t\\s*=>\\s*t\\s*!==\\s*overallTrend\\s*\\)",
              message: "Gunakan: subgroupTrends.some(t => t !== overallTrend)",
            },
          ],
          solution:
            "function detectSimpsonParadox(overallTrend, subgroupTrends) {\n  return subgroupTrends.some(t => t !== overallTrend);\n}",
        },
        {
          kind: "step",
          id: "da-3-7",
          title: "Melaporkan Ketidakpastian (Margin of Error)",
          explanation:
            "Sajikan hasil analisis bersama Confidence Interval (Rentang Kepercayaan), misal: 'Estimasi kenaikan omset adalah 15% ± 2% dengan tingkat kepercayaan 95%'.",
          example: {
            code:
              "function formatCI(mean, margin) {\n" +
              "  return mean + ' +/- ' + margin;\n" +
              "}\n" +
              "console.log(formatCI('15%', '2%'));",
            output: "15% +/- 2%",
            note: "Menyampaikan ketidakpastian secara transparan kepada pemangku kepentingan.",
          },
          instruction:
            "Buat fungsi `formatConfidenceInterval(mean, margin)` yang mengembalikan string terformat `\"${mean} +/- ${margin}\"`.",
          starterCode: "// Tulis fungsi formatConfidenceInterval di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "mean\\s*\\+\\s*['\"] \\+/- ['\"]\\s*\\+\\s*margin|`\\$\\{mean\\}\\s*\\+/-\\s*\\$\\{margin\\}`",
              message: "Format string: `${mean} +/- ${margin}`",
            },
          ],
          solution:
            "function formatConfidenceInterval(mean, margin) {\n  return `${mean} +/- ${margin}`;\n}",
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
          title: "Anotasi & Highlight Poin Penting",
          explanation:
            "Gunakan `ax.annotate()` untuk memberikan penjelasan langsung pada puncak poin data penting di grafik.",
          example: {
            code:
              "function addChartAnnotation(ax, text, x, y) {\n" +
              "  ax.annotate(text, { xy: [x, y] });\n" +
              "}\n" +
              "console.log('Annotated');",
            output: "Annotated",
            note: "Anotasi menjadikan grafik bercerita secara mandiri.",
          },
          instruction:
            "Buat fungsi `addChartAnnotation(ax, text, x, y)` yang memanggil `ax.annotate(text, { xy: [x, y] })`.",
          starterCode: "// Tulis fungsi addChartAnnotation di sini\n",
          language: "js",
          tests: [
            {
              pattern: "ax\\.annotate\\(\\s*text\\s*,\\s*\\{\\s*xy\\s*:\\s*\\[\\s*x\\s*,\\s*y\\s*\\]\\s*\\}\\s*\\)",
              message: "Panggil ax.annotate(text, { xy: [x, y] })",
            },
          ],
          solution:
            "function addChartAnnotation(ax, text, x, y) {\n  ax.annotate(text, { xy: [x, y] });\n}",
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
            "**Dimensi** adalah data kualitatif/kategori untuk mengelompokkan (misal: Kota, Kategori, Tanggal). **Metrik** adalah data kuantitatif/angka untuk dihitung (misal: Total Penjualan, Profit).",
          example: {
            code:
              "function classifyBIFIeld(fieldType) {\n" +
              "  return fieldType === 'numeric_sum' ? 'metric' : 'dimension';\n" +
              "}\n" +
              "console.log(classifyBIFIeld('numeric_sum'));",
            output: "metric",
            note: "Memahami beda Dimensi vs Metrik mempermudah penguasaan seluruh alat BI.",
          },
          instruction:
            "Buat fungsi `classifyBIFIeld(fieldType)` yang mengembalikan `'metric'` jika `fieldType === 'numeric_sum'` dan `'dimension'` jika sebaliknya.",
          starterCode: "// Tulis fungsi classifyBIFIeld di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "fieldType\\s*===\\s*['\"]numeric_sum['\"]\\s*\\?\\s*['\"]metric['\"]\\s*:\\s*['\"]dimension['\"]",
              message: "Gunakan: fieldType === 'numeric_sum' ? 'metric' : 'dimension'",
            },
          ],
          solution:
            "function classifyBIFIeld(fieldType) {\n  return fieldType === 'numeric_sum' ? 'metric' : 'dimension';\n}",
        },
        {
          kind: "step",
          id: "da-5-2",
          title: "Looker Studio: Koneksi Data & Kartu Scorecard",
          explanation:
            "Looker Studio (Google Data Studio) terhubung gratis ke BigQuery, Google Sheets, atau PostgreSQL. Gunakan **Scorecard** untuk menampilkan KPI angka besar di bagian atas.",
          example: {
            code:
              "function formatScorecardValue(num) {\n" +
              "  return 'Rp ' + num.toLocaleString('id-ID');\n" +
              "}\n" +
              "console.log(formatScorecardValue(1500000));",
            output: "Rp 1.500.000",
            note: "Looker Studio tidak memungut biaya lisensi pengguna.",
          },
          instruction:
            "Buat fungsi `formatScorecardValue(num)` yang mengembalikan string terformat `'Rp '` ditambah nilai `num.toLocaleString('id-ID')`.",
          starterCode: "// Tulis fungsi formatScorecardValue di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "['\"]Rp ['\"]\\s*\\+\\s*num\\.toLocaleString\\(\\s*['\"]id-ID['\"]\\s*\\)",
              message: "Format angka dengan: 'Rp ' + num.toLocaleString('id-ID')",
            },
          ],
          solution:
            "function formatScorecardValue(num) {\n  return 'Rp ' + num.toLocaleString('id-ID');\n}",
        },
        {
          kind: "step",
          id: "da-5-3",
          title: "Interaktivitas Dashboard: Date Range Control & Slicers",
          explanation:
            "Tambahkan kontrol **Date Range Picker** dan **Drop-down Filter** agar pemangku kepentingan dapat mengubah rentang tanggal dan wilayah analisis secara mandiri.",
          example: {
            code:
              "function buildDateFilterQuery(startDate, endDate) {\n" +
              "  return `date >= '${startDate}' AND date <= '${endDate}'`;\n" +
              "}\n" +
              "console.log(buildDateFilterQuery('2024-01-01', '2024-01-31'));",
            output: "date >= '2024-01-01' AND date <= '2024-01-31'",
            note: "Menghilangkan permintaan laporan manual berulang dari manajemen.",
          },
          instruction:
            "Buat fungsi `buildDateFilterQuery(startDate, endDate)` yang mengembalikan string query `\"date >= '\${startDate}' AND date <= '\${endDate}'\"`.",
          starterCode: "// Tulis fungsi buildDateFilterQuery di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "date\\s*>=\\s*['\"]?\\$\\{startDate\\}['\"]?\\s*AND\\s*date\\s*<=\\s*['\"]?\\$\\{endDate\\}['\"]?",
              message: "Format query string: date >= '${startDate}' AND date <= '${endDate}'",
            },
          ],
          solution:
            "function buildDateFilterQuery(startDate, endDate) {\n  return `date >= '${startDate}' AND date <= '${endDate}'`;\n}",
        },
        {
          kind: "step",
          id: "da-5-4",
          title: "Calculated Field di BI Tools",
          explanation:
            "Buat metrik hitungan baru di Looker Studio/Tableau menggunakan Calculated Field (misal: `SUM(Profit) / SUM(Revenue)` untuk Margin %).",
          example: {
            code:
              "function calculateMarginPercentage(profit, revenue) {\n" +
              "  return (profit / revenue) * 100;\n" +
              "}\n" +
              "console.log(calculateMarginPercentage(30, 100));",
            output: "30",
            note: "Perhitungan agregasi dilakukan di level BI Tool.",
          },
          instruction:
            "Buat fungsi `calculateMarginPercentage(profit, revenue)` yang mengembalikan rasio persentase `(profit / revenue) * 100`.",
          starterCode: "// Tulis fungsi calculateMarginPercentage di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "\\(\\s*profit\\s*/\\s*revenue\\s*\\)\\s*\\*\\s*100",
              message: "Hitung: (profit / revenue) * 100",
            },
          ],
          solution:
            "function calculateMarginPercentage(profit, revenue) {\n  return (profit / revenue) * 100;\n}",
        },
        {
          kind: "step",
          id: "da-5-5",
          title: "Desain Dashboard: Dari Pertanyaan Bisnis ke Layout",
          explanation:
            "Tata letak membaca pola Z: 1. Kiri Atas -> KPI Utama, 2. Kanan Atas -> Tren Waktu, 3. Bawah -> Rincian Breakdown Kategori.",
          example: {
            code:
              "function getDashboardLayoutZone(pos) {\n" +
              "  return pos === 'top_left' ? 'kpi_header' : 'breakdown_table';\n" +
              "}\n" +
              "console.log(getDashboardLayoutZone('top_left'));",
            output: "kpi_header",
            note: "Hindari meletakkan grafik detail di area paling atas.",
          },
          instruction:
            "Buat fungsi `getDashboardLayoutZone(pos)` yang mengembalikan `'kpi_header'` untuk posisi `'top_left'` dan `'breakdown_table'` untuk posisi lainnya.",
          starterCode: "// Tulis fungsi getDashboardLayoutZone di sini\n",
          language: "js",
          tests: [
            {
              pattern: "pos\\s*===\\s*['\"]top_left['\"]\\s*\\?\\s*['\"]kpi_header['\"]\\s*:\\s*['\"]breakdown_table['\"]",
              message: "Gunakan: pos === 'top_left' ? 'kpi_header' : 'breakdown_table'",
            },
          ],
          solution:
            "function getDashboardLayoutZone(pos) {\n  return pos === 'top_left' ? 'kpi_header' : 'breakdown_table';\n}",
        },
        {
          kind: "step",
          id: "da-5-6",
          title: "Pengenalan Tableau & Power BI",
          explanation:
            "Tableau & Power BI menggunakan konsep yang sama persis dengan Looker Studio (Data Model -> Dimensions/Metrics -> Dashboards).",
          example: {
            code:
              "function getSupportedBITools() {\n" +
              "  return ['Looker Studio', 'Tableau', 'Power BI'];\n" +
              "}\n" +
              "console.log(getSupportedBITools());",
            output: '["Looker Studio", "Tableau", "Power BI"]',
            note: "Fokus pada penguasaan konsep dasar BI.",
          },
          instruction:
            "Buat fungsi `getSupportedBITools()` yang mengembalikan array string `['Looker Studio', 'Tableau', 'Power BI']`.",
          starterCode: "// Tulis fungsi getSupportedBITools di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "\\[\\s*['\"]Looker Studio['\"]\\s*,\\s*['\"]Tableau['\"]\\s*,\\s*['\"]Power BI['\"]\\s*\\]",
              message: "Kembalikan ['Looker Studio', 'Tableau', 'Power BI']",
            },
          ],
          solution:
            "function getSupportedBITools() {\n  return ['Looker Studio', 'Tableau', 'Power BI'];\n}",
        },
        {
          kind: "step",
          id: "da-5-7",
          title: "Berbagi Laporan & Scheduled Email Delivery",
          explanation:
            "Atur **Scheduled Email Delivery** di Looker Studio agar PDF ringkasan dashboard otomatis terkirim ke email jajaran direksi setiap Senin jam 8 pagi.",
          example: {
            code:
              "function createEmailScheduleConfig(email, cron) {\n" +
              "  return { recipient: email, cron: cron, format: 'pdf' };\n" +
              "}\n" +
              "console.log(createEmailScheduleConfig('ceo@company.com', 'weekly'));",
            output: '{ recipient: "ceo@company.com", cron: "weekly", format: "pdf" }',
            note: "Menjamin manajemen menerima informasi terupdate secara teratur.",
          },
          instruction:
            "Buat fungsi `createEmailScheduleConfig(email, cron)` yang mengembalikan objek `{ recipient: email, cron: cron, format: 'pdf' }`.",
          starterCode: "// Tulis fungsi createEmailScheduleConfig di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "recipient\\s*:\\s*email\\s*,\\s*cron\\s*:\\s*cron\\s*,\\s*format\\s*:\\s*['\"]pdf['\"]",
              message: "Kembalikan objek: { recipient: email, cron: cron, format: 'pdf' }",
            },
          ],
          solution:
            "function createEmailScheduleConfig(email, cron) {\n  return { recipient: email, cron: cron, format: 'pdf' };\n}",
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
            "**Eksekutif** butuh kesimpulan singkat, dampak omset, dan rekomendasi aksi. **Tim Teknis** butuh rincian metodologi, kualitas sampel, dan statistik p-value.",
          example: {
            code:
              "function formatPresentationDetail(aud) {\n" +
              "  return aud === 'executive' ? 'executive_summary' : 'statistical_methodology';\n" +
              "}\n" +
              "console.log(formatPresentationDetail('executive'));",
            output: "executive_summary",
            note: "Sesuaikan bahasa presentasi dengan latar belakang pendengar.",
          },
          instruction:
            "Buat fungsi `formatPresentationDetail(audience)` yang mengembalikan `'executive_summary'` jika `audience === 'executive'` dan `'statistical_methodology'` jika sebaliknya.",
          starterCode: "// Tulis fungsi formatPresentationDetail di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "audience\\s*===\\s*['\"]executive['\"]\\s*\\?\\s*['\"]executive_summary['\"]\\s*:\\s*['\"]statistical_methodology['\"]",
              message: "Gunakan: audience === 'executive' ? 'executive_summary' : 'statistical_methodology'",
            },
          ],
          solution:
            "function formatPresentationDetail(audience) {\n  return audience === 'executive' ? 'executive_summary' : 'statistical_methodology';\n}",
        },
        {
          kind: "step",
          id: "da-6-2",
          title: "Struktur Narasi Storytelling (Context -> Finding -> Action)",
          explanation:
            "Struktur Storytelling yang efektif: 1. **Konteks** (Latar Masalah), 2. **Temuan Data** (Insight Angka), 3. **Rekomendasi Aksi** (Langkah Konkret).",
          example: {
            code:
              "const storyArc = {\n" +
              "  context: 'High churn',\n" +
              "  finding: 'Payment fails',\n" +
              "  action: 'Fix gateway'\n" +
              "};\n" +
              "console.log(storyArc.finding);",
            output: "Payment fails",
            note: "Jangan berhenti hanya pada menyajikan chart tanpa rekomendasi.",
          },
          instruction:
            "Buat objek `storyArc` yang memiliki tiga properti: `context: 'High churn'`, `finding: 'Payment fails'`, dan `action: 'Fix gateway'`.",
          starterCode: "// Tulis objek storyArc di sini\n",
          language: "js",
          tests: [
            {
              pattern: "context\\s*:\\s*['\"]High churn['\"]",
              message: "Set context: 'High churn'",
            },
            {
              pattern: "finding\\s*:\\s*['\"]Payment fails['\"]",
              message: "Set finding: 'Payment fails'",
            },
            {
              pattern: "action\\s*:\\s*['\"]Fix gateway['\"]",
              message: "Set action: 'Fix gateway'",
            },
          ],
          solution:
            "const storyArc = {\n  context: 'High churn',\n  finding: 'Payment fails',\n  action: 'Fix gateway'\n};",
        },
        {
          kind: "step",
          id: "da-6-3",
          title: "Prinsip Satu Slide Satu Pesan Utama",
          explanation:
            "Setiap slide presentasi harus fokus menyampaiakan **1 Pesan Utama**. Tuliskan pesan utama tersebut sebagai Judul Slide.",
          example: {
            code:
              "function validateSlideTitle(title) {\n" +
              "  if (title === 'Grafik Penjualan') throw new Error('Title too generic');\n" +
              "}\n" +
              "console.log('Title Validated');",
            output: "Title Validated",
            note: "Judul slide yang informatif mempermudah pemahaman audiens.",
          },
          instruction:
            "Buat fungsi `validateSlideTitle(title)` yang melempar error `\"Title too generic\"` jika `title === 'Grafik Penjualan'`.",
          starterCode: "// Tulis fungsi validateSlideTitle di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "if\\s*\\(\\s*title\\s*===\\s*['\"]Grafik Penjualan['\"]\\s*\\)\\s*throw\\s+new\\s+Error",
              message: "Gunakan: if (title === 'Grafik Penjualan') throw new Error('Title too generic');",
            },
          ],
          solution:
            'function validateSlideTitle(title) {\n  if (title === "Grafik Penjualan") throw new Error("Title too generic");\n}',
        },
        {
          kind: "step",
          id: "da-6-4",
          title: "Menulis Actionable Insights",
          explanation:
            "Ganti data mentah 'Penjualan Kopi naik 5%' menjadi **Actionable Insight**: 'Penjualan Kopi Robusta naik 5% di Cabang A. Rekomendasi: Alokasikan anggaran pemasaran ekstra ke Kopi Robusta'.",
          example: {
            code:
              "function createActionableInsight(obs, rec) {\n" +
              "  return `${obs}. Recommendation: ${rec}`;\n" +
              "}\n" +
              "console.log(createActionableInsight('Sales up 5%', 'Boost ads'));",
            output: "Sales up 5%. Recommendation: Boost ads",
            note: "Fokus pada dampak aksi terhadap tujuan bisnis.",
          },
          instruction:
            "Buat fungsi `createActionableInsight(dataObservation, recommendedAction)` yang mengembalikan string gabungan `\"\${dataObservation}. Recommendation: \${recommendedAction}\"`.",
          starterCode: "// Tulis fungsi createActionableInsight di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "`\\$\\{dataObservation\\}\\.\\s*Recommendation:\\s*\\$\\{recommendedAction\\}`|dataObservation\\s*\\+\\s*['\"]\\. Recommendation: ['\"]\\s*\\+\\s*recommendedAction",
              message: "Format: `${dataObservation}. Recommendation: ${recommendedAction}`",
            },
          ],
          solution:
            "function createActionableInsight(dataObservation, recommendedAction) {\n  return `${dataObservation}. Recommendation: ${recommendedAction}`;\n}",
        },
        {
          kind: "step",
          id: "da-6-5",
          title: "Menghadapi Pertanyaan Sanggahan Data",
          explanation:
            "Jika pemangku kepentingan mempertanyakan hasil analisis: Dengarkan dengan empati, akui batasan asumsi data, dan tawarkan pengujian data susulan.",
          example: {
            code:
              "function handleDataObjection(objection) {\n" +
              "  return { acknowledged: true, followUpAction: 'run_extended_period_test' };\n" +
              "}\n" +
              "console.log(handleDataObjection('Data is short'));",
            output: '{ acknowledged: true, followUpAction: "run_extended_period_test" }',
            note: "Jangan bersikap defensif terhadap pertanyaan kritis audiens.",
          },
          instruction:
            "Buat fungsi `handleDataObjection(objection)` yang mengembalikan objek `{ acknowledged: true, followUpAction: 'run_extended_period_test' }`.",
          starterCode: "// Tulis fungsi handleDataObjection di sini\n",
          language: "js",
          tests: [
            {
              pattern: "acknowledged\\s*:\\s*true\\s*,\\s*followUpAction\\s*:\\s*['\"]run_extended_period_test['\"]",
              message: "Kembalikan { acknowledged: true, followUpAction: 'run_extended_period_test' }",
            },
          ],
          solution:
            "function handleDataObjection(objection) {\n  return { acknowledged: true, followUpAction: 'run_extended_period_test' };\n}",
        },
        {
          kind: "step",
          id: "da-6-6",
          title: "Etika Data Storytelling: Persuasi vs Manipulasi",
          explanation:
            "Batas Etika: **Persuasi** menonjolkan temuan jujur untuk membantu keputusan. **Manipulasi** sengaja memotong grafik atau menyembunyikan data yang bertolak belakang dengan klaim.",
          example: {
            code:
              "function isEthicalChart(truncatedYAxis) {\n" +
              "  return !truncatedYAxis;\n" +
              "}\n" +
              "console.log(isEthicalChart(false));",
            output: "true",
            note: "Integritas analisis adalah aset paling berharga seorang Data Analyst.",
          },
          instruction:
            "Buat fungsi `isEthicalChart(truncatedYAxis)` yang mengembalikan `false` jika `truncatedYAxis === true` dan `true` jika `false`.",
          starterCode: "// Tulis fungsi isEthicalChart di sini\n",
          language: "js",
          tests: [
            {
              pattern: "!truncatedYAxis|truncatedYAxis\\s*===\\s*false",
              message: "Kembalikan !truncatedYAxis",
            },
          ],
          solution:
            "function isEthicalChart(truncatedYAxis) {\n  return !truncatedYAxis;\n}",
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
          title: "Pemilihan Dataset Publik Indonesia",
          explanation:
            "Gunakan dataset publik nyata (seperti portal data BPS, Data.go.id, atau Kaggle) untuk membangun portofolio analisis berkonteks lokal.",
          example: {
            code:
              "function selectDatasetSource(region) {\n" +
              "  return region === 'indonesia' ? 'bps_go_id' : 'kaggle';\n" +
              "}\n" +
              "console.log(selectDatasetSource('indonesia'));",
            output: "bps_go_id",
            note: "Data nyata lokal memberi nilai tambah dibanding dataset umum standar tutorial.",
          },
          instruction:
            "Buat fungsi `selectDatasetSource(region)` yang mengembalikan `'bps_go_id'` jika `region === 'indonesia'` dan `'kaggle'` untuk wilayah lainnya.",
          starterCode: "// Tulis fungsi selectDatasetSource di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "region\\s*===\\s*['\"]indonesia['\"]\\s*\\?\\s*['\"]bps_go_id['\"]\\s*:\\s*['\"]kaggle['\"]",
              message: "Gunakan: region === 'indonesia' ? 'bps_go_id' : 'kaggle'",
            },
          ],
          solution:
            "function selectDatasetSource(region) {\n  return region === 'indonesia' ? 'bps_go_id' : 'kaggle';\n}",
        },
        {
          kind: "step",
          id: "da-7-2",
          title: "Merumuskan Pertanyaan Bisnis Kunci",
          explanation:
            "Sebelum menyentuh kode/data, tuliskan 3-5 **Pertanyaan Bisnis Kunci** yang ingin dijawab (misal: 'Kategori mana yang menyumbang keutungan terbesar di Jawa Barat?').",
          example: {
            code:
              "const businessQuestions = [\n" +
              "  'Mana kategori paling profit?',\n" +
              "  'Bagaimana tren bulanan?'\n" +
              "];\n" +
              "console.log(businessQuestions.length);",
            output: "2",
            note: "Mencegah eksplorasi tanpa arah yang membuang waktu.",
          },
          instruction:
            "Buat array `businessQuestions` berisi minimal 2 string pertanyaan bisnis.",
          starterCode: "// Tulis array businessQuestions di sini\n",
          language: "js",
          tests: [
            {
              pattern: "Array\\.isArray\\(\\s*businessQuestions\\s*\\)|const\\s+businessQuestions\\s*=\\s*\\[",
              message: "Definisikan array businessQuestions",
            },
          ],
          solution:
            "const businessQuestions = [\n  'Mana kategori paling profit?',\n  'Bagaimana tren bulanan?'\n];",
        },
        {
          kind: "step",
          id: "da-7-3",
          title: "Siklus Lengkap Analisis Data (Full Cycle)",
          explanation:
            "Siklus Utuh: **SQL** (Ekstraksi) -> **pandas** (Pembersihan & Transformasi) -> **Matplotlib/Seaborn** (Eksplorasi Visual) -> **Looker Studio** (Dashboard Final).",
          example: {
            code:
              "const pipelineStages = ['sql_extract', 'pandas_clean', 'eda_viz', 'bi_dashboard'];\n" +
              "console.log(pipelineStages.join(' -> '));",
            output: "sql_extract -> pandas_clean -> eda_viz -> bi_dashboard",
            note: "Proyek end-to-end adalah pembuktian terbaik di resume.",
          },
          instruction:
            "Buat array `pipelineStages` yang memuat empat elemen string urutan tahap: `'sql_extract'`, `'pandas_clean'`, `'eda_viz'`, dan `'bi_dashboard'`.",
          starterCode: "// Tulis array pipelineStages di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "\\[\\s*['\"]sql_extract['\"]\\s*,\\s*['\"]pandas_clean['\"]\\s*,\\s*['\"]eda_viz['\"]\\s*,\\s*['\"]bi_dashboard['\"]\\s*\\]",
              message: "Gunakan array: ['sql_extract', 'pandas_clean', 'eda_viz', 'bi_dashboard']",
            },
          ],
          solution:
            "const pipelineStages = ['sql_extract', 'pandas_clean', 'eda_viz', 'bi_dashboard'];",
        },
        {
          kind: "step",
          id: "da-7-4",
          title: "Penerbitan Dashboard Interaktif Final",
          explanation:
            "Publikasikan Dashboard Looker Studio yang saling terhubung dengan skema data bersih dari PostgreSQL / Google Sheets.",
          example: {
            code:
              "function getEmbedUrl(reportId) {\n" +
              "  return `https://lookerstudio.google.com/embed/reporting/${reportId}`;\n" +
              "}\n" +
              "console.log(getEmbedUrl('12345'));",
            output: "https://lookerstudio.google.com/embed/reporting/12345",
            note: "Sertakan tautan dashboard aktif di dalam file README.md repository.",
          },
          instruction:
            "Buat fungsi `getEmbedUrl(reportId)` yang mengembalikan string URL `\"https://lookerstudio.google.com/embed/reporting/\${reportId}\"`.",
          starterCode: "// Tulis fungsi getEmbedUrl di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "https://lookerstudio\\.google\\.com/embed/reporting/\\$\\{reportId\\}",
              message: "Format URL: https://lookerstudio.google.com/embed/reporting/${reportId}",
            },
          ],
          solution:
            "function getEmbedUrl(reportId) {\n  return `https://lookerstudio.google.com/embed/reporting/${reportId}`;\n}",
        },
        {
          kind: "step",
          id: "da-7-5",
          title: "Menulis Laporan Eksekutif + Rekomendasi Bisnis",
          explanation:
            "Lengkapi proyek dengan laporan tertulis di file `REPORT.md` yang memuat kesimpulan ringkas dan 3 rekomendasi strategis bagi bisnis.",
          example: {
            code:
              "function buildExecutiveReport(summary, recs) {\n" +
              "  return { summary: summary, recommendations: recs };\n" +
              "}\n" +
              "console.log(buildExecutiveReport('Sales Up', ['Ad budget']).summary);",
            output: "Sales Up",
            note: "Menunjukkan kemampuan komunikasi tertulis pengembang.",
          },
          instruction:
            "Buat fungsi `buildExecutiveReport(summary, recommendations)` yang mengembalikan objek `{ summary: summary, recommendations: recommendations }`.",
          starterCode: "// Tulis fungsi buildExecutiveReport di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "summary\\s*:\\s*summary\\s*,\\s*recommendations\\s*:\\s*recommendations|\\{\\s*summary\\s*,\\s*recommendations\\s*\\}",
              message: "Kembalikan { summary, recommendations }",
            },
          ],
          solution:
            "function buildExecutiveReport(summary, recommendations) {\n  return { summary: summary, recommendations: recommendations };\n}",
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
          ],
        },
      ],
    },
  ],
};
