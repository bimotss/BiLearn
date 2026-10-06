"use client";

import { useMemo } from "react";
import Link from "next/link";
import { tracks, getTrackItems } from "@/data/tracks";
import { useProgress } from "@/lib/progress";
import { useFlashcardProgress } from "@/lib/flashcards-progress";
import { japaneseCards } from "@/data/flashcards";

export default function BahasaHubPage() {
  const { ready, doneCount, totalCount } = useProgress();
  const { getTotalMemorizedCount } = useFlashcardProgress();

  const beTrack = tracks.find((t) => t.slug === "business-english");
  const beItems = useMemo(() => (beTrack ? getTrackItems(beTrack) : []), [beTrack]);
  const beDone = ready && beTrack ? doneCount(beTrack.slug) : 0;
  const beTotal = ready && beTrack ? totalCount(beTrack.slug) : beItems.length;
  const bePct = beTotal > 0 ? Math.round((beDone / beTotal) * 100) : 0;

  const flashcardCardIds = useMemo(() => japaneseCards.map((c) => c.id), []);
  const flashcardDone = ready ? getTotalMemorizedCount(flashcardCardIds) : 0;
  const flashcardPct = Math.round((flashcardDone / japaneseCards.length) * 100);

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Header Hub Bahasa */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/[0.08] pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">
              <span>文 Mode Bahasa Global</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Pusat Pembelajaran Bahasa
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Tingkatkan daya saing karier dengan penguasaan bahasa internasional: komunikasi profesional Business English dan Bahasa Jepang terstruktur dari huruf hingga JLPT N5.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/tracks/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              <span>← Beralih ke Belajar Code</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Grid 2 Program Bahasa Utama */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Card 1: Bahasa Inggris Bisnis */}
        <Link
          href="/bahasa/inggris"
          className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-6 sm:p-7 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/90 hover:shadow-xl dark:hover:shadow-[0_12px_36px_rgba(37,99,235,0.15)] cursor-pointer"
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
                🇬🇧
              </span>
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                17 Modul Interaktif
              </span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                Bahasa Inggris Bisnis & Kerja
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Kuasai korespondensi bisnis internasional: tata bahasa terapan, penulisan email korporat profesional, etika memo resmi, dan komunikasi tim multinasional.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Business English (±30 jam)</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {beDone}/{beTotal} selesai ({bePct}%)
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-blue-500 to-cyan-400"
                  style={{ width: `${bePct}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.08] flex items-center justify-between text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300">
            <span>Buka Hub Bahasa Inggris</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </Link>

        {/* Card 2: Bahasa Jepang */}
        <Link
          href="/bahasa/jepang"
          className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-6 sm:p-7 transition-all duration-300 hover:border-rose-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/90 hover:shadow-xl dark:hover:shadow-[0_12px_36px_rgba(225,29,72,0.15)] cursor-pointer"
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-600 text-3xl text-white shadow-lg shadow-rose-500/30 transition-transform group-hover:scale-105">
                🇯🇵
              </span>
              <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-700 dark:text-rose-300">
                Hiragana · Katakana · N5
              </span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors">
                Bahasa Jepang (日本語)
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Pondasi lengkap bahasa Jepang: kuasai sistem huruf dasar (Hiragana & Katakana), kaidah urutan goresan stroke order, serta hafalan kosakata JLPT N5 via flashcard interaktif.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>3 Modul Pembelajaran</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {flashcardDone}/100 kosakata ({flashcardPct}%)
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-rose-500 to-orange-400"
                  style={{ width: `${flashcardPct}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.08] flex items-center justify-between text-sm font-semibold text-rose-600 dark:text-rose-400 group-hover:text-rose-500 dark:group-hover:text-rose-300">
            <span>Buka Hub Bahasa Jepang</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
