import type { Track } from "@/lib/types";

export const aiDevTrack: Track = {
  slug: "ai-dev",
  title: "AI-Assisted Development",
  description:
    "Copilot/Claude/Cursor dengan benar — lowongan yang minta skill ini naik 340%.",
  hours: 20,
  recommendedPrereqs: ["javascript"],
  color: "bg-purple-600",
  icon: "🤖",
  order: 13,
  modules: [
    {
      slug: "persiapan-instalasi",
      title: "Persiapan & Instalasi AI Tools",
      description:
        "Menyiapkan Copilot, Cursor, atau Antigravity di VS Code, serta memahami konfigurasi awal.",
      topics: [
        "Lanskap alat AI Dev: extension, IDE khusus, chat, dan CLI agent",
        "Instalasi GitHub Copilot / Continue di VS Code",
        "Mengatur file konfigurasi aturan (.cursorrules / AGENTS.md)",
        "Memverifikasi ekstensi AI bekerja dan memberikan autocomplete",
        "Opsi gratis dan AI lokal (Ollama / LM Studio) tanpa akun berbayar",
      ],
      items: [
        {
          kind: "materi",
          id: "ai-0-m1",
          title: "Menyiapkan Lingkungan AI-Assisted Development",
          body:
            "# Pengertian\n\n" +
            "AI-Assisted Development bukan berarti menyerahkan tugas menulis kode ke mesin dan duduk bersantai. Ini adalah **gaya kerja berpasangan (pair programming) dengan model AI**, di mana kamu bertindak sebagai *lead engineer* (pengambil keputusan) dan AI bertindak sebagai asisten serba tahu yang mengetik sangat cepat.\n\n" +
            "Sebelum mulai memakai AI untuk membantu koding harianmu, kamu perlu memahami lanskap alat yang tersedia, cara memasangnya di lingkungan kerja (VS Code atau IDE khusus), dan bagaimana mengatur aturan agar AI tidak menghasilkan kode yang melenceng dari standar timmu.\n\n" +
            "## Lanskap Tool AI Dev\n\n" +
            "Secara umum, alat AI untuk pengembangan perangkat lunak terbagi menjadi empat kategori:\n\n" +
            "| Kategori | Contoh Tool | Karakteristik & Kegunaan Utama |\n" +
            "|---|---|---|\n" +
            "| **Inline Autocomplete** | GitHub Copilot, Continue, Codeium | Menyarankan baris/blok kode secara *real-time* saat mengetik di editor. |\n" +
            "| **IDE AI Khusus** | Cursor, Antigravity, Windsurf | Editor turunan VS Code yang mengintegrasikan AI di tingkat repositori & arsitektur. |\n" +
            "| **Chat LLM Web** | Claude 3.5 Sonnet, ChatGPT, Gemini | Tempat berdiskusi, merancang arsitektur, dan membedah error panjang. |\n" +
            "| **CLI & Agent Tools** | AGY CLI, Aider, Claude Code | Menjalankan perintah multi-file langsung dari terminal secara otonom. |\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                  LANSKAP ALAT AI DEVELOPMENT                            |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| Inline Autocomplete  ---> Mengetik cepat (baris per baris)              |\n" +
            "| Chat LLM Web         ---> Diskusi & perancangan arsitektur              |\n" +
            "| AI Agent / Composer  ---> Perubahan otomatis multi-file                 |\n" +
            "| Local Model (Ollama) ---> Kerja offline & privasi kode 100% aman       |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## File Konfigurasi Aturan (.cursorrules / AGENTS.md)\n\n" +
            "Setiap proyek yang sehat memiliki kesepakatan gaya kode. Agar AI tidak menyarankan kode dalam bahasa atau *framework* yang salah, kita memberikan instruksi khusus melalui file aturan proyek seperti `.cursorrules` atau `AGENTS.md` di *root* proyek.\n\n" +
            "Contoh isi file `AGENTS.md`:\n" +
            "```markdown\n" +
            "# Aturan Proyek\n" +
            "- Gunakan TypeScript versi strict.\n" +
            "- Utamakan async/await dibanding callback.\n" +
            "- Gunakan Bahasa Indonesia untuk komentar kode.\n" +
            "```\n\n" +
            "## Opsi Gratis & AI Lokal (Ollama)\n\n" +
            "Jika kamu belum berlangganan layanan AI berbayar seperti GitHub Copilot ($10/bulan) atau Claude Pro, kamu bisa menggunakan **Ollama** di komputermu sendiri. Ollama menjalankan model open-source (seperti Qwen Coder atau Llama 3) secara lokal tanpa koneksi internet dan 100% gratis serta terjamin privasinya.\n\n" +
            "## Jebakan & Kesalahan Umum saat Setup\n\n" +
            "> **Jebakan:** Memasang terlalu banyak ekstensi AI sekaligus di VS Code (misalnya Copilot + Codeium + Tabnine). Ini menyebabkan konflik *autocomplete*, editor menjadi lambat, dan menyedot memori RAM komputermu. Pilih **satu** ekstensi *autocomplete* utama.\n\n" +
            "## Kapan Dipakai di Dunia Kerja\n\n" +
            "> **Dunia Kerja:** Saat masuk ke tim baru, hal pertama yang dilakukan senior engineer adalah memeriksa apakah ada file aturan AI (`.cursorrules` / `AGENTS.md`) di repositori. Memahami cara mengonfigurasi alat AI memastikan kamu bisa langsung produktif sejak hari pertama tanpa melanggar konvensi kode perusahaan.",
        },
        {
          kind: "step",
          id: "ai-0-1",
          title: "Memilih dan Memasang Ekstensi AI di VS Code",
          explanation:
            "Memasang ekstensi AI seperti GitHub Copilot atau Continue di VS Code memerlukan pemahaman tentang cara ekstensi terhubung ke layanan model. Ekstensi ini menambahkan panel samping untuk obrolan serta fitur saran otomatis saat kamu mengetik di editor. Mengetahui cara mengaktifkan dan mengonfigurasi ekstensi AI adalah langkah dasar pertama sebelum kamu menggunakannya dalam alur kerja harian. Jangan lupa memeriksa lisensi dan login akun yang dibutuhkan.",
          example: {
            code: "# Perintah untuk memeriksa ekstensi VS Code yang terpasang di terminal:\ncode --list-extensions | grep -i copilot",
            output: "github.copilot\ngithub.copilot-chat",
            note: "Daftar ini menunjukkan ekstensi Copilot dan Copilot Chat telah terpasang dengan benar di VS Code.",
          },
          instruction:
            "Tulis perintah terminal VS Code untuk melihat semua ekstensi terpasang dan memfilter ekstensi `copilot` memakai `grep`.",
          starterCode: "# Tulis perintah di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "code\\s+--list-extensions",
                        "message": "VS Code punya CLI sendiri bernama `code`, dan daftar ekstensi terpasang ditampilkan dengan flag `--list-extensions`."
                      },
                      {
                        "pattern": "\\|\\s*grep\\s+-i",
                        "message": "Saring keluarannya dengan pipe ke `grep`. Flag `-i` membuat pencarian mengabaikan huruf besar-kecil — penting di sini, karena id ekstensi biasanya ditulis `GitHub.copilot` dengan kapitalisasi campur."
                      },
                      {
                        "pattern": "grep\\s+-i\\s+copilot",
                        "message": "Sebutkan kata kunci yang dicari. Kalau tidak ada hasil, berarti ekstensinya belum terpasang — bukan berarti perintahnya salah."
                      }
                    ],
          solution: "code --list-extensions | grep -i copilot",
        },
        {
          kind: "step",
          id: "ai-0-2",
          title: "Menulis File Aturan Proyek (.cursorrules / AGENTS.md)",
          explanation:
            "File `.cursorrules` atau `AGENTS.md` ditempatkan di folder utama proyek untuk memberikan konteks khusus kepada asisten AI. Tanpa file aturan ini, AI akan membuat tebakan berdasarkan pola umum yang belum tentu sesuai dengan standar tim atau proyekmu. Menulis instruksi spesifik seperti versi bahasa, pustaka yang dilarang, dan gaya kode memastikan saran AI konsisten dan siap pakai. Ini adalah praktik terbaik utama di tim modern.",
          example: {
            code: "# Contoh aturan proyek di AGENTS.md\n- Bahasa: TypeScript\n- Framework: Next.js App Router\n- Dilarang: library moment.js (gunakan date-fns)",
            output:
              "Permintaan yang sama, dua hasil berbeda:\n\n" +
              "// TANPA berkas aturan\n" +
              'var tanggal = moment().format("DD/MM/YYYY");\n\n' +
              "// DENGAN berkas aturan di atas\n" +
              "// tanggal hari ini dalam format Indonesia\n" +
              'const tanggal: string = format(new Date(), "dd/MM/yyyy");',
            note: "File aturan membaca direktori root proyek setiap kali sesi obrolan atau agent dimulai.",
          },
          instruction:
            "Tulis isi file aturan proyek `AGENTS.md` sederhana yang memuat tiga aturan: sebutkan **TypeScript**, larang pemakaian **var**, dan minta komentar dalam **Bahasa Indonesia**.",
          starterCode: "# Tulis aturan proyek di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\btypescript\\b",
              flags: "i",
              message: "Sebutkan penggunaan TypeScript.",
            },
            {
              pattern: "(tanpa|dilarang|jangan)[\\s\\S]*var",
              flags: "i",
              message: "Larang penggunaan kata kunci var.",
            },
            {
              pattern: "(bahasa indonesia|indonesia)",
              flags: "i",
              message: "Minta penggunaan komentar dalam Bahasa Indonesia.",
            },
          ],
          solution: "# Aturan Proyek\n- Gunakan TypeScript strict mode.\n- Dilarang menggunakan var (gunakan const atau let).\n- Tulis semua komentar kode dalam Bahasa Indonesia.",
        },
        {
          kind: "step",
          id: "ai-0-3",
          title: "Memverifikasi Ekstensi AI & Autocomplete Pertama",
          explanation:
            "Setelah ekstensi AI terpasang, kamu bisa mengujinya dengan mengetikkan komentar deskriptif di atas baris kode. Ekstensi akan menyodorkan saran berbentuk teks abu-abu (*ghost text*). Kamu bisa menekan tombol `Tab` untuk menerima saran atau `Esc` untuk menolaknya. Memahami mekanisme penerimaan dan penolakan ini menjaga alur mengetikmu tetap cepat tanpa terganggu oleh saran yang keliru.",
          example: {
            code: "// Menghitung luas persegi panjang dengan panjang dan lebar\nfunction hitungLuas(panjang, lebar) {\n  return panjang * lebar;\n}\nconsole.log(hitungLuas(5, 10));",
            output: "50",
            note: "Tekan Tab saat ghost text abu-abu muncul untuk menerima saran fungsi secara utuh.",
          },
          instruction:
            "Tulis fungsi `hitungLuas(panjang, lebar)` yang mengembalikan perkalian `panjang * lebar`, lalu cetak hasil pemanggilannya `hitungLuas(5, 10)` ke konsol.",
          starterCode: "// Tulis fungsi hitungLuas di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+hitungLuas\\s*\\(\\s*\\w+\\s*,\\s*\\w+\\s*\\)|const\\s+hitungLuas\\s*=",
              message: "Buat fungsi hitungLuas(panjang, lebar).",
            },
            {
              pattern: "return\\s+\\w+\\s*\\*\\s*\\w+",
              message: "Kembalikan hasil perkalian panjang * lebar.",
            },
            {
              pattern: "console\\.log\\(\\s*hitungLuas\\(5\\s*,\\s*10\\)\\s*\\)",
              message: "Cetak hasil hitungLuas(5, 10) dengan console.log().",
            },
          ],
          solution: "function hitungLuas(panjang, lebar) {\n  return panjang * lebar;\n}\nconsole.log(hitungLuas(5, 10));",
        },
        {
          kind: "step",
          id: "ai-0-4",
          title: "Alternatif Lokal: Menjalankan Model dengan Ollama",
          explanation:
            "Ollama adalah alat CLI populer untuk menjalankan Large Language Model (LLM) secara lokal di komputermu tanpa perlu mengirim data ke server cloud. Ini sangat berguna jika kamu bekerja dengan kode rahasia perusahaan atau saat tidak ada koneksi internet. Kamu bisa menjalankan model seperti `qwen2.5-coder` dengan satu perintah sederhana di terminal. Mengetahui cara menggunakan AI lokal memberi fleksibilitas dan jaminan privasi penuh.",
          example: {
            code: "# Perintah untuk mengunduh dan menjalankan model coding gratis di terminal:\nollama run qwen2.5-coder:1.5b",
            output: "pulling manifest...\nsuccess\n>>> Write a hello world function in JS",
            note: "Model berjalan langsung menggunakan CPU/GPU komputermu sendiri.",
          },
          instruction:
            "Tulis perintah terminal Ollama untuk menjalankan model `qwen2.5-coder:1.5b` di komputermu.",
          starterCode: "# Tulis perintah Ollama di bawah ini\n",
          language: "text",
          tests: [
                      {
                        "pattern": "ollama\\s+run",
                        "message": "Ollama menjalankan model lokal dengan subperintah `run`; ia otomatis mengunduh model bila belum ada."
                      },
                      {
                        "pattern": "qwen2\\.5-coder(:1\\.5b)?",
                        "message": "Sebutkan nama model beserta tag ukurannya setelah titik dua. Ukuran menentukan kebutuhan RAM: varian 1.5b bisa jalan di laptop 8 GB, sementara varian 7b ke atas butuh jauh lebih besar dan akan sangat lambat kalau dipaksakan."
                      }
                    ],
          solution: "ollama run qwen2.5-coder:1.5b",
        },
        {
          kind: "quiz",
          id: "ai-0-kuis",
          title: "Kuis: Persiapan & Instalasi AI Tools",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa peran utama developer manusia dalam alur kerja AI-Assisted Development?",
              choices: [
                "Sebagai Lead Engineer yang mengarahkan, mengevaluasi, dan mengambil keputusan atas kode buatan AI",
                "Hanya sebagai pengetik ulang teks yang dihasilkan AI tanpa perlu membaca",
                "Membiarkan AI menjalankan server produksi secara penuh",
                "Menghapus semua kode yang ditulis oleh manusia",
              ],
              answerIndex: 0,
              explanation: "Developer manusia adalah penanggung jawab utama yang memverifikasi kebenaran dan keamanan kode, sementara AI berperan sebagai asisten pengetik.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa fungsi utama dari file aturan proyek seperti `.cursorrules` atau `AGENTS.md`?",
              choices: [
                "Mempercepat kecepatan internet saat koding",
                "Memberikan petunjuk dan konvensi spesifik proyek agar AI tidak menghasilkan kode yang melenceng",
                "Menghapus bug secara otomatis dari komputer",
                "Mengganti warna tema editor VS Code",
              ],
              answerIndex: 1,
              explanation: "File aturan memberikan konteks dan batasan teknologi proyek sehingga AI mengikuti konvensi tim secara konsisten.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa keunggulan utama menggunakan alat AI lokal seperti Ollama dibandingkan AI berbasis cloud?",
              choices: [
                "AI lokal membutuhkan biaya langganan bulanan mahal",
                "Kode dan data proyek 100% aman di komputer lokal tanpa terkirim ke internet",
                "AI lokal tidak memerlukan listrik sama sekali",
                "AI lokal pasti 100% bebas dari kesalahan",
              ],
              answerIndex: 1,
              explanation: "AI lokal berjalan sepenuhnya di komputermu, menjamin privasi kode rahasia dan dapat digunakan tanpa koneksi internet.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Tombol keyboard apa yang digunakan di VS Code untuk menerima saran kode abu-abu (ghost text) dari Copilot?",
              choices: ["Ctrl + C", "Tab", "Spacebar", "Backspace"],
              answerIndex: 1,
              explanation: "Tombol Tab digunakan secara standar di VS Code untuk menerima saran autocomplete dari ekstensi AI.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Mengapa disarankan untuk tidak memasang terlalu banyak ekstensi autocomplete AI sekaligus di VS Code?",
              choices: ["Karena akan menyebabkan konflik saran dan membuat editor lambat serta boros RAM", "Karena VS Code akan otomatis terhapus", "Karena AI akan marah dan memblokir akunmu", "Karena keyboard akan berhenti berfungsi"],
              answerIndex: 0,
              explanation: "Memasang beberapa ekstensi autocomplete sekaligus memicu perebutan fokus ghost text dan membebankan performa sistem.",
            },
          ],
        },
      ],
    },
    {
      slug: "cara-kerja-llm",
      title: "Cara Kerja & Batas LLM",
      description:
        "Pakai alat dengan paham cara kerjanya — bukan menyembah atau meremehkan.",
      topics: [
        "LLM secara intuitif: prediksi token, bukan 'berpikir'",
        "Kenapa AI berhalusinasi & apa artinya untuk kode",
        "Context window: kenapa AI 'lupa'",
        "Kekuatan nyata: boilerplate, terjemahan pola, penjelasan",
        "Kelemahan nyata: fakta terbaru, logika bisnis unik, konteks besar",
        "Lanskap tool: Copilot, Claude, Cursor — beda alat, beda tugas",
      ],
      items: [
        {
          kind: "materi",
          id: "ai-1-m1",
          title: "Bagaimana LLM Memproses dan Mengolah Kode",
          body:
            "# Pengertian\n\n" +
            "Large Language Model (LLM) seperti GPT-4, Claude, atau Gemini sering kali terasa ajaib karena bisa menjawab pertanyaan matematika dan menulis kode rumit. Namun secara fundamental, **LLM tidak memiliki kesadaran, logika, atau 'pemahaman' tentang kode** seperti manusia.\n\n" +
            "LLM adalah mesin statistik raksasa yang bekerja dengan prinsip **prediksi token berikutnya** (*next-token prediction*). Model membaca sekumpulan kata/kode yang kamu berikan, lalu menghitung statistik kata apa yang paling mungkin muncul setelahnya berdasarkan data dari miliaran baris kode yang telah dipelajarinya.\n\n" +
            "## Konsep Penting: Token & Context Window\n\n" +
            "Komputer tidak membaca kata per kata seperti manusia, melainkan dipecah menjadi **token** (potongan teks sepanjang ~4 karakter).\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                       PEMASOKAN TOKEN & MEMORI                          |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| Teks Asli:    \"const total = hitungHarga(100);\"                          |\n" +
            "| Token:        [\"const\", \" total\", \" =\", \" hit\", \"ung\", \"Harga\", \"(\", \"100\", \");\"] |\n" +
            "|                                                                         |\n" +
            "| CONTEXT WINDOW (Kapasitas Memori Percakapan Maksimal):                   |\n" +
            "| [ Token 1 ..... Token N ] ---> Jika melebihi batas, Token awal TERHAPUS! |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "### Batas Context Window\n\n" +
            "Setiap sesi obrolan memiliki batas memori yang disebut **Context Window** (misalnya 128.000 token). Begitu percakapanmu atau potongan kode yang kamu tempel melebihi kapasitas ini, bagian paling awal percakapan akan terdorong keluar dan dilupakan oleh AI.\n\n" +
            "| Istilah | Penjelasan Sederhana | Dampak pada Koding |\n" +
            "|---|---|---|\n" +
            "| **Token** | Potongan teks (~4 karakter / 0.75 kata) | Menentukan biaya API dan beban memori model. |\n" +
            "| **Context Window** | Batas maksimal token dalam 1 sesi percakapan | Jika terlalu panjang, AI akan lupa instruksi di awal chat. |\n" +
            "| **Halusinasi** | AI mengarang API/fungsi fiktif dengan yakin | Kode terlihat rapi tapi melempar TypeError saat dijalankan. |\n\n" +
            "## Kekuatan vs Kelemahan Nyata AI\n\n" +
            "- **Kekuatan Utama:** Sangat cepat membuat kode *boilerplate*, menerjemahkan bahasa (misal JS ke TS), menulis kerangka *test*, dan menjelaskan kode asing.\n" +
            "- **Kelemahan Utama:** Tidak tahu logika bisnis internal perusahaanmu, sering melupakan *edge cases* (kondisi null/undefined), dan berhalusinasi saat ditanya API versi terbaru.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> **Jebakan:** Meminta AI memperbaiki error dengan pertanyaan berulang 'Kamu yakin kode ini benar?'. AI akan selalu menjawab 'Ya, tentu!' dan tetap memberikan kode berhalusinasi yang sama. Jalankan kodenya dan berikan pesan error asli dari terminal!\n\n" +
            "## Kapan Dipakai di Dunia Kerja\n\n" +
            "> **Dunia Kerja:** Senior developer memanfaatkan AI untuk memotong waktu pekerjaan mekanis (seperti mengetik tipe data DTO atau skema JSON), lalu mengalokasikan 80% waktu dan energi mereka untuk meninjau kebenaran logika bisnis dan keamanan sistem.",
        },
        {
          kind: "step",
          id: "ai-1-1",
          title: "Prediksi Token: Kenapa AI Bisa Salah dengan Percaya Diri",
          explanation:
            "LLM tidak memverifikasi kebenaran kode di runtime saat menjawab pertanyaanmu. Ia memprediksi potongan teks (token) yang paling mungkin muncul berikutnya berdasarkan pola dari miliaran baris kode yang pernah dibacanya. Karena itu jawabannya selalu terdengar yakin — bahkan saat salah, sebab yang dinilai model adalah 'sepertinya begini polanya', bukan 'ini sudah saya uji'. Konsekuensi praktisnya cuma satu dan berlaku seumur karier: apa pun yang AI tulis, kamu jalankan dan buktikan sendiri sebelum percaya.",
          example: {
            code: "// AI menyarankan: 'pakai toFixed(2) untuk format harga'\nconst harga = 1250000;\nconsole.log(harga.toFixed(2));",
            output: "1250000.00",
            note: "Perhatikan: saran AI menghasilkan '1250000.00' — bentuk yang tidak dipakai orang Indonesia. Menjalankan kodenya sendiri langsung memperlihatkan itu.",
          },
          instruction:
            "AI menyarankan `harga.toFixed(2)` untuk menampilkan harga rupiah, tapi kamu belum tahu apakah hasilnya sesuai. Buktikan sendiri: cetak ke konsol hasil pemformatan `harga` memakai `toLocaleString` dengan locale `id-ID`, lalu bandingkan dengan saran AI di panel contoh.",
          starterCode: "const harga = 1250000;\n// Cetak hasil pemformatan versi Indonesia di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "console\\.log\\([\\s\\S]*toLocaleString\\(\\s*['\"]id-ID['\"]",
              message:
                "Cetak hasilnya dengan console.log(harga.toLocaleString('id-ID')).",
            },
          ],
          solution: "const harga = 1250000;\nconsole.log(harga.toLocaleString('id-ID'));",
        },
        {
          kind: "step",
          id: "ai-1-2",
          title: "Halusinasi: Method yang Terdengar Masuk Akal tapi Tidak Ada",
          explanation:
            "Halusinasi terjadi saat model menghasilkan nama fungsi, parameter, atau library yang tidak pernah ada, tapi terdengar sangat wajar karena mengikuti pola penamaan yang lazim. Ini bahaya khas pemula: kode terlihat rapi, namanya 'masuk akal', dan baru gagal saat dijalankan. Cara mendeteksinya cepat: jalankan kodenya, atau cari nama method itu di dokumentasi resmi — kalau tidak ketemu, itu karangan. Jangan pernah memperbaiki halusinasi dengan meminta AI 'yakin tidak?', karena ia akan tetap menjawab yakin.",
          example: {
            code: "// ❌ kode dari AI: method groupByColumn() tidak ada di JavaScript\n// const hasil = data.groupByColumn('kategori');\n\n// ✅ API yang benar-benar ada:\nconst angka = [1, 2, 3, 4];\nconsole.log(angka.filter((n) => n % 2 === 0));",
            output: "[2,4]",
            note: "Pola pengecekan: kalau sebuah method tidak muncul di dokumentasi MDN, kemungkinan besar ia halusinasi.",
          },
          instruction:
            "AI memberimu kode di editor yang memakai `produk.sortBy('harga')` — method itu tidak ada di JavaScript. Ganti baris itu agar produk benar-benar terurut dari harga termurah memakai `sort` bawaan, lalu cetak hasilnya.",
          starterCode: "const produk = [\n  { nama: 'Pensil', harga: 3000 },\n  { nama: 'Buku', harga: 12000 },\n  { nama: 'Penghapus', harga: 1500 },\n];\n\n// Kode hasil AI (tidak jalan) — perbaiki baris di bawah\nconst urut = produk.sortBy('harga');\nconsole.log(urut);\n",
          language: "js",
          tests: [
            {
              pattern: "\\.sort\\(",
              message:
                "Pakai method sort() bawaan JavaScript.",
            },
            {
              pattern: "\\w+\\.harga\\s*-\\s*\\w+\\.harga|harga\\s*<\\s*|localeCompare",
              message:
                "Beri fungsi pembanding di dalam sort, misalnya (a, b) => a.harga - b.harga.",
            },
            {
              pattern: "sortBy",
              mustNotMatch: true,
              message:
                "Hapus pemanggilan sortBy() — method itu memang tidak ada.",
            },
          ],
          solution: "const produk = [\n  { nama: 'Pensil', harga: 3000 },\n  { nama: 'Buku', harga: 12000 },\n  { nama: 'Penghapus', harga: 1500 },\n];\n\nconst urut = [...produk].sort((a, b) => a.harga - b.harga);\nconsole.log(urut);",
        },
        {
          kind: "step",
          id: "ai-1-3",
          title: "Context Window: Kenapa AI Tiba-tiba 'Lupa'",
          explanation:
            "Context window adalah jumlah token maksimum yang bisa dibaca model dalam satu percakapan — mencakup pertanyaanmu, kode yang kamu tempel, dan seluruh jawaban sebelumnya. Begitu batas itu terlampaui, bagian paling awal terdorong keluar, dan di situlah AI mulai melupakan keputusan yang sudah kalian sepakati di awal. Sebagai patokan kasar untuk kode, satu token kira-kira 4 karakter, jadi file 8.000 karakter menghabiskan sekitar 2.000 token. Kebiasaan yang menolong: buka sesi baru untuk masalah baru, dan tempel hanya potongan kode yang relevan.",
          example: {
            code: "const kodeDitempel = 'a'.repeat(20000);\nconsole.log(Math.ceil(kodeDitempel.length / 4));",
            output: "5000",
            note: "8.000 token untuk satu file saja sudah memakan porsi besar percakapan — itulah kenapa AI 'lupa' instruksi awalmu.",
          },
          instruction:
            "Kamu hendak menempelkan sebuah file berisi 32.000 karakter ke chat AI. Hitung dan cetak perkiraan jumlah tokennya memakai patokan 4 karakter per token, dengan hasil dibulatkan ke atas.",
          starterCode: "const jumlahKarakter = 32000;\n// Hitung perkiraan token, lalu cetak\n",
          language: "js",
          tests: [
            {
              pattern: "Math\\.ceil\\(",
              message:
                "Bulatkan ke atas memakai Math.ceil().",
            },
            {
              pattern: "(jumlahKarakter|32000)\\s*/\\s*4",
              message:
                "Bagi jumlah karakter dengan 4 untuk memperkirakan token.",
            },
            {
              pattern: "console\\.log\\(",
              message:
                "Cetak hasilnya dengan console.log().",
            },
          ],
          solution: "const jumlahKarakter = 32000;\nconst perkiraanToken = Math.ceil(jumlahKarakter / 4);\nconsole.log(perkiraanToken);",
        },
        {
          kind: "step",
          id: "ai-1-4",
          title: "Kekuatan Nyata AI: Boilerplate & Terjemahan Pola",
          explanation:
            "Ada satu jenis pekerjaan yang benar-benar dikuasai AI: mengubah sesuatu yang sudah jelas bentuknya menjadi bentuk lain — respons JSON menjadi tipe TypeScript, data menjadi tabel, JavaScript menjadi TypeScript. Pekerjaan ini bersifat mekanis, polanya berulang, dan kebenarannya mudah kamu periksa dalam hitungan detik. Di sinilah AI benar-benar menghemat waktumu tanpa menambah risiko. Aturan mainnya tetap: kamu harus tahu bentuk hasil yang benar, karena kamu yang memeriksanya.",
          example: {
            code: "// respons API\n// { \"id\": 7, \"aktif\": true }\ntype Akun = {\n  id: number;\n  aktif: boolean;\n};",
            output: "Tipe Akun cocok dengan bentuk respons: id angka, aktif boolean.",
            note: "Perhatikan bahwa tipe mengikuti BENTUK data, bukan nama propertinya — id bisa saja string.",
          },
          instruction:
            "Endpoint profil mengembalikan JSON `{ \"id\": \"u-1\", \"nama\": \"Bimo\", \"umur\": 20 }`. Tulis satu tipe TypeScript bernama `User` yang menggambarkan bentuk respons itu dengan tipe yang tepat untuk setiap properti.",
          starterCode: "// Tulis tipe User di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern: "(type|interface)\\s+User\\s*(=|\\{)",
              message:
                "Buat type atau interface User.",
            },
            {
              pattern: "id\\s*:\\s*string",
              message:
                "Properti id bertipe string karena nilainya 'u-1'.",
            },
            {
              pattern: "nama\\s*:\\s*string",
              message:
                "Properti nama bertipe string.",
            },
            {
              pattern: "umur\\s*:\\s*number",
              message:
                "Properti umur bertipe number, bukan string.",
            },
          ],
          solution: "type User = {\n  id: string;\n  nama: string;\n  umur: number;\n};",
        },
        {
          kind: "step",
          id: "ai-1-5",
          title: "Kelemahan Nyata AI: Logika Bisnis yang Cuma Ada di Perusahaanmu",
          explanation:
            "AI mengenal pola umum, bukan aturan spesifik tempatmu bekerja. Kalau kamu meminta 'fungsi diskon', ia akan menuliskan potongan persentase standar — bukan aturan yang disepakati tim produkmu, karena aturan itu tidak pernah ada di data latihannya. Semakin unik logikanya, semakin besar kemungkinan AI menghasilkan kode yang rapi tapi salah secara bisnis. Karena itu tugasmu bergeser: menerjemahkan aturan bisnis dengan tepat, lalu memakai AI untuk bagian mekanisnya saja.",
          example: {
            code: "// Aturan: ongkir gratis di atas 300rb, selain itu 20rb\nfunction ongkir(total) {\n  return total > 300000 ? 0 : 20000;\n}\nconsole.log(ongkir(150000));",
            output: "20000",
            note: "Fungsi contoh benar secara sintaks tapi tidak tahu aturan tokomu — persis kesalahan yang dibuat AI.",
          },
          instruction:
            "Aturan diskon di tokomu: hanya berlaku untuk member, besarnya 10% dari harga, dan **maksimal Rp50.000**. Tulis fungsi `hitungDiskon(harga, isMember)` yang mengembalikan nilai diskon sesuai aturan itu — kode AI di panel contoh tidak mengenal aturan ini.",
          starterCode: "// Tulis fungsi hitungDiskon di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+hitungDiskon\\s*\\(\\s*harga\\s*,\\s*isMember\\s*\\)|const\\s+hitungDiskon\\s*=",
              message:
                "Buat fungsi hitungDiskon(harga, isMember).",
            },
            {
              pattern: "\\bisMember\\b",
              message:
                "Diskon hanya berlaku kalau isMember bernilai true.",
            },
            {
              pattern: "0\\.1|\\*\\s*10\\s*/\\s*100|/\\s*10",
              message:
                "Diskonnya 10% dari harga.",
            },
            {
              pattern: "Math\\.min\\(|>\\s*50000|>=\\s*50000",
              message:
                "Batasi diskon maksimal 50000.",
            },
          ],
          solution: "function hitungDiskon(harga, isMember) {\n  if (!isMember) return 0;\n  return Math.min(harga * 0.1, 50000);\n}\n\nconsole.log(hitungDiskon(800000, true));",
        },
        {
          kind: "step",
          id: "ai-1-6",
          title: "Memilih Alat: Autocomplete, Chat, atau Agent",
          explanation:
            "Tiga bentuk bantuan AI punya tugas berbeda. Autocomplete di editor (Copilot) unggul untuk melanjutkan baris yang polanya sudah jelas. Chat panjang (Claude, ChatGPT) unggul saat kamu perlu menalar: membaca error, membandingkan pendekatan, atau memahami kode asing. Agent/composer (Cursor, Antigravity) unggul untuk perubahan yang menyentuh banyak file sekaligus. Salah memilih alat membuang waktu — misalnya mengandalkan autocomplete untuk merancang arsitektur, atau memakai agent untuk hal yang cukup satu baris.",
          example: {
            code: "const tugasKeAlat = {\n  melanjutkanBarisBerulang: 'copilot',\n  membacaStackTracePanjang: 'chat',\n};\nconsole.log(tugasKeAlat.membacaStackTracePanjang);",
            output: "chat",
          },
          instruction:
            "Buat objek `pilihanAlat` yang memetakan tiga situasi ke alat yang paling tepat: properti `menulisTestBerulang` bernilai `'copilot'`, `membandingkanDuaPendekatan` bernilai `'chat'`, dan `mengubahNamaFungsiDi12File` bernilai `'agent'`.",
          starterCode: "// Buat objek pilihanAlat di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "pilihanAlat\\s*=\\s*\\{",
              message:
                "Buat objek bernama pilihanAlat.",
            },
            {
              pattern: "menulisTestBerulang\\s*:\\s*['\"]copilot['\"]",
              message:
                "menulisTestBerulang cocok untuk autocomplete: 'copilot'.",
            },
            {
              pattern: "membandingkanDuaPendekatan\\s*:\\s*['\"]chat['\"]",
              message:
                "membandingkanDuaPendekatan butuh penalaran: 'chat'.",
            },
            {
              pattern: "mengubahNamaFungsiDi12File\\s*:\\s*['\"]agent['\"]",
              message:
                "Perubahan lintas file adalah tugas 'agent'.",
            },
          ],
          solution: "const pilihanAlat = {\n  menulisTestBerulang: 'copilot',\n  membandingkanDuaPendekatan: 'chat',\n  mengubahNamaFungsiDi12File: 'agent',\n};\n\nconsole.log(pilihanAlat);",
        },
        {
          kind: "quiz",
          id: "ai-1-kuis",
          title: "Kuis: Cara Kerja & Batas LLM",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa istilah yang digunakan saat Large Language Model (LLM) mengarang fungsi atau sintaks API yang sebenarnya tidak ada secara percaya diri?",
              choices: ["Halusinasi (Hallucination)", "Compilation Error", "Overfitting", "Refactoring"],
              answerIndex: 0,
              explanation: "Halusinasi adalah kondisi ketika AI menghasilkan respon fiktif yang terdengar meyakinkan namun tidak akurat secara nyata.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa AI sering melupakan instruksi di awal percakapan jika sesi obrolan terlalu panjang?",
              choices: ["Karena server AI restart", "Karena mencapai batas Context Window", "Karena AI tidak suka percakapan panjang", "Karena koneksi internet terputus"],
              answerIndex: 1,
              explanation: "Setiap model memiliki batas context window (jumlah token maksimal). Jika melebihi batas ini, token terlama akan dihapus.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa kelemahan utama AI saat digunakan untuk menulis kode perusahaan?",
              choices: ["AI tidak tahu logika bisnis spesifik dan aturan unik perusahaan", "AI tidak bisa mengetik cepat", "AI akan menghapus kode secara otomatis", "AI selalu menggunakan bahasa Assembly"],
              answerIndex: 0,
              explanation: "AI dilatih dengan data publik, sehingga ia tidak tahu aturan bisnis, struktur, atau sistem internal spesifik di perusahaanmu yang bersifat rahasia.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa tujuan utama dari fitur Context Window pada model LLM?",
              choices: ["Menyimpan data percakapan selamanya di server", "Menentukan jumlah batas maksimal memori atau token yang bisa diingat dalam satu sesi", "Meningkatkan kecepatan pengetikan AI", "Menerjemahkan bahasa secara otomatis"],
              answerIndex: 1,
              explanation: "Context window adalah batas jumlah token maksimal yang dapat diproses oleh LLM dalam satu waktu. Jika melebihi batas, model akan mulai melupakan konteks dari awal percakapan.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Pekerjaan apa yang sangat cocok dan efisien diserahkan kepada AI?",
              choices: ["Membuat arsitektur sistem skala besar tanpa pengawasan", "Menerjemahkan sintaks antar bahasa atau membuat kode boilerplate", "Menulis aturan bisnis unik perusahaan yang belum pernah ada", "Mengambil keputusan pemecatan karyawan"],
              answerIndex: 1,
              explanation: "AI sangat andal dalam translasi sintaks dan pembuatan kode berulang (boilerplate) karena tugas tersebut didasarkan pada pola umum yang banyak ditemukan di data pelatihannya.",
            },
          ],
        },
      ],
    },
    {
      slug: "prompting-kode",
      title: "Prompting untuk Kode",
      description:
        "Kualitas output = kualitas input. Skill yang membedakan hasil bagus dan sampah.",
      topics: [
        "Konteks yang cukup: kode terkait, error lengkap, tujuan",
        "Spesifik: bahasa, versi, framework, constraint",
        "Iterasi: mempersempit alih-alih mengulang",
        "Minta alternatif & trade-off, bukan satu jawaban",
        "Prompt untuk belajar (jelaskan) vs produksi (kerjakan)",
        "Anti-pattern: prompt sekali-tembak untuk masalah kompleks",
      ],
      items: [
        {
          kind: "materi",
          id: "ai-2-m1",
          title: "Prinsip Dasar Prompting untuk Pemrograman",
          body:
            "# Pengertian\n\n" +
            "**Prompting** adalah seni dan teknik memberikan instruksi kepada model AI agar menghasilkan respon yang akurat, relevan, dan aman. Di dunia pengembangan perangkat lunak, instruksi umum seperti *'buatkan kode login'* hampir selalu menghasilkan kode yang buruk atau tidak cocok dengan proyekmu.\n\n" +
            "Prompting yang efektif memerlukan struktur yang jelas: menyertakan **konteks teknologi**, **pesan error persis**, **potongan kode terkait**, dan **batasan (constraints)**.\n\n" +
            "## Anatomi Prompt yang Efektif\n\n" +
            "Sebuah prompt koding yang berkualitas baik umumnya memiliki 4 elemen utama:\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                        ANATOMI PROMPT KODING                            |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 1. KONTEKS    ---> \"Saya menggunakan Node 20 + Express 5\"               |\n" +
            "| 2. MASALAH    ---> Tempelkan potongan kode & pesan error dari terminal  |\n" +
            "| 3. TUJUAN     ---> \"Saya ingin req.body terbaca sebagai JSON\"           |\n" +
            "| 4. CONSTRAINT ---> \"Tanpa library eksternal, gunakan async/await\"       |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Perbandingan Prompt Buruk vs Efektif\n\n" +
            "| Elemen | Prompt Asal-asalan (Buruk) | Prompt Terstruktur (Efektif) |\n" +
            "|---|---|---|\n" +
            "| **Spesifikasi** | \"Perbaiki error di kode ini.\" | \"Node 20 + Express. TypeError: Cannot read 'email' of undefined at src/auth.js:12.\" |\n" +
            "| **Batasan** | (Tidak ada batasan) | \"Gunakan TypeScript strict, jangan pakai library tambahan.\" |\n" +
            "| **Metode** | \"Buatkan aplikasi e-commerce utuh.\" | \"Langkah 1: Tulis satu fungsi hitungTotal(items) yang menerima array.\" |\n" +
            "| **Tujuan** | Mode produksi terus-menerus | Mode belajar: \"Jelaskan konsepnya, jangan berikan jawaban jadi.\" |\n\n" +
            "## Iterasi vs Mengulang-ulang\n\n" +
            "Saat AI memberikan jawaban yang meleset, **jangan ketik ulang prompt awal yang sama persis**. Lakukan **prompting iteratif**: sebutkan bagian mana dari jawaban AI yang sudah benar, bagian mana yang salah, dan apa yang sudah kamu coba secara manual.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> **Jebakan Mega-Prompt:** Meminta seluruh fitur kompleks dalam satu prompt raksasa (*single-shot mega-prompt*). AI akan menghasilkan ratusan baris kode yang membingungkan dan sulit diverifikasi. Pecah tugas menjadi 3-5 langkah kecil yang bisa diuji satu per satu!\n\n" +
            "## Kapan Dipakai di Dunia Kerja\n\n" +
            "> **Dunia Kerja:** Keterampilan merumuskan prompt terstruktur sangat dihargai dalam *technical communication*. Engineer yang mampu menulis masalah dengan jelas ke AI juga biasanya sangat handal dalam menulis *issue ticket* Jira dan deskripsi Pull Request untuk timnya.",
        },
        {
          kind: "step",
          id: "ai-2-1",
          title: "Prompt Berkonteks: Kode, Error, dan Tujuan",
          explanation:
            "Kualitas jawaban AI hampir seluruhnya ditentukan konteks yang kamu berikan. Prompt 'kodeku error, tolong perbaiki' memaksa model menebak, dan tebakan itu biasanya meleset. Prompt yang berguna memuat tiga hal: potongan kode yang relevan, pesan error lengkap apa adanya (jangan diringkas), dan hasil akhir yang kamu inginkan. Menuliskan ketiganya juga menguntungkanmu sendiri — sering kali kamu menemukan penyebabnya sebelum sempat menekan kirim.",
          example: {
            code: "Saya memakai Node 20 + Express 5.\nSaat POST /login, terminal menampilkan:\nTypeError: Cannot read properties of undefined (reading 'email')\n    at login (src/auth.js:12)\n\nKode: const { email } = req.body;\nYang saya inginkan: req.body terbaca sebagai JSON.",
            output: "AI langsung menunjuk penyebabnya: middleware express.json() belum dipasang, bukan menebak-nebak sepuluh kemungkinan.",
          },
          instruction:
            "Tulis prompt untuk meminta bantuan pada kasus ini: aplikasi **React 19** gagal build, terminal menampilkan `Module not found: Can't resolve './Header'`, dan yang kamu inginkan halaman kembali bisa di-build. Prompt-mu wajib memuat ketiganya — versi/teknologi, pesan error persis, dan tujuan akhir.",
          starterCode: "# Tulis prompt-mu di bawah ini (boleh beberapa baris)\n",
          language: "text",
          tests: [
            {
              pattern: "\\breact\\s*(19)?\\b",
              flags: "i",
              message:
                "Sebutkan teknologi dan versinya (React 19) agar AI tidak menebak.",
            },
            {
              pattern: "Module not found[\\s\\S]*Header",
              flags: "i",
              message:
                "Tempelkan pesan error persis seperti yang muncul di terminal.",
            },
            {
              pattern: "(ingin|tujuan|harapan|supaya|agar|bisa)[\\s\\S]*build",
              flags: "i",
              message:
                "Sebutkan hasil akhir yang kamu inginkan, misalnya 'agar build berhasil lagi'.",
            },
          ],
          solution: "Saya memakai React 19 dengan Vite.\nSaat menjalankan build, muncul error:\nModule not found: Can't resolve './Header'\n\nYang saya inginkan: build berhasil lagi dan komponen Header tetap tampil.\nTolong bantu temukan penyebabnya.",
        },
        {
          kind: "step",
          id: "ai-2-2",
          title: "Constraint: Membatasi Ruang Jawaban AI",
          explanation:
            "Tanpa batasan, AI akan memilih jalur paling umum di data latihannya — biasanya menambah library baru, memakai sintaks lama, atau menulis gaya kode yang tidak sesuai timmu. Constraint adalah aturan main yang kamu tetapkan di depan: bahasa dan versinya, boleh atau tidak menambah dependensi, gaya penulisan, serta hal yang tidak boleh dipakai. Constraint juga membuat hasilnya lebih mudah kamu review, karena ruang kemungkinannya menyempit. Ini keterampilan yang membedakan orang yang 'nanya AI' dengan orang yang mengarahkan AI.",
          example: {
            code: "Tulis fungsi validasi email.\nConstraint:\n- TypeScript, tanpa library eksternal\n- kembalikan boolean, bukan throw\n- jangan pakai regex sepanjang satu baris penuh, beri komentar singkat",
            output: "AI mengembalikan fungsi TypeScript pendek tanpa dependensi tambahan, sesuai batasan yang diminta.",
          },
          instruction:
            "Kamu butuh fungsi pemformat tanggal Indonesia. Tulis prompt yang menyertakan minimal tiga constraint: sebut **TypeScript**, larang penambahan library eksternal (mis. tanpa moment/dayjs), dan sebutkan bentuk keluaran yang diinginkan (mis. `31 Juli 2026`).",
          starterCode: "# Tulis prompt beserta constraint-nya di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "\\btypescript\\b",
              flags: "i",
              message:
                "Sebutkan bahasanya: TypeScript.",
            },
            {
              pattern: "(tanpa|jangan|tidak|bebas)[\\s\\S]*(library|dependensi|paket|moment|dayjs)",
              flags: "i",
              message:
                "Larang penambahan library eksternal secara eksplisit.",
            },
            {
              pattern: "(31|Juli|format)",
              flags: "i",
              message:
                "Sebutkan bentuk keluaran yang kamu inginkan, misalnya '31 Juli 2026'.",
            },
          ],
          solution: "Tulis fungsi TypeScript formatTanggal(tanggal: Date): string.\nConstraint:\n- tanpa library eksternal (jangan pakai moment atau dayjs)\n- keluaran berbentuk '31 Juli 2026' dengan nama bulan bahasa Indonesia\n- kembalikan string, jangan mencetak ke konsol",
        },
        {
          kind: "step",
          id: "ai-2-3",
          title: "Iterasi: Mempersempit, Bukan Mengulang Permintaan yang Sama",
          explanation:
            "Saat jawaban pertama meleset, refleks pemula adalah mengetik ulang permintaan yang sama dengan nada lebih tegas. Hasilnya nyaris selalu sama karena informasinya tidak bertambah. Iterasi yang benar bersifat mempersempit: sebutkan bagian mana yang sudah benar, apa yang salah pada percobaan sebelumnya, dan apa yang sudah kamu coba. Dengan begitu setiap putaran memangkas ruang kemungkinan, bukan mengocok ulang dadu yang sama.",
          example: {
            code: "Fungsi yang kamu berikan sudah benar untuk angka positif,\ntapi mengembalikan NaN saat input berupa string kosong.\nSaya sudah mencoba menambahkan Number(input) dan hasilnya tetap NaN.\nPerbaiki hanya penanganan input kosong, sisanya biarkan.",
            output: "AI fokus memperbaiki satu kasus itu saja dan tidak menulis ulang seluruh fungsi.",
          },
          instruction:
            "Jawaban pertama AI membuat fungsi keranjang belanja yang benar untuk 1 item, tapi salah menghitung total saat item lebih dari satu. Tulis prompt iterasi yang menyebut: bagian yang **sudah benar**, bagian yang **salah**, dan apa yang **sudah kamu coba**.",
          starterCode: "# Tulis prompt iterasi di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(sudah benar|sudah tepat|berhasil|lancar)",
              flags: "i",
              message:
                "Sebutkan bagian yang sudah benar agar tidak ikut ditulis ulang.",
            },
            {
              pattern: "(salah|keliru|gagal|meleset)",
              flags: "i",
              message:
                "Sebutkan persis bagian mana yang belum benar.",
            },
            {
              pattern: "(sudah saya coba|saya sudah|sudah dicoba)",
              flags: "i",
              message:
                "Sebutkan apa yang sudah kamu coba supaya AI tidak mengulanginya.",
            },
          ],
          solution: "Fungsi hitungTotal sudah benar untuk keranjang berisi 1 item.\nYang salah: saat keranjang berisi 3 item, totalnya hanya menghitung item terakhir.\nSudah saya coba mengganti forEach menjadi for biasa, hasilnya tetap sama.\nPerbaiki hanya bagian penjumlahannya.",
        },
        {
          kind: "step",
          id: "ai-2-4",
          title: "Minta Alternatif dan Trade-off, Bukan Satu Jawaban",
          explanation:
            "AI cenderung menyodorkan satu solusi seolah tidak ada pilihan lain, padahal keputusan teknik hampir selalu punya konsekuensi. Meminta dua atau tiga alternatif beserta kelebihan-kekurangannya mengubah AI dari 'pemberi jawaban' menjadi 'penyaji opsi', dan keputusan tetap di tanganmu. Cara ini juga melatihmu untuk technical interview, karena pertanyaan 'kenapa kamu pilih X?' dijawab dengan perbandingan, bukan selera. Selalu sebutkan kriteria pembandingnya — performa, kemudahan perawatan, atau kecepatan pengerjaan.",
          example: {
            code: "Beri 3 cara menyimpan sesi login di aplikasi Next.js.\nUntuk tiap cara sebutkan kelebihan, kekurangan, dan kapan sebaiknya dipakai.\nKriteria saya: keamanan lebih penting daripada kemudahan.",
            output: "AI menyajikan tabel perbandingan cookie httpOnly, JWT di localStorage, dan session server — beserta risikonya masing-masing.",
          },
          instruction:
            "Kamu harus memilih cara menyimpan file yang diunggah pengguna. Tulis prompt yang meminta **minimal 2 alternatif**, meminta **kelebihan dan kekurangan** tiap alternatif, dan menyebut **kriteria** yang kamu pakai untuk memutuskan.",
          starterCode: "# Tulis prompt permintaan alternatif di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(2|dua|3|tiga|beberapa)\\s*(alternatif|opsi|cara|pendekatan)",
              flags: "i",
              message:
                "Minta lebih dari satu alternatif secara eksplisit.",
            },
            {
              pattern: "(kelebihan|kekurangan|trade-?off|plus minus)",
              flags: "i",
              message:
                "Minta kelebihan dan kekurangan tiap alternatif.",
            },
            {
              pattern: "(kriteria|prioritas|paling penting|utamakan)",
              flags: "i",
              message:
                "Sebutkan kriteria keputusanmu, misalnya biaya atau kecepatan.",
            },
          ],
          solution: "Beri 2 alternatif penyimpanan file unggahan pengguna untuk aplikasi Node.js.\nUntuk tiap alternatif sebutkan kelebihan dan kekurangannya.\nKriteria saya: biaya bulanan serendah mungkin, dan file harus tetap aman kalau server diganti.",
        },
        {
          kind: "step",
          id: "ai-2-5",
          title: "Prompt untuk Belajar vs Prompt untuk Produksi",
          explanation:
            "Dua tujuan berbeda menuntut prompt yang berbeda. Saat kamu sedang belajar, mintalah penjelasan bertahap dan alasan di balik setiap keputusan — kode yang langsung jadi justru merampas proses berpikirmu. Saat kamu sedang mengejar deadline pada bagian yang sudah kamu kuasai, mintalah kode siap pakai lengkap dengan penanganan error. Bahaya terbesar bagi pemula adalah memakai mode produksi terus-menerus: pekerjaan selesai, tapi kemampuanmu tidak bertambah dan kamu tidak bisa mempertahankan kodemu saat ditanya.",
          example: {
            code: "Mode belajar:\n\"Jelaskan langkah demi langkah cara kerja closure di JavaScript,\nberi 1 contoh kecil, JANGAN tulis solusi tugas saya.\"",
            output: "AI menjelaskan konsepnya dan menahan diri memberi jawaban jadi, sehingga kamu tetap yang menulis kodenya.",
          },
          instruction:
            "Kamu sedang belajar `reduce` dan tidak ingin diberi jawaban jadi. Tulis prompt mode belajar yang meminta **penjelasan** cara kerjanya, meminta **contoh** kecil yang berbeda dari tugasmu, dan **melarang** AI menuliskan solusi tugasmu.",
          starterCode: "# Tulis prompt mode belajar di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(jelaskan|penjelasan|bagaimana cara kerja)",
              flags: "i",
              message:
                "Minta penjelasan, bukan kode jadi.",
            },
            {
              pattern: "\\bcontoh\\b",
              flags: "i",
              message:
                "Minta satu contoh kecil sebagai pembanding.",
            },
            {
              pattern: "(jangan|tanpa|hindari)[\\s\\S]*(solusi|jawaban|kode tugas|kerjakan)",
              flags: "i",
              message:
                "Larang AI menuliskan solusi tugasmu.",
            },
          ],
          solution: "Jelaskan cara kerja Array.reduce langkah demi langkah, termasuk peran nilai awal.\nBeri satu contoh kecil menjumlahkan angka.\nJangan tuliskan solusi untuk tugas saya — saya ingin mencobanya sendiri dulu.",
        },
        {
          kind: "step",
          id: "ai-2-6",
          title: "Anti-pattern: Satu Prompt untuk Seluruh Fitur",
          explanation:
            "Meminta 'buatkan aplikasi kasir lengkap dengan login, stok, dan laporan' dalam satu prompt menghasilkan tumpukan kode yang tidak bisa kamu verifikasi, memakai asumsi yang tidak pernah kamu setujui, dan gagal di tempat yang sulit dilacak. Cara kerja yang sehat: pecah menjadi langkah kecil yang masing-masing bisa diuji — satu endpoint, satu komponen, satu perbaikan. Ini bukan soal AI-nya lemah, tapi soal kemampuanmu memeriksa hasilnya. Aturan praktis: kalau kamu tidak sanggup me-review hasilnya dalam 5 menit, permintaanmu terlalu besar.",
          example: {
            code: "❌ 'Buatkan sistem inventori lengkap dengan auth dan laporan PDF.'\n\n✅ Langkah 1: 'Buat satu endpoint GET /produk yang mengembalikan daftar produk dari array sementara.'",
            output: "Permintaan kecil menghasilkan kode yang bisa langsung kamu jalankan dan uji sebelum melangkah ke bagian berikutnya.",
          },
          instruction:
            "Fitur besar: 'checkout e-commerce lengkap'. Pecah menjadi rencana bertahap: tulis **tiga langkah bernomor**, masing-masing satu pekerjaan kecil yang bisa diuji sendiri (misalnya hitung total, validasi stok, simpan pesanan).",
          starterCode: "# Tulis rencana bertahapmu di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "^\\s*1[.)]",
              flags: "im",
              message:
                "Tulis langkah pertama dengan penomoran 1.",
            },
            {
              pattern: "^\\s*2[.)]",
              flags: "im",
              message:
                "Tulis langkah kedua dengan penomoran 2.",
            },
            {
              pattern: "^\\s*3[.)]",
              flags: "im",
              message:
                "Tulis langkah ketiga dengan penomoran 3.",
            },
          ],
          solution: "1. Hitung total belanja dari daftar item di keranjang (tanpa ongkir dulu).\n2. Validasi stok tiap item sebelum pesanan boleh lanjut.\n3. Simpan pesanan ke database dan kembalikan nomor pesanan.",
        },
        {
          kind: "quiz",
          id: "ai-2-kuis",
          title: "Kuis: Prompting untuk Kode",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Elemen apa saja yang Wajib disertakan saat meminta AI menyelesaikan bug pada berkas kode kamu?",
              choices: [
                "Kode terkait, log error lengkap di terminal, dan hasil akhir yang diharapkan",
                "Hanya nama file kode saja",
                "Foto layar komputer dari HP",
                "Username dan password database",
              ],
              answerIndex: 0,
              explanation: "Konteks berupa potongan kode terkait, traceback error lengkap, dan ekspektasi hasil memberikan informasi utuh bagi AI.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa kita disarankan meminta alternatif atau trade-off dari AI?",
              choices: ["Agar AI merasa dihargai", "Untuk memastikan kita memilih pendekatan terbaik dan memahami konsekuensinya", "Karena AI selalu salah di jawaban pertama", "Agar proses berjalan lebih lambat"],
              answerIndex: 1,
              explanation: "Dengan meminta alternatif, kita dipaksa mengevaluasi kelebihan dan kelemahan masing-masing solusi sebelum menerapkannya ke proyek.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa kelemahan dari single-shot mega prompt (satu prompt panjang untuk membuat seluruh aplikasi)?",
              choices: ["Sangat efektif untuk aplikasi kompleks", "Hanya bisa digunakan oleh pengguna berbayar", "AI sering gagal menghasilkan kode berkualitas karena tugasnya terlalu besar dan tidak fokus", "Menghasilkan kode yang 100% sempurna tanpa bug"],
              answerIndex: 2,
              explanation: "Memecah tugas besar menjadi bagian kecil (modular) jauh lebih efektif karena AI dapat fokus pada satu masalah spesifik di setiap prompt.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa yang sebaiknya dilakukan jika jawaban AI tidak sesuai dengan harapanmu pada percobaan pertama?",
              choices: ["Membuat obrolan baru dan mengulangi prompt dari awal persis sama", "Melakukan prompting iteratif dengan memberikan umpan balik untuk mempersempit instruksi", "Menyerah dan tidak lagi menggunakan AI", "Memarahi AI agar ia meminta maaf"],
              answerIndex: 1,
              explanation: "Menggunakan pendekatan iteratif dengan memberikan konteks tambahan atau koreksi jauh lebih efektif daripada memulai ulang dari nol.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Mengapa menyebutkan batasan (constraint) seperti 'tanpa menggunakan library eksternal' pada prompt itu penting?",
              choices: ["Agar AI merasa tertantang", "Memastikan AI menghasilkan kode yang sesuai dengan pedoman atau batasan di proyek kita", "Supaya kodenya tidak bisa dibaca oleh orang lain", "Meningkatkan kecepatan respons AI secara drastis"],
              answerIndex: 1,
              explanation: "Constraint memastikan AI tidak memberikan solusi yang tidak bisa kita gunakan, seperti menambahkan library berukuran besar yang tidak diizinkan di proyek.",
            },
          ],
        },
      ],
    },
    {
      slug: "workflow-tools",
      title: "Workflow dengan AI Tools",
      description:
        "Integrasi ke alur kerja harian: autocomplete, chat, dan agent.",
      topics: [
        "Autocomplete (Copilot): kapan menerima, kapan menolak",
        "Chat untuk eksplorasi & desain sebelum menulis kode",
        "Agent/composer untuk perubahan multi-file",
        "AI untuk test: generate kasus uji dari spesifikasi",
        "AI untuk dokumentasi & commit message",
        "Menjaga flow: AI membantu fokus, bukan mengganti berpikir",
      ],
      items: [
        {
          kind: "materi",
          id: "ai-3-m1",
          title: "Mengintegrasikan AI ke Alur Kerja Harian Developer",
          body:
            "# Pengertian\n\n" +
            "Mengintegrasikan alat AI ke alur kerja harian bukan berarti membiarkan AI mengambil alih seluruh proses pengembangan. Ini adalah tentang **memilih alat AI yang tepat untuk fase pengembangan yang tepat**.\n\n" +
            "Setiap jenis alat AI memiliki kekuatan spesifik yang jika dipadukan dengan benar akan meningkatkan kecepatan dan kualitas kodingmu secara drastis.\n\n" +
            "## Tiga Mode Utama Alur Kerja AI\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                     PETA ALUR KERJA ALAT AI                             |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 1. FASE DESAIN & DISKUSI  ---> Gunakan Chat LLM (Claude / ChatGPT)      |\n" +
            "| 2. FASE IMPLEMENTASI BARS ---> Gunakan Autocomplete (Copilot / Continue)|\n" +
            "| 3. FASE REFACTOR MULTIFILE---> Gunakan AI Agent (Cursor Composer / AGY) |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "| Fitur / Mode | Kapan Digunakan | Kapan Dihindari / Berisiko |\n" +
            "|---|---|---|\n" +
            "| **Autocomplete** | Menulis kode berulang, mock data, atau kelanjutan fungsi sederhana | Menulis logika bisnis sensitif atau perhitungan angka ajaib |\n" +
            "| **Sesi Chat** | Mengeksplorasi arsitektur, mendesain tabel, membedah error rumit | Tugas mengetik sederhana satu baris yang cukup autocomplete |\n" +
            "| **AI Agent** | Perubahan lintas file (misal mengganti nama fungsi di 10 berkas) | Menjalankan di direktori git yang belum di-commit (*dirty working tree*) |\n\n" +
            "## AI untuk Pengujian & Dokumentasi\n\n" +
            "Dua area dengan ROI (*Return on Investment*) tertinggi untuk penggunaan AI adalah **pembuatan unit test** dan **penulisan dokumentasi/commit message**.\n\n" +
            "- **Unit Test:** AI sangat andal membuat kerangka test dan menemukan *edge case* input (seperti input string kosong, angka negatif, atau `null`).\n" +
            "- **Commit Message:** AI dapat membaca perubahan `git diff` dan merangkum pesan commit sesuai standar Conventional Commits (`fix:`, `feat:`).\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> **Jebakan:** Menjalankan AI Agent di direktori git yang memiliki banyak perubahan belum di-commit. Jika Agent membuat kesalahan di 15 berkas sekaligus, kamu tidak bisa membedakan mana perubahanmu dan mana perubahan Agent. **Selalu pastikan `git status` bersih sebelum menjalankan Agent!**\n\n" +
            "## Kapan Dipakai di Dunia Kerja\n\n" +
            "> **Dunia Kerja:** Dalam tim profesional, pengembang diwajibkan memeriksa `git diff` baris demi baris sebelum membuat Pull Request. Memahami kapan harus menerima saran autocomplete dan kapan menolaknya memastikan reputasimu sebagai engineer tetap terjaga.",
        },
        {
          kind: "step",
          id: "ai-3-1",
          title: "Menerima atau Menolak Saran Autocomplete",
          explanation:
            "Autocomplete menyodorkan kelanjutan kode berdasarkan pola, bukan berdasarkan aturan proyekmu. Saran yang sekadar melanjutkan pola berulang biasanya aman diterima. Saran yang menyangkut angka, batas, atau aturan bisnis wajib kamu baca dulu — di situlah kesalahan paling sering menyelinap dan paling mahal akibatnya. Kebiasaan yang perlu kamu bangun: baca saran sampai selesai sebelum menekan Tab, dan curigai setiap angka ajaib yang muncul begitu saja.",
          example: {
            code: "// saran Copilot untuk pajak: PPN 10%\nconst pajak = harga * 0.1;\n\n// tarif PPN Indonesia saat ini 11% — angka dari AI tertinggal versi\nconst pajakBenar = harga * 0.11;",
            output: "Untuk harga 100000, saran AI memberi 10000 sedangkan angka yang benar 11000.",
            note: "Pola bahaya: angka yang muncul sendiri dari autocomplete. Selalu cocokkan dengan aturan yang berlaku.",
          },
          instruction:
            "Copilot menyarankan `const ongkir = 15000;` untuk semua pesanan, padahal aturan tokomu: ongkir gratis bila total belanja minimal Rp300.000, selain itu Rp15.000. Tulis fungsi `hitungOngkir(total)` yang menerapkan aturan tokomu.",
          starterCode: "// Saran AI: const ongkir = 15000;\n// Tulis fungsi hitungOngkir yang benar di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+hitungOngkir\\s*\\(|const\\s+hitungOngkir\\s*=",
              message:
                "Buat fungsi hitungOngkir(total).",
            },
            {
              pattern: "300_?000",
              message:
                "Sertakan ambang gratis ongkir 300000.",
            },
            {
              pattern: "15_?000",
              message:
                "Ongkir selain itu 15000.",
            },
            {
              pattern: "\\breturn\\b",
              message:
                "Kembalikan nilai ongkirnya dengan return.",
            },
          ],
          solution: "function hitungOngkir(total) {\n  return total >= 300000 ? 0 : 15000;\n}\n\nconsole.log(hitungOngkir(250000));",
        },
        {
          kind: "step",
          id: "ai-3-2",
          title: "Memakai Chat untuk Merancang Sebelum Menulis Kode",
          explanation:
            "Kesalahan desain jauh lebih mahal daripada kesalahan sintaks, karena baru terasa setelah kodenya menyebar ke mana-mana. Chat AI berguna sebagai lawan bicara di tahap perancangan: kamu menjelaskan kebutuhan, ia menawarkan beberapa bentuk struktur data atau alur, lalu kamu yang memutuskan. Kunci agar sesi ini berguna adalah menyebutkan kebutuhan nyata dan batasannya — jumlah pengguna, data yang wajib disimpan, dan hal yang harus dihindari. Hasil yang kamu bawa dari sesi ini bukan kode, melainkan keputusan yang bisa kamu pertanggungjawabkan.",
          example: {
            code: "Saya butuh menyimpan keranjang belanja untuk pengguna yang belum login.\nData wajib: id produk, jumlah, harga saat ditambahkan.\nBatasan: tanpa server tambahan.\nTawarkan 2 bentuk penyimpanan beserta risikonya.",
            output: "AI menawarkan localStorage dan cookie, lengkap dengan risiko data hilang saat ganti perangkat.",
          },
          instruction:
            "Kamu merancang penyimpanan riwayat pesanan. Tulis prompt perancangan yang memuat: **data apa saja yang wajib disimpan**, **batasan** yang harus dipatuhi, dan permintaan **alternatif struktur** untuk dipilih.",
          starterCode: "# Tulis prompt perancanganmu di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(data|field|kolom|menyimpan)",
              flags: "i",
              message:
                "Sebutkan data apa saja yang wajib disimpan.",
            },
            {
              pattern: "(batas|tanpa|harus|maksimal|constraint)",
              flags: "i",
              message:
                "Sebutkan batasan yang harus dipatuhi.",
            },
            {
              pattern: "(alternatif|opsi|pilihan|bandingkan)",
              flags: "i",
              message:
                "Minta beberapa alternatif struktur, jangan satu jawaban.",
            },
          ],
          solution: "Saya merancang penyimpanan riwayat pesanan untuk aplikasi kasir kecil.\nData wajib: nomor pesanan, tanggal, daftar item, total, metode bayar.\nBatasan: satu database MySQL, tanpa layanan tambahan berbayar.\nTawarkan 2 alternatif struktur tabel beserta kelebihan dan kekurangannya.",
        },
        {
          kind: "step",
          id: "ai-3-3",
          title: "Menugaskan Perubahan Multi-File ke Agent",
          explanation:
            "Agent bisa menyunting banyak file sekaligus, dan justru itulah yang membuatnya berisiko: satu instruksi kabur bisa mengubah puluhan berkas yang tidak kamu maksud. Instruksi yang aman menyebut ruang lingkupnya (file atau folder mana), hasil yang diharapkan, dan hal yang tidak boleh disentuh. Selalu jalankan agent di repositori yang bersih tanpa perubahan belum di-commit, supaya kamu bisa membaca diff-nya sebagai satu kesatuan dan membatalkannya dengan mudah. Membaca diff adalah bagian pekerjaanmu, bukan formalitas.",
          example: {
            code: "Ganti nama fungsi getUser menjadi fetchUser di seluruh folder src/services.\nJangan sentuh folder tests dan jangan ubah tanda tangan parameternya.\nTampilkan daftar file yang diubah setelah selesai.",
            output: "Agent hanya menyunting berkas di src/services dan melaporkan 4 file yang berubah.",
          },
          instruction:
            "Tulis instruksi untuk agent yang mengganti pemakaian `var` menjadi `const` atau `let` di folder `src/utils`. Instruksimu wajib menyebut **ruang lingkup folder**, **hasil yang diharapkan**, dan **bagian yang tidak boleh disentuh**.",
          starterCode: "# Tulis instruksi untuk agent di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "src/utils",
              flags: "i",
              message:
                "Sebutkan ruang lingkupnya: folder src/utils.",
            },
            {
              pattern: "\\b(const|let)\\b",
              flags: "i",
              message:
                "Sebutkan hasil yang diharapkan: var diganti const atau let.",
            },
            {
              pattern: "(jangan|tanpa|kecuali|tidak boleh)",
              flags: "i",
              message:
                "Sebutkan bagian yang tidak boleh disentuh.",
            },
          ],
          solution: "Ganti semua deklarasi var menjadi const, atau let bila nilainya memang diubah, di seluruh file dalam folder src/utils.\nJangan mengubah nama variabel, logika, maupun file di luar folder itu.\nTampilkan ringkasan file yang berubah setelah selesai.",
        },
        {
          kind: "step",
          id: "ai-3-4",
          title: "Meminta AI Membuat Kasus Uji dari Spesifikasi",
          explanation:
            "AI cukup andal menulis kerangka test, tapi ia condong menguji jalur yang normal saja — input wajar, hasil wajar. Nilai tambahmu ada pada kasus tepi: nilai nol, input kosong, angka negatif, dan data yang tidak lengkap. Karena itu perlakukan test buatan AI sebagai titik awal, lalu tambahkan kasus yang benar-benar sering merusak aplikasi di dunia nyata. Test yang bagus juga berfungsi sebagai spesifikasi: orang berikutnya membaca test-mu untuk tahu perilaku yang diharapkan.",
          example: {
            code: "test('diskon member 10 persen', () => {\n  expect(hitungDiskon(100000, true)).toBe(10000);\n});",
            output: "1 test lolos — tapi kasus bukan member dan diskon maksimal belum diuji sama sekali.",
          },
          instruction:
            "AI sudah menulis satu test untuk jalur normal. Tambahkan **satu test kasus tepi**: pastikan `hitungDiskon(100000, false)` untuk pengguna yang bukan member menghasilkan `0`. Pakai bentuk `test('...', () => { expect(...).toBe(...) })`.",
          starterCode: "// test dari AI (jalur normal)\ntest('diskon member 10 persen', () => {\n  expect(hitungDiskon(100000, true)).toBe(10000);\n});\n\n// Tambahkan test kasus tepi di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "test\\([\\s\\S]*hitungDiskon\\(\\s*100000\\s*,\\s*false\\s*\\)",
              message:
                "Tulis test yang memanggil hitungDiskon(100000, false).",
            },
            {
              pattern: "toBe\\(\\s*0\\s*\\)",
              message:
                "Pastikan hasil yang diharapkan adalah 0.",
            },
          ],
          solution: "test('diskon member 10 persen', () => {\n  expect(hitungDiskon(100000, true)).toBe(10000);\n});\n\ntest('bukan member tidak dapat diskon', () => {\n  expect(hitungDiskon(100000, false)).toBe(0);\n});",
        },
        {
          kind: "step",
          id: "ai-3-5",
          title: "Commit Message & Dokumentasi dengan Bantuan AI",
          explanation:
            "AI bisa merangkum diff menjadi pesan commit, tapi ia hanya melihat APA yang berubah — bukan KENAPA. Padahal alasan perubahanlah yang dicari orang (termasuk kamu enam bulan lagi) saat membuka riwayat. Karena itu terima bantuan AI untuk baris judulnya, lalu kamu sendiri yang menambahkan konteksnya. Ikuti Conventional Commits: `fix:` untuk perbaikan bug, `feat:` untuk fitur baru — tipe yang salah membuat penomoran versi dan changelog otomatis jadi menyesatkan.",
          example: {
            code: "fix(cart): cegah total minus saat kupon lebih besar dari subtotal\n\nKupon 50rb pada belanja 30rb membuat total -20rb.\nTotal sekarang dibatasi minimal 0.",
            output: "Riwayat commit menjelaskan penyebab dan dampaknya, bukan sekadar 'update cart.js'.",
          },
          instruction:
            "Kamu memperbaiki bug: form login bisa dikirim dua kali sehingga akun ganda terbuat. Tulis pesan commit berformat Conventional Commits — baris pertama diawali `fix(` dengan scope dan ringkasannya, lalu baris penjelasan yang menyebut **kenapa** perubahan ini perlu.",
          starterCode: "# Tulis pesan commit di bawah ini (judul, baris kosong, lalu penjelasan)\n",
          language: "text",
          tests: [
            {
              pattern: "^fix\\([a-z-]+\\):\\s*\\S+",
              flags: "im",
              message:
                "Awali dengan tipe fix( scope ): ringkasan singkat.",
            },
            {
              pattern: "[\\s\\S]*\\n[\\s\\S]*\\S",
              message:
                "Tambahkan baris penjelasan di bawah judul, bukan judul saja.",
            },
            {
              pattern: "(karena|akibat|menyebabkan|sebab|agar|sehingga|supaya)",
              flags: "i",
              message:
                "Jelaskan KENAPA perubahan ini dibutuhkan.",
            },
          ],
          solution: "fix(auth): matikan tombol submit setelah login dikirim\n\nTombol yang masih aktif membuat pengguna menekan dua kali,\nsehingga permintaan pendaftaran terkirim ganda dan akun duplikat terbuat.",
        },
        {
          kind: "step",
          id: "ai-3-6",
          title: "Menjaga Kendali: Kode yang Tidak Kamu Pahami Tidak Boleh Masuk",
          explanation:
            "Godaan terbesar memakai AI adalah menerima kode panjang yang 'kelihatannya jalan'. Masalahnya muncul nanti: saat kode itu error di production, kamu tidak punya peta mentalnya, dan memperbaikinya jadi jauh lebih lama daripada menulis sendiri sejak awal. Aturan yang dipakai banyak tim: kamu harus bisa menjelaskan setiap baris yang kamu commit. Kalau ada bagian yang tidak kamu pahami, minta AI menyederhanakannya atau tulis ulang dengan cara yang kamu kuasai — pendek dan dimengerti lebih berharga daripada pintar tapi asing.",
          example: {
            code: "// versi AI: 3 baris, sulit dibaca pemula\nconst unik = [...new Set(data.map((d) => d.id))];\n\n// versi yang kamu pahami dan bisa kamu jelaskan\nconst ids = data.map((d) => d.id);\nconst unikJelas = ids.filter((id, i) => ids.indexOf(id) === i);",
            output: "Keduanya menghasilkan daftar id unik yang sama.",
          },
          instruction:
            "AI memberi kode `const aktif = user?.profil?.status === 'aktif' ?? false;` yang membingungkanmu. Tulis ulang menjadi versi yang kamu pahami: buat variabel `status` yang mengambil `user.profil.status` dengan optional chaining, lalu variabel `aktif` yang membandingkannya dengan `'aktif'`.",
          starterCode: "// Tulis ulang jadi dua langkah yang kamu pahami\n",
          language: "js",
          tests: [
            {
              pattern: "(const|let)\\s+status\\s*=\\s*user\\??\\.?\\s*profil",
              message:
                "Buat variabel status dari user?.profil?.status.",
            },
            {
              pattern: "\\?\\.",
              message:
                "Pakai optional chaining (?.) agar tidak error saat profil kosong.",
            },
            {
              pattern: "(const|let)\\s+aktif\\s*=\\s*status\\s*===\\s*['\"]aktif['\"]",
              message:
                "Buat variabel aktif hasil perbandingan status === 'aktif'.",
            },
          ],
          solution: "const status = user?.profil?.status;\nconst aktif = status === 'aktif';\n\nconsole.log(aktif);",
        },
        {
          kind: "quiz",
          id: "ai-3-kuis",
          title: "Kuis: Workflow dengan AI Tools",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Langkah terbaik apa yang HARUS dilakukan oleh seorang developer setelah AI Agent melakukan perubahan kode pada banyak berkas file (multi-file)?",
              choices: [
                "Langsung push ke server produksi tanpa diperiksa",
                "Memeriksa `git diff` untuk meninjau baris demi baris perubahan kode buatan AI sebelum commit",
                "Menghapus repository",
                "Mematikan komputer",
              ],
              answerIndex: 1,
              explanation: "Selalu tinjau `git diff` untuk memastikan tidak ada perubahan sampingan yang tidak diinginkan dari eksekusi AI Agent.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Kapan sebaiknya kita menggunakan fitur Autocomplete (seperti Copilot)?",
              choices: ["Untuk semua baris kode tanpa terkecuali", "Saat menulis pola yang berulang atau boilerplate", "Hanya saat aplikasi sudah di-deploy", "Saat merancang arsitektur database awal"],
              answerIndex: 1,
              explanation: "Autocomplete paling bersinar saat menangani kode berulang (seperti mock data, type definition), karena pola tersebut mudah diprediksi dengan akurat.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara terbaik menggunakan AI untuk membantu mendesain arsitektur aplikasi?",
              choices: ["Meminta AI langsung membuatkan seluruh file .js", "Gunakan sesi chat interaktif untuk berdiskusi tentang struktur tabel atau API sebelum menulis kode", "Gunakan AI Agent untuk langsung mengedit file produksi", "Abaikan arsitektur dan langsung jalankan kode"],
              answerIndex: 1,
              explanation: "Membahas konsep dan arsitektur terlebih dahulu di chat membantu menghindari kesalahan fundamental sebelum kode aktual mulai ditulis.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa keunggulan utama menggunakan AI untuk menghasilkan unit test?",
              choices: ["AI dapat menguji kode secara otomatis tanpa perlu dijalankan", "AI mampu memikirkan banyak edge case dan menulis suite test dalam waktu singkat", "AI bisa menggantikan seluruh peran QA Engineer", "Kode test buatan AI tidak perlu dicek lagi"],
              answerIndex: 1,
              explanation: "AI sangat kuat dalam membuat boilerplate test dan mengidentifikasi edge case (seperti input kosong atau null) yang mungkin terlewat oleh developer.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Apa tujuan menggunakan standar seperti 'Conventional Commits' saat meminta AI membuat pesan commit?",
              choices: ["Membuat riwayat Git menjadi lebih berwarna", "Menjaga kerapian, struktur, dan konsistensi riwayat git log dalam tim", "Menyembunyikan detail perubahan dari manajer", "Menghapus pesan error dari terminal"],
              answerIndex: 1,
              explanation: "Format yang terstruktur memudahkan tim untuk membaca riwayat versi dan bahkan memungkinkan otomatisasi pembuatan changelog atau rilis.",
            },
          ],
        },
      ],
    },
    {
      slug: "review-kode-ai",
      title: "Review Kode Hasil AI",
      description:
        "Latihan inti track ini: menemukan bug yang AI hasilkan dengan percaya diri.",
      topics: [
        "Bug khas AI: edge case terlewat, API halu, versi campur",
        "Checklist review kode AI sebelum commit",
        "Keamanan: injection & secrets di kode generated",
        "Lisensi & kode hasil training",
        "Latihan: temukan bug di 10 potongan kode hasil AI",
        "Prinsip: kamu yang tanda tangan, kamu yang bertanggung jawab",
      ],
      items: [
        {
          kind: "materi",
          id: "ai-4-m1",
          title: "Teknik Code Review Khusus Kode Generated AI",
          body:
            "# Pengertian\n\n" +
            "Mengevaluasi kode buatan AI (*generated code*) memerlukan lensa pemeriksaan yang berbeda dibandingkan mereview kode buatan sesama pengembang manusia. Pengembang manusia biasanya membuat kesalahan logika akibat kecerobohan atau kelelahan, sementara **AI membuat kesalahan karena terlalu percaya diri terhadap pola yang tidak sesuai dengan runtime-mu**.\n\n" +
            "Kode AI hampir selalu lolos uji visual pertama: kodenya rapi, variabelnya bernama bagus, dan menggunakan komentar yang terdengar meyakinkan. Namun di balik keindahan itu, sering kali tersembunyi bug fatal di *production*.\n\n" +
            "## Tiga Bug Khas Kode Buatan AI\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                     BUG KHAS KODE GENERATED AI                          |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 1. Terlewatnya Edge Cases ---> Lupa memeriksa null, undefined, array 0 |\n" +
            "| 2. Celah Keamanan         ---> Hardcoded secret API key & SQL Injection |\n" +
            "| 3. Sintaks Bercampur      ---> Menggabungkan API v1 lama & v2 terbaru  |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Checklist Review Kode AI Sebelum Commit\n\n" +
            "Gunakan 5 poin *checklist* ini sebelum kamu menyetujui kode buatan AI ke repositori:\n\n" +
            "| Poin Checklist | Yang Harus Diperiksa | Contoh Masalah |\n" +
            "|---|---|---|\n" +
            "| **1. Pengamanan Null** | Apakah semua akses objek bertingkat menggunakan optional chaining (`?.`)? | `user.profile.name` akan crash jika `profile` bernilai `undefined`. |\n" +
            "| **2. Kredensial & Secrets** | Apakah ada token, password, atau API Key tertulis langsung di kode? | `const apiKey = 'sk-live-12345';` (Wajib pindah ke `.env`!). |\n" +
            "| **3. Celah SQL Injection** | Apakah query database menyambung string masukan pengguna secara langsung? | `db.query('WHERE id = ' + req.id)` (Wajib gunakan parameter binding `?`). |\n" +
            "| **4. Pembagian dengan Nol** | Apakah ada operasi aritmatika yang berpotensi menghasilkan `Infinity` atau `NaN`? | `total / count` tanpa pengecekan `count === 0`. |\n" +
            "| **5. Lisensi Kode** | Apakah AI menjiplak algoritma utuh dari repositori berlisensi ketat (GPL)? | Ganti kode utilitas panjang buatan AI dengan library resmi terpercaya. |\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> **Jebakan:** Berasumsi bahwa 'karena kodenya jalan di komputer saya, berarti kodenya aman'. Kode AI yang mengandung celah SQL injection atau hardcoded secret akan *berjalan sempurna* saat dites manual, namun akan menjebol keamanan aplikasimu saat di-deploy ke publik!\n\n" +
            "## Kapan Dipakai di Dunia Kerja\n\n" +
            "> **Dunia Kerja:** Di perusahaan tech terkemuka, kamu yang menekan tombol *Merge Pull Request* adalah satu-satunya pihak yang bertanggung jawab jika terjadi kebocoran data. Mengetahui cara menemukan bug khas AI membuatmu menjadi reviewer yang disegani di tim.",
        },
        {
          kind: "step",
          id: "ai-4-1",
          title: "Bug Khas Kode AI: Kasus Tepi yang Terlewat",
          explanation:
            "Kode dari AI umumnya benar untuk jalur yang mulus: data lengkap, angka wajar, jaringan sehat. Yang sering terlewat justru keadaan yang biasa terjadi di produksi — properti kosong, array tanpa isi, respons gagal, dan pembagian dengan nol. Pola review yang cepat: untuk setiap akses properti bertingkat, tanyakan 'kalau bagian tengahnya belum ada, apa yang terjadi?'. Optional chaining membuat aksesnya aman, tapi kamu tetap perlu memutuskan nilai penggantinya saat data memang tidak ada.",
          example: {
            code: "const daftar = [];\nconsole.log(daftar[0].nama);          // TypeError\nconsole.log(daftar[0]?.nama ?? '-');  // aman",
            output: "TypeError: Cannot read properties of undefined (reading 'nama')\n-",
          },
          instruction:
            "Kode AI di editor error saat pengguna belum mengisi alamat. Perbaiki agar aman: pakai optional chaining untuk mengakses `user.alamat.kota`, dan tampilkan teks `'Belum diisi'` ketika kotanya tidak ada.",
          starterCode: "const user = { nama: 'Bimo' }; // alamat belum diisi\n\n// Kode hasil AI — perbaiki baris di bawah\nconst kota = user.alamat.city;\nconsole.log(kota);\n",
          language: "js",
          tests: [
            {
              pattern: "user\\?\\.alamat\\?\\.(kota|city)",
              message:
                "Akses alamat dengan optional chaining: user?.alamat?.kota.",
            },
            {
              pattern: "(\\?\\?|\\|\\|)\\s*['\"]Belum diisi['\"]",
              message:
                "Beri nilai pengganti 'Belum diisi' saat data kosong.",
            },
            {
              pattern: "console\\.log\\(",
              message:
                "Cetak hasilnya agar terlihat di preview.",
            },
          ],
          solution: "const user = { nama: 'Bimo' };\n\nconst kota = user?.alamat?.kota ?? 'Belum diisi';\nconsole.log(kota);",
        },
        {
          kind: "step",
          id: "ai-4-2",
          title: "Menulis Komentar Review untuk Kode Buatan AI",
          explanation:
            "Review kode AI berbeda dari review kode rekan: kamu tidak bisa bertanya 'kenapa kamu menulis ini?' dan mendapat alasan yang bertanggung jawab. Karena itu kamu sendiri yang harus menyebutkan masalahnya secara spesifik — apa yang salah, kenapa berbahaya, dan apa gantinya. Menuliskannya juga melatih keterampilan yang dinilai saat interview senior. Dua hal yang paling sering muncul di kode generated: rahasia yang tertulis langsung di kode, dan kegagalan jaringan yang tidak ditangani.",
          example: {
            code: "// contoh komentar review yang berguna\n// 1. Query digabung dengan string input pengguna -> celah SQL injection.\n//    Gunakan parameter binding.\n// 2. Hasil parseInt tidak dicek NaN -> total bisa jadi NaN diam-diam.",
            output: "Komentar menyebut masalah, risikonya, dan saran perbaikannya.",
          },
          instruction:
            "Baca kode hasil AI di editor. Ada dua masalah serius. Tulis komentar review (boleh beberapa baris diawali `//`) yang menyebut keduanya: **kunci API yang ditulis langsung di kode** dan **kegagalan fetch yang tidak ditangani**.",
          starterCode: "// Kode hasil AI:\n// const apiKey = 'sk-live-8823-rahasia';\n// const res = await fetch(url, { headers: { Authorization: apiKey } });\n// const data = await res.json();\n\n// Tulis komentar review-mu di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(api\\s?key|kunci|secret|rahasia)",
              flags: "i",
              message:
                "Sebutkan masalah kunci API yang tertulis langsung di kode.",
            },
            {
              pattern: "(env|environment|\\.env|variabel lingkungan)",
              flags: "i",
              message:
                "Sebutkan gantinya: simpan di environment variable.",
            },
            {
              pattern: "(gagal|error|status|try|catch|ok)",
              flags: "i",
              message:
                "Sebutkan bahwa kegagalan fetch belum ditangani.",
            },
          ],
          solution: "// 1. API key ditulis langsung di kode. Kalau repo ini ter-push, key aktif ikut bocor.\n//    Pindahkan ke environment variable (process.env.API_KEY).\n// 2. Hasil fetch tidak diperiksa: fetch tidak melempar error saat status 401/500,\n//    jadi res.json() bisa gagal diam-diam. Periksa res.ok dan bungkus dengan try/catch.",
        },
        {
          kind: "step",
          id: "ai-4-3",
          title: "Keamanan: Rahasia dan Injeksi di Kode Generated",
          explanation:
            "Model belajar dari kode publik, termasuk contoh tutorial yang sengaja disederhanakan — dan penyederhanaan itulah yang sering berbahaya. Dua pola paling sering muncul: kredensial yang ditulis langsung di berkas, dan query database yang dirangkai dengan menyambung string masukan pengguna. Keduanya lolos review sepintas karena kodenya berjalan normal saat diuji dengan data yang wajar. Perbaikannya baku: rahasia dibaca dari environment variable, dan query memakai parameter binding sehingga masukan pengguna tidak pernah menjadi bagian perintah SQL.",
          example: {
            code: "// ❌ rawan SQL injection\n// db.query('SELECT * FROM users WHERE email = ' + email);\n\n// ✅ parameter binding\n// db.query('SELECT * FROM users WHERE email = ?', [email]);",
            output: "Dengan binding, masukan berisi kutip atau kata kunci SQL diperlakukan sebagai data biasa, bukan perintah.",
          },
          instruction:
            "Perbaiki kode AI di editor: baca kunci dari environment variable ke dalam variabel `apiKey`, lalu ganti query rawan injeksi menjadi bentuk berparameter dengan tanda `?` dan array `[email]`.",
          starterCode: "// Kode hasil AI\nconst apiKey = 'sk-live-8823-rahasia';\ndb.query('SELECT * FROM users WHERE email = ' + email);\n",
          language: "text",
          tests: [
            {
              pattern: "process\\.env\\.\\w+",
              message:
                "Baca kunci dari process.env, jangan tulis nilainya di kode.",
            },
            {
              pattern: "sk-live-8823-rahasia",
              mustNotMatch: true,
              message:
                "Hapus kunci asli dari kode.",
            },
            {
              pattern: "\\?\\s*['\"]\\s*,\\s*\\[\\s*email\\s*\\]",
              message:
                "Pakai query berparameter: '... = ?', [email].",
            },
          ],
          solution: "const apiKey = process.env.API_KEY;\ndb.query('SELECT * FROM users WHERE email = ?', [email]);",
        },
        {
          kind: "step",
          id: "ai-4-4",
          title: "Lisensi: Kode yang Mirip Persis dengan Milik Orang Lain",
          explanation:
            "Model dilatih dari kode publik, dan sebagian kode publik punya lisensi yang mewajibkan atribusi atau melarang pemakaian komersial. Saat AI menghasilkan blok panjang yang terasa 'terlalu rapi dan spesifik', ada kemungkinan itu hafalan dari repositori tertentu. Kebiasaan aman: untuk utilitas umum, pakai library yang sudah jadi dependensi resmi proyek — jelas lisensinya, terawat, dan sudah teruji. Menyalin utilitas panjang ke dalam proyek justru menambah beban perawatan tanpa keuntungan.",
          example: {
            code: "// daripada menyalin 40 baris implementasi debounce dari AI:\nimport { debounce } from 'lodash';\n\nconst cari = debounce((kata) => kirimPencarian(kata), 300);",
            output: "Fungsi cari hanya dijalankan 300 ms setelah pengguna berhenti mengetik.",
              note: "Catatan jujur: potongan ini tidak dijalankan di panel preview — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
        },
          instruction:
            "AI menempelkan 40 baris implementasi `debounce` yang mencurigakan miripnya dengan sebuah library. Ganti dengan pemakaian library `lodash` yang sudah ada di proyek: impor `debounce` dari `lodash`, lalu buat `const cariProduk` yang men-debounce `kirimPencarian` selama 300 ms.",
          starterCode: "// Ganti salinan panjang dari AI dengan pemakaian library\n",
          language: "text",
          tests: [
            {
              pattern: "import\\s*\\{\\s*debounce\\s*\\}\\s*from\\s*['\"]lodash['\"]|require\\(['\"]lodash['\"]\\)",
              message:
                "Impor debounce dari lodash.",
            },
            {
              pattern: "const\\s+cariProduk\\s*=\\s*debounce\\(",
              message:
                "Buat const cariProduk memakai debounce().",
            },
            {
              pattern: "300",
              message:
                "Beri jeda 300 ms.",
            },
          ],
          solution: "import { debounce } from 'lodash';\n\nconst cariProduk = debounce((kata) => kirimPencarian(kata), 300);",
        },
        {
          kind: "step",
          id: "ai-4-5",
          title: "Latihan Audit: Menemukan Bug di Kode AI",
          explanation:
            "Cara tercepat menjadi reviewer yang tajam adalah berlatih pada kode yang memang mengandung bug. Fungsi pembagian adalah contoh klasik: AI menuliskannya benar secara matematis, tapi lupa bahwa penyebut bisa bernilai nol — dan di JavaScript hasilnya bukan error melainkan `Infinity`, yang lalu menyebar diam-diam ke seluruh perhitungan. Pola yang perlu kamu tanam: setiap masukan dari luar diperiksa dulu sebelum dipakai, dan kegagalan sebaiknya berisik (melempar error) daripada senyap.",
          example: {
            code: "console.log(10 / 0);\nconsole.log(Number.isFinite(10 / 0));",
            output: "Infinity\nfalse",
          },
          instruction:
            "Lengkapi fungsi `bagi(a, b)` di editor agar aman: kalau `b` bernilai 0, lemparkan error baru bertuliskan `'Pembagi tidak boleh nol'`; selain itu kembalikan hasil pembagiannya.",
          starterCode: "// Kode hasil AI — tambahkan penjagaannya\nfunction bagi(a, b) {\n  return a / b;\n}\n",
          language: "js",
          tests: [
            {
              pattern: "if\\s*\\(\\s*!b|b\\s*===?\\s*0\\s*\\)",
              message:
                "Periksa dulu apakah b bernilai 0.",
            },
            {
              pattern: "throw\\s+new\\s+Error\\(\\s*['\"]Pembagi tidak boleh nol['\"]",
              message:
                "Lemparkan Error dengan pesan 'Pembagi tidak boleh nol'.",
            },
            {
              pattern: "return\\s+a\\s*/\\s*b",
              message:
                "Tetap kembalikan a / b untuk kasus normal.",
            },
          ],
          solution: "function bagi(a, b) {\n  if (b === 0) throw new Error('Pembagi tidak boleh nol');\n  return a / b;\n}\n\nconsole.log(bagi(10, 2));",
        },
        {
          kind: "step",
          id: "ai-4-6",
          title: "Kamu yang Menekan Commit, Kamu yang Bertanggung Jawab",
          explanation:
            "Di tim mana pun, nama yang tercatat pada commit adalah namamu — bukan nama modelnya. Kalau kode itu merusak produksi, pertanyaannya bukan 'AI-nya salah ya?' melainkan 'kenapa lolos review-mu?'. Karena itu biasakan menulis deskripsi Pull Request yang menyatakan apa yang kamu ubah, bagaimana kamu mengujinya, dan risiko yang kamu sadari. Kebiasaan ini melindungi timmu sekaligus menunjukkan kematangan yang dicari saat penilaian kinerja.",
          example: {
            code: "## Perubahan\nMenambah validasi kupon kedaluwarsa.\n\n## Pengujian\nDiuji manual dengan kupon aktif, kupon lewat tanggal, dan tanpa kupon.\n\n## Risiko\nKupon lama yang masih beredar akan ditolak — sudah dikonfirmasi ke tim marketing.",
            output: "Reviewer tahu persis apa yang diuji dan apa yang bisa berdampak ke pengguna.",
          },
          instruction:
            "Kamu memakai AI untuk menulis fungsi perhitungan pajak, dan kamu sudah memeriksanya. Tulis deskripsi Pull Request yang memuat tiga bagian: apa yang **diubah**, bagaimana kamu **menguji**, dan **risiko** yang kamu sadari.",
          starterCode: "# Tulis deskripsi Pull Request di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(perubahan|diubah|menambah|mengubah)",
              flags: "i",
              message:
                "Jelaskan apa yang kamu ubah.",
            },
            {
              pattern: "(uji|test|diuji|pengujian)",
              flags: "i",
              message:
                "Jelaskan bagaimana kamu mengujinya.",
            },
            {
              pattern: "(risiko|dampak|perhatian|catatan)",
              flags: "i",
              message:
                "Sebutkan risiko atau dampak yang kamu sadari.",
            },
          ],
          solution: "## Perubahan\nMenambah fungsi hitungPajak(total) dengan tarif PPN 11 persen.\n\n## Pengujian\nDiuji dengan total 0, total kecil, dan total besar; hasilnya dibandingkan manual dengan kalkulator.\n\n## Risiko\nTarif ditulis sebagai konstanta. Kalau tarif berubah, satu baris ini harus diperbarui.",
        },
        {
          kind: "quiz",
          id: "ai-4-kuis",
          title: "Kuis: Review Kode Hasil AI",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Siapa yang bertanggung jawab penuh secara profesional jika terjadi insiden crash di produksi akibat bug pada kode buatan AI?",
              choices: [
                "Software Engineer yang menyetujui dan melakukan commit kode tersebut",
                "Perusahaan pembuat AI",
                "Server internet",
                "Tidak ada yang bertanggung jawab",
              ],
              answerIndex: 0,
              explanation: "Pengembang yang menandatangani dan mempublikasikan commit memegang tanggung jawab penuh atas integritas kode produksi.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa salah satu bug yang paling umum ditemui pada kode buatan AI?",
              choices: ["Selalu menggunakan variabel dengan nama dalam bahasa Indonesia", "Lupa menangani nilai null/undefined (edge cases)", "Mengubah warna tema terminal", "Membuat font menjadi lebih besar"],
              answerIndex: 1,
              explanation: "AI sering menghasilkan 'happy path' code dan mengabaikan pengecekan null atau error handling yang proper.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa berbahaya jika kita langsung menyalin kode AI yang memuat kredensial atau API Key?",
              choices: ["Kode tersebut mungkin akan kadaluarsa besok", "Bisa menyebabkan rahasia perusahaan bocor atau digunakan oleh pihak tak bertanggung jawab", "Membuat ukuran file membesar", "AI akan meminta bayaran ekstra"],
              answerIndex: 1,
              explanation: "API key hardcoded yang didapat dari atau dibagikan ke sistem publik berpotensi tinggi memicu pelanggaran keamanan dan kerugian finansial.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Mengapa kode buatan AI sering kali gagal menangani nilai null atau undefined?",
              choices: ["AI memang diprogram untuk benci nilai null", "AI cenderung menghasilkan kode jalur bahagia (happy path) dan melupakan kondisi ekstrem", "Bahasa pemrograman tidak mendukung null", "Nilai null selalu menyebabkan komputer rusak"],
              answerIndex: 1,
              explanation: "Karena dilatih untuk mencari solusi yang paling umum, AI sering menulis kode yang berasumsi input selalu valid (happy path) tanpa error handling.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Apa risiko hukum terbesar jika kita langsung menyalin algoritma kompleks yang dihasilkan oleh AI tanpa memeriksanya?",
              choices: ["Menurunkan performa komputer perusahaan", "AI akan meminta bagian saham dari perusahaan", "Kode tersebut mungkin menjiplak lisensi hak cipta dari repository open source yang membatasi penggunaan komersial", "Ukuran font kode akan berubah menjadi tidak standar"],
              answerIndex: 2,
              explanation: "Beberapa kode mungkin dihasilkan dari dataset berlisensi (seperti GPL) yang mengharuskan kodemu ikut bersifat open source, sehingga membahayakan rahasia dagang.",
            },
          ],
        },
      ],
    },
    {
      slug: "debug-refactor-ai",
      title: "Debugging & Refactoring dengan AI",
      description:
        "Use case dengan ROI tertinggi — jika kamu tahu caranya.",
      topics: [
        "Memberi error + konteks minimal yang reproducible",
        "AI sebagai rubber duck yang membalas",
        "Refactoring terarah: satu tujuan per permintaan",
        "Memahami codebase asing dengan bantuan AI",
        "Migrasi versi/framework dengan AI + verifikasi",
        "Kapan berhenti: tanda kamu di lubang kelinci AI",
      ],
      items: [
        {
          kind: "materi",
          id: "ai-5-m1",
          title: "Strategi Debugging dan Refactoring dengan AI",
          body:
            "# Pengertian\n\n" +
            "Debugging dan refactoring adalah dua aktivitas pengembangan lunak yang menyedot waktu terbanyak. Menggunakan AI untuk kedua tugas ini memberikan **ROI (*Return on Investment*) tertinggi**, asalkan kamu menggunakannya dengan pendekatan terstruktur.\n\n" +
            "Kesalahan terbesar pemula adalah menempelkan seluruh file 2.000 baris lalu berkata *'perbaiki bug-nya'*. AI akan kewalahan oleh *noise* dan memberikan solusi acak yang justru menambah masalah baru.\n\n" +
            "## Metode Minimal Reproducible Snippet\n\n" +
            "Saat meminta AI mendebug error, selalu isolasi masalah menjadi potongan kode terkecil (*minimal reproducible snippet*):\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|              FORMAT DEBUGGING MINIMAL YANG EFEKTIF                      |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| 1. Potongan Kode Terkecil (10-20 baris yang memicu error)              |\n" +
            "| 2. Pesan Error Asli Terminal (Traceback utuh tanpa dipotong)            |\n" +
            "| 3. Ekspektasi vs Realita (\"Hasilnya NaN, seharusnya angka 15000\")       |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## AI sebagai 'Interactive Rubber Duck'\n\n" +
            "Dalam dunia pemrograman, *Rubber Duck Debugging* adalah teknik menjelaskan masalah baris demi baris kepada bebek karet di meja kerja. Dengan AI, bebek karet tersebut bisa membalas!\n\n" +
            "Tuliskan dugaanmu, apa yang sudah kamu coba, dan bagian mana yang belum kamu periksa. AI akan menunjuk asumsi yang salah tanpa perlu meminta AI menuliskan kodenya.\n\n" +
            "## Tanda Kamu Terjebak di 'AI Rabbit Hole'\n\n" +
            "| Indikator | Tanda Bahaya | Tindakan Pemulihan |\n" +
            "|---|---|---|\n" +
            "| **Iterasi > 4x** | AI terus menerus melempar error baru di setiap balasan | Hentikan percakapan! Reset file dengan `git restore .`. |\n" +
            "| **Kode Makin Pembengkakan** | Kode 10 baris membengkak jadi 80 baris dengan `try/catch` bertingkat | Kembalilah ke kondisi bersih terakhir dan buat langkah lebih kecil. |\n" +
            "| **Loss of Control** | Kamu tidak bisa lagi menjelaskan baris kode yang disarankannya | Jangan commit kode yang tidak kamu pahami! |\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> **Jebakan Refactoring Serabutan:** Meminta AI 'rapikan kode ini' tanpa batasan. AI akan mengganti nama variabel, mengubah struktur `async/await`, dan mengedit gaya penulisan sekaligus. **Refactoring yang aman selalu memiliki 1 tujuan per permintaan** (misal: hanya konversi callback ke async/await).\n\n" +
            "## Kapan Dipakai di Dunia Kerja\n\n" +
            "> **Dunia Kerja:** Saat harus berhadapan dengan *legacy codebase* (kode lama tanpa dokumentasi), pengembang senior menggunakan AI untuk membedah alur data dan membuat ringkasan titik masuk (*entry point*) aplikasi sebelum mulai menyentuh kode.",
        },
        {
          kind: "step",
          id: "ai-5-1",
          title: "Reproducible Example: Potongan Terkecil yang Masih Error",
          explanation:
            "Menempelkan seluruh file ke chat membuat AI sibuk menebak bagian mana yang penting. Yang jauh lebih efektif adalah minimal reproducible example: potongan terkecil yang masih memunculkan error, lengkap dengan pesan error dan versi yang kamu pakai. Proses menyusutkan kode ini punya efek samping yang menyenangkan — sekitar separuh kasus terpecahkan sebelum kamu sempat bertanya, karena kamu menemukan sendiri baris penyebabnya. Ini juga etika standar saat melapor bug ke repositori open source.",
          example: {
            code: "Node 20, tanpa framework. Potongan terkecil yang masih error:\n\nconst data = JSON.parse('{ nama: \"Bimo\" }');\n\nError: SyntaxError: Expected property name or '}' in JSON at position 2\nYang saya harapkan: objek dengan properti nama.",
            output: "AI langsung menunjuk penyebabnya: kunci JSON wajib memakai tanda kutip ganda.",
              note: "Catatan jujur: potongan ini tidak dijalankan di panel preview — yang diperiksa adalah kode yang kamu tulis, dan tesnya tetap bisa lulus."
        },
          instruction:
            "Kamu menemukan bug pada perhitungan total keranjang. Tulis laporan minimal reproducible example yang memuat: **potongan kode kecil** penyebabnya, **pesan error atau hasil yang salah**, dan **hasil yang kamu harapkan**.",
          starterCode: "# Tulis laporan minimal reproducible example di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(const|function|let|=>)",
              message:
                "Sertakan potongan kode kecil yang memunculkan bug-nya.",
            },
            {
              pattern: "(error|hasil|keluar|muncul|NaN|undefined)",
              flags: "i",
              message:
                "Sebutkan pesan error atau hasil keliru yang muncul.",
            },
            {
              pattern: "(harap|seharusnya|diinginkan|ekspektasi|semestinya)",
              flags: "i",
              message:
                "Sebutkan hasil yang seharusnya.",
            },
          ],
          solution: "Node 20. Potongan terkecil yang masih bermasalah:\n\nconst items = [{ harga: '10000' }, { harga: '5000' }];\nconst total = items.reduce((a, b) => a + b.harga, 0);\n\nHasil yang muncul: '0100005000' (string tersambung).\nSeharusnya: 15000 sebagai angka.",
        },
        {
          kind: "step",
          id: "ai-5-2",
          title: "AI sebagai Rubber Duck yang Menjawab",
          explanation:
            "Teknik rubber ducking klasik: kamu menjelaskan masalahmu kalimat per kalimat ke bebek karet, dan sering kali jawabannya muncul di tengah penjelasan. AI membuat teknik ini lebih tajam karena ia bisa menantang balik asumsimu. Kuncinya adalah menulis dugaan dan hal yang sudah kamu coba, bukan menyerahkan masalah mentah-mentah. Kebiasaan menyusun dugaan juga melatihmu berpikir sistematis: menyempitkan kemungkinan satu per satu, bukan mengubah kode secara acak sampai kebetulan jalan.",
          example: {
            code: "Dugaan saya: state tidak ter-update karena objeknya dimutasi langsung.\nSudah saya coba: menambah console.log sebelum setState — nilainya benar di situ.\nYang belum saya cek: apakah komponen ini memang re-render.\nMenurutmu bagian mana yang paling mungkin?",
            output: "AI menyoroti satu kemungkinan yang belum diperiksa, bukan mengulang saran umum.",
          },
          instruction:
            "Fitur pencarianmu tidak menampilkan hasil apa pun. Tulis catatan rubber duck yang memuat: **dugaanmu**, **apa yang sudah kamu coba**, dan **bagian yang belum kamu periksa**.",
          starterCode: "# Tulis catatan rubber duck-mu di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(dugaan|kemungkinan|menurut saya|curiga)",
              flags: "i",
              message:
                "Tulis dugaanmu tentang penyebabnya.",
            },
            {
              pattern: "(sudah saya coba|sudah dicoba|saya sudah)",
              flags: "i",
              message:
                "Tulis apa yang sudah kamu coba.",
            },
            {
              pattern: "(belum|belum saya|belum dicek|belum diperiksa)",
              flags: "i",
              message:
                "Tulis bagian yang belum kamu periksa.",
            },
          ],
          solution: "Dugaan saya: query dikirim sebelum state kata kunci sempat diperbarui.\nSudah saya coba: mencetak kata kunci di dalam handler, isinya selalu tertinggal satu ketikan.\nBelum saya periksa: apakah pemanggilan API sebaiknya dipindah ke useEffect dengan dependensi kata kunci.",
        },
        {
          kind: "step",
          id: "ai-5-3",
          title: "Refactoring Terarah: Satu Tujuan per Permintaan",
          explanation:
            "Meminta AI 'rapikan kode ini' menghasilkan perubahan serabutan: nama variabel berubah, struktur bergeser, dan kamu tidak lagi bisa membedakan mana perbaikan mana kerusakan. Refactoring yang bisa direview selalu punya satu tujuan yang jelas — misalnya mengubah callback bertingkat menjadi async/await, tanpa menyentuh hal lain. Dengan satu tujuan, diff-nya kecil, mudah diuji, dan mudah dibatalkan kalau ternyata salah. Prinsip ini berlaku juga saat kamu refactor tanpa AI.",
          example: {
            code:
              "// sebelum: callback bertingkat\n" +
              "ambilUser(7, (user) => {\n" +
              "  ambilPesanan(user.id, (pesanan) => {\n" +
              "    console.log(pesanan.length + ' pesanan untuk ' + user.nama);\n" +
              "  });\n" +
              "});",
            output:
              "3 pesanan untuk Ana\n\n" +
              "// dan kalau ambilPesanan gagal, tanpa penanganan error:\n" +
              "TypeError: Cannot read properties of undefined (reading 'length')",
            note: "Dua tingkat callback masih terbaca. Masalahnya muncul saat error harus ditangani: setiap tingkat butuh cabangnya sendiri, dan itulah yang membuat versi async/await lebih pendek — satu blok try/catch untuk seluruh alur.",
          },
          instruction:
            "Ubah fungsi callback di editor menjadi versi `async/await`: buat `async function tampilkanPesanan(id)` yang meng-`await` `ambilUser(id)` lalu `ambilPesanan(user.id)`, dan cetak hasilnya. Jangan mengubah nama fungsi yang dipanggil.",
          starterCode: "// versi lama (callback)\n// ambilUser(id, (user) => ambilPesanan(user.id, (p) => console.log(p)));\n\n// Tulis versi async/await di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "(async\\s+function\\s+tampilkanPesanan|const\\s+tampilkanPesanan\\s*=\\s*async)",
              message:
                "Buat async function atau arrow function tampilkanPesanan.",
            },
            {
              pattern: "await\\s+ambilUser\\(\\s*id\\s*\\)",
              message:
                "Pakai await saat memanggil ambilUser(id).",
            },
            {
              pattern: "await\\s+ambilPesanan\\(",
              message:
                "Pakai await saat memanggil ambilPesanan(...).",
            },
            {
              pattern: "console\\.log\\(",
              message:
                "Cetak hasil pesanannya.",
            },
          ],
          solution: "async function tampilkanPesanan(id) {\n  const user = await ambilUser(id);\n  const pesanan = await ambilPesanan(user.id);\n  console.log(pesanan);\n}",
        },
        {
          kind: "step",
          id: "ai-5-4",
          title: "Memahami Codebase Asing dengan Bantuan AI",
          explanation:
            "Hari pertama di proyek baru selalu terasa seperti masuk kota asing tanpa peta. AI mempercepat orientasi kalau kamu bertanya secara terstruktur: mana titik masuk aplikasinya, ke mana data mengalir, dan file mana yang paling sering disentuh untuk fitur tertentu. Yang tidak boleh kamu lakukan adalah menelan jawabannya bulat-bulat — verifikasi dengan membuka file yang disebut. Anggap AI sebagai rekan yang sudah membaca sekilas, bukan sebagai dokumentasi resmi.",
          example: {
            code: "Saya baru di repo ini. Berdasarkan struktur folder yang saya tempel:\n1. Mana titik masuk aplikasinya?\n2. Ke mana alur data dari form pendaftaran?\n3. File mana yang harus saya buka untuk mengubah aturan validasi?",
            output: "AI menyebut src/main.tsx sebagai titik masuk dan menunjuk dua file yang perlu dibuka lebih dulu.",
          },
          instruction:
            "Kamu ditugaskan mengubah alur checkout di codebase yang belum pernah kamu buka. Tulis prompt orientasi yang menanyakan **titik masuk**, **alur data**, dan **file yang perlu diubah** untuk tugas itu.",
          starterCode: "# Tulis prompt orientasi codebase di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(titik masuk|entry point|mulai dari mana|file utama)",
              flags: "i",
              message:
                "Tanyakan titik masuk aplikasinya.",
            },
            {
              pattern: "(alur|flow|mengalir|dari mana ke mana)",
              flags: "i",
              message:
                "Tanyakan alur datanya.",
            },
            {
              pattern: "(file|berkas|folder)",
              flags: "i",
              message:
                "Tanyakan file mana yang perlu kamu buka atau ubah.",
            },
          ],
          solution: "Saya baru di codebase ini dan harus mengubah alur checkout.\n1. Mana titik masuk aplikasinya?\n2. Bagaimana alur data dari tombol Bayar sampai pesanan tersimpan?\n3. File mana saja yang perlu saya buka untuk menambah metode pembayaran baru?",
        },
        {
          kind: "step",
          id: "ai-5-5",
          title: "Migrasi Versi dengan AI, Verifikasi oleh Kamu",
          explanation:
            "Migrasi antarversi framework adalah pekerjaan yang polanya jelas, jadi AI cukup membantu — tapi ia juga rawan mencampur sintaks lama dan baru karena keduanya ada di data latihannya. Contoh klasik di React: `componentDidMount` pada class component digantikan `useEffect` dengan array dependensi kosong pada function component. Setelah migrasi, wajib kamu verifikasi sendiri: jalankan aplikasinya, jalankan test, dan periksa perilaku yang bergantung pada siklus hidup komponen. Kode yang 'kelihatannya sudah modern' belum tentu berperilaku sama.",
          example: {
            code: "// pola lama (class component)\n// componentDidMount() { muatData(); }\n\n// pola baru (function component)\nuseEffect(() => {\n  muatData();\n}, []);",
            output: "Efek dijalankan sekali setelah render pertama, sama seperti componentDidMount.",
          },
          instruction:
            "Migrasikan potongan class component di editor: tulis pemanggilan `useEffect` yang menjalankan `muatData()` sekali saja setelah render pertama (perhatikan array dependensinya).",
          starterCode: "// componentDidMount() {\n//   muatData();\n// }\n\n// Tulis padanannya dengan useEffect di bawah ini\n",
          language: "jsx",
          tests: [
            {
              pattern: "useEffect\\(\\s*\\(\\s*\\)\\s*=>",
              message:
                "Panggil useEffect dengan fungsi arrow.",
            },
            {
              pattern: "muatData\\(\\s*\\)",
              message:
                "Jalankan muatData() di dalam efek.",
            },
            {
              pattern: "\\}\\s*,\\s*\\[\\s*\\]\\s*\\)",
              message:
                "Beri array dependensi kosong agar hanya berjalan sekali.",
            },
          ],
          solution: "useEffect(() => {\n  muatData();\n}, []);",
        },
        {
          kind: "step",
          id: "ai-5-6",
          title: "Tanda Kamu Sudah Masuk Lubang Kelinci",
          explanation:
            "Ada titik di mana meminta perbaikan berikutnya justru memperburuk keadaan: sudah lebih dari tiga putaran tanpa kemajuan, kodenya makin panjang, dan kamu tidak lagi bisa menjelaskan apa yang berubah. Itu tanda untuk berhenti, membuang perubahan lokal, dan kembali ke kondisi bersih terakhir. Membuang satu jam pekerjaan yang membingungkan lebih murah daripada mempertahankan kode yang tidak kamu pahami. Setelah bersih, kerjakan ulang dengan langkah yang jauh lebih kecil — dan kali ini commit setiap kali satu bagian berhasil.",
          example: {
            code: "git status\ngit stash",
            output: "On branch main\nChanges not staged for commit:\n  modified:   src/checkout.js\nSaved working directory and index state WIP on main",
          },
          instruction:
            "Setelah lima putaran tanpa kemajuan, kamu memutuskan kembali ke kondisi bersih. Tulis perintah Git yang membuang seluruh perubahan lokal yang belum di-commit pada direktori kerja saat ini.",
          starterCode: "# Tulis perintah Git di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+(checkout\\s+(\\S+\\s+)?\\.|restore\\s+\\.|reset\\s+--hard)",
              message:
                "Pakai git restore . (atau git checkout .) untuk membuang perubahan lokal.",
            },
          ],
          solution: "git restore .",
        },
        {
          kind: "quiz",
          id: "ai-5-kuis",
          title: "Kuis: Debugging & Refactoring",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Apa tindakan terbaik jika perbaikan bug bersama AI justru membuat kode semakin rumit dan menimbulkan error baru bertubi-tubi (Rabbit Hole)?",
              choices: [
                "Terus melanjutkan prompt tanpa henti",
                "Lakukan `git restore .` untuk mereset kode ke kondisi bersih, lalu atur ulang pendekatan secara manual",
                "Menghapus seluruh folder proyek",
                "Menjual komputer",
              ],
              answerIndex: 1,
              explanation: "Mereset kode ke kondisi awal yang stabil (git restore .) mencegah penumpukan kesalahan saat AI terjebak dalam alur pemecahan masalah yang salah.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Bagaimana cara terbaik memberikan konteks kepada AI saat melakukan debugging?",
              choices: ["Kirim seluruh proyek (ribuan baris) sekaligus", "Beri potongan kode minimal (reproducible snippet) dan pesan error yang spesifik", "Cukup berikan pesan error saja tanpa kode", "Kirim screenshot kode dari HP"],
              answerIndex: 1,
              explanation: "Memberikan reproducible snippet mengurangi noise, sehingga AI bisa fokus pada akar masalah dengan jauh lebih akurat.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa prinsip penting saat melakukan refactoring kode menggunakan bantuan AI?",
              choices: ["Minta AI merombak seluruh sistem dalam satu kali request", "Fokus pada satu tujuan spesifik saja per permintaan (misal: ekstrak fungsi atau ubah ke async/await)", "Jangan pernah mereview hasil refactoring", "AI selalu tahu cara terbaik merombak kode"],
              answerIndex: 1,
              explanation: "Refactoring bertahap (incremental) jauh lebih aman, meminimalisir bug baru, dan memudahkan manusia untuk meninjau perubahan per tahap.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa analogi yang tepat saat menggunakan AI untuk menceritakan masalah logika dan mencari asumsi yang salah?",
              choices: ["Interactive Rubber Duck", "Black Box Testing", "Pair Programming", "Brute Force Attack"],
              answerIndex: 0,
              explanation: "Seperti Rubber Duck Debugging, menjelaskan masalah kepada AI sering kali membantu kita sendiri menemukan letak kesalahannya, ditambah respons kritis dari AI.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Bagaimana AI dapat membantu saat kita harus berhadapan dengan codebase legacy (kode lawas) yang asing?",
              choices: ["Menghapus kode lawas tersebut tanpa perlu dibaca", "Memberikan penjelasan tingkat tinggi mengenai arsitektur dan alur data dari kode tersebut", "Mengubah bahasa kode menjadi bahasa Latin", "Mematikan server produksi jika kodenya buruk"],
              answerIndex: 1,
              explanation: "AI dapat membaca file panjang dan merangkum tujuan, input, dan output fungsinya, sehingga mempercepat proses orientasi pada sistem baru.",
            },
          ],
        },
      ],
    },
    {
      slug: "etika-karier",
      title: "Etika & Karier di Era AI",
      description:
        "Jujur tentang AI di kerjaan & tetap bertumbuh sebagai engineer.",
      topics: [
        "Kebijakan perusahaan: kode rahasia & tool eksternal",
        "AI di technical interview: aturan yang berlaku",
        "Skill yang justru makin bernilai (arsitektur, review, komunikasi)",
        "Belajar dengan AI tanpa jadi tergantung: aturan 'coba dulu'",
        "Portofolio di era AI: proses > hasil akhir",
      ],
      items: [
        {
          kind: "materi",
          id: "ai-6-m1",
          title: "Etika, Kerahasiaan Data, dan Pengembangan Karier",
          body:
            "# Pengertian\n\n" +
            "Penggunaan AI di tempat kerja bukan hanya tentang efisiensi teknis, tetapi juga melibatkan **tanggung jawab etis, privasi data, dan strategi karier jangka panjang**.\n\n" +
            "Seiring menjamurnya alat bantu AI, batas antara penggunaan yang profesional dan pelanggaran kerahasiaan menjadi sangat tipis jika kamu tidak memahaminya.\n\n" +
            "## Kebijakan Kerahasiaan Kode & Kebocoran Data\n\n" +
            "Banyak perusahaan memiliki kebijakan ketat yang melarang pengunggahan *source code* internal, data identitas pelanggan (*Personally Identifiable Information / PII*), atau kunci akses ke model AI publik.\n\n" +
            "```text\n" +
            "+-------------------------------------------------------------------------+\n" +
            "|                     PANDUAN ETIKA PENULISAN PROMPT                      |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "| ❌ DILARANG SAMBUNG: const dbPass = \"BankXYZ_Secret_2026!\";             |\n" +
            "| ✅ WAJIB DIANONIMKAN: const dbPass = process.env.DB_PASSWORD;           |\n" +
            "| ❌ DILARANG SAMBUNG: \"email: budi.santoso@perusahaan-x.co.id\"           |\n" +
            "| ✅ WAJIB DIANONIMKAN: \"email: user@example.com\"                        |\n" +
            "+-------------------------------------------------------------------------+\n" +
            "```\n\n" +
            "## Skill Manusia yang Naik Nilainya di Era AI\n\n" +
            "Saat pembuatan baris kode sederhana menjadi komoditas murah yang dihasilkan AI dalam hitungan detik, keterampilan manusiawi berikut ini justru mengalami lonjakan nilai pasar:\n\n" +
            "| Skill Manusia | Alasan Mengapa Tetap Mahal & Tidak Tergantikan |\n" +
            "|---|---|\n" +
            "| **System Architecture** | Menghubungkan antar-layanan kompleks dan mempertimbangkan trade-off skala. |\n" +
            "| **Code Review & Auditing** | Menemukan celah keamanan dan *edge cases* yang terlewat oleh AI. |\n" +
            "| **Domain Knowledge & Bisnis**| Memahami kebutuhan unik pengguna dan tujuan komersial perusahaan. |\n" +
            "| **Empathetic Communication** | Berkomunikasi dengan *stakeholder* non-teknis dan menyelaraskan tim. |\n\n" +
            "## Aturan 'Coba Dulu 15 Menit'\n\n" +
            "Agar kemampuan pemecahan masalahmu (*problem-solving*) tidak tumpul karena ketergantungan instan pada AI, terapkan aturan **'Coba Dulu 15 Menit'**:\n\n" +
            "> **Aturan 15 Menit:** Saat menghadapi bug baru, luangkan waktu 15 menit untuk menganalisis kode, menambahkan `console.log`, dan merumuskan hipotesis secara mandiri. Baru setelah 15 menit tidak ada titik terang, gunakan AI untuk memverifikasi dugaanmu.\n\n" +
            "## Jebakan & Kesalahan Umum\n\n" +
            "> **Jebakan Sesi Live Coding:** Menggunakan AI secara diam-diam saat sesi *technical interview* online. Penguji dapat dengan mudah mengenali respon hafalan AI atau gerakan mata kandidat. Jika AI diizinkan, jelaskan alur berpikirmu secara transparan saat berinteraksi dengan AI!\n\n" +
            "## Kapan Dipakai di Dunia Kerja\n\n" +
            "> **Dunia Kerja:** Dalam membuat portofolio proyek modern, perekrut senior tidak lagi terkesan oleh jumlah proyek yang kamu selesaikan. Mereka mencari **Architecture Decision Records (ADR)** — tulisan singkat yang menjelaskan *alasan* kamu memilih suatu teknologi dan *trade-off* yang kamu ambil.",
        },
        {
          kind: "step",
          id: "ai-6-1",
          title: "Kode Rahasia Perusahaan dan LLM Publik",
          explanation:
            "Banyak perusahaan melarang menempelkan kode internal, data pelanggan, atau kredensial ke layanan AI publik — dan pelanggarannya bisa berujung sanksi serius, bukan sekadar teguran. Bahkan tanpa larangan resmi, menempelkan data asli pelanggan tetap tidak pantas secara etika. Kebiasaan yang aman: bersihkan potongan kode sebelum dikirim — ganti kunci, nama pelanggan, dan endpoint internal dengan nilai contoh. Kalau setelah dibersihkan masalahnya tidak lagi bisa dijelaskan, itu tanda kamu memang harus bertanya ke rekan kerja, bukan ke AI.",
          example: {
            code: "// sebelum dikirim ke AI\n// const key = 'sk-live-2291-produksi';\n// const email = 'siti.rahayu@bankxyz.co.id';\n\n// versi bersih\nconst key = process.env.API_KEY;\nconst email = 'user@example.com';",
            output: "Potongan kode tetap menggambarkan masalahnya, tanpa membawa data asli.",
          },
          instruction:
            "Bersihkan potongan kode di editor sebelum kamu tempel ke chat AI: ganti nilai kunci agar dibaca dari `process.env`, dan ganti email pelanggan asli menjadi `user@example.com`.",
          starterCode: "const key = 'sk-live-2291-produksi';\nconst email = 'siti.rahayu@bankxyz.co.id';\nkirimLaporan(key, email);\n",
          language: "text",
          tests: [
            {
              pattern: "process\\.env\\.\\w+",
              message:
                "Ganti kunci asli dengan process.env.API_KEY.",
            },
            {
              pattern: "user@example\\.com",
              message:
                "Ganti email pelanggan dengan user@example.com.",
            },
            {
              pattern: "sk-live-2291-produksi",
              mustNotMatch: true,
              message:
                "Hapus kunci produksi dari potongan yang akan kamu kirim.",
            },
            {
              pattern: "siti\\.rahayu@bankxyz\\.co\\.id",
              mustNotMatch: true,
              message:
                "Hapus data pelanggan asli.",
            },
          ],
          solution: "const key = process.env.API_KEY;\nconst email = 'user@example.com';\nkirimLaporan(key, email);",
        },
        {
          kind: "step",
          id: "ai-6-2",
          title: "AI di Technical Interview: Aturannya Berbeda-beda",
          explanation:
            "Sebagian perusahaan mempersilakan AI saat tes teknis karena itu mencerminkan pekerjaan sehari-hari; sebagian lain melarang total karena yang ingin mereka lihat adalah cara berpikirmu. Yang berlaku universal: tanyakan aturannya di awal, dan jangan pernah memakai AI diam-diam saat dilarang. Kalau diizinkan, tunjukkan proses berpikirmu dengan suara — sebutkan alasan memilih pendekatan, apa yang kamu minta ke AI, dan bagaimana kamu memverifikasi hasilnya. Kandidat yang lolos biasanya bukan yang tercepat, tapi yang paling jelas alasannya.",
          example: {
            code: "Sebelum mulai:\n\"Boleh saya memakai bantuan AI untuk bagian boilerplate?\nKalau tidak boleh, saya kerjakan manual — saya ikut aturan Anda.\"",
            output: "Pewawancara menjawab aturannya sejak awal, dan tidak ada kecurigaan di tengah sesi.",
          },
          instruction:
            "Kamu masuk sesi live coding dan belum tahu aturan pemakaian AI. Tulis kalimat pembuka yang kamu ucapkan: **tanyakan aturannya**, sebutkan **kesediaanmu mengikuti** aturan itu, dan tawarkan **menjelaskan proses berpikirmu** selama mengerjakan.",
          starterCode: "# Tulis kalimat pembukamu di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(boleh|apakah|aturan|izin)",
              flags: "i",
              message:
                "Tanyakan dulu aturan pemakaian AI di sesi ini.",
            },
            {
              pattern: "(ikut|mengikuti|patuh|sesuai aturan|tidak apa)",
              flags: "i",
              message:
                "Nyatakan kesediaanmu mengikuti aturan itu.",
            },
            {
              pattern: "(jelaskan|menjelaskan|berpikir|alasan)",
              flags: "i",
              message:
                "Tawarkan menjelaskan proses berpikirmu.",
            },
          ],
          solution: "Sebelum mulai, boleh saya tanya aturannya: apakah saya diizinkan memakai bantuan AI di sesi ini?\nApa pun aturannya saya ikuti.\nSaya akan menjelaskan proses berpikir saya sambil mengerjakan supaya Anda bisa melihat alasan tiap keputusan.",
        },
        {
          kind: "step",
          id: "ai-6-3",
          title: "Skill yang Justru Naik Nilainya",
          explanation:
            "Ketika menulis kode menjadi murah, yang mahal adalah memutuskan kode apa yang layak ditulis. Tiga kemampuan naik nilainya: merumuskan kebutuhan menjadi kriteria yang bisa diuji, meninjau pekerjaan orang lain (termasuk mesin), dan menjelaskan keputusan teknis kepada orang non-teknis. Ketiganya butuh konteks yang tidak dimiliki model: siapa penggunamu, apa risiko bisnisnya, dan apa yang sudah pernah gagal di tim ini. Melatihnya sederhana — biasakan menulis kriteria penerimaan sebelum menulis kode.",
          example: {
            code: "Fitur: lupa password\n- Pengguna memasukkan email terdaftar lalu menerima tautan reset maksimal 1 menit.\n- Tautan kedaluwarsa setelah 30 menit dan hanya bisa dipakai sekali.\n- Email tak terdaftar tetap menampilkan pesan sama (tidak membocorkan keberadaan akun).",
            output: "Kriteria ini bisa langsung diuji satu per satu dan tidak menyisakan tafsir ganda.",
          },
          instruction:
            "Tulis **tiga kriteria penerimaan** (satu per baris, diawali `- `) untuk fitur 'unggah foto profil'. Minimal satu kriteria harus menyebut batasan teknis (ukuran atau format file), dan satu lagi menyebut perilaku saat terjadi kegagalan.",
          starterCode: "# Tulis kriteria penerimaan di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "(^|\\n)\\s*-\\s+\\S+[\\s\\S]*(\\n)\\s*-\\s+\\S+[\\s\\S]*(\\n)\\s*-\\s+\\S+",
              message:
                "Tulis tiga kriteria, masing-masing satu baris diawali tanda -.",
            },
            {
              pattern: "(mb|kb|jpg|png|ukuran|format)",
              flags: "i",
              message:
                "Sebutkan batasan teknis seperti ukuran atau format file.",
            },
            {
              pattern: "(gagal|error|ditolak|kedaluwarsa|tidak valid)",
              flags: "i",
              message:
                "Sebutkan perilaku saat terjadi kegagalan.",
            },
          ],
          solution: "- Pengguna dapat mengunggah foto berformat JPG atau PNG berukuran maksimal 2 MB.\n- Foto yang berhasil diunggah langsung tampil di halaman profil tanpa perlu refresh.\n- Jika file ditolak, pesan error menyebut alasannya dan foto lama tetap dipakai.",
        },
        {
          kind: "step",
          id: "ai-6-4",
          title: "Aturan 'Coba Dulu' agar Tidak Tergantung",
          explanation:
            "Ketergantungan pada AI terbentuk pelan-pelan: setiap kali mentok, kamu bertanya sebelum sempat berpikir. Setelah beberapa bulan pekerjaan tetap selesai, tapi kemampuan menyelesaikan masalahmu sendiri tidak tumbuh — dan itu terlihat jelas saat interview atau saat internet tim mati. Aturan sederhana yang dipakai banyak orang: coba sendiri dulu 15 menit, tulis dugaanmu, baru bertanya. Latihan kecil yang kamu kerjakan sendiri hari ini adalah investasi untuk momen ketika tidak ada yang bisa kamu tanyai.",
          example: {
            code: "function huruf(kata) {\n  return kata[0].toUpperCase() + kata.slice(1);\n}\nconsole.log(huruf('kopi'));",
            output: "Kopi",
          },
          instruction:
            "Kerjakan sendiri tanpa bantuan: buat fungsi `kapitalisasi(kalimat)` yang mengubah huruf pertama **setiap kata** menjadi kapital, lalu cetak hasilnya untuk `'belajar coding itu seru'`.",
          starterCode: "// Kerjakan sendiri dulu, minimal 15 menit sebelum bertanya\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+kapitalisasi\\s*\\(|const\\s+kapitalisasi\\s*=",
              message:
                "Buat fungsi kapitalisasi(kalimat).",
            },
            {
              pattern: "split\\(",
              message:
                "Pecah kalimat menjadi kata-kata dengan split().",
            },
            {
              pattern: "toUpperCase\\(\\)",
              message:
                "Ubah huruf pertama tiap kata dengan toUpperCase().",
            },
            {
              pattern: "join\\(|reduce\\(",
              message:
                "Gabungkan kembali kata-katanya, misalnya dengan join(' ').",
            },
            {
              pattern: "console\\.log\\(",
              message:
                "Cetak hasilnya.",
            },
          ],
          solution: "function kapitalisasi(kalimat) {\n  return kalimat\n    .split(' ')\n    .map((kata) => kata[0].toUpperCase() + kata.slice(1))\n    .join(' ');\n}\n\nconsole.log(kapitalisasi('belajar coding itu seru'));",
        },
        {
          kind: "step",
          id: "ai-6-5",
          title: "Portofolio di Era AI: Proses Lebih Bernilai dari Hasil",
          explanation:
            "Ketika siapa pun bisa menghasilkan aplikasi yang tampak rapi, hasil akhir berhenti menjadi pembeda. Yang membedakan adalah jejak keputusanmu: kenapa memilih database ini, apa yang kamu tolak, dan apa yang kamu pelajari saat gagal. Cara termurah merekamnya adalah menulis catatan keputusan singkat di repositori — konteks, keputusan, dan konsekuensinya. Dokumen sependek lima baris ini sering jadi bahan obrolan paling menarik saat interview, jauh melebihi tangkapan layar aplikasimu.",
          example: {
            code: "## Konteks\nData pesanan saling terhubung dan butuh laporan gabungan.\n\n## Keputusan\nMemakai PostgreSQL, bukan MongoDB.\n\n## Konsekuensi\nSkema harus dirancang di awal; perubahan bentuk data butuh migration.",
            output: "Pembaca tahu alasan pilihanmu dan apa yang kamu korbankan.",
          },
          instruction:
            "Tulis catatan keputusan singkat untuk pilihan 'memakai Tailwind CSS di proyek portofoliomu'. Wajib memuat tiga bagian: **Konteks**, **Keputusan**, dan **Konsekuensi**.",
          starterCode: "# Tulis catatan keputusan di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "##?\\s*konteks|\\bkonteks\\s*:",
              flags: "i",
              message:
                "Sertakan bagian Konteks: situasi yang melatarbelakangi.",
            },
            {
              pattern: "##?\\s*keputusan|\\bkeputusan\\s*:",
              flags: "i",
              message:
                "Sertakan bagian Keputusan: apa yang kamu pilih.",
            },
            {
              pattern: "##?\\s*konsekuensi|\\bkonsekuensi\\s*:",
              flags: "i",
              message:
                "Sertakan bagian Konsekuensi: apa yang kamu korbankan.",
            },
          ],
          solution: "## Konteks\nSaya bekerja sendiri dan butuh UI konsisten tanpa memikirkan penamaan kelas.\n\n## Keputusan\nMemakai Tailwind CSS, bukan menulis CSS terpisah per komponen.\n\n## Konsekuensi\nMarkup jadi lebih panjang dan perlu waktu membiasakan diri, tapi tidak ada file CSS yang membengkak seiring proyek bertambah besar.",
        },
        {
          kind: "quiz",
          id: "ai-6-kuis",
          title: "Kuis: Etika & Karier di Era AI",
          questions: [
            {
              id: "q1",
              type: "pilihan-ganda",
              question: "Kemampuan Software Engineering apa yang justru nilainya semakin meningkat mahal di era maraknya alat bantu AI?",
              choices: [
                "Menghafal sintaks bahasa pemograman",
                "Arsitektur Sistem, Code Review, Pemahaman Domain Bisnis, dan Komunikasi",
                "Kecepatan mengetik di keyboard",
                "Menulis komentar di setiap baris",
              ],
              answerIndex: 1,
              explanation: "Saat sintaks dasar dapat dihasilkan AI, kemampuan merancang arsitektur yang tepat dan mengevaluasi kualitas kode menjadi diferensiasi utama.",
            },
            {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa disarankan untuk selalu mencoba memecahkan masalah sendiri selama 15 menit sebelum bertanya ke AI?",
              choices: ["Agar AI tidak kelelahan", "Membangun otot berpikir kritis dan mencegah ketergantungan penuh pada AI", "Karena AI butuh waktu 15 menit untuk boot up", "Untuk menghemat token API"],
              answerIndex: 1,
              explanation: "Berpikir mandiri (struggle) adalah bagian penting dari proses belajar. Ketergantungan instan akan menghambat perkembangan problem-solving mu.",
            },
            {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana seharusnya kamu menonjolkan penggunaan AI dalam portofolio proyekmu?",
              choices: ["Menyembunyikannya sepenuhnya", "Mengklaim bahwa 100% kodenya ditulis tanpa bantuan alat apapun", "Menjelaskan proses, keputusan engineering, dan trade-off di balik kode tersebut", "Hanya menampilkan screenshot kode yang dihasilkan AI"],
              answerIndex: 2,
              explanation: "Perekrut ingin melihat alur pemikiran, cara pengambilan keputusan, dan pemahamanmu terhadap sistem, bukan sekadar kemampuan men-generate kode.",
            },
            {
              id: "q4",
              type: "pilihan-ganda",
              question: "Apa kebijakan terpenting sebelum memasukkan source code perusahaan ke dalam layanan AI seperti ChatGPT?",
              choices: ["Menyembunyikan nama penulis asli", "Memastikan kebijakan perusahaan mengizinkan dan platform AI tersebut tidak menggunakan datamu untuk pelatihan ulang", "Mengubah nama variabel menjadi bahasa Indonesia", "Menggunakan mode gelap pada browser"],
              answerIndex: 1,
              explanation: "Kode perusahaan adalah aset rahasia. Memasukkannya ke platform publik tanpa perlindungan privasi dapat membocorkan rahasia dagang.",
            },
            {
              id: "q5",
              type: "pilihan-ganda",
              question: "Mengapa arsitektur sistem dan komunikasi empati menjadi jauh lebih mahal nilainya di era AI?",
              choices: ["Karena AI tidak bisa berbicara", "Karena kemampuan teknis mengetik sintaks telah menjadi komoditas murah yang mudah diotomatisasi", "Karena pengguna internet semakin sedikit", "Karena sekolah sudah tidak mengajarkan pemrograman"],
              answerIndex: 1,
              explanation: "AI dapat menulis kode dengan cepat, tetapi menghubungkan berbagai komponen sistem dan memahami kebutuhan manusia hanya bisa dilakukan oleh engineer handal.",
            },
          ],
        },
      ],
    },
  ],
};
