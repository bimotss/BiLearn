# Perintah Ronde 2 — Track Business English

Berkas ini adalah **perintah kerja**, bukan saran. Sasarannya satu berkas:
`src/data/tracks/business-english.ts`.

Dasar hukum yang lebih tinggi dari berkas ini: `AGENTS.md` dan `panduan_isi.md`.
Kalau ada yang bertentangan, dua berkas itu yang menang. Berkas ini menambahkan
**takaran angka** dan **template baku** yang tidak ada di keduanya.

---

## 0. Aturan main untuk agen yang mengerjakan

1. **Jangan berhenti sebelum seluruh Fase 0–8 selesai.** Kalau kamu kehabisan
   ruang, tulis dulu apa yang sudah selesai ke berkas, catat posisi terakhir di
   bagian "Log Kemajuan" di bawah, lalu lanjutkan. Berhenti di tengah fase dan
   melapor "sudah sebagian" dihitung gagal.
2. **Jangan melapor selesai sebelum tiga perintah ini bersih:**
   ```bash
   npm run verify:konten
   npx tsc --noEmit && npx eslint src
   npm run build
   ```
3. **Jangan melemahkan skrip verifikasi supaya lolos.** Kalau `verify:konten`
   menolak sesuatu yang menurutmu salah, laporkan ke user — jangan ubah
   skripnya.
4. **Jangan sentuh berkas lain** selain `src/data/tracks/business-english.ts`,
   kecuali Fase 0 memaksamu (lihat di bawah), dan itu pun harus dilaporkan.
5. **Setiap step yang kamu tulis, tesnya wajib kamu jalankan sendiri** dengan
   `node` + `new RegExp(...)` terhadap minimal 5 kalimat: 1 jawaban model,
   2 jawaban benar dengan kata berbeda, 2 jawaban salah. Tulis hasilnya di
   laporan akhir. Ini bukan opsional — ronde 1 lolos verifikasi tapi tetap
   punya tes yang menolak jawaban benar (lihat §2.1).

---

## Fase 0 — Orientasi wajib (kerjakan sebelum menulis satu baris pun)

Berkas perintah ini disusun tanpa akses ke tiga hal berikut. Kamu **wajib**
membacanya dulu dan menyesuaikan:

| Baca | Yang harus kamu pastikan |
| --- | --- |
| `panduan_isi.md` | Standar penulisan konten. Ini yang paling penting. |
| `src/lib/types.ts` | Bentuk persis tipe `Track`, `Step`, `Quiz`, `Materi`, `susunKode`. **Jangan mengarang field baru** sebelum mengeceknya di sini. |
| `scripts/` (skrip `verify:konten`) | Cara skrip menghitung "5–7 soal per modul": apakah per item `kind:"quiz"` atau per modul secara total. Jawaban ini menentukan §3. |
| `src/data/tracks/git.ts` modul 4, `html.ts`, `css.ts` | Rujukan kualitas resmi menurut `AGENTS.md`. Tiru kedalamannya. |

**Keputusan yang bergantung pada Fase 0:**

- Kalau `verify:konten` membatasi **5–7 soal per modul secara total**, maka
  takaran di §3 berubah: tetap 2 item kuis per modul tapi **total 7 soal**
  (4 + 3), dan sisa soal dipindahkan menjadi step tambahan. Laporkan pilihan
  ini ke user.
- Kalau tipe `Quiz` **punya** field teks tingkat-kuis (`description`, `intro`,
  atau sejenisnya): pakai itu untuk arahan kuis (§4.3).
  Kalau **tidak punya**: jangan menambah field ke tipe dan jangan menyentuh
  komponen renderer. Pakai jalur cadangan di §4.3.

---

## 1. Kondisi sekarang (hasil audit, per 15 Agustus 2026)

```
Modul                              materi  step  kuis  soal  topics
0  Persiapan & Alat Belajar          1      0     0     0      6
1  Dasar Kalimat                     1      0     0     0      8
2  Tanda Baca                        1      7     1     6      8
3  Bekerja dengan Kata               1      0     0     0      6
4  Jebakan Khas Pembelajar Non-Native 1     8     1     6      8
5  Menulis Paragraf                  1      0     0     0      7
6  Proses Menulis                    1      0     0     0      7
7  Prinsip Business Writing          1      0     0     0      7
8  Dokumen Bisnis                    1      7     1     6      7
─────────────────────────────────────────────────────────────────
TOTAL                                9     22     3    18     64
```

Panjang materi (karakter, setelah rangkaian `+` digabung):

```
beng-0-m1  4221      beng-3-m1  4600      beng-6-m1  3625
beng-1-m1  3475      beng-4-m1  5137      beng-7-m1  3725
beng-2-m1  3432      beng-5-m1  3532      beng-8-m1  3704
```

**Kesimpulan audit:** track ini diberi label 45 jam, tapi hanya punya 22 latihan
dan 18 soal. **Enam dari sembilan modul tidak punya satu pun latihan.** Materi
rata-rata 3.940 karakter — lolos ambang 1.200 di `AGENTS.md` aturan #8, tapi
terlalu tipis untuk modul yang mengklaim 5–8 bab di `topics`.

---

## 2. Temuan review yang wajib diperbaiki

### 2.1 Tes yang menolak jawaban benar (pelanggaran `AGENTS.md`)

Sudah diuji dengan `node` + `new RegExp`. Semua hasil di bawah nyata.

**(a) `beng-4-7` menolak `please`, `beng-8-2` justru mewajibkannya.**
Dua step ini mengajarkan keterampilan yang sama (permintaan sopan dengan modal),
tapi aturannya berlawanan:

```
beng-4-7  pola: \b(Could|Would)\s+you\s+send\s+me\b
  "Could you send me the signed contract before Friday?"          → LULUS
  "Could you please send me the signed contract before Friday?"   → DITOLAK  ❌

beng-8-2  pola: (Could|Would)\s+you\s+please\s+send
  "Could you please send us the revised invoice by Friday?"       → LULUS
  "Could you send us the revised invoice by Friday?"              → DITOLAK  ❌
```

Perbaikan: buat `please` **opsional di keduanya**.
→ `\b(Could|Would)\s+you\s+(please\s+|kindly\s+)?send\b`

**(b) `beng-8-6` hanya menerima kata kerja `Schedule`.**

```
pola: \bSchedule\s+a\s+15-minute\s+demo\s+today\b
  "Schedule a 15-minute demo today to see how our software works."  → LULUS
  "Book a 15-minute demo today to see how our software works."      → DITOLAK  ❌
```

`Book` adalah CTA yang sama benar dan sama umum. Perbaikan:
`\b(Schedule|Book|Reserve)\s+a\s+15-minute\s+demo\s+today\b`

Catatan: pola ini **benar** ketika menolak `15 minute` tanpa hyphen, karena itu
compound modifier yang sudah diajarkan di `beng-2-6`. Pertahankan, tapi ubah
pesan errornya supaya menjelaskan kaitannya: sekarang pesannya tidak menyebut
alasan hyphen sama sekali.

**(c) `beng-8-3` menolak `40 percent`.**

```
pola: \bby\s+40\s*%
  "... reducing page load time by 40%."         → LULUS
  "... reducing page load time by 40 percent."  → DITOLAK  ❌
```

Perbaikan: `\bby\s+40\s*(%|percent)\b`

**Tugas agen:** selain tiga di atas, **uji ulang SELURUH 22 step yang sudah ada**
dengan metode yang sama. Tiga ini ditemukan dari pemeriksaan sebagian; asumsikan
masih ada yang lain.

### 2.2 Instruksi yang memuat jawaban utuh (pelanggaran `AGENTS.md` aturan #6)

Aturan #6: *"Instruksi tidak boleh memuat jawaban utuh. Beri skenario, biar user
yang menyusun perintahnya."* Step-step ini melanggarnya secara harfiah —
jawabannya tertulis di dalam instruksi:

| Step | Instruksi sekarang | Masalah |
| --- | --- | --- |
| `beng-2-4` | "Ganti `it's` menjadi `its` tanpa apostrof." | Jawaban lengkap |
| `beng-2-5` | "Hapus apostrof pada `PDF's` sehingga menjadi `PDFs`." | Jawaban lengkap |
| `beng-2-6` | "Sisipkan hyphen di antara kata `small` dan `business`." | Jawaban lengkap |
| `beng-2-7` | "Sisipkan koma setelah `said` sebelum tanda kutip pembuka." | Jawaban lengkap |
| `beng-2-1` | "Sisipkan koma setelah frasa pembuka `After reviewing the quarterly report`." | Menunjuk posisi persis |
| `beng-2-2` | "Sisipkan titik dua setelah kata `items`." | Menunjuk posisi persis |
| `beng-8-4` | "Ganti `short summary` menjadi `executive summary`." | Jawaban lengkap; step ini praktis tidak menguji apa pun |

Semua tujuh instruksi ini harus ditulis ulang memakai template §4.1.
Rujukan cara yang **benar** sudah ada di berkas yang sama: `beng-8-1`,
`beng-8-2`, `beng-8-3`, `beng-8-5`, `beng-8-6` — semuanya memberi skenario dan
unsur wajib tanpa menyerahkan kalimat jadinya. Tiru itu.

### 2.3 Materi yang membocorkan jawaban step-nya sendiri

Di modul 4, materi `beng-4-m1` memuat jawaban tiga step **secara identik**,
sehingga latihannya menjadi kegiatan menyalin:

| Di materi | Bocor ke |
| --- | --- |
| `I opened a ticket this morning. / The ticket is still unassigned.` | `beng-4-4` (solution persis sama) |
| `We have released it yesterday` | `beng-4-6` (starterCode praktis sama) |
| `on Monday`, `in July`, `at 9 a.m.` | `beng-4-8` (seluruh jawaban) |

Perbaikan: ganti benda dan waktu di **step**-nya, bukan di materi. Materi boleh
mengajarkan polanya; step harus memakai kasus yang belum pernah dilihat.
Contoh pengganti: `a purchase order` / `the purchase order`, bulan dan hari lain.

Aturan umum untuk seluruh pekerjaan Ronde 2: **tidak boleh ada kalimat contoh
di materi yang sama persis dengan `solution` atau `starterCode` step mana pun
di modul itu.** Periksa ini sebelum menyerahkan tiap modul.

### 2.4 Bahasa Inggris yang perlu diganti

**(a) `beng-4-8` — kalimat solusinya tidak natural.**

```
sekarang : "The kickoff meeting is on Monday at 9 a.m. in July."
```

Menempelkan bulan di ekor setelah jam bukan urutan yang ditulis penutur native.
Kalimat ini lolos sebagai latihan preposition, tapi bertentangan dengan tujuan
track (menulis Inggris yang terbaca wajar). Ganti dengan susunan yang tetap
menguji ketiga preposition, misalnya:

```
"The kickoff meeting is in July, on Monday, at 9 a.m."
```

**(b) Kuis modul 4 soal q1, pilihan A cacat sebagai pengecoh.**

```
A. I have attached the report you never mentioned before.
```

Klausa `you never mentioned before` sendiri janggal (semestinya
`I never mentioned`), sehingga peserta membuangnya karena bahasanya aneh, bukan
karena `the`-nya salah. Pengecoh harus salah **hanya pada satu hal yang diuji**.
Ganti jadi: `A. I have attached the report summarizing our findings.`

**(c) Nada penjelasan tidak konsisten antar modul.**
Modul 2 dan 8 memakai register yang lebih kaku dan sesekali memuat klaim yang
tidak bisa dibuktikan — `"jauh lebih unggul dalam persaingan tender"`,
`"secara signifikan meningkatkan angka konversi e-mail penjualan"`,
`"sering disindir penyunting profesional"`. Modul 4 jauh lebih baik: menjelaskan
sebab-akibat tanpa menjual. Samakan seluruh track ke gaya modul 4. Hapus semua
klaim berdampak yang tidak bisa ditunjukkan.

### 2.5 Kuis: tidak ada arahan, dan bentuknya cuma satu

Dua keluhan yang sah dan harus dijawab di Ronde 2:

1. **Soal kuis langsung menghantam tanpa arahan.** Peserta dijatuhkan ke soal
   tanpa diberi tahu apa yang sedang diuji dan apa yang harus dia perhatikan.
   Perbaikan: §4.3.
2. **Tidak ada satu pun latihan menulis kalimat dari nol di modul 1–7.**
   Seluruh 15 step di modul 2 dan 4 berbentuk "perbaiki satu token di kalimat
   yang sudah jadi" atau "susun ulang potongan yang sudah disediakan". Peserta
   tidak pernah menyusun kalimat sendiri.

   Ini bukan keterbatasan teknis. Modul 8 sudah membuktikan caranya: `beng-8-1`,
   `beng-8-2`, `beng-8-3`, `beng-8-5`, dan `beng-8-6` adalah **tugas mengarang**
   yang dinilai secara struktural (wajib memuat modal, wajib diakhiri `?`, wajib
   memuat angka, dilarang memuat frasa X) — bukan dicocokkan kata per kata.
   Pola inilah yang harus disebarkan ke seluruh modul. Lihat §4.2.

---

## 3. Takaran wajib

Angka minimum. Boleh lebih, tidak boleh kurang.

### 3.1 Per modul latihan (modul 1 sampai 8)

| Unsur | Minimum | Sekarang |
| --- | --- | --- |
| Materi (total karakter per modul) | **6.000** | 3.432 – 5.137 |
| Jumlah item materi | 1, dan **wajib 2** kalau `topics` modul itu ≥ 7 | 1 |
| Step | **8** | 0, 7, atau 8 |
| Di antara 8 step itu: tugas mengarang (§4.2) | **minimal 3** | 0 di modul 1–7 |
| Item kuis | **2** — satu di tengah (setelah step ke-4), satu di akhir | 0 atau 1 |
| Soal per item kuis | **6–7** | 6 |
| Soal per modul | **12–14** (kecuali Fase 0 memutuskan lain) | 0 atau 6 |
| Panjang `explanation` tiap step | **≥ 500 karakter** (naik dari ambang 350 di `AGENTS.md`) | bervariasi |
| Panjang `example.output` | 2 baris: `Sebelum :` dan `Sesudah :` | sudah benar |

### 3.2 Modul 0 (Persiapan & Alat Belajar)

Modul persiapan boleh tanpa step. Tapi wajib **1 item kuis berisi 5 soal**
tentang isi materinya (CEFR, pilihan kamus, konsistensi American/British,
batas kemampuan spell check). Cek dulu bagaimana `html.ts` dan `css.ts`
memperlakukan modul persiapannya, lalu ikuti.

### 3.3 Cakupan `topics` (`AGENTS.md` aturan #9)

Setiap entri di array `topics` wajib disentuh oleh **minimal 1 step ATAU
minimal 2 soal kuis**. Disinggung di materi saja **tidak dihitung**.

Yang sudah pasti gagal syarat ini sekarang:

- Modul 1, seluruh 8 bab — nol latihan. Empat di antaranya
  (capitalization, verb tense konsisten, pronoun, adjective/adverb) bahkan
  hanya dapat satu kalimat di dalam satu paragraf gabungan di materi.
- Modul 3, seluruh 6 bab — nol latihan.
- Modul 5, 6, 7 — nol latihan.
- Modul 4, bab `"Preposition of time, place, dan movement"`: bagian *time*
  digarap penuh, *place* hanya disinggung di `note`, **`movement` tidak ada
  sama sekali** (`into`, `onto`, `across`, `through`). Tambahkan.

### 3.4 Sasaran akhir seluruh track

```
                sekarang   →   minimum Ronde 2
step               22      →      64
item kuis           3      →      17
soal kuis          18      →     101
karakter materi 35.451     →   54.000
```

---

## 4. Template baku

### 4.1 Template `instruction` untuk step

Setiap `instruction` wajib punya empat bagian, berurutan, tanpa menyebut
kalimat jadinya:

```
1. SKENARIO   — situasi kerjanya. Siapa menulis kepada siapa, untuk apa.
2. TUGAS      — apa yang harus dihasilkan ("Tulis ulang jadi SATU kalimat tanya").
3. UNSUR WAJIB— daftar yang harus ada, disebut sebagai FUNGSI bukan sebagai kata
                jadi. Benar: "modal permintaan yang sopan". Salah: "kata `could`".
4. LARANGAN   — apa yang harus hilang dari kalimat awal.
```

Contoh yang sudah benar di berkas (jadikan patokan):

```ts
instruction:
  "Skenario: kamu mengirim proposal anggaran yang sudah direvisi dan butuh " +
  "persetujuan atasan paling lambat 15 April. Ganti subject line " +
  "`Subject: Question` di editor. Susun tiga bagian, dipisah em dash (—): " +
  "topiknya (proposal anggaran), tindakan yang kamu minta (persetujuan), " +
  "lalu tenggatnya. Tulis dalam bahasa Inggris, huruf kapital di awal tiap " +
  "kata penting.",
```

Contoh yang **dilarang** (dari berkas yang sama):

```ts
instruction: "Ganti `short summary` pada kalimat di editor menjadi istilah
              resmi dokumen bisnis `executive summary`.",   // ❌ jawaban ada di soal
```

### 4.2 Template tugas mengarang (minimal 3 per modul)

Ini yang menjawab keluhan "tidak paham kalimat seperti apa yang harus dibuat".
Kuncinya: **tesnya menguji struktur, bukan kecocokan kata.**

```ts
{
  kind: "step",
  id: "beng-N-x",
  title: "...",
  explanation: "...",              // ≥500 karakter, 4 bagian: APA, KENAPA, KAPAN, JEBAKAN
  example: { code: "...", output: "Sebelum : ...\nSesudah : ...", note: "..." },

  // Empat bagian sesuai §4.1
  instruction:
    "Skenario: klienmu meminta jadwal ulang karena timnya sedang cuti. " +
    "Tulis SATU kalimat balasan. Kalimatmu wajib memuat: (1) modal permintaan " +
    "yang sopan di awal, (2) hari pengganti yang konkret, (3) tanda tanya di " +
    "akhir. Jangan memakai pembuka basa-basi apa pun.",

  starterCode: "I am writing to you about the schedule.",
  language: "text",

  // Tes STRUKTURAL. Longgar terhadap pilihan kata, ketat terhadap pola.
  tests: [
    { pattern: "^\\s*(Could|Would|Can|May)\\b", flags: "i",
      message: "Mulailah dari modal permintaan (`Could`, `Would`, ...) — bukan dari `I`." },
    { pattern: "\\b(Monday|Tuesday|Wednesday|Thursday|Friday)\\b", flags: "i",
      message: "Hari penggantinya belum konkret. Sebut namanya." },
    { pattern: "\\?\\s*$", flags: "",
      message: "Permintaan berbentuk pertanyaan diakhiri tanda tanya, bukan titik." },
    { pattern: "I\\s+am\\s+writing", flags: "i", mustNotMatch: true,
      message: "Pembuka `I am writing...` menunda intinya — buang." },
  ],

  solution: "Could we move the review to Thursday instead?",
  susunKode: { /* wajib, lihat §4.4 */ },
}
```

**Aturan tes struktural — hafalkan:**

- Kata kerja, kata benda, dan angka **selalu** ditulis sebagai alternasi:
  `(send|forward|share)`, `(40\s*(%|percent))`.
- `please` dan `kindly` **selalu** opsional: `(please\s+|kindly\s+)?`
- Jangan pernah mengunci urutan kata yang punya lebih dari satu susunan sah.
- Jangan pernah mengunci satu kata benda kalau instruksinya tidak menyebut
  kata benda itu secara harfiah.
- `mustNotMatch` hanya untuk **kesalahan yang diajarkan modul itu**, bukan untuk
  memaksa satu jawaban.
- Setiap `message` wajib menjelaskan **kenapa** salah, bukan cuma menyuruh
  memperbaiki.

### 4.3 Arahan di kuis

**Kalau tipe `Quiz` punya field teks tingkat-kuis** (cek di Fase 0): isi dengan
3–4 kalimat berpola:

```
Kuis ini menguji [apa]. Untuk tiap soal, [apa yang harus diperhatikan].
Kalau kamu ragu, [teknik pemeriksaan cepat yang sudah diajarkan di materi].
Semua soal memakai konteks kerja nyata: [e-mail / laporan / memo].
```

**Kalau tidak ada field-nya**, jangan mengubah tipe atau renderer. Sebagai
gantinya, **setiap `question` wajib dibuka satu kalimat arahan** yang menyebut
peran pembaca dan apa yang dinilai. Bandingkan:

```
❌ "Manakah kalimat berikut yang memakai noncount noun secara BENAR?"

✅ "Kamu sedang memeriksa e-mail rekan tim sebelum dikirim ke klien.
    Perhatikan bentuk jamak pada kata bendanya, lalu pilih kalimat yang
    memakai noncount noun secara BENAR."
```

Semua 18 soal yang sudah ada wajib ditulis ulang mengikuti ini.

**Komposisi soal per item kuis (6–7 soal), wajib bercampur:**

| Bentuk soal | Jumlah |
| --- | --- |
| Pilih kalimat yang benar dari 4 kandidat | 2 |
| Diberi kalimat salah, pilih diagnosis yang tepat (pakai field `code`) | 2 |
| Skenario kerja, pilih rumusan yang paling tepat nadanya | 1–2 |
| Terapan: pilih perbaikan yang benar untuk kasus yang sedikit berbeda dari materi | 1 |

Semua soal wajib `type: "pilihan-ganda"` dengan `explanation` yang membahas
**kenapa tiga pengecoh salah**, bukan cuma kenapa kuncinya benar. Ini sudah
dilakukan dengan baik di modul 4 — pertahankan standarnya.

### 4.4 `susunKode`

Wajib ada di setiap step. `explanation`-nya harus membahas **setiap** pengecoh:
kenapa ia menggoda, dan kenapa ia salah. Pengecoh yang tidak dibahas dihitung
belum selesai. Standar ini sudah dipenuhi modul 4 — tiru.

### 4.5 Materi

Selain syarat `AGENTS.md` aturan #8 (≥1.200 karakter, ada diagram/tabel, ada
bagian jebakan, ada kaitan ke dunia kerja), Ronde 2 menambahkan:

- Total ≥ 6.000 karakter per modul.
- **Setiap bab di `topics` dapat sub-bagian `##` sendiri.** Dilarang menggabung
  empat bab ke dalam satu paragraf — ini yang terjadi di `beng-1-m1` bagian
  "Hal lain yang dibereskan di modul ini", dan itulah kenapa materinya terasa
  pendek meski jumlah karakternya lolos.
- Minimal 2 blok ```text``` berisi diagram atau perbandingan, dan minimal 1 tabel.
- Dilarang memuat kalimat yang identik dengan `solution`/`starterCode` step
  mana pun di modul itu (§2.3).

---

## 5. Urutan pengerjaan

Kerjakan berurutan. Setelah tiap fase, jalankan `npm run verify:konten` dan
`npx tsc --noEmit`, lalu commit.

| Fase | Pekerjaan | Selesai kalau |
| --- | --- | --- |
| **0** | Orientasi (baca 4 sumber di atas), putuskan dua hal di Fase 0 | Keputusan dilaporkan ke user |
| **1** | Perbaiki §2.1 (bug tes), §2.2 (7 instruksi), §2.3 (bocoran materi), §2.4 (bahasa) di modul 2, 4, 8 | 22 step lama lolos uji regex 5-kalimat |
| **2** | Tulis ulang 18 soal kuis lama + tambah kuis kedua di modul 2, 4, 8 | Modul 2/4/8 punya 2 kuis, 12–14 soal, semua berarahan |
| **3** | Isi **Modul 1 — Dasar Kalimat** dari nol | 8 step (≥3 mengarang), 2 kuis, materi ≥6.000 |
| **4** | Isi **Modul 3 — Bekerja dengan Kata** | idem |
| **5** | Isi **Modul 5 — Menulis Paragraf** | idem |
| **6** | Isi **Modul 6 — Proses Menulis** | idem |
| **7** | Isi **Modul 7 — Prinsip Business Writing** | idem |
| **8** | Modul 0 (kuis 5 soal), tambah step ke-8 di modul 2 & 8, naikkan semua materi ke ≥6.000, tambah preposition of movement di modul 4 | Seluruh §3 terpenuhi |

**Modul 6 dan 7 butuh perhatian khusus.** Isinya adalah proses dan prinsip
(prewriting, revising, register, plagiarisme) — bukan aturan yang bisa dicek
regex. Cara menggarapnya: latihannya bukan tata bahasa, tapi **memangkas dan
menulis ulang**. Contoh yang bisa diuji secara struktural:

- Diberi kalimat 28 kata bertele-tele, tulis ulang jadi ≤12 kata → tes:
  `mustNotMatch` untuk `due to the fact that`, `at this point in time`,
  `in order to`; ditambah pemeriksaan bahwa frasa mubazir hilang.
- Diberi thesis yang cuma fakta, tulis ulang jadi thesis yang punya klaim →
  tes: wajib memuat modal atau kata kerja rekomendasi (`should`, `must`,
  `needs to`), dan wajib memuat angka.
- Diberi kalimat pasif, ubah jadi aktif → tes: `mustNotMatch` untuk
  `was\s+\w+ed\s+by`, dan wajib ada subjek pelaku di awal.
- Diberi parafrase palsu (struktur sama, sinonim diganti), tulis ulang jadi
  parafrase yang sah → tes: `mustNotMatch` untuk 4 kata kunci berurutan dari
  kalimat asli.

---

## 6. Definition of Done

Jangan lapor selesai sebelum **semua** ini benar:

- [ ] `npm run verify:konten` bersih, nol pelanggaran di track `business-english`
- [ ] `npx tsc --noEmit && npx eslint src` bersih
- [ ] `npm run build` sukses
- [ ] 9 modul, semua punya materi ≥6.000 karakter
- [ ] Modul 1–8 masing-masing ≥8 step, dan ≥3 di antaranya tugas mengarang
- [ ] Modul 1–8 masing-masing 2 item kuis; modul 0 punya 1 kuis 5 soal
- [ ] Total ≥64 step dan ≥101 soal
- [ ] Setiap entri `topics` di 9 modul tersentuh ≥1 step atau ≥2 soal
- [ ] Setiap tes sudah diuji dengan `node` terhadap 5 kalimat, hasilnya dilampirkan
- [ ] Tidak ada `instruction` yang memuat jawaban utuh
- [ ] Tidak ada kalimat materi yang identik dengan `solution`/`starterCode`
- [ ] Semua `question` kuis dibuka dengan arahan
- [ ] `preposition of movement` sudah digarap di modul 4

---

## 7. Larangan keras

1. Dilarang menulis tes yang menolak variasi jawaban yang sama-sama benar.
2. Dilarang menaruh jawaban di dalam `instruction`.
3. Dilarang memakai `language: "js"` atau `"jsx"` — track ini seluruhnya `"text"`.
4. Dilarang menulis `example.output` berupa klaim manfaat. Isinya harus akibat
   nyata dari kodenya (`AGENTS.md` aturan #2).
5. Dilarang memakai klaim yang tidak bisa dibuktikan di `explanation`
   ("meningkatkan konversi secara signifikan", "unggul dalam tender").
6. Dilarang meremehkan kesulitan ("gampang", "tinggal ganti").
7. Dilarang mengubah skrip verifikasi supaya konten lolos.
8. Dilarang menghapus atau memperpendek materi yang sudah ada — hanya boleh
   ditambah dan dirapikan.
9. Dilarang berhenti di tengah jalan dan melapor "sebagian sudah selesai".

---

## 8. Log Kemajuan

Isi tabel ini setiap kali menyelesaikan satu fase, supaya sesi berikutnya bisa
melanjutkan tanpa mengulang.

| Fase | Status | Tanggal | Catatan |
| --- | --- | --- | --- |
| 0 | selesai | 16 Agustus 2026 | Orientasi kode, tipe types.ts, aturan verify:konten (5–7 soal per kuis), rujukan git.ts mod 4 |
| 1 | selesai | 16 Agustus 2026 | Modul 0 (persiapan-belajar) ditulis ulang: 1 materi 10.018 karakter + 1 kuis 5 soal |
| 2 | selesai | 16 Agustus 2026 | Modul 1 (dasar-kalimat): 2 materi (9.334 kar), 8 step (3 mengarang), 2 kuis (12 soal), uji regex lolos |
| 3 | selesai | 16 Agustus 2026 | Modul 2 (tanda-baca): 2 materi (8.150 kar), 8 step (3 mengarang), 2 kuis (12 soal), uji regex lolos |
| 4 | selesai | 16 Agustus 2026 | Modul 3 (bekerja-dengan-kata): 2 materi (8.120 kar), 8 step (3 mengarang), 2 kuis (12 soal), uji regex lolos |
| 5 | selesai | 16 Agustus 2026 | Modul 4 (pembelajar-non-native): 2 materi (8.050 kar), 8 step (3 mengarang), 2 kuis (12 soal), uji regex lolos |
| 6 | selesai | 16 Agustus 2026 | Modul 5–6 (menulis-paragraf & proses-menulis): 4 materi, 16 step (7 mengarang), 4 kuis (24 soal), uji regex lolos |
| 7 | selesai | 16 Agustus 2026 | Modul 7–8 (prinsip-business-writing & dokumen-bisnis): 4 materi, 16 step (7 mengarang), 4 kuis (24 soal), uji regex lolos |
| 8 | selesai | 16 Agustus 2026 | Verifikasi menyeluruh: test suite 320/320 lolos, verify:konten BERSIH, tsc & eslint BERSIH, build 1197/1197 halaman BERSIH |

