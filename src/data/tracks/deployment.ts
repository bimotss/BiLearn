import type { Track } from "@/lib/types";

export const deploymentTrack: Track = {
  slug: "deployment",
  title: "Deployment & Docker",
  description:
    "Linux, Docker, CI/CD — Docker kini hampir universal di industri.",
  hours: 35,
  recommendedPrereqs: ["node-express"],
  color: "bg-slate-600",
  icon: "🐳",
  order: 12,
  modules: [
    {
      slug: "linux-terminal",
      title: "Linux & Terminal",
      description:
        "Server hidup di Linux — terminal adalah bahasa ibumu sebagai developer.",
      topics: [
        "Navigasi: pwd, ls, cd, struktur filesystem Linux",
        "File: cat, less, cp, mv, rm, mkdir",
        "Permission: chmod, chown, sudo dijelaskan benar",
        "Pipe & redirect: |, >, >>, grep",
        "Process: ps, kill, htop",
        "SSH: masuk ke server & scp",
        "Package manager (apt) & systemd dasar",
      ],
      items: [],
    },
    {
      slug: "docker",
      title: "Docker",
      description:
        "'Jalan di laptopku' bukan lagi alasan — container untuk semua environment.",
      topics: [
        "Masalah yang Docker selesaikan: image vs container",
        "docker run, ps, logs, exec, stop",
        "Dockerfile: FROM, COPY, RUN, CMD",
        "Layer & cache — Dockerfile yang build-nya cepat",
        "Multi-stage build untuk image kecil",
        "Volume & bind mount",
        "Network antar container",
        ".dockerignore & best practice keamanan dasar",
      ],
      items: [],
    },
    {
      slug: "compose-env",
      title: "Docker Compose & Environment",
      description:
        "Menjalankan app + database + redis dengan satu perintah.",
      topics: [
        "compose.yaml: service, port, volume, depends_on",
        "Environment variable & file .env di compose",
        "Secrets: kenapa .env tidak boleh di-commit",
        "Healthcheck & restart policy",
        "Setup development lengkap: app + postgres + redis",
        "Perbedaan setup dev vs production",
      ],
      items: [],
    },
    {
      slug: "deploy-vps",
      title: "Deploy ke VPS",
      description:
        "Dari kosong sampai HTTPS: pengalaman deploy yang sesungguhnya.",
      topics: [
        "Memilih & menyiapkan VPS (firewall, user non-root)",
        "Deploy container ke server",
        "Nginx sebagai reverse proxy",
        "Domain & DNS: A record sampai propagasi",
        "HTTPS gratis dengan Let's Encrypt (certbot)",
        "Zero-downtime dasar & rollback manual",
      ],
      items: [],
    },
    {
      slug: "platform-cicd",
      title: "Platform Deploy & CI/CD",
      description:
        "Otomatisasi: push ke main → test jalan → production terupdate.",
      topics: [
        "PaaS: Vercel/Railway — kapan lebih tepat dari VPS",
        "GitHub Actions: workflow, job, step",
        "CI: lint + test otomatis di setiap PR",
        "CD: deploy otomatis setelah merge",
        "Environment & secret di GitHub Actions",
        "Preview deployment untuk review",
      ],
      items: [],
    },
    {
      slug: "monitoring",
      title: "Monitoring & Log",
      description:
        "Tahu aplikasimu sakit sebelum user yang memberi tahu.",
      topics: [
        "Log terstruktur & di mana membacanya",
        "Uptime monitoring & alerting sederhana",
        "Error tracking dengan Sentry",
        "Metrik dasar: CPU, memori, disk, response time",
        "Backup database otomatis & uji restore",
        "Post-mortem sederhana saat insiden",
      ],
      items: [],
    },
  ],
};
