"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrack, getTrackItems } from "@/data/tracks";
import { useProgress } from "@/lib/progress";

export default function TrackDetail({ slug }: { slug: string }) {
  const track = getTrack(slug);
  const { ready, isDone, doneCount } = useProgress();

  if (!track) notFound();

  const items = getTrackItems(track);
  const done = ready ? doneCount(track.slug) : 0;
  const pct = items.length > 0 ? Math.round((done / items.length) * 100) : 0;

  return (
    <div className="space-y-8">
      <Link href="/" className="text-sm text-gold-700 hover:underline">
        ← Semua track
      </Link>

      <section className="flex items-start gap-4">
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl text-white ${track.color}`}
        >
          {track.icon}
        </span>
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">{track.title}</h1>
          <p className="text-neutral-600">{track.description}</p>
          <p className="text-sm text-neutral-500">
            ±{track.hours} jam{items.length > 0 && ` · ${done}/${items.length} selesai (${pct}%)`}
          </p>
        </div>
      </section>

      {track.recommendedPrereqs.length > 0 && (
        <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
          💡 <span className="font-medium">Saran (bukan syarat):</span>{" "}
          sebaiknya selesaikan dulu{" "}
          {track.recommendedPrereqs.map((p, i) => {
            const t = getTrack(p);
            return (
              <span key={p}>
                {i > 0 && ", "}
                <Link href={`/tracks/${p}`} className="font-medium underline">
                  {t?.title ?? p}
                </Link>
              </span>
            );
          })}
          . Tapi semua materi tetap terbuka — kamu yang menentukan.
        </div>
      )}

      {track.modules.map((mod, mi) => (
        <section key={mod.slug} className="rounded-xl border border-neutral-200 p-6">
          <h2 className="font-bold">
            Modul {mi + 1}: {mod.title}
          </h2>
          <p className="mt-1 text-sm text-neutral-600">{mod.description}</p>

          {/* Silabus: bab-bab yang dibahas modul ini */}
          {mod.topics.length > 0 && (
            <details className="mt-3" open={mod.items.length === 0}>
              <summary className="cursor-pointer text-sm font-medium text-neutral-500 hover:text-gold-700">
                {mod.topics.length} bab dalam modul ini
              </summary>
              <ol className="mt-2 space-y-1 border-l-2 border-neutral-100 pl-4">
                {mod.topics.map((topic, ti) => (
                  <li key={ti} className="text-sm text-neutral-600">
                    <span className="mr-1.5 text-neutral-400">
                      {mi + 1}.{ti + 1}
                    </span>
                    {topic}
                  </li>
                ))}
              </ol>
            </details>
          )}

          {mod.items.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {mod.items.map((item) => {
                const finished = ready && isDone(track.slug, item.id);
                return (
                  <li key={item.id}>
                    <Link
                      href={`/tracks/${track.slug}/${item.id}`}
                      className="flex items-center gap-3 rounded-lg border border-neutral-200 px-4 py-3 transition hover:border-gold-400 hover:bg-gold-50"
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                          finished
                            ? "bg-green-500 text-white"
                            : "bg-neutral-100 text-neutral-400"
                        }`}
                      >
                        {finished ? "✓" : item.kind === "quiz" ? "?" : item.kind === "materi" ? "📖" : "‹›"}
                      </span>
                      <span className="flex-1">{item.title}</span>
                      <span className="text-xs uppercase tracking-wide text-neutral-400">
                        {item.kind === "quiz" ? "Kuis" : item.kind === "materi" ? "Materi" : "Praktek"}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-3 text-sm italic text-neutral-400">
              Silabus siap — step interaktifnya sedang disiapkan.
            </p>
          )}
        </section>
      ))}
    </div>
  );
}
