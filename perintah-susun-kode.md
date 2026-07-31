# PERINTAH G — Mode Susun Kode untuk 14 Track Sisa

Briefing siap tempel. Salin apa adanya ke worker berikutnya.

---

## WAJIB dibaca dulu, jangan menulis konten sebelum ini

1. `AGENTS.md` — aturan keras konten
2. `panduan_isi.md` bagian 2b (anti-pattern) & bagian 5 (aturan tes)
3. `review-mandor-ronde4.md` bagian A dan E — sejarah kenapa proyek ini pernah
   menghasilkan 935 pelanggaran. Polanya: mengisi banyak track sekaligus, lalu
   memverifikasi di akhir. Jangan diulang.
4. `src/lib/types.ts` — khususnya `StepSusunKode`
5. `src/components/StepSusunKodeView.tsx` — cara kepingan dirender dan dinilai
6. `src/lib/tes.ts` — penilai tunggal yang dipakai DUA mode
7. `scripts/verify-konten.ts` bagian "Aturan keras untuk susunKode"
8. `src/data/tracks/html.ts` dan `css.ts` — **108 contoh yang sudah jadi.**
   Baca minimal 10 sebelum menulis satu pun.

---

## Apa yang sudah ada

Mode belajar kedua bernama **"susun kode"**: user tidak mengetik, ia merangkai
kode dari kepingan yang disediakan — sebagian kepingan sengaja salah. Hasil
rangkaiannya kode sungguhan, jadi dinilai memakai `tests` step yang SAMA dengan
mode ngetik.

Yang sudah selesai dan **tidak boleh diubah**:

- Mekanisme UI (papan susun, drag & drop, geser pakai panah kiri/kanan)
- Model progress dua dunia yang terpisah penuh (`completed` = dunia ngetik,
  `completedPilihanGanda` = dunia susun kode)
- Layar pemilihan mode di awal + penunjuk mode di header
- Aturan keras `susunKode` di `scripts/verify-konten.ts`
- Konten HTML (48/48) dan CSS (60/60)

**Tugasmu hanya mengisi field `susunKode` pada step yang belum punya.**

---

## Sisa pekerjaan

| Track | Step | Sisa |
|---|---|---|
| JavaScript | 68 | 68 |
| Git & GitHub | 39 | 39 |
| TypeScript | 46 | 46 |
| React | 73 | 73 |
| Next.js | 50 | 50 |
| PHP & Laravel | 59 | 59 |
| Node.js & Express | 57 | 57 |
| Database & SQL | 72 | 72 |
| NoSQL & Data Lanjutan | 26 | 26 |
| Deployment & Docker | 39 | 39 |
| AI-Assisted Development | 39 | 39 |
| Spreadsheet & Excel | 39 | 39 |
| Python | 55 | 55 |
| Analisis Data & Visualisasi | 47 | 47 |
| **Total** | | **709** |

Urutan: **JavaScript → Git → TypeScript → React → Next.js**, lalu sisanya.
Alasannya jalur frontend dituntaskan lebih dulu (`panduan_isi.md` bagian 1).

**Track ≥60 step dikerjakan per modul**, lapor tiap modul selesai.

---

## Bentuk data

```ts
susunKode: {
  question?: string;   // kalau kosong, UI memakai `instruction`
  potongan: string[];  // kepingan BENAR, dalam urutan benar
  pengecoh: string[];  // kepingan salah, dari kesalahan NYATA
  pemisah?: string;    // " " untuk satu baris, "\n" untuk banyak baris
  explanation: string; // kenapa benar + kenapa pengecohnya menggoda
}
```

`potongan.join(pemisah)` harus menghasilkan kode yang lolos seluruh `tests`
step itu. Itu diperiksa skrip, bukan diandalkan pada ketelitianmu.

---

## Aturan keras (skrip menolak, exit 1)

1. `potongan` ≥2, `pengecoh` ≥2, total keping ≤12.
2. Pengecoh tidak boleh sama dengan potongan mana pun, dan tidak boleh kembar
   sesamanya. **Potongan BOLEH berulang** — daftar bersarang memang butuh dua
   `<ul>`.
3. **Susunan benar wajib lolos seluruh `tests` step itu.**
4. Pengecoh tidak boleh berupa penggalan yang ada di dalam `solution`.
5. **Tiap pengecoh wajib merusak** saat menggantikan potongan yang paling mirip
   (dicari dengan jarak edit).
6. `explanation` ≥200 karakter dan memuat salah satu kata: `menggoda`, `sering`,
   `keliru`, `jebakan`.
7. **`question` tidak boleh mengeja sintaks jawaban.** Substring bersama
   terpanjang antara pertanyaan dan susunan benar tidak boleh ≥12 karakter bila
   memuat operator (`= { } ( ) < > [ ]`). Menyebut teks literal yang wajib
   muncul (judul, nama berkas, URL) tetap boleh.
8. **Soal tidak boleh merosot jadi pilihan ganda.** Kalau SEMUA pengecoh
   menyasar keping yang sama dan keping itu memuat ≥50% jawaban, user tidak
   merangkai apa pun — ia memilih satu chip.
9. **Susunan benar ≥40% dari `solution`.** Kalau yang dirangkai cuma seperlima
   jawaban asli, user tidak pernah melihat bentuk utuh kodenya.

---

## Cara menulis kepingan

**Potongan** dipecah pada batas yang mengajarkan sesuatu:

- HTML satu baris → per token: `<img`, `src="..."`, `alt="..."`, `>` dengan
  `pemisah: " "`.
- HTML/CSS banyak baris → per baris dengan `pemisah: "\n"`.
- CSS → deklarasi yang DIUJI jadi keping sendiri; deklarasi hiasan yang tidak
  diuji digabung ke keping selector supaya total tetap ≤12.

**Pengecoh** diambil dari kesalahan yang benar-benar sering terjadi:

- `href` vs `src`, `for` vs `id`, `name` vs `id`
- lupa satuan (`width: 240`), lupa tanda kutip, lupa `#` pada jangkar
- properti yang tertukar (`justify-content` vs `align-items`)
- nilai bawaan yang justru sedang diperbaiki (`position: static`, `overflow: visible`)
- nama yang terdengar masuk akal tapi tidak ada (`display: flexbox`, `<navigation>`)

Jangan mengarang pengecoh absurd. Kalau soal bisa dijawab tanpa membaca
contohnya, pengecohmu gagal.

---

## EMPAT CARA WORKER SEBELUMNYA GAGAL — jangan diulang

Worker pertama menyelesaikan 637 step dan **semuanya lolos `verify:konten` versi
lama**. Setelah aturan 7–9 ditambahkan, ketahuan bahwa sebagian besar tidak
mengajarkan apa-apa. Ini yang terjadi:

**1. Jawaban ditulis di dalam pertanyaan (51 step).**
`question: "Buat let skor = 100 tanpa anotasi tipe."` untuk soal yang kepingnya
`let skor` + `= 100;`. User tinggal mencocokkan huruf. Bocornya ditulis TANPA
backtick, jadi tidak terlihat seperti kode.
→ Tulis pertanyaan yang menyebut TUJUAN, bukan bentuk kodenya.
Contoh benar: *"Buat variabel skor bernilai 100, dan biarkan TypeScript
menyimpulkan sendiri tipenya."*

**2. Soal berubah jadi pilihan ganda (React 33 dari 73 step).**
`potongan: ["<input value={text}", "onChange={(e) => setText(e.target.value)} />"]`
— seluruh konsep ada di satu chip, dan kedua pengecoh adalah variasi chip itu.
Tidak ada yang dirangkai.
→ Pecah sampai tiap keping mewakili SATU keputusan.

**3. Skrip penyisip dijalankan dua kali (39 step di `ai-dev.ts`).**
78 blok `susunKode` untuk 39 step. `tsc --noEmit` gagal dengan 39 error
"multiple properties with the same name", dan saat dibaca hanya blok terakhir
yang berlaku. **`npm run verify:konten` tetap hijau** — skrip konten tidak
memeriksa tipe.
→ Pakai `scripts/sisip-susunkode.py` (menolak menyisip kalau sudah ada), dan
jalankan `npx tsc --noEmit` SEBELUM melapor, bukan sesudah.

**4. Membuat alat penyisip sendiri.**
Worker menulis `inject_ai_dev.py`, `build_ai_dev_tracks.ts`, dan sejenisnya
alih-alih memakai alat yang sudah ada — lalu menemukan ulang bug yang sudah
diperbaiki. Pakai `scripts/sisip-susunkode.py`.

---

## LIMA JEBAKAN YANG SUDAH TERBUKTI MENJERAT

Dari 82 entri pertama, **25 ditolak skrip**. Ini kategorinya — periksa sendiri
sebelum menjalankan verifikasi:

**1. Pengecoh yang ternyata penggalan solusi (10 kasus).**
`width: 300px` adalah bagian dari `max-width: 300px`. `require` adalah bagian
dari `required`. `product-id` adalah bagian dari `data-product-id`.
→ Cek: apakah teks pengecohmu muncul di dalam `solution`?

**2. Pengecoh yang tidak merusak apa pun (11 kasus).**
Regex mencocokkan awalan: `display: flexbox` LOLOS tes `display\s*:\s*flex`.
`line-clamp: 2px` LOLOS tes `line-clamp\s*:\s*2`. `<h1>` juga cocok di dalam
`.p {` untuk pola `p\s*\{`.
→ Cek: jalankan regex tesnya terhadap pengecohmu sebelum menulis.

**3. Pengecoh yang keping termiripnya salah sasaran.**
Aturan 5 menukar pengecoh dengan potongan yang PALING MIRIP. Kalau pengecohmu
pendek (`<b>Penting</b>`) dan ada potongan pendek lain (`</p>`), yang tertukar
justru yang tidak diuji, dan pengecohnya lolos tanpa merusak.
→ Tulis pengecoh yang bentuknya dekat dengan potongan yang ingin kamu sasar.

**4. Menebak isi step tanpa membacanya (2 kasus).**
Dua step CSS saya isi berdasarkan tebakan dari judulnya; ternyata isinya sama
sekali lain, dan susunan "benar"-nya tidak punya jawaban.
→ Selalu cetak `solution` dan `tests` step itu lebih dulu.

**5. Menyisipkan blok dengan menghitung kurung secara naif.**
`pattern` regex di `tests` berisi `{` dan `}` (mis. `[^}]*`). Menghitung kurung
tanpa membuang string literal akan menaruh blok `susunKode` di dalam `Module`
atau `StepTest`. Pakai `scripts/sisip-susunkode.py` yang sudah menanganinya.

---

## Alat bantu

`scripts/sisip-susunkode.py` menyisipkan blok ke berkas track dengan benar.
Pakai begini:

```python
from sisip_susunkode import sisipkan
I = {}
I["js-1-1"] = dict(question=..., potongan=[...], pengecoh=[...],
                   pemisah="\n", explanation=...)
print(sisipkan("src/data/tracks/javascript.ts", I, r"js-\d+-\d+"))
```

Cetak dulu data step yang mau diisi:

```bash
node -e "
const {tracks}=require('<DIR_KOMPILASI>/src/data/tracks/index.js');
const t=tracks.find(t=>t.slug==='javascript');
for(const m of t.modules)for(const i of m.items){
 if(i.kind!=='step'||i.susunKode)continue;
 console.log('=== '+i.id);
 console.log('SOL: '+JSON.stringify(i.solution));
 i.tests.forEach((x,n)=>console.log('  T'+n+(x.mustNotMatch?'[N]':'')+' '+x.pattern));
}"
```

---

## Alur kerja yang WAJIB diikuti

```
1. Cetak solution + tests untuk satu modul
2. Tulis susunKode untuk modul itu saja
3. JALANKAN VERIFIKASI  ← jangan lanjut sebelum bersih
4. Perbaiki yang ditolak
5. Lapor, baru lanjut ke modul berikutnya
```

**Jangan menulis banyak modul lalu memverifikasi di akhir.** Saat 48 blok CSS
disisipkan sekaligus dengan perbaikan yang gagal tersimpan, seluruhnya harus
dibongkar ulang. Verifikasi tiap langkah lebih cepat daripada terlihat.

Simpan salinan berkas track sebelum menyisipkan (`cp css.ts /tmp/css.bak`) —
kamu akan membutuhkannya.

---

## Perintah verifikasi

```bash
npx tsc --noEmit           # WAJIB BERSIH — jalankan PERTAMA, bukan terakhir
npm run verify:konten      # WAJIB ✅ SEMUA VERIFIKASI LOLOS
npm run audit:lanjutan     # WAJIB 0 temuan
npx eslint src scripts
npm run build
```

`tsc` didahulukan karena `verify:konten` **tidak memeriksa tipe**. Berkas yang
punya properti kembar atau kurung tidak seimbang tetap bisa membuat
`verify:konten` hijau sementara aplikasinya tidak bisa dibangun sama sekali.
Itu persis yang terjadi pada `ai-dev.ts`.

**Satu worker, satu waktu.** Jangan menjalankan pengisian di beberapa track
secara paralel, dan jangan menyerahkan pekerjaan untuk direview selagi skripmu
masih menulis berkas. Reviewer yang membaca berkas di tengah penulisan akan
melaporkan cacat yang sudah tidak ada, atau melewatkan yang baru muncul.

**Batasan lingkungan yang mungkin kamu temui.** Kalau `npx tsx` tidak jalan
(binary esbuild darwin di sandbox Linux), kompilasi ke direktori BARU tiap kali:

```bash
D=/tmp/v-$(date +%s%N)
npx tsc scripts/verify-konten.ts --outDir $D --module commonjs \
  --target ES2022 --moduleResolution node --skipLibCheck --esModuleInterop
node $D/scripts/verify-konten.js
```

Direktori baru tiap kali itu penting: `/tmp/v` yang dipakai ulang pernah
menyajikan snapshot basi dan melaporkan pelanggaran yang sudah tidak ada.

`npm run build` tidak bisa diuji di sandbox Linux (SWC arm64 tidak tersedia).
Kalau begitu keadaannya, **SEBUTKAN APA ADANYA** — jangan mengklaim lulus.

---

## Yang TIDAK boleh

- Mengubah `tests`, `solution`, `explanation`, `example`, atau `instruction`
  step yang sudah ada. Mode ini bersifat TAMBAHAN.
- Melonggarkan `tests` supaya susunanmu lolos. Kalau susunan benar gagal tes,
  yang diperbaiki kepingan atau pemisahnya — bukan tesnya.
- Melonggarkan aturan di `scripts/verify-konten.ts`.
- Menambah dependency baru.
- Mengisi banyak track sekaligus lalu verifikasi di akhir.
- Menyentuh `src/lib/progress.ts`, `ModeBelajarBar.tsx`, atau
  `StepSusunKodeView.tsx` — semuanya sudah selesai dan teruji.

---

## Format laporan tiap modul

- Track + modul yang dikerjakan, jumlah step yang diisi.
- Keluaran `verify:konten` dan `audit:lanjutan` **apa adanya** (tempel).
- Berapa entri yang ditolak skrip dan kenapa — ini bagian yang paling berguna,
  jangan disembunyikan.
- Status `npm run build`: lulus, atau tidak bisa diuji beserta alasannya.
- Keputusan yang kamu ambil sendiri dan alasannya.

Jangan melaporkan selesai kalau `verify:konten` masih menemukan pelanggaran
pada bagian yang kamu kerjakan. Status di laporan tidak berarti apa-apa tanpa
keluaran skripnya — itu pelajaran Ronde 4 bagian A.
