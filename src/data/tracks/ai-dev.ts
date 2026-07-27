import type { Track } from "@/lib/types";

export const aiDevTrack: Track = {
  slug: "ai-dev",
  title: "AI-Assisted Development",
  description:
    "Copilot/Claude/Cursor dengan benar — lowongan yang minta skill ini naik 340%.",
  hours: 20,
  recommendedPrereqs: ["javascript"],
  color: "bg-purple-600",
  icon: "🤖",
  order: 13,
  modules: [
    {
      slug: "cara-kerja-llm",
      title: "Cara Kerja & Batas LLM",
      description:
        "Pakai alat dengan paham cara kerjanya — bukan menyembah atau meremehkan.",
      topics: [
        "LLM secara intuitif: prediksi token, bukan 'berpikir'",
        "Kenapa AI berhalusinasi & apa artinya untuk kode",
        "Context window: kenapa AI 'lupa'",
        "Kekuatan nyata: boilerplate, terjemahan pola, penjelasan",
        "Kelemahan nyata: fakta terbaru, logika bisnis unik, konteks besar",
        "Lanskap tool: Copilot, Claude, Cursor — beda alat, beda tugas",
      ],
      items: [],
    },
    {
      slug: "prompting-kode",
      title: "Prompting untuk Kode",
      description:
        "Kualitas output = kualitas input. Skill yang membedakan hasil bagus dan sampah.",
      topics: [
        "Konteks yang cukup: kode terkait, error lengkap, tujuan",
        "Spesifik: bahasa, versi, framework, constraint",
        "Iterasi: mempersempit alih-alih mengulang",
        "Minta alternatif & trade-off, bukan satu jawaban",
        "Prompt untuk belajar (jelaskan) vs produksi (kerjakan)",
        "Anti-pattern: prompt sekali-tembak untuk masalah kompleks",
      ],
      items: [],
    },
    {
      slug: "workflow-tools",
      title: "Workflow dengan AI Tools",
      description:
        "Integrasi ke alur kerja harian: autocomplete, chat, dan agent.",
      topics: [
        "Autocomplete (Copilot): kapan menerima, kapan menolak",
        "Chat untuk eksplorasi & desain sebelum menulis kode",
        "Agent/composer untuk perubahan multi-file",
        "AI untuk test: generate kasus uji dari spesifikasi",
        "AI untuk dokumentasi & commit message",
        "Menjaga flow: AI membantu fokus, bukan mengganti berpikir",
      ],
      items: [],
    },
    {
      slug: "review-kode-ai",
      title: "Review Kode Hasil AI",
      description:
        "Latihan inti track ini: menemukan bug yang AI hasilkan dengan percaya diri.",
      topics: [
        "Bug khas AI: edge case terlewat, API halu, versi campur",
        "Checklist review kode AI sebelum commit",
        "Keamanan: injection & secrets di kode generated",
        "Lisensi & kode hasil training",
        "Latihan: temukan bug di 10 potongan kode hasil AI",
        "Prinsip: kamu yang tanda tangan, kamu yang bertanggung jawab",
      ],
      items: [],
    },
    {
      slug: "debug-refactor-ai",
      title: "Debugging & Refactoring dengan AI",
      description:
        "Use case dengan ROI tertinggi — jika kamu tahu caranya.",
      topics: [
        "Memberi error + konteks minimal yang reproducible",
        "AI sebagai rubber duck yang membalas",
        "Refactoring terarah: satu tujuan per permintaan",
        "Memahami codebase asing dengan bantuan AI",
        "Migrasi versi/framework dengan AI + verifikasi",
        "Kapan berhenti: tanda kamu di lubang kelinci AI",
      ],
      items: [],
    },
    {
      slug: "etika-karier",
      title: "Etika & Karier di Era AI",
      description:
        "Jujur tentang AI di kerjaan & tetap bertumbuh sebagai engineer.",
      topics: [
        "Kebijakan perusahaan: kode rahasia & tool eksternal",
        "AI di technical interview: aturan yang berlaku",
        "Skill yang justru makin bernilai (arsitektur, review, komunikasi)",
        "Belajar dengan AI tanpa jadi tergantung: aturan 'coba dulu'",
        "Portofolio di era AI: proses > hasil akhir",
      ],
      items: [],
    },
  ],
};
