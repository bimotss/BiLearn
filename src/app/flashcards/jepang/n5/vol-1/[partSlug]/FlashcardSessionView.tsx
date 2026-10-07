"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
import type { FlashcardPart, JapaneseFlashcardItem } from "@/lib/flashcard-types";
import { useFlashcardProgress } from "@/lib/flashcards-progress";

interface FlashcardSessionViewProps {
  part: FlashcardPart;
  initialCards: JapaneseFlashcardItem[];
}

function shuffleArray<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function FlashcardSessionView({
  part,
  initialCards,
}: FlashcardSessionViewProps) {
  const { ready, storageWarning, getStatus, markCard, getPartMemorizedCount } =
    useFlashcardProgress();

  const [queue, setQueue] = useState<JapaneseFlashcardItem[]>(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [roundRatings, setRoundRatings] = useState<
    Record<string, "memorized" | "not-memorized">
  >({});
  const [announcement, setAnnouncement] = useState("");

  const isRoundComplete = currentIndex >= queue.length;
  const currentCard: JapaneseFlashcardItem | undefined = queue[currentIndex];

  const partMemorizedCount = ready ? getPartMemorizedCount(part.itemIds) : 0;

  const roundStats = useMemo(() => {
    let memorized = 0;
    let notMemorized = 0;
    for (const val of Object.values(roundRatings)) {
      if (val === "memorized") memorized++;
      if (val === "not-memorized") notMemorized++;
    }
    return {
      reviewed: Object.keys(roundRatings).length,
      memorized,
      notMemorized,
    };
  }, [roundRatings]);

  const unmemorizedCards = useMemo(() => {
    return initialCards.filter((card) => getStatus(card.id) !== "memorized");
  }, [initialCards, getStatus]);

  const handleRevealAnswer = useCallback(() => {
    if (!currentCard) return;
    setIsAnswerShown(true);
    setAnnouncement(`Jawaban dibuka untuk kata ${currentCard.term}.`);
  }, [currentCard]);

  const handlePrevCard = useCallback(() => {
    if (currentIndex <= 0) return;
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    setIsAnswerShown(false);
    setAnnouncement(
      `Kembali ke kartu ${prevIndex + 1} dari ${queue.length}: ${queue[prevIndex].term}`
    );
  }, [currentIndex, queue]);

  const handleRate = useCallback(
    (status: "memorized" | "not-memorized") => {
      if (!isAnswerShown || !currentCard) return;

      const cardId = currentCard.id;
      markCard(cardId, status);
      setRoundRatings((prev) => ({ ...prev, [cardId]: status }));

      setIsAnswerShown(false);
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);

      if (nextIndex >= queue.length) {
        setAnnouncement("Putaran selesai. Menampilkan ringkasan.");
      } else {
        setAnnouncement(
          `Kartu ${nextIndex + 1} dari ${queue.length}: ${queue[nextIndex].term}`
        );
      }
    },
    [isAnswerShown, currentCard, markCard, currentIndex, queue]
  );

  const handleShuffle = useCallback(() => {
    setQueue((prevQueue) => shuffleArray(prevQueue));
    setCurrentIndex(0);
    setIsAnswerShown(false);
    setIsShuffled(true);
    setRoundRatings({});
    setAnnouncement("Urutan kartu berhasil diacak.");
  }, []);

  const handleResetOrder = useCallback(() => {
    setQueue(initialCards);
    setCurrentIndex(0);
    setIsAnswerShown(false);
    setIsShuffled(false);
    setRoundRatings({});
    setAnnouncement("Urutan kartu dikembalikan ke urutan asli.");
  }, [initialCards]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (isRoundComplete) return;

      // Navigasi kartu sebelumnya
      if (e.key === "Backspace" || e.key === "ArrowUp") {
        if (currentIndex > 0) {
          e.preventDefault();
          handlePrevCard();
          return;
        }
      }

      if (!isAnswerShown) {
        if (target?.closest("a, button, summary, select")) {
          return;
        }

        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleRevealAnswer();
        }
      } else {
        if (e.key === "ArrowLeft" || e.key === "1") {
          e.preventDefault();
          handleRate("not-memorized");
        } else if (e.key === "ArrowRight" || e.key === "2") {
          e.preventDefault();
          handleRate("memorized");
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isRoundComplete, isAnswerShown, handleRevealAnswer, handleRate, currentIndex, handlePrevCard]);

  const handleRepeatUnmemorized = (shuffle = false) => {
    if (unmemorizedCards.length === 0) return;
    const cardsToUse = shuffle ? shuffleArray(unmemorizedCards) : unmemorizedCards;
    setQueue(cardsToUse);
    setCurrentIndex(0);
    setIsAnswerShown(false);
    setIsShuffled(shuffle);
    setRoundRatings({});
    setAnnouncement(
      `Memulai putaran ulang dengan ${unmemorizedCards.length} kartu ${shuffle ? "secara acak" : ""}.`
    );
  };

  const handleRepeatAll = (shuffle = false) => {
    const cardsToUse = shuffle ? shuffleArray(initialCards) : initialCards;
    setQueue(cardsToUse);
    setCurrentIndex(0);
    setIsAnswerShown(false);
    setIsShuffled(shuffle);
    setRoundRatings({});
    setAnnouncement(
      shuffle
        ? "Memulai putaran ulang semua 10 kartu dengan urutan acak."
        : "Memulai putaran ulang semua 10 kartu."
    );
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto w-full px-2 sm:px-0">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      {storageWarning && (
        <div
          role="alert"
          className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-xs sm:text-sm text-amber-200"
        >
          {storageWarning}
        </div>
      )}

      {/* Header & Navigasi */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/[0.08] pb-3">
        <Link
          href="/flashcards/jepang"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-2xs hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-white/20 transition cursor-pointer"
        >
          <span aria-hidden="true" className="text-sm font-bold">←</span>
          <span>Kembali ke Daftar Bagian</span>
        </Link>
        <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
          JLPT N5 — Vol. 1 · {part.title}
        </span>
      </div>

      {!isRoundComplete && currentCard ? (
        <div className="space-y-4">
          {/* Posisi, Aksi Acak & Bar Progress Sesi */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              {currentIndex > 0 && (
                <button
                  type="button"
                  onClick={handlePrevCard}
                  className="cursor-pointer inline-flex items-center gap-1 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition shadow-2xs"
                  title="Kembali ke kartu sebelumnya (Backspace / ↑)"
                >
                  <span aria-hidden="true">←</span>
                  <span>Sebelumnya</span>
                </button>
              )}
              <span>
                Kartu {currentIndex + 1} dari {queue.length}
              </span>
              {isShuffled && (
                <span className="rounded-full bg-purple-500/10 border border-purple-500/30 px-2 py-0.5 text-[10px] font-bold text-purple-700 dark:text-purple-300">
                  Acak
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handleShuffle}
                className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-purple-600 dark:hover:text-purple-300 transition shadow-2xs"
                title="Acak urutan kartu di bagian ini"
              >
                <span aria-hidden="true">🔀</span>
                <span>{isShuffled ? "Acak Ulang" : "Acak Kartu"}</span>
              </button>
              {isShuffled && (
                <button
                  type="button"
                  onClick={handleResetOrder}
                  className="cursor-pointer text-[11px] font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline transition"
                  title="Kembalikan urutan sesuai nomor asli"
                >
                  Urutan Asli
                </button>
              )}
              <span className="text-slate-700 dark:text-slate-300">
                Hafal di Bagian Ini: {partMemorizedCount}/10
              </span>
            </div>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-rose-500 to-orange-400 transition-all duration-300"
              style={{
                width: `${Math.round((currentIndex / queue.length) * 100)}%`,
              }}
            />
          </div>

          {/* Kartu Flashcard Pro */}
          <div
            className={`rounded-3xl border bg-white dark:bg-slate-900/80 p-6 sm:p-8 shadow-xl dark:shadow-2xl backdrop-blur-xl transition-all min-h-[22rem] flex flex-col justify-between ${
              isAnswerShown ? "border-rose-400 dark:border-rose-500/40" : "border-slate-200 dark:border-white/[0.08]"
            }`}
          >
            {!isAnswerShown ? (
              /* SISI DEPAN KARTU */
              <div className="flex flex-col items-center justify-center text-center my-auto py-10 space-y-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Kosakata #{currentCard.sourceNo}
                </span>
                <h2
                  lang="ja"
                  className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-widest select-none drop-shadow-md"
                >
                  {currentCard.term}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm">
                  Coba ingat arti dan cara bacanya, lalu buka jawaban di bawah.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  {currentIndex > 0 && (
                    <button
                      type="button"
                      onClick={handlePrevCard}
                      className="cursor-pointer inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition shadow-2xs"
                      title="Kembali ke kartu sebelumnya (Backspace / ↑)"
                    >
                      <span aria-hidden="true">←</span>
                      <span>Sebelumnya</span>
                      <span className="hidden sm:inline text-xs opacity-60 font-mono">
                        (↑)
                      </span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleRevealAnswer}
                    className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:from-amber-300 hover:to-amber-400 hover:scale-[1.02]"
                  >
                    <span>Buka Jawaban</span>
                    <span className="hidden sm:inline text-xs opacity-75 font-mono">
                      (Spasi / Enter)
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              /* SISI BELAKANG KARTU */
              <div className="space-y-5">
                {/* Kata & Bacaan */}
                <div className="border-b border-slate-200 dark:border-white/[0.08] pb-4">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Kosakata #{currentCard.sourceNo}
                  </span>
                  <div className="mt-1 flex flex-wrap items-baseline gap-3">
                    <h2
                      lang="ja"
                      className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white"
                    >
                      {currentCard.term}
                    </h2>
                    <span
                      lang="ja"
                      className="text-xl font-bold text-rose-600 dark:text-rose-300"
                    >
                      {currentCard.hiragana}
                    </span>
                    <span className="text-sm font-mono text-slate-500 dark:text-slate-400">
                      ({currentCard.romaji})
                    </span>
                  </div>
                  <div className="mt-2.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Arti Kata
                    </p>
                    <p className="text-xl font-extrabold text-amber-700 dark:text-amber-300 mt-0.5">
                      {currentCard.meaning}
                    </p>
                  </div>
                </div>

                {/* Bagian Contoh Kalimat */}
                <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#090d16] p-4 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Contoh Kalimat
                  </p>
                  <p
                    lang="ja"
                    className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-relaxed"
                  >
                    {currentCard.exampleJapanese}
                  </p>
                  <p lang="ja" className="text-xs sm:text-sm text-rose-600 dark:text-rose-300/90 font-medium">
                    {currentCard.exampleKana}
                  </p>
                  <p className="text-xs font-mono text-slate-500 italic">
                    {currentCard.exampleRomaji}
                  </p>
                  <div className="border-t border-slate-200 dark:border-white/[0.06] pt-2 mt-2">
                    <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                      {currentCard.exampleMeaning}
                    </p>
                  </div>
                </div>

                {/* Detail Katakana Transliterasi */}
                <details className="rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-slate-800/40 p-3 text-xs text-slate-600 dark:text-slate-400">
                  <summary className="cursor-pointer font-semibold text-slate-700 dark:text-slate-300 select-none">
                    Katakana (Transliterasi)
                  </summary>
                  <p lang="ja" className="mt-2 text-sm font-bold text-slate-900 dark:text-white">
                    {currentCard.katakana}
                  </p>
                </details>

                {/* Tombol Penilaian Diri */}
                <div className="pt-2 border-t border-slate-200 dark:border-white/[0.08] space-y-3">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 text-center">
                    Bagaimana ingatanmu tentang kata ini?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleRate("not-memorized")}
                      className="cursor-pointer flex flex-col items-center justify-center rounded-xl border border-amber-400/60 bg-amber-50 dark:border-amber-500/40 dark:bg-amber-500/10 py-3 px-4 transition-all hover:bg-amber-100 dark:hover:bg-amber-500/20"
                    >
                      <span className="font-bold text-amber-800 dark:text-amber-300 text-sm sm:text-base">
                        Belum Hafal
                      </span>
                      <span className="text-[11px] text-amber-700/80 dark:text-amber-400/80 mt-0.5 font-mono">
                        (Tombol 1 / ←)
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRate("memorized")}
                      className="cursor-pointer flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 px-4 text-slate-950 font-bold shadow-md shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-teal-400 hover:scale-[1.01]"
                    >
                      <span className="text-sm sm:text-base">
                        Sudah Hafal
                      </span>
                      <span className="text-[11px] opacity-80 mt-0.5 font-mono">
                        (Tombol 2 / →)
                      </span>
                    </button>
                  </div>
                  {currentIndex > 0 && (
                    <div className="text-center pt-1">
                      <button
                        type="button"
                        onClick={handlePrevCard}
                        className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition py-1"
                        title="Kembali ke kartu sebelumnya"
                      >
                        <span aria-hidden="true">←</span>
                        <span>Kembali ke kartu sebelumnya</span>
                        <span className="hidden sm:inline font-mono text-[10px] text-slate-400 dark:text-slate-500">
                          (Backspace / ↑)
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* RINGKASAN PUTARAN */
        <div className="rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/80 p-6 sm:p-8 shadow-xl dark:shadow-2xl backdrop-blur-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-4xl" aria-hidden="true">
              🎉
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Putaran Selesai!
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Kamu telah menyelesaikan putaran {roundStats.reviewed} kartu di {part.title}.
            </p>
          </div>

          {/* Statistik Hasil Putaran */}
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-slate-800/40 p-4 text-center">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Dinilai
              </p>
              <p className="mt-1 text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {roundStats.reviewed}
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Sudah Hafal
              </p>
              <p className="mt-1 text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {roundStats.memorized}
              </p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Belum Hafal
              </p>
              <p className="mt-1 text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">
                {roundStats.notMemorized}
              </p>
            </div>
          </div>

          {/* Status Tersimpan Bagian Ini */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#090d16] p-4">
            <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-1">
              <span className="text-slate-700 dark:text-slate-300">Total tersimpan di bagian ini:</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {partMemorizedCount}/10 hafal ({Math.round((partMemorizedCount / 10) * 100)}%)
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 mt-2">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  partMemorizedCount === 10
                    ? "bg-emerald-500"
                    : "bg-gradient-to-r from-rose-500 to-orange-400"
                }`}
                style={{
                  width: `${Math.round((partMemorizedCount / 10) * 100)}%`,
                }}
              />
            </div>
          </div>

          {/* Pilihan Aksi Lanjutan */}
          <div className="space-y-3 pt-2">
            {unmemorizedCards.length > 0 ? (
              <button
                type="button"
                onClick={() => handleRepeatUnmemorized(false)}
                className="cursor-pointer w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-3 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:from-amber-300 hover:to-amber-400"
              >
                Ulangi yang Belum Hafal ({unmemorizedCards.length} Kartu)
              </button>
            ) : (
              <div className="rounded-xl border border-emerald-400/60 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-950/30 p-4 text-center text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">
                Semua kartu di bagian ini telah berhasil kamu kuasai dan tandai hafal. Kerja luar biasa!
              </div>
            )}

            <button
              type="button"
              onClick={() => handleRepeatAll(true)}
              className="cursor-pointer w-full rounded-xl border border-purple-300 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-950/30 py-3 text-sm font-bold text-purple-700 dark:text-purple-300 transition hover:bg-purple-100 dark:hover:bg-purple-900/40"
            >
              🔀 Ulangi Semua dengan Urutan Acak
            </button>

            <button
              type="button"
              onClick={() => handleRepeatAll(false)}
              className="cursor-pointer w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 transition hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
            >
              Ulangi Semua (Urutan Asli)
            </button>

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
