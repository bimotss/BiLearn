# Review Track CSS — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Seluruh temuan di bawah sudah ditangani. Track sekarang: **10 modul, 10 materi, 60 step, 10 kuis (54 soal)**, dan `verify:konten` bersih untuk track ini.

Berkas: `src/data/tracks/css.ts` (saat direview: 9 modul, 53 step, 9 kuis, **0 materi**).

Cara baca: aku membaca track ini sebagai orang yang baru menyelesaikan track HTML — jadi tahu apa itu elemen dan atribut, tapi belum pernah menulis satu baris CSS, belum pernah membuka DevTools, dan belum tahu bahwa CSS bisa gagal tanpa memberi tahu.

---

## A. Yang bikin macet sejak menit pertama

### A1. Tidak ada satu pun halaman `materi` di sembilan modul

Aturan keras `AGENTS.md` #1. Efeknya paling terasa di CSS karena modul-modulnya besar: aku masuk ke modul Flexbox dan langsung disuruh menulis `display: flex`, tanpa pernah diberi peta mental main axis vs cross axis — padahal itulah satu-satunya hal yang benar-benar perlu dipahami di seluruh modul itu.

### A2. Modul pertama bukan modul persiapan, dan CSS punya jenis kegagalan yang tidak pernah dijelaskan

Ini temuan terpenting seluruh review. **CSS gagal dalam diam:** salah tulis nama properti, lupa satuan, atau lupa titik koma tidak memunculkan satu pun pesan error. Browser hanya mengabaikan baris itu — dan kalau titik komanya yang hilang, baris **setelahnya** ikut jatuh.

Sebagai pemula, ini bentuk frustrasi yang berbeda dari HTML. Di HTML tampilan salah masih memberi petunjuk; di CSS kodemu tampak sempurna dan sama sekali tidak terjadi apa-apa. Track ini tidak pernah menjelaskannya, dan juga tidak pernah menyebut **DevTools** — padahal itu satu-satunya alat untuk menjawab "aturan mana yang sebenarnya berlaku di elemen ini".

**Perbaikan A1–A2:** modul baru **"Persiapan & Alat Kerja"** (slug `persiapan-alat-kerja`, id `css-0-*`) berisi materi pembuka + 4 step + kuis 5 soal:

| Step | Isinya |
|---|---|
| `css-0-1` | menautkan berkas CSS eksternal (dipindahkan dari `css-1-0`, ditulis ulang lebih dalam) |
| `css-0-2` | **CSS yang diabaikan diam-diam** — memperbaiki tiga kekeliruan: nama properti salah tulis, nilai tanpa satuan, deklarasi belum ditutup |
| `css-0-3` | **selector yang tidak cocok** — membedakan "aturan dicoret" (kalah bersaing) dari "aturan tidak muncul sama sekali" (selector tidak cocok) di DevTools |
| `css-0-4` | **gaya bawaan browser** — dari mana jarak yang tidak kamu tulis berasal |

Materinya memuat tabel pembacaan panel DevTools, tiga cara CSS menempel, dan lima jebakan khas pemula. Track ini juga dikeluarkan dari `instalasiAllowlist` di `scripts/verify-konten.ts`.

> Konsekuensi yang perlu dicatat: step `css-1-0` dipindahkan ke modul 0 dan berubah id menjadi `css-0-1`, sehingga satu baris `topics` di modul 1 ("Tiga cara memasang CSS…") ikut dipindahkan ke modul 0 agar daftar bab tetap jujur terhadap isinya.

---

## B. Sepuluh halaman materi yang sebelumnya tidak ada

| Materi | Yang ditutupnya |
|---|---|
| `css-0-m1` | cara CSS bekerja, tiga cara memasang, **CSS gagal dalam diam**, tabel membaca DevTools |
| `css-1-m1` | **urutan penentuan pemenang cascade** (important → specificity → urutan), tabel skor specificity, kenapa `!important` adalah utang, diagram box model, **margin collapse**, tabel satuan px/rem/em/%/vw/ch |
| `css-2-m1` | tabel `display`, lima nilai `position` beserta acuannya, diagram **stacking context**, **float & clear + pola clearfix** untuk membaca kode lama, efek samping `overflow` terhadap `sticky` |
| `css-3-m1` | **diagram dua sumbu** row vs column, tabel properti container vs item, membaca `flex: 1 1 200px`, kenapa `gap` menggantikan margin, **empat pola nyata** (navbar, media object, sticky footer, kartu responsif) |
| `css-4-m1` | model **garis** grid (`1 / 3`, `1 / -1`), diagram **auto-fit vs auto-fill**, **implicit grid & grid-auto-flow: dense** beserta peringatan urutan Tab, tabel Grid vs Flexbox |
| `css-5-m1` | kenapa meta viewport menentukan segalanya, alur mobile-first, memilih breakpoint dari konten, **container query**, **srcset & sizes**, cara menguji di DevTools dan perangkat nyata |
| `css-6-m1` | tabel nilai tipografi yang wajar, **FOUT vs FOIT & `font-display: swap`**, **letter-spacing**, resep bayangan lembut, **`filter: drop-shadow` vs `box-shadow`**, **tiga jenis gradient**, batas durasi animasi |
| `css-7-m1` | custom property vs variabel Sass, tema lokal, **nesting native beserta aturan `&`**, tabel `:has()`/`:is()`/`:where()` + specificity, **`@layer`**, **logical properties** dan alasannya |
| `css-8-m1` | filosofi utility-first beserta harganya, **kamus terjemahan CSS → Tailwind**, rumus skala spacing, variant responsive/state/dark, **kustomisasi tema v4 (`@theme`) dan v3 (`extend`)**, **kapan `@apply`**, lima anti-pattern |
| `css-9-m1` | cara membaca panel Figma, peringatan jangan menyalin CSS ekspor, pemetaan auto layout → Flexbox, ekstraksi token, tabel keadaan yang tidak digambar desainer, **lima pertanyaan konkret untuk desainer**, **workflow review lima langkah**, arti realistis "pixel-perfect" |

---

## C. Bab (`topics`) yang tidak tersentuh step mana pun

Empat belas bab tercantum di `topics` tanpa pernah muncul di step atau kuis. Empat ditutup dengan **step baru**, empat dengan **soal kuis baru**, sisanya dibahas tuntas di materi:

| Modul | Bab yang menganggur | Perbaikan |
|---|---|---|
| 2 | float & clear | **step baru `css-2-7`** (memperbaiki induk yang kolaps dengan clearfix) |
| 3 | align-self & order | **step baru `css-3-7`** (+ peringatan urutan Tab keyboard) |
| 6 | Gradient: linear, radial, conic | **step baru `css-6-8`** |
| 7 | Nesting native | **step baru `css-7-7`** (termasuk jebakan `&` pada `:hover`) |
| 4 | auto-fit vs auto-fill | **soal kuis baru** `css-4-kuis/q6` + diagram di materi |
| 5 | Responsive image: srcset & sizes | **soal kuis baru** `css-5-kuis/q6` + contoh lengkap di materi |
| 5 | Container query | **soal kuis baru** `css-5-kuis/q7` + contoh di materi |
| 7 | @layer | **soal kuis baru** `css-7-kuis/q6` |
| 8 | Kustomisasi theme & design token | **soal kuis baru** `css-8-kuis/q6` (jebakan `extend` pada v3) |
| 1 | Margin collapse | materi modul 1 (sebelumnya hanya ada di satu soal kuis) |
| 4 | Implicit grid & grid-auto-flow | materi modul 4 |
| 6 | font loading (FOUT/FOIT), letter-spacing, drop-shadow | materi modul 6 |
| 7 | logical properties | materi modul 7 |
| 8 | Anti-pattern Tailwind, @apply | materi modul 8 (`@apply` sebelumnya hanya ada di kuis) |
| 9 | Komunikasi dengan desainer, workflow review | materi modul 9 |
| 3 | Pola nyata: sticky footer, media object | materi modul 3 (empat pola siap pakai) |

---

## D. Penjelasan yang terlalu pendek untuk pemula

Skrip verifikasi meloloskan semuanya karena penghitung kalimatnya tertipu titik di dalam kode dan URL. Setelah dihitung ulang dengan kode diabaikan, empat step berada di bawah standar:

| Step | Panjang | Yang hilang |
|---|---|---|
| `css-1-2` | **231 char** | ini perkenalan pertama dengan class — tapi tidak menyebut bahwa titik hanya ada di sisi CSS, tidak menyebut beberapa class dipisah spasi, dan tidak menyebut nama class bersifat sensitif tanda |
| `css-7-3` | 278 char | `:has()` dijelaskan tanpa menyebut specificity-nya dan tanpa contoh selain form invalid |
| `css-4-1` | 288 char | tidak menjelaskan bahwa `grid-template-columns` dipasang di container, dan kenapa `fr` mengalahkan persen justru saat ada `gap` |
| `css-6-2` | 320 char | tidak memberi patokan angka (1.5–1.7 vs 1.1–1.2) dan tidak menjelaskan `65ch` yang justru diminta di tugasnya |

Keempatnya ditulis ulang memenuhi standar, masing-masing menjawab APA, KENAPA, KAPAN, dan jebakannya.

---

## E. Tes yang menolak jawaban yang sama-sama benar

Diuji langsung dengan `new RegExp(...)`:

| Step | Jawaban benar yang **ditolak** | Perbaikan |
|---|---|---|
| `css-1-8` | `rgba(0, 0, 0, 0.5)` — bentuk lama yang masih paling umum dipakai | pattern menerima `rgba?(` |
| `css-1-2` | `background: yellow` sebagai ganti `background-color: yellow` | pattern menerima `background(-color)?` |

Selain itu, larangan di `css-1-3` masih ditulis dengan negative lookahead `^(?![\s\S]*#judul)`; sudah diseragamkan ke `mustNotMatch` sesuai konvensi `src/lib/types.ts`.

---

## F. Kejujuran soal panel preview

Dua step punya hasil yang bergantung pada hal di luar panel, dan tidak ada yang mengatakannya:

- **`css-7-5` (dark mode)** hanya berubah kalau tema perangkat pengguna memang sedang gelap. Di sistem bertema terang, panel tampak tidak berubah meski jawabannya benar.
- **`css-8-*` (Tailwind)** memuat Tailwind dari CDN. Tanpa koneksi internet, seluruh kelasnya tidak berpengaruh apa pun.

Keduanya kini diberi catatan yang menyatakan bahwa tesnya tetap lulus.

---

## G. Catatan yang sengaja tidak diubah

- **`hours: 70` dengan 60 step + 10 materi.** Patokan panduan (±1 step per 45 menit) menyiratkan sekitar 93 item untuk 70 jam. Track ini masih di bawahnya, tapi menambah 30 step lagi bukan pekerjaan review — itu keputusan kurikulum yang perlu dibahas terpisah. Angka `hours` sendiri mungkin yang perlu ditinjau.
- **Contoh di `css-0-2` sengaja berisi CSS rusak** (titik koma hilang), karena step itu mengajarkan cara mengenali kegagalan diam CSS. Pemeriksa postcss otomatis menandainya, dan itu memang yang diharapkan.

---

## Bukti verifikasi

| Pemeriksaan | Hasil |
|---|---|
| `verify:konten` (track CSS) | bersih, 0 pelanggaran — 10 materi, 60 step, 10 kuis |
| `npx tsc --noEmit` | bersih |
| `npx eslint src` | bersih |
| 27 kasus uji variasi jawaban (14 benar harus lulus, 13 keliru harus gagal) | 27/27 sesuai harapan |
| 60 `solution` vs tesnya sendiri, dan 60 `starterCode` | semua solution lulus, tidak ada starter yang lolos |
| 157 potongan CSS (`solution` + `example` + `starterCode`) diparse **postcss** | 155 bersih, 2 rusak **dengan sengaja** (contoh kegagalan diam di `css-0-2`) |
| Semua step `language: "css"` punya `previewHtml` | ya, tidak ada yang kosong |
| 24 halaman materi dirender dengan `react-dom/server` | 33 tabel jadi `<table>`, 0 pipa bocor |
| `npm run build` | **belum diuji** — sandbox Linux tidak punya binary SWC arm64. Jalankan di Mac. |

---

## Sisa pekerjaan

`verify:konten` kini melaporkan **490 pelanggaran**, seluruhnya di 10 track yang belum diperiksa. Untuk dua track terakhir yang kamu minta:

| Track | Modul tanpa materi | Pelanggaran lain |
|---|---|---|
| JavaScript | 10 | tidak ada |
| Git & GitHub | 5 | tidak ada |
