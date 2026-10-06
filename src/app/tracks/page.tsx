"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { tracks, getTrackItems } from "@/data/tracks";
import { getPath } from "@/data/paths";
import { useProgress } from "@/lib/progress";

const CATEGORIES = [
  { id: "semua", label: "Semua Koding (16)", href: "/tracks/" },
  { id: "frontend", label: "Frontend (6)", href: "/tracks/?kategori=frontend" },
  { id: "backend", label: "Backend & Database (4)", href: "/tracks/?kategori=backend" },
  { id: "devops", label: "DevOps & AI (3)", href: "/tracks/?kategori=devops" },
  { id: "data", label: "Data & Python (3)", href: "/tracks/?kategori=data" },
];

function TracksContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const kategoriUrl = searchParams.get("kategori");

  const { progress, ready, mode, doneCount, totalCount, setActivePath } =
    useProgress();

  // Redirect otomatis jika mengakses kategori bahasa ke rute mandiri /bahasa
  useEffect(() => {
    if (kategoriUrl === "bahasa") {
      router.replace("/bahasa");
    }
  }, [kategoriUrl, router]);

  // Filter yang terbaca dari parameter URL
  const urlFilter = useMemo(() => {
    const k = (kategoriUrl ?? "").toLowerCase().trim();
    if (k === "frontend") return "frontend";
    if (k === "backend") return "backend";
    if (k === "devops") return "devops";
    if (k === "data") return "data";
    return "semua";
  }, [kategoriUrl]);

  // State lokal untuk transisi 0ms saat tombol tab diklik
  const [prevUrlFilter, setPrevUrlFilter] = useState<string>(urlFilter);
  const [selectedFilter, setSelectedFilter] = useState<string>(urlFilter);

  // Render-time state adjustment saat searchParams URL berubah
  if (prevUrlFilter !== urlFilter) {
    setPrevUrlFilter(urlFilter);
    setSelectedFilter(urlFilter);
  }

  // Dukungan tombol Back/Forward browser
  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      const k = (params.get("kategori") ?? "").toLowerCase().trim();
      if (["frontend", "backend", "devops", "data"].includes(k)) {
        setSelectedFilter(k);
      } else {
        setSelectedFilter("semua");
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const handleSelectTab = (id: string, href: string) => {
    setSelectedFilter(id);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", href);
    }
  };

  const filter = selectedFilter;
  const activePath = ready ? getPath(progress.activePath ?? "") : undefined;

  // Filter track khusus koding (eksklusif 16 track tanpa modul bahasa)
  const displayedTracks = useMemo(() => {
    const codingTracks = tracks.filter((t) => t.slug !== "business-english");

    if (filter === "frontend") {
      return codingTracks.filter((t) =>
        ["html", "css", "javascript", "typescript", "react", "nextjs"].includes(t.slug)
      );
    }
    if (filter === "backend") {
      return codingTracks.filter((t) =>
        ["node-express", "laravel", "sql", "nosql"].includes(t.slug)
      );
    }
    if (filter === "devops") {
      return codingTracks.filter((t) =>
        ["git", "deployment", "ai-dev"].includes(t.slug)
      );
    }
    if (filter === "data") {
      return codingTracks.filter((t) =>
        ["python", "spreadsheet", "data-analysis"].includes(t.slug)
      );
    }

    // Default "semua": jika ada active path, urutkan sesuai path
    if (activePath) {
      return [
        ...activePath.trackSlugs
          .map((s) => codingTracks.find((t) => t.slug === s))
          .filter((t): t is (typeof tracks)[number] => Boolean(t)),
        ...codingTracks.filter((t) => !activePath.trackSlugs.includes(t.slug)),
      ];
    }
    return codingTracks;
  }, [filter, activePath]);

  return (
    <div className="space-y-10">
      {/* Header Halaman Materi Koding */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/[0.08] pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Katalog Belajar Koding
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              16 track spesialisasi rekayasa perangkat lunak. Praktik kode nyata langsung di browser.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/paths/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              <span>Career Paths</span>
              <span className="text-amber-500">→</span>
            </Link>
            <Link
              href="/bahasa"
              className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3.5 py-2 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-500/20 transition"
            >
              <span>Mode Bahasa</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Tab Filter Kategori Koding */}
        <div className="flex flex-wrap items-center gap-1.5 pt-3">
          {CATEGORIES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelectTab(item.id, item.href)}
              className={`cursor-pointer rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                filter === item.id
                  ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                  : "bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/[0.09]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Banner Career Path Aktif (Jika dipilih) */}
      {activePath && (
        <section className="relative overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-50 via-amber-100/40 to-white dark:from-amber-950/30 dark:via-slate-900 dark:to-slate-900 p-6 shadow-md backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Career Path Terpilih
              </span>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{activePath.icon}</span>
                <span>{activePath.title}</span>
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
                Katalog di bawah diurutkan otomatis mengikuti tahapan karier ini.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Link
                href="/paths/"
                className="cursor-pointer rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300 transition hover:bg-amber-500/20"
              >
                Ganti Path
              </Link>
              <button
                type="button"
                onClick={() => setActivePath(undefined)}
                className="cursor-pointer rounded-xl px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                Lepas Path
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Grid Kartu Track Koding */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {displayedTracks.map((track, i) => {
          const semuaItem = getTrackItems(track);
          const done = ready ? doneCount(track.slug) : 0;
          const total = ready ? totalCount(track.slug) : semuaItem.length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          const inPath = activePath?.trackSlugs.includes(track.slug);

          return (
            <Link
              key={track.slug}
              href={`/tracks/${track.slug}`}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] cursor-pointer ${
                inPath
                  ? "border-amber-500/50 bg-gradient-to-b from-amber-50/50 to-white dark:from-slate-900 dark:to-amber-950/20 shadow-xs"
                  : "border-slate-200 bg-white hover:border-amber-500/40 hover:bg-slate-50 dark:border-white/[0.08] dark:bg-slate-900/60 dark:hover:bg-slate-900/90 shadow-xs"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl text-white shadow-md ${track.color}`}
                  >
                    {track.icon}
                  </span>
                  {activePath && inPath ? (
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
                      Langkah {i + 1}
                    </span>
                  ) : (
                    <span className="rounded-full border border-slate-200 dark:border-white/[0.08] px-2.5 py-0.5 text-xs text-slate-500 dark:text-slate-400">
                      ±{track.hours} jam
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                    {track.title}
                  </h2>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{track.modules.length} modul</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {total > 0 ? (
                      <>
                        {done}/{total} selesai ({pct}%)
                        {ready && mode === "pilihan-ganda" && (
                          <span className="ml-1 text-purple-600 dark:text-purple-400">· susun kode</span>
                        )}
                      </>
                    ) : (
                      `${semuaItem.length} materi`
                    )}
                  </span>
                </div>

                {total > 0 && (
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-amber-500 to-amber-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:text-amber-600 dark:group-hover:text-amber-300">
                  <span>Buka Materi Track</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function TracksPage() {
  return (
    <Suspense fallback={<div className="min-h-[32rem]" />}>
      <TracksContent />
    </Suspense>
  );
}
