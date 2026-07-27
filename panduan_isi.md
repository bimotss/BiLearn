# Panduan Mengisi Konten BiLearn

Dokumen ini adalah standar penulisan konten interaktif BiLearn. Tujuannya: siapa pun (termasuk AI) yang melanjutkan pengisian konten menghasilkan kualitas yang **sama dengan track HTML, CSS, dan JavaScript** yang sudah selesai.

Baca ini sebelum menulis satu baris konten.

---

## 0. Briefing Siap Tempel

Membaca panduan ini saja **belum cukup** — terbukti: 13 track pernah diisi saat panduan ini sudah ada, hasilnya 935 pelanggaran. Panduan tidak akan terbaca kalau tidak ditunjuk secara eksplisit.

Karena itu:

1. Aturan keras juga ditulis di **`AGENTS.md`**, file yang otomatis dibaca AI coding agent saat membuka repo ini.
2. Skrip verifikasi **menolak** pelanggarannya, jadi tidak bisa lolos diam-diam.
3. Saat memberi tugas ke orang/AI lain, tempel briefing di bawah ini apa adanya:

```text
Tugas: isi konten interaktif untuk <TRACK> di src/data/tracks/<file>.ts

WAJIB dibaca dulu, jangan mulai sebelum ini:
1. panduan_isi.md  — standar penulisan (khususnya bagian 2b: anti-pattern)
2. src/data/tracks/javascript.ts — contoh kualitas untuk track yang bisa dieksekusi
3. src/data/tracks/git.ts modul 4 (pr-workflow) — contoh untuk track non-JavaScript

Yang TIDAK boleh (akan ditolak skrip verifikasi):
- step tanpa `example` berisi code + output nyata
- instruksi yang memuat jawaban utuh (user cuma menyalin)
- language: "js" untuk perintah shell/SQL/PHP/Python/formula → pakai "text"
- tugas yang cuma "tuliskan komentar <kalimat>"
- kuis kurang dari 3 soal, atau soal tanpa explanation
- example.output berisi klaim manfaat ("menghemat waktu") bukan hasil nyata

Struktur modul & bab (topics) SUDAH ADA dan tidak boleh diubah.
Yang diisi hanya array `items` di setiap modul.

Sebelum melapor selesai, jalankan dan pastikan bersih:
  npm run verify:konten
  npx tsc --noEmit && npx eslint src
  npm run build

Lapor dengan format: berapa step & kuis per modul, dan output verify:konten.
```

---

## 1. Status Saat Ini

| Bagian | Status |
|---|---|
| 16 track + 118 modul + 781 bab (silabus) | ✅ Selesai — lihat `docs/kurikulum.md` |
| HTML (6 modul) | ✅ 35 step + 6 kuis — **memenuhi standar** |
| CSS (9 modul) | ✅ 49 step + 9 kuis — **memenuhi standar** |
| JavaScript (10 modul) | ✅ 57 step + 10 kuis — **memenuhi standar** |
| Git modul 4 (PR workflow) | ✅ 9 step + kuis 5 soal — **rujukan untuk track non-JS** |
| Git modul 1,2,3,5 + 12 track lain | ⚠️ **Terisi tapi belum memenuhi standar** — lihat bagian 2b |

> ⚠️ **Penting:** 13 track sudah terisi (±700 step) tapi **935 pelanggaran** terdeteksi skrip verifikasi. Konten itu belum layak dipakai. Baca bagian **2b (Anti-Pattern)** untuk tahu apa yang salah, dan bagian **9c** untuk cara mereviewnya. Jalankan `npx tsx scripts/verify-konten.ts` untuk melihat daftar terkini.

**Yang perlu dikerjakan hanya mengisi array `items` di setiap modul.** Struktur `slug`, `title`, `description`, dan `topics` sudah ada dan **tidak boleh diubah** kecuali ada alasan kuat.

### Urutan prioritas pengisian

1. **Git & GitHub** — pendek (5 modul), dipakai sejak hari pertama, tidak butuh prasyarat
2. **TypeScript** — pintu masuk ke React, requirement lowongan
3. **React** — track dengan permintaan kerja tertinggi
4. **SQL** — dibutuhkan dua jalur backend sekaligus
5. **Next.js** → **Laravel** / **Node** → **Deployment** → sisanya

Alasan urutan ini: menyelesaikan jalur Frontend Developer lebih dulu (HTML → CSS → JS → Git → TS → React → Next.js) agar ada **satu learning path yang benar-benar tuntas** sebelum melebar.

---

## 2. Prinsip Pedagogi (tidak bisa dinegosiasi)

Lima aturan ini yang membedakan BiLearn dari tutorial biasa:

1. **Contoh dulu, baru tes.** Setiap step WAJIB punya blok `example`. Pemula tidak bisa mengerjakan tugas kalau belum pernah melihat polanya. Ini aturan yang paling sering dilupakan.
2. **80% praktek, 20% teori.** Penjelasan 2–5 kalimat, langsung ngoding.
3. **Ajarkan jebakannya, bukan cuma sintaksnya.** Bagian paling bernilai adalah bug yang membuat orang stuck berjam-jam: `const b = a` tidak menyalin object, `fetch` tidak error di 404, `position: sticky` tanpa `top`, input tanpa `name` tidak terkirim. Setiap modul idealnya punya minimal satu bab jebakan seperti ini.
4. **Konsep sebelum alat.** CSS murni sebelum Tailwind, SQL murni sebelum ORM, JS sebelum React. Orang yang hanya tahu alatnya akan gugur saat technical interview.
5. **Kaitkan ke dunia kerja.** Sebutkan kapan hal ini muncul di code review, interview, atau lowongan — bukan sebagai basa-basi motivasi, tapi sebagai konteks yang membuat materi terasa relevan.

### Bahasa

- Penjelasan: **Bahasa Indonesia**, gaya mentor yang berpengalaman — jelas, tidak menggurui, tidak berlebihan.
- Istilah teknis: **tetap Inggris** (`state`, `closure`, `query`, `props`). Jangan diterjemahkan jadi "keadaan" atau "penutupan".
- Hindari: "sangat mudah!", "cukup begini saja!", "tinggal ketik". Kalau memang sulit, katakan sulit.
- Sapa pembaca dengan **kamu**.

---

## 2b. Anti-Pattern yang Ditolak Otomatis

Bagian ini lahir dari audit nyata: 13 track pernah diisi dan **lolos semua pemeriksaan otomatis versi lama**, tapi kualitasnya jauh di bawah standar. Skrip verifikasi sekarang **menolak** kelima pola berikut. Angka di kolom terakhir adalah jumlah pelanggaran yang ditemukan saat audit — supaya jelas ini masalah nyata, bukan teori.

| # | Anti-pattern | Kenapa ditolak | Temuan audit |
|---|---|---|---|
| 1 | **Instruksi memuat jawaban utuh** | User cuma menyalin, tidak ada penalaran. | 461 step |
| 2 | **`language: "js"` untuk kode non-JS** | Preview mengeksekusinya → SyntaxError merah muncul sebelum user mengetik apa pun. | 206 step |
| 3 | **Tugas cuma "tulis komentar"** | Mengetik kalimat Inggris sebagai `//` komentar = nol nilai belajar. | 152 step |
| 4 | **Kuis 1 soal** | Satu soal tidak bisa mengukur satu modul berisi 6–8 bab. | 92 kuis |
| 5 | **`example.output` berisi klaim manfaat** | "Menghemat waktu" bukan hasil. User perlu melihat keluaran nyata. | 24 step |

### Bentuk salah vs benar

**1. Instruksi jangan memuat jawaban**

```ts
// ❌ jawabannya sudah tertulis di instruksi
instruction: "Tuliskan formula rata-rata `=AVERAGE(B1:B10)`."

// ✅ beri skenario, biar user yang menyusun
instruction:
  "Kolom B1:B10 berisi nilai ujian. Hitung rata-ratanya memakai " +
  "fungsi agregasi yang sesuai."
```

Cara cepat menguji: kalau user bisa menyelesaikan tugas **tanpa membaca penjelasan dan contoh**, instruksimu terlalu memberi tahu.

**2. Perintah shell/SQL/formula wajib `language: "text"`**

```ts
// ❌ akan dieksekusi sebagai JavaScript → SyntaxError
language: "js",
starterCode: "# tulis perintah di sini\n",
solution: "git add app.js",

// ✅ ditampilkan tanpa dieksekusi
language: "text",
starterCode: "# tulis perintahnya di sini\n",
solution: "git add app.js",
```

**3. Tugas harus menuntut keputusan, bukan mengetik ulang**

```ts
// ❌ user hanya mengetik kalimat yang sudah diberikan
instruction: "Tuliskan komentar `// LLMs predict probable next tokens`."

// ✅ user harus MENGANALISIS lalu menulis temuannya
instruction:
  "Review kode di panel kanan. Ada dua masalah serius. Tulis komentar " +
  "review yang menyebut keduanya: satu soal kredensial yang tertulis " +
  "langsung di kode, satu soal kegagalan fetch yang tidak ditangani."
```

Perbedaannya: yang kedua tetap "menulis komentar", tapi user harus **menemukan** masalahnya dulu. Itu yang dinilai.

**4. `example.output` harus keluaran nyata**

```ts
// ❌ klaim manfaat
output: "Reviewer senior dapat memahami perubahanmu dengan cepat."

// ✅ keluaran terminal sebenarnya
output:
  "To github.com:tim/bilearn.git\n" +
  " * [new branch]      fix/BIL-42 -> fix/BIL-42\n" +
  "branch 'fix/BIL-42' set up to track 'origin/fix/BIL-42'.",
```

**5. Tes harus menerima variasi yang sama-sama benar**

```ts
// ❌ hanya menerima satu bentuk, padahal keduanya benar & umum dipakai
pattern: "git\\s+switch\\s+-c\\s+feature/checkout"

// ✅
pattern: "git\\s+(switch\\s+-c|checkout\\s+-b)\\s+\\S+"
```

### Rujukan standar

**`src/data/tracks/git.ts` modul 4 (`pr-workflow`) adalah contoh acuan** untuk track non-JavaScript: 9 step berbasis skenario, `language: "text"`, output terminal nyata, tes menerima variasi, dan kuis 5 soal situasional. Tiru pola itu.

---

## 3. Struktur Data

Definisi lengkap ada di `src/lib/types.ts`. Ringkasnya:

```
Track
 └── modules: Module[]
      ├── slug, title, description   ← SUDAH ADA, jangan ubah
      ├── topics: string[]           ← SUDAH ADA (silabus/bab)
      └── items: ModuleItem[]        ← ⬅️ INI YANG DIISI
           ├── Materi (kind: "materi")
           ├── Step (kind: "step")
           └── Quiz (kind: "quiz")
```

### Template Materi (Halaman Baca Pembuka Modul)

```ts
{
  kind: "materi",
  id: "git-1-m1",              // pola: <track>-<modul>-m<urutan>, unik global
  title: "Pengenalan Konsep & Use Case",
  body:
    "# Pengertian\n\n" +
    "Jelaskan dari nol seolah pemula belum pernah mendengar istilah ini.\n\n" +
    "## Use Case Utama\n\n" +
    "> **Kapan dipakai:** Dipakai ketika/agar ...\n\n" +
    "## Analogi Dunia Nyata\n\n" +
    "Analogi yang mudah dibayangkan untuk konsep yang abstrak.\n\n" +
    "```text\n// Blok kode contoh (hanya ditampilkan)\n```",
}
```

### Template Step

```ts
{
  kind: "step",
  id: "git-1-3",              // pola: <track>-<modul>-<urutan>, unik global
  title: "Judul singkat",
  explanation:
    "Minimal 4 kalimat atau 350 karakter. Jelaskan APA yang dilakukan, KENAPA begitu, " +
    "KAPAN dipakai, dan jebakan umumnya. Boleh pakai **tebal** dan `kode`.",
  example: {                   // ⬅️ WAJIB ADA
    code: "kode contoh — kasus BERBEDA dari tugas",
    output: "hasil nyata: output konsol persis, atau deskripsi tampilan",
    note: "opsional: bagian mana yang perlu diperhatikan",
  },
  instruction: "Tugas yang spesifik dan bisa diverifikasi mesin.",
  starterCode: "kode awal di editor (boleh string kosong)",
  language: "html" | "css" | "js" | "text",
  previewHtml: "<div>...</div>",  // opsional: markup untuk step CSS/JS
  loadTailwind: true,             // opsional: muat Tailwind CDN di preview
  tests: [
    {
      pattern: "regex yang harus cocok dengan kode user",
      flags: "i",                 // opsional, default "i"
      message: "Pesan kalau gagal — harus MEMBANTU, bukan menyalahkan",
    },
  ],
  solution: "contoh jawaban lengkap yang lolos semua tes",
}
```

### Template Quiz (Ronde 2: 5–7 Soal, Semua Pilihan Ganda)

```ts
{
  kind: "quiz",
  id: "git-1-kuis",
  title: "Kuis: Nama Modul",
  questions: [
    {
      id: "q1",
      type: "pilihan-ganda",       // ⬅️ WAJIB pilihan-ganda (5–7 soal per kuis)
      question: "Pertanyaan berbasis skenario kerja / use case, bukan hafalan definisi",
      code: "cuplikan kode (opsional)",
      choices: [
        "A. Pilihan jawaban A",
        "B. Pilihan jawaban B (pengecoh yang masuk akal)",
        "C. Pilihan jawaban C (jawaban benar)",
        "D. Pilihan jawaban D"
      ],
      answerIndex: 2,              // index jawaban benar
      explanation:
        "WAJIB: jelaskan KENAPA benar, dan kenapa pilihan lain menggoda. " +
        "Ini kunci jawaban yang dilihat user — nilainya ada di sini.",
    },
  ],
}
```

---

## 4. Aturan Menulis `example` (paling penting)

Ini bagian yang paling menentukan kualitas. Aturannya:

| Aturan | Alasan |
|---|---|
| **Kasus harus BERBEDA dari tugas** | Kalau sama, user cuma menyalin dan tidak belajar. Skrip verifikasi otomatis menolak `example.code === solution`. |
| **Output harus konkret** | Untuk JS: tulis output `console.log` **persis**. Untuk CSS/HTML: deskripsikan apa yang terlihat. Jangan "akan menampilkan hasilnya". |
| **Tunjukkan salah vs benar bila relevan** | Cara tercepat memahami perbedaan. Tandai dengan komentar `// ❌` dan `// ✅`. |
| **Sertakan komentar penunjuk di kode** | Contoh: `padding: 30px;   /* ruang DALAM */` |
| **`note` untuk jebakan atau cara mengingat** | Bukan mengulang penjelasan. |

### Contoh baik

```ts
example: {
  code:
    "const asli = { nama: 'Kopi', stok: 5 };\n\n" +
    "// ❌ BUKAN salinan — dua nama untuk data yang SAMA\n" +
    "const salah = asli;\n" +
    "salah.stok = 99;\n" +
    "console.log(asli.stok);      // ikut berubah!\n\n" +
    "// ✅ salinan sungguhan\n" +
    "const benar = { ...asli, stok: 1 };\n" +
    "console.log(asli.stok, benar.stok);",
  output: "99\n99 1",
  note: "Spread menyalin isi ke object BARU. Properti setelah ...asli menimpa nilai aslinya.",
}
```

### Contoh buruk (jangan)

```ts
example: {
  code: "const b = { ...a };",           // ❌ terlalu pendek, tanpa konteks
  output: "Object akan tersalin.",       // ❌ tidak konkret
}
```

---

## 4b. Menulis Kode di Dalam String TypeScript (sering bikin error)

Semua kode konten disimpan sebagai **string TypeScript**, jadi ada aturan escaping yang wajib diingat:

| Yang ingin ditulis | Cara menulisnya di string | Catatan |
|---|---|---|
| Baris baru | `\n` | Bukan menekan Enter di dalam string biasa |
| Petik ganda di dalam string berpetik ganda | `\"` | Atau pakai petik tunggal di luar |
| Backtick (template literal JS) | `` \` `` di dalam string backtick | Paling aman: bungkus dengan petik tunggal |
| Backslash regex (`\s`, `\d`, `\(`) | `\\s`, `\\d`, `\\(` | **Wajib dobel** — ini penyebab regex gagal paling sering |
| `${...}` sebagai teks (bukan interpolasi) | Jangan pakai string backtick; pakai petik tunggal | Kalau tidak, TS akan mencoba mengevaluasinya |

### Contoh yang benar

```ts
// kode contoh multi-baris: pakai \n
code: "const a = 1;\nconsole.log(a);",

// kode yang MENGANDUNG backtick JS: bungkus dengan petik tunggal
code: 'const p = `Halo ${nama}`;\nconsole.log(p);',

// regex: backslash HARUS dobel
pattern: "const\\s+nama\\s*=\\s*['\"]Bimo['\"]",
```

### Kesalahan nyata yang pernah terjadi

Tes ini gagal padahal solusinya benar:

```ts
// ❌ mengharap ada ")" sebelum ", 0)" — padahal solusinya tidak punya itu
pattern: "\\)\\s*,\\s*0\\s*\\)"

// ✅ diperbaiki jadi lebih longgar
pattern: "reduce\\([\\s\\S]*,\\s*0\\s*\\)"
```

**Pelajaran:** jangan menebak bentuk penulisan user. Tulis pattern yang memeriksa *inti* yang diminta, lalu buktikan dengan menjalankan skrip verifikasi — bukan dengan membacanya saja.

---

## 4c. Batasan Preview (penting sebelum menulis)

Preview adalah iframe ber-sandbox. Ini yang bisa dan tidak bisa:

| Bisa dijalankan (`language` html/css/js) | Tidak bisa dijalankan (**wajib `language: "text"`**) |
|---|---|
| HTML, CSS, JavaScript browser | Git (perintah terminal) |
| DOM, event, form | SQL (butuh database) |
| `fetch` ke API publik | PHP / Laravel (butuh server) |
| `localStorage`* | Python (butuh interpreter) |
| Tailwind (dengan `loadTailwind: true`) | React / JSX (belum ada bundler di preview) |
| Kelas, closure, async/await | Formula spreadsheet, Markdown, Dockerfile, YAML |

\* `localStorage` di iframe sandbox memakai **pengganti in-memory** yang disuntikkan otomatis (lihat `StepView.tsx`). Perilakunya sama untuk keperluan belajar, tapi datanya hilang saat halaman dimuat ulang. Sebutkan ini di `note` bila relevan.

### Cara menulis step untuk track yang tidak bisa dieksekusi

Tetap tulis step-nya, tapi **jujur di instruksinya** dan pindahkan beban belajar ke `example`:

```ts
{
  kind: "step",
  id: "sql-2-3",
  title: "INNER JOIN dua tabel",
  language: "text",          // ⬅️ WAJIB: SQL tidak dieksekusi di preview
  explanation: "...",
  example: {
    code: "SELECT p.nama, k.nama AS kategori\nFROM produk p\nINNER JOIN kategori k ON p.kategori_id = k.id;",
    // ⬅️ tampilkan hasil sebagai tabel teks — INILAH pengganti eksekusi
    output:
      "nama        | kategori\n" +
      "------------+----------\n" +
      "Kopi Gayo   | Minuman\n" +
      "Teh Hijau   | Minuman",
    note: "Baris yang tidak punya pasangan di tabel lain TIDAK muncul pada INNER JOIN.",
  },
  instruction:
    "Tulis query yang menggabungkan tabel `pesanan` dan `user` ... " +
    "(preview belum menjalankan SQL — yang diperiksa adalah query-nya)",
  // ...
}
```

Kualitas `example.output` menjadi **jauh lebih penting** untuk track seperti ini, karena itulah satu-satunya cara user melihat hasil.

---

## 5. Aturan Menulis `tests`

Test engine saat ini **berbasis regex** terhadap kode user (fase 2: test runner sungguhan). Konsekuensinya:

- Buat pattern **cukup longgar** agar variasi penulisan yang benar tetap lolos: beri toleransi spasi (`\\s*`), urutan atribut, dan tanda kutip tunggal/ganda (`['\"]`).
- Buat pattern **cukup ketat** agar tidak lolos secara kebetulan.
- Gunakan `|` untuk menerima beberapa cara yang sama-sama benar:
  ```ts
  pattern: "arr\\[\\s*arr\\.length\\s*-\\s*1\\s*\\]|arr\\.at\\(\\s*-1\\s*\\)"
  ```
- Untuk memastikan user **tidak** memakai sesuatu, pakai negative lookahead:
  ```ts
  pattern: "^(?![\\s\\S]*\\.push\\()"
  ```
- **Satu tes = satu hal yang diperiksa**, agar pesan errornya spesifik.

### Pesan error yang baik

| Buruk | Baik |
|---|---|
| "Salah" | "Kamu belum menambahkan `<h1>`. Pastikan ada tag pembuka `<h1>` dan penutup `</h1>`." |
| "Tes gagal" | "Tambahkan `flex-wrap: wrap;` pada `.galeri` — tanpa itu item memaksa tetap satu baris." |

Pesan error adalah **momen mengajar**, bukan pengumuman kegagalan.

### Wajib dipatuhi

- `solution` **harus lolos semua tes**-nya sendiri.
- `starterCode` **tidak boleh sudah lolos semua tes** (kalau lolos, step-nya sia-sia).

Keduanya diperiksa otomatis oleh skrip verifikasi.

---

## 6. Aturan Menulis Kuis

- **3–6 soal per modul**, ditempatkan sebagai item terakhir modul.
- Utamakan soal **berbasis skenario**: "Kode ini error X, kenapa?" jauh lebih berguna daripada "Apa itu closure?".
- Untuk pilihan ganda: **distraktor (pilihan salah) harus menggoda** — ambil dari kesalahpahaman nyata, bukan pilihan absurd yang jelas salah.
- `explanation` **wajib** dan harus menjelaskan **kenapa**, bukan mengulang jawaban. Idealnya juga menyinggung kenapa pilihan lain terlihat benar.
- Untuk `prediksi-output`: masukkan beberapa variasi penulisan jawaban ke `acceptedAnswers` (mis. `["A C B", "A, C, B", "a c b"]`).
- Untuk `isian`: terima variasi wajar (`["preventDefault", "preventDefault()", "e.preventDefault()"]`).

---

## 7. Konvensi Teknis

### ID

Pola: `<track-slug-singkat>-<nomor-modul>-<nomor-item>`

```
html-4-2      → track HTML, modul 4, step 2
css-8-kuis    → track CSS, modul 8, kuisnya
js-10-5       → track JavaScript, modul 10, step 5
```

Singkatan yang dipakai: `html`, `css`, `js`, `git`, `ts`, `react`, `next`, `laravel`, `node`, `sql`, `nosql`, `deploy`, `ai`, `sheet`, `py`, `data`.

ID harus **unik secara global** (diperiksa otomatis).

### `language` dan preview

| Track | `language` | Catatan |
|---|---|---|
| HTML | `"html"` | Kode user dirender langsung |
| CSS | `"css"` | **Wajib** isi `previewHtml` — markup yang di-style |
| Tailwind (CSS modul 8) | `"html"` + `loadTailwind: true` | Kelas Tailwind benar-benar dirender |
| JavaScript | `"js"` | Kode DIEKSEKUSI; panel output konsol otomatis muncul; `previewHtml` untuk step DOM |
| Git, SQL, PHP, Python, formula, Markdown | **`"text"`** | **Tidak dieksekusi** — ditampilkan sebagai panel monospace. Wajib dipakai, kalau tidak preview melempar SyntaxError. |

Untuk track yang belum bisa dieksekusi di browser (Git, SQL, PHP, Python), tetap tulis step-nya: nilai belajarnya ada pada **menulis sintaks yang benar** dan membaca contoh. Fase 2 akan menambahkan runner sungguhan.

### Panjang per modul

Target: **4–8 step + 1 kuis** per modul. Kalau satu modul butuh lebih dari 8 step, kemungkinan modulnya perlu dipecah — diskusikan dulu, jangan langsung mengubah struktur.

---

## 8. Alur Kerja

```
1. Buka src/data/tracks/<track>.ts
2. Baca topics tiap modul → itulah cakupan yang harus ditutup
3. Isi items modul per modul (jangan lompat-lompat)
4. Jalankan verifikasi:
      npx tsx scripts/verify-konten.ts
5. Perbaiki semua ❌ sampai bersih
6. Cek tipe & lint:
      npx tsc --noEmit && npx eslint src
7. Build:
      npm run build
8. Uji manual beberapa halaman:
      npm run dev  → buka /tracks/<slug>/<id>
```

**Jangan pernah menganggap konten selesai sebelum langkah 4–7 bersih.**

### Skrip verifikasi

`scripts/verify-konten.ts` memeriksa otomatis:

- ✅ Setiap step punya `example` dengan `code` dan `output`
- ✅ `example.code` tidak identik dengan `solution` (bukan bocoran jawaban)
- ✅ `solution` lolos semua tes-nya sendiri
- ✅ `starterCode` belum lolos semua tes
- ✅ Semua regex valid dan punya `message`
- ✅ Tidak ada ID duplikat
- ✅ Setiap soal kuis punya `explanation`
- ✅ `answerIndex` dalam rentang, pilihan tidak duplikat
- ✅ `acceptedAnswers` tidak kosong

Jalankan: `npx tsx scripts/verify-konten.ts`

---

## 8b. Troubleshooting Verifikasi

Pesan dari `scripts/verify-konten.ts` dan cara memperbaikinya:

| Pesan | Penyebab & solusi |
|---|---|
| `TANPA CONTOH` | `example.code` atau `example.output` kosong. Tulis contohnya — jangan dilewati. |
| `contoh identik dengan solution` | Contohmu membocorkan jawaban. Ganti ke kasus lain (variabel, nilai, atau konteks berbeda). |
| `solution GAGAL tes` | Regex terlalu ketat, atau solusinya memang salah. Cek pattern-nya dulu — 90% penyebabnya regex, bukan solusi. Ingat backslash dobel. |
| `starterCode sudah lolos semua tes` | Starter sudah berisi jawaban. Kosongkan bagian yang harus dikerjakan user. |
| `regex tidak valid` | Biasanya kurung tidak seimbang atau escaping salah. Uji di Node: `new RegExp("pola")`. |
| `step CSS tanpa previewHtml` | Step CSS tanpa markup = user tidak melihat apa pun. Tambahkan `previewHtml`. |
| `soal tanpa explanation` | Kunci jawaban tanpa penjelasan tidak ada gunanya. Jelaskan kenapa. |
| `ID duplikat` | Dua item pakai id sama. Ikuti pola `<track>-<modul>-<urutan>`. |

Cara cepat menguji satu regex sebelum menempelkannya ke konten:

```bash
node -e "console.log(new RegExp('const\\\\s+x','i').test('const  x = 1'))"
```

---

## 8c. Gaya Penjelasan: Baik vs Buruk

Contoh nyata perbedaannya, dari materi yang sudah jadi:

**❌ Buruk** — hanya menyebut ulang sintaks:
> "Gunakan properti `position: sticky` untuk membuat elemen sticky. Tambahkan juga nilai `top`."

**✅ Baik** — menjelaskan model mental, menyebut jebakan, dan konsekuensinya:
> "`sticky` adalah hibrida: elemen berperilaku normal sampai batas scroll tertentu, lalu 'menempel'. Wajib menyertakan nilai offset (`top: 0`) — tanpa itu sticky tidak melakukan apa pun, dan ini kebingungan yang sangat sering terjadi. Dipakai untuk header navigasi dan header tabel."

**❌ Buruk** — meremehkan kesulitan:
> "Closure itu mudah, cuma fungsi di dalam fungsi."

**✅ Baik** — mengakui kesulitan lalu menyederhanakan dengan jujur:
> "Closure sering terdengar mistis, padahal sederhana: fungsi mengingat variabel dari tempat ia dibuat, bahkan setelah fungsi luarnya selesai berjalan. Ini yang memungkinkan pembuatan counter privat."

Patokan: setelah membaca penjelasanmu, pembaca harus bisa menjawab **"kenapa ini ada"** dan **"kapan ini salah"** — bukan hanya "bagaimana menulisnya".

---

## 8d. Menambah Track Baru (jika suatu saat perlu)

Struktur 16 track sudah final untuk saat ini. Kalau nanti perlu menambah:

1. Buat `src/data/tracks/<slug>.ts`, ekspor satu object `Track`
2. Isi metadata: `slug`, `title`, `description`, `hours`, `recommendedPrereqs`, `color`, `icon`, `order`
3. Daftarkan di `src/data/tracks/index.ts` (import + masukkan ke array `tracks`)
4. Kalau track ini bagian dari jalur karier, tambahkan slug-nya ke path terkait di `src/data/paths.ts`
5. Update `docs/kurikulum.md` agar silabus dan dokumen tetap sinkron
6. Jalankan verifikasi + build

---

## 9. Checklist Sebelum Menyatakan Satu Modul Selesai

- [ ] Semua `topics` modul tercakup oleh step atau kuis
- [ ] Setiap step punya `example` dengan output konkret
- [ ] `example` memakai kasus berbeda dari tugas
- [ ] Minimal satu step atau soal membahas **jebakan/bug nyata**
- [ ] Ada kaitan ke dunia kerja (code review / interview / lowongan)
- [ ] Pesan error tes membantu, bukan sekadar "salah"
- [ ] Kuis 3–6 soal, semua punya `explanation` yang menjelaskan kenapa
- [ ] `npx tsx scripts/verify-konten.ts` bersih
- [ ] `npx tsc --noEmit && npx eslint src` bersih
- [ ] `npm run build` sukses
- [ ] Dibuka manual di browser, contoh & preview tampil benar

## 9b. Checklist Satu Track Dinyatakan Selesai

Berbeda dari checklist modul — ini diperiksa setelah semua modul track itu terisi:

- [ ] Semua modul punya `items` (tidak ada yang kosong)
- [ ] Urutan step **naik bertahap**: step pertama modul 1 bisa dikerjakan orang yang belum tahu apa pun tentang track ini
- [ ] Tidak ada konsep yang dipakai sebelum diajarkan (cek: apakah step modul 3 memakai sintaks yang baru diajarkan di modul 5?)
- [ ] Istilah dipakai konsisten di seluruh track (jangan modul 1 "elemen", modul 4 "tag", untuk hal yang sama)
- [ ] Minimal satu step di track ini menyiapkan user untuk **proyek sertifikasi** yang tercantum di `docs/kurikulum.md`
- [ ] Jumlah step wajar dibanding estimasi jam di `docs/kurikulum.md` (patokan kasar: ±1 step per 45 menit materi)
- [ ] Kalau track ini prasyarat track lain, konsep yang dibutuhkan track berikutnya sudah benar-benar tercakup
- [ ] Baca ulang 3 step secara acak dengan sudut pandang pemula total — masih masuk akal tanpa penjelasan tambahan?

---

## 9c. Checklist Mereview Konten Buatan Orang Lain

Skrip verifikasi menangkap pelanggaran mekanis, tapi ada hal yang **hanya bisa dinilai manusia**. Saat memeriksa kontribusi orang lain (atau hasil AI), kerjakan urutan ini:

**Langkah 1 — otomatis (2 menit)**

```bash
npx tsx scripts/verify-konten.ts
npx tsx scripts/verify-konten.ts | grep '❌' | sed 's/:.*//' | sort | uniq -c | sort -rn
```

Kalau ada pelanggaran, **hentikan review di sini** dan kembalikan dulu. Tidak ada gunanya membaca 700 step yang masih melanggar aturan dasar.

**Langkah 2 — uji sebagai pemula (10 menit)**

- [ ] Buka 3 step acak di browser. Preview tampil normal — **tidak ada error merah**?
- [ ] Bisakah kamu menyelesaikan tugasnya **tanpa** membaca contoh? Kalau ya, instruksinya terlalu memberi tahu.
- [ ] Apakah `example.output` benar-benar menunjukkan hasil, atau cuma klaim?
- [ ] Coba tulis jawaban dengan **cara lain yang juga benar** — apakah tesnya menerima?

**Langkah 3 — periksa isi materinya (per modul)**

- [ ] Semua `topics` modul benar-benar tercakup? (Bandingkan daftar `topics` dengan judul step. Temuan audit: modul 1 Git punya 7 bab, 3 di antaranya — `git diff`, `git show`, unstage — tidak tersentuh sama sekali.)
- [ ] Apakah `description` modul sesuai isinya? (Temuan audit: modul PR workflow dideskripsikan "simulasi alur kerja", isinya cuma perintah push biasa.)
- [ ] Apakah judul step nyambung dengan tugasnya? (Temuan audit: step "Memberikan Code Review" tugasnya `git commit -m "docs: ..."` — tidak berhubungan.)
- [ ] Ada minimal satu jebakan/bug nyata yang diajarkan?
- [ ] Ada kaitan ke dunia kerja yang konkret, bukan basa-basi motivasi?

**Langkah 4 — keputusan**

Jangan menerima konten "karena sudah banyak". 700 step yang tidak mengajarkan apa pun lebih buruk daripada 100 step yang benar — karena yang salah harus dibaca ulang, diperbaiki, dan sementara itu tetap dipakai orang.

---

## 10. Catatan Khusus per Track

Hal-hal yang perlu diperhatikan saat mengisi track yang belum jadi:

**Git** — Preview tidak bisa menjalankan git. Fokus: menulis perintah yang benar, membaca output `git status`/`git log` (tampilkan di `example.output`), dan **simulasi alur PR** di modul 4 sebagai nilai jual utama. Jebakan wajib: `reset --hard` vs `revert`, merge conflict.

**TypeScript** — Preview tidak mengecek tipe. Fokus: membaca pesan error TS (tampilkan pesan error asli di `example.output`), dan pola tipe untuk data API. Jebakan wajib: `any` sebagai jalan pintas, `as` yang menyembunyikan bug.

**React** — Belum ada preview React. Tulis step sebagai penulisan komponen yang benar; `example.output` berupa deskripsi UI/perilaku. Jebakan wajib: state adalah snapshot, mutasi state langsung, dependency array `useEffect`, `key` pada list.

**SQL** — Fokus pada JOIN (materi interview tersering). `example.output` berupa tabel hasil kecil dalam bentuk teks. Jebakan wajib: `UPDATE` tanpa `WHERE`, `= NULL`, `GROUP BY` yang salah kolom.

**Laravel / Node** — Materi backend besar; jaga step tetap fokus pada satu berkas/konsep. Jebakan wajib: mass assignment, N+1 query, menyimpan password tanpa hash, CORS.

**Python / Analisis Data** — `example.output` berupa hasil print atau bentuk DataFrame ringkas. Jebakan wajib: indentasi, mutable default argument, `SettingWithCopyWarning` di pandas.

**AI-Assisted Development** — Modul 4 (review kode hasil AI) adalah inti diferensiasi: sediakan potongan kode ber-bug hasil AI dan minta user menemukannya. `example` harus mendemonstrasikan satu bug khas AI.

---

## 11. Referensi

Baca file berikut sebagai contoh kualitas yang dituju:

| File | Pelajari untuk |
|---|---|
| `src/data/tracks/html.ts` | Step paling dasar untuk pemula total, contoh dengan hasil visual |
| `src/data/tracks/css.ts` | Pemakaian `previewHtml` dan `loadTailwind`, contoh salah-vs-benar |
| `src/data/tracks/javascript.ts` | Contoh dengan output konsol persis, soal `prediksi-output`, materi jebakan |
| `docs/kurikulum.md` | Cakupan yang harus ditutup tiap modul |
| `docs/riset-pasar-kerja.md` | Dasar keputusan: kenapa materi ini yang dipilih |
| `src/lib/types.ts` | Definisi tipe yang otoritatif |

Kalau ragu tentang keputusan konten, pola di tiga file track yang sudah selesai adalah rujukan utama.

---

## 12. Yang Belum Ditangani Panduan Ini

Supaya jelas batasnya — hal berikut **sengaja** belum diatur dan perlu keputusan saat waktunya tiba:

| Hal | Status | Kapan perlu diputuskan |
|---|---|---|
| **Test runner sungguhan** | Belum ada. Tes masih regex, jadi ia memeriksa *bentuk kode*, bukan *hasil eksekusi*. | Sebelum track React/Node, karena di sana kebenaran hasil lebih penting daripada bentuk. |
| **Preview React/JSX** | Belum ada bundler di preview. | Sebelum mengisi track React — kalau tidak, seluruh track React hanya "menulis kode tanpa melihat hasil". |
| **Eksekusi SQL** | Belum ada. Bisa diselesaikan dengan SQLite WASM di browser. | Sebelum mengisi track SQL, kalau ingin kualitas setara HTML/CSS/JS. |
| **Proyek sertifikasi** | Struktur datanya belum ada (`Track` baru punya `modules`). Daftar proyek ada di `docs/kurikulum.md` tapi belum bisa dikerjakan di platform. | Setelah satu learning path tuntas. |
| **Konten video/gambar** | Semua materi masih teks + kode. | Opsional; teks lebih mudah dirawat dan diperbaiki. |
| **Review oleh praktisi** | Belum ada. Konten sekarang belum pernah diperiksa developer lain atau diuji ke pemula sungguhan. | Sebelum diluncurkan ke publik — ini gap paling penting yang tidak bisa ditutup oleh skrip verifikasi. |
| **Editor Monaco** | Masih `textarea`, tanpa syntax highlighting & autocomplete. | Kapan saja; memengaruhi kenyamanan, bukan kebenaran konten. |

**Catatan penting:** skrip verifikasi hanya memeriksa hal yang bisa diperiksa mesin — kelengkapan, konsistensi, dan apakah solusi lolos tesnya. Ia **tidak bisa** menilai apakah penjelasanmu benar secara teknis, apakah urutannya masuk akal bagi pemula, atau apakah contohnya membantu. Itu tetap tanggung jawab penulis, dan idealnya diuji ke pemula sungguhan.
