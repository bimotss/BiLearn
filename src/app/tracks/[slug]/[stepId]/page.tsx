"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import StepView from "@/components/StepView";
import QuizView from "@/components/QuizView";
import MateriView from "@/components/MateriView";
import { getTrack, getTrackItems } from "@/data/tracks";
import { useProgress } from "@/lib/progress";

export default function ItemPage() {
  const { slug, stepId } = useParams<{ slug: string; stepId: string }>();
  const track = getTrack(slug);
  const { ready, isDone, markDone } = useProgress();

  if (!track) notFound();

  const items = getTrackItems(track);
  const index = items.findIndex((it) => it.id === stepId);
  if (index === -1) notFound();

  const item = items[index];
  const prev = items[index - 1];
  const next = items[index + 1];
  const finished = ready && isDone(track.slug, item.id);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/tracks/${track.slug}`}
          className="text-sm text-blue-600 hover:underline"
        >
          ← {track.title}
        </Link>
        <span className="text-sm text-neutral-500">
          {index + 1} / {items.length}
          {finished && <span className="ml-2 text-green-600">✓ selesai</span>}
        </span>
      </div>

      <h1 className="text-2xl font-bold">
        {item.kind === "quiz" ? "🧠 " : item.kind === "materi" ? "📖 " : ""}
        {item.title}
      </h1>

      {item.kind === "materi" ? (
        <MateriView
          key={item.id}
          materi={item}
          onPassed={() => markDone(track.slug, item.id)}
        />
      ) : item.kind === "step" ? (
        <StepView
          key={item.id}
          step={item}
          onPassed={() => markDone(track.slug, item.id)}
        />
      ) : (
        <QuizView
          key={item.id}
          quiz={item}
          onPassed={() => markDone(track.slug, item.id)}
        />
      )}

      <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
        {prev ? (
          <Link
            href={`/tracks/${track.slug}/${prev.id}`}
            className="rounded-lg border border-neutral-300 px-5 py-2.5 text-neutral-700 hover:bg-neutral-100"
          >
            ← Sebelumnya
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/tracks/${track.slug}/${next.id}`}
            className={`rounded-lg px-5 py-2.5 font-medium ${
              finished
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            Berikutnya →
          </Link>
        ) : (
          <Link
            href={`/tracks/${track.slug}`}
            className="rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white hover:bg-green-700"
          >
            Selesai — kembali ke track 🎉
          </Link>
        )}
      </div>
    </div>
  );
}
