import type { Track } from "@/lib/types";

export const pythonTrack: Track = {
  slug: "python",
  title: "Python",
  description: "Dari nol sampai otomasi & pengantar pandas untuk jalur data.",
  hours: 80,
  recommendedPrereqs: [],
  color: "bg-amber-600",
  icon: "🐍",
  order: 15,
  modules: [
    {
      slug: "dasar-python",
      title: "Dasar Python",
      description:
        "Bahasa paling ramah pemula — dan paling diminta di lowongan data.",
      topics: [
        "Instalasi & menjalankan script (python, REPL)",
        "Variabel & tipe: int, float, str, bool",
        "f-string & operasi string",
        "Input/output & konversi tipe",
        "Kondisi: if/elif/else & operator perbandingan",
        "Loop: for, while, range, break/continue",
        "Indentasi: kenapa Python memaksamu rapi",
      ],
      items: [],
    },
    {
      slug: "struktur-data-python",
      title: "Struktur Data",
      description:
        "List, dict, tuple, set — pilih yang tepat untuk tiap masalah.",
      topics: [
        "List: index, slice, append, method penting",
        "Dict: key-value, get, items, nested dict",
        "Tuple & unpacking",
        "Set & operasi himpunan",
        "List/dict comprehension — idiom Python yang wajib",
        "Iterasi gabungan: enumerate, zip, sorted dengan key",
        "Memilih struktur: kapan list vs dict vs set",
      ],
      items: [],
    },
    {
      slug: "fungsi-module",
      title: "Fungsi & Module",
      description: "Menyusun kode yang bisa dipakai ulang dan diuji.",
      topics: [
        "def, parameter, return, default & keyword argument",
        "*args & **kwargs",
        "Scope & variabel global (dan kenapa dihindari)",
        "Lambda & fungsi sebagai nilai",
        "Module & import, __name__ == '__main__'",
        "Standard library tour: math, random, datetime, collections",
        "Docstring & type hint dasar",
      ],
      items: [],
    },
    {
      slug: "file-error",
      title: "File & Error Handling",
      description:
        "Membaca file dunia nyata tanpa crash di baris ke-1000.",
      topics: [
        "open & with (context manager)",
        "Membaca/menulis teks & CSV (modul csv)",
        "JSON: load & dump",
        "Path dengan pathlib",
        "try/except/else/finally & jenis exception",
        "raise & custom exception",
        "Encoding: UTF-8 & jebakan karakter Indonesia",
      ],
      items: [],
    },
    {
      slug: "oop-python",
      title: "OOP Python",
      description:
        "Class secukupnya — untuk membaca library dan menstrukturkan program sedang.",
      topics: [
        "class, __init__, self, method",
        "Attribute instance vs class",
        "Inheritance & super()",
        "Dunder method: __str__, __repr__, __eq__",
        "dataclass: class data tanpa boilerplate",
        "Kapan OOP & kapan cukup fungsi",
      ],
      items: [],
    },
    {
      slug: "env-pip",
      title: "Environment & Package",
      description:
        "Setup proyek yang benar — penyelamat dari 'kok di laptopku beda'.",
      topics: [
        "pip & PyPI",
        "Virtual environment (venv) & kenapa wajib",
        "requirements.txt & reproduksi environment",
        "Struktur folder proyek Python",
        "Jupyter Notebook vs script: kapan masing-masing",
        "Linter & formatter (ruff) — kode rapi otomatis",
      ],
      items: [],
    },
    {
      slug: "otomasi",
      title: "Python untuk Otomasi",
      description:
        "Skill yang langsung terasa: otomatiskan pekerjaan membosankan.",
      topics: [
        "Membaca banyak file sekaligus (glob)",
        "Excel dengan openpyxl: baca, tulis, format",
        "Requests: mengambil data dari API",
        "Scraping dasar dengan BeautifulSoup (dan etikanya)",
        "Mengirim email otomatis",
        "Menjadwalkan script (cron/Task Scheduler)",
        "Proyek: laporan mingguan otomatis dari banyak CSV",
      ],
      items: [],
    },
    {
      slug: "pengantar-pandas",
      title: "Pengantar pandas",
      description:
        "Jembatan ke track Analisis Data — DataFrame pertamamu.",
      topics: [
        "Series & DataFrame: mental model",
        "Membaca CSV/Excel ke DataFrame",
        "head, info, describe — kenalan dengan data",
        "Seleksi kolom & filter baris",
        "Kolom baru & operasi vektor",
        "Missing value: isna, fillna, dropna",
        "groupby pertamamu",
      ],
      items: [],
    },
  ],
};
