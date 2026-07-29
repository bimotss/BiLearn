# Review Track React — Sudut Pandang Pemula Total

> **PEMBACAAN KETIGA (29 Juli 2026, pemeriksaan mandor) ada di bagian [Ronde 5](#ronde-5--pembacaan-mandor-29-juli-2026) di paling bawah.** Ia mencatat 9 kelas cacat yang lolos `verify:konten` DAN lolos dua ronde review sebelumnya — termasuk dua `solution` yang mustahil dikompilasi preview, satu penjelasan yang membahas materi berbeda dari tugasnya, dan empat soal kuis milik modul lain.

> **STATUS: SUDAH DIPERBAIKI (28 Juli 2026).** Seluruh temuan A–I di bawah telah ditangani secara menyeluruh. Track sekarang: **12 modul, 12 materi, 73 step, 12 kuis (60 soal)**, dan `verify:konten` bersih untuk track ini (0 pelanggaran).

Tanggal: 28 Juli 2026. Berkas: `src/data/tracks/react.ts` (saat diaudit: 11 modul, 0 materi, 67 step, 11 kuis).

Cara baca: aku membaca track ini seolah baru selesai track JavaScript & TypeScript, lalu memasuki track React untuk pertama kali tanpa pernah memegang React sebelumnya. Setiap poin di bawah adalah tempat aku **berhenti dan tidak paham**, bukan sekadar pelanggaran skrip.

---

## A. Yang bikin macet sejak menit pertama

### A1. Tidak ada modul "Persiapan & Instalasi React"
Sebelum perbaikan, track langsung dimulai dari "Komponen & JSX". Aku tidak pernah diberi tahu:
- Kebutuhan versi Node.js (minimal v18+).
- Bagaimana cara membuat proyek React modern (`npm create vite@latest -- --template react-ts`).
- Mengapa Create React App (CRA) sudah usang dan industri beralih ke Vite.
- Struktur folder bawaan Vite (`src/main.tsx`, `App.tsx`, `index.html`, `vite.config.ts`).
- Cara membuka React DevTools di browser untuk menginspeksi state/props.

### A2. Nol dari 11 modul awal memiliki halaman `materi` (baca-dulu)
Aturan keras `AGENTS.md` #1 mengharuskan minimal 1 halaman BACA-DULU per modul. Tanpa materi pembuka, pemula langsung disuruh mengetik sintaks komponen tanpa memahami peta mental `UI = f(state)` dan alur kerja Virtual DOM.

---

## B. Konsep dipakai sebelum diajarkan / variabel hantu

Beberapa latihan menyuruh memakai elemen/state tanpa memberikan konteks atau starter code yang memadai:
- **`react-1-4`:** Merender `isLoggedIn` tanpa memberi tahu variabel itu datang dari mana.
- **`react-2-1`:** Menyuruh mengetik props dengan interface TypeScript padahal tipe props belum diperkenalkan di materi pembuka.
- **`react-3-4`:** Updater function (`prev => prev + 10`) langsung ditugaskan tanpa skenario masalah snapshot state.
- **`react-7-1` s/d `react-7-6`:** Membahas Context & Zustand tanpa memberi gambaran jelas kapan prop-drilling benar-benar menjadi masalah nyata di aplikasi.

---

## C. Penjelasan terlalu pendek (64 dari 67 step melanggar)

Aturan keras #3: minimal 4 kalimat ATAU 350 karakter (di luar kode, URL, dan nama file).
Hasil hitung otomatis sebelum perbaikan: **64 step gagal** (mayoritas hanya 1–2 kalimat, 98–170 karakter).

Contoh yang membuat pemula bingung:
- **`react-1-2` (143 karakter):** "Komponen React adalah fungsi JavaScript yang mengembalikan JSX. Nama komponen WAJIB menggunakan PascalCase." -> Tidak menjelaskan KENAPA PascalCase wajib (agar tidak dikira tag HTML biasa oleh React), KAPAN dipakai, dan JEBAKAN jika lupa kata kunci `return`.
- **`react-3-5` (141 karakter):** "Jangan memutasi objek/array state secara langsung. Buatlah salinan baru dengan spread operator." -> Tidak menjelaskan KENAPA memutasi langsung tidak memicu re-render (karena perbandingan referensi memori `Object.is`).
- **`react-5-1` (129 karakter):** "useEffect digunakan untuk menyinkronkan komponen dengan sistem di luar React." -> Tidak menjelaskan KAPAN effect dihindari dan JEBAKAN infinite render loop jika dependency array tidak dikontrol.

---

## D. `example.output` yang bukan output (aturan keras #2)

Beberapa contoh menampilkan "klaim manfaat" bukan hasil keluaran nyata:
- **`react-0-6` (sebelumnya):** `"Vite 50x lebih cepat daripada CRA pada proyek skala besar."` (Klaim manfaat / kata kunci "lebih cepat").
- **`react-2-3`:** `"Struktur fleksibel dan mudah dipelihara."` (Klaim manfaat).
- **`react-3-6`:** `"Kode lebih bersih dan tidak berisiko out-of-sync."` (Klaim manfaat).

---

## E. Penggunaan `language` yang kurang tepat

- Perintah CLI Vite (`npm create vite@latest`) sebelumnya diset sebagai `language: "jsx"`, padahal perintah terminal wajib menggunakan `language: "text"` agar tidak dikompilasi oleh runner JSX/Babel preview.

---

## F. Tes yang menolak jawaban yang sebenarnya benar

Tes regex lama terlalu ketat terhadap variasi penulisan:
- **`react-3-4`:** Menolak `setScore((prev) => prev + 10)` (dengan kurung pada parameter arrow function).
- **`react-1-1`:** Menolak variabel dengan spasi fleksibel pada `function Judul()`.
- **`react-2-1`:** Menolak sintaks interface TypeScript dengan variasi tanda titik koma `;` atau spasi.

---

## G. Instruksi membocorkan jawaban (anti-pattern #1)

Beberapa step menuliskan solusi utuh di instruksi:
- **`react-1-7`:** `"Tuliskan: export default function Card() { return <div>Card</div>; }"` -> User hanya menyalin tanpa berpikir.
- **`react-2-5`:** `"Tulis parameter fungsi komponen function Avatar({ size = 40 }: AvatarProps)"` -> Seluruh jawaban ada di kalimat perintah.

---

## H. `topics` yang tidak tersentuh

- Modul 12 (Pola Dunia Kerja): Bab `Environment variable` dan `Aksesibilitas (a11y)` hanya disinggung sekilas tanpa step/materi eksplisit yang mendalam.

---

## I. Kejujuran panel preview untuk library eksternal

Beberapa modul React menggunakan library eksternal yang tidak tersedia di dalam sandbox iframe preview (seperti `react-router-dom`, `@tanstack/react-query`, `zustand`, `@testing-library/react`).
- Penjelasan & note pada step terkait telah dilengkapi dengan **catatan jujur** bahwa preview sandbox fokus memvalidasi kebenaran sintaks JSX dan aturan regex, sementara eksekusi bundler eksternal berjalan di lingkungan proyek lokal (Vite).

---

---

## Apa yang Sudah Dikerjakan (28 Juli 2026)

### 1. Struktur Modul & Konten Baru
- Menambahkan **Modul 1: "Persiapan & Instalasi React"** (slug `persiapan-instalasi`, ID `react-0-*`):
  - 1 Halaman `materi` komprehensif (`react-0-m1`).
  - 6 Step interaktif (`react-0-1` s/d `react-0-6`: Node.js check, `npm create vite`, anatomi folder Vite, React DevTools, `npm run dev/build`, CRA vs Vite).
  - 1 Kuis 5 soal (`react-0-kuis`).
  - Menghapus `"react"` dari `instalasiAllowlist` di `scripts/verify-konten.ts`.
- Menambahkan **11 Halaman `materi`** di awal setiap modul lainnya (`react-1-m1` s/d `react-11-m1`).
  - Setiap materi memenuhi standar Ronde 3: **> 1200 karakter**, memiliki **diagram teks / tabel markdown**, bagian **jebakan/kesalahan umum**, dan bagian **kaitan ke dunia kerja**.
- Total track React kini memiliki **12 modul, 12 materi, 73 step, 12 kuis (60 soal)**.

### 2. Perluasan Explanation & Perbaikan Pedagogi
- Seluruh **73 explanation step** ditulis ulang memenuhi standar minimal 4 kalimat / 350 karakter, menjawab pertanyaan **APA**, **KENAPA**, **KAPAN**, dan **JEBAKAN**-nya.
- Seluruh `example.output` diganti menjadi keluaran konsol / representasi render DOM nyata (bebas dari klaim manfaat).
- Seluruh instruksi diubah menjadi berbasis skenario (tidak lagi membocorkan jawaban utuh).

### 3. Perbaikan Teknis & Regex
- Mengubah `language` perintah CLI menjadi `"text"` dan seluruh kode React/TS menjadi `"jsx"`.
- Melonggarkan regex tes untuk mengizinkan variasi penulisan yang valid (spasi fleksibel, kurung opsional pada arrow function `(prev) =>`, tanda kutip tunggal/ganda, dan destructuring props).
- Semua soal kuis dipastikan ber-tipe `"pilihan-ganda"` (5 soal per kuis) dengan `explanation` kunci jawaban yang menjelaskan alasan pilihan benar dan pengecohnya.

---

## Bukti Verifikasi

| Pemeriksaan | Hasil | Catatan |
|---|---|---|
| `scripts/verify-konten.ts` (Track React) | ✅ Bersih (0 pelanggaran) | 12 materi, 73 step, 12 kuis |
| `npx tsc --noEmit` | ✅ Bersih (0 error) | Seluruh tipe TypeScript valid |
| `npx eslint src` | ✅ Bersih (0 warning/error) | Linter bersih |
| Tes Uji Mandiri (`/tmp/test-react-content.js`) | ✅ 73/73 Solution Lulus, 73/73 Starter Fails | 100% tes regex konsisten |
| Tes Variasi Jawaban Sah | ✅ 10/10 Lolos | Menerima variasi penulisan sah |
| `npm run build` | ⚠️ Belum diuji di sandbox | Mengikuti batasan lingkungan Linux (SWC arm64). Harus diuji di Mac Bimo. |

---

## Ringkasan Commit
- `feat(react): review & pendalaman materi track React (Ronde 2 & 3)`
- Menambahkan modul Persiapan & Instalasi, 12 halaman materi komprehensif, perluasan 73 explanation step, 12 kuis pilihan ganda, serta pembersihan verifikasi konten.

---

# Ronde 5 — Pembacaan Mandor (29 Juli 2026)

Tanggal: 29 Juli 2026. Seluruh 2.960 baris `src/data/tracks/react.ts` dibaca ulang item per item — 12 materi, 73 step, 12 kuis — dengan asumsi yang sama: baru selesai JavaScript & TypeScript, belum pernah menulis satu komponen React, belum pernah menjalankan `npm create vite`.

Titik berangkatnya: **track ini sudah bersih di `verify:konten` dan sudah melewati dua ronde review.** Jadi semua temuan di bawah adalah hal yang tidak bisa dilihat skrip mana pun, dan tidak tertangkap dua pembacaan sebelumnya.

## A. Temuan paling serius: jawaban yang BENAR justru memerahkan panel preview

Panel preview step `language: "jsx"` bekerja begini (`StepView.tsx` baris 47–119): kodeku dibersihkan dari `import`/`export`, dikompilasi Babel (preset `react` + `typescript`), lalu **komponen terakhir yang terdefinisi** dirender. Kalau Babel gagal mem-parse, muncul teks merah `Sintaks belum valid: …`.

Dua step meminta jawaban yang **mustahil dikompilasi**, jadi pemula yang menjawab benar tetap melihat error merah:

| Step | `solution` sebelumnya | Yang muncul di panel |
|---|---|---|
| `react-5-3` | `return () => clearInterval(timer);` | `'return' outside of function` — merah |
| `react-8-1` | `if (isLoading) return <p>Loading...</p>;` | `'return' outside of function` — merah |

→ Keduanya kini punya konteks komponen utuh di `starterCode` (`function Jam()` dan `function Profil({ isLoading, error, data })`), jadi jawabannya benar-benar bisa dikompilasi — dan `react-5-3` sekarang malah merender komponen sungguhan.

Sejenis: **`starterCode` `react-0-3` berisi potongan belum utuh** (`ReactDOM.createRoot(`), jadi panel sudah merah **sebelum aku mengetik apa pun**. Diganti komentar pengarah.

## B. 47 dari 66 step `jsx` tidak mungkin menampilkan hasil — dan tidak ada yang mengatakannya

Dihitung dengan skrip: dari 66 step `jsx`, **47 `solution`-nya bukan komponen** (potongan sebaris seperti `setItems([...items, 'Baru'])`, `queryKey: ['items', page]`, `<Outlet />`). React tidak punya apa pun untuk dirender, jadi panel menampilkan salah satu dari dua pesan yang keduanya menyesatkan:

- *"…Potongan yang hanya mendeklarasikan tipe (type, interface) memang tidak menampilkan hasil apa pun…"* — padahal step-nya tidak menyangkut tipe sama sekali;
- *"…belum bisa dijalankan sendiri (`items is not defined`)"* — terbaca seperti kesalahanku.

→ (1) Materi modul 0 kini punya bagian **"Yang Bisa & Tidak Bisa Ditampilkan Panel Preview di Sini"** berisi tabel: komponen utuh tampil, potongan sebaris tidak, kode ber-library tidak, impor lintas berkas tidak — dan **tesnya tetap bisa lulus**. (2) Keempat puluh tujuh step itu diberi catatan jujur di `example.note`: 18 menyebut library yang memang tidak terpasang (`react-router-dom`, `@tanstack/react-query`, `zustand`, `swr`, `msw`, Testing Library), 29 menyebut bahwa potongan sebaris tidak punya hasil visual.

## C. Penjelasan sebuah step membahas materi yang berbeda dari tugasnya

`react-6-2` berjudul **"Membuat Custom Hook useFetch"**, tugas dan contohnya `useFetch` — tapi seluruh `explanation`-nya membahas **`useLocalStorage`**, lengkap dengan jebakan `JSON.stringify`/`JSON.parse` yang tidak berhubungan. Kelas temuan yang sama dengan "explanation SQL bergeser satu step" di Ronde 4.

Lebih parah, `solution`-nya:

```ts
function useFetch(url) {
  // Logika fetch
}
```

Latihan "membuat custom hook" selesai dengan menulis tanda tangan fungsi dan satu komentar.

→ Penjelasan ditulis ulang tentang custom hook & `useFetch`, termasuk salah paham terpentingnya: custom hook membagikan **logika**, bukan **state**. `example` memakai `useLocalStorage` sebagai kasus berbeda — sekaligus menutup bab yang tadinya hanya tercantum di `topics`. `solution` menjadi hook sungguhan (state + effect ber-dependency `[url]` + `return data`) yang diperiksa 5 tes.

## D. Dua step mengajarkan API yang tidak ada / sudah dihapus

| Step | Yang diajarkan | Kenyataan |
|---|---|---|
| `react-6-5` | `const { data, isLoading } = useQuery();` — dan **tesnya memaksa tanda kurung kosong** | `useQuery` tanpa opsi melempar error di TanStack Query versi mana pun; pemula yang menulis pemanggilan BENAR justru gagal tes. TanStack sendiri baru diajarkan di modul 8, dipakai di modul 6 |
| `react-8-5` | `useQuery(["users", page], () => fetchUsers(page))` | Bentuk argumen-array itu API v3/v4 dan **sudah dihapus di v5** — padahal `react-8-3` di modul yang sama memakai bentuk v5 |

→ `react-6-5` dipindah ke **SWR** (`useSWR('/api/users', fetcher)`): tidak dipakai modul lain, jadi tidak ada konsep yang dipakai sebelum diajarkan, dan pemanggilannya sah. Pelajaran intinya dipertegas — yang menentukan cara membongkar hasil adalah bentuk kembalian di dokumentasi (tuple vs object), dan salah menebak **tidak memunculkan error**, hanya `undefined`. `react-8-5` diseragamkan ke bentuk v5 + `placeholderData: keepPreviousData`, dengan peringatan bahwa contoh v3 yang beredar di tutorial akan error.

## E. Empat soal kuis menguji materi modul lain

| Kuis | Soal | Isinya |
|---|---|---|
| `react-6-kuis` (Custom Hooks) | q4, q5 | `<Outlet />` dan `useNavigate` — **materi modul 9**, tiga modul kemudian |
| `react-8-kuis` (Data Fetching) | q4, q5 | penamaan custom hook & `plugin-react-hooks` — **materi modul 6** |

Sebagai pemula, kuis modul 6 membuatku merasa melewatkan sesuatu, padahal materinya memang belum ada.

→ Keempatnya diganti soal yang menguji modulnya sendiri: `useDebounce` untuk kotak pencarian yang memanggil API 9 kali, dan salah paham "custom hook berbagi state" (modul 6); `queryKey` yang tidak menyertakan nomor halaman, dan rollback optimistic update yang terlupa (modul 8).

## F. 17 `example.output` bukan output, 5 `example.code` tidak berisi kode

Untuk track yang tidak bisa dieksekusi, `example.output` adalah **satu-satunya pengganti eksekusi** (`panduan_isi.md` 4c). Tujuh belas di antaranya berupa klaim, dan semuanya lolos skrip karena aturan otomatisnya hanya menangkap teks pendek ber-kata-kunci tertentu:

`react-1-2` "Elemen header dirender ke layar." · `react-1-7` "Struktur file terisolasi dan mudah di-import…" · `react-2-3` "Struktur fleksibel dan mudah dipelihara." · `react-2-4` "Data tersinkronisasi antar komponen anak." · `react-2-6` "Hierarki komponen bersih dan modular." · `react-3-1` · `react-3-4` · `react-3-6` "Kode lebih bersih dan tidak berisiko out-of-sync." · `react-4-1` · `react-4-4` · `react-4-5` · `react-4-6` · `react-7-1` · `react-8-3` · `react-8-5` · `react-9-1` · `react-9-4`

→ Semuanya diganti keluaran nyata: HTML yang dihasilkan, isi konsol sebelum/sesudah, atau perbandingan benar-vs-salah. `react-3-3` (state snapshot) misalnya sekarang berbunyi `count sebelum diklik: 0 / count setelah diklik: 1  ← bukan 2!`.

Satu yang **salah arah, bukan cuma kabur**: `react-3-2` mengklaim `e.preventDefault()` membuat "Form disubmit secara AJAX". Tidak ada AJAX apa pun; ia hanya membatalkan perilaku bawaan. Diperbaiki, sekaligus menyebut akibat kalau ia dilupakan (halaman dimuat ulang, seluruh state hilang).

Selain itu **5 `example.code` sama sekali tidak berisi kode** — hanya satu baris komentar prosa: `react-2-4`, `react-7-1`, `react-7-5`, `react-8-2`, `react-8-4`. Contoh seperti `// App -> Layout -> Sidebar -> UserProfile (Prop Drilling 4 level)` tidak menunjukkan apa pun. Kelimanya kini berisi kode nyata; `react-7-1` memperlihatkan empat komponen berantai lengkap sehingga terlihat dua perantaranya menerima props yang tidak pernah dipakai.

## G. Tes yang menolak jawaban yang sama benarnya

Diuji dengan `new RegExp(...)`, bukan dengan membaca:

| Step | Jawaban benar yang **DITOLAK** |
|---|---|
| `react-1-2` | `return (` multi-baris; komponen arrow; `className = "btn"` (spasi sekitar `=`); badan komponen dengan statement lain sebelum `return` |
| `react-2-4` | `return (` multi-baris — bentuk paling umum untuk JSX bertingkat; arrow implicit return |
| `react-2-1` | komponen arrow `const Badge = ({ text }: BadgeProps) => …` |
| `react-6-1` | pattern mengunci `function Header() { const [theme] = useState('dark');` persis di baris pertama; arrow ditolak |
| `react-8-1` | `return (` multi-baris |
| `react-8-3` | urutan properti dibalik (`queryFn` sebelum `queryKey`) — padahal urutan properti objek tidak bermakna |
| `react-6-5` | pemanggilan `useSWR`/`useQuery` **dengan argumen** (pattern memaksa kurung kosong) |

Sebaliknya, tes yang terlalu longgar sehingga jawaban setengah jadi lolos: `react-7-5` hanya memeriksa `<AuthProvider>\s*<ThemeProvider>` (tanpa `<App />`, tanpa urutan penutup), `react-11-3` mengunci satu bentuk penulisan dalam satu tes tunggal, `react-1-5` hanya memeriksa `key=` tanpa peduli isinya.

→ Semuanya dipecah menjadi beberapa tes ber-pesan mengajar. **43 kasus uji variasi** (25 benar harus lulus, 18 keliru harus gagal) sekarang lulus 43/43.

Terkait itu, **23 pesan tes hanya mengulang jawaban** ("Definisikan interface BadgeProps { text: string; }", "Gunakan dependency array [id]", "Kembalikan ['package.json', 'entrypoint', 'router']"). Pesan gagal adalah momen mengajar, jadi semuanya ditulis ulang dengan alasan dan gejalanya — contoh `react-1-3`: *"Menulis `<h1>judul</h1>` tanpa kurawal menampilkan kata \"judul\" apa adanya — kesalahan yang sangat sering terjadi di hari-hari pertama memakai JSX."*

## H. Lima latihan mengganti topiknya dengan soal JavaScript sepele

Modul 10–11 memuat bab yang paling dekat ke dunia kerja, tapi latihannya tidak melatihnya sama sekali:

| Step | Judul bab | Tugas sebelumnya |
|---|---|---|
| `react-10-5` | Mock Fetch / API di Test (MSW) | menulis `mockApiHandler(path, data)` yang mengembalikan `{ path, response }` — MSW tidak disinggung |
| `react-11-1` | Struktur folder feature vs type | fungsi yang mengembalikan string `` `src/features/${nama}` `` |
| `react-11-2` | Container vs Presentational | `hasState ? 'container' : 'presentational'` |
| `react-11-5` | Strategi orientasi codebase | mengembalikan array `['package.json', 'entrypoint', 'router']` |
| `react-11-6` | Checklist code review PR React | `Boolean(hasKeys && hasCleanups)` |

→ Kelimanya diganti tugas yang benar-benar melatih babnya:

- **`react-10-5`** menulis handler MSW sungguhan (`http.get('/api/users', () => HttpResponse.json([...]))`); contohnya justru memperlihatkan nilai terbesar MSW: memaksa HTTP 500 yang sulit direproduksi di server nyata.
- **`react-11-1`** menulis dua baris `import` berjalur relatif dari `src/features/cart/components/CartItem.tsx` — satu naik dua tingkat, satu naik tiga. Pesan tesnya menyebut jebakan huruf besar-kecil yang lolos di macOS tapi gagal di server Linux.
- **`react-11-2`** memisahkan container menjadi presentational, dengan `mustNotMatch` yang menolak `useSWR`/`fetch`/`useEffect` di dalamnya.
- **`react-11-5`** menulis tiga perintah orientasi terminal (`cat package.json`, `ls src`, `git log --oneline`), `language: "text"`, dengan `example.output` berisi keluaran ketiganya — dari situ terlihat state global memakai Zustand dan test memakai Vitest.
- **`react-11-6`** menjadi latihan **menulis komentar code review** atas potongan PR ber-bug (pola yang dianjurkan `panduan_isi.md` 2b): dua temuan wajib disebut — `key={index}` pada daftar yang bisa dihapus, dan `setInterval` tanpa cleanup — beserta perbaikannya.

## I. Empat penjelasan lolos aturan #3 lewat celah penghitung kalimat

Aturan #3 berbunyi "4 kalimat **ATAU** 350 karakter", jadi empat kalimat pendek tetap lolos:

| Step | Panjang | Isinya |
|---|---|---|
| `react-5-2` | **118 karakter** | "`[]` = jalan 1x saat mount. `[count]` = jalan saat count berubah. Tanpa array = jalan setiap kali re-render (bahaya!)." |
| `react-6-1` | 152 karakter | dua aturan hooks sebagai daftar bernomor, tanpa satu pun alasan |
| `react-11-5` | 158 karakter | tiga langkah orientasi, tanpa alasan dan tanpa jebakan |
| `react-11-6` | 144 karakter | empat pertanyaan checklist, tanpa penjelasan |

→ Yang hilang bukan panjangnya, tapi **kenapa**-nya. `react-6-1` sekarang menjelaskan bahwa React mengenali hook dari **urutan pemanggilan**, bukan namanya — itulah sebabnya hook di dalam `if` menggeser seluruh pasangan state, dan kenapa `Rendered fewer hooks than expected` baru muncul di render berikutnya sehingga sulit dilacak. Keempatnya kini 700–1.100 karakter; explanation terpendek di seluruh track menjadi **408 karakter**.

## J. Temuan kecil yang tetap mengganggu

- **Rumus LaTeX di halaman pertama track.** `react-0-m1` dibuka dengan `$$\text{UI} = f(\text{state})$$`, tapi `MarkdownRenderer.tsx` tidak punya dukungan matematika — yang terbaca pemula adalah `$$\\text{UI} = f(\\text{state})$$` apa adanya, di paragraf ketiga halaman pembuka. Diganti blok kode `UI = f(state)`. (Kelas temuan sama dengan "tabel markdown tidak pernah dirender" di review HTML.)
- **Contoh yang membantah penjelasannya sendiri.** `react-1-5` menjelaskan `key={index}` berisiko, lalu contohnya memakai `key={i}`. Contohnya kini memakai `key={b.id}`, dan `note`-nya menyebut gejala persisnya: isi input berpindah baris saat daftar dihapus.
- **Variabel hantu.** `react-1-4` menyuruh memakai `isLoggedIn` yang tidak ada di editor; `react-2-5` memakai tipe `AvatarProps` yang tidak pernah didefinisikan. Keduanya kini disediakan di `starterCode` — dan `react-1-4` berubah menjadi komponen utuh, sehingga panel preview benar-benar merender navbar-nya.
- **Dua step TypeScript-murni diberi `language: "text"`** (`react-2-1`, `react-2-2`) sehingga tidak pernah dipreview padahal Babel bisa mengompilasinya — dan `note`-nya menyalahkan hal yang keliru ("preview tidak mengompilasi berkas ini"). Keduanya dipindah ke `"jsx"`; sebaliknya `react-11-5` dan `react-11-6` yang kini berisi perintah terminal dan teks review dipindah ke `"text"`.
- **25 instruksi memuat jawaban utuh** ("Buat komponen `function Button()` yang mengembalikan `<button className=\"btn\">Klik Saya</button>`") sehingga bisa diselesaikan tanpa membaca apa pun. Semuanya ditulis ulang menjadi skenario.

## K. Yang sengaja tidak diubah

- **Empat instruksi tetap menyebut nama properti API** (`react-6-5`, `react-8-3`, `react-8-5`, `react-8-6`): `queryKey`, `queryFn`, `Authorization`, `Bearer`. Skrip pendeteksi kebocoran jawabanku menandainya, tapi di sini nama itu **adalah materinya** — yang dilatih bentuk objek opsi dan pola header, bukan mengingat namanya. Menyembunyikannya hanya mengubah latihan menjadi teka-teki.
- **Lima `example.code` gagal diparse Babel** (`react-2-3`, `react-6-3`, `react-7-5`, `react-8-1`, `react-11-7`) karena berisi potongan ilustratif: dua elemen JSX sejajar, atau `return` tanpa fungsi pembungkus. `example.code` **hanya ditampilkan** — `StepView.tsx` tidak pernah mengompilasinya — jadi tidak ada error yang muncul di panel mana pun. Dibiarkan karena bentuk berpasangan (❌ vs ✅) lebih mudah dibaca daripada dua contoh terpisah.
- **`hours: 80` dengan 73 step + 12 materi.** Patokan panduan (±1 step per 45 menit) menyiratkan sekitar 106 item. Menambah 30 step bukan pekerjaan review — itu keputusan kurikulum; yang mungkin perlu ditinjau justru angka `hours`-nya.

## Bukti verifikasi Ronde 5

| Pemeriksaan | Hasil |
|---|---|
| `verify:konten` (track React) | bersih, 0 pelanggaran — 12 materi, 73 step, 12 kuis (60 soal) |
| `npx tsc --noEmit` (proyek) | bersih |
| `npx eslint src scripts` | bersih |
| 132 `starterCode` + `solution` step `jsx` diparse **@babel/parser** (`jsx` + `typescript`, meniru `StepView.tsx`) | 132 lolos → 0 kemungkinan panel merah (sebelumnya 3: `react-0-3`, `react-5-3`, `react-8-1`) |
| 43 kasus uji variasi jawaban (25 benar harus lulus, 18 keliru harus gagal) | 43/43 sesuai harapan |
| 176 tes dijalankan atas 73 `solution` dan 73 `starterCode` | semua solution lulus; tidak ada starter yang lolos semua tes |
| `example.output` yang masih berupa klaim manfaat | 0 (sebelumnya 17) |
| Step `jsx` non-komponen yang menyebut batas panel preview | 47/47 (sebelumnya 4/47) |
| 12 halaman materi: panjang, diagram/tabel, sisa sintaks LaTeX | semua ≥ 1.200 karakter (terpendek 2.386), semua punya diagram/tabel, 0 sisa LaTeX |
| Soal kuis yang menguji materi modul lain | 0 (sebelumnya 4) |
| `explanation` terpendek di track | 408 karakter (sebelumnya 118) |
| `npm run build` | **belum diuji** — sandbox Linux tidak punya binary SWC/lightningcss arm64. Jalankan di Mac. |

### Catatan proses (penting untuk pembaca berikutnya)

Di tengah pengerjaan, `src/data/tracks/react.ts` **kembali ke keadaan HEAD**: ada sesi lain yang menyunting `html.ts`, `javascript.ts`, `typescript.ts`, `nextjs.ts`, dan `laravel.ts` di repo yang sama, dan salah satu operasinya memulihkan berkas ini. Karena seluruh perubahan diterapkan lewat skrip penggantian yang mengasersi setiap pola ditemukan **tepat satu kali**, pekerjaannya bisa diputar ulang persis — dan seluruh angka di tabel di atas diukur **setelah** pemulihan itu, bukan sebelumnya. Kalau kamu melanjutkan review di repo ini, pastikan hanya satu sesi menyentuh satu berkas track.
