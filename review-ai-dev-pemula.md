# Review Track AI-Assisted Development — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Seluruh temuan A–I di bawah telah ditangani secara menyeluruh. Track sekarang: **7 modul, 7 materi, 39 step, 7 kuis (35 soal)**, dan `verify:konten` bersih untuk track ini (0 pelanggaran).

Tanggal: 28 Juli 2026. Berkas: `src/data/tracks/ai-dev.ts` (saat diaudit: 6 modul, 0 materi, 35 step, 6 kuis).

Cara baca: aku membaca track ini seolah baru selesai track JavaScript, lalu memasuki track AI-Assisted Development untuk pertama kali tanpa pernah memakai GitHub Copilot, Cursor, atau Antigravity sebelumnya. Setiap poin di bawah adalah tempat aku **berhenti dan tidak paham**, bukan sekadar pelanggaran skrip.

---

## A. Yang bikin macet sejak menit pertama

### A1. Tidak ada modul "Persiapan & Instalasi AI Tools"
Sebelum perbaikan, track langsung dimulai dari "Cara Kerja & Batas LLM". Aku tidak pernah diberi tahu:
- Kategori alat AI dev (Inline autocomplete seperti Copilot/Continue, IDE khusus AI seperti Cursor/Antigravity, Chat Web seperti Claude/ChatGPT, dan CLI/Agent).
- Bagaimana cara memasang ekstensi Copilot / Continue di VS Code dan memverifikasinya.
- Cara mengatur file konfigurasi aturan proyek (`.cursorrules` / `AGENTS.md`) untuk membatasi gaya kode AI.
- Alternatif gratis dan AI lokal (Ollama / LM Studio) jika belum berlangganan Copilot ($10/bln) atau Claude Pro.
- Cara berinteraksi dengan ghost text autocomplete (menekan `Tab` untuk menerima, `Esc` untuk menolak).

### A2. Nol dari 6 modul awal memiliki halaman `materi` (baca-dulu)
Aturan keras `AGENTS.md` #1 mengharuskan minimal 1 halaman BACA-DULU per modul. Tanpa materi pembuka, pemula langsung disuruh mengetik latihan tanpa memahami model mental *pair programming* dengan LLM, batas token, dan arsitektur *next-token prediction*.

---

## B. Konsep dipakai sebelum diajarkan / variabel hantu

Beberapa latihan menyuruh memakai elemen/variabel tanpa memberikan konteks atau starter code yang memadai:
- **`ai-1-4`:** Tipe `User` ditugaskan tanpa menjelaskan hubungan antara respons JSON dan tipe TypeScript.
- **`ai-3-6`:** Kode refactoring `user?.profil?.status === 'aktif' ?? false` ditugaskan tanpa menjelaskan apa itu optional chaining dan nullish coalescing secara runtut.
- **`ai-4-3`:** Query SQL rawan injeksi dan variabel `apiKey` ditugaskan tanpa pengenalan konsep *parameter binding* `?` di JavaScript/Node.
- **`ai-5-3`:** Refactoring callback ke `async/await` langsung ditugaskan tanpa memperlihatkan kontras kegagalan error handling pada callback bertingkat.

---

## C. Penjelasan terlalu pendek & tidak seimbang

Aturan keras #3: minimal 4 kalimat ATAU 350 karakter (di luar kode, URL, dan nama file).
Meskipun sebagian step lama memiliki panjang karakter mendekati batas, beberapa step masih kekurangan 4 kalimat utuh dan belum menjawab **APA**, **KENAPA**, **KAPAN**, dan **JEBAKAN**-nya:
- **`ai-4-5`:** Penjelasan hanya 3 kalimat, belum menjelaskan secara dalam kenapa pembagian dengan nol di JS menghasilkan `Infinity` (bukan error runtime) dan bagaimana itu membunuh logika bisnis diam-diam.
- **`ai-2-2`:** Belum memberikan gambaran yang cukup tentang risiko AI menambah dependensi berukuran besar (seperti Moment.js) jika tidak diberi constraint *tanpa library eksternal*.

---

## D. `example.output` dan Bahasa yang Perlu Dirapikan

- **`ai-0-1` s/d `ai-0-4` (Modul Persiapan):** Perintah terminal (`code --list-extensions`, `ollama run`) diset dengan `language: "text"` agar tidak melempar SyntaxError pada preview runner.
- **`ai-2-1` s/d `ai-2-6` (Modul Prompting):** Menggunakan `language: "text"` karena yang ditulis pengguna adalah prompt Bahasa Indonesia / Inggris, bukan kode yang dieksekusi browser.
- **`example.output`:** Semua keluaran contoh dipastikan merupakan hasil nyata terminal / konsol / diff Git, bukan klaim manfaat.

---

## E. Tes yang menolak jawaban yang sebenarnya benar

Tes regex lama terlalu ketat pada beberapa step:
- **`ai-0-3`:** Awalnya menolak nama parameter fungsi `(p, l)` karena mengunci nama `(panjang, lebar)`. Diperbaiki menjadi `\\w+`.
- **`ai-1-2`:** Awalnya menolak arrow function pembanding `(x, y) => x.harga - y.harga` karena mengunci variabel `(a, b)`. Diperbaiki menjadi `\\w+\\.harga`.
- **`ai-1-4`:** Awalnya hanya menerima `type User =`, menolak `interface User {`. Diperbaiki menjadi `(type|interface)\\s+User`.
- **`ai-4-3`:** Awalnya pattern parameter binding `\\?\\s*['\"]` membutuhkan penulisan kutip di sekeliling `?`. Diperbaiki agar menerima `WHERE email = ?`, `[email]`.
- **`ai-5-3`:** Awalnya menolak penulisan arrow function `const tampilkanPesanan = async (id) =>`. Diperbaiki menjadi `(async\\s+function\\s+tampilkanPesanan|const\\s+tampilkanPesanan\\s*=\\s*async)`.

---

## F. Instruksi & Soal Kuis

- Semua instruksi dipastikan berbasis skenario (tidak memuat jawaban utuh yang tinggal disalin).
- Semua 7 kuis memiliki 5 soal ber-tipe `"pilihan-ganda"` dengan `explanation` kunci jawaban yang komprehensif.

---

## Apa yang Sudah Dikerjakan (28 Juli 2026)

### 1. Struktur Modul & Konten Baru
- Menambahkan **Modul 1: "Persiapan & Instalasi AI Tools"** (slug `persiapan-instalasi`, ID `ai-0-*`):
  - 1 Halaman `materi` komprehensif (`ai-0-m1`).
  - 4 Step interaktif (`ai-0-1` s/d `ai-0-4`: `code --list-extensions`, file `.cursorrules`/`AGENTS.md`, autocomplete ghost text, `ollama run`).
  - 1 Kuis 5 soal (`ai-0-kuis`).
  - Menghapus `"ai-dev"` dari `instalasiAllowlist` di `scripts/verify-konten.ts`.
- Menambahkan **6 Halaman `materi`** di awal modul lainnya (`ai-1-m1` s/d `ai-6-m1`).
  - Setiap materi memenuhi standar Ronde 3: **> 1200 karakter**, memiliki **diagram teks / tabel markdown**, bagian **jebakan/kesalahan umum**, dan bagian **kaitan ke dunia kerja**.
- Total track AI-Assisted Development kini memiliki **7 modul, 7 materi, 39 step, 7 kuis (35 soal)**.

### 2. Perluasan Explanation & Perbaikan Pedagogi
- Seluruh **39 explanation step** ditulis ulang memenuhi standar minimal 4 kalimat / 350 karakter, menjawab pertanyaan **APA**, **KENAPA**, **KAPAN**, dan **JEBAKAN**-nya.
- Seluruh `example.output` diganti menjadi keluaran konsol / terminal / diff Git nyata.
- Seluruh instruksi diubah menjadi berbasis skenario.

### 3. Perbaikan Teknis & Regex
- Mengubah `language` perintah CLI/prompt menjadi `"text"` dan kode JavaScript menjadi `"js"`/`"jsx"`.
- Melonggarkan regex tes untuk mengizinkan variasi penulisan yang valid.
- Semua 35 soal kuis ber-tipe `"pilihan-ganda"` dengan `explanation` kunci jawaban yang menjelaskan alasan pilihan benar dan pengecohnya.

---

## Bukti Verifikasi

| Pemeriksaan | Hasil | Catatan |
|---|---|---|
| `scripts/verify-konten.ts` (Track AI Dev) | ✅ Bersih (0 pelanggaran) | 7 materi, 39 step, 7 kuis |
| `npx tsc --noEmit` | ✅ Bersih (0 error) | Seluruh tipe TypeScript valid |
| `npx eslint src scripts` | ✅ Bersih (0 warning/error) | Linter bersih |
| Uji Mandiri (`/tmp/test-ai-dev.ts`) | ✅ 173/173 Lolos (0 Gagal) | 100% solution lulus tes & starter fails |
| Tes Variasi Jawaban Sah | ✅ 16/16 Variasi Sah Lolos | Menerima variasi penulisan sah |
| `npm run build` | ⚠️ Belum diuji di sandbox | Mengikuti batasan lingkungan Linux (SWC arm64). Harus diuji di Mac Bimo. |

---

## Ringkasan Commit
- `feat(ai-dev): review & pendalaman materi track AI-Assisted Development (Ronde 2 & 3)`
- Menambahkan modul Persiapan & Instalasi, 7 halaman materi komprehensif, perluasan 39 explanation step, 7 kuis pilihan ganda, serta pembersihan verifikasi konten.
