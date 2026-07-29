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
  const { ready, mode, isDone, isDoneDi, markDone } = useProgress();

  if (!track) notFound();

  const items = getTrackItems(track);
  const index = items.findIndex((it) => it.id === stepId);
  if (index === -1) notFound();

  const item = items[index];
  const prev = items[index - 1];
  const next = items[index + 1];
  const hasPilihanGanda = item.kind === "step" && Boolean(item.pilihanGanda);

  // Step tanpa varian dikerjakan lewat editor, jadi statusnya ada di dunia
  // koding — walaupun mode aktifnya pilihan ganda. Tanpa penyesuaian ini,
  // user menyelesaikan step lalu tidak melihat tanda selesai sama sekali.
  const diLuarMode =
    item.kind === "step" && mode === "pilihan-ganda" && !hasPilihanGanda;
  const finished =
    ready &&
    (diLuarMode
      ? isDoneDi(track.slug, item.id, "koding")
      : isDone(track.slug, item.id));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4">
        <Link
          href={`/tracks/${track.slug}`}
          className="text-sm text-gold-700 hover:underline font-medium"
        >
          ← {track.title}
        </Link>
        {/*
          Pemilih mode sekarang tinggal satu, di header utama (PenunjukMode),
          supaya tidak ada dua sumber kebenaran di layar yang sama — dan supaya
          mode juga terlihat dari halaman depan.
        */}
        <span className="text-sm text-neutral-500">
          {index + 1} / {items.length}
          {finished && (
            <span
              className={`ml-2 font-medium ${
                mode === "pilihan-ganda" ? "text-purple-700" : "text-green-600"
              }`}
            >
              ✓ selesai
            </span>
          )}
        </span>
      </div>

      <h1 className="text-2xl font-bold">
        {item.kind === "quiz" ? "🧠 " : item.kind === "materi" ? "📖 " : ""}
        {item.title}
      </h1>

      {item.kind === "materi" ? (
        // Materi & kuis isinya sama di dua mode, jadi sekali selesai berlaku
        // di kedua dunia.
        <MateriView
          key={item.id}
          materi={item}
          onPassed={() => markDone(track.slug, item.id, "keduanya")}
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
                ℹ️ Step ini belum punya soal pilihan ganda, jadi yang tampil
                mode ngetik. Kalau kamu menyelesaikannya di sini, itu tercatat
                sebagai pencapaian mode ngetik — bukan mode pilihan ganda,
                karena kamu memang mengetik kodenya sendiri.
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
          onPassed={() => markDone(track.slug, item.id, "keduanya")}
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
