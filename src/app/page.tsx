"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { tracks } from "@/data/tracks";
import { useProgress } from "@/lib/progress";

// =========================================================================
// DATA PERCONTOHAN LIVE SIMULATOR KODE (HERO SHOWPIECE)
// =========================================================================
interface CodeDemoTab {
  id: string;
  label: string;
  language: string;
  filename: string;
  tag: string;
  code: string;
  tests: { name: string; latency: string; desc: string }[];
  output: string;
}

const DEMO_TABS: CodeDemoTab[] = [
  {
    id: "html-css",
    label: "Web & Frontend",
    language: "html",
    filename: "CardProfil.html",
    tag: "HTML5 & Modern CSS",
    code: `<article class="card-talenta" aria-label="Profil Engineer">
  <div class="avatar-badge">
    <img src="/foto-engineer.webp" alt="Foto Daffa" />
    <span class="status-online" aria-label="Tersedia untuk kerja"></span>
  </div>
  <h3>Daffa Rayhan</h3>
  <p class="role">Fullstack Engineer & AI Specialist</p>
  <div class="tags">
    <span class="tag">TypeScript</span>
    <span class="tag">Next.js</span>
    <span class="tag">Docker</span>
  </div>
</article>`,
    tests: [
      { name: "Semantik HTML5 valid", latency: "12ms", desc: "Tag <article> memiliki aria-label dan hierarki heading teratur" },
      { name: "Aksesibilitas Kontras WCAG AA", latency: "18ms", desc: "Rasio kontras teks terhadap latar kartu memenuhi minimal 4.5:1" },
      { name: "Responsif & Mobile-Safe", latency: "9ms", desc: "Komponen tidak memicu horizontal scrollbar di layar 375px" },
    ],
    output: "✓ Render kartu profil berhasil. 3/3 tes lolos uji standar industri.",
  },
  {
    id: "javascript",
    label: "JavaScript ES6+",
    language: "javascript",
    filename: "hitungGaji.js",
    tag: "JavaScript Pure Logic",
    code: `export function hitungTakeHomePay({ gajiPokok, tunjangan = 0, potonganPph = 0 }) {
  if (gajiPokok < 0) {
    throw new Error("Gaji pokok tidak boleh bernilai negatif");
  }
  const bruto = gajiPokok + tunjangan;
  const netto = bruto - (bruto * (potonganPph / 100));
  return Math.round(netto);
}`,
    tests: [
      { name: "Fungsi Murni (Pure Function)", latency: "14ms", desc: "Tidak memutasi objek masukan dan tidak bergantung pada state global" },
      { name: "Validasi Batas Angka Negatif", latency: "8ms", desc: "Melemparkan Error terstruktur saat nilai gaji pokok tidak valid" },
      { name: "Presisi Perhitungan Pajak", latency: "11ms", desc: "Menghasilkan nilai netto pembulatan integer rupiah yang akurat" },
    ],
    output: "✓ 5 skenario pengujian unit lolos. Eksekusi runtime selesai dalam 0.033s.",
  },
  {
    id: "react",
    label: "React 19 & Next.js",
    language: "tsx",
    filename: "FilterKatalog.tsx",
    tag: "React Modern State",
    code: `export function FilterKatalog({ total, onPilihKategori }) {
  const [aktif, setAktif] = useState("semua");

  return (
    <div className="flex items-center gap-2" role="tablist">
      {["semua", "frontend", "backend"].map((kat) => (
        <button
          key={kat}
          role="tab"
          aria-selected={aktif === kat}
          onClick={() => { setAktif(kat); onPilihKategori(kat); }}
          className={aktif === kat ? "bg-amber-500 text-black font-bold" : "bg-slate-800 text-white"}
        >
          {kat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}`,
    tests: [
      { name: "State Reaktif Tanpa Memory Leak", latency: "21ms", desc: "Perubahan tab memicu re-render terisolasi tanpa efek samping liar" },
      { name: "Aksesibilitas Tab Keyboard", latency: "16ms", desc: "Atribut role='tablist' dan aria-selected terbaca jelas oleh screen reader" },
      { name: "Prop Callback Terpanggil", latency: "10ms", desc: "Handler onPilihKategori menerima argumen kategori yang sesuai saat diklik" },
    ],
    output: "✓ Komponen React terkompilasi dan lulus pengujian interaksi DOM virtual.",
  },
  {
    id: "sql",
    label: "Database & SQL",
    language: "sql",
    filename: "analisis_penjualan.sql",
    tag: "PostgreSQL / MySQL",
    code: `SELECT 
    k.nama_kategori,
    COUNT(t.id) AS total_transaksi,
    SUM(t.nominal) AS grand_total_omset,
    ROUND(AVG(t.nominal), 2) AS rata_rata_keranjang
FROM transaksi t
INNER JOIN produk p ON t.produk_id = p.id
INNER JOIN kategori k ON p.kategori_id = k.id
WHERE t.status = 'berhasil' AND t.tanggal >= '2026-01-01'
GROUP BY k.id, k.nama_kategori
ORDER BY grand_total_omset DESC
LIMIT 5;`,
    tests: [
      { name: "JOIN Multi-Tabel Efisien", latency: "15ms", desc: "Relasi transaksi -> produk -> kategori memanfaatkan foreign key index" },
      { name: "Agregasi Data & Filter Status", latency: "19ms", desc: "Saringan hanya menghitung transaksi berstatus 'berhasil' di tahun berjalan" },
      { name: "Pengurutan & Pembatasan Kuota", latency: "7ms", desc: "Klausa ORDER BY DESC dan LIMIT 5 menghasilkan top performers yang valid" },
    ],
    output: "✓ Query tereksekusi tanpa full-table-scan. 5 baris data agregasi siap dianalisis.",
  },
  {
    id: "english",
    label: "Business English",
    language: "text",
    filename: "executive_brief.txt",
    tag: "Komunikasi Kerja Global",
    code: `Subject: Q4 API Performance Report & Proposed Migration Timeline

Dear Team,

I have finalized our quarterly system review. Database query latencies dropped by 
38% following our indexing deployment, while system uptime remained at 99.98%.

Given these stable metrics, I recommend we proceed with the migration scheduled 
for next Tuesday at 02:00 UTC to minimize partner impact.

Best regards,
Daffa Rayhan — Senior Technical Lead`,
    tests: [
      { name: "Nada Profesional & Padat", latency: "10ms", desc: "Menyampaikan metrik objektif tanpa kalimat bertele-tele (concise business tone)" },
      { name: "Call-to-Action Transparan", latency: "12ms", desc: "Menetapkan jadwal rilis, zona waktu UTC, dan pertimbangan mitigasi risiko" },
      { name: "Etika Korespondensi Baku", latency: "8ms", desc: "Format subjek, salam pembuka, dan penutup memenuhi standar komunikasi multinasional" },
    ],
    output: "✓ Lolos penilaian korespondensi profesional: Kejelasan 100%, Ketepatan Waktu 100%.",
  },
];

// =========================================================================
// 5 DOMAIN KEAHLIAN DI BILEARN (PREVIEW RINGKAS)
// =========================================================================
const DOMAIN_KEAHLIAN = [
  {
    title: "Web & Frontend Engineering",
    icon: "🌐",
    desc: "HTML5 semantic, CSS responsif, JavaScript ES6+, TypeScript, React 19, dan Next.js App Router.",
    skills: ["HTML5", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
    badge: "6 Track",
    href: "/tracks/?kategori=frontend",
  },
  {
    title: "Backend & Database Systems",
    icon: "⚡",
    desc: "RESTful API dengan Node.js & Express, PHP & Laravel, query SQL analitis, hingga NoSQL database.",
    skills: ["Node.js", "Laravel", "PostgreSQL / MySQL", "NoSQL"],
    badge: "4 Track",
    href: "/tracks/?kategori=backend",
  },
  {
    title: "DevOps & Modern Workflow",
    icon: "🛠️",
    desc: "Kolaborasi Git & GitHub, isolasi container Docker, hingga alur kerja AI-Assisted Development.",
    skills: ["Git & GitHub", "Docker", "AI Workflow"],
    badge: "3 Track",
    href: "/tracks/?kategori=devops",
  },
  {
    title: "Data Science & Analytics",
    icon: "📊",
    desc: "Pemrograman Python dari dasar, otomasi rumus spreadsheet Excel, dan visualisasi data bisnis.",
    skills: ["Python", "Spreadsheet Excel", "Analisis Data"],
    badge: "3 Track",
    href: "/tracks/?kategori=data",
  },
  {
    title: "Komunikasi Kerja Global",
    icon: "🌍",
    desc: "Business English korespondensi kerja multinasional dan Bahasa Jepang JLPT N5 dengan kartu flashcard.",
    skills: ["Business English", "Bahasa Jepang N5", "Flashcard Kana"],
    badge: "2 Program",
    href: "/bahasa",
  },
];

// =========================================================================
// DATA PERBANDINGAN BILEARN VS METODE LAIN
// =========================================================================
const PERBANDINGAN_DATA = [
  {
    aspek: "Metode Pembelajaran",
    bilearn: "Active Recall — Langsung ngetik kode baris per baris di browser",
    video: "Pasif — Menonton video 40+ jam tanpa paksaan ngetik sendiri",
    bootcamp: "Semi-aktif — Tugas mingguan, tapi teori banyak ceramah tatap muka",
  },
  {
    aspek: "Kecepatan Feedback & Koreksi",
    bilearn: "Detik itu juga (Instant Test Runner & regex validator cerdas)",
    video: "Tidak ada — Kalau error, harus browsing sendiri atau tanya forum sepi",
    bootcamp: "Menunggu mentor (1-3 hari kerja untuk koreksi tugas)",
  },
  {
    aspek: "Biaya Belajar",
    bilearn: "100% Gratis Tanpa Paywall (Bebas untuk siapa saja)",
    video: "Rp 200.000 – Rp 1.500.000 per kursus atau langganan bulanan",
    bootcamp: "Rp 15.000.000 – Rp 35.000.000 (Sering dengan skema cicilan ISA)",
  },
  {
    aspek: "Dual Mode Belajar (Keyboard & Block)",
    bilearn: "Tersedia: Ngetik langsung (desktop) atau susun kode (mobile)",
    video: "Tidak ada variasi interaktif",
    bootcamp: "Hanya teks/coding di laptop",
  },
  {
    aspek: "Bahasa Internasional Terintegrasi",
    bilearn: "Tersedia: Business English & Bahasa Jepang JLPT N5",
    video: "Terpisah — harus beli kursus bahasa lain secara mandiri",
    bootcamp: "Jarang ada — hanya fokus teknis koding",
  },
  {
    aspek: "Kesesuaian dengan Lowongan Kerja",
    bilearn: "Kurikulum standar industri 2026 terkurasi dari lowongan riil",
    video: "Sering usang / memakai library lama yang sudah deprecated",
    bootcamp: "Cukup baik, tetapi silabus sering lambat diperbarui",
  },
];

// =========================================================================
// FAQ DATA
// =========================================================================
const FAQ_ITEMS = [
  {
    q: "Apakah BiLearn benar-benar 100% gratis tanpa paywall?",
    a: "Ya, 100% gratis. Seluruh 17 track spesialisasi, 950+ latihan kode interaktif, 149 materi baca mendalam, hingga flashcard bahasa Jepang dapat kamu akses penuh tanpa kartu kredit, tanpa batasan kuota latihan, dan tanpa biaya langganan tersembunyi.",
  },
  {
    q: "Saya pemula mutlak tanpa latar belakang IT, harus mulai dari mana?",
    a: "Kamu bisa masuk ke halaman katalog materi dan memilih Track 1: HTML & Track 2: CSS, atau memilih Career Path: Frontend Developer di menu Learning Path. Modul pertama selalu diawali panduan fondasi dasar dari nol.",
  },
  {
    q: "Bagaimana cara kerja validasi kode di browser?",
    a: "BiLearn menjalankan pengujian langsung di browser. Untuk JavaScript dan React, kodemu dikompilasi dan diuji perilakunya secara nyata. Untuk track CLI, SQL, Git, dan HTML, validator memeriksa struktur semantik serta menerima variasi jawaban yang sama-sama sah.",
  },
  {
    q: "Kenapa ada modul Bahasa Inggris Bisnis dan Bahasa Jepang di BiLearn?",
    a: "Dunia teknologi saat ini bersifat global dan remote. Koding hanyalah separuh dari kesuksesan seorang insinyur perangkat lunak; kemampuan menulis email profesional, negosiasi sprint, dan penguasaan bahasa kedua seperti Jepang membuka peluang karier internasional yang jauh lebih luas.",
  },
  {
    q: "Apakah progres latihan saya tersimpan?",
    a: "Ya. Setiap step, materi, kuis, dan kartu flashcard yang kamu selesaikan otomatis tersimpan di penyimpanan lokal browser (localStorage). Kamu bisa melanjutkan belajar kapan saja di perangkat yang sama tanpa kehilangan progres.",
  },
];

// =========================================================================
// KOMPONEN UTAMA LANDING PAGE
// =========================================================================
function LandingPageContent() {
  const { ready, doneCount, totalCount } = useProgress();

  // State Simulator Tab
  const [activeDemoId, setActiveDemoId] = useState<string>("html-css");
  const [isRunningSim, setIsRunningSim] = useState<boolean>(false);

  // State FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Data demo aktif
  const currentDemo = useMemo(
    () => DEMO_TABS.find((t) => t.id === activeDemoId) || DEMO_TABS[0],
    [activeDemoId]
  );

  // Hitung metrik progres keseluruhan pengguna
  const totalCompleted = useMemo(() => {
    if (!ready) return 0;
    return tracks.reduce((acc, t) => acc + doneCount(t.slug), 0);
  }, [ready, doneCount]);

  // Cari track pertama yang sedang berjalan untuk tombol smart-resume
  const resumeTrack = useMemo(() => {
    if (!ready) return tracks[0];
    const started = tracks.find(
      (t) => doneCount(t.slug) > 0 && doneCount(t.slug) < totalCount(t.slug)
    );
    return started ?? tracks[0];
  }, [ready, doneCount, totalCount]);

  const resumePct = useMemo(() => {
    if (!ready || !resumeTrack) return 0;
    const total = totalCount(resumeTrack.slug);
    return total > 0 ? Math.round((doneCount(resumeTrack.slug) / total) * 100) : 0;
  }, [ready, resumeTrack, doneCount, totalCount]);

  // Jalankan simulasi pengujian interaktif
  const handleRunSimulation = () => {
    setIsRunningSim(true);
    setTimeout(() => {
      setIsRunningSim(false);
    }, 350);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* ===================================================================
          1. HERO SECTION (BERSIH, TANPA BADGE-PILL AI, TATA LETAK PROFESIONAL)
          =================================================================== */}
      <section className="relative pt-4 sm:pt-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Kolom Kiri: Value Proposition & CTA Masuk ke Pelajaran */}
          <div className="space-y-6 text-center sm:text-left lg:col-span-6">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl xl:text-6xl text-slate-900 dark:text-white leading-[1.12]">
              Koding Nyata di Browser.{" "}
              <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Bukan Menonton Video Pasif.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Hentikan siklus <em>tutorial hell</em>. Tulis kode langsung di browser dengan
              evaluasi tes otomatis detik itu juga, kuasai kurikulum berbasis kebutuhan kerja riil,
              dan pelajari skill teknologi hingga komunikasi global secara gratis tanpa paywall.
            </p>

            {/* Tombol Masuk ke Pelajaran (Mengarahkan ke /tracks) */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              {totalCompleted > 0 ? (
                <Link
                  href={`/tracks/${resumeTrack.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-amber-500/35 cursor-pointer"
                >
                  <span>Masuk ke Pelajaran: Lanjut {resumeTrack.title}</span>
                  <span className="rounded-full bg-slate-950/20 px-2 py-0.5 text-xs font-bold">
                    {resumePct}%
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <Link
                  href="/tracks/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-amber-500/35 cursor-pointer"
                >
                  <span>Masuk ke Pelajaran Sekarang</span>
                  <span aria-hidden="true">→</span>
                </Link>
              )}

              <Link
                href="/paths/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <span>Pilih Career Path</span>
                <span className="text-amber-500">→</span>
              </Link>
            </div>

            {/* Catatan Kredibilitas Bersih */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5 pt-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="text-emerald-500">✓</span> 100% Gratis Tanpa Paywall
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="text-emerald-500">✓</span> Validasi Kode Instan di Browser
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="text-emerald-500">✓</span> Bebas Tanpa Kartu Kredit
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Simulator Terminal & Test Runner Interaktif */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-950/90 p-2 sm:p-3 shadow-2xl backdrop-blur-xl">
              {/* Header Jendela Editor */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-white/[0.08] pb-3 px-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400 dark:text-slate-500">
                    bilearn-engine :: {currentDemo.filename}
                  </span>
                </div>

                <div className="flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-white/[0.05] p-1 text-[11px]">
                  <span className="rounded px-2 py-0.5 font-semibold text-slate-700 dark:text-slate-300">
                    {currentDemo.tag}
                  </span>
                </div>
              </div>

              {/* Tab Selector Tombol Materi */}
              <div className="flex flex-wrap items-center gap-1 px-2 pt-2.5 pb-2 overflow-x-auto">
                {DEMO_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveDemoId(tab.id)}
                    className={`cursor-pointer rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                      activeDemoId === tab.id
                        ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tampilan Kode dengan Penomoran Baris */}
              <div className="relative mt-2 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-900 dark:bg-[#070b14] p-4 text-xs font-mono text-slate-200 overflow-x-auto shadow-inner">
                <div className="absolute right-3 top-3">
                  <button
                    type="button"
                    onClick={handleRunSimulation}
                    disabled={isRunningSim}
                    className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-[11px] font-bold text-white shadow-md transition disabled:opacity-50"
                  >
                    {isRunningSim ? (
                      <>
                        <span className="inline-block h-2.5 w-2.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Menguji...</span>
                      </>
                    ) : (
                      <>
                        <span>▶ Jalankan Uji</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="text-slate-300 leading-relaxed overflow-x-auto pr-24">
                  <code>{currentDemo.code}</code>
                </pre>
              </div>

              {/* Panel Hasil Evaluasi Tes Otomatis */}
              <div className="mt-3 rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20 p-3.5">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-400">
                  <div className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">
                      ✓
                    </span>
                    <span>Validasi Otomatis: 3/3 Tes Lolos</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-300">
                    Latency: ~39ms (Local Engine)
                  </span>
                </div>

                <div className="mt-2.5 space-y-1.5 divide-y divide-emerald-500/10 dark:divide-emerald-500/10">
                  {currentDemo.tests.map((test, idx) => (
                    <div
                      key={idx}
                      className="pt-1.5 flex items-start justify-between gap-2 text-[11px]"
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {test.name}
                        </span>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">
                          {test.desc}
                        </p>
                      </div>
                      <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded shrink-0">
                        {test.latency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Bar */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-5 shadow-xs backdrop-blur-md">
            <div className="text-3xl font-black text-amber-700 dark:text-amber-400">17 Track</div>
            <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 mt-1">
              Spesialisasi Lengkap
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Frontend, Backend, DevOps, Data & Bahasa
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-5 shadow-xs backdrop-blur-md">
            <div className="text-3xl font-black text-emerald-700 dark:text-emerald-400">
              950+ Latihan
            </div>
            <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 mt-1">
              Praktik Kode Nyata
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Evaluasi instan tanpa setup server
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-5 shadow-xs backdrop-blur-md">
            <div className="text-3xl font-black text-purple-700 dark:text-purple-400">
              149 Materi
            </div>
            <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 mt-1">
              Arsitektur & Anti-Pattern
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Teori padat bebas hafalan kosong
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-5 shadow-xs backdrop-blur-md">
            <div className="text-3xl font-black text-cyan-700 dark:text-cyan-400">100% Bebas</div>
            <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 mt-1">
              Terbuka Tanpa Paywall
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Akses penuh untuk siapa saja
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. BENTO GRID SHOWCASE: KEUNGGULAN UTAMA BILEARN
          =================================================================== */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Mengapa BiLearn Berbeda
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Dirancang Menghancurkan <em>Tutorial Hell</em>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Masalah terbesar belajar koding adalah ilusi kompetensi: kamu merasa paham saat
            menonton instruktur, tapi langsung buntu saat membuka editor kosong. BiLearn
            memaksamu langsung bertindak.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Bento Card 1 (Besar: 2 kolom) */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl dark:border-white/[0.08] dark:bg-slate-900/70 md:col-span-2">
            <div className="space-y-4 max-w-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-2xl text-amber-600 dark:text-amber-400 border border-amber-500/20">
                ⌨️
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Active Browser Coding & Validasi Detik Itu Juga
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Tidak ada video yang harus ditonton selama 50 jam. Kamu langsung dihadapkan pada
                masalah teknis nyata dan mengetik solusi kodenya. Validator instan kami
                memeriksa fungsionalitas dan logika tanpa mengharuskan instalasi runtime lokal di awal.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium">
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700 dark:bg-white/[0.06] dark:text-slate-300">
                Pemeriksaan AST Cepat
              </span>
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700 dark:bg-white/[0.06] dark:text-slate-300">
                Pengujian Kasus Batas
              </span>
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700 dark:bg-white/[0.06] dark:text-slate-300">
                Preview Nyata di Browser
              </span>
            </div>
          </div>

          {/* Bento Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-purple-500/40 hover:shadow-xl dark:border-white/[0.08] dark:bg-slate-900/70">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl text-purple-600 dark:text-purple-400 border border-purple-500/20">
                🧩
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Dual Mode Belajar (Ngetik & Susun Logika)
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Default mode ngetik untuk latihan keyboard desktop, plus mode susun blok kode
                untuk merangkai alur logika tanpa ribet keyboard saat memakai ponsel atau tablet.
              </p>
            </div>
          </div>

          {/* Bento Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl dark:border-white/[0.08] dark:bg-slate-900/70">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-600 dark:text-blue-400 border border-blue-500/20">
                🌐
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Integrasi Bahasa Kerja Global
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Satu-satunya kurikulum koding yang memadukan Business English profesional dan
                Bahasa Jepang N5 via flashcard spaced repetition untuk kesiapan pasar kerja remote.
              </p>
            </div>
          </div>

          {/* Bento Card 4 (Besar: 2 kolom) */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-xl dark:border-white/[0.08] dark:bg-slate-900/70 md:col-span-2">
            <div className="space-y-4 max-w-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Kurikulum Terkurasi Langsung dari Lowongan Nyata
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Tidak ada materi usang. Mulai dari semantic HTML, TypeScript strict mode, React 19,
                Next.js App Router, Docker multi-stage container, hingga pemanfaatan AI-assisted
                coding dirancang agar kamu siap diwawancara dan berkontribusi di tim engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. ALUR 4 LANGKAH: CARA KERJA BELAJAR DI BILEARN
          =================================================================== */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-8 sm:p-12 shadow-sm backdrop-blur-md">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Metode Pembelajaran
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Bagaimana Kamu Belajar di BiLearn?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Sistem dirancang dengan siklus pengulangan aktif yang terbukti secara pedagogis.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow-md shadow-amber-500/20">
              01
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Pahami Esensi Materi</h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Materi baca BACA-DULU dengan diagram teks arsitektur dan jebakan umum yang sering
              membuat programmer junior gagal.
            </p>
          </div>

          <div className="space-y-3 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow-md shadow-amber-500/20">
              02
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Tulis Kode Mandiri</h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Selesaikan instruksi skenario nyata di editor browser tanpa melihat contekan jawaban
              instan secara langsung.
            </p>
          </div>

          <div className="space-y-3 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow-md shadow-amber-500/20">
              03
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Uji & Koreksi Cepat</h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Klik periksa, validator otomatis menguji puluhan kombinasi kebenaran logika dan
              memberikan umpan balik instan jika meleset.
            </p>
          </div>

          <div className="space-y-3 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-black text-sm shadow-md shadow-amber-500/20">
              04
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Kuis & Rekam Jejak</h3>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Kunci pemahamanmu lewat kuis pilihan ganda terstruktur dan pantau persentase
              kesiapan kariermu yang tersimpan otomatis.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. PREVIEW BIDANG KEAHLIAN (BUKAN DUMP MATERI — MATERI DIPISAH KE /tracks)
          =================================================================== */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-slate-200 dark:border-white/[0.08] pb-6">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              5 Bidang Spesialisasi
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Peta Kurikulum & Bidang Belajar
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              17 track pembelajaran lengkap tersedia di halaman katalog materi. Pilih bidang yang ingin
              kamu kuasai atau ikuti alur karier terstruktur.
            </p>
          </div>

          <Link
            href="/tracks/"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 text-xs shadow-md transition self-start md:self-auto cursor-pointer"
          >
            <span>Buka Semua 17 Track di Katalog Materi</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DOMAIN_KEAHLIAN.map((domain, i) => (
            <Link
              key={i}
              href={domain.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-slate-50 hover:shadow-lg dark:border-white/[0.08] dark:bg-slate-900/60 dark:hover:bg-slate-900/90 shadow-xs cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-2xl border border-amber-500/20">
                    {domain.icon}
                  </span>
                  <span className="rounded-full border border-slate-200 dark:border-white/[0.08] px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {domain.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {domain.desc}
                </p>
              </div>

              <div className="mt-5 space-y-3 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {domain.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-slate-100 dark:bg-white/[0.06] px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:text-amber-600 dark:group-hover:text-amber-300 pt-1">
                  <span>Lihat Modul & Kurikulum</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}

          {/* Card Direct CTA ke /tracks/ */}
          <Link
            href="/tracks/"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-50 via-amber-100/40 to-white dark:from-amber-950/20 dark:via-slate-900 dark:to-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            <div className="space-y-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-2xl text-slate-950 font-bold shadow-md shadow-amber-500/20">
                📚
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                Katalog Materi Lengkap
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Jelajahi seluruh modul latihan, materi mendalam, kuis evaluasi, dan rekam jejak progres
                belajarmu yang tersimpan rapi.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Masuk ke Halaman Materi</span>
              <span aria-hidden="true">→</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ===================================================================
          5. CAREER PATHS SHOWCASE CALLOUT
          =================================================================== */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-8 sm:p-12 shadow-sm backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Roadmap Karier Terarah
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Bingung Mulai Belajar dari Mana?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Pilih salah satu dari 4 Career Path terstruktur kami. Sistem otomatis mengurutkan track
              belajar sesuai tahapan yang diminta industri kerja saat ini.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-amber-500/20 bg-white/60 dark:bg-slate-900/60 p-3">
                <span className="font-bold text-xs text-slate-900 dark:text-white">💻 Frontend Specialist</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">HTML ➔ CSS ➔ JS ➔ TS ➔ React ➔ Next.js</p>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-white/60 dark:bg-slate-900/60 p-3">
                <span className="font-bold text-xs text-slate-900 dark:text-white">⚙️ Backend Developer</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Node.js ➔ PHP ➔ SQL ➔ Docker</p>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-white/60 dark:bg-slate-900/60 p-3">
                <span className="font-bold text-xs text-slate-900 dark:text-white">🚀 Fullstack Engineer</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">HTML ➔ JS ➔ React ➔ Node ➔ SQL ➔ Docker</p>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-white/60 dark:bg-slate-900/60 p-3">
                <span className="font-bold text-xs text-slate-900 dark:text-white">📊 Data Specialist</span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Excel ➔ SQL ➔ Python ➔ Analisis Data</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/paths/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition hover:scale-105 cursor-pointer"
            >
              <span>Jelajahi Semua Career Path</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. TABEL PERBANDINGAN: BILEARN VS METODE LAIN
          =================================================================== */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Perbandingan Terbuka
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            BiLearn vs Cara Belajar Konvensional
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Ketahui mengapa ribuan pembelajar beralih dari kursus video pasif ke metode koding interaktif.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 shadow-xs">
          <table className="w-full text-left text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-slate-950/40">
                <th className="py-4 px-6 font-bold text-slate-900 dark:text-white w-1/4">Fitur & Pengalaman</th>
                <th className="py-4 px-6 font-bold text-amber-600 dark:text-amber-400 bg-amber-500/5 w-1/3">
                  BiLearn (Platform Ini)
                </th>
                <th className="py-4 px-6 font-medium text-slate-500 dark:text-slate-400">Kursus Video Rekaman</th>
                <th className="py-4 px-6 font-medium text-slate-500 dark:text-slate-400">Bootcamp Berbayar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/[0.05]">
              {PERBANDINGAN_DATA.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition">
                  <td className="py-4 px-6 font-semibold text-slate-800 dark:text-slate-200">
                    {row.aspek}
                  </td>
                  <td className="py-4 px-6 text-slate-900 dark:text-white font-medium bg-amber-500/5">
                    <span className="text-emerald-500 font-bold mr-1.5">✓</span>
                    {row.bilearn}
                  </td>
                  <td className="py-4 px-6 text-slate-500 dark:text-slate-400 text-xs">
                    {row.video}
                  </td>
                  <td className="py-4 px-6 text-slate-500 dark:text-slate-400 text-xs">
                    {row.bootcamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================================================================
          7. FAQ (PERTANYAAN UMUM)
          =================================================================== */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Pertanyaan Umum
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            FAQ Seputar BiLearn
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Informasi lengkap seputar platform, kurikulum, dan teknologi BiLearn.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 shadow-xs transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-300 cursor-pointer transition"
                >
                  <span className="text-base sm:text-lg">{item.q}</span>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-white/[0.08] text-sm text-slate-600 dark:text-slate-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-white/[0.06]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================================
          8. BOTTOM CALL TO ACTION
          =================================================================== */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-amber-500/20 p-8 sm:p-14 text-center shadow-xl backdrop-blur-xl">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Mulai Tulis Baris Kode Pertamamu Sekarang
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            Tidak ada alasan menunda. 17 track spesialisasi dan 950+ latihan terbuka bebas untukmu.
            Kuasai skill kerja nyata hari ini.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tracks/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:scale-105 cursor-pointer"
            >
              <span>Masuk ke Pelajaran (Buka Katalog)</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/paths/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-6 py-4 text-sm font-semibold text-slate-800 hover:bg-slate-100 dark:border-white/10 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              <span>Lihat Roadmaps Karier</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-[32rem]" />}>
      <LandingPageContent />
    </Suspense>
  );
}
