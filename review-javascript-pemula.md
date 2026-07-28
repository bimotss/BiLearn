# Review Track JavaScript — Sudut Pandang Pemula Total

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Track sekarang: **10 modul, 10 materi, 64 step, 10 kuis (56 soal)**, dan `verify:konten` bersih untuk track ini.

Berkas: `src/data/tracks/javascript.ts` (saat direview: 10 modul, 59 step, 10 kuis, **0 materi**).

Cara baca: aku membaca track ini sebagai orang yang baru selesai HTML dan CSS — jadi paham elemen, selector, dan box model, tapi **belum pernah menulis satu baris logika**. Belum tahu apa itu fungsi, belum pernah melihat `undefined`, dan belum pernah membuka tab Console.

---

## A. Yang bikin macet sejak menit pertama

### A1. Nol halaman `materi` di sepuluh modul

Aturan keras `AGENTS.md` #1, dan di JavaScript akibatnya paling terasa karena modulnya paling banyak. Contoh paling jelas: aku masuk modul Asynchronous dan langsung disuruh menulis `setTimeout`, tanpa pernah diberi tahu bahwa JavaScript berjalan di **satu jalur** — padahal itulah satu-satunya sebab seluruh modul itu ada.

Sepuluh halaman materi baru mengisi peta mental yang hilang:

| Materi | Peta mental yang diberikan |
|---|---|
| `js-1-m1` | tiga bahan dasar (nilai, keputusan, pengulangan), tabel tipe data, **type coercion**, enam nilai falsy, tiga bentuk keputusan & pengulangan |
| `js-2-m1` | diagram parameter → `return`, beda `return` vs `console.log`, tabel scope, **hoisting & temporal dead zone**, closure tanpa mistis, callback, pure function |
| `js-3-m1` | **diagram reference vs value**, tabel method array beserta kolom "memutasi?", destructuring, **JSON**, **Map & Set** |
| `js-4-m1` | diagram HTML → DOM → tampilan, tiga langkah baku, bahaya `innerHTML` (XSS), event bubbling & delegation, **dataset** |
| `js-5-m1` | tabel `\|\|` vs `??`, spread vs rest, computed key, method modern (`at`, `flat`, `structuredClone`, `toSorted`), module, **iterator & generator**, kenapa npm dan bundler ada |
| `js-6-m1` | **event loop dalam satu gambar**, tiga generasi penulisan async, tiga keadaan Promise, `fetch` beserta jebakan 404, tabel `all`/`allSettled`/`race`, pola tiga keadaan UI |
| `js-7-m1` | tabel tiga jenis error, **cara membaca stack trace**, `throw` & bahaya `catch` kosong, console di luar `log`, **breakpoint & step debugging**, **Network tab**, reproduce → isolate → fix |
| `js-8-m1` | OOP vs functional, getter/setter/static/field privat, tabel aturan `this`, **prototype chain**, immutability & kaitannya ke React, higher-order function |
| `js-9-m1` | batas `localStorage` (5 MB, sinkron, tidak aman), `URLSearchParams`, **History API**, tabel timer & `requestAnimationFrame`, debounce vs throttle, **IntersectionObserver**, FormData/Clipboard/Geolocation beserta izinnya |
| `js-10-m1` | kenapa test ada (regresi & refactor), anatomi test, Arrange–Act–Assert, tabel matcher, **kenapa `toBe` gagal untuk object**, daftar edge case, **mock `vi.fn` dan batasnya**, TDD ringan |

### A2. Modul pertama bukan modul persiapan

Berbeda dari HTML, CSS, dan TypeScript, di sini aku **tidak** membuat modul persiapan baru — karena JavaScript di BiLearn dijalankan langsung di panel preview, tanpa pemasangan apa pun. Yang dibutuhkan pemula bukan langkah instalasi, melainkan model mental "bagaimana kode ini dijalankan", dan itu ditempatkan di materi modul 1. Track ini karena itu tetap ada di `instalasiAllowlist`.

---

## B. Bab (`topics`) yang tidak tersentuh step mana pun

Ini temuan terbesar secara jumlah: **dua puluh bab** tercantum di `topics` tanpa pernah muncul di step atau kuis. Lima ditutup dengan **step baru**, enam dengan **soal kuis baru**, sisanya dibahas tuntas di materi.

| Modul | Bab yang menganggur | Perbaikan |
|---|---|---|
| 1 | Kondisi: **ternary & switch** | **step baru `js-1-8`** |
| 1 | type coercion & konversi eksplisit | materi modul 1 |
| 2 | **hoisting & temporal dead zone** | **step baru `js-2-7`** (memperbaiki ReferenceError tanpa turun ke `var`) |
| 3 | **reference vs value** | **step baru `js-3-10`** — jebakan yang panduan sendiri sebut wajib |
| 3 | JSON parse & stringify | **soal kuis baru** `js-3-kuis/q6` + materi |
| 3 | Map & Set | **soal kuis baru** `js-3-kuis/q7` + materi |
| 3 | push/pop/slice/splice, some/every | tabel method di materi modul 3 |
| 4 | **dataset (data-\*)** | **step baru `js-4-7`** (dipasangkan dengan event delegation) |
| 5 | at, flat, structuredClone | materi modul 5 |
| 5 | iterator & generator | materi modul 5 |
| 5 | tooling: npm & bundler | materi modul 5 |
| 6 | setInterval, allSettled, race | tabel di materi modul 6 + penjelasan `js-6-6` diperluas |
| 6 | loading & error state | materi modul 6 (pola tiga keadaan) |
| 7 | membaca stack trace | materi modul 7 |
| 7 | **breakpoint & step debugging** | materi modul 7 |
| 7 | **Network tab** | **soal kuis baru** `js-7-kuis/q6` + materi |
| 8 | **getter, setter, static** | **step baru `js-8-6`** |
| 8 | **prototype** | **soal kuis baru** `js-8-kuis/q6` + materi |
| 8 | this: bind/call/apply | tabel aturan `this` di materi modul 8 |
| 9 | History API, requestAnimationFrame, sessionStorage, Clipboard, geolocation | materi modul 9 |
| 9 | **IntersectionObserver** | **soal kuis baru** `js-9-kuis/q6` + materi |
| 10 | **mock: vi.fn dan kapan berlebihan** | **soal kuis baru** `js-10-kuis/q6` + materi |

---

## C. Penjelasan yang terlalu pendek untuk pemula

Empat belas step lolos skrip verifikasi hanya karena penghitung kalimatnya tertipu titik di dalam kode. Setelah dihitung dengan kode diabaikan, **empat belas** di bawah standar; semuanya diperluas dengan KAPAN dipakai dan jebakannya:

| Step | Semula | Yang hilang |
|---|---|---|
| `js-5-4` | 225c | tidak menyebut bahwa spread itu dangkal, dan tidak menyebut pasangannya untuk menghapus (`filter`) |
| `js-5-3` | 232c | tidak menjelaskan kenapa hasilnya array sungguhan (beda dari `arguments`), dan dua aturannya |
| `js-9-4` | 272c | tidak menyebut bahwa input tanpa `name` tidak terbaca — penyebab "field-ku hilang" |
| `js-4-4` | 268c | tidak menyebut `'5' + 1 = '51'`, dan tidak menyebut pendengar harus di `<form>` |
| `js-3-1` | 285c | tidak menjelaskan kenapa `undefined` berbahaya (error muncul jauh dari sebabnya) |
| `js-4-1` | 288c | tidak menyebut dua sebab hasilnya `null`, dan bahwa NodeList bukan array |
| `js-3-5` | 289c | tidak menyebut optional chaining maupun sifat reference object |
| `js-5-2` | 294c | tidak menyebut bahwa jebakan yang sama mengenai string kosong |
| `js-4-2` | 297c | tidak menjelaskan kenapa class lebih baik dari `style`, dan empat method `classList` |
| `js-6-6` | 304c | tidak menyebut kesalahan `await` di dalam loop — kesalahan performa paling sering |
| `js-4-6` | 307c | tidak menyebut keunggulan utamanya (bekerja untuk elemen yang dibuat nanti) dan jebakan `event.target` pada ikon |
| `js-6-4` | 309c | tidak menyebut bahwa dibutuhkan **dua** `await` |
| `js-2-1` | 313c | tidak menyebut bahwa `return` juga menghentikan fungsi |
| `js-9-1` | 317c | tidak menyebut kapasitas, sifat sinkron, dan `JSON.parse` tanpa `try/catch` |

---

## D. Tes yang menolak jawaban yang sama benarnya

| Step | Jawaban benar yang **ditolak** | Perbaikan |
|---|---|---|
| `js-5-3` | `function jumlahkan(...n)` — nama parameter selain `angka` | pattern menerima nama apa pun (`\.\.\.\w+`), dan `reduce` diterima pada variabel apa pun |

Sekaligus instruksinya diperbaiki: sebelumnya ia menuliskan `jumlahkan(...angka)` **dan** menyebut `reduce`, jadi tugasnya bisa diselesaikan tanpa membaca penjelasan apa pun — pelanggaran anti-pattern #1 `panduan_isi.md`. Sekarang berupa skenario: "bisa dipanggil dengan berapa pun jumlah angka, kumpulkan lalu ringkas".

---

## E. Verifikasi yang khas track ini: menjalankan contohnya

Berbeda dari HTML dan CSS, kode JavaScript **bisa dieksekusi**. Jadi setiap `example.code` yang tidak bergantung pada browser dijalankan di Node, dan keluarannya dibandingkan huruf demi huruf dengan `example.output` yang tertulis di konten.

**Hasilnya: 41 contoh dijalankan, 40 cocok persis.** Satu yang berbeda adalah `js-7-4` (`console.table` dan `console.time`), yang `output`-nya memang berupa deskripsi tampilan — dan itu wajar, karena bentuk tabelnya visual dan angka durasinya berubah setiap kali dijalankan.

Artinya seluruh angka, urutan, dan `undefined` yang tertulis di contoh-contoh track ini bukan hasil pengetikan yang diasumsikan benar, melainkan sudah diadu dengan mesin.

---

## F. Catatan yang sengaja tidak diubah

- **`hours: 120` dengan 74 item.** Patokan panduan (±1 item per 45 menit) menyiratkan sekitar 160 item. Ini kesenjangan terbesar di antara semua track yang sudah diperiksa, tapi menambah 90 step adalah keputusan kurikulum — bukan pekerjaan review. Yang perlu ditinjau mungkin justru angka `hours`-nya.
- **Modul 3 sekarang punya 10 step**, di atas patokan 4–8. Aku tetap menambahkan `js-3-10` karena reference vs value disebut panduan sebagai jebakan wajib dan tidak ada modul lain yang lebih tepat. Kalau nanti modul ini dipecah, `js-3-1`–`js-3-5` (dasar) dan `js-3-6`–`js-3-10` (transformasi & salinan) adalah garis pemisah yang wajar.
- **Modul 10 (Testing) tidak bisa menampilkan hasil di preview** karena tidak ada test runner di panel. Materi modul 10 kini menyatakan ini secara terbuka beserta cara menjalankannya sungguhan dengan Vitest.

---

## Bukti verifikasi

| Pemeriksaan | Hasil |
|---|---|
| `verify:konten` (track JavaScript) | bersih, 0 pelanggaran — 10 materi, 64 step, 10 kuis |
| `npx tsc --noEmit` | bersih |
| `npx eslint src` | bersih |
| 165 potongan JS (`solution` + `example` + `starterCode`) diperiksa sintaksnya dengan `vm.Script` | 0 gagal |
| **41 `example.code` dijalankan di Node, keluarannya dibandingkan dengan `example.output`** | 40 cocok persis; 1 berupa deskripsi tampilan (`console.table`) |
| 15 kasus uji variasi jawaban (8 benar harus lulus, 7 keliru harus gagal) | 15/15 sesuai harapan |
| 64 `solution` vs tesnya sendiri, dan 64 `starterCode` | semua solution lulus, tidak ada starter yang lolos |
| 34 halaman materi dirender dengan `react-dom/server` | 50 tabel jadi `<table>`, 0 pipa bocor |
| `npm run build` | **belum diuji** — sandbox Linux tidak punya binary SWC arm64. Jalankan di Mac. |

---

## Status keempat track yang diminta

| Track | Modul | Materi | Step | Kuis | `verify:konten` |
|---|---|---|---|---|---|
| HTML | 7 | 7 | 48 | 7 | bersih |
| CSS | 10 | 10 | 60 | 10 | bersih |
| JavaScript | 10 | 10 | 64 | 10 | bersih |
| TypeScript | 7 | 7 | 46 | 7 | bersih |
| **Git & GitHub** | 5 | **0** | 39 | 5 | 5 pelanggaran (modul tanpa materi) |

`verify:konten` secara keseluruhan kini melaporkan **480 pelanggaran**, seluruhnya di 9 track yang belum diperiksa — turun dari 505 saat pemeriksaan dimulai.
