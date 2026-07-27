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
          kind: "step",
          id: "ai-1-1",
          title: "Prediksi Token: Mental Model LLM",
          explanation:
            "Pernahkah kamu menggunakan fitur autocorrect atau tebakan kata di keyboard HP? Large Language Model (LLM) bekerja dengan cara yang sangat mirip, tapi dalam skala raksasa! LLM tidak 'berpikir' atau 'memahami' makna layaknya manusia. Ia hanya menebak token (potongan kata) apa yang paling masuk akal muncul berikutnya berdasarkan pola dari miliaran teks yang pernah ia baca. Jadi ketika ChatGPT menulis kode untukmu, ia sebenarnya melakukan tebakan beruntun yang sangat canggih — bukan memahami kode itu secara mendalam.",
          example: {
            code: "// LLM menerima prompt 'function sum(a, b) {' -> memprediksi token tersering 'return a + b; }'",
            output: "Generasi kode berbasis asosiasi statistik terluas.",
            note: "Memahami ini mencegah ekspektasi berlebihan pada kemampuan nalar LLM.",
          },
          instruction:
            "Tugaskan sebuah variabel konstan bernama `modelName` dengan nilai string 'GPT-4'.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+modelName\\s*=\\s*(['\"])GPT-4\\1",
              message: "Tulis: const modelName = 'GPT-4';",
            },
          ],
          solution: "const modelName = 'GPT-4';",
        },
        {
          kind: "step",
          id: "ai-1-2",
          title: "Halusinasi Kode & Solusinya",
          explanation:
            "Halusinasi terjadi saat LLM mengarang fungsi atau parameter library yang sebenarnya TIDAK ADA dengan percaya diri. Selalu verifikasi API sintaks dengan dokumentasi resmi.",
          example: {
            code: "// ❌ AI menghasilkan: array.groupByColumn('id'); (API Fiktif/Halusinasi!)\n// ✅ Kode Sejati: array.reduce(...) atau Object.groupBy(array, fn)",
            output: "Verifikasi manusia mencegah error runtime pada kode buatan AI.",
            note: "Jangan langsung menyalin kode AI tanpa menguji eksekusinya.",
          },
          instruction:
            "Buatlah deklarasi variabel `isValid` yang memanggil fungsi `checkAPI()` untuk memverifikasi keaslian API.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+isValid\\s*=\\s*checkAPI\\(\\)",
              message: "Tulis: const isValid = checkAPI();",
            },
          ],
          solution: "const isValid = checkAPI();",
        },
        {
          kind: "step",
          id: "ai-1-3",
          title: "Context Window: Mengapa AI 'Lupa'",
          explanation:
            "Context Window adalah batas jumlah token maksimum yang dapat dibaca LLM dalam 1 sesi obrolan. Jika percakapan terlalu panjang, pesan awal akan terdorong keluar (dilupakan).",
          example: {
            code: "// Sesi Obrolan > 128k Token -> AI mulai lupa variabel yang dibuat di awal percakapan",
            output: "Buka sesi obrolan baru untuk masalah/fitur baru.",
            note: "Menjaga obrolan tetap singkat dan spesifik meningkatkan akurasi AI.",
          },
          instruction:
            "Buat variabel `maxTokens` dengan nilai angka 128000.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+maxTokens\\s*=\\s*128000",
              message: "Tulis: const maxTokens = 128000;",
            },
          ],
          solution: "const maxTokens = 128000;",
        },
        {
          kind: "step",
          id: "ai-1-4",
          title: "Kekuatan Utama AI (Boilerplate & Conversion)",
          explanation:
            "AI paling unggul untuk: 1. Generasi boilerplate, 2. Translasi sintaks (misal JS ke TS), 3. Penjelasan kode kompleks.",
          example: {
            code: "// Prompt: 'Ubah fungsi JavaScript berikut menjadi TypeScript dengan interface eksplisit'",
            output: "Translasi tipe data yang rapi dalam hitungan detik.",
            note: "Menghemat waktu dari mengetik tugas berulang.",
          },
          instruction:
            "Definisikan tipe TypeScript `User` yang memiliki properti `id` bertipe `string`.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "type\\s+User\\s*=\\s*\\{\\s*id\\s*:\\s*string\\s*;?\\s*\\}",
              message: "Tulis: type User = { id: string };",
            },
          ],
          solution: "type User = { id: string };",
        },
        {
          kind: "step",
          id: "ai-1-5",
          title: "Kelemahan AI (Logika Bisnis Unik)",
          explanation:
            "AI lemah dalam merancang logika bisnis spesifik perusahaan, arsitektur sistem skala besar, dan fitur terbaru yang rilis setelah tanggal pemotongan data training.",
          example: {
            code: "// Logika unik aturan diskon toko Anda tetap membutuhkan rancangan manusia!",
            output: "Manusia yang menentukan arah arsitektur dan logika bisnis.",
            note: "AI adalah asisten, bukan pengganti arsitek perangkat lunak.",
          },
          instruction:
            "Buat fungsi `calculateDiscount` yang menerima parameter `price` dan mengembalikan nilai tersebut dikali 0.9.",
          starterCode: "// Buat fungsi calculateDiscount di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+calculateDiscount\\(price\\)\\s*\\{\\s*return\\s+price\\s*\\*\\s*0\\.9;?\\s*\\}",
              message: "Tulis: function calculateDiscount(price) { return price * 0.9; }",
            },
          ],
          solution: "function calculateDiscount(price) { return price * 0.9; }",
        },
        {
          kind: "step",
          id: "ai-1-6",
          title: "Lanskap Tool AI (Copilot, Claude, Cursor)",
          explanation:
            "Gunakan **Copilot** untuk autocomplete real-time. Gunakan **Claude** untuk analisis logika kompleks. Gunakan **Cursor / Antigravity** untuk penyuntingan multi-file.",
          example: {
            code: "// Copilot -> Autocomplete cepat saat ngoding\n// Cursor/Antigravity -> Refactoring multi-file otomatis",
            output: "['Copilot', 'Claude', 'Cursor']",
            note: "Gunakan alat AI yang tepat sesuai dengan tugas yang dikerjakan.",
          },
          instruction:
            "Buat sebuah array `aiTools` yang berisi string 'Copilot', 'Claude', dan 'Cursor'.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+aiTools\\s*=\\s*\\[\\s*(['\"])Copilot\\1\\s*,\\s*(['\"])Claude\\2\\s*,\\s*(['\"])Cursor\\3\\s*\\]",
              message: "Tulis: const aiTools = ['Copilot', 'Claude', 'Cursor'];",
            },
          ],
          solution: "const aiTools = ['Copilot', 'Claude', 'Cursor'];",
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
            }, {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa AI sering melupakan instruksi di awal percakapan jika sesi obrolan terlalu panjang?",
              choices: ["Karena server AI restart", "Karena mencapai batas Context Window", "Karena AI tidak suka percakapan panjang", "Karena koneksi internet terputus"],
              answerIndex: 1,
              explanation: "Setiap model memiliki batas context window (jumlah token maksimal). Jika melebihi batas ini, token terlama akan dihapus."
            }, {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa kelemahan utama AI saat digunakan untuk menulis kode perusahaan?",
              choices: ["AI tidak tahu logika bisnis spesifik dan aturan unik perusahaan", "AI tidak bisa mengetik cepat", "AI akan menghapus kode secara otomatis", "AI selalu menggunakan bahasa Assembly"],
              answerIndex: 0,
              explanation: "AI dilatih dengan data publik, sehingga ia tidak tahu aturan bisnis, struktur, atau sistem internal spesifik di perusahaanmu yang bersifat rahasia."
            }]
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
          kind: "step",
          id: "ai-2-1",
          title: "Prinsip Konteks Cukup",
          explanation:
            "Saat meminta bantuan AI, sertakan 3 hal wajib: 1. Kode terkait, 2. Log error lengkap, 3. Hasil akhir yang diinginkan.",
          example: {
            code: "// Prompt Bagus: 'Saya pakai Next.js 14 App Router. Berikut error di terminal [...]. Saya ingin merender [...]'",
            output: "AI memberikan solusi yang langsung pas tanpa perlu banyak pertanyaan balasan.",
            note: "Kualitas jawaban AI berbanding lurus dengan kejelasan konteks yang kamu berikan.",
          },
          instruction:
            "Panggil fungsi `console.error()` dengan meneruskan parameter `error.message`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "console\\.error\\(error\\.message\\)",
              message: "Tulis: console.error(error.message);",
            },
          ],
          solution: "console.error(error.message);",
        },
        {
          kind: "step",
          id: "ai-2-2",
          title: "Prompting Spesifik dengan Constraint",
          explanation:
            "Sebutkan versi spesifik dan batasan library (misal: 'Gunakan TypeScript, batasi tanpa library luar, gunakan async/await').",
          example: {
            code: "// Constraint: 'Gunakan Zod versi 3, jangan gunakan any, tulis dalam bentuk arrow function'",
            output: "Kode buatan AI mengikuti standar coding style tim-mu.",
            note: "Mencegah AI menggunakan sintaks usang dari versi lama.",
          },
          instruction:
            "Gunakan Zod untuk mendefinisikan skema objek yang memiliki properti `id` bertipe string. Simpan dalam variabel `schema`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+schema\\s*=\\s*z\\.object\\(\\{\\s*id\\s*:\\s*z\\.string\\(\\)\\s*\\}\\)",
              message: "Tulis: const schema = z.object({ id: z.string() });",
            },
          ],
          solution: "const schema = z.object({ id: z.string() });",
        },
        {
          kind: "step",
          id: "ai-2-3",
          title: "Prompting Berulang (Iterative Refinement)",
          explanation:
            "Jangan ulangi prompt dari awal jika AI memberi hasil yang kurang pas. Persempit instruksi secara bertahap pada balasan berikutnya.",
          example: {
            code: "// Balasan 2: 'Bagus, sekarang ubah fungsi tersebut agar menangani kasus array kosong'",
            output: "Solusi terasah menjadi sempurna melalui dialog interaktif.",
            note: "Iterasi bertahap jauh lebih cepat dibanding membuat prompt raksasa sekali jalan.",
          },
          instruction:
            "Buat fungsi `processArray` yang menerima parameter `arr` dengan nilai default array kosong, dan langsung me-return parameter tersebut.",
          starterCode: "// Buat fungsi processArray di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+processArray\\(arr\\s*=\\s*\\[\\]\\)\\s*\\{\\s*return\\s+arr;?\\s*\\}",
              message: "Tulis: function processArray(arr = []) { return arr; }",
            },
          ],
          solution: "function processArray(arr = []) { return arr; }",
        },
        {
          kind: "step",
          id: "ai-2-4",
          title: "Meminta Alternatif & Trade-off",
          explanation:
            "Minta AI memberikan 2-3 pilihan pendekatan beserta perbandingan kelebihan dan kekurangannya.",
          example: {
            code: "// Prompt: 'Berikan 2 alternatif cara memfilter array ini di JS beserta analisis performanya'",
            output: "Memunculkan dua pendekatan filtering dengan perbandingan kecepatan di terminal",
            note: "Mendorong berpikir kritis daripada menerima solusi pertama secara mentah.",
          },
          instruction:
            "Filter array `arr` dari nilai falsy dengan menggunakan `arr.filter(Boolean)` dan simpan hasilnya di variabel `filtered`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+filtered\\s*=\\s*arr\\.filter\\(Boolean\\)",
              message: "Tulis: const filtered = arr.filter(Boolean);",
            },
          ],
          solution: "const filtered = arr.filter(Boolean);",
        },
        {
          kind: "step",
          id: "ai-2-5",
          title: "Prompt untuk Belajar vs Produksi",
          explanation:
            "Gunakan prompt 'Jelaskan cara kerja baris 5-10 ini' saat belajar, dan 'Optimasi fungsi ini tanpa merubah return type' saat produksi.",
          example: {
            code: "// Prompt Belajar: 'Jelaskan konsep Closure di fungsi berikut dengan analogi sederhana'",
            output: "AI berperan sebagai mentor pemograman pribadi.",
            note: "Manfaatkan AI untuk mempercepat pemahaman materi baru.",
          },
          instruction:
            "Buat fungsi `Counter` yang mendeklarasikan `let count = 0` dan me-return fungsi anonim yang meng-increment `count`.",
          starterCode: "// Buat fungsi Counter di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+Counter\\(\\)\\s*\\{\\s*let\\s+count\\s*=\\s*0;?\\s*return\\s+\\(\\)\\s*=>\\s*count\\+\\+;?\\s*\\}",
              message: "Tulis: function Counter() { let count = 0; return () => count++; }",
            },
          ],
          solution: "function Counter() { let count = 0; return () => count++; }",
        },
        {
          kind: "step",
          id: "ai-2-6",
          title: "Anti-pattern: Single-shot Prompting Kompleks",
          explanation:
            "HINDARI meminta AI membuat seluruh aplikasi e-commerce sekaligus dalam 1 prompt raksasa (Single-shot mega prompt). Pecahlah menjadi tugas-tugas kecil.",
          example: {
            code: "// ❌ 'Buatkan saya seluruh aplikasi marketplace Tokopedia lengkap'\n// ✅ 'Buatkan saya skema TypeScript untuk model produk toko'",
            output: "Hasil kode berkualitas tinggi dan teruji.",
            note: "Memecah tugas besar menjadi sub-task adalah kunci sukses software engineering.",
          },
          instruction:
            "Definisikan antarmuka TypeScript `Product` dengan properti `id` (string) dan `price` (number).",
          starterCode: "// Buat interface Product di sini\n",
          language: "text",
          tests: [
            {
              pattern: "interface\\s+Product\\s*\\{\\s*id\\s*:\\s*string;?\\s*price\\s*:\\s*number;?\\s*\\}",
              message: "Tulis: interface Product { id: string; price: number; }",
            },
          ],
          solution: "interface Product { id: string; price: number; }",
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
            }, {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa kita disarankan meminta alternatif atau trade-off dari AI?",
              choices: ["Agar AI merasa dihargai", "Untuk memastikan kita memilih pendekatan terbaik dan memahami konsekuensinya", "Karena AI selalu salah di jawaban pertama", "Agar proses berjalan lebih lambat"],
              answerIndex: 1,
              explanation: "Dengan meminta alternatif, kita dipaksa mengevaluasi kelebihan dan kelemahan masing-masing solusi sebelum menerapkannya ke proyek."
            }, {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa kelemahan dari single-shot mega prompt (satu prompt panjang untuk membuat seluruh aplikasi)?",
              choices: ["Sangat efektif untuk aplikasi kompleks", "Hanya bisa digunakan oleh pengguna berbayar", "AI sering gagal menghasilkan kode berkualitas karena tugasnya terlalu besar dan tidak fokus", "Menghasilkan kode yang 100% sempurna tanpa bug"],
              answerIndex: 2,
              explanation: "Memecah tugas besar menjadi bagian kecil (modular) jauh lebih efektif karena AI dapat fokus pada satu masalah spesifik di setiap prompt."
            }]
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
          kind: "step",
          id: "ai-3-1",
          title: "Kapan Menerima & Menolak Autocomplete Copilot",
          explanation:
            "Terima saran Autocomplete saat mengetik kode berulang/standar (seperti interface atau mock data). Tolak (Tekan Esc) jika saran mengubah logika bisnis utama.",
          example: {
            code: "// Tekan [Tab] untuk menerima saran autocomplete Copilot\n// Tekan [Esc] untuk menolak saran yang salah",
            output: "Alur pengetikan menjadi sangat lancar.",
            note: "Jangan menekan Tab secara mekanis tanpa membaca saran kodenya terlebih dahulu!",
          },
          instruction:
            "Buat interface `MockData` dengan properti `name` bertipe `string`.",
          starterCode: "",
          language: "text",
          tests: [
            {
              pattern: "interface\\s+MockData\\s*\\{\\s*name\\s*:\\s*string;?\\s*\\}",
              message: "Tulis: interface MockData { name: string; }",
            },
          ],
          solution: "interface MockData { name: string; }",
        },
        {
          kind: "step",
          id: "ai-3-2",
          title: "AI Chat untuk Desain Arsitektur",
          explanation:
            "Gunakan AI Chat untuk mendiskusikan rancangan struktur database / skema API SEBELUM kamu mulai mengetik baris kode pertama.",
          example: {
            code: "// Diskusi Chat: 'Bagaimana cara terbaik memodelkan fitur keranjang belanja di Redis vs SQL?'",
            output: "Mendapat gambaran arsitektur jernih sejak awal.",
            note: "Mencegah salah desain skema yang berisiko refactoring berat belakangan.",
          },
          instruction:
            "Deklarasikan variabel `cartSchema` yang menginisialisasi class `Schema` dengan objek `{ userId: String }`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+cartSchema\\s*=\\s*new\\s+Schema\\(\\{\\s*userId\\s*:\\s*String\\s*\\}\\)",
              message: "Tulis: const cartSchema = new Schema({ userId: String });",
            },
          ],
          solution: "const cartSchema = new Schema({ userId: String });",
        },
        {
          kind: "step",
          id: "ai-3-3",
          title: "AI Agent untuk Perubahan Multi-File",
          explanation:
            "Alat seperti Cursor / Antigravity Agent mampu melakukan refactoring otomatis yang menyentuh puluhan berkas file sekaligus secara konsisten.",
          example: {
            code: "// Agent Prompt: 'Ubah nama properti user_id menjadi userId di seluruh skema model dan controller'",
            output: "Seluruh berkas terkait diperbarui konsisten dalam 1 operasi.",
            note: "Periksa git diff setelah agent selesai melakukan pengeditan multi-file.",
          },
          instruction:
            "Buat variabel `userId` yang nilainya diambil dari `user.id`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+userId\\s*=\\s*user\\.id",
              message: "Tulis: const userId = user.id;",
            },
          ],
          solution: "const userId = user.id;",
        },
        {
          kind: "step",
          id: "ai-3-4",
          title: "Menerbitkan Unit Test dengan AI",
          explanation:
            "AI sangat hebat dalam membuat kasus uji unit test (termasuk edge cases input null/kosong/ekstrem) dari fungsi yang kamu berikan.",
          example: {
            code: "// Prompt: 'Buatkan Jest unit test lengkap untuk fungsi calculateDiscount() ini termasuk edge case harga 0'",
            output: "Suite unit test dibuat otomatis dengan coverage tinggi.",
            note: "Mempercepat pembuatan test suite aplikasi.",
          },
          instruction:
            "Tuliskan sebuah unit test Jest sederhana menggunakan blok `test` yang menguji `expect(true).toBe(true)`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "test\\(['\"]should pass['\"],\\s*\\(\\)\\s*=>\\s*\\{\\s*expect\\(true\\)\\.toBe\\(true\\);?\\s*\\}\\)",
              message: "Tulis: test('should pass', () => { expect(true).toBe(true); });",
            },
          ],
          solution: "test('should pass', () => { expect(true).toBe(true); });",
        },
        {
          kind: "step",
          id: "ai-3-5",
          title: "AI untuk Dokumentasi & Commit Message",
          explanation:
            "Gunakan AI untuk membuat JSDoc, file README.md, serta menyusun pesan commit berbasis standar `Conventional Commits` dari `git diff`.",
          example: {
            code: "// Prompt: 'Buatkan commit message Conventional Commits dari git diff berikut'",
            output: "Pesan commit rapi seperti 'feat(auth): add OAuth Google provider'.",
            note: "Menjaga kerapian riwayat git log repository.",
          },
          instruction:
            "Tugaskan string pesan commit 'feat(auth): add OAuth Google provider' ke dalam variabel bernama `commitMsg`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+commitMsg\\s*=\\s*(['\"])feat\\(auth\\):\\s*add\\s*OAuth\\s*Google\\s*provider\\1",
              message: "Tulis: const commitMsg = 'feat(auth): add OAuth Google provider';",
            },
          ],
          solution: "const commitMsg = 'feat(auth): add OAuth Google provider';",
        },
        {
          kind: "step",
          id: "ai-3-6",
          title: "Menjaga Flow & Kontrol Engineer",
          explanation:
            "AI adalah alat bantu konsentrasi (flow booster). Kamu adalah pengemudi (pilot) yang memegang kendali penuh atas keputusan arsitektur.",
          example: {
            code: "// AI membantu mengetik sintaks -> Manusia memegang arah arsitektur dan kualitas rilis",
            output: "Kolaborasi ideal manusia dan AI.",
            note: "Jangan biarkan AI mengambil alih keputusan desain tanpa pengawasan.",
          },
          instruction:
            "Buat sebuah kelas kosong bernama `ArchitectureManager`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "class\\s+ArchitectureManager\\s*\\{\\s*\\}",
              message: "Tulis: class ArchitectureManager {}",
            },
          ],
          solution: "class ArchitectureManager {}",
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
            }, {
              id: "q2",
              type: "pilihan-ganda",
              question: "Kapan sebaiknya kita menggunakan fitur Autocomplete (seperti Copilot)?",
              choices: ["Untuk semua baris kode tanpa terkecuali", "Saat menulis pola yang berulang atau boilerplate", "Hanya saat aplikasi sudah di-deploy", "Saat merancang arsitektur database awal"],
              answerIndex: 1,
              explanation: "Autocomplete paling bersinar saat menangani kode berulang (seperti mock data, type definition), karena pola tersebut mudah diprediksi dengan akurat."
            }, {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana cara terbaik menggunakan AI untuk membantu mendesain arsitektur aplikasi?",
              choices: ["Meminta AI langsung membuatkan seluruh file .js", "Gunakan sesi chat interaktif untuk berdiskusi tentang struktur tabel atau API sebelum menulis kode", "Gunakan AI Agent untuk langsung mengedit file produksi", "Abaikan arsitektur dan langsung jalankan kode"],
              answerIndex: 1,
              explanation: "Membahas konsep dan arsitektur terlebih dahulu di chat membantu menghindari kesalahan fundamental sebelum kode aktual mulai ditulis."
            }]
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
          kind: "step",
          id: "ai-4-1",
          title: "Bug Khas Kode Hasil AI",
          explanation:
            "Bug paling umum dari AI: 1. Lupa menangani nilai `null` / `undefined`, 2. Memadukan sintaks versi usang & baru, 3. Lupa melakukan validasi sanitasi input.",
          example: {
            code: "// ❌ AI Code: user.address.city (Crash jika user.address null!)\n// ✅ Fix: user?.address?.city",
            output: "Memperbaiki potensi crash akibat optional chaining terlewat.",
            note: "Selalu uji kode AI dengan input ekstrem.",
          },
          instruction:
            "Berikan pengaman optional chaining pada objek `user` dan properti `address` sebelum mengakses `city`, simpan hasilnya di variabel `city`.",
          starterCode: "// Ambil city dengan aman\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+city\\s*=\\s*user\\?\.address\\?\.city",
              message: "Gunakan: const city = user?.address?.city;",
            },
          ],
          solution: "const city = user?.address?.city;",
        },
        {
          kind: "step",
          id: "ai-4-2",
          title: "Checklist Review Kode AI Sebelum Commit",
          explanation:
            "Checklist: 1. Apakah ada API halusinasi? 2. Apakah tipe TypeScript sudah eksplisit? 3. Apakah sudah ada error handling try/catch? 4. Apakah tes otomatis lolos?",
          example: {
            code: "// AI Review Checklist: Valid Types ✅ Error Handling ✅ No Magic Strings ✅",
            output: "Kode bersih dan aman untuk masuk ke repository tim.",
            note: "Jadikan checklist ini kebiasaan sebelum membuat Pull Request.",
          },
          instruction:
            "Bungkus pemanggilan `riskyFunction()` dengan blok `try...catch`. Di blok catch, tangkap error ke variabel `e` dan panggil `console.error(e)`.",
          starterCode: "// Bungkus dengan try catch\n",
          language: "js",
          tests: [
            {
              pattern: "try\\s*\\{\\s*riskyFunction\\(\\);?\\s*\\}\\s*catch\\s*\\(e\\)\\s*\\{\\s*console\\.error\\(e\\);?\\s*\\}",
              message: "Tulis: try { riskyFunction(); } catch (e) { console.error(e); }",
            },
          ],
          solution: "try { riskyFunction(); } catch (e) { console.error(e); }",
        },
        {
          kind: "step",
          id: "ai-4-3",
          title: "Keamanan: Mencegah Injeksi & Secrets di AI Code",
          explanation:
            "Hati-hati! Kode buatan AI kadang menyertakan `eval()`, query SQL mentah tanpa sanitasi, atau hardcoded API key rahasia.",
          example: {
            code: "// ❌ AI Code: const key = 'sk_test_123456789';\n// ✅ Fix: const key = process.env.SECRET_KEY;",
            output: "Mencegah kebocoran rahasia ke repository publik.",
            note: "Selalu audit berkas buatan AI dari celah keamanan.",
          },
          instruction:
            "Simpan nilai `process.env.SECRET_KEY` ke dalam variabel konstanta bernama `key`.",
          starterCode: "// Baca dari env\n",
          language: "js",
          tests: [
            {
              pattern: "const\\s+key\\s*=\\s*process\\.env\\.SECRET_KEY",
              message: "Gunakan: const key = process.env.SECRET_KEY;",
            },
          ],
          solution: "const key = process.env.SECRET_KEY;",
        },
        {
          kind: "step",
          id: "ai-4-4",
          title: "Lisensi & Kode Hasil Training",
          explanation:
            "Pastikan kode buatan AI tidak menjiplak langsung potongan algoritma berlisensi GPL/Kritis tanpa izin dari dataset training.",
          example: {
            code: "// Gunakan fitur Copilot 'Filter code matching public code' untuk mencegah penjiplakan lisensi",
            output: "Repository perusahaan aman dari masalah hukum lisensi cipta.",
            note: "Penting bagi kepatuhan legal di perusahaan skala besar.",
          },
          instruction:
            "Tugaskan nilai boolean `true` ke variabel konstanta bernama `isPublicCode`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+isPublicCode\\s*=\\s*true",
              message: "Tulis: const isPublicCode = true;",
            },
          ],
          solution: "const isPublicCode = true;",
        },
        {
          kind: "step",
          id: "ai-4-5",
          title: "Latihan Audit Bug di Kode AI",
          explanation:
            "Temukan bug pada kode AI: `function divide(a, b) { return a / b; }` (Lupa mengecek kondisi b === 0!).",
          example: {
            code: "function divide(a, b) {\n  if (b === 0) throw new Error('Division by zero');\n  return a / b;\n}",
            output: "Fungsi aman dari pembagian dengan angka nol.",
            note: "Selalu pertanyakan skenario input 0, negative, dan null.",
          },
          instruction:
            "Tuliskan pengondisian yang akan melakukan `throw new Error(\'Division by zero\')` jika variabel `b` sama dengan nilai nol.",
          starterCode: "// Tulis pengondisian b === 0 di bawah ini\n",
          language: "js",
          tests: [
            {
              pattern: "if\\s*\\(\\s*b\\s*===\\s*0\\s*\\)\\s*throw\\s+new\\s+Error\\((['\"])Division\\s*by\\s*zero\\1\\)",
              message: "Tuliskan pengondisian pembagian angka nol",
            },
          ],
          solution: "if (b === 0) throw new Error('Division by zero');",
        },
        {
          kind: "step",
          id: "ai-4-6",
          title: "Prinsip Tanggung Jawab Akhir Engineer",
          explanation:
            "Ingat: **Kamu yang menandatangani commit, kamu yang bertanggung jawab penuh** jika kode produksi crash — bukan AI!",
          example: {
            code: "// 'AI yang bikin' BUKANLAH alasan yang bisa diterima saat terjadi insiden outage produksi!",
            output: "Tanggung jawab profesional seorang Software Engineer.",
            note: "Kepemilikan kode (ownership) berada 100% pada diri developer.",
          },
          instruction:
            "Simpan string nama kamu ke dalam variabel bernama `commitOwner`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+commitOwner\\s*=\\s*(['\"]).+\\1",
              message: "Tulis: const commitOwner = 'Developer';",
            },
          ],
          solution: "const commitOwner = 'Developer';",
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
            }, {
              id: "q2",
              type: "pilihan-ganda",
              question: "Apa salah satu bug yang paling umum ditemui pada kode buatan AI?",
              choices: ["Selalu menggunakan variabel dengan nama dalam bahasa Indonesia", "Lupa menangani nilai null/undefined (edge cases)", "Mengubah warna tema terminal", "Membuat font menjadi lebih besar"],
              answerIndex: 1,
              explanation: "AI sering menghasilkan 'happy path' code dan mengabaikan pengecekan null atau error handling yang proper."
            }, {
              id: "q3",
              type: "pilihan-ganda",
              question: "Mengapa berbahaya jika kita langsung menyalin kode AI yang memuat kredensial atau API Key?",
              choices: ["Kode tersebut mungkin akan kadaluarsa besok", "Bisa menyebabkan rahasia perusahaan bocor atau digunakan oleh pihak tak bertanggung jawab", "Membuat ukuran file membesar", "AI akan meminta bayaran ekstra"],
              answerIndex: 1,
              explanation: "API key hardcoded yang didapat dari atau dibagikan ke sistem publik berpotensi tinggi memicu pelanggaran keamanan dan kerugian finansial."
            }]
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
          kind: "step",
          id: "ai-5-1",
          title: "Debugging dengan Reproducible Example Minimal",
          explanation:
            "Isolasi bug menjadi potongan kode kecil (reproducible snippet) sebelum mengirimkannya ke AI untuk analisis perbaikan.",
          example: {
            code: "// Berikan potongan 10 baris fungsi bermasalah alih-alih melempar 1.000 baris file proyek utuh",
            output: "AI menemukan bug dengan presisi tinggi.",
            note: "Meminimalkan gangguan noise informasi yang tidak relevan.",
          },
          instruction:
            "Buat fungsi `bugSnippet` yang selalu me-return nilai boolean `true`.",
          starterCode: "// Buat fungsi bugSnippet di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+bugSnippet\\(\\)\\s*\\{\\s*return\\s+true;?\\s*\\}",
              message: "Tulis: function bugSnippet() { return true; }",
            },
          ],
          solution: "function bugSnippet() { return true; }",
        },
        {
          kind: "step",
          id: "ai-5-2",
          title: "AI sebagai Interactive Rubber Duck",
          explanation:
            "Dalam dunia programming, ada teknik unik bernama Rubber Duck Debugging: programmer menceritakan masalah kodenya keras-keras kepada mainan bebek karet. Seringkali, hanya dengan mencoba menjelaskan alur logikanya, kamu akan menyadari sendiri di mana letak kesalahannya. Nah, kamu bisa menggunakan AI sebagai 'bebek karet' yang interaktif! Jelaskan alur logikamu ke AI, lalu minta AI mendeteksi apakah ada asumsi yang terlewat atau salah.",
          example: {
            code: "// Prompt: 'Saya mengasumsikan variabel A bernilai 10 di baris ini. Apakah ada skenario di mana A bisa bernilai null?'",
            output: "AI menyoroti: 'Jika A berasal dari database, ia bisa bernilai null'",
            note: "Proses diskusi interaktif memperjelas peta pikiran pengembang.",
          },
          instruction:
            "Buat pengondisian `if` yang mengecek apakah variabel `A` bernilai sama persis dengan `null`. Jika ya, kembalikan string 'is null'.",
          starterCode: "// Buat pengecekan null di sini\n",
          language: "js",
          tests: [
            {
              pattern: "if\\s*\\(\\s*A\\s*===\\s*null\\s*\\)\\s*\\{\\s*return\\s+(['\"])is\\s*null\\1;?\\s*\\}",
              message: "Tulis: if (A === null) { return 'is null'; }",
            },
          ],
          solution: "if (A === null) { return 'is null'; }",
        },
        {
          kind: "step",
          id: "ai-5-3",
          title: "Refactoring Terarah (1 Tujuan per Request)",
          explanation:
            "Saat melakukan refactoring dengan AI, fokus pada 1 tujuan spesifik saja per permintaan (misal: 'Ekstrak fungsi ini' atau 'Gunakan async/await').",
          example: {
            code: "// Prompt 1: Ekstrak logika database -> Prompt 2: Tambahkan type annotation -> Prompt 3: Optimasi loop",
            output: "Hasil refactoring aman dan mudah di-review.",
            note: "Jangan meminta 5 jenis refactoring sekaligus dalam 1 prompt.",
          },
          instruction:
            "Ubah fungsi anonim biasa menjadi fungsi asynchronous bernama `fetchData` yang melakukan `await fetch(\'/api\')`.",
          starterCode: "// Buat async function fetchData di sini\n",
          language: "js",
          tests: [
            {
              pattern: "async\\s+function\\s+fetchData\\(\\)\\s*\\{\\s*await\\s+fetch\\((['\"])/api\\1\\);?\\s*\\}",
              message: "Tulis: async function fetchData() { await fetch('/api'); }",
            },
          ],
          solution: "async function fetchData() { await fetch('/api'); }",
        },
        {
          kind: "step",
          id: "ai-5-4",
          title: "Memahami Codebase Asing dengan AI",
          explanation:
            "Minta AI menjelaskan arsitektur berkas kode legacy yang rumit: 'Jelaskan alur data di file ini dalam bentuk poin-poin sederhana'.",
          example: {
            code: "// Prompt: 'Jelaskan apa yang dilakukan fungsi regex 50 karakter ini dan berikan 3 contoh input yang cocok'",
            output: "Memahami kode rumit dalam waktu singkat.",
            note: "Memangkas waktu orientasi pada proyek legacy baru.",
          },
          instruction:
            "Buat variabel `regex` yang berisi regular expression untuk mencocokkan hanya huruf kecil (a-z) dan angka (0-9) dengan batas awal (^) dan akhir ($).",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+regex\\s*=\\s*/\\^\\[a-z0-9\\]\\+\\$/",
              message: "Tulis: const regex = /^[a-z0-9]+$/;",
            },
          ],
          solution: "const regex = /^[a-z0-9]+$/;",
        },
        {
          kind: "step",
          id: "ai-5-5",
          title: "Migrasi Versi Framework dengan AI + Verifikasi",
          explanation:
            "Gunakan AI untuk memperbarui sintaks usang ke versi baru (misal React Class Component ke Functional Hooks), lalu jalankan unit test untuk verifikasi.",
          example: {
            code: "// Prompt: 'Konversi React Class Component ini ke Functional Component dengan useState'",
            output: "Migrasi kode berjalan cepat dan terstruktur.",
            note: "Selalu jalankan unit test pasca migrasi untuk menjamin tidak ada regresi.",
          },
          instruction:
            "Deklarasikan state React `count` beserta setter-nya dengan nilai awal 0 menggunakan hooks `useState`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s*\\[\\s*count\\s*,\\s*setCount\\s*\\]\\s*=\\s*useState\\(\\s*0\\s*\\)",
              message: "Tulis: const [count, setCount] = useState(0);",
            },
          ],
          solution: "const [count, setCount] = useState(0);",
        },
        {
          kind: "step",
          id: "ai-5-6",
          title: "Kapan Harus Berhenti (Rabbit Hole Detection)",
          explanation:
            "Jika kamu sudah berdikusi 15 menit dengan AI dan kode makin berantakan/rusak, STOP! Revert git commit ke kondisi bersih dan atur ulang pendekatan secara manual.",
          example: {
            code: "git checkout . # Revert perubahan jika terjebak di lubang kelinci halusinasi AI",
            output: "Kembali ke kondisi kode stabil dan memikirkan solusi alternatif.",
            note: "Jangan memaksakan menumpuk kode perbaikan AI yang salah arah.",
          },
          instruction:
            "Tuliskan perintah yang membuang (revert) seluruh perubahan lokal agar file kembali ke kondisi bersih pada cabang aktif saat ini.",
          starterCode: "# Ketik perintah di bawah ini\n",
          language: "text",
          tests: [
            {
              pattern: "git\\s+checkout\\s+\\.",
              message: "Gunakan perintah: git checkout .",
            },
          ],
          solution: "git checkout .",
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
                "Lakukan `git checkout .` untuk mereset kode ke kondisi bersih, lalu atur ulang pendekatan secara manual",
                "Menghapus seluruh folder proyek",
                "Menjual komputer",
              ],
              answerIndex: 1,
              explanation: "Mereset kode ke kondisi awal yang stabil (git checkout .) mencegah penumpukan kesalahan saat AI terjebak dalam alur pemecahan masalah yang salah.",
            }, {
              id: "q2",
              type: "pilihan-ganda",
              question: "Bagaimana cara terbaik memberikan konteks kepada AI saat melakukan debugging?",
              choices: ["Kirim seluruh proyek (ribuan baris) sekaligus", "Beri potongan kode minimal (reproducible snippet) dan pesan error yang spesifik", "Cukup berikan pesan error saja tanpa kode", "Kirim screenshot kode dari HP"],
              answerIndex: 1,
              explanation: "Memberikan reproducible snippet mengurangi noise, sehingga AI bisa fokus pada akar masalah dengan jauh lebih akurat."
            }, {
              id: "q3",
              type: "pilihan-ganda",
              question: "Apa prinsip penting saat melakukan refactoring kode menggunakan bantuan AI?",
              choices: ["Minta AI merombak seluruh sistem dalam satu kali request", "Fokus pada satu tujuan spesifik saja per permintaan (misal: ekstrak fungsi atau ubah ke async/await)", "Jangan pernah mereview hasil refactoring", "AI selalu tahu cara terbaik merombak kode"],
              answerIndex: 1,
              explanation: "Refactoring bertahap (incremental) jauh lebih aman, meminimalisir bug baru, dan memudahkan manusia untuk meninjau perubahan per tahap."
            }]
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
          kind: "step",
          id: "ai-6-1",
          title: "Kebijakan Kode Rahasia & LLM Publik",
          explanation:
            "JANGAN PERNAH menempelkan kredensial rahasia, data pelanggan, atau source code hak cipta perusahaan ke layanan AI publik jika tidak diizinkan oleh kebijakan keamanan perusahaan.",
          example: {
            code: "// Gunakan Enterprise AI Plan dengan perlindungan 'Data Privacy' (No Training on User Data)",
            output: "Mencegah kebocoran rahasia dagang ke dataset publik.",
            note: "Patuhi kebijakan NDA dan IT Security perusahaanmu.",
          },
          instruction:
            "Buat variabel konstanta bernama `isSafe` dengan nilai boolean `false`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+isSafe\\s*=\\s*false",
              message: "Tulis: const isSafe = false;",
            },
          ],
          solution: "const isSafe = false;",
        },
        {
          kind: "step",
          id: "ai-6-2",
          title: "Etika Penggunaan AI di Technical Interview",
          explanation:
            "Tanyakan aturan penggunaan AI kepada interviewer. Saat diperbolehkan, jelaskan alur pemikiranmu secara lisan sewaktu menggunakan AI.",
          example: {
            code: "// Interviewer ingin melihat CARA BERPIKIR dan Kemampuan Problem Solving-mu, bukan sekadar hasil jawaban akhir",
            output: "Menunjukkan kejujuran dan profesionalisme tinggi.",
            note: "Menyontek rahasia dengan AI saat interview akan langsung terdeteksi saat sesi wawancara tatap muka.",
          },
          instruction:
            "Buat fungsi `interviewAnswer` yang me-return string 'I think aloud'.",
          starterCode: "// Buat fungsi interviewAnswer di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+interviewAnswer\\(\\)\\s*\\{\\s*return\\s+(['\"])I\\s*think\\s*aloud\\1;?\\s*\\}",
              message: "Tulis: function interviewAnswer() { return 'I think aloud'; }",
            },
          ],
          solution: "function interviewAnswer() { return 'I think aloud'; }",
        },
        {
          kind: "step",
          id: "ai-6-3",
          title: "Skill bernilai Tinggi di Era AI",
          explanation:
            "Di era AI, skill yang justru MAKIN bernilai mahal adalah: 1. Arsitektur Sistem, 2. Kemampuan Code Review, 3. Pemahaman Domain Bisnis, 4. Komunikasi & Empati.",
          example: {
            code: "// Menulis kode sintaks menjadi lebih murah, namun Merancang Sistem yang Tepat menjadi jauh lebih berharga!",
            output: "Fokus pada pengembangan fundamental software engineering.",
            note: "Jadilah Problem Solver, bukan sekadar pengetik sintaks.",
          },
          instruction:
            "Buat sebuah kelas kosong bernama `SystemArchitect`.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "class\\s+SystemArchitect\\s*\\{\\s*\\}",
              message: "Tulis: class SystemArchitect {}",
            },
          ],
          solution: "class SystemArchitect {}",
        },
        {
          kind: "step",
          id: "ai-6-4",
          title: "Aturan 'Coba Dulu' Mencegah Ketergantungan",
          explanation:
            "Terapkan Aturan 'Coba Dulu': Saat menghadapi bug/konsep baru, usahakan memikirkan & memecahkannya secara mandiri selama 15 menit SEBELUM bertanya pada AI.",
          example: {
            code: "// 15 Menit Berpikir Mandiri -> Baca Dokumentasi -> Tanya AI jika tetap buntu",
            output: "Membentuk otot berpikir kritis agar tidak tumpul.",
            note: "Ketergantungan instan pada AI memperlambat pertumbuhan skill-mu.",
          },
          instruction:
            "Buat fungsi `thinkFor15Mins` yang selalu me-return nilai boolean `true`.",
          starterCode: "// Buat fungsi thinkFor15Mins di sini\n",
          language: "js",
          tests: [
            {
              pattern: "function\\s+thinkFor15Mins\\(\\)\\s*\\{\\s*return\\s+true;?\\s*\\}",
              message: "Tulis: function thinkFor15Mins() { return true; }",
            },
          ],
          solution: "function thinkFor15Mins() { return true; }",
        },
        {
          kind: "step",
          id: "ai-6-5",
          title: "Portofolio di Era AI: Proses > Hasil Akhir",
          explanation:
            "Di portofoliomu, jelaskan **PROSES** pembuatan aplikasi: Mengapa memilih teknologi tersebut, bagaimana arsitektur kodenya, dan tantangan yang kamu selesaikan.",
          example: {
            code: "// Dokumentasikan keputusan desain dan trade-off di README repository portofolio",
            output: "Teks deskripsi: 'Saya memilih PostgreSQL karena...'",
            note: "Hasil akhir UI cantik mudah dibuat AI, namun proses berpikir tidak bisa dipalsukan.",
          },
          instruction:
            "Buat variabel konstanta bernama `markdownDecision` yang berisi string 'Chosen PostgreSQL for relational integrity'.",
          starterCode: "",
          language: "js",
          tests: [
            {
              pattern: "const\\s+markdownDecision\\s*=\\s*(['\"])Chosen\\s*PostgreSQL\\s*for\\s*relational\\s*integrity\\1",
              message: "Tulis: const markdownDecision = 'Chosen PostgreSQL for relational integrity';",
            },
          ],
          solution: "const markdownDecision = 'Chosen PostgreSQL for relational integrity';",
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
            }, {
              id: "q2",
              type: "pilihan-ganda",
              question: "Mengapa disarankan untuk selalu mencoba memecahkan masalah sendiri selama 15 menit sebelum bertanya ke AI?",
              choices: ["Agar AI tidak kelelahan", "Membangun otot berpikir kritis dan mencegah ketergantungan penuh pada AI", "Karena AI butuh waktu 15 menit untuk boot up", "Untuk menghemat token API"],
              answerIndex: 1,
              explanation: "Berpikir mandiri (struggle) adalah bagian penting dari proses belajar. Ketergantungan instan akan menghambat perkembangan problem-solving mu."
            }, {
              id: "q3",
              type: "pilihan-ganda",
              question: "Bagaimana seharusnya kamu menonjolkan penggunaan AI dalam portofolio proyekmu?",
              choices: ["Menyembunyikannya sepenuhnya", "Mengklaim bahwa 100% kodenya ditulis tanpa bantuan alat apapun", "Menjelaskan proses, keputusan engineering, dan trade-off di balik kode tersebut", "Hanya menampilkan screenshot kode yang dihasilkan AI"],
              answerIndex: 2,
              explanation: "Perekrut ingin melihat alur pemikiran, cara pengambilan keputusan, dan pemahamanmu terhadap sistem, bukan sekadar kemampuan men-generate kode."
            }]
        },
      ],
    },
  ],
};
