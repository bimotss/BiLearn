import type { Track } from "@/lib/types";

export const gitTrack: Track = {
  slug: "git",
  title: "Git & GitHub",
  description:
    "Version control + simulasi PR-based workflow seperti di tempat kerja.",
  hours: 25,
  recommendedPrereqs: [],
  color: "bg-red-500",
  icon: "🌿",
  order: 4,
  modules: [
    {
      slug: "dasar-git",
      title: "Dasar Git",
      description:
        "Mental model yang benar dulu: snapshot, staging, dan riwayat — bukan hafalan perintah.",
      topics: [
        "Kenapa version control ada (dan horor folder 'final_v2_beneran')",
        "Instalasi & konfigurasi awal (user.name, user.email)",
        "git init, status, add — memahami staging area",
        "git commit & menulis pesan commit yang baik",
        "git log, diff, show — membaca riwayat",
        ".gitignore: apa yang TIDAK boleh masuk repo",
        "Membatalkan perubahan: restore & unstage",
      ],
      items: [],
    },
    {
      slug: "branching",
      title: "Branching & Merge",
      description:
        "Fitur inti Git: bekerja paralel tanpa saling merusak.",
      topics: [
        "Konsep branch: pointer, bukan copy folder",
        "git branch, switch, checkout",
        "Merge: fast-forward vs merge commit",
        "Merge conflict: kenapa terjadi & cara menyelesaikan dengan tenang",
        "git stash untuk pekerjaan setengah jadi",
        "Rebase dasar & perbedaannya dengan merge (kapan JANGAN rebase)",
        "Konvensi penamaan branch di tim (feature/, fix/, chore/)",
      ],
      items: [],
    },
    {
      slug: "remote-github",
      title: "Remote & GitHub",
      description:
        "Menghubungkan repo lokal ke GitHub — portofoliomu dimulai di sini.",
      topics: [
        "Clone, remote, push, pull, fetch",
        "SSH key vs HTTPS",
        "origin & tracking branch",
        "README yang baik untuk portofolio",
        "GitHub Issues & label — dasar manajemen tugas",
        "Fork vs clone",
        "GitHub profile sebagai CV developer",
      ],
      items: [],
    },
    {
      slug: "pr-workflow",
      title: "Alur Kerja Tim: Pull Request & Code Review",
      description:
        "Diferensiasi BiLearn — simulasi alur kerja yang benar-benar diminta lowongan junior.",
      topics: [
        "Alur lengkap: ambil tiket → branch → commit → push → PR",
        "Menulis deskripsi PR yang reviewer suka",
        "Menerima review: menanggapi komentar tanpa baper",
        "Memberi review: apa yang dilihat reviewer senior",
        "Resolve conflict di PR",
        "Squash, merge strategy, dan menjaga riwayat bersih",
        "Konvensi commit (Conventional Commits) & changelog",
        "Simulasi: satu siklus PR lengkap dari tiket sampai merge",
      ],
      items: [],
    },
    {
      slug: "git-darurat",
      title: "Git untuk Keadaan Darurat",
      description:
        "Menyelamatkan diri saat 'kodeku hilang!' — skill yang bikin kamu tenang di tempat kerja.",
      topics: [
        "revert vs reset (soft/mixed/hard) — perbedaan krusial",
        "reflog: mesin waktu saat semua terlihat hilang",
        "Mengembalikan file dari commit lama",
        "cherry-pick untuk mengambil satu commit",
        "Mengamputasi file sensitif yang terlanjur ter-commit",
        "bisect: mencari commit penyebab bug",
      ],
      items: [],
    },
  ],
};
