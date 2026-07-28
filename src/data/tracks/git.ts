import type { Track } from "@/lib/types";

export const gitTrack: Track = {
  slug: "git",
  title: "Git & GitHub",
  description:
    "Version control + simulasi PR-based workflow seperti di tempat kerja.",
  hours: 25,
  recommendedPrereqs: [],
  color: "bg-red-500",
  icon: "🌿",
  order: 4,
  modules: [
    {
      slug: "persiapan-dasar-git",
      title: "Persiapan & Dasar Git",
      description:
        "Pasang Git, kenali terminal, lalu bangun mental model yang benar: snapshot, staging, dan riwayat — bukan hafalan perintah.",
      topics: [
        "Kenapa version control ada (dan horor folder 'final_v2_beneran')",
        "Memasang Git di Windows, macOS, Linux — dan di mana perintahnya ditulis",
        "Instalasi & konfigurasi awal (user.name, user.email)",
        "git init, status, add — memahami staging area",
        "git commit & menulis pesan commit yang baik",
        "git log, diff, show — membaca riwayat",
        ".gitignore: apa yang TIDAK boleh masuk repo",
        "Membatalkan perubahan: restore & unstage",
      ],
      items: [
        {
          kind: "materi",
          id: "git-1-m1",
          title: "Persiapan: Memasang Git, Membuka Terminal, dan Cara Git Berpikir",
          body:
            "# Pengertian\n\n" +
            "**Version control** adalah sistem yang mencatat setiap perubahan pada berkas proyekmu: apa yang berubah, siapa yang mengubahnya, kapan, dan alasannya. **Git** adalah program version control yang dipakai hampir semua tim software. **GitHub** adalah layanan di internet tempat repositori Git disimpan dan dibagikan.\n\n" +
            "Dua nama itu sering dianggap satu hal, padahal berbeda — dan perbedaannya penting: Git jalan di komputermu dan tetap berfungsi tanpa internet; GitHub hanyalah salah satu tempat menitipkan salinannya (ada juga GitLab dan Bitbucket).\n\n" +
            "| Cara lama (folder manual) | Cara Git |\n" +
            "|---|---|\n" +
            "| `tugas.zip`, `tugas_final.zip`, `tugas_final_v2_beneran.zip` | satu folder, riwayat lengkap di dalamnya |\n" +
            "| Tidak tahu apa bedanya antar berkas | `git diff` menunjukkan baris yang berubah |\n" +
            "| Alasan perubahan hilang dari ingatan | tercatat di pesan commit |\n" +
            "| Dua orang mengedit berkas sama → satu tertimpa | Git menggabungkan, dan memberi tahu kalau bentrok |\n" +
            "| Salah hapus = hilang selamanya | bisa dikembalikan ke commit mana pun |\n\n" +
            "## Memasang Git\n\n" +
            "| Sistem operasi | Cara memasang | Terminal yang dipakai |\n" +
            "|---|---|---|\n" +
            "| Windows | unduh installer dari git-scm.com, klik Next sampai selesai | **Git Bash** (ikut terpasang bersama Git) |\n" +
            "| macOS | `brew install git`, atau jalankan `git --version` lalu izinkan macOS memasang Command Line Tools | Terminal (Applications → Utilities) |\n" +
            "| Linux (Ubuntu/Debian) | `sudo apt update && sudo apt install git` | Terminal bawaan |\n\n" +
            "Cara memastikan pemasangan berhasil hanya satu: jalankan `git --version`. Kalau muncul nomor versi seperti `git version 2.45.2`, Git siap dipakai. Kalau muncul `command not found`, Git belum terpasang atau terminal perlu ditutup dan dibuka ulang.\n\n" +
            "## Di Mana Perintah Git Ditulis\n\n" +
            "Ini bagian yang paling sering dilewatkan tutorial, padahal justru di sini pemula macet. Perintah Git **tidak** ditulis di dalam berkas kode, dan tidak dijalankan dengan menekan tombol Run di editor. Ia ditulis di **terminal**: jendela hitam (atau putih) tempat kamu mengetik satu baris perintah lalu menekan Enter.\n\n" +
            "```text\n" +
            "editor kode (VS Code)          terminal (Git Bash / Terminal)\n" +
            "-----------------------        ------------------------------\n" +
            "index.html                     $ cd ~/Documents/proyek-toko\n" +
            "style.css        <-- kamu      $ git add index.html\n" +
            "app.js               mengedit  $ git commit -m \"feat: tambah harga\"\n" +
            "                     berkas    ^\n" +
            "                               tanda $ TIDAK ikut diketik\n" +
            "```\n\n" +
            "Sebelum menjalankan perintah Git, terminal harus berada **di dalam folder proyekmu**. Pindah folder memakai `cd nama-folder`, dan `pwd` (di Windows: `pwd` juga jalan di Git Bash) memberi tahu kamu sedang di mana.\n\n" +
            "> **Catatan jujur soal latihan di BiLearn:** panel latihan di bawah hanya memeriksa apakah perintah yang kamu tulis benar. Ia **tidak** benar-benar menjalankan Git, karena preview berjalan di dalam browser dan browser tidak punya Git. Jadi jangan menunggu keluaran muncul — keluaran nyata sengaja ditampilkan di bagian **Contoh** setiap latihan supaya kamu tahu bentuk aslinya.\n\n" +
            "## Tiga Wilayah yang Wajib Kamu Bayangkan\n\n" +
            "Hampir semua kebingungan Git di bulan pertama berasal dari tidak membedakan tiga wilayah ini:\n\n" +
            "```text\n" +
            "  WORKING DIRECTORY        STAGING AREA            REPOSITORY (.git)\n" +
            "  berkas yang kamu edit    daftar yang siap        riwayat permanen\n" +
            "                           'difoto'                (commit)\n" +
            "         |                       |                        |\n" +
            "         |   git add berkas.js   |   git commit -m \"..\"   |\n" +
            "         |---------------------->|----------------------->|\n" +
            "         |                       |                        |\n" +
            "         |<----------------------|                        |\n" +
            "         |  git restore --staged berkas.js (turunkan)     |\n" +
            "         |                                                |\n" +
            "         |<-----------------------------------------------|\n" +
            "            git restore berkas.js (buang perubahanmu)\n" +
            "```\n\n" +
            "Staging area itu seperti **keranjang belanja di kasir**: kamu memilih dulu barang mana yang mau dibayar, baru menekan bayar. `git add` memasukkan ke keranjang, `git commit` membayarnya. Karena itu kamu bisa mengedit sepuluh berkas tapi hanya meng-commit dua yang berkaitan.\n\n" +
            "## Snapshot, Bukan Selisih\n\n" +
            "| Anggapan umum | Kenyataannya |\n" +
            "|---|---|\n" +
            "| Commit menyimpan \"baris yang berubah\" | Commit menyimpan **snapshot** seluruh isi proyek pada saat itu |\n" +
            "| Berpindah versi berarti memutar ulang perubahan | Git tinggal memasang kembali snapshot yang diminta |\n" +
            "| Commit itu berat, jadi lakukan sekali sehari | Commit itu murah; commit kecil dan sering justru dianjurkan |\n\n" +
            "Setiap commit punya **hash** — sidik jari seperti `a1b2c3d`. Hash itulah alamat yang kamu pakai saat ingin melihat (`git show a1b2c3d`) atau kembali ke suatu titik.\n\n" +
            "## Identitas: Kenapa `git config` Wajib Lebih Dulu\n\n" +
            "Setiap commit menempelkan nama dan email pembuatnya, dan itu tidak bisa diambil dari mana-mana kecuali kamu memberitahunya sekali:\n\n" +
            "```text\n" +
            "git config --global user.name \"Bimo Daffa\"\n" +
            "git config --global user.email \"bimo@contoh.com\"\n" +
            "git config --global --list      # membaca kembali setelan yang tersimpan\n" +
            "```\n\n" +
            "`--global` berarti berlaku untuk semua repo di komputer ini, tersimpan di berkas `~/.gitconfig`. Tanpa `--global`, setelan hanya berlaku untuk repo yang sedang kamu buka — berguna kalau proyek kantor memakai email kantor.\n\n" +
            "## Jebakan yang Menjatuhkan Hampir Semua Pemula\n\n" +
            "1. **Menjalankan `git add` di folder yang salah.** Kalau terminal belum `cd` ke folder proyek, Git akan bilang `not a git repository`. Periksa lokasi dengan `pwd` sebelum menyalahkan perintahnya.\n" +
            "2. **Mengira `git config` gagal karena tidak ada keluaran.** Perintah yang berhasil di dunia terminal biasanya **diam**. Tidak ada pesan = berhasil. Kalau ingin bukti, baca ulang dengan `git config user.name`.\n" +
            "3. **`git commit` tanpa `-m` lalu terjebak di layar penuh.** Git membuka editor bawaan (sering `vim`). Jalan keluarnya: tekan `Esc`, ketik `:wq`, Enter. Hal ini sering membuat panik di hari pertama.\n" +
            "4. **`git log` menampilkan layar yang tidak bisa ditutup.** Itu pager. Tekan `q` untuk keluar.\n" +
            "5. **Meng-commit berkas yang seharusnya rahasia** (`.env`, kunci API) atau berat (`node_modules`). Setelah ter-commit, jejaknya tetap ada di riwayat meskipun berkasnya dihapus. Itulah gunanya `.gitignore`, dan itu ditulis **sebelum** commit pertama.\n" +
            "6. **Pesan commit \"update\", \"fix\", \"asdf\".** Riwayat semacam itu tidak bisa dibaca siapa pun, termasuk dirimu tiga bulan kemudian.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Git bukan materi tambahan — ia alat kerja harian. Beberapa hal konkret:\n\n" +
            "- Hampir semua lowongan junior mencantumkan Git sebagai syarat, dan **tes praktik seringkali dikirim sebagai repositori** yang harus kamu clone lalu kembalikan sebagai Pull Request.\n" +
            "- Di **code review**, yang pertama dilihat reviewer adalah apakah commit-mu terpisah rapi per perubahan. Satu commit raksasa berisi 40 berkas hampir selalu diminta dipecah.\n" +
            "- Saat produksi bermasalah, pertanyaan pertama tim adalah \"commit mana yang menyebabkannya?\". Riwayat yang rapi menjawab itu dalam hitungan menit; riwayat yang kacau tidak menjawab apa pun.\n" +
            "- Profil GitHub-mu dibaca perekrut sebagai portofolio hidup. Yang dinilai bukan jumlah kotak hijau, tapi apakah ada repo yang bisa dibaca dan dijelaskan.\n\n" +
            "Modul ini fokus ke satu tujuan: kamu bisa membuat repo, memilih apa yang masuk commit, membaca riwayat, dan membatalkan kesalahan **tanpa takut merusak apa pun**.",
        },
        {
          kind: "step",
          id: "git-1-1",
          title: "Pengenalan Version Control",
          explanation:
            "Bayangkan kamu sedang main game dan membuat 'Save Point' sebelum melawan bos. Daripada menyimpan file manual seperti `proyek_final_v2_beneran.zip`, Git menyimpan riwayat kode kamu sebagai serangkaian 'Save Point' (snapshot). Setiap kali kamu melakukan commit, Git memotret seluruh kondisi proyekmu saat itu. Jadi kamu selalu bisa kembali ke versi sebelumnya dengan aman, bahkan setelah berminggu-minggu.",
          example: {
            code: "node --version",
            output: "v20.11.1",
            note: "Hampir semua tool baris perintah memakai pola yang sama: nama program diikuti flag --version untuk memastikan ia benar-benar terpasang.",
          },
          instruction:
            "Sebelum bisa memakai Git, kamu harus memastikan Git sudah terpasang di komputermu. Tulis perintah yang menampilkan versi Git yang terinstal — polanya sama dengan contoh di atas.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+--version",
              message:
                "Polanya sama seperti contoh: nama programnya, lalu flag versi. Perhatikan `--version` memakai DUA tanda minus.",
            },
          ],
          solution: "git --version",
        },
        {
          kind: "step",
          id: "git-1-2",
          title: "Instalasi & Konfigurasi Identitas",
          explanation:
            "Sebelum commit pertama, Git wajib tahu siapa penanggung jawab perubahan, karena nama dan email itu ditempelkan permanen ke setiap commit yang kamu buat. Kamu mengaturnya sekali per komputer dengan `git config --global`, dan nilainya tersimpan di berkas `~/.gitconfig`. Pakai `--global` untuk identitas default, dan jalankan perintah yang sama **tanpa** `--global` di dalam repo tertentu bila proyek itu butuh email berbeda (misalnya email kantor). Jebakan terbesarnya: perintah set ini **tidak mencetak apa pun** saat berhasil — banyak pemula mengulanginya berkali-kali karena mengira gagal. Jebakan kedua: kalau email di sini berbeda dengan email akun GitHub-mu, commit-mu tampil sebagai orang asing di halaman GitHub dan tidak dihitung sebagai kontribusimu.",
          example: {
            code:
              'git config --global user.name "Budi Sudarsono"\n' +
              'git config --global user.email "budi@perusahaan.com"\n' +
              "git config --global --list",
            output:
              "user.name=Budi Sudarsono\nuser.email=budi@perusahaan.com",
            note: "Dua perintah pertama tidak mencetak apa pun — itu tandanya berhasil. Keluaran di atas datang dari baris ketiga (--list), satu-satunya perintah di contoh ini yang memang menampilkan sesuatu.",
          },
          instruction:
            'Tulis perintah untuk mengkonfigurasi `user.name` menjadi `Bimo Daffa` secara global.',
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+config\\s+--global\\s+user\\.name\\s+[\"']Bimo Daffa[\"']",
              message:
                "Setelan identitas dipasang dengan `git config`. Sertakan cakupan `--global`, sebut kuncinya `user.name`, dan bungkus nilainya dengan tanda kutip karena mengandung spasi.",
            },
          ],
          solution: 'git config --global user.name "Bimo Daffa"',
        },
        {
          kind: "step",
          id: "git-1-3",
          title: "Inisialisasi Repo & Staging Area",
          explanation:
            "Menggunakan `git init` ibarat membuka toko baru (repository). Tapi file tidak otomatis masuk ke gudang. Kamu harus menaruh file yang mau di-commit ke dalam keranjang belanja (Staging Area) menggunakan `git add`. Ini memungkinkan kamu memilih file mana saja yang siap 'difoto' dan masuk ke dalam riwayat perubahan. Alur kerjanya selalu: edit file → git add → git commit.",
          example: {
            code: "git init\ngit add index.html\ngit status",
            output:
              "Initialized empty Git repository...\nChanges to be committed: index.html",
            note: "git status membantu melihat status file di Staging Area.",
          },
          instruction:
            "Tulis perintah untuk menambahkan file `app.js` ke staging area.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+add\\s+app\\.js",
              message:
                "Berkas dimasukkan ke staging area dengan `git add`, diikuti nama berkas yang diminta — perhatikan ekstensinya.",
            },
          ],
          solution: "git add app.js",
        },
        {
          kind: "step",
          id: "git-1-4",
          title: "Commit & Pesan Commit yang Baik",
          explanation:
            "`git commit` mengambil apa yang ada di staging area dan menyimpannya sebagai snapshot permanen beserta identitas penulis dan waktunya. Pesan commit ditulis untuk dirimu enam bulan lagi dan untuk rekan yang menelusuri riwayat: jelaskan APA yang berubah dan kenapa, bukan sekadar 'update'. Gunakan kalimat perintah singkat seperti 'tambah validasi email' — konvensi yang dipakai hampir semua tim. Jangan menumpuk sepuluh perubahan tak berkaitan dalam satu commit, karena membatalkan salah satunya nanti berarti membatalkan semuanya.",
          example: {
            code: 'git commit -m "feat: tambah halaman login user"',
            output: "[main a1b2c3d] feat: tambah halaman login user",
            note: "Pesan commit yang baik menjelaskan APA yang diubah.",
          },
          instruction:
            'Tulis perintah commit dengan pesan `"feat: tambah navigasi utama"`.',
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+commit\\s+-m\\s+[\"']feat:\\s*tambah\\s+navigasi\\s+utama[\"']",
              message:
                "Commit butuh dua bagian: perintah `git commit` dan pesan lewat flag `-m` di dalam tanda kutip. Pastikan awalan `feat:` dan isi pesannya sesuai skenario.",
            },
          ],
          solution: 'git commit -m "feat: tambah navigasi utama"',
        },
        {
          kind: "step",
          id: "git-1-5",
          title: "Membaca Riwayat dengan git log",
          explanation:
            "`git log` menampilkan riwayat commit lengkap dengan hash, penulis, tanggal, dan pesannya. Untuk pemakaian sehari-hari, `--oneline` memadatkannya menjadi satu baris per commit sehingga kamu bisa memindai puluhan commit sekaligus. Tambahkan `--graph` bila ingin melihat percabangan branch dalam bentuk diagram teks. Kalau tampilannya membuka mode pager dan kamu terjebak di layar penuh, tekan `q` untuk keluar — hal kecil yang membingungkan hampir semua pemula.",
          example: {
            code: "git log -n 3",
            output:
              "commit a1b2c3d\nAuthor: Budi\nDate: Mon Jul 27...\n    feat: tambah halaman login",
            note: "Flag -n 3 membatasi tampilan hanya 3 commit terakhir.",
          },
          instruction:
            "Tulis perintah untuk melihat riwayat commit ringkas menggunakan `--oneline`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+log\\s+--oneline",
              message:
                "Riwayat dibaca dengan `git log`. Untuk bentuk padat satu baris per commit, tambahkan flag `--oneline`.",
            },
          ],
          solution: "git log --oneline",
        },
        {
          kind: "step",
          id: "git-1-6",
          title: "Mengabaikan File dengan .gitignore",
          explanation:
            "`.gitignore` berisi daftar berkas dan folder yang tidak boleh masuk ke repositori: hasil build, folder dependensi seperti `node_modules`, dan berkas rahasia seperti `.env`. Menuliskannya bukan sekadar kerapian — berkas kredensial yang ter-push berarti kunci aktifmu bocor ke publik. Satu keterbatasan penting: `.gitignore` hanya berlaku untuk berkas yang belum pernah dilacak, jadi berkas yang terlanjur ter-commit harus dikeluarkan dulu dengan `git rm --cached`. Buat berkas ini di awal proyek, sebelum commit pertama.",
          example: {
            code: "# Isi .gitignore\nnode_modules/\n.env\ndist/",
            output: "node_modules/\n.env\ndist/",
            note: "File .env tidak boleh di-commit demi keamanan kredensial.",
          },
          instruction:
            "Tuliskan isi file `.gitignore` yang mengabaikan folder `node_modules/` dan file `.env` (pisah dengan baris baru).",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "node_modules/?[\\s\\S]*\\.env",
              message: "Cantumkan node_modules/ dan .env",
            },
          ],
          solution: "node_modules/\n.env",
        },
        {
          kind: "step",
          id: "git-1-7",
          title: "Membatalkan Perubahan dengan git restore",
          explanation:
            "`git restore <berkas>` mengembalikan isi berkas ke keadaan commit terakhir, membuang seluruh perubahan yang belum kamu commit. Perintah ini tidak meminta konfirmasi dan tidak bisa dibatalkan, jadi pastikan kamu memang ingin membuang pekerjaan itu. Kalau kamu ragu, `git stash` lebih aman karena perubahanmu disimpan dan masih bisa dipanggil kembali. Untuk mengembalikan seluruh berkas sekaligus, `git restore .` bekerja pada direktori saat ini.",
          example: {
            code: "git status --short\ngit restore style.css\ngit status --short",
            output: " M style.css\n(tidak ada keluaran)\n(bersih, tidak ada perubahan tersisa)",
            note: "git restore tidak mencetak apa pun saat berhasil — cara memastikannya adalah memeriksa git status sebelum dan sesudahnya.",
          },
          instruction:
            "Tulis perintah untuk membatalkan perubahan lokal pada file `script.js`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+restore\\s+script\\.js",
              message:
                "Perubahan yang belum di-stage dibuang dengan `git restore`, diikuti nama berkas yang ingin dipulihkan. Tanpa nama berkas, Git tidak tahu apa yang harus dikembalikan.",
            },
          ],
          solution: "git restore script.js",
        },
        {
          kind: "step",
          id: "git-1-8",
          title: "git status dan git diff: Dua Mata Sebelum Commit",
          explanation:
            "Dua perintah ini yang paling sering kamu ketik sepanjang hari. `git status` menjawab 'apa yang berubah dan bagian mana yang sudah masuk staging', sedangkan `git diff` menunjukkan isi perubahannya baris per baris. Bedanya penting: `git diff` polos hanya menampilkan perubahan yang BELUM di-add, sementara `git diff --staged` menampilkan yang sudah masuk staging dan akan ikut ter-commit. Membiasakan diri membaca diff sebelum commit mencegah dua kecelakaan yang sangat umum: ikut ter-commit-nya berkas rahasia, dan tertinggalnya `console.log` yang lupa dihapus.",
          example: {
            code: "git status --short\ngit diff --staged",
            output: " M src/app.js\nA  src/baru.js\ndiff --git a/src/baru.js b/src/baru.js\n+console.log('halo');",
            note: "Urutan kerja yang aman: git status untuk melihat daftarnya, git diff --staged untuk membaca isinya, baru git commit.",
          },
          instruction:
            "Kamu sudah menjalankan `git add` dan ingin memeriksa sekali lagi isi perubahan yang akan ikut ter-commit. Tulis perintah yang menampilkan perubahan yang sudah berada di staging area.",
          starterCode: "# Periksa dulu sebelum commit\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+diff\\s+(--staged|--cached)",
              message:
                "Pakai git diff --staged (atau --cached) untuk melihat isi staging.",
            },
          ],
          solution: "git diff --staged",
        },
        {
          kind: "step",
          id: "git-1-9",
          title: "Membatalkan git add (Unstage)",
          explanation:
            "Kamu menjalankan `git add .` lalu sadar ada berkas yang belum siap ikut. Mengeluarkannya dari staging memakai `git restore --staged <berkas>`: berkasnya kembali berstatus modified, dan seluruh perubahanmu tetap utuh. Bedakan baik-baik dengan `git restore <berkas>` tanpa `--staged`, yang justru membuang perubahanmu dan mengembalikan isi berkas ke commit terakhir — perintah itu tidak bisa dibatalkan. Perintah lama yang setara adalah `git reset HEAD <berkas>`, dan kamu masih akan sering menemukannya di jawaban Stack Overflow yang berumur beberapa tahun.",
          example: {
            code: "git add .\ngit restore --staged catatan-pribadi.txt\ngit status --short",
            output: "?? catatan-pribadi.txt\nA  src/app.js",
          },
          instruction:
            "Kamu terlanjur menjalankan `git add .` dan berkas `rahasia.txt` ikut masuk staging, padahal isinya belum siap. Keluarkan berkas itu dari staging tanpa kehilangan isinya.",
          starterCode: "# Keluarkan rahasia.txt dari staging\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+(restore\\s+--staged|reset\\s+HEAD)\\s+rahasia\\.txt",
              message:
                "Untuk menurunkan berkas dari staging tanpa membuang isinya, pakai `git restore` dengan flag `--staged` lalu nama berkasnya. Bentuk lama `git reset HEAD <berkas>` juga diterima. Tanpa `--staged`, isi berkasnya justru terhapus.",
            },
            {
              pattern: "git\\s+restore\\s+rahasia\\.txt\\s*$",
              flags: "m",
              mustNotMatch: true,
              message:
                "Tanpa --staged, perintah itu justru membuang perubahanmu.",
            },
          ],
          solution: "git restore --staged rahasia.txt",
        },
        {
          kind: "quiz",
          id: "git-1-kuis",
          title: "Kuis: Dasar Git",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Perintah mana yang digunakan untuk memindahkan file ke Staging Area?",
              choices: ["git commit", "git add", "git init", "git push"],
              answerIndex: 1,
              explanation: "`git add` memindahkan perubahan file ke Staging Area sebelum di-commit.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "File manakah yang WAJIB dimasukkan ke dalam `.gitignore` untuk mencegah kebocoran kredensial rahasia?",
              choices: ["package.json", "README.md", ".env", "index.html"],
              answerIndex: 2,
              explanation: "File `.env` menampung API keys dan kredensial sensitif sehingga tidak boleh masuk ke repositori Git.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa fungsi dari flag `--oneline` pada perintah `git log`?",
              choices: [
                "Menghapus riwayat commit",
                "Menampilkan riwayat commit secara ringkas, satu commit per baris",
                "Membuat commit baru",
                "Menampilkan hanya file yang diubah",
              ],
              answerIndex: 1,
              explanation: "`git log --oneline` menyederhanakan tampilan log dengan 7 karakter hash awal dan pesan commit.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Saat kamu telah selesai mengubah file dan ingin menyimpannya ke dalam riwayat repositori secara permanen, urutan perintah apa yang benar?",
              choices: [
                "git commit lalu git add",
                "git add lalu git commit",
                "git init lalu git status",
                "git log lalu git restore",
              ],
              answerIndex: 1,
              explanation: "Alur kerjanya selalu: memindahkan perubahan ke Staging Area dengan `git add`, baru kemudian mengambil snapshot dengan `git commit`.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Perintah manakah yang tepat untuk membatalkan perubahan file yang BELUM di-commit (masih di working directory)?",
              choices: [
                "git revert file",
                "git commit --undo",
                "git restore file",
                "git ignore file",
              ],
              answerIndex: 2,
              explanation: "`git restore <file>` mengembalikan perubahan uncommitted pada file tersebut kembali ke keadaan awal.",
            },
                      {
              id: "q6",
              type: "pilihan-ganda",
              question:
                "Kamu terlanjur menjalankan `git add .` dan sebuah berkas catatan pribadi ikut masuk staging. Perintah mana yang mengeluarkannya dari staging TANPA menghilangkan isinya?",
              choices: [
                "git restore catatan.txt",
                "git restore --staged catatan.txt",
                "git rm catatan.txt",
                "git reset --hard",
              ],
              answerIndex: 1,
              explanation:
                "`git restore --staged` hanya mengeluarkan berkas dari staging; isinya tetap utuh dan statusnya kembali menjadi modified. Tanpa `--staged`, perintah yang sama justru membuang seluruh perubahanmu dan tidak bisa dibatalkan. `git rm` menghapus berkasnya, sedangkan `git reset --hard` membuang semua perubahan di seluruh berkas sekaligus — dua perintah yang jauh lebih merusak daripada yang kamu butuhkan di sini.",
            },
          ],
        },
      ],
    },
    {
      slug: "branching",
      title: "Branching & Merge",
      description: "Fitur inti Git: bekerja paralel tanpa saling merusak.",
      topics: [
        "Konsep branch: pointer, bukan copy folder",
        "git branch, switch, checkout",
        "Merge: fast-forward vs merge commit",
        "Merge conflict: kenapa terjadi & cara menyelesaikan dengan tenang",
        "git stash untuk pekerjaan setengah jadi",
        "Rebase dasar & perbedaannya dengan merge (kapan JANGAN rebase)",
        "Konvensi penamaan branch di tim (feature/, fix/, chore/)",
      ],
      items: [
        {
          kind: "materi",
          id: "git-2-m1",
          title: "Branch, Merge, dan Cara Bekerja Paralel Tanpa Saling Merusak",
          body:
            "# Pengertian\n\n" +
            "**Branch** adalah jalur pengerjaan terpisah di dalam repo yang sama. Kamu memakainya supaya bisa mengerjakan fitur baru atau mencoba ide berisiko **tanpa menyentuh** versi yang sudah berjalan.\n\n" +
            "Yang perlu diluruskan sejak awal: branch **bukan** salinan folder. Membuat branch tidak menyalin satu berkas pun. Branch hanyalah **penunjuk (pointer) ke satu commit** — sebuah berkas kecil berisi hash. Itulah sebabnya membuat branch di Git terasa instan, bahkan pada proyek berisi puluhan ribu berkas.\n\n" +
            "```text\n" +
            "                        C3 <- feature/keranjang   (HEAD)\n" +
            "                       /\n" +
            "  C1 --- C2 ----------\n" +
            "                       \\\n" +
            "                        C4 <- main\n" +
            "\n" +
            "  HEAD = 'kamu sedang berada di branch mana'\n" +
            "  C1..C4 = commit; anak panah = pointer, bukan folder\n" +
            "```\n\n" +
            "## Perintah Intinya\n\n" +
            "| Perintah | Artinya | Catatan |\n" +
            "|---|---|---|\n" +
            "| `git branch` | daftar branch, tanda `*` menandai posisimu | tidak mengubah apa pun |\n" +
            "| `git switch -c fix/harga` | buat branch baru **dan** pindah ke sana | bentuk lama: `git checkout -b fix/harga` |\n" +
            "| `git switch main` | pindah ke branch yang sudah ada | bentuk lama: `git checkout main` |\n" +
            "| `git merge fix/harga` | bawa perubahan `fix/harga` ke branch yang **sedang kamu tempati** | arahnya sering tertukar |\n" +
            "| `git branch -d fix/harga` | hapus branch yang sudah di-merge | `-D` memaksa, hati-hati |\n\n" +
            "Arah merge adalah sumber kekeliruan nomor satu: `git merge X` berarti \"masukkan X ke SINI\". Jadi untuk memasukkan fitur ke `main`, kamu harus `git switch main` dulu, baru `git merge fitur`.\n\n" +
            "## Dua Bentuk Merge\n\n" +
            "```text\n" +
            "FAST-FORWARD (main tidak bergerak sejak branch dibuat)\n" +
            "  sebelum:  C1 - C2 <- main\n" +
            "                    \\ C3 - C4 <- fitur\n" +
            "  sesudah:  C1 - C2 - C3 - C4 <- main, fitur\n" +
            "            (Git cukup memindahkan pointer main — tanpa commit baru)\n" +
            "\n" +
            "MERGE COMMIT (main sudah maju sendiri)\n" +
            "  C1 - C2 - C5 --------- M <- main\n" +
            "             \\          /\n" +
            "              C3 - C4 -'   <- fitur\n" +
            "            (M adalah commit gabungan dengan DUA induk)\n" +
            "```\n\n" +
            "## Merge Conflict: Kenapa Terjadi dan Bentuknya\n\n" +
            "Conflict muncul hanya pada satu kondisi: **dua branch mengubah baris yang sama pada berkas yang sama**. Git tidak berani menebak mana yang benar, jadi ia berhenti dan menyerahkan keputusan padamu. Conflict bukan error dan bukan tanda kamu salah — ia bagian normal dari bekerja bersama.\n\n" +
            "```text\n" +
            "<<<<<<< HEAD                 <- versi di branch yang kamu tempati\n" +
            "  const diskon = 0.1;\n" +
            "=======                      <- garis pemisah\n" +
            "  const diskon = 0.25;\n" +
            ">>>>>>> promo-lebaran        <- versi dari branch yang di-merge\n" +
            "```\n\n" +
            "Cara menyelesaikannya: buka berkasnya, **hapus ketiga baris penanda** (`<<<<<<<`, `=======`, `>>>>>>>`), tinggalkan kode yang benar (boleh gabungan keduanya), lalu `git add berkas` dan `git commit`. Kalau kepalamu sudah panas, `git merge --abort` membatalkan seluruh proses merge dan mengembalikan keadaan seperti sebelum kamu mulai.\n\n" +
            "## Merge vs Rebase\n\n" +
            "| | `git merge` | `git rebase` |\n" +
            "|---|---|---|\n" +
            "| Yang dilakukan | menggabungkan dua jalur, membuat commit gabungan | memindahkan commit-mu ke ujung branch lain |\n" +
            "| Riwayat | bercabang, jujur apa adanya | lurus, enak dibaca |\n" +
            "| Hash commit | tetap | **berubah** (commit ditulis ulang) |\n" +
            "| Aman untuk branch yang sudah di-push & dipakai orang lain | ya | **tidak** |\n\n" +
            "Aturan praktisnya satu kalimat: **jangan pernah rebase branch yang sudah dipakai orang lain.** Karena rebase mengganti hash, riwayat rekanmu dan riwayatmu jadi berbeda cerita, dan yang menyusul harus memperbaiki kekacauan itu.\n\n" +
            "## `git stash` untuk Pekerjaan Setengah Jadi\n\n" +
            "Kalau atasan minta kamu segera memperbaiki bug di `main` sementara pekerjaanmu belum layak di-commit, `git stash` menyimpan perubahan itu ke tumpukan sementara dan mengembalikan folder ke kondisi bersih. Setelah selesai, `git stash pop` mengembalikannya.\n\n" +
            "## Konvensi Nama Branch di Tim\n\n" +
            "| Prefix | Untuk apa | Contoh |\n" +
            "|---|---|---|\n" +
            "| `feature/` | fitur baru | `feature/checkout-midtrans` |\n" +
            "| `fix/` | perbaikan bug | `fix/BIL-42-total-keranjang` |\n" +
            "| `chore/` | pekerjaan rumah tangga (dependency, konfigurasi) | `chore/upgrade-eslint` |\n" +
            "| `hotfix/` | perbaikan darurat langsung ke produksi | `hotfix/login-gagal` |\n\n" +
            "Menyertakan nomor tiket (`BIL-42`) di nama branch adalah kebiasaan yang sangat dihargai tim, karena menghubungkan kode dengan alasan bisnis di belakangnya.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Merge dari branch yang salah.** Cek posisimu dengan `git status` (baris pertamanya menyebut branch) sebelum menjalankan merge.\n" +
            "2. **Berpindah branch dengan perubahan belum tersimpan.** Git akan menolak atau membawa perubahanmu ikut pindah. Commit dulu, atau `git stash`.\n" +
            "3. **Meninggalkan penanda `=======` di dalam kode.** Ini penyebab error aneh setelah conflict, dan penyebab review ditolak. Cari sisa penanda sebelum commit.\n" +
            "4. **`git branch -D` pada branch yang belum di-merge.** Commit-nya tidak langsung hilang (masih bisa dicari lewat `git reflog`), tapi tidak lagi punya nama — dan mencarinya membuat panik.\n" +
            "5. **Branch yang hidup berminggu-minggu.** Makin lama branch terpisah dari `main`, makin besar conflict-nya. Ambil pembaruan dari `main` secara berkala.\n" +
            "6. **Mengira `git switch fitur` menyimpan pekerjaan otomatis.** Ia tidak menyimpan apa pun; ia hanya memindahkan HEAD.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Di hampir semua tim, **`main` dilindungi**: kamu tidak diizinkan commit langsung ke sana. Satu tiket = satu branch = satu Pull Request. Kemampuan menyelesaikan conflict dengan tenang adalah salah satu hal yang paling sering ditanyakan pada **interview** junior (\"pernah kena conflict? bagaimana kamu menyelesaikannya?\"), dan jawaban yang bagus menyebut `git status`, membaca penanda, dan `--abort` sebagai jaring pengaman. Di **code review**, branch yang namanya jelas dan berisi satu perubahan fokus jauh lebih cepat disetujui daripada branch bernama `update` berisi lima fitur sekaligus.",
        },
        {
          kind: "step",
          id: "git-2-1",
          title: "Konsep Branch di Git",
          explanation:
            "Branch itu seperti membuat salinan (draft) dari proyekmu di dunia paralel. Kamu bisa bereksperimen atau membuat fitur baru di branch ini tanpa takut merusak kode utama (`main`). Jika ternyata eksperimenmu gagal, kamu cukup membuang branch itu — kode utama tetap aman dan tidak tersentuh. Di dunia kerja, setiap fitur baru atau perbaikan bug hampir selalu dikerjakan di branch terpisah.",
          example: {
            code: "git branch -a",
            output: "* main\n  feature/login\n  remotes/origin/main",
            note: "Flag -a menampilkan semua branch lokal dan remote.",
          },
          instruction:
            "Tulis perintah untuk melihat daftar seluruh branch lokal.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+branch",
              message:
                "Daftar branch ditampilkan `git branch` TANPA argumen tambahan — menambahkan nama justru membuat branch baru.",
            },
          ],
          solution: "git branch",
        },
        {
          kind: "step",
          id: "git-2-2",
          title: "Berpindah Branch dengan git switch",
          explanation:
            "`git switch -c <nama-branch>` membuat branch baru sekaligus berpindah ke sana dalam satu perintah. Perintah lama yang setara adalah `git checkout -b`, dan kamu masih akan sering melihatnya di tutorial serta jawaban Stack Overflow. Git memisahkan `switch` (berpindah branch) dari `restore` (membuang perubahan berkas) justru karena `checkout` dulu mengerjakan dua hal berbeda dan sering disalahpahami. Branch baru selalu dibuat dari posisi commit tempatmu berdiri sekarang, jadi pastikan kamu berada di `main` yang sudah terbaru sebelum memulai fitur baru.",
          example: {
            code: "git switch -c feature/cart",
            output: "Switched to a new branch 'feature/cart'",
            note: "`git switch -c` adalah pengganti modern untuk `git checkout -b`.",
          },
          instruction:
            "Tulis perintah untuk membuat dan berpindah ke branch `feature/checkout`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+(switch\\s+-c|checkout\\s+-b)\\s+feature/checkout",
              message:
                "Membuat sekaligus pindah ke branch baru butuh `git switch` dengan flag `-c` (bentuk lama: `git checkout -b`), lalu nama branch sesuai skenario.",
            },
          ],
          solution: "git switch -c feature/checkout",
        },
        {
          kind: "step",
          id: "git-2-3",
          title: "Menggabungkan Branch dengan git merge",
          explanation:
            "`git merge <branch>` menggabungkan pekerjaan branch lain ke branch yang sedang kamu buka — perhatikan arahnya, karena yang menerima adalah branch tempatmu berdiri. Kalau `main` belum bergerak sejak branch-mu dibuat, Git cukup memajukan penunjuknya (fast-forward) tanpa membuat commit baru. Kalau keduanya sama-sama maju, Git membuat merge commit yang menyatukan dua garis riwayat. Karena itu selalu jalankan `git switch main` lebih dulu sebelum menggabungkan fitur — kesalahan arah merge adalah kekeliruan yang sering terjadi di minggu-minggu pertama.",
          example: {
            code: "git switch main\ngit merge feature/login",
            output: "Updating a1b2c3d..e4f5g6h\nFast-forward",
            note: "Pastikan berada di branch tujuan (misal main) sebelum melakukan merge.",
          },
          instruction:
            "Tulis perintah untuk menggabungkan branch `fix/header` ke branch saat ini.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+merge\\s+fix/header",
              message:
                "Penggabungan memakai `git merge` diikuti nama branch SUMBER. Branch tujuan adalah tempatmu berdiri sekarang, jadi tidak ikut dituliskan.",
            },
          ],
          solution: "git merge fix/header",
        },
        {
          kind: "step",
          id: "git-2-4",
          title: "Mengatasi Merge Conflict",
          explanation:
            "Merge conflict terjadi ketika dua branch mengubah baris yang sama pada berkas yang sama, dan Git menolak menebak mana yang benar. Git menandai bagian bentrok dengan `<<<<<<<`, `=======`, dan `>>>>>>>`; tugasmu membuka berkas itu, menyusun versi akhir yang benar, lalu menghapus seluruh penanda tersebut. Setelah rapi, `git add` menandai konflik selesai dan `git commit` menutup penggabungan. Konflik bukan tanda ada yang salah — itu hal biasa di tim, dan kalau situasinya kadung kacau kamu selalu bisa membatalkan dengan `git merge --abort`.",
          example: {
            code: "# Setelah edit file konflik\ngit add index.html\ngit commit -m 'fix: selesaikan konflik merge'",
            output: "[main c7d8e9f] fix: selesaikan konflik merge",
            note: "Jangan panik saat terjadi konflik — cukup periksa penanda <<<<<<< dan >>>>>>> di editor.",
          },
          instruction:
            'Tulis perintah commit untuk menyelesaikan konflik dengan pesan `"fix: selesaikan konflik merge"`.',
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+commit\\s+-m\\s+[\"']fix:\\s*selesaikan\\s+konflik\\s+merge[\"']",
              message:
                "Setelah penanda konflik dibersihkan dan berkasnya di-`git add`, konflik ditutup dengan commit biasa. Pakai flag `-m` dan awalan `fix:` pada pesannya.",
            },
          ],
          solution: 'git commit -m "fix: selesaikan konflik merge"',
        },
        {
          kind: "step",
          id: "git-2-5",
          title: "Menyimpan Pekerjaan Sementara dengan git stash",
          explanation:
            "`git stash` menyimpan perubahan yang belum di-commit ke tempat penyimpanan sementara dan mengembalikan direktori kerjamu ke keadaan bersih. Ini penyelamat saat kamu sedang setengah jalan mengerjakan sesuatu lalu harus buru-buru memperbaiki bug di branch lain. Ambil kembali dengan `git stash pop` yang sekaligus menghapusnya dari tumpukan, atau `git stash apply` bila ingin menyimpannya. Yang sering terlupa: stash tidak mengikutkan berkas yang belum pernah dilacak Git kecuali kamu menambahkan opsi `-u`.",
          example: {
            code: "git stash\ngit stash pop",
            output: "Saved working directory...\nRestored working directory...",
            note: "git stash pop mengembalikan draft tersimpan ke workspace.",
          },
          instruction:
            "Tulis perintah untuk mengembalikan draft pekerjaan yang di-stash.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+stash\\s+pop",
              message:
                "Simpanan terakhir diambil dengan `git stash` diikuti subperintah yang mengambil SEKALIGUS menghapusnya dari tumpukan — bukan `apply`, yang menyisakan salinan.",
            },
          ],
          solution: "git stash pop",
        },
        {
          kind: "step",
          id: "git-2-6",
          title: "Git Rebase Dasar",
          explanation:
            "`git rebase main` memindahkan seluruh commit branch-mu agar seolah-olah dibuat di atas commit terbaru `main`, menghasilkan riwayat yang lurus tanpa merge commit. Yang perlu kamu pahami: commit lamamu tidak dipindahkan melainkan ditulis ulang dengan hash baru. Karena itu ada satu aturan emas — jangan pernah rebase branch yang commit-nya sudah dibagikan ke orang lain, karena riwayat rekanmu akan menyimpang dari riwayatmu. Untuk branch pribadi yang belum di-push, rebase justru membuat riwayat proyek jauh lebih mudah dibaca.",
          example: {
            code: "git rebase develop",
            output: "Successfully rebased and updated refs/heads/feature/cart.",
            note: "JANGAN pernah melakukan rebase pada branch publik yang dipakai bersama orang lain!",
          },
          instruction:
            "Tulis perintah untuk melakukan rebase terhadap branch `main`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+rebase\\s+main",
              message:
                "Rebase memakai `git rebase` diikuti nama branch yang menjadi dasar baru, bukan nama branch yang sedang kamu kerjakan.",
            },
          ],
          solution: "git rebase main",
        },
        {
          kind: "step",
          id: "git-2-7",
          title: "Konvensi Penamaan Branch Tim",
          explanation:
            "Di tim, nama branch selalu diberi awalan kategori: `feature/` untuk fitur baru, `fix/` untuk perbaikan bug, dan `chore/` untuk pemeliharaan. Banyak tim menambahkan nomor tiket di dalamnya, misalnya `fix/BIL-42-tombol-checkout`, agar setiap branch bisa ditelusuri kembali ke pekerjaan yang memerintahkannya. Gunakan tanda hubung, huruf kecil, dan hindari spasi agar perintah terminal tidak perlu tanda kutip. Konvensi ini juga membuat daftar branch tetap terbaca saat repositori sudah punya puluhan cabang aktif.",
          example: {
            code: "git switch -c fix/tombol-submit-error",
            output: "Switched to a new branch 'fix/tombol-submit-error'",
            note: "Penamaan yang rapi membantu rekan tim memahami tujuan branch.",
          },
          instruction:
            "Tulis perintah untuk membuat branch perbaikan bug bernama `fix/login-error`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+(switch\\s+-c|checkout\\s+-b)\\s+fix/login-error",
              message:
                "Ikuti konvensi tim: awalan jenis pekerjaan, garis miring, lalu ringkasan singkat berhuruf kecil. Buat dan pindah sekaligus dengan `git switch -c` (atau `git checkout -b`).",
            },
          ],
          solution: "git switch -c fix/login-error",
        },
        {
          kind: "quiz",
          id: "git-2-kuis",
          title: "Kuis: Branching & Merge",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Mengapa penting memakai konvensi penamaan branch seperti `feature/` atau `fix/`?",
              choices: [
                "Agar Git berjalan 2x lebih cepat",
                "Agar tujuan branch jelas dan terstruktur bagi tim",
                "Diwajibkan oleh GitHub API",
                "Mencegah file terhapus",
              ],
              answerIndex: 1,
              explanation: "Konvensi nama branch memudahkan kolaborasi dan organisasi manajemen tiket di tim.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Perintah apa yang digunakan untuk menyimpan perubahan sementara tanpa commit saat perlu berpindah branch?",
              choices: ["git stash", "git save", "git pause", "git store"],
              answerIndex: 0,
              explanation: "`git stash` menyampingkan sementara perubahan lokal agar workspace bersih saat switch branch.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Kapan waktu yang TIDAK BOLEH dilakukan rebase?",
              choices: [
                "Di branch pribadi lokal",
                "Pada branch publik bersama yang sedang diakses developer lain",
                "Sebelum melakukan commit",
                "Saat repository masih kosong",
              ],
              answerIndex: 1,
              explanation: "Rebase mereset riwayat commit. Melakukan rebase di branch shared akan merusak sejarah Git rekan tim.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Saat terjadi Merge Conflict, apa yang harus kamu lakukan untuk menyelesaikannya?",
              choices: [
                "Menghapus repository lokal dan melakukan clone ulang",
                "Membuka editor, memilih kode yang benar dari penanda konflik, lalu commit",
                "Menggunakan git branch -d untuk menghapus branch tersebut",
                "Menjalankan git merge --force untuk memaksa penggabungan",
              ],
              answerIndex: 1,
              explanation: "Merge Conflict diselesaikan dengan mengedit file yang konflik untuk memilih kode akhir yang benar, lalu melakukan git add dan commit penyelesaian.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Untuk membuat branch baru sekaligus langsung berpindah ke branch tersebut, perintah manakah yang digunakan?",
              choices: [
                "git branch -new",
                "git switch -c",
                "git checkout -c",
                "git add -b",
              ],
              answerIndex: 1,
              explanation: "`git switch -c` (atau `git checkout -b`) akan membuat branch baru sekaligus menjadikan branch tersebut sebagai yang aktif saat ini.",
            },
          ],
        },
      ],
    },
    {
      slug: "remote-github",
      title: "Remote & GitHub",
      description:
        "Menghubungkan repo lokal ke GitHub — portofoliomu dimulai di sini.",
      topics: [
        "Clone, remote, push, pull, fetch",
        "SSH key vs HTTPS",
        "origin & tracking branch",
        "README yang baik untuk portofolio",
        "GitHub Issues & label — dasar manajemen tugas",
        "Fork vs clone",
        "GitHub profile sebagai CV developer",
      ],
      items: [
        {
          kind: "materi",
          id: "git-3-m1",
          title: "Remote, GitHub, dan Portofolio yang Dibaca Perekrut",
          body:
            "# Pengertian\n\n" +
            "**Remote** adalah salinan repositori yang berada di komputer lain — biasanya di server GitHub. Sampai titik ini seluruh riwayatmu hanya ada di laptopmu; kalau laptop itu hilang, pekerjaanmu hilang bersamanya. Remote menyelesaikan dua hal sekaligus: cadangan, dan kemampuan bekerja bersama orang lain.\n\n" +
            "Nama remote default adalah **`origin`**. Itu bukan kata kunci ajaib, hanya nama panggilan untuk sebuah URL supaya kamu tidak perlu mengetik alamat panjang setiap kali.\n\n" +
            "```text\n" +
            "        KOMPUTERMU                              GITHUB (origin)\n" +
            "  +-------------------+                    +-------------------+\n" +
            "  | working directory |                    |                   |\n" +
            "  |        |          |                    |   riwayat commit  |\n" +
            "  |  staging area     |   git push  --->   |   milik bersama   |\n" +
            "  |        |          |                    |                   |\n" +
            "  |  repo lokal .git  |   <--- git fetch   |                   |\n" +
            "  +-------------------+                    +-------------------+\n" +
            "                          <--- git pull = fetch + merge\n" +
            "```\n\n" +
            "## Perintah dan Artinya\n\n" +
            "| Perintah | Artinya | Kapan dipakai |\n" +
            "|---|---|---|\n" +
            "| `git clone <url>` | unduh repo beserta seluruh riwayatnya | sekali, saat mulai bekerja di repo yang sudah ada |\n" +
            "| `git remote add origin <url>` | daftarkan alamat remote pada repo lokal | sekali, untuk repo yang kamu buat sendiri |\n" +
            "| `git remote -v` | lihat alamat remote yang terdaftar | saat push gagal dan kamu curiga URL-nya salah |\n" +
            "| `git push -u origin main` | kirim commit, sekaligus **tetapkan** tracking branch | push pertama sebuah branch |\n" +
            "| `git fetch` | ambil pembaruan **tanpa** mengubah berkasmu | ingin tahu perkembangan tanpa mengganggu pekerjaan |\n" +
            "| `git pull` | `fetch` + `merge` sekaligus | mulai hari kerja, sebelum membuat branch baru |\n\n" +
            "Setelah `-u` dipakai sekali, selanjutnya cukup `git push` dan `git pull` tanpa menyebut nama remote maupun branch. Itulah arti \"tracking branch\": branch lokalmu tahu pasangannya di remote.\n\n" +
            "## HTTPS vs SSH\n\n" +
            "| | HTTPS | SSH |\n" +
            "|---|---|---|\n" +
            "| Bentuk URL | `https://github.com/user/repo.git` | `git@github.com:user/repo.git` |\n" +
            "| Cara login | username + **Personal Access Token** | pasangan kunci di komputermu |\n" +
            "| Perlu setup awal | tidak | ya (`ssh-keygen`, lalu tempel kunci publik ke GitHub) |\n" +
            "| Cocok untuk | komputer pinjaman, jaringan yang memblokir SSH | komputer sendiri yang dipakai harian |\n\n" +
            "Satu hal yang wajib diketahui: **password akun GitHub tidak lagi bisa dipakai untuk push lewat HTTPS**. Yang diminta adalah Personal Access Token. Kalau kamu terus ditolak padahal password benar, itu penyebabnya — bukan salah ketik.\n\n" +
            "## Fork vs Clone\n\n" +
            "```text\n" +
            "CLONE  : repo GitHub  ------------->  komputermu\n" +
            "         (butuh izin tulis untuk bisa push)\n" +
            "\n" +
            "FORK   : repo orang lain --> salinan di AKUN GITHUB-mu --> komputermu\n" +
            "         (kamu bebas push ke salinanmu, lalu mengirim Pull Request\n" +
            "          ke repo aslinya)\n" +
            "```\n\n" +
            "Fork adalah pintu masuk kontribusi open source, dan juga cara banyak perusahaan memberi tes teknis: kamu fork, kerjakan, kirim PR.\n\n" +
            "## README yang Membuat Repo Layak Dilihat\n\n" +
            "README adalah halaman depan proyekmu. Perekrut membukanya lebih dulu daripada kodenya, dan sering berhenti di situ. Susunan yang bekerja:\n\n" +
            "```text\n" +
            "# Nama Proyek\n" +
            "satu kalimat: proyek ini untuk siapa dan menyelesaikan apa\n" +
            "\n" +
            "## Demo\n" +
            "tautan aplikasi yang jalan + 1 tangkapan layar\n" +
            "\n" +
            "## Fitur\n" +
            "- 3-5 poin, hasil yang terlihat, bukan daftar teknologi\n" +
            "\n" +
            "## Teknologi\n" +
            "Next.js, PostgreSQL, Tailwind\n" +
            "\n" +
            "## Cara menjalankan\n" +
            "1. git clone ...\n" +
            "2. npm install\n" +
            "3. salin .env.example jadi .env\n" +
            "4. npm run dev\n" +
            "```\n\n" +
            "Bagian **Cara menjalankan** yang benar-benar bisa diikuti adalah pembeda paling nyata antara repo latihan dan repo yang terlihat profesional.\n\n" +
            "## Issues, Label, dan Profil\n\n" +
            "**Issues** adalah daftar pekerjaan dan laporan bug milik repo. Judul yang baik menyebut gejala, bukan dugaan penyebab (\"Total keranjang salah saat kuantitas diubah\", bukan \"perbaiki bug\"). **Label** (`bug`, `enhancement`, `good first issue`) memudahkan penyaringan. Menutup issue otomatis lewat pesan commit atau deskripsi PR bisa dilakukan dengan menulis `Closes #12`.\n\n" +
            "Untuk profil, yang dinilai bukan banyaknya kotak hijau, melainkan: apakah ada 2–3 repo dengan README jelas, apakah commit-nya bisa dibaca, dan apakah kamu bisa menjelaskan keputusan teknis di dalamnya saat ditanya.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **`push rejected` / `fetch first`.** Artinya ada commit di remote yang belum kamu miliki. Solusinya `git pull` dulu, jangan langsung `push --force` — force menimpa pekerjaan orang lain.\n" +
            "2. **Meng-commit `.env` atau kunci API.** Menghapus berkasnya di commit berikutnya **tidak** menghilangkan jejaknya; token itu harus dianggap bocor dan segera diganti. Cegah dengan `.gitignore` sejak awal.\n" +
            "3. **Mengira `git fetch` sudah memperbarui berkas.** Fetch hanya mengunduh; berkasmu baru berubah setelah merge (atau `git pull`).\n" +
            "4. **Bingung antara `git@github.com:` dan `https://`.** Salah pilih bentuk URL membuat autentikasi gagal terus-menerus meskipun kredensialmu benar.\n" +
            "5. **Repo publik berisi data pelanggan atau tangkapan layar berisi data nyata.** Ini masalah serius, bukan sekadar kurang rapi.\n" +
            "6. **README kosong.** Repo tanpa penjelasan sama dengan repo yang tidak pernah dibuka orang.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Hari pertama masuk kerja hampir selalu diisi dengan: diberi akses repo, `git clone`, membaca README, menjalankan proyek di komputer sendiri. Kualitas README langsung terasa di momen itu. Selanjutnya, **kebiasaan `git pull` sebelum mulai bekerja** adalah hal kecil yang mencegah conflict besar di sore hari. Dan saat melamar, tautan GitHub di CV-mu biasanya dibuka sebelum panggilan **interview** — apa yang terbaca di sana menentukan pertanyaan yang akan diajukan padamu.",
        },
        {
          kind: "step",
          id: "git-3-1",
          title: "Menghubungkan Repo ke GitHub (git remote & push)",
          explanation:
            "`git remote add origin <url>` mendaftarkan alamat repositori di server dan memberinya nama panggilan `origin` — sekadar konvensi, bukan kata wajib. `git push -u origin main` mengirim commit lokalmu ke sana, dan opsi `-u` menetapkan hubungan pelacakan sehingga selanjutnya cukup mengetik `git push` saja. Push hanya mengirim commit; perubahan yang belum kamu commit tidak akan ikut terkirim. Kalau push ditolak dengan pesan 'rejected', artinya ada commit di server yang belum kamu miliki — tarik dulu, jangan langsung memaksa dengan `--force`.",
          example: {
            code: "git remote add origin https://github.com/user/app.git\ngit push -u origin main",
            output: "Branch 'main' set up to track remote branch 'main' from 'origin'.",
            note: "Flag -u (upstream) hanya perlu diisi saat push pertama kali.",
          },
          instruction:
            "Tulis perintah untuk push commit branch `main` ke `origin` pertama kali.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+push\\s+(-u\\s+)?origin\\s+main",
              message:
                "Push pertama butuh `git push`, flag `-u` agar tracking branch tersimpan, lalu nama remote dan nama branch — dalam urutan itu.",
            },
          ],
          solution: "git push -u origin main",
        },
        {
          kind: "step",
          id: "git-3-2",
          title: "Autentikasi Remote (SSH vs HTTPS)",
          explanation:
            "Ada dua cara menghubungkan repo lokal ke GitHub. HTTPS meminta kredensial setiap kali, sedangkan SSH memakai sepasang kunci: kunci privat disimpan di komputermu dan tidak pernah dibagikan, kunci publik didaftarkan ke akun GitHub. Setelah SSH terpasang, push dan pull berjalan tanpa memasukkan apa pun. Buat kuncinya dengan `ssh-keygen -t ed25519`, lalu uji hubungannya sebelum dipakai bekerja — GitHub akan menyapa dengan namamu bila kuncinya sudah dikenali.",
          example: {
            code: 'ssh-keygen -t ed25519 -C "email@contoh.com"',
            output: "Generating public/private ed25519 key pair...",
            note: "Salin isi file .pub ke pengaturan SSH Keys di akun GitHub.",
          },
          instruction:
            "Tulis perintah untuk mengecek koneksi SSH ke GitHub.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "ssh\\s+-T\\s+git@github\\.com",
              message:
                "Uji koneksi SSH memakai program `ssh` dengan flag `-T`, lalu alamat berbentuk pengguna@host milik GitHub — bukan URL HTTPS.",
            },
          ],
          solution: "ssh -T git@github.com",
        },
        {
          kind: "step",
          id: "git-3-3",
          title: "Tracking Branch dan git fetch",
          explanation:
            "`git fetch` mengunduh commit dan branch terbaru dari remote tanpa menyentuh pekerjaan lokalmu sama sekali. Hasilnya disimpan sebagai branch pelacak seperti `origin/main`, sehingga kamu bisa memeriksa apa yang berubah sebelum memutuskan menggabungkannya. Inilah bedanya dengan `git pull`, yang mengunduh dan langsung menggabungkan — kadang di saat yang tidak kamu inginkan. Kebiasaan yang baik: `git fetch` dulu, baca perbedaannya dengan `git log main..origin/main`, baru gabungkan.",
          example: {
            code: "git fetch --all",
            output: "From https://github.com/user/app\n * [new branch] feature -> origin/feature",
            note: "git fetch aman digunakan untuk melihat perkembangan kode tim sebelum di-merge.",
          },
          instruction:
            "Tulis perintah untuk mengambil (fetch) pembaruan dari remote `origin`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+fetch\\s+origin",
              message:
                "Ambil pembaruan tanpa mengubah berkas dengan `git fetch`, lalu sebutkan nama remote-nya. `git pull` bukan jawabannya karena ia sekaligus melakukan merge.",
            },
          ],
          solution: "git fetch origin",
        },
        {
          kind: "step",
          id: "git-3-4",
          title: "README.md: Wajah Proyekmu",
          explanation:
            "README adalah hal pertama yang dibaca orang saat membuka repositorimu, termasuk perekrut yang menilai portofoliomu. Isi minimalnya tiga bagian: judul proyek, penjelasan singkat apa yang dikerjakan proyek ini, dan cara menjalankannya di komputer orang lain. Bagian cara menjalankan paling sering dilupakan, padahal itulah yang menentukan apakah orang lain bisa mencoba karyamu atau menyerah di menit pertama. Tulis perintahnya di dalam blok kode agar bisa disalin tanpa salah ketik, dan sebutkan versi tool bila proyekmu rewel soal itu.",
          example: {
            code: "# Aplikasi Kasir\n\nAplikasi kasir sederhana untuk UMKM, dibuat dengan Next.js.\n\n## Menjalankan\n\n```bash\nnpm install\nnpm run dev\n```",
            output: "Di GitHub, teks itu tampil sebagai judul besar, satu paragraf deskripsi, lalu kotak kode berlatar abu-abu berisi dua perintah.",
          },
          instruction:
            "Tulis README untuk proyek portofoliomu yang memuat tiga bagian: judul utama proyek, satu kalimat deskripsi, dan sebuah bagian berjudul cara menjalankan yang berisi blok kode dengan perintah instalasinya.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "^#\\s+\\S+",
              flags: "m",
              message:
                "Mulai dengan judul utama memakai satu tanda pagar.",
            },
            {
              pattern: "^##\\s+\\S+",
              flags: "m",
              message:
                "Tambahkan subjudul untuk bagian cara menjalankan (dua tanda pagar).",
            },
            {
              pattern: "```[\\s\\S]*npm\\s+install[\\s\\S]*```",
              message:
                "Tulis perintah instalasinya di dalam blok kode ``` ... ```.",
            },
          ],
          solution: "# Portofolio Ku\n\nKumpulan proyek latihan saya selama belajar web development.\n\n## Cara menjalankan\n\n```bash\nnpm install\nnpm run dev\n```",
        },
        {
          kind: "step",
          id: "git-3-5",
          title: "GitHub Issues untuk Manajemen Tugas",
          explanation:
            "GitHub Issues adalah papan catatan tim untuk bug, permintaan fitur, dan tugas — setiap entri punya nomor, penanggung jawab, dan label. Nomor itulah yang menghubungkan pekerjaan dengan kodenya: menyebut `#12` di pesan commit atau deskripsi PR membuat GitHub otomatis menautkan keduanya. Menulis `Closes #12` di deskripsi PR bahkan menutup issue-nya sendiri saat PR di-merge. Kebiasaan ini yang membuat orang bisa menelusuri kenapa sebuah baris kode pernah diubah, berbulan-bulan kemudian.",
          example: {
            code: "git commit -m \"fix #12: tombol checkout tidak muncul di mobile\"",
            output: "[main 7d3c1a9] fix #12: tombol checkout tidak muncul di mobile\n 1 file changed, 3 insertions(+)",
            note: "Menyebut #12 di pesan commit membuat GitHub otomatis menautkan commit itu ke issue nomor 12.",
          },
          instruction:
            'Tulis pesan commit yang memperbaiki issue #5 dengan format `"fix #5: perbaiki galeri gambar"`.',
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+commit\\s+-m\\s+[\"']fix\\s+#5:\\s*perbaiki\\s+galeri\\s+gambar[\"']",
              message:
                "Pesan commit yang menutup issue menyebut nomornya dengan tanda `#`. Tulis commit biasa dengan flag `-m`, dan pastikan nomor issue-nya sesuai instruksi.",
            },
          ],
          solution: 'git commit -m "fix #5: perbaiki galeri gambar"',
        },
        {
          kind: "step",
          id: "git-3-6",
          title: "Fork vs Clone",
          explanation:
            "**Fork** membuat salinan repositori orang lain ke akun GitHub-mu di server, sedangkan **clone** mengunduh repositori ke komputermu. Keduanya sering dipakai berurutan saat berkontribusi ke proyek open source: fork dulu karena kamu tidak punya izin push ke repositori aslinya, lalu clone hasil fork itu untuk dikerjakan secara lokal. Setelah selesai, kamu membuka Pull Request dari fork-mu ke repositori asli. Kalau kamu memang anggota tim yang punya izin push, fork tidak diperlukan — cukup clone lalu bekerja di branch.",
          example: {
            code: "git clone https://github.com/user/proyek-open-source.git",
            output: "Cloning into 'proyek-open-source'...",
            note: "Fork dulu di GitHub browser, lalu clone repo hasil fork-mu ke lokal.",
          },
          instruction:
            "Tulis perintah untuk melakukan clone repositori `https://github.com/bimo/app.git`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+clone\\s+https://github\\.com/bimo/app\\.git",
              message:
                "Menyalin repo ke komputer memakai `git clone` diikuti URL repositorinya — perhatikan URL diakhiri `.git`.",
            },
          ],
          solution: "git clone https://github.com/bimo/app.git",
        },
        {
          kind: "step",
          id: "git-3-7",
          title: "Profil GitHub sebagai CV Hidup",
          explanation:
            "Perekrut teknis hampir selalu membuka profil GitHub sebelum memanggil kandidat. Yang mereka cari bukan grafik kontribusi yang penuh, melainkan bukti bahwa kamu bisa menyelesaikan sesuatu dan menjelaskannya. Repositori khusus yang dinamai persis sama dengan username-mu akan ditampilkan sebagai profil README di halaman depan — di situlah kamu menaruh perkenalan singkat, keahlian utama, dan tautan ke karya terbaikmu. Tiga repositori yang rapi beserta README-nya jauh lebih meyakinkan daripada tiga puluh repo hasil tutorial yang tidak pernah dijelaskan.",
          example: {
            code: "## Halo, saya Ani\n\n- Backend developer, fokus Laravel & PostgreSQL\n- Sedang belajar Docker dan CI/CD\n- Portofolio: https://ani.dev",
            output: "Di halaman profil GitHub muncul sapaan sebagai subjudul, diikuti tiga butir daftar berisi keahlian dan tautan.",
          },
          instruction:
            "Tulis isi profil README-mu: sebuah sapaan sebagai subjudul tingkat dua, lalu minimal dua butir daftar yang menyebut keahlianmu, dan satu di antaranya memuat tautan berawalan https ke portofolio atau LinkedIn-mu.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "^##\\s+\\S+",
              flags: "m",
              message:
                "Tulis sapaanmu sebagai subjudul tingkat dua (##).",
            },
            {
              pattern: "^-\\s+\\S[\\s\\S]*\\n-\\s+\\S",
              flags: "m",
              message:
                "Tulis minimal dua butir daftar diawali tanda hubung.",
            },
            {
              pattern: "https://\\S+",
              message:
                "Sertakan satu tautan berawalan https://",
            },
          ],
          solution: "## Halo, saya Bimo\n\n- Frontend developer, fokus React & TypeScript\n- Sedang menyelesaikan track Next.js di BiLearn\n- Portofolio: https://bimo.dev",
        },
        {
          kind: "step",
          id: "git-3-8",
          title: "git pull dan Kenapa Sering Bikin Kaget",
          explanation:
            "`git pull` sebenarnya dua perintah sekaligus: `git fetch` untuk mengunduh commit terbaru, lalu `git merge` untuk langsung menggabungkannya ke branch yang sedang kamu buka. Karena penggabungannya otomatis, kamu bisa mendadak berhadapan dengan merge conflict di tengah pekerjaan yang belum selesai. Kebiasaan yang lebih aman: jalankan `git fetch` dulu, periksa apa yang berubah, baru gabungkan. Banyak tim juga memakai `git pull --rebase` agar riwayatnya tetap lurus tanpa merge commit tambahan — tapi jangan memakainya bila kamu sudah membagikan commit-mu ke orang lain.",
          example: {
            code: "git fetch origin\ngit log --oneline main..origin/main",
            output: "a91f2c3 fix: perbaiki validasi email\n7d0b4e1 feat: tambah filter kategori",
            note: "Perintah pada contoh memperlihatkan commit apa saja yang akan masuk sebelum kamu memutuskan menggabungkannya.",
          },
          instruction:
            "Kamu ingin menarik pembaruan dari `origin` untuk branch `main` sekaligus menggabungkannya, tapi dengan riwayat yang tetap lurus tanpa merge commit tambahan. Tulis perintahnya.",
          starterCode: "# Tarik pembaruan dengan riwayat tetap lurus\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+pull\\s+--rebase(\\s+origin\\s+main)?",
              message:
                "Pakai git pull --rebase agar riwayatnya tidak bercabang.",
            },
          ],
          solution: "git pull --rebase origin main",
        },
        {
          kind: "quiz",
          id: "git-3-kuis",
          title: "Kuis: Remote & GitHub",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa perbedaan `git fetch` dan `git pull`?",
              choices: [
                "git fetch mengunduh data tanpa menge-merge kode lokal; git pull mengunduh sekaligus menge-merge",
                "git fetch hanya bisa digunakan untuk branch main",
                "git pull tidak membutuhkan koneksi internet",
                "git fetch menghapus commit lama",
              ],
              answerIndex: 0,
              explanation: "git pull = git fetch + git merge ke branch aktif saat ini.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa fungsi dari flag `-u` pada perintah `git push -u origin main`?",
              choices: [
                "Menghapus remote origin",
                "Menghubungkan (set upstream) branch lokal main dengan branch remote main",
                "Membuat user baru di GitHub",
                "Mengabaikan semua file .env",
              ],
              answerIndex: 1,
              explanation: "Flag -u menetapkan tracking upstream sehingga selanjutnya kamu cukup mengetik `git push`.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa bedanya antara Fork dan Clone?",
              choices: [
                "Fork menyalin repo ke akun GitHub milikmu di cloud; Clone mengunduh repo ke komputer lokal",
                "Fork dilakukan di terminal; Clone dilakukan di browser",
                "Fork menghapus commit lama; Clone menambah commit baru",
                "Fork hanya untuk file gambar",
              ],
              answerIndex: 0,
              explanation: "Fork membuat duplikat repositori remote ke akun akun GitHub kamu, sedangkan clone menyalinnya ke penyimpanan lokal.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Setiap kali `git push`, terminal meminta username dan token GitHub. Apa cara paling umum agar tidak ditanya terus, dan apa konsekuensinya?",
              choices: [
                "Menyimpan password di dalam file .env repo",
                "Beralih ke remote SSH dan mendaftarkan SSH key ke akun GitHub, sehingga autentikasi memakai kunci di komputermu",
                "Mengubah repo menjadi publik",
                "Menjalankan git config --global push.auth false",
              ],
              answerIndex: 1,
              explanation:
                "Remote HTTPS meminta kredensial di setiap operasi kecuali kamu memakai credential helper, sedangkan remote SSH memakai pasangan kunci: kunci privat tersimpan di komputermu, kunci publik didaftarkan di GitHub. Menyimpan kredensial di dalam repo adalah kesalahan serius — begitu ter-push, siapa pun bisa membacanya, dan itulah kenapa file rahasia wajib masuk .gitignore.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Dalam praktik kolaborasi tim menggunakan GitHub, apa fungsi dari GitHub Issues?",
              choices: [
                "Tempat untuk menyimpan file video dan gambar besar",
                "Sistem pencatat untuk melacak bug, fitur baru, dan tugas pekerjaan",
                "Server otomatis untuk melakukan deployment ke production",
                "Alat untuk menghapus kredensial yang secara tidak sengaja ter-commit",
              ],
              answerIndex: 1,
              explanation: "GitHub Issues digunakan sebagai papan tugas untuk mencatat, melacak, dan menugaskan pekerjaan kepada anggota tim.",
            },
          ],
        },
      ],
    },
    {
      slug: "pr-workflow",
      title: "Alur Kerja Tim: Pull Request & Code Review",
      description:
        "Diferensiasi BiLearn — simulasi alur kerja yang benar-benar diminta lowongan junior.",
      topics: [
        "Alur lengkap: ambil tiket → branch → commit → push → PR",
        "Menulis deskripsi PR yang reviewer suka",
        "Menerima review: menanggapi komentar tanpa baper",
        "Memberi review: apa yang dilihat reviewer senior",
        "Resolve conflict di PR",
        "Squash, merge strategy, dan menjaga riwayat bersih",
        "Konvensi commit (Conventional Commits) & changelog",
        "Simulasi: satu siklus PR lengkap dari tiket sampai merge",
      ],
      items: [
        {
          kind: "materi",
          id: "git-4-m1",
          title: "Pull Request: Satu Siklus Kerja Tim dari Tiket sampai Merge",
          body:
            "# Pengertian\n\n" +
            "**Pull Request (PR)** adalah permintaan resmi agar perubahan di branch-mu digabungkan ke branch utama, disertai ruang diskusi dan pemeriksaan sebelum itu terjadi. Di GitLab namanya *Merge Request* — konsepnya sama.\n\n" +
            "PR ada bukan karena tim tidak percaya padamu, tapi karena **satu pasang mata tambahan jauh lebih murah daripada bug di produksi**. Ini juga alasan kenapa branch `main` di tempat kerja biasanya dilindungi: tidak ada yang boleh mendorong perubahan langsung ke sana, sekalipun ia orang paling senior.\n\n" +
            "## Siklus Lengkap yang Akan Kamu Ulangi Setiap Hari\n\n" +
            "```text\n" +
            "  1. AMBIL TIKET        BIL-42 \"Total keranjang salah saat kuantitas diubah\"\n" +
            "         |\n" +
            "  2. SINKRON           git switch main && git pull\n" +
            "         |\n" +
            "  3. BRANCH            git switch -c fix/BIL-42-total-keranjang\n" +
            "         |\n" +
            "  4. KERJA + COMMIT    commit kecil, pesan berkonvensi\n" +
            "         |\n" +
            "  5. PUSH              git push -u origin fix/BIL-42-total-keranjang\n" +
            "         |\n" +
            "  6. BUKA PR           judul jelas + deskripsi + tautan tiket\n" +
            "         |\n" +
            "  7. REVIEW  <---------> revisi (commit lagi, push lagi, PR ikut terbarui)\n" +
            "         |\n" +
            "  8. CI HIJAU          test & lint lolos\n" +
            "         |\n" +
            "  9. MERGE             squash / merge commit / rebase\n" +
            "         |\n" +
            " 10. BERSIHKAN         hapus branch, tutup tiket\n" +
            "```\n\n" +
            "Langkah 2 sering dilewatkan pemula, dan akibatnya muncul di langkah 7 sebagai conflict yang sebenarnya bisa dihindari.\n\n" +
            "## Conventional Commits\n\n" +
            "| Prefix | Untuk | Contoh |\n" +
            "|---|---|---|\n" +
            "| `feat:` | fitur baru | `feat: tambah filter harga di katalog` |\n" +
            "| `fix:` | perbaikan bug | `fix: total keranjang salah saat kuantitas diubah` |\n" +
            "| `docs:` | dokumentasi | `docs: lengkapi cara menjalankan proyek` |\n" +
            "| `refactor:` | rapikan kode tanpa mengubah perilaku | `refactor: pisahkan logika hitung diskon` |\n" +
            "| `test:` | menambah/memperbaiki test | `test: tambah kasus keranjang kosong` |\n" +
            "| `chore:` | dependency, konfigurasi, hal rumah tangga | `chore: naikkan versi eslint` |\n\n" +
            "Manfaat nyatanya bukan kerapian belaka: alat pembuat **changelog** otomatis membaca prefix ini, dan penentuan versi (`1.2.3`) sering ikut dihitung darinya. Selain itu riwayat jadi bisa disaring — `git log --oneline | grep \"^.\\{8\\} fix:\"` memberi daftar perbaikan bug rilis ini.\n\n" +
            "## Deskripsi PR yang Membuat Reviewer Cepat Paham\n\n" +
            "```text\n" +
            "## Apa\n" +
            "Memperbaiki perhitungan total keranjang saat kuantitas diubah.\n" +
            "\n" +
            "## Kenapa\n" +
            "Closes #42. Total tidak ikut berubah karena state lama dipakai\n" +
            "sebelum render berikutnya.\n" +
            "\n" +
            "## Bagaimana\n" +
            "- Hitung total dari daftar item, bukan dari state terpisah\n" +
            "- Tambah test untuk kuantitas 0\n" +
            "\n" +
            "## Cara mengujinya\n" +
            "1. Buka /keranjang, tambah 2 item\n" +
            "2. Ubah kuantitas jadi 3 -> total harus ikut berubah\n" +
            "\n" +
            "## Catatan\n" +
            "Belum menangani diskon bertingkat (menyusul di BIL-45).\n" +
            "```\n" +
            "\n" +
            "Bagian **Cara mengujinya** adalah yang paling dihargai reviewer, karena tanpa itu ia harus menebak sendiri apa yang harus dilihat. Menulis `Closes #42` membuat GitHub menutup tiketnya otomatis saat PR di-merge.\n\n" +
            "## Yang Dilihat Reviewer Senior\n\n" +
            "Urutannya biasanya begini, dan hampir tidak pernah dimulai dari gaya penulisan kode:\n\n" +
            "1. **Kebenaran** — apakah ini benar-benar menyelesaikan masalah di tiket?\n" +
            "2. **Kasus tepi** — data kosong, angka nol, gagal jaringan, pengguna belum login.\n" +
            "3. **Keamanan** — kredensial di dalam kode, input yang tidak divalidasi, data pribadi yang ikut tercetak di log.\n" +
            "4. **Cakupan** — apakah ada perubahan yang tidak berhubungan dengan tiket? (PR bengkak = review lambat)\n" +
            "5. **Keterbacaan** — nama variabel, fungsi yang terlalu panjang.\n\n" +
            "Menanggapi review adalah keterampilan tersendiri. Komentar reviewer ditujukan ke **kode**, bukan ke dirimu. Balas dengan satu dari tiga bentuk: kerjakan lalu tandai selesai, jelaskan alasanmu kalau memang ada pertimbangan yang belum ia tahu, atau minta klarifikasi. Diam berhari-hari adalah satu-satunya jawaban yang buruk.\n\n" +
            "## Tiga Strategi Merge\n\n" +
            "| Strategi | Hasil di `main` | Kapan dipakai |\n" +
            "|---|---|---|\n" +
            "| **Squash and merge** | seluruh PR jadi **satu** commit | paling umum; commit \"wip\", \"fix typo\" tidak ikut masuk |\n" +
            "| **Create a merge commit** | semua commit + satu commit gabungan | saat riwayat tiap langkah memang penting |\n" +
            "| **Rebase and merge** | semua commit ditempel lurus, tanpa commit gabungan | tim yang ingin riwayat benar-benar linear |\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **PR raksasa berisi 40 berkas.** Review-nya tertunda berhari-hari, dan bug lebih mudah lolos. Pecah per tiket.\n" +
            "2. **Mengira harus membuat PR baru setelah diminta revisi.** Tidak. Commit lagi di branch yang sama lalu `git push` — PR-nya ikut terbarui dengan sendirinya.\n" +
            "3. **`git push --force` di branch yang sedang direview.** Komentar review bisa kehilangan konteks barisnya. Kalau memang perlu (setelah rebase), pakai `--force-with-lease`.\n" +
            "4. **Menyelesaikan conflict lewat tombol web untuk kasus rumit.** Untuk conflict yang tidak sepele, kerjakan di lokal: `git switch fitur`, `git merge main`, selesaikan, `git push`.\n" +
            "5. **Menganggap CI merah sebagai gangguan.** Kalau test gagal, PR memang belum layak di-merge; membujuk reviewer tidak mengubah itu.\n" +
            "6. **Lupa menghapus branch dan menutup tiket.** Repo penuh branch mati membuat orang berikutnya tidak tahu mana yang masih hidup.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Inilah bagian yang paling sering ditanyakan pada **interview** junior: bukan \"apa itu `git rebase`\", tapi \"ceritakan alur kerjamu dari menerima tiket sampai kode masuk produksi\". Kandidat yang bisa menjelaskan sepuluh langkah di atas dengan urutan benar terdengar seperti orang yang pernah bekerja dalam tim, dan itu sering lebih menentukan daripada hafalan sintaks. Di minggu-minggu pertama bekerja, kualitas deskripsi PR-mu juga membentuk reputasi lebih cepat daripada kualitas kodenya — karena itulah yang dibaca semua orang.",
        },
        {
          kind: "step",
          id: "git-4-1",
          title: "Dari tiket ke nama branch",
          explanation:
            "Di tempat kerja, pekerjaan selalu dimulai dari **tiket** (Jira/Linear/GitHub Issue), bukan dari 'ide sendiri'. Nama branch mengikuti konvensi tim agar siapa pun bisa menebak isinya tanpa membuka kode: awalan jenis pekerjaan, lalu kode tiket, lalu ringkasan singkat berhuruf kecil dengan tanda hubung. Awalan yang umum: `feat/` fitur baru, `fix/` perbaikan bug, `chore/` pekerjaan rumah tangga.",
          example: {
            code:
              "# Tiket BIL-17 (jenis: Feature) — 'Tambah filter kategori di halaman katalog'\n" +
              "git switch -c feat/BIL-17-filter-kategori",
            output: "Switched to a new branch 'feat/BIL-17-filter-kategori'",
            note: "Perintah lama `git checkout -b <nama>` melakukan hal yang sama dan masih sangat sering ditemui di tim yang ada.",
          },
          instruction:
            "Kamu mengambil tiket **BIL-42**, jenisnya **Bug**: 'Tombol checkout tidak muncul di layar HP'. Buat sekaligus pindah ke branch baru yang mengikuti konvensi di atas — awalan sesuai jenis pekerjaan, memuat kode tiket, dan ringkasan singkat berhuruf kecil.",
          starterCode: "# tulis perintahnya di sini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+(switch\\s+-c|checkout\\s+-b)\\s+\\S+",
              message:
                "Gunakan git switch -c <nama-branch> (atau git checkout -b <nama-branch>) untuk membuat dan langsung berpindah.",
            },
            {
              pattern: "(switch\\s+-c|checkout\\s+-b)\\s+fix/",
              message:
                "Tiket ini berjenis Bug, jadi awalannya fix/ — bukan feat/ atau chore/.",
            },
            {
              pattern: "fix/[^\\s]*BIL-42",
              message:
                "Sertakan kode tiket BIL-42 di nama branch agar mudah dilacak ke tiketnya.",
            },
            {
              pattern: "fix/BIL-42-[a-z0-9-]{4,}",
              message:
                "Tambahkan ringkasan singkat setelah kode tiket, huruf kecil dan dipisah tanda hubung (contoh pola: fix/BIL-42-...).",
            },
          ],
          solution: "git switch -c fix/BIL-42-tombol-checkout-mobile",
        },
        {
          kind: "step",
          id: "git-4-2",
          title: "Push pertama dan arti -u",
          explanation:
            "Branch yang baru dibuat masih hanya ada di komputermu. Agar rekan tim (dan PR) bisa melihatnya, branch harus dikirim ke remote. Flag `-u` (singkatan `--set-upstream`) menghubungkan branch lokal dengan branch remote **sekali saja**, sehingga sesudahnya kamu cukup menulis `git push` dan `git pull` tanpa menyebut nama branch lagi. Tanpa `-u`, kamu akan mengulang nama branch terus-menerus.",
          example: {
            code: "git push -u origin feat/BIL-17-filter-kategori",
            output:
              "Enumerating objects: 8, done.\n" +
              "To github.com:tim/bilearn.git\n" +
              " * [new branch]      feat/BIL-17-filter-kategori -> feat/BIL-17-filter-kategori\n" +
              "branch 'feat/BIL-17-filter-kategori' set up to track 'origin/feat/BIL-17-filter-kategori'.\n" +
              "\n" +
              "Create a pull request for 'feat/BIL-17-filter-kategori' on GitHub by visiting:\n" +
              "  https://github.com/tim/bilearn/pull/new/feat/BIL-17-filter-kategori",
            note: "Perhatikan baris terakhir: GitHub langsung memberi tautan untuk membuka PR. Itulah langkah berikutnya setelah push.",
          },
          instruction:
            "Kirim branch `fix/BIL-42-tombol-checkout-mobile` ke remote `origin` untuk pertama kali, sekaligus mengaitkannya agar push berikutnya tidak perlu menyebut nama branch.",
          starterCode: "# tulis perintahnya di sini\n",
          language: "text",
          tests: [
            {
              pattern:
                "git\\s+push\\s+(-u|--set-upstream)\\s+origin\\s+fix/BIL-42-tombol-checkout-mobile",
              message:
                "Sertakan -u (atau --set-upstream) diikuti origin dan nama branch, agar keterkaitannya tersimpan.",
            },
          ],
          solution: "git push -u origin fix/BIL-42-tombol-checkout-mobile",
        },
        {
          kind: "step",
          id: "git-4-3",
          title: "Pesan commit berkonvensi (Conventional Commits)",
          explanation:
            "Format `tipe: ringkasan` bukan formalitas — banyak tim men-generate changelog dan menentukan versi rilis **otomatis** dari tipe ini. `fix:` menaikkan versi patch, `feat:` menaikkan minor. Karena itu memberi tipe yang salah bukan cuma soal rapi: rilis bisa salah versi. Tipe umum: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`. Ringkasannya ditulis dalam bentuk perintah dan tanpa titik di akhir.",
          example: {
            code: 'git commit -m "feat: tambah filter kategori di katalog"',
            output:
              "[feat/BIL-17-filter-kategori 9f3ac21] feat: tambah filter kategori di katalog\n" +
              " 2 files changed, 34 insertions(+), 2 deletions(-)",
            note:
              "Ringkasan yang buruk: 'update', 'fix bug', 'asdf'. Baik: menyebut apa yang berubah secara spesifik.",
          },
          instruction:
            "Kamu baru memperbaiki CSS yang menyembunyikan tombol checkout di layar kecil. Buat commit dengan pesan berkonvensi: tipe yang sesuai untuk perbaikan bug, lalu ringkasan yang menyebut `tombol checkout` (huruf kecil, tanpa titik di akhir).",
          starterCode: "# tulis perintahnya di sini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+commit\\s+-m\\s+['\"]",
              message:
                'Gunakan git commit -m "..." dengan pesan di dalam tanda kutip.',
            },
            {
              pattern: "['\"]fix(\\([a-z0-9-]+\\))?:\\s",
              message:
                'Perbaikan bug memakai tipe fix: (boleh juga bercakupan seperti fix(checkout):). feat: dipakai untuk fitur baru.',
            },
            {
              pattern: "tombol\\s+checkout",
              message:
                "Ringkasannya harus menyebut tombol checkout agar jelas apa yang diperbaiki.",
            },
            {
              pattern: "^(?![\\s\\S]*\\.['\"]\\s*$)",
              message:
                "Hapus titik di akhir ringkasan — konvensi commit tidak memakai titik penutup.",
            },
          ],
          solution:
            'git commit -m "fix: tampilkan tombol checkout di layar kecil"',
        },
        {
          kind: "step",
          id: "git-4-4",
          title: "Deskripsi PR yang membuat reviewer cepat paham",
          explanation:
            "Reviewer membaca deskripsi PR sebelum membaca kodenya, jadi deskripsi yang baik menghemat waktu semua orang. Jawab tiga hal: **apa** yang berubah, **kenapa** perubahan itu perlu, dan **bagaimana cara mengujinya**. Tambahkan `Closes #<nomor>` agar issue-nya otomatis tertutup saat PR di-merge, dan sertakan tangkapan layar bila perubahannya terlihat di antarmuka. PR yang deskripsinya kosong hampir selalu lebih lama menunggu review, karena reviewer harus menebak sendiri maksudnya.",
          example: {
            code:
              "## Apa\n" +
              "Menambahkan filter kategori di halaman katalog.\n\n" +
              "## Kenapa\n" +
              "Pengguna harus scroll 200+ produk untuk menemukan satu kategori (BIL-17).\n\n" +
              "## Cara uji\n" +
              "1. Buka /katalog\n" +
              "2. Pilih kategori Minuman\n" +
              "3. Pastikan hanya produk minuman yang tampil\n\n" +
              "Closes #17",
            output:
              "Deskripsi tampil di halaman PR GitHub; issue #17 otomatis tertutup saat PR di-merge.",
            note: "Bagian 'Cara uji' adalah yang paling sering dilupakan, padahal itu yang paling menghemat waktu reviewer.",
          },
          instruction:
            "Tulis deskripsi PR untuk perbaikan tombol checkout (tiket BIL-42, GitHub issue nomor **42**). Wajib ada tiga heading Markdown tingkat dua: `Apa`, `Kenapa`, `Cara uji` — masing-masing dengan isi — dan diakhiri penanda agar issue 42 tertutup otomatis.",
          starterCode: "## \n",
          language: "text",
          tests: [
            {
              pattern: "##\\s+Apa\\s*\\n+\\s*\\S+",
              message:
                "Buat heading `## Apa` dan tulis isinya di baris berikutnya.",
            },
            {
              pattern: "##\\s+Kenapa\\s*\\n+\\s*\\S+",
              message:
                "Buat heading `## Kenapa` beserta isinya — ini bagian yang paling dicari reviewer.",
            },
            {
              pattern: "##\\s+Cara\\s+uji\\s*\\n+\\s*\\S+",
              message: "Buat heading `## Cara uji` beserta langkah pengujiannya.",
            },
            {
              pattern: "(Closes|Fixes|Resolves)\\s+#42",
              message:
                "Tambahkan penanda penutup issue, misalnya `Closes #42`, agar issue tertutup otomatis saat merge.",
            },
          ],
          solution:
            "## Apa\n" +
            "Memperbaiki CSS yang menyembunyikan tombol checkout di layar kecil.\n\n" +
            "## Kenapa\n" +
            "Pengguna HP tidak bisa menyelesaikan pembelian sama sekali (BIL-42).\n\n" +
            "## Cara uji\n" +
            "1. Buka halaman keranjang di lebar 375px\n" +
            "2. Pastikan tombol checkout terlihat dan bisa diklik\n\n" +
            "Closes #42",
        },
        {
          kind: "step",
          id: "git-4-5",
          title: "Menanggapi permintaan revisi",
          explanation:
            "Saat reviewer menekan *Request changes*, kamu **tidak** membuat PR baru. Cukup lanjutkan bekerja di branch yang sama: commit perbaikannya lalu push — PR akan terupdate otomatis. Karena branch sudah terkait lewat `-u` di langkah sebelumnya, push-nya cukup satu kata. Balas setiap komentar reviewer, meski hanya 'sudah diperbaiki di commit terakhir', agar ia tahu mana yang sudah ditangani.",
          example: {
            code:
              "# Reviewer: 'nama variabel btn terlalu singkat, tolong diperjelas'\n" +
              'git commit -m "refactor: perjelas nama variabel tombol checkout"\n' +
              "git push",
            output:
              "[fix/BIL-42-tombol-checkout-mobile 4c81de0] refactor: perjelas nama variabel tombol checkout\n" +
              " 1 file changed, 4 insertions(+), 4 deletions(-)\n" +
              "To github.com:tim/bilearn.git\n" +
              "   9f3ac21..4c81de0  fix/BIL-42-tombol-checkout-mobile -> fix/BIL-42-tombol-checkout-mobile",
            note: "Perhatikan push-nya tanpa argumen — itu buah dari memakai -u saat push pertama.",
          },
          instruction:
            "Reviewer meminta kamu menambahkan test untuk perbaikan ini. Tulis **dua perintah** di dua baris: commit dengan tipe konvensi yang tepat untuk penambahan test (ringkasannya menyebut `test`), lalu push ke branch yang sudah terkait tanpa menyebut nama branch lagi.",
          starterCode: "# baris 1: commit\n# baris 2: push\n",
          language: "text",
          tests: [
            {
              pattern: "['\"]test(\\([a-z0-9-]+\\))?:\\s",
              message:
                'Penambahan test memakai tipe test: pada pesan commit (contoh pola: "test: ...").',
            },
            {
              pattern: "git\\s+push\\s*(\\n|$)",
              message:
                "Push cukup ditulis `git push` tanpa argumen, karena branch sudah terkait lewat -u sebelumnya.",
            },
            {
              pattern: "^(?![\\s\\S]*git\\s+push\\s+-u)",
              message:
                "Tidak perlu -u lagi — keterkaitan branch hanya diatur sekali saat push pertama.",
            },
          ],
          solution:
            'git commit -m "test: tambah test tampilan tombol checkout di layar kecil"\ngit push',
        },
        {
          kind: "step",
          id: "git-4-6",
          title: "Memberi review: menemukan masalah nyata",
          explanation:
            "Reviewer senior tidak sibuk pada selera penulisan — itu tugas linter. Yang dicari: **kebocoran rahasia**, kegagalan yang tidak ditangani, edge case yang terlewat, dan nama yang menyesatkan. Komentar yang baik menyebut *masalahnya*, *risikonya*, dan *saran perbaikannya*. Sekarang kamu jadi reviewer.",
          example: {
            code:
              "// Kode yang direview:\n" +
              "function hitungDiskon(harga, persen) {\n" +
              "  return harga - harga * persen;\n" +
              "}\n\n" +
              "// Komentar review yang baik:\n" +
              "// persen di sini diperlakukan sebagai desimal (0.1), tapi pemanggil\n" +
              "// mengirim 10. Akibatnya diskon jadi 10x lipat dan harga bisa negatif.\n" +
              "// Saran: bagi 100, dan tolak nilai di luar 0-100.",
            output:
              "Reviewer menandai bug perhitungan sebelum kode masuk production.",
            note: "Pola komentar: apa masalahnya → apa akibatnya → apa sarannya. Hindari komentar yang hanya berbunyi 'ini salah'.",
          },
          instruction:
            "Review potongan kode di panel kanan. Ada **dua** masalah serius. Tulis komentar review (boleh berbahasa Indonesia, pakai `//`) yang menyebut keduanya: satu soal kredensial yang tertulis langsung di kode — sebutkan bahwa itu harus dipindah ke variabel lingkungan (`.env`) — dan satu soal kegagalan `fetch` yang tidak ditangani, sebutkan perlunya penanganan error.",
          starterCode: "// Komentar review:\n// 1. \n// 2. \n",
          language: "text",
          previewHtml:
            "<pre style='font-family:ui-monospace,monospace;font-size:12px;background:#0f172a;color:#e2e8f0;padding:12px;border-radius:6px;white-space:pre-wrap'>" +
            "const API_KEY = &quot;sk_live_51H8xQ2eZvKYlo2C&quot;;\n\n" +
            "async function ambilPesanan(id) {\n" +
            "  const res = await fetch(`/api/pesanan/${id}`, {\n" +
            "    headers: { Authorization: `Bearer ${API_KEY}` },\n" +
            "  });\n" +
            "  const data = await res.json();\n" +
            "  return data.items;\n" +
            "}</pre>",
          tests: [
            {
              pattern: "(\\.env|environment|variabel\\s+lingkungan|env\\s+var)",
              message:
                "Sebutkan bahwa kredensial harus dipindahkan ke variabel lingkungan (.env), bukan ditulis di dalam kode.",
            },
            {
              pattern: "(api[_\\s-]?key|kredensial|secret|rahasia|token)",
              message:
                "Tunjukkan masalah pertamanya secara eksplisit: ada API key / kredensial yang tertulis langsung di kode.",
            },
            {
              pattern: "(error|kesalahan|gagal|res\\.ok|try|catch)",
              message:
                "Sebutkan masalah kedua: kegagalan fetch tidak ditangani (tidak ada pemeriksaan res.ok / try-catch).",
            },
            {
              pattern: "//[\\s\\S]*\\n[\\s\\S]*//",
              message:
                "Tulis minimal dua baris komentar — satu untuk tiap masalah.",
            },
          ],
          solution:
            "// Komentar review:\n" +
            "// 1. API_KEY tertulis langsung di kode (hardcoded secret). Kalau repo ini\n" +
            "//    ter-push publik, key aktif ini bocor. Pindahkan ke variabel\n" +
            "//    lingkungan lewat .env dan jangan pernah di-commit.\n" +
            "// 2. Kegagalan fetch tidak ditangani: kalau server balas 500, res.json()\n" +
            "//    bisa melempar error dan data.items jadi undefined. Periksa res.ok\n" +
            "//    lalu bungkus dengan try/catch dan kembalikan pesan yang jelas.",
        },
        {
          kind: "step",
          id: "git-4-7",
          title: "Menyelesaikan conflict di PR",
          explanation:
            "Selama PR-mu menunggu review, `main` bisa bergerak maju dan menimbulkan conflict. Aturan pentingnya: **selesaikan conflict di branch fiturmu, jangan di `main`**. Alurnya: ambil `main` terbaru → gabungkan ke branch fiturmu → selesaikan penanda conflict → commit → push. Kalau kamu memilih `rebase` (riwayat lebih rapi), push berikutnya butuh pemaksaan — dan **selalu pakai `--force-with-lease`**, bukan `--force`, agar commit rekan tim tidak terhapus tanpa peringatan.",
          example: {
            code:
              "git fetch origin\n" +
              "git merge origin/main\n" +
              "# CONFLICT (content): Merge conflict in src/keranjang.css\n" +
              "# ... buka file, hapus penanda <<<<<<< ======= >>>>>>>, pilih kode yang benar\n" +
              "git add src/keranjang.css\n" +
              'git commit -m "fix: selesaikan conflict dengan main"\n' +
              "git push",
            output:
              "Auto-merging src/keranjang.css\n" +
              "CONFLICT (content): Merge conflict in src/keranjang.css\n" +
              "Automatic merge failed; fix conflicts and then commit the result.",
            note:
              "Setelah conflict selesai, tombol Merge di PR aktif kembali. Jangan pernah menyelesaikannya dengan cara menghapus lalu membuat ulang branch.",
          },
          instruction:
            "PR-mu bentrok dengan `main`. Tulis **dua perintah pertama** dari alur penyelesaiannya, satu per baris: ambil pembaruan dari remote `origin`, lalu gabungkan `origin/main` ke branch fitur yang sedang aktif (boleh memakai merge atau rebase).",
          starterCode: "# baris 1: ambil pembaruan dari remote\n# baris 2: gabungkan main\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+fetch\\s+origin",
              message:
                "Mulai dengan git fetch origin untuk mengambil kondisi terbaru remote.",
            },
            {
              pattern: "git\\s+(merge|rebase)\\s+origin/main",
              message:
                "Lalu gabungkan dengan git merge origin/main (atau git rebase origin/main).",
            },
            {
              pattern: "^(?![\\s\\S]*git\\s+switch\\s+main)(?![\\s\\S]*git\\s+checkout\\s+main)",
              message:
                "Jangan berpindah ke branch main — conflict diselesaikan di branch fiturmu, bukan di main.",
            },
          ],
          solution: "git fetch origin\ngit merge origin/main",
        },
        {
          kind: "step",
          id: "git-4-8",
          title: "Memilih strategi merge",
          explanation:
            "GitHub menawarkan tiga cara menutup PR. **Squash and merge**: seluruh commit PR dipadatkan jadi satu di `main` — paling umum, karena riwayat `main` jadi satu baris per fitur dan mudah di-`revert`. **Merge commit**: seluruh commit dipertahankan plus satu commit gabungan — dipakai bila tiap commit bermakna sendiri. **Rebase and merge**: commit dipindahkan tanpa commit gabungan. Saat squash, pesan commit gabungannya menjadi catatan permanen di `main`, jadi tulis mengikuti konvensi dan sertakan nomor PR.",
          example: {
            code:
              "# 3 commit di PR:\n" +
              "#   feat: tambah filter kategori\n" +
              "#   fix: perbaiki typo\n" +
              "#   test: tambah test filter\n" +
              "# setelah Squash and merge, di main hanya tampak satu commit:\n" +
              "feat: tambah filter kategori di katalog (#17)",
            output:
              "* 7b21ac4 (HEAD -> main) feat: tambah filter kategori di katalog (#17)\n" +
              "* 3d90f12 fix: perbaiki perhitungan ongkir (#15)",
            note:
              "Commit 'fix: perbaiki typo' tidak perlu abadi di riwayat main — itulah gunanya squash.",
          },
          instruction:
            "PR perbaikan tombol checkout (nomor PR **42**) akan ditutup dengan Squash and merge. Tulis pesan commit gabungannya: tipe konvensi yang sesuai untuk perbaikan bug, ringkasan yang menyebut `tombol checkout`, dan diakhiri nomor PR dalam tanda kurung.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "^\\s*fix(\\([a-z0-9-]+\\))?:\\s",
              message:
                "Awali dengan tipe fix: karena ini perbaikan bug (boleh fix(checkout): ).",
            },
            {
              pattern: "tombol\\s+checkout",
              message: "Ringkasannya harus menyebut tombol checkout.",
            },
            {
              pattern: "\\(#42\\)\\s*$",
              message:
                "Akhiri dengan nomor PR dalam tanda kurung, yaitu (#42) — inilah yang menautkan commit di main ke PR-nya.",
            },
          ],
          solution: "fix: tampilkan tombol checkout di layar kecil (#42)",
        },
        {
          kind: "step",
          id: "git-4-9",
          title: "Simulasi: satu siklus PR utuh",
          explanation:
            "Sekarang gabungkan semuanya menjadi satu siklus utuh. Ini urutan yang akan kamu ulang setiap hari di tempat kerja, dan sering diminta diceritakan saat interview junior. Perhatikan urutannya: buat branch dulu — jangan pernah bekerja langsung di `main` — lalu kerjakan, commit dengan pesan berkonvensi, push, dan buka PR. Menyelesaikan satu siklus penuh secara sadar jauh lebih berharga daripada menghafal dua puluh perintah terpisah.",
          example: {
            code:
              "# Tiket BIL-17 (Feature): filter kategori\n" +
              "git switch -c feat/BIL-17-filter-kategori\n" +
              "# ... tulis kodenya ...\n" +
              "git add src/katalog.js\n" +
              'git commit -m "feat: tambah filter kategori di katalog"\n' +
              "git push -u origin feat/BIL-17-filter-kategori\n" +
              "# lalu buka PR di GitHub, isi deskripsi, minta review",
            output:
              "Switched to a new branch 'feat/BIL-17-filter-kategori'\n" +
              "[feat/BIL-17-filter-kategori 9f3ac21] feat: tambah filter kategori di katalog\n" +
              " * [new branch]      feat/BIL-17-filter-kategori -> feat/BIL-17-filter-kategori",
            note:
              "Kalau kamu sudah menulis kode di main sebelum membuat branch, jangan panik — `git stash` lalu buat branch, kemudian `git stash pop`.",
          },
          instruction:
            "Tiket **BIL-58**, jenis **Feature**: 'Tambah tombol simpan draft'. Tulis **empat perintah** berurutan, satu per baris: buat + pindah branch sesuai konvensi (awalan jenis, kode tiket, ringkasan), stage file `src/draft.js`, commit dengan pesan berkonvensi yang menyebut `draft`, lalu push pertama kali ke `origin` sekaligus mengaitkan branch.",
          starterCode: "# 1 branch\n# 2 stage\n# 3 commit\n# 4 push\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+(switch\\s+-c|checkout\\s+-b)\\s+feat/[^\\s]*BIL-58",
              message:
                "Perintah pertama: buat branch dengan awalan feat/ dan memuat kode tiket BIL-58.",
            },
            {
              pattern: "git\\s+add\\s+src/draft\\.js",
              message: "Perintah kedua: stage file dengan git add src/draft.js",
            },
            {
              pattern: "git\\s+commit\\s+-m\\s+['\"]feat(\\([a-z0-9-]+\\))?:[^'\"]*draft",
              message:
                'Perintah ketiga: commit dengan tipe feat: dan ringkasan yang menyebut draft.',
            },
            {
              pattern: "git\\s+push\\s+(-u|--set-upstream)\\s+origin\\s+feat/[^\\s]*BIL-58",
              message:
                "Perintah keempat: push -u origin <nama-branch> untuk push pertama sekaligus mengaitkan branch.",
            },
          ],
          solution:
            "git switch -c feat/BIL-58-tombol-simpan-draft\n" +
            "git add src/draft.js\n" +
            'git commit -m "feat: tambah tombol simpan draft"\n' +
            "git push -u origin feat/BIL-58-tombol-simpan-draft",
        },
        {
          kind: "quiz",
          id: "git-4-kuis",
          title: "Kuis: Alur Kerja PR & Code Review",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question:
                "Reviewer menekan 'Request changes' pada PR-mu. Apa yang kamu lakukan?",
              choices: [
                "Tutup PR ini, perbaiki, lalu buka PR baru",
                "Commit perbaikan di branch yang sama lalu push — PR terupdate otomatis",
                "Kirim kode perbaikan lewat chat ke reviewer",
                "Merge paksa karena kodenya sudah jalan di lokal",
              ],
              answerIndex: 1,
              explanation:
                "PR mengikuti branch, bukan commit tertentu. Push baru ke branch yang sama otomatis memperbarui PR, dan seluruh riwayat diskusi review tetap tersimpan di satu tempat. Membuka PR baru membuat konteks review sebelumnya hilang.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question:
                "PR-mu bentrok dengan `main` yang sudah bergerak maju. Di branch mana conflict sebaiknya diselesaikan?",
              choices: [
                "Di `main`, karena itu sumber kebenaran",
                "Di branch fiturmu, dengan menarik `main` terbaru ke dalamnya",
                "Di branch baru khusus penyelesaian conflict",
                "Tidak perlu — reviewer yang akan menyelesaikannya",
              ],
              answerIndex: 1,
              explanation:
                "Conflict diselesaikan di branch fitur agar `main` tetap stabil dan selalu bisa di-deploy. Kalau kamu menyelesaikannya di `main`, kamu berisiko memasukkan kode yang belum di-review ke branch utama.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question:
                "Kamu memperbaiki bug, tapi menulis pesan commit `feat: perbaiki tombol`. Apa akibat nyatanya di tim yang memakai rilis otomatis?",
              choices: [
                "Tidak ada, hanya soal kerapian",
                "Versi rilis naik ke minor padahal seharusnya patch, dan bug ini masuk changelog sebagai fitur baru",
                "Commit ditolak oleh Git",
                "PR tidak bisa di-merge",
              ],
              answerIndex: 1,
              explanation:
                "Banyak tim men-generate versi dan changelog otomatis dari tipe commit: `fix:` menaikkan patch, `feat:` menaikkan minor. Tipe yang salah membuat penomoran versi dan catatan rilis menyesatkan pengguna — inilah kenapa konvensi ini diperiksa saat code review.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question:
                "Setelah rebase, push-mu ditolak. Rekan tim juga sedang bekerja di branch itu. Mana yang paling aman?",
              choices: [
                "git push --force",
                "git push --force-with-lease",
                "Hapus branch remote lalu push ulang",
                "git push -u origin main",
              ],
              answerIndex: 1,
              explanation:
                "`--force-with-lease` menolak menimpa kalau remote sudah berubah sejak terakhir kamu ambil — jadi commit rekan tim tidak hilang tanpa peringatan. `--force` menimpa tanpa memeriksa apa pun, dan inilah cara kerja orang menghilangkan pekerjaan rekannya.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question:
                "Kamu me-review PR rekan. Mana komentar yang paling berguna?",
              choices: [
                "\"Kodenya kurang bagus, tolong dirapikan.\"",
                "\"Spasi di baris 12 kurang satu.\"",
                "\"API key ditulis langsung di kode — kalau repo ini publik, key aktifnya bocor. Pindahkan ke .env.\"",
                "\"LGTM\" tanpa membaca perubahannya",
              ],
              answerIndex: 2,
              explanation:
                "Komentar yang baik menyebut masalah, risikonya, dan saran perbaikannya. Soal spasi adalah tugas linter/formatter, bukan manusia. 'Kurang bagus' tanpa alasan tidak bisa ditindaklanjuti, dan 'LGTM' tanpa membaca justru menghilangkan gunanya review.",
            },
          ],
        },
      ],
    },
    {
      slug: "git-darurat",
      title: "Git untuk Keadaan Darurat",
      description:
        "Menyelamatkan diri saat 'kodeku hilang!' — skill yang bikin kamu tenang di tempat kerja.",
      topics: [
        "revert vs reset (soft/mixed/hard) — perbedaan krusial",
        "reflog: mesin waktu saat semua terlihat hilang",
        "Mengembalikan file dari commit lama",
        "cherry-pick untuk mengambil satu commit",
        "Mengamputasi file sensitif yang terlanjur ter-commit",
        "bisect: mencari commit penyebab bug",
      ],
      items: [
        {
          kind: "materi",
          id: "git-5-m1",
          title: "Saat 'Kodeku Hilang!' — Peta Penyelamatan Git",
          body:
            "# Pengertian\n\n" +
            "Modul ini isinya satu keterampilan: **tetap tenang saat merasa sudah merusak segalanya.** Kabar baiknya, Git hampir tidak pernah benar-benar membuang commit. Yang biasanya terjadi adalah commit-nya kehilangan *nama*, sehingga tidak terlihat — bukan terhapus.\n\n" +
            "Sebelum menyentuh perintah apa pun dalam keadaan panik, kerjakan urutan ini: `git status` (di mana aku sekarang?), `git log --oneline -5` (riwayat terakhir apa?), `git reflog` (apa yang sudah aku lakukan?). Tiga perintah itu tidak mengubah apa pun dan hampir selalu langsung menunjukkan jalan keluar.\n\n" +
            "## Peta Keputusan\n\n" +
            "```text\n" +
            "  Perubahan belum di-commit?\n" +
            "      belum ditambahkan ke staging  -> git restore berkas.js\n" +
            "      sudah di staging              -> git restore --staged berkas.js\n" +
            "\n" +
            "  Sudah di-commit, TAPI belum di-push?\n" +
            "      pesan commit-nya saja yang salah -> git commit --amend\n" +
            "      ingin membatalkan commit,\n" +
            "        perubahan tetap ada           -> git reset --soft HEAD~1\n" +
            "      ingin membuang commit + isinya  -> git reset --hard HEAD~1  (BAHAYA)\n" +
            "\n" +
            "  Sudah di-push dan dipakai orang lain?\n" +
            "      -> git revert <hash>   (satu-satunya cara yang sopan)\n" +
            "\n" +
            "  Sudah reset --hard dan menyesal?\n" +
            "      -> git reflog, temukan hash lama, git reset --hard <hash>\n" +
            "```\n\n" +
            "## `revert` vs `reset` — Perbedaan yang Paling Sering Ditanyakan\n\n" +
            "| | `git revert <hash>` | `git reset <hash>` |\n" +
            "|---|---|---|\n" +
            "| Cara kerja | membuat commit **baru** yang membalik perubahan | memindahkan pointer branch ke belakang |\n" +
            "| Riwayat | tetap utuh, tercatat bahwa ada pembatalan | commit setelahnya lepas dari riwayat |\n" +
            "| Aman untuk branch yang sudah di-push | **ya** | tidak |\n" +
            "| Dipakai di | `main`, produksi | branch lokal yang belum dibagikan |\n\n" +
            "Tiga rasa `reset` yang wajib dibedakan:\n\n" +
            "| Mode | Commit dibatalkan | Isi perubahan | Staging area |\n" +
            "|---|---|---|---|\n" +
            "| `--soft` | ya | tetap ada | tetap ter-stage (siap commit ulang) |\n" +
            "| `--mixed` (default) | ya | tetap ada | dikosongkan (perlu `git add` lagi) |\n" +
            "| `--hard` | ya | **DIBUANG** | dikosongkan |\n\n" +
            "`--hard` adalah satu-satunya perintah di modul ini yang benar-benar bisa menghapus pekerjaan yang belum pernah di-commit, dan pekerjaan itu **tidak** tercatat di reflog. Reflog menyelamatkan commit, bukan perubahan yang belum jadi commit.\n\n" +
            "## `reflog`: Mesin Waktu yang Tidak Diketahui Banyak Orang\n\n" +
            "Reflog adalah catatan setiap perpindahan HEAD di komputermu — termasuk commit yang branch-nya sudah kamu hapus atau reset.\n\n" +
            "```text\n" +
            "$ git reflog\n" +
            "a1b2c3d HEAD@{0}: reset: moving to HEAD~1\n" +
            "9f8e7d6 HEAD@{1}: commit: feat: tambah filter harga   <- yang 'hilang'\n" +
            "5c4b3a2 HEAD@{2}: checkout: moving from main to fitur\n" +
            "\n" +
            "$ git reset --hard 9f8e7d6      # kembali ke titik itu\n" +
            "```\n\n" +
            "Reflog bersifat lokal dan tidak ikut di-push, serta punya masa simpan (biasanya 90 hari). Jadi ia jaring pengaman, bukan cadangan.\n\n" +
            "## Mengambil Satu Berkas atau Satu Commit\n\n" +
            "| Kebutuhan | Perintah |\n" +
            "|---|---|\n" +
            "| Kembalikan **satu berkas** ke keadaan pada commit lama | `git restore --source=<hash> -- src/harga.js` |\n" +
            "| Lihat isi berkas di commit lama tanpa mengubah apa pun | `git show <hash>:src/harga.js` |\n" +
            "| Ambil **satu commit** dari branch lain ke branch ini | `git cherry-pick <hash>` |\n" +
            "| Cari commit penyebab bug secara sistematis | `git bisect start` → `git bisect bad` → `git bisect good <hash>` |\n\n" +
            "`cherry-pick` khas dipakai untuk *hotfix*: perbaikan sudah ada di branch pengembangan, tapi produksi butuh perbaikan itu saja tanpa fitur lain yang belum siap. `bisect` membagi riwayat dua terus-menerus, sehingga 1000 commit cukup diuji sekitar sepuluh kali.\n\n" +
            "## Berkas Rahasia yang Terlanjur Ter-commit\n\n" +
            "Urutan yang benar, dan langkah pertamanya bukan Git:\n\n" +
            "```text\n" +
            "1. CABUT dulu kredensialnya (rotate token/password di dasbor layanan)\n" +
            "   -> anggap sudah bocor, karena memang sudah\n" +
            "2. Tambahkan .env ke .gitignore\n" +
            "3. git rm --cached .env      (berhenti melacak, berkasnya tetap di laptop)\n" +
            "4. commit + push perubahan itu\n" +
            "5. Kalau repo publik & riwayatnya harus dibersihkan:\n" +
            "   git filter-repo (atau BFG) -- lalu KABARI tim, karena hash berubah\n" +
            "```\n\n" +
            "Menghapus berkasnya lalu commit lagi **tidak** menghilangkan isinya dari riwayat: siapa pun masih bisa membuka commit lama dan membacanya. Karena itu langkah 1 tidak bisa dilewati.\n\n" +
            "## Jebakan yang Sering Terjadi\n\n" +
            "1. **Memakai `reset --hard` sebagai reaksi refleks.** Ia membuang perubahan yang belum di-commit tanpa bertanya, dan itu bagian yang tidak bisa dipulihkan.\n" +
            "2. **`revert` dianggap menghapus commit.** Ia menambah commit baru. Riwayatnya jadi lebih panjang, dan itu memang yang diinginkan di `main`.\n" +
            "3. **`git commit --amend` pada commit yang sudah di-push.** Hash-nya berubah, dan rekan yang sudah menarik commit lama akan mendapat riwayat yang berbeda.\n" +
            "4. **`revert` pada merge commit tanpa `-m 1`.** Git tidak tahu induk mana yang kamu maksud dan akan berhenti dengan pesan yang membingungkan.\n" +
            "5. **Mengandalkan reflog sebagai cadangan.** Ia lokal dan kedaluwarsa. Cadangan sungguhan tetap `git push`.\n" +
            "6. **Menyelesaikan kepanikan dengan menghapus folder lalu clone ulang.** Semua pekerjaan yang belum di-push ikut hilang — padahal biasanya masih bisa diselamatkan.\n\n" +
            "## Kaitan ke Dunia Kerja\n\n" +
            "Kemampuan ini terasa nilainya di hari terburuk, bukan di hari biasa. Saat produksi rusak, tim butuh dua hal berurutan: **pulihkan dulu** (biasanya `git revert` pada commit penyebab, karena aman untuk `main`), **baru cari akar masalahnya** (`git bisect`, `git log -S \"namaFungsi\"`). Di **interview**, perbedaan `revert` dan `reset` termasuk pertanyaan Git paling sering muncul, dan jawaban yang membedakan \"sudah di-push atau belum\" langsung menandai kamu sebagai orang yang pernah bekerja dengan repo bersama. Dan di **code review**, orang yang tenang saat conflict atau salah reset adalah orang yang paling cepat dipercaya memegang repo produksi.",
        },
        {
          kind: "step",
          id: "git-5-1",
          title: "git revert vs git reset",
          explanation:
            "Keduanya membatalkan perubahan, tapi caranya berbeda secara mendasar. `git revert` membuat commit BARU yang membalikkan isi commit lama, sehingga riwayat tetap utuh — inilah yang aman dipakai pada commit yang sudah di-push dan dilihat orang lain. `git reset` justru memundurkan penunjuk branch sehingga commit-nya lenyap dari riwayat, dan dengan opsi `--hard` perubahannya ikut terbuang. Aturan praktisnya: sudah dibagikan ke remote berarti revert; masih di komputer sendiri barulah reset boleh dipertimbangkan.",
          example: {
            code: "git revert a1b2c3d",
            output: "[main e5f6g7h] Revert 'feat: fitur eror'",
            note: "Gunakan git revert untuk kode yang sudah di-push!",
          },
          instruction:
            "Tulis perintah revert untuk commit `abc1234`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+revert\\s+abc1234",
              message:
                "Pembatalan yang aman untuk commit yang sudah di-push adalah `git revert`, diikuti hash commit yang ingin dibalik. `reset` tidak dipakai di sini karena riwayatnya sudah dibagikan.",
            },
          ],
          solution: "git revert abc1234",
        },
        {
          kind: "step",
          id: "git-5-2",
          title: "Reflog: Mesin Waktu Darurat",
          explanation:
            "`git reflog` mencatat setiap pergerakan HEAD di komputermu — setiap commit, checkout, merge, dan reset. Berkat catatan itu, commit yang tampak hilang setelah `reset --hard` sebenarnya masih ada dan bisa dipulihkan dengan `git reset --hard <hash>` dari daftar reflog. Ini alasan kenapa panik jarang beralasan di Git: hampir semua kecelakaan bisa dibatalkan selama commit-nya pernah dibuat. Catatannya bersifat lokal dan biasanya disimpan sekitar 90 hari, jadi jangan mengandalkannya sebagai cadangan jangka panjang.",
          example: {
            code: "git reflog show main",
            output: "a1b2c3d main@{0}: reset: moving to HEAD~1\ne5f6g7h main@{1}: commit: fitur penting",
            note: "Temukan hash commit dari reflog lalu git checkout / git reset ke hash tersebut.",
          },
          instruction:
            "Tulis perintah untuk melihat riwayat log pergerakan HEAD (reflog).",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+reflog",
              message:
                "Riwayat perpindahan HEAD dibaca dengan `git reflog` — satu kata, tanpa argumen tambahan.",
            },
          ],
          solution: "git reflog",
        },
        {
          kind: "step",
          id: "git-5-3",
          title: "Mengembalikan File dari Commit Lama",
          explanation:
            "Kadang yang kamu butuhkan bukan mengembalikan seluruh proyek, melainkan satu berkas saja dari commit lama. `git checkout <hash> -- <berkas>` menarik versi berkas itu ke direktori kerjamu tanpa memindahkan HEAD atau mengubah commit lain. Versi modernnya adalah `git restore --source=<hash> <berkas>`, yang lebih jelas maksudnya. Berkas hasil tarikan langsung masuk ke staging, jadi periksa dulu dengan `git diff --staged` sebelum kamu commit.",
          example: {
            code: "git checkout a1b2c3d -- src/app.js",
            output: "Updated 1 path from a1b2c3d",
            note: "Sangat berguna jika tanpa sengaja merusak/menghapus fungsi penting di satu file.",
          },
          instruction:
            "Tulis perintah untuk mengambil versi file `index.html` dari commit `a1b2c3d`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+(checkout|restore\\s+--source=)\\s*a1b2c3d\\s+(--\\s+)?index\\.html",
              message:
                "Mengambil satu berkas dari commit lama: `git checkout <hash>`, lalu tanda `--` sebagai pemisah, baru nama berkasnya. Tanpa `--`, Git menyangka kamu ingin berpindah branch.",
            },
          ],
          solution: "git checkout a1b2c3d -- index.html",
        },
        {
          kind: "step",
          id: "git-5-4",
          title: "Mengambil Commit Spesifik dengan git cherry-pick",
          explanation:
            "`git cherry-pick <hash>` menyalin satu commit dari branch lain ke branch yang sedang kamu buka. Ini berguna saat perbaikan mendesak sudah selesai di branch pengembangan, tapi yang perlu dikirim ke produksi hanya satu commit itu — bukan seluruh isi branch. Commit hasil cherry-pick punya hash baru karena induknya berbeda, jadi isinya sama tapi identitasnya berlainan. Pakai secukupnya: memetik terlalu banyak commit satu per satu membuat riwayat sulit dilacak dan rawan konflik ketika branch-nya nanti benar-benar di-merge.",
          example: {
            code: "git cherry-pick a1b2c3d",
            output: "[main b2c3d4e] fix: perbaiki bug darurat dari branch eksperimen",
            note: "Pilihan tepat untuk mengambil perbaikan bug dari branch fitur setengah jadi.",
          },
          instruction:
            "Tulis perintah cherry-pick untuk commit `f9e8d7c`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+cherry-pick\\s+f9e8d7c",
              message:
                "Memindahkan satu commit ke branch ini memakai `git cherry-pick` diikuti hash commit-nya, bukan nama branch.",
            },
          ],
          solution: "git cherry-pick f9e8d7c",
        },
        {
          kind: "step",
          id: "git-5-5",
          title: "Menarik File Sensitif yang Terlanjur Ter-commit",
          explanation:
            "Begitu berkas berisi kredensial ter-push, anggap kuncinya sudah bocor: bot penyisir GitHub menemukannya dalam hitungan menit. Karena itu langkah pertama selalu mencabut dan mengganti kunci itu di dashboard layanannya — bukan menghapus commit. Setelah itu barulah kamu keluarkan berkasnya dari pelacakan Git dengan `git rm --cached`, yang menghapusnya dari repositori tapi membiarkan berkasnya tetap ada di komputermu, lalu daftarkan ke `.gitignore` supaya tidak ikut ter-commit lagi. Perlu diingat: langkah ini hanya menghentikan pelacakan ke depan; isinya masih tersimpan di riwayat lama, dan untuk benar-benar membersihkannya kamu butuh `git filter-repo` beserta koordinasi dengan seluruh tim karena riwayat akan ditulis ulang.",
          example: {
            code: "git rm --cached config/rahasia.json\necho \"config/rahasia.json\" >> .gitignore\ngit commit -m \"chore: hentikan pelacakan berkas kredensial\"",
            output: "rm 'config/rahasia.json'\n[main 4f2a1b8] chore: hentikan pelacakan berkas kredensial\n 2 files changed, 1 insertion(+)",
          },
          instruction:
            "Berkas `.env` terlanjur masuk ke repositori. Tulis dua baris perintah: keluarkan berkas itu dari pelacakan Git tanpa menghapusnya dari komputermu, lalu tambahkan namanya ke `.gitignore`.",
          starterCode: "# Kunci API sudah kamu cabut di dashboard. Sekarang bereskan reponya.\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+rm\\s+--cached\\s+\\.env",
              message:
                "Pakai git rm --cached .env agar berkasnya tetap ada di komputermu.",
            },
            {
              pattern: "\\.gitignore",
              message:
                "Tambahkan .env ke dalam berkas .gitignore.",
            },
            {
              pattern: "git\\s+rm\\s+-r?f?\\s+\\.env\\s*$",
              flags: "m",
              mustNotMatch: true,
              message:
                "Jangan pakai git rm tanpa --cached — itu ikut menghapus berkasnya dari komputermu.",
            },
          ],
          solution: "git rm --cached .env\necho \".env\" >> .gitignore",
        },
        {
          kind: "step",
          id: "git-5-6",
          title: "Pelacakan Bug Otomatis dengan git bisect",
          explanation:
            "`git bisect` mencari commit penyebab bug dengan pencarian biner: kamu menyebut satu commit yang sudah rusak dan satu yang masih baik, lalu Git melompat ke tengah-tengah dan bertanya kondisinya. Setiap jawabanmu memangkas separuh kemungkinan, sehingga riwayat seribu commit selesai ditelusuri hanya dalam sekitar sepuluh langkah. Beri tanda dengan `git bisect good` atau `git bisect bad` di setiap langkah, dan akhiri sesi dengan `git bisect reset` agar kembali ke posisi semula. Untuk proyek yang punya test otomatis, `git bisect run` bahkan menjalankan seluruh proses ini tanpa kamu tunggui.",
          example: {
            code: "git bisect start\ngit bisect bad\ngit bisect good a1b2c3d",
            output: "Bisecting: 5 revisions left to test after this...",
            note: "Git akan memindahkanmu ke commit tengah untuk dites sampai sumber bug ditemukan.",
          },
          instruction:
            "Tulis perintah untuk mengakhiri sesi git bisect.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+bisect\\s+reset",
              message:
                "Sesi pencarian ditutup dengan `git bisect` diikuti subperintah yang mengembalikanmu ke HEAD semula.",
            },
          ],
          solution: "git bisect reset",
        },
        {
          kind: "quiz",
          id: "git-5-kuis",
          title: "Kuis: Git Darurat",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa kegunaan utama `git reflog`?",
              choices: [
                "Menyelamatkan commit yang hilang atau salah di-reset",
                "Menghapus riwayat repository",
                "Membuat dokumentasi otomatis",
                "Mengirim email ke tim",
              ],
              answerIndex: 0,
              explanation: "git reflog mencatat semua perubahan HEAD lokal, sehingga commit hilang bisa dipulihkan kembali.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa perbedaan paling krusial antara `git revert` dan `git reset`?",
              choices: [
                "git revert membuat commit baru pembatalan (aman publik); git reset menghapus riwayat commit secara lokal",
                "git reset hanya bisa dipakai di Windows",
                "git revert menghapus repositori remote",
                "git reset membutuhkan izin admin",
              ],
              answerIndex: 0,
              explanation: "git revert tidak mengubah sejarah commit lama (membuat commit baru), sedangkan git reset menghapus commit dari sejarah secara permanen.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Perintah apa yang digunakan untuk mengambil persis satu commit spesifik dari branch lain ke branch aktif?",
              choices: ["git cherry-pick", "git fetch --single", "git merge --one", "git copy-commit"],
              answerIndex: 0,
              explanation: "`git cherry-pick <hash>` mencangkokkan persis satu commit spesifik ke branch yang sedang kamu buka.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Kamu secara tidak sengaja menghapus fungsi penting dari file 'utils.js' di commit lama. Perintah apa yang tepat untuk mengembalikannya?",
              choices: [
                "git reflog show utils.js",
                "git checkout <hash> -- utils.js",
                "git reset <hash>",
                "git revert <hash>",
              ],
              answerIndex: 1,
              explanation: "`git checkout <hash> -- <file>` akan menarik spesifik 1 file tersebut dari commit lama tanpa merusak riwayat.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Saat API Key rahasia terlanjur ter-commit dan di-push ke GitHub publik, langkah PERTAMA yang wajib segera dilakukan adalah?",
              choices: [
                "Melakukan git reset --hard untuk menghapus commit tersebut",
                "Mencabut (revoke) API Key tersebut melalui dashboard layanan cloud",
                "Mengubah status repositori GitHub dari Public menjadi Private",
                "Mengedit commit tersebut menggunakan git rebase -i",
              ],
              answerIndex: 1,
              explanation: "Menghapus kode dari Git saja tidak cukup karena bot di internet sangat cepat mengambil key bocor. Langkah pertama adalah mencabutnya di sistem cloud.",
            },
          ],
        },
      ],
    },
  ],
};

