# Review Track TypeScript — Sudut Pandang Pemula Total

> **PEMBACAAN KEDUA (28 Juli 2026, setelah perbaikan Ronde 2) ada di bagian [Ronde 3](#ronde-3--pembacaan-kedua-setelah-perbaikan) di paling bawah.** Ia mencatat 13 titik yang masih membuat pemula berhenti, dan semuanya sudah ditangani.

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Seluruh temuan A–I di bawah sudah ditangani. Track sekarang: **7 modul, 7 materi, 46 step, 7 kuis (42 soal)**, dan `verify:konten` bersih untuk track ini. Ringkasan perubahan ada di bagian paling bawah dokumen. Dokumen ini disimpan sebagai catatan temuan — pola masalah yang sama kemungkinan besar ada di 11 track lain yang belum diperiksa.

Tanggal: 28 Juli 2026. Berkas: `src/data/tracks/typescript.ts` (saat direview: 37 step, 6 kuis, 6 modul, 0 materi).

Cara baca: aku membaca track ini seolah baru selesai track JavaScript dan belum pernah dengar kata "TypeScript". Setiap poin di bawah adalah tempat aku **berhenti dan tidak paham**, bukan sekadar pelanggaran skrip.

---

## A. Yang bikin macet sejak menit pertama

### A1. Tidak ada satu pun halaman `materi`

Nol dari 6 modul punya item `kind: "materi"`. Aturan keras `AGENTS.md` #1 mengharuskan minimal 1 halaman BACA-DULU per modul. Efeknya buat aku: begitu klik modul 1, aku langsung disuruh menulis kode padahal belum tahu TypeScript itu apa.

### A2. Tidak ada modul "Persiapan & Instalasi"

Aku tidak pernah diberi tahu:

- TypeScript itu dipasang bagaimana (`npm install -D typescript`)
- File `.ts` dijalankan pakai apa — `tsc`? `tsx`? Bisakah browser membacanya langsung?
- `tsconfig.json` itu muncul dari mana. Step ts-1-7 tiba-tiba menyuruh mengisi `"strict": true` di file yang belum pernah aku buat.
- "Kompilasi" itu apa. Kata ini dipakai di step 1-1 tanpa didefinisikan.

Ini bikin seluruh track terasa mengambang: aku menulis sintaks, tapi tidak tahu di mana menulisnya.

### A3. Latihan pertama tidak nyambung dengan judulnya, dan bertabrakan dengan step 3

- ts-1-1 judulnya "Kenapa TypeScript Ada?" — penjelasannya bagus (analogi spell-check). Tapi tugasnya menulis `const appName: string = "BiLearn"`, materi yang baru diajarkan di ts-1-2.
- Lebih membingungkan: ts-1-1 **memaksa** aku menulis `: string`, lalu ts-1-3 bilang "jangan tulis anotasi, biarkan TypeScript menebak". Sebagai pemula aku menyimpulkan platform ini tidak konsisten, bukan bahwa keduanya punya konteks berbeda.

---

## B. Konsep dipakai sebelum diajarkan / variabel hantu

Sembilan latihan menyuruh aku memakai sesuatu yang **tidak ada di editor** dan belum pernah diajarkan. `starterCode`-nya kosong, jadi aku tidak punya petunjuk sama sekali.

| Step | Yang tidak ada | Masalahnya buat pemula |
|---|---|---|
| ts-2-3 | `interface User` — instruksi bilang "asumsikan sudah ada" | Aku tidak tahu boleh mengarang atau tidak |
| ts-2-5 | `User` (untuk `extends`) | Sama |
| ts-5-1 | `User` (untuk `Partial<User>`) | Sama |
| ts-5-2 | `User` (untuk `Pick`) | Sama |
| ts-5-4 | fungsi `getData` | Aku disuruh mengekstrak tipe return fungsi yang tidak kelihatan |
| ts-5-5 | objek `config` | Sama |
| ts-4-5 | `useState` + React | React belum diajarkan. TypeScript ada **sebelum** React di learning path |
| ts-6-3 | `React.ChangeEvent` | Sama |
| ts-6-6 | `z` dari Zod | `import { z }` hanya ada di example, tidak di solution |

Perbaikan paling murah: isi `starterCode` dengan konteksnya (definisi `User`, `config`, `getData`), bukan komentar kosong.

Bonus: kuis modul 1 soal 3 menguji **default parameter** (`nama: string = "Dunia"`). Itu tidak pernah diajarkan di step mana pun modul 1 dan tidak ada di daftar `topics`.

---

## C. Penjelasan terlalu pendek — 30 dari 37 step melanggar

Aturan keras #3: minimal 4 kalimat ATAU 350 karakter. Hasil hitung otomatis: **30 step gagal**, mayoritas hanya 1–2 kalimat (88–170 karakter).

Yang lolos hanya 7: ts-1-1, ts-1-3, ts-2-1, ts-3-4 (437 char), ts-3-1 (menang tipis), dan beberapa lainnya. Menariknya, kelima step itu justru terasa paling enak dibaca — buktinya standar ini berdampak nyata, bukan formalitas.

Contoh yang bikin aku tidak paham:

- **ts-2-4 (Index Signature, 110 karakter):** "Jika nama key pada objek bersifat dinamis (misal dictionary), gunakan Index Signature." — Aku tidak tahu apa itu "key dinamis", apa itu "dictionary", dan kenapa aku butuh ini. Yang hilang: KAPAN dipakai (misal menyimpan terjemahan bahasa) dan jebakannya (`[key: string]: number` memaksa **semua** properti bertipe number).
- **ts-5-5 (`keyof` + `typeof`, 109 karakter):** dua operator abstrak dijelaskan dalam satu kalimat. `typeof` di level tipe **berbeda** dari `typeof` runtime yang baru dipelajari di ts-3-2 — perbedaan ini tidak disinggung sama sekali, padahal inilah sumber kebingungan paling umum.
- **ts-5-6 (Mapped Type, 108 karakter):** judulnya menjanjikan mapped type, isinya template literal type. `Capitalize<...>` muncul tiba-tiba tanpa dijelaskan itu apa.
- **ts-3-6 (`as const` & `satisfies`):** `satisfies` disebut di penjelasan dan di `topics`, tapi tidak ada di example, tidak ada di tugas, tidak ada di kuis. Aku cuma tahu kata itu ada.

---

## D. `example.output` yang bukan output (aturan keras #2)

Beberapa contoh menampilkan "hasil" yang tidak mungkin muncul dari kodenya:

| Step | Output tertulis | Kenyataannya |
|---|---|---|
| ts-1-2 | `Budi 25 ['Koding', 'Membaca']` | Kodenya **tidak punya `console.log`** sama sekali |
| ts-1-7 | isi tsconfig diulang | Bukan output, cuma menyalin kode |
| ts-4-6 | "getData<User>('/api/user') mengembalikan Promise<User>." | Klaim, bukan keluaran |
| ts-5-2 | "UserWithoutId hanya berisi properti name dan email." | Klaim; kodenya juga tidak punya `console.log` |
| ts-6-3 | "e.target.value otomatis memiliki autosuggestion..." | Klaim manfaat — persis anti-pattern #5 |
| ts-6-6 | "Validasi data runtime + Tipe statis TypeScript." | Klaim manfaat |
| ts-6-5 | `bimo123` | Datang dari elemen DOM yang tidak pernah ditampilkan |

Ini penting khusus untuk TypeScript karena catatan panduan bagian 10 bilang: fokus track ini adalah **menampilkan pesan error TS asli di `example.output`**. Yang benar-benar melakukan itu cuma ts-1-1 dan ts-6-1.

---

## E. Preview kemungkinan besar error merah

Aturan keras #5: `"jsx"` untuk TS/React, `"text"` untuk sisanya. Sebaran sekarang: 24 `"text"`, 13 `"jsx"` — dan pembagiannya tidak beraturan.

**Salah arah (JSON diberi `"jsx"` → Babel akan melempar SyntaxError):**

- ts-1-7 — solution `"strict": true`, `language: "jsx"`
- ts-6-2 — solution `"allowJs": true`, `language: "jsx"`

**Tidak konsisten (TypeScript murni tapi diberi `"text"`, jadi tidak dipreview):**
ts-1-1, ts-1-2, ts-1-5, ts-1-6, ts-2-1 s/d ts-2-6, ts-3-1, ts-3-3, ts-3-5, ts-4-2, ts-4-3, ts-4-6, ts-5-1 s/d ts-5-6, ts-6-1.

Buat aku sebagai pemula ini terasa acak: kadang panel preview hidup, kadang mati, untuk materi yang mirip-mirip. Perlu satu keputusan tegas — misalnya semua step TS pakai `"jsx"` kecuali JSON/CLI yang pakai `"text"`.

---

## F. Tes menolak jawaban yang sebenarnya benar

Sudah aku uji langsung dengan `new RegExp(...)`:

| Step | Jawaban benar yang **DITOLAK** |
|---|---|
| ts-3-3 | Gaya multi-baris `type State =\n  \| { status: "success"; ... }` — padahal itu gaya yang dicontohkan di example-nya sendiri |
| ts-2-6 | `interface ApiResponse { message: string; code: number; }` (urutan properti dibalik) |
| ts-5-2 | `Pick<User, 'email' \| 'name'>` (urutan key dibalik) |
| ts-6-3 | `(e: ChangeEvent<HTMLInputElement>)` tanpa prefix `React.` — bentuk umum kalau sudah `import { ChangeEvent }` |
| ts-4-2 | ada spasi antara `>` dan `(` |

Pola yang sama juga ada di ts-2-3, ts-2-4, ts-2-5, ts-4-3, ts-4-4 (semua mengunci urutan properti dan jarak kurung).

Dan sebaliknya, **tes yang terlalu longgar** — jawaban salah tetap lolos:

- **ts-3-5** instruksi minta empat arah, pattern cuma mengecek `"UP" | "DOWN"`. Jawaban dua arah lolos.
- **ts-3-3** pattern berhenti di `status: "success"`. `type State = { status: "success" }` — union-nya belum ada — dinyatakan benar.
- **ts-2-2** tes tidak memeriksa `name: string` sama sekali.

---

## G. Instruksi membocorkan jawaban (anti-pattern #1)

Sekitar 15 dari 37 step menuliskan solusinya utuh di instruksi, jadi aku bisa menyelesaikannya tanpa membaca apa pun:

ts-1-2, ts-2-2, ts-2-3, ts-2-4, ts-2-5, ts-3-1, ts-3-2, ts-3-4, ts-4-1, ts-4-2, ts-4-3, ts-4-4, ts-4-6, ts-6-5, dan yang paling parah **ts-6-6**: `"Buat skema Zod const ProductSchema = z.object({ id: z.number(), title: z.string() });"` — seluruh jawaban ada di kalimat perintah.

Bandingkan dengan step yang sudah diperbaiki (ts-1-5, ts-2-1, ts-3-3, ts-5-1, ts-5-2) yang memberi skenario dulu. Sisanya perlu diseragamkan ke gaya itu.

---

## H. `topics` yang tidak tersentuh

| Modul | Bab di `topics` | Status |
|---|---|---|
| 3 | `instanceof` | Cuma disebut di judul ts-3-2, tidak pernah dicontohkan |
| 3 | `satisfies` | Disebut sekali di penjelasan, tanpa contoh/tugas |
| 5 | `Parameters`, `Awaited` | Ada di judul ts-5-4, example cuma pakai `ReturnType` |
| 5 | Mapped type | Tidak pernah muncul (`{ [K in keyof T]: ... }` nihil) |
| 2 | "Memodelkan respons API nyata dari dokumentasi" | ts-2-6 cuma `{ code: number; message: string }` — tidak ada dokumentasi API nyata |

Dan penjelasan ts-2-6 menyebut bentuk generik `{ status: boolean, data: T }` padahal generics baru diajarkan di modul 4. Aku membaca `T` dan tidak tahu itu apa.

---

## I. Kesalahan kecil yang tetap mengganggu

- **ts-1-6:** "Parameter fungsi **wajib** diberi anotasi tipe." Tidak benar — ada contextual typing dan default value. Sebagai pemula aku akan menghafal aturan yang salah.
- **ts-1-5:** menjanjikan mencegah `Cannot read property of undefined`, tapi example-nya cuma menampilkan kasus yang berhasil. Jebakannya tidak pernah aku lihat.
- **ts-3-1:** typo "memungikan" → "memungkinkan".
- **Kuis modul 2 soal 3:** "efek dari memberikan **pengabjadan** `readonly`" — kata "pengabjadan" tidak ada artinya. Maksudnya "penanda"/"modifier".
- **Ukuran track:** `hours: 40` tapi cuma 37 step. Patokan panduan ±1 step per 45 menit → seharusnya sekitar 53 step.

---

## Ringkasan prioritas perbaikan

1. Tambah modul "Persiapan & Instalasi" + 1 halaman `materi` per modul (6 halaman). — *aturan keras, dan ini yang paling terasa buat pemula*
2. Isi `starterCode` untuk 9 step bervariabel-hantu (bagian B).
3. Perluas 30 explanation ke standar 4 kalimat/350 karakter, prioritas modul 5 dan 6 yang paling abstrak.
4. Perbaiki `language` — JSON jangan `"jsx"`, dan seragamkan step TS.
5. Longgarkan 5 regex yang menolak jawaban benar; ketatkan 3 yang terlalu longgar.
6. Tulis ulang 15 instruksi yang membocorkan jawaban.
7. Ganti 7 `example.output` yang berisi klaim dengan output nyata, khususnya pesan error TS asli.
8. Tutup bab yang belum tersentuh: `instanceof`, `satisfies`, `Parameters`, `Awaited`, mapped type.

---

## Apa yang Sudah Dikerjakan (28 Juli 2026)

**Struktur**

- Modul baru **"Persiapan & Instalasi"** (slug `persiapan-instalasi`, id `ts-0-*`): materi pembuka + 6 step (pasang TypeScript, `tsc --init`, kompilasi, jalankan hasilnya & lihat tipe menghilang, baca error `tsc` pertama, `tsx`) + kuis 5 soal. Track ini juga dikeluarkan dari `instalasiAllowlist` di `scripts/verify-konten.ts`.
- **7 halaman `materi`** — satu per modul, masing-masing memuat pengertian dari nol, diagram teks, analogi, tabel rujukan, daftar jebakan, dan kaitan ke dunia kerja.
- **3 step baru**: `ts-3-3` (narrowing `in` & `instanceof`), `ts-3-8` (`satisfies`), `ts-5-6` (mapped type, dipisah dari template literal type di `ts-5-7`).
- Modul 3 dinomori ulang agar urutan id kembali runut setelah penyisipan.

**Isi**

- Seluruh **46 explanation** ditulis ulang memenuhi standar 4 kalimat / 350 karakter, masing-masing menjawab APA, KENAPA, KAPAN, dan jebakannya.
- **9 step bervariabel-hantu** kini punya `starterCode` berisi konteks nyata (`interface User`, `const config`, `function getData`, `import { useState }`, `import { z }`), jadi tidak ada lagi tugas yang menyuruh memakai sesuatu yang tak terlihat.
- Seluruh `example.output` yang tadinya klaim manfaat diganti keluaran nyata — termasuk **pesan error `tsc` asli** (`TS2322`, `TS2345`, `TS18047`, `TS6504`, `TS18048`) sesuai catatan khusus track TypeScript di `panduan_isi.md` bagian 10.
- Semua instruksi diubah menjadi skenario; tidak ada lagi yang memuat jawaban utuh.
- Kontradiksi ts-1-1 vs ts-1-3 dijelaskan langsung di materi modul 1 ("kapan menulis anotasi, kapan membiarkan inference").
- Perbaikan fakta: klaim "parameter fungsi **wajib** dianotasi" diluruskan (yang benar: ditolak `noImplicitAny`, tapi contextual typing tetap ada); typo "memungikan" dan "pengabjadan" dihapus.
- Kuis: soal default-parameter yang tidak pernah diajarkan diganti; total naik dari 30 → 42 soal, tiap modul 5–7 soal, semua punya `explanation` yang juga menjelaskan kenapa distraktornya menggoda.

**Teknis**

- `language`: JSON dan perintah terminal → `"text"` (8 step); seluruh kode TypeScript → `"jsx"` (38 step) agar dikompilasi Babel dan sintaksnya benar-benar tervalidasi di preview.
- Regex tes dilonggarkan untuk menerima variasi yang sama benarnya (urutan properti, `Array<T>` vs `T[]`, arrow function, `npm i -D`, `ChangeEvent` tanpa awalan `React.`), dan diperketat untuk yang tadinya bisa lolos setengah jadi (`ts-3-4`, `ts-3-6`).
- Larangan ditulis dengan `mustNotMatch` alih-alih negative lookahead, sesuai `src/lib/types.ts`.

**Bukti verifikasi**

| Pemeriksaan | Hasil |
|---|---|
| `verify:konten` (khusus track ini) | bersih, 0 pelanggaran |
| `npx tsc --noEmit` | bersih |
| `npx eslint src` | bersih |
| 36 kasus uji variasi jawaban (18 benar harus lulus, 18 keliru harus gagal) | semua sesuai harapan |
| 114 potongan kode step `jsx` dikompilasi Babel (meniru `StepView.tsx`) | semua lolos, tidak ada error merah di preview |
| `npm run build` | **belum diuji** — sandbox tidak punya binary SWC/lightningcss arm64 Linux. Perlu dijalankan di Mac. |

---

# Ronde 3 — Pembacaan Kedua Setelah Perbaikan

Tanggal: 28 Juli 2026. Dibaca ulang dari nol dengan asumsi yang sama: baru selesai track JavaScript, belum pernah dengar TypeScript, belum pernah membuka terminal. Temuan Ronde 2 sudah tidak ada lagi. Yang di bawah ini adalah lapisan berikutnya — lebih halus, tapi semuanya titik nyata tempat pemula berhenti.

## Yang membuat macet

**1. Modul 0 mengasumsikan literasi terminal yang belum pernah diajarkan.**
Track JavaScript hanya menyebut npm sekali, di daftar `topics` modul 5 — tidak ada satu step pun tentang terminal, npm, atau `package.json`. Tapi step pertama TypeScript langsung berkata "folder proyek kosong yang sudah berisi `package.json`" dan meminta menulis perintah npm. Aku tidak tahu di mana mengetiknya, apa itu npm, apa itu `-D`, dan dari mana `package.json` muncul.
→ Ditambahkan bagian **"Sebelum Mulai: Empat Kata dari Dunia Terminal"** di materi modul 0: terminal (dan cara membukanya di VS Code), npm, `package.json`, `npx`, plus penjelasan devDependency dan urutan `npm init -y` untuk yang belum punya proyek.

**2. ts-1-1 menolak jawaban yang justru diajarkan dua step kemudian.**
`const hargaTotal = 50000;` tanpa anotasi itu benar — dan di ts-1-3 malah dianjurkan — tapi tesnya memaksa `: number`. Materi sudah menjelaskan kenapa keduanya masuk akal, tapi tesnya belum ikut.
→ Pattern dilonggarkan menjadi `const hargaTotal (: number )?= 50000`, instruksi menyatakan terang-terangan bahwa keduanya diterima, dan pesan errornya diubah agar tidak lagi memerintahkan satu bentuk saja.

**3. Bentuk `interface User` berbeda antar modul.**
Modul 2 memberi `User { nama, email }`, modul 5 memberi `User { id, name, email }`. Sebagai pemula aku menganggap itu entitas yang sama dan bingung mana yang benar.
→ Disatukan menjadi `{ id: number; name: string; email: string }` di ts-2-3 dan ts-2-5 (starterCode dan solution). Sekalian: `mustNotMatch` di ts-2-5 kini juga menangkap penyalinan `name`, bukan cuma `email`.

**4. Tiga konsep dipakai sebelum diajarkan.**
Ini pelanggaran checklist 9b panduan yang lolos dari skrip verifikasi:

| Di mana | Yang dipakai lebih awal | Diajarkan di | Perbaikan |
|---|---|---|---|
| ts-3-8 (modul 3) | `Record<string, string>` | modul 5 | diganti index signature `{ [key: string]: string }` — yang memang sudah diajarkan di modul 2 |
| ts-3-7 (modul 3) | `keyof typeof` + indexed access | modul 5 | dibiarkan (itu pola nyatanya) tapi diberi komentar gloss + catatan bahwa ia dibedah di modul 5 |
| ts-4-6 (modul 4) | `as Promise<T>` | modul 6 | dijelaskan singkat di `note`, dengan penunjuk ke modul terakhir |

**5. Dua istilah dipakai tanpa pernah didefinisikan.**
`never` muncul pertama di penjelasan ts-2-5 dan di distraktor kuis modul 2; `tuple` muncul di kuis modul 2 dan ts-5-4. Keduanya tidak pernah dijelaskan di track ini.
→ Masing-masing kini didefinisikan sebaris di tempat pertama muncul (`never` = "tidak ada satu pun nilai yang sah di sini"; tuple = "array berpanjang tetap yang tipe tiap posisinya ditentukan").

**6. Modul 4 dan 6 memakai React, dan penjelasannya menganggap aku sudah tahu React.**
`starterCode` sudah diperbaiki di Ronde 2, tapi aku masih membaca `function Penghitung()` yang me-return `<p>` tanpa tahu apa itu komponen, JSX, atau state — padahal React ada **setelah** TypeScript di learning path.
→ ts-4-5 kini dibuka dengan pernyataan tegas bahwa React belum dipelajari dan tidak perlu dipahami di sini, plus tiga definisi singkat (komponen, JSX, `useState`). Catatan `{nama.length}` juga dijelaskan sebagai cara JSX menyelipkan nilai. ts-6-3 diberi keterangan dua gaya penulisan tipe event (`React.ChangeEvent` vs `import { ChangeEvent }`).

## Kesalahan faktual yang ketemu saat diverifikasi dengan `tsc` sungguhan

**7. Nomor baris di pesan error ts-0-5 salah satu baris.** Komentar menyebut `index.ts:7:25`, padahal pemanggilan fungsinya ada di baris 8 pada `starterCode`. Pemula yang menghitung baris akan bingung. → diperbaiki jadi `8:25` (kolomnya sendiri sudah tepat, sudah dicek dengan `tsc`).

**8. Pesan error di `starterCode` ts-6-1 mustahil muncul dari kodenya.** Latihannya mengajarkan "baca baris paling bawah", tapi kodenya (`const p: Produk = { id: 1, harga: 50000 }` — object literal langsung) membuat tsc mencetak error **satu baris**, bukan tiga baris bertingkat seperti yang dikutip. Error bertingkat baru muncul kalau nilainya lewat variabel perantara.
→ `starterCode` dan `solution` diubah memakai variabel perantara `dariForm`, lalu dibuktikan dengan `tsc`: keluarannya sekarang benar-benar tiga baris bertingkat persis seperti yang dikutip.

**9. Diperiksa, ternyata sudah benar:** `Capitalize<string>` di ts-5-7 memang menolak `"getname"` (dikonfirmasi `tsc`, error TS2322), klaim "`extends` menolak bentrokan sedangkan `&` menghasilkan `never`" benar (TS2430), dan pesan `TS18047`, `TS2345`, `TS2322` di seluruh `example.output` cocok dengan keluaran compiler sungguhan.

## Kejujuran soal panel preview

**10. Sebagian besar latihan modul 5 tidak mungkin menampilkan apa pun** — isinya cuma deklarasi tipe. Panel preview lalu menampilkan pesan yang menyebut "komponen", istilah yang belum berarti apa-apa sebelum React, sehingga terasa seperti latihanku gagal. → materi modul 5 sekarang memuat bagian singkat yang menjelaskan hal ini, dan pesan di `StepView.tsx` diubah agar menyebut penyebab sebenarnya (tipe hilang saat kompilasi) sebelum menyebut komponen.

**11. ts-6-5 dan ts-6-6 memang tidak bisa jalan di preview** (elemen `#username` tidak ada; paket `zod` tidak tersedia). Pesan lamanya berbunyi "wajar untuk cuplikan kode di dalam komponen" — padahal tidak ada komponen di situ. → pesannya digeneralkan ("bergantung pada hal di luar preview: elemen HTML, library, atau jaringan"), dan kedua step diberi catatan jujur bahwa panel tidak akan menjalankannya.

**12. Pesan error Zod bergantung versi.** `"Expected number, received string"` adalah bentuk Zod 3; versi lain berbeda kalimat. → ditambahkan catatan bahwa kalimat persisnya bisa berbeda, dan yang penting adalah isinya.

## Perbaikan kecil lain

**13.** `void` di ts-1-6 dijelaskan dengan "berbeda dari `undefined` yang berarti mengembalikan nilai kosong" — kalimat yang tidak menambah pemahaman apa pun. Diganti dengan perbedaan yang bisa dipakai: saat dijalankan fungsi `void` **tetap** menghasilkan `undefined`; bedanya `void` tidak menuntut adanya `return`. Ditambahkan juga keterangan `outDir` di ts-1-7 (opsi itu ada di editor tanpa pernah dijelaskan, padahal di modul 0 hasil kompilasi muncul di folder yang sama), dan regex ts-6-5 dilonggarkan agar menerima penegasan langsung pada `document.getElementById("username")`.

## Bukti verifikasi Ronde 3

| Pemeriksaan | Hasil |
|---|---|
| `verify:konten` (track TypeScript) | bersih, 0 pelanggaran — 7 materi, 46 step, 7 kuis |
| `npx tsc --noEmit` (proyek) | bersih |
| `npx eslint src` | bersih |
| 38 `solution` step `jsx` di-type-check `tsc --strict` sebagai berkas `.tsx` nyata | semua bersih, 0 error |
| 3 `starterCode` yang sengaja salah diuji `tsc` | menghasilkan TS2345, TS2322, TS18047 persis seperti yang dikutip konten |
| 40 kasus uji variasi jawaban (22 benar harus lulus, 18 keliru harus gagal) | 40/40 sesuai harapan |
| 46 `solution` vs tesnya sendiri, dan 46 `starterCode` | semua solution lulus, tidak ada starter yang lolos |
| 114 potongan kode step `jsx` dikompilasi Babel (meniru `StepView.tsx`) | 0 gagal — tidak ada error merah di preview |
| `npm run build` | **belum diuji** — sandbox Linux tidak punya binary SWC arm64. Jalankan di Mac. |
