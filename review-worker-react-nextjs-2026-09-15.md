# Review ulang hasil worker React / Next.js — 15 September 2026

## Putusan: belum diterima

Review source lokal di atas commit `8c98b41`, dengan perubahan worker pada React, Next.js, evaluator, tipe tes dan skrip audit. Tidak ada perubahan implementasi atau deploy dalam review ini. Reviewer menambahkan skrip bukti independen dan laporan ini.

Ada kemajuan: 13 baseline tetap dipertahankan, 111 fixture worker lulus, penjelasan klik terpisah vs satu handler sudah diperbaiki, concat serta sejumlah variasi fungsi diterima, dan note `daftar.length` pada Promise dikoreksi. Namun pola mencari kata global masih dominan; penghapusan komentar saja belum memeriksa struktur maupun perilaku program.

## Temuan yang direproduksi

Jalankan `npx tsx scripts/audit-react-next-worker-recheck.ts`: **10/10 ketidaksesuaian, exit 1**. Skrip memuat input lengkap, expected, actual dan pesan gagal dari `jalankanTes` produksi. Kesepuluhnya adalah kasus terarah baru, bukan hitungan seluruh cacat track.

| Prioritas | ID | Bukti | Expected → aktual |
|---|---|---|---|
| P1 | next-6-1 | `httpOnly: true && false` bernilai false, tetapi pattern hanya membaca awalan true | Gagal → lulus |
| P1 | next-6-3 | `if (false) { if (!session) redirect('/login'); }` tidak melindungi akses anonim | Gagal → lulus |
| P1 | next-6-4 | `export const config = {}` sementara matcher benar berada pada object `other` | Gagal → lulus |
| P2 | react-5-3 | Cleanup effect kosong; `clearInterval(timer)` berada di fungsi unrelated yang tidak dipanggil | Gagal → lulus |
| P2 | react-6-2 | Fetch dijalankan pada render hook, sedangkan effect kosong | Gagal → lulus |
| P2 | react-8-3 | `queryFn: function() { fetchUsers(); }` tidak mengembalikan hasil/promise | Gagal → lulus |
| P2 | react-11-4 | `const url = 'import.meta.env.VITE_API_URL'` hanya string literal | Gagal → lulus |
| P2 | next-3-1 | Seluruh kode component/fetch/JSX hanya isi template string `sample` | Gagal → lulus |
| P2 | react-4-1 | `value` berada di input pertama, `onChange` pada input kedua | Gagal → lulus |
| P2 | react-3-5 | `setItems(current => [...current, 'Baru'])` immutable dan sah; instruksi tidak mewajibkan nama updater | Lulus → gagal |

Penolakan `current` pada **react-3-4** tidak dihitung: instruksi lama maupun baru secara eksplisit meminta nama `prev`. Reviewer membuang hipotesis tersebut setelah memeriksa kontrak, bukan menganggap semua variasi harus lulus tanpa melihat instruksi.

## P1 — Bukti runtime tidak mendukung klaim kelulusan framework

`scripts/audit-react-next-learning.ts` menyebut “Runtime React/Next.js ... terbukti”, tetapi implementasinya:

- Baris sekitar 180–216: setter buatan sendiri dan `fakeTimer = 999`; tidak me-mount React, tidak menjalankan interval React atau unmount.
- Baris sekitar 237–249: server HTTP Node mengirim JSON, kemudian string HTML dirakit manual. Tidak ada Server Component Next.js yang dirender.
- Baris sekitar 260–270: fungsi `renderWithGuard` mengembalikan object status; tidak memanggil auth/redirect milik aplikasi.
- Baris sekitar 278–282: matcher diganti regex manual; tidak membaca config solusi dan tidak menjalankan Proxy Next.js.
- Baris sekitar 289–328: cache dan regenerasi ditulis sendiri; bukan Data Cache/ISR Next.js.
- Baris sekitar 339–379: `simulateUseActionStateCall` memanggil fungsi langsung; bukan hook React.

Simulasi boleh dipertahankan sebagai demonstrasi konsep dengan label jujur. Hasilnya tidak membuktikan komponen, routing, proteksi atau caching framework benar, dan tidak menggantikan pengujian yang diminta panduan worker. Kasus guard salah di atas tetap lulus validator meskipun simulasi guard worker hijau.

## P2 — Output contoh masih tidak dapat direproduksi

`src/data/tracks/nextjs.ts:882`: angka 214 ms/12 artikel diganti menjadi **142 ms/3 artikel**, tetapi kode tetap mengambil API contoh yang sama tanpa fixture tiga artikel. Pergantian angka tidak membuktikan output aktual. Explanation pada baris 879 juga masih mengatakan lupa await menghasilkan `[object Promise]`, bertentangan dengan note baru yang menjelaskan `.length` undefined.

Pada baris 691, 938, dan 2666, worker menambahkan header Next.js 16.2.12 di atas tabel `Size / First Load JS` lama beserta angka yang sama. Tidak tersedia proyek reproduksi pengukuran tersebut dalam perubahan worker. Jangan memberi kesan hasil build versi terpasang sudah diukur hanya dengan mengganti header. Gunakan fixture/proyek yang dapat dibangun dan log aktual, atau pisahkan ilustrasi konseptual dengan label jelas.

## Perbaikan yang diminta sebelum diterima

1. Pertahankan baseline dan tambahkan sepuluh kasus baru ini ke regresi. Jangan melemahkan expected, menghapus fixture, atau membatasi instruksi agar mengejar tes.
2. Periksa node/scope/binding/nilai yang relevan dengan AST atau eksekusi terbatas yang tepat. Pastikan nilai cookie milik cookieOptions, matcher milik exported config, atribut milik input yang sama, fetch dalam effect, dan cleanup benar-benar memakai timer yang dibuat effect. Penolakan literal `return;` atau penghapusan komentar belum menyelesaikan masalah alur kontrol.
3. Ganti klaim runtime simulasi; sediakan fixture React yang di-mount serta server Next.js nyata untuk fitur yang diklaim sudah diuji. Jangan mengeksekusi input arbitrer tanpa isolasi yang sesuai.
4. Verifikasi ulang contoh output, konsistensi explanation/note, serta pengajaran yang diubah. Lulus verifier tidak membuktikan hal-hal tersebut.

## Pemeriksaan yang benar-benar dijalankan reviewer

| Command | Hasil |
|---|---|
| `npx tsx scripts/audit-react-next-learning.ts --check` | Exit 0; 111 kasus, 0 mismatch, 0 kegagalan pada pemeriksaan yang dilabeli runtime (batasnya dijelaskan di atas) |
| `npx tsx scripts/audit-react-next-worker-recheck.ts` | Exit 1; 10/10 mismatch |
| `npm run verify:konten` | Exit 0; 149 materi, 882 step, 137 kuis, 729 soal |
| `npx tsc --noEmit` | Exit 0 |
| `npx eslint src scripts/audit-react-next-learning.ts` | Exit 0 |
| `npx tsx scripts/test-business-english.ts` | Exit 0; 604 asersi plus pemeriksaan tambahan |
| `npx tsx scripts/test-email-opening.ts` | Exit 0; 24 kasus + 4 scope/regresi |
| `npm run build` | Exit 0 |

Tidak ada pengujian browser/server Next.js tambahan oleh reviewer pada putaran ini; bukti baru adalah evaluasi kontrak melalui evaluator produksi serta inspeksi source. Perubahan React/Next.js belum dipush atau dipublikasikan oleh reviewer.
