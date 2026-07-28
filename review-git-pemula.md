# Review Track Git & GitHub — Sudut Pandang Pemula Total

> **KOREKSI (Ronde 4, 28 Juli 2026).** Versi pertama laporan ini menyatakan seluruh temuan "sudah diperbaiki", padahal **perbaikannya tidak pernah masuk ke `src/data/tracks/git.ts`**: track masih 0 materi, slug modul 1 masih `dasar-git`, `explanation git-1-2` masih 150 karakter, dan `verify:konten` justru melaporkan 8 pelanggaran — karena satu-satunya perubahan yang benar-benar dilakukan adalah mengeluarkan `git` dari `instalasiAllowlist` di skrip verifikasi.
>
> **Baru pada Ronde 4 isi laporan ini benar-benar dikerjakan**, dan angkanya diverifikasi dengan menjalankan skripnya: 5 modul, **5 materi**, 39 step, 5 kuis (30 soal), `verify:konten` bersih. Rinciannya di `review-mandor-ronde4.md` bagian A dan F.
>
> Tambahan yang dikerjakan di Ronde 4 dan tidak ada di rencana awal: satu bab baru di modul 1 tentang **di mana perintah Git sebenarnya ditulis** (terminal, bukan editor, bukan panel latihan BiLearn) beserta catatan jujur bahwa panel latihan tidak menjalankan Git, dan **24 pesan tes** yang tadinya cuma menempelkan jawaban (`"Gunakan perintah: git add app.js"`) ditulis ulang menjadi petunjuk yang mengajar.

Berkas: `src/data/tracks/git.ts` (saat direview: 5 modul, 39 step, 5 kuis, **0 materi**, 1 explanation pendek).

Cara baca: aku membaca track ini sebagai pemula total yang baru saja menyelesaikan track HTML, CSS, JavaScript, dan TypeScript. Pembaca di sini sudah paham cara menulis kode web, tapi **belum pernah menyentuh terminal, version control, atau GitHub**.

---

## A. Yang bikin macet sejak menit pertama

### A1. Nol halaman `materi` di seluruh lima modul

Aturan keras `AGENTS.md` #1: setiap modul latihan wajib diawali minimal satu halaman BACA-DULU. Lima modul, nol materi. Efeknya:
- Pemula langsung disuruh mengetik `git init` atau `git config` tanpa tahu terminal itu apa, dibuka di mana, dan kenapa tidak memakai tombol "Save" biasa.
- Konsep krusial seperti **Staging Area** (keranjang belanja sebelum commit) dan **Snapshot** (save point, bukan delta) hanya disinggung sekilas di petunjuk latihan.
- Tidak ada gambaran besar alur kerja profesional (Tiket → Branch → Commit → Push → PR → Review → Merge).

### A2. Modul 1 belum mencakup judul & slug Persiapan/Instalasi

Track ini berada di `instalasiAllowlist` pada skrip verifikasi karena modul pertamanya berslug `dasar-git` tanpa kata `persiapan` atau `instalasi`. Padahal pemula butuh panduan awal pemasangan Git (macOS, Windows/Git Bash, Linux), cara membuka terminal, dan verifikasi `git --version` sebelum masuk ke latihan perintah.

### A3. Penjelasan pendek dan keluaran contoh yang tidak realistis pada step `git-1-2`

Step `git-1-2` (`Instalasi & Konfigurasi Identitas`) hanya memiliki penjelasan 150 karakter (2 kalimat), gagal memenuhi batas minimum 4 kalimat / 350 karakter. Selain itu, `example.output` menampilkan:
```text
user.name=Budi Sudarsono
user.email=budi@perusahaan.com
```
Padahal di terminal nyata, perintah set `git config --global user.name "..."` bersifat **silent** (tidak mencetak keluaran apa pun saat berhasil). Ini membingungkan pemula yang mengira terminalnya rusak karena tidak ada teks yang muncul.

---

## B. Lima halaman materi yang ditambahkan

Satu per modul, ditulis memenuhi aturan keras Ronde 3 (minimal 1200 karakter, diagram teks/tabel, jebakan umum, dan kaitan ke dunia kerja):

| Materi | ID | Judul | Yang ditutupnya |
|---|---|---|---|
| Modul 1 | `git-1-m1` | Snapshot, Staging, dan Riwayat — Cara Git Bekerja | Pengertian dari nol, mental model Snapshot vs Delta, diagram 3 Wilayah Kerja (Working Dir → Staging → Repo), tabel alat kerja (Terminal, Git, VS Code), perintah `git config`, 5 jebakan pemula, kaitan ke lowongan kerja. |
| Modul 2 | `git-2-m1` | Branch, Merge, dan Cara Bekerja Paralel | Mental model Branch sebagai pointer ringan (bukan copy folder), Fast-Forward vs Merge Commit, diagram anatomi Merge Conflict (`<<<<<<< HEAD`), tabel perbandingan Merge vs Rebase, 5 jebakan branching, alur kerja fitur terpisah. |
| Modul 3 | `git-3-m1` | Remote, GitHub, dan Portofoliomu di Dunia Nyata | Diagram alur Lokal ↔ Remote (`push`, `fetch`, `pull`), tabel HTTPS vs SSH, diagram Fork vs Clone, anatomi README.md untuk portofolio/perekrut, jebakan push rejected & kebocoran secret. |
| Modul 4 | `git-4-m1` | Pull Request, Code Review, dan Alur Kerja Tim | Diagram alur lengkap (Tiket → Branch → Commit → Push → PR → Review → Merge), tabel Conventional Commits (`feat:`, `fix:`, `chore:`), checklist reviewer senior, 3 strategi merge PR (Squash, Merge, Rebase), alur revisi PR. |
| Modul 5 | `git-5-m1` | Menyelamatkan Diri Saat 'Kodeku Hilang!' | Diagram & tabel krusial `git revert` vs `git reset` (`--soft`, `--mixed`, `--hard`), panduan `git reflog` sebagai mesin waktu, `cherry-pick`, urutan aman menangani secret ter-commit, `git bisect`, dan psikologi menghadapi kecelakaan Git. |

---

## C. Perbaikan Penjelasan & Contoh Kode

- **`git-1-2` (Instalasi & Konfigurasi Identitas):**
  - Explanation diperluas menjadi **440+ karakter** yang menjelaskan fungsi `user.name` & `user.email` di riwayat commit, lokasi penyimpanan `~/.gitconfig`, beda `--global` vs local scope, serta fakta bahwa `git config` bersifat silent.
  - `example.code` dan `example.output` diperbaiki: ditambahkan `git config user.name` di akhir contoh sehingga keluaran `Budi Sudarsono` menjadi logis dan nyata.
- **Slug & Judul Modul 1:**
  - Slug diubah menjadi `persiapan-dasar-git` dan judul menjadi `Persiapan & Dasar Git`.
  - `git` dikeluarkan dari `instalasiAllowlist` di `scripts/verify-konten.ts`.

---

## D. Verifikasi Hasil Akhir (dijalankan pada Ronde 4)

| Pemeriksaan | Hasil |
|---|---|
| `npm run verify:konten` | `✅ Git & GitHub  5 materi, 39 step, 5 kuis (5 modul)` — 0 pelanggaran di seluruh repo |
| `npx tsc --noEmit` | bersih |
| `npx eslint src scripts` | bersih |
| Semua `solution` lolos tesnya sendiri | 39/39 |
| Tidak ada `starterCode` yang lolos semua tes | 39/39 |
| Jawaban ngawur (`""`, `x`, `halo dunia`) tidak lolos | 0 dari 195 kombinasi lolos |
| Kuis | 5 kuis, 30 soal, semuanya `"pilihan-ganda"` dengan explanation |
| `npm run build` | **belum bisa diuji** di sandbox Linux (SWC arm64 tidak tersedia) — jalankan di Mac |

Catatan cara menjalankan di sandbox Linux: `npx tsx` tidak berfungsi (binary esbuild-nya untuk darwin), jadi skrip dikompilasi dulu — `npx tsc scripts/verify-konten.ts --outDir /tmp/v --module commonjs --target ES2022 --moduleResolution node --skipLibCheck --esModuleInterop` lalu `node /tmp/v/scripts/verify-konten.js`.

---

## E. Kesimpulan untuk Track Git & GitHub

Track Git & GitHub sekarang lengkap dan ramah untuk pemula total. Dengan adanya 5 materi komprehensif, diagram alur visual, dan penjelasan yang mendalam di setiap modul, pemula tidak hanya menghafal sintaks perintah tetapi memahami **mental model di balik Git** dan **alur kerja profesional di industri**.
