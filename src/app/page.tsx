"use client";

import Link from "next/link";
import { tracks, getTrackItems } from "@/data/tracks";
import { getPath } from "@/data/paths";
import { useProgress } from "@/lib/progress";

export default function HomePage() {
  const { progress, ready, doneCount, setActivePath } = useProgress();
  const activePath = ready ? getPath(progress.activePath ?? "") : undefined;

  // Dengan path aktif: track diurutkan sesuai path (sisanya di bawah).
  // Tanpa path: semua track urutan default.
  const ordered = activePath
    ? [
        ...activePath.trackSlugs
          .map((s) => tracks.find((t) => t.slug === s))
          .filter((t): t is (typeof tracks)[number] => Boolean(t)),
        ...tracks.filter((t) => !activePath.trackSlugs.includes(t.slug)),
      ]
    : tracks;

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">
          Belajar coding yang{" "}
          <span className="text-blue-600">kepake di dunia kerja</span>
        </h1>
        <p className="max-w-2xl text-neutral-600">
          Kurikulum disusun dari skill yang benar-benar diminta lowongan kerja.
          Semua materi terbuka — mulai dari mana pun, atau pilih learning path
          sesuai tujuan kariermu.
        </p>
      </section>

      {activePath ? (
        <section className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-blue-700">Path aktif</p>
              <p className="text-lg font-bold text-blue-900">
                {activePath.icon} {activePath.title}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/paths"
                className="rounded-lg border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
              >
                Ganti path
              </Link>
              <button
                onClick={() => setActivePath(undefined)}
                className="rounded-lg px-4 py-2 text-sm text-blue-600 hover:bg-blue-100"
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
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            Pilih Learning Path
          </Link>
        </section>
      )}

      <section>
        <h2 className="mb-4 text-xl font-bold">
          {activePath ? `Urutan track: ${activePath.title}` : "Semua Track"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((track, i) => {
            const items = getTrackItems(track);
            const done = ready ? doneCount(track.slug) : 0;
            const pct =
              items.length > 0 ? Math.round((done / items.length) * 100) : 0;
            const inPath = activePath?.trackSlugs.includes(track.slug);
            return (
              <Link
                key={track.slug}
                href={`/tracks/${track.slug}`}
                className={`group rounded-xl border p-5 transition hover:shadow-md ${
                  inPath ? "border-blue-300" : "border-neutral-200"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-xl text-white ${track.color}`}
                  >
                    {track.icon}
                  </span>
                  {activePath && inPath && (
                    <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      Langkah {i + 1}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-bold group-hover:text-blue-600">
                  {track.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  {track.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
                  <span>±{track.hours} jam</span>
                  {items.length > 0 ? (
                    <span>
                      {done}/{items.length} selesai ({pct}%)
                    </span>
                  ) : (
                    <span>{track.modules.length} modul</span>
                  )}
                </div>
                {items.length > 0 && (
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all"
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
