# Review Track HTML — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Seluruh temuan di bawah sudah ditangani. Track sekarang: **7 modul, 7 materi, 48 step, 7 kuis (38 soal)**, dan `verify:konten` bersih untuk track ini.

Berkas: `src/data/tracks/html.ts` (saat direview: 6 modul, 40 step, 6 kuis, **0 materi**).

Cara baca: aku membaca track ini sebagai orang yang **belum pernah menulis kode apa pun**. HTML adalah track pertama di learning path (`order: 1`, tanpa prasyarat), jadi pembaca di sini benar-benar mulai dari nol — bukan dari nol HTML, tapi dari nol komputer-untuk-ngoding.

---

## A. Yang bikin macet sejak menit pertama

### A1. Aku tidak pernah diberi tahu di mana menulis kodenya

Step pertama langsung menyuruh menulis `<h1>Halo Dunia</h1>` di panel editor. Selama **40 step** tidak ada satu pun yang menjelaskan:

- HTML itu apa, dan apa bedanya dengan CSS dan JavaScript
- bahwa kode itu tinggal di sebuah **berkas** bernama sesuatu`.html`
- pakai program apa menulisnya, dan bagaimana membukanya di browser
- kenapa berkas utama selalu bernama `index.html`

Ini gap terbesar seluruh track, dan khusus terasa di HTML karena inilah track pertama. Skrip verifikasi tidak menegurnya karena `html` masih ada di `instalasiAllowlist`.

### A2. Nol halaman `materi` di enam modul

Aturan keras `AGENTS.md` #1: setiap modul latihan wajib diawali minimal satu halaman BACA-DULU. Enam modul, nol materi. Efeknya: setiap modul dibuka dengan latihan, tanpa peta apa pun tentang apa yang sedang dipelajari dan kenapa.

### A3. Selama lima modul aku menulis potongan kode, lalu di modul 6 tiba-tiba disuruh menulis dokumen utuh

Latihan modul 1–5 hanya berisi cuplikan (`<h1>`, `<ul>`, `<form>`). Baru di step **html-6-6** aku diminta menulis `<!DOCTYPE html>`, `<head>`, dan `<body>`. Pertanyaan yang menggantung sejak step pertama — "jadi `<h1>` tadi sebenarnya diletakkan di mana?" — tidak pernah dijawab sampai hampir akhir track.

**Perbaikan A1–A3:** modul baru **"Persiapan & Alat Kerja"** (slug `persiapan-alat-kerja`, id `html-0-*`) berisi materi pembuka + 4 step + kuis 5 soal:

| Step | Isinya |
|---|---|
| `html-0-1` | menamai berkas halaman utama (`index.html`), dan kenapa nama itu istimewa |
| `html-0-2` | kerangka minimum: doctype, `html lang`, head, body |
| `html-0-3` | head vs body — memperbaiki dokumen yang isinya tertukar ruangan |
| `html-0-4` | potongan kode vs dokumen utuh, plus penjelasan apa yang sebenarnya kamu tulis di editor BiLearn |

Materinya menjelaskan HTML dari nol (termasuk bahwa ia **bukan** bahasa pemrograman), tiga lapisan HTML/CSS/JS, cara browser membaca berkas, tiga alat yang dibutuhkan beserta cara memasang dan membukanya, serta empat jebakan khas pemula total (menyimpan tanpa ekstensi `.html`, mengetik di Word, lupa menyimpan sebelum refresh). Track ini juga dikeluarkan dari `instalasiAllowlist` di `scripts/verify-konten.ts`.

---

## B. Tujuh halaman materi yang sebelumnya tidak ada

Satu per modul, ditulis dengan kedalaman yang sama seperti materi track TypeScript: pengertian dari nol, diagram teks, tabel rujukan, analogi dunia nyata, daftar jebakan, dan kaitan konkret ke dunia kerja.

| Materi | Yang ditutupnya |
|---|---|
| `html-0-m1` | apa itu HTML, tiga lapisan web, tiga alat kerja, alur berkas → browser |
| `html-1-m1` | anatomi elemen (diagram tag/isi/atribut), tag tunggal vs berpasangan, aturan nesting, atribut yang sering dipakai, heading sebagai daftar isi, **tabel memilih format gambar** |
| `html-2-m1` | peta landmark halaman nyata, tabel elemen + pertanyaan ujinya, **pohon keputusan article/section/div**, cara membedah HTML situs produksi dengan DevTools |
| `html-3-m1` | anatomi tabel, kenapa `<th>` bukan sekadar teks tebal, boolean attribute, kenapa autoplay diblokir |
| `html-4-m1` | diagram alur pengiriman formulir, kenapa `name` adalah kunci, tabel GET vs POST, diagram pasangan `for`/`id` |
| `html-5-m1` | **cara kerja screen reader** (tabel: pengguna menekan apa → mendengar apa), navigasi keyboard, angka kontras 4,5:1 & target sentuh 44px, aturan pertama ARIA, cara audit dengan Lighthouse/axe |
| `html-6-m1` | isi `<head>` wajib beserta akibat kalau dilupakan, kenapa `charset` paling atas, Open Graph, **struktur folder proyek statis**, W3C validator |

---

## C. Bab (`topics`) yang tidak tersentuh step mana pun

Skrip verifikasi tidak memeriksa ini, tapi checklist `panduan_isi.md` 9c memintanya. Sepuluh bab tercantum di `topics` tanpa pernah muncul di step atau kuis:

| Modul | Bab yang menganggur | Perbaikan |
|---|---|---|
| 1 | `target` pada link | penjelasan + contoh `html-1-4` diperluas (`target="_blank"` + `rel="noopener"`), plus **soal kuis baru** |
| 1 | format gambar web | tabel jpg/png/svg/webp/gif di materi modul 1 |
| 1 | struktur dokumen lengkap | modul 0 (step `html-0-2`) |
| 2 | blockquote, cite, code/pre | **step baru `html-2-7`** |
| 2 | anatomi halaman nyata | bagian "Membedah Halaman Nyata" di materi modul 2 |
| 4 | optgroup | contoh `html-4-4` diperluas |
| 4 | checkbox & pola `name` | contoh `html-4-5` diperluas (radio vs checkbox berdampingan) |
| 4 | `pattern` pada validasi | contoh `html-4-6` diperluas |
| 4 | autocomplete & inputmode | **step baru `html-4-8`** |
| 5 | `aria-hidden` | **step baru `html-5-6`** |
| 5 | kontras & target sentuh | materi modul 5 (angka WCAG konkret) |
| 5 | audit Lighthouse & axe | materi modul 5 |
| 6 | validasi HTML & error umum | **step baru `html-6-7`** (tiga bug: tag tak tertutup, `id` kembar, gambar tanpa `alt`) |
| 6 | struktur folder proyek | materi modul 6 + **soal kuis baru** |

---

## D. Penjelasan yang terlalu pendek untuk pemula

Skrip verifikasi meloloskan semuanya, tapi itu karena **cara ia menghitung kalimat bisa tertipu**: setiap titik di dalam `https://example.com` dan `index.html` dihitung sebagai akhir kalimat. Setelah dihitung dengan URL dan kode diabaikan, lima step berada di bawah standar 350 karakter:

| Step | Panjang | Yang hilang |
|---|---|---|
| `html-1-4` | **186 char** | ini tempat **pertama** kata "atribut" diperkenalkan di seluruh track, tapi hanya diberi satu kalimat. Tidak ada `target`, tidak ada jebakan |
| `html-6-5` | 279 char | tidak menjelaskan kenapa `class`/`id` salah untuk menyimpan data, dan tidak memperingatkan bahwa isi `data-*` terbaca siapa pun |
| `html-5-5` | 287 char | tidak menjelaskan kenapa urutan Tab mengikuti urutan HTML, dan bahwa `href` harus cocok persis dengan `id` |
| `html-5-2` | 302 char | tidak menjelaskan bahwa tingkat heading menyatakan hubungan induk-anak |
| `html-4-6` | 322 char | `pattern` disebut tanpa contoh, dan prinsip *never trust the client* hanya disinggung |

Kelimanya ditulis ulang memenuhi standar, masing-masing menjawab APA, KENAPA, KAPAN, dan jebakannya.

---

## E. Kejujuran soal panel preview

Beberapa latihan tidak mungkin menampilkan hasil, dan tidak ada satu pun yang mengatakannya — pemula wajar menyimpulkan jawabannya salah:

- **`html-6-1` sampai `html-6-4`** hanya menulis isi `<head>`, yang memang tidak pernah tampil. Panel preview **kosong**.
- **`html-1-9`, `html-3-4`, `html-3-6`, `html-6-4`** menyebut berkas yang tidak ada di preview (`../aset/foto.jpg`, `film.mp4`, `besar.jpg`, `/style.css`), jadi yang muncul ikon gambar rusak atau pemutar kosong.

Sekarang masing-masing diberi catatan jujur, dan materi modul 6 memuat satu paragraf khusus tentangnya.

---

## F. Temuan teknis

**F1. Tabel markdown tidak pernah dirender.** `MarkdownRenderer.tsx` mendukung heading, list, blockquote, dan code block — **tapi tidak tabel**. Baris `| Tipe | Isinya |` jatuh ke cabang paragraf dan bocor ke layar sebagai teks berisi pipa. Ini memengaruhi 7 halaman materi TypeScript yang sudah ada, dan akan memengaruhi materi HTML yang baru. → dukungan tabel ditambahkan (beserta `<thead>`, dan baris pemisah `|---|` diabaikan dengan benar), plus dukungan daftar bernomor `1.` yang sebelumnya juga jatuh ke paragraf. Diverifikasi dengan merender seluruh 14 halaman materi: **17 tabel jadi `<table>` sungguhan, 0 halaman masih membocorkan pipa.**

**F2. Larangan ditulis dengan negative lookahead.** `html-5-2` dan `html-5-4` memakai `^(?![\s\S]*...)`, sedangkan konvensi proyek (dan `src/lib/types.ts`) menyediakan `mustNotMatch`. Sudah diseragamkan.

**F3. Urutan id soal kuis modul 1 tidak runut** (`q6` tersisip sebelum soal sebelumnya). Dinomori ulang.

---

## G. Catatan yang sengaja tidak diubah

- **Tes hanya menerima kutip ganda** pada nilai atribut (`href="..."`, bukan `href='...'`). Keduanya sah di HTML, tapi seluruh contoh di track ini memakai kutip ganda, itu kebiasaan yang dominan di lapangan, dan pesan errornya selalu menampilkan bentuk yang diharapkan. Mengubah ±60 pattern demi gaya yang tidak dicontohkan di mana pun berisiko lebih besar daripada manfaatnya. Materi modul 1 kini menyebut kesepakatan ini secara eksplisit.
- **Contoh di `html-6-7` sengaja berisi HTML rusak** (`<h2>Menu<h2>`) karena step itu mengajarkan cara membaca laporan validator. Pemeriksa keseimbangan tag otomatis menandainya, dan itu memang yang diharapkan.

---

## Bukti verifikasi

| Pemeriksaan | Hasil |
|---|---|
| `verify:konten` (track HTML) | bersih, 0 pelanggaran — 7 materi, 48 step, 7 kuis |
| `npx tsc --noEmit` | bersih |
| `npx eslint src` | bersih |
| 33 kasus uji variasi jawaban (17 benar harus lulus, 16 keliru harus gagal) | 33/33 sesuai harapan |
| 48 `solution` vs tesnya sendiri, dan 48 `starterCode` | semua solution lulus, tidak ada starter yang lolos |
| 94 potongan HTML (`solution` + `example`) diperiksa keseimbangan & nesting tag-nya | 93 bersih, 1 rusak **dengan sengaja** (contoh validator di `html-6-7`) |
| 14 halaman materi dirender dengan `react-dom/server` | 17 tabel jadi `<table>`, 0 pipa bocor |
| `npm run build` | **belum diuji** — sandbox Linux tidak punya binary SWC arm64. Jalankan di Mac. |

---

## Sisa pekerjaan di track lain

`verify:konten` masih melaporkan **499 pelanggaran** di 11 track lain, dan hampir semuanya satu jenis: **modul tanpa halaman `materi`**. Untuk empat track yang diminta diperiksa, sisanya:

| Track | Modul tanpa materi | Pelanggaran lain |
|---|---|---|
| CSS | 9 | tidak ada |
| JavaScript | 10 | tidak ada |
| Git & GitHub | 5 | tidak ada |
