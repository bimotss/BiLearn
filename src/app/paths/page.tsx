"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { learningPaths } from "@/data/paths";
import { tracks } from "@/data/tracks";
import { useProgress } from "@/lib/progress";

export default function PathsPage() {
  const { progress, ready, setActivePath } = useProgress();
  const router = useRouter();

  function choose(slug: string) {
    setActivePath(slug);
    router.push("/");
  }

  return (
    <div className="space-y-10">
      {/* Header & Breadcrumb */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-300 transition-colors mb-4 cursor-pointer"
        >
          <span aria-hidden="true">←</span> Kembali ke Halaman Utama
        </Link>
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
            <span>✦ Kurikulum Terarah</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Pilih Learning Path Kariermu
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Learning Path menyusun urutan materi dari nol hingga mahir sesuai target posisi industri.
            Semua modul tetap terbuka bebas — path bertindak sebagai penunjuk arah terbaik tanpa mengunci pilihanmu.
          </p>
        </div>
      </div>

      {/* Grid Path Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {learningPaths.map((path) => {
          const active = ready && progress.activePath === path.slug;
          const totalHours = path.trackSlugs.reduce(
            (sum, s) => sum + (tracks.find((t) => t.slug === s)?.hours ?? 0),
            0
          );

          return (
            <div
              key={path.slug}
              className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                active
                  ? "border-amber-500/80 bg-gradient-to-br from-amber-500/10 via-amber-100/30 to-white dark:border-amber-500/60 dark:from-slate-900 dark:via-slate-900 dark:to-amber-950/25 shadow-md dark:shadow-[0_0_30px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/40"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md dark:border-white/[0.08] dark:bg-slate-900/60 dark:hover:border-white/20 dark:hover:bg-slate-900/80 hover:shadow-xl"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-2xl border border-amber-500/20 text-amber-600 dark:bg-slate-800 dark:text-white dark:border-white/10 shadow-sm">
                      {path.icon}
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">{path.title}</h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">±{totalHours} jam estimasi waktu</p>
                    </div>
                  </div>
                  {active && (
                    <span className="rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-700 dark:text-amber-300 shadow-sm">
                      ✓ Aktif
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {path.description}
                </p>

                {/* Track Sequence Chips */}
                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Tahapan Track:
                  </div>
                  <ol className="flex flex-wrap gap-2">
                    {path.trackSlugs.map((slug, i) => {
                      const t = tracks.find((tr) => tr.slug === slug);
                      return (
                        <li
                          key={slug}
                          className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 shadow-xs"
                        >
                          <span className="text-amber-600 dark:text-amber-400 font-bold">{i + 1}.</span>
                          <span>{t?.icon}</span>
                          <span>{t?.title ?? slug}</span>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => choose(path.slug)}
                  disabled={active}
                  className={`w-full rounded-xl py-3 text-sm font-bold transition-all duration-200 cursor-pointer ${
                    active
                      ? "cursor-default border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300"
                      : "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400"
                  }`}
                >
                  {active ? "✓ Sedang Digunakan Sebagai Urutan Utama" : "Pilih Career Path Ini →"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
