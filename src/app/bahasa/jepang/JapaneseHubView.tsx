"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useFlashcardProgress } from "@/lib/flashcards-progress";
import { japaneseCards } from "@/data/flashcards";

export function JapaneseHubView() {
  const { ready, getTotalMemorizedCount } = useFlashcardProgress();
  const allCardIds = useMemo(() => japaneseCards.map((c) => c.id), []);
  const totalMemorized = ready ? getTotalMemorizedCount(allCardIds) : 0;
  const totalCards = japaneseCards.length;
  const totalPct = Math.round((totalMemorized / totalCards) * 100);

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Navigasi & Header */}
      <div>
        <Link
          href="/bahasa"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-300 transition-colors mb-4 cursor-pointer"
        >
          <span aria-hidden="true">←</span> Kembali ke Pusat Bahasa
        </Link>

        <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md shadow-xs">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl text-white bg-rose-600 shadow-lg shadow-rose-500/30">
              🇯🇵
            </span>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Bahasa Jepang (日本語)
                </h1>
                <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 text-xs font-semibold text-rose-700 dark:text-rose-300">
                  Hiragana · Katakana · N5
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Pondasi komprehensif bahasa Jepang: kuasai sistem huruf Hiragana dan Katakana dari kaidah goresannya, lalu mantapkan kosakata dasar dengan Flashcard JLPT N5 interaktif.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian 1: Sistem Huruf Jepang */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            1. Sistem Huruf Jepang (Karakter Dasar)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Pondasi wajib sebelum mempelajari kosakata atau tata bahasa: kenali bentuk huruf, aturan urutan goresan, dan uji daya ingatmu.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Kartu Hiragana */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400 dark:hover:border-emerald-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/90 shadow-xs hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold text-2xl"
                  lang="ja"
                >
                  あ
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Huruf Asli Jepang
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Hiragana (ひらがな)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  46 karakter dasar Gojuuon, aturan urutan goresan (stroke order), 3 karakteristik goresan (tome, hane, harai), tabel romaji, dan kuis latihan interaktif.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-slate-700 dark:text-slate-300">
                  ✓ 46 Karakter
                </span>
                <span className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-slate-700 dark:text-slate-300">
                  ✓ Panduan Goresan
                </span>
                <span className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-slate-700 dark:text-slate-300">
                  ✓ Kuis 10 Soal
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
              <Link
                href="/bahasa/jepang/hiragana"
                className="cursor-pointer inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-teal-500 hover:scale-[1.01]"
              >
                Buka Modul Hiragana →
              </Link>
            </div>
          </div>

          {/* Kartu Katakana */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/90 shadow-xs hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300 font-bold text-2xl"
                  lang="ja"
                >
                  ア
                </span>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  Kata Serapan Asing
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Katakana (カタカナ)
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  46 karakter Katakana untuk menulis kata serapan asing (gairaigo), aturan garis tegas, panduan membedakan huruf mirip (シ vs ツ, ソ vs ン), dan latihan membaca kata serapan.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
                <span className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-slate-700 dark:text-slate-300">
                  ✓ 46 Karakter
                </span>
                <span className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-slate-700 dark:text-slate-300">
                  ✓ Tips Huruf Mirip
                </span>
                <span className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-slate-700 dark:text-slate-300">
                  ✓ Kuis 10 Soal
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
              <Link
                href="/bahasa/jepang/katakana"
                className="cursor-pointer inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:from-blue-400 hover:to-indigo-500 hover:scale-[1.01]"
              >
                Buka Modul Katakana →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian 2: Kosakata & Persiapan JLPT N5 */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            2. Kosakata & Persiapan Ujian JLPT N5
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Perkaya hafalan kosakata dasar lewat kartu interaktif dengan contoh kalimat nyata dan fitur penilaian diri (Spaced Repetition).
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400 dark:hover:border-amber-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/90 shadow-xs hover:shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white text-3xl shadow-lg shadow-rose-500/30">
                🎴
              </span>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Flashcard Jepang — JLPT N5 (Vol. 1)
                  </h3>
                  <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 text-xs font-semibold text-rose-700 dark:text-rose-300">
                    10 Bagian
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                  100 kosakata esensial JLPT N5 lengkap dengan cara baca Kana/Romaji, arti Indonesia, dan contoh kalimat berterjemahan.
                </p>

                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Hafalan Kosakata</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      {totalMemorized} dari {totalCards} hafal ({totalPct}%)
                    </span>
                  </div>
                  <div className="h-2 w-full sm:w-80 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div
                      className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-rose-500 to-orange-400"
                      style={{ width: `${totalPct}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:self-center shrink-0">
              <Link
                href="/flashcards/jepang"
                className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:from-amber-300 hover:to-amber-400 hover:scale-[1.02] whitespace-nowrap"
              >
                Buka Flashcard N5 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
