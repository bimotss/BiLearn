"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
import type { FlashcardPart, JapaneseFlashcardItem } from "@/lib/flashcard-types";
import { useFlashcardProgress } from "@/lib/flashcards-progress";

interface FlashcardSessionViewProps {
  part: FlashcardPart;
  initialCards: JapaneseFlashcardItem[];
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
  const [roundRatings, setRoundRatings] = useState<
    Record<string, "memorized" | "not-memorized">
  >({});
  const [announcement, setAnnouncement] = useState("");

  const isRoundComplete = currentIndex >= queue.length;
  const currentCard: JapaneseFlashcardItem | undefined = queue[currentIndex];

  const partMemorizedCount = ready ? getPartMemorizedCount(part.itemIds) : 0;

  // Hitung hasil penilaian putaran ini
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

  // Kartu yang belum hafal (atau belum dipelajari) di bagian ini berdasarkan storage
  const unmemorizedCards = useMemo(() => {
    return initialCards.filter((card) => getStatus(card.id) !== "memorized");
  }, [initialCards, getStatus]);

  const handleRevealAnswer = useCallback(() => {
    if (!currentCard) return;
    setIsAnswerShown(true);
    setAnnouncement(`Jawaban dibuka untuk kata ${currentCard.term}.`);
  }, [currentCard]);

  const handleRate = useCallback(
    (status: "memorized" | "not-memorized") => {
      // Keamanan klik ganda: tombol hanya berlaku saat jawaban terbuka & kartu valid
      if (!isAnswerShown || !currentCard) return;

      const cardId = currentCard.id;
      markCard(cardId, status);
      setRoundRatings((prev) => ({ ...prev, [cardId]: status }));

      // Tutup jawaban sebelum pindah agar kartu berikutnya selalu mulai dari sisi depan
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

  // Navigasi keyboard
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Abaikan jika user sedang mengetik di input/textarea
      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (isRoundComplete) return;

      if (!isAnswerShown) {
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
  }, [isRoundComplete, isAnswerShown, handleRevealAnswer, handleRate]);

  // Aksi pengulangan dari ringkasan
  const handleRepeatUnmemorized = () => {
    if (unmemorizedCards.length === 0) return;
    setQueue(unmemorizedCards);
    setCurrentIndex(0);
    setIsAnswerShown(false);
    setRoundRatings({});
    setAnnouncement(`Memulai putaran ulang dengan ${unmemorizedCards.length} kartu.`);
  };

  const handleRepeatAll = () => {
    setQueue(initialCards);
    setCurrentIndex(0);
    setIsAnswerShown(false);
    setRoundRatings({});
    setAnnouncement("Memulai putaran ulang semua 10 kartu.");
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto w-full px-2 sm:px-0">
      {/* Live Region Aksesibilitas */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      {storageWarning && (
        <div
          role="alert"
          className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900"
        >
          {storageWarning}
        </div>
      )}

      {/* Header & Navigasi */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-3">
        <Link
          href="/flashcards/jepang"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-gold-700 transition"
        >
          <span aria-hidden="true">←</span> Kembali ke Daftar Bagian
        </Link>
        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          JLPT N5 — Vol. 1 · {part.title}
        </span>
      </div>

      {!isRoundComplete && currentCard ? (
        <div className="space-y-4">
          {/* Posisi & Bar Progress Sesi */}
          <div className="flex items-center justify-between text-xs font-medium text-neutral-500">
            <span>
              Kartu {currentIndex + 1} dari {queue.length}
            </span>
            <span>
              Bagian: {partMemorizedCount}/10 hafal
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full bg-gold-500 transition-all duration-300"
              style={{
                width: `${Math.round(((currentIndex) / queue.length) * 100)}%`,
              }}
            />
          </div>

          {/* Kartu Flashcard */}
          <div
            className={`rounded-2xl border bg-white p-6 sm:p-8 shadow-sm transition-all min-h-[22rem] flex flex-col justify-between ${
              isAnswerShown ? "border-gold-300" : "border-neutral-200"
            }`}
          >
            {!isAnswerShown ? (
              /* SISI DEPAN KARTU */
              <div className="flex flex-col items-center justify-center text-center my-auto py-8 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Kosakata #{currentCard.sourceNo}
                </span>
                <h2
                  lang="ja"
                  className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-wide select-none"
                >
                  {currentCard.term}
                </h2>
                <p className="text-sm text-neutral-500 max-w-sm">
                  Coba ingat arti dan cara bacanya, lalu buka jawaban di bawah.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleRevealAnswer}
                    className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3 text-sm font-bold text-neutral-900 shadow-sm transition hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  >
                    <span>Lihat jawaban</span>
                    <span aria-hidden="true" className="text-xs opacity-75">
                      (Spasi / Enter)
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              /* SISI BELAKANG KARTU */
              <div className="space-y-5">
                {/* Kata & Bacaan */}
                <div className="border-b border-neutral-100 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Kosakata #{currentCard.sourceNo}
                  </span>
                  <div className="mt-1 flex flex-wrap items-baseline gap-3">
                    <h2
                      lang="ja"
                      className="text-2xl sm:text-3xl font-bold text-neutral-900"
                    >
                      {currentCard.term}
                    </h2>
                    <span
                      lang="ja"
                      className="text-lg font-semibold text-neutral-700"
                    >
                      {currentCard.hiragana}
                    </span>
                    <span className="text-sm text-neutral-500">
                      ({currentCard.romaji})
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Arti
                    </p>
                    <p className="text-lg font-bold text-neutral-900">
                      {currentCard.meaning}
                    </p>
                  </div>
                </div>

                {/* Bagian Contoh Kalimat */}
                <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Contoh Kalimat
                  </p>
                  <p
                    lang="ja"
                    className="text-base sm:text-lg font-semibold text-neutral-900 leading-relaxed"
                  >
                    {currentCard.exampleJapanese}
                  </p>
                  <p lang="ja" className="text-sm text-neutral-600">
                    {currentCard.exampleKana}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-500 italic">
                    {currentCard.exampleRomaji}
                  </p>
                  <div className="border-t border-neutral-200/80 pt-2 mt-2">
                    <p className="text-sm font-medium text-neutral-800">
                      {currentCard.exampleMeaning}
                    </p>
                  </div>
                </div>

                {/* Detail Katakana Transliterasi (Opsional/Collapsible) */}
                <details className="rounded-lg border border-neutral-200 bg-white p-3 text-xs text-neutral-600">
                  <summary className="cursor-pointer font-medium text-neutral-700 select-none">
                    Katakana (transliterasi)
                  </summary>
                  <p lang="ja" className="mt-2 text-sm font-medium text-neutral-800">
                    {currentCard.katakana}
                  </p>
                </details>

                {/* Tombol Penilaian Diri */}
                <div className="pt-2 border-t border-neutral-100">
                  <p className="text-xs font-medium text-neutral-500 text-center mb-3">
                    Bagaimana ingatanmu tentang kata ini?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleRate("not-memorized")}
                      className="flex flex-col items-center justify-center rounded-xl border border-amber-300 bg-amber-50/50 py-3 px-4 transition hover:bg-amber-100 hover:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <span className="font-bold text-amber-900 text-sm sm:text-base">
                        Belum hafal
                      </span>
                      <span className="text-[11px] text-amber-700 mt-0.5">
                        (Tombol 1 / ←)
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRate("memorized")}
                      className="flex flex-col items-center justify-center rounded-xl border border-emerald-500 bg-emerald-600 py-3 px-4 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      <span className="font-bold text-sm sm:text-base">
                        Sudah hafal
                      </span>
                      <span className="text-[11px] text-emerald-100 mt-0.5">
                        (Tombol 2 / →)
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* RINGKASAN PUTARAN */
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <span className="text-3xl" aria-hidden="true">
              🎉
            </span>
            <h2 className="text-2xl font-bold text-neutral-900">
              Putaran Selesai!
            </h2>
            <p className="text-sm text-neutral-600">
              Kamu telah menyelesaikan putaran {roundStats.reviewed} kartu di {part.title}.
            </p>
          </div>

          {/* Statistik Hasil Putaran */}
          <div className="grid grid-cols-3 gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4 text-center">
            <div>
              <p className="text-xs font-semibold text-neutral-500 uppercase">
                Dinilai
              </p>
              <p className="mt-1 text-xl font-bold text-neutral-900">
                {roundStats.reviewed}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-700 uppercase">
                Sudah Hafal
              </p>
              <p className="mt-1 text-xl font-bold text-emerald-600">
                {roundStats.memorized}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-700 uppercase">
                Belum Hafal
              </p>
              <p className="mt-1 text-xl font-bold text-amber-600">
                {roundStats.notMemorized}
              </p>
            </div>
          </div>

          {/* Status Tersimpan Bagian Ini */}
          <div className="rounded-xl border border-neutral-200 bg-white p-4">
            <div className="flex justify-between items-center text-sm font-medium mb-1">
              <span className="text-neutral-700">Status tersimpan bagian ini:</span>
              <span className="font-bold text-neutral-900">
                {partMemorizedCount}/10 ditandai hafal ({Math.round((partMemorizedCount / 10) * 100)}%)
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 mt-2">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  partMemorizedCount === 10 ? "bg-emerald-500" : "bg-red-500"
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
                onClick={handleRepeatUnmemorized}
                className="w-full rounded-xl bg-gold-500 py-3 text-sm font-bold text-neutral-900 shadow-sm transition hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
              >
                Ulangi yang belum hafal ({unmemorizedCards.length} kartu)
              </button>
            ) : (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm text-emerald-800">
                Semua kartu bagian ini sudah kamu tandai hafal. Kerja bagus!
              </div>
            )}

            <button
              type="button"
              onClick={handleRepeatAll}
              className="w-full rounded-xl border border-neutral-300 bg-white py-3 text-sm font-bold text-neutral-700 transition hover:bg-neutral-50 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              Ulangi semua (10 kartu)
            </button>

            <Link
              href="/flashcards/jepang"
              className="block w-full text-center rounded-xl py-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition"
            >
              Kembali ke daftar bagian
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
