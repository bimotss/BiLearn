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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
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
      items: [],
    },
  ],
};
