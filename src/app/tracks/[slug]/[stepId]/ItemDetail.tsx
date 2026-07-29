"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import StepView from "@/components/StepView";
import StepChoiceView from "@/components/StepChoiceView";
import QuizView from "@/components/QuizView";
import MateriView from "@/components/MateriView";
import { getTrack, getTrackItems } from "@/data/tracks";
import { useProgress } from "@/lib/progress";

export default function ItemDetail({
  slug,
  stepId,
}: {
  slug: string;
  stepId: string;
}) {
  const track = getTrack(slug);
  const { ready, mode, setMode, isDone, markDone } = useProgress();

  if (!track) notFound();

  const items = getTrackItems(track);
  const index = items.findIndex((it) => it.id === stepId);
  if (index === -1) notFound();

  const item = items[index];
  const prev = items[index - 1];
  const next = items[index + 1];
  const finished = ready && isDone(track.slug, item.id);

  const hasPilihanGanda = item.kind === "step" && Boolean(item.pilihanGanda);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <Link
          href={`/tracks/${track.slug}`}
          className="text-sm text-gold-700 hover:underline font-medium"
        >
          ← {track.title}
        </Link>
        <div className="flex flex-wrap items-center gap-4">
          {/* Segmented control pemilih mode global */}
          <div className="inline-flex rounded-lg border border-neutral-200 bg-neutral-100 p-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setMode("koding")}
              className={`rounded-md px-3 py-1.5 transition ${
                mode === "koding"
                  ? "bg-white text-neutral-900 shadow-sm font-semibold"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              ⌨️ Koding
            </button>
            <button
              type="button"
              onClick={() => setMode("pilihan-ganda")}
              className={`rounded-md px-3 py-1.5 transition ${
                mode === "pilihan-ganda"
                  ? "bg-white text-neutral-900 shadow-sm font-semibold"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              🔘 Pilihan Ganda
            </button>
          </div>

          <span className="text-sm text-neutral-500">
            {index + 1} / {items.length}
            {finished && <span className="ml-2 font-medium text-green-600">✓ selesai</span>}
          </span>
        </div>
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
        mode === "pilihan-ganda" ? (
          hasPilihanGanda ? (
            <StepChoiceView
              key={item.id}
              step={item}
              onPassed={() => markDone(track.slug, item.id, "pilihan-ganda")}
            />
          ) : (
            <div className="space-y-6">
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                ℹ️ Step ini belum tersedia dalam mode pilihan ganda. Menampilkan mode koding.
              </div>
              <StepView
                key={item.id}
                step={item}
                onPassed={() => markDone(track.slug, item.id, "koding")}
              />
            </div>
          )
        ) : (
          <StepView
            key={item.id}
            step={item}
            onPassed={() => markDone(track.slug, item.id, "koding")}
          />
        )
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
                ? "bg-gold-500 text-neutral-900 hover:bg-gold-400"
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
