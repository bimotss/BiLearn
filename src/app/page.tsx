"use client";

import Link from "next/link";
import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { tracks, getTrackItems } from "@/data/tracks";
import { getPath } from "@/data/paths";
import { useProgress } from "@/lib/progress";
import { useFlashcardProgress } from "@/lib/flashcards-progress";
import { japaneseCards } from "@/data/flashcards";

function HomeContent() {
  const searchParams = useSearchParams();
  const kategori = searchParams.get("kategori") === "bahasa" ? "bahasa" : "code";
  const { progress, ready, mode, doneCount, totalCount, setActivePath } =
    useProgress();
  const { getTotalMemorizedCount } = useFlashcardProgress();
  const flashcardCardIds = useMemo(() => japaneseCards.map((c) => c.id), []);
  const flashcardDone = ready ? getTotalMemorizedCount(flashcardCardIds) : 0;
  const flashcardPct = Math.round((flashcardDone / japaneseCards.length) * 100);

  const beTrack = tracks.find((t) => t.slug === "business-english");
  const beItems = useMemo(() => (beTrack ? getTrackItems(beTrack) : []), [beTrack]);
  const beDone = ready && beTrack ? doneCount(beTrack.slug) : 0;
  const beTotal = ready && beTrack ? totalCount(beTrack.slug) : beItems.length;
  const bePct = beTotal > 0 ? Math.round((beDone / beTotal) * 100) : 0;

  const activePath = ready ? getPath(progress.activePath ?? "") : undefined;
  const activePathKategori = kategori === "code" ? activePath : undefined;

  // Untuk kategori code: tampilkan seluruh track selain business-english
  const tracksKategori = tracks.filter((track) => track.slug !== "business-english");

  const ordered = activePathKategori
    ? [
        ...activePathKategori.trackSlugs
          .map((s) => tracks.find((t) => t.slug === s))
          .filter((t) => t && t.slug !== "business-english")
          .filter((t): t is (typeof tracks)[number] => Boolean(t)),
        ...tracksKategori.filter((t) => !activePathKategori.trackSlugs.includes(t.slug)),
      ]
    : tracksKategori;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative space-y-5 pt-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
          <span>Platform Belajar Interaktif 2026 · Kurikulum Standar Industri</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
          Belajar Skill Kerja yang{" "}
          <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Benar-Benar Kepake
          </span>
        </h1>

        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg leading-relaxed">
          Bukan sekadar menonton video pasif. Tulis kode nyata di browser dengan feedback otomatis,
          kuasai kurikulum berbasis kebutuhan lowongan kerja riil, dan belajar dengan ritmemu sendiri.
        </p>

        {/* Platform Highlights Bar */}
        <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-3.5 backdrop-blur-sm shadow-xs">
            <div className="text-xl font-black text-amber-800 dark:text-amber-400">17 Track</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Spesialisasi Lengkap</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-3.5 backdrop-blur-sm shadow-xs">
            <div className="text-xl font-black text-emerald-800 dark:text-emerald-400">880+ Latihan</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Praktik Kode Nyata</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-3.5 backdrop-blur-sm shadow-xs">
            <div className="text-xl font-black text-purple-800 dark:text-purple-400">Dual Mode</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Ngetik & Susun Logika</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-3.5 backdrop-blur-sm shadow-xs">
            <div className="text-xl font-black text-cyan-800 dark:text-cyan-400">100% Terbuka</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Gratis Tanpa Paywall</div>
          </div>
        </div>
      </section>

      {/* Active Learning Path or Discovery Callout */}
      {kategori === "code" &&
        (activePathKategori ? (
          <section className="category-card-active-code relative overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-50 via-amber-100/40 to-white dark:from-amber-950/30 dark:via-slate-900 dark:to-slate-900 p-6 shadow-md dark:shadow-xl backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  <span>✦ Career Path Terpilih</span>
                </div>
                <p className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{activePathKategori.icon}</span>
                  <span>{activePathKategori.title}</span>
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
                  Katalog di bawah telah diurutkan otomatis mengikuti tahapan karier ini.
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Link
                  href="/paths"
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
        ) : (
          <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-6 backdrop-blur-md shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  🎯 Belum tahu harus mulai dari mana?
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl">
                  Pilih tujuan kariermu (Frontend, Backend, Fullstack, atau Data), sistem kami akan menyusunkan urutan belajarnya.
                </p>
              </div>
              <Link
                href="/paths"
                className="inline-flex items-center justify-center gap-2 shrink-0 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition hover:from-amber-300 hover:to-amber-400 cursor-pointer"
              >
                <span>Pilih Learning Path</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </section>
        ))}

      {/* Main Catalog Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] pb-4">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {kategori === "bahasa"
                ? "Katalog Pembelajaran Bahasa"
                : activePathKategori
                  ? `Urutan Track: ${activePathKategori.title}`
                  : "Katalog Track Coding"}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {kategori === "bahasa"
                ? "Tersedia modul interaktif dan flashcard dengan spaced repetition"
                : "Semua materi terbuka secara gratis. Belajar mandiri sesuai ritmemu."}
            </p>
          </div>
          <span className="hidden sm:inline-block text-xs font-medium text-slate-500 dark:text-slate-400">
            {kategori === "bahasa" ? "2 Program Aktif" : `${ordered.length} Track Spesialisasi`}
          </span>
        </div>

        {kategori === "bahasa" ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Card 1: Bahasa Inggris */}
            <Link
              href="/bahasa/inggris"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-6 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/90 hover:shadow-lg dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-md shadow-blue-500/30">
                    🇬🇧
                  </span>
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                    1 Program Belajar
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                    Bahasa Inggris Bisnis & Kerja
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Kuasai komunikasi bisnis, penulisan email profesional, etika korespondensi, dan tata kalimat praktis untuk lingkungan kerja global.
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
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-900/60 p-6 transition-all duration-300 hover:border-rose-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/90 hover:shadow-lg dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-600 text-2xl text-white shadow-md shadow-rose-500/30">
                    🇯🇵
                  </span>
                  <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-700 dark:text-rose-300">
                    Hiragana · Katakana · N5
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors">
                    Bahasa Jepang (日本語)
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Pelajari sistem huruf dari nol (Hiragana & Katakana), kaidah urutan goresan (stroke order), serta hafalan kosakata JLPT N5 via kartu interaktif.
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
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ordered.map((track, i) => {
              const semuaItem = getTrackItems(track);
              const done = ready ? doneCount(track.slug) : 0;
              const total = ready ? totalCount(track.slug) : semuaItem.length;
              const pct = total > 0 ? Math.round((done / total) * 100) : 0;
              const inPath = activePathKategori?.trackSlugs.includes(track.slug);

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
                      {activePathKategori && inPath && (
                        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">
                          Langkah {i + 1}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                        {track.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {track.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>±{track.hours} jam</span>
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {total > 0 ? (
                          <>
                            {done}/{total} selesai ({pct}%)
                            {ready && mode === "pilihan-ganda" && (
                              <span className="ml-1 text-purple-600 dark:text-purple-400">· susun kode</span>
                            )}
                          </>
                        ) : (
                          `${track.modules.length} modul`
                        )}
                      </span>
                    </div>

                    {total > 0 && (
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            ready && mode === "pilihan-ganda"
                              ? "bg-gradient-to-r from-purple-500 to-indigo-400"
                              : "bg-gradient-to-r from-amber-500 to-amber-300"
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-[32rem]" />}>
      <HomeContent />
    </Suspense>
  );
}
