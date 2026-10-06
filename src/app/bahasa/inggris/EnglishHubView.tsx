"use client";

import Link from "next/link";
import { getTrack, getTrackItems } from "@/data/tracks";
import { useProgress } from "@/lib/progress";

export function EnglishHubView() {
  const { ready, doneCount, totalCount } = useProgress();
  const beTrack = getTrack("business-english");

  const semuaItem = beTrack ? getTrackItems(beTrack) : [];
  const done = ready && beTrack ? doneCount(beTrack.slug) : 0;
  const total = ready && beTrack ? totalCount(beTrack.slug) : semuaItem.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Navigasi & Header */}
      <div>
        <Link
          href="/bahasa"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300 transition-colors mb-4 cursor-pointer"
        >
          <span aria-hidden="true">←</span> Kembali ke Pusat Bahasa
        </Link>

        <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md shadow-xs">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl text-white bg-blue-600 shadow-lg shadow-blue-500/30">
              🇬🇧
            </span>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Bahasa Inggris Bisnis & Kerja
                </h1>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  Komunikasi Profesional
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Kuasai komunikasi bahasa Inggris terapan untuk karier internasional, korespondensi bisnis, tata kalimat presisi, dan penulisan dokumen profesional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Daftar Program */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Program Pembelajaran Tersedia
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Pilih program yang sesuai dengan kebutuhan peningkatan karier dan komunikasi kerja kamu.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card Business English */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/90 shadow-xs hover:shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xl">
                  💼
                </span>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  Track Interaktif
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Business English
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Kuasai komunikasi tertulis profesional dalam bahasa Inggris: tata kalimat kokoh, tanda baca presisi, etika email korporat, dan format memo kerja.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>±30 jam pembelajaran mandiri</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {done}/{total} selesai ({pct}%)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
              <Link
                href="/tracks/business-english"
                className="cursor-pointer inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:from-blue-400 hover:to-indigo-500 hover:scale-[1.01]"
              >
                {done > 0 ? "Lanjutkan Belajar Business English →" : "Mulai Belajar Business English →"}
              </Link>
            </div>
          </div>

          {/* Card Program Mendatang */}
          <div className="flex flex-col justify-between rounded-2xl border border-dashed border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-slate-900/30 p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 text-xl">
                  🎙️
                </span>
                <span className="rounded-full bg-slate-200 dark:bg-white/[0.06] px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
                  Rencana Rilis
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-600 dark:text-slate-400">
                  English for Tech & Daily Standup
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Modul percakapan aktif untuk standup meeting harian, presentasi teknis sprint demo, dan simulasi wawancara rekrutmen internasional.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.06] text-xs text-slate-500 italic">
              Modul tambahan percakapan bahasa Inggris sedang dalam tahap riset materi.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
