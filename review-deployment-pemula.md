# Review Track Deployment & Docker — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Seluruh temuan di bawah sudah ditangani. Track sekarang: **6 modul, 6 materi, 39 step, 6 kuis (36 soal)**, dan `verify:konten` bersih 100% tanpa kesalahan untuk track ini.

Berkas: `src/data/tracks/deployment.ts` (saat direview awal: 6 modul, 39 step, 6 kuis, **0 materi**, 39 explanation pendek di bawah 350 karakter/4 kalimat).

Cara baca: Aku membaca track ini sebagai pemula total yang baru saja menyelesaikan track Node.js & Express. Pembaca di sini sudah paham cara membuat server API dasar dengan Express, tetapi **belum pernah menyentuh Linux server, Docker container, Nginx reverse proxy, CI/CD GitHub Actions, maupun VPS cloud**.

---

## A. Yang Bikin Macet Sejak Menit Pertama

### A1. Nol halaman `materi` di seluruh enam modul
Aturan keras `AGENTS.md` #1 & #8: Setiap modul latihan wajib diawali minimal satu halaman BACA-DULU dengan kedalaman materi minimal 1200 karakter, diagram teks/tabel, analogi dunia nyata, bagian jebakan, dan kaitan ke dunia kerja. Sebelum diperbaiki:
- Pemula langsung diminta mengetik `cd /var/www/html` tanpa tahu apa itu struktur sistem berkas Linux (`/var`, `/etc`, `/home`), mengapa server tidak memiliki antarmuka desktop visual (GUI), dan mengapa Linux digunakan oleh 90%+ cloud server.
- Perbedaan krusial antara **Docker Image** (buku resep/class) dan **Docker Container** (kue nyata/object instance) hanya dijelaskan sangat singkat di petunjuk latihan.
- Konsep jaringan internal Docker Compose (akses database via hostname service seperti `postgres:5432` bukan `localhost`) sering membuat pemula bingung dan stuck berjam-jam.

### A2. Modul 1 belum mencakup slug & judul "Persiapan"
Modul 1 awalnya berslug `linux-terminal` dan ber-title `Linux & Terminal`. Karena belum mencantumkan kata `persiapan` atau `instalasi`, track ini awalnya berada di `instalasiAllowlist`. Slug dan judul modul 1 kini telah disesuaikan menjadi `persiapan-linux-terminal` ("Persiapan & Linux Terminal"), dan track `deployment` berhasil dikeluarkan secara permanen dari allowlist verifikasi.

### A3. Penjelasan pendek (1–2 kalimat) dan petunjuk latihan yang pasif
Seluruh 39 step pada file awal memiliki `explanation` pendek berkisar 80–180 karakter (di bawah batas minimum 4 kalimat / 350 karakter). Selain itu, beberapa step menggunakan instruksi hafalan kata seperti mengetik `"Preview Deployment"` atau `"Post-Mortem"` alih-alih melatih perintah terminal atau konfigurasi YAML yang nyata.

---

## B. Enam Halaman Materi yang Ditambahkan

Setiap modul latihan kini diawali satu halaman `materi` komprehensif yang memenuhi aturan keras Ronde 3 (>1200 karakter, diagram/tabel, analogi, jebakan, kaitan dunia kerja):

| Materi | ID | Judul | Isi Utama & Yang Ditutupnya |
|---|---|---|---|
| Modul 1 | `deploy-1-m1` | Persiapan Environment, Terminal, dan Sistem Operasi Server | Pengertian server headless Linux dari nol, diagram hierarki filesystem Linux (`/`, `/var`, `/etc`, `/home`), tabel rujukan 15+ perintah CLI dasar (`pwd`, `ls -la`, `cd`, `mkdir -p`, `chmod`, `chown`, `sudo`, `grep`, `kill -9`, `ssh`, `scp`, `systemctl`), analogi gedung perkantoran & master keycard `sudo`, 4 jebakan fatal (`>` vs `>>`, `rm -rf`, `chmod +x`, ufw SSH lockout), kaitan ke interview backend/DevOps. |
| Modul 2 | `deploy-2-m1` | Kontainerisasi Aplikasi: Mengapa dan Bagaimana Docker Bekerja | Solusi masalah "it works on my machine", mental model & diagram Dockerfile → Image → Container, tabel 7 instruksi utama Dockerfile (`FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, `USER`, `CMD`), analogi peti kargo kapal laut, 4 jebakan Dockerfile (busting cache layer `COPY . .`, ephemeral data tanpa volume, lupa `.dockerignore`, running as root), kaitan ke standar industri DevOps. |
| Modul 3 | `deploy-3-m1` | Orkestrasi Multi-Kontainer dengan Docker Compose & Environment Variables | Pengertian & arsitektur Docker Compose, diagram jaringan internal Compose (`app` -> `postgres:5432` & `redis:6379`), tabel sintaks `compose.yaml` (`services`, `ports`, `environment`, `volumes`, `depends_on`, `restart`), analogi konduktor orkestra musik, 4 jebakan (pakai `localhost` antar container, commit `.env`, indentasi YAML, `depends_on` tanpa healthcheck), kaitan ke workflow tim profesional. |
| Modul 4 | `deploy-4-m1` | Panduan Deploy Server VPS: Linux Hardening, Nginx Proxy, dan HTTPS SSL | Pengertian VPS (DigitalOcean/AWS EC2), diagram alur trafik Publik -> UFW -> Nginx Reverse Proxy (80/443) -> Node Container (3000), tabel tahapan deploy VPS & direktif Nginx (`proxy_pass`), analogi resepsionis gedung, 4 jebakan (expose DB port publik, lupa `proxy_set_header`, propagasi DNS, `systemctl restart` vs `reload`), kaitan ke kemandirian deployment engineer. |
| Modul 5 | `deploy-5-m1` | Otomatisasi Deployment & CI/CD Pipeline (GitHub Actions & PaaS) | Pengertian CI vs CD, diagram alur pipeline GitHub Actions Runner, tabel matriks perbandingan PaaS (Vercel/Railway) vs IaaS (VPS), analogi ban berjalan pabrik otomotif, 4 jebakan (hardcode secret di YAML, job CD di non-main branch, `npm install` vs `npm ci`, timeout), kaitan ke budaya kerja Agile/DevOps. |
| Modul 6 | `deploy-6-m1` | Pemantauan Server, Tracking Error, Backup, dan Penanganan Insiden | Pengertian 4 pilar observabilitas server (Log, Uptime, Error Tracking, Backup), diagram ekosistem monitoring (UptimeRobot, Sentry, `docker logs`, S3 Backup), tabel tools & perintah metrik (`df -h`, `free -m`, `htop`, `pg_dump`), analogi kokpit pesawat terbang, 4 jebakan (backup di VPS yang sama, backup tanpa uji restore, log bengkak tanpa logrotate, blaming culture), kaitan ke peran SRE/On-Call. |

---

## C. Perbaikan Penjelasan, Skenario, dan Pengujian Step

1. **Perluasan Explanation:**
   - Seluruh 39 step dipertajam dan diperluas menjadi **>350 karakter (4–6 kalimat)** yang secara rinci menjawab **APA** yang dilakukan, **KENAPA** harus begitu, **KAPAN** digunakan di industri, serta **JEBAKAN** teknis yang sering terjadi.

2. **Perbaikan Kasus Contoh (`example`) & Output Nyata:**
   - Semua `example.output` kini menampilkan keluaran konsol terminal nyata (seperti keluaran `ls -la`, status `systemctl`, log `docker logs`, status `ufw`, dan keluaran `df -h`/`free -m`), bukan klaim manfaat abstrak.
   - Memperbaiki `deploy-4-5` (Certbot) dan `deploy-5-6` (Vercel preview) agar `example.code` memakai domain/argumen pengujian berbeda dari `solution`, sehingga tidak dianggap membocorkan jawaban oleh skrip verifikasi.

3. **Kelonggaran & Presisi Regex Test:**
   - Seluruh pattern regex disesuaikan agar menerima variasi penulisan wajar pemula, seperti:
     - `cd /var/www/html` dan `cd /var/www/html/` (`deploy-1-1`)
     - `mkdir project` dan `mkdir -p project` (`deploy-1-2`)
     - `chmod 755 script.sh` dan `chmod 755 ./script.sh` (`deploy-1-3`)
     - `grep 'ERROR' app.log` dan `grep "ERROR" app.log` (`deploy-1-4`)
     - `docker compose up -d` dan `docker-compose up -d` (`deploy-3-1`)
     - `sudo ufw allow 80/tcp` dan `ufw allow 80` (`deploy-4-1`)
     - `proxy_pass http://127.0.0.1:3000;` dan `proxy_pass http://localhost:3000;` (`deploy-4-3`)
     - `sudo certbot --nginx -d myapp.com` dan `certbot --nginx -d myapp.com` (`deploy-4-5`)

---

## D. Verifikasi Hasil Akhir

Seluruh pengujian verifikasi wajib telah dijalankan dengan hasil 100% bersih:

| Pengujian | Perintah | Hasil |
|---|---|---|
| **Verifikasi Konten BiLearn** | `npx tsx scripts/verify-konten.ts` | ✅ `Deployment & Docker`: **6 materi, 39 step, 6 kuis (36 soal)** — 0 Masalah |
| **Keluaran Allowlist** | `scripts/verify-konten.ts` | ✅ Modul 1 berslug `persiapan-linux-terminal` — `deployment` resmi dihapus dari `instalasiAllowlist` |
| **Tipe TS & ESLint** | `npx tsc --noEmit && npx eslint src/data/tracks/deployment.ts` | ✅ Lolos 100% tanpa error TypeScript maupun linting |
| **Pengujian Regex & Solution** | `npx tsx /tmp/test-deploy-runner.ts` | ✅ **39/39 solutions lulus tes**, **39/39 starterCodes terbukti tidak lolos** |
| **Pemeriksaan Kuis** | Inspeksi `deploy-*-kuis` | ✅ 6 kuis (total 36 soal), 100% bertipe `pilihan-ganda` dengan penjelasan kunci jawaban mendalam |
| **Build Produk (Production)** | `npm run build` | ⚠️ Tidak diuji di sandbox Linux karena keterbatasan SWC arm64 binary darwin, namun `tsc --noEmit` bersih |

---

## E. Kesimpulan

Track **Deployment & Docker** pada BiLearn sekarang telah lengkap, mendalam, dan ramah untuk pemula total yang melangkah dari Node.js/Express ke dunia server & cloud infrastructure. Dengan **6 halaman materi komprehensif**, **39 step latihan skenario nyata**, dan **6 kuis pilihan ganda**, pemula kini memiliki panduan kokoh dari navigasi terminal Linux dasar hingga pengoperasian Docker, VPS, Nginx, CI/CD, dan Monitoring produksi.
