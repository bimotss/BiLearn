"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrack, getTrackItems, itemTersediaDiMode } from "@/data/tracks";
import { useProgress } from "@/lib/progress";

export default function TrackDetail({ slug }: { slug: string }) {
  const track = getTrack(slug);
  const { ready, mode, isDone, doneCount, totalCount } = useProgress();

  if (!track) notFound();

  const items = getTrackItems(track);
  const modePg = ready && mode === "pilihan-ganda";
  const done = ready ? doneCount(track.slug) : 0;
  const total = ready ? totalCount(track.slug) : items.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const belumAdaSoal = items.length - total;

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
        >
          <span aria-hidden="true">←</span> Kembali ke Semua Track
        </Link>
      </div>

      {/* Track Hero Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-md shadow-xs">
        <div className="flex flex-col sm:flex-row items-start gap-5">
          <span
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl text-white shadow-lg ${track.color}`}
          >
            {track.icon}
          </span>
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
                Track Interaktif
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">±{track.hours} Jam Belajar Mandiri</span>
              {modePg && (
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:text-purple-300">
                  Mode Susun Kode Aktif
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {track.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {track.description}
            </p>

            {/* Progress Gauge */}
            <div className="pt-2 space-y-1.5 max-w-xl">
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span>Penyelesaian Track</span>
                <span className="text-slate-700 dark:text-slate-200">
                  {done} dari {total} selesai ({pct}%)
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    modePg
                      ? "bg-gradient-to-r from-purple-500 to-indigo-400"
                      : "bg-gradient-to-r from-amber-500 to-amber-300"
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              {modePg && belumAdaSoal > 0 && (
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {belumAdaSoal} step lain belum memiliki varian susun kode. Step tersebut tetap bisa dikerjakan di mode ngetik.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Saran Prasyarat (Recommended Prereqs) */}
      {track.recommendedPrereqs.length > 0 && (
        <div className="flex items-start gap-3 rounded-xl border border-amber-400/60 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10 p-4 text-xs sm:text-sm text-amber-900 dark:text-amber-200 backdrop-blur-sm">
          <span className="text-base" aria-hidden="true">💡</span>
          <div>
            <span className="font-semibold text-amber-800 dark:text-amber-300">Rekomendasi Awal:</span>{" "}
            Untuk pemahaman maksimal, disarankan telah menyelesaikan{" "}
            {track.recommendedPrereqs.map((p, i) => {
              const t = getTrack(p);
              return (
                <span key={p}>
                  {i > 0 && ", "}
                  <Link
                    href={`/tracks/${p}`}
                    className="font-bold underline text-amber-800 dark:text-amber-300 hover:text-amber-950 dark:hover:text-amber-100"
                  >
                    {t?.title ?? p}
                  </Link>
                </span>
              );
            })}
            . Namun semua materi tetap terbuka bebas jika kamu ingin langsung melompat ke sini.
          </div>
        </div>
      )}

      {/* Module List */}
      <div className="space-y-6">
        {track.modules.map((mod, mi) => (
          <section
            key={mod.slug}
            className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-6 backdrop-blur-sm shadow-xs"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Modul {String(mi + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {mod.title}
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {mod.description}
                </p>
              </div>
            </div>

            {/* Silabus Bab Topics Accordion */}
            {mod.topics.length > 0 && (
              <details className="mt-3 group" open={mod.items.length === 0}>
                <summary className="cursor-pointer text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors flex items-center gap-1.5 py-1">
                  <span>{mod.topics.length} bab silabus dalam modul ini</span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 group-open:rotate-90 transition-transform">▸</span>
                </summary>
                <ol className="mt-2.5 grid gap-1.5 sm:grid-cols-2 border-l border-slate-200 dark:border-white/10 pl-3">
                  {mod.topics.map((topic, ti) => (
                    <li key={ti} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="font-mono text-slate-400 dark:text-slate-500 text-[11px]">
                        {mi + 1}.{ti + 1}
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ol>
              </details>
            )}

            {/* Step Items List */}
            {mod.items.length > 0 ? (
              <ul className="mt-5 space-y-2">
                {mod.items.map((item) => {
                  const finished = ready && isDone(track.slug, item.id);
                  const diLuarMode = ready && !itemTersediaDiMode(item, mode);

                  return (
                    <li key={item.id}>
                      <Link
                        href={`/tracks/${track.slug}/${item.id}`}
                        className="group flex items-start sm:items-center justify-between gap-3 sm:gap-3.5 rounded-xl border border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-slate-800/40 p-3 sm:px-4 sm:py-3 transition-all duration-200 hover:border-amber-400 dark:hover:border-amber-500/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 cursor-pointer"
                      >
                        <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
                          <span
                            className={`mt-0.5 sm:mt-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-transform group-hover:scale-105 ${
                              finished
                                ? modePg
                                  ? "bg-purple-500 text-white shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                                  : "bg-emerald-500 text-slate-950 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                                : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-white/10"
                            }`}
                          >
                            {finished
                              ? "✓"
                              : item.kind === "quiz"
                              ? "?"
                              : item.kind === "materi"
                              ? "📖"
                              : "‹›"}
                          </span>
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white leading-snug break-words">
                            {item.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 pt-0.5 sm:pt-0">
                          {diLuarMode && (
                            <span className="hidden xs:inline-block rounded-md bg-slate-200 dark:bg-white/[0.06] px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                              Mode Ngetik
                            </span>
                          )}
                          <span
                            className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                              item.kind === "quiz"
                                ? "bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20"
                                : item.kind === "materi"
                                ? "bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20"
                                : "bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20"
                            }`}
                          >
                            {item.kind === "quiz" ? "Kuis" : item.kind === "materi" ? "Materi" : "Praktik"}
                          </span>
                          <span
                            aria-hidden="true"
                            className="text-xs text-slate-400 dark:text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-amber-600 dark:group-hover:text-amber-400"
                          >
                            →
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-4 text-xs italic text-slate-500">
                Silabus siap — materi dan latihan interaktif sedang disiapkan.
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
