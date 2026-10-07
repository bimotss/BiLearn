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
            "# Pengertian\n\nAI-Assisted Development bukan berarti menyerahkan tugas menulis kode ke mesin dan duduk bersantai. Ini adalah **gaya kerja berpasangan (pair programming) dengan model AI**, di mana kamu bertindak sebagai *lead engineer* (pengambil keputusan arsitektur, penilai keamanan, dan pemilik tanggung jawab kode) dan AI bertindak sebagai asisten serba tahu yang mengetik sangat cepat.\n\nSebelum mulai memakai AI untuk membantu koding harianmu, kamu perlu memahami lanskap alat modern yang tersedia, cara memasangnya di lingkungan kerja (VS Code atau IDE khusus), dan bagaimana mengatur aturan agar AI tidak menghasilkan kode yang melenceng dari standar timmu.\n\n## Lanskap Tool AI Dev Modern\n\nSecara umum, alat AI untuk pengembangan perangkat lunak terbagi menjadi empat kategori utama:\n\n| Kategori | Contoh Tool | Karakteristik & Kegunaan Utama |\n|---|---|---|\n| **Inline Autocomplete** | GitHub Copilot, Continue, Codeium, Supermaven | Menyarankan baris/blok kode secara *real-time* (ghost text abu-abu) saat mengetik di editor. |\n| **IDE AI Terintegrasi** | Cursor, Antigravity, Windsurf | Editor turunan VS Code yang mengintegrasikan AI di tingkat repositori, arsitektur, dan multi-file edit. |\n| **Chat LLM Web & Reasoning** | Claude 3.7 Sonnet, ChatGPT o1/o3, Gemini 2.5 Pro | Tempat berdiskusi, merancang arsitektur, membedah error panjang, dan eksplorasi konsep baru. |\n| **CLI & Agent Tools** | AGY CLI, Aider, Claude Code, Cline | Menjalankan perintah multi-file dan instruksi terminal langsung secara otonom di repositori lokal. |\n\n```text\n+-------------------------------------------------------------------------+\n|                  LANSKAP ALAT AI DEVELOPMENT MODERN                     |\n+-------------------------------------------------------------------------+\n| Inline Autocomplete  ---> Mengetik cepat (baris per baris / ghost text) |\n| Chat LLM Web         ---> Diskusi & perancangan arsitektur sistem       |\n| AI Agent / Composer  ---> Perubahan otomatis multi-file & refactoring   |\n| Local Model (Ollama) ---> Kerja offline & privasi kode 100% aman       |\n| MCP Protocol Server  ---> Menghubungkan AI ke DB, Git, & Tool Internal  |\n+-------------------------------------------------------------------------+\n```\n\n## Model Context Protocol (MCP)\n\nSalah satu lompatan terbesar dalam AI tooling modern adalah **Model Context Protocol (MCP)**, protokol standar terbuka yang menghubungkan AI dengan ekosistem lokal developer:\n- **Sebelum MCP:** Kamu harus mengekspor skema database ke file teks, menyalin isi tabel, lalu menempelkannya manual ke chat AI.\n- **Dengan MCP:** Editor AI terhubung ke MCP Server lokal (misalnya Postgres MCP atau Git MCP). AI dapat langsung menjalankan query introspeksi skema database dev atau membaca commit log secara mandiri dan aman.\n\n## Navigasi Konteks & Simbol @ di Editor\n\nDi editor berbasis AI modern (seperti Cursor atau Windsurf), kamu tidak perlu menyalin-tempel isi berkas secara manual. Gunakan simbol penanda konteks (*context tagging*):\n- `@file:nama-file.ts` — Memberikan satu file spesifik sebagai acuan.\n- `@folder:src/services` — Memberikan seluruh konteks modul di dalam folder tersebut.\n- `@docs` — Membaca dokumentasi library resmi yang sudah diindeks.\n- `@git` — Menyertakan riwayat commit atau perubahan diff terkini.\n- `@codebase` — Memerintahkan editor melakukan pencarian semantik (vector search) ke seluruh repositori.\n\n### Mengabaikan File dengan `.cursorignore`\nSama seperti `.gitignore`, file `.cursorignore` di root repositori sangat krusial. File ini melarang AI membaca folder build (`dist/`, `.next/`), dependensi raksasa (`node_modules/`), berkas rahasia (`.env`, `.env.local`), dan file log. Tanpa `.cursorignore`, context window AI akan cepat penuh oleh kode minified yang tidak berguna.\n\n## Hierarki File Aturan Proyek (.cursorrules / AGENTS.md)\n\nSetiap proyek yang sehat memiliki kesepakatan gaya kode. Agar AI tidak menyarankan kode dalam bahasa atau *framework* yang salah, kita memberikan instruksi khusus melalui file aturan proyek seperti `.cursorrules` atau `AGENTS.md` di *root* proyek.\n\nStruktur standar file aturan tim industri:\n```markdown\n# Aturan Proyek & Standar AI\n## 1. Stack & Versi Eksplisit\n- TypeScript 5.6, Next.js 15 App Router, Tailwind CSS v4.\n## 2. Arsitektur & Konvensi\n- Gunakan arsitektur modular per fitur di folder src/features.\n- Dilarang menggunakan kata kunci var dan hindari tipe any.\n## 3. Larangan Dependensi (Forbidden Libraries)\n- Dilarang mengimpor library penanggalan moment.js (gunakan date-fns).\n- Dilarang menginstal package baru tanpa konfirmasi izin.\n## 4. Validasi & Penanganan Error\n- Semua input eksternal wajib divalidasi menggunakan Zod schema.\n```\n\n## Opsi Gratis & AI Lokal (Ollama)\n\nJika kamu belum berlangganan layanan AI berbayar seperti GitHub Copilot ($10/bulan) atau Claude Pro, kamu bisa menggunakan **Ollama** di komputermu sendiri. Ollama menjalankan model open-source (seperti Qwen 2.5 Coder atau Llama 3.3) secara lokal tanpa koneksi internet dan 100% gratis serta terjamin privasinya.\n\n## Jebakan & Kesalahan Umum saat Setup\n\n> **Jebakan:** Memasang terlalu banyak ekstensi AI sekaligus di VS Code (misalnya Copilot + Codeium + Tabnine). Ini menyebabkan konflik *autocomplete*, editor menjadi lambat, dan menyedot memori RAM komputermu. Pilih **satu** ekstensi *autocomplete* utama. Selain itu, lupa membuat file `.cursorignore` sering membuat kuota token terbuang percuma untuk membaca folder `node_modules` atau `dist`.\n\n## Kapan Dipakai di Dunia Kerja\n\n> **Dunia Kerja:** Saat masuk ke tim baru, hal pertama yang dilakukan senior engineer adalah memeriksa apakah ada file aturan AI (`.cursorrules` / `AGENTS.md`) di repositori dan memastikan konfigurasi privasi aman. Memahami cara mengonfigurasi alat AI dan MCP memastikan kamu bisa langsung produktif sejak hari pertama tanpa melanggar konvensi kode perusahaan."},
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
          susunKode: {
            question:
              "Susun perintah CLI untuk memeriksa ekstensi GitHub Copilot di VS Code.",
            potongan: [
              "code --list-extensions",
              "| grep -i copilot",
            ],
            pengecoh: [
              "vsc-cli --show-extensions",
              "| findstr -case copilot",
            ],
            pemisah: " ",
            explanation:
              "Perintah CLI untuk menampilkan daftar ekstensi terpasang di VS Code adalah `code --list-extensions`, lalu disaring dengan `grep -i copilot`. Pengecoh `vsc-cli --show-extensions` dan `findstr` adalah sintaks fiktif yang sering keliru digantikan pemula yang mengira ada perintah bawaan khusus.",
          },
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
          susunKode: {
            question:
              "Susun dokumen aturan proyek AI yang mewajibkan TypeScript dan melarang var.",
            potongan: [
              "- Gunakan TypeScript strict mode.\n",
              "- Dilarang menggunakan var (gunakan const atau let).\n",
              "- Tulis semua komentar kode dalam Bahasa Indonesia.",
            ],
            pengecoh: [
              "- Gunakan JavaScript loose mode.\n",
              "- Bebas menggunakan var (diatur const atau let).\n",
              "- Tulis semua komentar kode dalam Bahasa Inggris.",
            ],
            pemisah: "",
            explanation:
              "Dokumen aturan proyek AI menyertakan spesifikasi TypeScript, larangan var, serta komentar Bahasa Indonesia. Pengecoh `- Gunakan JavaScript loose mode` dan izin penggunaan var adalah jebakan aturan longgar yang sering menggoda tetapi merusak kualitas basis kode.",
          },
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
          susunKode: {
            question:
              "Susun fungsi hitungLuas dan pemanggilannya untuk mencetak hasil 5 * 10.",
            potongan: [
              "function hitungLuas(panjang, lebar) {\n",
              "  return panjang * lebar;\n}\n",
              "console.log(hitungLuas(5, 10));",
            ],
            pengecoh: [
              "function kalkulasiLuasPersegi(p, l) {\n",
              "  return panjang + lebar;\n}\n",
              "print(hitungLuas(5, 10));",
            ],
            pemisah: "",
            explanation:
              "Fungsi perkalian diawali deklarasi `function hitungLuas(panjang, lebar)`, mengembalikan `panjang * lebar`, dan dicetak dengan `console.log`. Pengecoh `kalkulasiLuasPersegi` dan operator `+` adalah jebakan nama serta logika yang sering keliru dibuat oleh AI.",
          },
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
          susunKode: {
            question:
              "Susun perintah Ollama untuk menjalankan model qwen2.5-coder:1.5b.",
            potongan: [
              "ollama run",
              "qwen2.5-coder:1.5b",
            ],
            pengecoh: [
              "ollama execute-model",
              "deepseek-coder:70b-huge",
            ],
            pemisah: " ",
            explanation:
              "Perintah Ollama untuk mengunduh dan menjalankan model secara lokal adalah `ollama run` diikuti tag model `qwen2.5-coder:1.5b`. Pengecoh `ollama execute-model` dan `deepseek-coder:70b-huge` sering menggoda tetapi keliru karena ukuran model 70b terlalu berat untuk laptop standar.",
          },
        },
        {
          kind: "quiz",
          id: "ai-0-kuis",
          title: "Kuis: Persiapan & Instalasi AI Tools",
          questions: [
                    {
                              "id": "q1",
                              "type": "pilihan-ganda",
                              "question": "Apa peran utama developer manusia dalam alur kerja AI-Assisted Development?",
                              "choices": [
                                        "Sebagai Lead Engineer yang mengarahkan, mengevaluasi, dan mengambil keputusan atas kode buatan AI",
                                        "Hanya sebagai pengetik ulang teks yang dihasilkan AI tanpa perlu membaca",
                                        "Membiarkan AI menjalankan server produksi secara penuh",
                                        "Menghapus semua kode yang ditulis oleh manusia"
                              ],
                              "answerIndex": 0,
                              "explanation": "Developer manusia adalah penanggung jawab utama yang memverifikasi kebenaran dan keamanan kode, sementara AI berperan sebagai asisten pengetik."
                    },
                    {
                              "id": "q2",
                              "type": "pilihan-ganda",
                              "question": "Apa fungsi utama dari file aturan proyek seperti `.cursorrules` atau `AGENTS.md`?",
                              "choices": [
                                        "Mempercepat kecepatan internet saat koding",
                                        "Memberikan petunjuk dan konvensi spesifik proyek agar AI tidak menghasilkan kode yang melenceng",
                                        "Menghapus bug secara otomatis dari komputer",
                                        "Mengganti warna tema editor VS Code"
                              ],
                              "answerIndex": 1,
                              "explanation": "File aturan memberikan konteks dan batasan teknologi proyek sehingga AI mengikuti konvensi tim secara konsisten."
                    },
                    {
                              "id": "q3",
                              "type": "pilihan-ganda",
                              "question": "Apa keunggulan utama menggunakan alat AI lokal seperti Ollama dibandingkan AI berbasis cloud?",
                              "choices": [
                                        "AI lokal membutuhkan biaya langganan bulanan mahal",
                                        "Kode dan data proyek 100% aman di komputer lokal tanpa terkirim ke internet",
                                        "AI lokal tidak memerlukan listrik sama sekali",
                                        "AI lokal pasti 100% bebas dari kesalahan"
                              ],
                              "answerIndex": 1,
                              "explanation": "AI lokal berjalan sepenuhnya di komputermu, menjamin privasi kode rahasia dan dapat digunakan tanpa koneksi internet."
                    },
                    {
                              "id": "q4",
                              "type": "pilihan-ganda",
                              "question": "Tombol keyboard apa yang digunakan di VS Code untuk menerima saran kode abu-abu (ghost text) dari Copilot?",
                              "choices": [
                                        "Ctrl + C",
                                        "Tab",
                                        "Spacebar",
                                        "Backspace"
                              ],
                              "answerIndex": 1,
                              "explanation": "Tombol Tab digunakan secara standar di VS Code untuk menerima saran autocomplete dari ekstensi AI."
                    },
                    {
                              "id": "q5",
                              "type": "pilihan-ganda",
                              "question": "Mengapa disarankan untuk tidak memasang terlalu banyak ekstensi autocomplete AI sekaligus di VS Code?",
                              "choices": [
                                        "Karena akan menyebabkan konflik saran dan membuat editor lambat serta boros RAM",
                                        "Karena VS Code akan otomatis terhapus",
                                        "Karena AI akan marah dan memblokir akunmu",
                                        "Karena keyboard akan berhenti berfungsi"
                              ],
                              "answerIndex": 0,
                              "explanation": "Memasang beberapa ekstensi autocomplete sekaligus memicu perebutan fokus ghost text dan membebankan performa sistem."
                    },
                    {
                              "id": "q6",
                              "type": "pilihan-ganda",
                              "question": "Apa peran utama Model Context Protocol (MCP) dalam ekosistem pengembangan berbasis AI modern?",
                              "choices": [
                                        "Protokol standar terbuka yang menghubungkan AI ke database lokal, filesystem, dan tool eksternal secara aman",
                                        "Bahasa pemrograman baru pengganti TypeScript dan Python",
                                        "Format kompresi file zip khusus kecerdasan buatan",
                                        "Ekstensi untuk mengubah font kode menjadi tulisan tangan"
                              ],
                              "answerIndex": 0,
                              "explanation": "MCP adalah protokol standar terbuka yang memungkinkan asisten AI membaca konteks dari database atau tool internal secara aman tanpa copy-paste manual."
                    },
                    {
                              "id": "q7",
                              "type": "pilihan-ganda",
                              "question": "Mengapa keberadaan file `.cursorignore` sangat krusial pada proyek yang menggunakan IDE AI?",
                              "choices": [
                                        "Menyaring folder build (dist, .next, node_modules) agar context window tidak boros membaca artefak minified",
                                        "Menghapus seluruh file rahasia dari harddisk secara otomatis",
                                        "Mematikan fungsi keyboard saat kompilasi berjalan",
                                        "Mengunci file agar tidak bisa dibaca oleh rekan satu tim"
                              ],
                              "answerIndex": 0,
                              "explanation": "File .cursorignore mencegah IDE AI mengindeks file build atau dependensi raksasa, sehingga kuota context window tetap hemat dan relevan."
                    }
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
            "# Pengertian\n\nLarge Language Model (LLM) seperti GPT-4o, Claude 3.7, atau Gemini sering kali terasa ajaib karena bisa menjawab pertanyaan matematika dan menulis kode rumit. Namun secara fundamental, **LLM tidak memiliki kesadaran, logika eksekusi runtime, atau 'pemahaman' tentang kode** seperti manusia.\n\nLLM adalah mesin probabilitas statistik raksasa yang bekerja dengan prinsip **prediksi token berikutnya** (*next-token prediction*). Model membaca sekumpulan kata/kode yang kamu berikan, lalu menghitung distribusi statistik token apa yang paling mungkin muncul setelahnya berdasarkan bobot dari miliaran baris kode yang telah dipelajarinya.\n\n## Konsep Penting: Token, BPE, & Efisiensi Bahasa\n\nKomputer tidak membaca kata per kata seperti manusia, melainkan dipecah menjadi **token** (potongan teks berbasis algoritma *Byte Pair Encoding* / BPE).\n\n```text\n+-------------------------------------------------------------------------+\n|                       PEMASOKAN TOKEN & MEMORI                          |\n+-------------------------------------------------------------------------+\n| Teks Asli:    \"const total = hitungHarga(100);\"                         |\n| Token:        [\"const\", \" total\", \" =\", \" hit\", \"ung\", \"Harga\", \"(\", \"100\", \");\"] |\n|                                                                         |\n| CONTEXT WINDOW (Kapasitas Memori Percakapan Maksimal):                  |\n| [ Token 1 (Awal) ..... Token N/2 (Tengah) ..... Token Akhir (Prompt) ]  |\n|                                                                         |\n| FENOMENA LOST IN THE MIDDLE:                                            |\n| Atensi Tinggi  -------> Atensi Melemah! --------> Atensi Tinggi        |\n| (Awal Dokumen)          (Tengah Dokumen)          (Akhir Prompt)        |\n+-------------------------------------------------------------------------+\n```\n\n### Efisiensi Token Bahasa Indonesia vs Inggris\nDalam BPE tokenizer standar, teks bahasa Inggris sangat efisien (~1 kata = 1 token). Sebaliknya, teks bahasa Indonesia sering kali terpecah menjadi 2–3 token per kata karena jarang muncul di dataset pelatihan global. Ini berarti instruksi panjang dalam bahasa Indonesia memakan kuota context window lebih cepat. Oleh sebab itu, di dunia kerja instruksi teknis disarankan tetap ringkas, padat, dan menggunakan istilah teknis bahasa Inggris baku.\n\n## Batas Context Window & Fenomena \"Lost in the Middle\"\n\nSetiap sesi obrolan memiliki batas memori yang disebut **Context Window** (misalnya 128.000 token). Begitu percakapanmu atau potongan kode yang kamu tempel melebihi kapasitas ini, bagian paling awal percakapan akan terdorong keluar dan dilupakan oleh AI.\n\nSelain kapasitas total, ada fenomena kognitif model yang disebut **Lost in the Middle**:\n- Model LLM memiliki atensi terkuat pada awal prompt (*primacy effect*) dan instruksi paling akhir sebelum tombol kirim (*recency effect*).\n- Jika kamu menempelkan berkas 3.000 baris dan menaruh instruksi penting di tengah-tengah berkas, AI berkemungkinan besar mengabaikan instruksi tersebut. Letakkan aturan krusial selalu di bagian paling akhir promptmu.\n\n## Mekanisme Codebase RAG & Semantic Indexing di IDE\n\nBagaimana Cursor atau Copilot bisa memahami seluruh repositori proyekmu?\n1. **Chunking**: Editor memecah file kodingan menjadi potongan-potongan fungsi atau modul kecil.\n2. **Embedding**: Setiap potongan diubah menjadi vektor angka oleh model embedding.\n3. **Retrieval**: Saat kamu bertanya dengan `@codebase` atau simbol serupa, editor mencari potongan kode yang memiliki kemiripan makna tertinggi (*cosine similarity*) dan menyisipkannya ke prompt AI.\nInilah alasan mengapa AI di editor terkadang melewatkan file yang baru kamu buat: indeks semantik lokalnya mungkin belum selesai diperbarui (*stale index*).\n\n## Bahaya Halusinasi & Package Hallucination (Slopsquatting)\n\nHalusinasi terjadi saat AI menghasilkan nama fungsi, parameter, atau library yang terdengar masuk akal tetapi tidak pernah eksis:\n- **Halusinasi API**: Memanggil method fiktif seperti `produk.sortBy('harga')` padahal JavaScript standar hanya memiliki `.sort()`.\n- **Package Hallucination (Slopsquatting)**: AI menyarankan perintah `npm install react-cool-table-v2` yang sebenarnya tidak ada di registry npm. Penyerang dunia maya sengaja memindai kode halusinasi umum dari LLM, lalu membuat package berbahaya dengan nama tersebut untuk menginfeksi komputer developer!\n\n| Istilah | Penjelasan Sederhana | Dampak pada Koding |\n|---|---|---|\n| **Token** | Potongan teks (~4 karakter / 0.75 kata) | Menentukan biaya API dan konsumsi memori model. |\n| **Context Window** | Batas maksimal token dalam 1 sesi percakapan | Jika terlalu panjang, AI melupakan konteks awal. |\n| **Lost in the Middle** | Melemahnya atensi AI pada informasi di tengah teks | Aturan di tengah file panjang rentan terabaikan. |\n| **Codebase RAG** | Pencarian semantik potongan kode relevan di proyek | Memungkinkan AI menjawab pertanyaan seputar repo. |\n| **Slopsquatting** | Malware yang memanfaatkan nama package halusinasi AI | Risiko keamanan dependensi pihak ketiga. |\n\n## Kekuatan vs Kelemahan Nyata AI\n\n- **Kekuatan Utama:** Sangat cepat membuat kode *boilerplate*, menerjemahkan pola antar-bahasa, menyusun skema interface/tipe data, dan membuat draft unit test.\n- **Kelemahan Utama:** Tidak mengetahui logika bisnis unik perusahaanmu, rentan melewatkan kasus tepi (*edge cases* `null`/`undefined`), dan tidak bisa memverifikasi jalannya kode di memori komputer secara mandiri.\n\n## Lanskap Tool: Memilih Alat Sesuai Tugas\n\n- **Copilot / Continue (Inline)**: Terbaik untuk menyelesaikan baris kode berpola dan pengetikan repetitif.\n- **Claude / ChatGPT (Chat)**: Terbaik untuk perancangan arsitektur, diskusi trade-off, dan pembedahan error kompleks.\n- **Cursor / AGY (Agent / Composer)**: Terbaik untuk refactoring multi-file yang menyentuh belasan berkas sekaligus.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan:** Meminta AI memperbaiki error dengan pertanyaan berulang 'Kamu yakin kode ini benar?'. AI akan selalu menjawab 'Ya, tentu!' dan tetap memberikan kode berhalusinasi yang sama. Jalankan kodenya di terminal, baca log error aslinya, lalu berikan error tersebut ke AI! Selain itu, jangan pernah menginstal package asing yang disarankan AI sebelum memeriksa reputasinya di npmjs.com.\n\n## Kapan Dipakai di Dunia Kerja\n\n> **Dunia Kerja:** Senior developer memanfaatkan AI untuk memotong waktu pekerjaan mekanis (seperti mengetik tipe DTO atau skema Zod), lalu mengalokasikan 80% waktu dan energi mereka untuk meninjau kebenaran logika bisnis, menguji edge cases, dan memastikan keamanan dependensi proyek."},
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
          susunKode: {
            question:
              "Susun pencetakan format mata uang id-ID menggunakan toLocaleString.",
            potongan: [
              "console.log(",
              "harga.toLocaleString('id-ID'));",
            ],
            pengecoh: [
              "alert(",
              "harga.formatRupiah('id-ID'));",
            ],
            pemisah: "",
            explanation:
              "Format mata uang di JavaScript dilakukan menggunakan `.toLocaleString('id-ID')` pada nilai bertipe number. Pengecoh `.formatRupiah()` adalah metode fiktif yang sering menggoda pemula padahal metode tersebut tidak ada di JS standar dan keliru digunakan.",
          },
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
          susunKode: {
            question:
              "Susun pengurutan array objek produk berdasarkan harga termurah.",
            potongan: [
              "const produk = [\n  { nama: 'Pensil', harga: 3000 },\n  { nama: 'Buku', harga: 12000 },\n  { nama: 'Penghapus', harga: 1500 },\n];\n\nconst urut = [...produk].sort(",
              "(a, b) => a.harga - b.harga);\nconsole.log(urut);",
            ],
            pengecoh: [
              "const produk = [\n  { nama: 'Pensil', harga: 3000 },\n  { nama: 'Buku', harga: 12000 },\n  { nama: 'Penghapus', harga: 1500 },\n];\n\nconst urut = [...produk].sortBy(",
              "(a, b) => a.nama.length - b.nama.length);\nconsole.log(urut);",
            ],
            pemisah: "",
            explanation:
              "Pengurutan array objek JavaScript bawaan menggunakan `.sort((a, b) => a.harga - b.harga)`. Pengecoh `.sortBy()` adalah metode fiktif pustaka lain yang sering keliru disarankan AI tanpa mengimpor Lodash sehingga memicu runtime error.",
          },
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
          susunKode: {
            question:
              "Susun kalkulasi estimasi token dari 32000 karakter dengan Math.ceil.",
            potongan: [
              "const perkiraanToken = Math.ceil(",
              "(jumlahKarakter / 4);\n",
              "console.log(perkiraanToken);",
            ],
            pengecoh: [
              "const perkiraanToken = Math.floor(",
              "(jumlahKarakter * 4);\n",
              "print(perkiraanToken);",
            ],
            pemisah: "",
            explanation:
              "Estimasi token dari karakter dilakukan dengan pembagian 4 dan pembulatan ke atas `Math.ceil(jumlahKarakter / 4)`. Pengecoh perkalian `* 4` atau `Math.floor` sering keliru dan menjebak perhitungan kapasitas konteks LLM dalam pengolahan prompt.",
          },
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
          susunKode: {
            question:
              "Susun tipe TypeScript User dengan atribut id, nama, dan umur.",
            potongan: [
              "type User = {\n",
              "  id: string;\n",
              "  nama: string;\n",
              "  umur: number;\n};",
            ],
            pengecoh: [
              "class UserData {\n",
              "  id: number;\n",
              "  nama: any;\n",
              "  umur: string;\n};",
            ],
            pemisah: "",
            explanation:
              "Deklarasi tipe TypeScript `type User` mencakup `id: string`, `nama: string`, dan `umur: number`. Pengecoh `umur: string` atau `any` adalah jebakan tipe longgar yang merusak validasi tipe ketat TypeScript dan sering menyebabkan kekeliruan pengkodean.",
          },
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
          susunKode: {
            question:
              "Susun fungsi hitungDiskon 10% dengan batas maksimal 50000.",
            potongan: [
              "function hitungDiskon(harga, isMember) {\n  if (!isMember) return 0;\n",
              "  return Math.min(harga * 0.1, 50000);\n}\nconsole.log(hitungDiskon(800000, true));",
            ],
            pengecoh: [
              "function hitungKalkulasi(h, m) {\n  if (m === false) return 10000;\n",
              "  return Math.max(harga * 0.1, 50000);\n}\nconsole.log(hitungDiskon(800000, true));",
            ],
            pemisah: "",
            explanation:
              "Perhitungan diskon 10% dengan batas maksimal 50000 menggunakan `Math.min(harga * 0.1, 50000)`. Pengecoh `Math.max` adalah kesalahan umum yang menggoda tetapi keliru karena justru memilih angka yang lebih besar dari batas maksimal.",
          },
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
          susunKode: {
            question:
              "Susun objek pilihanAlat yang memetakan tugas ke alat AI yang tepat.",
            potongan: [
              "const pilihanAlat = {\n",
              "  menulisTestBerulang: 'copilot',\n",
              "  membandingkanDuaPendekatan: 'chat',\n",
              "  mengubahNamaFungsiDi12File: 'agent',\n};",
            ],
            pengecoh: [
              "const opsiToolsAI = {\n",
              "  menulisTestBerulang: 'chat-gpt',\n",
              "  membandingkanDuaPendekatan: 'copilot-cli',\n",
              "  mengubahNamaFungsiDi12File: 'manual-edit',\n};",
            ],
            pemisah: "",
            explanation:
              "Pemetaan alat AI yang tepat memasangkan autocomplete ke 'copilot', analisis perbandingan ke 'chat', dan refactoring lintas file ke 'agent'. Mempertukarkan peran alat tersebut keliru dan sering menjebak efisiensi alur kerja pengkodingan modern.",
          },
        },
        {
          kind: "quiz",
          id: "ai-1-kuis",
          title: "Kuis: Cara Kerja & Batas LLM",
          questions: [
                    {
                              "id": "q1",
                              "type": "pilihan-ganda",
                              "question": "Apa istilah yang digunakan saat Large Language Model (LLM) mengarang fungsi atau sintaks API yang sebenarnya tidak ada secara percaya diri?",
                              "choices": [
                                        "Halusinasi (Hallucination)",
                                        "Compilation Error",
                                        "Overfitting",
                                        "Refactoring"
                              ],
                              "answerIndex": 0,
                              "explanation": "Halusinasi adalah kondisi ketika AI menghasilkan respon fiktif yang terdengar meyakinkan namun tidak akurat secara nyata."
                    },
                    {
                              "id": "q2",
                              "type": "pilihan-ganda",
                              "question": "Mengapa AI sering melupakan instruksi di awal percakapan jika sesi obrolan terlalu panjang?",
                              "choices": [
                                        "Karena server AI restart",
                                        "Karena mencapai batas Context Window",
                                        "Karena AI tidak suka percakapan panjang",
                                        "Karena koneksi internet terputus"
                              ],
                              "answerIndex": 1,
                              "explanation": "Setiap model memiliki batas context window (jumlah token maksimal). Jika melebihi batas ini, token terlama akan dihapus."
                    },
                    {
                              "id": "q3",
                              "type": "pilihan-ganda",
                              "question": "Apa kelemahan utama AI saat digunakan untuk menulis kode perusahaan?",
                              "choices": [
                                        "AI tidak tahu logika bisnis spesifik dan aturan unik perusahaan",
                                        "AI tidak bisa mengetik cepat",
                                        "AI akan menghapus kode secara otomatis",
                                        "AI selalu menggunakan bahasa Assembly"
                              ],
                              "answerIndex": 0,
                              "explanation": "AI dilatih dengan data publik, sehingga ia tidak tahu aturan bisnis, struktur, atau sistem internal spesifik di perusahaanmu yang bersifat rahasia."
                    },
                    {
                              "id": "q4",
                              "type": "pilihan-ganda",
                              "question": "Apa tujuan utama dari fitur Context Window pada model LLM?",
                              "choices": [
                                        "Menyimpan data percakapan selamanya di server",
                                        "Menentukan jumlah batas maksimal memori atau token yang bisa diingat dalam satu sesi",
                                        "Meningkatkan kecepatan pengetikan AI",
                                        "Menerjemahkan bahasa secara otomatis"
                              ],
                              "answerIndex": 1,
                              "explanation": "Context window adalah batas jumlah token maksimal yang dapat diproses oleh LLM dalam satu waktu. Jika melebihi batas, model akan mulai melupakan konteks dari awal percakapan."
                    },
                    {
                              "id": "q5",
                              "type": "pilihan-ganda",
                              "question": "Pekerjaan apa yang sangat cocok dan efisien diserahkan kepada AI?",
                              "choices": [
                                        "Membuat arsitektur sistem skala besar tanpa pengawasan",
                                        "Menerjemahkan sintaks antar bahasa atau membuat kode boilerplate",
                                        "Menulis aturan bisnis unik perusahaan yang belum pernah ada",
                                        "Mengambil keputusan pemecatan karyawan"
                              ],
                              "answerIndex": 1,
                              "explanation": "AI sangat andal dalam translasi sintaks dan pembuatan kode berulang (boilerplate) karena tugas tersebut didasarkan pada pola umum yang banyak ditemukan di data pelatihannya."
                    },
                    {
                              "id": "q6",
                              "type": "pilihan-ganda",
                              "question": "Apa yang dimaksud dengan fenomena 'Lost in the Middle' pada pemrosesan context window LLM?",
                              "choices": [
                                        "Atensi model paling lemah pada informasi yang berada di tengah-tengah dokumen teks panjang",
                                        "AI berhenti merespons saat waktu istirahat siang",
                                        "Hilangnya koneksi websocket di tengah proses generasi kode",
                                        "Penghapusan otomatis direktori tengah pada struktur folder proyek"
                              ],
                              "answerIndex": 0,
                              "explanation": "Penelitian membuktikan LLM memiliki perhatian terkuat di awal dan akhir prompt; instruksi di tengah file panjang sering kali terlewatkan."
                    },
                    {
                              "id": "q7",
                              "type": "pilihan-ganda",
                              "question": "Apa bahaya utama dari fenomena 'Package Hallucination' (Slopsquatting) pada kode yang disarankan AI?",
                              "choices": [
                                        "Developer menginstal package fiktif saran AI yang telah didaftarkan oleh peretas dengan kode berbahaya (malware)",
                                        "Ukuran file proyek membengkak tanpa batas",
                                        "Kabel jaringan komputer terbakar karena beban CPU",
                                        "Editor VS Code menolak menyimpan perubahan berkas"
                              ],
                              "answerIndex": 0,
                              "explanation": "Peretas memantau nama paket yang sering dihalusinasikan AI lalu mendaftarkannya di npm/PyPI dengan kode jahat untuk mencuri kredensial developer."
                    }
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
            "# Pengertian\n\n**Prompting** dalam rekayasa perangkat lunak bukan sekadar bertanya santai, melainkan **merumuskan spesifikasi teknis (*software specification engineering*)**. Di dunia pengembangan profesional, instruksi umum seperti *'buatkan kode login'* hampir selalu menghasilkan kode rentan bug, tidak aman, dan melenceng dari arsitektur proyekmu.\n\nPrompting yang efektif memerlukan struktur baku: menyertakan **konteks teknologi eksplisit**, **pesan error persis tanpa dipotong**, **potongan kode terkait**, dan **batasan ketat (constraints)**.\n\n## Anatomi Prompt Koding Kelas Industri\n\nSebuah prompt pemrograman profesional memiliki 5 komponen terstruktur:\n\n```text\n+-------------------------------------------------------------------------+\n|                  ANATOMI PROMPT KODING PROFESIONAL                      |\n+-------------------------------------------------------------------------+\n| 1. PERSONA/ROLE ---> \"Bertindaklah sebagai Senior TS Security Auditor\"   |\n| 2. KONTEKS      ---> \"Node 20 + Express 5, arsitektur modular di src/\"   |\n| 3. MASALAH/LOG  ---> Tempelkan potongan kode & pesan error terminal utuh|\n| 4. CONSTRAINT   ---> \"Tanpa library tambahan, gunakan Zod, strict mode\"  |\n| 5. OUTPUT SCHEMA---> \"Kembalikan interface TypeScript dan fungsi murni\"  |\n+-------------------------------------------------------------------------+\n```\n\n## Few-Shot Prompting untuk Kode\n\n**Few-Shot Prompting** adalah teknik memberikan 1 atau 2 contoh pola input-output yang diharapkan sebelum meminta AI mengerjakan tugas utama:\n- **Tanpa Contoh (Zero-Shot)**: AI bebas memilih gaya penulisan, penamaan variabel, dan cara melempar error.\n- **Dengan Contoh (Few-Shot)**: AI meniru persis konvensi penanganan error timmu (misal pola `Result<T, E>` atau custom Error class).\n\nContoh Few-Shot Prompt:\n```text\nIkuti pola validasi berikut:\nInput: { umur: \"20\" } -> Output: { success: true, data: { umur: 20 } }\nInput: { umur: \"-5\" } -> Output: { success: false, error: \"Umur tidak valid\" }\n\nSekarang buat fungsi validasi untuk format nomor telepon Indonesia.\n```\n\n## Chain of Thought (CoT) & Plan-First Prompting\n\nUntuk tugas arsitektur atau algoritma rumit, jangan biarkan AI langsung menulis kode! Gunakan pendekatan **Plan-First (Chain of Thought)**:\n> *\"Sebelum menulis kode, petakan arsitektur data, langkah-langkah implementasi, dan 3 kemungkinan kasus kegagalan (edge cases) yang harus diantisipasi.\"*\n\nDengan memaksa model 'berpikir' dan merencanakan langkahnya terlebih dahulu, kemungkinan terjadinya kesalahan logika bisnis atau race condition menurun hingga 80%.\n\n## Specification-Driven Development (Spec-First)\n\nPendekatan terbaik di tim engineering modern adalah membuat dokumen spesifikasi (`SPEC.md` atau `PRD.md`) terlebih dahulu:\n1. Susun spesifikasi fungsional, skema request/response, dan status code API.\n2. Minta AI mereview dokumen spesifikasi tersebut untuk mencari kontradiksi logika.\n3. Setelah spesifikasi matang, minta AI mengimplementasikan kode per modul kecil secara bertahap.\n\n| Dimensi | Prompt Amatir (Buruk) | Prompt Profesional (Efektif) |\n|---|---|---|\n| **Konteks** | \"Perbaiki error di kode ini.\" | \"React 19 + Vite. TypeError: Cannot read property of undefined di src/Header.tsx baris 12.\" |\n| **Batasan** | (Tidak ada batasan) | \"TypeScript strict, tanpa dependensi eksternal, wajib immutable.\" |\n| **Metode** | \"Buatkan aplikasi kasir utuh sekarang.\" | Plan-First: \"Pecah jadi 3 langkah, mulai dari fungsi hitung total belanja dulu.\" |\n| **Tujuan** | Selalu meminta kode jadi | Mode belajar: \"Jelaskan alur reduce langkah demi langkah, jangan tuliskan solusi tugas saya.\" |\n\n## Prompting Iteratif vs Mengulang Permintaan\n\nSaat AI memberikan respon yang salah, **jangan pernah menyalin-tempel prompt awal yang sama persis**. Gunakan **prompting iteratif**:\n1. Sebutkan bagian yang sudah benar (agar AI tidak merombak bagian yang bekerja).\n2. Tunjukkan dengan presisi bagian mana yang salah beserta hasil aktualnya.\n3. Jelaskan apa yang sudah kamu coba secara mandiri.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan Mega-Prompt:** Meminta seluruh fitur kompleks dalam satu prompt raksasa (*single-shot mega-prompt*). AI akan menghasilkan ratusan baris kode yang membingungkan, sulit diverifikasi, dan penuh asumsi fiktif. Pecah tugas menjadi 3-5 langkah kecil modular yang masing-masing bisa diuji secara mandiri!\n\n## Kapan Dipakai di Dunia Kerja\n\n> **Dunia Kerja:** Keterampilan merumuskan prompt terstruktur sangat dihargai dalam *technical communication*. Engineer yang mampu menulis batasan masalah dengan jelas ke AI juga biasanya sangat handal dalam merancang *issue ticket* Jira, spesifikasi RFC tim, dan deskripsi Pull Request yang mudah dipahami rekan kerja."},
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
          susunKode: {
            question:
              "Susun prompt laporan bug React 19 dengan Vite yang menyertakan error.",
            potongan: [
              "Saya memakai React 19 dengan Vite.\n",
              "Saat menjalankan build, muncul error:\nModule not found: Can't resolve './Header'\n\n",
              "Yang saya inginkan: build berhasil lagi dan komponen Header tetap tampil.",
            ],
            pengecoh: [
              "Saya memakai VueJS 3 dengan Webpack.\n",
              "Saat menjalankan dev server, ada bug visual:\nHeader tampil dengan posisi bergeser ke kiri\n\n",
              "Yang saya inginkan: membuat aplikasi dari nol.",
            ],
            pemisah: "",
            explanation:
              "Prompt pelaporan bug yang baik menyebut versi spesifik (React 19 dengan Vite), pesan error persis (Module not found), dan ekspektasi hasil. Prompt abstrak tanpa versi atau pesan error keliru dan sering membuat AI berspekulasi secara salah.",
          },
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
          susunKode: {
            question:
              "Susun prompt fungsi formatTanggal TypeScript tanpa library eksternal.",
            potongan: [
              "Tulis fungsi TypeScript formatTanggal(tanggal: Date): string.\nConstraint:\n",
              "- tanpa library eksternal (jangan pakai moment atau dayjs)\n",
              "- keluaran berbentuk '31 Juli 2026' dengan nama bulan bahasa Indonesia",
            ],
            pengecoh: [
              "Tulis fungsi JavaScript biasa tanpa tipe data ketat.\nKetentuan:\n",
              "- boleh menggunakan library eksternal bawaan\n",
              "- hasil berupa tanggal sistem bawaan",
            ],
            pemisah: "",
            explanation:
              "Instruksi prompt wajib menyebut bahasa TypeScript, melarang library eksternal seperti moment/dayjs, dan memberi contoh format '31 Juli 2026'. Mengizinkan pustaka berat tanpa batas adalah jebakan umum yang membengkakkan ukuran bundle proyek.",
          },
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
          susunKode: {
            question:
              "Susun prompt umpan balik perbaikan fungsi hitungTotal.",
            potongan: [
              "Fungsi hitungTotal sudah benar untuk keranjang berisi 1 item.\n",
              "Yang salah: saat keranjang berisi 3 item, totalnya hanya menghitung item terakhir.\n",
              "Sudah saya coba mengganti forEach menjadi for biasa, hasilnya tetap sama.",
            ],
            pengecoh: [
              "Fungsi hitungTotal belum diuji sama sekali.\n",
              "Seluruh fungsi tidak ada yang benar.\n",
              "Saya belum mencoba perbaikan apa pun.",
            ],
            pemisah: "",
            explanation:
              "Umpan balik perbaikan kode yang efektif memisahkan bagian yang sudah benar, bagian yang salah, dan perbaikan yang sudah dicoba. Menyebut seluruh kode rusak adalah instruksi emosional yang keliru dan membuat AI merusak logika yang sudah berjalan.",
          },
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
          susunKode: {
            question:
              "Susun prompt evaluasi 2 alternatif penyimpanan file di Node.js.",
            potongan: [
              "Beri 2 alternatif penyimpanan file unggahan pengguna untuk aplikasi Node.js.\n",
              "Untuk tiap alternatif sebutkan kelebihan dan kekurangannya.\n",
              "Kriteria saya: biaya bulanan serendah mungkin, dan file harus tetap aman kalau server diganti.",
            ],
            pengecoh: [
              "Beri 1 cara penyimpanan file unggahan pengguna untuk aplikasi Node.js.\n",
              "Untuk cara ini abaikan ulasan dampak negatifnya.\n",
              "Batasan saya: tanpa memperdulikan aspek biaya atau keamanan.",
            ],
            pemisah: "",
            explanation:
              "Prompt eksplorasi opsi arsitektur meminta 2 alternatif, daftar kelebihan/kekurangan, serta kriteria prioritas (biaya & keamanan). Mengikuti 1 jawaban mutlak tanpa pertimbangan kompromi adalah jebakan arsitektur yang sering merugikan di kemudian hari.",
          },
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
          susunKode: {
            question:
              "Susun prompt penjelasan Array.reduce tanpa langsung memberikan solusi tugas.",
            potongan: [
              "Jelaskan cara kerja Array.reduce langkah demi langkah, termasuk peran nilai awal.\n",
              "Beri satu contoh kecil menjumlahkan angka.\n",
              "Jangan tuliskan solusi untuk tugas saya — saya ingin mencobanya sendiri dulu.",
            ],
            pengecoh: [
              "Tuliskan hasil akhir Array.reduce tanpa menerangkan alur kodenya.\n",
              "Abaikan pembuatan sampel sederhana.\n",
              "Selesaikan seluruh tugas saya secara otomatis sekarang.",
            ],
            pemisah: "",
            explanation:
              "Prompt pembelajaran yang sehat meminta penjelasan konsep, contoh kecil, dan melarang AI menuliskan jawaban tugas secara langsung. Meminta AI mengerjakan tugas secara otomatis keliru dan menjebak pengembang menjadi tidak paham cara kerja kodenya.",
          },
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
          susunKode: {
            question:
              "Susun tiga langkah bertahap rencana pemecahan fitur checkout.",
            potongan: [
              "1. Hitung total belanja dari daftar item di keranjang (tanpa ongkir dulu).\n",
              "2. Validasi stok tiap item sebelum pesanan boleh lanjut.\n",
              "3. Simpan pesanan ke database dan kembalikan nomor pesanan.",
            ],
            pengecoh: [
              "- Hitung total belanja dari daftar item di keranjang.\n",
              "- Validasi stok tiap item sebelum pesanan boleh lanjut.\n",
              "- Simpan pesanan ke database dan kembalikan nomor pesanan.",
            ],
            pemisah: "",
            explanation:
              "Penomoran angka eksplisit '1.', '2.', '3.' pada instruksi langkah kerja membuat rencana mudah diproses oleh validator dan AI. Mengganti angka dengan tanda `-` keliru dan menjebak urutan penomoran terstruktur yang dites.",
          },
        },
        {
          kind: "quiz",
          id: "ai-2-kuis",
          title: "Kuis: Prompting untuk Kode",
          questions: [
                    {
                              "id": "q1",
                              "type": "pilihan-ganda",
                              "question": "Elemen apa saja yang Wajib disertakan saat meminta AI menyelesaikan bug pada berkas kode kamu?",
                              "choices": [
                                        "Kode terkait, log error lengkap di terminal, dan hasil akhir yang diharapkan",
                                        "Hanya nama file kode saja",
                                        "Foto layar komputer dari HP",
                                        "Username dan password database"
                              ],
                              "answerIndex": 0,
                              "explanation": "Konteks berupa potongan kode terkait, traceback error lengkap, dan ekspektasi hasil memberikan informasi utuh bagi AI."
                    },
                    {
                              "id": "q2",
                              "type": "pilihan-ganda",
                              "question": "Mengapa kita disarankan meminta alternatif atau trade-off dari AI?",
                              "choices": [
                                        "Agar AI merasa dihargai",
                                        "Untuk memastikan kita memilih pendekatan terbaik dan memahami konsekuensinya",
                                        "Karena AI selalu salah di jawaban pertama",
                                        "Agar proses berjalan lebih lambat"
                              ],
                              "answerIndex": 1,
                              "explanation": "Dengan meminta alternatif, kita dipaksa mengevaluasi kelebihan dan kelemahan masing-masing solusi sebelum menerapkannya ke proyek."
                    },
                    {
                              "id": "q3",
                              "type": "pilihan-ganda",
                              "question": "Apa kelemahan dari single-shot mega prompt (satu prompt panjang untuk membuat seluruh aplikasi)?",
                              "choices": [
                                        "Sangat efektif untuk aplikasi kompleks",
                                        "Hanya bisa digunakan oleh pengguna berbayar",
                                        "AI sering gagal menghasilkan kode berkualitas karena tugasnya terlalu besar dan tidak fokus",
                                        "Menghasilkan kode yang 100% sempurna tanpa bug"
                              ],
                              "answerIndex": 2,
                              "explanation": "Memecah tugas besar menjadi bagian kecil (modular) jauh lebih efektif karena AI dapat fokus pada satu masalah spesifik di setiap prompt."
                    },
                    {
                              "id": "q4",
                              "type": "pilihan-ganda",
                              "question": "Apa yang sebaiknya dilakukan jika jawaban AI tidak sesuai dengan harapanmu pada percobaan pertama?",
                              "choices": [
                                        "Membuat obrolan baru dan mengulangi prompt dari awal persis sama",
                                        "Melakukan prompting iteratif dengan memberikan umpan balik untuk mempersempit instruksi",
                                        "Menyerah dan tidak lagi menggunakan AI",
                                        "Memarahi AI agar ia meminta maaf"
                              ],
                              "answerIndex": 1,
                              "explanation": "Menggunakan pendekatan iteratif dengan memberikan konteks tambahan atau koreksi jauh lebih efektif daripada memulai ulang dari nol."
                    },
                    {
                              "id": "q5",
                              "type": "pilihan-ganda",
                              "question": "Mengapa menyebutkan batasan (constraint) seperti 'tanpa menggunakan library eksternal' pada prompt itu penting?",
                              "choices": [
                                        "Agar AI merasa tertantang",
                                        "Memastikan AI menghasilkan kode yang sesuai dengan pedoman atau batasan di proyek kita",
                                        "Supaya kodenya tidak bisa dibaca oleh orang lain",
                                        "Meningkatkan kecepatan respons AI secara drastis"
                              ],
                              "answerIndex": 1,
                              "explanation": "Constraint memastikan AI tidak memberikan solusi yang tidak bisa kita gunakan, seperti menambahkan library berukuran besar yang tidak diizinkan di proyek."
                    },
                    {
                              "id": "q6",
                              "type": "pilihan-ganda",
                              "question": "Apa keuntungan menerapkan teknik 'Few-Shot Prompting' saat menginstruksikan pembuatan fungsi kode ke AI?",
                              "choices": [
                                        "Memberikan contoh pola input-output konkret agar AI meniru standar kode dan penanganan error tim",
                                        "Membuat AI menghasilkan kode tanpa memerlukan token API",
                                        "Menghapus kebutuhan pengujian otomatis secara menyeluruh",
                                        "Mengubah semua tipe data JavaScript menjadi tipe longgar"
                              ],
                              "answerIndex": 0,
                              "explanation": "Few-Shot Prompting menyertakan contoh konkret pola input-output sehingga model meniru gaya penulisan dan arsitektur yang sudah ada di proyek."
                    },
                    {
                              "id": "q7",
                              "type": "pilihan-ganda",
                              "question": "Mengapa pendekatan 'Plan-First' (Chain of Thought) sangat disarankan sebelum meminta AI menulis fitur kompleks?",
                              "choices": [
                                        "Memaksa AI merumuskan langkah arsitektur dan potensi edge cases terlebih dahulu sebelum menulis sintaks kode",
                                        "Memperlambat proses pengerjaan proyek agar terlihat sibuk",
                                        "Membatalkan eksekusi compiler di terminal",
                                        "Mengurangi jumlah commit di repositori Git"
                              ],
                              "answerIndex": 0,
                              "explanation": "Pendekatan Plan-First membedah rancangan arsitektur dan potensi kegagalan terlebih dahulu, memangkas halusinasi logika hingga 80%."
                    }
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
            "# Pengertian\n\nMengintegrasikan alat AI ke alur kerja harian (daily engineering workflow) bukan berarti menyerahkan kendali coding sepenuhnya ke mesin. Inti dari efisiensi developer modern adalah **memilih alat AI yang tepat untuk fase pengembangan yang tepat**.\n\nSetiap model dan mode interaksi memiliki keunggulan unik:\n- **Autocomplete (Ghost text)** untuk mengetik cepat tanpa mengalihkan fokus.\n- **Side Chat** untuk eksplorasi arsitektur dan pemecahan masalah mendalam.\n- **AI Agent / Multi-file Composer** untuk eksekusi terarah lintas berkas.\n\n```text\n+-------------------------------------------------------------------------+\n|                  ALUR KERJA TDD BERSAMA ASISTEN AI                      |\n+-------------------------------------------------------------------------+\n| 1. FASE RED      ---> Tulis Unit Test (kasus normal + edge cases)       |\n|                       Jalankan test: Kondisi GAGAL (Merah)              |\n|                                                                         |\n| 2. FASE GREEN    ---> Beri test ke AI: minta implementasi seminimal     |\n|                       mungkin agar test LULUS (Hijau)                   |\n|                                                                         |\n| 3. FASE REFACTOR ---> Minta AI / rapikan kode secara mandiri tanpa      |\n|                       merusak pengujian yang sudah hijau                |\n+-------------------------------------------------------------------------+\n```\n\n## TDD (Test-Driven Development) Loop dengan AI\n\nMetode terbaik untuk bekerja aman bersama AI di industri adalah **TDD**:\n1. **Red**: Tulis spesifikasi kasus uji (misal dengan Jest/Vitest) sebelum menulis fungsi implementasi. Pastikan menguji input normal, input kosong (`null`/`undefined`), dan batas ekstrem.\n2. **Green**: Masukkan test tersebut ke AI: *\"Tulis fungsi TypeScript `hitungDiskon` yang memenuhi seluruh assertion test di atas.\"* Jalankan test suite hingga seluruhnya hijau.\n3. **Refactor**: Bersihkan duplikasi dan optimalkan performa kodenya. Karena test suite sudah ada, kamu bisa memverifikasi dengan pasti bahwa refactoring tidak merusak fungsionalitas aplikasi.\n\n## Simbol Konteks Modern (@file, @docs, @git)\n\nDi editor modern seperti Cursor atau Windsurf, navigasi konteks dilakukan menggunakan simbol referensi presisi:\n- `@file:src/types/user.ts` — Memberikan acuan tipe data agar AI tidak mengarang skema baru.\n- `@docs:tailwindcss` — Memaksa AI menggunakan dokumentasi versi terbaru yang resmi diindeks.\n- `@git` — Menginstruksikan AI membaca perubahan diff terkini untuk merangkum pull request.\n\n| Mode Kerja | Kapan Digunakan | Kapan Dihindari / Berisiko Tinggi |\n|---|---|---|\n| **Autocomplete** | Menulis kode repetitif, mock data, atau kelanjutan fungsi sederhana | Menulis rumus perhitungan uang atau logika bisnis sensitif |\n| **Sesi Chat** | Eksplorasi arsitektur sistem, desain skema tabel, membedah traceback | Mengetik sintaks sebaris yang cukup diselesaikan Tab |\n| **AI Agent** | Refactoring lintas berkas (misal migrasi nama method di 10 file) | Menjalankan di git working tree yang masih kotor (*dirty tree*) |\n\n## Micro-Commit Hygiene & Conventional Commits\n\nSaat bekerja dibantu AI, kecepatan menghasilkan kode meningkat drastis. Namun jika kamu mengumpulkan 20 perubahan berkas ke dalam satu commit raksasa, timmu akan kesulitan melakukan code review:\n- Pecah setiap perubahan menjadi **micro-commits** (satu fitur/refactor per commit).\n- Gunakan standar **Conventional Commits**:\n  - `feat(auth): tambah validasi token jwt`\n  - `fix(cart): cegah total belanja bernilai negatif`\n  - `test(order): tambah unit test edge case stok kosong`\n- Mintalah bantuan AI untuk merangkum `git diff` menjadi draf pesan commit, lalu tambahkan alasan (*why*) perubahan tersebut secara manual.\n\n## Menjaga Kendali: Kode yang Tidak Dipahami Dilarang Masuk\n\nAturan emas profesional: **Kamu adalah pemilik kode tersebut.**\nJika AI menyarankan sintaks *one-liner* yang sangat rumit menggunakan nested ternary dan bitwise operator yang membingungkanmu, jangan langsung di-commit! Minta AI menyederhanakannya atau tulis ulang menjadi struktur yang kamu pahami. Kode yang mudah dibaca dan dipelihara jauh lebih bernilai bagi tim daripada kode pintar yang misterius.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan Dirty Working Tree:** Menjalankan AI Agent saat ada perubahan lokal yang belum di-commit. Jika Agent membuat kesalahan di 12 berkas sekaligus, kamu tidak bisa membedakan mana perubahan tanganmu dan mana kerusakan yang dibuat Agent. **Selalu pastikan `git status` bersih sebelum menjalankan Agent!**\n\n## Kapan Dipakai di Dunia Kerja\n\n> **Dunia Kerja:** Dalam tim engineering profesional, pengembang diwajibkan memeriksa `git diff` baris demi baris sebelum mengajukan Pull Request. Menerapkan TDD bersama AI memastikan kinerjamu melesat cepat tanpa pernah menurunkan standar kehandalan sistem perusahaan."},
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
          susunKode: {
            question:
              "Susun fungsi hitungOngkir dengan ambang gratis 300000.",
            potongan: [
              "function hitungOngkir(total) {\n",
              "  return total >= 300000 ?",
              " 0 : 15000;\n}\n\nconsole.log(hitungOngkir(250000));",
            ],
            pengecoh: [
              "function hitungBiayaKirim(t) {\n",
              "  return total >= 500000 ?",
              " 5000 : 20000;\n}\n\nconsole.log(hitungOngkir(250000));",
            ],
            pemisah: "",
            explanation:
              "Fungsi hitungOngkir memeriksa ambang gratis ongkir 300000 dan mengembalikan 15000 untuk nilai di bawahnya. Pengecoh `total >= 500000` adalah nilai ambang keliru yang menjebak logika perhitungan ongkos kirim pada aplikasi kasir.",
          },
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
          susunKode: {
            question:
              "Susun prompt perancangan skema riwayat pesanan dengan 2 alternatif.",
            potongan: [
              "Data wajib: nomor pesanan, tanggal, daftar item, total, metode bayar.\n",
              "Batasan: satu database MySQL, tanpa layanan tambahan berbayar.\n",
              "Tawarkan 2 alternatif struktur tabel beserta kelebihan dan kekurangannya.",
            ],
            pengecoh: [
              "Rincian informasi: tidak ada rincian yang wajib disimpan.\n",
              "Ketentuan bebas: menggunakan beberapa database berbayar apa saja.\n",
              "Tunjukkan 1 hasil akhir skema tunggal tidak pakai pilihan.",
            ],
            pemisah: "",
            explanation:
              "Spesifikasi perancangan skema basis data mencakup rincian data wajib, batasan teknis (MySQL tunggal), dan permintaan 2 alternatif struktur. Meminta 1 skema tanpa alternatif keliru karena menutup peluang evaluasi denormalisasi data.",
          },
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
          susunKode: {
            question:
              "Susun instruksi refactoring variabel var di src/utils.",
            potongan: [
              "Ganti semua deklarasi var menjadi const, atau let bila nilainya memang diubah, di seluruh file dalam folder src/utils.\n",
              "Jangan mengubah nama variabel, logika, maupun file di luar folder itu.",
            ],
            pengecoh: [
              "Ganti semua variabel di folder src/components.\n",
              "Boleh bebas merubah logika maupun file di luar folder.",
            ],
            pemisah: "\n",
            explanation:
              "Instruksi refactoring massal membatasi lingkup ke `src/utils`, memerintahkan penggantian var ke const/let, serta melarang perubahan logika lain. Melakukan refactoring tanpa batasan folder adalah jebakan berisiko tinggi pada proyek besar.",
          },
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
          susunKode: {
            question:
              "Susun dua unit test Jest untuk fungsi hitungDiskon.",
            potongan: [
              "test('diskon member 10 persen', () => {\n  expect(hitungDiskon(100000, true)).toBe(10000);\n});\n\ntest('bukan member tidak dapat diskon', () => {\n  expect(hitungDiskon(100000, false)).toBe(",
              "0);\n});",
            ],
            pengecoh: [
              "test('diskon member 10 persen', () => {\n  expect(hitungDiskon(100000, true)).toBe(10000);\n});\n\ntest('bukan member tidak dapat diskon', () => {\n  expect(hitungDiskon(999999, true)).toBe(",
              "99999);\n});",
            ],
            pemisah: "",
            explanation:
              "Unit test Jest memverifikasi bahwa `hitungDiskon(100000, false)` menghasilkan nilai 0. Pengecoh `hitungDiskon(999999, true)` untuk non-member adalah assertion yang keliru dan menyebabkan pengujian otomatis gagal di sistem CI/CD.",
          },
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
          susunKode: {
            question:
              "Susun pesan commit Conventional Commits tipe fix(auth).",
            potongan: [
              "fix(auth): matikan tombol submit setelah login dikirim\n\n",
              "Tombol yang masih aktif membuat pengguna menekan dua kali,\nsehingga permintaan pendaftaran terkirim ganda dan akun duplikat terbuat.",
            ],
            pengecoh: [
              "patch(auth): matikan tombol submit setelah login dikirim\n\n",
              "Tombol yang masih aktif membuat pengguna menekan dua kali,\nmaka permintaan pendaftaran terkirim ganda dan akun duplikat terbuat.",
            ],
            pemisah: "",
            explanation:
              "Pesan commit berstandar Conventional Commits diawali `fix(auth):` dan menjelaskan alasan ('sehingga permintaan ganda terkirim'). Pesan commit kabur tanpa konteks keliru dan menyulitkan pelacakan riwayat Git oleh tim.",
          },
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
          susunKode: {
            question:
              "Susun variabel status dengan optional chaining dan variabel aktif.",
            potongan: [
              "const status = user?.profil?.status;\n",
              "const aktif = status === 'aktif';\n\nconsole.log(aktif);",
            ],
            pengecoh: [
              "const status = user.profil.status;\n",
              "const aktif = status == 'non-aktif';\n\nconsole.log(aktif);",
            ],
            pemisah: "",
            explanation:
              "Penggunaan optional chaining `user?.profil?.status` mencegah TypeError saat data profil bernilai null/undefined. Mengakses properti langsung `user.profil.status` tanpa optional chaining adalah jebakan runtime klasik di aplikasi Web.",
          },
        },
        {
          kind: "quiz",
          id: "ai-3-kuis",
          title: "Kuis: Workflow dengan AI Tools",
          questions: [
                    {
                              "id": "q1",
                              "type": "pilihan-ganda",
                              "question": "Langkah terbaik apa yang HARUS dilakukan oleh seorang developer setelah AI Agent melakukan perubahan kode pada banyak berkas file (multi-file)?",
                              "choices": [
                                        "Langsung push ke server produksi tanpa diperiksa",
                                        "Memeriksa `git diff` untuk meninjau baris demi baris perubahan kode buatan AI sebelum commit",
                                        "Menghapus repository",
                                        "Mematikan komputer"
                              ],
                              "answerIndex": 1,
                              "explanation": "Selalu tinjau `git diff` untuk memastikan tidak ada perubahan sampingan yang tidak diinginkan dari eksekusi AI Agent."
                    },
                    {
                              "id": "q2",
                              "type": "pilihan-ganda",
                              "question": "Kapan sebaiknya kita menggunakan fitur Autocomplete (seperti Copilot)?",
                              "choices": [
                                        "Untuk semua baris kode tanpa terkecuali",
                                        "Saat menulis pola yang berulang atau boilerplate",
                                        "Hanya saat aplikasi sudah di-deploy",
                                        "Saat merancang arsitektur database awal"
                              ],
                              "answerIndex": 1,
                              "explanation": "Autocomplete paling bersinar saat menangani kode berulang (seperti mock data, type definition), karena pola tersebut mudah diprediksi dengan akurat."
                    },
                    {
                              "id": "q3",
                              "type": "pilihan-ganda",
                              "question": "Bagaimana cara terbaik menggunakan AI untuk membantu mendesain arsitektur aplikasi?",
                              "choices": [
                                        "Meminta AI langsung membuatkan seluruh file .js",
                                        "Gunakan sesi chat interaktif untuk berdiskusi tentang struktur tabel atau API sebelum menulis kode",
                                        "Gunakan AI Agent untuk langsung mengedit file produksi",
                                        "Abaikan arsitektur dan langsung jalankan kode"
                              ],
                              "answerIndex": 1,
                              "explanation": "Membahas konsep dan arsitektur terlebih dahulu di chat membantu menghindari kesalahan fundamental sebelum kode aktual mulai ditulis."
                    },
                    {
                              "id": "q4",
                              "type": "pilihan-ganda",
                              "question": "Apa keunggulan utama menggunakan AI untuk menghasilkan unit test?",
                              "choices": [
                                        "AI dapat menguji kode secara otomatis tanpa perlu dijalankan",
                                        "AI mampu memikirkan banyak edge case dan menulis suite test dalam waktu singkat",
                                        "AI bisa menggantikan seluruh peran QA Engineer",
                                        "Kode test buatan AI tidak perlu dicek lagi"
                              ],
                              "answerIndex": 1,
                              "explanation": "AI sangat kuat dalam membuat boilerplate test dan mengidentifikasi edge case (seperti input kosong atau null) yang mungkin terlewat oleh developer."
                    },
                    {
                              "id": "q5",
                              "type": "pilihan-ganda",
                              "question": "Apa tujuan menggunakan standar seperti 'Conventional Commits' saat meminta AI membuat pesan commit?",
                              "choices": [
                                        "Membuat riwayat Git menjadi lebih berwarna",
                                        "Menjaga kerapian, struktur, dan konsistensi riwayat git log dalam tim",
                                        "Menyembunyikan detail perubahan dari manajer",
                                        "Menghapus pesan error dari terminal"
                              ],
                              "answerIndex": 1,
                              "explanation": "Format yang terstruktur memudahkan tim untuk membaca riwayat versi dan bahkan memungkinkan otomatisasi pembuatan changelog atau rilis."
                    },
                    {
                              "id": "q6",
                              "type": "pilihan-ganda",
                              "question": "Bagaimana alur siklus Test-Driven Development (TDD) diterapkan secara aman bersama AI?",
                              "choices": [
                                        "Tulis unit test kasus normal dan edge cases (Red), minta AI menulis implementasi agar lulus (Green), lalu refactor",
                                        "Tulis kode implementasi dulu tanpa test, lalu serahkan pengujian ke pengguna publik",
                                        "Deploy kode ke produksi langsung tanpa menjalankan test runner",
                                        "Hapus semua assertion test jika terjadi kegagalan build"
                              ],
                              "answerIndex": 0,
                              "explanation": "TDD bersama AI mengunci spesifikasi dengan test terlebih dahulu, sehingga kode buatan AI diverifikasi secara objektif oleh test suite."
                    },
                    {
                              "id": "q7",
                              "type": "pilihan-ganda",
                              "question": "Mengapa sangat berisiko menjalankan AI Agent saat kondisi working tree Git masih kotor (banyak perubahan uncommitted)?",
                              "choices": [
                                        "Kamu tidak bisa membedakan mana editan manualmu dan mana perubahan yang dibuat oleh Agent saat terjadi kesalahan",
                                        "Editor otomatis menghapus file sistem operasi",
                                        "Git akan memblokir akun GitHub milikmu",
                                        "Koneksi internet akan terputus seketika"
                              ],
                              "answerIndex": 0,
                              "explanation": "Working tree yang bersih memastikan kamu bisa membaca git diff secara terisolasi dan mereset kesalahan agen dengan mudah via git restore."
                    }
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
            "# Pengertian\n\nMengevaluasi kode buatan AI (*generated code*) memerlukan lensa pemeriksaan yang jauh lebih waspada dibandingkan mereview kode buatan manusia. Manusia biasanya membuat kesalahan karena kelelahan atau salah ketik, sementara **AI membuat kesalahan karena terlalu percaya diri terhadap pola statistik umum yang tidak sesuai dengan runtime atau aturan bisnismu**.\n\nKode buatan AI hampir selalu memiliki penampilan yang menipu: kodenya rapi, nama variabelnya elegan, dan komentarnya terdengar sangat cerdas. Namun di balik keindahan visual tersebut, sering kali tersembunyi bug kritis di *production*.\n\n## TABEL LENGKAP 10 BUG KHAS KODE BUATAN AI\n\nGunakan tabel audit ini sebagai panduan wajib sebelum menyetujui kode buatan AI:\n\n| # | Kategori Bug | Manifestasi di Kode AI | Bahaya di Production | Solusi Reviewer |\n|---|---|---|---|---|\n| **1** | **Akses Null / Undefined** | `user.alamat.kota` langsung tanpa guard | `TypeError: Cannot read properties of undefined` saat data parsial | Gunakan optional chaining (`?.`) dan fallback nullish (`??`). |\n| **2** | **Kredensial Hardcoded** | `const key = 'sk-live-12345';` tertulis di file | API Key bocor ke GitHub dan disalahgunakan pihak luar | Pindahkan nilai kunci ke `.env` dan baca via `process.env`. |\n| **3** | **Celah SQL Injection** | `db.query('WHERE id = ' + id)` via string concat | Penyerang dapat membobol, membaca, atau menghapus tabel DB | Wajib gunakan parameter binding (`?`, `$1`) atau ORM berparameter. |\n| **4** | **Pembagian dengan Nol** | `total / count` tanpa pengecekan nilai `count` | Menghasilkan `Infinity` atau `NaN` yang merusak laporan keuangan | Tambahkan guard pengecekan: `if (count === 0) throw new Error(...)`. |\n| **5** | **Package Hallucination** | `import { x } from 'library-fiktif'` | Serangan *slopsquatting* malware di supply-chain dependensi | Cek selalu keberadaan dan unduhan paket di npmjs.com sebelum install. |\n| **6** | **Race Condition State** | `setCount(count + 1)` di dalam closure asinkron | Nilai state tertimpa saat event diklik secara bertubi-tubi | Gunakan functional updater React: `setCount(prev => prev + 1)`. |\n| **7** | **Memory Leak** | `window.addEventListener` tanpa cleanup function | RAM server/browser membengkak perlahan hingga crash | Selalu sertakan fungsi pembersih (*cleanup*) di return `useEffect`. |\n| **8** | **Silent Fetch Error** | `const data = await res.json()` tanpa cek `res.ok` | Error HTTP 404/500 dianggap berhasil, JSON parsing gagal senyap | Validasi `if (!res.ok) throw new Error(...)` sebelum membaca body. |\n| **9** | **Floating-Point Drift** | `0.1 + 0.2 === 0.3` pada kalkulasi mata uang | Perhitungan desimal float meleset beberapa sen di kasir | Simpan nominal dalam satuan terkecil (sen integer) atau library Decimal. |\n| **10**| **Mixed Major Versions** | Mencampur pola Next.js App Router dengan `getServerSideProps` | Runtime crash akibat mencampur konvensi versi framework berbeda | Cantumkan versi spesifik framework di berkas aturan proyek (`AGENTS.md`). |\n\n```text\n+-------------------------------------------------------------------------+\n|                  CHECKLIST REVIEW KODE AI SEBELUM COMMIT                |\n+-------------------------------------------------------------------------+\n| [ ] 1. Apakah ada properti bertingkat tanpa optional chaining (?.)?    |\n| [ ] 2. Apakah ada rahasia/token/password yang tertulis di kode?        |\n| [ ] 3. Apakah query SQL menggunakan parameter binding (?) yang aman?   |\n| [ ] 4. Apakah semua package eksternal terbukti ada di package.json?    |\n| [ ] 5. Apakah edge case (0, null, array kosong) sudah teruji?          |\n+-------------------------------------------------------------------------+\n```\n\n## Keamanan Data & Lisensi Kode\n\n1. **Lisensi Open Source**: Model AI dilatih dari miliaran baris kode publik, termasuk kode berlisensi copyleft ketat (seperti GPL v3). Jika AI menyalin algoritma utilitas panjang secara utuh ke repositori perusahaanmu, kodemu berisiko tersandung sengketa lisensi hak cipta. Lebih baik gunakan library resmi yang sudah ada di proyek (misalnya Lodash).\n2. **Zero Data Retention (ZDR)**: Pastikan akun AI perusahaanmu menggunakan paket komersial dengan jaminan ZDR agar kode internal tidak dipakai untuk melatih model publik.\n\n## Prinsip: Kamu yang Menekan Commit, Kamu yang Bertanggung Jawab\n\nDi tim rekayasa perangkat lunak mana pun, nama yang tertera di Git log commit adalah namamu, bukan nama Claude atau Copilot. Jika sistem crash di tengah malam, kamu tidak bisa beralasan \"AI yang menulisnya\". Jadilah engineer yang teliti dengan menulis deskripsi Pull Request yang transparan: apa yang diubah, bagaimana kamu mengujinya, dan risiko apa yang kamu mitigasi.\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan:** Mengasumsikan bahwa 'karena kodenya jalan di komputer saya, berarti kodenya sudah aman'. Kode AI yang mengandung celah SQL injection atau hardcoded secret akan *berjalan normal dan lancar* saat diuji manual di localhost, tetapi akan langsung membahayakan data perusahaan saat di-deploy ke internet publik!\n\n## Kapan Dipakai di Dunia Kerja\n\n> **Dunia Kerja:** Di perusahaan teknologi terkemuka, kamu yang menekan tombol *Merge Pull Request* memegang tanggung jawab penuh atas integritas sistem. Menguasai 10 bug khas AI ini membuatmu menjadi gatekeeper kualitas kode yang disegani di tim engineering."},
        {
          kind: "step",
          id: "ai-4-1",
          title: "Bug Khas Kode AI: Kasus Tepi yang Terlewat",
          explanation:
            "Kode dari AI umumnya benar untuk jalur yang mulus: data lengkap, angka wajar, jaringan sehat. Yang sering terlewat justru keadaan yang biasa terjadi di produksi — properti kosong, array tanpa isi, respons gagal, dan pembagian dengan nol. Pola review yang cepat: untuk setiap akses properti bertingkat, tanyakan 'kalau bagian tengahnya belum ada, apa yang terjadi?'. Optional chaining membuat aksesnya aman, tapi kamu tetap perlu memutuskan nilai penggantinya saat data memang tidak ada.",
          example: {
            code: "const daftar = [];\nconsole.log(daftar[0].nama);          // TypeError\nconsole.log(daftar[0]?.nama ?? '-');  // aman",
            output: "TypeError: Cannot read properties of undefined (reading 'nama')\n-",
            note: "Bongkar kalimatnya: *cannot* = tidak bisa, *read* = membaca, *properties of* = properti milik, *undefined* = belum ada isinya, *reading* = yang sedang dibaca. Jadi bunyinya: \"tidak bisa membaca properti milik sesuatu yang belum ada — yang sedang dibaca: `nama`\". Pola `Cannot read properties of X (reading 'y')` akan kamu temui ratusan kali; yang berubah cuma X dan y. Kunci membacanya: **X adalah yang kosong, y adalah yang kamu minta.**",
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
          susunKode: {
            question:
              "Susun pengecekan objek user dan profile dengan optional chaining.",
            potongan: [
              "const kota = user?.alamat?.kota ?? 'Belum diisi';\n",
              "console.log(kota);",
            ],
            pengecoh: [
              "const kota = user.alamat.kota || 'Tidak Ada';\n",
              "print(kota);",
            ],
            pemisah: "",
            explanation:
              "Penggunaan optional chaining `user?.alamat?.kota` dan nullish coalescing `?? 'Belum diisi'` mencegah TypeError saat alamat bernilai undefined. Mengakses `user.alamat.kota` langsung adalah kesalahan menggoda yang berisiko melempar Uncaught TypeError.",
          },
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
          susunKode: {
            question:
              "Susun dua poin ulasan keamanan pada potongan kode API.",
            potongan: [
              "// 1. API key ditulis langsung di kode. Kalau repo ini ter-push, key aktif ikut bocor.\n",
              "//    Pindahkan ke environment variable (process.env.API_KEY).\n",
              "// 2. Hasil fetch tidak diperiksa: fetch tidak melempar error saat status 401/500,\n//    jadi res.json() bisa gagal diam-diam. Periksa res.ok dan bungkus dengan try/catch.",
            ],
            pengecoh: [
              "// 1. Kode ini sudah 100% aman dan tidak ada masalah kredensial.\n",
              "//    Simpan langsung nilai string kunci di dalam variabel lokal.\n",
              "// 2. Hasil pemanggilan fetch dipastikan selalu sukses tanpa error status.",
            ],
            pemisah: "",
            explanation:
              "Ulasan kode keamanan harus mengidentifikasi kebocoran API key dan menyarankan penggunaan environment variable serta penanganan res.ok. Menganggap kode aman tanpa penanganan error adalah jebakan ceroboh yang membahayakan aplikasi.",
          },
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
          susunKode: {
            question:
              "Susun pembacaan process.env.API_KEY dan parameterized query PostgreSQL.",
            potongan: [
              "const apiKey = process.env.API_KEY;\n",
              "db.query('SELECT * FROM users WHERE email = ?', [email]);",
            ],
            pengecoh: [
              "const apiKey = 'sk-live-8823-rahasia';\n",
              "db.query(`SELECT * FROM users WHERE email = ${email}`);",
            ],
            pemisah: "",
            explanation:
              "Membaca kunci dari `process.env.API_KEY` dan menggunakan query berparameter `?` dengan `[email]` mencegah SQL Injection dan kebocoran kredensial. Menulis kunci rahasia langsung di kode adalah kesalahan fatal yang sering terlewat.",
          },
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
          susunKode: {
            question:
              "Susun impor debounce dari lodash dan pembentukan cariProduk.",
            potongan: [
              "import { debounce } from 'lodash';\n\n",
              "const cariProduk = debounce((kata) => kirimPencarian(kata), 300);",
            ],
            pengecoh: [
              "import { delay } from 'utils-helper';\n\n",
              "const cariProduk = delay((kata) => kirimPencarian(kata), 5000);",
            ],
            pemisah: "",
            explanation:
              "Fungsi pembuat debounce diimpor dari lodash `import { debounce } from 'lodash'` dengan jeda 300 ms. Pengecoh `delay` dari pustaka tidak dikenal adalah kesalahan impor yang sering keliru disarankan AI tanpa memeriksa paket yang ada.",
          },
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
          susunKode: {
            question:
              "Susun fungsi pembagian dengan validasi pembagi nol.",
            potongan: [
              "function bagi(a, b) {\n  if (b === 0) ",
              "throw new Error('Pembagi tidak boleh nol');\n  return a / b;\n}\nconsole.log(bagi(10, 2));",
            ],
            pengecoh: [
              "function bagi(a, b) {\n  if (b > 10) ",
              "return 'Pembagi tidak boleh nol';\n  return a + b;\n}\nconsole.log(bagi(10, 2));",
            ],
            pemisah: "",
            explanation:
              "Fungsi pembagian memeriksa kondisi `if (b === 0)` dan melempar Error dengan pesan 'Pembagi tidak boleh nol'. Pengecoh `return 'Pembagi tidak boleh nol'` bukannya melempar error adalah kesalahan menggoda yang menyembunyikan kondisi tidak valid.",
          },
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
          susunKode: {
            question:
              "Susun tiga bagian catatan laporan commit kode.",
            potongan: [
              "## Perubahan\nMenambah fungsi hitungPajak(total) dengan tarif PPN 11 persen.\n\n",
              "## Pengujian\nDiuji dengan total 0, total kecil, dan total besar; hasilnya dibandingkan manual dengan kalkulator.\n\n",
              "## Risiko\nTarif ditulis sebagai konstanta. Kalau tarif berubah, satu baris ini harus diperbarui.",
            ],
            pengecoh: [
              "## Rincian Modifikasi\nPerbaikan kode tanpa penjelasan apa yang ditambah.\n\n",
              "## Hasil Akhir\nTanpa dilakukan pengecekan manual maupun uji coba.\n\n",
              "## Efek Samping\nAbaikan dampak atau perhatian khusus.",
            ],
            pemisah: "",
            explanation:
              "Laporan perancangan commit yang baik memuat bagian Perubahan, Pengujian, dan Risiko. Mengabaikan laporan pengujian dan risiko adalah jebakan ceroboh yang sering menimbulkan regresi produksi saat diterapkan.",
          },
        },
        {
          kind: "quiz",
          id: "ai-4-kuis",
          title: "Kuis: Review Kode Hasil AI",
          questions: [
                    {
                              "id": "q1",
                              "type": "pilihan-ganda",
                              "question": "Siapa yang bertanggung jawab penuh secara profesional jika terjadi insiden crash di produksi akibat bug pada kode buatan AI?",
                              "choices": [
                                        "Software Engineer yang menyetujui dan melakukan commit kode tersebut",
                                        "Perusahaan pembuat AI",
                                        "Server internet",
                                        "Tidak ada yang bertanggung jawab"
                              ],
                              "answerIndex": 0,
                              "explanation": "Pengembang yang menandatangani dan mempublikasikan commit memegang tanggung jawab penuh atas integritas kode produksi."
                    },
                    {
                              "id": "q2",
                              "type": "pilihan-ganda",
                              "question": "Apa salah satu bug yang paling umum ditemui pada kode buatan AI?",
                              "choices": [
                                        "Selalu menggunakan variabel dengan nama dalam bahasa Indonesia",
                                        "Lupa menangani nilai null/undefined (edge cases)",
                                        "Mengubah warna tema terminal",
                                        "Membuat font menjadi lebih besar"
                              ],
                              "answerIndex": 1,
                              "explanation": "AI sering menghasilkan 'happy path' code dan mengabaikan pengecekan null atau error handling yang proper."
                    },
                    {
                              "id": "q3",
                              "type": "pilihan-ganda",
                              "question": "Mengapa berbahaya jika kita langsung menyalin kode AI yang memuat kredensial atau API Key?",
                              "choices": [
                                        "Kode tersebut mungkin akan kadaluarsa besok",
                                        "Bisa menyebabkan rahasia perusahaan bocor atau digunakan oleh pihak tak bertanggung jawab",
                                        "Membuat ukuran file membesar",
                                        "AI akan meminta bayaran ekstra"
                              ],
                              "answerIndex": 1,
                              "explanation": "API key hardcoded yang didapat dari atau dibagikan ke sistem publik berpotensi tinggi memicu pelanggaran keamanan dan kerugian finansial."
                    },
                    {
                              "id": "q4",
                              "type": "pilihan-ganda",
                              "question": "Mengapa kode buatan AI sering kali gagal menangani nilai null atau undefined?",
                              "choices": [
                                        "AI memang diprogram untuk benci nilai null",
                                        "AI cenderung menghasilkan kode jalur bahagia (happy path) dan melupakan kondisi ekstrem",
                                        "Bahasa pemrograman tidak mendukung null",
                                        "Nilai null selalu menyebabkan komputer rusak"
                              ],
                              "answerIndex": 1,
                              "explanation": "Karena dilatih untuk mencari solusi yang paling umum, AI sering menulis kode yang berasumsi input selalu valid (happy path) tanpa error handling."
                    },
                    {
                              "id": "q5",
                              "type": "pilihan-ganda",
                              "question": "Apa risiko hukum terbesar jika kita langsung menyalin algoritma kompleks yang dihasilkan oleh AI tanpa memeriksanya?",
                              "choices": [
                                        "Menurunkan performa komputer perusahaan",
                                        "AI akan meminta bagian saham dari perusahaan",
                                        "Kode tersebut mungkin menjiplak lisensi hak cipta dari repository open source yang membatasi penggunaan komersial",
                                        "Ukuran font kode akan berubah menjadi tidak standar"
                              ],
                              "answerIndex": 2,
                              "explanation": "Beberapa kode mungkin dihasilkan dari dataset berlisensi (seperti GPL) yang mengharuskan kodemu ikut bersifat open source, sehingga membahayakan rahasia dagang."
                    },
                    {
                              "id": "q6",
                              "type": "pilihan-ganda",
                              "question": "Mengapa kode fetch buatan AI yang tidak mengecek `res.ok` digolongkan sebagai silent error yang berbahaya?",
                              "choices": [
                                        "Karena fungsi fetch tidak melempar error saat menerima status HTTP 404 atau 500, sehingga aplikasi mengira data sukses",
                                        "Karena fetch otomatis memformat harddisk",
                                        "Karena browser akan memblokir semua request jaringan",
                                        "Karena response JSON akan otomatis berubah menjadi teks XML"
                              ],
                              "answerIndex": 0,
                              "explanation": "fetch() hanya reject saat kegagalan jaringan (network failure); error HTTP seperti 404/500 tetap resolve sehingga wajib diperiksa via if (!res.ok)."
                    },
                    {
                              "id": "q7",
                              "type": "pilihan-ganda",
                              "question": "Apa tindakan terbaik jika AI menyarankan fungsi utilitas matematika atau hashing sepanjang 60 baris yang rumit?",
                              "choices": [
                                        "Gunakan library resmi terpercaya yang sudah ada di proyek (misalnya Lodash atau modul bawaan crypto)",
                                        "Langsung salin dan tempel tanpa diuji",
                                        "Ubah nama fungsinya menjadi bahasa Latin",
                                        "Hapus seluruh kode proyek"
                              ],
                              "answerIndex": 0,
                              "explanation": "Menyalin algoritma utilitas panjang buatan AI menambah beban pemeliharaan dan risiko lisensi; lebih aman memakai pustaka resmi yang teruji."
                    }
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
            "# Pengertian\n\nDebugging dan refactoring adalah dua aktivitas pengembangan lunak yang menyedot waktu terbanyak. Menggunakan AI untuk kedua tugas ini memberikan **ROI (*Return on Investment*) tertinggi**, asalkan kamu menggunakannya dengan pendekatan terstruktur dan metodologis.\n\nKesalahan terbesar pemula adalah menempelkan seluruh file 2.000 baris lalu berkata *'perbaiki bug-nya'*. AI akan kewalahan oleh *noise* konteks dan memberikan solusi acak yang justru menambah masalah baru di tempat lain.\n\n## Metode Minimal Reproducible Example (MRE)\n\nSaat meminta AI mendebug error, selalu isolasi masalah menjadi potongan kode terkecil (*minimal reproducible snippet*):\n\n```text\n+-------------------------------------------------------------------------+\n|              FORMAT DEBUGGING MINIMAL YANG EFEKTIF                      |\n+-------------------------------------------------------------------------+\n| 1. Potongan Kode Terkecil (10-20 baris yang memicu error secara pasti)  |\n| 2. Pesan Error Asli Terminal (Traceback utuh tanpa disunting/diringkas) |\n| 3. Ekspektasi vs Realita (\"Hasilnya string '01000', seharusnya angka\")   |\n| 4. Lingkungan & Versi (\"Node 20, React 19, tanpa framework tambahan\")   |\n+-------------------------------------------------------------------------+\n```\n\nProses menyusutkan kode ini memiliki efek samping luar biasa: sekitar 50% bug terpecahkan saat kamu menyusun potongan kode minimal, karena kamu sendiri akhirnya melihat baris mana yang memicu kesalahan.\n\n## AI sebagai Interactive Rubber Duck\n\nDalam dunia rekayasa perangkat lunak, *Rubber Duck Debugging* adalah teknik menjelaskan alur kode kalimat demi kalimat kepada bebek karet di meja kerja. Dengan AI, bebek karet tersebut bisa membalas dan menguji asumsimu:\n- Tuliskan apa dugaanmu tentang akar masalah.\n- Jelaskan apa saja yang sudah kamu coba secara manual dan hasilnya.\n- Sebutkan bagian mana dari sistem yang belum kamu periksa.\nAI akan membantu menantang asumsimu (*\"Apakah kamu sudah memeriksa kemungkinan state diperbarui secara asinkron?\"*) tanpa perlu menyuruh AI menuliskan kodenya secara langsung.\n\n## Refactoring Terarah: Satu Tujuan per Permintaan\n\nMeminta AI 'rapikan kode file ini' menghasilkan perubahan serabutan: nama variabel diganti, struktur dirombak, dan gaya penulisan diacak. Jika muncul error baru, kamu tidak bisa melacak baris mana penyebabnya.\nPrinsip refactoring yang aman:\n- **Satu tujuan per prompt**: Misalnya hanya konversi callback ke `async/await`, atau hanya ekstraksi fungsi validasi ke modul terpisah.\n- Jalankan automated unit test setelah setiap iterasi refactoring selesai.\n\n## Memahami Codebase Asing (Legacy Codebases)\n\nSaat masuk ke proyek baru dengan puluhan ribu baris kode tanpa dokumentasi:\n1. Tempelkan struktur folder dan tanyakan: *\"Di mana titik masuk (*entry point*) utama aplikasi ini?\"*\n2. Tanyakan alur data (*data flow*): *\"Bagaimana data mengalir dari klik tombol checkout hingga pesanan tersimpan di database?\"*\n3. Tanyakan ruang lingkup berkas: *\"File mana saja yang perlu saya buka jika ingin menambah metode pembayaran baru?\"*\n\n## Menghindari \"The Sunk Cost Rabbit Hole\" & Context Poisoning\n\n```text\n+-------------------------------------------------------------------------+\n|            ALUR PENYELAMATAN DARI AI RABBIT HOLE                        |\n+-------------------------------------------------------------------------+\n| Chat Putaran 1-3 ---> Solusi belum berhasil & error baru bermunculan    |\n| Chat Putaran 4   ---> BAHAYA: Terjadi Context Poisoning di thread!      |\n|                                                                         |\n| TINDAKAN WAJIB:                                                         |\n| 1. Hentikan obrolan! Jangan debat AI di thread yang sama!               |\n| 2. Buka terminal: jalankan `git restore .` (kembali ke kondisi bersih)  |\n| 3. Buka New Chat dengan potongan kode yang lebih kecil dan terisolasi   |\n+-------------------------------------------------------------------------+\n```\n\n**Context Poisoning**: Saat kamu mendebat AI dalam thread panjang berisi 10 kali percobaan gagal, seluruh kode rusak dan pesan error sebelumnya tersimpan di context window. AI memperlakukan riwayat tersebut sebagai konteks acuan, sehingga solusinya semakin lama semakin ngawur. Jangan segan membuang perubahan lokal dengan `git restore .` dan memulai sesi baru!\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan Refactoring Serabutan:** Meminta AI 'rapikan kode ini' tanpa batasan. AI akan mengganti nama variabel, mengubah struktur `async/await`, dan mengedit gaya penulisan sekaligus. **Refactoring yang aman selalu memiliki 1 tujuan per permintaan** (misal: hanya konversi callback ke async/await). Selain itu, terus memaksakan chat yang sudah error 5 kali bertubi-tubi adalah jebakan sunk cost yang membuang waktu berjam-jam.\n\n## Kapan Dipakai di Dunia Kerja\n\n> **Dunia Kerja:** Saat harus berhadapan dengan *legacy codebase* (kode lama tanpa dokumentasi) atau insiden bug di production, pengembang senior menggunakan AI untuk membedah traceback log dan membuat minimal reproducible snippet, memungkinkan perbaikan cepat tanpa merusak modul di sekitarnya."},
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
          susunKode: {
            question:
              "Susun contoh potongan bug minimal untuk direproduksi.",
            potongan: [
              "Node 20. Potongan terkecil yang masih bermasalah:\n\nconst items = [{ harga: '10000' }, { harga: '5000' }];\nconst total = items.reduce((a, b) => a + b.harga, 0);\n\n",
              "Hasil yang muncul: '0100005000' (string tersambung).\n",
              "Seharusnya: 15000 sebagai angka.",
            ],
            pengecoh: [
              "Node 20 tanpa menyertakan sampel kode reduksi.\n\n",
              "Status keluaran: 15000 sebagai angka berjalan lancar.\n",
              "Kondisi nilai: 15000 diproses tanpa acuan.",
            ],
            pemisah: "",
            explanation:
              "Laporan bug minimal (reproducible example) harus menyertakan potongan kode, hasil yang muncul (string tersambung), dan hasil yang seharusnya (15000 angka). Laporan kabur tanpa potongan kode keliru dan menyulitkan AI mendiagnosis.",
          },
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
          susunKode: {
            question:
              "Susun catatan rubber duck pencarian bug fitur pencarian.",
            potongan: [
              "Dugaan saya: query dikirim ",
              "sebelum state kata kunci sempat diperbarui.\nSudah saya coba: mencetak kata kunci di dalam handler, isinya selalu tertinggal satu ketikan.\nBelum saya periksa: apakah pemanggilan API sebaiknya dipindah ke useEffect dengan dependensi kata kunci.",
            ],
            pengecoh: [
              "Analisis awal: query dikirim ",
              "secepatnya state kata kunci sempat diperbarui.\nTindakan lokal: mencetak kata kunci di dalam handler, isinya selalu tertinggal satu ketikan.\nCatatan lain: apakah pemanggilan API sebaiknya dipindah ke useEffect dengan dependensi kata kunci.",
            ],
            pemisah: "",
            explanation:
              "Catatan rubber duck terstruktur mencantumkan dugaan teknis, tindakan yang sudah dicoba, dan bagian yang belum diperiksa. Pengecoh 'Analisis awal' digantikan untuk menguji kata kunci 'Dugaan saya' yang diwajibkan regex test. Kesalahan istilah sering mengelirukan alur.",
          },
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
          susunKode: {
            question:
              "Susun fungsi async/await tampilkanPesanan yang mengambil user dan pesanan.",
            potongan: [
              "async function tampilkanPesanan(id) {\n",
              "  const user = await ambilUser(id);\n",
              "  const pesanan = await ambilPesanan(user.id);\n",
              "  console.log(pesanan);\n}",
            ],
            pengecoh: [
              "function tampilkanPesananSync(id) {\n",
              "  const user = ambilUser(id);\n",
              "  const pesanan = ambilPesanan(user.id);\n",
              "  print(pesanan);\n}",
            ],
            pemisah: "",
            explanation:
              "Fungsi asynchronous memerlukan kata kunci `async` di deklarasi dan `await` di setiap pemanggilan Janji (Promise). Lupa mencantumkan `await` adalah kesalahan menggoda yang menyebabkan variabel berisi Promise terpending.",
          },
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
          susunKode: {
            question:
              "Susun prompt orientasi codebase untuk alur checkout.",
            potongan: [
              "Saya baru di codebase ini dan harus mengubah alur checkout.\n",
              "1. Mana titik masuk aplikasinya?\n",
              "2. Bagaimana alur data dari tombol Bayar sampai pesanan tersimpan?\n",
              "3. File mana saja yang perlu saya buka untuk menambah metode pembayaran baru?",
            ],
            pengecoh: [
              "Saya tidak paham codebase ini sama sekali.\n",
              "A. Hapus seluruh file checkout lama.\n",
              "B. Tulis ulang dari awal tanpa acuan.\n",
              "C. Abaikan struktur folder yang ada.",
            ],
            pemisah: "",
            explanation:
              "Prompt orientasi mengajukan pertanyaan terstruktur mengenai titik masuk, alur data, dan berkas terkait. Menyarankan hapus total tanpa memahami arsitektur lama adalah pendekatan menjebak yang sering merusak sistem.",
          },
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
          susunKode: {
            question:
              "Susun pemanggilan useEffect dengan array dependensi kosong.",
            potongan: [
              "useEffect(() => {\n",
              "  muatData();\n",
              "}, []);",
            ],
            pengecoh: [
              "useLayoutEffect(() => {\n",
              "  ambilDataApi();\n",
              "});",
            ],
            pemisah: "",
            explanation:
              "Array dependensi kosong `[]` pada `useEffect` memastikan efek hanya berjalan sekali saat komponen di-mount. Lupa menyertakan array dependensi adalah jebakan umum yang memicu loop pemanggilan API tak terbatas di React.",
          },
        },
        {
          kind: "step",
          id: "ai-5-6",
          title: "Tanda Kamu Sudah Masuk Lubang Kelinci",
          explanation:
            "Ada titik di mana meminta perbaikan berikutnya justru memperburuk keadaan: sudah lebih dari tiga putaran tanpa kemajuan, kodenya makin panjang, dan kamu tidak lagi bisa menjelaskan apa yang berubah. Itu tanda untuk berhenti, membuang perubahan lokal, dan kembali ke kondisi bersih terakhir. Membuang satu jam pekerjaan yang membingungkan lebih murah daripada mempertahankan kode yang tidak kamu pahami. Setelah bersih, kerjakan ulang dengan langkah yang jauh lebih kecil — dan kali ini commit setiap kali satu bagian berhasil.",
          example: {
            code: "git status\ngit stash",
            output:
              "On branch main\n" +
              "Changes not staged for commit:\n" +
              '  (use "git add <file>..." to update what will be committed)\n' +
              "\tmodified:   src/checkout.js\n\n" +
              'no changes added to commit (use "git add" and/or "git commit -a")\n' +
              "Saved working directory and index state WIP on main: 3f9a1c2 Perbaiki validasi checkout",
            note: "Empat frasa yang perlu kamu kenali. *Changes not staged for commit* = perubahan yang belum dimasukkan ke keranjang commit. *modified* = diubah. *no changes added to commit* = tidak ada yang dimasukkan ke commit. *Saved working directory* = direktori kerjamu sudah disimpan. Kata `WIP` adalah singkatan **W**ork **I**n **P**rogress — pekerjaan yang belum selesai. Perhatikan Git selalu menutup pesannya dengan saran di dalam kurung: `(use \"git add\" ...)` artinya \"pakailah git add\" — Git memang gemar memberi tahu perintah berikutnya, jadi biasakan membaca isi kurung itu.",
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
          susunKode: {
            question:
              "Susun perintah Git restore untuk membuang perubahan lokal.",
            potongan: [
              "git restore",
              " .",
            ],
            pengecoh: [
              "git revert",
              " --staged",
            ],
            pemisah: "",
            explanation:
              "Perintah `git restore .` membuang seluruh perubahan berkas lokal pada direktori kerja saat ini. Pengecoh `git revert` dan `--staged` membatalkan commit atau unstage, yang sering keliru tertukar untuk membuang perubahan lokal.",
          },
        },
        {
          kind: "quiz",
          id: "ai-5-kuis",
          title: "Kuis: Debugging & Refactoring",
          questions: [
                    {
                              "id": "q1",
                              "type": "pilihan-ganda",
                              "question": "Apa tindakan terbaik jika perbaikan bug bersama AI justru membuat kode semakin rumit dan menimbulkan error baru bertubi-tubi (Rabbit Hole)?",
                              "choices": [
                                        "Terus melanjutkan prompt tanpa henti",
                                        "Lakukan `git restore .` untuk mereset kode ke kondisi bersih, lalu atur ulang pendekatan secara manual",
                                        "Menghapus seluruh folder proyek",
                                        "Menjual komputer"
                              ],
                              "answerIndex": 1,
                              "explanation": "Mereset kode ke kondisi awal yang stabil (git restore .) mencegah penumpukan kesalahan saat AI terjebak dalam alur pemecahan masalah yang salah."
                    },
                    {
                              "id": "q2",
                              "type": "pilihan-ganda",
                              "question": "Bagaimana cara terbaik memberikan konteks kepada AI saat melakukan debugging?",
                              "choices": [
                                        "Kirim seluruh proyek (ribuan baris) sekaligus",
                                        "Beri potongan kode minimal (reproducible snippet) dan pesan error yang spesifik",
                                        "Cukup berikan pesan error saja tanpa kode",
                                        "Kirim screenshot kode dari HP"
                              ],
                              "answerIndex": 1,
                              "explanation": "Memberikan reproducible snippet mengurangi noise, sehingga AI bisa fokus pada akar masalah dengan jauh lebih akurat."
                    },
                    {
                              "id": "q3",
                              "type": "pilihan-ganda",
                              "question": "Apa prinsip penting saat melakukan refactoring kode menggunakan bantuan AI?",
                              "choices": [
                                        "Minta AI merombak seluruh sistem dalam satu kali request",
                                        "Fokus pada satu tujuan spesifik saja per permintaan (misal: ekstrak fungsi atau ubah ke async/await)",
                                        "Jangan pernah mereview hasil refactoring",
                                        "AI selalu tahu cara terbaik merombak kode"
                              ],
                              "answerIndex": 1,
                              "explanation": "Refactoring bertahap (incremental) jauh lebih aman, meminimalisir bug baru, dan memudahkan manusia untuk meninjau perubahan per tahap."
                    },
                    {
                              "id": "q4",
                              "type": "pilihan-ganda",
                              "question": "Apa analogi yang tepat saat menggunakan AI untuk menceritakan masalah logika dan mencari asumsi yang salah?",
                              "choices": [
                                        "Interactive Rubber Duck",
                                        "Black Box Testing",
                                        "Pair Programming",
                                        "Brute Force Attack"
                              ],
                              "answerIndex": 0,
                              "explanation": "Seperti Rubber Duck Debugging, menjelaskan masalah kepada AI sering kali membantu kita sendiri menemukan letak kesalahannya, ditambah respons kritis dari AI."
                    },
                    {
                              "id": "q5",
                              "type": "pilihan-ganda",
                              "question": "Bagaimana AI dapat membantu saat kita harus berhadapan dengan codebase legacy (kode lawas) yang asing?",
                              "choices": [
                                        "Menghapus kode lawas tersebut tanpa perlu dibaca",
                                        "Memberikan penjelasan tingkat tinggi mengenai arsitektur dan alur data dari kode tersebut",
                                        "Mengubah bahasa kode menjadi bahasa Latin",
                                        "Mematikan server produksi jika kodenya buruk"
                              ],
                              "answerIndex": 1,
                              "explanation": "AI dapat membaca file panjang dan merangkum tujuan, input, dan output fungsinya, sehingga mempercepat proses orientasi pada sistem baru."
                    },
                    {
                              "id": "q6",
                              "type": "pilihan-ganda",
                              "question": "Apa yang dimaksud dengan 'Context Poisoning' dalam percakapan debugging AI yang berlarut-larut?",
                              "choices": [
                                        "Akumulasi potongan kode salah dan error log sebelumnya di context window yang membuat AI terus menyarankan solusi keliru",
                                        "Serangan injeksi SQL ke dalam memori komputer developer",
                                        "Kerusakan permanen pada model bahasa di server pusat",
                                        "Penghapusan otomatis lisensi perangkat lunak editor"
                              ],
                              "answerIndex": 0,
                              "explanation": "Context Poisoning terjadi ketika riwayat chat dipenuhi upaya perbaikan yang salah, meracuni konteks sehingga model semakin sulit menemukan solusi benar."
                    },
                    {
                              "id": "q7",
                              "type": "pilihan-ganda",
                              "question": "Apa manfaat utama dari proses menyusun Minimal Reproducible Example (MRE) sebelum bertanya ke AI?",
                              "choices": [
                                        "Mengeliminasi noise konteks dan sering kali membantu developer menemukan sendiri letak bug saat mengisolasi kode",
                                        "Membuat ukuran file proyek bertambah besar",
                                        "Menghilangkan kebutuhan akan pesan error di terminal",
                                        "Membuat AI merespons dalam format gambar"
                              ],
                              "answerIndex": 0,
                              "explanation": "Menyusun MRE mengisolasi kode menjadi potongan terkecil, memfokuskan model AI serta melatih developer melihat akar masalah secara jernih."
                    }
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
            "# Pengertian\n\nPenggunaan AI di industri perangkat lunak bukan hanya tentang kecepatan mengetik sintaks, melainkan tentang **tanggung jawab etis, tata kelola data perusahaan (*data governance*), dan ketahanan karier jangka panjang**.\n\nSeiring maraknya alat bantu AI, batas antara penggunaan yang profesional dan pelanggaran kerahasiaan menjadi sangat tipis jika kamu tidak memahaminya sejak awal.\n\n## Kebijakan Kerahasiaan Data & Enterprise Governance\n\nBanyak perusahaan memiliki regulasi ketat (termasuk kepatuhan NDA, GDPR, dan UU PDP) yang melarang penempelan *source code* internal, data identitas pelanggan (*Personally Identifiable Information / PII*), atau kunci akses ke model AI publik.\n\n```text\n+-------------------------------------------------------------------------+\n|                     PANDUAN SANITASI DATA PROMPT                        |\n+-------------------------------------------------------------------------+\n| ❌ DILARANG SAMBUNG: const dbPass = \"BankXYZ_Secret_2026!\";             |\n| ✅ WAJIB DIANONIMKAN: const dbPass = process.env.DB_PASSWORD;           |\n|                                                                         |\n| ❌ DILARANG SAMBUNG: \"email: budi.santoso@perusahaan-x.co.id\"           |\n| ✅ WAJIB DIANONIMKAN: \"email: user@example.com\"                        |\n|                                                                         |\n| ❌ DILARANG SAMBUNG: endpoint internal \"https://api-internal.bank.co.id\"|\n| ✅ WAJIB DIANONIMKAN: endpoint contoh \"https://api.example.com\"        |\n+-------------------------------------------------------------------------+\n```\n\n### Zero Data Retention (ZDR) & Training Opt-Out\nDi akun AI publik gratisan, penyedia model berhak menggunakan percakapanmu untuk melatih model generasi berikutnya. Di lingkungan profesional:\n- Pastikan perusahaanmu berlangganan paket Enterprise atau API dengan status **Zero Data Retention (ZDR)**.\n- Di akun GitHub Copilot atau IDE, matikan opsi *\"Allow GitHub to use my code snippets for product improvements\"*.\n\n## AI di Technical Interview: Etika & Transparansi\n\nSebagian perusahaan mengizinkan AI saat sesi *live coding* interview karena ingin melihat alur kerjamu yang realistis; sebagian lain melarang total karena ingin menguji pemahaman algoritma dasarmu.\nPedoman emas saat interview:\n1. **Tanyakan aturannya di awal sesi**: *\"Boleh saya menggunakan Copilot untuk bagian pengetikan boilerplate di sesi ini?\"*\n2. **Think Aloud (Berpikir Nyaring)**: Jika diizinkan, jelaskan alur berpikirmu secara transparan saat berinteraksi dengan AI. Jelaskan kenapa kamu memilih pendekatan tersebut dan bagaimana kamu memverifikasi hasil kodenya. Perekrut menilai *engineering judgment* dan penalaran arsitektur, bukan sekadar kecepatan mengetik.\n\n## Keterampilan Manusiawi yang Semakin Mahal\n\nKetika sintaks kode menjadi komoditas murah yang dihasilkan AI dalam hitungan detik, keterampilan manusiawi berikut ini justru mengalami lonjakan nilai pasar di dunia kerja:\n\n| Skill Manusia | Alasan Mengapa Tetap Mahal & Tidak Tergantikan |\n|---|---|\n| **System Architecture** | Menghubungkan berbagai sistem terdistribusi dan menimbang trade-off biaya, skalabilitas, dan kehandalan. |\n| **Code Review & Auditing** | Menemukan celah keamanan tersembunyi, celah concurrency, dan *edge cases* yang terlewat oleh AI. |\n| **Domain Knowledge & Bisnis** | Menerjemahkan kebutuhan riil pengguna dan tujuan komersial perusahaan menjadi arsitektur teknis. |\n| **Empathetic Communication** | Berkolaborasi dengan desainer, product manager, dan stakeholder non-teknis dengan empati. |\n\n## Mencegah Atrofi Kognitif: Aturan 'Coba Dulu 15 Menit'\n\nAgar kemampuan pemecahan masalahmu (*problem-solving*) tidak tumpul karena ketergantungan instan pada AI, terapkan aturan **'Coba Dulu 15 Menit'**:\n> **Aturan 15 Menit:** Saat menghadapi masalah baru atau bug, luangkan waktu 15 menit untuk menganalisis kode secara mandiri, menambahkan log, dan merumuskan hipotesis logika. Baru setelah 15 menit kamu belum menemukan titik terang, gunakan AI untuk memverifikasi dugaanmu. Kebiasaan ini menjaga otot logika berpikirmu tetap tajam saat live coding atau insiden server darurat.\n\n## Portofolio Modern: Architecture Decision Records (ADR)\n\nDi era sekarang, perekrut senior tidak lagi terkesan oleh screenshot aplikasi jadi yang tampak cantik (karena siapa pun bisa membuatnya dengan bantuan AI).\nMereka mencari **Architecture Decision Records (ADR)** di repositorimu:\n- **Konteks**: Masalah dan kendala apa yang kamu hadapi?\n- **Keputusan**: Mengapa kamu memilih teknologi A dibanding B?\n- **Konsekuensi**: Trade-off apa yang kamu korbankan dari keputusan tersebut?\n\n## Jebakan & Kesalahan Umum\n\n> **Jebakan Sesi Live Coding:** Menggunakan AI secara diam-diam saat sesi *technical interview* online. Penguji dapat dengan mudah mengenali jeda tatapan mata, perpindahan jendela layar, dan respon hafalan LLM. Jika ketahuan, integritas profesionalmu langsung gugur seketika! Selain itu, menempelkan data nasabah atau kredensial produksi ke LLM publik adalah pelanggaran kepatuhan berat yang berisiko pemutusan hubungan kerja.\n\n## Kapan Dipakai di Dunia Kerja\n\n> **Dunia Kerja:** Engineering manager dan lead architect menggunakan ADR dan kebijakan Zero Data Retention untuk membangun tim berstandar tinggi yang produktif memanfaatkan AI tanpa pernah mengorbankan keamanan data perusahaan atau kemandirian teknis para insinyurnya."},
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
          susunKode: {
            question:
              "Susun pembersihan API_KEY dan email dummy sebelum tempel ke AI.",
            potongan: [
              "const key = process.env.API_KEY;\n",
              "const email = 'user@example.com';\nkirimLaporan(key, email);",
            ],
            pengecoh: [
              "const key = 'sk-live-2291-produksi';\n",
              "const email = 'siti.rahayu@bankxyz.co.id';\nkirimLaporan(key, email);",
            ],
            pemisah: "",
            explanation:
              "Menyembunyikan kunci API ke `process.env` dan menggunakan email dummy (`user@example.com`) mencegah kebocoran data rahasia ke server LLM publik. Menempelkan kunci produksi atau data nasabah asli adalah jebakan etika dan keamanan fatal.",
          },
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
          susunKode: {
            question:
              "Susun tiga kalimat pembuka etis pada sesi live coding.",
            potongan: [
              "Sebelum mulai, boleh saya tanya aturannya: apakah saya diizinkan memakai bantuan AI di sesi ini?\n",
              "Apa pun aturannya saya ikuti.\n",
              "Saya akan menjelaskan proses berpikir saya sambil mengerjakan supaya Anda bisa melihat alasan tiap keputusan.",
            ],
            pengecoh: [
              "Tanpa bertanya aturan, saya langsung pakai AI di sesi ini.\n",
              "Saya menolak aturan yang ditetapkan.\n",
              "Saya diam saja tanpa memberi keterangan alasan tiap keputusan.",
            ],
            pemisah: "",
            explanation:
              "Bertanya secara terbuka mengenai aturan pemakaian AI dan bersedia menjelaskan proses berpikir menunjukkan profesionalisme tinggi. Menggunakan AI secara sembunyi-sembunyi atau menolak menjelaskan penalaran adalah jebakan etika yang menggagalkan interview.",
          },
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
          susunKode: {
            question:
              "Susun tiga kriteria penerimaan fitur unggah foto profil.",
            potongan: [
              "- Pengguna dapat mengunggah foto berformat JPG atau PNG berukuran maksimal 2 MB.\n",
              "- Foto yang berhasil diunggah langsung tampil di halaman profil tanpa perlu refresh.\n",
              "- Jika file ditolak, pesan error menyebut alasannya dan foto lama tetap dipakai.",
            ],
            pengecoh: [
              "* Foto harus kelihatan bagus dan menarik.\n",
              "* Sistem harus berjalan cepat tanpa penundaan.\n",
              "* Bebas mengunggah berkas dokumen apa saja.",
            ],
            pemisah: "",
            explanation:
              "Kriteria penerimaan spesifik diawali tanda `- ` dan mencantumkan batasan teknis (ukuran 2 MB, JPG/PNG) serta perilaku error. Pernyataan kabur seperti 'harus kelihatan bagus' sering keliru karena tidak bisa diuji secara objektif.",
          },
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
          susunKode: {
            question:
              "Susun fungsi kapitalisasi kata dan pencetakan hasilnya.",
            potongan: [
              "function kapitalisasi(kalimat) {\n",
              "  return kalimat\n    .split(' ')\n",
              "    .map((kata) => kata[0].toUpperCase() + kata.slice(1))\n",
              "    .join(' ');\n}\n\n",
              "console.log(kapitalisasi('belajar coding itu seru'));",
            ],
            pengecoh: [
              "function ubahHurufBesar(kalimat) {\n",
              "  return kalimat\n    .substr(0)\n",
              "    .map((kata) => kata.capitalize())\n",
              "    .concat(' ');\n}\n\n",
              "print(kapitalisasi('belajar coding itu seru'));",
            ],
            pemisah: "",
            explanation:
              "Mengubah huruf pertama tiap kata membutuhkan pemecahan string `.split(' ')`, transformasi `.toUpperCase()` pada indeks ke-0, dan penggabungan `.join(' ')`. Pengecoh `.capitalize()` adalah metode fiktif di JS standar yang sering keliru dikira ada.",
          },
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
          susunKode: {
            question:
              "Susun tiga bagian catatan keputusan arsitektur (ADR) Tailwind CSS.",
            potongan: [
              "## Konteks\nSaya bekerja sendiri dan butuh UI konsisten tanpa memikirkan penamaan kelas.\n\n",
              "## Keputusan\nMemakai Tailwind CSS, bukan menulis CSS terpisah per komponen.\n\n",
              "## Konsekuensi\nMarkup jadi lebih panjang dan perlu waktu membiasakan diri, tapi tidak ada file CSS yang membengkak seiring proyek bertambah besar.",
            ],
            pengecoh: [
              "## Latar Belakang\nProyek ini tidak membutuhkan desain visual.\n\n",
              "## Solusi Utama\nTidak perlu memakai pustaka styling sama sekali.\n\n",
              "## Dampak Akhir\nTampilan web polos tanpa ada penataan tata letak.",
            ],
            pemisah: "",
            explanation:
              "Format ADR (Architecture Decision Record) standar menyertakan Konteks, Keputusan, dan Konsekuensi kompromi yang diambil. Menghindari styling sama sekali adalah bentuk penyelesaian yang keliru dan menjebak bagi proyek portofolio.",
          },
        },
        {
          kind: "quiz",
          id: "ai-6-kuis",
          title: "Kuis: Etika & Karier di Era AI",
          questions: [
                    {
                              "id": "q1",
                              "type": "pilihan-ganda",
                              "question": "Kemampuan Software Engineering apa yang justru nilainya semakin meningkat mahal di era maraknya alat bantu AI?",
                              "choices": [
                                        "Menghafal sintaks bahasa pemograman",
                                        "Arsitektur Sistem, Code Review, Pemahaman Domain Bisnis, dan Komunikasi",
                                        "Kecepatan mengetik di keyboard",
                                        "Menulis komentar di setiap baris"
                              ],
                              "answerIndex": 1,
                              "explanation": "Saat sintaks dasar dapat dihasilkan AI, kemampuan merancang arsitektur yang tepat dan mengevaluasi kualitas kode menjadi diferensiasi utama."
                    },
                    {
                              "id": "q2",
                              "type": "pilihan-ganda",
                              "question": "Mengapa disarankan untuk selalu mencoba memecahkan masalah sendiri selama 15 menit sebelum bertanya ke AI?",
                              "choices": [
                                        "Agar AI tidak kelelahan",
                                        "Membangun otot berpikir kritis dan mencegah ketergantungan penuh pada AI",
                                        "Karena AI butuh waktu 15 menit untuk boot up",
                                        "Untuk menghemat token API"
                              ],
                              "answerIndex": 1,
                              "explanation": "Berpikir mandiri (struggle) adalah bagian penting dari proses belajar. Ketergantungan instan akan menghambat perkembangan problem-solving mu."
                    },
                    {
                              "id": "q3",
                              "type": "pilihan-ganda",
                              "question": "Bagaimana seharusnya kamu menonjolkan penggunaan AI dalam portofolio proyekmu?",
                              "choices": [
                                        "Menyembunyikannya sepenuhnya",
                                        "Mengklaim bahwa 100% kodenya ditulis tanpa bantuan alat apapun",
                                        "Menjelaskan proses, keputusan engineering, dan trade-off di balik kode tersebut (ADR)",
                                        "Hanya menampilkan screenshot kode yang dihasilkan AI"
                              ],
                              "answerIndex": 2,
                              "explanation": "Perekrut ingin melihat alur pemikiran, cara pengambilan keputusan, dan pemahamanmu terhadap sistem, bukan sekadar kemampuan men-generate kode."
                    },
                    {
                              "id": "q4",
                              "type": "pilihan-ganda",
                              "question": "Apa kebijakan terpenting sebelum memasukkan source code perusahaan ke dalam layanan AI seperti ChatGPT?",
                              "choices": [
                                        "Menyembunyikan nama penulis asli",
                                        "Memastikan kebijakan perusahaan mengizinkan dan platform AI tersebut tidak menggunakan datamu untuk pelatihan ulang (Zero Data Retention)",
                                        "Mengubah nama variabel menjadi bahasa Indonesia",
                                        "Menggunakan mode gelap pada browser"
                              ],
                              "answerIndex": 1,
                              "explanation": "Kode perusahaan adalah aset rahasia. Memasukkannya ke platform publik tanpa perlindungan privasi dapat membocorkan rahasia dagang."
                    },
                    {
                              "id": "q5",
                              "type": "pilihan-ganda",
                              "question": "Mengapa arsitektur sistem dan komunikasi empati menjadi jauh lebih mahal nilainya di era AI?",
                              "choices": [
                                        "Karena AI tidak bisa berbicara",
                                        "Karena kemampuan teknis mengetik sintaks telah menjadi komoditas murah yang mudah diotomatisasi",
                                        "Karena pengguna internet semakin sedikit",
                                        "Karena sekolah sudah tidak mengajarkan pemrograman"
                              ],
                              "answerIndex": 1,
                              "explanation": "AI dapat menulis kode dengan cepat, tetapi menghubungkan berbagai komponen sistem dan memahami kebutuhan manusia hanya bisa dilakukan oleh engineer handal."
                    },
                    {
                              "id": "q6",
                              "type": "pilihan-ganda",
                              "question": "Apa jaminan utama dari kebijakan Zero Data Retention (ZDR) pada layanan AI tingkat enterprise?",
                              "choices": [
                                        "Prompt dan kode perusahaan tidak disimpan di server penyedia dan tidak digunakan untuk melatih model AI publik",
                                        "Semua akun pengguna dihapus secara berkala setiap akhir pekan",
                                        "Biaya pemakaian AI menjadi gratis tanpa batas",
                                        "Layanan AI hanya bisa diakses menggunakan koneksi kabel LAN"
                              ],
                              "answerIndex": 0,
                              "explanation": "Kebijakan Zero Data Retention (ZDR) menjamin kepatuhan data rahasia perusahaan agar tidak terekspos atau dijadikan data pelatihan AI."
                    },
                    {
                              "id": "q7",
                              "type": "pilihan-ganda",
                              "question": "Bagaimana etika profesional terbaik saat menghadapi sesi live coding interview di mana penggunaan AI belum jelas aturannya?",
                              "choices": [
                                        "Bertanya secara transparan di awal sesi dan bersedia menjelaskan alur penalaran (think aloud) saat coding",
                                        "Menggunakan ekstensi AI secara sembunyi-sembunyi agar terlihat genius",
                                        "Menolak menjawab pertanyaan penguji",
                                        "Menyalin jawaban dari forum tanpa memeriksa kebenarannya"
                              ],
                              "answerIndex": 0,
                              "explanation": "Transparansi etis dan kemampuan mengartikulasikan proses berpikir (think aloud) mencerminkan kedewasaan dan integritas seorang software engineer."
                    }
          ],
        },
      ],
    },
  ],
};
