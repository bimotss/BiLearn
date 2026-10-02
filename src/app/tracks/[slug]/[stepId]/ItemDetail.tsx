"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import StepView from "@/components/StepView";
import StepSusunKodeView from "@/components/StepSusunKodeView";
import QuizView from "@/components/QuizView";
import MateriView from "@/components/MateriView";
import { getTrack, getTrackItems, resolveItemAlias } from "@/data/tracks";
import { useProgress } from "@/lib/progress";
import { usePintasanCtrlEnter } from "@/lib/pintasan";
import Tuts from "@/components/Tuts";

export default function ItemDetail({
  slug,
  stepId,
}: {
  slug: string;
  stepId: string;
}) {
  const track = getTrack(slug);
  const { ready, mode, isDone, isDoneDi, markDone } = useProgress();
  const router = useRouter();

  const resolvedStepId = resolveItemAlias(stepId);

  useEffect(() => {
    if (stepId !== resolvedStepId) {
      router.replace(`/tracks/${slug}/${resolvedStepId}`);
    }
  }, [stepId, resolvedStepId, slug, router]);

  /**
   * Lolos di sesi ini — bukan sekadar "pernah selesai". Pintasan Ctrl+Enter
   * untuk pindah materi hanya hidup setelah user benar-benar lolos di layar ini.
   */
  const kunciItem = `${slug}/${resolvedStepId}`;
  const [sesi, setSesi] = useState({ kunci: kunciItem, lolos: false });
  const lolosSesi = sesi.kunci === kunciItem && sesi.lolos;

  if (!track) notFound();

  const items = getTrackItems(track);
  const index = items.findIndex((it) => it.id === resolvedStepId);
  if (index === -1) notFound();

  const item = items[index];
  const prev = items[index - 1];
  const next = items[index + 1];
  const hasSusunKode = item.kind === "step" && Boolean(item.susunKode);

  const diLuarMode =
    item.kind === "step" && mode === "pilihan-ganda" && !hasSusunKode;
  const finished =
    ready &&
    (diLuarMode
      ? isDoneDi(track.slug, item.id, "koding")
      : isDone(track.slug, item.id));

  const tautanLanjut = next
    ? `/tracks/${track.slug}/${next.id}`
    : `/tracks/${track.slug}`;

  function selesaikan(dunia: Parameters<typeof markDone>[2]) {
    markDone(track!.slug, item.id, dunia);
    setSesi({ kunci: kunciItem, lolos: true });
  }

  usePintasanCtrlEnter(lolosSesi, () => router.push(tautanLanjut));

  const stepProgressPct = Math.round(((index + 1) / items.length) * 100);

  return (
    <div className="w-full min-w-0 space-y-6">
      {/* Top Header & Breadcrumb Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/[0.08] pb-4">
        <Link
          href={`/tracks/${track.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors cursor-pointer"
        >
          <span aria-hidden="true">←</span>
          <span>{track.title}</span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Mini progress tracker */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {index + 1} / {items.length}
            </span>
            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <div
                className="h-full bg-amber-400 transition-all duration-300"
                style={{ width: `${stepProgressPct}%` }}
              />
            </div>
          </div>

          {finished && (
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                mode === "pilihan-ganda"
                  ? "border border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300"
                  : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
              }`}
            >
              ✓ Selesai
            </span>
          )}
        </div>
      </div>

      {/* Item Title & Badge */}
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-2">
          <span
            className={`rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
              item.kind === "quiz"
                ? "bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30"
                : item.kind === "materi"
                ? "bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30"
                : "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
            }`}
          >
            {item.kind === "quiz"
              ? "🧠 Kuis Evaluasi"
              : item.kind === "materi"
              ? "📖 Materi Bacaan"
              : mode === "pilihan-ganda" && hasSusunKode
              ? "🧩 Susun Potongan Kode"
              : "⌨️ Latihan Interaktif"}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white break-words">
          {item.title}
        </h1>
      </div>

      {/* Item Content View */}
      {item.kind === "materi" ? (
        <MateriView
          key={item.id}
          materi={item}
          onPassed={() => selesaikan("keduanya")}
        />
      ) : item.kind === "step" ? (
        mode === "pilihan-ganda" ? (
          hasSusunKode ? (
            <StepSusunKodeView
              key={item.id}
              step={item}
              onPassed={() => selesaikan("pilihan-ganda")}
              isLanguageTrack={track.slug === "business-english"}
            />
          ) : (
            <div className="space-y-6">
              <div className="rounded-xl border border-amber-400/60 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10 p-4 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                {track.slug === "business-english"
                  ? "ℹ️ Step ini belum memiliki mode susun kalimat, sehingga otomatis menggunakan editor ngetik. Pencapaian akan tetap tercatat di progres utama."
                  : "ℹ️ Step ini belum memiliki varian susun kode, sehingga yang tampil adalah mode ngetik. Penyelesaian akan tercatat sebagai pencapaian mode ngetik."}
              </div>
              <StepView
                key={item.id}
                step={item}
                onPassed={() => selesaikan("koding")}
                isLanguageTrack={track.slug === "business-english"}
              />
            </div>
          )
        ) : (
          <StepView
            key={item.id}
            step={item}
            onPassed={() => selesaikan("koding")}
            isLanguageTrack={track.slug === "business-english"}
          />
        )
      ) : (
        <QuizView
          key={item.id}
          quiz={item}
          onPassed={() => selesaikan("keduanya")}
        />
      )}

      {/* Bottom Navigation Control Bar */}
      <div className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-4 sm:p-5 backdrop-blur-sm shadow-xs">
        {prev ? (
          <Link
            href={`/tracks/${track.slug}/${prev.id}`}
            className="cursor-pointer rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
          >
            ← Sebelumnya
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/tracks/${track.slug}/${next.id}`}
            className={`cursor-pointer inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
              finished
                ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 hover:scale-[1.02]"
                : "border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>Berikutnya →</span>
            {lolosSesi && (
              <span className="hidden sm:inline-flex items-center gap-1 opacity-90">
                <Tuts>Ctrl</Tuts> + <Tuts>Enter</Tuts>
              </span>
            )}
          </Link>
        ) : (
          <Link
            href={`/tracks/${track.slug}`}
            className="cursor-pointer rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-md shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-300 transition-all hover:scale-[1.02]"
          >
            Selesai Track Ini 🎉
          </Link>
        )}
      </div>
    </div>
  );
}
