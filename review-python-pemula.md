# Review Track Python — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Track Python sekarang: **8 modul, 8 materi, 54 step, 8 kuis (40 soal)**, dan `verify:konten` bersih untuk track ini (0 pelanggaran).

Berkas: `src/data/tracks/python.ts` (saat direview: 8 modul, 54 step, 8 kuis, **0 materi**).

Cara baca: aku membaca track ini sebagai pemula total yang baru mulai belajar pemrograman atau baru berpindah dari HTML/CSS/JS — paham dasar logika tapi **belum pernah menulis satu baris kode Python**. Belum tahu apa itu `indentasi 4 spasi`, belum paham beda `List` vs `Tuple` vs `Set`, belum pernah mendengar `virtual environment (.venv)`, dan belum mengerti kenapa `input()` selalu mengembalikan `str`.

---

## A. Yang bikin macet sejak menit pertama

### A1. Nol halaman `materi` di delapan modul

Aturan keras `AGENTS.md` #1 dan #8 melarang modul latihan tanpa halaman `materi` pembuka. Di Python, ketiadaan materi sangat berbahaya karena Python memiliki konsep unik yang tidak ada di bahasa lain (seperti indentasi wajib 4 spasi, model mental interpreter, mutable default argument, dan isolasi `venv`).

Delapan halaman materi baru kini mengisi peta mental yang hilang:

| Materi | Peta mental yang diberikan |
|---|---|
| `python-1-m1` | Model mental interpreter (Source `.py` -> Bytecode `.pyc` -> PVM), eksekusi Script vs REPL, tabel rujukan 5 tipe data dasar (`int`, `float`, `str`, `bool`, `NoneType`), 3 jebakan umum (TypeError `+`, IndentationError, kapitalisasi `True`/`False`/`None`), dan kaitan ke dunia kerja. |
| `python-2-m1` | Tabel perbandingan 4 struktur data bawaan (`List`, `Tuple`, `Set`, `Dict`) beserta sifat ordered, mutable, unique, dan kompleksitas pencarian ($O(1)$ vs $O(n)$), diagram slicing `[start:end:step]` & indeks negatif `[-1]`, List & Dict comprehension, 3 jebakan umum (KeyError, reference copy `b = a`, mutasi list saat loop), dan kaitan ke pemrosesan data besar. |
| `python-3-m1` | Model mental Scope LEGB (Local -> Enclosing -> Global -> Built-in) dalam gambar, fleksibilitas `*args` dan `**kwargs`, fungsi penjaga `if __name__ == '__main__':`, tour Standard Library (`datetime`, `math`, `random`, `collections`), 3 jebakan umum (mutable default args `def f(l=[])`, pencemaran `global`, fungsi tanpa `return`), dan Type Hinting. |
| `python-4-m1` | Context Manager (`with open(...) as f:`), diagram alur penanganan exception (`try ... except ... else ... finally`), format file standar (Teks, CSV `DictReader`, JSON `loads/dumps`, `pathlib.Path`), 3 jebakan umum (bare `except:`, missing `encoding='utf-8'` di Windows, path kaku OS), dan kaitan ke ETL data pipeline. |
| `python-5-m1` | Blueprint Class, `__init__`, parameter `self`, atribut instansi vs atribut kelas, tabel Dunder Methods (`__init__`, `__str__`, `__repr__`, `__eq__`), data class modern `@dataclass`, 3 jebakan umum (list mutable di class attr, over-engineering OOP untuk fungsi murni, lupa `self`), dan kaitan ke framework FastAPI/Django. |
| `python-6-m1` | Perbandingan Global System Environment vs Isolated Virtual Environment (`.venv`) dalam gambar, alur dependensi `requirements.txt` (`pip freeze` vs `pip install -r`), struktur folder proyek standar PEP 8, Jupyter Notebook (`.ipynb`) vs Script (`.py`), 3 jebakan umum (commit `.venv` ke Git, lupa aktivasi venv, unpinned dependencies), dan linter `Ruff`. |
| `python-7-m1` | Diagram pipeline otomasi ETL & Notifikasi Email, pustaka utama otomasi (`glob`, `openpyxl`, `requests`, `bs4`, `smtplib`, `schedule`), 3 etika Web Scraping (`robots.txt`, rate limit, User-Agent), 3 jebakan umum (hardcoded password, tidak cek status HTTP 404/500, Windows path backslash escape), dan kaitan ke RPA bisnis. |
| `python-8-m1` | Mental model pandas Series (1D) vs DataFrame (2D), 3 metode inspeksi awal wajib (`head`, `info`, `describe`), kekuatan Operasi Vektorized (C-backend vs loop manual), pembersihan missing values (`isna`, `fillna`, `dropna`), 3 jebakan umum (loop `iterrows()` lambat, `SettingWithCopyWarning`, lupa re-assign), dan kaitan ke karir Data Analyst. |

---

## B. Bab (`topics`) dan Penutupannya

Setiap modul di silabus Python memiliki 6–7 topik bab. Seluruh topik tersebut kini ditutup secara tuntas lewat kombinasi halaman `materi`, `step`, dan kuis interaktif:

| Modul | Topik Silabus | Penutupan di Konten |
|---|---|---|
| 1 | Instalasi & menjalankan script (python, REPL) | Materi `python-1-m1` + Step `python-1-1` |
| 1 | Variabel & tipe: int, float, str, bool | Step `python-1-2` + Materi `python-1-m1` |
| 1 | f-string & operasi string | Step `python-1-3` + Materi `python-1-m1` |
| 1 | Input/output & konversi tipe | Step `python-1-4` + Kuis `q3` |
| 1 | Kondisi: if/elif/else & operator perbandingan | Step `python-1-5` |
| 1 | Loop: for, while, range, break/continue | Step `python-1-6` + Kuis `q4` |
| 1 | Indentasi: kenapa Python memaksamu rapi | Step `python-1-7` + Kuis `q1` |
| 2 | List: index, slice, append, method penting | Step `python-2-1` + Materi `python-2-m1` |
| 2 | Dict: key-value, get, items, nested dict | Step `python-2-2` + Kuis `q4`, `q5` |
| 2 | Tuple & unpacking | Step `python-2-3` + Kuis `q1` |
| 2 | Set & operasi himpunan | Step `python-2-4` + Kuis `q2` |
| 2 | List/dict comprehension | Step `python-2-5` + Materi `python-2-m1` |
| 2 | Iterasi gabungan: enumerate, zip, sorted | Step `python-2-6` + Materi `python-2-m1` |
| 2 | Memilih struktur: kapan list vs dict vs set | Step `python-2-7` + Materi `python-2-m1` |
| 3 | def, parameter, return, default & keyword argument | Step `python-3-1` + Kuis `q2` |
| 3 | *args & **kwargs | Step `python-3-2` + Kuis `q4` |
| 3 | Scope & variabel global | Step `python-3-3` + Kuis `q5` |
| 3 | Lambda & fungsi sebagai nilai | Step `python-3-4` |
| 3 | Module & import, `__name__ == '__main__'` | Step `python-3-5` + Kuis `q1` |
| 3 | Standard library tour: math, random, datetime, collections | Step `python-3-6` + Materi `python-3-m1` |
| 3 | Docstring & type hint dasar | Step `python-3-7` + Kuis `q3` |
| 4 | open & with (context manager) | Step `python-4-1` + Kuis `q1` |
| 4 | Membaca/menulis teks & CSV (modul csv) | Step `python-4-2` |
| 4 | JSON: load & dump | Step `python-4-3` + Kuis `q4` |
| 4 | Path dengan pathlib | Step `python-4-4` |
| 4 | try/except/else/finally & jenis exception | Step `python-4-5` + Kuis `q2`, `q3` |
| 4 | raise & custom exception | Step `python-4-6` |
| 4 | Encoding: UTF-8 & jebakan karakter Indonesia | Step `python-4-7` + Kuis `q5` |
| 5 | class, `__init__`, self, method | Step `python-5-1` + Kuis `q4` |
| 5 | Attribute instance vs class | Step `python-5-2` |
| 5 | Inheritance & super() | Step `python-5-3` |
| 5 | Dunder method: `__str__`, `__repr__`, `__eq__` | Step `python-5-4` + Kuis `q2` |
| 5 | dataclass: class data tanpa boilerplate | Step `python-5-5` + Kuis `q1` |
| 5 | Kapan OOP & kapan cukup fungsi | Step `python-5-6` + Kuis `q3` |
| 6 | pip & PyPI | Step `python-6-1` + Kuis `q4` |
| 6 | Virtual environment (venv) & kenapa wajib | Step `python-6-2` + Kuis `q1` |
| 6 | requirements.txt & reproduksi environment | Step `python-6-3` + Kuis `q2` |
| 6 | Struktur folder proyek Python | Step `python-6-4` + Materi `python-6-m1` |
| 6 | Jupyter Notebook vs script | Step `python-6-5` + Kuis `q3` |
| 6 | Linter & formatter (ruff) | Step `python-6-6` + Kuis `q5` |
| 7 | Membaca banyak file sekaligus (glob) | Step `python-7-1` + Kuis `q2` |
| 7 | Excel dengan openpyxl | Step `python-7-2` |
| 7 | Requests: mengambil data dari API | Step `python-7-3` + Kuis `q1` |
| 7 | Scraping dasar dengan BeautifulSoup (dan etikanya) | Step `python-7-4` + Kuis `q3` |
| 7 | Mengirim email otomatis | Step `python-7-5` |
| 7 | Menjadwalkan script (cron/Task Scheduler) | Step `python-7-6` + Kuis `q4` |
| 7 | Proyek: laporan mingguan otomatis dari banyak CSV | Step `python-7-7` + Kuis `q5` |
| 8 | Series & DataFrame: mental model | Step `python-8-1` + Kuis `q2` |
| 8 | Membaca CSV/Excel ke DataFrame | Step `python-8-2` + Kuis `q1` |
| 8 | head, info, describe — kenalan dengan data | Step `python-8-3` + Kuis `q3` |
| 8 | Seleksi kolom & filter baris | Step `python-8-4` |
| 8 | Kolom baru & operasi vektor | Step `python-8-5` |
| 8 | Missing value: isna, fillna, dropna | Step `python-8-6` + Kuis `q4` |
| 8 | groupby pertamamu | Step `python-8-7` + Kuis `q5` |

---

## C. Perluasan Penjelasan Step (Standard Rules)

Sebelumnya, terdapat **45 step** di track Python yang penjelasannya terlalu pendek (< 4 kalimat atau < 350 karakter). Seluruh penjelasan step telah diperluas untuk menjawab 4 komponen wajib: **APA**, **KENAPA**, **KAPAN**, dan **JEBAKAN**.

Contoh perbaikan penjelasan pada beberapa step utama:
- `python-1-6` (Loop): Dari 1 kalimat (65c) diperluas menjadi penjelasan rinci mengenai perulangan `for`, sifat eksklusif `range(start, stop)`, fungsi `while`, serta jebakan infinite loop.
- `python-2-2` (Dict): Dari 2 kalimat (129c) diperluas menjelaskan perbedaan akses kurung siku `dict['key']` (`KeyError`) vs `.get('key', default)` yang aman dari crash.
- `python-3-4` (Lambda): Dari 1 kalimat (117c) diperluas menjelaskan fungsi anonim 1 baris, pengurutan `sort(key=...)`, serta kapan harus kembali menggunakan `def` biasa.
- `python-4-5` (Try/Except): Dari 3 kalimat diperluas menjelaskan struktur `try`, `except Exception as e`, `finally` untuk pembersihan sumber daya, dan bahaya bare `except:`.
- `python-6-2` (Venv): Dari 1 kalimat (107c) diperluas menjelaskan isolasi pustaka per proyek, cara pembuatan `python -m venv .venv`, serta perintah aktivasi untuk OS Mac/Linux/Windows.
- `python-8-4` (pandas Filter): Dari 2 kalimat (92c) diperluas menjelaskan *boolean indexing* pada DataFrame, pembuatan Series boolean, dan cara menyaring baris secara efisien.

---

## D. Tes Regex yang Dilonggarkan

Beberapa tes regex awal di track Python terlalu kaku dan menolak alternatif jawaban yang sama-sama valid secara sintaks Python. Seluruhnya telah diperbaiki dan diverifikasi:

| Step | Masalah Regex Semula | Perbaikan Regex |
|---|---|---|
| `python-1-6` | Hanya menerima nama variabel perulangan `i` (`for i in range(5):`) | Diperluas dengan `for\s+\w+\s+in\s+range\(\s*5\s*\)\s*:` untuk menerima nama variabel apa pun (`i`, `x`, `_`, `num`). |
| `python-2-5` | Menguji List Comprehension dengan variabel kaku `x` (`[x ** 2 for x in numbers]`) | Diperluas dengan `\\[\\s*\\w+\\s*\\*\\*\\s*2\\s+for\\s+\\w+\\s+in\\s+numbers\\s*\\]` agar menerima nama variabel iterasi apa pun. |
| `python-2-6` | Menguji perulangan `enumerate` dengan variabel kaku `i, item` | Diperluas dengan `for\s+\w+\s*,\s*\w+\s+in\s+enumerate...` agar menerima penamaan variabel bebas. |
| `python-3-4` | Menguji fungsi lambda dengan parameter kaku `x` (`lambda x: x ** 2`) | Diperluas dengan `lambda\s+\w+\s*:\s*\w+\s*\*\*\s*2` agar menerima parameter nama apa pun. |
| `python-7-7` | Hanya menerima `if len(files) > 0:` | Diperluas dengan `if\s+(len\(\s*files\s*\)\s*(>\s*0|!=\s*0)|files)\s*:` agar menerima idiom Python `if files:` maupun `len(files) > 0`. |

---

## E. Verifikasi Khas Track Python

Bahasa Python pada track ini dikonfigurasi menggunakan `language: "text"` karena kode dijalankan di panel interaktif monospace tanpa preview eksekusi langsung browser.

Untuk memastikan kualitas:
1. **Pemeriksaan Output Contoh (`example.output`)**: Semua contoh keluaran disesuaikan dengan teks asli konsol Python (misal representasi list `['Apel', 'Jeruk']`, dictionary `{'name': 'Budi'}`, atau tabel DataFrame pandas).
2. **Kejujuran Sandbox**: Pada catatan materi dan instruksi dijelaskan secara jujur bahwa periksa sintaks menggunakan validasi pola regex yang fleksibel, dan panduan menjalankan langsung di terminal lokal dengan Python 3 disertakan di materi `python-1-m1` dan `python-6-m1`.

---

## F. Bukti Verifikasi Lengkap

 Seluruh pemeriksaan otomatis dan verifikasi dinamis telah dijalankan dan terbukti 100% bersih:

| Pemeriksaan | Hasil / Angka Verifikasi |
|---|---|
| `verify:konten` (track Python) | **BERSIH (0 Pelanggaran)** — 8 materi, 54 step, 8 kuis |
| `npx tsc --noEmit` | **BERSIH (0 Error)** |
| `npx eslint src` | **BERSIH (0 Error)** |
| Skrip Pengujian Materi (`/tmp/verify_python_test.ts`) | **8/8 Materi Valid** (semua >1200 karakter, memuat diagram/tabel, bab jebakan, & kaitan dunia kerja) |
| Skrip Pengujian Solusi (`/tmp/verify_python_test.ts`) | **54/54 Solusi Lulus Tes Sendiri** |
| Skrip Pengujian StarterCode (`/tmp/verify_python_test.ts`) | **54/54 StarterCode Gagal Tes (Sesuai Harapan)** |
| `npm run build` | **Belum diuji di sandbox Linux** (karena keterbatasan binary SWC arm64). Siap diuji di Mac. |

---

## Status Ringkasan Eksekusi Track

| Track | Modul | Materi | Step | Kuis | Status `verify:konten` |
|---|---|---|---|---|---|
| HTML | 7 | 7 | 48 | 7 | ✅ Bersih |
| CSS | 10 | 10 | 60 | 10 | ✅ Bersih |
| JavaScript | 10 | 10 | 64 | 10 | ✅ Bersih |
| TypeScript | 7 | 7 | 46 | 7 | ✅ Bersih |
| **Python** | **8** | **8** | **54** | **8** | **✅ BERSIH (Selesai diproses)** |
