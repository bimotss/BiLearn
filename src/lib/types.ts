// ==========================================
// BiLearn — Struktur data konten
// Track = satu teknologi, lengkap dari nol sampai mahir.
// LearningPath = urutan track sesuai tujuan karier (lapisan di atas track).
// Semua konten terbuka; prasyarat hanya rekomendasi.
// ==========================================

/** Satu teknologi (HTML, CSS, JS, ...) */
export interface Track {
  slug: string;
  title: string;
  description: string;
  /** Estimasi total jam belajar */
  hours: number;
  /** Slug track lain yang DISARANKAN (bukan wajib) diselesaikan dulu */
  recommendedPrereqs: string[];
  /** Warna aksen kartu (kelas Tailwind, mis. "bg-orange-500") */
  color: string;
  /** Emoji/ikon sederhana untuk MVP */
  icon: string;
  modules: Module[];
  /** Urutan default di halaman utama */
  order: number;
}

export interface Module {
  slug: string;
  title: string;
  description: string;
  /** Daftar bab/topik yang dibahas modul ini (silabus). Tampil di halaman track. */
  topics: string[];
  /** Step interaktif + kuis, berurutan. Kosong = konten interaktif menyusul. */
  items: ModuleItem[];
}

export type ModuleItem = Step | Quiz | Materi;

/** Halaman BACA-DULU tanpa editor kode */
export interface Materi {
  kind: "materi";
  id: string;
  title: string;
  /** Content dalam Markdown: pengertian, konsep, analogi, use case, contoh kode */
  body: string;
}

/**
 * Varian "susun kode": user tidak mengetik, ia merangkai kode dari kepingan
 * yang disediakan. Hasil rangkaiannya adalah kode sungguhan, jadi dinilai
 * memakai `tests` step yang sama dengan mode ngetik — bukan mesin penilai
 * kedua yang bisa bergeser sendiri.
 */
export interface StepSusunKode {
  /** Pertanyaan. Kalau kosong, UI memakai `instruction`. */
  question?: string;
  /**
   * Kepingan yang BENAR, ditulis dalam urutan yang benar. Digabung dengan
   * `pemisah`, hasilnya wajib lolos seluruh `tests` step ini (dijaga skrip).
   */
  potongan: string[];
  /**
   * Kepingan pengecoh. WAJIB diambil dari kesalahan nyata (`href` alih-alih
   * `src`, `</img>`, tag penutup tanpa garis miring), bukan dikarang atau
   * dipotong-potong dari solusi. Skrip verifikasi menolak pengecoh yang
   * ternyata tidak membuat satu tes pun gagal.
   */
  pengecoh: string[];
  /** Perekat antar kepingan: " " (default) untuk satu baris, "\n" untuk banyak baris. */
  pemisah?: string;
  /** Kenapa susunannya begitu DAN kenapa pengecohnya menggoda. Wajib. */
  explanation: string;
}

/** Challenge interaktif kecil: baca penjelasan singkat → langsung ngoding */
export interface Step {
  kind: "step";
  id: string;
  title: string;
  /** Penjelasan singkat, 20% teori */
  explanation: string;
  /**
   * Contoh kerja WAJIB: ditampilkan sebelum tugas agar pemula melihat
   * polanya dulu. Kasusnya harus BERBEDA dari tugas (bukan jawaban).
   */
  example: StepExample;
  /** Instruksi tugas yang harus dikerjakan user */
  instruction: string;
  /** Kode awal di editor */
  starterCode: string;
  /**
   * "html" | "css" | "js" → kode DIEKSEKUSI apa adanya di preview.
   * "jsx" → kode dikompilasi dulu (Babel: JSX + TypeScript), lalu komponen
   * terakhir yang terdefinisi dirender. Dipakai untuk React, Next.js, dan
   * TypeScript — keduanya bukan JavaScript valid di browser.
   * "text" → tidak dieksekusi, hanya ditampilkan (untuk perintah shell/git,
   * SQL, PHP, Python, kode Node.js, formula spreadsheet, Markdown). Wajib
   * dipakai untuk konten non-JS, kalau tidak preview akan melempar SyntaxError.
   */
  language: "html" | "css" | "js" | "jsx" | "text";
  /**
   * Untuk step CSS/JS: markup yang di-style/dimanipulasi user, ditampilkan di
   * preview bersama kode user. Diabaikan untuk step HTML.
   */
  previewHtml?: string;
  /** Muat Tailwind (browser CDN) di preview — untuk step latihan Tailwind. */
  loadTailwind?: boolean;
  /** Tes otomatis untuk menilai jawaban */
  tests: StepTest[];
  /** Contoh solusi — ditampilkan jika user memilih "Lihat solusi" */
  solution: string;
  /** Varian susun kode, dipakai saat user memilih mode "pilihan-ganda". */
  susunKode?: StepSusunKode;
}

/** Contoh kerja yang ditampilkan sebelum user mengerjakan tugas */
export interface StepExample {
  /** Kode contoh — kasus berbeda dari tugas */
  code: string;
  /** Hasil/efek dari kode contoh (output konsol atau deskripsi tampilan) */
  output: string;
  /** Catatan singkat: bagian mana yang perlu diperhatikan */
  note?: string;
}

/** Tes sederhana berbasis pola untuk MVP (fase 2: test runner beneran) */
export interface StepTest {
  /** Batasi pemeriksaan ke paragraf pertama setelah salam e-mail. */
  scope?: "email-opening";
  /** Regex yang harus match dengan kode user */
  pattern: string;
  /** Flag regex, default "i" */
  flags?: string;
  /**
   * true = tes LULUS jika pattern TIDAK ditemukan di kode user.
   * Dipakai untuk melarang sesuatu, mis. "jangan pakai .push()".
   * Lebih terbaca daripada negative lookahead `^(?![\s\S]*...)`.
   */
  mustNotMatch?: boolean;
  /** Pesan jika gagal, mis. "Kamu belum menambahkan tag <h1>" */
  message: string;
}

/** Kuis dengan kunci jawaban + penjelasan (ditampilkan setelah menjawab) */
export interface Quiz {
  kind: "quiz";
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export type QuizQuestion =
  | MultipleChoiceQuestion
  | FillInQuestion
  | PredictOutputQuestion;

interface QuizQuestionBase {
  id: string;
  question: string;
  /** Cuplikan kode opsional yang menyertai pertanyaan */
  code?: string;
  /** Kunci jawaban: penjelasan KENAPA — wajib, bukan cuma benar/salah */
  explanation: string;
}

export interface MultipleChoiceQuestion extends QuizQuestionBase {
  type: "pilihan-ganda";
  choices: string[];
  /** Index jawaban benar di array choices */
  answerIndex: number;
}

export interface FillInQuestion extends QuizQuestionBase {
  type: "isian";
  /** Jawaban diterima (case-insensitive, di-trim) */
  acceptedAnswers: string[];
}

export interface PredictOutputQuestion extends QuizQuestionBase {
  type: "prediksi-output";
  code: string;
  acceptedAnswers: string[];
}

/** Urutan track sesuai tujuan karier */
export interface LearningPath {
  slug: string;
  title: string;
  description: string;
  icon: string;
  /** Slug track, berurutan */
  trackSlugs: string[];
}

// ---------- Progress (localStorage, MVP tanpa login) ----------

/** Dua jalur belajar yang progressnya berdiri sendiri-sendiri. */
export type ModeBelajar = "koding" | "pilihan-ganda";

export interface Progress {
  /**
   * itemId yang sudah selesai di dunia KODING, per track: trackSlug -> itemIds.
   *
   * Bentuk dan nama field ini sengaja tidak diubah: progress lama yang sudah
   * ada di browser user tersimpan di sini, dan sebelum mode pilihan ganda ada,
   * semua penyelesaian memang lewat mengetik kode.
   */
  completed: Record<string, string[]>;
  /**
   * itemId yang sudah selesai di dunia PILIHAN GANDA. Berdiri sendiri:
   * menyelesaikan step di sini tidak menambah apa pun di `completed`.
   * Materi dan kuis dicatat di kedua tempat karena isinya tidak berbeda.
   */
  completedPilihanGanda?: Record<string, string[]>;
  /** Path yang sedang dipilih user (opsional) */
  activePath?: string;
  /** Mode belajar global pilihan user: "koding" (default) | "pilihan-ganda" */
  mode?: ModeBelajar;
  /**
   * true kalau user sudah pernah menjawab (atau melewati) layar pemilihan
   * mode. Dipakai supaya layar itu tidak muncul lagi setiap kali membuka situs.
   */
  modeDipilih?: boolean;
  /**
   * PENINGGALAN. Dulu dipakai untuk menandai mode penyelesaian saat progress
   * masih satu ember. Tidak ditulis lagi, tapi sengaja tidak dihapus: field
   * inilah yang dibaca sekali untuk memindahkan progress lama ke dua dunia.
   */
  doneMode?: Record<string, Record<string, ModeBelajar>>;
  /** Penanda bahwa pemisahan ke dua dunia sudah dijalankan untuk data ini. */
  duaDuniaSiap?: boolean;
}
