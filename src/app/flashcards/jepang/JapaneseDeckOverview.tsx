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
          className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900"
        >
          {storageWarning}
        </div>
      )}

      {/* Navigasi kembali & Header */}
      <div>
        <Link
          href="/?kategori=bahasa"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-gold-700 transition mb-3"
        >
          <span aria-hidden="true">←</span> Kembali ke Belajar Bahasa
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-white bg-red-600">
            🎴
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                {deck.title}
              </h1>
              <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
                {deck.subtitle}
              </span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 max-w-2xl">
              {deck.description}
            </p>
          </div>
        </div>
      </div>

      {/* Kotak Panduan Singkat */}
      <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5 text-sm text-neutral-700 space-y-2">
        <p className="font-semibold text-neutral-900">
          💡 Cara belajar dengan Flashcard:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-neutral-600">
          <li>Lihat kata Jepang di sisi depan kartu dan coba ingat artinya.</li>
          <li>Tekan <strong>Lihat jawaban</strong> untuk membuka cara baca, arti, dan contoh kalimat.</li>
          <li>Nilai dirimu sendiri dengan menekan <strong>Belum hafal</strong> atau <strong>Sudah hafal</strong>.</li>
          <li>Semua bagian dapat dibuka langsung dan diulang kapan saja tanpa batasan.</li>
        </ol>
      </div>

      {/* Ringkasan Progress Volume */}
      <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Progress Keseluruhan {deck.subtitle}
            </p>
            <p className="text-xl font-bold text-neutral-900">
              {totalMemorized} dari {totalCards} kosakata ditandai hafal ({totalPct}%)
            </p>
          </div>
          <span className="text-xs font-medium text-neutral-500">
            10 bagian · 10 kosakata per bagian
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full transition-all duration-300 bg-red-600"
            style={{ width: `${totalPct}%` }}
          />
        </div>
      </div>

      {/* Daftar 10 Bagian */}
      <section>
        <h2 className="text-xl font-bold text-neutral-900 mb-4">
          Daftar Bagian ({deck.totalParts} Bagian)
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
                className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-neutral-900">
                      {part.title}
                    </h3>
                    {isCompleted ? (
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                        ✓ 10 Hafal
                      </span>
                    ) : partMemorized > 0 ? (
                      <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                        {partMemorized}/10 Hafal
                      </span>
                    ) : (
                      <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
                        0/10 Hafal
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-neutral-600">
                    Kosakata nomor {part.startNo}–{part.endNo}
                  </p>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-neutral-500 mb-1">
                      <span>{partMemorized}/{partTotal} ditandai hafal</span>
                      <span>{partPct}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isCompleted ? "bg-emerald-500" : "bg-red-500"
                        }`}
                        style={{ width: `${partPct}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <Link
                    href={`/flashcards/jepang/n5/vol-1/${part.slug}`}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  >
                    {partMemorized > 0 ? "Lanjutkan Latihan" : "Mulai Latihan"}
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
