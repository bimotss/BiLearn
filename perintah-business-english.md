# Perintah untuk Pengisi Konten — Track Business English

Kerangka track sudah berdiri: `src/data/tracks/business-english.ts`, 9 modul, masing-masing sudah punya `topics` dan 1 halaman `materi`. **Yang kosong hanya `items` bagian step dan kuis.**

Dokumen ini menyediakan briefing siap tempel untuk worker (manusia atau AI). Satu modul per sesi — jangan diborong.

---

## ⚠️ Kenapa track ini butuh perintah sendiri

Semua track lain menilai jawaban dengan regex terhadap **kode**. Kode punya bentuk terbatas: `=A1 + B1` variasinya bisa dihitung.

Track ini menilai **kalimat bahasa Inggris**, yang variasi benarnya tak terhingga. Kalau worker menulis step "Tulis e-mail yang meminta perpanjangan tenggat", tidak ada regex yang bisa menilainya tanpa menolak ratusan jawaban yang sama-sama benar — dan itu persis yang dilarang `AGENTS.md`.

**Aturan tunggal yang menurunkan semua aturan lain di dokumen ini: setiap step harus punya jawaban yang bentuknya terbatas dan bisa diperiksa mesin.** Kalau kamu tidak bisa menuliskan daftar semua jawaban benar, step itu tidak boleh ditulis — pindahkan ke kuis.

---

## Empat bentuk step yang DIIZINKAN

### A. Sisip / perbaiki tanda baca

Kalimatnya sudah disediakan di `starterCode`. User hanya menambahkan atau mengganti tanda baca. Jawabannya deterministik.

### B. Perbaiki satu unsur gramatikal

Ganti satu kata: article (`a`/`an`/`the`), bentuk verb, preposition, atau pasangan yang tertukar (`their`/`there`). Kalimat lainnya tidak berubah.

> **Awas:** `solution` tetap harus berupa **kalimat utuh**, bukan satu kata. Skrip menolak step yang `solution`-nya ≤14 karakter alfanumerik ("step dengan jawaban satu kata — pindahkan ke kuis").

### C. Tulis ulang dengan pola yang ditentukan

Contoh: "ubah kalimat pasif ini jadi aktif dengan subjek `the vendor`", "gabungkan dua kalimat ini memakai `although`", "buat daftar ini paralel". Polanya ditentukan, jadi jawaban benarnya tinggal satu-dua bentuk.

### D. Susun ulang urutan kata

Semua kata sudah disediakan dalam urutan acak; user menyusunnya. Cocok untuk word order, urutan adjective, dan struktur pertanyaan.

## Yang DILARANG

- ❌ "Tulis e-mail/paragraf/kalimat tentang X" — jawaban tak terhingga.
- ❌ "Terjemahkan kalimat ini ke bahasa Inggris" — sama saja.
- ❌ Step yang jawabannya satu kata (itu kuis, bukan step).
- ❌ `language` selain `"text"`. Tidak ada yang dieksekusi di track ini.

Topik yang tidak muat di empat bentuk di atas **tetap wajib diajarkan** — lewat halaman `materi` (sudah ada) dan lewat kuis pilihan ganda.

---

## Aturan menulis `tests` untuk kalimat Inggris

1. **Jangan pernah memakai pattern berupa huruf polos.** Skrip menolak pattern seperti `receive` atau `their|there` sebagai "tes terlalu longgar". Selalu beri konteks atau batas kata: `\\breceive\\b`, `sent\\s+the\\s+report`.

2. **Periksa inti yang diminta, bukan seluruh kalimat.** Kalau tugasnya menyisipkan koma setelah `Monday`, periksa `Monday\\s*,\\s*we` — bukan seluruh kalimat dari awal sampai titik. User yang mengetik ulang dengan spasi berbeda tidak boleh gagal.

3. **Pasangkan tes positif dengan `mustNotMatch`.** Ini pola paling penting di track ini: satu tes memastikan bentuk benar muncul, satu tes memastikan bentuk salah sudah hilang.

   ```ts
   tests: [
     { pattern: "passed\\s*;\\s*we", flags: "i", message: "..." },
     { pattern: "passed\\s*,\\s*we", flags: "i", mustNotMatch: true, message: "..." },
   ]
   ```

4. **Toleransi huruf besar-kecil ditangani `flags: "i"`** — tapi kalau step-nya justru tentang capitalization, hapus flag itu dan periksa hurufnya secara persis.

5. **Uji regex-mu terhadap tiga hal sebelum menempelkannya:** solusi yang benar, satu jawaban benar bergaya lain, dan satu jawaban setengah jadi. Kalau yang kedua ditolak, pattern-mu terlalu ketat.

6. **Pesan tes harus mengajar.** "Salah" dan "Tes gagal" ditolak skrip. Tulis apa yang kurang dan kenapa: "Koma setelah `passed` masih ada — dua kalimat utuh tidak bisa disambung koma."

---

## Aturan `susunKode` untuk kalimat

Setiap step **wajib** punya varian `susunKode` — inilah bentuk latihan utama track ini. Skrip memeriksanya keras:

| Aturan | Konsekuensi kalau dilanggar |
|---|---|
| `potongan` minimal 2, `pengecoh` minimal 2, total ≤ 12 | ❌ |
| Setiap `potongan` harus benar-benar ada di `solution` atau `starterCode` | ❌ "keping karangan" |
| `potongan.join(pemisah)` wajib lolos SELURUH tes step | ❌ soal tanpa jawaban |
| `pengecoh` tidak boleh muncul di dalam `solution` | ❌ "berarti ia benar" |
| Setiap `pengecoh` wajib MERUSAK minimal satu tes saat menggantikan potongan termiripnya | ❌ "pengecoh tidak merusak apa pun" |
| Kalau semua `pengecoh` menyasar satu keping yang memuat ≥50% jawaban | ❌ "merosot jadi pilihan ganda" |
| `explanation` minimal 200 karakter dan memuat kata "menggoda"/"sering"/"keliru"/"jebakan" | ❌ |

Aturan terakhir di baris kelima adalah yang paling sering menjegal: pengecoh yang cuma beda tanda kutip atau beda spasi akan tetap lolos tes, dan skrip menolaknya. **Ambil pengecoh dari kesalahan nyata penutur Indonesia** — `informations`, `advices`, `he don't`, `in Monday`, `more better`, koma alih-alih titik koma.

Untuk memecah kalimat jadi potongan, potong di **batas klausa atau frasa**, bukan per kata. Merangkai delapan keping satu-kata jadi tebak-tebakan, bukan latihan.

---

## `example` untuk track bahasa

`example.output` di track lain berisi keluaran terminal. Di sini tidak ada keluaran, jadi `output` diisi **perbandingan sebelum–sesudah beserta apa yang berubah**. Tulis multi-baris; skrip menandai output pendek satu baris yang berisi klaim manfaat.

```ts
example: {
  code:
    "❌ The invoice arrived late, the client complained.\n" +
    "✅ The invoice arrived late; the client complained.",
  output:
    "Sebelum : dua kalimat utuh disambung koma — comma splice.\n" +
    "Sesudah : titik koma menyambung keduanya sebagai kalimat setara.",
  note: "Titik koma dipakai kalau dua kalimat berkaitan erat. Kalau tidak, titik biasa lebih aman.",
}
```

Kasus di `example` **wajib berbeda** dari kasus di tugas. Kalau contohnya memakai kalimat yang sama dengan `starterCode`, user cuma menyalin.

---

## Step rujukan (tiru bentuk ini)

Step ini **sudah ada di repo** sebagai `beng-2-3` di modul `tanda-baca`, dan sudah lolos `verify:konten` termasuk seluruh aturan `susunKode`. Buka langsung di file-nya, jangan menyalin dari sini — yang di bawah cuma untuk dibaca sambil membaca dokumen ini.

```ts
{
  kind: "step",
  id: "beng-2-3",
  title: "Memperbaiki Comma Splice",
  explanation:
    "Dua kalimat yang sama-sama utuh tidak boleh disambung hanya dengan koma — kesalahan ini bernama comma splice. " +
    "Koma bertugas memisahkan bagian DI DALAM satu kalimat, bukan menyambung dua kalimat penuh. " +
    "Ada empat jalan keluar yang sama-sama benar: titik, titik koma, koma plus conjunction seperti `so`, " +
    "atau mengubah salah satunya jadi anak kalimat dengan `because`. Pilihannya soal penekanan, bukan benar-salah. " +
    "Titik koma dipakai kalau dua kalimat itu berkaitan sangat erat dan kamu ingin pembaca membacanya sebagai satu tarikan napas.",
  example: {
    code:
      "❌ The invoice arrived late, the client complained.\n" +
      "✅ The invoice arrived late; the client complained.",
    output:
      "Sebelum : dua kalimat utuh disambung koma — comma splice.\n" +
      "Sesudah : titik koma menyambung keduanya sebagai kalimat setara.",
    note: "Cara mengeceknya: tutup bagian sebelum koma. Kalau sisanya masih kalimat utuh, koma itu salah.",
  },
  instruction:
    "Kalimat di editor menyambung dua kalimat utuh hanya dengan koma. Perbaiki memakai tanda baca " +
    "yang menyatakan keduanya setara dan berkaitan erat — jangan memecahnya jadi dua kalimat terpisah.",
  starterCode: "The tests passed, we shipped the release.",
  language: "text",
  tests: [
    {
      pattern: "passed\\s*;\\s*we\\s+shipped",
      flags: "i",
      message:
        "Ganti koma setelah `passed` dengan titik koma — dua kalimat utuh tidak bisa disambung koma.",
    },
    {
      pattern: "passed\\s*,\\s*we",
      flags: "i",
      mustNotMatch: true,
      message: "Koma setelah `passed` masih ada, jadi comma splice-nya belum hilang.",
    },
  ],
  solution: "The tests passed; we shipped the release.",
  susunKode: {
    question: "Sambungkan dua kalimat ini sebagai dua pernyataan setara yang berkaitan erat.",
    potongan: ["The tests passed;", "we shipped the release."],
    pengecoh: ["The tests passed,", "The tests passed."],
    pemisah: " ",
    explanation:
      "Titik koma menyambung dua kalimat utuh tanpa menjadikan salah satunya anak kalimat. " +
      "Pengecoh berkoma menggoda karena itulah yang paling sering ditulis penutur Indonesia — " +
      "dalam bahasa Indonesia koma memang boleh menyambung dua klausa, jadi kebiasaannya terbawa. " +
      "Pengecoh bertitik juga menggoda dan sebenarnya tidak salah secara tata bahasa, tapi ia memutus " +
      "hubungan erat antara kedua kalimat, dan itu bukan yang diminta soal ini.",
  },
}
```

---

## Briefing siap tempel

Ganti `<MODUL>` dengan blok modul di bawahnya, lalu tempel apa adanya ke worker.

```text
Tugas: isi step dan kuis untuk SATU modul track Business English di
src/data/tracks/business-english.ts

WAJIB dibaca dulu, jangan mulai sebelum ini:
1. perintah-business-english.md — dokumen ini, khususnya "Empat bentuk step
   yang DIIZINKAN" dan "Aturan susunKode untuk kalimat"
2. panduan_isi.md — standar penulisan umum
3. src/data/tracks/spreadsheet.ts — contoh track non-eksekusi (language "text")

Modul yang dikerjakan: <MODUL>

STRUKTUR TIDAK BOLEH DIUBAH. Jangan menyentuh slug, title, description,
topics, atau halaman materi yang sudah ada. Jangan menyentuh modul lain.
Yang ditambahkan HANYA step dan kuis ke dalam array `items` modul itu,
diletakkan SETELAH materi yang sudah ada.

Target: 5-8 step + 1 kuis berisi 5-7 soal pilihan ganda.

Aturan khusus track ini (di atas aturan AGENTS.md):
- Semua step language: "text". Tidak ada yang dieksekusi.
- Jawaban setiap step HARUS bentuknya terbatas. Kalau kamu tidak bisa
  mendaftar semua jawaban benar, jangan tulis step itu — pindahkan
  materinya ke kuis.
- Hanya empat bentuk step yang boleh: (A) sisip/perbaiki tanda baca,
  (B) perbaiki satu unsur gramatikal dalam kalimat utuh, (C) tulis ulang
  dengan pola yang ditentukan, (D) susun ulang urutan kata.
- DILARANG: "tulis e-mail/paragraf tentang X", "terjemahkan kalimat ini".
- Setiap step wajib punya varian susunKode. Pengecohnya diambil dari
  kesalahan nyata penutur Indonesia, bukan dikarang.
- Pattern regex tidak boleh berupa huruf polos (`receive` ditolak skrip).
  Beri batas kata atau konteks: `\breceive\b`.
- Pasangkan tes positif dengan tes mustNotMatch yang memastikan bentuk
  salahnya sudah hilang.
- example.output diisi perbandingan sebelum-sesudah multi-baris, bukan
  klaim manfaat.
- Penjelasan bahasa Indonesia, contoh kalimat bahasa Inggris. Sapa "kamu".
- Konteks contoh: dunia kerja kantor (invoice, deadline, klien, rapat,
  laporan), bukan kalimat buku pelajaran seperti "The cat sits on the mat".

Sebelum melapor selesai, jalankan dan pastikan bersih:
  npm run verify:konten
  npx tsc --noEmit && npx eslint src
  npm run build

Lalu buktikan tesmu tidak menolak jawaban benar: untuk SETIAP step, tulis
satu jawaban benar bergaya lain (spasi berbeda, kapitalisasi berbeda) dan
jalankan regexnya di node. Laporkan hasilnya.

Format laporan: jumlah step & soal kuis, bentuk step (A/B/C/D) yang dipakai
per step, output verify:konten, dan hasil uji regex di atas.
```

---

## Blok modul

Tempelkan salah satu ke `<MODUL>` di briefing.

### Modul 1 — `dasar-kalimat`
> Modul 1 "Dasar Kalimat". Bab: komponen kalimat (subject/verb/complete thought), empat kesalahan fatal (fragment, run-on, comma splice, subject-verb disagreement), subject-verb agreement, verb tense yang konsisten, capitalization, pronoun, adjective vs adverb, misplaced & dangling modifier.
> Bentuk yang paling cocok: B (perbaiki verb agar cocok dengan subject, perbaiki adverb) dan C (sambungkan fragment ke induk kalimat, pecah run-on). Jebakan wajib diajarkan: frasa penyisip yang membuat orang memilih verb berdasarkan kata terdekat (`The list of errors are` → `is`).

### Modul 2 — `tanda-baca`
> Modul 2 "Tanda Baca". Bab: comma, semicolon, colon, quotation marks, apostrophe, parentheses, dash, hyphen.
> Modul paling deterministik di track ini — kerjakan lebih dulu kalau belum ada modul lain yang jadi, supaya polanya bisa ditiru. Bentuk yang cocok: A hampir untuk semuanya. Jebakan wajib: `its` vs `it's`, apostrof untuk jamak (`PDF's`), dan hyphen yang mengubah arti (`a small business owner`).
> **Sudah ada satu step di modul ini: `beng-2-3` (comma splice).** Jangan diubah atau dihapus — itu step rujukan. Tulis step lain di sekitarnya dan sesuaikan penomorannya.

### Modul 3 — `bekerja-dengan-kata`
> Modul 3 "Bekerja dengan Kata". Bab: commonly confused words, ejaan dan pengecualiannya, denotasi/konotasi/register, prefix & suffix, synonym & antonym, context clues.
> Bentuk yang cocok: B (ganti kata yang tertukar, betulkan ejaan) dan C (turunkan register kalimat dari formal ke informal dengan pola yang ditentukan). Synonym/antonym dan context clues lebih baik jadi soal kuis daripada step. Jebakan wajib: thesaurus yang dipakai untuk terdengar pintar (`utilize` vs `use`).

### Modul 4 — `pembelajar-non-native`
> Modul 4 "Jebakan Khas Pembelajar Non-Native". Bab: word order & urutan adjective, kalimat negatif, count/noncount noun & article a/an/the, pronoun dan acuannya, verb tense, modal auxiliary, preposition, slang & idiom.
> Modul terpenting di track ini — beri porsi step terbanyak (8). Bentuk yang cocok: B (sisipkan article yang hilang, betulkan tense, betulkan preposition) dan D (susun urutan adjective, susun kalimat negatif). Jebakan wajib: `informations`/`advices`/`feedbacks`, `have released it yesterday`, dan `must` yang terbaca jauh lebih keras daripada "harus".

### Modul 5 — `menulis-paragraf`
> Modul 5 "Menulis Paragraf". Bab: topic sentence, supporting sentence, unity, coherence & transisi, coordination & subordination, parallelism, sentence variety.
> Bentuk yang cocok: C (gabungkan dua kalimat memakai conjunction yang ditentukan, betulkan daftar agar paralel, sisipkan kata transisi yang tepat). Unity dan topic sentence lebih cocok jadi soal kuis berbasis paragraf pendek. Jebakan wajib: parallelism yang rusak di daftar berpoin, dan topic sentence yang diletakkan di akhir paragraf.

### Modul 6 — `proses-menulis`
> Modul 6 "Proses Menulis". Bab: prewriting, outline, drafting, thesis statement, body paragraph, introduction & conclusion, revising vs editing.
> Modul paling sulit dijadikan step karena isinya proses, bukan bentuk kalimat. Batasi 4-5 step saja, sisanya kuis. Bentuk yang cocok: C (perbaiki thesis statement yang terlalu umum jadi thesis yang punya klaim, dengan pola yang ditentukan) dan D (susun outline acak jadi urutan yang benar). Jebakan wajib: menyunting sambil menulis draf, dan mencampur revising dengan editing.

### Modul 7 — `prinsip-business-writing`
> Modul 7 "Prinsip Business Writing". Bab: lisan vs tulisan, ciri tulisan bisnis yang baik, style (formal/informal/colloquial), tujuh prinsip komunikasi tertulis, hambatan komunikasi, paraphrase & plagiarisme, revisi tingkat kalimat.
> Modul ini memuat empat bab buku sekaligus, jadi jangan memaksakan setiap bab jadi step. Bentuk yang cocok: C (potong kata mubazir dari kalimat, ubah pasif jadi aktif dengan subjek yang ditentukan, ubah `soon` jadi tanggal konkret). Lisan vs tulisan, hambatan komunikasi, dan batas plagiarisme dijadikan soal kuis berbasis skenario. Jebakan wajib: parafrase yang cuma mengganti sinonim — itu masih plagiarisme.

### Modul 8 — `dokumen-bisnis`
> Modul 8 "Dokumen Bisnis". Bab: text message & e-mail netiquette, subject line & kalimat pembuka, memorandum & surat resmi, business proposal, report, résumé & cover letter, sales message.
> Bentuk yang cocok: C (tulis ulang subject line yang kabur jadi spesifik dengan pola "topik — tindakan + tanggal"; ubah butir résumé pasif jadi kata kerja lampau + angka). JANGAN membuat step "tulis e-mail lengkap" — pecah jadi bagian: hanya subject line, hanya kalimat pembuka, hanya kalimat permintaan. Jebakan wajib: permintaan yang diletakkan di paragraf terakhir, dan subject line "Question".

### Modul 0 — `persiapan-belajar`
> Modul 0 "Persiapan & Alat Belajar". Bab: kenapa Business English berbeda, kamus & thesaurus, LanguageTool & spell check, level CEFR, cara berlatih, American vs British English.
> Kerjakan PALING AKHIR, setelah modul lain jadi, supaya isinya bisa merujuk ke apa yang benar-benar ada. Modul ini boleh hanya berisi materi + kuis 5 soal tanpa step sama sekali — tidak ada yang bisa dilatih secara deterministik di sini. Kalau tetap ingin step, satu-satunya yang masuk akal adalah bentuk B: ubah ejaan British jadi American secara konsisten dalam satu kalimat.

---

## Urutan pengerjaan yang disarankan

1. **Modul 2 (tanda baca)** — paling deterministik, hasilnya jadi pola rujukan.
2. **Modul 4 (jebakan non-native)** — nilai belajar tertinggi untuk pembaca Indonesia.
3. Modul 1 → 3 → 5 → 8 → 7 → 6 → 0.

Modul 0 terakhir, dan modul 6 diletakkan menjelang akhir karena paling sedikit bagian yang bisa jadi step.

---

## Cara memeriksa hasil worker

```bash
# 1. Struktur tidak tertimpa — jumlah modul & bab harus tetap
npx tsx -e "import {tracks} from './src/data/tracks/index'; \
const t=tracks.find(x=>x.slug==='business-english'); \
console.log(t.modules.length+' modul', \
t.modules.reduce((a,m)=>a+m.topics.length,0)+' bab')"
# Harus: 9 modul, 64 bab

# 2. Verifikasi konten
npm run verify:konten

# 3. Yang TIDAK diperiksa skrip — periksa manual:
#    - Apakah ada step yang jawaban benarnya sebenarnya banyak?
#      (baca instruksinya, coba jawab dengan cara lain)
#    - Apakah pengecoh susunKode benar-benar kesalahan yang nyata,
#      atau dikarang supaya lolos aturan?
#    - Apakah contoh kalimatnya berkonteks kerja, atau kalimat
#      buku pelajaran yang tidak akan pernah ditulis siapa pun?
```

Tolak tanpa membaca isinya kalau `verify:konten` masih menemukan pelanggaran.
