# Perintah worker: perbaikan React berdasarkan audit 15 September 2026

## Status dan batas cakupan

Audit terarah pada source lokal: 12 modul, 12 materi, 73 step, 12 kuis, 60 soal. Temuan di bawah sudah direproduksi melalui evaluator produksi; ini bukan klaim seluruh track sudah diperiksa atau diperbaiki. Source React belum diubah dalam pekerjaan audit ini. Laporan lama `review-react-pemula.md` bukan bukti kondisi terbaru.

Baca `AGENTS.md`, `panduan_isi.md` terutama bagian 2c, graph dan query Graphify sebelum menelusuri alur. Pertahankan perubahan Business English dan ID/progres yang sudah ada. Tugas worker adalah memperbaiki pengajaran dan kontrak penilaian, bukan sekadar membuat fixture hijau. Jangan deploy tanpa instruksi.

## Bukti kegagalan validator

Jalankan `npx tsx scripts/audit-react-next-learning.ts --check`. Baseline lintas React/Next.js: 13 kasus tidak sesuai, exit 1. Enam di antaranya React. Skrip menyimpan kode lengkap dan expected result.

| ID | Jawaban/kondisi | Seharusnya | Aktual saat audit |
|---|---|---|---|
| react-3-4 | Updater `prev => { prev + 10; }` tanpa return | Gagal; menghasilkan undefined | Lulus |
| react-3-5 | Pembaruan immutable dengan `items.concat('Baru')` | Lulus | Gagal; terikat spread |
| react-4-1 | Parameter handler bernama `event` | Lulus | Gagal; terikat `e` |
| react-5-3 | Cleanup memakai `return function cleanup() {...}` | Lulus | Gagal; terikat arrow |
| react-6-2 | `useFetch` punya effect kosong tanpa mengambil data | Gagal | Lulus |
| react-8-3 | `queryFn: fetchUsers()` memanggil fungsi langsung | Gagal sesuai instruksi latihan | Lulus |

Perbaiki dengan pemeriksaan struktur/perilaku yang sesuai. Jangan hanya mengganti regex agar enam string ini cocok. Tambahkan variasi identifier, tanda kurung, function body, komentar, string pengecoh, return yang salah, dan pemanggilan yang salah. Cocokkan kembali expected dengan kontrak yang terlihat oleh siswa.

## Kekurangan pengajaran yang harus ditangani

- **react-3-4:** narasi dua klik cepat hanya menambah 10 membingungkan. React memproses intentional events seperti klik secara terpisah. Gunakan skenario beberapa setter dalam handler yang sama untuk menerangkan snapshot/batching, lalu bandingkan dengan klik terpisah. Buktikan dengan interaksi komponen lengkap. Sumber: [Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates).
- **react-5-3:** contoh tidak mencetak log atau merender angka, tetapi output menceritakan timer dibuat/dibersihkan dan angka layar. Simulasi setup/cleanup dengan fungsi timer tiruan menghasilkan nol log; itu bukan pengujian StrictMode/browser. Tambahkan kode yang benar-benar menghasilkan output atau beri label jejak konseptual terpisah. Uji mount, perubahan dependensi, dan unmount; bedakan siklus tambahan development StrictMode. Sumber: [useEffect](https://react.dev/reference/react/useEffect), [StrictMode](https://react.dev/reference/react/StrictMode).
- **react-11-4:** output “Mengakses URL backend tanpa hardcode di berkas kode” adalah manfaat, bukan hasil kode. Gunakan nilai environment fixture dan hasil yang dapat dilihat; ubah tugas agar meminta keputusan tanpa membocorkan seluruh jawaban.
- Periksa urutan konsep dan cleanup/error pada latihan pengambilan data. Potongan hook/setter boleh menjadi latihan sintaks dengan konteks jelas, tetapi latihan interaksi inti perlu komponen yang dapat dijalankan.
- Zustand, TanStack Query, dan testing library tidak otomatis tersedia di preview. Sediakan instruksi proyek lokal, versi/dependensi, dan contoh runnable. Jangan menyatakan integrasi bekerja hanya karena regex cocok.

## Risiko preview bersama — temuan source, belum reproduksi browser pada audit ini

`StepView.tsx` menyederhanakan import/export, mentranspilasi JSX, lalu memanggil `createRoot(...).render`. Pesan sukses segera setelah pemanggilan bukan bukti commit/render berhasil. Penanganan error juga dapat menyebut sintaks benar meski ada error runtime. Saat menyentuh bagian ini, bedakan compile error, runtime error pengguna, dan dependensi tak tersedia. Uji di browser; error render tertunda membutuhkan penanganan yang sesuai. Jangan mengubah UI bersama tanpa regresi track lain dan kedua mode belajar.

## Kriteria selesai

1. Keenam kasus React sesuai kontrak; kasus tambahan membuktikan pola kesalahannya tertutup. Selisih Next.js yang belum ditangani harus tetap dilaporkan sebagai outstanding, bukan dihapus.
2. Output contoh yang diubah diverifikasi dengan runner yang tepat. Catat setup, command, output aktual, serta pengujian browser yang benar-benar dilakukan.
3. Tinjau materi → contoh → latihan → kuis dan ketercakupan topics, bukan validator saja. Tetap 5–7 soal pilihan-ganda total per modul.
4. Jalankan `npm run verify:konten`, `npx tsc --noEmit && npx eslint src`, `npm run build`, audit kontrak, dan `uv run --with graphifyy graphify update`. Laporkan exit code aktual, diff, ID/progres yang terdampak, serta keterbatasan. Tidak boleh mengklaim semua track bersih jika audit gabungan masih gagal.
