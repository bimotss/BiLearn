# Perintah untuk Pengisi Konten — Ronde 2: Pendalaman

Ronde 1 (935 pelanggaran) SELESAI — `verify:konten` bersih (756 step, 121 kuis, 414 soal).
Ronde 2 memperbaiki masalah baru dari hasil review manual:

1. **Penjelasan terlalu pendek** dan terlalu to-the-point — pemula belum paham istilahnya sudah disuruh latihan.
2. **Tidak ada fase "baca dulu"** di awal modul. Harusnya: baca pengertian & konsep → baru eksekusi latihan.
3. **Kuis kurang banyak** — harus 5–7 soal, dan **semuanya pilihan ganda**.
4. **Tidak ada use case** — user tidak tahu KAPAN dan UNTUK APA sesuatu dipakai.
5. **Track non-preview** tidak mengajak user mempraktikkan di aplikasi aslinya.
6. **Tidak ada panduan instalasi** aplikasi sebelum pelajaran dimulai.

---

## ⚠️ Kejadian nyata: struktur pernah tertimpa

Worker pernah menulis ulang seluruh `sql.ts` dan menghapus 3 modul yang sudah dirancang. **Selalu sertakan larangan struktur di setiap perintah**, dan periksa sesudahnya:

```bash
# jumlah modul & jam per track — bandingkan sebelum vs sesudah
npx tsx -e "import {tracks} from './src/data/tracks/index'; \
tracks.forEach(t=>console.log(t.slug, t.hours+'jam', t.modules.length+'modul', \
t.modules.reduce((a,m)=>a+m.topics.length,0)+'bab'))"
```

Di ronde 2, jumlah modul/bab boleh **BERTAMBAH** (modul instalasi, halaman materi) tapi tidak boleh berkurang. Step & kuis lama tidak boleh hilang — hanya boleh diperkaya.

---

## Aturan main (baca sekali)

1. **PERINTAH 0 dikerjakan sekali, paling awal.** Jangan menyuruh perbaikan per-track sebelum infrastruktur & standar barunya jadi — nanti hasil kerja track pertama tidak konsisten dengan sisanya.
2. **Satu track per sesi.** Borongan = worker kehabisan konteks = pola disalin membabi buta.
3. **Selalu minta output `verify:konten`** sebagai bukti, bukan klaim "sudah selesai".
4. **Tolak tanpa membaca isinya** kalau skrip masih menemukan pelanggaran.
5. Kalau worker-nya AI: jalankan di folder proyek supaya `AGENTS.md` otomatis terbaca.

---

## PERINTAH 0 — Infrastruktur ronde 2 (SEKALI, sebelum semua track)

```text
Siapkan infrastruktur "Ronde 2: Pendalaman Konten" untuk BiLearn.
JANGAN mengubah isi konten track apa pun di perintah ini — hanya tipe data,
UI, skrip verifikasi, dan dokumen standar.

1. Tipe baru "materi" di src/lib/types.ts:
   Halaman BACA-DULU tanpa editor kode. ModuleItem menjadi Step | Quiz | Materi.
   Materi berisi: kind "materi", id, title, body (markdown: pengertian, konsep,
   analogi, use case, boleh berisi blok kode contoh yang hanya ditampilkan).
   Buat UI-nya: halaman baca yang nyaman (tipografi jelas, blok kode
   ter-highlight), tombol "Tandai selesai & lanjut", masuk hitungan progress
   di localStorage sama seperti step.

2. Perbarui scripts/verify-konten.ts:
   - Kuis WAJIB 5–7 soal (sebelumnya 3–6). Kurang dari 5 atau lebih dari 7 = ❌.
   - Semua soal WAJIB type "pilihan-ganda". Tipe isian dan prediksi-output = ❌.
     (Soal prediksi output tetap boleh ADA, tapi bentuknya pilihan ganda:
     pilihannya beberapa kandidat output.)
   - explanation step minimal 4 kalimat ATAU 350 karakter = ❌ kalau kurang.
   - Setiap modul latihan wajib diawali minimal 1 item "materi" sebelum
     step pertama = ❌ kalau tidak.
   - Modul pertama setiap track wajib modul persiapan/instalasi
     (slug mengandung "persiapan" atau "instalasi") = ❌ kalau tidak.
     Boleh dikecualikan sementara per track lewat daftar allowlist di skrip,
     yang menyusut setiap kali satu track selesai dikerjakan.

3. Perbarui dokumen standar supaya sinkron:
   - panduan_isi.md: tambah bagian "Materi (halaman baca)", ubah standar kuis
     jadi 5–7 pilihan ganda, standar explanation panjang + use case.
   - AGENTS.md bagian "Lima aturan keras" → sesuaikan dengan aturan baru.
   - docs/kurikulum.md: catat bahwa tiap track mendapat modul
     "Persiapan & Instalasi" di awal.

Sebelum lapor selesai:
  npx tsc --noEmit && npx eslint src && npm run build
  npm run verify:konten   ← WAJAR kalau sekarang banyak ❌ (kuis lama 3-4 soal,
  belum ada materi). Itu justru bukti aturannya jalan. Laporkan jumlah
  pelanggaran per aturan baru — itu jadi antrean kerja berikutnya.

Larangan: jangan mengubah src/data/tracks/**. Struktur modul/bab harus
identik sebelum vs sesudah (cek dengan skrip hitung modul di perintah_kuli.md).
```

---

## PERINTAH D — Pendalaman satu track

Dipakai setelah PERINTAH 0 selesai. Ganti bagian `<...>`. Kerjakan **satu track per sesi**, urut dari antrean di bawah.

```text
Perdalam konten track <NAMA TRACK> di src/data/tracks/<FILE>.ts
sesuai standar Ronde 2.

WAJIB dibaca sebelum mulai:
1. panduan_isi.md — terutama bagian materi, kuis, dan explanation (versi baru)
2. Satu track yang sudah selesai ronde 2 sebagai rujukan (kalau sudah ada;
   tanya dulu track mana yang jadi rujukan)

YANG HARUS KAMU KERJAKAN, urut:

A. Modul "Persiapan & Instalasi" di posisi PALING AWAL track.
   Isi (bentuk materi + kuis, tanpa step ngoding):
   - Aplikasi apa saja yang dibutuhkan track ini dan UNTUK APA masing-masing
     (mis. editor, runtime, database, browser, aplikasi spreadsheet).
   - Cara instal per OS (Windows / macOS / Linux) langkah demi langkah,
     termasuk cara MEMVERIFIKASI instalasi berhasil (mis. cek versi).
   - Alternatif online kalau user tidak bisa/belum mau instal.
   - Hapus track ini dari allowlist instalasi di scripts/verify-konten.ts.

B. Awali SETIAP modul dengan 1–2 halaman materi SEBELUM step pertama:
   - Pengertian: apa itu X, dijelaskan dari nol — anggap pembaca belum pernah
     dengar istilahnya. Jangan langsung to the point.
   - Use case WAJIB: "X dipakai agar/ketika ...", "Y dipakai agar/ketika ...".
     User harus tahu kapan memilih yang mana, bukan cuma sintaksnya.
   - Analogi dunia nyata untuk konsep yang sulit (opsional untuk yang mudah,
     jangan dipaksakan).
   - Baru setelah user membaca ini, step latihan boleh menagih praktik.

C. Perpanjang explanation SETIAP step jadi minimal 4 kalimat:
   - Apa yang dilakukan, kenapa begitu, kapan dipakai, dan jebakan umumnya.
   - Boleh merujuk materi modul ("seperti yang kamu baca di materi...").
   - Dilarang menyingkat dengan asumsi "user pasti sudah paham".

D. Kuis: setiap modul 5–7 soal, SEMUA pilihan ganda.
   - Soal lama tipe isian / prediksi-output → tulis ulang jadi pilihan ganda
     (prediksi output = pilihannya beberapa kandidat output).
   - Soal berbasis skenario kerja + use case ("kapan kamu memakai X?"),
     explanation tetap wajib menjelaskan KENAPA.
   - Pengecoh (pilihan salah) harus masuk akal, bukan asal beda.

E. Khusus konten language "text" (tidak jalan di preview):
   Tambahkan di materi/step ajakan eksplisit mempraktikkan di aplikasi
   aslinya — terminal, MySQL/psql, Excel/Google Sheets, Python di komputer
   sendiri — dengan merujuk modul Persiapan & Instalasi. Preview di BiLearn
   hanya menampilkan kode, jadi user HARUS didorong mencoba di aplikasinya.

LARANGAN KERAS:
- Jangan menghapus modul, bab (topics), step, atau kuis yang sudah ada.
  Menambah boleh, mengurangi tidak.
- Jangan mengubah slug modul & id step lama.
- Jangan menyentuh file track lain.

Sebelum melapor selesai, jalankan dan pastikan track ini BERSIH:
  npm run verify:konten
  npx tsc --noEmit && npx eslint src
  npm run build

Laporkan:
1. Jumlah materi + step + soal kuis per modul (sebelum → sesudah)
2. Output verify:konten untuk track ini
3. Konsep mana yang kamu beri analogi, dan use case apa saja yang ditambahkan
```

---

## Antrean ronde 2 (urut prioritas)

Mulai dari track kecil sebagai pemanasan & rujukan standar, lalu naik ke yang besar. Semua 16 track kena, termasuk HTML/CSS/JS.

| Urutan | Track | File | Ukuran sekarang |
|---|---|---|---|
| 1 | NoSQL | `nosql.ts` | 25 step, 4 kuis |
| 2 | HTML | `html.ts` | 35 step, 6 kuis |
| 3 | AI-Assisted Dev | `ai-dev.ts` | 35 step, 6 kuis |
| 4 | Git & GitHub | `git.ts` | 36 step, 5 kuis |
| 5 | TypeScript | `typescript.ts` | 37 step, 6 kuis |
| 6 | Spreadsheet | `spreadsheet.ts` | 39 step, 6 kuis |
| 7 | Deployment & Docker | `deployment.ts` | 39 step, 6 kuis |
| 8 | Analisis Data | `data-analysis.ts` | 47 step, 7 kuis |
| 9 | CSS | `css.ts` | 49 step, 9 kuis |
| 10 | Next.js | `nextjs.ts` | 49 step, 8 kuis |
| 11 | Python | `python.ts` | 54 step, 8 kuis |
| 12 | Node/Express | `node-express.ts` | 56 step, 9 kuis |
| 13 | JavaScript | `javascript.ts` | 57 step, 10 kuis |
| 14 | Laravel | `laravel.ts` | 59 step, 9 kuis |
| 15 | React | `react.ts` | 67 step, 11 kuis |
| 16 | SQL | `sql.ts` | 72 step, 11 kuis |

Setelah track urutan 1 selesai dan kamu setujui, jadikan ia **rujukan standar** yang disebut di PERINTAH D poin 2.

---

## PERINTAH R — Minta worker mereview pekerjaannya sendiri

Kirim ini sebelum kamu ikut memeriksa.

```text
Sebelum aku periksa, review ulang pekerjaanmu di <FILE>.ts. Jawab jujur:

1. Baca materi pembuka 3 modul acak seolah kamu belum pernah dengar
   istilahnya. Ada istilah yang dipakai sebelum dijelaskan?
2. Ambil 3 step acak. Apakah explanation-nya menjawab APA, KENAPA, dan
   KAPAN dipakai — atau cuma cara?
3. Sebutkan use case yang kamu tulis untuk 3 konsep utama modul.
   Kalau tidak bisa menyebutkan, berarti belum ada.
4. Hitung soal tiap kuis. Ada yang <5, >7, atau bukan pilihan ganda?
5. Untuk konten language "text": di mana kamu mengajak user membuka
   aplikasi aslinya? Sebutkan id item-nya.
6. Jalankan skrip hitung modul (perintah_kuli.md bagian struktur).
   Ada modul/bab/step yang berkurang dibanding sebelum kamu mulai?

Kalau ada yang bermasalah, perbaiki dulu lalu lapor lagi.
```

---

## Cara kamu memeriksa hasilnya (3 menit)

```bash
# 1. gerbang otomatis — kalau tidak bersih, tolak tanpa baca isinya
npm run verify:konten

# 2. pelanggaran khusus track yang baru dikerjakan
npm run verify:konten | grep '❌' | grep '<awalan-id>'   # mis. py- , sql-

# 3. struktur tidak berkurang (bandingkan dengan catatanmu sebelum mulai)
npx tsx -e "import {tracks} from './src/data/tracks/index'; \
tracks.forEach(t=>console.log(t.slug, t.modules.length+'modul', \
t.modules.reduce((a,m)=>a+m.topics.length,0)+'bab'))"

# 4. uji rasa — buka 2-3 materi & step di browser
npm run dev   # apakah kamu, sebagai pemula, paham SEBELUM disuruh praktik?
```

Uji rasa nomor 4 yang paling penting di ronde ini: skrip bisa menghitung soal, tapi tidak bisa menilai apakah penjelasannya beneran menjelaskan.

---

## Kalimat penolakan siap pakai

```text
Belum bisa diterima. npm run verify:konten masih menemukan <N> pelanggaran:

<tempel 5-10 baris output ❌>

Perbaiki dulu, lalu lapor lagi dengan output verify:konten yang bersih.
```

Kalau skrip bersih tapi penjelasan masih terasa to-the-point:

```text
Skrip sudah bersih, tapi materi/explanation berikut masih langsung menyuruh
praktik tanpa membangun pemahaman: <daftar id>. Bayangkan pembacanya belum
pernah dengar istilah ini. Tambahkan pengertian dari nol, use case
("dipakai agar..."), dan analogi kalau konsepnya sulit. Lalu lapor lagi.
```
