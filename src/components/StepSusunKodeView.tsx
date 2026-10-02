"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Step } from "@/lib/types";
import { gabungPotongan, jalankanTes, type HasilTes } from "@/lib/tes";
import { usePintasanCtrlEnter } from "@/lib/pintasan";
import { InlineMarkdown } from "./MarkdownRenderer";
import Tuts from "./Tuts";

interface Props {
  step: Step;
  onPassed: () => void;
  isLanguageTrack?: boolean;
}

/** Kepingan di kolam, dengan penanda asal supaya urutannya tetap acak-tetap. */
interface Keping {
  key: string;
  teks: string;
}

/**
 * Mode susun kode/kalimat: user merangkai teks dari kepingan yang tersedia,
 * bukan mengetiknya. Hasil rangkaian dinilai dengan `tests` step yang sama
 * persis dengan mode ngetik.
 */
export default function StepSusunKodeView({
  step,
  onPassed,
  isLanguageTrack,
}: Props) {
  const data = step.susunKode;

  const [tersusun, setTersusun] = useState<Keping[]>([]);
  const [hasil, setHasil] = useState<HasilTes[] | null>(null);
  const [lulus, setLulus] = useState(false);
  const [lihatSolusi, setLihatSolusi] = useState(false);
  const [diseret, setDiseret] = useState<number | null>(null);
  const [sasaran, setSasaran] = useState<number | null>(null);
  const refKeping = useRef<(HTMLButtonElement | null)[]>([]);
  const fokusKe = useRef<number | null>(null);

  useEffect(() => {
    if (fokusKe.current === null) return;
    refKeping.current[fokusKe.current]?.focus();
    fokusKe.current = null;
  }, [tersusun]);

  const kolam = useMemo<Keping[]>(() => {
    if (!data) return [];
    const semua: Keping[] = [
      ...data.potongan.map((teks, i) => ({ key: `b${i}`, teks })),
      ...data.pengecoh.map((teks, i) => ({ key: `p${i}`, teks })),
    ];
    return [...semua].sort((a, b) => sidik(a.teks) - sidik(b.teks));
  }, [data]);

  function periksa() {
    if (!data || lulus || !step.tests.length || tersusun.length === 0) return;
    const res = jalankanTes(
      step.tests,
      gabungPotongan(
        tersusun.map((k) => k.teks),
        data.pemisah ?? " "
      )
    );
    setHasil(res);
    if (res.every((r) => r.pass)) {
      setLulus(true);
      onPassed();
    }
  }

  usePintasanCtrlEnter(!lulus, periksa);

  if (!data) return null;

  const pemisah = data.pemisah ?? " ";
  const pertanyaan = data.question ?? step.instruction;
  const dipakai = new Set(tersusun.map((k) => k.key));
  const sisa = kolam.filter((k) => !dipakai.has(k.key));
  const kodeTersusun = gabungPotongan(
    tersusun.map((k) => k.teks),
    pemisah
  );

  function tambah(k: Keping) {
    if (lulus) return;
    setTersusun((t) => [...t, k]);
    setHasil(null);
  }

  function hapus(index: number) {
    if (lulus) return;
    setTersusun((t) => t.filter((_, i) => i !== index));
    setHasil(null);
  }

  function pindah(dari: number, ke: number) {
    if (lulus) return;
    if (ke < 0 || ke >= tersusun.length || dari === ke) return;
    setTersusun((t) => {
      const salinan = [...t];
      const [diambil] = salinan.splice(dari, 1);
      salinan.splice(ke, 0, diambil);
      return salinan;
    });
    setHasil(null);
    fokusKe.current = ke;
  }

  function tombolKeping(e: React.KeyboardEvent, i: number) {
    if (lulus) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      pindah(i, i - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      pindah(i, i + 1);
    } else if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      hapus(i);
    }
  }

  const gagal = hasil?.filter((r) => !r.pass) ?? [];

  return (
    <div className="space-y-6">
      {/* Penjelasan Konsep */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-5 backdrop-blur-sm shadow-xs">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          Penjelasan Materi
        </h2>
        <div className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          <InlineMarkdown text={step.explanation} />
        </div>
      </div>

      {/* Contoh Acuan */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/60 p-5 backdrop-blur-sm space-y-3 shadow-xs">
        <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
          <span>👀 Contoh Acuan</span>
        </p>
        <pre className="overflow-x-auto rounded-xl border border-slate-300 dark:border-white/[0.06] bg-slate-950 dark:bg-[#090d16] p-3.5 font-mono text-xs text-amber-300 dark:text-amber-200/90 leading-relaxed">
          {step.example.code}
        </pre>
        <div className="rounded-lg border border-slate-200 dark:border-white/[0.06] bg-slate-100 dark:bg-slate-800/40 p-3 text-xs text-slate-700 dark:text-slate-300">
          <span className="font-semibold text-slate-900 dark:text-slate-200">Hasil Nyata: </span>
          <span className="font-mono text-slate-600 dark:text-slate-400">{step.example.output}</span>
        </div>
        {step.example.note && (
          <p className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
            <span>💡</span>
            <span>{step.example.note}</span>
          </p>
        )}
      </div>

      {/* Papan Tantangan Susun Kode */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-slate-900/70 p-6 backdrop-blur-md space-y-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            <span>🧩 Tantangan Susun Logika</span>
          </div>
          <div className="mt-2 text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
            <InlineMarkdown text={pertanyaan} />
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {isLanguageTrack ? "Rangkai kalimatnya" : "Rangkai kodenya"} dari kepingan di bawah. Hati-hati dengan kepingan pengecoh.
          </p>
        </div>

        {/* Papan Susunan (Drop Area) */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
            <span>Papan Susunanmu</span>
            <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
              Geser untuk atur posisi atau gunakan panah keyboard
            </span>
          </div>

          <ol
            aria-label={isLanguageTrack ? "Susunan kalimat" : "Susunan kode"}
            className="flex min-h-[4rem] flex-wrap items-center gap-2 rounded-xl border border-dashed border-amber-400/80 dark:border-amber-500/40 bg-amber-500/5 dark:bg-[#090d16] p-3.5"
          >
            {tersusun.length === 0 && (
              <li className="text-xs text-slate-500 italic">
                Belum ada kepingan tersusun. Klik salah satu kepingan di bawah.
              </li>
            )}
            {tersusun.map((k, i) => (
              <li
                key={`${k.key}-${i}`}
                onDragOver={(e) => {
                  if (diseret === null) return;
                  e.preventDefault();
                  setSasaran(i);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (diseret !== null) pindah(diseret, i);
                  setDiseret(null);
                  setSasaran(null);
                }}
                className={`flex items-center rounded-lg ${
                  sasaran === i && diseret !== null && diseret !== i
                    ? "ring-2 ring-amber-400"
                    : ""
                } ${diseret === i ? "opacity-50" : ""}`}
              >
                <button
                  type="button"
                  ref={(el) => {
                    refKeping.current[i] = el;
                  }}
                  draggable={!lulus}
                  onDragStart={() => setDiseret(i)}
                  onDragEnd={() => {
                    setDiseret(null);
                    setSasaran(null);
                  }}
                  onKeyDown={(e) => tombolKeping(e, i)}
                  disabled={lulus}
                  className="cursor-grab rounded-l-lg border border-r-0 border-amber-400 bg-amber-100 text-amber-950 dark:border-amber-500/50 dark:bg-amber-500/15 dark:text-amber-200 px-3 py-1.5 font-mono text-xs sm:text-sm font-semibold transition hover:bg-amber-200 dark:hover:bg-amber-500/25 active:cursor-grabbing disabled:cursor-default"
                >
                  {k.teks}
                </button>
                {!lulus && (
                  <button
                    type="button"
                    onClick={() => hapus(i)}
                    className="cursor-pointer rounded-r-lg border border-amber-400 bg-amber-100 text-amber-800 dark:border-amber-500/50 dark:bg-amber-500/15 dark:text-amber-400 px-2 py-1.5 text-xs hover:bg-rose-100 hover:text-rose-700 dark:hover:bg-rose-500/20 dark:hover:text-rose-300 hover:border-rose-400 transition-colors"
                    aria-label={`Keluarkan ${k.teks}`}
                  >
                    ×
                  </button>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Kolam Kepingan yang Tersedia */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            {isLanguageTrack ? "Potongan Kalimat Tersedia:" : "Kepingan Kode Tersedia:"}
          </p>
          <ul className="flex flex-wrap gap-2">
            {sisa.length === 0 && (
              <li className="text-xs text-slate-500 italic">
                Semua potongan kepingan telah masuk ke papan susunan.
              </li>
            )}
            {sisa.map((k) => (
              <li key={k.key}>
                <button
                  type="button"
                  onClick={() => tambah(k)}
                  disabled={lulus}
                  className="cursor-pointer rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 font-mono text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 shadow-xs transition hover:border-amber-500 dark:hover:border-amber-400/60 hover:bg-slate-200 dark:hover:bg-slate-700/80 hover:text-slate-950 dark:hover:text-white disabled:opacity-40"
                >
                  {k.teks}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Pratinjau Teks yang Terbentuk */}
        {tersusun.length > 0 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              {isLanguageTrack ? "Kalimat Terbentuk:" : "Kode Terbentuk:"}
            </p>
            <pre className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#090d16] p-3 font-mono text-xs text-slate-800 dark:text-slate-200 leading-relaxed">
              {kodeTersusun}
            </pre>
          </div>
        )}

        {/* Tombol Periksa & Reset */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={periksa}
            disabled={lulus || tersusun.length === 0}
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:scale-100"
          >
            <span>{isLanguageTrack ? "Periksa Susunan Kalimat" : "Periksa Susunan Kode"}</span>
            <span className="font-mono text-xs opacity-75">(Ctrl + Enter)</span>
          </button>
          {tersusun.length > 0 && !lulus && (
            <button
              type="button"
              onClick={() => {
                setTersusun([]);
                setHasil(null);
              }}
              className="cursor-pointer rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
            >
              Bongkar Semua
            </button>
          )}
        </div>

        {/* Umpan Balik Hasil Pengujian */}
        {hasil && (
          <div
            role="status"
            aria-live="polite"
            className={`space-y-2.5 rounded-2xl border p-5 ${
              lulus
                ? "border-emerald-400/60 bg-emerald-50 dark:border-emerald-500/40 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200 shadow-lg shadow-emerald-500/10"
                : "border-amber-400/60 bg-amber-50 dark:border-amber-500/40 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200"
            }`}
          >
            <p className="font-bold text-base">
              {lulus
                ? isLanguageTrack
                  ? "✅ Susunan kalimat tepat dan terverifikasi!"
                  : "🎉 Susunan kodemu benar dan lolos pengujian!"
                : "❌ Susunan belum sesuai"}
            </p>
            {lulus ? (
              <div className="space-y-2 text-sm leading-relaxed">
                <InlineMarkdown text={data.explanation} />
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  Tekan <Tuts>Ctrl</Tuts> + <Tuts>Enter</Tuts> untuk melanjutkan ke langkah berikutnya.
                </p>
              </div>
            ) : (
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {gagal.map((r, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span>•</span>
                    <span>{r.message}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Kunci Jawaban Referensi */}
      <div>
        <button
          type="button"
          onClick={() => setLihatSolusi((s) => !s)}
          className="cursor-pointer rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
        >
          {lihatSolusi
            ? isLanguageTrack
              ? "Sembunyikan Kalimat Jawaban"
              : "Sembunyikan Solusi Kode"
            : isLanguageTrack
              ? "Lihat Kalimat Jawaban"
              : "Lihat Solusi Kode"}
        </button>

        {lihatSolusi && (
          <div className="mt-3 rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-950 dark:bg-[#090d16] p-4 shadow-md">
            <p className="mb-2 font-mono text-xs text-slate-400">
              {isLanguageTrack
                ? "// Bentuk kalimat aslinya saat ditulis langsung:"
                : "// Bentuk kode aslinya saat diketik langsung:"}
            </p>
            <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-emerald-400">
              {step.solution}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

function sidik(teks: string): number {
  let n = 0;
  for (let i = 0; i < teks.length; i++) {
    n = (n * 31 + teks.charCodeAt(i)) % 100003;
  }
  return n;
}
