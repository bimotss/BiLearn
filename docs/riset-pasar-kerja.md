# Riset Pasar Kerja Web Developer Indonesia — Juli 2026

Dokumen ini jadi dasar penyusunan kurikulum BiLearn. Semua klaim ada sumbernya di bagian bawah.

## Ringkasan Temuan

1. **Full-stack paling dicari.** Tren rekrutmen di Indonesia menempatkan full-stack developer di posisi teratas karena bisa menangani frontend + backend sekaligus. Jobstreet mencatat ~950+ lowongan web developer aktif.
2. **Laravel masih raja backend di pasar lokal.** Lowongan yang menyebut Laravel mendominasi platform job posting Indonesia (e-commerce, SaaS, CMS, korporat). Node.js kuat di startup dan aplikasi modern full-stack JS. Kesimpulan: **ajarkan keduanya sebagai track terpisah**, Laravel untuk peluang kerja lokal tercepat, Node untuk startup/remote.
3. **Skill wajib yang berulang di lowongan junior frontend:**
   - JavaScript ES6+ dan/atau **TypeScript** (sudah jadi requirement standar, bukan bonus)
   - React.js + ekosistemnya, pengalaman **Next.js**
   - **Tailwind CSS** / utility-first, plus CSS modern (Flexbox, Grid, responsive)
   - Integrasi **REST API**
   - **Git/GitHub dengan alur kerja PR-based** (kolaboratif, bukan sekadar commit)
   - Menerjemahkan desain **Figma** ke UI pixel-perfect
   - Bahasa Inggris profesional (dokumentasi teknis, meeting)
4. **Database:** MySQL/PostgreSQL/MongoDB muncul konsisten di lowongan full-stack Indonesia. Secara global (Stack Overflow Survey 2025) **PostgreSQL #1 (58,2%)**, Redis naik pesat karena caching & microservices. SQL murni (bukan cuma ORM) tetap fondasi.
5. **Docker hampir universal.** Lonjakan +17 poin penggunaan 2024→2025 — kenaikan terbesar dari semua teknologi yang disurvei. Dasar DevOps/deployment kini diharapkan bahkan untuk full-stack junior.
6. **AI-assisted coding sudah jadi requirement.** Lowongan yang mensyaratkan pengalaman AI coding tools naik **+340%** (Jan 2025 → Jan 2026). GitHub Copilot disebut di ~35% listing; Claude/Cursor makin sering muncul. Kurikulum wajib mengajarkan cara pakai AI tools dengan benar.
7. **Framework global (SO Survey 2025):** Node.js 48,7%, React 44,7%, Next.js 21,5% dan terus naik.
8. **Data Analyst:** fondasi wajib di lowongan Indonesia = **SQL + Python + Excel**. Excel tetap andalan ad-hoc analysis/reporting; data storytelling makin diminta. Gaji entry-level ~Rp5,5–7,75 jt/bulan (Jobstreet 2026). Demand terkonsentrasi di e-commerce, finance, healthcare, teknologi.

## Gaji (konteks untuk value proposition BiLearn)

- Fresh graduate web developer: **Rp2,1 jt – Rp8,5 jt/bulan** (Dicoding Tech Salary Guide)
- Junior web developer rata-rata: **~Rp4,3 jt/bulan** (Indeed)
- Full-stack junior: klaim hingga **Rp7–12 jt/bulan** (dibimbing.id — sumber bootcamp, kemungkinan optimis)
- Mid-level (3–5 th): Rp15–30 jt/bulan

## Implikasi Langsung ke Kurikulum

| Temuan | Keputusan kurikulum |
|---|---|
| Git PR-workflow diminta di lowongan junior | Track Git tersendiri, diajarkan sejak awal, simulasi PR & code review |
| TypeScript jadi standar | Track TS terpisah setelah JS, wajib sebelum React/Next |
| Laravel dominan lokal, Node dominan global | Dua track backend paralel, user pilih (atau ambil keduanya) |
| PostgreSQL #1 + SQL murni dibutuhkan | Track database dimulai dari SQL murni, baru ORM |
| Docker hampir universal | Track deployment sendiri di tahap akhir |
| AI tools +340% | Track "AI-Assisted Development" — diferensiasi vs freeCodeCamp |
| Figma-to-UI diminta | Latihan proyek CSS/React pakai file Figma nyata |
| English proficiency diminta | Istilah teknis tetap Inggris, glossary; latihan baca dokumentasi asli |

## Struktur Referensi: freeCodeCamp (pembanding)

Kurikulum Certified Full Stack Developer fCC (v9, 2025): dipecah jadi sertifikasi-sertifikasi kecil (~300 jam masing-masing, total ~1.800 jam) menuju capstone cert. Format: lecture singkat → workshop → lab → review → certification project → exam. **BiLearn meniru pola "praktek dulu, teori seperlunya" ini, tapi per-teknologi (bukan satu jalur monolitik) sesuai keinginan pemisahan track.**

## Sumber

- [Jobstreet — Lowongan Web Developer Indonesia](https://id.jobstreet.com/web-developer-jobs)
- [IDstar — 10 Pekerjaan IT Paling Dicari 2026](https://idstar.co.id/pekerjaan-it-yang-paling-dicari/)
- [TalentGO — 10 Skill IT Paling Dicari 2026](https://talentgo.id/10-skill-it-paling-dicari-perusahaan-di-tahun-2026/)
- [DebugGo — Laravel vs Node.js vs Django 2026](https://debuggo.id/blog/laravel-vs-nodejs-vs-django-backend-framework-2026)
- [anggastudio — Laravel vs Next.js untuk Developer Indonesia](https://anggastudio.com/blog/laravel-vs-next-js-panduan-memilih-framework-terbaik-untuk-developer-indonesia-2025/)
- [Stack Overflow Developer Survey 2025 — Technology](https://survey.stackoverflow.co/2025/technology)
- [Statista — Most used web frameworks 2025](https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/)
- [Jobstreet — Junior Frontend Developer Jobs](https://id.jobstreet.com/junior-frontend-developer-jobs)
- [Indeed — Gaji Junior Web Developer](https://id.indeed.com/career/junior-web-developer/salaries)
- [Dicoding — Gaji Web Developer](https://www.dicoding.com/blog/berapa-gaji-web-developer-dan-bagaimana-cara-mendapatkannya/)
- [dibimbing.id — Prospek Full Stack Developer Indonesia 2026](https://dibimbing.id/blog/detail/prospek-karier-full-stack-web-developer-di-indonesia)
- [Jobstreet — Skill Full Stack Developer](https://id.jobstreet.com/id/career-advice/article/skill-full-stack-developer)
- [aitoolranked — AI Impact on Software Engineering Jobs](https://aitoolranked.com/blog/ai-impact-on-software-engineering-jobs-analysis)
- [freeCodeCamp — Certified Full Stack Developer Curriculum](https://www.freecodecamp.org/learn/full-stack-developer-v9)
- [freeCodeCamp — Curriculum Updates 2025](https://www.freecodecamp.org/news/christmas-2025-freecodecamp-curriculum-updates/)
- [dibimbing.id — Gaji Data Analyst Jakarta 2026](https://dibimbing.id/blog/detail/gaji-data-analyst-jakarta)
- [LangkahKarirku — 20 Skill Paling Dicari 2026](https://langkahkarirku.id/blog/skill-paling-dicari-perusahaan-indonesia-2026)
- [Indeed — Lowongan Data Analyst Indonesia](https://id.indeed.com/q-data-analyst-lowongan.html)

> Catatan: angka gaji & persentase dari sumber sekunder (blog/survei), bukan scraping langsung. Untuk klaim di landing page ("skill X muncul di Y% lowongan"), lakukan analisis lowongan sendiri dulu — rencana scraping ada di backlog.
