const fs = require('fs');
let content = fs.readFileSync('src/data/tracks/ai-dev.ts', 'utf8');

// We will do a bunch of replacements to fix the violations.

// 1. Fix kuis by adding more questions
content = content.replace(
  /kind: "quiz",\s*id: "ai-1-kuis"[\s\S]*?explanation: ".*?",\s*},\s*\],/g,
  match => match.replace(/],\s*$/, `, {
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
            }]`)
);

content = content.replace(
  /kind: "quiz",\s*id: "ai-2-kuis"[\s\S]*?explanation: ".*?",\s*},\s*\],/g,
  match => match.replace(/],\s*$/, `, {
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
            }]`)
);

content = content.replace(
  /kind: "quiz",\s*id: "ai-3-kuis"[\s\S]*?explanation: ".*?",\s*},\s*\],/g,
  match => match.replace(/],\s*$/, `, {
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
            }]`)
);

content = content.replace(
  /kind: "quiz",\s*id: "ai-4-kuis"[\s\S]*?explanation: ".*?",\s*},\s*\],/g,
  match => match.replace(/],\s*$/, `, {
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
            }]`)
);

content = content.replace(
  /kind: "quiz",\s*id: "ai-5-kuis"[\s\S]*?explanation: ".*?",\s*},\s*\],/g,
  match => match.replace(/],\s*$/, `, {
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
            }]`)
);

content = content.replace(
  /kind: "quiz",\s*id: "ai-6-kuis"[\s\S]*?explanation: ".*?",\s*},\s*\],/g,
  match => match.replace(/],\s*$/, `, {
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
            }]`)
);

// Fix example.output menjelaskan MANFAAT, bukan hasil nyata: ai-1-6, ai-2-4, ai-5-2, ai-6-5
content = content.replace(
  /(id: "ai-1-6"[\s\S]*?output: )".*?"/g,
  '$1"[\'Copilot\', \'Claude\', \'Cursor\']"'
);
content = content.replace(
  /(id: "ai-2-4"[\s\S]*?output: )".*?"/g,
  '$1"Memunculkan dua pendekatan filtering dengan perbandingan kecepatan di terminal"'
);
content = content.replace(
  /(id: "ai-5-2"[\s\S]*?output: )".*?"/g,
  '$1"AI menyoroti: \'Jika A berasal dari database, ia bisa bernilai null\'"'
);
content = content.replace(
  /(id: "ai-6-5"[\s\S]*?output: )".*?"/g,
  '$1"Teks deskripsi: \'Saya memilih PostgreSQL karena...\'"'
);

// Now let's fix all instructions that contain the exact answer and tasks that are just "tulis komentar".

function replaceStep(id, newInstruction, newPattern, newSolution, newStarter = "", newCode = "") {
  let stepRegex = new RegExp("(id: \"" + id + "\"[\\s\\S]*?instruction:\\s*)\".*?\"([\\s\\S]*?starterCode:\\s*)\"(?:.*?)?\"([\\s\\S]*?pattern:\\s*)\".*?\"([\\s\\S]*?solution:\\s*)\".*?\"");
  content = content.replace(stepRegex, "$1\"" + newInstruction + "\"$2\"" + newStarter + "\"$3\"" + newPattern + "\"$4\"" + newSolution + "\"");
  if (newCode) {
    let exampleCodeRegex = new RegExp("(id: \"" + id + "\"[\\s\\S]*?example:\\s*\\{[\\s\\S]*?code:\\s*)\".*?\"");
    content = content.replace(exampleCodeRegex, "$1\"" + newCode + "\"");
  }
}

// Module 1
replaceStep("ai-1-1",
  "Tugaskan sebuah variabel konstan bernama `modelName` dengan nilai string 'GPT-4'.",
  "const\\\\s+modelName\\\\s*=\\\\s*(['\\\"])GPT-4\\\\1",
  "const modelName = 'GPT-4';"
);
replaceStep("ai-1-2",
  "Buatlah deklarasi variabel `isValid` yang memanggil fungsi `checkAPI()` untuk memverifikasi keaslian API.",
  "const\\\\s+isValid\\\\s*=\\\\s*checkAPI\\\\(\\\\)",
  "const isValid = checkAPI();"
);
replaceStep("ai-1-3",
  "Buat variabel `maxTokens` dengan nilai angka 128000.",
  "const\\\\s+maxTokens\\\\s*=\\\\s*128000",
  "const maxTokens = 128000;"
);
replaceStep("ai-1-4",
  "Definisikan tipe TypeScript `User` yang memiliki properti `id` bertipe `string`.",
  "type\\\\s+User\\\\s*=\\\\s*\\\\{\\\\s*id\\\\s*:\\\\s*string\\\\s*;?\\\\s*\\\\}",
  "type User = { id: string };"
);
replaceStep("ai-1-5",
  "Buat fungsi `calculateDiscount` yang menerima parameter `price` dan mengembalikan nilai tersebut dikali 0.9.",
  "function\\\\s+calculateDiscount\\\\(price\\\\)\\\\s*\\\\{\\\\s*return\\\\s+price\\\\s*\\\\*\\\\s*0\\\\.9;?\\\\s*\\\\}",
  "function calculateDiscount(price) { return price * 0.9; }",
  "// Buat fungsi calculateDiscount di sini\\n"
);
replaceStep("ai-1-6",
  "Buat sebuah array `aiTools` yang berisi string 'Copilot', 'Claude', dan 'Cursor'.",
  "const\\\\s+aiTools\\\\s*=\\\\s*\\\\[\\\\s*(['\\\"])Copilot\\\\1\\\\s*,\\\\s*(['\\\"])Claude\\\\2\\\\s*,\\\\s*(['\\\"])Cursor\\\\3\\\\s*\\\\]",
  "const aiTools = ['Copilot', 'Claude', 'Cursor'];"
);

// Module 2
replaceStep("ai-2-1",
  "Panggil fungsi `console.error()` dengan meneruskan parameter `error.message`.",
  "console\\\\.error\\\\(error\\\\.message\\\\)",
  "console.error(error.message);"
);
replaceStep("ai-2-2",
  "Gunakan Zod untuk mendefinisikan skema objek yang memiliki properti `id` bertipe string. Simpan dalam variabel `schema`.",
  "const\\\\s+schema\\\\s*=\\\\s*z\\\\.object\\\\(\\\\{\\\\s*id\\\\s*:\\\\s*z\\\\.string\\\\(\\\\)\\\\s*\\\\}\\\\)",
  "const schema = z.object({ id: z.string() });"
);
replaceStep("ai-2-3",
  "Buat fungsi `processArray` yang menerima parameter `arr` dengan nilai default array kosong, dan langsung me-return parameter tersebut.",
  "function\\\\s+processArray\\\\(arr\\\\s*=\\\\s*\\\\[\\\\]\\\\)\\\\s*\\\\{\\\\s*return\\\\s+arr;?\\\\s*\\\\}",
  "function processArray(arr = []) { return arr; }",
  "// Buat fungsi processArray di sini\\n"
);
replaceStep("ai-2-4",
  "Filter array `arr` dari nilai falsy dengan menggunakan `arr.filter(Boolean)` dan simpan hasilnya di variabel `filtered`.",
  "const\\\\s+filtered\\\\s*=\\\\s*arr\\\\.filter\\\\(Boolean\\\\)",
  "const filtered = arr.filter(Boolean);"
);
replaceStep("ai-2-5",
  "Buat fungsi `Counter` yang mendeklarasikan `let count = 0` dan me-return fungsi anonim yang meng-increment `count`.",
  "function\\\\s+Counter\\\\(\\\\)\\\\s*\\\\{\\\\s*let\\\\s+count\\\\s*=\\\\s*0;?\\\\s*return\\\\s+\\\\(\\\\)\\\\s*=>\\\\s*count\\\\+\\\\+;?\\\\s*\\\\}",
  "function Counter() { let count = 0; return () => count++; }",
  "// Buat fungsi Counter di sini\\n"
);
replaceStep("ai-2-6",
  "Definisikan antarmuka TypeScript `Product` dengan properti `id` (string) dan `price` (number).",
  "interface\\\\s+Product\\\\s*\\\\{\\\\s*id\\\\s*:\\\\s*string;?\\\\s*price\\\\s*:\\\\s*number;?\\\\s*\\\\}",
  "interface Product { id: string; price: number; }",
  "// Buat interface Product di sini\\n"
);

// Module 3
replaceStep("ai-3-1",
  "Buat interface `MockData` dengan properti `name` bertipe `string`.",
  "interface\\\\s+MockData\\\\s*\\\\{\\\\s*name\\\\s*:\\\\s*string;?\\\\s*\\\\}",
  "interface MockData { name: string; }"
);
replaceStep("ai-3-2",
  "Deklarasikan variabel `cartSchema` yang menginisialisasi class `Schema` dengan objek `{ userId: String }`.",
  "const\\\\s+cartSchema\\\\s*=\\\\s*new\\\\s+Schema\\\\(\\\\{\\\\s*userId\\\\s*:\\\\s*String\\\\s*\\\\}\\\\)",
  "const cartSchema = new Schema({ userId: String });"
);
replaceStep("ai-3-3",
  "Buat variabel `userId` yang nilainya diambil dari `user.id`.",
  "const\\\\s+userId\\\\s*=\\\\s*user\\\\.id",
  "const userId = user.id;"
);
replaceStep("ai-3-4",
  "Tuliskan sebuah unit test Jest sederhana menggunakan blok `test` yang menguji `expect(true).toBe(true)`.",
  "test\\\\(['\\\"]should pass['\\\"],\\\\s*\\\\(\\\\)\\\\s*=>\\\\s*\\\\{\\\\s*expect\\\\(true\\\\)\\\\.toBe\\\\(true\\\\);?\\\\s*\\\\}\\\\)",
  "test('should pass', () => { expect(true).toBe(true); });"
);
replaceStep("ai-3-5",
  "Tugaskan string pesan commit 'feat(auth): add OAuth Google provider' ke dalam variabel bernama `commitMsg`.",
  "const\\\\s+commitMsg\\\\s*=\\\\s*(['\\\"])feat\\\\(auth\\\\):\\\\s*add\\\\s*OAuth\\\\s*Google\\\\s*provider\\\\1",
  "const commitMsg = 'feat(auth): add OAuth Google provider';"
);
replaceStep("ai-3-6",
  "Buat sebuah kelas kosong bernama `ArchitectureManager`.",
  "class\\\\s+ArchitectureManager\\\\s*\\\\{\\\\s*\\\\}",
  "class ArchitectureManager {}"
);

// Module 4
replaceStep("ai-4-1",
  "Berikan pengaman optional chaining pada objek `user` dan properti `address` sebelum mengakses `city`, simpan hasilnya di variabel `city`.",
  "const\\\\s+city\\\\s*=\\\\s*user\\\\?\\.address\\\\?\\.city",
  "const city = user?.address?.city;",
  "// Ambil city dengan aman\\n"
);
replaceStep("ai-4-2",
  "Bungkus pemanggilan `riskyFunction()` dengan blok `try...catch`. Di blok catch, tangkap error ke variabel `e` dan panggil `console.error(e)`.",
  "try\\\\s*\\\\{\\\\s*riskyFunction\\\\(\\\\);?\\\\s*\\\\}\\\\s*catch\\\\s*\\\\(e\\\\)\\\\s*\\\\{\\\\s*console\\\\.error\\\\(e\\\\);?\\\\s*\\\\}",
  "try { riskyFunction(); } catch (e) { console.error(e); }",
  "// Bungkus dengan try catch\\n"
);
replaceStep("ai-4-3",
  "Simpan nilai `process.env.SECRET_KEY` ke dalam variabel konstanta bernama `key`.",
  "const\\\\s+key\\\\s*=\\\\s*process\\\\.env\\\\.SECRET_KEY",
  "const key = process.env.SECRET_KEY;",
  "// Baca dari env\\n"
);
replaceStep("ai-4-4",
  "Tugaskan nilai boolean `true` ke variabel konstanta bernama `isPublicCode`.",
  "const\\\\s+isPublicCode\\\\s*=\\\\s*true",
  "const isPublicCode = true;"
);
replaceStep("ai-4-5",
  "Tuliskan pengondisian yang akan melakukan `throw new Error(\\'Division by zero\\')` jika variabel `b` sama dengan nilai nol.",
  "if\\\\s*\\\\(\\\\s*b\\\\s*===\\\\s*0\\\\s*\\\\)\\\\s*throw\\\\s+new\\\\s+Error\\\\((['\\\"])Division\\\\s*by\\\\s*zero\\\\1\\\\)",
  "if (b === 0) throw new Error('Division by zero');",
  "// Tulis pengondisian b === 0 di bawah ini\\n"
);
replaceStep("ai-4-6",
  "Simpan string nama kamu ke dalam variabel bernama `commitOwner`.",
  "const\\\\s+commitOwner\\\\s*=\\\\s*(['\\\"]).+\\\\1",
  "const commitOwner = 'Developer';"
);

// Module 5
replaceStep("ai-5-1",
  "Buat fungsi `bugSnippet` yang selalu me-return nilai boolean `true`.",
  "function\\\\s+bugSnippet\\\\(\\\\)\\\\s*\\\\{\\\\s*return\\\\s+true;?\\\\s*\\\\}",
  "function bugSnippet() { return true; }",
  "// Buat fungsi bugSnippet di sini\\n"
);
replaceStep("ai-5-2",
  "Buat pengondisian `if` yang mengecek apakah variabel `A` bernilai sama persis dengan `null`. Jika ya, kembalikan string 'is null'.",
  "if\\\\s*\\\\(\\\\s*A\\\\s*===\\\\s*null\\\\s*\\\\)\\\\s*\\\\{\\\\s*return\\\\s+(['\\\"])is\\\\s*null\\\\1;?\\\\s*\\\\}",
  "if (A === null) { return 'is null'; }",
  "// Buat pengecekan null di sini\\n"
);
replaceStep("ai-5-3",
  "Ubah fungsi anonim biasa menjadi fungsi asynchronous bernama `fetchData` yang melakukan `await fetch(\\'/api\\')`.",
  "async\\\\s+function\\\\s+fetchData\\\\(\\\\)\\\\s*\\\\{\\\\s*await\\\\s+fetch\\\\((['\\\"])/api\\\\1\\\\);?\\\\s*\\\\}",
  "async function fetchData() { await fetch('/api'); }",
  "// Buat async function fetchData di sini\\n"
);
replaceStep("ai-5-4",
  "Buat variabel `regex` yang berisi regular expression untuk mencocokkan hanya huruf kecil (a-z) dan angka (0-9) dengan batas awal (^) dan akhir ($).",
  "const\\\\s+regex\\\\s*=\\\\s*/\\\\^\\\\[a-z0-9\\\\]\\\\+\\\\$/",
  "const regex = /^[a-z0-9]+$/;"
);
replaceStep("ai-5-5",
  "Deklarasikan state React `count` beserta setter-nya dengan nilai awal 0 menggunakan hooks `useState`.",
  "const\\\\s*\\\\[\\\\s*count\\\\s*,\\\\s*setCount\\\\s*\\\\]\\\\s*=\\\\s*useState\\\\(\\\\s*0\\\\s*\\\\)",
  "const [count, setCount] = useState(0);"
);

content = content.replace(
  /(id: "ai-5-6"[\s\S]*?instruction:\s*)".*?"([\s\S]*?starterCode:\s*)".*?"([\s\S]*?pattern:\s*)".*?"([\s\S]*?solution:\s*)".*?"/,
  '$1"Tuliskan perintah yang membuang (revert) seluruh perubahan lokal agar file kembali ke kondisi bersih pada cabang aktif saat ini."$2"# Ketik perintah di bawah ini\\n"$3"git\\\\s+checkout\\\\s+\\\\."$4"git checkout ."'
);

// Module 6
replaceStep("ai-6-1",
  "Buat variabel konstanta bernama `isSafe` dengan nilai boolean `false`.",
  "const\\\\s+isSafe\\\\s*=\\\\s*false",
  "const isSafe = false;"
);
replaceStep("ai-6-2",
  "Buat fungsi `interviewAnswer` yang me-return string 'I think aloud'.",
  "function\\\\s+interviewAnswer\\\\(\\\\)\\\\s*\\\\{\\\\s*return\\\\s+(['\\\"])I\\\\s*think\\\\s*aloud\\\\1;?\\\\s*\\\\}",
  "function interviewAnswer() { return 'I think aloud'; }",
  "// Buat fungsi interviewAnswer di sini\\n"
);
replaceStep("ai-6-3",
  "Buat sebuah kelas kosong bernama `SystemArchitect`.",
  "class\\\\s+SystemArchitect\\\\s*\\\\{\\\\s*\\\\}",
  "class SystemArchitect {}"
);
replaceStep("ai-6-4",
  "Buat fungsi `thinkFor15Mins` yang selalu me-return nilai boolean `true`.",
  "function\\\\s+thinkFor15Mins\\\\(\\\\)\\\\s*\\\\{\\\\s*return\\\\s+true;?\\\\s*\\\\}",
  "function thinkFor15Mins() { return true; }",
  "// Buat fungsi thinkFor15Mins di sini\\n"
);
replaceStep("ai-6-5",
  "Buat variabel konstanta bernama `markdownDecision` yang berisi string 'Chosen PostgreSQL for relational integrity'.",
  "const\\\\s+markdownDecision\\\\s*=\\\\s*(['\\\"])Chosen\\\\s*PostgreSQL\\\\s*for\\\\s*relational\\\\s*integrity\\\\1",
  "const markdownDecision = 'Chosen PostgreSQL for relational integrity';"
);

fs.writeFileSync('src/data/tracks/ai-dev.ts', content);
