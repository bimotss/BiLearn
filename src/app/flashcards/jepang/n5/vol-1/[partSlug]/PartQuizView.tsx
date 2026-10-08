"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
import type { FlashcardPart, JapaneseFlashcardItem, PartQuizQuestion } from "@/lib/flashcard-types";
import { generatePartQuizQuestions, type QuizQuestionFilter } from "@/data/flashcards";
import { useFlashcardProgress } from "@/lib/flashcards-progress";

interface PartQuizViewProps {
  part: FlashcardPart;
  cards: JapaneseFlashcardItem[];
  allDeckCards?: JapaneseFlashcardItem[];
  onSwitchToFlashcard?: () => void;
}

export function PartQuizView({
  part,
  cards,
  allDeckCards = [],
  onSwitchToFlashcard,
}: PartQuizViewProps) {
  const { getPartQuizScore, savePartQuizScore } = useFlashcardProgress();

  const [selectedFilter, setSelectedFilter] = useState<QuizQuestionFilter>("all");
  const [questions, setQuestions] = useState<PartQuizQuestion[]>(() =>
    generatePartQuizQuestions(cards, allDeckCards, "all")
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showFuriganaHint, setShowFuriganaHint] = useState(false);
  const [userAnswers, setUserAnswers] = useState<
    Array<{
      question: PartQuizQuestion;
      chosen: string;
      isCorrect: boolean;
    }>
  >([]);

  const totalQuestions = questions.length;
  const currentQ = questions[currentIndex];
  const progressPct = totalQuestions > 0 ? Math.round((currentIndex / totalQuestions) * 100) : 0;

  const existingRecord = getPartQuizScore(part.slug);

  const handleSelectOption = useCallback(
    (option: string) => {
      if (selectedOption !== null || !currentQ) return;

      const isCorrect = option === currentQ.correctAnswer;
      setSelectedOption(option);
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }

      setUserAnswers((prev) => [
        ...prev,
        {
          question: currentQ,
          chosen: option,
          isCorrect,
        },
      ]);
    },
    [selectedOption, currentQ]
  );

  const handleNext = useCallback(() => {
    if (selectedOption === null) return;

    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowFuriganaHint(false);
    } else {
      const finalScore = score + (selectedOption === currentQ?.correctAnswer ? 0 : 0);
      setIsCompleted(true);
      if (selectedFilter === "all") {
        savePartQuizScore(part.slug, finalScore, totalQuestions);
      }
    }
  }, [selectedOption, currentIndex, totalQuestions, score, currentQ, selectedFilter, part.slug, savePartQuizScore]);

  const handleChangeFilter = useCallback(
    (newFilter: QuizQuestionFilter) => {
      setSelectedFilter(newFilter);
      const freshQuestions = generatePartQuizQuestions(cards, allDeckCards, newFilter);
      setQuestions(freshQuestions);
      setCurrentIndex(0);
      setSelectedOption(null);
      setScore(0);
      setIsCompleted(false);
      setShowFuriganaHint(false);
      setUserAnswers([]);
    },
    [cards, allDeckCards]
  );

  const handleRestartQuiz = useCallback(() => {
    const freshQuestions = generatePartQuizQuestions(cards, allDeckCards, selectedFilter);
    setQuestions(freshQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsCompleted(false);
    setShowFuriganaHint(false);
    setUserAnswers([]);
  }, [cards, allDeckCards, selectedFilter]);

  // Keyboard shortcut listener: 1-4 for options, Enter/Space for next
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (isCompleted) {
        if (e.key === "r" || e.key === "R") {
          e.preventDefault();
          handleRestartQuiz();
        }
        return;
      }

      if (selectedOption === null && currentQ) {
        if (["1", "2", "3", "4"].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          if (idx >= 0 && idx < currentQ.options.length) {
            e.preventDefault();
            handleSelectOption(currentQ.options[idx]);
          }
        }
      } else if (selectedOption !== null) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleNext();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCompleted, selectedOption, currentQ, handleSelectOption, handleNext, handleRestartQuiz]);

  const missedAnswers = useMemo(
    () => userAnswers.filter((a) => !a.isCorrect),
    [userAnswers]
  );

  return (
    <div className="space-y-6">
      {!isCompleted ? (
        <div className="space-y-6">
          {/* Header Bar Kuis: Progress, Skor & Segmented Filter */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-5 backdrop-blur-sm shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Kuis Objektif · {part.title}
                  </span>
                  <span className="rounded-md border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.05] px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                    {totalQuestions} Soal
                  </span>
                </div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Soal {currentIndex + 1} <span className="text-sm font-normal text-slate-400 dark:text-slate-500">/ {totalQuestions}</span>
                </p>
              </div>

              <div className="text-right">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Skor Sementara
                </p>
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {score} <span className="text-xs font-normal text-slate-400 dark:text-slate-500">/ {currentIndex}</span>
                </p>
              </div>
            </div>

            {/* Segmented Filter Control */}
            <div className="pt-2 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1">
                Fokus:
              </span>
              <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-white/5 gap-1 flex-wrap">
                <button
                  type="button"
                  onClick={() => handleChangeFilter("all")}
                  className={`cursor-pointer px-3 py-1 rounded-lg text-xs transition-all ${
                    selectedFilter === "all"
                      ? "bg-white dark:bg-slate-900 text-slate-950 dark:text-white font-bold shadow-2xs border border-slate-200/50 dark:border-white/10"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
                  }`}
                >
                  Semua ({cards.length * 3})
                </button>
                <button
                  type="button"
                  onClick={() => handleChangeFilter("kanji-to-hiragana-meaning")}
                  className={`cursor-pointer px-3 py-1 rounded-lg text-xs transition-all ${
                    selectedFilter === "kanji-to-hiragana-meaning"
                      ? "bg-white dark:bg-slate-900 text-slate-950 dark:text-white font-bold shadow-2xs border border-slate-200/50 dark:border-white/10"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
                  }`}
                >
                  Hiragana & Arti ({cards.length})
                </button>
                <button
                  type="button"
                  onClick={() => handleChangeFilter("kanji-to-meaning")}
                  className={`cursor-pointer px-3 py-1 rounded-lg text-xs transition-all ${
                    selectedFilter === "kanji-to-meaning"
                      ? "bg-white dark:bg-slate-900 text-slate-950 dark:text-white font-bold shadow-2xs border border-slate-200/50 dark:border-white/10"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
                  }`}
                >
                  Kanji ➔ Arti ({cards.length})
                </button>
                <button
                  type="button"
                  onClick={() => handleChangeFilter("meaning-to-kanji")}
                  className={`cursor-pointer px-3 py-1 rounded-lg text-xs transition-all ${
                    selectedFilter === "meaning-to-kanji"
                      ? "bg-white dark:bg-slate-900 text-slate-950 dark:text-white font-bold shadow-2xs border border-slate-200/50 dark:border-white/10"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
                  }`}
                >
                  Arti ➔ Kanji ({cards.length})
                </button>
              </div>
            </div>

            {/* Bar Progres */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full rounded-full transition-all duration-300 bg-rose-600 dark:bg-rose-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Kotak Pertanyaan Utama */}
          {currentQ && (
            <div className="rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md shadow-xs space-y-6">
              {/* Badge Tipe Soal */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-white/[0.06] pb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-800/60 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                  <span>
                    {currentQ.type === "kanji-to-meaning"
                      ? "Tipe 1 · Kanji ➔ Arti"
                      : currentQ.type === "meaning-to-kanji"
                      ? "Tipe 2 · Arti ➔ Kanji"
                      : "Tipe 3 · Kanji ➔ Hiragana & Arti"}
                  </span>
                </span>

                <span className="text-xs text-slate-400 dark:text-slate-500 font-mono hidden sm:inline">
                  Gunakan tombol angka [1]–[4] pada keyboard
                </span>
              </div>

              {/* Tampilan Pertanyaan */}
              <div className="text-center py-6 space-y-3">
                {currentQ.type === "meaning-to-kanji" ? (
                  <>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Pilih karakter Kanji yang tepat untuk arti:
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      &ldquo;{currentQ.prompt}&rdquo;
                    </h2>
                  </>
                ) : currentQ.type === "kanji-to-hiragana-meaning" ? (
                  <>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Pilih cara baca (hiragana) dan arti yang tepat:
                    </p>
                    <h2
                      lang="ja"
                      className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white tracking-wide"
                    >
                      {currentQ.prompt}
                    </h2>
                  </>
                ) : (
                  <>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Apa arti dari kosakata di bawah ini?
                    </p>
                    <h2
                      lang="ja"
                      className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white tracking-wide"
                    >
                      {currentQ.prompt}
                    </h2>
                    {showFuriganaHint && currentQ.promptSub && (
                      <p
                        lang="ja"
                        className="text-base sm:text-lg font-bold text-rose-600 dark:text-rose-400 transition-all animate-fadeIn"
                      >
                        {currentQ.promptSub}
                      </p>
                    )}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => setShowFuriganaHint((v) => !v)}
                        className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition underline underline-offset-4"
                      >
                        {showFuriganaHint ? "Sembunyikan furigana" : "Bantuan cara baca (furigana)"}
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Grid 4 Opsi Pilihan Ganda */}
              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                {currentQ.options.map((option, idx) => {
                  const isChosen = selectedOption === option;
                  const isCorrectAnswer = option === currentQ.correctAnswer;
                  const isAnswered = selectedOption !== null;

                  let buttonStyle =
                    "border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 hover:border-slate-400 dark:hover:border-white/25 hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-900 dark:text-slate-100";

                  if (isAnswered) {
                    if (isCorrectAnswer) {
                      buttonStyle =
                        "border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 font-semibold shadow-xs";
                    } else if (isChosen && !isCorrectAnswer) {
                      buttonStyle =
                        "border-rose-500 bg-rose-50/70 dark:bg-rose-950/30 text-rose-950 dark:text-rose-100 font-semibold";
                    } else {
                      buttonStyle =
                        "border-slate-200/60 dark:border-white/[0.04] bg-slate-50/40 dark:bg-slate-900/20 text-slate-400 dark:text-slate-500 opacity-50";
                    }
                  }

                  const isType3 = currentQ.type === "kanji-to-hiragana-meaning";
                  const [hiraganaText, meaningText] =
                    isType3 && option.includes(" · ")
                      ? [option.split(" · ")[0], option.split(" · ").slice(1).join(" · ")]
                      : [null, null];

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(option)}
                      className={`cursor-pointer group flex items-center justify-between rounded-2xl border p-4 text-left transition-all duration-150 shadow-2xs ${buttonStyle}`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-mono font-bold transition-all ${
                            isAnswered && isCorrectAnswer
                              ? "bg-emerald-600 text-white"
                              : isAnswered && isChosen
                              ? "bg-rose-600 text-white"
                              : "bg-slate-100 dark:bg-white/[0.06] text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-white/15 group-hover:text-slate-900 dark:group-hover:text-white"
                          }`}
                        >
                          {idx + 1}
                        </span>

                        {isType3 && hiraganaText && meaningText ? (
                          <div className="flex flex-col items-start min-w-0">
                            <span
                              lang="ja"
                              className="text-base sm:text-lg font-bold text-rose-600 dark:text-rose-400 leading-tight"
                            >
                              {hiraganaText}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 line-clamp-2 mt-0.5">
                              {meaningText}
                            </span>
                          </div>
                        ) : (
                          <span
                            lang={currentQ.type === "meaning-to-kanji" ? "ja" : undefined}
                            className={`font-semibold ${
                              currentQ.type === "meaning-to-kanji"
                                ? "text-xl sm:text-2xl"
                                : "text-sm sm:text-base"
                            }`}
                          >
                            {option}
                          </span>
                        )}
                      </div>

                      {isAnswered && (
                        <span className="shrink-0 ml-2">
                          {isCorrectAnswer ? (
                            <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : isChosen ? (
                            <svg className="w-5 h-5 text-rose-600 dark:text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          ) : null}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Kotak Feedback Setelah Menjawab */}
              {selectedOption !== null && (
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/[0.08] animate-fadeIn">
                  <div
                    className={`rounded-2xl border p-4 sm:p-5 ${
                      selectedOption === currentQ.correctAnswer
                        ? "border-emerald-500/30 bg-emerald-500/[0.06] text-emerald-950 dark:text-emerald-200"
                        : "border-rose-500/30 bg-rose-500/[0.06] text-rose-950 dark:text-rose-200"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      {selectedOption === currentQ.correctAnswer ? (
                        <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      )}
                      <p className="font-extrabold text-sm sm:text-base">
                        {selectedOption === currentQ.correctAnswer
                          ? "Jawaban Tepat Sekali"
                          : "Kurang Tepat, Mari Pelajari"}
                      </p>
                    </div>

                    {/* Ringkasan Kosakata & Contoh Kalimat */}
                    <div className="mt-3 rounded-xl bg-white dark:bg-slate-900 p-4 space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10 shadow-2xs">
                      <div className="flex flex-wrap items-baseline gap-2.5">
                        <span lang="ja" className="text-2xl font-black text-slate-900 dark:text-white">
                          {currentQ.card.term}
                        </span>
                        <span lang="ja" className="text-base font-bold text-rose-600 dark:text-rose-400">
                          {currentQ.card.hiragana}
                        </span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          ({currentQ.card.romaji})
                        </span>
                        <span className="text-slate-300 dark:text-slate-600">➔</span>
                        <strong className="text-slate-900 dark:text-white font-bold">
                          {currentQ.card.meaning}
                        </strong>
                      </div>

                      <div className="border-t border-slate-100 dark:border-white/10 pt-2.5 space-y-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          Contoh Penggunaan:
                        </p>
                        <p lang="ja" className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                          {currentQ.card.exampleJapanese}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                          &ldquo;{currentQ.card.exampleMeaning}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tombol Lanjut ke Soal Berikutnya */}
                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all"
                    >
                      <span>
                        {currentIndex + 1 < totalQuestions ? "Soal Berikutnya →" : "Lihat Hasil Kuis →"}
                      </span>
                      <span className="hidden sm:inline text-xs opacity-80 font-mono">
                        (Enter / Spasi)
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* ========================================================================= */
        /* LAYAR HASIL & EVALUASI AKHIR */
        /* ========================================================================= */
        <div className="rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/80 p-6 sm:p-10 shadow-lg backdrop-blur-xl space-y-8 animate-fadeIn">
          {/* Header Skor */}
          <div className="text-center space-y-3">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              {score === totalQuestions ? (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                </svg>
              ) : (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Kuis Selesai
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              {score === totalQuestions
                ? `Luar biasa sempurna! Kamu menjawab seluruh ${totalQuestions} pertanyaan ${part.title} dengan tepat.`
                : score / totalQuestions >= 0.8
                ? `Kerja bagus! Penguasaan kosakata ${part.title} sudah sangat solid.`
                : score / totalQuestions >= 0.6
                ? "Cukup baik. Beberapa kosakata masih perlu diperkuat lewat kartu flashcard."
                : "Tetap semangat! Disarankan untuk meninjau kembali kata-kata di bawah ini lewat kartu flashcard."}
            </p>
          </div>

          {/* Kartu Ringkasan Statistik */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-slate-800/40 p-4 text-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Skor Akhir
              </p>
              <p className="mt-1 text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {score} <span className="text-sm font-normal text-slate-400 dark:text-slate-500">/ {totalQuestions}</span>
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Akurasi
              </p>
              <p className="mt-1 text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0}%
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Jawaban Benar
              </p>
              <p className="mt-1 text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                {score}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Jawaban Salah
              </p>
              <p className="mt-1 text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400">
                {totalQuestions - score}
              </p>
            </div>
          </div>

          {/* Rekor Skor Tersimpan */}
          {existingRecord && (
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/40 p-3.5 flex items-center justify-between text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <span className="font-semibold">
                Skor Tertinggi Tersimpan: {existingRecord.bestScore} / {existingRecord.totalQuestions || totalQuestions} ({Math.round((existingRecord.bestScore / (existingRecord.totalQuestions || totalQuestions)) * 100)}%)
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {existingRecord.bestScore === (existingRecord.totalQuestions || totalQuestions) ? "Sempurna" : "Tersimpan Otomatis"}
              </span>
            </div>
          )}

          {/* Daftar Review Evaluasi Kesalahan */}
          {missedAnswers.length > 0 ? (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>Evaluasi Kosakata ({missedAnswers.length} Soal Perlu Dipelajari)</span>
              </h3>
              <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                {missedAnswers.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-rose-500/20 bg-rose-500/[0.04] dark:bg-rose-500/[0.08] p-3.5 text-xs sm:text-sm space-y-1.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span lang="ja" className="font-bold text-base text-slate-900 dark:text-white">
                          {item.question.card.term}
                        </span>
                        <span lang="ja" className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                          {item.question.card.hiragana}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          ({item.question.card.romaji})
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">
                        {item.question.type === "kanji-to-meaning"
                          ? "Kanji ➔ Arti"
                          : item.question.type === "meaning-to-kanji"
                          ? "Arti ➔ Kanji"
                          : "Kanji ➔ Hiragana + Arti"}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                      <div>
                        <span className="text-slate-500">Pilihanmu: </span>
                        <span className="font-semibold text-rose-700 dark:text-rose-300 line-through">
                          {item.chosen}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500">Kunci Benar: </span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-300">
                          {item.question.correctAnswer}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300">
              Sempurna! Kamu tidak membuat satu pun kesalahan pada sesi ini.
            </div>
          )}

          {/* Tombol Aksi */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={handleRestartQuiz}
              className="cursor-pointer w-full rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 py-3 text-sm font-bold text-white shadow-xs transition-all"
            >
              Ulangi Kuis (Acak Soal Baru)
            </button>

            {onSwitchToFlashcard && (
              <button
                type="button"
                onClick={onSwitchToFlashcard}
                className="cursor-pointer w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 py-3 text-sm font-bold text-slate-800 dark:text-slate-200 transition-all"
              >
                Pelajari Ulang di Mode Flashcard
              </button>
            )}

            <Link
              href="/flashcards/jepang"
              className="cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800/80 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              <span aria-hidden="true">←</span>
              <span>Kembali ke Daftar Bagian</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
