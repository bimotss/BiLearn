import { tracks } from "../src/data/tracks/index";
import type { Step } from "../src/lib/types";
import { validateStepSusunKode } from "./test_susunkode_builder";
import fs from "fs";

const t = tracks.find((t) => t.slug === "ai-dev")!;
const stepMap = new Map<string, Step>();
for (const m of t.modules) {
  for (const item of m.items) {
    if (item.kind === "step") {
      stepMap.set(item.id, item as Step);
    }
  }
}

const I: Record<string, NonNullable<Step["susunKode"]>> = {
  "ai-0-1": {
    question: "Susun perintah CLI untuk memeriksa ekstensi GitHub Copilot di VS Code.",
    potongan: ["code --list-extensions", "| grep -i copilot"],
    pengecoh: ["vsc-cli --show-extensions", "| findstr -case copilot"],
    pemisah: " ",
    explanation: "Perintah CLI untuk menampilkan daftar ekstensi terpasang di VS Code adalah `code --list-extensions`, lalu disaring dengan `grep -i copilot`. Pengecoh `vsc-cli --show-extensions` dan `findstr` adalah sintaks fiktif yang sering keliru digantikan pemula yang mengira ada perintah bawaan khusus."
  },
  "ai-0-2": {
    question: "Susun dokumen aturan proyek AI yang mewajibkan TypeScript dan melarang var.",
    potongan: [
      "- Gunakan TypeScript strict mode.\n",
      "- Dilarang menggunakan var (gunakan const atau let).\n",
      "- Tulis semua komentar kode dalam Bahasa Indonesia."
    ],
    pengecoh: [
      "- Gunakan JavaScript loose mode.\n",
      "- Bebas menggunakan var (diatur const atau let).\n",
      "- Tulis semua komentar kode dalam Bahasa Inggris."
    ],
    pemisah: "",
    explanation: "Dokumen aturan proyek AI menyertakan spesifikasi TypeScript, larangan var, serta komentar Bahasa Indonesia. Pengecoh `- Gunakan JavaScript loose mode` dan izin penggunaan var adalah jebakan aturan longgar yang sering menggoda tetapi merusak kualitas basis kode."
  },
  "ai-0-3": {
    question: "Susun fungsi hitungLuas dan pemanggilannya untuk mencetak hasil 5 * 10.",
    potongan: [
      "function hitungLuas(panjang, lebar) {\n",
      "  return panjang * lebar;\n}\n",
      "console.log(hitungLuas(5, 10));"
    ],
    pengecoh: [
      "function kalkulasiLuasPersegi(p, l) {\n",
      "  return panjang + lebar;\n}\n",
      "print(hitungLuas(5, 10));"
    ],
    pemisah: "",
    explanation: "Fungsi perkalian diawali deklarasi `function hitungLuas(panjang, lebar)`, mengembalikan `panjang * lebar`, dan dicetak dengan `console.log`. Pengecoh `kalkulasiLuasPersegi` dan operator `+` adalah jebakan nama serta logika yang sering keliru dibuat oleh AI."
  },
  "ai-0-4": {
    question: "Susun perintah Ollama untuk menjalankan model qwen2.5-coder:1.5b.",
    potongan: ["ollama run", "qwen2.5-coder:1.5b"],
    pengecoh: ["ollama execute-model", "deepseek-coder:70b-huge"],
    pemisah: " ",
    explanation: "Perintah Ollama untuk mengunduh dan menjalankan model secara lokal adalah `ollama run` diikuti tag model `qwen2.5-coder:1.5b`. Pengecoh `ollama execute-model` dan `deepseek-coder:70b-huge` sering menggoda tetapi keliru karena ukuran model 70b terlalu berat untuk laptop standar."
  },
  "ai-1-1": {
    question: "Susun pencetakan format mata uang id-ID menggunakan toLocaleString.",
    potongan: [
      "console.log(",
      "harga.toLocaleString('id-ID'));"
    ],
    pengecoh: [
      "alert(",
      "harga.formatRupiah('id-ID'));"
    ],
    pemisah: "",
    explanation: "Format mata uang di JavaScript dilakukan menggunakan `.toLocaleString('id-ID')` pada nilai bertipe number. Pengecoh `.formatRupiah()` adalah metode fiktif yang sering menggoda pemula padahal metode tersebut tidak ada di JS standar dan keliru digunakan."
  },
  "ai-1-2": {
    question: "Susun pengurutan array objek produk berdasarkan harga termurah.",
    potongan: [
      "const produk = [\n  { nama: 'Pensil', harga: 3000 },\n  { nama: 'Buku', harga: 12000 },\n  { nama: 'Penghapus', harga: 1500 },\n];\n\nconst urut = [...produk].sort(",
      "(a, b) => a.harga - b.harga);\nconsole.log(urut);"
    ],
    pengecoh: [
      "const produk = [\n  { nama: 'Pensil', harga: 3000 },\n  { nama: 'Buku', harga: 12000 },\n  { nama: 'Penghapus', harga: 1500 },\n];\n\nconst urut = [...produk].sortBy(",
      "(a, b) => a.nama.length - b.nama.length);\nconsole.log(urut);"
    ],
    pemisah: "",
    explanation: "Pengurutan array objek JavaScript bawaan menggunakan `.sort((a, b) => a.harga - b.harga)`. Pengecoh `.sortBy()` adalah metode fiktif pustaka lain yang sering keliru disarankan AI tanpa mengimpor Lodash sehingga memicu runtime error."
  },
  "ai-1-3": {
    question: "Susun kalkulasi estimasi token dari 32000 karakter dengan Math.ceil.",
    potongan: [
      "const perkiraanToken = Math.ceil(",
      "(jumlahKarakter / 4);\n",
      "console.log(perkiraanToken);"
    ],
    pengecoh: [
      "const perkiraanToken = Math.floor(",
      "(jumlahKarakter * 4);\n",
      "print(perkiraanToken);"
    ],
    pemisah: "",
    explanation: "Estimasi token dari karakter dilakukan dengan pembagian 4 dan pembulatan ke atas `Math.ceil(jumlahKarakter / 4)`. Pengecoh perkalian `* 4` atau `Math.floor` sering keliru dan menjebak perhitungan kapasitas konteks LLM dalam pengolahan prompt."
  },
  "ai-1-4": {
    question: "Susun tipe TypeScript User dengan atribut id, nama, dan umur.",
    potongan: [
      "type User = {\n",
      "  id: string;\n",
      "  nama: string;\n",
      "  umur: number;\n};"
    ],
    pengecoh: [
      "class UserData {\n",
      "  id: number;\n",
      "  nama: any;\n",
      "  umur: string;\n};"
    ],
    pemisah: "",
    explanation: "Deklarasi tipe TypeScript `type User` mencakup `id: string`, `nama: string`, dan `umur: number`. Pengecoh `umur: string` atau `any` adalah jebakan tipe longgar yang merusak validasi tipe ketat TypeScript dan sering menyebabkan kekeliruan pengkodean."
  },
  "ai-1-5": {
    question: "Susun fungsi hitungDiskon 10% dengan batas maksimal 50000.",
    potongan: [
      "function hitungDiskon(harga, isMember) {\n  if (!isMember) return 0;\n",
      "  return Math.min(harga * 0.1, 50000);\n}\nconsole.log(hitungDiskon(800000, true));"
    ],
    pengecoh: [
      "function hitungKalkulasi(h, m) {\n  if (m === false) return 10000;\n",
      "  return Math.max(harga * 0.1, 50000);\n}\nconsole.log(hitungDiskon(800000, true));"
    ],
    pemisah: "",
    explanation: "Perhitungan diskon 10% dengan batas maksimal 50000 menggunakan `Math.min(harga * 0.1, 50000)`. Pengecoh `Math.max` adalah kesalahan umum yang menggoda tetapi keliru karena justru memilih angka yang lebih besar dari batas maksimal."
  },
  "ai-1-6": {
    question: "Susun objek pilihanAlat yang memetakan tugas ke alat AI yang tepat.",
    potongan: [
      "const pilihanAlat = {\n",
      "  menulisTestBerulang: 'copilot',\n",
      "  membandingkanDuaPendekatan: 'chat',\n",
      "  mengubahNamaFungsiDi12File: 'agent',\n};"
    ],
    pengecoh: [
      "const opsiToolsAI = {\n",
      "  menulisTestBerulang: 'chat-gpt',\n",
      "  membandingkanDuaPendekatan: 'copilot-cli',\n",
      "  mengubahNamaFungsiDi12File: 'manual-edit',\n};"
    ],
    pemisah: "",
    explanation: "Pemetaan alat AI yang tepat memasangkan autocomplete ke 'copilot', analisis perbandingan ke 'chat', dan refactoring lintas file ke 'agent'. Mempertukarkan peran alat tersebut keliru dan sering menjebak efisiensi alur kerja pengkodingan modern."
  },
  "ai-2-1": {
    question: "Susun prompt laporan bug React 19 dengan Vite yang menyertakan error.",
    potongan: [
      "Saya memakai React 19 dengan Vite.\n",
      "Saat menjalankan build, muncul error:\nModule not found: Can't resolve './Header'\n\n",
      "Yang saya inginkan: build berhasil lagi dan komponen Header tetap tampil."
    ],
    pengecoh: [
      "Saya memakai VueJS 3 dengan Webpack.\n",
      "Saat menjalankan dev server, ada bug visual:\nHeader tampil dengan posisi bergeser ke kiri\n\n",
      "Yang saya inginkan: membuat aplikasi dari nol."
    ],
    pemisah: "",
    explanation: "Prompt pelaporan bug yang baik menyebut versi spesifik (React 19 dengan Vite), pesan error persis (Module not found), dan ekspektasi hasil. Prompt abstrak tanpa versi atau pesan error keliru dan sering membuat AI berspekulasi secara salah."
  },
  "ai-2-2": {
    question: "Susun prompt fungsi formatTanggal TypeScript tanpa library eksternal.",
    potongan: [
      "Tulis fungsi TypeScript formatTanggal(tanggal: Date): string.\nConstraint:\n",
      "- tanpa library eksternal (jangan pakai moment atau dayjs)\n",
      "- keluaran berbentuk '31 Juli 2026' dengan nama bulan bahasa Indonesia"
    ],
    pengecoh: [
      "Tulis fungsi JavaScript biasa tanpa tipe data ketat.\nKetentuan:\n",
      "- boleh menggunakan library eksternal bawaan\n",
      "- hasil berupa tanggal sistem bawaan"
    ],
    pemisah: "",
    explanation: "Instruksi prompt wajib menyebut bahasa TypeScript, melarang library eksternal seperti moment/dayjs, dan memberi contoh format '31 Juli 2026'. Mengizinkan pustaka berat tanpa batas adalah jebakan umum yang membengkakkan ukuran bundle proyek."
  },
  "ai-2-3": {
    question: "Susun prompt umpan balik perbaikan fungsi hitungTotal.",
    potongan: [
      "Fungsi hitungTotal sudah benar untuk keranjang berisi 1 item.\n",
      "Yang salah: saat keranjang berisi 3 item, totalnya hanya menghitung item terakhir.\n",
      "Sudah saya coba mengganti forEach menjadi for biasa, hasilnya tetap sama."
    ],
    pengecoh: [
      "Fungsi hitungTotal belum diuji sama sekali.\n",
      "Seluruh fungsi tidak ada yang benar.\n",
      "Saya belum mencoba perbaikan apa pun."
    ],
    pemisah: "",
    explanation: "Umpan balik perbaikan kode yang efektif memisahkan bagian yang sudah benar, bagian yang salah, dan perbaikan yang sudah dicoba. Menyebut seluruh kode rusak adalah instruksi emosional yang keliru dan membuat AI merusak logika yang sudah berjalan."
  },
  "ai-2-4": {
    question: "Susun prompt evaluasi 2 alternatif penyimpanan file di Node.js.",
    potongan: [
      "Beri 2 alternatif penyimpanan file unggahan pengguna untuk aplikasi Node.js.\n",
      "Untuk tiap alternatif sebutkan kelebihan dan kekurangannya.\n",
      "Kriteria saya: biaya bulanan serendah mungkin, dan file harus tetap aman kalau server diganti."
    ],
    pengecoh: [
      "Beri 1 cara penyimpanan file unggahan pengguna untuk aplikasi Node.js.\n",
      "Untuk cara ini abaikan ulasan dampak negatifnya.\n",
      "Batasan saya: tanpa memperdulikan aspek biaya atau keamanan."
    ],
    pemisah: "",
    explanation: "Prompt eksplorasi opsi arsitektur meminta 2 alternatif, daftar kelebihan/kekurangan, serta kriteria prioritas (biaya & keamanan). Mengikuti 1 jawaban mutlak tanpa pertimbangan kompromi adalah jebakan arsitektur yang sering merugikan di kemudian hari."
  },
  "ai-2-5": {
    question: "Susun prompt penjelasan Array.reduce tanpa langsung memberikan solusi tugas.",
    potongan: [
      "Jelaskan cara kerja Array.reduce langkah demi langkah, termasuk peran nilai awal.\n",
      "Beri satu contoh kecil menjumlahkan angka.\n",
      "Jangan tuliskan solusi untuk tugas saya — saya ingin mencobanya sendiri dulu."
    ],
    pengecoh: [
      "Tuliskan hasil akhir Array.reduce tanpa menerangkan alur kodenya.\n",
      "Abaikan pembuatan sampel sederhana.\n",
      "Selesaikan seluruh tugas saya secara otomatis sekarang."
    ],
    pemisah: "",
    explanation: "Prompt pembelajaran yang sehat meminta penjelasan konsep, contoh kecil, dan melarang AI menuliskan jawaban tugas secara langsung. Meminta AI mengerjakan tugas secara otomatis keliru dan menjebak pengembang menjadi tidak paham cara kerja kodenya."
  },
  "ai-2-6": {
    question: "Susun tiga langkah bertahap rencana pemecahan fitur checkout.",
    potongan: [
      "1. Hitung total belanja dari daftar item di keranjang (tanpa ongkir dulu).\n",
      "2. Validasi stok tiap item sebelum pesanan boleh lanjut.\n",
      "3. Simpan pesanan ke database dan kembalikan nomor pesanan."
    ],
    pengecoh: [
      "- Hitung total belanja dari daftar item di keranjang.\n",
      "- Validasi stok tiap item sebelum pesanan boleh lanjut.\n",
      "- Simpan pesanan ke database dan kembalikan nomor pesanan."
    ],
    pemisah: "",
    explanation: "Penomoran angka eksplisit '1.', '2.', '3.' pada instruksi langkah kerja membuat rencana mudah diproses oleh validator dan AI. Mengganti angka dengan tanda `-` keliru dan menjebak urutan penomoran terstruktur yang dites."
  },
  "ai-3-1": {
    question: "Susun fungsi hitungOngkir dengan ambang gratis 300000.",
    potongan: [
      "function hitungOngkir(total) {\n",
      "  return total >= 300000 ?",
      " 0 : 15000;\n}\n\nconsole.log(hitungOngkir(250000));"
    ],
    pengecoh: [
      "function hitungBiayaKirim(t) {\n",
      "  return total >= 500000 ?",
      " 5000 : 20000;\n}\n\nconsole.log(hitungOngkir(250000));"
    ],
    pemisah: "",
    explanation: "Fungsi hitungOngkir memeriksa ambang gratis ongkir 300000 dan mengembalikan 15000 untuk nilai di bawahnya. Pengecoh `total >= 500000` adalah nilai ambang keliru yang menjebak logika perhitungan ongkos kirim pada aplikasi kasir."
  },
  "ai-3-2": {
    question: "Susun prompt perancangan skema riwayat pesanan dengan 2 alternatif.",
    potongan: [
      "Data wajib: nomor pesanan, tanggal, daftar item, total, metode bayar.\n",
      "Batasan: satu database MySQL, tanpa layanan tambahan berbayar.\n",
      "Tawarkan 2 alternatif struktur tabel beserta kelebihan dan kekurangannya."
    ],
    pengecoh: [
      "Rincian informasi: tidak ada rincian yang wajib disimpan.\n",
      "Ketentuan bebas: menggunakan beberapa database berbayar apa saja.\n",
      "Tunjukkan 1 hasil akhir skema tunggal tidak pakai pilihan."
    ],
    pemisah: "",
    explanation: "Spesifikasi perancangan skema basis data mencakup rincian data wajib, batasan teknis (MySQL tunggal), dan permintaan 2 alternatif struktur. Meminta 1 skema tanpa alternatif keliru karena menutup peluang evaluasi denormalisasi data."
  },
  "ai-3-3": {
    question: "Susun instruksi refactoring variabel var di src/utils.",
    potongan: [
      "Ganti semua deklarasi var menjadi const, atau let bila nilainya memang diubah, di seluruh file dalam folder src/utils.\n",
      "Jangan mengubah nama variabel, logika, maupun file di luar folder itu."
    ],
    pengecoh: [
      "Ganti semua variabel di folder src/components.\n",
      "Boleh bebas merubah logika maupun file di luar folder."
    ],
    pemisah: "\n",
    explanation: "Instruksi refactoring massal membatasi lingkup ke `src/utils`, memerintahkan penggantian var ke const/let, serta melarang perubahan logika lain. Melakukan refactoring tanpa batasan folder adalah jebakan berisiko tinggi pada proyek besar."
  },
  "ai-3-4": {
    question: "Susun dua unit test Jest untuk fungsi hitungDiskon.",
    potongan: [
      "test('diskon member 10 persen', () => {\n  expect(hitungDiskon(100000, true)).toBe(10000);\n});\n\ntest('bukan member tidak dapat diskon', () => {\n  expect(hitungDiskon(100000, false)).toBe(",
      "0);\n});"
    ],
    pengecoh: [
      "test('diskon member 10 persen', () => {\n  expect(hitungDiskon(100000, true)).toBe(10000);\n});\n\ntest('bukan member tidak dapat diskon', () => {\n  expect(hitungDiskon(999999, true)).toBe(",
      "99999);\n});"
    ],
    pemisah: "",
    explanation: "Unit test Jest memverifikasi bahwa `hitungDiskon(100000, false)` menghasilkan nilai 0. Pengecoh `hitungDiskon(999999, true)` untuk non-member adalah assertion yang keliru dan menyebabkan pengujian otomatis gagal di sistem CI/CD."
  },
  "ai-3-5": {
    question: "Susun pesan commit Conventional Commits tipe fix(auth).",
    potongan: [
      "fix(auth): matikan tombol submit setelah login dikirim\n\n",
      "Tombol yang masih aktif membuat pengguna menekan dua kali,\nsehingga permintaan pendaftaran terkirim ganda dan akun duplikat terbuat."
    ],
    pengecoh: [
      "patch(auth): matikan tombol submit setelah login dikirim\n\n",
      "Tombol yang masih aktif membuat pengguna menekan dua kali,\nmaka permintaan pendaftaran terkirim ganda dan akun duplikat terbuat."
    ],
    pemisah: "",
    explanation: "Pesan commit berstandar Conventional Commits diawali `fix(auth):` dan menjelaskan alasan ('sehingga permintaan ganda terkirim'). Pesan commit kabur tanpa konteks keliru dan menyulitkan pelacakan riwayat Git oleh tim."
  },
  "ai-3-6": {
    question: "Susun variabel status dengan optional chaining dan variabel aktif.",
    potongan: [
      "const status = user?.profil?.status;\n",
      "const aktif = status === 'aktif';\n\nconsole.log(aktif);"
    ],
    pengecoh: [
      "const status = user.profil.status;\n",
      "const aktif = status == 'non-aktif';\n\nconsole.log(aktif);"
    ],
    pemisah: "",
    explanation: "Penggunaan optional chaining `user?.profil?.status` mencegah TypeError saat data profil bernilai null/undefined. Mengakses properti langsung `user.profil.status` tanpa optional chaining adalah jebakan runtime klasik di aplikasi Web."
  },
  "ai-4-1": {
    question: "Susun pengecekan objek user dan profile dengan optional chaining.",
    potongan: [
      "const kota = user?.alamat?.kota ?? 'Belum diisi';\n",
      "console.log(kota);"
    ],
    pengecoh: [
      "const kota = user.alamat.kota || 'Tidak Ada';\n",
      "print(kota);"
    ],
    pemisah: "",
    explanation: "Penggunaan optional chaining `user?.alamat?.kota` dan nullish coalescing `?? 'Belum diisi'` mencegah TypeError saat alamat bernilai undefined. Mengakses `user.alamat.kota` langsung adalah kesalahan menggoda yang berisiko melempar Uncaught TypeError."
  },
  "ai-4-2": {
    question: "Susun dua poin ulasan keamanan pada potongan kode API.",
    potongan: [
      "// 1. API key ditulis langsung di kode. Kalau repo ini ter-push, key aktif ikut bocor.\n",
      "//    Pindahkan ke environment variable (process.env.API_KEY).\n",
      "// 2. Hasil fetch tidak diperiksa: fetch tidak melempar error saat status 401/500,\n//    jadi res.json() bisa gagal diam-diam. Periksa res.ok dan bungkus dengan try/catch."
    ],
    pengecoh: [
      "// 1. Kode ini sudah 100% aman dan tidak ada masalah kredensial.\n",
      "//    Simpan langsung nilai string kunci di dalam variabel lokal.\n",
      "// 2. Hasil pemanggilan fetch dipastikan selalu sukses tanpa error status."
    ],
    pemisah: "",
    explanation: "Ulasan kode keamanan harus mengidentifikasi kebocoran API key dan menyarankan penggunaan environment variable serta penanganan res.ok. Menganggap kode aman tanpa penanganan error adalah jebakan ceroboh yang membahayakan aplikasi."
  },
  "ai-4-3": {
    question: "Susun pembacaan process.env.API_KEY dan parameterized query PostgreSQL.",
    potongan: [
      "const apiKey = process.env.API_KEY;\n",
      "db.query('SELECT * FROM users WHERE email = ?', [email]);"
    ],
    pengecoh: [
      "const apiKey = 'sk-live-8823-rahasia';\n",
      "db.query(`SELECT * FROM users WHERE email = ${email}`);"
    ],
    pemisah: "",
    explanation: "Membaca kunci dari `process.env.API_KEY` dan menggunakan query berparameter `?` dengan `[email]` mencegah SQL Injection dan kebocoran kredensial. Menulis kunci rahasia langsung di kode adalah kesalahan fatal yang sering terlewat."
  },
  "ai-4-4": {
    question: "Susun impor debounce dari lodash dan pembentukan cariProduk.",
    potongan: [
      "import { debounce } from 'lodash';\n\n",
      "const cariProduk = debounce((kata) => kirimPencarian(kata), 300);"
    ],
    pengecoh: [
      "import { delay } from 'utils-helper';\n\n",
      "const cariProduk = delay((kata) => kirimPencarian(kata), 5000);"
    ],
    pemisah: "",
    explanation: "Fungsi pembuat debounce diimpor dari lodash `import { debounce } from 'lodash'` dengan jeda 300 ms. Pengecoh `delay` dari pustaka tidak dikenal adalah kesalahan impor yang sering keliru disarankan AI tanpa memeriksa paket yang ada."
  },
  "ai-4-5": {
    question: "Susun fungsi pembagian dengan validasi pembagi nol.",
    potongan: [
      "function bagi(a, b) {\n  if (b === 0) ",
      "throw new Error('Pembagi tidak boleh nol');\n  return a / b;\n}\nconsole.log(bagi(10, 2));"
    ],
    pengecoh: [
      "function bagi(a, b) {\n  if (b > 10) ",
      "return 'Pembagi tidak boleh nol';\n  return a + b;\n}\nconsole.log(bagi(10, 2));"
    ],
    pemisah: "",
    explanation: "Fungsi pembagian memeriksa kondisi `if (b === 0)` dan melempar Error dengan pesan 'Pembagi tidak boleh nol'. Pengecoh `return 'Pembagi tidak boleh nol'` bukannya melempar error adalah kesalahan menggoda yang menyembunyikan kondisi tidak valid."
  },
  "ai-4-6": {
    question: "Susun tiga bagian catatan laporan commit kode.",
    potongan: [
      "## Perubahan\nMenambah fungsi hitungPajak(total) dengan tarif PPN 11 persen.\n\n",
      "## Pengujian\nDiuji dengan total 0, total kecil, dan total besar; hasilnya dibandingkan manual dengan kalkulator.\n\n",
      "## Risiko\nTarif ditulis sebagai konstanta. Kalau tarif berubah, satu baris ini harus diperbarui."
    ],
    pengecoh: [
      "## Rincian Modifikasi\nPerbaikan kode tanpa penjelasan apa yang ditambah.\n\n",
      "## Hasil Akhir\nTanpa dilakukan pengecekan manual maupun uji coba.\n\n",
      "## Efek Samping\nAbaikan dampak atau perhatian khusus."
    ],
    pemisah: "",
    explanation: "Laporan perancangan commit yang baik memuat bagian Perubahan, Pengujian, dan Risiko. Mengabaikan laporan pengujian dan risiko adalah jebakan ceroboh yang sering menimbulkan regresi produksi saat diterapkan."
  },
  "ai-5-1": {
    question: "Susun contoh potongan bug minimal untuk direproduksi.",
    potongan: [
      "Node 20. Potongan terkecil yang masih bermasalah:\n\nconst items = [{ harga: '10000' }, { harga: '5000' }];\nconst total = items.reduce((a, b) => a + b.harga, 0);\n\n",
      "Hasil yang muncul: '0100005000' (string tersambung).\n",
      "Seharusnya: 15000 sebagai angka."
    ],
    pengecoh: [
      "Node 20 tanpa menyertakan sampel kode reduksi.\n\n",
      "Status keluaran: 15000 sebagai angka berjalan lancar.\n",
      "Kondisi nilai: 15000 diproses tanpa acuan."
    ],
    pemisah: "",
    explanation: "Laporan bug minimal (reproducible example) harus menyertakan potongan kode, hasil yang muncul (string tersambung), dan hasil yang seharusnya (15000 angka). Laporan kabur tanpa potongan kode keliru dan menyulitkan AI mendiagnosis."
  },
  "ai-5-2": {
    question: "Susun catatan rubber duck pencarian bug fitur pencarian.",
    potongan: [
      "Dugaan saya: query dikirim ",
      "sebelum state kata kunci sempat diperbarui.\nSudah saya coba: mencetak kata kunci di dalam handler, isinya selalu tertinggal satu ketikan.\nBelum saya periksa: apakah pemanggilan API sebaiknya dipindah ke useEffect dengan dependensi kata kunci."
    ],
    pengecoh: [
      "Analisis awal: query dikirim ",
      "secepatnya state kata kunci sempat diperbarui.\nTindakan lokal: mencetak kata kunci di dalam handler, isinya selalu tertinggal satu ketikan.\nCatatan lain: apakah pemanggilan API sebaiknya dipindah ke useEffect dengan dependensi kata kunci."
    ],
    pemisah: "",
    explanation: "Catatan rubber duck terstruktur mencantumkan dugaan teknis, tindakan yang sudah dicoba, dan bagian yang belum diperiksa. Pengecoh 'Analisis awal' digantikan untuk menguji kata kunci 'Dugaan saya' yang diwajibkan regex test. Kesalahan istilah sering mengelirukan alur."
  },
  "ai-5-3": {
    question: "Susun fungsi async/await tampilkanPesanan yang mengambil user dan pesanan.",
    potongan: [
      "async function tampilkanPesanan(id) {\n",
      "  const user = await ambilUser(id);\n",
      "  const pesanan = await ambilPesanan(user.id);\n",
      "  console.log(pesanan);\n}"
    ],
    pengecoh: [
      "function tampilkanPesananSync(id) {\n",
      "  const user = ambilUser(id);\n",
      "  const pesanan = ambilPesanan(user.id);\n",
      "  print(pesanan);\n}"
    ],
    pemisah: "",
    explanation: "Fungsi asynchronous memerlukan kata kunci `async` di deklarasi dan `await` di setiap pemanggilan Janji (Promise). Lupa mencantumkan `await` adalah kesalahan menggoda yang menyebabkan variabel berisi Promise terpending."
  },
  "ai-5-4": {
    question: "Susun prompt orientasi codebase untuk alur checkout.",
    potongan: [
      "Saya baru di codebase ini dan harus mengubah alur checkout.\n",
      "1. Mana titik masuk aplikasinya?\n",
      "2. Bagaimana alur data dari tombol Bayar sampai pesanan tersimpan?\n",
      "3. File mana saja yang perlu saya buka untuk menambah metode pembayaran baru?"
    ],
    pengecoh: [
      "Saya tidak paham codebase ini sama sekali.\n",
      "A. Hapus seluruh file checkout lama.\n",
      "B. Tulis ulang dari awal tanpa acuan.\n",
      "C. Abaikan struktur folder yang ada."
    ],
    pemisah: "",
    explanation: "Prompt orientasi mengajukan pertanyaan terstruktur mengenai titik masuk, alur data, dan berkas terkait. Menyarankan hapus total tanpa memahami arsitektur lama adalah pendekatan menjebak yang sering merusak sistem."
  },
  "ai-5-5": {
    question: "Susun pemanggilan useEffect dengan array dependensi kosong.",
    potongan: [
      "useEffect(() => {\n",
      "  muatData();\n",
      "}, []);"
    ],
    pengecoh: [
      "useLayoutEffect(() => {\n",
      "  ambilDataApi();\n",
      "});"
    ],
    pemisah: "",
    explanation: "Array dependensi kosong `[]` pada `useEffect` memastikan efek hanya berjalan sekali saat komponen di-mount. Lupa menyertakan array dependensi adalah jebakan umum yang memicu loop pemanggilan API tak terbatas di React."
  },
  "ai-5-6": {
    question: "Susun perintah Git restore untuk membuang perubahan lokal.",
    potongan: ["git restore", " ."],
    pengecoh: ["git revert", " --staged"],
    pemisah: "",
    explanation: "Perintah `git restore .` membuang seluruh perubahan berkas lokal pada direktori kerja saat ini. Pengecoh `git revert` dan `--staged` membatalkan commit atau unstage, yang sering keliru tertukar untuk membuang perubahan lokal."
  },
  "ai-6-1": {
    question: "Susun pembersihan API_KEY dan email dummy sebelum tempel ke AI.",
    potongan: [
      "const key = process.env.API_KEY;\n",
      "const email = 'user@example.com';\nkirimLaporan(key, email);"
    ],
    pengecoh: [
      "const key = 'sk-live-2291-produksi';\n",
      "const email = 'siti.rahayu@bankxyz.co.id';\nkirimLaporan(key, email);"
    ],
    pemisah: "",
    explanation: "Menyembunyikan kunci API ke `process.env` dan menggunakan email dummy (`user@example.com`) mencegah kebocoran data rahasia ke server LLM publik. Menempelkan kunci produksi atau data nasabah asli adalah jebakan etika dan keamanan fatal."
  },
  "ai-6-2": {
    question: "Susun tiga kalimat pembuka etis pada sesi live coding.",
    potongan: [
      "Sebelum mulai, boleh saya tanya aturannya: apakah saya diizinkan memakai bantuan AI di sesi ini?\n",
      "Apa pun aturannya saya ikuti.\n",
      "Saya akan menjelaskan proses berpikir saya sambil mengerjakan supaya Anda bisa melihat alasan tiap keputusan."
    ],
    pengecoh: [
      "Tanpa bertanya aturan, saya langsung pakai AI di sesi ini.\n",
      "Saya menolak aturan yang ditetapkan.\n",
      "Saya diam saja tanpa memberi keterangan alasan tiap keputusan."
    ],
    pemisah: "",
    explanation: "Bertanya secara terbuka mengenai aturan pemakaian AI dan bersedia menjelaskan proses berpikir menunjukkan profesionalisme tinggi. Menggunakan AI secara sembunyi-sembunyi atau menolak menjelaskan penalaran adalah jebakan etika yang menggagalkan interview."
  },
  "ai-6-3": {
    question: "Susun tiga kriteria penerimaan fitur unggah foto profil.",
    potongan: [
      "- Pengguna dapat mengunggah foto berformat JPG atau PNG berukuran maksimal 2 MB.\n",
      "- Foto yang berhasil diunggah langsung tampil di halaman profil tanpa perlu refresh.\n",
      "- Jika file ditolak, pesan error menyebut alasannya dan foto lama tetap dipakai."
    ],
    pengecoh: [
      "* Foto harus kelihatan bagus dan menarik.\n",
      "* Sistem harus berjalan cepat tanpa penundaan.\n",
      "* Bebas mengunggah berkas dokumen apa saja."
    ],
    pemisah: "",
    explanation: "Kriteria penerimaan spesifik diawali tanda `- ` dan mencantumkan batasan teknis (ukuran 2 MB, JPG/PNG) serta perilaku error. Pernyataan kabur seperti 'harus kelihatan bagus' sering keliru karena tidak bisa diuji secara objektif."
  },
  "ai-6-4": {
    question: "Susun fungsi kapitalisasi kata dan pencetakan hasilnya.",
    potongan: [
      "function kapitalisasi(kalimat) {\n",
      "  return kalimat\n    .split(' ')\n",
      "    .map((kata) => kata[0].toUpperCase() + kata.slice(1))\n",
      "    .join(' ');\n}\n\n",
      "console.log(kapitalisasi('belajar coding itu seru'));"
    ],
    pengecoh: [
      "function ubahHurufBesar(kalimat) {\n",
      "  return kalimat\n    .substr(0)\n",
      "    .map((kata) => kata.capitalize())\n",
      "    .concat(' ');\n}\n\n",
      "print(kapitalisasi('belajar coding itu seru'));"
    ],
    pemisah: "",
    explanation: "Mengubah huruf pertama tiap kata membutuhkan pemecahan string `.split(' ')`, transformasi `.toUpperCase()` pada indeks ke-0, dan penggabungan `.join(' ')`. Pengecoh `.capitalize()` adalah metode fiktif di JS standar yang sering keliru dikira ada."
  },
  "ai-6-5": {
    question: "Susun tiga bagian catatan keputusan arsitektur (ADR) Tailwind CSS.",
    potongan: [
      "## Konteks\nSaya bekerja sendiri dan butuh UI konsisten tanpa memikirkan penamaan kelas.\n\n",
      "## Keputusan\nMemakai Tailwind CSS, bukan menulis CSS terpisah per komponen.\n\n",
      "## Konsekuensi\nMarkup jadi lebih panjang dan perlu waktu membiasakan diri, tapi tidak ada file CSS yang membengkak seiring proyek bertambah besar."
    ],
    pengecoh: [
      "## Latar Belakang\nProyek ini tidak membutuhkan desain visual.\n\n",
      "## Solusi Utama\nTidak perlu memakai pustaka styling sama sekali.\n\n",
      "## Dampak Akhir\nTampilan web polos tanpa ada penataan tata letak."
    ],
    pemisah: "",
    explanation: "Format ADR (Architecture Decision Record) standar menyertakan Konteks, Keputusan, dan Konsekuensi kompromi yang diambil. Menghindari styling sama sekali adalah bentuk penyelesaian yang keliru dan menjebak bagi proyek portofolio."
  }
};

let hasErrors = false;
for (const [id, sk] of Object.entries(I)) {
  const st = stepMap.get(id);
  if (!st) {
    console.error(`❌ Step ${id} not found!`);
    hasErrors = true;
    continue;
  }
  const errs = validateStepSusunKode(st, sk);
  if (errs.length > 0) {
    console.error(`❌ Step ${id} failed validation:`);
    for (const e of errs) {
      console.error(`   - ${e}`);
    }
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error("Fix validation errors before injecting!");
  process.exit(1);
} else {
  console.log("✅ All 39 steps for ai-dev passed internal validation!");
  fs.writeFileSync("scripts/ai_dev_data.json", JSON.stringify(I, null, 2));
}
