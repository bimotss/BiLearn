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
   * "html" | "css" | "js" → kode DIEKSEKUSI di preview.
   * "text" → tidak dieksekusi, hanya ditampilkan (untuk perintah shell/git,
   * SQL, PHP, Python, formula spreadsheet, Markdown). Wajib dipakai untuk
   * konten non-JS, kalau tidak preview akan melempar SyntaxError.
   */
  language: "html" | "css" | "js" | "text";
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

export interface Progress {
  /** itemId yang sudah selesai, per track: trackSlug -> itemIds */
  completed: Record<string, string[]>;
  /** Path yang sedang dipilih user (opsional) */
  activePath?: string;
}
