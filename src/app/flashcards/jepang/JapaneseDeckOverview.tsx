"use client";

import Link from "next/link";
import { useMemo } from "react";
import { japaneseN5Vol1Deck } from "@/data/flashcards";
import { useFlashcardProgress } from "@/lib/flashcards-progress";

export function JapaneseDeckOverview() {
  const { ready, storageWarning, getTotalMemorizedCount, getPartMemorizedCount } =
    useFlashcardProgress();

  const deck = japaneseN5Vol1Deck;
  const allCardIds = useMemo(() => deck.items.map((c) => c.id), [deck]);

  const totalMemorized = ready ? getTotalMemorizedCount(allCardIds) : 0;
  const totalCards = deck.totalCards;
  const totalPct = Math.round((totalMemorized / totalCards) * 100);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {storageWarning && (
        <div
          role="alert"
          className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-xs sm:text-sm text-amber-200"
        >
          {storageWarning}
        </div>
      )}

      {/* Navigasi kembali & Header */}
      <div>
        <Link
          href="/bahasa/jepang"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-2xs hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-white/20 transition cursor-pointer mb-4"
        >
          <span aria-hidden="true" className="text-sm font-bold">←</span>
          <span>Kembali ke Hub Bahasa Jepang</span>
        </Link>

        <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md shadow-xs">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl text-white bg-rose-600 shadow-lg shadow-rose-500/30">
              🎴
            </span>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {deck.title}
                </h1>
                <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 text-xs font-semibold text-rose-700 dark:text-rose-300">
                  {deck.subtitle}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {deck.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kotak Panduan Belajar */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 backdrop-blur-sm shadow-xs">
        <p className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
          <span>💡</span>
          <span>Panduan Belajar Flashcard Spaced Repetition:</span>
        </p>
        <ol className="list-decimal list-inside space-y-1 text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
          <li>Perhatikan kata Jepang di sisi depan kartu dan coba ingat artinya sebelum membuka.</li>
          <li>Tekan tombol <strong className="text-slate-900 dark:text-white">Buka Jawaban</strong> (atau tekan <kbd className="rounded bg-slate-100 dark:bg-slate-800 px-1 font-mono text-xs text-amber-700 dark:text-amber-300 border border-slate-300 dark:border-slate-700">Spasi</kbd>) untuk melihat cara baca Kana/Romaji, arti Indonesia, dan contoh kalimat.</li>
          <li>Nilai dirimu secara jujur dengan menekan <strong className="text-rose-600 dark:text-rose-400">Belum Hafal</strong> atau <strong className="text-emerald-600 dark:text-emerald-400">Sudah Hafal</strong>.</li>
          <li>Setiap bagian dapat dibuka bebas dan diulang tanpa batas kapan saja.</li>
        </ol>
      </div>

      {/* Ringkasan Progres Keseluruhan */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-6 backdrop-blur-sm shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Progres Keseluruhan {deck.subtitle}
            </p>
            <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
              {totalMemorized} dari {totalCards} kosakata ditandai hafal ({totalPct}%)
            </p>
          </div>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            10 bagian · 10 kosakata per bagian
          </span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-rose-500 to-orange-400"
            style={{ width: `${totalPct}%` }}
          />
        </div>
      </div>

      {/* Grid 10 Bagian */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Daftar Bagian Latihan ({deck.totalParts} Bagian)
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {deck.parts.map((part) => {
            const partMemorized = ready
              ? getPartMemorizedCount(part.itemIds)
              : 0;
            const partTotal = part.itemIds.length;
            const partPct = Math.round((partMemorized / partTotal) * 100);
            const isCompleted = partMemorized === partTotal;

            return (
              <div
                key={part.slug}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-rose-400 dark:hover:border-rose-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/90 shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {part.title}
                    </h3>
                    {isCompleted ? (
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                        ✓ Selesai Hafal
                      </span>
                    ) : partMemorized > 0 ? (
                      <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
                        {partMemorized}/10 Hafal
                      </span>
                    ) : (
                      <span className="rounded-full bg-slate-100 dark:bg-white/[0.06] px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                        0/10 Hafal
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Kosakata nomor {part.startNo}–{part.endNo}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>Progres Hafalan</span>
                      <span className="text-slate-700 dark:text-slate-200 font-medium">{partPct}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isCompleted
                            ? "bg-emerald-500"
                            : "bg-gradient-to-r from-rose-500 to-orange-400"
                        }`}
                        style={{ width: `${partPct}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/[0.06]">
                  <Link
                    href={`/flashcards/jepang/n5/vol-1/${part.slug}`}
                    className={`cursor-pointer inline-flex w-full items-center justify-center rounded-xl py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                      isCompleted
                        ? "border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
                        : "bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-md shadow-rose-600/20 hover:from-rose-500 hover:to-orange-500 hover:scale-[1.01]"
                    }`}
                  >
                    {partMemorized > 0 ? "Lanjutkan Latihan Flashcard →" : "Mulai Sesi Flashcard →"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
