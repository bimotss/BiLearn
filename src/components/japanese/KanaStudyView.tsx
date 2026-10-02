"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import type { KanaItem, ConfusionPair, QuizQuestion } from "@/data/japanese/kana-data";

interface KanaStudyViewProps {
  title: string;
  kanaType: "hiragana" | "katakana";
  subtitle: string;
  description: string;
  items: KanaItem[];
  confusionPairs: ConfusionPair[];
  quizQuestions: QuizQuestion[];
  accentColor: string;
}

export function KanaStudyView({
  title,
  kanaType,
  subtitle,
  description,
  items,
  confusionPairs,
  quizQuestions,
  accentColor,
}: KanaStudyViewProps) {
  const [activeTab, setActiveTab] = useState<"bagan" | "materi" | "latihan">("bagan");
  const [selectedRow, setSelectedRow] = useState<string>("all");
  const [selectedChar, setSelectedChar] = useState<KanaItem | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const rows = useMemo(
    () => [
      { id: "all", label: "Semua (46)" },
      { id: "a", label: "Vokal (A-I-U-E-O)" },
      { id: "ka", label: "Baris Ka" },
      { id: "sa", label: "Baris Sa" },
      { id: "ta", label: "Baris Ta" },
      { id: "na", label: "Baris Na" },
      { id: "ha", label: "Baris Ha" },
      { id: "ma", label: "Baris Ma" },
      { id: "ya", label: "Baris Ya" },
      { id: "ra", label: "Baris Ra" },
      { id: "wa", label: "Baris Wa/N" },
    ],
    []
  );

  const filteredItems = useMemo(() => {
    if (selectedRow === "all") return items;
    if (selectedRow === "wa")
      return items.filter((i) => i.row === "wa" || i.row === "n");
    return items.filter((i) => i.row === selectedRow);
  }, [items, selectedRow]);

  const modalBoxRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerElRef = useRef<HTMLElement | null>(null);

  // Focus management dan Escape key listener untuk dialog detail huruf
  useEffect(() => {
    if (!selectedChar) return;

    // Simpan elemen yang membuka dialog agar fokus kembali saat ditutup
    triggerElRef.current = document.activeElement as HTMLElement | null;

    // Pindahkan fokus ke tombol tutup di dalam dialog
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 15);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setSelectedChar(null);
        return;
      }

      if (e.key !== "Tab" || !modalBoxRef.current) return;

      const focusable = modalBoxRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      triggerElRef.current?.focus();
    };
  }, [selectedChar]);

  const currentQ = quizQuestions[currentQuestionIndex];

  const handleSelectOption = (option: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(option);
    if (option === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header & Navigasi Kembali */}
      <div>
        <Link
          href="/bahasa/jepang"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-300 transition-colors mb-4 cursor-pointer"
        >
          <span aria-hidden="true">←</span> Kembali ke Hub Bahasa Jepang
        </Link>
        <div className="rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md shadow-sm">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {title}
                </h1>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    accentColor === "emerald"
                      ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                      : "border border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300"
                  }`}
                >
                  {subtitle}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigasi Utama */}
      <div className="flex border-b border-slate-200 dark:border-white/[0.08] gap-1 sm:gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("bagan")}
          className={`cursor-pointer flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all -mb-px rounded-t-xl ${
            activeTab === "bagan"
              ? "border-amber-500 text-amber-800 dark:border-amber-400 dark:text-amber-300 bg-amber-500/10 dark:bg-white/[0.04]"
              : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.02]"
          }`}
        >
          <span>📋</span>
          <span>Bagan Huruf & Romaji</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("materi")}
          className={`cursor-pointer flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all -mb-px rounded-t-xl ${
            activeTab === "materi"
              ? "border-amber-500 text-amber-800 dark:border-amber-400 dark:text-amber-300 bg-amber-500/10 dark:bg-white/[0.04]"
              : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.02]"
          }`}
        >
          <span>✍️</span>
          <span>Kaidah Penulisan (Hitsujun)</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("latihan")}
          className={`cursor-pointer flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all -mb-px rounded-t-xl ${
            activeTab === "latihan"
              ? "border-amber-500 text-amber-800 dark:border-amber-400 dark:text-amber-300 bg-amber-500/10 dark:bg-white/[0.04]"
              : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.02]"
          }`}
        >
          <span>🎯</span>
          <span>Latihan Interaktif ({quizQuestions.length} Soal)</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: BAGAN HURUF & ROMAJI */}
      {/* ========================================================================= */}
      {activeTab === "bagan" && (
        <div className="space-y-6">
          {/* Filter Baris */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100 border border-slate-200 dark:bg-slate-900/80 dark:border-white/[0.08] rounded-2xl backdrop-blur-sm">
            {rows.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setSelectedRow(r.id)}
                className={`cursor-pointer rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                  selectedRow === r.id
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/80 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.06]"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-4 text-xs text-slate-600 dark:text-slate-300 flex flex-wrap items-center justify-between gap-2 backdrop-blur-sm shadow-xs">
            <span>
              💡 <strong className="text-slate-900 dark:text-white">Tip Belajar:</strong> Ketuk pada kartu huruf mana pun untuk melihat panduan langkah goresan (stroke order), cara baca, dan contoh kata nyata.
            </span>
            <span className="font-semibold text-slate-500 dark:text-slate-400">{filteredItems.length} karakter</span>
          </div>

          {/* Grid Karakter */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {filteredItems.map((item) => (
              <button
                key={item.char}
                type="button"
                onClick={() => setSelectedChar(item)}
                className="group cursor-pointer flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 transition-all duration-200 hover:border-amber-400/60 hover:bg-slate-50 dark:hover:bg-slate-900/90 hover:scale-[1.03] hover:shadow-md dark:hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] text-center shadow-xs"
              >
                <span
                  lang="ja"
                  className="text-4xl sm:text-5xl font-black text-slate-900 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-300 transition-colors"
                >
                  {item.char}
                </span>
                <span className="mt-2 text-sm font-mono font-bold text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white">
                  /{item.romaji}/
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  {item.strokes} goresan
                </span>
              </button>
            ))}
          </div>

          {/* Modal / Dialog Detail Karakter */}
          {selectedChar && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in"
              onClick={() => setSelectedChar(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-kana-title"
            >
              <div
                ref={modalBoxRef}
                className="w-full max-w-md rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900/95 p-6 shadow-2xl space-y-5 text-slate-900 dark:text-white backdrop-blur-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between border-b border-slate-200 dark:border-white/[0.08] pb-4">
                  <div>
                    <span
                      id="dialog-kana-title"
                      className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400"
                    >
                      Detail Karakter {kanaType === "hiragana" ? "Hiragana" : "Katakana"}
                    </span>
                    <div className="flex items-baseline gap-3 mt-1.5">
                      <span
                        lang="ja"
                        className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white"
                      >
                        {selectedChar.char}
                      </span>
                      <span className="text-2xl font-bold font-mono text-amber-700 dark:text-amber-300">
                        /{selectedChar.romaji}/
                      </span>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 rounded-lg bg-slate-100 dark:bg-white/[0.08] px-2.5 py-1">
                        {selectedChar.strokes} Goresan
                      </span>
                    </div>
                  </div>
                  <button
                    ref={closeBtnRef}
                    type="button"
                    onClick={() => setSelectedChar(null)}
                    className="cursor-pointer rounded-xl p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:text-slate-900 dark:hover:text-white transition focus-visible:ring-2 focus-visible:ring-amber-400"
                    aria-label="Tutup dialog karakter (Escape)"
                  >
                    ✕
                  </button>
                </div>

                {/* Urutan Goresan (Stroke Order) */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Urutan Langkah Penulisan (Stroke Order)
                  </p>
                  <ol className="space-y-2 list-decimal list-inside text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-[#090d16] p-3.5 rounded-2xl border border-slate-200 dark:border-white/[0.06]">
                    {selectedChar.strokeGuide.map((step, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Contoh Kosakata */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Contoh Kosakata Nyata
                  </p>
                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#090d16] p-3.5 text-sm">
                    <div>
                      <span
                        lang="ja"
                        className="text-xl font-bold text-slate-900 dark:text-white"
                      >
                        {selectedChar.example.word}
                      </span>{" "}
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        ({selectedChar.example.romaji})
                      </span>
                    </div>
                    <span className="font-semibold text-amber-700 dark:text-amber-300">
                      {selectedChar.example.meaning}
                    </span>
                  </div>
                </div>

                {/* Tips Penulisan */}
                {selectedChar.tips && (
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                    💡 <strong className="text-amber-950 dark:text-amber-100">Kiat Mengingat:</strong> {selectedChar.tips}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedChar(null)}
                    className="cursor-pointer w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-2.5 text-sm font-bold text-slate-950 transition hover:from-amber-300 hover:to-amber-400 focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    Tutup (Esc)
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: MODUL CARA PENULISAN & KAIDAH GORESAN */}
      {/* ========================================================================= */}
      {activeTab === "materi" && (
        <div className="space-y-8">
          {/* Bagian 1: 4 Prinsip Dasar Urutan Goresan */}
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-6 space-y-4 backdrop-blur-sm shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-bold text-sm">
                1
              </span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                4 Prinsip Pokok Urutan Goresan (筆順 - Hitsujun)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Bahasa Jepang memiliki aturan baku urutan penulisan. Menulis huruf dengan urutan yang benar menghasilkan bentuk yang seimbang, proporsional, serta memudahkan membaca tulisan tangan orang lain maupun teks bersambung.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 dark:border-white/[0.06] dark:bg-slate-800/40 p-4 space-y-1">
                <p className="font-bold text-amber-700 dark:text-amber-300 text-sm">① Atas ke Bawah (上から下へ)</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Goresan di bagian atas selalu ditarik terlebih dahulu sebelum goresan di bagian bawah. Contoh: pada huruf い atau 三, garis atas didahulukan.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 dark:border-white/[0.06] dark:bg-slate-800/40 p-4 space-y-1">
                <p className="font-bold text-amber-700 dark:text-amber-300 text-sm">② Kiri ke Kanan (左から右へ)</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Elemen di sisi kiri ditulis lebih dulu sebelum berpindah ke sisi kanan. Contoh: pada huruf い, garis tiang kiri dibuat sebelum garis kanan.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 dark:border-white/[0.06] dark:bg-slate-800/40 p-4 space-y-1">
                <p className="font-bold text-amber-700 dark:text-amber-300 text-sm">③ Horizontal Sebelum Vertikal (横先縦後)</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Jika ada dua garis yang bersilangan memotong, garis horizontal umumnya ditulis terlebih dahulu sebelum garis vertikal yang memotongnya. Contoh: 十, た, さ.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 dark:border-white/[0.06] dark:bg-slate-800/40 p-4 space-y-1">
                <p className="font-bold text-amber-700 dark:text-amber-300 text-sm">④ Tengah Sebelum Sayap Kanan-Kiri (中先両側)</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Pada karakter yang memiliki tiang simetris di tengah, garis tengah dibuat lebih dulu, lalu diikuti sayap kiri dan sayap kanan. Contoh: 小, 水.
                </p>
              </div>
            </div>
          </div>

          {/* Bagian 2: 3 Jenis Ujung Goresan */}
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-6 space-y-4 backdrop-blur-sm shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-bold text-sm">
                2
              </span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                3 Karakteristik Ujung Goresan (Tome, Hane, Harai)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Setiap goresan huruf Jepang diakhiri dengan salah satu dari tiga teknik dasar berikut:
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 dark:border-white/[0.06] dark:bg-slate-800/40 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🛑</span>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Tome (止め) — Berhenti</p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Pena atau kuas ditekan dan <strong className="text-slate-900 dark:text-white">dihentikan dengan tegas</strong> di akhir goresan tanpa melayang. Garis berakhir padat dan rapi.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 dark:border-white/[0.06] dark:bg-slate-800/40 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🪝</span>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Hane (跳ね) — Kait</p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Di ujung goresan, pena disentakkan sedikit membentuk <strong className="text-slate-900 dark:text-white">kait kecil yang tajam</strong> ke atas atau ke samping sebelum diangkat.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 dark:border-white/[0.06] dark:bg-slate-800/40 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🖌️</span>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">Harai (払い) — Sapuan</p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tekanan pena dikurangi secara perlahan saat bergerak, menghasilkan <strong className="text-slate-900 dark:text-white">ujung garis yang menipis runcing</strong> melayang.
                </p>
              </div>
            </div>
          </div>

          {/* Bagian 3: Peringatan Huruf Mirip (Confusion Pairs) */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/20 p-6 space-y-4 backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">⚠️</span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Jebakan Huruf Mirip yang Sering Membingungkan
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Berikut adalah pasangan karakter yang paling sering membuat pembelajar pemula keliru. Perhatikan arah tarikan garis dan sudut lengkungannya:
            </p>

            <div className="space-y-3">
              {confusionPairs.map((pair, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/80 p-4 space-y-2 shadow-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-white/[0.06] pb-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{pair.title}</h3>
                    <div className="flex gap-2 text-2xl font-bold text-amber-700 dark:text-amber-300" lang="ja">
                      {pair.chars.map((c, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-lg bg-amber-500/15 border border-amber-500/30"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{pair.explanation}</p>
                  <p className="text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                    🔑 Kunci Pembeda: {pair.keyDifference}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bagian 4: Prinsip Kotak Kuadran Imajiner */}
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-6 space-y-2 backdrop-blur-sm shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              📐 Kiat Menulis Rapi: Kotak Imajiner 4 Kuadran
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Saat pertama kali berlatih menulis huruf Jepang di buku berpetak, bayangkan setiap huruf berada di dalam kotak bujur sangkar yang dibagi menjadi 4 kuadran (kiri-atas, kanan-atas, kiri-bawah, kanan-bawah). Pastikan titik tengah karakter berada seimbang di pusat kotak, jangan terlalu condong ke salah satu sudut.
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: LATIHAN INTERAKTIF (KUIS PENILAIAN DIRI) */}
      {/* ========================================================================= */}
      {activeTab === "latihan" && (
        <div className="space-y-6">
          {!quizCompleted ? (
            <div className="rounded-3xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/80 p-6 sm:p-8 shadow-xl dark:shadow-2xl backdrop-blur-xl space-y-6">
              {/* Header Sesi */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] pb-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <span>Soal {currentQuestionIndex + 1} dari {quizQuestions.length}</span>
                <span className="text-amber-700 dark:text-amber-300 font-bold">
                  Skor Sementara: {score}/{currentQuestionIndex}
                </span>
              </div>

              {/* Bar Progress */}
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300"
                  style={{
                    width: `${Math.round(((currentQuestionIndex + 1) / quizQuestions.length) * 100)}%`,
                  }}
                />
              </div>

              {/* Soal */}
              <div className="text-center py-4 space-y-3">
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                  {currentQ.question}
                </p>
                <div
                  lang="ja"
                  className="text-6xl sm:text-7xl font-black text-slate-900 dark:text-white tracking-wide select-none drop-shadow-md"
                >
                  {currentQ.target}
                </div>
              </div>

              {/* Pilihan Jawaban */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === currentQ.correctAnswer;
                  let btnStyle = "border-slate-200 bg-slate-50 hover:border-amber-400/50 hover:bg-slate-100 text-slate-800 dark:border-white/[0.08] dark:bg-slate-800/40 dark:hover:bg-slate-800/80 dark:text-slate-200";

                  if (selectedAnswer !== null) {
                    if (isCorrect) {
                      btnStyle = "border-emerald-500/60 bg-emerald-500/15 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-500/50";
                    } else if (isSelected) {
                      btnStyle = "border-rose-500/60 bg-rose-500/15 text-rose-900 dark:text-rose-200 font-bold ring-2 ring-rose-500/50";
                    } else {
                      btnStyle = "border-slate-200 bg-slate-50/50 text-slate-400 dark:border-white/[0.04] dark:bg-slate-800/20 dark:text-slate-500 opacity-40";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={selectedAnswer !== null}
                      onClick={() => handleSelectOption(option)}
                      className={`cursor-pointer flex items-center justify-between rounded-xl border p-4 text-left font-medium transition disabled:cursor-default ${btnStyle}`}
                    >
                      <span className="text-base sm:text-lg">{option}</span>
                      {selectedAnswer !== null && isCorrect && (
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs">✓ Benar</span>
                      )}
                      {selectedAnswer !== null && isSelected && !isCorrect && (
                        <span className="text-rose-600 dark:text-rose-400 font-bold text-xs">✗ Salah</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Pembahasan & Tombol Lanjut */}
              {selectedAnswer !== null && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/[0.08] dark:bg-[#090d16] p-4.5 space-y-3 animate-fade-in shadow-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="text-lg">
                      {selectedAnswer === currentQ.correctAnswer ? "🎉" : "💡"}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {currentQ.explanation}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="cursor-pointer w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-3 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:from-amber-300 hover:to-amber-400"
                  >
                    {currentQuestionIndex + 1 < quizQuestions.length ? "Soal Berikutnya →" : "Lihat Hasil Akhir 🎉"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* RINGKASAN AKHIR KUIS */
            <div className="rounded-3xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/80 p-8 text-center space-y-6 shadow-xl dark:shadow-2xl backdrop-blur-xl">
              <div className="space-y-2">
                <span className="text-5xl" aria-hidden="true">
                  {score >= 8 ? "🏆" : score >= 6 ? "👏" : "💪"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Latihan Selesai!
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Kamu telah menyelesaikan latihan {kanaType === "hiragana" ? "Hiragana" : "Katakana"}.
                </p>
              </div>

              {/* Kotak Skor */}
              <div className="max-w-xs mx-auto rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/[0.08] dark:bg-[#090d16] p-6 space-y-2 shadow-xs">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Skor Akhir
                </p>
                <p className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                  {score} / {quizQuestions.length}
                </p>
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">
                  Akurasi: {Math.round((score / quizQuestions.length) * 100)}%
                </p>
              </div>

              <div className="space-y-3 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={handleRestartQuiz}
                  className="cursor-pointer w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-3 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-400"
                >
                  Ulangi Latihan Kuis
                </button>
                <Link
                  href="/bahasa/jepang"
                  className="block w-full text-center rounded-xl py-2.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
                >
                  Kembali ke Hub Bahasa Jepang
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
