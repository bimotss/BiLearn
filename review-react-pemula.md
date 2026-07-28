# Review Track React — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Seluruh temuan A–I di bawah telah ditangani secara menyeluruh. Track sekarang: **12 modul, 12 materi, 73 step, 12 kuis (60 soal)**, dan `verify:konten` bersih untuk track ini (0 pelanggaran).

Tanggal: 28 Juli 2026. Berkas: `src/data/tracks/react.ts` (saat diaudit: 11 modul, 0 materi, 67 step, 11 kuis).

Cara baca: aku membaca track ini seolah baru selesai track JavaScript & TypeScript, lalu memasuki track React untuk pertama kali tanpa pernah memegang React sebelumnya. Setiap poin di bawah adalah tempat aku **berhenti dan tidak paham**, bukan sekadar pelanggaran skrip.

---

## A. Yang bikin macet sejak menit pertama

### A1. Tidak ada modul "Persiapan & Instalasi React"
Sebelum perbaikan, track langsung dimulai dari "Komponen & JSX". Aku tidak pernah diberi tahu:
- Kebutuhan versi Node.js (minimal v18+).
- Bagaimana cara membuat proyek React modern (`npm create vite@latest -- --template react-ts`).
- Mengapa Create React App (CRA) sudah usang dan industri beralih ke Vite.
- Struktur folder bawaan Vite (`src/main.tsx`, `App.tsx`, `index.html`, `vite.config.ts`).
- Cara membuka React DevTools di browser untuk menginspeksi state/props.

### A2. Nol dari 11 modul awal memiliki halaman `materi` (baca-dulu)
Aturan keras `AGENTS.md` #1 mengharuskan minimal 1 halaman BACA-DULU per modul. Tanpa materi pembuka, pemula langsung disuruh mengetik sintaks komponen tanpa memahami peta mental `UI = f(state)` dan alur kerja Virtual DOM.

---

## B. Konsep dipakai sebelum diajarkan / variabel hantu

Beberapa latihan menyuruh memakai elemen/state tanpa memberikan konteks atau starter code yang memadai:
- **`react-1-4`:** Merender `isLoggedIn` tanpa memberi tahu variabel itu datang dari mana.
- **`react-2-1`:** Menyuruh mengetik props dengan interface TypeScript padahal tipe props belum diperkenalkan di materi pembuka.
- **`react-3-4`:** Updater function (`prev => prev + 10`) langsung ditugaskan tanpa skenario masalah snapshot state.
- **`react-7-1` s/d `react-7-6`:** Membahas Context & Zustand tanpa memberi gambaran jelas kapan prop-drilling benar-benar menjadi masalah nyata di aplikasi.

---

## C. Penjelasan terlalu pendek (64 dari 67 step melanggar)

Aturan keras #3: minimal 4 kalimat ATAU 350 karakter (di luar kode, URL, dan nama file).
Hasil hitung otomatis sebelum perbaikan: **64 step gagal** (mayoritas hanya 1–2 kalimat, 98–170 karakter).

Contoh yang membuat pemula bingung:
- **`react-1-2` (143 karakter):** "Komponen React adalah fungsi JavaScript yang mengembalikan JSX. Nama komponen WAJIB menggunakan PascalCase." -> Tidak menjelaskan KENAPA PascalCase wajib (agar tidak dikira tag HTML biasa oleh React), KAPAN dipakai, dan JEBAKAN jika lupa kata kunci `return`.
- **`react-3-5` (141 karakter):** "Jangan memutasi objek/array state secara langsung. Buatlah salinan baru dengan spread operator." -> Tidak menjelaskan KENAPA memutasi langsung tidak memicu re-render (karena perbandingan referensi memori `Object.is`).
- **`react-5-1` (129 karakter):** "useEffect digunakan untuk menyinkronkan komponen dengan sistem di luar React." -> Tidak menjelaskan KAPAN effect dihindari dan JEBAKAN infinite render loop jika dependency array tidak dikontrol.

---

## D. `example.output` yang bukan output (aturan keras #2)

Beberapa contoh menampilkan "klaim manfaat" bukan hasil keluaran nyata:
- **`react-0-6` (sebelumnya):** `"Vite 50x lebih cepat daripada CRA pada proyek skala besar."` (Klaim manfaat / kata kunci "lebih cepat").
- **`react-2-3`:** `"Struktur fleksibel dan mudah dipelihara."` (Klaim manfaat).
- **`react-3-6`:** `"Kode lebih bersih dan tidak berisiko out-of-sync."` (Klaim manfaat).

---

## E. Penggunaan `language` yang kurang tepat

- Perintah CLI Vite (`npm create vite@latest`) sebelumnya diset sebagai `language: "jsx"`, padahal perintah terminal wajib menggunakan `language: "text"` agar tidak dikompilasi oleh runner JSX/Babel preview.

---

## F. Tes yang menolak jawaban yang sebenarnya benar

Tes regex lama terlalu ketat terhadap variasi penulisan:
- **`react-3-4`:** Menolak `setScore((prev) => prev + 10)` (dengan kurung pada parameter arrow function).
- **`react-1-1`:** Menolak variabel dengan spasi fleksibel pada `function Judul()`.
- **`react-2-1`:** Menolak sintaks interface TypeScript dengan variasi tanda titik koma `;` atau spasi.

---

## G. Instruksi membocorkan jawaban (anti-pattern #1)

Beberapa step menuliskan solusi utuh di instruksi:
- **`react-1-7`:** `"Tuliskan: export default function Card() { return <div>Card</div>; }"` -> User hanya menyalin tanpa berpikir.
- **`react-2-5`:** `"Tulis parameter fungsi komponen function Avatar({ size = 40 }: AvatarProps)"` -> Seluruh jawaban ada di kalimat perintah.

---

## H. `topics` yang tidak tersentuh

- Modul 12 (Pola Dunia Kerja): Bab `Environment variable` dan `Aksesibilitas (a11y)` hanya disinggung sekilas tanpa step/materi eksplisit yang mendalam.

---

## I. Kejujuran panel preview untuk library eksternal

Beberapa modul React menggunakan library eksternal yang tidak tersedia di dalam sandbox iframe preview (seperti `react-router-dom`, `@tanstack/react-query`, `zustand`, `@testing-library/react`).
- Penjelasan & note pada step terkait telah dilengkapi dengan **catatan jujur** bahwa preview sandbox fokus memvalidasi kebenaran sintaks JSX dan aturan regex, sementara eksekusi bundler eksternal berjalan di lingkungan proyek lokal (Vite).

---

---

## Apa yang Sudah Dikerjakan (28 Juli 2026)

### 1. Struktur Modul & Konten Baru
- Menambahkan **Modul 1: "Persiapan & Instalasi React"** (slug `persiapan-instalasi`, ID `react-0-*`):
  - 1 Halaman `materi` komprehensif (`react-0-m1`).
  - 6 Step interaktif (`react-0-1` s/d `react-0-6`: Node.js check, `npm create vite`, anatomi folder Vite, React DevTools, `npm run dev/build`, CRA vs Vite).
  - 1 Kuis 5 soal (`react-0-kuis`).
  - Menghapus `"react"` dari `instalasiAllowlist` di `scripts/verify-konten.ts`.
- Menambahkan **11 Halaman `materi`** di awal setiap modul lainnya (`react-1-m1` s/d `react-11-m1`).
  - Setiap materi memenuhi standar Ronde 3: **> 1200 karakter**, memiliki **diagram teks / tabel markdown**, bagian **jebakan/kesalahan umum**, dan bagian **kaitan ke dunia kerja**.
- Total track React kini memiliki **12 modul, 12 materi, 73 step, 12 kuis (60 soal)**.

### 2. Perluasan Explanation & Perbaikan Pedagogi
- Seluruh **73 explanation step** ditulis ulang memenuhi standar minimal 4 kalimat / 350 karakter, menjawab pertanyaan **APA**, **KENAPA**, **KAPAN**, dan **JEBAKAN**-nya.
- Seluruh `example.output` diganti menjadi keluaran konsol / representasi render DOM nyata (bebas dari klaim manfaat).
- Seluruh instruksi diubah menjadi berbasis skenario (tidak lagi membocorkan jawaban utuh).

### 3. Perbaikan Teknis & Regex
- Mengubah `language` perintah CLI menjadi `"text"` dan seluruh kode React/TS menjadi `"jsx"`.
- Melonggarkan regex tes untuk mengizinkan variasi penulisan yang valid (spasi fleksibel, kurung opsional pada arrow function `(prev) =>`, tanda kutip tunggal/ganda, dan destructuring props).
- Semua soal kuis dipastikan ber-tipe `"pilihan-ganda"` (5 soal per kuis) dengan `explanation` kunci jawaban yang menjelaskan alasan pilihan benar dan pengecohnya.

---

## Bukti Verifikasi

| Pemeriksaan | Hasil | Catatan |
|---|---|---|
| `scripts/verify-konten.ts` (Track React) | ✅ Bersih (0 pelanggaran) | 12 materi, 73 step, 12 kuis |
| `npx tsc --noEmit` | ✅ Bersih (0 error) | Seluruh tipe TypeScript valid |
| `npx eslint src` | ✅ Bersih (0 warning/error) | Linter bersih |
| Tes Uji Mandiri (`/tmp/test-react-content.js`) | ✅ 73/73 Solution Lulus, 73/73 Starter Fails | 100% tes regex konsisten |
| Tes Variasi Jawaban Sah | ✅ 10/10 Lolos | Menerima variasi penulisan sah |
| `npm run build` | ⚠️ Belum diuji di sandbox | Mengikuti batasan lingkungan Linux (SWC arm64). Harus diuji di Mac Bimo. |

---

## Ringkasan Commit
- `feat(react): review & pendalaman materi track React (Ronde 2 & 3)`
- Menambahkan modul Persiapan & Instalasi, 12 halaman materi komprehensif, perluasan 73 explanation step, 12 kuis pilihan ganda, serta pembersihan verifikasi konten.
