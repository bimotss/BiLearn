"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import StepView from "@/components/StepView";
import StepSusunKodeView from "@/components/StepSusunKodeView";
import QuizView from "@/components/QuizView";
import MateriView from "@/components/MateriView";
import { getTrack, getTrackItems } from "@/data/tracks";
import { useProgress } from "@/lib/progress";
import { usePintasanCtrlEnter } from "@/lib/pintasan";

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

  /**
   * Lolos di sesi ini — bukan sekadar "pernah selesai". Pintasan Ctrl+Enter
   * untuk pindah materi hanya hidup setelah user benar-benar lolos di layar
   * ini. Kalau patokannya progres tersimpan, membuka ulang materi yang sudah
   * selesai membuat Ctrl+Enter langsung melompat tanpa menjalankan tes.
   */
  const kunciItem = `${slug}/${stepId}`;
  const [sesi, setSesi] = useState({ kunci: kunciItem, lolos: false });
  // Kunci ikut disimpan supaya status lolos hangus sendiri saat pindah materi
  // — tanpa useEffect yang memanggil setState dan memicu render beruntun.
  const lolosSesi = sesi.kunci === kunciItem && sesi.lolos;

  if (!track) notFound();

  const items = getTrackItems(track);
  const index = items.findIndex((it) => it.id === stepId);
  if (index === -1) notFound();

  const item = items[index];
  const prev = items[index - 1];
  const next = items[index + 1];
  const hasSusunKode = item.kind === "step" && Boolean(item.susunKode);

  // Step tanpa varian dikerjakan lewat editor, jadi statusnya ada di dunia
  // koding — walaupun mode aktifnya pilihan ganda. Tanpa penyesuaian ini,
  // user menyelesaikan step lalu tidak melihat tanda selesai sama sekali.
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

  /**
   * Ctrl+Enter kedua. Penekanan pertama dipakai komponen latihan untuk
   * menjalankan tes; komponen itu melepas pintasannya begitu lolos, jadi
   * penekanan berikutnya sampai ke sini.
   */
  function selesaikan(dunia: Parameters<typeof markDone>[2]) {
    markDone(track!.slug, item.id, dunia);
    setSesi({ kunci: kunciItem, lolos: true });
  }

  usePintasanCtrlEnter(lolosSesi, () => router.push(tautanLanjut));

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
          onPassed={() => selesaikan("keduanya")}
        />
      ) : item.kind === "step" ? (
        mode === "pilihan-ganda" ? (
          hasSusunKode ? (
            <StepSusunKodeView
              key={item.id}
              step={item}
              onPassed={() => selesaikan("pilihan-ganda")}
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
                onPassed={() => selesaikan("koding")}
              />
            </div>
          )
        ) : (
          <StepView
            key={item.id}
            step={item}
            onPassed={() => selesaikan("koding")}
          />
        )
      ) : (
        <QuizView
          key={item.id}
          quiz={item}
          onPassed={() => selesaikan("keduanya")}
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
            {lolosSesi && (
              <span className="ml-2 font-normal opacity-70">Ctrl + Enter</span>
            )}
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
