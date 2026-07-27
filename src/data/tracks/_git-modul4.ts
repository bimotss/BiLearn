import type { Module } from "@/lib/types";

/**
 * Modul 4 track Git — ditulis sebagai CONTOH STANDAR (lihat panduan_isi.md).
 * Ciri yang harus ditiru:
 *  - language: "text" (perintah shell tidak dieksekusi di preview)
 *  - instruksi berbentuk SKENARIO, tidak memuat jawaban
 *  - tes menerima variasi penulisan yang sama-sama benar
 *  - example.output berupa keluaran terminal NYATA
 *  - kuis 5 soal berbasis situasi kerja
 */
export const prWorkflowModule: Module = {
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
        "Reviewer membaca deskripsi PR sebelum membaca kodenya. Deskripsi yang baik menjawab tiga hal: **apa** yang berubah, **kenapa** perlu berubah, dan **bagaimana cara mengujinya**. Tambahkan `Closes #<nomor>` agar GitHub otomatis menutup issue-nya saat PR di-merge — detail kecil yang langsung terlihat oleh tim.",
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
        "Sekarang gabungkan semuanya. Ini urutan yang akan kamu ulang **setiap hari** di tempat kerja, dan yang sering diminta diceritakan saat interview junior. Perhatikan urutannya: branch dulu (jangan pernah bekerja langsung di `main`), kerjakan, commit, baru push.",
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
};
