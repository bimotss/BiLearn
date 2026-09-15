# Perintah Perbaikan Business English — Review 15 September 2026

## Tujuan dan batas pekerjaan

Perbaiki track Business English agar pemula bisa memahami, berlatih, menerima koreksi yang adil, lalu menulis e-mail kerja secara mandiri. Dokumen ini merupakan brief implementasi untuk agen berikutnya, bukan laporan bahwa perbaikan sudah dilakukan. Tidak ada prosedur yang menjamin nol kesalahan; kelulusan harus didukung bukti pemeriksaan, bukan janji.

- Target konten: `src/data/tracks/business-english.ts`.
- Target UI: istilah yang tampil dalam pengalaman Business English, termasuk editor, pemeriksaan jawaban, preview, dan pemilihan mode.
- Boleh mengubah komponen bersama dan tipe bila diperlukan untuk konteks bahasa, dengan perubahan minimal dan pemeriksaan regresi track lain.
- Pertahankan slug track, slug modul, ID item, dan data progres yang sudah ada. Jangan menghapus item untuk membuat audit bersih. Tambahan item memakai ID unik.
- Jangan mengubah konten track lain atau merombak mesin penilaian seluruh aplikasi tanpa kebutuhan yang dibuktikan.
- Jangan deploy, push, menghapus data, atau melakukan perubahan layanan produksi hanya karena brief ini. Siapkan hasil lokal yang dapat ditinjau; publikasi mengikuti instruksi eksplisit pengguna.
- Jaga perubahan pengguna yang sudah ada. Saat brief dibuat, `AGENTS.md` berstatus modified dan `.gitattributes` untracked; periksa kembali status terbaru sebelum bekerja.

## 1. Orientasi wajib sebelum mengedit

1. Baca `AGENTS.md`, seluruh `panduan_isi.md`, dan panduan Next.js yang relevan di `node_modules/next/dist/docs/` sebelum menulis kode aplikasi.
2. Periksa `graphify-out/graph.json` dan `graphify-out/GRAPH_REPORT.md`, lalu query relasi sebelum membaca alur secara manual:

   ```bash
   uv run --with graphifyy graphify query "Relasi Business English dengan StepView, StepSusunKodeView, PemilihModeAwal dan validasi jawaban"
   ```

3. Baca `src/lib/types.ts`, `src/lib/tes.ts`, serta `scripts/verify-konten.ts`. Periksa implementasi sebenarnya; jangan menambah field yang tidak dirender.
4. Gunakan HTML, CSS, JavaScript, dan modul 4 Git sebagai acuan kualitas sesuai `AGENTS.md`.
5. Baca `perintah-business-english.md` dan `perintah-business-english-ronde2.md` sebagai riwayat. Angka dan dugaan kondisi di sana bukan bukti keadaan terbaru. Ikuti instruksi pengguna dan `AGENTS.md`; untuk cakupan perbaikan review ini, gunakan brief terbaru ini bila berbeda dengan brief lama. Jangan menumpuk kuota kuis dari beberapa brief sampai bertentangan dengan aturan 5–7 soal per modul.
6. Dari graph, periksa seperlunya: `src/components/StepView.tsx`, `src/components/StepSusunKodeView.tsx`, `src/components/ModeBelajarBar.tsx`, dan `src/app/tracks/[slug]/[stepId]/ItemDetail.tsx`. Telusuri juga renderer preview dan label aksesibilitas berdasarkan relasi aktual.

## 2. Pisahkan versi situs dan versi lokal

Review dilakukan pada https://bilearn.bproject.online/tracks/business-english/.

**Temuan terkonfirmasi di situs pada 15 September 2026:**

- 9 modul, 25 item: 9 materi, 14 latihan, 2 kuis.
- Latihan dan kuis hanya terlihat pada modul **Tanda Baca** dan **Dokumen Bisnis**.
- Tujuh modul lain hanya menampilkan bacaan.
- Estimasi di situs: 45 jam. Metadata lokal yang terbaca: 30 jam.
- Lokal sudah memuat materi, latihan, dan kuis tambahan yang tidak muncul pada silabus situs. Review sebelumnya bukan audit penuh isi lokal.

Pemeriksaan saat penulisan brief menghasilkan inventaris lokal **17 materi, 64 step, 17 kuis dalam 9 modul**; seluruh 64 step memiliki mode susun kode. `npm run verify:konten` berhasil, tetapi ini tidak membuktikan seluruh aturan editorial terpenuhi. Khusus jumlah soal per modul, hitung total aktual dan bandingkan dengan `AGENTS.md`; jangan berasumsi verifier sudah memeriksa batas agregat itu.

Pemeriksaan TypeScript/build saat penulisan brief belum berhasil karena dependency lokal belum tersedia: `next` tidak ditemukan dan `npx tsc` mengambil paket `tsc` yang bukan compiler TypeScript proyek. ESLint dalam rangkaian command tidak sempat berjalan. Agen pelaksana harus menyiapkan dependency sesuai lockfile proyek yang tersedia terlebih dahulu, memeriksa binary lokal, lalu menjalankan pemeriksaan ulang. Jangan menginstal paket bernama `tsc` sebagai pengganti `typescript`.

**Jangan menyalin situs untuk menimpa lokal.** Jangan menyimpulkan semua temuan masih ada di lokal atau bahwa penyebabnya pasti deployment tertinggal.

Buat inventaris terbaru per modul untuk situs dan lokal: slug, judul, ID materi, jumlah step, jumlah kuis, jumlah soal, dan cakupan topics. Untuk setiap temuan di bawah, catat status: masih ada di lokal / sudah diperbaiki dan teruji / hanya teramati di situs / belum dapat dipastikan. Jika situs tidak dapat diakses, laporkan batas pemeriksaan itu dan lanjutkan pekerjaan lokal yang tidak bergantung pada akses situs.

## 3. Temuan dan kriteria perbaikan

### P1 — Jawaban wajar ditolak: `beng-8-1`

URL: https://bilearn.bproject.online/tracks/business-english/beng-8-1/

Tugas situs meminta subject untuk persetujuan anggaran revisi proposal sebelum 15 April. Jawaban berikut **sudah dicoba lewat UI dan ditolak**:

```text
Subject: Revised Budget Proposal — Please Approve before 15 April
```

Pesan kegagalan meminta pola `Subject: Budget Proposal — Approval Required by April 15`.

Perbaikan:

- Nilai unsur tugas: topik anggaran/proposal, permintaan persetujuan, dan tenggat yang sesuai, bukan satu kalimat hafalan.
- Terima variasi yang benar sesuai instruksi: bentuk permintaan, urutan tanggal, spasi, serta pemisah jika pemisah bukan sasaran pembelajaran.
- Bedakan `before` (sebelum) dan `by` (paling lambat); jangan menganggap identik tanpa menjelaskan kebijakan tenggat dalam skenario. Selaraskan instruksi, contoh, solusi, dan tes.
- Pesan gagal menyebut unsur yang kurang dan petunjuk perbaikannya, bukan membocorkan seluruh kunci jawaban.
- Jangan melonggarkan regex menjadi pencarian kata lepas yang menerima negasi, tanggal keliru, atau maksud yang bertentangan.

Kriteria selesai: jawaban wajar di atas diterima bila tugas asal tetap dipertahankan; minimal dua variasi lain juga diterima. Jawaban tanpa permintaan persetujuan, tanggal salah, dan pesan yang menolak persetujuan tidak boleh lolos. Jika skenario berubah, tetap simpan kasus asal sebagai bukti regresi dan jelaskan pemetaan ke kasus baru.

### P1 — Latihan belum merata pada silabus situs

Lengkapi bagian yang benar-benar masih kurang di lokal. Jangan menduplikasi latihan yang sudah ada.

| Modul | Bukti kemampuan yang perlu muncul |
| --- | --- |
| Persiapan & Alat Belajar | Orientasi pemakaian editor, contoh cara memakai referensi, pemeriksaan awal kemampuan tanpa mengklaim sertifikasi CEFR |
| Dasar Kalimat | Mengenali dan memperbaiki kalimat tidak utuh, agreement, acuan pronoun, dan susunan modifier |
| Tanda Baca | Memilih tanda baca berdasarkan hubungan ide dan menjelaskan akibatnya |
| Bekerja dengan Kata | Memilih kata dari konteks, pasangan kata yang tertukar, dan register |
| Jebakan Non-Native | Memakai article, tense, modal, dan preposition dalam konteks yang sudah diajarkan |
| Menulis Paragraf | Memilih topic sentence, mengurutkan bukti, dan memperbaiki transisi |
| Proses Menulis | Mengubah brief menjadi outline, draf, lalu revisi berdasarkan masalah yang ditemukan |
| Prinsip Business Writing | Menyesuaikan tujuan, penerima, nada, kejelasan, dan tindakan berikutnya |
| Dokumen Bisnis | Menggunakan format dokumen yang sesuai dan menyusun e-mail utuh |

Setiap topics aktual wajib dipetakan ke isi nyata di modul yang sama. Sekadar menyebut istilah dalam satu kalimat bukan pengajaran yang memadai. Terapkan contoh → latihan terbimbing → penerapan dengan konteks baru → umpan balik. Gunakan target 4–8 step per modul dari panduan; jangan mengurangi modul yang sudah lebih lengkap hanya untuk mengejar angka. Jika penambahan memerlukan pemecahan modul, ikuti ketentuan diskusi di panduan dan selesaikan pekerjaan lain yang independen.

### P1 — Petunjuk comma splice keliru: `beng-2-3`

URL: https://bilearn.bproject.online/tracks/business-english/beng-2-3/

Catatan situs mengatakan bahwa jika bagian setelah koma masih kalimat utuh, komanya salah. Aturan itu terlalu luas. Counterexample:

```text
After the meeting, we sent the report.
```

Ajarkan pemeriksaan kedua sisi: apakah masing-masing merupakan independent clause dan apakah ada coordinating conjunction yang sesuai. Bandingkan setidaknya contoh berikut:

```text
The tests passed, we shipped the release.       (comma splice dalam latihan tulisan formal)
The tests passed; we shipped the release.      (dua klausa berkaitan)
The tests passed, so we shipped the release.   (hubungan hasil)
After the meeting, we sent the report.         (frasa pembuka)
```

Pisahkan kebenaran bahasa dari kepatuhan terhadap tugas: bila step khusus meminta semicolon, bentuk dengan conjunction boleh tidak memenuhi tugas, tetapi pesan tidak boleh mengatakan bahasa Inggrisnya salah. Jangan menerima semua alternatif bila justru menghilangkan konsep yang sedang dilatih.

### P2 — Jawaban dibocorkan: `beng-8-4`

URL: https://bilearn.bproject.online/tracks/business-english/beng-8-4/

Instruksi situs langsung meminta mengganti `short summary` dengan `executive summary`. Ubah menjadi keputusan berdasarkan laporan pendek: informasi mana yang paling dibutuhkan pengambil keputusan, atau revisi ringkasan agar memuat temuan dan rekomendasi.

- Contoh memakai laporan/kasus berbeda dari tugas.
- Hindari klaim absolut bahwa frasa `short summary` tidak pernah digunakan dalam dokumen resmi. Bedakan deskripsi ringkasan pendek dengan nama bagian dokumen tertentu.
- Pertahankan ID yang ada dan pastikan latihan baru menguji konsep, bukan sekadar sinonim.

### P2 — Materi dasar terlalu padat: `beng-1-m1`

URL: https://bilearn.bproject.online/tracks/business-english/beng-1-m1/

Materi situs menumpuk subject, verb, fragment, run-on, agreement, modifier, tense, capitalization, pronoun, adjective, dan adverb. Beberapa hanya mendapat penjelasan singkat.

- Urutkan konsep dari kalimat konkret dan kosakata yang dipahami pemula.
- Jelaskan arti contoh penting; jangan menambah beban istilah teknis kerja sebelum konteksnya jelas.
- Pecah ke item materi yang koheren jika diperlukan. Setiap materi baru tetap memenuhi kedalaman wajib; jangan membuat banyak halaman tipis.
- Sisipkan latihan setelah kelompok konsep, sebelum berpindah ke konsep lain.
- Pastikan contoh tidak memakai grammar yang belum diajarkan tanpa bantuan penjelasan.
- Ganti generalisasi yang menakut-nakuti seperti pembaca pasti mencurigai seluruh tulisan akibat satu kesalahan dengan penjelasan dampak yang konkret dan proporsional.

### P2 — Pengecoh kuis terlalu jelas: `beng-8-kuis`

URL: https://bilearn.bproject.online/tracks/business-english/beng-8-kuis/

Contoh pengecoh situs: memo wajib ditulis tangan di kertas bermaterai atau selalu sepuluh halaman. Ganti dengan miskonsepsi masuk akal yang berkaitan langsung dengan kompetensi.

- Pertahankan 5–7 soal per modul sesuai `AGENTS.md`, semuanya `pilihan-ganda` dengan explanation.
- Buat satu jawaban terbaik berdasarkan konteks yang dinyatakan; hindari dua jawaban sah yang bergantung pada preferensi gaya.
- Pilihan sebanding panjang dan nadanya. Jangan membuat jawaban benar selalu paling panjang atau selalu pada posisi yang sama.
- Explanation menjelaskan alasan jawaban dan kekurangan alternatif utama, bukan sekadar mengulang pilihan benar.
- Gunakan skenario penerima, tujuan, tenggat, atau fakta dokumen yang jelas. Jangan mengubah preferensi organisasi menjadi aturan universal.

### P2 — UI masih menggunakan istilah coding

Situs menampilkan `Mengetik kode`, `Editor kode`, `Jalankan Tes`, `Preview`, serta `Yang kamu tulis (tidak dijalankan di preview)`.

Sesuaikan konteks Business English, misalnya menjadi `Tulis jawaban`, `Editor jawaban`, `Periksa jawaban`, dan `Draf tulisanmu`. Periksa teks terlihat, aria-label, modal awal, mode alternatif, dan pesan hasil. Label mode alternatif harus sesuai interaksinya: memilih jawaban berbeda dengan menyusun potongan kalimat.

Jangan mengganti istilah coding secara global atau menentukan semua `language: text` sebagai pelajaran bahasa: Git, SQL, dan Python juga memakai nilai itu. Gunakan konteks track yang jelas. Pertahankan mekanisme progres dan pintasan yang sudah bekerja, lalu cek track coding setelah perubahan komponen bersama.

### P2 — Tugas akhir dan klaim hasil belajar

Tambahkan atau perbaiki penerapan terakhir dalam modul Dokumen Bisnis: e-mail utuh untuk skenario kerja dengan penerima, fakta, permintaan, dan tenggat yang jelas. Ajarkan unsur-unsurnya terlebih dahulu.

Rubrik yang terlihat bagi peserta:

1. Tujuan dan permintaan mudah ditemukan.
2. Fakta penting benar dan lengkap.
3. Nada sesuai penerima.
4. Struktur mudah diikuti.
5. Grammar dan pilihan kata mendukung kejelasan.

Pakai kemampuan aplikasi yang tersedia. Jika regex hanya mampu memeriksa unsur terbatas, tampilkan batas itu secara jujur dan sediakan rubrik penilaian mandiri beserta contoh pembahasan setelah pengerjaan. Jangan memberi label otomatis “profesional”, “B2”, atau “siap kerja” hanya karena beberapa kata cocok. Jangan menambah layanan AI, mengirim draf pengguna ke pihak ketiga, atau membuat mesin penilaian bebas baru demi tugas ini.

Tinjau klaim A2–B1 menuju B2 dan estimasi jam: berikan dasar yang masuk akal dari aktivitas, tanpa menjanjikan level bahasa hanya berdasarkan penyelesaian track. Scope utama track adalah tulisan; jangan menjanjikan listening/speaking yang tidak dilatih. Verifikasi klaim kebahasaan yang meragukan menggunakan sumber primer tepercaya dan catat sumber pada laporan.

## 4. Standar konten yang tidak boleh dilanggar

- Ikuti seluruh aturan `AGENTS.md`, bukan hanya daftar ringkas ini.
- Setiap modul latihan diawali materi. Modul pertama tetap orientasi persiapan; periksa ketentuan nama persiapan/instalasi dan jangan mengarang kebutuhan instalasi untuk latihan bahasa.
- Materi minimal 1.200 karakter, memiliki diagram teks atau tabel, jebakan umum, serta kaitan dunia kerja.
- Setiap explanation step minimal empat kalimat atau 350 karakter yang menjelaskan apa, kenapa, kapan, dan jebakan. Jangan mengakali penghitung dengan nama file atau kode.
- Setiap step memiliki `example.code` dan `example.output` dengan kasus berbeda dari solusi. Untuk bahasa, tampilkan hasil revisi atau analisis perubahan yang konkret; jangan hanya klaim manfaat.
- Gunakan `language: "text"` untuk jawaban bahasa Inggris.
- Instruksi memberi skenario dan batasan, bukan kalimat kunci lengkap.
- Tidak ada latihan yang hanya mengetik komentar atau menyalin kalimat tersedia.
- Penjelasan berbahasa Indonesia, menyapa “kamu”, dan istilah teknis tetap Inggris dengan pengertian yang jelas.
- Jangan melemahkan verifier, menghapus tes, atau menambah pengecualian agar kesalahan konten lolos.

## 5. Pengujian wajib dan bukti

### A. Baseline

Sebelum perubahan, catat `git status --short`, inventaris lokal, dan hasil verifikasi awal. Bedakan kegagalan yang sudah ada dengan regresi pekerjaanmu.

### B. Uji seluruh step Business English

Buat uji regresi yang dapat dijalankan ulang, memuat input nyata dan ekspektasinya. Jalankan regex dengan `new RegExp(...)` dan semantik flags/mustNotMatch yang sama dengan aplikasi; cek juga melalui evaluator produksi. Jangan hanya menguji `solution`.

Minimal per step:

- Satu solusi acuan yang benar.
- Dua variasi jawaban benar yang tetap memenuhi batasan tugas.
- Dua jawaban salah yang dekat dengan jawaban benar dan melanggar tujuan latihan.
- Starter belum lolos seluruh tes.

Untuk pola baru/berubah, tambahkan kasus spasi, baris baru, kapitalisasi, apostrof lurus/lengkung, bentuk tunggal/jamak, urutan tanggal, atau urutan frasa sesuai relevansinya. Jangan mengabaikan kapitalisasi atau tanda baca jika justru itulah sasaran step. Tambahkan negasi dan kata kunci yang muncul dalam konteks salah untuk mendeteksi kelulusan palsu.

Jika memakai `susunKode`, uji gabungan potongan benar, setiap pengecoh yang relevan, serta konsistensinya dengan mode mengetik. Alternatif yang masih benar jangan dijadikan pengecoh salah.

### C. Perintah proyek

```bash
npm run verify:konten
npx tsc --noEmit && npx eslint src
npm run build
uv run --with graphifyy graphify update
```

Jika menambah skrip pengujian, jalankan skrip tersebut serta lint berkas skrip yang diubah. Catat command, exit code, dan ringkasan hasil aktual. Jangan menulis hasil yang belum dijalankan. Periksa perubahan hasil Graphify sebelum memasukkannya ke hasil kerja.

### D. Uji browser pada hasil lokal

Jalankan aplikasi dan periksa:

1. Halaman track: seluruh item yang diharapkan muncul, urutan modul jelas, dan link valid.
2. Orientasi serta Dasar Kalimat sebagai pemula: materi → latihan → koreksi → lanjut.
3. `beng-8-1`: jawaban alternatif yang menjadi bukti review diterima sesuai skenario, lalu input salah menghasilkan koreksi yang tepat.
4. `beng-2-3`: penjelasan aturan benar dan batasan semicolon jelas.
5. `beng-8-4`: tugas menuntut pemahaman tanpa membocorkan jawaban.
6. Kuis: memilih salah dan benar, explanation, serta mencoba lagi.
7. Tugas e-mail utuh: rubrik terbaca dan batas penilaian otomatis jelas.
8. Kedua mode belajar yang tersedia, progres, navigasi, dan Ctrl+Enter; jangan menghapus progres pengguna untuk pengujian.
9. Tampilan desktop dan ponsel: editor, tabel materi, potongan kalimat, serta feedback tidak terpotong atau memerlukan scroll horizontal yang menghalangi tugas.
10. Minimal satu track coding dan satu track non-JS seperti Git jika komponen bersama berubah: label, preview, penilaian, dan progres tetap bekerja.

Build sukses tidak membuktikan konten benar atau UI bekerja. Pemeriksaan browser tidak menggantikan uji variasi jawaban.

## 6. Kriteria selesai dan laporan serah-terima

Simpan laporan implementasi terpisah, misalnya `review-business-english-perbaikan-2026-09-15.md`, dengan:

- Inventaris sebelum/sesudah per modul dan matriks topics → ID materi/step/soal.
- Status setiap temuan P1/P2, file/ID yang berubah, alasan, dan bukti verifikasi.
- Jumlah kasus jawaban benar/salah yang diuji, hasil aktual, dan lokasi skrip regresi.
- Hasil verifier, TypeScript, ESLint, build, Graphify, serta uji browser.
- Sumber rujukan untuk koreksi bahasa atau klaim level yang diverifikasi.
- Batas yang masih tersisa, khususnya penilaian tulisan bebas dan perbedaan situs/lokal.
- Status publikasi yang jujur: “terverifikasi lokal, belum dipublikasikan” bila belum ada deployment terotorisasi.

Jangan menyatakan perbaikan tuntas bila ada pelanggaran pada bagian yang dikerjakan, temuan prioritas yang belum ditangani, atau pemeriksaan wajib yang belum berhasil. Kegagalan di luar lingkup harus dicatat dengan bukti dan dampaknya; jangan menyebut seluruh proyek bersih. Jika ada hambatan eksternal, jelaskan apa yang sudah teruji dan apa yang belum, tanpa mengarang keberhasilan.

## Prompt singkat untuk agen pelaksana

> Baca dan jalankan `perintah-business-english-review-2026-09-15.md`. Mulai dengan membandingkan versi situs dan lokal; pertahankan perbaikan yang sudah ada. Perbaiki seluruh temuan yang masih berlaku dalam cakupan brief, uji jawaban benar maupun salah, dan verifikasi pengalaman browser. Jangan deploy. Serahkan perubahan lokal beserta laporan bukti pengujian dan keterbatasan yang tersisa.
