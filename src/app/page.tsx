"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { tracks, getTrackItems } from "@/data/tracks";
import { getPath } from "@/data/paths";
import { useProgress } from "@/lib/progress";

function HomeContent() {
  const searchParams = useSearchParams();
  const kategori = searchParams.get("kategori") === "bahasa" ? "bahasa" : "code";
  const { progress, ready, mode, doneCount, totalCount, setActivePath } =
    useProgress();
  const activePath = ready ? getPath(progress.activePath ?? "") : undefined;
  const activePathKategori = kategori === "code" ? activePath : undefined;

  // Dengan path aktif: track diurutkan sesuai path (sisanya di bawah).
  // Tanpa path: semua track urutan default.
  const tracksKategori = tracks.filter((track) =>
    kategori === "bahasa"
      ? track.slug === "business-english"
      : track.slug !== "business-english"
  );

  const ordered = activePathKategori
    ? [
        ...activePathKategori.trackSlugs
          .map((s) => tracks.find((t) => t.slug === s))
          .filter((t) =>
            kategori === "bahasa"
              ? t?.slug === "business-english"
              : t?.slug !== "business-english"
          )
          .filter((t): t is (typeof tracks)[number] => Boolean(t)),
        ...tracksKategori.filter((t) => !activePathKategori.trackSlugs.includes(t.slug)),
      ]
    : tracksKategori;

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
          Pilih dunia belajarmu
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Belajar skill yang <span className="text-gold-700">kepake</span>
        </h1>
        <p className="max-w-2xl text-neutral-600">
          Masuk ke ruang belajar yang sesuai tujuanmu. Pindah kategori kapan saja
          tanpa menghapus progress.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2" aria-label="Kategori belajar">
        <Link
          href="/"
          className={`rounded-2xl border p-6 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
            kategori === "code"
              ? "border-neutral-900 bg-neutral-900 text-white shadow-lg"
              : "border-neutral-200 bg-white"
          }`}
        >
          <span className="text-3xl" aria-hidden="true">⌘</span>
          <h2 className="mt-3 text-xl font-bold">Belajar Code</h2>
          <p className={`mt-1 text-sm ${kategori === "code" ? "text-neutral-300" : "text-neutral-600"}`}>
            HTML, CSS, JavaScript, framework, database, dan skill teknis untuk
            membangun produk digital.
          </p>
        </Link>
        <Link
          href="/?kategori=bahasa"
          className={`rounded-2xl border p-6 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
            kategori === "bahasa"
              ? "border-gold-500 bg-gold-50 shadow-lg"
              : "border-neutral-200 bg-white"
          }`}
        >
          <span className="text-3xl" aria-hidden="true">文</span>
          <h2 className="mt-3 text-xl font-bold">Belajar Bahasa</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Business English untuk email, meeting, presentasi, dan komunikasi
            profesional sehari-hari.
          </p>
        </Link>
      </section>

      {activePathKategori ? (
        <section className="rounded-xl border border-gold-200 bg-gold-50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-gold-800">Path aktif</p>
              <p className="text-lg font-bold text-gold-900">
                {activePathKategori.icon} {activePathKategori.title}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/paths"
                className="rounded-lg border border-gold-300 px-4 py-2 text-sm font-medium text-gold-800 hover:bg-gold-100"
              >
                Ganti path
              </Link>
              <button
                onClick={() => setActivePath(undefined)}
                className="rounded-lg px-4 py-2 text-sm text-gold-700 hover:bg-gold-100"
              >
                Lepas path
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-200 p-5">
          <p className="text-neutral-700">
            🎯 Belum tahu mulai dari mana? Pilih tujuan kariermu, kami susunkan
            urutannya.
          </p>
          <Link
            href="/paths"
            className="rounded-lg bg-gold-500 px-5 py-2.5 font-medium text-neutral-900 hover:bg-gold-400"
          >
            Pilih Learning Path
          </Link>
        </section>
      )}

      <section>
        <h2 className="mb-4 text-xl font-bold">
          {kategori === "bahasa"
            ? "Track Bahasa"
            : activePathKategori
              ? `Urutan track: ${activePathKategori.title}`
              : "Track Code"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((track, i) => {
            // Angka mengikuti dunia yang sedang aktif. Sebelum localStorage
            // terbaca, pakai jumlah item apa adanya supaya tidak ada lompatan
            // tampilan saat hydration.
            const semuaItem = getTrackItems(track);
            const done = ready ? doneCount(track.slug) : 0;
            const total = ready ? totalCount(track.slug) : semuaItem.length;
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            const inPath = activePathKategori?.trackSlugs.includes(track.slug);
            return (
              <Link
                key={track.slug}
                href={`/tracks/${track.slug}`}
                className={`group rounded-xl border p-5 transition hover:shadow-md ${
                  inPath ? "border-gold-300" : "border-neutral-200"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-xl text-white ${track.color}`}
                  >
                    {track.icon}
                  </span>
                  {activePathKategori && inPath && (
                    <span className="rounded-full bg-gold-100 px-2.5 py-0.5 text-xs font-medium text-gold-800">
                      Langkah {i + 1}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-bold group-hover:text-gold-700">
                  {track.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {track.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
                  <span>±{track.hours} jam</span>
                  {total > 0 ? (
                    <span>
                      {done}/{total} selesai ({pct}%)
                      {ready && mode === "pilihan-ganda" && (
                        <span className="ml-1 text-purple-700">· pilihan ganda</span>
                      )}
                    </span>
                  ) : (
                    <span>
                      {ready && mode === "pilihan-ganda"
                        ? "belum ada soal pilihan ganda"
                        : `${track.modules.length} modul`}
                    </span>
                  )}
                </div>
                {total > 0 && (
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className={`h-full rounded-full transition-all ${
                        ready && mode === "pilihan-ganda"
                          ? "bg-purple-500"
                          : "bg-gold-500"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                )}
              </Link>
            );
          })}
        </div>
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
